# Emre'nin kararları — 18 Ekim 2026 (1281 öncesi + B tipi + MÖ)

Kaynak: Emre'nin 18 Ekim mesajı (6 madde). Bu belge kayıttır; uygulama ilgili oturumlardadır.

## 1. B TİPİ GÖRÜNÜM İLKELERİ — KAYIT, UYGULAMA YOK (Emre: "şimdilik B ile bir şey yapmayalım")
A tipi = 5 / 7 / 10 günlük sürtünmeli yürüyüşe göre şehir bölgeleri (ufuk ayarı). B = A + dolgu:
- a) Bir ülkenin toprakları arasında kalan boşluk alanlar kapatılır.
- b) Eksklavlar arasında boş toprak varsa, en çok **400 km** (ya da ayardaki 5/7/10 günlük yürüyüşün
  karşılığı) olacak şekilde ana toprakla birleştirilir: her iki yerleşimden ayarlı gün kadar yürüyüş
  sonrası arada kalan boşluk kapanıyorsa eklenir; 401 km ise eklenmez, boşluk kalır.
- c) Ülke gövdesine giren derin koridorlar (içinde hiçbir devletin toprağı, devletsiz şehir ya da
  aşiret yönetimi yoksa): **derinlik ≤ ağız genişliği** (ağız 100 km ise en çok 100 km girinti).
- d) İki devlet toprağı arasında kalan boşluk (arada devletsiz şehir / aşiret / başka devlet yoksa) 400 km'yi
  (ya da ayardaki günü) geçmiyorsa, sınırın bittiği noktalardan başlayarak doldurulur.
- e) Devletin şehirleri ile deniz arasındaki boşluk 400 km'yi (ya da ayardaki günü) geçmiyorsa devlete katılır.
- Mevcut tanım: `oturumlar/GORUNUM-ABCD-0916.md` (B = tek koşu, ayrı dolgu katmanı, ENKLAV KURALI).
- **Hipotez (Emre):** A'yı 10 günlük sürtünmeli yürüyüşle koşturmak a–e'nin çoğunu kendiliğinden yapar.
  Önce **5/7/10 günlük yürüyüşün doğru hesaplanıp hesaplanmadığı** ölçülür. B'ye bundan sonra karar verilir.
- Durum (18 Ekim ölçümü): arayüz anahtarı `index.html:188` (`data-katman="dolgu"`) ve `arac/dolgu.py` VAR;
  `ufuk_bantlari` (5/7/10 bandı) ayrı bir hat; B ilkeleri a–e dolgu hesabı olarak tam tanımlı değil.

## 2. 1281 ÖNCESİ — KURALLAR
- Ufuk geriye açılır; devlet/şehir **kaynaklarda ilk geçtiği tarihte** doğar, peteği o gün hesaplanmaya başlar.
- 1281'deki şehir listesi **kaynaklı** biçimde geriye uzatılır; ölçüt: 1281 öncesi kronoloji maddelerinden
  hareketle 1281 şehirlerinin kaçının geriye uzandığı sayılır.
- Şehir adı çağlara göre değişir: arama **koordinat tabanlıdır**; kronolojide şehrin bütün eski adları ve bağlı
  olduğu bölge adı da aranır (Byzantion · Nova Roma · Constantinopolis · Kostantiniyye · İstanbul · Dersaadet ·
  Asitâne · Trakya; Bursa · Prusa · Bitinya).
- Yeri bilinmeyip yalnız bölgesi bilinen şehir/devlet: **bölge boyanır**.

## 3. ARKEOLOJİ ETİKETİ
- Arkeolojik tarihlemeyle ortaya çıkan devlet/şehir/olay kronolojide **arkeoloji etiketi** taşır.
- Tarih aralığı (ör. MÖ 4000–3500) verilirse **orta noktası** haritaya konur; aralık `ic_not`ta beyan edilir.
- Ufuk: **MÖ 12000**'den başlar; veri yoğunlaştıkça petek bölüşümü aynı kurallarla işler.
- MÖ'de eksen için `arac/gun.py` / `js/gun.js` (astronomik yıl, MÖ N ↔ −(N−1)); motor tarafı C3 (`GUN_SAYACI`).

## 4. SIRA (T5 ile uyumlu, KARARLAR-EMRE-1015 #16)
paket maddeleri → 8a → 1000–1281 → MS 1–1000 → motorun MÖ hesabı → MÖ/arkeoloji katmanı.
