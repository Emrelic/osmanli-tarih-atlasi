# UMIT-W41-DURUM-UC-SAYIM-1006 — durum_tablosu'nun kalan üç sayımı (madde · duygu · yer_id) + `yer_id_bos`

**Ölçülen commit:** origin/main **d0877829** (`HAZIR-KITA 3: HAZIRIM makineye BAGLI …`), atılabilir ağaç `C:\atlas-w41` (`git -C C:\atlas worktree add --detach`). İkinci durum: aynı commit + W7 zinciri `DURUM-TABLOSU-SAYIM-1006b → KRONO-SAY-SINAV-SAGLAM-1006 → -1006b → -1006c`.
Commit yok · `--yaz` yok · motor tuzu dosyalarına 0 dokunuş · `arac/durum_tablosu.py` yalnız okundu (öneri diff olarak, uygulanmadı).

## 0. ÖNGÖRÜ, ölçümden ÖNCE mühürlendi (06.10 01:44)
1. main regex: 1774 · 1398 · 1641 · 28 vefat.
2. Bağımsız node sayacı: 1768 · 1418 · 1629 (+4 boş) · 27.
3. Zincir uygulanmış durum_tablosu = node sayacı, dosya dosya.
4. Fark sınıfları: madde = alt_kronoloji + yorum fazlası − tırnaklı eksiği · duygu = tırnaklı + boşluklu eksiği − yorum fazlası · yer_id = alt + yorum + boş − tırnaklı.
5. `yer_id_bos`: main'de HİÇ hesaplanmıyor; D265'in vakası 1006 diff'inde; 1006b basıyor.

**Öngörü ↔ ölçüm:** 1 ✓ · 2 ✓ · 3 ✓ (75/75 dosya, 0 fark) · 4 ✓, ama **eksik bir sınıf vardı: BLOK YORUM** (sh110, sk105; aşağıda) · 5 ✓, ama **öngörmediğim dördüncü vaka çıktı: `alt_adim` zincirde de hesaplanıyor, basılmıyor** (§4).

## 1. Hangisi doğru: **1768 · 1418 · 1629 (+4 boş) · 27**
Üç bağımsız ölçüm aynı sonucu veriyor:
| Ölçüm | madde | duygu | yer_id dolu | boş | vefat |
|---|---|---|---|---|---|
| main `durum_tablosu.py` (regex, gerçek koşu) | 1774 | 1398 | 1641 | – | 28 |
| **W41 node, dosya dosya** (`olaylar*.js` 75 dosya, her biri ayrı `new Function("window",…)`, üst düzey `OLAYLAR*` nesnesi) | **1768** | **1418** | **1629** | 4 | **27** |
| **W41 node, TARAYICI GİBİ**: `index.html`in yüklediği 70 yerel `data/*.js` (paket_*.js dâhil) SIRAYLA tek `window`da | 1768 | 1418 | 1629 | 4 | 27 |
| `denetle.olaylari_yukle()`, yalnız `olaylar*` payı (2187 − kronoloji_sinir 419) | 1768 | | | | |
| zincir `kronoloji_say.js` (W7) | 1768 | 1418 | 1629 | 4 | 27 |

- Tarayıcı yüklemesi 75 `OLAYLAR*` dizisinin 75'ini de buluyor, hata 0 ⇒ paketler kaynakla tutarlı, bayat paket yok.
- W41 sayacı ile W7 `kronoloji_say.js` **75 dosyanın 75'inde** madde/duygu/yer_id/vefat/alt_adim BİREBİR.

## 2. Fark NEREDEN geliyor: her geçiş bağlamıyla sınıflandı (artık 0)
Yöntem: bir JS lekseri (dizge · `//` · `/* */` · `alt_kronoloji:[…]` aralığı) her regex geçişini ve regex'in KAÇIRDIĞI geniş-desen geçişini sınıflar. Sınıflama betiği scratchpad'de (`sinif.py`), commit edilmedi.

| Dosya | Alan | Sınıf | Adet | Etki |
|---|---|---|---|---|
| olaylar.js | madde | `alt_kronoloji` içi adım (1453-05-29 ×14 · 1915-03-18 ×15) | 29 | regex FAZLA |
| olaylar.js | yer_id | `alt_kronoloji` içi | 29 | FAZLA |
| olaylar_ok106.js | madde 1 · yer_id 2 | `//` yorum | 3 | FAZLA |
| olaylar_ek5.js | yer_id | `//` yorum | 1 | FAZLA |
| olaylar_ek17.js | vefat_id | `//` yorum | 1 | FAZLA |
| **olaylar_sh110.js** | madde · duygu · yer_id | **`/* */` BLOK yorum** | 1+1+1 | FAZLA |
| **olaylar_sk105.js** | madde · duygu · yer_id | **`/* */` BLOK yorum** | 1+1+1 | FAZLA |
| olaylar_p0063.js · p0917taraf.js | yer_id | `yer_id:""` boş | 1 + 3 | FAZLA (dolu sayılmaz) |
| olaylar_ek8.js | madde 15 · duygu 8 · yer_id 15 | tırnaklı anahtar `"t":` | 38 | regex EKSİK |
| olaylar_kamerika.js | madde 11 · duygu 11 · yer_id 11 | tırnaklı anahtar | 33 | EKSİK |
| olaylar_ek21.js · ek22.js | duygu | boşluklu `duygu: [` | 2 + 1 | EKSİK |

Mutabakat, artık 0:
```
madde  1774 − 29 alt − 1 yorum − 2 blok + 26 tırnaklı               = 1768 ✓
duygu  1398 − 2 blok + 19 tırnaklı + 3 boşluklu                     = 1418 ✓
yer_id 1641 − 29 alt − 3 yorum − 2 blok − 4 boş + 26 tırnaklı       = 1629 ✓
vefat    28 − 1 yorum                                               =   27 ✓
```
- Kontrol: dizge içinde geçiş (`d:` metninde alan adı) bugün **0**. `duygu:[]` boş dizi **0**. `t` alanı olmayan nesne **0**.
- **W7 birleşik formülüyle karşılaştırma:** W7'nin formülü (`− // − alt + tırnaklı − boş + boşluklu`) BLOK YORUM sınıfını içermiyor. W7 sh110/sk105'i bilerek "ölü dosya beyanı" sabiti olarak bıraktı (DALGA8/9). Bu tabloyu yanlış yapmıyor (kronoloji_say.js node ile yükleyerek blok yorumu zaten görmüyor), yalnız SINAV'ın formülünü eksik bırakıyor. Önerim: sınıf adı olarak formüle eklensin, düşük öncelik.

## 3. Evren farkı (hüküm değil, ölçüm)
- Tablonun "Kronoloji" satırının evreni `olaylar*.js` (75 dosya). **Değişmez 2 evreni daha geniş:** `denetle.olaylari_yukle` 24 Eylül'den beri `kronoloji_sinir*.js`i de katıyor ⇒ **2187 = 1768 + 419**. Satır "Kronoloji" diyor ama kapının saydığının %81'ini gösteriyor. Ad mı daralsın ("olaylar*"), evren mi genişlesin: karar sizin.
- **Ekran evreni daha dar (O7 main'de hâlâ AÇIK):** `js/app.js:7035`teki `/^OLAYLAR(_[A-Za-z0-9]+)?$/` 7 diziyi eliyor (`OLAYLAR_SENKRON_0930` 2 · `_2S_0918` 20 · `_ORTADOGU_0919` 3 · `_2S_0919` 71 · `_SENUSI_0919` 5 · `_CUKUROVA_0907` 6 · `_0073_IRAN_YANYA` 5) = **112 madde**. Ekran en fazla 1656 madde gösteriyor (`kapsam:"konu"` süzgecinden önce). d0877829'da düzeltme inmemiş.

## 4. `yer_id_bos` neden basılmıyor (D265)
- **main d0877829:** basılmıyor, çünkü **hesaplanmıyor da**. `arac/kronoloji_say.js` main'de YOK; sayım `durum_tablosu.py:411-418` regex'i. Regex `yer_id:""`yi dolu sayar (+4), "boş" kavramı yok.
- **D265'in anlattığı yer** W7'nin İLK diff'i `DURUM-TABLOSU-SAYIM-1006.diff`: `kronoloji_say.js` `yer_id_bos`u sayıyor (diff satırı 122/146), ama `kronoloji_satiri()` yalnız `madde/duygu/yer_id/vefat_id` okuyor (diff satırı 40). Hesap ile basan satır aynı diff'te ama ayrı işlevlerde, ve basan unutulmuş.
- **1006b bunu kapatıyor:** satır `… 1629 \`yer_id\` (boş yer_id: 4) …`, eksik alan → ÖLÇÜLEMEDİ. Zincirde ölçüldü ✓.
- 🔴 **AMA aynı desen zincirde de sürüyor, dördüncü vaka:** `kronoloji_say.js` **`alt_adim` = 29** hesaplıyor (ayrıca `dosya` 75, `diger_dizi` []), `kronoloji_satiri()` basmıyor. D265 kural 3 sorusu ("hesaplanan alan kümesi = basılan alan kümesi"): hesaplanan sayı alanları {madde, duygu, yer_id, yer_id_bos, vefat_id, **alt_adim**}, basılan {madde, duygu, yer_id, yer_id_bos, vefat_id}. Fark **alt_adim**. `dosya`yı tutarlılık denetimi saydım, hücre değil (dosya sayısı tutmazsa zaten ÖLÇÜLEMEDİ). `kronoloji_say.js:21`in kendi yorumu "`diger_dizi`de görünür" diyor, ama o liste de basılmıyor; bugün boş olduğu için zararsız.

## 5. Öneri: `DURUM-UC-SAYIM-ONERI-1006.diff` (UYGULANMADI · LF · CR 0 · 3604 bayt · 2 dosya)
- `kronoloji_satiri()` → `**1768** madde (alt adım: 29) · 1418 duygu etiketli · 1629 \`yer_id\` (boş yer_id: 4) · 27 \`vefat_id\``.
- `kronoloji_say()`: `alt_adim` tamsayı değilse → ÖLÇÜLEMEDİ (yer_id_bos ile aynı koruma).
- Sınav (`ARAC-KRONO-SAY-SINAV-1006.py`) +3 soru: ① YÖN3 "alan eksik (alt_adim yok)" → ÖLÇÜLEMEDİ · ② hesaplanan sayı alanı kümesi = basılan kümesi (sayaca yeni alan eklenirse öter) · ③ gerçek veride her alan değeriyle satırda.
- **İki yönlü:** önerili **105/105**; yalnız 1006b'de (öneri yok) **103/105**: ① ve ③ öter, satır `alt adım` içermiyor. ⚠️ ② iki yönde de ✓. Kusuru şimdi değil GELECEKTE (yeni alan) yakalayan statik bir bekçi; bugünkü kusuru ③ yakalıyor.
- `durum_tablosu.py --sina` 9/9.
- **Uygulama sırası (ölçüldü):** 1006b + SAGLAM a/b/c üstüne İLERİ ✓ · uygulanmışta GERİ ✓ / İLERİ ✗ · main'e tek başına ✗ (1006b'ye bağlı).
  Kardeş diff'lerle: `KAYNAK-ZAYIF-SAYIM-1006` ve `DURUM-TABLOSU-KISI-KAYNAK-1006` **ÖNCE**, bu öneri SONRA → üçü de temiz (tam zincirde KRONO-SAY 105/105 · KAYNAK-ZAYIF 12/12 · `--sina` 9/9). **Ters sırada (öneri önce) KAYNAK-ZAYIF-SAYIM RED**, çünkü onun bağlamı `kronoloji_satiri`nin dönüş satırlarını içeriyor. ⇒ Bu öneri o ikisinden SONRA iner.
  (KISI-KAYNAK sınavı bu zincirde `w16_kisi.kova yok` diye düştü. Bu, DALGA11'in yazdığı W16 KISI-SAYIM-AYRI bağımlılığı, öneriyle ilgisiz.)

## 6. Bulunamayan / açık
- 4 boş `yer_id`nin beyan/borç ayrımı W7 DALGA5-7'de ölçülmüş; bu iş kapsamında yeniden ölçmedim.
- "Kronoloji" satırının evreni (olaylar* mı, Değişmez 2 evreni mi) için hüküm yok. §3.
- O7 (112 madde ekranda yok) main'de açık; bu işin kapsamında değil, yalnız ölçüldü.

## 7. git
- `C:\atlas-w41` kaldırıldı (`worktree remove --force` + `prune`).
- `C:\atlas-umit` yeni: `?? denetim/UMIT-W41-DURUM-UC-SAYIM-1006.md` · `?? denetim/DURUM-UC-SAYIM-ONERI-1006.diff`.
