# MOTOR DENİZAŞIRI — bir peteğin denizi geçmesi

> Şartname · 10 Ağustos 2026 · koordinatör (Oturum 0)
> **MODEL: Opus** · **DİZİN:** `C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ`

---

## ⓪ KİMLİK — HADDİN

**SEN:** MOTOR DENİZAŞIRI · bir **YAPIMCI** oturumsun.
**DEĞİLSİN:** koordinatör değilsin, iş dağıtmazsın, başka oturum açmazsın.
**ÜSTÜN:** koordinatör (Oturum 0) — sana bu şartnameyi gönderen oturum.
**ALTIN:** kimse.
**YASAKLARIN:** `data/yerlesimler*.js` dışındaki veri dosyaları · `js/` · `css/` ·
kök dizindeki `*.md` belgeleri · başka oturumun `oturumlar/` dosyası · **yayın**
(damga + push koordinatörde).

---

## ① NİÇİN VARSIN — ölçülmüş boşluk

**Emre bu kusuru ON DÖRT KEZ, ALTI AYRI DOSYADA bildirdi.** Bugüne kadar hepsi
ayrı birer "harita hatası" sanıldı; İÇERİK oturumu 10 Ağustos'ta 18 docx'in
tamamını tarayınca tek bir **kural beyanı** oldukları görüldü:

```
h1  #6   İstanbul'un fethi → Erdek / Kapıdağ kırmızı
h1  #8   Midilli → Ayvalık · Altınoluk · Edremit    "ada karşı kıyıya ULAŞAMAZ"
h1  #10  Zakintos → karşı kıyı                      "adaların bölgesi adayla SINIRLI"
h4  #7   Derbend alınışı → HAZAR'IN ÖTE YAKASI
h4  #8   Bakü alınışı    → Hazar'ın karşı tarafı
h8  #2   (aynı desen)
h10 #29  Vehran → İSPANYA ANAKARASI
         🔴 "Bir yerleşimin petek bölgesi DENİZAŞIRI OLAMAZ."  ← EMRE'NİN KENDİ KURALI
h12 #5   Karesi ilhakı → Gelibolu
         🔴 "PETEK BÖLGELER DENİZ AŞIRI GİTMEMELİ."            ← aynı kural, İKİNCİ kez
h15 #19  Oran / Merselkebir → İspanya anakarası
h17 #3   Biga'nın ucu Behramkale ← "MİDİLLİ'DEKİ CENEVİZ ALANININ TAŞMASI olabilir mi"
h17 #14  Karesi ilhakı → AVRUPA TARAFINA toprak sarkıyor
h17 #15  Çimpe'ye çıkış → SAROZ KÖRFEZİNİN KUZEYİNE kırmızı bulaşması
h18      "SAVOY HAÇLI SEFERİ KARANIN ÜSTÜNDEN GEÇİP GELEMEZ"
```

> **Tek cümle — ve iki kez Emre'nin kendi ağzından:
> bir yerleşimin peteği denizi geçmemeli.**

🔴 **VE ON DÖRDÜNCÜSÜ TEK VAKA BİLDİRMİYOR — TOPLU TARAMA İSTİYOR:**
```
h17 #3b   "TÜM BUNUN GİBİ DENİZ ÖTESİ TAŞMALAR ARAŞTIRILARAK BULUNMALI"
```
⇒ Yani `ADIM 1`in ölçümü bir yan iş değil, **Emre'nin doğrudan talebi.** Listeyi
kapatmak yetmez; **tarama** isteniyor.

🔴 **Ve bu, külliyatın en çok tekrarlanan iki şikâyetinden biri.** On dört kez
yazmak, bir kullanıcının bir şeyi on dört kez fark etmesi değildir — **her
seferinde düzeltilmediğini görmesidir.**

### ⚠️ KARDEŞ TEMA — "KARASAL BAĞLANTI" (11 vaka) · SENİN İŞİN DEĞİL, AMA BİL

Emre ayrıca **karadan** kopuk enklavlardan şikâyet ediyor ve bunu da genel kural
olarak yazmış (`h12#10`): *"karadan genişlemelerde ana kara ile bağlantı
beklenir… **uçakla gidilip arada geçiş yok iken ele geçirilemez**"*. Vakalar:
Tebriz · Şirvan (3) · Isparta (2) · Gemlik-Armutlu · Kili-Akkerman · Gümülcine (2).

📌 Aynı istiare (*"uçakla"*) `h10#28`de de geçiyor. **Denizaşırının kardeşi ama
AYNI ŞEY DEĞİL** — biri denizi, öteki düşman toprağını geçiyor.
⇒ **Çözümün ikisini birden kapatıyorsa SÖYLE** (kara bileşeni kuralı yalnız
birincisini kapatır). Kapatmıyorsa **karışma**; ayrı bir karar.

### Bu bir "harita hatası" değil, motorun tanımlı bir davranışı

`CLAUDE.md §2`: *"Noktası olmayan bölge, en yakın peteğe emilir ve O PETEĞİN
SAHİBİYLE boyanır."* Voronoi hücresi **deniz tanımaz** — Midilli'nin hücresi
karşı kıyıya uzanır, kara maskesiyle kesilir, ve Ayvalık'ta bir Osmanlı-öncesi
ada rengi kalır.

⇒ Kusur veride **değil**. Kusur, **mesafenin tek ölçüt olmasında.**

---

## ② İŞİN — dört adım, sırayla

### ADIM 1 · ÖLÇ — "bugün kaç tane var" (bu SAYI YOK)

🔴 İÇERİK *"yedi kez istendi"*i ölçtü, ***"bugün kaç tane kaldı"*ı ÖLÇMEDİ** ve
bunu açıkça yazdı. **İlk işin bu boşluğu kapatmak.**

Yayında (r1140) **A1 yarıçap tavanı zaten var**. Yani bir kısmı çözülmüş
olabilir. Ölçmeden tasarlama.

```
Ölçülecek: kaç petek, sahibi olduğu noktanın bulunduğu KARA BİLEŞENİNİN
           dışında toprak tutuyor — ve bunların toplam alanı ne
Kesitler:  en az 1400 · 1500 · 1600 · 1700 · 1800 (gerekirse daha)
Ad ver:    en büyük 20'sini AD ve ALANLA listele
```
🔴 **VE BU TARAMA `h17#3b`NİN DOĞRUDAN KARŞILIĞIDIR** — *"tüm bunun gibi deniz
ötesi taşmalar araştırılarak bulunmalı."* Yani ölçüm bir hazırlık değil,
**teslim edilecek işin kendisi.** Bulduğun liste Emre'ye gidecek.

⚠️ Yukarıdaki on dört vakayı **tek tek** kontrol et: bugün hâlâ var mı, yok mu?
Emre'nin şikâyeti **bayat olabilir** (`CLAUDE.md §11`: *"bir şikâyet, şikâyet
edilen şeyden daha hızlı bayatlar"*). Bayat olanı **düzeltme.**

### ADIM 2 · TASARLA — ve koordinatöre SUN, uygulamadan önce

En az **iki** seçenek üret, ölçüm sonuçlarıyla birlikte. Başlangıç için ikisi
zaten masada:

**(a) KARA BİLEŞENİ KURALI (topolojik).** Bir peteğin toprağı, sahibinin
bulunduğu bağlantılı kara bileşeniyle sınırlanır. Ada peteği kendi adasını
aşamaz; Trakya'daki nokta Anadolu'yu boyayamaz.
```
🟢 güçlü yanı   ölçüt MESAFE değil TOPOLOJİ — "denizi geçme" kuralının
                birebir karşılığı; eşik seçimi yok, ayar yok
🔴 riski        boğazın öte yakasında hiç nokta yoksa orası SAHİPSİZ kalır
                ⇒ `Değişmez 1` tavanı (180) yükselir
                ⚠️ ama bu DOĞRU sonuç olabilir — `§3.5.1`: noktasızlık iki
                   yöne de hata üretir, ve sahipsizlik dürüst cevaptır
🔴 ölçülecek    Natural Earth maskesinde Anadolu ile Trakya AYRI bileşen mi?
                Kaç bileşen var, kaç nokta hangi bileşende?
```

**(b) A1 YARIÇAP TAVANI'nın onarılması (mevcut).** Tavan `TAVAN_KM = {1: 700,
2: 420, 3: 280, 4: 140, 0: 280}` olarak **zaten uygulanıyor.**
```
🔴 BİLİNEN KUSUR — koşu 4b'de ölçüldü, YAYIN DURDURULDU:
   tavan 20 peteği kısalttı, 3.397.649 km² sahipsizleşti,
   ve 118 YETİM YÜZ o toprağı SAHİPLİ KOMŞULARA GERİ VERDİ
   ⇒ tavanın ÖNLEMEK için var olduğu şeyi sonraki aşama YENİDEN YAPIYOR
   (`CLAUDE.md §11` — "kusur ikisinin ARASINDAYDI")
```
🟢 **VE ÇARESİ KISMEN YAZILI:** `uret_petek.py:874` bir **`_ENKLAV`** kümesi
tutuyor ve o noktalar **yetim yüz EMMİYOR** (`:894` `if i in _ENKLAV: continue`).
Veri alanı: `s:` içinde `enklav:`. Bugün **14 nokta** bu listede (Agadir ·
Arzila · Azemmûr · Bicâye · Cebelitarık · Halkulvâdî…).
⇒ **Sorulacak soru:** tavanla kesilen toprak, yetim yüz mantığından
`_ENKLAV` gibi **muaf tutulabilir mi?**

⚠️ **Üçüncü bir seçenek bulursan onu da sun.** İkisi masada diye üçüncüyü arama
zahmetinden kaçınma — (a) ve (b) koordinatörün fikri, **ölçüt senin olacak.**

### ADIM 3 · ÖNGÖRÜ YAZ — koşudan ÖNCE, damgalı

🔴 **Bu adım atlanamaz** (`CLAUDE.md §11`). `denetim/kosu-ongoru.json` biçiminde,
**koşu başlamadan** en az beş kalem:
```
① kaç petek kısalacak / bileşenle sınırlanacak
② `Değişmez 1` sahipsiz sayısı ne olacak   (bugün 180)
③ Osmanlı alanı kaç kesitte DEĞİŞECEK       (beklenen: 0 — çekirdek dokunulmaz)
④ yedi vakadan kaçı kapanacak
⑤ yeni bir renk çakışması doğacak mı        (`renk_olc.py` — veri değişiyor)
```
🔴 **Ve her kalem için MAZERETİNİ DE ÖNCEDEN YAZ** — hangisi tutmazsa
*"taban kaydı"* diye açıklanabilir, hangisi tutmazsa **mazereti yok.**
Ölçümden sonra yazılan mazeret, bulguya benzer ve hiçbir şey öğretmez.

### ADIM 4 · KOŞ — ve koşarken hiçbir şeye dokunma

```bash
py arac/uret_petek.py            # ~76 dk
py arac/uret_devirler.py         # SONRA
py arac/denetle.py               # altı değişmez
py arac/renk_olc.py              # 🔴 VERİ DEĞİŞTİ ⇒ ŞART
```
🔒 **KOŞU SIRASINDA `arac/*.py` DEĞİŞTİRİLEMEZ.** `motor_izi` parmak izi tutar
ve koşuyu **öldürür** (8 Ağustos'ta bir koşu 83 dakika sonra bu yüzden öldü).
`data/*.js` kopyalanır, ona yazmak güvenlidir — ama **yine de yazma**, çıktı
bayatlar.

⚠️ **Koşu bitince 9 beep** (`CLAUDE.md §10`) — tetik `data/donemler.js`in
damgası, geçen süre DEĞİL.

---

## ③ YAZMA YETKİSİ

```
🟢 SENİN        arac/uret_petek.py          ← KOORDİNATÖRDEN DEVREDİLDİ
                data/yerlesimler*.js        ← yalnız `enklav:` alanı eklemek için
                oturumlar/MOTOR-DENIZASIRI-ILERLEME.md
                denetim/kosu-ongoru.json  ·  denetim/MOTOR-DENIZASIRI.md
                üretilen data/*.js (koşunun kendi çıktısı)

🔴 SENİN DEĞİL  js/*  ·  css/*  ·  kök *.md (CLAUDE.md dâhil)
                data/devletler.js · olaylar*.js · kisiler.js · sehirler.js
                arac/renkler.py             ← başka oturumun olabilir, SOR
                yayın (surum_damgala + push) ← KOORDİNATÖRDE
```
🔴 **`uret_petek.py` bu şartnameyle SANA DEVREDİLDİ.** Koordinatör ona
dokunmayacak. Ama devir **sözle** yapılır: işin bitince *"dosya senin"* de,
yoksa koordinatör kilitli sayar.

---

## ④ SENİ BAĞLAYAN YASALAR

```
CLAUDE.md §2      emilme kuralı — bu işin konusu
CLAUDE.md §3      altı değişmez · koşudan sonra HEPSİ denetlenir
CLAUDE.md §3.5.1  bir sınır kayması önerildiğinde İKİ UÇ DA ölçülür:
                  "bu tarafta fazlalık var mı" yetmez, "öbür tarafta
                  fazlalık/delik doğuyor mu" da sorulur
CLAUDE.md §7      dosya sahipliği · üretim tek sahipli
CLAUDE.md §9      renk_olc.py: veriye dokunan HER koşudan sonra
CLAUDE.md §11     öngörü koşudan ÖNCE · mazeret de ÖNCEDEN · iki yönde sınama
                  · "ölçüm doğru, çıkarım yanlış" (bugün ALTI vaka)
```

🔴 **Ve bugünün en taze dersi seni doğrudan bağlıyor:**
> *"Bir düzeltme doğru çalışabilir ve SONRAKİ AŞAMA onu geri alabilir — ve
> ikisi arasındaki boşluk hiçbir denetimin sorusu değildir."*

A1 tavanı **tam olarak** buna yakalandı. Senin çözümün de yakalanabilir.
⇒ **Koştuktan sonra "tavan çalıştı mı" değil, "SONUÇTA harita düzeldi mi"
diye sor.** İkisi ayrı sorulardır.

---

## ⑤ HABERLEŞME

🔴 **CEVAP KENDİ PENCERENE YAZILMAZ.** Koordinatöre mesajla gider:
```
mcp__ccd_session_mgmt__send_message
    session_id : sana mesaj GÖNDEREN oturumun kimliği
                 (mesajın başındaki "From <ad>" etiketi odur;
                  bulamazsan mcp__ccd_session_mgmt__list_sessions ile ara)
    message    : cevabın
```
Ekrana yazdığını koordinatör **görmez**. Pencerene *"iş üstündeyim"* yazmak,
cevap vermemekle **aynı şeydir**.

```
AÇILINCA     "açıldım, brifingi okudum, uret_petek.py bende"
ADIM 1 BİTİNCE  ölçüm sonucu — HEMEN, tasarımı beklemeden
ADIM 2 BİTİNCE  iki (ya da üç) seçenek + ÖNERİN → ONAY BEKLE, uygulama
KOŞU BAŞLARKEN  "girdi kilitli" de
SORU GELİNCE    iş sürüyor olsa bile HEMEN:
                "iş üstündeyim · şu aşamadayım · ~şu kadar kaldı"
BİTİNCE         teslim raporu — SAYIYLA
```

🔴 **AKSAKLIK BEKLEMEZ:** kaynaklar çelişiyorsa · şartname yanlış/eksik
çıktıysa · beklenenden ÇOK farklı bir sayı ölçtüysen · iş tahminden ÇOK
uzayacaksa → **bekletmeden** sor. *Sormak zayıflık değil protokoldür; yanlış
tahmin veriye girer ve sonra kimse onun tahmin olduğunu bilmez.*

**Ve bulamadığını `bulunamadı` diye yaz** — negatif sonuç da sonuçtur.
**Ölçmediğini `ölçmedim` diye yaz** — ölçülmüş satırlar, yanlarındaki
ölçülmemiş satıra kendi güvenilirliklerini **ödünç verir.**

---

## ⑥ BİTİŞ ÖLÇÜTÜ — sayıyla

```
✅ BİTTİ demek için hepsi gerekli:
   ① ON DÖRT vakanın kaçı kapandı — TEK TEK, adıyla
   ①b h17#3b'nin TARAMASI: bugün kaç denizaşırı taşma var, en büyük 20'si
   ② denetle.py: altı değişmez · sahipsiz ≤ ilan ettiğin tavan
   ③ renk_olc.py: yeni çakışma sayısı ve gerekçesi
   ④ Osmanlı alanı kesit kesit — DEĞİŞMEDİYSE onu da yaz
   ⑤ öngörünün kaç kalemi tuttu, kaçı çürüdü, çürüyenin sebebi
```
⚠️ *"Bitirdim"* teslim raporu **değildir.** *"Yedi vakanın beşi kapandı, ikisi
şu sebeple kalmadı; sahipsiz 180 → 194, tavanı 200 ilan etmiştim"* teslim
raporudur.

🔴 **Ve yayın senin işin değil.** Koşu temizse *"yayına hazır"* de; damgayı ve
push'u koordinatör yapar.

---

## ⑦b BU İŞ BİTİNCE SIRADAKİ — **TOPOGRAFYA** (aynı dosya, aynı oturum)

🔴 **Kapanma, ikinci işi al.** Sebebi yetki değil **dosya sahipliği**:
`uret_petek.py` sende, ve topografya da aynı dosyada. İkinci bir oturuma
devretmek `§7`nin sessiz veri kaybı riskini doğurur.

### Emre bunu **11+ kez** yazdı, ve külliyatın **EN TAZE** şikâyeti

> `h17#9`: *"BU CETVELLE ÇİZİLMİŞ SINIRLARDAN NE ZAMAN KURTULACAĞIZ.
> **EN BAŞINDAN BERİ BUNDAN ŞİKÂYET EDİYORUM.** Kendi haritamızı dağ, nehir,
> tepe, göl, ova şeklinde oluşturup şehir sınırlarını bunlara yaslayacaktık —
> o mesele ne zaman yapılacak?"*

Vakalar: `h11#16 · h11#28 · h12#1 · h16#6 · h17#1·6·9·16·17 · h18#2·4·5`.

🔴 **Ve "bayat şikâyet" diye elenemez — ölçüldü:** `h17` (31 Tem 20:02) ve `h18`
(1 Ağu 00:58) külliyatın **en yeni** iki dosyası. ⇒ Emre bunu *"en başından beri"*
söylüyor **ve en son günde hâlâ söylüyor.**

### 🔴 DİKKAT — BU İŞ YARIM DEĞİL, **BİR KADEMESİ ZATEN BİTMİŞ**

> ⚠️ **Koordinatör bu bölümü önce YANLIŞ ölçtü ve düzeltti.** İlk hâli
> `kosu9.log`u okuyordu; **o log 4 Ağustos'a ait ve dosya adı numarası tarihle
> ilgisiz** (`kosu7.log` **10 Ağustos**, yani bugünkü koşu). Düzeltmeyi İÇERİK
> oturumu yakaladı. Aşağıdaki sayılar **bugünkü koşudandır.**

```
f42f90f · 7 Ağustos 2026 · "COGRAFYA KADEME 1"
    nehir  43 → 157 parça      dağ/engel  126 → 163 poligon
```
Ve commit gövdesi teşhisi **tam** koyuyor:
> *"Pencerede 780 parça / 593 adlı akarsu VARDI, motor 43 parça / 31 ad
> kullanıyordu. **Sebep pencere DEĞİLDİ, 31 adlık beyaz listeydi ve tamamı
> Osmanlı kuşağıydı** — Ren, Po, Elbe, Vistül, İndus, Ganj, Amuderya, Nijer,
> Kongo, Amur, Yangtze: hiçbiri yoktu. **VERİ DURUYORDU, SÜZGEÇ GEÇİRMİYORDU.**"*

**Bugünkü koşu (`kosu7.log`, 10 Ağustos 17:49):**
```
187 nehir parçası — 143 adlı akarsu       163 dağ sırası
yaslama aşaması: 17 saniye
```

### 🔴 VE ASIL SORU BU: **EMRE DÜZELTMEYİ HİÇ GÖRMEDİ**

```
31 Tem / 1 Ağu   Emre şikâyet etti  (h17 · h18)        motor: nehir  43
 7 Ağu           COGRAFYA KADEME 1                     motor: nehir 157
10 Ağu           bugünkü koşu                          motor: nehir 187
```
⇒ Şikâyetin dayandığı harita **KADEME 1 ÖNCESİ.** ⇒ ***Sorun "kapsamı genişlet"
değil: "KADEME 1 YETTİ Mİ?"***

⚠️ **Ve buna sayı cevap veremez.** Ölçüt Emre'nin ekranda gördüğü şey.
🔴 **Bu yüzden ADIM 1 bir ÖLÇÜM değil bir GÖRSEL TEYİTTİR** — aşağıya bak.

⚠️ **EŞİK ÖLÇÜLEREK SEÇİLMİŞ, keyfî değil** — commit gövdesinden:
```
pencerede kümülatif:  <=1: 21 · <=2: 46 · <=3: 77 · <=4: 124 · <=5: 157 · <=6: 267 · hepsi 780
NEHIR_ONEM_ESIGI = 5.0    "6'da 267'ye fırlıyor ve DERE'ye yaslanma riski başlıyor"
```
📌 Ve ad listesi **kaldırılmadı, taban olarak duruyor** — iki kapı birbirinin
yerine geçmez: ad listesi *"küçük ama sınır taşıyan"*ı (Porsuk gibi) tutar,
`scalerank` *"büyük ama adsız"*ı. `CLAUDE.md §11`: **bir süzgeci kaldırmadan
önce neyi koruduğunu oku.**

### İŞİN — dört adım, ve BİRİNCİSİ SAYI DEĞİL

```
ADIM 1  GÖRSEL TEYİT — bu işin AÇILIŞ SORUSU
        Emre'nin şikâyet ettiği KESİTLERİ bugünkü yayında aç ve BAK:
        h17#9 · h17#1·6·16·17 · h18#2·4·5 · h11#16·28 · h12#1 · h16#6
        → "hâlâ cetvelle çizilmiş gibi mi?"  EVET/HAYIR, kesit kesit
        🔴 HAYIR çıkarsa BU İŞ BİTMİŞTİR — koordinatöre söyle, DEVAM ETME.
           Bitmiş bir işi ikinci kez yapmak, hiç yapmamaktan pahalıdır.
        ⚠️ KADEME 1 sonrası bir görüntü Emre'de YOK. Karar onun.

ADIM 1b (yalnız EVET çıkarsa) ÖLÇ: kaç petek kenarının kaç YÜZDESİ bir doğal
        hatta yaslı? (ham sayı değil ORAN — "187 nehir" bir kapsam değil GİRDİ)
        Ve eşik 5,0 → 4 → 3 denendiğinde kaç DERE giriyor?
ADIM 2  TASARLA   en az iki seçenek + ÖNERİN → koordinatöre SUN
ADIM 3  ÖNGÖRÜ    koşudan ÖNCE, damgalı, mazeretleriyle
ADIM 4  KOŞ       ve SONUCA bak: "yaslama arttı mı" değil,
                  "HARİTA cetvel gibi görünmekten ÇIKTI MI"
```
🔴 **`ADIM 4`ün ölçütü de görseldir.** Aynı kesitin öncesi/sonrası, **birlikte**.
🔴 **`ADIM 4`ün ölçütü görseldir.** Bu işin sınavı bir sayı değil, Emre'nin
ekranda gördüğü şey. Koşu bitince **aynı kesitin öncesi/sonrası** görüntüsünü
al ve **ikisini birlikte** gönder.

---

## ⑦ ÖNCE OKU

```
CLAUDE.md            baştan sona — özellikle §2 · §3 · §7 · §11
MIMARI.md            petek motoru · çözülmemiş yapısal sorunlar
denetim/DOCX-KALAN-16.md   İÇERİK'in GRUP A taraması — yedi vakanın kaynağı
arac/uret_petek.py:864-905   ENKLAV kısıtı ve yetim yüz mantığı
arac/uret_petek.py:1701-1760 A1 tavanı muafiyeti (koşu 4b'nin izi)
kosu9.log            son koşunun aşama aşama çıktısı
```
