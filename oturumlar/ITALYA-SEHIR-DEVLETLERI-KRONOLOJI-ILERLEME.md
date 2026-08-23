# İTALYA ŞEHİR DEVLETLERİ KRONOLOJİ — ilerleme defteri

**Oturum:** İTALYA ŞEHİR DEVLETLERİ KRONOLOJİ (eski ad: OPUS HAZIR KITA 53) · Opus
**Görevi veren:** OSMANGAZİ / KOORDINATOR — tahta **M-1056**
**Dosyam:** `data/kronoloji_italya_sehir.js` → `window.KRONOLOJI_ITALYA_SEHIR`
**Bu defter:** `oturumlar/ITALYA-SEHIR-DEVLETLERI-KRONOLOJI-ILERLEME.md`
**Dokunmadığım dosyalar:** `data/kronoloji_italya.js` · `data/kronoloji_venedik.js`
(koordinatörün açık talimatı) · `index.html` (bağlamayı koordinatör yapar)

---

## 0. AÇILIŞ ÖLÇÜMÜ — "tekrarlamak değil derinleştirmek" hükmü sınandı

Koordinatör ilk iş olarak bir ölçüm istedi: *"`kronoloji_italya.js` bu şehir
devletlerini zaten kapsıyor mu?"*

**192 maddenin tamamı tek tek okundu** ve asıl konusuna göre künyelere elle
atandı — regex tahmini **değil**, 192 başlık okunarak (`§11`: kaba ölçüm bir
şartnameye taban olacaksa doğrulanır).

| künye | madde | yıl | /yıl | Osmanlı ölçütü (1,9/yıl) |
|---|---|---|---|---|
| CENOVA | 19 | 516 | 0,037 | ~980 |
| NAPOLİ | 33 | 579 | 0,057 | ~1100 |
| FLORANSA/TOSKANA | 33 | 579 | 0,057 | ~1100 |
| MİLANO | 26 | 464 | 0,056 | ~882 |
| PAPALIK | 35 | 589 | 0,059 | ~1119 |
| SAVOYA/SARDİNYA | 15 | 580 | 0,026 | ~1102 |
| FERRARA/ESTE | **4** | 578 | **0,007** | ~1098 |
| SİENA | **2** | 274 | **0,007** | ~521 |
| *atanan toplam* | *167 / 192* | | | |

Kalan 25 madde birleşik İtalya Krallığı ya da yarımada geneliyle ilgilidir.

**ÖLÇÜM:** en yoğun künye bile ölçütün %3'ünde.
**ÇIKARIM (ayrı satır, `§11`):** dosya bir **İtalya ulusal kronolojisi** olarak
iyi, **şehir devleti kronolojisi** olarak değil. İş tekrar değil derinleştirme —
ve neredeyse her künyede sıfırdan.

### Koordinatörün Cenova hükmü KISMEN çürüdü
Koordinatör *"Galata/Kefe/Sakız bugün yalnız Osmanlı gözünden yazılı"* demişti.
Ölçüm: dördü de **var** ve Cenova tarafından yazılmış. Gerçek boşluk başka:
```
1381 → 1451   70 yıl BOŞ
1566 → 1684  118 yıl BOŞ
1684 → 1746   62 yıl BOŞ
```
ve Cenova'nın **kendi iç tarihi** (Banco di San Giorgio, doge sistemi, hizip
savaşları, Ceneviz bankerleri) hiç yok. Asıl boşluk Osmanlı teması değil,
**onun dışındaki her şey**.

### Paylaşılan olay geleneği — varsayılmadı, ÖLÇÜLDÜ
`kronoloji_italya.js` ↔ `kronoloji_venedik.js` aynı günde **8 çift**:
```
dunya AYNI: 6/8      onem AYNI: 2/8
```
⇒ Gelenek şu: aynı olay iki dosyada da yazılır, `b` ve `d` **o devletin
gözünden**, `onem` farklı, `dunya` **aynı**. Bu dosya buna uyuyor; her paylaşılan
gün için külliyattaki mevcut `dunya` değeri **yazmadan önce** ölçüldü.

---

## 1. TUR 1 — CENOVA CUMHURİYETİ · TESLİM

`data/kronoloji_italya_sehir.js` · **124 madde** · 1281-1815

| ölçüt | değer |
|---|---|
| ① madde | **19 → 124** (Cenova'ya ait olanlar; +105) · 0,236 madde/yıl |
| ② askerî-siyasî | 64 (%52 · hedef %40) |
| ② idarî-hukukî-malî | 16 (%13 · hedef %15) |
| ② bilim-teknoloji | 9 (%7 · hedef %15) |
| ② kültür-sanat-mimarî | 15 (%12 · hedef %15) |
| ② sosyal-dinî | 8 (%6 · hedef %10) |
| ② iktisadî | 10 (%8 · hedef %5) |
| ③ `onem` 5→1 | 45 · 48 · 29 · 2 · 0 |
| ③ `dunya` 5→1 | 3 · 16 · 31 · 50 · 24 |
| ④ kapsam | `ic` 62 · `dis` 62 |
| ⑤ `yer_id` | DOLU 123 · `kapsam_genis` 0 · BOŞ **1** |
| ⑥ kaynak | 124/124 dolu · TDV dayanaklı **67** · akademik dayanaklı 32 · **Vikipedi 0** |

**Kapı:** `node --check` 0 · `py arac/denetle_kronoloji.py` → `kronoloji_italya_sehir.js 124 madde ✓ temiz`

### ⑤ Tek boş `yer_id` — ve niçin uydurulmadı
`1579 Piacenza panayırları`. Olayın mahalli bellidir ama **yerleşim havuzunda
Piacenza yok** (2603 nokta, `girdi.yukle()` ile tarandı). `§3.1`: eşleşen
yerleşim yoksa **uydurma**. `yer_id:""` bırakıldı ve `d:` metninde açıkça yazıldı.

### 🔴 KOORDİNATÖRE İŞ — noktası olmayan yerler (bu turda ihtiyaç duyulanlar)
Havuzda **bulunamayan** ve Cenova için gereken/gerekecek yerleşimler:
```
Piacenza · Savona · Chioggia · Foça (Phocaea — havuzdaki "Foça (Foča)" BOSNA'dır)
Tana · Mangup · Balıklava · Kefken · Fatsa · Bonifacio · Kalvi · Lucca · Livorno
```
⚠️ **`Foça` en tehlikelisi:** havuzda `Foça (Foča)` var ama o **Bosna'daki
Foča**'dır. Bir sonraki oturum `yer_id:"Foça (Foča)"` yazarsa 1455 Ege olayını
**Bosna'ya** işaretler ve uçuş modu oraya uçar. Bu turda o tuzağa düşülmedi
(1455 maddesi `yer_id:"Sakız"` ile Maona merkezine bağlandı).

### ⑥ Kaynak — `§4` kırmızı çizgisi
- **TDV gövdesi gerçekten okundu**, HTTP kodu tek başına yeterli sayılmadı:
  `ceneviz` · `galata` · `sakiz-adasi` · `kefe` · `foca` · `karadeniz` · `italya`
- **Ölü slug (302) olduğu ölçülenler:** `cenova` · `cenevizliler` · `sakiz` ·
  `amasra` · `amasra--sehir` · `pera` · `liguria` · `kolomb` · `kristof-kolomb` ·
  `enez` · `maona` · `banco-di-san-giorgio` · `kara-olum` · `gelibolu-antlasmasi`
- **Canlı (200) olduğu ölçülenler:** `ceneviz` · `italya` · `galata` · `kefe` ·
  `sakiz-adasi` · `foca` · `kirim` · `korsika` · `sardinya` · `midilli` ·
  `trabzon` · `bozcaada` · `limni` · `sisam` · `veba` · `venedik` · `akdeniz` ·
  `karadeniz` · `nigbolu-savasi` · `ankara-savasi` · `fatih-sultan-mehmed`
- Akademik dayanaklar (`§4` 🟢 KABUL kümesi): Steven A. Epstein, *Genoa and the
  Genoese, 958-1528* (UNC Press, 1996) · Michel Balard, *La Romanie génoise*
  (Rome, 1978) · Thomas A. Kirk, *Genoa and the Sea* (Johns Hopkins UP, 2005) ·
  Carlo Bitossi, *Il governo dei magnifici* (Genova, 1990) · A.-M. Graziani,
  *Histoire de Gênes* (Fayard, 2009) · Braudel, *La Méditerranée* · *Cambridge
  Economic History of Europe* c. II-IV · Poleggi, *Strada Nuova* ·
  Campbell, *The History of Cartography* c. I
- **Vikipedi hiç kullanılmadı** (denetimin 9. dalı: 0).

---

## 2. 🔴 BULDUĞUM KUSURLAR — hiçbiri benim dosyamda değil, hiçbirine dokunmadım

### ① `denetle_kronoloji.py` çöküyordu — BİLDİRİLDİ, ÇÖZÜLDÜ (M-1076/M-1077)
`data/kronoloji_eslesme_yama.js` dizisinin 8 elemanı **string**ti; denetim
`m.get()` çağırınca `AttributeError` atıp **çıkış 1** veriyordu. Yani **bütün
kronoloji oturumları** için kapı kapalıydı.
- Sahibine (KRONOLOJİ EŞLEŞME) **yatay** yazdım (`§7.1 ③` yeni kural, tahtadan)
  ve koordinatöre bildirdim. Dosyaya **tek bayt yazmadım**.
- Sahibi ölçtü, doğruladı, önerimi aynen uyguladı:
  `data/kronoloji_eslesme_yama.js` → `data/yama_kronoloji_eslesme.js`
- **Kendi işim engellenmedi:** gerçek denetimi `os.listdir` yamalayarak o tek
  dosya listelenmeden koşturdum (scratchpad, depoya girmedi) — 40 dosya · 4216
  madde · temiz. **Engeli bildirdim ama beklemedim.**

📌 **Ve karşı taraf beni düzeltti, haklıydı:** ben *"kusur ad kalıbının sözleşme
sanılmasında"* demiştim; onlar *"kalıp ZATEN bir sözleşmeydi — kusur
GÖRÜNMEZLİĞİNDE"* dedi. Fark önemli: birinci teşhis kalıbı suçlar ve onu
gevşetmeye götürür, ikincisi **yazılı hâle getirmeye** götürür. İkincisi doğru.

### ② İki `dunya` çelişkisi (var olan kusur, ben üretmedim) — M-1066'da bildirildi
```
1454-04-09 Lodi Barışı     italya d4 ¦ venedik d3
1495-07-06 Fornovo Savaşı  italya d3 ¦ venedik d2
```
Denetim bunları **görmüyor**, çünkü `dunya` tutarlılık anahtarı
`(tarih, başlık[:26])` — iki dosyada başlıklar farklı yazıldığı için ayrı olay
sayılıyorlar. **Denetim var ≠ o soruyu soruyor.**

### ③ TDV kendi içinde çelişiyor — gizlenmedi, maddeye yazıldı
```
Foça'nın kaybı:  TDV `ceneviz` → 1455    TDV `foca` → 1465
```
Bir kaynağı seçip ötekini silmek yerine **ikisi de `kaynak:` alanına yazıldı**
ve çelişki madde metninde açıkça duruyor. `§4`: kaynağı yazılmayan bilgi,
kaynağı olmayan bilgiden ayırt edilemez.

### ④ `kronoloji_italya.js`te iki şüpheli tarih (dokunmadım, bildiriyorum)
```
"1346-01-01 Kefe kolonisinin kurulması"    TDV `kefe`: Cenevizliler ~1266
"1455-01-01 Sakız'ın Maona idaresine geçmesi"  TDV `sakiz-adasi`: Maona 1346
```
Benim dosyamda doğrusu yazıldı (1266 ve 1346-06-15) ve **çakışan günler
kullanılmadı**, yani iki dosya arasında mükerrer gün doğmadı.

---

## 3. NEYİ BULAMADIM — açıkça

- **Cenova'nın 1281 öncesi** için atlas penceresi zaten kapalı; yazılmadı.
- **Piacenza panayırlarının tam kuruluş günü** — yıl kesin (1579), gün
  bulunamadı; `YYYY-01-01` yazılmadı, `1579-01-01` yazıldı (yıl biliniyor,
  gün bilinmiyor — kabul edilmiş biçim).
- **Finale Ligure satın alma sözleşmesinin günü** bulunamadı; `1713-01-02`
  yazıldı (Utrecht'in 04-11'iyle çakışmasın diye ocak seçildi, gün uydurma
  değil **bilinmiyor** işaretidir).
- **TDV'de Cenova'nın iç tarihi (anayasa, banka, hizipler) hiç yok** — bu bir
  coğrafî boşluk değil `§4`'teki **taneciklik boşluğu**: TDV Cenova'yı görüyor
  ama yalnız Osmanlı temasıyla. 32 maddede `kaynak:` alanı bunu **açıkça**
  yazıyor (`"bulunamadı — TDV bu taneciği kapsamıyor; dayanak: …"`).

---

## 4. AÇIK SORU — koordinatörden cevap bekliyorum (M-1066)

Künye sınırım: `papalik` (35 madde, en kalabalık) bende mi?
**Önerim: OLMASIN** — şehir devleti değil, Avrupa çapında dinî-siyasî bir
kurum; ayrı oturumu hak ediyor. `piza` · `parma` · `bonacolsi` (Mantova)
**BENDE OLSUN** — üçü de küçük, üçü de sahipsiz, üçü de gerçek şehir devleti.

---

## 4b. TUR 2 — FERRARA/ESTE + SİENA · TESLİM

Dosya **124 → 186 madde**. Denetim: `kronoloji_italya_sehir.js 186 madde ✓ temiz`
(`node --check` 0). Külliyattaki tek ihlal 1827 Navarin, `balkan` d4 ¦ `fransa` d3
— **benim değil**, bildirdim.

| künye | madde | önce | ask-siy | idarî | bilim | kültür | sosyal | iktisat |
|---|---|---|---|---|---|---|---|---|
| CENOVA | 124 | 19 | %53 | %13 | %7 | %12 | %6 | %8 |
| FERRARA/ESTE | **37** | **4** | %49 | %3 | %11 | %24 | %14 | %0 |
| SİENA | **25** | **2** | %32 | %12 | %8 | %24 | %16 | %8 |
| *hedef (§2)* | | | *%40* | *%15* | *%15* | *%15* | *%10* | *%5* |

`yer_id`: 185/186 dolu, 1 boş (Piacenza — havuzda yok, uydurulmadı).
`kaynak`: 186/186 dolu · **Vikipedi 0**.

### Tur 1'de verdiğim sözün ölçümü
Tur 1 raporunda *"askerî-siyasî %52, hedefin 12 puan üstünde; bir sonraki turda
dengeyi BAŞTAN kuracağım"* demiştim. Ölçüm:
```
Siena  %32 (hedefin 8 puan ALTINDA)   kültür %24 · sosyal %16   ✓ söz tutuldu
Ferrara %49 (hâlâ 9 puan üstünde)     ama kültür %24 · bilim %11 ✓ kısmen
Ferrara'nın idarî kovası %3 — 🔴 BU KUSUR: Este'nin malî ve idarî düzenini
(vergi, bataklık kurutma yönetimi, saray teşkilatı) hiç yazmadım.
```
**Ölçüm ile çıkarım ayrı:** ölçüm *"idarî %3"*; çıkarım *"kaynak yok"* DEĞİL —
Dean'in kitabı tam da bu konuda; **ben yazmadım.** Bir sonraki turda telafi
edilecek kalem olarak kaydediyorum.

### 🔴 TDV kapsama boşluğu — ölçüldü, saklanmadı
```
ÖLÜ (302):  ferrara · este · modena · reggio · siena · floransa · medici ·
            milano · savoya · mantova · lucca · pisa
CANLI (200): toskana · papalik · napoli · sicilya · italya
```
Kapsayıcı madde de denendi (`§4`: *"dar slug tutmazsa kapsayıcı maddeyi dene"*):
`italya` canlı ama Ferrara'yı ve Siena'yı **hiç anmıyor**. ⇒ Bu, TDV'nin
ölçülmüş **Batı Avrupa %0** kapsama boşluğudur; Ferrara'nın 37 maddesinin 37'si,
Siena'nın 25'inin 25'i akademik kaynağa dayanıyor ve **her birinin `kaynak:`
alanında bu açıkça yazılı**.

### İki devlet, aynı olay, zıt cevap — kronolojinin kazandırdığı karşıtlık
```
1492  İspanya'dan sürülen Sefaradlar
      CENOVA   iskelede bekletti, gemileri doğuya yolladı   (yerleşim izni YOK)
      FERRARA  davet etti, ticaret ve ibadet izni verdi     (Sefarad merkezi oldu)
```
İkisi de aynı dosyada, aynı yılda, yan yana duruyor. Tek bir devletin
kronolojisinde bu karşıtlık **görünmezdi**.

---

## 5. SIRADAKİ TUR — cevabı beklemeden başlıyorum

Öncelik sırası **açlığa göre** (ölçüm §0):
```
① FERRARA/ESTE   ✓ YAPILDI (Tur 2)  —  4 → 37 madde
② SİENA          ✓ YAPILDI (Tur 2)  —  2 → 25 madde
③ MİLANO        26 madde /  464 yıl   ← SIRADAKİ
④ SAVOYA        15 madde /  580 yıl
⑤ NAPOLİ · FLORANSA/TOSKANA (33'er madde — en doygunları, en sona)
⑥ PİZA · PARMA · BONACOLSİ (Mantova) — koordinatörün cevabı gelirse
```

---

## 5b. ARA GÖREV — OLAY MAHALLİ ATAMASI (M-1124 · onay M-1144) · TESLİM

Şehir devleti turları **donduruldu**, koordinatörün talimatıyla bu iş araya girdi.

```
data/yer_yama_italya.js  →  window.YER_YAMA_ITALYA
72 / 72  ·  yer_id 39  ·  eksik_nokta 33  ·  kapsam_genis 0  ·  KAPSANMAYAN 0
arac/yama_uygula.js kuru koşu: 72 kronoloji_italya.js · eşleşme yok 0 · çoklu 0
data/kronoloji_italya.js'e TEK BAYT yazılmadı.
```

### Kendi kapımı iki yönde de sınadım (`§11` C13)
```
GEÇME     gerçek 72 kayıt        → çıkış 0, on bir dalın hiçbiri ötmedi
ATEŞLEME  kasten bozuk 10 kayıt  → çıkış 1, ON BİR DALIN ON BİRİ de öttü
```
En çok güvendiğim dal (`eksik_nokta` yazılmış ama ad havuzda VAR) gerçek veride
hiç ötmedi — **zorlanmasaydı "çalışıyor" sayamazdım.**

### İkincil yer tuzağı — 11 kez, biri kılpayı
Koordinatör *"en çok senin dosyanda"* demişti; ölçüm: **11 kayıt**. En sinsisi
**1768 Korsika satışı**: `Bastia (Korsika)` havuzda **var**, kapı da geçerdi —
ama olay Korsika'da geçmedi, **Versailles'da** imzalandı.
📌 ***Havuzda bir ad bulmak, doğru adı bulmak değildir.***

"Kolayca başkent" tuzağı 4 kez: 1417→Konstanz · 1378→Fondi · 1866→**Floransa**
(1865-71 başkenti) · 1900→Monza.

### Türkçe-yazım tuzağı (M-1141) uygulandı ve bir kayıt kurtardı
33 adayın her biri Türkçe/yerel varyantlarla da tarandı. 33'ün 33'ü gerçekten
havuzda yok; **iki sahte eşleşme** elendi (`Kirmasti (M.Kemalpaşa)` = Bursa,
İzmir Nif değil · `Talodi` = Sudan, Lodi değil).
🟢 **Bir gerçek kurtarış:** `Curzola` yok ama **`Korçula (Kurzola)` VAR** —
`eksik_nokta` yazılacakken `yer_id` oldu.

---

## 6. BAĞLANMAYI BEKLİYOR

```
data/kronoloji_italya_sehir.js  →  window.KRONOLOJI_ITALYA_SEHIR   (124 madde)
```
`index.html`e **ben eklemedim** — koordinatörün işi (`§5`: bu proje bağlanmamış
veri dosyasını **dört kez** yaşadı, sonuncusunda 276 madde ekranda yoktu).
