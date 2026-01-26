// State Management - Kotoba (No Kanji, only hiragana/katakana)
const defaultKotoba = [
    // --- Orang (10) ---
    { id: '1', word: 'わたし', reading: 'Watashi', meaning: 'Saya', category: 'Orang' },
    { id: '2', word: 'あなた', reading: 'Anata', meaning: 'Kamu', category: 'Orang' },
    { id: '3', word: 'あのひと', reading: 'Ano hito', meaning: 'Orang itu', category: 'Orang' },
    { id: '4', word: 'ともだち', reading: 'Tomodachi', meaning: 'Teman', category: 'Orang' },
    { id: '5', word: 'せんせい', reading: 'Sensei', meaning: 'Guru', category: 'Orang' },
    { id: '6', word: 'がくせい', reading: 'Gakusei', meaning: 'Murid', category: 'Orang' },
    { id: '7', word: 'だいがくせい', reading: 'Daigakusei', meaning: 'Mahasiswa', category: 'Orang' },
    { id: '8', word: 'かいしゃいん', reading: 'Kaishain', meaning: 'Karyawan', category: 'Orang' },
    { id: '9', word: 'いしゃ', reading: 'Isha', meaning: 'Dokter', category: 'Orang' },
    { id: '10', word: 'かぞく', reading: 'Kazoku', meaning: 'Keluarga', category: 'Orang' },

    // --- Tempat (10) ---
    { id: '11', word: 'いえ', reading: 'Ie', meaning: 'Rumah', category: 'Tempat' },
    { id: '12', word: 'がっこう', reading: 'Gakkou', meaning: 'Sekolah', category: 'Tempat' },
    { id: '13', word: 'だいがく', reading: 'Daigaku', meaning: 'Universitas', category: 'Tempat' },
    { id: '14', word: 'かいしゃ', reading: 'Kaisha', meaning: 'Perusahaan', category: 'Tempat' },
    { id: '15', word: 'みせ', reading: 'Mise', meaning: 'Toko', category: 'Tempat' },
    { id: '16', word: 'レストラン', reading: 'Resutoran', meaning: 'Restoran', category: 'Tempat' },
    { id: '17', word: 'コンビニ', reading: 'Konbini', meaning: 'Minimarket', category: 'Tempat' },
    { id: '18', word: 'えき', reading: 'Eki', meaning: 'Stasiun', category: 'Tempat' },
    { id: '19', word: 'トイレ', reading: 'Toire', meaning: 'Toilet', category: 'Tempat' },
    { id: '20', word: 'にほん', reading: 'Nihon', meaning: 'Jepang', category: 'Tempat' },

    // --- Benda (10) ---
    { id: '21', word: 'ほん', reading: 'Hon', meaning: 'Buku', category: 'Benda' },
    { id: '22', word: 'ノート', reading: 'Nooto', meaning: 'Buku catatan', category: 'Benda' },
    { id: '23', word: 'かばん', reading: 'Kaban', meaning: 'Tas', category: 'Benda' },
    { id: '24', word: 'ペン', reading: 'Pen', meaning: 'Pulpen', category: 'Benda' },
    { id: '25', word: 'えんぴつ', reading: 'Enpitsu', meaning: 'Pensil', category: 'Benda' },
    { id: '26', word: 'いす', reading: 'Isu', meaning: 'Kursi', category: 'Benda' },
    { id: '27', word: 'つくえ', reading: 'Tsukue', meaning: 'Meja', category: 'Benda' },
    { id: '28', word: 'でんわ', reading: 'Denwa', meaning: 'Telepon', category: 'Benda' },
    { id: '29', word: 'テレビ', reading: 'Terebi', meaning: 'TV', category: 'Benda' },
    { id: '30', word: 'くるま', reading: 'Kuruma', meaning: 'Mobil', category: 'Benda' },

    // --- Makanan & Minuman (10) ---
    { id: '31', word: 'ごはん', reading: 'Gohan', meaning: 'Nasi', category: 'Makanan / Minuman' },
    { id: '32', word: 'パン', reading: 'Pan', meaning: 'Roti', category: 'Makanan / Minuman' },
    { id: '33', word: 'みず', reading: 'Mizu', meaning: 'Air', category: 'Makanan / Minuman' },
    { id: '34', word: 'おちゃ', reading: 'Ocha', meaning: 'Teh', category: 'Makanan / Minuman' },
    { id: '35', word: 'コーヒー', reading: 'Koohii', meaning: 'Kopi', category: 'Makanan / Minuman' },
    { id: '36', word: 'にく', reading: 'Niku', meaning: 'Daging', category: 'Makanan / Minuman' },
    { id: '37', word: 'さかな', reading: 'Sakana', meaning: 'Ikan', category: 'Makanan / Minuman' },
    { id: '38', word: 'やさい', reading: 'Yasai', meaning: 'Sayur', category: 'Makanan / Minuman' },
    { id: '39', word: 'りんご', reading: 'Ringo', meaning: 'Apel', category: 'Makanan / Minuman' },
    { id: '40', word: 'バナナ', reading: 'Banana', meaning: 'Pisang', category: 'Makanan / Minuman' },

    // --- Kata Kerja (15) ---
    { id: '41', word: 'いきます', reading: 'Ikimasu', meaning: 'Pergi', category: 'Kata Kerja' },
    { id: '42', word: 'きます', reading: 'Kimasu', meaning: 'Datang', category: 'Kata Kerja' },
    { id: '43', word: 'かえります', reading: 'Kaerimasu', meaning: 'Pulang', category: 'Kata Kerja' },
    { id: '44', word: 'たべます', reading: 'Tabemasu', meaning: 'Makan', category: 'Kata Kerja' },
    { id: '45', word: 'のみます', reading: 'Nomimasu', meaning: 'Minum', category: 'Kata Kerja' },
    { id: '46', word: 'みます', reading: 'Mimasu', meaning: 'Melihat', category: 'Kata Kerja' },
    { id: '47', word: 'ききます', reading: 'Kikimasu', meaning: 'Mendengar', category: 'Kata Kerja' },
    { id: '48', word: 'はなします', reading: 'Hanashimasu', meaning: 'Berbicara', category: 'Kata Kerja' },
    { id: '49', word: 'よみます', reading: 'Yomimasu', meaning: 'Membaca', category: 'Kata Kerja' },
    { id: '50', word: 'かきます', reading: 'Kakimasu', meaning: 'Menulis', category: 'Kata Kerja' },
    { id: '51', word: 'かいます', reading: 'Kaimasu', meaning: 'Membeli', category: 'Kata Kerja' },
    { id: '52', word: 'します', reading: 'Shimasu', meaning: 'Melakukan', category: 'Kata Kerja' },
    { id: '53', word: 'べんきょうします', reading: 'Benkyou shimasu', meaning: 'Belajar', category: 'Kata Kerja' },
    { id: '54', word: 'ねます', reading: 'Nemasu', meaning: 'Tidur', category: 'Kata Kerja' },
    { id: '55', word: 'おきます', reading: 'Okimasu', meaning: 'Bangun', category: 'Kata Kerja' },

    // --- Kata Sifat (10) ---
    { id: '56', word: 'いい', reading: 'Ii', meaning: 'Baik / Bagus', category: 'Kata Sifat' },
    { id: '57', word: 'わるい', reading: 'Warui', meaning: 'Buruk', category: 'Kata Sifat' },
    { id: '58', word: 'おおきい', reading: 'Ookii', meaning: 'Besar', category: 'Kata Sifat' },
    { id: '59', word: 'ちいさい', reading: 'Chiisai', meaning: 'Kecil', category: 'Kata Sifat' },
    { id: '60', word: 'あつい', reading: 'Atsui', meaning: 'Panas', category: 'Kata Sifat' },
    { id: '61', word: 'さむい', reading: 'Samui', meaning: 'Dingin', category: 'Kata Sifat' },
    { id: '62', word: 'たかい', reading: 'Takai', meaning: 'Mahal / Tinggi', category: 'Kata Sifat' },
    { id: '63', word: 'やすい', reading: 'Yasui', meaning: 'Murah', category: 'Kata Sifat' },
    { id: '64', word: 'おもしろい', reading: 'Omoshiroi', meaning: 'Menarik', category: 'Kata Sifat' },
    { id: '65', word: 'つまらない', reading: 'Tsumaranai', meaning: 'Membosankan', category: 'Kata Sifat' },

    // --- Kata Tanya (7) ---
    { id: '66', word: 'だれ', reading: 'Dare', meaning: 'Siapa', category: 'Kata Tanya' },
    { id: '67', word: 'どれ', reading: 'Dore', meaning: 'Yang mana', category: 'Kata Tanya' },
    { id: '68', word: 'どこ', reading: 'Doko', meaning: 'Di mana', category: 'Kata Tanya' },
    { id: '69', word: 'いつ', reading: 'Itsu', meaning: 'Kapan', category: 'Kata Tanya' },
    { id: '70', word: 'なに', reading: 'Nani', meaning: 'Apa', category: 'Kata Tanya' },
    { id: '71', word: 'いくつ', reading: 'Ikutsu', meaning: 'Berapa (jumlah)', category: 'Kata Tanya' },
    { id: '72', word: 'どう', reading: 'Dou', meaning: 'Bagaimana', category: 'Kata Tanya' },

    // --- Kata Tunjuk (6) ---
    { id: '73', word: 'これ', reading: 'Kore', meaning: 'Ini', category: 'Kata Tunjuk' },
    { id: '74', word: 'それ', reading: 'Sore', meaning: 'Itu', category: 'Kata Tunjuk' },
    { id: '75', word: 'あれ', reading: 'Are', meaning: 'Itu (jauh)', category: 'Kata Tunjuk' },
    { id: '76', word: 'ここ', reading: 'Koko', meaning: 'Di sini', category: 'Kata Tunjuk' },
    { id: '77', word: 'そこ', reading: 'Soko', meaning: 'Di situ', category: 'Kata Tunjuk' },
    { id: '78', word: 'あそこ', reading: 'Asoko', meaning: 'Di sana', category: 'Kata Tunjuk' },

    // --- Waktu (Remaining from previous list) ---
    { id: '101', word: 'きょう', reading: 'Kyou', meaning: 'Hari ini', category: 'Waktu' },
    { id: '102', word: 'あした', reading: 'Ashita', meaning: 'Besok', category: 'Waktu' },
    { id: '103', word: 'きのう', reading: 'Kinou', meaning: 'Kemarin', category: 'Waktu' },
    { id: '104', word: 'いま', reading: 'Ima', meaning: 'Sekarang', category: 'Waktu' },
    { id: '105', word: 'あさ', reading: 'Asa', meaning: 'Pagi', category: 'Waktu' },
    { id: '106', word: 'ひる', reading: 'Hiru', meaning: 'Siang', category: 'Waktu' },
    { id: '107', word: 'よる', reading: 'Yoru', meaning: 'Malam', category: 'Waktu' },
    { id: '108', word: 'まいにち', reading: 'Mainichi', meaning: 'Setiap hari', category: 'Waktu' },

    // --- Ungkapan (Remaining from previous list) ---
    { id: '301', word: 'ありがとう', reading: 'Arigatou', meaning: 'Terima kasih', category: 'Ungkapan' },
    { id: '302', word: 'すみません', reading: 'Sumimasen', meaning: 'Maaf / Permisi', category: 'Ungkapan' },
    { id: '303', word: 'おはよう', reading: 'Ohayou', meaning: 'Selamat Pagi', category: 'Ungkapan' },
    { id: '304', word: 'こんにちは', reading: 'Konnichiwa', meaning: 'Selamat Siang', category: 'Ungkapan' },
    { id: '305', word: 'こんばんは', reading: 'Konbanwa', meaning: 'Selamat Malam', category: 'Ungkapan' },
    { id: '306', word: 'さようなら', reading: 'Sayounara', meaning: 'Selamat tinggal', category: 'Ungkapan' },
    { id: '307', word: 'いただきます', reading: 'Itadakimasu', meaning: 'Selamat makan', category: 'Ungkapan' },
    { id: '308', word: 'ごちそうさま', reading: 'Gochisousama', meaning: 'Terima kasih (setelah makan)', category: 'Ungkapan' }
];

// Hiragana data
const hiraganaData = [
    { char: 'あ', romaji: 'a' }, { char: 'い', romaji: 'i' }, { char: 'う', romaji: 'u' }, { char: 'え', romaji: 'e' }, { char: 'お', romaji: 'o' },
    { char: 'か', romaji: 'ka' }, { char: 'き', romaji: 'ki' }, { char: 'く', romaji: 'ku' }, { char: 'け', romaji: 'ke' }, { char: 'こ', romaji: 'ko' },
    { char: 'さ', romaji: 'sa' }, { char: 'し', romaji: 'shi' }, { char: 'す', romaji: 'su' }, { char: 'せ', romaji: 'se' }, { char: 'そ', romaji: 'so' },
    { char: 'た', romaji: 'ta' }, { char: 'ち', romaji: 'chi' }, { char: 'つ', romaji: 'tsu' }, { char: 'て', romaji: 'te' }, { char: 'と', romaji: 'to' },
    { char: 'な', romaji: 'na' }, { char: 'に', romaji: 'ni' }, { char: 'ぬ', romaji: 'nu' }, { char: 'ね', romaji: 'ne' }, { char: 'の', romaji: 'no' },
    { char: 'は', romaji: 'ha' }, { char: 'ひ', romaji: 'hi' }, { char: 'ふ', romaji: 'fu' }, { char: 'へ', romaji: 'he' }, { char: 'ほ', romaji: 'ho' },
    { char: 'ま', romaji: 'ma' }, { char: 'み', romaji: 'mi' }, { char: 'む', romaji: 'mu' }, { char: 'め', romaji: 'me' }, { char: 'も', romaji: 'mo' },
    { char: 'や', romaji: 'ya' }, { char: 'ゆ', romaji: 'yu' }, { char: 'よ', romaji: 'yo' },
    { char: 'ら', romaji: 'ra' }, { char: 'り', romaji: 'ri' }, { char: 'る', romaji: 'ru' }, { char: 'れ', romaji: 're' }, { char: 'ろ', romaji: 'ro' },
    { char: 'わ', romaji: 'wa' }, { char: 'を', romaji: 'wo' }, { char: 'ん', romaji: 'n' }
];

// Katakana data
const katakanaData = [
    { char: 'ア', romaji: 'a' }, { char: 'イ', romaji: 'i' }, { char: 'ウ', romaji: 'u' }, { char: 'エ', romaji: 'e' }, { char: 'オ', romaji: 'o' },
    { char: 'カ', romaji: 'ka' }, { char: 'キ', romaji: 'ki' }, { char: 'ク', romaji: 'ku' }, { char: 'ケ', romaji: 'ke' }, { char: 'コ', romaji: 'ko' },
    { char: 'サ', romaji: 'sa' }, { char: 'シ', romaji: 'shi' }, { char: 'ス', romaji: 'su' }, { char: 'セ', romaji: 'se' }, { char: 'ソ', romaji: 'so' },
    { char: 'タ', romaji: 'ta' }, { char: 'チ', romaji: 'chi' }, { char: 'ツ', romaji: 'tsu' }, { char: 'テ', romaji: 'te' }, { char: 'ト', romaji: 'to' },
    { char: 'ナ', romaji: 'na' }, { char: 'ニ', romaji: 'ni' }, { char: 'ヌ', romaji: 'nu' }, { char: 'ネ', romaji: 'ne' }, { char: 'ノ', romaji: 'no' },
    { char: 'ハ', romaji: 'ha' }, { char: 'ヒ', romaji: 'hi' }, { char: 'フ', romaji: 'fu' }, { char: 'ヘ', romaji: 'he' }, { char: 'ホ', romaji: 'ho' },
    { char: 'マ', romaji: 'ma' }, { char: 'ミ', romaji: 'mi' }, { char: 'ム', romaji: 'mu' }, { char: 'メ', romaji: 'me' }, { char: 'モ', romaji: 'mo' },
    { char: 'ヤ', romaji: 'ya' }, { char: 'ユ', romaji: 'yu' }, { char: 'ヨ', romaji: 'yo' },
    { char: 'ラ', romaji: 'ra' }, { char: 'リ', romaji: 'ri' }, { char: 'ル', romaji: 'ru' }, { char: 'レ', romaji: 're' }, { char: 'ロ', romaji: 'ro' },
    { char: 'ワ', romaji: 'wa' }, { char: 'ヲ', romaji: 'wo' }, { char: 'ン', romaji: 'n' }
];

// Kanji data (basic examples)
const kanjiData = [
    { char: '日', meaning: 'Matahari / Hari', readings: 'にち (nichi), ひ (hi)' },
    { char: '月', meaning: 'Bulan', readings: 'げつ (getsu), つき (tsuki)' },
    { char: '火', meaning: 'Api', readings: 'か (ka), ひ (hi)' },
    { char: '水', meaning: 'Air', readings: 'すい (sui), みず (mizu)' },
    { char: '木', meaning: 'Pohon', readings: 'もく (moku), き (ki)' },
    { char: '金', meaning: 'Emas / Uang', readings: 'きん (kin), かね (kane)' },
    { char: '土', meaning: 'Tanah', readings: 'ど (do), つち (tsuchi)' },
    { char: '人', meaning: 'Orang', readings: 'じん (jin), ひと (hito)' },
    { char: '本', meaning: 'Buku / Asal', readings: 'ほん (hon), もと (moto)' },
    { char: '山', meaning: 'Gunung', readings: 'さん (san), やま (yama)' }
];

const STATE = {
    kotoba: JSON.parse(localStorage.getItem('kotoba_words')) || defaultKotoba,
    currentSection: 'kotoba',
    search: '',
    filterCategory: 'Semua' // New filter state
};

// DOM Elements
const elements = {
    vocabGrid: document.getElementById('vocabGrid'),
    emptyState: document.getElementById('emptyState'),
    searchInput: document.getElementById('searchInput'),
    categoryFilter: document.getElementById('categoryFilter'),
    totalWordsBadge: document.getElementById('totalWordsBadge'),
    menuToggle: document.getElementById('menuToggle'),
    navMenu: document.getElementById('navMenu'),
};

// --- Initialization ---
function init() {
    renderApp();
    setupEventListeners();
}

// --- Rendering ---
function renderApp() {
    renderStats();
    renderVocabGrid();

    // Toggle filter visibility: only show in Kotoba section
    if (elements.categoryFilter) {
        if (STATE.currentSection === 'kotoba') {
            elements.categoryFilter.classList.remove('hidden');
        } else {
            elements.categoryFilter.classList.add('hidden');
        }
    }
}

function renderStats() {
    let count = 0;
    if (STATE.currentSection === 'kotoba') {
        const filtered = filterKotoba(STATE.search.toLowerCase());
        count = filtered.length;
    } else if (STATE.currentSection === 'hiragana') {
        count = hiraganaData.length;
    } else if (STATE.currentSection === 'katakana') {
        count = katakanaData.length;
    } else if (STATE.currentSection === 'kanji') {
        count = kanjiData.length;
    }
    elements.totalWordsBadge.textContent = `${count} Kata`;
}

function renderVocabGrid() {
    const searchLower = STATE.search.toLowerCase();

    if (STATE.currentSection === 'kotoba') {
        renderKotobaSection(searchLower);
    } else if (STATE.currentSection === 'hiragana') {
        renderHiraganaSection(searchLower);
    } else if (STATE.currentSection === 'katakana') {
        renderKatakanaSection(searchLower);
    } else if (STATE.currentSection === 'kanji') {
        renderKanjiSection(searchLower);
    }
}

function filterKotoba(searchLower) {
    return STATE.kotoba.filter(item => {
        // Filter by Search
        const matchesSearch = !STATE.search ||
            item.word.toLowerCase().includes(searchLower) ||
            item.reading.toLowerCase().includes(searchLower) ||
            item.meaning.toLowerCase().includes(searchLower);

        // Filter by Category
        const matchesCategory = STATE.filterCategory === 'Semua' || item.category === STATE.filterCategory;

        return matchesSearch && matchesCategory;
    });
}

function renderKotobaSection(searchLower) {
    const filtered = filterKotoba(searchLower);

    if (filtered.length === 0) {
        showEmptyState();
    } else {
        hideEmptyState();
        elements.vocabGrid.innerHTML = filtered.map(item => `
            <div class="bento-card p-5 group h-full justify-between">
                <div>
                    <div class="flex justify-between items-start mb-3">
                        <span class="inline-block px-3 py-1 bg-gray-100 text-gray-500 rounded-lg text-xs font-bold uppercase tracking-wide">${item.category}</span>
                        <div class="w-2 h-2 rounded-full ${getCategoryColor(item.category)}"></div>
                    </div>
                    
                    <h2 class="text-3xl font-black text-gray-800 font-jp mb-1 leading-tight">${item.word}</h2>
                    <p class="text-sm font-bold text-blue-500 tracking-wide mb-4">${item.reading || ''}</p>
                </div>
                
                <div class="pt-4 border-t border-gray-100">
                    <p class="text-gray-500 font-medium text-sm line-clamp-2">${item.meaning}</p>
                </div>
            </div>
        `).join('');
    }
}

function renderHiraganaSection(searchLower) {
    const filtered = hiraganaData.filter(item => {
        return !STATE.search ||
            item.char.includes(searchLower) ||
            item.romaji.toLowerCase().includes(searchLower);
    });

    if (filtered.length === 0) {
        showEmptyState();
    } else {
        hideEmptyState();
        elements.vocabGrid.innerHTML = filtered.map(item => `
            <div class="bento-card p-8 group flex flex-col items-center justify-center text-center hover:bg-blue-50 transition-colors">
                <h2 class="text-6xl font-black text-gray-800 font-jp mb-3">${item.char}</h2>
                <p class="text-lg font-bold text-blue-500 uppercase tracking-wider">${item.romaji}</p>
            </div>
        `).join('');
    }
}

function renderKatakanaSection(searchLower) {
    const filtered = katakanaData.filter(item => {
        return !STATE.search ||
            item.char.includes(searchLower) ||
            item.romaji.toLowerCase().includes(searchLower);
    });

    if (filtered.length === 0) {
        showEmptyState();
    } else {
        hideEmptyState();
        elements.vocabGrid.innerHTML = filtered.map(item => `
            <div class="bento-card p-8 group flex flex-col items-center justify-center text-center hover:bg-purple-50 transition-colors">
                <h2 class="text-6xl font-black text-gray-800 font-jp mb-3">${item.char}</h2>
                <p class="text-lg font-bold text-purple-500 uppercase tracking-wider">${item.romaji}</p>
            </div>
        `).join('');
    }
}

function renderKanjiSection(searchLower) {
    const filtered = kanjiData.filter(item => {
        return !STATE.search ||
            item.char.includes(searchLower) ||
            item.meaning.toLowerCase().includes(searchLower) ||
            item.readings.toLowerCase().includes(searchLower);
    });

    if (filtered.length === 0) {
        showEmptyState();
    } else {
        hideEmptyState();
        elements.vocabGrid.innerHTML = filtered.map(item => `
            <div class="bento-card p-5 group h-full justify-between">
                <div class="text-center mb-4">
                    <h2 class="text-7xl font-black text-gray-800 font-jp mb-3">${item.char}</h2>
                </div>
                
                <div class="space-y-2">
                    <div class="pt-3 border-t border-gray-100">
                        <p class="text-xs text-gray-400 font-bold uppercase mb-1">Arti</p>
                        <p class="text-gray-700 font-bold">${item.meaning}</p>
                    </div>
                    <div class="pt-2">
                        <p class="text-xs text-gray-400 font-bold uppercase mb-1">Bacaan</p>
                        <p class="text-sm text-blue-500 font-medium">${item.readings}</p>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

function showEmptyState() {
    elements.vocabGrid.innerHTML = '';
    elements.vocabGrid.classList.add('hidden');
    elements.emptyState.classList.remove('hidden');
    elements.emptyState.classList.add('flex');
}

function hideEmptyState() {
    elements.emptyState.classList.add('hidden');
    elements.emptyState.classList.remove('flex');
    elements.vocabGrid.classList.remove('hidden');
}

function getCategoryColor(cat) {
    if (cat === 'Kata Kerja') return 'bg-red-500';
    if (cat === 'Kata Sifat') return 'bg-amber-400';
    if (cat === 'Benda' || cat === 'Kata Benda') return 'bg-blue-500';
    if (cat === 'Makanan / Minuman') return 'bg-lime-500'; // New Category Color
    if (cat === 'Tempat') return 'bg-green-500';
    if (cat === 'Orang') return 'bg-purple-500';
    if (cat === 'Kata Tanya') return 'bg-orange-500';
    if (cat === 'Kata Tunjuk') return 'bg-indigo-500'; // New Category Color
    if (cat === 'Waktu') return 'bg-teal-500';
    if (cat === 'Ungkapan') return 'bg-pink-500';
    return 'bg-gray-400';
}

function switchSection(section) {
    STATE.currentSection = section;
    STATE.search = ''; // Reset search when switching
    STATE.filterCategory = 'Semua'; // Reset filter when switching
    elements.searchInput.value = '';

    // Reset filter dropdown
    if (elements.categoryFilter) {
        elements.categoryFilter.value = 'Semua';
    }

    // Update active tab
    document.querySelectorAll('.nav-tab-horizontal').forEach(tab => {
        tab.classList.remove('active');
        if (tab.dataset.section === section) {
            tab.classList.add('active');
        }
    });

    renderApp();
}

// --- Event Listeners ---
function setupEventListeners() {
    elements.searchInput.addEventListener('input', (e) => {
        STATE.search = e.target.value;
        renderApp(); // Rerender app to update stats as well
    });

    if (elements.categoryFilter) {
        elements.categoryFilter.addEventListener('change', (e) => {
            STATE.filterCategory = e.target.value;
            renderApp();
        });
    }

    // Mobile menu toggle
    if (elements.menuToggle && elements.navMenu) {
        elements.menuToggle.addEventListener('click', () => {
            elements.navMenu.classList.toggle('hidden');
            elements.menuToggle.classList.toggle('active');
        });
    }

    // Navigation tabs
    document.querySelectorAll('.nav-tab-horizontal').forEach(tab => {
        tab.addEventListener('click', () => {
            switchSection(tab.dataset.section);
            // Close mobile menu after selection
            if (elements.navMenu && window.innerWidth < 768) {
                elements.navMenu.classList.add('hidden');
                if (elements.menuToggle) {
                    elements.menuToggle.classList.remove('active');
                }
            }
        });
    });
}

// Run
document.addEventListener('DOMContentLoaded', init);
