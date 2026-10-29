// =====================================================================
// KIRIM — petek seyrekliğini kapatan parti (PETEK/NOKTA oturumu, 3 Ağustos 2026)
// =====================================================================
// ⚠️ HENÜZ CANLI DEĞİL. `arac/girdi.py` → GIRDI_DOSYALARI listesine EKLENMEDİ.
//    Bağlamayı Oturum 0 yapar; ölçülmüş ön koşullar aşağıda.
//
// ── NİÇİN VAR ────────────────────────────────────────────────────────
// Kullanıcı ON ayrı madde yazdı: "kıymık gibi uzayan gösterim", "kopuk toprak
// parçası", "tek noktadan birleşen koridor", "boğumlu yapı", "şu saçma cetvelle
// bölünmüş Kırım". Onu ayrı hata değil, TEK motor özelliğinin on yüzü:
// CLAUDE.md §2 — noktası olmayan bölge en yakın peteğe emilir ve petek sınırı
// iki komşunun ORTA DİKMESİDİR, yani düz çizgi. Nokta seyrekse çizgi uzar.
//
//   KIRIM          3 nokta ·  70.868 km²  →  nokta başına 23.623 km²
//   BATI ANADOLU  60 nokta · 129.265 km²  →  nokta başına  2.154 km²
//                                             ⇒ Kırım 11 KAT SEYREK
//
// Yarımadayı üçe bölen o cetvel çizgileri Bahçesaray · Kefe · Kerç'in orta
// dikmeleriydi. Bu parti 9 nokta ekliyor: 3 → 12, nokta başına 5.906 km².
// (Hâlâ Batı Anadolu'nun 2,7 katı seyrek; ama 11 kat değil.)
//
// ── ÖLÇÜLMÜŞ ÖN KOŞULLAR (canlıymış gibi ayrıca koşturuldu) ──────────
// ① kara maskesi (veri-kaynak/motor_kara.geojson): 9/9 nokta İÇERİDE
// ② 3 km kuralı: 1579 canlı noktaya karşı en yakın çift 21,58 km
//    (Eski Kırım ↔ Kefe); partinin kendi içinde en yakın 27,95 km
//    (Yalta ↔ Aluşta). İhlal YOK.
// ③ devlet kimlikleri: altinorda · kirim · ceneviz · rusya — DÖRDÜ DE
//    renkler.py BOYALAR'ında tanımlı. YENİ RENK GEREKMİYOR.
// ④ 🔴 Değişmez 2 borcu SIFIR. Bütün kırılma günleri (d:/v: dönem uçları)
//    veride ZATEN VAR olan günlerden seçildi — 1475-06-06 (Kefe),
//    1771-07-01 (Kefe isg / Bahçesaray), 1783-04-19 (Kefe, Bahçesaray).
//    Yeni bir kronoloji maddesi borcu doğurmuyor; bu oturum olaylar*.js'e
//    yazamadığı için ölçüt buydu ve tutturuldu.
// ⑤ Değişmez 1: dokuz zincirin dokuzu da 1281-01-01 → 1923-10-29 arası
//    KESİNTİSİZ. Sahipsiz pencere yok.
// ⑥ Değişmez 3: Osmanlı doğrudan dört noktanın m: alanı "Kefe" ve zincirleri
//    Kefe ile BİREBİR aynı → çelişki üretemez. Han toprağı beş nokta k:0 /
//    m:yok (Osmanlı idarî merdiveninde değiller) → ölçüme hiç girmiyor.
//
// ── KAYNAK ───────────────────────────────────────────────────────────
// TDV, <title> ile sınandı (CLAUDE.md §4 ölü slug tuzağı):
//   CANLI: `kirim` · `kefe` · `bahcesaray` · `karasubazar` · `akmescid`
//          · `han-camii` (Gözleve'deki Mimar Sinan camii — yerin TDV tanığı)
//   ÖLÜ  : `gozleve` · `sudak` · `mankup` · `mangub` · `orkapi`
//          (beşi de "Arama - TDV İslâm Ansiklopedisi" döndürüyor)
//
// TDV `kirim`in iki belirleyici cümlesi bu partinin omurgası:
//   • "Kerç'ten itibaren Balıklava'ya kadar uzanan sahiller doğrudan Osmanlı
//     kontrolü altına alındı" — sahil şeridi Kefe sancağı, iç kısım han.
//   • Sahil şehirleri: Gözleve (Kezlev), Kefe, Sudak, İnkerman, Balıklava,
//     Mangub, Yalta, Aluşta, Kerç. İç şehirler: Akmescid (kalgayların
//     merkezi), Karasubazar, Bahçesaray, Salacık.
// TDV `kefe`: sancak BEŞ kazadan kuruluydu — Mangub, Suğdak, Kerç, Azak,
//   Taman; Balıklava ve İnkerman idarî olarak Mangub'a bağlıydı.
//
// ── İKİ ZİNCİR, İKİ SAHİPLİK ─────────────────────────────────────────
// A) HAN TOPRAĞI (Gözleve · Or Kapı · Akmescid · Karasubazar · Eski Kırım)
//    Bahçesaray kaydının BİREBİR aynısı: altinorda → 1441 kirim →
//    1475-06-06 Osmanlı tâbii (v:) → 1771-07-01 Rus işgali (s:) →
//    1774-07-21 Küçük Kaynarca ile kirim → 1783-04-19 Rus ilhakı.
//    ⚠️ 1441: TDV `kirim` "Hacı Giray tarafından 1441-42'de kurulan hanlık".
//       Bozkırın 1502'de geçtiği (yerlesimler.js "Bozkır (Deşt-i Kıpçak)"
//       kaydı) ile ÇELİŞMEZ — o Büyük Orda'nın yıkılışıyla Deşt-i Kıpçak'ın
//       devralınmasıdır; yarımadanın kendisi 1441'de zaten hanlıktır.
//    ⚠️ 1783-04-19: TDV `kirim` 8 Nisan 1783 diyor (eski takvim). Depo
//       boyunca 19 Nisan (yeni takvim) kullanılıyor — Kefe, Bahçesaray,
//       Kuban, Bozkır kayıtlarının hepsi. Yeni bir gün AÇMADIM.
//
// B) KEFE SANCAĞI SAHİLİ (Sudak · Balaklava · Yalta · Aluşta)
//    Kefe kaydının birebir aynısı: ceneviz → 1475-06-06 Osmanlı DOĞRUDAN →
//    1783-04-19 Rusya; 1771-07-01'den ilhaka kadar `isg:` Rus işgali örtüsü
//    (de jure Osmanlı, de facto Rus — girdi.py'nin isg: gerekçesi).
//    ⚠️ 1281'den itibaren `ceneviz`: Ceneviz Kefe'ye 1266, Cembalo'ya 1345,
//       Soldaya'ya 1365'te yerleşti; yani 1281-01-01 damgası bu üçünde
//       teknik olarak erken. AMA depodaki bütün kardeş kayıtlar (Kefe, Kerç,
//       Azak, Taman) aynı damgayı taşıyor ve tarihleri ayırmak KAYNAKSIZ
//       dört yeni kırılma açardı. Ev sözleşmesine uyuldu, fark burada yazılı.
//    ⚠️ 1475-06-06: TDV `kefe` "Safer 880 / Haziran 1475". Gün depoda Kefe
//       için zaten seçilmiş; Gedik Ahmed Paşa'nın aynı seferi sahili
//       Balıklava'ya kadar aldığı için dördüne de aynı gün verildi.
//       Sudak'ın/Balaklava'nın ayrı teslim GÜNÜ kaynakla bulunamadı —
//       uydurulmadı, kampanya günü kullanıldı.
//
// ── EKLENMEYENLER ve NİÇİN ───────────────────────────────────────────
// 🔴 MANKUP (44.5942, 33.8044) — EKLENMEDİ. Theodoro (Gotya) Prensliği'nin
//    başkenti; Ceneviz DEĞİL (görev tanımı da bunu ayırt etmişti).
//    Engel RENK: renkler.py'de `teodoro` kimliği YOK ve bu oturum
//    renkler.py'ye yazamaz. Renksiz dönem motor kuralınca BOŞLUK üretir —
//    yani 1281-1475 arası Kırım'ın güneybatısında 194 yıllık delik.
//    `bizans` yazmak da çözüm DEĞİL: Bizans 1453-05-29'da bitiyor, o kayıt
//    CLAUDE.md §3.5'in hayalet devlet sınıfını (Batnoz'un birebir aynısını)
//    üretirdi. ⇒ RENK oturumu `teodoro` yazınca Mankup + İnkirman tek
//    hamlede eklenir; sahil zaten Balaklava ile temsil ediliyor.
// 🔴 İNKİRMAN (Kalamita, 44.6072, 33.6061) — EKLENMEDİ, aynı sebep:
//    Kalamita Theodoro'nun limanıydı, Ceneviz'in değil. Maske ✓, 3 km ✓;
//    tek eksik renk. (Balaklava'ya 11,94 km — eklenince ikisi de geçerli.)
// 🟡 AZAK ve TAMAN — zaten var (yerlesimler.js). Görev tanımı "ayrı bak"
//    demişti: bakıldı, DOKUNULMADI. Taman'ın 1482-06-01 alınışı depoda
//    gerekçeli (Ceneviz Matrega'sı 1475'te değil 1482'de düştü); TDV `kefe`
//    onu sancağın beş kazasından biri sayıyor ama kaza olması ile fethin
//    GÜNÜ ayrı sorular — CLAUDE.md §3.5.1'in "merkez düştü diye çevre
//    otomatik devrolmaz" dersi. Değiştirmek için kaynak yok.
// 🟡 YENİKALE — EKLENMEDİ: Kerç'e ~8 km, 3 km kuralını geçse de ayrı petek
//    üretmez, yalnız Kerç'in peteğini ikiye böler. Kazanç yok.
// 🟡 KIRIM İÇ BOZKIRI (Cönköy/Sivaş arası) — dolgu noktası EKLENMEDİ ve
//    gerekmiyor: Or Kapı boğazı artık noktalıdır, kuzey bozkırı Or Kapı ·
//    Gözleve · Karasubazar arasında bölünüyor ve ÜÇÜ DE AYNI SAHİPLİ (han).
//    Aynı sahipli petekler arasındaki çizgi haritada görünmez — kullanıcının
//    şikâyet ettiği cetvel de bu yüzden kayboluyor.
//
// ── OR KAPI: YERLEŞİM SAYILDI, GEREKÇESİ ─────────────────────────────
// Görev tanımı "yerleşim sayılıp sayılmayacağına karar ver ve gerekçesini
// yaz" dedi. SAYILDI, tur:"kale". Üç sebep:
//   ① TDV `kirim` onu adıyla anıyor: "Orkapı'daki Ferahkirman adlı kale",
//      1538'de Sâhib Giray tarafından inşa; Or beyi hanlığın makamıdır.
//   ② Motor açısından belirleyici olan şudur: Or Kapı yarımadanın KARAYA
//      bağlandığı 7 km'lik tek boğazdır. Orada nokta olmayınca Kırım'ın
//      kuzey sınırını çizen orta dikme, 500 km ötedeki "Bozkır (Deşt-i
//      Kıpçak)" (48,50°K / 42,00°D) ile Gözleve arasında kalıyordu —
//      kullanıcının gördüğü "boğumlu yapı" ve "tek noktadan birleşen
//      koridor" tam olarak budur.
//   ③ Kale 1538'de yapıldı ama GEÇİT ondan eski: "Or" hendek demektir ve
//      berzahın tahkimi antik çağa iner. Bu yüzden `kur:` YAZILMADI —
//      1538 damgası vurulsaydı motor peteği 257 yıl boyunca komşuya
//      devreder ve düzeltilen artefakt 1281-1538 arasında geri gelirdi.
//
// ⚠️ AKMESCİD'de aynı soru soruldu, aynı cevap verildi: TDV `akmescid` adı
//    Mengli Giray (ö. 1514) devrinde yapılan camiden getiriyor. `kur:`
//    yazılmadı, çünkü ① yerleşim yeri (Kermençik) daha eski, ② kayıt
//    Bahçesaray ile AYNI sahiplik zincirini taşıdığı için kur: olsa da
//    olmasa da haritada tek piksel fark etmez — ama uydurma bir kuruluş
//    günü kalıcı bir yanlış olurdu.
// =====================================================================

window.YERLESIMLER_KIRIM = [

// ── A) HAN TOPRAĞI — Bahçesaray zincirinin birebir aynısı ────────────
{ ad:"Gözleve (Kezlev)", isg:[{f:"1771-07-01",t:"1774-07-21",d:"rusya",kaynak:"TDV kirim — '1771'de Prens Dolgorukov idaresinde Kırım yarımadasını istilâ ettiler', '1772'de Rus işgali altında toplanan kurultay' · TDV mustafa-iii — 'Temmuz 1771'. İŞGALDİR, ilhak DEĞİL (ilhak 1783): hanlığın Osmanlı'ya tâbiliği Küçük Kaynarca'ya kadar sürdü ⇒ v: 1774-07-21'e uzatıldı, s:rusya 1771-1774 kaldırıldı; kıyı kalelerinin isg modeliyle aynı. ⚠️ GÜN: kaynak yalnız AY veriyor (Temmuz 1771) — 1771-07-01 bir AY KODUDUR, olay günü DEĞİLDİR. YAMA-SEFER1768-0917 Y-1 · 1.MURAT M-4500 · UYGULA-4 18 Eyl 2026."}], neden:"k:4, m:— idi. v: (tâbi Kırım) dönemindeki bir Hanlık limanı; Kefe'nin beş kazası arasında değil (bkz. Mankup notu).",kaynak:"TDV `bahcesaray` — \"Kırım Hanlığı'nın idari merkezi\" (XVI. yy sonundan itibaren)",m:"Bahçesaray", tur:"liman", lat:45.1904, lon:33.3669, g:0, k:4,
  s:[{f:"1281-01-01",t:"1441-01-01",d:"altinorda"},{f:"1441-01-01",t:"1475-06-06",d:"kirim"},{f:"1774-07-21",t:"1783-04-19",d:"kirim"},{f:"1783-04-19",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-08-24",d:"sovyet-rusya"},{f:"1991-08-24",t:"2000-12-31",d:"ukrayna",kesinlik:"gun",kaynak:"Encyclopedia of Ukraine (CIUS) 'Crimea' (encyclopediaofukraine.com/display.asp?linkpath=pages%5CC%5CR%5CCrimea.htm): Kırım 19 Şubat 1954’te RSFSR’den Ukrayna SSC’ye devredildi; Ukrayna 24 Ağustos 1991’de bağımsızlığını ilan etti, 1 Aralık 1991 referandumu doğruladı; Kırım ‘Autonomous Republic of Crimea’ olarak Ukrayna içinde kaldı (1996 Anayasası: ‘inseparable constituent part of Ukraine’); Rusya ilhakı 18 Mart 2014 (atlas ufku 2000-12-31). Eski kayıt (1991-12-26 ‘rusya-federasyonu’) SSCB feshi maddesindeki kendi notuyla işaretli hataydı. · BEYAN: Sivastopol/Karadeniz Filosu üs hakkı ve 1992-95 özerklik çekişmesi ayrı dilimlenmedi, de jure Ukrayna yazıldı · LEHISTAN-KRON 28 Ekim 2026"}],
  d:[], v:[{f:"1475-06-06",t:"1774-07-21",k:"Kırım Hanlığı",statu:"vassal",kid:"kirim"}] },

{ ad:"Or Kapı (Ferahkirman)", isg:[{f:"1736-06-01",t:"1736-08-27",d:"rusya",kaynak:"Sytin, Voennaya Entsiklopediya «Перекоп» t.18 s.363-364: Münnich 20 Mayıs şafakta hatlara hücum etti, '21-го подписана б. капитуляция' (Or kalesi); '16 авг. выступил в Украйну, предвар-но раззорив Перекопскую укрепл. линию' — giriş Jülyen 21 Mayıs 1736 = Gregoryen 1 Haziran 1736 · çıkış Jülyen 16 Ağustos 1736 = Gregoryen 27 Ağustos 1736 (ESBE «Турецкие войны России» aynı olayı '1 июня' ve '28 августа' verir — Gregoryen karşılıkları; çıkışta 1 gün ayrışma, VE esas) · KISA BASKIN KURALI: kaynak giriş VE çıkış gününü veriyor · KAYNAK-1015/G1 · KARAR-UYG-1015 · TAKVİM: Emre #10 (KARARLAR-EMRE-1015) — Rus kaynağının Jülyen günü Gregoryen'e çevrildi (1700-03-01..1800-02-28 +11)"},{f:"1771-06-26",t:"1774-07-21",d:"rusya",kaynak:"TAKVİM-1015 (Emre #10: atlas günleri Gregoryen, Jülyen gün çevrildi): Jülyen 1771-06-15 (Orkapı garnizonunun teslimi; VE «Перекоп» '15 июня', eski takvim) = Gregoryen 1771-06-26 · TAKVİM (EMRE KARARI 14 Ekim 2026, KARARLAR-1014 m.28, kutu 0065): VERI-YAPISI TAKVİM kuralına dönüldü, Jülyen gün ÇEVRİLMEDEN yazıldı — Voennaya Entsiklopediya «Перекоп» 15 Haziran (Jülyen); eski Gregoryen çevirisi 1771-06-26 geri alındı, aşağıdaki çeviri açıklaması ESKİDİR. ESKİ NOT: TDV kirim — '1771'de Prens Dolgorukov idaresinde Kırım yarımadasını istilâ ettiler', '1772'de Rus işgali altında toplanan kurultay' · TDV mustafa-iii — 'Temmuz 1771'. İŞGALDİR, ilhak DEĞİL (ilhak 1783): hanlığın Osmanlı'ya tâbiliği Küçük Kaynarca'ya kadar sürdü ⇒ v: 1774-07-21'e uzatıldı, s:rusya 1771-1774 kaldırıldı; kıyı kalelerinin isg modeliyle aynı. GÜN: 1771-06-26 = Voennaya Entsiklopediya «Перекоп» '15 июня … гарнизон крепостцы сдался' (Jülyen 15 Haziran + 11). YAMA-SEFER1768-0917 Y-1 · 1.MURAT M-4500 · UYGULA-4 18 Eyl 2026."},{f:"1776-12-03",t:"1783-04-19",d:"rusya",kaynak:"Dubrovin N. F., Присоединение Крыма к России T.1 (SPb 1885) №91, Prozorovski'nin 28 Kasım 1776 raporu: 22'sinde Devlet Giray, kaymakam ve Tatarlar Perekop'tan çekildi, 'то я оную крѣпость Оръ съ перекопскою линіею занялъ' — Jülyen 22 Kasım 1776 = Gregoryen 3 Aralık 1776 · TDV sahin-giray: '1776 Kasımında General Prozorovski, Orkapı’yı alıp Kırım’a girdi' (ay) · TDV kirim: 'Ruslar Orkapı’da da yerleştiler' · bitiş: Kırım'ın ilhakı 1783-04-19 (sahiplik rusya'ya geçer) · hanlık bu dönemde hukuken bağımsız (s:kirim) — işgal örtüsü · KAYNAK-1015/G1 · KARAR-UYG-1015 · TAKVİM: Emre #10 (KARARLAR-EMRE-1015) — Rus kaynağının Jülyen günü Gregoryen'e çevrildi (1700-03-01..1800-02-28 +11)"}], neden:"k:4, m:— idi. v: (tâbi Kırım) dönemi, Kefe'nin beş kazası dışında.",kaynak:"TDV `bahcesaray` — aynı gerekçe",m:"Bahçesaray", tur:"kale", lat:46.1600, lon:33.6900, g:0, k:4,
  s:[{f:"1281-01-01",t:"1441-01-01",d:"altinorda"},{f:"1441-01-01",t:"1475-06-06",d:"kirim"},{f:"1774-07-21",t:"1783-04-19",d:"kirim"},{f:"1783-04-19",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-08-24",d:"sovyet-rusya"},{f:"1991-08-24",t:"2000-12-31",d:"ukrayna",kesinlik:"gun",kaynak:"Encyclopedia of Ukraine (CIUS) 'Crimea' (encyclopediaofukraine.com/display.asp?linkpath=pages%5CC%5CR%5CCrimea.htm): Kırım 19 Şubat 1954’te RSFSR’den Ukrayna SSC’ye devredildi; Ukrayna 24 Ağustos 1991’de bağımsızlığını ilan etti, 1 Aralık 1991 referandumu doğruladı; Kırım ‘Autonomous Republic of Crimea’ olarak Ukrayna içinde kaldı (1996 Anayasası: ‘inseparable constituent part of Ukraine’); Rusya ilhakı 18 Mart 2014 (atlas ufku 2000-12-31). Eski kayıt (1991-12-26 ‘rusya-federasyonu’) SSCB feshi maddesindeki kendi notuyla işaretli hataydı. · BEYAN: Sivastopol/Karadeniz Filosu üs hakkı ve 1992-95 özerklik çekişmesi ayrı dilimlenmedi, de jure Ukrayna yazıldı · LEHISTAN-KRON 28 Ekim 2026"}],
  d:[], v:[{f:"1475-06-06",t:"1774-07-21",k:"Kırım Hanlığı",statu:"vassal",kid:"kirim"}] },

{ ad:"Akmescid", isg:[{f:"1771-07-01",t:"1774-07-21",d:"rusya",kaynak:"TDV kirim — '1771'de Prens Dolgorukov idaresinde Kırım yarımadasını istilâ ettiler', '1772'de Rus işgali altında toplanan kurultay' · TDV mustafa-iii — 'Temmuz 1771'. İŞGALDİR, ilhak DEĞİL (ilhak 1783): hanlığın Osmanlı'ya tâbiliği Küçük Kaynarca'ya kadar sürdü ⇒ v: 1774-07-21'e uzatıldı, s:rusya 1771-1774 kaldırıldı; kıyı kalelerinin isg modeliyle aynı. ⚠️ GÜN: kaynak yalnız AY veriyor (Temmuz 1771) — 1771-07-01 bir AY KODUDUR, olay günü DEĞİLDİR. YAMA-SEFER1768-0917 Y-1 · 1.MURAT M-4500 · UYGULA-4 18 Eyl 2026."}], neden:"k:3, m:— idi. v: (tâbi Kırım) dönemi, Kefe'nin beş kazası dışında.",kaynak:"TDV `bahcesaray` — aynı gerekçe",m:"Bahçesaray", tur:"sehir", lat:44.9521, lon:34.1024, g:0, k:3,
  s:[{f:"1281-01-01",t:"1441-01-01",d:"altinorda"},{f:"1441-01-01",t:"1475-06-06",d:"kirim"},{f:"1774-07-21",t:"1783-04-19",d:"kirim"},{f:"1783-04-19",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-08-24",d:"sovyet-rusya"},{f:"1991-08-24",t:"2000-12-31",d:"ukrayna",kesinlik:"gun",kaynak:"Encyclopedia of Ukraine (CIUS) 'Crimea' (encyclopediaofukraine.com/display.asp?linkpath=pages%5CC%5CR%5CCrimea.htm): Kırım 19 Şubat 1954’te RSFSR’den Ukrayna SSC’ye devredildi; Ukrayna 24 Ağustos 1991’de bağımsızlığını ilan etti, 1 Aralık 1991 referandumu doğruladı; Kırım ‘Autonomous Republic of Crimea’ olarak Ukrayna içinde kaldı (1996 Anayasası: ‘inseparable constituent part of Ukraine’); Rusya ilhakı 18 Mart 2014 (atlas ufku 2000-12-31). Eski kayıt (1991-12-26 ‘rusya-federasyonu’) SSCB feshi maddesindeki kendi notuyla işaretli hataydı. · BEYAN: Sivastopol/Karadeniz Filosu üs hakkı ve 1992-95 özerklik çekişmesi ayrı dilimlenmedi, de jure Ukrayna yazıldı · LEHISTAN-KRON 28 Ekim 2026"}],
  d:[], v:[{f:"1475-06-06",t:"1774-07-21",k:"Kırım Hanlığı",statu:"vassal",kid:"kirim"}] },

{ ad:"Karasubazar", isg:[{f:"1737-07-25",t:"1737-07-26",d:"rusya",kaynak:"Sytin, Voennaya Entsiklopediya «Крымские походы» t.14 s.326-333: '14 июля армия двинулась дальше' — Duglas'ın öncü kolu 'без сопр-ления занял Карасу-базар и превратил его в пепел'; '15-го Ласси выступил обратно' — giriş Jülyen 14 Temmuz 1737 = Gregoryen 25 Temmuz · çıkış Jülyen 15 Temmuz = Gregoryen 26 Temmuz · ESBE «Карасубазар»: 1737'de Duglas komutasında Ruslar şehri aldı (yıl) · KISA BASKIN KURALI: kaynak giriş VE çıkış gününü veriyor · KAYNAK-1015/G1 · KARAR-UYG-1015 · TAKVİM: Emre #10 (KARARLAR-EMRE-1015) — Rus kaynağının Jülyen günü Gregoryen'e çevrildi (1700-03-01..1800-02-28 +11)"},{f:"1771-07-01",t:"1774-07-21",d:"rusya",kaynak:"TDV kirim — '1771'de Prens Dolgorukov idaresinde Kırım yarımadasını istilâ ettiler', '1772'de Rus işgali altında toplanan kurultay' · TDV mustafa-iii — 'Temmuz 1771'. İŞGALDİR, ilhak DEĞİL (ilhak 1783): hanlığın Osmanlı'ya tâbiliği Küçük Kaynarca'ya kadar sürdü ⇒ v: 1774-07-21'e uzatıldı, s:rusya 1771-1774 kaldırıldı; kıyı kalelerinin isg modeliyle aynı. ⚠️ GÜN: kaynak yalnız AY veriyor (Temmuz 1771) — 1771-07-01 bir AY KODUDUR, olay günü DEĞİLDİR. YAMA-SEFER1768-0917 Y-1 · 1.MURAT M-4500 · UYGULA-4 18 Eyl 2026."}], neden:"k:3, m:— idi. v: (tâbi Kırım) dönemi, Kefe'nin beş kazası dışında.",kaynak:"TDV `bahcesaray` — aynı gerekçe",m:"Bahçesaray", tur:"sehir", lat:45.0556, lon:34.6000, g:0, k:3,
  s:[{f:"1281-01-01",t:"1441-01-01",d:"altinorda"},{f:"1441-01-01",t:"1475-06-06",d:"kirim"},{f:"1774-07-21",t:"1783-04-19",d:"kirim"},{f:"1783-04-19",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-08-24",d:"sovyet-rusya"},{f:"1991-08-24",t:"2000-12-31",d:"ukrayna",kesinlik:"gun",kaynak:"Encyclopedia of Ukraine (CIUS) 'Crimea' (encyclopediaofukraine.com/display.asp?linkpath=pages%5CC%5CR%5CCrimea.htm): Kırım 19 Şubat 1954’te RSFSR’den Ukrayna SSC’ye devredildi; Ukrayna 24 Ağustos 1991’de bağımsızlığını ilan etti, 1 Aralık 1991 referandumu doğruladı; Kırım ‘Autonomous Republic of Crimea’ olarak Ukrayna içinde kaldı (1996 Anayasası: ‘inseparable constituent part of Ukraine’); Rusya ilhakı 18 Mart 2014 (atlas ufku 2000-12-31). Eski kayıt (1991-12-26 ‘rusya-federasyonu’) SSCB feshi maddesindeki kendi notuyla işaretli hataydı. · BEYAN: Sivastopol/Karadeniz Filosu üs hakkı ve 1992-95 özerklik çekişmesi ayrı dilimlenmedi, de jure Ukrayna yazıldı · LEHISTAN-KRON 28 Ekim 2026"}],
  d:[], v:[{f:"1475-06-06",t:"1774-07-21",k:"Kırım Hanlığı",statu:"vassal",kid:"kirim"}] },

// Solhat / Eski Kırım — Altın Orda'nın Kırım valiliğinin merkeziydi ve
// yarımadaya adını veren yerdir (TDV `kirim`). Kefe'ye 21,58 km; sahil
// şeridi ile iç toprağın rengi arasındaki gerçek sınırı O taşıyor.
{ ad:"Eski Kırım (Solhat)", isg:[{f:"1771-07-01",t:"1774-07-21",d:"rusya",kaynak:"TDV kirim — '1771'de Prens Dolgorukov idaresinde Kırım yarımadasını istilâ ettiler', '1772'de Rus işgali altında toplanan kurultay' · TDV mustafa-iii — 'Temmuz 1771'. İŞGALDİR, ilhak DEĞİL (ilhak 1783): hanlığın Osmanlı'ya tâbiliği Küçük Kaynarca'ya kadar sürdü ⇒ v: 1774-07-21'e uzatıldı, s:rusya 1771-1774 kaldırıldı; kıyı kalelerinin isg modeliyle aynı. ⚠️ GÜN: kaynak yalnız AY veriyor (Temmuz 1771) — 1771-07-01 bir AY KODUDUR, olay günü DEĞİLDİR. YAMA-SEFER1768-0917 Y-1 · 1.MURAT M-4500 · UYGULA-4 18 Eyl 2026."}], neden:"k:3, m:— idi. v: (tâbi Kırım) dönemi, Kefe'nin beş kazası dışında.",kaynak:"TDV `bahcesaray` — aynı gerekçe (not: Solhat, Bahçesaray'dan ÖNCEKİ hanlık başkentiydi, TDV'nin kendi metninde geçiyor: \"Solhat ve Kırk Yer önemini kaybetti\" Bahçesaray'ın yükselişiyle)",m:"Bahçesaray", tur:"sehir", lat:45.0281, lon:35.1078, g:0, k:3,
  s:[{f:"1281-01-01",t:"1441-01-01",d:"altinorda"},{f:"1441-01-01",t:"1475-06-06",d:"kirim"},{f:"1774-07-21",t:"1783-04-19",d:"kirim"},{f:"1783-04-19",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-08-24",d:"sovyet-rusya"},{f:"1991-08-24",t:"2000-12-31",d:"ukrayna",kesinlik:"gun",kaynak:"Encyclopedia of Ukraine (CIUS) 'Crimea' (encyclopediaofukraine.com/display.asp?linkpath=pages%5CC%5CR%5CCrimea.htm): Kırım 19 Şubat 1954’te RSFSR’den Ukrayna SSC’ye devredildi; Ukrayna 24 Ağustos 1991’de bağımsızlığını ilan etti, 1 Aralık 1991 referandumu doğruladı; Kırım ‘Autonomous Republic of Crimea’ olarak Ukrayna içinde kaldı (1996 Anayasası: ‘inseparable constituent part of Ukraine’); Rusya ilhakı 18 Mart 2014 (atlas ufku 2000-12-31). Eski kayıt (1991-12-26 ‘rusya-federasyonu’) SSCB feshi maddesindeki kendi notuyla işaretli hataydı. · BEYAN: Sivastopol/Karadeniz Filosu üs hakkı ve 1992-95 özerklik çekişmesi ayrı dilimlenmedi, de jure Ukrayna yazıldı · LEHISTAN-KRON 28 Ekim 2026"}],
  d:[], v:[{f:"1475-06-06",t:"1774-07-21",k:"Kırım Hanlığı",statu:"vassal",kid:"kirim"}] },

// ── B) KEFE SANCAĞI SAHİLİ — Kefe zincirinin birebir aynısı ──────────
// TDV `kefe`: Suğdak sancağın beş kazasından biri.
{ ad:"Sudak (Suğdak)", tur:"liman", lat:44.8494, lon:34.9747, g:0, k:3, m:"Kefe",
  s:[{f:"1000-01-01",t:"1016-01-01",d:"__BOSLUK__",kesinlik:"yil",kaynak:"BOŞLUK BEYANI: arandı, bulunamadı: Sudak 1000-1016: Hazar hâkimiyeti (Hazar Kağanlığı künyesi t=0965-01-01, BOYALAR dışı; kaynak Hazar hâkimiyetini 1010'lara uzatır). Internet Encyclopedia of Ukraine (CIUS), Sudak maddesi (https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CS%5CU%5CSudak.htm; ham metin ham/da_eu_sudak.txt; TDV dışı kaynak, elle doğrulama bekler): «under Khazar rule (660s–1010s) Sugdaia became an important seaport» f 1000-01-01 UFUK SINIR İŞARETİDİR (sahiplik öncesinden sürüyor). · VERI-MS1-1281"},{f:"1016-01-01",t:"1090-01-01",d:"bizans",kesinlik:"yil",kaynak:"Internet Encyclopedia of Ukraine (CIUS), Sudak maddesi (https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CS%5CU%5CSudak.htm; ham metin ham/da_eu_sudak.txt; TDV dışı kaynak, elle doğrulama bekler): «The demise of the Khazar rule (1016) revived Sugdaia’s allegiance to Byzantium within the Chersonese Taurica thema» || BEYANLI: bitiş \"1090s\" (onyıl) — Kuman geçişi 1090'lar, alt sınır 1090 alındı. · VERI-MS1-1281"},{f:"1090-01-01",t:"1204-01-01",d:"kipcak",kesinlik:"yil",kaynak:"Internet Encyclopedia of Ukraine (CIUS), Sudak maddesi (https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CS%5CU%5CSudak.htm; ham metin ham/da_eu_sudak.txt; TDV dışı kaynak, elle doğrulama bekler): «The fort was yielded to the Cumans (1090s–1204), then became part of the Trapezund empire» ; TDV İslâm Ansiklopedisi, kirim (https://islamansiklopedisi.org.tr/kirim): «Suğdak başta olmak üzere Kırım’ın doğu sahillerindeki limanlar Kıpçaklar’ın elindeydi» · VERI-MS1-1281"},{f:"1204-01-01",t:"1224-01-01",d:"trabzon-rum",kesinlik:"yil",kaynak:"Internet Encyclopedia of Ukraine (CIUS), Sudak maddesi (https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CS%5CU%5CSudak.htm; ham metin ham/da_eu_sudak.txt; TDV dışı kaynak, elle doğrulama bekler): «then became part of the Trapezund empire» || BEYANLI: EU Trapezund imparatorluğuna geçiş yılı vermez; 1204 = Trabzon Rum İmparatorluğu künye başlangıcı ve Kuman dilimi sonu. TDV bu geçişi anmaz. · VERI-MS1-1281"},{f:"1224-01-01",t:"1239-01-01",d:"selcuklu",kesinlik:"yil",kaynak:"TDV İslâm Ansiklopedisi, selcuklular (https://islamansiklopedisi.org.tr/selcuklular): «Karadeniz’in kuzeyindeki Suğdak şehri Hüsâmeddin Çoban tarafından fethedildi (1224)» ; TDV İslâm Ansiklopedisi, kirim (https://islamansiklopedisi.org.tr/kirim): «Hüsâmeddin Çoban idaresindeki kuvvetler Kırım’ın en önemli ticaret şehri olan Suğdak’ı ele geçirdi» || BEYANLI: fetih 1224 (TDV selcuklular; EU 1226 der — TDV esas, çelişki celiskiler'de). Bitiş 1239: TDV kirim \"1239'da ... Kırım'da Altın Orda hâkimiyeti devri başladı\"; Selçuklu hâkimiyetinin Suğdak'ta fiilî bitişi kaynakta yok. · VERI-MS1-1281"},{f:"1239-01-01",t:"1249-01-01",d:"__BOSLUK__",kesinlik:"yil",kaynak:"BOŞLUK BEYANI: arandı, bulunamadı: Sudak 1239-1249: Selçuklu hâkimiyetinin bitişi ile Altın Orda denetimine geçiş arası (EU: 1238 Moğol akını, 1249'a dek Orda denetimi); Altın Orda künyesi f=1242 ve Suğdak'a özgü geçiş günü kaynakta yok. Internet Encyclopedia of Ukraine (CIUS), Sudak maddesi (https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CS%5CU%5CSudak.htm; ham metin ham/da_eu_sudak.txt; TDV dışı kaynak, elle doğrulama bekler): «The Mongols raided it in 1223 and 1238» · VERI-MS1-1281"},{f:"1249-01-01",t:"1281-01-01",d:"altinorda",kesinlik:"yil",kaynak:"Internet Encyclopedia of Ukraine (CIUS), Sudak maddesi (https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CS%5CU%5CSudak.htm; ham metin ham/da_eu_sudak.txt; TDV dışı kaynak, elle doğrulama bekler): «by 1249 the city came under the control of the Golden Horde» || BEYANLI: \"by 1249\" üst sınır; şehir özerkliğini korudu (EU: Retaining its autonomy). 1281'e dek Ceneviz kontrolü yok (Ceneviz Suğdak 1365, TDV kirim). · VERI-MS1-1281"},{f:"1281-01-01",t:"1365-01-01",d:"altinorda",kaynak:"POSTIT #6 (Emre): bu limanda Ceneviz yerleşimi 1281'de yoktu; Altın Orda Kırım ulusu toprağı. Ceneviz öncesi: Altın Orda."},{f:"1365-01-01",t:"1475-06-06",d:"ceneviz",kesinlik:{f:"yil",t:"gun"},enklav:true,kaynak:"Ceneviz Soldaia'yı 1365'te aldı: Encyclopedia of Ukraine 'Sudak', Ru ref. booksite.ru (1365 Солдайя). Gün (19 Temmuz) yalnız Vikipedi — kullanılmadı. · KUTU-G5-1014 (0080/H-0019) enklav beyanı · TDV ceneviz: Karadeniz kolonileri '… Balıklava, Kefe ve Suğdak'ta' · 'Kefe 1475'te' (TDV kefe: 'Kefe ile beraber bütün sahil şeridi fethedildi (Safer 880 / Haziran 1475)') — denizaşırı Ceneviz kolonisi; gövdeden kopukluğu tarihîdir"},{f:"1774-07-21",t:"1783-04-19",d:"kirim",kaynak:"TDV kirim: Kaynarca m.3 'Kırım, Bucak, Kuban… tam mânasıyla müstakil'; Rusya'ya yalnız Kerç, Yenikale ve Kılburun · TDV kefe: 'İkinci Rus saldırısı ve işgali 1777'de gerçekleşti' (1777 gün kaynağı BULUNAMADI, eklenmedi) · SIRADA-C 0082/H-0029 (KARADENIZ-0082)"},{f:"1783-04-19",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-08-24",d:"sovyet-rusya"},{f:"1991-08-24",t:"2000-12-31",d:"ukrayna",kesinlik:"gun",kaynak:"Encyclopedia of Ukraine (CIUS) 'Crimea' (encyclopediaofukraine.com/display.asp?linkpath=pages%5CC%5CR%5CCrimea.htm): Kırım 19 Şubat 1954’te RSFSR’den Ukrayna SSC’ye devredildi; Ukrayna 24 Ağustos 1991’de bağımsızlığını ilan etti, 1 Aralık 1991 referandumu doğruladı; Kırım ‘Autonomous Republic of Crimea’ olarak Ukrayna içinde kaldı (1996 Anayasası: ‘inseparable constituent part of Ukraine’); Rusya ilhakı 18 Mart 2014 (atlas ufku 2000-12-31). Eski kayıt (1991-12-26 ‘rusya-federasyonu’) SSCB feshi maddesindeki kendi notuyla işaretli hataydı. · BEYAN: Sivastopol/Karadeniz Filosu üs hakkı ve 1992-95 özerklik çekişmesi ayrı dilimlenmedi, de jure Ukrayna yazıldı · LEHISTAN-KRON 28 Ekim 2026"}],
  d:[{f:"1475-06-06",t:"1774-07-21"}],
  isg:[{f:"1771-07-01",t:"1774-07-21",d:"rusya",kaynak:"kirim"}] },

// TDV `kefe`: Balıklava idarî olarak Mangub kazasına bağlıydı. Mangub bu
// partide YOK (renk engeli, yukarıda), o yüzden m: sancak merkezini
// gösteriyor — zincir Kefe ile aynı olduğu için Değişmez 3 çelişkisi yok.
{ ad:"Balaklava (Cembalo)", tur:"liman", lat:44.5000, lon:33.5997, g:0, k:4, m:"Kefe",
  s:[{f:"1281-01-01",t:"1357-01-01",d:"altinorda",kaynak:"POSTIT #6 (Emre): bu limanda Ceneviz yerleşimi 1281'de yoktu; Altın Orda Kırım ulusu toprağı. Ceneviz öncesi: Altın Orda."},{f:"1357-01-01",t:"1475-06-06",d:"ceneviz",kesinlik:{f:"yil",t:"gun"},enklav:true,kaynak:"Ceneviz Cembalo'yu 1357'de aldı: booksite.ru (1357 Чембало). ⚠️ yerlesimler_kirim.js notu 1345 diyordu; 1357 iki Rusça/Ukraynaca kaynakta; Balard/Heyd ile teyit EDİLMEDİ. · KUTU-G5-1014 (0080/H-0019) enklav beyanı · TDV ceneviz: Karadeniz kolonileri '… Balıklava, Kefe ve Suğdak'ta' · 'Kefe 1475'te' (TDV kefe: 'Kefe ile beraber bütün sahil şeridi fethedildi (Safer 880 / Haziran 1475)') — denizaşırı Ceneviz kolonisi; gövdeden kopukluğu tarihîdir"},{f:"1774-07-21",t:"1783-04-19",d:"kirim",kaynak:"TDV kirim: Kaynarca m.3 'Kırım, Bucak, Kuban… tam mânasıyla müstakil'; Rusya'ya yalnız Kerç, Yenikale ve Kılburun · TDV kefe: 'İkinci Rus saldırısı ve işgali 1777'de gerçekleşti' (1777 gün kaynağı BULUNAMADI, eklenmedi) · SIRADA-C 0082/H-0029 (KARADENIZ-0082)"},{f:"1783-04-19",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-08-24",d:"sovyet-rusya"},{f:"1991-08-24",t:"2000-12-31",d:"ukrayna",kesinlik:"gun",kaynak:"Encyclopedia of Ukraine (CIUS) 'Crimea' (encyclopediaofukraine.com/display.asp?linkpath=pages%5CC%5CR%5CCrimea.htm): Kırım 19 Şubat 1954’te RSFSR’den Ukrayna SSC’ye devredildi; Ukrayna 24 Ağustos 1991’de bağımsızlığını ilan etti, 1 Aralık 1991 referandumu doğruladı; Kırım ‘Autonomous Republic of Crimea’ olarak Ukrayna içinde kaldı (1996 Anayasası: ‘inseparable constituent part of Ukraine’); Rusya ilhakı 18 Mart 2014 (atlas ufku 2000-12-31). Eski kayıt (1991-12-26 ‘rusya-federasyonu’) SSCB feshi maddesindeki kendi notuyla işaretli hataydı. · BEYAN: Sivastopol/Karadeniz Filosu üs hakkı ve 1992-95 özerklik çekişmesi ayrı dilimlenmedi, de jure Ukrayna yazıldı · LEHISTAN-KRON 28 Ekim 2026"}],
  d:[{f:"1475-06-06",t:"1774-07-21"}],
  isg:[{f:"1771-07-01",t:"1774-07-21",d:"rusya",kaynak:"kirim"}] },

// Yalta ve Aluşta: TDV `kirim`in sahil şehirleri listesinde adları geçiyor
// ve ikisi de "Kerç'ten Balıklava'ya kadar" şeridin İÇİNDE. Bu ikisi
// olmadan güney sahili Bahçesaray ile Sudak'ın orta dikmesine kalıyordu —
// yani han toprağı denize iniyor, sancak şeridi kopuk görünüyordu.
{ ad:"Yalta", tur:"liman", lat:44.4952, lon:34.1663, g:0, k:4, m:"Kefe",
  s:[{f:"1281-01-01",t:"1380-01-01",d:"altinorda",kaynak:"POSTIT #6 (Emre): bu limanda Ceneviz yerleşimi 1281'de yoktu; Altın Orda Kırım ulusu toprağı. Ceneviz öncesi: Altın Orda."},{f:"1380-01-01",t:"1475-06-06",d:"ceneviz",kesinlik:{f:"yil",t:"gun"},kaynak:"Ceneviz Gotya Kaptanlığı sahili: Tokhtamış/yerel emirle 1380-81 antlaşması (voicecrimea.com.ua ikincil; YIL TEYİTSİZ — Balard ile doğrulanmalı)."},{f:"1774-07-21",t:"1783-04-19",d:"kirim",kaynak:"TDV kirim: Kaynarca m.3 'Kırım, Bucak, Kuban… tam mânasıyla müstakil'; Rusya'ya yalnız Kerç, Yenikale ve Kılburun · TDV kefe: 'İkinci Rus saldırısı ve işgali 1777'de gerçekleşti' (1777 gün kaynağı BULUNAMADI, eklenmedi) · SIRADA-C 0082/H-0029 (KARADENIZ-0082)"},{f:"1783-04-19",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-08-24",d:"sovyet-rusya"},{f:"1991-08-24",t:"2000-12-31",d:"ukrayna",kesinlik:"gun",kaynak:"Encyclopedia of Ukraine (CIUS) 'Crimea' (encyclopediaofukraine.com/display.asp?linkpath=pages%5CC%5CR%5CCrimea.htm): Kırım 19 Şubat 1954’te RSFSR’den Ukrayna SSC’ye devredildi; Ukrayna 24 Ağustos 1991’de bağımsızlığını ilan etti, 1 Aralık 1991 referandumu doğruladı; Kırım ‘Autonomous Republic of Crimea’ olarak Ukrayna içinde kaldı (1996 Anayasası: ‘inseparable constituent part of Ukraine’); Rusya ilhakı 18 Mart 2014 (atlas ufku 2000-12-31). Eski kayıt (1991-12-26 ‘rusya-federasyonu’) SSCB feshi maddesindeki kendi notuyla işaretli hataydı. · BEYAN: Sivastopol/Karadeniz Filosu üs hakkı ve 1992-95 özerklik çekişmesi ayrı dilimlenmedi, de jure Ukrayna yazıldı · LEHISTAN-KRON 28 Ekim 2026"}],
  d:[{f:"1475-06-06",t:"1774-07-21"}],
  isg:[{f:"1771-07-01",t:"1774-07-21",d:"rusya",kaynak:"kirim"}] },

{ ad:"Aluşta", tur:"kale", lat:44.6764, lon:34.4103, g:0, k:4, m:"Kefe",
  s:[{f:"1281-01-01",t:"1380-01-01",d:"altinorda",kaynak:"POSTIT #6 (Emre): bu limanda Ceneviz yerleşimi 1281'de yoktu; Altın Orda Kırım ulusu toprağı. Ceneviz öncesi: Altın Orda."},{f:"1380-01-01",t:"1475-06-06",d:"ceneviz",kesinlik:{f:"yil",t:"gun"},kaynak:"Ceneviz Gotya Kaptanlığı sahili 1380'ler (Bertier-Delagard aktarımı: Luşta Ceneviz'e hizmet eden Derbiberdi, Feodoro vassalı — ru.wikipedia Феодоро); YIL TEYİTSİZ."},{f:"1774-07-21",t:"1783-04-19",d:"kirim",kaynak:"TDV kirim: Kaynarca m.3 'Kırım, Bucak, Kuban… tam mânasıyla müstakil'; Rusya'ya yalnız Kerç, Yenikale ve Kılburun · TDV kefe: 'İkinci Rus saldırısı ve işgali 1777'de gerçekleşti' (1777 gün kaynağı BULUNAMADI, eklenmedi) · SIRADA-C 0082/H-0029 (KARADENIZ-0082)"},{f:"1783-04-19",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-08-24",d:"sovyet-rusya"},{f:"1991-08-24",t:"2000-12-31",d:"ukrayna",kesinlik:"gun",kaynak:"Encyclopedia of Ukraine (CIUS) 'Crimea' (encyclopediaofukraine.com/display.asp?linkpath=pages%5CC%5CR%5CCrimea.htm): Kırım 19 Şubat 1954’te RSFSR’den Ukrayna SSC’ye devredildi; Ukrayna 24 Ağustos 1991’de bağımsızlığını ilan etti, 1 Aralık 1991 referandumu doğruladı; Kırım ‘Autonomous Republic of Crimea’ olarak Ukrayna içinde kaldı (1996 Anayasası: ‘inseparable constituent part of Ukraine’); Rusya ilhakı 18 Mart 2014 (atlas ufku 2000-12-31). Eski kayıt (1991-12-26 ‘rusya-federasyonu’) SSCB feshi maddesindeki kendi notuyla işaretli hataydı. · BEYAN: Sivastopol/Karadeniz Filosu üs hakkı ve 1992-95 özerklik çekişmesi ayrı dilimlenmedi, de jure Ukrayna yazıldı · LEHISTAN-KRON 28 Ekim 2026"}],
  d:[{f:"1475-06-06",t:"1774-07-21"}],
  isg:[{f:"1771-07-01",t:"1774-07-21",d:"rusya",kaynak:"kirim"}] },

];
