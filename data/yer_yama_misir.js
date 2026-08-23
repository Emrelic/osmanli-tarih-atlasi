// =====================================================================
// OLAY MAHALLİ YAMASI — MISIR  (23 Ağustos 2026)
// Oturum: DOĞU AFRİKA KRONOLOJİ · görev tahta M-1145
// =====================================================================
// KAYNAK DOSYA : data/kronoloji_misir.js  (120 madde, 35'i yer_id'siz)
// BU DOSYA     : data/yer_yama_misir.js → window.YER_YAMA_MISIR
// ⚠️ Kronoloji dosyasına DOKUNULMADI. Yamayı koordinatör uygular.
// ANAHTAR: dosya + t + b (ÜÇÜ BİRDEN). `b` alanları kaynaktan BİREBİR
// kopyalandı — elle yazılmadı, bir üreteç betiği çıkardı.
//
// ── KOVALAR (M-1145 hükmüne göre) ─────────────────────────────────
//   yer_id                      havuzda VAR olan yerleşim
//   eksik_nokta (koordinatlı)   yer BELLİ, havuzda YOK
//   eksik_nokta + enlem:null    "ARANDI, BULUNAMADI" hâli — yeni alan
//                               AÇILMAZ, hâl mevcut biçimin içinde
//                               ifade edilir (M-1145)
//   kapsam_genis                olay TEK NOKTAYA SIĞMAZ (bir KARAR)
//
// ── 🔴 İKİ YAZIM KURALI ALTI KEZ TUTTU ────────────────────────────
// M-1140'ta herkese bildirilen Türkçe-yazım tuzağı bu dosyada ALTI
// kaydı kurtardı. Tek yazımla arasaydım altısına da "havuzda YOK"
// hükmü verecektim:
//     Sâlihiye     ✗ →  Sâlihiyye            ✓
//     Ebûkır       ✗ →  Ebûkîr               ✓  (ı → î)
//     Reşid        ✗ →  Reşîd (Rosetta)      ✓  (parantezli ad)
//     Dir'iye      ✗ →  Dir'iye (Necid)      ✓  (parantezli ad)
//     Fâşir        ✗ →  El-Fâşir             ✓  (harf-i tarif)
//     Ümmüdurman   ✗ →  Ümmü Dermân          ✓  (İKİ KELİME)
// 📌 Ve son ikisi AD ARAMASIYLA DEĞİL, KUTU TARAMASIYLA bulundu:
//    yerin bilinen koordinat kutusundaki bütün havuz noktaları
//    listelendi. ⇒ **Ad araması bir tuzaksa, konum araması onun
//    panzehiridir.** Bir adı bulamadığında ARAMAYI BIRAKMA — aynı
//    yeri KOORDİNATTAN ara. (Bu, M-1140'a eklenecek ikinci ayaktır.)
//
// ── ⚠️ İKİNCİL YER TUZAĞI — beş kez uygulandı ─────────────────────
//   Paris Antlaşması   metin MISIR'ı anlatır      → mahal PARİS
//   Londra Antlaşması  metin Mısır ve Akkâ'yı     → mahal LONDRA
//   1824 Mora talebi   metin MORA ve GİRİT'i      → mahal İSTANBUL
//   1839 ortak nota    metin Avrupa ve Mısır'ı    → mahal İSTANBUL
//   1770 Suriye seferi metin ŞAM ve FİLİSTİN'i    → mahal KAHİRE
//                      (seferin HEDEFİ ≠ olay mahalli)
//
// ── 🔴 DOSYALAR ARASI TUTARLILIK — kasten sağlandı ────────────────
//   1865-01-01 Sevâkin/Masavva/Dahlak  →  Masavva
//     Aynı olayı `kronoloji_dogu_afrika.js`te de Masavva'ya bağlamıştım.
//     Aynı olay iki dosyada AYNI mahalli taşımalı — `dunya` puanı için
//     geçerli olan kural olay mahalli için de geçerlidir.
//   1859 Süveyş kazısı → Portsaid · 1863 → İsmâiliye
//     `olaylar_7a4170.js` bu iki olayı zaten bu yer_id'lerle taşıyor.
//
// ── ⚠️ İKİ AÇIK KARAR — koordinatör isterse çevirebilir ───────────
//  ① 1883 ŞEYKAN → `yer_id:"Kordofan (Ubeyyid)"`. Şeykan ne havuzda ne
//     GeoNames'te var. Madde metni olayı "Kordofan çölünde" diye
//     çerçeveliyor ve seferin hedefi El-Ubeyyid'di; muharebe alanı bu
//     şehrin ~50 km güneyindedir. UYDURMA KOORDİNAT yerine kaynağın
//     verdiği çerçeve seçildi.
//  ② 1798 EHRAMLAR → Kahire'ye DEĞİL, `eksik_nokta:"İmbâbe"`ye bağlandı
//     (~5 km). Muharebenin kendi sahnesi var; gerçek bir şehri savaş
//     alanı diye göstermemek için ayrı nokta yazıldı.
//
// ── KAYNAK ────────────────────────────────────────────────────────
// Tarihî çerçeve: maddelerin kendi `d:` metinleri (TDV dayanaklı).
// Koordinat: GeoNames — her nokta için derece-dakika-saniye değeri
// `kaynak:` alanında AYNEN yazılı. Vikipedi kullanılmadı.
// =====================================================================

window.YER_YAMA_MISIR = [

{ dosya:"kronoloji_misir.js", t:"1770-11-01",
  b:"Ali Bey'in Zâhir el-Ömer ile ittifak kurup Suriye seferini başlatması",
  yer_id:"Kahire",
  kaynak:"seferin BASLATILDIGI yer Ali Bey'in merkezi Kahire'dir. ⚠️ İKİNCİL YER TUZAĞI: metindeki Şam ve Filistin SEFERİN HEDEFİDİR, olay mahalli değil" },

{ dosya:"kronoloji_misir.js", t:"1771-06-11",
  b:"Ebu'z-Zeheb'in ihaneti — Şam'dan Mısır'a ani dönüşü",
  yer_id:"Şam",
  kaynak:"ihanet ve ani dönüş kararı Şam'da alındı — olay ORADA geçiyor" },

{ dosya:"kronoloji_misir.js", t:"1773-04-01",
  b:"Sâlihiye Muharebesi — Ali Bey'in Ebu'z-Zeheb tarafından bozguna uğratılması",
  yer_id:"Sâlihiyye",
  kaynak:"🔴 İKİ YAZIM KURALI TUTTU: \"Sâlihiye\" ve \"Salihiyye\" havuzda YOK; \"Sâlihiyye\" VAR (30,793/31,986). Tek yazımla arasaydım \"yok\" hükmü verecektim" },

{ dosya:"kronoloji_misir.js", t:"1773-05-08",
  b:"Ali Bey el-Kebir'in ölümü",
  yer_id:"Kahire",
  kaynak:"Sâlihiyye'de yaralanıp esir alındı, birkaç gün sonra Kahire'de öldü" },

{ dosya:"kronoloji_misir.js", t:"1775-06-01",
  b:"Ebu'z-Zeheb'in Zâhir el-Ömer'e karşı seferde ölümü",
  yer_id:"Akkâ",
  kaynak:"Zâhir el-Ömer'e karşı Suriye seferi sırasında Akkâ önlerinde öldü" },

{ dosya:"kronoloji_misir.js", t:"1798-07-21",
  b:"Ehramlar (İmbâbe) Muharebesi — Kölemen süvarisinin dağılması",
  eksik_nokta:{ ad:"İmbâbe (Ehramlar)", enlem:30.075, boylam:31.191,
    kaynak:"GeoNames `Imbabah`, Giza (N 30°04′29″ / E 31°11′26″). Ehramlar Muharebesi'nin gerçek sahnesi Giza karşısındaki İmbâbe'dir. Havuzdaki Kahire ~5 km doğudadır; muharebeye kendi noktası verildi" } },

{ dosya:"kronoloji_misir.js", t:"1801-03-08",
  b:"Kavalalı Mehmed Ali Mısır'a çıktı",
  yer_id:"Ebûkîr",
  kaynak:"🔴 İKİ YAZIM KURALI TUTTU: \"Ebûkır\"/\"Ebukir\"/\"Aboukir\" havuzda YOK; \"Ebûkîr\" VAR (31,317/30,062). Osmanlı çıkarması bu koyda yapıldı" },

{ dosya:"kronoloji_misir.js", t:"1802-06-25",
  b:"Paris Antlaşması — Fransa ile barışın kurulması",
  yer_id:"Paris",
  kaynak:"antlaşmanın İMZA YERİ. Metin Mısır'ı anlatır, mahal Paris'tir" },

{ dosya:"kronoloji_misir.js", t:"1807-04-21",
  b:"Reşid bozgunu — İngilizlerin püskürtülmesi",
  yer_id:"Reşîd (Rosetta)",
  kaynak:"🔴 İKİ YAZIM KURALI TUTTU: \"Reşid\" havuzda YOK, \"Reşîd (Rosetta)\" VAR (31,399/30,417)" },

{ dosya:"kronoloji_misir.js", t:"1813-05-02",
  b:"Tâif'in geri alınması — Hicaz seferinin tamamlanışı",
  yer_id:"Tâif",
  kaynak:"fethin gerçekleştiği şehir" },

{ dosya:"kronoloji_misir.js", t:"1815-01-20",
  b:"Bisel Muharebesi — Suûdî kuvvetlerinin bozguna uğraması",
  eksik_nokta:{ ad:"Bisel (Hicaz)", enlem:null, boylam:null,
    kaynak:"bulunamadı — Bisel/Basal muharebe alanı ne havuzda ne GeoNames'te (SA) bulundu. Hicaz'da Turabe-Ranye yöresinde arandı, kasaba özelinde konum veren kaynak ÇIKMADI. ARANDI, BULUNAMADI — aranmadı değil" } },

{ dosya:"kronoloji_misir.js", t:"1818-09-09",
  b:"Dir'iye'nin düşüşü — İlk Suûdî Devleti'nin sonu",
  yer_id:"Dir'iye (Necid)",
  kaynak:"🔴 İKİ YAZIM KURALI TUTTU: \"Dir'iye\" havuzda YOK, \"Dir'iye (Necid)\" VAR (parantezli ad)" },

{ dosya:"kronoloji_misir.js", t:"1820-07-20",
  b:"Sudan seferinin başlaması",
  yer_id:"Kahire",
  kaynak:"seferin BAŞLATILDIĞI yer. Hedef Sennâr ve Kordofan'dır ama olay mahalli çıkış noktasıdır" },

{ dosya:"kronoloji_misir.js", t:"1821-06-01",
  b:"Jumel pamuğunun Mısır tarımına girmesi",
  yer_id:"Kahire",
  kaynak:"TDV/madde metni: pamuk türü \"Kahire'deki bir bahçede\" fark edildi. Yaygınlaşma Delta'dadır ama olay KEŞİFTİR" },

{ dosya:"kronoloji_misir.js", t:"1821-08-19",
  b:"Kordofan'ın ele geçirilmesi",
  yer_id:"Kordofan",
  kaynak:"bir BÖLGENİN fethi; havuzda `Kordofan` bölge noktası VAR (13,0/29,5). ⚠️ Havuzda ayrıca `Kordofan (Ubeyyid)` şehir noktası da var — bölge fethi için bölge noktası seçildi" },

{ dosya:"kronoloji_misir.js", t:"1822-10-24",
  b:"İsmâil Paşa'nın Şendî'de öldürülmesi",
  yer_id:"Şendî",
  kaynak:"olayın geçtiği kasaba" },

{ dosya:"kronoloji_misir.js", t:"1824-07-19",
  b:"II. Mahmud'un Mora için Mehmed Ali'den yardım istemesi",
  yer_id:"İstanbul",
  kaynak:"padişahın kararı ve talebi İstanbul'da verildi. ⚠️ Metindeki Mora ve Girit TALEBİN KONUSUDUR, mahal değil" },

{ dosya:"kronoloji_misir.js", t:"1825-02-24",
  b:"İbrâhim Paşa'nın Mora'ya çıkması",
  yer_id:"Modon",
  kaynak:"çıkarma Mora'nın güneybatı ucunda, Modon (Methoni) civarında yapıldı — havuzdaki en yakın gerçek yerleşim" },

{ dosya:"kronoloji_misir.js", t:"1826-01-01",
  b:"Mehmed Ali'nin Paris'e ilk büyük öğrenci heyetini göndermesi",
  yer_id:"Paris",
  kaynak:"heyetin GİTTİĞİ yer; öğrenim orada geçti" },

{ dosya:"kronoloji_misir.js", t:"1826-04-22",
  b:"Missolonghi'nin düşüşü",
  eksik_nokta:{ ad:"Missolonghi", enlem:38.371, boylam:21.431,
    kaynak:"GeoNames `Mesolongi`, Batı Yunanistan (N 38°22′16″ / E 21°25′53″). Havuzda YOK" } },

{ dosya:"kronoloji_misir.js", t:"1827-10-20",
  b:"Navarin Baskını — Mısır donanmasının yakılması",
  eksik_nokta:{ ad:"Navarin (Pilos)", enlem:36.913, boylam:21.696,
    kaynak:"GeoNames `Pylos`, Mesenya (N 36°54′46″ / E 21°41′47″). Havuzda YOK; en yakın havuz noktası Modon ~11 km güneyde, ama baskın NAVARİN KOYUNDA oldu, Modon'da değil" } },

{ dosya:"kronoloji_misir.js", t:"1837-10-15",
  b:"Cebel-i Dürûz ayaklanması",
  eksik_nokta:{ ad:"Cebel-i Dürûz (Süveyda)", enlem:32.709, boylam:36.569,
    kaynak:"GeoNames `As Suwayda`, Suriye (N 32°42′32″ / E 36°34′10″). Dürzî bölgesinin merkezi. Havuzda YOK" } },

{ dosya:"kronoloji_misir.js", t:"1839-06-24",
  b:"Nizip Muharebesi — İkinci Mısır Meselesi'nin zirvesi",
  eksik_nokta:{ ad:"Nizip", enlem:37.01, boylam:37.794,
    kaynak:"GeoNames `Nizip`, Gaziantep (N 37°00′35″ / E 37°47′39″). Havuzda YOK — kutu taramasında Antep yöresinde tek nokta Cerablus çıktı" } },

{ dosya:"kronoloji_misir.js", t:"1839-07-27",
  b:"Büyük devletlerin ortak notası — Mısır Meselesi'nin Avrupalılaşması",
  yer_id:"İstanbul",
  kaynak:"nota BÂBIÂLİ'ye verildi — olay mahalli İstanbul'dur. ⚠️ Metindeki \"Avrupa\" ve \"Mısır\" konudur, mahal değil" },

{ dosya:"kronoloji_misir.js", t:"1840-07-15",
  b:"Londra Antlaşması — Mehmed Ali'ye ültimatom",
  yer_id:"Londra",
  kaynak:"antlaşmanın İMZA YERİ. Metin Mısır ve Akkâ'yı anlatır, mahal Londra'dır" },

{ dosya:"kronoloji_misir.js", t:"1841-02-25",
  b:"Mısır ordusunun Suriye ve Çukurova'yı boşaltması",
  kapsam_genis:true,
  not:"Nil'den Toroslar'a uzanan bir KUŞAĞIN tahliyesi — tek noktaya sığmaz" },

{ dosya:"kronoloji_misir.js", t:"1859-04-25",
  b:"Süveyş Kanalı kazısının başlaması ve Port Said'in kuruluşu",
  yer_id:"Portsaid",
  kaynak:"kazının Akdeniz ucu ve Port Said'in çekirdeği. ⚠️ Aynı olay olaylar_7a4170.js'te de `Portsaid` yer_id'siyle kayıtlı — TUTARLI" },

{ dosya:"kronoloji_misir.js", t:"1861-06-01",
  b:"Amerikan İç Savaşı'nın Mısır pamuğuna talebi patlatması",
  kapsam_genis:true,
  not:"dünya pamuk piyasasının Mısır tarımının TAMAMINA etkisi; olay Mısır'da tek bir noktada geçmiyor" },

{ dosya:"kronoloji_misir.js", t:"1863-04-03",
  b:"İsmâiliye'nin kuruluşu — Hidiv İsmail'in Süveyş berzahındaki yatırımı",
  yer_id:"İsmâiliye",
  kaynak:"şehrin kurulduğu yer. ⚠️ olaylar_7a4170.js'te de `İsmâiliye` — TUTARLI" },

{ dosya:"kronoloji_misir.js", t:"1865-01-01",
  b:"Sevâkin, Masavva ve Dahlak'ın Mısır'a bağlanması",
  yer_id:"Masavva",
  kaynak:"ÜÇ liman birden devrediliyor ama başlıcası ve idarî merkezi Masavva'dır. 🔴 TUTARLILIK: aynı olayı ben `kronoloji_dogu_afrika.js`te de Masavva'ya bağladım — aynı olay iki dosyada AYNI mahalli taşımalı" },

{ dosya:"kronoloji_misir.js", t:"1872-01-01",
  b:"Bogos (Kerene) bölgesinin Mısır'a ilhakı",
  yer_id:"Kerene",
  kaynak:"Bogos'un havuzdaki adı `Kerene`dir (15,778/38,451) — maddenin kendi başlığı da parantez içinde bunu söylüyor" },

{ dosya:"kronoloji_misir.js", t:"1874-11-02",
  b:"Darfur Sultanlığı'nın Mısır'a ilhakı",
  yer_id:"El-Fâşir",
  kaynak:"🔴 İKİ YAZIM KURALI TUTTU: \"Fâşir\" havuzda YOK, \"El-Fâşir\" VAR (13,63/25,349). Madde metni de \"El-Fâşir'e çarpışmadan girdi\" diyor" },

{ dosya:"kronoloji_misir.js", t:"1882-09-13",
  b:"Tel el-Kebîr Muharebesi — Urâbî ordusunun dağılması",
  eksik_nokta:{ ad:"Tel el-Kebîr", enlem:30.543, boylam:31.785,
    kaynak:"GeoNames `Tall al Kabir`, Şarkiye (N 30°32′35″ / E 31°47′06″). Havuzda YOK; İsmâiliye ~55 km doğuda" } },

{ dosya:"kronoloji_misir.js", t:"1883-11-05",
  b:"Şeykan bozgunu — Sudan'daki Mısır idaresinin çöküşünün başlangıcı",
  yer_id:"Kordofan (Ubeyyid)",
  kaynak:"⚠️ AÇIK KARAR: Şeykan ne havuzda ne GeoNames'te var. Madde metni olayı \"Kordofan çölünde\" diye çerçeveliyor ve seferin hedefi El-Ubeyyid'di; muharebe alanı bu şehrin ~50 km güneyindedir. Uydurma koordinat yerine kaynağın verdiği çerçeve seçildi — koordinatör isterse `eksik_nokta`ya çevirebilir" },

{ dosya:"kronoloji_misir.js", t:"1898-09-02",
  b:"Ümmüdurman Muharebesi — Mehdî devletinin yıkılışı",
  yer_id:"Ümmü Dermân",
  kaynak:"🔴 İKİ YAZIM KURALI TUTTU: \"Ümmüdurman\"/\"Omdurman\" havuzda YOK; \"Ümmü Dermân\" (İKİ KELİME) VAR (15,645/32,477). Kutu taramasıyla bulundu, ad aramasıyla değil" },

];
