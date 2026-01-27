# 📚 Kotoba - Japanese Learning App

<div align="center">

![Japanese Learning](https://img.shields.io/badge/Language-Japanese-red)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Tailwind](https://img.shields.io/badge/Tailwind-38B2AC?logo=tailwind-css&logoColor=white)

**A beautiful, interactive web application for learning Japanese vocabulary, hiragana, katakana, and kanji**

[🌐 Live Demo](https://dklearnjpn.vercel.app/) | [✨ Features](#-features) | [🚀 Getting Started](#-getting-started)

</div>

---

## ✨ Features

### 📖 Comprehensive Learning Content
- **776 Vocabulary Words** - N5-N3 level Japanese vocabulary
- **130 Kanji Characters** - Essential N5-N4 kanji with multiple readings
- **Hiragana** - Complete 46-character syllabary with stroke animations
- **Katakana** - Complete 46-character syllabary with stroke animations

### 🎯 Smart Features
- 🔍 **Real-time Search** - Instant filtering across all content
- 🏷️ **Category Filtering** - 15+ categories including:
  - Kata Kerja (Verbs)
  - Kata Sifat (Adjectives)
  - Kata Tanya (Question Words)
  - Kata Tunjuk (Demonstratives)
  - Partikel (Particles)
  - Bunbougu (Stationery)
  - Makanan (Food)
  - Orang (People)
  - Tempat (Places)
  - And more!
- 📊 **Live Word Count** - See filtered results in real-time
- 🎨 **Stroke Order Animation** - Interactive character writing animations
- 🔊 **Audio Pronunciation** - Text-to-speech for Japanese words

### 📱 Fully Responsive Design
- 💻 **Desktop**: Beautiful 5-column bento grid layout
- 📲 **Mobile**: Optimized 2-column layout with adaptive character sizing
- 🎯 **Smart Scaling**: Characters automatically resize based on word length
  - Mobile: 4 chars = 50px, 5+ chars = 42px
  - Desktop: 4 chars = 75px, 5+ chars = 60px
- ✨ **Smooth Animations**: Staggered card entrance, hover effects, modal transitions

### 🎨 Modern UI/UX
- Clean, minimalist bento grid design
- Soft shadows and glassmorphism effects
- Color-coded category indicators with dots
- Beautiful modal detail views
- Inter font for English, Noto Sans JP for Japanese
- Dark mode friendly colors

---

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for CDN resources)

### Running Locally

1. **Clone the repository**
```bash
git clone https://github.com/Kaa278/dklearnjpn.git
cd dklearnjpn
```

2. **Start a local server**
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx serve

# Or simply open index.html in your browser
```

3. **Open in browser**
```
http://localhost:8000
```

---

## 📂 Project Structure

```
kotoba/
├── index.html              # Main HTML structure
├── style.css               # Styling and animations
├── app.js                  # Application logic
├── data/
│   └── vocabulary.json     # 776 vocabulary words
└── README.md              # This file
```

---

## 📊 Content Statistics

### Vocabulary (776 words)
| Category | Count | Examples |
|----------|-------|----------|
| 🏃 Kata Kerja | 150+ | たべます, のみます, いきます |
| 📝 Kata Sifat | 50+ | おおきい, ちいさい, あたらしい |
| ❓ Kata Tanya | 11 | だれ, どこ, なに, いつ |
| 👉 Kata Tunjuk | 12 | これ, それ, あれ, ここ |
| 🔤 Partikel | 16 | は, が, を, に, で |
| ✏️ Bunbougu | 17 | えんぴつ, ノート, はさみ |
| 🍱 Makanan | 30+ | さかな, にく, ごはん |
| 👥 Orang | 25+ | せんせい, がくせい, ともだち |
| 🏫 Tempat | 20+ | がっこう, えき, みせ |
| 🗣️ Ungkapan | 15+ | おはよう, ありがとう, すみません |
| 🔢 Angka | 13 | いち, に, さん, ひゃく, せん |
| ⏰ Waktu | 30+ | きょう, あした, げつようび |

### Kanji (130 characters)
- **Numbers**: 一二三四五六七八九十百千万
- **Time**: 日月火水木金土年時分半今毎
- **People**: 人父母子男女友先生学校
- **Places**: 国外中上下前後左右東西南北山川海駅店家室
- **Actions**: 行来見聞食飲読書話言買売作出入立休会待思知住働
- **Things**: 本車電話語文字名手足目耳口頭体
- **Adjectives**: 大小高安新古長短多少早白黒赤青
- **Common**: 何天気雨雪花犬猫魚肉物者方円

---

## 🎨 Design Features

### Color Palette
- **Primary**: Blue (#007aff)
- **Background**: Light gray (#f5f5f7)
- **Cards**: White with soft shadows
- **Text**: Dark gray (#1c1c1e)

### Typography
- **UI Elements**: Inter (Google Fonts)
- **Japanese**: Noto Sans JP (Google Fonts)
- **Fallback**: System fonts

### Animations
- ✨ Staggered card entrance (0.05s delay per card)
- 🎯 Stroke order animation using HanziWriter & KanjiVG
- 🔄 Smooth modal transitions
- 📱 Hamburger menu slide-down
- 🎨 Hover effects and active states

---

## 🖥️ Browser Support

| Browser | Support |
|---------|---------|
| Chrome/Edge | ✅ Fully Supported |
| Firefox | ✅ Fully Supported |
| Safari | ✅ Fully Supported |
| Mobile Safari | ✅ Optimized |
| Chrome Mobile | ✅ Optimized |

---

## 🔧 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with flexbox/grid
- **Vanilla JavaScript** - No frameworks, pure performance
- **Tailwind CSS** (CDN) - Utility-first styling
- **Font Awesome** - Beautiful icons
- **Google Fonts** - Inter & Noto Sans JP
- **HanziWriter** - Kanji stroke animations
- **KanjiVG** - Kana stroke data
- **Web Speech API** - Audio pronunciation

---

## 📝 Data Management

- **External JSON**: Vocabulary stored in `data/vocabulary.json`
- **Async Loading**: Non-blocking data fetch
- **Fallback System**: Minimal dataset if JSON fails
- **No Backend**: 100% client-side application
- **LocalStorage**: Optional caching (future feature)

---

## 🎯 Learning Levels

This app covers:
- **JLPT N5**: Basic vocabulary and kanji
- **JLPT N4**: Intermediate vocabulary and kanji
- **JLPT N3**: Some advanced vocabulary

Perfect for beginners to intermediate learners! 🎓

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create feature branch (`git checkout -b feature/NewFeature`)
3. Commit changes (`git commit -m 'Add NewFeature'`)
4. Push to branch (`git push origin feature/NewFeature`)
5. Open a Pull Request

### Ideas for Contribution
- Add more vocabulary (N3, N2 levels)
- Add example sentences
- Add JLPT level tags
- Improve mobile UX
- Add quiz/practice mode
- Add dark mode toggle

---

## 📄 License

This project is open source and available for educational purposes.

---

## 👨‍💻 Author

**Kaa278**

- GitHub: [@Kaa278](https://github.com/Kaa278)
- Repository: [dklearnjpn](https://github.com/Kaa278/dklearnjpn)
- Live Demo: [dklearnjpn.vercel.app](https://dklearnjpn.vercel.app/)

---

## 🙏 Acknowledgments

- [HanziWriter](https://hanziwriter.org/) - Kanji stroke animations
- [KanjiVG](https://kanjivg.tagaini.net/) - Kana stroke data
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Font Awesome](https://fontawesome.com/) - Icon library
- Japanese language learning community

---

<div align="center">

**Made with ❤️ for Japanese learners worldwide**

⭐ Star this repo if you find it helpful!

[🌐 Try it now!](https://dklearnjpn.vercel.app/)

</div>
