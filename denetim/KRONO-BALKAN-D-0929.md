# KRONO-BALKAN-D-0929 — Yunanistan · Bulgaristan kronolojisi (rapor, 29 Eylül 2026)

Şartname `oturumlar/KRONO-BALKAN-D-0929.md` · ORTAK `oturumlar/KRONO-DUNYA-0929-ORTAK.md` §4.1 (M-5396)
· künye kuralı M-5416.

## ① Envanter — ölçüldü, tahmin değil

- **Şartnamenin iki öncülü tutmadı** (M-5393'te bildirildi):
  1. "Kronolojisi HİÇ YOK" değil: `kronoloji_balkan.js` (177) içinde **~49 Yunan + ~52 Bulgar** maddesi
     zaten yazılı (1185-1923, on alan tam). Ama `window.KRONOLOJI_BALKAN` → id `balkan` → künye yok:
     canlı yayında ölçüldü, **177 yüklü, bindirildiği künye []**. Onarımı KRONO-BAGLAMA-0929'da.
  2. `window.KRONOLOJI_BULGARISTAN` adı bağlanmazdı (`bulgaristan` id'li künye yok) → §4.1 ile
     `KRONOLOJI_COK_*` yoluna geçildi.
- Anahtar kelime taraması (bütün `olaylar*` + `kronoloji_*` + `savaslar` + künye kronolojileri):
  **721 ilgili madde, 70 dosya** (yüzyıl: 12.yy 2 · 13. 19 · 14. 114 · 15. 107 · 16. 64 · 17. 55 ·
  18. 37 · 19. 173 · 20. 150). En büyük üç kaynak: `kronoloji_balkan` 103 · `olaylar_ek5` 89 · künyeler 49.
- Künyeler: `bulgar-carligi` (1185-1396) · `sarki-rumeli` (1878-1885) · `bulgaristan-prensligi`
  (1878-1908) · `bulgaristan-kralligi` (1908-1923) · `yunanistan` (1821-1923) · `girit-devleti`
  (1898-1913) · `mora-despotlugu` (1349-1460). Haritada `bulgar-carligi` DEĞİL `bulgaristan` boya
  kimliği kullanılıyor (21 yerleşim, 1281-1396).
- **Harita senkronu:** 7 künye + `bulgaristan` boya kimliğinin **107 harita kırılması** (s/v/isg
  giriş-çıkış, gün × kimlik × yön). 55'inde ±30 gün içinde yer adı eşleşen madde var; 52'sinde
  yalnız yakın tarihli (ilgisi zayıf) madde var. Kalan gerçek boşluk kümesi: **1912 Kuzey Ege adaları**
  (Limni · Taşoz · Semadirek) — yazıldı.

## ② Karar — neyi YAZMADIM ve niçin

- `kronoloji_balkan`daki ~101 GR/BG maddesi **kopyalanmadı**: BAGLAMA bağladığı gün panel çift olurdu
  (COK ekleyicisi yalnız birebir `t`+`b`yi atar). Koordinatör onayladı (M-5416).
- Çekirdekteki 1821-1832 maddeleri yeniden yazılmadı (aynı gerekçe; onaylandı).
- 1396-1878 Bulgar olayları ve 1821 öncesi Yunan olayları: o günlerde Bulgar/Yunan polity'si YOK;
  olaylar dört ayrı Osmanlı idari biriminde → çekirdeğe aittir. Ölçüm ve liste `-KUNYE.md` ②.
- Yalnız yıl ya da ay veren ve yıl-temsilî yazılınca yanlış sıraya düşecek olaylar (1912 Midilli
  "sonbahar", 1923 "Ekim" darbe girişimi, 1920 seçimi) YAZILMADI.
- TDV'nin şüpheli cümleleri (1342 Duşan-Yanya, VMRO'nun Sofya'da kuruluşu) madde yapılmadı (`-DUZELTME.md` D).

## ③ Yazılan — 22 madde, hepsi TDV dayanaklı

`data/kronoloji_cok_yunanistan.js` → `window.KRONOLOJI_COK_YUNANISTAN` — 16 madde
| t | künye | başlık | kaynak |
|---|---|---|---|
| 1318-01-01 | epir-despotlugu⁺ · bizans | Yanya yeniden Bizans'a bağlandı | TDV Yanya |
| 1366-01-01 | epir-despotlugu⁺ | Tomas Preljubović Yanya'ya hâkim oldu | TDV Yanya |
| 1380-01-01 | epir-despotlugu⁺ | Tomas Osmanlılardan yardım istedi | TDV Yanya |
| 1383-01-01 | mora-despotlugu | Theodoros Palaiologos despot — Arnavut iskânı | TDV Mora · Yunanistan |
| 1395-01-01 | mora-despotlugu | Osmanlılar Carlo Tocco'nun davetiyle Mora'ya girdi | TDV Mora |
| 1411-01-01 | epir-despotlugu⁺ | Yanya Carlo Tocco'nun yönetimine geçti | TDV Yanya |
| 1826-04-04 | yunanistan | Petersburg Protokolü | TDV Yunanistan |
| 1828-01-01 | yunanistan | Kapodistrias devletin başına geçti | TDV Yunanistan |
| 1895-01-01 | yunanistan | Trikupis hükümetten çekildi | TDV Yunanistan |
| 1897-02-10 | yunanistan | Yunan filosu Girit'e — Vassos'un zapt beyannamesi | TDV Girit · Yunanistan |
| 1904-01-01 | yunanistan | Makedonya'da Rum çete hareketi | TDV Makedonya · Yunanistan |
| 1908-05-11 | girit-devleti | Hâmî devletler askerlerini çekme kararını bildirdi | TDV Girit |
| 1912-10-10 | yunanistan · girit-devleti | Girit ile meclislerin birleşmesi | TDV Girit · Yunanistan |
| 1912-10-21 | yunanistan | Limni'nin işgali | TDV Limni |
| 1912-10-30 | yunanistan | Taşoz'un işgali | TDV Taşoz |
| 1912-11-01 | yunanistan | Semadirek'in işgali | TDV Semadirek |

`data/kronoloji_cok_bulgaristan.js` → `window.KRONOLOJI_COK_BULGARISTAN` — 6 madde
| t | künye | başlık | kaynak |
|---|---|---|---|
| 1365-01-01 | vidin-carligi⁺ · bulgar-carligi | Macar Kralı Layoş Vidin'i aldı | TDV Vidin · Bulgaristan |
| 1369-01-01 | vidin-carligi⁺ · bulgar-carligi | Vidin geri alındı — Osmanlı'nın Vidin'le ilk teması | TDV Vidin · Bulgaristan |
| 1392-01-01 | bulgar-carligi | Şişman'ın Sigismund ile gizli yazışması | TDV Bulgaristan |
| 1879-01-01 | bulgaristan-prensligi | Sofya başşehir oldu | TDV Sofya |
| 1895-01-01 | bulgaristan-prensligi | Yüksek Makedonya Komitesi | TDV Makedonya |
| 1923-09-23 | bulgaristan-kralligi | Eylül Ayaklanması | TDV Bulgaristan |

⁺ künyesi YOK, M-5416 (3) gereği önerilen id ile yazıldı (`-KUNYE.md` ①). `01-01` günlü maddelerin
hepsinde `gun:` alanı kaynağın verdiği hassasiyeti yazar.

📌 Sayı küçük, bilerek: ORTAK §6 "30 iyi kaynaklı madde > 100 kaynaksız". Bulgaristan'ın 1878-1923'ü
ve Yunanistan'ın 1832-1923'ü `kronoloji_balkan` + `KRONOLOJI_COK_1DUNYA_A` + çekirdekte zaten yoğun;
bu dosyalar yalnız onların DIŞINDA kalanı taşır.

## ④ Denetim — koşuldu

```
node --check                        iki dosya ✓
node denetim/ARAC-KRONO-BALKAN-D-0929-SINA.js    SONUÇ: temiz (22 madde; 2 önerilen künye 6 madde bekliyor)
SINA_TERS=1 (bilerek bozulmuş 3 kayıt)          8 kusur yakaladı ✓  — sınav iki yönde
py arac/odak_olc.py                 yunanistan 16: 14 KONUMLU + 2 KUTULU · bulgaristan 6: 5+1 · ODAKSIZ 0 · kırık atıf 0
                                    (kapıdaki tek çözülmeyen atıf kronoloji_dogu_afrika 'Ogaden' — benden önce vardı)
py arac/denetle_kronoloji.py        iki dosya ✓ temiz (genelde 39 İHLAL başka dosyalarda)
py arac/denetle.py                  SONUÇ: temiz
```

## ⑤ Açık kalanlar
- `index.html` + `arac/paketle.py` bağlaması (koordinatör) — dosyalar **bağlanmayı bekliyor**, sitede henüz görünmez.
- `epir-despotlugu`, `vidin-carligi` künyeleri (koordinatör) — açılınca 6 madde kendiliğinden bağlanır.
- `-DUZELTME.md`: 12 gün çelişkisi (en büyüğü Tırnova 1393: atlas 17 Temmuz ↔ TDV 17 Haziran, 5 kayıt + harita).
- `-YERLESIM-ONERI.md`: 3 kaynaklı ada penceresi (Jülyen→Gregoryen) + 3 düşük öncelikli.
- Çekirdek boşlukları (yazmadım, çekirdeğe ait): 1841 Niş · 1849 Vidin · 1867 Ziştovi · 1875 cemiyetler ·
  1876 Nisan isyanı (yalnız kronoloji_balkan'da) · 1798 Rigas · 1878 Halepa Mukavelenamesi (Girit, TDV 23 Ekim 1878).

## Dosyalar
`data/kronoloji_cok_yunanistan.js` · `data/kronoloji_cok_bulgaristan.js` (üretilmiş) ·
`denetim/ARAC-KRONO-BALKAN-D-0929-URET.py` (üretici, maddeler burada) · `-SINA.js` · `-TDV.py` ·
`denetim/KRONO-BALKAN-D-0929-tdv-onbellek/` (TDV önbelleği) · `-KUNYE.md` · `-DUZELTME.md` ·
`-YERLESIM-ONERI.md` · bu dosya.
