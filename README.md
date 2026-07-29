# Osmanlı Tarih Atlası (1299–1923)

Osmanlı İmparatorluğu'nun kuruluşundan Cumhuriyet'in ilanına kadar sınırlarının
dönem dönem değişimini harita üzerinde, ay hassasiyetli bir zaman göstergesiyle
izleten eğitim amaçlı web uygulaması. Yanında dönemin padişahı ve kronolojik
olay akışı gösterilir; olay detayları TDV İslâm Ansiklopedisi maddelerine bağlanır.

**Canlı site:** https://emrelic.github.io/osmanli-tarih-atlasi/

## Özellikler
- 1299–1923 arası ay ay ilerleyen/oynatılabilen zaman çizgisi
- Akademik atlas verisine dayalı dönem sınırları (doğrudan topraklar + bağlı/özerk topraklar ayrımı)
- 36 padişahın portresi (kamu malı, Wikimedia kaynaklı) ve saltanat bilgisi
- 84 olaylık kronoloji: gün hassasiyetli tarih, yer, kilit kişiler, kaynak bağlantısı

## Teknoloji
Statik site: MapLibre GL JS + saf JavaScript; sunucu/veritabanı yok.
Sınır verisi: [historical-basemaps](https://github.com/aourednik/historical-basemaps)
veri setinden çıkarılmış, tarihsel düzeltmeler uygulanmış GeoJSON kesitleri.
Altlık harita: Esri World Physical Map.

## Geliştirme
Belge seti: `CLAUDE.md` (nasıl çalışılır), `YOL-HARITASI.md` (beş eksen ve fazlar),
`YAPILACAKLAR.md` (sıradaki işler), `MIMARI.md` (motor), `VERI-YAPISI.md` (şemalar).
Sınırlar yaklaşıktır; akademik doğrulama (Pitcher atlası ile nokta kontrol) sürmektedir.
