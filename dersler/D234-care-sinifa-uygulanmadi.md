# D234 — Çare kayda uygulandı, SINIFA uygulanmadı: aynı şikâyet sekiz gün sonra üç katı döndü

**23 Eylül 2026** · `parti-emrelic-0076` gece vardiyası · ölçen `HARITA-0076`

---

## Vaka

15 Eylül 2026'da Emre bir kusur bildirdi: *"Srebrenik–Bosna Brod'un üstünde
yarısı kırmızı yarısı yeşil **DİKDÖRTGEN**."* Teşhis doğru kondu, çare doğru
yazıldı, `data/hukuki_sinirlar.js:325`'e gerekçesiyle birlikte not düşüldü:

> *"🔴 15 Eylül 2026 — DOLGU KAPATILDI … Bu kutu opak boyanıyor ve DÜZ
> KİRİŞİYLE bölünüyordu."*

**Ve çare yalnız `karlofca-bosna-sava-1699` kaydına uygulandı.**

Sekiz gün sonra, 164 maddelik pakette **aynı kusur dört madde olarak** geri
geldi — `H-0096` · `H-0139` · `H-0147` · `H-0148`. Emre'nin kendi cümlesi:
*"BU BOZUK HARİTA GÖSTERİMİ HATASI HÂLÂ BU SENE OLMUŞ DEVAM EDİYOR."*

## Ölçüm — şikâyet haklıydı ve büyüklüğü sayılabilirdi

Kusur çizim katmanında: `js/app.js:1873` `hukuki-sinir-dolgu` `fill-opacity:1`
ile kuruluyor, `_cKapsamaPoligonu` `kapsama.kutu`yu **eksen hizalı dikdörtgene**
çeviriyor, hat köşegeninden kesiyor, iki parça tam opak basılıyor. Canlı motorda
birebir üretildi (1913-05-30: `#2d6c0c` ve `#8e0b22`, birleşimleri **tam olarak**
`kapsama.kutu`). Veride böyle bir gövde YOK — 71.557 + 6.082 halka tarandı,
dikdörtgen 0, bowtie 0. **Kusur üretimde değil çizimde.**

Dikdörtgen çizen üç kaydın taşıdığı süre:

| kayıt | pencere | gün |
|---|---|---|
| `ii-erzurum-sattularap-1847` | 1847-05-31 → 1923-10-29 | **27.910 ≈ 76 yıl** |
| `misir-sudan-22-paralel-1899` | 1899-01-19 → 1914-12-18 | 5.812 ≈ 16 yıl |
| `midye-enez-1913` | 1913-05-30 → 1913-06-29 | 30 |

**Toplam 33.753 gün = atlasın 1281–1923 aralığının %14,4'ü.**

📌 Ve Emre'nin *"uzun süre bozuk gösteriliyor"* sözü bir izlenim değil bir
ölçümdü: `H-0096` (1900) ile `H-0147` (1913) **aynı kutunun 13 yıl arayla iki
fotoğrafı.** Aynı kusuru iki kez bildirmek zorunda kalmıştı.

## Ders

🔴 **Bir kusuru düzeltirken sorulacak soru "bu kayıt düzeldi mi" değil,
"bu kusuru ÜRETEN yapı başka kaç kayıtta var" sorusudur.**

Bu, `YASALAR C12`nin (*değişikliğin sınırı dosyası değil BAĞLILARIDIR*) veri
tarafındaki yüzü. Orada sınır **kodun** bağlıları, burada **şemanın**: aynı
alanı (`kapsama.kutu` + dolgu açık) taşıyan her kayıt aynı kusuru doğurur.

⚠️ Ve tek kayda uygulanan çare **en tehlikeli hâli** üretir: kusur *çözülmüş*
görünür (kayıt var, not var, tarih var, gerekçe var) ama sınıf açıktır. Bir
sonraki bildiren, kendisine *"bu zaten çözülmüştü"* denme riskiyle karşılaşır.

## Çare — üç katman, üçü de bu turda kuruldu

**① Kayıt:** iki kayıtta `dolgu:false` (biri tereddütsüz, biri tartılarak;
30 günlük *"eksik bilgi"* bedeli 30 günlük *"yanlış görünüm"* bedelinden küçük).

**② Kalıcı kapı:** `denetim/HARITA-0076-kutu-kapisi.py` — tek soru sorar:
*"`kapsama.kutu` taşıyan ve `dolgu` alanı `false` olmayan kaç kayıt var?"*
Çıkış 0 = temiz, 1 = dikdörtgen çizen kayıt var. **İki yönde sınandı:**
pozitif yönde üçünü de buluyor, negatif yönde `dolgu:false` taşıyanı ve
poligon dalındaki kaydı **bulmuyor**.

**③ Asıl çare (henüz veri eksik):** `tur:"poligon"` + kıyı izleyen
`nokta_dizisi`. **Poligon dalı `js/app.js:7346`'da ZATEN çalışıyor** — eksik
olan kod değil veri. Kural basit ve sınanabilir:

> **Kapsama poligonunun her kenarı ya denizde ya mevcut bir devlet sınırında
> bitmeli.** Kara üstünde biten her kenar ekranda yapay bir çizgi olarak
> görünür — kusur tam budur.

## Kardeş ders — kapatmak her kayıtta doğru çare DEĞİL

`misir-sudan-22-paralel-1899` kapatılmadı ve sebebi yazıldı: oradaki dolgu
**gerçek bilgi taşıyor** (22. paralel gerçekten düz bir hattır ve o kuşakta
yerleşim noktası yok denecek kadar az). Kapatmak Mısır–Sudan ayrımını
haritadan tümüyle düşürürdü. Kutuyu gerçek sınıra oturtmak ise bir **coğrafî
hüküm**dür ve `§4` gereği kaynak ister; kaynak `bulunamadı` ⇒ **kalem Emre'ye
açık bırakıldı.**

📌 *Sınıfı süpürmek, sınıfın her üyesine aynı çareyi uygulamak demek değildir.*
Ölçüt, 15 Eylül notunun kendi ölçütüdür: **"dolgunun gizleyeceği yanlış sınır
var mı?"**

---

**Bağlı:** `YASALAR C12` · `C13` (kapı iki yönde sınandı) · `A6` (kural yazılı
olmak uygulanmak değildir) ·
[`D099`](D099-bir-artefakt-hicbir-aletin-glob-una.md) — *"bir artefakt hiçbir
aletin glob'una girmiyorsa, yapılmamış olmakla aynı sonucu verir"*. Aynı gece
o dersin ek okuma yüzü de yaşandı: `H-0008`in dört kartı `data/`ye indi ama
türü `js/app.js` `EKOKUMA_TUR` sözlüğünde tanımlı değildi;
`ekOkumaButonlariGuncelle` yalnız `Object.keys(EKOKUMA_TUR)` üzerinde döndüğü
için tanımadığı türü **sessizce** atlayacaktı — veri sağlam, `node --check`
temiz, buton yok. Kartları yazan oturum kendi sınav aletine *"bu tür tanımlı
mı"* sorusunu koyduğu için yakalandı (`TANIMSIZ 1 · 4 kart` → çare → `0`).
📌 İkisinin ortak çekirdeği: **bir şeyin var olması, onu GÖREN bir aletin
olması demek değildir.**
