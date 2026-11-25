# Osmanlı Tarih Atlası: koşu bilgisayarı seçimi

Hazırlayan: Claude (HAVVA 21 Kasım oturumu) · Tarih: 24 Kasım 2026 · Fiyatlar 24.11.2026'da Akakçe ürün sayfalarından okundu.

**Amaç.** Bu rapor, Emre'nin (proje sahibi) bir sonraki bilgisayarı seçmesine yardım etmek için yazıldı. Başka bir yapay zekâya (ChatGPT) verilip ikinci görüş alınacak. Sondaki 'Sorular' bölümü ChatGPT'den istenen şeyleri listeler. Ölçülmemiş şeyler açıkça 'ölçülmedi' diye işaretlendi; tahmin ile ölçüm karıştırılmadı.


## 1. Proje ve iş yükü

Osmanlı Tarih Atlası, zaman ilerledikçe devlet sınırlarının değiştiği eğitim amaçlı statik bir web sitesidir (1281-1923, gün hassasiyeti; hedef bütün dünya). Harita, 'petek' (Voronoi) motoruyla üretilir: her yerleşimin çevresindeki toprak onun peteğidir. Üretim, Python ve geometri (poligon) hesaplarıyla yapılan, saatler süren tek bir 'koşu'dur ve tek makinede çalışır (şimdiki makine: HAVVA).

**Ölçülen koşu süreleri:**

- Koşu 38: 20 sa 22 dk. Koşu 39: 18 sa 03 dk. İkisinde '(B) dolgu' katmanı KAPALI idi.
- Koşu 40 (19.11.2026 00:49'da başladı): ilk bölüm 21 sa 32 dk'da bitti (1752 devlet, 11.384 dönem, çıktı yaklaşık 401 MB). Ardından ilk kez AÇIK olan '(B) dolgu' aşaması 19.11 22:21'de başladı ve 24.11'de 5 günü aşmış olarak hâlâ sürüyor. Bitiş tahmini ölçülemiyor (log'da sayaç yok).
- Neden uzun: (1) (B) dolgu yeni ve ağır bir aşama; (2) önbellek anahtarı (tuz) geçen koşudan farklı olduğu için hiçbir önbellek isabeti alınmıyor, her kapanış sıfırdan hesaplanıyor; (3) dolgu kapanışı tek süreç / tek çekirdekle çalışıyor, çekirdek eklemek onu hızlandırmıyor.
- 'Yabancı devlet gövdeleri' aşaması çok çekirdekten yararlanır: Koşu 40'ta 17 sa 57 dk duvar saati, 34 sa 34 dk işlemci süresi.
- Bellek: Koşu 40 işçi sürecinin özel (private) belleği 33,7 GB. Makinede taahhüt edilen bellek 48,6 GB, sınır 54,5 GB (RAM 23,7 GB + pagefile ~30,7 GB). Yani çalışmak için en az 64 GB RAM gerekiyor. Birden çok işçi süreci çalıştırılırsa her biri benzer bellek isteyebilir (ölçülmedi).
- Önbellek: SQLite dosyası 11,8 GB, ~246.000 satır, sürekli yazılıyor (hızlı SSD gerekir).
- Koşunun yükü: yaklaşık 5+ saat kesintisiz %100 işlemci. Oyun gibi kısa patlamalar değil; soğutma ve güç kaynağı kalitesi kritik.


## 2. Mevcut makineler (13 Kasım 2026'da ölçüldü)

| Makine | İşlemci | Çekirdek/iş parçacığı | RAM | Not |
|---|---|---|---|---|
| HAVVA | Intel i5-1135G7 | 4 / 8 | 23,7 GB | Koşu makinesi; aynı zamanda eczane bilgisayarı (mesaide düşük öncelik) |
| UMIT | Intel i5-1135G7 | 4 / 8 | 15,7 GB | Eczanenin ana makinesi |
| EMRELİC | Intel i5-8250U | 4 / 8 | 11,9 GB | Dizüstü |
| KASA | Intel i5-3330 (2012) | 4 / 4 | 15,9 GB | Sabit makine |
| LAB | Intel i5-4430S | 4 / 4 | 7,9 GB | En zayıf |

Hepsi 4 çekirdek. Koşu, eczane işiyle aynı makineyi paylaştığı için mesai saatlerinde kısıtlı çalışıyor. Yeni bir makine bu çatışmayı ortadan kaldırır.


## 3. Eylül 2026 araştırmasının sonucu (oturumlar/DONANIM-0910.md)

- Karar: büyük kasa ATX masaüstü, AMD Ryzen 9 9950X, ≈ 61.500 TL (Eylül fiyatları), 32 GB RAM. Laptop (16 çekirdek ≈ 130.000 TL'den, zirvede ~%15 daha yavaş), mini kasa (kısılma riski) ve all-in-one (16 çekirdekli model yok) elendi.
- Hata düzeltmesi: ucuz ASUS Prime B850M-K anakartı VRM stres testinde 128 °C'ye çıkıp kısılıyordu; MSI B850 Gaming Plus WiFi'ye geçildi.
- Hazır sistem önerilmedi: hazır sistemler oyuna göre tasarlandığı için soğutucuda ve güç kaynağında kısıyor.
- Ölçülmemiş kalanlar: 9950X3D'nin (128 MB L3) bu iş yükünde daha iyi olup olmadığı; paralel koşuda RAM ihtiyacı.
- **Bugünkü düzeltme:** Eylül'de '32 GB yeter' denmişti; Koşu 40 ölçümleri 64 GB'ın alt sınır olduğunu gösterdi.


## 4. Güncel parça fiyatları: üç kademe (Akakçe, 24.11.2026)

Her hücrede parça, en ucuz güncel fiyat ve ürün sayfası bağlantısı var. Fiyatlar günlük değişir; satıcı satırlarında mutlak teklif tarihi yok. İtopya ve İnceHesap sayfaları 403 verdi, okunamadı.

| Parça | ÜST DÜZEY | FİYAT/PERFORMANS | EKONOMİK |
|---|---|---|---|
| İşlemci | Ryzen 9 9950X3D (16 çekirdek, 128 MB L3) 36.227 TL https://www.akakce.com/islemci/en-ucuz-amd-ryzen-9-9950x3d-on-alti-cekirdek-4-3-ghz-fiyati,904043816.html | Ryzen 9 9950X (16 çekirdek, tray) 25.772 TL https://www.akakce.com/islemci/en-ucuz-amd-ryzen-9-9950x-on-alti-cekirdek-4-3-ghz-fiyati,680082588.html | Ryzen 7 9700X (8 çekirdek) 13.750 TL https://www.akakce.com/islemci/en-ucuz-amd-ryzen-7-9700x-sekiz-cekirdek-3-8-ghz-fiyati,706818645.html |
| Anakart | Gigabyte X870 Aorus Elite WiFi7 (ATX) 14.499 TL https://www.akakce.com/anakart/en-ucuz-gigabyte-x870-aorus-elite-wi-fi-amd-am5-ddr5-atx-fiyati,778720647.html | MSI B850 Gaming Plus WiFi (ATX) 13.499 TL https://www.akakce.com/anakart/en-ucuz-msi-b850-gaming-plus-wi-fi-amd-am5-atx-fiyati,903526941.html | MSI Pro B850M-E EVO (mATX, WiFi yok) 6.179 TL https://www.akakce.com/anakart/en-ucuz-msi-pro-b850m-e-evo-amd-am5-ddr5-micro-atx-fiyati,1608822267.html |
| RAM (64 GB) | Kingston Fury Beast 2x32 GB DDR5-6000 CL36 87.894 TL https://www.akakce.com/ram/en-ucuz-kingston-fury-beast-64-gb-2x32-6000-mhz-ddr5-cl36-kf560c36bbek2-64-fiyati,269473107.html | Kingston Fury Beast 2x32 GB DDR5-6000 CL36 87.894 TL https://www.akakce.com/ram/en-ucuz-kingston-fury-beast-64-gb-2x32-6000-mhz-ddr5-cl36-kf560c36bbek2-64-fiyati,269473107.html | G.Skill Ripjaws S5 2x32 GB CL36 (tek satıcı; aynı kit başka sayfada 158.285 TL) 66.999 TL https://www.akakce.com/ram/en-ucuz-g-skill-ripjaws-s5-64-gb-2x32-6000-mhz-cl36-f5-6000j3636f32gx2-rs5k-ddr5-fiyati,429782670.html |
| SSD | Samsung 990 Pro 2 TB 25.247 TL https://www.akakce.com/ssd/en-ucuz-samsung-2-tb-990-pro-mz-v9p2t0bw-m-2-pci-express-4-0-fiyati,120631107.html | Kingston NV3 1 TB 8.048 TL https://www.akakce.com/ssd/en-ucuz-kingston-nv3-snv3s-1000g-pci-express-4-0-1-tb-m-2-fiyati,733964099.html | WD Green SN3000 1 TB 7.967 TL https://www.akakce.com/ssd/en-ucuz-western-digital-green-sn3000-wds100t4g0e-pci-express-4-0-1-tb-m-2-fiyati,954555761.html |
| Soğutucu | Thermalright Frozen Warframe 360 SE (360 mm sıvı) 4.638 TL https://www.akakce.com/islemci-sogutucu/en-ucuz-thermalright-frozen-warframe-360-se-argb-beyaz-islemci-sivi-sogutucu-fiyati,1070774514.html | Thermalright Peerless Assassin 120 SE (kule) 2.799 TL https://www.akakce.com/islemci-sogutucu/en-ucuz-thermalright-peerless-assassin-120-se-argb-fiyati,277759349.html | DeepCool AK400-G2 (kule) 2.204 TL https://www.akakce.com/islemci-sogutucu/en-ucuz-deepcool-ak400-g2-fiyati,1662286485.html |
| Güç kaynağı | MSI MAG A1000GL 1000 W Gold ≈ 8.800 TL https://www.akakce.com/power-supply/en-ucuz-msi-mag-a1000gl-gen5-1000-w-fiyati,786751755.html | MSI MAG A850GL 850 W Gold 6.958 TL https://www.akakce.com/power-supply/en-ucuz-msi-mag-a850gl-850-w-80-plus-gold-tam-moduler-fiyati,122221010.html | MSI MAG A750GL 750 W 5.439 TL https://www.akakce.com/power-supply/en-ucuz-msi-mag-a750gl-750-w-fiyati,122734499.html |
| Kasa | Lian Li Lancool 216 (ATX, 360 mm radyatör destekli) 7.491 TL https://www.akakce.com/bilgisayar-kasasi/en-ucuz-lian-li-lancool-216-argb-fanli-e-atx-oyuncu-kasasi-fiyati,1016607943.html | MSI MAG Forge 120A (ATX) 2.899 TL https://www.akakce.com/bilgisayar-kasasi/en-ucuz-msi-mag-forge-120a-rgb-6-fanli-atx-oyuncu-kasasi-fiyati,558170720.html | MSI MAG Forge M120A (mATX) 3.131 TL https://www.akakce.com/bilgisayar-kasasi/en-ucuz-msi-mag-forge-m120a-6-fanli-micro-atx-oyuncu-kasasi-fiyati,675674655.html |
| Paragraph(
'caseSensitive': 1
'encoding': 'utf8'
'text': '<b>TOPLAM</b>'
'frags': [ParaFrag(__tag__='b', bold=1, fontName='AB', fontSize=7.5, greek=0, italic=1, link=[], rise=0, text='TOPLAM', textColor=Color(0,0,0,1), us_lines=[])]
'style': <ParagraphStyle 'c'>
'bulletText': None
'debug': 0
) #Paragraph | Paragraph(
'caseSensitive': 1
'encoding': 'utf8'
'text': '<b>≈ 184.800 TL</b>'
'frags': [ParaFrag(__tag__='b', bold=1, fontName='AB', fontSize=7.5, greek=0, italic=1, link=[], rise=0, text='≈ 184.800 TL', textColor=Color(0,0,0,1), us_lines=[])]
'style': <ParagraphStyle 'c'>
'bulletText': None
'debug': 0
) #Paragraph | Paragraph(
'caseSensitive': 1
'encoding': 'utf8'
'text': '<b>≈ 147.900 TL</b>'
'frags': [ParaFrag(__tag__='b', bold=1, fontName='AB', fontSize=7.5, greek=0, italic=1, link=[], rise=0, text='≈ 147.900 TL', textColor=Color(0,0,0,1), us_lines=[])]
'style': <ParagraphStyle 'c'>
'bulletText': None
'debug': 0
) #Paragraph | Paragraph(
'caseSensitive': 1
'encoding': 'utf8'
'text': '<b>≈ 105.700 TL</b>'
'frags': [ParaFrag(__tag__='b', bold=1, fontName='AB', fontSize=7.5, greek=0, italic=1, link=[], rise=0, text='≈ 105.700 TL', textColor=Color(0,0,0,1), us_lines=[])]
'style': <ParagraphStyle 'c'>
'bulletText': None
'debug': 0
) #Paragraph |

**RAM seçenekleri (Akakçe):** 64 GB Kingston 87.894 TL; 96 GB (2x48) G.Skill Trident Z5 Neo CL28 154.716 TL; 128 GB (2x64) G.Skill Trident Z5 Neo CL32 242.599 TL. Üst düzey sistem 128 GB ile ≈ 339.500 TL, 96 GB ile ≈ 251.600 TL tutar. Kıtlık nedeniyle RAM, toplamın %48-63'ünü oluşturuyor. Ekonomik kademede Kingston alınırsa toplam ≈ 126.600 TL.


## 5. Hazır sistem araştırması (Türkiye, 24.11.2026)

Ekran kartsız 9950X/9950X3D + 64 GB hazır sistem bulunamadı. Bulunanların hepsi pahalı ekran kartı taşıyor (bu iş yükü için gereksiz) ve çoğu stokta yok.

| Sistem | Özellik | Fiyat | Durum |
|---|---|---|---|
| Paragraph(
'caseSensitive': 1
'encoding': 'utf8'
'text': '<link href="https://www.vatanbilgisayar.com/amd-r9-9950x3d-pro-r9700-x870e-2tb-ssd-64gb-ram.html">Vatan AI4</link>'
'frags': [ParaFrag(__tag__='link', bold=0, fontName='A', fontSize=7.5, greek=0, italic=1, link=[(0, 'https://www.vatanbilgisayar.com/amd-r9-9950x3d-pro-r9700-x870e-2tb-ssd-64gb-ram.html')], rise=0, text='Vatan AI4', textColor=Color(0,0,0,1), us_lines=[])]
'style': <ParagraphStyle 'c'>
'bulletText': None
'debug': 0
) #Paragraph | 9950X3D, 64 GB, 2 TB, 360 mm AIO, 1200 W, Radeon AI PRO R9700 | 346.398 TL | Tükendi |
| Paragraph(
'caseSensitive': 1
'encoding': 'utf8'
'text': '<link href="https://www.vatanbilgisayar.com/amd-r9-9950x3d-rtx-5090-x870e-2tb-ssd-64gb-ram.html">Vatan AI7</link>'
'frags': [ParaFrag(__tag__='link', bold=0, fontName='A', fontSize=7.5, greek=0, italic=1, link=[(0, 'https://www.vatanbilgisayar.com/amd-r9-9950x3d-rtx-5090-x870e-2tb-ssd-64gb-ram.html')], rise=0, text='Vatan AI7', textColor=Color(0,0,0,1), us_lines=[])]
'style': <ParagraphStyle 'c'>
'bulletText': None
'debug': 0
) #Paragraph | Aynısı + RTX 5090 | 566.382 TL | Tükendi |
| Paragraph(
'caseSensitive': 1
'encoding': 'utf8'
'text': '<link href="https://www.idefix.com/eternal-power-ryzen-9-9950x3d-64gb-ddr5-1tb-m2-rtx-4060-ti-b650-wifi-750w-240m-p-16219510">Idefix Eternal Power</link>'
'frags': [ParaFrag(__tag__='link', bold=0, fontName='A', fontSize=7.5, greek=0, italic=1, link=[(0, 'https://www.idefix.com/eternal-power-ryzen-9-9950x3d-64gb-ddr5-1tb-m2-rtx-4060-ti-b650-wifi-750w-240m-p-16219510')], rise=0, text='Idefix Eternal Power', textColor=Color(0,0,0,1), us_lines=[])]
'style': <ParagraphStyle 'c'>
'bulletText': None
'debug': 0
) #Paragraph | 9950X3D, 64 GB, 1 TB, RTX 4060 Ti, 750 W Bronze, 240 mm AIO, B650 | ≈ 139.000-141.000 TL (sayfada doğrulanamadı) | Stok belirsiz |
| Paragraph(
'caseSensitive': 1
'encoding': 'utf8'
'text': '<link href="https://www.vatanbilgisayar.com/amd-r9-9900x3d-rtx-5080-x870e-2tb-ssd-64gb-ram.html">Vatan AI3</link>'
'frags': [ParaFrag(__tag__='link', bold=0, fontName='A', fontSize=7.5, greek=0, italic=1, link=[(0, 'https://www.vatanbilgisayar.com/amd-r9-9900x3d-rtx-5080-x870e-2tb-ssd-64gb-ram.html')], rise=0, text='Vatan AI3', textColor=Color(0,0,0,1), us_lines=[])]
'style': <ParagraphStyle 'c'>
'bulletText': None
'debug': 0
) #Paragraph | 9900X3D (12 çekirdek), 64 GB, 2 TB, RTX 5080 | 314.678 TL | Tükendi |
| Paragraph(
'caseSensitive': 1
'encoding': 'utf8'
'text': '<link href="https://www.mediamarkt.com.tr/tr/product/_lenovo-dws-thinkstation-p3-g2-20-gb-rtx4000-ada-30ht006qtr-004-intel-core-ultra-9-285k-64-gb-ram-2-tb-ssd-windows-11-pro-masaustu-bilgisayar-175818201.html">Lenovo ThinkStation P3 Gen 2</link>'
'frags': [ParaFrag(__tag__='link', bold=0, fontName='A', fontSize=7.5, greek=0, italic=1, link=[(0, 'https://www.mediamarkt.com.tr/tr/product/_lenovo-dws-thinkstation-p3-g2-20-gb-rtx4000-ada-30ht006qtr-004-intel-core-ultra-9-285k-64-gb-ram-2-tb-ssd-windows-11-pro-masaustu-bilgisayar-175818201.html')], rise=0, text='Lenovo ThinkStation P3 Gen 2', textColor=Color(0,0,0,1), us_lines=[])]
'style': <ParagraphStyle 'c'>
'bulletText': None
'debug': 0
) #Paragraph | Core Ultra 9 285K, 64 GB, 2 TB, RTX 4000 Ada, 750 W | 384.999 TL | Satışta, teslimat 26-30.11 |
| HP Z6 G5 A (Threadripper PRO 7975WX, 32 çekirdek) | 32 GB, 1 TB | 435.322 TL | Stok okunamadı |
| HP Z6 Tower G5A (Threadripper PRO 9995WX, 96 çekirdek) | 128 GB ECC, 1 TB, RTX Pro 4500 | 1.899.999 TL | Stok okunamadı |


## 6. Belirsiz / ölçülmemiş noktalar

- 9950X3D'nin ek 64 MB L3 önbelleğinin bu geometri iş yükünde faydası ölçülmedi; fiyat farkı 10.455 TL (%40). 3D modelde ek önbellek yalnız bir CCD'de, zamanlama davranışı bilinmiyor.
- (B) dolgu kapanışı tek çekirdek: yeni makinede tek çekirdek hızının kaç kat iyileşeceği ölçülmedi (tahmin: 1,5-2 kat, i5-1135G7 4,2 GHz'e karşı 9950X ~5,7 GHz).
- Birden çok işçi sürecinin toplam RAM ihtiyacı ölçülmedi. 128 GB bu belirsizliği çözen seçenek ama çok pahalı.
- Gigabyte X870 Aorus Elite anakartın 5 saatlik tam yükte VRM sıcaklığı ölçülmedi (Eylül'de B850M-K kısılmıştı).
- Thermalright 360 SE, Peerless Assassin ve AK400'ün AM5 desteği Akakçe sayfalarında açıkça yazmıyor; üreticiden teyit gerek.
- MSI Forge 120A'nın 360 mm radyatör desteği sayfada okunamadı (240 mm yazıyor). Lancool 216 için 360 mm destek sayfada yazıyor.
- 2x48 ve 2x64 GB kitlerin AM5'te 6000 MT/s'de kararlılığı BIOS sürümüne bağlı olabilir (arama özetinden, ölçülmedi).
- Montaj ücreti, Windows lisansı, monitör ve çevre birimleri toplamlara dahil değil.


## 7. ChatGPT'ye sorular

- Bu iş yükü (Python + shapely/Voronoi geometrisi, çok çekirdekli aşama + tek çekirdekli darboğaz aşaması, süreç başına ~34 GB bellek) için 9950X ile 9950X3D arasında fark ne olur? 3D V-Cache bu tip iş için gerekir mi?
- 64 GB mı 96 GB mı 128 GB mı? Birden çok işçi süreci için RAM'i nasıl planlamalıyız? Pagefile / commit sınırı konusunda ne yapılmalı?
- Tek çekirdek hızı için hangi işlemci en iyisi (ör. Core Ultra 9 285K, Ryzen 9 9950X, 9800X3D)? Çok çekirdekli aşama için Threadripper değer mi?
- Yukarıdaki üç kademe parça listesinde uyumsuzluk, kısılma riski (VRM, soğutma, güç kaynağı) veya daha iyi bir parça var mı?
- Türkiye'de kıtlık fiyatlarıyla RAM'i sonradan eklemek (64 GB ile başlayıp) mantıklı mı, yoksa şimdi mi almak gerekir?
- Hazır sistem yerine parça toplama doğru karar mı? Güvenilir Türk satıcı/montaj önerisi var mı?
