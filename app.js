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
const kanjiData = [
    // Numbers
    { char: '一', meaning: 'Satu', readings: 'いち (ichi), ひと (hito)' },
    { char: '二', meaning: 'Dua', readings: 'に (ni), ふた (futa)' },
    { char: '三', meaning: 'Tiga', readings: 'さん (san), み (mi)' },
    { char: '四', meaning: 'Empat', readings: 'し (shi), よん (yon)' },
    { char: '五', meaning: 'Lima', readings: 'ご (go), いつ (itsu)' },
    { char: '六', meaning: 'Enam', readings: 'ろく (roku), む (mu)' },
    { char: '七', meaning: 'Tujuh', readings: 'しち (shichi), なな (nana)' },
    { char: '八', meaning: 'Delapan', readings: 'はち (hachi), や (ya)' },
    { char: '九', meaning: 'Sembilan', readings: 'きゅう (kyuu), く (ku)' },
    { char: '十', meaning: 'Sepuluh', readings: 'じゅう (juu), とお (too)' },
    { char: '百', meaning: 'Seratus', readings: 'ひゃく (hyaku)' },
    { char: '千', meaning: 'Seribu', readings: 'せん (sen)' },
    { char: '万', meaning: 'Sepuluh ribu', readings: 'まん (man)' },

    // Time
    { char: '日', meaning: 'Matahari / Hari', readings: 'にち (nichi), ひ (hi), か (ka)' },
    { char: '月', meaning: 'Bulan', readings: 'げつ (getsu), つき (tsuki), がつ (gatsu)' },
    { char: '火', meaning: 'Api / Selasa', readings: 'か (ka), ひ (hi)' },
    { char: '水', meaning: 'Air / Rabu', readings: 'すい (sui), みず (mizu)' },
    { char: '木', meaning: 'Pohon / Kamis', readings: 'もく (moku), き (ki)' },
    { char: '金', meaning: 'Emas / Jumat', readings: 'きん (kin), かね (kane)' },
    { char: '土', meaning: 'Tanah / Sabtu', readings: 'ど (do), つち (tsuchi)' },
    { char: '年', meaning: 'Tahun', readings: 'ねん (nen), とし (toshi)' },
    { char: '時', meaning: 'Waktu / Jam', readings: 'じ (ji), とき (toki)' },
    { char: '分', meaning: 'Menit / Membagi', readings: 'ふん (fun), ぶん (bun), わ (wa)' },
    { char: '半', meaning: 'Setengah', readings: 'はん (han)' },
    { char: '今', meaning: 'Sekarang', readings: 'こん (kon), いま (ima)' },
    { char: '毎', meaning: 'Setiap', readings: 'まい (mai)' },

    // People & Family
    { char: '人', meaning: 'Orang', readings: 'じん (jin), にん (nin), ひと (hito)' },
    { char: '父', meaning: 'Ayah', readings: 'ふ (fu), ちち (chichi)' },
    { char: '母', meaning: 'Ibu', readings: 'ぼ (bo), はは (haha)' },
    { char: '子', meaning: 'Anak', readings: 'し (shi), こ (ko)' },
    { char: '男', meaning: 'Laki-laki', readings: 'だん (dan), おとこ (otoko)' },
    { char: '女', meaning: 'Perempuan', readings: 'じょ (jo), おんな (onna)' },
    { char: '友', meaning: 'Teman', readings: 'ゆう (yuu), とも (tomo)' },
    { char: '先', meaning: 'Sebelum / Depan', readings: 'せん (sen), さき (saki)' },
    { char: '生', meaning: 'Hidup / Lahir', readings: 'せい (sei), い (i), う (u), なま (nama)' },
    { char: '学', meaning: 'Belajar', readings: 'がく (gaku), まな (mana)' },
    { char: '校', meaning: 'Sekolah', readings: 'こう (kou)' },

    // Places
    { char: '国', meaning: 'Negara', readings: 'こく (koku), くに (kuni)' },
    { char: '外', meaning: 'Luar', readings: 'がい (gai), そと (soto)' },
    { char: '中', meaning: 'Dalam / Tengah', readings: 'ちゅう (chuu), なか (naka)' },
    { char: '上', meaning: 'Atas', readings: 'じょう (jou), うえ (ue), あ (a)' },
    { char: '下', meaning: 'Bawah', readings: 'か (ka), げ (ge), した (shita)' },
    { char: '前', meaning: 'Depan / Sebelum', readings: 'ぜん (zen), まえ (mae)' },
    { char: '後', meaning: 'Belakang / Setelah', readings: 'ご (go), あと (ato), うし (ushi)' },
    { char: '左', meaning: 'Kiri', readings: 'さ (sa), ひだり (hidari)' },
    { char: '右', meaning: 'Kanan', readings: 'う (u), ゆう (yuu), みぎ (migi)' },
    { char: '東', meaning: 'Timur', readings: 'とう (tou), ひがし (higashi)' },
    { char: '西', meaning: 'Barat', readings: 'せい (sei), にし (nishi)' },
    { char: '南', meaning: 'Selatan', readings: 'なん (nan), みなみ (minami)' },
    { char: '北', meaning: 'Utara', readings: 'ほく (hoku), きた (kita)' },
    { char: '山', meaning: 'Gunung', readings: 'さん (san), やま (yama)' },
    { char: '川', meaning: 'Sungai', readings: 'せん (sen), かわ (kawa)' },
    { char: '海', meaning: 'Laut', readings: 'かい (kai), うみ (umi)' },
    { char: '駅', meaning: 'Stasiun', readings: 'えき (eki)' },
    { char: '店', meaning: 'Toko', readings: 'てん (ten), みせ (mise)' },
    { char: '家', meaning: 'Rumah / Keluarga', readings: 'か (ka), け (ke), いえ (ie), や (ya)' },
    { char: '室', meaning: 'Kamar', readings: 'しつ (shitsu)' },

    // Actions
    { char: '行', meaning: 'Pergi', readings: 'こう (kou), ぎょう (gyou), い (i), ゆ (yu)' },
    { char: '来', meaning: 'Datang', readings: 'らい (rai), く (ku), き (ki)' },
    { char: '見', meaning: 'Melihat', readings: 'けん (ken), み (mi)' },
    { char: '聞', meaning: 'Mendengar', readings: 'ぶん (bun), き (ki)' },
    { char: '食', meaning: 'Makan', readings: 'しょく (shoku), た (ta)' },
    { char: '飲', meaning: 'Minum', readings: 'いん (in), の (no)' },
    { char: '読', meaning: 'Membaca', readings: 'どく (doku), よ (yo)' },
    { char: '書', meaning: 'Menulis', readings: 'しょ (sho), か (ka)' },
    { char: '話', meaning: 'Berbicara', readings: 'わ (wa), はなし (hanashi), はな (hana)' },
    { char: '言', meaning: 'Berkata', readings: 'げん (gen), ごん (gon), い (i), こと (koto)' },
    { char: '買', meaning: 'Membeli', readings: 'ばい (bai), か (ka)' },
    { char: '売', meaning: 'Menjual', readings: 'ばい (bai), う (u)' },
    { char: '作', meaning: 'Membuat', readings: 'さく (saku), つく (tsuku)' },
    { char: '出', meaning: 'Keluar', readings: 'しゅつ (shutsu), で (de), だ (da)' },
    { char: '入', meaning: 'Masuk', readings: 'にゅう (nyuu), い (i), はい (hai)' },
    { char: '立', meaning: 'Berdiri', readings: 'りつ (ritsu), た (ta)' },
    { char: '休', meaning: 'Istirahat', readings: 'きゅう (kyuu), やす (yasu)' },
    { char: '会', meaning: 'Bertemu', readings: 'かい (kai), え (e), あ (a)' },
    { char: '待', meaning: 'Menunggu', readings: 'たい (tai), ま (ma)' },
    { char: '思', meaning: 'Berpikir', readings: 'し (shi), おも (omo)' },
    { char: '知', meaning: 'Tahu', readings: 'ち (chi), し (shi)' },
    { char: '住', meaning: 'Tinggal', readings: 'じゅう (juu), す (su)' },
    { char: '働', meaning: 'Bekerja', readings: 'どう (dou), はたら (hatara)' },

    // Things
    { char: '本', meaning: 'Buku / Asal', readings: 'ほん (hon), もと (moto)' },
    { char: '車', meaning: 'Mobil', readings: 'しゃ (sha), くるま (kuruma)' },
    { char: '電', meaning: 'Listrik', readings: 'でん (den)' },
    { char: '話', meaning: 'Cerita / Telepon', readings: 'わ (wa), はなし (hanashi)' },
    { char: '語', meaning: 'Bahasa', readings: 'ご (go), かた (kata)' },
    { char: '文', meaning: 'Kalimat / Tulisan', readings: 'ぶん (bun), もん (mon)' },
    { char: '字', meaning: 'Huruf', readings: 'じ (ji), あざ (aza)' },
    { char: '名', meaning: 'Nama', readings: 'めい (mei), みょう (myou), な (na)' },
    { char: '手', meaning: 'Tangan', readings: 'しゅ (shu), て (te)' },
    { char: '足', meaning: 'Kaki', readings: 'そく (soku), あし (ashi)' },
    { char: '目', meaning: 'Mata', readings: 'もく (moku), め (me)' },
    { char: '耳', meaning: 'Telinga', readings: 'じ (ji), みみ (mimi)' },
    { char: '口', meaning: 'Mulut', readings: 'こう (kou), くち (kuchi)' },
    { char: '頭', meaning: 'Kepala', readings: 'とう (tou), あたま (atama)' },
    { char: '体', meaning: 'Tubuh', readings: 'たい (tai), からだ (karada)' },

    // Adjectives & States
    { char: '大', meaning: 'Besar', readings: 'だい (dai), たい (tai), おお (oo)' },
    { char: '小', meaning: 'Kecil', readings: 'しょう (shou), ちい (chii), こ (ko)' },
    { char: '高', meaning: 'Tinggi / Mahal', readings: 'こう (kou), たか (taka)' },
    { char: '安', meaning: 'Murah / Aman', readings: 'あん (an), やす (yasu)' },
    { char: '新', meaning: 'Baru', readings: 'しん (shin), あたら (atara)' },
    { char: '古', meaning: 'Lama', readings: 'こ (ko), ふる (furu)' },
    { char: '長', meaning: 'Panjang', readings: 'ちょう (chou), なが (naga)' },
    { char: '短', meaning: 'Pendek', readings: 'たん (tan), みじか (mijika)' },
    { char: '多', meaning: 'Banyak', readings: 'た (ta), おお (oo)' },
    { char: '少', meaning: 'Sedikit', readings: 'しょう (shou), すく (suku), すこ (suko)' },
    { char: '早', meaning: 'Cepat / Pagi', readings: 'そう (sou), はや (haya)' },
    { char: '白', meaning: 'Putih', readings: 'はく (haku), しろ (shiro)' },
    { char: '黒', meaning: 'Hitam', readings: 'こく (koku), くろ (kuro)' },
    { char: '赤', meaning: 'Merah', readings: 'せき (seki), あか (aka)' },
    { char: '青', meaning: 'Biru', readings: 'せい (sei), あお (ao)' },

    // Misc Common
    { char: '何', meaning: 'Apa', readings: 'か (ka), なに (nani), なん (nan)' },
    { char: '天', meaning: 'Langit', readings: 'てん (ten), あま (ama)' },
    { char: '気', meaning: 'Udara / Perasaan', readings: 'き (ki), け (ke)' },
    { char: '雨', meaning: 'Hujan', readings: 'う (u), あめ (ame)' },
    { char: '雪', meaning: 'Salju', readings: 'せつ (setsu), ゆき (yuki)' },
    { char: '花', meaning: 'Bunga', readings: 'か (ka), はな (hana)' },
    { char: '犬', meaning: 'Anjing', readings: 'けん (ken), いぬ (inu)' },
    { char: '猫', meaning: 'Kucing', readings: 'びょう (byou), ねこ (neko)' },
    { char: '魚', meaning: 'Ikan', readings: 'ぎょ (gyo), さかな (sakana)' },
    { char: '肉', meaning: 'Daging', readings: 'にく (niku)' },
    { char: '物', meaning: 'Benda', readings: 'ぶつ (butsu), もつ (motsu), もの (mono)' },
    { char: '者', meaning: 'Orang', readings: 'しゃ (sha), もの (mono)' },
    { char: '方', meaning: 'Arah / Cara', readings: 'ほう (hou), かた (kata)' },
    { char: '円', meaning: 'Yen / Lingkaran', readings: 'えん (en), まる (maru)' }
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

    // Initialize STATE with loaded data if not already present in localStorage
    if (!localStorage.getItem('kotoba_words')) {
        STATE.kotoba = defaultKotoba;
    }

    renderApp(); // Render the app after data is loaded and state is initialized
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
            <div class="bento-card p-8 group flex flex-col items-center justify-center text-center hover:bg-blue-50 transition-colors" onclick="openModal('${item.char}', 'hiragana')">
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
            <div class="bento-card p-8 group flex flex-col items-center justify-center text-center hover:bg-purple-50 transition-colors" onclick="openModal('${item.char}', 'katakana')">
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
    if (elements.categoryFilter) {
        elements.categoryFilter.value = 'Semua';
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
