// =====================================================================
// NOKTA MENZİL — 27 eksik nokta · menzil durakları + Macaristan merkezleri
// İŞÇİ oturum: NOKTA MENZİL · 15 Ağustos 2026
// Görev: oturumlar/NOKTA-MENZIL.md  (tahta M-0082)
//
// 🔴 DOSYA ADI NOTU — şartname "yerlesimler_ek27.js (YENİ dosya)" diyordu.
//   ÖLÇÜLDÜ, YANLIŞ ÇIKTI: ek27.js 12 Ağustos'ta yazılmış, 5 nokta taşıyor
//   (Artvin · Hopa · Mersin · İskenderun), girdi.py'ye BAĞLI ve başka bir
//   oturumun teslimi (commit d466c60). ek28 de dolu. Kullanılan ek
//   numaraları 2..28 KESİNTİSİZ ⇒ ilk boş: ek29. Şartnamenin NİYETİ
//   "YENİ ve BENİM olan dosya"ydı; bu dosya o tarife uyuyor.
//   Koordinatöre tahta M-0084 ile DURDURUCU olarak bildirildi.
//
// 🔴 HEDEF 28 DEĞİL 27 — "Firecik" veride ZATEN VAR:
//   "Ferecik (Feres)" (40.8970, 26.1720), uzaklık 0,59 km. Yazılmadı.
//   Şartnamenin kendi ⑤② uyarısı ("kayıt başka yazımla olabilir")
//   şartnamenin kendi listesinde ateşledi.
//
// ⚠️ YAZIM ÖNCESİ ÖLÇÜM (IS 0): taban 2500 nokta, girdi.yukle() ile
//   okundu (kendi ayrıştırıcım DEĞİL). 28 hedefin her biri için 25 km
//   yarıçap taraması yapıldı, KOORDİNATLA — adla değil. Ad tuzağı
//   yakalandı ve elendi: "Aşkale" araması "Başkale" getirdi, 355 km ötede.
// =====================================================================

window.YERLESIMLER_EK29 = [

// ───────── ① ERDEL BELGRADI — Erdel Prensliği'nin BAŞKENTİ ─────────
//
// 🔴 NİÇİN İLK: bu tek nokta Macaristan kimlik zincirinin darboğazı.
//   NOKTA → KÜNYE → RENK → VERİ → KOŞU (tahta M-0021, M-0082).
//   Erdel bugün haritada yalnız Kolozsvár'dan temsil ediliyor; başkenti
//   veride yoktu.
//
// AD SEÇİMİ — Osmanlıca ad TDV kaynaklı, modern ad parantezde:
//   TDV `belgradcik` maddesi: "Erdel'deki (Transilvanya) Erdel
//   Belgradı'ndan (Alba Julia) ayırt edilmek için Belgradcık şeklinde
//   anılmıştır." ⇒ Osmanlı kaynaklarındaki adı ERDEL BELGRADI.
//   Macarca Gyulafehérvár, Romence Alba Iulia, Almanca Karlsburg.
//   Proje geleneği (Ahılkelek (Akhalkalaki)) Osmanlıca-önce.
//
// kaynak: TDV `erdel` (HTTP 200, gövdesi okundu) + TDV `belgradcik` (ad için)
//
// ⚠️ TDV BAŞKENT DEMİYOR — bu bir TANECİKLİK boşluğu (CLAUDE.md §4):
//   `erdel` maddesi Alba Julia'yı "belli başlı şehirler" arasında sayıyor
//   ama başkent olduğunu YAZMIYOR. Başkentlik hükmü şartnameden
//   (koordinatör) geldi; ben TDV'de DOĞRULAYAMADIM ve bunu "doğruladım"
//   diye yazmıyorum. Noktanın yazılması için başkentlik şartı yok —
//   koordinat ve sahiplik dönemi yeter; başkentlik bir BAĞLAM bilgisidir.
//
// DÖNEMLER — kardeş nokta "Erdel (Kaloşvar)" ile BİREBİR aynı:
//   Gün UYDURULMADI; kutudaki mevcut kırılma günleri ölçüldü ve
//   kullanılanlar seçildi: 1526-09-01 (18 kayıt) · 1541-08-29 (12 kayıt) ·
//   1687-08-12 (4 kayıt). Üçünün de kronolojide karşılığı VAR, yani
//   Değişmez 2 açılmıyor.
//
// 🔴 VE BİR KAYNAK ÇELİŞKİSİ BİLDİRİYORUM (düzeltmiyorum, RAPOR ediyorum):
//   TDV `erdel`: "Avusturya orduları ... 1697'de Erdel'i de işgal ettiler"
//   ve "1699 Karlofça Antlaşması ile Erdel Avusturya'ya terkedildi."
//   VERİDEKİ mevcut sınır ise 1687-08-12 (II. Mohaç sonrası Habsburg
//   idaresi). Aradaki fark 10-12 YIL. §4 TDV'yi birincil sayar, ama
//   mevcut Kolozsvár kaydını DEĞİŞTİRMEK benim yetkim değil ve bu nokta
//   kardeşiyle TUTARSIZ olursa harita ikiye bölünür. ⇒ Tutarlılığı
//   seçtim, çelişkiyi koordinatöre bildirdim. Karar onun.
//
// 🔴 `d:"erdel"` YAZILMADI — KASITLI. `erdel` künyesi VAR ama RENGİ YOK
//   (tahta M-0021). CLAUDE.md §8: BOYALAR'da tanımlı olmayan kimlik
//   BOYANMAZ ⇒ yazsaydım 158 yıllık prensliği BEYAZ bırakırdım. Zincirin
//   sırası bağlayıcı: RENK önce. Bugün kardeş nokta gibi jenerik `v:`
//   (tâbi) kullanıldı; RENK 3 rengi yazdıktan SONRA bu iki `v:` dönemi
//   `s:[{d:"erdel"}]` ile değiştirilebilir.
//
// k:2 GEREKÇE — kardeş nokta Kolozsvár k:2. k:1 "eyalet merkezi" demek
//   ve Erdel bir Osmanlı EYALETİ değil, haraçgüzâr voyvodalık/prenslik
//   (TDV: "Osmanlı idaresinde muhtar bir voyvodalık"). k:1 yanlış olurdu.
{ ad:"Erdel Belgradı (Gyulafehérvár)", tur:"sehir", lat:46.0678, lon:23.5800, g:0, k:2,
  s:[{f:"1281-01-01",t:"1526-11-10","d":"macaristan",kaynak:"BALKAN-MACAR-0081: Szapolyai'nin seçimine (TDV suleyman-i 10 Kasım 1526) dek tek krallık"},{"f":"1687-08-12","t":"1918-11-11","d":"macaristan-habsburg","kaynak":"TDV macaristan (Géza Dávid): '1867'de iki ülke arasında bir uzlaşma meydana geldi. Avusturya-Macaristan monarşisi ortaya çıktı'; Trianon (4 Haziran 1920) Macaristan'ın kaybı, arazi 'Hırvatistan hariç' sayılır. Nokta Macar tacı (Transleithania) toprağı — iç taksimat için akademik alıntı: bulunamadı (denetim/ONCE1281-MACAR-TAC-1004.md). Önceki yazım `avusturya` (Habsburg Avusturya) idi."},{"f":"1918-11-11","t":"1920-06-04","d":"macaristan-naiplik","kaynak":"F8 (Emre, 5 Eki 2026): de jure devir antlaşma gününde — TDV birinci-dunya-savasi: '4 Haziran 1920'de Macaristan ile Trianon … antlaşmaları imzalandı' · ara dönem: Macar tacı 1918-11-11 → antlaşma (macaristan-naiplik künyesi 1918-11-16 — mevcut çekirdek verisinin 5 günlük emsali)"},{"f":"1920-06-04","t":"1947-12-30","d":"romanya-kralligi","kaynak":"F8 (Emre, 5 Eki 2026): de jure devir antlaşma gününde — TDV birinci-dunya-savasi: '4 Haziran 1920'de Macaristan ile Trianon … antlaşmaları imzalandı'"},{"f":"1551-07-26","t":"1556-03-12","d":"macaristan-habsburg","kaynak":"History of Transylvania I (MTA) s.102 · künye macaristan-habsburg (harita: macaristan)"},{"f":"1947-12-30","t":"1989-12-22","d":"romanya-halk","kaynak":"LoC Romania Country Study"},{"f":"1989-12-22","t":"2000-12-31","d":"romanya-cumhuriyeti","kaynak":"LoC Romania Country Study"}],
  d:[],
  v:[{f:"1526-11-10",t:"1541-08-29","statu":"vassal",kaynak:"BALKAN-MACAR-0081 H-0026: tâbilik Szapolyai'nin krallığıyla başlar — TDV suleyman-i 'Macar soyluları … János Szapolyai’yi kral seçmişlerdi (10 Kasım 1526). Budin’i boşaltan Osmanlılar da … Szapolyai’nin krallığını kendilerine tâbi olması kaydıyla tanımıştı' — tanınmanın GÜNÜ yok, seçim günü ALT SINIRDIR; eski başlangıç seçimden 70 gün önceydi"},{"f":"1541-08-29","t":"1551-07-26","statu":"vassal"},{"f":"1556-03-12","t":"1687-08-12","statu":"vassal"}] },

// ═════════ ② ERDEL'İN İKİ SAKSON ŞEHRİ ═════════
//
// Çizgi Gyulafehérvár ve kardeş nokta "Erdel (Kaloşvar)" ile BİREBİR aynı.
// Gün uydurulmadı; üçü de kutuda zaten kullanılan kırılma günleri:
// 1526-09-01 (18 kayıt) · 1541-08-29 (12 kayıt) · 1687-08-12 (4 kayıt).
// kaynak: TDV `erdel` (gövdesi okundu) — "1541'de Erdel'in Osmanlı
//   idaresinde muhtar bir voyvodalık haline geldi", "1699 Karlofça
//   Antlaşması ile Erdel Avusturya'ya terkedildi".
// ⚠️ `d:"erdel"` YAZILMADI — künyesi var, RENGİ YOK (§8: boyanmaz).
//   RENK 3 rengi yazdıktan sonra `v:` dönemleri çevrilebilir.

{ ad:"Brassó (Braşov)", tur:"sehir", lat:45.6427, lon:25.5887, g:0, k:2,
  s:[{f:"1281-01-01",t:"1526-11-10","d":"macaristan",kaynak:"BALKAN-MACAR-0081: Szapolyai'nin seçimine (TDV suleyman-i 10 Kasım 1526) dek tek krallık"},{"f":"1687-08-12","t":"1918-11-11","d":"macaristan-habsburg","kaynak":"TDV macaristan (Géza Dávid): '1867'de iki ülke arasında bir uzlaşma meydana geldi. Avusturya-Macaristan monarşisi ortaya çıktı'; Trianon (4 Haziran 1920) Macaristan'ın kaybı, arazi 'Hırvatistan hariç' sayılır. Nokta Macar tacı (Transleithania) toprağı — iç taksimat için akademik alıntı: bulunamadı (denetim/ONCE1281-MACAR-TAC-1004.md). Önceki yazım `avusturya` (Habsburg Avusturya) idi."},{"f":"1918-11-11","t":"1920-06-04","d":"macaristan-naiplik","kaynak":"F8 (Emre, 5 Eki 2026): de jure devir antlaşma gününde — TDV birinci-dunya-savasi: '4 Haziran 1920'de Macaristan ile Trianon … antlaşmaları imzalandı' · ara dönem: Macar tacı 1918-11-11 → antlaşma (macaristan-naiplik künyesi 1918-11-16 — mevcut çekirdek verisinin 5 günlük emsali)"},{"f":"1920-06-04","t":"1947-12-30","d":"romanya-kralligi","kaynak":"F8 (Emre, 5 Eki 2026): de jure devir antlaşma gününde — TDV birinci-dunya-savasi: '4 Haziran 1920'de Macaristan ile Trianon … antlaşmaları imzalandı'"},{"f":"1551-07-26","t":"1556-03-12","d":"macaristan-habsburg","kaynak":"History of Transylvania I (MTA) s.102 · künye macaristan-habsburg (harita: macaristan)"},{"f":"1947-12-30","t":"1989-12-22","d":"romanya-halk","kaynak":"LoC Romania Country Study"},{"f":"1989-12-22","t":"2000-12-31","d":"romanya-cumhuriyeti","kaynak":"LoC Romania Country Study"}],
  "isg":[{"f":"1918-12-01","t":"1920-06-04","d":"romanya-kralligi","kesinlik":{"f":"ay"},"kaynak":"AY DÜZEYİ (D213, P84-BRASSO-TEMESVAR-1006): kaynak aynı olaya iki gün veriyor (7 / 10 Aralık 1918), ikisinin ortak en kaba güvenli düzeyi Aralık 1918 — eski f:1918-12-07 (A) cümlesinin seçimiydi · bağımsız kurumsal tanık, BÖLGE düzeyi (şehir günü vermez): Muzeul Național de Istorie a României — Muzeul Virtual al Unirii (mvu.ro, 'How Transilvania, Banatul, Crisana and Maramuresul got togheter') — 'The Romanian army entered South East Transylvania at the beginning of December 1918' · F8 fiilî devir: Adevărul (gazete, S. Dan, 01.12.2015, Şchei kilisesi arşivine dayanarak) — https://adevarul.ro/stiri-locale/brasov/brasovul-la-1-decembrie-1918-1670631.html — 'avea să conducă ceremonialul primirii armatei române în Braşov, avându-l în frunte pe generalul Berthelot în 24 noiembrie - 7 decembrie 1918. ... manifestările prilejuite de intrarea triumfală a Armatei Române în Braşov pe 10 decembrie 1918.'"}],
  d:[],
  v:[{f:"1526-11-10",t:"1541-08-29","statu":"vassal",kaynak:"BALKAN-MACAR-0081 H-0026: tâbilik Szapolyai'nin krallığıyla başlar — TDV suleyman-i 'Macar soyluları … János Szapolyai’yi kral seçmişlerdi (10 Kasım 1526). Budin’i boşaltan Osmanlılar da … Szapolyai’nin krallığını kendilerine tâbi olması kaydıyla tanımıştı' — tanınmanın GÜNÜ yok, seçim günü ALT SINIRDIR; eski başlangıç seçimden 70 gün önceydi"},{"f":"1541-08-29","t":"1551-07-26","statu":"vassal"},{"f":"1556-03-12","t":"1687-08-12","statu":"vassal"}] },

{ ad:"Segesvár (Sighişoara)", tur:"sehir", lat:46.2197, lon:24.7925, g:0, k:3,
  s:[{f:"1281-01-01",t:"1526-11-10","d":"macaristan",kaynak:"BALKAN-MACAR-0081: Szapolyai'nin seçimine (TDV suleyman-i 10 Kasım 1526) dek tek krallık"},{"f":"1687-08-12","t":"1918-11-11","d":"macaristan-habsburg","kaynak":"TDV macaristan (Géza Dávid): '1867'de iki ülke arasında bir uzlaşma meydana geldi. Avusturya-Macaristan monarşisi ortaya çıktı'; Trianon (4 Haziran 1920) Macaristan'ın kaybı, arazi 'Hırvatistan hariç' sayılır. Nokta Macar tacı (Transleithania) toprağı — iç taksimat için akademik alıntı: bulunamadı (denetim/ONCE1281-MACAR-TAC-1004.md). Önceki yazım `avusturya` (Habsburg Avusturya) idi."},{"f":"1918-11-11","t":"1920-06-04","d":"macaristan-naiplik","kaynak":"F8 (Emre, 5 Eki 2026): de jure devir antlaşma gününde — TDV birinci-dunya-savasi: '4 Haziran 1920'de Macaristan ile Trianon … antlaşmaları imzalandı' · ara dönem: Macar tacı 1918-11-11 → antlaşma (macaristan-naiplik künyesi 1918-11-16 — mevcut çekirdek verisinin 5 günlük emsali)"},{"f":"1920-06-04","t":"1947-12-30","d":"romanya-kralligi","kaynak":"F8 (Emre, 5 Eki 2026): de jure devir antlaşma gününde — TDV birinci-dunya-savasi: '4 Haziran 1920'de Macaristan ile Trianon … antlaşmaları imzalandı'"},{"f":"1551-07-26","t":"1556-03-12","d":"macaristan-habsburg","kaynak":"History of Transylvania I (MTA) s.102 · künye macaristan-habsburg (harita: macaristan)"},{"f":"1947-12-30","t":"1989-12-22","d":"romanya-halk","kaynak":"LoC Romania Country Study"},{"f":"1989-12-22","t":"2000-12-31","d":"romanya-cumhuriyeti","kaynak":"LoC Romania Country Study"}],
  d:[],
  v:[{f:"1526-11-10",t:"1541-08-29","statu":"vassal",kaynak:"BALKAN-MACAR-0081 H-0026: tâbilik Szapolyai'nin krallığıyla başlar — TDV suleyman-i 'Macar soyluları … János Szapolyai’yi kral seçmişlerdi (10 Kasım 1526). Budin’i boşaltan Osmanlılar da … Szapolyai’nin krallığını kendilerine tâbi olması kaydıyla tanımıştı' — tanınmanın GÜNÜ yok, seçim günü ALT SINIRDIR; eski başlangıç seçimden 70 gün önceydi"},{"f":"1541-08-29","t":"1551-07-26","statu":"vassal"},{"f":"1556-03-12","t":"1687-08-12","statu":"vassal"}] },

// ═════════ ③ UYVAR EYALETİ — Osmanlı'nın 1663-1685 çıkıntısı ═════════
//
// 🟢 TDV `uyvar` (HTTP 200, gövdesi okundu) İKİ GÜNÜ DE VERDİ ve ikisi de
//   veride ZATEN kullanılıyor (Uyvar kaydı, yerlesimler*.js):
//     fetih   "17 Ağustos 1663'te kuşattı ... 26 Eylül'e kadar sürdü"
//             ⇒ veride 1663-09-24 (teslim günü) — DEĞİŞTİRMEDİM
//     geri    "kale ve şehir Habsburg idaresine girdi (19 Ağustos 1685)"
//             ⇒ veride 1685-08-19 — BİREBİR aynı
//   ⇒ Nitra'nın iki kırılma günü de kronolojide KARŞILIĞI OLAN günler,
//     Değişmez 2 AÇILMIYOR.
//
// 🔴 VE TDV BİR ŞEY DAHA VERDİ — Uyvar eyaletinin sancak listesi:
//   "Osmanlılar, Uyvar merkezli sancağı sekiz idarî bölgeye ayırdılar:
//    Uyvar, Narhid, Barş, KOMARAN, Hond, NİTRA, Jabokrek ve Şele."
//   Yani NİTRA bir Osmanlı sancağı ⇒ `d:` dönemi YAZILDI, k:2.

{ ad:"Nitra (Nyitra)", tur:"kale", lat:48.3069, lon:18.0864, g:0, k:2,
  s:[{f:"1281-01-01",t:"1526-12-17",d:"macaristan",kaynak:"BALKAN-MACAR-0081: tek krallık ikinci kralın seçimine dek sürer (TDV suleyman-i 17 Aralık 1526) · ÖNCEKİ: macaristan künyesi 1526-08-29’de bitiyor; Nitra habsburg künyesinden 245 yıl önce avusturya boyanıyordu · ⚠️ kasaba-tanecik kaynak OKUNMADI (TDV nitra slug’ı yok); aynı dosyadaki Komárom kaydıyla aynı desen · KUNYE-ANADOLU-0081 H-0003"},{f:"1526-12-17",t:"1663-09-24",d:"macaristan-habsburg",kaynak:"BALKAN-MACAR-0081 H-0026: Habsburg dönemi Mohaç GÜNÜNDEN değil I. Ferdinand'ın Macar kralı ilânından başlar — TDV suleyman-i 'Macar kralı ilân edilmesi: 17 Aralık 1526' · TDV budin 'Ferdinand’ı (17 Aralık 1526) seçmişti'. Fiilî denetimin kale kale günü bulunamadı · ÖNCEKİ: BOSNA-MACAR-0087 (0087/H-0024): kimlik avusturya → macaristan-habsburg — Habsburg'un bu topraktaki sıfatı Macar/Hırvat KRALIDIR, Avusturya arşidükü değil. TDV budin: 'diğer kısmı ise Macar tahtında hak iddia eden Habsburg hânedanına mensup … Ferdinand’ı (17 Aralık 1526) seçmişti' · TDV hirvatistan: 'Mohaç Muharebesi’nden bir yıl sonra (1527) … Hırvatlar … Habsburg hânedanına mensup I. Ferdinand’ı kral olarak seçtiler' · TDV macaristan: 'Macaristan’da Habsburglar’ın elindeki kısım'. Gün DEĞİŞMEDİ (künye macaristan-habsburg f ile hizalı)"},
     {f:"1664-05-03",t:"1918-11-11",d:"macaristan-habsburg",kaynak:"KUTU-B-1014 (0088/H-0053): Bánlaky, A magyar nemzet hadtörténelme (MEK 09477) 0016/1325 De Souches 'április 15-én Nyitra alá érkezett' · 0016/1322 'Nyitra május 3-án kénytelen volt magát megadni' (1664) · 0016/1333 Garamszentbenedek (Léva) muharebesinden sonra 'Léva és Nyitra várak megtartattak' · Vasvár uti possidetis: Uyvar Osmanlı'da, Nitra Habsburg'da. TDV uyvar'daki 'Nitra' nahiyesi Uyvar sancağının vergi bölgesidir, kalenin Osmanlı'da kaldığını göstermez · ÖNCEKİ f 1685-08-19 (Uyvar'ın kaybı) yanlıştı · t: TDV macaristan (Géza Dávid) '1867 … Avusturya-Macaristan'; Trianon (4 Haziran 1920)"},
     {f:"1918-11-11",t:"1920-06-04",d:"macaristan-naiplik",kaynak:"F8 (Emre, 5 Eki 2026): de jure devir antlaşma gününde — TDV birinci-dunya-savasi: '4 Haziran 1920'de Macaristan ile Trianon … antlaşmaları imzalandı' · ara dönem: Macar tacı 1918-11-11 → antlaşma (macaristan-naiplik künyesi 1918-11-16 — mevcut çekirdek verisinin 5 günlük emsali)"},
     {f:"1920-06-04",t:"1939-03-14",d:"cekoslovakya",kaynak:"F8 (Emre, 5 Eki 2026): de jure devir antlaşma gününde — TDV birinci-dunya-savasi: '4 Haziran 1920'de Macaristan ile Trianon … antlaşmaları imzalandı'"},{f:"1939-03-14",t:"1945-04-04",d:"slovakya-cumhuriyeti",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"},{f:"1945-04-04",t:"1993-01-01",d:"cekoslovakya",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"},{f:"1993-01-01",t:"2000-12-31",d:"slovakya",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"}],
  d:[{f:"1663-09-24",t:"1664-05-03",kaynak:"Bánlaky, A magyar nemzet hadtörténelme (MEK 09477) 0016/1315: Uyvar'dan sonra 'Megadta tehát magát s ugyanezt tette Nyitra, Léva, Szécsény' (1663) — teslim günü yok; GÜN KOMŞUDAN: Uyvar (TDV uyvar 24 Eylül 1663, aynı sefer, aynı kaynak cümlesi) · t: 0016/1322 (3 Mayıs 1664)"}], v:[] },

// 🔴 KOMÁROM — `d:` YAZILMADI, ve bu bir HÜKÜM, ihmal değil.
//   TDV'nin sancak listesinde "KOMARAN" geçiyor, yani Osmanlı orayı bir
//   idarî bölge olarak SAYIYOR. Ama Komárom KALESİ Osmanlı eline HİÇ
//   geçmedi — Tuna'nın iki kolu arasındaki adada, kuşatmalara dayandı.
//   ⇒ `CLAUDE.md §11`: "ATLAS SEFERİ DEĞİL TASARRUFU BOYAR." Bir kimliğin
//   İDARÎ İDDİASI ile HARİTADAKİ GÖVDESİ ayrı şeylerdir; `ace ↔ ming`
//   vakasının kara tarafı. Sancak defterinde ad geçmesi, kalenin
//   düştüğü anlamına gelmez.
//   ⚠️ ÖLÇMEDİM: kalenin hiç düşmediğini TDV'de DOĞRULAYAMADIM — `uyvar`
//   maddesi Komaran'ı yalnız liste içinde anıyor, kuşatma anlatmıyor.
//   Bu yüzden Osmanlı dönemi YAZMADIM (uydurmaktansa eksik bırakmak).
//   Karşı kanıt çıkarsa `d:[{f:"1663-09-24",t:"1685-08-19"}]` eklenir.
// kaynak: TDV `uyvar` (sancak listesi) — kale tarihçesi için bulunamadı

{ ad:"Komárom (Komárno)", tur:"kale", lat:47.7625, lon:18.1250, g:0, k:3,
  s:[{f:"1281-01-01",t:"1526-12-17",d:"macaristan",kaynak:"BALKAN-MACAR-0081: tek krallık ikinci kralın seçimine dek sürer (TDV suleyman-i 17 Aralık 1526)"},
     {f:"1526-12-17",t:"1918-11-11",d:"macaristan-habsburg",kaynak:"BALKAN-MACAR-0081 H-0026: Habsburg dönemi Mohaç GÜNÜNDEN değil I. Ferdinand'ın Macar kralı ilânından başlar — TDV suleyman-i 'Macar kralı ilân edilmesi: 17 Aralık 1526' · TDV budin 'Ferdinand’ı (17 Aralık 1526) seçmişti'. Fiilî denetimin kale kale günü bulunamadı · ÖNCEKİ: TDV macaristan (Géza Dávid): '1867'de iki ülke arasında bir uzlaşma meydana geldi. Avusturya-Macaristan monarşisi ortaya çıktı'; Trianon (4 Haziran 1920) Macaristan'ın kaybı, arazi 'Hırvatistan hariç' sayılır. Nokta Macar tacı (Transleithania) toprağı — iç taksimat için akademik alıntı: bulunamadı (denetim/ONCE1281-MACAR-TAC-1004.md). Önceki yazım `avusturya` (Habsburg Avusturya) idi."},
     {f:"1918-11-11",t:"1920-06-04",d:"macaristan-naiplik",kaynak:"F8 (Emre, 5 Eki 2026): de jure devir antlaşma gününde — TDV birinci-dunya-savasi: '4 Haziran 1920'de Macaristan ile Trianon … antlaşmaları imzalandı' · ara dönem: Macar tacı 1918-11-11 → antlaşma (macaristan-naiplik künyesi 1918-11-16 — mevcut çekirdek verisinin 5 günlük emsali)"},
     {f:"1920-06-04",t:"1939-03-14",d:"cekoslovakya",kaynak:"F8 (Emre, 5 Eki 2026): de jure devir antlaşma gününde — TDV birinci-dunya-savasi: '4 Haziran 1920'de Macaristan ile Trianon … antlaşmaları imzalandı'"},{f:"1939-03-14",t:"1945-04-04",d:"slovakya-cumhuriyeti",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"},{f:"1945-04-04",t:"1993-01-01",d:"cekoslovakya",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"},{f:"1993-01-01",t:"2000-12-31",d:"slovakya",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"}],
  d:[], v:[] },

// 🔴 LÉVA (Levice) — Osmanlı dönemi YAZILMADI, sebebi KAYNAK YOKLUĞU.
//   TDV `uyvar` sancak listesinde Léva GEÇMİYOR (sekiz ad sayıldı, yok).
//   Léva'nın 1663'te alınıp 1664'te geri kaybedildiğine dair yaygın bir
//   anlatı var ama TDV bunu KAPSAMIYOR ve ben akademik kaynakta
//   DOĞRULAYAMADIM ⇒ `bulunamadı`.
//   ⚠️ Ve yazmamanın ikinci bir sebebi daha var: 1664 için veride
//   kırılma günü YOK; uydurulmuş bir gün Değişmez 2'yi AÇARDI.
// kaynak: bulunamadı — TDV `uyvar` Léva'yı saymıyor, akademik kaynak aranmadı

{ ad:"Léva (Levice)", tur:"kale", lat:48.2172, lon:18.6069, g:0, k:3,
  s:[{f:"1281-01-01",t:"1526-12-17",d:"macaristan",kaynak:"BALKAN-MACAR-0081: tek krallık ikinci kralın seçimine dek sürer (TDV suleyman-i 17 Aralık 1526)"},
     {f:"1526-12-17",t:"1663-09-24",d:"macaristan-habsburg",kaynak:"BALKAN-MACAR-0081 H-0026: Habsburg dönemi I. Ferdinand'ın Macar kralı ilânından (TDV suleyman-i 17 Aralık 1526) başlar · t: KUTU-B-1014 (aşağıdaki d:)"},
     {f:"1664-06-14",t:"1918-11-11",d:"macaristan-habsburg",kaynak:"KUTU-B-1014 (0088/H-0053): Bánlaky, A magyar nemzet hadtörténelme (MEK 09477) 0016/1331 'Léva vára másnap, azaz június 14-én a császáriak kezében volt' (1664; kapitülasyon 13 Haziran) · Vasvár uti possidetis · t: TDV macaristan (Géza Dávid) '1867 … Avusturya-Macaristan'; Trianon (4 Haziran 1920)"},
     {f:"1918-11-11",t:"1920-06-04",d:"macaristan-naiplik",kaynak:"F8 (Emre, 5 Eki 2026): de jure devir antlaşma gününde — TDV birinci-dunya-savasi: '4 Haziran 1920'de Macaristan ile Trianon … antlaşmaları imzalandı' · ara dönem: Macar tacı 1918-11-11 → antlaşma (macaristan-naiplik künyesi 1918-11-16 — mevcut çekirdek verisinin 5 günlük emsali)"},
     {f:"1920-06-04",t:"1939-03-14",d:"cekoslovakya",kaynak:"F8 (Emre, 5 Eki 2026): de jure devir antlaşma gününde — TDV birinci-dunya-savasi: '4 Haziran 1920'de Macaristan ile Trianon … antlaşmaları imzalandı'"},{f:"1939-03-14",t:"1945-04-04",d:"slovakya-cumhuriyeti",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"},{f:"1945-04-04",t:"1993-01-01",d:"cekoslovakya",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"},{f:"1993-01-01",t:"2000-12-31",d:"slovakya",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"}],
  d:[{f:"1663-09-24",t:"1664-06-14",kaynak:"Bánlaky, A magyar nemzet hadtörténelme (MEK 09477) 0016/1315: Uyvar'dan sonra Nyitra, Léva, Szécsény de teslim oldu; Rasid'e göre Léva 'csak igen rövid ideig állhatott ellent' — teslim günü yok; GÜN KOMŞUDAN: Uyvar (TDV uyvar 24 Eylül 1663, aynı sefer, aynı kaynak cümlesi) · t: 0016/1331 (14 Haziran 1664)"}], v:[] },

// TRENCSÉN — Vág vadisinin kuzeyi, Osmanlı hattının HİÇ ulaşmadığı derinlik.
// Çizgi Bratislava (48,15/17,11) ile birebir aynı desende.
// kaynak: bulunamadı — TDV bu taneciği kapsamıyor; desen kardeş
//   kayıtlardan (Bratislava · Kassa · Eperjes · Tokaj, hepsi 1526-08-29)

{ ad:"Trencsén (Trenčín)", tur:"kale", lat:48.8945, lon:18.0444, g:0, k:3,
  s:[{f:"1281-01-01",t:"1526-12-17",d:"macaristan",kaynak:"BALKAN-MACAR-0081: tek krallık ikinci kralın seçimine dek sürer (TDV suleyman-i 17 Aralık 1526)"},
     {f:"1526-12-17",t:"1918-11-11",d:"macaristan-habsburg",kaynak:"BALKAN-MACAR-0081 H-0026: Habsburg dönemi Mohaç GÜNÜNDEN değil I. Ferdinand'ın Macar kralı ilânından başlar — TDV suleyman-i 'Macar kralı ilân edilmesi: 17 Aralık 1526' · TDV budin 'Ferdinand’ı (17 Aralık 1526) seçmişti'. Fiilî denetimin kale kale günü bulunamadı · ÖNCEKİ: TDV macaristan (Géza Dávid): '1867'de iki ülke arasında bir uzlaşma meydana geldi. Avusturya-Macaristan monarşisi ortaya çıktı'; Trianon (4 Haziran 1920) Macaristan'ın kaybı, arazi 'Hırvatistan hariç' sayılır. Nokta Macar tacı (Transleithania) toprağı — iç taksimat için akademik alıntı: bulunamadı (denetim/ONCE1281-MACAR-TAC-1004.md). Önceki yazım `avusturya` (Habsburg Avusturya) idi."},
     {f:"1918-11-11",t:"1920-06-04",d:"macaristan-naiplik",kaynak:"F8 (Emre, 5 Eki 2026): de jure devir antlaşma gününde — TDV birinci-dunya-savasi: '4 Haziran 1920'de Macaristan ile Trianon … antlaşmaları imzalandı' · ara dönem: Macar tacı 1918-11-11 → antlaşma (macaristan-naiplik künyesi 1918-11-16 — mevcut çekirdek verisinin 5 günlük emsali)"},
     {f:"1920-06-04",t:"1939-03-14",d:"cekoslovakya",kaynak:"F8 (Emre, 5 Eki 2026): de jure devir antlaşma gününde — TDV birinci-dunya-savasi: '4 Haziran 1920'de Macaristan ile Trianon … antlaşmaları imzalandı'"},{f:"1939-03-14",t:"1945-04-04",d:"slovakya-cumhuriyeti",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"},{f:"1945-04-04",t:"1993-01-01",d:"cekoslovakya",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"},{f:"1993-01-01",t:"2000-12-31",d:"slovakya",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"}],
  d:[], v:[] },

// ═════════ ④ HIRVAT SINIR BOYU — Osmanlı'nın DURDUĞU hat ═════════
//
// Çizgi Zagreb (45,81/15,98) ile birebir: macaristan 1526-08-29'a kadar,
// sonra avusturya, 1918-11-11'de yugoslavya. Üçünün de rengi VAR.
// ⚠️ 1526-08-29 (Mohaç günü) Habsburg tarafının kullandığı gün; Osmanlı
//   tâbi tarafı 1526-09-01 kullanıyor. Bu ayrım veride ZATEN var ve ben
//   ona uydum — kendi günümü seçmedim.

{ ad:"Varasd (Varaždin)", tur:"sehir", lat:46.3057, lon:16.3366, g:0, k:3,
  s:[{f:"1281-01-01",t:"1527-01-01",d:"macaristan",kaynak:"BALKAN-MACAR-0081: TDV hirvatistan 1527 (YIL)"},
     {f:"1527-01-01",t:"1918-11-11",d:"macaristan-habsburg",kaynak:"BALKAN-MACAR-0081 H-0026: TDV hirvatistan 'Mohaç Muharebesi’nden bir yıl sonra (1527) … Hırvatlar … I. Ferdinand’ı kral olarak seçtiler' — YIL (Cetin maddesi 1527-01-01). Slavonya'nın ayrı tutumu bulunamadı · ÖNCEKİ: TDV macaristan (Géza Dávid): '1867'de iki ülke arasında bir uzlaşma meydana geldi. Avusturya-Macaristan monarşisi ortaya çıktı'; Trianon (4 Haziran 1920) Macaristan'ın kaybı, arazi 'Hırvatistan hariç' sayılır. Nokta Macar tacı (Transleithania) toprağı — iç taksimat için akademik alıntı: bulunamadı (denetim/ONCE1281-MACAR-TAC-1004.md). Önceki yazım `avusturya` (Habsburg Avusturya) idi."},
     {f:"1918-11-11",t:"1920-06-04",d:"macaristan-naiplik",kaynak:"F8 (Emre, 5 Eki 2026): de jure devir antlaşma gününde — TDV birinci-dunya-savasi: '4 Haziran 1920'de Macaristan ile Trianon … antlaşmaları imzalandı' · ara dönem: Macar tacı 1918-11-11 → antlaşma (macaristan-naiplik künyesi 1918-11-16 — mevcut çekirdek verisinin 5 günlük emsali)"},
     {f:"1920-06-04",t:"1945-11-29",d:"yugoslavya",kaynak:"F8 (Emre, 5 Eki 2026): de jure devir antlaşma gününde — TDV birinci-dunya-savasi: '4 Haziran 1920'de Macaristan ile Trianon … antlaşmaları imzalandı'"},{f:"1945-11-29",t:"1991-06-25",d:"yugoslavya-federal",kaynak:"Britannica 'Yugoslavia'; Office of the Historian, Milestones 1989-1992 (Breakup of Yugoslavia)"},{f:"1991-06-25",t:"2000-12-31",d:"hirvatistan",kaynak:"Britannica 'Yugoslavia'; Office of the Historian, Milestones 1989-1992 (Breakup of Yugoslavia)"}],
  d:[], v:[] },

// 🔴 SISAK — 1593 Sisak Muharebesi'nin yeri, Uzun Savaş'ı başlatan olay.
//   ⚠️ Osmanlı dönemi YAZILMADI: Osmanlıların 1593 yenilgisinden SONRA
//   kaleyi kısa süre tuttuğuna dair anlatı var, ama TDV'de DOĞRULAYAMADIM
//   ve veride 1593-94 için kırılma günü YOK ⇒ uydurulmuş bir gün
//   Değişmez 2'yi açardı. `bulunamadı` yazıyorum, boş bırakmıyorum.
//   📌 Kutuda 1594-09-27 ve 1595-09-02 günleri VAR ama onlar BAŞKA
//   yerlerin (Yanıkkale/Estergon) günleri — birini Sisak'a yakıştırmak
//   "gün var" ile "o günün BU olayla ilgisi var" arasındaki farkı siler.
// kaynak: bulunamadı — muharebe için TDV taranmadı, kale tarihçesi yok

{ ad:"Sisak", tur:"kale", lat:45.4658, lon:16.3783, g:0, k:3,
  s:[{f:"1281-01-01",t:"1527-01-01",d:"macaristan",kaynak:"BALKAN-MACAR-0081: TDV hirvatistan 1527 (YIL)"},
     {f:"1527-01-01",t:"1809-10-14",d:"macaristan-habsburg",kaynak:"BALKAN-MACAR-0081 H-0026: TDV hirvatistan 'Mohaç Muharebesi’nden bir yıl sonra (1527) … Hırvatlar … I. Ferdinand’ı kral olarak seçtiler' — YIL (Cetin maddesi 1527-01-01). Slavonya'nın ayrı tutumu bulunamadı · ÖNCEKİ: BOSNA-MACAR-0087 (0087/H-0024): kimlik avusturya → macaristan-habsburg — Habsburg'un bu topraktaki sıfatı Macar/Hırvat KRALIDIR, Avusturya arşidükü değil. TDV budin: 'diğer kısmı ise Macar tahtında hak iddia eden Habsburg hânedanına mensup … Ferdinand’ı (17 Aralık 1526) seçmişti' · TDV hirvatistan: 'Mohaç Muharebesi’nden bir yıl sonra (1527) … Hırvatlar … Habsburg hânedanına mensup I. Ferdinand’ı kral olarak seçtiler' · TDV macaristan: 'Macaristan’da Habsburglar’ın elindeki kısım'. Gün DEĞİŞMEDİ (künye macaristan-habsburg f ile hizalı)"},{f:"1809-10-14",t:"1813-01-01",d:"fransa-cumhuriyet",kaynak:"LZMK `vojna-krajina`: \"Mirom u Schönbrunnu 1809. habsburški posjedi juzno od rijeke Save ušli su u sastav Ilirskih pokrajina ... Potkraj 1813. habsburške su trupe osvojile to područje\" — Sava'nın GÜNEYİ ölçütü · ENKLAV-0072"},{f:"1813-01-01",t:"1918-11-11",d:"macaristan-habsburg",kaynak:"TDV macaristan (Géza Dávid): '1867'de iki ülke arasında bir uzlaşma meydana geldi. Avusturya-Macaristan monarşisi ortaya çıktı'; Trianon (4 Haziran 1920) Macaristan'ın kaybı, arazi 'Hırvatistan hariç' sayılır. Nokta Macar tacı (Transleithania) toprağı — iç taksimat için akademik alıntı: bulunamadı (denetim/ONCE1281-MACAR-TAC-1004.md). Önceki yazım `avusturya` (Habsburg Avusturya) idi."},
     {f:"1918-11-11",t:"1920-06-04",d:"macaristan-naiplik",kaynak:"F8 (Emre, 5 Eki 2026): de jure devir antlaşma gününde — TDV birinci-dunya-savasi: '4 Haziran 1920'de Macaristan ile Trianon … antlaşmaları imzalandı' · ara dönem: Macar tacı 1918-11-11 → antlaşma (macaristan-naiplik künyesi 1918-11-16 — mevcut çekirdek verisinin 5 günlük emsali)"},
     {f:"1920-06-04",t:"1945-11-29",d:"yugoslavya",kaynak:"F8 (Emre, 5 Eki 2026): de jure devir antlaşma gününde — TDV birinci-dunya-savasi: '4 Haziran 1920'de Macaristan ile Trianon … antlaşmaları imzalandı'"},{f:"1945-11-29",t:"1991-06-25",d:"yugoslavya-federal",kaynak:"Britannica 'Yugoslavia'; Office of the Historian, Milestones 1989-1992 (Breakup of Yugoslavia)"},{f:"1991-06-25",t:"2000-12-31",d:"hirvatistan",kaynak:"Britannica 'Yugoslavia'; Office of the Historian, Milestones 1989-1992 (Breakup of Yugoslavia)"}],
  d:[], v:[] },

// 🔴 KARLOVAC — `kur:` ALANI KULLANILDI, ve sebebi ölçülmüş bir gerçek:
//   şehir 1579'da Habsburg Askerî Sınırı için SIFIRDAN kuruldu (Karlstadt).
//   1281'den beri var gibi yazmak, olmayan bir yerleşimi 298 yıl boyunca
//   haritaya koymak olurdu. `kur:` tam bunun için var (Değişmez 1
//   denetimi `t.kur`u okuyor: kuruluştan önceki günlerde sahipsizlik
//   ARANMAZ).
// kaynak: bulunamadı — TDV bu taneciği kapsamıyor; kuruluş yılı (1579)
//   Askerî Sınır literatürünün standart bilgisi, gün bilinmediği için
//   YYYY-01-01 yazıldı

{ ad:"Karlovac", tur:"kale", lat:45.4870, lon:15.5478, g:0, k:3, kur:"1579-07-13",
  s:[{f:"1579-07-13",t:"1809-10-14",d:"avusturya",kaynak:"Hrvatska enciklopedija 'Karlovac': 'Osnovan je 13. VII. 1579. kao tvrđava' — GÜN · KRONO-2S-3 19 Eyl 2026"},{f:"1809-10-14",t:"1813-01-01",d:"fransa-cumhuriyet",kaynak:"LZMK `vojna-krajina`: \"Mirom u Schönbrunnu 1809. habsburški posjedi juzno od rijeke Save ušli su u sastav Ilirskih pokrajina ... Potkraj 1813. habsburške su trupe osvojile to područje\" — Sava'nın GÜNEYİ ölçütü · ENKLAV-0072"},{f:"1813-01-01",t:"1918-11-11",d:"macaristan-habsburg",kaynak:"Hrvatska enciklopedija 'Karlovac': 'Osnovan je 13. VII. 1579. kao tvrđava' — GÜN · KRONO-2S-3 19 Eyl 2026 · TDV macaristan (Géza Dávid): '1867'de iki ülke arasında bir uzlaşma meydana geldi. Avusturya-Macaristan monarşisi ortaya çıktı'; Trianon (4 Haziran 1920) Macaristan'ın kaybı, arazi 'Hırvatistan hariç' sayılır. Nokta Macar tacı (Transleithania) toprağı — iç taksimat için akademik alıntı: bulunamadı (denetim/ONCE1281-MACAR-TAC-1004.md). Önceki yazım `avusturya` (Habsburg Avusturya) idi."},
     {f:"1918-11-11",t:"1920-06-04",d:"macaristan-naiplik",kaynak:"F8 (Emre, 5 Eki 2026): de jure devir antlaşma gününde — TDV birinci-dunya-savasi: '4 Haziran 1920'de Macaristan ile Trianon … antlaşmaları imzalandı' · ara dönem: Macar tacı 1918-11-11 → antlaşma (macaristan-naiplik künyesi 1918-11-16 — mevcut çekirdek verisinin 5 günlük emsali)"},
     {f:"1920-06-04",t:"1945-11-29",d:"yugoslavya",kaynak:"F8 (Emre, 5 Eki 2026): de jure devir antlaşma gününde — TDV birinci-dunya-savasi: '4 Haziran 1920'de Macaristan ile Trianon … antlaşmaları imzalandı'"},{f:"1945-11-29",t:"1991-06-25",d:"yugoslavya-federal",kaynak:"Britannica 'Yugoslavia'; Office of the Historian, Milestones 1989-1992 (Breakup of Yugoslavia)"},{f:"1991-06-25",t:"2000-12-31",d:"hirvatistan",kaynak:"Britannica 'Yugoslavia'; Office of the Historian, Milestones 1989-1992 (Breakup of Yugoslavia)"}],
  d:[], v:[] },

// ═══════════════════ KÜME 3 — KARLOFÇA/BOSNA HATTI (KITA 2, 12 Eylül 2026) ═══════════════════
//
// Kaynak: Karlofça Antlaşması'nın BİRİNCİL metni (İngilizce çeviri):
//   "The Country belonging to the Dominion of his Imperial Ottoman
//    Majesty, as far as the River Unna towards Bosnia, shall be limited
//    and bounded by the hither Shore of the River Unna: and all the
//    Imperial Garrisons that are in Novi, Dubizza, Sessenovizza, Doboy
//    and Bred on the part of Bosnia... shall be drawn out from thence,
//    and the same shall be left entirely free."
// Bu beş kale (Kostajnica ayrıca: "Castanoviz... remain in the Power of
// the Emperor of the Romans") 1699-01-26'da Osmanlı'dan Avusturya'ya
// geçti — `denetim/HAZIRLIK-BOSNA-NOKTA-0911.json` + `denetim/SEMA-C-
// 0911.md`nin devamı, çakışma taraması `denetim/CAKISMA-BEKLEYEN-
// PAKETLER-0911.md`de yapıldı.
//
// 🔴 ÇÖZÜLEN ÇELİŞKİ (HAZIRLIK-BOSNA-NOKTA'nın kendi kaydı): TDV `karlofca`
//   "Kostayniçe Avusturya'da kaldı; diğer kaleleri (Bihke, Novi, Krupa
//   vb.) boşaltıldı" diyordu. Birincil metin Bihaç'ı VE Krupa'yı boşaltılan
//   kaleler listesinde ANMIYOR (yalnız Novi, Dubizza, Sessenovizza, Doboy,
//   Bred). M-3329 kuralı (antlaşma metni birincil) uygulandı: Bihaç zaten
//   veride Osmanlı olarak duruyor (yerlesimler_ek.js) — DOKUNULMADI. Krupa
//   bu pakete EKLENMEDİ — birincil metin onu boşaltılanlar arasında
//   saymıyor, TDV'nin genellemesi tek başına yeterli kaynak değil.
//
// 🔴 FETİH TARİHLERİ — üçü kaynaklı, ikisi KOMŞU EMSALİ (NOKTA MENZİL'in
//   kendi yöntemi, yukarıdaki dosya başlığı §225: "en yakın mevcut
//   noktaların zaman çizgisi izlendi"):
//   Kostajnica  1556-07-17 KAYNAKLI (Wikipedia "Kostajnica Fortress":
//               "conquered by the Ottomans on 17 July 1556")
//   Bosanska Dubica  1538-01-01 KAYNAKLI (Wikipedia "Battle of Dubica":
//               "In 1538 Dubica came under Ottoman rule") — gün yok, YYYY-01-01
//   Bosanski Novi  1556-01-01 KAYNAKLI (aynı kaynak: "captured Kostajnica
//               and Novi in 1556") — gün yok, YYYY-01-01
//   Jasenovac  1538-01-01 KOMŞU EMSALİ (Dubica'dan, ~13 km) — KENDİ
//               kaynağı bulunamadı, `dogrulanmadi:true` ruhunda
//   Bosanski Brod  1538-01-01 KOMŞU EMSALİ (Dubica'dan, en yakın kaynaklı
//               nokta) — KENDİ kaynağı bulunamadı
//   ⚠️ Koordinatlar `denetim/HAZIRLIK-BOSNA-NOKTA-0911.json`den — genel
//   coğrafi bilgi, GPS/harita ile birebir doğrulanmadı (`dogrulanmadi:true`
//   damgası orijinal kayıtta duruyor).

{ ad:"Kostayniçe (Kostajnica)", tur:"kale", lat:45.232, lon:16.539, g:0, k:3,
  neden:"1281-1556 arası (Osmanlı fethinden önce) idari bağlılığı bu paket kapsamında araştırılmadı — Ortaçağ Hırvat/Macar sınır bölgesi, kesin kayıt bulunamadı. ⇒ GÜNCEL DEĞİL (KASA-BOSNA-EK29-1010, 10 Eki 2026): Osmanlı öncesi dilimler SONRADAN HE (enciklopedija.hr) ile araştırıldı — s[0] kaynak: KORIDOR-0081 H-0030 · s[1] BOSNA-MACAR-0087; bu neden: o güncellemeden kalma.",
  d:[{f:"1556-07-16",t:"1699-01-26"}],
  s:[{f:"1281-01-01",t:"1527-01-01",d:"macaristan",kaynak:"BALKAN-MACAR-0081: TDV hirvatistan 1527 (YIL) · ÖNCEKİ: HE (enciklopedija.hr) 'Hrvatska Kostajnica': 1258 Kral IV. Béla bağışı; 1395-1528 on beş kez sahip değiştirdi (Frankapan, Vuk Branković…); 1528-1566 Zrinski; 1556 Malkoç Bey — Osmanlı fethinden önce hrvatsko-ugarsko krallığı içindeki beylik/soylu mülkü · krallık aidiyeti mülk sahiplerinden ÇIKARIM · 1526-08-29 = `macaristan` künye t: sınır işareti (Cetin seçimi 1527-01-01 alternatif) · KORIDOR-0081 H-0030"},{f:"1527-01-01",t:"1556-07-16",d:"macaristan-habsburg",kaynak:"BALKAN-MACAR-0081 H-0026: TDV hirvatistan 'Mohaç Muharebesi’nden bir yıl sonra (1527) … Hırvatlar … I. Ferdinand’ı kral olarak seçtiler' — YIL (Cetin maddesi 1527-01-01). Slavonya'nın ayrı tutumu bulunamadı · ÖNCEKİ: BOSNA-MACAR-0087 (0087/H-0024): kimlik avusturya → macaristan-habsburg — Habsburg'un bu topraktaki sıfatı Macar/Hırvat KRALIDIR, Avusturya arşidükü değil. TDV budin: 'diğer kısmı ise Macar tahtında hak iddia eden Habsburg hânedanına mensup … Ferdinand’ı (17 Aralık 1526) seçmişti' · TDV hirvatistan: 'Mohaç Muharebesi’nden bir yıl sonra (1527) … Hırvatlar … Habsburg hânedanına mensup I. Ferdinand’ı kral olarak seçtiler' · TDV macaristan: 'Macaristan’da Habsburglar’ın elindeki kısım'. Gün DEĞİŞMEDİ (künye macaristan-habsburg f ile hizalı) · HE 'Hrvatska Kostajnica': 1258 Kral IV. Béla bağışı; 1395-1528 on beş kez sahip değiştirdi (Frankapan, Vuk Branković…); 1528-1566 Zrinski; 1556 Malkoç Bey · Mohaç sonrası Hırvatistan Habsburg tacına geçti (Zagreb/Sisak ile aynı uç; atlas kaydı DAYANAK DEĞİL, künye sınırı) · KORIDOR-0081 H-0030"},{f:"1699-01-26",t:"1809-10-14",d:"avusturya"},{f:"1809-10-14",t:"1813-01-01",d:"fransa-cumhuriyet",kaynak:"LZMK `vojna-krajina`: \"Mirom u Schönbrunnu 1809. habsburški posjedi juzno od rijeke Save ušli su u sastav Ilirskih pokrajina ... Potkraj 1813. habsburške su trupe osvojile to područje\" — Sava'nın GÜNEYİ ölçütü · ENKLAV-0072"},{f:"1813-01-01",t:"1918-11-11",d:"macaristan-habsburg",kaynak:"TDV macaristan (Géza Dávid): '1867'de iki ülke arasında bir uzlaşma meydana geldi. Avusturya-Macaristan monarşisi ortaya çıktı'; Trianon (4 Haziran 1920) Macaristan'ın kaybı, arazi 'Hırvatistan hariç' sayılır. Nokta Macar tacı (Transleithania) toprağı — iç taksimat için akademik alıntı: bulunamadı (denetim/ONCE1281-MACAR-TAC-1004.md). Önceki yazım `avusturya` (Habsburg Avusturya) idi."},
     {f:"1918-11-11",t:"1920-06-04",d:"macaristan-naiplik",kaynak:"F8 (Emre, 5 Eki 2026): de jure devir antlaşma gününde — TDV birinci-dunya-savasi: '4 Haziran 1920'de Macaristan ile Trianon … antlaşmaları imzalandı' · ara dönem: Macar tacı 1918-11-11 → antlaşma (macaristan-naiplik künyesi 1918-11-16 — mevcut çekirdek verisinin 5 günlük emsali)"},
     {f:"1920-06-04",t:"1945-11-29",d:"yugoslavya",kaynak:"F8 (Emre, 5 Eki 2026): de jure devir antlaşma gününde — TDV birinci-dunya-savasi: '4 Haziran 1920'de Macaristan ile Trianon … antlaşmaları imzalandı'"},{f:"1945-11-29",t:"1991-06-25",d:"yugoslavya-federal",kaynak:"Britannica 'Yugoslavia'; Office of the Historian, Milestones 1989-1992 (Breakup of Yugoslavia)"},{f:"1991-06-25",t:"2000-12-31",d:"hirvatistan",kaynak:"Britannica 'Yugoslavia'; Office of the Historian, Milestones 1989-1992 (Breakup of Yugoslavia)"}],
  v:[],
  kaynak:"Karlofça Antlaşması birincil metni: \"Castanoviz... are and remain in the Power of the Emperor of the Romans\". Fetih: N. Ostojčić, 'Kostajnica', Bulwark of Europe (Zagreb Üniv. Felsefe Fak., 2019, vojnakrajina.ffzg.unizg.hr/en/kostajnica): 'utvrda je predana 16. srpnja, samo dan nakon početka opsade' (kaynakçası: M. Kruhek, Povijesni prilozi 21, 2001, 71-97) — 16 Temmuz 1556. TDV hirvatistan/bosna-hersek/malkocogullari/bihac anmıyor (tanecik boşluğu)." },

{ ad:"Bosna Dubiçası (Bosanska Dubica)",isg:[{f:"1788-08-26",t:"1791-08-04",d:"avusturya",kaynak:"Korić 2016, Prilozi za orijentalnu filologiju 65 (26 avgusta 1788 teslim) · Srpska enciklopedija 'Austro-turski ratovi' (Svištov 4. VIII 1791) · HE Kozarska Dubica"},{f:"1878-07-29",t:"1908-10-05",d:"avusturya",kaynak:"TDV bosna-hersek: '29 Temmuz'da başlayan işgal 20 Ekim 1878'de tamamlandı' · f: Bosna kayıtlarının baskın günü (14 kayıt), tek tek düşüş günü bulunamadı · bitiş ilhak 1908-10-05 · PAKET-0076-BITIR-1004 A3 (0076/H-0043·H-0057)"}], tur:"kale", lat:45.174, lon:16.810, g:0, k:3,
  neden:"1281-1538 arası (Osmanlı fethinden önce) idari bağlılığı bu paket kapsamında araştırılmadı — Ortaçağ Hırvat/Macar sınır bölgesi, kesin kayıt bulunamadı. ⇒ GÜNCEL DEĞİL (KASA-BOSNA-EK29-1010, 10 Eki 2026): Osmanlı öncesi dilimler SONRADAN HE (enciklopedija.hr) ile araştırıldı — s[0] kaynak: KORIDOR-0081 H-0030 · s[1] BOSNA-MACAR-0087; bu neden: o güncellemeden kalma.",
  d:[{f:"1538-01-01",t:"1718-07-21",kaynak:"gün komşudan: Bosna Brod'u (aynı Pasarofça/Belgrad Sava şeridi · TDV bosna-hersek · mahmud-i--osmanli) · HE Kozarska Dubica: Avusturya yönetimi 1716–41 (YIL; fiilî uçlar farklı) · Karlofça metni imparatorluk garnizonlarının Bosna yakasındaki Dubica'dan ÇEKİLECEĞİNİ söyler (1699-1718 Osmanlı) — YAMA-0064-BALKAN #1"},{f:"1739-09-28",t:"1908-10-05",kaynak:"gün komşudan: Bosna Brod'u (aynı Pasarofça/Belgrad Sava şeridi · TDV bosna-hersek · mahmud-i--osmanli) · HE Kozarska Dubica: Avusturya yönetimi 1716–41 (YIL; fiilî uçlar farklı) · Karlofça metni imparatorluk garnizonlarının Bosna yakasındaki Dubica'dan ÇEKİLECEĞİNİ söyler (1699-1718 Osmanlı) — YAMA-0064-BALKAN #1 · 1908-10-05 Bosna kayıtlarının ortak günü (Novi ile aynı)"}],
  s:[{f:"1281-01-01",t:"1527-01-01",d:"macaristan",kaynak:"BALKAN-MACAR-0081: TDV hirvatistan 1527 (YIL) · ÖNCEKİ: HE (enciklopedija.hr) 'Kozarska Dubica': 1256 castrum; 1269 ivanovci (Hospitalier) mülkü; 1398-1402 Hrvoje Vukčić; Osmanlı 1538 — Osmanlı fethinden önce hrvatsko-ugarsko krallığı içindeki beylik/soylu mülkü · krallık aidiyeti mülk sahiplerinden ÇIKARIM · 1526-08-29 = `macaristan` künye t: sınır işareti (Cetin seçimi 1527-01-01 alternatif) · KORIDOR-0081 H-0030"},{f:"1527-01-01",t:"1538-01-01",d:"macaristan-habsburg",kaynak:"BALKAN-MACAR-0081 H-0026: TDV hirvatistan 'Mohaç Muharebesi’nden bir yıl sonra (1527) … Hırvatlar … I. Ferdinand’ı kral olarak seçtiler' — YIL (Cetin maddesi 1527-01-01). Slavonya'nın ayrı tutumu bulunamadı · ÖNCEKİ: BOSNA-MACAR-0087 (0087/H-0024): kimlik avusturya → macaristan-habsburg — Habsburg'un bu topraktaki sıfatı Macar/Hırvat KRALIDIR, Avusturya arşidükü değil. TDV budin: 'diğer kısmı ise Macar tahtında hak iddia eden Habsburg hânedanına mensup … Ferdinand’ı (17 Aralık 1526) seçmişti' · TDV hirvatistan: 'Mohaç Muharebesi’nden bir yıl sonra (1527) … Hırvatlar … Habsburg hânedanına mensup I. Ferdinand’ı kral olarak seçtiler' · TDV macaristan: 'Macaristan’da Habsburglar’ın elindeki kısım'. Gün DEĞİŞMEDİ (künye macaristan-habsburg f ile hizalı) · HE 'Kozarska Dubica': 1256 castrum; 1269 ivanovci (Hospitalier) mülkü; 1398-1402 Hrvoje Vukčić; Osmanlı 1538 · Mohaç sonrası Hırvatistan Habsburg tacına geçti (Zagreb/Sisak ile aynı uç; atlas kaydı DAYANAK DEĞİL, künye sınırı) · KORIDOR-0081 H-0030"},{f:"1718-07-21",t:"1739-09-28",d:"avusturya",kaynak:"gün komşudan: Bosna Brod'u (aynı Pasarofça/Belgrad Sava şeridi · TDV bosna-hersek · mahmud-i--osmanli) · HE Kozarska Dubica: Avusturya yönetimi 1716–41 (YIL; fiilî uçlar farklı) · Karlofça metni imparatorluk garnizonlarının Bosna yakasındaki Dubica'dan ÇEKİLECEĞİNİ söyler (1699-1718 Osmanlı) — YAMA-0064-BALKAN #1"},{f:"1908-10-05",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1945-11-29",d:"yugoslavya"},{f:"1945-11-29",t:"1992-03-03",d:"yugoslavya-federal",kaynak:"Britannica 'Yugoslavia'; Office of the Historian, Milestones 1989-1992 (Breakup of Yugoslavia)"},{f:"1992-03-03",t:"2000-12-31",d:"bosna-hersek",kaynak:"Britannica 'Yugoslavia'; Office of the Historian, Milestones 1989-1992 (Breakup of Yugoslavia)"}],
  v:[],
  kaynak:"Karlofça Antlaşması birincil metni: \"...Dubizza...shall be drawn out...left entirely free\". Fetih: Wikipedia 'Battle of Dubica' — 1538." },

{ ad:"Bosna Novi'si (Bosanski Novi)",isg:[{f:"1788-10-03",t:"1791-08-04",d:"avusturya",kaynak:"Korić 2016 (3. oktobra 1788) · Srpska enciklopedija (Svištov 4. VIII 1791) · HE Novi Grad (fiilî 1788–95)"},{f:"1878-07-29",t:"1908-10-05",d:"avusturya",kaynak:"TDV bosna-hersek: '29 Temmuz'da başlayan işgal 20 Ekim 1878'de tamamlandı' · f: Bosna kayıtlarının baskın günü (14 kayıt), tek tek düşüş günü bulunamadı · bitiş ilhak 1908-10-05 · PAKET-0076-BITIR-1004 A3 (0076/H-0043·H-0057)"}], tur:"kale", lat:45.048, lon:16.377, g:0, k:3,
  neden:"1281-1556 arası (Osmanlı fethinden önce) idari bağlılığı bu paket kapsamında araştırılmadı — Ortaçağ Hırvat/Macar sınır bölgesi, kesin kayıt bulunamadı. ⇒ GÜNCEL DEĞİL (KASA-BOSNA-EK29-1010, 10 Eki 2026): Osmanlı öncesi dilimler SONRADAN HE (enciklopedija.hr) ile araştırıldı — s[0] kaynak: KORIDOR-0081 H-0030 · s[1] BOSNA-MACAR-0087; bu neden: o güncellemeden kalma.",
  d:[{f:"1557-01-01",t:"1908-10-05",kesinlik:{f:"yil"},kaynak:"HE 'Bosanski Novi': 'Osmanlije su ga zauzeli 1557.' (YIL; KASA-BOSNA-EK29-1010 — eski 1556 Kostajnica ile birlikte yazılmıştı, Novi'nin KENDİ kaynağı 1557) · Karlofça metni ('Novi … on the part of Bosnia') · TDV karlofca · TDV bosna-hersek (Novi kadısı Ömer Efendi · 1872 demiryolu) · 1908 günü K8'e bağlı"}],
  s:[{f:"1281-01-01",t:"1527-01-01",d:"macaristan",kaynak:"BALKAN-MACAR-0081: TDV hirvatistan 1527 (YIL) · ÖNCEKİ: HE (enciklopedija.hr) 'Novi Grad': 1280 Castrum Novum; XVI. yy başına dek Babonić knezleri, sonra Nikola Zrinski; Osmanlı 1557 (atlas 1556 — çelişki raporda) — Osmanlı fethinden önce hrvatsko-ugarsko krallığı içindeki beylik/soylu mülkü · krallık aidiyeti mülk sahiplerinden ÇIKARIM · 1526-08-29 = `macaristan` künye t: sınır işareti (Cetin seçimi 1527-01-01 alternatif) · KORIDOR-0081 H-0030"},{f:"1527-01-01",t:"1557-01-01",d:"macaristan-habsburg",kesinlik:{t:"yil"},kaynak:"BALKAN-MACAR-0081 H-0026: TDV hirvatistan 'Mohaç Muharebesi’nden bir yıl sonra (1527) … Hırvatlar … I. Ferdinand’ı kral olarak seçtiler' — YIL (Cetin maddesi 1527-01-01). Slavonya'nın ayrı tutumu bulunamadı · ÖNCEKİ: BOSNA-MACAR-0087 (0087/H-0024): kimlik avusturya → macaristan-habsburg — Habsburg'un bu topraktaki sıfatı Macar/Hırvat KRALIDIR, Avusturya arşidükü değil. TDV budin: 'diğer kısmı ise Macar tahtında hak iddia eden Habsburg hânedanına mensup … Ferdinand’ı (17 Aralık 1526) seçmişti' · TDV hirvatistan: 'Mohaç Muharebesi’nden bir yıl sonra (1527) … Hırvatlar … Habsburg hânedanına mensup I. Ferdinand’ı kral olarak seçtiler' · TDV macaristan: 'Macaristan’da Habsburglar’ın elindeki kısım'. Gün DEĞİŞMEDİ (künye macaristan-habsburg f ile hizalı) · HE 'Novi Grad': 1280 Castrum Novum; XVI. yy başına dek Babonić knezleri, sonra Nikola Zrinski; Osmanlı 1557 (atlas 1556 — çelişki raporda) · Mohaç sonrası Hırvatistan Habsburg tacına geçti (Zagreb/Sisak ile aynı uç; atlas kaydı DAYANAK DEĞİL, künye sınırı) · KORIDOR-0081 H-0030"},{f:"1908-10-05",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1945-11-29",d:"yugoslavya"},{f:"1945-11-29",t:"1992-03-03",d:"yugoslavya-federal",kaynak:"Britannica 'Yugoslavia'; Office of the Historian, Milestones 1989-1992 (Breakup of Yugoslavia)"},{f:"1992-03-03",t:"2000-12-31",d:"bosna-hersek",kaynak:"Britannica 'Yugoslavia'; Office of the Historian, Milestones 1989-1992 (Breakup of Yugoslavia)"}],
  v:[],
  kaynak:"Karlofça Antlaşması birincil metni: \"...Novi...shall be drawn out...left entirely free\". Fetih: aynı kaynak (Kostajnica ile birlikte), 1556 ⇒ DÜZELTİLDİ 1557 (HE 'Bosanski Novi', KASA-BOSNA-EK29-1010) — Herseknovi (Herceg Novi) ile KARIŞTIRILMASIN, ayrı yer." },

{ ad:"Jasenovaç (Jasenovac)", tur:"kale", lat:45.281, lon:16.917, g:0, k:3,
  neden:"1281-1538 arası (Osmanlı fethinden önce) idari bağlılığı bu paket kapsamında araştırılmadı — Ortaçağ Hırvat/Macar sınır bölgesi, kesin kayıt bulunamadı; 1538 tarihi de komşu emsali (Dubiça) olup KENDİ kaynağı yok. ⇒ GÜNCEL DEĞİL (KASA-BOSNA-EK29-1010, 10 Eki 2026): Osmanlı öncesi dilimler SONRADAN HE (enciklopedija.hr) ile araştırıldı — s[0] kaynak: KORIDOR-0081 H-0030 · s[1] BOSNA-MACAR-0087; bu neden: o güncellemeden kalma. '1538 komşu emsali' iddiası da ÇÜRÜTÜLDÜ: HE kendi şehir maddesinde 1536 veriyor (d[0] kaynak:).",
  d:[{f:"1536-01-01",kaynak:"BOSNA-MACAR-0087 (0087/H-0016): HE (enciklopedija.hr) 'Jasenovac': 'Bosanski sandžak-beg Husrev-beg osvojio ga je 1536.' (YIL) — eski 1538 Dubiça'dan KOMŞU EMSALİYDİ",t:"1699-01-26"}],
  s:[{f:"1281-01-01",t:"1527-01-01",d:"macaristan",kaynak:"BALKAN-MACAR-0081: TDV hirvatistan 1527 (YIL) · ÖNCEKİ: HE (enciklopedija.hr) 'Jasenovac': XIV. yy'da yerleşim ve kale; Husrev Bey 1536 (atlas 1538 — çelişki raporda) ⇒ GÜNCEL DEĞİL (KASA-BAYAT-OZILAN-1010): veri artık 1536 (BOSNA-MACAR-0087), çelişki kapanmış — Osmanlı fethinden önce hrvatsko-ugarsko krallığı içindeki beylik/soylu mülkü · krallık aidiyeti mülk sahiplerinden ÇIKARIM · 1526-08-29 = `macaristan` künye t: sınır işareti (Cetin seçimi 1527-01-01 alternatif) · KORIDOR-0081 H-0030"},{f:"1527-01-01",t:"1536-01-01",d:"macaristan-habsburg",kaynak:"BALKAN-MACAR-0081 H-0026: TDV hirvatistan 'Mohaç Muharebesi’nden bir yıl sonra (1527) … Hırvatlar … I. Ferdinand’ı kral olarak seçtiler' — YIL (Cetin maddesi 1527-01-01). Slavonya'nın ayrı tutumu bulunamadı · ÖNCEKİ: BOSNA-MACAR-0087 (0087/H-0024): kimlik avusturya → macaristan-habsburg — Habsburg'un bu topraktaki sıfatı Macar/Hırvat KRALIDIR, Avusturya arşidükü değil. TDV budin: 'diğer kısmı ise Macar tahtında hak iddia eden Habsburg hânedanına mensup … Ferdinand’ı (17 Aralık 1526) seçmişti' · TDV hirvatistan: 'Mohaç Muharebesi’nden bir yıl sonra (1527) … Hırvatlar … Habsburg hânedanına mensup I. Ferdinand’ı kral olarak seçtiler' · TDV macaristan: 'Macaristan’da Habsburglar’ın elindeki kısım'. Gün DEĞİŞMEDİ (künye macaristan-habsburg f ile hizalı) · HE 'Jasenovac': XIV. yy'da yerleşim ve kale; Husrev Bey 1536 (atlas 1538 — çelişki raporda) ⇒ GÜNCEL DEĞİL (KASA-BAYAT-OZILAN-1010): veri artık 1536 (BOSNA-MACAR-0087), çelişki kapanmış · Mohaç sonrası Hırvatistan Habsburg tacına geçti (Zagreb/Sisak ile aynı uç; atlas kaydı DAYANAK DEĞİL, künye sınırı) · KORIDOR-0081 H-0030"},{f:"1699-01-26",t:"1918-11-11",d:"macaristan-habsburg",kaynak:"TDV macaristan (Géza Dávid): '1867'de iki ülke arasında bir uzlaşma meydana geldi. Avusturya-Macaristan monarşisi ortaya çıktı'; Trianon (4 Haziran 1920) Macaristan'ın kaybı, arazi 'Hırvatistan hariç' sayılır. Nokta Macar tacı (Transleithania) toprağı — iç taksimat için akademik alıntı: bulunamadı (denetim/ONCE1281-MACAR-TAC-1004.md). Önceki yazım `avusturya` (Habsburg Avusturya) idi."},
     {f:"1918-11-11",t:"1920-06-04",d:"macaristan-naiplik",kaynak:"F8 (Emre, 5 Eki 2026): de jure devir antlaşma gününde — TDV birinci-dunya-savasi: '4 Haziran 1920'de Macaristan ile Trianon … antlaşmaları imzalandı' · ara dönem: Macar tacı 1918-11-11 → antlaşma (macaristan-naiplik künyesi 1918-11-16 — mevcut çekirdek verisinin 5 günlük emsali)"},
     {f:"1920-06-04",t:"1945-11-29",d:"yugoslavya",kaynak:"F8 (Emre, 5 Eki 2026): de jure devir antlaşma gününde — TDV birinci-dunya-savasi: '4 Haziran 1920'de Macaristan ile Trianon … antlaşmaları imzalandı'"},{f:"1945-11-29",t:"1991-06-25",d:"yugoslavya-federal",kaynak:"Britannica 'Yugoslavia'; Office of the Historian, Milestones 1989-1992 (Breakup of Yugoslavia)"},{f:"1991-06-25",t:"2000-12-31",d:"hirvatistan",kaynak:"Britannica 'Yugoslavia'; Office of the Historian, Milestones 1989-1992 (Breakup of Yugoslavia)"}],
  v:[],
  kaynak:"Karlofça Antlaşması birincil metni: \"...Sessenovizza...shall be drawn out...left entirely free\". Fetih tarihi bulunamadı — komşu emsali (Bosna Dubiçası, 1538) kullanıldı, dogrulanmadi. ⇒ ÇÜRÜTÜLDÜ (KASA-BOSNA-EK29-1010): HE 'Jasenovac' 1536 — veri zaten 1536 (BOSNA-MACAR-0087)." },

{ ad:"Bosna Brod'u (Bosanski Brod)",isg:[{f:"1878-07-29",t:"1908-10-05",d:"avusturya",kaynak:"TDV bosna-hersek: '29 Temmuz'da başlayan işgal 20 Ekim 1878'de tamamlandı' · f: Bosna kayıtlarının baskın günü (14 kayıt), tek tek düşüş günü bulunamadı · bitiş ilhak 1908-10-05 · PAKET-0076-BITIR-1004 A3 (0076/H-0043·H-0057)"}], tur:"kale", lat:45.138, lon:17.988, g:0, k:3,
  neden:"1281-1538 arası (Osmanlı fethinden önce) idari bağlılığı bu paket kapsamında araştırılmadı — Ortaçağ Hırvat/Macar sınır bölgesi, kesin kayıt bulunamadı; 1538 tarihi de komşu emsali (Dubiça) olup KENDİ kaynağı yok. ⇒ GÜNCEL DEĞİL (KASA-BOSNA-EK29-1010, 10 Eki 2026): Osmanlı öncesi dilimler SONRADAN HE (enciklopedija.hr) ile araştırıldı — s[0] kaynak: KORIDOR-0081 H-0030 · s[1] BOSNA-MACAR-0087; bu neden: o güncellemeden kalma. '1538 komşu emsali' iddiası da ÇÜRÜTÜLDÜ: HE kendi şehir maddesinde 1536 veriyor (d[0] kaynak:).",
  d:[{f:"1536-01-01",kaynak:"BOSNA-MACAR-0087 (0087/H-0016): HE (enciklopedija.hr) 'Bosanski Brod': 'Osmanlije su ga zauzeli 1536.' (YIL) — eski 1538 Dubiça'dan KOMŞU EMSALİYDİ, kendi kaynağı yoktu",t:"1718-07-21"},{f:"1739-09-28",t:"1908-10-05",kaynak:"Karlofça metni ('Bred on the part of Bosnia … shall be drawn out') · TDV karlofca · TDV bosna-hersek (1718 Sava şeridi · 1739 iade) · TDV mahmud-i--osmanli (28 Eylül 1739) · 1908 günü mevcut Bosna kayıtlarıyla aynı (K8 ayrı kalem)"}],
  s:[{f:"1281-01-01",t:"1527-01-01",d:"macaristan",kaynak:"BALKAN-MACAR-0081: TDV hirvatistan 1527 (YIL) · ÖNCEKİ: HE (enciklopedija.hr) 'Brod': Ortaçağda Boričević/Berislavić soylu mülkü; Osmanlı 1536 (atlas 1538 — çelişki raporda) ⇒ GÜNCEL DEĞİL (KASA-BAYAT-OZILAN-1010): veri artık 1536 (BOSNA-MACAR-0087), çelişki kapanmış — Osmanlı fethinden önce hrvatsko-ugarsko krallığı içindeki beylik/soylu mülkü · krallık aidiyeti mülk sahiplerinden ÇIKARIM · 1526-08-29 = `macaristan` künye t: sınır işareti (Cetin seçimi 1527-01-01 alternatif) · KORIDOR-0081 H-0030"},{f:"1527-01-01",t:"1536-01-01",d:"macaristan-habsburg",kaynak:"BALKAN-MACAR-0081 H-0026: TDV hirvatistan 'Mohaç Muharebesi’nden bir yıl sonra (1527) … Hırvatlar … I. Ferdinand’ı kral olarak seçtiler' — YIL (Cetin maddesi 1527-01-01). Slavonya'nın ayrı tutumu bulunamadı · ÖNCEKİ: BOSNA-MACAR-0087 (0087/H-0024): kimlik avusturya → macaristan-habsburg — Habsburg'un bu topraktaki sıfatı Macar/Hırvat KRALIDIR, Avusturya arşidükü değil. TDV budin: 'diğer kısmı ise Macar tahtında hak iddia eden Habsburg hânedanına mensup … Ferdinand’ı (17 Aralık 1526) seçmişti' · TDV hirvatistan: 'Mohaç Muharebesi’nden bir yıl sonra (1527) … Hırvatlar … Habsburg hânedanına mensup I. Ferdinand’ı kral olarak seçtiler' · TDV macaristan: 'Macaristan’da Habsburglar’ın elindeki kısım'. Gün DEĞİŞMEDİ (künye macaristan-habsburg f ile hizalı) · HE 'Brod': Ortaçağda Boričević/Berislavić soylu mülkü; Osmanlı 1536 (atlas 1538 — çelişki raporda) ⇒ GÜNCEL DEĞİL (KASA-BAYAT-OZILAN-1010): veri artık 1536 (BOSNA-MACAR-0087), çelişki kapanmış · Mohaç sonrası Hırvatistan Habsburg tacına geçti (Zagreb/Sisak ile aynı uç; atlas kaydı DAYANAK DEĞİL, künye sınırı) · KORIDOR-0081 H-0030"},{f:"1718-07-21",t:"1739-09-28",d:"avusturya"},{f:"1908-10-05",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1945-11-29",d:"yugoslavya"},{f:"1945-11-29",t:"1992-03-03",d:"yugoslavya-federal",kaynak:"Britannica 'Yugoslavia'; Office of the Historian, Milestones 1989-1992 (Breakup of Yugoslavia)"},{f:"1992-03-03",t:"2000-12-31",d:"bosna-hersek",kaynak:"Britannica 'Yugoslavia'; Office of the Historian, Milestones 1989-1992 (Breakup of Yugoslavia)"}],
  v:[],
  kaynak:"Karlofça Antlaşması birincil metni: \"...Bred...shall be drawn out...left entirely free\" — bu, SEMA-C-0911.md §3.1'deki Sava HAT segmentinin bitiş noktasıyla (TDV 'Brot Kalesi') aynı yer olabilir. Fetih tarihi bulunamadı — komşu emsali (Bosna Dubiçası, 1538) kullanıldı, dogrulanmadi. ⇒ ÇÜRÜTÜLDÜ (KASA-BOSNA-EK29-1010): HE 'Bosanski Brod' 1536 — veri zaten 1536 (BOSNA-MACAR-0087). Slavonski Brod (Sava'nın karşı/Hırvat yakası) ile KARIŞTIRILMASIN." },

// ═══════════════════ KÜME 2 — MENZİL DURAKLARI ═══════════════════
//
// Kaynak: Sak-Çetin, DergiPark 258113 — Osmanlı ana menzil güzergâhının
// durakları (şartname ①, koridor ağının 18 eksik düğümü).
//
// 🔴 YÖNTEM — ve niçin böyle: bu durakların HİÇBİRİ için kendi fetih günümü
//   seçmedim. Her biri için EN YAKIN mevcut noktaların zaman çizgisi
//   ölçüldü ve o çizgi izlendi. Sebebi Değişmez 2: uydurulmuş bir kırılma
//   günü, kronolojide karşılığı olmadığı için denetimi AÇAR. Komşunun günü
//   ise zaten maddeli.
//   📌 Ve bu bir kolaycılık değil: menzil durağı, bağlı olduğu kazanın
//   kaderini paylaşır — ayrı bir siyasî birim değildir.
//
// 🟢 ÜSKÜDAR — EMRE'NİN DOĞRUDAN TALİMATIYLA YAZILDI (15 Ağustos: "üsküdarı
//   da yaz"). Koordinatöre M-0084'te üç şık sormuştum, cevap gelmeden Emre
//   kararı verdi. Önerim de (A) yaz yönündeydi.
//
// 🟢 VE TDV ÖNERİYİ DOĞRULADI — üç noktada birden:
//   `uskudar` (HTTP 200, gövdesi okundu):
//   ① fetih  "Orhan Gazi'nin 1329'da Gebze sahilinde Pelekanon Savaşı'nda
//      ... Hereke, Pendik, Kartal ile birlikte Üsküdar'ın da Osmanlılar'ın
//      kontrolü altına girdiği tahmin edilir."
//      ⇒ 1329-06-01 — ve bu gün veride ZATEN VAR (Gebze kaydı). Değişmez 2
//        açılmıyor, gün uydurulmadı.
//      ⚠️ TDV "tahmin edilir" diyor; kesin gün YOK. Bölgesel gün kullanıldı.
//   ② menzil  "İstanbul'dan Anadolu'ya açılan yolların başlangıç ve aynı
//      şekilde Anadolu'dan İstanbul'a ulaşımın son noktası durumundaydı."
//      ⇒ Menzil ağının Anadolu kolu BURADAN başlar. Şartnamenin bu noktayı
//        istemesinin gerekçesi TDV'de birebir yazılı.
//   ③ idarî  "Koca-ili (İzmit) sancağına bağlı Gebze kazası içinde yer aldı
//      ve bir kadılık merkezi haline getirildi" — sonra mutasarrıflık,
//      sancak, nihayet kaza. ⇒ k:3.
//
// 📌 Ve ③ yöntemi de belirledi: çizgi GEBZE ile birebir aynı, çünkü Üsküdar
//   idarî olarak Gebze kazasının İÇİNDEYDİ. Kardeş seçimi bir kolaylık
//   değil, TDV'nin söylediği idarî gerçek.
//
// ⚠️ 3 KM NOTU: İstanbul noktasına 3,40 km — eşiğin ÜSTÜNDE, ihlal yok.
//   İkisi Boğaz'ın iki yakasında; İstanbul noktası (41,0080/28,9800) Avrupa
//   yakasında. Üsküdar yazılmasaydı Anadolu kolunun başlangıç düğümü
//   Avrupa yakasında görünecekti.
// kaynak: TDV `uskudar` (HTTP 200, gövdesi okundu)

{ ad:"Üsküdar", tur:"sehir", lat:41.0227, lon:29.0153, g:0, k:3, m:"İzmit",
  s:[{f:"1281-01-01",t:"1329-06-01",d:"bizans"},{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1410-05-06",d:"suleyman-celebi"},{f:"1410-05-06",t:"1413-07-05",d:"mehmed-celebi",kesinlik:{f:"yil"}},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"},{f:"1923-10-29",t:"2000-12-31",d:"turkiye-cumhuriyeti",kaynak:"TDV Islam Ansiklopedisi 'Turkiye Cumhuriyeti'; Cumhuriyet ilani 1923-10-29"}],
  d:[{f:"1329-06-01",t:"1402-07-28"},{f:"1413-07-05",t:"1920-04-23"}], v:[] },

// ───────── ANADOLU KOLU ─────────

// İSHAKLI — Akşehir'in (25,6 km) menzil durağı, Sultandağı eteği.
// Çizgi Akşehir ile birebir: Hamidoğulları → 1381 Osmanlı → Timur sonrası
// Karaman → 1414 kesin Osmanlı.
// kaynak: bulunamadı (TDV bu taneciği kapsamıyor) — çizgi kardeş kayıt Akşehir'den
{ ad:"İshaklı", tur:"kasaba", lat:38.5439, lon:31.2447, g:0, k:4,
  s:[{f:"1281-01-01",t:"1297-01-01",d:"selcuklu"},{f:"1297-01-01",t:"1381-06-01",d:"hamid"},{f:"1402-07-28",t:"1415-03-01",d:"karaman"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"},{f:"1923-10-29",t:"2000-12-31",d:"turkiye-cumhuriyeti",kaynak:"TDV Islam Ansiklopedisi 'Turkiye Cumhuriyeti'; Cumhuriyet ilani 1923-10-29"}],
  d:[{f:"1381-06-01",t:"1402-07-28"},{f:"1415-03-01",t:"1920-04-23"}], v:[] },

// ILGIN — Karaman beyliği toprağı, Konya (68 km) çizgisiyle aynı.
// ⚠️ Konya kaydındaki 1832-11-21 → 1833-06-30 Mısır (Kavalalı) dönemi
//   BU KAYDA YAZILMADI: Ilgın için ayrıca doğrulayamadım. Ölçmediğimi
//   ölçmedim diye yazıyorum; karşı kanıt çıkarsa eklenir.
// kaynak: bulunamadı — çizgi kardeş kayıt Konya'dan
{ ad:"Ilgın",kaynak:"bulunamadı — çizgi kardeş kayıt Konya'dan (yerlesimler_ek29.js:288-290 yorumu)",m:"Konya", tur:"kasaba", lat:38.2792, lon:31.9139, g:0, k:4,
  s:[{f:"1281-01-01",t:"1308-01-01",d:"selcuklu"},{f:"1308-01-01",t:"1328-11-05",d:"ilhanli",kaynak:"KUTU-H7-1015 (ENKLAV-SINIF-1015 no 163, kaynakla doğrulama): Konya kaydıyla eşlendi (ÇIKARIM: Ilgın Konya'nın batı kapısıdır) · eski kayıt 1308-1366 kesintisiz ilhanli idi · TDV karamanogullari: Yahşi Bey 'şehri ele geçirdi (714/1314)', Emîr Çoban Aralık 1314'te geri aldı, 'Karamanoğulları çok geçmeden Konya’yı yeniden zaptettiler' (1318 hutbe), Demirtaş '720 (1320) ve 723 (1323) yıllarında Konya’yı' zaptetti, 'Karamanlılar 729’da (1328-29) Konya’yı ... ele geçirdiler' · TDV eretnaogullari: Eretna'nın 'Karamanoğlu Ahmed Bey’in ölümünden sonra 1350’de Konya’yı da ele geçirdiği anlaşılmaktadır' · TDV konya: 'Alâeddin Bey Konya’yı Eretnaoğulları’nın elinden aldı (768/1366-67)' · ⚠️ BEYANLI YAKLAŞIKLIK: 1314 ve 1318 civarındaki kısa Karaman hâkimiyetleri günsüz, ayrı dilim yazılmadı"},{f:"1328-11-05",t:"1350-01-01",d:"karaman",kaynak:"KUTU-H7-1015 (ENKLAV-SINIF-1015 no 163, kaynakla doğrulama): Konya kaydıyla eşlendi (ÇIKARIM: Ilgın Konya'nın batı kapısıdır) · hicrî 729 = 5 Kasım 1328 - 24 Ekim 1329; kaynağın yılı 1328-29 → kesişimin ilk günü 1328-11-05 · TDV karamanogullari: Yahşi Bey 'şehri ele geçirdi (714/1314)', Emîr Çoban Aralık 1314'te geri aldı, 'Karamanoğulları çok geçmeden Konya’yı yeniden zaptettiler' (1318 hutbe), Demirtaş '720 (1320) ve 723 (1323) yıllarında Konya’yı' zaptetti, 'Karamanlılar 729’da (1328-29) Konya’yı ... ele geçirdiler' · TDV eretnaogullari: Eretna'nın 'Karamanoğlu Ahmed Bey’in ölümünden sonra 1350’de Konya’yı da ele geçirdiği anlaşılmaktadır' · TDV konya: 'Alâeddin Bey Konya’yı Eretnaoğulları’nın elinden aldı (768/1366-67)'"},{f:"1350-01-01",t:"1366-01-01",d:"eretna",kaynak:"KUTU-H7-1015 (ENKLAV-SINIF-1015 no 163, kaynakla doğrulama): Konya kaydıyla eşlendi (ÇIKARIM: Ilgın Konya'nın batı kapısıdır) · TDV eretnaogullari: 1350 (YIL) · t mevcut 1366-01-01 ucu korundu (TDV konya 768/1366-67) · TDV karamanogullari: Yahşi Bey 'şehri ele geçirdi (714/1314)', Emîr Çoban Aralık 1314'te geri aldı, 'Karamanoğulları çok geçmeden Konya’yı yeniden zaptettiler' (1318 hutbe), Demirtaş '720 (1320) ve 723 (1323) yıllarında Konya’yı' zaptetti, 'Karamanlılar 729’da (1328-29) Konya’yı ... ele geçirdiler' · TDV eretnaogullari: Eretna'nın 'Karamanoğlu Ahmed Bey’in ölümünden sonra 1350’de Konya’yı da ele geçirdiği anlaşılmaktadır' · TDV konya: 'Alâeddin Bey Konya’yı Eretnaoğulları’nın elinden aldı (768/1366-67)'"},{f:"1366-01-01",t:"1397-07-01",d:"karaman"},{f:"1402-07-28",t:"1402-09-15",d:"timurlu"},{f:"1402-09-15",t:"1468-01-01",d:"karaman"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"},{f:"1923-10-29",t:"2000-12-31",d:"turkiye-cumhuriyeti",kaynak:"TDV Islam Ansiklopedisi 'Turkiye Cumhuriyeti'; Cumhuriyet ilani 1923-10-29"}],
  d:[{f:"1397-07-01",t:"1402-07-28"},{f:"1468-01-01",t:"1920-04-23"}], v:[] },

// KARAPINAR — Konya-Adana yolunun ortası, Karaman (66,5 km) çizgisiyle aynı.
// kaynak: bulunamadı — çizgi kardeş kayıt Karaman'dan
{ ad:"Karapınar",kaynak:"bulunamadı — çizgi kardeş kayıt Karaman'dan (yerlesimler_ek29.js:299-300 yorumu)",m:"Karaman", tur:"kasaba", lat:37.7156, lon:33.5514, g:0, k:4,
  s:[{f:"1281-01-01",t:"1397-07-01",d:"karaman"},{f:"1402-07-28",t:"1402-09-15",d:"timurlu"},{f:"1402-09-15",t:"1468-01-01",d:"karaman"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"},{f:"1923-10-29",t:"2000-12-31",d:"turkiye-cumhuriyeti",kaynak:"TDV Islam Ansiklopedisi 'Turkiye Cumhuriyeti'; Cumhuriyet ilani 1923-10-29"}],
  d:[{f:"1397-07-01",t:"1402-07-28"},{f:"1468-01-01",t:"1920-04-23"}], v:[] },

// ULUKIŞLA — Gülek Boğazı'nın kuzey ağzı, Niğde (49,7 km) çizgisiyle aynı.
// kaynak: bulunamadı — çizgi kardeş kayıt Niğde'den
{ ad:"Ulukışla",kaynak:"bulunamadı — çizgi kardeş kayıt Niğde'den (yerlesimler_ek29.js:307-308 yorumu)",m:"Niğde", tur:"kasaba", lat:37.5461, lon:34.4869, g:0, k:4,
  s:[{f:"1281-01-01",t:"1308-01-01",d:"selcuklu"},{f:"1308-01-01",t:"1335-01-01",d:"ilhanli",kaynak:"KUTU-H7-1015 (ENKLAV-SINIF-1015 no 163, kaynakla doğrulama): Niğde kaydıyla eşlendi (ÇIKARIM: Ulukışla Niğde'nin güneyindedir) · TDV nigde: 'XIV. yüzyılın ilk yarısında Niğde ve çevresi Eretnaoğulları'"},{f:"1335-01-01",t:"1366-01-01",d:"eretna",kaynak:"KUTU-H7-1015 (ENKLAV-SINIF-1015 no 163, kaynakla doğrulama): Niğde kaydıyla eşlendi (ÇIKARIM: Ulukışla Niğde'nin güneyindedir) · TDV nigde: 'XIV. yüzyılın ilk yarısında Niğde ve çevresi Eretnaoğulları'"},{f:"1366-01-01",t:"1468-01-01",d:"karaman"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"},{f:"1923-10-29",t:"2000-12-31",d:"turkiye-cumhuriyeti",kaynak:"TDV Islam Ansiklopedisi 'Turkiye Cumhuriyeti'; Cumhuriyet ilani 1923-10-29"}],
  d:[{f:"1468-01-01",t:"1920-04-23"}], v:[] },

// TOSYA — Kastamonu (45,8 km) çizgisiyle aynı: Candaroğlu, 1461'de kesin Osmanlı.
// kaynak: bulunamadı — çizgi kardeş kayıt Kastamonu'dan
{ ad:"Tosya",kaynak:"bulunamadı — çizgi kardeş kayıt Kastamonu'dan (yerlesimler_ek29.js:315-316 yorumu)",m:"Kastamonu", tur:"kasaba", lat:41.0161, lon:34.0397, g:0, k:4,
  s:[{f:"1281-01-01",t:"1309-01-01",d:"cobanogullari"},{f:"1309-01-01",t:"1392-11-01",d:"candar"},{f:"1402-07-28",t:"1461-06-01",d:"candar"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"},{f:"1923-10-29",t:"2000-12-31",d:"turkiye-cumhuriyeti",kaynak:"TDV Islam Ansiklopedisi 'Turkiye Cumhuriyeti'; Cumhuriyet ilani 1923-10-29"}],
  d:[{f:"1392-11-01",t:"1402-07-28"},{f:"1461-06-01",t:"1920-04-23"}], v:[] },

// 🟢 KARAHİSÂR-I ŞARKÎ — TEK TDV KAYNAKLI KÜME-2 NOKTASI
// TDV `sebinkarahisar` (HTTP 200, gövdesi okundu):
//   "878'de (1473) aldı" — Fatih, Otlukbeli'nden sonra kaleyi ele geçirdi
//   "müstakil sancak haline getirildi ve Erzurum beylerbeyiliğine bağlandı"
//   Osmanlı öncesi sıra: Mengücüklüler · Eretnaoğulları · Gözleroğlu (1408) ·
//   Karakoyunlular · Akkoyunlular (1459-60)
// ⇒ k:2 (müstakil sancak, TDV kaynaklı — tahmin değil)
// ⇒ 1473-08-11 (Otlukbeli) veride ZATEN var (Erzincan kaydı) ⇒ Değişmez 2 temiz
// ⚠️ SADELEŞTİRME, ölçüm değil: TDV'nin saydığı Gözleroğlu ve Karakoyunlu
//   dönemlerinin sınır GÜNLERİ ne TDV'de ne veride var. O yüzden 1381-1473
//   arası `akkoyunlu`ya sıkıştırıldı. Bu bir tercihtir ve gerçeğin
//   tamamı DEĞİLDİR; gün bulunursa açılmalı.
// 🔧 DOGU-ANADOLU-0085 (0085 H-0004 · H-0016, 9 Eki 2026): sadeleştirme AÇILDI —
//   burhaneddin 1381-1398 (ÇIKARIM) · 1398-1408 __BOSLUK__ (açık kalem, KASA) · gozleroglu 1408-1418
//   (bitiş türetilmiş) · akkoyunlu 1418-1473 (TDV iç çelişkisi notta).
{ ad:"Karahisâr-ı Şarkî (Şebinkarahisar)", tur:"kale", lat:40.2886, lon:38.4247, g:0, k:2,
  s:[{f:"1281-01-01",t:"1335-01-01",d:"ilhanli"},{f:"1335-01-01",t:"1381-01-01",d:"eretna"},{f:"1381-01-01",t:"1398-01-01",d:"burhaneddin",kaynak:"ÇIKARIMDIR — DOGU-ANADOLU-0085 (koordinatör hükmü Ⓐ, 9 Eki 2026). Gerekçe zinciri: TDV sebinkarahisar Eretna→1408 arasını boş bırakıyor; eretna künyesi 1381'de bitiyor; Eretna devletinin Sivas-Karahisar bölgesindeki ardılı Kadı Burhâneddin. Hiçbir kaynak Şebinkarahisar'ı adıyla Burhâneddin'e bağlamıyor. ⚠️ KASA çelişen bir kaynak bulursa bu hüküm DÜŞER. Bitiş 1398 = burhaneddin künyesinin t'si (Burhâneddin'in ölümü, YIL)"},{f:"1398-01-01",t:"1408-01-01",d:"__BOSLUK__",kaynak:"DOGU-ANADOLU-0085 · AÇIK KALEM (araştırma KASA'da): Osmanlı 1398 mi, Timur 1400 mü BİLİNMİYOR. TDV sebinkarahisar: 'Timur’un istilâsının ardından 811’de (1408) Gözleroğlu’nun' — 1398-1408 için sahip VERMİYOR. Eski akkoyunlu bu dilimde TDV ile ÇELİŞİYORDU (0085 H-0004/H-0016 eksklavı); en yakın kimliğe İTİLMEDİ"},{f:"1408-01-01",t:"1418-01-01",d:"gozleroglu",kaynak:"TDV sebinkarahisar (gövde okundu 9 Eki 2026): 'Timur’un istilâsının ardından 811’de (1408) Gözleroğlu’nun, on yıl sonra Karakoyunlu Türkmenleri’nin, 864’te (1459-60) ise Akkoyunlular’ın eline geçti.' — f YIL. BİTİŞ 1418 TÜRETİLMİŞTİR, ölçüm DEĞİL: 'on yıl sonra' (811+10 = 821 h. ≈ 1418) — DOGU-ANADOLU-0085"},{f:"1418-01-01",t:"1473-08-11",d:"akkoyunlu",kaynak:"DOGU-ANADOLU-0085 · 1418-1459 akkoyunlu KORUNDU (koordinatör hükmü, D206). ⚠️ TDV İÇ ÇELİŞKİSİ (tuzak ⑥): TDV sebinkarahisar 'on yıl sonra Karakoyunlu Türkmenleri’nin, 864’te (1459-60) ise Akkoyunlular’ın eline geçti' der; TDV akkoyunlular Karayülük'ün 1421 sonrası 'Karahisar’ı da oğlu Kemah hâkimi Yâkub Bey’e verdi[ğini]' ve 'Kemah-Erzincan-Karahisar hâkimi … Yâkub' der. Karakoyunlu yazılırsa Kemah/Erzincan/Kelkit akkoyunlu iken 1430-1459 arasında yeni bir Karakoyunlu eksklavı doğar. 1459-1473 iki madde de Akkoyunlu (akkoyunlular: 1464-65 'Şebinkarahisar’dan Siirt’e kadar … Akkoyunlu ülkesi')"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"},{f:"1923-10-29",t:"2000-12-31",d:"turkiye-cumhuriyeti",kaynak:"TDV Islam Ansiklopedisi 'Turkiye Cumhuriyeti'; Cumhuriyet ilani 1923-10-29"}],
  d:[{f:"1473-08-11",t:"1920-04-23"}], v:[] },

// KELKİT — Erzincan (42,3 km) çizgisiyle aynı: Mutahharten sonrası Akkoyunlu,
// 1473 Otlukbeli'yle Osmanlı.
// kaynak: bulunamadı — çizgi kardeş kayıt Erzincan'dan
{ ad:"Kelkit",kaynak:"bulunamadı — çizgi kardeş kayıt Erzincan'dan (yerlesimler_ek29.js:341-343 yorumu)",m:"Erzincan", tur:"kasaba", lat:40.1281, lon:39.4381, g:0, k:4,
  s:[{f:"1281-01-01",t:"1348-01-01",d:"ilhanli"},{f:"1348-01-01",t:"1379-01-01",d:"akkoyunlu"},{f:"1379-01-01",t:"1401-02-01",d:"mutahharten"},{f:"1402-07-28",t:"1410-01-01",d:"mutahharten"},{f:"1410-01-01",t:"1473-08-11",d:"akkoyunlu"},{f:"1916-07-22",t:"1917-03-15",d:"rusya",kaynak:"T.C. Kelkit Kaymakamlığı tarihçe (KURUMSAL, akademik değil): Rus işgali 22 Temmuz 1916 · NOKTA-KAFKAS-0077 §6 · UYGULA-YERLESIM-0930"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1918-02-17",d:"transkafkasya",kaynak:"T.C. Kelkit Kaymakamlığı tarihçe (KURUMSAL): geri alınış 17 Şubat 1918 · NOKTA-KAFKAS-0077 §6 · UYGULA-YERLESIM-0930"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"},{f:"1923-10-29",t:"2000-12-31",d:"turkiye-cumhuriyeti",kaynak:"TDV Islam Ansiklopedisi 'Turkiye Cumhuriyeti'; Cumhuriyet ilani 1923-10-29"}],
  d:[{f:"1401-02-01",t:"1402-07-28"},{f:"1473-08-11",t:"1916-07-22"},{f:"1918-02-17",t:"1920-04-23"}], v:[] },

// AŞKALE — Erzurum (48,9 km) çizgisiyle aynı: Akkoyunlu → Safevî → 1518 Osmanlı.
// kaynak: bulunamadı — çizgi kardeş kayıt Erzurum'dan
{ ad:"Aşkale", tur:"kasaba", lat:39.9214, lon:40.6939, g:0, k:4,
  s:[{f:"1281-01-01",t:"1360-01-01",d:"ilhanli",kaynak:"gün komşudan: Erzurum · TDV erzurum / TDV akkoyunlular (YAMA-0052B-RENK #2)"},{f:"1360-01-01",t:"1385-01-01",d:"eretna",kaynak:"gün komşudan: Erzurum · TDV erzurum / TDV akkoyunlular (YAMA-0052B-RENK #2)"},{f:"1385-01-01",t:"1387-01-01",d:"karakoyunlu",kaynak:"gün komşudan: Erzurum · TDV erzurum / TDV akkoyunlular (YAMA-0052B-RENK #2)"},{f:"1387-01-01",t:"1403-01-01",d:"timurlu",kaynak:"gün komşudan: Erzurum · TDV erzurum / TDV akkoyunlular (YAMA-0052B-RENK #2)"},{f:"1403-01-01",t:"1408-01-01",d:"mutahharten",kaynak:"gün komşudan: Erzurum · TDV erzurum / TDV akkoyunlular (YAMA-0052B-RENK #2)"},{f:"1408-01-01",t:"1467-01-01",d:"karakoyunlu",kaynak:"gün komşudan: Erzurum · TDV erzurum / TDV akkoyunlular (YAMA-0052B-RENK #2)"},{f:"1467-01-01",t:"1502-01-01",d:"akkoyunlu",kaynak:"gün komşudan: Erzurum · TDV erzurum / TDV akkoyunlular (YAMA-0052B-RENK #2)"},{f:"1502-01-01",t:"1518-01-01",d:"safevi"},{f:"1916-02-24",t:"1917-03-15",d:"rusya",kaynak:"Sarı (TÜBA c.9 böl.7 Bayburt): Aşkale'nin Rus işgali 24 Şubat 1916; Aşkale Kaymakamlığı '16 Şubat' der (Erzurum'un günü, çelişki) — akademik esas · NOKTA-KAFKAS-0077 §6 · UYGULA-YERLESIM-0930"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1918-03-03",d:"transkafkasya",kaynak:"T.C. Aşkale Kaymakamlığı tarihçe (KURUMSAL): geri alınış 3 Mart 1918 · NOKTA-KAFKAS-0077 §6 · UYGULA-YERLESIM-0930"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"},{f:"1923-10-29",t:"2000-12-31",d:"turkiye-cumhuriyeti",kaynak:"TDV Islam Ansiklopedisi 'Turkiye Cumhuriyeti'; Cumhuriyet ilani 1923-10-29"}],
  d:[{f:"1518-01-01",t:"1916-02-24"},{f:"1918-03-03",t:"1920-04-23"}], v:[] },

// ───────── RUMELİ KOLU ─────────

// SİLİVRİ — İstanbul (62 km) çizgisiyle aynı: 1453'e kadar Bizans.
// ⚠️ Silivri 1390'lar-1403 arası da Osmanlı elindeydi ve 1403 antlaşmasıyla
//   Bizans'a GERİ VERİLDİ; o iki kırılmanın günü veride YOK, uydurmadım.
//   Bugünkü çizgi 1453'ü esas alıyor — eksik ama YANLIŞ değil.
// kaynak: bulunamadı — çizgi kardeş kayıt İstanbul'dan
{ ad:"Silivri", tur:"kale", lat:41.0791, lon:28.2493, g:0, k:4,
  s:[{f:"1281-01-01",t:"1453-05-29",d:"bizans"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"},{f:"1923-10-29",t:"2000-12-31",d:"turkiye-cumhuriyeti",kaynak:"TDV Islam Ansiklopedisi 'Turkiye Cumhuriyeti'; Cumhuriyet ilani 1923-10-29"}],
  d:[{f:"1453-05-29",t:"1920-04-23"}], v:[{f:"1372-01-01",t:"1403-02-01",k:"Bizans İmparatorluğu (haraçgüzâr)",statu:"vassal",kid:"bizans",kesinlik:{f:"yil",t:"ay"},kaynak:"TDV murad-i: V. Ioannes Çirmen'den sonra 'I. Murad'ın haraçgüzârı olmayı kabul etti (1372 kışı)' — YIL · TDV bizans: 1371'den sonra vasal devlet; 1391 Bayezid ablukasıyla daha fazla vergi · KUTU-B-1014 (Emre kararı: Bizans'ın Osmanlı vasallığı açık tonla) · t: TDV bizans — Süleyman Çelebi antlaşmasıyla (Gelibolu, Şubat 1403) 'Türkler'e ödemekte olduğu yıllık haraçtan da kurtuldu' — AY"},{f:"1424-02-22",t:"1453-05-29",k:"Bizans İmparatorluğu (haraçgüzâr)",statu:"vassal",kid:"bizans",kaynak:"TDV murad-ii: 21 Rebîülevvel 827 / 22 Şubat 1424 antlaşmasıyla Bizans yıllık 300.000 akçe haraç ödemeyi kabul etti · t: İstanbul'un fethi · KUTU-B-1014"}] },

// VİZE — Demirköy (27,9 km) çizgisiyle aynı, Balkan Savaşı Bulgar işgali dâhil.
// kaynak: bulunamadı — çizgi kardeş kayıt Demirköy'den
{ ad:"Vize", tur:"kale", lat:41.5714, lon:27.7658, g:0, k:3,
  s:[{f:"1281-01-01",t:"1369-01-01",d:"bizans"},{f:"1402-07-28",t:"1403-02-01",d:"suleyman-celebi",kaynak:"t: Gelibolu Antlaşması (Şubat 1403, AY — gün Ahtapolu kaydındaki TDV fetret-devri ile aynı) · Schreiner II s.398: Bizye 1403'te yeniden Bizans"},{f:"1403-02-01",t:"1410-02-13",d:"bizans",kaynak:"TDV ayasofya-camii--vize (S. Eyice): 'Silivri ile Vize, ancak 1453'te kesin olarak fetholunmuştur'; 'belki 1411-1413 yıllarında Mûsâ Çelebi tarafından bir daha ele geçirildikten sonra yeniden Bizanslılar'ca alınmıştır' (BELKİ — pencere açılmadı, beyan) · P. Schreiner, Die byzantinischen Kleinchroniken II (CFHB 12/2, Wien 1977) s.398 (Chr. 9/40): 'Bizye war 1403 wieder byzantinisch geworden, offensichtlich aber 1410 in die Hand des Müsä gekommen'; Manuel'in geri alışı 15 Haziran–Ağustos 1410 (gün yok; atlasın Kosmidion günü 1410-06-15 korundu) · KAYNAK-1015/G5 · KARAR-UYG-1015 (Emre #13)"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi",kaynak:"Schreiner II s.398: 'offensichtlich aber 1410 in die Hand des Müsä gekommen' — Musa'nın aldığı gün kaynakta YOK, f atlasın Yanbolu günü (değişmedi)"},{f:"1410-06-15",t:"1453-05-29",d:"bizans",kaynak:"TDV ayasofya-camii--vize (S. Eyice): 'Silivri ile Vize, ancak 1453'te kesin olarak fetholunmuştur'; 'belki 1411-1413 yıllarında Mûsâ Çelebi tarafından bir daha ele geçirildikten sonra yeniden Bizanslılar'ca alınmıştır' (BELKİ — pencere açılmadı, beyan) · P. Schreiner, Die byzantinischen Kleinchroniken II (CFHB 12/2, Wien 1977) s.398 (Chr. 9/40): 'Bizye war 1403 wieder byzantinisch geworden, offensichtlich aber 1410 in die Hand des Müsä gekommen'; Manuel'in geri alışı 15 Haziran–Ağustos 1410 (gün yok; atlasın Kosmidion günü 1410-06-15 korundu) · KAYNAK-1015/G5 · KARAR-UYG-1015 (Emre #13)"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"},{f:"1923-10-29",t:"2000-12-31",d:"turkiye-cumhuriyeti",kaynak:"TDV Islam Ansiklopedisi 'Turkiye Cumhuriyeti'; Cumhuriyet ilani 1923-10-29"}],
  isg:[{f:"1913-03-26",t:"1913-07-21",d:"bulgaristan-kralligi",kaynak:"Bulgar işgali (de facto): gün aralığı atlasın önceki s: kaydından devralındı, YENİ GÜN İDDİA EDİLMEDİ · de jure Osmanlı: İstanbul Antlaşması (29 Eylül 1913) Edirne ve Kırklareli'ni Osmanlı'da bıraktı (hüküm SINIR-BERLIN-0076 raporundan; TDV sayfası bu oturumda yeniden çekilmedi) · Emre H-0138/H-0143/H-0146 (işgal olarak gösterilsin) · SIRADA-B-1012; tarif: SINIR-BERLIN-0076 B1"}], d:[{f:"1369-01-01",t:"1402-07-28",kaynak:"TDV murad-i (İnalcık): 770 (1369) baharında Pınarhisar, Kırkkilise ve Vize · Timurtaş Kızılcaağaç Yenicesi — YIL 1369, gün yok (§4)"},{f:"1453-05-29",t:"1920-04-23",kaynak:"TDV ayasofya-camii--vize: 'Silivri ile Vize, ancak 1453'te kesin olarak fetholunmuştur' — f İstanbul'un fethi (Silivri emsali) · eski f 1413-07-05 (Çamurlu) kaynaksızdı · KARAR-UYG-1015"}], v:[{f:"1424-02-22",t:"1453-05-29",k:"Bizans İmparatorluğu (haraçgüzâr)",statu:"vassal",kid:"bizans",kaynak:"TDV murad-ii: 21 Rebîülevvel 827 / 22 Şubat 1424 antlaşmasıyla Bizans yıllık 300.000 akçe haraç ödemeyi kabul etti (Silivri kaydının aynı penceresi) · t: İstanbul'un fethi · KARAR-UYG-1015"}] },

// PREVADİ (Provadia) — Şumnu (41,6 km) çizgisiyle aynı: 1878 Berlin'den sonra
// muhtar Bulgaristan (v:), 1908 istiklâlle bulgaristan.
// kaynak: bulunamadı — çizgi kardeş kayıt Şumnu'dan
{ ad:"Prevadi (Provadia)", tur:"kale", lat:43.1789, lon:27.4331, g:0, k:3,
  s:[{f:"1281-01-01",t:"1388-01-01",d:"bulgaristan"},
     {f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},
     {f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},
     {f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},
     {f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},
     {f:"1908-10-05",t:"1946-09-15",d:"bulgaristan-kralligi"},{f:"1946-09-15",t:"1990-11-15",d:"bulgaristan-halk",kaynak:"LoC Bulgaria Country Study"},{f:"1990-11-15",t:"2000-12-31",d:"bulgaristan-cumhuriyeti",kaynak:"LoC Bulgaria Country Study"}],
  d:[{f:"1388-01-01",t:"1402-07-28"},{f:"1413-07-05",t:"1878-07-13"}],
  v:[{f:"1878-07-13",t:"1908-10-05",k:"Bulgaristan Prensliği",statu:"vassal",kid:"bulgaristan-prensligi"}] },

// ───────── DOBRUCA — ve burada bir BOŞLUK ölçtüm ─────────
//
// 🔴 BULGU: Babadağı ve İshakçı'nın 25 km çevresinde HİÇ nokta yok; en
//   yakınlar Tuna'nın KARŞI kıyısında (İsmail 52 km, İbrail 72 km) ve
//   onlar Boğdan/Eflak çizgisinde — Dobruca'nın çizgisi DEĞİL.
//   ⇒ Kuzey Dobruca bu atlasta noktasız bir şerit. §2 gereği bugün
//   karşı kıyının peteğine emiliyor olmalı.
// Çizgi: 1393-09-01 (Silistre'nin günü, Bulgar Çarlığı'nın düşüşü) ile
//   Osmanlı; 1878-07-13 Berlin ile ROMANYA (Kuzey Dobruca Romanya'ya
//   verildi — güneydeki Bulgaristan'dan FARKLI, o yüzden Şumnu çizgisi
//   BURAYA UYMAZ).
// ⚠️ 1393-09-01 Dobruca'nın kendi fetih günü DEĞİL, bölgesel bir yaslama.
//   Dobruca'nın fethi için TDV'de gün ARAMADIM — ölçmedim diye yazıyorum.
// kaynak: bulunamadı — çizgi Silistre (Osmanlı başlangıcı) ve
//   1878-07-13 Berlin (Romanya'ya devir) günlerine yaslandı

{ ad:"Babadağı (Babadag)", kd:[{f:"1281-01-01",t:"1393-09-01",k:0,m:null},{f:"1593-01-01",t:"1788-12-17",k:3,m:"Özi"}], tur:"kasaba", lat:44.8917, lon:28.7169, g:0, k:3, m:"Özi",
  s:[{f:"1281-01-01",t:"1359-01-01",d:"altinorda",kaynak:"TDV dobruca: 1241'de Moğollar'ın istilâsı; Moğol hâkimiyetinin bitiş yılı verilmiyor — bitiş = Dobrotiç'in 1359'da kuzey Dobruca'yı alması (YIL) · EMRE KARARI 14 Ekim 2026 (KARARLAR-1014 m.16, 0079/H-0011)"},{f:"1359-01-01",t:"1393-09-01",d:"bulgaristan",kaynak:"1359-1393 Dobrotiç/İvanko despotluğu (Bulgar çevresi) — künye yok, bulgaristan ile yaklaşık; TDV dobruca · KARARLAR-1014 m.16"},{f:"1402-07-28",t:"1416-01-01",d:"eflak",kaynak:"TDV babadagi: 'Babadağı ve çevresi, Çelebi Sultan Mehmed'in Eflak Voyvodası Mircea ile oğlu Mihail'i mağlûp etmesinden sonra Osmanlı hâkimiyetine girdi (819/1416)' · TDV dobruca: 'Mircea Ankara Savaşı'ndan sonraki karışıklıklar sırasında tekrar Dobruca'ya girmiş' · f = Ankara günü (giriş günü BULUNAMADI) · t = YIL · PAKET-0076-DOBRUCA-1004 (A)"},{f:"1878-07-13",t:"1881-03-26",d:"romanya"},{f:"1881-03-26",t:"1947-12-30",d:"romanya-kralligi"},{f:"1947-12-30",t:"1989-12-22",d:"romanya-halk",kaynak:"LoC Romania Country Study"},{f:"1989-12-22",t:"2000-12-31",d:"romanya-cumhuriyeti",kaynak:"LoC Romania Country Study"}],
  d:[{f:"1393-09-01",t:"1402-07-28"},{f:"1416-01-01",t:"1878-07-13"}], v:[] },

// KUTU-K1-1014 — Tulça · Mangalya · Balçık (KUTU-B-1014 hazırladı; EMRE KARARI 14 Ekim 2026, KARARLAR-1014 m.14:
//   Değişmez 8a tavanı 1505→1508 onaylandı — körlüğün kapanması, gerileme değil; 0076/H-0047 · 0076/H-0050).
//   Mükerrer taraması (ad): yerlesimler*.js içinde Tulça/Mangalya/Balçık 0 kayıt (14 Ekim, K1).
{ ad:"Tulça (Tulcea)", kaynak:"TDV tulca · TDV kostence — KUTU-B-1014", tur:"liman", lat:45.179, lon:28.805, g:0, k:0,
  s:[{f:"1281-01-01",t:"1359-01-01",d:"altinorda",kaynak:"TDV dobruca: 1241'de Moğollar'ın istilâsı; bitiş yılı verilmiyor — bitiş = Dobrotiç'in 1359'da kuzey Dobruca'yı alması (YIL) · EMRE KARARI 14 Ekim 2026 (KARARLAR-1014 m.16, 0079/H-0011) · Köstence/İshakçı/Babadağı ile aynı zincir"},{f:"1359-01-01",t:"1393-09-01",d:"bulgaristan",kaynak:"1359-1393 Dobrotiç/İvanko despotluğu — künye yok, bulgaristan ile yaklaşık · BEYAN bölge sahibi: TDV tulca 'XIV. yüzyıla kadar Bulgar, Bizans, Ceneviz ve Eflak egemenlikleri' — şehir düzeyi gün yok; Kuzey Dobruca zinciri (Köstence, İshakçı) ile aynı süreç"},
     {f:"1402-07-28",t:"1419-01-01",d:"eflak",kaynak:"TDV kostence: '1402'de Mircea buraya hâkim olmuşsa da Osmanlılar 1419'da … Dobruca'nın büyük kısmını fethettiler' (bölge) · f = Ankara günü"},
     {f:"1878-07-13",t:"1881-03-26",d:"romanya",kaynak:"TDV tulca: 1878'de Berlin kararlarıyla Romanya'ya geçti (gün yok; Berlin günü — Köstence/İshakçı ile aynı) · fiilî Romen girişi 14/26 Kasım 1878 (Agerpres) yazılmadı"},
     {f:"1881-03-26",t:"1947-12-30",d:"romanya-kralligi"},
     {f:"1947-12-30",t:"1989-12-22",d:"romanya-halk",kaynak:"LoC Romania Country Study"},
     {f:"1989-12-22",t:"2000-12-31",d:"romanya-cumhuriyeti",kaynak:"LoC Romania Country Study"}],
  d:[{f:"1393-09-01",t:"1402-07-28",kaynak:"BEYAN bölge: Kuzey Dobruca zinciri (Köstence) — şehir günü yok"},
     {f:"1419-01-01",t:"1878-07-13",kaynak:"TDV tulca: '1419'da Dobruca Osmanlı toprakları içine alındı' — YIL"}] },
{ ad:"Mangalya (Mangalia)", kaynak:"TDV kostence (bölge) · Berlin 1878 — KUTU-B-1014", tur:"liman", lat:43.817, lon:28.583, g:0, k:0,
  s:[{f:"1281-01-01",t:"1359-01-01",d:"altinorda",kaynak:"TDV dobruca: 1241'de Moğollar'ın istilâsı; bitiş yılı verilmiyor — bitiş = Dobrotiç'in 1359'da kuzey Dobruca'yı alması (YIL) · EMRE KARARI 14 Ekim 2026 (KARARLAR-1014 m.16, 0079/H-0011) · Köstence/İshakçı/Babadağı ile aynı zincir"},{f:"1359-01-01",t:"1393-09-01",d:"bulgaristan",kaynak:"1359-1393 Dobrotiç/İvanko despotluğu — künye yok, bulgaristan ile yaklaşık · BEYAN bölge sahibi: TDV'de mangalya maddesi yok; Dobruca zinciri (Köstence)"},
     {f:"1402-07-28",t:"1419-01-01",d:"eflak",kaynak:"TDV kostence (bölge): 1402 Mircea, 1419 Osmanlı fethi"},
     {f:"1878-07-13",t:"1881-03-26",d:"romanya",kaynak:"Berlin 1878: Mangalya Romen sınırı içinde kaldı (ikincil sentez) — Köstence ile aynı gün"},
     {f:"1881-03-26",t:"1947-12-30",d:"romanya-kralligi"},
     {f:"1947-12-30",t:"1989-12-22",d:"romanya-halk",kaynak:"LoC Romania Country Study"},
     {f:"1989-12-22",t:"2000-12-31",d:"romanya-cumhuriyeti",kaynak:"LoC Romania Country Study"}],
  d:[{f:"1393-09-01",t:"1402-07-28",kaynak:"BEYAN bölge: Köstence zinciri"},
     {f:"1419-01-01",t:"1878-07-13",kaynak:"TDV kostence (bölge): 1419 — YIL"}] },
{ ad:"Balçık (Balchik)", kaynak:"TDV balcik · TDV dobruca — KUTU-B-1014", tur:"liman", lat:43.409, lon:28.161, g:0, k:0,
  s:[{f:"1281-01-01",t:"1389-07-01",d:"bulgaristan",kaynak:"BEYAN bölge sahibi (Dobruca Bulgar zinciri) · t: TDV balcik 'Balçık bütün Dobruca ile birlikte Temmuz 1389'dan sonra Osmanlılar'ın idaresi altına girdi' — AY, alt sınır"},
     {f:"1390-01-01",t:"1419-01-01",d:"eflak",kesinlik:{f:"yil",t:"yil"},kaynak:"TDV balcik: Mircea 1390'dan ölümüne dek hâkim; 1419 Osmanlı — YIL"},
     {f:"1908-10-05",t:"1913-08-10",d:"bulgaristan-kralligi"},
     {f:"1913-08-10",t:"1940-09-25",d:"romanya-kralligi",kaynak:"TDV balcik: '1878-1913 yılları arasında Balçık Bulgaristan'a dahildi', 1913'te Romanya (Bükreş antl. 10 Ağustos 1913 — Silistre/Hacıoğlupazarcığı ile aynı gün) · t: TDV dobruca 'Kraiova Antlaşması ile Güney Dobruca tekrar Bulgaristan'a verilmiştir' — devir günü Silistre kaydıyla aynı"},
     {f:"1940-09-25",t:"1946-09-15",d:"bulgaristan-kralligi"},
     {f:"1946-09-15",t:"1990-11-15",d:"bulgaristan-halk"},
     {f:"1990-11-15",t:"2000-12-31",d:"bulgaristan-cumhuriyeti"}],
  d:[{f:"1389-07-01",t:"1390-01-01",kesinlik:{f:"ay",t:"yil"},kaynak:"TDV balcik (Temmuz 1389 sonrası Osmanlı; 1390 Mircea)"},
     {f:"1419-01-01",t:"1878-07-13",kaynak:"TDV balcik: 1419 Osmanlı — YIL · t: Berlin (TDV balcik '1878-1913 … Bulgaristan'a dahildi')"}],
  v:[{f:"1878-07-13",t:"1908-10-05",k:"Bulgaristan Prensliği",statu:"vassal",kid:"bulgaristan-prensligi",kaynak:"Berlin md. 2 · TDV balcik"}] },

// PAKET-0076-DOBRUCA-1004 B (5 Ekim 2026) — Güney Dobruca'nın İÇİNDE nokta 0'dı (8a g3-bg-ro-dobruca-p4 kökü:
//   Silistre hattın ucunda, sonra Varna 67 km). Ad + 3 km taraması: 0 kayıt, en yakın Varna 39,7 km.
//   Kendi TDV maddesi var (hacioglupazarcigi, M. Kiel); kazılar 600-1500 arası yerleşim YOK dediği için
//   1281-1419 Dobruca zinciri sorusu bu noktaya HİÇ DEĞMİYOR (kur: 1518).
{ ad:"Hacıoğlupazarcığı (Dobrich)", tur:"sehir", lat:43.565, lon:27.831, g:0, k:4, m:"Silistre",
  kur:"1518-01-01",
  kaynak:"TDV, madde: hacioglupazarcigi (Machiel Kiel) — kuruluş, 1518 tahriri, 1878 Bulgaristan · koordinat: GeoNames arama sayfası, şehir merkezi satırı (denetim/PAKET-0076-BITIR-berlin-noktalar.md §Koordinatlar) — bu turda YENİDEN DOĞRULANMADI · PAKET-0076-DOBRUCA-1004 B",
  neden:"TDV hacioglupazarcigi: 'Silistre sancağına ait günümüze ulaşan en eski kayıtlar, 924’te (1518) yapılan tahrire dayalı … Burada Varna kazasına bağlı Hacıoğlu adını taşıyan bir köye rastlanır' · '1970’lerde yapılan arkeolojik kazılarda … şehirde 600-1500 yılları arasında yerleşim bulunmadığını ortaya koydu. Burada yerleşim ilk olarak XVI. yüzyılda yörüklerle başladı.' ⇒ kur = İLK KAYIT yılı (terminus ante quem), kuruluş 'XVI. yüzyıl' — YIL (D210).",
  d:[{f:"1518-01-01",t:"1878-07-13",kaynak:"TDV hacioglupazarcigi: 924 (1518) tahriri, Silistre sancağı / Varna kazası · bitiş Berlin (Prenslik noktalarının ortak günü)"}],
  v:[{f:"1878-07-13",t:"1908-10-05",k:"Bulgaristan Prensliği",statu:"vassal",kid:"bulgaristan-prensligi",kaynak:"TDV hacioglupazarcigi: '1877-1878 savaşından sonra Hacıoğlu ve bölgesi yeni kurulan Bulgaristan’ın bir parçası oldu' · Berlin 1878-07-13"}],
  s:[{f:"1908-10-05",t:"1913-08-10",d:"bulgaristan-kralligi",kaynak:"TDV bulgaristan: bağımsızlık 5 Ekim 1908"},
     {f:"1913-08-10",t:"1940-09-25",d:"romanya-kralligi",kaynak:"TDV dobruca: 'Bükreş Antlaşması ile (1913) Bulgaristan Dobruca’nın güneyini de Romanya’ya terketmiş' · gün TDV balkan-savasi '10 Ağustos 1913’te … Bükreş Antlaşması' · Silistre kaydıyla aynı gün (A8)"},{f:"1940-09-25",t:"1946-09-15",d:"bulgaristan-kralligi",kaynak:"Britannica 'Bulgaria'; Paris Barisi 1947"},{f:"1946-09-15",t:"1990-11-15",d:"bulgaristan-halk",kaynak:"LoC Bulgaria Country Study"},{f:"1990-11-15",t:"2000-12-31",d:"bulgaristan-cumhuriyeti",kaynak:"LoC Bulgaria Country Study"}] },
  // isg YAZILMADI: 1877-78 Rus işgali ve 1916-18 Bulgar geri alışı — TDV gün vermiyor.

{ ad:"İshakçı (Isaccea)", tur:"kale", lat:45.2736, lon:28.4600, g:0, k:4,
  s:[{f:"1281-01-01",t:"1359-01-01",d:"altinorda",kaynak:"TDV dobruca: 1241'de Moğollar'ın istilâsı; Moğol hâkimiyetinin bitiş yılı verilmiyor — bitiş = Dobrotiç'in 1359'da kuzey Dobruca'yı alması (YIL) · EMRE KARARI 14 Ekim 2026 (KARARLAR-1014 m.16, 0079/H-0011)"},{f:"1359-01-01",t:"1393-09-01",d:"bulgaristan",kaynak:"1359-1393 Dobrotiç/İvanko despotluğu (Bulgar çevresi) — künye yok, bulgaristan ile yaklaşık; TDV dobruca · KARARLAR-1014 m.16"},{f:"1402-07-28",t:"1419-01-01",d:"eflak",kaynak:"Stănică, A.-D., 'The Missing Fortresses in Dobrogea. Case Study: Turkish Fortifications', Dobrogea. Coordonate istorice și arheologice (2016), s. 4 dn. 3: 'Anca Ghiaţă has decided for an uninterrupted affiliation of Dobrogea to Wallachia from 1388 to the battles of 1419-1420' · s. 4: 'it’s only during the reign of Mihail, the successor of Mircea cel Bătrân in 1419 or the spring of 1420 that the Ottomans manage to extend their effective dominance over Dobrogea, the empire frontier being established on the line formed by the fortresses Enisala (Yeni-Sal) and Isaccea (Isakci) which become serhat (edge fortresses)' · f = Ankara günü (giriş günü bulunamadı) · t = YIL (1419 ya da 1420 ilkbaharı, D210) · ⚠️ 1402-1419 Eflak okuması BÖLGE düzeyindedir (Ghiaţă 'Dobrogea'); 1419/20 serhat cümlesi İsakçı'yı ADIYLA anar · Silistre/Köstence ile aynı zincir · PAKET-0076-ISHAKCI-1004"},{f:"1878-07-13",t:"1881-03-26",d:"romanya"},{f:"1881-03-26",t:"1947-12-30",d:"romanya-kralligi"},{f:"1947-12-30",t:"1989-12-22",d:"romanya-halk",kaynak:"LoC Romania Country Study"},{f:"1989-12-22",t:"2000-12-31",d:"romanya-cumhuriyeti",kaynak:"LoC Romania Country Study"}],
  d:[{f:"1393-09-01",t:"1402-07-28"},{f:"1419-01-01",t:"1878-07-13"}], v:[],
  not:"Dobruca'nın Osmanlı'ya geçişinde ÜÇ OKUMA var (Stănică 2016, s. 4-5, dn. 3 ve 5): N. Iorga 1416 · C.C. Giurescu, Ştefănescu, Gh. I. Brătianu 1417 · A. Ghiaţă 1388'den 1419-1420 savaşlarına kadar KESİNTİSİZ Eflak. Yazar: 'The chronology of all these Ottoman conquests is not elucidated in detail.' Atlas Ghiaţă okumasını izler (yazarın kendi çerçevesi 'after the years 1419 to 1420'; Silistre · Köstence ile aynı); 1416 okuması Babadağı'nda TDV babadagi ile ayrıca yaşar (1416-1419 Babadağı adası kaynaklı). ⚠️ D208 çekincesi: 1402-1419 Eflak okuması Ghiaţă'nın 'Dobrogea' için verdiği BÖLGE hükmüdür (yalnız 1419/20 serhat cümlesi İsakçı'yı adıyla anar); İshakçı'ya ÖZEL bir kaynak çıkarsa bu hükmü geçersiz kılar (koordinatör, M-5818 cevabı)." },

// FLOCİ (Târgu de Floci / Orașul de Floci) — Bărăgan, Ialomița ağzı. P84-DOBRUCA-TUNA-1006 / H-0018:
// Eflak gövdesinin İbrail ile Buzău arasındaki NOKTASIZLIĞI (Kalas peteği kaması, ROTUS ölçümü).
{ ad:"Floci (Târgu de Floci)", tur:"sehir", lat:44.689, lon:27.831, g:0, k:4,
  kur:"1431-01-01",
  isg:[{"f":"1877-04-24","t":"1878-01-31","d":"rusya","kaynak":"doksanuc-harbi (TDV): Rusya 24 Nisan 1877'de savaş ilân etti; «Savaşın başlaması ile birlikte Romanya topraklarına giren ve bu prensliği kendi tarafına çeken Ruslar» · Romanya Rusya'nın MÜTTEFİKİ (romanya, bogdan TDV) — hukuken işgal değil; EMRE KARARI 13 Ekim 2026: ittifaklı Rus ilerleyişi Eflak-Boğdan'da işgal gibi taralı gösterilir (Osmanlı tâbi tonu görünmesin) · bitiş: 31 Ocak 1878 Edirne ateşkesi (doksanuc-harbi TDV); Rus birliklerinin Romanya'dan fiilî çekiliş günü bulunamadı"}],
  kaynak:"koordinat: RAN (Repertoriul Arheologic Național, INP/cIMeC) cod 93655.02 / LMI IL-I-s-A-14051 — site poligonunun merkezi (eism.geo-spatial.ro PatrimoniuWM katman 6: 44,6886 K · 27,8311 D; öznitelik 'Lat' 44° 41' 38.182\" N) · RAN 'Reper': 'Oraşul se află la km. 104 de pe şoseaua Bucureşti - Constanţa (DN2), lângă fostul sat Piua Petrii, la vest de braţul Borcea.' · 'Forma de relief: câmpia Bărăganului' · P84-DOBRUCA-TUNA-1006",
  neden:"DJC Ialomița (Direcția Județeană pentru Cultură Ialomița), 'Situl arheologic medieval „Orașul de Floci” Giurgeni' (9 august 2016, djcialomita.ro): 'Prima atestare documentară se găsește din anul 1431, într-un document cu privilegii pentru negustorii braşoveni al Voievodului Dan al II-lea.' · 'Oraşul a fost ars în anul 1470 de către Domnul Ştefan cel Mare Voievod, în timpul conflictelor sale cu Voievodul Radu cel Frumos.' ⇒ kur = İLK ATESTASYON yılı (terminus ante quem; kuruluş yılı kaynakta YOK) — YIL (D210). Ştefan cel Mare'nin (Boğdan) 1470 saldırısı şehrin EFLAK tarafında olduğunu ayrıca gösterir." ,
  s:[{f:"1431-01-01",t:"1462-06-01",d:"eflak",kaynak:"DJC Ialomița (Direcția Județeană pentru Cultură Ialomița), 'Situl arheologic medieval „Orașul de Floci” Giurgeni' (9 august 2016, djcialomita.ro): 'Prima atestare documentară se găsește din anul 1431, într-un document cu privilegii pentru negustorii braşoveni al Voievodului Dan al II-lea.' · 'Oraşul a fost ars în anul 1470 de către Domnul Ştefan cel Mare Voievod, în timpul conflictelor sale cu Voievodul Radu cel Frumos.' · bitiş = künye eflak 'tabi' f (1462-06-01) — KÜNYE PENCERESİDİR, kaynak değil (Eflak'ın bütün noktalarıyla ortak)"},{f:"1877-05-09",t:"1881-03-26",d:"romanya",kaynak:"TDV romanya: '9 Mayıs 1877 tarihinde bağımsızlığını ilân etti' (devlet düzeyi)"},{f:"1881-03-26",t:"1947-12-30",d:"romanya-kralligi"},{f:"1947-12-30",t:"1989-12-22",d:"romanya-halk",kaynak:"LoC Romania Country Study"},{f:"1989-12-22",t:"2000-12-31",d:"romanya-cumhuriyeti",kaynak:"LoC Romania Country Study"}],
  d:[], v:[{f:"1462-06-01",t:"1859-01-24",k:"Eflak Voyvodalığı",statu:"vassal",kid:"eflak"},{f:"1859-01-24",t:"1877-05-09",k:"Birleşik Prenslikler (Romanya)",statu:"vassal",kid:"romanya"}],
  not:"Süreklilik (DJC Ialomița): 'Oraşul s-a refăcut ajungând la o maximă dezvoltare a sa în sec. XVI – XVII.' · 'Secolele XVIII și XIX au fost martorele decăderii oraşului … Astfel la sfârşitul secolului al XIX-lea pe locul oraşului s-a format satul Piua Petrii, dispărut și el în urma inundaţiilor din anul 1970.' ⇒ 1923'e kadar yerleşim (şehir → gerileme → Piua Petrii köyü); 'bit' YAZILMADI. ⚠️ BEYANLI BORÇ: Rus işgal örtüleri (isg 1806-1812 · 1828-1834) YAZILMADI — Buzău'nun günü 'komşudan: Bükreş', İbrail'inki 1809/1828 (kale kuşatması): zincirleme devralma yasak ve Tuna kıyısında gün farklı ⇒ kaynak bulununca eklenir." },

// YAGODİNA (Jagodina) — Kragujevac (28,4 km) çizgisiyle birebir:
// Sırp despotluğu → 1459 Osmanlı → 1717-1739 Avusturya → 1830 muhtar
// Sırbistan (v:) → 1878 istiklâl.
// kaynak: bulunamadı — çizgi kardeş kayıt Kragujevac'tan
{ ad:"Yagodina (Jagodina)",neden:"1689-09-24 → 1690-09-09 Avusturya ara dönemi eksikti (Osmanlı 1459-1717 kesintisiz görünüyordu). Ara dönem eklendi VE mevcut `v:` 1830-1878 KORUNDU — yerlesimler_ek29.js:424'teki ölü düzeltme `v:`yi taşımıyordu, uygulansaydı 48 yıllık sahipsizlik açacaktı.",kaynak:"bulunamadı — TDV'de Yagodina/Jagodina müstakil maddesi yok. Dayanak KARDEŞ KAYIT: Kragujevac (28,4 km, aynı Morava koridoru) birebir aynı günleri taşıyor; 1690-09-09 günü külliyatta \"Niş, Vidin ve Belgrad geri alındı\" maddesiyle zaten kayıtlı.",s:[{"f":"1281-01-01","t":"1439-08-27","d":"sirbistan"},{"f":"1444-08-01","t":"1459-06-20","d":"sirp-despotlugu"},{"f":"1689-09-24","t":"1690-09-09","d":"avusturya"},{"f":"1717-08-18","t":"1738-08-01","d":"avusturya","kaynak":"gün komşudan: Semendire (1738-08-01, TDV semendire: 'Avusturyalılar bu bölgede Ağustos 1738'e kadar kaldılar'; ay verir, gün vermez) — bu yer için ayrı kayıt BULUNAMADI (TDV'de müstakil madde yok; Britannica/Wikipedia/Hrvatska-Srpska enciklopedija taramasında yer düzeyinde kayıt çıkmadı; Semendire'ye uzaklık Jagodina ~60 km, Kragujevac ~70 km, Çaçak ~100 km — son ikisi komşu günü kuralının en uç kullanımı) · SIRADA-A-1012 (Emre kararı 13 Ekim 2026)"},{"f":"1878-07-13","t":"1882-03-06","d":"sirbistan-prensligi"},{"f":"1882-03-06","t":"1918-12-01","d":"sirbistan-kralligi"},{"f":"1918-12-01","t":"1945-11-29","d":"yugoslavya"},{"f":"1945-11-29","t":"1992-04-27","d":"yugoslavya-federal","kaynak":"Britannica 'Yugoslavia'; Office of the Historian, Milestones 1989-1992 (Breakup of Yugoslavia)"},{"f":"1992-04-27","t":"2000-12-31","d":"yugoslavya-federal-cumhuriyeti","kaynak":"Britannica 'Yugoslavia'; Office of the Historian, Milestones 1989-1992 (Breakup of Yugoslavia)"}],d:[{"f":"1439-08-27","t":"1444-08-01"},{"f":"1459-06-20","t":"1689-09-24"},{"f":"1690-09-09","t":"1717-08-18"},{"f":"1738-08-01","t":"1830-10-17"}], tur:"kasaba", lat:43.9772, lon:21.2617, g:0, k:4,
  v:[{"f":"1830-10-17","t":"1878-07-13"}] },

// PRAVİŞTE (Eleftheroupoli) — Kavala (13,8 km) çizgisiyle aynı.
// ⚠️ 3 km kuralının DIŞINDA ama yakın; koordinatöre bildirildi (M-0084).
//   Ayrı bir menzil konağıdır, Kavala'nın mahallesi değil.
// kaynak: bulunamadı — çizgi kardeş kayıt Kavala'dan
{ ad:"Praviște (Eleftheroupoli)",kaynak:"kavala", tur:"kasaba", lat:40.9167, lon:24.2500, g:0, k:4,
  s:[{f:"1281-01-01",t:"1387-04-09",d:"bizans"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},{f:"1913-05-30",t:"1913-08-10",d:"bulgaristan-kralligi"},{f:"1913-08-10",t:"1973-06-01",d:"yunanistan"},{f:"1973-06-01",t:"2000-12-31",d:"yunanistan-cumhuriyeti",kaynak:"Britannica 'Greece' (1973-06-01 cunta monarsiyi kaldirdi; 1974-12-08 referandum)"}],
  d:[{f:"1387-04-09",t:"1402-07-28"},{f:"1413-07-05",t:"1913-05-30"}], v:[{f:"1372-01-01",t:"1387-04-09",k:"Bizans İmparatorluğu (haraçgüzâr)",statu:"vassal",kid:"bizans",kesinlik:{f:"yil",t:"gun"},kaynak:"TDV murad-i: V. Ioannes Çirmen'den sonra 'I. Murad'ın haraçgüzârı olmayı kabul etti (1372 kışı)' — YIL · TDV bizans: 1371'den sonra vasal devlet; 1391 Bayezid ablukasıyla daha fazla vergi · KUTU-B-1014 (Emre kararı: Bizans'ın Osmanlı vasallığı açık tonla) · t: Bizans dönemi bu kayıtta burada biter"}] },

// LANZAKA (Lagkadas) — Selanik (16 km) çizgisine yaslandı.
// ⚠️ Selanik kaydındaki 1403-1430 arası Bizans/Venedik dönemi BU KAYDA
//   YAZILMADI: o, ŞEHRİN kendisine ait bir devirdi (1423 Venedik'e satıldı).
//   İç bölgedeki Lanzaka için aynı şeyi varsaymak için dayanağım YOK.
//   Bunun yerine iç Makedonya'nın standart Fetret deseni (Serez) kullanıldı.
//   ⇒ Bu bir TERCİH ve gerekçesi yazılı; ölçüm değil.
// kaynak: bulunamadı — çizgi Selanik (fetih ve 1912 devir) ile Serez
//   (Fetret deseni) kayıtlarından
{ ad:"Lanzaka (Lagkadas)",kaynak:"atina-antlasmasi",isg:[{f:"1912-11-08",t:"1913-11-14",d:"yunanistan",kaynak:"selanik"}], tur:"kasaba", lat:40.7500, lon:23.0667, g:0, k:4,
  s:[{f:"1281-01-01",t:"1387-04-09",d:"bizans"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},{f:"1913-11-14",t:"1973-06-01",d:"yunanistan"},{f:"1973-06-01",t:"2000-12-31",d:"yunanistan-cumhuriyeti",kaynak:"Britannica 'Greece' (1973-06-01 cunta monarsiyi kaldirdi; 1974-12-08 referandum)"}],
  d:[{f:"1387-04-09",t:"1402-07-28"},{f:"1413-07-05",t:"1913-11-14"}], v:[{f:"1372-01-01",t:"1387-04-09",k:"Bizans İmparatorluğu (haraçgüzâr)",statu:"vassal",kid:"bizans",kesinlik:{f:"yil",t:"gun"},kaynak:"TDV murad-i: V. Ioannes Çirmen'den sonra 'I. Murad'ın haraçgüzârı olmayı kabul etti (1372 kışı)' — YIL · TDV bizans: 1371'den sonra vasal devlet; 1391 Bayezid ablukasıyla daha fazla vergi · KUTU-B-1014 (Emre kararı: Bizans'ın Osmanlı vasallığı açık tonla) · t: Bizans dönemi bu kayıtta burada biter"}] },

// ═══════════════════ KÜME 4 — LÜBNAN EMİRLİĞİ / HARFÛŞOĞULLARI ÇAPASI (KITA 2, 12 Eylül 2026) ═══════════════════
//
// Kaynak: `denetim/HAZIRLIK-LUBNAN-NOKTA-0911.json` (LÜBNAN YERLEŞİM oturumu,
// 11 Eylül 2026) + `data/devletler.js` künyeleri `lubnan-emirligi` (satır
// 7509), `cebel-i-lubnan-mutasarrifligi` (7519), `harfusogullari` (7528) —
// üçü de KITA 1'in PAKET-KUNYE-INISI teslimiyle indi (bu paketin blokörü).
//
// 🔴 NİÇİN 3 NOKTA, HAZIRLIK DOSYASININ "4 ADAY"INDAN AZ: doğrudan
// öneriyi (Deyrülkamer + Beyteddin + Ba'aklîn) OLDUĞU GİBİ yazmadım.
// Hazırlık dosyasının kendi ①/②'sindeki mükerrer uyarısı Beyteddin'i
// (2,08 km) ve Ba'aklîn'i (1,95 km) Deyrülkamer'e "AYRI nokta YAZMA"
// diye açıkça elemiş — D002 sınıfı. Yazılanlar hazırlığın ③ özet
// tavsiyesindeki ZORUNLU + GÜÇLÜ + İSTEĞE BAĞLI üçlü: Deyrülkamer,
// Ba'lebek, Sûr (Tyre). Mükerrer sınavı bu oturumda AYRICA koşuldu
// (girdi.yukle(), 3813 nokta): en yakın mevcut nokta Deyrülkamer için
// Beyrut 21,92 km, Ba'lebek için Şam 55,23 km, Sûr için Sayda 35,97 km —
// üçü de 3 km eşiğinin (D066) çok üstünde, çakışma yok.
//
// 🔴 AD ÇAKIŞMASI KONTROLÜ: veride ZATEN bir "Sûr" kaydı var
// (yerlesimler.js:1874, lat 22,555/lon 59,520 — UMMAN'daki Sûr limanı,
// nebhani/portekiz/umman kimlikleriyle). AYNI ADI kullanmak D065 sınıfı
// bir karışıklık üretirdi; bu yüzden hazırlık dosyasının önerdiği gibi
// "Sûr (Tyre) — Lübnan" adı kullanıldı, Umman kaydına DOKUNULMADI.
//
// DÖNEM ZİNCİRİ YÖNTEMİ — künyenin kendi f:/t: günleri devralındı
// (D011: veri penceresi künye penceresini aşmamalı), gün UYDURULMADI:
//   s: memluk (1281-01-01 → künyenin f:'i)
//   v: kid:lubnan-emirligi (Deyrülkamer/Ba'lebek'te 2. künye) veya
//      doğrudan d: (Sûr'da, TDV kaydı Emirlik'e HİÇ girmiyor — aşağı bkz.)
//   d: doğrudan Osmanlı ARA dönemi (Emirlik/Mutasarrıflık arasındaki
//      1842-1861 boşluk — künyelerin KENDİ f/t'leri arasındaki gerçek
//      boşluk, uydurma değil)
//   v: kid:cebel-i-lubnan-mutasarrifligi (yalnız Deyrülkamer/Ba'lebek)
//   d: doğrudan Osmanlı, 1918 Birinci Dünya Savaşı çöküşüne kadar —
//      KOMŞU EMSALİ (D084): en yakın kayıtlı kırılma günü Beyrut'un
//      1918-10-08'i (yerlesimler.js:667) kullanıldı, kendi günü
//      araştırılmadı.
//   s: fransa-cumhuriyet / suriye-lubnan-mandasi — Beyrut/Şam ile
//      BİREBİR aynı (1918-10-08 → 1920-07-24 → 1923-10-29), bölgesel
//      tutarlılık için; bu iki günün ikisi de kronolojide zaten kayıtlı
//      (Değişmez 2 bu ikisi için AÇILMIYOR — Beyrut/Şam'da zaten kapalı).
//
// 🔴 DEĞİŞMEZ 2 AÇIK KALAN KIRILMALAR — bekletmeden bildiriliyor, DÜZELTMEDİM:
// künyelerin kendi f/t günleri (1516-10-01 · 1842-01-01 · 1861-06-09 ·
// 1915-07-11) için `data/olaylar*.js` kronoloji ÇEKİRDEĞİNDE ±30 gün
// içinde madde ARANMADI/BULUNAMADI — bu dört kırılma muhtemelen AÇIK
// çıkacak (denetle.py çalıştırıldığında ölçülecek). Çare `olaylar*.js`e
// madde yazmak, ve o dosya bu paketin sahiplik alanı DIŞINDA (§7).
// Künyelerin KENDİ `kronoloji` alanları (devletler.js içinde) zaten bu
// dört günü anlatıyor olabilir ama CLAUDE.md §5 açıkça ayırıyor: o alan
// Değişmez 2'nin evreni DEĞİL, yalnız `olaylar*.js`+`kronoloji*.js`
// (çekirdek) sayılıyor.
//
// kaynak: `denetim/HAZIRLIK-LUBNAN-NOKTA-0911.json` — TDV `lubnan`
// (Ma'noğulları/Şihaboğulları nüfuzu), TDV `balebek` (Harfûş ailesi,
// "1516'da... Osmanlı hâkimiyetine geçti... Harfûş ailesinin elinde
// kaldı"), TDV `sur--lubnan` ("Yavuz Sultan Selim'in 1516 Mercidâbık
// zaferinden sonra Sûr şehri de Osmanlı ülkesine katıldı").

{ ad:"Deyrülkamer (Dayr al-Kamer)", tur:"kasaba", lat:33.6989, lon:35.5619, g:0, k:3,
  dogrulanmadi:true,
  neden:"'Ma'noğulları/Şihaboğulları'nın BAŞKENTİYDİ' iddiası yalnız Wikipedia'da var, TDV/Britannica'da DOĞRULANAMADI (hazırlık dosyası ②). Nokta ve v: bağı, künyenin kendi f/t penceresi ile TAM örtüştüğü ve TDV'nin doğruladığı 'Şûf bölgesi nüfuzu' gerekçesiyle sağlam; yalnız 'başkent' sıfatı doğrulanmamış kaldı.",
  s:[{f:"1281-01-01",t:"1516-10-01",d:"memluk"},
     {f:"1918-10-08",t:"1920-07-24",d:"fransa-cumhuriyet"},
     {f:"1920-07-24",t:"1943-11-22",d:"suriye-lubnan-mandasi"},{f:"1943-11-22",t:"2000-12-31",d:"lubnan-cumhuriyeti",kaynak:"Britannica 'Lebanon' (bagimsizlik 22 Kasim 1943)"}],
  v:[{f:"1516-10-01",t:"1842-01-01",statu:"özerk",kid:"lubnan-emirligi"},
     {f:"1861-06-09",t:"1915-07-11",statu:"özerk",kid:"cebel-i-lubnan-mutasarrifligi"}],
  d:[{f:"1842-01-01",t:"1861-06-09"},{f:"1915-07-11",t:"1918-10-08"}],
  kaynak:"TDV `lubnan` (Ma'noğulları 1585-1635 nüfuz genişlemesi, Şihaboğulları ~1697 Şûf'ta başlangıç) — 'başkent' iddiası dogrulanmadi:true, bkz. üstteki not." },

// 🔴 KENDİ HATAMIN DÜZELTMESİ (ilk denetle.py koşusu yakaladı, CLAUDE.md
// §3.5 "hayalet devlet" sınıfı): memluk s: dönemi ORİJİNAL YAZIMDA
// 1521-01-01'e kadar uzuyordu — memluk künyesinin KENDİ ölüm tarihini
// (devletler.js:105, t:"1517-04-13") 3,7 YIL AŞIYORDU. Düzeltme: memluk
// Şam/Mercidabık günüyle (1516-09-27, komşu emsali — Şam kaydı
// yerlesimler.js:665) kapatıldı, arada doğrudan Osmanlı `d:` dönemi
// eklendi (1516-09-27→1521-01-01, Harfûş ailesinin fiilen yerleşmesine
// kadar). Harfûşoğulları künyesinin kendi f:'i (1521-01-01) DEĞİŞMEDİ.
{ ad:"Ba'lebek (Baalbek)", tur:"kasaba", lat:34.0059, lon:36.2181, g:0, k:3, m:"Şam",
  s:[{f:"1260-01-01",d:"ilhanli",kaynak:"TDV balebek: 'Eyyûbîler’in idaresinde de birçok defa el değiştirdi ve 1260’ta Moğollar’ın eline geçti; ancak Memlük Sultanı Kutuz’un Aynicâlût’ta kazandığı zafer üzerine Memlükler’in idaresine girdi.' · Moğol = Hülâgû'nun Suriye seferi (İlhanlı). 1174 Selâhaddin · 1182-1230 Behram Şah · 1230 el-Eşref tanıklıkları Eyyûbî kol eşlemesi tarihsiz olduğundan YAZILMADI · ZAMAN-Z6-1008",t:"1260-09-03",kesinlik:{f:"yil",t:"gun"}},{f:"1260-09-03",t:"1516-09-27",d:"memluk",kaynak:"f 1281-01-01'den geri çekildi — TDV balebek: 'Eyyûbîler’in idaresinde de birçok defa el değiştirdi ve 1260’ta Moğollar’ın eline geçti; ancak Memlük Sultanı Kutuz’un Aynicâlût’ta kazandığı zafer üzerine Memlükler’in idaresine girdi.' · gün komşudan: TDV aynicalut-savasi '3 Eylül 1260' (ALT SINIR) · ZAMAN-Z6-1008"},{f:"1918-10-08",t:"1920-07-24",d:"fransa-cumhuriyet"},{f:"1920-07-24",t:"1943-11-22",d:"suriye-lubnan-mandasi"},{f:"1943-11-22",t:"2000-12-31",d:"lubnan-cumhuriyeti",kaynak:"Britannica 'Lebanon' (bagimsizlik 22 Kasim 1943)"}],
  v:[{f:"1521-01-01",t:"1850-01-01",statu:"özerk",kid:"harfusogullari"}],
  d:[{f:"1516-09-27",t:"1521-01-01"},{f:"1850-01-01",t:"1918-10-08"}],
  kaynak:"TDV `balebek` (gövdesi okundu, `baalbek` slug'ı ona yönlendiriyor — §4② tuzağı): '1516'da Yavuz Sultan Selim'in Suriye seferi sırasında Osmanlı hâkimiyetine geçti... küçük beylerin, özellikle Harfûş ailesinin elinde kaldı' · '1850'de Bâbıâli'nin yeni düzenlemesiyle Şam vilâyetine tâbi bir kaza merkezi yapıldı'. Fetih günü Şam/Mercidabık (1516-09-27, komşu emsali) ile hizalandı; Harfûş hâkimiyeti künyenin kendi f:'i (1521-01-01, Canbirdi Gazâlî isyanı sonrası) ile başlıyor." },

{ ad:"Sûr (Tyre) — Lübnan", tur:"liman", lat:33.2704, lon:35.2038, g:0, k:3, m:"Sayda",
  s:[{f:"1281-01-01",t:"1516-09-27",d:"memluk"},
     {f:"1918-10-08",t:"1920-07-24",d:"fransa-cumhuriyet"},
     {f:"1920-07-24",t:"1943-11-22",d:"suriye-lubnan-mandasi"},{f:"1943-11-22",t:"2000-12-31",d:"lubnan-cumhuriyeti",kaynak:"Britannica 'Lebanon' (bagimsizlik 22 Kasim 1943)"}],
  d:[{f:"1516-09-27",t:"1918-10-08"}], v:[],
  neden:"Emirlik/Mutasarrıflık'a v: BAĞLANMADI — TDV `sur--lubnan` idarî zincirini sancak-içi anlatıyor (Şam→Sayda→1865 Beyrut sancağı), Ma'noğlu Fahreddin'in müdahalesi biçimsel egemenlik değil başarısız bir onarım girişimi olarak geçiyor. Osmanlı doğrudanlığı hiç kesilmiyor.",
  kaynak:"TDV `sur--lubnan` (ilk sınav `sur` yanlış madde/kavram karışıklığı riski taşıyordu, doğru slug içerik okunarak doğrulandı — §4② tuzağı): 'Yavuz Sultan Selim'in 1516 Mercidâbık zaferinden sonra Sûr şehri de Osmanlı ülkesine katıldı.' Gün Şam kaydıyla (yerlesimler.js:665) hizalandı — aynı Mercidâbık seferi, komşu emsali (D084)." },

{ ad:"Krupa (Bosanska Krupa)",isg:[{f:"1878-07-29",t:"1908-10-05",d:"avusturya",kaynak:"TDV bosna-hersek: '29 Temmuz'da başlayan işgal 20 Ekim 1878'de tamamlandı' · f: Bosna kayıtlarının baskın günü (14 kayıt), tek tek düşüş günü bulunamadı · bitiş ilhak 1908-10-05 · PAKET-0076-BITIR-1004 A3 (0076/H-0043·H-0057)"}], tur:"kale", lat:44.882, lon:16.158, g:0, k:3,
  neden:"DALGA-0064 · YAMA-0064-BALKAN #4 (KOSU13-YAMA, 17 Eyl 2026): Bihaç (24 km) ile Novi (25 km) arasında Una sağ yakasındaki Osmanlı sınır kalesi; Bihaç eksklavının ikinci bağı. 1565 öncesi (Hırvat-Macar dönemi) bağlılığı bu pakette araştırılmadı — nokta 1565'ten önce sahipsiz (kasıtlı).",
  kaynak:"HE Bosanska Krupa: 'Osmanlije su zaposjeli Krupu 1565'; Avusturya 1581, 1690, 1692, 1716'da kuşattı (alındığı yazılmıyor) · Korić 2016: 1787-88'de Una üzerinden malzeme gönderilen Osmanlı sınır kalesi · koordinat OSM düğüm 841364318 · 1908 günü Bosna kayıtlarının ortak günü (1878 işgali atlasta ayrı modellenmiyor)",
  d:[{f:"1565-01-01",t:"1908-10-05",kaynak:"HE Bosanska Krupa (YIL)"}],
  s:[{f:"1281-01-01",t:"1527-01-01",d:"macaristan",kaynak:"BALKAN-MACAR-0081: TDV hirvatistan 1527 (YIL) · ÖNCEKİ: HE (enciklopedija.hr) 'Bosanska Krupa': XIII. yy sonu hrvatska županija Pset; 1361 Kral I. Lajos, 1396 Kral Sigismund bağışı; 1531 Zrinski; Osmanlı 1565 — Osmanlı fethinden önce hrvatsko-ugarsko krallığı içindeki beylik/soylu mülkü · krallık aidiyeti mülk sahiplerinden ÇIKARIM · 1526-08-29 = `macaristan` künye t: sınır işareti (Cetin seçimi 1527-01-01 alternatif) · KORIDOR-0081 H-0030"},{f:"1527-01-01",t:"1565-01-01",d:"macaristan-habsburg",kaynak:"BALKAN-MACAR-0081 H-0026: TDV hirvatistan 'Mohaç Muharebesi’nden bir yıl sonra (1527) … Hırvatlar … I. Ferdinand’ı kral olarak seçtiler' — YIL (Cetin maddesi 1527-01-01). Slavonya'nın ayrı tutumu bulunamadı · ÖNCEKİ: BOSNA-MACAR-0087 (0087/H-0024): kimlik avusturya → macaristan-habsburg — Habsburg'un bu topraktaki sıfatı Macar/Hırvat KRALIDIR, Avusturya arşidükü değil. TDV budin: 'diğer kısmı ise Macar tahtında hak iddia eden Habsburg hânedanına mensup … Ferdinand’ı (17 Aralık 1526) seçmişti' · TDV hirvatistan: 'Mohaç Muharebesi’nden bir yıl sonra (1527) … Hırvatlar … Habsburg hânedanına mensup I. Ferdinand’ı kral olarak seçtiler' · TDV macaristan: 'Macaristan’da Habsburglar’ın elindeki kısım'. Gün DEĞİŞMEDİ (künye macaristan-habsburg f ile hizalı) · HE 'Bosanska Krupa': XIII. yy sonu hrvatska županija Pset; 1361 Kral I. Lajos, 1396 Kral Sigismund bağışı; 1531 Zrinski; Osmanlı 1565 · Mohaç sonrası Hırvatistan Habsburg tacına geçti (Zagreb/Sisak ile aynı uç; atlas kaydı DAYANAK DEĞİL, künye sınırı) · KORIDOR-0081 H-0030"},{f:"1908-10-05",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1945-11-29",d:"yugoslavya"},{f:"1945-11-29",t:"1992-03-03",d:"yugoslavya-federal",kaynak:"Britannica 'Yugoslavia'; Office of the Historian, Milestones 1989-1992 (Breakup of Yugoslavia)"},{f:"1992-03-03",t:"2000-12-31",d:"bosna-hersek",kaynak:"Britannica 'Yugoslavia'; Office of the Historian, Milestones 1989-1992 (Breakup of Yugoslavia)"}], v:[] },

// ─────────────────────────────────────────────────────────────────────
// BIHAC-NOKTA-0069 (19 Eyl 2026 · yama denetim/YAMA-BIHAC-NOKTA-0919.json ·
// rapor denetim/BIHAC-ENKLAV-0919.md §4). Bihaç çevresinde NOKTASIZLIK kaynaklı
// üç sınır kusuru: (a) Knin peteği Una vadisini Avusturya boyuyordu · (b) Lika
// Bihaç peteğine düşüp Osmanlı boyanıyordu · (c) Ziştovi'de Avusturya'ya geçen
// Cetin/Drežnik noktasızdı. Koordinatlar OSM. 1281 öncesi/1527 kalıbı Bihaç
// kaydıyla aynı (macaristan → 1527-01-01 Cetin seçimi → avusturya).
// ⚠️ BİLİNEN EKSİK (atlas geneli): 1809-1813 Fransız İlirya dönemi Lika/Kordun'da
//   modellenmedi — komşu Karlovac/Knin/Sisak da modellemiyor; ayrı kalem.
// ─────────────────────────────────────────────────────────────────────

{ ad:"Ostrovica (Stara Ostrovica, Kulen Vakuf)", tur:"kale", lat:44.558, lon:16.081, g:0, k:3,
  neden:"BIHAC-NOKTA-0069 (a): Una vadisinin Bihaç ile Knin arası noktasızdı; Knin (avusturya) peteği Kulen Vakuf yöresine kadar Avusturya boyuyordu. Ostrovica Stara Ostrovica kapetanlığının merkezi (Kulen Vakuf = Džisri-Kebir, XVIII. yy başında bu kalenin yanında kuruldu).",
  kaynak:"Zavod za zaštitu kulturnog naslijeđa USK, 'Ostrovica – stari grad' (kulturnonaslijedjeusk.ba/bs/clanak/ostrovica-stari-grad/68, okundu): 'Prije dolaska pod osmansku vlast nalazio se u rukama Frankopana, Juraja Mikulčića i Ivana Keglevića. Pod osmansku vlast je došao 1523. godine' · 'Od 1523 do 1878 držali su Turci posadu u Ostrovici' · HE Kulen Vakuf (kapetanlık merkezi 1791–1827 sonrası) · koordinat OSM way 360909768 (historic/castle).",
  s:[{f:"1281-01-01",t:"1523-01-01",d:"macaristan",kaynak:"USK: Frankopan/Mikulčić/Keglević — Hırvat-Macar krallığı soyluları"},
     {f:"1908-10-05",t:"1918-11-11",d:"avusturya"},
     {f:"1918-11-11",t:"1918-12-01",d:"sirbistan-kralligi"},
     {f:"1918-12-01",t:"1945-11-29",d:"yugoslavya"},{f:"1945-11-29",t:"1992-03-03",d:"yugoslavya-federal",kaynak:"Britannica 'Yugoslavia'; Office of the Historian, Milestones 1989-1992 (Breakup of Yugoslavia)"},{f:"1992-03-03",t:"2000-12-31",d:"bosna-hersek",kaynak:"Britannica 'Yugoslavia'; Office of the Historian, Milestones 1989-1992 (Breakup of Yugoslavia)"}],
  d:[{f:"1523-01-01",t:"1908-10-05",y:"kusatma",kesinlik:"yil",kaynak:"USK Ostrovica (1523, YIL) · 1908 günü Bosna kayıtlarının ortak günü"}],
  isg:[{f:"1878-09-18",t:"1908-10-05",d:"avusturya",kaynak:"USK: Osmanlı garnizonu 1878'e dek (YIL) · gün komşudan: Bihaç (Bihać) · TDV bihac (18 Eylül 1878, aynı 1878 Una harekâtı)"}],
  v:[] },

{ ad:"Udbina", tur:"kale", lat:44.532, lon:15.767, g:0, k:3,
  neden:"BIHAC-NOKTA-0069 (b): Lika/Krbava noktasızdı; 1689 sonrası Avusturya Askerî Sınırı olan ova Bihaç peteğine düşüp Osmanlı boyanıyordu.",
  kaynak:"HE Udbina (enciklopedija.hr/clanak/udbina, okundu): 'Posljednju pobjedu nad osmanskom vojskom pod tim gradom Karlović je izvojevao u travnju 1527., a već potkraj svibnja grad je s ostalim krbavskim kaštelima Mrsinjom i Komićem postao plijenom bosanskoga paše' · 'Grad su 1689. oslobodile hrvatske krajiške postrojbe pod zapovjedništvom karlovačkoga generala I. J. Herbersteina' · TDV kirka (Lika, 1527'den Kırka/Obrovac sancağında) · koordinat OSM relation 15834963.",
  s:[{f:"1281-01-01",t:"1527-01-01",d:"macaristan"},
     {f:"1527-01-01",t:"1527-05-01",d:"macaristan-habsburg",kaynak:"BOSNA-MACAR-0087 (0087/H-0024): kimlik avusturya → macaristan-habsburg — Habsburg'un bu topraktaki sıfatı Macar/Hırvat KRALIDIR, Avusturya arşidükü değil. TDV budin: 'diğer kısmı ise Macar tahtında hak iddia eden Habsburg hânedanına mensup … Ferdinand’ı (17 Aralık 1526) seçmişti' · TDV hirvatistan: 'Mohaç Muharebesi’nden bir yıl sonra (1527) … Hırvatlar … Habsburg hânedanına mensup I. Ferdinand’ı kral olarak seçtiler' · TDV macaristan: 'Macaristan’da Habsburglar’ın elindeki kısım'. Gün DEĞİŞMEDİ (künye macaristan-habsburg f ile hizalı) · Cetin seçimi 1 Ocak 1527 (olaylar_p0050) · HE: Nisan 1527'de hâlâ Karlović'in"},
     {f:"1689-01-01",t:"1809-10-14",d:"avusturya",kaynak:"HE Udbina (1689, YIL) · Svištov'a (1791) dek sınır kalesi"},{f:"1809-10-14",t:"1813-01-01",d:"fransa-cumhuriyet",kaynak:"LZMK `vojna-krajina`: \"Mirom u Schönbrunnu 1809. habsburški posjedi juzno od rijeke Save ušli su u sastav Ilirskih pokrajina ... Potkraj 1813. habsburške su trupe osvojile to područje\" — Sava'nın GÜNEYİ ölçütü · ENKLAV-0072"},{f:"1813-01-01",t:"1918-11-11",d:"macaristan-habsburg",kaynak:"HE Udbina (1689, YIL) · Svištov'a (1791) dek sınır kalesi · TDV macaristan (Géza Dávid): '1867'de iki ülke arasında bir uzlaşma meydana geldi. Avusturya-Macaristan monarşisi ortaya çıktı'; Trianon (4 Haziran 1920) Macaristan'ın kaybı, arazi 'Hırvatistan hariç' sayılır. Nokta Macar tacı (Transleithania) toprağı — iç taksimat için akademik alıntı: bulunamadı (denetim/ONCE1281-MACAR-TAC-1004.md). Önceki yazım `avusturya` (Habsburg Avusturya) idi."},
     {f:"1918-11-11",t:"1920-06-04",d:"macaristan-naiplik",kaynak:"F8 (Emre, 5 Eki 2026): de jure devir antlaşma gününde — TDV birinci-dunya-savasi: '4 Haziran 1920'de Macaristan ile Trianon … antlaşmaları imzalandı' · ara dönem: Macar tacı 1918-11-11 → antlaşma (macaristan-naiplik künyesi 1918-11-16 — mevcut çekirdek verisinin 5 günlük emsali)"},
     {f:"1920-06-04",t:"1945-11-29",d:"yugoslavya",kaynak:"F8 (Emre, 5 Eki 2026): de jure devir antlaşma gününde — TDV birinci-dunya-savasi: '4 Haziran 1920'de Macaristan ile Trianon … antlaşmaları imzalandı'"},{f:"1945-11-29",t:"1991-06-25",d:"yugoslavya-federal",kaynak:"Britannica 'Yugoslavia'; Office of the Historian, Milestones 1989-1992 (Breakup of Yugoslavia)"},{f:"1991-06-25",t:"2000-12-31",d:"hirvatistan",kaynak:"Britannica 'Yugoslavia'; Office of the Historian, Milestones 1989-1992 (Breakup of Yugoslavia)"}],
  d:[{f:"1527-05-01",t:"1689-01-01",y:"kusatma",kesinlik:"ay",kaynak:"HE Udbina: 'potkraj svibnja' 1527 (AY; gün yok) → 1689 (YIL)"}],
  v:[] },

{ ad:"Gospić", tur:"kale", lat:44.546, lon:15.375, g:0, k:3,
  neden:"BIHAC-NOKTA-0069 (b): Lika'nın batı yarısı. Osmanlı döneminde Senkovići ağalarının küçük kalesi; 1733'ten Lika alayı karargâhı.",
  kaynak:"HE Gospić (enciklopedija.hr/clanak/gospic, okundu): 'God. 1527. to su područje dobili age Senkovići, koji su izgradili manju utvrdu' · 'Gospić je do 1689. bio pod osmanskom vlašću' · koordinat OSM relation 15770095.",
  s:[{f:"1281-01-01",t:"1527-01-01",d:"macaristan"},
     {f:"1527-01-01",t:"1527-05-01",d:"avusturya",kaynak:"BALKAN-MACAR-0081 H-0027: Cetin seçimi 1527 (TDV hirvatistan YIL · olaylar_p0050) — Udbina kaydıyla aynı zincir; Lika Mayıs 1527 sonuna dek Karlović'in"},
     {f:"1689-01-01",t:"1809-10-14",d:"avusturya",kaynak:"HE Gospić (1689, YIL)"},{f:"1809-10-14",t:"1813-01-01",d:"fransa-cumhuriyet",kaynak:"LZMK `vojna-krajina`: \"Mirom u Schönbrunnu 1809. habsburški posjedi juzno od rijeke Save ušli su u sastav Ilirskih pokrajina ... Potkraj 1813. habsburške su trupe osvojile to područje\" — Sava'nın GÜNEYİ ölçütü · ENKLAV-0072"},{f:"1813-01-01",t:"1918-11-11",d:"macaristan-habsburg",kaynak:"HE Gospić (1689, YIL) · TDV macaristan (Géza Dávid): '1867'de iki ülke arasında bir uzlaşma meydana geldi. Avusturya-Macaristan monarşisi ortaya çıktı'; Trianon (4 Haziran 1920) Macaristan'ın kaybı, arazi 'Hırvatistan hariç' sayılır. Nokta Macar tacı (Transleithania) toprağı — iç taksimat için akademik alıntı: bulunamadı (denetim/ONCE1281-MACAR-TAC-1004.md). Önceki yazım `avusturya` (Habsburg Avusturya) idi."},
     {f:"1918-11-11",t:"1920-06-04",d:"macaristan-naiplik",kaynak:"F8 (Emre, 5 Eki 2026): de jure devir antlaşma gününde — TDV birinci-dunya-savasi: '4 Haziran 1920'de Macaristan ile Trianon … antlaşmaları imzalandı' · ara dönem: Macar tacı 1918-11-11 → antlaşma (macaristan-naiplik künyesi 1918-11-16 — mevcut çekirdek verisinin 5 günlük emsali)"},
     {f:"1920-06-04",t:"1945-11-29",d:"yugoslavya",kaynak:"F8 (Emre, 5 Eki 2026): de jure devir antlaşma gününde — TDV birinci-dunya-savasi: '4 Haziran 1920'de Macaristan ile Trianon … antlaşmaları imzalandı'"},{f:"1945-11-29",t:"1991-06-25",d:"yugoslavya-federal",kaynak:"Britannica 'Yugoslavia'; Office of the Historian, Milestones 1989-1992 (Breakup of Yugoslavia)"},{f:"1991-06-25",t:"2000-12-31",d:"hirvatistan",kaynak:"Britannica 'Yugoslavia'; Office of the Historian, Milestones 1989-1992 (Breakup of Yugoslavia)"}],
  d:[{f:"1527-05-01",t:"1689-01-01",kesinlik:{f:"ay",t:"yil"},kaynak:"HE Gospić: 1527 (YIL) → 1689 (YIL) · BALKAN-MACAR-0081 H-0027: yıl damgası 1527-01-01 Cetin günüyle çakışıp Gospić'i Hırvatların Ferdinand'ı seçtiği gün Osmanlı gösteriyordu. Gün komşudan: Udbina · HE Udbina 'potkraj svibnja 1527' (AY) — aynı süreç (Lika-Krbava'nın 1527 düşüşü; olaylar_p0069 'Aynı yıl Gospić yöresi Senković ağalarına verildi'), ~31 km"}],
  v:[] },

{ ad:"Cetin (Cetingrad)", tur:"kale", lat:45.138, lon:15.732, g:0, k:3,
  neden:"BIHAC-NOKTA-0069 (c): TDV zistovi-antlasmasi'nın 'Bosna’nın Unna suyu arkasında yer alan Hırvatlık arazisinin verilmesine' — Ziştovi'nin 4. maddesiyle Habsburg'da kalan iki kaleden biri; noktasızdı, Bihaç peteğinde Osmanlı kalıyordu.",
  kaynak:"HE Cetingrad (enciklopedija.hr/clanak/cetingrad, okundu): 'pod njihovom vlašću bio je 1636–38. te od 1670. kada ponovno postaje osmanska utvrda' · 'Habsburška vojska zauzima ga 1790., a Osmanlije ga u prepadima nakratko zauzimaju 1809. i 1813.' · Elma Korić, 'Bosnian Borderland during the Dubica War 1788-1791', Prilozi za orijentalnu filologiju 65 (2016), pof.ois.unsa.ba, PDF okundu — n.102 (Bašeskija: 'U ovoj godini (1790) su Austrijanci zauzeli tvrđavu Cetin') ve n.118: 'prema članu 4. Mirovnog ugovora, tvrđave Cetin i Drežnik ostale su pod habsburškom upravom' · TDV zistovi-antlasmasi · koordinat OSM way 1228318623 (Utvrda Cetin).",
  s:[{f:"1281-01-01",t:"1527-01-01",d:"macaristan",kaynak:"HE: XIV. yy'dan Frankapan mülkü"},
     {f:"1527-01-01",t:"1636-01-01",d:"macaristan-habsburg",kaynak:"BOSNA-MACAR-0087 (0087/H-0024): kimlik avusturya → macaristan-habsburg — Habsburg'un bu topraktaki sıfatı Macar/Hırvat KRALIDIR, Avusturya arşidükü değil. TDV budin: 'diğer kısmı ise Macar tahtında hak iddia eden Habsburg hânedanına mensup … Ferdinand’ı (17 Aralık 1526) seçmişti' · TDV hirvatistan: 'Mohaç Muharebesi’nden bir yıl sonra (1527) … Hırvatlar … Habsburg hânedanına mensup I. Ferdinand’ı kral olarak seçtiler' · TDV macaristan: 'Macaristan’da Habsburglar’ın elindeki kısım'. Gün DEĞİŞMEDİ (künye macaristan-habsburg f ile hizalı) · Cetin Meclisi 1 Ocak 1527 (HE Cetingrad · olaylar_p0050)"},
     {f:"1638-01-01",t:"1670-01-01",d:"avusturya"},
     {f:"1791-08-04",t:"1809-10-14",d:"avusturya",kaynak:"Ziştovi 4 Ağustos 1791 (TDV zistovi-antlasmasi · Korić 2016 n.118, 4. madde). 1809 ve 1813 Osmanlı baskınları HE'de 'nakratko' — modellenmedi"},{f:"1809-10-14",t:"1813-01-01",d:"fransa-cumhuriyet",kaynak:"LZMK `vojna-krajina`: \"Mirom u Schönbrunnu 1809. habsburški posjedi juzno od rijeke Save ušli su u sastav Ilirskih pokrajina ... Potkraj 1813. habsburške su trupe osvojile to područje\" — Sava'nın GÜNEYİ ölçütü · ENKLAV-0072"},{f:"1813-01-01",t:"1918-11-11",d:"macaristan-habsburg",kaynak:"Ziştovi 4 Ağustos 1791 (TDV zistovi-antlasmasi · Korić 2016 n.118, 4. madde). 1809 ve 1813 Osmanlı baskınları HE'de 'nakratko' — modellenmedi · TDV macaristan (Géza Dávid): '1867'de iki ülke arasında bir uzlaşma meydana geldi. Avusturya-Macaristan monarşisi ortaya çıktı'; Trianon (4 Haziran 1920) Macaristan'ın kaybı, arazi 'Hırvatistan hariç' sayılır. Nokta Macar tacı (Transleithania) toprağı — iç taksimat için akademik alıntı: bulunamadı (denetim/ONCE1281-MACAR-TAC-1004.md). Önceki yazım `avusturya` (Habsburg Avusturya) idi."},
     {f:"1918-11-11",t:"1920-06-04",d:"macaristan-naiplik",kaynak:"F8 (Emre, 5 Eki 2026): de jure devir antlaşma gününde — TDV birinci-dunya-savasi: '4 Haziran 1920'de Macaristan ile Trianon … antlaşmaları imzalandı' · ara dönem: Macar tacı 1918-11-11 → antlaşma (macaristan-naiplik künyesi 1918-11-16 — mevcut çekirdek verisinin 5 günlük emsali)"},
     {f:"1920-06-04",t:"1945-11-29",d:"yugoslavya",kaynak:"F8 (Emre, 5 Eki 2026): de jure devir antlaşma gününde — TDV birinci-dunya-savasi: '4 Haziran 1920'de Macaristan ile Trianon … antlaşmaları imzalandı'"},{f:"1945-11-29",t:"1991-06-25",d:"yugoslavya-federal",kaynak:"Britannica 'Yugoslavia'; Office of the Historian, Milestones 1989-1992 (Breakup of Yugoslavia)"},{f:"1991-06-25",t:"2000-12-31",d:"hirvatistan",kaynak:"Britannica 'Yugoslavia'; Office of the Historian, Milestones 1989-1992 (Breakup of Yugoslavia)"}],
  d:[{f:"1636-01-01",t:"1638-01-01",kesinlik:"yil",kaynak:"HE Cetingrad 1636–38 (YIL)"},
     {f:"1670-01-01",t:"1791-08-04",kesinlik:"yil",kaynak:"HE Cetingrad 1670 (YIL) → Ziştovi"}],
  isg:[{f:"1790-01-01",t:"1791-08-04",d:"avusturya",kesinlik:"yil",kaynak:"HE Cetingrad 'zauzima ga 1790.' · Korić 2016 (Bašeskija) — YIL; Ziştovi'ye dek fiilî işgal"}],
  v:[] },

{ ad:"Drežnik (Drežnik Grad)", tur:"kale", lat:44.943, lon:15.669, g:0, k:3,
  neden:"BIHAC-NOKTA-0069 (c): Ziştovi'nin 4. maddesiyle Habsburg'da kalan ikinci kale (Korić 2016); Bihaç'ın 21 km batısı, noktasızdı.",
  kaynak:"HE Drežnik Grad (enciklopedija.hr/clanak/dreznik-grad, okundu): 'do 1578., kada su ga privremeno zaposjeli Osmanlije. Pod osmansku su vlast grad Drežnik i cijelo područje istoimene županije konačno došli 1592. i ostali, uz kratak prekid 1683. i 1697–99., do 1788.' · Korić 2016 (Prilozi za orijentalnu filologiju 65, n.104 ve n.118) · ⚠️ KAYNAK ÇELİŞKİSİ: Korić, Muvekkit'e dayanarak Cetingrad VE Drežnik'in zaptını 1790 bağlamında anlatır; HE Drežnik 1788 der. HE'nin yere özgü maddesi esas alındı, çelişki tahtaya bildirildi · koordinat OSM way 122070312 (Stari grad Drežnik).",
  s:[{f:"1281-01-01",t:"1527-01-01",d:"macaristan",kaynak:"HE: 1323-1578 Frankapan mülkü"},
     {f:"1527-01-01",t:"1592-01-01",d:"macaristan-habsburg",kaynak:"BOSNA-MACAR-0087 (0087/H-0024): kimlik avusturya → macaristan-habsburg — Habsburg'un bu topraktaki sıfatı Macar/Hırvat KRALIDIR, Avusturya arşidükü değil. TDV budin: 'diğer kısmı ise Macar tahtında hak iddia eden Habsburg hânedanına mensup … Ferdinand’ı (17 Aralık 1526) seçmişti' · TDV hirvatistan: 'Mohaç Muharebesi’nden bir yıl sonra (1527) … Hırvatlar … Habsburg hânedanına mensup I. Ferdinand’ı kral olarak seçtiler' · TDV macaristan: 'Macaristan’da Habsburglar’ın elindeki kısım'. Gün DEĞİŞMEDİ (künye macaristan-habsburg f ile hizalı) · Cetin Meclisi 1 Ocak 1527 · 1578 geçici Osmanlı işgali ('privremeno') modellenmedi"},
     {f:"1791-08-04",t:"1809-10-14",d:"avusturya",kaynak:"Ziştovi 4 Ağustos 1791 (Korić 2016 n.118, 4. madde)"},{f:"1809-10-14",t:"1813-01-01",d:"fransa-cumhuriyet",kaynak:"LZMK `vojna-krajina`: \"Mirom u Schönbrunnu 1809. habsburški posjedi juzno od rijeke Save ušli su u sastav Ilirskih pokrajina ... Potkraj 1813. habsburške su trupe osvojile to područje\" — Sava'nın GÜNEYİ ölçütü · ENKLAV-0072"},{f:"1813-01-01",t:"1918-11-11",d:"macaristan-habsburg",kaynak:"Ziştovi 4 Ağustos 1791 (Korić 2016 n.118, 4. madde) · TDV macaristan (Géza Dávid): '1867'de iki ülke arasında bir uzlaşma meydana geldi. Avusturya-Macaristan monarşisi ortaya çıktı'; Trianon (4 Haziran 1920) Macaristan'ın kaybı, arazi 'Hırvatistan hariç' sayılır. Nokta Macar tacı (Transleithania) toprağı — iç taksimat için akademik alıntı: bulunamadı (denetim/ONCE1281-MACAR-TAC-1004.md). Önceki yazım `avusturya` (Habsburg Avusturya) idi."},
     {f:"1918-11-11",t:"1920-06-04",d:"macaristan-naiplik",kaynak:"F8 (Emre, 5 Eki 2026): de jure devir antlaşma gününde — TDV birinci-dunya-savasi: '4 Haziran 1920'de Macaristan ile Trianon … antlaşmaları imzalandı' · ara dönem: Macar tacı 1918-11-11 → antlaşma (macaristan-naiplik künyesi 1918-11-16 — mevcut çekirdek verisinin 5 günlük emsali)"},
     {f:"1920-06-04",t:"1945-11-29",d:"yugoslavya",kaynak:"F8 (Emre, 5 Eki 2026): de jure devir antlaşma gününde — TDV birinci-dunya-savasi: '4 Haziran 1920'de Macaristan ile Trianon … antlaşmaları imzalandı'"},{f:"1945-11-29",t:"1991-06-25",d:"yugoslavya-federal",kaynak:"Britannica 'Yugoslavia'; Office of the Historian, Milestones 1989-1992 (Breakup of Yugoslavia)"},{f:"1991-06-25",t:"2000-12-31",d:"hirvatistan",kaynak:"Britannica 'Yugoslavia'; Office of the Historian, Milestones 1989-1992 (Breakup of Yugoslavia)"}],
  d:[{f:"1592-01-01",t:"1791-08-04",kesinlik:"yil",kaynak:"HE Drežnik Grad 1592 (YIL). 1683 ('kratak prekid') ve 1697–99 Habsburg aralıkları gün/ay yok — modellenmedi, rapor §5"}],
  isg:[{f:"1788-01-01",t:"1791-08-04",d:"avusturya",kesinlik:"yil",kaynak:"HE Drežnik Grad 'do 1788.' (YIL) · Korić 2016 1790 der — çelişki"}],
  v:[] },

// PRUT ÖKSÜZ HATTI (0083/H-0010) — Besarabya ve Moldova'da Prut'un iki yakasına kaynaklı nokta; AVRUPA-YER 13 Ekim 2026
{ ad:"Kişinev (Chișinău)",isg:[{f:"1806-11-30",t:"1812-05-28",d:"rusya",kaynak:"bogdan · gün komşudan: Akkirman · TDV akkirman (30 Kasım 1806); ESBE «Турецкие войны России»: Mihelson'a Memleketeyn'i işgal emri, 11 Kasım J'de Dinyester geçişi"}], tur:"sehir", lat:47.0105, lon:28.8638, g:1, k:4, m:"Yaş", kaynak:"KONUM: GeoNames (CC BY 4.0) — 47.0105 K · 28.8638 D. AVRUPA-YER 13 Ekim 2026 (0083/H-0010, Emre onayı): Prut 'öksüz hattı' (d1859-ru-rp-prut-kuzey; Bükreş 1812 md. 4, Paris 1856 md. 20 değiştirmedi) iki yakasında nokta yoktu. TDV'de MADDE YOK (arama «Kişinev» → yalnız oguzca, turk (alakasız)); sahiplik zinciri komşu kaydın (Orhei) BÖLGE düzeyindeki dönemlerinden alındı (Boğdan/Rusya/Romanya — kaynakları o kayıtta); ŞEHİR düzeyi hüküm bulunamadı.", kur:"1420-01-01", kesinlik:"yil", neden:"KUTU-P2-1015 (0082/H-0070): kur İLK ANILIŞ (görünme alt sınırı, kuruluş değil) — ESBE «Кишинев»: 'Впервые о нем упоминается в грамоте молдаванского господаря Александра 1420 г.' Önceki altinorda 1281–1359 ve bogdan 1359–1420 dilimleri kırpıldı (tanık yok; toprak komşu peteğe geçer).", s:[{f:"1420-01-01",t:"1456-06-01",d:"bogdan",kesinlik:{f:"yil",t:"gun"}},{f:"1812-05-28",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1918-01-01",d:"sovyet-rusya"},{f:"1918-01-01",t:"1940-06-28",d:"romanya-kralligi"},{f:"1940-06-28",t:"1991-08-27",d:"sovyet-rusya",kaynak:"Britannica 'Moldova'"},{f:"1991-08-27",t:"2000-12-31",d:"moldova",kaynak:"Britannica 'Moldova' 1991-08-27"}], d:[], v:[{f:"1456-06-01",t:"1812-05-28",k:"Boğdan Voyvodalığı",statu:"vassal",kid:"bogdan"}] },
{ ad:"Bălți",isg:[{f:"1806-11-30",t:"1812-05-28",d:"rusya",kaynak:"bogdan · gün komşudan: Akkirman · TDV akkirman (30 Kasım 1806); ESBE «Турецкие войны России»: Mihelson'a Memleketeyn'i işgal emri, 11 Kasım J'de Dinyester geçişi"}], tur:"sehir", lat:47.7617, lon:27.9289, g:0, k:4, m:"Yaş", kaynak:"KONUM: GeoNames (CC BY 4.0) — 47.7617 K · 27.9289 D. AVRUPA-YER 13 Ekim 2026 (0083/H-0010, Emre onayı): Prut 'öksüz hattı' (d1859-ru-rp-prut-kuzey; Bükreş 1812 md. 4, Paris 1856 md. 20 değiştirmedi) iki yakasında nokta yoktu. TDV'de MADDE YOK (arama «Bălți» → madde yok); sahiplik zinciri komşu kaydın (Orhei) BÖLGE düzeyindeki dönemlerinden alındı (Boğdan/Rusya/Romanya — kaynakları o kayıtta); ŞEHİR düzeyi hüküm bulunamadı.", s:[{f:"1281-01-01",t:"1359-01-01",d:"altinorda",kaynak:"ÇIKARIM: TDV bogdan 'XIII. yüzyıldan itibaren de Tatarlar'la Gagauzlar'ın istilâsına uğrayan Moldavya' + TDV bucak (komşu). 1345-1359 Macar markı (Dragoş) yılı TDV'de bulunamadı · bitiş = künye bogdan f — DUNYA-0079"},{f:"1359-01-01",t:"1456-06-01",d:"bogdan"},{f:"1812-05-28",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1918-01-01",d:"sovyet-rusya"},{f:"1918-01-01",t:"1940-06-28",d:"romanya-kralligi"},{f:"1940-06-28",t:"1991-08-27",d:"sovyet-rusya",kaynak:"Britannica 'Moldova'"},{f:"1991-08-27",t:"2000-12-31",d:"moldova",kaynak:"Britannica 'Moldova' 1991-08-27"}], d:[], v:[{f:"1456-06-01",t:"1812-05-28",k:"Boğdan Voyvodalığı",statu:"vassal",kid:"bogdan"}] },
{ ad:"Botoşani",isg:[{"f":"1806-11-30","t":"1812-05-28","d":"rusya","kaynak":"bogdan · gün komşudan: Akkirman · TDV akkirman (30 Kasım 1806); ESBE «Турецкие войны России»: Mihelson'a Memleketeyn'i işgal emri, 11 Kasım J'de Dinyester geçişi"},{"f":"1828-05-07","t":"1834-01-01","d":"rusya","kaynak":"TAKVİM-1015 (Emre #10: atlas günleri Gregoryen, Jülyen gün çevrildi): Jülyen 1828-04-25 (Rus kolordusunun Memleketeyn'e girişi; ESBE «Турецкие войны России» '25 апр.', eski takvim) = Gregoryen 1828-05-07 · ESBE (25 Nisan J) · edirne-antlasmasi · bogdan"},{"f":"1877-04-24","t":"1878-01-31","d":"rusya","kaynak":"doksanuc-harbi (TDV): Rusya 24 Nisan 1877'de savaş ilân etti; «Savaşın başlaması ile birlikte Romanya topraklarına giren ve bu prensliği kendi tarafına çeken Ruslar» · Romanya Rusya'nın MÜTTEFİKİ (romanya, bogdan TDV) — hukuken işgal değil; EMRE KARARI 13 Ekim 2026: ittifaklı Rus ilerleyişi Eflak-Boğdan'da işgal gibi taralı gösterilir (Osmanlı tâbi tonu görünmesin) · bitiş: 31 Ocak 1878 Edirne ateşkesi (doksanuc-harbi TDV); Rus birliklerinin Romanya'dan fiilî çekiliş günü bulunamadı"}], tur:"sehir", lat:47.7486, lon:26.6694, g:0, k:4, m:"Yaş", kaynak:"KONUM: GeoNames (CC BY 4.0) — 47.7486 K · 26.6694 D. AVRUPA-YER 13 Ekim 2026 (0083/H-0010, Emre onayı): Prut 'öksüz hattı' (d1859-ru-rp-prut-kuzey; Bükreş 1812 md. 4, Paris 1856 md. 20 değiştirmedi) iki yakasında nokta yoktu. TDV'de MADDE YOK (arama «Botoşani» → yalnız iorga-nicolae (kişi maddesi)); sahiplik zinciri komşu kaydın (Roman) BÖLGE düzeyindeki dönemlerinden alındı (Boğdan/Rusya/Romanya — kaynakları o kayıtta); ŞEHİR düzeyi hüküm bulunamadı.", s:[{"f":"1281-01-01","t":"1359-01-01","d":"altinorda","kaynak":"ÇIKARIM: TDV bogdan 'XIII. yüzyıldan itibaren de Tatarlar'la Gagauzlar'ın istilâsına uğrayan Moldavya' + TDV bucak (komşu). 1345-1359 Macar markı (Dragoş) yılı TDV'de bulunamadı · bitiş = künye bogdan f — DUNYA-0079"},{"f":"1359-01-01","t":"1456-06-01","d":"bogdan"},{"f":"1877-05-09","t":"1881-03-26","d":"romanya","kaynak":"TDV romanya: '9 Mayıs 1877 tarihinde bağımsızlığını ilân etti' · Plevne'de Osmanlı'ya karşı savaştı · Berlin (1878) yalnız TANIMA günü · PAKET-0076-BITIR-1004 / SINIR-CIZGI-0076 (0076/H-0037·H-0038)"},{"f":"1881-03-26","t":"1947-12-30","d":"romanya-kralligi"},{"f":"1947-12-30","t":"1989-12-22","d":"romanya-halk","kaynak":"LoC Romania Country Study"},{"f":"1989-12-22","t":"2000-12-31","d":"romanya-cumhuriyeti","kaynak":"LoC Romania Country Study"}], d:[], v:[{"f":"1456-06-01","t":"1859-01-24","k":"Boğdan Voyvodalığı","statu":"vassal","kid":"bogdan"},{"f":"1859-01-24","t":"1877-05-09","k":"Birleşik Prenslikler (Romanya)","statu":"vassal","kid":"romanya"}] },
{ ad:"Dorohoi",isg:[{"f":"1806-11-30","t":"1812-05-28","d":"rusya","kaynak":"bogdan · gün komşudan: Akkirman · TDV akkirman (30 Kasım 1806); ESBE «Турецкие войны России»: Mihelson'a Memleketeyn'i işgal emri, 11 Kasım J'de Dinyester geçişi"},{"f":"1828-05-07","t":"1834-01-01","d":"rusya","kaynak":"TAKVİM-1015 (Emre #10: atlas günleri Gregoryen, Jülyen gün çevrildi): Jülyen 1828-04-25 (Rus kolordusunun Memleketeyn'e girişi; ESBE «Турецкие войны России» '25 апр.', eski takvim) = Gregoryen 1828-05-07 · ESBE (25 Nisan J) · edirne-antlasmasi · bogdan"},{"f":"1877-04-24","t":"1878-01-31","d":"rusya","kaynak":"doksanuc-harbi (TDV): Rusya 24 Nisan 1877'de savaş ilân etti; «Savaşın başlaması ile birlikte Romanya topraklarına giren ve bu prensliği kendi tarafına çeken Ruslar» · Romanya Rusya'nın MÜTTEFİKİ (romanya, bogdan TDV) — hukuken işgal değil; EMRE KARARI 13 Ekim 2026: ittifaklı Rus ilerleyişi Eflak-Boğdan'da işgal gibi taralı gösterilir (Osmanlı tâbi tonu görünmesin) · bitiş: 31 Ocak 1878 Edirne ateşkesi (doksanuc-harbi TDV); Rus birliklerinin Romanya'dan fiilî çekiliş günü bulunamadı"}], tur:"sehir", lat:47.9594, lon:26.3978, g:0, k:4, m:"Yaş", kaynak:"KONUM: GeoNames (CC BY 4.0) — 47.9594 K · 26.3978 D. AVRUPA-YER 13 Ekim 2026 (0083/H-0010, Emre onayı): Prut 'öksüz hattı' (d1859-ru-rp-prut-kuzey; Bükreş 1812 md. 4, Paris 1856 md. 20 değiştirmedi) iki yakasında nokta yoktu. TDV'de MADDE YOK (arama «Dorohoi» → 0 sonuç); sahiplik zinciri komşu kaydın (Roman) BÖLGE düzeyindeki dönemlerinden alındı (Boğdan/Rusya/Romanya — kaynakları o kayıtta); ŞEHİR düzeyi hüküm bulunamadı.", s:[{"f":"1281-01-01","t":"1359-01-01","d":"altinorda","kaynak":"ÇIKARIM: TDV bogdan 'XIII. yüzyıldan itibaren de Tatarlar'la Gagauzlar'ın istilâsına uğrayan Moldavya' + TDV bucak (komşu). 1345-1359 Macar markı (Dragoş) yılı TDV'de bulunamadı · bitiş = künye bogdan f — DUNYA-0079"},{"f":"1359-01-01","t":"1456-06-01","d":"bogdan"},{"f":"1877-05-09","t":"1881-03-26","d":"romanya","kaynak":"TDV romanya: '9 Mayıs 1877 tarihinde bağımsızlığını ilân etti' · Plevne'de Osmanlı'ya karşı savaştı · Berlin (1878) yalnız TANIMA günü · PAKET-0076-BITIR-1004 / SINIR-CIZGI-0076 (0076/H-0037·H-0038)"},{"f":"1881-03-26","t":"1947-12-30","d":"romanya-kralligi"},{"f":"1947-12-30","t":"1989-12-22","d":"romanya-halk","kaynak":"LoC Romania Country Study"},{"f":"1989-12-22","t":"2000-12-31","d":"romanya-cumhuriyeti","kaynak":"LoC Romania Country Study"}], d:[], v:[{"f":"1456-06-01","t":"1859-01-24","k":"Boğdan Voyvodalığı","statu":"vassal","kid":"bogdan"},{"f":"1859-01-24","t":"1877-05-09","k":"Birleşik Prenslikler (Romanya)","statu":"vassal","kid":"romanya"}] },

// SIRBİSTAN 1830 TDV'Lİ GRUBU (0075/H-0005, H-0022) — Pasarofça, Valjevo, Ćuprija, Rudnik; AVRUPA-YER 13 Ekim 2026
{ ad:"Pasarofça (Požarevac)", tur:"sehir", lat:44.6213, lon:21.1878, g:0, k:4, m:"Belgrad",
  kaynak:"KONUM: GeoNames 786827 (44.6213 K · 21.1878 D); OSM node/1582764486; Wikidata Q199942 — üç bağımsız kaynak, ayrışma 2 km altı (denetim/SIRP-NOKTA-0930.json). 0075/H-0005 · AVRUPA-YER 13 Ekim 2026 (Emre onayı: yalnız TDV'li 1830 grubu). Sahiplik zinciri BÖLGE düzeyindedir (Semendire/Belgrad paşalığı: TDV semendire, pasarofca-antlasmasi, sirbistan), şehir düzeyi tanıklık yok. Günler: 1439-08-27 · 1459-06-20 TDV semendire; 1444-08-15 TDV semendire (komşu kayıtlar 1444-08-01 taşıyor — ÇELİŞKİ, TDV esas, 14 günlük fark); 1717-08-18 ve 1738-08-01 gün komşudan: Kragujevac/Çaçak/Semendire (TDV semendire «Ağustos 1738»e kadar — ay verir; TDV pasarofca-antlasmasi 21 Temmuz 1718 ANTLAŞMA günüdür, işgal başlangıcı değil); 1739 Belgrad Antlaşması günü komşulardan ALINMADI (bu nokta 1738-08-01'de Osmanlı'ya döner, Kragujevac gibi); 1830-10-17 TDV sirbistan. 1689-1690 ve 1789-1791 Avusturya işgalleri bu nokta için kaynaksız — YAZILMADI. TDV pasarofca-antlasmasi: antlaşma 1718, «Sırbistan’ın Belgrad dahil kuzey kısmı Avusturya’ya» (bölgesel). ",
  s:[{f:"1281-01-01",t:"1439-08-27",d:"sirbistan"},{f:"1444-08-15",t:"1459-06-20",d:"sirp-despotlugu"},{f:"1717-08-18",t:"1738-08-01",d:"avusturya"},{f:"1878-07-13",t:"1882-03-06",d:"sirbistan-prensligi"},{f:"1882-03-06",t:"1918-12-01",d:"sirbistan-kralligi"},{f:"1918-12-01",t:"1923-10-29",d:"yugoslavya"}],
  d:[{f:"1439-08-27",t:"1444-08-15",y:"kusatma"},{f:"1459-06-20",t:"1717-08-18",y:"kusatma"},{f:"1738-08-01",t:"1830-10-17",y:"antlasma"}],
  v:[{f:"1830-10-17",t:"1878-07-13",k:"Sırbistan Prensliği",statu:"vassal",kid:"sirbistan-prensligi"}] },
{ ad:"Valjevo", tur:"sehir", lat:44.2751, lon:19.8982, g:0, k:4, m:"Belgrad",
  kaynak:"KONUM: GeoNames 3188402 (44.2751 K · 19.8982 D); OSM node/307649772; Wikidata Q208015 — üç bağımsız kaynak, ayrışma 2 km altı (denetim/SIRP-NOKTA-0930.json). 0075/H-0005 · AVRUPA-YER 13 Ekim 2026 (Emre onayı: yalnız TDV'li 1830 grubu). Sahiplik zinciri BÖLGE düzeyindedir (Semendire/Belgrad paşalığı: TDV semendire, pasarofca-antlasmasi, sirbistan), şehir düzeyi tanıklık yok. Günler: 1439-08-27 · 1459-06-20 TDV semendire; 1444-08-15 TDV semendire (komşu kayıtlar 1444-08-01 taşıyor — ÇELİŞKİ, TDV esas, 14 günlük fark); 1717-08-18 ve 1738-08-01 gün komşudan: Kragujevac/Çaçak/Semendire (TDV semendire «Ağustos 1738»e kadar — ay verir; TDV pasarofca-antlasmasi 21 Temmuz 1718 ANTLAŞMA günüdür, işgal başlangıcı değil); 1739 Belgrad Antlaşması günü komşulardan ALINMADI (bu nokta 1738-08-01'de Osmanlı'ya döner, Kragujevac gibi); 1830-10-17 TDV sirbistan. 1689-1690 ve 1789-1791 Avusturya işgalleri bu nokta için kaynaksız — YAZILMADI. ",
  s:[{f:"1281-01-01",t:"1439-08-27",d:"sirbistan"},{f:"1444-08-15",t:"1459-06-20",d:"sirp-despotlugu"},{f:"1717-08-18",t:"1738-08-01",d:"avusturya"},{f:"1878-07-13",t:"1882-03-06",d:"sirbistan-prensligi"},{f:"1882-03-06",t:"1918-12-01",d:"sirbistan-kralligi"},{f:"1918-12-01",t:"1923-10-29",d:"yugoslavya"}],
  d:[{f:"1439-08-27",t:"1444-08-15",y:"kusatma"},{f:"1459-06-20",t:"1717-08-18",y:"kusatma"},{f:"1738-08-01",t:"1830-10-17",y:"antlasma"}],
  v:[{f:"1830-10-17",t:"1878-07-13",k:"Sırbistan Prensliği",statu:"vassal",kid:"sirbistan-prensligi"}] },
{ ad:"Ćuprija", tur:"sehir", lat:43.9275, lon:21.37, g:0, k:4, m:"Belgrad",
  kaynak:"KONUM: GeoNames 791678 (43.9275 K · 21.37 D); OSM node/1599441293; Wikidata Q336475 — üç bağımsız kaynak, ayrışma 2 km altı (denetim/SIRP-NOKTA-0930.json). 0075/H-0005 · AVRUPA-YER 13 Ekim 2026 (Emre onayı: yalnız TDV'li 1830 grubu). Sahiplik zinciri BÖLGE düzeyindedir (Semendire/Belgrad paşalığı: TDV semendire, pasarofca-antlasmasi, sirbistan), şehir düzeyi tanıklık yok. Günler: 1439-08-27 · 1459-06-20 TDV semendire; 1444-08-15 TDV semendire (komşu kayıtlar 1444-08-01 taşıyor — ÇELİŞKİ, TDV esas, 14 günlük fark); 1717-08-18 ve 1738-08-01 gün komşudan: Kragujevac/Çaçak/Semendire (TDV semendire «Ağustos 1738»e kadar — ay verir; TDV pasarofca-antlasmasi 21 Temmuz 1718 ANTLAŞMA günüdür, işgal başlangıcı değil); 1739 Belgrad Antlaşması günü komşulardan ALINMADI (bu nokta 1738-08-01'de Osmanlı'ya döner, Kragujevac gibi); 1830-10-17 TDV sirbistan. 1689-1690 ve 1789-1791 Avusturya işgalleri bu nokta için kaynaksız — YAZILMADI. Ad eşleşmesi taraması: Köprühisar/Veles/Uzunköprü yanlış pozitif (3 km içinde nokta YOK). ",
  s:[{f:"1281-01-01",t:"1439-08-27",d:"sirbistan"},{f:"1444-08-15",t:"1459-06-20",d:"sirp-despotlugu"},{f:"1717-08-18",t:"1738-08-01",d:"avusturya"},{f:"1878-07-13",t:"1882-03-06",d:"sirbistan-prensligi"},{f:"1882-03-06",t:"1918-12-01",d:"sirbistan-kralligi"},{f:"1918-12-01",t:"1923-10-29",d:"yugoslavya"}],
  d:[{f:"1439-08-27",t:"1444-08-15",y:"kusatma"},{f:"1459-06-20",t:"1717-08-18",y:"kusatma"},{f:"1738-08-01",t:"1830-10-17",y:"antlasma"}],
  v:[{f:"1830-10-17",t:"1878-07-13",k:"Sırbistan Prensliği",statu:"vassal",kid:"sirbistan-prensligi"}] },
{ ad:"Rudnik", tur:"sehir", lat:44.1398, lon:20.494, g:0, k:4, m:"Belgrad",
  kaynak:"KONUM: GeoNames 786203 (44.1398 K · 20.494 D); OSM node/355059927; Wikidata Q2479848 — üç bağımsız kaynak, ayrışma 2 km altı (denetim/SIRP-NOKTA-0930.json). 0075/H-0005 · AVRUPA-YER 13 Ekim 2026 (Emre onayı: yalnız TDV'li 1830 grubu). Sahiplik zinciri BÖLGE düzeyindedir (Semendire/Belgrad paşalığı: TDV semendire, pasarofca-antlasmasi, sirbistan), şehir düzeyi tanıklık yok. Günler: 1439-08-27 · 1459-06-20 TDV semendire; 1444-08-15 TDV semendire (komşu kayıtlar 1444-08-01 taşıyor — ÇELİŞKİ, TDV esas, 14 günlük fark); 1717-08-18 ve 1738-08-01 gün komşudan: Kragujevac/Çaçak/Semendire (TDV semendire «Ağustos 1738»e kadar — ay verir; TDV pasarofca-antlasmasi 21 Temmuz 1718 ANTLAŞMA günüdür, işgal başlangıcı değil); 1739 Belgrad Antlaşması günü komşulardan ALINMADI (bu nokta 1738-08-01'de Osmanlı'ya döner, Kragujevac gibi); 1830-10-17 TDV sirbistan. 1689-1690 ve 1789-1791 Avusturya işgalleri bu nokta için kaynaksız — YAZILMADI. TDV sirbistan: Semendire sancağı nahiyeleri arasında «Rudnik» adıyla sayılır. ",
  s:[{f:"1281-01-01",t:"1439-08-27",d:"sirbistan"},{f:"1444-08-15",t:"1459-06-20",d:"sirp-despotlugu"},{f:"1717-08-18",t:"1738-08-01",d:"avusturya"},{f:"1878-07-13",t:"1882-03-06",d:"sirbistan-prensligi"},{f:"1882-03-06",t:"1918-12-01",d:"sirbistan-kralligi"},{f:"1918-12-01",t:"1923-10-29",d:"yugoslavya"}],
  d:[{f:"1439-08-27",t:"1444-08-15",y:"kusatma"},{f:"1459-06-20",t:"1717-08-18",y:"kusatma"},{f:"1738-08-01",t:"1830-10-17",y:"antlasma"}],
  v:[{f:"1830-10-17",t:"1878-07-13",k:"Sırbistan Prensliği",statu:"vassal",kid:"sirbistan-prensligi"}] },

// BERLİN 1878 (PAKET-0076-BITIR B sınıfı, AVRUPA-YER 13 Ekim 2026): İvranye (Vranje)
// isg YAZILMADI: TDV ivranye 'Doksanüç Harbi’nin başlamasıyla … Sırp ordusu tarafından işgal edildi' — GÜN/AY yok.
// isg YAZILMADI: TDV ivranye 'I. Dünya Savaşı’nda İvranye sert bir Bulgar işgaliyle karşılaştı' — tarih yok.
{ ad:"İvranye (Vranje)", kaynak:"BERLİN 1878 B sınıfı (PAKET-0076-BITIR, AVRUPA-YER 13 Ekim 2026) — KONUM: GeoNames (şehir/idari merkez satırı) · SAHİPLİK/DÖNEM: TDV ivranye (M. Kiel) · Berlin Antlaşması md. 36; her dönemin kendi kaynağı dönemde yazılı, yorum/komşu deseni olan halkalar «⚠️» ile işaretli (denetim/PAKET-0076-BITIR-berlin-noktalar.md)", tur:"sehir", lat:42.551, lon:21.900, g:0, k:4, m:"Sofya",
  s:[{f:"1281-01-01",t:"1402-01-01",d:"sirbistan-nemanjic",kaynak:"TDV ivranye (M. Kiel): '1207’de Nemanja’nın oğlu ve vârisi Stefan burayı kesin biçimde topraklarına kattı' · ⚠️ 1371 sonrası 'Uglješa Vladković, Vranje’nin merkez olduğu küçük bir prenslik kurdu', 1389 sonrası Lazareviç himayesi — prensliğin künyesi YOK, Sırp çerçevesinde gösterildi · bitiş 1402-01-01 künye ucu (sirbistan-nemanjic t)"},
     {f:"1402-01-01",t:"1413-01-01",d:"sirp-despotlugu",kaynak:"TDV ivranye: Lazareviç himayesi · başlangıç künye ucu (sirp-despotlugu f)"},
     {f:"1413-01-01",t:"1413-07-05",d:"musa-celebi",kesinlik:"ay",kaynak:"TDV ivranye: 'Ocak 1413’te Fetret dönemi sırasında Mûsâ Çelebi Vranje’yi ele geçirip' (AY) · bitiş Çamurlu 1413-07-05 (TDV musa-celebi)"},
     {f:"1413-07-05",t:"1428-01-01",d:"sirp-despotlugu",kaynak:"⚠️ Niş deseni (TDV nis: 1413'te Çelebi Mehmed Niş'i Lazareviç'e verdi) · TDV ivranye: 'Mayıs 1414’te Çelebi Sultan Mehmed’in bir elçisi … Vranje ve Sofya arasında kalan alanın … Stefan’a iadesini planladı' — Temmuz 1413–Mayıs 1414 arası sahiplik kaynakta AÇIK DEĞİL"},
     {f:"1444-11-01",t:"1455-06-01",d:"sirp-despotlugu",kesinlik:"ay",kaynak:"TDV ivranye: 'Varna Savaşı’ndan sonra Kasım 1444’te … 1428’de Brankoviç’ten alınan topraklar II. Murad tarafından kendisine iade edildi' (AY)"},
     {f:"1878-07-13",t:"1882-03-06",d:"sirbistan-prensligi",kaynak:"TDV ivranye: 'Berlin Antlaşması ile birlikte resmen Sırp Krallığı’na bağlandı' · Berlin md. 36 (mjp.univ-perp.fr metni) · 1882-03-06 künye geçişi"},
     {f:"1882-03-06",t:"1918-12-01",d:"sirbistan-kralligi"},
     {f:"1918-12-01",t:"1923-10-29",d:"yugoslavya"}],
  d:[{f:"1428-01-01",t:"1444-11-01",kesinlik:"yil",kaynak:"TDV ivranye: 1428 Alacahisar'ın alınması sırasında 'Uglješa Vladković’in küçük prensliği Osmanlılar tarafından zaptedildi ve Köstendil sancağına bağlandı. Ancak Osmanlı kaynaklarında bu bilgiye rastlanmamaktadır' — YIL"},
     {f:"1455-06-01",t:"1878-07-13",kesinlik:"ay",kaynak:"TDV ivranye: 'Vranje’yi (İvranye) kesin biçimde Osmanlı topraklarına kattı (Haziran 1455)' · Ilıca-Köstendil sancağı · bitiş Berlin 13 Temmuz 1878 (TDV berlin-antlasmasi)"}],
  v:[] },

// BERLİN 1878 (PAKET-0076-BITIR B sınıfı, AVRUPA-YER 13 Ekim 2026): Leskofça (Leskovac)
// isg YAZILMADI: 1877-78 Sırp işgalinin günü kaynakta yok (Şehirköy/Pirot deseni: d: Berlin'e kadar).
{ ad:"Leskofça (Leskovac)", kaynak:"BERLİN 1878 B sınıfı (PAKET-0076-BITIR, AVRUPA-YER 13 Ekim 2026) — KONUM: GeoNames (şehir/idari merkez satırı) · SAHİPLİK/DÖNEM: TDV leskofca (Kiel) · TDV nis · Berlin Antlaşması md. 36; her dönemin kendi kaynağı dönemde yazılı, yorum/komşu deseni olan halkalar «⚠️» ile işaretli (denetim/PAKET-0076-BITIR-berlin-noktalar.md)", tur:"sehir", lat:42.998, lon:21.946, g:0, k:4, m:"Sofya",
  s:[{f:"1281-01-01",t:"1402-01-01",d:"sirbistan-nemanjic",kaynak:"TDV leskofca (M. Kiel): 'Leskovac’a doğrudan yapıldığı bilinen ilk atıf, … Hilendar Manastırı’na mülk şeklinde bağışlandığı 1303-1304 yıllarına aittir' · ⚠️ 1281-1303 arası açık değil; TDV nis: 1183 sonrası 'Niş Sırp Devleti’ne dahil oldu' (bölge) · bitiş künye ucu"},
     {f:"1402-01-01",t:"1428-01-01",d:"sirp-despotlugu"},
     {f:"1878-07-13",t:"1882-03-06",d:"sirbistan-prensligi",kaynak:"TDV leskofca: 'Sırp Devleti’nin ordusu Niş, Urkup, Kurşunlu ve İvranye ile birlikte Leskofça’yı da ele geçirdi … 1878’de imzalanan Berlin Antlaşması bu durumu teyit eder' · Berlin md. 36 (Veternica/Morava havzası Sırbistan'a)"},
     {f:"1882-03-06",t:"1918-12-01",d:"sirbistan-kralligi"},
     {f:"1918-12-01",t:"1923-10-29",d:"yugoslavya"}],
  d:[{f:"1428-01-01",t:"1878-07-13",kesinlik:"yil",kaynak:"TDV leskofca: 'Dubočica ve yöresi, 831’de (1428) II. Murad tarafından … Kruševac (Alacahisar) … ile birlikte ele geçirildi' · ⚠️ AYNI MADDE: 'Dubočica ve Toplice bölgesi büyük ihtimalle … (1433) Osmanlı hâkimiyetine girdi' — İÇ ÇELİŞKİ, 1428 seçildi (kesin cümle) · 1444 Segedin'de 'Kruševac ve onunla beraber Dubočica, Osmanlı tarafında kaldı' · 1445 tahrir · 1451-56 Mara'ya miras (Osmanlı içi apanaj, d: sürdü)"}],
  v:[] },

// BERLİN 1878 (PAKET-0076-BITIR B sınıfı, AVRUPA-YER 13 Ekim 2026): Kurşunlu (Kuršumlija)
{ ad:"Kurşunlu (Kuršumlija)", kaynak:"BERLİN 1878 B sınıfı (PAKET-0076-BITIR, AVRUPA-YER 13 Ekim 2026) — KONUM: GeoNames (şehir/idari merkez satırı) · SAHİPLİK/DÖNEM: TDV leskofca (Toplice 1433 «muhtemel»; 1877-78 Sırp ordusu Kurşunlu'yu aldı) · Berlin Antlaşması md. 36; her dönemin kendi kaynağı dönemde yazılı, yorum/komşu deseni olan halkalar «⚠️» ile işaretli (denetim/PAKET-0076-BITIR-berlin-noktalar.md)", tur:"sehir", lat:43.138, lon:21.273, g:0, k:4, m:"Sofya",
  s:[{f:"1281-01-01",t:"1402-01-01",d:"sirbistan-nemanjic",kaynak:"⚠️ KASABA İÇİN KAYNAK BULUNAMADI — TDV nis: 1183 sonrası 'Niş Sırp Devleti’ne dahil oldu' (bölge → kasaba taşıması)"},
     {f:"1402-01-01",t:"1433-01-01",d:"sirp-despotlugu"},
     {f:"1878-07-13",t:"1882-03-06",d:"sirbistan-prensligi",kaynak:"TDV leskofca + TDV ivranye: 'Kurşunlu (Kuršumlija)' Sırp ordusunca alındı, Berlin teyit etti · Berlin md. 36 (Toplica havzası Sırbistan'a, 'laissant Prepolac à la Turquie')"},
     {f:"1882-03-06",t:"1918-12-01",d:"sirbistan-kralligi"},
     {f:"1918-12-01",t:"1923-10-29",d:"yugoslavya"}],
  d:[{f:"1433-01-01",t:"1878-07-13",kesinlik:"yil",kaynak:"TDV leskofca: 'Dubočica ve Toplice bölgesi büyük ihtimalle … (1433) içerisinde Osmanlı hâkimiyetine girdi' (Kurşunlu Toplica havzasında) · 'Alacahisar, Dubočica ve Toplice’ye ait Osmanlı tahrir parçası buraların … (Ağustos 1445), Ekim 1446 ve Mart 1447’de Osmanlılar’ın elinde olduğunu … gösterir' · ⚠️ 'büyük ihtimalle'"}],
  v:[] },

// BERLİN 1878 (PAKET-0076-BITIR B sınıfı, AVRUPA-YER 13 Ekim 2026): Ürküp (Prokuplje)
{ ad:"Ürküp (Prokuplje)", kaynak:"BERLİN 1878 B sınıfı (PAKET-0076-BITIR, AVRUPA-YER 13 Ekim 2026) — KONUM: GeoNames (şehir/idari merkez satırı) · SAHİPLİK/DÖNEM: TDV leskofca (Toplice 1433 «muhtemel»; 1877-78 Sırp ordusu «Urkup»u aldı) · Berlin Antlaşması md. 36; her dönemin kendi kaynağı dönemde yazılı, yorum/komşu deseni olan halkalar «⚠️» ile işaretli (denetim/PAKET-0076-BITIR-berlin-noktalar.md)", tur:"sehir", lat:43.234, lon:21.588, g:0, k:4, m:"Sofya",
  s:[{f:"1281-01-01",t:"1402-01-01",d:"sirbistan-nemanjic",kaynak:"⚠️ KASABA İÇİN KAYNAK BULUNAMADI — TDV nis (bölge)"},
     {f:"1402-01-01",t:"1433-01-01",d:"sirp-despotlugu"},
     {f:"1878-07-13",t:"1882-03-06",d:"sirbistan-prensligi",kaynak:"TDV ivranye: 'Ürküp’teki (Prokuplje) bütün müslüman halk' — Sırp işgali, Berlin · TDV leskofca 'Urkup' · Berlin md. 36"},
     {f:"1882-03-06",t:"1918-12-01",d:"sirbistan-kralligi"},
     {f:"1918-12-01",t:"1923-10-29",d:"yugoslavya"}],
  d:[{f:"1433-01-01",t:"1878-07-13",kesinlik:"yil",kaynak:"TDV leskofca: Toplice 'büyük ihtimalle' 1433; 1445-47 tahrirde Osmanlı elinde (Kurşunlu ile aynı)"}],
  v:[] },

// BERLİN 1878 (PAKET-0076-BITIR B sınıfı, AVRUPA-YER 13 Ekim 2026): Bar (Antivari)
// koordinat: Stari Bar (Osmanlı kasabası; bugünkü Novi Bar 42.094/19.098 değil)
{ ad:"Bar (Antivari)", kaynak:"BERLİN 1878 B sınıfı (PAKET-0076-BITIR, AVRUPA-YER 13 Ekim 2026) — KONUM: GeoNames (şehir/idari merkez satırı; Bar için Osmanlı kasabası Stari Bar) · SAHİPLİK/DÖNEM: TDV arnavutluk (1571) · Berlin Antlaşması md. 29 (Fransızca metin, mjp.univ-perp.fr); her dönemin kendi kaynağı dönemde yazılı, yorum/komşu deseni olan halkalar «⚠️» ile işaretli (denetim/PAKET-0076-BITIR-berlin-noktalar.md)", tur:"liman", lat:42.097, lon:19.136, g:0, k:4, m:"İşkodra",
  
  s:[{f:"1281-01-01",t:"1356-01-01",d:"sirbistan-nemanjic",kaynak:"TDV karadag: '1189 yılında Sırbistan hâkimiyetini sağlamlaştırdı' · Britannica 'Bar': 'its archbishop acquired the title primate of Serbia' (XIV. yy) · bitiş zeta künye f ⚠️ (Leş deseni)"},
     {f:"1356-01-01",t:"1421-01-01",d:"zeta",kaynak:"TDV karadag: Zeta 'büyük oranda bağımsızlığını elde etti' · '1421’de Balšići ailesinin son idarecisi Zeta’yı miras olarak Sırp despotuna bıraktı' (YIL) · ⚠️ TDV arnavutluk: 1403 sonrası Venedik 'Ülgün, Bar (Antivari) ve Budua’yı da hâkimiyeti altına aldı' — Venedik ara dönemi süresi BULUNAMADI, yazılmadı"},
     {f:"1421-01-01",t:"1443-01-01",d:"sirp-despotlugu",kesinlik:"yil",kaynak:"TDV karadag (1421 miras) · Britannica 'Bar': 'ruled from Venice (1443–1571)' — YIL"},
     {f:"1443-01-01",t:"1571-01-01",d:"venedik",kesinlik:"yil",kaynak:"Britannica 'Bar': 'It was ruled from Venice (1443–1571) and then by the Ottoman Turks (1571–1878)'"},
     {f:"1878-07-13",t:"1918-11-26",d:"karadag",kaynak:"Berlin md. 29 (mjp.univ-perp.fr): 'Antivari et son littoral sont annexés au Monténégro' · EB1911: article xxviii … 'Antivari'"},
     {f:"1918-11-26",t:"1923-10-29",d:"yugoslavya"}],
  d:[{f:"1571-01-01",t:"1878-07-13",kesinlik:"yil",kaynak:"TDV arnavutluk: 'tam hâkimiyet ise 1571’de Bar (Antivari) ve Ülgün’ün alınmasıyla kurulmuştur' · Britannica 'Bar' (1571–1878)"}],
  v:[],
  isg:[{f:"1878-01-01",t:"1878-07-13",d:"karadag",kesinlik:"yil",kaynak:"Britannica 'Bar': 'Partly ruined in 1878 when the Montenegrins wrested it from the Turks' — YIL, gün yok · TDV karadag: 'Savaşın sonlarına doğru Nikšić, Podgorica, Bar’ı aldı' · ⚠️ İSTEĞE BAĞLI: Podgorica bu işgali yazmıyor"}] },

// BERLİN 1878 (PAKET-0076-BITIR B sınıfı, AVRUPA-YER 13 Ekim 2026): Lofça (Loveč)
// ⚠️ İLK İŞGAL (5→15 Haziran 1877) YAZILMADI: Rus ordusunun Tuna'yı Ziştovi'de geçişi Haziran 1877
//    sonlarıdır; 'Haziran' bir ay kayması (Temmuz?) olabilir — kaynak kendi içinde şüpheli, ikinci
//    kaynak bulunamadı.
{ ad:"Lofça (Loveč)", kaynak:"BERLİN 1878 B sınıfı (PAKET-0076-BITIR, AVRUPA-YER 13 Ekim 2026) — KONUM: GeoNames (şehir/idari merkez satırı) · SAHİPLİK/DÖNEM: TDV lofca (Kiel; Rus işgali 23 Ağustos 1877) · TDV bulgaristan; her dönemin kendi kaynağı dönemde yazılı, yorum/komşu deseni olan halkalar «⚠️» ile işaretli (denetim/PAKET-0076-BITIR-berlin-noktalar.md)", tur:"sehir", lat:43.132, lon:24.718, g:0, k:4, m:"Sofya",
  s:[{f:"1281-01-01",t:"1393-01-01",d:"bulgar-carligi",kaynak:"TDV lofca (M. Kiel): 1187 'ikinci Bulgar Çarlığı’nın başlangıcı anlamına gelen Loveč/Lofça barışı' · 'Çar İvan Şişman’ın kalelerinin listesi'"},
     {f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi",kaynak:"⚠️ fetret bölge deseni (Plevne/Tırnova/Niğbolu) — kasaba düzeyinde ölçülmedi"},
     {f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},
     {f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},
     {f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},
     {f:"1908-10-05",t:"1923-10-29",d:"bulgaristan-kralligi",kaynak:"TDV bulgaristan: 'Bulgaristan 5 Ekim 1908 tarihinde bağımsızlığını ilân ettikten sonra'"}],
  d:[{f:"1393-01-01",t:"1402-07-28",kesinlik:"yil",kaynak:"TDV lofca: 'Şişman’ın bütün eyaletleriyle birlikte bu kalenin Yıldırım Bayezid’in orduları tarafından 795’te (1393) fethedildiği sanılmaktadır' ⚠️ 'sanılmaktadır' · Bulgar tarihçiliğinin 1474'ü Bosna'daki Loveč'tir (Kiel)"},
     {f:"1413-07-05",t:"1878-07-13"}],
  v:[{f:"1878-07-13",t:"1908-10-05",k:"Bulgaristan Prensliği",statu:"vassal",kid:"bulgaristan-prensligi",kaynak:"Berlin md. 2 (Tuna–Balkan arası prenslik) · TDV lofca: '1880’deki ilk Bulgar resmî nüfus sayımına göre'"}],
  isg:[{f:"1877-08-23",t:"1878-07-13",d:"rusya",kaynak:"TDV lofca: 'Türk-Rus savaşı sırasında Lofça 5 Haziran 1877’de Ruslar tarafından işgal edildi. Rifat Paşa kumandasındaki Osmanlılar’ın 15 Haziran’da Ruslar’ı geri püskürtmesine rağmen şehir 23 Ağustos’ta terkedildi' · TDV günü olduğu gibi (takvimi belirtilmemiş)"}] },

// BERLİN 1878 (PAKET-0076-BITIR B sınıfı, AVRUPA-YER 13 Ekim 2026): İslimye (Sliven)
// isg YAZILMADI: 1877-78 Rus işgali — TDV islimye yalnız 'savaş sırasında camilerin çoğunu yıktılar' der, tarih yok.
{ ad:"İslimye (Sliven)", kaynak:"BERLİN 1878 B sınıfı (PAKET-0076-BITIR, AVRUPA-YER 13 Ekim 2026) — KONUM: GeoNames (şehir/idari merkez satırı) · SAHİPLİK/DÖNEM: TDV islimye · TDV bulgaristan (Doğu Rumeli vilâyeti sancakları arasında İslimye); her dönemin kendi kaynağı dönemde yazılı, yorum/komşu deseni olan halkalar «⚠️» ile işaretli (denetim/PAKET-0076-BITIR-berlin-noktalar.md)", tur:"sehir", lat:42.686, lon:26.326, g:0, k:3, m:"Edirne",
  s:[{f:"1281-01-01",t:"1370-01-01",d:"bulgar-carligi",kaynak:"⚠️ TDV islimye: 'XIV. yüzyılda Bizans-Bulgar sınırında yer alan bu küçük yerleşim' — 1281'de HANGİ TARAFTA olduğu kaynakta yok; komşu Eski Zağra/Elhova deseni (Bulgar)"},
     {f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi",kaynak:"⚠️ fetret bölge deseni (Filibe/Eski Zağra)"},
     {f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},
     {f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},
     {f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},
     {f:"1885-09-18",t:"1908-10-05",d:"bulgaristan-prensligi",kaynak:"TDV bulgaristan: 'Prenslik 1885’te Doğu Rumeli vilâyetini de topraklarına kattı' — YIL; gün 1885-09-18 KÜNYEDEN devralındı (sarki-rumeli t:, künyenin kaynağı 'standart akademik kaynak') — D210 bildirimi · komşu Filibe/Eski Zağra ile aynı gün"},
     {f:"1908-10-05",t:"1923-10-29",d:"bulgaristan-kralligi",kaynak:"TDV bulgaristan: 5 Ekim 1908"}],
  d:[{f:"1370-01-01",t:"1402-07-28",kesinlik:"yil",kaynak:"TDV islimye: 'Osmanlı hâkimiyetine geçişi 1370’te veya bundan kısa bir süre sonra gerçekleşmiştir. Burası muhtemelen … uç beyleri tarafından alınmıştı. Ancak bu konuda ilk Osmanlı kaynaklarında herhangi bir bilgi yoktur'"},
     {f:"1413-07-05",t:"1878-07-13"}],
  v:[{f:"1878-07-13",t:"1885-09-18",k:"Şarkî Rumeli vilâyeti",statu:"vassal",kid:"sarki-rumeli",kaynak:"TDV bulgaristan: 'Filibe, İslimye, Eski Zağra, Tatarpazarcığı, Burgaz ve Hasköy sancaklarından müteşekkil Doğu Rumeli vilâyeti oluşturuldu'"}] },

// BERLİN 1878 (PAKET-0076-BITIR B sınıfı, AVRUPA-YER 13 Ekim 2026): Ziştovi (Svishtov)
// isg YAZILMADI: Britannica 'damaged several times and sacked by the Russians in 1878' — işgal başı (Rus Tuna geçişi 1877) günü kaynakta yok.
{ ad:"Ziştovi (Svishtov)", kaynak:"BERLİN 1878 B sınıfı (PAKET-0076-BITIR, AVRUPA-YER 13 Ekim 2026) — KONUM: GeoNames (şehir/idari merkez satırı) · SAHİPLİK/DÖNEM: TDV zistova (Neşrî; 1388) · TDV bulgaristan; her dönemin kendi kaynağı dönemde yazılı, yorum/komşu deseni olan halkalar «⚠️» ile işaretli (denetim/PAKET-0076-BITIR-berlin-noktalar.md)", tur:"liman", lat:43.619, lon:25.350, g:0, k:4, m:"Sofya",
  s:[{f:"1281-01-01",t:"1388-01-01",d:"bulgar-carligi",kaynak:"TDV zistova (M. Kiel): 1385 'Zvista kasabası' · Britannica 'Svishtov': birinci-ikinci Bulgar devletleri dönemi · ⚠️ 1281 sahibi açık cümleyle yok (Tırnova çarlığının Tuna kıyısı)"},
     {f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi",kaynak:"⚠️ fetret bölge deseni"},
     {f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},
     {f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},
     {f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},
     {f:"1908-10-05",t:"1923-10-29",d:"bulgaristan-kralligi"}],
  d:[{f:"1388-01-01",t:"1402-07-28",kesinlik:"yil",kaynak:"TDV zistova: 'Neşrî’nin naklettiğine göre Vezîriâzam Çandarlı Ali Paşa’nın 1388’deki kış seferi esnasında Ziştovi Kalesi birkaç günlük direnişin ardından teslim oldu' · kronolojide 1388-01-01 Çandarlı maddesi VAR"},
     {f:"1413-07-05",t:"1878-07-13"}],
  v:[{f:"1878-07-13",t:"1908-10-05",k:"Bulgaristan Prensliği",statu:"vassal",kid:"bulgaristan-prensligi",kaynak:"Berlin md. 2"}] },

// ═══ KAFKAS ANA SIRTI — "SIRT, YERLEŞİM YOK" BEYANI (0083/H-0003 · H-0004, Emre kararı 13 Ekim 2026) ═══
// Sohum'un kuzeydoğusundaki (Gürcistan/Abhazya ↔ Kabartay/Rusya, ~41,5°D 43,8°K → 42,6°D 43,1°K) ve Kaheti ile
// Dağıstan arasındaki (~45,6°D 42,7°K → 47,2°D 41,9°K) ince boş şerit VERİ EKSİĞİ DEĞİL, ana sırtın kendisidir:
//   · şeritlerin 50 km içinde 0 yerleşim noktası var (en yakın: Sohum 95-110 km · Zagem 93-112 km · Tarki 104-130 km),
//   · iki yaka aynı devlete geçince (1815) şerit kapanır ⇒ motor doğru çalışıyor (denetim/PAKET-0083-A-BOS-BOLGE.md).
// KARAR: kaynaksız aday nokta (Mestia/Svaneti, Avar-Hunzah) YAZILMADI - uydurma nokta eklemek şeridi "doldurur" ama
// kaynağı olmayan bir yerleşimi kullanıcıya gerçekmiş gibi gösterir. Boşluk BİLEREK bırakıldı; "sırt - yerleşim yok" burada
// beyan edilir. Kaynaklı yerleşim (Svan/Avar-Didoy toplulukları) bulunursa nokta olarak eklenir ve bu beyan kalkar.
// ⚠️ Arayüzde bu beyanı gösteren bir yüzey YOK (bos_alanlar.js 'insansiz' cinsi çizilmez) - borç olarak burada.

// ═══ KUTU-B-1014 — TUNA ROMEN KIYISI + DOBRUCA NOKTALARI ═══
// Kutu: 0077/H-0013 · 0077/H-0066 · 0082/H-0077 · 0085/H-0012 (Niğbolu karşısı, Romen kıyısı noktasızdı) ·
//       0076/H-0047 · 0076/H-0050 (Dobruca: Tulça, Hırsova, Mangalya, Balçık, Tutrakan).
// Mükerrer taraması: normalleştirilmiş ad + 3 km → 0 (en yakın: Kule–Niğbolu 4,9 km · Zimnicea–Ziştovi 4 km ·
//   Calafat–Vidin 4,3 km · Oltenița–Tutrakan 4,9 km). Koordinatlar: GeoNames şehir merkezi.
// 🔴 BEYAN — BÖLGE SAHİBİ YAKLAŞIKLIĞI: Eflak kıyısı noktalarının (Kule dışında) ve Dobruca noktalarının 1419 öncesi
//   kendi şehir düzeyi tanıklığı YOK; zincir bölge düzeyindeki TDV cümlelerinden kurulur (TDV eflak: 1330 öncesi Macar
//   üstünlüğü, 1330 bağımsızlık; TDV kostence/tulca: 1402 Mircea, 1419 Osmanlı). Osmanlı rayası olmayan Eflak
//   kasabaları (TDV yergogu: Eflak rayaları yalnız Turnu, Yergöğü, İbrail) Eflak voyvodalığının tâbi zincirini izler.
//   Prenslik çapındaki Rus işgalleri (1806-12, 1828-34, 1877-78) Bükreş kaydının günleriyle yazıldı (aynı süreç).
//   1789-91 Avusturya işgali (yalnız Bükreş'te var) ve Dobruca'daki Rus işgalleri (1809-12, 1828-29, 1877-78) bu
//   noktalara YAZILMADI — şehir düzeyi gün kaynakta bulunamadı.
{ ad:"Kule (Turnu Măgurele)", kaynak:"TDV yergogu + TDV nigbolu + TDV eflak; L. Maxim 'Raiaua Turnu (1419-1829)' (2006) — KUTU-B-1014", tur:"kale", lat:43.749, lon:24.871, g:0, k:0,
  s:[{f:"1281-01-01",t:"1330-01-01",d:"macaristan",kaynak:"BEYAN bölge sahibi: TDV eflak 'Macarlar'ı 1330 yılında Posada mevkiinde yenerek istiklâlini ilân etti' (bölge düzeyi; şehir düzeyi hüküm bulunamadı)"},
     {f:"1330-01-01",t:"1420-01-01",d:"eflak",kesinlik:{f:"yil",t:"yil"},kaynak:"TDV eflak (1330) · t: TDV yergogu (aşağıda)"},
     {f:"1877-05-09",t:"1881-03-26",d:"romanya",kaynak:"TDV romanya: '9 Mayıs 1877 tarihinde bağımsızlığını ilân etti'"},
     {f:"1881-03-26",t:"1947-12-30",d:"romanya-kralligi"},
     {f:"1947-12-30",t:"1989-12-22",d:"romanya-halk",kaynak:"LoC Romania Country Study"},
     {f:"1989-12-22",t:"2000-12-31",d:"romanya-cumhuriyeti",kaynak:"LoC Romania Country Study"}],
  d:[{f:"1420-01-01",t:"1829-09-14",kesinlik:{f:"yil",t:"gun"},kaynak:"TDV yergogu: Yergöğü '1417'de değil 1420'de Osmanlılar'ca ele geçirildi' · 'Ayrıca Tuna'nın sağ kıyısındaki Turnu (Kule/Holovnik) ve Orşova … ilhak edildi' (TDV 'sağ kıyı' diyor; Turnu sol kıyıdadır) — YIL · L. Maxim, 'Raiaua Turnu (1419-1829)' (doktora tezi, Ovidius Üniv. 2006; Micu, Buletinul Muzeului Județean Teleorman 9 (2017) atfıyla) — 1419/1420 aralığı · TDV nigbolu: Halovnik (bugün Turnu Măgurele) kalesini Bayezid tekrar inşa ettirdi · t: TDV yergogu 'Edirne Antlaşması'na göre (2-14 Eylül 1829) İbrâil ve Kule/Turnu ile Eflak Prensliği'ne bırakıldı' · ⚠️ 1810-11 ve 1828-29 Rus işgallerinin şehir günü bulunamadı (Yeni-Kale 25 Ocak 1829, takvimi belirsiz) — yazılmadı"}],
  v:[{f:"1829-09-14",t:"1859-01-24",k:"Eflak Voyvodalığı",statu:"vassal",kid:"eflak",kaynak:"TDV yergogu (Edirne 1829)"},
     {f:"1859-01-24",t:"1877-05-09",k:"Birleşik Prenslikler (Romanya)",statu:"vassal",kid:"romanya"}],
  isg:[{f:"1877-04-24",t:"1878-01-31",d:"rusya",kaynak:"doksanuc-harbi (TDV): Rusya 24 Nisan 1877'de savaş ilân etti; 'Romanya topraklarına giren … Ruslar' · EMRE KARARI 13 Ekim 2026: ittifaklı Rus ilerleyişi Eflak-Boğdan'da işgal gibi taralı · bitiş 31 Ocak 1878 Edirne ateşkesi (Yergöğü/Bükreş ile aynı süreç)"}] },
{ ad:"Zimnicea", kaynak:"BEYAN bölge sahibi (TDV eflak, TDV yergogu Eflak rayaları) — KUTU-B-1014", tur:"kasaba", lat:43.654, lon:25.365, g:0, k:0,
  s:[{f:"1281-01-01",t:"1330-01-01",d:"macaristan",kaynak:"BEYAN bölge sahibi: TDV eflak (1330 Posada; öncesi Macar üstünlüğü — bölge düzeyi)"},
     {f:"1330-01-01",t:"1462-06-01",d:"eflak",kaynak:"BEYAN bölge sahibi: Eflak voyvodalığı toprağı; Osmanlı rayası değil (TDV yergogu Eflak rayalarını Turnu, Yergöğü, İbrail diye sayar) · t: Eflak tâbiliği (Bükreş zinciri, aynı süreç)"},
     {f:"1877-05-09",t:"1881-03-26",d:"romanya",kaynak:"TDV romanya: '9 Mayıs 1877'"},
     {f:"1881-03-26",t:"1947-12-30",d:"romanya-kralligi"},
     {f:"1947-12-30",t:"1989-12-22",d:"romanya-halk",kaynak:"LoC Romania Country Study"},
     {f:"1989-12-22",t:"2000-12-31",d:"romanya-cumhuriyeti",kaynak:"LoC Romania Country Study"}],
  d:[],
  v:[{f:"1462-06-01",t:"1859-01-24",k:"Eflak Voyvodalığı",statu:"vassal",kid:"eflak"},
     {f:"1859-01-24",t:"1877-05-09",k:"Birleşik Prenslikler (Romanya)",statu:"vassal",kid:"romanya"}],
  isg:[{f:"1806-12-25",t:"1812-05-28",d:"rusya",kaynak:"TAKVİM-1015 (Emre #10: atlas günleri Gregoryen, Jülyen gün çevrildi): Jülyen 1806-12-13 (Miloradoviç'in Bükreş'e girişi; ESBE «Турецкие войны России» '13 декабря', eski takvim) = Gregoryen 1806-12-25 · prenslik çapında işgal — Bükreş günü: eflak (TDV) · ESBE «Турецкие войны России» (13 Aralık J, Miloradoviç)"},
       {f:"1828-05-07",t:"1834-01-01",d:"rusya",kaynak:"TAKVİM-1015 (Emre #10: atlas günleri Gregoryen, Jülyen gün çevrildi): Jülyen 1828-04-25 (Rus kolordusunun Memleketeyn'e girişi; ESBE «Турецкие войны России» '25 апр.', eski takvim) = Gregoryen 1828-05-07 · prenslik çapında işgal — Bükreş günü: eflak · edirne-antlasmasi · ESBE (25 Nisan J)"},
       {f:"1877-04-24",t:"1878-01-31",d:"rusya",kaynak:"doksanuc-harbi (TDV) · EMRE KARARI 13 Ekim 2026 (ittifaklı Rus ilerleyişi taralı) · bitiş 31 Ocak 1878 Edirne ateşkesi"}] },
{ ad:"Calafat", kaynak:"BEYAN bölge sahibi (TDV eflak, TDV yergogu Eflak rayaları) — KUTU-B-1014", tur:"kasaba", lat:43.990, lon:22.934, g:0, k:0,
  s:[{f:"1281-01-01",t:"1330-01-01",d:"macaristan",kaynak:"BEYAN bölge sahibi: TDV eflak (1330 Posada; öncesi Macar üstünlüğü — bölge düzeyi)"},
     {f:"1330-01-01",t:"1462-06-01",d:"eflak",kaynak:"BEYAN bölge sahibi: Eflak voyvodalığı toprağı (Osmanlı rayası değil — TDV yergogu)"},
     {f:"1877-05-09",t:"1881-03-26",d:"romanya",kaynak:"TDV romanya: '9 Mayıs 1877'"},
     {f:"1881-03-26",t:"1947-12-30",d:"romanya-kralligi"},
     {f:"1947-12-30",t:"1989-12-22",d:"romanya-halk",kaynak:"LoC Romania Country Study"},
     {f:"1989-12-22",t:"2000-12-31",d:"romanya-cumhuriyeti",kaynak:"LoC Romania Country Study"}],
  d:[],
  v:[{f:"1462-06-01",t:"1859-01-24",k:"Eflak Voyvodalığı",statu:"vassal",kid:"eflak"},
     {f:"1859-01-24",t:"1877-05-09",k:"Birleşik Prenslikler (Romanya)",statu:"vassal",kid:"romanya"}],
  isg:[{f:"1806-12-25",t:"1812-05-28",d:"rusya",kaynak:"TAKVİM-1015 (Emre #10: atlas günleri Gregoryen, Jülyen gün çevrildi): Jülyen 1806-12-13 (Miloradoviç'in Bükreş'e girişi; ESBE «Турецкие войны России» '13 декабря', eski takvim) = Gregoryen 1806-12-25 · prenslik çapında işgal — Bükreş günü: eflak (TDV) · ESBE (13 Aralık J)"},
       {f:"1828-05-07",t:"1834-01-01",d:"rusya",kaynak:"TAKVİM-1015 (Emre #10: atlas günleri Gregoryen, Jülyen gün çevrildi): Jülyen 1828-04-25 (Rus kolordusunun Memleketeyn'e girişi; ESBE «Турецкие войны России» '25 апр.', eski takvim) = Gregoryen 1828-05-07 · prenslik çapında işgal — Bükreş günü: eflak · edirne-antlasmasi · ESBE (25 Nisan J)"},
       {f:"1877-04-24",t:"1878-01-31",d:"rusya",kaynak:"doksanuc-harbi (TDV) · EMRE KARARI 13 Ekim 2026 · bitiş 31 Ocak 1878 Edirne ateşkesi"}] },
{ ad:"Corabia", kaynak:"kur: Olt İl Meclisi cjolt.ro/en/corabia (1871) · TDV romanya — KUTU-B-1014", tur:"kasaba", lat:43.775, lon:24.503, g:0, k:0, kur:"1871-01-01",
  s:[{f:"1877-05-09",t:"1881-03-26",d:"romanya",kaynak:"TDV romanya: '9 Mayıs 1877'"},
     {f:"1881-03-26",t:"1947-12-30",d:"romanya-kralligi"},
     {f:"1947-12-30",t:"1989-12-22",d:"romanya-halk",kaynak:"LoC Romania Country Study"},
     {f:"1989-12-22",t:"2000-12-31",d:"romanya-cumhuriyeti",kaynak:"LoC Romania Country Study"}],
  d:[],
  v:[{f:"1871-01-01",t:"1877-05-09",k:"Birleşik Prenslikler (Romanya)",statu:"vassal",kid:"romanya",kesinlik:{f:"yil",t:"gun"},kaynak:"kur: Olt İl Meclisi (cjolt.ro/en/corabia) 'established in 1871 by The Law of Corabia town foundation' — YIL (resmî kurum sitesi; akademik ikinci kaynak bulunamadı)"}],
  isg:[{f:"1877-04-24",t:"1878-01-31",d:"rusya",kaynak:"doksanuc-harbi (TDV) · EMRE KARARI 13 Ekim 2026 · bitiş 31 Ocak 1878 Edirne ateşkesi"}] },
{ ad:"Oltenița", kaynak:"BEYAN bölge sahibi (TDV eflak, TDV yergogu Eflak rayaları) — KUTU-B-1014", tur:"kasaba", lat:44.087, lon:26.637, g:0, k:0,
  s:[{f:"1281-01-01",t:"1330-01-01",d:"macaristan",kaynak:"BEYAN bölge sahibi: TDV eflak (1330 Posada; öncesi Macar üstünlüğü — bölge düzeyi)"},
     {f:"1330-01-01",t:"1462-06-01",d:"eflak",kaynak:"BEYAN bölge sahibi: Eflak voyvodalığı toprağı (Osmanlı rayası değil — TDV yergogu) · ilk anılış yılı bulunamadı"},
     {f:"1877-05-09",t:"1881-03-26",d:"romanya",kaynak:"TDV romanya: '9 Mayıs 1877'"},
     {f:"1881-03-26",t:"1947-12-30",d:"romanya-kralligi"},
     {f:"1947-12-30",t:"1989-12-22",d:"romanya-halk",kaynak:"LoC Romania Country Study"},
     {f:"1989-12-22",t:"2000-12-31",d:"romanya-cumhuriyeti",kaynak:"LoC Romania Country Study"}],
  d:[],
  v:[{f:"1462-06-01",t:"1859-01-24",k:"Eflak Voyvodalığı",statu:"vassal",kid:"eflak"},
     {f:"1859-01-24",t:"1877-05-09",k:"Birleşik Prenslikler (Romanya)",statu:"vassal",kid:"romanya"}],
  isg:[{f:"1806-12-25",t:"1812-05-28",d:"rusya",kaynak:"TAKVİM-1015 (Emre #10: atlas günleri Gregoryen, Jülyen gün çevrildi): Jülyen 1806-12-13 (Miloradoviç'in Bükreş'e girişi; ESBE «Турецкие войны России» '13 декабря', eski takvim) = Gregoryen 1806-12-25 · prenslik çapında işgal — Bükreş günü: eflak (TDV) · ESBE (13 Aralık J)"},
       {f:"1828-05-07",t:"1834-01-01",d:"rusya",kaynak:"TAKVİM-1015 (Emre #10: atlas günleri Gregoryen, Jülyen gün çevrildi): Jülyen 1828-04-25 (Rus kolordusunun Memleketeyn'e girişi; ESBE «Турецкие войны России» '25 апр.', eski takvim) = Gregoryen 1828-05-07 · prenslik çapında işgal — Bükreş günü: eflak · edirne-antlasmasi · ESBE (25 Nisan J)"},
       {f:"1877-04-24",t:"1878-01-31",d:"rusya",kaynak:"doksanuc-harbi (TDV) · EMRE KARARI 13 Ekim 2026 · bitiş 31 Ocak 1878 Edirne ateşkesi"}] },
{ ad:"Călărași", kaynak:"BEYAN bölge sahibi (TDV eflak, TDV yergogu) · Britannica 'Călărași' — KUTU-B-1014", tur:"kasaba", lat:44.200, lon:27.330, g:0, k:0,
  s:[{f:"1281-01-01",t:"1330-01-01",d:"macaristan",kaynak:"BEYAN bölge sahibi: TDV eflak (1330 Posada; öncesi Macar üstünlüğü — bölge düzeyi)"},
     {f:"1330-01-01",t:"1462-06-01",d:"eflak",kaynak:"BEYAN bölge sahibi: Eflak voyvodalığı toprağı (Osmanlı rayası değil — TDV yergogu) · Britannica 'Călărași': ilk belge 1593 (eski adı Lichirești) — kuruluş değil ilk anılış, kur yazılmadı"},
     {f:"1877-05-09",t:"1881-03-26",d:"romanya",kaynak:"TDV romanya: '9 Mayıs 1877'"},
     {f:"1881-03-26",t:"1947-12-30",d:"romanya-kralligi"},
     {f:"1947-12-30",t:"1989-12-22",d:"romanya-halk",kaynak:"LoC Romania Country Study"},
     {f:"1989-12-22",t:"2000-12-31",d:"romanya-cumhuriyeti",kaynak:"LoC Romania Country Study"}],
  d:[],
  v:[{f:"1462-06-01",t:"1859-01-24",k:"Eflak Voyvodalığı",statu:"vassal",kid:"eflak"},
     {f:"1859-01-24",t:"1877-05-09",k:"Birleşik Prenslikler (Romanya)",statu:"vassal",kid:"romanya"}],
  isg:[{f:"1806-12-25",t:"1812-05-28",d:"rusya",kaynak:"TAKVİM-1015 (Emre #10: atlas günleri Gregoryen, Jülyen gün çevrildi): Jülyen 1806-12-13 (Miloradoviç'in Bükreş'e girişi; ESBE «Турецкие войны России» '13 декабря', eski takvim) = Gregoryen 1806-12-25 · prenslik çapında işgal — Bükreş günü: eflak (TDV) · ESBE (13 Aralık J)"},
       {f:"1828-05-07",t:"1834-01-01",d:"rusya",kaynak:"TAKVİM-1015 (Emre #10: atlas günleri Gregoryen, Jülyen gün çevrildi): Jülyen 1828-04-25 (Rus kolordusunun Memleketeyn'e girişi; ESBE «Турецкие войны России» '25 апр.', eski takvim) = Gregoryen 1828-05-07 · prenslik çapında işgal — Bükreş günü: eflak · edirne-antlasmasi · ESBE (25 Nisan J)"},
       {f:"1877-04-24",t:"1878-01-31",d:"rusya",kaynak:"doksanuc-harbi (TDV) · EMRE KARARI 13 Ekim 2026 · bitiş 31 Ocak 1878 Edirne ateşkesi"}] },
{ ad:"Hırsova (Hârșova)", kaynak:"TDV kostence/tulca (bölge) · Berlin md. 46 — KUTU-B-1014", tur:"kale", lat:44.686, lon:27.952, g:0, k:0,
  s:[{f:"1281-01-01",t:"1393-09-01",d:"bulgaristan",kaynak:"BEYAN bölge sahibi: TDV'de hirsova maddesi yok; Kuzey Dobruca zinciri (Köstence)"},
     {f:"1402-07-28",t:"1419-01-01",d:"eflak",kaynak:"TDV kostence (bölge): 1402 Mircea, 1419 Osmanlı fethi"},
     {f:"1878-07-13",t:"1881-03-26",d:"romanya",kaynak:"Berlin md. 46 (Hırsova kazası Romanya'ya) — ikincil sentezden, madde metni doğrulanmadı · fiilî Romen girişi Kasım 1878 (Dragomir, 'Evoluția comunei urbane Hârșova după 1878', muzeulmarinei.ro) yazılmadı"},
     {f:"1881-03-26",t:"1947-12-30",d:"romanya-kralligi"},
     {f:"1947-12-30",t:"1989-12-22",d:"romanya-halk",kaynak:"LoC Romania Country Study"},
     {f:"1989-12-22",t:"2000-12-31",d:"romanya-cumhuriyeti",kaynak:"LoC Romania Country Study"}],
  d:[{f:"1393-09-01",t:"1402-07-28",kaynak:"BEYAN bölge: Köstence zinciri"},
     {f:"1419-01-01",t:"1878-07-13",kaynak:"TDV tulca/kostence (bölge): Dobruca 1419'da Osmanlı — YIL"}] },
{ ad:"Tutrakan", kaynak:"BEYAN bölge sahibi: Silistre zinciri · TDV dobruca — KUTU-B-1014", tur:"kasaba", lat:44.048, lon:26.612, g:0, k:0,
  s:[{f:"1281-01-01",t:"1393-09-01",d:"bulgaristan",kaynak:"BEYAN bölge sahibi: TDV'de tutrakan maddesi yok; Silistre zinciri (Tuna kıyısı, aynı süreç)"},
     {f:"1402-07-28",t:"1419-01-01",d:"eflak",kaynak:"BEYAN bölge: Silistre zinciri (TDV silistre/kostence: Mircea 1402-1419)"},
     {f:"1908-10-05",t:"1913-08-10",d:"bulgaristan-kralligi"},
     {f:"1913-08-10",t:"1940-09-25",d:"romanya-kralligi",kaynak:"Bükreş antl. (10 Ağustos 1913) Güney Dobruca'yı Romanya'ya verdi · t: TDV dobruca (Krayova 1940) — Silistre ile aynı gün"},
     {f:"1940-09-25",t:"1946-09-15",d:"bulgaristan-kralligi"},
     {f:"1946-09-15",t:"1990-11-15",d:"bulgaristan-halk"},
     {f:"1990-11-15",t:"2000-12-31",d:"bulgaristan-cumhuriyeti"}],
  d:[{f:"1393-09-01",t:"1402-07-28",kaynak:"BEYAN bölge: Silistre zinciri"},
     {f:"1419-01-01",t:"1878-07-13",kaynak:"BEYAN bölge: Silistre zinciri (TDV silistre 1419)"}],
  v:[{f:"1878-07-13",t:"1908-10-05",k:"Bulgaristan Prensliği",statu:"vassal",kid:"bulgaristan-prensligi",kaynak:"Berlin md. 2"}] },

// ═══ KUTU-B-1014 (2) — İNGRİYA · BEYAZ RUSYA · YENİ SIRBİSTAN · YEDİSAN · KUBAN · KIRIM · TESALYA · ŞARKÎ RUMELİ ═══
// Mükerrer taraması (normalleştirilmiş ad + 3 km): hepsi 0 (Nyenskans–St. Petersburg 4,1 km · Kılburun–Özi 6,7 km).
// Koordinatlar GeoNames/Vikipedi şehir koordinatı. BEYAN: "bölge sahibi" yazan dönemler şehir düzeyi tanıklık
// olmadan komşu zincirden kurulmuştur (kaynak alanında adıyla).
{ ad:"Nyenskans (Nyen)", kaynak:"ESBE «Ниеншанц» · Merkezî Deniz Müzesi (eng.navalmuseum.ru/news/memorable?id=687) — KUTU-B-1014 (0024/H-0008)", tur:"kale", lat:59.9417, lon:30.4075, g:0, k:0, kur:"1611-01-01",
  s:[{f:"1611-01-01",t:"1703-05-12",d:"isvec",kesinlik:{f:"yil",t:"gun"},kaynak:"TAKVİM-1015 (Emre #10: atlas günleri Gregoryen, Jülyen gün çevrildi): Jülyen 1703-05-01 (Nyenskans teslimi; ESBE «Ниеншанц», eski takvim · Deniz Müzesi '12 мая 1703 года' Gregoryen) = Gregoryen 1703-05-12 · kur: İsveç'in 1611'de kurduğu Nyenskans (ESBE «Ниеншанц») — YIL · 1617 Stolbova ile İngriya hukuken İsveç'in · t: kuşatma 26 Nisan 1703 (ESBE: 'фельдмаршал Шереметев 26 апреля подступил к крепости'), teslim 1 Mayıs 1703 Jülyen — Deniz Müzesi '12 мая 1703 года' (Gregoryen) = 1 Mayıs J; çevirme yapılmadı, Jülyen gün yazıldı"},
     {f:"1703-05-12",t:"1917-03-15",d:"rusya",kaynak:"TAKVİM-1015 (Emre #10: atlas günleri Gregoryen, Jülyen gün çevrildi): Jülyen 1703-05-01 (Nyenskans teslimi; ESBE «Ниеншанц», eski takvim · Deniz Müzesi '12 мая 1703 года' Gregoryen) = Gregoryen 1703-05-12 · kale yıkıldı, yerine St. Petersburg kuruldu (27 Mayıs 1703) — nokta bölgeyi temsil eder"},
     {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu"}], d:[] },
{ ad:"Yam (Yamburg, Kingisepp)", kaynak:"ESBE «Ямбург» · HSE «Петр I. Биохроника» 14.05.1703 — KUTU-B-1014 (0024/H-0008)", tur:"kale", lat:59.3733, lon:28.6131, g:0, k:0, kur:"1384-01-01",
  s:[{f:"1384-01-01",t:"1478-01-15",d:"novgorod",kaynak:"ESBE «Ямбург»: 'в 1384 г. новгородцы основали здесь … Яму' — YIL · t: Oreşek zinciri (Novgorod'un Moskova'ya bağlanması)"},
     {f:"1478-01-15",t:"1547-01-16",d:"moskova"},{f:"1547-01-16",t:"1617-02-27",d:"rusya",kaynak:"⚠️ 1581-1590 İsveç işgali doğrulanamadı, yazılmadı"},
     {f:"1617-02-27",t:"1703-05-14",d:"isvec",kaynak:"ESBE «Ямбург»: 'По Столбовскому миру (1617 г.) … отошел к Швеции' · t: HSE «Петр I. Биохроника» (spb.hse.ru/humart/history/peter/biochronic/228418128) 14.05.1703: '… занятие Яма войсками генерала Н.Г.Вердена' — Jülyen"},
     {f:"1703-05-14",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu"}], d:[] },
{ ad:"Koporye (Kaporye)", kaynak:"HSE «Петр I. Биохроника» 14.05.1703 — KUTU-B-1014 (0024/H-0008)", tur:"kale", lat:59.7106, lon:29.0331, g:0, k:0,
  s:[{f:"1281-01-01",t:"1478-01-15",d:"novgorod",kaynak:"BEYAN bölge sahibi: Oreşek zinciri (Novgorod toprağı)"},
     {f:"1478-01-15",t:"1547-01-16",d:"moskova"},{f:"1547-01-16",t:"1617-02-27",d:"rusya"},
     {f:"1617-02-27",t:"1703-05-14",d:"isvec",kaynak:"Stolbova 1617 (İngriya İsveç'e) · t: HSE Biohronika 14.05.1703 'Взятие крепости Копорье войсками Б.П.Шереметева' — Jülyen · ⚠️ aynı kaynağın 27.05.1703 kaydı Şeremetev'in Koporye'nin alınışını bildiren mektubunu anıyor (haber günü)"},
     {f:"1703-05-14",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu"}], d:[] },
{ ad:"Mogilev (Mahilyow)", kaynak:"BSE «Могилёв» (booksite.ru) · TDV yok — KUTU-B-1014 (0068/H-0010)", tur:"sehir", lat:53.9168, lon:30.3449, g:0, k:0,
  s:[{f:"1281-01-01",t:"1569-07-01",d:"litvanya-buyuk-dukalik",kaynak:"BEYAN bölge sahibi: Minsk zinciri (ilk anılış 1267, BSE)"},
     {f:"1569-07-01",t:"1772-08-05",d:"lehistan",kaynak:"t: I. Taksim — BSE: 1772'de Rusya'ya; gün atlasın 1772 günü (Vitebsk/Polotsk, St. Petersburg antl. 5 Ağustos 1772)"},
     {f:"1772-08-05",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-08-25",d:"sovyet-rusya"},{f:"1991-08-25",t:"2000-12-31",d:"belarus"}], d:[] },
{ ad:"Gomel (Homel)", kaynak:"ESBE «Гомель» — KUTU-B-1014 (0068/H-0010)", tur:"sehir", lat:52.4345, lon:30.9754, g:0, k:0,
  s:[{f:"1281-01-01",t:"1569-07-01",d:"litvanya-buyuk-dukalik",kaynak:"BEYAN bölge sahibi: Minsk zinciri · ESBE «Гомель»: 'По миру 1537 г. Г. отдан Литве' — ⚠️ 1537 öncesi Moskova dönemi (≈1500-1537) YAZILMADI: başlangıç yılı kaynakta okunmadı"},
     {f:"1569-07-01",t:"1772-08-05",d:"lehistan",kaynak:"ESBE «Гомель»: 'присоединен к России в 1772 г.' — gün atlasın 1772 günü · ⚠️ 1648-1665 Kazak dönemi yazılmadı (gün yok)"},
     {f:"1772-08-05",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-08-25",d:"sovyet-rusya"},{f:"1991-08-25",t:"2000-12-31",d:"belarus"}], d:[] },
{ ad:"Bobruysk (Babruysk)", kaynak:"ESBE «Бобруйск» — KUTU-B-1014 (0068/H-0010)", tur:"sehir", lat:53.1384, lon:29.2214, g:0, k:0,
  s:[{f:"1281-01-01",t:"1569-07-01",d:"litvanya-buyuk-dukalik",kaynak:"BEYAN bölge sahibi: Minsk zinciri (ESBE: 1508'de küçük köy)"},
     {f:"1569-07-01",t:"1793-01-23",d:"lehistan",kaynak:"t: II. Taksim — Minsk ile aynı gün (ikincil kaynak; ESBE'de devir cümlesi okunmadı)"},
     {f:"1793-01-23",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-08-25",d:"sovyet-rusya"},{f:"1991-08-25",t:"2000-12-31",d:"belarus"}], d:[] },
{ ad:"Mozır (Mazyr)", kaynak:"İpatiy yıllığı 1155 (ilk anılış) · KUTU-B-1014 (0068/H-0010)", tur:"sehir", lat:52.0495, lon:29.2456, g:0, k:0,
  s:[{f:"1281-01-01",t:"1569-07-01",d:"litvanya-buyuk-dukalik",kaynak:"BEYAN bölge sahibi: Minsk zinciri"},
     {f:"1569-07-01",t:"1793-01-23",d:"lehistan",kaynak:"t: II. Taksim — Minsk ile aynı gün (ikincil kaynak)"},
     {f:"1793-01-23",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-08-25",d:"sovyet-rusya"},{f:"1991-08-25",t:"2000-12-31",d:"belarus"}], d:[] },
{ ad:"Novomirgorod", kaynak:"EoU «Novomyrhorod» · EoU «New Serbia» — KUTU-B-1014 (0082/H-0021)", tur:"kasaba", lat:48.7833, lon:31.6436, g:0, k:0, kur:"1740-01-01",
  s:[{f:"1740-01-01",t:"1917-03-15",d:"rusya",kesinlik:{f:"yil"},kaynak:"EoU «Novomyrhorod»: 'founded in 1740 by Zaporozhian Cossacks of the Myrhorod Regiment' — YIL · 'In 1752–64 Novomyrhorod was a center of New Serbia' (EoU «New Serbia»: 'created by Empress Elizabeth I in January 1752') · BEYAN: 1740-1752 Hetmanat (Rus tâbiliği; kazak-hetmanligi künyesinin boyası yok) — Kremençuk emsaliyle rusya"},
     {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-08-24",d:"sovyet-rusya"},{f:"1991-08-24",t:"2000-12-31",d:"ukrayna"}], d:[] },
{ ad:"Kılburun (Kinburn)", kaynak:"TDV ozu · TDV kirim · TDV kucuk-kaynarca-antlasmasi — KUTU-B-1014 (0082/H-0024)", tur:"kale", lat:46.5698, lon:31.5211, g:0, k:0,
  s:[{f:"1281-01-01",t:"1441-01-01",d:"altinorda",kaynak:"BEYAN bölge sahibi: Özi zinciri"},
     {f:"1441-01-01",t:"1475-06-06",d:"kirim",kaynak:"BEYAN bölge sahibi: Özi zinciri"},
     {f:"1774-07-21",t:"1917-03-15",d:"rusya",kaynak:"TDV kirim: Kaynarca ile 'Dinyeper ağzında Kılburun Kalesi ve etrafındaki boş araziyi … ilhak ediyordu' (md. 18)"},
     {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-08-24",d:"sovyet-rusya"},{f:"1991-08-24",t:"2000-12-31",d:"ukrayna"}],
  v:[{f:"1475-06-06",t:"1538-09-01",k:"Kırım Hanlığı",statu:"vassal",kid:"kirim",kaynak:"BEYAN bölge sahibi: Özi zinciri"}],
  d:[{f:"1538-09-01",t:"1774-07-21",kaynak:"BEYAN bölge: Özi zinciri · TDV ozu '(1002/1593) … Bender, Akkirman, Kili ve Kılburun sancakları bağlandı' · ⚠️ 1736-1739 Rus baskını ve 1770-74 işgali için kale günü bulunamadı, yazılmadı"}] },
{ ad:"Balta", kaynak:"TDV kirim · EoU «Balta» — KUTU-B-1014 (0082/H-0024)", tur:"kasaba", lat:47.938, lon:29.621, g:0, k:0,
  s:[{f:"1281-01-01",t:"1502-03-01",d:"altinorda",kaynak:"BEYAN bölge sahibi: Yedisan bozkırı zinciri (EoU: Balta 16. yy'dan beri var — kuruluş yılı yok)"},
     {f:"1774-07-21",t:"1783-04-19",d:"kirim",kaynak:"BEYAN bölge: Yedisan bozkırı (Kaynarca md. 3 Yedisan müstakil)"},
     {f:"1792-01-09",t:"1917-03-15",d:"rusya",kaynak:"EoU «Balta»: 'It belonged to Turkey until 1791 and later, in accordance with the Treaty of Iaşi, to Russia' (Yaş, 29 Aralık 1791 J = atlasın 1792-01-09 günü)"},
     {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-08-24",d:"sovyet-rusya"},{f:"1991-08-24",t:"2000-12-31",d:"ukrayna"}],
  v:[{f:"1502-03-01",t:"1774-07-21",k:"Kırım Hanlığı",statu:"vassal",kid:"kirim",kaynak:"TDV kirim: 'Kırım hanına ait Balta şehrine sığınmış olan Leh konfederelerini takiple bu şehri zapt ve tahrip etmeleri' (1768) · f: Yedisan bozkırı zinciri"}],
  isg:[{f:"1770-08-12",t:"1774-07-21",d:"rusya",kaynak:"TAKVİM-1015 (Emre #10: atlas günleri Gregoryen, Jülyen gün çevrildi): Jülyen 1770-08-01 (Yedisan/Bucak Nogaylarının Rus himayesi; Руссев 2012 'в августе 1770 г.', eski takvim, AY: Jülyen ay başı) = Gregoryen 1770-08-12 · TAKVİM (EMRE KARARI 14 Ekim 2026, KARARLAR-1014 m.28, kutu 0065): VERI-YAPISI TAKVİM kuralına dönüldü, Jülyen gün ÇEVRİLMEDEN yazıldı — kaynak 'Ağustos 1770' (Jülyen) — ay başı, AY hassasiyeti; eski Gregoryen çevirisi 1770-08-12 geri alındı, aşağıdaki çeviri açıklaması ESKİDİR. ESKİ NOT: BEYAN bölge: Yedisan Nogaylarının Rus tarafına geçişi — Yedisan bozkırı ile aynı gün (Solovyov t.28: Panin'in bildirimi 9 Ağustos 1770 J)"}],
  d:[{f:"1783-04-19",t:"1792-01-09",kaynak:"BEYAN bölge: Yedisan bozkırı zinciri · EoU «Balta» (1791'e dek Türkiye)"}] },
{ ad:"Temrük (Temryuk)", kaynak:"TDV anapa · Pukiş, Russkaya Reç 5/2017 (Evliya Çelebi'ye dayanarak) — KUTU-B-1014 (0034/H-0036)", tur:"kale", lat:45.2717, lon:37.3833, g:0, k:0, kur:"1515-01-01",
  s:[{f:"1774-07-21",t:"1783-04-19",d:"kirim",kaynak:"TDV kucuk-kaynarca-antlasmasi: Rusya'ya yalnız Kılburun, Kerç, Yenikale ve Kabartay bırakıldı; TDV kirim: Kırım, Bucak, Kuban (Taman yakası) müstakil Kırım Hanlığı'na — Taman yakası 1774-1783 Rus değil Kırım; bitiş 1783 ilhakı (atlas Arabat/Or Kapı zinciriyle aynı gün) · KARADENİZ-KUZEYİ paketi ilk parti (KARARLAR-1014 m.22, 0082/H-0070), K1 14 Ekim 2026"},{f:"1783-04-19",t:"1917-03-15",d:"rusya",kaynak:"BEYAN bölge: Taman zinciri · TDV anapa: 'Taman, Temrük, Açe ve Açu kalelerinin Kuban nehrinin kuzeyinde Rusya'da kalması' — 1784'ten itibaren bu kalelerin yeniçerileri Anapa'ya geçti"},
     {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu"}],
  d:[{f:"1515-01-01",t:"1774-07-21",kesinlik:{f:"yil",t:"gun"},kaynak:"kur/f: Pukiş 2017 (bibliolex.iling.spb.ru, Evliya Çelebi'ye dayanarak): 'Выстроенная в 1515–1516 годах (а не в 1556 году) … крепость' — YIL (Yavuz Sultan Selim dönemi) · t: Taman zinciri (Kaynarca)"}],
  isg:[{f:"1771-07-12",t:"1774-07-21",d:"rusya",kaynak:"TAKVİM-1015 (Emre #10: atlas günleri Gregoryen, Jülyen gün çevrildi): Jülyen 1771-07-01 (Kerç, Yenikale, Taman; RBS «Щербатов, Федор Федорович» 'В июле', eski takvim, AY: Jülyen ay başı) = Gregoryen 1771-07-12 · TAKVİM (EMRE KARARI 14 Ekim 2026, KARARLAR-1014 m.28, kutu 0065): VERI-YAPISI TAKVİM kuralına dönüldü, Jülyen gün ÇEVRİLMEDEN yazıldı — kaynak 'Temmuz' (Jülyen) — ay başı, AY hassasiyeti; eski Gregoryen çevirisi 1771-07-12 geri alındı, aşağıdaki çeviri açıklaması ESKİDİR. ESKİ NOT: BEYAN bölge: Taman ile aynı işgal penceresi (RBS «Щербатов»: Temmuz 1771 Kerç, Yenikale, Taman)"}] },
{ ad:"Arabat", kaynak:"RBS «Щербатов, Федор Федорович» (ru.wikisource) — KUTU-B-1014 (0082/H-0026)", tur:"kale", lat:45.297, lon:35.461, g:0, k:0,
  s:[{f:"1281-01-01",t:"1441-01-01",d:"altinorda",kaynak:"BEYAN bölge sahibi: Or Kapı zinciri (kalenin kuruluş yılı bulunamadı)"},
     {f:"1441-01-01",t:"1475-06-06",d:"kirim"},
     {f:"1774-07-21",t:"1783-04-19",d:"kirim",kaynak:"BEYAN bölge: Or Kapı zinciri (Kaynarca md. 3)"},
     {f:"1783-04-19",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu"}],
  v:[{f:"1475-06-06",t:"1774-07-21",k:"Kırım Hanlığı",statu:"vassal",kid:"kirim",kaynak:"BEYAN bölge sahibi: Or Kapı zinciri"}],
  isg:[{f:"1771-06-29",t:"1774-07-21",d:"rusya",kaynak:"TAKVİM-1015 (Emre #10: atlas günleri Gregoryen, Jülyen gün çevrildi): Jülyen 1771-06-18 (Arabat'ın alınışı; RBS «Щербатов, Федор Федорович», eski takvim) = Gregoryen 1771-06-29 · TAKVİM (EMRE KARARI 14 Ekim 2026, KARARLAR-1014 m.28, kutu 0065): VERI-YAPISI TAKVİM kuralına dönüldü, Jülyen gün ÇEVRİLMEDEN yazıldı — RBS «Щербатов» 18 Haziran (Jülyen); eski Gregoryen çevirisi 1771-06-29 geri alındı, aşağıdaki çeviri açıklaması ESKİDİR. ESKİ NOT: RBS «Щербатов»: 'внезапно приблизился к крепости и 18 июня занял ее' (1771, Jülyen) · ÇEVİRME BEYANI: Jülyen 18 Haziran + 11 = 29 Haziran — 0065 paketinin (Or Kapı, Kerç) Gregoryen yazımıyla ve kronoloji maddesiyle (olaylar_p0065.js 1771-06-29) hizalı"}], d:[] },
{ ad:"Golos (Volos)", kaynak:"TDV golos · TDV tesalya · TDV velestin — KUTU-B-1014 (0076/H-0045 · H-0093)", tur:"liman", lat:39.362, lon:22.943, g:0, k:0,
  s:[{f:"1281-01-01",t:"1311-03-15",d:"bizans",kaynak:"BEYAN bölge sahibi: Yenişehir (Larissa) zinciri"},
     {f:"1311-03-15",t:"1388-05-02",d:"katalan",kaynak:"BEYAN bölge: Tırhala/Yenişehir zinciri — t künye katalan sonu"},{f:"1388-05-02",t:"1390-01-01",d:"__BOSLUK__",kaynak:"BEYAN (KUTU-B-1014): komşu Tırhala/Yenişehir kaydı katalan dönemini künyenin ölümünden (1388-05-02) 1,7 yıl öteye uzatıyor (Değişmez 4c); bu aşım yeni noktalara KOPYALANMADI, ara dönemin sahibi kaynakta bulunamadı — komşuya itilmedi"},{f:"1390-01-01",t:"1394-01-01",d:"bizans"},
     {f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},
     {f:"1881-07-02",t:"1973-06-01",d:"yunanistan",kaynak:"TDV tesalya: Tesalya 1881'de Yunanistan'a (YIL); gün atlasın Tesalya devir günü (Tırhala/Yenişehir: 2 Temmuz 1881 Yunan-Osmanlı sözleşmesi) · ⚠️ Yunan ordusunun Golos'a fiilî girişi (Yunan yerel basını: 21 Ekim 1881 J) akademik kaynakta doğrulanamadı"},
     {f:"1973-06-01",t:"2000-12-31",d:"yunanistan-cumhuriyeti"}],
  d:[{f:"1394-01-01",t:"1402-07-28",kaynak:"BEYAN bölge: Yenişehir zinciri"},{f:"1413-07-05",t:"1881-07-02"}],
  isg:[] },
{ ad:"Kalabaka (Kalambaka)", kaynak:"TDV tesalya — KUTU-B-1014 (0076/H-0045)", tur:"kasaba", lat:39.706, lon:21.626, g:0, k:0,
  s:[{f:"1281-01-01",t:"1311-03-15",d:"bizans",kaynak:"BEYAN bölge sahibi: Tırhala zinciri"},
     {f:"1311-03-15",t:"1388-05-02",d:"katalan",kaynak:"BEYAN bölge: Tırhala/Yenişehir zinciri — t künye katalan sonu"},{f:"1388-05-02",t:"1390-01-01",d:"__BOSLUK__",kaynak:"BEYAN (KUTU-B-1014): komşu Tırhala/Yenişehir kaydı katalan dönemini künyenin ölümünden (1388-05-02) 1,7 yıl öteye uzatıyor (Değişmez 4c); bu aşım yeni noktalara KOPYALANMADI, ara dönemin sahibi kaynakta bulunamadı — komşuya itilmedi"},{f:"1390-01-01",t:"1394-01-01",d:"bizans"},
     {f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},
     {f:"1881-07-02",t:"1973-06-01",d:"yunanistan",kaynak:"TDV tesalya (1881, YIL) · gün Tırhala ile aynı (2 Temmuz 1881 sözleşmesi); fiilî giriş günü bulunamadı"},
     {f:"1973-06-01",t:"2000-12-31",d:"yunanistan-cumhuriyeti"}],
  d:[{f:"1394-01-01",t:"1402-07-28",kaynak:"BEYAN bölge: Tırhala zinciri"},{f:"1413-07-05",t:"1881-07-02"}] },
{ ad:"Kardiçe (Karditsa)", kaynak:"TDV tesalya — KUTU-B-1014 (0076/H-0045)", tur:"kasaba", lat:39.365, lon:21.921, g:0, k:0,
  s:[{f:"1281-01-01",t:"1311-03-15",d:"bizans",kaynak:"BEYAN bölge sahibi: Tırhala zinciri"},
     {f:"1311-03-15",t:"1388-05-02",d:"katalan",kaynak:"BEYAN bölge: Tırhala/Yenişehir zinciri — t künye katalan sonu"},{f:"1388-05-02",t:"1390-01-01",d:"__BOSLUK__",kaynak:"BEYAN (KUTU-B-1014): komşu Tırhala/Yenişehir kaydı katalan dönemini künyenin ölümünden (1388-05-02) 1,7 yıl öteye uzatıyor (Değişmez 4c); bu aşım yeni noktalara KOPYALANMADI, ara dönemin sahibi kaynakta bulunamadı — komşuya itilmedi"},{f:"1390-01-01",t:"1394-01-01",d:"bizans"},
     {f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},
     {f:"1881-07-02",t:"1973-06-01",d:"yunanistan",kaynak:"TDV tesalya (1881, YIL) · gün Tırhala ile aynı; fiilî giriş (Yunan basını 18 Ağustos 1881 J) doğrulanamadı"},
     {f:"1973-06-01",t:"2000-12-31",d:"yunanistan-cumhuriyeti"}],
  d:[{f:"1394-01-01",t:"1402-07-28",kaynak:"BEYAN bölge: Tırhala zinciri"},{f:"1413-07-05",t:"1881-07-02"}] },
{ ad:"Alasonya (Elassona)", kaynak:"TDV alasonya — KUTU-B-1014 (0076/H-0045)", tur:"kasaba", lat:39.895, lon:22.189, g:0, k:0,
  s:[{f:"1281-01-01",t:"1311-03-15",d:"bizans",kaynak:"BEYAN bölge sahibi: Yenişehir zinciri (TDV alasonya fethi 1388-89 'olmalıdır' diye tahmin eder — tahmin olduğu için bölge zinciri kullanıldı)"},
     {f:"1311-03-15",t:"1388-05-02",d:"katalan",kaynak:"BEYAN bölge: Tırhala/Yenişehir zinciri — t künye katalan sonu"},{f:"1388-05-02",t:"1390-01-01",d:"__BOSLUK__",kaynak:"BEYAN (KUTU-B-1014): komşu Tırhala/Yenişehir kaydı katalan dönemini künyenin ölümünden (1388-05-02) 1,7 yıl öteye uzatıyor (Değişmez 4c); bu aşım yeni noktalara KOPYALANMADI, ara dönemin sahibi kaynakta bulunamadı — komşuya itilmedi"},{f:"1390-01-01",t:"1394-01-01",d:"bizans"},
     {f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},
     {f:"1913-11-14",t:"1973-06-01",d:"yunanistan",kaynak:"Atina antlaşması — Karaferye ile aynı gün"},
     {f:"1973-06-01",t:"2000-12-31",d:"yunanistan-cumhuriyeti"}],
  d:[{f:"1394-01-01",t:"1402-07-28",kaynak:"BEYAN bölge: Yenişehir zinciri"},
     {f:"1413-07-05",t:"1913-11-14",kaynak:"TDV alasonya: '1881'de Tesalya Yunanistan'a bırakıldığında … Osmanlılar'ın sınır karakolu haline geldi' — 1881'de Osmanlı'da KALDI · t: Atina antlaşması (Karaferye ile aynı gün)"}],
  isg:[{f:"1912-10-01",t:"1913-11-14",d:"yunanistan",kesinlik:{f:"ay",t:"gun"},kaynak:"TDV alasonya: I. Balkan Savaşı'nda Yunanlılar'ın aldığı ilk şehir — gün yok; savaş Ekim 1912'de başladı (TDV balkan-savasi) — AY · t: Karaferye ile aynı"}] },
{ ad:"Lapseki (Lampsakos)", kaynak:"TDV karesiogullari · TDV canakkale — KUTU-B-1014 (0016/H-0004)", tur:"liman", lat:40.344, lon:26.685, g:0, k:0,
  s:[{f:"1281-01-01",t:"1297-01-01",d:"bizans",kaynak:"BEYAN bölge sahibi: Çanakkale zinciri (Dardanel Asya yakası) — TDV'de lapseki maddesi yok"},
     {f:"1297-01-01",t:"1345-01-01",d:"karesi",kaynak:"BEYAN bölge sahibi: Çanakkale zinciri"},
     {f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1410-05-06",d:"suleyman-celebi"},{f:"1410-05-06",t:"1413-07-05",d:"mehmed-celebi",kesinlik:{f:"yil"}},
     {f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"},{f:"1923-10-29",t:"2000-12-31",d:"turkiye-cumhuriyeti"}],
  d:[{f:"1345-01-01",t:"1402-07-28",y:"ilhak",kesinlik:{f:"yil",t:"gun"},kaynak:"TDV karesiogullari: 'Böylece Karesi Beyliği Osmanlı Beyliği topraklarına katılmış oldu (746/1345 veya hemen sonrası)' — YIL; Çanakkale/Balıkesir/Biga ile aynı gün · ⚠️ hicrî 746 1345-05-04'te başlar: Karesi kümesinin tamamı (Balıkesir, Biga, Karabiga, Çanakkale, Lapseki) hicrî kesişim kuralına göre ayrıca düzeltilmeli — tek noktada yapılmadı (komşudan kopuk kırılma açardı)"},
     {f:"1413-07-05",t:"1920-04-23"}] },
{ ad:"Hasköy (Haskovo)", kaynak:"TDV haskoy--bulgaristan · TDV bulgaristan — KUTU-B-1014 (0076/H-0081)", tur:"kasaba", lat:41.934, lon:25.555, g:0, k:0,
  s:[{f:"1281-01-01",t:"1372-06-01",d:"bulgaristan",kaynak:"BEYAN bölge sahibi: Eski Zağra/Filibe zinciri · TDV haskoy: '1361'de Edirne'nin Osmanlı idaresine girmesinden sonraki yıllarda bir köy olarak ortaya çıktığı tahmin edilmektedir' — kuruluş yılı yok, kur yazılmadı"},
     {f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},
     {f:"1885-09-18",t:"1908-10-05",d:"bulgaristan-prensligi",kaynak:"TDV haskoy: 1885'te Prensliğe katıldı · gün künyede (İslimye ile aynı)"},
     {f:"1908-10-05",t:"1946-09-15",d:"bulgaristan-kralligi"},{f:"1946-09-15",t:"1990-11-15",d:"bulgaristan-halk"},{f:"1990-11-15",t:"2000-12-31",d:"bulgaristan-cumhuriyeti"}],
  d:[{f:"1372-06-01",t:"1402-07-28",kaynak:"BEYAN bölge: Eski Zağra/Filibe zinciri"},{f:"1413-07-05",t:"1878-07-13"}],
  v:[{f:"1878-07-13",t:"1885-09-18",k:"Şarkî Rumeli vilâyeti",statu:"vassal",kid:"sarki-rumeli",kaynak:"TDV bulgaristan: '… Burgaz ve Hasköy sancaklarından müteşekkil Doğu Rumeli vilâyeti' · TDV haskoy: 1880'de sancak merkezi"}] },


// ───────── KUTU-HATALI-1015 · 0016/H-0004 — Çanakkale Asya yakası dolgu noktaları ─────────
{ ad:"Çanakkale yöresi (Kepez)", kaynak:"TDV canakkale · TDV karesiogullari — KUTU-HATALI-1015 (0016/H-0004)", neden:"KUTU-HATALI-1015 (0016/H-0004): KOŞU 25'te Asya yakası (Çanakkale/Kepez) 1346-1350'de BİZANS boyalıydı — Çanakkale noktası kur:1452 (TDV: Fâtih), Kilitbahir kur:1463; 1452 öncesi Asya kıyısında nokta YOKTU ve bölge Maydos (Avrupa yakası, Bizans 1354'e dek) peteğine emiliyordu (§2). Dolgu noktası, zinciri Çanakkale kaydıyla birebir; 1452 sonrası Çanakkale ile aynı sahip (petek bölünür, renk değişmez)", tur:"bolge", lat:40.100, lon:26.400, g:0, k:0,
  s:[{f:"1281-01-01",t:"1297-01-01",d:"bizans",kaynak:"BEYAN bölge sahibi: Çanakkale/Lapseki/Biga zinciri (Karesi) — TDV canakkale: 'Karesi Beyliği’nin toprakları da bu yöreye kadar uzanıyordu' · TDV karesiogullari: 'Böylece Karesi Beyliği Osmanlı Beyliği topraklarına katılmış oldu (746/1345 veya hemen sonrası)' — YIL · ⚠️ ÇELİŞKİ (TDV kendi içinde): TDV canakkale 'Bu beyliğin topraklarının Sultan I. Murad tarafından 1360 yılında Osmanlı topraklarına kesin olarak katılmasıyla Çanakkale yöresi Osmanlı idaresine geçmiş oldu' der; atlasın Karesi kümesi 1345'i kullanır, tek noktada ayrılmadı"},{f:"1297-01-01",t:"1345-01-01",d:"karesi",kaynak:"BEYAN bölge sahibi: Çanakkale/Lapseki/Biga zinciri (Karesi) — TDV canakkale: 'Karesi Beyliği’nin toprakları da bu yöreye kadar uzanıyordu' · TDV karesiogullari: 'Böylece Karesi Beyliği Osmanlı Beyliği topraklarına katılmış oldu (746/1345 veya hemen sonrası)' — YIL · ⚠️ ÇELİŞKİ (TDV kendi içinde): TDV canakkale 'Bu beyliğin topraklarının Sultan I. Murad tarafından 1360 yılında Osmanlı topraklarına kesin olarak katılmasıyla Çanakkale yöresi Osmanlı idaresine geçmiş oldu' der; atlasın Karesi kümesi 1345'i kullanır, tek noktada ayrılmadı"},{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1410-05-06",d:"suleyman-celebi"},{f:"1410-05-06",t:"1413-07-05",d:"mehmed-celebi",kesinlik:{f:"yil"}},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"},{f:"1923-10-29",t:"2000-12-31",d:"turkiye-cumhuriyeti"}],
  d:[{f:"1345-01-01",t:"1402-07-28",y:"ilhak",kesinlik:{f:"yil",t:"gun"},kaynak:"BEYAN bölge sahibi: Çanakkale/Lapseki/Biga zinciri (Karesi) — TDV canakkale: 'Karesi Beyliği’nin toprakları da bu yöreye kadar uzanıyordu' · TDV karesiogullari: 'Böylece Karesi Beyliği Osmanlı Beyliği topraklarına katılmış oldu (746/1345 veya hemen sonrası)' — YIL · ⚠️ ÇELİŞKİ (TDV kendi içinde): TDV canakkale 'Bu beyliğin topraklarının Sultan I. Murad tarafından 1360 yılında Osmanlı topraklarına kesin olarak katılmasıyla Çanakkale yöresi Osmanlı idaresine geçmiş oldu' der; atlasın Karesi kümesi 1345'i kullanır, tek noktada ayrılmadı"},{f:"1413-07-05",t:"1920-04-23"}] },
{ ad:"Truva yöresi (Tevfikiye)", kaynak:"TDV canakkale · TDV karesiogullari — KUTU-HATALI-1015 (0016/H-0004)", neden:"KUTU-HATALI-1015 (0016/H-0004): Truva mevkii 1346-1350'de Bizans (Bozcaada/Maydos peteği deniz aşırı) boyalıydı; Troas'ta Behramkale ile Lapseki arasında 50 km nokta YOKTU. Dolgu noktası, zinciri Çanakkale kaydıyla birebir", tur:"bolge", lat:39.957, lon:26.240, g:0, k:0,
  s:[{f:"1281-01-01",t:"1297-01-01",d:"bizans",kaynak:"BEYAN bölge sahibi: Çanakkale/Lapseki/Biga zinciri (Karesi) — TDV canakkale: 'Karesi Beyliği’nin toprakları da bu yöreye kadar uzanıyordu' · TDV karesiogullari: 'Böylece Karesi Beyliği Osmanlı Beyliği topraklarına katılmış oldu (746/1345 veya hemen sonrası)' — YIL · ⚠️ ÇELİŞKİ (TDV kendi içinde): TDV canakkale 'Bu beyliğin topraklarının Sultan I. Murad tarafından 1360 yılında Osmanlı topraklarına kesin olarak katılmasıyla Çanakkale yöresi Osmanlı idaresine geçmiş oldu' der; atlasın Karesi kümesi 1345'i kullanır, tek noktada ayrılmadı"},{f:"1297-01-01",t:"1345-01-01",d:"karesi",kaynak:"BEYAN bölge sahibi: Çanakkale/Lapseki/Biga zinciri (Karesi) — TDV canakkale: 'Karesi Beyliği’nin toprakları da bu yöreye kadar uzanıyordu' · TDV karesiogullari: 'Böylece Karesi Beyliği Osmanlı Beyliği topraklarına katılmış oldu (746/1345 veya hemen sonrası)' — YIL · ⚠️ ÇELİŞKİ (TDV kendi içinde): TDV canakkale 'Bu beyliğin topraklarının Sultan I. Murad tarafından 1360 yılında Osmanlı topraklarına kesin olarak katılmasıyla Çanakkale yöresi Osmanlı idaresine geçmiş oldu' der; atlasın Karesi kümesi 1345'i kullanır, tek noktada ayrılmadı"},{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1410-05-06",d:"suleyman-celebi"},{f:"1410-05-06",t:"1413-07-05",d:"mehmed-celebi",kesinlik:{f:"yil"}},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"},{f:"1923-10-29",t:"2000-12-31",d:"turkiye-cumhuriyeti"}],
  d:[{f:"1345-01-01",t:"1402-07-28",y:"ilhak",kesinlik:{f:"yil",t:"gun"},kaynak:"BEYAN bölge sahibi: Çanakkale/Lapseki/Biga zinciri (Karesi) — TDV canakkale: 'Karesi Beyliği’nin toprakları da bu yöreye kadar uzanıyordu' · TDV karesiogullari: 'Böylece Karesi Beyliği Osmanlı Beyliği topraklarına katılmış oldu (746/1345 veya hemen sonrası)' — YIL · ⚠️ ÇELİŞKİ (TDV kendi içinde): TDV canakkale 'Bu beyliğin topraklarının Sultan I. Murad tarafından 1360 yılında Osmanlı topraklarına kesin olarak katılmasıyla Çanakkale yöresi Osmanlı idaresine geçmiş oldu' der; atlasın Karesi kümesi 1345'i kullanır, tek noktada ayrılmadı"},{f:"1413-07-05",t:"1920-04-23"}] },

// ───────── KUTU-HATALI-1015 · 0076/H-0044 + H-0081 — Şarkî Rumeli'nin doğusu: Burgaz sancağı ─────────
{ ad:"Burgaz (Burgas)", kaynak:"TDV bulgaristan — KUTU-HATALI-1015 (0076/H-0044, H-0081)", neden:"KUTU-HATALI-1015: KOŞU 25'te Burgaz/Aytos mevkii 1880'de DOĞRUDAN Osmanlı boyalıydı — Burgaz sancağı Berlin'le Şarkî Rumeli'nindi (TDV bulgaristan) ama mevkide nokta YOKTU (45 km içinde nokta yok); bölge Umur Fakih (Fakia, 1913'e dek d:) peteğine emiliyordu (§2)", tur:"sehir", lat:42.4975, lon:27.4700, g:0, k:0,
  s:[{f:"1281-01-01",t:"1371-09-26",d:"bulgaristan",kaynak:"BEYAN bölge sahibi (1402 öncesi): bu mevkii bugün boyayan Umur Fakih zinciri — haritada değişiklik YOK; Burgaz'ın Osmanlı'ya geçiş yılı kaynakta BULUNAMADI (TDV'de burgaz maddesi yok, arama 39 içerik isabeti, hiçbiri fetih yılı vermiyor) · ⚠️ TDV bulgaristan: Savua Kontu Amadée 1366-67'de 'Bulgarlar’a ait Süzebolu, Ahyolu ve Misivri’yi' aldı — kıyı kasabaları için 1367 sonrası Bizans dönemi olası, şehir düzeyinde ÖLÇÜLMEDİ"},{f:"1402-07-28",t:"1403-02-01",d:"suleyman-celebi"},{f:"1403-02-01",t:"1424-02-22",d:"bizans",kaynak:"TDV fetret-devri: Gelibolu Antlaşması (Şubat 1403 — AY) 'Misivri’ye kadar Karadeniz sahillerini … Bizanslılar’a terkediyordu' · TDV murad-ii: 22 Şubat 1424 antlaşmasıyla Karadeniz kıyılarında 1402’den sonra alınan yerler geri verildi · Burgaz Misivri'nin güneyindeki kıyıdadır · gün ve zincir komşudan: Ahtapolu (KORIDOR-0081)"},{f:"1885-09-18",t:"1908-10-05",d:"bulgaristan-prensligi",kaynak:"TDV bulgaristan: 'Prenslik 1885’te Doğu Rumeli vilâyetini de topraklarına kattı' — YIL; gün 1885-09-18 komşu İslimye/Hasköy kaydıyla aynı (künyeden devralınmış gün, D210 bildirimi orada)"},{f:"1908-10-05",t:"1946-09-15",d:"bulgaristan-kralligi",kaynak:"TDV bulgaristan: 5 Ekim 1908"},{f:"1946-09-15",t:"1990-11-15",d:"bulgaristan-halk",kaynak:"LoC Bulgaria Country Study"},{f:"1990-11-15",t:"2000-12-31",d:"bulgaristan-cumhuriyeti",kaynak:"LoC Bulgaria Country Study"}],
  d:[{f:"1371-09-26",t:"1402-07-28",kaynak:"BEYAN bölge sahibi (1402 öncesi): bu mevkii bugün boyayan Umur Fakih zinciri — haritada değişiklik YOK; Burgaz'ın Osmanlı'ya geçiş yılı kaynakta BULUNAMADI (TDV'de burgaz maddesi yok, arama 39 içerik isabeti, hiçbiri fetih yılı vermiyor) · ⚠️ TDV bulgaristan: Savua Kontu Amadée 1366-67'de 'Bulgarlar’a ait Süzebolu, Ahyolu ve Misivri’yi' aldı — kıyı kasabaları için 1367 sonrası Bizans dönemi olası, şehir düzeyinde ÖLÇÜLMEDİ"},{f:"1424-02-22",t:"1878-07-13",kaynak:"TDV fetret-devri: Gelibolu Antlaşması (Şubat 1403 — AY) 'Misivri’ye kadar Karadeniz sahillerini … Bizanslılar’a terkediyordu' · TDV murad-ii: 22 Şubat 1424 antlaşmasıyla Karadeniz kıyılarında 1402’den sonra alınan yerler geri verildi · Burgaz Misivri'nin güneyindeki kıyıdadır · gün ve zincir komşudan: Ahtapolu (KORIDOR-0081)"}],
  v:[{f:"1878-07-13",t:"1885-09-18",k:"Şarkî Rumeli vilâyeti",statu:"vassal",kid:"sarki-rumeli",kaynak:"TDV bulgaristan: 'Filibe, İslimye, Eski Zağra, Tatarpazarcığı, Burgaz ve Hasköy sancaklarından müteşekkil Doğu Rumeli vilâyeti oluşturuldu' · gün: Berlin Antlaşması 1878-07-13 (komşu İslimye/Hasköy ile aynı)"}] },
{ ad:"Aydos (Aytos)", kaynak:"TDV bulgaristan — KUTU-HATALI-1015 (0076/H-0044, H-0081)", neden:"KUTU-HATALI-1015: Burgaz sancağının iç kesimi (Aydos kazası) 1880'de doğrudan Osmanlı boyalıydı; mevkide nokta yoktu, bölge Prevadi/Umur Fakih peteğine emiliyordu (§2)", tur:"sehir", lat:42.7010, lon:27.2500, g:0, k:0,
  s:[{f:"1281-01-01",t:"1388-01-01",d:"bulgaristan",kaynak:"BEYAN bölge sahibi (1878 öncesi): bu mevkii bugün boyayan Prevadi zinciri — haritada değişiklik YOK; Aydos'un Osmanlı'ya geçiş yılı kaynakta BULUNAMADI (TDV'de aydos maddesi yok — slug 302; TDV bulgaristan Aydos'u yalnız XVI. yüzyıl yörük iskânı ve nüfus listelerinde anar)"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},{f:"1885-09-18",t:"1908-10-05",d:"bulgaristan-prensligi",kaynak:"TDV bulgaristan: 'Prenslik 1885’te Doğu Rumeli vilâyetini de topraklarına kattı' — YIL; gün 1885-09-18 komşu İslimye/Hasköy kaydıyla aynı (künyeden devralınmış gün, D210 bildirimi orada)"},{f:"1908-10-05",t:"1946-09-15",d:"bulgaristan-kralligi",kaynak:"TDV bulgaristan: 5 Ekim 1908"},{f:"1946-09-15",t:"1990-11-15",d:"bulgaristan-halk",kaynak:"LoC Bulgaria Country Study"},{f:"1990-11-15",t:"2000-12-31",d:"bulgaristan-cumhuriyeti",kaynak:"LoC Bulgaria Country Study"}],
  d:[{f:"1388-01-01",t:"1402-07-28",kaynak:"BEYAN bölge sahibi (1878 öncesi): bu mevkii bugün boyayan Prevadi zinciri — haritada değişiklik YOK; Aydos'un Osmanlı'ya geçiş yılı kaynakta BULUNAMADI (TDV'de aydos maddesi yok — slug 302; TDV bulgaristan Aydos'u yalnız XVI. yüzyıl yörük iskânı ve nüfus listelerinde anar)"},{f:"1413-07-05",t:"1878-07-13"}],
  v:[{f:"1878-07-13",t:"1885-09-18",k:"Şarkî Rumeli vilâyeti",statu:"vassal",kid:"sarki-rumeli",kaynak:"TDV bulgaristan: 'Filibe, İslimye, Eski Zağra, Tatarpazarcığı, Burgaz ve Hasköy sancaklarından müteşekkil Doğu Rumeli vilâyeti oluşturuldu' · gün: Berlin Antlaşması 1878-07-13 (komşu İslimye/Hasköy ile aynı)"}] },
];
