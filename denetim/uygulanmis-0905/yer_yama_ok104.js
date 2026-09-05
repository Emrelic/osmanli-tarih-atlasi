// data/yer_yama_ok104.js — OPUS HAZIR KITA 104 · parti-emrelic-0019 · H-0003
// ===========================================================================
// 🔴 BU DOSYA VERİ DEĞİL, BİR YAMADIR. `index.html`e BAĞLANMAZ,
//    `arac/girdi.py`ye YAZILMAZ — bağlanırsa aynı yerleşim İKİ KEZ girer.
//    Uygulayıcı: `arac/_sahiplik_uygula.py` (koordinatör).
//    Kalıp `data/yer_yama_p19.js` ve `yer_yama_uyg1.js`ten alındı: `ad:` +
//    kaydın YENİ HÂLİ (fark değil, tam dönem dizileri).
//
// AD ALANI DOSYA ADINDAN TÜRETİLDİ: window.YER_YAMA_OK104   (`CLAUDE.md §7`)
//
// H-0003 — Emre: "fetret devri sonrası Ankara Savaşı sonrası DOĞU ANADOLU
//                 haritası doğru mu"
//
// ═══════════════════════════════════════════════════════════════════════════
// ÖLÇÜM — 70 nokta, dört kesit (37-41,5°K / 37-45°D)
// ═══════════════════════════════════════════════════════════════════════════
// 1400-06-15  akkoyunlu 21 · gurcistan 9 · OSMANLI 7 · karakoyunlu 7 · timurlu 7 …
// 1403-06-15  akkoyunlu 21 · memluk 10 · gurcistan 9 · timurlu 8 · karakoyunlu 7 …
// 1410-06-15  akkoyunlu 23 · karakoyunlu 16 · memluk 10 …
// 1420-06-15  akkoyunlu 23 · karakoyunlu 17 · memluk 10 · OSMANLI 1
//
// 🟢 ÇOĞU DOĞRU ÇIKTI: Osmanlı 7 → 0 (Ankara'dan sonra doğuda hiç yok — tam
//    beklenen) · Erzincan `mutahharten` (Timur onu geri getirdi) · Ordu ve
//    Ünye `haciemir` (Hacıemiroğulları ihyası — `CLAUDE.md §2`nin adıyla
//    andığı vaka) · Revan/Zaho `celayirli` · Hoy/Mâku/Selmâs `timurlu`.
//
// 🔴 KUSUR TEK BİR YERDE YOĞUNLAŞIYOR: `akkoyunlu` 1400'de ZATEN 21 nokta
//    tutuyor ve içinde Erzurum · Kars civarı · Iğdır · Eçmiyadzin · Gümrü ·
//    Digor · Arpaçay var. TDV `akkoyunlular` (HTTP 200, gövdesi okundu) bunu
//    açıkça reddediyor:
//      "Timur ... Karayülük'e ÂMİD'İ (DİYARBAKIR) verdi. Karayülük Osman Bey
//       Timur'la Ankara Seferi'ne katıldı (1402). Bu seferden sonra Güneydoğu
//       Anadolu ve Doğu Anadolu'da hâkimiyetini SAĞLAMLAŞTIRMAYA ÇALIŞTI."
//      "Karakoyunlular MUSUL'DAN ERZURUM'A KADAR olan yerleri hâkimiyetleri
//       altına aldılar."                              (Kutlu Bey devri 1362-88)
//      "İspir'den Urfa'ya, Şebinkarahisar'dan Siirt'e kadar uzanan bölge
//       Akkoyunlu ülkesi haline geldi."               (UZUN HASAN, 1465)
//      Revan / Erivan: maddede SIFIR geçiş.
//
// ═══════════════════════════════════════════════════════════════════════════
// 🔴 KAPSAM — NİÇİN 21 NOKTA DEĞİL, YALNIZ BİR NOKTA DÜZELTİLİYOR
// ═══════════════════════════════════════════════════════════════════════════
// `CLAUDE.md §3.5.1`: *"bir sınır kayması önerildiğinde İKİ UÇ DA ölçülür.
// 'Bu tarafta fazlalık var mı' yetmez; 'öbür tarafta fazlalık doğuyor mu' da
// sorulur. Tek uçtan bakan düzeltme, hatayı taşır — silmez."*
//
// Akkoyunlu'yu geri çekmek, o toprağı BİR BAŞKASINA vermek demektir. Bunu 21
// nokta için yapmak 21 ayrı kaynak araştırması ister. **Yalnız ERZURUM için
// TDV bütün zinciri gün gün veriyor**, ve o yüzden yalnız Erzurum yazıldı.
// Ötekiler ölçüldü, KAYDEDİLDİ, ama YAZILMADI — hüküm koordinatörün.
//
// ⚠️ VE DÜZELTMENİN YAN ETKİSİ ÖNCEDEN ÖLÇÜLDÜ (aşağıdaki "KOMŞU ETKİSİ").
// ---------------------------------------------------------------------------

window.YER_YAMA_OK104 = [

  // ═════════════════════════════════════════════════════════════════════════
  // ERZURUM — atlasta `akkoyunlu` 1348-01-01'den 1502-01-01'e KESİNTİSİZ.
  //           TDV'ye göre Akkoyunlu Erzurum'u 1467'de aldı. **119 YIL ERKEN.**
  // ═════════════════════════════════════════════════════════════════════════
  // MEVCUT KAYIT (data/yerlesimler.js:231):
  //   s: ilhanli 1281-01-01..1348-01-01 · akkoyunlu 1348-01-01..1502-01-01 ·
  //      safevi 1502-01-01..1518-01-01
  //   d: 1518-01-01..1923-10-29
  //
  // KAYNAK: TDV `erzurum` (HTTP 200 · 91 KB gövde okundu). Zincirin HER
  // HALKASI maddenin kendi cümlesinden — hiçbir tarih uydurulmadı:
  //   1335    "İlhanlılar'ın ... parçalanmasının (1335) ardından EN KARIŞIK
  //            DÖNEMİNİ yaşadı"
  //   1336    "Sutay Noyan'ın oğlu Hacı Togay'ın eline geçti (1336)"
  //   1340    "Emîr Çoban'ın torunu Şeyh Hasan 1340'ta Erzurum'a gelerek
  //            Togaylılar'ı şehirden uzaklaştırdı. BURADA KALDIĞI BİR AY..."
  //   1360    "Erzurum 1360'ta ERETNAOĞULLARI'nın ve onların Erzincan valisi
  //            olan MUTAHHARTEN'in nüfuzu altına girdi"
  //   1385    "1385'te KARAKOYUNLULAR'ın eline geçen şehir,"
  //   1387    "1387'de bütün Doğu Anadolu ile birlikte TİMUR ordularınca
  //            istilâ edildi"
  //   1403    "Ankara Savaşı'ndan dönerken şehrin idaresini TEKRAR
  //            MUTAHHARTEN'E VERDİ (1403)"
  //   1405    "Timur 1405'te ölünce Erzurum'da Karakoyunlular'la
  //            Akkoyunlular arasındaki mücadele YENİDEN ALEVLENDİ"
  //   1435-36 "1435'te Karaz civarında cereyan eden kanlı savaşı
  //            KARAKOYUNLULAR kazandı ... Karakoyunlular burayı zaptettiler
  //            (1436)"
  //   1467    "Akkoyunlu Hükümdarı UZUN HASAN Karakoyunlu Beyliği'ne son
  //            vererek şehri ele geçirdi (1467)"
  //   1502    "OTUZ BEŞ YIL Akkoyunlu yönetiminde bulunan şehir ... Şah
  //            İsmâil ... Erzurum'a hâkim oldu (1502)"
  //           📌 "otuz beş yıl" 1467-1502'yi BİREBİR doğruluyor ⇒ atlasın
  //              1502 Safevî başlangıcı DOĞRU, dokunulmadı.
  //
  // ÜÇ KASITLI SADELEŞTİRME — ve üçü de burada YAZILI:
  //  ① 1336 Togaylılar ve 1340 Çobanlı Şeyh Hasan (TDV: "BİR AY") ayrı dönem
  //    yazılmadı; ikisi de İlhanlı ardılı emirlerdir ve `BOYALAR`da
  //    `togaylilar`/`cobanli` kimliği YOK (ölçüldü). `ilhanli` 1360'a uzatıldı.
  //    ⇒ Atlas zaten `ilhanli`yi 1348'e uzatıyordu; bu, o sadeleştirmenin
  //      TDV'ye göre düzeltilmiş hâli.
  //  ② 1435 Karaz sonrası birkaç aylık Timurlu arası yazılmadı (TDV: "fazla
  //    kalmayıp çekilmelerinden sonra Karakoyunlular burayı zaptettiler
  //    (1436)") — `karakoyunlu` 1435'ten sürüyor.
  //  ③ 1403 Mutahharten dönemi 1408'de bitiriliyor: Mutahharten 1403-04
  //    civarında öldü, Timur yerine Yûsuf Ali'yi tayin etti, 1405'te Timur
  //    ölünce bölge Karakoyunlu-Akkoyunlu çekişmesine düştü ve Kara Yûsuf
  //    1408'de Azerbaycan'a hâkim oldu (TDV `akkoyunlular`: "Timur'un torunu
  //    Ebûbekir'i yenerek Azerbaycan'ı ele geçiren Karakoyunlu beyi Kara
  //    Yûsuf"). 1408 bu yüzden seçildi.
  //    ⚠️ ÖLÇMEDİM: 1404-1408 arasında Erzurum'un kimde olduğunu TDV
  //      söylemiyor; `karakoyunlu`ya bağlamak benim çıkarımım, TDV'nin cümlesi
  //      DEĞİL. Bu satır "ölçtüm" değil "çıkardım" diye duruyor.
  //
  // DEĞİŞMEZ 2s — SEKİZ DÖNEMİN KIRILMA GÜNLERİ TEK TEK SINANDI
  // (evren: index.html'in yüklediği 67 kronoloji dosyası · 6128 madde · ±30 gün)
  //   1336-01-01  3 madde 🟢   1360-01-01  4 madde 🟢   1385-01-01  5 madde 🟢
  //   1387-01-01  5 madde 🟢   1403-01-01 13 madde 🟢   1408-01-01  2 madde 🟢
  //   1467-01-01  5 madde 🟢   1502-01-01  9 madde 🟢
  // 🟢 VE İKİSİ TAM İSABET — kırılma, kendi olayının maddesine oturuyor:
  //   1467-01-01 "Uzun Hasan Karakoyunlu Devleti'ne son verdi — Van gölü
  //               havzası Akkoyunlu'ya geçti"
  //   1502-01-01 "Erzurum ve Van havzası Safevî'ye geçti — Akkoyunlu'nun
  //               kuzey kanadı çöktü"      ← ADIYLA Erzurum diyor
  // ⇒ Bu yama `2s` sayacını BÜYÜTMEZ; sekiz günün sekizi de maddeli.
  //
  // 🔴 KOMŞU ETKİSİ — ÖNCEDEN ÖLÇÜLDÜ, ve bir yan sonuç DOĞURUYOR:
  //   1403-06-15'te Erzurum'un komşuları: Erzincan `mutahharten` (40 km) ·
  //   Aşkale `akkoyunlu` (53 km) · Kemah `akkoyunlu` · Karahisâr-ı Şarkî
  //   `akkoyunlu` · Kars `gurcistan`.
  //   Yamadan SONRA Erzurum 1403'te `mutahharten` olur ⇒ Erzincan'la
  //   UYUMLU hâle gelir (bugün uyumsuz), ama Aşkale ile AYRIŞIR.
  //   ⇒ Aşkale · Kemah · Karahisâr-ı Şarkî de `akkoyunlu`yu 1340/1348'den
  //     taşıyor, yani AYNI KUSUR SINIFINDA. Onlar için TDV'de aynı
  //     ayrıntıda zincir BULAMADIM ⇒ yazılmadı, kaydedildi.
  //   📌 Yani bu yama kusuru KÜÇÜLTÜYOR ama BİTİRMİYOR, ve bunu saklamıyorum.
  {
    ad: "Erzurum",
    s: [
      { f: "1281-01-01", t: "1360-01-01", d: "ilhanli" },
      { f: "1360-01-01", t: "1385-01-01", d: "eretna" },
      { f: "1385-01-01", t: "1387-01-01", d: "karakoyunlu" },
      { f: "1387-01-01", t: "1403-01-01", d: "timurlu" },
      { f: "1403-01-01", t: "1408-01-01", d: "mutahharten" },
      { f: "1408-01-01", t: "1467-01-01", d: "karakoyunlu" },
      { f: "1467-01-01", t: "1502-01-01", d: "akkoyunlu" },
      { f: "1502-01-01", t: "1518-01-01", d: "safevi" }
    ],
    d: [{ f: "1518-01-01", t: "1923-10-29", y: "antlasma" }],
    kaynak: "TDV erzurum · TDV akkoyunlular"
  }

];
