# Cara Mengubah PWA Menjadi APK (Android App)

Karena **DKotoba** sudah menjadi PWA yang valid (punya `manifest.json`, `sw.js`, dan HTTPS support), kamu bisa mengubahnya menjadi aplikasi Android (.apk / .aab) dengan mudah.

Ada 2 cara populer:
1.  **Cara Mudah (Tanpa Coding)**: Menggunakan **PWABuilder**.
2.  **Cara Developer (CLI)**: Menggunakan **Bubblewrap**.

---

## 1. Cara Mudah: PWABuilder (Disarankan) 🏆

Ini adalah cara paling cepat dan tidak perlu install software berat di komputer.

**Langkahnya:**

1.  **Deploy Dulu**: Pastikan web DKotoba kamu sudah online (misalnya di Vercel, Netlify, atau GitHub Pages). PWA butuh link `https://...` yang aktif.
2.  Buka website [**PWABuilder.com**](https://www.pwabuilder.com/).
3.  Masukkan URL web kamu (contoh: `https://dkotoba.vercel.app`) dan klik **Start**.
4.  Tunggu proses scanning selesai. Pastikan semua checklist hijau (atau minimal tidak ada error fatal).
5.  Klik tombol **Package for Store**.
6.  Pilih **Android**.
7.  Kamu akan diminta mengisi form (Package ID, App Name, dll).
    *   **Signing Key**: Pilih "Generate New" kalau cuma buat test atau belum punya key.
8.  Klik **Download**.
9.  Kamu akan dapat file `.zip` yang berisi file `.apk` (bisa langsung install di HP) dan `.aab` (buat upload ke Play Store).

---

## 2. Cara Developer: Bubblewrap CLI 💻

Cara ini kalau kamu mau build sendiri di laptop kamu (lebih fleksibel tapi butuh setup).

**Syarat:**
*   Node.js (Sudah ada)
*   Java Development Kit (JDK) 8+
*   Android SDK Command-Line Tools

**Langkahnya:**

1.  Install Bubblewrap CLI:
    ```bash
    npm install -g @bubblewrap/cli
    ```

2.  Buat folder baru untuk project Android:
    ```bash
    mkdir dkotoba-android
    cd dkotoba-android
    ```

3.  Jalankan init:
    ```bash
    bubblewrap init --manifest https://url-web-kamu.com/manifest.json
    ```

4.  Jawab pertanyaan-pertanyaan yang muncul (nama app, warna, dll).

5.  Build project:
    ```bash
    bubblewrap build
    ```

6.  Setelah selesai, file `.apk` akan muncul di folder tersebut.

---

## Kenapa Harus Trusted Web Activity (TWA)?

Kedua cara di atas menggunakan teknologi **TWA**. Bedanya dengan bikin APK biasa:
*   **Selalu Update**: Kamu gak perlu bikin APK baru tiap kali update konten. Cukup push code baru ke web (Vercel/GitHub), aplikasi di HP user otomatis terupdate saat dibuka! 🚀
*   **Ringan**: Ukuran APK sangat kecil (seringkali di bawah 1-2 MB) karena asset utamanya tetap di web.

## Rekomen
Untuk sekarang, saya sangat sarankan pakai **Cara 1 (PWABuilder)**.
Deploy dulu webnya ke **Vercel** (gratis & support PWA bagus), lalu masukkan linknya ke PWABuilder. 5 menit jadi APK! ✨
