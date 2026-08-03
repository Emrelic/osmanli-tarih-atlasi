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

### 900 karakter tavanı — ARAYÜZ zorlamaz, DEFANSİF önlem alır

`ANSİKLOPEDİ EKSENİ Kural ⓪` bunu **yazım kuralı** olarak koyuyor (içerik
oturumu uyar). Arayüz taşmayı KIRPMAZ — kırpma sessiz bilgi kaybıdır ve bu
projede tekrar tekrar "ölçmeden söyleme" dersi çıkmış bir sınıf hata
(OGRENILENLER). Öneri: `.kv-nasil-bilirdiniz` bölümüne `max-height` +
`overflow-y:auto` (aynı `#hakkinda-icerik`/`#ekokuma-icerik` deseni) —
taşarsa kaydırılır, kesilmez. Veri tarafı 900'ü aşarsa bu bir **denetim
maddesi** olmalı (`arac/denetle.py`ye eklenecek, bu oturumun işi değil).

### KADEMELER — sıra zaten `PADISAH-KARTVIZITI.md`de var

K1(36)→K2(~18)→K3(~12)→K4(20)→K5(25). Arayüz TEK mekanizma kurar, hangi
kademe önce doldurulursa panel ONUN için de çalışır — kademe sırası
içerik oturumunun kararı, arayüzü etkilemez.

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
