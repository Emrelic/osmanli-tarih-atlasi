// -*- coding: utf-8 -*-
// YER_YAMA_EMILME -- VERİ SAHİPLİK oturumu, 27 Ağustos 2026, ORHANGAZİ sevkiyle.
// Kaynak: denetim/kume/emilme.md (16 madde, parti-emrelic-0035) + ORHANGAZİ'nin
// M-1364 ek işi (Taygan, Yagodina).
// Bu dosya YENİ NOKTA önerileridir — CLAUDE.md §2 emilme kusurunun çaresi.
// 3 km kuralı her öneride ayrıca ölçüldü (node ile haversine). `data/*.js`/
// `arac/*.py`'ye hiçbir yazma yapılmadı; uygulamayı koordinatör yapar.

window.YER_YAMA_EMILME = [
 {
  "no": "EK-2 DÜZELTME — HATAMI ÇÜRÜTTÜM (bkz. tahta)",
  "baslik": "Taganrog — 'kayıt yok' hükmü YANLIŞTI. Kayıt zaten var, kendi kaydıyla kaynaklı.",
  "tur": "tekrar",
  "olcum": "🔴 KÖK NEDEN: node sorgum yalnız `window.YERLESIMLER`i (data/yerlesimler.js'in kendi değişkeni) okuyordu; ama proje 61 AYRI pencere değişkeni (`window.YERLESIMLER_EK27`, `_H2_RUSYA` vb.) kullanıyor ve bunlar birbirine PUSH edilmiyor — motor (`arac/girdi.py`) onları ayrı ayrı okuyup birleştiriyor. Ben tek değişkeni sorgulayınca 'Taganrog yok' sonucu aldım; TÜM `window.YERLESIMLER*` değişkenlerini (61 tanesini, toplam 2632 nokta) birleştirip yeniden sorgulayınca kayıt ÇIKTI: `data/yerlesimler_h2_rusya.js`'te 'Taganrog' (47.237, 38.897), kur:'1698-09-12', s:[rusya 1698-1711 → kirim 1711-1739 → rusya 1739-...]. Bu, ORHANGAZİ'nin 1769 önerisinden FARKLI ama zaten kaynaklı/kasıtlı bir karar (kur: alanı özenle set edilmiş).",
  "hukum": "tekrar: kayıt zaten var ve dönem zinciri (1711-1739 arası kırım/Kırım Hanlığı tasarrufu, 1739 Belgrad Antlaşması'yla rusya) tarihen savunulabilir bir model. Ek iş gerekmiyor — ÖNCEKİ ÖNERİM (yeni nokta) GERİ ÇEKİLDİ, uygulanmasın.",
  "kaynak": "data/yerlesimler_h2_rusya.js (mevcut kayıt) — kendi aramamın yöntem hatası tahtaya bildirildi"
 },
 {
  "no": "EK-3 DÜZELTME — HATAMI ÇÜRÜTTÜM (bkz. tahta)",
  "baslik": "Yagodina (Jagodina) — 'kayıt yok' hükmü YANLIŞTI, kayıt zaten var AMA farklı bir Avusturya dönemi (1717-39) taşıyor, 1689-90 yok",
  "tur": "veri",
  "olcum": "Aynı metodolojik hata (bkz. Taganrog düzeltmesi) — düzeltilmiş sorguda `data/yerlesimler_ek29.js`/`yerlesimler_serhat.js` içinde 'Yagodina (Jagodina)' kaydı ÇIKTI (43.9772, 21.2617): s:[sirbistan 1281-1439 → sirp-despotlugu 1444-1459 → (Osmanlı doğrudan) → avusturya 1717-1739 (İKİNCİ Habsburg savaşı, Pasarofça) → (Osmanlı) → v: 1830-1878 tâbi]. 🔴 ÖNEMLİ FARK: bu kayıtta 1689-90 Habsburg dönemi YOK — yalnız 1717-1739 var. Yani ORHANGAZİ'nin '①. kalem'indeki Yagodina, Çaçak/Kragujevac ile AYNI eksiği taşımıyor olabilir (belki 1689-90 seferi Yagodina'ya hiç ulaşmadı) YA DA aynı eksiği taşıyor ve henüz araştırılmamış — AYIRT EDEMEDİM.",
  "hukum": "olculecek: yeni nokta önerim GERİ ÇEKİLDİ (kayıt zaten var). Asıl soru artık emilme değil sahiplik: Yagodina'nın 1689-90'da da (Çaçak/Kragujevac gibi) Avusturya'ya geçip geçmediği — NE ölçülecek: Yagodina'ya özel 1689 kaynağı (bkz. yer_yama_sahiplik.js Çaçak/Kragujevac kalemleriyle aynı kısıt: hakemli akademik kaynak bulunamadı).",
  "kaynak": "data/yerlesimler_ek29.js / yerlesimler_serhat.js (mevcut kayıt) — kendi aramamın yöntem hatası tahtaya bildirildi"
 },
 // ===================================================================
 // E1+E2 grubu — 16 madde, koordinatörün TEK KÖK hükmü: CLAUDE.md §2 emilme.
 // Doğrulama yöntemi: her tekrar eden coğrafi ad (Ereş/Kabala/Şeki/Gence/
 // Bakü/Şamahı/Derbend/Revan/Tiflis/Semendire/Bender/Çehrin/Yedisan bozkırı/
 // Riyad) TEK TEK sorgulandı — ÇOĞUNUN KENDİ KAYDI ZATEN VAR ve dönemleri
 // ilgili antlaşma/olaylarla tutarlı. Genel bulgu: koordinatörün "18 ayrı iş
 // DEĞİL" hükmü DOĞRU ama biraz fazla karamsar — büyük merkezlerin çoğu
 // ZATEN kayıtlı, gerçek boşluk ARA NOKTALARDA (küçük kasabalar/köyler) ve
 // İKİ GERÇEK NOKTA GAP'İNDE (Diriyye, ve genel Sahra/Nefud/Arabistan
 // yoğunluğu — H-0001/H-0011/H-0079 ile aynı aile).
 // ===================================================================
 {
  "no": "H-0019 / H-0073",
  "baslik": "Şirvan/Tiflis alınırken aradaki topraklar (Ereş, Kabala, Şeki, Karabağ, Gence, Gümrü, Revan, Kaheti) alınmadan mı geçildi?",
  "tur": "veri",
  "olcum": "Doğrudan sorgulandı: Ereş, Kabala, Şeki (Nuha), Gence (2 kayıt), Bakü, Şamahı, Derbend, Revan, Tiflis'in HEPSİNİN kendi kaydı VAR ve İstanbul Mukasemenamesi/1724 döneminde (1723-1736 civarı) Osmanlı doğrudan (`d:`) ya da kuşatma dönemi taşıyor — yani koridor GÖRÜNENDEN daha az boş: büyük merkezler zaten noktalı ve tarihen kaplı. Gümrü (sonradan kurulan Alexandropol, 1837) ve Kaheti (bir krallık adı, ayrı yerleşim değil — Tiflis/Telavi gibi Kaheti şehirleriyle temsil ediliyor olmalı) bu turda BULUNAMADI ama bu 1724 için BEKLENEN bir durum (Gümrü henüz yok).",
  "hukum": "zaten-dogru (Ereş/Kabala/Şeki/Gence/Bakü/Şamahı/Derbend/Revan/Tiflis için — büyük merkezler zaten kayıtlı ve tutarlı) + olculecek (ARA köylerin/küçük kasabaların yoğunluğu için — koordinatörün TEK KÖK hükmü büyük ölçekte ÇÜRÜDÜ ama küçük ölçekte hâlâ geçerli olabilir, tam nokta yoğunluğu haritası çıkarılmadı bu turda).",
  "kaynak": "data/yerlesimler.js (Ereş/Kabala/Şeki/Gence/Bakü/Şamahı/Derbend/Revan/Tiflis kayıtları, hepsi doğrudan sorgulandı)"
 },
 {
  "no": "H-0021",
  "baslik": "Nahcıvan alınmadan önce aradaki topraklar (Maku, Şerur, Kotur, Hoy, Culfa) alınmıyor mu?",
  "tur": "veri",
  "olcum": "Bu, BAYAT AVCISI turumda (bugün, grup-G/parti-emrelic-0021/H-0027/H-0028) ve bugün başka bir oturumun yazdığı `data/yer_yama_iran.js`'te ZATEN teşhis edilmiş: 'Culfa hâlâ kesintisiz safevi... Hoy bugün düzeldi ama Culfa/Merend/Meraga KAYITLI BORÇ.' Maku/Şerur/Kotur bu turda ayrıca kontrol edilmedi ama aynı ailede olması muhtemel.",
  "hukum": "tekrar: aynı kök zaten BULGU-BAYAT-TARAMA.md'de ve data/yer_yama_iran.js'te var — koordinatör iki kaynağı birleştirip uygulasın, yeniden araştırmaya gerek yok.",
  "kaynak": "denetim/BULGU-BAYAT-TARAMA.md (grup-G) · data/yer_yama_iran.js"
 },
 {
  "no": "H-0022",
  "baslik": "Tebriz ele geçti ama Azerbaycan ile Osmanlı arasında bir bölge koridor gibi kaldı — burası da Osmanlı almış olmalı",
  "tur": "veri",
  "olcum": "H-0021/H-0075 ile AYNI AİLE (İran koridoru, Tebriz-Nahcıvan-Culfa hattı) — aynı BULGU-BAYAT-TARAMA.md/yer_yama_iran.js kökü geçerli.",
  "hukum": "tekrar: bkz. H-0021.",
  "kaynak": "denetim/BULGU-BAYAT-TARAMA.md (grup-G) · data/yer_yama_iran.js"
 },
 {
  "no": "H-0026 / H-0036",
  "baslik": "Ruslar Özi'yi/Bender'i alırken aradaki bölgeler (bozkır, Çehrin, Lehistan, Zaporojye Kazakları) ne durumdaydı?",
  "tur": "veri",
  "olcum": "Doğrudan sorgulandı: Çehrin (Çigirin) 1699-1793 arası 'lehistan' (Leh-Litvanya) — kullanıcının 'Lehistan görünüyor' gözlemi DOĞRU. Bender'in kendi kaydı da zengin (kd: alanı bile var): Boğdan tâbi 1456-1538, doğrudan Osmanlı sancak 1538-1770, rusya 1770-1774, tekrar rusya 1812. Yani Bender'i almadan önce Rusların 'Kırım bozkırı/Çehrin'i almış olması gerekmiyor — Bender kendi başına, doğrudan Osmanlı sancağıydı, ayrı bir olay. Zaporojye Seçi bu turda ayrı bir adla bulunamadı, kontrol edilmedi.",
  "hukum": "zaten-dogru (Çehrin/Bender için, veri tutarlı ve zaten kayıtlı) + olculecek (Zaporojye Seçi'nin kendi kaydı/statüsü ayrıca aranmalı, farklı yazımla).",
  "kaynak": "data/yerlesimler.js 'Çehrin (Çigirin)', 'Bender' kayıtları"
 },
 {
  "no": "H-0029",
  "baslik": "Semendire alınırken aradaki koridor alınmadan mı Semendire alınmış?",
  "tur": "veri",
  "olcum": "Semendire'nin kendi kaydı ÇOK ZENGİN ve doğrudan sorgulandı: sırbistan→sirp-despotlugu→(Osmanlı doğrudan, uzun süre)→avusturya(1688-90)→(Osmanlı)→avusturya(1717-38)→(Osmanlı antlaşma 1738-1867)→sırbistan tâbi(1867-78)→... — hatta ayrı bir `isg:` (geçici işgal, 1789-1791 Avusturya) alanı bile var. Bu, koordinatörün Niş/Vidin/Çaçak/Kragujevac ile aynı ailede işaret ettiği bölgenin TAM OLARAK araştırılmış olduğunu gösteriyor — Semendire kendisi 'koridor' değil, çevresindeki küçük yerleşimler (bu turda kontrol edilmedi) koridor olabilir.",
  "hukum": "zaten-dogru: Semendire'nin kendisi çok iyi modellenmiş. Sorunun asıl kaynağı muhtemelen çevresindeki küçük kasabalar — bu turda ayrıca kontrol edilmedi.",
  "kaynak": "data/yerlesimler.js 'Semendire' kaydı (doğrudan sorgulandı, kd:/isg: alanları dahil)"
 },
 {
  "no": "H-0031 / H-0079",
  "baslik": "Suudi-Vehhabi devleti kurulduğunda Hail şehrinde/Nefud çölünde bir koridor/egemenlik boşluğu var mı?",
  "tur": "veri",
  "olcum": "Riyad'ın kendi kaydı ÇOK İYİ modellenmiş ve doğrudan sorgulandı: bos:'devletsiz' (1744 öncesi, CLAUDE.md §3'te belgelenmiş bilinçli karar), sonra s:suud(1744-1818)→v:Mısır/İbrahim Paşa(1818-1824)→suud-ikinci(1824-1891)→sammar(1891-1902)→suud-ucuncu(1902-1923). 🔴 AMA Diriyye (İlk Suudi Devleti'nin GERÇEK başkenti, 1744-1818, İbrahim Paşa tarafından 1818'de yıkıldı) AYRI bir nokta olarak bulunamadı — Riyad'ın kendisi ancak DAHA SONRA (İkinci Suudi Devleti, 1824+) başkent oldu. Bu GERÇEK bir nokta eksikliği: Diriyye kendi başına, tarihsel öneme sahip (Vehhabi hareketinin doğduğu yer), ayrı bir kayıt hak ediyor.",
  "hukum": "olculecek: Diriyye için YENİ NOKTA öneriliyor — koordinat ~24.7343K/46.5721D (bugünkü Ed-Dir'iye, Riyad'ın 20 km kuzeybatısı — 3 KM KURALI: Riyad'dan ~20 km, güvenli mesafe), kur/bit veya s: 1744-01-01→1818-09-09 (suud), sonra yıkım/terk (1818 sonrası harabe, 19. yy'da terk edilmiş kaldı, ancak 20. yy'da yeniden iskân). NE gerekiyor: kesin kuruluş/yıkım günleri için TDV veya akademik kaynak (örn. Encyclopaedia of Islam 'al-Dir'iyya' maddesi) — bu turda tam doğrulanmadı, tarih uydurulmadı.",
  "kaynak": "data/yerlesimler.js 'Riyad' kaydı (doğrudan sorgulandı) — Diriyye'nin kendisi bulunamadı, GERÇEK boşluk"
 },
 {
  "no": "H-0047",
  "baslik": "Boş arazilerin Osmanlı kırmızısına boyanmasını sağlayan yapı ELDEN KALDIRILSIN — ama 200km tavanlı yerleşimlerin çöl boyaması için anlamsız girintiler yumuşatılsın",
  "tur": "motor",
  "olcum": "Bu bir MOTOR (arac/uret_petek.py) değişiklik talebi — CLAUDE.md §2'nin TANIMLADIĞI emilme mekanizmasının KENDİSİNİ değiştirme isteği (boş yerlerin boyanmasını tamamen engelleme + kalan kısımda girinti yumuşatma). Bu, benim yer_yama dosyalarımın (veri yaması) kapsamının TAMAMEN DIŞINDA — `arac/*.py` bana kapalı.",
  "hukum": "sirada: BAŞKA İŞE BAĞLI (MOTOR ÜÇ KALEM oturumu) — bu, motorun emilme/yetim-yüz mantığının yeniden tasarımı, VERİ SAHİPLİK'in değil MOTOR oturumunun işi. Emre'nin kendi önerisi (girinti yumuşatma kaideleri) dikkate değer, MOTOR oturumuna iletilmeli.",
  "kaynak": "bulunamadı — motor tasarım değişikliği, veri sorunu değil"
 },
 {
  "no": "H-0049",
  "baslik": "Niş'in fethi ile birlikte aradaki boş arazi de Osmanlıya katılmalı mıydı? Vidin ilhakı maddesinde bu alan arka planda görünmeye devam ediyor",
  "tur": "veri",
  "olcum": "Bu, Niş/Vidin bölgesindeki ARA noktaların eksikliği — aynı aile Çaçak/Kragujevac/Yagodina (bugünkü ek işim) ve BULGU-BAYAT-TARAMA.md'deki Niş/Vidin enklav bulgusuyla (Değişmez 7, 'C-hakiki' kova) örtüşüyor. Niş ile Vidin arasındaki küçük kasabalar (bu turda ayrıca aranmadı) muhtemelen noktasız.",
  "hukum": "tekrar: aynı kök (Niş/Vidin enklav ailesi) BULGU-BAYAT-TARAMA.md'de zaten var — bu turda ek nokta araştırması yapılmadı, NE gerekiyor: Niş-Vidin arası küçük yerleşimlerin (varsa) TDV taraması.",
  "kaynak": "denetim/BULGU-BAYAT-TARAMA.md (grup-H, Niş/Vidin enklavı) · data/yer_yama_sahiplik.js (Çaçak/Kragujevac kalemleri, bu dosyada)"
 },
 {
  "no": "H-0050",
  "baslik": "Fetret devrinden sonra bu parça Osmanlı kırmızısı olarak kalmış — Emir Süleyman topraklarına katılması gerekir",
  "tur": "veri",
  "olcum": "Görsel incelenmedi (zaman kısıtlı) — Fetret devri (1402-1413) bölgesi genel olarak CLAUDE.md'de bilinen bir zayıf nokta (Anadolu beyliklerinin fetret dönemi sınırları). Emir Süleyman (Rumeli'deki Osmanlı şehzadesi) topraklarının tam sınırı ayrı bir araştırma gerektiriyor.",
  "hukum": "olculecek: NE ölçülecek — görselden tam konum/tarih tespit edilip Emir Süleyman'ın 1402-1410 Rumeli topraklarının gerçek sınırı (TDV `emir-suleyman` maddesi, BAYAT AVCISI turumda zaten 'kurtarılmış' doğrulanmış bir slug) ile karşılaştırılmalı.",
  "kaynak": "bulunamadı — görsel bu turda açılmadı"
 },
 {
  "no": "H-0052",
  "baslik": "İkinci Kosova Savaşı'nda burada boş bir toprak Osmanlı egemenliğine girip çıkıyor — bu hata mı?",
  "tur": "olculecek",
  "olcum": "Görsel incelenmedi (zaman kısıtlı). 'Girip çıkma' (kısa süreli el değiştirme) ifadesi ya gerçek bir savaş dalgalanması (İkinci Kosova, 1448, gerçekten kısa süreli cephe hareketleri yaşandı) ya da §2 emilme'nin İKİ KOMŞU arasında salınması (boş bölge önce birine sonra ötekine emiliyor, komşularının kendi kırılma günlerine göre).",
  "hukum": "olculecek: NE ölçülecek — görselden tam tarih/konum tespit edilip o bölgede nokta olup olmadığı ve komşu kimliklerin o tarihteki değişimi.",
  "kaynak": "bulunamadı — görsel bu turda açılmadı"
 },
 {
  "no": "H-0061",
  "baslik": "Fetret devrinde bu bölümdeki topraklar Osmanlı kırmızısında kalmış görünüyor",
  "tur": "olculecek",
  "olcum": "H-0050 ile AYNI AİLE (Fetret devri bölgesel boşluk sorunu). Görsel incelenmedi.",
  "hukum": "olculecek: bkz. H-0050, aynı kapsamda birlikte araştırılmalı.",
  "kaynak": "bulunamadı — görsel bu turda açılmadı"
 },
 {
  "no": "H-0064",
  "baslik": "Kuzey Afrika'daki gibi anlamsız bir boşluk boyanması meselesi burada da var sanki",
  "tur": "veri",
  "olcum": "Kullanıcının KENDİSİ bu maddeyi H-0001/H-0011 (Kuzey Afrika/Sahra emilme ailesi, bu dosyada ve yer_yama_sahiplik.js'te işlendi) ile AÇIKÇA ilişkilendirmiş. Görsel incelenmedi ama aynı aileye ait olduğu kullanıcının kendi tespitiyle teyitli.",
  "hukum": "tekrar: H-0001/H-0011 ile aynı aile (Sahra/çöl nokta yoğunluğu eksikliği) — ayrı bir nokta yoğunluğu projesi gerektiriyor.",
  "kaynak": "kullanıcının kendi çapraz-referansı (H-0001/H-0011 ile aynı görünüm)"
 },
 {
  "no": "H-0075",
  "baslik": "Ferhad Paşa ve Hemedan antlaşmalarında koridordaki şehirler (Tebriz/Nahcıvan/Revan/Şehrizor/Hemedan'a bağlı küçük yerler) büyük şehirlerle birlikte el değiştirmiş olabilir mi, kayıtlarda geçmediği için Safevî'de kalmış gibi görünüyor olabilir mi?",
  "tur": "veri",
  "olcum": "Kullanıcının HİPOTEZİ (küçük yerlerin büyük merkezlere bağlı olarak sessizce el değiştirmiş olabileceği) tam olarak BULGU-BAYAT-TARAMA.md'nin ve data/yer_yama_iran.js'in ÖLÇTÜĞÜ şey — Culfa/Merend/Meraga/Miyandoab'ın büyük ihtimalle GERÇEKTEN Ferhad Paşa ile Osmanlı'ya geçmiş olabileceği ama kayıt eksikliğinden safevi görünmeye devam ettiği zaten yazılı. Bu, H-0021/H-0022 ile de AYNI AİLE.",
  "hukum": "tekrar: aynı kök BULGU-BAYAT-TARAMA.md'de (grup-G) ve data/yer_yama_iran.js'te zaten var — kullanıcının hipotezi doğrulanmayı bekliyor, koordinatörün mevcut iki kaynağı incelemesi yeterli.",
  "kaynak": "denetim/BULGU-BAYAT-TARAMA.md (grup-G) · data/yer_yama_iran.js"
 },
 {
  "no": "H-0102",
  "baslik": "Bu anlamsız boş topraklardaki Osmanlı kırmızısına nasıl engel olacağımızı araştıralım",
  "tur": "motor",
  "olcum": "H-0047 ile AYNI TALEP (motorun emilme mekanizmasının değiştirilmesi) — genel bir soru, spesifik coğrafya belirtilmemiş.",
  "hukum": "sirada: BAŞKA İŞE BAĞLI (MOTOR ÜÇ KALEM oturumu) — bkz. H-0047, aynı kapsamda birleştirilmeli.",
  "kaynak": "bulunamadı — motor tasarım sorusu, H-0047 ile aynı"
 }
];
