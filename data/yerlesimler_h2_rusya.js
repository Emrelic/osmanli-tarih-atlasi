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
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Staraya Russa", tur:"sehir", lat:57.990, lon:31.362, g:2, k:3,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Eski Ladoga", tur:"kale", lat:59.997, lon:32.298, g:2, k:4,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
// Oreşek (Nöteborg/Şlisselburg) — Stolbovo ile İsveç'e, 1702'de geri alındı.
// 🔴 1702-10-22 bu partinin TEK yeni kırılma günü. Bilerek yazıldı: kalenin
// düşüşü Neva ağzını açan olaydır ve St. Petersburg'un 1703 kuruluşunun ön
// şartıdır; 1721 Nystad'a yuvarlamak 19 yıl uydurmak olurdu.
{ ad:"Oreşek (Nöteborg)", tur:"kale", lat:59.953, lon:31.038, g:1, k:4,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16", t:"1617-02-27", d:"rusya"},
     {f:"1617-02-27", t:"1702-10-22", d:"isvec"},
     {f:"1702-10-22",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Tihvin", tur:"sehir", lat:59.645, lon:33.518, g:2, k:3,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Belozersk", tur:"sehir", lat:60.031, lon:37.783, g:1, k:3,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Kirillov", tur:"kale", lat:59.858, lon:38.376, g:2, k:4, kur:"1397-01-01",
  s:[{f:"1397-01-01", t:"1478-01-15", d:"novgorod"},{f:"1478-01-15", t:"1547-01-16", d:"moskova"},{f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Kargopol", tur:"sehir", lat:61.507, lon:38.945, g:1, k:3,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Olonets", tur:"kale", lat:60.977, lon:32.972, g:2, k:4, kur:"1649-01-01",
  s:[{f:"1649-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Petrozavodsk", tur:"sehir", lat:61.789, lon:34.351, g:1, k:3, kur:"1703-09-11",
  s:[{f:"1703-09-11",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
// Solovki — Beyaz Deniz'de manastır-kale; kuzey kıyısının tek tahkim noktası.
{ ad:"Solovki (Solovetsky)", tur:"kale", lat:65.030, lon:35.712, g:1, k:4, kur:"1436-01-01",
  s:[{f:"1436-01-01", t:"1478-01-15", d:"novgorod"},{f:"1478-01-15", t:"1547-01-16", d:"moskova"},{f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Kem", tur:"sehir", lat:64.951, lon:34.594, g:2, k:3,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Onega", tur:"liman", lat:63.907, lon:38.099, g:2, k:3,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Holmogorı", tur:"sehir", lat:64.223, lon:41.653, g:1, k:3,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Pinega", tur:"sehir", lat:64.700, lon:43.392, g:2, k:3,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Şenkursk", tur:"sehir", lat:62.106, lon:42.897, g:2, k:3,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Velsk", tur:"sehir", lat:61.066, lon:42.104, g:2, k:3,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Veliki Ustyug", tur:"sehir", lat:60.762, lon:46.310, g:1, k:3,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Solvıçegodsk", tur:"sehir", lat:61.339, lon:46.917, g:2, k:3,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Yarensk", tur:"sehir", lat:62.166, lon:49.098, g:2, k:3,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Ust-Sısolsk (Sıktıvkar)", tur:"sehir", lat:61.668, lon:50.836, g:2, k:3, kur:"1586-01-01",
  s:[{f:"1586-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Totma", tur:"sehir", lat:59.973, lon:42.759, g:2, k:3,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Hlınov (Vyatka)", tur:"sehir", lat:58.604, lon:49.668, g:1, k:3,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Kotelniç", tur:"sehir", lat:58.302, lon:48.343, g:2, k:3,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Slobodskoy", tur:"sehir", lat:58.733, lon:50.180, g:2, k:3,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Çerdın", tur:"sehir", lat:60.400, lon:56.480, g:1, k:3,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Solikamsk", tur:"sehir", lat:59.649, lon:56.771, g:1, k:3, kur:"1430-01-01",
  s:[{f:"1430-01-01", t:"1478-01-15", d:"novgorod"},{f:"1478-01-15", t:"1547-01-16", d:"moskova"},{f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Kungur", tur:"kale", lat:57.433, lon:56.937, g:2, k:4, kur:"1648-01-01",
  s:[{f:"1648-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// ─── B · YUKARI VOLGA — Rostov-Suzdal ve Tver çekirdeği ────────────────────
{ ad:"Kostroma", tur:"sehir", lat:57.758, lon:40.905, g:1, k:3,
  s:[{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Yaroslavl", tur:"sehir", lat:57.626, lon:39.894, g:0, k:3,
  s:[{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Rostov Veliki", tur:"sehir", lat:57.185, lon:39.414, g:1, k:3,
  s:[{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Uglich", tur:"sehir", lat:57.526, lon:38.320, g:2, k:3,
  s:[{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Galiç (Kostroma)", tur:"sehir", lat:58.383, lon:42.350, g:2, k:3,
  s:[{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Kineşma", tur:"sehir", lat:57.443, lon:42.168, g:2, k:3,
  s:[{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Şuya", tur:"sehir", lat:56.856, lon:41.383, g:2, k:3,
  s:[{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Vetluga", tur:"sehir", lat:57.851, lon:45.782, g:2, k:3,
  s:[{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Tver", tur:"sehir", lat:56.859, lon:35.912, g:0, k:1,
  s:[{f:"1281-01-01", t:"1485-09-12", d:"tver"},
     {f:"1485-09-12", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Torjok", tur:"sehir", lat:57.041, lon:34.960, g:2, k:3,
  s:[{f:"1281-01-01", t:"1485-09-12", d:"tver"},
     {f:"1485-09-12", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Velikiye Luki", tur:"kale", lat:56.336, lon:30.518, g:2, k:4,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Vladimir", tur:"sehir", lat:56.129, lon:40.407, g:0, k:3,
  s:[{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Suzdal", tur:"sehir", lat:56.419, lon:40.449, g:2, k:3,
  s:[{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Glazov", tur:"sehir", lat:58.139, lon:52.660, g:2, k:3, kur:"1678-01-01",
  s:[{f:"1678-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Murom", tur:"sehir", lat:55.575, lon:42.052, g:2, k:3,
  s:[{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Arzamas", tur:"sehir", lat:55.394, lon:43.840, g:2, k:3,
  s:[{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
// Kasimov — Kāsım Hanlığı'nın (1452-1681) merkezi. TDV `kasim-hanligi` (200).
// 🔴 `kasim` kimliği RENKSİZ ve KÜNYESİZ olduğu için `rusya` yazıldı; renk
// gelirse 1452-1681 penceresi buraya girer. Koordinatöre bildirildi.
{ ad:"Kasimov", tur:"sehir", lat:54.945, lon:41.393, g:1, k:1,
  s:[{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Temnikov", tur:"sehir", lat:54.633, lon:43.223, g:2, k:3,
  s:[{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Kaluga", tur:"sehir", lat:54.513, lon:36.261, g:1, k:3,
  s:[{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Kolomna", tur:"kale", lat:55.079, lon:38.778, g:1, k:4,
  s:[{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Kaşira", tur:"kale", lat:54.837, lon:38.167, g:2, k:4,
  s:[{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Serpuhov", tur:"kale", lat:54.915, lon:37.411, g:2, k:4,
  s:[{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Mojaysk", tur:"kale", lat:55.505, lon:36.020, g:2, k:4,
  s:[{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Volokolamsk", tur:"kale", lat:56.037, lon:35.958, g:2, k:4,
  s:[{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Dmitrov", tur:"sehir", lat:56.344, lon:37.521, g:2, k:3,
  s:[{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Sergiyev Posad", tur:"kale", lat:56.315, lon:38.136, g:2, k:4, kur:"1337-01-01",
  s:[{f:"1337-01-01", t:"1547-01-16", d:"moskova"},{f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// ─── C · VOLGA-KAMA — İdil Bulgar mirası, Kazan Hanlığı ────────────────────
// Model çekirdeğin Kazan/Simbirsk/Ufa kaydıyla birebir aynı:
// altinorda 1281→1438-01-01 · kazan →1552-10-02 · rusya →1923.
// TDV: `bulgar` (200, İdil Bulgarları) · `kazan-hanligi` (200) · `tataristan` (200)
{ ad:"Bulgar (Bolgar)", tur:"sehir", lat:54.976, lon:49.030, g:0, k:3,
  s:[{f:"1281-01-01", t:"1438-01-01", d:"altinorda"},
     {f:"1438-01-01", t:"1552-10-02", d:"kazan"},
     {f:"1552-10-02",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
// Sviyajsk — Korkunç İvan'ın Kazan seferi için 1551'de kurduğu ileri üs.
{ ad:"Sviyajsk", tur:"kale", lat:55.771, lon:48.660, g:1, k:4, kur:"1551-05-24",
  s:[{f:"1551-05-24", t:"1552-10-02", d:"kazan"},{f:"1552-10-02",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Tetyuşi", tur:"kale", lat:54.940, lon:48.833, g:2, k:4, kur:"1578-01-01",
  s:[{f:"1578-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Buinsk", tur:"sehir", lat:54.966, lon:48.288, g:2, k:3,
  s:[{f:"1281-01-01", t:"1438-01-01", d:"altinorda"},
     {f:"1438-01-01", t:"1552-10-02", d:"kazan"},
     {f:"1552-10-02",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Çistopol", tur:"sehir", lat:55.362, lon:50.635, g:2, k:3,
  s:[{f:"1281-01-01", t:"1438-01-01", d:"altinorda"},
     {f:"1438-01-01", t:"1552-10-02", d:"kazan"},
     {f:"1552-10-02",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Çeboksarı", tur:"sehir", lat:56.146, lon:47.251, g:1, k:3,
  s:[{f:"1281-01-01", t:"1438-01-01", d:"altinorda"},
     {f:"1438-01-01", t:"1552-10-02", d:"kazan"},
     {f:"1552-10-02",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Kozmodemyansk", tur:"kale", lat:56.336, lon:46.559, g:2, k:4, kur:"1583-01-01",
  s:[{f:"1583-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Tsarevokokşaysk (Yoşkar-Ola)", tur:"kale", lat:56.639, lon:47.891, g:2, k:4, kur:"1584-01-01",
  s:[{f:"1584-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Malmıj", tur:"sehir", lat:56.526, lon:50.678, g:2, k:3,
  s:[{f:"1281-01-01", t:"1438-01-01", d:"altinorda"},
     {f:"1438-01-01", t:"1552-10-02", d:"kazan"},
     {f:"1552-10-02",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Yelabuga", tur:"sehir", lat:55.763, lon:52.061, g:2, k:3,
  s:[{f:"1281-01-01", t:"1438-01-01", d:"altinorda"},
     {f:"1438-01-01", t:"1552-10-02", d:"kazan"},
     {f:"1552-10-02",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Menzelinsk", tur:"kale", lat:55.727, lon:53.100, g:2, k:4, kur:"1584-01-01",
  s:[{f:"1584-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Sarapul", tur:"sehir", lat:56.470, lon:53.804, g:2, k:3, kur:"1596-01-01",
  s:[{f:"1596-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Alatır", tur:"kale", lat:54.840, lon:46.578, g:2, k:4, kur:"1552-01-01",
  s:[{f:"1552-01-01", t:"1552-10-02", d:"kazan"},{f:"1552-10-02",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Birsk", tur:"kale", lat:55.415, lon:55.542, g:2, k:4, kur:"1663-01-01",
  s:[{f:"1663-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Buğulma", tur:"sehir", lat:54.536, lon:52.797, g:2, k:3, kur:"1736-01-01",
  s:[{f:"1736-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// ─── D · AŞAĞI VOLGA — Altın Orda şehir ağı ────────────────────────────────
// Model çekirdeğin Astrahan/Saratov/Tsaritsyn kaydıyla aynı:
// altinorda 1281→1556-01-01 · rusya →1923.
// TDV: `saray--sehir` (200) · `altin-orda-hanligi` (200) · `astarhan-hanligi` (200)
// ⚠️ Saray-Batu ↔ Saray-Cedîd hangi harabeye karşılık gelir, literatürde
// TARTIŞMALIDIR. O yüzden noktalar HANEDAN ADIYLA değil ARKEOLOJİK SİT
// ADIYLA yazıldı — tartışmalı atfı veriye gömmemek için.
{ ad:"Saray (Selitrennoye)", tur:"sehir", lat:47.183, lon:47.700, g:0, k:1,
  s:[{f:"1281-01-01", t:"1466-01-01", d:"altinorda"},
     {f:"1466-01-01", t:"1556-01-01", d:"astarhan"},
     {f:"1556-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Yeni Saray (Tsarev)", tur:"sehir", lat:48.688, lon:45.383, g:1, k:1,
  s:[{f:"1281-01-01", t:"1466-01-01", d:"altinorda"},
     {f:"1466-01-01", t:"1556-01-01", d:"astarhan"},
     {f:"1556-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Ukek (Uvek)", tur:"sehir", lat:51.470, lon:45.950, g:2, k:3,
  s:[{f:"1281-01-01", t:"1466-01-01", d:"altinorda"},
     {f:"1466-01-01", t:"1556-01-01", d:"astarhan"},
     {f:"1556-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Beldjamen", tur:"sehir", lat:49.020, lon:44.750, g:2, k:3,
  s:[{f:"1281-01-01", t:"1466-01-01", d:"altinorda"},
     {f:"1466-01-01", t:"1556-01-01", d:"astarhan"},
     {f:"1556-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Çernıy Yar", tur:"kale", lat:48.070, lon:46.110, g:2, k:4, kur:"1627-01-01",
  s:[{f:"1627-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Yenotayevsk", tur:"kale", lat:47.245, lon:47.017, g:2, k:4, kur:"1741-01-01",
  s:[{f:"1741-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Krasnıy Yar", tur:"kale", lat:46.535, lon:48.343, g:2, k:4, kur:"1667-01-01",
  s:[{f:"1667-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Hvalınsk", tur:"sehir", lat:52.497, lon:48.101, g:2, k:3, kur:"1556-01-01",
  s:[{f:"1556-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Volsk", tur:"sehir", lat:52.045, lon:47.387, g:2, k:3, kur:"1690-01-01",
  s:[{f:"1690-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Stavropol (Volga)", tur:"kale", lat:53.507, lon:49.420, g:2, k:4, kur:"1737-01-01",
  s:[{f:"1737-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// ─── E · YAYIK-URAL BOZKIRI — Nogay Ordası ve Başkurt yurdu ────────────────
// Model çekirdeğin Penza/Borisoglebsk kaydıyla aynı (altinorda→nogay 1500 ya da
// 1441, nogay→rusya 1663) — Emba/Üstyurt'un kazak-hanligi kolu ise doğuya ait.
// TDV: `nogaylar` (200) · `baskurt` (200) · `kazaklar` (200)
{ ad:"Uralsk (Yayık)", tur:"kale", lat:51.227, lon:51.386, g:1, k:4,
  s:[{f:"1281-01-01", t:"1441-01-01", d:"altinorda"},
     {f:"1441-01-01", t:"1644-01-01", d:"nogay"},
     {f:"1644-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"İlek", tur:"kale", lat:51.523, lon:53.383, g:2, k:4, kur:"1737-01-01",
  s:[{f:"1737-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Orenburg", tur:"kale", lat:51.768, lon:55.097, g:0, k:4, kur:"1743-04-30",
  s:[{f:"1743-04-30",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Orsk", tur:"kale", lat:51.229, lon:58.556, g:2, k:4, kur:"1735-08-31",
  s:[{f:"1735-08-31",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Buzuluk", tur:"kale", lat:52.786, lon:52.261, g:2, k:4, kur:"1736-01-01",
  s:[{f:"1736-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
// Güney Başkurdistan Nogay yurdunun kuzey ucudur; Ufa'nın (1574 ileri kale)
// aksine Rus idaresine geç girer — Penza/Borisoglebsk'in 1663'ü kullanıldı.
{ ad:"Sterlitamak", tur:"sehir", lat:53.630, lon:55.950, g:2, k:3, kur:"1766-01-01",
  s:[{f:"1766-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// ─── F · DNYEPER-DON — Hetmanlık merkezleri ve Azak kuşağı ─────────────────
// (Bu çeyrek zaten doygun; yalnız SINIR KARARI taşıyan üç nokta eklendi.)
// Baturin ve Hluhiv — Hetmanlığın başkentleri; Poltava/Putivl modeliyle aynı.
{ ad:"Baturin", tur:"kale", lat:51.343, lon:32.879, g:1, k:4,
  s:[{f:"1281-01-01", t:"1362-01-01", d:"altinorda"},
     {f:"1362-01-01", t:"1654-01-08", d:"lehistan"},
     {f:"1654-01-08",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Hluhiv", tur:"sehir", lat:51.678, lon:33.917, g:2, k:3,
  s:[{f:"1281-01-01", t:"1362-01-01", d:"altinorda"},
     {f:"1362-01-01",t:"1503-04-02",d:"litvanya-buyuk-dukalik"},
     {f:"1503-04-02", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
// Taganrog — Azak'ın karşı kıyısı. Dönemleri BİREBİR Azak'ın kırılma
// günlerinden alındı (1696-07-19 fetih · 1711-07-21 Prut · 1739-09-18 Belgrad),
// çünkü şehrin dört el değiştirmesi Azak'ınkiyle aynı olayların sonucudur.
{ ad:"Taganrog", tur:"liman", lat:47.237, lon:38.897, g:1, k:3, kur:"1698-09-12",
  s:[{f:"1698-09-12", t:"1711-07-21", d:"rusya"},{f:"1711-07-21", t:"1739-09-18", d:"kirim"},{f:"1739-09-18",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

];
