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
{ ad:"Gözleve (Kezlev)", tur:"liman", lat:45.1904, lon:33.3669, g:0, k:4,
  s:[{f:"1281-01-01",t:"1441-01-01",d:"altinorda"},{f:"1441-01-01",t:"1475-06-06",d:"kirim"},{f:"1771-07-01",t:"1774-07-21",d:"rusya"},{f:"1774-07-21",t:"1783-04-19",d:"kirim"},{f:"1783-04-19",t:"1923-10-29",d:"rusya"}],
  d:[], v:[{f:"1475-06-06",t:"1771-07-01",k:"Kırım Hanlığı"}] },

{ ad:"Or Kapı (Ferahkirman)", tur:"kale", lat:46.1600, lon:33.6900, g:0, k:4,
  s:[{f:"1281-01-01",t:"1441-01-01",d:"altinorda"},{f:"1441-01-01",t:"1475-06-06",d:"kirim"},{f:"1771-07-01",t:"1774-07-21",d:"rusya"},{f:"1774-07-21",t:"1783-04-19",d:"kirim"},{f:"1783-04-19",t:"1923-10-29",d:"rusya"}],
  d:[], v:[{f:"1475-06-06",t:"1771-07-01",k:"Kırım Hanlığı"}] },

{ ad:"Akmescid", tur:"sehir", lat:44.9521, lon:34.1024, g:0, k:3,
  s:[{f:"1281-01-01",t:"1441-01-01",d:"altinorda"},{f:"1441-01-01",t:"1475-06-06",d:"kirim"},{f:"1771-07-01",t:"1774-07-21",d:"rusya"},{f:"1774-07-21",t:"1783-04-19",d:"kirim"},{f:"1783-04-19",t:"1923-10-29",d:"rusya"}],
  d:[], v:[{f:"1475-06-06",t:"1771-07-01",k:"Kırım Hanlığı"}] },

{ ad:"Karasubazar", tur:"sehir", lat:45.0556, lon:34.6000, g:0, k:3,
  s:[{f:"1281-01-01",t:"1441-01-01",d:"altinorda"},{f:"1441-01-01",t:"1475-06-06",d:"kirim"},{f:"1771-07-01",t:"1774-07-21",d:"rusya"},{f:"1774-07-21",t:"1783-04-19",d:"kirim"},{f:"1783-04-19",t:"1923-10-29",d:"rusya"}],
  d:[], v:[{f:"1475-06-06",t:"1771-07-01",k:"Kırım Hanlığı"}] },

// Solhat / Eski Kırım — Altın Orda'nın Kırım valiliğinin merkeziydi ve
// yarımadaya adını veren yerdir (TDV `kirim`). Kefe'ye 21,58 km; sahil
// şeridi ile iç toprağın rengi arasındaki gerçek sınırı O taşıyor.
{ ad:"Eski Kırım (Solhat)", tur:"sehir", lat:45.0281, lon:35.1078, g:0, k:3,
  s:[{f:"1281-01-01",t:"1441-01-01",d:"altinorda"},{f:"1441-01-01",t:"1475-06-06",d:"kirim"},{f:"1771-07-01",t:"1774-07-21",d:"rusya"},{f:"1774-07-21",t:"1783-04-19",d:"kirim"},{f:"1783-04-19",t:"1923-10-29",d:"rusya"}],
  d:[], v:[{f:"1475-06-06",t:"1771-07-01",k:"Kırım Hanlığı"}] },

// ── B) KEFE SANCAĞI SAHİLİ — Kefe zincirinin birebir aynısı ──────────
// TDV `kefe`: Suğdak sancağın beş kazasından biri.
{ ad:"Sudak (Suğdak)", tur:"liman", lat:44.8494, lon:34.9747, g:0, k:3, m:"Kefe",
  s:[{f:"1281-01-01",t:"1475-06-06",d:"ceneviz"},{f:"1783-04-19",t:"1923-10-29",d:"rusya"}],
  d:[{f:"1475-06-06",t:"1783-04-19"}],
  isg:[{f:"1771-07-01",t:"1783-04-19",d:"rusya",kaynak:"kirim"}] },

// TDV `kefe`: Balıklava idarî olarak Mangub kazasına bağlıydı. Mangub bu
// partide YOK (renk engeli, yukarıda), o yüzden m: sancak merkezini
// gösteriyor — zincir Kefe ile aynı olduğu için Değişmez 3 çelişkisi yok.
{ ad:"Balaklava (Cembalo)", tur:"liman", lat:44.5000, lon:33.5997, g:0, k:4, m:"Kefe",
  s:[{f:"1281-01-01",t:"1475-06-06",d:"ceneviz"},{f:"1783-04-19",t:"1923-10-29",d:"rusya"}],
  d:[{f:"1475-06-06",t:"1783-04-19"}],
  isg:[{f:"1771-07-01",t:"1783-04-19",d:"rusya",kaynak:"kirim"}] },

// Yalta ve Aluşta: TDV `kirim`in sahil şehirleri listesinde adları geçiyor
// ve ikisi de "Kerç'ten Balıklava'ya kadar" şeridin İÇİNDE. Bu ikisi
// olmadan güney sahili Bahçesaray ile Sudak'ın orta dikmesine kalıyordu —
// yani han toprağı denize iniyor, sancak şeridi kopuk görünüyordu.
{ ad:"Yalta", tur:"liman", lat:44.4952, lon:34.1663, g:0, k:4, m:"Kefe",
  s:[{f:"1281-01-01",t:"1475-06-06",d:"ceneviz"},{f:"1783-04-19",t:"1923-10-29",d:"rusya"}],
  d:[{f:"1475-06-06",t:"1783-04-19"}],
  isg:[{f:"1771-07-01",t:"1783-04-19",d:"rusya",kaynak:"kirim"}] },

{ ad:"Aluşta", tur:"kale", lat:44.6764, lon:34.4103, g:0, k:4, m:"Kefe",
  s:[{f:"1281-01-01",t:"1475-06-06",d:"ceneviz"},{f:"1783-04-19",t:"1923-10-29",d:"rusya"}],
  d:[{f:"1475-06-06",t:"1783-04-19"}],
  isg:[{f:"1771-07-01",t:"1783-04-19",d:"rusya",kaynak:"kirim"}] },

];
