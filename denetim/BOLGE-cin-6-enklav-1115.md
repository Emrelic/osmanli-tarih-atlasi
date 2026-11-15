# BOLGE-cin / ADIM 6 — Enklav / eksklav (15 Kasım 2026)

Ölçüm: yerleşim `s:` pencereleri node/vm ile; `eksklav` alanı ve Değişmez 8 harita çıktısıyla (ölçülemedi: petek koşusu yok).

## Modellenenler (doğru/yeterli)
- **Makao**: `portekiz` 1557-01-01 → 1887-12-01, `makao-portekiz` 1887-12-01 → 1999-12-20, sonra ÇHC. Künye `makao-portekiz` yerleşimi 1 (Makao). Kaynak 1887 Pekin Antlaşması maddesi atlasta var. 1557 «yerleşim hakkı» (yıl) ↔ künye-içi `1557-01-01` tutarlı. Not: 1557-1887 arası Makao Çin egemenliğinde Portekiz kirasıydı (egemenlik 1887'de devredildi, Amaral 1849 öncesi/sonrası tartışması); atlas «portekiz» yazıyor — beyan edilmiş mi (`kaynak:`) bu turda tek tek okunmadı.
- **Qingdao (Kiautschou)**: `almanya` 1898-03-06 → 1914-11-07, Japonya 1914-11-07 → 1922-12-10, ÇC 1922-12-10 → 1949-10-01 ✓ (Jiaozhou 1898-03-06 sözleşmesi atlas künye-içi `KRONOLOJI_CIN:116` ✓).
- **Lüşun (Port Arthur)**: Qing → `rusya` 1898-03-27 → 1905-09-05 → Japonya 1905-09-05 → 1945-09-02 ✓ (Sözleşme 27 Mart 1898 ✓; Portsmouth ratifikasyonu Eylül 1905 ✓).
- **Formosa**: Hollanda (Tainan 1624-08-26 → 1662-02-01), İspanya (Keelung 1626 → 1642-08-26), Tungning, Qing, Formosa Cumhuriyeti, Japonya, ÇC — yerleşim pencereleri künye maddeleriyle uyumlu (adım 3: kırılmalar maddeli).
- **Lijiang/Kunming 1368-09-14 → 1382 `kuzey-yuan` `eksklav:true`**: Liang Prensliği (Yunnan) Moğolistan'dan ayrı; `eksklav` alanı kullanılmış ✓ (künye eksik: adım 1 #1).
- **Gulca (Yining) 1871-07-04 → 1882-03-22 `rusya`** ✓ (İli işgali; Petersburg 1881 antlaşması onayı 1882-03-22? atlas künye-içi `KRONOLOJI_SINI:57` 1881-08-19 ile 7 ay fark: işgal sonu ≠ antlaşma tarihi, kaynaklı ayrım — **OKUNMADI**).

## Modellenmemiş / eksik
1. **Hong Kong — Kowloon ve Yeni Bölgeler**: Atlas yerleşimi tek nokta, **koordinatı `[22.32, 114.17]` = Kowloon (Tsim Sha Tsui/Mong Kok) kuşağı**, Hong Kong Adası değil. `s:` 1842-08-29'dan itibaren `hong-kong-ingiliz`. Kowloon (Boundary Street'e dek) yalnız 1860-10-24'te (Pekin Sözleşmesi) İngiliz oldu; Yeni Bölgeler 99 yıllık kira 1898-06-09/07-01. Atlasta bu iki tarihte **kırılma yok**, yalnız künye-içi madde var (`1860-10-18`, `1898-06-09`). Sonuç: 1842-1860 arası Kowloon petekte İngiliz boyanıyor olabilir; Yeni Bölgeler (1898'e kadar) Qing sahipli olmalı ama petek tek noktaya bağlı. **Tavsiye:** ayrı yerleşimler `Hong Kong Adası` (22.27,114.17; ingiltere 1841-01-26/1842-08-29), `Kowloon` (1860-10-24), `Yuen Long/Tai Po (Yeni Bölgeler)` (1898-07-01 itibarıyla kira — **kira bölgesi**: egemenlik Çin'de, idare İngiliz: `s:` sahibi Qing + `eksklav`/idare notu, kaynak Convention for the Extension of Hong Kong Territory 1898-06-09 metni). Kuyruğa yazıldı.
2. **Weihaiwei** (İngiliz kira 1898-07-01 → 1930-10-01): yerleşim yok (aramada 'weihai' eşleşmedi), künye yok.
3. **Guangzhouwan (Fransız kira)** 1898-1899 → 1943/45: yerleşim (Zhanjiang) yok, künye yok.
4. **Kwantung (Dalian/Dalny)**: Lüşun var, **Dalian yok**; kiralık bölge künyesi yok (`rusya`/`meiji-japonya` doğrudan).
5. **Şanghay Uluslararası Yerleşimi/Fransız İmtiyazı** (1845-1943, 1863 birleşme): Şanghay tek nokta, tek sahip (Ming → Qing → ÇC); yabancı imtiyazlar tek noktada eriyor (egemenlik değil, **imtiyaz**: kullanıcıya sade bir 'ekstrateritoriyal imtiyaz' notu gerekir, beyan yok).
6. **Tibet–Çin tampon**: Phagmodrupa → Ganden Phodrang → 1720-1912 `qing` → 1912-1951 `tibet-ganden-phodrang` (Lhasa); Doğu Tibet (Kham/Amdo) ve Sikang/Xikang idareleri Qing/ÇC'ye mi, Lhasa'ya mı bağlı kaynaklı değil — **Kham/Çamdo yerleşim kümesi bu turda ölçülmedi.**
7. **Doğu Türkistan 1933/1944 cumhuriyetleri**: Kaşgar 1933-11-12 → 1934-03-21, Gulca 1944-11-12 → 1949-10-20 ✓ pencere + madde (KRONOLOJI_SINI:135-137, 140).
8. **Penghu 1622-01-01 → 1624-08-26 `hollanda-dogu-hint`** ✓ (VOC Penghu, `KRONOLOJI_SINI:0-1` maddeli).

## Değişmez 8
Ölçülemedi (ana checkout/ değişmez 8 `coz-c` ister; harita çıktısı HAVVA koşusudur). Riskli noktalar: Hong Kong/Kowloon noktası (denizle ΔE 3,67 + enklav), Makao (küçük nokta, `makao-portekiz` kıyı), Qingdao/Lüşun (Japonya/Rusya petek içinde Qing/ÇC toprağı?). Koşu sonrası `denetle` Değişmez 8 bakılmalı.
