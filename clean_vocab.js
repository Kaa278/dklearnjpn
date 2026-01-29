const fs = require('fs');

const VOCAB_FILE = 'www/data/vocabulary.json';

function clean() {
    if (!fs.existsSync(VOCAB_FILE)) {
        console.log('File not found.');
        return;
    }

    let data = JSON.parse(fs.readFileSync(VOCAB_FILE, 'utf8'));
    console.log(`Original count: ${data.kotoba.length}`);

    // Filter out items where category starts with "JLPT"
    // Also user said "jangan pake kanji", so existing items with Kanji (if any from my script) will be removed by this category check
    // since my script used "JLPT N*" categories.

    data.kotoba = data.kotoba.filter(item => {
        return !item.category || !item.category.startsWith('JLPT');
    });

    console.log(`Cleaned count: ${data.kotoba.length}`);

    fs.writeFileSync(VOCAB_FILE, JSON.stringify(data, null, 2));
}

clean();
