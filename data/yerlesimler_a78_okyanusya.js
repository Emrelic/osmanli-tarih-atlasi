// ======================================================================
// A-OKYANUSYA-0078 — 1923 A katmanı: Yeni Gine · Pasifik adaları ·
// Yeni Zelanda · Tazmanya · Avustralya iç kesimi
// şartname: oturumlar/BITIR-1923-0078.md · sınav: denetim/A-OKYANUSYA-0078-sina.py
// ölçüm: denetim/A-OKYANUSYA-0078-olc.py · rapor: denetim/A-OKYANUSYA-0078.md
//
// KURAL: kuruluşu kaynakta olan istasyon → `kur:` = o gün/yıl, `s:` kur'dan.
// Kuruluşu BULUNAMAYAN ama sömürge öncesinde de var olan yer → `kur:` YAZILMAZ,
// sömürge öncesi `kasitli_bosluk` + `bos:"veri-yok"` (kaynak susuyor),
// emsal: Port Moresby / Madang (yerlesimler_emilme.js).
// 📌 Koordinatlar gazete (OSM/Nominatim, standart gazetteer) değerleridir —
// KAYNAKLI DEĞİL; tarihler kaynaklıdır. 8 nokta (Tarawa, Kavieng, Greymouth,
// Port Hedland, Thursday Island, Weipa, Funafuti, Hokitika, Jaluit) denetle.py kara
// maskesi önerisine 0,5–3,8 km kaydırıldı.
// ======================================================================

window.YERLESIMLER_A78_OKYANUSYA = [

// --------------------------------------------------------------------
// YENİ GİNE — Hollanda kesimi
// --------------------------------------------------------------------

{ ad:"Merauke", tur:"liman", lat:-8.4932, lon:140.4018, g:1, k:1,
  kur:"1902-02-12",
  kaynak:"J. Kroesen raporu 'Merauke, den 25sten Februari 1902', yeniden basım: A. Overweel, Irian Jaya Source Materials No. 13 (Leiden, 1995), papuaerfgoed.org/sites/default/files/collectie/files/2004-10/Overweel_1995_Topics_13.pdf — gemi 11 Şubat'ta Merauke nehri ağzına demirledi, \"waarbinnen het schip tegen den middag van den volgenden dag … geloodst werd\" (ertesi gün öğlene doğru kurulacak yere çekildi); kışlalara 13'ünde girildi. ⚠️ 12 Şubat kuruluş seferinin YERE VARDIĞI gündür; rapor ayrı bir resmî kuruluş günü vermiyor.",
  s:[{f:"1902-02-12",t:"1923-10-29",d:"hollanda-dogu-hint"}] },

{ ad:"Fakfak", tur:"liman", lat:-2.9261, lon:132.2961, g:1, k:1,
  kur:"1898-12-01",
  kaynak:"J. Kroesen raporu 'Fakfak, 9 Januari 1899', Overweel 1995 (Irian Jaya Source Materials No. 13): \"Inmiddels werd door den Resident het Bestuur dezer Afdeeling op den 1sten December te Fakfak geïnstalleerd en de Nederlandsche vlag geheschen.\" (1898) — resmî idare kuruluş günü.",
  s:[{f:"1898-12-01",t:"1923-10-29",d:"hollanda-dogu-hint"}] },

// --------------------------------------------------------------------
// YENİ GİNE — Papua (İngiliz Yeni Ginesi → Avustralya 1906-09-01)
// --------------------------------------------------------------------

{ ad:"Daru", tur:"liman", lat:-9.0763, lon:143.2092, g:1, k:1,
  kasitli_bosluk:true, bos:"veri-yok",
  neden:"İstasyonun kuruluş yılı BULUNAMADI (Australian Historical Studies 56(4), 2024 makalesinin '1890'da Daru istasyonu' cümlesi yalnız arama özetinde görüldü, gövde okunamadı — dayanak yapılmadı). 1884 öncesi için kaynak susuyor ⇒ veri-yok.",
  kaynak:"1884-11-06 himaye bildirisi (Commodore Erskine, Port Moresby): \"All that portion of the southern shores of New Guinea commencing from the boundary of that portion of the country claimed by the Government of the Netherlands on the 141st meridian of east longitude to East Cape, with all islands adjacent thereto…\" — metin: PNG Ulusal Mahkemesi, In re Era Taora Land (vlex.com/vid/daera-guba-on-behalf-922787798); 1911 Encyclopaedia Britannica 'New Guinea'. Daru (143,2°D) bu kıyıya bitişik adadır. 1906-09-01 Papua'nın Avustralya'ya devri: atlasın Samarai/Port Moresby kayıtlarıyla aynı kırılma.",
  s:[{f:"1884-11-06",t:"1906-09-01",d:"ingiltere"},{f:"1906-09-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Kokoda", tur:"sehir", lat:-8.8791, lon:147.7378, g:0, k:0,
  kur:"1904-01-01",
  kaynak:"H. Nelson, C. Ballard, J. Burton vd., Kokoda Track–Brown River Preliminary Social Mapping Study (ANU Enterprise, 2009), png-data.sprep.org: kronolojide \"1904 Kokoda Station established\"; metinde \"Once Kokoda station was established in 1904, the walking track from Sogeri to Kokoda came into regular use.\" YIL hassasiyeti (§4: 1904-01-01). 'Haziran 1904' yalnız web özetlerinde — kullanılmadı.",
  s:[{f:"1904-01-01",t:"1906-09-01",d:"ingiltere"},{f:"1906-09-01",t:"1923-10-29",d:"avustralya"}] },

// --------------------------------------------------------------------
// YENİ GİNE — Alman Yeni Ginesi → Avustralya
// Avustralya kırılması: 1914-09-17 (Herbertshöhe teslim şartları — atlasın
// Rabaul/Madang/Finschhafen kırılması). Kaynak yerin KENDİ işgal gününü
// veriyorsa o gün yazıldı (Kavieng, Kieta, Lorengau) — devletin teslimi ≠
// o yerin alınışı (CLAUDE.md §3.5 "ters yön").
// --------------------------------------------------------------------

{ ad:"Aitape (Eitape)", tur:"liman", lat:-3.1374, lon:142.3475, g:1, k:1,
  kur:"1906-01-01",
  kaynak:"Deutsches Kolonial-Lexikon (H. Schnee ed., 1920), Bd. I, 'Eitape': \"Die Regierungsstation wurde im Jahre 1906 errichtet.\" (archive.org/details/bub_gb_jYszAQAAMAAJ). YIL hassasiyeti. İşgal günü BULUNAMADI (S.S. Mackenzie, The Australians at Rabaul, AWM Resmî Tarih c. X, Holmes'ün 11 Aralık 1914 raporu: \"Other stations will be visited … such as Eitape and Morobe … but there is no immediate hurry\") ⇒ 1914-09-17 teslim günü kullanıldı, bu bir HUKUKÎ gündür, çıkarma günü değil.",
  s:[{f:"1906-01-01",t:"1914-09-17",d:"almanya"},{f:"1914-09-17",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Vanimo", tur:"liman", lat:-2.6817, lon:141.3028, g:0, k:0,
  kasitli_bosluk:true, bos:"veri-yok",
  neden:"Kuruluş yılı BULUNAMADI. S.S. Mackenzie, The Australians at Rabaul (AWM Resmî Tarih c. X), bl. XVIII yerin 1915-16'da var olduğunu gösteriyor: \"from Wanimo (a trading and recruiting outpost of the New Guinea Company) on Angriff's Harbour, a road runs…\". '1918 devriye karakolu' iddiası yalnız içerik çiftliğinde — reddedildi. 1884 öncesi için kaynak susuyor ⇒ veri-yok.",
  kaynak:"Alman dönemi başlangıcı — gün komşudan: Herbertshöhe/Madang kaydı · kaynağı National Library of Australia, 'German colonies in the Pacific' (Almanya 1884'te Kaiser-Wilhelmsland'ı ilhak etti). ⚠️ Komşu 600 km uzakta; aynı ilhak sürecidir ama 'yakın konum' şartı zayıf — kırılma yeni bir tarih ÜRETMEZ, var olanı kullanır. Avustralya: 1914-09-17 teslim günü (hukukî gün).",
  s:[{f:"1884-11-03",t:"1914-09-17",d:"almanya"},{f:"1914-09-17",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Kavieng (Käwieng)", tur:"liman", lat:-2.5815, lon:150.8108, g:1, k:1,
  kur:"1900-01-01",
  kaynak:"Deutsches Kolonial-Lexikon (1920), Bd. I, 'Deutsch-Neuguinea': \"im Jahre 1900 … eine Station eingerichtet, die später den Namen „Käwieng“ erhielt\" (YIL; '30 Haziran 1900' yalnız kaynaksız Vikipedi'de — kullanılmadı). İşgal: S.S. Mackenzie, The Australians at Rabaul (AWM Resmî Tarih c. X), bl. VII: \"The Nusa arrived at Kawieng on the afternoon of October 17th. No opposition was offered to the landing, the British flag was immediately hoisted.\" (1914); kronoloji: \"Oct. 17 – A.N. & M.E.F. occupies New Ireland\".",
  s:[{f:"1900-01-01",t:"1914-10-17",d:"almanya"},{f:"1914-10-17",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Kieta", tur:"liman", lat:-6.2167, lon:155.6333, g:1, k:1,
  kur:"1905-01-01",
  kaynak:"Deutsches Kolonial-Lexikon (1920), Bd. I: \"Im Jahre 1905 wurden auch die Salomoninseln in die Verwaltung einbezogen und dort eine Regierungsstation in der Bucht von Kieta … gegründet.\" (YIL). İşgal: S.S. Mackenzie, The Australians at Rabaul (AWM Resmî Tarih c. X), bl. VII: \"Watson's force arrived at Kieta at noon on December 9th … the German colours were hauled down; the British flag was hoisted.\" (1914).",
  s:[{f:"1905-01-01",t:"1914-12-09",d:"almanya"},{f:"1914-12-09",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Lorengau (Manus)", tur:"liman", lat:-2.0226, lon:147.2712, g:1, k:1,
  kur:"1911-01-01",
  kaynak:"Deutsches Kolonial-Lexikon (1920), Bd. I: \"Erst 1911 ist dort eine Station und zwar im Osten der Hauptinsel Manus, am Seeadlerhafen, gegründet worden.\" (YIL; istasyonun resmî adı 'Manus'). İşgal: S.S. Mackenzie, The Australians at Rabaul (AWM Resmî Tarih c. X), bl. VII: sefer 19 Kasım'da Rabaul'dan ayrıldı, \"The British flag was hoisted at Lorengau, Nares Harbour\"; sayfa başlığı '18th–21st Nov., 1914'. 🔴 AY hassasiyeti: gün OCR'da okunamadı (18-21 Kasım arası) ⇒ 1914-11-01 AYI kodlar, 'ayın 1'i' değildir (D213).",
  s:[{f:"1911-01-01",t:"1914-11-01",d:"almanya"},{f:"1914-11-01",t:"1923-10-29",d:"avustralya"}] },

// --------------------------------------------------------------------
// PASİFİK ADALARI
// --------------------------------------------------------------------

{ ad:"Apia", tur:"liman", lat:-13.8345, lon:-171.7631, g:1, k:1,
  kasitli_bosluk:true, bos:"veri-yok",
  neden:"1900 öncesi Samoa (Malietoa krallığı; 1889 Berlin Senedi üçlü tarafsızlık rejimi) için atlasta künye YOK; boşluk kimlik eksikliğidir, sömürge egemenliği değildir.",
  kaynak:"Almanya: Te Papa Tongarewa (collections.tepapa.govt.nz/topic/10134): \"hoisting of the imperial German flag at Mulinu'u Peninsula on the island of Upolu in Samoa on March 1, 1900\". Yeni Zelanda: J. Jennings, 'Pacific Islands', 1914-1918-online (International Encyclopedia of the First World War): \"New Zealand troops landed at Matautu, Apia on 29 August 1914 and took control of German (Western) Samoa without a struggle\"; Britannica 'Samoa': manda 1920. ⚠️ 1914-1920 ASKERÎ işgal; atlasın Alman Yeni Ginesi emsali (Rabaul 1914-09-17 `s:`) izlendi — `isg:` mi `s:` mi hükmü koordinatörde.",
  s:[{f:"1900-03-01",t:"1914-08-29",d:"almanya"},{f:"1914-08-29",t:"1923-10-29",d:"yeni-zelanda"}] },

{ ad:"Pago Pago", tur:"liman", lat:-14.2755, lon:-170.7048, g:1, k:1,
  kasitli_bosluk:true, bos:"veri-yok",
  neden:"1900 öncesi Tutuila için atlasta künye YOK (Samoa krallığı / 1889 Berlin Senedi).",
  kaynak:"Library of Congress kaydı: 'Historical sketch of the naval administration of the Government of American Samoa, April 17, 1900–July 1, 1951'; Tutuila ve Aunu'u devir senedi Pago Pago'da \"on the 17th day of April, 1900, immediately prior to the raising of the United States Flag\" imzalandı; Britannica 'Samoa': \"in 1899 the United States annexed eastern Samoa\" (1899 antlaşması, fiilî devir 1900-04-17).",
  s:[{f:"1900-04-17",t:"1923-10-29",d:"abd"}] },

{ ad:"Nauru (Yaren)", tur:"liman", lat:-0.5471, lon:166.9163, g:1, k:1,
  kasitli_bosluk:true, bos:"veri-yok",
  neden:"1888 öncesi Nauru için künye yok; kaynak susuyor.",
  kaynak:"N. Viviani, Nauru: Phosphate and Political Progress (ANU Press, 1970; nauru-data.sprep.org/system/files/viviani_1970.pdf): \"On 16 April 1888 the German Emperor proclaimed the inclusion…\" (kâğıt üstünde) · \"It was not until 1 October 1888 that the gunboat Eber could be diverted to land men on Nauru\" · \"incorporation of Nauru into the Imperial German Protectorate of the Marshall Islands on 1 October 1888\" ⇒ fiilî gün 1888-10-01. Teslim: \"The German Administrator formally surrendered on [6] November 1914\" (OCR '(i'; Naval Historical Society of Australia: \"6 November 1914 … the British flag was raised\"). İdare: \"An Australian military officer, Captain Norrie, administered Nauru until a deputy commissioner for the Western Pacific, Mr C. Workman, took over. In December 1917 Mr G. B. Smith-Rewse, a former official in the British Colonial Service, became Administrator and held that position until June 1921.\" ⇒ 1914-1921 İNGİLİZ (Batı Pasifik) idaresi; 1919-07-02 Nauru Adası Antlaşması: \"administered by an Administrator to be appointed by the Australian Government\" ⇒ Avustralya Haziran 1921'den. 🔴 AY hassasiyeti: 1921-06-01 AYI kodlar (D213); yeni yöneticinin günü bulunamadı. Manda 1920-12-17 British Empire'a verildi (egemen İngiliz İmp.; idare Avustralya).",
  s:[{f:"1888-10-01",t:"1914-11-06",d:"almanya"},{f:"1914-11-06",t:"1921-06-01",d:"ingiltere"},{f:"1921-06-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Papeete", tur:"liman", lat:-17.5374, lon:-149.566, g:1, k:1,
  kasitli_bosluk:true, bos:"veri-yok",
  neden:"1842 öncesi Tahiti (Pomare krallığı) için atlasta künye YOK — boşluk kimlik eksikliğidir.",
  kaynak:"FranceArchives kaydı: \"Demande de protectorat de la reine Pomaré (9 septembre 1842) ; acceptation du protectorat par le contre-amiral Dupetit-Thouars (9 septembre 1842)\" (francearchives.gouv.fr/fr/facomponent/d377de11925f333a01dd935d641b80ee23cb852a) · Archives de la Polynésie française: \"Le 29 juin 1880, Pomare V, dernier souverain de Tahiti, cède les territoires du Protectorat à la France\" · Loi du 30 décembre 1880 (mjp.univ-perp.fr/constit/pf1880.htm). Himaye → sömürge egemen DEĞİŞTİRMEZ (Tulagi emsali: himaye `s:`); 1880 kırılma üretmez. `fransa-cumhuriyet` künyesi 1792 sonrası bütün Fransız rejimlerini kapsar (1842 Temmuz Monarşisi dahil).",
  s:[{f:"1842-09-09",t:"1923-10-29",d:"fransa-cumhuriyet"}] },

{ ad:"Avarua (Rarotonga)", tur:"liman", lat:-21.2075, lon:-159.7708, g:1, k:1,
  kasitli_bosluk:true, bos:"veri-yok",
  neden:"1888 öncesi Cook Adaları için künye yok; kaynak susuyor.",
  kaynak:"Britannica 'Cook Islands': \"The British government eventually complied in 1888\" (himaye; YIL hassasiyeti — 27 Eylül/27 Ekim 1888 adayları yalnız Vikipedi'de). NZ: New Zealand Legislation, 'Cook, etc, Islands Boundaries and Inclusion in New Zealand Proclamation 1901' (SR 1901/531, legislation.govt.nz/regulation/imperial/1901/0531/4.0/DLM1101.html): \"do hereby proclaim and appoint 11 June 1901 to be the date on and after which the boundaries of the Colony shall be and be deemed to be extended\".",
  s:[{f:"1888-01-01",t:"1901-06-11",d:"ingiltere"},{f:"1901-06-11",t:"1923-10-29",d:"yeni-zelanda"}] },

{ ad:"Hagåtña (Agaña)", tur:"sehir", lat:13.4748, lon:144.7516, g:1, k:1,
  kasitli_bosluk:true, bos:"veri-yok",
  neden:"1668 öncesi Chamorro köyü; Marianalar için künye yok, kaynak susuyor.",
  kaynak:"İspanya: Guampedia (University of Guam), 'Father Diego Luis de San Vitores': 16 Haziran 1668'de San Vitores San Diego gemisiyle Guam'a geldi, dört rahip, dört birader ve 32 askerle; Cizvit merkezi Hagåtña'ya kuruldu. ABD: Guampedia, D.L. Platt, 'Spanish-American War': \"On 20 June, the USS Charleston sailed into Guam's Apra Harbor\" … \"The following day, 21 June, Glass sent Lieutenant William Braunersreuther to deliver an ultimatum to Marina.\" … \"After the Spanish authorities surrendered to the Americans in Piti, the American flag was raised over Fort Santa Cruz\" (1898). ⚠️ Teslim günü iki cümlenin birlikte okunmasından (21 Haziran); NHHC 'a couple days' diyor. Haziran 1898 – Ağustos 1899 arası fiilî ABD idaresi yok (NHHC: ilk deniz valisi 7 Ağustos 1899).",
  s:[{f:"1668-06-16",t:"1898-06-21",d:"ispanya"},{f:"1898-06-21",t:"1923-10-29",d:"abd"}] },

{ ad:"Garapan (Saipan)", tur:"liman", lat:15.191, lon:145.7467, g:0, k:0,
  kasitli_bosluk:true, bos:"veri-yok",
  neden:"1668 öncesi için kaynak susuyor.",
  kaynak:"İspanya başlangıcı — gün komşudan: Hagåtña (Agaña) · Guampedia 'Father Diego Luis de San Vitores' (1668-06-16 Marianalar misyonunun başlangıcı; aynı süreç, ~200 km). Almanya: D.H.R. Spennemann (Charles Sturt University), marshall.csu.edu.au/CNMI/CNMIBIB/Introduction.html: \"On 17 November 1899 at four in the afternoon, the Spanish government formally handed the reigns of administration\". Japonya: aynı sayfa \"At the time of the Japanese occupation of Saipan in October 1914\" — 🔴 AY hassasiyeti, 1914-10-01 AYI kodlar (D213); '14 Ekim' yalnız Vikipedi'de (Peattie aktarımı), kitap açık erişimde değil.",
  s:[{f:"1668-06-16",t:"1899-11-17",d:"ispanya"},{f:"1899-11-17",t:"1914-10-01",d:"almanya"},{f:"1914-10-01",t:"1923-10-29",d:"meiji-japonya"}] },

{ ad:"Kolonia (Pohnpei)", tur:"liman", lat:6.9643, lon:158.2091, g:1, k:1,
  kur:"1887-03-14",
  kaynak:"F.X. Hezel, Micronesian Seminar (micsem.org/pubs/books/catholic/pohnpei/): \"On March 14, 1887, the ship anchored off the northern coast of Pohnpei at Mesenieng, the site of the new Spanish colony.\" (egemenlik ilanı Nisan 1887, günü okunamadı) · Hezel, 'Spanish Capuchins in the Carolines': \"On October 12, 1899, the German flag was raised over Ponape, bringing to an end the thirteen year period of Spanish sovereignty in the Carolines.\" · Japonya: micsem Pohnpei kitabı: \"on an October day in 1914 a Japanese warship steamed into the harbor, disgorged hundreds of troops, and announced the seizure of the island.\" 🔴 AY hassasiyeti (1914-10-01 AYI kodlar).",
  s:[{f:"1887-03-14",t:"1899-10-12",d:"ispanya"},{f:"1899-10-12",t:"1914-10-01",d:"almanya"},{f:"1914-10-01",t:"1923-10-29",d:"meiji-japonya"}] },

{ ad:"Jaluit (Jabor)", tur:"liman", lat:5.8533, lon:169.6341, g:1, k:1,
  kasitli_bosluk:true, bos:"veri-yok",
  neden:"1885 öncesi Marshall Adaları için künye yok; kaynak susuyor.",
  kaynak:"D.H.R. Spennemann (Charles Sturt University), antlaşma metni marshall.csu.edu.au/Marshalls/html/history/Treaty1885.html: \"Jaluit, Marshall Inseln, den 15 October 1885\"; 'Administrators of the German Marshall Islands' (…/german2/admin.html): \"1886, 13 September — Protectorate declared\" · \"1914, 3 October — Japanese occupy Jaluit\". Alman başlangıcı olarak antlaşma günü alındı; 1886 ilanı notta.",
  s:[{f:"1885-10-15",t:"1914-10-03",d:"almanya"},{f:"1914-10-03",t:"1923-10-29",d:"meiji-japonya"}] },

{ ad:"Tarawa (Bairiki)", tur:"liman", lat:1.3375, lon:173.0117, g:1, k:1,
  kasitli_bosluk:true, bos:"veri-yok",
  neden:"1892 öncesi Gilbert Adaları için künye yok; kaynak susuyor.",
  kaynak:"US Department of State, Foreign Relations of the United States 1892, belge 184: \"from the 27th of May, 1892, when his proclamation of assumption of British protection over the Gilbert Islands was issued at Apamama.\" Britannica 'Kiribati': 1892 himaye, 1916'dan itibaren Gilbert ve Ellice Adaları Kolonisi (statü değişimi, egemen değişmez). ⚠️ Gün TAKIMADA bildirisinin günüdür (Abemama); Tarawa'ya özgü bayrak günü bulunamadı.",
  s:[{f:"1892-05-27",t:"1923-10-29",d:"ingiltere"}] },

{ ad:"Banaba (Ocean Island)", tur:"liman", lat:-0.8581, lon:169.5351, g:0, k:0,
  kasitli_bosluk:true, bos:"veri-yok",
  neden:"1900 öncesi için künye yok; kaynak susuyor.",
  kaynak:"Britannica 'Banaba': \"Sighted in 1804 by the British ship Ocean, the island was annexed by Britain in 1900.\" YIL hassasiyeti (§4: 1900-01-01). ⚠️ Britannica koloniye katılış yılında kendiyle çelişiyor (Banaba maddesi 1919, Kiribati maddesi 1916) — egemen değişmediği için kırılma üretmez.",
  s:[{f:"1900-01-01",t:"1923-10-29",d:"ingiltere"}] },

{ ad:"Funafuti", tur:"liman", lat:-8.5225, lon:179.2027, g:0, k:0,
  kasitli_bosluk:true, bos:"veri-yok",
  neden:"1892 öncesi Ellice Adaları için künye yok; kaynak susuyor.",
  kaynak:"Britannica 'Tuvalu': \"the group, then known as the Ellice Islands, became a British protectorate in 1892 and part of the Gilbert and Ellice Islands Colony in 1916.\" YIL hassasiyeti (§4: 1892-01-01); 'HMS Curacoa 9-16 Ekim 1892' yalnız Vikipedi'de — kullanılmadı.",
  s:[{f:"1892-01-01",t:"1923-10-29",d:"ingiltere"}] },

{ ad:"Hilo", tur:"liman", lat:19.7074, lon:-155.0816, g:1, k:1,
  kasitli_bosluk:true, bos:"kabile",
  neden:"1795 birleşmesi öncesi: moku/aliʻi sistemi — emsal ve kaynak atlasın 'Hawaii Adaları (Birleşme Öncesi)' kaydı (yerlesimler_ek30.js).",
  kaynak:"Britannica 'Kamehameha I': \"by 1795 had brought all the islands but Kauai and Niihau under his control\" (künye `hawaii-kralligi` f:1795-01-01). ABD: US Office of the Historian (history.state.gov): \"formal U.S. annexation of Hawaii on August 12, 1898\" — atlasın Honolulu kırılmasıyla aynı gün. ⚠️ KÜNYE BOŞLUĞU: 1893-01-17 Geçici Hükümet ve 1894-07-04 Hawaii Cumhuriyeti için atlasta kimlik yok (Hawaii Devlet Arşivi); `hawaii-kralligi` 1893-1898'i de kaplıyor — künye işi, bu kayıt künyeyi izler.",
  s:[{f:"1795-01-01",t:"1898-08-12",d:"hawaii-kralligi"},{f:"1898-08-12",t:"1923-10-29",d:"abd"}] },

{ ad:"Lahaina", tur:"liman", lat:20.8739, lon:-156.6777, g:1, k:1,
  kasitli_bosluk:true, bos:"kabile",
  neden:"1795 birleşmesi öncesi: moku/aliʻi sistemi — emsal ve kaynak atlasın 'Hawaii Adaları (Birleşme Öncesi)' kaydı (yerlesimler_ek30.js).",
  kaynak:"Britannica 'Kamehameha I': \"by 1795 had brought all the islands but Kauai and Niihau under his control\" (Maui dahil). ABD: US Office of the Historian: \"formal U.S. annexation of Hawaii on August 12, 1898\". ⚠️ 1893-1898 künye boşluğu Hilo kaydında yazılı.",
  s:[{f:"1795-01-01",t:"1898-08-12",d:"hawaii-kralligi"},{f:"1898-08-12",t:"1923-10-29",d:"abd"}] },

// --------------------------------------------------------------------
// YENİ ZELANDA — emsal Auckland (yerlesimler_ek30.js): s yeni-zelanda kur'dan
// Te Ara / NZHistory gövdeleri Wayback kopyasından okundu (bot engeli).
// "1966" = An Encyclopaedia of New Zealand (1966), teara.govt.nz/en/1966/…
// --------------------------------------------------------------------

{ ad:"Dunedin", tur:"sehir", lat:-45.8742, lon:170.5036, g:1, k:1,
  kur:"1848-03-23",
  kaynak:"NZHistory (Ministry for Culture and Heritage), 'Scottish settlers arrive in Otago' (nzhistory.govt.nz/scottish-settlers-arrive-otago), tarih 23 Mart 1848: \"Otago celebrates the arrival of the immigrant ship John Wickliffe as the founding day of the province.\" Te Ara 'Otago places': \"The town was founded in 1848.\"",
  s:[{f:"1848-03-23",t:"1923-10-29",d:"yeni-zelanda"}] },

{ ad:"Invercargill", tur:"sehir", lat:-46.4132, lon:168.3538, g:1, k:1,
  kur:"1856-01-01",
  kaynak:"An Encyclopaedia of New Zealand (1966), 'Invercargill': \"By October 1856 there was quite a little settlement…\"; ilk arsa satışı 20 Mart 1857. Te Ara 'Southland region' s.6: J.T. Thomson sokakları 1856'da çizdi. YIL hassasiyeti.",
  s:[{f:"1856-01-01",t:"1923-10-29",d:"yeni-zelanda"}] },

{ ad:"Nelson (Yeni Zelanda)", tur:"sehir", lat:-41.2706, lon:173.284, g:1, k:1,
  kur:"1842-02-01",
  kaynak:"NZHistory, 'New Zealand Company settlers arrive in Nelson', tarih 1 Şubat 1842: \"The Fifeshire arrived in Nelson with immigrants for the New Zealand Company's first settlement in the South Island.\" (Öncü parti 9 Ekim 1841'de gelip yeri seçti — 1966 Ansiklopedisi 'Nelson'.)",
  s:[{f:"1842-02-01",t:"1923-10-29",d:"yeni-zelanda"}] },

{ ad:"New Plymouth", tur:"sehir", lat:-39.0556, lon:174.0752, g:1, k:1,
  kur:"1841-01-01",
  kaynak:"An Encyclopaedia of New Zealand (1966), 'New Plymouth': \"In 1841 the chief surveyor of the Plymouth Company commenced laying out the town and, in March, the first settlers arrived in the William Bryan.\" YIL hassasiyeti (ay Mart metinde).",
  s:[{f:"1841-01-01",t:"1923-10-29",d:"yeni-zelanda"}] },

{ ad:"Napier", tur:"sehir", lat:-39.4928, lon:176.912, g:1, k:1,
  kur:"1855-01-01",
  kaynak:"Te Ara, 'Hawke's Bay places': \"Founded in 1855 by the government, Napier (formerly known as Ahuriri) is Hawke's Bay's oldest town.\" ⚠️ 1966 Ansiklopedisi '1865'te Domett çizdi' diyor — Domett 1850'lerin ortasında bölgedeydi; Te Ara (2005) esas alındı, çelişki bildirildi.",
  s:[{f:"1855-01-01",t:"1923-10-29",d:"yeni-zelanda"}] },

{ ad:"Gisborne", tur:"sehir", lat:-38.6623, lon:178.0176, g:1, k:1,
  kur:"1870-01-01",
  kaynak:"Te Ara, 'East Coast places': \"The town was laid out in 1870 and named Gisborne…\" YIL hassasiyeti.",
  s:[{f:"1870-01-01",t:"1923-10-29",d:"yeni-zelanda"}] },

{ ad:"Whanganui", tur:"sehir", lat:-39.9301, lon:175.0479, g:1, k:1,
  kur:"1840-02-06",
  kaynak:"Te Ara, 'Whanganui places': \"One of New Zealand's oldest cities, founded in 1840…\" YIL hassasiyeti; 1840-01-01 künye (`yeni-zelanda` f:1840-02-06) penceresinin dışına düştüğü için künyenin günü devralındı — KAYNAKSIZ gün (§4 hassasiyet kuralı).",
  s:[{f:"1840-02-06",t:"1923-10-29",d:"yeni-zelanda"}] },

{ ad:"Hamilton (Yeni Zelanda)", tur:"sehir", lat:-37.787, lon:175.2793, g:1, k:1,
  kur:"1864-08-24",
  kaynak:"An Encyclopaedia of New Zealand (1966), 'Hamilton': \"The advance party of 118 men under Captain W. Steele landed from the river gunboat Rangiriri on 24 August 1864\". Te Ara 'Waikato places': \"Hamilton was established in 1864 by the 4th Waikato militia.\"",
  s:[{f:"1864-08-24",t:"1923-10-29",d:"yeni-zelanda"}] },

{ ad:"Rotorua", tur:"sehir", lat:-38.1368, lon:176.2497, g:1, k:1,
  kur:"1881-01-01",
  kaynak:"Te Ara, 'Thermal pools and spas': \"Starting in 1881 the government obtained about 2,000 hectares around Lake Rotorua, including all the best springs. Rotorua was declared a township…\" YIL hassasiyeti.",
  s:[{f:"1881-01-01",t:"1923-10-29",d:"yeni-zelanda"}] },

{ ad:"Taupō", tur:"sehir", lat:-38.6857, lon:176.0702, g:0, k:0,
  kur:"1868-01-01",
  kaynak:"Te Ara, 'Volcanic plateau places': \"Taupō's urban history can be dated to the establishment of an armed constabulary post in 1868\". ⚠️ 1966 Ansiklopedisi 1869 diyor — Te Ara (2005) esas, çelişki bildirildi.",
  s:[{f:"1868-01-01",t:"1923-10-29",d:"yeni-zelanda"}] },

{ ad:"Greymouth", tur:"sehir", lat:-42.4588, lon:171.2204, g:1, k:1,
  kur:"1865-01-01",
  kaynak:"An Encyclopaedia of New Zealand (1966), 'Greymouth': \"The town site was laid out by Rochfort in 1865.\" YIL hassasiyeti.",
  s:[{f:"1865-01-01",t:"1923-10-29",d:"yeni-zelanda"}] },

{ ad:"Timaru", tur:"sehir", lat:-44.397, lon:171.255, g:1, k:1,
  kur:"1853-01-01",
  kaynak:"Te Ara, 'South Canterbury region' s.6: \"In 1853 the Rhodeses bought land behind Caroline Bay and laid out a town.\" YIL hassasiyeti.",
  s:[{f:"1853-01-01",t:"1923-10-29",d:"yeni-zelanda"}] },

{ ad:"Blenheim", tur:"sehir", lat:-41.5134, lon:173.9612, g:1, k:1,
  kur:"1856-01-01",
  kaynak:"An Encyclopaedia of New Zealand (1966), 'Blenheim': \"The town was laid out in 1856 on 300 acres of land held jointly by Henry Seymour and Alfred Fell.\" (Te Ara yalnız '1850s'.) YIL hassasiyeti.",
  s:[{f:"1856-01-01",t:"1923-10-29",d:"yeni-zelanda"}] },

{ ad:"Whangārei", tur:"sehir", lat:-35.7251, lon:174.3237, g:1, k:1,
  kur:"1839-01-01",
  kasitli_bosluk:true, bos:"kabile",
  neden:"1839 kereste yerleşimi ile 1840-02-06 Waitangi arası: Māori iwi yönetimi — emsal ve kaynak atlasın 'Aotearoa Māori Yerleşimi' kaydı (yerlesimler_ek30.js, Te Ara).",
  kaynak:"Te Ara, 'Northland places' s.15: \"Whangārei began as a timber-milling site in 1839, but the first Europeans fled to Auckland for a time during the 1840s…\" YIL hassasiyeti.",
  s:[{f:"1840-02-06",t:"1923-10-29",d:"yeni-zelanda"}] },

{ ad:"Hokitika", tur:"sehir", lat:-42.7211, lon:170.9681, g:1, k:1,
  kur:"1864-01-01",
  kaynak:"An Encyclopaedia of New Zealand (1966), 'Hokitika': \"During the last six months of 1864 a straggling mining camp came into existence at Hokitika.\" YIL hassasiyeti.",
  s:[{f:"1864-01-01",t:"1923-10-29",d:"yeni-zelanda"}] },

{ ad:"Queenstown (Yeni Zelanda)", tur:"sehir", lat:-45.0312, lon:168.6626, g:0, k:0,
  kur:"1862-01-01",
  kaynak:"Te Ara, 'Otago places': altın \"was discovered on the Shotover River in November 1862. A town sprang to life\". YIL hassasiyeti (§4: 1862-01-01) — ⚠️ kasaba Kasım 1862 SONRASIdır; 1 Ocak kodlaması yalnız yıl bilgisini taşır.",
  s:[{f:"1862-01-01",t:"1923-10-29",d:"yeni-zelanda"}] },

// --------------------------------------------------------------------
// TAZMANYA — emsal Hobart: ingiltere → 1901-01-01 avustralya
// Kaynak: A. Alexander (ed.), The Companion to Tasmanian History (UTAS),
// Wayback kopyasından okundu. Strahan / Queenstown yalnız arama özeti — YAZILMADI.
// --------------------------------------------------------------------

{ ad:"Launceston", tur:"sehir", lat:-41.4332, lon:147.1441, g:1, k:1,
  kur:"1806-01-01",
  kaynak:"Companion to Tasmanian History (UTAS), 'Launceston': Paterson'ın aradığı yer \"he found at Riching's Park at the confluence of the Tamar, North and South Esk Rivers. The settlement moved in 1806.\" Britannica 'Launceston': yerleşim George Town'dan (1804) geldi. YIL hassasiyeti.",
  s:[{f:"1806-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

// Midlands — Hobart ↔ Launceston köprüsü (Değişmez 7: 162 km'lik kopukluk)
{ ad:"Oatlands (Tazmanya)", tur:"sehir", lat:-42.3, lon:147.37, g:0, k:0,
  kur:"1821-06-03",
  kaynak:"Companion to Tasmanian History (UTAS), 'Oatlands' (Wayback kopyası): \"Oatlands, on the shores of Lake Dulverton, was named and selected as a township by Governor Macquarie on 3 June 1821, and by 1827 a survey and street plan had been laid out by surveyor William Sharland. It quickly became a vital link between Hobart and Launceston\".",
  s:[{f:"1821-06-03",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Campbell Town (Tazmanya)", tur:"sehir", lat:-41.93, lon:147.49, g:0, k:0,
  kur:"1821-01-01",
  kaynak:"Companion to Tasmanian History (UTAS), 'Campbell Town' (Wayback kopyası): \"Campbell Town was named by Governor Lachlan Macquarie in 1821 after his wife's family. There was already some European settlement in the area.\" — 1821 ADLANDIRMA yılıdır; bölgede daha önce dağınık yerleşim vardı (ihtiyatlı alt sınır). YIL hassasiyeti.",
  s:[{f:"1821-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Devonport (Tazmanya)", tur:"liman", lat:-41.1806, lon:146.3464, g:0, k:0,
  kur:"1850-01-01",
  kaynak:"Companion to Tasmanian History, 'Devonport': \"Devonport originally comprised two small townships which were set aside as reserves in 1850\" (Torquay ve Formby; 1890'da birleşti). YIL hassasiyeti.",
  s:[{f:"1850-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Burnie", tur:"liman", lat:-41.0526, lon:145.9061, g:0, k:0,
  kur:"1827-01-01",
  kaynak:"Companion to Tasmanian History, 'Burnie': \"Burnie, on the shores of Emu Bay, was first settled in 1827 by the Van Diemen's Land Company's chief surveyor, Henry Hellyer\". YIL hassasiyeti.",
  s:[{f:"1827-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"St Helens (Tazmanya)", tur:"sehir", lat:-41.32, lon:148.24, g:0, k:0,
  kur:"1834-01-01",
  kaynak:"Companion to Tasmanian History, 'St Helens': \"In 1833 a whale fishery was established at Binalong Bay… The next year St Helens received its name, when a military station was established…\" ⚠️ Tarih ADLANDIRMA + askerî istasyon yılıdır, kasaba ilanı değil. YIL hassasiyeti.",
  s:[{f:"1834-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

// --------------------------------------------------------------------
// AVUSTRALYA — iç kesim ve kıyı boşlukları · emsal: ingiltere → 1901 avustralya
// Alice Springs YAZILAMADI: atlasın 'Avustralya İç Kesimi (Orta — Arrernte)'
// beyanı (ek30) AYNI konumda (0,2 km) — 3 km kuralı. Bkz. rapor.
// --------------------------------------------------------------------

{ ad:"Hermannsburg (Ntaria)", tur:"sehir", lat:-23.943, lon:132.778, g:0, k:0,
  kur:"1877-01-01",
  kaynak:"NT Place Names Register (Northern Territory Government), kayıt 22429: \"Hermannsburg was established by Lutheran Missionaries in 1877.\" YIL hassasiyeti.",
  s:[{f:"1877-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Katherine", tur:"sehir", lat:-14.465, lon:132.2635, g:0, k:0,
  kur:"1871-01-01",
  kaynak:"Britannica 'Katherine': \"The town began as a repeater station for the Overland Telegraph Line, which reached the site in 1871.\" YIL hassasiyeti.",
  s:[{f:"1871-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Coober Pedy", tur:"sehir", lat:-29.0135, lon:134.7544, g:0, k:0,
  kur:"1915-01-01",
  kaynak:"Britannica 'Coober Pedy': \"Opals were discovered there in February 1915 by a boy, Willie Hutchison…\" YIL hassasiyeti (ay Şubat metinde).",
  s:[{f:"1915-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Fitzroy Crossing", tur:"sehir", lat:-18.1833, lon:125.5833, g:0, k:0,
  kur:"1903-01-01",
  kaynak:"Landgate (WA), 'History of country town names — Fitzroy Crossing': \"The town however was settled around the turn of the century, being first shown on maps in 1903.\" ⚠️ 1903 VARLIĞIN ilk kanıtıdır, kuruluş değil (ihtiyatlı alt sınır). YIL hassasiyeti.",
  s:[{f:"1903-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Norseman", tur:"sehir", lat:-32.2, lon:121.7833, g:0, k:0,
  kur:"1895-05-01",
  kaynak:"Landgate (WA), 'History of country town names — Norseman': \"The townsite was gazetted in May 1895.\" AY hassasiyeti (D213: 05-01 ayı kodlar).",
  s:[{f:"1895-05-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Menzies (Batı Avustralya)", tur:"sehir", lat:-29.6833, lon:121.0333, g:0, k:0,
  kur:"1895-08-01",
  kaynak:"Landgate (WA), 'History of country town names — Menzies': \"The townsite was gazetted in August 1895.\" AY hassasiyeti.",
  s:[{f:"1895-08-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Mount Magnet", tur:"sehir", lat:-28.0667, lon:117.85, g:0, k:0,
  kur:"1895-01-01",
  kaynak:"Landgate (WA), 'History of country town names — Mount Magnet': \"the survey was carried out in 1894 and the townsite gazetted in 1895.\" YIL hassasiyeti.",
  s:[{f:"1895-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Port Hedland", tur:"liman", lat:-20.3143, lon:118.5864, g:0, k:0,
  kur:"1896-01-01",
  kaynak:"Landgate (WA), 'History of country town names — Port Hedland': \"Following the survey of lots the townsite of Port Hedland was gazetted in 1896.\" YIL hassasiyeti.",
  s:[{f:"1896-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Albany (Batı Avustralya)", tur:"liman", lat:-35.0228, lon:117.8814, g:1, k:1,
  kur:"1826-12-25",
  kaynak:"Western Australian Museum, 'The story of the Brig Amity': Lockyer'in seferi King George Sound'a \"…on Christmas Day, December the 25th 1826\" ulaştı. Britannica 'Albany': \"In 1826 the first European settlement in the state… Frederickstown… was established there\".",
  s:[{f:"1826-12-25",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Bunbury", tur:"liman", lat:-33.3271, lon:115.6414, g:0, k:0,
  kur:"1841-01-01",
  kaynak:"Heritage Council of WA (inHerit), 'Bunbury Bathing Pavilion': \"The townsite of Bunbury was surveyed and gazetted in 1841.\" YIL hassasiyeti.",
  s:[{f:"1841-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Cooktown", tur:"liman", lat:-15.465, lon:145.25, g:1, k:1,
  kur:"1873-10-25",
  kaynak:"Queensland Parks and Wildlife Service, 'Endeavour River National Park — Culture and history': \"Cooktown (initially called Cook's Town) was established when a party… landed on the south bank of the Endeavour River on 25 October 1873\". Queensland Places: 1 Haziran 1874'te Cooktown adını aldı.",
  s:[{f:"1873-10-25",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Thursday Island (Port Kennedy)", tur:"liman", lat:-10.5679, lon:142.2148, g:1, k:1,
  kur:"1878-01-01",
  kaynak:"Queensland Places (University of Queensland), 'Thursday Island': \"In 1878 Port Kennedy, Thursday Island, was settled…\" YIL hassasiyeti.",
  s:[{f:"1878-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Weipa Misyonu", tur:"sehir", lat:-12.6759, lon:141.8851, g:0, k:0,
  kur:"1898-01-01",
  kaynak:"Queensland Places, 'Weipa': \"Weipa was established as an Aboriginal mission by the Presbyterian Church in 1898…\" YIL hassasiyeti. ⚠️ Koordinat misyon/Napranum alanı için YAKLAŞIK.",
  s:[{f:"1898-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Oenpelli (Gunbalanya)", tur:"sehir", lat:-12.325, lon:133.056, g:0, k:0,
  kur:"1906-01-01",
  kaynak:"NT Place Names Register, kayıt 329: \"Originally established by Paddy Cahill as his homestead in 1906…\" YIL hassasiyeti. ⚠️ CMS misyonu Ekim 1925 — pencere dışı; kayıt 1906 çiftliğidir.",
  s:[{f:"1906-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Roper River Misyonu (Ngukurr)", tur:"sehir", lat:-14.73, lon:134.73, g:0, k:0,
  kur:"1908-01-01",
  kaynak:"NT Place Names Register, kayıt 22448: \"…established by the Church Mission Society in 1908 on the banks of the Roper River\". YIL hassasiyeti. ⚠️ Koordinat bugünkü Ngukurr için YAKLAŞIK; ilk misyon yeri ayrıca doğrulanmadı.",
  s:[{f:"1908-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Mount Gambier", tur:"sehir", lat:-37.8284, lon:140.7804, g:1, k:1,
  kur:"1854-01-01",
  kaynak:"Britannica 'Mount Gambier': \"A private settlement called Gambier Town was founded in 1854 there by Hastings Cuningham\". ⚠️ State Library of SA (Manning) Sturt'ün daha önce 'Gambierton'ı çizdiğini, Cunningham'ın 'bazen yanlışlıkla' kurucu sayıldığını söylüyor (tarihsiz) — kasaba 1854'ten ÖNCE de olabilir; 1854 ihtiyatlı alt sınır.",
  s:[{f:"1854-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

];
