# KASA-KAYNAK-SAHIP-TARAMA-1010 — "kaynak notunun adıyla andığı sahip ≠ dilimin `d:`'si" (Malta tipi)

Görev: YILDIRIM BAYEZIT (GOVDE-TANIK kararı ②(d), sıradaki iş) · Araştırmacı: KASA · `data/` DONUK · salt okuma.
Çıkış noktası: GOVDE-TANIK K örneklemi — Malta `napoli 1282-1530` ama dilimin KENDİ `kaynak:`ı TDV `malta`yı
aktarıyor: *"1284'ten Aragon, 1410'dan Kastilya"*. Kaynak doğru, veri kaynağı izlemiyor. Bu, kaydın İÇİNDE duran bir
çelişki ⇒ tanık aramaya gerek yok, kaynak notu ve onun alıntıladığı madde okunur.

## 0. ÖNGÖRÜ ve ÖLÇÜT (ölçümden ÖNCE, 2026-10-10 — ayrı commit, sayım yapılmadan)

### 0.1 Tanımlar (kilitli; GOVDE-TANIK'ın dersiyle: kusurlu çıkarsa kilit korumaz, sapma adıyla ve iki sayı yan yana)
- **Evren:** `_kaynak_tanikli` olan bütün `s:` dilimleri (dönemin kendi `kaynak:`'ı; `bulunamadı` hariç).
- **Sözlük (devlet adı → kimlik):** `devletler.js`'teki her künye için anahtarlar: (a) `id`'nin `-` ile bölünmüş
  ilk parçası ≥ 5 harfse ve başka künyenin ilk parçasıyla çakışmıyorsa; (b) `ad` alanının `/`, `(`, `,`, `—` ile
  bölünmüş parçalarının ilk sözcüğü ≥ 5 harfse. Eşleşme: kaynak metninde (küçük harf, Türkçe katlama) anahtarın
  **sözcük başında** geçmesi (Türkçe ek alır: "Aragonlular", "Kastilyalılar", "Hafsîler"). Birden çok künyeye giden
  belirsiz anahtarlar ATILIR. Künye ömrü dilimle hiç kesişmeyen eşleşmeler sayılmaz.
- **Sınıflar:** `KENDİ` (kaynak dilimin `d:`'sini anıyor) · `YABANCI` (dilimin `d:`'sini anmıyor, ömrü dilimle kesişen
  başka bir künyeyi anıyor) · `SESSİZ` (hiç künye anmıyor).
- **Örneklem Y (risk):** `YABANCI` sınıfından uzunluğa göre ilk 40 (UZUN-DILIM ve GOVDE-TANIK'ta okunanlar hariç).
- **Örneklem Kk (kontrol):** `KENDİ` sınıfından, L ≥ Y'nin en küçük L'sinin yarısı olanlardan `random.Random(1010)`
  ile 20.
- **Okuma (ucuz):** önce dilimin kendi `kaynak:` metni; kaynak bir TDV maddesini alıntılıyorsa alıntı TDV gövdesinde
  aranır (alıntının madde içinde VARLIĞI doğrulanır). Gerekirse aynı maddenin başka cümlesi.
- **Hükümler:**
  - `İÇ-ÇELİŞKİ` (YANLIŞ): kaynağın (doğrulanmış) cümlesi, dilimin İÇİNDE ≥ 1 yıl için başka bir `d:` sahibi veriyor,
    ya da dilimin bir ucuyla ≥ 5 yıl çelişen bir tarih veriyor.
  - `UYUMLU`: kaynak cümlesi dilimin sahibini ve tarihini karşılıyor; adı geçen öteki devlet selef/halef/taraf olarak
    anılıyor.
  - `ÖLÇÜLEMEDİ`: alıntı TDV gövdesinde bulunamadı, kaynak TDV değil ve açılamadı, ya da cümle hüküm vermiyor.
  - `SÖZLÜK-HATASI`: eşleşme yanlış (anahtar başka bir şeyi adlandırıyor). Paydaya GİRMEZ, sözlük isabeti olarak
    ayrıca raporlanır.
- **Oran:** İÇ-ÇELİŞKİ / (İÇ-ÇELİŞKİ + UYUMLU), Y ve Kk için ayrı.

### 0.2 Sayısal öngörüler (sayımdan önce)
- Tanıklı dilimler (~1.225): `KENDİ` **%45 ± 15** · `YABANCI` **%20 ± 10** · `SESSİZ` **%35 ± 15** (sözlük
  Türkçe; İngilizce/Hırvatça/Rusça kaynak metinleri büyük ölçüde SESSİZ'e düşer).
- Y'de sözlük isabeti (gerçekten bir devlet adlandırılmış): **%75 ± 15**.
- Y'de anılan öteki devlet çoğunlukla **selef ya da halef** (dilimin ucunda el değiştiren): **%60 ± 20** ⇒ çoğu
  UYUMLU çıkar.
- **Y İÇ-ÇELİŞKİ oranı: %25 ± 15.** **Kk: %5 ± 5.** Hipotez: Y − Kk ≥ **15 puan**.
- İÇ-ÇELİŞKİ'lerin türü: ① dilim yanlış künyede ama kaynak doğru künyeyi adlandırıyor (Malta tipi) ② kaynak bir ara
  sahibi anıyor, dilim onu yutuyor (gecenin ana deseni, ama bu kez kaydın İÇİNDE). ①:② ≈ 1:2.
- Bölge: İÇ-ÇELİŞKİ'lerin çoğu Akdeniz adaları ve Balkan/Adriyatik (Malta, Mljet aynı gece çıktı).

### 0.3 Yanlışlanma şartları
- Y − Kk < 10 puan ⇒ "kaynak başka sahip anıyor" bir risk ölçütü değil.
- Sözlük isabeti < %50 ⇒ ölçüt sözlüğe bağlı kaldı, oran hüküm vermez; sözlük düzeltilip yeniden çekilir (beyanlı).
- Y'de ölçülebilen < 15 ⇒ hüküm verilmez.

## 1. ÖLÇÜM

### 1.0 Sapma (beyanlı, okumadan ÖNCE)
İlk koşuda sınıflayıcı dilimin `d:`'sini künyenin yalnız `id`'siyle eşledi. Oysa `s:[].d` künyenin **`harita:`**
anahtarını taşıyabilir: `ceneviz` 72 dilimde kullanılıyor, künyesi `cenova` (`harita:"ceneviz"`); `atinadukaligi` 18
dilim, künyesi `atina-dukaligi`. Kural zaten yazılı (`js/app.js:60-75`: *"Kimlik eşleşmesi soran her yer `id:` ∪
`harita:` okumalı"*), ve `denetle.py:2668` aynı körlüğü 1 Ekim'de belgelemiş. Benim aracım uymadı ⇒ düzeltildi
(`id ∪ harita`), yeniden çekildi. İki sayı: KENDİ 296 → 302 · YABANCI 163 → 157 · SESSİZ 766 → 766.

### 1.1 Sayım
```
tanıklı dilim 1.225 · künye 897 · sözlük anahtarı 1.337 (tekil 1.186, belirsiz 151 atıldı)
KENDİ 302 (%24,7) · YABANCI 157 (%12,8) · SESSİZ 766 (%62,5)
Y (YABANCI, L'ye göre ilk 40, önceden okunanlar hariç): L eşiği 91,4 yıl
Kk (KENDİ, L ≥ 45,7, 147 aday) ⇒ seed 1010 ile 20
```
**Sözlük isabeti (Y'nin 40'ı elle okundu): 23 / 40 = %57,5** (≥ %50 ⇒ §0.3-2 tetiklenmedi, ama öngörü %75 ± 15 ✗).
Yanlış eşleşmelerin kaynağı:
- `kazan` ← "kazandı" (Türkçe fiil) · `alman-konfederasyonu` ← "Almanlar" (1914-15 Alman İmparatorluğu) ·
  `kongre-polonyasi` ← "Viyana Kongresi" · `benin`, `guney-afrika-cumhuriyeti` ← çıplak TDV slug'ı ·
  `rodos-sovalyeleri`, `livonya-tarikati` ← belirsiz ön ek.
- Ayrıca `ü`/`û` katlama tutarsızlığı (Memlük ↔ Memlûk) KENDİ eşleşmesini kaçırıyor.

### 1.2 Okuma (kaynak notu; TDV alıntıları gövdede aranmadı — §1.4'e bak)
**Y (40): SÖZLÜK-HATASI 17 · UYUMLU 19 · İÇ-ÇELİŞKİ 0 · SINIR 1 · ÖLÇÜLEMEDİ 3**
- UYUMLU 19'un hepsinde öteki devlet **selef/halef** (Hasankeyf `artuklu`, İskenderun `antakya-prinkipsligi`,
  Trablusşam `trablus-kontlugu`, Norveç 7 şehir `danimarka` → Kiel 1814 …) ya da **olumsuzlanmış** (St. Louis,
  Los Adaes, San Luis: *"hiç Meksika olmadı"*; Agadir: *"Vattâsî/merini DEĞİL"*).
- SINIR: **Hama** `memluk 1299-1516` — not: *"⚠️ 1310-1342 Ebü'l-Fidâ ve oğlu ile Eyyûbî Hama YENİDEN kuruldu …
  bu ikinci dilim kapsam DIŞI, yazılmadı"*. Ebü'l-Fidâ Memlük sultanının atadığı nâib ⇒ `v:` mi `d:` mi (D205).
- ÖLÇÜLEMEDİ: Rakka (*"bir süre Memlük-Akkoyunlu mücadelesi"*, tarihsiz) · Akçakale (bölge cümlesi, S) · Kuban
  (komşu günü).
**Kk (20): UYUMLU 10 · İÇ-ÇELİŞKİ 2 · ÖLÇÜLEMEDİ 8**
- İÇ-ÇELİŞKİ, ikisi de **VARLIK**:
  - **Belh** `cagatay 1227-1370`: not TDV `belh`'i aktarıyor: *"1221'de … yerle bir edilip halkı kılıçtan geçirildi ve
    yaklaşık 100 yıl harabe halinde kaldı"* ⇒ ~1221-1321 harabe, dilimin İÇİNDE (§9.7).
  - **Çehrin** `altinorda 1281-1362`: not kendisi *"EoU 'Chyhyryn': yerleşim 16. yy ortasında Kazak kışlağı (14.
    yy'da yerleşim YOK — nokta bu dönemde bölgeyi temsil eder)"* ⇒ var olmayan yerin sahibi, BEYANLI.
- ÖLÇÜLEMEDİ 8: Karakoyunlu 5 (not kendisi *"BÖLGE CÜMLESİ, ŞEHİR TANIKLIĞI DEĞİL (D208)"*) · Gence, Merv, Simnân
  (not yalnız 1221/1235 Moğol tahribini tarihliyor, `ilhanli` dilimini değil: *"ardıl yapı; ilhanli künye günü
  devralındı — kaynaksız gün"*).

### 1.3 Oranlar ve öngörü
```
                         İÇ-ÇELİŞKİ / (İÇ-ÇELİŞKİ + UYUMLU)
Y (YABANCI)              0 / 19 = %0      (Hama dahil 1/20 = %5)
Kk (KENDİ)               2 / 12 = %17
Y − Kk                   −17 puan (−12)

öngörü                                   ölçüm
KENDİ %45 ± 15                           %24,7 ✗
YABANCI %20 ± 10                         %12,8 ✓
SESSİZ %35 ± 15                          %62,5 ✗
sözlük isabeti %75 ± 15                  %57,5 ✗
öteki devlet selef/halef %60 ± 20        19/23 = %83 ✗ (üstünde)
Y İÇ-ÇELİŞKİ %25 ± 15                    %0-5 ✗
Kk %5 ± 5                                %17 ✗
Y − Kk ≥ 15                              −17 ✗
```
**§0.3-1 YANLIŞLANMA GERÇEKLEŞTİ:** "kaynak notu başka bir devleti adıyla anıyor" bir risk ölçütü DEĞİL. Not başka
devlet andığında bu neredeyse her zaman el değiştirmenin öteki tarafıdır (selef/halef) ya da açık bir olumsuzlamadır.

### 1.4 🔴 Asıl bulgu: Malta tipi "başka sahip anma" değil, **"not kendi dilimini YANLIŞ ilan ediyor"**
Tohum vakanın (Malta) bu ölçütte nereye düştüğünü ölçtüm: Malta `napoli 1282-1530` **KENDİ** sınıfında. Çünkü not
kendi sahibini, onu yanlış ilan eden cümlenin içinde anıyor:
> *"⚠️ eski dilimin kalanı: TDV malta 1284'ten Aragon, 1410'dan Kastilya … — **1284-1530 napoli YANLIŞ, kapsam dışı,
> yazılmadı**"*
Bu gece okuduğum notlarda aynı yapı (bir önceki işçi hatayı GÖRMÜŞ, ADIYLA yazmış, ama düzeltmeyi uygulamamış) beş
yerde daha var:
| nokta | dilim | notun kendi cümlesi |
|---|---|---|
| Malta | `napoli 1282-1530` | *"1284-1530 napoli YANLIŞ, kapsam dışı, yazılmadı"* |
| Hama | `memluk 1299-1516` | *"1310-1342 … Eyyûbî Hama YENİDEN kuruldu — bu ikinci dilim kapsam DIŞI, yazılmadı"* |
| Königsberg | önceki dilim `almanya 1281-1525` | *"🔴 1281-1525 'almanya' da YANLIŞ (NDB: 'Ordensstaat' …) ama künyesi YOK, dokunulmadı"* — ⚠️ künye ARTIK VAR: `teuton-devleti` ve `teuton-sovalyeleri` (aşağıda) |
| Mljet | `macaristan 1358-1459` | *"⚠️ 1358-1410 ÇIKARIMDIR … 1358-1410 sahibini ADIYLA veren kaynak BULUNAMADI"* (GOVDE-TANIK'ta YANLIŞ okundu) |
| Çehrin | `altinorda 1281-1362` | *"14. yy'da yerleşim YOK — nokta bu dönemde bölgeyi temsil eder"* |
⇒ **Bu, ucuz ve sözlüksüz bir tarama:** dilimin kendi `kaynak:`'ında öz-ilan işaretleri (`YANLIŞ`, `yazılmadı`,
`dokunulmadı`, `kapsam dışı`, `ÇIKARIM`, `yerleşim YOK`, `BULUNAMADI`). Tohum vakayı ve dört akrabasını yakalıyor;
"kaynak başka devlet anıyor" ölçütü bunların hiçbirini ayırmadı. **Bu turda SAYMADIM** (öngörüsüz ölçüm olurdu).

### 1.5 Yan bulgular (ölçülü)
1. **Çift künye — Töton Tarikatı:** `teuton-devleti` (f 1230-01-01, t 1525-04-08, baskent "Kulm → Marienburg (1309)
   → Königsberg (1457)") ve `teuton-sovalyeleri` (f 1281-01-01 "PENCERE İŞARETİ", t 1525-04-08, baskent "Marienburg
   → Königsberg"). Aynı devlet, iki kimlik ⇒ D205 birleştirme kalemi.
   🔴 **ÖZ-DÜZELTME (KASA-HUKUM-SART-1010):** ilk teslimde "ikisi de 2'şer `s:` diliminde kullanılıyor" yazdım —
   YANLIŞ. `grep 'd:"…"'` deseni `id:"…"`yi de yakaladı; o "2" künye TANIMIYDI (devletler.js + paket_05). Ölçüm
   (`girdi.yukle`, `s:`/`v:`/`isg:`): **hiçbir dilim iki kimliği de kullanmıyor.** `teuton-sovalyeleri` yalnız
   kronolojide `devlet:` olarak geçiyor (bkz. HUKUM-SART).
   Ve Königsberg'in notu (*"künyesi YOK, dokunulmadı"*) bayat: künye(ler) şimdi var ⇒ `almanya 1281-1525` düzeltilebilir.
2. **Dubrovnik `macaristan 1358-1459`** (ve onu izleyen Mljet): `dubrovnik` künyesi VAR; zincirin kendi notu
   *"macaristan himayesi 1358"* diyor. Himaye = tâbiyet ⇒ `d:dubrovnik` + `v:macaristan` olmalı mı? (D205.)
3. **`_kaynak_tanikli` (GÖRÜNÜRLÜK diff'i) öneki yakalamıyor:** Akçakale'nin kaynağı *"bulunamadı — Akçakale için
   MÜSTAKİL kaynak YOK …"* ⇒ tam eşleşme değil ⇒ TANIK sayılıyor. Atlas genelinde bu kalıpta **1** dönem var.
   Düzeltme önerisi: `re.match(r"\s*bulunamad[ıi]\b", v, re.I)` ⇒ diff v2 (tavan 6 → 7).
4. TDV alıntı doğrulaması (§0.1 "alıntı gövdede aranır") **YAPILMADI**: Y'de İÇ-ÇELİŞKİ çıkmadığı ve Kk'nın ikisi
   notun kendi beyanı olduğu için hükmü değiştirmezdi. Beyan.

## 2. ③ İSTİYORUM
a) Ölçüt yanlışlandı (§1.3) ⇒ kayda. **Öneri: yerine "öz-ilan taraması"** (§1.4): `kaynak:` içinde kendi dilimini
   YANLIŞ/yazılmadı/ÇIKARIM ilan eden notlar. Sözlüksüz, tohum vakayı yakalıyor. Önce öngörü.
b) FAZ 2 adayları: Belh (harabe ~1221-1321, VARLIK) · Çehrin (beyanlı yerleşimsizlik) · Malta (zaten onaylı) ·
   Königsberg `almanya 1281-1525` → Töton künyesi.
c) Töton çift künyesi (`teuton-devleti` ↔ `teuton-sovalyeleri`) ve Dubrovnik `d:`/`v:` sorusu: künye kalemleri.
d) `_kaynak_tanikli` önek düzeltmesi (diff v2, +1 dönem: Akçakale).
