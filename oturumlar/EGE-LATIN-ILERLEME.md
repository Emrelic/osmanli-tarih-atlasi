# EGE LATİN KRONOLOJİ — ilerleme

**Oturum:** EGE LATİN KRONOLOJİ (açılış adı: OPUS HAZIR KITA 51) · Opus
**Görev:** tahta **M-1044** (KOORDINATOR) · ortak şartname `oturumlar/KRONOLOJI-SARTNAME.md`
**Tarih:** 22 Ağustos 2026

---

## TESLİM — sekiz kalem, sayıyla

### ① Madde sayısı ve yoğunluk

```
dosya                             madde   yıl   madde/yıl
Rodos/Malta Şövalyeleri              96   488       0,20
Nakşa Dukalığı                       25   372       0,07
Atina Dukalığı                       25   253       0,10
Katalan Dukalığı                      9    77       0,12
                                    ───
                          TOPLAM    155
```
Dizinde önce **18** madde vardı (7+3+4+4) ⇒ **18 → 155**.

⚠️ Yoğunluk Osmanlı ölçütünün (1,9/yıl) çok altında ve **bu bilerek böyle.**
Şartname §1: *"kaynağın verdiği kadar madde yazılır; sessiz on yıl sessiz
kalır."* Nakşa Dukalığı 372 yıl boyunca **hiç büyük savaş görmedi** ve el
değiştirmeleri neredeyse hep müzakereyle oldu; kaynak (Slot, Lock) o yılları
tek tek anlatmıyor. **Sayıya ulaşmak için dolgu yazmadım.**

### ② Konu dağılımı — 🔴 ve burada kendi kusurumu ölçtüm

```
kova                     madde   pay   şartname hedefi
askerî · siyasî             88   %57   ~%40
kültür · sanat · mimarî     21   %14   ~%15
sosyal · dinî · felsefî     18   %12   ~%10
idarî · hukukî · malî       11    %7   ~%15
bilim · teknoloji           10    %6   ~%15
iktisadî                     7    %5    ~%5
```

🔴 **İlk 119 maddeyi yazdıktan sonra ölçtüm: %72 askerî-siyasî çıktı.**
Yani dosyayı **Osmanlı cephesinden** yazmıştım — `kronoloji_venedik.js`
başlığında kayıtlı olan ölçülmüş hatanın birebir tekrarı. **36 madde EK
PARTİ olarak yazıldı** (kurumsal · iktisadî · bilimsel · kültürel) ve oran
**%72 → %57**e indi.

⚠️ **Hâlâ hedefin üstünde ve mazeret uydurmuyorum:** bir askerî tarikatın
ve iki küçük dukalığın külliyatında askerî-siyasî kalemin ağır basması
kısmen konunun kendisidir, ama %57 yine de yüksek. Bir sonraki turda
kapatılacak borç budur.

### ③ `onem` ve `dunya` dağılımı
```
onem    5:46   4:59   3:45   2:5   1:0
dunya   5:3    4:6    3:27   2:61  1:58
```

### ④ Kapsam — `ic: 76` · `dis: 79`

### ⑤ `yer_id`
```
DOLU  145 / 155  (%94)   ·  kapsam_genis 0  ·  BOŞ 10
kullanılan farklı yerleşim: 18
en çok: Malta(41) Rodos(36) Atina(23) Nakşa(22) İstanbul(5)
        Livadya(3) İstefe-Tebai(3) İzmir(2)
```
**BOŞ olan 10 maddenin 10'u da şartname §3.1'in ③. istisnasıdır** — olay
devletin toprağı dışında ve tek bir yerleşime bağlanamıyor (Akkâ'nın
düşüşü · Tapınakçı mallarının devri · İskenderiye seferi · Niğbolu ·
Cem'in papalığa devri · Memlük'ün sonu · Cerbe · Fransa'daki malların
millîleştirilmesi · tarikat gelir ağı · Pelagonia). **Yerleşim kaydı
eksikliğinden değil.**

🟢 **Ege'de yerleşim eksiği ÇIKMADI** — kullandığım 18 adın 18'i de
`girdi.yukle()` havuzunda mevcut. Tek uyuşmazlık `Trablusgarp` idi,
havuzdaki doğru ad **`Trablus`** (32,897 K / 13,191 D — Libya; `Trablusşam`
ayrı kayıt) ve düzeltildi.

### ⑥ Kaynak
```
kaynak DOLU            155 / 155   (%100)
TDV dayanaklı           47
akademik el kitabı     148
ikisi birden            40
"bulunamadı"             0
🔴 VİKİPEDİ               0        (tek dayanak olarak da, hiç de)
gün kesin               77  ·  YYYY-01-01 (gün bilinmiyor) 78
kaynağında "yaklaşıktır" diye İŞARETLİ  56
```
Kullanılan el kitapları: Luttrell (Hospitaller Rhodes) · Vatin (1480-1522) ·
Setton (Catalan Domination / Papacy and the Levant) · Lock (Franks in the
Aegean) · Slot (Archipelagus Turbatus) · Mallia-Milanes (Hospitaller Malta) ·
Riley-Smith · Nicholson · Q. Hughes · P. Cassar · Sciberras · Wettinger ·
Ciappara · Zammit · Longnon · Jacoby · Zachariadou · Muntaner (birincil).

### ⑦ NEYİ BULAMADIM / NEYİ ÖLÇMEDİM

- **`sovalye` slug'ı TDV'de ÖLÜ** (302). `rodos-sovalyeleri` · `saint-jean`
  da ölü. Tarikatın kendi iç tarihi için TDV'de müstakil madde **YOK** —
  bu bir sonuçtur, akademik el kitaplarına dayanıldı ve `kaynak:` alanında
  açıkça yazıldı.
- **Büyük üstat listesinin tamamını yazmadım.** 1310-1798 arası ~45 büyük
  üstat var; yalnız tarihte iz bırakan 12'si maddelendi. Gerisi şartname
  §1'in *"bir maddeyi silsen kronolojiden bir şey eksilir mi?"* sınavını
  geçmiyordu.
- **Ölçmediğim:** maddelerin `etiket:` alanlarının öteki dosyalardaki
  etiket sözlüğüyle tutarlılığını ölçmedim — böyle bir denetim dalı yok,
  ben de kurmadım.
- **Tarayıcıda ÇALIŞTIRMADIM.** Eşleme mantığını `app.js:5499` üzerinden
  okuyup node'da tekrarladım; gerçek sayfada devlet seçicide nasıl
  göründüğünü GÖRMEDİM.

### ⑧ Bağlanma — 🔴 KOORDİNATÖR YAPAR, BEN BAĞLAMADIM

```
BAĞLANMAYI BEKLİYOR:
  data/kronoloji_rodos_sovalyeleri.js → window.KRONOLOJI_RODOS_SOVALYELERI
  data/kronoloji_naksa_dukaligi.js    → window.KRONOLOJI_NAKSA_DUKALIGI
  data/kronoloji_atina_dukaligi.js    → window.KRONOLOJI_ATINA_DUKALIGI
  data/kronoloji_katalan.js           → window.KRONOLOJI_KATALAN
```
commit: bu dosya (`oturumlar/EGE-LATIN-ILERLEME.md`) — **`data/` dosyalarını
commit ETMEDİM**, `§7` gereği koordinatörün.

---

## 🔴 DÖRT DOSYA — niçin şartnamedeki TEK dosya değil

M-1044 tek ad alanı verdi: `data/kronoloji_ege_latin.js` →
`window.KRONOLOJI_EGE_LATIN`. **Yazdım ve ölçtüm: iki alet aynı anda
sağlanamıyor.**

```
denetle_kronoloji.py:120   beklenen = "KRONOLOJI_" + <dosya adı>.upper()
                           ⇒ dosya adı ile ad alanı BİREBİR olmalı
js/app.js:5499             id = anahtar.slice(10).toLowerCase()
                           ⇒ ad alanı KÜNYE ID'siyle eşleşmeli
```

Tek dosyada dört gövde varsa bu ikisi **aynı anda sağlanamaz**:
`KRONOLOJI_EGE_LATIN` kapıyı geçer ama `ege_latin` diye künye olmadığı için
**app.js'te "eşlenemedi" olur** — yani koordinatörün altı saat önce kendi
tesbit ettiği **531 maddelik görünmezlik** kusurunun (M-0992) tekrarı.

**Dörde bölününce ikisi de sağlanır.** Ölçüldü:
```
kronoloji_katalan.js            → id "katalan"            ✓ KÜNYE VAR, hemen bağlanır
kronoloji_rodos_sovalyeleri.js  → id "rodos_sovalyeleri"  künye "rodos-sovalyeleri"
kronoloji_naksa_dukaligi.js     → id "naksa_dukaligi"     künye "naksa-dukaligi"
kronoloji_atina_dukaligi.js     → id "atina_dukaligi"     künye "atina-dukaligi"
```
Üçünde ALT ÇİZGİ ile TİRE uyuşmuyor. **Çare tek satır:**
`app.js:5499`a `.replace(/_/g,"-")`. Ölçtüm — **güvenli**:
```
id'sinde ALT ÇİZGİ olan künye :   0 / 431   ⇒ hiçbir mevcut eşleşme bozulmaz
id'sinde TİRE olan künye      : 191 / 431   ⇒ %44'ü bu satırla erişilebilir olur
```
⚠️ `js/app.js` benim dosyam DEĞİL — **dokunmadım**, ölçüp önerdim.
Alternatifi `KRONOLOJI_ID_OZEL` sözlüğüne üç satır; o da işler ama her
tireli künyede tekrar gerekir.

📌 Bu, `CLAUDE.md §11`in *"künye penceresi ≠ veri penceresi"* dersinin canlı
hâli: desen bugüne kadar tuttu çünkü bağlanan sekiz dosyanın sekizi de
**tiresiz** id'ydi. Benim üç künyemin üçü de tireli — **bu desenin ilk
çarptığı oturumum.**

---

## 🔴 GÖREVİMİN DIŞINDA BULUNAN ÜÇ ŞEY — düzeltmedim, ÖLÇTÜM

### ① KABUL KAPISI ÇÖKÜYOR ve 27 dosya HİÇ DENETLENMİYOR

```
py arac/denetle_kronoloji.py
  → kronoloji_eslesme_yama.js'te AttributeError: 'str' object has no attribute 'get'
```
Sebep: o dosyanın küresel değişkeni bilerek bir **NESNE** (kendi başlığında
gerekçesi yazılı ve gerekçe DOĞRU — dizi olsaydı app.js'te sahte bir
"eşlenemedi" üretirdi). Ama `denetle_kronoloji.py:129` gelen kaydı **dizi**
sanıp öğelerinde `.get()` çağırıyor.

**Kör alanın ölçüsü:** alfabetik olarak o dosyadan sonraki **27 kronoloji
dosyası hiç denetlenmiyor** — `fransa · gurcistan · habsburg · hindistan ·
hollanda · ingiltere · iran · ispanya · isvec · italya · japonya ·
karakoyunlu · kirim · kuzeyafrika · lehistan · macaristan · memluk · misir ·
ozbek · portekiz · rusya · safevi · sirbistan · timurlu · venedik` ve
**benim dört dosyamın üçü** (`katalan · naksa · rodos`).

🔴 **Ve bu, kapının "temiz" demesiyle karışıyor:** çıkış kodu hata veriyor
ama listenin başındaki dosyalar `✓ temiz` diye basılmış oluyor. *"Denetim
var ≠ o soruyu soruyor"* değil bu sefer — ***"denetim soruyor ama o dosyaya
hiç VARMIYOR."***

**Çare tek satır** (`arac/` benim dosyam değil, uygulamadım):
`_oku`da `if not isinstance(d["kayit"], list): continue` — ya da `_oku`nun
node betiğinde `Array.isArray` süzgeci.

🟢 **Bu yüzden kapının dokuz dalını kendi dosyalarıma BİREBİR uyguladım**
(`scratchpad/kapi_yerel.py`) ve dördü de temiz çıktı. Çapraz doğrulama:
gerçek kapı, çökmeden önce sırası gelen `kronoloji_atina_dukaligi.js` için
**`✓ temiz`** dedi — yani yerel kopyam gerçek kapıyla uyuşuyor.

### ② `dunya` AYRIŞMASI — iki çift, benim değil

30 dosyayı tarayıp paylaşılan 72 madde buldum. İkisi ayrışık:
```
1291-05-18  Akkâ         venedik:3   memluk:5
1798-07-01  Mısır seferi fransa:4    misir:5
```
Denetimin 8. dalı bunları ötecek. **Benim maddelerimde ayrışma 0.**

### ③ `data/devletler.js`te BİR TARİH — düzeltmedim

`rodos-sovalyeleri` künyesi Rodos'un teslimini **`1522-12-25`** yazıyor.
TDV `rodos` md.: *"1 Safer 929'da (20 Aralık 1522)"*; teslim şartlarının
kabulü 21 Aralık, şövalyelerin adadan ayrılışı **1 Ocak 1523** (TDV aynı
madde). **25 Aralık hiçbir kaynakta yok.** Maddemi `1522-12-21` yazdım.
Künyeyi düzeltmek `data/devletler.js` sahibinin işi.

---

## KAPSAM TARAMASI — kendi ayrıştırıcımla (regex değil, node ile)

M-1044 üç künye verdi; `devletler.js`in 431 künyesini taradım.

**EK BULDUĞUM — ve yazdım:**
`katalan` (Katalan Dukalığı, Atina-Neopatras Kumpanyası, 1311-1388).
Bu, **Atina Dukalığı'nın 1311-1388 arası devrinin ta kendisi**; ayrı bir
oturuma verilseydi Atina'nın 77 yılı iki dosyaya bölünürdü. Künyenin kendi
1311 kaydı zaten `[[katalan]]` diye ona atıf yapıyor. İki dosyanın 1311 ve
1388 maddeleri **bilerek örtüşüyor** ve `dunya` değerleri birebir aynı.

**Bulduğum ama BENDE OLMASINI İSTEMEDİKLERİM (kayda geçiyorum):**
```
mora-despotlugu   BİZANS'tır, Latin değil
kibris-krallik    Latin ama Ege değil (bolge:anadolu, Lüzinyan)
girit-devleti     1898, modern
venedik           DOKUNMADIM — 86 maddelik derin dosyası var
```

**🔴 DİZİNDE HİÇ KÜNYESİ OLMAYAN Ege Latin yapıları — `VERI DEVLET`e havale:**
Ahaya Prensliği · Kefalonya Kontluğu (Tocco) · Sakız Mahonası (Ceneviz) ·
Midilli Gattilusio Beyliği · Eğriboz/Negroponte · Bodonitsa Markiliği ·
Salona Kontluğu. Yedisinin de yerleşim noktası var (Kefalonya · Sakız ·
Midilli · Eğriboz · Balyabadra · Livadya), **künyesi yok.**

---

## TAHTA MESAJLARIM
`M-1028` açılış · `M-1030` §1.5 bayat ölçümü · `M-1060` yapısal engel +
kapsam · `M-1072` ara rapor · teslim raporu.
