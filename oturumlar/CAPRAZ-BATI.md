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
Pozsony **Kraliyet Macaristanı'nın başkenti** ve 1536-1783 arası taç giyme
şehriydi. Aynısı **Zagreb** (Hırvatistan-Slavonya, Macar tacı).
İkinci keskin vaka **1867-1918**: Ausgleich'ten sonra Macaristan eş-egemen
krallıktı; harita Budapeşte'yi **51 yıl** "Avusturya" gösteriyor.

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

## SIRADAKİ

1. **Venedik adaları** (kullanıcının kendi sorusu) — Girit · Kıbrıs · Rodos ·
   Modon · Koron · Preveze · Parga · Dubrovnik. Slugların hepsi KAYNAK
   oturumunda **canlı** doğrulanmış; `preveze-deniz-savasi` ölü, doğrusu
   `preveze-deniz-muharebesi`.
2. **1699 Karlofça** — kasıtlı örtüşme noktası (`§1`): benim Avusturya ve
   Venedik'im + KUZEY'in Lehistan ve Rusya'sı. Dört kaynak karşılaştırılacak.
3. **Uyvar `kur:`** TDV'den teyit.

## KOORDİNATÖRDE BEKLEYEN KARARLAR
1. **B-2 renk seçimi** (a/b/c) — kullanıcı kararı, harita görünür değişiyor.
2. **B-4 Viyana/Graz** — dizinin `f:`'i mi geri çekilecek?
3. **B-6** — Fransa'ya başlamadan `yerlesimler_avrupa.js` merge sırası.
4. B-1 ve B-5'in uygulaması kime gidiyor — YAMACI mı?
