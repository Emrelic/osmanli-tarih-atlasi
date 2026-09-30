// ONCE1281-ORTADOGU — parçaları birleştirmeden önce düzeltir (tekilleştirme · yeni gelen kimlikler)
//   node denetim/ARAC-ONCE1281-ORTADOGU-DUZELT.js <scratch-dizini>
// Okur <scratch>/parca-{A,B,C}.json + ek-dokunmadim.json · yazar <scratch>/son/ altına aynı adlarla.
// Her işlem EŞLEŞME SAYISINI basar; beklenen 1 değilse ✗ ile durur (sessiz ıskalama yok).
const fs = require("fs"), path = require("path");
const SC = process.argv[2], OUT = path.join(SC, "son");
fs.mkdirSync(OUT, { recursive: true });
const P = {}; for (const h of "ABC") P[h] = JSON.parse(fs.readFileSync(path.join(SC, `parca-${h}.json`), "utf8"));
let hata = 0;
function bul(h, t, rx) {
  const r = P[h].kronoloji.filter(m => m && m.t === t && rx.test(m.b));
  if (r.length !== 1) { hata++; console.log(`✗ ${h} ${t} /${rx.source}/ → ${r.length} eşleşme`); return null; }
  return r[0];
}
function sil(h, t, rx, neden) { const m = bul(h, t, rx); if (!m) return; P[h].kronoloji[P[h].kronoloji.indexOf(m)] = null; console.log(`sil  ${h} ${t} ${m.b} — ${neden}`); }
function cikar(h, t, rx, id, neden) {
  const m = bul(h, t, rx); if (!m) return;
  if (!m.taraflar.includes(id)) { hata++; console.log(`✗ ${h} ${t} taraf yok: ${id}`); return; }
  m.taraflar = m.taraflar.filter(x => x !== id); console.log(`çıkar ${id} ← ${h} ${t} ${m.b} — ${neden}`);
  if (!m.taraflar.length) { P[h].kronoloji[P[h].kronoloji.indexOf(m)] = null; console.log("     (taraf kalmadı → madde düştü)"); }
}
function ekle(h, t, rx, id, neden) {
  const m = bul(h, t, rx); if (!m) return;
  if (!m.taraflar.includes(id)) m.taraflar.push(id);
  m.ic_not_taraf = (m.ic_not_taraf ? m.ic_not_taraf + " · " : "") + `${id} taraf olarak birleştirmede eklendi (${neden})`;
  console.log(`ekle ${id} → ${h} ${t} ${m.b}`);
}
const YIL = (h, y, rx) => { const r = P[h].kronoloji.filter(m => m && m.t.startsWith(y) && rx.test(m.b)); if (r.length !== 1) { hata++; console.log(`✗ ${h} ${y} /${rx.source}/ → ${r.length}`); return null; } return r[0].t; };

// ① Başka oturumdan devletler.js'e girmiş iki künye → dokunmadım
for (const [h, id, eskiF, eskiT] of [["A", "buveyhi", "932-01-01", "1062-01-01"], ["B", "suriye-selcuklu", "1079-01-01", "1117-01-01"]]) {
  const k = P[h].kunyeler.find(k => k.id === id);
  const olcum = `Bu oturumun ölçümü: f ${k.f} · t ${k.t} · ${k.ic_not_f || ""} · ${k.ic_not_t || ""}`;
  Object.keys(k).forEach(a => delete k[a]);
  Object.assign(k, { islem: "dokunmadim", id, f: eskiF, t: eskiT,
    ic_not_f: `Künye bu oturum çalışırken başka bir oturumun önerisiyle devletler.js'e girdi (evren 721→779). Yeniden AÇILMADI. ${olcum}` });
  console.log("dokunmadım:", id);
}
cikar("A", "1055-12-21", /Tuğrul Bey Bağdat/, "buveyhi", "buveyhi künyesinde 1055-12-18 Tuğrul maddesi zaten var");

// ② Gruplar arası mükerrer
sil("B", "1144-12-24", /Urfa/, "A 1144-12-24 ile aynı olay (A'da begteginli de taraf)");
cikar("B", "1183-06-11", /Halep/, "zengi-halep", "zengi-halep künye iskeletinde 1183-06-12 Halep maddesi var");
{ const m = bul("B", "1183-06-11", /Halep/); if (m) m.ic_not_t = "TDV İÇ ÇELİŞKİ: eyyubiler '17 Safer 579 (11 Haziran 1183)' · zengiler '18 Safer 579 (12 Haziran 1183)'. Eyyûbî maddesi eyyubiler gününü, zengi-halep iskeleti zengiler gününü taşır."; }

// ③ Dosya maddesi künye iskeletini tekrarlıyor (C) — iskeleti olan kimlik taraflardan çıkar
sil("C", "1047-01-01", /Cebelimesâr/, "suleyhi iskeletiyle aynı olay");
sil("C", "1076-01-01", /Lahsâ düştü/, "karmati ve uyuni iskeletleriyle aynı olay");
cikar("C", "1080-01-01", /Aden/, "zureyi", "zureyi iskeletiyle aynı olay");
sil("C", "1159-08-01", /Zebîd'e girdi/, "necahi ve benu-mehdi-zebid iskeletleriyle aynı olay");
cikar("C", "1174-01-01", /Turan Şah Yemen/, "benu-mehdi-zebid", "iskeletle aynı olay");
cikar("C", "1174-01-01", /Turan Şah Yemen/, "hamdani-yemen", "iskeletle aynı olay");
cikar("C", "1175-01-01", /Aden'i aldı/, "zureyi", "iskeletle aynı olay");
cikar("C", "1229-01-01", /Resûl/, "resuli", "iskeletle aynı olay");
cikar("C", "1229-01-01", /Usfûr/, "usfuri", "iskeletle aynı olay");
ekle("C", "1236-01-01", /Uvâl/, "salgurlu", "C notu 4 — alan taraf Fars Atabegi Ebû Bekir");
cikar("C", "1236-01-01", /Uvâl/, "uyuni", "uyuni iskeletiyle aynı olay; madde Salgurlu tarafında kalır");
cikar("C", "1098-01-01", /Sebe b\. Ahmed/, "hamdani-yemen", "iskeletle aynı olay");

// ④ Künye penceresi dışı taraf
cikar("A", "1218-01-01", /Lü'lü'/, "lului", "lului künyesi 1233'te başlıyor — pencere dışı");

// ⑤ Bu oturum çalışırken devletler.js'e giren kimlikler — ajanların notlarındaki listeye göre
ekle("A", "1055-12-21", /Tuğrul/, "buyuk-selcuklu", "A notu 10");
ekle("A", "1057-01-19", /Sincar/, "buyuk-selcuklu", "A notu 10");
{ const t = YIL("A", "1058", /Besâsîrî|Bağdat/); if (t) ekle("A", t, /Besâsîrî|Bağdat/, "buyuk-selcuklu", "A notu 10"); }
ekle("A", "1060-01-01", /Tuğrul/, "buyuk-selcuklu", "A notu 10");
ekle("A", "1084-01-01", /Melikşah/, "buyuk-selcuklu", "A notu 10");
{ const t = YIL("A", "1108", /Sadaka|Nu‘maniye|Tapar/); if (t) ekle("A", t, /Sadaka|Nu‘maniye|Tapar/, "buyuk-selcuklu", "A notu 10 — 1108'de Muhammed Tapar Büyük Selçuklu sultanıdır, Irak Selçuklu künyesi 1118'de başlar"); }
for (const t of ["1135-06-24", "1135-09-25", "1157-01-01"]) { const r = P.A.kronoloji.filter(m => m && m.t === t); if (r.length === 1) ekle("A", t, /./, "irak-selcuklu", "A notu 10"); else { hata++; console.log("✗ A", t, r.length); } }
ekle("A", "1029-01-01", /Gazneli/, "gazneli", "A notu 10");
ekle("A", "1048-01-01", /Kavurd/, "kirman-selcuklu", "A notu 10");
{ const r = P.A.kronoloji.filter(m => m && m.t.startsWith("1036")); if (r.length === 1) ekle("A", r[0].t, /./, "bizans", "A notu 10"); else { hata++; console.log("✗ A 1036", r.length); } }
for (const [y, rx] of [["1070", /Selçuklu|Alparslan|hutbe/], ["1075-01", /Selçuklulara/], ["1086-12", /Melikşah/], ["1094", /Aksungur/], ["1104", /Harran|Çökürmüş/], ["1111", /Mevdûd/], ["1113-06", /Mevdûd|Baudouin/]]) {
  const t = YIL("B", y, rx); if (t) ekle("B", t, rx, "buyuk-selcuklu", "B notu 8");
}
for (const [y, rx] of [["1030", /Bizans/], ["1075", /Menbic/], ["1138", /Şeyzer|Bizans/]]) { const t = YIL("B", y, rx); if (t) ekle("B", t, rx, "bizans", "B notu 8"); }
for (const [y, rx] of [["1244", /Katîf/], ["1256", /Katîf/]]) { const t = YIL("C", y, rx); if (t) ekle("C", t, rx, "salgurlu", "C notu 4"); }
for (const [y, rx] of [["1069", /Mekke|hutbe/], ["1089", /Medine/], ["1092", /Medine/]]) { const t = YIL("C", y, rx); if (t) ekle("C", t, rx, "buyuk-selcuklu", "C notu 4"); }
ekle("C", "1174-01-01", /Nûreddin/, "zengi-halep", "C notu 4 — Nûreddin Mahmud kolu");

// ⑥ İkinci tur mükerrer (A↔B aynı olay, farklı başlık)
sil("B", "1058-01-01", /Besâsîrî/, "A 1058-12-27 ile aynı olay (A gün-kesin)");
sil("A", "1174-01-01", /Dımaşk, Hama, Humus/, "B 1174-10-12 ile aynı olay (B eyyubi+zengi-halep taraflı)");

// ⑦ Künye penceresi
{ const k = P.B.kunyeler.find(k => k.id === "boriler");
  k.t = "1154-04-25"; k.kronoloji.find(m => m.tur === "son").t = "1154-04-25";
  k.kronoloji.find(m => m.tur === "son").gun = "25 Nisan 1154 (gün TDV zengiler'den; tugteginliler yalnız 'Safer 549 / Nisan 1154' verir)";
  k.ic_not_t = "TDV: zengiler (\"25 Nisan 1154’te Dımaşk’ı zapteden Nûreddin, Halep ve Dımaşk’ı kendi hâkimiyeti altında birleştirmek suretiyle bölgenin en güçlü hükümdarı oldu.\") · TDV: tugteginliler ay verir (\"Safer 549’da (Nisan 1154)\") — ikisi uyumlu; gün ikinci TDV maddesinden. (Birleştirmede 1154-01-01'den düzeltildi: yıl başı, Dımaşk'ı 4 ay erken zengi-halep'e verirdi.)";
  console.log("boriler t → 1154-04-25"); }
cikar("A", "1154-04-25", /Dımaşk/, "boriler", "boriler künye iskeletinin son maddesiyle aynı olay");
cikar("C", "1156-01-01", /Sürûr/, "benu-mehdi-zebid", "künye 1159'da başlıyor — hareket dönemi, devlet değil");
cikar("C", "1158-01-01", /Fâtik/, "benu-mehdi-zebid", "künye 1159'da başlıyor");
cikar("C", "1069-01-01", /Lahsâ/, "uyuni", "künye 1076'da başlıyor — kuşatma dönemi");

// ⑧ Künye başına 15 tavanı (ortak şartname §5) — künyenin ÇEVRESEL kaldığı maddelerden taraf çıkarılır;
//    madde öteki taraflarda yaşar. Her çıkarma maddeye not düşülür.
const TAVAN = (h, t, rx, id) => { const m = bul(h, t, rx); if (!m) return; m.taraflar = m.taraflar.filter(x => x !== id);
  m.ic_not_taraf = (m.ic_not_taraf ? m.ic_not_taraf + " · " : "") + `${id} taraflardan çıkarıldı: künye başına 15 madde tavanı (çevresel taraf)`;
  console.log(`tavan ${id} ← ${h} ${t} ${m.b.slice(0, 60)}`); if (!m.taraflar.length) { hata++; console.log("✗ taraf kalmadı"); } };
TAVAN("A", "1010-01-01", /Fâtımî/, "abbasi"); TAVAN("A", "1123-01-01", /Dübeys/, "abbasi"); TAVAN("B", "1070-07-31", /Alparslan/, "abbasi");
TAVAN("A", "1010-01-01", /Fâtımî/, "fatimi"); TAVAN("A", "1057-01-19", /Sincar/, "fatimi"); TAVAN("A", "1060-01-01", /Tuğrul/, "fatimi"); TAVAN("B", "1108-01-01", /Trablusşam/, "fatimi");
TAVAN("B", "1128-01-01", /Şeyzer/, "zengi-musul"); TAVAN("B", "1137-01-01", /Pons/, "zengi-musul"); TAVAN("B", "1209-01-01", /ittifak/, "zengi-musul");
for (const [h, t, rx] of [["A", "1182-01-01", /Musul/], ["A", "1193-01-01", /Kökböri/], ["A", "1204-01-01", /Kefr/], ["A", "1210-01-01", /Keykâvus/],
  ["A", "1219-01-01", /Zap/], ["A", "1220-01-01", /Sincar/], ["A", "1224-07-02", /Kökböri/], ["A", "1186-03-03", /tâbi/],
  ["C", "1174-01-01", /Nûreddin/], ["A", "1175-01-01", /Halep-Musul/]]) TAVAN(h, t, rx, "eyyubi");
sil("C", "1175-01-01", /Aden'i aldı/, "tek tarafı eyyubi kalmıştı (zureyi iskeleti aynı olayı taşıyor) — eyyubi 15 tavanında");
ekle("B", "1219-11-05", /Dimyat/, "kudus-kralligi", "Akkâ Kralı Jean de Brienne V. Haçlı Seferi'nin içindeydi (TDV eyyubiler); eyyubi tavan dolu");
TAVAN("B", "1219-11-05", /Dimyat/, "eyyubi");
TAVAN("C", "1092-11-25", /Medine/, "buyuk-selcuklu");
{ const k = P.C.kunyeler.find(k => k.id === "medine-emirligi");
  k.t_durum = "BULUNAMADI — TDV medine emirliğin sonuna yıl vermiyor. Künye t olmadan devletler.js'e birleştirilemez; t uydurulmadı. Koordinatör kararı: ya kaynak bulunana dek bekletilir ya düşürülür (düşerse bu künyeye bağlı 3 madde eşlenemeyen taraf olur)."; }

for (const h of "ABC") { P[h].kronoloji = P[h].kronoloji.filter(Boolean); fs.writeFileSync(path.join(OUT, `parca-${h}.json`), JSON.stringify(P[h], null, 1), "utf8"); }
fs.copyFileSync(path.join(SC, "ek-dokunmadim.json"), path.join(OUT, "ek-dokunmadim.json"));
console.log("\nDÜZELTME HATASI:", hata, "· yazıldı:", OUT);
