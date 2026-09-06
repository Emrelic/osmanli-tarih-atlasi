// ÜÇ BAŞKENT — NOKTA ÖNERİSİ ÜRETECİ.
//
// 🔴 ELLE YAZMIYORUM: zincir kardeş kayıttan TÜRETİLİYOR, künye
//   penceresine karşı SINANIYOR, ve bir sınav düşerse dosya YAZILMIYOR.
//   (YONTEM §⑥ · ve kardeşin konvansiyonunu İZLE, ICAT ETME.)
//
// 🔴 BU BİR VERİ DOSYASI DEĞİL, ÖNERİ: `denetim/` altına, `ONERI-` önekiyle
//   — `yer_yama_*` deseni `_sahiplik_uygula.py`nin globuna girer ve MEVCUT
//   kayıtları güncellemek için tasarlanmıştır; bunlar YENİ nokta ve nokta
//   yazımı Oturum 4'ün kulvarı. (§11: bir glob bir ad sözleşmesidir.)
//
// kullanım: node denetim/ARAC-BASKENT-ONERI-URET.js
const fs = require("fs"), path = require("path");
process.chdir(path.dirname(__dirname));
const { execFileSync } = require("child_process");

// kardeşten türetilen zincir: [aday, kur, kardeş kaydın adı]
// zincir kuralı: kardeşin zincirinden, `kur:`tan SONRAKİ dönemleri al ve
// ilk dönemin `f:`ini `kur:`a çek.
const ADAY = [
  {
    ad: "Port-au-Prince", lat: 18.5944, lon: -72.3074, tur: "sehir", g: 1, k: 1,
    kur: "1749-01-01", kardes: "Jaragua (Taino cacicazgosu)",
    kaynak: "bulunamadı — TDV'de ARANDI (`haiti` · `orta-amerika` · `amerika` " +
      "denendi; ilk ikisi 302 ÖLÜ, `amerika` CANLI ve 75.093 kar. gövdesi " +
      "OKUNDU: «Haiti» yalnız ÜLKE olarak 2 kez geçiyor, şehir kuruluşu YOK — " +
      "§4'ün ANMA boşluğu). §4 COĞRAFÎ boşluk ⇒ akademik dayanak:",
    not: "dayanak: İKİ BAĞIMSIZ KAYNAK, ikisi de 1749'da birleşiyor. " +
      "① 'A Colony in Crisis: The Saint-Domingue Grain Shortage of 1789', " +
      "University of Maryland Libraries dijital bilimsel projesi (yazar Ariana " +
      "Castro Acuna, Dr. Sarah Benharrech gözetiminde): «Port-au-Prince is a " +
      "port and a city that was founded in 1749.» — GÖVDE OKUNDU. " +
      "② Encyclopedia of Latin American History and Culture (Scribner/Gale), " +
      "encyclopedia.com aktarması: «Established as the new colonial capital of " +
      "Saint Domingue in 1749». " +
      "⚠️ HASSASİYET: iki kaynak da YIL veriyor, GÜN VERMİYOR ⇒ §4 gereği " +
      "`1749-01-01`. Bu bir gün iddiası DEĞİL. " +
      "🔴 ÇELİŞKİ BİLDİRİLİYOR (§4⑥): 'başkent oldu' tarihi için kaynaklar " +
      "AYRIŞIYOR — 1749 (Encyclopedia of LAHC) · 1770 (World Encyclopedia) · " +
      "1786 (UMD projesi). Taraf SEÇİLMEDİ ve bu tarih veriye YAZILMADI; " +
      "kayda gereken şey KURULUŞ ve o üçünde de aynı. " +
      "⚪ Britannica ÖLÇÜLEMEDİ — HTTP 403 (§4⑤: bir HTTP kodu içerik " +
      "hakkında iddia değildir; 'yok' diye damgalanmadı).",
  },
  {
    ad: "Nueva Guatemala de la Asunción", lat: 14.6349, lon: -90.5069,
    tur: "sehir", g: 1, k: 1,
    kur: "1776-01-02", kardes: "Antigua Guatemala (Santiago de los Caballeros)",
    kaynak: "bulunamadı — TDV'de ARANDI (`guatemala` · `orta-amerika` 302 ÖLÜ; " +
      "kapsayıcı `amerika` OKUNDU: «Guatemala» 4 kez ama yalnız ülke/genel " +
      "valilik olarak, şehir kuruluşu YOK). §4 COĞRAFÎ boşluk ⇒ akademik dayanak:",
    not: "dayanak: İKİ KADEMELİ ve KADEMELERİ AYRI DAMGALI. " +
      "🟢 AY+YIL — KENDİM OKUDUM: redalyc.org açık erişimli makale " +
      "(Barrio 'La Candelaria', Ciudad de Guatemala), PDF `pypdf` ile " +
      "çıkarıldı (11 sayfa · 32.722 kar.): «since it is the second set in the " +
      "Valle de la Ermita, after the transfer of the city in January 1776». " +
      "🟡 GÜN (2 Ocak) — DEVRALDIM, DOĞRULAMADIM: Hispanic American Historical " +
      "Review (Duke University Press) 45/4 (1965) s.544, 'Economic and Social " +
      "Origins of the Guatemalan Political Parties (1773-1823)' makalesine " +
      "atfedilen pasaj: «A royal cédula on July 21, 1775, authorized movement " +
      "of the capital and its inhabitants to the Valle de la Ermita ... The " +
      "ayuntamiento established the new site formally on January 2, 1776». " +
      "🔴 MAKALEYİ AÇAMADIM — read.dukeupress.edu HTTP 403; pasajı arama " +
      "motorunun çıkardığı özetten okudum. Kaynak ADIYLA yazılı ve " +
      "izlenebilir, ama BENİM tarafımdan doğrulanmadı. " +
      "⚠️ Bir sonraki oturum makaleye erişebilirse ya DOĞRULAR ya günü " +
      "`1776-01-01`e (ay hassasiyeti) İNDİRİR. " +
      "⚪ UNESCO Dünya Mirası `whc.unesco.org/en/list/65` (Antigua Guatemala) " +
      "ÖLÇÜLEMEDİ — HTTP 403, hem WebFetch hem curl.",
  },
];

const dosyalar = JSON.parse(
  execFileSync("py", ["denetim/_girdi_listesi.py"], { encoding: "utf8" }));
const K = new Map();
for (const f of dosyalar) {
  global.window = {};
  eval(fs.readFileSync(path.join("data", path.basename(f)), "utf8"));
  for (const k of Object.keys(global.window)) if (Array.isArray(global.window[k]))
    for (const y of global.window[k]) if (typeof y.lat === "number") K.set(y.ad, y);
}
global.window = {};
eval(fs.readFileSync("data/devletler.js", "utf8"));
const OMUR = {};
for (const d of Object.keys(global.window).filter(k => Array.isArray(global.window[k]))
  .flatMap(k => global.window[k])) if (d && d.id) OMUR[d.id] = [d.f, d.t];
const g = s => s.split("-").map(Number);
const kEsit = (a, b) => { const [p, q] = [g(a), g(b)];
  for (let i = 0; i < 3; i++) if (p[i] !== q[i]) return p[i] < q[i]; return true; };
const rad = x => x * Math.PI / 180;
const km = (a, b, c, d) => {
  const h = Math.sin(rad(c - a) / 2) ** 2
    + Math.cos(rad(a)) * Math.cos(rad(c)) * Math.sin(rad(d - b) / 2) ** 2;
  return 2 * 6371 * Math.asin(Math.sqrt(h));
};

const cikti = []; let hata = 0;
for (const a of ADAY) {
  const kar = K.get(a.kardes);
  if (!kar) { console.log("🔴 kardeş yok: " + a.kardes); hata++; continue; }
  // zincir: kardeşin `kur:`tan sonraki dönemleri, ilki `kur:`a çekilerek
  const s = [];
  for (const p of kar.s) {
    if (p.t <= a.kur) continue;
    s.push({ f: s.length === 0 ? a.kur : p.f, t: p.t, d: p.d });
  }
  // ---- SINAVLAR ----
  const sorun = [];
  if (!s.length) sorun.push("zincir BOŞ");
  if (s.some(p => p.f >= p.t)) sorun.push("ters/sıfır dönem");
  if (s.slice(1).some((p, i) => s[i].t !== p.f)) sorun.push("süreksiz");
  if (s.length && s[0].f !== a.kur) sorun.push("zincir `kur:`tan başlamıyor");
  if (s.length && s[s.length - 1].t !== "1923-10-29") sorun.push("zincir 1923'te bitmiyor");
  for (const p of s) {
    if (!OMUR[p.d]) { sorun.push("künyesiz kimlik: " + p.d); continue; }
    if (!(kEsit(OMUR[p.d][0], p.f) && kEsit(p.t, OMUR[p.d][1])))
      sorun.push("künye DIŞI: " + p.d + " " + p.f + ".." + p.t
        + " (künye " + OMUR[p.d].join("..") + ")");
  }
  // 3 KM
  let en3 = null;
  for (const [, y] of K) {
    const d = km(a.lat, a.lon, y.lat, y.lon);
    if (d <= 3 && (!en3 || d < en3[0])) en3 = [d, y.ad];
  }
  if (en3) sorun.push("3 KM İÇİNDE NOKTA: " + en3[1] + " " + en3[0].toFixed(2) + " km");
  if (sorun.length) { console.log("🔴 " + a.ad + " — " + sorun.join(" · ")); hata++; continue; }
  cikti.push(Object.assign({}, a, { s }));
  console.log("🟢 " + a.ad.padEnd(32) + s.length + " dönem · 3 km'de 0 nokta · künye sınavı temiz");
  for (const p of s) console.log("      " + p.f + " → " + p.t + "  " + p.d);
}
if (hata) { console.log("\n🔴 " + hata + " kusur — ÖNERİ YAZILMADI"); process.exit(1); }

const J = {
  _NOT: "ÜÇ BAŞKENT ÖNERİSİ · AMERİKA-OKYANUSYA · koordinatör 1.MURAT " +
    "HÜDAVENDİGAR (M-3087). 🔴 BU BİR VERİ DOSYASI DEĞİL — ÖNERİ. Nokta " +
    "yazımı Oturum 4'ün kulvarı ve `data/` koşu 7b boyunca donuk. Adı " +
    "`ONERI-` ile başlıyor ki hiçbir uygulayıcının globu sahiplenmesin.",
  "🔴_SEVKIN_ONCULU_CURUDU_ONCE_BUNU_OKU": {
    sevkte_yazan: "«Port-au-Prince yoksa 1804-1923 arası bağımsız Haiti'nin " +
      "başkenti haritada Jaragua'nın peteğinden boyanıyor — bu 'eksik nokta' " +
      "değil YANLIŞ ATIF, ve §3.5.-1'in tam sınıfı.»",
    olcum: "ÇÜRÜDÜ. §2 şunu der: noktasız bölge en yakın peteğe emilir ve O " +
      "PETEĞİN SAHİBİYLE boyanır. Jaragua'nın 1804-1923 sahibi ZATEN `haiti`. " +
      "⇒ Boyanan KİMLİK doğru; eksik olan kimlik değil YER.",
    sinandi: "Beş konum ölçüldü (Port-au-Prince · Cap-Haïtien · Les Cayes · " +
      "Nueva Guatemala · Nukuʻalofa): BEŞİNDE DE en yakın AYNI kimlikli nokta, " +
      "en yakın FARKLI kimlikli noktadan daha yakın. Port-au-Prince: aynı 35,6 " +
      "km (Jaragua) ↔ farklı 250,8 km (Santo Domingo). Haiti toprağı ızgarası " +
      "(560 hücre): en yakın nokta `haiti` %80 · `dominik-cumhuriyeti` **0 " +
      "hücre (%0)**.",
    dogru_sinif: "🟢 KAPSAM/TAMLIK eksiği — üç ulusal başkent atlasta yok. " +
      "🔴 §3.5.-1 YANLIŞ ATIF DEĞİL — yanlış bir devlet boyanmıyor. " +
      "Geriye kalan gerçek etki: peteğin MERKEZİ yerinden kaymış, yani boyanan " +
      "gövdenin BİÇİMİ gerçek toprağa göre kayıyor — SAHİBİ değil.",
    kimin_kusuru: "Öncülü BEN verdim (M-3086) ve `⚪ ÖLÇMEDİM` diye " +
      "damgalamıştım; sevk damgayı düşürüp kesinleştirdi. Damga işini yarı " +
      "yaptı. Doğrusu: öneriden ÖNCE ölçmeliydim. Şimdi ölçüldü.",
    oncelige_etkisi: "Bu bir DOĞRULUK kalemi değil TAMLIK kalemi ⇒ " +
      "`ONCELIK.md`in çöl seyyahı sıralamasında yeri değişir. Kararı " +
      "koordinatöre bırakıyorum; iş YAPILDI ve gerekçesi DÜZELTİLDİ.",
  },
  durum: "🔒 data/ ve arac/ DONUK (koşu 7b) — UYGULANMADI",
  "3_KM_KURALI": "🟢 Üç adayın üçünde de 3 km içinde 0 nokta (3805 noktalık " +
    "evrende ölçüldü). En yakınlar: Port-au-Prince → Jaragua 35,6 km · Nueva " +
    "Guatemala → Antigua 25,4 km · Nukuʻalofa → Lapaha 10,2 km. Mükerrer " +
    "şüphesi YOK; ayrıca üçünün de zaman çizgisi kardeşinden FARKLI " +
    "(§11: 3 km bir yasak değil bir ŞÜPHE EŞİĞİ, şartı zaman çizgilerinin AYNI olması).",
  ZINCIR_KONVANSIYONU: "Zincirler ICAT EDİLMEDİ, kardeş kayıttan TÜRETİLDİ: " +
    "Port-au-Prince ← Jaragua · Nueva Guatemala ← Antigua Guatemala. " +
    "Kardeşin `kur:`tan sonraki dönemleri alındı, ilkinin `f:`i `kur:`a çekildi. " +
    "Üreteç süreksizlik · ters dönem · künye penceresi · künyesiz kimlik · " +
    "3 km sınavlarını koşar ve biri düşerse dosyayı YAZMAZ.",
  noktalar: cikti,
  "🔴_NUKUALOFA_YAZILMADI": {
    sebep: "④ şartı: «`kur:` için kaynak yoksa yazma».",
    arandi: "TDV `tonga` 302 ÖLÜ; kapsayıcı `amerika` gövdesinde «Tonga» " +
      "**0 kez** geçiyor. Akademik alanlarda arandı (ANU Press · Hawaii " +
      "ScholarSpace · JSTOR · Cambridge · Taylor & Francis): Tonga krallığı ve " +
      "Tupou hânedanı için gövde VAR, ama Nukuʻalofa'nın kuruluş/başkent " +
      "OLUŞ tarihini veren akademik kaynak BULUNAMADI.",
    curuyen_kaynaklar: "Bulunan tarihler §4'ün 🔴 listesinden geliyor " +
      "(Vikipedi · otel ve turizm siteleri) ve KENDİ ARALARINDA ÇELİŞİYOR: " +
      "1845 (Tāufaʻāhau'nun merkezi yapması) · 1851 (başkent ilânı) · ~1795 " +
      "(Tuʻi Kanokupolu ikametgâhı). Üçünden birini seçmek §4'ü çiğnerdi.",
    ayrica: "§2 gerekçesi burada zaten EN ZAYIF: Lapaha 10,2 km ötede ve " +
      "1845-12-04'ten sonra AYNI kimliği (`tonga-kralligi`) taşıyor.",
    damga: "🔴 `bulunamadı` — arandı, akademik kaynakta yok. `okumadım` DEĞİL.",
  },
  OLCMEDIKLERIM: {
    petek_bicimi: "⚪ Merkez kaymasının gövdenin biçimini NE KADAR " +
      "değiştirdiği ölçülmedi — gerçek motor kıyı/göl/nehir yaslamasıyla " +
      "çalışır ve benim ızgara taklidim yalnız YÖN gösterir, ÖLÇÜ vermez.",
    guatemala_gunu: "🟡 `1776-01-02`nin günü DEVRALINDI, doğrulanmadı " +
      "(makale 403). Ay+yıl KENDİM okudum.",
    baskent_olus_tarihleri: "⚪ Port-au-Prince'in BAŞKENT OLDUĞU tarih " +
      "kaynaklarda çelişiyor (1749/1770/1786) ve veriye YAZILMADI — " +
      "atlas başkentliği değil TASARRUFU boyuyor, o yüzden gerekmiyor.",
  },
};
fs.writeFileSync("denetim/ONERI-BASKENT-AMERIKA-0907.json",
  JSON.stringify(J, null, 2) + "\n", "utf8");
console.log("\n-> denetim/ONERI-BASKENT-AMERIKA-0907.json (" + cikti.length + " nokta önerisi)");
