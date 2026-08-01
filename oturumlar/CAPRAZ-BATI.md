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

## A-10 🔴🔴 İTİRAZ — 1789-91 `s:` DEĞİL `isg:` OLMALI

Koordinatör Semendire yamasını `s:avusturya` ile hazırladı ve gerekçesi:
*"Avusturya savaşta aldı, antlaşmayla iade etti; ayrıca Böğürdelen zaten
`s:avusturya` ile modellenmiş, 60 km'deki komşuyla tutarlı olmalı."*

**İtiraz ediyorum, ve dayanağım verinin KENDİ deseni.**

**① BİZDE NE VAR** — `isg:` kayıtlarının tamamı sayıldı: **72 kayıt**, ve
hepsinde **tek bir ölçüt** işliyor:

> **`d:` OSMANLI kesintisiz altta akmaya devam ediyor; başka bir güç fiilen
> tutuyor. Yani `isg:`'in ölçütü "savaşta alındı mı" değil — *Osmanlı
> hükümranlığı hukuken sağ kaldı mı?*"**

```
Bosna 1878-1908    d:OSMANLI →1908-10-05 · isg:avusturya 1878-1908 · s:avusturya 1908'de İLHAK
Mısır 1882-1914    d: sürüyor · isg:ingiltere
Mısır 1798-1801    d: sürüyor · isg:fransa          ← FRANSIZ İŞGALİ
Kefe  1771-1783    d: sürüyor · isg:rusya
```

**③ HÜKÜM: 1789-91, Mısır 1798-1801'in YAPISAL İKİZİDİR.**
```
Mısır 1798-1801    Fransa savaşta aldı · askerî idare kurdu · tamamen çekildi
                   · hükümranlık devri YOK          → isg:  ✓
Sırbistan 1789-91  Avusturya savaşta aldı · askerî idare kurdu · tamamen çekildi
                   · hükümranlık devri YOK          → s:    ✗ ŞU AN
```
Ziştovi (1791-08-04) bir **devir** değil **iade**dir — statüko ante'ye dönüş.
Osmanlı hükümranlığı hiçbir an hukuken sona ermedi. ⇒ Ölçüt `isg:`'i gösteriyor.

🔴 **Ve bu, Böğürdelen'in MEVCUT kaydının da yanlış olduğu anlamına gelir:**
`Böğürdelen s:avusturya 1788-04-24 → 1791-08-04` ⇒ `isg:` olmalı.
⚠️ **Koordinatörün "komşuyla tutarlılık" gerekçesi bu yüzden ters çalışıyor:**
tutarlılık **yanlış olanı çoğaltır.** Böğürdelen emsal değil, **düzeltilecek
ilk kayıt.**

### Karşılaştırma — 1717-1739 neden `s:` olarak DOĞRU
```
1717-1739  Pasarofça hükümranlığı DEVRETTİ      → s:avusturya   ✓ doğru
1788-1791  Ziştovi hükümranlığı İADE ETTİ       → isg:avusturya   düzeltme
```
İki dönem aynı şehirlerde geçiyor ama **hukukî nitelikleri farklı**, ve veri
bugün ikisini de aynı biçimde yazıyor. Fark **görünür**: `isg:` tarama
katmanıdır, `s:` taban rengini değiştirir. Bugünkü hâliyle harita
*"Avusturya buranın SAHİBİYDİ"* diyor; doğrusu *"Avusturya burayı İŞGAL
ETMİŞTİ"*.

📌 Ve `girdi.py` bunu zaten yazmış: *"işgal bir dönem TÜRÜ değil ÖRTÜ
katmanıdır… `d:/v:/s:` → DE JURE → taban rengi; `isg:` → DE FACTO → tarama."*
Ve **Bosna'yı örnek olarak veriyor**: *"1878 Avusturya işgali, 1908 ilhak —
ikisi AYRI gösterim."* 1789-91'in ilhakı **hiç olmadı.**

### Etki
```
düzeltilecek   Böğürdelen 1788-04-24 → 1791-08-04    s: → isg:
eklenecek      Semendire  1789-10-13 → 1791-08-04    isg:  (s: değil)
eklenecek      Belgrad    1789-10-?? → 1791-08-04    isg:  (günü KAYNAK'ta)
```
✅ **Yan kazanç:** `isg:` motor tarafından **okunmuyor** (taban rengi de jure
kalır) ⇒ bu düzeltme **petek geometrisini hiç değiştirmez**, yalnız örtü
katmanına girer. Üretim koşusu gerektirmez.
⚠️ Ama `uret_devirler.py`'nin `ISGALLER` üreticisine girer — MOTOR'un kalemi.

## A-11 🔴🔴 1737-39 SAVAŞI TEK GÜNE SIKIŞMIŞ — ve aynı savaşın Rus cephesi DOĞRU

**① BİZDE NE VAR.** 1737-01-01 – 1739-12-31 arasındaki **bütün** kırılmalar:
```
1737-07-13   Özi        d:bit OSMANLI · s:basla rusya      ← RUS CEPHESİ
1738-08-01   Özi        d:basla OSMANLI · s:bit rusya      ← RUS CEPHESİ
1739-09-18   20 uç      Belgrad · Böğürdelen · Kragujevac · Semendire · Çaçak
                        · Krayova · Rimnik · Turnu Severin · Tırgu Jiu · Rostov
--- 24 kırılma ucu, yalnız 3 ayrı tarih
```
Sahnedeki 19 noktanın **12'sinde 1737-39 arası hiç kırılma yok** (Niş · Vidin ·
Temeşvar · Yanova · Yenipazar · Ösek · Mohaç · Varadin · Baç · Segedin ·
İzvornik · Foça).

**③ HÜKÜM: ÇELİŞİYOR — ve iç tutarsızlık kendi verimizde görünüyor.**

🔴 **Aynı savaş, iki cephe, iki ayrı titizlik:**
```
RUS cephesi        Özi  1737-07-13 alındı → 1738-08-01 geri alındı   ✓ SEFER tarihleri
AVUSTURYA cephesi  hepsi 1739-09-18                                  ✗ tek ANTLAŞMA günü
```
⇒ Sorun *"proje bu konvansiyonu bilmiyor"* değil — **biliyor ve Rus cephesinde
uyguluyor.** Avusturya cephesi **yapılmamış.**

Kaynaklardan bilinen savaş arkı (TDV, bu oturumda çekildi):
```
1737 Temmuz   Seckendorf Niş'i aldı                      TDV nis   → veride YOK
1737 Ekim     Köprülüzâde Hâfız Ahmed Paşa geri aldı     TDV nis   → veride YOK
1738 Ağustos  Avusturyalılar Semendire bölgesinden çıktı TDV semendire → veride YOK
1739 Eylül    Belgrad ANTLAŞMAYLA teslim edildi          TDV belgrad → veride VAR ✓
```

### Hangi kayıt doğru, hangisi değil — ayırdım
```
✓ DOĞRU    Belgrad 1739-09-18       TDV: "Belgrad Antlaşması ile teslim edildi"
                                     — antlaşmayla devredildi, tarih yerinde
✓ MUHTEMEL Oltenya dörtlüsü 1739-09-18  Krayova · Rimnik · Turnu Severin · Tırgu Jiu
                                     antlaşmayla iade edildi (fethedilmedi)
✗ YANLIŞ   Semendire 1739-09-18     TDV: Ağustos 1738 → ~13 ay geç (A-6)
? AÇIK     Böğürdelen · Kragujevac · Çaçak 1739-09-18   kaynaksız, muhtemelen 1738
✗ EKSİK    Niş 1737-07 → 1737-10 Avusturya penceresi (A-8)
```

📌 **A-1'in kuralı burada da hakem:** *fiilen alınan yer fetih tarihiyle,
devredilen yer antlaşma tarihiyle.* Belgrad **devredildi** ⇒ `1739-09-18`
doğru. Semendire **fiilen kaybedildi** ⇒ 1738 olmalı. Grubun tek tip yazılmış
olması **kurala uyduğu için değil, ayrıştırılmadığı için.**

⚠️ **Ve A-6'daki hükmümü bu ölçüm tamamlıyor:** *"1739 grubu tek tip DEĞİL"*
demiştim; şimdi hangi üyenin hangi sınıfta olduğu da ayrıldı — **Belgrad'ı
düzeltmeye kalkmak geriletme olur**, yalnız Semendire (ve muhtemelen üç
komşusu) düzelir.

### İhtiyaç listesi
```
KESİN, hazır    Niş  1737-07 → 1737-10   isg:avusturya   (ay hassasiyetli)
KESİN, hazır    Semendire bitişi 1738-08 → ~1738-08-01   (ay hassasiyetli)
KAYNAK gerek    Böğürdelen · Kragujevac · Çaçak: 1738 mi 1739 mu
DOKUNMA         Belgrad 1739-09-18 · Oltenya dörtlüsü 1739-09-18
```
🔴 **Ve A-10 buraya da uzanıyor:** Niş 1737'si `s:` değil **`isg:`** olmalı —
Osmanlı hükümranlığı üç ay boyunca hukuken sürdü, Avusturya fiilen tuttu ve
**savaşsız** geri verdi. Aynı ölçüt, aynı sonuç.

## A-12 🔴 ÖLÇÜTÜ BÜTÜN KESİTE UYGULADIM — üç yeni aday

A-10 kabul edilince ölçütü **38 `s:avusturya` penceresinin tamamına** uyguladım.
Ölçüt (A-10'da kurulan): *"Osmanlı de jure hükümranlığı bu pencere boyunca
kesintisiz sürdü mü?"* Sürdüyse `isg:`, hukuken devrettiyse `s:`.

### ⚠️ ÖNCE — koordinatörün ölçüt tarifinde kayma var, düzeltiyorum
> Koordinatör: *"hükümranlık devretti mi (`s:`), yoksa **iade mi edildi**
> (`isg:`)? **1739 Belgrad Antlaşması iadedir**; 1718 Pasarofça devir."*

🔴 **Bu tarif 1717-1739'u `isg:`'e çevirir ve yanlış olur.** Ölçüt *"pencere
nasıl bitti"* değil, ***"pencere boyunca hükümranlık kimdeydi"***:
```
1717-1739   Pasarofça DEVRETTİ → Avusturya hükümran → s:   ✓  (bitişi iade OLSA DA)
1789-1791   devir YOK → Osmanlı hükümran → isg:            ✓
```
Bir pencere **iadeyle bitip** yine de `s:` olabilir — 1717-39 tam bu. Doğru
soru **başlangıçta** sorulur, bitişte değil.

### Sınıflandırma — 25 yıldan kısa bütün pencereler
```
✗ isg: ADAYI   Estergon  1595-09-02 → 1605-10-03   10,1 yıl   Uzun Savaş
✗ isg: ADAYI   Belgrad   1688-09-06 → 1690-09-09    2,0 yıl   zorla geri alındı
✗ isg: ADAYI   Niş·Vidin 1689-09-24 → 1690-09-09    1,0 yıl   zorla geri alındı
✓ s: DOĞRU     1717-08-17/18 → 1739-09-18          22,1 yıl   Pasarofça DEVRETTİ
✓ s: DOĞRU     Oltenya 1718-07-21 → 1739-09-18      21,2 yıl   Pasarofça DEVRETTİ
✓ s: DOĞRU     Bosna 1908-10-05 → 1918-11-11        10,1 yıl   İLHAK (öncesi zaten isg:)
✓ s: DOĞRU     Viyana·Graz 1918-11-11 →              5,0 yıl   ardıl devlet
```
Üçü de aynı sınıf: **savaşta alındı, hiçbir antlaşma devretmedi, zorla geri
alındı.** Mısır 1798-1801'in (`isg:fransa`) birebir yapısı — orası da zorla
geri alındı, antlaşmayla değil.

### 🔴 AMA BU BİR GENİŞLETME, UYGULAMA DEĞİL — karar projede
Ölçtüm: **mevcut 72 `isg:` kaydının hepsi 1771 ve sonrasıdır.**
```
Kefe   1771 · Mısır 1798 · Mısır 1882 · Bosna 1878
en eski isg: kaydı: 1771-07-01
```
⇒ `isg:` bugüne kadar **modern hukuk çağına** uygulanmış. 1595 ve 1688-90'a
uzatmak, de jure/de facto ayrımını **erken modern döneme taşımak** demektir ve
bu bir **oturum kararı değil**:
- Lehte: ölçüt tutarlı, Osmanlı hukukî görüşü de o toprakları "geçici
  kaybedilmiş" sayıyordu
- Aleyhte: 1595'te "işgal" kavramının bugünkü hukukî karşılığı yok; her kısa
  savaş penceresini `isg:`e çevirmek **kategoriyi seyreltebilir**

⇒ **Önerim: 1789-91 ve 1737 paketi uygulansın** (orada karar zaten verildi ve
dönem 1771 sonrası ölçütüne yakın). **1595 · 1688-90 için önce karar
verilsin.** Ben ölçtüm ve sınıfladım; **veriye dokunulmasın.**
📌 `§8`: hükmüm bu üçü için **`DOĞRULANAMADI`** — ölçüt uyuyor, **uygulanabilirliği
belirsiz.**

### ✅ Yan doğrulama — iki düzeltmem yayına girmiş
```
Ljubljana  s:avusturya 1335-05-02 → …   ✓ B-4 uygulanmış (1281 değil)
Dubrovnik  s:avusturya 1814-01-01 → …   ✓ V-1 uygulanmış, kayıt haritada
```
Ve `Uyvar 1281-01-01 → 1663-09-24` **hâlâ duruyor** — B-5 (kur:1545 +
macaristan + 1663-09-26) Macaristan paketine bağlı olduğu için beklemede,
beklendiği gibi.

---

## 🔴 B-1'İN "ÇÜRÜTÜLMESİ" — commit diff'iyle kapandı

1 Ağustos akşamı ÇAPRAZ AKDENİZ B-1'i sınayıp *"tutmuyor, ölçüm artefaktı"*
dedi; koordinatör doğrulayıp *"126,5 yıl hayalet yoktu"* diye kabul etti.
**İkisi de post-fix kaydı okumuş.** Kesin delil, düzeltmeyi yapan commit'in
kendi diff'i:

```
$ git show 894bb82 -- data/yerlesimler.js   # 1 Ağustos 14:06
                                            # "Ayamavra tam zincir (CAPRAZ-BATI.md B-1/B-2)"

- s:[{…napoli}, {f:"1684-08-06", t:"1923-10-29", d:"venedik"}]      ← ÖNCE: TEK PENCERE
+ s:[{…napoli}, {f:"1684-08-06", t:"1715-09-01", d:"venedik"},
+                {f:"1718-07-21", t:"1797-10-17", d:"venedik"},
+                {f:"1797-10-17", t:"1815-11-05", d:"fransa"},
+                {f:"1815-11-05", t:"1864-05-21", d:"ingiltere"},
+                {f:"1864-05-21", t:"1923-10-29", d:"yunanistan"}]   ← SONRA
```
⇒ **`t:"1923-10-29"` gerçekten `d:"venedik"` penceresinin bitişiydi.** Artefakt
değildi; kayıt bugün doğru olduğu için öyle görünüyor.

### Yanlış doğrulamanın ortak sebebi — iki oturumda da aynı araç
```
git log -S'Ayamavra'   → 39f3f49 (29 Tem)   "dosya değişmemiş" sonucu
git log -G'Ayamavra'   → 078ad4d · 894bb82 (1 Ağu)   GERÇEK
```
`-S` **pickaxe**'tir: dizgenin **sayısı** değişmediyse commit'i göstermez.
Kaydın **içindeki** dönemleri düzenlemek `"Ayamavra"` sayısını 1'de bırakır.

🔴 **Somut risk:** B-1 *"çürüdü"* diye kayda geçerse, `894bb82` geri alınabilir
ve **hata geri gelir.** Bu satır tam onu önlemek için yazıldı.

### 🟢 Ve koordinatörün buradaki ölçümü DOĞRU, ayrı tutulmalı
```
venedik penceresi dizin t:'si (1797-05-12) sonrasına taşan: 19 KAYIT, hepsi → 1797-10-17
fark: 5 ay  (Cumhuriyet'in düşüşü 12 Mayıs ↔ Campo Formio 17 Ekim 1797)
```
`CLAUDE.md §3.5`: *"teslim gecikmeleri… yıllar değil **aylar mertebesinde**
olmalıdır"* ⇒ **5 ay meşru, hayalet değil.** Bir sonraki tur bu 19 kaydı
görürse *"hayalet"* dememeli — **ölçüldü ve meşru.**

### 📌 Kendi payıma çıkardığım ders
Koordinatörün önerisi haklı: *"X devleti Y yıl fazla"* derken **hangi
pencerenin `d:`si okundu** yazılmalı. B-1'i yazarken kaydın tamamını dökmüştüm
ama **raporda yalnız uç tarihleri** verdim; sınayan kişi hangi pencereden
geldiğini göremedi. Bulgu doğruydu, **sunumu sınanabilir değildi.**

## A-13 📊 SAYIM — `isg:` genişletmesi kaç vakayı kapsar

Koordinatör *"kesitinin tamamında kaç tane var? Ölç, ama yazma"* dedi.
Ölçütü mekanikleştirdim: **`d:`OSMANLI → `s:`yabancı → `d:`OSMANLI sandviçi**
(toprak Osmanlı'ya geri dönüyor ⇒ devir kalıcı değildi).

### Benim kesitim — 10 sandviç, ama yalnız **4'ü aday**
```
✗ ADAY   Niş        1689-09-24 → 1690-09-09    1,0 yıl   zorla geri alındı
✗ ADAY   Vidin      1689-09-24 → 1690-09-09    1,0 yıl   zorla geri alındı
✗ ADAY   Belgrad    1688-09-06 → 1690-09-09    2,0 yıl   zorla geri alındı
✗ ADAY   Estergon   1595-09-02 → 1605-10-03   10,1 yıl   zorla geri alındı
─────────────────────────────────────────────────────────────────────
✓ s: DOĞRU  Belgrad·Kragujevac·Çaçak·Böğürdelen 1717→1739  Pasarofça DEVRETTİ
✓ s: DOĞRU  Semendire 1717-08-18 → 1738-08-01              (A-6 uygulanmış ✓)
✓ s: DOĞRU  Böğürdelen macaristan 1476-02-01 → 1521-07-07  45,4 yıl — Macar
            GERİ FETHİ (Matthias Corvinus 1476), işgal değil
```
⇒ **Cevap: 4.** Üçünü A-12'de bulmuştum, sayım dördüncüyü doğruladı ve
altısını eledi.

### 🔴 VE GENİŞLETMENİN ASIL RİSKİ — bütün veride 134 sandviç
```
safevi 21 · venedik 12 · aydin 11 · candar 10 · rusya 9 · avusturya 9 ·
mehmed-celebi 7 · yemen 7 · mentese 6 · memluk 6 · germiyan 6 · bizans 5 …
--- 22 kimlik, TOPLAM 134 pencere
```
🔴 **Sandviç ölçütü tek başına uygulanırsa 134 pencereyi süpürür** — ve
listenin başı **Anadolu beylikleri**: `aydin` 11 · `candar` 10 · `mentese` 6 ·
`germiyan` 6 · `teke` 4 · `karaman` 3. Beylik dönemindeki el değiştirmeler
**işgal değil**; orada "de facto/de jure ayrımı" kavramsal olarak yok.

⇒ **Sandviç gerekli ama yeterli değil.** İkinci şart olmadan kategori
seyrelir — ki A-12'deki çekincem tam buydu, şimdi **sayıyla** duruyor:
```
sandviç                     134  ← ölçüt yalnız bu olursa
+ "devir hiç olmadı"          ?   ← her vakada KAYNAK gerekiyor
+ 1771 sonrası (bugünkü isg:) 0   ← benim 4 adayımın hiçbiri bu bandda değil
```
📌 Benim 4 adayım **1595-1690** arasında; mevcut 72 `isg:` kaydının hepsi
**1771+**. Yani genişletme yapılırsa **81-176 yıl geriye** uzanır.

**③ HÜKÜM: ÖLÇÜLDÜ, YAZILMADI.** Veriye dokunulmadı, karar koordinatörde.

## A-14 ✅ 1683 ÖNCESİ KUŞAK — Estergon ve Zigetvar TEMİZ, Uyvar bilinen

```
Estergon   s:macaristan 1281 → 1543-08-10 · d: 1543-1595 · s:avusturya 1595-1605
           · d: 1605-1683 · s:avusturya 1683-1918 · s:macaristan 1918-1923
Zigetvar   s:macaristan 1281 → 1566-09-07 · d: 1566-1689 · s:avusturya 1689-1918
           · s:macaristan 1918-1923
Uyvar      s:avusturya 1281 → 1663-09-24 · d: 1663-1685 · s:avusturya 1685-1918
           · s:cekoslovakya 1918-1923
```
**③ HÜKÜM: UYUYOR** — iki kayıtta kusur yok.
- **Estergon** doğru: Macar → 1543 Osmanlı fethi → 1595-1605 Avusturya
  (A-13'ün adayı) → 1605 geri alınış → 1683. `y:"kusatma"` iki fetihte de yazılı.
- **Zigetvar** doğru: Macar → **1566-09-07** fetih (Kanûnî'nin kuşatması) →
  1689 Avusturya. Tek pencere, temiz.
- **Uyvar** — kusurları **B-5'te zaten raporlandı** (yanlış kimlik + `kur:`
  yok + fetih günü `1663-09-24` yerine TDV `1663-09-26`). Macaristan paketine
  bağlı, beklemede.
✅ Ve Uyvar'ın 1918 sonrası **`cekoslovakya`** yazılmış — Nové Zámky için doğru.

### Koordinatörün Uyvar sorusuna cevap
> *"Uyvar 1685'te **iade mi edildi, fethedildi mi**?"*

**FETHEDİLDİ.** TDV `uyvar`: *"7 Temmuz'da başlayan kuşatma, kale ve şehrin
**19 Ağustos 1685**'te Habsburg denetimine geçmesiyle sona erdi."* ⇒
`s:avusturya 1685-08-19` bir **fetih tarihidir**, doğru yazılmış; A-1 kuralına
uygun. Ve Uyvar bir daha Osmanlı'ya dönmediği için **sandviç değil**, `isg:`
sorusu hiç doğmuyor.

## A-15 🔴 1918 SONRASI ALTI KAYIT HÂLÂ "AVUSTURYA" — biri BENİM hatam

**① BİZDE NE VAR.** Macar tacının 30 yerleşimini 1910/1919/1922 kesitlerinde
ölçtüm. **25'i 1918-11-11'de doğru ardıla geçiyor** (macaristan · romanya ·
yugoslavya · çekoslovakya · sırbistan). **6'sı geçmiyor:**
```
yerleşim                1910        1919        1922        olması gereken
Peşte                   avusturya   avusturya   avusturya   macaristan
İstolni Belgrad         avusturya   avusturya   avusturya   macaristan
Yanıkkale (Győr)        avusturya   avusturya   avusturya   macaristan
Varad (Oradea)          avusturya   avusturya   avusturya   romanya
Yanova (Ineu)           avusturya   avusturya   avusturya   romanya
Dubrovnik               avusturya   avusturya   avusturya   yugoslavya  ← BENİM HATAM
```
Avusturya-Macaristan **11 Kasım 1918'de** dağıldı; bu altı nokta 1923'e kadar
onun rengini taşımaya devam ediyor.

### 🔴 En keskin vaka — BUDAPEŞTE İKİYE BÖLÜNMÜŞ
```
Budin  (47.498, 19.040)   avusturya 1686-09-02 → 1918-11-11 · macaristan 1918-11-11 → 1923 ✓
Peşte  (47.494, 19.060)   avusturya 1686-09-02 → 1923-10-29                                ✗
                          aradaki mesafe: 1,57 km
```
⇒ **Aynı şehrin iki yakası, 1918-1923 arası iki ayrı devlet.** Tuna'nın bir
yanı Macaristan, öteki yanı Avusturya. Kullanıcının ekranda görebileceği en
belirgin sınıftan bir hata — ve **Değişmez 3'ün (`k`/`m` merkez tutarlılığı)
göremediği** bir tür, çünkü ikisi de kayıt olarak tutarlı.

📌 `CLAUDE.md §11` *"yakın mükerrer yerleşim"* tuzağını anlatıyor (Varat/Varad,
Afyon/Karahisâr **çelişen zaman çizgileriyle**). Budin/Peşte mükerrer değil —
**gerçekten iki ayrı nokta** — ama aynı sınıfın akrabası: 1,57 km arayla
çelişen zaman çizgisi.

### 🔴 Ve altıncısı benim: DUBROVNİK
V-1'de önerdiğim kayıtta son satırı şöyle yazmıştım:
```
s: 1814-01-01 -> 1923-10-29   d=avusturya
```
**1918 ardılını hiç koymadım.** Komşuları (Zagreb · Ösek · Varadin · Baç)
1918-11-11'de `yugoslavya`ya geçiyor; Dubrovnik geçmiyor.
⇒ Kendi bulduğum *"zinciri yazan el beş adadan dördünü yapmış"* hatasının
aynısını **kendi önerimde** yaptım: zincirin sonunu kapatmadım.
📌 Ve V-1'de `1814-01-01`'i **`ZAYIF`** diye işaretlemiştim, ama eksikliği
işaretlememiştim — **zayıf olan tarih değil, eksik olan penceredir.**

### Önerilen düzeltme — tarih emsalden, yeni renk YOK
25 doğru kaydın hepsi `1918-11-11` kullanıyor; aynı gün alınır.
```
Peşte            avusturya → 1918-11-11 · macaristan 1918-11-11 → 1923-10-29
İstolni Belgrad  aynı                                    (Székesfehérvár, Macaristan)
Yanıkkale        aynı                                    (Győr, Macaristan)
Varad (Oradea)   avusturya → 1918-11-11 · romanya    1918-11-11 → 1923-10-29
Yanova (Ineu)    aynı                                    (Ineu, Romanya)
Dubrovnik        avusturya → 1918-11-11 · yugoslavya 1918-11-11 → 1923-10-29
```
✅ `macaristan` · `romanya` · `yugoslavya` üçü de `BOYALAR`'da **var**
(emsallerde kullanılıyor) ⇒ **yeni renk gerekmiyor.**
⚠️ Trianon **4 Haziran 1920**'dir; ama veri **fiilî çözülmeyi** (1918-11-11)
kullanıyor ve **25 kayıtta tutarlı.** A-1 kuralı da bunu destekliyor: fiilî
değişim fiilî tarihle. **Emsalden sapılmamalı.**
🟡 Romanya ayağı için not: Erdel ve Temeşvar zaten `romanya 1918-11-11` —
Varad ve Yanova onlarla aynı bölgede, aynı gün doğru.

## A-16 📊 "KISMEN YAZILMIŞ OLAY" TARAMASI — kesitim TEMİZ, tek istisna 1918

`OGRENILENLER §80`'in deseni (*"olay birkaç noktaya yazılıyor, gerisi eski
penceresinde kalıyor"*) kesitimin bütün büyük olaylarında arandı.

**Ölçüt** (dış kaynak istemiyor, doğrusu veride): olay günü `D` için ①
kırılan noktalar kümesi ② `D`'de kaybeden tarafta olup **kırılmayan** ve
yazılanlara ≤150 km olan noktalar. ②'nin **meşru olarak etkilenmemiş**
olanları elenir.

### Sonuç — altı olayda YANLIŞ YOK
```
1526-09-01 Mohaç      9 yazılmış · 15 aday → HEPSİ MEŞRU (o şehirler 1543-1566'da düştü)
1541-08-29 Budin      6 yazılmış · 12 aday → HEPSİ MEŞRU (aynı sebep)
1683-10-09 Estergon   1 yazılmış · 10 aday → HEPSİ MEŞRU (Budin 1686, Uyvar 1685'te düştü)
1699-01-26 Karlofça   5 yazılmış ·  0 aday → TEMİZ
1718-07-21 Pasarofça  6 yazılmış · 18 aday → HEPSİ MEŞRU
1739-09-18 Belgrad    9 yazılmış ·  4 aday → HEPSİ MEŞRU
```
📌 **Pasarofça özellikle iyi çıktı:** yazılan dört Eflak noktası (Krayova ·
Turnu Severin · Rimnik · Tırgu Jiu) **tam olarak Oltenya'dır**; yazılmayanlar
(Slatina · Piteşti · Kımpulung · Tırgovişte) **Olt'un doğusunda**, yani
Eflak'ta kaldılar — doğru. Sınır nehir hassasiyetinde tutmuş.
📌 **1739'da** Varadin · Baç · Ösek · Temeşvar'ın `avusturya` kalması da
doğru: Belgrad Antlaşması Banat'ı ve Bácska'yı Avusturya'da bıraktı.

### 🔴 TEK İSTİSNA: 1918-11-11 — ve A-15'ten DAHA GENİŞ
Aynı tarama **pozitif kontrol** olarak 1918'e uygulandı ve A-15'in altısını
yakaladı — **artı dokuz tane daha.** A-15 yalnız "Macar tacı" kümesine (30
yerleşim) bakıyordu; tarama coğrafi olduğu için **Adriyatik ve Bukovina'yı da**
gördü:
```
40 nokta 1918-11-11'de doğru kırılıyor · 15 nokta kırılmıyor:

macaristan olmalı   Peşte (1,6 km!) · İstolni Belgrad · Yanıkkale (Győr)
romanya olmalı      Varad (Oradea) · Yanova (Ineu) · Çernovitz (Çernivtsi)
yugoslavya olmalı   Dubrovnik
KAYNAK GEREK        Brakya · Hvar · Korçula · Mliyet · Krk · Vis · Cres · Rab
```
⇒ **A-15'i genişletiyorum: 6 değil 15 kayıt.**

### ⚠️ SEKİZ ADA İÇİN HÜKÜM VERMİYORUM — Rapallo böldü
Sekiz Dalmaçya adası `s:avusturya 1797-10-17 → 1923-10-29` taşıyor ve 1918'de
kırılmıyor. **Kırılmamaları KESİN bir kusur** (Avusturya-Macaristan 1918'de
dağıldı). Ama **ardılları tek değil**: 1920 Rapallo Antlaşması Adriyatik'i
İtalya ile Yugoslavya arasında **böldü** ve hangi adanın hangisine gittiği
ada ada değişiyor.
⇒ `§8`: bu sekizi için hükmüm **`DOĞRULANAMADI`** — *"1918'de kırılmalı"*
kısmı `KESİN`, *"kime geçmeli"* kısmı **kaynak istiyor.**
🔴 **Ve bu ada kümesi ÇAPRAZ AKDENİZ'in kesitinde** (Venedik → Avusturya
zinciri). Ölçümü onlara devrediyorum; ben yalnız **kırılmadıklarını** ölçtüm.

### 📌 Yöntem notu
Tarama **altı olayda sıfır yanlış pozitif** verdi ve **bilinen kusuru
yakaladı** — yani ölçüt çalışıyor. Ama tek başına yetmiyor: ham aday listeleri
gürültülü (Mohaç'ta 15 aday, hepsi meşru). **Eleme elle yapıldı**, çünkü
*"meşru olarak etkilenmemiş"* sorusu tarih bilgisi istiyor.
⇒ Bu ölçüt bir **denetim betiğine** çevrilecekse, çıktısı *"hata"* değil
**"bakılacak liste"** diye etiketlenmeli. Aksi hâlde `§4④`'ün tuzağına
düşer: ölçmeden eşik koymak.

## A-17 📊 §80'İN ORANI + MEKANİZMA DÜZELTMESİ + ATTIĞIM BİR ÖLÇÜM

### Koordinatörün sorduğu oran (A-16'dan)
> *"1918'de 25 doğru / 6 eksik çıktı. Öteki olaylarda oran ne?"*
```
1526 Mohaç      9 yazılmış ·  0 eksik
1541 Budin      6 ·  0
1683 Estergon   1 ·  0
1699 Karlofça   5 ·  0
1718 Pasarofça  6 ·  0
1739 Belgrad    9 ·  0
────────────────────────────
1918 dağılma   40 · 15 eksik     ← TEK istisna, %27
```
⇒ **Kesitimde §80 yaygın DEĞİL — tek bir olayda toplanıyor.**

### 🔴 VE MEKANİZMA §80'DEN FARKLI — düzeltme
15 kaydın **hepsinin** son penceresi tam olarak `1923-10-29`'da bitiyor —
yani **atlas ufkunda.** Bu *"olay birkaç noktaya yazıldı, gerisi unutuldu"*
değil:
```
§80        olay yazılırken bazı noktalar atlandı        → dağınık, olayla ilgili
A-16/1918  kayıt UFKA kadar kapatıldı, sonra dönülmedi  → toplu, ufukla ilgili
```
⇒ **İkisi ayrı sınıf.** §80 *"kısmen yazılmış olay"*, bu *"ufka kadar yazıp
bırakmak"*. Ve ikincisinin **doğal bir toplanma yeri** var: atlasın son 5 yılı.
📌 Sonucu pratik: §80 için olay olay aramak gerekir; bu sınıf için **tek
sorgu yeter** — *"son penceresi ufukta biten kayıtların kimliği o tarihte
yaşıyor mu?"*

### ⚠️ VE O SORGUYU KOŞTUM — SONRA ATTIM (`§7.5`)
Ufka uzanan bütün `s:` pencerelerini kimliğe göre saydım ve dizin ömrüyle
karşılaştırdım. **Sekiz kimlik "devlet ölmüş ama pencere ufka gidiyor" diye
kırmızı yandı** — `iran` 100 · `rusya` 87 · `fransa` 78 · `romanya` 22 ·
`sirbistan` 20 · `macaristan` 16 · `bulgaristan` 13 · `arnavutluk` 7.

**Sayı büyüktü ⇒ önce yöntemi sorguladım (`ORGANIZASYON §7.5`), ve yöntem
yanlıştı:**
```
macaristan  ← macaristan(t=1526) · macaristan-habsburg(t=1918) · macaristan-naiplik(t=1923)
sirbistan   ← sirp-despotlugu(1459) · sirbistan-prensligi(1882) · sirbistan-kralligi(1918)
bulgaristan ← bulgar-carligi(1396) · bulgaristan-prensligi(1908) · bulgaristan-kralligi(1923)
iran        ← afsar(1796) · kacar(1923)
```
Bir `harita:` değerine **birden çok dizin kaydı** bağlı ve benim aramam
**en erken `t:`yi** alıyordu. ⇒ **Sekiz kırmızının beşi benim ölçüm hatam.**
**Rapor edilmedi.**

### ✅ Elemeden sonra kalan ÜÇ gerçek boşluk — B-2'nin TERSİ
Bunlarda `harita:` değerine **tek** dizin kaydı bağlı ve o kayıt ufuktan
önce bitiyor; **sonraki dönemi kapsayan kayıt yok:**
```
fransa      ← yalnız fransa(t=1792-09-21)            78 pencere ufka gidiyor
rusya       ← yalnız rusya(t=1917-03-15)             87 pencere
arnavutluk  ← yalnız arnavutluk-iskenderbey(1479)     7 pencere
```
📌 **B-2'nin aynadaki hâli:** orada *dizinde olup haritada kullanılmayan*
kayıt vardı (`macaristan-habsburg`); burada *haritada kullanılıp dizinde
karşılığı olmayan* dönem var. **İki yön de ölçülmeli.**
🔴 **Üçü de benim kesitimin DIŞINDA** — Fransa ÇAPRAZ DOĞU'da, Rusya
KUZEY'de, Arnavutluk atanmamış. **Ölçtüm, devrediyorum, hüküm vermiyorum.**

### 🟡 Kesitimdeki karşılığı: `avusturya-cumhuriyet`
```
devletler.js  avusturya-cumhuriyet  f=1918-11-12  t=1923-10-29  harita: YOK
```
⇒ Viyana ve Graz 1918-11-11'de **doğru kırılıyor** ama sonraki pencere yine
`avusturya` — yani **imparatorluk ile cumhuriyet aynı renkte.** Kusur değil
(kırılma var, sahip doğru) ama dizin ayrımı haritaya **yansımıyor.**
`§8` hükmü: **UYUYOR**, not olarak kayda geçti.

---

## A-18 🔴🔴 YUKARI MACARİSTAN'DA OSMANLI FAZLA GÖRÜNÜYOR — ~28.000 km², 91 yıl

> `CLAUDE.md §3.5.1`: *"On beş oturum boyunca kimse şunu sormadı: **Osmanlı,
> olmadığı yerde ve olmadığı tarihte boyanıyor mu?**"* — kesitimde sordum,
> cevap **evet** ve ölçek büyük.

**① BİZDE NE VAR.** Yukarı Macaristan'da (bugünkü Slovakya + KD Macaristan)
**hiç yerleşim noktası yok.** En yakın noktalar:
```
Kassa (Košice)     → Eğri, 112,1 km      Yukarı Macaristan'ın BAŞKENTİ
Tokaj              → Eğri,  80,7 km
Eperjes (Prešov)   → Eğri, 137,8 km
```
Eğri **1596-10-12 → 1687-12-17** arası Osmanlı. `CLAUDE.md §2`'nin emilme
kuralı gereği bu noktasız bölge **Eğri'nin peteğine düşüyor ve Osmanlı
boyanıyor:**
```
                    1570        1600      1650      1680
Kassa (Košice)      macaristan  OSMANLI   OSMANLI   OSMANLI
Tokaj               macaristan  OSMANLI   OSMANLI   OSMANLI
Eperjes (Prešov)    macaristan  OSMANLI   OSMANLI   OSMANLI
```

**Alan ölçümü** (48,0-49,6°K / 18,8-22,6°D kutusu, 0,05° ızgara, 1650 kesiti):
```
toplam kutu            51.178 km²
  OSMANLI              27.982 km²   %54,7   ← 91,2 YIL boyunca
  lehistan             19.577 km²   %38,3
  tabi (Erdel)          2.210 km²    %4,3
  avusturya             1.408 km²    %2,8
```

**② KAYNAKTA NE VAR.** Yukarı Macaristan **hiçbir zaman Osmanlı eyaleti
olmadı.** Kassa, Habsburg'un **Yukarı Macaristan Kaptanlığı'nın** merkeziydi;
bölge Kraliyet Macaristanı'nın çekirdeğiydi. Bocskai (1604-06) ve Bethlen
dönemlerinde **Erdel prenslerinin** eline geçti — ama Erdel Osmanlı'ya tâbi
bir prenslikti, **Osmanlı eyaleti değildi**, ve harita bu farkı zaten `v:`
ile ifade edebiliyor (Erdel öyle modellenmiş).

**③ HÜKÜM: ÇELİŞİYOR — ve bu bir VERİ hatası değil, NOKTA EKSİĞİ.**
Kod doğru, motor doğru, Eğri'nin kaydı doğru. **Bölgede nokta olmadığı için**
petek 112 km öteden geliyor. `CLAUDE.md §2`'nin *"bir 'harita yanlış' raporu
geldiğinde ilk sorulacak soru budur"* dediği vaka.

### 🟢 Öneri: dört nokta — yeni renk YOK
```
Kassa (Košice)     48,72 / 21,26    macaristan → 1526 · Kraliyet Macaristanı
Tokaj              48,12 / 21,41    aynı
Eperjes (Prešov)   49,00 / 21,24    aynı
Sopron             47,68 / 16,59    aynı (Viyana'dan 61 km, avusturya boyanıyor)
```
`macaristan` · `avusturya` zaten `BOYALAR`'da. 3 km kuralı temiz (en yakınları
35+ km). ⚠️ Bunlar **B-2'nin kapsamına giriyor** (Kraliyet Macaristanı =
`macaristan-habsburg`) ⇒ **kullanıcının ertelediği pakete bağlı.**

⚠️ **ÖLÇÜMÜN SINIRI, dürüstçe:** ızgara **proxy**'dir — gerçek petek
`uret_petek.py`'de kara maskesi, nehir ve sırt yaslamasıyla kesiliyor, sayı
birebir aynı çıkmaz. **Mertebe kesin** (on binlerce km²), **rakam yaklaşık.**
Kesin değer üretilmiş `donemler.js`'ten okunur; ben girdi üzerinden ölçtüm.

## A-19 🟡 GYULA — 1566'da Osmanlı sancağı oldu, haritada `tabi` görünüyor
```
Gyula 46,65 / 21,28   en yakın: Yanova (Ineu), 43,2 km
                      1570 tabi · 1600 tabi · 1650 tabi · 1680 OSMANLI
```
Gyula **1566'da fethedildi ve sancak merkezi oldu**; harita onu Yanova'nın
Erdel penceresinden **tâbi** gösteriyor, 1680'e kadar. Yani burada Osmanlı
**eksik** görünüyor — A-18'in tersi, aynı sebepten (nokta yok).
📌 İkisi birlikte `§3.5.1`'in dersini tamamlıyor: **noktasızlık iki yöne de
hata üretir**, ve hangi yöne ürettiği komşunun kimliğine bağlı.
🟡 Hüküm **`DOĞRULANAMADI`** — Gyula'nın 1566 fethini TDV'den teyit etmedim,
`gyula`/`gula` slug'ı sınanmadı. **Nokta önerisi, tarih değil.**

## A-20 🔴 KAPSAMA TARAMASI — Yukarı Macaristan kesitimin "Batı Sahra"sı

A-18'i **tahminle** bulmuştum (aday şehir listesi). Sistematik taradım ve
sorun tahmin ettiğimden **kat kat büyük** çıktı.

**Sahne taraması** (44,5-50,0°K / 15,0-24,0°D, 0,10° ızgara, en yakın noktaya
55 km+ olan hücreler kümelendi):
```
merkez 48,25K 19,10D   ~142.083 km²   azami 195,4 km   ← YUKARI MACARİSTAN
merkez 48,78K 22,47D   ~ 29.559 km²   azami 175,5 km   ← Karpat / Rutenya
merkez 45,74K 22,80D   ~ 12.023 km²   azami 100,8 km   ← Banat dağları
merkez 45,16K 16,44D   ~ 12.059 km²   azami  91,4 km   ← Posavina
```
⇒ En büyük boşluk **142.000 km²** — A-18'de ölçtüğüm 51.178 km²'lik kutu onun
**yalnız bir parçasıymış.**

### Projenin kendi ölçeğiyle karşılaştırma
Aynı yöntemle (ızgara hücresinden en yakın yerleşime) ölçtüm:
```
bölge                 medyan    %90    azami
Yukarı Macaristan     105,8    150,8   175,5     ← AYKIRI
Macar ovası            32,6     57,8    82,4
Anadolu                39,2     71,0   115,8
Rumeli                 32,8     63,0    90,6
```
🔴 **Yukarı Macaristan'ın medyanı, Macar ovasının/Anadolu'nun/Rumeli'nin
ÜÇ KATI** — ve %90'ı (150,8), Macar ovasının **azamisini** (82,4) aşıyor.

📌 **Ve bu tam olarak `YAPILACAKLAR §çöl tavanı`'nın deseni:**
> *"Anadolu 47 · Rumeli 57 · Mısır 81 · Libya 124 · Arabistan 176 ·
> **Batı Sahra 417 ← tek bozuk bölge**"*

Yukarı Macaristan **105,8** ile Libya ile Arabistan arasında oturuyor.
⇒ **Kesitimin geri kalanı sağlıklı** (Macar ovası Rumeli kadar yoğun);
sorun tek bir bölgede toplanıyor — Batı Sahra vakasının birebir aynısı.

**③ HÜKÜM: ÖLÇÜLDÜ.** Nokta önerisi A-18'de (Kassa · Tokaj · Eperjes ·
Sopron) ama **dört nokta 142.000 km²'yi kapatmaz** — bu bir *yerleşim
araştırması* işi, benim kesitimin değil. `MIMARI §5`'in yoğunluk ölçütü
gerekiyor.
⚠️ Karşılaştırma bölgeleri **benim çizdiğim kutulardır**, `YAPILACAKLAR`'ın
resmî bölge tanımları değil — **yöntem** karşılaştırılabilir, **rakam** birebir
değil.

## A-21 🔴 KENDİ EŞİĞİM ÜÇ KAYDI SESSİZCE KESTİ — ve doğru sayı 12

ÇAPRAZ AKDENİZ taramamı genişletip **10 ada** buldu (benim 8'ime karşı).
Kendim ölçtüm: **doğru sayı 12**, ve ikimiz de eksiktik:
```
1918-11-11'i aşan avusturya penceresi: 12 nokta
  10 Dalmaçya adası  (AKDENİZ'in sayısı)
+ Suçava (Suceava) · Çernovitz (Çernivtsi)   ← Bukovina, ada değil
```
AKDENİZ Dalmaçya'ya filtrelediği için Bukovina'yı, ben **150 km eşiği**
koyduğum için üçünü kaçırdım:
```
Pag (Pago)          yazılanlara 168,0 km   ← eşiğimin dışında
Suçava (Suceava)                158,7 km   ← eşiğimin dışında
Uzunada (Dugi Otok)             158,6 km   ← eşiğimin dışında
Rab (Arbe)                      145,3 km   ← eşiğin 5 km içinde kaldı
```
🔴 **Üçü de eşiğin hemen dışında.** Bu bir *"sessiz kırpma"*: A-16'da
*"≤150 km"* yazdım ama **neyin dışarıda kaldığını raporlamadım.**

**③ DERS — ve ölçüt düzeltiliyor:**
> **Bir keşif taramasında YAKINLIK eşiği kullanma.** Ölçüt, aranan
> **özelliğin kendisi** olmalı: *"X kimliğinin penceresi, X'in sona erdiği
> tarihi aşıyor mu?"* — bu soru mesafe bilmez ve 12'sini de bulur.

📌 Yakınlık eşiği **teşhiste** (aday daraltma) meşru, **envanterde** değil.
A-16'da ikisini karıştırdım: envanter çıkarıyordum, teşhis aracı kullandım.
⚠️ Ve `§4④` zaten söylüyordu: *"ölçmeden eşik koyma."* 150'yi ölçmeden koydum.
