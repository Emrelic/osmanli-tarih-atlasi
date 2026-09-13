// ARAC-HALKA-KRONOLOJI-TURET-0913 — HALKA-KRONOLOJI · 13 Eylül 2026
// ADIM 2-3 · KRONOLOJİ MADDESİNDEN KATI TÜRETME. Bir madde ancak BEŞ şartın BEŞİ de tutarsa tanıklık olur:
//  (a) TEK YER   yer_id havuzda TEK kayda çözülür; o yerin adı tanıklık cümlesinde geçer; aynı cümlede
//                BAŞKA bir yerleşim adı geçmez; ad bir devlet/bölge kelimesinin parçası değildir (X Hanlığı).
//  (b) AÇIK DEVLET  kazanan/tutan devlet cümlede ADIYLA ve hâl ekiyle yön belli biçimde geçer
//                (X'e geçti · X tarafından alındı · X hâkimiyetine girdi · X orduları ele geçirdi).
//                Dosya adı, `k:fetih` geleneği, kişi adı (Fatih, Timur) KULLANILMAZ.
//  (c) KAYNAK    `kaynak` dolu; bulunamadı/ölçülemedi/okunmadı değil; atlas/veri/"standart" atfı değil.
//  (d) HASSASİYET `gun` ya da `t` biçiminden; gün EKLENMEZ; ic_not'ta atlas/hizalama ⇒ yıl;
//                kaynakta "GÜN DOĞRULANMADI" ⇒ yıl; `gun` ile `t` çelişirse ATLA.
//  (e) FİİL      cümle alındı/fethedildi/ilhak/terk/devir/teslim/geçti der; kuşatma-akın-sefer-yağma
//                ya da olumsuz (alamadı, kuşatmayı kaldırdı) ⇒ ATLA; cümlede madde yılından BAŞKA yıl ⇒ ATLA.
// ⚠️ Atlasın dönem kaydı hiçbir adımda OKUNMAZ (CLAUDE.md §4). Künye penceresi yalnız ad→id eşlemesinde.
// Kullanım: node denetim/ARAC-HALKA-KRONOLOJI-TURET-0913.js [--yaz] [--ornek N] [--json yol]
//   --yaz     data/kaynakli_halka_kronoloji.js üretir
//   --ornek N tohum 20260913 ile N tanıklık çeker (mulberry32), tam metinle basar
const fs = require("fs"), path = require("path");
const L = require("./ARAC-HALKA-KRONOLOJI-YUKLE-0913.js");
const norm = L.norm;
const { hepsi } = L.maddeler();
const { ix: yerIx, Y } = L.yerlesimler();
const { D, ix: kunye } = L.devletler();
const arg = process.argv.slice(2);

// ── ① DEVLET AD SÖZLÜĞÜ (normalleştirilmiş kök → aday id'ler; tarih penceresiyle TEK id seçilir) ──
// Kasıtlı DIŞARIDA: kişi adları · şehirle çakışan devlet adları (Karaman, Aydın, Napoli, Milano,
// Buhara, Cezayir, Tunus, Kırım, Mısır-bölge) · "Leh" (lehine) · "Haçlı"/"Kutsal İttifak" (devlet değil).
const SOZLUK = [
  ["osmanli", ["osmanli"]], ["bizans", ["bizans"]], ["venedik", ["venedik"]], ["safevi", ["safevi"]],
  ["avusturya", ["habsburg", "avusturya-cumhuriyet"]], ["habsburg", ["habsburg"]],
  ["rusya", ["rusya", "sovyet-rusya"]], ["rus", ["rusya", "sovyet-rusya"]], ["moskova knezligi", ["moskova"]], ["moskova buyuk", ["moskova"]],
  ["ingiltere", ["ingiltere"]], ["ingiliz", ["ingiltere"]], ["britanya", ["ingiltere"]],
  ["fransa", ["fransa", "fransa-cumhuriyet"]], ["fransiz", ["fransa", "fransa-cumhuriyet"]],
  ["ispanya", ["ispanya"]], ["ispanyol", ["ispanya"]], ["kastilya", ["kastilya"]], ["aragon", ["aragon"]],
  ["portekiz", ["portekiz"]], ["memluk", ["memluk"]], ["macaristan", ["macaristan"]], ["macar", ["macaristan"]],
  ["lehistan", ["lehistan"]], ["polonya", ["polonya-erken", "lehistan", "polonya"]],
  ["ceneviz", ["cenova"]], ["cenova cumhuriyeti", ["cenova"]],
  ["karakoyunlu", ["karakoyunlu"]], ["akkoyunlu", ["akkoyunlu"]], ["timurlu", ["timurlu"]], ["celayir", ["celayirli"]],
  ["ilhanli", ["ilhanli"]], ["altin orda", ["altinorda"]], ["karamanogullari", ["karaman"]], ["karamanoglu", ["karaman"]],
  ["dulkadirogullari", ["dulkadir"]], ["dulkadirli", ["dulkadir"]], ["germiyanogullari", ["germiyan"]], ["aydinogullari", ["aydin"]],
  ["menteseogullari", ["mentese"]], ["candarogullari", ["candar"]], ["isfendiyarogullari", ["candar"]], ["eretna", ["eretna"]],
  ["hamidogullari", ["hamid"]], ["tekeogullari", ["teke"]], ["selcuklu", ["selcuklu"]], ["trabzon rum", ["trabzon-rum"]],
  ["qing", ["qing-hanedani"]], ["cing hanedani", ["qing-hanedani"]], ["ming", ["ming-hanedani"]], ["yuan", ["yuan-hanedani"]],
  ["hafsi", ["hafsi"]], ["merini", ["merini"]], ["vehhabi", ["suud-birinci", "suud-ikinci"]], ["suud", ["suud-birinci", "suud-ikinci", "suud-ucuncu"]],
  ["katalan", ["katalan"]], ["papalik", ["papalik"]], ["italya", ["italya"]], ["italyan", ["italya"]],
  ["yunanistan", ["yunanistan"]], ["yunan", ["yunanistan"]], ["bulgaristan", ["bulgar-carligi", "bulgaristan-prensligi", "bulgaristan-kralligi"]],
  ["bulgar", ["bulgar-carligi", "bulgaristan-prensligi", "bulgaristan-kralligi"]],
  ["sirbistan", ["sirbistan-nemanjic", "sirp-despotlugu", "sirbistan-prensligi", "sirbistan-kralligi"]], ["sirp", ["sirbistan-nemanjic", "sirp-despotlugu", "sirbistan-prensligi", "sirbistan-kralligi"]],
  ["isvec", ["isvec-birlik-oncesi", "isvec"]], ["prusya", ["prusya"]], ["hollanda", ["hollanda"]], ["felemenk", ["hollanda"]],
  ["babur", ["babur-imparatorlugu"]], ["kacar", ["kacar"]], ["afsar", ["afsar"]], ["zend", ["zend"]], ["durrani", ["afgan-durrani"]],
  ["afgan", ["galzay", "afgan-durrani", "afganistan"]], ["hive hanligi", ["hive"]], ["buhara hanligi", ["buhara"]], ["hokand hanligi", ["hokand"]],
  ["rodos sovalye", ["rodos-sovalyeleri"]], ["saint-jean sovalye", ["rodos-sovalyeleri"]], ["maratha", ["maratha"]], ["sih", ["sih-imparatorlugu"]],
  ["amerika birlesik", ["abd"]], ["abd", ["abd"]], ["japonya", ["meiji-japonya"]], ["kavalali", ["misir-kavalali"]],
  ["seybani", ["seybaniler"]], ["ozbek", ["seybaniler", "buhara"]], ["kirim hanligi", ["kirim"]], ["tatar", []], ["timur", []]
].map(([kok, idler]) => ({ kok, idler: idler.filter(i => i === "osmanli" || kunye[i]), eksik: idler.filter(i => i !== "osmanli" && !kunye[i]) }));
const SOZLUK_EKSIK = SOZLUK.filter(s => s.eksik.length).map(s => s.kok + "→" + s.eksik.join("/"));
const gunNo = s => { const [y, a, g] = s.split("-").map(Number); return Date.UTC(0, a - 1, g) / 864e5 + y * 365.2425; };
function idSec(s, tarih) {
  if (!s.idler.length) return null;
  const g = gunNo(tarih), pad = x => x.replace(/^(-?)(\d{1,3})-/, (m, e, y) => e + y.padStart(4, "0") + "-");
  const tut = s.idler.filter(i => { if (i === "osmanli") return true; const k = kunye[i];
    return gunNo(pad(k.f)) <= g + 366 && g <= gunNo(pad(k.t)) + 366; });   // ±1 yıl: yıl hassasiyetli tanıklık
  return tut.length === 1 ? tut[0] : null;
}
// kök eşleşmesi: kök + türetme (li/lu/ler/lar…) + isteğe bağlı kesme + hâl eki
// ⚠️ kökten sonra SERBEST harf YOK: "osmanli[a-z]*?" yazılınca "osmanliya"nın "ya"sı türetmeye yenip
//    hâl eki BOŞ kalıyordu (datif kaçıyordu). Yalnız sayılı türetme + sayılı hâl eki.
const TURETME = "(?:lilar|liler|lular|luler|lilari|lileri|li|lu|lar|ler|lari|leri)?";
const HAL = "(?:'?(ya|ye|a|e|na|ne|dan|den|tan|ten|ndan|nden|in|nin|un|nun|i|yi|u|yu|nda|nde|da|de|ta|te))?";
const SOZ_RX = SOZLUK.filter(s => s.idler.length).map(s => ({ s, rx: new RegExp("(?<![a-z0-9])" + s.kok.replace(/[-\s]/g, m => m === " " ? "\\s+" : "-") + TURETME + HAL + "(?![a-z0-9])", "g") }));
const DATIF = /^(ya|ye|a|e|na|ne)$/, ABL = /^(dan|den|tan|ten|ndan|nden)$/, GEN = /^(in|nin|un|nun)$/;
const KAZ_SONRA_DATIF = /^[^.;]{0,70}?(gec|teslim|birak|terk|devr|veril|verdi|katil|baglan|kayb|dus(tu|mesi|us))/;
const KAZ_SONRA_GEN = /^\s*(eline|elin[e]? |hakimiyetine|hakimiyeti altina|idaresine|egemenligine|yonetimine|denetimine|topraklarina|sinirlarina)/;
const KAZ_SONRA_YALIN = /^\s*(tarafindan|hakimiyetine|idaresine|egemenligine|yonetimine|denetimine|topraklarina|eline)/;
// S3 (örneklem 1 #5): "Venedik donanmasINI yenen … geri aldı" — nesne hâlindeki ordu/donanma özne sayılmaz
const KAZ_OZNE = /^\s*(ordulari|ordusu|kuvvetleri|kuvvetler|donanmasi|donanmasinin komutani|birlikleri|askerleri)(?![a-z])/;
const ETKEN = /(ele gecir(di|ip|erek|mesi)|fethet(ti|ip|mesi)|(?<![a-z])aldi(?![a-z])|(?<![a-z])alip|ilhak et(ti|ip)|zaptet(ti|ip)|isgal et(ti|ip)|geri aldi|teslim aldi)/;

// ── ② YER ADLARI ──
const adParca = ad => [ad.replace(/\s*\(.*$/, "").trim(), ...[...ad.matchAll(/\(([^)]*)\)/g)].flatMap(m => m[1].split(/[\/,;]/).map(x => x.trim()))]
  .map(norm).filter(x => x.length >= 3);
const SOZ_KOKLER = new Set(SOZLUK.map(s => s.kok));
const adHavuz = {};    // norm ad → Set(yerleşim ad)
for (const y of Y) for (const p of adParca(y.ad)) if (p.length >= 4 && !SOZ_KOKLER.has(p)) (adHavuz[p] = adHavuz[p] || new Set()).add(y.ad);
const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const tumAdRx = new RegExp("(?<![a-z0-9])(" + Object.keys(adHavuz).sort((a, b) => b.length - a.length).map(esc).join("|") + ")(?![a-z0-9])", "g");
// S4 (örneklem 1 #51 "Van gölü havzası" · #77 "Kiel Antlaşması" · #11/#102 "Adana/Kâşgar merkezli"):
//    coğrafî ad, antlaşma adı ve "X merkezli (beylik)" de şehir DEĞİL
const POLITE = /^\s*(hanligi|kralligi|cumhuriyeti|beyligi|sultanligi|emirligi|despotlugu|dukaligi|prensligi|imparatorlugu|eyaleti|sancagi|bolgesi|vilayeti|ovasi|adasi|yarimadasi|korfezi|knezligi|hanedani|seriati|devleti|golu|havzasi|nehri|irmagi|dagi|daglari|vadisi|sahili|kiyisi|bogazi|merkezli|antlasmasi|antlasma|barisi|kongresi|konferansi|muahedesi|sozlesmesi|mutarekesi|savasi|muharebesi|seferi|kusatmasi)(?![a-z])/;

// ── ③ FİİL ──
const FIIL = /(fethi|fethed|fetheyle|fetih|ele gec|ilhak|zapt|teslim|(?<![a-z])dus(tu|mesi|usu|us)(?![a-z])|alind|(?<![a-z])aldi|(?<![a-z])alinmasi|alinisi|geri al|kayb|terk|birakil|birakti|devr|isgal|hakimiyetine|idaresine|egemenligine|baglandi|katildi|tabi|gecti|gecmesi|gecisi|elinden cik|eline gec)/;
const OLUMSUZ = /(alamad|alamay|gecireme|fethedeme|zaptedeme|kusatmayi kaldir|kusatmasi kaldir|basarisiz|tesebbus|girisim|(?<![a-z])akin|yagma|kurtar|geri cekil|ele gecirmeye calis|almaya calis|niyet|plan|tasarlad|vaat|talep et|iddia|istedi|kagit uzerinde|gorevlendir)/;

// ── ④ KAYNAK ──
function kaynakSina(o) {
  const s = String(o.kaynak || "").trim();
  if (!s) return { ok: false, neden: "kaynak yok" };
  if (/bulunamad|ölçülemedi|olculemedi|alınamad|alinamad|okunmad/i.test(s)) return { ok: false, neden: "kaynak bulunamadı/ölçülemedi" };
  const bas = s.split(/ — | · |;/)[0];
  if (/devletler\.js|savaslar\.js|yerlesimler|data\/|kronoloji_[a-z]+\.js|olaylar[a-z0-9_]*\.js|\batlas|künye|kunye|^`?veri\b|^depo\b|CLAUDE\.md/i.test(bas)) return { ok: false, neden: "kaynak atlas/veri atfı" };
  // S6 (örneklem 1 #78): "suveys (TDV) — data/olaylar_ek5.js:92'de doğrulanmış, … UYARLANDI" — kaynak alanının
  // HERHANGİ bir yerinde başka bir veri dosyasına/uyarlamaya dayanma ⇒ atlas-içi türetme, dışarıda
  if (/\.js\b|data\/|uyarland|devralınd|devralind|hizaland/i.test(s)) return { ok: false, neden: "kaynak atlas/veri atfı" };
  if (/^(standart|el-kitab|genel kaynak|akademik kaynak|ders kitab)/i.test(s)) return { ok: false, neden: "kaynak adsız (standart/el kitabı)" };
  // S18 (örneklem 2 #69 "Bournoutian (2006); ikincil özetten derlendi"): kaynağın kendisi değil bir ÖZET
  if (/ikincil özet|ikincil ozet|özetten derlen|ozetten derlen/i.test(s)) return { ok: false, neden: "kaynak ikincil özet" };
  return { ok: true, gunSupheli: /GÜN DOĞRULANMADI|gun dogrulanmadi/i.test(s) };
}
function kaynakAlan(o) {
  const s = String(o.kaynak).trim();
  const tdvSlug = s.match(/^([a-z0-9]+(?:-{1,2}[a-z0-9]+)*)(?:\s*\(TDV|\s*$|\s*\+|\s*—|\s*,|\s*·)/);
  const tdvIc = s.match(/TDV[^`'"]*?[`'"]([a-z0-9-]+)[`'"]/) || s.match(/TDV, madde: ([a-z0-9-]+)/);
  const slug = tdvSlug ? tdvSlug[1] : tdvIc ? tdvIc[1] : null;
  const tdv = !!slug && (/^[a-z0-9-]+$/.test(s) || /TDV/.test(s) || !!tdvSlug);
  const gelenek = tdv ? "TR" : /[А-Яа-я]/.test(s) ? "RU" : /Treccani|Dizionario/.test(s) ? "IT" : /Welt der|Österreich|Deutsch/.test(s) ? "DE" : /[a-zA-Z]{3,}/.test(s) && /(History|Cambridge|Oxford|Iranica|Encyclop|University|Press|Empire|Europe|Tragedy|Russia|China|India|Scandinavia|The )/.test(s) ? "EN" : "TR";
  const k = { ad: tdv ? "TDV İslâm Ansiklopedisi, «" + slug + "» (kronoloji maddesinin `kaynak:` alanı)" : s.slice(0, 240) + (s.length > 240 ? "…" : "") };
  if (tdv) k.slug = slug; else k.paragraf = "madde `kaynak:` alanı — sayfa belirtilmemiş";
  return { k, gelenek, tdv };
}

// ── ⑤ HASSASİYET ──
const AYLAR = ["ocak", "subat", "mart", "nisan", "mayis", "haziran", "temmuz", "agustos", "eylul", "ekim", "kasim", "aralik"];
function hassasiyet(o, gunSupheli) {
  let t = String(o.t); if (t.length === 7) t += "-01";
  if (!/^\d{3,4}-\d\d-\d\d$/.test(t)) return { ok: false, neden: "t biçimi" };
  const [y, a, g] = t.split("-");
  let kes;
  if (o.kesinlik) kes = o.kesinlik;
  else if (o.gun) {
    const n = norm(o.gun).trim();
    // S7 (örneklem 1 #7): "1391 dolayı" — yıl bile kesin değil ⇒ ATLA (onyıla genişletmek bir yorumdur)
    if (/(dolay|civar|sirala|yaklasik|sonlari|baslari|ortalari|yarisi|\?|~|once|sonra|arasi|gelenek)/.test(n)) return { ok: false, neden: "gun belirsizlik ifadesi taşıyor (dolayı/civarı/sonları…)" };
    const yillar = [...n.matchAll(/(?<!\d)(\d{3,4})(?!\d)/g)].map(m => m[1]);
    if (!yillar.includes(String(+y))) return { ok: false, neden: "gun yılı ≠ t yılı" };
    if (/\d{3,4}\s*[-–\/]\s*\d{2,4}/.test(n) || /\(\s*\d{3,4}\s*[-–]\s*\d{2}/.test(n)) return { ok: false, neden: "gun iki yıla yayılıyor" };
    const ayIx = AYLAR.map((m, i) => new RegExp("(?<![a-z])" + m + "(?![a-z])").test(n) ? i : -1).filter(i => i >= 0);
    const gunM = n.match(/^(\d{1,2})\s+([a-z]+)\s+\d{3,4}/);
    const aralik = /\d\s*[-–\/]\s*\d{1,2}\s/.test(n) || /[-–]/.test(n.replace(/\d{3,4}.*$/, ""));
    if (gunM && !aralik && ayIx.length === 1) kes = "gun";
    else if (ayIx.length === 1) kes = "ay";
    else if (ayIx.length > 1) kes = "yil";
    else kes = "yil";
    if (ayIx.length === 1 && ayIx[0] + 1 !== +a) return { ok: false, neden: "gun ayı ≠ t ayı" };
    if (kes === "gun" && +gunM[1] !== +g) return { ok: false, neden: "gun günü ≠ t günü" };
  } else if (String(o.t).length === 7) kes = "ay";
  else if (a === "01" && g === "01") kes = "yil";
  else if (g === "01") kes = "ay";
  else kes = "gun";
  const icNot = [o.ic_not_gun, o.ic_not_d, o.ic_not_b].filter(Boolean).join(" ");
  const notlar = [];
  if (kes !== "yil" && /atlas|hizala|devral|komşu kay|komsu kay/i.test(icNot)) { kes = "yil"; notlar.push("ic_not atlas/hizalama anıyor ⇒ YIL hassasiyetine indirildi"); }
  if (kes !== "yil" && gunSupheli) { kes = "yil"; notlar.push("kaynak alanı 'GÜN DOĞRULANMADI' diyor ⇒ YIL"); }
  const tarih = kes === "gun" ? t : kes === "ay" ? y + "-" + a + "-01" : y + "-01-01";
  return { ok: true, kes, tarih, yil: +y, notlar };
}

// ── ⑥ CÜMLE SINAVI ──
// S8 (örneklem 1 #6 "Timur Herat'ı aldı: … Horasan'ın Timurlu'ya geçişi"): başlık " — " ve ":" ile
//    CÜMLECİKLERE bölünür; devlet yer ile AYNI cümlecikte olmalı.
// S9 (örneklem 1 #49 "Mukrin b. Zâmil"): cümle, 1-2 harflik kısaltmadan (b. · M.) sonra BÖLÜNMEZ.
function cumleler(o) {
  const out = [];
  for (const p of String(o.b || "").split(/\s+[—–]\s+|:\s+/)) if (p.trim()) out.push({ alan: "b", s: p.trim() });
  const d = String(o.d || "").replace(/^\[[^\]]*\]\s*/, "");
  // S17 (örneklem 2 #81 "İstanbul'u ele geçirdi …; Ege adalarının … Venedik'e düştü"): gövde cümlesi ";" ile de bölünür
  for (const c of d.split(/(?<=[A-Za-zÇŞĞİÖÜÂçşğıöüâîû0-9)"'”]{3}[.!?])\s+(?=[A-ZÇŞİÖÜÂ"“'])|;\s+/)) if (c.trim()) out.push({ alan: "d", s: c.trim() });
  return out;
}
// S10 (örneklem 1 #55 "Sacile, Feltre, …, Udine, Aquileia ve Monfalcone" · #80 "Gevele ve Konya"):
//    yer, "ve" içeren BÜYÜK HARFLİ AD DİZİSİNİN parçasıysa ⇒ çok yer (havuzda olmayan adlar da sayılır)
function adDizisindeMi(ham, parcalar) {
  const rx = /[A-ZÇŞİÖÜÂ][^\s,;:()]*(?:\s*(?:,|\sve\s)\s*[A-ZÇŞİÖÜÂ][^\s,;:()]*)+/g;
  for (const m of ham.matchAll(rx)) {
    if (!/\sve\s/.test(m[0])) continue;
    const n = norm(m[0]);
    if (parcalar.some(p => new RegExp("(?<![a-z0-9])" + esc(p) + "(?![a-z0-9])").test(n))) return true;
  }
  return false;
}
function cumleSina(c, yer, yil) {
  const n = norm(c.s);
  // (a) yer adı — S11 (örneklem 1 #49 Manama←"Bahreyn"): YALNIZ ANA AD; parantezdeki ikinci ad bir ada/bölge
  //     adı olabildiği için eşleşme sayılmaz (bölge → şehir taşıması çıkarımdır)
  const parcalar = adParca(yer).slice(0, 1);
  if (adDizisindeMi(c.s, parcalar)) return { ok: false, neden: "yer bir ad dizisinin parçası (çok yer)" };
  let yerGecti = false, yerNesne = false;
  for (const p of parcalar) {
    const rx = new RegExp("(?<![a-z0-9])" + esc(p) + "(?![a-z0-9])", "g"); let m;
    while ((m = rx.exec(n))) { const sonra = n.slice(m.index + p.length);
      if (POLITE.test(sonra)) return { ok: false, neden: "yer adı devlet/bölge kelimesinin parçası" };
      yerGecti = true;
      // S14 (örneklem 2 #64 "Kiel'DE imzalanan antlaşmayla Norveç'i …"): bulunma hâli = OLAY YERİ, el değiştiren yer değil
      if (!/^'?(da|de|ta|te|nda|nde)(?![a-z])/.test(sonra)) yerNesne = true; }
  }
  if (!yerGecti) return { ok: false, neden: "yer adı cümlede yok" };
  if (!yerNesne) return { ok: false, neden: "yer yalnız bulunma hâlinde (olay yeri)" };
  // (e) fiil + olumsuz + başka yıl
  if (!FIIL.test(n)) return { ok: false, neden: "ele geçirme/devir fiili yok" };
  if (OLUMSUZ.test(n)) return { ok: false, neden: "olumsuz/kuşatma/akın ifadesi" };
  const yillar = [...n.matchAll(/(?<!\d)(\d{3,4})(?!\d)/g)].map(m => +m[1]).filter(x => x >= 500 && x <= 2030 && x !== yil);
  if (yillar.length) return { ok: false, neden: "cümlede başka yıl: " + yillar[0] };
  // (a) tek yer
  const baska = new Set();
  for (const m of n.matchAll(tumAdRx)) for (const a of adHavuz[m[1]]) if (a !== yer && !parcalar.includes(m[1])) baska.add(a);
  if (baska.size) return { ok: false, neden: "cümlede başka yerleşim: " + [...baska].slice(0, 3).join(", ") };
  // (b) devlet — yön
  const kazanan = new Set(), kaybeden = new Set(), bulunan = [];
  for (const { s, rx } of SOZ_RX) {
    rx.lastIndex = 0; let m;
    while ((m = rx.exec(n))) {
      const hal = m[1] || "", sonra = n.slice(m.index + m[0].length);
      const duz = !m[0].includes("'") && !hal;
      bulunan.push(s.kok + (hal ? "+" + hal : ""));
      // S2 (örneklem 1 #94): "Merînî hâkimiyetine SON VERDİ" kazanan sanıldı ⇒ "son/sona" KAYBEDEN
      if (ABL.test(hal) || /^\s*(hakimiyet|idare|egemenlig|yonetim|denetim)[a-z]*\s+(son|sona)(?![a-z])/.test(sonra) ||
          (GEN.test(hal) && /^\s*(elinden|kaybi|hakimiyeti sona|idaresi sona)/.test(sonra))) { kaybeden.add(s); continue; }
      // S22 (sayım 4 #1 "Karlofça'da Venedik'e BIRAKILAN Mora … geri alındı"): datif + SIFAT-FİİL (-an/-en, -miş)
      //     bir önceki durumu niteler, anlatılan olayın kazananı değildir
      if (DATIF.test(hal) && KAZ_SONRA_DATIF.test(sonra)) {
        const fiil = sonra.match(/^[^.;]{0,70}?((?:gec|teslim|birak|terk|devr|veril|verdi|katil|baglan|kayb|dus)[a-z]*)/);
        if (fiil && /(an|en|mis|mus|dig[a-z]*|dug[a-z]*)$/.test(fiil[1]) && !/(mesi|masi|isi|usu)$/.test(fiil[1])) continue;
        kazanan.add(s); continue; }
      if (GEN.test(hal) && KAZ_SONRA_GEN.test(sonra)) { kazanan.add(s); continue; }
      if (duz && KAZ_SONRA_YALIN.test(sonra)) { kazanan.add(s); continue; }
      if (duz && (KAZ_OZNE.test(sonra) || /(lar|ler)$/.test(m[0])) && ETKEN.test(sonra)) { kazanan.add(s); continue; }
    }
  }
  if (!kazanan.size) return { ok: false, neden: "kazanan devlet açık değil" + (bulunan.length ? " (bulunan: " + bulunan.join(",") + ")" : "") };
  if (kazanan.size > 1) return { ok: false, neden: "birden çok kazanan: " + [...kazanan].map(s => s.kok).join(",") };
  const k = [...kazanan][0];
  if (kaybeden.has(k)) return { ok: false, neden: "aynı devlet hem kazanan hem kaybeden" };
  // S1 (örneklem 1 #28 · #49): "tâbi/haraç" kelimesi cümlede başka bir ilişkiye aitti (Venedik Osmanlı'ya
  //    haraç veriyor · Hürmüz Portekiz'e tâbi). `tur` OTOMATİK YAZILMAZ (şema: kaynak ayırmıyorsa yazılmaz).
  return { ok: true, soz: k, kaybeden: [...kaybeden].map(s => s.kok), tabi: false };
}

// ── ⑦ TÜRETME ──
const KAT_K = new Set(["fetih", "kayip", "vassal", "kazanc", "antlasma"]);
const KAT_TUR = new Set(["fetih", "toprak-kazanc", "toprak-kayip", "isgal", "vassal", "tabiiyet", "itaat", "toprak", "antlasma"]);
const KAT_ET = new Set(["toprak-kazanc", "toprak-kayip", "toprak-kaybi", "isgal", "tabiiyet", "vassal", "fetih"]);
const huni = {}, red = {}, tanik = [];
const inc = (o, k) => o[k] = (o[k] || 0) + 1;
for (const o of hepsi) {
  inc(huni, "0 madde");
  if (!(KAT_K.has(o.k) || KAT_TUR.has(o.tur) || (o.etiket || []).some(e => KAT_ET.has(e)))) continue;
  inc(huni, "1 toprak kategorisi");
  if (o.kapsam_genis) { inc(red, "kapsam_genis (madde kendini GENİŞ ilan ediyor)"); continue; }
  if (!o.yer_id || (yerIx[o.yer_id] || []).length !== 1) { inc(red, o.yer_kon && !o.yer_id ? "yer_kon var ama yer_id yok (ad yok ⇒ cümlede eşlenemez)" : "yer_id yok/tek değil"); continue; }
  // S23 (sayım 4 #1 "Mora (Tripoliçe)" · yerleşim `tur:"bolge"` 195 kayıt): BÖLGE temsil noktası bir şehir değildir;
  //     bölgenin el değiştirmesini o noktaya yazmak "bölge adından şehre taşınan hüküm"dür (§4 BAYRAK: halka almaz)
  if (/^(bolge|konfederasyon)$/.test(yerIx[o.yer_id][0].tur || "")) { inc(red, "(a) yer_id bir BÖLGE temsil noktası (tur:bolge)"); continue; }
  inc(huni, "2 (a) yer_id tek");
  const ks = kaynakSina(o); if (!ks.ok) { inc(red, ks.neden); continue; }
  inc(huni, "3 (c) kaynak");
  const h = hassasiyet(o, ks.gunSupheli); if (!h.ok) { inc(red, "(d) " + h.neden); continue; }
  // S12 (örneklem 1 #54 "Silistre'nin TAHLİYESİ"): başlık bir boşaltma/çekilme anlatıyorsa ele geçirme tanıklığı değil
  if (/(tahliye|bosaltil|bosaltma|cekilme|terk edip cekil)/.test(norm(o.b))) { inc(red, "(e) başlık tahliye/çekilme anlatıyor"); continue; }
  // S13 (örneklem 1 #78 "Ridâniye zaferiyle BİRLİKTE" · #91 "Trabzon seferi SIRASINDA"): gün BAŞKA bir olayın
  //     gününden taşınmış olabilir ⇒ GÜN hassasiyetli ise ATLA (yıl bile taşınmış olabilir: Amasra 1460≠1461)
  // S13b (sayım 4 #5 Süveyş "Ridâniye zaferiyle birlikte", `gun`: "Ocak 1517"): AY hassasiyetinde de aynı taşıma riski
  if (h.kes !== "yil" && /(zaferiyle birlikte|zaferi ile birlikte|seferiyle birlikte|fethiyle birlikte|dusmesiyle birlikte|dususuyle birlikte|seferi sirasinda|savasi sirasinda|kusatmasi sirasinda|seferinde)/.test(norm(o.d))) { inc(red, "(d) gün başka olaya bağlanmış (…ile birlikte / …sırasında)"); continue; }
  const metin = norm([o.gun, o.b, o.d].filter(Boolean).join(" "));
  // S15 (örneklem 2 #11 "1518-19'da" · #70 "1388-1389 kışında"): madde yılı bir YIL ARALIĞININ ucuysa yıl bile kesin değil
  // S15b (sayım 4 #67 "(813/1410-1411)"): "813/1410" ilk eşleşmeyi yiyince "1410-1411" görülmüyordu ⇒ ÖRTÜŞEN tarama
  const aralikYil = [...metin.matchAll(/(?=(?<!\d)(\d{3,4})\s*[-–\/]\s*(\d{2,4})(?!\d))/g)].some(m => {
    const a = +m[1], b = m[2].length < m[1].length ? +(m[1].slice(0, m[1].length - m[2].length) + m[2]) : +m[2];
    return b > a && b - a <= 3 && (a === h.yil || b === h.yil); });
  if (aralikYil) { inc(red, "(d) madde yılı metinde bir yıl aralığının ucu (1518-19)"); continue; }
  // S16 (örneklem 2 #84 "izleyen yıllarda" · #88 "almakla görevlendirdi"): zaman ya da eylem belirsiz ⇒ ATLA
  if (/(izleyen yillarda|sonraki yillarda|yillar icinde|bir sure sonra|tarihi belirsiz|kesin tarihi bilin|almakla gorevlendir|alip [^.]{0,60}gorevlendir)/.test(metin)) { inc(red, "(d/e) metin zamanı ya da eylemi belirsiz bırakıyor"); continue; }
  // S16b (örneklem 2 #45 "TDV yalnız yıl verir; … birkaç gün içinde teslim oldu"): gün/ay başka kaynaktan ve yaklaşık ⇒ YIL
  if (h.kes !== "yil" && /(birkac gun|birkac hafta|yalniz yil ver|yalniz yili ver|gun vermez|gun vermiyor|ay\/gun vermez|ay vermez)/.test(metin)) {
    h.kes = "yil"; h.tarih = h.tarih.slice(0, 4) + "-01-01"; h.notlar.push("madde metni gün/ayın yaklaşık ya da başka kaynaktan olduğunu söylüyor ⇒ YIL"); }
  // S19 (örneklem 2 #10 Şam "27 Eylül'de Şam önlerine ULAŞTI; şehre hemen girmeyip"): gövdede madde GÜNÜ yazılıysa,
  //     o günü taşıyan cümlecik bir ele geçirme/giriş/teslim anlatmalı; anlatmıyorsa gün başka bir ana aittir ⇒ ATLA
  if (h.kes === "gun") {
    const [yy, aa, gg] = h.tarih.split("-"); const gunIfade = new RegExp("(?<!\\d)" + (+gg) + "\\s+" + AYLAR[+aa - 1] + "(?![a-z])");
    // S19b (örneklem 3 #9 Şam "Hama ve Humus'un TESLİM olmasıyla … 27 Eylül'de Şam önlerine ulaştı"): günü taşıyan
    //      cümlecik YERİN ADINI ve bir giriş/ele geçirme fiilini birlikte taşımalı; "önlerine/ulaştı/kuşat" olmamalı
    const yerN = adParca(o.yer_id)[0], yerRx = new RegExp("(?<![a-z0-9])" + esc(yerN) + "(?![a-z0-9])");
    const parca = norm(String(o.d || "")).split(/[.;]\s+/).filter(p => gunIfade.test(p));
    if (parca.length && !parca.some(p => yerRx.test(p) && (FIIL.test(p) || /(girdi|girmesi|girisi|teslim|imzalan)/.test(p)) && !/(onlerine|onune|ulasti|kusatt|kusatma)/.test(p)))
      { inc(red, "(d) gövdedeki gün bir ele geçirme anlatmıyor (varış/kuşatma günü)"); continue; }
  }
  // S20 (örneklem 3 #51 "Barsbay'ın üçüncü Kıbrıs SEFERİ — Lefkoşa'nın düşüşü"): kategori savaş/sefer ve başlık bir
  //     SEFER anlatıyorsa, ele geçirme kalıcı tasarruf değil yağma/baskın olabilir ⇒ ATLA (kural e)
  if (/^(savas|sefer|kusatma)$/.test(o.k || o.tur || "") && /sefer/.test(norm(o.b))) { inc(red, "(e) savaş/sefer maddesi (baskın olabilir)"); continue; }
  // S21 (örneklem 3 #64 Âmid "(1240)" · #78 Kandehar): `gun` alanı yok, t = YYYY-MM-01 ve gövde o AYI anmıyor ⇒
  //     ay, ayın 1'ine kodlanmış bir tahmin olabilir (§4 üçüncü hassasiyet ekseni) ⇒ YIL
  if (!o.gun && h.kes === "ay" && !new RegExp("(?<![a-z])" + AYLAR[+h.tarih.slice(5, 7) - 1] + "(?![a-z])").test(norm(o.d || "") + " " + norm(o.b || ""))) {
    h.kes = "yil"; h.tarih = h.tarih.slice(0, 4) + "-01-01"; h.notlar.push("t YYYY-MM-01, `gun` yok ve metin ayı anmıyor ⇒ YIL"); }
  inc(huni, "4 (d) hassasiyet");
  let bulgu = null, sonNeden = null; const sonuclar = [];
  for (const c of cumleler(o)) { const r = cumleSina(c, o.yer_id, h.yil); if (r.ok) sonuclar.push(Object.assign(r, { c })); else if (!sonNeden || c.alan === "b") sonNeden = r.neden; }
  const idli = sonuclar.map(r => Object.assign(r, { id: idSec(r.soz, h.tarih) }));
  const farkli = new Set(idli.map(r => r.id || "?" + r.soz.kok));
  if (!sonuclar.length) { inc(red, "(a/b/e) " + String(sonNeden).replace(/:.*$/, "").replace(/ \(bulunan.*$/, "")); continue; }
  if (farkli.size > 1) { inc(red, "(b) cümleler farklı kazanan veriyor"); continue; }
  bulgu = idli.find(r => r.c.alan === "b") || idli[0];
  if (!bulgu.id) { inc(red, "(b) ad→künye id TEK seçilemedi (pencere)"); continue; }
  inc(huni, "5 (a)(b)(e) cümle sınavı");
  const kn = kaynakAlan(o);
  const alinti = bulgu.c.s.length > 260 ? bulgu.c.s.slice(0, 257) + "…" : bulgu.c.s;
  tanik.push({ o, h, bulgu, kn, alinti });
}

// ── ⑧ ARALIK: aynı kaynak, aynı yer — sonraki madde o devletin KAYBINI açıkça yazıyorsa ──
const kaynakAnahtar = o => norm(String(o.kaynak)).split(/ — | · |;|\(/)[0].trim();
const kayiplar = [];   // (yer, kaybeden id, tarih, kaynak) — yalnız uç işareti, halka DEĞİL
for (const o of hepsi) {
  if (!o.yer_id || (yerIx[o.yer_id] || []).length !== 1) continue;
  const ks = kaynakSina(o); if (!ks.ok) continue;
  const h = hassasiyet(o, ks.gunSupheli); if (!h.ok) continue;
  for (const c of cumleler(o)) { const r = cumleSina(c, o.yer_id, h.yil);
    if (r.ok) for (const kk of r.kaybeden) { const s = SOZLUK.find(x => x.kok === kk); const id = s && idSec(s, h.tarih); if (id) kayiplar.push({ yer: o.yer_id, id, h, o }); } }
}
let aralikSay = 0;
for (const x of tanik) {
  const id = x.bulgu.id, ka = kaynakAnahtar(x.o);
  const son = kayiplar.filter(k => k.yer === x.o.yer_id && k.id === id && kaynakAnahtar(k.o) === ka && k.h.tarih > x.h.tarih)
    .sort((a, b) => a.h.tarih < b.h.tarih ? -1 : 1)[0];
  if (!son) continue;
  const araya = tanik.some(z => z !== x && z.o.yer_id === x.o.yer_id && z.h.tarih > x.h.tarih && z.h.tarih < son.h.tarih);
  if (araya) continue;
  x.aralik = son; aralikSay++;
}

// ── ⑨ KAYIT ──
const slugla = s => norm(s).replace(/\(.*?\)/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 28);
const idSay = {};
const kayitlar = tanik.map(x => {
  const { o, h, bulgu, kn, alinti } = x;
  let id = "kr-" + slugla(o.yer_id) + "-" + bulgu.id + "-" + h.tarih.slice(0, 4);
  idSay[id] = (idSay[id] || 0) + 1; if (idSay[id] > 1) id += "-" + idSay[id];
  const r = { id, yer: o.yer_id, devlet: bulgu.id };
  if (bulgu.tabi) r.tur = "tabi";
  if (x.aralik) { r.f = h.tarih; r.t = x.aralik.h.tarih; r.kesinlik = h.kes === x.aralik.h.kes ? h.kes : { f: h.kes, t: x.aralik.h.kes }; }
  else { r.tarih = h.tarih; r.kesinlik = h.kes; }
  r.kaynak = Object.assign({}, kn.k, { alinti, alinti_ozet: true, alinti_kaynagi: "kronoloji maddesi (" + bulgu.c.alan + ")", gelenek: kn.gelenek });
  r.rapor = o._f + " · t:" + o.t + " · b:«" + o.b + "» · türetme: denetim/ARAC-HALKA-KRONOLOJI-TURET-0913.js · denetim/HALKA-KRONOLOJI-TURETME-0913.md";
  const notlar = ["Alıntı KRONOLOJİ MADDESİNİN metnidir, kaynağın kendi cümlesi DEĞİL; kaynak gövdesi bu türetmede OKUNMADI."];
  notlar.push("Metindeki devlet adı: «" + bulgu.soz.kok + "»" + (bulgu.soz.idler.length > 1 ? " → künye id tarih penceresiyle seçildi" : "") + ".");
  if (h.notlar.length) notlar.push(...h.notlar);
  if (x.aralik) notlar.push("Aralık ucu aynı kaynağı taşıyan sonraki maddeden: " + x.aralik.o._f + " · t:" + x.aralik.o.t + " · b:«" + x.aralik.o.b + "».");
  r.not = notlar.join(" ");
  return r;
});

// ── ⑩ ÇIKTI ──
console.log("SÖZLÜKTE künyesi olmayan id (düşürüldü): " + (SOZLUK_EKSIK.join(" · ") || "yok"));
console.log("\nHUNİ"); for (const [k, v] of Object.entries(huni)) console.log("  " + k.padEnd(34) + v);
console.log("RED SEBEPLERİ"); for (const [k, v] of Object.entries(red).sort((a, b) => b[1] - a[1])) console.log("  " + String(v).padStart(5) + "  " + k);
console.log("\nTANIKLIK " + kayitlar.length + " · aralık " + aralikSay + " · tâbi " + kayitlar.filter(r => r.tur).length +
  " · b yolu " + tanik.filter(x => x.bulgu.c.alan === "b").length + " · d yolu " + tanik.filter(x => x.bulgu.c.alan === "d").length);
const say = f => kayitlar.reduce((a, r) => (a[f(r)] = (a[f(r)] || 0) + 1, a), {});
console.log("devlet: " + JSON.stringify(say(r => r.devlet)));
console.log("kesinlik: " + JSON.stringify(say(r => typeof r.kesinlik === "object" ? "aralik" : r.kesinlik)));
console.log("kova: " + JSON.stringify(tanik.reduce((a, x) => (a[x.o._kova] = (a[x.o._kova] || 0) + 1, a), {})));

const oi = arg.indexOf("--ornek");
if (oi >= 0) {
  const N = +arg[oi + 1] || 50;
  let s = 20260913 >>> 0; const rnd = () => { s = (s + 0x6D2B79F5) >>> 0; let t = s; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  const ix = kayitlar.map((_, i) => i);
  for (let i = ix.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [ix[i], ix[j]] = [ix[j], ix[i]]; }
  const sec = ix.slice(0, Math.min(N, ix.length)).sort((a, b) => a - b);
  console.log("\nÖRNEKLEM (mulberry32 tohum 20260913, n=" + sec.length + ")");
  for (const i of sec) { const r = kayitlar[i], x = tanik[i];
    console.log("\n#" + i + " " + r.id + " · " + r.devlet + (r.tur ? "/" + r.tur : "") + " · " + (r.tarih || r.f + "→" + r.t) + " · " + JSON.stringify(r.kesinlik) + " · " + x.o._f);
    console.log("   gun: " + (x.o.gun || "—") + " · t: " + x.o.t + " · k/tur: " + (x.o.k || x.o.tur) + " · kaynak: " + String(x.o.kaynak).slice(0, 100));
    console.log("   b: " + x.o.b);
    console.log("   d: " + String(x.o.d).slice(0, 700));
    console.log("   ALINTI[" + x.bulgu.c.alan + "]: " + r.kaynak.alinti);
  }
}
const ji = arg.indexOf("--json");
if (ji >= 0) fs.writeFileSync(arg[ji + 1], JSON.stringify(kayitlar, null, 1));
if (arg.includes("--yaz")) {
  const bas = [
    "// KAYNAKLI SAHİPLİK HALKASI — KRONOLOJİ MADDELERİNDEN KATI TÜRETME",
    "// Yazan: HALKA-KRONOLOJI · 13 Eylül 2026 · şema: VERI-YAPISI.md \"Kaynaklı sahiplik halkası\"",
    "// Ad alanı: data/kaynakli_halka_kronoloji.js → window.KAYNAKLI_HALKA_KRONOLOJI (CLAUDE.md §7)",
    "// 🤖 ÜRETİLMİŞ — ELLE DÜZENLEME. Üretici: denetim/ARAC-HALKA-KRONOLOJI-TURET-0913.js --yaz",
    "// Kural ve örneklem isabeti: denetim/HALKA-KRONOLOJI-TURETME-0913.md",
    "// 🔴 Alıntılar KRONOLOJİ MADDESİNİN metnidir (alinti_ozet:true · alinti_kaynagi); kaynak gövdesi OKUNMADI.",
    "// 🔴 Atlas dönemi hiçbir adımda okunmadı (CLAUDE.md §4 atlas referans değildir).",
    "window.KAYNAKLI_HALKA_KRONOLOJI = ["
  ].join("\n");
  const govde = kayitlar.map(r => JSON.stringify(r)).join(",\n");
  fs.writeFileSync(path.join(L.KOK, "data/kaynakli_halka_kronoloji.js"), bas + "\n" + govde + "\n];\n");
  console.log("\n✓ yazıldı data/kaynakli_halka_kronoloji.js · " + kayitlar.length + " kayıt");
}
module.exports = { kayitlar, tanik };
