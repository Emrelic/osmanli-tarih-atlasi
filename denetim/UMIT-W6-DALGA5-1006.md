# UMIT-W6-DALGA5-1006 — TR-1923 üreticisinin girdisi (B2) · zincirleme devralma (B1)

> 🔴 **ŞARTNAME: `TR1923-GIRDI-TASI-1006.diff` İNMEDEN `denetim/ARAC-TR1923-YAZ-0914.py`
> KİMSE TARAFINDAN `data/`ya KOŞTURULMAZ.** Bugün koşarsa çıktı dosyalarına üretimden
> sonra elle eklenmiş alanlar SİLİNİR (§2).

Görev: UMIT İRTİBAT → UMIT-W6-KAFKAS-1006 (dalga 5, koordinatör hükmü B1+B2).
Ağaç: `C:\atlas-w6b` (origin/main 8552686e). `C:\atlas-w6` olduğu gibi duruyor.
Koşu 20 sürüyor: motor tuzu (uret_petek · renkler · girdi · motor_onbellek) DONUK.

## 0. ÖNGÖRÜ — ölçümden ÖNCE mühürlendi (2026-10-05)
Bilinen tek şey: sınır dosyalarına üretim (8340883b) sonrası yalnız bir commit
(9b92117f) dokundu; içeriği bakılmadı.
- **İŞ 1:** Elle eklenen alanlar = dalga 4'te gördüğüm **4 kuzey kaydının** (Norapat, Beri,
  Kliçatak, Küçükperveli) `s:` dönemlerine eklenmiş `kaynak:` alt alanları (her biri 3
  dönem ⇒ ~12 alan). Güney dosyasında elle ek **0**. Betik bugün koşsa silinecek: o ~12
  `kaynak:` alt alanı. AYRICA kaynak kayıtlar 14 Eylül'den beri değiştiği için, girdi
  taşındıktan sonra bile sınav **BİREBİR ÇIKMAZ**. Fark beklediğim kayıtlar: Malak
  Dervent, Umur Fakih (Elhova düzeldi), Stérna, Küfkaynapınarı ve belki 4 Kafkas kaydı.
  ⇒ Sınavın "birebir" şartı yalnız "elle eklenen alanlar korunuyor mu" sorusunda geçer,
  zincir sorusunda geçmez.
- **İŞ 2:** Devralınmış günler **`s:` zincirini besliyor**, çünkü betik `s/d/v` kopyalıyor,
  `kd:` hiç yazmıyor. 4 kaydın hiçbiri adıyla yeniden kaynaklanamaz (köy taneciği; dalga
  1'de Beri ve Küçükperveli için zaten `bulunamadı`). ⇒ "çevir" seçeneği yok. Geri
  almak `s:` dönemlerini boşaltır: 4 kayıt × 1281-1923'ün büyük kısmı sahipsiz kalır ⇒
  Değişmez 1 sahipsiz sayısı **+4** (309 → 313) ve diff UYGULANMAMALI.

## 1. ÖLÇÜM — özet
| | Öngörü | Ölçüm | |
|---|---|---|---|
| Elle eklenen kayıt/alan | 4 kuzey kaydı, ~12 `kaynak:` alt alanı | 4 kuzey kaydı. Ama yalnız not değil: `s:` ZİNCİRİ değişmiş (yeni `timurlu` dönemi, 2 sınır kayması, 3 `kaynak:`). Güney 0 | ½ |
| Betik bugün koşsa SİLİNEN elle alan | ~12 | **0** | ✗ |
| Sınav birebir mi | hayır (kaynak kayması) | Güney **BİREBİR** · kuzey **6 kayıt farklı**; farkların HEPSİ kaynak kayması, hiçbiri elle alan kaybı değil | ✓ |
| İŞ 2: devralınmış günler nerede | `s:` | **`s:`** (4 kayıtta `kd:` YOK) | ✓ |
| Adıyla yeniden kaynaklanabilir | 0/4 | **0/4** | ✓ |
| Geri alınırsa D1 | 309 → 313 | **309 → 313** ve D1b beyansız **0 → 4** | ✓ |

🔴 **İki diff de ÜRETİLMEDİ, ölçüm üretilmemesini söylüyor:**
- `TR1923-GIRDI-TASI-1006.diff`: taşınacak girdi YOK. Betik elle eklenmiş her alanı
  bugünkü kaynak kayıtlardan zaten yeniden üretiyor (sınav, §2.3).
- `ZINCIRLEME-GERI-1006.diff`: devralınmış günler `s:`te. Talimat "s: ise boşluk açılır;
  Değişmez 1'e etkisini sayıyla yaz, çevirme" diyor. Etki §3.3'te.

⚠️ Başlıktaki şartname kuralı yine de GEÇERLİ. Sebebi elle alan kaybı değil: betik bugün
koşarsa **6 kaydın zinciri değişir** (§2.3). Bu bir veri değişikliğidir ve koordinatör
kararı ister. Kural metni: "TR1923-GIRDI-TASI diff'i inmeden" yerine **"koordinatör
kararı olmadan"** okunmalı, çünkü bu diff hiç inmeyecek.

## 2. İŞ 1 (B2) — üreticinin çıktısına elle eklenenler
### 2.1 Hangi commit
`data/yerlesimler_sinir_{kuzey,guney}.js` geçmişi: üretim **8340883b** ("TR-1923-SINIR —
… 28 sinir koyu"). Sonra bu iki dosyaya dokunan TEK commit **9b92117f** ("KOSU13 OTOBUSU
— 19:30 son binis …"). Ondan HEAD'e değişiklik yok.
`git diff --stat 8340883b 9b92117f`: yalnız kuzey dosyası, 4 satır (4 kayıt). Güney: 0.

### 2.2 Ne eklendi (alan düzeyinde)
Dört kayıtta (Norapat · Beri · Kliçatak (Suser) · Küçükperveli) aynı yama
(YAMA-0052B-RENK) uygulanmış:
| | üretimde (8340883b) | bugün |
|---|---|---|
| `s` celayirli | 1340-01-01 → **1410-01-01** | 1340-01-01 → **1386-01-01** + `kaynak` |
| `s` timurlu | — | **1386-01-01 → 1406-10-21** + `kaynak` (YENİ dönem) |
| `s` karakoyunlu | **1410-01-01** → 1469-01-01 | **1406-10-21** → 1469-01-01 + `kaynak` |
Üç `kaynak:` metni aynı: "gün komşudan: Kars/Revan · TDV kars (788/1386 Timur) ·
1406-10-21 çekirdek madde (Kara Yûsuf, TDV karakoyunlular) — TDV Kars için gün vermiyor
(YAMA-0052B-RENK)".
⇒ Öngördüğüm gibi "not eklendi" değil: **zincir değişti** (bir dönem eklendi, iki sınır
kaydı). Alanların hepsi `BILINEN_ALANLAR` içinde.

### 2.3 SINAV — betik GEÇİCİ çıktıya koşturuldu
Sarmalayıcı (`sinav.py`, geçici çalışma alanında): betiği `importlib` ile yükler,
`DOSYA` sözlüğündeki iki çıktı yolunu geçici dizine çevirir, yolların gerçek `data/`
yolu OLMADIĞINI `assert` ile sınar, sonra `main()`i girdi `denetim/OLCUM-TR1923-SINIR-
0914.json` ile çağırır (28 seçim: GRC 5 · BGR 2 · GEO 5 · ARM 4 · IRQ 5 · SYR 7).
Betik DEĞİŞTİRİLMEDİ. Koşudan sonra `git status --porcelain` boş ⇒ `data/`ya yazılmadı.
Karşılaştırma (geçici çıktı ↔ bugünkü `data/`, kayıt kayıt, alan alan):
- **`yerlesimler_sinir_guney.js`: 12/12 BİREBİR.**
- **`yerlesimler_sinir_kuzey.js`: 10/16 birebir, 6 farklı:**
| Kayıt | Fark | Sebep |
|---|---|---|
| **Beri · Küçükperveli** | YOK, birebir. Elle eklenen timurlu dönemi + 3 `kaynak:` dahil | kaynak kayıtlar (Iğdır, Arpaçay) aynı yamayı taşıyor; betik `BİREBİR` yolunda `s` listesini alt alanlarıyla kopyalıyor |
| **Norapat · Kliçatak** | `s:` birebir (elle alanlar korunuyor). Üretilende FAZLADAN `d:` 1583-09-13→1604-06-08 ve 1724-10-03→1735-10-03 (+`kaynak`: "gün komşudan: Revan (13 Eylül…" / "örtülü — Emre 13 Eylül (karar…" / "Bilgili 2016 …") | kaynakları Eçmiyadzin ve Gümrü bu `d:` dönemlerini SONRADAN aldı |
| Stérna · Küfkaynapınarı (Azatlı) | üretilen: bizans →**1361-05-05** + `d` 1361-05-05→ (`kaynak`: "gün komşudan: Edirne · TDV mur…") · bugün: bizans →**1361-01-01** | kaynaklar (Orestiada, Havsa) yama katmanından düzelmiş. **Dalga 4'te yönü "ölçülemedi" dediğim fark bu: kaynak düzelmiş, kopya bayat** |
| Malak Dervent · Umur Fakih | üretilen: bulgaristan →**1369-01-01** + `d` (`kaynak`: "TDV murad-i (İnalcık): 770 (13…") · bugün: →**1371-09-26** | Elhova düzelmiş (dalga 4 ile aynı) |
⇒ **Betik bugün koşsa elle eklenmiş hiçbir alan SİLİNMEZ.** "Saatli bomba" bugün yok:
elle yama, kaynak kayıtlara da aynen uygulandığı için betik onu yeniden üretiyor.
⇒ Koşarsa 6 kaydın zinciri **güncellenir**: 4'ü dalga 4'te bulunan bayatlığı kapatır,
2'sine (Norapat, Kliçatak) yeni `d:` dönemleri gelir.

### 2.4 Bomba ne zaman kurulur (ölçüm değil, mekanizma)
Elle eklenen alan ancak KAYNAK kayıt da değiştirilirse güvendedir. Biri yalnız sınır
kaydını elle düzeltir, kaynağı düzeltmezse, bir sonraki koşu o düzeltmeyi siler. Bugün
böyle bir alan **0**. Kural önerisi: sınır dosyalarına elle dokunulmaz; düzeltme kaynak
kayda yapılır, betik yeniden koşturulur. `TR1923-GIRDI-TASI` diff'i bu yüzden boş:
girdisi zaten `girdi.yukle()`.

### 2.5 Yan bulgu — sınav ikinci zincirlemeyi gösterdi
Norapat ve Kliçatak'a gelecek yeni `d:` dönemlerinin kaynak metni "gün komşudan:
Revan". Bu, Revan'ın gününün Gümrü/Eçmiyadzin'e (1. kuşak), oradan bu iki kayda (2. kuşak)
geçmesi demek: **`§4` zincirleme devralma, betik yeniden koşarsa YENİ kayıtlara iner.**
Bugünkü dosyada yok; yalnız yeniden üretimde oluşur. ⇒ Betik koşturulmadan önce B1'in
hükmü verilmeli.

## 3. İŞ 2 (B1) — zincirleme devralma: Küçükperveli · Beri · Kliçatak · Norapat
### 3.1 Devralınmış günler neyi besliyor — kayıt kayıt
| Kayıt | `kd:` | devralınmış dönemler (hepsi `s:`) | kaynak zinciri |
|---|---|---|---|
| Norapat | YOK | celayirli 1340-01-01→1386-01-01 · timurlu 1386-01-01→1406-10-21 · karakoyunlu 1406-10-21→1469-01-01 | ← Eçmiyadzin ← Revan |
| Beri | YOK | aynı 3 dönem | ← Iğdır ← Revan |
| Kliçatak (Suser) | YOK | aynı 3 dönem | ← Gümrü ← Revan |
| Küçükperveli | YOK | aynı 3 dönem | ← Arpaçay ← Revan |
Dördünün de BÜTÜN zinciri kopya (dalga 4 §2.2). Dönem-kaynaklı "gün komşudan" beyanı
taşıyan 3 dönem ise `s:`te ⇒ **motor bu günleri OKUYOR**; `kd:` değil, çevirme serbest
DEĞİL.

### 3.2 ① Adıyla yeniden kaynaklanabilir mi — `bulunamadı` (0/4)
- TDV slug'ları: `norapat` · `suser` · `klicatak` · `beri` · `kucukperveli` ·
  `kucuk-perveli` · `pirveli` → **7/7 HTTP 302** (ölü, `§4` ①).
- Akademik: köy adları × Celâyirli/Timur/Karakoyunlu araması köy düzeyinde sonuç vermedi
  (yalnız genel TDV `timur`, `ahmed-celayir` ve dönem makaleleri çıktı). Arama özeti
  kaynak sayılmadı.
- Dalga 1'de Beri ve Küçükperveli 1917-1921 için de `bulunamadı` idi. 14.-15. yüzyıl köy
  taneciğinde kaynak beklenmez; bu ARAŞTIRILMADI değil, ARANDI ve BULUNAMADI.

### 3.3 ② Bulunamazsa — `s:` ⇒ boşluk açılır, ÇEVRİLMEDİ
Ölçüm `denetle.py`nin kendi `degismez1` / `degismez1b` işlevleriyle BELLEKTE yapıldı
(`d1_sim.py`, dosyaya yazmaz; `git status` boş):
| Senaryo | D1 sahipsiz | D1b boşluk (ham) | 4 kayıtta |
|---|---|---|---|
| bugün | **309** | 7 (hepsi beyanlı ⇒ beyansız 0) | sahipsiz değil |
| (a) yalnız 3 devralınmış dönem kaldırılır | **313 (+4)** | **11 (+4 beyansız)** | her biri 1340/1360/…/1460 kesitlerinde (7 kesit) sahipsiz · her birinde 1340-01-01→1469-01-01 iç boşluğu, **47.117 gün (129 yıl)** |
| (b) bütün kopya zincir kaldırılır | **313 (+4)** | 7 | her biri 35 kesitin hepsinde (1285→1920) sahipsiz; sınır noktası işlevini kaybeder |
⇒ (a) **iki değişmezi birden kırar** (D1 tavan 309, D1b beyansız tavan 0). (b) D1'i
kırar ve 4 noktayı 1281-1923 boyunca harita deliğine çevirir.
⇒ **`ZINCIRLEME-GERI-1006.diff` YAZILMADI** (talimat: s: ise çevirme). İstenirse doğru
yer üretici olur (§2.4): kaynak kayıtlarda düzeltme + betiğe "kopya beyanlı kaydı komşu
sayma" eleği. Ama 4 kaydın en yakın uygun komşusu yine Revan kopyası olabilir; elek o
zaman daha uzak bir kaynağa ya da boşluğa götürür. Hüküm Emre'de.
⚠️ Gümrü, Eçmiyadzin, Kliçatak ve Norapat'taki sahte `sovyet-rusya` penceresine
DOKUNULMADI (KF-1 kuyruğu, Emre kararı).

## 4. Bulunamayan / sınır
- 4 köyün 1340-1469 sahipliği için adıyla kaynak: `bulunamadı`.
- Sınav tek bir anın fotoğrafı: kaynak kayıtlar değiştikçe "betik koşarsa ne değişir"
  cevabı da değişir. Koşturmadan hemen önce sınav YENİDEN yapılmalı.
- Betiğin sonraki koşuda yeni zincirleme üreteceği (§2.5) bir öngörü değil, sınav
  çıktısında görüldü.

## 5. Ağaç ve dosyalar
- `C:\atlas-w6b` (8552686e): **değişiklik yok** (`git status --porcelain` boş). Betik ve
  veri dosyaları değiştirilmedi; sınav çıktısı yalnız geçici dizine yazıldı.
- Diff dosyası YOK (iki diff de ölçümle gereksiz/yasak çıktı).
- Geçici çalışma alanındaki betikler: `sinav.py` · `karsilastir.py` · `d1_sim.py`.
