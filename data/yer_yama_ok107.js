// ============================================================================
// YER_YAMA_OK107 — SAHİPLİK YAMASI · OPUS HAZIR KITA 107 · parti-emrelic-0033
//
// 🔴 BU DOSYA BAĞLANMAZ, UYGULANIR.
//    `arac/_sahiplik_uygula.py` okur ve hedef `yerlesimler*.js` dosyasına
//    işler. `girdi.py`ye EKLENMEZ — eklenirse aynı yerleşim İKİ KEZ girer
//    (`girdi.py`nin `yerlesimler_kafkas_duzeltme.js` için yazdığı ders).
//    Ad alanı dosya adından türetildi (`ok107`) — `CLAUDE.md §7`.
//
// ───────────────────────────────────────────────────────────── H-0015
// Emre: "nusaybin derik silopi osmanlıya katılmış görünüyo ama kronoloji
//        maddesi yok. ayrıca enklav görünümü var bu topraktan daha önce
//        diğer topraklar katılmamış mı"
//
// ÖLÇÜM — ikisi de doğru çıktı:
//   ① veride `d:` başlangıcı 1515-01-01 olan nokta: TAM ÜÇ
//        Nusaybin · Silopi · Malikiye (Derik)      = Emre'nin saydığı üç
//   ② o günün kronoloji maddesi:
//        1515-01-01 "Tersâne-i Âmire'nin İstanbul'a taşınması" → ALÂKASIZ
//      `Değişmez 2` TEMİZ diyordu; ölçüt "±30 günde madde VAR MI" sorusunu
//      soruyor, "madde BU DEĞİŞİM HAKKINDA MI" sorusunu sormuyor.
//   ③ enklav: 1515-01-01'de üçü Osmanlı, Diyarbakır 1515-09-10'a kadar
//      Safevî, Mardin 1517-05-01'e kadar Safevî ⇒ 8,5 ay boyunca ada.
//
// KAYNAK — TDV, gövdeleri OKUNDU (HTTP 200 + içerik):
//   `nusaybin`: "…ardından Akkoyunlu, Karakoyunlu ve Safevî hâkimiyetine
//     girdi. Yavuz Sultan Selim'in Çaldıran Seferi sonunda girişilen Doğu
//     Anadolu harekâtı sırasında … 921 (1515) yılı sonlarında Osmanlı
//     topraklarına katıldı." + "Diyarbekir beylerbeyiliği sınırları içinde
//     bir nahiye merkezi"
//   `cizre`: "Yavuz Sultan Selim, İdrîs-i Bitlisî'nin de yardımıyla Doğu ve
//     Güneydoğu Anadolu'nun büyük kısmını ele geçirirken Cizre'yi de aldı."
//   `silopi` ve `derik` slugları: HTTP 302 = ÖLÜ, müstakil madde YOK.
//
// SEÇİLEN GÜN 1515-09-19 ve GEREKÇESİ — tartışmalı olan yalnız BU:
//   TDV "921 yılı sonlarında" diyor (≈ Kasım 1515 – Şubat 1516). Seçtiğim
//   gün onun biraz öncesi. Alternatif "1515 sonu" için bir gün UYDURMAKTI;
//   `§4` "tarih uydurma" diyor. 19 Eylül 1515 BELGELİ bir gündür (Âmid'in
//   fethi ve Diyarbekir beylerbeyiliğinin kuruluşu — külliyatta maddesi VAR)
//   ve TDV bu üç yeri o beylerbeyiliğin içine yerleştiriyor.
//   ⇒ 1515-01-01'in YANLIŞ olduğu tartışmalı DEĞİL; yalnız yerine konacak
//     gün koordinatörün kararına açıktır.
//
// 1507-01-01 (Safevî) NEREDEN: atlasın KENDİ günü. Diyarbakır · Mardin ·
//   Palu · Siverek · Urfa hepsi `safevi 1507-01-01`den başlıyor; bu üçü de
//   aynı Diyarbekir bölgesinde. TDV Safevî'yi son selef olarak sayıyor.
//
// ⚠️ ÖLÇMEDİĞİM — açıkça yazıyorum:
//   · 1507 ÖNCESİNE DOKUNMADIM. `akkoyunlu 1281-01-01`den başlıyor ve bu
//     kabalık duruyor (Akkoyunlu künyesi f=1340; TDV Artuklu·Zengî·Eyyûbî
//     ve Karakoyunlu'yu da sayıyor). AYRI BİR İŞ, bu yamanın konusu değil.
//   · Cizre'nin `yurtluk-ocaklık` statüsü (TDV) atlasta `d:` mi `v:` mi
//     olmalı — ÖLÇMEDİM, koordinatörün kararı.
//   · Bu üç noktanın 1918 sonrası dönemlerine DOKUNMADIM, aynen korundu.
// ============================================================================
window.YER_YAMA_OK107 = [

// 🔴 BİRLEŞİMLE DÜŞTÜ — SİLİNMEDİ, YORUMA ÇEVRİLDİ (kayıt korunur)
//    hüküm  : denetim/YAMA-CAKISMA.md · M-2116 (1.MURAT)
//    kazanan: data/yer_yama_birlesim_1murat.js — İKİ yamanın farklı
//             katmanları orada TEK kayıtta birleştirildi (c8e535f)
//    uygulayan: OPUS HAZIR KITA 109 · 2 Eylül 2026 · sevk M-2134
//    ⚠️ Bu kaydın katkısı KAYBOLMADI: birleşim kaydı hem `d:` hem
//       `s:` taşıyor ve ölçülerek doğrulandı.
//       Hükmün yanlış olduğunu düşünen KOORDİNATÖRE yazsın.
// { ad:"Nusaybin",
//   s:[{f:"1281-01-01",t:"1507-01-01",d:"akkoyunlu"},
//      {f:"1507-01-01",t:"1515-09-19",d:"safevi"},
//      {f:"1918-10-30",t:"1921-10-20",d:"fransa-cumhuriyet"}],
//   d:[{f:"1515-09-19",t:"1918-10-30"},
//      {f:"1921-10-20",t:"1923-10-29"}],
//   kaynak:"nusaybin",
//   not:"H-0015 · d: 1515-01-01 -> 1515-09-19 (enklav ve alakasiz-madde kusuru). TDV nusaybin govdesi okundu." },

// 🔴 BİRLEŞİMLE DÜŞTÜ — SİLİNMEDİ, YORUMA ÇEVRİLDİ (kayıt korunur)
//    hüküm  : denetim/YAMA-CAKISMA.md · M-2116 (1.MURAT)
//    kazanan: data/yer_yama_birlesim_1murat.js — İKİ yamanın farklı
//             katmanları orada TEK kayıtta birleştirildi (c8e535f)
//    uygulayan: OPUS HAZIR KITA 109 · 2 Eylül 2026 · sevk M-2134
//    ⚠️ Bu kaydın katkısı KAYBOLMADI: birleşim kaydı hem `d:` hem
//       `s:` taşıyor ve ölçülerek doğrulandı.
//       Hükmün yanlış olduğunu düşünen KOORDİNATÖRE yazsın.
// { ad:"Silopi",
//   s:[{f:"1281-01-01",t:"1507-01-01",d:"akkoyunlu"},
//      {f:"1507-01-01",t:"1515-09-19",d:"safevi"},
//      {f:"1918-10-30",t:"1921-10-20",d:"ingiltere"}],
//   d:[{f:"1515-09-19",t:"1918-10-30"},
//      {f:"1921-10-20",t:"1923-10-29"}],
//   kaynak:"cizre",
//   not:"H-0015 · TDV silopi slugu OLU (302); dayanak TDV cizre maddesi — Cizre ve cevresi ayni Dogu Anadolu harekatinda alindi, Diyarbekir eyaletine baglandi." },

// 🔴 BİRLEŞİMLE DÜŞTÜ — SİLİNMEDİ, YORUMA ÇEVRİLDİ (kayıt korunur)
//    hüküm  : denetim/YAMA-CAKISMA.md · M-2116 (1.MURAT)
//    kazanan: data/yer_yama_birlesim_1murat.js — İKİ yamanın farklı
//             katmanları orada TEK kayıtta birleştirildi (c8e535f)
//    uygulayan: OPUS HAZIR KITA 109 · 2 Eylül 2026 · sevk M-2134
//    ⚠️ Bu kaydın katkısı KAYBOLMADI: birleşim kaydı hem `d:` hem
//       `s:` taşıyor ve ölçülerek doğrulandı.
//       Hükmün yanlış olduğunu düşünen KOORDİNATÖRE yazsın.
// { ad:"Malikiye (Derik)",
//   s:[{f:"1281-01-01",t:"1507-01-01",d:"akkoyunlu"},
//      {f:"1507-01-01",t:"1515-09-19",d:"safevi"},
//      {f:"1918-10-30",t:"1923-10-29",d:"fransa-cumhuriyet"}],
//   d:[{f:"1515-09-19",t:"1918-10-30"}],
//   kaynak:"nusaybin",
//   not:"H-0015 · TDV derik slugu OLU (302); dayanak TDV nusaybin — Mardin ovasinin ayni kolu, ayni harekat. 1918 sonrasi donemine DOKUNULMADI." },

// ─────────────────────────────────────────────────────────────────── H-0013
// Emre: "burada haritanın güney batısındaki küçük boyamanın sebebi nedir"
// Görselin kendi künyesi: 1513-09-01 · 13.90-18.26K / 2.18B-1.83D · z6.3
//
// ÖLÇÜM — sebep TEK BİR KAYITTA:
//   Timbuktu  k=1 (tavan 700 km)  ·  s: [] · d: [] · v: []   →  TAM SAHİPSİZ
//   ve Gao (16.27K -0.04D) ile Cenne (13.91K -4.55D) ARASINDA duruyor.
//   Izgara sınaması: 15.0K/2.0B · 16.0K/2.0B · 17.0K/2.0B üç noktanın da en
//   yakın yerleşimi TİMBUKTU ve üçü de SAHİPSİZ çıkıyor; 14.0K/2.0B'nin en
//   yakını CENNE ve o songhay. ⇒ Timbuktu'nun sahipsiz 700 km'lik hücresi
//   Songhay gövdesini ikiye bölüyor; Emre'nin gördüğü "küçük boyama"
//   CENNE'nin kutuya giren ucu.
// 🔴 Ve Timbuktu, atlasta `bos:`/`neden:` alanı OLMAYAN 7 sahipsiz noktadan
//    biri — yani BEYAN EDİLMİŞ bir boşluk değil, BEYANSIZ bir delik.
//
// KAYNAK — TDV `tinbuktu` (gövdesi okundu; 🔴 `timbuktu` slugu 200 döndürüyor
//   ama gövdesi 2327 karakter ve konuyla ilgili TEK KELİME içermiyor —
//   `CLAUDE.md §4`ün "canlı slug, boş/boilerplate gövde" tuzağı. Doğru slug
//   TÜRKÇE yazımıyla `tinbuktu`.) Alıntılar:
//     "Tinbüktü 1430'da Tevârikler'in eline geçti ve 1468 yılına kadar
//      onlarda kaldı. Şehri Tevârikler'den alan Sünnî Ali Ber…(1468-1492)"
//     "bir asırdan fazla Songay Sultanlığı'nın idaresinde kaldı"
//     "Ahmed el-Mansûr'un 999 (1591) yılında gönderdiği ordu Tondibi
//      savaşında … Songay Sultanlığı'nı ortadan kaldırdı … Tinbüktü eyalet
//      merkezi yapılarak Tinbüktü Paşalığı kuruldu"
//     "'arma' … 1163'te (1750) Tinbüktü'de yönetimi ele geçirdiler"
//     "1760'ta Tevârikler'in zaptettiği…"
//
// DÖNEMLER KOMŞULARIYLA BİREBİR HİZALANDI (uydurma yok):
//   Valata : mali 1281-01-01 → 1430-01-01        ← aynı 1430 kırılması
//   Gao    : songhay → 1591-04-13, sonra fas → 1700-01-01  ← aynı iki gün
// ⚠️ ÖLÇMEDİĞİM: 1430-1468 (Tevârik) ve 1700 sonrası (arma/Tevârik) için
//   `devletler.js`te KÜNYE YOK — Valata'nın kendi notundaki "kunye-yok"
//   durumunun aynısı. O iki aralık BİLEREK boş bırakıldı. Fransız işgal
//   tarihi de bu maddede geçmiyor ⇒ yazmadım.
// 🔴 UYARI: `_sahiplik_uygula.py` yalnız d·s·v·isg·m·kaynak yazıyor;
//   aşağıdaki `bos:`/`neden:` alanları İNMEZ. Onları dosya sahibinin elle
//   koyması gerekiyor — yoksa Timbuktu yine "beyansız delik" sayılır.
{ ad:"Timbuktu",
  s:[{f:"1281-01-01",t:"1430-01-01",d:"mali-imparatorlugu"},
     {f:"1468-01-01",t:"1591-04-13",d:"songhay-imparatorlugu"},
     {f:"1591-04-13",t:"1700-01-01",d:"fas"}],
  kaynak:"tinbuktu",
  bos:"veri-yok",
  neden:"kunye-yok — IKI ARALIK bilerek bos. (1) 1430-1468: TDV tinbuktu maddesi sehrin Tevarikler'in (Tuareg) elinde oldugunu ACIKCA soyluyor, yani kaynak KONUSUYOR; ama Tuareg icin devletler.js'te kunye YOK — Valata (Oualata) kaydindaki durumun AYNISI. (2) 1700 sonrasi: TDV 1750'de 'arma'lari, 1760'ta yine Tevarikler'i sayiyor; ikisinin de kunyesi yok. Fransiz isgal tarihi bu maddede GECMIYOR, uydurulmadi.",
  not:"H-0013 · Timbuktu'nun s/d/v alanlarinin UCU DE BOSTU. 700 km tavanli sahipsiz hucre Songhay govdesini ikiye boluyordu." }

];
