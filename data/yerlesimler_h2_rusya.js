// ════════════════════════════════════════════════════════════════════════════
// NOKTA HALKA-2 2 — Avrupa Rusyası + Nogay/Kazak bozkırı
// Şartname: oturumlar/NOKTA-HALKA2.md · kutu: lon 28-60, lat 45-68
// ════════════════════════════════════════════════════════════════════════════
//
// NİÇİN: halka 2 yoğunluğu ölçüldü — kutu ortalaması 17,7 nokta/mn km², ama
// ortalama YANILTIYOR. Batı-güney çeyreği (Kırım-Bucak-Dnyeper, halka 1'in
// kuyruğu) zaten 42,9 ve 31,4; delik iki blok hâlinde KUZEYDE ve DOĞUDA:
//     Kuzey Rusya  (lat 56-68)   8,2   tabanın (50,9) 1/6'sı
//     Volga-Ural   (lon 40-60)  10,0   tabanın 1/5'i
// Bu parti o iki bloğu hedefler; doygun çeyreğe tek nokta eklenmedi.
//
// ─── SAHİPLİK MODELİ — üç karar, üçü de ÖLÇÜLMÜŞ GEREKÇELİ ────────────────
//
// ① 🟢 266 YILLIK HAYALET KAPATILDI — ikinci geçiş, 8 Ağustos 2026.
//    İlk yazımda bütün Rus çekirdeği `rusya` 1281'den yazılmıştı. Bu bilerek
//    yapılmış geçici bir karardı ve dosyanın başında işaretliydi: `devletler.js`te
//    `rusya` f = 1547-01-16 olduğu için atlas **266 yıl erken** boyuyordu.
//    O gün doğru kimlikler (`novgorod` · `pskov` · `tver` · `moskova`) RENKSİZDİ;
//    renksiz kimlik haritada hiç boyanmaz (§3 ④) ⇒ delik açardı, ve delik
//    hayaletten kötüdür. Koordinatör (a)'yı onayladı, sonra dördünü de yazdırdı.
//
//    Kimlikler ölçüldü ve ömürleri BİREBİR ZİNCİRLENİYOR — uydurma gün yok,
//    her kırılma bir künyenin kendi f/t ucu:
//      novgorod 1136-01-01 → 1478-01-15      tver    1246-01-01 → 1485-09-12
//      pskov    1348-01-01 → 1510-01-13      moskova 1325-01-01 → 1547-01-16
//      rusya    1547-01-16 → 1917-03-15      astarhan 1466-01-01 → 1556-01-01
//
//    Uygulanan dört kalıp (62 nokta):
//      Novgorod ardı (28)  novgorod 1281→1478-01-15 · moskova →1547-01-16 · rusya
//      Tver çevresi   (2)  tver     1281→1485-09-12 · moskova →1547-01-16 · rusya
//      Pskov          (1)  novgorod 1281→1348 · pskov →1510-01-13 · moskova · rusya
//      Moskova çekirdeği (22) altinorda 1281→1325-01-01 · moskova →1547-01-16 · rusya
//    + Oreşek ve Hluhiv tek tek (ikisinde de `rusya` 1547 öncesinde başlıyordu).
//
//    ⚠️ 1281-1325 niçin `altinorda`: kuzeydoğu Rus knezlikleri o dönemde Altın
//    Orda'nın yarlık düzeni altındaydı, ve bu ÇEKİRDEĞİN KENDİ kuralıdır —
//    Bryansk 1281→1356, Kursk · Kiev · Poltava 1281→1362 hepsi `altinorda`.
//
//    ÖLÇÜLDÜ: **1547-01-16 öncesinde başlayan `rusya` dönemi: 0.**
//
// ② Kırılma günleri KÜLLİYATTA ZATEN VAR OLANLARDAN seçildi.
//    Sebebi ölçüm: `Değişmez 2s` bugün TAM TAVANDA — 121 AÇIK / tavan 121,
//    sıfır boşluk. Yeni bir kırılma GÜNÜ açan her nokta tavanı deler.
//    Kullanılan sözlük (hepsi külliyatta mevcut kırılma günü):
//      1281-01-01 · altinorda→kazan 1438-01-01 · kazan→rusya 1552-10-02
//      altinorda→rusya (aşağı Volga) 1556-01-01
//      altinorda→nogay 1441-01-01 · nogay→rusya 1644-01-01 / 1663-01-01
//      altinorda→lehistan 1362-01-01 · lehistan→rusya 1503-04-02 / 1654-01-08
//      altinorda→kirim 1441-01-01 · kirim→rusya 1739-09-18
//      altinorda→kirim 1502-03-01 · kirim→don-kazak 1570-01-01
//      don-kazak→rusya 1721-01-01 · isvec→rusya 1721-09-10 · rusya→isvec 1617-02-27
//      Azak kuşağı: 1696-07-19 · 1711-07-21 · 1774-07-21
//    Tek istisna ve BİLEREK: Oreşek'in 1702-10-22'si (aşağıya bak).
//
//    🟢 İKİNCİ GEÇİŞTE eklenen günler — hiçbiri uydurma DEĞİL, hepsi bir
//    künyenin kendi f/t ucu: 1325-01-01 · 1466-01-01 · 1478-01-15 ·
//    1485-09-12 · 1502-03-01 · 1510-01-13 · 1547-01-16.
//    ÖLÇÜLDÜ — bunların yalnız İKİSİ açık kırılma doğurdu (1485-09-12 ·
//    1510-01-13); ötekilerin ±30 gün içinde maddesi VAR ya da KAPSAM DIŞI.
//    ⇒ Bu dosyanın toplam 2s borcu: **3** (Tver · Pskov · Oreşek).
//    Dosya `KUYRUK_DOSYALARI`nda olduğu için tavanı (121) ETKİLEMEZ —
//    ölçüldü: 121 → 121.
//
//    🔴 VE "KÜLLİYATTA VAR" YETMEDİ — HANGİ KOVADA olduğu da soruldu.
//    1500-01-01 önce seçilmişti: Emba ve Üstyurt onu kullanıyor. Ama ikisi de
//    `yerlesimler_asya.js`te, yani KUYRUKTA; 2s sayacı ÇEKİRDEĞİ ölçüyor
//    (denetle.py:1589). ⇒ Çekirdeğe yazılan 1500-01-01 YENİ bir açık kırılma
//    doğurdu, ölçüldü: 121 → 123. Nogay Ordası'nın doğuşu için çekirdeğin
//    kendi günü (1441-01-01 — Penza · Borisoglebsk · Tambov) kullanıldı;
//    tarih de en az onun kadar savunulur. 2s katkısı 2'den 1'e indi.
//    📌 Aynı gün kuyrukta varken çekirdekte YOKTUR.
//
// ③ Sonradan kurulan şehirlerde `kur:` kullanıldı, dönem yine 1281'den yazıldı.
//    Bu da çekirdeğin kuralı (Perm kur:1723 · Saratov kur:1590 · Ufa kur:1574
//    hepsi s: 1281'den başlıyor) ve YAN FAYDASI ölçülü: `kur` bir kırılma
//    DEĞİLDİR, dolayısıyla 45 yeni şehir 2s'ye tek gün bile eklemiyor.
//
// ─── KAYNAK (CLAUDE.md §4) ────────────────────────────────────────────────
// TDV birincil olan Türk-İslâm çekirdeği için sluglar HTTP koduyla sınandı:
//   🟢 200  bulgar · saray--sehir · altin-orda-hanligi · ak-orda-hanligi ·
//           astarhan-hanligi · kazan-hanligi · kasim-hanligi · sibir-hanligi ·
//           nogaylar · baskurt · kalmuklar · kazaklar · ufa · tataristan · hazarlar
//   🔴 302  saray (ÖLÜ DEĞİL — CANLI AMA YANLIŞ MADDE: mimarî saray.
//           Altın Orda başkenti `saray--sehir`. `ordu`/`ordu--sehir` deseninin
//           aynısı, §4 ②'nin üçüncü ölçülmüş vakası.)
//   🔴 302  altin-orda · altinorda · altinordu · ejderhan · astarhan · idil ·
//           itil · ukek · kirim-hanligi · kazak-hanligi · orenburg · vyatka ·
//           perm · novgorod · pskov · moskova · kama · volga · yayik
// Rusya'nın iç tarihi TDV kapsamı dışıdır (§4: "Avrupa'nın iç tarihi için
// standart akademik referans yeterlidir"); kuruluş yılları ve hâkimiyet
// geçişleri standart referansa dayanır, Vikipedi tek dayanak olarak
// KULLANILMADI.
//
// ⚠️ BULUNAMADI (negatif sonuç da sonuçtur — §④):
//   · `ukek` TDV'de madde YOK; Ukek/Uvek yalnız `saray--sehir` ve `bulgar`
//     maddeleri içinde geçiyor. Nokta o iki maddeye dayanıyor.
//   · Beldjamen (Vodyanskoye) için TDV maddesi bulunamadı; Altın Orda şehir
//     ağının arkeolojik kaydına dayanıyor.
//   · Kasım Hanlığı'nın TDV maddesi VAR (`kasim-hanligi`, 200) ama karşılığı
//     olan `kasim` KİMLİĞİ ne renkli ne künyeli ⇒ Kasimov `rusya` yazıldı.
//     KOORDİNATÖRE BİLDİRİLDİ.
// ════════════════════════════════════════════════════════════════════════════

window.YERLESIMLER_H2_RUSYA = [

// ─── A · KUZEY RUSYA — Novgorod ardı, Pomorye, Vyatka, Perm ────────────────
// En seyrek blok (8,2). Bu topraklar hiçbir dönemde Tatar idaresine girmedi;
// Novgorod Cumhuriyeti → Moskova çizgisi kesintisizdir ⇒ tek dönem.
{ ad:"Pskov", tur:"sehir", lat:57.813, lon:28.335, g:0, k:1,kd:[{f:"1348-01-01",t:"1510-01-13",k:1,m:null}],
  s:[{f:"1281-01-01", t:"1348-01-01", d:"novgorod"},
     {f:"1348-01-01", t:"1510-01-13", d:"pskov"},
     {f:"1510-01-13", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1941-07-09",d:"sovyet-rusya"},{f:"1941-07-09",t:"1944-07-23",d:"almanya",kesinlik:{f:"gun",t:"gun"},kaynak:"KRONOLOJI-BALTIK-RUSYA (28 Ekim 2026): Wehrmacht askerî idaresi (sivil devlet yok; haritada işgalci devlet 'almanya' ile boyanır — BEYANLI YAKLAŞIKLIK). Pskov 9 Temmuz 1941'de Almanlarca alındı, 23 Temmuz 1944'te Kızıl Ordu'ca geri alındı (Pskov şehir kronolojisi / prlib.ru, memorialmuseums.org — arama özeti [özet])."},{f:"1944-07-23",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Staraya Russa", tur:"sehir", lat:57.990, lon:31.362, g:2, k:3,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Eski Ladoga", tur:"kale", lat:59.997, lon:32.298, g:2, k:4,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
// Oreşek (Nöteborg/Şlisselburg) — Stolbovo ile İsveç'e, 1702'de geri alındı.
// 🔴 1702-10-22 bu partinin TEK yeni kırılma günü. Bilerek yazıldı: kalenin
// düşüşü Neva ağzını açan olaydır ve St. Petersburg'un 1703 kuruluşunun ön
// şartıdır; 1721 Nystad'a yuvarlamak 19 yıl uydurmak olurdu.
{ ad:"Oreşek (Nöteborg)", tur:"kale", lat:59.953, lon:31.038, g:1, k:4,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16", t:"1617-02-27", d:"rusya"},
     {f:"1617-02-27", t:"1702-10-22", d:"isvec"},
     {f:"1702-10-22",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Tihvin", tur:"sehir", lat:59.645, lon:33.518, g:2, k:3,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Belozersk", tur:"sehir", lat:60.031, lon:37.783, g:1, k:3,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Kirillov", tur:"kale", lat:59.858, lon:38.376, g:2, k:4, kur:"1397-01-01",
  s:[{f:"1397-01-01", t:"1478-01-15", d:"novgorod"},{f:"1478-01-15", t:"1547-01-16", d:"moskova"},{f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Kargopol", tur:"sehir", lat:61.507, lon:38.945, g:1, k:3,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Olonets", tur:"kale", lat:60.977, lon:32.972, g:2, k:4, kur:"1649-01-01",
  s:[{f:"1649-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Petrozavodsk", tur:"sehir", lat:61.789, lon:34.351, g:1, k:3, kur:"1703-09-11",
  s:[{f:"1703-09-11",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
// Solovki — Beyaz Deniz'de manastır-kale; kuzey kıyısının tek tahkim noktası.
{ ad:"Solovki (Solovetsky)", tur:"kale", lat:65.030, lon:35.712, g:1, k:4, kur:"1436-01-01",
  s:[{f:"1436-01-01", t:"1478-01-15", d:"novgorod"},{f:"1478-01-15", t:"1547-01-16", d:"moskova"},{f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Kem", tur:"sehir", lat:64.951, lon:34.594, g:2, k:3,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Onega", tur:"liman", lat:63.907, lon:38.099, g:2, k:3,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Holmogorı", tur:"sehir", lat:64.223, lon:41.653, g:1, k:3,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Pinega", tur:"sehir", lat:64.700, lon:43.392, g:2, k:3,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Şenkursk", tur:"sehir", lat:62.106, lon:42.897, g:2, k:3,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Velsk", tur:"sehir", lat:61.066, lon:42.104, g:2, k:3,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Veliki Ustyug", tur:"sehir", lat:60.762, lon:46.310, g:1, k:3,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Solvıçegodsk", tur:"sehir", lat:61.339, lon:46.917, g:2, k:3,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Yarensk", tur:"sehir", lat:62.166, lon:49.098, g:2, k:3,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Ust-Sısolsk (Sıktıvkar)", tur:"sehir", lat:61.668, lon:50.836, g:2, k:3, kur:"1586-01-01",
  s:[{f:"1586-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Totma", tur:"sehir", lat:59.973, lon:42.759, g:2, k:3,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Hlınov (Vyatka)", tur:"sehir", lat:58.604, lon:49.668, g:1, k:3,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Kotelniç", tur:"sehir", lat:58.302, lon:48.343, g:2, k:3,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Slobodskoy", tur:"sehir", lat:58.733, lon:50.180, g:2, k:3,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Çerdın", tur:"sehir", lat:60.400, lon:56.480, g:1, k:3,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Solikamsk", tur:"sehir", lat:59.649, lon:56.771, g:1, k:3, kur:"1430-01-01",
  s:[{f:"1430-01-01", t:"1478-01-15", d:"novgorod"},{f:"1478-01-15", t:"1547-01-16", d:"moskova"},{f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Kungur", tur:"kale", lat:57.433, lon:56.937, g:2, k:4, kur:"1648-01-01",
  s:[{f:"1648-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },

// ─── B · YUKARI VOLGA — Rostov-Suzdal ve Tver çekirdeği ────────────────────
{ ad:"Kostroma", tur:"sehir", lat:57.758, lon:40.905, g:1, k:3,
  s:[{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Yaroslavl", tur:"sehir", lat:57.626, lon:39.894, g:0, k:3,
  s:[{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Rostov Veliki", tur:"sehir", lat:57.185, lon:39.414, g:1, k:3,
  s:[{f:"1281-01-01",t:"1474-01-01",d:"rostov-knezligi",kesinlik:{t:"yil"},kaynak:"KRONOLOJI-BALTIK-RUSYA (27 Ekim 2026): rostov-knezligi künyesi 1207-1474 (devletler.js: Vladimir bağlısı knezlik; yarısı 1332'de Moskova'ya, kalan yarısı 1474'te III. İvan tarafından satın alınarak katıldı — worldhistory.org 'Ivan III of Russia', Rostov 1474). BEYANLI YAKLAŞIKLIK: 1332'de Moskova'ya geçen yarı ayrı yazılmadı (künye kaynağı bunu yalnız ic_not düzeyinde veriyor, bağımsız akademik doğrulama bulunamadı); Rostov şehri kalan yarıda kabul edildi."},
     {f:"1474-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Uglich", tur:"sehir", lat:57.526, lon:38.320, g:2, k:3,
  s:[{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Galiç (Kostroma)", tur:"sehir", lat:58.383, lon:42.350, g:2, k:3,
  s:[{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Kineşma", tur:"sehir", lat:57.443, lon:42.168, g:2, k:3,
  s:[{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Şuya", tur:"sehir", lat:56.856, lon:41.383, g:2, k:3,
  s:[{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Vetluga", tur:"sehir", lat:57.851, lon:45.782, g:2, k:3,
  s:[{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Tver", tur:"sehir", lat:56.859, lon:35.912, g:0, k:1,
  s:[{f:"1281-01-01", t:"1485-09-12", d:"tver"},
     {f:"1485-09-12", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Torjok", tur:"sehir", lat:57.041, lon:34.960, g:2, k:3,
  s:[{f:"1281-01-01", t:"1485-09-12", d:"tver"},
     {f:"1485-09-12", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Velikiye Luki", tur:"kale", lat:56.336, lon:30.518, g:2, k:4,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Vladimir", tur:"sehir", lat:56.129, lon:40.407, g:0, k:3,
  s:[{f:"1101-01-01",t:"1157-01-01",d:"kiev-rusu",kesinlik:"yil",kaynak:"KRONOLOJI-BALTIK-RUSYA (29 Ekim 2026) BOŞLUK KAPATILDI (Suzdal emsali): Rostov-Suzdal/Çernigov/Murom-Ryazan toprakları 11.-12. yy'da Kiev Rus'u (kiev-rusu künyesi 882-1240) içindeki knezliklerdir; kiev-rusu BOYALAR'da. Yerel knezlik künyesi olmayan dönemler Kiev Rus'una bağlandı (BEYANLI YAKLAŞIKLIK — knezliler Kiev büyük knezine nominal bağlı, fiilen özerk; Internet Encyclopedia of Ukraine 'Chernihiv principality', Britannica 'Kievan Rus' — arama özeti [özet]). Vladimir Rostov-Suzdal toprağında 12. yy'da kuruldu (Treccani/EI 'Vladimir': «Fu fondata nel sec. XII»); 1157'de Andrey Bogolyubski'nin başkenti (vladimir-suzdal künyesi f)."},{f:"1157-01-01",t:"1242-01-01",d:"vladimir-suzdal",kesinlik:{f:"yil"},kaynak:"KRONOLOJI-BALTIK-RUSYA (27 Ekim 2026) BOŞLUK KAPATILDI: eski beyan 'vladimir-suzdal BOYALAR dışı' idi, artık BOYALAR'da. Enciclopedia Italiana (1929-37), Vladimir maddesi (https://www.treccani.it/enciclopedia/vladimir_%28Enciclopedia-Italiana%29/): Vladimir-Suzdal Büyük Knezliği'nin başkenti; vladimir-suzdal künyesi f=1157-01-01 (Andrey Bogolyubski Vladimir'i başkent yaptı). 1101-1157: Rostov-Suzdal dönemi künyesiz kalır. [yalnız yıl teyitli; gün teyitsiz]"},{f:"1242-01-01",t:"1281-01-01",d:"altinorda",kesinlik:"yil",kaynak:"Enciclopedia Italiana (1929-37), Vladimir maddesi (https://www.treccani.it/enciclopedia/vladimir_%28Enciclopedia-Italiana%29/; ham metin ham/da_ei_vladimir.txt; TDV dışı kaynak, elle doğrulama bekler): «Con il 1242 il granducato» ; Enciclopedia Italiana (1929-37), Vladimir maddesi (https://www.treccani.it/enciclopedia/vladimir_%28Enciclopedia-Italiana%29/; ham metin ham/da_ei_vladimir.txt; TDV dışı kaynak, elle doğrulama bekler): «era tributario dei Tatari» || BEYANLI: Vladimir-Suzdal 1242'de Tatar haraçlısı (EI); egemen vasal knezlik, Altın Orda ile aynı varlık değil. 1242 = EI + künye başı. · VERI-MS1-1281"},{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Suzdal", tur:"sehir", lat:56.419, lon:40.449, g:2, k:3,
  s:[{f:"1001-01-01",t:"1157-01-01",d:"kiev-rusu",kesinlik:"yuzyil",kaynak:"KRONOLOJI-BALTIK-RUSYA (27 Ekim 2026) BOŞLUK KAPATILDI: eski beyan 'kiev-rusu, vladimir-suzdal BOYALAR dışı' idi, ikisi de artık BOYALAR'da. Treccani Suzdal maddesi (önceki beyandaki kaynak): Suzdal Kiev Rus'u toprağı, sonra Rostov-Suzdal. BEYANLI YAKLAŞIKLIK: f=1001 veri penceresi başı; Rostov-Suzdal bölgesinin Kiev'e bağı çıkarım (vladimir-suzdal künyesi f=1157'den önce ayrı künye yok)."},{f:"1157-01-01",t:"1242-01-01",d:"vladimir-suzdal",kesinlik:{f:"yil"},kaynak:"KRONOLOJI-BALTIK-RUSYA (27 Ekim 2026): Suzdal Rostov-Suzdal/Vladimir-Suzdal knezliği içinde; vladimir-suzdal künyesi f=1157-01-01. [yalnız yıl teyitli; gün teyitsiz]"},{f:"1242-01-01",t:"1281-01-01",d:"altinorda",kesinlik:"yil",kaynak:"Vladimir kaydıyla aynı tasarım (TDV altin-orda-hanligi: Rus knezlikleri Altın Orda'ya tâbi; Altın Orda künyesi f=1242). 1238'den Suzdal Dükalığı ve 1246'dan Suzdal-Nijni Novgorod knezleri için künye yok (önceki beyan)."},{f:"1281-01-01",t:"1341-01-01",d:"altinorda"},{f:"1341-01-01",t:"1392-01-01",d:"nijni-novgorod-suzdal",kesinlik:{f:"yil",t:"yil"},kaynak:"KRONOLOJI-BALTIK-RUSYA (27 Ekim 2026): nijni-novgorod-suzdal künyesi (1341-1392; devletler.js: Han Canibek'in Konstantin Vasilyeviç'e verdiği Nijni Novgorod-Gorodets ile oluşan büyük knezlik; olay 1359: Dmitri Konstantinoviç Suzdal'ı devraldı; 1392: I. Vasili Moskova'ya kattı — Britannica 'Vasily I', yıl 1392/1393). Knezliğin adı Suzdal'ı içerir. Eski 1325 kesimi Moskova'yı bu şehirlere erken uzatıyordu. [yalnız yıl teyitli; gün teyitsiz]"},
     {f:"1392-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Glazov", tur:"sehir", lat:58.139, lon:52.660, g:2, k:3, kur:"1678-01-01",
  s:[{f:"1678-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Murom", tur:"sehir", lat:55.575, lon:42.052, g:2, k:3,
  s:[{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Arzamas", tur:"sehir", lat:55.394, lon:43.840, g:2, k:3,
  s:[{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
// Kasimov — Kāsım Hanlığı'nın (1452-1681) merkezi. TDV `kasim-hanligi` (200).
// 🔴 `kasim` kimliği RENKSİZ ve KÜNYESİZ olduğu için `rusya` yazıldı; renk
// gelirse 1452-1681 penceresi buraya girer. Koordinatöre bildirildi.
{ ad:"Kasimov", tur:"sehir", lat:54.945, lon:41.393, g:1, k:1,
  s:[{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1452-01-01", d:"moskova"},
     {f:"1452-01-01",t:"1681-01-01",d:"kasim",kesinlik:{f:"yil",t:"yil"},kaynak:"TDV İslâm Ansiklopedisi, «Kāsım Hanlığı» maddesi (https://islamansiklopedisi.org.tr/kasim-hanligi, Ahmet Taşağıl): «Bazı kaynaklara göre 1445’te …, bazılarına göre ise 1452-1456 yıllarında … kurulan Kāsım Hanlığı’nın başına Uluğ Muhammed’in oğlu Kāsım getirildi.» ; «Kāsım hanları … unvan ve topraklarını, devlet vergilerini toplama yetkilerini korumakla birlikte dış işlerinde Moskova’ya tâbi oldular.» ; madde başlığı: «(1445[?]-1681)»; bitiş: «1681 yılında … Kāsım Hanlığı tarihe karıştı». · BAŞLANGIÇ: TDV iki görüş verir (1445 / 1452-1456) ⇒ künyenin seçtiği 1452 (ikinci görüşün alt ucu) alındı, YIL hassasiyeti; çelişki künye ic_not’unda. Moskova vasalı olduğu için eski kayıt `moskova` (1452→1547) / `rusya` (1547→1681) kaynaksızdı; vasal hanlık toprakları ve vergi yetkisi kendisinde olduğundan s: ile yazıldı. · ZİNCİR-1281SONRA-1024"},
     {f:"1681-01-01",t:"1917-03-15",d:"rusya"},
     {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
     {f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},
     {f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Temnikov", tur:"sehir", lat:54.633, lon:43.223, g:2, k:3,
  s:[{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Kaluga", tur:"sehir", lat:54.513, lon:36.261, g:1, k:3,
  s:[{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Kolomna", tur:"kale", lat:55.079, lon:38.778, g:1, k:4,
  s:[{f:"1281-01-01",t:"1301-01-01",d:"ryazan",kesinlik:{t:"yil"},kaynak:"KRONOLOJI-BALTIK-RUSYA (28 Ekim 2026): Kolomna 1301'e dek Ryazan Knezliği'ndeydi (UW Waugh Moskova kronolojisi; Vikipedi 'Daniel of Moscow' — arama özeti [özet]); eski kayıt Altın Orda gösteriyordu (Rus knezlikleri Altın Orda'ya haraçgüzar ama kendi hanedanlarınca yönetilirdi — atlas Ryazan emsali: Tula/Ryazan kayıtları 'ryazan')."},
     {f:"1301-01-01", t:"1547-01-16", d:"moskova",kaynak:"KRONOLOJI-BALTIK-RUSYA (28 Ekim 2026): Moskova Knezi Daniil Kolomna'yı 1301'de Moskova topraklarına kattı (UW Waugh 'Chronology of the Early History of Moscow': Kolomna ve Serpuhov 1301; Vikipedi 'Daniel of Moscow': esir Ryazan knezi serbest kalmak için kaleyi devretti — arama özeti [özet]). Eski kayıt genel '1325' kesimini kullanıyordu (I. İvan Kalita dönemi). Yıl düzeyi: 1301-01-01 [yalnız yıl teyitli; gün teyitsiz]; Moskova künyesi f 1283."},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Kaşira", tur:"kale", lat:54.837, lon:38.167, g:2, k:4,
  s:[{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Serpuhov", tur:"kale", lat:54.915, lon:37.411, g:2, k:4,
  s:[{f:"1281-01-01", t:"1301-01-01", d:"altinorda"},
     {f:"1301-01-01", t:"1547-01-16", d:"moskova",kaynak:"KRONOLOJI-BALTIK-RUSYA (28 Ekim 2026): Serpuhov 1301'de Moskova'ya katıldı (UW Waugh 'Chronology of the Early History of Moscow' — arama özeti [özet]). Eski kayıt genel '1325' kesimini kullanıyordu (I. İvan Kalita dönemi). Yıl düzeyi: 1301-01-01 [yalnız yıl teyitli; gün teyitsiz]; Moskova künyesi f 1283."},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Mojaysk", tur:"kale", lat:55.505, lon:36.020, g:2, k:4,
  s:[{f:"1281-01-01",t:"1304-01-01",d:"smolensk-knezligi",kesinlik:{t:"yil"},kaynak:"KRONOLOJI-BALTIK-RUSYA (28 Ekim 2026): Mozhaysk 1304'te Smolensk Knezliği'nden alındı (UW Waugh Moskova kronolojisi — arama özeti [özet]) ⇒ önceki sahip smolensk-knezligi; eski kayıt Altın Orda gösteriyordu."},
     {f:"1304-01-01", t:"1547-01-16", d:"moskova",kaynak:"KRONOLOJI-BALTIK-RUSYA (28 Ekim 2026): Mozhaysk 1304'te Smolensk knezliğinden alınarak Moskova'ya katıldı (UW Waugh 'Chronology of the Early History of Moscow' — arama özeti [özet]; bazı anlatımlar 1303 verir). Eski kayıt genel '1325' kesimini kullanıyordu (I. İvan Kalita dönemi). Yıl düzeyi: 1304-01-01 [yalnız yıl teyitli; gün teyitsiz]; Moskova künyesi f 1283."},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Volokolamsk", tur:"kale", lat:56.037, lon:35.958, g:2, k:4,
  s:[{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Dmitrov", tur:"sehir", lat:56.344, lon:37.521, g:2, k:3,
  s:[{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Sergiyev Posad", tur:"kale", lat:56.315, lon:38.136, g:2, k:4, kur:"1337-01-01",
  s:[{f:"1337-01-01", t:"1547-01-16", d:"moskova"},{f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },

// ─── C · VOLGA-KAMA — İdil Bulgar mirası, Kazan Hanlığı ────────────────────
// Model çekirdeğin Kazan/Simbirsk/Ufa kaydıyla birebir aynı:
// altinorda 1281→1438-01-01 · kazan →1552-10-02 · rusya →1923.
// TDV: `bulgar` (200, İdil Bulgarları) · `kazan-hanligi` (200) · `tataristan` (200)
{ ad:"Bulgar (Bolgar)", tur:"sehir", lat:54.976, lon:49.030, g:0, k:3,
  s:[{f:"0920-01-01",t:"1236-01-01",d:"idil-bulgar",kesinlik:"yil",kaynak:"TDV İslâm Ansiklopedisi, Nuri Yüce, \"Bulgar\" md., 1992, https://islamansiklopedisi.org.tr/bulgar («Bulgar Hanı Yaltavar oğlu Almış Han müslüman oldu ve 920’de Bağdat’a halifeye elçi göndererek Bulgar halkına İslâm dinini öğretecek din bilginleri ile cami ve kale yapacak mimarlar istedi.») (bu oturumda okundu) | TDV İslâm Ansiklopedisi, Nuri Yüce, \"Bulgar\" md., 1992, https://islamansiklopedisi.org.tr/bulgar («Bulgar, Biler, Suvar, Oşal, Tetiş gibi önemli kültür ve ticaret merkezleri kuruldu.») (bu oturumda okundu) · DOGU-500-1281"},{f:"1236-01-01",t:"1242-01-01",d:"mogol-imparatorlugu",kesinlik:"yil",kaynak:"TDV 'Altın Orda Hanlığı' (ham metin): Batu seferinde 'ilk olarak Volga Bulgarları ortadan kaldırıldı'. Altın Orda kuruluşuna kadar (künye f 1242; TDV 1241) Moğol İmparatorluğu (Cuci ulusu). BEYANLI YAKLAŞIKLIK: dilim sonu künye f'sine bağlı. · VERI-MS1-1281"},{f:"1242-01-01",t:"1281-01-01",d:"altinorda",kesinlik:"yil",kaynak:"TDV 'İdil Bulgar Hanlığı': Bulgarlar Altın Orda zamanında 'yarı bağımlı da olsa siyasî varlıklarını devam ettirdi'; Bulgar şehri Altın Orda şehirleri arasında anılır (TDV 'Altın Orda Hanlığı'). Mevcut ilk s ile aynı sahip -> birleştirilebilir. · VERI-MS1-1281"},{f:"1281-01-01", t:"1438-01-01", d:"altinorda"},
     {f:"1438-01-01", t:"1552-10-02", d:"kazan"},
     {f:"1552-10-02",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
// Sviyajsk — Korkunç İvan'ın Kazan seferi için 1551'de kurduğu ileri üs.
{ ad:"Sviyajsk", tur:"kale", lat:55.771, lon:48.660, g:1, k:4, kur:"1551-05-24",
  s:[{f:"1551-05-24", t:"1552-10-02", d:"kazan"},{f:"1552-10-02",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Tetyuşi", tur:"kale", lat:54.940, lon:48.833, g:2, k:4, kur:"1578-01-01",
  s:[{f:"1578-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Buinsk", tur:"sehir", lat:54.966, lon:48.288, g:2, k:3,
  s:[{f:"1281-01-01", t:"1438-01-01", d:"altinorda"},
     {f:"1438-01-01", t:"1552-10-02", d:"kazan"},
     {f:"1552-10-02",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Çistopol", tur:"sehir", lat:55.362, lon:50.635, g:2, k:3,
  s:[{f:"1281-01-01", t:"1438-01-01", d:"altinorda"},
     {f:"1438-01-01", t:"1552-10-02", d:"kazan"},
     {f:"1552-10-02",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Çeboksarı", tur:"sehir", lat:56.146, lon:47.251, g:1, k:3,
  s:[{f:"1281-01-01", t:"1438-01-01", d:"altinorda"},
     {f:"1438-01-01", t:"1552-10-02", d:"kazan"},
     {f:"1552-10-02",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Kozmodemyansk", tur:"kale", lat:56.336, lon:46.559, g:2, k:4, kur:"1583-01-01",
  s:[{f:"1583-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Tsarevokokşaysk (Yoşkar-Ola)", tur:"kale", lat:56.639, lon:47.891, g:2, k:4, kur:"1584-01-01",
  s:[{f:"1584-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Malmıj", tur:"sehir", lat:56.526, lon:50.678, g:2, k:3,
  s:[{f:"1281-01-01", t:"1438-01-01", d:"altinorda"},
     {f:"1438-01-01", t:"1552-10-02", d:"kazan"},
     {f:"1552-10-02",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Yelabuga", tur:"sehir", lat:55.763, lon:52.061, g:2, k:3,
  s:[{f:"1281-01-01", t:"1438-01-01", d:"altinorda"},
     {f:"1438-01-01", t:"1552-10-02", d:"kazan"},
     {f:"1552-10-02",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Menzelinsk", tur:"kale", lat:55.727, lon:53.100, g:2, k:4, kur:"1584-01-01",
  s:[{f:"1584-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Sarapul", tur:"sehir", lat:56.470, lon:53.804, g:2, k:3, kur:"1596-01-01",
  s:[{f:"1596-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Alatır", tur:"kale", lat:54.840, lon:46.578, g:2, k:4, kur:"1552-01-01",
  s:[{f:"1552-01-01", t:"1552-10-02", d:"kazan"},{f:"1552-10-02",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Birsk", tur:"kale", lat:55.415, lon:55.542, g:2, k:4, kur:"1663-01-01",
  s:[{f:"1663-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Buğulma", tur:"sehir", lat:54.536, lon:52.797, g:2, k:3, kur:"1736-01-01",
  s:[{f:"1736-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },

// ─── D · AŞAĞI VOLGA — Altın Orda şehir ağı ────────────────────────────────
// Model çekirdeğin Astrahan/Saratov/Tsaritsyn kaydıyla aynı:
// altinorda 1281→1556-01-01 · rusya →1923.
// TDV: `saray--sehir` (200) · `altin-orda-hanligi` (200) · `astarhan-hanligi` (200)
// ⚠️ Saray-Batu ↔ Saray-Cedîd hangi harabeye karşılık gelir, literatürde
// TARTIŞMALIDIR. O yüzden noktalar HANEDAN ADIYLA değil ARKEOLOJİK SİT
// ADIYLA yazıldı — tartışmalı atfı veriye gömmemek için.
{ ad:"Saray (Selitrennoye)", tur:"sehir", lat:47.183, lon:47.700, g:0, k:1,
  s:[{f:"1242-01-01",t:"1250-01-01",d:"altinorda",kesinlik:"yil",kaynak:"TDV İslâm Ansiklopedisi, «Saray» md., https://islamansiklopedisi.org.tr/saray--sehir (bu oturumda okundu): «Cengiz Han’ın torunu Batu Han tarafından II. Kıpçak seferi dönüşünde İdil (Volga) nehrinin sol kıyısındaki bir düzlükte kurulmuştur.» · «Saray şehrinin adını ilk defa 1254’te Fransisken rahibi Rubrucklu William zikreder. Ona göre burası Batu Han tarafından yeni inşa edilmiş» · TDV İslâm Ansiklopedisi, «Altın Orda Hanlığı» md., https://islamansiklopedisi.org.tr/altin-orda-hanligi (bu oturumda okundu): «Batu Han nihayet … 1241 yılında İdil nehrinin aşağı mecrasına dönerek “Orda” merkezini kurdu.» | f=1242-01-01 altinorda künyesinin f'sidir (hayalet devlet önlemi); TDV Altın Orda 1241 verir (künye düzeltme önerisi, RAPOR.md). Gerçek kuruluş 1241-1254 arası (TDV Saray: ilk tanık 1254). BEYAN: şehir 0500-1241 arasında yoktu (TDV: Batu tarafından kuruldu). · DOGU-500-1281"},{f:"1250-01-01",t:"1281-01-01",d:"altinorda",kesinlik:"yil",kaynak:"Enciclopedia Italiana (1929-37), Saraj maddesi (https://www.treccani.it/enciclopedia/saraj_%28Enciclopedia-Italiana%29/; ham metin ham/da_ei_saraj.txt; TDV dışı kaynak, elle doğrulama bekler): «Fu fondata nella metà del sec. XIII dal khān Bātū» ; TDV İslâm Ansiklopedisi, altin-orda-hanligi (https://islamansiklopedisi.org.tr/altin-orda-hanligi): «merkezi Saray şehri olan Altın Orda Devleti kuruldu» || BEYANLI: kuruluş \"yüzyıl ortası\", Batu 1256'da öldü (EI); dilim başı 1250-01-01 yaklaşık (aralık 1242-1256); kesin yıl kaynakta yok. Eski Saray = Selitrennoye (EI: arkeoloji). · VERI-MS1-1281"},{f:"1281-01-01", t:"1466-01-01", d:"altinorda"},
     {f:"1466-01-01", t:"1556-01-01", d:"astarhan"},
     {f:"1556-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Yeni Saray (Tsarev)", tur:"sehir", lat:48.688, lon:45.383, g:1, k:1,
  s:[{f:"1281-01-01", t:"1466-01-01", d:"altinorda"},
     {f:"1466-01-01", t:"1556-01-01", d:"astarhan"},
     {f:"1556-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Ukek (Uvek)", tur:"sehir", lat:51.470, lon:45.950, g:2, k:3,
  s:[{f:"1281-01-01", t:"1466-01-01", d:"altinorda"},
     {f:"1466-01-01", t:"1556-01-01", d:"astarhan"},
     {f:"1556-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Beldjamen", tur:"sehir", lat:49.020, lon:44.750, g:2, k:3,
  s:[{f:"1281-01-01", t:"1466-01-01", d:"altinorda"},
     {f:"1466-01-01", t:"1556-01-01", d:"astarhan"},
     {f:"1556-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Çernıy Yar", tur:"kale", lat:48.070, lon:46.110, g:2, k:4, kur:"1627-01-01",
  s:[{f:"1627-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Yenotayevsk", tur:"kale", lat:47.245, lon:47.017, g:2, k:4, kur:"1741-01-01",
  s:[{f:"1741-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Krasnıy Yar", tur:"kale", lat:46.535, lon:48.343, g:2, k:4, kur:"1667-01-01",
  s:[{f:"1667-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Hvalınsk", tur:"sehir", lat:52.497, lon:48.101, g:2, k:3, kur:"1556-01-01",
  s:[{f:"1556-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Volsk", tur:"sehir", lat:52.045, lon:47.387, g:2, k:3, kur:"1690-01-01",
  s:[{f:"1690-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Stavropol (Volga)", tur:"kale", lat:53.507, lon:49.420, g:2, k:4, kur:"1738-01-01", kesinlik:"yil", neden:"KUTU-P2-1015 (0082/H-0070): ESBE «Ставрополь»: 'Основан в 1738 г.' — eski 1737 kaynaksızdı.",
  s:[{f:"1738-01-01",t:"1917-03-15",d:"rusya",kesinlik:{f:"yil",t:"gun"}},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },

// ─── E · YAYIK-URAL BOZKIRI — Nogay Ordası ve Başkurt yurdu ────────────────
// Model çekirdeğin Penza/Borisoglebsk kaydıyla aynı (altinorda→nogay 1500 ya da
// 1441, nogay→rusya 1663) — Emba/Üstyurt'un kazak-hanligi kolu ise doğuya ait.
// TDV: `nogaylar` (200) · `baskurt` (200) · `kazaklar` (200)
{ ad:"Uralsk (Yayık)", tur:"kale", lat:51.227, lon:51.386, g:1, k:4,
  s:[{f:"1281-01-01", t:"1441-01-01", d:"altinorda"},
     {f:"1441-01-01", t:"1644-01-01", d:"nogay"},
     {f:"1644-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-16",d:"sovyet-rusya"},{f:"1991-12-16",t:"2000-12-31",d:"kazakistan",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"İlek", tur:"kale", lat:51.523, lon:53.383, g:2, k:4, kur:"1737-01-01",
  s:[{f:"1737-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Orenburg", tur:"kale", lat:51.768, lon:55.097, g:0, k:4, kur:"1743-04-30",
  s:[{f:"1743-04-30",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Orsk", tur:"kale", lat:51.229, lon:58.556, g:2, k:4, kur:"1735-08-31",
  s:[{f:"1735-08-31",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Buzuluk", tur:"kale", lat:52.786, lon:52.261, g:2, k:4, kur:"1736-01-01",
  s:[{f:"1736-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
// Güney Başkurdistan Nogay yurdunun kuzey ucudur; Ufa'nın (1574 ileri kale)
// aksine Rus idaresine geç girer — Penza/Borisoglebsk'in 1663'ü kullanıldı.
{ ad:"Sterlitamak", tur:"sehir", lat:53.630, lon:55.950, g:2, k:3, kur:"1766-01-01",
  s:[{f:"1766-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },

// ─── F · DNYEPER-DON — Hetmanlık merkezleri ve Azak kuşağı ─────────────────
// (Bu çeyrek zaten doygun; yalnız SINIR KARARI taşıyan üç nokta eklendi.)
// Baturin ve Hluhiv — Hetmanlığın başkentleri; Poltava/Putivl modeliyle aynı.
{ ad:"Baturin",kaynak:"polonya", tur:"kale", lat:51.343, lon:32.879, g:1, k:4,
  s:[{f:"1281-01-01",t:"1362-01-01",d:"altinorda"},{f:"1362-01-01",t:"1569-07-01",d:"litvanya-buyuk-dukalik"},{f:"1569-07-01",t:"1649-08-18",d:"lehistan"},{f:"1649-08-18",t:"1764-11-21",d:"kazak-hetmanligi",kesinlik:"yil",kaynak:"Encyclopedia of Ukraine (CIUS) 'Hetman state' (encyclopediaofukraine.com/pages/H/E/Hetmanstate.htm): Hmelnitski döneminde (1648-57) eski Kiev, Bratslav ve Çernigov voyvodalıkları; ‘From 1654 the Hetman state was nominally a vassal of Muscovy’; 1667 Andrusovo bölünmeyi doğruladı; ‘the office of hetman was finally abolished by the Russian government in 1764’ ; EU 'Zboriv, Treaty of' (encyclopediaofukraine.com/display.asp?linkpath=pages%5CZ%5CB%5CZborivTreatyof.htm): 18 Ağustos 1649 Kiev, Bratslav ve Çernigov voyvodalıkları Kazak idaresine bırakıldı · LEHISTAN-KRON 29 Ekim 2026 (Emre’nin 13 Ekim ‘Hetmanlık künyesi açılmadı’ kaydı künyenin sonradan açılmasıyla eskidi: künye kazak-hetmanligi artık var ve kronolojisi Hetmanlığı ‘doğdu’ diye yazıyor; harita bununla uyumlu hâle getirildi. Geri almak için bu commit’i revert et)"},{f:"1764-11-21",t:"1917-03-15",d:"rusya",kesinlik:"yil",kaynak:"Encyclopedia of Ukraine (CIUS) 'Hetman state' (encyclopediaofukraine.com/pages/H/E/Hetmanstate.htm): Hmelnitski döneminde (1648-57) eski Kiev, Bratslav ve Çernigov voyvodalıkları; ‘From 1654 the Hetman state was nominally a vassal of Muscovy’; 1667 Andrusovo bölünmeyi doğruladı; ‘the office of hetman was finally abolished by the Russian government in 1764’ · [yalnız yıl teyitli; gün künyedeki 1764-11-21] · Rusya yönetimi Hetmanlığı kaldırdı (Küçük Rusya Kolejyumu); eski kayıtta lehistan→rusya geçişi 1654-01-18 Pereyaslav’da yazılıydı (TAKVİM-1015: ESBE 8 Ocak 1654 O.S. = 18 Ocak) — Pereyaslav’la Hetmanlık Moskova’nın nominal vasalı oldu, harita ayrı dilim yapmıyor · LEHISTAN-KRON 29 Ekim 2026 (Emre’nin 13 Ekim ‘Hetmanlık künyesi açılmadı’ kaydı künyenin sonradan açılmasıyla eskidi: künye kazak-hetmanligi artık var ve kronolojisi Hetmanlığı ‘doğdu’ diye yazıyor; harita bununla uyumlu hâle getirildi. Geri almak için bu commit’i revert et)"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-08-24",d:"sovyet-rusya"},{f:"1991-08-24",t:"2000-12-31",d:"ukrayna",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
{ ad:"Hluhiv", tur:"sehir", lat:51.678, lon:33.917, g:2, k:3,
  s:[{f:"1281-01-01", t:"1362-01-01", d:"altinorda"},
     {f:"1362-01-01",t:"1503-04-02",d:"litvanya-buyuk-dukalik"},
     {f:"1503-04-02", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-08-24",d:"sovyet-rusya"},{f:"1991-08-24",t:"2000-12-31",d:"ukrayna",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },
// Taganrog — Azak'ın karşı kıyısı. Dönemleri BİREBİR Azak'ın kırılma
// günlerinden alındı (1696-07-19 fetih · 1711-07-21 Prut · 1739-09-18 Belgrad),
// çünkü şehrin dört el değiştirmesi Azak'ınkiyle aynı olayların sonucudur.
{ ad:"Taganrog", neden:"VERI-KIRIM 14 Eyl 2026 (1.MURAT M-3901 hükmü b): 1711-07-21 → 1739-09-18 dilimi s:kirim idi ve KAYNAKSIZDI (kayıt başlığı yalnız günleri Azak'tan aldığını söylüyor, kimlik gerekçesi yok). Kaynak yıkımı ve iki tarafça kale yapılmayacak tampon hükmünü yazıyor, tasarruf yazmıyor ⇒ yıkık tampon kıyı, __BOSLUK__ (kuzey vahşi bozkır hükmüyle aynı sınıf). Günler DEĞİŞMEDİ. ⚠️ BORÇ: akademik kaynak (B. Davies, Warfare, State and Society on the Black Sea Steppe 1500-1700) OKUNMADI.", tur:"liman", lat:47.237, lon:38.897, g:1, k:3, kur:"1698-09-12",
  s:[{f:"1698-09-12", t:"1711-07-21", d:"rusya"},{f:"1711-07-21", t:"1739-09-18", d:"__BOSLUK__", kaynak:"TDV prut-antlasmasi (200, gövde okundu): 'Azak Kalesi arazi ve mühimmatıyla iade edilecek, Taygan, Kamenka ve Samara suyu kenarındaki Yenikale yıkılacak … buralarda her iki tarafça başka bir kale yapılmayacak' · TDV azak (200): Prut sonrası Azak geri alındı, 1713 Edirne ile Osmanlı'ya bırakıldı, Belgrad (1739) ile Rusya'ya terk. taganrog/taygan slugları 302 ÖLÜ."},{f:"1739-09-18",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}] },

];
