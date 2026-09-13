// =====================================================================
// PAKET 0050 — PAKET-KRON3 KRONOLOJİ (13 Eylül 2026, 1.MURAT sevki)
// Rapor: denetim/PAKET-KRON3-0913.md
//
// NİÇİN: PAKET-KAPSAM (ae251c0) 90 çekirdek maddeyi kapsam:"dis" işaretledi.
// Osmanlı listesine ileride 'dis' süzgeci bağlanırsa, ±30 günde YALNIZ 'dis'
// maddelerin durduğu harita kırılmaları sessizleşir (D147). Bunlardan Osmanlı
// dünyasını ilgilendiren beşi bugün de ANLATILMAMIŞTI — kapatan madde başka bir
// olaydı (Demak 1527 · Kiel 1814 · Assab 1882 · Trianon 1920 · Tannu Tuva 1922).
// Bu dosya o geçişleri KENDİ maddeleriyle yazar (+ M-3866 hükmüyle Bihaç'ın
// TDV'deki kısa Osmanlı idaresi).
//
// ÖLÇÜM ALETİ: denetim/ARAC-KPS-KIRILMA-0913.js (+ genelleştirilmiş hâli
// raporda: bütün 135 'dis' madde, 130 kırılma, 21'i Osmanlı-hiç yerleşimli).
//
// 🔴 TARİH KAYNAKTAN. Atlasın kırılma günü DAYANAK DEĞİLDİR (CLAUDE.md §4
//   "ATLAS REFERANS DEĞİLDİR"). Kaynak günü atlasınkinden farklıysa fark
//   raporda "atlas düzelecek yer" listesindedir (Dubrovnik 1814).
// TAKVİM: 1527 Jülyen (çevirme yok). 1814 · 1920 · 1922 Gregoryen kaynak.
//   1882: Sırp kanunu Jülyen 22 Şubat → Gregoryen 6 Mart; ÇEVİRME YAPILDI ve
//   ilgili maddenin ic_not_gun alanında yazılıdır (VERI-YAPISI TAKVİM).
// AD ALANI (§7): data/olaylar_p0050.js → window.OLAYLAR_P0050
// 🔴 index.html satırı BAĞLI DEĞİL (koordinatör ekler) — bağlanmadan CANLI
//   DEĞİLDİR (D099). denetle.py olaylar*.js glob'uyla okur.
// =====================================================================

window.OLAYLAR_P0050 = [

// ── Bihaç 1527 · ① Cetin seçimi ─────────────────────────────────────
{ t:"1527-01-01", k:"siyaset", kapsam:"ic", etiket:["siyaset","diplomasi","konu-siyasi","konu-diplomasi"],
  b:"Cetin Meclisi — Hırvat soyluları Mohaç'tan sonra Habsburg Ferdinand'ı Hırvatistan kralı seçti",
  gun:"1 Ocak 1527",
  yer:"Cetin (Cetingrad), Hırvatistan Krallığı ve Una-Kupa serhaddi",
  kisiler:"Avusturya Arşidükü I. Ferdinand",
  d:"Mohaç'ta Macar-Hırvat kralı II. Lajos'un ölümüyle taht boşalınca Hırvat soyluları 31 Aralık 1526'da Cetin'de toplandı ve yılbaşı günü Avusturya arşidükü Ferdinand'ı kral ilan etti. TDV'nin ifadesiyle Hırvatlar bu seçimi Macar soylularından bağımsız olarak yaptılar; seçim belgesi, Osmanlı akınları karşısında hıristiyan devletten kopmamak gerekçesine dayanıyordu. Böylece Osmanlı Bosnası'na komşu Hırvat kaleleri Habsburg hânedanının tacına bağlandı; TDV'ye göre 1530'larda Habsburglar Hırvat sınır bölgesini düzenlemeye başladığında bu hattın ana merkezi Bihaç oldu.",
  ic_not_gun:"TDV hirvatistan yalnız yıl verir ('Mohaç Muharebesi'nden bir yıl sonra (1527)'). Gün: Hrvatski sabor (Hırvatistan Meclisi resmî tarih sayfası 'Sabor u Cetinu 1527. godine', okundu) — meclis 31 Aralık 1526'da toplandı, seçim 'na samu Novu godinu' ilan edildi. 1527 Jülyen dönemi, çevirme yok. Atlasın 1527-01-01 Bihaç kırılması (macaristan→avusturya) DAYANAK ALINMADI; gün kaynağa denk geldi.",
  ic_not_d:"Bihaç bu maddenin yer_id'si YAPILMADI: TDV bihac aynı yıl için Bihaç'ın 'kısa bir süre için' Osmanlı idaresine geçtiğini yazıyor (bir sonraki madde). İki TDV cümlesi birbirini çürütmez: seçim tacın hukukî devrini, öteki kalenin fiilî idaresini anlatır. Seçim belgesini imzalayan soylu/temsilci adları yalnız Vikipedi özetinde görüldü, yazılmadı. L. Margetić, 'Cetinski sabori u 1527.', Senjski zbornik 17 (1990) künyesi bulundu, OKUNMADI.",
  kaynak:"hirvatistan · bihac + Hrvatski sabor, 'Sabor u Cetinu 1527. godine' (sabor.hr, resmî)" },

// ── Bihaç 1527 · ② TDV bihac: Yayça sonrası kısa Osmanlı idaresi (M-3866 hükmü) ──
{ t:"1527-01-01", kesinlik:"yil", k:"fetih", kapsam:"ic", etiket:["toprak-kazanc","konu-askeri"],
  b:"Bihaç'ın kısa süreli Osmanlı idaresi — Mohaç ve Yayça'nın düşüşünün ardından",
  gun:"1527 (Yayça'nın alınmasından sonra; süre 'kısa')",
  yer:"Bihaç (Bihke), Yayça (Jajce), Una serhaddi", yer_id:"Bihaç (Bihać)",
  kisiler:"",
  d:"Mohaç zaferinin ardından Osmanlılar Bosna'da Macar tampon bölgesinin merkezi Yayça'yı ve Banaluka'yı aldı. TDV'nin Bihaç maddesine göre Mohaç'ı izleyen yılda Yayça Kalesi'nin alınmasından sonra Bihaç kısa bir süre için yeniden Osmanlılar'ın idaresine geçti. Kalenin ne zaman ve nasıl elden çıktığı kaynakta yazmıyor; TDV yalnız 1530'larda Habsburgların Hırvat sınır bölgesini düzenlerken hıristiyanların elindeki Bihaç'ı ana merkez yaptığını belirtir. Bihaç'ın kalıcı fethi 1592'de Bosna Beylerbeyi Hasan Paşa'nın seferiyle gerçekleşecekti.",
  ic_not_gun:"TEK KAYNAK: TDV (M-3866). TDV bihac: 'Mohaç Savaşı'nı (1526) izleyen yılda Yayça Kalesi'nin alınmasından sonra … kısa bir süre' ⇒ yıl 1527, gün ve bitiş YOK → YYYY-01-01 + kesinlik:'yil' (§4). ⚠️ TDV bosna-hersek Yayça ve Banaluka için '(1527 veya 1528)' diyor — iki TDV maddesi yılda tam örtüşmüyor, bildirildi (§4⑥); tarih bihac'ın kendi cümlesinden alındı. Bitiş uydurulmadı, metinde 'kısa süre' kaldı.",
  ic_not_d:"ATLAS DÜZELECEK YER (koşu sonrası yerleşim yaması): Bihaç kaydında 1592 öncesi hiç d: yok. Aynı TDV gövdesi ayrıca 'Stjepan Tomašević'in tutuklanmasından sonra Osmanlı hâkimiyetine girdi (1463)' diyor — o da atlasta yok; bu paket 1463 için madde yazmadı (sevk 1527-28 idi). Bitiş günü kaynakta olmadığı için yama önerisi dönem SONUNU veremez — ölçülemedi.",
  kaynak:"bihac · bosna-hersek" },

// ── Dubrovnik 1814 ────────────────────────────────────────────────
{ t:"1814-01-28", k:"siyaset", kapsam:"ic", etiket:["siyaset","toprak","konu-siyasi","konu-askeri"],
  b:"Dubrovnik'te Fransız idaresinin sonu — eski Osmanlı haraçgüzârı şehre Avusturya kuvvetleri girdi",
  gun:"28 Ocak 1814",
  yer:"Dubrovnik (Ragusa), Gruž", yer_id:"Dubrovnik",
  kisiler:"Avusturya general-majörü Milutinović",
  d:"TDV'ye göre 1365'ten beri Osmanlı himayesinde bulunan Dubrovnik Cumhuriyeti'ne Fransızlar 27 Mayıs 1806'da şehri zaptederek son vermişti. 1813-1814 kışında şehir halkı Fransızlara karşı ayaklandı; 3 Ocak 1814'te iki Hırvat taburuyla Gruž'a gelen Avusturya general-majörü Milutinović garnizonu kuşattı; dört günlük bombardımanın ardından Fransız garnizonu generale elçi gönderdi. 28 Ocak şafağında Avusturya ve İngiliz birlikleri Gruž'dan şehre yürüdü; 31 Ocak'ta bölgede geçici Avusturya idaresi işlemeye başladı. Şehrin Avusturya topraklarına katılışı 1815 Viyana Kongresi'nde kesinleşti.",
  ic_not_gun:"TDV dubrovnik 1814 için gün/yıl VERMEZ (yalnız 27 Mayıs 1806 Fransız zaptı ve 1815 Viyana Kongresi). Gün: Frano Bona, 'Osvrt na ustanak podignut u Dubrovniku 1813.–1814.', Kolo 2/2008, Matica hrvatska (okundu: 3 Ocak Milutinović Gruž'da · 28 Ocak şafak yürüyüş). İdare başlangıcı: Državni arhiv u Dubrovniku, HR-DADU-310 inventarı girişi (okundu: 'Intendenza della Provincia di Ragusa Provvisorio' 31 Ocak 1814). Gregoryen. ATLAS DÜZELECEK YER: Dubrovnik s: fransa-cumhuriyet→avusturya 1814-01-01 (yuvarlak) → 1814-01-28 (ya da idare için 01-31); fark 27 gün, Değişmez 2s penceresi içinde.",
  kaynak:"dubrovnik + F. Bona, Kolo 2/2008 (Matica hrvatska) + Državni arhiv u Dubrovniku HR-DADU-310" },

// ── Sırbistan Krallığı 1882 ───────────────────────────────────────
{ t:"1882-03-06", k:"siyaset", kapsam:"ic", etiket:["siyaset","konu-siyasi"],
  b:"Sırbistan Krallığı'nın ilânı — eski Osmanlı tâbii prenslik krallığa dönüştü",
  gun:"6 Mart 1882 (Sırp takvimiyle 22 Şubat)",
  yer:"Belgrad, Niş, Semendire, Kragujevac", yer_id:"Belgrad",
  kisiler:"Kral I. Milan (Milan Obrenoviç)",
  d:"1878'de bağımsızlığını kazanan ve aynı yıl Osmanlı elindeki Niş'i de alan Sırbistan Prensliği, Milan Obrenoviç döneminde krallığa dönüştürüldü. Belgrad'da çıkarılan kanunun ilk maddesiyle prenslik Sırbistan Krallığı ilan edildi ve Prens Milan I. Milan adıyla kral oldu; kanun aynı gün resmî Srpske novine gazetesinde yayımlandı. Böylece 1878'e kadar Osmanlı'ya bağlı bir prenslik olan Sırbistan, Balkanlar'da krallık unvanıyla yerini aldı.",
  ic_not_gun:"TDV sirbistan yalnız yıl verir ('Prens Milan Obrenoviç 1882'de krallığını ilân etti'). Gün BİRİNCİL kaynaktan: 'Zakon o proglašenju Knjažestva Srbije za Kraljevinu', Srpske novine sy. 41, Pazartesi 22 Şubat 1882 (metin Vikizvornik transkripsiyonundan okundu; Vikizvornik burada dayanak değil, neşrin taşıyıcısı). 🔴 TAKVİM: Sırbistan 1882'de Jülyen kullanıyordu; 22 Şubat Jülyen = 6 Mart Gregoryen (+12 gün). ÇEVİRME YAPILDI çünkü atlasın 19. yüzyıl komşu kayıtları Gregoryen (VERI-YAPISI TAKVİM: yapıldıysa yazılır). Atlasın 1882-03-06 kırılması ve kronoloji_sirbistan.js aynı günü DAYANAK ALINMADI.",
  kaynak:"sirbistan · nis + Zakon o proglašenju Knjažestva Srbije za Kraljevinu, Srpske novine 41 (22.II.1882)" },

// ── Filistin sivil idaresi 1920 ───────────────────────────────────
{ t:"1920-07-01", k:"siyaset", kapsam:"ic", etiket:["siyaset","konu-siyasi"],
  b:"Filistin'de İngiliz sivil manda idaresi kuruldu — Osmanlı'dan alınan topraklarda askerî yönetimin sonu",
  gun:"1 Temmuz 1920",
  yer:"Kudüs, Gazze, Yafa, Akkâ, Nablus", yer_id:"Kudüs",
  kisiler:"Yüksek Komiser Herbert Samuel",
  d:"1917'de General Allenby'nin Gazze'yi ve ardından Kudüs'ü almasıyla Filistin'de dört yüz yıllık Osmanlı hâkimiyeti sona ermiş, Kudüs 1917-1920 arasında İngiliz askerî yönetiminde kalmıştı. 1920 San Remo Konferansı Filistin'i İngiliz mandasına verdi; İngiltere Temmuz 1920'den itibaren bölgede sivil bir manda yönetimi kurarak ülkeyi bir yüksek komiser aracılığıyla yönetmeye başladı. Sivil idarenin başında yüksek komiser Herbert Samuel vardı. Aynı yıl başlayan Arap ayaklanmaları ve yahudi-Arap çatışmaları manda döneminin bütününe damga vuracaktı.",
  ic_not_gun:"TDV filistin AY verir: 'İngiltere, Temmuz 1920 tarihinden itibaren Filistin'de bir sivil manda yönetimi kurdu'. Gün RESMÎ kaynaktan: 'An Interim Report on the Civil Administration of Palestine during the period 1st July, 1920–30th June, 1921', H. Samuel, Parlamentoya sunulan rapor, Ağustos 1921 — künye Yale/HathiTrust/WorldCat kataloglarından okundu; raporun GÖVDESİ OKUNMADI, gün raporun resmî dönem başlığından. Gregoryen. Atlasın 1920-07-01 kırılması DAYANAK ALINMADI.",
  kaynak:"filistin · kudus · gazze + Interim Report on the Civil Administration of Palestine, 1st July 1920–30th June 1921 (HMSO 1921)" },

// ── Mısır Krallığı 1922 ───────────────────────────────────────────
{ t:"1922-03-15", k:"siyaset", kapsam:"ic", etiket:["siyaset","konu-siyasi"],
  b:"Mısır Krallığı ilan edildi — Sultan Ahmed Fuâd kral unvanını aldı",
  gun:"15 Mart 1922",
  yer:"Kahire, İskenderiye", yer_id:"Kahire",
  kisiler:"Sultan (Kral) Ahmed Fuâd",
  d:"İngiltere 18 Aralık 1914'te Osmanlı Devleti'nin Mısır üzerindeki hükümranlık haklarını tek taraflı olarak kaldırıp ülkeyi himayesine almıştı. Savaş sonrasında İngiltere ile Mısır arasındaki müzakerelerden sonuç çıkmayınca İngiltere 28 Şubat 1922'de yine tek taraflı bir bildiriyle Mısır'ı bağımsız devlet ilan etti. Sultan Ahmed Fuâd 15 Mart 1922'de kral (melik) unvanını aldı ve Mısır'da monarşi ilan edildi. TDV bu bağımsızlığı şeklî sayar; krallık düzeninin anayasası 19 Nisan 1923'te yürürlüğe girecekti.",
  ic_not_gun:"Gün TDV'den: misir gövdesi 'Sultan Ahmed Fuâd 15 Mart 1922'de kral (melik) unvanını aldı ve Mısır'da monarşi ilân edildi'. Aynı gövde bağımsızlık bildirisini 28 Şubat 1922, himayeyi 18 Aralık 1914 verir. Atlasın 1922-03-15 kırılması (misir-sultanligi→misir-kralligi) DAYANAK ALINMADI; gün kaynağa denk.",
  kaynak:"misir" }

];
