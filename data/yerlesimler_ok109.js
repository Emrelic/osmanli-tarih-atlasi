// -*- coding: utf-8 -*-
// ═══════════════════════════════════════════════════════════════════════
// YERLESIMLER_OK109 — 1923 ÇIPASI, GÜNEY KOLU · İMÂDİYE
// window.YERLESIMLER_OK109   (§7: dosya adındaki ayırt edici parça değişken adında da)
// Oturum: OPUS HAZIR KITA 109 · 2 Eylül 2026 · koordinatör 1.MURAT
// ═══════════════════════════════════════════════════════════════════════
//
// ── NİÇİN YAZILDI — ve niçin SAPMAYA RAĞMEN yazıldı ────────────────────
// TDV `musul--irak` (HTTP 200, gövde okundu, 48.940 karakter) Musul
// sancağının kazalarını ADIYLA sayıyor (1892-1910 taksimatı):
//     "Musul sancağının kazaları Akra, Zibar, Dıhok, Zaho, Sincar ve
//      İmâdiye'dir."
//   altı kazanın DÖRDÜ atlasta VAR : Akra · Duhok · Zaho · Sincar
//   İKİSİ YOKTU                    : İMÂDİYE · ZİBAR
//
// 🔴 VE BU KAYIT BİR VEKİL ÖLÇÜTÜ KÖTÜLEŞTİRİYOR — bilerek.
//   Simülasyon (kendi uygulamam, önce `denetim/olc_sinir_sapma.py`nin
//   tabanını 0,19 km farkla yeniden üreterek doğrulandı):
//       Çölemerik↔Duhok kesimi     en kötü  +12,5 → −13,1 km  (işaret döndü)
//                                  ortanca    8,7 →   9,9 km  (kötüleşti)
//   Sebep Doğu kolunun ölçtüğü teorem: `sapma=|dB−dA|/2` olduğu için TEK
//   TARAFLI ekleme bisektörü karşı yakaya iter. İmâdiye sınıra 18 km,
//   karşısındaki Osmanlı noktası (Çölemerik) 35 km. Simetrik eş arandı
//   (Çığlı/Ashitha · Andaç · Ortaköy) — üçünün de TDV dayanağı YOK.
//
// 🟢 KOORDİNATÖRÜN HÜKMÜ (2 Eylül): YAZ. Gerekçe:
//   *"Sapma bir VEKİL ölçüt; atlasın amacı değil, amacın göstergesi.
//     Vekili iyileştirmek için gerçek veriyi dışarıda bırakmak,
//     göstergeyi amaç sanmaktır."*
//   ⇒ Ölçütün yanına şerh düşülecek, veri kısılmayacak.
//
// ── BEDELSİZ OLDUĞU ÖLÇÜLDÜ ───────────────────────────────────────────
//   3 km mükerrer sınavı   🟢 en yakın kayıt Duhok 50,8 km
//   ad çakışması           🟢 yok
//   yeni kırılma günü      🟢 YOK — 1516-08-24 ve 1918-11-08 ikisi de
//                             kardeş kazaların kullandığı, külliyatta VAR
//   renk                   🟢 `ingiltere` BOYALAR'da var
//   `Değişmez 4`           🟢 ingiltere künyesi 1923'te canlı
//
// ── KOORDİNAT REHBERDEN, TAHMİN DEĞİL ─────────────────────────────────
//   GeoNames allCountries (CC BY 4.0, 31 Ağustos 2026), kayıt 99611:
//       37.09214 / 43.48769 · feature class P · kod PPLA2 (ilçe merkezi)
//       alternatenames: Amêdî · Amedi · Amadia · ‘Amādīya · Amādīyeh · ئامێدى
//   ⚠️ Dört ondalığa yuvarlandı — kardeş kayıtların (Akra 36.7408,
//     Zaho 37.1447) hassasiyetiyle aynı olsun diye.
//   ⚠️ TARİHÎ AD: TDV maddesi onu **İmâdiye** diye yazıyor; `ad:` alanı
//     bu yüzden bugünkü "Amêdî/Amadiya" değil TDV'nin yazımıdır. Parantezli
//     modern karşılık `VERI-YAPISI.md`nin izin verdiği biçimde eklendi.
//
// ── DÖNEM DESENİ KARDEŞ KAZALARDAN KOPYALANDI, UYDURULMADI ────────────
//   Akra · Duhok · Zaho · Sincar · Rewândiz — beşi de BİREBİR aynı deseni
//   taşıyor (`k:4`, `m:"Musul"`, `d: 1516-08-24 → 1918-11-08 y:"antlasma"`,
//   ve altı halkalı `s:` zinciri). İmâdiye aynı sancağın kazası olduğu için
//   aynı desen kullanıldı; ayrı bir tarih İCAT EDİLMEDİ.
//   📌 Kürt emirliği tarafı: TDV `musul--irak` "1839'da İmâdiye'deki
//     Behdiyan hâkimliklerine son verildi" diyor. Emirlik dönemi `v:` (tâbi)
//     olarak yazılABİLİRDİ — ama atlas Bitlis'i ve Çölemerik'i de düz `d:`
//     yazıyor (ölçtüm), yani proje Kürt emirliklerini tâbi olarak
//     MODELLEMİYOR. Kendi başıma yeni bir modelleme kararı vermedim;
//     var olan sözleşmeye uydum.
//
// ── 1918-11-08 GÜNÜ TDV İLE UYUMLU — ölçtüm, değiştirmedim ────────────
//   TDV `musul--irak`: "İngilizler … 8 (veya 10) Kasım 1918'de Musul'a
//   girdi. 15 Kasım'da buradaki Türk kuvvetleri geri çekilmek zorunda
//   kaldı." Verideki gün (1918-11-08) kaynakla örtüşüyor.
//
// 🔴 BAĞLANMADI: `arac/girdi.py` koşuyla kilitli. Dosya bağlanmaya hazır.
// ═══════════════════════════════════════════════════════════════════════

window.YERLESIMLER_OK109 = [

  {
    ad: "İmâdiye (Amêdî)",
    tur: "sehir",
    lat: 37.0921, lon: 43.4877,
    g: 0, k: 4, m: "Musul",
    d: [{ f: "1516-08-24", t: "1918-11-08", y: "antlasma" }],
    s: [
      // 🔴 SINIR GÜNÜ DÜZELTİLDİ (2 Eylül, ikinci tur) — kardeş kazalardan
      //   kopyaladığım 1335-12-01 TDV'ye göre YANLIŞTI:
      //     TDV `ilhanlilar`: "İlhanlılar — İran'da kurulan bir Moğol
      //       devleti (1256-1353)" ve ilhan listesi 1335 SONRASINI sayıyor
      //       (Arpa 1335 · Mûsâ 1336 · Muhammed 1336 · Tuga Timur 1337 ·
      //        Cihan Timur 1338 · Sâtî Beg 1339 · Süleyman 1340 …)
      //     TDV `celayirliler`: "1340-1431 yılları arasında … hüküm süren
      //       Moğol hânedanı", "bağımsız bir devlet kurdu (1340)"
      //   ⇒ 1335-1340 arası SAHİPSİZ DEĞİLDİ; İlhanlı hukuken sürüyordu.
      //   Aynı düzeltme öteki 32 kayıt için `data/yer_yama_ok109_fetret.js`
      //   yamasında HAZIR ama UYGULANMADI (koordinatör kararı bekliyor).
      { f: "1281-01-01", t: "1340-01-01", d: "ilhanli" },
      { f: "1340-01-01", t: "1411-01-01", d: "celayirli" },
      { f: "1411-01-01", t: "1469-01-01", d: "karakoyunlu" },
      { f: "1469-01-01", t: "1508-01-01", d: "akkoyunlu" },
      { f: "1508-01-01", t: "1516-08-24", d: "safevi" },
      { f: "1918-11-08", t: "1923-10-29", d: "ingiltere" }
    ],
    v: [],
    kaynak: "TDV `musul--irak` (HTTP 200, gövde okundu): \"1892-1910 yılları arasında Musul vilâyeti Musul, Kerkük ve Süleymaniye sancaklarından oluşmaktaydı. Musul sancağının kazaları Akra, Zibar, Dıhok, Zaho, Sincar ve İmâdiye'dir.\" — kaza merkezi olduğu ve 1923'te var olduğu buradan. Devir günü aynı maddeden: \"İngilizler … 8 (veya 10) Kasım 1918'de Musul'a girdi.\" KOORDİNAT: GeoNames allCountries (CC BY 4.0, 31 Ağu 2026), kayıt 99611, 37.09214/43.48769, PPLA2 — tahmin DEĞİL, rehberden. ⚠️ Müstakil TDV maddesi YOK: `imadiye` · `amadiye` · `imadiyye` · `amediye` sluglarının dördü de 302 (ÖLÜ); kapsayıcı madde kullanıldı (`CLAUDE.md §4`: dar slug tutmazsa kapsayıcı maddeyi dene).",
    neden: "Musul sancağının altı kazasından biri ve atlasta yoktu; kardeş dördü (Akra · Duhok · Zaho · Sincar) zaten kayıtlıydı. Toprağı bugüne kadar Duhok ve Akra peteklerine emiliyordu — ikisi de `ingiltere` olduğu için RENK HATASI üretmiyordu, yani bu kayıt bir boyama kusurunu değil bir VERİ EKSİĞİNİ kapatıyor. ⚠️ Sınır sapması ölçütünü KÖTÜLEŞTİRİYOR (Çölemerik↔Duhok kesiminde ortanca 8,7 → 9,9 km); koordinatörün 2 Eylül hükmüyle bilerek yazıldı: vekil ölçüt, veriyi yönetmez."
  },

  // ═══════════════════════════════════════════════════════════════════════
  // ŞIRNAK — "ALT SINIR" DEYİMİYLE. Ve niçin bu deyim gerekti.
  // ═══════════════════════════════════════════════════════════════════════
  //
  // Silopi (37,246/42,470) ile Çölemerik (37,574/43,741) arasında 113 km
  // ve TEK BİR Türkiye noktası yoktu — `CLAUDE.md §2`nin "noktasızlık"
  // vakası. Rehberden beş aday çıktı; DÖRDÜ YAZILMADI çünkü TDV onları
  // yalnız BUGÜNKÜ ilçe adları olarak anıyor (Beytüşşebap · Uludere ·
  // Şenoba · Uzungeçit — Osmanlı dönemi için sıfır dayanak).
  //
  // 🔴 ŞIRNAK'IN KENDİ ZORLUĞU — ve şemanın ifade edemediği şey:
  //   TDV `sirnak` (200, gövde okundu, 11.122 karakter):
  //     "Şırnak ismi XIX. yüzyılın sonlarına doğru bir KÖY ADI olarak
  //      geçmektedir (Cuinet, II, 612)... Bitlis vilâyetinin Siirt
  //      sancağının ERUH KAZASININ BİR KÖYÜ... Cumhuriyet dönemine
  //      gelmeden Eruh'tan ayrılarak Siirt iline bağlı bir kaza merkezi
  //      olmuştu (1925-1926 Devlet Salnâmesi). Cumhuriyet'in ilk nüfus
  //      sayımında... nüfusu 3000'i bulmuyordu (2962)."
  //   ⇒ 1923'te VARDI ama bir KÖYDÜ; kaza merkezi olması 1925-26.
  //   ⇒ Kuruluş tarihi BİLİNMİYOR — TDV "yüzyılın sonlarına doğru" diyor,
  //     yani YIL BİLE kesin değil.
  //
  // 🟢 ÇARE `kesinlik` DEĞİL, **ALT SINIR** DEYİMİ (koordinatör, 2 Eylül;
  //   Kızılkermen vakasında kurulmuş biçim):
  //     `kesinlik` tarihin HASSASİYETİdir  — "yıl belli, gün belli değil"
  //     buradaki sorun tarihin ANLAMIdır   — "gün belli ama NEYİN günü?"
  //   1891-01-01 bir **ALT SINIRDIR, KURULUŞ GÜNÜ DEĞİLDİR.** Cuinet'nin
  //   sayımı yerleşimi o tarihte KAYITTA gösteriyor; ondan öncesi
  //   bilinmiyor ve UYDURULMADI.
  //   📌 Ve `kur:` alanı zaten "nokta haritada NE ZAMAN BELİRİR" demek,
  //     "ne zaman kuruldu" değil. Atlas bu noktayı 1891'den itibaren
  //     çizer — *"o tarihte kuruldu"* DEMEZ, *"o tarihte VARDI"* der.
  //
  // ── NİÇİN 1515'TEN YAZILMADI (ölçüldü, tercih değil) ──────────────────
  //   Kardeş desen (Bitlis) `d: 1515-09-15`ten başlıyor. Şırnak'ı öyle
  //   yazmak 400 yıl VAR OLMAYAN bir nokta çizerdi. Ve ölçtüm:
  //     `kur:` taşıyan 322 kaydın **SIFIRINDA** `kur` ilk dönem
  //     başlangıcından SONRA değil — yani projenin sözleşmesi
  //     "kur == ilk dönemin başı". `denetle.py:1772` bunu ayrıca
  //     DENETLİYOR ("dönem kuruluştan ÖNCE başlıyor mu").
  //   ⇒ `kur` ve `d.f` aynı güne konuldu; sözleşme çiğnenmedi.
  //
  // ⚠️ `kesinlik:` alanı `VERI-YAPISI.md`de "🔜 planlanan" listesinde —
  //   `girdi.py` onu tanımayacak ve "BILINEN_ALANLAR'da yok" uyarısı
  //   verecek. Bilerek yazıldı (koordinatörün deyimi), uyarı beklenen.
  // ═══════════════════════════════════════════════════════════════════════

  {
    ad: "Şırnak",
    tur: "sehir",
    lat: 37.5139, lon: 42.4543,
    g: 0, k: 4, m: "Bitlis",
    kur: "1891-01-01",
    kesinlik: "belirsiz",
    d: [{ f: "1891-01-01", t: "1923-10-29" }],
    s: [],
    v: [],
    kaynak: "TDV `sirnak` (HTTP 200, gövde okundu, 11.122 karakter): \"Şırnak ismi XIX. yüzyılın sonlarına doğru bir köy adı olarak geçmektedir (Cuinet, II, 612). O tarihlerdeki Bitlis vilâyetinin Siirt sancağına bağlı Eruh kazasının bir köyü olan bu küçük yerleşme… Cumhuriyet dönemine gelmeden Eruh'tan ayrılarak Siirt iline bağlı bir kaza merkezi olmuştu (1925-1926 Türkiye Cumhuriyeti Devlet Salnâmesi). Cumhuriyet'in ilk nüfus sayımında köy boyutlarındaki bu kaza merkezinin nüfusu 3000'i bulmuyordu (2962).\" 🔴 1891-01-01 BİR ALT SINIRDIR, KURULUŞ GÜNÜ DEĞİLDİR: Cuinet'nin sayımı yerleşimi o tarihte KAYITTA gösteriyor, öncesi BİLİNMİYOR ve uydurulmadı. KOORDİNAT: GeoNames allCountries (CC BY 4.0, 31 Ağu 2026), kayıt 300640, 37.51393/42.45432, PPLA — tahmin DEĞİL. İdarî bağ da TDV'den: \"1884'te Siirt sancağı Bitlis vilâyetine bağlanınca Şırnak da Bitlis vilâyetinin Siirt sancağının Eruh kazası içinde yer aldı\" ⇒ `m:\"Bitlis\"` (Siirt ve Eruh atlasta kayıtlı değil, zincirin var olan en yakın halkası Bitlis).",
    neden: "Silopi ile Çölemerik arasındaki 113 km'lik noktasızlığı kapatan tek KAYNAKLI aday. ⚠️ 1923'te bir KAZA MERKEZİ DEĞİL, Eruh kazasının bir KÖYÜDÜR; `k:4` (alt kademe) onu kaza saydığı için değil, ölçekte köy kademesi bulunmadığı için verildi — `k:0` ise \"kademesiz/yabancı/dolgu\" demek ve daha yanlış olurdu. ⚠️ Öteki dört aday (Beytüşşebap · Uludere · Şenoba · Uzungeçit) YAZILMADI: TDV onları yalnız bugünkü ilçe adları olarak anıyor, Osmanlı dönemi dayanağı yok."
  }

];
