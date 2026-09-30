# UYGULA-OLAYLAR-0930 — kronoloji çekirdeği uygulama raporu (30 Eylül 2026)

Makine okunur: `denetim/UYGULA-OLAYLAR-0930.json`. Pay: `ACIK-BIRLESIK-0930.json`
`hukum=sirada` ∧ not'ta `olaylar` → **24 madde**.

## Sonuç
```
cozuldu (delilli)   11
sirada kaldı        13   → 7 başka oturumun dosyası (ekokuma 6 · savaslar 1) · 1 app.js
                           · 4 kısmen yapıldı, kalan kalem dosyam değil / kaynak gerek
                           · 1 yapılmadı (Osmanlı-Rus sınıf işi: Aksan/Badem okunmadı)
pay dışı yapılan      2   Anabolu kişi kartı (veri tarafı) · YERLESIM'in 4 maddesiz kırılması
```

## Önceden karara bağlanan iki madde
- **① Sırp fermanı** `olaylar_ek.js:77` 1830-11-08 → **1830-10-17** (TDV *sirbistan*
  "Nihayet 17 Ekim 1830'da verilen bir imtiyaz fermanıyla"). Değişmez 2: Kragujevac/Çaçak
  1830-10-17 aynı gün; Girit v: 1830-11-01 15 gün. Künye/12 nokta/tâbi penceresi bende değil.
- **② 1596 kişi kartı** `olaylar_ek7.js:60` → "Damad İbrâhim Paşa (ö. 1601)". kisiler.js'te
  kayıt YOKTU; UYGULA-KART-0930 birebir adla ekledi (`kisiler.js:51`). `kisiBul` node'da
  canlı veriyle: önce → `nevsehirli-damad-ibrahim-pasa`, şimdi → `damad-ibrahim-pasa-1601`.

## Yeni maddeler (13) — hepsi kaynaklı
| t | madde | kaynak |
|---|---|---|
| 1422/1450/1457 (yıl) | Erzincan-Kemah el değiştirmeleri | TDV erzincan · uzun-hasan |
| 1550 (yıl) | Şehrizor'un elden çıkışı (Sührâb) | TDV sehrizor |
| 1566-09-01 | Gyula (Göle) teslimi | TDV **pertev-pasa** (yer slug'ı 302) |
| 1663-04-13 | Uyvar seferi başladı | TDV kopruluzade-fazil-ahmed-pasa |
| 1672-06-04 | Lehistan seferi başladı | aynı |
| 1683 (yıl) | Viyana seferi kararı | TDV merzifonlu-kara-mustafa-pasa |
| 1683-07-14 | II. Viyana Kuşatması başladı (çekirdekte YOKTU) | aynı |
| 1685-10-15 | Tököli tutuklandı, Yukarı Macaristan kaleleri teslim | TDV tokoli-imre |
| 1737-07 (ay) | Niş'in düşüşü | TDV nis |
| 1811-10 (ay) | Yenbu teslim alındı | Burckhardt II s.346 (archive.org'da okundu) |
| 1868 (yıl) | Katar — Âl-i Sânî, İngiliz müdahalesi | TDV katar |

## Gün/odak düzeltmeleri
1732-01-10→**01-08** (TDV hemedan) · Yeni Cami 1603-01-01→**12-22 gs:60** (vefat/cülûs
maddesinin ardına) · Deli Hasan 1603-01-01→**03-01 kesinlik:ay** (JSON biçimli üçüncü
madde — KAPAT notu yalnız iki tane saymıştı) · odak Viyana→Banaluka-Niş-Vidin · Yaş→Yaş-Kalas-Bender
· Tosun başlığı · Celayirli ic_not_d cümlesi silindi · Anabolu "İsmail Paşa" nitelendi.

## Bulunamadı
Niş 1737 günü · Yenbu teslim günü · Yukarı Macaristan kalelerinin tek tek teslim günleri ·
Viyana yürüyüşünün günleri (TDV vermiyor) · 1443 ve 1603 savaş başlangıç günleri.

## ⚠️ Yan etki — kart bağları
Gün değişince 11 ek-okuma bağı + `ekokuma_antlasma4.js:541` (t:1732-01-10) koptu
(`_ekBagEslesir` tam gün ister). Satır satır UYGULA-KART-0930'a (M-5617).

## Kapılar
`node --check` 12/12 ✓ · `odak_olc.py`: yeni atıfların hepsi çözülüyor (tek çözülmeyen
`kronoloji_dogu_afrika.js` Ogaden — önceden vardı) · `denetle.py` koşturulmadı · git yok.
