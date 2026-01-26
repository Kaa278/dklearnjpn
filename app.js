// State Management - Kotoba (No Kanji, only hiragana/katakana)
const defaultKotoba = [
    // Orang / Profesi / Status (10)
    { id: '1', word: 'わたし', reading: 'Watashi', meaning: 'Saya', category: 'Orang' },
    { id: '2', word: 'あなた', reading: 'Anata', meaning: 'Kamu', category: 'Orang' },
    { id: '3', word: 'ともだち', reading: 'Tomodachi', meaning: 'Teman', category: 'Orang' },
    { id: '4', word: 'がくせい', reading: 'Gakusei', meaning: 'Murid', category: 'Orang' },
    { id: '5', word: 'せんせい', reading: 'Sensei', meaning: 'Guru', category: 'Orang' },
    { id: '6', word: 'いしゃ', reading: 'Isha', meaning: 'Dokter', category: 'Orang' },
    { id: '7', word: 'しゃいん', reading: 'Shain', meaning: 'Karyawan', category: 'Orang' },
    { id: '8', word: 'ぎんこういん', reading: 'Ginkouin', meaning: 'Pegawai Bank', category: 'Orang' },
    { id: '9', word: 'かぞく', reading: 'Kazoku', meaning: 'Keluarga', category: 'Orang' },
    { id: '10', word: 'あのかた', reading: 'Ano kata', meaning: 'Orang itu (sopan)', category: 'Orang' },

    // Tempat / Institusi (6)
    { id: '11', word: 'がっこう', reading: 'Gakkou', meaning: 'Sekolah', category: 'Tempat' },
    { id: '12', word: 'こうこう', reading: 'Koukou', meaning: 'SMA', category: 'Tempat' },
    { id: '13', word: 'びょういん', reading: 'Byouin', meaning: 'Rumah Sakit', category: 'Tempat' },
    { id: '14', word: 'いえ', reading: 'Ie', meaning: 'Rumah', category: 'Tempat' },
    { id: '15', word: 'にほん', reading: 'Nihon', meaning: 'Jepang', category: 'Tempat' },
    { id: '16', word: 'コンビニ', reading: 'Konbini', meaning: 'Minimarket', category: 'Tempat' },

    // Benda (6)
    { id: '17', word: 'パン', reading: 'Pan', meaning: 'Roti', category: 'Benda' },
    { id: '18', word: 'みず', reading: 'Mizu', meaning: 'Air', category: 'Benda' },
    { id: '19', word: 'ほん', reading: 'Hon', meaning: 'Buku', category: 'Benda' },
    { id: '20', word: 'テレビ', reading: 'Terebi', meaning: 'Televisi', category: 'Benda' },
    { id: '21', word: 'くるま', reading: 'Kuruma', meaning: 'Mobil', category: 'Benda' },
    { id: '22', word: 'かばん', reading: 'Kaban', meaning: 'Tas', category: 'Benda' },

    // Kata Kerja (6)
    { id: '23', word: 'たべます', reading: 'Tabemasu', meaning: 'Makan', category: 'Kata Kerja' },
    { id: '24', word: 'のみます', reading: 'Nomimasu', meaning: 'Minum', category: 'Kata Kerja' },
    { id: '25', word: 'いきます', reading: 'Ikimasu', meaning: 'Pergi', category: 'Kata Kerja' },
    { id: '26', word: 'みます', reading: 'Mimasu', meaning: 'Melihat', category: 'Kata Kerja' },
    { id: '27', word: 'べんきょうします', reading: 'Benkyou shimasu', meaning: 'Belajar', category: 'Kata Kerja' },
    { id: '28', word: 'はたらきます', reading: 'Hatarakimasu', meaning: 'Bekerja', category: 'Kata Kerja' },

    // Kata Tanya (4)
    { id: '29', word: 'なに / なん', reading: 'Nani / Nan', meaning: 'Apa', category: 'Kata Tanya' },
    { id: '30', word: 'だれ', reading: 'Dare', meaning: 'Siapa', category: 'Kata Tanya' },
    { id: '31', word: 'どなた', reading: 'Donata', meaning: 'Siapa (sopan)', category: 'Kata Tanya' },
    { id: '32', word: 'どれ', reading: 'Dore', meaning: 'Yang mana', category: 'Kata Tanya' }
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
    if (cat === 'Kata Sifat') return 'bg-yellow-500';
    if (cat === 'Kata Benda') return 'bg-blue-500';
    if (cat === 'Tempat') return 'bg-green-500';
    if (cat === 'Orang') return 'bg-purple-500';
    if (cat === 'Kata Tanya') return 'bg-orange-500';
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
