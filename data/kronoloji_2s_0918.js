// =====================================================================
// KRONOLOJI_2S_0918 — Değişmez 2s borcu (YABANCI-YABANCI toprak değişimi)
// KRONO-2S oturumu · 18 Eylül 2026 · görevlendiren 1.MURAT
// =====================================================================
// NİÇİN VAR: `py arac/denetle.py`nin Değişmez 2s ölçümü, 97 AÇIK kırılma
// buldu — harita o gün YABANCI bir devletten başka bir YABANCI devlete
// renk değiştiriyor ama ±30 gün içinde kronoloji maddesi YOK. Bu dosya
// o borcun bir kısmını (20 kırılma) kapatıyor.
//
// ⚠️ HENÜZ CANLI DEĞİL. index.html'e bağlanmadı (1.MURAT yapacak).
//
// 🔴 YAN BULGU — SEÇİM YÖNTEMİ NİÇİN "EN YÜKSEK SAYI" DEĞİL:
// Görev "en çok yerleşim etkileyen 20 kırılmayı seç" diyordu. `denetle.py`
// kırılmaları YALNIZ TARİHE göre gruplar — aynı YYYY-01-01'e yuvarlanan
// TAMAMEN İLGİSİZ kıtalardaki yerleşimleri (örn. "Cahokia (Kuzey Amerika),
// Diahav (Senegal), Gölköy (Kafkasya), Kahone (Senegal)") TEK bir "4
// yerleşimlik kırılma" gibi gösteriyor. Bunlar aynı olay DEĞİL — yalnız
// kaynak verisi yıl hassasiyetinde olduğu için aynı takvim gününe
// düşüyorlar (bkz. CLAUDE.md §4 "ay/gün ayın 1'ine kodlanmış" ailesi,
// burada YIL de aynı kaymayı yapıyor). Böyle bir kümeye TEK bir
// "kaynaklı" madde yazmak, ilgisiz yerleri UYDURULMUŞ bir ortak
// anlatıya bağlardı — bu YASAK (1.MURAT: "yamadan değil kaynaktan
// doğrula, uydurma").
// ⇒ SEÇİM ÖLÇÜTÜ DEĞİŞTİRİLDİ: "en çok yerleşim" yerine "gerçekten TEK
// bir tarihî olaya ait, COĞRAFİ OLARAK TUTARLI yerleşim kümesi" arandı.
// 97 açığın tamamı tek tek okunup (tarih + yerleşim adları + en yakın
// madde) hangi kümelerin GERÇEKTEN bir arada olduğu (aynı bölge/aynı
// devlet çifti) elenerek belirlendi. Seçilen 20 kırılmanın etkilediği
// TOPLAM yerleşim sayısı 45 — kümeleme hatasına düşselerdik "en yüksek
// sayı" seçimi kolayca 4'erli 20 ilgisiz küme (80 yerleşim, ama çoğu
// UYDURULACAK anlatı) seçebilirdi.
//
// ── KAYNAK ────────────────────────────────────────────────────────
// TDV bu 20 kırılmanın HİÇBİRİNİ kapsamıyor (Osmanlı'nın doğrudan tarafı
// olmadığı yabancı-yabancı devir olayları — Rusya-Türkmenistan, Fransa-
// Orta Afrika, Almanya-Kamerun, İngiltere-Uganda/Kenya, Polonya-Litvanya,
// Romanya vb.). Tamamı standart akademik/ansiklopedik kaynakla yazıldı,
// `kaynak:` alanına adıyla. Gün çoğu kayıtta KABA (YYYY-01-01, yıl
// biliniyor gün bilinmiyor); kaynağın GÜN verdiği 3 kayıtta (Lublin
// Birliği, Romanya Krallığı, Tit Muharebesi) veri zaten o günü taşıyordu
// ve kaynakla BAĞIMSIZ DOĞRULANDI.
//
// ── ARANDI, BULUNAMADI (bu turda YAZILMAYAN 4 küme) ─────────────────
// 1500-01-01 (Ak-Meçit/Akmola/Andican/Ayagöz — Kazak bozkırı, 4 nokta
//   farklı hanlık/bölgeye ait, TEK olay değil) · 1379/1410 (Bayburt-
//   Erzincan grubu Anadolu, Hazarasp/Hîve/Zagros ayrı coğrafya) · 1522
//   (Am Timan/Massenya/Mongo Çad tutarlı ama Pánuco Meksika ilgisiz,
//   Çad üçlüsü için de TEK bir tarihli olay bulunamadı) · 1890 (Aketi/
//   Birao/Bukoba/Bumba Orta Afrika ama tek olay değil, ayrı sömürge
//   ilerleyişleri) — bunlar 1.MURAT'a rapor ediliyor, `bulunamadı`.
//
// dunya: 5 çağ kapatan/açan · 4 iki+ büyük gücün sınırı · 3 iki devlet
//   arası kalıcı savaş/antlaşma · 2 bölgesel etki · 1 yalnız iç mesele
// kapsam: hepsi "dis" (Osmanlı'nın doğrudan tarafı olmadığı yabancı-
//   yabancı devir, ama haritada renk değiştiriyor)
// ═════════════════════════════════════════════════════════════════════

window.KRONOLOJI_2S_0918 = [

// ── 1. LUBLİN BİRLİĞİ — Polonya-Litvanya birleşmesi ──────────────────
{ t:"1569-07-01", b:"Lublin Birliği — Ukrayna toprakları Litvanya'dan Polonya'ya geçti", tur:"antlasma", onem:5, dunya:4, kapsam:"dis", yer_id:"Bar (Podolya)",
  etiket:["antlasma","toprak-kazanc","konu-siyasi"],
  d:"1 Temmuz 1569'da imzalanan Lublin Birliği, Litvanya Büyük Dükalığı ile Polonya Krallığı'nı tek bir devlette (Rzeczpospolita) birleştirdi. Anlaşmanın şartı gereği Podolya, Volhynia ve Kiev bölgesi (Bar, Berdiçev, Białystok, Braslav dahil) idarî olarak Litvanya'dan doğrudan Polonya Krallığı'na devredildi.",
  kaynak:"standart akademik/ansiklopedik (Union of Lublin, 1 Temmuz 1569 — Davies, God's Playground; Encyclopaedia Britannica 'Union of Lublin') — TDV kapsam dışı, gün kaynakta AÇIKÇA veriliyor, veriyle birebir örtüşüyor" },

// ── 2. HÜRMÜZ'ÜN PORTEKİZ'E DÜŞÜŞÜ ────────────────────────────────────
{ t:"1515-04-01", b:"Portekiz, Hürmüz Boğazı kıyılarındaki hâkimiyetini tamamladı", tur:"toprak-kayip", onem:4, dunya:4, kapsam:"dis", yer_id:"Hürmüz Adası",
  etiket:["askeri","toprak-kayip","konu-askeri"],
  d:"Afonso de Albuquerque'nin 1507'de başlattığı Basra Körfezi seferi, 1515'te Hürmüz Adası ve karşı kıyıdaki Kişm ile Buraymî'yi kapsayacak şekilde tamamlandı; İran'a tâbi Hürmüz Krallığı fiilen Portekiz himayesine girdi, Portekiz körfez ticaretinin denetimini ele geçirdi.",
  kaynak:"künyenin kendi kaynak alanı (TDV hurmuz--iran/uman) — D-KUNYE'nin round-1 çalışmasıyla tutarlı; standart akademik kaynakla (Boxer, The Portuguese Seaborne Empire) çapraz doğrulandı" },

// ── 3. AHSÂ (LAHSA) BÖLGESİNİN MISIR İŞGALİNDEN ÇIKIŞI ────────────────
{ t:"1841-10-01", b:"Mısır kuvvetleri Ahsâ (Lahsa) bölgesinden çekildi", tur:"toprak-kayip", onem:3, dunya:3, kapsam:"dis", yer_id:"Lahsa",
  etiket:["askeri","toprak-kayip","konu-siyasi"],
  d:"Mehmed Ali Paşa'nın Mısır kuvvetleri 1836'da Necid ve doğu Arabistan'ı (Ahsâ, Katîf, Ukayr, Cübeyl dahil) işgal etmişti; 1840 Londra Boğazlar Sözleşmesi'nin Mısır'ı Arap yarımadasındaki fetihlerinden vazgeçirmesiyle kuvvetler 1841'de bölgeden çekildi, idare yeniden yerel güçlere (Suûdî/Âl-i Halîfe nüfuzu) döndü.",
  kaynak:"standart akademik/ansiklopedik (Egyptian withdrawal from Najd/Hasa after 1840 London Straits Convention; J.B. Kelly, Britain and the Persian Gulf) — TDV kapsam dışı; kaynak yalnız YIL veriyor (1841), AY/GÜN kaynaksız — veri kaydının kendi günü (1841-10-01) devralındı, yeni hassasiyet üretilmedi" },

// ── 4. ROMANYA KRALLIĞI'NIN İLANI ─────────────────────────────────────
{ t:"1881-03-26", b:"Romanya Krallığı ilan edildi — Prenslik Krallığa dönüştü", tur:"antlasma", onem:4, dunya:3, kapsam:"dis", yer_id:"Bükreş",
  etiket:["antlasma","konu-siyasi"],
  d:"1877-78 Osmanlı-Rus Savaşı sonrası Berlin Kongresi'nde bağımsızlığı tanınan Romanya Prensliği, 26 Mart 1881'de (Jülyen takvimiyle 14 Mart) Kral I. Carol'un taç giymesiyle Krallığa dönüştürüldü; Babadağı, Birlad, Buzău ve başşehir Bükreş dahil bütün ülke idarî olarak yeni krallığın parçası oldu.",
  kaynak:"standart akademik/ansiklopedik (Kingdom of Romania proclamation, 26 Mart 1881 — Hitchins, Rumania 1866-1947) — TDV kapsam dışı, gün kaynakta AÇIKÇA veriliyor, veriyle birebir örtüşüyor" },

// ── 5. ADAMAVA'NIN ALMAN-İNGİLİZ PAYLAŞIMI ───────────────────────────
{ t:"1901-09-02", b:"Adamava Emirliği Almanya ile İngiltere arasında paylaşıldı", tur:"toprak-kayip", onem:3, dunya:3, kapsam:"dis", yer_id:"Garua (Garoua)",
  etiket:["askeri","toprak-kayip","konu-askeri"],
  d:"Sokoto Halifeliği'ne tâbi Adamava (Fombina) Emirliği, Alman ve İngiliz sömürge kuvvetlerinin 1899-1901 seferleri sonunda ikiye bölündü: doğu kesimi (Garua, Banyo, Marua, Ngaunder dahil) Alman Kamerun'a, batı kesimi (başşehir Yola) İngiliz Kuzey Nijerya'ya katıldı; Emir Zübeyr sürgüne gönderildi.",
  kaynak:"standart akademik/ansiklopedik (Adamawa Wars 1899-1907, Anglo-German partition 1901; Emir Zübeyr'in Kasım 1901'de Garua yakınında bozguna uğraması — Wikipedia 'Adamawa Emirate'/'Adamawa Wars') — TDV kapsam dışı; kaynak yalnız 1901 YILINI doğruluyor, AY/GÜN kaynaksız — veri kaydının kendi günü (1901-09-02) devralındı" },

// ── 6. UBANGİ-ŞARİ'NİN FRANSIZ İSTİLASI ──────────────────────────────
{ t:"1903-01-01", b:"Fransız kuvvetleri Ubangi-Şari'nin iç kesimlerini (Bambari-Bria hattı) ele geçirdi", tur:"toprak-kayip", onem:3, dunya:2, kapsam:"dis", yer_id:"Bambari",
  etiket:["askeri","toprak-kayip","konu-askeri"],
  d:"Fransız Kongo'sunun kuzey seferleri, 1900'lerin başında Bambari, Batangafo, Bossangoa ve Bria'yı kapsayan Ubangi-Şari iç bölgesini fiilen denetim altına aldı; bölge 29 Aralık 1903'te resmen Ubangi-Şari kolonisi olarak örgütlendi (Fransız Ekvator Afrikası'nın parçası).",
  kaynak:"standart akademik/ansiklopedik (Ubangi-Shari colony organized 29 Aralık 1903 — Wikipedia 'Ubangi-Shari', Coquery-Vidrovitch, Le Congo au temps des grandes compagnies concessionnaires) — TDV kapsam dışı, GÜN KABA" },

// ── 7. KENYA KUZEYDOĞUSUNUN İNGİLİZ İDARESİNE GİRİŞİ ─────────────────
{ t:"1895-07-01", b:"Kenya'nın kuzeydoğu bölgesi (Garissa-Marsabit hattı) İngiliz Doğu Afrika Protektorası'na katıldı", tur:"toprak-kayip", onem:2, dunya:2, kapsam:"dis", yer_id:"Garissa",
  etiket:["askeri","toprak-kayip","konu-askeri"],
  d:"İngiliz Doğu Afrika Şirketi'nin imtiyazının 1895'te Krallık'a devredilmesiyle kurulan İngiliz Doğu Afrika Protektorası, Garissa, Kitui, Marsabit ve Vacir (Wajir) gibi kuzeydoğu bölgelerini de kapsayacak şekilde genişledi; bu iç bölgelerin fiilî idareye alınması 1890'ların ikinci yarısına yayıldı.",
  kaynak:"standart akademik/ansiklopedik (Imperial British East Africa Company'nin 1895'te Krallığa devri; Britannica 'British East Africa Protectorate') — TDV kapsam dışı; kaynak yalnız 1895 YILINI doğruluyor, bu iç bölgelerin fiilî idareye alınma günü kaynaksız — veri kaydının kendi günü (1895-07-01) devralındı" },

// ── 8. AHAL TEKKE / TÜRKMEN BÖLGESİNİN RUSYA'YA DÜŞÜŞÜ ───────────────
{ t:"1881-01-24", b:"Göktepe Muharebesi — Ahal Tekke Türkmenleri Rusya'ya yenildi", tur:"savas", onem:4, dunya:3, kapsam:"dis", yer_id:"Dihistan ovası (Meşhed-i Misriyân)",
  etiket:["askeri","savas","konu-askeri"],
  d:"General Mihail Skobelev komutasındaki Rus kuvvetleri, 24 Ocak 1881'de Göktepe (Geok Tepe) kalesini düşürerek Ahal Tekke Türkmenlerinin direnişini kırdı; Dihistan ovası, Ebîverd ve Nesâ dahil Hazar ötesi Türkmen bölgesi Rus İmparatorluğu'na katılma sürecine girdi (Transhazar Bölgesi 1881'de kuruldu).",
  kaynak:"standart akademik/ansiklopedik (Battle of Geok Tepe, 24 Ocak 1881 — Britannica 'Battle of Gökdepe', Edgar, Tribal Nation) — TDV kapsam dışı; veri 1881-01-30 taşıyor, kaynak 24 Ocak diyor — 6 GÜNLÜK FARK bildiriliyor, veri kaydı gözden geçirilmeli" },

// ── 9. DÂRÜ'L-KÛTÎ'NİN FRANSIZLARA DÜŞÜŞÜ ─────────────────────────────
{ t:"1911-04-12", b:"Sultan Mohammed es-Senûsî'nin Dâru'l-Kûtî Sultanlığı Fransız kuvvetlerince ortadan kaldırıldı", tur:"toprak-kayip", onem:3, dunya:2, kapsam:"dis", yer_id:"Ndele (Dâru'l-Kûtî)",
  etiket:["askeri","toprak-kayip","konu-askeri"],
  d:"1897'de Fransız himayesine giren, başşehri Ndele olan köle ticareti temelli Dâru'l-Kûtî Sultanlığı, Sultan Mohammed es-Senûsî'nin Fransız otoritesine direnmeyi sürdürmesi üzerine 1911'de düzenlenen bir seferle fiilen ortadan kaldırıldı; Senûsî savaşta öldürüldü, sultanlık 1912'de resmen kaldırıldı.",
  kaynak:"standart akademik/ansiklopedik (Dar al-Kuti, Fransız protektorası 1897, es-Senûsî'nin 1911'de öldürülmesi — Wikipedia 'Dar al Kuti', Cordell, Dar al-Kuti and the Last Years of the Trans-Saharan Slave Trade) — TDV kapsam dışı, GÜN KABA" },

// ── 10. ERİTRE'NİN İTALYANLARA DÜŞÜŞÜ ─────────────────────────────────
{ t:"1889-01-01", b:"İtalya, Asmara ve Keren dahil Eritre yaylasını ilhak etti", tur:"toprak-kayip", onem:3, dunya:3, kapsam:"dis", yer_id:"Asmara",
  etiket:["antlasma","toprak-kayip","konu-siyasi"],
  d:"Habeşistan İmparatoru II. Yohannes'in 1889'da ölümüyle doğan güç boşluğundan yararlanan İtalya, Uccialli (Wuchale) Antlaşması'nın (2 Mayıs 1889) ardından Asmara ve Keren dahil Eritre yaylasını fiilen ilhak etti; 1 Ocak 1890'da resmen 'Eritre' adıyla koloni ilan edildi.",
  kaynak:"standart akademik/ansiklopedik (Treaty of Wuchale 2 Mayıs 1889, Eritrea colony proclaimed 1 Ocak 1890 — Britannica 'Eritrea/History') — TDV kapsam dışı, GÜN KABA (veri 1889-01-01 taşıyor, gerçek ilhak süreci Mayıs 1889-Ocak 1890 arası — veri kaydı bu geniş pencereyle uyumlu)" },

// ── 11. HISNIKEYFÂ EYYÛBÎLERİ'NİN AKKOYUNLULARA DÜŞÜŞÜ ────────────────
{ t:"1462-01-01", b:"Akkoyunlu Uzun Hasan, Hısnıkeyfâ Eyyûbî kolunu ortadan kaldırdı", tur:"toprak-kazanc", onem:4, dunya:3, kapsam:"dis", yer_id:"Hasankeyf",
  etiket:["askeri","toprak-kazanc","konu-askeri"],
  d:"Yukarı Dicle'de Hama ile birlikte Eyyûbî hânedanının ayakta kalan son iki kolundan biri olan Hısnıkeyfâ (Hasankeyf) ve Siirt, 1462'de Akkoyunlu hükümdarı Uzun Hasan tarafından ilhak edilerek Eyyûbî hâkimiyetine son verildi.",
  kaynak:"TDV `eyyubiler` — AYNEN: \"Hısnıkeyfâ kolu ise 1462'de Akkoyunlular'dan Uzun Hasan tarafından ortadan kaldırıldı.\" — D-KUNYE'nin round-1 çalışmasıyla (eyyubi-hisnikeyfa künyesi) tutarlı, GÜN YOK ⇒ YYYY-01-01" },

// ── 12. BUNYORO'NUN İNGİLİZLERE DÜŞÜŞÜ ────────────────────────────────
{ t:"1899-04-09", b:"Bunyoro Kralı Kabalega esir alındı, krallık İngiliz Uganda Protektorası'na bağlandı", tur:"toprak-kayip", onem:3, dunya:2, kapsam:"dis", yer_id:"Hoima (Bunyoro)",
  etiket:["askeri","toprak-kayip","konu-askeri"],
  d:"1894'ten beri İngiliz kuvvetlerine direnen Bunyoro Kralı Kabalega, 9 Nisan 1899'da Lango bölgesinde (Dokolo yakını) yakalanıp Seyşeller'e sürgüne gönderildi; başşehir Hoima ve Masindi dahil krallık toprakları İngiliz Uganda Protektorası'na katıldı.",
  kaynak:"standart akademik/ansiklopedik (Kabalega's capture, 9 Nisan 1899 — Britannica 'Kabarega', Uzoigwe, Britain and the Conquest of Africa) — TDV kapsam dışı; veri 1899-04-09 taşıyor, kaynakla BİREBİR örtüşüyor" },

// ── 13. AHAGGAR TUAREGİ'NİN FRANSIZLARA DÜŞÜŞÜ ────────────────────────
{ t:"1902-05-07", b:"Tit Muharebesi — Ahaggar Tuaregi Fransız kuvvetlerine yenildi", tur:"savas", onem:3, dunya:2, kapsam:"dis", yer_id:"Abalessa",
  etiket:["askeri","savas","konu-askeri"],
  d:"Cottenest seferi sırasında 7 Mayıs 1902'de Tit vahası yakınında yapılan muharebede Fransız kuvvetleri Kel Ahaggar Tuaregini kesin biçimde yendi; Ahaggar'ın merkezi Abalessa ve İdeles dahil Sahra'nın bu iç bölgesi Fransız Cezayir'inin denetimine girdi.",
  kaynak:"standart akademik/ansiklopedik (Battle of Tit / Cottenest Expedition, 7 Mayıs 1902 — Omniatlas 'Cottenest Expedition', Keenan, The Tuareg) — TDV kapsam dışı; veri 1902-05-07 taşıyor, kaynakla BİREBİR örtüşüyor" },

// ── 14. ERZURUM BÖLGESİNDE TİMURLU-KARAKOYUNLU EL DEĞİŞTİRMESİ ────────
{ t:"1408-01-01", b:"Erzurum ve Aşkale bölgesi Karakoyunlu-Timurlu çekişmesinde el değiştirdi", tur:"toprak-kazanc", onem:2, dunya:1, kapsam:"dis", yer_id:"Erzurum",
  etiket:["askeri","toprak-kazanc","konu-askeri"],
  d:"Timur'un 1405'teki ölümünün ardından doğan güç boşluğunda, Karakoyunlu hükümdarı Kara Yûsuf 1406-1408 arasında doğu Anadolu'daki Timurlu valilerine karşı harekete geçti; Erzurum ve çevresindeki Aşkale bu mücadelede Timurlu denetiminden çıkarak Karakoyunlu nüfuzuna girdi.",
  kaynak:"standart akademik/ansiklopedik (Kara Yusuf'un Timurlu-sonrası doğu Anadolu seferleri, 1406-1410 — Woods, The Aqquyunlu; Roemer, The Türkmen Dynasties) — TDV kapsam dışı bu ayrıntı için, GÜN KABA, kesinlik düşük" },

// ── 15. TORO KRALLIĞI'NIN İNGİLİZLERE BAĞLANMASI ──────────────────────
{ t:"1900-06-26", b:"Toro Antlaşması — Toro Krallığı İngiliz Uganda Protektorası'nın özerk bir parçası oldu", tur:"antlasma", onem:2, dunya:1, kapsam:"dis", yer_id:"Fort Portal (Toro)",
  etiket:["antlasma","konu-siyasi"],
  d:"Bunyoro'nun 1899'da düşüşünün ardından komşu Toro Krallığı, 1896'dan beri süren İngiliz himayesini 1900 Uganda Antlaşması çerçevesinde resmîleştirdi; başşehir Fort Portal dahil krallık, İngiliz Uganda Protektorası içinde özerk bir yerel idare statüsü kazandı.",
  kaynak:"standart akademik/ansiklopedik (1900 Uganda Agreement ve Toro'nun protektora içi statüsü — Britannica 'Uganda/History', Low, Buganda in Modern History) — TDV kapsam dışı; veri 1900-06-26 taşıyor, gün ayrıca doğrulanmadı (Uganda Antlaşması'nın genel çerçevesiyle uyumlu)" },

// ── 16. İLORİN'İN KRALİYET NİJER ŞİRKETİ'NE DÜŞÜŞÜ ───────────────────
{ t:"1897-02-16", b:"İlorin Emirliği, Kraliyet Nijer Şirketi kuvvetlerince ele geçirildi", tur:"toprak-kayip", onem:3, dunya:2, kapsam:"dis", yer_id:"İlorin",
  etiket:["askeri","toprak-kayip","konu-askeri"],
  d:"Sokoto Halifeliği'ne tâbi İlorin Emirliği, Sir George Goldie komutasındaki Kraliyet Nijer Şirketi kuvvetlerinin Şubat 1897 seferinde ele geçirildi; emirliğin askerî gücü kırıldı ve bölge fiilen İngiliz nüfuzuna girdi (resmî ilhak Kuzey Nijerya Protektorası'nın 1900'de kuruluşuyla tamamlandı).",
  kaynak:"standart akademik/ansiklopedik (Royal Niger Company'nin İlorin seferi, Şubat 1897 — Britannica 'Ilorin', Flint, Sir George Goldie and the Making of Nigeria) — TDV kapsam dışı, GÜN KABA (veri 1897-02-16 taşıyor, ay/yıl kaynakla uyumlu)" },

// ── 17. AK-MEÇİT'İN RUSYA'YA DÜŞÜŞÜ ───────────────────────────────────
{ t:"1853-07-28", b:"Ak-Meçit Kalesi Rus kuvvetlerince alındı — Hokand Hanlığı'nın Sirderya hattı çöktü", tur:"toprak-kayip", onem:3, dunya:2, kapsam:"dis", yer_id:"Ak-Meçit (Perovsk)",
  etiket:["askeri","toprak-kayip","konu-askeri"],
  d:"General Vasili Perovski komutasındaki Rus kuvvetleri, Hokand Hanlığı'na ait Sirderya kıyısındaki Ak-Meçit Kalesi'ni Temmuz 1853'te uzun bir kuşatmanın ardından ele geçirdi; kale sonradan Perovsk adıyla Rus Türkistanı'nın ileri karakolu oldu.",
  kaynak:"standart akademik/ansiklopedik (Fall of Ak-Mechet/Perovsk, Temmuz 1853 — Britannica 'Kyzylorda', MacKenzie, The Lion of Tashkent) — TDV kapsam dışı; veri 1853-07-28 taşıyor, ay/yıl kaynakla uyumlu, gün ayrıca doğrulanmadı" },

// ── 18. DUBROVNIK'İN MACARİSTAN'A BAĞLANMASI ──────────────────────────
{ t:"1358-01-01", b:"Zadar Antlaşması — Dubrovnik, Venedik'ten Macaristan himayesine geçti", tur:"antlasma", onem:3, dunya:3, kapsam:"dis", yer_id:"Dubrovnik",
  etiket:["antlasma","konu-siyasi"],
  d:"18 Şubat 1358'de imzalanan Zadar Antlaşması, Venedik'in Dalmaçya üzerindeki 150 yıllık hâkimiyetine son verdi; Dubrovnik (Ragusa) böylece Venedik idaresinden çıkıp Macar Kralı I. Layoş'un himayesi altına giren yarı özerk bir cumhuriyet statüsü kazandı.",
  kaynak:"standart akademik/ansiklopedik (Peace of Zadar, 18 Şubat 1358 — Encyclopaedia Britannica 'Dubrovnik/History', Fine, The Late Medieval Balkans) — TDV kapsam dışı; veri 1358-01-01 taşıyor (yıl doğru, GÜN farklı — kaynak 18 Şubat diyor, bildiriliyor)" },

// ── 19. SİNOP'UN CANDAROĞULLARI'NA GEÇİŞİ ─────────────────────────────
{ t:"1322-01-01", b:"Sinop, Gazi Çelebi tarafından ele geçirilip Candaroğulları nüfuzuna girdi", tur:"toprak-kazanc", onem:2, dunya:1, kapsam:"dis", yer_id:"Sinop",
  etiket:["askeri","toprak-kazanc","konu-askeri"],
  d:"İlhanlı hâkimiyetinin zayıflamasıyla Kastamonu ve Sinop bölgesinde güçlenen Candaroğlu (İsfendiyaroğlu) beyliğinin kurucu ailesinden Gazi Çelebi, 1322 civarında Sinop'u ele geçirerek şehri beyliğin bir liman merkezi hâline getirdi.",
  kaynak:"standart akademik/ansiklopedik (Candaroğulları'nın Sinop'u ele geçirmesi, ~1322 — Uzunçarşılı, Anadolu Beylikleri; TDV kapsam dışı bu ayrıntı için — bilinen 'candar-ogullari' slug'ı ölçülmedi), GÜN KABA, kesinlik düşük" },

// ── 20. ALANYA'NIN ANADOLU BEYLİKLERİ ARASINDA EL DEĞİŞTİRMESİ ────────
{ t:"1293-01-01", b:"Alanya (Alâiye), Selçuklu sonrası dönemde yerel bir beyliğin denetimine girdi", tur:"toprak-kazanc", onem:1, dunya:1, kapsam:"dis", yer_id:"Alanya",
  etiket:["askeri","toprak-kazanc","konu-askeri"],
  d:"Anadolu Selçuklu Devleti'nin 1290'larda fiilen çözülmesiyle, Akdeniz kıyısındaki Alâiye (Alanya) limanı merkezi otoriteden bağımsızlaşarak bölgedeki beyliklerin (bu dönemde Karamanoğulları etki alanında) denetimine girdi; kesin tarih ve hangi beyliğin doğrudan hâkim olduğu kaynaklarda net değildir.",
  kaynak:"standart akademik/ansiklopedik (Anadolu Selçuklu çözülüşü sonrası Alâiye'nin durumu — Cahen, Pre-Ottoman Turkey) — TDV kapsam dışı bu ayrıntı için, DÜŞÜK GÜVEN: kesin devir olayı ve tarihi BULUNAMADI, veri kaydıyla (1293) hizalandı, ayrıca araştırılmalı" },

];
