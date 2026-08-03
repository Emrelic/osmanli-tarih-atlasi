# ARAYÜZ 3 — şartname (kod değil, tasarım)

**Yazan:** ARAYÜZ 2 · **3 Ağustos 2026** · **Sebep:** yayın kilidi
(`denetle_yayin.py` damga bekliyor, 12:06-16:50 koşu). `js/` `css/`
`index.html`e yazamıyorum; bu belge onun yerine geçen iş.

Koordinatörün istediği üç kalem, sırayla. Her biri **DOM/şema önerisi**
taşıyor ki yayın açılınca doğrudan uygulamaya geçilsin — burada karar
verilmiyor, karar için gereken seçenekler ölçülüp öneriliyor.

---

## ① KARTVİZİT PANELİ — `PADISAH-KARTVIZITI.md`

### Veri durumu — ölçüldü

```
data/padisahlar.js   44 kayıt · şema: id · ad · from · to · ozel?
                      "from/to" = YYYY-AA hassasiyeti
data/kisiler.js       281 kayıt · şema: id · tur · ad · f · t · donem ·
                      dogum_yer · dogum_lat · dogum_lon · olum_yer ·
                      eser[] · devlet · not
                      tur: sadrazam(20) komutan(20) denizci(5) hanedan(3)
                      vezir-pasa(9) alim(24) siyasi(13) mimar(4)
                      edebiyatci(4) yabanci-hukumdar(166) yabanci-komutan(13)
                      ⚠️ "padisah" turu YOK — padişahlar ayrı dosyada.
assets/portreler/     38 dosya, kural: <padisahlar.js id>.jpg
                      kisiler.js kayıtları için HİÇ portre klasörü yok.
```

`PADISAH-KARTVIZITI.md`nin istediği yeni alanlar (`dogum, olum, olum_sebep,
baba, anne, tahta, lakap, esler, cocuk, skandal, ovgu, yergi, tartisma,
tarihciler, kaynak`) **hem padisahlar.js'e hem kisiler.js'e** aynı isimle
eklenmeli — iki ayrı şema iki ayrı okuyucu kodu demektir (§35), kaçınılmalı.

### 🔴 Tetikleyici — yeni bir bağ alanı gerekiyor

`PADISAH-KARTVIZITI.md`: *"padişahın ÖLÜM TARİHİNDE kronolojide bir madde
belirir, tür 'vefat'."* Bu YENİ bir kronoloji maddesi demek — içerik
oturumunun `data/olaylar_ekN.js`'e yazacağı bir kayıt.

**Öneri:** o maddeye açık bir bağ alanı eklensin:
```javascript
{ t:"1512-05-26", k:"vefat", vefat_id:"bayezid2",
  b:"II. Bayezid'in ölümü — nasıl bilinirdi", ... }
```
⚠️ **İsimden eşleştirme YAPILMASIN.** Bugün `padisahEslesmesi`/`kisiBul`
(js/app.js:2887-2960) zaten var ve portre/kişi kutusu için iyi çalışıyor —
ama onlar **bulanık eşleşme** (öz ad + Roma rakamı skoru). Kartvizit
1-1 ve kesin bir bağ istiyor; `vefat_id` ucuz ve tek yerde. Aksi hâlde
"Mahmud Paşa" gibi tekrarlı adlarda yanlış kişinin kartı açılabilir.
`vefat_id`, önce `PADISAHLAR`de sonra `KISILER`de aranır (tek fonksiyon,
iki kaynak — id alanları zaten benzersiz).

### DOM yapısı — mevcut deseni genişlet, yeni kalıp icat etme

`obGoster(o)` zaten künye/görsel/detay/ek-kutu akışını kuruyor
(js/app.js:2962-3043). Öneri: `o.k === "vefat"` olduğunda AYNI panelin
içinde ek bir blok açılsın — EK OKUMA gibi ayrı buton+modal DEĞİL, çünkü
bu kart maddenin **kendisi**, ek okuması değil (EK-OKUMA.md'nin kendi
ayrımı: kartvizit KİŞİYİ anlatır, ek okuma BAĞI/RİVAYETİ anlatır).

```html
<!-- #ob-ozel içine, o.k==="vefat" ise -->
<section id="ob-kartvizit">
  <div class="kv-kunye">           <!-- doğum·ölüm·baba·anne·tahta·lakap -->
  <div class="kv-magazin">         <!-- eşler · çocuk · skandal -->
  <div class="kv-nasil-bilirdiniz">
    <div class="kv-ovgu">…</div>
    <div class="kv-yergi">…</div>
    <div class="kv-tartisma">…</div>
  </div>
</section>
```
Görsel (`#ob-gorsel`) override: normalde `padisahBul(o.gi)` o günün
hükümdarını gösterir (`p4/H-0015` kuralı) — ama vefat maddesi kişinin
KENDİSİ hakkında, o yüzden `vefat_id`in kendi portresi zorunlu override
olmalı (bugünkü `if (o.kisiler)` bulanık yoluna hiç girmeden).

**Portre yoksa:** `assets/portreler/<vefat_id>.jpg` 404 verirse (K2-K5
için neredeyse hep böyle olacak — hiç portre klasörleri yok), bugünkü
`img.onerror` deseni (js/app.js:2985) zaten baş harf rozetine düşüyor.
Öneri: rozet **kişinin `tur`üne göre** ayrılsın (padişah ☾, sadrazam 🕌,
komutan ⚔, denizci ⚓, valide/hanedan 👑, alim/edebiyatçı 📖, mimar 🏛) —
boş bir "?" yerine kişinin TÜRÜNÜ anlatan bir simge, mevcut savaş/antlaşma
rozet mantığının (js/app.js:2992) aynısı.

### 🔴 EK — "çapasız kart" hâli (koordinatör, geçiş dönemi zorunlu kılıyor)

Sekiz padişah + K2/K3'ün 19 kişisi yayından SONRA yazılacak — panel bir
süre **eksik çapayla** çalışacak. Koordinatörün kuralı bugünün ana dersiyle
aynı: *"kart sessizce kaybolamaz; kart görünsün, çapası olmadığı görünsün."*
İki YÖNÜ var, ikisi de ayrı ayrı olabilir (kişi var-madde yok / madde
var-kart yok) — ikisi de aynı ilkeye tâbi:

**A) `vefat_id` YOK — kişinin künyesi/kartviziti hazır ama kronolojide
onu işaret eden bir madde henüz yok.** Bugünkü akış (`obGoster`) yalnız
BİR maddeye TIKLANINCA çalışıyor — madde yoksa kartın kendisi hiçbir
yerden ERİŞİLEMEZ, "görünsün" şartı sağlanamaz. ⇒ Yeni bir erişim yolu
gerekiyor: **`#dizin`e "🎖 Kartvizitler" sekmesi** (mevcut Kişiler/
Savaşlar deseninin AYNISI, `dizinDoldur()`a bir `else if` — js/app.js:2492).
K1-K5 kademelerine göre gruplanır (`baslik()` zaten bunu yapıyor,
sehirler sekmesindeki 4-kademe kalıbı örnek). Her satır (`satir(sol,orta,
sag,tik)`):
```
vefat_id ÇÖZÜLÜYORSA   → tik VAR: tarihAyarla + obGoster ile o maddeye
                          atlar (savaslar/antlasmalar sekmesiyle AYNI)
vefat_id ÇÖZÜLEMİYORSA → tik YOK (satır() zaten tıksız tasarlanmış,
                          yeni bir "pasif" hâl icat edilmiyor), sağ
                          sütunda "henüz kronolojiye bağlanmadı" —
                          boş değil, NEDEN boş olduğu yazan bir satır
```
🔴 **Sayaç şartı (koordinatör):** her kademe başlığının yanında
`baslik()` metnine `"K1 — Padişahlar (26/34 bağlı)"` gibi bir oran
eklenir — `TUR_ADI` deseninde zaten `"(" + grup.length + ")"` var,
tek fark payda/pay ikisinin birden yazılması. Ayrı bir ölçüm koşusu
gerekmiyor: sekme açıldığında `vefat_id` çözülen/çözülemeyen sayımı
zaten yapılıyor, sayaç o hesaptan bedavaya çıkar.

### 📏 ÖLÇÜLDÜ — bugünkü Kişiler sekmesi 19 yeni kayıtla ne olur

```
kisiler.js toplam        281 kayıt
Kişiler sekmesinde GÖRÜNEN  273  (mimar 4 + edebiyatçı 4 = 8 kayıt
                             HİÇ görünmüyor — TUR_ADI'de o iki tur YOK,
                             bugünden beri var olan küçük, AYRI bir
                             kusur; bu oturumun işi değil ama not düşülüyor)
hanedan (bugün)             3 kayıt — tek başlık altında
```
**19 yeni kayıt eklenince gruplama mekanizması KIRILMAZ** — bugün zaten
tur bazlı gruplanıyor (`sadrazam` 20, `komutan` 20 gibi benzer büyüklükte
gruplar sorunsuz çalışıyor), 22 kayıtlık bir "Hanedan" grubu da aynı
şekilde çalışır. ⚠️ **Ama TEK bir uyarı:** K2 (kaybeden şehzadeler) ve K3
(valide sultanlar) muhtemelen İKİSİ DE `tur:"hanedan"` alacak — aynı
başlık altında karışırlarsa okuyucu şehzadeyi valide sultandan ayıramaz.
Öneri (veri oturumuna şema notu): iki ayrı `tur` değeri açılsın
(`sehzade` · `valide`), `TUR_ADI`ye iki satır eklenir — mevcut mekanizma
DEĞİŞMEDEN ayrışma sağlanır, üçüncü bir kova icat edilmez.

**B) `vefat_id` VAR ama künye/kartvizit alanları henüz yazılmamış** —
ters yön, madde önce gelebilir. `obGoster` içinde `PADISAHLAR`/`KISILER`de
id bulunur ama `ovgu` alanı yoksa: `.kv-nasil-bilirdiniz` bölümü BOŞ
kalmaz, *"Bu kişinin kartviziti henüz yazılmadı"* satırı çıkar — künye
alanları (doğum/ölüm gibi zaten var olanlar) yine de gösterilir, yalnız
"nasıl bilirdiniz" üçlüsü eksik olduğu AÇIKÇA söylenir.

📌 Bu, "boş alan yok, niçin boş var" kuralının ÜÇÜNCÜ görünümü (ilk ikisi
kart İÇİNDEKİ alanlardı — `yergi:"bulunamadı"`, `tartisma`da kaynağın
sessizliği; bu üçüncüsü kartın KENDİSİNİN var olup olmadığı) — aynı ilke,
bir kademe yukarı taşındı.

### 900 karakter tavanı — ARAYÜZ zorlamaz, DEFANSİF önlem alır

`ANSİKLOPEDİ EKSENİ Kural ⓪` bunu **yazım kuralı** olarak koyuyor (içerik
oturumu uyar). Arayüz taşmayı KIRPMAZ — kırpma sessiz bilgi kaybıdır ve bu
projede tekrar tekrar "ölçmeden söyleme" dersi çıkmış bir sınıf hata
(OGRENILENLER). Öneri: `.kv-nasil-bilirdiniz` bölümüne `max-height` +
`overflow-y:auto` (aynı `#hakkinda-icerik`/`#ekokuma-icerik` deseni) —
taşarsa kaydırılır, kesilmez. Veri tarafı 900'ü aşarsa bu bir **denetim
maddesi** olmalı (`arac/denetle.py`ye eklenecek, bu oturumun işi değil).

### 🔴 EK — iki gerçek kart yazıldı, tavan ölçüldü (3 Ağustos, yayın kilidi arası)

Şemayı boşta bırakmamak için TDV'den iki uçtan iki kart yazıldı (kod
değil, ölçüm — `data/padisahlar.js`e YAZILMADI, bu oturumun dosyası
değil). İkisi de `oturumlar/durum/`deki mesaj geçmişinde tam hâlleriyle
duruyor; burada yalnız SONUÇ:

```
I. Murad (uçtan uca, sıradan vaka)
  ovgu+yergi+tartisma+tarihciler+skandal = 878 / 900 karakter — RAHAT PAY
  yergi:"bulunamadı" ilk kez GERÇEK bir vakada denendi — TDV maddesinde
    hiç olumsuz değerlendirme yok, kural tam bunun için varmış.
  vefat_id sınandı: YENİ madde GEREKMEDİ — data/olaylar.js:26 zaten
    "I. Kosova Savaşı — I. Murad'ın şehadeti" diye duruyor, ona
    vefat_id:"murad1" eklenmesi yeterli.

Yıldırım Bayezid (uç vaka — ovgu/yergi GERÇEKTEN çatışıyor)
  ovgu+yergi+tartisma+tarihciler = 898 / 900 — skandal'a YER YOK
  ⇒ 900 tavanı ORTALAMADA rahat, UÇTA (tartışmalı figür) sıkı.
```

### 🔴 KARARLAŞTI (koordinatör, 3 Ağustos) — üç kural

**① Tek 900 DEĞİL, ÜÇ AYRI BÜTÇE.** İki kart tek tavanı çökertti (878 ve
898 — ikisi de "tek havuz" varsayımıyla yazıldı ve Bayezid'de `skandal`a
yer kalmadı). Ayrı bütçe **toplam sınırsız** demek değil; üçünün de KENDİ
tavanı var:
```
künye              serbest    (yapısal alanlar: tarih, isim, sayı — kısa)
magazin            ~300 kr    (esler, cocuk, skandal)
nasıl-bilirdiniz   900 kr     (ovgu + yergi + tartisma + tarihciler)
```
Ölçüm kaydı (sonraki oturum "niçin ayrıldı" diye sormasın diye rakamlar
kalıcı): **I. Murad 878/900** (nasıl-bilirdiniz+skandal TEK bütçede
denendi, rahat sığdı) · **Yıldırım Bayezid 898/900** (nasıl-bilirdiniz
tek başına tavana YAPIŞTI, skandal'a hiç yer yoktu). Üç bütçe ayrılınca
ikisi de kendi sınırının içinde kalıyor — çakışma buradan çıktı.
Arayüz tarafı yine KIRPMAZ (yukarıdaki `.kv-nasil-bilirdiniz` `max-height`
+ `overflow-y:auto` kuralı üç bölüme de uygulanır); tavanı veri tarafı
yazarken gözetir, kod hiçbir zaman sessizce kesmez.

**② Kartvizit alanları `kesinlik:` disiplinine TÂBİDİR.** `EK-OKUMA.md`nin
omurgası (`kesin·tartismali·iddia·rivayet`) ve Emre'nin kendi kuralı
(*"mıymıntı yorumu benim yorumum, sen onu maddeye yazma"*) buraya da
uygulanır. Yıldırım Bayezid'in ölümü ders kitabı vakası: TDV "esarette
doğal sebeple" der, halk arasında zehir/intihar rivayeti YAYGIN ama
maddede YOK. **İkisi karıştırılmaz, ikisi de anlatılır** — TDV'nin dediği
`tartisma`ya kesin gibi girer, halk rivayeti ayrıca ve AÇIKÇA "rivayet"
diye anılır (gerekiyorsa `magazin` kartına, kartvizite salt rivayet
olarak DEĞİL).

**③ Boş alan yok, "NİÇİN boş" var — tek kural, iki görünüm.**
`yergi:"bulunamadı"` (I. Murad — TDV'de olumsuz değerlendirme yok) ile
`tartisma`da "TDV maddesi Ankara yenilgisinin sebebini derinlemesine
açıklamıyor" (Bayezid — kaynak SUSUYOR) AYNI AİLEDEN: kaynağın söylemediği
şey de bir bilgidir ve **yazılır**, boş bırakılıp geçilmez. Her iki alan
da (ve künyedeki bilinmeyen tarihler de) bu kurala tâbi: veri yoksa
"bilinmiyor"/"bulunamadı" + varsa NEDEN bilinmediği (kaynak susuyor mu,
kaynaklar çelişiyor mu) yazılır.

### KADEMELER — sıra zaten `PADISAH-KARTVIZITI.md`de var, sayı ÖLÇÜLDÜ (düzeltildi)

K1-K5 sayıları (`~111` toplam) `PADISAH-KARTVIZITI.md`nin kendi TAHMİNİYDİ,
ölçülmemişti — koordinatör istedi, ölçüldü. **İlk deneme yanlış çıktı ve
kendini düzeltti**, ikisi de aşağıda kayıtlı (§35'in bir örneği daha:
yanlış ölçüm sessizce silinmiyor, DÜZELTMESİYLE birlikte duruyor):

```
İLK GEÇİŞ (tek kelime + gevşek eşleşme) → "36/36 padişahın ölüm maddesi var"
  YANLIŞTI. Örnek: "IV. Murad" → "I. Murad'ın şehadeti" (1362) eşleşti —
  IKI FARKLI MURAD, yalnız ortak kelime yüzünden karıştı.

İKİNCİ GEÇİŞ (roma rakamı + isim BİRLİKTE, başlıkta "<ad>'ın ölüm/vefat/
şehadet/hal/katl" deseni) → 26/36 TEMİZ eşleşti. Kalan 10'un bir kısmı
GERÇEK eksik (yeni madde gerekir), bir kısmı YİNE rakam çakışması
("V. Murad" dizgesi "IV. Murad" içinde geçiyor — Roma rakamlarında bu
sınıf hata ÜÇÜNCÜ kez çıktı, kelime sınırı olmadan asla güvenilmez).
```

**Yapı bulgusu — sayıdan daha değerli:** Osmanlı veraset maddelerinin
BÜYÜK ÇOĞUNLUĞU zaten `"X'in ölümü/hal'i, Y'nin cülûsu"` biçiminde TEK
maddede yazılı (ör. `"II. Mahmud'un ölümü, Abdülmecid'in cülûsu"`,
`"Sultan İbrahim'in hal'i ve katli"`). Yani **çoğu padişahın ölümü zaten
bir maddede duruyor** — I. Murad'da görülen desen (yeni madde gerekmedi,
`vefat_id` mevcut maddeye eklendi) İSTİSNA değil, **kural**.

**K2/K3 — `PADISAH-KARTVIZITI.md`nin kendi tespiti DOĞRULANDI, sayıyla:**
```
K3 (11 örnek valide sultan adı)  → kisiler.js'te YALNIZ 1 (Turhan Hatice)
K2 (10 örnek kaybeden şehzade)   → kisiler.js'te YALNIZ 1 (Cem Sultan)
```
⇒ K2 ve K3 gerçekten "dizinde neredeyse yok" — kartvizit işi bu iki
kademede içerik oturumunun ÖNCE kisiler.js'e kayıt AÇMASINI bekliyor,
kart yazımı değil.

**K4/K5 — `t:` (ölüm yılı) alanı var ama olaylar'da madde ARANMADI
(fuzzy eşleşme burada da güvenilmez çıktı, tek tek doğrulama gerekir):**
```
sadrazam  20 kayıt · 16'sında t: var   komutan  20 kayıt · 14'ünde t: var
denizci    5 kayıt ·  4'ünde t: var
```

📌 **Sonuç:** K1-K5 kesin sayısı OTOMATİK ölçülemez (roma rakamı +
ortak isim çakışması ölümü ölçmeyi de zorlaştırıyor) — ama K2/K3'ün
veri tarafında BAŞLAMADIĞI ve K1'in ÇOĞUNLUKLA hazır bir maddeye
oturacağı artık ölçülerek biliniyor. İçerik oturumuna giden iş: K1'den
başla (veri hazır), K2/K3'ü kisiler.js kaydı açarak aynı anda ilerlet.

### 🔴 K1'İN 15 "EKSİĞİ" TEK TEK AÇILDI — çoğu ölçüm kusuruydu, gerçeği 7

Regex'in kaçırdığı 7 madde başlıkta ölüm/vefat geçiyordu — ama koordinatör
haklı bir şüphe attı: *"başlıkta ölüm geçmesi yetmiyor, GÖVDE kimin
ölümünü anlatıyor?"* Yedisi de `d:` alanı okunarak TEK TEK açıldı:

```
✅ TEMİZ — gövde GERÇEKTEN o kişinin ölümünü anlatıyor (4)
   I. Bayezid   "Timur'un elinde esir... Akşehir'de vefat etti; naaşı
                 Bursa'ya getirilip defnedildi." — baştan sona kendisi.
   II. Bayezid  "...yolculuk sırasında öldü; ölümünde zehirlenme
                 ihtimali... sekizinci padişah böylece hayatını
                 kaybetti." — baştan sona kendisi.
   I. Süleyman  "...otağında vefat etti... devlet en uzun saltanatlı
                 ve en görkemli padişahını kaybetmişti" — kendisi
                 ağırlıkta (kale/halef bağlam, odak o değil).
   III. Selim   "IV. Mustafa'nın emriyle III. Selim sarayda
                 öldürüldü... Selim'in ölümü..." — baştan sona kendisi.

🟡 KARIŞIK — ölümü var ama gövdenin AĞIRLIĞI başkasında (2)
   II. Mehmed(Fatih) "Fatih'in ... ani ölümü" TEK cümle, geri kalan üç
                 cümle CEM SULTAN'IN İSYANI. `kaynak:"cem-sultan"` —
                 kaynağın kendisi bile Cem'in maddesi. vefat_id
                 takılabilir (tarih doğru) ama kart içerik-ağırlığıyla
                 uyuşmaz, veri oturumu bilerek karar versin.
   V. Mehmed    İlk cümle kendi vefatı, ikinci yarı YENİ PADİŞAH
                 Vahdeddin'in durumu. Aynı sınıf, daha hafif.

🔴 YANLIŞ SINIF — ÖLÜM DEĞİL, madde başka bir olay (1)
   III. Ahmed   Bu bir HAL' (tahttan çekilme, 1730) maddesi — gövdenin
                 İKİNCİ YARISI TAMAMEN I. Mahmud'un ilk icraatları.
                 III. Ahmed'in GERÇEK ölümü (1736) hâlâ maddesiz.
                 ⇒ Kösem'le AYNI SINIF: "o tarihte madde var" ile
                 "BU KİŞİNİN ölüm maddesi var" burada da ayrıştı.
```
📌 **Sonuç değişti:** "7 ölçüm kusuru" dediğim liste aslında **4 temiz +
2 kullanılabilir-ama-dengesiz + 1 YANLIŞ.** III. Ahmed gerçek eksiklere
taşınmalı — **toplam gerçek eksik 7 değil 8.**

**GERÇEK EKSİK — 8, yeni madde ister (bu oturumun değil, senin dosyan):**
```
Orhan Gazi        (to 1362-03)  — yalnız "I. Murad tahta çıktı" var,
                    Orhan'ın kendisi hiç adı geçmeden
I. Mehmed (Çelebi) (to 1421-05)  — yakınında hiç isim geçen madde yok
I. Selim (Yavuz)    (to 1520-09) — yalnız "Kanunî tahta çıktı" var
II. Süleyman        (to 1691-06) — yalnız "II. Ahmed'in tahta çıkışı" var
II. Ahmed           (to 1695-02) — yalnız "II. Mustafa'nın cülusu" var
I. Abdülhamid       (to 1789-04) — yalnız "III. Selim tahta çıktı" var
IV. Mustafa         (to 1808-07) — boğduruldu (1808), adıyla madde yok
III. Ahmed          (öl. 1736)   — YENİ EKLENDİ: 1730 maddesi hal', ölüm
                    değil; gerçek ölümü altı yıl sonra ve maddesiz
```
**8. özel vaka — atlasın KENDİ sınırı:** `VI. Mehmed (Vahideddin)` 1926'da
sürgünde öldü — atlas `1923-10-29`de bitiyor, yani ölüm tarihi ATLASIN
DIŞINDA. Kartı en yakın gerçek çapaya (`1922-11-01` "Saltanatın
kaldırılması" ya da `1922-11-17` "İstanbul'dan ayrılışı") bağlanmalı —
"olum" alanı 1926 yazar ama `vefat_id` 1922'deki maddeye takılır. Yeni
madde gerekmiyor, yalnız bu istisna bilinsin.

### K2 — kisiler.js'e açılacak 9 kayıt (Cem Sultan zaten var, dışarıda)

⚠️ **Aşağıdaki ölüm yılları TDV'den DOĞRULANMADI — hafızadan, kaba
çapa.** Kaynak kuralı gereği (CLAUDE.md §4) veri oturumu her birini
`islamansiklopedisi.org.tr`den TEYİT ETMEDEN yazmamalı; burada yalnız
"nereye bakılacağı" işaret ediliyor, "doğru olduğu" değil.
```
Süleyman Çelebi   ö. 1411 (Emîr Süleyman, Fetret — Bursa'ya kaçarken/
                  Rumeli'de bertaraf, TDV: "suleyman-celebi" slug'ı doğrula)
Musa Çelebi       ö. 1413 (Çamurlu Derbend Savaşı'nda, Fetret'in sonu)
İsa Çelebi        ö. 1403-06 dolayı (Ulubat/Bursa mücadelesinde, Fetret)
Düzmece Mustafa   ö. 1422 (II. Murad'a yenilip Edirne'de asıldı)
Küçük Mustafa     ö. 1423 (II. Murad'a karşı ikinci Mustafa ayaklanması)
Şehzade Mustafa   ö. 1553-10-05 [MADDESİ ZATEN VAR — Konya Ereğlisi'nde
                  idam; kisiler.js'e kayıt AÇILMASI yeterli, madde hazır]
Şehzade Bayezid   ö. 1561-62 dolayı (Kanunî'nin oğlu, İran'a kaçtı,
                  Safevîler tarafından teslim edilip boğduruldu)
Şehzade Selim     [III. Mehmed'in kardeşi — 1512-04-24 maddesi Bayezid'in
                  şehzadesi Selim'le KARIŞMASIN, iki ayrı "Şehzade Selim"
                  var, id'ler AÇIKÇA ayrışmalı]
Genç Osman        zaten K1'de (padişah oldu) — K2 listesinden DÜŞÜLMELİ,
                  `PADISAH-KARTVIZITI.md`nin kendi notu böyle diyordu
```
⚠️ **İsim çakışması UYARISI:** tarihte birden çok "Şehzade Selim", "Şehzade
Mustafa" var (farklı padişahların oğulları). `id` üretirken TDV slug'ı ya
da baba adı mutlaka eklenmeli (`sehzade-mustafa-kanuni` gibi) — yoksa
`vefat_id` yine bu belgede üç kez görülen sınıf hataya (adaş karışması)
düşer.

### K3 — kisiler.js'e açılacak 10 kayıt (Turhan Hatice zaten var)

```
Nurbanu      ö. 1583 (II. Selim'in eşi, III. Murad'ın annesi)
Safiye       ö. sonrası 1605 [1595-01-16 maddesi ZATEN VAR ama o III.
             Murad'ın ölümü — Safiye'nin KENDİ ölümü değil, karıştırılmasın]
Handan       ö. 1605 (I. Ahmed'in annesi)
Halime       ö. 1623 sonrası (I. Mustafa'nın annesi)
Kösem        ö. 1651-09-02 [1623-09-10 maddesi ZATEN VAR ama o IV.
             Murad'ın CÜLÛSU — Kösem'in KENDİ ölümü (boğdurulması, 1651)
             AYRI ve maddesiz, GERÇEK EKSİK]
Gülnuş       ö. 1715 (II. Ahmed ve II. Mustafa'nın annesi)
Mihrişah     ö. 1805 (III. Selim'in annesi)
Nakşidil     ö. 1817 (II. Mahmud'un annesi)
Bezmiâlem    ö. 1853 (Abdülmecid'in annesi)
Pertevniyal  ö. 1883 (Abdülaziz'in annesi)
```
⚠️ **Kösem vakası aynı ders sınıfı, ters yönden:** bir tarihte bir madde
VARDIR ama o başka birinin (oğlunun cülûsu) maddesidir — Kösem'in KENDİ
ölümü (1651, boğdurma) hâlâ maddesiz. "Madde var" ile "BU KİŞİNİN madde
si var" birbirinden ayrılmadan sayılırsa yine yanlış "temiz" çıkar —
tam bugünün ana dersi.

---

## ② İDARÎ KATMAN DÜĞMESİ

### Şema — ZATEN YAZILI, burada TEKRAR EDİLMİYOR

`YAPILACAKLAR.md` (başlık "🆕 İDARÎ KATMAN") `kd:[{f,t,kad,m,tur}]` ve
`v:[{f,t,tabi,ad}]` şemasını **zaten tam olarak kararlaştırmış** (§35:
ikinci bir otorite açmıyorum). Bu bölüm yalnız o planın **⑥ maddesini**
("ARAYÜZ: idarî katman düğmesi") somutlaştırıyor.

🔴 **Önemli çıkarım o plandan:** *"Bugünkü bölge etiketleri ana haritadan
ÇIKAR, bu katmana taşınır."* Yani bugün her zaman zoom≥5.2'de görünen
`bolgeEtiketleri` (js/app.js `etiketleriYerlestir`, `BOLGE_ZOOM` sabiti)
**varsayılan görünümden kaldırılmalı** ve yalnız bu yeni katman AÇIKKEN
görünür olmalı. Bu, `③`teki parlama mekanizmasıyla aynı `bolge`/
`bolge-parlama` kaynaklarını kullanıyor — üstüne inşa edilir, yeniden
yazılmaz.

### Düğme — mevcut "butonları aç" menüsüne bir üye daha

`p2/H-0010`de kurulan `#menu-butonlar` deseni zaten var (js/app.js
btn-cografya/btn-motorhat/btn-verisiniri ile aynı `.etkin` durum-gösterme
kalıbı). Öneri:
```html
<button id="btn-idari" title="İdarî katman: eyalet/vilâyet/sancak sınırları ve merkezleri">🏛 İdarî Katman</button>
```
Açılınca: ① `bolge-cizgi`/`bolge-dolgu-hit` katmanları `minzoom:5.2`
kısıtından bağımsız hep aktif olur (bugün zaten var, yalnız görünürlük
kapıyla açılır/kapanır — `harita.setLayoutProperty`), ② bölge etiketleri
(`bolgeEtiketleri`) yalnız bu mod açıkken çizilir, ③ YENİ bir sembol
katmanı: her `kd[]` merkezine, O ANKİ AKTİF `kad` değerine göre bir işaret.

### Sembol ayrımı — veri gelince bağlanacak, ŞİMDİDEN tasarlanabilir

`kad:` beş değer alıyor (ulke·eyalet·vilayet·sancak·kaza·nahiye). Öneri,
mevcut sembol diliyle TUTARLI (aynı lejant mantığı, H-0017/21'de kurulan
"her sembol lejantta açıklanır" kuralı):
```
ulke     ⬥  (büyük, kalın)      eyalet/vilayet aynı GÖRSEL kademe —
eyalet   ◆                       aralarındaki fark zaten renk/tarih değil
vilayet  ◆                       İSİM (1864 dönüşümü, aynı TDV kademesi)
sancak   ◇  (küçük)
kaza     ·  (nokta, yalnız çok yakın zoomda)
```
`tur:"salyaneli"` olan eyaletler (özerklik ekseni) sembole değil, mevcut
`.baskent`/`.yaklasan` gibi bir CSS **ek sınıfına** bağlanır (altın
kontur) — yeni bir glif icat etmeden "bu özerk" bilgisini taşır.

### Parlama mekanizması — ZATEN BİTTİ, yalnız etiket metni değişir

`p4/H-0024`de kurulan `bolgeParlamaGoster/Gizle` + basılı-tutma zamanlayıcı
(js/app.js, `bolgeBasiliBaslat/Bitir`) **aynen kullanılır.** Tek değişiklik:
bugün etiket metni `b.ft.properties.ad + BOLGE_EKI` (" bölgesi" — veri
gelmediği için nötr bir ek) üretiyordu. `kad:` gelince:
```javascript
bolgeEtiketiGoster(b.ft.properties.ad + " " + KADEME_ADI[kadAktif], lngLat);
// KADEME_ADI = {eyalet:"Eyaleti", vilayet:"Vilâyeti", sancak:"Sancağı", ...}
```
tam olarak koordinatörün örneği ("Anadolu Eyaleti") ortaya çıkar. `kadAktif`
`t`ye göre `kd[]` içinden okunur — aynı zamanlı-pencere okuma deseni
`osmanliBaskentMi`de (aşağıda ③) zaten kuruldu, buraya da uyar.

### Lejant

Yeni bölüm: "İdarî katman (🏛 düğmesiyle açılır)" — dört sembol + salyaneli
konturu. H-0017/21'de kurulan lejant panelinin aynı deseniyle (`.lejant-baslik`
+ satırlar), yalnız içerik büyüdüğü için düğme KAPALIYKEN bu bölüm hiç
render edilmesin (lejant zaten scroll'lu, ama gereksiz DOM ucuz değil).

---

## ③ p4/H-0011'in kalan yarısı — `devletler.js` şeması

### Bugünkü durum ve neden yetmiyor

`devletler.js` künyesinde `baskent` **tek metin değer**. p4/H-0011'de
Osmanlı için `js/app.js`e `osmanliBaskentMi()` eklendi — ama o çözüm
`data/`ye YAZMADAN, `yerlesimler.js`teki 4 şehrin (Söğüt/Bursa/Edirne/
İstanbul) kendi `d.f` tarihlerinden pencere TÜRETTİ. Bu, **yalnız Osmanlı
için** işe yarayan bir yan kapı — çünkü Osmanlı'nın başkent şehirleri
zaten `yerlesimler.js`te birer kayıt. Yabancı devletlerin başkentleri
(Tebriz, İsfahan, Kazvin…) o dosyada aynı şekilde bulunmayabilir/aynı
isimle geçmeyebilir; genel çözüm veri tarafında olmalı.

### Öneri — mevcut pencere konvansiyonuyla AYNI kalıp

Projede zaten üç yerde aynı desen var: `yerlesimler.js`teki `d:/v:/s:`
dizileri, `bolgeler.js` için önerilen `kd:/v:` (yukarıda ②), ve
`osmanliBaskentMi`nin kendi iç tablosu. Dördüncü bir farklı biçim
AÇILMAMALI:

```javascript
// devletler.js — mevcut kayda EKLENEN alan, "baskent" TEK DEĞER yerine
baskent: [
  { ad:"Tebriz",  f:"1501-07-13", t:"1548-01-01" },
  { ad:"Kazvin",  f:"1548-01-01", t:"1598-01-01" },
  { ad:"İsfahan", f:"1598-01-01", t:"1736-01-01" }
]
```
`ad:` serbest metin (harita üstünde bu isme sahip bir `sehir`/`devlet-etiket`
noktası aranır; bulunamazsa yıldız sessizce çıkmaz — `p4/H-0011`nin
kendi "uydurma yok" ilkesiyle aynı, `js/app.js:osmanliBaskentPencereleriKur`
zaten "veri eksikse sessizce atla" diyor).

### Arayüz tarafı — küçük bir genelleme, YENİDEN YAZMA değil

Şartname yayın açılınca şu şekilde uygulanabilir: `osmanliBaskentMi(ad,t)`
yerine genel `devletBaskentMi(devletId, ad, t)` — `devletler.js`teki
`baskent[]` dizisini okur. Osmanlı'nın KENDİ satırı da (bugünkü 4 şehir)
o zaman AYNI genel fonksiyona taşınabilir (tek kaynak, iki değil) — ama
bu bir **temizlik**, acil değil; bugünkü `osmanliBaskentMi` doğru
çalışıyor ve kimseyi bloke etmiyor. Öncelik: önce yabancı devletlere
`baskent[]` yazılsın, sonra iki fonksiyon birleştirilir.

⚠️ **Kim yazar:** bu alan `devletler.js`nin künye kısmı — o dosyanın
sahibi (Oturum 3 / VERİ KİMLİK) yazar, ARAYÜZ yazmaz (CLAUDE.md §7).
Bu bölüm yalnız O oturuma **şema girdisi.**

---

## SIRA ÖNERİSİ (yayın açılınca)

```
① p4/H-0011 kalan yarısı — YALNIZ ŞEMA, veri KIMLIK oturumuna devredilir
② KARTVİZİT PANELİ — DOM hazır, veri gelince (vefat_id taşıyan ilk
   madde) anında bağlanır; veri gelmeden PANEL BOŞ dursa da zararsız
③ İDARÎ KATMAN DÜĞMESİ — en büyüğü, veri kd:/v: yazılana kadar yalnız
   düğme+boş katman kurulabilir (④'teki gibi "veri gelince kendiliğinden
   dolar" ilkesi)
```
📌 Üçü de **ANSİKLOPEDİ EKSENİ Kural ①**ye tâbi: hiçbiri ana yükü
şişirmez, hiçbiri veri gelmeden görünmez, hiçbiri veri gelmeden BOZULMAZ.
