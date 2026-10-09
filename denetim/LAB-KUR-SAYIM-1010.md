# LAB-KUR-SAYIM-1010 — `kur:`suz noktalar ve 1000–1280 dilimi (ÖLÇÜM)

**Tür:** YALNIZ ÖLÇÜM. Hüküm koordinatörün/Emre'nin. `data/`'ya dokunulmadı, tavan yazılmadı, `kaynak_durum.py ac` koşulmadı, commit/push yok.
**Ölçülen ağaç:** `e54e60dff6a19a8ee848543759d11fcac440876b` ("Z6 INDI (80 degisim, 11 dosya) + TAVAN 181 -> 193"), ayrık worktree `C:\atlas-kur-olcum`.
**Durum:** TAMAM (öngörü 01:01, ölçüm ve ③ 50/50 sonuçlandı).

## 0. Motor `kur:` yokluğunu nasıl okuyor (koddan, ölçümden önce)

- `arac/girdi.py:739` → `UFUK = ("1000-01-01", "1945-09-02")`; `arac/uret_petek.py:2907` → `EPOK = girdi.UFUK[0]` (= `1000-01-01`).
- `arac/uret_petek.py:5023-5026` `devir_kumesi(g)`: bir nokta **yalnız** `(kur VAR ve kur > g) veya (bit VAR ve bit <= g)` ise **ve** o gün sahibi yazılıysa (`_sahipli`, `:4803`) sahneden çıkarılıp peteği komşuya devredilir. `:4933` (`_kusatilmis`) ve `:6407` aynı koşulu kullanır.
- ⇒ **`kur:` yoksa nokta EPOK'tan (1000-01-01) itibaren sahnededir** — "ilk `s:` f'sinden" değil. Petek sitesi olarak Voronoi hücresini 1000'den beri tutar.
- **Boyama** ayrı sorudur: hücre yalnız o gün `s`/`d`/`v` dönemi kapsıyorsa boyanır (`_sahipli`: `p["f"] <= g < p["t"]`). Sahibi yazılı olmayan `kur:`suz nokta 1000–1280'de **boyamaz ama hücresi devredilmez** (devir koşulu `kur`/`bit` ister) ⇒ boş delik olarak kalır.
- `kur:` öncesinde sahibi yazılı olmayan nokta da devredilmez (Kuveyt deseni, `:4747-4757`) — bilerek boş.
- Kaynak: `VERI-YAPISI.md:133` "`kur` — Kuruluş tarihi. Öncesinde yerleşim yoktur"; `girdi.py:173` "motor: petek_epok() bu tarihten önce peteği komşuya devreder".

## ⑤ ÖNGÖRÜ (ölçümden ÖNCE yazıldı — 2026-10-10 01:01 +0300, sayım betiği koşulmadan)

Dayanak: önceki LAB ölçümleri (EKSIK-SEHIR-1009: 1281 öncesi `f`'li yalnız 1 nokta; YOGUNLUK-1010: `kur:`suz 2.823), motorun `kur:`/`bit:` yorumu (§0), Z6'nın "80 değişim, 11 dosya" özeti, `uret_petek.py:4739` yorumundaki eski sayım (4296 nokta · 1669 `kur:`).

| # | Öngörü | Gerekçe |
|---|---|---|
| ① | e54e60df'de `kur:`suz nokta ≈ **2.825** (2.823 ± birkaç; Z6 nokta eklediyse kur'suz eklemiş olabilir). Bunlardan 1000–1280'de boyayan ≈ **55** (aralık 30–80) | Z6 80 değişim; çoğu mevcut noktaların zincirini 1281'den geriye uzatma; değişimin ~%70'i boyayan nokta üretir |
| ② | 1000–1280'de boyayan toplam ≈ **62**; `kur:`lu ≈ **7**, `kur:`suz ≈ **55** | Z6 büyük şehirleri (kuruluşu çok eski, `kur:` yazılmamış) seçer; `kur:`lular Lapaha/Rapa Nui + birkaç |
| ③ | Örneklemde VARDI ≈ **%95** (BELİRSİZ ~%5, YOKTU ~%0–2) | Z6'nın seçtiği şehirler bilinçli olarak 1000–1280 tarihli kaynaklı şehirler; asıl `kur:` borcu boyamayan 2.770 civarındaki kitlede |
| ④ | `kur:`lu ≈ **1.480**, `kur:`suz ≈ **2.825** (toplam ≈ 4.305). En erken `kur:` ≈ **1200** (Rapa Nui) ya da Z6 sonrası daha erken; en geç ≈ **1940'lar**. Yüzyıl dağılımı: 18xx ≈ %45 · 19xx ≈ %20 · 17xx ≈ %15 · 16xx ≈ %10 · 15xx ve öncesi ≈ %10 | Geç kurulan noktalar ağırlıkla sömürge/yerleşimci şehirleri (Amerika, Sibirya, Afrika, Okyanusya) — 1800'ler zirvesi; 1669 (eski yorum) ile 2.823 arasındaki çelişki yükleyici evren farkı olabilir |
| Kapı | 1000–1280 dilimi **boyama açısından** az sayıda (≈60) noktayla dar ama doğru; ancak `kur:`suz ~2.770 boyamayan nokta 1000'de **sahnede** ve boş delik açıyor ⇒ dilim "yayına hazır" DEĞİL görünür (kur: borcu değil, BOŞ HÜCRE/delik sorunu öne çıkar) | §0 motor kuralı |

---

## ÖLÇÜM (öngörüden SONRA; betikler scratch'te: `olc.py`, `olc2.py`, `olc3.py`, `csvyaz.py`)

**Evren:** `girdi.yukle()` (motorun `YERLER`i, `uret_petek.py:1028`), 93 girdi dosyası, **4.300 nokta**.
**"1000–1280'de boyar" tanımı:** `s`/`d`/`v` dönemlerinden biri `[f, t)` yarı açık aralığıyla `[1000-01-01, 1281-01-01)` ile kesişiyor (motorun `_sahipli` sözdizimiyle aynı: `f <= g < t`). `isg:` sayılmadı (motor okumaz, `girdi.py:177`).
**Harita:** gitignore'lu `devletler_harita.js` ÇÖZÜLMEDİ — yayımlı harita KOŞU 21'den (1281 ufku), 1000–1280'i hiç örneklememiş. "Boyar mı" sorusu **VERİ + motor kuralından** (§0) cevaplandı, haritadan değil.

### ① `kur:`suz nokta sayısı ve 1000–1280'de boyayanlar

| | sayı |
|---|---:|
| toplam nokta | 4.300 |
| **`kur:` YOK** | **2.823** (önceki LAB sayısı aynen tuttu) |
| └ `kur:` yok **ve** `bit:` yok | 2.813 |
| └ `kur:` yok ama `bit:` var | 10 (Askalân 1270, Dvin 1236, Zerenc, Tûs, Köhne Ürgenç, Gaur, Karakurum, Mayapán, Zaculeu, Cahokia) |
| └ `kasitli_bosluk` bayraklı | 263 |
| └ hiç `f`'li dönemi olmayan (dolgu/boşluk) | 148 |
| └ ilk `f`'si tam `1281-01-01` (VERI_UFKU damgası) | 2.445 |
| **① `kur:`suz ∩ 1000–1280'de boyar** | **80** |
| `kur:`suz, 1000–1280'de motor sahnesinde ama BOŞ | 2.743 |

### ② 1000–1280'de boyayanlar — `kur:` var/yok

**81 nokta boyar: `kur:` VAR 1 (Lapaha (Muʻa), `kur:1220-01-01` = ilk `s:` f'si) · `kur:` YOK 80.** Hepsi `s:` katmanından (d/v yok).
Liste: `LAB-KUR-SAYIM-1010-boyayan-1000-1280.csv` (ad · yükleme indeksi · `data/<dosya>:<satır>` · `kur` · ilk kesişen dönem).

Bölge (kaba kutu sınıflayıcı, `bolge.py`): Anadolu 36 · K.Afrika-Mısır 10 · Avrupa-Balkan 8 · Orta Asya 8 · İran-Irak 7 · Levant 5 · Hindistan 4 · Kafkasya 2 (+ Lapaha/Okyanusya 1).
Dosya: `yerlesimler.js` 62, diğer 11 dosyada 19. İlk `f` yüzyılı: 12xx 57 · 11xx 14 · 10xx 9 · 0330 1 (İstanbul).
Gün kesitleri (boyayan / motor sahnesindeki `kur:`suz site):

| gün | boyayan | `kur:`suz BOŞ site |
|---|---:|---:|
| 1000-01-01 | 1 (İstanbul) | 2.822 |
| 1100-01-01 | 10 | 2.813 |
| 1200-01-01 | 24 | 2.799 |
| 1250-01-01 | 67 | 2.756 |
| 1280-12-31 | 81 | 2.741 |
| *1281-01-01* | *2.526* | *296* |

### 🔴 ②b — ÖLÇÜMÜN ASIL BULGUSU: 1000–1280'de `kur:` VAR/YOK geometride FARK ETMİYOR

`devir_kumesi(g)` (`uret_petek.py:5023-5027`) = **(kurulmamış VE sahipli)** ∪ `_kusatilmis(g)`. Ölçüldü (`olc3.py`):

| gün | kurulmamış+sahipli (devredilen) | kurulmamış+sahipsiz (devredilmez; yalnız `_kusatilmis`e aday) |
|---|---:|---:|
| 1000-01-01 … 1280-12-31 | **0** | 1.476–1.477 |
| 1281-01-01 | 2 | 1.475 |

⇒ 1000–1280'de `kur:`'lu 1.477 noktanın **hiçbiri** devredilmiyor (çünkü hiçbirinin o tarihte sahibi yazılı değil); `_kusatilmis` ancak kara komşuluğunun ≥%90'ı TEK sahibe aitse devreder — 81 boyayanın içinde bu neredeyse olanaksız (bu, geometri koşulmadan **ölçülemedi**, yalnız vekil: 1250'de boyayanların en yakın 6 sahne komşusunun **%87,1'i (350/402) boş**).
⇒ Yani 1000–1280'de motor **~4.300 noktanın neredeyse hepsini** Voronoi sitesi olarak kullanır — `kur:`'lu olsun olmasın. `kur:` eklemek bu dilimde bir noktayı sahneden ÇIKARMAZ (sahibi yoksa devir yok, Kuveyt kuralı `:4747-4757`).
⇒ **`kur:` borcu 1000–1280 haritasının şeklini DEĞİŞTİRMİYOR.** Değiştiren tek şey: boyayan 81 noktanın hücresi, boş komşu sitelerle sıkışmış küçük adalar (Konya'nın 6 komşusu Ilgın, Beyşehir, Seydişehir, Karapınar… hepsi boş).
⇒ `kur:` eksikliğinin 1000–1280'de **görünür** etkisi yalnız şu yoldan olabilir: `kur:`suz bir nokta, **gerçekte var olmadığı** bir günden itibaren `s:` ile boyanıyorsa. Bu tam ③'ün sorusu.

### ④ `kur:` kapsamı (bütün evren)

- **`kur:` VAR 1.477 · YOK 2.823** (%34,3 / %65,7). (`uret_petek.py:4740` yorumundaki "1669 kur:" BAYAT/farklı evren — ölçülmedi, not.)
- En erken `kur:` **1200-01-01** (Rapa Nui), sonra 1220 Lapaha, 1287 Nder, 1293 Trowulan, 1296 Chiang Mai; en geç **1923-08-15** (Fortín Muñoz). UFUK[0]'dan (1000) önce/eşit `kur:` **0**.
- 1281 öncesi `kur:` yalnız 2 (Rapa Nui, Lapaha) ⇒ 1000–1280'de "kurulmamış" sayılan 1.475+ nokta.
- `kur:`'dan önce sahibi yazılı (`ilk f < kur`): 6 kayıt.

| yüzyıl | adet | % |
|---|---:|---:|
| 1200'ler | 5 | 0,3 |
| 1300'ler | 36 | 2,4 |
| 1400'ler | 53 | 3,6 |
| 1500'ler | 160 | 10,8 |
| 1600'ler | 262 | 17,7 |
| 1700'ler | 278 | 18,8 |
| 1800'ler | 566 | 38,3 |
| 1900'ler | 117 | 7,9 |

### 2.823 LİSTESİ (tavan ailesi için)

`LAB-KUR-SAYIM-1010-kursuz-2823.csv` — 2.823 satır: sıra · ad · `id_yukle_indeksi` (veride `id` alanı YOK; ad benzersiz — `girdi.py:621` ad çakışmasında hata — kimlik = ad, indeks yalnız bu commit'e göre) · dosya · satır · `data/<dosya>:<satır>` · tür · lat/lon · kaba bölge · `bit` · ilk `f` · 1000–1280'de boyar mı · `kasitli_bosluk`.
Satır eşlemesi: 4.300/4.300 eşlendi (`ad:"…"` ve JSON `"ad":"…"` biçimleri).
sha256 (bu ölçümde): kursuz-2823 `e7010369…1fce7` · boyayan `fead4ecf…76fde`.

## ③ ÖRNEKLEM — 80 `kur:`suz boyayanın gerçekte var olup olmadığı

**Yöntem (beyan):** evren = 1000–1280'de boyayan `kur:`suz **N=80** nokta. Bölgeye göre orantılı tabakalı rastgele örneklem **n=50**, `random.seed(1010)`, tabaka içinde ada göre sıralayıp `random.sample` (Anadolu 23/36 · K.Afrika-Mısır 7/10 · Avrupa-Balkan 5/8 · OrtaAsya 5/8 · İran-Irak 4/7 · Levant 3/5 · Hindistan 2/4 · Kafkasya 1/2; betik `olc2.py`, liste `orneklem.json`). Her nokta için iki hüküm verildi: (a) atlasın boyamaya başladığı `f` gününde, (b) 1000-01-01'de (motorun `kur:` yokken yaptığı örtük iddia). Doğrulamayı 5 ajan yaptı (10'ar nokta). Ham çıktılar scratch'te: `sonuc1-5.tsv`.
**Kaynak denetimi:** 50 satırın hepsinde URL bir **madde sayfası** (islamansiklopedisi.org.tr/<madde> ya da en.wikipedia.org/wiki/<madde>). Arama sonucu sayfası ya da yanlış madde yok, o yüzden hiçbir satır düşülmedi. Britannica her denemede 403 verdi ve hiçbir yerde kaynak gösterilmedi. Fas için TDV kuruluş tarihi vermiyor, Wikipedia (History_of_Fez) kullanıldı. Isparta notunun bir kısmı yalnız WebSearch özetine dayanıyor ve bu notta yazılı. İsfahan ve Tanca alıntıları WebFetch özetinden alındı, kelimesi kelimesine değil (ajan beyanı).

| # | ad | bölge | `f` | hüküm `f` | hüküm 1000 | 1000 hükmü süreklilik çıkarımı mı | çekilen kaynak |
|---|---|---|---|---|---|---|---|
| 1 | Kayseri | Anadolu | 1143-01-01 | VARDI | VARDI | hayır | https://islamansiklopedisi.org.tr/kayseri |
| 2 | İzmit | Anadolu | 1228-01-01 | VARDI | VARDI | hayır | https://islamansiklopedisi.org.tr/izmit |
| 3 | Dimetoka | Anadolu | 1230-01-01 | VARDI | VARDI | evet | https://islamansiklopedisi.org.tr/dimetoka |
| 4 | Tekirdağ | Anadolu | 1275-01-01 | VARDI | VARDI | evet | https://islamansiklopedisi.org.tr/tekirdag |
| 5 | Tokat | Anadolu | 1074-01-01 | VARDI | VARDI | hayır | https://islamansiklopedisi.org.tr/tokat |
| 6 | Karaman | Anadolu | 1256-01-01 | VARDI | VARDI | evet | https://islamansiklopedisi.org.tr/karaman |
| 7 | İstanköy | Anadolu | 1258-01-01 | VARDI | VARDI | hayır | https://islamansiklopedisi.org.tr/istankoy |
| 8 | Cizre | Anadolu | 1261-01-01 | VARDI | VARDI | hayır | https://islamansiklopedisi.org.tr/cizre |
| 9 | Çankırı | Anadolu | 1142-01-01 | VARDI | VARDI | hayır | https://islamansiklopedisi.org.tr/cankiri |
| 10 | Rize | Anadolu | 1204-01-01 | VARDI | VARDI | evet | https://islamansiklopedisi.org.tr/rize |
| 11 | Elbistan | Anadolu | 1202-01-01 | VARDI | VARDI | hayır | https://islamansiklopedisi.org.tr/elbistan |
| 12 | Bitlis | Anadolu | 1209-01-01 | VARDI | VARDI | hayır | https://islamansiklopedisi.org.tr/bitlis |
| 13 | İstanbul | Anadolu | 0330-05-11 | VARDI | VARDI | hayır | https://islamansiklopedisi.org.tr/istanbul |
| 14 | Kemah | Anadolu | 1228-01-01 | VARDI | VARDI | evet | https://islamansiklopedisi.org.tr/kemah |
| 15 | Manisa | Anadolu | 1204-04-13 | VARDI | VARDI | evet | https://islamansiklopedisi.org.tr/manisa |
| 16 | Niğde | Anadolu | 1214-01-01 | VARDI | VARDI | evet | https://islamansiklopedisi.org.tr/nigde |
| 17 | Hasankeyf | Anadolu | 1085-01-01 | VARDI | VARDI | hayır | https://islamansiklopedisi.org.tr/hasankeyf |
| 18 | Erzurum | Anadolu | 1071-01-01 | VARDI | VARDI | hayır | https://islamansiklopedisi.org.tr/erzurum |
| 19 | Trabzon | Anadolu | 1204-01-01 | VARDI | VARDI | hayır | https://islamansiklopedisi.org.tr/trabzon |
| 20 | Isparta | Anadolu | 1204-01-01 | VARDI | BELİRSİZ | hayır | https://islamansiklopedisi.org.tr/isparta |
| 21 | İznik | Anadolu | 1078-01-01 | VARDI | VARDI | hayır | https://islamansiklopedisi.org.tr/iznik |
| 22 | Gelibolu | Anadolu | 1204-04-13 | VARDI | VARDI | hayır | https://islamansiklopedisi.org.tr/gelibolu |
| 23 | Mardin | Anadolu | 1085-01-01 | VARDI | VARDI | hayır | https://islamansiklopedisi.org.tr/mardin |
| 24 | Nakşa | Avrupa-Balkan | 1207-01-01 | VARDI | BELİRSİZ | hayır | https://islamansiklopedisi.org.tr/naksa ; https://en.wikipedia.org/wiki/Naxos_(city) |
| 25 | Modon | Avrupa-Balkan | 1209-01-01 | VARDI | VARDI | hayır | https://islamansiklopedisi.org.tr/modon ; https://en.wikipedia.org/wiki/Methoni,_Messenia |
| 26 | Atina | Avrupa-Balkan | 1205-01-01 | VARDI | VARDI | hayır | https://islamansiklopedisi.org.tr/atina ; https://en.wikipedia.org/wiki/Byzantine_Athens |
| 27 | İstefe (Tebai) | Avrupa-Balkan | 1205-01-01 | VARDI | VARDI | hayır | https://islamansiklopedisi.org.tr/istefe |
| 28 | Kavala | Avrupa-Balkan | 1242-01-01 | VARDI | VARDI | hayır | https://islamansiklopedisi.org.tr/kavala ; https://en.wikipedia.org/wiki/Kavala |
| 29 | Ecmîr (Ajmer) | Hindistan | 1192-01-01 | VARDI | BELİRSİZ | hayır | https://en.wikipedia.org/wiki/Ajmer ; https://islamansiklopedisi.org.tr/ecmir |
| 30 | Delhi | Hindistan | 1192-01-01 | VARDI | BELİRSİZ | hayır | https://islamansiklopedisi.org.tr/delhi ; https://en.wikipedia.org/wiki/History_of_Delhi |
| 31 | Tebriz | Iran-Irak-Korfez | 1231-01-01 | VARDI | VARDI | hayır | https://islamansiklopedisi.org.tr/tebriz |
| 32 | Isfahan | Iran-Irak-Korfez | 1235-01-01 | VARDI | VARDI | hayır | https://islamansiklopedisi.org.tr/isfahan |
| 33 | Bağdat | Iran-Irak-Korfez | 1258-02-10 | VARDI | VARDI | hayır | https://islamansiklopedisi.org.tr/bagdat |
| 34 | Vâsıt | Iran-Irak-Korfez | 1258-01-01 | VARDI | VARDI | hayır | https://islamansiklopedisi.org.tr/vasit |
| 35 | Gence | Kafkasya | 1235-01-01 | VARDI | VARDI | hayır | https://islamansiklopedisi.org.tr/gence |
| 36 | Fas (Fez) | KuzeyAfrika-Misir | 1248-01-01 | VARDI | VARDI | hayır | https://en.wikipedia.org/wiki/History_of_Fez |
| 37 | Dimyat | KuzeyAfrika-Misir | 1250-01-01 | VARDI | VARDI | hayır | https://islamansiklopedisi.org.tr/dimyat |
| 38 | Tilimsan | KuzeyAfrika-Misir | 1236-01-01 | VARDI | VARDI | hayır | https://islamansiklopedisi.org.tr/tilimsan |
| 39 | Tanca | KuzeyAfrika-Misir | 1273-01-01 | VARDI | VARDI | hayır | https://islamansiklopedisi.org.tr/tanca |
| 40 | Rabat | KuzeyAfrika-Misir | 1150-01-01 | VARDI | BELİRSİZ | hayır | https://islamansiklopedisi.org.tr/rabat |
| 41 | Sicilmâse (Tâfilelt) | KuzeyAfrika-Misir | 1274-01-01 | VARDI | VARDI | hayır | https://islamansiklopedisi.org.tr/sicilmase |
| 42 | Sebte (Ceuta) | KuzeyAfrika-Misir | 1273-01-01 | VARDI | VARDI | hayır | https://islamansiklopedisi.org.tr/sebte |
| 43 | Halep | Levant-Irak-Arabistan | 1260-01-01 | VARDI | VARDI | hayır | https://islamansiklopedisi.org.tr/halep |
| 44 | Ba'lebek (Baalbek) | Levant-Irak-Arabistan | 1260-01-01 | VARDI | VARDI | hayır | https://islamansiklopedisi.org.tr/balebek |
| 45 | Antakya | Levant-Irak-Arabistan | 1084-12-12 | VARDI | VARDI | hayır | https://islamansiklopedisi.org.tr/antakya |
| 46 | Herat | OrtaAsya | 1175-01-01 | VARDI | VARDI | hayır | https://islamansiklopedisi.org.tr/herat |
| 47 | Taşkent | OrtaAsya | 1220-01-01 | VARDI | VARDI | hayır | https://islamansiklopedisi.org.tr/taskent |
| 48 | Semerkant | OrtaAsya | 1220-01-01 | VARDI | VARDI | hayır | https://islamansiklopedisi.org.tr/semerkant |
| 49 | Hucend | OrtaAsya | 1219-01-01 | VARDI | VARDI | hayır | https://islamansiklopedisi.org.tr/hucend |
| 50 | Merv (Mari) | OrtaAsya | 1221-01-01 | VARDI | VARDI | hayır | https://islamansiklopedisi.org.tr/merv |


### ③ Toplam (n=50, hepsi sonuçlandı)

| | VARDI | YOKTU | BELİRSİZ |
|---|---:|---:|---:|
| boyama başlangıcı `f`'de | **50** | 0 | 0 |
| 1000-01-01'de | **45** | 0 | **5** (Isparta, Nakşa, Ecmîr, Delhi, Rabat) |

- 45 "1000'de VARDI" hükmünün **7**'si o yıla ait doğrudan bir cümleye değil, sürekliliğe dayanan çıkarım (Dimetoka, Tekirdağ, Karaman, Rize, Kemah, Manisa, Niğde). İstanköy ve Elbistan da sınırda.
- **Konum kusurları** (`kur:` sorunu değil, `lat/lon` sorunu; noktanın kendisi tarihî şehrin yerinde değil):
  - **Merv (Mari):** modern Mari, 1884'te Rus karakolu olarak kuruldu, tarihî Merv'e yaklaşık 30 km uzakta (Wikipedia *Mary, Turkmenistan*). O koordinatta 1221'de yerleşim YOKTU.
  - **Delhi:** nokta Shahjahanabad'da (17. yy). Ortaçağ Lal Kot / Qila Rai Pithora yaklaşık 15 km güneyde.
  - **Gence:** Yeni Gence 1606'dan sonra kuruldu, eski Gence'ye yaklaşık 6 km (TDV).
  - **Semerkant:** 1220 sonrası şehir güneye kaydı (TDV); kayma küçük.
  - **Dimyat:** 1250-51'de yıkıldı, yeni yerleşme güneyde kuruldu (TDV). `f`=1250-01-01'de eski şehir hâlâ ayaktaydı.
- **1000'den sonra kurulduğu kanıtlanan nokta yok** (YOKTU 0). Kuruluşu 1000'den sonraya konabilecek adaylar: Delhi (Wikipedia: 1052), Ecmîr (Wikipedia: 1113'ten önce bir ara), Rabat (ribat yaklaşık 1150; 10. yy ribatının yeri teyitsiz).

**Güven aralığı.** Yöntem: Wilson skor aralığı (%95, z=1,96), yarı genişliği sonlu evren düzeltmesiyle daraltıldı: √((N−n)/(N−1)) = √(30/79) = 0,616. Sonuç 80'e taşındı. BELİRSİZ, VARDI sayılmadı (temkinli yön).
- **`f`'de VARDI:** 50/50 → Wilson alt sınırı 0,929, düzeltilmiş hâli **≥ ~%95,6** ⇒ 80'in **≥ ~77**'si boyandığı gün gerçekten vardı.
- **1000'de VARDI:** 45/50 = %90 → Wilson [%78,6 – %95,7], düzeltilmiş hâli **[~%82 – ~%92]** ⇒ 80'in **~66–74**'ü (nokta tahmini 72). Geri kalan ~6–14 nokta için "1000'den beri var" iddiası doğrulanamıyor.
- **Öngörüyle karşılaştırma:** öngörü "VARDI ≈ %95, BELİRSİZ ~%5, YOKTU ~%0–2" idi. `f` için ölçüm %100 (öngörüden iyi). 1000 için %90 VARDI, %10 BELİRSİZ, %0 YOKTU (BELİRSİZ öngörünün iki katı). Öngörülmeyen bulgu: 5 konum kusuru (%10). Bunlar `kur:` borcundan ayrı bir sınıf.

## Nedensellik (tek satır)

🔴 `kur:` borcu **veriden değil ufuk değişikliğinden doğdu.** `02f33728` ufku 1281'den 1000'e çekti; `kur:` yoksa site EPOK'tan (`uret_petek.py:2907` = `girdi.UFUK[0]`) sahnede olduğu için 2.823 noktanın örtük iddiası, tek bir veri satırı değişmeden "1281'den beri var" iken "1000'den beri var" oldu.

## Öngörü ↔ ölçüm

| # | öngörü | ölçüm | |
|---|---|---|---|
| ① `kur:`suz | ≈2.825 | **2.823** | tuttu |
| ① boyayan `kur:`suz | ≈55 (30–80) | **80** | aralığın üst ucu; Z6'nın 80 değişimi neredeyse birebir boyayan noktaya dönmüş |
| ② boyayan toplam / kur var / yok | 62 / 7 / 55 | **81 / 1 / 80** | `kur:`lu payı fazla tahmin edildi |
| ③ VARDI | ≈%95 | **`f`: %100 (50/50) · 1000: %90 (45/50), CI [~82–92] → 80'in ~66–74'ü** | `f` için iyi, 1000 için hafif iyimser |
| ④ `kur:` var/yok | 1.480 / 2.825 | **1.477 / 2.823** | tuttu |
| ④ en erken / en geç | 1200 / 1940'lar | **1200 / 1923-08-15** | geç uç yanlış (1923 sonrası `kur:` yok) |
| ④ yüzyıl | 18xx %45 · 19xx %20 · 17xx %15 · 16xx %10 | **18xx %38,3 · 19xx %7,9 · 17xx %18,8 · 16xx %17,7 · 15xx %10,8** | 1900'ler fazla, 1600-1700'ler az tahmin edildi |
| Kapı | "`kur:` yüzünden delik" | **mekanizma yanlıştı**: 1000–1280'de `kur:`'lu noktalar da devredilmiyor (devir 0); delikler `kur:`'dan bağımsız | düzeltildi |

## KAPI (ölçüm, hüküm değil)

- **Boyayan nokta:** 1000–1280 diliminde **81** (1000'de 1, 1200'de 24, 1280 sonunda 81). 1281-01-01'de 2.526'ya sıçrıyor.
- **Bu 81'in doğruluğu:** 80 `kur:`suz boyayanın ≥ ~77'si boyandığı gün gerçekten vardı (50/50 örneklem). Boyama tarihleri kaynaklı (TDV, Z6).
  - Tek ölçülen sorun konum: Merv kesin (~30 km); Delhi, Gence, Semerkant ve Dimyat aday.
  - 1000'den beri var iddiası 80'in ~66–74'ünde tutuyor. Ama bu iddia **boyanmıyor**: `f` öncesinde hücre boş kalıyor ve bu boşluk haritada sahipsiz görünüyor, sahte bir sahip göstermiyor.
- **`kur:` borcunun bu dilime etkisi:** geometriyi değiştirmiyor. 1000–1280 boyunca devir kümesi **0** (`uret_petek.py:5023-5027`). `kur:` yazılsa da yazılmasa da ~4.300 site sahnede kalıyor, çünkü motor sahibi olmayan noktayı devretmiyor. ⇒ **"`kur:` borcu kapanana kadar bekle" bu dilimin önündeki engel değil.** Borç kapansa da 1000–1280 haritası aynı kalır. (`kur:` borcu, sahibi yazılı ama henüz kurulmamış noktanın devri yoluyla ancak 1281 sonrasında etki eder; bu ölçümün kapsamı dışında.)
- **Ölçülen asıl engel seyreklik:** 81 boyalı ada var ve 1250'de boyayanların en yakın 6 komşusunun %87,1'i boş. Dilimin yayına hazır sayılıp sayılmaması "1000–1280: 81 küçük ada ve çevresinde boşluk" görüntüsünün kabul edilip edilmemesine bağlı. Bu bir insan kararı.

**Worktree:** `C:\atlas-kur-olcum` temizdi, kaldırıldı. Repo verisine dokunulmadı; commit/push yok.
