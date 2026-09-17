// ============================================================================
// YERLEŞİM — NOKTASIZLIK DOLGUSU · Orta Doğu (D4-ORTADOGU / NOKTA-ARABISTAN)
// ============================================================================
// Yazan: D4-ORTADOGU · 17 Eylül 2026 · sevk: 1.MURAT, oturumlar/KOSU13-OTOBUS.md
// Aday kaynağı: denetim/NOKTASIZLIK-ADAY-0917.json (16 komşulu yürüyüş öngörüsünün sahipsiz kümeleri)
// 🔴 AD ALANI (CLAUDE.md §7): bu dosya YALNIZ window.YERLESIMLER_NOKTA_ORTADOGU_0917 tanımlar.
//    girdi.py kaydını 1.MURAT yapar. Doğrulayıcı: node denetim/ARAC-D4-NOKTA-DOGRULA-0917.js
// Şema data/yerlesimler.js ile aynı. Kimlik yazımı komşu kayıtlarla aynı (suud-ikinci/suud-ucuncu künye
// kimliği → harita:"suud"; Mısır dönemi v: + kid:"misir-kavalali"; Mekke Şerifliği v:).
// Atlas referans değildir: günler kaynaktan; "gün komşudan" yalnız komşunun KENDİ kaynağı yazılıysa.
// bos:"devletsiz" dilimleri kaynaklı: o dilimde bölge hiçbir devletin idaresinde değildi.
//
// YAZILAMAYAN KÜMELER (künye/kaynak yok — ayrıntı denetim/D4-ORTADOGU-0916.md §20):
//   Asîr–Yemen içi (Me'rib/Cevf Şerifliği, Necrân Mekârime künyesiz) · Hâş–Kandehar (Kalat Hanlığı künyesiz) ·
//   Gazne–Kâbil (Argun ve Bâbür'ün Kâbil'i 1504-1526 künyesiz) · Abu Dabi içi (Benî Yâs künyesiz) ·
//   Figuig–Ağvât (el-Beyyiz: 1852 öncesi zincir kaynaksız)
// ============================================================================
window.YERLESIMLER_NOKTA_ORTADOGU_0917 = [

// ── Necid içi (küme 23.33°K 45.76°D · ~37.000 km²) ──
{ ad:"Dilem (Harc)", bos:"devletsiz", neden:"1281-1792 ve 1819-08-13→1824-06-01 boş: Harc'ta merkezî devlet yok (TDV necid); 1819'da Mısır garnizonu Harc'tan çekildi, bölge kabile temsilcilerine bırakıldı (Lorimer I/1091-92). 1792-01-01 EN GEÇ sınır: Suûdîler 1792'ye kadar Harc'a hâkim oldu (yıl; fethin kendi günü bulunamadı). 1818-09-09 Dir'iye teslimi, Harc işgali onu izledi. 1819-08-13 Süleymiye garnizonunun Menfûha'ya varış günü. 1838/1840 yıl: Hurşid Paşa karargâhı Harc'ta Süleymiye'de. 1824-06-01, 1891-01-24 ve 1902-01-15 künye günleri devralındı (kaynaklar yalnız yıl veriyor). Kasım 1902'de İbn Reşîd birkaç gün Dilem'de kaldı (1 Kasım 1902 yenilgisi); bu dilim modellenmedi.", tur:"kasaba", lat:23.991, lon:47.162, g:0, k:3,
  s:[{f:"1792-01-01",t:"1818-09-09",d:"suud-birinci"},{f:"1824-06-01",t:"1838-01-01",d:"suud-ikinci"},{f:"1840-01-01",t:"1891-01-24",d:"suud-ikinci"},{f:"1891-01-24",t:"1902-01-15",d:"sammar"},{f:"1902-01-15",t:"1923-10-29",d:"suud-ucuncu"}], d:[],
  v:[{f:"1818-09-09",t:"1819-08-13",k:"Mısır (İbrâhim Paşa)",statu:"vassal",kid:"misir-kavalali"},{f:"1838-01-01",t:"1840-01-01",k:"Mısır (Hurşid Paşa)",statu:"vassal",kid:"misir-kavalali"}],
  kaynak:"TDV vehhabilik ('Riyad, Harc ve Kasîm'de hâkimiyet kurdular', 1792) · TDV necid · TDV suudiler · TDV riyad (15 Ocak 1902) · Lorimer, Gazetteer of the Persian Gulf, Oman and Central Arabia I (1915) s.1089-1106, 1145 · Al-Rasheed, A History of Saudi Arabia (CUP 2010) · GeoNames 110314" },

{ ad:"Havta (Havtat Benî Temîm)", bos:"devletsiz", neden:"1281-1795 ve 1819-08-13→1824-06-01 boş (TDV necid; Lorimer I/1091). 1795-01-01 EN GEÇ, GEREKÇELİ: orta Arabistan seferleri Ahsâ seferinden (TDV vehhabilik: 1795) önce tamamlanmıştı (Al-Rasheed); Havta'nın kendi fetih yılı bulunamadı. 1819-08-13 gün komşudan: Dilem (Harc) · Lorimer I/1091-92 (aynı tahliye). 1838-1840: Hurşid Paşa bütün Necid'de Mehmed Ali'nin egemenliğini ilan etti (Lorimer I/1099); Havta Harc'taki karargâha 35 km. Havtalılar 1902'de Abdülazîz'e katıldı (Lorimer I/1145). Künye günleri devralındı.", tur:"kasaba", lat:23.496, lon:46.878, g:0, k:3,
  s:[{f:"1795-01-01",t:"1818-09-09",d:"suud-birinci"},{f:"1824-06-01",t:"1838-01-01",d:"suud-ikinci"},{f:"1840-01-01",t:"1891-01-24",d:"suud-ikinci"},{f:"1891-01-24",t:"1902-01-15",d:"sammar"},{f:"1902-01-15",t:"1923-10-29",d:"suud-ucuncu"}], d:[],
  v:[{f:"1818-09-09",t:"1819-08-13",k:"Mısır (İbrâhim Paşa)",statu:"vassal",kid:"misir-kavalali"},{f:"1838-01-01",t:"1840-01-01",k:"Mısır (Hurşid Paşa)",statu:"vassal",kid:"misir-kavalali"}],
  kaynak:"TDV necid · TDV vehhabilik · Lorimer, Gazetteer I s.1051, 1091-92, 1099, 1145; II 'Hautah' · Al-Rasheed 2010 · GeoNames 13631408" },

{ ad:"Leylâ (Eflâc)", bos:"devletsiz", neden:"Zincir ve gerekçe Havta ile aynı (TDV necid: Eflâc Necd-i Ârızî'nin bölgesi; Turki Eflâc'a hâkim oldu — Al-Rasheed). 1795 EN GEÇ, GEREKÇELİ. 1819-08-13 gün komşudan: Dilem · Lorimer I/1091-92. 🟡 1838-1840 Mısır dilimi Eflâc için ayrıca belgelenmedi; Lorimer'in 'bütün Necid' beyanına dayanıyor.", tur:"kasaba", lat:22.292, lon:46.724, g:0, k:3,
  s:[{f:"1795-01-01",t:"1818-09-09",d:"suud-birinci"},{f:"1824-06-01",t:"1838-01-01",d:"suud-ikinci"},{f:"1840-01-01",t:"1891-01-24",d:"suud-ikinci"},{f:"1891-01-24",t:"1902-01-15",d:"sammar"},{f:"1902-01-15",t:"1923-10-29",d:"suud-ucuncu"}], d:[],
  v:[{f:"1818-09-09",t:"1819-08-13",k:"Mısır (İbrâhim Paşa)",statu:"vassal",kid:"misir-kavalali"},{f:"1838-01-01",t:"1840-01-01",k:"Mısır (Hurşid Paşa)",statu:"vassal",kid:"misir-kavalali"}],
  kaynak:"TDV necid · TDV vehhabilik · Lorimer, Gazetteer II 'Aflaj'; I s.1091-99 · Al-Rasheed 2010 · GeoNames 104716" },

// ── Tâif çevresi (küme 21.65°K 42.04°D · ~19.500 km²) ──
{ ad:"Türabe", bos:"devletsiz", neden:"Boş dilim 1816-01-01→1818-09-09: Mısır garnizonları Türabe'den çekildi (Lorimer I/1086), yerine kimin geçtiği bulunamadı. Lorimer Türabe'yi güney Hicaz sayar; Tâif gibi Memlûk→Mekke Şerifliği zinciri (🟡 GEREKÇELİ). 1517-07-06 Mekke heyetinin kabulü (TDV mekke). 1801 yıl: Tâif çevresi kabileleri Vehhâbî nüfuzuna girdi (Lorimer I/1055). 1815-01-13 Bisal zaferinin ikinci günü — Türabe'nin alınışı bu zaferi İZLEDİ, günü verilmiyor (alt sınır). 1816 yıl: garnizon çekildi. 1818-09-09 🟡 GEREKÇELİ: Vehhâbî direnişinin sonu; Türabe'de Mısır idaresinin yeniden kuruluş günü bulunamadı. 1840 yıl: Mısır Hicaz'dan çekildi (TDV hicaz). 1916-06-10 Mekke ayaklanması (TDV abdullah-b-huseyin). 1919-05-26 Abdülazîz Şerif kuvvetlerini yendi (TDV abdulaziz-b-suud; Türabe savaşı).", tur:"kasaba", lat:21.214, lon:41.633, g:0, k:3,
  s:[{f:"1281-01-01",t:"1517-07-06",d:"memluk"},{f:"1801-01-01",t:"1815-01-13",d:"suud-birinci"},{f:"1916-06-10",t:"1919-05-26",d:"hicaz"},{f:"1919-05-26",t:"1923-10-29",d:"suud-ucuncu"}], d:[],
  v:[{f:"1517-07-06",t:"1801-01-01",k:"Mekke Şerifliği",statu:"vassal"},{f:"1815-01-13",t:"1816-01-01",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"},{f:"1818-09-09",t:"1840-01-01",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"},{f:"1840-01-01",t:"1916-06-10",k:"Mekke Şerifliği",statu:"vassal"}],
  kaynak:"TDV mekke ('16 ve 22 Cemâziyelâhir 923'te (6 ve 12 Temmuz 1517)') · TDV taif · TDV hicaz · TDV abdulaziz-b-suud ('26 Mayıs 1919'da Şerif Hüseyin'in kuvvetlerini yendi') · TDV abdullah-b-huseyin · Lorimer, Gazetteer I s.190-191, 1055, 1080-1086 · Al-Rasheed 2010 s.42 · GeoNames 101322" },

{ ad:"Hurma (Tâif doğusu)", bos:"devletsiz", neden:"🟡 1801→1815 zinciri Türabe'den (82 km, aynı Vehhâbî-Mısır savaşı; gün komşudan: Türabe · Lorimer I/1055, 1080-86). Lorimer'in garnizon listesinde (Bîşe, Rânye, Türabe) Hurma YOK; 1815-01-13→1818-09-09 BOŞ bırakıldı. 1919-05-26: TDV'ye göre Şerif'e verilen 'Tâif'in doğusundaki hurma vahası' izni Abdülazîz'in bu günkü zaferiyle boşa çıktı; Hurma halkının İbn Suûd'a geçişi daha önce oldu (Al-Rasheed s.42), yılı bulunamadı.", tur:"vaha", lat:21.911, lon:42.031, g:0, k:3,
  s:[{f:"1281-01-01",t:"1517-07-06",d:"memluk"},{f:"1801-01-01",t:"1815-01-13",d:"suud-birinci"},{f:"1916-06-10",t:"1919-05-26",d:"hicaz"},{f:"1919-05-26",t:"1923-10-29",d:"suud-ucuncu"}], d:[],
  v:[{f:"1517-07-06",t:"1801-01-01",k:"Mekke Şerifliği",statu:"vassal"},{f:"1818-09-09",t:"1840-01-01",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"},{f:"1840-01-01",t:"1916-06-10",k:"Mekke Şerifliği",statu:"vassal"}],
  kaynak:"TDV abdulaziz-b-suud · TDV mekke · TDV hicaz · TDV abdullah-b-huseyin · Al-Rasheed 2010 s.42 · Lorimer, Gazetteer I s.1055, 1080-1086 · GeoNames 109306" },

// ── Hadramut içi (küme 16.71°K 48.51°D · ~22.500 km²) ──
{ ad:"Seyûn (Sayvan)", tur:"sehir", lat:15.9433, lon:48.7933, g:0, k:3,
  s:[{f:"1281-01-01",t:"1450-01-01",d:"yemen-zeydi"},{f:"1450-01-01",t:"1538-01-01",d:"kesiri-sultanligi"},{f:"1635-10-22",t:"1659-01-01",d:"kesiri-sultanligi"},{f:"1659-01-01",t:"1700-01-01",d:"yemen-zeydi"},{f:"1700-01-01",t:"1923-10-29",d:"kesiri-sultanligi"}], d:[],
  v:[{f:"1538-01-01",t:"1635-10-22",k:"Kesîrî reisleri (tâbi)",statu:"vassal"}],
  neden:"🔴 1281-1450: kaynakta RESÛLÎ hâkimiyeti (1229-1454; 1280'de Hadramut alındı), sonra Tâhirî — ikisinin de künyesi YOK; atlasın Yemen konvansiyonuyla `yemen-zeydi` (harita yemen) yazıldı — bu bir YANLIŞ ATIF YAKLAŞIKLAMASIDIR, Resûlî/Tâhirî künyesi gelince düzeltilmeli. 1450: kesiri-sultanligi künye yılı (TDV 'XV. yy ikinci yarısı'). 1538-01-01: TDV yıl (Hadım Süleyman Paşa seferi); Osmanlı sancağı ama idare Kesîrî reislerinde → v:. 1635-10-22: TDV yemen, Osmanlı'nın Yemen'den son çekilişi (Muhâ) — Hadramut'a özgü bitiş cümlesi YOK. 1659-01-01: TDV 1069 (1658-59) Zeydî istilâsı. 🟡 1700-01-01: TDV 'XVIII. yy ilk yarısında' Zeydî ve Kesîrî nüfuzu zayıfladı — YARIM YÜZYIL KABALIĞI, gerçek yıl bulunamadı. 19. yy: TDV 'Sayvan Kesîrîler'in'; 1881 sonrası 'Şibâm, Sayvan ve Terîm Kesîrîler'de kaldı'.",
  kaynak:"TDV hadramut ('Hadramut içinde idareyi ellerinde bulunduranlar Kesîrî kabilesi reisleri idi'; '1069'da (1658-59) Zeydî imamı … Hadramut'u istilâ etti') · TDV yemen ('10 Cemâziyelevvel 1045'te (22 Ekim 1635) … Muhâ'dan ayrıldı') · TDV resuliler · GeoNames 70981" }

];
