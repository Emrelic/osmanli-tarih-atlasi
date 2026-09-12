# MALİYET FONKSİYONU — D022 öngörü (ölçümden ÖNCE)

```
Ⓐ1 Tobler: doğrusal modelin 2-3× fazla pahalılığını DOĞRULAYACAK ve
   brifingteki tabloyu birebir üretecek (aynı formül, aynı sayılar).
Ⓐ2 Yön: bugünkü `surt[hedef_hücre]` modeli YÖNE DUYARLI DEĞİL — aynı
   kenarın gidiş/dönüş maliyeti yalnız KOMŞU hücrelerin (tesadüfen)
   farklı eğimi yüzünden ayrışıyor, TIRMANMA/İNİŞ ayrımı YOK. Tobler
   eklenince GERÇEK yön-duyarlılığı doğacak (S işaretli).
Ⓐ3 Geçit: gerçek bir dağ geçidiyle (küçük ama gerçek DEM örneklemiyle)
   test edilirse "hücre ortalaması geçidi siliyor" iddiası DOĞRULANACAK,
   ama BU KISIM zaman kısıtı yüzünden TAM ölçülemeyebilir — tahmin
   ediyorum: kavramsal doğrulama çıkar, uçtan uca DEM-tabanlı sayısal
   ölçüm ÇIKMAZ (⚪ ölçülemedi olarak damgalanabilir).
Ⓐ4 Karşılaştırma (Toros/Mezopotamya, gerçek petek): zaman bütçesi en
   dar kalem — tahminim: ÖLÇÜLEMEZ (koşu maliyeti + veri erişimi bu
   oturumun kalan bütçesini aşar), açıkça damgalanacak.
_kvuzak birim tuzağı: tahminim TEMİZ ÇIKACAK — kodun kendi yorumu
(satır 2258-62) zaten "bu bir mesafe değil" diyor ve aşağı akışta
yalnız `_kvsahip` (indeks, değer değil) kullanılıyor gibi görünüyor.
```

---

## Ⓐ1/Ⓐ2 SONUÇ — ÖNGÖRÜ TUTTU

Prototip: `denetim/ARAC-MALIYET-TOBLER-0912.py` (saf Python, `uret_petek.py`
okunmadı/değiştirilmedi — yalnız aynı sabitler literatürden yeniden yazıldı).

**Ⓐ1 — tablo BİREBİR üretildi** (brifingle aynı, doğrulandı):
```
dz(m/hücre)  eğim    ESKİ    TOBLER   fark
       100   1.0°   1.50x    1.06x   +41%
       500   5.1°   3.50x    1.37x  +156%
      1000  10.2°   6.00x    1.88x  +220%
      3000  28.3°  16.00x    6.60x  +143%
```

**Ⓐ2 — yön duyarlılığı GERÇEK ve ölçüldü:**
```
dz(m)   YOKUŞ çarpan   İNİŞ çarpan   ORAN
 100        1.06x          0.94x     1.13
 500        1.37x          0.97x     1.42
1000        1.88x          1.32x     1.42
3000        6.60x          4.65x     1.42
```
Büyük eğimlerde oran **1,42**'de sabitleniyor (Tobler'ın +0,05 kaymasının
etkisi büyük |S|'de sönüyor). **Bugünkü model bunu hiç ayırt edemiyor** —
`surt[hedef]` yalnız hedef hücrenin MUTLAK eğimine bakıyor, kenarın hangi
yöne gittiğine değil; aynı büyüklükteki bir yokuşta a→b ile b→a arasında
KASITLI bir fark YOK (yalnız komşu hücrelerin tesadüfi eğim farkı kadar
bir gürültü var).

## `_kvuzak` BİRİM TARAMASI — TEMİZ ÇIKTI (öngörü tuttu)

`grep -n "_kvuzak"` → yalnız 4 satır: üretildiği satır (2305), A/B ölçümü
için ikinci kez üretildiği satır (2329, hemen `del` ediliyor), ve iki
yorum satırı. **`_kvuzak`'ın SAYISAL DEĞERİ hiçbir yerde sonradan
OKUNMUYOR** — yalnız Dijkstra'nın kendi iç karşılaştırması için var,
sonra atılıyor. Aşağı akışta yalnız `_kvsahip` (bir İNDEKS, mesafe değil)
kullanılıyor (satır 2331, 2333, 2430). ⇒ **Tobler'a geçiş (km→saat) hiçbir
tüketiciyi KIRMAZ — mesafe olarak okuyan sıfır yer var.**

🔴 **AMA BAĞIMSIZ BİR RİSK BULUNDU (öngörülmemişti):** `arac/maliyet.py:198`
**KENDİ `EGIM_CARPANI = 0.005` KOPYASINI** taşıyor — `uret_petek.py`den
BAĞIMSIZ, ayrı bir sabit. Tobler yalnız `uret_petek.py`ye inerse
`maliyet.py` SESSİZCE eski doğrusal modelde kalır ve iki dosya
AYRIŞIR (`D143` sınıfı: aynı işi yapan iki zincir betiği). Motor
oturumuna (1.MURAT) BEKLETMEDEN bildiriliyor.

## Ⓐ3 — HÜCRE İÇİ GEÇİT: GERÇEK DEM İLE KÜÇÜK ÖLÇEKLİ DOĞRULANDI

Zaman bütçesi tam bölge taraması yapmaya yetmedi — **tek bir bilinen
geçit** (Gülek Boğazı / Cilician Gates, Toros) gerçek 30 yay-saniyelik
DEM'den (`veri-kaynak/yukseklik/etopo2022_30s_atlas.tif`) okunarak
sınandı (`denetim/ARAC-MALIYET-GECIT-0912.py`):

```
hücre [37.25-37.30K, 34.70-34.75D] (motorun KV_ADIM=0,05°'sinde TEK hücre)
  z_min (olası geçit)         1077 m
  z_max (zirve)                1532 m
  z_ort (BUGÜNKÜ, Resampling.average)  1313 m
⇒ ortalama, GEÇİDİ 236 m YÜKSELTİYOR — gerçek geçit kotunu (1077 m)
  motor hiç GÖRMÜYOR, hücreyi 1313 m'lik düz bir duvar sanıyor.
```
**İddia gerçek veriyle doğrulandı** — 1 hücre, 36 alt-hücreden oluşuyor
(6×6, 30″ DEM), ve tam bölge taraması yapılmadığı için bu **örneklem bir
kanıt, genel bir ölçüm DEĞİL** (tek geçit, ⚪ genel istatistik ölçülemedi).

**"En alçak geçiş kotu" tanımı (istenen, gerekçeli):**
```
ÖNERİM: z_gecis = hücrenin SINIR piksellerindeki (iç piksel DEĞİL) en
düşük değer.
GEREKÇE: bir geçidin TANIMI "bir taraftan girip öbür taraftan çıkabilme"
— hücrenin İÇİNDE kapalı bir çukur (örn. kapalı bir vadi tabanı, krater)
GEÇİT DEĞİLDİR, dışarı açılmaz. Basit `z_min` (tüm hücre) bu ayrımı
YAPMAZ ve kapalı bir çukuru yanlışlıkla ucuz gösterebilir.
ALTERNATİF (daha doğru, daha pahalı): tam bir "eyer noktası" (saddle
point) analizi — komşu havza ayrımı gerektirir, bu ölçümün kapsamı
dışında, bir sonraki adım olarak işaretleniyor.
```

## Ⓐ4 — TOROS/MEZOPOTAMYA KARŞILAŞTIRMASI: ⚪ ÖLÇÜLEMEDİ

Zaman bütçesi yetmedi — gerçek petek üretimi (kesit koşusu bile) bu
oturumun kalan bütçesini aşıyordu. **Uydurmuyorum, açıkça damgalıyorum.**
Öneri: bu kalem ayrı, kısa bir takip turunda (yalnız Ⓐ1+Ⓐ2 zaten hazır
olduğu için `_kv_dijkstra`ya Tobler eklenmiş bir KESİT koşusu, tam
üretim değil) ölçülebilir.

## EK TUR (0e6b364) — Ⓐ5/Ⓐ8, zaman bütçesi dar, ⚪ Ⓐ6/Ⓐ7 ertelendi

⚠️ Bu ek tur ÖNCEKİNE göre ÇOK DAR bir bütçeyle yapıldı — yalnız GREP/OKUMA
ile cevaplanabilen, hesaplama GEREKTİRMEYEN sorular cevaplandı. Ⓐ6 zaten
KITA 10'a bağlı (bekleniyor); Ⓐ7 (kalibrasyon simülasyonu) ve Ⓐ5'in
sayısal ölçümü (%8,24→%2,75 zaten koordinatörün kendi ölçümü) bu turda
**⚪ ÖLÇÜLEMEDİ** — bütçe yetmedi, uydurulmadı.

### Ⓐ8 — `TAVAN_KM` tam tarama (grep + okuma, TAMAMLANDI)

```
satır 900   TAVAN_KM = {1:200,2:200,3:200,4:200,0:200}   TANIM
satır 1077  R = TAVAN_KM.get(y["k"], ...) → _tavan_daire(...)  TEK
            FONKSİYONEL TÜKETİCİ — km-yarıçaplı bir DAİRE çiziyor,
            petek bu daireyle KESİLİYOR (∩). Coordinatör'ün iddiası
            BURADA doğrulandı: anizotropik Dijkstra ne hesaplarsa
            hesaplasın, bu adım SONRADAN her yöne AYNI R'lik bir
            daireyle kırpıyor — yön farkı burada SİLİNİYOR.
satır 1929  "A1 YARIÇAP TAVANI" — 🟢 AYNI MEKANİZMA, farklı isim
            DEĞİL: yorum açıkça "§TAVAN_KM" diyor, bu dosyanın kendi
            pipeline adımlandırmasında ("A1" = kıyı kesimi adımı) bu
            uygulamanın YAPILDIĞI YER — coordinatörün sorusu
            "ayrı mekanizma mı" idi, CEVAP: HAYIR, AYNISI.
satır 141,178  yalnız YORUM (belge), kod değil — coordinatörün
            "bayat olacak" uyarısı DOĞRU, Tobler/saat-tavanına
            geçilince bu iki yorum satırı güncellenmeli.
```
🔴 **YAN BULGU (istenmedi ama karşıma çıktı):** İki BAŞKA "tavan" sabiti
DAHA var, İKİSİ DE `TAVAN_KM` İLE İLGİSİZ farklı mekanizmalar:
`COL_TAVAN_KM=300` (satır 2667, YALNIZ çöl kesişimli bölgede) ve
`PUAN_TAVAN_KM=200` (satır 4127, "4 puanlık halka" — bir GÖRÜNÜM/skor
mekanizması, sahiplik değil). Üç ayrı sabit, üç ayrı iş, benzer isim —
karışma riski var ama bu ekin kapsamı dışında, yalnız kaydediliyor.

⇒ **Ⓐ8 ÖNERİSİ (Emre'nin kararına malzeme):** `TAVAN_KM`'i km yerine
SAAT olarak tanımlamak (`örn. {1:40,2:40,...}` saat) ve `_tavan_daire`
fonksiyonunun R'yi km'ye çevirirken düz-arazi hızını (Tobler W(0)≈5,04
km/h) kullanması — bu, coordinatörün istediği "dağda kendiliğinden
duruyor" davranışını verir ÇÜNKÜ artık km sabit değil, saat sabit
olacak ve km karşılığı YERELDEKİ hıza göre değişecek. **Ama bu hâlâ bir
DAİRE** (coğrafi olarak tek bir merkez-mesafe cinsinden) — anizotropiyi
TAM yansıtmaz, yalnız ORTALAMA yerel maliyeti yansıtır. Tam çözüm
`_tavan_daire`nin kendisinin Dijkstra'nın ürettiği ANİZOTROPİK erişim
sınırını (bir daire değil, düzensiz bir kontur) kullanmasıdır — bu daha
büyük bir mimari değişiklik, bu ekin kapsamı dışında, İŞARETLENİYOR.

### Ⓐ5 — Atlama komşusu tuzağı (ANALİTİK, hesaplama gerektirmedi)

16 yönlü ızgarada `(1,2)`/`(2,1)` gibi "at sıçraması" adımları, ARADAKİ
hücrenin (ör. `(1,2)` için `(1,1)` ya da `(0,1)`) üzerinden **görsel
olarak** geçer ama Dijkstra o ara hücrenin maliyetini HİÇ SORMAZ —
coordinatörün "bedavaya aşar" dediği tam bu. **Standart çözüm (grid
pathfinding literatüründen, JPS/Theta* ailesi):** atlama adımı
eklenmeden önce ara hücre(ler) `_kvkara`/`surt` açısından KONTROL
EDİLİR — ara hücre deniz/aşırı-pahalıysa o SIÇRAMA KENARI HİÇ
eklenmez (Dijkstra'ya o komşu gösterilmez). `(1,2)` için tek bir ara
hücre var (`(0,1)` veya `(1,1)`, atlamanın açısına göre) — kontrolü
ucuz (O(1) ek işlem/kenar). **Bu bir TASARIM ÖNERİSİDİR, kodda
YAZILMADI/SINANMADI** (D107).

## SİMETRİ TARAMASI

`_kv_dijkstra` zaten yönlü graf mantığıyla yazılmış (`uzak[b] = uzak[a] +
c(a,b)`, klasik Dijkstra) — algoritma simetri VARSAYMIYOR. Ama BUGÜNKÜ
`c(a,b) = dist(a,b) * surt[b]` formülü DE FACTO neredeyse-simetriktir
(yalnız hedef hücreye bakar, kimin gönderdiğine bakmaz) — Tobler'a
geçilince `c(a,b) = dist(a,b) / W(S_ab)` olacak ve **gerçek anlamda**
`c(a,b) ≠ c(b,a)` olacak. Bunu VARSAYAN/BOZACAK başka bir yer arandı:
`_kv_dijkstra` dışında `surt`/`_kvsurt` okuyan başka kod YOK (tek tüketici
bu fonksiyon) — simetri varsayan İKİNCİ bir yer BULUNAMADI.

