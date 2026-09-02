// ===========================================================================
// NOKTA HALKA-2 · 1 — Sudan · Habeşistan · Eritre · Somali · Umman
// ===========================================================================
// Oturum: NOKTA HALKA-2 <1>   ·   Şartname: oturumlar/NOKTA-HALKA2.md
// Kutu: lon 22-60 / lat -2..22
//
// NİÇİN YAZILDI — ölçülmüş boşluk (bu oturumun kendi ölçümü, 8 Ağustos 2026):
//   kutu içi 99 nokta · ham kutu alanı 11,13 mn km² → 8,9 nokta/mn km²
//   (şartnamenin "9,0"ı doğrulandı; payda DENİZ DAHİL ham kutu)
//   kara maskesi üzerinde 0,25° ızgara, 10.182 hücre:
//     en yakın noktaya uzaklık  ortanca 199 km · ortalama 337 km · en uzak 1.580 km
//     hücrelerin %49,8'i 200 km'den, %35,8'i 300 km'den uzak
//   ülke ülke (NE admin_0 × kutu):
//     Sudan 1.868.384 km² / 31 · Etiyopya 1.135.862 / 23 · Güney Sudan 631.271 / 0
//     Somali 475.670 / 11 · Umman 219.405 / 2 · Somaliland 168.487 / 7
//     Eritre 123.274 / 5 · Cibuti 21.984 / 1
//
// SONUÇ (bu dosya yazıldıktan sonra AYNI yöntemle yeniden ölçüldü):
//   kutu içi nokta            99 → 280      yoğunluk  8,9 → 25,2  (ölçüt: 25)
//   benim ülkelerim           80 → 261      yoğunluk 17,2 → 56,2
//   boşluk ortancası      199 km → 93 km  · >200 km hücre %49,8 → %23,1
//   Sudan 16,6→46,0 · Etiyopya 20,2→59,9 · Güney Sudan 0,0→41,2 ·
//   Somali 23,1→65,2 · Umman 9,1→68,4 · Somaliland 41,5→95,0 ·
//   Eritre 40,6→113,6 · Cibuti 45,5→227,4
// SEKİZ KONTROLÜN SEKİZİ DE TEMİZ: ayrıştırma · bilinmeyen alan 0 ·
//   ad çakışması 0 · 3 km ihlali 0 (en yakın çift 8,54 km) · maske dışı 0 ·
//   renksiz kimlik 0 · künyesiz kimlik 0 · dönem sağlığı 0 sorun ·
//   Değişmez 1 İŞARETSİZ boşluk 0 · canlıda olmayan yeni gün 0.
// AYRICA ölçüldü: 181 noktanın 181'i benim sekiz ülkemin İÇİNDE
//   (halka 6-7'ye taşan nokta 0).
//
// 🔴 KUTUNUN %24'ÜNE KASTEN DOKUNULMADI. Kongo DC · Kenya · Uganda · Orta
//    Afrika · Çad · Tanzanya · Ruanda = 1,86 mn km², hepsi ONCELIK.md §4'e
//    göre HALKA 6-7. Halka 2 işi yapan bir oturumun oraya nokta koyması
//    SIRA İHLALİDİR. Kutu yoğunluğunun tavanı bu yüzden matematiksel olarak
//    sınırlı; bu bir eksik değil, bir KARARDIR.
//
// ---------------------------------------------------------------------------
// TASARIM İLKESİ — SIFIR KIRILMA BORCU
// ---------------------------------------------------------------------------
// Bu dosyadaki HİÇBİR nokta yeni bir tarih icat etmez. Kullanılan bütün
// `f:`/`t:` değerleri, canlı veride ZATEN var olan kırılmalardır:
//   1504-01-01 · 1517-04-13 · 1515-04-01 · 1557-01-01 · 1577-01-01
//   1821-01-04 · 1821-06-14 · 1821-08-19 · 1874-11-02 · 1882-09-07
//   1883-12-23 · 1884-01-01 · 1884-07-18 · 1885-01-26 · 1885-02-05
//   1887-01-06 · 1889-01-01 · 1897-01-01 · 1898-09-02 · 1899-01-19
//   1905-01-01 · 1916-05-23 · 1923-10-29
// ⇒ Değişmez 2 (Osmanlı senkronu) borcu YAPISAL SIFIR — bu dosyada tek bir
//   `d:` dönemi bile yok, `v:` dönemleri mevcut kırılmalarla birebir aynı gün.
// ⇒ Değişmez 2s (yabancı senkron) borcu da SIFIR beklenir: yeni gün yok.
// 📌 Bedeli var ve saklanmıyor: bazı gerçek dönemler bu yüzden YAZILAMADI.
//   Hepsi aşağıda ⚠️ ile işaretli ve koordinatöre kalem kalem bildirildi.
//
// ---------------------------------------------------------------------------
// KAYNAK (CLAUDE.md §4 — TDV birincil)
// ---------------------------------------------------------------------------
//   sudan          200 ✓  Hartum 1823 kuruluşu · Ubeyyid · Kordofan 1821 ·
//                         Hartum'a giriş 1885-01-26 · Kondominyum 1899-01-19
//   func           200 ✓  Func (Sennâr) 1504 kuruluşu · 1820-21 Mısır fethi
//   darfur         200 ✓  Keyra hânedanı · 1874 Mısır ilhakı · Ali Dinar
//   muhammed-ahmed-el-mehdi 200 ✓  Ubeyyid 1882-09-07 · Hartum 1885-01-26 ·
//                         Ümmü Dermân'ın başkent oluşu 1885 · Halife 1898-09-02
//   etiyopya       200 ✓  Evfât · Adal · merkezin 1577'de AVSA'ya taşınması ·
//                         Masavva 1885-02-05 · Uccialli 1889-05-02
//   somali         200 ✓  Zeyla-Berbera-Tacûra 1883-84 · Benâdir · Mecerteyn
//   eritre · cibuti · makdisu · berbera · zeyla · masavva · dongola ·
//   kordofan · hartum · nube · evfat · harar · cimma · sennar   hepsi 200 ✓
// 🔴 ÖLÜ ÇIKAN (302) ve bu yüzden slug olarak YAZILMAYAN — ölçüldü, uydurulmadı:
//   ummuderman · omdurman · atbara · ed-damer · fasoda · malakal · rumbek ·
//   gondokoro · lado · ekvatorya · bahrulgazal · kadugli · dilling · muglad ·
//   kutum · kebkabiye · sinca · bursudan · silluk · zende · vaday · adal ·
//   zufar · ogaden · hobyo · mecerteyn · kismayu · berave · taleh · gambela ·
//   dire-dava · asaita · nekemte  (32 slug, 32'si de 302)
// ⚠️ TUZAK ② YAŞANDI VE KAYDA GEÇİYOR: `mehdi` HTTP 200 döndürür ama açılan
//   madde SUDAN MEHDÎSİ DEĞİL, genel Mehdî akîdesidir. Doğrusu
//   `muhammed-ahmed-el-mehdi`. Aynı şekilde `vav` 200 (Arap harfi) ve
//   `cevher` 200 (mücevher) — ikisi de yer maddesi DEĞİL. Üçü de
//   "200 aldım demek doğru maddeyi açtım demek değildir"in canlı örneği.
//
// ---------------------------------------------------------------------------
// KULLANILAN KİMLİKLER — hepsi renkler.py'de RENKLİ (ölçüldü, 8 Ağustos)
// ---------------------------------------------------------------------------
//   nube · funj · darfur · mehdi · ingiltere · habesistan · italya · adal ·
//   somali · memluk · fransa · nebhani · umman   → 13 kimlik, 13'ü de RENKLİ
// 🔴 KOORDİNATÖRE BİLDİRİLDİ — bu dosyanın ESERİ DEĞİL, ölçülen mevcut borç:
//   `kaffa` · `cimma` · `vollayta` · `sidamo` RENKLİ ama devletler.js'te
//   KÜNYESİZ. Dördü de CANLI noktalarda kullanılıyor (Bonga · Cimma · Sodo ·
//   Yirgalem, yerlesimler_afrika.js).
// 🔴 GEREKEN AMA HİÇ OLMAYAN KİMLİKLER (ne renk ne künye) — bu yüzden
//   aşağıda ilgili noktalar ya kasten sahipsiz ya en yakın MEŞRÛ kimlikle
//   yazıldı, ve her biri yerinde ⚠️ ile işaretli:
//   `silluk` (Şilluk Krallığı, Fâşoda) · `zende` (Azande) · `vaday` ·
//   `avsa` (Avsa Sultanlığı) · `mecerteyn` · `hobyo` · `tuncur`
// ===========================================================================

window.YERLESIMLER_H2_AFRIKA = [

// ===========================================================================
// 1) SUDAN — NİL VADİSİ (Dongola kolu)
// ---------------------------------------------------------------------------
// Zincir mevcut Dongola · Kerma · Debbe · Merevî kayıtlarıyla BİREBİR:
//   Nûbe krallıkları → 1504-01-01 Func → 1821-01-04 Kavalalı Mısır'ının
//   Nûbe fethi (tâbi) → 1885-01-26 Mehdî Devleti → 1899-01-19 Kondominyum.
// Kaynak: TDV `func` (1504 kuruluşu, Üçüncü Şelâle'ye kadar), TDV `sudan`
// (1820-21 fethi), TDV `muhammed-ahmed-el-mehdi` (Hartum 1885-01-26).
// ===========================================================================

// Sükkût bölgesi — İkinci ile Üçüncü Şelâle arasındaki Nil kolu. Kerma ile
// Vâdî Halfâ arasında 245 km boyunca tek nokta yoktu.
{ ad:"Delgo (Sükkût)", tur:"sehir", lat:20.126, lon:30.548, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-01-04",d:"funj"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}],
  v:[{f:"1821-01-04",t:"1885-01-26",k:"Mısır (Kavalalı)"}], d:[] },

// Mahas bölgesi; Nûbe'nin İkinci Şelâle'ye bakan kuzey ucu.
{ ad:"Abrî (Mahas)", tur:"sehir", lat:20.803, lon:30.352, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-01-04",d:"funj"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}],
  v:[{f:"1821-01-04",t:"1885-01-26",k:"Mısır (Kavalalı)"}], d:[] },

// Nil'in büyük kıvrımının batı ucu — Debbe ile Merevî arasındaki eyer.
{ ad:"Kortî", tur:"sehir", lat:18.100, lon:31.567, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-01-04",d:"funj"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}],
  v:[{f:"1821-01-04",t:"1885-01-26",k:"Mısır (Kavalalı)"}], d:[] },

// Atbara ile Nil'in birleştiği yer; Mecâzîb şeyhliğinin merkeziydi.
{ ad:"Ed-Dâmer", tur:"sehir", lat:17.598, lon:33.966, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-01-04",d:"funj"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}],
  v:[{f:"1821-01-04",t:"1885-01-26",k:"Mısır (Kavalalı)"}], d:[] },

// Eski Meroe (Begravviye) piramitleri; Şendî ile Ed-Dâmer arasındaki halka.
{ ad:"Kabûşiyye", tur:"sehir", lat:16.883, lon:33.750, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-01-04",d:"funj"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}],
  v:[{f:"1821-01-04",t:"1885-01-26",k:"Mısır (Kavalalı)"}], d:[] },

// 🔴 MEHDÎ DEVLETİ'NİN BAŞKENTİ — ve atlasta HİÇ YOKTU.
// TDV `muhammed-ahmed-el-mehdi`: Hartum 26 Ocak 1885'te düştükten sonra
// idare merkezi Ümmü Dermân'a taşındı, cami ve konutlar orada yapıldı;
// Mehdî 22 Haziran 1885'te burada öldü, Halife Abdullah 2 Eylül 1898'e
// kadar buradan yönetti. Hartum'un 18,7 km batısında — 3 km kuralına
// takılmıyor ve ayrı bir şehirdir.
// 📌 `ek6`daki Çerkask vakasının aynısı: künyede yazılı BAŞKENT, haritada yok.
{ ad:"Ümmü Dermân", tur:"sehir", lat:15.645, lon:32.477, g:1, k:3, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-06-14",d:"funj"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}],
  v:[{f:"1821-06-14",t:"1885-01-26",k:"Mısır (Kavalalı)"}], d:[] },

// ===========================================================================
// 2) SUDAN — MAVİ NİL ve CEZÎRE (Sennâr kolu, 1821-06-14)
// ---------------------------------------------------------------------------
// Zincir mevcut Sennar · Vad Medenî · Kosti · Ed-Düveym kayıtlarıyla birebir.
// TDV `func`: Func en geniş hâlinde "Üçüncü Şelâle'den Mavi Nil'e, Kızıldeniz'den
// Kordofan'a" uzanıyordu; çekirdeği Nil ile Mavi Nil arasıdır (Cezîre).
// ===========================================================================

// Mavi Nil boyunda Sennâr ile Vad Medenî arasındaki eyer.
{ ad:"Sincâ", tur:"sehir", lat:13.145, lon:33.932, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-06-14",d:"funj"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}],
  v:[{f:"1821-06-14",t:"1885-01-26",k:"Mısır (Kavalalı)"}], d:[] },

// TDV `muhammed-ahmed-el-mehdi` maddesinde adı geçen Müsellemiyye.
{ ad:"Müsellemiyye", tur:"sehir", lat:14.400, lon:33.325, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-06-14",d:"funj"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}],
  v:[{f:"1821-06-14",t:"1885-01-26",k:"Mısır (Kavalalı)"}], d:[] },

{ ad:"Rufâa", tur:"sehir", lat:14.767, lon:33.367, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-06-14",d:"funj"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}],
  v:[{f:"1821-06-14",t:"1885-01-26",k:"Mısır (Kavalalı)"}], d:[] },

// Beyaz Nil'in sol yakası — Ed-Düveym ile Kosti arasındaki eski Kavâ.
{ ad:"El-Kavâ", tur:"sehir", lat:13.740, lon:32.500, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-06-14",d:"funj"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}],
  v:[{f:"1821-06-14",t:"1885-01-26",k:"Mısır (Kavalalı)"}], d:[] },

// Beyaz Nil'in Kosti'den güneye uzanan kolu; Func'un güney sınır kuşağı.
{ ad:"Cebeleyn", tur:"sehir", lat:12.598, lon:32.816, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-06-14",d:"funj"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}],
  v:[{f:"1821-06-14",t:"1885-01-26",k:"Mısır (Kavalalı)"}], d:[] },

// Mavi Nil'in Habeşistan sınırındaki güney ucu; Fâzûğlî'nin devamı.
{ ad:"Kurmuk", tur:"sehir", lat:10.830, lon:34.283, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-06-14",d:"funj"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}],
  v:[{f:"1821-06-14",t:"1885-01-26",k:"Mısır (Kavalalı)"}], d:[] },

// ===========================================================================
// 3) SUDAN — KORDOFAN (1821-08-19 / Mehdî 1882-09-07)
// ---------------------------------------------------------------------------
// Zincir mevcut Kordofan (Ubeyyid) kaydıyla birebir. Mehdî tarihi TDV
// `muhammed-ahmed-el-mehdi`de AÇIKÇA yazılı: Ubeyyid 7 Eylül 1882.
// ⚠️ Güney Kordofan'ın Nûbe dağları (Kâdûglî · Dilling · Talodi) 1821'de
//   fiilen fethedilmedi; Mısır idaresi oraya ancak XIX. yy sonunda ulaştı.
//   Yine de Kordofan eyaletinin HUKUKÎ sınırı içindeydi ve bu atlasın
//   taban rengi DE JURE sahipliği gösterir (girdi.py `isg:` notu). Ayrı bir
//   fiilî-denetim tarihi yazmak yeni kırılma demekti; yazılmadı.
// ===========================================================================

{ ad:"Er-Rahad", tur:"sehir", lat:12.712, lon:30.648, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-08-19",d:"funj"},{f:"1882-09-07",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}],
  v:[{f:"1821-08-19",t:"1882-09-07",k:"Mısır (Kavalalı)"}], d:[] },

{ ad:"Ümmü Rüvâbe", tur:"sehir", lat:12.903, lon:31.217, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-08-19",d:"funj"},{f:"1882-09-07",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}],
  v:[{f:"1821-08-19",t:"1882-09-07",k:"Mısır (Kavalalı)"}], d:[] },

// Kuzey Kordofan'ın çöle bakan ucu; Bâra ile Dârfûr arasındaki 300 km'lik
// boşluğun ortası.
{ ad:"Sodirî", tur:"sehir", lat:14.423, lon:29.100, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-08-19",d:"funj"},{f:"1882-09-07",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}],
  v:[{f:"1821-08-19",t:"1882-09-07",k:"Mısır (Kavalalı)"}], d:[] },

// Nûbe dağları — TDV `muhammed-ahmed-el-mehdi` maddesinde "Nûbe dağları" ve
// "Kadır bölgesi" olarak geçer; Mehdî'nin ilk sığındığı dağlık kuşak.
{ ad:"Dilling", tur:"sehir", lat:12.050, lon:29.650, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-08-19",d:"funj"},{f:"1882-09-07",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}],
  v:[{f:"1821-08-19",t:"1882-09-07",k:"Mısır (Kavalalı)"}], d:[] },

{ ad:"Kâdûglî", tur:"sehir", lat:11.010, lon:29.717, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-08-19",d:"funj"},{f:"1882-09-07",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}],
  v:[{f:"1821-08-19",t:"1882-09-07",k:"Mısır (Kavalalı)"}], d:[] },

{ ad:"Talodi", tur:"sehir", lat:10.633, lon:30.383, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-08-19",d:"funj"},{f:"1882-09-07",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}],
  v:[{f:"1821-08-19",t:"1882-09-07",k:"Mısır (Kavalalı)"}], d:[] },

{ ad:"Ebû Zabed", tur:"sehir", lat:12.350, lon:29.250, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-08-19",d:"funj"},{f:"1882-09-07",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}],
  v:[{f:"1821-08-19",t:"1882-09-07",k:"Mısır (Kavalalı)"}], d:[] },

// Bâbanûsa ve Muglad: Batı Kordofan'ın Bahrülgazâl'e bakan güney ucu.
{ ad:"Muglad", tur:"sehir", lat:11.033, lon:27.733, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-08-19",d:"funj"},{f:"1882-09-07",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}],
  v:[{f:"1821-08-19",t:"1882-09-07",k:"Mısır (Kavalalı)"}], d:[] },

{ ad:"Bâbanûsa", tur:"sehir", lat:11.333, lon:27.817, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-08-19",d:"funj"},{f:"1882-09-07",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}],
  v:[{f:"1821-08-19",t:"1882-09-07",k:"Mısır (Kavalalı)"}], d:[] },

{ ad:"Ğubeyş", tur:"sehir", lat:12.150, lon:27.383, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-08-19",d:"funj"},{f:"1882-09-07",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}],
  v:[{f:"1821-08-19",t:"1882-09-07",k:"Mısır (Kavalalı)"}], d:[] },

// ===========================================================================
// 4) DÂRFÛR — DÂCÛ → TUNCİLER → KEYRA
// ---------------------------------------------------------------------------
// 🔴 BU BÖLÜM YAZILDIKTAN SONRA DÜZELTİLDİ ve düzeltme bir HAYALET DEVLETİ
//   kaldırdı. İlk hâli mevcut El-Fâşir · Nyala · Cenîne kayıtlarını
//   izliyordu: `darfur` 1281-01-01'den. Ama `darfur` künyesi (koordinatör,
//   8 Ağustos) **1695-01-01..1916-11-06** diyor — yani Keyra hânedanı
//   1695'te kuruldu ve 1281-1695 arası **414 YIL** var olmayan bir devlet
//   boyanıyordu. CLAUDE.md §3.5'in tarif ettiği hatanın ta kendisi.
//   Mevcut kayıtların yorumu bunu zaten biliyordu — *"öncesi Tuncur
//   krallığı, kimliği YOK ve `darfur` ile boyandı"* — kimlik O ZAMAN yoktu;
//   BUGÜN VAR.
// ⚠️ VE DÜZELTMENİN BEDELİ ÖLÇÜLDÜ, VARSAYILMADI: iki yeni sınır günü
//   gerekiyordu (1400-01-01 · 1695-01-01) ve ikisinin de kronolojide
//   **0 GÜN** uzaklıkta maddesi var ⇒ Değişmez 2s borcu **SIFIR**.
//   Ölçülmeseydi bu düzeltme 2s tavanını (121, DOLU) delebilirdi.
//
// 🔴🔴 AMA DENETİMİN "TEMİZ" DEMESİ BURADA YETMİYOR — VE BUNU SAKLAMIYORUM.
//   O iki maddenin NE OLDUĞUNA baktım:
//     1400-01-01 → "Bursa'da Yıldırım Darüşşifası — ilk Osmanlı hastanesi"
//     1695-01-01 → "Hâfız Osman'ın II. Mustafa'ya hat hocası tayin edilmesi"
//   İkisinin de Dârfûr'la **hiçbir ilgisi yok.** Yani Değişmez 2s'in sorduğu
//   soru (*"±30 günde madde var mı"*) EVET diyor, ama kullanıcının göreceği
//   şey şu olur: Tunciler'den Keyra'ya geçiş, ekranda bir HAT HOCASI
//   TAYİNİ'nin altında belirir.
//   📌 CLAUDE.md §3 bunu kelimesi kelimesine tarif ediyor: *"değişim, o güne
//   rastgele denk gelen alakasız bir maddenin altında belirir — kullanıcının
//   en çok şikâyet ettiği hata bu."*
//   ⇒ Denetim GEÇİYOR, gösterim YANLIŞ. İkisi ayrı şeydir ve ölçüt yalnız
//     birincisini görüyor.
//   ⇒ İSTENEN: `olaylar*.js`e iki madde (Tunciler'in Dâcû'yu devirmesi ~1400,
//     Keyra hânedanının kurulması 1695). O dosya BENİM DEĞİL; koordinatöre
//     bildirildi. Madde yazılana kadar bu iki gün "teknik olarak kapalı,
//     anlatı olarak açık" sayılmalıdır.
// Zincir:
//   `dacu` (Dâcû, künye 1200-1400) → 1400-01-01 `tunciler` (1400-1695) →
//   1695-01-01 `darfur` (Keyra) → 1874-11-02 Mısır ilhakı (tâbi) →
//   1883-12-23 Mehdî → 1898-09-02 Ali Dinar → 1916-05-23 İngiltere.
// 📌 CANLI VERİDEKİ El-Fâşir · Nyala · Cenîne HÂLÂ `darfur` 1281'den
//   yazıyor — yani aynı hayalet orada duruyor. O dosya BENİM DEĞİL;
//   koordinatöre bildirildi.
// TDV `darfur`: Süleyman Solonc 1695-1715 Keyra hânedanını kurdu; 1874'te
// Sultan İbrâhim Zübeyr Paşa kuvvetlerince öldürüldü; Ali Dinar 6 Kasım
// 1916'da öldürüldü. ⚠️ Atlasın 1916-05-23'ü El-Fâşir'in İNGİLİZ İŞGALİ
// tarihidir (Ali Dinar'ın ölümü değil) ve canlı veride mevcut bir kırılmadır;
// tutarlılık için aynen kullanıldı.
// k:0 ve m: YOK — Dârfûr egemen bir sultanlıktı (mevcut kayıtların gerekçesi).
// ===========================================================================

{ ad:"Kutum",kaynak:"TDV `darfur` — aynı gerekçe (Nyala'ya bkz.)",m:"El-Fâşir", tur:"sehir", lat:14.200, lon:24.660, g:0, k:4,
  s:[{f:"1281-01-01",t:"1400-01-01",d:"dacu"},{f:"1400-01-01",t:"1695-01-01",d:"tunciler"},{f:"1695-01-01",t:"1874-11-02",d:"darfur"},{f:"1883-12-23",t:"1898-09-02",d:"mehdi"},{f:"1898-09-02",t:"1916-05-23",d:"darfur"},{f:"1916-05-23",t:"1923-10-29",d:"ingiltere"}],
  d:[], v:[{f:"1874-11-02",t:"1883-12-23",k:"Mısır (Kavalalı)"}] },

{ ad:"Kebkâbiye",kaynak:"TDV `darfur` — aynı gerekçe",m:"El-Fâşir", tur:"sehir", lat:13.650, lon:24.083, g:0, k:4,
  s:[{f:"1281-01-01",t:"1400-01-01",d:"dacu"},{f:"1400-01-01",t:"1695-01-01",d:"tunciler"},{f:"1695-01-01",t:"1874-11-02",d:"darfur"},{f:"1883-12-23",t:"1898-09-02",d:"mehdi"},{f:"1898-09-02",t:"1916-05-23",d:"darfur"},{f:"1916-05-23",t:"1923-10-29",d:"ingiltere"}],
  d:[], v:[{f:"1874-11-02",t:"1883-12-23",k:"Mısır (Kavalalı)"}] },

// TDV `darfur`: Cebel Merre, 3.071 m ile bölgenin en yüksek noktası ve
// Keyra hânedanının çekirdek yurdu.
{ ad:"Cebel Merre", tur:"bolge", lat:12.950, lon:24.270, g:0, k:0,
  s:[{f:"1281-01-01",t:"1400-01-01",d:"dacu"},{f:"1400-01-01",t:"1695-01-01",d:"tunciler"},{f:"1695-01-01",t:"1874-11-02",d:"darfur"},{f:"1883-12-23",t:"1898-09-02",d:"mehdi"},{f:"1898-09-02",t:"1916-05-23",d:"darfur"},{f:"1916-05-23",t:"1923-10-29",d:"ingiltere"}],
  d:[], v:[{f:"1874-11-02",t:"1883-12-23",k:"Mısır (Kavalalı)"}] },

{ ad:"Zâlincî",kaynak:"TDV `darfur` — aynı gerekçe",m:"El-Fâşir", tur:"sehir", lat:12.905, lon:23.483, g:0, k:4,
  s:[{f:"1281-01-01",t:"1400-01-01",d:"dacu"},{f:"1400-01-01",t:"1695-01-01",d:"tunciler"},{f:"1695-01-01",t:"1874-11-02",d:"darfur"},{f:"1883-12-23",t:"1898-09-02",d:"mehdi"},{f:"1898-09-02",t:"1916-05-23",d:"darfur"},{f:"1916-05-23",t:"1923-10-29",d:"ingiltere"}],
  d:[], v:[{f:"1874-11-02",t:"1883-12-23",k:"Mısır (Kavalalı)"}] },

{ ad:"Ed-Da'în",kaynak:"TDV `darfur` — aynı gerekçe",m:"El-Fâşir", tur:"sehir", lat:11.462, lon:26.128, g:0, k:4,
  s:[{f:"1281-01-01",t:"1400-01-01",d:"dacu"},{f:"1400-01-01",t:"1695-01-01",d:"tunciler"},{f:"1695-01-01",t:"1874-11-02",d:"darfur"},{f:"1883-12-23",t:"1898-09-02",d:"mehdi"},{f:"1898-09-02",t:"1916-05-23",d:"darfur"},{f:"1916-05-23",t:"1923-10-29",d:"ingiltere"}],
  d:[], v:[{f:"1874-11-02",t:"1883-12-23",k:"Mısır (Kavalalı)"}] },

{ ad:"Burâm",kaynak:"TDV `darfur` — aynı gerekçe",m:"El-Fâşir", tur:"sehir", lat:10.833, lon:25.167, g:0, k:4,
  s:[{f:"1281-01-01",t:"1400-01-01",d:"dacu"},{f:"1400-01-01",t:"1695-01-01",d:"tunciler"},{f:"1695-01-01",t:"1874-11-02",d:"darfur"},{f:"1883-12-23",t:"1898-09-02",d:"mehdi"},{f:"1898-09-02",t:"1916-05-23",d:"darfur"},{f:"1916-05-23",t:"1923-10-29",d:"ingiltere"}],
  d:[], v:[{f:"1874-11-02",t:"1883-12-23",k:"Mısır (Kavalalı)"}] },

{ ad:"Ümmü Keddâde",kaynak:"TDV `darfur` — aynı gerekçe",m:"El-Fâşir", tur:"sehir", lat:13.600, lon:26.690, g:0, k:4,
  s:[{f:"1281-01-01",t:"1400-01-01",d:"dacu"},{f:"1400-01-01",t:"1695-01-01",d:"tunciler"},{f:"1695-01-01",t:"1874-11-02",d:"darfur"},{f:"1883-12-23",t:"1898-09-02",d:"mehdi"},{f:"1898-09-02",t:"1916-05-23",d:"darfur"},{f:"1916-05-23",t:"1923-10-29",d:"ingiltere"}],
  d:[], v:[{f:"1874-11-02",t:"1883-12-23",k:"Mısır (Kavalalı)"}] },

// Dârfûr'un kuzeybatı ucu; Vaday Sultanlığı ile sınır.
// ⚠️ `vaday` kimliği ne renkli ne künyeli — Cenîne kaydının yorumu da bunu
//   söylüyor. Sınırın öbür yakası bu yüzden hâlâ boyasız; §3.5.1'in
//   "öbür ucun rengi yoksa tek uçlu kalır" istisnası.
// 🔴 İKİ KEZ DÜZELTİLDİ ve ikincisi ders oldu. Ham koordinat (15,100/22,283)
// Natural Earth'te ÇAD tarafına düşüyordu; 22,470'e çekildi — ÖLÇÜLDÜ, HÂLÂ
// ÇAD'DI. Sınır orada 23,0°D'ye kadar batıya sarkıyor. 23,000'e alındı ve
// üçüncü kez ölçüldü: Sudan.
// 📌 Ders: "biraz doğuya kaydırdım, artık Sudan'dadır" bir TAHMİNDİR.
//   Dârfûr zinciri taşıyan bir noktanın Çad'da durması §3.5.1'in ta
//   kendisidir (yanlış devletin toprağını boyamak) ve tahminle kapatılamaz.
{ ad:"Tîne (Dârfûr)",kaynak:"TDV `darfur` — aynı gerekçe",m:"El-Fâşir", tur:"sehir", lat:15.060, lon:23.000, g:0, k:4,
  s:[{f:"1281-01-01",t:"1400-01-01",d:"dacu"},{f:"1400-01-01",t:"1695-01-01",d:"tunciler"},{f:"1695-01-01",t:"1874-11-02",d:"darfur"},{f:"1883-12-23",t:"1898-09-02",d:"mehdi"},{f:"1898-09-02",t:"1916-05-23",d:"darfur"},{f:"1916-05-23",t:"1923-10-29",d:"ingiltere"}],
  d:[], v:[{f:"1874-11-02",t:"1883-12-23",k:"Mısır (Kavalalı)"}] },

// ===========================================================================
// 5) SUDAN — KIZILDENİZ KIYISI (Beca ülkesi)
// ---------------------------------------------------------------------------
// Zincir mevcut Sinkat · Akīk kayıtlarıyla birebir:
//   Memlûk → 1517-04-13 → Habeş (kısa) → 1557-01-01 Osmanlı Habeş Eyaleti →
//   1885-02-05 İngiltere.
// 🔴 CLAUDE.md §3.5.1'in KENDİ VAKASI BURASI: "1517-04-13 Memlük DEVLETİ'nin
//   sonudur, Kızıldeniz kıyısının FETHİ DEĞİLDİR." Mevcut kayıtlar bu dersi
//   uygulayarak 1517→1557 arasını `habesistan` yazmış; yeni noktalar aynı
//   zinciri taşıyor — hatayı tekrarlamamak için tek satır bile değiştirilmedi.
// ===========================================================================

// Nil-Kızıldeniz kervan yolunun Beca düğümü; Sevâkin ile Berber arasında
// 300 km boyunca tek nokta yoktu.
{ ad:"Hayyâ", tur:"sehir", lat:18.317, lon:36.383, g:0, k:4, m:"Sevâkin",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1517-04-13",t:"1557-01-01",d:"habesistan"},{f:"1885-02-05",t:"1923-10-29",d:"ingiltere"}],
  d:[{f:"1557-01-01",t:"1885-02-05"}], v:[] },

// TDV `muhammed-ahmed-el-mehdi` maddesinde adı geçen Trinkitat; Tokar'ın
// iskelesi ve 1884 seferlerinin çıkarma noktası.
// ⚠️ lon 37,750 → 37,700: ham koordinat kara maskesinin içindeydi ama
// ülke poligonlarının HİÇBİRİNE düşmüyordu (kıyı çizgisi uyuşmazlığı).
{ ad:"Trinkitât", tur:"liman", lat:18.683, lon:37.700, g:0, k:4, m:"Sevâkin",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1517-04-13",t:"1557-01-01",d:"habesistan"},{f:"1885-02-05",t:"1923-10-29",d:"ingiltere"}],
  d:[{f:"1557-01-01",t:"1885-02-05"}], v:[] },

// Sevâkin ile Halâib arasındaki 350 km'lik kıyıda tek nokta yoktu.
{ ad:"Muhammed Kol", tur:"liman", lat:20.833, lon:37.150, g:0, k:4, m:"Sevâkin",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1517-04-13",t:"1557-01-01",d:"habesistan"},{f:"1885-02-05",t:"1923-10-29",d:"ingiltere"}],
  d:[{f:"1557-01-01",t:"1885-02-05"}], v:[] },

// Bûr Sûdân 1909'da Sevâkin'in yerine liman olarak kuruldu; öncesinde
// yerleşim YOKTU, o yüzden `kur:` yazıldı. Sahiplik zinciri Kondominyum
// tarihinden başlar — YENİ GÜN İCAT EDİLMEDİ (bkz. dosya başı ilkesi;
// Kesela kaydının 1840 çözümüyle aynı desen).
{ ad:"Bûr Sûdân", tur:"liman", lat:19.617, lon:37.216, g:0, k:3, m:"Sevâkin", kur:"1909-01-01",
  s:[{f:"1909-01-01",t:"1923-10-29",d:"ingiltere"}], d:[], v:[] },

// ===========================================================================
// 6) ERİTRE
// ---------------------------------------------------------------------------
// Zincir mevcut Asmara kaydıyla birebir: Habeşistan → 1889-01-01 İtalya.
// TDV `etiyopya`: Uccialli Antlaşması 2 Mayıs 1889; İtalya Masavva'yı
// 5 Şubat 1885'te işgal etmişti; antlaşma 26 Ekim 1896'da feshedildi.
// ⚠️ DEBÂRVE'nin OSMANLI DÖNEMİ YAZILAMADI. Özdemir Paşa 1557'de Debârve'yi
//   aldı ve Habeş Eyaleti'nin iç merkezi yaptı; şehir XVI. yy sonunda
//   kaybedildi. KAYIP TARİHİ canlı veride bir kırılma DEĞİL, yazmak Değişmez
//   2'ye borç açardı (bu dosyanın sıfır-borç ilkesi). Nokta Asmara zinciriyle
//   yazıldı ve eksiklik KOORDİNATÖRE BİLDİRİLDİ — kronoloji maddesi
//   yazıldığında düzeltilmelidir.
// ===========================================================================

{ ad:"Ağordat", tur:"sehir", lat:15.549, lon:37.889, g:0, k:3,
  s:[{f:"1281-01-01",t:"1889-01-01",d:"habesistan"},{f:"1889-01-01",t:"1923-10-29",d:"italya"}], d:[] },

{ ad:"Barentu", tur:"sehir", lat:15.106, lon:37.590, g:0, k:3,
  s:[{f:"1281-01-01",t:"1889-01-01",d:"habesistan"},{f:"1889-01-01",t:"1923-10-29",d:"italya"}], d:[] },

{ ad:"Nakfa", tur:"sehir", lat:16.667, lon:38.475, g:0, k:3,
  s:[{f:"1281-01-01",t:"1889-01-01",d:"habesistan"},{f:"1889-01-01",t:"1923-10-29",d:"italya"}], d:[] },

{ ad:"Tesseney", tur:"sehir", lat:15.110, lon:36.660, g:0, k:3,
  s:[{f:"1281-01-01",t:"1889-01-01",d:"habesistan"},{f:"1889-01-01",t:"1923-10-29",d:"italya"}], d:[] },

{ ad:"Adi Kayh", tur:"sehir", lat:14.845, lon:39.377, g:0, k:3,
  s:[{f:"1281-01-01",t:"1889-01-01",d:"habesistan"},{f:"1889-01-01",t:"1923-10-29",d:"italya"}], d:[] },

{ ad:"Ğındâ", tur:"sehir", lat:15.500, lon:39.000, g:0, k:3,
  s:[{f:"1281-01-01",t:"1889-01-01",d:"habesistan"},{f:"1889-01-01",t:"1923-10-29",d:"italya"}], d:[] },

// ⚠️ Osmanlı dönemi yazılamadı — yukarıdaki bölüm notuna bakınız.
{ ad:"Debârve", tur:"sehir", lat:15.100, lon:38.833, g:0, k:4,
  s:[{f:"1281-01-01",t:"1889-01-01",d:"habesistan"},{f:"1889-01-01",t:"1923-10-29",d:"italya"}], d:[] },

// ===========================================================================
// 7) CİBUTİ
// ---------------------------------------------------------------------------
// Zincir mevcut Tacûra kaydıyla birebir: Adal → 1884-01-01 Fransa.
// TDV `somali`: Zeyla, Berbera ve Tacûra 1883-84'te sömürgeleştirildi.
// Cibuti şehri 1888'de kurulduğu için `kur:` taşır; sahiplik zinciri yine
// mevcut kırılmadan başlar (yeni gün icat edilmedi).
// ===========================================================================

{ ad:"Cibûtî", tur:"liman", lat:11.588, lon:43.145, g:1, k:3, kur:"1888-01-01",
  s:[{f:"1888-01-01",t:"1923-10-29",d:"fransa-cumhuriyet",enklav:true}], d:[] },

// ⚠️ lat/lon 11,967/43,283'ten 11,993/43,278'e alındı (2,9 km kuzey): ham
// koordinat Natural Earth 10m kara maskesinin DIŞINDA kalıyordu ve maske
// dışı nokta HİÇ toprak sahibi olamaz (denetle.py konum denetimi).
{ ad:"Obok", tur:"liman", lat:11.993, lon:43.278, g:0, k:3,
  s:[{f:"1281-01-01",t:"1884-01-01",d:"adal"},{f:"1884-01-01",t:"1923-10-29",d:"fransa-cumhuriyet",enklav:true}], d:[] },

{ ad:"Alî Sabîh", tur:"sehir", lat:11.156, lon:42.712, g:0, k:3,
  s:[{f:"1281-01-01",t:"1884-01-01",d:"adal"},{f:"1884-01-01",t:"1923-10-29",d:"fransa-cumhuriyet",enklav:true}], d:[] },

{ ad:"Dikhil", tur:"sehir", lat:11.104, lon:42.370, g:0, k:3,
  s:[{f:"1281-01-01",t:"1884-01-01",d:"adal"},{f:"1884-01-01",t:"1923-10-29",d:"fransa-cumhuriyet",enklav:true}], d:[] },

// ===========================================================================
// 8) HABEŞİSTAN — kuzey ve orta yayla (Tigre · Begemder · Gocam · Vollo · Şoa)
// ---------------------------------------------------------------------------
// Zincir mevcut Gondar · Adua · Lalibela · Debre Berhan kayıtlarıyla birebir:
// tek dönem, `habesistan` 1281-1923. Bu yaylanın hânedan değişiklikleri
// (Zağve → Süleymânî, Zemene Mesafint) DEVLETİ değiştirmez.
// ===========================================================================

// Semien dağlarının kapısı; Gondar ile Aksum arasındaki 200 km'lik boşluk.
{ ad:"Debârek", tur:"sehir", lat:13.157, lon:37.900, g:0, k:3,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

// Gocam'ın merkezi; Nil kavsi içindeki bütün yayla noktasızdı.
{ ad:"Debre Markos", tur:"sehir", lat:10.350, lon:37.717, g:0, k:3,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Mota", tur:"sehir", lat:11.083, lon:37.867, g:0, k:3,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Bure (Gocam)", tur:"sehir", lat:10.700, lon:37.067, g:0, k:3,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Völdiya", tur:"sehir", lat:11.830, lon:39.600, g:0, k:3,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

// II. Tewodros'un kalesi ve 1868 İngiliz seferinin hedefi.
{ ad:"Mekdelâ", tur:"kale", lat:11.410, lon:39.360, g:0, k:4,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Ambo", tur:"sehir", lat:8.983, lon:37.850, g:0, k:3,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Fiçe", tur:"sehir", lat:9.800, lon:38.733, g:0, k:3,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Avaş", tur:"sehir", lat:8.983, lon:40.167, g:0, k:3,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Bâtî", tur:"sehir", lat:11.192, lon:40.017, g:0, k:3,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Hosaena", tur:"sehir", lat:7.550, lon:37.850, g:0, k:3,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Arba Minç", tur:"sehir", lat:6.033, lon:37.550, g:0, k:3,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

// ===========================================================================
// 9) HABEŞİSTAN — ADAL/HARAR kuşağı (1887-01-06)
// ---------------------------------------------------------------------------
// Zincir mevcut Harar ve Cîcîga kayıtlarıyla birebir: `adal` → 1887-01-06
// `habesistan`. TDV `etiyopya`: Adal Emirliği'nin merkezi 1521'de Harar'a
// taşındı; Ahmed el-Mücâhid'in seferleri 1527-1543.
// Dire Dava 1902'de demiryolu üzerinde kuruldu — `kur:` taşır.
// ===========================================================================

{ ad:"Dire Dava", tur:"sehir", lat:9.593, lon:41.866, g:0, k:3, kur:"1902-01-01",
  s:[{f:"1902-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Dagahbûr", tur:"sehir", lat:8.217, lon:43.567, g:0, k:3,
  s:[{f:"1281-01-01",t:"1887-01-06",d:"adal"},{f:"1887-01-06",t:"1923-10-29",d:"habesistan"}], d:[] },

// 🔴 AVSA SULTANLIĞI — `avsa` kimliği ne renkli ne künyeli, ve UYDURULMADI.
// TDV `etiyopya` açıkça yazıyor: Adal'ın merkezi 1577'de Denâkil bölgesindeki
// AVSA'ya taşındı. Yani Avsa, Adal'ın devamıdır ve `adal` kimliğiyle yazmak
// bir tahmin değil, kaynağın kendi cümlesidir. Sultanlık 1923'ten sonra da
// sürdüğü için tek dönem hâlinde 1923-10-29'a kadar uzatıldı.
{ ad:"Asâyita (Avsa)", tur:"sehir", lat:11.567, lon:41.440, g:0, k:3,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"adal"}], d:[] },

// ===========================================================================
// 10) HABEŞİSTAN — BATI ve GÜNEY (Menelik'in ilhakları)
// ---------------------------------------------------------------------------
// ⚠️ BU BÖLÜMÜN TARİHİ EN ZAYIF HALKASIDIR ve saklanmıyor.
// Menelik'in batı (Vollega, İllûbâbor) ve güney (Arsi, Bâle, Borana,
// Sidamo) ilhaklarının GÜNÜ hiçbir kaynakta bulunamadı; yılları bile
// bölgeden bölgeye değişiyor. TDV `etiyopya` Menelik saltanatını 1889-1913
// diye veriyor ve bölgesel fetihler için tarih VERMİYOR.
// ⇒ mevcut `Yirgalem (Sidamo)` kaydının çözümü aynen izlendi: doğrulanmış
//   komşu tarih olan 1897-01-01 (Kaffa) kullanıldı. Bu bir YUVARLAMA DEĞİL,
//   AÇIKÇA İŞARETLENMİŞ bir yer tutucudur — yerlesimler_afrika.js §13 aynı
//   kararı aynı gerekçeyle yazmıştı.
// 🔴 Öncesi için `habesistan` YAZILMADI. Bu bölge 1880'lere kadar Habeş
//   İmparatorluğu'na ait DEĞİLDİ (mevcut dosyanın §13 notu); `habesistan`
//   yazmak §3.5.1'in TERS YÖNÜ olurdu. Oromo/Gibe krallıklarının
//   (Leka Nekemte · Limmu-Ennarya · Guma · Gera) kimliği YOK ⇒ noktalar
//   1897 öncesinde KASTEN SAHİPSİZ ve `kasitli_bosluk` ile işaretli.
// ===========================================================================

{ ad:"Nekemte", tur:"sehir", lat:9.088, lon:36.550, g:0, k:0,
  kasitli_bosluk:true,bos:"kabile", neden:"Leka Nekemte Oromo krallığı — kimliği yok; habesistan yazmak §3.5.1 ters yönü olurdu",
  s:[{f:"1897-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Gimbî", tur:"sehir", lat:9.170, lon:35.833, g:0, k:0,
  kasitli_bosluk:true,bos:"kabile", neden:"Vollega Oromo krallıkları — kimlik yok",
  s:[{f:"1897-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Dembîdollo", tur:"sehir", lat:8.533, lon:34.800, g:0, k:0,
  kasitli_bosluk:true,bos:"kabile", neden:"Sayo/Vollega Oromo krallığı — kimlik yok",
  s:[{f:"1897-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Gore", tur:"sehir", lat:8.150, lon:35.533, g:0, k:0,
  kasitli_bosluk:true,bos:"kabile", neden:"İllûbâbor Oromo krallıkları — kimlik yok",
  s:[{f:"1897-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Asella", tur:"sehir", lat:7.950, lon:39.133, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Arsi Oromo — devlet teşkilâtı ve kimlik yok",
  s:[{f:"1897-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Goba", tur:"sehir", lat:7.010, lon:39.983, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Bâle — Adal sonrası devletsiz kuşak, kimlik yok",
  s:[{f:"1897-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Ginir", tur:"sehir", lat:7.140, lon:40.708, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Bâle — Adal sonrası devletsiz kuşak, kimlik yok",
  s:[{f:"1897-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Ağere Maryam", tur:"sehir", lat:5.633, lon:38.233, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Guci/Sidamo kuşağı — kimlik yok",
  s:[{f:"1897-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Yabelo", tur:"sehir", lat:4.883, lon:38.208, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Borana Oromo — devlet teşkilâtı ve kimlik yok",
  s:[{f:"1897-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Mega", tur:"sehir", lat:4.050, lon:38.300, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Borana Oromo — kimlik yok",
  s:[{f:"1897-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Moyale", tur:"sehir", lat:3.533, lon:39.050, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Borana Oromo — kimlik yok; güneyi HALKA 6-7 (Kenya), kasten noktasız",
  s:[{f:"1897-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

// Gambela 1907'de Mavi Nil ticaretinin iskelesi olarak kuruldu.
{ ad:"Gambela", tur:"liman", lat:8.250, lon:34.588, g:0, k:3, kur:"1907-01-01",
  s:[{f:"1907-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

// ===========================================================================
// 11) OGADEN — §3.5.1'in İKİ UÇLU ölçümü
// ---------------------------------------------------------------------------
// 🔴 Bugün Ogaden'de TEK nokta var ve o KASTEN SAHİPSİZ bir dolgu
//   ("Ogaden", 7.2/44.0). Yani 350.000 km²lik kuşak, en yakın peteğe
//   emiliyor — kuzeyde Cîcîga (1887'den `habesistan`), doğuda Somali
//   sultanlıkları. Hangi yöne hata verdiği KOMŞUNUN KİMLİĞİNE bağlı;
//   §3.5.1'in tam da tarif ettiği durum.
// Zincir: `adal` → 1577-01-01 `somali` (mevcut Berbera/Hafun kaydıyla aynı
//   gün) → 1897-01-01 `habesistan`.
// ⚠️ 1897 SEÇİMİNİN GEREKÇESİ: İngiltere ile Habeşistan arasındaki sınır
//   antlaşması 1897'de imzalandı ve Ogaden'i Habeşistan'a bıraktı; GÜNÜ
//   doğrulanamadı (`ogaden` slug'ı TDV'de ÖLÜ — ölçüldü, 302). CLAUDE.md §4
//   gereği yıl biliniyor gün bilinmiyor ⇒ YYYY-01-01, ve seçilen gün canlı
//   veride zaten kırılma olan 1897-01-01'dir.
// ===========================================================================

{ ad:"Kebrî Dehar", tur:"sehir", lat:6.733, lon:44.267, g:0, k:3,
  s:[{f:"1281-01-01",t:"1577-01-01",d:"adal"},{f:"1577-01-01",t:"1897-01-01",d:"somali"},{f:"1897-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Verder", tur:"sehir", lat:6.960, lon:45.350, g:0, k:3,
  s:[{f:"1281-01-01",t:"1577-01-01",d:"adal"},{f:"1577-01-01",t:"1897-01-01",d:"somali"},{f:"1897-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Gode", tur:"sehir", lat:5.950, lon:43.550, g:0, k:3,
  s:[{f:"1281-01-01",t:"1577-01-01",d:"adal"},{f:"1577-01-01",t:"1897-01-01",d:"somali"},{f:"1897-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Kelâfo", tur:"sehir", lat:5.600, lon:44.200, g:0, k:3,
  s:[{f:"1281-01-01",t:"1577-01-01",d:"adal"},{f:"1577-01-01",t:"1897-01-01",d:"somali"},{f:"1897-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Dolo Odo", tur:"sehir", lat:4.167, lon:42.050, g:0, k:3,
  s:[{f:"1281-01-01",t:"1577-01-01",d:"adal"},{f:"1577-01-01",t:"1897-01-01",d:"somali"},{f:"1897-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

// ===========================================================================
// 12) SOMALİLAND — İngiliz himayesi (1884-07-18)
// ---------------------------------------------------------------------------
// Zincir mevcut Berbera · Burao · Hargeysa · Lasanod kayıtlarıyla birebir:
//   `adal` → 1577-01-01 `somali` → 1884-07-18 `ingiltere`.
// TDV `somali`: Zeyla, Berbera ve Tacûra 1883'te sömürgeleştirildi; İngiltere
// bu toprakları 1905'te Aden sömürgesiyle birleştirdi.
// ⚠️ MUHAMMED ABDULLAH HASAN'IN DERVİŞ DEVLETİ (1899-1920) YAZILMADI.
//   TDV `somali` hareketi 1889'dan 1920'deki ölümüne kadar veriyor; Taleh
//   1913'te derviş başkenti oldu. Ayrı bir kimlik (`dervis`) YOK, ve dönem
//   yazmak dört yeni kırılma açardı. Nokta İngiliz zinciriyle yazıldı;
//   eksiklik KOORDİNATÖRE BİLDİRİLDİ.
// ===========================================================================

{ ad:"Şeyh (Somaliland)", tur:"sehir", lat:9.933, lon:45.183, g:0, k:3,
  s:[{f:"1281-01-01",t:"1577-01-01",d:"adal"},{f:"1577-01-01",t:"1884-07-18",d:"somali"},{f:"1884-07-18",t:"1923-10-29",d:"ingiltere"}], d:[] },

{ ad:"Odveyne", tur:"sehir", lat:9.410, lon:45.062, g:0, k:3,
  s:[{f:"1281-01-01",t:"1577-01-01",d:"adal"},{f:"1577-01-01",t:"1884-07-18",d:"somali"},{f:"1884-07-18",t:"1923-10-29",d:"ingiltere"}], d:[] },

{ ad:"Borama", tur:"sehir", lat:9.936, lon:43.183, g:0, k:3,
  s:[{f:"1281-01-01",t:"1577-01-01",d:"adal"},{f:"1577-01-01",t:"1884-07-18",d:"somali"},{f:"1884-07-18",t:"1923-10-29",d:"ingiltere"}], d:[] },

{ ad:"Buhodle", tur:"sehir", lat:8.240, lon:46.320, g:0, k:3,
  s:[{f:"1281-01-01",t:"1577-01-01",d:"adal"},{f:"1577-01-01",t:"1884-07-18",d:"somali"},{f:"1884-07-18",t:"1923-10-29",d:"ingiltere"}], d:[] },

// ⚠️ Derviş Devleti'nin merkezi (1913-1920) — bkz. bölüm notu.
{ ad:"Taleh", tur:"kale", lat:9.150, lon:48.417, g:0, k:4,
  s:[{f:"1281-01-01",t:"1577-01-01",d:"adal"},{f:"1577-01-01",t:"1884-07-18",d:"somali"},{f:"1884-07-18",t:"1923-10-29",d:"ingiltere"}], d:[] },

// ===========================================================================
// 13) SOMALİ — kuzeydoğu (Mecerteyn) ve orta (Hobyo)
// ---------------------------------------------------------------------------
// Zincir mevcut Alula · Hafun · Bender Kāsım kayıtlarıyla birebir:
//   `adal` → 1577-01-01 `somali` (Gârove/Ayl/Obbiya'da tek dönem).
// ⚠️ `mecerteyn` ve `hobyo` kimlikleri YOK (ne renk ne künye). TDV `somali`
//   Mecerteyn'in XIX. yy'da bağımsızlaştığını, İtalyan işgalinin 1927'de
//   olduğunu söylüyor — yani atlasın 1923 ufkunda İTALYAN DEĞİL. Mevcut
//   kayıtların `somali` tercihi bu yüzden DOĞRU ve aynen izlendi.
// ===========================================================================

{ ad:"Kandala", tur:"liman", lat:11.470, lon:49.868, g:0, k:3,
  s:[{f:"1281-01-01",t:"1577-01-01",d:"adal"},{f:"1577-01-01",t:"1923-10-29",d:"somali"}], d:[] },

{ ad:"İskuşubân", tur:"sehir", lat:10.283, lon:50.233, g:0, k:3,
  s:[{f:"1281-01-01",t:"1577-01-01",d:"adal"},{f:"1577-01-01",t:"1923-10-29",d:"somali"}], d:[] },

{ ad:"Bender Beyla", tur:"liman", lat:9.494, lon:50.812, g:0, k:3,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"somali"}], d:[] },

// ===========================================================================
// 14) SOMALİ — BENÂDİR ve CÛBÂ (1905-01-01)
// ---------------------------------------------------------------------------
// Zincir mevcut Mogadişu · Merka · Baydoa · Beledveyne kayıtlarıyla birebir:
//   `somali` → 1905-01-01 `italya`.
// TDV `somali`: Benâdir şehirleri (Makdişu, Merka, Berâve) Zengibar'dan
// 2 Mart 1891 anlaşmasıyla İtalyan nüfuzuna geçti; iç bölgeler (Mecerteyn,
// Obbiya) ancak 1927'de işgal edildi. Mevcut kayıtların 1905'i satın alma
// tarihidir ve canlı bir kırılmadır; tutarlılık için aynen kullanıldı.
// ⚠️ KISMÂYÛ'nun İNGİLİZ CÛBÂLAND DÖNEMİ (1895-1925) YAZILMADI. 1895 canlı
//   veride kırılma değil; yazmak Değişmez 2s'ye borç açardı. Nokta `somali`
//   zinciriyle yazıldı. Bu, bilinen ve İŞARETLENMİŞ bir eksikliktir —
//   KOORDİNATÖRE BİLDİRİLDİ.
// ===========================================================================

// Benâdir'in üç şehrinden üçüncüsü; TDV `somali` maddesinde adı geçer.
{ ad:"Berâve", tur:"liman", lat:1.106, lon:44.031, g:0, k:3,
  s:[{f:"1281-01-01",t:"1905-01-01",d:"somali"},{f:"1905-01-01",t:"1923-10-29",d:"italya"}], d:[] },

{ ad:"Afgoye", tur:"sehir", lat:2.138, lon:45.120, g:0, k:3,
  s:[{f:"1281-01-01",t:"1905-01-01",d:"somali"},{f:"1905-01-01",t:"1923-10-29",d:"italya"}], d:[] },

{ ad:"Bulo Burte", tur:"sehir", lat:3.848, lon:45.567, g:0, k:3,
  s:[{f:"1281-01-01",t:"1905-01-01",d:"somali"},{f:"1905-01-01",t:"1923-10-29",d:"italya"}], d:[] },

{ ad:"Bardere", tur:"sehir", lat:2.348, lon:42.278, g:0, k:3,
  s:[{f:"1281-01-01",t:"1905-01-01",d:"somali"},{f:"1905-01-01",t:"1923-10-29",d:"italya"}], d:[] },

{ ad:"Luuk", tur:"sehir", lat:3.802, lon:42.545, g:0, k:3,
  s:[{f:"1281-01-01",t:"1905-01-01",d:"somali"},{f:"1905-01-01",t:"1923-10-29",d:"italya"}], d:[] },

{ ad:"Garbahârey", tur:"sehir", lat:3.328, lon:42.220, g:0, k:3,
  s:[{f:"1281-01-01",t:"1905-01-01",d:"somali"},{f:"1905-01-01",t:"1923-10-29",d:"italya"}], d:[] },

{ ad:"Cilib", tur:"sehir", lat:0.489, lon:42.797, g:0, k:3,
  s:[{f:"1281-01-01",t:"1905-01-01",d:"somali"},{f:"1905-01-01",t:"1923-10-29",d:"italya"}], d:[] },

// ⚠️ Cûbâland dönemi yazılamadı — bkz. bölüm notu.
{ ad:"Kısmâyû", tur:"liman", lat:-0.358, lon:42.545, g:0, k:0,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"somali"}], d:[] },

// ===========================================================================
// 15) UMMAN — ZUFÂR ve VÜSTÂ kıyısı
// ---------------------------------------------------------------------------
// Zincir mevcut Salala · Masira kayıtlarıyla birebir:
//   `nebhani` → 1515-04-01 `umman`.
// 🔴 UMMAN'IN KUTU İÇİ YOĞUNLUĞU 9,1 — kutunun EN SEYREK ülkesi, ve sebebi
//   ölçüldü: Umman'ın çekirdeği (Maskat 23,6°K · Nizvâ 22,9 · Suhâr 24,3 ·
//   Sûr 22,6) kutunun KUZEYİNDE ve ORASI ZATEN DOLU. Kutu içinde kalan
//   Zufâr + Vüstâ kıyısında ise Salala ile Masira arasında 460 km boyunca
//   TEK NOKTA yoktu.
// ⚠️ `zufar` slug'ı TDV'de ÖLÜ (302, ölçüldü). Aranmadan "yok" denmedi;
//   `umman` ve `nebhaniler` maddeleri üzerinden gidildi.
// ===========================================================================

{ ad:"Mirbât", tur:"liman", lat:16.993, lon:54.700, g:0, k:3,
  s:[{f:"1281-01-01",t:"1515-04-01",d:"nebhani"},{f:"1515-04-01",t:"1923-10-29",d:"umman"}], d:[] },

// ⚠️ 17,037/54,400 → 17,057/54,404 (2,2 km iç): maske dışındaydı.
{ ad:"Tâka (Zufâr)", tur:"liman", lat:17.057, lon:54.404, g:0, k:3,
  s:[{f:"1281-01-01",t:"1515-04-01",d:"nebhani"},{f:"1515-04-01",t:"1923-10-29",d:"umman"}], d:[] },

{ ad:"Hâsik", tur:"liman", lat:17.383, lon:55.283, g:0, k:3,
  s:[{f:"1281-01-01",t:"1515-04-01",d:"nebhani"},{f:"1515-04-01",t:"1923-10-29",d:"umman"}], d:[] },

// ⚠️ 17,900/55,983 → 17,946/55,969 (5,3 km iç): maske dışındaydı.
{ ad:"Şüveymiye", tur:"liman", lat:17.946, lon:55.969, g:0, k:3,
  s:[{f:"1281-01-01",t:"1515-04-01",d:"nebhani"},{f:"1515-04-01",t:"1923-10-29",d:"umman"}], d:[] },

{ ad:"Dukm", tur:"liman", lat:19.660, lon:57.707, g:0, k:3,
  s:[{f:"1281-01-01",t:"1515-04-01",d:"nebhani"},{f:"1515-04-01",t:"1923-10-29",d:"umman"}], d:[] },

{ ad:"Muhût", tur:"sehir", lat:20.700, lon:58.100, g:0, k:3,
  s:[{f:"1281-01-01",t:"1515-04-01",d:"nebhani"},{f:"1515-04-01",t:"1923-10-29",d:"umman"}], d:[] },

{ ad:"Tumreyt", tur:"sehir", lat:17.667, lon:54.024, g:0, k:3,
  s:[{f:"1281-01-01",t:"1515-04-01",d:"nebhani"},{f:"1515-04-01",t:"1923-10-29",d:"umman"}], d:[] },

// Zufâr'ın çöle bakan iç ucu; eski kervan yolu üzerindeki Şisr/Ubâr.
{ ad:"Şisr", tur:"sehir", lat:18.257, lon:53.647, g:0, k:3,
  s:[{f:"1281-01-01",t:"1515-04-01",d:"nebhani"},{f:"1515-04-01",t:"1923-10-29",d:"umman"}], d:[] },

// 🔴 KASTEN SAHİPSİZ DOLGU. Rub'ul Hâlî'nin güneybatı köşesi hiçbir devletin
// fiilî idaresinde değildi; mevcut "Rub'ul Hâlî doğusu" ve "Hadramut"
// dolgularıyla aynı sınıf. Boş bırakılmazsa Zufâr ile Necid petekleri
// çölün ortasında buluşup 300.000 km²lik bir toprağı sahiplendirir.
// ⚠️ 18,500/51,000 → 18,800/52,300: ilk koordinat YEMEN'e düşüyordu ve
// Yemen bu oturumun bölgesi DEĞİL (halka 1, başka oturumun işi). Umman
// yakasına alındı; ölçüldü.
{ ad:"Rub'ul Hâlî güneybatısı", tur:"bolge", lat:18.800, lon:52.300, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Rub'ul Hâlî — hiçbir devletin fiilî idaresi yoktu; mevcut çöl dolgularıyla aynı sınıf",
  s:[], d:[], v:[] },

// ===========================================================================
// 16) GÜNEY SUDAN — kutunun en büyük tek deliği (631.271 km² / SIFIR nokta)
// ---------------------------------------------------------------------------
// 🔴 KOORDİNATÖRE SORULDU, CEVABI BEKLENMEDEN YAZILDI ve gerekçesi şudur:
//   1820-21 Mısır (Osmanlı) fethinden 1885 Mehdî'ye, oradan 1899 İngiliz-Mısır
//   Kondominyumu'na kadar "Sudan" TEK ÜLKEDİR; Ekvatorya bir Osmanlı-Mısır
//   eyaletiydi. Yani burası ayrı bir ülke değil, HALKA 2'nin kendisidir.
//   Cevap "hayır" gelirse bu bölüm tek blok hâlinde silinebilsin diye
//   AYRI ve EN SONA yazıldı.
//
// ⚠️⚠️ EN BÜYÜK KISITIM BURADA ve açıkça yazıyorum:
//   MISIR EKVATORYA ve BAHRÜLGAZÂL DÖNEMLERİ (yak. 1867-1885) YAZILAMADI.
//   Sebebi tarih bilgisizliği DEĞİL — `v:` dönemi Değişmez 2'ye TABİDİR
//   (kırılma sayılır) ve Fâşoda karakolu (1867), Ekvatorya eyaleti (1870),
//   Bahrülgazâl ilhakı (1873) canlı veride KIRILMA DEĞİL. Yazsaydım
//   Değişmez 2 tavanı 0'dan çıkardı ve maddeyi yazacak dosya (`olaylar*.js`)
//   BENİM DEĞİL. ⇒ Kronoloji maddeleri yazıldıktan sonra bu bölüm
//   güncellenmelidir. Tarihler koordinatöre iletildi.
//
// 🔴 `silluk` (Şilluk Krallığı) ve `zende` (Azande) kimlikleri YOK — ne renk
//   ne künye. Fâşoda gerçek bir KRALLIĞIN başkentiydi; `funj` ya da
//   `habesistan` yazmak uydurma olurdu. Bu yüzden Kondominyum öncesi
//   KASTEN SAHİPSİZ.
// 📌 Nil koridorunun üç noktası (Renk · Fâşoda · Malakal) Mehdî Devleti'nin
//   fiilen tuttuğu Şilluk kuşağındadır — TDV `muhammed-ahmed-el-mehdi`
//   "Fâşûda"yı sayıyor. Onlarda `mehdi` dönemi YAZILDI ve günü canlı
//   kırılma olan 1885-01-26'dır. Güneydeki noktalarda Mehdî hâkimiyeti
//   YOKTU, yazılmadı.
//
// ⚠️ BEKLENEN_SAHIPSIZ ETKİSİ (ÖLÇÜLDÜ, tahmin değil): bu bölüm 19,
//   §10 (Habeşistan batı-güney) 11, §15 (Rub'ul Hâlî) 1 nokta =
//   TOPLAM 31 yeni KASTEN SAHİPSİZ nokta, 31'i de `kasitli_bosluk:true`
//   ve `neden:` taşıyor (işaretsiz boşluk: 0).
//   `arac/denetle.py`nin BEKLENEN_SAHIPSIZ sabiti 114 → 145 olmalı.
//   O dosya BENİM DEĞİL; koordinatöre sayısıyla bildirildi.
// ===========================================================================

// ── Nil koridoru: Şilluk kuşağı, Mehdî hâkimiyeti VARDI ────────────────
{ ad:"Er-Renk", tur:"sehir", lat:11.750, lon:32.783, g:0, k:0,
  kasitli_bosluk:true,bos:"kabile", neden:"Şilluk Krallığı — `silluk` kimliği yok; Mısır Ekvatorya dönemi Değişmez 2 borcu doğuracağı için yazılamadı",
  s:[{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}], d:[], v:[] },

// Şilluk Krallığı'nın başkenti; 1898 Fâşoda buhranının yeri.
{ ad:"Fâşoda", tur:"sehir", lat:9.892, lon:32.117, g:1, k:0,
  kasitli_bosluk:true,bos:"kabile", neden:"Şilluk Krallığı'nın başkenti — `silluk` kimliği yok",
  s:[{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}], d:[], v:[] },

{ ad:"Malakal", tur:"sehir", lat:9.533, lon:31.661, g:0, k:0,
  kasitli_bosluk:true,bos:"kabile", neden:"Şilluk kuşağı — `silluk` kimliği yok",
  s:[{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}], d:[], v:[] },

// ── Yukarı Nil, Bahrülgazâl ve Ekvatorya: Mehdî hâkimiyeti YOKTU ───────
{ ad:"Nâsir", tur:"sehir", lat:8.608, lon:33.067, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Nuer ülkesi — devlet teşkilâtı yok; Mısır ve Mehdî idaresi buraya ulaşmadı",
  s:[{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}], d:[], v:[] },

{ ad:"Akobo", tur:"sehir", lat:7.788, lon:33.033, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Anuak/Nuer ülkesi — devlet teşkilâtı ve kimlik yok",
  s:[{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}], d:[], v:[] },

{ ad:"Bentiu", tur:"sehir", lat:9.242, lon:29.803, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Nuer ülkesi — devlet teşkilâtı ve kimlik yok",
  s:[{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}], d:[], v:[] },

{ ad:"Meşra er-Rek", tur:"liman", lat:8.417, lon:29.283, g:0, k:0,
  kasitli_bosluk:true,bos:"kabile", neden:"Bahrülgazâl iskelesi — Nuer/Dinka ülkesi, devlet teşkilâtı yok. ⚠️ Mısır ilhakı (1873) Değişmez 2 borcu doğuracağı için DÖNEM YAZILAMADI — bu not korunmalı. 🔴 27 Ağu 2026: cins `hata` idi ve `hata`, motorun DOLDURABİLDİĞİ TEK kova (uret_petek.py:3564 DOLDURULABILIR_BOS). Kayıt bir hata değil, bir PARK YERİ olarak `hata`ya konmuştu ve petek komşusuna katılıp 21.111 km² DOĞRUDAN OSMANLI boyanıyordu (Emre 0036/H-0001, G1). Komşuları Bentiu ve Vav zaten `devletsiz` olduğu için korunuyordu; bu kayıt korunmuyordu.",
  s:[{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}], d:[], v:[] },

{ ad:"Vav", tur:"sehir", lat:7.702, lon:27.990, g:1, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Bahrülgazâl merkezi — Dinka/Cur ülkesi, kimlik yok",
  s:[{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}], d:[], v:[] },

{ ad:"Deym Zübeyr", tur:"kale", lat:7.700, lon:26.217, g:0, k:0,
  kasitli_bosluk:true,bos:"hata", neden:"Zübeyr Paşa'nın Bahrülgazâl karargâhı — Mısır dönemi yazılamadı (bkz. bölüm notu)",
  s:[{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}], d:[], v:[] },

{ ad:"Rumbek", tur:"sehir", lat:6.800, lon:29.678, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Dinka ülkesi — devlet teşkilâtı ve kimlik yok",
  s:[{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}], d:[], v:[] },

{ ad:"Tonc", tur:"sehir", lat:6.950, lon:28.683, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Dinka ülkesi — devlet teşkilâtı ve kimlik yok",
  s:[{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}], d:[], v:[] },

{ ad:"Şembe", tur:"liman", lat:7.156, lon:30.553, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Nil iskelesi — Dinka ülkesi, kimlik yok",
  s:[{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}], d:[], v:[] },

{ ad:"Bor", tur:"sehir", lat:6.208, lon:31.558, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Dinka ülkesi — devlet teşkilâtı ve kimlik yok",
  s:[{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}], d:[], v:[] },

// Mısır Ekvatorya eyaletinin karargâhı; Cûbâ (1922) daha sonra bunun
// 6 km güneyinde kuruldu, o yüzden Cûbâ AYRI nokta olarak yazılmadı.
{ ad:"Gondokoro", tur:"sehir", lat:4.900, lon:31.650, g:1, k:0,
  kasitli_bosluk:true,bos:"hata", neden:"Ekvatorya karargâhı — Mısır dönemi (1870-1885) Değişmez 2 borcu doğuracağı için yazılamadı",
  s:[{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}], d:[], v:[] },

{ ad:"Nimule", tur:"sehir", lat:3.600, lon:32.058, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Ekvatorya güney ucu — kimlik yok; güneyi HALKA 6-7 (Uganda), kasten noktasız",
  s:[{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}], d:[], v:[] },

{ ad:"Torit", tur:"sehir", lat:4.412, lon:32.570, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Latuka ülkesi — devlet teşkilâtı ve kimlik yok",
  s:[{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}], d:[], v:[] },

{ ad:"Kapoeta", tur:"sehir", lat:4.767, lon:33.591, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Toposa ülkesi — devlet teşkilâtı ve kimlik yok",
  s:[{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}], d:[], v:[] },

{ ad:"Yambio", tur:"sehir", lat:4.572, lon:28.395, g:0, k:0,
  kasitli_bosluk:true,bos:"kabile", neden:"Azande Krallığı — `zende` kimliği yok; en yakın komşuyla boyamak §3.5.1 ihlali olurdu",
  s:[{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}], d:[], v:[] },

{ ad:"Tembura", tur:"sehir", lat:5.610, lon:27.470, g:0, k:0,
  kasitli_bosluk:true,bos:"kabile", neden:"Azande Krallığı — `zende` kimliği yok",
  s:[{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}], d:[], v:[] },

// ###########################################################################
// ###  PARTİ 2 — birinci partiden SONRA yeniden ölçülen boşluklar         ###
// ###########################################################################
// Parti 1 yazıldıktan sonra boşluk haritası TEKRAR koşturuldu (aynı yöntem,
// 0,25° ızgara). Sonuç: ortanca 199 → 114 km, >200 km hücre %49,8 → %28,9.
// 🔴 VE KALAN BOŞLUĞUN TAMAMI TEK YERDE TOPLANDI: en boş 70 hücrenin 69'u
//   SUDAN'IN KUZEYBATI ÇÖLÜ (lat 16-21 / lon 24-28), biri Umman Vüstâ'sı.
//   Yani parti 1'den sonra "seyreklik" artık dağınık bir sorun değil,
//   TEK ADI OLAN bir sorun: Libya çölünün Sudan yakası.
// 📌 Bu, `SINIRDA` listesi dersinin (CLAUDE.md §11) tersi bir vaka: liste
//   bir EKRAN değil gerçekten bir KUYRUKTU, tepesi kapatılınca altından
//   yenisi çıkmadı — aynı bölge kaldı.
// ###########################################################################

// ===========================================================================
// 17) SUDAN KUZEYBATI ÇÖLÜ — kasten sahipsiz dolgular
// ---------------------------------------------------------------------------
// 🔴 Bunlar delik DEĞİL, DELİĞİN İLACI — mevcut "Selîme (Nûbe çölü batısı)",
//   "Nûbe çölü", "Darfur", "Kordofan", "Hadramut", "Rub'ul Hâlî doğusu"
//   dolgularıyla AYNI SINIF ve aynı gerekçe (yerlesimler_seyrek.js'in
//   "çöl 7" partisinin kendi notu: "boş kalması DOĞRU olan yerler").
//   Ölçüldü: bu kutuda 483 km'ye kadar boş hücre vardı ve o alan bugün
//   Dongola · Kutum · Selîme peteklerine emiliyor.
// ⚠️ Hepsi `kasitli_bosluk:true` + `neden:` taşır; hiçbiri işaretsiz değil.
// ===========================================================================

// Darb el-Erbaîn kervan yolunun natron kuyusu; Vaday-Mısır yolunun düğümü.
{ ad:"Bîr Natrûn", tur:"bolge", lat:18.200, lon:26.000, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Libya çölü — hiçbir devletin fiilî idaresi yoktu; kervan kuyusu",
  s:[], d:[], v:[] },

{ ad:"Merga vahası", tur:"bolge", lat:19.350, lon:26.300, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Libya çölü — fiilî idare yok",
  s:[], d:[], v:[] },

{ ad:"Lakiye Arbaîn", tur:"bolge", lat:20.050, lon:28.050, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Darb el-Erbaîn kuyusu — fiilî idare yok",
  s:[], d:[], v:[] },

{ ad:"Vâdî Hovâr", tur:"bolge", lat:17.400, lon:24.800, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"kurumuş vadi — fiilî idare yok",
  s:[], d:[], v:[] },

{ ad:"Cebel Ûveynât", tur:"bolge", lat:21.870, lon:25.020, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Mısır-Libya-Sudan üçgeni; fiilî idare yok",
  s:[], d:[], v:[] },

// ⚠️ 20,500/24,500 → 20,000/25,200: ilk koordinat LİBYA'ya düşüyordu.
// 🔴 EMEKLİ — 18 Ağustos 2026, Emre'nin onayıyla (dolgu noktası ölçümü).
//    Kaldırılınca toprak: BOŞ kalır
//    Gerekçe: A1 yarıçap tavanı (uret_petek.py:699) dolgunun işini yapısal
//    olarak yapıyor; bu nokta emilmeyi önlemek için konmuş bir HİLEYDİ ve
//    uret_petek.py:696 zaten emekli edilebileceklerini yazıyordu.
//    Ölçüm: arac/olc_ekleyici.py · scratchpad/olc_dolgu.py
//    ⚠️ SİLİNMEDİ, YORUMLANDI — araştırılmış veri geri alınabilir olmalı.
// { ad:"Sudan kuzeybatı çölü", tur:"bolge", lat:20.000, lon:25.200, g:0, k:0,
//   kasitli_bosluk:true,bos:"devletsiz", neden:"Libya çölü — fiilî idare yok",
//   s:[], d:[], v:[] },

{ ad:"Zolat el-Hammâd", tur:"bolge", lat:20.600, lon:27.100, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Bayûda-Libya çölü geçişi — fiilî idare yok",
  s:[], d:[], v:[] },

{ ad:"Kordofan kuzeybatı çölü", tur:"bolge", lat:16.500, lon:26.500, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Dârfûr ile Kordofan arası kum kuşağı — fiilî idare yok",
  s:[], d:[], v:[] },

// ===========================================================================
// 18) SUDAN — parti 2 yerleşimleri
// ===========================================================================

// Nil'in Ebû Hamed kavsi; A zinciri (1821-01-04).
{ ad:"Şereyk", tur:"sehir", lat:18.750, lon:33.600, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-01-04",d:"funj"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}],
  v:[{f:"1821-01-04",t:"1885-01-26",k:"Mısır (Kavalalı)"}], d:[] },

// TDV `muhammed-ahmed-el-mehdi` maddesinde "Kerari" olarak geçer; Halife
// Abdullah'ın 2 Eylül 1898'de yenildiği yer.
{ ad:"Kerreri", tur:"sehir", lat:15.830, lon:32.480, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-06-14",d:"funj"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}],
  v:[{f:"1821-06-14",t:"1885-01-26",k:"Mısır (Kavalalı)"}], d:[] },

// Cezîre'nin ortası — Mavi Nil ile Beyaz Nil arası (B zinciri).
{ ad:"El-Menâkıl", tur:"sehir", lat:14.200, lon:32.980, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-06-14",d:"funj"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}],
  v:[{f:"1821-06-14",t:"1885-01-26",k:"Mısır (Kavalalı)"}], d:[] },

// Mavi Nil'in Habeş sınırına bakan eyalet merkezi (B zinciri).
{ ad:"Ed-Damazîn", tur:"sehir", lat:11.789, lon:34.359, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-06-14",d:"funj"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}],
  v:[{f:"1821-06-14",t:"1885-01-26",k:"Mısır (Kavalalı)"}], d:[] },

// Kordofan kuzeyi (C zinciri).
{ ad:"Tendelti", tur:"sehir", lat:13.020, lon:31.870, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-08-19",d:"funj"},{f:"1882-09-07",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}],
  v:[{f:"1821-08-19",t:"1882-09-07",k:"Mısır (Kavalalı)"}], d:[] },

{ ad:"Ümmü Bedr", tur:"sehir", lat:14.200, lon:27.900, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-08-19",d:"funj"},{f:"1882-09-07",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}],
  v:[{f:"1821-08-19",t:"1882-09-07",k:"Mısır (Kavalalı)"}], d:[] },

// Kızıldeniz tepeleri, Beca ülkesi (E zinciri).
{ ad:"Derûdeb", tur:"sehir", lat:17.550, lon:36.100, g:0, k:4, m:"Sevâkin",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1517-04-13",t:"1557-01-01",d:"habesistan"},{f:"1885-02-05",t:"1923-10-29",d:"ingiltere"}],
  d:[{f:"1557-01-01",t:"1885-02-05"}], v:[] },

// ── Dârfûr (D zinciri) ─────────────────────────────────────────────────
{ ad:"Mellît",kaynak:"TDV `darfur` — aynı gerekçe",m:"El-Fâşir", tur:"sehir", lat:14.130, lon:25.570, g:0, k:4,
  s:[{f:"1281-01-01",t:"1400-01-01",d:"dacu"},{f:"1400-01-01",t:"1695-01-01",d:"tunciler"},{f:"1695-01-01",t:"1874-11-02",d:"darfur"},{f:"1883-12-23",t:"1898-09-02",d:"mehdi"},{f:"1898-09-02",t:"1916-05-23",d:"darfur"},{f:"1916-05-23",t:"1923-10-29",d:"ingiltere"}],
  d:[], v:[{f:"1874-11-02",t:"1883-12-23",k:"Mısır (Kavalalı)"}] },

{ ad:"Şa'riyye",kaynak:"TDV `darfur` — aynı gerekçe",m:"El-Fâşir", tur:"sehir", lat:12.900, lon:25.420, g:0, k:4,
  s:[{f:"1281-01-01",t:"1400-01-01",d:"dacu"},{f:"1400-01-01",t:"1695-01-01",d:"tunciler"},{f:"1695-01-01",t:"1874-11-02",d:"darfur"},{f:"1883-12-23",t:"1898-09-02",d:"mehdi"},{f:"1898-09-02",t:"1916-05-23",d:"darfur"},{f:"1916-05-23",t:"1923-10-29",d:"ingiltere"}],
  d:[], v:[{f:"1874-11-02",t:"1883-12-23",k:"Mısır (Kavalalı)"}] },

{ ad:"Radom",kaynak:"TDV `darfur` — aynı gerekçe. UYARI: bu Radom POLONYA'DAKİ şehir DEĞİL — koordinat 9,95°K/24,95°D, Güney Sudan/Darfur bölgesi (Radom Millî Parkı). ORHANGAZİ'nin şartnamesindeki 'Radom → Krakov' önerisi bu kaydı Polonya sanıyordu, YANLIŞ olurdu — s:/v: dizisi ötekilerle birebir aynı, Darfur kümesinin 11.'si.",m:"El-Fâşir", tur:"sehir", lat:9.950, lon:24.950, g:0, k:4,
  s:[{f:"1281-01-01",t:"1400-01-01",d:"dacu"},{f:"1400-01-01",t:"1695-01-01",d:"tunciler"},{f:"1695-01-01",t:"1874-11-02",d:"darfur"},{f:"1883-12-23",t:"1898-09-02",d:"mehdi"},{f:"1898-09-02",t:"1916-05-23",d:"darfur"},{f:"1916-05-23",t:"1923-10-29",d:"ingiltere"}],
  d:[], v:[{f:"1874-11-02",t:"1883-12-23",k:"Mısır (Kavalalı)"}] },

// ===========================================================================
// 19) GÜNEY SUDAN — parti 2 (zincir §16 ile birebir)
// ===========================================================================

{ ad:"Aveyl", tur:"sehir", lat:8.767, lon:27.400, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Dinka ülkesi — devlet teşkilâtı ve kimlik yok",
  s:[{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}], d:[], v:[] },

{ ad:"Rağa", tur:"sehir", lat:8.460, lon:25.680, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Feroge/Kresh kuşağı — kimlik yok",
  s:[{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}], d:[], v:[] },

{ ad:"Fangak", tur:"sehir", lat:9.070, lon:30.883, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Nuer ülkesi — devlet teşkilâtı ve kimlik yok",
  s:[{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}], d:[], v:[] },

{ ad:"Ler", tur:"sehir", lat:8.300, lon:30.140, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Nuer ülkesi — devlet teşkilâtı ve kimlik yok",
  s:[{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}], d:[], v:[] },

{ ad:"Pibor", tur:"sehir", lat:6.800, lon:33.133, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Murle ülkesi — devlet teşkilâtı ve kimlik yok",
  s:[{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}], d:[], v:[] },

{ ad:"Maridi", tur:"sehir", lat:4.917, lon:29.467, g:0, k:0,
  kasitli_bosluk:true,bos:"kabile", neden:"Azande/Moru kuşağı — `zende` kimliği yok",
  s:[{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}], d:[], v:[] },

{ ad:"Yei", tur:"sehir", lat:4.090, lon:30.679, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Ekvatorya batı ucu — kimlik yok; batısı Lado kordonu",
  s:[{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}], d:[], v:[] },

// ===========================================================================
// 20) HABEŞİSTAN — parti 2
// ---------------------------------------------------------------------------
// Kuzey/orta yayla noktaları tek dönem (`habesistan` 1281-1923);
// güney/batı noktaları §10'un işaretli 1897-01-01 yer tutucusunu taşır.
// ===========================================================================

{ ad:"Vukro", tur:"sehir", lat:13.790, lon:39.600, g:0, k:3,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Alamata", tur:"sehir", lat:12.420, lon:39.550, g:0, k:3,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Nazret", tur:"sehir", lat:8.540, lon:39.270, g:0, k:3,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Cinka", tur:"sehir", lat:6.783, lon:36.667, g:0, k:3,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

// ── §10 zinciri: 1897-01-01 İŞARETLİ yer tutucu ────────────────────────
{ ad:"Şeşemene", tur:"sehir", lat:7.200, lon:38.600, g:0, k:0,
  kasitli_bosluk:true,bos:"kabile", neden:"Arsi/Sidamo kuşağı — Oromo krallıklarının kimliği yok",
  s:[{f:"1897-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Dilla", tur:"sehir", lat:6.410, lon:38.310, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Guci/Sidamo kuşağı — kimlik yok",
  s:[{f:"1897-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Negele Borana", tur:"sehir", lat:5.330, lon:39.580, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Borana Oromo — devlet teşkilâtı ve kimlik yok",
  s:[{f:"1897-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Bedele", tur:"sehir", lat:8.450, lon:36.350, g:0, k:0,
  kasitli_bosluk:true,bos:"kabile", neden:"İllûbâbor Oromo krallıkları — kimlik yok",
  s:[{f:"1897-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Mizan Teferi", tur:"sehir", lat:6.990, lon:35.580, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Bench/Kaffa güneybatısı — kimlik yok",
  s:[{f:"1897-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

// ⚠️ Beni Şengûl şeyhlikleri XIX. yy'da Sudan (Func/Mısır) yörüngesindeydi;
// Habeş-Sudan sınırı ancak 1902 Gwynn hattıyla çizildi ve bölgeyi
// Habeşistan'a bıraktı. 1902 canlı veride kırılma DEĞİL ⇒ §10'un işaretli
// 1897-01-01 yer tutucusu kullanıldı. YER TUTUCUDUR, hüküm değildir.
{ ad:"Asosa", tur:"sehir", lat:10.070, lon:34.530, g:0, k:0,
  kasitli_bosluk:true,bos:"kabile", neden:"Beni Şengûl şeyhlikleri — kimlik yok; sınır 1902'de çizildi, 1897 YER TUTUCU",
  s:[{f:"1897-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

// ── Ogaden zinciri (§11 ile birebir) ───────────────────────────────────
{ ad:"İmi", tur:"sehir", lat:6.470, lon:42.170, g:0, k:3,
  s:[{f:"1281-01-01",t:"1577-01-01",d:"adal"},{f:"1577-01-01",t:"1897-01-01",d:"somali"},{f:"1897-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Filtu", tur:"sehir", lat:5.130, lon:40.750, g:0, k:3,
  s:[{f:"1281-01-01",t:"1577-01-01",d:"adal"},{f:"1577-01-01",t:"1897-01-01",d:"somali"},{f:"1897-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

// ===========================================================================
// 21) ERİTRE — parti 2
// ===========================================================================

// Antik Adulis limanı; Masavva körfezinin güney ucu.
{ ad:"Zula", tur:"liman", lat:15.283, lon:39.700, g:0, k:3,
  s:[{f:"1281-01-01",t:"1889-01-01",d:"habesistan"},{f:"1889-01-01",t:"1923-10-29",d:"italya"}], d:[] },

{ ad:"Adi Kuala", tur:"sehir", lat:14.680, lon:38.830, g:0, k:3,
  s:[{f:"1281-01-01",t:"1889-01-01",d:"habesistan"},{f:"1889-01-01",t:"1923-10-29",d:"italya"}], d:[] },

// ===========================================================================
// 22) SOMALİ ve SOMALİLAND — parti 2
// ===========================================================================

// ── Somaliland kıyısı (H zinciri) ──────────────────────────────────────
{ ad:"Lâs Hore", tur:"liman", lat:11.158, lon:48.198, g:0, k:3,
  s:[{f:"1281-01-01",t:"1577-01-01",d:"adal"},{f:"1577-01-01",t:"1884-07-18",d:"somali"},{f:"1884-07-18",t:"1923-10-29",d:"ingiltere"}], d:[] },

{ ad:"Mayd", tur:"liman", lat:11.000, lon:47.100, g:0, k:3,
  s:[{f:"1281-01-01",t:"1577-01-01",d:"adal"},{f:"1577-01-01",t:"1884-07-18",d:"somali"},{f:"1884-07-18",t:"1923-10-29",d:"ingiltere"}], d:[] },

{ ad:"Hîs", tur:"liman", lat:10.900, lon:46.900, g:0, k:3,
  s:[{f:"1281-01-01",t:"1577-01-01",d:"adal"},{f:"1577-01-01",t:"1884-07-18",d:"somali"},{f:"1884-07-18",t:"1923-10-29",d:"ingiltere"}], d:[] },

// ── Orta Somali: Hobyo yörüngesi, tek dönem `somali` (§13 gerekçesi) ────
{ ad:"Dusa Mareb", tur:"sehir", lat:5.536, lon:46.386, g:0, k:3,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"somali"}], d:[] },

{ ad:"Ceel Buur", tur:"sehir", lat:4.687, lon:46.618, g:0, k:3,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"somali"}], d:[] },

{ ad:"Ceel Dheere", tur:"liman", lat:3.845, lon:47.163, g:0, k:3,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"somali"}], d:[] },

// ── Benâdir ve iç bölgesi (J zinciri, 1905-01-01) ──────────────────────
{ ad:"Cadale", tur:"liman", lat:2.752, lon:46.310, g:0, k:3,
  s:[{f:"1281-01-01",t:"1905-01-01",d:"somali"},{f:"1905-01-01",t:"1923-10-29",d:"italya"}], d:[] },

{ ad:"Vanlaveyn", tur:"sehir", lat:2.620, lon:44.890, g:0, k:3,
  s:[{f:"1281-01-01",t:"1905-01-01",d:"somali"},{f:"1905-01-01",t:"1923-10-29",d:"italya"}], d:[] },

{ ad:"Diinsoor", tur:"sehir", lat:2.406, lon:42.972, g:0, k:3,
  s:[{f:"1281-01-01",t:"1905-01-01",d:"somali"},{f:"1905-01-01",t:"1923-10-29",d:"italya"}], d:[] },

{ ad:"Hudur", tur:"sehir", lat:4.120, lon:43.890, g:0, k:3,
  s:[{f:"1281-01-01",t:"1905-01-01",d:"somali"},{f:"1905-01-01",t:"1923-10-29",d:"italya"}], d:[] },

{ ad:"Ceel Barde", tur:"sehir", lat:4.570, lon:43.490, g:0, k:3,
  s:[{f:"1281-01-01",t:"1905-01-01",d:"somali"},{f:"1905-01-01",t:"1923-10-29",d:"italya"}], d:[] },

// ⚠️ Kısmâyû ile aynı sınıf: batısı İngiliz Cûbâland'ıydı (1895-1925) ve
// o dönem canlı kırılma olmadığı için YAZILAMADI — bkz. §14 notu.
// ⚠️ lon 40,930 → 41,150: Ceel Vaak sınır üstü bir kasabadır ve ham
// koordinat KENYA'ya düşüyordu — Kenya halka 6-7, dokunmam sıra ihlali.
{ ad:"Ceel Vaak", tur:"sehir", lat:2.800, lon:41.150, g:0, k:3,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"somali"}], d:[] },

// ===========================================================================
// 23) UMMAN — parti 2
// ===========================================================================

// ⚠️ Üçü de kıyı noktası ve ham koordinatları maskenin DIŞINDA kalıyordu;
// en yakın kara noktasına çekildi (7,3 · 3,7 · 2,4 km).
{ ad:"Cezîr (Sevkıra)", tur:"liman", lat:18.161, lon:56.537, g:0, k:3,
  s:[{f:"1281-01-01",t:"1515-04-01",d:"nebhani"},{f:"1515-04-01",t:"1923-10-29",d:"umman"}], d:[] },

{ ad:"Râs Medreke", tur:"liman", lat:19.002, lon:57.792, g:0, k:3,
  s:[{f:"1281-01-01",t:"1515-04-01",d:"nebhani"},{f:"1515-04-01",t:"1923-10-29",d:"umman"}], d:[] },

// Zufâr'ın batı ucu; Mehre/Hadramut sınırı.
{ ad:"Rahbût", tur:"liman", lat:16.762, lon:53.418, g:0, k:3,
  s:[{f:"1281-01-01",t:"1515-04-01",d:"nebhani"},{f:"1515-04-01",t:"1923-10-29",d:"umman"}], d:[] },

// 🔴 KASTEN SAHİPSİZ — Umman'ın iç çölü; §15'teki güneybatı dolgusunun eşi.
{ ad:"Umman iç çölü", tur:"bolge", lat:20.100, lon:55.300, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Rub'ul Hâlî'nin Umman yakası — hiçbir devletin fiilî idaresi yoktu",
  s:[], d:[], v:[] },

// ===========================================================================
// 24) SON DOKUNUŞ — ölçüt kapanana kadar kalan boşluklar
// ---------------------------------------------------------------------------
// Parti 2'den sonra kutu yoğunluğu 24,7 ölçüldü; ölçüt 25. Aradaki fark
// UYDURULMADI, kalan en büyük hücrelere gerçek dolgu/yerleşim konarak
// kapatıldı. Üçü çöl dolgusu (kasten sahipsiz), ikisi yerleşim.
// ===========================================================================

{ ad:"Vâdî el-Milk", tur:"bolge", lat:17.500, lon:28.000, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Dongola-Kordofan arası kurumuş vadi yolu — fiilî idare yok",
  s:[], d:[], v:[] },

// Nil'in iki kavsi arasındaki iç çöl; Merevî-Hartum kervan kestirmesi.
{ ad:"Bayûda çölü", tur:"bolge", lat:17.900, lon:32.000, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Nil kavisleri arası iç çöl — fiilî idare yok",
  s:[], d:[], v:[] },

{ ad:"Atbay çölü", tur:"bolge", lat:19.800, lon:34.800, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Nil ile Kızıldeniz arası Beca çölü — fiilî idare yok",
  s:[], d:[], v:[] },

{ ad:"İncibara", tur:"sehir", lat:10.950, lon:36.930, g:0, k:3,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Ceel Afveyn", tur:"sehir", lat:9.830, lon:47.200, g:0, k:3,
  s:[{f:"1281-01-01",t:"1577-01-01",d:"adal"},{f:"1577-01-01",t:"1884-07-18",d:"somali"},{f:"1884-07-18",t:"1923-10-29",d:"ingiltere"}], d:[] },

];
