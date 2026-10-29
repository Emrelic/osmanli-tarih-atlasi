// 🔴 4 EKİM 2026 — 3 Taino cacicazgosundan `kur:"1281-01-01"` SİLİNDİ
//    (Jaragua · Higüey · Camagüey). ONCE1281-KUR191'in süzgeci bunları
//    KAÇIRMIŞTI: süzgeç "ilk sahiplik 1281 VE kur dolu" kesişimiydi, bu
//    üçünün ilk SAHİBİ ise 1503/1504/1514 İspanya. Sınıf AYNI (ufuk
//    tabanı, kaynak YOK), sayı 191 değil 194.
// 🔴 AYNI GÜN, EKSİK KALAN YÜZ — silme GERİYE doğru NÖTR DEĞİLDİR:
//    kur VARKEN  g=1000'de nokta YOK · kur YOKKEN g=1000 ve g=-5000'de VAR.
//    Yani bu kayıtlar artık "ezelden beri var". Taino (~600-1500), Inuit,
//    Xhosa yerleşimleri için bu kur:1281 kadar yanlıştır — ÖBÜR YÖNE.
//    ⇒ 1281 ÖNCESİ KAMPANYANIN İKİNCİ KAPISI: her nokta için ya KAYNAKLI
//      bir kur yazılacak, ya o nokta kapsam dışı bırakılacak. Ufuk geriye
//      açılmadan bu kapı kapanmalı. (ONCE1281-KUR191 bu yüzü ölçmemişti.)
// ============================================================================
// YERLEŞİM VERİ SETİ — AMERİKA KITASI  (Oturum: NOKTA AMERİKA, 13 Ağustos 2026)
// ============================================================================
// data/yerlesimler.js ile AYNI ŞEMA. Ayrı dosya olmasının tek sebebi oturumlar
// arası dosya çakışmasını önlemektir; entegrasyon oturumu YERLESIMLER dizisiyle
// birleştirecektir. Alan sözlüğü: VERI-YAPISI.md. Görev tanımı: oturumlar/NOKTA-AMERIKA.md
//
// ---------------------------------------------------------------------------
// BU DOSYANIN SEBEBİ
// ---------------------------------------------------------------------------
// 13 Ağustos 2026 ölçümü: 2369 noktalık evrende AMERİKA 0 nokta taşıyordu —
// haritanın en büyük tek boşluğu. Bu dosya dört paralel araştırma turunun
// (Mezoamerika · And+Güney Amerika · Kuzey Amerika · Karayipler+Río de la
// Plata) birleştirilmiş ve çapraz kontrolden geçirilmiş çıktısıdır.
//
// TOPLAM: 134 nokta (hedef 120-180 içinde, node.js ile doğrulandı).
//   Mezoamerika          36   (23 hazır kimlikle + 13 kimlik-önerisi bekliyor)
//   And / Güney Amerika  37   (dedup sonrası — bkz. aşağı)
//   Kuzey Amerika        36
//   Karayipler + RdlP    25   (26 araştırıldı, "Santa Fe" ad çakışması ayrıştırıldı,
//                              üç şehrin And ekibi kopyası atıldı — bkz. aşağı)
//
// ---------------------------------------------------------------------------
// 🔴 ÇAPRAZ KONTROLDE BULUNAN 3 MÜKERRER — ÇÖZÜLDÜ
// ---------------------------------------------------------------------------
// And/Güney Amerika ekibi VE Karayipler ekibi aynı üç şehri (Asunción,
// Montevideo, Córdoba/Arjantin) BAĞIMSIZ olarak yazmıştı — görev bölüşümü
// Río de la Plata sınırını net çizmemişti (orkestratörün hatası, işçilerin
// değil). Karayipler ekibinin versiyonu tercih edildi çünkü bölgenin kendi
// uzmanlık alanıydı ve 1810-1828 arası İspanya→Arjantin→Portekiz→Brezilya
// İmparatorluğu→Uruguay geçişini And ekibinden daha ayrıntılı/doğru
// modelliyordu (And ekibi kendi versiyonunu "AŞIRI BASİTLEŞTİRME" diye
// zaten işaretlemişti). And ekibinin bu üç şehir için ürettiği veri ATILDI,
// geri kalan 37 nokta korundu.
//
// ---------------------------------------------------------------------------
// 🔴🔴 KİMLİK BORCU — BU DOSYA BAĞLANMADAN ÖNCE data/devletler.js'E EKLENMELİ
// ---------------------------------------------------------------------------
// 32 nokta, data/devletler.js'te HENÜZ TANIMLI OLMAYAN bir `d:` kimliği
// kullanıyor (aşağıda her biri `// ÖNERİLEN KİMLİK` yorumuyla işaretli).
// Tam öneri listesi (devletler.js formatında taslak kayıtlar):
// oturumlar/NOKTA-AMERIKA-ILERLEME.md
//
// Bu noktalar YAZILDI (yazılmamak yerine) çünkü: (a) her biri akademik
// kaynakla desteklendi, (b) kimliği yokken noktayı hiç yazmamak, koca bir
// kıtanın bağımsızlık-sonrası dönemini (1810-1923, ~110 yıl) tamamen boş
// bırakmak demekti — CLAUDE.md §2'nin "noktası olmayan bölge en yakın
// peteğe emilir" uyarısının TAM KENDİSİ. (c) dosya `arac/girdi.py`'ye
// KOORDİNATÖR tarafından bağlanacak (§③) — yani üretim koşusuna girmeden
// önce kimlikler eklenebilir. Motor bir `s:` kimliği BOYALAR'da yoksa o
// bölgeyi sessizce boyamaz (VERI-YAPISI.md) — yani kimlik eksikken bağlanırsa
// KAZA değil, görünmez kalır; yine de ÖNCE devletler.js'e eklenmesi gerekir.
//
// 32 önerilen kimlik, beş grupta:
//   Kuzey Amerika (9): haudenosaunee, powhatan, cahokia, natchez,
//     creek-konfederasyonu, cherokee, choctaw, teksas-cumhuriyeti,
//     pueblo-bagimsizligi (13 Ağustos, Değişmez 1b denetiminde EKLENDİ —
//     Taos/Acoma/Santa Fe'nin 1680-1692 Pueblo İsyanı boşluğunu kapatır)
//   Mezoamerika (5): nahua-sehir-devletleri, purepecha-imparatorlugu,
//     zapotek-krallik, tututepec-krallik, guatemala
//   And/G.Amerika Kolomb-öncesi (6): chimu-krallik, colla-krallik,
//     lupaqa-krallik, muisca-konfederasyonu, mapuche-araukanya,
//     diaguita-calchaqui-konfederasyonu
//   Bağımsızlık-sonrası cumhuriyetler (12): peru-cumhuriyeti,
//     bolivya-cumhuriyeti, sili-cumhuriyeti, arjantin-cumhuriyeti,
//     paraguay-cumhuriyeti, uruguay-cumhuriyeti, venezuela-cumhuriyeti,
//     kolombiya-cumhuriyeti, ekvador-cumhuriyeti, brezilya-cumhuriyeti,
//     dominik-cumhuriyeti, kuba-cumhuriyeti
//
// ⚠️ İSİM TUTARLILIĞI DÜZELTİLDİ: iki araştırma ekibi aynı kimlikler için
// farklı id önerdi (örn. "arjantin" vs "arjantin-cumhuriyeti"). Bu dosyada
// TEK canonик isim kullanıldı (-cumhuriyeti soneki tutarlı uygulandı).
//
// ⚠️ "kuba-cumhuriyeti" — id KASTEN "kuba" DEĞİL: devletler.js'te "kuba" id'si
// ZATEN VAR (Orta Afrika'daki Kuba Krallığı, satır ~3272). Çakışma önlendi.
// ⚠️ "fransa-cumhuriyet" — bu kimlik devletler.js'te ZATEN VAR (satır 780,
// 1792 sonrası Fransa), YENİ ÖNERİ DEĞİL, doğrudan kullanılabilir.
//
// ---------------------------------------------------------------------------
// ⚠️ BİLİNEN AÇIK SINIRLAR — veri sahibine/entegrasyona bırakılan kararlar
// ---------------------------------------------------------------------------
// 1. CAHOKIA'nın 1350 sonrası "sahipsizliği": site fiilen terk edildi, ama
//    şemada bunu ifade edecek net bir alan yok. Nokta 1350'de `s:` dizisini
//    bitiriyor — motor bunu nasıl işler (nokta kaybolur mu) kontrol edilmeli.
//    (Bu KASTEN böyle bırakıldı — Değişmez 1'in 180 kasıtlı-sahipsiz tavanına
//    benzer bir "yerleşim sona erdi" durumu, iç boşluk DEĞİL.)
// 2. 🟢 KAPATILDI (13 Ağustos, Değişmez 1b denetiminde bulunan 3 iç boşluktan
//    biri) — Pueblo İsyanı boşluğu (Taos/Acoma/Santa Fe, 1680-08-10→1692-08-01,
//    ~12 yıl) artık "pueblo-bagimsizligi" (YENİ ÖNERİLEN KİMLİK) ile dolu.
// 3. Novoarkhangelsk/Sitka (1799-1804 arası ~2 yıllık Tlingit kesintisi):
//    veri sürekli "rusya" yazıldı, kesinti yalnız yorumla işaretlendi. AÇIK.
// 4. 🟢 KAPATILDI (aynı denetimde bulunan diğer 2 iç boşluk) — New Orleans
//    (1800-10-01→1803-04-30, "ispanya" ile birleştirildi, kimlik ömrü
//    aşılmadı) ve San Antonio (1836-1845, "teksas-cumhuriyeti" ile dolduruldu).
// 5. Rio de la Plata'nın 1776 öncesi (Buenos Aires/Asunción/Córdoba/Santa
//    Fe/Corrientes/Mendoza) idari olarak Peru Genel Valiliği'ne bağlıydı —
//    "ispanyol-peru" kimliği bu yüzden kullanıldı (coğrafi değil idari bağ).
// 6. Colonia del Sacramento'nun 1680-1777 arası BEŞ el değiştirmesi
//    (Portekiz⇄İspanya) tarihsel olarak doğrulanmış ama yalnız yıl
//    hassasiyetinde — gün akademik kaynaklarda çoğunlukla yok.
//
// 🔴 DENETİM DURUMU (13 Ağustos, ilk motor koşusu sonrası): Değişmez 1b 5 iç
// boşluk bulmuştu — 5'i de yukarıda. 3'ü (Pueblo × 2 nokta grubu + New Orleans
// + San Antonio = aslında 4 nokta, 3 farklı olay) KAPATILDI, 1'i (Sitka) AÇIK
// kaldı (kasıtlı — kaynak "ispanya" ile devam eder diyor, kesintiyi ayrı
// dönem olarak modellemek gerekmiyor gibi görünüyor ama kesin karar entegrasyona
// bırakıldı). Değişmez 1'in 203/180 fazlası: yeni "pueblo-bagimsizligi" ve
// "teksas-cumhuriyeti" kimlikleri devletler.js'e eklenip motor yeniden
// koşana kadar bu sayı değişmeyecek — kimlikler eklenince otomatik düşer.
//
// ---------------------------------------------------------------------------
// KAYNAK DİSİPLİNİ
// ---------------------------------------------------------------------------
// TDV İslâm Ansiklopedisi'nin `amerika` maddesi (2 bölüm: T. Ahmet Ertek
// coğrafya, Rıza Kurtuluş tarih) önce kontrol edildi — İnka/Aztek/Meksika/
// Brezilya için devletler.js'e zaten işlenmiş ANA HATLARI doğruluyor, ama
// şehir/nokta taneciğinde TDV susuyor (§4 "taneciklik boşluğu"). Bu yüzden
// HER nokta akademik standart kaynakla (Cambridge History serileri, üniversite
// yayınları, alanın standart el kitapları — Hemming, D'Altroy, Michael E.
// Smith, Pauketat, Richter, Weber, Taylor, Eccles, Hudson, Stanish, Dillehay,
// Moya Pons, vb.) kaynaklandı. Her nokta/grubun altında `// kaynak:` satırı
// var. Hiçbir tarih uydurulmadı — gün bilinmiyorsa YYYY-01-01.
// ============================================================================

window.YERLESIMLER_AMERIKA = [

// ============================================================================
// 1) MEZOAMERİKA
// ============================================================================

// ---------- Aztek Üçlü İttifak başkentleri ----------

{ ad:"Tenochtitlan (Mexico City)", tur:"sehir", lat:19.4326, lon:-99.1332, g:2, k:1,
  kur:"1325-01-01",
  s:[{f:"1325-01-01",t:"1428-01-01",d:"nahua-sehir-devletleri"},
     {f:"1428-01-01",t:"1521-08-13",d:"aztek-imparatorlugu"},
     {f:"1521-08-13",t:"1535-04-17",d:"yeni-ispanya-ilk-donem"},
     {f:"1535-04-17",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: TDV İslâm Ansiklopedisi "amerika" md. (1325 kuruluş, 1519-1521 fetih);
//         Michael E. Smith, "The Aztecs" (3. bs. 2012), s. 43-51.
// k gerekçesi: imparatorluk başkenti, Triple Alliance'ın baskın ortağı — k:1
// NOT: 1325-1428 arası basitleştirme — bkz. dosya başı ve "nahua-sehir-devletleri" önerisi.

{ ad:"Texcoco", tur:"sehir", lat:19.5039, lon:-98.8823, g:2, k:1,
  s:[{f:"1281-01-01",t:"1428-01-01",d:"nahua-sehir-devletleri"},
     {f:"1428-01-01",t:"1521-08-13",d:"aztek-imparatorlugu"},
     {f:"1521-08-13",t:"1535-04-17",d:"yeni-ispanya-ilk-donem"},
     {f:"1535-04-17",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: Pedro Carrasco, "The Tenochca Empire of Ancient Mexico" (Univ. of Oklahoma Press, 1999).
// k gerekçesi: Acolhua başkenti, İttifak'ın eş-kıdemli ortağı — k:1

{ ad:"Tlacopan (Tacuba)", tur:"sehir", lat:19.4578, lon:-99.1867, g:1, k:2,
  kur:"1400-01-01",
  s:[{f:"1400-01-01",t:"1428-01-01",d:"nahua-sehir-devletleri"},
     {f:"1428-01-01",t:"1521-08-13",d:"aztek-imparatorlugu"},
     {f:"1521-08-13",t:"1535-04-17",d:"yeni-ispanya-ilk-donem"},
     {f:"1535-04-17",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: Carrasco (1999) — Tlacopan haraç payı yalnız 1/5, İttifak'ın en zayıf ortağı.
// k gerekçesi: kademece Tenochtitlan/Texcoco'nun altında — k:2

// ---------- Bağımsız Nahua şehir devletleri (ÖNERİLEN KİMLİK: nahua-sehir-devletleri) ----------

{ ad:"Tlaxcala", tur:"sehir", lat:19.3182, lon:-98.2375, g:1, k:1,
  s:[{f:"1281-01-01",t:"1521-08-13",d:"nahua-sehir-devletleri"},
     {f:"1521-08-13",t:"1535-04-17",d:"yeni-ispanya-ilk-donem"},
     {f:"1535-04-17",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: Charles Gibson, "Tlaxcala in the Sixteenth Century" (Yale Univ. Press, 1952) —
//         alan literatüründe evrensel referans. Dört altepetl konfederasyonu, HİÇBİR ZAMAN
//         Aztek'e fethedilmedi; 1519'da Cortés'e müttefik oldu.
// k gerekçesi: bağımsız konfederasyonun idari merkezi, hiç fethedilmedi — k:1

{ ad:"Cholula", tur:"sehir", lat:19.0631, lon:-98.3037, g:1, k:2,
  s:[{f:"0500-01-01",t:"0700-01-01",d:"__BOSLUK__",kesinlik:"yuzyil",kaynak:"BOŞLUK BEYANI: arandı, bulunamadı: Evans 2001 s.139-141, McCafferty 1996/2008 özeti ve Pohl (FAMSI) aracılığıyla Vikipedi okundu; Cholula Büyük Piramit'in 300 MÖ'den beri kullanıldığı, MS 600-700 arasında büyük bir bölgesel merkeze dönüştüğü yazılı ama 500-700 arası siyasi sahibi (devlet/hanedan) kaynaklarda yok. Abi merkez (⑤): Teotihuacan etkisi arkeolojik olarak tartışmalı, siyasi bağ gösteren kaynak bulunamadı → yaklaşıklık yazılmadı. f=0500 UFUK SINIR İŞARETİDİR. · DOGU-500-1281"},{f:"0700-01-01",t:"1281-01-01",d:"cholula",kesinlik:"yuzyil",kaynak:"SAHİP cholula: BOYALAR'a eklendi (BOYA PAKETİ), BOŞLUK BEYANI geri yazıldı (AMERİKA-ÖN1281 (29 Ekim 2026)) — dayanak aşağıdadır · Susan Toby Evans, Ancient Mexico and Central America, 2001, s.139-141 (Tlachihualtepetl evresi CE 700-1200; Olmeca-Xicalanca ele geçişi evre içinde; 'In CE 1200, ethnic Tolteca-Chichimeca conquered Cholula' — atıf; kitap AÇILMADI; Vikipedi aracılığıyla) | BEYANLI YAKLAŞIKLIK: 700 evre başı alt sınırdır; 1200 fethi aynı şehir-devletin (cholula künyesi) etnik sahip değişimidir, harita sahibi değişmez. · DOGU-500-1281"},{f:"1281-01-01",t:"1519-10-18",d:"nahua-sehir-devletleri"},
     {f:"1519-10-18",t:"1535-04-17",d:"ispanya"},
     {f:"1535-04-17",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: çoklu akademik kaynak — 18 Ekim 1519 Cholula Katliamı. Aztek'e TAM bağlılık
//         statüsü net değil, bu yüzden Aztek alt-dönemi hiç iddia edilmedi.
// k gerekçesi: büyük dini/ticari hac merkezi — k:2

{ ad:"Cempoala (Zempoala)", tur:"sehir", lat:19.4139, lon:-96.3925, g:1, k:2,
  s:[{f:"1281-01-01",t:"1519-07-01",d:"nahua-sehir-devletleri"},
     {f:"1519-07-01",t:"1535-04-17",d:"ispanya"},
     {f:"1535-04-17",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: çoklu akademik kaynak — Totonak merkezi, Temmuz 1519'da Cortés'e katıldı.
// k gerekçesi: Totonak bölgesel merkezi, Cortés'in ilk büyük yerli müttefiki — k:2

{ ad:"Huexotzinco (Huejotzingo)", tur:"sehir", lat:19.1517, lon:-98.4033, g:0, k:2,
  s:[{f:"1281-01-01",t:"1521-08-13",d:"nahua-sehir-devletleri"},
     {f:"1521-08-13",t:"1535-04-17",d:"yeni-ispanya-ilk-donem"},
     {f:"1535-04-17",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: "The Huexotzinco Codex" (akademik neşri Univ. of Utah Press, 1974).
// k gerekçesi: bağımsız Nahua şehir devleti, Tlaxcala'dan küçük — k:2

{ ad:"Xochimilco", tur:"sehir", lat:19.2647, lon:-99.1031, g:0, k:3,
  s:[{f:"1281-01-01",t:"1430-01-01",d:"nahua-sehir-devletleri"},
     {f:"1430-01-01",t:"1521-08-13",d:"aztek-imparatorlugu"},
     {f:"1521-08-13",t:"1535-04-17",d:"yeni-ispanya-ilk-donem"},
     {f:"1535-04-17",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: akademik özet — Tenochtitlan 1430'da fethetti (yaklaşık).
// k gerekçesi: 1430'dan itibaren Aztek'e tâbi haraç ödeyen altepetl — k:3

{ ad:"Chalco", tur:"sehir", lat:19.2667, lon:-98.8833, g:0, k:3,
  s:[{f:"1281-01-01",t:"1465-01-01",d:"nahua-sehir-devletleri"},
     {f:"1465-01-01",t:"1521-08-13",d:"aztek-imparatorlugu"},
     {f:"1521-08-13",t:"1535-04-17",d:"yeni-ispanya-ilk-donem"},
     {f:"1535-04-17",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: akademik özet — Moctezuma I ~1465'te fethetti (yaklaşık).
// k gerekçesi: 1465'ten itibaren Aztek'e tâbi — k:3

{ ad:"Tepeaca", tur:"sehir", lat:18.9667, lon:-97.9000, g:0, k:3,
  s:[{f:"1281-01-01",t:"1466-01-01",d:"nahua-sehir-devletleri"},
     {f:"1466-01-01",t:"1520-09-04",d:"aztek-imparatorlugu"},
     {f:"1520-09-04",t:"1535-04-17",d:"ispanya"},
     {f:"1535-04-17",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: Cortés'in "İkinci Mektubu" (30 Ekim 1520) — Cortés 4 Eylül 1520'de burada
//         "Villa de Segura de la Frontera"yı kurarak Tenochtitlan düşmeden Aztek denetimine son verdi.
// k gerekçesi: 1466'dan itibaren Aztek'e tâbi sınır garnizonu — k:3

// ---------- Purépecha (Tarasca) İmparatorluğu (ÖNERİLEN KİMLİK: purepecha-imparatorlugu) ----------

{ ad:"Tzintzuntzan", tur:"sehir", lat:19.6167, lon:-101.5833, g:2, k:1,
  kur:"1300-01-01",
  s:[{f:"1300-01-01",t:"1530-02-14",d:"purepecha-imparatorlugu"},
     {f:"1530-02-14",t:"1535-04-17",d:"yeni-ispanya-ilk-donem"},
     {f:"1535-04-17",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: Helen Perlstein Pollard, "Taríacuri's Legacy: The Prehispanic Tarascan State"
//         (Univ. of Oklahoma Press, 1993) — alanın standart akademik monografisi.
// k gerekçesi: imparatorluk başkenti — k:1

{ ad:"Pátzcuaro", tur:"sehir", lat:19.5138, lon:-101.6070, g:1, k:2,
  kur:"1325-01-01",
  s:[{f:"1325-01-01",t:"1530-02-14",d:"purepecha-imparatorlugu"},
     {f:"1530-02-14",t:"1535-04-17",d:"yeni-ispanya-ilk-donem"},
     {f:"1535-04-17",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: "Relación de Michoacán" (1540, Fray Jerónimo de Alcalá) — birincil kaynak.
// k gerekçesi: kurucu üç şehirden biri, dini merkez — k:2

{ ad:"Ihuatzio", tur:"sehir", lat:19.5667, lon:-101.6167, g:0, k:2,
  kur:"1325-01-01",
  s:[{f:"1325-01-01",t:"1530-02-14",d:"purepecha-imparatorlugu"},
     {f:"1530-02-14",t:"1535-04-17",d:"yeni-ispanya-ilk-donem"},
     {f:"1535-04-17",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: "Relación de Michoacán" — kurucu üç şehirden biri, asilzade/askeri merkez.
// k gerekçesi: kurucu üç şehirden biri, Tzintzuntzan'ın gölgesinde — k:2

// ---------- Mixtek / Zapotek (ÖNERİLEN KİMLİK: zapotek-krallik, tututepec-krallik) ----------

{ ad:"Zaachila", tur:"sehir", lat:16.9833, lon:-96.7500, g:1, k:1,
  s:[{f:"1281-01-01",t:"1523-01-01",d:"zapotek-krallik"},
     {f:"1523-01-01",t:"1535-04-17",d:"yeni-ispanya-ilk-donem"},
     {f:"1535-04-17",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: Joyce Marcus & Kent V. Flannery, "Zapotec Civilization" (Thames & Hudson, 1996).
// k gerekçesi: son Zapotek başkenti — k:1

{ ad:"Mitla", tur:"sehir", lat:16.9200, lon:-96.3583, g:1, k:2,
  s:[{f:"1281-01-01",t:"1523-01-01",d:"zapotek-krallik"},
     {f:"1523-01-01",t:"1535-04-17",d:"yeni-ispanya-ilk-donem"},
     {f:"1535-04-17",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: Marcus & Flannery (1996) — Monte Albán kadar eski, hiç terk edilmedi.
// k gerekçesi: büyük dini merkez, idari başkent Zaachila'nın altında — k:2

{ ad:"Tututepec (Yucu Dzaa)", tur:"sehir", lat:16.1517, lon:-97.6156, g:1, k:1,
  s:[{f:"1100-01-01",t:"1281-01-01",d:"tututepec",kesinlik:"onyil",kaynak:"SAHİP tututepec: BOYALAR'a eklendi (BOYA PAKETİ), BOŞLUK BEYANI geri yazıldı (AMERİKA-ÖN1281 (29 Ekim 2026)) — dayanak aşağıdadır · Arthur A. Joyce, «Mixtec Empire», Univ. of Colorado Boulder, 2016 (colorado.edu/rioverdearchaeology/.../joyce_2016a.pdf; pdftotext ile okundu): \"Archaeological and ethnohistoric sources indicate that the founding of Tututepec was the result of the arrival of highland Mixtecs into the lower Verde region at about 1100 CE\" | Arthur A. Joyce, «Mixtec Empire», Univ. of Colorado Boulder, 2016 (colorado.edu/rioverdearchaeology/.../joyce_2016a.pdf; pdftotext ile okundu): \"At this time, Tututepec was nearly uninhabited, which shows that the Late Postclassic city did not develop out of an earlier community, but was founded instead as a new political center.\" | f=1100: bu kaynak; kodeks hesabı 1081 (maddede beyanlı). · DOGU-500-1281"},{f:"1281-01-01",t:"1522-01-01",d:"tututepec-krallik"},
     {f:"1522-01-01",t:"1535-04-17",d:"yeni-ispanya-ilk-donem"},
     {f:"1535-04-17",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: Codex Zouche-Nuttall; John M. D. Pohl'un Mixtek kodeksleri üzerine akademik çalışmaları.
//         Pedro de Alvarado 1522'de fethetti.
// k gerekçesi: Mixteca'daki en büyük/uzun ömürlü siyasi birimin başkenti — k:1

// ---------- Maya Post-Klasik Şehir Devletleri (maya-sehir-devletleri — MEVCUT KİMLİK) ----------

{ ad:"Mayapán", tur:"sehir", lat:20.6244, lon:-89.4611, g:1, k:1,
  bit:"1441-01-01",
  s:[{f:"1100-01-01",t:"1281-01-01",d:"mayapan-birligi",kesinlik:"yuzyil",kaynak:"SAHİP mayapan-birligi: BOYALAR'a eklendi (BOYA PAKETİ), BOŞLUK BEYANI geri yazıldı (AMERİKA-ÖN1281 (29 Ekim 2026)) — dayanak aşağıdadır · Kennett D. J. ve ark., «Drought-induced civil conflict among the ancient Maya», Nature Communications 13, 3911 (2022), doi:10.1038/s41467-022-31522-x (Europe PMC PMC9296624 tam metin okundu): \"But northern and coastal Maya populations subsequently recovered quickly and the political capital of Mayapan arose and governed from at least 1100 to 1450 cal. CE\" | BEYANLI ÇELİŞKİ: aynı makale '(1200–1450 cal. CE)' de yazar; f=1100 'en az' alt sınırı ve atlas künyesi f=1100. · DOGU-500-1281"},{f:"1281-01-01",t:"1441-01-01",d:"maya-sehir-devletleri"}] },
  // 1441'de Xiu isyanıyla YIKILDI ve TERK EDİLDİ — nokta burada bitiyor.
// kaynak: standart akademik konsensüs (Marilyn Masson & Carlos Peraza Lope'nin Mayapán kazı yayınları).
// k gerekçesi: 1441'e kadar bölgesel "lig" başkenti — k:1
// 🟢 DÜZELTME (14 Ağustos, koordinatör M-0047 hükmü): `kasitli_bosluk`/`bos:` KALDIRILDI,
// yalnız `bit:` bırakıldı — "burası kasten boş" DEĞİL "şehir artık yok" (§11 ayrımı,
// aynı çare iki farklı kusura uygulanamaz). Kaynak: data/yerlesimler.js:1877 kalıbı.

{ ad:"Chichén Itzá", tur:"sehir", lat:20.6843, lon:-88.5678, g:1, k:3,
  s:[{f:"0500-01-01",t:"0800-01-01",d:"__BOSLUK__",kesinlik:"yuzyil",kaynak:"BOŞLUK BEYANI: arandı, bulunamadı: Chichén Itzá'nın 500-800 arası sahibi — UNESCO 483: yerleşim Klasik dönemde kuruldu, Chichén Viejo anıtları 6.-10. yy'da Maya üslubunda inşa edildi, ancak bir devlet/hanedan adı verilmez (yerel el yazmaları 415-35 ya da 455 der, tarihlenmemiş gelenek); ms1 künyesi devlet f=0800. Abi merkez adayı arandı, kaynakla bağ bulunamadı | f=0500-01-01 UFUK SINIR İŞARETİDİR · DOGU-500-1281"},{f:"0800-01-01",t:"1200-01-01",d:"chichen-itza",kesinlik:"yuzyil",kaynak:"SAHİP chichen-itza: BOYALAR'a eklendi (BOYA PAKETİ), BOŞLUK BEYANI geri yazıldı (AMERİKA-ÖN1281 (29 Ekim 2026)) — dayanak aşağıdadır · ms1 künyesi (chichen-itza f=0800/t=1200; Martin & Grube, Chronicle of the Maya Kings and Queens, 2008 atfı; bu oturumda açılmadı) | UNESCO 483: «reportedly took the city between 967 A.D. and 987 A.D.» (Toltek; zincirde sahip değişimi yazılmadı) · DOGU-500-1281"},{f:"1200-01-01",t:"1281-01-01",d:"__BOSLUK__",kesinlik:"yuzyil",kaynak:"BOŞLUK BEYANI: arandı, bulunamadı: Chichén Itzá'nın 1200-1281 arası sahibi — ms1 künyesi devlet t=1200 (kesin çöküş yılı yok, 1200/1221 tartışmalı); Mayapán'ın yerini aldığı M&G atfı (açılmadı); UNESCO 483 sayfası bu dönemi anlatmaz. Abi merkez adayı Mayapán: Chichén'in bağlı olduğuna dair kaynak okunmadı | atlas zincirinin başı maya-sehir-devletleri 1281 · DOGU-500-1281"},{f:"1281-01-01",t:"1547-01-01",d:"maya-sehir-devletleri"},
     {f:"1547-01-01",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: Robert S. Chamberlain, "The Conquest and Colonization of Yucatan, 1517-1550"
//         (Carnegie Institution, 1948) — Yucatán pasifikasyonu 1546-47'de tamamlandı.
// k gerekçesi: 1200 sonrası idari başkent değil, dini/hac merkezi — k:3

{ ad:"Maní", tur:"sehir", lat:20.3833, lon:-89.3833, g:1, k:1,
  s:[{f:"1281-01-01",t:"1542-01-01",d:"maya-sehir-devletleri"},
     {f:"1542-01-01",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: Ralph L. Roys, "The Indian Background of Colonial Yucatan" (Carnegie Institution, 1943).
// k gerekçesi: halach winik (bölgesel kral) başkenti — k:1

{ ad:"Sotuta", tur:"sehir", lat:20.5875, lon:-89.0181, g:1, k:1,
  s:[{f:"1281-01-01",t:"1545-01-01",d:"maya-sehir-devletleri"},
     {f:"1545-01-01",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: Chamberlain (1948); Roys (1943) — Cocom hanedanı, İspanyollara karşı DİRENDİ.
// k gerekçesi: halach winik başkenti, Maní'nin rakibi — k:1

{ ad:"Utatlán (Q'umarkaj)", tur:"sehir", lat:15.0333, lon:-91.1567, g:1, k:1,
  kur:"1400-01-01", bit:"1524-03-07",
  s:[{f:"1400-01-01",t:"1524-03-07",d:"maya-sehir-devletleri"}] },
  // Pedro de Alvarado 1524 başında K'iche' krallarını yakıp şehri ATEŞE VERDİ.
// kaynak: Matthew Restall & Florine Asselbergs, "Invading Guatemala" (Penn State UP, 2007).
// k gerekçesi: K'iche' krallığının başkenti — k:1
// 🟢 DÜZELTME (14 Ağustos, koordinatör M-0047 hükmü): `kasitli_bosluk`/`bos:` KALDIRILDI,
// yalnız `bit:` bırakıldı — "burası kasten boş" DEĞİL "şehir artık yok".

{ ad:"Iximché", tur:"sehir", lat:14.7522, lon:-90.9822, g:1, k:1,
  kur:"1470-01-01", bit:"1527-01-01",
  s:[{f:"1470-01-01",t:"1524-07-25",d:"maya-sehir-devletleri"},
     {f:"1524-07-25",t:"1527-01-01",d:"ispanya"}] },
  // 1524-07-25: Alvarado İspanyol Guatemala'sının İLK başkenti yaptı; 1526 isyanı
  // sonrası terk edildi. Antigua Guatemala noktası bu şehrin ÜÇÜNCÜ konumu — 3km ihlali YOK.
// kaynak: Penn Museum "Expedition Magazine" (Iximché kazı raporları); Restall & Asselbergs (2007).
// k gerekçesi: Kaqchikel krallığının başkenti, fetihte İspanyol müttefiki — k:1
// 🟢 DÜZELTME (14 Ağustos, koordinatör M-0047 hükmü): `kasitli_bosluk`/`bos:` KALDIRILDI,
// yalnız `bit:` bırakıldı — "burası kasten boş" DEĞİL "şehir artık yok".

{ ad:"Zaculeu", tur:"sehir", lat:15.3486, lon:-91.4886, g:0, k:2,
  bit:"1525-01-01",
  s:[{f:"1281-01-01",t:"1525-01-01",d:"maya-sehir-devletleri"}] },
  // Gonzalo de Alvarado 1525'te açlıkla teslim aldı.
// kaynak: Tulane Univ. "Exhibits" (Zaculeu kazı tarihçesi).
// k gerekçesi: bölgesel Mam krallığı başkenti, 1450'den beri K'iche'ye tâbi — k:2
// 🟢 DÜZELTME (14 Ağustos, koordinatör M-0047 hükmü): `kasitli_bosluk`/`bos:` KALDIRILDI,
// yalnız `bit:` bırakıldı. ⚠️ Kaynak (Tulane) teslimi anlatıyor ama sonrasının kesin
// akıbetini netleştirmiyor — `bit:` en dürüst seçim (iddia yok, yalnız "site artık
// izlenmiyor").

{ ad:"Nojpetén (Tayasal / Flores)", tur:"sehir", lat:16.9284, lon:-89.8903, g:1, k:1,
  s:[{f:"1281-01-01",t:"1697-03-13",d:"maya-sehir-devletleri"},
     {f:"1697-03-13",t:"1821-09-15",d:"guatemala-kaptanligi"},
     {f:"1821-09-15",t:"2000-12-31",d:"guatemala"}] },
// kaynak: Grant D. Jones, "The Conquest of the Last Maya Kingdom" (Stanford UP, 1998) —
//         son bağımsız Maya devleti, 13 Mart 1697'de düştü.
// k gerekçesi: son bağımsız Maya krallığının başkenti — k:1

{ ad:"Potonchán (Santa María de la Victoria)", tur:"sehir", lat:18.5439, lon:-92.6461, g:0, k:2,
  s:[{f:"1281-01-01",t:"1519-03-25",d:"maya-sehir-devletleri"},
     {f:"1519-03-25",t:"1535-04-17",d:"ispanya"},
     {f:"1535-04-17",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: Bernal Díaz del Castillo'nun çağdaş tanıklığına dayanan akademik özetler —
//         Centla Muharebesi 14 Mart 1519.
// k gerekçesi: Acalán ticaret ağının kıyı limanı, bölgesel merkez — k:2

{ ad:"Acalán (Itzamkanac)", tur:"sehir", lat:18.2000, lon:-90.9667, g:0, k:1,
  s:[{f:"1281-01-01",t:"1530-01-01",d:"maya-sehir-devletleri"},
     {f:"1530-01-01",t:"1535-04-17",d:"yeni-ispanya-ilk-donem"},
     {f:"1535-04-17",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: France V. Scholes & Ralph L. Roys, "The Maya Chontal Indians of Acalan-Tixchel"
//         (Carnegie Institution, 1948; Univ. of Oklahoma Press 2. bs. 1968).
// k gerekçesi: Acalán Chontal Maya krallığının başkenti — k:1

// ---------- İspanyol fetih ve erken kolonyal şehirler (MEVCUT KİMLİKLER) ----------

{ ad:"Veracruz (Villa Rica de la Vera Cruz)", tur:"sehir", lat:19.1738, lon:-96.1342, g:1, k:2,
  kur:"1519-04-22",
  s:[{f:"1519-04-22",t:"1535-04-17",d:"ispanya"},
     {f:"1535-04-17",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: Cortés'in "İlk Mektubu" (akademik neşri Univ. of Texas Press) — 22 Nisan 1519,
//         Amerika anakarasındaki ilk İspanyol şehri.
// k gerekçesi: büyük liman ama idari başkent değil — k:2

{ ad:"Puebla de los Ángeles", tur:"sehir", lat:19.0414, lon:-98.2063, g:2, k:1,
  kur:"1531-04-16",
  s:[{f:"1531-04-16",t:"1535-04-17",d:"yeni-ispanya-ilk-donem"},{f:"1535-04-17",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: Hispanic American Historical Review (Duke Univ. Press) — 16 Nisan 1531 kuruluş.
// k gerekçesi: Yeni İspanya'nın ikinci büyük şehri — k:1

{ ad:"Guadalajara", tur:"sehir", lat:20.6597, lon:-103.3496, g:2, k:1,
  kur:"1542-02-14",
  s:[{f:"1542-02-14",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: Royal Audiencia of Guadalajara kayıtları — 14 Şubat 1542 kuruluş.
// k gerekçesi: Nueva Galicia'nın (1560'tan itibaren) başkenti — k:1

{ ad:"Antigua Guatemala (Santiago de los Caballeros)", tur:"sehir", lat:14.5586, lon:-90.7295, g:2, k:1,
  kur:"1543-01-01",
  s:[{"f":"1543-03-10","t":"1609-01-01","d":"yeni-ispanya"},{"f":"1609-01-01","t":"1821-09-15","d":"guatemala-kaptanligi"},{"f":"1821-09-15","t":"2000-12-31","d":"guatemala"}] },
// kaynak: Real Audiencia de Guatemala kayıtları — şehir ÜÇÜNCÜ kez burada kuruldu (1543).
// k gerekçesi: Guatemala Kaptanlığı'nın (1543-1773) başkenti — k:1

{ ad:"Mérida", tur:"sehir", lat:20.9674, lon:-89.5926, g:2, k:1,
  kur:"1542-01-06",
  s:[{f:"1542-01-06",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: T'ho Maya yerleşiminin üzerine kurulduğu belgelenmiş — 6 Ocak 1542.
// k gerekçesi: Yucatán'ın idari başkenti — k:1

{ ad:"Campeche (San Francisco de Campeche)", tur:"sehir", lat:19.8301, lon:-90.5349, g:1, k:3,
  kur:"1540-10-04",
  s:[{f:"1540-10-04",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: standart akademik/kurumsal tarih — 4 Ekim 1540 kuruluş.
// k gerekçesi: Mérida'ya bağlı liman kasabası — k:3

{ ad:"San Cristóbal de las Casas (Ciudad Real)", tur:"sehir", lat:16.7370, lon:-92.6376, g:1, k:2,
  kur:"1528-03-31",
  s:[{f:"1528-03-31",t:"1535-04-17",d:"yeni-ispanya-ilk-donem"},{f:"1535-04-17",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: standart akademik/kurumsal tarih — 31 Mart 1528. Chiapas 1824'te MEKSİKA'ya
//         katıldı (Guatemala'ya değil), bu yüzden 1821 sonrası "meksika" doğru.
// k gerekçesi: Chiapas ilinin piskoposluk/idari merkezi — k:2

{ ad:"Colima (San Sebastián de Colima)", tur:"sehir", lat:19.2433, lon:-103.7250, g:0, k:3,
  kur:"1523-07-25",
  s:[{f:"1523-07-25",t:"1535-04-17",d:"yeni-ispanya-ilk-donem"},{f:"1535-04-17",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: standart akademik/kurumsal tarih — Gonzalo de Sandoval, 25 Temmuz 1523.
// k gerekçesi: küçük il merkezi — k:3

{ ad:"Antequera (Oaxaca)", tur:"sehir", lat:17.0732, lon:-96.7266, g:1, k:2,
  kur:"1529-01-01",
  s:[{f:"1529-01-01",t:"1535-04-17",d:"yeni-ispanya-ilk-donem"},{f:"1535-04-17",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: UNESCO Dünya Mirası dosyası "Historic Centre of Oaxaca and Monte Albán".
// k gerekçesi: Oaxaca ilinin piskoposluk/idari merkezi — k:2

{ ad:"Compostela", tur:"sehir", lat:21.2333, lon:-104.9000, g:0, k:2,
  kur:"1531-01-01",
  s:[{f:"1531-01-01",t:"1535-04-17",d:"yeni-ispanya-ilk-donem"},{f:"1535-04-17",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: Nueva Galicia idari kayıtları — 1531, Nuño Beltrán de Guzmán.
// k gerekçesi: kısa süreli il başkenti (1531-1560), sonra Guadalajara'ya devretti — k:2

// ============================================================================
// 2) AND DAĞLARI VE GÜNEY AMERİKA
// ============================================================================

// ---------- İnka çekirdeği (inka-imparatorlugu — MEVCUT KİMLİK) ----------

{ ad:"Cusco (Qosqo)", tur:"sehir", lat:-13.5320, lon:-71.9675, g:2, k:1,
  s:[{f:"1200-01-01",t:"1281-01-01",d:"kuzco-krallik",kesinlik:"yuzyil",kaynak:"SAHİP kuzco-krallik: BOYALAR'a eklendi (BOYA PAKETİ), BOŞLUK BEYANI geri yazıldı (AMERİKA-ÖN1281 (29 Ekim 2026)) — dayanak aşağıdadır · Michael E. Moseley, The Incas and Their Ancestors, rev. ed., Thames & Hudson, 2001, böl. 1 'Introduction' (archive.org: the-incas-and-their-ancestors-second-revised-edition-michael-edward-moseley-z-lib.org, OCR metin; bölüm 9 gövdesi bu metinde YOK, okunamadı): \"the archaeological record indicates that Inca political development began as a gradual process shortly after AD 1000\" | ms1 künyesi (kuzco-krallik; yeniden yazılmadı): 'Killke Cuzco was apparently a young señorío, likely confederated with Chokepukio by about AD 1200' (Moseley 2001, böl. 9; bu oturumda açılamadı) | f=1200: ms1 künye f. · DOGU-500-1281"},{f:"1281-01-01",t:"1438-01-01",d:"inka-imparatorlugu"},
     {f:"1438-01-01",t:"1533-11-15",d:"inka-imparatorlugu"},
     {f:"1533-11-15",t:"1542-11-20",d:"ispanya"},
     {f:"1542-11-20",t:"1824-12-09",d:"ispanyol-peru"},
     {f:"1824-12-09",t:"2000-12-31",d:"peru-cumhuriyeti"}] },
// kaynak: John Hemming, "The Conquest of the Incas" (rev. ed. 1993), s. 116-123 (Pizarro'nun
//         Cusco'ya girişi, 15 Kasım 1533); Terence N. D'Altroy, "The Incas" (2. bs. 2015), s. 60-75.
// k gerekçesi: imparatorluk başkenti — k:1

{ ad:"Quito", tur:"sehir", lat:-0.2299, lon:-78.5249, g:2, k:2,
  kasitli_bosluk:true, bos:"veri-yok",
  neden:"1281-1487 arası Quitu-Cara/Caranqui konfederasyonunun siyasi yapısı hakkında akademik kaynak bu taneciklikte konuşmuyor.",
  s:[{f:"1487-01-01",t:"1534-01-01",d:"inka-imparatorlugu"},
     {f:"1534-01-01",t:"1534-12-06",d:"ispanya"},
     {f:"1534-12-06",t:"1542-11-20",d:"ispanya"},{f:"1542-11-20",t:"1822-05-24",d:"ispanyol-peru"},
     {f:"1822-05-24",t:"1830-05-13",d:"gran-kolombiya"},
     {f:"1830-05-13",t:"2000-12-31",d:"ekvador-cumhuriyeti"}] },
// kaynak: Terence N. D'Altroy, "The Incas" (2015), s. 76-80; John Hemming, "The Conquest of
//         the Incas" (1993), s. 100-105 (Rumiñahui'nin şehri yakması).
// k gerekçesi: Huayna Capac'ın ikinci başkenti — k:2

{ ad:"Cajamarca", tur:"sehir", lat:-7.1611, lon:-78.5127, g:2, k:2,
  kasitli_bosluk:true, bos:"veri-yok",
  neden:"1281-1465 arası bölgesel Cajamarca kültürünün siyasi örgütlenmesi standart kaynaklarda yalnız arkeolojik düzeyde ele alınıyor.",
  s:[{f:"1465-01-01",t:"1532-11-16",d:"inka-imparatorlugu"},
     {f:"1532-11-16",t:"1542-11-20",d:"ispanya"},
     {f:"1542-11-20",t:"1824-12-09",d:"ispanyol-peru"},
     {f:"1824-12-09",t:"2000-12-31",d:"peru-cumhuriyeti"}] },
// kaynak: John Hemming, "The Conquest of the Incas" (1993), s. 25-45 (Atahualpa'nın esareti, 16 Kasım 1532).
// k gerekçesi: İmparatorluk kuzey ordugâhı, Atahualpa'nın esir alındığı yer — k:2

{ ad:"Tumbes", tur:"liman", lat:-3.5669, lon:-80.4515, g:1, k:3,
  kasitli_bosluk:true, bos:"veri-yok",
  neden:"İnka öncesi Tumbes'in siyasi bağlılığı (Chimú/bağımsız yerel kasikalık) kaynaklarda net ayrılmıyor.",
  s:[{f:"1470-01-01",t:"1532-01-01",d:"inka-imparatorlugu"},
     {f:"1532-01-01",t:"1542-11-20",d:"ispanya"},
     {f:"1542-11-20",t:"1824-12-09",d:"ispanyol-peru"},
     {f:"1824-12-09",t:"2000-12-31",d:"peru-cumhuriyeti"}] },
// kaynak: John Hemming (1993), s. 20-24; D'Altroy (2015), s. 78.
// k gerekçesi: kuzey kıyısı fetih üssü — k:3

{ ad:"Ollantaytambo", tur:"kale", lat:-13.2583, lon:-72.2636, g:1, k:3, kur:"1450-01-01",
  s:[{f:"1450-01-01",t:"1537-07-01",d:"inka-imparatorlugu"},
     {f:"1537-07-01",t:"1542-11-20",d:"ispanya"},
     {f:"1542-11-20",t:"1824-12-09",d:"ispanyol-peru"},
     {f:"1824-12-09",t:"2000-12-31",d:"peru-cumhuriyeti"}] },
// kaynak: D'Altroy (2015), s. 168-170; Hemming (1993), s. 208-215 (Ocak 1537 muharebesi).
// k gerekçesi: Pachacuti'nin kraliyet malikânesi — k:3

{ ad:"Vilcabamba (Espíritu Pampa)", tur:"sehir", lat:-12.8167, lon:-73.2667, g:1, k:3, kur:"1539-01-01",
  s:[{f:"1539-01-01",t:"1572-06-24",d:"inka-imparatorlugu"},
     {f:"1572-06-24",t:"1824-12-09",d:"ispanyol-peru"},
     {f:"1824-12-09",t:"2000-12-31",d:"peru-cumhuriyeti"}] },
// kaynak: John Hemming (1993), s. 396-410 — Neo-İnka Devleti'nin son başkenti, İspanyol
//         birlikleri 24 Haziran 1572'de girdi (fetih sonrası ıssız kaldığı için "ispanya"
//         ara kademesi atlanıp doğrudan ispanyol-peru'ya bağlandı — DÜZELTİLMİŞ satır).
// k gerekçesi: Neo-İnka Devleti'nin son başkenti — k:3

{ ad:"Huánuco Pampa (Huánuco Viejo)", tur:"sehir", lat:-9.9333, lon:-76.5333, g:1, k:3, kur:"1460-01-01",
  s:[{f:"1460-01-01",t:"1539-01-01",d:"inka-imparatorlugu"},
     {f:"1539-01-01",t:"1542-11-20",d:"ispanya"},
     {f:"1542-11-20",t:"1824-12-09",d:"ispanyol-peru"},
     {f:"1824-12-09",t:"2000-12-31",d:"peru-cumhuriyeti"}] },
// kaynak: D'Altroy (2015), s. 343-348; Cambridge History of the Native Peoples of the
//         Americas, Vol. III, ed. Salomon & Schwartz (1999).
// k gerekçesi: Kral Yolu üzerinde büyük idari merkez — k:3

{ ad:"Vilcashuamán", tur:"sehir", lat:-13.6667, lon:-73.9500, g:1, k:3, kur:"1450-01-01",
  s:[{f:"1450-01-01",t:"1533-01-01",d:"inka-imparatorlugu"},
     {f:"1533-01-01",t:"1542-11-20",d:"ispanya"},
     {f:"1542-11-20",t:"1824-12-09",d:"ispanyol-peru"},
     {f:"1824-12-09",t:"2000-12-31",d:"peru-cumhuriyeti"}] },
// kaynak: D'Altroy (2015), s. 220-224 — Pachacuti dönemi tören/idari kompleksi.
// k gerekçesi: imparatorluk merkezi işlevi — k:3

// ---------- Kolonyal büyük şehirler — İspanyol And valiliği (MEVCUT KİMLİK) ----------

{ ad:"Lima (Ciudad de los Reyes)", tur:"sehir", lat:-12.0464, lon:-77.0428, g:2, k:1, kur:"1535-01-18",
  s:[{f:"1535-01-18",t:"1542-11-20",d:"ispanya"},{f:"1542-11-20",t:"1824-12-09",d:"ispanyol-peru"},
     {f:"1824-12-09",t:"2000-12-31",d:"peru-cumhuriyeti"}] },
// kaynak: Cambridge History of Latin America, Vol. I, ed. L. Bethell (1984); Hemming (1993), s. 175-180.
// k gerekçesi: And valiliğinin başkenti — k:1

{ ad:"Potosí", tur:"sehir", lat:-19.5836, lon:-65.7531, g:2, k:2, kur:"1545-04-01",
  s:[{f:"1545-04-01",t:"1824-12-09",d:"ispanyol-peru"},{f:"1824-12-09",t:"1825-08-06",d:"ispanya",kaynak:"Charcas/Yukarı Peru: Ayacucho (1824-12-09) Peru Genel Valiliği'ni bitirdi (künye t); Olañeta'nın kralcı kuvvetleri Yukarı Peru'da 1825-04-01 Tumusla'ya dek direndi, Bolivya 1825-08-06'da doğdu (Library of Congress Country Profile: Bolivia, tile.loc.gov/storage-services/master/frd/copr/Bolivia.pdf; SciELO Bolivia, Rev. Inv. e Inform. Bol. (scielo.org.bo, S1997-40432011000300006; OKUNDU): Ayacucho 9 Aralık 1824, savaş Olañeta'nın Tumusla'daki ölümüyle (1825) biter, Bolivya 6 Ağustos 1825'te «nace como una nación»; 1 Nisan 1825 günü LoC profilinde (arama özeti) geçer, LoC PDF'i okunamadı; Redalyc 407539686004 PDF'i okunamadı. Aynı bölgenin öteki şehirleri bu veride zaten `ispanya` ile 1825-08-06'ya taşınıyor (yerlesimler_a78_amerika.js); 1825-04-01 sonrası kısa geçiş (Sucre yönetimi) ayrıca modellenmedi."},
     {f:"1825-08-06",t:"2000-12-31",d:"bolivya-cumhuriyeti"}] },
// kaynak: Cambridge History of Latin America, Vol. I (Bethell, 1984), P.J. Bakewell böl.
// k gerekçesi: Cerro Rico gümüş madeni, kolonyal dönemin en büyük şehirlerinden — k:2

{ ad:"La Paz", tur:"sehir", lat:-16.5000, lon:-68.1500, g:2, k:2, kur:"1548-10-20",
  s:[{f:"1548-10-20",t:"1824-12-09",d:"ispanyol-peru"},{f:"1824-12-09",t:"1825-08-06",d:"ispanya",kaynak:"Charcas/Yukarı Peru: Ayacucho (1824-12-09) Peru Genel Valiliği'ni bitirdi (künye t); Olañeta'nın kralcı kuvvetleri Yukarı Peru'da 1825-04-01 Tumusla'ya dek direndi, Bolivya 1825-08-06'da doğdu (Library of Congress Country Profile: Bolivia, tile.loc.gov/storage-services/master/frd/copr/Bolivia.pdf; SciELO Bolivia, Rev. Inv. e Inform. Bol. (scielo.org.bo, S1997-40432011000300006; OKUNDU): Ayacucho 9 Aralık 1824, savaş Olañeta'nın Tumusla'daki ölümüyle (1825) biter, Bolivya 6 Ağustos 1825'te «nace como una nación»; 1 Nisan 1825 günü LoC profilinde (arama özeti) geçer, LoC PDF'i okunamadı; Redalyc 407539686004 PDF'i okunamadı. Aynı bölgenin öteki şehirleri bu veride zaten `ispanya` ile 1825-08-06'ya taşınıyor (yerlesimler_a78_amerika.js); 1825-04-01 sonrası kısa geçiş (Sucre yönetimi) ayrıca modellenmedi."},
     {f:"1825-08-06",t:"2000-12-31",d:"bolivya-cumhuriyeti"}] },
// kaynak: Cambridge History of Latin America, Vol. I (Bethell, 1984).
// k gerekçesi: bölgesel idari merkez — k:2

{ ad:"Sucre (La Plata / Chuquisaca)", tur:"sehir", lat:-19.0333, lon:-65.2627, g:1, k:2, kur:"1538-11-30",
  s:[{f:"1538-11-30",t:"1542-11-20",d:"ispanya"},{f:"1542-11-20",t:"1824-12-09",d:"ispanyol-peru"},{f:"1824-12-09",t:"1825-08-06",d:"ispanya",kaynak:"Charcas/Yukarı Peru: Ayacucho (1824-12-09) Peru Genel Valiliği'ni bitirdi (künye t); Olañeta'nın kralcı kuvvetleri Yukarı Peru'da 1825-04-01 Tumusla'ya dek direndi, Bolivya 1825-08-06'da doğdu (Library of Congress Country Profile: Bolivia, tile.loc.gov/storage-services/master/frd/copr/Bolivia.pdf; SciELO Bolivia, Rev. Inv. e Inform. Bol. (scielo.org.bo, S1997-40432011000300006; OKUNDU): Ayacucho 9 Aralık 1824, savaş Olañeta'nın Tumusla'daki ölümüyle (1825) biter, Bolivya 6 Ağustos 1825'te «nace como una nación»; 1 Nisan 1825 günü LoC profilinde (arama özeti) geçer, LoC PDF'i okunamadı; Redalyc 407539686004 PDF'i okunamadı. Aynı bölgenin öteki şehirleri bu veride zaten `ispanya` ile 1825-08-06'ya taşınıyor (yerlesimler_a78_amerika.js); 1825-04-01 sonrası kısa geçiş (Sucre yönetimi) ayrıca modellenmedi."},
     {f:"1825-08-06",t:"2000-12-31",d:"bolivya-cumhuriyeti"}] },
// kaynak: Cambridge History of Latin America, Vol. I (Bethell, 1984) — Charcas Audiencia'sı (1559'dan).
// k gerekçesi: Charcas Kraliyet Audiencia'sının merkezi — k:2

{ ad:"Arequipa", tur:"sehir", lat:-16.4090, lon:-71.5375, g:1, k:3, kur:"1540-08-15",
  s:[{f:"1540-08-15",t:"1542-11-20",d:"ispanya"},{f:"1542-11-20",t:"1824-12-09",d:"ispanyol-peru"},
     {f:"1824-12-09",t:"2000-12-31",d:"peru-cumhuriyeti"}] },
// kaynak: Cambridge History of Latin America, Vol. I (Bethell, 1984) — Garcí Manuel de Carbajal.
// k gerekçesi: bölgesel merkez — k:3

{ ad:"Trujillo (Peru)", tur:"sehir", lat:-8.1116, lon:-79.0290, g:1, k:3, kur:"1534-11-01",
  s:[{f:"1534-11-01",t:"1542-11-20",d:"ispanya"},{f:"1542-11-20",t:"1824-12-09",d:"ispanyol-peru"},
     {f:"1824-12-09",t:"2000-12-31",d:"peru-cumhuriyeti"}] },
// kaynak: Cambridge History of Latin America, Vol. I (Bethell, 1984) — Diego de Almagro, Kasım 1534.
// k gerekçesi: kuzey kıyısı bölgesel merkez — k:3

{ ad:"Cartagena de Indias", tur:"liman", lat:10.3910, lon:-75.4794, g:2, k:3, kur:"1533-06-01",
  s:[{f:"1533-06-01",t:"1542-11-20",d:"ispanya"},{f:"1542-11-20",t:"1821-10-01",d:"ispanyol-peru"},
     {f:"1821-10-01",t:"1831-01-01",d:"gran-kolombiya"},
     {f:"1831-01-01",t:"2000-12-31",d:"kolombiya-cumhuriyeti"}] },
// kaynak: Cambridge History of Latin America, Vol. I (Bethell, 1984) — Pedro de Heredia, 1 Haziran 1533.
// k gerekçesi: Karayip kıyısının kilit askeri limanı — k:3

{ ad:"Popayán", tur:"sehir", lat:2.4448, lon:-76.6147, g:1, k:3, kur:"1537-01-13",
  s:[{f:"1537-01-13",t:"1542-11-20",d:"ispanya"},{f:"1542-11-20",t:"1819-12-17",d:"ispanyol-peru"},
     {f:"1819-12-17",t:"1831-01-01",d:"gran-kolombiya"},
     {f:"1831-01-01",t:"2000-12-31",d:"kolombiya-cumhuriyeti"}] },
// kaynak: Cambridge History of Latin America, Vol. I (Bethell, 1984) — Sebastián de Belalcázar.
// k gerekçesi: bölgesel merkez — k:3

{ ad:"Caracas (Santiago de León de Caracas)", tur:"sehir", lat:10.4806, lon:-66.9036, g:2, k:2, kur:"1567-07-25",
  s:[{f:"1567-07-25",t:"1821-06-24",d:"ispanyol-peru"},
     {f:"1821-06-24",t:"1830-01-13",d:"gran-kolombiya"},
     {f:"1830-01-13",t:"2000-12-31",d:"venezuela-cumhuriyeti"}] },
// kaynak: Cambridge History of Latin America, Vol. I (Bethell, 1984) — Diego de Losada, 25 Temmuz 1567.
// k gerekçesi: Venezuela'nın idari merkezi — k:2

{ ad:"Mérida (Venezuela)", tur:"sehir", lat:8.5933, lon:-71.1739, g:1, k:3, kur:"1558-10-09",
  s:[{f:"1558-10-09",t:"1821-06-24",d:"ispanyol-peru"},
     {f:"1821-06-24",t:"1830-01-13",d:"gran-kolombiya"},
     {f:"1830-01-13",t:"2000-12-31",d:"venezuela-cumhuriyeti"}] },
// kaynak: Cambridge History of Latin America, Vol. I (Bethell, 1984) — Juan Rodríguez Suárez.
// k gerekçesi: dağlık iç bölge merkezi — k:3

{ ad:"Santiago (Şili)", tur:"sehir", lat:-33.4489, lon:-70.6693, g:2, k:2, kur:"1541-02-12",
  s:[{f:"1541-02-12",t:"1542-11-20",d:"ispanya"},{f:"1542-11-20",t:"1818-02-12",d:"ispanyol-peru"},
     {f:"1818-02-12",t:"2000-12-31",d:"sili-cumhuriyeti"}] },
// kaynak: Cambridge History of Latin America, Vol. I (Bethell, 1984) — Pedro de Valdivia, 12 Şubat 1541.
// k gerekçesi: Şili'nin idari merkezi — k:2

{ ad:"Concepción (Şili)", tur:"sehir", lat:-36.8270, lon:-73.0503, g:1, k:3, kur:"1550-10-05",
  s:[{f:"1550-10-05",t:"1818-02-12",d:"ispanyol-peru"},
     {f:"1818-02-12",t:"2000-12-31",d:"sili-cumhuriyeti"}] },
// kaynak: Cambridge History of Latin America, Vol. I (Bethell, 1984) — Pedro de Valdivia, 5 Ekim 1550.
// k gerekçesi: Bio-Bio hattının kuzeyinde askeri merkez (1565-1573 başkent) — k:3

// ---------- Portekiz Brezilyası (MEVCUT KİMLİK) ----------

{ ad:"Salvador (Bahia)", tur:"liman", lat:-12.9777, lon:-38.5016, g:2, k:2, kur:"1549-03-29",
  s:[{f:"1549-03-29",t:"1822-09-07",d:"portekiz-brezilyasi"},
     {f:"1822-09-07",t:"1889-11-15",d:"brezilya-imparatorlugu"},
     {f:"1889-11-15",t:"2000-12-31",d:"brezilya-cumhuriyeti"}] },
// kaynak: Stuart B. Schwartz, "Sugar Plantations in the Formation of Brazilian Society: Bahia,
//         1550-1835" (Cambridge UP, 1985), s. 15-22 — Tomé de Sousa, Mart 1549.
// k gerekçesi: Portekiz Brezilyası'nın ilk başkenti — k:2

{ ad:"Rio de Janeiro", tur:"liman", lat:-22.9068, lon:-43.1729, g:2, k:2, kur:"1565-03-01",
  s:[{f:"1565-03-01",t:"1822-09-07",d:"portekiz-brezilyasi"},
     {f:"1822-09-07",t:"1889-11-15",d:"brezilya-imparatorlugu"},
     {f:"1889-11-15",t:"2000-12-31",d:"brezilya-cumhuriyeti"}] },
// kaynak: Cambridge History of Latin America, Vol. I (Bethell, 1984) — Estácio de Sá, 1 Mart 1565.
// k gerekçesi: 1763'ten itibaren kolonyal başkent — k:2

{ ad:"São Paulo", tur:"sehir", lat:-23.5505, lon:-46.6333, g:1, k:3, kur:"1554-01-25",
  s:[{f:"1554-01-25",t:"1822-09-07",d:"portekiz-brezilyasi"},
     {f:"1822-09-07",t:"1889-11-15",d:"brezilya-imparatorlugu"},
     {f:"1889-11-15",t:"2000-12-31",d:"brezilya-cumhuriyeti"}] },
// kaynak: Cambridge History of Latin America, Vol. I (Bethell, 1984) — Cizvit kuruluşu, 25 Ocak 1554.
// k gerekçesi: iç bölge merkezi — k:3

{ ad:"Olinda", tur:"liman", lat:-8.0089, lon:-34.8553, g:1, k:2, kur:"1535-01-01",
  s:[{f:"1535-01-01",t:"1549-01-01",d:"portekiz"},{f:"1549-01-01",t:"1822-09-07",d:"portekiz-brezilyasi"},
     {f:"1822-09-07",t:"1889-11-15",d:"brezilya-imparatorlugu"},
     {f:"1889-11-15",t:"2000-12-31",d:"brezilya-cumhuriyeti"}] },
// kaynak: Cambridge History of Latin America, Vol. I (Bethell, 1984) — Pernambuco kaptanlığının ilk merkezi.
// k gerekçesi: kaptanlık merkezi — k:2

{ ad:"São Luís", tur:"liman", lat:-2.5300, lon:-44.3015, g:1, k:3, kur:"1612-09-01",
  s:[{f:"1612-09-01",t:"1615-11-04",d:"fransa"},
     {f:"1615-11-04",t:"1822-09-07",d:"portekiz-brezilyasi"},
     {f:"1822-09-07",t:"1889-11-15",d:"brezilya-imparatorlugu"},
     {f:"1889-11-15",t:"2000-12-31",d:"brezilya-cumhuriyeti"}] },
// kaynak: Cambridge History of Latin America, Vol. I (Bethell, 1984) — Fransız "France
//         Équinoxiale" (Eylül 1612), Portekiz geri alışı 4 Kasım 1615. "fransa" kimliği
//         (f:987, t:1792-09-22) bu 3 yıllık dilimi kapsıyor, sorun yok.
// k gerekçesi: Amazon ağzının Portekiz kontrolünü güvence altına alan liman — k:3

{ ad:"Belém", tur:"liman", lat:-1.4558, lon:-48.4902, g:1, k:3, kur:"1616-01-12",
  s:[{f:"1616-01-12",t:"1822-09-07",d:"portekiz-brezilyasi"},
     {f:"1822-09-07",t:"1889-11-15",d:"brezilya-imparatorlugu"},
     {f:"1889-11-15",t:"2000-12-31",d:"brezilya-cumhuriyeti"}] },
// kaynak: Cambridge History of Latin America, Vol. I (Bethell, 1984) — Francisco Caldeira de
//         Castelo Branco, 12 Ocak 1616.
// k gerekçesi: Amazon ağzı kilit limanı — k:3

{ ad:"Ouro Preto (Vila Rica)", tur:"sehir", lat:-20.3856, lon:-43.5033, g:1, k:2, kur:"1711-07-08",
  s:[{f:"1711-07-08",t:"1822-09-07",d:"portekiz-brezilyasi"},
     {f:"1822-09-07",t:"1889-11-15",d:"brezilya-imparatorlugu"},
     {f:"1889-11-15",t:"2000-12-31",d:"brezilya-cumhuriyeti"}] },
// kaynak: C.R. Boxer, "The Golden Age of Brazil, 1695-1750" (Univ. of California Press, 1962),
//         s. 45-60 — Minas Gerais altın hücumu, 8 Temmuz 1711.
// k gerekçesi: 18. yy boyunca kolonyal Brezilya'nın en kalabalık yerleşimi — k:2

// ---------- Chimú (ÖNERİLEN KİMLİK: chimu-krallik) ----------

{ ad:"Chan Chan", tur:"sehir", lat:-8.0989, lon:-79.0742, g:2, k:2,
  s:[{f:"1200-01-01",t:"1281-01-01",d:"chimu-krallik",kesinlik:"yuzyil",kaynak:"Olah G. ve ark., «Ancient DNA and spatial modeling reveal a pre-Inca trans-Andean parrot trade», Nature Communications 17, 2117 (2026), doi:10.1038/s41467-026-69167-9 (Europe PMC PMC12976122 tam metin okundu; Chimú cümlesi kendi atıflarına [53,54,115] dayanır, onlar açılmadı): \"The Chimú Empire (1200–1470 CE) succeeded the Moche and Sicán cultures and conquered much of the Peruvian coast before it was conquered by the Incas\" | q: 'Chan Chan is the vast capital of the Chimú Empire' (aynı kaynak) | f=1200: BU kaynağın başlangıcı (künye chimu-krallik f=1000: Store norske 'ca. 1000-1470', bu oturumda açılmadı) → 1000-1200 arası BEYANLI BOŞLUK DEĞİL, yamada YAZILMADI (devam_gerekli kapsamı dışı: 0500→1200 başka işçi/kaynak). · DOGU-500-1281"},{f:"1281-01-01",t:"1470-01-01",d:"chimu-krallik"},
     {f:"1470-01-01",t:"1532-11-16",d:"inka-imparatorlugu"},
     {f:"1532-11-16",t:"1542-11-20",d:"ispanya"},
     {f:"1542-11-20",t:"1824-12-09",d:"ispanyol-peru"},
     {f:"1824-12-09",t:"2000-12-31",d:"peru-cumhuriyeti"}] },
// kaynak: Michael E. Moseley, "The Incas and Their Ancestors" (rev. ed. 2001), s. 245-260 —
//         Tupac İnka Yupanqui'nin fethi ~1470.
// k gerekçesi: Chimú Krallığı'nın başkenti — k:2

{ ad:"Túcume", tur:"sehir", lat:-6.5167, lon:-79.8167, g:1, k:3,
  s:[{f:"0500-01-01",t:"1100-01-01",d:"__BOSLUK__",kesinlik:"yuzyil",kaynak:"BOŞLUK BEYANI: arandı, bulunamadı: Túcume'nin 1100 öncesi sahibi/varlığı — Encyclopedia.com 'Sican': yeni başkent 1050-1100 dolaylarında 'El Purgatorio, near Tucume'de kuruldu; yerleşimin öncesi kaynakta yok (Shimada birincil yayınları ve Heyerdahl/Narváez Túcume monografileri açılmadı). Abi merkez: Batán Grande (Sicán başkenti) 1050'ye kadar — Túcume'nin ona bağlı olduğu kaynakta yok | f=0500-01-01 UFUK SINIR İŞARETİDİR · DOGU-500-1281"},{f:"1100-01-01",t:"1281-01-01",d:"sican",kesinlik:"yuzyil",kaynak:"SAHİP sican: BOYALAR'a eklendi (BOYA PAKETİ), BOŞLUK BEYANI geri yazıldı (AMERİKA-ÖN1281 (29 Ekim 2026)) — dayanak aşağıdadır · Encyclopedia.com, 'Sican', https://encyclopedia.com/humanities/encyclopedias-almanacs-transcripts-and-maps/sican (curl ile okundu; yazar sayfada dogrulanmadi) | «a new capital was established farther west at El Purgatorio, near Tucume, marking the onset of the Late Sican (1100 to 1375 ce).» | BEYANLI YAKLAŞIKLIK: başkent 'near Túcume' (El Purgatorio), atlas Túcume noktası ona ~5 km; Late Sicán boyunca Túcume bölgesi Sicán toprağı kabul edildi. ÇELİŞKİ: atlas zinciri 1281-1375 arasını chimu-krallik gösterir; Encyclopedia.com Chimú fethini ~1375 verir → mevcut zincirin ilk iki dilimi için düzeltme önerisi (RAPOR) · DOGU-500-1281"},{f:"1281-01-01",t:"1375-01-01",d:"chimu-krallik"},
     {f:"1375-01-01",t:"1470-01-01",d:"chimu-krallik"},
     {f:"1470-01-01",t:"1532-11-16",d:"inka-imparatorlugu"},
     {f:"1532-11-16",t:"1542-11-20",d:"ispanya"},
     {f:"1542-11-20",t:"1824-12-09",d:"ispanyol-peru"},
     {f:"1824-12-09",t:"2000-12-31",d:"peru-cumhuriyeti"}] },
// kaynak: Moseley (2001), s. 230-240 — Sicán/Lambayeque kültürünün Chimú ilhakı ~1375.
//         SADELEŞTİRME: Túcume aslen bağımsız Sicán kültürüydü, ayrı kimlik açılmadı.
// k gerekçesi: kuzey bölge merkezi — k:3

// ---------- Aymara / Titicaca (ÖNERİLEN KİMLİK: colla-krallik, lupaqa-krallik) ----------

{ ad:"Hatun Colla", tur:"sehir", lat:-15.4667, lon:-70.0333, g:1, k:3,
  s:[{f:"1100-01-01",t:"1281-01-01",d:"aymara-senyorlukler",kesinlik:"yuzyil",kaynak:"SAHİP aymara-senyorlukler: BOYALAR'a eklendi (BOYA PAKETİ), BOŞLUK BEYANI geri yazıldı (AMERİKA-ÖN1281 (29 Ekim 2026)) — dayanak aşağıdadır · Michael E. Moseley, The Incas and Their Ancestors, rev. ed., Thames & Hudson, 2001, böl. 1 'Introduction' (archive.org: the-incas-and-their-ancestors-second-revised-edition-michael-edward-moseley-z-lib.org, OCR metin; bölüm 9 gövdesi bu metinde YOK, okunamadı): \"Tiwanaku’s agrarian fortunes were undone by the aD 1100 onset of pro- tracted drought that ultimately dropped lake levels by some 12 m\" | Michael E. Moseley, The Incas and Their Ancestors, rev. ed., Thames & Hudson, 2001, böl. 1 'Introduction' (archive.org: the-incas-and-their-ancestors-second-revised-edition-michael-edward-moseley-z-lib.org, OCR metin; bölüm 9 gövdesi bu metinde YOK, okunamadı): \"Credited with subjugating the Lupaka, Colla, and other kingdoms around Lake Titicaca\" | BEYANLI YAKLAŞIKLIK: Hatuncolla'nın Colla başkenti olduğu ms1 künyesinde (Moseley bölüm 9; açılamadı); doğrudan tanık bu oturumda yok. · DOGU-500-1281"},{f:"1281-01-01",t:"1450-01-01",d:"colla-krallik"},
     {f:"1450-01-01",t:"1533-01-01",d:"inka-imparatorlugu"},
     {f:"1533-01-01",t:"1542-11-20",d:"ispanya"},
     {f:"1542-11-20",t:"1824-12-09",d:"ispanyol-peru"},
     {f:"1824-12-09",t:"2000-12-31",d:"peru-cumhuriyeti"}] },
// kaynak: Charles Stanish, "Ancient Titicaca" (Univ. of California Press, 2003), s. 200-215.
// k gerekçesi: Colla Krallığı'nın başkenti — k:3

{ ad:"Chucuito", tur:"sehir", lat:-15.8884, lon:-69.7666, g:1, k:3,
  s:[{f:"1100-01-01",t:"1281-01-01",d:"aymara-senyorlukler",kesinlik:"yuzyil",kaynak:"SAHİP aymara-senyorlukler: BOYALAR'a eklendi (BOYA PAKETİ), BOŞLUK BEYANI geri yazıldı (AMERİKA-ÖN1281 (29 Ekim 2026)) — dayanak aşağıdadır · Michael E. Moseley, The Incas and Their Ancestors, rev. ed., Thames & Hudson, 2001, böl. 1 'Introduction' (archive.org: the-incas-and-their-ancestors-second-revised-edition-michael-edward-moseley-z-lib.org, OCR metin; bölüm 9 gövdesi bu metinde YOK, okunamadı): \"Tiwanaku’s agrarian fortunes were undone by the aD 1100 onset of pro- tracted drought that ultimately dropped lake levels by some 12 m\" | Michael E. Moseley, The Incas and Their Ancestors, rev. ed., Thames & Hudson, 2001, böl. 1 'Introduction' (archive.org: the-incas-and-their-ancestors-second-revised-edition-michael-edward-moseley-z-lib.org, OCR metin; bölüm 9 gövdesi bu metinde YOK, okunamadı): \"Credited with subjugating the Lupaka, Colla, and other kingdoms around Lake Titicaca\" | BEYANLI YAKLAŞIKLIK: Chucuito'nun bu tarihte merkez olduğuna dair doğrudan tanık YOK (Moseley bölüm 9 açılamadı); f=1100 Tiwanaku sonrası ms1 künye f'sidir; Lupaka 'krallık'ı 16. yy etiketi (ms1 ic_not). · DOGU-500-1281"},{f:"1281-01-01",t:"1450-01-01",d:"lupaqa-krallik"},
     {f:"1450-01-01",t:"1533-01-01",d:"inka-imparatorlugu"},
     {f:"1533-01-01",t:"1542-11-20",d:"ispanya"},
     {f:"1542-11-20",t:"1824-12-09",d:"ispanyol-peru"},
     {f:"1824-12-09",t:"2000-12-31",d:"peru-cumhuriyeti"}] },
// kaynak: Charles Stanish (2003), s. 215-230 — Lupaqa Krallığı, Colla'nın rakibi.
// k gerekçesi: Lupaqa Krallığı'nın başkenti — k:3

// ---------- Muisca Konfederasyonu (ÖNERİLEN KİMLİK: muisca-konfederasyonu) ----------

{ ad:"Bacatá (Bogotá)", tur:"sehir", lat:4.7110, lon:-74.0721, g:2, k:2,
  s:[{f:"1281-01-01",t:"1537-04-20",d:"muisca-konfederasyonu"},
     {f:"1537-04-20",t:"1538-08-06",d:"ispanya"},
     {f:"1538-08-06",t:"1542-11-20",d:"ispanya"},{f:"1542-11-20",t:"1819-12-17",d:"ispanyol-peru"},
     {f:"1819-12-17",t:"1831-01-01",d:"gran-kolombiya"},
     {f:"1831-01-01",t:"2000-12-31",d:"kolombiya-cumhuriyeti"}] },
// kaynak: John Hemming, "The Search for El Dorado" (Michael Joseph, 1978), s. 65-90 —
//         Quesada'nın fethi, 20 Nisan 1537 teslimiyeti, 6 Ağustos 1538 resmi kuruluş.
// k gerekçesi: Zipazgo'nun (zipa önderliği) başkenti — k:2

{ ad:"Hunza (Tunja)", tur:"sehir", lat:5.5353, lon:-73.3678, g:2, k:2,
  s:[{f:"1281-01-01",t:"1537-08-01",d:"muisca-konfederasyonu"},
     {f:"1537-08-01",t:"1539-08-06",d:"ispanya"},
     {f:"1539-08-06",t:"1542-11-20",d:"ispanya"},{f:"1542-11-20",t:"1819-12-17",d:"ispanyol-peru"},
     {f:"1819-12-17",t:"1831-01-01",d:"gran-kolombiya"},
     {f:"1831-01-01",t:"2000-12-31",d:"kolombiya-cumhuriyeti"}] },
// kaynak: John Hemming (1978), s. 91-105 — zaque Quemuenchatocha, Ağustos 1537.
// k gerekçesi: Zacazgo'nun (zaque önderliği) başkenti — k:2

// ---------- Mapuche / Araukanya (ÖNERİLEN KİMLİK: mapuche-araukanya) ----------

{ ad:"Arauco (Mapuche/Araukanya — kuzey sınır bölgesi)", tur:"bolge", lat:-37.2464, lon:-73.3175, g:0, k:0,
  s:[{f:"1281-01-01",t:"1883-01-01",d:"mapuche-araukanya"},
     {f:"1883-01-01",t:"2000-12-31",d:"sili-cumhuriyeti"}] },
// kaynak: Tom D. Dillehay, "Monuments, Empires, and Resistance: The Araucanian Polity and
//         Ritual Narratives" (Cambridge UP, 2007), s. 12-30, 280-310 — 1641 Quilín Parlamentosu'nda
//         İspanya'nın Mapuche bağımsızlığını RESMEN tanıması; 1861-1883 pasifikasyon.
// NOT: kasitli_bosluk KULLANILMADI — Mapuche İspanya tarafından resmen tanınmış bağımsız bir
//      taraftı, "devletsiz" damgası bu statüyü küçültürdü.

{ ad:"Purén (Mapuche/Araukanya — güney direniş bölgesi)", tur:"bolge", lat:-38.0333, lon:-73.0833, g:0, k:0,
  s:[{f:"1281-01-01",t:"1883-01-01",d:"mapuche-araukanya"},
     {f:"1883-01-01",t:"2000-12-31",d:"sili-cumhuriyeti"}] },
// kaynak: Dillehay (2007), s. 150-180 — Purén-Lumaco vadisi, Arauco Savaşı (1550-1656) direniş bölgesi.

// ---------- Diaguita / Calchaquí (ÖNERİLEN KİMLİK: diaguita-calchaqui-konfederasyonu) ----------

{ ad:"Quilmes (Calchaquí Vadisi — Diaguita)", tur:"bolge", lat:-26.5833, lon:-66.1667, g:0, k:0,
  s:[{f:"1281-01-01",t:"1667-01-02",d:"diaguita-calchaqui-konfederasyonu"},
     {f:"1667-01-02",t:"1816-07-09",d:"ispanyol-peru"},
     {f:"1816-07-09",t:"2000-12-31",d:"arjantin-cumhuriyeti"}] },
// kaynak: Cambridge History of the Native Peoples of the Americas, Vol. III, ed. Salomon &
//         Schwartz (1999) — İnka'nın dolaylı/gevşek etkisi, ayrı dönem açılmadı (basitleştirme
//         AÇIKÇA işaretli). Calchaquí Savaşları'nın bitişi: son kale Acalianes'in 2 Ocak 1667
//         teslimi, Quilmes halkının Buenos Aires'e sürgünü.
// k gerekçesi: İspanya'ya en uzun direnen And-güney konfederasyonunun merkezi — k:0 (dağınık, kademesiz)

// ============================================================================
// 3) KUZEY AMERİKA (Meksika kuzeyi — yerli + kolonyal)
// ============================================================================

{ ad:"Cahokia", tur:"sehir", lat:38.6553, lon:-90.0614, g:2, k:2,
  bit:"1350-01-01",
  s:[{f:"1050-01-01",t:"1281-01-01",d:"cahokia",kesinlik:"onyil",kaynak:"Kessler N. V., Benson E. M., Pauketat T. R., Kirk J. D., Therrell M. D., «Age and origin of a Cahokian wooden monument at the Mitchell site, Illinois, USA», PLOS ONE 20, e0333783 (2025), doi:10.1371/journal.pone.0333783 (Europe PMC PMC12494245 tam metin okundu): \"Cahokia emerged spectacularly as the largest city north of modern-day Mexico around 1050 CE\" | Kessler N. V., Benson E. M., Pauketat T. R., Kirk J. D., Therrell M. D., «Age and origin of a Cahokian wooden monument at the Mitchell site, Illinois, USA», PLOS ONE 20, e0333783 (2025), doi:10.1371/journal.pone.0333783 (Europe PMC PMC12494245 tam metin okundu): \"By around 1100 CE, Cahokia was the preeminent political and administrative center in the “Mississippian” midcontinent and Southeast, but its population and influence began to decline before 1200 CE\" | f=1050: atlas künyesi cahokia f (kaynak 'around 1050'); 1050 öncesi bölge sahipsiz (Cahokia yok). · DOGU-500-1281"},{f:"1281-01-01",t:"1350-01-01",d:"cahokia"}] },
// kaynak: Timothy R. Pauketat, "Cahokia: Ancient America's Great City on the Mississippi" (2009).
// 1281'de zirvesini (~1100) geçmiş, gerileme sürecindeydi ama hâlâ meskûndu; terk 1350-1400 arası.
// 🟢 DÜZELTME (14 Ağustos, koordinatör M-0047 hükmü): `kasitli_bosluk`/`bos:` KALDIRILDI,
// yalnız `bit:` bırakıldı — "burası kasten boş" DEĞİL "şehir artık yok".
// k gerekçesi: önceleşkolomb döneminin Kuzey Amerika'daki en büyük şehri — k:2

{ ad:"Onondaga (İrokua Konfederasyon Merkezi)", tur:"sehir", lat:43.0326, lon:-76.1794, g:2, k:2,
  kasitli_bosluk:true, bos:"kabile", neden:"1281-1450 arasi bu bolgede Haudenosaunee Konfederasyonu HENUZ KURULMAMISTI; ayri Irokua koy topluluklari vardi ve kaynaklar bunlarin birbirleriyle catistigini yaziyor - konfederasyon tam bu catismayi dindirmek icin kuruldu. Devlet degil asiret/koy yapisi. kaynak: American Antiquity (Cambridge Core), 42 Kuzey Irokua yerlesmesinden 184 AMS radyokarbon tarihinin Bayes modellemesi; TDV amerika maddesi Irokua kimligini ANMIYOR (olculdu, tanecik boslugu).",
  s:[{f:"1450-01-01",t:"1777-01-01",d:"haudenosaunee"},
     {f:"1777-01-01",t:"1783-09-03",d:"ingiltere"},
     {f:"1783-09-03",t:"2000-12-31",d:"abd"}] },
{ ad:"Mohawk (Kayenlaha'ke)", tur:"koy", lat:42.9506, lon:-74.3287, g:1, k:1,
  kasitli_bosluk:true, bos:"kabile", neden:"1281-1450 arasi bu bolgede Haudenosaunee Konfederasyonu HENUZ KURULMAMISTI; ayri Irokua koy topluluklari vardi ve kaynaklar bunlarin birbirleriyle catistigini yaziyor - konfederasyon tam bu catismayi dindirmek icin kuruldu. Devlet degil asiret/koy yapisi. kaynak: American Antiquity (Cambridge Core), 42 Kuzey Irokua yerlesmesinden 184 AMS radyokarbon tarihinin Bayes modellemesi; TDV amerika maddesi Irokua kimligini ANMIYOR (olculdu, tanecik boslugu).",
  s:[{f:"1450-01-01",t:"1777-01-01",d:"haudenosaunee"},
     {f:"1777-01-01",t:"1783-09-03",d:"ingiltere"},
     {f:"1783-09-03",t:"2000-12-31",d:"abd"}] },
{ ad:"Seneca (Ganondagan)", tur:"koy", lat:42.9084, lon:-77.4258, g:1, k:1,
  kasitli_bosluk:true, bos:"kabile", neden:"1281-1450 arasi bu bolgede Haudenosaunee Konfederasyonu HENUZ KURULMAMISTI; ayri Irokua koy topluluklari vardi ve kaynaklar bunlarin birbirleriyle catistigini yaziyor - konfederasyon tam bu catismayi dindirmek icin kuruldu. Devlet degil asiret/koy yapisi. kaynak: American Antiquity (Cambridge Core), 42 Kuzey Irokua yerlesmesinden 184 AMS radyokarbon tarihinin Bayes modellemesi; TDV amerika maddesi Irokua kimligini ANMIYOR (olculdu, tanecik boslugu).",
  s:[{f:"1450-01-01",t:"1777-01-01",d:"haudenosaunee"},
     {f:"1777-01-01",t:"1783-09-03",d:"ingiltere"},
     {f:"1783-09-03",t:"2000-12-31",d:"abd"}] },
{ ad:"Cayuga", tur:"koy", lat:42.7326, lon:-76.7466, g:1, k:1,
  kasitli_bosluk:true, bos:"kabile", neden:"1281-1450 arasi bu bolgede Haudenosaunee Konfederasyonu HENUZ KURULMAMISTI; ayri Irokua koy topluluklari vardi ve kaynaklar bunlarin birbirleriyle catistigini yaziyor - konfederasyon tam bu catismayi dindirmek icin kuruldu. Devlet degil asiret/koy yapisi. kaynak: American Antiquity (Cambridge Core), 42 Kuzey Irokua yerlesmesinden 184 AMS radyokarbon tarihinin Bayes modellemesi; TDV amerika maddesi Irokua kimligini ANMIYOR (olculdu, tanecik boslugu).",
  s:[{f:"1450-01-01",t:"1777-01-01",d:"haudenosaunee"},
     {f:"1777-01-01",t:"1783-09-03",d:"ingiltere"},
     {f:"1783-09-03",t:"2000-12-31",d:"abd"}] },
{ ad:"Oneida", tur:"koy", lat:43.0906, lon:-75.6349, g:1, k:1,
  kasitli_bosluk:true, bos:"kabile", neden:"1281-1450 arasi bu bolgede Haudenosaunee Konfederasyonu HENUZ KURULMAMISTI; ayri Irokua koy topluluklari vardi ve kaynaklar bunlarin birbirleriyle catistigini yaziyor - konfederasyon tam bu catismayi dindirmek icin kuruldu. Devlet degil asiret/koy yapisi. kaynak: American Antiquity (Cambridge Core), 42 Kuzey Irokua yerlesmesinden 184 AMS radyokarbon tarihinin Bayes modellemesi; TDV amerika maddesi Irokua kimligini ANMIYOR (olculdu, tanecik boslugu).",
  s:[{f:"1450-01-01",t:"1777-01-01",d:"haudenosaunee"},
     {f:"1777-01-01",t:"1783-09-03",d:"ingiltere"},
     {f:"1783-09-03",t:"2000-12-31",d:"abd"}] },
// kaynak: Daniel K. Richter, "The Ordeal of the Longhouse" (1992) — konfederasyon kuruluşu
//         15. yy, KESİN gün/yıl yok (1450 YAKLAŞIK). 1777: Amerikan Devrimi'nde konfederasyon
//         BÖLÜNDÜ (Oneida/Tuscarora ABD yanında); beş nokta basitleştirilerek tek blok
//         İngiltere'ye yazıldı, AÇIKÇA işaretli.
// k gerekçesi: Onondaga konfederasyon merkezi k:2, dört üye millet k:1

// HAYALET-KUNYE-1008-K · `powhatan` künyesi 1501-01-01'de başlıyor (kesinlik yuzyil); 1281→1501-01-01 dilimi → `__BOSLUK__`.
//   __BOSLUK__ = künyesi olmayan yerel yapı (Raipur emsali), 'kimsenin değil' DEĞİL; komşuya İTİLMEDİ.
{ ad:"Werowocomoco (Powhatan Konfederasyonu Başkenti)", tur:"sehir", lat:37.3939, lon:-76.6302, g:2, k:2,
  s:[{f:"1281-01-01",t:"1501-01-01",d:"__BOSLUK__"},
     {f:"1501-01-01",t:"1646-10-01",d:"powhatan"},
     {f:"1646-10-01",t:"1776-07-04",d:"ingiltere"},
     {f:"1776-07-04",t:"2000-12-31",d:"abd"}] },
// kaynak: Helen C. Rountree, "Pocahontas's People" (1990). Necotowance Antlaşması (Ekim 1646,
//         Encyclopedia Virginia) III. Anglo-Powhatan Savaşı'nı bitirdi, konfederasyonu haraçgüzar
//         statüye soktu — bağımsız siyasi varlığın fiilî sonu.
// k gerekçesi: Powhatan Konfederasyonu başkenti — k:2

{ ad:"Taos Pueblo", tur:"koy", lat:36.4361, lon:-105.5411, g:1, k:1,
  kasitli_bosluk:true, bos:"devletsiz", neden:"1281-1610 arasi Pueblo koyleri siyaseten OZERKTI: Ispanyol somurgeciliginden once var olan 70ten fazla koyun her biri, dini topluluklarin baskanlarindan olusan bir konseyle yonetiliyordu; ustlerinde merkezi bir devlet YOKTU. Ispanyol yerlesimi 1598te Onate ile basladi. kaynak: NPS (ABD Milli Park Servisi) + Britannica Pueblo peoples; TDV amerika maddesi Pueblo halklarini ANMIYOR (olculdu, tanecik boslugu).",
  s:[{f:"1610-01-01",t:"1680-08-10",d:"yeni-ispanya"},
     {f:"1680-08-10",t:"1692-08-01",d:"pueblo-bagimsizligi"},
     {f:"1692-08-01",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"1848-02-02",d:"meksika"},
     {f:"1848-02-02",t:"2000-12-31",d:"abd"}] },
{ ad:"Acoma Pueblo (Sky City)", tur:"koy", lat:34.9903, lon:-107.5814, g:1, k:1,
  kasitli_bosluk:true, bos:"devletsiz", neden:"1281-1610 arasi Pueblo koyleri siyaseten OZERKTI: Ispanyol somurgeciliginden once var olan 70ten fazla koyun her biri, dini topluluklarin baskanlarindan olusan bir konseyle yonetiliyordu; ustlerinde merkezi bir devlet YOKTU. Ispanyol yerlesimi 1598te Onate ile basladi. kaynak: NPS (ABD Milli Park Servisi) + Britannica Pueblo peoples; TDV amerika maddesi Pueblo halklarini ANMIYOR (olculdu, tanecik boslugu).",
  s:[{f:"1610-01-01",t:"1680-08-10",d:"yeni-ispanya"},
     {f:"1680-08-10",t:"1692-08-01",d:"pueblo-bagimsizligi"},
     {f:"1692-08-01",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"1848-02-02",d:"meksika"},
     {f:"1848-02-02",t:"2000-12-31",d:"abd"}] },
// kaynak: David J. Weber, "The Spanish Frontier in North America" (1992). 1610-1680 arası
//         bağımsız İspanyol öncesi site-devletleri değil, İspanyol dönemi başlangıcı — 1281-1610
//         arası bağımsız dönem bu araştırmanın kapsamında ayrıca modellenmedi.
// 🟢 1680-1692 Pueblo İsyanı boşluğu KAPATILDI — bkz. "pueblo-bagimsizligi" önerisi (Santa Fe
//    girdisinin altındaki not, aşağıda).
// k gerekçesi: büyük Pueblo yerleşimleri — k:1

{ ad:"Oraibi (Hopi, Üçüncü Mesa)", tur:"koy", lat:35.8908, lon:-110.6289, g:1, k:1,
  kasitli_bosluk:true, bos:"devletsiz",
  neden:"Hopi, 1680 Pueblo İsyanı'ndan sonra İspanyol misyonerleri kalıcı olarak GERİ ALMADI (1700'de Awatovi'yi bu yüzden kendi elleriyle yıktılar). Weber (1992) Hopi'nin 1821'e kadar fiilen bağımsız kaldığını açıkça yazıyor.",
  s:[] },
// kaynak: David J. Weber, "The Spanish Frontier in North America" (1992), s. 79-81.

{ ad:"Natchez (Grand Village)", tur:"sehir", lat:31.5451, lon:-91.3915, g:2, k:2,
  s:[{f:"1281-01-01",t:"1731-01-01",d:"natchez"},
     {f:"1731-01-01",t:"1763-02-10",d:"fransa"},
     {f:"1763-02-10",t:"1779-09-21",d:"ingiltere"},
     {f:"1779-09-21",t:"1798-04-07",d:"ispanya"},
     {f:"1798-04-07",t:"2000-12-31",d:"abd"}] },
// kaynak: Charles Hudson, "The Southeastern Indians" (1976) — "Büyük Güneş" teokratik şeflik.
//         1729 Natchez İsyanı ve 1730-31 Fransız misillemesiyle dağıtıldı. 1779-09-21: Baton
//         Rouge Muharebesi, Fort Panmure aynı şartlarla İspanya'ya geçti. "ispanya" (yeni-ispanya
//         DEĞİL) — Louisiana/Florida Küba Genel Kaptanlığı üzerinden yönetildi.
// k gerekçesi: teokratik şeflik başkenti — k:2

// HAYALET-KUNYE-1008-K · `creek-konfederasyonu` künyesi 1701-01-01'de başlıyor (kesinlik yuzyil); 1281→1701-01-01 dilimi → `__BOSLUK__`.
//   __BOSLUK__ = künyesi olmayan yerel yapı (Raipur emsali), 'kimsenin değil' DEĞİL; komşuya İTİLMEDİ.
{ ad:"Coweta (Creek/Mvskoke Konfederasyonu — Aşağı Kasabalar merkezi)", tur:"sehir", lat:32.4699, lon:-84.9877, g:2, k:2,
  s:[{f:"1281-01-01",t:"1701-01-01",d:"__BOSLUK__"},
     {f:"1701-01-01",t:"1832-03-24",d:"creek-konfederasyonu"},
     {f:"1832-03-24",t:"2000-12-31",d:"abd"}] },
// kaynak: Hudson (1976); Encyclopedia of Alabama "Creeks in Alabama" — Cusseta Antlaşması
//         (24 Mart 1832) hukuki devir tarihi (fiilî sürgün 1836-37).
// k gerekçesi: Creek konfederasyonunun "ana kasaba"sı — k:2

{ ad:"Chota (Cherokee Overhill Başkenti)", tur:"sehir", lat:35.6389, lon:-84.1727, g:2, k:2,
  s:[{f:"1281-01-01",t:"1791-07-02",d:"cherokee"},
     {f:"1791-07-02",t:"2000-12-31",d:"abd"}] },
// kaynak: Tennessee Encyclopedia, "Chota" md.; Treaty of Holston (2 Temmuz 1791, Avalon
//         Project/Yale Law School). ⚠️ Chota Kasım 1780'de yakıldı — hukuki devirden 11 ay önce,
//         "hayalet devlet" endişesiyle örtüşen bir vaka, bkz. dosya başı.
// k gerekçesi: 18. yy Cherokee (Overhill) başkenti — k:2

{ ad:"Nanih Waiya (Choctaw Konfederasyonu, kutsal/köken merkezi)", tur:"koy", lat:32.9865, lon:-89.1590, g:1, k:2,
  s:[{f:"1281-01-01",t:"1830-09-27",d:"choctaw"},
     {f:"1830-09-27",t:"2000-12-31",d:"abd"}] },
// kaynak: Patricia Galloway, "Choctaw Genesis, 1500-1700" (Univ. of Nebraska Press, 1995) —
//         üç bölgeli gevşek konfederasyon, tek başkenti yok, bu nokta SEMBOLİK merkezi temsil
//         ediyor. Dancing Rabbit Creek Antlaşması, 27 Eylül 1830.
// k gerekçesi: konfederasyonun köken/kutsal merkezi — k:2

{ ad:"Quebec", tur:"sehir", lat:46.8219, lon:-71.2187, g:2, k:2, kur:"1608-07-03",
  s:[{f:"1608-07-03",t:"1763-02-10",d:"fransa"},{f:"1763-02-10",t:"1867-07-01",d:"ingiliz-kuzey-amerika"},{f:"1867-07-01",t:"2000-12-31",d:"kanada"}] },
{ ad:"Montreal (Ville-Marie)", tur:"sehir", lat:45.5019, lon:-73.5674, g:2, k:1, kur:"1642-05-17",
  s:[{f:"1642-05-17",t:"1763-02-10",d:"fransa"},{f:"1763-02-10",t:"1867-07-01",d:"ingiliz-kuzey-amerika"},{f:"1867-07-01",t:"2000-12-31",d:"kanada"}] },
// kaynak: W.J. Eccles, "The French in North America, 1500-1783" (rev. ed. 1998) — Champlain'in
//         Quebec'i (3 Temmuz 1608) ve Maisonneuve'ün Ville-Marie'yi (17 Mayıs 1642) kuruluşu.
// k gerekçesi: Yeni Fransa'nın başkenti k:2, Montreal büyük merkez k:1

{ ad:"New Orleans", tur:"sehir", lat:29.9511, lon:-90.0715, g:2, k:2, kur:"1718-01-01",
  s:[{f:"1718-01-01",t:"1763-11-03",d:"fransa"},
     {f:"1763-11-03",t:"1803-04-30",d:"ispanya"},
     {f:"1803-04-30",t:"1803-12-20",d:"ispanya"},
     {f:"1803-12-20",t:"2000-12-31",d:"abd"}] },
// kaynak: Eccles (1998); kesin kuruluş GÜNÜ tartışmalı (Richard Campanella, nola.com) — YYYY-01-01.
// ⚠️ DÜZELTME (13 Ağustos, Değişmez 1b denetiminde bulundu): kaynak ajanının orijinal
// önerisinde 1800-1803 arası "fransa" yazılmıştı ama "fransa" kimliği 1792-09-22'de bitiyor —
// DEVLETİN ÖMRÜNÜ AŞMA hatası olurdu. İlk düzeltmede yorumda "ispanya ile kapatıldı" dendi ama
// DİZİYE YAZILMADI — 1800-10-01→1803-04-30 arası fiilen 9 aylık İÇ BOŞLUK kalmıştı (denetim
// yakaladı). Şimdi 1763-11-03→1803-04-30 TEK "ispanya" dönemi olarak birleştirildi: San
// Ildefonso (1800-10-01, gizli Fransa'ya devir) ile Louisiana Satışı (1803-04-30) arası fiilen
// İspanyol yönetimi sürdüğü için (devir gizliydi, fiilî teslim hiç olmadı) ayrı dönem gerekmiyordu.
// k gerekçesi: Louisiana'nın idari merkezi — k:2

{ ad:"New Amsterdam (New York)", tur:"sehir", lat:40.7128, lon:-74.0060, g:2, k:2, kur:"1624-01-01",
  s:[{f:"1624-01-01",t:"1664-09-08",d:"hollanda"},
     {f:"1664-09-08",t:"1776-07-04",d:"ingiltere"},
     {f:"1776-07-04",t:"2000-12-31",d:"abd"}] },
{ ad:"Fort Orange (Albany)", tur:"sehir", lat:42.6526, lon:-73.7562, g:1, k:1, kur:"1624-01-01",
  s:[{f:"1624-01-01",t:"1664-09-08",d:"hollanda"},
     {f:"1664-09-08",t:"1776-07-04",d:"ingiltere"},
     {f:"1776-07-04",t:"2000-12-31",d:"abd"}] },
// kaynak: Alan Taylor, "American Colonies" (2001) — Hollanda Batı Hindistan Kumpanyası, 1624
//         (gün belirsiz). 8 Eylül 1664: Stuyvesant'ın İngiliz filosuna teslimi.
// k gerekçesi: Yeni Hollanda'nın başkenti k:2, Fort Orange kürk ticareti üssü k:1

// 14 Ekim 2026 (TEYIT-KARAR-1014, Emre kararı): kuruluş 1607-05-14 → 1607-05-13 — Oxford Companion
//   to United States History «founding Jamestown on 13 May»; kronoloji_ingiltere maddesiyle birlikte.
{ ad:"Jamestown", tur:"sehir", lat:37.1997, lon:-76.7880, g:2, k:2, kur:"1607-05-13",
  s:[{f:"1607-05-13",t:"1776-07-04",d:"ingiltere"},
     {f:"1776-07-04",t:"2000-12-31",d:"abd"}] },
{ ad:"Plymouth (Massachusetts)", tur:"sehir", lat:41.9584, lon:-70.6673, g:1, k:1, kur:"1620-12-21",
  s:[{f:"1620-12-21",t:"1776-07-04",d:"ingiltere"},
     {f:"1776-07-04",t:"2000-12-31",d:"abd"}] },
{ ad:"Boston (Massachusetts)", tur:"sehir", lat:42.3601, lon:-71.0589, g:2, k:2, kur:"1630-09-07",
  s:[{f:"1630-09-07",t:"1776-07-04",d:"ingiltere"},
     {f:"1776-07-04",t:"2000-12-31",d:"abd"}] },
{ ad:"Philadelphia", tur:"sehir", lat:39.9526, lon:-75.1652, g:2, k:2, kur:"1682-10-27",
  s:[{f:"1682-10-27",t:"1776-07-04",d:"ingiltere"},
     {f:"1776-07-04",t:"2000-12-31",d:"abd"}] },
{ ad:"Charleston (Charles Town)", tur:"sehir", lat:32.7839, lon:-79.9343, g:1, k:1, kur:"1670-04-15",
  s:[{f:"1670-04-15",t:"1776-07-04",d:"ingiltere"},
     {f:"1776-07-04",t:"2000-12-31",d:"abd"}] },
{ ad:"Savannah", tur:"sehir", lat:32.0809, lon:-81.0912, g:1, k:1, kur:"1733-02-12",
  s:[{f:"1733-02-12",t:"1776-07-04",d:"ingiltere"},
     {f:"1776-07-04",t:"2000-12-31",d:"abd"}] },
// kaynak: Alan Taylor, "American Colonies" (2001) — Jamestown (14 Mayıs 1607), Plymouth
//         (21 Aralık 1620), Boston (7 Eylül 1630), Philadelphia (27 Ekim 1682), Charles Town
//         (15 Nisan 1670), Savannah (12 Şubat 1733).
// k gerekçesi: 13 koloninin büyük şehirleri — k:1-2

{ ad:"Detroit (Fort Pontchartrain du Détroit)", tur:"sehir", lat:42.3356, lon:-83.0494, g:1, k:1, kur:"1701-07-24",
  s:[{f:"1701-07-24",t:"1763-02-10",d:"fransa"},
     {f:"1763-02-10",t:"1796-07-11",d:"ingiltere"},
     {f:"1796-07-11",t:"2000-12-31",d:"abd"}] },
// kaynak: Eccles (1998) — Cadillac'ın kuruluşu, 24 Temmuz 1701. 1796-07-11: Jay Antlaşması
//         gereği fiilî devir — 1783 Paris Antlaşması'ndan 13 yıl SONRA (hukuki sınır ≠ fiilî denetim).
// k gerekçesi: Büyük Göller kürk ticareti üssü — k:1

{ ad:"Port Royal (Acadia)", tur:"sehir", lat:44.7442, lon:-65.5058, g:1, k:1, kur:"1605-01-01",
  s:[{f:"1605-01-01",t:"1713-04-11",d:"fransa"},{f:"1713-04-11",t:"1763-02-10",d:"ingiltere"},{f:"1763-02-10",t:"1867-07-01",d:"ingiliz-kuzey-amerika"},{f:"1867-07-01",t:"2000-12-31",d:"kanada"}] },
// kaynak: The Canadian Encyclopedia, "Port-Royal" md. — de Monts/Champlain, 1605 (gün belirsiz).
//         1713-04-11: Utrecht Antlaşması, Acadia'nın İngiltere'ye devri (Quebec/Montreal'den 50 yıl önce).
// k gerekçesi: Acadia'nın idari merkezi — k:1

{ ad:"St. Augustine", tur:"sehir", lat:29.8947, lon:-81.3145, g:2, k:2, kur:"1565-09-08",
  s:[{f:"1565-09-08",t:"1763-02-10",d:"ispanya"},
     {f:"1763-02-10",t:"1783-09-03",d:"ingiltere"},
     {f:"1783-09-03",t:"1821-07-10",d:"ispanya"},
     {f:"1821-07-10",t:"2000-12-31",d:"abd"}] },
// kaynak: Weber (1992) — Pedro Menéndez de Avilés, 8 Eylül 1565. "ispanya" (yeni-ispanya
//         DEĞİL) — Florida, Küba Genel Kaptanlığı'na bağlıydı. 1821-07-10: Adams-Onís Antlaşması
//         devir töreni, Meksika bağımsızlığından (27 Eylül 1821) ÖNCE — doğrudan İspanya'dan ABD'ye.
// k gerekçesi: Florida'nın idari merkezi — k:2

{ ad:"Pensacola", tur:"sehir", lat:30.4213, lon:-87.2169, g:1, k:1, kur:"1698-11-17",
  s:[{f:"1698-11-17",t:"1763-02-10",d:"ispanya"},
     {f:"1763-02-10",t:"1781-05-08",d:"ingiltere"},
     {f:"1781-05-08",t:"1821-07-17",d:"ispanya"},
     {f:"1821-07-17",t:"2000-12-31",d:"abd"}] },
// kaynak: Weber (1992) — Presidio Santa María de Galve, 17 Kasım 1698. 1781-05-08: Gálvez'in
//         Pensacola Kuşatması. 1821-07-17: Batı Florida'nın devir töreni (St. Augustine'den 1 hafta sonra).
// k gerekçesi: Batı Florida'nın idari merkezi — k:1

{ ad:"Santa Fe", tur:"sehir", lat:35.6870, lon:-105.9378, g:2, k:2, kur:"1610-01-01",
  s:[{f:"1610-01-01",t:"1680-08-10",d:"yeni-ispanya"},
     {f:"1680-08-10",t:"1692-08-01",d:"pueblo-bagimsizligi"},
     {f:"1692-08-01",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"1848-02-02",d:"meksika"},
     {f:"1848-02-02",t:"2000-12-31",d:"abd"}] },
// ⚠️ DÜZELTME (13 Ağustos, Değişmez 1b'de 3 iç boşluk bulundu — Taos/Acoma/Santa Fe): 10
// Ağustos 1680 Pueblo İsyanı İspanyolları Santa Fe'den kovdu, 12 yıl boyunca Pueblo halkları
// FİİLEN bağımsızdı (Vargas'ın "kansız yeniden fethi" Ağustos 1692). Kaynak (Weber 1992) bunu
// AÇIKÇA anlatıyor — bu yüzden kasitli_bosluk/devletsiz değil, YENİ BİR KİMLİK önerildi:
// "pueblo-bagimsizligi" (bu üç noktanın üçünde de kullanıldı, tutarlılık için).
// kaynak: David J. Weber, "The Spanish Frontier in North America" (1992) — Pueblo İsyanı 10
//         Ağustos 1680 (kesin, iyi belgeli), Vargas'ın yeniden fethi Ağustos 1692 (gün belirsiz).
{ ad:"San Antonio (Misyon San Antonio de Valero)", tur:"sehir", lat:29.4260, lon:-98.4861, g:1, k:1, kur:"1718-05-01",
  s:[{f:"1718-05-01",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"1836-03-02",d:"meksika"},
     {f:"1836-03-02",t:"1845-12-29",d:"teksas-cumhuriyeti"},
     {f:"1845-12-29",t:"2000-12-31",d:"abd"}] },
// ⚠️ DÜZELTME (13 Ağustos, Değişmez 1b denetiminde bulundu): 1836-1845 arası Teksas Cumhuriyeti
// dönemi ilk teslimde bilerek BOŞ bırakılmış, "teksas-cumhuriyeti" önerisi header'da yazılı
// duruyordu ama diziye HİÇ İŞLENMEMİŞTİ. Şimdi kullanıldı — kimlik data/devletler.js'e
// eklenmeden bu bölge boyanmayacak, ama Değişmez 1b'nin gördüğü iç boşluk artık yok.
{ ad:"San Diego (Misyon San Diego de Alcalá)", tur:"sehir", lat:32.7157, lon:-117.1611, g:1, k:1, kur:"1769-07-16",
  s:[{f:"1769-07-16",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"1848-02-02",d:"meksika"},
     {f:"1848-02-02",t:"2000-12-31",d:"abd"}] },
{ ad:"San Francisco (Misyon San Francisco de Asís)", tur:"sehir", lat:37.7599, lon:-122.4269, g:1, k:1, kur:"1776-06-29",
  s:[{f:"1776-06-29",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"1848-02-02",d:"meksika"},
     {f:"1848-02-02",t:"2000-12-31",d:"abd"}] },
// kaynak: Weber (1992). Santa Fe: Vali Pedro de Peralta, 1610; Pueblo İsyanı 10 Ağustos 1680;
//         Vargas'ın yeniden fethi Ağustos 1692. San Antonio: Misyon Valero, 1 Mayıs 1718. San
//         Diego: Junípero Serra, 16 Temmuz 1769. San Francisco: Misyon Dolores, 29 Haziran 1776.
// 🟢 San Antonio 1836-1845 arası (Teksas Cumhuriyeti) artık "teksas-cumhuriyeti" ile DOLU
// (13 Ağustos, Değişmez 1b düzeltmesi — bkz. San Antonio'nun kendi girdisi yukarıda).
// k gerekçesi: İspanyol Kuzey Amerika'sının güneybatı sınır şehirleri — k:1-2

{ ad:"Novoarkhangelsk (Sitka)", tur:"sehir", lat:57.0560, lon:-135.3287, g:1, k:2, kur:"1799-07-01",
  s:[{f:"1799-07-01",t:"1867-10-18",d:"rusya"},
     {f:"1867-10-18",t:"2000-12-31",d:"abd"}] },
// kaynak: Britannica "Sitka"/"Alexander Baranov" — Baranov'un ilk kalesi Temmuz 1799.
// ⚠️ 1802-1804 arası ~2 yıllık kesinti (Tlingit saldırısı) — bkz. dosya başı ③.
// k gerekçesi: Rus Amerika'sının başkenti — k:2

{ ad:"Büyük Ovalar (orta kesim)", tur:"bolge", lat:43.0, lon:-100.0, g:0, k:0,
  kasitli_bosluk:true, bos:"devletsiz",
  neden:"Standart akademik Büyük Ovalar tarihyazımı XIX. yüzyıla kadar bölgede birleşik, toprak iddiası taşıyan bir siyasi otorite tanımlamıyor — göçebe atlı kabile konfederasyonları var ama sabit sınırlı 'devlet' kategorisine girmiyor." },
// 🔴 EMEKLİ — 18 Ağustos 2026, Emre'nin onayıyla (dolgu noktası ölçümü).
//    Kaldırılınca toprak: BOŞ kalır
//    Gerekçe: A1 yarıçap tavanı (uret_petek.py:699) dolgunun işini yapısal
//    olarak yapıyor; bu nokta emilmeyi önlemek için konmuş bir HİLEYDİ ve
//    uret_petek.py:696 zaten emekli edilebileceklerini yazıyordu.
//    Ölçüm: arac/olc_ekleyici.py · scratchpad/olc_dolgu.py
//    ⚠️ SİLİNMEDİ, YORUMLANDI — araştırılmış veri geri alınabilir olmalı.
// { ad:"Kanada Arktiği / Kuzeyi", tur:"bolge", lat:70.0, lon:-95.0, g:0, k:0,
//   kasitli_bosluk:true, bos:"devletsiz",
//   neden:"İnuit toplumları, standart akademik konsensüste merkezî bir siyasi otorite ya da toprak-devlet iddiası taşımayan, akrabalık/av bölgesi temelli organizasyonlarla tanımlanır." },
// kaynak: standart akademik Kuzey Amerika tarihyazımı — kaynak KONUŞUYOR ve devletsiz diyor.

// ============================================================================
// 4) KARAYİPLER VE RÍO DE LA PLATA
// ============================================================================

{ ad:"Jaragua (Taino cacicazgosu)", tur:"bolge", lat:18.5108, lon:-72.6338, g:0, k:0,
  kasitli_bosluk:true, bos:"devletsiz",
  neden:"Beş büyük Taino cacicazgosundan biri (Behechio, sonra Anacaona); kaynak siyasi birleşik otoriteyi AÇIKÇA tanımlıyor. 1503'te Vali Ovando'nun Yaguana katliamıyla fiilen yıkıldı.",
  s:[{f:"1503-01-01",t:"1697-09-20",d:"ispanya"},
     {f:"1697-09-20",t:"1792-09-22",d:"fransa"},
     {f:"1792-09-22",t:"1804-01-01",d:"fransa-cumhuriyet"},
     {f:"1804-01-01",t:"2000-12-31",d:"haiti"}] },
// kaynak: Samuel M. Wilson, "Hispaniola: Caribbean Chiefdoms in the Age of Columbus" (Univ. of
//         Alabama Press, 1990). Ryswick Antlaşması (1697-09-20) adanın batı üçte birini Fransa'ya verdi.

{ ad:"Higüey (Taino cacicazgosu)", tur:"bolge", lat:18.6144, lon:-68.7047, g:0, k:0,
  kasitli_bosluk:true, bos:"devletsiz",
  neden:"Beş büyük Taino cacicazgosundan biri (Cayacoa, sonra Cotubanamá); Higüey Savaşı (1503-1504) ile yıkıldı.",
  s:[{f:"1504-01-01",t:"1795-07-22",d:"ispanya"},
     {f:"1795-07-22",t:"1809-07-09",d:"fransa-cumhuriyet"},
     {f:"1809-07-09",t:"1822-02-09",d:"ispanya"},
     {f:"1822-02-09",t:"1844-02-27",d:"haiti"},
     {f:"1844-02-27",t:"1861-03-18",d:"dominik-cumhuriyeti"},
     {f:"1861-03-18",t:"1865-03-03",d:"ispanya"},
     {f:"1865-03-03",t:"2000-12-31",d:"dominik-cumhuriyeti"}] },
// kaynak: Wilson (1990); latinamericanstudies.org (Bartolomé de las Casas'a dayanan derleme,
//         akademik anlatı ile çapraz doğrulandı).

{ ad:"Santo Domingo", tur:"sehir", lat:18.4861, lon:-69.9312, g:1, k:1, kur:"1496-01-01",
  s:[{f:"1496-01-01",t:"1795-07-22",d:"ispanya"},
     {f:"1795-07-22",t:"1809-07-09",d:"fransa-cumhuriyet"},
     {f:"1809-07-09",t:"1822-02-09",d:"ispanya"},
     {f:"1822-02-09",t:"1844-02-27",d:"haiti"},
     {f:"1844-02-27",t:"1861-03-18",d:"dominik-cumhuriyeti"},
     {f:"1861-03-18",t:"1865-03-03",d:"ispanya"},
     {f:"1865-03-03",t:"2000-12-31",d:"dominik-cumhuriyeti"}] },
// kaynak: BlackPast.org "Santo Domingo de Guzman" (1496, Bartholomew Columbus), UNESCO Dünya
//         Mirası dosyasıyla çapraz doğrulandı; Frank Moya Pons, "The Dominican Republic: A
//         National History" (Markus Wiener, rev. ed. 2010) — standart akademik monografi.
//         1795-07-22: Basel Antlaşması. 1809-07-09: İspanyol yeniden fethi. 1822-02-09: Haiti
//         ilhakı. 1844-02-27: Dominik bağımsızlığı. 1861-03-18: İspanya'ya gönüllü yeniden ilhak.
//         1865-03-03: Restorasyon Savaşı zaferi.
// k gerekçesi: adanın ilk ve en büyük İspanyol şehri — k:1

{ ad:"Baracoa", tur:"sehir", lat:20.3467, lon:-74.4958, g:0, k:3, kur:"1511-08-15",
  s:[{f:"1511-08-15",t:"1898-12-10",d:"ispanya"},
     {f:"1898-12-10",t:"1902-05-20",d:"abd"},
     {f:"1902-05-20",t:"2000-12-31",d:"kuba-cumhuriyeti"}] },
// kaynak: peoplesworld.org (500. yıldönümü haberi) + Diego Velázquez biyografik girişi
//         (Encyclopedia.com) çapraz doğrulandı — Küba'nın ilk yerleşimi ve ilk başkenti (1515'e kadar).
// k gerekçesi: 1515'ten sonra kademesi düştü — k:3

{ ad:"Santiago de Cuba", tur:"sehir", lat:20.0247, lon:-75.8219, g:1, k:2, kur:"1515-07-25",
  s:[{f:"1515-07-25",t:"1898-12-10",d:"ispanya"},
     {f:"1898-12-10",t:"1902-05-20",d:"abd"},
     {f:"1902-05-20",t:"2000-12-31",d:"kuba-cumhuriyeti"}] },
// kaynak: standart akademik/kurumsal tarih — 1515-1553 arası Küba'nın başkenti (Velázquez).
// k gerekçesi: 1553'te başkentlik Havana'ya geçti — k:2

{ ad:"Havana (La Habana)", tur:"sehir", lat:23.1136, lon:-82.3666, g:1, k:1, kur:"1519-11-16",
  s:[{f:"1519-11-16",t:"1762-08-13",d:"ispanya"},
     {f:"1762-08-13",t:"1763-02-10",d:"ingiltere"},
     {f:"1763-02-10",t:"1898-12-10",d:"ispanya"},
     {f:"1898-12-10",t:"1902-05-20",d:"abd"},
     {f:"1902-05-20",t:"2000-12-31",d:"kuba-cumhuriyeti"}] },
// kaynak: FIU Institute for Cuban Studies; Library of Congress "Cuba in 1898"; Louis A. Pérez
//         Jr., "Cuba: Between Reform and Revolution" (Oxford UP) — 1762-08-13 Havana teslimi,
//         1763-02-10 Paris Antlaşması, 1898-12-10 Paris Antlaşması (1898), 1902-05-20 Küba Cumhuriyeti.
// k gerekçesi: Küba'nın idari başkenti (1553'ten) — k:1

{ ad:"Camagüey bölgesi (Taino)", tur:"bolge", lat:21.3808, lon:-77.9169, g:0, k:0,
  kasitli_bosluk:true, bos:"devletsiz",
  neden:"Küba'nın orta kesimindeki Taino/Ciboney toprağı; Diego Velázquez'in 1513-1515 fetih seferleri bölgeyi İspanyol idaresine soktu.",
  s:[{f:"1514-01-01",t:"1898-12-10",d:"ispanya"},
     {f:"1898-12-10",t:"1902-05-20",d:"abd"},
     {f:"1902-05-20",t:"2000-12-31",d:"kuba-cumhuriyeti"}] },
// kaynak: Wilson (1990); Irving Rouse, "The Tainos" (Yale UP, 1992).
// 🔴 DİKKAT: devletler.js'te "kuba" id'si ZATEN VAR ama Orta Afrika'daki Kuba Krallığı —
//    bu yüzden id kesinlikle "kuba-cumhuriyeti", "kuba" KULLANILMADI.

{ ad:"Caparra", tur:"sehir", lat:18.4255, lon:-66.1111, g:0, k:3, kur:"1508-01-01",
  bit:"1521-01-01",
  s:[{f:"1508-01-01",t:"1521-01-01",d:"ispanya"}] },
  // 1521'de nüfus bugünkü San Juan adacığına taşındı, Caparra terk edildi.
// kaynak: EBSCO Research Starters "Puerto Rico Is Discovered by Europeans"; Fernando Picó,
//         "History of Puerto Rico" (Markus Wiener, 2006).
// k gerekçesi: Porto Riko'nun ilk İspanyol yerleşimi — k:3
// 🟢 DÜZELTME (14 Ağustos, koordinatör M-0047 hükmü): `kasitli_bosluk`/`bos:` KALDIRILDI,
// yalnız `bit:` bırakıldı — "burası kasten boş" DEĞİL "şehir artık yok" (§11 ayrımı).
// ⚠️ AMA bu, HARİTA
// yani Caparra'nın petek'i 1521 sonrası hâlâ EN YAKIN KOMŞUYA emilecek — coğrafi
// olarak muhtemelen doğru (San Juan'a çok yakın, aynı ada) ama ÖLÇÜLMEDİ.

{ ad:"San Germán", tur:"sehir", lat:18.0803, lon:-67.0450, g:0, k:2, kur:"1512-01-01",
  s:[{f:"1512-01-01",t:"1898-12-10",d:"ispanya"},
     {f:"1898-12-10",t:"1923-10-29",d:"abd"},{f:"1923-10-29",t:"2000-12-31",d:"puerto-riko",kaynak:"Britannica 'Puerto Rico' (Commonwealth 1952-07-25)"}] },
// kaynak: Britannica "San Germán"; topuertorico.org — Porto Riko'nun ikinci en eski yerleşimi.
// k gerekçesi: adanın güney idari bölgesi merkezi — k:2

{ ad:"San Juan", tur:"sehir", lat:18.4655, lon:-66.1057, g:1, k:1, kur:"1521-01-01",
  s:[{f:"1521-01-01",t:"1898-12-10",d:"ispanya"},
     {f:"1898-12-10",t:"1923-10-29",d:"abd"},{f:"1923-10-29",t:"2000-12-31",d:"puerto-riko",kaynak:"Britannica 'Puerto Rico' (Commonwealth 1952-07-25)"}] },
// kaynak: EBSCO Research Starters; Picó (2006). 1898 sonrası Porto Riko ABD toprağı olarak
//         KALDI (bağımsızlık yok), yeni kimlik gerekmiyor.
// k gerekçesi: Porto Riko'nun idari başkenti (1521'den) — k:1

{ ad:"Spanish Town (Villa de la Vega)", tur:"sehir", lat:17.9911, lon:-76.9574, g:0, k:1, kur:"1534-01-01",
  s:[{f:"1534-01-01",t:"1655-05-10",d:"ispanya"},
     {f:"1655-05-10",t:"1962-08-06",d:"ingiltere"},{f:"1962-08-06",t:"2000-12-31",d:"jamaika",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"}] },
// kaynak: Jamaica National Heritage Trust; Clinton V. Black, "History of Jamaica" (1958) —
//         1534-1872 arası Jamaika'nın başkenti.
// k gerekçesi: Jamaika'nın idari başkenti (1872'ye kadar) — k:1

{ ad:"Port Royal", tur:"liman", lat:17.9370, lon:-76.8318, g:0, k:2, kur:"1655-01-01",
  s:[{f:"1655-01-01",t:"1962-08-06",d:"ingiltere"},{f:"1962-08-06",t:"2000-12-31",d:"jamaika",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"}] },
// kaynak: Black (1958) — ana deniz/korsan üssü. 1692 depremi (7 Haziran) kentin 2/3'ünü yıktı
//         ama egemenlik değişmedi.
// k gerekçesi: deniz/korsan üssü — k:2

{ ad:"Kingston", tur:"sehir", lat:17.9712, lon:-76.7936, g:1, k:1, kur:"1692-01-01",
  s:[{f:"1692-01-01",t:"1962-08-06",d:"ingiltere"},{f:"1962-08-06",t:"2000-12-31",d:"jamaika",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"}] },
// kaynak: Black (1958) — Port Royal depreminin ardından kuruldu; başkentlik 1872'de geçti.
// k gerekçesi: 1872'den itibaren Jamaika'nın başkenti — k:1

{ ad:"San José de Oruña (St. Joseph)", tur:"kale", lat:10.6516, lon:-61.4128, g:0, k:2, kur:"1592-01-01",
  s:[{f:"1592-01-01",t:"1797-02-18",d:"ispanya"},
     {f:"1797-02-18",t:"1962-08-31",d:"ingiltere"},{f:"1962-08-31",t:"2000-12-31",d:"trinidad-tobago",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"}] },
// kaynak: Bridget Brereton, "A History of Modern Trinidad, 1783-1962" (Heinemann, 1981); Eric
//         Williams, "History of the People of Trinidad and Tobago" (1962) — Antonio de Berrio'nun
//         kurduğu ilk başkent (1784'e kadar). 1797-02-18: Abercromby'nin fethi, Vali Chacón teslimi.
// k gerekçesi: Trinidad'ın ilk İspanyol başkenti — k:2

{ ad:"Port of Spain (Puerto de España)", tur:"sehir", lat:10.6549, lon:-61.5019, g:1, k:1, kur:"1757-01-01",
  s:[{f:"1757-01-01",t:"1797-02-18",d:"ispanya"},
     {f:"1797-02-18",t:"1962-08-31",d:"ingiltere"},{f:"1962-08-31",t:"2000-12-31",d:"trinidad-tobago",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"}] },
// kaynak: Brereton (1981) — Vali Pedro de la Moneda'nın 1757 taşınma kararı.
// k gerekçesi: Trinidad'ın idari başkenti (1757'den) — k:1

{ ad:"Georgetown (Stabroek)", tur:"sehir", lat:6.8013, lon:-58.1551, g:1, k:1, kur:"1781-01-01",
  s:[{f:"1781-01-01",t:"1784-01-01",d:"fransa"},{f:"1784-01-01",t:"1796-04-22",d:"hollanda"},{f:"1796-04-22",t:"1802-03-27",d:"ingiltere"},{f:"1802-03-27",t:"1803-09-01",d:"hollanda"},{f:"1803-09-01",t:"1831-01-01",d:"ingiltere"},{f:"1831-01-01",t:"1966-05-26",d:"ingiliz-guyanasi"},{f:"1966-05-26",t:"2000-12-31",d:"guyana",kaynak:"Bagimsizlik 1966-05-26 (Britannica); Cumhuriyet 1970 ayni kimlik"}] },
// kaynak: Wikipedia "Essequibo (colony)"/"Demerara" akademik ansiklopedi girişleri (Anglo-Dutch
//         Treaty of London 1814 ile çapraz doğrulandı); Cornelis Ch. Goslinga, "A Short History
//         of the Netherlands Antilles and Surinam" (Martinus Nijhoff, 1979).
// k gerekçesi: Demerara-Essequibo'nun idari merkezi — k:1

{ ad:"New Amsterdam (Berbice)", tur:"sehir", lat:6.2495, lon:-57.5207, g:0, k:2, kur:"1627-01-01",
  s:[{f:"1627-01-01",t:"1796-04-22",d:"hollanda"},{f:"1796-04-22",t:"1802-03-27",d:"ingiltere"},{f:"1802-03-27",t:"1803-09-01",d:"hollanda"},{f:"1803-09-01",t:"1831-01-01",d:"ingiltere"},{f:"1831-01-01",t:"1966-05-26",d:"ingiliz-guyanasi"},{f:"1966-05-26",t:"2000-12-31",d:"guyana",kaynak:"Bagimsizlik 1966-05-26 (Britannica); Cumhuriyet 1970 ayni kimlik"}] },
// kaynak: Britannica "Berbice"; Goslinga (1979) — Berbice kolonisi 1627 kuruluşu (ilk başkent
//         Fort Nassau; New Amsterdam kasabası 1790'da yeni başkent oldu, basitlik için tek nokta).
// k gerekçesi: Berbice kolonisinin merkezi — k:2

{ ad:"Paramaribo", tur:"sehir", lat:5.8520, lon:-55.2038, g:1, k:1, kur:"1630-01-01",
  s:[{f:"1630-01-01",t:"1667-07-31",d:"ingiltere"},{f:"1667-07-31",t:"1799-01-01",d:"hollanda-guyanasi"},{f:"1799-01-01",t:"1802-03-27",d:"ingiltere"},{f:"1802-03-27",t:"1804-01-01",d:"hollanda-guyanasi"},{f:"1804-01-01",t:"1816-01-01",d:"ingiltere"},{f:"1816-01-01",t:"1975-11-25",d:"hollanda-guyanasi"},{f:"1975-11-25",t:"2000-12-31",d:"surinam",kaynak:"Britannica (ilgili devlet/ülke maddesi)"}] },
// kaynak: Wikipedia "Treaty of Breda (1667)"; mapofsuriname.org (Surinam Ulusal Arşivi destekli);
//         Goslinga (1979) — Breda Antlaşması (31 Temmuz 1667) "uti possidetis" ile Hollanda'ya
//         bıraktı (İngiltere karşılığında New York'u aldı — ünlü takas).
// k gerekçesi: Surinam'ın idari başkenti — k:1

{ ad:"Cayenne", tur:"sehir", lat:4.9346, lon:-52.3303, g:1, k:1, kur:"1643-01-01",
  s:[{f:"1643-01-01",t:"1792-09-22",d:"fransa"},{f:"1792-09-22",t:"1809-01-14",d:"fransa-cumhuriyet"},{f:"1809-01-14",t:"1817-01-01",d:"portekiz"},{f:"1817-01-01",t:"2000-12-31",d:"fransiz-guyanasi"}] },
// kaynak: Wikipedia "Invasion of Cayenne (1809)" — Fort Cépérou kuruluşu (1643). 1809'da
//         İngiliz-Portekiz filosu Brezilya'daki Portekiz Krallığı'na devretti; 1814 Paris
//         Antlaşması iade kararı verdi, fiilî tahliye 1817'ye kadar sürdü. "fransa-cumhuriyet"
//         devletler.js'te ZATEN VAR (satır 780), yeni kimlik gerekmedi.
// k gerekçesi: Fransız Guyanası'nın idari başkenti — k:1

{ ad:"Colonia del Sacramento", tur:"sehir", lat:-34.4723, lon:-57.8410, g:0, k:2, kur:"1680-01-01",
  s:[{f:"1680-01-01",t:"1705-01-01",d:"portekiz"},
     {f:"1705-01-01",t:"1715-01-01",d:"ispanya"},
     {f:"1715-01-01",t:"1762-01-01",d:"portekiz"},
     {f:"1762-01-01",t:"1763-02-10",d:"ispanya"},
     {f:"1763-02-10",t:"1777-06-04",d:"portekiz"},
     {f:"1777-06-04",t:"1814-06-20",d:"ispanya"},
     {f:"1814-06-20",t:"1817-01-01",d:"arjantin-cumhuriyeti"},
     {f:"1817-01-01",t:"1822-09-07",d:"portekiz"},
     {f:"1822-09-07",t:"1828-08-27",d:"brezilya-imparatorlugu"},
     {f:"1828-08-27",t:"2000-12-31",d:"uruguay-cumhuriyeti"}] },
// kaynak: Colonial Voyage akademik tarih portalı; Wikipedia "First Treaty of San Ildefonso"/
//         "Spanish–Portuguese War (1776-1777)"; John Lynch, "The Spanish American Revolutions,
//         1808-1826" (2. bs. 1986). BEŞ el değiştirme (1680→1705→1715→1762→1763→1777) Buenos
//         Aires'in tam karşısındaki bu kalenin 100 yıllık tartışmalı statüsünü yansıtıyor.
// 🟡 1814-1817 arası basitleştirme AÇIKÇA işaretli — bölge fiilen Buenos Aires'le savaş
//    hâlindeki Artigas'ın Liga Federal'ine bağlıydı, bu akım için kimlik yok (gelecek araştırma borcu).
// k gerekçesi: Río de la Plata'nın en tartışmalı sınır kalesi — k:2

{ ad:"Montevideo", tur:"sehir", lat:-34.9011, lon:-56.1645, g:1, k:1, kur:"1726-12-24",
  s:[{f:"1726-12-24",t:"1814-06-20",d:"ispanya"},
     {f:"1814-06-20",t:"1817-01-01",d:"arjantin-cumhuriyeti"},
     {f:"1817-01-01",t:"1822-09-07",d:"portekiz"},
     {f:"1822-09-07",t:"1828-08-27",d:"brezilya-imparatorlugu"},
     {f:"1828-08-27",t:"2000-12-31",d:"uruguay-cumhuriyeti"}] },
// kaynak: Wikipedia "Timeline of Montevideo"; John Street, "Artigas and the Emancipation of
//         Uruguay" (Cambridge UP, 1959) — 1814-06-20 Alvear'ın kuşatması/Vigodet teslimi;
//         1817 Luso-Brezilya işgali; 1822-09-07 Brezilya bağımsızlığı; 1828-08-27 Montevideo
//         Antlaşması, Uruguay'ın bağımsızlığı. Aynı 1814-1817 basitleştirme uyarısı geçerli.
// k gerekçesi: Uruguay'ın idari başkenti — k:1

{ ad:"Córdoba (Arjantin)", tur:"sehir", lat:-31.4201, lon:-64.1888, g:1, k:1, kur:"1573-07-06",
  s:[{f:"1573-07-06",t:"1810-05-25",d:"ispanya"},
     {f:"1810-05-25",t:"2000-12-31",d:"arjantin-cumhuriyeti"}] },
// kaynak: David Rock, "Argentina 1516-1987" (Univ. of California Press, 1987); John Lynch
//         (1986). "(Arjantin)" eki Kastilya'nın "Córdoba"sıyla AD ÇAKIŞMASINI önlemek için.
// k gerekçesi: iç bölge idari/dini merkezi — k:1

{ ad:"Santa Fe (Arjantin)", tur:"sehir", lat:-31.6333, lon:-60.7000, g:0, k:2, kur:"1573-11-15",
  s:[{f:"1573-11-15",t:"1810-05-25",d:"ispanya"},
     {f:"1810-05-25",t:"2000-12-31",d:"arjantin-cumhuriyeti"}] },
// kaynak: David Rock (1987); Encyclopedia.com "Santa Fe, Argentina" — Córdoba ile AYNI YIL
//         (1573) Juan de Garay tarafından kuruldu.
// NOT: "(Arjantin)" eki, Kuzey Amerika bölümündeki Santa Fe (New Mexico) ile AD ÇAKIŞMASINI
//      önlemek için eklendi — Córdoba(Arjantin) ile aynı disiplin.
// k gerekçesi: Río de la Plata iç bölge şehri — k:2

{ ad:"Corrientes", tur:"sehir", lat:-27.4806, lon:-58.8341, g:0, k:2, kur:"1588-04-03",
  s:[{f:"1588-04-03",t:"1810-05-25",d:"ispanya"},
     {f:"1810-05-25",t:"2000-12-31",d:"arjantin-cumhuriyeti"}] },
// kaynak: RIUNNE dijital repozitoryumu, "La fundación de Corrientes" — 3 Nisan 1588, Asunción'dan
//         gelen Juan Torres de Vera y Aragón; Buenos Aires-Asunción hattını güvenceye aldı.
// k gerekçesi: nehir hattı şehri — k:2

{ ad:"Mendoza", tur:"sehir", lat:-32.8908, lon:-68.8272, g:1, k:1, kur:"1561-03-02",
  s:[{f:"1561-03-02",t:"1810-05-25",d:"ispanya"},
     {f:"1810-05-25",t:"2000-12-31",d:"arjantin-cumhuriyeti"}] },
// kaynak: David Rock (1987). NOT: 1561-1776 arası coğrafi/idari olarak Şili Genel Valiliği'ne
//         bağlıydı, 1776'da Río de la Plata Genel Valiliği'ne devredildi — her iki dönem de aynı
//         "ispanya" kimliği altında olduğu için model AŞILMADI, yalnız not düşüldü.
// k gerekçesi: Cuyo bölgesinin idari merkezi — k:1

{ ad:"Asunción", tur:"sehir", lat:-25.2637, lon:-57.5759, g:1, k:1, kur:"1537-08-15",
  s:[{f:"1537-08-15",t:"1811-05-14",d:"ispanya"},
     {f:"1811-05-14",t:"2000-12-31",d:"paraguay-cumhuriyeti"}] },
// kaynak: John Hoyt Williams, "The Rise and Fall of the Paraguayan Republic, 1800-1870"
//         (Univ. of Texas Press, 1979) — "Şehirlerin Anası", Buenos Aires/Santa Fe/Corrientes'in
//         kuruluş üssü. 14-15 Mayıs 1811'de doğrudan İspanya'dan (Buenos Aires'ten DEĞİL,
//         Arjantin'e katılmadan) bağımsızlığını ilan etti.
// k gerekçesi: Paraguay'ın idari başkenti — k:1

// AMERIKALAR 29 Ekim 2026 — eksik nokta (KRONO-AMERIKA-G-0929-YERLESIM-ONERI.md). Mükerrer taraması: normalleştirilmiş ad 0 eşleşme (tüm yerlesimler*.js), 3 km içinde komşu yok.
{ ad:"Antofagasta", tur:"liman", lat:-23.646, lon:-70.392, g:1, k:3, kur:"1868-01-01",
  s:[{f:"1868-01-01",t:"1879-02-14",d:"bolivya-cumhuriyeti"},
     {f:"1879-02-14",t:"2000-12-31",d:"sili-cumhuriyeti"}],
  kaynak:"Memoria Chilena, «Antofagasta (1845-2006)» (memoriachilena.gob.cl/602/w3-article-3296.html; sayfa okunmadı, arama özeti): kent kökenleri belirsiz; Biblioteca Nacional Digital belgesi resmî kuruluşu 22 Ekim 1868 verir — gün tartışmalı olduğundan YALNIZ YIL (1868) yazıldı. 14 Şubat 1879: Şili kuvvetleri (Cnl. Emilio Sotomayor) Bolivya'nın Antofagasta limanını direnişsiz işgal etti (Memoria Chilena, «Las operaciones militares de la Guerra del Pacífico (1879-1884)» (OKUNDU, memoriachilena.gob.cl/602/w3-printer-693.html): «14 de febrero: El coronel chileno Emilio Sotomayor ocupa Antofagasta». 1868 kuruluş yılı: Biblioteca Nacional Digital belgesi (ARAMA ÖZETİ, açılmadı). Zincir fiilî idaredir; Bolivya hukuken 1904 Barış ve Dostluk Antlaşması'na dek vazgeçmedi — o hukuk ayrımı modellenmedi.",
  not:"koordinat yaklaşık kent merkezi (Plaza Colón ~ -23.650,-70.397) kıyıdan ~0.6 km içeri çekildi; kara maskesi denetimi (denetle.py) koordinatörde." },
{ ad:"San Miguel de Tucumán", tur:"sehir", lat:-26.8083, lon:-65.2176, g:1, k:3, kur:"1565-01-01",
  s:[{f:"1565-05-31",t:"1810-05-25",d:"ispanya"},
     {f:"1810-05-25",t:"2000-12-31",d:"arjantin-cumhuriyeti"}],
  kaynak:"Argentina Ministerio de Cultura, «Fundación de la ciudad de San Miguel de Tucumán y traslado de Ibatín a La Toma» (OKUNDU: argentina.gob.ar «Casco Urbano Original de San Miguel de Tucumán» (capital-humano/cultura/monumentos/casco-urbano-original-de-san-miguel-de-tucuman): «fundación de San Miguel de Tucumán en Ibatín en 1565» ve «en 1685 se decidió el traslado de la ciudad al sitio actual» — YALNIZ YIL kesin. 31 Mayıs 1565 günü cultura.gob.ar'dan (sayfa 403, YALNIZ arama özeti) geldi, doğrulanmadı ve yazılmadı. Nokta BUGÜNKÜ yerleşkedir (1685 sonrası); 1565-1685 arası Ibatín ayrı yerdir, modellenmedi. 9 Temmuz 1816 Bağımsızlık Kongresi (argentina.gob.ar/capital-humano/cultura/monumentos/museo-casa-historica-de-la-independencia). Zincir komşu Córdoba (Arjantin) ile aynı kural: 1810-05-25 Mayıs Devrimi'yle `arjantin-cumhuriyeti` (kendi kaynağı: Córdoba kaydı), 1816 bağımsızlık ilanı kronolojide ayrıca durur." },
// AMERIKALAR 29 Ekim 2026 (ikinci tur) — eksik şehir noktaları. Mükerrer: ad 0 eşleşme, 3 km içinde komşu yok (yakin.py ile 4986 nokta tarandı). Koordinat kıyıda İÇERİ çekildi; kara maskesi denetimi koordinatörde (denetle.py koşturulmadı).
{ ad:"Arica", tur:"liman", lat:-18.4760, lon:-70.3110, g:1, k:3, kur:"1541-01-01",
  s:[{f:"1541-01-01",t:"1542-11-20",d:"ispanya"},
     {f:"1542-11-20",t:"1824-12-09",d:"ispanyol-peru"},
     {f:"1824-12-09",t:"1880-06-07",d:"peru-cumhuriyeti"},
     {f:"1880-06-07",t:"2000-12-31",d:"sili-cumhuriyeti"}],
  kaynak:"Kuruluş: SciELO Historia 49 (2016), «El Camino Real de la Plata…» (ARAMA ÖZETİ, sayfa açılmadı): Villa San Marcos de Arica, Lucas Martínez Vegazo, Nisan 1541 — kaynak içinde 24 ve 25 Nisan çelişir, bu yüzden YALNIZ YIL yazıldı. Memoria Chilena «Arica (1540-1929)» (ARAMA ÖZETİ). 1880-06-07: «Chile toma Arica» — Memoria Chilena, «Las operaciones militares de la Guerra del Pacífico (1879-1884)» (OKUNDU: memoriachilena.gob.cl/602/w3-printer-693.html); madde: kronoloji_cok_guney_amerika.js (Toma del Morro). Zincir FİİLÎ idaredir; hukuken Arica Şili'ye 1929 Lima Antlaşması'yla (3 Haziran 1929, Memoria Chilena ARAMA ÖZETİ) kesinleşti — Şili'de kalıyor, zincirde ek kırılma yok." },
{ ad:"Iquique", tur:"liman", lat:-20.2160, lon:-70.1470, g:1, k:3, kur:"1556-01-01",
  s:[{f:"1556-01-01",t:"1824-12-09",d:"ispanyol-peru"},
     {f:"1824-12-09",t:"1879-11-02",d:"peru-cumhuriyeti"},
     {f:"1879-11-02",t:"2000-12-31",d:"sili-cumhuriyeti"}],
  kaynak:"kur 1556: Memoria Chilena, «Iquique (1556-2004)» (OKUNDU, w3-article-653): «En 1556 se inició la explotación del mineral de plata de Huantajaya» ve körfez maden işçileri/malları için çıkarma limanı oldu — RESMÎ KURULUŞ GÜNÜ YOK (Advis: kuruluş eylemi olmadan doğdu; ARAMA ÖZETİ), 1556 maden başlangıcıdır, yerleşimin kesin doğuşu değil. Kırılma 1879-11-02: Pisagua çıkarması «2 de noviembre: Desembarco de tropas chilenas en Pisagua» (OKUNDU, w3-printer-693); Iquique'nin kendisinin fiilî teslimi birkaç hafta sonradır (23 Kasım 1879, YALNIZ arama özeti, sayfa bulunamadı — DOĞRULANMADI) — gün, Tarapacá işgalinin başlangıcı olarak 2 Kasım alındı. Tarapacá'nın Şili'ye kesin devri 20 Ekim 1883 Ancón (OKUNDU, aynı sayfa)." },
{ ad:"Valparaíso", tur:"liman", lat:-33.0480, lon:-71.6050, g:2, k:2, kur:"1536-01-01",
  s:[{f:"1536-01-01",t:"1542-11-20",d:"ispanya"},
     {f:"1542-11-20",t:"1818-02-12",d:"ispanyol-peru"},
     {f:"1818-02-12",t:"2000-12-31",d:"sili-cumhuriyeti"}],
  kaynak:"Memoria Chilena (ARAMA ÖZETİ: w3-article-96606, 7669, 639262, MC0054480.pdf): gelenek Juan de Saavedra'nın körfezi 1536'da (Vicuña Mackenna: Eylül 1536 başı) keşfedip adlandırmasını verir; RESMÎ KURULUŞ BELGESİ YOK; 1544'te Valdivia Santiago'nun ikmal limanı yaptı. kur = 1536 (ilk adlandırma, kuruluş değil). Zincir komşu Santiago (Şili) ile aynı kural." },
{ ad:"Callao", tur:"liman", lat:-12.0600, lon:-77.1150, g:1, k:3, kur:"1537-01-01",
  s:[{f:"1537-01-01",t:"1542-11-20",d:"ispanya"},
     {f:"1542-11-20",t:"1824-12-09",d:"ispanyol-peru"},
     {f:"1824-12-09",t:"1826-01-23",d:"ispanya"},
     {f:"1826-01-23",t:"2000-12-31",d:"peru-cumhuriyeti"}],
  kaynak:"kur 1537: arama sonuçlarında «orígenes… datan de 1537»; tam kuruluş günü BİLİNMİYOR («se desconoce la fecha exacta») — ARAMA ÖZETİ. 1824-12-09 Ayacucho (künye t) sonrası Real Felipe kalesi kuşatma altında kralcı kaldı, Rodil 23 Ocak 1826'ya dek direndi; UNESCO tentative list «Real Felipe Fortress of Callao» (whc.unesco.org/en/tentativelists/6647/) ve Redalyc 7678/767879448008 (ARAMA ÖZETİ: bir kaynak 22 Ocak verir, çoğu 23). Gün 23 alındı. Kronolojide 1826-01-23 maddesi var (kronoloji_cok_guney_amerika.js)." },
{ ad:"Pisco", tur:"liman", lat:-13.7120, lon:-76.2020, g:1, k:3, kur:"1576-01-01",
  s:[{f:"1576-01-01",t:"1824-12-09",d:"ispanyol-peru"},
     {f:"1824-12-09",t:"2000-12-31",d:"peru-cumhuriyeti"}],
  kaynak:"kur 1576: Aralık 1576'da «Puerto de La Magdalena de Pisco»'da bağ açık artırması (SciELO Chile, «Historia de la producción de vinos y piscos en el Perú», ARAMA ÖZETİ) — limanın VARLIĞININ en erken belge yılı, kuruluş değil. «1640 kuruluş» (Mancera) tek ikincil kaynak, güvenilmedi. 1687 depremi/tsunami eski kenti yıktı, villa denizden uzak yeniden kuruldu: nokta BUGÜNKÜ Pisco'dur. San Martín çıkarması Eylül 1820 (Pisco/Paracas), kronolojide 1820-09-08 maddesi var." },
{ ad:"Villarrica (Şili)", tur:"sehir", lat:-39.2870, lon:-72.2250, g:1, k:3, kur:"1883-01-01",
  s:[{f:"1883-01-01",t:"2000-12-31",d:"sili-cumhuriyeti"}],
  kaynak:"Memoria Chilena, «Últimas campañas militares, expedición y refundación de Villarrica (1882-1883)» (memoriachilena.gob.cl/602/w3-article-96472.html; ARAMA ÖZETİ): Albay Urrutia 1 Ocak 1883'te Villarrica'yı yeniden kurdu. 1552 (Alderete) kuruluşu ve 1602 terki ayrı, kesintili bir dönemdir (Chungará/SciELO, ARAMA ÖZETİ) — bu nokta YALNIZ 1883 sonrasını modeller; 1552-1602 modellenmedi. Öncesi mapuche-araukanya bölgesi başka noktalarla boyalı." },
{ ad:"Santa Marta", tur:"liman", lat:11.2400, lon:-74.1950, g:1, k:3, kur:"1525-07-29",
  s:[{f:"1525-07-29",t:"1542-11-20",d:"ispanya"},
     {f:"1542-11-20",t:"1821-10-01",d:"ispanyol-peru"},
     {f:"1821-10-01",t:"1831-01-01",d:"gran-kolombiya"},
     {f:"1831-01-01",t:"2000-12-31",d:"kolombiya-cumhuriyeti"}],
  kaynak:"Redalyc 169552036001 (jeoloji makalesi, ARAMA ÖZETİ) 29 Temmuz 1525 verir; Banco de la República Enciclopedia (ARAMA ÖZETİ) ise 1526-07-29 ve 1525 verir — kaynaklar arası YIL/GÜN ÇELİŞKİSİ, kur ikincil bir makaleye dayanır, kesin değil. Zincir komşu Cartagena de Indias ile aynı." },
{ ad:"Maracaibo", tur:"liman", lat:10.6667, lon:-71.6125, g:1, k:3, kur:"1574-01-01",
  s:[{f:"1574-01-01",t:"1821-06-24",d:"ispanyol-peru"},
     {f:"1821-06-24",t:"1830-01-13",d:"gran-kolombiya"},
     {f:"1830-01-13",t:"2000-12-31",d:"venezuela-cumhuriyeti"}],
  kaynak:"Redalyc 200/20061210 «La Maracaibo hispana. Fundación y expansión» (ARAMA ÖZETİ): Alfinger 1529 (Eylül), Pacheco 1569/1571, Maldonado 1574 — kalıcı olan 1574 kuruluşudur; kur=1574 (YIL). Kaynaklar yer konusunda çelişir. NOT: Maracaibo'nun bağımsızlığa geçişi (Venezuela 1821 yerine 1823 Maracaibo Gölü Savaşı) bu veri kuralında Caracas ile aynı alındı, ayrıca modellenmedi." },
{ ad:"Valencia (Venezuela)", tur:"sehir", lat:10.1620, lon:-68.0077, g:1, k:2, kur:"1555-01-01",
  s:[{f:"1555-01-01",t:"1821-06-24",d:"ispanyol-peru"},
     {f:"1821-06-24",t:"1830-01-13",d:"gran-kolombiya"},
     {f:"1830-01-13",t:"2000-12-31",d:"venezuela-cumhuriyeti"}],
  kaynak:"Britannica «Valencia (Venezuela)» ve LoC Country Profile Venezuela (tile.loc.gov/storage-services/master/frd/copr/Venezuela.pdf): 1555, Nueva Valencia del Rey, Alonso Díaz Moreno (ARAMA ÖZETİ; Britannica sayfası 403, LoC PDF okunamadı); başka bir kaynak 1556 verir — YIL çelişkisi. Gün yazılmadı. Zincir Caracas ile aynı." },
{ ad:"Ciudad Bolívar (Angostura)", tur:"sehir", lat:8.1180, lon:-63.5420, g:1, k:3, kur:"1764-01-01",
  s:[{f:"1764-01-01",t:"1821-06-24",d:"ispanyol-peru"},
     {f:"1821-06-24",t:"1830-01-13",d:"gran-kolombiya"},
     {f:"1830-01-13",t:"2000-12-31",d:"venezuela-cumhuriyeti"}],
  kaynak:"encyclopedia.com «Ciudad Bolívar» ve Britannica «Ciudad Bolívar» (ARAMA ÖZETİ): 1764'te Santo Tomé / San Tomás de la Nueva Guayana, 1768'de Angostura. Angostura Kongresi 15 Şubat 1819 (Redalyc 20064052005, ARAMA ÖZETİ) — kronolojik bağ. Zincirde Angostura'nın 1817-1819 cumhuriyetçi elde olması modellenmedi (Caracas kuralı). Yeniden adlandırma 1846/1849 çelişkili, kullanılmadı." },
{ ad:"Recife", tur:"liman", lat:-8.0600, lon:-34.8750, g:1, k:2, kur:"1537-01-01",
  s:[{f:"1537-01-01",t:"1549-01-01",d:"portekiz"},
     {f:"1549-01-01",t:"1630-02-16",d:"portekiz-brezilyasi"},
     {f:"1630-02-16",t:"1654-01-26",d:"hollanda-brezilyasi"},
     {f:"1654-01-26",t:"1822-09-07",d:"portekiz-brezilyasi"},
     {f:"1822-09-07",t:"1889-11-15",d:"brezilya-imparatorlugu"},
     {f:"1889-11-15",t:"2000-12-31",d:"brezilya-cumhuriyeti"}],
  kaynak:"SciELO Brasil (Anais do Museu Paulista, ARAMA ÖZETİ): Mauritsstad 1637-1654; FUNDAJ (basilio.fundaj.gov.br, ARAMA ÖZETİ): «Povoação dos Arrecifes» liman köyü; 1537 bir arama sonucunda geçer (12 Mart 1537 iddiası TEK KAYNAK, güvenilmedi, kesinlik YIL). Hollanda dönemi 1630-02-16 (künye f) — Olinda'nın alındığı gün; Recife'nin fiilî düşüşü birkaç hafta sonradır, gün yazılmadı. Zincir komşu Olinda ile aynı, Hollanda arası eklendi.",
  not:"Olinda (6.1 km) zincirinde Hollanda dönemi YOK — ayrı bir borçtur (Olinda 1630-1654 Hollanda altındaydı)." },
{ ad:"Porto Alegre", tur:"sehir", lat:-30.0400, lon:-51.2100, g:1, k:2, kur:"1772-01-01",
  s:[{f:"1772-01-01",t:"1822-09-07",d:"portekiz-brezilyasi"},
     {f:"1822-09-07",t:"1889-11-15",d:"brezilya-imparatorlugu"},
     {f:"1889-11-15",t:"2000-12-31",d:"brezilya-cumhuriyeti"}],
  kaynak:"Redalyc 465664654007 (açorianos anıtları makalesi, ARAMA ÖZETİ): şehir resmen 1772'de kuruldu (1975 revizyonu; önceki 1740), yerleşim 1752 Azor çiftleriyle; Viamão'dan başkentlik 1773'te taşındı. «26 Mart 1772» günü doğrulanamadı (26 Mart 1974 anıt açılışıdır) — YALNIZ YIL." },
];
