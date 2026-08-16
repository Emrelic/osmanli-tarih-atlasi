// =====================================================================
// OKYANUSYA — Avustralya · Yeni Zelanda · Melanezya-Polinezya batı
// NOKTA OKYANUSYA oturumu · 16 Ağustos 2026 · şartname: oturumlar/NOKTA-OKYANUSYA.md
// tahta: M-0128 (alış) · M-0140 (teyit sorusu) · M-0161/M-0162 (kesin görev)
// =====================================================================
// ⚠️ İLK PARTİ — TAM DEĞİL. Bu dosya İş 1'in yalnız EN SAĞLAM
// doğrulanmış kesimidir: iki kesin kolonyal kur: noktası (Sydney,
// Auckland) + iki 1281 öncesi "kabile" dolgu noktası. Suva/Fiji, Hawaii
// öncesi hanedanlar ve Tuʻi Tonga İmparatorluğu BİLİNÇLİ OLARAK
// ATLANDI — künye/karar gerektiriyorlar, aşağıda ⑤'te açıklandı.
//
// KAYNAK KURALI (şartname §5): TDV Okyanusya'yı kapsamıyor — kurumsal
// akademik kaynaklar kullanıldı (Te Ara Encyclopedia of New Zealand ·
// Australian Dictionary of Biography / State Library of NSW · AIATSIS).

window.YERLESIMLER_EK30 = [

{ ad:"Sydney", tur:"sehir", lat:-33.8688, lon:151.2093, g:1, k:1,
  kur:"1788-01-26",
  kaynak:"Australian Dictionary of Biography, 'Arthur Phillip: 1788. The Foundation Year' (adb.anu.edu.au/essay/21) · State Library of NSW, First Fleet kayıtları — Vali Arthur Phillip'in Sydney Cove/Port Jackson'da koloniyi kurduğu gün, 26 Ocak 1788.",
  s:[{f:"1788-01-26",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Auckland", tur:"sehir", lat:-36.8485, lon:174.7633, g:1, k:1,
  kur:"1840-09-18",
  kaynak:"Te Ara Encyclopedia of New Zealand, 'The founding of Auckland: 1840–1869' (teara.govt.nz/en/auckland-region/page-7) — Vali William Hobson, 18 Eylül 1840'ta Tāmaki (Auckland) yarımadasını başkent olarak kurdu; 1865'e kadar Yeni Zelanda'nın başkentiydi.",
  s:[{f:"1840-09-18",t:"1923-10-29",d:"yeni-zelanda"}] },

// ── 1281 ÖNCESİ / SONRASI DOLGU — "kabile" kovası ─────────────────────
// Şartname §2 sınavı: kaynak "teşkilatlı ama merkezî devlet değil" diyor
// mu? İkisi de EVET diyor — kasitli_bosluk:true + bos:"kabile", "devletsiz"
// DEĞİL (kaynak susmuyor, açıkça klan/akrabalık temelli örgütlenme
// tarif ediyor).

{ ad:"Avustralya İç Kesimi (Orta — Arrernte bölgesi)", tur:"bolge", lat:-23.70, lon:133.88, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), Aborijin toplumlarını tanımlarken merkezî bir devlet değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil/topluluk grubu tarif ediyor (aiatsis.gov.au, 'Map of Indigenous Australia'; 'Our Societies', lryb.aiatsis.gov.au) — 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasi otorite kaydı yok." },

{ ad:"Aotearoa Māori Yerleşimi (Kuzey Adası içi)", tur:"bolge", lat:-38.10, lon:176.20, g:0, k:0,
  kur:"1300-01-01", d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"Te Ara Encyclopedia of New Zealand, 'Māori arrival and settlement' (teara.govt.nz/en/history/page-1) ve 'When was New Zealand first settled?' (teara.govt.nz/en/when-was-new-zealand-first-settled) — Doğu Polinezya'dan gelen yerleşimciler ~1300 CE civarında kalıcı yerleşim kurdu; toplum iwi/hapū (soy/akraba grubu) temelliydi, 1840 Waitangi Antlaşması'na kadar merkezî bir devlet yapısı oluşmadı." },

{ ad:"Yap", tur:"bolge", lat:9.5167, lon:138.1333, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"Britannica, 'Micronesian culture — Social hierarchy and political organization' ve akademik kaynaklar (Yapese 'sawey' haraç ağı) — Yap, Gagil'in başrahip/şefinin tepesinde olduğu, uç adalardan haraç toplayan sıkı bir kast/haraç sistemiyle örgütlenmişti, ama tek bir merkezî DEVLET hiç kurulmadı; köyler arası hiyerarşi savaş ve ittifaklarla sürekli değişiyordu — merkezî devlet YOK, teşkilatlı toplum VAR." },

{ ad:"Rapa Nui (Paskalya Adası)", tur:"bolge", lat:-27.1127, lon:-109.3497, g:0, k:0,
  kur:"1200-01-01", d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"Akademik radyokarbon kronolojisi (Journal of Pacific Archaeology, 'Refining the Chronology of Rapa Nui Settlement'; PLOS ONE, 'Rapa Nui monument (ahu) locations') — Polinezyalı yerleşim ~1200 CE'de başladı, ada 11 kabile/soy grubuna (mata) bölünmüş rekabetçi bir toplumdu; merkezî tek bir devlet 1722 Avrupa temasına kadar hiç kurulmadı." },

// ── SİYASÎ GÖVDE — künyesi YOK, KOORDİNATÖRE bildirildi (M-0180 usulü) ──
// `s:` içindeki `d:"tui-tonga-imparatorlugu"` KENDİ SEÇTİĞİM slug'dır.
// devletler.js'te KÜNYE YOK — koordinatör açacak, renk ayrı oturumdan gelecek.
// Dosya girdi.py'ye bağlı olmadığı için künyesiz kimlik bugün motoru bozmuyor.
{ ad:"Lapaha (Muʻa)", tur:"sehir", lat:-21.1792, lon:-175.1167, g:1, k:1,
  kur:"1220-01-01",
  kaynak:"UNESCO World Heritage Centre, 'The Ancient Capitals of the Kingdom of Tonga' (whc.unesco.org/en/tentativelists/5167) — Muʻa/Lapaha, Tuʻi Tonga hanedanının üçüncü ve kalıcı başkenti oldu (1220-1851 dolaylarında bölgenin coğrafi merkezi); 22 kraliyet mezarı (langi) bu döneme tarihleniyor. Hanedan çizgisi geleneksel olarak ~950 CE'ye dayanır, imparatorluk gücünün zirvesi 1200-1500 arasıdır (UNESCO; Ancient Capitals dosyası).",
  s:[{f:"1220-01-01",t:"1845-12-04",d:"tui-tonga-imparatorlugu"},
     {f:"1845-12-04",t:"1923-10-29",d:"tonga-kralligi"}] },

{ ad:"Hawaii Adaları (Birleşme Öncesi — moku/aliʻi sistemi)", tur:"bolge", lat:19.60, lon:-155.50, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"EBSCO Research Starters, 'Wars of Hawaiian Unification'; akademik kaynaklar (moku/aliʻi nui sistemi) — Polinezyalı yerleşim ~1000-1200 CE, ama 1795'te Kamehameha I'in birleştirmesine kadar her ada (Hawaiʻi, Maui, Oʻahu, Kauaʻi) kendi aliʻi nui'siyle YÖNETİLEN AYRI moku (bölge) sistemleriydi — merkezî TEK bir devlet yoktu, adalar arası sürekli savaş vardı." },

{ ad:"Bau (Fiji Konfederasyonları)", tur:"bolge", lat:-18.007, lon:178.567, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"University of the South Pacific (Suva) kaynaklı akademik çalışmalar (D. Routledge ve ötekiler), Museum of Archaeology and Anthropology (Cambridge) 'Fiji Chiefdoms' — Fiji, 1874 İngiliz ilhakına kadar üç rakip konfederasyona (Kubuna/Bau, Burebasaga/Rewa, Tovata) bölünmüştü; yavusa/mataqali (soy/klan) temelli örgütlenme vardı, merkezî TEK bir devlet hiç kurulmadı — Bau 19. yy ortasında en güçlü konfederasyon oldu ama bütün adayı birleştiren bir devlet değildi." },

// ── SUVA — koordinatörün M-0196 usulüyle: kur: EGEMENLİK DEMEK DEĞİL ────
// 1849 ticaret istasyonu ≠ egemenlik; 1874 Cession ile İngiliz egemenliği
// başlıyor. Aradaki boşluk UYDURULMADI, kasitli_bosluk+kabile ile yazıldı
// (kaynak konuşuyor: Suva köyü 1843 Bau-Rewa Savaşı'ndan beri Bau/Kubuna
// konfederasyonunun koruması altındaydı — susmuyor, "kabile" doğru kova).
{ ad:"Suva", tur:"liman", lat:-18.1416, lon:178.4419, g:1, k:1,
  kur:"1849-01-01", kasitli_bosluk:true, bos:"kabile",
  neden:"ANU Press, 'The Making of a Capital: A Social History of Suva, 1870–1882' (press-files.anu.edu.au/downloads/press/n10434/pdf/ch03.pdf) — Suva köyü 1843 Bau-Rewa Savaşı'ndan sonra Bau şefi Cakobau'nun (Kubuna konfederasyonu) koruması altına girdi; 1868'de Polynesian Company'ye arazi verildi, 1870'te Avustralyalı yerleşimciler geldi — ama bu bir EGEMENLİK değil ticarî/himaye ilişkisiydi, resmî devlet 1874 Cession'a kadar yoktu.",
  kaynak:"ANU Press, 'Suva Stories: A History of the Capital of Fiji' (JSTOR j.ctv2xc67p4) — Deed of Cession, 10 Ekim 1874, Fiji'yi resmen İngiliz egemenliğine soktu.",
  s:[{f:"1874-10-10",t:"1923-10-29",d:"ingiltere"}] },

// ── ALTINCI PARTİ — M-0213 usulüyle genişletme ──────────────────────────
// Ölçüt sayı değil: "petek gerçekte olmayan toprağı yutuyor mu?" Avustralya
// ve Yeni Zelanda AÇIK bırakılmıştı, şimdi kapatılıyor.

// Güney Ada — Kuzey Ada'dan AYRI temsil (iki ada, tek nokta ikisini birden yutardı)
{ ad:"Te Waipounamu Māori Yerleşimi (Güney Ada içi)", tur:"bolge", lat:-44.00, lon:170.50, g:0, k:0,
  kur:"1300-01-01", d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"Te Ara Encyclopedia of New Zealand, aynı kaynak (Māori arrival and settlement) — Güney Ada (Te Waipounamu), Kuzey Ada ile aynı ~1300 CE yerleşim dalgasının parçasıydı ama coğrafi olarak ayrı, farklı iwi (Ngāi Tahu vb.) tarafından iskân edildi; 1840'a kadar merkezî devlet yoktu." },

// Avustralya — beş ek bölgesel kabile dolgusu (AIATSIS harita düzeyi, Merkez zaten vardı)
{ ad:"Avustralya İç Kesimi (Kuzeybatı — Kimberley)", tur:"bolge", lat:-16.50, lon:126.00, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS, 'Map of Indigenous Australia' — Kimberley bölgesi, çok sayıda ayrı dil/klan grubunun (Worrorra, Ngarinyin, Bardi vb.) yaşadığı, merkezî devlet yapısı hiç oluşmamış bir bölgedir." },
{ ad:"Avustralya İç Kesimi (Kuzey — Arnhem Land)", tur:"bolge", lat:-13.00, lon:133.50, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS, 'Map of Indigenous Australia' — Arnhem Land (Yolŋu halkları ve komşuları), klan/soy temelli örgütlenmiş, sömürge dönemine kadar dışarıyla sınırlı temas kurmuş bir bölgedir; merkezî devlet yok." },
{ ad:"Avustralya İç Kesimi (Kuzeydoğu — Cape York)", tur:"bolge", lat:-14.50, lon:143.50, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS, 'Map of Indigenous Australia' — Cape York Yarımadası, çok sayıda ayrı dil grubunun yaşadığı, merkezî devlet yapısı olmayan bir bölgedir." },
{ ad:"Avustralya İç Kesimi (Güney — Nullarbor/Güneybatı)", tur:"bolge", lat:-31.50, lon:129.00, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS, 'Map of Indigenous Australia' — Nullarbor Düzlüğü ve güneybatı kıyısı (Mirning, Nyoongar vb.), merkezî devlet yapısı olmayan, klan temelli topluluklardır." },
{ ad:"Tazmanya (Aborijin Tazmanyalılar)", tur:"bolge", lat:-42.00, lon:147.00, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS — Tazmanya, ~10.000 yıl önce deniz seviyesi yükselince anakaradan ayrı kalmış, kendi ayrı dil/kültür gruplarına sahip Aborijin Tazmanyalılar tarafından iskân edilmiştir; 1803 İngiliz yerleşimine kadar merkezî devlet yok." },

// Sömürge şehirleri — 1281-1923 arası doğan yeni yerler, kur: ile (M-0213)
{ ad:"Hobart", tur:"sehir", lat:-42.8821, lon:147.3272, g:1, k:1,
  kur:"1804-01-01",
  kaynak:"Australian Dictionary of Biography — Vali David Collins, ceza kolonisini Risdon'dan Sullivan's Cove'a (bugünkü Hobart) taşıyıp 1804'te kurdu.",
  s:[{f:"1804-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },
{ ad:"Melbourne", tur:"sehir", lat:-37.8136, lon:144.9631, g:1, k:1,
  kur:"1835-08-30",
  kaynak:"EBSCO Research Starters, 'Melbourne, Australia, Is Founded'; State Library of Victoria — John Pascoe Fawkner, Yarra Nehri şelalelerinin hemen altında 30 Ağustos 1835'te yerleşim kurdu (John Batman'ın yerli topluluklarla arazi anlaşması da aynı yıl, Haziran 1835).",
  s:[{f:"1835-08-30",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },
{ ad:"Adelaide", tur:"sehir", lat:-34.9285, lon:138.6007, g:1, k:1,
  kur:"1836-12-28",
  kaynak:"National Today / kurumsal kaynak — Güney Avustralya Eyaleti'nin İngiliz mülkü olduğu, Vali John Hindmarsh tarafından Holdfast Bay'de (bugünkü Glenelg) 28 Aralık 1836'da ilan edildi ('Proclamation Day').",
  s:[{f:"1836-12-28",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },
{ ad:"Perth", tur:"sehir", lat:-31.9505, lon:115.8605, g:1, k:1,
  kur:"1829-08-12",
  kaynak:"Kurumsal kaynak (Western Australia Day / eski adıyla 'Foundation Day') — Swan River Kolonisi'nin kuruluşu, 12 Ağustos 1829'daki resmî törenle anıldı.",
  s:[{f:"1829-08-12",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },
{ ad:"Brisbane", tur:"sehir", lat:-27.4698, lon:153.0251, g:1, k:1,
  kur:"1824-01-01",
  kaynak:"State Library of Victoria kaynaklı akademik özet — Moreton Bay Ceza Kolonisi Eylül 1824'te Redcliffe Yarımadası'nda kuruldu, 1825'te Brisbane Nehri kıyısına taşındı; tam gün TDV/akademik kaynakta bulunamadı, YYYY-01-01 kullanıldı.",
  s:[{f:"1824-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },
{ ad:"Wellington", tur:"sehir", lat:-41.2865, lon:174.7762, g:1, k:1,
  kur:"1840-01-22",
  kaynak:"Te Ara Encyclopedia of New Zealand, 'The struggle to survive: 1840–1865' (teara.govt.nz/en/wellington-region/page-7) — New Zealand Company'nin ilk göçmen gemisi (Aurora), 22 Ocak 1840'ta Petone'ye ulaştı; bu tarih 'Wellington Anniversary Day' olarak anılır.",
  s:[{f:"1840-01-22",t:"1923-10-29",d:"yeni-zelanda"}] },
{ ad:"Christchurch", tur:"sehir", lat:-43.5321, lon:172.6362, g:1, k:1,
  kur:"1850-12-16",
  kaynak:"Te Ara Encyclopedia of New Zealand, 'Canterbury region' (teara.govt.nz/en/canterbury-region/page-6) — Canterbury Association'ın ilk dört gemisinden Charlotte Jane, 16 Aralık 1850'de geldi; bu tarih 'Canterbury Anniversary Day' olarak anılır.",
  s:[{f:"1850-12-16",t:"1923-10-29",d:"yeni-zelanda"}] },

];
