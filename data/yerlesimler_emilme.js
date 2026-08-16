// ==========================================================================
// EMİLME PARTİSİ — Doğu Afrika · Kongo havzası · Yeni Gine
// Sahibi: NOKTA EMİLME oturumu. Şartname: oturumlar/NOKTA-EMILME.md
//
// 🔴 Bu dosya BOŞ olarak koordinatör tarafından açıldı ve DÖRT YERE
// bağlandı (girdi.py · denetle.py KUYRUK · index.html script · concat
// zinciri) — çünkü BAĞLANMAMIŞ DOSYA, YAZILMAMIŞ DOSYADIR.
//
// Niçin var: 8 Ağustos 2026 emilme ölçümü — noktasız 5°×5° hücreleri
// kimin boyadığı ölçüldü ve üç yanlış sahip çıktı:
//   banda-adalari    573.188 km²  (kendisi ~180 km²)
//   somali           628.526 km²  (beş tarihte de AYNI sayı)
//   ingiltere 1900 3.150.758 km²  (Kongo havzası)
//
// ⚠️ Bu partinin tehlikesi boşluk DOLDURMAK: üç coğrafyada da merkezî
// devlet ya yoktu ya gevşekti. `kasitli_bosluk:` bir başarısızlık
// değil bir HÜKÜMDÜR — ama tavanı yükseltir, önce koordinatöre söyle.
// ==========================================================================
window.YERLESIMLER_EMILME = [

// ---------- ① DOĞU AFRİKA — svahili kıyısı, `somali`nin 628.526 km²'si ----------
{ ad:"Kilwa Kisiwani (Kilve)", tur:"sehir", lat:-8.9795, lon:39.4862, g:2, k:0,
  s:[{f:"1281-01-01",t:"1505-01-01",d:"svahili-sehirleri"},{f:"1505-01-01",t:"1698-12-13",d:"portekiz"},{f:"1698-12-13",t:"1923-10-29",d:"umman-zengibar"}] },
{ ad:"Zanzibar (Zengibar)", tur:"sehir", lat:-6.1659, lon:39.1917, g:2, k:1,
  s:[{f:"1281-01-01",t:"1503-01-01",d:"svahili-sehirleri"},{f:"1503-01-01",t:"1698-12-13",d:"portekiz"},{f:"1698-12-13",t:"1923-10-29",d:"umman-zengibar"}] },
{ ad:"Mombasa", tur:"liman", lat:-4.0402, lon:39.6794, g:1, k:1,
  s:[{f:"1281-01-01",t:"1593-01-01",d:"svahili-sehirleri"},{f:"1593-01-01",t:"1698-12-13",d:"portekiz"},{f:"1698-12-13",t:"1923-10-29",d:"umman-zengibar"}] },
{ ad:"Malindi", tur:"liman", lat:-3.2192, lon:40.1169, g:1, k:0,
  s:[{f:"1281-01-01",t:"1500-01-01",d:"svahili-sehirleri"},{f:"1500-01-01",t:"1698-12-13",d:"portekiz"},{f:"1698-12-13",t:"1923-10-29",d:"umman-zengibar"}] },
{ ad:"Sofala", tur:"liman", lat:-20.1667, lon:34.7500, g:1, k:0,
  s:[{f:"1281-01-01",t:"1505-01-01",d:"svahili-sehirleri"},{f:"1505-01-01",t:"1923-10-29",d:"portekiz"}] },
{ ad:"Mozambik Adası", tur:"liman", lat:-15.0342, lon:40.7358, g:2, k:0,
  kur:"1507-01-01",
  s:[{f:"1507-01-01",t:"1923-10-29",d:"portekiz"}] },
{ ad:"Angoche", tur:"liman", lat:-16.2325, lon:39.9086, g:0, k:0,
  s:[{f:"1281-01-01",t:"1600-01-01",d:"svahili-sehirleri"},{f:"1600-01-01",t:"1923-10-29",d:"portekiz"}] },
{ ad:"Pate", tur:"liman", lat:-2.1010, lon:41.0500, g:0, k:0,
  s:[{f:"1281-01-01",t:"1600-01-01",d:"svahili-sehirleri"},{f:"1600-01-01",t:"1698-12-13",d:"portekiz"},{f:"1698-12-13",t:"1923-10-29",d:"umman-zengibar"}] },
{ ad:"Lamu", tur:"liman", lat:-2.2613, lon:40.9129, g:0, k:0,
  s:[{f:"1281-01-01",t:"1600-01-01",d:"svahili-sehirleri"},{f:"1600-01-01",t:"1698-12-13",d:"portekiz"},{f:"1698-12-13",t:"1923-10-29",d:"umman-zengibar"}] },
{ ad:"Quelimane", tur:"liman", lat:-17.8786, lon:36.8883, g:0, k:0,
  kur:"1544-01-01",
  s:[{f:"1544-01-01",t:"1923-10-29",d:"portekiz"}] },
{ ad:"Bagamoyo", tur:"liman", lat:-6.4431, lon:38.9006, g:0, k:0,
  s:[{f:"1281-01-01",t:"1698-12-13",d:"svahili-sehirleri"},{f:"1698-12-13",t:"1923-10-29",d:"umman-zengibar"}] },
{ ad:"Tanga", tur:"liman", lat:-5.0689, lon:39.0988, g:0, k:0,
  s:[{f:"1281-01-01",t:"1698-12-13",d:"svahili-sehirleri"},{f:"1698-12-13",t:"1923-10-29",d:"umman-zengibar"}] },

// ---------- ② KONGO HAVZASI — `ingiltere` 1900'ün 3.150.758 km²'si ----------
// Mevcut kimliklerle yazılabilenler. Loango/Luba/Kuba künye önerisi
// koordinatörde — onaylanınca bu bölüme eklenecek.
{ ad:"Mbanza-Kongo (São Salvador)", tur:"sehir", lat:-6.27, lon:14.24, g:2, k:1,
  kur:"1390-01-01", kasitli_bosluk:true,bos:"devletsiz", neden:"kongo-kralligi künyesi 1390'da başlıyor; öncesinde bu noktada merkezi bir devlet kaydı yok",
  s:[{f:"1390-01-01",t:"1914-01-01",d:"kongo-kralligi"},{f:"1914-01-01",t:"1923-10-29",d:"portekiz"}] },
{ ad:"Soyo", tur:"liman", lat:-6.135, lon:12.369, g:1, k:0,
  kur:"1390-01-01", kasitli_bosluk:true,bos:"devletsiz", neden:"kongo-kralligi künyesi 1390'da başlıyor; öncesinde bu noktada merkezi bir devlet kaydı yok",
  s:[{f:"1390-01-01",t:"1885-01-01",d:"kongo-kralligi"},{f:"1885-01-01",t:"1923-10-29",d:"belcika"}] },
{ ad:"Matadi", tur:"liman", lat:-5.818, lon:13.460, g:0, k:0,
  kur:"1390-01-01", kasitli_bosluk:true,bos:"devletsiz", neden:"kongo-kralligi künyesi 1390'da başlıyor; öncesinde bu noktada merkezi bir devlet kaydı yok",
  s:[{f:"1390-01-01",t:"1885-01-01",d:"kongo-kralligi"},{f:"1885-01-01",t:"1923-10-29",d:"belcika"}] },
{ ad:"Kabasa", tur:"sehir", lat:-9.30, lon:15.15, g:1, k:1,
  kur:"1500-01-01", kasitli_bosluk:true,bos:"veri-yok", neden:"ndongo künyesi 1500'de başlıyor (ÖLÇÜLDÜ: 1500/1518 muhtemelen Portekiz'in ilk BELGELENMİŞ teması, krallığın kendisi muhtemelen daha erken Kongo'ya bağlı bir eyalet olarak vardı — net bir alternatif tarih kaynaklarda YOK, künyeye dokunmadım)",
  s:[{f:"1500-01-01",t:"1671-01-01",d:"ndongo"},{f:"1671-01-01",t:"1923-10-29",d:"portekiz"}] },
{ ad:"Luanda", tur:"liman", lat:-8.84, lon:13.23, g:2, k:0,
  kur:"1575-01-01",
  s:[{f:"1575-01-01",t:"1923-10-29",d:"portekiz"}] },
{ ad:"Musumba", tur:"sehir", lat:-8.30, lon:22.42, g:1, k:1,
  kur:"1665-01-01", kasitli_bosluk:true,bos:"devletsiz", neden:"lunda-imparatorlugu künyesi 1665'te başlıyor; öncesinde bu noktada merkezi bir devlet kaydı yok",
  s:[{f:"1665-01-01",t:"1887-01-01",d:"lunda-imparatorlugu"},{f:"1887-01-01",t:"1923-10-29",d:"belcika"}] },
{ ad:"Boma", tur:"liman", lat:-5.85, lon:13.05, g:0, k:0,
  kur:"1885-01-01", kasitli_bosluk:true,bos:"devletsiz", neden:"kolonyal dönem öncesi bu spesifik nehir ağzı noktasında merkezi bir devlet kaydı yok",
  s:[{f:"1885-01-01",t:"1923-10-29",d:"belcika"}] },
{ ad:"Kisangani (Stanleyville)", tur:"sehir", lat:0.515, lon:25.191, g:0, k:0,
  kur:"1885-01-01", kasitli_bosluk:true,bos:"devletsiz", neden:"kolonyal dönem öncesi bu spesifik iç-nehir noktasında merkezi bir devlet kaydı yok",
  s:[{f:"1885-01-01",t:"1923-10-29",d:"belcika"}] },
{ ad:"Loango (Buali)", tur:"sehir", lat:-4.6546, lon:11.8050, g:1, k:1,
  kur:"1550-01-01",
  s:[{f:"1550-01-01",t:"1883-01-01",d:"loango"},{f:"1883-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}] },
{ ad:"Mushenge (Kuba)", tur:"sehir", lat:-5.42, lon:20.85, g:1, k:0,
  kur:"1625-01-01",
  s:[{f:"1625-01-01",t:"1900-01-01",d:"kuba"},{f:"1900-01-01",t:"1923-10-29",d:"belcika"}] },
{ ad:"Kabongo (Luba)", tur:"sehir", lat:-6.5, lon:25.5, g:1, k:0,
  kur:"1585-01-01",
  s:[{f:"1585-01-01",t:"1889-01-01",d:"luba"},{f:"1889-01-01",t:"1923-10-29",d:"belcika"}] },

// ---------- ③ YENİ GİNE — `banda-adalari`nin 573.188 km²'si ----------
// okyanusya bölgesinde Yeni Gine'ye özgü hiç künye yoktu; ihtiyaç YOKTU —
// mevcut kolonyal kimlikler (hollanda-dogu-hint, almanya, ingiltere,
// avustralya) coğrafyayı doğru kapsıyor. Yeni künye ÖNERİLMEDİ.
//
// 🔴 TASARIM KARARI (kullanıcının doğrudan sorduğu soru budur — bugün
// Papua'yı özellikle merak etti): Yeni Gine'nin kolonyal tarihi TAM OLARAK
// bu adanın niçin "boş" GÖRÜNDÜĞÜNÜN cevabıdır — kolonyal güçler yalnız
// KIYI ŞERİDİNDE gerçek idare kurdu (liman kentleri, misyon istasyonları,
// ticaret postaları); adanın devasa İÇ KESİMİ (dağlık Highlands) 1930'lara
// kadar dış dünyayla HİÇ TEMAS ETMEDİ — ne yerli bir merkezi devlet ne
// kolonyal idare oraya ulaştı. Bu yüzden BEŞ kıyı limanı GERÇEK kolonyal
// sahiplerle yazıldı, ama İÇ KESİM tek bir nokta yerine DÖRT dolgu
// noktasıyla (boş `d:[]`, Sahra/Rub'ul Hâlî kalıbı) açıkça KAPATILDI —
// amaç kıyı noktalarının Voronoi hücrelerinin komşu boşluğu "yanlışlıkla"
// yutmasını (§2'nin tarif ettiği tam o hata) ÖNLEMEK. Sonuç: harita kıyıyı
// doğru renklerle, iç kesimi ise BİLEREK BOŞ gösterecek — bu bir eksiklik
// değil, 1923'e kadar gerçekten böyleydi.
{ ad:"Jayapura (Hollandia)", tur:"liman", lat:-2.53, lon:140.72, g:1, k:0,
  kur:"1898-01-01",
  s:[{f:"1898-01-01",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Manokwari", tur:"liman", lat:-0.86, lon:134.06, g:0, k:0,
  kur:"1898-01-01",
  s:[{f:"1898-01-01",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Port Moresby", tur:"liman", lat:-9.44, lon:147.18, g:1, k:0,
  kur:"1884-11-06", kasitli_bosluk:true,bos:"devletsiz", neden:"yerli Motu köyleri çok daha önce vardı (balıkçı/çömlekçi köyleri, Hiri ticaret ağının bir ucu) ama merkezi/kayıtlı bir DEVLET hiç olmadı; 1884'te İngiliz himayesi ilan edilene kadar bu nokta hiçbir egemenliğe bağlanmıyor — boşluk veri eksikliği değil, gerçek siyasi boşluk",
  s:[{f:"1884-11-06",t:"1906-09-01",d:"ingiltere"},{f:"1906-09-01",t:"1923-10-29",d:"avustralya"}] },
{ ad:"Madang", tur:"liman", lat:-5.22, lon:145.79, g:0, k:0,
  kur:"1884-11-03", kasitli_bosluk:true,bos:"devletsiz", neden:"1884 Alman ilhakından önce bu kıyı şeridinde yerli köyler dışında merkezi bir devlet yoktu — boşluk veri eksikliği değil, gerçek siyasi boşluk",
  s:[{f:"1884-11-03",t:"1914-09-17",d:"almanya"},{f:"1914-09-17",t:"1923-10-29",d:"avustralya"}] },
{ ad:"Finschhafen", tur:"liman", lat:-6.60, lon:147.85, g:0, k:0,
  kur:"1884-11-03", kasitli_bosluk:true,bos:"devletsiz", neden:"1884 Alman ilhakından önce bu kıyı şeridinde yerli köyler dışında merkezi bir devlet yoktu — boşluk veri eksikliği değil, gerçek siyasi boşluk",
  s:[{f:"1884-11-03",t:"1914-09-17",d:"almanya"},{f:"1914-09-17",t:"1923-10-29",d:"avustralya"}] },
// İÇ KESİM — DÖRT dolgu noktası (Rub'ul Hâlî/Sahra kalıbı: boş `d:[]`,
// `kasitli_bosluk` alanı YOK çünkü bu alan `kur:`e eşlenir ve buradaki
// noktalar zaten hep "vardı", yalnız hiç merkezi devlete bağlanmadı).
// Amaç: kıyı limanlarının peteğinin devasa iç kesimi emmesini durdurmak.
{ ad:"Yeni Gine İç Yaylaları (Merkez — Mount Hagen)", tur:"bolge", lat:-5.86, lon:144.23, g:0, k:0, d:[], kasitli_bosluk:true, bos:"kabile", neden:"Yeni Gine iç yaylaları, 20. yy'a kadar dış dünyayla teması olmayan, klan temelli kabile toplumlarının (ör. Hagen çevresi halkları) yaşadığı bölgedir; devlet yapısı hiç oluşmadı." },
{ ad:"Yeni Gine İç Yaylaları (Batı — Baliem Vadisi)", tur:"bolge", lat:-4.10, lon:138.94, g:0, k:0, d:[], kasitli_bosluk:true, bos:"kabile", neden:"Baliem Vadisi, Dani halkının klan temelli kabile toplumuyla yaşadığı, 1938'e kadar dış dünyaca bilinmeyen bir bölgedir; devlet yapısı hiç oluşmadı." },
{ ad:"Yeni Gine İç Kesimi (Kuzey — Sepik Havzası)", tur:"bolge", lat:-4.50, lon:143.50, g:0, k:0, d:[], kasitli_bosluk:true, bos:"kabile", neden:"Sepik Havzası, çok sayıda dilsel/klan grubunun kabile temelli yaşadığı, sömürge öncesi devlet yapısı bilinmeyen bir bölgedir." },
{ ad:"Yeni Gine İç Kesimi (Güney — Fly Nehri Bataklıkları)", tur:"bolge", lat:-8.00, lon:141.50, g:0, k:0, d:[], kasitli_bosluk:true, bos:"kabile", neden:"Fly Nehri bataklıkları çevresi, dış dünyayla teması çok geç kurulmuş, klan temelli kabile toplumlarının yaşadığı bir bölgedir." },

];
