# OYNATMA TAKILMASI — teşhis: **tik 62 ms, iş ~400 ms** · ÇARE UYGULANDI

> **1.MURAT (Oturum 0) · 6 Eylül 2026.** `js/app.js` koşu tarafından donuk
> DEĞİL (motor yalnız `uret_petek.py` · `renkler.py` · `girdi.py`
> parmak izliyor), o yüzden çare koşu sürerken uygulanabildi.

Emre: *"siteyi görüntülerken donma yavaşlık takılma olmamalı, çat çat tık
diye geçmeli kronoloji oynaması. Hızlı dinamik olmalı — bunu engelleyen
yapılar var mı, nasıl hafifletip kıvraklaştırabiliriz."*

---

## ① 🔴 TEŞHİS: ZAMANLAYICI, İŞİN ALTI KATI HIZLI ATEŞLENİYORDU

```
setInterval(..., 62)          js/app.js:6216   ⇒ ~16 tik/saniye
tik başına yapılan iş         ~400 ms          ⇒ ~2,5 tik/saniye kapasite
```

Kodun **kendi ölçüm yorumu** (`app.js:5131`, 22 Ağustos 2026, Emre'nin
ekranında alınmış):
```
sehirGuncelle  an  401 ms      ← gerçek tarih değişimi
sehirGuncelle  an 2568 ms
sehirGuncelle  an 4220 ms
```

⇒ Her tik bir öncekini bitirmeden sıraya giriyordu. Tarayıcının tek iş
parçacığı hiç boşalmıyor, boyama ve tıklama kuyruğa düşüyordu.
Kullanıcının gördüğü *"takılma"* bir yavaşlık değil, **biriken kuyruğun
boşalmasıydı.**

📌 Ve `62 ms` bir hız ayarı değil **sabit**: hız seçimi `adim`i (günü)
büyütüyordu, aralığı değil ⇒ hızlı moda geçmek aynı kuyruğa **daha büyük
sıçramalar** yüklüyordu.

---

## ② 🔴 SEBEP: YEDİ AĞIR FONKSİYONUN ALTISINDA "DEĞİŞMEDİYSE ÇIK" KAPISI YOK

`tarihAyarla` → `guncelle()` (`app.js:5033`) her tikte şunu koşuyor:

| fonksiyon | satır | `setData` | değişim kapısı |
|---|---|---|---|
| devletGuncelle | 339 | 1 | 🔴 yok |
| sehirGuncelle | 2106 | 0 (DOM) | 🔴 yok |
| savasGuncelle | 2556 | 0 | 🟡 kısmî |
| seferGuncelle | 3056 | 1 | 🔴 yok |
| koridorGuncelle | 3537 | 2 | 🔴 yok |
| devirGuncelle | 2686 | 2 | 🔴 yok |
| isgalGuncelle | 2764 | 1 | 🔴 yok |
| olaylarGuncelle | 4361 | 0 | 🟢 var |

🟢 **Ve doğru desen kodda ZATEN VAR** — Osmanlı/tâbi/bölge katmanları
`di !== aktifDonem` kapısıyla korunuyor (`app.js:5053`), yani **yalnız
dönem değişince** yeniden kuruluyor. Öteki yedi katman aynı korumadan
yoksun. ⇒ Eksik olan bir teknik değil, **var olan bir kapının
uygulanmadığı yedi yer.**

---

## ③ YÜK TARİHLE BÜYÜYOR — **146 kat**

> 🔴 **BU BÖLÜMÜN İLK YAZIMI YANLIŞTI — evren yanlıştı, düzeltildi.**
> *"1300'de 342 → 1923'te 6143, 18 kat"* yazmıştım. O sayılar
> **çekirdek + kuyruk** evreninden (6155 madde) geliyordu; oysa `app.js`
> yalnız `OLAYLAR*` kovalarını süzüyor (`app.js:4099`) ⇒ **1317 madde.**
> Ölçüm doğruydu, **evren** yanlıştı — `§11`in *"ölçüm doğru, evren dar"*
> ailesi, ve bu sefer evren dar değil **geniş**ti.

Doğru ölçüm (`OLAYLAR*` süzgeciyle, `o.gi > t + 365` kapısı):
```
1300  ->     9 madde        1700  ->   739
1400  ->   130              1800  ->   904
1500  ->   298              1900  ->  1213
1600  ->   564              1923  ->  1317      ⇒ 146 KAT
```

⚠️ **Ve düzeltme iki yöne birden çalışıyor:** mutlak tarama sandığımdan
**4,7 kat küçük**, ama büyüme **8 kat daha dik.** Nitel bulgu
(*oynatma yıl ilerledikçe ağırlaşıyor*) **güçlendi**, ama…

🔴 …**niceliksel önemi DÜŞTÜ:** 1317 ögelik lineer bir tarama
mikrosaniyeler sürer. Yani bu tarama, ölçülen ~400 ms'in **kaynağı
değil.** Asıl yük `guncelle()` içindeki **DOM ve `setData`** işinde.

---

## ④ 🟢 UYGULANAN ÇARE — üçü birlikte

`js/app.js` "zaman akışı" dalı yeniden yazıldı:

```
① KENDİNİ KURAN ZİNCİR   bir sonraki tik ancak bu tik BİTİNCE kurulur
                         ⇒ kuyruk YAPISAL OLARAK birikemez
② requestAnimationFrame  tarayıcı tikler arasında BOYAYABİLİR; sekme
                         arkadayken kendiliğinden susar (pil + CPU)
③ GERÇEK ZAMANA BAĞLI    gün, geçen SÜREYE göre ilerler ⇒ kare düşse
   ADIM                  bile takvim hızı (gün/saniye) DEĞİŞMEZ
④ ikili arama            146 katlık büyümeyi bitirir — ama ③'ün yanında
                         KÜÇÜK bir kalem (bkz. ③'ün son satırı)
```

⚠️ **③ olmadan ①② oynatmayı YAVAŞLATIRDI:** düşen her kare bir adım
eksik demek olurdu. Üçü ayrı ayrı değil **birlikte** anlamlı.
🔴 Ve `_gecen` tavanı (1 sn) şart: sekme arkaya alınıp geri gelince `rAF`
dakikalarca susar, sonra tek karede yüzlerce gün atlanır — takvim
**sıçrardı.**

### SINAV — `C13`, iki yönde
`denetim/ARAC-OYNATMA-SINAV-0906.js`, gerçek kronoloji dizisinde:
```
GEÇME     46.585 vaka (40.000 rastgele + her maddenin 5 sınır vakası) · ayrışan 0
ATEŞLEME  bilerek bozulmuş bir ikili arama · ayrışan 1538  ⇒ sınav KÖR DEĞİL
```
📌 Ateşleme yolu olmasaydı sınav *"her zaman geçen"* bir sınav olurdu ve
hiçbir şey ölçmezdi.

---

## ⑤ 🔴🔴 VE YAMA KOŞARKEN BİR KUSUR ÇIKTI — **BENİM**, VE SİTE ÖLÜYDÜ

Tarayıcıda doğrulama yaparken konsol şunu bastı:
```
Uncaught TypeError: o.duygu.join is not a function   (app.js:4177)
```
⇒ Betik orada **duruyor**. Satır 4177'den sonrası hiç koşmuyor: harita
kurulmuyor, zaman kontrolleri atanmıyor (`akisModu === null`), **sitenin
tamamı ölü.**

**Sebep bendim:** dün `data/olaylar_ek22.js`'e yazdığım 1794 Zend
maddesinde `duygu: "notr"` — alan bir **dizi** olmalı ve sözlüğü **emoji**.
```
tarandı: 6155 maddenin dizi olmayan `duygu` taşıyanı → 1 (benimki)
düzeltildi: ["😔","⚔️"]   emsal: 1393 Muzafferîler — aynı coğrafya
            (Kirman), askerî yenilgiyle sona eren hânedan
sonra: dizi olmayan duygu → 0
```

🔴 **VE ASIL DERS BU: `denetle.py` TEMİZ DİYORDU.** O maddeyi indiren
commit'imin başlığı birebir şu: *"ZEND→KACAR 1794 · DRAMA · İKİ TAVAN ·
İKİ RENK — **denetle+renk_olc TEMİZ**"*.
```
denetle.py SORAR    JSON geçerli mi · değişmezler tutuyor mu
SORMAZ              bu alan DOĞRU TİPTE mi
```
⇒ `§11`in *"denetim var ≠ o soruyu soruyor"* ailesinin yeni üyesi, ve
**en pahalı biçimi**: denetim yeşil, yayın ölü. Bir tip hatası tek bir
maddede bütün siteyi düşürüyor çünkü `olaylar.forEach` **açılışta**
koşuyor.

🟢 **Ve yakalayan şey bir denetim değil, TARAYICIDA DOĞRULAMAK oldu.**
Yamamı ölçmeye gitmeseydim kusur yayına kadar gidecekti — ve `denetle.py`
onu **hiçbir turda** göstermeyecekti.

🔜 **BORÇ:** `denetle.py`ye bir **alan tipi** denetimi. Ölçüt basit ve
yanlış alarm üretmez: `duygu` · `etiket` · `kisiler` gibi alanların
külliyattaki **baskın tipi** ölçülür, ayrışan kayıt bildirilir.

---

## ⑥ ⚠️ NE ÖLÇTÜM, NE ÖLÇEMEDİM

```
🟢 ÖLÇÜLDÜ      tik aralığı (62 ms) · kapı yokluğu (6/7) · tarama büyümesi
                (146×, doğru evrende) · `olaylar`ın sıralı olduğu ·
                ikili aramanın eşdeğerliği (46.585 vaka) · tip kusuru (1 → 0)
                · betiğin artık DURMADIĞI (`akisModu` dolu, 1316 madde yüklü)
🟡 DEVRALINDI   ~400 ms iş süresi — kodun KENDİ yorumundan (22 Ağustos).
                Bugün ölçülmedi; veri o günden beri büyüdü ⇒ muhtemelen
                daha kötü, ama bu bir TAHMİN.
🔴 ÖLÇÜLEMEDİ   yamanın GERÇEK etkisi (kare süresi, akıcılık). İki sebep:
                  ① Browser paneli `visibilityState: "hidden"` — ekran
                    görüntüsü zaman aşımına uğradı, ve `rAF` gizli belgede
                    ZATEN susar (yani yamanın kendisi ölçülemez hâlde)
                  ② koşu 7b tam bir çekirdek tutuyor; şimdi ölçülen sayı
                    koşunun yükünü de taşır
                ⇒ Bu bir `TEMİZ` değil `ÖLÇÜLEMEDİ`. Koşudan sonra ve
                  pencere önde iken ölçülecek; alet (`agirOlc`) kodda.
```

📌 Ve bu, `OLCUM-YUK-VE-AB-0906.md`deki **ayrıştırma** darboğazından
(105 MB · ~9,2 sn) **ayrı bir kusurdur**: o açılışta bir kez ödenir, bu
her tikte. İkisi aynı şikâyetin iki ayrı sebebi ve çareleri de ayrı.
