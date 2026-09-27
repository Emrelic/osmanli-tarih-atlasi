# ODAK-AVRUPA-BATI-0080 — teslim raporu (27 Eylül 2026)

Şartname `oturumlar/ODAK-AVRUPA-BATI-0080.md` · uygulayıcı `denetim/ODAK-AVRUPA-BATI-0080-uygula.py`
· öneriler `denetim/ODAK-AVRUPA-BATI-0080-oneri.json` (203 kayıt, her birinde sınıf + gerekçe + kaynak + dikkat).

## 1. Taban — şartname tablosu ile uyuştu
`py arac/odak_olc.py --dosya …` 13 dosya: **93 ODAKSIZ + 110 BEYANLI = 203**, dosya dosya
şartname tablosuyla birebir (sinir 56 · almanya 32 · portekiz 30 · hollanda 19 · ispanya 16 ·
habsburg 11 · fransa 10 · ingiltere 10 · isvec 8 · venedik 6 · lehistan 3 · italya 1 · italya_sehir 1).

## 2. Sınıflama
| | A | B | C | D | E | toplam |
|---|---|---|---|---|---|---|
| ODAKSIZ | 29 | 63 | 1 | 0 | 0 | 93 |
| BEYANLI | 21 | 53 | 36 | 0 | 0 | 110 |
| **toplam** | **50** | **116** | **37** | **0** | **0** | **203** |

- **D = 0.** 110 beyanın hiçbiri Osmanlı çapında değil; ikisi Osmanlı'yla ilgili ama BÖLGESEL
  (1525 Selman Reis raporu → Kızıldeniz; 1672 Brandenburg kuvvetleri → Kamaniçe cephesi).
  A/B/C'ye çevrilen 110 maddenin hepsinde `kapsam_genis:true` SİLİNİR.
- **E = 0.** Her maddenin yeri metinden/başlıktan ya da bölgesinden çıkarılabildi. Ama yeri
  METİNDE yazmayan 10 madde **`dikkat:1`** taşır (aşağıda); tartışmalı sayılırsa
  `--dikkatsiz` ile dışarıda bırakılır ve E'ye düşer.
- **A (50):** 21'i `yer_id` (havuzda ad var), 29'u `yer_kon` (havuzda yok: Worms, Wittenberg,
  Speyer, Leiden, Lahey, Breda, Tomar, Sagres, Llívia, Piacenza …). Koordinatlar yerin bilinen
  konumudur, yaklaşık (±3 km; Alfarrobeira/Montes Claros ±5, Usedom ±10 — gerekçede yazılı);
  hiçbiri atlas kaydından alınmadı (D207).
- **Antlaşma kuralı (sınır dosyasının 56 maddesi):** madde DEVREDİLEN TOPRAĞI anlatıyor ⇒ kamera
  toprağa (`odak_yer`), imza şehri `yer_id`ye YAZILMADI (yer_id karta "olay burada" diye düşer;
  Stettin'de imzalanan barışın konusu Jämtland'dır). İstisna: imza yeri ile toprak aynı olan
  Llívia (A, yer_kon) ve Badajoz 1801 (A, yer_id — Olivenza 25 km, aynı kutu).
- **C (37):** kimlik kutusu ÖLÇÜLDÜ; temizse `odak_kimlik` (19 madde), sömürgelerle/veri
  kusuruyla bozuksa ana kara uçlarından `odak_yer` (18 madde; gerekçede ölçülen kutu yazılı).
  Bir istisna kasıtlı: 1869 Portekiz köleliğin kaldırılması — metin "bütün topraklarında
  (Angola, Mozambik, Goa dahil)" diyor, imparatorluk kutusu (-16..127) doğru içerik (`dikkat:1`).

### `dikkat:1` — yeri metin söylemiyor, genel kabulle yazıldı (10)
| no | madde | alan |
|---|---|---|
| 62 | 1522 Luther Yeni Ahit baskısı | yer_kon Wittenberg |
| 85 | 1919-08-11 Weimar Anayasası | yer_kon Weimar — ⚠️ aşağıya bak |
| 93 | 1460 Denizci Henrique'in ölümü | yer_kon Sagres |
| 107 | 1662 Catherine of Braganza evliliği | yer_kon Portsmouth |
| 114 | 1869 Portekiz köleliğin kaldırılması | odak_kimlik portekiz (imparatorluk kutusu) |
| 123 | 1611 Haga'nın yola çıkışı | yer_kon Lahey |
| 124 | 1613 Ömer Ağa'nın gönderilmesi | yer_kon Lahey |
| 133 | 1688 III. William'ın çıkarması | yer_kon Brixham/Torbay |
| 140 | 1499 La Celestina | odak_yer Burgos |
| 142 | 1542 Leyes Nuevas | yer_id Barselona |

## 3. ÖNGÖRÜ (ölçümden önce yazıldı — betiğin kuru koşusu, `odak_olc.sinifla` ile)
```
değişen 203 · eski tutmuyor 0 · şartı sağlamadı 0 · kayıt yok 0 · metin bulunamadı 0
ODAKSIZ 93 → 19   BEYANLI-yabancı 110 → 0
```
🔴 **Kalan 19 ODAKSIZ ALETİN KUSURUDUR, verinin değil** — bkz. §4.1. Alet düzeltilirse
öngörü **ODAKSIZ 93 → 0, BEYANLI 110 → 0.** Uygulamadan sonra:
`py arac/odak_olc.py --dosya <her dosya>`.

## 4. Kapsam dışı bulgular — DÜZELTMEDİM, bildiriyorum

### 4.1 🔴 `arac/odak_olc.py:156` app.js kuralını yanlış okuyor
```python
if isinstance(ok, list) and len(ok) >= 2:      # KİMLİK sayısı ≥ 2
```
`app.js:11739-11755` `odak_kimlik` için **≥2 YERLEŞİM** ister, kimlik sayısı 1 olabilir
(`ids.length` yeter, sonra `n >= 2` yerleşim). Şartnamenin kendi C kuralı da tek kimliktir
(`odak_kimlik:["<o devletin id'si>"]`). ⇒ Alet her tek kimlikli C önerisini ODAKSIZ sayar:
bu paketin 19 maddesi ve **öteki ODAK kollarının bütün C maddeleri**. Öneri: `len(ok) >= 1`
(tam doğruluk için yerleşim sayısı suzgec.js ile — bu paketin `-sina.js`i bunu yapıyor).

### 4.2 Hayalet devlet (§3.5) — kimlik kutularını bozuyor
- `data/yerlesimler_kamerika.js` **Natashquan** (Québec): `s: fransa 1281-01-01 → 1763` ⇒
  fransa kutusu 1281'den itibaren Kanada'ya uzanıyor (ölçüldü: 1358'de batı ucu -61.82).
- Aynı dosya **Alatna/Allakaket, Nikolai (Yukarı Kuskokwim)** ve komşuları (iç Alaska):
  `s: ingiltere 1281 → 1763 → ingiliz-kuzey-amerika → 1867 kanada`. İç Alaska ne 1281'de
  İngiliz ne 1867'den sonra Kanadalıydı (Rus Amerikası → 1867 ABD). ingiltere kutusu 1387'de
  -154'e uzanıyor.
- `almanya` kimliği 1338-1529 arasında Narva/Tallinn/Tartu/Rēzekne'yi (Livonya) içeriyor —
  "devlet var, yeri yanlış" adayı (`D204`); ölçülmedi, yalnız kutu ucunda görüldü.

### 4.3 Künyesiz `devlet:` kimlikleri (kronoloji_almanya.js)
`saksonya` · `pfalz` · `brandenburg-prusya` · `hannover` · `alman-konfederasyonu`
`devletler.js`te **YOK** (grep 0). Dosyada bu kimliklerle (+`bavyera`) 70 madde var. Prusya
maddesine künye id'si `prusya` ile odak verdim.

### 4.4 Tarih/yer tutarsızlığı — 1919-08-11 Weimar Anayasası
Madde "Weimar'da toplanan Ulusal Meclis'in kabul ettiği" diyor; meclis kabulü 31 Temmuz 1919
(Weimar), 11 Ağustos imza/ilan günüdür (Schwarzburg). Tarih alanına dokunmadım; kaynak
kontrolü gerekir.

### 4.5 Havuz boşlukları — nokta eklenirse odak iyileşir
Lahey, Leiden, Worms, Wittenberg, Speyer, Breda, Delft; Ticino (Lugano/Bellinzona);
Valtellina (Sondrio/Bormio/Chiavenna); Güney Tirol (Bolzano/Merano); Eupen/Malmedy;
Fiume/Gorizia; Essen/Duisburg; Kuzey Schleswig (Sønderborg/Tønder); Argos. Bunlar için
komşu havuz adlarıyla kutu kuruldu (gerekçede "havuzda YOK" yazılı).

## 5. Dosyalar
- `denetim/ODAK-AVRUPA-BATI-0080-uygula.py` — uygulayıcı (kuru koşu varsayılan)
- `denetim/ODAK-AVRUPA-BATI-0080-oneri.json` — 203 öneri
- `denetim/ODAK-AVRUPA-BATI-0080-sina.js` — ad/kimlik sınayıcısı (suzgec.js ile; betik kullanır)
- `denetim/ODAK-AVRUPA-BATI-0080-dokum.py · -havuz.py · -bas.py · -kutu.py · -uc.js` — ölçüm yardımcıları
