// =====================================================================
// İSKANDİNAVYA + BALTIK — KADEME 3 partisi (%82,5 hedef, %100 DEĞİL)
// PETEK/NOKTA oturumu · 3 Ağustos 2026 · dosya adı koordinatörden
// =====================================================================
// ⚠️ HENÜZ CANLI DEĞİL — `arac/girdi.py` GIRDI_DOSYALARI'na EKLENMEDİ.
//
// ── ÖLÇÜT TERSİNE DÖNDÜ — ve bu kasıtlı ────────────────────────────
// `ONCELIK.md` KALİTE KADEMELERİ / `YASALAR K7` (Emre, 3 Ağustos):
//   *"Bir işi 'çok zahmetli' diye bekletmek onu %0'da tutmaktır —
//     ve %0 KADEME 0'dır. Fiyortlar Ege adaları hassasiyetiyle beklemez."*
// Halka 3-4 ⇒ hedef **KADEME 3**. Bu dosyada fiyort kovalanmadı, kıyı
// hattı çizilmedi, girinti çıkıntı hesaplanmadı. **Bitirdim demiyorum —
// üstünden geçtim.**
//
// ── ÖLÇÜM: ÖNCE / SONRA ─────────────────────────────────────────────
// Kutu 54-64°K / 4-32°D · kara 1.100.616 km²
// ```
//                  ÖNCE        SONRA
// nokta            46          85
// km²/nokta        23.926      12.948
// ort. yarıçap     115 km      64 km
// en uzak nokta    387 km      213 km
// ```
// ⇒ Yarıçap **%44'e** indi. Kademe 3 bandında; %100 değil ve olması da
//   gerekmiyor.
//
// 🔴 BOLGE KUZEY SINIRI 64°K — `uret_petek.py:60` `box(-12,-11,146,64)`.
//    Tromsø · Narvik · Luleå · Oulu · Kajaani · Lapland **çizilmiyor**;
//    oraya nokta koymak boşa gider. Ölçüldü, altı aday bu yüzden değil
//    ama sınır bilinerek çalışıldı. Kuzey açılırsa ayrı parti gerekir.
//
// ── ŞEMA — hepsi `s:`, hiç `d:`/`v:` YOK ────────────────────────────
// Hiçbiri Osmanlı değil ⇒ tamamı `s:`. `s:`→`s:` geçişi **kırılma
// üretmez**, dolayısıyla bu partinin Değişmez 2 borcu **yapısal olarak
// sıfırdır** — tek bir gün bile madde istemiyor.
// Kullanılan geçiş günlerinin hepsi zaten veride: 1537-01-01 · 1561-11-28
// · 1621-09-15 · 1645-08-13 · 1658-02-26 · 1721-08-30 · 1772-08-05 ·
// 1795-10-24 · 1809-09-17 · 1814-01-14 · 1905-06-07 · 1917-12-06 ·
// 1918-02-16 · 1918-11-11.
//
// ── 🔴 ESTONYA YAZILMADI — kimlik yok ───────────────────────────────
// `renkler.py`de `letonya` ve `litvanya` VAR, **`estonya` YOK.**
// Tallinn (Reval) · Tartu (Dorpat) · Narva · Pärnu ölçüldü (dördü de
// maske ✓, 3 km ✓, en yakın 82-136 km) ama YAZILMADI:
// 1918-1923 penceresi için `rusya` yazmak, bugün üç kez katalogladığım
// ödüncün (Azak · Kalmuk bozkırı · Donets) dördüncüsü olurdu.
// ⇒ `estonya` kimliği gelince dört nokta on dakikada girer; koordinatlar
//   ve zincir (`almanya →1561-11-28 · isvec →1721-08-30 · rusya →1918 ·
//   estonya`) burada hazır.
// 📌 Tallinn atlasın en büyük Baltık boşluğu: Helsinki'ye 82 km, ama
//   Fin körfezinin ÖTE yakası — bugün Helsinki'nin peteğine düşüyor.
// =====================================================================

window.YERLESIMLER_EK7 = [

// ── NORVEÇ ──────────────────────────────────────────────────────────
// Zincir Bergen/Trondheim/Stavanger'ın birebir aynısı:
// norvec →1537-01-01 (Norveç'in ayrı krallık statüsünü yitirmesi)
// · danimarka →1814-01-14 (Kiel) · isvec →1905-06-07 · norvec
// ⚠️ Ålesund ve Kristiansund maske dışı çıktı (takımada); **fiyort
//    kovalamadım**, iç tarafa kaydırdım — brief'in kuralı bu.
{ ad:"Ålesund", tur:"liman", lat:62.470, lon:6.400, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},{f:"1537-01-01",t:"1814-01-14",d:"danimarka"},{f:"1814-01-14",t:"1905-06-07",d:"isvec"},{f:"1905-06-07",t:"1923-10-29",d:"norvec"}] },
{ ad:"Molde", tur:"liman", lat:62.737, lon:7.159, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},{f:"1537-01-01",t:"1814-01-14",d:"danimarka"},{f:"1814-01-14",t:"1905-06-07",d:"isvec"},{f:"1905-06-07",t:"1923-10-29",d:"norvec"}] },
{ ad:"Kristiansund", tur:"liman", lat:63.000, lon:8.200, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},{f:"1537-01-01",t:"1814-01-14",d:"danimarka"},{f:"1814-01-14",t:"1905-06-07",d:"isvec"},{f:"1905-06-07",t:"1923-10-29",d:"norvec"}] },
{ ad:"Røros", tur:"sehir", lat:62.575, lon:11.385, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},{f:"1537-01-01",t:"1814-01-14",d:"danimarka"},{f:"1814-01-14",t:"1905-06-07",d:"isvec"},{f:"1905-06-07",t:"1923-10-29",d:"norvec"}] },
{ ad:"Sogndal", tur:"sehir", lat:61.230, lon:7.100, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},{f:"1537-01-01",t:"1814-01-14",d:"danimarka"},{f:"1814-01-14",t:"1905-06-07",d:"isvec"},{f:"1905-06-07",t:"1923-10-29",d:"norvec"}] },
{ ad:"Lillehammer", tur:"sehir", lat:61.115, lon:10.466, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},{f:"1537-01-01",t:"1814-01-14",d:"danimarka"},{f:"1814-01-14",t:"1905-06-07",d:"isvec"},{f:"1905-06-07",t:"1923-10-29",d:"norvec"}] },
{ ad:"Hamar", tur:"sehir", lat:60.795, lon:11.068, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},{f:"1537-01-01",t:"1814-01-14",d:"danimarka"},{f:"1814-01-14",t:"1905-06-07",d:"isvec"},{f:"1905-06-07",t:"1923-10-29",d:"norvec"}] },
{ ad:"Skien", tur:"sehir", lat:59.209, lon:9.609, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},{f:"1537-01-01",t:"1814-01-14",d:"danimarka"},{f:"1814-01-14",t:"1905-06-07",d:"isvec"},{f:"1905-06-07",t:"1923-10-29",d:"norvec"}] },
{ ad:"Haugesund", tur:"liman", lat:59.413, lon:5.268, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},{f:"1537-01-01",t:"1814-01-14",d:"danimarka"},{f:"1814-01-14",t:"1905-06-07",d:"isvec"},{f:"1905-06-07",t:"1923-10-29",d:"norvec"}] },

// ── İSVEÇ — çekirdek (kesintisiz) ───────────────────────────────────
{ ad:"Umeå", tur:"liman", lat:63.826, lon:20.263, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"isvec"}] },
{ ad:"Härnösand", tur:"liman", lat:62.632, lon:17.941, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"isvec"}] },
{ ad:"Mora", tur:"sehir", lat:61.006, lon:14.542, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"isvec"}] },
{ ad:"Västerås", tur:"sehir", lat:59.6132, lon:16.5450, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"isvec"}] },
{ ad:"Norrköping", tur:"liman", lat:58.588, lon:16.186, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"isvec"}] },
{ ad:"Nyköping", tur:"liman", lat:58.753, lon:17.009, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"isvec"}] },
{ ad:"Borås", tur:"sehir", lat:57.721, lon:12.940, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"isvec"}] },
{ ad:"Växjö", tur:"sehir", lat:56.878, lon:14.809, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"isvec"}] },

// ── İSVEÇ — 1645/1658'de DANİMARKA'DAN alınan iller ─────────────────
// ⚠️ Bunlar `isvec 1281-1923` YAZILAMAZ; Skåne · Blekinge 1658 Roskilde'ye,
//    Jämtland 1645 Brömsebro'ya kadar Danimarka'daydı. Komşu zincirini
//    körü körüne kopyalamak burada 300-400 yıl yanlış olurdu.
//    Halmstad (1645) ve Malmö/Helsingborg (1658) kayıtlarıyla hizalı.
{ ad:"Kristianstad", tur:"sehir", lat:56.031, lon:14.152, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1658-02-26",d:"danimarka"},{f:"1658-02-26",t:"1923-10-29",d:"isvec"}] },
{ ad:"Karlskrona", tur:"liman", lat:56.250, lon:15.600, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1658-02-26",d:"danimarka"},{f:"1658-02-26",t:"1923-10-29",d:"isvec"}] },
// Jämtland: 1537 öncesi Norveç, sonra Danimarka-Norveç, 1645'te İsveç.
{ ad:"Östersund (Jämtland)", tur:"sehir", lat:63.250, lon:14.900, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},{f:"1537-01-01",t:"1645-08-13",d:"danimarka"},{f:"1645-08-13",t:"1923-10-29",d:"isvec"}] },

// ── FİNLANDİYA ──────────────────────────────────────────────────────
// Zincir Turku/Helsinki/Hämeenlinna'nın aynısı:
// isvec →1809-09-17 (Fredrikshamn) · rusya →1917-12-06 · finlandiya
{ ad:"Vaasa", tur:"liman", lat:63.096, lon:21.616, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1809-09-17",d:"isvec"},{f:"1809-09-17",t:"1917-12-06",d:"rusya"},{f:"1917-12-06",t:"1923-10-29",d:"finlandiya"}] },
{ ad:"Kokkola", tur:"liman", lat:63.838, lon:23.132, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1809-09-17",d:"isvec"},{f:"1809-09-17",t:"1917-12-06",d:"rusya"},{f:"1917-12-06",t:"1923-10-29",d:"finlandiya"}] },
{ ad:"Pori", tur:"liman", lat:61.487, lon:21.797, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1809-09-17",d:"isvec"},{f:"1809-09-17",t:"1917-12-06",d:"rusya"},{f:"1917-12-06",t:"1923-10-29",d:"finlandiya"}] },
{ ad:"Tampere", tur:"sehir", lat:61.498, lon:23.761, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1809-09-17",d:"isvec"},{f:"1809-09-17",t:"1917-12-06",d:"rusya"},{f:"1917-12-06",t:"1923-10-29",d:"finlandiya"}] },
{ ad:"Jyväskylä", tur:"sehir", lat:62.242, lon:25.747, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1809-09-17",d:"isvec"},{f:"1809-09-17",t:"1917-12-06",d:"rusya"},{f:"1917-12-06",t:"1923-10-29",d:"finlandiya"}] },
{ ad:"Kuopio", tur:"sehir", lat:62.893, lon:27.678, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1809-09-17",d:"isvec"},{f:"1809-09-17",t:"1917-12-06",d:"rusya"},{f:"1917-12-06",t:"1923-10-29",d:"finlandiya"}] },
{ ad:"Iisalmi", tur:"sehir", lat:63.558, lon:27.188, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1809-09-17",d:"isvec"},{f:"1809-09-17",t:"1917-12-06",d:"rusya"},{f:"1917-12-06",t:"1923-10-29",d:"finlandiya"}] },
{ ad:"Nurmes", tur:"sehir", lat:63.600, lon:29.400, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1809-09-17",d:"isvec"},{f:"1809-09-17",t:"1917-12-06",d:"rusya"},{f:"1917-12-06",t:"1923-10-29",d:"finlandiya"}] },
{ ad:"Joensuu", tur:"sehir", lat:62.601, lon:29.763, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1809-09-17",d:"isvec"},{f:"1809-09-17",t:"1917-12-06",d:"rusya"},{f:"1917-12-06",t:"1923-10-29",d:"finlandiya"}] },
{ ad:"Savonlinna", tur:"kale", lat:62.000, lon:28.900, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1809-09-17",d:"isvec"},{f:"1809-09-17",t:"1917-12-06",d:"rusya"},{f:"1917-12-06",t:"1923-10-29",d:"finlandiya"}] },
{ ad:"Mikkeli", tur:"sehir", lat:61.688, lon:27.273, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1809-09-17",d:"isvec"},{f:"1809-09-17",t:"1917-12-06",d:"rusya"},{f:"1917-12-06",t:"1923-10-29",d:"finlandiya"}] },
// ⚠️ Lappeenranta ESKİ FİNLANDİYA'dadır: Viipuri ile birlikte 1721
//    Nystad'da Rusya'ya geçti, 1809'da DEĞİL. Viipuri'nin zinciri kullanıldı.
//    Komşusu 48 km ötede ve farklı tarih taşısaydı harita orada yarılırdı.
{ ad:"Lappeenranta", tur:"kale", lat:61.058, lon:28.187, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1721-08-30",d:"isvec"},{f:"1721-08-30",t:"1917-12-06",d:"rusya"},{f:"1917-12-06",t:"1923-10-29",d:"finlandiya"}] },

// ── LETONYA ─────────────────────────────────────────────────────────
// Riga'nın zinciri: almanya →1561-11-28 (Livonya Nişanı'nın dağılışı)
// · lehistan →1621-09-15 · isvec →1721-08-30 (Nystad) · rusya →1918-11-11
{ ad:"Cēsis (Wenden)", tur:"kale", lat:57.312, lon:25.274, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1561-11-28",d:"almanya"},{f:"1561-11-28",t:"1621-09-15",d:"lehistan"},{f:"1621-09-15",t:"1721-08-30",d:"isvec"},{f:"1721-08-30",t:"1918-11-11",d:"rusya"},{f:"1918-11-11",t:"1923-10-29",d:"letonya"}] },
// ⚠️ Dünaburg LEH LİVONYASI'ndadır (Inflanty): İsveç'e HİÇ geçmedi,
//    Lehistan'da kaldı ve BİRİNCİ TAKSİM'de (1772) Rusya'ya geçti.
//    Cēsis'in zincirini kopyalamak onu yüz yıl yanlış gösterirdi.
{ ad:"Daugavpils (Dünaburg)", tur:"kale", lat:55.875, lon:26.536, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1561-11-28",d:"almanya"},{f:"1561-11-28",t:"1772-08-05",d:"lehistan"},{f:"1772-08-05",t:"1918-11-11",d:"rusya"},{f:"1918-11-11",t:"1923-10-29",d:"letonya"}] },

// ── LİTVANYA — Vilnius'un zinciri ───────────────────────────────────
{ ad:"Kaunas", tur:"sehir", lat:54.897, lon:23.886, g:0, k:0,kd:[{f:"1918-02-16",t:"1923-10-29",k:1,m:null}], d:[],
  s:[{f:"1281-01-01",t:"1795-10-24",d:"lehistan"},{f:"1795-10-24",t:"1918-02-16",d:"rusya"},{f:"1918-02-16",t:"1923-10-29",d:"litvanya"}] },
{ ad:"Šiauliai", tur:"sehir", lat:55.934, lon:23.315, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1795-10-24",d:"lehistan"},{f:"1795-10-24",t:"1918-02-16",d:"rusya"},{f:"1918-02-16",t:"1923-10-29",d:"litvanya"}] },
// ⚠️ Memel Litvanya DEĞİL: Töton/Prusya toprağıdır ve 1923 Ocak'a kadar
//    Almanya'dadır. Königsberg'in zinciri kullanıldı.
{ ad:"Klaipėda (Memel)", tur:"liman", lat:55.703, lon:21.144, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1923-10-29",d:"almanya"}] },

// ── LİTVANYA BÜYÜK DUKALIĞI'NIN DOĞUSU — birinci taksim ─────────────
{ ad:"Polotsk", tur:"sehir", lat:55.485, lon:28.786, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1772-08-05",d:"lehistan"},{f:"1772-08-05",t:"1923-10-29",d:"rusya"}] },
{ ad:"Vitebsk", tur:"sehir", lat:55.191, lon:30.206, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1772-08-05",d:"lehistan"},{f:"1772-08-05",t:"1923-10-29",d:"rusya"}] },

];
