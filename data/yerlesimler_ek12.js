// =====================================================================
// BATI KENARI — İZLANDA ve DOĞU GRÖNLAND  ·  4 nokta
// PETEK/NOKTA oturumu · 4 Ağustos 2026
// =====================================================================
// 🔴 BU DOSYA İKİ ŞEYİ BİRDEN BEKLİYOR:
//    ① Batı kenarının açılması (−12 → −25). Açılmazsa dört nokta da kutu
//      DIŞINDA kalır, petekleri boş çıkar ve motorun doğrulaması DÜŞER.
//    ② `izlanda` kimliği — BOYALAR'da YOK (yalnız iki İzlanda kaydı için;
//      Grönland ikilisi kimlik istemiyor, sahipsiz).
//
// ── 🔴 VE ÖNCE BİR DÜZELTME: BATI KENARI YALNIZ İZLANDA DEĞİL ───────
// Koordinatörün sevki şöyle diyordu: *"batı −12→−25; batı kenarı İzlanda
// için, Emre onu adıyla istedi."* ÖLÇTÜM — İzlanda o kenarın **%9'u.**
//
//   box(−25,−11,−12,82) şeridinde giren kara      1.117.472 km²
//     İzlanda                                        102.162 km²   %9,1
//     Doğu Grönland                                  155.397 km²  %13,9
//     ─────────────────────────────────────────────────────────
//     Senegal · Gambiya · Yeşilburun Adaları         284.832 km²
//     Moritanya                                      256.754 km²
//     Batı Sahra                                     183.766 km²
//     Gine-Bissau · Gine                             113.511 km²
//     Kanarya Adaları + Fas kıyısı                    21.922 km²
//     ─────────────────────────────────────────────  860.785 km²  %77,0
//
// Ve o %77'yi kim boyardı: **Timbuktu ve Agadir.** Timbuktu canlı bir
// dolgu noktasıdır ve `s:`/`d:`/`v:` alanlarının ÜÇÜ DE BOŞ — yani
// Senegal, Gambiya ve Moritanya 550.210 km² boyunca SAHİPSİZ (beyaz)
// çıkardı. Agadir ise `fas` taşıyor: **Kanarya Adaları haritada FAS
// boyanırdı** — adalar 1402-1496 arasında Kastilya'ya geçmişken.
// En uzak hücre Yeşilburun Adaları: Timbuktu'ya **2.294 km.**
//
// ⇒ ÖNERİ (karar koordinatörün): kutu düz dikdörtgen yerine **L** olsun —
//     BOLGE = box(-12,-11,146,82) | box(-25,60,-12,82)
//   Batı kenarı yalnız 60°K'nin kuzeyinde açılır: İzlanda ve Doğu Grönland
//   girer (256.688 km²), Batı Afrika GİRMEZ (860.785 km² dışarıda kalır).
//   ⚠️ Çentiğin köşesi (−12°K/60°K) açık okyanustadır, orada kara yok —
//     yani `uret_petek.py:632`nin "BOLGE çerçevesi düz kalır" mantığının
//     korumadığı tek köşe hiçbir peteğe değmiyor. Ölçüldü.
//   ⚠️ `voronoi_diagram(envelope=BOLGE)` zaten sınırlayıcı kutuyu alır,
//     hücreler sonra `.intersection(BOLGE)` ile kırpılır — L şekli motoru
//     bozmaz. `BOLGE.bounds` kullanan iki yer (618, 862) çerçeve düzlüğü
//     içindir ve yukarıdaki sebeple etkisiz.
//   📌 Alternatif: batı kenarını HİÇ açma, İzlanda'yı sonraki dalgaya bırak.
//     Üçüncü seçenek (Batı Afrika'ya da nokta yazmak) ayrı bir partidir:
//     `mali` · `songay` · `jolof` · `trarza` kimliklerinin hiçbiri
//     BOYALAR'da yok ve Timbuktu'nun kasten boş olması o coğrafyanın
//     BİLİNÇLİ olarak kapsam dışı tutulduğunu gösteriyor.
//
// ── ZİNCİRLER ───────────────────────────────────────────────────────
// İzlanda:  norvec 1281-01-01 → 1537-01-01 danimarka → 1918-12-01 izlanda
// ⚠️ `1537-01-01` KAYNAKTAN DEĞİL, TUTARLILIKTAN: İzlanda 1262'de Norveç'e
//    bağlandı ve metropolüyle birlikte Kalmar Birliği üzerinden Danimarka'ya
//    geçti. Atlas Norveç'in Danimarka'ya indirgenmesini 1537-01-01 diye
//    yazıyor (canlı Bergen ve Trondheim kayıtları); İzlanda'yı ayrı bir güne
//    bağlamak, aynı hukukî olayı iki tarihte göstermek olurdu.
// ⚠️ `1918-12-01` — İzlanda Krallığı, Danimarka ile şahsî birlik içinde
//    egemen devlet. Pencerede 4 yıl 11 ay görünür. Atlas 1918 devletlerini
//    tutarlı biçimde modelliyor (`polonya` · `cekoslovakya` · `yugoslavya` ·
//    `finlandiya` · `letonya` · `litvanya` hepsi BOYALAR'da) — `izlanda`nın
//    yokluğu bu desendeki tek boşluk.
// 🔴 İkisi de TDV'ye BASMIYOR (§4).
//
// Doğu Grönland: dönem YOK, pencerenin tamamında sahipsiz.
// ✅ Dört kaydın da geçişleri `s:`→`s:` ⇒ Değişmez 2 borcu SIFIR.
//
// ── ÖN KOŞULLAR ─────────────────────────────────────────────────────
// maske 4/4 · en yakın çift 249,7 km (Reykjavík ↔ Akureyri)
// ÖLÇÜLEN ETKİ (İzlanda + D. Grönland, 256.688 km²):
//     ortalama uzaklık 1.526 km → 203 km · en uzak 2.273 km → 581 km
// renk  norvec ✓ danimarka ✓ · **izlanda ✗ EKSİK**
// =====================================================================

window.YERLESIMLER_EK12 = [

{ ad:"Reykjavík", tur:"sehir", lat:64.1466, lon:-21.9426, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec"},{f:"1537-01-01",t:"1918-12-01",d:"danimarka"},{f:"1918-12-01",t:"1923-10-29",d:"izlanda"}] },

// ⚠️ maske: Akureyri (65,6835/−18,0878) Eyjafjörður'un dibinde ve 10m
//    maskesi orayı deniz sayıyor; 2,2 km kuzeydoğuya çekildi. Aynı sınıf
//    düzeltme `_ek8`de beş kayıtta daha var.
{ ad:"Akureyri", tur:"sehir", lat:65.7008, lon:-18.0635, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec"},{f:"1537-01-01",t:"1918-12-01",d:"danimarka"},{f:"1918-12-01",t:"1923-10-29",d:"izlanda"}] },

// ── DOĞU GRÖNLAND — pencerenin tamamında sahipsiz ───────────────────
// ONAYLANDI, VARSAYILMADI: Norse yerleşimleri adanın GÜNEYBATI kıyısındaydı
// (kutunun dışında) ve XV. yy'da söndü. Danimarka-Norveç'in yeniden
// sömürgeleştirmesi 1721'de BATI kıyısında başladı; doğu kıyısında ilk
// yerleşim 1894 (Ammassalik) ve orası da −37°D, yani kutunun dışında.
// Kutuya giren şerit (−25…−12) 1923'e kadar hiçbir devletin idaresinde
// değildi; Danimarka-Norveç hükümranlık davası 1933'te karara bağlandı.
{ ad:"Doğu Grönland", tur:"bolge", lat:70.4833, lon:-21.9667, g:0, k:0, d:[], s:[],
  kasitli_bosluk:true, neden:"Norse yerleşimleri güneybatı kıyısındaydı ve XV. yy'da söndü; Danimarka-Norveç'in yeniden sömürgeleştirmesi 1721'de BATI kıyısında başladı, doğu kıyısında ilk yerleşim 1894 (Ammassalik, −37°D, kutu dışı). 1281-1923 penceresinde kutuya giren şerit hiçbir devletin idaresinde değil." },

{ ad:"Kuzeydoğu Grönland", tur:"bolge", lat:76.7700, lon:-18.6600, g:0, k:0, d:[], s:[],
  kasitli_bosluk:true, neden:"Doğu Grönland ile aynı hüküm; 700 km'lik kıyı tek noktayla temsil edilemezdi." },

];
