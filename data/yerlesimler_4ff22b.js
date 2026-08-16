// data/yerlesimler_4ff22b.js — KOL G · noktasız künyelere nokta
// KADEME-ARAP-IRAN (Opus hazır kıta 24) · M-0713 · M-0717
//
// 🔴 AD ALANI: window.YERLESIMLER_4FF22B  (M-0679)
//    Beş kademe yaması aynı `window.KADEME_YAMA` adını kullanıyordu ve
//    birlikte okununca 537 kayıt 137'ye düşüyordu. Bu dosya o kuralı
//    İLK GÜNDEN uyguluyor — kimse söylemeden değil, kural bir tur önce
//    çıktığı için.
//
// PAYIM (M-0717 ④): merina (Antananarivo) + hawaii-kralligi (Honolulu)
//    Kol A · Çin ve öteki altı künye BAŞKA oturumlarda.
//
// ═══ YAZMADAN ÖNCE KOŞTURULAN DÖRT SINAV ═══
// ① künye     ikisi de VAR, kronolojisi DOLU, `harita:` köprüsü YOK
// ② pencere   İKİSİ DE PENCERE DIŞI — ölçüldü, aşağıda kayıtlı
// ③ 3 km      Antananarivo en yakın 842,4 km · Honolulu 310,8 km ⇒ TEMİZ
// ④ TDV slug  HTTP koduyla (5. tuzak): madagaskar 200 CANLI ·
//             antananarivo · merina · hawaii · honolulu · havai = 302 ÖLÜ

window.YERLESIMLER_4FF22B = [

  // ─────────────────────────────────────────────────────────────────
  // MERİNA KRALLIĞI — başkent Antananarivo
  // künye: merina 1787-01-01 → 1897-02-28 · baskent:"Antananarivo"
  //
  // 🟡 KAYNAK NOTU — ikisini AYRI yazıyorum, çünkü ayrı şeyler:
  //   TDV `madagaskar` (200, gövdesi okundu) şehri BAŞŞEHİR diye adıyla
  //   veriyor: "başşehri Antananarivo (Tananarive, 895.300)" — ama bu
  //   cümle 2003 nüfusuyla, yani MODERN. Krallık dönemi (1787-1897) için
  //   TDV'de cümle YOK; `merina` · `antananarivo` slugları 302 ÖLÜ.
  //   Dönemin dayanağı künyenin kendi kaynağı: "standart akademik kaynak".
  // ⇒ Şehrin başkentliği TDV'den, DÖNEMİ künyeden. Karıştırmıyorum.
  {
    ad: "Antananarivo",
    lat: -18.9333, lon: 47.5167,
    tur: "sehir",
    s: [{ f: "1787-01-01", t: "1897-02-28", d: "merina" }],
    kaynak: "madagaskar (TDV, gövde okundu) + devletler.js `merina` künyesi",
    neden: "TDV madagaskar: 'basshehri Antananarivo (Tananarive)' — cumle MODERN (2003 nufusu); krallik donemi icin TDV'de cumle YOK ve merina/antananarivo sluglari 302 OLU. Donem kunyeden: merina 1787-01-01 -> 1897-02-28, baskent Antananarivo. PENCERE DISI (lat -18,93 < -11) — pencere guneye acilinca canlanir",
    pencere_disi: true
  },

  // ─────────────────────────────────────────────────────────────────
  // HAWAII KRALLIĞI — başkent Honolulu
  // künye: hawaii-kralligi 1795-01-01 → 1898-08-12 · baskent:"Honolulu"
  //
  // 🔴 VE BU NOKTA MEVCUT BİR KAYITLA ÇAKIŞMIYOR, ONU TAMAMLIYOR:
  //   veride `Hawaii Adaları (Birleşme Öncesi — moku/aliʻi sistemi)`
  //   VAR (19,60 / -155,50) ama `tur:bolge` + `kasitli_bosluk:true` ve
  //   1795 ÖNCESİ dönemi işaretliyor ("Polinezyalı yerleşim ~1000-1200,
  //   moku/aliʻi nui sistemi" — yani merkezî devlet YOK).
  //   ⇒ O kayıt boşluğu, bu kayıt KRALLIĞI gösteriyor. 310,8 km arayla
  //     ve farklı adalarda (Büyük Ada / Oahu) — coğrafî olarak da doğru.
  //   📌 Yazmadan ÖNCE ölçtüm: mevcut nokta `hawaii-kralligi` kimliğini
  //     KULLANMIYOR (hiç dönemi yok). Künye gerçekten noktasızdı.
  //
  // ⚠️ TDV'de madde YOK ve bu ÖLÇÜLDÜ: hawaii · honolulu · havai = 302.
  //   `§4` kırmızı çizgisi gereği dayanak AKADEMİK ve künyede yazılı.
  {
    ad: "Honolulu",
    lat: 21.3069, lon: -157.8583,
    tur: "sehir",
    s: [{ f: "1795-01-01", t: "1898-08-12", d: "hawaii-kralligi" }],
    kaynak: "bulunamadı — TDV'de ARANDI (hawaii · honolulu · havai, ücü de 302 OLU); dayanak: devletler.js `hawaii-kralligi` künyesi ve onun akademik kaynağı",
    neden: "Kunye baskent alani 'Honolulu' ve donem 1795-01-01 -> 1898-08-12 (Kamehameha I'in birlestirmesinden ABD ilhakina). Veride bulunan 'Hawaii Adalari (Birlesme Oncesi)' kaydi tur:bolge + kasitli_bosluk ve 1795 ONCESINI isaretliyor; bu nokta onu TAMAMLIYOR, cakismiyor (310,8 km, ayri ada). PENCERE DISI (lon -157,86) — pencere Pasifik'e acilinca canlanir",
    pencere_disi: true
  }

];
