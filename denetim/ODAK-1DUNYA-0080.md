# ODAK-1DUNYA-0080 — I. Dünya Savaşı kronolojisinin harita odağı · RAPOR

Paket ODAK-0080 · 27 Eylül 2026 · şartname `oturumlar/ODAK-1DUNYA-0080.md`
Uygulayıcı: `denetim/ODAK-1DUNYA-0080-uygula.py` (varsayılan KURU KOŞU · `--uygula` · `--grup` · `--ayrinti`)

## 1. Taban — `py arac/odak_olc.py --dosya … --ayrinti` (27 Eylül, uygulamadan önce)

| dosya | madde | KONUMLU | KUTULU | BEYANLI→yabancı | ODAKSIZ |
|---|---|---|---|---|---|
| `kronoloji_cok_1dunya_A.js` | 97 | 0 | 0 | 0 | 97 |
| `kronoloji_cok_1dunya_B.js` | 90 | 35 | 0 | 55 | 0 |

Şartname tablosuyla BİREBİR uyuşuyor (YÜK 152).

## 2. Sınıflandırma — 152 madde

| sınıf | adet | alan |
|---|---|---|
| A tek belli yer | 76 | `yer_id` 29 · `yer_kon` 46 · `odak_yer` 1 (Falkland: muharebe açık denizde, Stanley yalnız kamera) |
| B birkaç yer / iki taraf | 46 | `odak_yer` |
| C devletin tamamı | 26 | `odak_kimlik` (tek kimlik) |
| D Osmanlı çapı | 0 | — (B'deki "Rusya Osmanlı'ya savaş ilan etti" bile Rusya künyesinde; B yapıldı) |
| E belirlenemedi | 4 | yazılmadı |

Kural: **`yer_id` YALNIZ maddenin kendi b/d metni yeri adlandırıyorsa** yazıldı. Savaş
ilanı, ültimatom, konuşma gibi metni yer vermeyen maddeler `odak_yer` (kamera) aldı —
kart yalan söylemez (`app.js:11697`). B dosyasının 55 maddesinin HEPSİNDE
`kapsam_genis:true` kaldırıldı (E dâhil: yalan beyan kalkınca kamera durur, panel söyler).

`yer_kon` koordinatları kaynaktan DEĞİL yerin bilinen konumundandır; her birinin
hassasiyeti gerekçede ±km olarak yazılı (±1 km saray/şehir … ±60 km Marne cephesi).
Tartışmalı iki tanesi (Lusitania — metin batış yerini söylemiyor; Süveyş Kanalı geçiş
kesimi Tûsûn — metin kesim adı vermiyor) gerekçede işaretli.

### E — 4 madde (`bulunamadı`)
- A 1917-01-22 Wilson «zafersiz barış» — metin yer vermiyor; Washington havuzda YOK;
  `abd` kutusu 224 yerleşim, boylam −170.7…144.8 → kullanılamaz.
- B 1917-05-19 / 1918-05-08 Nikaragua ×2 · B 1918-05-23 Kosta Rika — künye 0 yerleşim,
  havuzda o ülkenin hiçbir şehri yok.

## 3. Öngörü — ÖLÇÜMDEN ÖNCE (betiğin çıktısı scratch'e yazılıp `odak_olc.sinifla` ile ölçüldü)

```
app.js semantiğiyle:   A  ODAKSIZ 97 → 1  · B  BEYANLI→yabancı 55 → 0 · ODAKSIZ 0 → 3
odak_olc.py diyecek:   A  ODAKSIZ 97 → 8  · B  BEYANLI 55 → 0 · ODAKSIZ 0 → 22
                       A: KONUMLU 59 · KUTULU 30 · ODAKSIZ 8
                       B: KONUMLU 51 · KUTULU 17 · ODAKSIZ 22
```
Fark = 26 tek-kimlikli `odak_kimlik` (A 7 · B 19). **`odak_olc.py:156` `len(ok) >= 2`
kimlik SAYISINI sınıyor; `app.js:11741-11751` ise `ids.length` ≥1 ve ≥2 YERLEŞİM ister.**
Tek kimlikli C maddeleri app'te kutu kurar, ölçüm aleti onları ODAKSIZ sayar. Betiğin
kendi şart süzgeci her birini madde GÜNÜNDE ≥2 yerleşimle doğruladı (en düşük: haiti 2,
luksemburg 2).

## 4. Yan bulgular — düzeltilmedi, raporlanıyor

1. 🔴 **Alaska → `kanada` (1867-1923).** Allakaket, Fort Yukon, Nuchalawoya (Tanana),
   Telida, Nikolai (Yukarı Kuskokwim): `s:[{d:"kanada", f:"1867-07-01", t:"1923-10-29"}]`.
   Alaska 1867'den ABD toprağıdır → "devlet var, yeri yanlış" (`§3.5`, `D204`).
2. 🔴 **Havuzdaki "Kamina" Kongo'dadır** (−8.74, 25.00); Togo'daki 1914 Kamina değil →
   `yer_id:"Kamina"` yazmak kamerayı 3.000 km öteye uçururdu (yer_kon kullanıldı).
3. **"Roma" havuzda İKİ kayıt** (Roma + Roma (Queensland)); app.js ilk eşleşeni alır →
   `odak_yer`/`yer_id` için "Roma" GÜVENSİZ. "Trujillo" da iki kayıt (Peru · Honduras).
4. **Havuzda yok, çekirdek coğrafyada:** Muş · Hayfa · Washington · Verdun · Versay.
5. **İki veri dosyası ÜRETİLMİŞ** (`ARAC-1DUNYA-A-URET-0917.py`, `…-B-URET-0917.py`;
   B üreticisi `kapsam_genis: not m["yer"]` yazıyor). Üretici yeniden koşarsa bu iş SİLİNİR.
