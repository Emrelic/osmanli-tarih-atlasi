// ARAC-HALKA-FETIH-TURET-0913 — HALKA-FETIH · 13 Eylül 2026
// ÇEKİRDEK FETİH SINIFI → KAYNAKLI HALKA. Emre kararı: çekirdek Osmanlı kronolojisinde (data/olaylar*.js)
// fetheden devleti adıyla anmayan fetih maddesi OSMANLI sayılabilir — ayrı örneklem, ≥%95 kapısı.
// (a)(c)(d)(e) DEĞİŞMEDİ: ARAC-HALKA-KRONOLOJI-TURET-0913.js'in ①-⑥ bölümü KAYNAK METNİNDEN eval edilir
//   (kopya yok — kural orada değişirse burada da değişir). Madde düzeyi S12-S21 sınavları ⑦ döngüsünden
//   AYNEN aktarıldı (aşağıda `maddeSina`, satır satır aynı ifadeler).
// (b) YERİNE — bu sınıf için:
//   B1 dosya çekirdek (data/olaylar*) · B2 k:"fetih" ya da etiket toprak-kazanc
//   B3 hiçbir b/d cümleciğinde (eski (b) aletiyle) Osmanlı dışı KAZANAN yok; birden çok kazanan / kazanan=kaybeden yok
//   B4 metin yabancı bir ele geçirme anlatmıyor: Osmanlı dışı bir aktör (devlet · halk · hükümdar · isyancı) bir
//      ele geçirme fiilinin ÖZNESİ olarak geçmiyor (FH-kuralları aşağıda)
//   B5 geri alma başkasınca · kuşatma (alınmadan) · akın · sefer · "kaybı" maddesi DIŞARIDA
//   Tanıklık cümleciği: eski cumleSina'nın (a)(e) kısmını geçen ve (b)'de ya "kazanan devlet açık değil" ile
//   duran ya da kazananı AÇIKÇA osmanli bulan cümlecik.
// ⚠️ Atlasın dönem kaydı hiçbir adımda OKUNMAZ (CLAUDE.md §4).
// Kullanım: node denetim/ARAC-HALKA-FETIH-TURET-0913.js [--envanter] [--ornek N] [--yaz] [--json yol]
const fs = require("fs"), path = require("path");
const TURET_YOL = path.join(__dirname, "ARAC-HALKA-KRONOLOJI-TURET-0913.js");
const turetSrc = fs.readFileSync(TURET_YOL, "utf8");
const kes = turetSrc.indexOf("// ── ⑦ TÜRETME ──");
if (kes < 0) throw new Error("TURET-0913 kaynağında ⑦ işareti yok — kural bölümü sökülemedi");
const T = (function () {
  const process_argv = process.argv; process.argv = process.argv.slice(0, 2);   // TURET'in arg okumasını boşalt
  const r = eval(turetSrc.slice(0, kes) + "\n;({ L, norm, hepsi, yerIx, kunye, SOZLUK, SOZ_RX, idSec, adParca, esc, FIIL, OLUMSUZ, AYLAR, kaynakSina, kaynakAlan, hassasiyet, cumleler, cumleSina, ETKEN })");
  process.argv = process_argv; return r;
})();
const { L, norm, hepsi, yerIx, kunye, adParca, esc, FIIL, AYLAR, kaynakSina, kaynakAlan, hassasiyet, cumleler, cumleSina } = T;
const arg = process.argv.slice(2);
const inc = (o, k) => o[k] = (o[k] || 0) + 1;

// ── madde düzeyi (d)(e) sınavları — TURET-0913 ⑦ döngüsünden AYNEN (S12 · S13 · S13b · S15 · S15b · S16 · S16b · S19 · S19b · S20 · S21) ──
function maddeSina(o, h) {
  if (/(tahliye|bosaltil|bosaltma|cekilme|terk edip cekil)/.test(norm(o.b))) return "(e) başlık tahliye/çekilme anlatıyor";
  if (h.kes !== "yil" && /(zaferiyle birlikte|zaferi ile birlikte|seferiyle birlikte|fethiyle birlikte|dusmesiyle birlikte|dususuyle birlikte|seferi sirasinda|savasi sirasinda|kusatmasi sirasinda|seferinde)/.test(norm(o.d))) return "(d) gün başka olaya bağlanmış (…ile birlikte / …sırasında)";
  const metin = norm([o.gun, o.b, o.d].filter(Boolean).join(" "));
  const aralikYil = [...metin.matchAll(/(?=(?<!\d)(\d{3,4})\s*[-–\/]\s*(\d{2,4})(?!\d))/g)].some(m => {
    const a = +m[1], b = m[2].length < m[1].length ? +(m[1].slice(0, m[1].length - m[2].length) + m[2]) : +m[2];
    return b > a && b - a <= 3 && (a === h.yil || b === h.yil); });
  if (aralikYil) return "(d) madde yılı metinde bir yıl aralığının ucu (1518-19)";
  if (/(izleyen yillarda|sonraki yillarda|yillar icinde|bir sure sonra|tarihi belirsiz|kesin tarihi bilin|almakla gorevlendir|alip [^.]{0,60}gorevlendir)/.test(metin)) return "(d/e) metin zamanı ya da eylemi belirsiz bırakıyor";
  if (h.kes !== "yil" && /(birkac gun|birkac hafta|yalniz yil ver|yalniz yili ver|gun vermez|gun vermiyor|ay\/gun vermez|ay vermez)/.test(metin)) {
    h.kes = "yil"; h.tarih = h.tarih.slice(0, 4) + "-01-01"; h.notlar.push("madde metni gün/ayın yaklaşık ya da başka kaynaktan olduğunu söylüyor ⇒ YIL"); }
  if (h.kes === "gun") {
    const [yy, aa, gg] = h.tarih.split("-"); const gunIfade = new RegExp("(?<!\\d)" + (+gg) + "\\s+" + AYLAR[+aa - 1] + "(?![a-z])");
    const yerN = adParca(o.yer_id)[0], yerRx = new RegExp("(?<![a-z0-9])" + esc(yerN) + "(?![a-z0-9])");
    const parca = norm(String(o.d || "")).split(/[.;]\s+/).filter(p => gunIfade.test(p));
    if (parca.length && !parca.some(p => yerRx.test(p) && (FIIL.test(p) || /(girdi|girmesi|girisi|teslim|imzalan)/.test(p)) && !/(onlerine|onune|ulasti|kusatt|kusatma)/.test(p)))
      return "(d) gövdedeki gün bir ele geçirme anlatmıyor (varış/kuşatma günü)";
  }
  if (/^(savas|sefer|kusatma)$/.test(o.k || o.tur || "") && /sefer/.test(norm(o.b))) return "(e) savaş/sefer maddesi (baskın olabilir)";
  if (!o.gun && h.kes === "ay" && !new RegExp("(?<![a-z])" + AYLAR[+h.tarih.slice(5, 7) - 1] + "(?![a-z])").test(norm(o.d || "") + " " + norm(o.b || ""))) {
    h.kes = "yil"; h.tarih = h.tarih.slice(0, 4) + "-01-01"; h.notlar.push("t YYYY-MM-01, `gun` yok ve metin ayı anmıyor ⇒ YIL"); }
  return null;
}

// ── B4 · YABANCI ÖZNE ──
// Osmanlı dışı aktör kökleri (normalleştirilmiş). Sözlük kökleri + halklar + hükümdar/komutan adları + isyancılar.
const YABANCI = [...new Set([
  ...T.SOZLUK.map(s => s.kok).filter(k => k !== "osmanli"),
  "venedikli", "cenevizli", "hacli", "kazak", "kizilbas", "timur", "aksak timur", "uzun hasan", "sah ismail", "tahmasb", "sah abbas",
  "nadir", "kavalali", "mehmed ali", "vehhabi", "yunanli", "karadag", "arnavut", "celali", "asi", "isyanci", "eskiya", "hunyadi",
  "iskender bey", "skanderbeg", "kara yuluk", "cem sultan", "mustafa celebi", "duzmece", "sehzade", "musa celebi", "isa celebi",
  "emir suleyman", "cuneyd", "cuneyt", "kadi burhaneddin", "bayezid", "memlukler", "mogol", "ilhanli", "seljuk", "bizansli",
  "ermeni", "gurcu", "polonyali", "leh", "litvanya", "eflak", "bogdan", "erdel", "kirim", "sokollu",
  // FT6 (tur 1 #4 İskenderiye "General Bonapart'ın ordusu … işgal etti" · #52 Mekke "Şerif Gālib'in Mekke'yi geri alması")
  "napolyon", "bonapart", "serif", "kerim han"
].map(norm))].filter(k => k !== "sokollu");
// ⚠️ "bayezid", "sehzade", "musa celebi" … Osmanlı hanedanı ama FETRET/taht kavgası öznesi olabilir — ilk turda
//    özne sayılır (ihtiyat); örneklem gösterirse ayar yapılır.
const HAL_EK = "(?:lilar|liler|lular|luler|li|lu|lar|ler)?(?:'?(ya|ye|a|e|na|ne|dan|den|tan|ten|ndan|nden|in|nin|un|nun|i|yi|u|yu|nda|nde|da|de|ta|te|ca|ce))?";
const YAB_RX = YABANCI.map(k => ({ k, rx: new RegExp("(?<![a-z0-9])" + esc(k).replace(/\s+/g, "\\s+") + HAL_EK + "(?![a-z0-9])", "g") }));
const ELE_GECIRME = /(ele gecir|fethet|(?<![a-z])aldi(?![a-z])|(?<![a-z])alarak|(?<![a-z])alip|zaptet|isgal et|ilhak et|geri al|teslim al|hakim oldu|girdi(?![a-z])|eline gec|eline dus|tarafindan (alin|fethed|zapt|isgal|ele gec)|(?<![a-z])almasi|(?<![a-z])alisi|isgali(?![a-z])|fethi(?![a-z])|zapti(?![a-z]))/;
// FT6b (tur 1 #52 "Şerif Gālib'in Mekke'yi geri ALMASI" · #4 b "Napolyon'un Mısır'ı İŞGALİ"): GENİTİF + ad-fiil = özne
const GEN_OZNE = /^[^.;]{0,45}?((?<![a-z])almasi|(?<![a-z])alisi|(?<![a-z])alinisi|isgali|fethi|zapti|ele gecirmesi|ele gecirisi|ilhaki)(?![a-z])/;
function yabanciOzne(o) {
  const bulgular = [];
  for (const c of cumleler(o)) {
    const n = norm(c.s);
    if (!ELE_GECIRME.test(n)) continue;
    for (const { k, rx } of YAB_RX) {
      rx.lastIndex = 0; let m;
      while ((m = rx.exec(n))) {
        const hal = m[1] || "", sonra = n.slice(m.index + m[0].length, m.index + m[0].length + 60);
        // kaybeden / önceki sahip / karşı taraf: ayrılma · -ya karşı · elindeki · nesne hâli
        if (/^(dan|den|tan|ten|ndan|nden|i|yi|u|yu|nda|nde|da|de|ta|te|ca|ce)$/.test(hal)) continue;
        if (/^\s*(elinde|elindeki|hakimiyetinde|hakimiyetindeki|idaresinde|idaresindeki|kontrolunde|kontrolundeki|donanmasini|ordusunu|kuvvetlerini|kalesini|topraklarini|uzerine|karsi|karsisinda|ile|ve|agir)/.test(sonra)) continue;
        if (/^(ya|ye|a|e|na|ne)$/.test(hal) && !/^[^.;]{0,50}?(gec|teslim|birak|terk|devr|veril|dus)/.test(sonra)) continue;
        if (/^(in|nin|un|nun)$/.test(hal) && !/^\s*(eline|hakimiyetine|idaresine|egemenligine|yonetimine|denetimine|kontrolune|isgaline)/.test(sonra) && !GEN_OZNE.test(sonra)) continue;
        bulgular.push(k + (hal ? "+" + hal : "") + " @" + c.alan);
      }
    }
  }
  return bulgular;
}

// ── FT3 + FT4 · TANIKLIK CÜMLECİĞİNİN EK SINAVI (bu sınıfa özgü; eski (a)(e) sınavından SONRA) ──
// FT3 (tur 1 #29 "Sennâr (Fûnc) SULTANLIĞI teslim oldu"): eski POLITE sınavı yer adından hemen sonrasına bakıyordu;
//      araya giren parantez devlet adını gizledi ⇒ parantez atılıp yeniden sınanır
// FT4 (tur 1 #70 Cetinje "manastırı … yerinde BIRAKILDI" · #43 Mekke "zaptı için asker sevketmeyi DÜŞÜNMÜŞ … VAZGEÇMİŞTİ"):
//      eski FIIL kümesi "bırakıl/zapt" kökünü her anlamda kabul ediyor ⇒ cümlecik DAR fetih fiili taşımalı ve
//      vazgeçme/düşünme/yerinde bırakma anlatmamalı
const FIIL_FETIH = /(fethi|fethed|fetih|fethet|ele gec|zapt|teslim|alind|(?<![a-z])aldi(?![a-z])|alinis|alinmasi|(?<![a-z])dus(tu|mesi|usu|mustu)(?![a-z])|ilhak|geri al|idaresine al|idaresine gir|yonetimine gir|eline gec|katil)/;
const FIIL_RED = /(vazgec|dusunmus|dusundu|dusunerek|yerinde birak|birakildi|birakilmis|tabiiyet|haraca bagla|vergiye bagla|bîat|biat)/;
function fetihCumlecik(c, yer) {
  const n = norm(c.s), p = adParca(yer)[0];
  const temiz = n.replace(/\s*\([^)]*\)/g, "");
  const m = new RegExp("(?<![a-z0-9])" + esc(p) + "(?![a-z0-9])").exec(temiz);
  if (!m) return false;
  // FT3b (tur 2 #60 "Srebrenik BANATLIĞININ ilhakı"): polite sözlüğüne banatlık/voyvodalık/düklük ve hâl ekli biçimler
  if (/^\s*('?[a-z]{0,4}\s+)?(hanlig|krallig|cumhuriyet|beylig|sultanlig|emirlig|despotlug|dukalig|duklug|prenslig|imparatorlug|eyalet|sancag|bolgesi|vilayet|adasi|yarimadasi|hanedan|devleti|banatlig|banlig|voyvodalig|kontlug|markizlig|hakimlig|seyhlig|serifligi|imamlig)/.test(temiz.slice(m.index + p.length))) return false;
  if (!FIIL_FETIH.test(n)) return false;
  if (FIIL_RED.test(n)) return false;
  return true;
}

// ── TÜRETME ──
const yukle = (dosya, ad) => { global.window = {}; eval(L.oku(dosya)); return window[ad] || []; };
const KR = yukle("data/kaynakli_halka_kronoloji.js", "KAYNAKLI_HALKA_KRONOLOJI");
const krAnahtar = new Set(KR.map(r => r.yer + "|" + (r.tarih || r.f) + "|" + r.devlet));
const krYil = new Set(KR.map(r => r.yer + "|" + String(r.tarih || r.f).slice(0, 4) + "|" + r.devlet));
const huni = {}, red = {}, tanik = [], envanter = {};
let mukerrer = 0, yakinMukerrer = 0; const mukerrerListe = [];
const cekirdek = hepsi.filter(o => o._kova === "cekirdek");
for (const o of cekirdek) {
  const et = o.etiket || [];
  if (!(o.k === "fetih" || et.includes("toprak-kazanc"))) continue;
  inc(huni, "0 sınıf ham (çekirdek · k:fetih ∨ etiket:toprak-kazanc)");
  inc(envanter, "k:" + o.k);
  const bn = norm(o.b);
  // FT1 (tur 1 #4 k:savas Napolyon · #43 k:siyaset Hicaz bîatı · #73 k:vassal Zeta tâbiiyeti): etiket toprak-kazanc
  //     tek başına fetih DEMEZ — işgal, bîat, tâbiiyet de o etiketi taşıyor ⇒ YALNIZ k:"fetih"
  if (o.k !== "fetih") { inc(red, "FT1 k fetih değil (etiket toprak-kazanc yalnız)"); continue; }
  // FT2 (tur 1 #34 Şam 1832 İbrâhim Paşa · #30 Kordofan "Mısır'ın Sudan hâkimiyeti" · #31 Tripoliçe "Mısır kuvvetleri"):
  //     1805 sonrası Kavalalı Mısır'ı ayrı bir aktör — bazen Osmanlı ADINA, bazen Osmanlı'ya KARŞI; metin ayırmıyor ⇒ ATLA
  // FT2b (tur 2 #24 Dongola 1821 "fetheden KAHİRE'dir, yöneten de Kahire olacaktır"): başkent adı da aktör adıdır
  if (+String(o.t).slice(0, 4) >= 1805 && /(kavalali|mehmed ali|mehmet ali|ibrahim pasa|misir kuvvet|misir ordu|misir'in|misirli|kahire'dir|kahire'nin|kahire tarafindan|kahire'ye bagl)/.test(norm([o.b, o.d, o.gun].join(" ")))) { inc(red, "FT2 Kavalalı/Mısır aktörü (1805 sonrası)"); continue; }
  // B5 madde düzeyi
  if (/^(kayip|sefer|kusatma|isyan)$/.test(o.k || "")) { inc(red, "B5 k kayıp/sefer/kuşatma/isyan"); continue; }
  if (et.includes("toprak-kayip") || et.includes("toprak-kaybi")) { inc(red, "B5 etiket toprak-kayıp da taşıyor"); continue; }
  if (/(kaybi|kaybed|elden cik|elinden cik|terk|sefer|akin|yagma|kusatmasi(?!.*fethi)|kusatma(?![a-z])|isyan|ayaklanma|tahliye|iadesi|geri verildi)/.test(bn)) { inc(red, "B5 başlık kayıp/sefer/akın/kuşatma/isyan/iade"); continue; }
  // FT7 (tur 3 #31 Kahire 1517 "Osmanlı birliklerinin Kahire'ye İLK GİRİŞİ" · "bu giriş şehrin TAM KONTROLÜ ANLAMINA
  //     GELMİYORDU" · alıntı "fethi … TAMAMLANACAKTIR"): giriş ≠ ele geçirme; metin kontrolü açıkça reddediyorsa ATLA
  // FT7b (tur 4 sınavı: ilk FT7 "girisi" kökü "Hersek Düklüğü'ne ilk GİRİŞİN açılması" Foça 1465'i — tur 3'te DOĞRU — düşürdü)
  //      ⇒ yalnız yerin KENDİSİNE giriş: "<yer>'(y)e (ilk) girişi" kalıbı, kelime sınırıyla
  if (/(e|a|ye|ya)\s+(ilk\s+)?girisi(?![a-z])|onlerine varis/.test(bn) || /(tam kontrolu anlamina gelmi|kontrolu anlamina gelmiyor|henuz tamamlanmam|direnisi henuz kirilmam)/.test(norm(o.d || ""))) { inc(red, "FT7 giriş/kontrol reddi — ele geçirme değil"); continue; }
  inc(huni, "1 B5 başlık");
  if (o.kapsam_genis) { inc(red, "kapsam_genis"); continue; }
  if (!o.yer_id || (yerIx[o.yer_id] || []).length !== 1) { inc(red, o.yer_kon && !o.yer_id ? "yer_kon var ama yer_id yok" : "yer_id yok/tek değil"); continue; }
  if (/^(bolge|konfederasyon)$/.test(yerIx[o.yer_id][0].tur || "")) { inc(red, "(a) yer_id BÖLGE temsil noktası"); continue; }
  inc(huni, "2 (a) yer_id tek");
  const ks = kaynakSina(o); if (!ks.ok) { inc(red, "(c) " + ks.neden); continue; }
  inc(huni, "3 (c) kaynak");
  const h = hassasiyet(o, ks.gunSupheli); if (!h.ok) { inc(red, "(d) " + h.neden); continue; }
  const ms = maddeSina(o, h); if (ms) { inc(red, ms); continue; }
  // FT5 (tur 1 #7 Manisa `gun`:"1390 kışı"): mevsim yılı ikiye bölebilir (Aralık-Şubat) ⇒ yıl bile kesin değil
  if (/(?<![a-z])(kisi|kisin|kis aylari|kisinda)(?![a-z])/.test(norm(o.gun || ""))) { inc(red, "FT5 gun mevsim (kışı) — yıl sınırını aşabilir"); continue; }
  inc(huni, "4 (d)(e) madde düzeyi");
  // B3 + tanıklık cümleciği
  const sonuc = []; let yabanciKazanan = null, sonNeden = null;
  for (const c of cumleler(o)) {
    const r = cumleSina(c, o.yer_id, h.yil);
    if (r.ok) { if (r.soz.kok === "osmanli") { if (fetihCumlecik(c, o.yer_id)) sonuc.push({ c, yol: "acik-osmanli" }); } else yabanciKazanan = r.soz.kok; }
    else if (/^kazanan devlet açık değil/.test(r.neden)) { if (fetihCumlecik(c, o.yer_id)) sonuc.push({ c, yol: "cekirdek-gelenek", bulunan: r.neden }); }
    else { if (/^(birden çok kazanan|aynı devlet hem)/.test(r.neden)) yabanciKazanan = yabanciKazanan || r.neden; if (!sonNeden || c.alan === "b") sonNeden = r.neden; }
  }
  // B3 tüm cümleciklerde (tanıklık cümleciği olmasa bile): eski (b) aleti Osmanlı dışı kazanan buluyor mu
  if (yabanciKazanan) { inc(red, "B3 metinde Osmanlı dışı kazanan (" + String(yabanciKazanan).replace(/:.*$/, "") + ")"); continue; }
  if (!sonuc.length) { inc(red, "(a/e) " + String(sonNeden).replace(/:.*$/, "")); continue; }
  inc(huni, "5 (a)(e) cümlecik + B3");
  const yb = yabanciOzne(o);
  if (yb.length) { inc(red, "B4 yabancı özne + ele geçirme fiili"); o._yb = yb; continue; }
  inc(huni, "6 B4 yabancı özne yok");
  const bulgu = sonuc.find(r => r.c.alan === "b") || sonuc[0];
  const anahtar = o.yer_id + "|" + h.tarih + "|osmanli";
  if (krAnahtar.has(anahtar)) { mukerrer++; mukerrerListe.push(anahtar); continue; }
  if (krYil.has(o.yer_id + "|" + h.tarih.slice(0, 4) + "|osmanli")) yakinMukerrer++;
  inc(huni, "7 kronoloji dosyasıyla mükerrer değil");
  tanik.push({ o, h, bulgu, kn: kaynakAlan(o) });
}

// ── KAYIT ──
const slugla = s => norm(s).replace(/\(.*?\)/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 28);
const idSay = {};
const kayitlar = tanik.map(x => {
  const { o, h, bulgu, kn } = x;
  let id = "hf-" + slugla(o.yer_id) + "-" + h.tarih.slice(0, 4);
  idSay[id] = (idSay[id] || 0) + 1; if (idSay[id] > 1) id += "-" + idSay[id];
  const alinti = bulgu.c.s.length > 260 ? bulgu.c.s.slice(0, 257) + "…" : bulgu.c.s;
  const r = { id, yer: o.yer_id, devlet: "osmanli", tarih: h.tarih, kesinlik: h.kes };
  r.kaynak = Object.assign({}, kn.k, { alinti, alinti_ozet: true, alinti_kaynagi: "kronoloji maddesi (" + bulgu.c.alan + ") — madde metni, kaynağın cümlesi değil", gelenek: kn.gelenek });
  r.rapor = o._f + " · t:" + o.t + " · b:«" + o.b + "» · türetme: denetim/ARAC-HALKA-FETIH-TURET-0913.js · denetim/HALKA-FETIH-TURETME-0913.md";
  const notlar = ["Alıntı ÇEKİRDEK KRONOLOJİ MADDESİNİN metnidir, kaynağın kendi cümlesi DEĞİL; kaynak gövdesi bu türetmede OKUNMADI."];
  notlar.push(bulgu.yol === "acik-osmanli" ? "Metin kazananı adıyla Osmanlı diye anıyor."
    : "Kazanan devlet metinde ADIYLA geçmiyor; Emre kararı (13 Eylül 2026) gereği çekirdek Osmanlı kronolojisinin fetih maddesi OSMANLI sayıldı (yabancı özne sınavı geçti).");
  if (h.notlar.length) notlar.push(...h.notlar);
  r.not = notlar.join(" ");
  x.yol = bulgu.yol;
  return r;
});

// ── ÇIKTI ──
console.log("HUNİ"); for (const [k, v] of Object.entries(huni)) console.log("  " + k.padEnd(58) + v);
console.log("RED"); for (const [k, v] of Object.entries(red).sort((a, b) => b[1] - a[1])) console.log("  " + String(v).padStart(4) + "  " + k);
console.log("kronoloji dosyasıyla aynı yer+gün+devlet (atlandı): " + mukerrer + " · aynı yer+yıl+devlet ama farklı gün/kesinlik (yazıldı): " + yakinMukerrer);
console.log("\nTANIKLIK " + kayitlar.length + " · yol " + JSON.stringify(tanik.reduce((a, x) => (inc(a, x.yol), a), {})) +
  " · alan " + JSON.stringify(tanik.reduce((a, x) => (inc(a, x.bulgu.c.alan), a), {})) + " · kesinlik " + JSON.stringify(kayitlar.reduce((a, r) => (inc(a, r.kesinlik), a), {})));
if (arg.includes("--envanter")) {
  console.log("ENVANTER k: " + JSON.stringify(envanter));
  console.log("B4 örnekleri:"); for (const o of cekirdek.filter(o => o._yb)) console.log("  " + o.t + " " + o.b + "  ← " + o._yb.join(","));
}
const oi = arg.indexOf("--ornek");
if (oi >= 0) {
  const N = +arg[oi + 1] || 50;
  let s = 20260913 >>> 0; const rnd = () => { s = (s + 0x6D2B79F5) >>> 0; let t = s; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  const ix = kayitlar.map((_, i) => i);
  for (let i = ix.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [ix[i], ix[j]] = [ix[j], ix[i]]; }
  const sec = ix.slice(0, Math.min(N, ix.length)).sort((a, b) => a - b);
  console.log("\nÖRNEKLEM (mulberry32 tohum 20260913, n=" + sec.length + ")");
  for (const i of sec) { const r = kayitlar[i], x = tanik[i];
    console.log("\n#" + i + " " + r.id + " · " + r.tarih + " · " + r.kesinlik + " · " + x.o._f + " · yol " + x.yol);
    console.log("   gun: " + (x.o.gun || "—") + " · t: " + x.o.t + " · k: " + x.o.k + " · kaynak: " + String(x.o.kaynak).slice(0, 90));
    console.log("   b: " + x.o.b);
    console.log("   d: " + String(x.o.d || "").slice(0, 900));
    console.log("   ALINTI[" + x.bulgu.c.alan + "]: " + r.kaynak.alinti);
  }
}
const ji = arg.indexOf("--json");
if (ji >= 0) fs.writeFileSync(arg[ji + 1], JSON.stringify(kayitlar, null, 1));
if (arg.includes("--yaz")) {
  const bas = [
    "// KAYNAKLI SAHİPLİK HALKASI — ÇEKİRDEK OSMANLI KRONOLOJİSİNİN FETİH MADDELERİNDEN TÜRETME",
    "// Yazan: HALKA-FETIH · 13 Eylül 2026 · şema: VERI-YAPISI.md \"Kaynaklı sahiplik halkası\"",
    "// Ad alanı: data/kaynakli_halka_fetih.js → window.KAYNAKLI_HALKA_FETIH (CLAUDE.md §7)",
    "// 🤖 ÜRETİLMİŞ — ELLE DÜZENLEME. Üretici: denetim/ARAC-HALKA-FETIH-TURET-0913.js --yaz",
    "// Kural, örneklem isabeti ve Emre kararı: denetim/HALKA-FETIH-TURETME-0913.md",
    "// 🔴 Alıntılar KRONOLOJİ MADDESİNİN metnidir (alinti_ozet:true · alinti_kaynagi); kaynak gövdesi OKUNMADI.",
    "// 🔴 Atlas dönemi hiçbir adımda okunmadı (CLAUDE.md §4 atlas referans değildir).",
    "window.KAYNAKLI_HALKA_FETIH = ["
  ].join("\n");
  fs.writeFileSync(path.join(L.KOK, "data/kaynakli_halka_fetih.js"), bas + "\n" + kayitlar.map(r => JSON.stringify(r)).join(",\n") + "\n];\n");
  console.log("\n✓ yazıldı data/kaynakli_halka_fetih.js · " + kayitlar.length + " kayıt");
}
module.exports = { kayitlar, tanik };
