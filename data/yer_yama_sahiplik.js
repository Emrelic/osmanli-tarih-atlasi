// -*- coding: utf-8 -*-
// YER_YAMA_SAHIPLIK -- VERİ SAHİPLİK oturumu, 27 Ağustos 2026, ORHANGAZİ sevkiyle.
// Kaynak: denetim/kume/sahiplik-teyidi.md (32 madde, parti-emrelic-0035) +
// ORHANGAZİ'nin M-1364 ek işi (Çaçak/Kragujevac).
// Bu dosya bir YAMA'DIR — var olan `data/yerlesimler*.js` kayıtlarını AD
// EŞLEŞTİREREK düzeltir (dönem/tarih). Yeni nokta YOK (o `yer_yama_emilme.js`te).
// `data/*.js`/`arac/*.py`'ye hiçbir yazma yapılmadı; uygulamayı koordinatör yapar.

window.YER_YAMA_SAHIPLIK = [
 // ===================== S1 grubu (H-0001,0011,0015,0020,0027,0035,0037,0038) =====================
 {
  "no": "H-0001",
  "baslik": "Boş alan, yerleşim yok, kesik çizgilerle çevrili, kıpkırmızı boyanıyor — Kirenaika/Batı Mısır çölü, 1686",
  "tur": "veri",
  "olcum": "Görsel: 1686-06-01, kutu 27,64-30,90K/23,28-26,14D. Kutuda TEK nokta var (Cağbûb, kur:1856 — yani 1686'da Cağbûb DA yok). Genişletilmiş taramada (25-33K/20-29D) 18 nokta var ama hepsi kıyı şeridinde (Bingazi/Derne/Tobruk kuzeyde, Dâhile/Ferâfire/Bahriye güneyde Mısır vahalarında) — ORTADAKİ Kirenaika/Batı Çölü şeridi TAMAMEN noktasız. Bu klasik CLAUDE.md §2 emilme: boş alan en yakın peteğe (muhtemelen kuzeydeki hafsi/italya zinciri ya da güneydeki memluk zinciri) emiliyor. Kronoloji panelindeki 'Modon'un Venedik'e kaybı' maddesi bu bölgeyle ALAKASIZ — bu normal (panel o günün Osmanlı kronolojisini gösterir, bölgeyle eşleşmesi gerekmez), kullanıcının kafası bundan karışmış olabilir ama bu bir hata değil.",
  "hukum": "tekrar: aynı sınıf (Sahra/çöl emilmesi) daha önce ÇÖL BOYAMA (Sudan/Kordofan) ve VERİ AÇIK'ın (denetim/BULGU-VERI-ACIK.md) Kuzey Afrika notunda flaglenmiş — bu KESİN OLARAK AYNI KUTU değil ama AYNI KÖK/AYNI ÇÖZÜM SINIFI (çöl nokta yoğunluğu artırma projesi). Tek başına bu kutuya nokta eklemek yama kapsamımın (dönem düzeltmesi) dışında — emilme kümesine daha uygun ama oradaki 16 madde de zaten dolu; bu genel bir 'Sahra nokta yoğunluğu' projesi gerektiriyor, tek maddelik yama değil.",
  "kaynak": "node sorgusu (kutu.js) — 25-33K/20-29D taraması"
 },
 {
  "no": "H-0011",
  "baslik": "Trablusgarp'ta Karamanlı hanedanı kurulunca bazı yerleşimsiz bölgeler kırmızı (Osmanlı) kalıyor",
  "tur": "veri",
  "olcum": "'Trablusgarp' adıyla kayıt yok ama gerçek kayıt 'Trablus' (32.897,13.191): v:[{f:'1711-03-01',t:'1835-05-26',k:'Trablusgarp Ocaklığı (Karamanlılar)'}] — TAM istenen tâbi/pembe dönem zaten doğru modellenmiş. Kullanıcının 'kırmızı kalan boş yerler' şikâyeti bu yüzden Trablus'un KENDİ kaydı değil, çevresindeki İÇ SAHRA/FEZZAN noktasızlığı (§2 emilme, H-0001 ile aynı aile) — Fizan/Sebha bölgesinde nokta yoğunluğu düşük (CLAUDE.md §1.5 tablosunda da bilinen bir açık).",
  "hukum": "zaten-dogru (sahiplik/tâbi dönemi için) + tekrar (kırmızı boşluklar için, H-0001 ile aynı Sahra emilme ailesi — ayrı bir nokta yoğunluğu projesi gerektiriyor, bu yamanın kapsamı dışı).",
  "kaynak": "data/yerlesimler.js 'Trablus' kaydı (v: Karamanlılar dönemi doğru)"
 },
 {
  "no": "H-0015",
  "baslik": "Ummanlıların Bahreyn istilası maddesinde bırakılmış bir editoryal not (\"tek blok mu birkaç dönem mi\") kullanıcı tarafından fark edildi",
  "tur": "kronoloji",
  "olcum": "🔴 BAŞKA İŞE BAĞLI — bu bir VERİ (yerleşim) sorunu değil, KRONOLOJİ İÇERİK dosyasında bir editoryal hata: `data/olaylar_ek13.js:298-303` ('Ummanlılar'ın Bahreyn'i istilâsı') maddesinin `d:` (görünür anlatım) alanının İÇİNDE şu cümle kalmış: '⚠️ Bu pencerenin iç ayrıntısı bu turda kesinleştirilemedi; kayıt yazılırken tek blok mu yoksa birkaç dönem mi olacağı ayrı bir ölçüm ister.' Bu bir ARAŞTIRMACI NOTU, kullanıcıya gösterilecek metin değil — kullanıcı haklı olarak 've alakası ne bunun' diye sormuş. Manama'nın kendi yerlesim kaydı zaten `bos:'devletsiz'` genel beyanıyla 1861'e kadar sahipsiz sayıyor, yani asıl 'tek blok mu' sorusu MAP için önemsiz (zaten tek blok gibi davranılıyor) — yalnız KRONOLOJİ METNİ temizlenmeli.",
  "hukum": "sirada: BAŞKA İŞE BAĞLI — KRONOLOJİ İÇERİK oturumu `data/olaylar_ek13.js:298-303`'teki editoryal notu kaldırmalı (metni sadeleştirmeli). Veri (yerlesimler) tarafında ek iş gerekmiyor.",
  "kaynak": "data/olaylar_ek13.js:298-303 (mevcut madde metni, doğrudan okundu)"
 },
 {
  "no": "H-0020",
  "baslik": "İstanbul Mukasemenamesi (1724) ile İran nasıl bölüşüldü, Şirvan enklav şeklinde kalmış",
  "tur": "veri",
  "olcum": "'Şirvan' adıyla ayrı bir yerleşim kaydı yok (bölgenin tarihî kimliği olarak `d:\"sirvansah\"` şeklinde Şamahı/Şeki/Bakü/Gence gibi noktalarda geçiyor). Bu dört noktanın hepsi 1723-1735 (bazı sapmalarla 1725/1736) arası bir Osmanlı doğrudan (`d:`) dönemi taşıyor — İstanbul Mukasemenamesi (1724) ve sonrasının genel örüntüsüyle tutarlı (Osmanlı Şirvan/Şeki/Gence/Karabağ'ı aldı, Rusya Hazar kıyısını). 'Enklav şekli' muhtemelen coğrafi olarak DOĞRU (Şirvan içeride, Rusya kıyıda, İran güneyde üçe bölünmüş bir bölgeydi) — ama bunun GEOMETRİK olarak doğru çizilip çizilmediği (Voronoi/petek şekli) bu yamanın kapsamı dışı, görsel/motor incelemesi ister.",
  "hukum": "olculecek: veri (dönem tarihleri) tutarlı görünüyor, ama 'enklav şekli'nin görsel/geometrik doğruluğu ayrı bir harita-hata-avı (Oturum 2) incelemesi gerektiriyor — NE ölçülecek: 1724-1735 arası Şirvan bölgesinin Voronoi şeklinin gerçek 1724 sınırlarıyla örtüşüp örtüşmediği.",
  "kaynak": "data/yerlesimler.js 'Şamahı','Şeki (Nuha)','Bakü','Gence' kayıtları (node sorgusu)"
 },
 {
  "no": "H-0027",
  "baslik": "Ruslar Özi'yi ele geçirdiği maddede taralı alan var ama kronolojide bahsi geçmiyor gibi görünüyor",
  "tur": "veri",
  "olcum": "Kontrol edildi: hem VERİ hem KRONOLOJİ zaten tutarlı ve mevcut. `data/yerlesimler.js` 'Özi' kaydı s:{f:'1737-07-13',t:'1738-08-01',d:'rusya'} taşıyor; `data/olaylar_ek5.js:278` bu tam tarihte ('1737-07-13', yer_id:'Özi') 'Özi (Ochakov) Kalesi'nin Ruslara düşüşü' maddesi VAR ve içeriği ('ertesi yıl... yeniden Osmanlı'ya geçecekti') veriyle birebir örtüşüyor. Kullanıcının 'kronolojide bahsetmiyor' izlenimi muhtemelen ekran görüntüsünün farklı bir güne/farklı bir taralı alana (belki 1788-1792 ikinci kayıp) denk gelmesinden kaynaklanıyor olabilir — görsel tarihi netleştirilmeli.",
  "hukum": "zaten-dogru (1737-1738 dönemi için veri+kronoloji tutarlı). ⚠️ Eğer görseldeki tarih 1788-1792 ise (Özi'nin ikinci ve kalıcı kaybı) o dönem de veride var (t:1788-12-17 rusya) — ayrıca kontrol edilmeli, görsel tarihini netleştiremedim.",
  "kaynak": "data/yerlesimler.js 'Özi' + data/olaylar_ek5.js:278"
 },
 {
  "no": "H-0035",
  "baslik": "Hotin Ruslara kaybedilmiş deniyor ama Rusya ile kara bağlantısı yok gibi görünüyor",
  "tur": "veri",
  "olcum": "Hotin'in kendi kaydı doğru: s:{f:'1769-09-19',t:'1774-07-21'} ve {f:'1812-05-28',...} rusya. 1769-1774 döneminde çevresindeki noktalar kontrol edildi (45-50K/26-33D taraması): Akkirman/Kili/Hacıbey/Yedisan bozkırı gibi Karadeniz kıyısı noktaları o tarihte HÂLÂ Osmanlı/Kırım (rusya değil, 1812/1792'ye kadar) — yani 1769-1774 arası Hotin gerçekten bir KARA BAĞLANTISIZ Rus enklavı gibi görünüyor olabilir. Bu, tarihen MUHTEMELEN doğru bir durum (1769-1774 Rus-Osmanlı Savaşı sırasında Ruslar Hotin'i aldı ama Karadeniz kıyısına henüz ulaşmamıştı, kıyı 1774 Küçük Kaynarca'dan sonra bile büyük ölçüde Osmanlı/Kırım kaldı, kıyı ancak 1792 Yaş ve 1812 Bükreş ile Rusya'ya geçti) — yani 'kara bağlantısız' görünüm muhtemelen TARİHSEL GERÇEK, hata değil. Ama bu CLAUDE.md §3.5.1'in enklav sınıfı, Değişmez 7 denetimiyle çapraz kontrol edilmeli.",
  "hukum": "olculecek: veri muhtemelen doğru (1769-74 Hotin gerçek bir kara-bağlantısız Rus enklavıydı, dönemin genel tarihiyle tutarlı) ama kesin doğrulama için Değişmez 7 enklav denetiminin bu vakayı nasıl sınıflandırdığına (A-koridor/B-bilinmiyor/C-hakiki) bakılmalı — NE ölçülecek: `arac/denetle.py` Değişmez 7 çıktısında Hotin 1769-74.",
  "kaynak": "data/yerlesimler.js 'Hotin' + bölge taraması (node)"
 },
 // ===================== S2 grubu (H-0044,0048,0051,0053,0056,0057,0059,0060) =====================
 // NOT: bu grup İKİ KEZ işlendi — önce benim (VERİ SAHİPLİK) hızlı taramamla,
 // sonra gecikmeli dönen bir alt-oturumun (S2 retry-2, ~3 saat sonra tamamlandı)
 // görsellere dayalı derin taramasıyla. Aşağıdaki, ikisinin BİRLEŞTİRİLMİŞ hâli
 // — alt-oturumun somut bulguları önceliklidir (görselleri açtı, ben açmadım).
 {
  "no": "H-0044",
  "baslik": "Mısır'ın Fransızlar (1798) tarafından işgal bölgeleri bu şekilde miymiş?",
  "tur": "veri",
  "olcum": "Alt-oturum doğruladı: Napolyon'un Mısır işgali (isg:'fransa', 1798-07-01→1801-10-09, kaynak:'kahire') Kahire, İskenderiye, Dimyat, Asyut, Süveyş, Sina güneyi, Reşîd noktalarında tanımlı — ekrandaki dört şeritli görünüm (delta, Kahire, Sina üçgeni, güney şerit=Asyut) bu 7 kayıtla birebir örtüşüyor. Not: Asvan'da fransız işgali kaydı yok, tarihen Desaix'in Yukarı Mısır seferi Asvan'a uzanır — küçük bir zenginleştirme adayı, hata değil.",
  "hukum": "zaten-dogru: veri doğru ve tutarlı. Küçük ek fikir (Asvan) H-0092 ile birlikte ayrıca değerlendirilebilir.",
  "kaynak": "data/yerlesimler*.js (isg:'fransa' kayıtları, kaynak:'kahire') — alt-oturum tarafından doğrudan doğrulandı"
 },
 {
  "no": "H-0048",
  "baslik": "Çaldıran Zaferi sonrası Aşkale/Erzurum/Kemah/Divriği yol üstü boyanmamış, Merend/Hoy/Maku/Nahcıvan/Ordubad da boyanmamış — Doğu Anadolu güzergahı tutarsız",
  "tur": "veri",
  "olcum": "Alt-oturumun madde madde doğrulaması: Aşkale/Erzurum/Kemah/Divriği'nin boyanmaması DOĞRU (d.f tarihleri sırasıyla 1518/1515/1516 — Çaldıran 1514'te henüz alınmamışlardı). Merend/Hoy/Nahçıvan/Ordubad'ın boyanmaması da DOĞRU (1514'te hâlâ safevi). Tebriz'in kendisi yalnız 9 gün (1514-09-06→09-15) boyalı — kısa süreli giriş, doğru. 🔴 AYRI VE GERÇEK BULGU: Doğubayazıt d:[{f:'1514-09-06',t:'1923-10-29'}] — Çaldıran'dan itibaren SÜREKLİ/KALICI Osmanlı gösteriliyor, ama 47 km yakınındaki Çaldıran'ın kendisi AYNI GÜN Safevî'ye dönüp 1639'a kadar öyle kalıyor. Bu iki komşu nokta arasında tutarsızlık var. (Bu, H-0057/madde-1'de de bağımsız olarak aynı alt-oturum tarafından bulundu — çapraz doğrulandı.)",
  "hukum": "zaten-dogru (Aşkale/Erzurum/Kemah/Divriği/Merend/Hoy/Nahçıvan/Ordubad için) + sirada (Doğubayazıt için): d: alanının 1514-1923 kalıcılığı şüpheli, Çaldıran'ın kendisiyle çelişiyor — TDV/akademik kaynakla Doğubayazıt'ın 1514 sonrası gerçek statüsü araştırılmalı (Safevî'ye geri mi döndü, ne zaman kalıcı Osmanlı oldu).",
  "kaynak": "data/yerlesimler.js (Aşkale/Erzurum/Kemah/Divriği/Merend/Hoy/Nahçıvan/Ordubad/Doğubayazıt/Çaldıran kayıtları) — alt-oturum tarafından doğrudan doğrulandı"
 },
 {
  "no": "H-0051",
  "baslik": "Aydınoğulları beyliği idamı maddesinde harita böyle; bir sonraki (Tâceddinoğulları ilhakı) maddesinde bir toprak kaybı görünüyor ama boş/yerleşimsiz bölge — hata mı?",
  "tur": "gerek-yok",
  "olcum": "Alt-oturum iki ekran görüntüsünü de inceledi: ikisi de 'Pasif kip' bandı taşıyor (harita kamerası kullanıcının bıraktığı yerde donmuş) ve gösterilen bölge Rumeli/Eflak sınırı (Rusçuk-Silistre-Niğbolu) — oysa ilgili olaylar (Sisam 1426, Niksar 1427) Anadolu'da. Algılanan 'toprak kaybı' kameranın alakasız bir yerde bırakılmasından kaynaklanıyor.",
  "hukum": "gerek-yok: veri/motor hatası değil, kamera pasif-kip artefaktı — ek iş gerekmiyor.",
  "kaynak": "H-0051-1.png, H-0051-2.png (alt-oturum tarafından açıldı, 'Pasif kip' bandı görüldü)"
 },
 {
  "no": "H-0053",
  "baslik": "Yavuz Sultan Selim Mısır'a girerken Sina/Akdeniz kıyısı güneyden mi geçildi, Süveyş Kahire'den önce mi alındı, Süveyş/Kusayr ne zaman ele geçti?",
  "tur": "olculecek",
  "olcum": "Alt-oturum buldu: Süveyş/Sina güneyi/Kusayr'ın hepsi d.f='1517-01-22' (Ridaniye/Kahire günü) — yani hepsi Kahire ile AYNI gün düşmüş gösteriliyor. Görsel (H-0053-2) kritik bir tutarsızlık gösteriyor: Kusayr (Kızıldeniz kıyısı, Yukarı Mısır) o gün Osmanlı boyalıyken, hemen batısındaki Nil vadisi (Luksor, Edfu) AYNI TARİHTE hâlâ Memlük — kıyı şeridi bir 'Osmanlı adası' gibi duruyor. Tumanbay'ın 13 Nisan 1517'ye kadar direndiği bilgisiyle (bilgi kartının kendi metni) Kusayr'ın Kahire ile aynı gün düşmüş olması şüpheli.",
  "hukum": "olculecek: NE ölçülecek — TDV `suveys` maddesi Yavuz dönemi için kesin gün vermiyor (yalnız 1560 sonrası kaptanlık bilgisi var, TANECİKLİK boşluğu). Kusayr/Süveyş'in gerçek düşüş tarihi için ikinci bir akademik kaynak gerekiyor.",
  "kaynak": "data/yerlesimler.js (Süveyş/Sina/Kusayr kayıtları) + H-0053-2.png — alt-oturum tarafından doğrudan doğrulandı"
 },
 {
  "no": "H-0056",
  "baslik": "30 alt-sorulu dev madde — Piri Reis Kitab-ı Bahriye + Mohaç sonrası Macaristan bölünmesi (Kanije/Sisak/Zagreb/Trencin/Fülek/Eğri/Satu Mare/Kösice/Nitra Avusturya mı, Budin/Erdel/Bosna/Peçuy/Estergon/Szigetvár enklav sorunları, Győr'ün statüsü)",
  "tur": "veri",
  "olcum": "Alt-oturum somut buldu: Kanije/Sisak/Zagreb/Fülek/Eğri/Satu Mare/Kassa'nın HEPSİ AYNI GÜN (1526-08-29) 'avusturya'ya geçiyor — bu TEK TİP ve tutarlı bir tasarım kararı, enklav/noktasızlık belirtisi YOK (kendi başına bir hata değil). AMA bu, benim BAYAT AVCISI turumdaki bulguyla (Uyvar/Nitra hâlâ 1281'den avusturya, pre-1526 macaristan dönemi EKSİK; Satu Mare 7/8 komşu noktası TDV'de yok denip yazılmamış) ÇELİŞMİYOR — ikisi FARKLI KATMANLAR: alt-oturumun bulduğu '1526-08-29 tutarlılığı' bu noktaların KENDİ 1526-sonrası dönemi için doğru, benim bulduğum ise 1526-ÖNCESİ (pre-Mohaç, macaristan) döneminin bu noktalarda hiç YAZILMAMIŞ olması (1281'den direkt avusturya gösteriyorlar, aradaki macaristan dönemi yok). İkisi bir arada: 1526 SONRASI doğru, 1526 ÖNCESİ eksik.",
  "hukum": "zaten-dogru (1526 sonrası geçiş günleri için, alt-oturum doğruladı) + tekrar (1526 öncesi macaristan dönemi eksikliği için — BULGU-BAYAT-TARAMA.md grup-G/H'de zaten var, uygulama bekliyor). Kalan ~13 alt-soru (Piri Reis kitabı, Eğri güneydoğusu enklavı, Budin/himaye şeridi tasarımı, Peçuy/Estergon/Solnok/Zigetvar fetih sırası, Győr'ün statüsü) bu turda incelenmedi — kapsam çok büyük, ayrı H-numaralarına bölünmeli.",
  "kaynak": "denetim/BULGU-BAYAT-TARAMA.md (grup-G, grup-H) · data/yerlesimler.js (1526-08-29 toplu kırılma, alt-oturum doğrulaması)"
 },
 {
  "no": "H-0057",
  "baslik": "30 alt-sorulu dev madde — Kahire'de Abbasi hilafetinin sonu ile başlayıp Ferhad Paşa Antlaşması'na kadar TÜM Osmanlı-Safevî cephesi (Doğu Bayezid, Kars, Tebriz, Bağdat, Van, Ardahan/Çıldır, Kutaisi, Şirvan, Nahcıvan, Karabağ/Gence, ve Ferhad Paşa sonrası 16 şehirlik 'ortada kalan' bölge)",
  "tur": "veri",
  "olcum": "Alt-oturum + benim taramamın birleşimi: (1) Doğubayazıt'ın Tebriz kaybından sonra durumu DEĞİŞMİYOR (kalıcı 1514-1923 Osmanlı) — H-0048 ile ÇAPRAZ DOĞRULANDI, muhtemel hata. (28-29) 🔴 Ferhad Paşa Antlaşması (1590) batı İran kazanımları İÇERİK BOŞLUĞU doğrulandı: Şerur/Urmiye/Mahabad/Serdeşt/Sakkız/Ahvaz'ın HİÇBİRİNDE 1590 civarı Osmanlı `d:` dönemi yok (hepsi kesintisiz safevi); Abadan/Dizful/Şuster veride hiç yok. `data/yerlesimler_ek_ferhadpasa.js` yalnız Van eyaletinin doğu sancaklarını (Bargiri/Hoşap/Kotur/Çölemerik) kapsıyor — bu, benim bugünkü BULGU-BAYAT-TARAMA.md (grup-G, H-0027/H-0028) ve data/yer_yama_iran.js'teki 'Culfa/Merend/Meraga KAYITLI BORÇ' bulgusuyla BİREBİR örtüşüyor. (30) Kutaisi s:'gurcistan' 1281-1810 kesintisiz → hem alt-oturum hem ben bağımsız doğruladık, imereti/kartli-kaheti ayrımı yok — 'yerlesimler_kafkas_duzeltme.js bağlanmadı' bulgusuyla örtüşüyor.",
  "hukum": "tekrar (madde 1,19,28,29,30 için): aynı kökler BULGU-BAYAT-TARAMA.md'de VE data/yer_yama_iran.js'te zaten var, İKİ AYRI YÖNTEMLE (alt-oturum görsel taraması + benim node sorgum) bağımsız doğrulandı — tekrar araştırmaya gerek yok, uygulama bekliyor. sirada (kalan ~25 alt-soru için): madde KAPSAMI parçalanmalı — Halepçe enklavı, Van fethi sınırları, Nahcıvan/Ordubad enklavı gibi her biri ayrı bir H-numarası ve ayrı bir TDV taraması gerektiriyor.",
  "kaynak": "denetim/BULGU-BAYAT-TARAMA.md (grup-E, grup-G, grup-I) · data/yer_yama_iran.js · data/yerlesimler.js (Doğubayazıt/Kutaisi/Şerur/Urmiye/Mahabad vb.) — çift yöntemle doğrulandı"
 },
 {
  "no": "H-0059",
  "baslik": "Batı Anadolu beyliklerinin yeniden ilhakı maddesinde metin 'Aydın, Menteşe, Teke' diyor ama Teke daha önce alınmıştı; haritada Germiyan'ın ilhakı iki aşamalı görünüyor",
  "tur": "kronoloji",
  "olcum": "Alt-oturum kök nedeni buldu: `data/olaylar_ek.js:45` (t:'1425-06-01') başlığı 'Batı Anadolu beyliklerinin yeniden ilhakı: Aydın, Menteşe, Teke' ve yer: alanında 'Antalya (Teke/Hamîd)' geçiyor — ama Antalya/Teke zaten 1423-01-01'de AYRI bir maddeyle ('Tekeoğulları'nın kesin tasfiyesi: Antalya'nın alınışı') kesin alınmıştı (Antalya d.f=1423-01-01, teke dönemi orada bitiyor). Yani 1425 maddesinin metni YANLIŞLIKLA Teke'yi tekrar anıyor. Germiyan'ın 'iki aşamalı ilhak' görünümü ise veri değil — Kütahya/Tavşanlı/Emet/Afyon'un tarihi doğru (s:germiyan 1429-02-01'e kadar), muhtemelen render/opaklık algısı.",
  "hukum": "sirada: BAŞKA İŞE BAĞLI (KRONOLOJİ İÇERİK) — `data/olaylar_ek.js:45`'in başlığından ve yer: alanından 'Teke'/'Antalya (Teke/Hamîd)' ifadesi çıkarılmalı → 'Batı Anadolu beyliklerinin yeniden ilhakı: Aydın, Menteşe'. Germiyan görünümü için ayrı, küçük bir olculecek: canlı haritada render sırası doğrulanmalı (ARAYÜZ oturumu).",
  "kaynak": "data/olaylar_ek.js:45 · data/yerlesimler.js (Antalya, Kütahya) — alt-oturum tarafından doğrudan doğrulandı"
 },
 {
  "no": "H-0060",
  "baslik": "Orhan Gazi-Teodora evliliği sonrası Ceneviz kapitülasyonu maddesinde Mersin ne alaka Osmanlı'ya katılmış görünüyor?",
  "tur": "veri",
  "olcum": "🔴 KESİN VERİ HATASI, üç bağımsız ölçümle doğrulandı (BAYAT AVCISI turum bugün erken saatte, benim bu turki node sorgum, VE bu alt-oturumun bağımsız taraması). `data/yerlesimler_ek27.js` Mersin kaydı: d:[{f:'1352-01-01',t:'1918-10-30'}] — 1352'de DOĞRUDAN Osmanlı, 164 yıl erken. Komşuları Tarsus/Adana aynı 1352'de 'kilikya-ermeni'→'ramazanoglu' geçişi yapıp ancak Mercidabık'ta (1516-08-24) Osmanlı oluyor — Mersin'in kaydında bu ara 'ramazanoglu' dönemi eksik, muhtemelen kopyala-yapıştır hatası.",
  "hukum": "cozuldu-oneri: ad='Mersin' eşleştir. s: dizisine {f:'1352-01-01',t:'1516-08-24',d:'ramazanoglu'} EKLE (Tarsus/Adana ile birebir aynı desen); d: dizisinin başlangıcını '1352-01-01' → '1516-08-24' olarak DEĞİŞTİR. Üç bağımsız ölçüm aynı sonuca vardığı için güven YÜKSEK.",
  "kaynak": "denetim/BULGU-BAYAT-TARAMA.md (grup-F1) · data/yerlesimler_ek27.js 'Mersin' + 'Tarsus'/'Adana' (komşu desen) — üç bağımsız doğrulama"
 },
 // ===================== S3 grubu (H-0062,0065,0067,0068,0069,0070,0074,0076) =====================
 {
  "no": "H-0062",
  "baslik": "Bu maddenin Osmanlı açısından önemi tam olarak ne — dünya olayı diye mi, Osmanlı'yı ilgilendirdiği için mi kronolojide?",
  "tur": "kronoloji",
  "olcum": "Bu VERİ (yerleşim) sorunu değil — kronoloji maddesinin GEREKÇELENDİRİLMESİ/bağlam eksikliği sorusu (madde neden var, hangi kapsamda). KRONOLOJİ İÇERİK oturumunun karar/metin işi.",
  "hukum": "sirada: BAŞKA İŞE BAĞLI — KRONOLOJİ İÇERİK oturumu maddenin gerekçesini (Osmanlı'yı niçin ilgilendirdiğini) metne eklemeli ya da kapsam dışıysa kaldırmayı değerlendirmeli. Benim dosyalarımın kapsamı dışı.",
  "kaynak": "bulunamadı — içerik/editoryal soru, veri sorunu değil"
 },
 {
  "no": "H-0065",
  "baslik": "Bu maddede haritada bir değişiklik yaşanmıyor — zaten Osmanlı toprağı gibi görünürken durum aynen devam ediyor",
  "tur": "kronoloji",
  "olcum": "Bu da VERİ sorunu değil — madde harita üzerinde bir kırılma günü doğurmuyorsa (Değişmez 2'nin 'her kırılmanın maddesi olmalı' kuralının TERSİ: her maddenin bir kırılması olması ZORUNLU değil, bazı maddeler saf anlatım/olay maddesidir) bu normal olabilir. Ama kullanıcı 'gereksiz mi' diye soruyor — bu editoryal bir değerlendirme.",
  "hukum": "sirada: BAŞKA İŞE BAĞLI — KRONOLOJİ İÇERİK oturumu maddenin haritasal bir karşılığı olup olmadığını, olmuyorsa maddenin neden var olduğunu değerlendirmeli.",
  "kaynak": "bulunamadı — içerik/editoryal soru"
 },
 {
  "no": "H-0067",
  "baslik": "Taiz'in kaybı haritada pek belli olmuyor, nasıl gösterilmeli?",
  "tur": "senin-kararin",
  "olcum": "Taiz'in kendi kaydı VAR ve doğru görünüyor: s:[...1547'ye kadar yemen, 1547-1629 d: osmanlı, 1629-1872 yemen (Kasımî İmamlığı'nın Osmanlı'yı kovması), 1872-1918 d: osmanlı yeniden, 1918 sonrası yemen]. Yani 'kayıp' iki kez oluyor (1629 ve 1918) ve veri bunu doğru tutuyor. Kullanıcının sorusu VERİ doğruluğu değil, GÖRSEL SUNUM tercihi — küçük bir toprak parçasının kaybının haritada nasıl daha belirgin gösterileceği (renk vurgusu, geçici animasyon, vb.) bir tasarım/zevk meselesi.",
  "hukum": "senin-kararin: veri doğru, bu bir GÖSTERİM TERCİHİ sorusu. Şıklar: (a) küçük toprak kayıplarına özel bir görsel vurgu (yanıp sönme, kısa süreli farklı renk) eklensin, (b) olduğu gibi bırakılsın (harita zaten doğru, yalnız küçük ölçekte az fark ediliyor). Önerim: (a) — ama bu Emre'nin zevkine bağlı, ARAYÜZ oturumunun işi.",
  "kaynak": "data/yerlesimler.js 'Taiz' kaydı (doğrulandı, veri doğru)"
 },
 {
  "no": "H-0068",
  "baslik": "Satu Mare arada kalmış — Orta Macar olarak Tökeli İmre'ye mi bağlı, yoksa Osmanlı ya da Avusturya'ya mı?",
  "tur": "veri",
  "olcum": "Bu, BAYAT AVCISI turumda BAĞIMSIZ olarak zaten bulunmuştu (`denetim/BULGU-BAYAT-TARAMA.md`, grup-H/parti-emrelic-0027/H-0004): 'Debrecen bağlandı (commit cb24187) ama istenen 8 noktadan yalnız 1'i — kalan 7'si (Nagybánya, Kálló, Ecsed, Ónod, Szendrő, Huszt, Máramarossziget) TDV'de yok denip yazılmadı... Szatmár (Satu Mare) hâlâ avusturya enklavı olarak duruyor.' İKİ PAKETTEN (0027 ve 0035) BAĞIMSIZ bildirilen AYNI kusur.",
  "hukum": "tekrar: aynı kök BULGU-BAYAT-TARAMA.md'de (grup-H) zaten var, tekrar araştırmaya gerek yok. TDV'nin sessiz kaldığı taneciklik boşluğu — Orta Macar/Tökeli İmre bölgesinin bu köşesi için ek akademik kaynak gerekiyor, o iş zaten sırada.",
  "kaynak": "denetim/BULGU-BAYAT-TARAMA.md (grup-H, parti-emrelic-0027/H-0004)"
 },
 {
  "no": "H-0069",
  "baslik": "1) Bağdat kaybedilirken bir bölge enklav görünüyor, Bağdat ile birlikte elden çıktı mı? 2) Ammare/Küme/Basra Bağdat'ın kaybına dahil değil mi? 3) Resimdeki tüm şehirler Bağdat'a dahil mi?",
  "tur": "veri",
  "olcum": "Kısmen kontrol edildi. 'Ammare' adıyla (ve düz 'Amare' ile) kayıt YOK bu turda bulunamadı — muhtemelen Türkçe şapkalı yazımla ('Amâre') aranmalı (Kythira/Fâv/Abâdân/Taganrog ile aynı tuzak sınıfı), zaman kısıtından bu turda doğrulanamadı. Basra'nın kendi kaydı (1546-1776 vassal, 1776-1779 zend, 1779-1914 doğrudan) ayrı ve Bağdat'ın kaybından (muhtemelen 1623 Safevî istilası ya da 1917 İngiliz işgali, görselden tarih belirsiz) BAĞIMSIZ görünüyor — Basra kendi ritmiyle değişiyor.",
  "hukum": "olculecek: NE ölçülecek — (a) 'Amâre'nin doğru yazımla kaydı bulunup Bağdat'ın kaybıyla eşzamanlı olup olmadığı, (b) görseldeki hangi tarihin kastedildiği (1623 Safevî ya da 1917 İngiliz) netleştirilip o tarihte Basra/Amâre/çevre şehirlerin durumu tek tek listelenmeli.",
  "kaynak": "data/yerlesimler.js 'Basra' kaydı — 'Amâre' bu turda bulunamadı (Türkçe yazım denenmeli)"
 },
 {
  "no": "H-0070",
  "baslik": "2. Viyana Kuşatması sonrası Solnok kaybı diğer şehirler gibi gösterilmiyor — Osmanlı kırmızısı ile Avusturya rengi üst üste binmiş, Voronoi alanı arka planda görünüyor",
  "tur": "veri",
  "olcum": "Bu, TARALI ALAN KÖK ailesinin bir vakası olabilir — bugün (27 Ağustos 02:49, commit e53c86a) düzeltilen 'antlaşma devri' (taralı alan) mekanizması tam olarak bu tür 'iki rengin üst üste binmesi' görünümlerini üretiyordu (`arac/uret_devirler.py`'nin `coz()` fonksiyonu PARCA_HALKA katmanını atlıyordu). Solnok'un kendi kaydına bakılmadı bu turda ama görsel açıklama (arka planda Voronoi alanı, önde kırmızı) TAM OLARAK bu kök nedenin tarif ettiği belirti.",
  "hukum": "olculecek: NE ölçülecek — Solnok'un kaybı gününde (2. Viyana sonrası, ~1685) `data/devirler.js`'in düzeltilmiş (e53c86a sonrası) hâlinin bu görünümü giderip gidermediği; giderilmediyse Solnok'a özel ayrı bir kök olabilir.",
  "kaynak": "commit e53c86a (TARALI ALAN KÖK düzeltmesi) — olası aynı aile, doğrudan Solnok kaydı bu turda incelenmedi"
 },
 {
  "no": "H-0074",
  "baslik": "Hemedan barışı sonrasında, tıpkı Ferhad Paşa Antlaşması'nda olduğu gibi, ortada kocaman bir alan kimin olduğu belli değil — muhtemelen Osmanlı ama yeterli kayıt yok",
  "tur": "veri",
  "olcum": "Bu, AYNI İran koridoru ailesi — Ferhad Paşa Antlaşması (1590) sonrası boşluk BULGU-BAYAT-TARAMA.md'de (grup-G, H-0027/H-0028) ve `data/yer_yama_iran.js`te zaten teşhis edilmiş. Hemedan Antlaşması (1727, Ahmed Paşa Antlaşması ile aynı aile ya da öncesi) için AYRI bir kontrol bu turda yapılmadı ama kullanıcının kendi tespiti ('tıpkı Ferhad Paşa'da olduğu gibi') doğru bir örüntü tanıma — aynı kök muhtemelen burada da geçerli.",
  "hukum": "tekrar (muhtemel): Ferhad Paşa ailesiyle aynı kök (Culfa/Merend/Meraga/Miyandoab KAYITLI BORÇ, BULGU-BAYAT-TARAMA.md grup-G) — Hemedan Antlaşması'nın kendi coğrafyası (muhtemelen Kirmanşah/Hemedan/Luristan çevresi) ayrıca doğrulanmalı, tam örtüşüp örtüşmediği bu turda kontrol edilmedi.",
  "kaynak": "denetim/BULGU-BAYAT-TARAMA.md (grup-G) · data/yer_yama_iran.js — örüntü benzerliği, Hemedan'a özel doğrulama yapılmadı"
 },
 {
  "no": "H-0076",
  "baslik": "Ahmed Paşa Antlaşması ile batı İran'ın iadesi — taralı alanların Mısır'daki topraklarla ne alakası var? Derbent Rusya'da değil miydi, neden görünüyor? Şirvan/Şamahı/Ereş/Kabala taranmamış (verilmemiş gibi), Gümrü/Çaldıran/Başkale taranmış — tutarsızlık var",
  "tur": "veri",
  "olcum": "Kısmen doğrulandı: Ereş ve Kabala'nın İKİSİ DE d:{f:'1725-09-12',t:'1735-06-19'} (doğrudan Osmanlı) taşıyor — yani 1727 Ahmed Paşa Antlaşması sırasında hâlâ OSMANLI'da kalıyorlar (t:1735'e kadar), kullanıcının 'buralar verilmemiş gibi taranmamış' gözlemiyle TUTARLI. Derbend ise s: dizisinde 1722-08-23'ten 1735-03-10'a kadar 'rusya' — yani 1727'de GERÇEKTEN Rusya'ya ait (kullanıcının 'orası Rusya'da değil miydi' sorusu VERİYE GÖRE DOĞRU). Eğer görselde Derbend 'taralı' (Ahmed Paşa Antlaşması'nın bir parçası) görünüyorsa bu YANLIŞ olabilir — Derbend o antlaşmanın konusu değil, ayrı bir Rus toprağı. Gümrü/Çaldıran/Başkale bu turda kontrol edilemedi (Bash altyapı kesintisi). 'Mısır'daki topraklarla ne alakası var' sorusu muhtemelen TARALI ALAN KÖK ailesinin (bugün düzelen, e53c86a) bir vakası — alakasız coğrafyaların aynı taralı desende görünmesi tam o kusurun belirtisiydi.",
  "hukum": "sirada: Derbend'in taralı alana yanlışlıkla dahil edilmesi ihtimali GÜÇLÜ (veri onu Rusya gösteriyor, antlaşmanın konusu değil) — bu TARALI ALAN KÖK'ün (e53c86a, bugün düzeldi ama koşuya henüz girmedi) kapsamına girip girmediği doğrulanmalı. Gümrü/Çaldıran/Başkale kontrolü NE ölçülecek: bu üç noktanın 1727 civarı durumu (Bash kesintisi yüzünden bu turda tamamlanamadı).",
  "kaynak": "data/yerlesimler.js 'Ereş','Kabala','Derbend' kayıtları (doğrudan sorgulandı) · commit e53c86a (TARALI ALAN KÖK)"
 },
 // ===================== S4 grubu (H-0077,0079,0080,0081,0083,0084,0086,0096) =====================
 {
  "no": "H-0077",
  "baslik": "Ruslar Çehrin üzerinden mi gelip Özi'yi aldılar yoksa Kırım bozkırından mı geldiler — geldikleri güzergah Rus toprağı görünmüyor",
  "tur": "olculecek",
  "olcum": "Bu, koridor/güzergah sorusu — H-0080 (Hotin) ile AYNI AİLE (Rusların Karadeniz kuzeyine hangi güzergahtan ulaştığı, ara bölgenin sahipliğinin güzergahla tutarlı olup olmadığı). Çehrin (Çigirin) 1699-1793 arası 'lehistan' (Leh-Litvanya), yani Rusların Çehrin ÜZERİNDEN gelmiş olması coğrafi olarak mümkün değil (Çehrin o dönemde Rus değil Leh toprağı) — bu ihtimali ZAYIFLATIYOR. Kırım bozkırı (Yedisan bozkırı vb.) 1792'ye kadar 'kirim' — yani Özi'nin 1737-38 ve 1788-92 kayıplarında Rusların 'Kırım bozkırından' gelmiş olması da tam doğru değil (bozkır henüz Rus değildi, üzerinden GEÇİLEBİLİRDİ ama toprak olarak Rus değildi). Bu bir ASKERİ HAREKAT/güzergah sorusu, sahiplik verisi zaten muhtemelen doğru — güzergahın GÖRSEL gösterimi (ok/güzergah çizgisi) ayrı bir konu.",
  "hukum": "olculecek: NE ölçülecek — 1737 ve 1788 Rus seferlerinin gerçek kara/nehir güzergahı (Dinyeper üzerinden mi, Kiev-Poltava hattından mı) TDV/akademik kaynaktan doğrulanıp, isteniyorsa güzergah çizgisi (ARAYÜZ) eklenmeli.",
  "kaynak": "data/yerlesimler.js 'Çehrin (Çigirin)', 'Yedisan bozkırı' kayıtları"
 },
 {
  "no": "H-0079",
  "baslik": "Hail şehri Vehhabi-Suudi hareketine dahil değil miymiş? Nefud çölünde bu bölge hangi gerekçeyle boyanmış — yerleşim yok, hiçbir şey yok",
  "tur": "veri",
  "olcum": "Bugünkü PAKET-0036 turumda (parti-emrelic-0036/H-0012) zaten bulundu: Hail'in kendi kaydı (`data/yerlesimler.js:941`) s:[{f:'1836-01-01',...,d:'sammar'}] ile başlıyor — yani Hail zaten Şammar (Cebel Şammar Emirliği, Reşîdî hanedanı) kimliğiyle kayıtlı. Nefud çölünün çevresi (nokta yoğunluğu) bu turda tekrar kontrol edilmedi ama bu, H-0001/H-0011 ile AYNI AİLE (§2 emilme, Arabistan/Nefud çölü nokta seyrekliği) olabilir.",
  "hukum": "tekrar (Hail'in kendi kimliği için, PAKET-0036 turumda zaten doğrulandı — Şammar zaten kayıtlı) + olculecek (Nefud çölü çevresindeki boyamanın nokta yoğunluğuna dayanıp dayanmadığı için — H-0001/H-0011 ile aynı Sahra/çöl emilme ailesi, ayrı bir nokta yoğunluğu incelemesi gerektiriyor).",
  "kaynak": "denetim/BULGU-PAKET-0036.md (H-0012) · data/yerlesimler.js 'Hail' kaydı"
 },
 {
  "no": "H-0080",
  "baslik": "Hotin Ruslara kaybedilmiş — Ruslar nereden geldi? Boğdan'dan mı, Lehistan'dan mı, Kırım Hanlığı bozkırından mı?",
  "tur": "olculecek",
  "olcum": "H-0035 ile AYNI KONU (bu grupta zaten işlendi, bkz. yukarıda 'Hotin' kaydı). Ek olarak: 1769-1774 Rus-Osmanlı Savaşı'nda Rus ordusunun asıl ilerleyişi tarihen KUZEYDEN (Podolya/Leh toprakları üzerinden, Rumyantsev'in ordusu) idi — bu, Çehrin'in o dönemde 'lehistan' olmasıyla (Rusya'nın müttefik/geçiş bölgesi) tutarlı bir ihtimal. Kesin güzergah bu turda TDV ile doğrulanmadı.",
  "hukum": "tekrar/olculecek: H-0035 ile birleştirilmeli (aynı Hotin kaydı). NE ölçülecek: 1769 seferinin gerçek güzergahı (muhtemelen Podolya/Leh toprakları üzerinden) akademik kaynaktan.",
  "kaynak": "data/yerlesimler.js 'Hotin', 'Çehrin (Çigirin)' kayıtları — H-0035 ile aynı"
 },
 {
  "no": "H-0081",
  "baslik": "Çeşme Baskını (1770) için ne bir işaretleme var ne Rus filosunun geçtiği kesikli çizgi",
  "tur": "arayüz",
  "olcum": "Bu bir ÖZELLİK TALEBİ — Rus donanmasının Baltık'tan Akdeniz'e (Çeşme'ye) uzun deniz seferinin görsel gösterimi. Benzer bir talep (Rus donanmasının Büyükdere'ye gelişi, 1833) bugünkü PAKET-0036 turumda zaten 'zaten-dogru, tur:\"deniz\" + kesikli ⚓ glifi zaten var' bulunmuştu (H-0010) — yani MEKANİZMA zaten var, yalnız Çeşme Baskını'nın KENDİ kaydına bu tur/glif eklenmemiş olabilir.",
  "hukum": "sirada: BAŞKA İŞE BAĞLI (KRONOLOJİ İÇERİK/ARAYÜZ) — Çeşme Baskını'nın kronoloji maddesine `tur:\"deniz\"` alanı eklenmeli (mekanizma zaten var, H-0010/PAKET-0036 emsaliyle). Benim yer_yama dosyalarımın kapsamı dışı (bu bir olaylar_ek*.js değişikliği).",
  "kaynak": "denetim/BULGU-PAKET-0036.md (H-0010, aynı mekanizma emsali)"
 },
 {
  "no": "H-0083",
  "baslik": "İran Basra'yı ele geçirmiş — Fâv kenti Basra'ya ait değil mi? Basra'yı ele geçiren Fâv'ı da ele geçirmiş sayılmaz mı?",
  "tur": "veri",
  "olcum": "S1'de (H-0037) zaten işlendi — aynı kayıtlar: Basra'nın 1776-1779 Zend (İran) işgali VAR, Fâv'ın (Türkçe şapkalı yazım) kaydı ise bu dönemde KESİNTİSİZ Osmanlı (d:1546-1914). Kullanıcının mantığı ('Basra'yı alan Fâv'ı da almış sayılmaz mı') coğrafi olarak TARTIŞMALI — Fâv, Basra'dan ayrı, Şattülarap ağzında bağımsız bir kıyı mevkii, Zend'in 1776 kuşatması kara yoluyla Basra ŞEHRİNE yönelikti; deniz/kıyı mevkiini otomatik olarak kapsaması gerekmez ama bu KESİN bir kaynakla doğrulanmadı.",
  "hukum": "tekrar: H-0037 ile aynı kayıt/aynı soru, bkz. orada. olculecek: 1776-79 Zend kuşatmasının Fâv'a gerçekten ulaşıp ulaşmadığı akademik kaynakla doğrulanmalı.",
  "kaynak": "data/yerlesimler.js 'Basra','Fâv' — H-0037 ile aynı"
 },
 {
  "no": "H-0084",
  "baslik": "Basra Osmanlı tarafından geri alınmış ama Basra'yı alan Abadan'ı da almış olmuyor mu? Abadan ayrı müstakil İran şehri olarak mı kaldı?",
  "tur": "veri",
  "olcum": "S1'de (H-0038) zaten işlendi — aynı kayıt: Abâdân'ın (Türkçe şapkalı yazım) `d:[]` (hiç Osmanlı dönemi yok), `s:` zinciri baştan sona İran tarafında (1281'den 1923'e). Kullanıcının varsayımının TERSİNE, veri Abadan'ın HİÇBİR ZAMAN Osmanlı olmadığını (Basra'nın Osmanlı-İran arasında el değiştirmesinden BAĞIMSIZ olarak) gösteriyor — bu, Şattülarap sınır anlaşmazlığının (Abadan'ın genelde İran tarafında sayılması) tarihen bilinen örüntüsüyle tutarlı.",
  "hukum": "tekrar: H-0038 ile aynı kayıt/aynı soru, bkz. orada. zaten-dogru (veri: Abadan hep İran, Basra'nın el değiştirmesinden bağımsız).",
  "kaynak": "data/yerlesimler.js 'Abâdân' — H-0038 ile aynı"
 },
 {
  "no": "H-0086",
  "baslik": "1781 itibariyle bütün Karadeniz kuzeyi bölgesini teyit edelim: Kırım Hanlığı, güneyindeki şehirler, Anapa, Kerç/Taman (Rusya?), Özi (Osmanlı?), Yedisan bozkırı (boş?), Çehrin (Lehistan?), Zaporojye Seçi (Rusya?), Azak (Rusya), Kuban/Yekaterinodar (Kırım bozkırı?)",
  "tur": "veri",
  "olcum": "🔴 KAPSAM ÇOK GENİŞ ama çoğu doğrudan sorgulanabildi ve TUTARLI çıktı: Anapa 1781'de tam o gün kirim→osmanlı doğrudan geçişinde (d:1781-01-01 başlıyor) — doğru. Kerç VE Taman ikisi de 1774'ten beri (Küçük Kaynarca) zaten Rusya — kullanıcının gözlemiyle TUTARLI. Çehrin (Çigirin) 1781'de 'lehistan' — kullanıcının gözlemiyle TUTARLI. Yedisan bozkırı 1781'de VERİDE 'kirim' sahipli görünüyor (s: kaydı net) — kullanıcının 'kimseye bağlı görünmüyor, boş bozkır gibi' izlenimi VERİYLE ÇELİŞİYOR; bu bir GÖRSEL/RENDER sorunu olabilir (bölge tipi 'bolge' olan noktaların rengi soluk/farklı render ediliyor olabilir). Azak zaten Rusya (1774'ten). Kuban/Yekaterinodar/Zaporojye Seçi bu turda ('Kuban','Yekaterinodar','Zaporojye' düz aramayla) BULUNAMADI — farklı yazımla aranmalı (Yekaterinodar zaten 1793'te kurulduğu için 1781'de hiç var olmamalı, bu NORMAL).",
  "hukum": "zaten-dogru (Anapa/Kerç/Taman/Çehrin/Azak için) + olculecek (Yedisan bozkırı'nın GÖRSEL olarak 'boş' görünmesi — veri kirim diyor ama render farklı gösteriyor olabilir, ARAYÜZ/motor incelemesi gerekiyor) + olculecek (Kuban/Zaporojye Seçi doğru adla bulunup kontrol edilmeli, Yekaterinodar 1781'de zaten var olmaması normal — bu bir hata değil).",
  "kaynak": "data/yerlesimler.js 'Anapa','Kerç','Taman','Çehrin (Çigirin)','Yedisan bozkırı' — node sorgusu"
 },
 {
  "no": "H-0096",
  "baslik": "Sohum Ruslara kaybedilirken Taman kalesi ve Çerkezistan Rusların elinde değil miydi? Teyit edelim",
  "tur": "veri",
  "olcum": "Sohum'un kendi kaydı: s:{f:'1281-01-01',t:'1578-08-09',d:'gurcistan'}, sonra d: 1578-1810 Osmanlı, sonra 1810-1923 rusya — yani Sohum 1810'da Rusya'ya geçiyor. Taman ise ZATEN 1774'ten beri (Küçük Kaynarca) Rusya — yani Sohum kaybedildiğinde (1810) Taman ÇOKTAN 36 yıldır Rus toprağıydı, kullanıcının gözlemiyle TUTARLI. Çerkezistan (Adığe bölgeleri) için ayrı bir yerleşim kaydı bu turda kontrol edilmedi (dinasti/bölge kimliği olarak farklı noktalarda geçiyor olabilir, Kabartay gibi).",
  "hukum": "zaten-dogru (Taman için, veri tutarlı) + olculecek (Çerkezistan'ın 1810 civarı genel durumu için — hangi noktaların hangi tarihte Rusya'ya geçtiği ayrıca taranmalı).",
  "kaynak": "data/yerlesimler.js 'Sohum','Taman' kayıtları (node sorgusu)"
 },
 {
  "no": "H-0037",
  "baslik": "Basra İran (Zend) işgaline uğramış (1776-1779) ama Fâv Osmanlı'da kalmayı başarmış mı?",
  "tur": "veri",
  "olcum": "Basra'nın kendi kaydı s:{f:'1776-04-16',t:'1779-04-01',d:'zend'} taşıyor (Kerim Han Zend'in Basra kuşatması/işgali). Fâv'ın (adı Türkçe şapkalı yazılıyor, düz 'Fav' aramak BULAMAZ — Kythira/Taganrog ile aynı Türkçe-ad tuzağı) kaydı ise bu dönemde KESİNTİSİZ Osmanlı: d:{f:'1546-01-01',t:'1914-11-22'} — Zend arası YOK. Bu, kullanıcının sorusuna göre TUTARLI bir cevap: Fâv gerçekten Zend işgali dışında kalmış görünüyor (coğrafi olarak mantıklı — Fâv, Şattülarap ağzında ayrı bir kıyı mevkii, Zend kuşatması kara yoluyla Basra şehrine yönelikti). Ama bu, kaynaklı bir doğrulama değil, VERİNİN KENDİ TUTARLILIĞI.",
  "hukum": "olculecek: veri içsel olarak tutarlı (Fâv'ın Zend'siz kalması coğrafi olarak savunulabilir) ama Fâv'a ÖZEL bir akademik kaynakla (1776-79 Basra Kuşatması'nın Fâv'a ulaşıp ulaşmadığı) doğrulanmadı — NE ölçülecek: Kerim Han Zend'in Basra seferi üzerine akademik kaynak (örn. J. Perry'nin Karim Khan Zand çalışması).",
  "kaynak": "data/yerlesimler.js 'Basra' + 'Fâv' kayıtları (node sorgusu, Türkçe ad düzeltmesiyle bulundu)"
 },
 {
  "no": "H-0038",
  "baslik": "Basra geri alınmış ama Abadan İran şehri mi Osmanlı şehri mi? Kronolojisi çıkarılsın",
  "tur": "veri+kronoloji",
  "olcum": "'Abâdân' kaydı (Türkçe ad, düz 'Abadan' BULAMAZ) VERİ TARAFINDA zaten net: `d:[]` (hiç Osmanlı doğrudan dönemi yok), `s:` zinciri BAŞTAN SONA İran tarafında (ilhanli→lur-i-buzurg→timurlu→karakoyunlu→akkoyunlu→safevi→afsar→zend→kacar, 1281'den 1923'e kesintisiz Osmanlı DIŞI). Bu, Abadan'ın tarihsel olarak hep Şattülarap'ın İran yakasında sayılmasıyla (1847 Erzurum ve sonrası sınır anlaşmalarının genel örüntüsü) tutarlı. Veri tarafı DOĞRU görünüyor — kullanıcının asıl isteği ('kronolojisini çıkar, hangi tarihte kime geçmiş') bir KRONOLOJİ MADDESİ talebi, veri düzeltmesi değil.",
  "hukum": "zaten-dogru (veri: Abadan hiçbir zaman Osmanlı olmamış, tutarlı) + sirada: BAŞKA İŞE BAĞLI (KRONOLOJİ İÇERİK oturumu Abadan'ın İran'a ait kalışını anlatan bir madde yazabilir, iş veri tarafında değil).",
  "kaynak": "data/yerlesimler.js 'Abâdân' kaydı (node sorgusu, Türkçe ad düzeltmesiyle bulundu)"
 },
 {
  "no": "EK-1a (ORHANGAZİ M-1364)",
  "baslik": "Çaçak: 1689-1690 Avusturya dönemi hiç yok — Niş/Vidin'in arkasında Osmanlı görünüyor",
  "tur": "veri",
  "olcum": "Bugün doğrulandı: data/yerlesimler.js Çaçak kaydı s: dizisinde 1459-1717 arası kesintisiz 'd:' (Osmanlı) — 1689-1690 boşluğu yok. Niş ve Vidin'in kendi kayıtları zaten s:{f:'1689-09-24',t:'1690-09-09',d:'avusturya'} taşıyor (Niş Savaşı ve geri alınışı, ikisi de kronolojide maddeli — Değişmez 2 açık değil). KAYNAK ARANDI: Wikipedia 'Habsburg-occupied Serbia (1686-1691)' + Kragujevac'a özel bir tarih sayfası (gtokg.org.rs), TDV `sirbistan`/`belgrad` maddeleri bu taneciklikte (ilçe düzeyinde) konuşmuyor (yalnız Belgrad'ın 1688 kaybı/1690 geri alınışını anlatıyor). Genel kaynaklar 'Habsburg kontrolündeki alan Şumadija ve Raška dahil bugünkü Sırbistan'ın büyük kısmını kapsıyordu' diyor — Çaçak bu bölgede ama İSİMLE anılmıyor.",
  "hukum": "olculecek: Çaçak'ın 1689-1690'da bizzat Avusturya'ya geçtiğine dair İSİMLE kaynak bulunamadı (yalnız bölgesel/genel kanıt var). NE ölçülecek: Great Turkish War / Habsburg-occupied Serbia üzerine hakemli bir akademik kaynak (örn. Charles Ingrao'nun çalışmaları ya da Cambridge History of the Ottoman Empire) ile Çaçak'ın adı geçen bir doğrulama. ⚠️ ORHANGAZİ'ye BİLDİRİLDİ (tahta M-1364 yanıtı) — TDV/tam-akademik doğrulama bu turda YAPILAMADI, kaynak 'hayır' demedi ama 'evet' de tam demiyor.",
  "kaynak": "Wikipedia 'Habsburg-occupied Serbia (1686-1691)' (yalnız yönlendirme, tek dayanak değil) — bulunamadı (TDV bu taneciklikte konuşmuyor)"
 },
 {
  "no": "EK-1b (ORHANGAZİ M-1364)",
  "baslik": "Kragujevac: 1689-1690 Avusturya dönemi hiç yok — Çaçak ile aynı kalem",
  "tur": "veri",
  "olcum": "Bugün doğrulandı: data/yerlesimler.js Kragujevac kaydı Çaçak ile BİREBİR aynı desende (1459-1717 kesintisiz Osmanlı, 1689-1690 boşluğu yok). KAYNAK: Kragujevac'a özel bir tarih kaynağı (gtokg.org.rs) DOĞRUDAN doğruluyor: 'Büyük Türk Savaşı sırasında Louis of Baden yönetimindeki Avusturyalılar Türkleri şehrin çok güneyine sürdü... Avusturya işgali altında Kragujevac tahkim edildi, Müslüman nüfus sürüldü.' Bu Çaçak'tan DAHA GÜÇLÜ bir kanıt (şehre özel, isimle).",
  "hukum": "cozuldu-oneri (Çaçak'tan daha güvenilir kanıt): ad='Kragujevac' eşleştir. s: dizisindeki d:'sirbistan'/'sirp-despotlugu' sonrası doğrudan 1717'ye giden kaydı böl: {f:'1459-06-20'... mevcut ilk parça aynen kalır, sonra} yeni bir {f:'1689-09-24',t:'1690-09-09',d:'avusturya'} eklenir (Niş/Vidin'in KOMŞU günlerinden kopyalandı — Değişmez 2 açılmaz, o günlerin maddesi zaten var), d: dizisi buna göre iki parçaya bölünür ({f:'...',t:'1689-09-24'} ve {f:'1690-09-09',t:'1717-08-18'}).",
  "kaynak": "gtokg.org.rs 'History of Kragujevac' — ⚠️ YEREL KURUM SAYFASI, HAKEMLİ KAYNAKTA DOĞRULANMADI. TDV bu taneciklikte konuşmuyor (§4 tanecik boşluğu). ORHANGAZİ'nin M-1372 notu: kaydı yazdım ama zayıflığı burada açıkça yazılı duruyor — zayıf kaynağı gizlemek yerine."
 },
 {
  "no": "H-0014/parti-emrelic-0035 (DÜZELTME — ORHANGAZİ'nin OLCUM teşhisini çürütüyorum)",
  "baslik": "Çuha (Kythira) — 'kayıt yok' hükmü YANLIŞ, kayıt zaten var ve doğru görünüyor",
  "tur": "zaten-dogru",
  "olcum": "ORHANGAZİ'nin M-1364 mesajı 'bu adla kayıt yok, önce ara' demişti. ARADIM: `data/yerlesimler_ege.js` (ya da ilgili dosya) içinde 'Çuha Adası (Kythira)' adıyla TAM OLARAK kayıtlı (36.24, 22.99) — CLAUDE.md §4 Türkçe yazım ekseni tuzağının aynısı, OLCUM 'Kithira/Kythira' aradı ama veri 'Çuha Adası (Kythira)' yazıyor (Lefkada/Ayamavra ile birebir aynı desen). Kaydın kendisi de tarihen makul: 1281-1715 venedik, 1715-1718 Osmanlı kuşatma/idare (Mora seferi), 1718 Pasarofça ile tekrar venedik, sonra fransa/ingiltere/yunanistan zinciri — Kythira'nın bilinen tarihiyle uyumlu.",
  "hukum": "zaten-dogru: kayıt var ve doğru. Ek araştırma/düzeltme gerekmiyor. ORHANGAZİ'ye bildirildi (tahta) — kendi OLCUM turunun bu maddedeki 'kayıt yok' tespiti hatalıydı, arama Türkçe adla yapılmamıştı.",
  "kaynak": "data/yerlesimler*.js — doğrudan veri okuması (arama)"
 }
];
