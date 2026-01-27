// State Management - Kotoba will be loaded from JSON
let defaultKotoba = [];

// Load vocabulary from JSON file
async function loadVocabulary() {
    try {
        const response = await fetch('./data/vocabulary.json');
        if (!response.ok) {
            throw new Error('Failed to load vocabulary');
        }
        const data = await response.json();
        defaultKotoba = data.kotoba;
        return defaultKotoba;
    } catch (error) {
        console.error('Error loading vocabulary:', error);
        // Fallback to minimal data if JSON fails
        defaultKotoba = [
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
        return defaultKotoba;
    }
}

// --- Data ---
const hiraganaData = [
    { char: 'あ', romaji: 'a', meaning: 'a' },
    { char: 'い', romaji: 'i', meaning: 'i' },
    { char: 'う', romaji: 'u', meaning: 'u' },
    { char: 'え', romaji: 'e', meaning: 'e' },
    { char: 'お', romaji: 'o', meaning: 'o' },
    { char: 'か', romaji: 'ka', meaning: 'ka' },
    { char: 'き', romaji: 'ki', meaning: 'ki' },
    { char: 'く', romaji: 'ku', meaning: 'ku' },
    { char: 'け', romaji: 'ke', meaning: 'ke' },
    { char: 'こ', romaji: 'ko', meaning: 'ko' },
    { char: 'さ', romaji: 'sa', meaning: 'sa' },
    { char: 'し', romaji: 'shi', meaning: 'shi' },
    { char: 'す', romaji: 'su', meaning: 'su' },
    { char: 'せ', romaji: 'se', meaning: 'se' },
    { char: 'そ', romaji: 'so', meaning: 'so' },
    { char: 'た', romaji: 'ta', meaning: 'ta' },
    { char: 'ち', romaji: 'chi', meaning: 'chi' },
    { char: 'つ', romaji: 'tsu', meaning: 'tsu' },
    { char: 'て', romaji: 'te', meaning: 'te' },
    { char: 'と', romaji: 'to', meaning: 'to' },
    { char: 'な', romaji: 'na', meaning: 'na' },
    { char: 'に', romaji: 'ni', meaning: 'ni' },
    { char: 'ぬ', romaji: 'nu', meaning: 'nu' },
    { char: 'ね', romaji: 'ne', meaning: 'ne' },
    { char: 'の', romaji: 'no', meaning: 'no' },
    { char: 'は', romaji: 'ha', meaning: 'ha' },
    { char: 'ひ', romaji: 'hi', meaning: 'hi' },
    { char: 'ふ', romaji: 'fu', meaning: 'fu' },
    { char: 'へ', romaji: 'he', meaning: 'he' },
    { char: 'ほ', romaji: 'ho', meaning: 'ho' },
    { char: 'ま', romaji: 'ma', meaning: 'ma' },
    { char: 'み', romaji: 'mi', meaning: 'mi' },
    { char: 'む', romaji: 'mu', meaning: 'mu' },
    { char: 'め', romaji: 'me', meaning: 'me' },
    { char: 'も', romaji: 'mo', meaning: 'mo' },
    { char: 'や', romaji: 'ya', meaning: 'ya' },
    { char: 'ゆ', romaji: 'yu', meaning: 'yu' },
    { char: 'よ', romaji: 'yo', meaning: 'yo' },
    { char: 'ら', romaji: 'ra', meaning: 'ra' },
    { char: 'り', romaji: 'ri', meaning: 'ri' },
    { char: 'る', romaji: 'ru', meaning: 'ru' },
    { char: 'れ', romaji: 're', meaning: 're' },
    { char: 'ろ', romaji: 'ro', meaning: 'ro' },
    { char: 'わ', romaji: 'wa', meaning: 'wa' },
    { char: 'を', romaji: 'wo', meaning: 'wo' },
    { char: 'ん', romaji: 'n', meaning: 'n' }
];

// Katakana data
const katakanaData = [
    { char: 'ア', romaji: 'a', meaning: 'a' }, { char: 'イ', romaji: 'i', meaning: 'i' }, { char: 'ウ', romaji: 'u', meaning: 'u' }, { char: 'エ', romaji: 'e', meaning: 'e' }, { char: 'オ', romaji: 'o', meaning: 'o' },
    { char: 'カ', romaji: 'ka', meaning: 'ka' }, { char: 'キ', romaji: 'ki', meaning: 'ki' }, { char: 'ク', romaji: 'ku', meaning: 'ku' }, { char: 'ケ', romaji: 'ke', meaning: 'ke' }, { char: 'コ', romaji: 'ko', meaning: 'ko' },
    { char: 'サ', romaji: 'sa', meaning: 'sa' }, { char: 'シ', romaji: 'shi', meaning: 'shi' }, { char: 'ス', romaji: 'su', meaning: 'su' }, { char: 'セ', romaji: 'se', meaning: 'se' }, { char: 'ソ', romaji: 'so', meaning: 'so' },
    { char: 'タ', romaji: 'ta', meaning: 'ta' }, { char: 'チ', romaji: 'chi', meaning: 'chi' }, { char: 'ツ', romaji: 'tsu', meaning: 'tsu' }, { char: 'テ', romaji: 'te', meaning: 'te' }, { char: 'ト', romaji: 'to', meaning: 'to' },
    { char: 'ナ', romaji: 'na', meaning: 'na' }, { char: 'ニ', romaji: 'ni', meaning: 'ni' }, { char: 'ヌ', romaji: 'nu', meaning: 'nu' }, { char: 'ネ', romaji: 'ne', meaning: 'ne' }, { char: 'ノ', romaji: 'no', meaning: 'no' },
    { char: 'ハ', romaji: 'ha', meaning: 'ha' }, { char: 'ヒ', romaji: 'hi', meaning: 'hi' }, { char: 'フ', romaji: 'fu', meaning: 'fu' }, { char: 'ヘ', romaji: 'he', meaning: 'he' }, { char: 'ホ', romaji: 'ho', meaning: 'ho' },
    { char: 'マ', romaji: 'ma', meaning: 'ma' }, { char: 'ミ', romaji: 'mi', meaning: 'mi' }, { char: 'ム', romaji: 'mu', meaning: 'mu' }, { char: 'メ', romaji: 'me', meaning: 'me' }, { char: 'モ', romaji: 'mo', meaning: 'mo' },
    { char: 'ヤ', romaji: 'ya', meaning: 'ya' }, { char: 'ユ', romaji: 'yu', meaning: 'yu' }, { char: 'ヨ', romaji: 'yo', meaning: 'yo' },
    { char: 'ラ', romaji: 'ra', meaning: 'ra' }, { char: 'リ', romaji: 'ri', meaning: 'ri' }, { char: 'ル', romaji: 'ru', meaning: 'ru' }, { char: 'レ', romaji: 're', meaning: 're' }, { char: 'ロ', romaji: 'ro', meaning: 'ro' },
    { char: 'ワ', romaji: 'wa', meaning: 'wa' }, { char: 'ヲ', romaji: 'wo', meaning: 'wo' }, { char: 'ン', romaji: 'n', meaning: 'n' }
];

// Kanji data (N5-N4 level)
let kanjiData = [];

async function loadKanji() {
    try {
        const response = await fetch('data/kanji.json');
        kanjiData = await response.json();
    } catch (error) {
        console.error('Error loading kanji data:', error);
    }
}

const STATE = {
    kotoba: JSON.parse(localStorage.getItem('kotoba_words')) || defaultKotoba,
    currentSection: 'kotoba',
    search: '',
    filterCategory: 'Semua' // New filter state
};

const elements = {
    vocabGrid: document.getElementById('vocabGrid'),
    emptyState: document.getElementById('emptyState'),
    searchInput: document.getElementById('searchInput'),
    // Custom Dropdown Elements
    customDropdownWrapper: document.getElementById('customDropdownWrapper'),
    dropdownCategoryBtn: document.getElementById('dropdownCategoryBtn'),
    dropdownCategoryMenu: document.getElementById('dropdownCategoryMenu'),
    selectedCategoryLabel: document.getElementById('selectedCategoryLabel'),
    dropdownArrow: document.getElementById('dropdownArrow'),

    // Banner Elements
    hiraganaQuizBanner: document.getElementById('hiraganaQuizBanner'),
    katakanaQuizBanner: document.getElementById('katakanaQuizBanner'),
    vocabularyQuizBanner: document.getElementById('vocabularyQuizBanner'),
    kanjiQuizBanner: document.getElementById('kanjiQuizBanner'),

    totalWordsBadge: document.getElementById('totalWordsBadge'),
    pageTitle: document.getElementById('pageTitle'),
    pageSubtitle: document.getElementById('pageSubtitle'),
    // Mobile Menu
    menuToggle: document.getElementById('menuToggle'),
    navMenu: document.getElementById('navMenu'),
    // Modal Elements
    detailModal: document.getElementById('detailModal'),
    modalContent: document.getElementById('modalContent'),
    closeModal: document.getElementById('closeModal'),
    animateBtn: document.getElementById('animateBtn'),
    speakerBtn: document.getElementById('speakerBtn'),
    characterTarget: document.getElementById('characterTarget'),
    // Modal Text Elements
    modalTitle: document.getElementById('modalTitle'),
    modalReading: document.getElementById('modalReading'),
    modalMeaning: document.getElementById('modalMeaning'),
    modalCategory: document.getElementById('modalCategory'),
    modalCategoryDot: document.getElementById('modalCategoryDot'),
};

let writer = null;
let currentPronunciation = ''; // Store current text for pronunciation

// --- Initialization ---
async function init() {
    // Load vocabulary data from JSON
    await loadVocabulary();
    // Load Kanji data
    await loadKanji();

    // Initialize STATE with loaded data if not already present in localStorage
    if (!localStorage.getItem('kotoba_words')) {
        STATE.kotoba = defaultKotoba;
    }

    initCategoryDropdown(); // Initialize category dropdown options
    renderApp(); // Render the app after data is loaded and state is initialized
    setupEventListeners();
}

// --- Rendering ---
// --- Rendering ---
function renderApp() {
    renderStats();
    renderVocabGrid();

    // Toggle filter visibility: only show in Kotoba section
    if (elements.customDropdownWrapper) {
        if (STATE.currentSection === 'kotoba') {
            elements.customDropdownWrapper.classList.remove('hidden');
        } else {
            elements.customDropdownWrapper.classList.add('hidden');
        }
    }

    // Toggle Quiz Banner visibility: only show in Hiragana section
    if (elements.hiraganaQuizBanner) {
        if (STATE.currentSection === 'hiragana') {
            elements.hiraganaQuizBanner.classList.remove('hidden');
        } else {
            elements.hiraganaQuizBanner.classList.add('hidden');
        }
    }

    // Toggle Katakana Quiz Banner visibility
    if (elements.katakanaQuizBanner) {
        if (STATE.currentSection === 'katakana') {
            elements.katakanaQuizBanner.classList.remove('hidden');
        } else {
            elements.katakanaQuizBanner.classList.add('hidden');
        }
    }

    // Toggle Vocabulary Quiz Banner visibility (Kotoba Section)
    if (elements.vocabularyQuizBanner) {
        if (STATE.currentSection === 'kotoba') {
            elements.vocabularyQuizBanner.classList.remove('hidden');
        } else {
            elements.vocabularyQuizBanner.classList.add('hidden');
        }
    }

    // Toggle Kanji Quiz Banner visibility (Kanji Section)
    if (elements.kanjiQuizBanner) {
        if (STATE.currentSection === 'kanji') {
            elements.kanjiQuizBanner.classList.remove('hidden');
        } else {
            elements.kanjiQuizBanner.classList.add('hidden');
        }
    }
}

// Custom Dropdown Logic
function initCategoryDropdown() {
    if (!elements.dropdownCategoryMenu) return;

    // Get unique categories + predefined ones to ensure order/existence
    const uniqueCategories = Array.from(new Set(STATE.kotoba.map(item => item.category))).filter(Boolean).sort();

    // Always start with 'Semua Kategori'
    let optionsHtml = `
        <div class="px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 cursor-pointer font-medium transition-colors border-b border-gray-100 last:border-0 dropdown-option" data-value="Semua">
            <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-gray-400"></span>
                <span>Semua Kategori</span>
            </div>
        </div>
    `;

    uniqueCategories.forEach(cat => {
        // Map icon based on category (simple logic)
        let colorClass = getCategoryColor(cat).replace('bg-', 'text-'); // Use text color for icon if needed, or stick to dot
        let dotColor = getCategoryColor(cat);

        optionsHtml += `
            <div class="px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 cursor-pointer font-medium transition-colors border-b border-gray-100 last:border-0 dropdown-option" data-value="${cat}">
                <div class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full ${dotColor}"></span>
                    <span>${cat}</span>
                </div>
            </div>
        `;
    });

    elements.dropdownCategoryMenu.innerHTML = optionsHtml;

    // Add click listeners to options
    document.querySelectorAll('.dropdown-option').forEach(option => {
        option.addEventListener('click', (e) => {
            const value = option.dataset.value;
            selectCategory(value);
        });
    });
}

function selectCategory(category) {
    STATE.filterCategory = category;

    // Update Label
    if (elements.selectedCategoryLabel) {
        elements.selectedCategoryLabel.textContent = category === 'Semua' ? 'Semua Kategori' : category;
    }

    // Close Dropdown
    if (elements.dropdownCategoryMenu) {
        elements.dropdownCategoryMenu.classList.add('hidden');
    }
    if (elements.dropdownArrow) {
        elements.dropdownArrow.classList.remove('rotate-180');
    }

    renderApp();
}

function toggleDropdown() {
    if (elements.dropdownCategoryMenu) {
        elements.dropdownCategoryMenu.classList.toggle('hidden');
        const isHidden = elements.dropdownCategoryMenu.classList.contains('hidden');

        if (elements.dropdownArrow) {
            if (isHidden) {
                elements.dropdownArrow.classList.remove('rotate-180');
            } else {
                elements.dropdownArrow.classList.add('rotate-180');
            }
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

    // Reset to default grid classes first
    // Default: grid-cols-2 on mobile
    let gridClass = 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 pb-20';

    // For Hiragana & Katakana: Use 5 columns consistently (matches standard Gojuon chart)
    if (STATE.currentSection === 'hiragana' || STATE.currentSection === 'katakana') {
        gridClass = 'grid grid-cols-5 gap-3 md:gap-6 pb-20';
    }

    elements.vocabGrid.className = gridClass;

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
            <div class="bento-card p-5 group h-full justify-between" onclick="openModal('${item.id}', 'kotoba')">
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
            <div class="bento-card py-6 md:py-10 px-2 group flex flex-col items-center justify-center text-center hover:bg-blue-50 transition-colors cursor-pointer" onclick="openModal('${item.char}', 'hiragana')">
                <h2 class="text-4xl md:text-6xl font-black text-gray-800 font-jp mb-2 md:mb-3 leading-none">${item.char}</h2>
                <p class="text-xs md:text-sm font-bold text-blue-500 uppercase tracking-widest">${item.romaji}</p>
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
            <div class="bento-card py-6 md:py-10 px-2 group flex flex-col items-center justify-center text-center hover:bg-blue-50 transition-colors cursor-pointer" onclick="openModal('${item.char}', 'katakana')">
                <h2 class="text-4xl md:text-6xl font-black text-gray-800 font-jp mb-2 md:mb-3 leading-none">${item.char}</h2>
                <p class="text-xs md:text-sm font-bold text-blue-500 uppercase tracking-widest">${item.romaji}</p>
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
            <div class="bento-card p-5 group h-full justify-between" onclick="openModal('${item.char}', 'kanji')">
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
    if (elements.selectedCategoryLabel) {
        elements.selectedCategoryLabel.textContent = 'Semua Kategori';
    }

    // Update page title based on section
    const titleMap = {
        'kotoba': 'Kotoba.',
        'hiragana': 'Hiragana.',
        'katakana': 'Katakana.',
        'kanji': 'Kanji.'
    };

    const subtitleMap = {
        'kotoba': 'Koleksi kosakatamu.',
        'hiragana': 'Huruf dasar Jepang.',
        'katakana': 'Huruf untuk kata asing.',
        'kanji': 'Karakter Tionghoa.'
    };

    if (elements.pageTitle && titleMap[section]) {
        elements.pageTitle.textContent = titleMap[section];
    }

    if (elements.pageSubtitle && subtitleMap[section]) {
        elements.pageSubtitle.textContent = subtitleMap[section];
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

// --- Modal & Animation Logic ---
window.openModal = function (id, type) {
    let item;
    let charsToAnimate = [];
    let category = '';
    let reading = '';
    let meaning = '';

    if (type === 'kotoba') {
        item = STATE.kotoba.find(i => i.id === id);
        if (!item) return;
        charsToAnimate = item.word.split(''); // Animate full word
        category = item.category;
        reading = item.reading;
        meaning = item.meaning;
        elements.modalTitle.textContent = item.word;
        // Store pronunciation (use Japanese characters for better TTS)
        currentPronunciation = item.reading; // Use reading for pronunciation
    } else if (type === 'hiragana') {
        item = hiraganaData.find(i => i.char === id);
        if (!item) return;
        charsToAnimate = [item.char];
        category = 'Hiragana';
        reading = item.romaji;
        meaning = item.meaning;
        elements.modalTitle.textContent = item.char;
        // Store pronunciation
        currentPronunciation = item.char;
    } else if (type === 'katakana') {
        item = katakanaData.find(i => i.char === id);
        if (!item) return;
        charsToAnimate = [item.char];
        category = 'Katakana';
        reading = item.romaji;
        meaning = item.meaning;
        elements.modalTitle.textContent = item.char;
        // Store pronunciation
        currentPronunciation = item.char;
    } else if (type === 'kanji') {
        item = kanjiData.find(i => i.char === id);
        if (!item) return;
        charsToAnimate = [item.char];
        category = 'Kanji';
        reading = item.reading;
        meaning = item.meaning;
        elements.modalTitle.textContent = item.char;
        // Store pronunciation
        currentPronunciation = item.char;
    }

    // Populate Modal
    elements.modalCategory.textContent = category;
    elements.modalReading.textContent = reading;
    elements.modalMeaning.textContent = meaning;

    // Set colors based on category if it's kotoba
    const dotColor = getCategoryColor(category);
    elements.modalCategoryDot.className = `w-2 h-2 rounded-full ${dotColor}`;

    // Show Modal
    elements.detailModal.classList.remove('hidden');
    // Trigger reflow
    void elements.detailModal.offsetWidth;
    elements.detailModal.classList.add('modal-open');
    elements.modalContent.classList.add('modal-content-open');

    // Init Animation (with delay for transition)
    setTimeout(() => {
        if (charsToAnimate.length > 0) {
            initAnimation(charsToAnimate);
        }
    }, 300);
}

function closeModal() {
    elements.detailModal.classList.remove('modal-open');
    elements.modalContent.classList.remove('modal-content-open');

    setTimeout(() => {
        elements.detailModal.classList.add('hidden');
        elements.characterTarget.innerHTML = ''; // Clear writer
        stateWriters = []; // Clear writers array
    }, 300);
}

// Global array to store writers/state for replay
let stateWriters = [];
let currentChars = [];

function initAnimation(chars) {
    elements.characterTarget.innerHTML = ''; // Clear previous
    // Add wrapper box styling with unified character display inside
    elements.characterTarget.className = 'bg-white rounded-3xl shadow-sm border border-gray-100 flex flex-nowrap items-center justify-center gap-1 p-6';

    stateWriters = []; // Reset state
    currentChars = chars;

    // Check if mobile (screen width < 768px)
    const isMobile = window.innerWidth < 768;

    // Dynamic sizing based on character count and screen size
    let charSize;
    if (isMobile) {
        // Mobile sizing - much smaller for longer words
        if (chars.length === 1) {
            charSize = 140;
        } else if (chars.length === 2) {
            charSize = 90;
        } else if (chars.length === 3) {
            charSize = 65;
        } else if (chars.length === 4) {
            charSize = 50;
        } else {
            // 5+ characters
            charSize = 42;
        }
    } else {
        // Desktop sizing
        if (chars.length === 1) {
            charSize = 180;
        } else if (chars.length === 2) {
            charSize = 120;
        } else if (chars.length === 3) {
            charSize = 90;
        } else if (chars.length === 4) {
            charSize = 75;
        } else {
            // 5+ characters
            charSize = 60;
        }
    }

    // Create containers for each char
    chars.forEach((char, index) => {
        const div = document.createElement('div');
        div.id = `char-target-${index}`;
        // Dynamic size based on character count
        div.className = `flex items-center justify-center relative overflow-hidden`;
        div.style.width = `${charSize}px`;
        div.style.height = `${charSize}px`;

        elements.characterTarget.appendChild(div);

        // Check type and init accordingly
        if (isKana(char)) {
            renderKanaAnimationInDiv(char, div, charSize);
            stateWriters.push({ type: 'kana', target: div, char: char });
        } else {
            // Kanji/Unknown -> Hanzi Writer
            const writer = HanziWriter.create(div.id, char, {
                width: charSize,
                height: charSize,
                padding: 5,
                strokeAnimationSpeed: 1,
                delayBetweenStrokes: 200,
                strokeColor: '#1c1c1e',
                drawingWidth: charSize > 100 ? 20 : 15,
                showOutline: true,
                outlineColor: '#ddd',
                charDataLoader: function (char, onComplete) {
                    fetch("https://cdn.jsdelivr.net/npm/hanzi-writer-data-jp@0.3/" + char + ".json")
                        .then(res => { if (!res.ok) throw new Error(); return res.json(); })
                        .then(onComplete)
                        .catch(() => {
                            fetch("https://cdn.jsdelivr.net/npm/hanzi-writer-data@2.0/" + char + ".json")
                                .then(res => { if (!res.ok) throw new Error(); return res.json(); })
                                .then(onComplete)
                                .catch(() => onComplete(null));
                        });
                },
                onLoadCharDataError: function (err) {
                    div.innerHTML = `<span class="text-4xl text-gray-400">?</span>`;
                }
            });
            stateWriters.push({ type: 'kanji', instance: writer });
            writer.animateCharacter();
        }
    });
}

function renderKanaAnimationInDiv(char, container, charSize) {
    const hex = '0' + char.charCodeAt(0).toString(16);
    const url = `https://raw.githubusercontent.com/KanjiVG/kanjivg/master/kanji/${hex}.svg`;

    container.classList.add('kanjivg-target');

    fetch(url)
        .then(res => {
            if (!res.ok) throw new Error('SVG not found');
            return res.text();
        })
        .then(svg => {
            // Remove XML declaration and DOCTYPE (including multi-line with square brackets)
            const cleanSvg = svg
                .replace(/<\?xml[^?]*\?>/g, '')
                .replace(/<!--[\s\S]*?-->/g, '')  // Remove comments
                .replace(/<!DOCTYPE[\s\S]*?]>/g, '')  // Remove DOCTYPE including content in square brackets
                .trim();
            container.innerHTML = cleanSvg;

            // Scale SVG to match charSize
            const svgElement = container.querySelector('svg');
            if (svgElement) {
                svgElement.setAttribute('width', charSize);
                svgElement.setAttribute('height', charSize);
            }

            animateSvgStrokesInContainer(container);
        })
        .catch(err => {
            // Fallback: show character with dynamic font size
            const fontSize = charSize > 100 ? '4xl' : charSize > 70 ? '3xl' : '2xl';
            container.innerHTML = `<span class="text-${fontSize} font-jp text-gray-800">${char}</span>`;
        });
}

function animateSvgStrokesInContainer(container) {
    const paths = container.querySelectorAll('path');
    let delay = 0;
    paths.forEach((path) => {
        const length = path.getTotalLength();
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;
        path.style.animation = 'none'; // Reset
        path.offsetHeight; // Trigger reflow
        path.style.animation = `drawStroke 0.5s linear forwards ${delay}s`;
        delay += 0.6;
    });
}

function replayAnimation() {
    console.log('Replay clicked, stateWriters:', stateWriters);

    // Replay logic for mixed content
    stateWriters.forEach((item, index) => {
        console.log(`Replaying item ${index}:`, item);

        if (item.type === 'kanji' && item.instance) {
            item.instance.animateCharacter();
        } else if (item.type === 'kana' && item.target) {
            // Reset SVG animation by re-triggering
            const svgElement = item.target.querySelector('svg');
            if (svgElement) {
                // Clone and replace to reset animation
                const clone = svgElement.cloneNode(true);
                item.target.innerHTML = '';
                item.target.appendChild(clone);
                animateSvgStrokesInContainer(item.target);
            }
        }
    });
}

// --- Audio Pronunciation ---
function playPronunciation() {
    console.log('playPronunciation called, currentPronunciation:', currentPronunciation);

    if (!currentPronunciation) {
        console.warn('No pronunciation text available');
        return;
    }

    // Check if Web Speech API is supported
    if (!('speechSynthesis' in window)) {
        console.error('Speech synthesis not supported');
        alert('Audio pronunciation tidak didukung di browser ini.');
        return;
    }

    try {
        // Visual feedback
        if (elements.speakerBtn) {
            elements.speakerBtn.classList.add('animate-pulse');
        }

        // Create utterance with minimal settings
        const utterance = new SpeechSynthesisUtterance(currentPronunciation);
        utterance.lang = 'ja-JP';

        utterance.onend = () => {
            console.log('Speech ended');
            if (elements.speakerBtn) {
                elements.speakerBtn.classList.remove('animate-pulse');
            }
        };

        utterance.onerror = (event) => {
            console.error('Speech error:', event);
            if (elements.speakerBtn) {
                elements.speakerBtn.classList.remove('animate-pulse');
            }
        };

        // Just speak - no fancy workarounds
        console.log('Speaking:', currentPronunciation);
        window.speechSynthesis.speak(utterance);

    } catch (error) {
        console.error('Exception:', error);
        if (elements.speakerBtn) {
            elements.speakerBtn.classList.remove('animate-pulse');
        }
        alert('Error: ' + error.message);
    }
}

// --- Helper: Check if char is Kana (Hiragana/Katakana) ---
function isKana(char) {
    const code = char.charCodeAt(0);
    return (code >= 0x3040 && code <= 0x309F) || // Hiragana
        (code >= 0x30A0 && code <= 0x30FF);   // Katakana
}

// --- Event Listeners ---
function setupEventListeners() {
    elements.searchInput.addEventListener('input', (e) => {
        STATE.search = e.target.value;
        renderApp(); // Rerender app to update stats as well
    });

    // Custom Dropdown Toggle
    if (elements.dropdownCategoryBtn) {
        elements.dropdownCategoryBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent document click from closing immediately
            toggleDropdown();
        });
    }

    // Close Dropdown on outside click
    document.addEventListener('click', (e) => {
        if (elements.dropdownCategoryMenu && !elements.dropdownCategoryMenu.classList.contains('hidden')) {
            if (elements.customDropdownWrapper && !elements.customDropdownWrapper.contains(e.target)) {
                elements.dropdownCategoryMenu.classList.add('hidden');
                if (elements.dropdownArrow) {
                    elements.dropdownArrow.classList.remove('rotate-180');
                }
            }
        }
    });

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

    // Modal listeners
    if (elements.closeModal) {
        elements.closeModal.addEventListener('click', closeModal);
    }

    if (elements.detailModal) {
        elements.detailModal.addEventListener('click', (e) => {
            if (e.target === elements.detailModal) {
                closeModal();
            }
        });
    }

    if (elements.animateBtn) {
        elements.animateBtn.addEventListener('click', () => {
            replayAnimation();
        });
    }

    if (elements.speakerBtn) {
        elements.speakerBtn.addEventListener('click', () => {
            playPronunciation();
        });
    }

    // Escape key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !elements.detailModal.classList.contains('hidden')) {
            closeModal();
        }
    });
}

// Run
document.addEventListener('DOMContentLoaded', init);
