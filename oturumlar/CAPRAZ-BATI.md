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

**③ HÜKÜM: ÜÇÜ FARKLI, tek düzeltme olmaz.**
- **Viyana · Graz — dizin dar.** Habsburglar Avusturya'yı 1278 Marchfeld'den
  sonra, 1282 tevcihiyle aldı. Dizin kaydı 1526'da başlıyor çünkü *"Osmanlı'nın
  komşusu Habsburg"* diye tanımlanmış. ⇒ **Veri doğru, dizin kaydının `f:`'i
  geriye çekilmeli.**
- **Ljubljana — veri yanlış.** Kranj (Carniola) Habsburg'a **1335**'te geçti.
  54 yıllık gerçek anakronizm.
- **Uyvar — çift hata**, aşağıda.

---

## B-5 🟡 UYVAR — iki kat yanlış

**① BİZDE NE VAR:** `s:avusturya 1281-01-01 → 1663-09-24`

**③ HÜKÜM: ÇELİŞİYOR, iki ayrı sebeple.**
1. **Yanlış devlet.** Uyvar 1526'ya kadar Macaristan Krallığı toprağı.
   Havzadaki bütün komşuları (Estergon · Budin · Peçuy · Segedin · İstolni
   Belgrad · Kanije…) `macaristan` 1281→fetih yazılmış; **Uyvar tek istisna.**
   Desen kırılması tek başına yazım hatası işaretidir.
2. **Kale 1281'de yok.** Uyvar (Nové Zámky) **1573-1581**'de inşa edildi;
   kayıtta `kur:` alanı yok. `girdi.py` bu alanı tam bunun için taşıyor
   (*"motor petek_epok() bu tarihten önce peteği komşuya devreder"*).
   ⇒ 292 yıl boyunca var olmayan bir kale petek sahibi.

📌 TDV `uyvar` **canlı** (KAYNAK-DENETIMI, 2 kullanım) — kuruluş tarihi oradan
teyit edilmeli; yukarıdaki 1573-1581 aralığı henüz TDV'den okunmadı,
**doğrulanmadı olarak işaretli.**

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
