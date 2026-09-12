// ============================================================================
// YERLEŞİM — HİNT PRENSLİKLERİ, 12 Eylül 2026 (KITA 8)
// ============================================================================
// data/yerlesimler.js ile AYNI ŞEMA. Alan sözlüğü: VERI-YAPISI.md.
//
// ---------------------------------------------------------------------------
// 🔴 BU DOSYA BUGÜN HİÇBİR YERDEN OKUNMUYOR — ve bu KASITLI BİR BEYANDIR
// ---------------------------------------------------------------------------
// Sevk (M-3553) yalnız `index.html` ayağını uyardı. ÖLÇTÜM, İKİNCİ bir ayak
// daha var ve haritayı asıl O belirliyor:
//     grep hint0912 arac/girdi.py   → BOŞ   ⇒ MOTOR bu dosyayı okumuyor
//     grep hint0912 index.html      → BOŞ   ⇒ TARAYICI bu dosyayı okumuyor
// `CLAUDE.md §5`: *"HANGİ DOSYA CANLI — tek doğru kaynak `arac/girdi.py`
// `GIRDI_DOSYALARI`."* İki satır da BENİM DOSYAM DEĞİL (§7), yazmadım.
// ⇒ Teslimde açıkça bildiriliyor (`D099`: hiçbir aletin glob'una girmeyen
//   artefakt, yapılmamış olmakla aynı sonucu verir).
//
// ---------------------------------------------------------------------------
// 🔴 VE SEVKİN ÖNCÜLÜ ÜÇTE ÜÇ ÇÜRÜDÜ — dört noktadan ÜÇÜ ZATEN VARDI
// ---------------------------------------------------------------------------
// Sevk: *"dört prenslik başkentinin HİÇBİRİNİN noktası yok ... → 0 kayıt"*.
// `denetim/ARAC-NORMAL-0903.py` normalleştiricisiyle ve AYRICA konum ekseniyle
// ölçüldü (`D054` · `D066`):
//     Gvalyar (Gwalior)   ZATEN VAR   0,0 km   yerlesimler_asya.js
//     İndor (Indore)      ZATEN VAR   0,1 km   yerlesimler_asya.js
//     Kolhapûr            ZATEN VAR   0,0 km   yerlesimler_asya.js
//     Baroda / Vadodara   YOK         en yakın 41,6 km (Çampâner)   ← TEK GERÇEK EKSİK
// ⇒ Dördü de yazılsaydı ÜÇ MÜKERRER nokta doğardı (`D002`).
//
// ⚠️ VE AD EKSENİ TEK BAŞINA YETMEDİ: atlas onları "Gvalyar (Gwalior)" ve
// "İndor (Indore)" diye PARANTEZLİ ÇİFT ADLA yazmış; normalleştirilmiş ad
// eşleşmesi ikisini de KAÇIRDI, KONUM ekseni yakaladı. `D054`in bir kademe
// ötesi: normalleştirici gerekli ama YETERLİ DEĞİL.
//
// ---------------------------------------------------------------------------
// 🔴 ASIL EKSİK NOKTA DEĞİL, DÖNEM — dört künyenin DÖRDÜ DE veride 0 KEZ
// ---------------------------------------------------------------------------
//     gvalyar 0 · indor 0 · kolhapur 0 · baroda 0  dönem (bütün atlas tarandı)
// Mevcut üç noktanın zinciri `maratha` ile 1923-10-29'a kadar gidiyor:
//     Gvalyar   … 1784-01-01 → 1923-10-29  maratha
//     İndor     … 1732-01-01 → 1923-10-29  maratha
//     Kolhapûr  … 1659-01-01 → 1923-10-29  maratha
// ⇒ O üç künyenin haritada görünmesi için gereken şey NOKTA DEĞİL, bu
//   `maratha` dönemlerinin BÖLÜNMESİ. Ve o kayıtlar `yerlesimler_asya.js`te,
//   yani BENİM DOSYAM DEĞİL (`§7`) — teklif teslim raporunda, YAZILMADI.
// 🟢 Künye ✓ (devletler.js) · renk ✓ (renkler.py:3144-3149) · nokta 3/4 ✓
//    EKSİK HALKA YALNIZ DÖNEM.
// ============================================================================

window.YERLESIMLER_HINT0912 = [

// ── BARODA (VADODARA) — Gaikvad hanedanının başkenti ────────────────────────
// KONUM: 22,3072°K / 73,1812°D (Vadodara şehir merkezi).
// KADEME k:2 (eyalet merkezi) — gerekçe: Maratha Konfederasyonu'nun dört büyük
//   üye devletinden birinin başkenti. Komşu emsal: Ahmedâbâd k:2 · Sûrat k:3 ·
//   Kanbâyet k:3 · Çampâner k:4. SEÇİMDİR, ölçüm değil.
// ZİNCİR: komşuların zinciri emsal alındı (`D084` — komşusunun kullandığı günü
//   kullanmak kendi gününü seçmekten dayanaklıdır). Kanbâyet · Broaç · Sûrat
//   üçü de: racput → delhi-sultanligi (1304) → gucerat-sultanligi (1407) →
//   babur-imparatorlugu (1573-02-26). Baroda'da yalnız SON halka farklı.
// 🔴 1407 seçildi, 1484 DEĞİL: 1484 Çampâner'in KENDİ fetih günü (Mahmud
//   Begada), yere özgü; 1407 Gucerât Sultanlığı'nın kuruluşu ve üç komşunun
//   üçü de onu kullanıyor.
{ ad:"Baroda (Vadodara)", tur:"sehir", lat:22.3072, lon:73.1812, g:0, k:2, d:[],
  // 🔴 DİKKAT — BU DEĞER TEK BİR DİZGİDİR, SATIRLAR `+` İLE BİRLEŞİR.
  // İlk yazımda satırları YAN YANA koymuştum (`"a" "b"`); o PYTHON/C
  // sözdizimidir, JavaScript'te SyntaxError'dır ve dosya hem tarayıcıda hem
  // motorda ÇÖKTÜ. 1.MURAT yakaladı (M-3564). Ders: bir dosyayı YAZMAK, onun
  // AYRIŞTIRILABİLDİĞİNİ göstermez — bu, aşağıdaki "iki ayak" uyarısının
  // ÜÇÜNCÜ ayağı ve en temeli.
  kaynak:"TDV `hindistan` (HTTP 200, gövde okundu): hânedan listesinde " +
         "\"Gaikwar hânedanı (1721-1858)\" — künyenin f:1721 YILI DOĞRULANDI. " +
         "⚠️ GÜN TDV'de YOK, `1721-01-01` §4'ün 'yıl biliniyor, gün bilinmiyor' " +
         "yazımıdır. ⚠️ 1858 bir HÂNEDAN LİSTESİ aralığıdır (Şirket idaresinin " +
         "sonu), atlasın 1923-10-29'u ise PENCERE SONUDUR — ikisi de bir " +
         "'yıkılış' iddiası DEĞİLDİR. 🔴 TDV `baroda` ve `vadodara` slugları " +
         "302 ÖLÜ. 🔴 TDV `gucerat` (200) 'Baroda'yı ANIYOR ama modern sanayi " +
         "şehri olarak ve bibliyografyada — KÜNYEYİ DESTEKLEMİYOR (§4 tuzak ⑧: " +
         "ad gövdede geçiyor ≠ gövde onu tarihliyor). 📌 Ve 'Gaikvad' araması " +
         "TDV'de BOŞ döner; madde Gaikwar yazıyor — §4'ün Türkçe yazım " +
         "ekseni, bu turda beni de ısırdı.",
  s:[{f:"1281-01-01", t:"1304-01-01", d:"racput"},
     {f:"1304-01-01", t:"1407-01-01", d:"delhi-sultanligi"},
     {f:"1407-01-01", t:"1573-02-26", d:"gucerat-sultanligi"},
     {f:"1573-02-26", t:"1721-01-01", d:"babur-imparatorlugu"},
     {f:"1721-01-01", t:"1923-10-29", d:"baroda"}] },

];
