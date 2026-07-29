# Osmanlı Tarih Atlası — Proje Planı

## Vizyon
Zaman göstergesi ilerledikçe devlet sınırlarının harita üzerinde değiştiği, yanında
kronolojik olay akışının ve dönemin hükümdarının gösterildiği **eğitim amaçlı web
sitesi**. Çekirdek ve en olgun katman Osmanlı İmparatorluğu'dur (1281–1923, gün
hassasiyetinde); **hedef kapsam ise 1200–1924 arası bütün dünyadır.**

### Kapsam genişlemesinin zorunlu sırası (atlanırsa harita bozulur)
Petek motoru, **noktası olmayan bölgeyi en yakın peteğe emer ve o peteğin sahibiyle
boyar.** Bu yüzden kapsam genişletmesi şu sırayla yapılmak zorundadır:

1. **Dizin katmanı** (`data/devletler.js`) — dünya çapında devlet listesi ve
   kronolojileri. Haritayı hiç etkilemez, risksiz, hemen yapılabilir. *(Oturum 3)*
2. **Yerleşim katmanı** (`data/yerlesimler.js`) — yeni coğrafyalarda yeterli nokta
   yoğunluğu. Bu bitmeden 3. adıma geçilmez. *(Oturum 4)*
3. **Harita penceresinin açılması** — `arac/uret_petek.py` içindeki
   `BOLGE = box(-12, 1.5, 62, 62)` kutusu genişletilir. **Nokta yoğunluğu
   sağlanmadan bu kutu açılırsa mevcut 567 peteğin kenardakileri bütün dünyaya
   yayılır** ve ör. Anadolu'nun sınır hücreleri Orta Asya'yı boyar. Kutu, yalnız
   kapsanan bölge için ve kademe kademe açılır.

Ad ve kimlik notu: site "Osmanlı Tarih Atlası" adıyla yayında; dünya kapsamı
olgunlaştığında ad ve ana sayfa metni yeniden düşünülecek.

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
arac/uret_petek.py    PETEK MOTORU — tek üretim betiği (aşağıya bakınız)
data/yerlesimler.js   ELLE YAZILAN TEK KAYNAK: 567 yerleşim, her birinin hâkimiyet
                      zinciri (d: doğrudan, v: tâbi, s: yabancı sahip, kur: kuruluş)
data/donemler.js      ÜRETİLMİŞ dönem kesitleri (~420 dönem; elle düzenlenmez)
data/devletler_harita.js  ÜRETİLMİŞ yabancı devlet gövdeleri (~82 devlet)
data/bolgeler.js      ÜRETİLMİŞ idari bölge sınırları (k1/k2 merkezlerinden)
data/olaylar.js       Ana kronoloji (84 olay, detaylı)
data/olaylar_ek*.js   Derinleştirme partileri 1-6 (ek..ek6); toplam ~800 madde
data/kisiler.js       Kişi dizini (sadrazam/paşa/komutan/denizci/yabancı... 75 kayıt)
data/savaslar.js      Seferler (36) + antlaşmalar + savaş serileri tabloları
data/padisahlar.js    36 padişah + Fetret Devri + saltanat sonrası dönem
assets/portreler/     Padişah portreleri (36/36, kamu malı)
```
Zaman çizgisi GÜN hassasiyetlidir; sınır değişimleri bilinen kesin günlerde gerçekleşir
(ör. İstanbul 29 Mayıs 1453'te haritaya eklenir). Harita otomatik yakınlaştırma ile
toprak büyüdükçe uzaklaşır; lejantta anlık ≈km² yüzölçümü gösterilir.

## Harita motoru: PETEK (Voronoi) yaklaşımı
Sınırlar artık elle çizilmiyor ve hazır atlas kesitlerinden gelmiyor. Her yerleşim
bir **petek** (Voronoi hücresi) sahibidir; petek sınırları komşuların tam ortasından
geçer, sonra gerçek kıyı çizgisine, nehir yataklarına ve dağ sırtlarına yaslanır,
Chaikin ile yumuşatılır, Natural Earth kara maskesiyle kesilir ve 117 göl çıkarılır.
Bir yerleşim el değiştirince peteği bütün olarak el değiştirir.

⚠️ **Motorun tek zayıf noktası ve bu projedeki hataların ana kaynağı:** noktası
olmayan bölge, en yakın peteğe emilir ve **o peteğin sahibiyle boyanır**. Sardinya'nın
1533'te Osmanlı görünmesi, Kefalonya'nın 1684'e kadar Osmanlı kalması, Ordu-Ünye
kıyısının Hacıemîroğulları'nı hiç göstermemesi — hepsi aynı sebepten. Yeni bir hata
raporu geldiğinde ilk sorulacak soru: *o bölgede yerleşim noktası var mı?*

## İki değişmez (her üretimden önce denetlenir)
1. **Sahipsizlik**: hiçbir yerleşim, var olduğu bir tarihte sahipsiz kalmamalı.
   Şu an 29 nokta kasten sahipsizdir (Sahra/Rub'ul Hâlî çölleri, 1744 öncesi Necid,
   körfez şeyhlikleri) — bunlar boş kalması *doğru* olan yerlerdir.
2. **Sessiz toprak değişimi yok**: haritadaki her kırılmanın ±30 gün içinde bir
   kronoloji maddesi olmalı. Aksi hâlde değişim, o güne rastgele denk gelen alakasız
   bir maddenin altında belirir. Şu an: **424 kırılmanın 424'ü maddeli.**

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
**historical-basemaps dönemi kapandı.** Sınırlar bir süre bu açık veri setinin 13 yıl
kesitinden türetiliyordu; kesitler arası değişimin adım adım olması, vasal toprakların
doğrudan görünmesi ve Kuruluş/Fetret/Mütareke dönemlerinin elle çizili kaba halkalar
kalması yüzünden bu yaklaşım bırakıldı. Yerine yukarıda anlatılan petek motoru geçti;
geometri artık 567 yerleşimin hâkimiyet zincirinden **her gün için yeniden** üretiliyor.
Eski listedeki sapmaların tamamı (Rodos 1517, Selanik 1403-1430, Mora 1700, Kıbrıs 1530)
bu geçişle ortadan kalktı.

Vasal/özerk topraklar (Kırım Hanlığı, Eflak-Boğdan, 1805 sonrası Mısır ve Kuzey Afrika
ocakları) haritada **açık tonla** ayrı katmanda gösterilir; `v:` alanı bunu taşır.

Bilinen kalan sapmalar:
- Petek sınırı idari sınır değildir: nüfus yoğunluğunun düşük olduğu yerlerde bir
  yerleşimin "temsil ettiği" alan gerçek sancak sınırından geniş çıkabilir.
- Bazı kırılma tarihleri gün değil yıl hassasiyetindedir (`f:"1693-01-01"` gibi);
  bunlar kaynakta gün verilmediği için kasten yıl başına yaslanmıştır.
- 1918-1923 arası Avrupa ardıl devletleri (Çekoslovakya, Polonya, Yugoslavya…) yalnız
  haritada delik kalmasın diye eklendi; sınırları temsilîdir, atlasın konusu değildir.

## Kronoloji yoğunlaştırma partileri
- [x] Parti 1 — Kuruluş–Fetih (1299–1453)
- [x] Parti 2-5 — Vikipedi karşılaştırması, ada katmanı, Fetret, sessiz değişimler
- [x] Parti 6 — Harita kırılmalarının katı denetimi: 424/424 kırılma maddeli
- [ ] Parti 7 — Ay ay detay yoğunlaştırma (1453–1923); yalnız içerik, harita etkisi yok

## Paralel oturum planı (çakışmayı önleyen dosya sahipliği)
Aynı dosyaya iki oturum dokunursa `yerlesimler.js` üzerinde sessiz kayıp olur.
Bölme kriteri **konu değil dosyadır**; her dosyanın tek sahibi vardır.

| Oturum | Yalnız bu dosyalara yazar | Model |
|---|---|---|
| **0 Entegrasyon** | `yerlesimler.js`, `uret_petek.py`, üretilen `data/*.js`, PLAN.md | Opus |
| 1 Yazılım/arayüz | `index.html`, `js/app.js`, `css/style.css` | Sonnet |
| 2 Harita hata avı | hiçbiri — sadece okur → `denetim/BULGULAR-*.md` | Opus |
| 3 Devlet kronolojileri | yeni `data/devletler_kronoloji.js` | Sonnet |
| 4 Yerleşim araştırma | yeni `data/yerlesimler_ek.js` | Opus |
| 5 Siyasî figürler | `data/kisiler.js` | Sonnet |
| 6 Yapı denetimi | `arac/denetle.py` + `denetim/YAPI-*.md` | Sonnet |
| 7 Kronoloji Parti 7 | yeni `data/olaylar_ek7.js` | Sonnet |

Kurallar: üretim betiğini yalnız 0 çalıştırır; commit/push yalnız 0'dan yapılır;
2 ve 6 düzeltme yapmaz yalnız rapor yazar; aynı anda en çok 3 oturum koşar.
**Haiku hiçbirinde kullanılmaz** — TDV ölü slug tuzağını (bkz. aşağıdaki not) atlıyor.

⚠️ **TDV slug tuzağı**: islamansiklopedisi.org.tr olmayan slug için de HTTP 200
döndürür ve sessizce arama sayfasına yönlendirir. Ölü slug'ı yalnız sayfa başlığı
ele verir: `<title>` "Arama - TDV İslâm Ansiklopedisi" ise madde YOKTUR.

## Yapılacaklar (kısa vade)
- [x] Padişah portre görsellerinin toplanması (36/36; kamu malı, Wikimedia)
- [x] Olay detaylarının genişletilmesi (gün/yer/kişiler + doğrulanmış TDV bağlantıları)
- [x] Ücretsiz yayın: GitHub Pages — https://emrelic.github.io/osmanli-tarih-atlasi/
      (depo: github.com/Emrelic/osmanli-tarih-atlasi; her push otomatik yayınlanır)
- [ ] **Görsel doğrulama turu**: bütün denetimler veri düzeyinde; haritanın gerçekten
      nasıl göründüğüne (Macaristan şekli, Fetret renkleri, ada gövdeleri) bakılmadı
- [ ] Sınırların Pitcher ile nokta doğrulama turu
- [ ] Alan adı kararı (istenirse ~10 dk'da bağlanır: depo ayarları > Pages > Custom domain)
