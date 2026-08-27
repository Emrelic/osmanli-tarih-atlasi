# BULGU — PAKET `parti-emrelic-0035`

**Oturum:** PAKET 0035 (eski: TARALI ALAN KÖK) · **Tarih:** 27 Ağustos 2026
**Şartname:** `oturumlar/PAKET-TASNIF.md` · **Koordinatör:** ORHANGAZİ
**Yetki:** yalnız bu dosya. `CEVAP.json`a **dokunulmadı**, hükümler öneri.

---

## 0. Sayılar

```
PARTI.md            102 madde · 80 görselli · klasörde 156 png
koordinatörün KAPALI dediği   8   (H-0006·0007·0008·0009·0010·0017·0018·0089)
KAPSAMIM                     94
açtığım görsel                0      ← §④ sırası: metin + veri yetti
```

🔴 **İlk soru *"bu kusur var mı"* değil, *"bu şikâyet hâlâ geçerli mi"* idi.**
Beş maddeyi **ölçerek** kapattım; ikisinde **gerçek kusur** buldum ve
adlarıyla saydım.

---

## 1. 🟢 ÖLÇÜLEREK KAPANAN 5 MADDE — taralı alan kökü

Bu beşi kendi düzelttiğim sisteme aitti. **Tahmin etmedim, yeni
`devirler.js`e karşı sınadım.**

### H-0042 · `cozuldu`
> *"bu taralı alanların Yaş anlaşması ile ne alakası var … **bu alanlar
> Karlofça ile alakalı** saçma sapan bir hata bu"*

**Emre kusuru doğru teşhis etmiş.** Bozuk `coz()` alakasız halkaları
birleştirdiği için Yaş'ın taraması Karlofça bölgesini gösteriyordu.
Ölçüm: Yaş/Rusya artık **yalnız Hacıbey (Odessa) ve İsmail** — 24.467 km²,
Karlofça bölgesinden **hiçbir şey yok**. Dayanak: `e53c86a`.

### H-0045 ve H-0099 · `cozuldu`
> *"Bükreş anlaşması ile bu taralı alanların ne alakası var **Azak'ın ne
> alakası var Çehrin'in ne alakası var**"*

Emre **iki yeri adıyla** saymış. Ölçüm: Bükreş/Rusya artık Akkirman · Kili ·
Sohum · Hotin · Bender · İsmail · Soroka · Orhei · Yergöğü — **Azak yok,
Çehrin yok.** İkisi de Karlofça bölgesindendi ve ring karışmasıyla
sızıyorlardı.

### H-0082 · `cozuldu`
> *"küçük kaynarca … bu anlaşmalarda kaybedilen toprakların taralı
> gösterilmesi yöntemi hiç çalışmıyor … en baştan çalışman lazım"*

**En sert ifade edilen madde, ve haklıydı** — yöntem gerçekten çalışmıyordu
(10 alıcıdan 10'u ya düşüyor ya çöp gösteriyordu). Kök bulundu ve
kapatıldı; Karlofça 1 alıcı → 4 alıcı.

### H-0085 · `zaten-dogru` (teyit)
> *"Kırım'a özerklik tanındıktan sonra buralar Kırım'a bağlı değil mi,
> Osmanlı idaresine mi bağlı, neden taralı görünüyor"*

Ölçüm: Küçük Kaynarca'nın taralı alanı **Kerç · Azak · Taman · Rostov** —
dördü de Rusya'ya **doğrudan** bırakıldı. **Kırım yarımadası taralı alanın
İÇİNDE DEĞİL** (Bahçesaray · Akmescit · Kefe · Gözleve yok). Yani gösterim
doğru: bağımsızlaşan Kırım taranmıyor, Rusya'ya devredilen dört yer
taranıyor. **Emre'nin sorusunun cevabı: hayır, buralar Kırım'a bağlı
kalmadı.**

---

## 2. 🔴 ÖLÇÜLEREK BULUNAN 2 GERÇEK KUSUR — ve ikisi de EKSİK KAYIT

Bunlar **devir** sistemine değil, **işgal örtüsüne** (`isg:`) ait.

> 📌 **Ayrım önemli: bu projede İKİ AYRI taralı sistem var** ve Emre'nin
> şikâyetleri ikisine dağılmış:
> ```
> ① DEVİR   antlaşma kazanç/kaybı   data/devirler.js     (kökü kapandı)
> ② İŞGAL   geçici işgal örtüsü     `isg:` alanı, 90 kayıt (AYRI sistem)
> ```
> İkisini tek şikâyet kümesi sanmak, birini düzeltip ötekini kapandı
> zannetmeye yol açar.

### H-0097 (+ H-0100) · `cozulmeli` — **9 Tuna kalesinde `isg:` kaydı yok**
> *"Rusçuk Rus işgaline uğradı ise burayı taralı göstermek gerekmez miydi
> **tıpkı İbrail kalesi gibi**"*

**Şikâyet birebir doğru.** 1806-1812 Rus savaşında Tuna hattı ölçüldü:

| yerleşim | `isg:` kaydı |
|---|---|
| **İbrail** | ✓ `rusya 1809-12-02 → 1812-05-28` |
| Rusçuk · Silistre · Bender · İsmail · Kili · Vidin · Niğbolu · Yergöğü · Turnu Severin | 🔴 **YOK** |

⇒ Tek bir kalenin kaydı var, dokuzunun yok. Emre'nin *"hem boyanma anı
olması gereken maddeden bir sonra, hem İbrail taralı gösterildi burası
direkt yeşile boyandı"* gözlemi de bunun sonucu: kayıt olmayınca örtü
çizilmiyor, yalnız kalıcı sahiplik değişimi görünüyor.

**Öneri:** 1806-1812 için `isg:rusya` kayıtları yazılsın. Tarihler
araştırma ister (Bender 1806 · İsmail 1809 · Rusçuk 1810 · Silistre 1810
kabaca) — **ben TDV'den doğrulamadım.**

### H-0092 · `cozulmeli` — Fransız Mısır işgali **7 noktada, 63'ünde yok**
> *"bu taralı bölgeler neye dayanıyor. teyid et. doğru mu … ve
> **taranmamış alanlar doğru mu** araştıralım"*

Emre'nin sorusu **iki ayrı soru** ve cevapları farklı:

```
TARANAN DOĞRU MU?     ✅ EVET — 7 nokta: Kahire · İskenderiye · Reşîd ·
                      Dimyat · Asyut · Süveyş · Sina güneyi
TARANMAYAN DOĞRU MU?  🔴 HAYIR — kutuda 70 yerleşimden 63'ü taranmamış
```

Taranmayanlar arasında Napolyon'un **fiilen tuttuğu** yerler var:
Feyyûm · Minye · Benî Süveyf · Mansûre · Tanta · Demenhûr · Bilbîs ·
Ebûkîr. Ayrıca **Suriye seferi güzergâhı**: El-Arîş · Gazze · Yafa ·
Katye · Sâlihiyye (Şubat-Mayıs 1799'da alındılar).

⚠️ **Akkâ AYRI:** kuşatıldı ama **alınamadı** — `isg:` yazılmamalı. Emre'nin
kendi `H-0093`ü zaten *"Akka harekâtı … harekât okları"* diyor; doğru
muamele bu.

---

## 3. Kalan 87 madde — küme küme tasnif

⚠️ **Bunlar KÜME düzeyinde hüküm; her biri TEK TEK ölçülmedi.** Ölçülenler
§1 ve §2'dekilerdir. Bunu açıkça yazıyorum ki hüküm işlenirken ölçülmüş
ile tasnif edilmiş karışmasın.

### K1 · BOŞ ARAZİ BOYANMASI — 18 madde · tek kök: `§2 emilme`
`H-0019 · H-0021 · H-0022 · H-0026 · H-0029 · H-0031 · H-0036 · H-0047 ·
H-0049 · H-0052 · H-0054 · H-0064 · H-0073 · H-0075 · H-0100 · H-0102`
(+ `H-0050 · H-0061` fetret kırmızısı)

Hepsi aynı cümlenin çeşitlemesi: *"aradaki topraklar alınmadan mı kaldı"* ·
*"bu anlamsız boş toprakların Osmanlı kırmızısına nasıl engel olunur"*.

> **Önerilen hüküm: `sirada` — ve NİÇİN: bu bir veri kusuru değil, motorun
> tasarım davranışı.** `CLAUDE.md §2`: *"noktası olmayan bölge en yakın
> peteğe emilir."* Çare tek tek düzeltme değil, o boşluklara **nokta
> koymak** ya da `kasitli_bosluk` beyanı yazmak.
> 🔴 **Ve bu küme tek bir işe indirgenebilir**, 18 ayrı işe değil —
> paketin en büyük kazancı burada.

### K2 · İÇERİK TALEBİ (ek okuma / magazin) — 13 madde · kusur DEĞİL
`H-0003 · H-0012 · H-0016 · H-0023 · H-0025 · H-0030 · H-0032 · H-0033 ·
H-0040 · H-0041 · H-0043 · H-0046 · H-0091`

> **Önerilen hüküm: `sirada`** — *niçin:* bunlar hata bildirimi değil
> **içerik talebi**; kronoloji derinleştirme partisinin işi, harita
> denetiminin değil. Ayrı kovada tutulmazsa harita kusurlarını seyreltir.
> ⚠️ `H-0043` ve `H-0091` (Fransız Devrimi kronolojide yok) **kapsam**
> sorusu: `CLAUDE.md §1.6` 8. boyutu kasten kapalı tutuyor — bu
> `senin-kararin` olabilir.

### K3 · HAREKÂT OKLARI — 4 madde · 🔴 **"zaten var" ŞÜPHESİ**
`H-0093 · H-0094 · H-0095 · H-0098`

> 🔴 **ÖLÇÜLMELİ, çünkü `CLAUDE.md §11` bunun ölçülmüş bir vakasını
> yazıyor:** *"HAREKET tipolojisi — 9 tür · 9 glif · 9 katman · dinamik
> lejant, commit `591a5c6`, 30 Temmuz 17:20"* ve o gün bir şikâyet
> commit'ten **22 dakika önce** yazılmıştı.
> **Önerilen hüküm: `olculecek`** — *ne ölçülecek:* mevcut hareket
> tipolojisi bu dört talebi zaten karşılıyor mu? `git log` + `savaslar.js`
> `tur:` alanları. **Ben ölçmedim.**

### K4 · KRONOLOJİ ↔ HARİTA SENKRONU — 9 madde
`H-0002 · H-0004 · H-0005 · H-0013 · H-0014 · H-0028 · H-0071 · H-0078 ·
H-0090`

Deseni: *"haritada elden çıkmış görünüyor ama kronolojide madde yok"*.

> **Önerilen hüküm: `olculecek`** — *ne ölçülecek:* her biri için o
> kırılma gününün ±30 gün maddesi var mı (`Değişmez 2`). Bu **makineyle
> sorulabilir** ve tek koşuda dokuzu birden cevaplanır.

### K5 · RENK / TON — 6 madde
`H-0039` (Bahreyn fatihinin rengi) · `H-0058` (Kaheti-Terki vassal rengi) ·
`H-0063` (işgal gibi görünüyor) · `H-0072` · `H-0101` (sınırların
örtüşmemesi) · `H-0088` (farklı kırmızı tonlar)

> **Önerilen hüküm: `olculecek`** — RENK oturumunun kalemi.
> ⚠️ `H-0072`/`H-0101` ("iki haritanın sınırları örtüşmüyor") bir **çizim**
> sorunu olabilir, renk değil — ayrıştırılmalı.

### K6 · YOL AĞLARI — 3 madde
`H-0054 · H-0055 · H-0087`

> **Önerilen hüküm: `sirada`** — *niçin:* `BES-ALTYAPI.md`'nin beşinci
> unsuru (**koridor ağı**) ve zaten planlı; yeni iş değil.

### K7 · ETİKET SİSTEMİ — 2 madde
`H-0034` (afet etiketi) · `H-0066` (kronoloji konu etiketleri)

> **Önerilen hüküm: `sirada`** — `ETIKETLEME.md`nin kalemi.

### K8 · TEKİL / KARIŞIK — kalan 32 madde
`H-0001 · H-0011 · H-0015 · H-0020 · H-0027 · H-0035 · H-0037 · H-0038 ·
H-0044 · H-0048 · H-0051 · H-0053 · H-0056 · H-0057 · H-0059 · H-0060 ·
H-0062 · H-0065 · H-0067 · H-0068 · H-0069 · H-0070 · H-0074 · H-0076 ·
H-0077 · H-0079 · H-0080 · H-0081 · H-0083 · H-0084 · H-0086 · H-0096`

> **Önerilen hüküm: `olculecek`** — *ne ölçülecek:* her biri ayrı bir
> tarihsel/veri sorusu (Basra-Fav · Hail-Vehhabi · Satu Mare-Tökeli ·
> Munkács · Çeşme baskını · Bahreyn …). **Küme hükmü verilemez**, tek tek
> bakılmalı. Bu turda **yetişmedi** ve bunu kaçış olarak değil **kapasite
> sınırı** olarak yazıyorum.

---

## 4. Ölçmediklerim — açıkça

- **87 maddenin 87'si tek tek ölçülmedi.** §1 ve §2'deki **7 madde**
  ölçüldü; kalanlar küme tasnifi.
- **Hiçbir görsel açılmadı** (0/156). Metin + veri yettiği yerde açmadım;
  açılması gerekenler K8'de.
- **Tuna işgal tarihleri TDV'den doğrulanmadı** — Bender 1806 · İsmail
  1809 · Rusçuk 1810 kabaca; kayıt yazılmadan önce doğrulanmalı.
- **Mısır'da hangi noktaların `isg:` hak ettiği** liste hâlinde
  çıkarılmadı; 63 taranmamışın tamamı Fransız denetiminde değildi.
- **K3'ün "zaten var" şüphesi ölçülmedi** — `git log` bakılmadı.
- **Canlı haritaya bakmadım.** Koordinatör atlasın açık olduğunu söyledi;
  ölçümlerim veri katmanında kaldı, ekranda değil.
- **`H-0086` ("bütün bu haritadaki bölgeleri teyid edelim")** kapsamı
  belirsiz bir talep; ne kadar iş olduğunu **ölçmedim**.
