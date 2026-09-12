# KITA 14 · ŞEHİRKÖY ZİNCİRİ — SONUÇ

```
GÖREV     tahta M-3592 · IS① · H-0002 · H-0004 · H-0008
GİRDİ     denetim/TRIYAJ-PAKET-0043-0912.md §③
ÖNGÖRÜ    denetim/KITA14-ONGORU-0912.md (kaynak okunmadan yazıldı)
ALET      denetim/ARAC-KITA14-OLC-0912.py
YAZDIM    data/olaylar_p0043a.js (YENİ) · data/yerlesimler_serhat.js (yorum)
🔒 data/yerlesimler.js'e DOKUNMADIM — Oturum 0'ın dosyası.
```

# ⓪ TEK CÜMLEYLE

**Şehirköy'ün verisi DOĞRU. Enklavın sebebi 59 km batıdaki NİŞ.**
Sevkin iki teşhisinden biri çürüdü, öteki doğru ama başka bir anlamda.

---

# ① SEVKİN TEŞHİSİ ① — **ÇÜRÜDÜ**

> *"1443-01-01 YUVARLAK VE MUHTEMELEN YANLIŞ. Haçlı ordusu Niş'i
> 3 Kasım 1443'te aldı; Şehirköy Sırp'a ON AY ERKEN geçiyor."*

TDV `sehirkoy` (HTTP 200, gövde okundu):
> *"Kral Vladislav ve Sırp Despotu Curac Brankoviç liderliğindeki Haçlı
> ordusu Şehirköy'ü zaptetti"* — **YIL veriyor, GÜN VERMİYOR.**

⇒ `1443-01-01` **yuvarlak değil**, `§4`ün kendi yazımı: *"yıl biliniyor,
gün bilinmiyor."* Niş'in düşüş günü Şehirköy için **kaynaksız** olurdu ve
`§4` bunu açıkça yasaklıyor (*"künyenin `f:`/`t:` günü bir KAYNAK
DEĞİLDİR"*).
🔴 **Sevkin önerisi uygulansaydı, doğru bir kayda kaynaksız bir gün
yazılmış olurdu.**

---

# ② SEVKİN TEŞHİSİ ② — DOĞRU, ama Değişmez 2 anlamında değil

> *"1456-01-01 dönüşünün KRONOLOJİ MADDESİ YOK ⇒ Değişmez 2 ihlali"*

Ölçüldü: 1456-01-01'in **±0 gününde üç madde var** (iki İtalyan şehri +
Enez). Yani Değişmez 2 **KAPALI** diyor ve Şehirköy açık listesinde yok.
Kusur `D147`in tarif ettiği cinsten:
> *"Değişmez 2'nin 'kapalı' hükmü, o günün BÜTÜN geçişlerinin
> anlatıldığı anlamına gelmez."*

⇒ Emre'nin H-0008 şikâyeti (*"alınıyor ama kronolojide görünmüyor"*) tam
bu boşluk. **Madde yazıldı** (`data/olaylar_p0043a.js`).

---

# ③ 🔴🔴 ASIL BULGU — NİŞ (`§3.5.1`: iki uç da ölçülür)

TDV `nis`, aynen:
> *"24 Safer 848'de (12 Haziran 1444) Edirne'de, 12 Temmuz'da ise
> Segedin'de on yıllığına imzalanan Edirne-Segedin Antlaşması'ndan sonra
> **Niş Sırplar'a iade edildi** … 860'ta da (1456) Curac Brankoviç'in
> ölümünün ardından kati olarak Osmanlı hâkimiyetine girdi."*

**1444-08-15 kesiti (ölçüldü):**
```
Şehirköy    sirp-despotlugu   ✓        Alacahisar  sirp-despotlugu  ✓  (s: 1444-08-01)
Semendire   sirp-despotlugu   ✓        NİŞ         OSMANLI          🔴
Sofya · Köstendil · İhtiman · Vidin   OSMANLI  ✓ (doğru — iade kapsamında değiller)
```
⇒ **Atlas Segedin iadesini zaten modelliyor** — Alacahisar ve Semendire
için, ikisi de `1444-08-01`. **Niş için modellemiyor.**

🔴 **Şehirköy'ü Osmanlı'ya çekmek doğru veriyi bozar VE enklavı kapatmaz:**
Niş yanlış kaldıkça hat açık kalır. `§3.5.1`: *tek uçtan bakan düzeltme,
hatayı taşır — silmez.*

## 🟡 Ve triyajın "8/8" ölçümü kısmen KESİT ARTEFAKTI
Triyaj kesiti **1444-06-15**'te aldı; atlasın Segedin günü **1444-08-01**.
O tarihte Alacahisar ve Semendire **henüz Osmanlı'ydı**. 1444-08-15'te
ikisi de Sırp. Enklav gerçek ama penceresi 1443-01-01 → 1444-08-01'dir,
13 yıl değil ~19 ay.

## 🔒 REÇETE — 1.MURAT'a (dosya onun)
```
data/yerlesimler.js · Niş kaydı
   s: += {f:"1444-08-01", t:"1456-01-01", d:"sirp-despotlugu"}
   d:  bu aralık kadar bölünür
GÜN GEREKÇESİ: 1444-08-01 KOMŞUSUNUN GÜNÜDÜR (Alacahisar · Semendire).
   D084: komşusunun kullandığı günü kullanmak, kendi gününü seçmekten
   dayanaklıdır. TDV 12 Haziran (Edirne) ve 12 Temmuz (Segedin) veriyor;
   atlasın fiilî teslim günü olarak 1444-08-01'i seçmiş olması KORUNUR.
⚠️ Bu değişiklik Niş'te İKİ yeni kırılma açar (1444-08-01 · 1456-01-01).
   1456-01-01 maddesi ARTIK VAR (benim dosyam, Niş'i de adıyla anıyor).
   1444-08-01 için ±30 günde madde OLUP OLMADIĞI ölçülmeli.
```

---

# ④ ÖNGÖRÜ KARNESİ

| | Öngörü | Sonuç |
|---|---|---|
| **Ö1** | Sırp penceresi 13 yıl değil ~1 yıl | 🔴 **ÇÜRÜDÜ** — TDV 1443→1456'yı doğruluyor |
| **Ö2** | başlangıç 1443-11-03'e yakın olacak | 🔴 **ÇÜRÜDÜ** — TDV gün vermiyor, gün YAZILMADI |
| **Ö3** | 1456 bir dolgu, gerçek dönüş 1444'te | 🔴 **ÇÜRÜDÜ** — 1456 TDV'de açıkça var |
| **Ö4** | öteki uçta boşluk doğmayacak | 🟢 geçersiz — değişiklik yapılmadı, boşluk da yok |
| **Ö5** | 2 madde yazılacak | 🟡 **1 madde** — 1443 maddesi ZATEN VARDI |
| **Ö6** | denetle sayıları değişmeyecek | 🟢 **TUTTU** — beşi de birebir aynı |

🔴 **Üç öngörüm birden çürüdü ve sebebi tek:** hepsi *"veri yanlış"*
varsayımından türemişti. Veri doğruydu. Öngörünün "mazereti olmayan
yön"ü tam bunu söylüyordu ve uyguluyorum:
> *"TDV Şehirköy'ün 1443-1456 boyunca gerçekten Sırp kaldığını söylüyorsa
> öngörü çürümüştür ve veri DEĞİŞTİRİLMEZ."*
⇒ **Veri değiştirilmedi.**

---

# ⑤ DENETLE ÖNCE / SONRA

```
                       ÖNCE                          SONRA
Değişmez 1    3817 yerleşim, 319 sahipsiz    319 sahipsiz     AYNI
Değişmez 1c   belgesiz 4 (tavan 4)           4                AYNI
Değişmez 2    528 kırılma, 2 açık            528 · 2 açık     AYNI
Değişmez 2s   103 AÇIK (tavan 121)           103              AYNI
Değişmez 2i   3 açık (tavan 3)               3                AYNI
Değişmez 2t   kırılmasız madde 12            12               AYNI
```
🔴 **Taban ZATEN KIRMIZIYDI** (`1` 319 sahipsiz · `2` 2 açık) — başka
oturumlar iş üstünde. Bu yüzden kabul ölçütüm *"denetle temiz"* değil,
***"benim değişikliğim bu sayıları kötüleştirmesin"*** oldu (`§1.5`in
kendi dersi). Kötüleştirmedi.

🟢 **Ve `denetle.py`nin dosyamı GERÇEKTEN okuduğu doğrulandı** —
`glob("olaylar*.js")` + `window\.(OLAYLAR\w*)` regex'i; `OLAYLAR_P0043A`
eşleşiyor. Aksi hâlde "değişmedi" boş bir kümenin doğrulaması olurdu
(`D187`).

## ⚠️ VE BİR SAYI DEĞİŞTİ — BENİM DEĞİL
```
mükerrer madde   ÖNCE 2 çift   →   SONRA 3 çift
yeni çift: 1516-06-05 Yavuz'un Mısır seferi için İstanbul'dan hareketi
           olaylar_ek5.js  ↔  olaylar_p0043b.js
```
`olaylar_p0043b.js` **19:36:47**'de yazılmış — benim dosyamdan **8 saniye
sonra**, ve o **KITA 15'in** dosyası (M-3592 IS③). Şehirköy'le ilgisi yok.
📌 Kendi koşumla başkasının işini ayırt etmeseydim bunu **kendi
gerilemem** diye raporlayacaktım. Canlı bir depoda önce/sonra ölçümü,
*"arada başka kim yazdı"* sorusunu da sormadan okunamaz.

---

# ⑥ SEVKİN İKİ SLUĞU ÖLÜ
```
🟢 CANLI  sehirkoy · sirbistan · nis · izladi · varna-muharebesi   (200)
🔴 ÖLÜ    ii-murad · ishak-bey                                     (302)
```
⚠️ Ve `sirbistan` **canlı ama işe yaramadı**: 1443-1459 penceresi için
istenen ayrıntıyı taşımıyor (Segedin, Semendire teslimi, Brankoviç'in
ölüm tarihi — hiçbiri yok). `§4②`nin tam vakası: **200 ≠ doğru madde.**
Bilgi `nis` ve `sehirkoy` maddelerinde çıktı.

---

# ⑦ AÇIKÇA ÖLÇMEDİKLERİM (`D107`)
```
⚪ ölçülemedi  Brankoviç'in ölüm GÜNÜ (TDV yalnız 1456 diyor)
⚪ ölçülemedi  1444-08-01'in ±30 gününde madde var mı — Niş düzeltilirse
              gerekli olacak; ölçmedim çünkü o dosya benim değil
🔴 bulunamadı  Segedin iadesinin KAPSAMI (hangi kaleler) — TDV
              `sirbistan` bunu vermiyor, `nis` yalnız Niş'i söylüyor
⚪ yazılmadı   1444 iadesi için ayrı madde — Şehirköy'de o gün KIRILMA
              YOK (1443→1456 kesintisiz Sırp), ve `1444-06-12 Edirne-
              Segedin Antlaşması` maddesi ZATEN VAR (olaylar_ek.js)
```

# ⑧ 1.MURAT'A — BAĞLANMASI GEREKEN
```
data/olaylar_p0043a.js   →  index.html satırı SENDE (D099)
                            ad alanı: window.OLAYLAR_P0043A (ölçüldü: serbest)
                            ayrıştırma sınandı: node eval ✓ · 1 madde
🔒 data/yerlesimler.js   →  Niş reçetesi §③'te — SENİN dosyan
```
