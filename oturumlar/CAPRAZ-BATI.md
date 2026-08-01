# ÇAPRAZ BATI — bulgular

> Kapsam: **Avusturya · Macaristan · Venedik · Fransa** (`CAPRAZ-GOREV.md §1`)
> Biçim: `CAPRAZ-GOREV.md §8` — ① bizde ne var ② kaynakta ne var ③ hüküm.
> Ölçümler ve türetimleri: `CAPRAZ-BATI-ILERLEME.md`.
> **Bu oturum veriye yazmaz.** Aşağıdakiler önerilerdir; uygulaması YAMACI/VERİ oturumlarında.

---

## B-1 🔴 AYAMAVRA — tek pencere, altı egemenlik dönemini yutuyor

**① BİZDE NE VAR** — `data/yerlesimler.js`, Ayamavra (Lefkada):
```
d: 1479-08-01 -> 1684-08-06                 (Osmanlı)
s: 1281-01-01 -> 1479-08-01   d=napoli
s: 1684-08-06 -> 1923-10-29   d=venedik     ← TEK PENCERE, 239 yıl
```

**② KAYNAKTA NE VAR** — TDV `ayamavra` (`<title>` = "AYAMAVRA - TDV İslâm
Ansiklopedisi", **canlı**; takvim: Gregoryen, Venedik 1582'de geçmişti):
```
1479          Gedik Ahmed Paşa fethi, Karlı-ili sancağı
1684 yazı     Venedik donanması adayı aldı
1715 Eylül    OSMANLI GERİ ALDI (Mora seferi)
1718          Pasarofça — Venedik'e iade
1797          Fransa aldı
1800          Rus-Osmanlı kuvvetleri
1807          Fransa yeniden
…1864         İngiliz idaresi (İyon Adaları), 1864'te Yunanistan'a devir
```

**③ HÜKÜM: ÇELİŞİYOR — ve bu bir araştırma boşluğu değil, ATLANMIŞ KAYIT.**

Belirleyici kanıt kaynakta değil, **kendi verimizde**: İyon ailesinin öbür dört
üyesi doğru zinciri **zaten taşıyor** ve dördü de birebir aynı tarihleri
kullanıyor.

```
Kefalonya   venedik → 1797-10-17 fransa → 1815-11-05 ingiltere → 1864-05-21 yunanistan  ✓
Zaklise     venedik → 1797-10-17 fransa → 1815-11-05 ingiltere → 1864-05-21 yunanistan  ✓
Korfu       venedik → 1797-10-17 fransa → 1815-11-05 ingiltere → 1864-05-21 yunanistan  ✓
Parga       venedik → 1797-10-17 fransa → 1815-11-05 ingiltere → 1819-05-10 OSMANLI     ✓
Ayamavra    venedik → 1923-10-29                                                        ✗
```

⇒ Zinciri yazan el **beş adadan dördünü yapmış, beşincisini atlamış.** Kimlikler
mevcut, renkler mevcut (`venedik` · `fransa` · `ingiltere` · `yunanistan` hepsi
`renkler.py`'de), tarihler dört emsalde yazılı. **Yeni renk gerekmiyor.**

### Önerilen düzeltme
```
s: 1684-08-06 -> 1715-09-01   d=venedik
d: 1715-09-01 -> 1718-07-21                  ← Osmanlı restorasyonu, BUGÜN YOK
s: 1718-07-21 -> 1797-10-17   d=venedik
s: 1797-10-17 -> 1815-11-05   d=fransa
s: 1815-11-05 -> 1864-05-21   d=ingiltere
s: 1864-05-21 -> 1923-10-29   d=yunanistan
```

⚠️ **İki kalem çapraz doğrulama BEKLİYOR — Venedik kaynağından sınanmalı:**
1. **1715 Eylül – 1718 Osmanlı dönemi.** TDV açıkça veriyor. Batı tarih
   yazımının bir kısmı Lefkada'yı 1684-1797 **kesintisiz Venedik** sayar.
   Tam olarak `CAPRAZ-GOREV.md §3`'ün "temas olgusu" satırı: **anlaşmazlık
   kusur değil, bulgudur** — Senato kararlarından sınanacak, şimdilik
   **kaydedildi**.
2. **Gün hassasiyeti.** TDV *"1715 Eylül"* ve *"1684 yazı"* diyor; ben yukarıda
   emsallerle hizalamak için `1715-09-01` yazdım. `§4⑤` gereği kaynağın
   hassasiyeti korunmalı — gün bulunamazsa `gun:` alanına *"1715 Eylülü"*
   yazılır, uydurulmaz.

📌 **Değişmez 2 etkisi:** üç yeni kırılma doğar (1715 · 1718 · 1797/1815/1864).
Her birine ±30 gün içinde kronoloji maddesi gerekir, yoksa AÇIK sayısı 0'dan
çıkar. Madde ihtiyacı **VERİ KRONOLOJİ**'ye düşer.

📌 Ayamavra bu projede ikinci kez suçlu: `CLAUDE.md §2` *"Kefalonya 1684'e kadar
Osmanlı kaldı (Ayamavra'dan)"* diyor. O **petek emilmesiydi**; bu **verinin
kendisi**. Aynı nokta, iki ayrı hata sınıfı.

---

## B-2 🔴 KRALİYET MACARİSTANI HARİTADA YOK — 6.277 yerleşim-yılı

**① BİZDE NE VAR** — iki kaynak birbirini yalanlıyor:
```
data/devletler.js   macaristan-habsburg  "Macaristan Krallığı (Habsburg Tacı)"
                    f=1526-08-29  t=1918-11-16  harita:"macaristan"

data/yerlesimler.js kullanım: 0 kayıt
                    Macar tacına ait 30 yerleşimin 33 penceresi s:"avusturya"
                    ölçüldü: 2.292.732 gün = 6.277 yerleşim-yılı
```
Macar havzası kesitleri (45-49,5°K / 16-23°D): 1700 `avusturya`(24) ·
1800 (25) · **1870 (25)** · 1910 (25) — `macaristan` **sıfır**.

**② KAYNAKTA NE VAR** — TDV `macaristan` (`<title>` = "MACARİSTAN - TDV İslâm
Ansiklopedisi", **canlı**):
> Mohaç'tan sonra soylular **iki kral** seçti — Habsburg I. Ferdinand
> (1526-1564) ve Erdel voyvodası I. János Szapolyai (1526-1540). Sonuç üç
> bölgeli yapı: **Kraliyet Macaristanı · Osmanlı Budin eyaleti · Erdel
> Prensliği**. 1540 Szapolyai'nin ölümü ve Budin beylerbeyiliği; 1568 Edirne;
> 1699 Karlofça.

**③ HÜKÜM: ÇELİŞİYOR — dizin ile harita arasında, 392 yıl.**

Dizin kendi `harita:` alanında *"beni `macaristan` diye boya"* diyor; veri
`avusturya` yazıyor; **hiçbir denetim bu iki dosyayı karşılaştırmıyor.**

En keskin vaka **Bratislava**: `s:avusturya 1526-08-29 → 1918-11-11`. Oysa
Pozsony **Kraliyet Macaristanı'nın başkentiydi.** Aynısı **Zagreb**
(Hırvatistan-Slavonya, Macar tacı). İkinci keskin vaka **1867-1918**:
Ausgleich'ten sonra Macaristan eş-egemen krallıktı; harita Budapeşte'yi
**51 yıl** "Avusturya" gösteriyor.

### 📚 Kaynaklandırma (2. tur) — ve kendi sayımı düzeltiyorum

**② KAYNAKTA NE VAR** — *Die Welt der Habsburger* (habsburger.net, Schönbrunn
kurumsal portalı) + Britannica:
```
1536         Pozsony/Pressburg Kraliyet Macaristanı'nın BAŞKENTİ ilan edildi
             (Budin'in düşmesi üzerine)
1542-1848    Macar Diyeti'nin toplanma yeri (aralıklarla)
1536-1830    TAÇ GİYME şehri (Aziz Martin Katedrali)
```
🔴 **DÜZELTME — koordinatöre yanlış sayı ilettim.** İlk turda *"1536-1783 taç
giyme şehri"* yazmıştım; doğrusu **taç giyme 1536-1830**'dur. `1783` ayrı bir
olayın tarihi (II. Joseph idareyi Budin'e taşıdı) ve ikisini birleştirmişim.
⇒ Pozsony 1783'te **idarî** başkentliği kaybetti ama **taç giyme şehri
1830'a kadar kaldı.** İki ayrı işlev, iki ayrı tarih.
📌 Bu tam `OGRENILENLER §74`'ün kendi vakası — ve **bu sefer ben düştüm.**

### ⚠️ AUSGLEICH'İN DÖRT TARİHİ VAR — §74 yine
```
1867-02-08   uzlaşma metni sonuçlandı
1867-03-30   Macar Diyeti onayladı        ← koordinatörün kullandığı
1867-05-29   Diyet 1867/XII. kanunu kabul etti
1867-06-08   Franz Joseph Macar kralı olarak TAÇ GİYDİ
```
**Hangisi haritanın tarihi?** Soru *"hangisi doğru"* değil, *"harita neyi
gösteriyor"*: taban renk **hükümranlığı** izliyorsa ölçüt **taç giyme
(1867-06-08)** olmalı — Macaristan'ın ayrı kral tarafından yönetilen ayrı
krallık hâline geldiği an odur. `1867-03-30` bir parlamento kararıdır,
hükümranlık devri değil.
🟡 **Ama bu kalem zaten ertelendi**, karar anında yeniden açılır. Şimdilik
**dört tarih de kaydedildi**, seçim yapılmadı.

⚠️ **Kaynak zayıflığı dürüstçe:** yukarıdaki dört tarih bir web taramasından
geldi ve sonuçlar arasında Vikipedi ve hayran wiki'leri vardı. Sağlam olanlar
**habsburger.net** ve **Britannica**; ötekiler aday üreticidir. `1442`de
uyguladığım ölçütü burada da uyguluyorum: **bu tarihler uygulanmadan önce
akademik bir Macar/Habsburg kaynağıyla teyit edilmeli.** Bugün yalnız
*"kaç ayrı tarih var"* sorusunu cevaplıyorlar — o soru için yeterli.

### 🎨 Renk — yeni hex GEREKMİYOR, ama karar gerekiyor
`macaristan` (#1e88e5) ile `macaristan-habsburg` **hiç aynı anda var olmadı**
(biri 1526'da bitiyor, öteki 1526'da başlıyor) ⇒ `YAPILACAKLAR` §palet'in
işaret ettiği **renk paylaşımı** kaldıracı burada bedava çalışır. Dizin zaten
`harita:"macaristan"` diyerek bunu istiyor.

🔴 **Ama bu GÖRÜNÜR bir değişiklik ve karar kullanıcınındır:** Macar havzası
1526-1918 arası **hardal sarısından (#d9c76a) maviye (#1e88e5) döner.** Yani
"veri düzeltmesi" değil, haritanın okunuşunu değiştiren bir karar. Üç seçenek:
```
(a) macaristan-habsburg → #1e88e5 paylaşır   Macar tacı Macar rengiyle görünür
(b) ayrı ara ton (yeni hex)                  ikili yapı görünür, DSATUR'a yük
(c) olduğu gibi kalsın                       Habsburg birliği vurgulanır
```
⚠️ Ben (a)'yı öneriyorum ama **ölçülmeden seçilmemeli** — (b) yeni hex ister ve
`VERİ KİMLİK`'in kuyruğu uzun.

---

## B-3 🟡 BRİFİNGDEKİ "ince kimlik kullanımı 0" ÖLÇÜMÜ EKSİK YÖNDEN SORULMUŞ

**① BİZDE NE VAR** — üçe bölünme **zaten modellenmiş**, ama `s:` katmanında
değil `v:` katmanında:
```
Budin        v: 1526-09-01 -> 1541-08-29   k="Macaristan (Zapolya vasal krallığı)"
             d: 1541-08-29 -> 1686-09-02                    (Osmanlı Budin)
Erdel        v: 1526-09-01 -> 1541-08-29   k="Macaristan (Zapolya vasal krallığı)"
             v: 1541-08-29 -> 1687-08-12   k="Erdel Prensliği"
```
Sahipsizlik taraması: 1527 · 1530 · 1535 · 1540 kesitlerinde Macar havzasında
**sahipsiz 0** — boşluk yok.

**③ HÜKÜM: BRİFİNG YANLIŞ ÖLÇÜME DAYANIYOR — düzeltilmeli.**

*"macaristan ince kimlik kullanımı: 0"* ölçümü yalnız `s:` katmanına baktığı
için `v:`/`k:` modellemesini **hiç görmedi.** Üçe bölünmenin **üçte ikisi
zaten doğru:** Osmanlı Budin `d:` ile, Zapolya ve Erdel `v:` + `k:` ile.
Eksik olan yalnız **üçüncü parça: Kraliyet Macaristanı** (B-2).

📌 Bu tam `CAPRAZ-GOREV §4⑥`'nın vakası: *"bir ölçüm tek yönde sorulursa ters
yöndeki kusuru göremez."* Kural dosyada yazılı ve **aynı gün, aynı dosyada
ihlal edilmiş.**

⚠️ Sonucu ölçülü: BALKAN'ın *"68 pencere ince kimliğe bölünmeli"* rakamı,
benim alanımdaki kısmı için **fazla sayıyor**. Doğrulanmış hâli:
25 pencere 1526'yı kesiyor ✓ · 13 pencere 1918 sonrası ✓ (iki sayı da tuttu),
ama bunların **düzeltilmesi gereken kısmı** 25+13 değil — çünkü Zapolya/Erdel
tarafı zaten `v:` ile ayrılmış.

---

## B-4 🟡 HABSBURG 245,6 YIL ERKEN — biri gerçek anakronizm

**① BİZDE NE VAR**
```
dizin  habsburg (harita:"avusturya")   f=1526-08-29
harita Viyana · Graz · Ljubljana · Uyvar   s:avusturya  f=1281-01-01
       fark 89.723 gün = 245,6 yıl
```

**② KAYNAKTA NE VAR** — Kranj/Carniola'nın Habsburg'a geçişi:
> 1286'da Gorizia-Tyrol (Meinhardiner) hattı Kärnten dükü ve **Kranj markisi**
> oldu. Henry'nin 1335'teki ölümüyle hat tükendi; İmparator IV. Ludwig
> **2 Mayıs 1335'te Linz'de** Kärnten'i ve Kranj markiliğini Habsburglara
> imparatorluk tımarı olarak verdi. Tirol 1363'te eklendi.
> *(Die Welt der Habsburger — habsburger.net, Schönbrunn kurumsal tarih portalı;
> Vikipedi aday üretici olarak kullanıldı, kaynak olarak değil — `§3`)*

**③ HÜKÜM: ÜÇÜ FARKLI — ve koordinatörün kararı bir vakadan genelleme.**

🔴 **Koordinatörün hükmü: *"dizinin `f:`'i değil, YERLEŞİMLERİN `f:`'i
düzelecek — gerekçe senin kendi ölçümün: Ljubljana savunulamaz."***
⚠️ **Gerekçe tek vakadan alınmış, öteki ikisine uymuyor.** Ölçtüm:

| kayıt | doğru başlangıç | bugünkü `f:` | hüküm |
|---|---|---|---|
| **Ljubljana** | **1335-05-02** (Linz tımarı) | 1281-01-01 | ✗ **veri yanlış**, 54 yıl 4 ay |
| **Viyana** | 1278 Marchfeld / 1282-12-27 tevcihi | 1281-01-01 | ✓ **veri DOĞRU** — 1281'de Rudolf zaten hâkim |
| **Graz** | aynı (Styria, 1282 tevcihi) | 1281-01-01 | ✓ **veri DOĞRU** |

Viyana ve Graz'da düzeltilecek şey **yerleşim değil, dizin**: `habsburg`
kaydının `f:1526-08-29`'u Mohaç'tan alınmış, oysa Habsburg Avusturyası 1526'da
kurulmadı. ⇒ **Ljubljana'da veri, Viyana/Graz'da dizin düzelir.** İkisi ayrı iş.

### 🔴 UYARI — `f:` ileri alınırsa DEĞİŞMEZ 1 DELİĞİ AÇILIR
Ljubljana'nın `f:`'ini 1335'e çekmek **54 yıl 4 aylık sahipsiz pencere**
demektir; bugünkü sahipsiz sayısı 34 ve hepsi kasten. Delik açmadan düzeltmenin
tek yolu o pencereyi **doldurmak**:
```
s: 1281-01-01 -> 1335-05-02   d=almanya     (Kutsal Roma — Kranj imparatorluk markiliği)
s: 1335-05-02 -> 1918-11-11   d=avusturya
```
🎨 **`almanya` zaten var** — `renkler.py` `("Kutsal Roma / Almanya", "#9a9a9a")`,
`devletler.js` `f=962-02-02`. **Yeni renk gerekmiyor.**
⚠️ Alternatif `goricya`/`karniola` kimliği daha kesin olurdu ama **ikisi de
`BOYALAR`'da yok** ve yeni hex DSATUR dengesine yük — `almanya` hem doğru hem
bedava. (Meinhardiner Kranj'ı imparatorluk tımarı olarak tutuyordu.)

📌 **Renk envanteri — önerilerimin ihtiyacı:**
```
almanya              #9a9a9a  ✓ VAR      Ljubljana dolgusu
venedik fransa
ingiltere yunanistan          ✓ VAR      Ayamavra zinciri — yeni renk YOK
macaristan           #1e88e5  ✓ VAR      paylaşıma aday
habsburg                      ✗ YOK      (dizin kaydı, haritada karşılığı avusturya)
macaristan-habsburg           ✗ YOK      B-2'nin (a) seçeneği paylaşımla çözer
erdel                         ✗ YOK      bugün v:/k: ile çiziliyor, gerekmiyor
```

---

## B-5 🟡 UYVAR — üç kat yanlış (TDV'den doğrulandı)

**① BİZDE NE VAR:** `s:avusturya 1281-01-01 → 1663-09-24`, `kur:` alanı yok.

**② KAYNAKTA NE VAR** — TDV `uyvar` (`<title>` = "UYVAR - TDV İslâm
Ansiklopedisi", **canlı**):
```
1545         kalenin çekirdeği — Estergon başpiskoposu, Osmanlı akınlarına karşı
1573-1585    yıldız-kale sistemine göre büyük yenileme
1663-08-17   Köprülüzâde Fâzıl Ahmed Paşa kuşatmayı başlattı
1663-09-26   Adam Forgács teslim etti
1685-08-19   Habsburg'a geçti
fetih öncesi bölge: MACARİSTAN KRALLIĞI
```

**③ HÜKÜM: ÇELİŞİYOR, üç ayrı sebeple.**
1. **Yanlış devlet — TDV doğruladı.** *"Bölge, Osmanlı fethinden önce Macaristan
   Krallığı'na aitti."* Havzadaki bütün komşuları `macaristan` 1281→fetih
   yazılmış; **Uyvar tek istisna.** Desen kırılması tek başına yazım hatası
   işaretiydi, kaynak teyit etti.
2. **Kale 1281'de yok — `kur:` = 1545.**
   ⚠️ **Kendi tahminimi düzeltiyorum:** ilk turda *"1573-1581'de inşa edildi"*
   yazmış ve **doğrulanmadı** diye işaretlemiştim. TDV çekirdeğin **1545**'te
   kurulduğunu, 1573-1585'in **yenileme** olduğunu söylüyor. Doğru `kur:`
   değeri **1545**; 1573-1585 aralığı kuruluş değil.
   ⇒ Bugün 264 yıl (1281-1545) boyunca var olmayan bir kale petek sahibi.
3. 🔴 **YENİ: fetih tarihi iki gün yanlış.** Bizde `1663-09-24`, TDV
   **`1663-09-26`**. Kayıp tarihi (`1685-08-19`) ise **tutuyor** ✓.

### Önerilen düzeltme
```
kur: "1545-01-01"                                  ← gün yok, §4⑤: yıl hassasiyeti
s:   1545-01-01 -> 1663-09-26   d=macaristan       ← avusturya DEĞİL
d:   1663-09-26 -> 1685-08-19                      ← 09-24 değil 09-26
s:   1685-08-19 -> 1918-11-11   d=avusturya        (değişmiyor)
```
⚠️ `kur:` gününü TDV vermiyor; `1545-01-01` **"yıl biliniyor, gün bilinmiyor"**
sözleşmesidir (`CLAUDE.md §4`), 1 Ocak iddiası değil.

---

## B-6 🔴 SAYILAR — brifingin rakamları CANLI OLMAYAN dosyaları içeriyor

**① ÖLÇÜM.** `CAPRAZ-GOREV §1` tablosu ile canlı veri uyuşmuyor. Sebebi bulundu:
brifing **`s:` pencerelerini beş dosya üzerinden** saymış, oysa `girdi.py`
yalnız ikisini okuyor (`yerlesimler.js` + `yerlesimler_afrika.js`).

```
kimlik      brifing    CANLI      merge bekleyende      canlı olmayan pay
avusturya   90 / 84    73 / 67    17 (avrupa)           %19
venedik     83 / 78    78 / 73     5 (avrupa)            %6
macaristan  44 / 30    44 / 30     0                      %0   ← tamamı canlı
fransa     178 /149    89 / 89    79 avrupa + 10 asya    %50
```
(Brifing `isg:` saymamış; avusturya +9, fransa +7 işgal penceresi ayrıca var.)

**③ HÜKÜM: BRİFİNGDEKİ SAYILAR DOĞRU AMA CANLI DEĞİL.**

🔴 **Fransa'mın yarısı haritada çizilmiyor.** 79 pencere `yerlesimler_avrupa.js`
içinde ve o dosya `girdi.py` izin listesinde yok (15 kimlik `renkler.py`'de
tanımsız). Fransa üzerinde çapraz doğrulama yaparsam, bulduğum kusurların
yarısı **düzeltilse bile haritada görünmez.**

⇒ **Koordinatöre soru:** Fransa işine başlamadan önce `yerlesimler_avrupa.js`
merge sırası netleşmeli. Yoksa `ORGANIZASYON §11`'in *"yazıldı ama ulaşmadı"*
sınıfını üretirim.

---

---

# VENEDİK — kullanıcının kendi sorusu

> *"Venedik kaynaklarında Dubrovnik, Parga, Preveze, Modon, Koron ve çeşitli
> adalar hakkında — Girit, Kıbrıs, Rodos vesaire — ne anlatıyor, **bizdeki
> karşılığı nedir**?"*

**Ölçüm:** `venedik` penceresi taşıyan **73 yerleşim**. Sahipsizlik taraması:
**0/73** — Venedik ailesinde delik yok, zincirler kapalı. Genel sağlık iyi;
aşağıdaki üç madde istisnadır.

## V-1 🔴 DUBROVNİK — KAYDI HİÇ YOK, ve toprağı VENEDİK boyanıyor

**① BİZDE NE VAR**
```
data/yerlesimler.js     Dubrovnik: KAYIT YOK
data/olaylar_ek2.js     t:"1458-01-01"  b:"Dubrovnik (Raguza) haracı"   ← madde VAR
```
Yani **kronolojide madde var, haritada gösterecek nokta yok.**

Noktasızlığın sonucu ölçüldü — `CLAUDE.md §2`'nin emilme davranışı:
```
Dubrovnik'e en yakın nokta:  Mliyet (Mljet), 48,2 km
Mljet'in sahibi:             venedik 1281→1797, sonra avusturya
```
⇒ **Ragusa Cumhuriyeti, bağımsız var olduğu bütün süre boyunca haritamızda
VENEDİK renginde görünüyor.** Ragusa'nın bütün kimliği Venedik'ten bağımsız
olmaktı; bu, o devlet için verilebilecek en ters renktir.

📌 `CLAUDE.md §2` bu vakayı **isim isim** öngörmüş: *"Brač, Hvar, Korčula
1483'ten itibaren Osmanlı oldu (Mostar'dan)."* Aynı kıyı, aynı mekanizma —
o sefer Mostar'dan Osmanlı, bu sefer Mljet'ten Venedik.

**② KAYNAKTA NE VAR** — TDV `dubrovnik` (`<title>` = "DUBROVNİK - TDV İslâm
Ansiklopedisi", **canlı**):
```
1358         Venedik hâkimiyeti sona erdi
1365         ahidnâme — Dubrovnik Osmanlılar'ın HARAÇGÜZÂRI oluyor
             haraç: 500 altın duka → 1.500 florin (1459) → 12.500 florin (1478)
1806-05-27   Fransızlar Dubrovnik'i zaptetti, cumhuriyete son verdi
```

**③ HÜKÜM: ÇELİŞİYOR — üç ayrı katmanda.**

1. **Nokta eksik** ⇒ toprak yanlış devlete boyanıyor (yukarıda).
2. ✅ **Tarih çelişkisi ÇÖZÜLDÜ — üç ayrı olay, iki kayıt, bir eksik.**

   ⚠️ Önce **kural ①** işletildi: `1365` tek çekişten gelmişti, ikinci çekişte
   **birebir alıntıyla** doğrulandı — çekiş uydurmamış.

   **TDV `dubrovnik` (ikinci çekiş, alıntı):**
   > *"Dubrovnik kaynaklarına göre 1365 tarihli olan bu ahidnâme ile Dubrovnik
   > Osmanlılar'ın haraçgüzârı oluyor…"* — **I. Murad**, yılda **500 altın duka**,
   > ticaret serbestliği.
   > *"7 Mart 1459'da verilen yeni bir ahidnâme"*
   > **`1458` TDV metninde HİÇ GEÇMİYOR.**

   **Batı/akademik tarih yazımı (çapraz kontrol):** 1442'de **Murad II**'ye
   yılda **1.000 duka**; **1458** antlaşması *"1442 belgesinin hükümlerini
   esasen tekrarlıyor"*, haraç **1.500**; sonra 12.500'e çıkıyor.

   ⇒ **Üç ayrı olay, ve ikisi bizde yok:**
   ```
   1365  I. Murad ahidnâmesi     500 duka    TDV — "Dubrovnik kaynaklarına göre"
   1442  II. Murad             1.000 duka    Batı — bizde YOK, TDV'de YOK
   1458  Fâtih antlaşması      1.500 duka    BİZDE VAR (olaylar_ek2)
   1459-03-07  ahidnâme belgesi              TDV — 1458'in belgesi
   ```

   **③ HÜKÜM: ÇELİŞKİ DEĞİL, KATMANLI BİR SÜREÇ.** Bizim `1458`imiz ile TDV'nin
   `1459-03-07`si **aynı işlemin** iki yüzü (antlaşma ve ahidnâme belgesi
   arasında bir yıl, olağan). Gerçek ayrışma `1365` ile `1442` arasında ve
   **TDV'nin kendisi 1365'i "Dubrovnik kaynaklarına göre" diye atıfla
   veriyor** — kendi hükmü olarak değil.

   ### 🟢 KARAR ÖNERİM: `v:` penceresi **1458**'de başlasın
   Gerekçe sırayla:
   - Kendi kronolojimiz zaten `1458-01-01` taşıyor — **yeni iddia üretmiyoruz**
   - TDV'de `1458`e karşı çıkan bir ifade **yok** (tarih metinde hiç geçmiyor)
   - `1365` **ticaret ahidnâmesidir**, toprak tâbiliği değil; üstelik TDV onu
     kendi hükmü olarak değil **atıfla** aktarıyor
   - `1442` gerçek bir aşama ama **hiçbir kaydımızda yok**; onu eklemek
     kronoloji işidir, harita kırılması değil
   - Ragusa 1358-1806 boyunca **fiilen özerkti**; pencerenin başlangıcı
     Macar himayesinden Osmanlı himayesine geçişi işaretler, 1458 bunun
     kabul edilmiş tarihidir

   📌 **Kalan belirsizlik dürüstçe yazılıyor:** Ragusa aynı anda birden çok
   güce haraç ödedi; tek bir "geçiş günü" tarihsel olarak zorlamadır. `1458`
   en savunulabilir tek tarih, **kesin gün değil** ⇒ `1458-01-01` yazılır ve
   bu `CLAUDE.md §4`'ün *"yıl biliniyor, gün bilinmiyor"* sözleşmesidir.

   🟡 **KRONOLOJİYE ÖNERİ (VERİ KRONOLOJİ'ye):** `1442` maddesi eksik —
   II. Murad'a 1.000 duka ile başlayan ilk düzenli haraç. Bugün kronoloji
   1458'den başlatıyor ve **on altı yıllık bir aşamayı atlıyor.**
3. **Mljet'in kendi kimliği de şüpheli.** Mljet 1345'ten itibaren **Ragusa
   Cumhuriyeti'nin** adasıydı, Venedik'in değil. TDV maddesi Mljet ve Lastovo'ya
   **hiç değinmiyor** ⇒ `§8` gereği hüküm **"doğrulanamadı"** — bu tam bir
   hükümdür, boşluk değil. Ragusa kaynağından sınanmalı.

### 🟢 Önerilen düzeltme — YENİ RENK GEREKMİYOR
Osmanlı'ya haraçgüzâr bir cumhuriyet, tam olarak **`v:` tâbi katmanının** işidir
— Erdel'in modellendiği gibi (`v:` + `k:`), ve tâbi tonu zaten var:
```
Dubrovnik  lat 42.650  lon 18.094   tur:"sehir"
  s: 1281-01-01 -> 1358-01-01   d=venedik
  s: 1358-01-01 -> 1458-01-01   d=macaristan          ← Zadar sonrası Macar himayesi
  v: 1458-01-01 -> 1806-05-27   k="Dubrovnik Cumhuriyeti (haraçgüzâr)"
  s: 1806-05-27 -> 1814-01-01   d=fransa
  s: 1814-01-01 -> 1923-10-29   d=avusturya
```
✅ **Tâbilik tarihi artık dolu: `1458-01-01`** — gerekçesi yukarıda, kendi
kronolojimizin taşıdığı tarih ve TDV'de karşı ifade yok.
⚠️ **İki tarih hâlâ zayıf ve öyle işaretleniyor:**
- `1358-01-01` — TDV yalnız *"1358'e kadar sürdü"* diyor, gün vermiyor.
  Zadar Antlaşması **18 Şubat 1358**'dir; gün istenirse oradan alınır, ama
  Ragusa'nın Macar himayesine girişi ayrı bir işlemdir ⇒ **yıl hassasiyeti.**
- `1814-01-01` — TDV 1806'dan sonrasına hiç değinmiyor. Avusturya'nın Dubrovnik'i
  alması 1814 başıdır (Viyana Kongresi'yle 1815'te teyit) ⇒ **doğrulanmadı**,
  Habsburg kaynağından tamamlanmalı. Bu tarih yanlışsa yalnız 1806-1815 arası
  bir dilim etkilenir, Ragusa'nın 348 yıllık tâbilik penceresi etkilenmez.

📌 3 km kuralı temiz: en yakın nokta 48,2 km (`CLAUDE.md §11`).
📌 Değişmez 2: `1458` · `1806-05-27` kırılmaları madde ister. `1458` maddesi
**zaten var** (`olaylar_ek2`); `1806-05-27` için yeni madde gerekir.

## V-2 ✅ RODOS — kullanıcının saydığı ada, ama Venedik'in DEĞİLDİ

**① BİZDE NE VAR:** `bizans 1281→1310-08-15` · **`sovalye` 1310-08-15→1522-12-21**
· Osmanlı 1522-12-21→1912 · `italya` 1912-05-04→1923.

**③ HÜKÜM: UYUYOR — ve sorunun kendisi düzeltilmeli.** Rodos hiçbir zaman
Venedik'in olmadı; **Saint-Jean şövalyelerinindi** ve veri bunu doğru gösteriyor.
Kullanıcının listesinde Rodos'un bulunması, Ege'deki Latin hâkimiyetinin tek
blok sanılmasından — oysa üç ayrı güçtü: **Venedik** (Girit, Kıbrıs, İyon,
Kiklad'ın bir kısmı) · **Ceneviz** (Sakız, Midilli) · **Şövalyeler** (Rodos, On İki Ada).

## V-3 ✅ 1715 ÇELİŞKİSİ ÇÖZÜLDÜ — kanıt kendi verimizde

Ayamavra'da kaydettiğim *"TDV 1715'te Osmanlı geri aldı diyor, batı tarih
yazımının bir kısmı kesintisiz Venedik sayıyor"* çelişkisi için **verimizde
emsal buldum**:
```
Çuha Adası (Kythira)   s:venedik 1281→1715-09-07
                       d:OSMANLI 1715-09-07→1718-07-21     ← AYNI DESEN
                       s:venedik 1718-07-21→1797-10-17
```
Kythira ve Lefkada **aynı 1715 Mora seferinde** alındı ve **aynı Pasarofça ile**
(1718-07-21) Venedik'e iade edildi. Kythira'nın zinciri doğru yazılmış,
Lefkada'nınki yazılmamış.

**③ HÜKÜM: TDV'yi destekliyor.** Çelişki artık "iki tarih yazımı ayrışıyor"
değil, **"aynı olay bir kayıtta var, ötekinde yok"**. Ayamavra düzeltmesindeki
`1715-09-01` tahminim **`1715-09-07`'ye çekilmeli** — Kythira'nın tarihi zaten
elimizde ve iki ada aynı seferde düştü.
⚠️ Yine de Lefkada'nın **kendi** teslim günü Kythira'nınkiyle aynı olmak
zorunda değil; Venedik Senato kaydından teyit edilene kadar `gun:` alanına
*"1715 Eylülü"* yazılır.

## V-4 📋 GERİ KALAN 70 KAYIT — nokta doğrulaması yapıldı, çelişki yok

Kullanıcının saydığı öteki yerler ölçüldü ve **hepsi tutuyor**:
```
Kıbrıs      Venedik 1489-02-26 (Cornaro'nun devri) → Lefkoşa 1570-09-09 ·
            Magosa 1571-08-01 · Baf/Limasol 1570-07-23 · Girne 1570-09-17
Girit       Hanya 1645-08-22 → Resmo 1646-11-13 → Kandiye 1669-09-27
            (Sitiye ve İsfakiye de 1669-09-27)
Modon/Koron 1500-08-09 Osmanlı · 1685-86 Venedik geri aldı · 1715 tekrar Osmanlı
Preveze     1449 Osmanlı · 1684-09-29 Venedik · 1797 Fransa · 1798-10-23 Osmanlı
Parga       1401 Venedik · 1797 Fransa · 1815 İngiltere · 1819-05-10 Osmanlı
Selanik     Venedik 1423-09-14 → 1430-03-29
```
📌 Parga'nın İyon zincirinden **1819'da ayrılıp Osmanlı'ya geçmesi** doğru
yazılmış — İngiltere Parga'yı Ali Paşa'ya sattı, ada değil anakara olduğu için
1864 Yunanistan devrine girmedi. Kaydı bu farkı taşıyor.

---

---

# KARLOFÇA 1699 — dörtlü örtüşme noktası

> Takvim tarafı **ÇAPRAZ KUZEY'de ölçüldü** (Gregoryen; TDV gün-ay hicrîsi
> veriyor ⇒ Osmanlı belgesi var ⇒ çeviri sağlam). Burada yalnız **toprak
> devirleri** var.

**② KAYNAK** — TDV `karlofca` (`<title>` = "KARLOFÇA ANTLAŞMASI - TDV İslâm
Ansiklopedisi", **canlı**): *"24 Receb 1110 (26 Ocak 1699)"*, yirmi beş yıllık.
```
Avusturya   Tımışvar (Banat) eyaleti DIŞINDA bütün Macaristan ve Erdel
Venedik     Dalmaçya'da "Knin, Signe (Sin), Verlice, Delovar, Zadvar,
            Vergoriçe ve Çiklit kaleleri" + Mora
Lehistan    Podolya boşaltılıyor, Kamaniçe yıkılıyor; karşılığında Boğdan'da
            Suçeva, Roman, Nemçe, Soroka, Kampulek Osmanlı'ya GERİ dönüyor
Rusya       tam barış yok — iki yıllık mütareke; Azak sonra bırakıldı
```

## K-1 ✅ TARİHLEME DOĞRU — ve sebebi ilkeli, **kimse "düzeltmesin"**

Ölçüm: `1699-01-26`'da veride **10 kırılma ucu var ve hepsi Podolya'nın**
(Kamaniçe · Bar · Meciboj · Yazlofça · Çehrin → `lehistan`). Mora, Erdel ve
Macaristan'da o gün **hiçbir şey olmuyor.**

**Bu bir eksiklik değil, doğru modelleme:**
```
Mora        venedik 1687-08-01→1715   ← FETİH tarihi (Morosini)
Erdel       avusturya 1687-08-12      ← FETİH tarihi
Macaristan  avusturya 1686-1692       ← FETİH tarihleri
Podolya     lehistan 1699-01-26       ← ANTLAŞMA tarihi
Temeşvar    osmanlı → 1716-10-13      ← Karlofça'da Osmanlı'da KALDI ✓
```
⇒ Karlofça, zorla alınmış yerlerde yalnız **oldu-bittiyi tanıdı**; fiilî
değişim yıllar önce olmuştu. **Podolya tek istisna çünkü Kamaniçe hiç
fethedilmedi** — Osmanlı orayı antlaşma gereği *boşalttı*. Yani antlaşma
tarihini kullanan tek yer, gerçekten o tarihte el değiştiren tek yer.
✅ Temeşvar'ın 1716'ya kadar Osmanlı kalması TDV ile **birebir** tutuyor.

📌 **Bu satır bu yüzden yazıldı:** ileride biri *"Karlofça'da Mora Venedik'e
geçti ama veri 1687 diyor"* diye bakıp **düzeltmeye kalkarsa geriletme olur.**
Model bilinçli: taban renk **fiilî hâkimiyeti** izliyor (`girdi.py`'nin
de jure/de facto ayrımıyla aynı felsefe).

⚠️ **Ama kullanıcı tarafında bir beklenti açığı var.** `olaylar.js`'te madde
şöyle: *"Karlofça Antlaşması — **ilk büyük toprak kaybı**"*. Kullanıcı bu
maddeye tıkladığında haritada **yalnız Podolya'nın kıpırdadığını** görecek;
"büyük kayıp" 1686-1692'de zaten olmuştu. Bu `Değişmez 2t`'nin sınırdaki bir
vakası — kırılma **var** (10 uç), o yüzden denetim geçiyor, ama başlığın vaat
ettiği ölçekte değil. **Öneri: madde metnine bir cümle** — *"kayıpların
çoğu 1686-1692 fetihleriyle fiilen gerçekleşmişti; antlaşma bunları tanıdı."*

## K-2 🔴 DALMAÇYA — antlaşmanın SAYDIĞI YEDİ KALEDEN HİÇBİRİ VERİDE YOK

**① BİZDE NE VAR.** Dalmaçya kutusunda (42,3-44,5°K / 15-19°D) **14 nokta**:
```
7 Venedik  → HEPSİ ADA   Pag · Uzunada · Brakya · Hvar · Korçula · Vis · Mliyet
7 diğeri   → HEPSİ İÇ    Saraybosna · Mostar · Travnik · Livno · Foça · Yayça · Cetinje
ANAKARA KIYISI: SIFIR NOKTA
```
TDV'nin saydığı yedi kaleden (Knin · Sin · Verlice · Delovar · Zadvar ·
Vergoriçe · Çiklit) **hiçbirinin kaydı yok**; Zadar · Split · Şibenik · Klis ·
Kotor · Herseknovi de yok.

**③ HÜKÜM: ÇELİŞİYOR — ve noktasızlık ÜÇ AYRI hata üretiyor.** Ölçüldü:

| aranan yer | en yakın nokta | km | 1700'de boyanıyor | doğrusu |
|---|---|---|---|---|
| **Knin** | Livno (İhlevne) | 69,1 | **OSMANLI** | **Venedik** (TDV adıyla sayıyor) |
| **Sinj** | Livno (İhlevne) | 32,7 | **OSMANLI** | **Venedik** ("Signe (Sin)") |
| **Kotor** | Cetinje | 12,3 | **karadağ** | **Venedik** (1420-1797 kesintisiz) |
| **Herseknovi** | Cetinje | 31,7 | **karadağ** | **Venedik** (1687'den) |
| Zadar · Split · Şibenik · Klis | ada peteği | 19-74 | venedik | venedik ✓ *ama tesadüfen* |

1. 🔴 **Karlofça'nın Dalmaçya kazancı haritada HİÇ GÖRÜNMÜYOR.** Knin ve Sinj
   1699'da Venedik'e geçti; bizde ikisi de 1750'de hâlâ **Osmanlı** — çünkü
   noktaları yok ve Livno'nun Osmanlı peteğine düşüyorlar.
2. 🔴 **Venedik Arnavutluğu (Albania Veneta) tamamen yok.** Kotor ve
   Herseknovi **Karadağ** boyanıyor. Kotor 1420'den 1797'ye kesintisiz
   Venedik'ti; Karadağ hiçbir zaman sahip olmadı. Cetinje 12,3 km'den bütün
   Boka Kotorska'yı yutuyor.
3. 🟡 **Doğru renkli yerlerde bile sınır kurgusal.** Zadar/Split/Şibenik
   "venedik" görünüyor ama bunu **ada peteklerinden** alıyorlar; Osmanlı-Venedik
   kara sınırı — antlaşmanın asıl konusu — ada ile iç bölge petekleri arasında,
   gerçek hattın çok uzağında çiziliyor.

📌 Ve bu, atlasın **en çok yeniden çizilen kara sınırıydı**: Karlofça (1699,
*Linea Grimani*) ve Pasarofça (1718, *Linea Mocenigo*) iki kez taşıdı.
Bugün ikisi de haritada **hiç yok**.

### 🟢 Öneri — nokta ekleme işi, yeni renk gerekmiyor
`venedik` · `osmanli` · `avusturya` hepsi mevcut. Asgari küme (TDV'nin saydığı
dördü + iki büyük iskele):
```
Knin · Sinj · Klis · Zadar · Split · Kotor      (+ Herseknovi)
```
⚠️ **A2 BALKAN'ın alanıyla örtüşüyor** — nokta eklemek onun işi olabilir;
koordinatör dağıtsın. Ben yalnız **hangi noktanın neden gerektiğini** ölçtüm.
⚠️ Ve Dubrovnik kaydı girdiğinde Kotor'un yokluğu daha görünür olacak: iki
komşu liman, biri kayıtlı biri değil.

## K-3 🟡 ÖLÜ SLUG — iki kronoloji maddesinde
```
data/olaylar.js      1699-01-26  kaynak="karlofca-antlasmasi"   ❌ ÖLÜ
data/olaylar_ek3.js  1698-11-13  kaynak="karlofca-antlasmasi"   ❌ ÖLÜ
doğrusu: karlofca                                               ✅ canlı (bu turda kullandım)
```
KAYNAK oturumu bunu zaten tespit etmiş (`KAYNAK-DENETIMI.md`); **veride hâlâ
düzeltilmemiş.** İki satır, VERİ KRONOLOJİ'ye.

## K-4 📌 ÇAPRAZ KUZEY'E — Karlofça'nın TERS yönü
TDV: Osmanlı Podolya'yı boşaltırken **karşılığında Boğdan'da beş kale geri
aldı** — *Suçeva · Roman · Nemçe · Soroka · Kampulek*. Bizim veride Podolya'nın
beş noktası doğru devrediliyor ama **bu geri alışın karşılığı ölçülmedi**;
Boğdan/Moldova KUZEY'in alanı. Örtüşme noktası bu: **aynı antlaşma, iki yönlü
devir, iki oturum.**

## KOORDİNATÖRDE BEKLEYEN KARARLAR
1. **B-2 renk seçimi** (a/b/c) — kullanıcı kararı, harita görünür değişiyor.
2. **B-4 Viyana/Graz** — dizinin `f:`'i mi geri çekilecek?
3. **B-6** — Fransa'ya başlamadan `yerlesimler_avrupa.js` merge sırası.
4. B-1 ve B-5'in uygulaması kime gidiyor — YAMACI mı?

---

## SIRADAKİ

1. **Kraliyet Macaristanı kaynaklandırması** — Bratislava ve Ausgleich zinciri
   (renk kararı ertelendi, kaynak işi sürüyor).
2. **Mljet'in kimliği** — Ragusa arşivi erişilebilirse Dubrovnik'le birlikte.
3. **Fransa EN SON** — `yerlesimler_avrupa.js` merge kararı çıkınca.

## 📌 1442 SORUSUNA CEVAP — madde YAZILMASIN
Koordinatör sordu: *"`1442` TDV'de mi yoksa yalnız Batı kaynağında mı?"*
**Yalnız Batı kaynağında, ve o kaynak da proje ölçütünü karşılamıyor.**
`1442`yi bir web taramasından aldım; sonuçlar arasında Vikipedi ve hayran
wiki'leri vardı. `CLAUDE.md §4`: **Vikipedi hiçbir zaman tek dayanak değildir.**
⇒ **Madde yazılmasın.** Doğrulanmış hâli: TDV `1365` (atıfla) ve `1459-03-07`
(kendi hükmü) veriyor; `1442` **doğrulanmadı** olarak kalır. Akademik bir
Ragusa kaynağı bulunursa yeniden açılır.

---

# AVUSTURYA KESİTİ — Sırbistan · Banat · Eflak
> Dalmaçya BALKAN'da (*Linea Mocenigo*); burada yalnız kara cephesi.

## A-1 ✅ SEKTÖR SAĞLAM — ve K-1'in ilkesi İKİNCİ KEZ doğrulandı

Ölçüm — antlaşma günlerindeki kırılma sayısı:
```
1683-09-12 Viyana      2 uç   (yalnız Estergon, +27g)
1718-07-21 Pasarofça  12 uç   Oltenya 4 nokta + iki Venedik adası
1739-09-18 Belgrad    20 uç   Sırbistan 5 + Oltenya 4 + Rostov
1791-08-04 Ziştovi     2 uç   yalnız Böğürdelen
```
**Oltenya (Küçük Eflak) tam modellenmiş** — Krayova · Turnu Severin · Rimnik ·
Tırgu Jiu dördü de `tabi → avusturya` **1718-07-21**'de, `→ tabi` **1739-09-18**'de.
Dördünün de kendi noktası var (0,4-0,7 km). Dalmaçya'daki boşluğun tersi:
burada nokta kümesi **yeterli**.

🔴 **Ve K-1'in ilkesi burada bağımsız olarak yeniden doğrulandı:**
```
Belgrad   avusturya 1717-08-18   ← FETİH (Eugen), antlaşma 1718-07-21
Temeşvar  avusturya 1716-10-13   ← FETİH
Oltenya   avusturya 1718-07-21   ← ANTLAŞMA (fethedilmedi, DEVREDİLDİ)
1739      hepsi     1739-09-18   ← ANTLAŞMA (Avusturya tahliye etti)
```
⇒ **Aynı ayrım, ayrı bir antlaşmada, ayrı bir oturum tarafından yazılmış.**
Fiilen alınan yer fetih tarihiyle, devredilen yer antlaşma tarihiyle. Bu artık
tek vakadan çıkarılmış bir yorum değil, **verinin tutarlı bir kuralı.**

📌 **Yanlış "düzeltme" uyarısı:** TDV `belgrad` *"1718 Pasarofça Antlaşması ile
Avusturya'ya bırakıldı"* diyor, bizde `1717-08-18` yazıyor. **Bu çelişki
değil** — TDV *de jure*, biz *de facto* yazıyoruz ve ikisi de doğru. Biri
"TDV 1718 diyor" diye düzeltirse **geriletme olur.**

## A-2 🔴 BELGRAD'IN ÜÇÜNCÜ AVUSTURYA İŞGALİ YOK — 1789-1791

**① BİZDE NE VAR**
```
Belgrad             d: OSMANLI 1739-09-18 → 1867-04-18      ← 128 yıl KESİNTİSİZ
Böğürdelen (Šabac)  s: avusturya 1788-04-24 → 1791-08-04    ← AYNI SAVAŞ, VAR
```
**Desen kırılması:** 60 km arayla iki nokta, aynı savaş, aynı antlaşma —
birinde pencere var, ötekinde yok.

**② KAYNAKTA NE VAR** — TDV `belgrad` (`<title>` = "BELGRAD - TDV İslâm
Ansiklopedisi", **canlı**), el değiştirme dizisi:
> *"…elli yıl sonra tekrar Avusturyalılar'ın eline geçti **(1789)**"* ·
> *"**Ziştovi Antlaşması'na (1791)** göre yine Osmanlılar'a iade edildi"*

**③ HÜKÜM: ÇELİŞİYOR.** Belgrad 1789'da Avusturya'ya geçti, 1791'de iade
edildi; bizim veride **hiç görünmüyor**. 128 yıllık tek Osmanlı penceresi
yaklaşık **1 yıl 10 aylık** bir işgali yutuyor.

### Önerilen düzeltme — KESİN / ZAYIF ayrımıyla
```
d: 1739-09-18 -> 1789-10-08                    ← başlangıç günü ZAYIF
s: 1789-10-08 -> 1791-08-04   d=avusturya      ← pencere KESİN
d: 1791-08-04 -> 1867-04-18                    ← bitiş KESİN
```
- **Pencerenin varlığı: `KESİN`** — TDV iki tarihi de açıkça veriyor.
- **Bitiş `1791-08-04`: `KESİN`** — Ziştovi, ve **Böğürdelen'de zaten aynı
  gün yazılı** (emsal elimizde).
- 🔴 **Başlangıç `1789-10-08`: `ZAYIF`** — TDV yalnız *"1789"* diyor, gün
  vermiyor. Laudon'un Belgrad'ı alışı için 8 Ekim 1789 yaygın tarihtir ama
  **bu turda doğrulamadım.** ⇒ `§73` gereği yama buna dayanmasın; günü
  VERİ KRONOLOJİ ya da KAYNAK teyit etsin.
  ⚠️ `1789-01-01` (yıl hassasiyeti) yazmak **burada çözüm değil**: kuşatma
  sonbahardaydı, Ocak'a koymak Değişmez 2'nin ±30 gün eşiğini kaynağıyla
  uyumsuz hâle getirir. Gün bulunana kadar **beklemek daha doğru.**

🟡 **ÖLÇÜLMEDİ — kapsam sorusu açık:** 1789-91 işgali Belgrad'ın ötesine ne
kadar uzandı? Semendire · Kragujevac · Çaçak · Niş'te 1780-1800 arası
**hiç kırılma yok**. Böğürdelen'in penceresi var olduğuna göre kuzey Sırbistan
şeridinin tamamı sorulmalı. **Bu ayrı bir ölçüm**, bu turda yapılmadı.

## A-3 ✅ GERİ FETİH DALGASI 1683-1700 — A-1'in kuralı **36/36 TUTTU**

Ölçüm: bu aralıkta `OSMANLI → avusturya/venedik` **36 geçiş** var.
```
1699-01-26 (antlaşma tarihi) kullanan  :  0 / 36     ← kural TUTTU
gün hassasiyetli                       : 35 / 36
yıl hassasiyetli (YYYY-01-01)          :  1 / 36     ← Yanova (Ineu)
```
**Hiçbir nokta Karlofça'ya çekilmemiş.** Estergon 1683-10-09 · Budin 1686-09-02
· Erdel 1687-08-12 · Belgrad 1688-09-06 · Kanije 1690-04-13 · Varad 1692-06-05
— hepsi kendi fetih günüyle. Dalganın yoğunluğu da tarihle uyumlu:
1686'da 9, 1687'de 10 geçiş (Budin ve Mora'nın düşüşü).

✅ **Geri dönüşler de doğru yazılmış:** Niş ve Vidin `avusturya 1689-09-24 →
1690-09-09`, sonra Osmanlı — 1689 Avusturya ilerlemesi ve Köprülüzâde Fâzıl
Mustafa Paşa'nın 1690 karşı harekâtı. **Bir yıllık pencere, iki noktada da
aynı iki gün.**

⇒ A-1 artık **üç bağımsız sınamadan** geçti (Karlofça · Pasarofça/Belgrad ·
geri fetih dalgası). Bu veri kümesi bu konuda **güvenilir**; buraya yapılacak
"düzeltme"lerin ispat yükü ağır olmalı.

## A-4 🟡 YANOVA (INEU) — 36 kaydın tek yıl hassasiyetlisi

**① BİZDE NE VAR**
```
Yanova (Ineu)   d: 1658-08-27 → 1693-01-01   (gün hassasiyetli fetih)
                s: 1693-01-01 → 1923-10-29   d=avusturya   ← 231 yıl, YIL hassasiyetli başlangıç
kronoloji       olaylar_ek6.js  1693-01-01  "Yanova'nın kaybı — Erdel yolunun kapanması"
```
**③ HÜKÜM: DOĞRULANAMADI — ve desen kırılması işaret ediyor.**

35 komşusu gün hassasiyetliyken bu tek başına `-01-01`. Kendi **fethi**
(1658-08-27) gün hassasiyetli, **kaybı** değil — aynı kayıt içinde iki farklı
titizlik. Bu, `CLAUDE.md §4`'ün *"yıl biliniyor, gün bilinmiyor"* sözleşmesinin
meşru kullanımı **olabilir**, ama bir yer tutucu da olabilir; ayırt etmedim.

⚠️ **Ve bu MOTOR'un ölçtüğü sınıfın görünür bir örneği:** 2.516 damga
(sınır tarihlerinin %28'i) yıl hassasiyetli ve hepsi `Değişmez 2`'ye ±30 günle
giriyor, oysa belirsizlik 365 gün. Burada kronoloji maddesi de aynı
`1693-01-01`'i taşıdığı için **denetim temiz görünüyor** — iki kayıt da aynı
yer tutucuyu paylaşıyor.
📌 Yani sağlama, hatayı bulamıyor çünkü **hata iki tarafta da aynı.**

🟡 **Kaynak durumu:** `KAYNAK-DENETIMI.md` Yanova'nın **1658 fethi** için
`koprulu-mehmed-pasa` slug'ını doğrulamış; **1693 kaybı** için doğrulanmış
kaynak yok. Müstakil bir `yanova` maddesi arandı, listede görünmüyor.
⇒ **KAYNAK oturumuna:** Yanova/Ineu'nun 1693'te Habsburg'a geçiş **günü**.

## A-5 🔴 SEMENDİRE'NİN 1789-91 PENCERESİ DE YOK — ama bu sefer GÜN elimizde

**① BİZDE NE VAR.** Kuzey Sırbistan/Banat kutusunda (43,2-45,2°K / 18,8-23,2°D)
**9 nokta** var; 1788-91 Avusturya penceresi taşıyan **1/9** (yalnız Böğürdelen).
```
Belgrad      OSMANLI 1739-09 → 1867-04     ← pencere yok (A-2)
Semendire    OSMANLI 1739-09 → 1867-04     ← pencere yok
Kragujevac · Çaçak · Niş · Vidin · İzvornik · Turnu Severin — pencere yok
```

**② KAYNAKTA NE VAR** — TDV `semendire` (`<title>` = "SEMENDİRE - TDV İslâm
Ansiklopedisi", **canlı**):
> **13 Ekim 1789** — *"300 askerin silâhlarını bırakarak geri çekilebilmesi
> şartıyla teslim oldu"*
> **4 Ağustos 1791** — Ziştovi Antlaşması, *"Osmanlılar'a geri verildi"*

**③ HÜKÜM: ÇELİŞİYOR — ve düzeltmenin iki ucu da `KESİN`.**
```
d: 1739-09-18 -> 1789-10-13
s: 1789-10-13 -> 1791-08-04   d=avusturya    ← EKSİK; iki uç da TDV'den, GÜN hassasiyetli
d: 1791-08-04 -> 1867-04-18
```
✅ Belgrad'dan farklı olarak burada **beklemeye gerek yok** — TDV günü veriyor.

🟢 **VE BELGRAD'IN GÜNÜNÜ DARALTIYOR.** Semendire **13 Ekim 1789**'da teslim
oldu ve Belgrad'ın düşüşü bunun **öncesindedir** (Semendire, Belgrad
düştükten sonra tutunamadı). ⇒ Belgrad için yaygın verilen **8 Ekim 1789**
tarihi bu sırayla **tutarlı**. Kanıt değil ama **destekleyici** — KAYNAK
oturumu teyit ederken bu üst sınırı kullanabilir: *Belgrad < 13 Ekim 1789.*

🟡 **Kragujevac · Çaçak hâlâ ölçülmedi** — Avusturya işgalinin güney sınırı
kaynaklanmadı. Niş · Vidin · İzvornik'te pencere **olmaması doğru** (Avusturya
oraya ulaşmadı).

## A-6 🔴 VE A-1'İN SINIRI ÇIKTI — kendi bulgumu daraltıyorum

**① BİZDE NE VAR:** `Semendire  s:avusturya 1717-08-18 → 1739-09-18`
— yani 1739 grubunun tamamı gibi **antlaşma tarihiyle** bitiyor.

**② KAYNAKTA NE VAR** — aynı TDV maddesi:
> *"Avusturyalılar bu bölgede **Ağustos 1738**'e kadar kaldılar."*

**③ HÜKÜM: ÇELİŞİYOR — ~13 ay.**

A-3'te *"1739 grubu antlaşma tarihini kullanıyor çünkü Avusturya tahliye etti"*
demiştim ve bunu **tutarlılık** diye övmüştüm. TDV'ye göre Semendire için bu
**yanlış**: orası 1739'da tahliye edilmedi, **Ağustos 1738'de fiilen kaybedildi.**

⇒ **A-1'in kuralı ayakta ama uygulaması 1739 grubunda tek tip DEĞİL.**
Kural *"fiilî değişim fiilî tarihle"* diyor; Semendire'de fiilî tarih 1738,
veride 1739 yazılı. Yani grup **kuralın kendisine** aykırı, kurala uygun değil.

📌 **Kendi A-3 hükmümü daraltıyorum:** *"36/36 tuttu"* ölçümü **geri fetih
dalgasının başlangıç tarihleri** içindi ve o hâlâ geçerli. Ama *"1739 grubu
tutarlı"* yorumum **bitiş tarihleri** hakkındaydı ve **sınanmamıştı** — şimdi
sınandı, en az bir üyesi tutmuyor.
⚠️ Belgrad'ın `1739-09-18`'i muhtemelen **doğru** (1739 kuşatması antlaşmayla
sonuçlandı); yani grup gerçekte **karışık**, ve tek tip yazılmış olması
kolaylıktan geliyor olabilir.

🟡 **ÖLÇÜLMEDİ:** Böğürdelen · Kragujevac · Çaçak 1738'de mi 1739'da mı
kaybedildi? Dördü ayrı ayrı kaynaklanmalı. **Bu turda yalnız Semendire
sınandı.**
⚠️ Ve düzeltme `1738-08-01` **ay hassasiyetlidir** (TDV gün vermiyor) —
`§4⑤` gereği öyle işaretlenmeli.

## A-7 ✅ NİŞ 1788-91 — pencere OLMAMASI doğru, kaynakla teyit

**② KAYNAK** — TDV `nis` (canlı): 1788-1791 savaşında Niş'in Avusturya'ya
geçtiğine dair **metinde hiçbir ifade yok**; madde 1809'a kadar gidiyor.
İkinci, hedefli çekişte de doğrulandı: *"Metinde yok. Metin sadece 1688 ve
1737 tarihli işgallerden söz etmektedir."*

**③ HÜKÜM: UYUYOR.** Niş'te 1780-1800 arası kırılma olmaması **doğru** —
Avusturya oraya ulaşmadı. Önceki turda bunu **kaynaksız** söylemiştim,
şimdi kaynaklandı.

## A-8 🔴 NİŞ'İN 1737 AVUSTURYA İŞGALİ YOK — 3 ay, veride hiç

**① BİZDE NE VAR:** `Niş d:OSMANLI 1690-09-09 → 1878-01-11` — **188 yıl kesintisiz.**

**② KAYNAKTA NE VAR** — TDV `nis`, birebir alıntı:
> *"Rebîülevvel 1150'de (Temmuz 1737) Avusturya İmparatorluğu ile yapılan
> savaşta Seckendorf Niş'i ele geçirdi; fakat aynı yılın **ekim** ayında
> Rumeli Beylerbeyi Köprülüzâde Hâfız Ahmed Paşa tarafından **savaşsız**
> geri alındı."*

**③ HÜKÜM: ÇELİŞİYOR.** 188 yıllık tek pencere ~3 aylık bir işgali yutuyor.
```
s: 1737-07-01 -> 1737-10-01   d=avusturya     ← EKSİK, AY hassasiyetli
```
⚠️ `§4⑤`: TDV **ay** veriyor (Rebîülevvel 1150 / Temmuz · ekim), gün vermiyor
⇒ ay hassasiyetiyle yazılır, `gun:` alanına *"Temmuz 1737"* / *"Ekim 1737"*.
📌 Hicrî ay verilmiş olması (Rebîülevvel 1150) KUZEY'in ölçütüne göre **Osmanlı
belgesi var** demek — tarih sağlam, yalnız gün yok.

📌 **Ve bu A-6'nın savaşıdır:** 1737-39 harbi. Semendire'nin Ağustos 1738'de
geri alınması, Niş'in Ekim 1737'de geri alınması — **aynı savaşın iki ayrı
safhası**, ve ikisi de veride yok. 1737-39 kuşağı bütünüyle sınanmamış.

## A-9 🔴🔴 TDV İLE ÇELİŞİYORUZ — ve bu sefer **BİZİM DOĞRU** olduğumuzu düşünüyorum

**① BİZDE NE VAR**
```
Niş    s:avusturya 1689-09-24 → 1690-09-09
Vidin  s:avusturya 1689-09-24 → 1690-09-09     ← Niş ile BİREBİR aynı iki gün
```

**② KAYNAKTA NE VAR** — TDV `nis`, **iki ayrı çekişte aynı cümle**:
> *"**24 Eylül 1688**'de Niş, Margrave Ludwig von Baden'in birlikleri
> tarafından ele geçirildi."*

**③ HÜKÜM: ÇELİŞİYOR — ve `CLAUDE.md §4`'ün varsayılanına AYKIRI yönde.**

Proje kuralı *"çelişirse TDV esastır"* der. Burada **TDV'nin şüpheli olduğunu
düşünüyorum** ve gerekçem TDV'nin **kendi içindeki** sıra:
```
bizim veri   Belgrad avusturya 1688-09-06   ← TDV ile uyumlu
TDV          Niş     avusturya 1688-09-24   ← Belgrad'dan 18 GÜN sonra
```
Avusturya ordusunun Belgrad'ı 6 Eylül 1688'de alıp **18 gün içinde** 200 km
güneydeki Niş'i de alması, o seferin bilinen iki-kampanya yapısına aykırı.
Batı tarih yazımında Niş **24 Eylül 1689** muharebesiyle düşer — yani
**gün ve ay aynı, yıl bir eksik**: klasik bir yıl kayması işareti.

⚠️ **Kural ① ve ② birlikte işletildi:** iki çekiş yaptım, **ikisi de aynı
cümleyi** verdi ⇒ bu bir çekiş hatası değil, **TDV metninin kendisi.** Ama
`§4②` zaten *"iki çekiş de aynı yanlışı üretebilir"* diyor — çünkü ikisi de
aynı metni okuyor. Bağımsız veri gerekiyordu ve onu **kendi verimizden**
aldım (Belgrad 1688-09-06).

🔴 **KARAR BENDE DEĞİL.** İki sebeple koordinatöre bırakıyorum:
1. TDV'ye aykırı hüküm vermek `CLAUDE.md §4`'ün varsayılanını tersine çevirir —
   bu bir **oturum kararı değil, proje kararıdır.**
2. Elimde TDV'nin karşısına koyacak **akademik bir künye yok**; yalnız iç
   tutarlılık argümanı var. `§8`'e göre hükmüm **"doğrulanamadı"**dır,
   *"TDV yanlış"* değil.
⇒ **Öneri: veriye DOKUNULMASIN**, ve bu satır ikinci bir akademik kaynakla
(Habsburg sefer tarihçesi) sınansın. Veri bugün zaten `1689` diyor; yani
**hiçbir şey yapmamak en düşük riskli seçenek.**

🟡 **Yan bulgu — Vidin şüpheli:** Vidin, Niş ile **birebir aynı iki günü**
taşıyor (`1689-09-24` → `1690-09-09`). İki ayrı şehrin aynı gün düşüp aynı gün
geri alınması mümkün ama **kopyalama işareti** de olabilir. Vidin'in kendi
tarihleri ayrıca kaynaklanmalı — **bu turda sınanmadı.**
