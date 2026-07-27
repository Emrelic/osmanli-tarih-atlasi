# Osmanlı Tarih Atlası — Proje Planı

## Vizyon
1299–1923 arasını kapsayan, zaman göstergesi ilerledikçe Osmanlı İmparatorluğu'nun
sınırlarının harita üzerinde değiştiği, yanında kronolojik olay akışının ve dönemin
padişahının gösterildiği **eğitim amaçlı web sitesi**. İleri fazlarda sınırdaş
devletler, hükümdarları ve kronolojileri eklenecek.

## Teknoloji kararları (istişare sonucu)
- **Platform**: Web (statik site — sunucu/veritabanı yok, tarayıcıda çalışır)
- **Harita**: MapLibre GL JS (ücretsiz, açık kaynak) + etiketsiz fiziki altlık harita
  (Esri World Physical — modern siyasi sınır ve etiket içermez, API anahtarı gerekmez)
- **Google Earth KULLANILMADI**: programlanabilir API'si yok, Google Maps API faturalı
  ve modern sınırlar gömülü. MapLibre + GeoJSON ile tam kontrol bizde, maliyet 0.
- **Veri**: repo içinde düz JS/JSON dosyaları (`data/`). Her sınır çokgeninin
  `from`/`to` (YYYY-AA) geçerlilik tarihi var; gösterge o tarihte geçerli olanları çizer.
- **Yayın**: önce ücretsiz (GitHub Pages veya Cloudflare Pages), beğenilince alan adı
  bağlanır (~10 dk iş). Site statik olduğu için barındırma kalıcı olarak ücretsizdir.

## Dosya yapısı
```
index.html            Ana sayfa (tek sayfa uygulama)
css/style.css         Görünüm
js/app.js             Harita + GÜN bazlı zaman akışı + oto-zoom + paneller
arac/uret_donemler.py Sınır derleme betiği (kesitler + ara parçalar + kara maskesi
                      → dissolve edilmiş dönem geometrileri + bbox + km²)
data/donemler.js      ÜRETİLMİŞ dönem kesitleri (66 dönem; elle düzenlenmez)
data/olaylar.js       Ana kronoloji (84 olay, detaylı)
data/olaylar_ek.js    Fetih/kayıp maddeleri (62 olay; başlık önce, detay sonra)
data/kisiler.js       Kişi dizini (sadrazam/paşa/komutan/denizci/yabancı... 75 kayıt)
data/savaslar.js      Savaşlar (38) + antlaşmalar (21) + savaş serileri (13) tabloları
data/padisahlar.js    36 padişah + Fetret Devri + saltanat sonrası dönem
assets/portreler/     Padişah portreleri (36/36, kamu malı)
```
Zaman çizgisi GÜN hassasiyetlidir; sınır değişimleri bilinen kesin günlerde gerçekleşir
(ör. İstanbul 29 Mayıs 1453'te haritaya eklenir). Harita otomatik yakınlaştırma ile
toprak büyüdükçe uzaklaşır; lejantta anlık ≈km² yüzölçümü gösterilir. Tüm elle çizilen
parçalar kara maskesiyle kesildiğinden sınırlar kıyı çizgilerine oturur.

## Faz planı
- **Faz 0 — Çekirdek** ✅ (bu kurulum): harita, ay-ay zaman göstergesi + oynatma,
  ~20 dönemlik taslak sınır seti, padişah kartı, ~55 başlıklı olay akışı, olay detayı.
- **Faz 1 — Kronoloji yoğunlaştırma**: her tahta çıkış / antlaşma / savaş / isyan /
  idam / doğum-ölüm; olay detay metinlerinin kaynaklı doldurulması.
- **Faz 2 — Sınır inceltme**: Pitcher atlası ile sınırların yıl yıl doğrulanıp
  inceltilmesi; sınır değiştiren her olaya çokgen güncellemesi.
- **Faz 3 — Sınırdaş devletler**: sınır + isim gösterimi (Bizans, Macaristan, Venedik,
  Safevî/İran, Memlûk, Rusya, Avusturya...). Altlık: historical-basemaps veri seti.
- **Faz 4 — Sınırdaş hükümdarlar ve kronolojileri**: portreler + ayrı akış alanı.
- **Faz 5 — Görsel detaylar**: sefer okları, ordu/donanma sembolleri, isyan işaretleri,
  önemli savaşların detay gösterimleri.

## Referans kaynak seti (kirlilik önleme — madde 14)
- **Donald Edgar Pitcher, "An Historical Geography of the Ottoman Empire"** — sınır
  çizimlerinin ana referansı (Osmanlı toprak genişlemesinin standart akademik atlası).
- **İsmail Hâmi Danişmend, "İzahlı Osmanlı Tarihi Kronolojisi"** — olay akışının omurgası.
- **TDV İslâm Ansiklopedisi** (islamansiklopedisi.org.tr) — olay detay metinleri.
- Halil İnalcık külliyatı, Cambridge History of Turkey, Colin Imber — çapraz doğrulama.
- **Elenenler**: blog/forum, ideolojik popüler tarih siteleri. Vikipedi yalnızca
  kaynağa ulaşma aracı, tek dayanak değil.

## Doğruluk notu (önemli)
**Faz 2 / 1. geçiş tamamlandı**: ana sınır geometrisi artık akademik atlaslardan
sayısallaştırılmış **historical-basemaps** açık veri setinden geliyor
(github.com/aourednik/historical-basemaps; 13 yıl kesiti: 1400–1914).
Üretim betiği scratchpad'de; şu tarihsel düzeltmeler geometrik kesme ile uygulandı:
- 1400 kesitinden İstanbul çevresi çıkarıldı (Bizans enklavı; fetih 1453)
- 1530/1600 kesitlerinden Girit (fetih 1669), 1530 kesitinden Kıbrıs (fetih 1571) çıkarıldı
- 1700 kesitinden Mora çıkarıldı (1699–1715 Venedik'te)
- 1815 kesitinden bağımsız Yunanistan çıkarıldı (1830 sonrası dönem için)
- 1900 kesitinden Kıbrıs (1878 İngiliz idaresi) ve Sina (Mısır idaresi) çıkarıldı
- 1914 kesitine Doğu Trakya elle eklendi (veri setinde eksikti)
Vassal/özerk topraklar (Kırım Hanlığı, 1715 sonrası Mısır ve Kuzey Afrika ocakları)
haritada **açık tonla** ayrı katmanda gösterilir.

Bilinen kalan sapmalar (2. geçişte Pitcher ile düzeltilecek):
- Kesit yılları arası değişimler adım adımdır (ör. 1571–1650 tek kesit kullanır)
- Eflak-Boğdan ve Sırbistan bazı kesitlerde doğrudan toprak görünür (vasal/özerktiler)
- Rodos 1517'den itibaren görünür (fetih 1522); Selanik 1403–1430 arası Osmanlı görünür
- Kuruluş (1299–1362), Fetret (1402–1413) ve Mütareke (1918–1923) dönemleri hâlâ elle
  çizili kaba halkalardır (veri setinde kesit yok)

## Yapılacaklar (kısa vade)
- [x] Sınırların atlas verisiyle ilk inceltme turu (historical-basemaps + düzeltmeler)
- [x] Padişah portre görsellerinin toplanması (36/36; kamu malı, Wikimedia — kaynaklar assets/portreler/KAYNAKLAR.txt)
- [x] Olay detaylarının genişletilmesi (84 olay: gün/yer/kişiler alanları + detay
      paragrafları + tamamı 200-OK doğrulanmış TDV İA madde bağlantıları)
- [ ] Sınırların Pitcher ile nokta doğrulama turu (2. geçiş; kalan sapmalar yukarıda)
- [x] Ücretsiz yayın: GitHub Pages — https://emrelic.github.io/osmanli-tarih-atlasi/
      (depo: github.com/Emrelic/osmanli-tarih-atlasi; her push otomatik yayınlanır)
- [ ] Alan adı kararı (istenirse ~10 dk'da bağlanır: depo ayarları > Pages > Custom domain)
