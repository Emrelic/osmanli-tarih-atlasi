// kronoloji_say.js — §1.5 "Kronoloji" satırının sayıları: madde · duygu ·
// yer_id · vefat_id. `arac/durum_tablosu.py` çağırır, stdout'a tek JSON.
//
// 🔴 NİÇİN JS (5 Ekim 2026, UMIT-W7-DALGA3-1006): bu dört sayı 2 Ekim'e
// kadar REGEX'le metinden sayılıyordu ve dördü de yanlıştı — İKİ YÖNLÜ:
//   FAZLA  yorum satırı (ek17:39 · ek5:340 · ok106:43/76/79) · blok yorumla
//          kapatılmış ÇÜRÜDÜ maddeleri (sh110 · sk105) · iç içe
//          `alt_kronoloji` adımları (olaylar.js, 29)
//   EKSİK  `{` ayrı satırda (ek8) · JSON biçimli anahtar `"t":` (kamerika) ·
//          boşluklu `duygu: [` (ek21 · ek22)
//   Ölçüldü: madde 1774 (gerçek 1768) · duygu 1398 (1418) · yer_id 1641
//   (1629 dolu) · vefat_id 28 (27). Net fark küçük göründüğü için yıllarca
//   fark edilmedi: TOPLAM DOĞRU GÖRÜNÜR, BİLEŞENLER YANLIŞTIR.
// ⇒ Burada dosyalar TARAYICI GİBİ yüklenir (`eval`, app.js'in okuduğu
//   `window.*` dizileri) ve NESNE ALANI sayılır — biçim, yorum ve boşluk
//   sayımı etkileyemez.
//
// EVREN (`denetle.py:olaylari_yukle` ile aynı — Değişmez 2 çekirdeği):
//   dosya   argv[2..] — Python `glob("data/olaylar*.js")` verir
//   dizi    `window.OLAYLAR\w*` (denetle.py:1114 deseni); başka dizi
//           tanımlayan dosya SAYILIR ama raporda `diger_dizi`de görünür
//   madde   bu dizilerin ÜST DÜZEY nesneleri
//   🔴 `alt_kronoloji` adımları MADDE DEĞİLDİR — genel koordinatör hükmü:
//      "ekranın ayrı madde olarak gösterdiği kadarıyla sayılır". Ölçüldü:
//      app.js olay listesini üst düzey dizilerden kurar (`app.js:7035`
//      `.reduce(concat)`); `alt_kronoloji` yalnız `derinAdimlari()`
//      (`app.js:15361`) ile ana maddenin "🔎 Olayın içine gir · N adım"
//      penceresinde ADIM olarak görünür. Ayrı sayı olarak raporlanır.
//   duygu    `duygu` alanı DİZİ olan madde
//   yer_id   `yer_id` alanı DOLU olan madde (`yer_id:""` bir bağ değil,
//            "konum yok" beyanıdır — 4 madde; `yer_id_bos` ayrı raporlanır)
//   vefat_id `vefat_id` alanı dolu olan madde
//
// 🔴 ÖLÇÜLEMEDİ asla eski sayıya düşmez: bir dosya yüklenemezse ya da hiç
//    `OLAYLAR*` dizisi tanımlamazsa `hata` döner ve Python dört sayıyı da
//    ÖLÇÜLEMEDİ yazar. (Bir dosyanın sessizce 0 sayılması, O7'nin — iki
//    parçalı sonekin listeden sessizce düşmesinin — aynı sınıfıdır.)
"use strict";
const fs = require("fs");

const dosyalar = process.argv.slice(2);
const r = { dosya: dosyalar.length, madde: 0, duygu: 0, yer_id: 0, yer_id_bos: 0,
            vefat_id: 0, alt_adim: 0, dosya_basi: {}, diger_dizi: [] };
const hatalar = [];

for (const yol of dosyalar) {
  const ad = yol.replace(/\\/g, "/").split("/").pop();
  const W = {};
  try {
    new Function("window", fs.readFileSync(yol, "utf8"))(W);
  } catch (e) {
    hatalar.push(ad + ": yüklenemedi — " + String(e && e.message || e).slice(0, 120));
    continue;
  }
  const d = { madde: 0, duygu: 0, yer_id: 0, vefat_id: 0, alt_adim: 0 };
  let olayDizisi = 0;
  for (const k of Object.keys(W)) {
    if (!Array.isArray(W[k])) continue;
    if (!/^OLAYLAR\w*$/.test(k)) { r.diger_dizi.push(ad + ":" + k); continue; }
    olayDizisi++;
    for (const o of W[k]) {
      if (!o || typeof o !== "object") continue;
      d.madde++;
      if (Array.isArray(o.duygu)) d.duygu++;
      if (o.yer_id) d.yer_id++;
      else if ("yer_id" in o) r.yer_id_bos++;
      if (o.vefat_id) d.vefat_id++;
      if (Array.isArray(o.alt_kronoloji)) d.alt_adim += o.alt_kronoloji.length;
    }
  }
  if (!olayDizisi) {
    hatalar.push(ad + ": OLAYLAR* dizisi tanımlamıyor");
    continue;
  }
  r.dosya_basi[ad] = d;
  for (const a in d) r[a] += d[a];
}

process.stdout.write(JSON.stringify(hatalar.length ? { hata: hatalar } : r));
