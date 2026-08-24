# BULGU-0032-VERİ — parti-emrelic-0032, H-0001…H-0007

**Oturum:** OPUS HAZIR KITA 82 (`local_28ee88c8-139d-4764-b957-8c91f2824d8e`)
**Tarih:** 24 Ağustos 2026 · **Şartname:** koordinatör (OSMANGAZİ), "VERİ FETİH DOĞRULAMA 0032"
**Yazdığım dosyalar:** bu rapor + `data/yer_yama_p32.js` (`window.YER_YAMA_P32`).
**Dokunmadıklarım:** `js/app.js`, `arac/*`, `data/yerlesimler*.js`, `data/olaylar*.js` — hiçbirine yazmadım.

> 🔴 Her maddede **① NE ÖLÇTÜM** ve **② ONDAN NE ÇIKARDIM** ayrı satırlardadır.
> Ölçmediğim yerde `ÖLÇMEDİM` yazıyor. Tek satırda birleştirmek, çıkarıma ölçümün
> güvenilirliğini ödünç verir (`CLAUDE.md §11`).

---

## 0. ÖNCE BAYATLIK — "bu şikâyet hâlâ geçerli mi?"

| ölçüm | sonuç |
|---|---|
| `git log --oneline -40` | **40 commit'in 40'ı TAHTA mesajı.** 0032'ye dokunan iş commit'i YOK. |
| `git log -- js/app.js` son commit | `e17bdea` (0031/H-0015 portre ad çakışması) |
| çalışma ağacında commit'siz `app.js` farkı | **98 ekleme / 14 silme** |

② Koordinatörün *"H-0004'ün sebebini bugün buldum ve düzelttim"* dediği değişiklik
**commit'lenmemiş, çalışma ağacında duruyor.** Bayatlık ölçümümü commit'e değil
**çalışma ağacına** göre yaptım — `git log` bu turda yanıltıcı bir zemin olurdu.

**Şartname doğrulaması:** `PARTI.md` 16 maddelik; bana verilen 7 madde numaralarıyla
**birebir tutuyor**, kayma yok. Klasörde 5 görsel var, bana düşen yedi maddenin
**yalnız üçünde** (H-0001 · H-0002 · H-0006). Kalan dördü metinle çalışıldı.

---

## A · SINIR / TARİH DOĞRULAMA

### H-0001 — Dubrovnik haraca bağlanırken İşkodra · Trebinye · Kotor Osmanlı değil miydi?

**① NE ÖLÇTÜM — veri (`girdi.yukle()`, 2606 nokta / 55 dosya):**

| yer | veri |
|---|---|
| Dubrovnik | `v:` **1458-01-01 → 1806-05-27** · öncesi `venedik` 1281-1358, `macaristan` 1358-1458 |
| İşkodra | `d:` **1479-01-25 → 1913** · öncesi `venedik` **1281-01-01**→1479 |
| Trebinye | `d:` **1466-06-01 → 1908** · öncesi `bosna` |
| Kotor (Cattaro) | Osmanlı dönemi **HİÇ YOK** — `sirbistan` 1281-1371 · `macaristan` 1371-1420 · `venedik` 1420-1797 |
| Herseknovi | `d:` 1482-01-01 (yakın komşu, kıyas için) |

**② ÇIKARDIĞIM — Emre'nin sorusunun cevabı: EVET, DOĞRU.** Dubrovnik'in tâbiiyeti
hangi tarihe alınırsa alınsın (1365 · 1430 · 1442 · 1458 · 1459) İşkodra'dan (1479)
ve Trebinye'den (1466) **öncedir**; Kotor ise hiçbir zaman Osmanlı olmamıştır.
⇒ Bu yarısı **ZATEN-DOĞRU**, düzeltme gerekmiyor.

#### 🔴 Ama aynı ölçüm İKİ AYRI KUSUR ortaya çıkardı

**KUSUR 1 — Dubrovnik'in tâbiiyet tarihi TDV ile uyuşmuyor (93 yıl).**
`kaynak:"dubrovnik"` alanı TDV'nin `dubrovnik` maddesini gösteriyor. Maddeyi
çektim (HTTP 200, gövde okundu, iki ayrı sorguyla çapraz sınandı):

```
"Dubrovnik kaynaklarına göre 1365 tarihli olan bu ahidnâme ile
 Dubrovnik Osmanlılar'ın haraçgüzârı oluyor."
1430-12-06  II. Murad'ın mektubu — vergi şartıyla serbest ticaret
1442-02     ferman — Edirne · Filibe · Kratovo'da %2 gümrük
1452        haraç 1500 filori
1459-03-07  yeni ahidnâme — gümrük %2, haraç 1500 filori "hükme bağlandı"
1469 · 1471 · 1472 · 1478 → 5000 · 9000 · 10.000 · 12.500 filori
```
🔴 **`1458` maddede HİÇ GEÇMİYOR.** Veri ve kronoloji maddesi 1458 diyor;
TDV'nin verdiği eşik yılları **1365 / 1430 / 1442 / 1459**.

② ÇIKARDIĞIM: `v:1458-01-01` ve `olaylar_ek2.js`teki `t:"1458-01-01"` maddesi
**kendi gösterdiği kaynakla desteklenmiyor.** ⚠️ Ama **düzeltmeyi ÖNERMİYORUM,
KARAR İSTİYORUM** — çünkü `§3.5.1`: bir sınır kayması iki uçtan da ölçülür:
```
1365'e çekilirse  →  `v:` (Osmanlı tâbi) ile `s:macaristan` (1358-1458) 93 YIL ÖRTÜŞÜR.
                     Tarihen DOĞRU (Ragusa aynı anda hem Macar hem Osmanlı
                     haraçgüzârıydı) ama veri modeli çift tâbiiyeti ifade
                     edebiliyor mu — BUNU ÖLÇMEDİM.
1459-03-07'ye      →  örtüşme doğmaz, gün hassasiyeti kazanılır, TDV'nin
alınırsa               "hükme bağlandı" ifadesine dayanır. En UCUZ seçenek.
1458'de kalırsa    →  `kaynak:` alanı yanlış yeri gösteriyor demektir; hiç
                       olmazsa gerçek dayanağı yazmak gerekir.
```

**KUSUR 2 — İşkodra'nın Venedik dönemi 115 yıl FAZLA, ve bir Osmanlı devri EKSİK.**
TDV `iskodra` (HTTP 200, gövde okundu):
```
1393        Kavala Şâhin İşkodra'yı aldı — KISA SÜRDÜ
1396        George Stratsimirović şehri VENEDİKLİLERE SATTI; Venedik 83 YIL tuttu
1479        "uzun bir kuşatmadan sonra ... ancak ANTLAŞMA İLE" Osmanlı'ya geçti
```
Veri `s: venedik 1281-01-01 → 1479-01-25` diyor — **tek blok**. Oysa:
- 1281-1393 Venedik **değil** (Balşa/Zeta hânedanı),
- 1393-1396 **Osmanlı** (Kavala Şâhin),
- 1396-1479 Venedik (TDV'nin "83 yıl"ı birebir bu aralık).

② ÇIKARDIĞIM: `§3.5`in **hayalet devlet** sınıfının aynası — burada hayalet olan
Osmanlı değil **Venedik**, ve fazlalık **115 yıl**. Öneri `yer_yama_p32.js`de.
⚠️ 1281-1393 arasının hangi kimliğe verileceğini **ÖLÇMEDİM** (`balsa`/`zeta`
künyesi `devletler.js`te var mı, bakmadım) — o yüzden öneri iki kademeli.

---

### H-0006 — Kırım Osmanlı egemenliğine katıldığında toprakları nereleri kapsıyordu?

**① NE ÖLÇTÜM — TDV `kirim` (HTTP 200, gövde okundu):**
```
"1475'ten itibaren güneyde Kefe, Sudak ve Mangub limanları civardaki araziyle
 birlikte DOĞRUDAN DOĞRUYA Osmanlı padişahına tâbi oldu ve Kefe'de sancak beyi
 ve bazan beylerbeyi rütbesinde bir Osmanlı valisi yerleşti."
"Yarımadanın kuzey bölgesindeki steplerde" ve iç kesimler Kırım hanlarında kaldı.
```

**① NE ÖLÇTÜM — veri, yarımada kutusu (44,0-46,3 K / 32,4-36,7 D), 14 nokta:**

| `d:` DOĞRUDAN Osmanlı (1475-06-06'dan) | `v:` TÂBİ (Kırım Hanlığı, 1475-06-06'dan) |
|---|---|
| Kefe · Sudak · Mankup · Balaklava · Yalta · Aluşta · Kerç · İnkirman | Bahçesaray · Akmescid · Karasubazar · Eski Kırım · Gözleve · Or Kapı |
| öncesi `ceneviz` (Mankup/İnkirman `teodoro` 1349-) | öncesi `kirim` **1441-**01-01 (hanlığın kuruluşu) |

Kanat: **Azak** `d:` 1475-06-06 ✓ · **Taman** `ceneviz`→`d:` **1482-06-01** ✓
(Matrega 1482'de düştü) · Anapa `kirim`→`d:` 1781 ✓ (kale 1781'de yapıldı) ·
Özi `kirim` 1441-1538 → `d:` 1538 ✓ · Rostov (`kur:`1749) ve Taganrog
(`kur:`1698) 1475'te **haklı olarak** yok.

**② ÇIKARDIĞIM: H-0006 ZATEN-DOĞRU — ve beklediğimden iyi.**
Veri, TDV'nin **doğrudan / tâbi** ayrımını nokta nokta, doğru kimliklerle ve
**gün hassasiyetinde** (1475-06-06, Kefe'nin düşüşü) taşıyor. Koordinatörün
"1475" kaba tarihi doğru ama veri ondan **daha iyi**.
⇒ *"Kırım ve çevresindeki toprakların ne kadarı gerçekte Kırım toprağı"*
sorusunun cevabı veride **zaten kayıtlı**: yarımadada 8 doğrudan / 6 tâbi,
bozkır ve Kuban `kirim`, Azak doğrudan.
⚠️ **Yeni oturum görevlendirmeye gerek YOK** (Emre "gerekirse görevlendir"
demişti — ölçüm gereksiz olduğunu söylüyor).
⚠️ **ÖLÇMEDİĞİM:** yarımadanın 14 noktası yeterli yoğunlukta mı, yani `§2`
emilmesi kıyı ile iç kesim arasında yanlış boyama üretiyor mu — buna
BAKMADIM, bu bir petek sorusu ve motor tarafı.

---

### H-0002 — "Karakoyunlu çöküşü maddesinde harita Karakoyunlu'ya odaklanmıyor; ayrıca Gürcistan'ın rengi Karakoyunlu ile aynı"

**① NE ÖLÇTÜM — madde (`olaylar_ek5.js`):**
```
t:"1467-11-10"  b:"Karakoyunlu Devleti'nin çöküşü: Cihan Şah'ın öldürülmesi"
yer:"Bingöl – Kiğı arası"   yer_kon:[39.1, 40.4]   yer_id: YOK
```
Kamera `yer_kon`a gidiyor (`olayKonumu`, app.js:5318 — `yer_kon` **önce** okunuyor).
"Bingöl" ve "Kiğı" **yerleşim olarak veride YOK** — kamera boş bir koordinata uçuyor.

**① O koordinatın 400 km çevresinde 1467-11-10'da hangi kimlikler var:**
```
akkoyunlu 33 · gurcistan 14 · memluk 14 · OSMANLI 11 · karakoyunlu 10 · dulkadir 2 · iran 1
```

**① Renk ölçümü (`arac/renk_olc.py`, projenin kendi aleti):**
```
esik DE_KOMSU = 12,0
gurcistan   #e020b0  <->  karakoyunlu  #e018e0    ΔE = 25,69   (eşiği GEÇİYOR)
en yakın eşzamanlı gurcistan<->karakoyunlu çifti: 160 km  (Sarıkamış <-> Erciş)
```

**② ÇIKARDIĞIM — iki ayrı hüküm:**

**(a) Odak şikâyeti HAKLI ve sebebi ölçüldü.** Madde bir **devletin çöküşünü**
anlatıyor, kamera ise **suikast noktasına** gidiyor — ve orada baskın kimlik
`akkoyunlu` (33), Karakoyunlu ancak beşinci (10). Yani ekranda "Karakoyunlu'nun
çöküşü" okunurken görülen gövde ağırlıklı olarak **Akkoyunlu**.
⇒ Kusur ne motorda ne kamerada: **`yer_kon` olayın yerini gösteriyor, maddenin
KONUSUNU değil.** Bu ikisi çoğu maddede aynıdır; *devlet çöküşü* maddelerinde ayrılır.

**(b) Renk şikâyeti: ölçüm GEÇİYOR ama kullanıcı ayırt EDEMEDİ — ve bu tanıdık bir sınıf.**
ΔE 25,69 eşiğin iki katı; sayısal olarak ihlal **değil**. Ama iki renk de
doygun magenta (`#e020b0` ton ~313°, `#e018e0` ton ~300°) — ΔE'yi ayakta tutan
şey **ton değil doygunluk/açıklık**, ve ekranda yan yana duran iki magenta
gövdenin ayırt edilmesi ton farkına bağlı.
📌 `CLAUDE.md`de yazılı ders: ***"eşik tek sayı değildir: anlatının merkezindeki
çift daha fazlasını hak eder"*** (`bugis ↔ gova` ΔE 12,4 → 25,8'e sıkıştırılmıştı,
`ava ↔ ayutthaya` aynı sınıf). **Burada da Emre bir gerçek okur olarak
ayırt edemedi** — bu, eşiğin geçildiğinden daha güçlü bir kanıttır.
⇒ **RENK oturumuna sevk:** `gurcistan ↔ karakoyunlu` hedefi ≥ 12 değil **≥ 35**
konarak yeniden çözülsün. `arac/renkler.py` benim dosyam değil, **DOKUNMADIM**.

**(c) BİRLEŞTİRİCİ HİPOTEZ — ÖLÇMEDİM, çıkarım:** (a) ile (b) tek bir kullanıcı
deneyiminin iki yüzü olabilir. Emre ekrana bakıp magenta görüyor, hangi
magentanın Karakoyunlu olduğunu seçemiyor ve *"Karakoyunlu'ya odaklanmıyor"*
diye okuyor. Bu **doğrulanmadı**; ama doğruysa (b)'yi düzeltmek (a)'yı da
büyük ölçüde kapatır ve (b) daha ucuzdur.

---

### H-0003 — "Uzun Hasan'ın Karakoyunlu'ya son vermesi maddesinde harita olay mahalline gitmeli"

**① NE ÖLÇTÜM — madde (`olaylar_ek7.js`):**
```
t:"1468-04-01"  b:"Uzun Hasan'ın Karakoyunlu Devleti'ne son vermesi"
yer:"Azerbaycan, Doğu Anadolu, Irak-ı Acem"       ← ÜÇ BÖLGE
yer_kon:[38.8853, 40.4966]                        ← TEK NOKTA (Bingöl civarı)
yer_id: YOK
```
400 km çevresi: `akkoyunlu 33 · memluk 16 · gurcistan 14 · karakoyunlu 11 · OSMANLI 10`.

**🔴 VE ASIL ÖLÇÜM — TEBRİZ:**
```
Tebriz  38,08 / 46,292  g:2
   s: 1406-10-21 -> 1468-04-01   karakoyunlu
   s: 1468-04-01 -> 1501-07-01   akkoyunlu      ← KIRILMA, MADDENİN TAM GÜNÜ
Bağdat  s: 1411 -> 1469-01-01 karakoyunlu ; 1469-01-01 -> 1508 akkoyunlu
```

**② ÇIKARDIĞIM — şikâyet HAKLI ve düzeltmesi VERİDE HAZIR.**
Maddenin haritadaki karşılığı **Tebriz'dedir**: veri, Karakoyunlu→Akkoyunlu
devrini **tam o gün, tam o noktada** zaten yazmış. Kamera ise 700 km batıda,
Bingöl civarında boş bir koordinata gidiyor — yani **maddenin kendi ürettiği
toprak değişimi ekran dışında kalıyor.** Emre "olay mahalline gitmeli" derken
tam bunu istiyor.
⇒ **ÖNERİ:** `yer_id:"Tebriz"` eklensin (`olayKonumu` `yer_kon`u ÖNCE okuduğu
için `yer_kon` **kaldırılmalı**, yoksa yeni alan hiç okunmaz).
⚠️ `kapsam_genis:true` **YANLIŞ olur**: o dal `donemler[di].b` ile **Osmanlı**
sınırına açılıyor (app.js:5510) — Karakoyunlu maddesi için Osmanlı çerçevesi
konuyla ilgisiz bir görüntü verir.
⚠️ Madde dosyası (`data/olaylar_ek7.js`) **benim değil**; öneri yamada, uygulamadım.

---

## B · ZOOM'DA GÖRÜNÜRLÜK — H-0004 · H-0005 · H-0007

> Koordinatörün sorusu: **"H-0005 ve H-0007 aynı sebep mi, başka mı?"**
> Cevap: **AYNI SEBEP** — ve H-0004 ile birlikte **üçü de tek bir kökün dallarıdır.**

### ⚠️ ÖNCE: TARAYICI ÖLÇÜMÜ YAPILAMADI, ve sebebi ölçüldü

Şartname *"tarayıcıdan ölç: düşük zoom'da `.odak-parlama` DOM'a giriyor mu"*
diyordu. **Yapılamadı.** Ölçüm:
```
atlas YÜKLENDİ    133 script · 2603 yerleşim · 1226 olay · 172 savaş işareti
harita ÇİZİLMEDİ  haritaHazir false · isStyleLoaded() false
                  harita.style.stylesheet YOK · katman 0 · sourceCache 0
WebGL             ÇALIŞIYOR — ANGLE (Intel UHD 620, D3D11), harita.painter VAR
window.inner*     0 × 0   (kabı elle 1100×700'e zorladım, canvas uydu, stil GELMEDİ)
🔴 29,5 saniyede  requestAnimationFrame  0 KARE
                  setInterval(16 ms)    10 tik   (kısılmış ama CANLI)
```
② ÇIKARDIĞIM: pano compositing yapmıyor ⇒ **rAF hiç ateşlemiyor** ⇒ MapLibre
render döngüsü dönmüyor ⇒ stylesheet işlenmiyor ⇒ `haritaHazir` hiç `true`
olmuyor ⇒ `savasGuncelle`/`sehirGuncelle` **ilk satırda `return`**.
🔴 **Bu, `js/app.js`te YAZILI olan teşhisi düzeltiyor.** `savasGuncelle` içindeki
not *"harita hiç çizilmedi (`getStyle()` undefined, **WebGL başlamıyor**)"* diyor.
**WebGL başlıyor** — ölçüldü. Başlamayan şey rAF. Fark pratik: *"WebGL yok"*
cümlesi okuyanı **denemekten vazgeçirir**; gerçek sebep *"pano görünmüyor"* ise,
panoyu görünür kılan her ortamda ölçüm **yapılabilir**.
⚠️ Notu **düzeltmedim** — `js/app.js` koordinatörün.

**İkinci arıza (yan bulgu):** `arac/sunucu.py` `socketserver.TCPServer` —
tek iplikli, `request_queue_size=5`. `index.html` **129 script** taşıyor;
tarayıcı 6+ paralel bağlantı açıyor ⇒ kuyruk taşıyor. Ölçüm: sayfa
`readyState:"loading"`de takıldı, DOM'a **1** script girdi, konsolda 15+
`ERR_CONNECTION_REFUSED`. Scratchpad'e `ThreadingTCPServer` kopyası yazıp
koşturunca **1 → 133 script**. `arac/sunucu.py`ya **dokunmadım**;
öneri: `TCPServer` → `ThreadingTCPServer` (tek satır, tarayıcıdan ölçüm yapan
**her** oturumu etkiliyor).

⇒ Aşağıdaki hükümler **kod okuması + geometrik model** ile kuruldu.
**Tarayıcıda DOĞRULANMADI** — bunu böyle damgalıyorum.

#### 🔴 "TARAYICI ÖLÇÜMÜ" TEK BİR KOVA DEĞİL — DOM ölçülür, HARİTA ölçülmez

Koordinatör aynı gün bunun ayrımını ölçtü ve buraya kaydediyorum:
```
merak butonu   352 × 24 px, tek satır   → ÖLÇÜLDÜ  ✓   (saf DOM yerleşimi)
harita         haritaHazir false        → ÖLÇÜLEMEDİ ✗  (rAF gerektiriyor)
```
② ÇIKARDIĞIM: **DOM ölçümü çalışırken harita ölçümü çalışmayabilir**, ve
birinin çalışmasından ötekinin de çalıştığı sonucu **çıkmaz**. Bir sonraki
oturum *"tarayıcıdan ölçebiliyorum"* diye harita ölçümüne girişip boşuna
zaman harcamasın: sınav `rAF ateşliyor mu`, `tarayıcı açılıyor mu` değil.

**Ve sınır ortamsaldır, oturumsal değil.** Koordinatör *"ben ölçerim"* dedi,
denedi ve çürüdü: `tab-1` 1280×800 öne getirildi → rAF 0 kare. Günün başında
aynı panoda uçuş ölçümleri **çalışmıştı** — fark, o sırada panonun Emre'nin
ekranında **açık** olmasıydı. ⇒ Harita ölçümü, panonun **gerçekten görünür**
olmasına bağlı; iki oturumda da aynı.

### ① Kod okuması — parlamanın TEK kapısı var

```
isaretYanipSon()  app.js:6165   .odak-parlama · 34 px SABİT · zoom'dan BAĞIMSIZ
   ↑ tek çağıran
_varista()        app.js:5649   isaretYanipSon + oncesiSonrasiKirp + panelCarp
   ↑ tek sahibi
haritayiOlayaGotur(o)  app.js:5478
   ↑ tek çağıranları
olayaGit()  app.js:3302        ve  app.js:7099 (dizin/kart tıklaması)
```
`haritayiOlayaGotur`un **`_varista`ya HİÇ uğramayan** dalları:
```
① ucusAcik() false  → "pasif" kip     : erken return, PARLAMA YOK
② hedef yok, kapsam_genis yok         : kasıtlı — noktası olmayan olay
③ hedef yok, kapsam_genis:true        : kasıtlı — imparatorluk görünümü
④ aynı konum                          : ✔ BUGÜN DÜZELTİLDİ (0032/H-0004)
⑤ ekranda + zoom yakın                : ✔ _varista
⑥ uçuş                                : ✔ moveend'de _varista
```

### ② 🔴 DÖRDÜNCÜ SESSİZ DAL — "zaman akışı" kipi

`oynatDurdur()`, app.js:5096:
```js
if (akisModu.value === "olay") {  ...  olayaGit(olaylar[i]); }   // ✔ parlama var
else { setInterval(function(){ tarihAyarla(suanki + adim); }, 62); }  // 🔴 olayaGit YOK
```
**② ÇIKARDIĞIM:** *"⏱ Zaman akışı"* kipinde `olayaGit` **hiç çağrılmıyor**,
dolayısıyla `haritayiOlayaGotur` da, `_varista` da, `isaretYanipSon` da
çağrılmıyor. Gün ilerler, maddeler geçer, **hiçbir olay mahalli yanıp sönmez.**
Koordinatörün bulduğu üç sessiz dalın **dördüncüsü**, ve tek satırlık bir
`if`in `else` tarafında duruyor.
📌 Varsayılan kip `"olay"` (23 Ağustos'ta Emre'nin isteğiyle) — yani bu dal
**yalnız kullanıcı zaman akışına geçince** görünür. Aralıklılığı bundan olabilir.

### ③ Kalıcı savaş işareti düşük zoom'da NE OLUYOR — ölçüldü

CSS (`css/style.css:2052-2061`):
```css
#harita.uzak     .savas-isaret .sv-ad  { font-size: … }      /* z 4,0-5,2 */
#harita.cok-uzak .savas-isaret .sv-ad  { display: none; }    /* z < 4,0  ADI GİZLENİYOR */
#harita.cok-uzak .savas-isaret .sv-ikon{ transform: scale(0.72); }  /* ikon %72 */
```
Yani z<4,0'da savaş işareti **adsız, ~11,5 px bir ⚔ glifi**ne iniyor.
📌 Emre H-0007'de bunu zaten görmüş ve kabul etmiş: *"**YAZISI GÖRÜNMEYECEK
OLSA BİLE** olay mahali yuvarlak yanmalı sönmeli."*

### ④ Çakışma elemesi SEBEP DEĞİL — kendi hipotezimi çürüttüm

`savasGuncelle` (app.js:2190) şehir etiketiyle çakışan savaş işaretini
haritadan **siliyor**. Düşük zoom'da çakışmanın artacağını varsaydım ve
**geometrik olarak ölçtüm** (Web Mercator, MapLibre'nin **512 px** döşeme
kuralı — 256 varsaymak tam 2× yanlış verir, `CLAUDE.md`de kayıtlı):

```
H-0005 Racova   46,64 / 27,73  ·  300 km içinde AKTİF yerleşim: 31
H-0007 Akdere   47,15 / 26,30  ·  300 km içinde AKTİF yerleşim: 29
  z=3,0   eşik d>=3   çizilen komşu:  0   ÇAKIŞAN: 0
  z=3,5   eşik d>=3   çizilen komşu:  0   ÇAKIŞAN: 0
  z=4,5   eşik d>=2   çizilen komşu:  0   ÇAKIŞAN: 0
  z=5,5   eşik d>=1   çizilen komşu: 31/29  ÇAKIŞAN: 0
  z=6,5   eşik d>=1   çizilen komşu: 31/29  ÇAKIŞAN: 0
```
**② ÇIKARDIĞIM: eleme SEBEP DEĞİL.** Hiçbir zoom'da çakışma yok — hipotezim
**ölçümle çürüdü**, ve çürüdüğünü yazıyorum çünkü bir sonraki oturum aynı
yola girmesin.

#### 🟢 Ama bu ölçüm beklemediğim bir şey buldurdu — ve daha büyük

Çakışma sıfır çıktı çünkü **z<5,2'de o bölgede çizilen etiket YOK**. Sebebini
atlas çapında ölçtüm:

```
app.js:1394  zoomEşiği()   z<4,0 → yalnız d3   ·  4,0-5,2 → d3+d2  ·  ≥5,2 → hepsi
yerleşim `g` dağılımı (2606 nokta):   g=0 → 2065 · g=1 → 372 · g=2 → 164 · g=3 → 5
kademe = max(g,1)
```
🔴 **z < 4,0'da bütün dünyada çizilen etiket sayısı: 5.**
Ve beşi bunlar: **Söğüt · Bursa · Ankara · Edirne · İstanbul.**
z < 5,2'de çizilen: **169** (2606'nın %6,5'i) ⇒ **2437 nokta (%93,5) etiketsiz.**

📌 `app.js:1391`deki yorum *"z<4,0 → yalnız d3 (başkentler: İstanbul, Bursa,
Edirne, **Kahire**…)"* diyor. **Kahire g=2'dir, o beşin içinde DEĞİL.** Yorumun
örnek listesi ölçümle uyuşmuyor — küçük ama yazılı bir iddia ve yanlış.

**② ÇIKARDIĞIM:** Emre "zoom geride" bakarken Boğdan'da **tek bir yer adı bile
yok**; ekranda adsız 11,5 px'lik bir ⚔ var. *"İşaretlenmemiş"* hükmü, kullanıcı
gözünden **doğru**. Ve bu **Boğdan'a özel değil** — g alanı %79 boş olduğu için
atlasın hemen her yerinde aynı.

### ⑤ ÜÇ MADDENİN BİRLEŞİK HÜKMÜ

| madde | ① ölçtüğüm | ② çıkardığım |
|---|---|---|
| **H-0004** Arzila | `yer_id:"Arzila (Asilah)"` çözülüyor (nokta VAR, `yerlesimler_ek3.js`, index.html yüklüyor) | Koordinatörün bulduğu **④ aynı-konum** dalı doğru teşhis. Arzila'dan önceki madde de Fas kıyısındaysa `_varista` atlanıyordu. |
| **H-0005** Racova | `yer_kon:[46,6407 · 27,7276]` · `savaslar.js` kaydı VAR (46,64/27,73 — **birebir aynı**) | İşaret haritada; parlamıyor. Sebep: parlama yalnız `_varista`dan doğuyor. |
| **H-0007** Akdere | `yer_id:"Suçava (Suceava)"` (nokta VAR, g=0) · `savaslar.js` kaydı 47,15/26,30 | 🔴 **EK BULGU:** maddenin odağı **Suçava**, savaş işareti **Războieni** — arası ~55 km. Kamera bir yere, işaret başka yere. |

> **ORTAK KÖK:** `.odak-parlama` **zaten zoom'dan bağımsız** (34 px sabit).
> Görünmemesinin sebebi zoom değil, **hangi yoldan geçildiği**: parlama
> `haritayiOlayaGotur → _varista` zincirine bağlı, ve o zincir
> *pasif kipte* ve *zaman akışı kipinde* **hiç çalışmıyor**; uçuş kipinde ise
> parlama **varıştan sonra**, yani kamera **zaten yakınlaşmışken** doğuyor —
> kullanıcı onu "zoom geride iken" hiç göremiyor.
>
> ⇒ Emre'nin ikisinde de yazdığı cümle bunu birebir tarif ediyor:
> **"ZOOM NEREDE OLUR İSE OLSUN olay mahaline bir yuvarlak yakıp söndürmeli."**
> İstenen şey parlamanın **uçuştan ayrılmasıdır.**

**KOORDİNATÖRE ÖNERİ (kod SENİN, uygulamadım):** `isaretYanipSon`, kameradan
bağımsız bir kapıdan da çağrılabilmeli — madde "şu an geçerli" olduğunda,
`ucusAcik()`ten ve `akisModu`ndan bağımsız. `olayKonumu(o)` zaten hedefi
veriyor; parlama kamerayı hiç oynatmadan da konabilir.
⚠️ Ve `§11`in *"bir düzeltme aynı kusurun BÜTÜN dallarında aranmalı"* dersi:
bu sefer dallar **sayıldı** — altı dal, ikisi kasıtlı, dördü parlamalı olmalı.

---

## ÖZET

| madde | hüküm | kime |
|---|---|---|
| H-0001 | **ZATEN-DOĞRU** (soru) + **İKİ VERİ KUSURU** (Dubrovnik 1458↔TDV · İşkodra 115 yıl) | veri — yamada |
| H-0002 | odak **HAKLI** (yer_kon ≠ konu) · renk **eşiği geçiyor ama sıkıştırılmalı** | RENK oturumu + veri |
| H-0003 | **HAKLI** — düzeltme veride hazır: `yer_id:"Tebriz"` (1468-04-01 kırılması orada) | kronoloji sahibi |
| H-0004 | koordinatörün teşhisi **DOĞRULANDI** (yer_id çözülüyor, dal ④) | koordinatör (yapıldı) |
| H-0005 | **H-0007 İLE AYNI SEBEP** — parlama uçuşa bağlı | koordinatör |
| H-0006 | **ZATEN-DOĞRU** — TDV ayrımı veride nokta nokta var, yeni oturum gerekmez | — |
| H-0007 | **H-0005 İLE AYNI** + ek: odak Suçava, işaret Războieni, ~55 km ayrı | koordinatör + veri |

**Boşluk kalmadı: 7/7 maddede hüküm var.**

---

## ÇÜRÜTTÜKLERİM — üçü şartnamenin, biri benim

> Koordinatörün isteği: *"çürüten kısmı özellikle aç: bu gece çürütülen her
> varsayım, doğrulananlardan daha çok iş gördü."* Ayrı bölüm açıyorum.

| # | varsayım | kaynağı | ölçüm | sonuç |
|---|---|---|---|---|
| ① | *"Dubrovnik'in haraca bağlanması **1458**"* | şartname (koordinatör, "hatırımdan" damgalı) | TDV `dubrovnik` gövdesi, iki ayrı sorguyla: **1458 hiç geçmiyor**; eşikler 1365 · 1430 · 1442 · 1452 · 1459-03-07 | **ÇÜRÜDÜ** |
| ② | *"H-0002/H-0003'ün muhtemel sebebi `yer_id` eksik ya da `kapsam_genis`"* | şartname | İkisinde de `yer_kon` **VAR** ve `olayKonumu` onu **önce** okuyor; `yer_id` yok, `kapsam_genis` yok | **ÇÜRÜDÜ** |
| ③ | *"`.savas-isaret` düşük zoom'da çakışma elemesiyle siliniyor"* | **BENİM** hipotezim | Web Mercator piksel kutusu, 5 zoom kademesi, iki vaka: **çakışan 0/0/0/0/0** | **ÇÜRÜDÜ** |
| ④ | *"app.js: harita çizilmiyor çünkü **WebGL başlamıyor**"* | `js/app.js` içinde yazılı not | WebGL **çalışıyor** (ANGLE/D3D11, `harita.painter` VAR); rAF 29,5 sn'de **0 kare**, `setInterval` 10 tik | **ÇÜRÜDÜ** *(düzeltildi: r3343/f80a182)* |

**②'nin niçin önemli olduğu:** şartname *"nokta yeri eksik"* sınıfında bir kusur
bekliyordu; ölçüm **tam tersini** söyledi — hedef **var**, ve kamera oraya
gidiyor. Kusur *eksik hedef* değil **yanlış hedef**. İki sınıfın çaresi de
zıttır: eksik hedefe `yer_id` **eklenir**, yanlış hedefte var olan `yer_kon`
**kaldırılır** (yoksa yeni alan hiç okunmaz). Yanlış sınıfla başlanan bir
düzeltme, doğru alanı ekleyip **hiç etkisi olmadığını** görürdü.

**③'ü kendim çürüttüm ve yazıyorum ki tekrar denenmesin.** Eleme mekanizması
gerçek ve zoom'a duyarlı — ama **bu iki vakada ateşlemiyor**. Ölçüm, aramayı
yanlış yerden çevirdi ve asıl bulguyu (z<5,2'de bölgede hiç etiket olmaması)
o çevirme sırasında verdi.

**ÖLÇMEDİKLERİM (açıkça):** ① Dubrovnik'te `v:` ile `s:` örtüşmesinin motorda
ne ürettiği ② İşkodra'nın 1281-1393 arası kimliği (`balsa`/`zeta` künyesi var mı)
③ Kırım'da 14 noktanın petek yoğunluğu olarak yeterli olup olmadığı
④ H-0002'deki birleştirici hipotez ⑤ B bölümünün tamamının tarayıcı doğrulaması.
