# Tarih Atlası

Zaman göstergesi ilerledikçe **devlet sınırlarının gün gün değiştiği**, yanında
kronoloji ve dönemin hükümdarının aktığı eğitim amaçlı web uygulaması.
Çekirdek katman Osmanlı **1281–1923**, gün hassasiyetinde; hedef bütün dünya
(kademeli). Olay detayları TDV İslâm Ansiklopedisi maddelerine bağlanır.

> **Ad 9 Ekim 2026'da değişti** (Emre: *"tarih atlası daha doğru"*): kapsam
> Osmanlı'nın ötesine açıldığı için başlıktaki "Osmanlı" kaldırıldı. Çekirdek
> katmanı anlatan yerlerde (lejant, künye metinleri) sözcük yerinde duruyor.
> ⚠️ Eski başlık **"(1299–1923)"** diyordu; atlas 1299'da değil **1281**'de
> başlıyor — ad düzeltilirken bu da düzeltildi.

**Canlı site:** https://emrelic.github.io/osmanli-tarih-atlasi/

## Özellikler
- 1281–1923 arası gün gün ilerleyen/oynatılabilen zaman çizgisi (çekirdek katman; hedef MÖ 12000 – MS 2026, kademeli)
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
