# parti-emrelic-0035 — ORTA ÜÇTE BİR · BULGU RAPORU

**Oturum:** OPUS HAZIR KITA 102 (Opus 5) · **Sevk:** 1.MURAT, tahta `M-1903`
**Tarih:** 1 Eylül 2026 · **Kimlik:** `local_a47030ee-0798-4cf1-a52f-631101059ead`

---

## 0. TESLİM — SAYIYLA

```
Payıma düşen AÇIK madde        13   (H-0055 … H-0080, ikisi SINIR maddesi)
Hükme bağlanan                 13
  cozuldu                       3   H-0055 (veri yazıldı) · H-0077 · H-0080 (kaynakla cevaplandı)
  zaten-dogru                   2   H-0058 · H-0065
  bayat                         3   H-0066 · H-0070 · H-0076
  senin-kararin                 2   H-0062 · H-0079
  sirada (başka işe bağlı)      3   H-0059 · H-0063 · H-0072
YENİ AÇILAN KALEM               6   aşağıda §12 — hiçbiri Emre'nin listesinde yoktu
```

**Evren:** `ClaudEmre/kutu/giden/parti-emrelic-0035/CEVAP.json` → `maddeler`.
Toplam 102 madde · `sirada` 26 + `olculecek` 12 = **AÇIK 38** ⇒ koordinatörün
38 rakamı **doğrulandı**. Kesim `i*38//3` → 0·12·25·38; ortası bende.
🔴 `denetim/HUKUM-*.json`'a **BAKILMADI** (yanlış evren).

**Dosya sahipliği:** Paylaşılan hiçbir veri dosyasına yazılmadı.
Açtığım dosyalar: `data/yerlesimler_ok102.js` (→ `window.YERLESIMLER_OK102`),
bu rapor, `oturumlar/OPUS-102-ILERLEME.md`.
`arac/girdi.py` · `renkler.py` · `uret_petek.py` **okundu, YAZILMADI** (koşu kilidi).

---

## 1. H-0055 — Tebük · Yenbu · Medine arasında yol/durak yok mu? → **ÇÖZÜLDÜ (veri)**

**Şikâyet doğrulandı ve ölçüldü.** Hicaz koridoru kutusunda (23,5-29,5K /
35,0-41,0D) **toplam 5 nokta** var: Tebük · Teymâ · Nefud çölü · Medine · Yenbu.
Tebük ile Medine arasındaki **~450 km'lik hac yolu şeridinde Osmanlı sahipli
tek nokta yok**; Teymâ'nın 1836 öncesi sahibi de yok (`bos:kabile`).
⇒ `CLAUDE.md §2` emilme deseninin ders kitabı vakası.

**Kaynak — TDV, iki CANLI madde, gövdesi okundu:**
- `tebuk` (200): *"965 (1558) … Kanûnî Sultan Süleyman'ın emriyle **hac
  güzergâhında yapılan kalelerden biri de Tebük Kalesi idi**"* ⇒ yolda bir
  **kale/menzil zinciri** olduğu TDV ile sabit.
- `hicaz-demiryolu` (200): *"1905'te **Müdevvere**'ye, bir yıl sonra **Medâin-i
  Sâlih**'e ulaşıldı … **el-Ulâ**'ya 1907'de, Medine'ye 1908'de varıldı."*
- ⚠️ `ula` · `el-ula` · `medain-i-salih` · `mudevvere` · `darbulhac` → **dördü
  de HTTP 302 = ÖLÜ**. Müstakil maddeleri yok; **uydurulmuş tek ad yoktur**.

**Yazıldı:** `data/yerlesimler_ok102.js` — 3 nokta.
| nokta | koordinat | desen | en yakın mevcut nokta |
|---|---|---|---|
| Müdevvere | 29,331 / 36,001 | Maan (1517-01-01 → 1918-09-27) | Maan 99,3 km |
| Medâin-i Sâlih (el-Hicr) | 26,786 / 37,955 | Tebük (1517-07-06 → 1918-01-01) | Teymâ 110,7 km |
| el-Ulâ | 26,617 / 37,917 | Tebük | Teymâ 129,0 km |

**Kapı ölçümleri (varsayım değil, koşturuldu):**
- 3 KM kuralı: en yakın komşu **99 km** — mükerrer yok.
- Değişmez 2: kullanılan dört dönem ucunun **dördü de çekirdekte zaten var**
  (1517-01-01 · 1517-07-06 · 1918-01-01 · 1918-09-27) ⇒ **yeni kırılma açmıyor**.
- Geri okuma: `girdi.py._cevir` ile ayrıştırıldı → **3/3 kayıt**, görünmez bayt
  (0x00/0x08) **yok**, Değişmez 1 örneklemesi (7 yılda bir, 1281-1923) **0 sahipsiz**.

**KOORDİNATÖRE:** dosya **bağlanmayı bekliyor** (`girdi.py` sende ve kilitli).
Bağlama öngörüm dosyanın sonunda damgalı — ④ ya da ⑤ tutmazsa mazeret yok.

---

## 2. H-0058 — Kaheti ve Terki vassal rengi görünüyor, o devirde öyle miydi? → **ZATEN DOĞRU**

Görselin damgası **1598-04-09**. Veri:
```
Zagem (Kaheti)   v: 1578-08-09 → 1606-01-01     ⇒ 1598'de TÂBİ  ✓
Tarki (Tarku)    v: 1578-11-01 → 1607-01-01     ⇒ 1598'de TÂBİ  ✓
```
**TDV `gurcistan` (200, gövdesi okundu) doğruluyor:** *"Ağustos 1578'de …
24 Ağustos'ta **Tiflis** şehrini savaşsız ele geçirdiler. Tiflis'in fethinden
sonra İmeret ve **Kahet** yöneticileri Osmanlılar'a [itaat etti]"* · *"(1590)
… **Gürcistan Osmanlı idaresine geçti**. 1590-1614 yılları arasında Osmanlı
idaresinde kalan Gürcistan…"* · *"1603'te Şah I. Abbas Tiflis'i geri alıp …
**Kahet**'te Yenisel Sultanlığı'nı kurdu ve 1606'da…"*
⇒ Hem tâbilik hem 1606 bitişi kaynakla örtüşüyor. **Kusur yok.**

Emre'nin ikinci sorusu — *"buralar Gürcistan olup vassal mıydı"* — cevabı
**evet**: Kaheti bir **Gürcü krallığı** olarak varlığını sürdürdü, Osmanlı
tâbiiyeti altındaydı; veri bunu `v:` ile (tâbi) doğru ifade ediyor.
`CLAUDE.md §3`: *OSMANLI ile tâbi yan yana çelişki sayılmaz.*

🔴 **YAN BULGU (§12-①):** TDV Tiflis'in fethini **24 Ağustos 1578** diyor,
veride **1578-08-09**. **15 gün fark.** Düzeltmedim — paylaşılan dosya ve
kırılma günü; senin kalemin.

---

## 3. H-0059 — 1425 maddesinde "Teke" yanlış · Germiyan iki aşamalı → **SIRADA (KRONOLOJİ İÇERİK)**

Önceki turun ölçümünü **devraldığım gibi aktarmadım, doğruladım**:
`data/olaylar_ek.js` `t:"1425-06-01"` maddesinin başlığı *"Batı Anadolu
beyliklerinin yeniden ilhakı: Aydın, Menteşe, **Teke**"* ve `yer:` alanında
*"Antalya (Teke/Hamîd)"* geçiyor — oysa Antalya `d.f=1423-01-01` ile **iki yıl
önce** ayrı bir maddeyle kesin alınmış.
⇒ **Metin kusuru**, veri kusuru değil. Düzeltme `olaylar_ek.js`te ve o dosya
bende değil. Öneri: başlıktan ve `yer:` alanından *Teke/Antalya* çıkarılsın.

Germiyan'ın "iki aşamalı" görünümü: veri **doğru** (Kütahya/Tavşanlı/Emet/Afyon
`s:germiyan` 1429-02-01'e kadar). Kalan ihtimal render/opaklık — **ölçmedim**,
canlı harita bu ortamda sürülemiyor.

---

## 4. H-0062 — Demak/Majapahit maddesinin Osmanlı açısından önemi ne? → **SENİN KARARIN**

Madde: *"Demak Sultanlığı'nın Majapahit'i yıkıp Cava kıyısına hâkim olması"*,
`t:"1527-01-01"`, **`data/olaylar_ek16.js`** — yani **çekirdek Osmanlı
kronolojisinin içinde**, ayrı bir dünya dosyasında değil.

**Ölçüm:** bütün kronoloji külliyatında `kapsam:"dis"` **2449** madde,
`dunya:>0` **5142** madde var (toplam ~6100). Yani "dünya maddesi" **nadir
değil** — Emre'nin *"buna benzer çok olay gelmiyor"* izlenimi, panelin o an
gösterdiği **1226 başlıklık çekirdek listeye** ait; külliyatın tamamına değil.

**ÇIKARIM (ölçüm değil):** asıl soru "bu madde niye var" değil,
**"çekirdek liste ile dünya listesi arasındaki sınır nerede"**. Bu bir
**kapsam kararıdır** ve `CLAUDE.md §1.6`nın konusudur — benim yetkimde değil.
Tek cümlelik sorum: **`olaylar_ek16.js` gibi çekirdek dosyalara Osmanlı ile
teması olmayan dünya maddeleri girecek mi, yoksa hepsi `kronoloji_*.js`e mi
taşınacak?**

---

## 5. H-0063 — Bu bölge neden işgal altında görünüyor, hata mı? → **SIRADA · İKİ GERÇEK KUSUR**

Görselin damgası **1538-01-01**, taralı alan **Herceg Novi (Hersek Novi)**.
Kaynağı bulundu: `data/devirler.js` → `window.ISGALLER[0]`
`{id:"ispanya", f:"1538-01-01", t:"1539-01-01", bbox lon 18,3-18,7 / lat 42,3-42,8}`.

**① HATA DEĞİL — özü doğru.** Kutsal İttifak donanması (Andrea Doria)
Herceg Novi'yi 1538 sonbaharında aldı, Barbaros 1539 yazında geri aldı.
Kayıt bu olayı ifade ediyor.

**② AMA İKİ KUSUR VAR, ikisi de ölçülebilir:**
```
🔴 YUVARLAK TARİH   f:"1538-01-01" · t:"1539-01-01"
   Gerçek: kale Preveze'den (28 Eylül 1538) SONRA alındı, yani işgal
   örtüsü ekranda ~9 AY ERKEN başlıyor. Emre'nin görseli tam da bunu
   yakalamış: 1 Ocak 1538'de tarama ZATEN ORADA.
   ⚠️ TDV'de `herseknovi` · `hersek-novi` · `novi` · `kastelnovo`
      DÖRDÜ DE 302 (ÖLÜ). Gün için TDV `barbaros-hayreddin-pasa` (200)
      okunmalı — BEN OKUMADIM, ölçmediğimi ölçmedim diye yazıyorum.
🔴 KRONOLOJİ MADDESİ YOK — ve Emre bunu da sormuş ("kronolojide neden
   maddesi yok"). ÖLÇTÜM: bütün `olaylar*.js` + `kronoloji_*.js` içinde
   "Herceg / Hersek / Castelnuovo / Novi" geçen 1537-1540 maddesi SIFIR.
   1538-1539'un TÜM maddeleri tarandı (36 madde) — hiçbiri bu işgali anmıyor.
   ⇒ Bu, `Değişmez 2i`nin (işgal senkronu, tavan 3) açık kalemlerinden biri.
```
**Öneri:** iki maddelik bir kalem — *"Herceg Novi'nin Kutsal İttifak
tarafından alınışı"* ve *"Barbaros'un geri alışı"* — ve gerçek günler
girildikten sonra `ISGALLER` kaydının uçları o günlere çekilsin.
Kalem **KRONOLOJİ** oturumunun; `devirler.js` **üretilmiş** dosya, elle
düzenlenmez, üreteci `arac/uret_devirler.py` sende.

---

## 6. H-0065 — Bu maddede haritada değişiklik olmuyor → **ZATEN DOĞRU (Emre haklı) + YENİ SORU**

Görsel damgası **1555-01-01**, madde *"İbrim ve Nûbe sınırının güneye taşınması"*.

**ÖLÇTÜM:** İbrim/Nûbe kutusunda (18-24K / 30-35D) **14 nokta** var ve
**hiçbirinin 1555 civarında kırılması yok**:
```
İbrim        d: 1517-04-13 → 1805-07-03   (TEK, kesintisiz Osmanlı dönemi)
Vâdî Halfâ   d: 1517-04-13 → 1805-07-03   (aynı)
Delgo · Abrî · Kerma · Dongola …  s: funj 1504-01-01 → 1821-01-04
```
⇒ Madde 1555'te bir kırılmaya bağlı **değil**; Emre'nin gözlemi **birebir doğru**.

**ÇIKARIM (ölçüm değil):** sebebi büyük ihtimalle **bizim kendi
düzeltmemiz.** `CLAUDE.md §3.5` İbrim'i *hayalet devlet* vakası olarak
kaydediyor: kayıt `memluk … 1555`ti, **1517-04-13'e çekildi.** Düzeltme
doğruydu — ama 1555 maddesini **karşılıksız bıraktı**.
📌 `§3.5.1`in aynası: *bir sınır kayması iki uçtan ölçülür* — burada bir uç
düzeltildi, öteki uçtaki **kronoloji maddesi** unutuldu.

**AÇTIĞIM SORU (§12-②):** 1555'te gerçekten bir sınır hareketi var mıydı?
Osmanlı'nın Nûbe serhaddi Say (Sâi) adasına kadar uzatıldıysa, bugün
`funj` yazan **Delgo (Sükkût)** ve **Abrî (Mahas)** kayıtları eksik demektir.
Bu **araştırma kalemi**dir; TDV'de `nube`/`sudan` denenmeli. **Ben ölçmedim.**

---

## 7. H-0066 — 25 konu etiketini bütün maddelere dağıtalım → **BAYAT: ALTYAPI ZATEN VAR**

🔴 `M-1903 §⑥`nın iki ölçümü **tam burada karşılığını verdi.**
```
ÖLÇÜM                                          SONUÇ
`etiket:` alanı dolu madde                     6101   (~6097 maddenin hepsi)
farklı etiket sayısı                            571
Emre'nin 36 kategorisinden karşılığı OLAN        26   (%72)
"Konu süzgeci" arayüzü (js/app.js)              VAR
data/etiket_yama.js (taksonomi önerisi)         VAR · 128 KB · 25 Ağu 01:51
```
🔴 **VE KANIT EMRE'NİN KENDİ GÖRSELİNDE:** H-0062'nin ekran görüntüsü
**25 Ağustos 19:26**'da alınmış ve kronoloji panelinde **"Konu süzgeci"
düğmesi açıkça görünüyor.** H-0066 şikâyeti **21:37**'de yazılmış —
**iki saat sonra.** Yani istenen süzgeç, şikâyet yazılırken ekrandaydı.

**GERÇEKTEN EKSİK OLAN — ve bu küçük bir iş:**
```
🔴 karşılığı YOK (10):  kişiler · bürokrasi · sanat · hastalık · ulaştırma
                        haberleşme · hayvancılık · madencilik · icat · siyasi*
   * "siyasi" YAZIM farkı: veride "siyaset" (1138 madde) diye geçiyor
🟡 ÇOK ZAYIF (<10 madde): afet 1 · sanayi 1 · tarım 2 · magazin 3 · spor 7
```
⚠️ **Kendi ölçümümün kusurunu da yazıyorum:** ilk geçişte Türkçe harf
katlaması yapmadığım için `kültür`→`kultur` (550) ve `ıslahat`→`islahat`
(115) **yanlışlıkla "yok"** çıkmıştı. Düzelttim; yukarıdaki sayılar
düzeltilmiş ölçümdür. (`CLAUDE.md`: *ölçüm doğru, evren dar.*)

**Öneri:** yeni bir taksonomi TASARLANMASIN. `etiket_yama.js` uygulansın +
10 eksik etiket ve **normalizasyon sözlüğü** (siyasi↔siyaset, goc↔göç —
ikisi de veride ayrı ayrı geçiyor) eklensin.

---

## 8. H-0070 — Solnok kaybı diğerleri gibi gösterilmiyor, renkler üst üste → **BAYAT**

```
şikâyet (H-0070-1.png)                     25 Ağustos 2026  22:56
taralı-alan KÖKÜ düzeltildi (e53c86a)      27 Ağustos 2026  02:49
                                            ⇒ şikâyet düzeltmeden 28 SAAT ÖNCE
```
Emre'nin tarifi — *"Osmanlı kırmızısı ile Avusturya rengi üst üste binmiş,
Voronoi alanı arka planda"* — `uret_devirler.py`nin `coz()` fonksiyonunun
`PARCA_HALKA` katmanını atlayan hâlinin **birebir belirtisi**.

**Veri tarafı TEMİZ, ölçüldü:**
`Solnok (Szolnok)` `d: 1552-09-04 → 1685-10-19`, sonra `s: avusturya`.
**Tek kırılma, çakışma yok, sıfır uzunluklu dönem yok.** Veri iki sahibi
aynı anda gösteremez.

**İSTEK:** bu madde **yeni bir ekran görüntüsüyle** yeniden açılsın.
`CLAUDE.md`: *ilk soru "bu kusur var mı" değil, **"bu şikâyet hâlâ geçerli mi"***.
Canlı haritayı bu ortamda süremiyorum (WebGL kısıtı) — **doğrulamadım**.

---

## 9. H-0072 — Sınırlarda renklerin örtüşmemesi → **SIRADA (MOTOR)**

Önceki turun teşhisi: iki bağımsız Chaikin-yumuşatılmış gövde poligonunun
ortak sınırındaki **T-junction dikişi**; `DEVIRLER`/`ISGALLER` karışmıyor
(Nystad 1721 ikisinde de yok). **Bu teşhisi ben yeniden ölçmedim** — motor
dosyaları koşu kilidinde ve canlı harita sürülemiyor.

Ekleyebildiğim tek ölçüm: şikâyetten (25 Ağu) bugüne **`data/devirler.js`
üzerinde 4 üretim koşusu** geçmiş (`e53c86a` · `beb4744` · `bfa5609` ·
`dd78292` · `763e196` · `a7f000f`). Yani bu şikâyet de **bayat olabilir**;
karar için yeni görsel gerekiyor. **Ölçmediğimi ölçmedim diye yazıyorum.**

---

## 10. H-0076 — Ahmed Paşa Antlaşması'nda taralı alanlar tutarsız → **BAYAT (+ bir açık soru)**

```
şikâyet (H-0076-1.png)                     26 Ağustos 2026  00:32
taralı-alan KÖKÜ düzeltildi (e53c86a)      27 Ağustos 2026  02:49
                                            ⇒ şikâyet düzeltmeden 26 SAAT ÖNCE
```
**BUGÜNKÜ VERİYİ NOKTA-POLİGON TESTİYLE ÖLÇTÜM** (`DEVIRLER[2]`, alıcı
`safevi`, 8 parça, bbox lon 43,6-49,5 / lat 30,3-41,4):

| Emre'nin şikâyeti | bugünkü ölçüm |
|---|---|
| "Mısır'daki toprakların ne alakası var" | **Mısır TARALI DEĞİL** — Kahire testte temiz, bbox Mısır'a hiç uzanmıyor |
| "Derbend görünüyor, orası Rusya'da değil miydi" | **Derbend TARALI DEĞİL** · ve veri Emre'yi doğruluyor: `s: rusya 1722-08-23 → 1735-03-10` |
| "Şirvan · Şamahı · Ereş · Kabala taranmamış" | **DOĞRU VE DOĞRUSU BU:** dördü de `d:` ile **1735-06-19'a kadar Osmanlı** — 1732'de İRAN'A VERİLMEDİLER, o yüzden taranmamaları gerekir |
| "Gümrü · Çaldıran · Başkale taranmış" | **ÜÇÜ DE TARALI DEĞİL** (test: temiz) |

**Bugün taralı olan yalnız dört yer:** Tebriz · Hemedan · Kirmanşah · Nahçıvan
— ilk üçü 1732'de İran'a iade edilen yerlerin ta kendisi. ✓

🟡 **TEK AÇIK SORU (§12-③): NAHÇIVAN.** 1732 antlaşmasında sınır Aras oldu ve
Aras'ın **kuzeyi** (Gence · Şirvan · Tiflis · Revan · Nahçıvan) Osmanlı'da
kaldı. Nahçıvan'ın taralı çıkması bununla **çelişiyor** olabilir.
⚠️ Bunu **TDV'den doğrulamadım** — `ahmed-pasa-antlasmasi` slug'ı **302 (ölü)**.
Ölçtüğüm şey geometridir, hükmü kaynak vermeden vermiyorum.

---

## 11. H-0077 / H-0080 — "Ruslar nereden geldiler?" → **ÇÖZÜLDÜ, TDV İLE**

Emre iki ayrı maddede aynı soruyu sordu: *Ruslar hangi güzergâhtan geldi ve
niçin o güzergâh haritada Rus toprağı görünmüyor?*

### H-0080 · HOTİN (1769) — cevap: **LEHİSTAN (PODOLYA) ÜZERİNDEN**
**TDV `hotin` (200, gövdesi okundu):** *"1769'da Osmanlı-Rus savaşları
sırasında Prens Aleksandr Mihayloviç Golitsın tarafından zaptedildi. Ruslar
önce geri püskürtülmüşse de Sadrazam Moldovancı Ali Paşa'nın **Kamaniçe ile
Hotin arasında** meydana gelen savaşta yenilmesi üzerine Osmanlı kuvvetleri
geri çekilince…"*
⇒ Belirleyici savaş **Kamaniçe (Kamianets-Podilskyi) ile Hotin arasında**
oldu. Kamaniçe **1699 Karlofça'dan beri Lehistan**'da (veri: `s: lehistan
1699-01-26 → 1793-01-23`) ⇒ **Rus ordusu KUZEYDEN, Leh Podolyası üzerinden
geldi.** Boğdan'dan da Kırım bozkırından da değil.
**Haritada Rus görünmemesinin sebebi:** orası **Rus toprağı değildi** —
Lehistan'dı. Ordu geçti, toprak el değiştirmedi. **Harita DOĞRU.**
Veri de tam: `Hotin d: 1713-06-24 → 1769-09-19` · `s: rusya 1769-09-19 →
1774-07-21` · maddesi de var (`olaylar_ek5.js` 1769-09-19, *"Hotin Kalesi'nin
Ruslara kaybı"*).

### H-0077 · ÖZİ (1737 ve 1788) — cevap: **DİNYEPER BOYUNCA, SOL YAKA UKRAYNA'DAN**
**TDV `ozu` (200, gövdesi okundu):** *"Çar Petro, **Özü nehrini takiben**
Karadeniz'e çıkmak istedi ve Özü nehrinin aşağısına iki önemli kale
yaptırdı. Ruslar'ın Özü yönündeki en önemli faaliyetleri 1736-1739 …
savaşında kendini gösterdi. Bu savaşta Özü Ruslar'ın eline geçti
(**11 Temmuz 1737**)."* · *"1788 Aralığında Rus Mareşali Suvarov, Özü
Kalesi'ne saldırdı…"*
**Çehrin ihtimali ÖLÇÜLDÜ ve DÜŞTÜ:** Çehrin (Çigirin) veride
`s: lehistan` (1699-1793) — 1737'de de 1788'de de **Leh toprağı**, Rus değil.
**Rus koridoru haritada ZATEN VAR ve ölçüldü:** Kiev · Poltava · Çernigov ·
Harkov · Baturin · Putivl → **1737'de de 1788'de de `rusya`**. Yani Emre'nin
*"geldikleri güzergâh Rus toprağı görünmüyor"* gözlemi, **kuzeydeki Rus
şeridine bakılmadığı için** doğmuş olabilir; aradaki bozkır (Yedisan ·
Yediçkul · Camboyluk) **`kirim`** — ve **öyle olması doğru**: ordu bozkırdan
geçti, orayı ele geçirmedi. **Harita DOĞRU.**

🔴 **YAN BULGU (§12-④): ÖZİ'NİN GÜNÜ İKİ GÜN KAYMIŞ.**
TDV **11 Temmuz 1737** diyor; veride `d.t = 1737-07-13` ve kronoloji maddesi
de `1737-07-13`. **İkisi birlikte** düzeltilmeli (yoksa Değişmez 2 açılır).
Düzeltmedim: `yerlesimler.js` ve `olaylar_ek5.js` **benim dosyam değil**.

⚠️ **H-0055 ve H-0080 SINIR maddeleridir.** Kesim kuralı `i*38//3` ile bende;
başka bir kural (13/13/12) kullanılırsa H-0055 → OPUS 101, H-0080 → OPUS 103.
İkisini de **ölçtüm ve yazdım** — teyit gelmezse ikinci kez yapılmasınlar
diye buraya koyuyorum, sahiplik kimdeyse bu ölçümü DEVRALSIN.

---

## 12. YENİ AÇILAN KALEMLER — Emre'nin listesinde yoktu, ölçerken çıktı

```
① Tiflis fetih günü      veri 1578-08-09 · TDV `gurcistan` "24 Ağustos 1578"
                         15 gün fark · kırılma günü · KAYNAKLI
② Nûbe serhaddi 1555     Say/Sükkût gerçekten Osmanlı'ya geçtiyse Delgo ve
                         Abrî'nin `funj` kaydı eksik — ARAŞTIRMA kalemi
③ Nahçıvan taralı mı     1732'de Aras'ın kuzeyi Osmanlı'da kaldıysa tarama
                         yanlış olabilir — TDV slug'ı ölü, kaynak aranmalı
④ Özi düşüş günü         veri 1737-07-13 · TDV "11 Temmuz 1737" · 2 gün
                         ⚠️ yerleşim + kronoloji BİRLİKTE düzeltilmeli
⑤ Herceg Novi işgali     yuvarlak tarih (1538-01-01/1539-01-01) + kronoloji
                         maddesi HİÇ YOK (Değişmez 2i açığı)
⑥ Hac yolu Vehhâbî       1805-1812 kesintisi Tebük'te YOK; Şam hac yolu
                         menzillerinin tamamına yazılmalı mı? (H-0055 kararım
                         "komşuyla tutarlı kal" oldu, ama soru AÇIK)
```

---

## 13. NE ÖLÇMEDİM — açıkça

- **Canlı harita sürülemedi** (WebGL/pano kısıtı, `CLAUDE.md`de belgeli).
  H-0070 · H-0072 hükümlerim bu yüzden **veri + tarih** ölçümüne dayanıyor,
  ekran pikseline değil.
- **H-0063'ün gerçek günleri** için `barbaros-hayreddin-pasa` maddesini
  **okumadım** — slug canlı, okunmayı bekliyor.
- **H-0076'nın Nahçıvan sorusu** için kaynak **bulunamadı** (slug 302).
- `denetle.py` **koşturulmadı**: koşu sürüyor ve üretilmiş dosyalar
  değişiyor; şu an alınacak sayı yarın yanlış olurdu.
