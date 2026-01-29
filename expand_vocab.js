const fs = require('fs');
const translatte = require('translatte');
const Kuroshiro = require('kuroshiro').default;
const KuromojiAnalyzer = require('kuroshiro-analyzer-kuromoji');

const VOCAB_FILE = 'www/data/vocabulary.json';
const LOCAL_SOURCE = 'JLPTWords.json';
const TARGET_TOTAL = 5000;

function capitalize(s) {
    if (!s) return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
}

// Wrapper for Translatte
async function translateText(text) {
    try {
        const res = await translatte(text, { to: 'id' });
        return res.text;
    } catch (e) {
        throw e;
    }
}

async function retryTranslate(text, retries = 3) {
    for (let i = 0; i < retries; i++) {
        try {
            const result = await translateText(text);
            if (result) return result;
        } catch (e) {
            // console.error(`Translate attempt ${i+1} failed for ${text}: ${e.message}`);
            if (i === retries - 1) throw e;
            await new Promise(r => setTimeout(r, 1000 * (i + 1)));
        }
    }
    throw new Error("Translation failed");
}

async function main() {
    // 1. Load Current Vocab
    let currentData = { kotoba: [] };
    if (fs.existsSync(VOCAB_FILE)) {
        currentData = JSON.parse(fs.readFileSync(VOCAB_FILE, 'utf8'));
    }
    const currentCount = currentData.kotoba.length;
    console.log(`Current vocabulary size: ${currentCount}`);

    if (currentCount >= TARGET_TOTAL) {
        console.log('Already reached target size.');
        return;
    }

    let needed = TARGET_TOTAL - currentCount;
    console.log(`Plan to add ${needed} new words.`);

    // 2. Load Source Data
    console.log('Loading source data form local file...');
    let sourceMap = {};
    try {
        sourceMap = JSON.parse(fs.readFileSync(LOCAL_SOURCE, 'utf8'));
    } catch (e) {
        console.error('Failed to read JLPTWords.json', e);
        return;
    }

    // 3. Convert to Array and Sort
    const levels = { 'N5': 1, 'N4': 2, 'N3': 3, 'N2': 4, 'N1': 5 };

    let candidates = Object.entries(sourceMap).map(([word, level]) => ({
        word: word,
        level: level,
        levelRank: levels[level] || 99
    }));

    candidates.sort((a, b) => {
        if (a.levelRank !== b.levelRank) return a.levelRank - b.levelRank;
        return a.word.localeCompare(b.word);
    });

    // 4. Initialize Kuroshiro
    console.log('Initializing Kuroshiro...');
    const kuroshiro = new Kuroshiro();
    await kuroshiro.init(new KuromojiAnalyzer());

    // 5. Process
    let nextId = currentCount > 0 ? Math.max(...currentData.kotoba.map(k => parseInt(k.id))) + 1 : 1;
    let processed = 0;

    // Existing kana check
    const existingKana = new Set(currentData.kotoba.map(k => k.word));

    for (const item of candidates) {
        if (needed <= 0) break;

        try {
            // Get Word in Kana
            let wordKana = item.word;
            if (Kuroshiro.Util.hasKanji(item.word)) {
                wordKana = await kuroshiro.convert(item.word, { to: 'hiragana', mode: 'normal' });
            }

            // Check duplicate
            if (existingKana.has(wordKana)) {
                continue;
            }

            // Get Reading (Romaji)
            let reading = await kuroshiro.convert(item.word, { to: 'romaji', mode: 'spaced' });
            reading = capitalize(reading.trim());

            // Get Meaning (Translation)
            let meaning = "";
            try {
                meaning = await retryTranslate(item.word);
                meaning = capitalize(meaning);
            } catch (trErr) {
                console.error(`Translation failed for ${item.word}, using fallback.`);
                // Fallback: Use reading or simple placeholder
                meaning = reading;
            }

            const category = "Umum";

            const info = {
                id: String(nextId++),
                word: wordKana,
                reading: reading,
                meaning: meaning,
                category: category
            };

            currentData.kotoba.push(info);
            existingKana.add(wordKana);
            processed++;
            needed--;

            if (processed % 10 === 0) {
                process.stdout.write(`Added ${processed}: ${item.word} -> ${wordKana} / ${reading} / ${meaning}\n`);
            }

            if (processed % 5 === 0) {
                console.log(`Saving progress at ${processed}...`);
                fs.writeFileSync(VOCAB_FILE, JSON.stringify(currentData, null, 2));
            }

        } catch (e) {
            console.error(`Error processing ${item.word}:`, e.message);
        }
    }

    // 7. Save
    fs.writeFileSync(VOCAB_FILE, JSON.stringify(currentData, null, 2));
    console.log(`\nSuccess! Vocabulary count is now ${currentData.kotoba.length}.`);
}

main().catch(console.error);
