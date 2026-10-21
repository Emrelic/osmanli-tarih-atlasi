# TUR 2 — WEB DOĞRULAMA + TAMAMLAMA (alt ajanlar için)

Önce `BRIF.md`yi oku (şema, tarih ve kaynak kuralları aynen geçerli). Bu tur farkı: **web araçlarını GERÇEKTEN kullanacaksın.**

## Web araçları
`WebSearch` ve `WebFetch` ertelenmiş araç olabilir. Çağırmadan önce `ToolSearch` ile yükle (`select:WebSearch,WebFetch`). Yüklenemezse ya da hiçbir sayfa açılamıyorsa DUR ve ilk satırı «WEB ERİŞİMİ YOK» olan kısa bir rapor yaz — hafızadan yeniden taslak üretme.
Tam metin yolları: DergiPark, Crossref/DOI, archive.org, Google Books özeti, JSTOR özeti, PMC/Europe PMC, Encyclopaedia Iranica (iranicaonline.org), Pleiades (pleiades.stoa.org), TDV (islamansiklopedisi.org.tr/arama/?q=), Brill/Oxford/Cambridge giriş sayfaları, British Museum/Met/UNESCO WHC. Vikipedi yalnız aday/koordinat bulmak için; **tek dayanak olamaz.**

## Görev (sırayla)
1. **Doğrulama:** `dilimler/<KOD>_<A..E>.json` içindeki her kaydı (önce `oncelik: cekirdek`, sonra `orta`, sonra `kucuk`) en az 1 akademik kaynakla doğrula. Sayfayı bu oturumda açıp okuduysan: `dogrulama:"okundu"`, `kaynak:[...]` tam künye (yazar/başlık/yıl/sayfa ya da URL), `f`/`t`'yi kaynağa göre düzelt (eski değeri `ic_not`a «taslak değeri: …» diye yaz). Kaynak f/t'yi desteklemiyorsa `kismen-okundu` + neyin desteklenmediğini yaz. Okuyamadıysan `taslak` KALIR; kaynak künyesi uydurma.
   Kayıt silme: yalnız polity olmadığı kanıtlanırsa `dilimler/<KOD>_ELENEN.json`'a gerekçeyle taşı.
2. **Tamamlama:** raporunda «sığ olabilir» denen yerleri (kendi `<KOD>_RAPOR.md`'ni oku) tara; indeks kaynaklarından (Pleiades, Pauly, Iranica indeksi, TDV hanedan maddeleri, Cambridge History içindekiler) eksik polity çıkar, aynı dilim dosyasına ekle (aynı şema, dogrulama kuralı aynı).
3. **Eşleme düzelt:** her kaydın `esleme`sini `denetim/once1281/mevcut_once1281.tsv`'ye karşı yeniden kontrol et.
4. Kararlar için varsayılanlar (Emre adına, itiraz edilirse değişir): Mahan/Jinhan/Byeonhan AYRI; küçük isyan/vasal yalnız kaynakta adı + belirli toprağı + birkaç yıl süren hâkimiyeti varsa girer; polis `t` = bağımsızlığın sonu; Roma eyaletleri (bağımsız polity değilse) girmez.
5. Metinlerde Türkçe karakter kullan (ş ğ ı İ ü ö ç); id'ler ASCII kalır.

## Çıktı
Kendi dilim dosyalarının üstüne yaz (başka dosyaya dokunma), sonda `<KOD>_RAPOR2.md`: ① kaç kayıt okundu/kismen/taslak, kaç eklendi, kaç elendi ② ulaşılamayan kaynaklar ③ istekler. Commit/push yok, ağır komut yok.
