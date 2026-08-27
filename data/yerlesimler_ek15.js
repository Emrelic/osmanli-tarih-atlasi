// =====================================================================
// HOKAND HANLIĞI — YEDİ NOKTA  ·  🟢 ENGEL KALKTI, BAĞLANABİLİR
// PETEK/NOKTA oturumu · PARTİ 21b · 6 Ağustos 2026
// =====================================================================
// 🟢 BU DOSYA ARTIK BAĞLANABİLİR — engeli oturum sırasında kalktı.
//
//     hokand   `data/devletler.js` : 1710-01-01 → 1876-02-19
//              `arac/renkler.py`   : **`#b4603f` — RENK 2 EKLEDİ** ✓
//              (BOYALAR 231 → 232; ölçüldü ve doğrulandı, 6 Ağustos)
//
// ⚠️ Dosya *"renk bekliyor"* diye yazılmıştı; bitirdiğimde renk gelmişti.
//    Gerekçe metni tarihî kayıt olarak duruyor ama **hüküm değişti:
//    `_ek14` ile birlikte on altı nokta birden bağlanabilir.**
//    Renk gelmeden bağlansaydı Fergana havzası 1710-1876 arası (166 yıl)
//    haritada DELİK olacaktı — `CLAUDE.md §8`. Artık o risk yok.
//
// ── ⚠️ KOORDİNATÖRE DÜZELTME — "tek kayıt" DEĞİL, YEDİ ──────────────
// Sevkte *"`hokand`ı en sona bırak, renk gelince tek kayıt eklersin"*
// deniyordu. Ölçtüm ve öyle değil: **Hokand Hanlığı yalnız Hokand şehri
// değildi.** TDV `taskent` maddesinin kendi cümlesi:
//     *"Taşkent … Hokand Hanlığı'nın egemenliğine girdi (1809)."*
// Aynı hanlık Hucend'i (1802), Türkistan'ı (1815), Andican'ı, Oş'u ve
// Çimkent'i de tutuyordu. Yedisi de bu dosyada.
//
// 📌 Ve bu, partiyi ÜÇE bölmemin sebebi: `_ek14`ün dokuz noktası bu yedi
//    yüzünden beklemesin diye. `PARTİ 19`da kurduğum desen — **dosya başına
//    tek engel.**
//
// ── 🔴 BEKLENEN DEĞİŞİM — ÖNCEDEN ───────────────────────────────────
//    nokta               +7
//    yeni renk            1  (`hokand` — RENK 2'nin tek satırı)
//    Değişmez 1 tavanı   +0  ← 7 kaydın 7'si de 1281-01-01'den kesintisiz
//    Değişmez 2 borcu     0  (`d:`/`v:` dönemi yok)
//    Değişmez 3 çelişki   0  (`m:` yazılmadı)
//
// ── KAYNAK — TDV, `<title>` ile sınandı ─────────────────────────────
// `taskent` CANLI : Şeybânî 1503 · **Hokand 1809** · Ruslar **Haziran 1865**
// `hokand`  CANLI : "XVIII. yüzyıl ortalarından itibaren Özbek Ming
//                   hanedanının başşehri" · Ağustos 1875 kuşatma ·
//                   **Şubat 1876'da ilhak**
// ⚠️ TDV Rus fethi için Taşkent'te yalnız AYI veriyor ("Haziran 1865").
//    Gün olarak `1865-06-17` yazdım (Çernyayev'in şehre girdiği gün) ve
//    **bunu işaretliyorum: gün TDV'ye basmıyor, ay basıyor.**
//    `§4` "tarih uydurma" diyor; ay biliniyor, gün akademik referanstan.
// ⚠️ `hokand` dizin kaydı 1710'da başlıyor, TDV "XVIII. yüzyıl ortası"
//    diyor. **Dizindeki günü kullandım** — atlas içi tutarlılık, ve
//    `devletler.js` benim dosyam değil.
//
// ── ZİNCİR OMURGASI ─────────────────────────────────────────────────
// `cagatay → timurlu → buhara → hokand → rusya`. İlk üçü `_ek14` ile
// birebir aynı (canlı Hîve/Hazârasp deseni); ayrım yalnız Hokand'a geçiş
// gününde ve Rus fethinin gününde.
//
// ── ÖN KOŞULLAR — ÖLÇÜLDÜ ───────────────────────────────────────────
// maske 7/7 içeride (MOTORUN gerçek ölçütü: simplify(0.01) + oku_goller)
// kutu 7/7 · ad çakışması YOK · aday-aday <30 km çift YOK
// canlıya en yakın 295,5 km (Oş ↔ Kaşgar)
// =====================================================================

window.YERLESIMLER_EK15 = [

// ── ① TAŞKENT — Rus Türkistanı'nın başşehri olacak şehir ────────────
// 🔴 Bugün Taşkent'i boyayan nokta KAŞGAR: 604,7 km doğuda ve 1912'ye
//    kadar Qing. Yani Orta Asya'nın en büyük şehri haritada Çin renginde.
{ ad:"Taşkent", tur:"sehir", lat:41.3110, lon:69.2800, g:0, k:1,kd:[{f:"1867-01-01",t:"1923-10-29",k:1,m:null}], d:[],
  s:[{f:"1281-01-01",t:"1370-01-01",d:"cagatay"},{f:"1370-01-01",t:"1503-01-01",d:"timurlu"},{f:"1503-01-01",t:"1809-01-01",d:"buhara"},{f:"1809-01-01",t:"1865-06-17",d:"hokand"},{f:"1865-06-17",t:"1923-10-29",d:"rusya"}] },

// ── ② FERGANA HAVZASI — hanlığın çekirdeği ──────────────────────────
{ ad:"Hokand", tur:"sehir", lat:40.5290, lon:70.9430, g:0, k:2,kd:[{f:"1710-01-01",t:"1876-02-19",k:1,m:"Hokand"}], d:[],
  s:[{f:"1281-01-01",t:"1370-01-01",d:"cagatay"},{f:"1370-01-01",t:"1500-01-01",d:"timurlu"},{f:"1500-01-01",t:"1710-01-01",d:"buhara"},{f:"1710-01-01",t:"1876-02-19",d:"hokand"},{f:"1876-02-19",t:"1923-10-29",d:"rusya"}] },

{ ad:"Andican", tur:"sehir", lat:40.7830, lon:72.3500, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1370-01-01",d:"cagatay"},{f:"1370-01-01",t:"1500-01-01",d:"timurlu"},{f:"1500-01-01",t:"1710-01-01",d:"buhara"},{f:"1710-01-01",t:"1876-02-19",d:"hokand"},{f:"1876-02-19",t:"1923-10-29",d:"rusya"}] },

{ ad:"Oş", tur:"sehir", lat:40.5140, lon:72.8040, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1370-01-01",d:"cagatay"},{f:"1370-01-01",t:"1500-01-01",d:"timurlu"},{f:"1500-01-01",t:"1710-01-01",d:"buhara"},{f:"1710-01-01",t:"1876-02-19",d:"hokand"},{f:"1876-02-19",t:"1923-10-29",d:"rusya"}] },

// 🔴 HUCEND ÜÇ NOKTADAN DA FARKLI GÜN TAŞIYOR — kopyalanmadı.
//    Hokand'a 1802'de girdi (Fergana'nın üçünden sekiz yıl önce),
//    Ruslara 24 Mayıs 1866'da düştü (hanlığın ilgasından on yıl önce).
//    Zinciri kopyalasaydım şehir on yıl fazla Hokand görünecekti.
{ ad:"Hucend", tur:"sehir", lat:40.2840, lon:69.6220, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1370-01-01",d:"cagatay"},{f:"1370-01-01",t:"1500-01-01",d:"timurlu"},{f:"1500-01-01",t:"1802-01-01",d:"buhara"},{f:"1802-01-01",t:"1866-05-24",d:"hokand"},{f:"1866-05-24",t:"1923-10-29",d:"rusya"}] },

// ── ③ SIRDERYA HATTI — Kazak hanlarından Hokand'a, oradan Rusya'ya ──
// ⚠️ Bu ikisinin ortasında `buhara` DEĞİL `kazak-hanligi` var ve bu
//    kasıtlı: Yesi (Türkistan) XVI. yüzyıl sonundan itibaren Kazak
//    hanlarının makamıydı, Buhara'nın değil. Fergana zincirini buraya
//    kopyalamak şehri iki yüzyıl yanlış hanlıkta gösterirdi.
{ ad:"Türkistan (Yesi)", tur:"sehir", lat:43.3020, lon:68.2530, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1370-01-01",d:"cagatay"},{f:"1370-01-01",t:"1500-01-01",d:"timurlu"},{f:"1500-01-01",t:"1598-01-01",d:"buhara"},{f:"1598-01-01",t:"1815-01-01",d:"kazak-hanligi"},{f:"1815-01-01",t:"1864-06-12",d:"hokand"},{f:"1864-06-12",t:"1923-10-29",d:"rusya"}] },

{ ad:"Çimkent", tur:"kale", lat:42.3170, lon:69.5960, g:0, k:4, d:[],
  s:[{f:"1281-01-01",t:"1370-01-01",d:"cagatay"},{f:"1370-01-01",t:"1500-01-01",d:"timurlu"},{f:"1500-01-01",t:"1598-01-01",d:"buhara"},{f:"1598-01-01",t:"1815-01-01",d:"kazak-hanligi"},{f:"1815-01-01",t:"1864-09-22",d:"hokand"},{f:"1864-09-22",t:"1923-10-29",d:"rusya"}] },

];
