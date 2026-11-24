# Koşu bilgisayarı: NİHAİ ALIŞ REHBERİ

Osmanlı Tarih Atlası · 24 Kasım 2026 · Hazırlayan: Claude (HAVVA). Dayanak: Claude + ChatGPT + Grok + DeepSeek metinleri (Gemini'nin kendi metni bana verilmedi; onu yalnız DeepSeek'in aktardığı kadarıyla biliyorum). Fiyatlar bugün Akakçe ürün sayfalarından tekrar okundu; satın almadan önce satıcı sitesinde yeniden bakın, RAM, anakart ve kasa fiyatları son haftalarda %19-%87 oynadı.


## 1. Konsensüs: kim haklı, kim değil

| Konu | Karar | Gerekçe |
|---|---|---|
| 9950X3D | ALMA (herkes aynı) | +10.455 TL; ek önbelleğin bu iş yükünde faydası ölçülmedi. Ölçüm çıkarsa sonra düşünülür. |
| 64 GB, tek kit 2x32, 2 slot | AL (herkes aynı) | Tek işçi 33,7 GB. 4 slot doldurmak AM5'te hızı düşürür; yetmezse kiti SAT, 2x48/2x64'e geç. Gemini haklı. |
| Kule soğutucu mu, 360 AIO mu | KULE (Gemini + DeepSeek'e katılıyorum, kendi önceki görüşümü düzeltiyorum) | 5 gün insansız koşuda pompa tek arıza noktası, kule soğutucu ucuz (3.317 TL) ve bakımsız. DeepSeek'in 'pompa durunca CPU 10 sn'de 100 °C' lafı abartı: işlemci kendini kısar/kapatır, zarar görmez; ama koşu ölür, kayıp aynı. Kule yeterli mi, ölçülmedi (aşağıda test var). |
| UPS | AL (Gemini haklı) | 4. günde kesinti tüm koşuyu sıfırlar. Ek: UPS'in SAF SİNÜS çıkışı olmalı (aşağıda 5. madde). Gerçek çözüm koşunun devam noktası (checkpoint) almasıdır; UPS onu tamamlar. |
| DRAM'siz SSD | ALMA (DeepSeek haklı, ben yanılmıştım) | Benim F/P kadememdeki Kingston NV3 ve WD Green SN3000 DRAM'siz sınıf. 'Kilitlenir' abartı, 'yavaşlar' doğru. KC3000 2 TB DRAM'li (Akakçe teyitli). |
| Linux (Ubuntu) kur | KATILMIYORUM | Proje Windows'a bağlı: py başlatıcısı, PowerShell, C:\ yolları, taskkill, kilit/kanca betikleri, Claude uygulaması. Linux'a geçiş bir port işidir; 'Windows kurmayın' diyen yapay zekâ bunu hesaba katmadı. Gemini'nin '%15-20 hızlı' iddiası kaynaksız, DeepSeek'in kendisi de bunu kabul ediyor. Windows 11 Pro kurun (güncellemeyi saatlere/erteleme politikasına bağlayabilirsiniz). Linux'u sonra ayrı, ölçülü bir deney olarak deneyin. |
| 'BIOS yüzünden 9950X açılmayabilir' (DeepSeek) | DÜŞÜK RİSK, ama bir satır teyit | B850 kartlar Ryzen 9000 çıktıktan sonra (2025) geldi; 9000 serisi baştan desteklenir (benim bilgim, MSI sayfasından teyit edin). Risk B650/X670 gibi eski kartlarda büyüktür. 'Dört AI atladı' demek abartı. Yine de satıcıya 'BIOS 9000 destekli mi, Flash BIOS düğmesi var mı' diye sorun. Akakçe sayfasında Flashback bilgisi yok (bilinmiyor). |
| DeepSeek'in 'güncel' RAM 54.979 TL, anakart 9.329 TL, SSD 17.669 TL fiyatları | DOĞRULANAMADI, kullanmıyorum | Bugün Akakçe: RAM 87.894, anakart 13.499, SSD 21.411. Aynı sayfalarda bu fiyatlar yok. 130-140 bin TL toplamı bu yüzden gerçekçi değil; bütçe ≈ 166 bin TL + UPS. |
| Grok 145-160 bin TL, PSU 850/1000 W | TOPLAM YANLIŞ, PSU AYRINTISI DOĞRU | Grok'un kendi parçaları toplanınca ≈ 168 bin TL eder. 850 W bu iş için fazlasıyla yeter; 1000 W yalnız ileride RTX 5090 düşünülürse. |
| ChatGPT 360 AIO + 2 TB KC3000 | SSD'ye evet, AIO'ya hayır | Parça seçimi sağlam; AIO kararında Gemini'ye katılıyorum. |

**Karşı argüman getirdiğim yerler:** Linux önerisi, 'BIOS en kritik risk' vurgusu ve DeepSeek'in kendi 'güncel' fiyatları. DeepSeek ayrıca 'tray + ayrı soğutucu mantıklı' diyor; kutulu 9950X'te de soğutucu gelmez, tray'in tek nedeni fiyattır (kutulu ≈ 38.300 TL) ve bedeli garantidir (aşağıda). Grok ve Gemini'ye atfedilen 'fiyat hatası'nı, elimdeki Grok metninde bulamadım.


## 2. Alınacak liste (24.11.2026 Akakçe, kargo dahil)

| Parça | Model · fiyat · satın alma bağlantısı |
|---|---|
| İşlemci | AMD Ryzen 9 9950X (tray, fansız) 25.772 TL · Amazon TR / DFS Bilgisayar https://www.akakce.com/islemci/en-ucuz-amd-ryzen-9-9950x-on-alti-cekirdek-4-3-ghz-fiyati,680082588.html |
| Anakart | MSI B850 Gaming Plus WiFi (ATX) 13.499 TL · n11 / ccyteknoloji (Vatan 13.541 TL) https://www.akakce.com/anakart/en-ucuz-msi-b850-gaming-plus-wi-fi-amd-am5-atx-fiyati,903526941.html |
| RAM | Kingston Fury Beast 64 GB (2x32) DDR5-6000 CL36 KF560C36BBEK2/64 87.894 TL · Gamemar (başkaları 88.782-90.074) https://www.akakce.com/ram/en-ucuz-kingston-fury-beast-64-gb-2x32-6000-mhz-ddr5-cl36-kf560c36bbek2-64-fiyati,269473107.html |
| SSD | Kingston KC3000 2 TB SKC3000D/2048G (DRAM'li, PCIe 4.0) 21.411 TL · Sinerji https://www.akakce.com/ssd/en-ucuz-kingston-2-tb-kc3000-skc3000d-2048g-m-2-pci-express-4-0-fiyati,1639040028.html |
| Soğutucu | Thermalright Phantom Spirit 120 SE (çift kule, 154 mm) 3.317 TL · Hepsiburada / GamingGenTR https://www.akakce.com/islemci-sogutucu/en-ucuz-thermalright-phantom-spirit-120-se-fiyati,634899527.html |
| Güç kaynağı | MSI MAG A850GL 850 W Gold, tam modüler 6.899 TL · n11 / kaen (Amazon TR 6.958) https://www.akakce.com/power-supply/en-ucuz-msi-mag-a850gl-850-w-80-plus-gold-tam-moduler-fiyati,122221010.html |
| Kasa | Lian Li Lancool 216 (beyaz 216R-W; 3 fan dahil) 7.491 TL · Amazon TR / Ftech (siyah 7.799) https://www.akakce.com/bilgisayar-kasasi/en-ucuz-lian-li-lancool-216-argb-fanli-e-atx-oyuncu-kasasi-fiyati,1016607943.html |
| UPS | 1500 VA, SAF SİNÜS (APC Back-UPS Pro veya CyberPower PFC Sinewave sınıfı) ≈ 5.000-8.000 TL (tahmin; Akakçe'de APC/CyberPower bulunamadı) https://www.akakce.com/arama/?q=1500va+ups+sinus |
| Paragraph(
'caseSensitive': 1
'encoding': 'utf8'
'text': '**TOPLAM**'
'frags': [ParaFrag(__tag__='b', bold=1, fontName='AB', fontSize=8, greek=0, italic=1, link=[], rise=0, text='TOPLAM', textColor=Color(0,0,0,1), us_lines=[])]
'style': 
'bulletText': None
'debug': 0
) #Paragraph | Paragraph(
'caseSensitive': 1
'encoding': 'utf8'
'text': '**≈ 166.300 TL (UPS hariç) · UPS ile ≈ 171.000-174.000 TL.** Windows 11 Pro lisansı, monitör, klavye, fare, montaj dahil değil.'
'frags': [ParaFrag(__tag__='b', bold=1, fontName='AB', fontSize=8, greek=0, italic=1, link=[], rise=0, text='≈ 166.300 TL (UPS hariç) · UPS ile ≈ 171.000-174.000 TL.', textColor=Color(0,0,0,1), us_lines=[]), ParaFrag(__tag__='para', bold=0, fontName='A', fontSize=8, greek=0, italic=1, link=[], rise=0, text=' Windows 11 Pro lisansı, monitör, klavye, fare, montaj dahil değil.', textColor=Color(0,0,0,1), us_lines=[])]
'style': 
'bulletText': None
'debug': 0
) #Paragraph |

Bütçe düşürmek gerekirse (azalan risk sırasıyla): 2 TB SSD yerine 1 TB DRAM'li model (≈ −8.000 TL); RAM'i tek hamlede 64 GB'tan aşağı İNDİRMEYİN. RAM fiyatı düşecekse beklemek en büyük tasarruftur (RAM toplamın %53'ü); koşu bekleyemiyorsa bugünkü fiyattan alın.


## 3. Satın alırken SATICIDAN teyit edilecekler

1. **İşlemci:** tray ise distribütör garantisi var mı, kaç yıl, fatura kesiliyor mu? Garantisiz/faturasız tray almayın. İşlemci AM5 9950X, 'AM4' yazımına dikkat (bir ilan başlığı yanlış yazmış).
2. **Anakart:** BIOS sürümü Ryzen 9000'i destekliyor mu (yazılı), Flash BIOS düğmesi var mı, HDMI ve DisplayPort çıkışı var mı (ekran kartı olmayacak, görüntü işlemci içi grafikten gelir; Akakçe'de DP yazmıyor), kutu açılmamış ve 'ATX, 4 DIMM, DDR5' mi?
3. **RAM:** model KF560C36BBEK2/64 ve İKİ modüllü TEK KİT mi (iki ayrı 32 GB değil), orijinal Kingston, TR dağıtım garantisi var mı?
4. **SSD:** tam model SKC3000D/2048G mi, DRAM'li mi (SKC3000S/KC3000 farklı sürüm olabilir), kapalı kutu mu? Akakçe sayfasında sahte/yeniden etiketli ürün uyarısı var; yetkili satıcıdan alın.
5. **Soğutucu:** Thermalright'ın AM5 braketi kutuda var mı (Akakçe sayfası AM5'i yazmıyor; üretici sitesinden teyit edin), macun kutuda mı?
6. **Güç kaynağı:** tam model MAG A850GL, ATX 3.0, 80+ Gold, tam modüler; kapalı kutu, 10 yıl garanti.
7. **Kasa:** CPU soğutucu üst sınırı 180 mm (Phantom Spirit 154 mm, sığar); 3 fan dahil; PSU dahil değil; model rengi (beyaz/siyah) fiyatı farklı.
8. **UPS:** çıkış dalga biçimi 'saf sinüs' mü ('basamaklı/simüle sinüs' olmasın), gerçek güç (Watt) ≥ 700 W mı, USB haberleşme kablosu var mı, garanti.
9. Hepsi için: fatura, iade koşulu (DOA/açılış hatasında değişim), kargo hasarında kimin sorumlu olduğu. Parçaları tek satıcıdan almak olası bir uyumsuzlukta işi kolaylaştırır.


## 4. Kurulum sırasında dikkat edilecekler

1. RAM'i yalnız A2 ve B2 slotlarına takın (CPU'dan sayarak 2. ve 4. yuva). Dört slotu ASLA doldurmayın. İlk açılışta BIOS'ta EXPO profilini açın ve ilk boot'ta bellek eğitiminin uzun sürmesine (birkaç dk, ekran boş) kesmeyin.
2. Soğutucuyu takmadan önce işlemciyi yuvaya takın, kolu düzgün kilitleyin. Soğutucu vidalarını çapraz ve kademeli sıkın. Macun bezelye tanesi kadar; eski macun sürülmüşse temizleyin. Fan yönü: ön→arka, alttan üste.
3. Soğutucu AM5 braketi ve yükseklik: Phantom Spirit 154 mm, Lancool 216 sınırı 180 mm. RAM'in soğutucu fanına çarpmadığını kontrol edin (Fury Beast alçak profildir).
4. M.2 SSD'yi anakartın ilk (CPU'ya bağlı) M.2 yuvasına takın, kartın metal M.2 soğutucusunu mutlaka takın. KC3000 ısınır.
5. Güç kaynağı kablolarını eksiksiz takın: 24 pin, işlemci için 8 pin (EPS) iki ayrı kablo varsa ikisi de. Tam modüler kabloları yalnız bu PSU'nun kendi kablolarıyla kullanın (başka marka kablo karıştırmayın).
6. Kasa fanlarını anakartın CHA_FAN başlıklarına takın; ön giriş, arka ve üst çıkış olacak şekilde pozitif basınç. Toz filtrelerini ayda bir temizleyin.
7. Görüntü: monitörü ANAKARTIN HDMI/DP çıkışına takın, (olmayacak) ekran kartına değil.
8. BIOS: önce BIOS sürümünü ve AGESA'yı güncelleyin, sonra EXPO. PBO/OC AÇMAYIN; uzun koşuda kararlılık hız kazancından önemlidir. İstenirse PPT'yi 170-200 W'a sabitleyin (ısı/gürültü düşer).
9. Windows 11 Pro: kurulumdan sonra aktif saatleri ve 'yeniden başlatmayı ertele' politikasını ayarlayın, koşu sırasında otomatik yeniden başlatmayı kapatın, güç planı 'Yüksek performans', diski/ekranı uyutmayı kapatın. Sayfa dosyasını (pagefile) sistem yönetimine bırakmayın; 64 GB'ta bile commit tavanı için C: üzerinde 32 GB sabit bırakın.
10. UPS'i bağlayın, USB kablosunu takın, otomatik kapanışı ayarlayın ve elektriği kesip denemeyle kaç dakika dayandığını ÖLÇÜN. Önce kısa süreli, güvenli bir testle başlayın (koşu yokken).
11. İlk gün kabul testi (koşudan önce zorunlu): MemTest86 veya Windows bellek tanılaması 1 tam geçiş, 30-60 dk Cinebench/Prime95 sınırlı yük ile CPU sıcaklığı. Hedef: sürekli yükte 85 °C altı ve kısılma yok. Kule soğutucunun 9950X'i yetirip yetirmediği ölçülmedi; 90 °C üstüyse ya PPT'yi düşürün ya da AIO'ya geçin (bu durumda pompa için yedek plan: sıcaklıkta otomatik kapanış açık kalsın).
12. Oda sıcaklığı: kapalı/klimasız odada yaz 35 °C'de hava soğutma marjı daralır. Makineyi duvara yapıştırmayın, havalandırması olan yere koyun.
13. Koşu için yazılım (donanım değil, ama önemli): koşu ara noktaya (checkpoint) yazıyorsa UPS + kesinti = kayıp küçük olur. Bu motor değişikliği gerektirir; motor dosyalarına bu oturum dokunmaz, ayrı karar.


## 5. Kaçınılacaklar (özet)

| Kaçının | Neden |
|---|---|
| 9950X3D | Faydası ölçülmedi, +10.455 TL |
| 4 DIMM doldurmak / ikinci ayrı kit eklemek | AM5'te hız düşer, kararsızlık; yetmezse kiti değiştir |
| DRAM'siz SSD (NV3, WD Green SN3000 gibi) | 11,8 GB SQLite sürekli yazımı için yavaşlama riski |
| Ucuz mATX anakart (B850M-K/B850M-E) | Eylül'de 128 °C'ye çıkıp kısıldı; ATX orta sınıf B850 şart |
| 360 AIO (bu kullanım için) | Tek arıza noktası: pompa. 5 günlük insansız koşu |
| Basamaklı sinüs/ucuz UPS | Aktif PFC'li PSU'yu kapatabilir; saf sinüs alın |
| Garantisiz/faturasız tray CPU, belirsiz satıcı | Sahte/yeniden etiketli ürün, garanti kaybı |
| Hazır GPU'lu sistem | Bu iş için GPU gereksiz, 139-566 bin TL ve çoğu stoksuz |
| 128 GB'ı şimdi almak | ≈ 243 bin TL (RAM tek başına). Önce çoklu işçi RAM'ini ölçün |


## 6. Ölçülmeyenler

- Phantom Spirit 120 SE'nin 9950X'i sürekli yükte kaç dereceye çıkardığı (kullanıcı raporları var, bizde ölçüm yok).
- Birden çok işçinin toplam RAM'i (tek işçi 33,7 GB). 9950X tek çekirdek hızının (B) dolguyu kaç kat hızlandıracağı (tahmin 1,5-2 kat).
- Anakartta DisplayPort ve Flash BIOS düğmesi; Thermalright'ın AM5 braketi; UPS fiyat ve model (Akakçe'de APC/CyberPower bulunamadı); MSI A850GL 12V-2x6 yorumu (tek, doğrulanmamış; GPU takılmayacağı için önemsiz).
- İtopya ve İnceHesap fiyatları (403, okunamadı): alışveriş öncesi onlara da bakın, daha ucuz olabilirler.
