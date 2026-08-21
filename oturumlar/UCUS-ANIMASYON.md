# UÇUŞ ANİMASYONU — görev tanımı

> **AD:** UÇUŞ ANİMASYONU · **MODEL:** Opus · **DİZİN:** proje kökü
> Bu dosya oturumun **açılış brifingidir**. Baştan sona oku.

---

## 0. EMRE'NİN ŞİKÂYETİ — hedefin tarifi, birebir

> *"Hâlâ bir uçağın kalkıp indiği ya da belli bir yükseklikten izlediği ve
> değişen kronolojilere göre kalkıp olay mahalline giden **bir helikopter
> kamerası gibi davranmıyor** sistemimiz. **PAT ORADA PAT BURADA.**
> Haritayı azar azar hareket ettirerek belli bir hızda, bazen yatay bir
> geçiş ile bazen eğik atış gibi önce yükselip sonra alçalarak olay
> mahallini ekrana yansıtacak şekilde güzel bir animasyon yapamadık."*

**Hedef tek cümle:** kamera **hiçbir zaman ışınlanmaz**; her geçiş sürekli
bir hareket olur.

---

## 1. 🟢 KOORDİNATÖRÜN ÖLÇÜMÜ — iki kök sebep adayı, ikisi de ölçüldü

Bu ikisini SEN ölçmek zorunda değilsin; **doğrula ve üstüne kur.**

### ① UÇUŞ VARSAYILAN OLARAK KAPALI
```html
<input type="checkbox" id="ucus-ac">        ← `checked` YOK
```
```js
function haritayiOlayaGotur(o) {
  if (!ucusAcEl.checked) { ...; return; }   ← İLK SATIR, hemen döner
```
⇒ Kullanıcı 🛩 kutusunu **elle işaretlemediyse hiçbir animasyon çalışmaz.**
Emre büyük ihtimalle onu hiç görmedi.

### ② OTO-ZOOM VARSAYILAN AÇIK VE KAMERAYI O SÜRÜYOR
```js
var otoZoom = true;                 // js/app.js:2736
function zoomUygula(d) { ... }      // her DÖNEM değişiminde imparatorluğu sığdırır
```
`zoomUygula` `guncelle()` içinden çağrılıyor; `haritayiOlayaGotur` ise
tıklama ve otomatik akıştan. **İki ayrı yol, tek kamera.**

⇒ Bugünkü varsayılan hâl: **uçuş KAPALI + oto-zoom AÇIK** = kamera yalnız
dönem sınırlarında sıçrıyor. *"Pat orada pat burada"* bunun tarifi.

⚠️ **ÇIKARIM, ÖLÇÜM DEĞİL:** ikisinin çatıştığını koddan çıkardım,
**tarayıcıda göremedim** (bu ortamda WebGL başlamıyor). İlk işin bunu
gerçek tarayıcıda doğrulamak olsun.

---

## 2. BUGÜN NE VAR — sıfırdan kurmuyorsun

`5ca81bf` ODAKLAMA MOTORU indi. Dokuz ayar, hepsi **insan biriminde**:

```
ayar-genislik-km   100-8000   varsayılan 1500   ekranda sağdan sola kaç km
ayar-yerlesim      orta|kenar                   olay ortada mı, kenardan mı girsin
ayar-kenarpay                                   kenardan girişte iç pay %
ayar-hiz-kms       200-6000   varsayılan 1500   km/saniye
ayar-sure-taban    0.2-2      varsayılan 0.8    en az kaç saniye
ayar-sure-tavan    1-8        varsayılan 3      en çok kaç saniye
ayar-hareket       egik|yatay varsayılan egik
ayar-yatay-esik    200-5000   varsayılan 1200   üstünde yatay seçilse de eğiğe düşer
ayar-irtifa · ayar-yakinlik                     eski sürgüler, hâlâ duruyor
```

Formüller (ölçülmüş, çalışıyor):
```
zoom  = log2(156543,03392 · cos(enlem) · genişlik_px / (km · 1000))
süre  = sınırla(mesafe / hız, taban, tavan)
eğik  = flyTo (van Wijk yayı)     yatay = easeTo (düz kaydırma)
```

---

## 3. 🔴 SENİN İŞİN — beş kalem, sırayla

### ① ÇATIŞMAYI ÇÖZ — kamerayı TEK ELDEN yönet
İki mekanizma aynı kamerayı sürüyor. Bir **kamera hakemi** gerekiyor:
```
öncelik  ①  kullanıcının elle gezinmesi (drag/zoom) → her şeyi iptal eder
         ②  olay uçuşu (kronoloji maddesi değişti)
         ③  oto-zoom (dönem değişti, imparatorluk sığdır)
```
⚠️ Oto-zoom'u **silme** — Emre'nin kendi isteği (`btn-zoom` "🔍 Oto").
Uçuş varken **susması** gerekiyor, yok olması değil.

### ② UÇUŞU VARSAYILAN AÇ
`ucus-ac` işaretli gelsin, tercih `localStorage`ta saklansın.
📌 Bu projede yazılı bir ders var: *"kapalıyken kimse varlığını bilmez."*

### ③ SIÇRAMAYI BİTİR — üç kaçış yolu var, üçünü de kapat
```js
if (ucusKipEl.value === "ani" || hizliGecis) { harita.jumpTo(...) }
```
```
a) `ucus-kip` = "ani"        kullanıcı seçerse meşru — ama VARSAYILAN "ucus" olmalı
b) `hizliGecis`              art arda <500 ms geçişte jumpTo'ya düşüyor
                             ⇒ SIÇRAMA yerine ÖNCEKİ UÇUŞU KESİP yenisini
                               başlatmak daha doğru (MapLibre zaten devralıyor)
c) `sonUcusKonumAnahtari`    aynı yerse hiç oynamıyor — bu DOĞRU (Emre:
                             "ekran içindeyse bir şey yapmasına gerek yok,
                             sadece işaret yanıp sönsün, iki kez yeter")
                             ⚠️ ama PARLAMA gerçekten çalışıyor mu, ÖLÇ
```

### ④ HELİKOPTER HİSSİ — Emre'nin asıl istediği
```
YATAY   easeTo · zoom sabit · sabit hızda kaydırma
EĞİK    önce YÜKSEL (zoom out) · yol al · sonra ALÇAL (zoom in)
        flyTo'nun van Wijk eğrisi bunu zaten yapar — `curve` yay yüksekliği
```
⚠️ `flyTo`ya `speed` **verme**: `duration` ile birlikte verilirse MapLibre
`speed`i yok sayar. Süreyi biz hesaplıyoruz, `duration` esas.
🔴 **Yay yüksekliği MESAFEYLE ORANTILI olmalı.** 100 km'lik bir geçişte
kıtaya çıkmak saçma; 3000 km'lik geçişte alçaktan gitmek göz yorar.
`curve`u sabit bırakmak yerine mesafeye bağlamayı ÖLÇ ve öngörünü yaz.

### ⑤ İMPARATORLUK ÇAPINDA OLAYLAR
Emre: *"Eğer o devleti ilgilendiren genel bir mesele ise o zaman **ülke
haritası ekrana sığdırılarak** harita aksiyon almalı."*
Kronoloji maddelerine `kapsam_genis:true` alanı giriyor (on oturum yazıyor).
⇒ `kapsam_genis` ise tek noktaya uçma, **devletin gövdesini `fitBounds` ile
sığdır** — ve bunu da ANİMASYONLU yap, sıçratma.

---

## 4. DOSYALARIN

```
js/app.js · index.html · css/style.css
```
🔴 **BU ÜÇÜ BAŞKA BİR OTURUMDA DA OLABİLİR.** Başlamadan önce tahtaya yaz
(`py arac/tahta.py yaz --kim "UÇUŞ ANİMASYONU" --kime "HERKES" --mesaj "..."`)
ve koordinatörden teyit al. `§7`: bir dosyanın tek sahibi olur, iki oturum
aynı dosyaya yazarsa **sessiz veri kaybı** olur.

`data/` ve `arac/` **sende değil**.

---

## 5. DOĞRULAMA — bu projenin en pahalı tuzağı burada

🔴 Bu ortamda **WebGL başlamayabilir**: `harita.getStyle()` `undefined`
döner, `haritaHazir` `false` kalır, harita hiç çizilmez ve ekran görüntüsü
alınamaz. Emre Browser panelini açtıysa çalışıyor olabilir — **önce bunu
ölç**, çalışmıyorsa ekran görüntüsüyle uğraşma.

Çalışmıyorsa ölçüm yolu:
```
harita.flyTo / easeTo / jumpTo'yu geçici olarak SARMALA ve çağrıları
kaydet — hangi metot, hangi zoom, hangi süre, hangi ofset
`getBoundingClientRect` ile kap ölçüsü
```
⚠️ Ölçülmüş bir tuzak: **kompozit edilmeyen sayfada
`getBoundingClientRect()` {0,0} döner** ve iki dalı birden sessizce çürütür
(`_ekrandaMi` hep false, `odakOfseti` hep [0,0]). `_haritaKutu()` bunun
için yazıldı — kullan.

**Ölçemediğini "ölçmedim" diye YAZ.** Animasyonun *görüntüsü* ancak
Emre'nin ekranında sınanır; sen **çağrılan parametreleri** doğrulayabilirsin.

---

## 6. KURALLAR

- **`§11`**: `sed` · `py -c` · `printf` · heredoc ile **Türkçe ya da
  backtick içeren** metin YAZMA. `Write` ile dosyaya yaz, `py <yol>` ile
  çalıştır. Commit: `git commit -F <dosya> -- <dosyalar>`
- `git add -A` **ASLA**. `arac/uret_petek.py`yi **ASLA** çalıştırma.
- Sürüm damgasını **SEN BASMA** — koordinatöre bildir (koşu kendi damgasını
  basıyor, çakışır).
- Bitince `node --check js/app.js`
- **ÖLÇÜM ile ÇIKARIM AYRI SATIRDA.**
- 🔴 **ÖNGÖRÜNÜ ÖLÇÜMDEN ÖNCE YAZ** — `denetim/ongoru_ucus.py`, damgalı,
  her kalemin yanında **mazereti olup olmadığıyla**. Bu projede iki öngörü
  çürüdü ve bilgiyi tutanlar değil **çürüyenler** taşıdı.

## 7. BEKÇİ — Emre istedi, boştayken 0 token
```
py arac/tahta_bekci.py --kim "UÇUŞ ANİMASYONU"      (Monitor, arka plan)
```
Aletin kendi ölçümü: *"YOKLAMA (mesaj yok) → hiçbir şey basmaz → 0 token"*.
⚠️ Bekçin yoksa tahtaya düşen hiçbir şeyi görmezsin.

## 8. RAPOR
```
① hangi kalem bitti (①-⑤)
② tarayıcıda WebGL çalıştı mı — çalıştıysa GÖZLE ne gördün
③ hangi metot kaç kez çağrıldı (flyTo/easeTo/jumpTo) — SAYIYLA
④ öngörün tuttu mu, çürüyen kalem hangisi
⑤ NEYİ ÖLÇEMEDİN
⑥ commit hash
```
Ara rapor: *"iş üstündeyim · şu aşamadayım · ~şu kadar kaldı"*.
