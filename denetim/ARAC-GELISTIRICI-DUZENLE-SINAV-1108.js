// ARAC-GELISTIRICI-DUZENLE-SINAV-1108 — kaydedilmiş post-it'i düzenleme (Emre 8 Kasım 2026:
// "kaydedilmiş mesajları sonradan düzenleme, resim ekleme ve metni değiştirme … düzenle butonu
// olsun … metni ve gerekirse resim, bölge ekleme imkânı").
//
//   node denetim/ARAC-GELISTIRICI-DUZENLE-SINAV-1108.js     çıkış 0 = hepsi geçti · 1 = biri düştü
//
// TARAYICI YOK, AĞ YOK: çok bölge sınavının (ARAC-GELISTIRICI-COKBOLGE-SINAV-1016.js) sahte
// DOM + sahte harita + sahte GitHub düzeneği o dosyadan okunur; bu sınav sahte API'ye
// PATCH / yorum / etiket / resim dalı (git + contents) uçlarını ekler. Tanınmayan istek düşer.
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm");
const KOK = path.resolve(__dirname, "..");
const kaynak = fs.readFileSync(path.join(__dirname, "ARAC-GELISTIRICI-COKBOLGE-SINAV-1016.js"), "utf8");
const D = eval(kaynak.slice(kaynak.indexOf("let gecti"), kaynak.indexOf("(async function () {")) +
  ";({ ortam, agac, tik, kopya, KARE, DAIRE, KALEM, JSKOD, jsonCoz, formDugme, formMetin, formSatir, " +
  "sonuc: () => [gecti, dustu], sina })");
const { ortam, agac, tik, kopya, KARE, DAIRE, KALEM, JSKOD, jsonCoz, formDugme, formMetin, formSatir, sina } = D;

// Sahte API'yi düzenleme uçlarıyla genişlet (önce bunlar, sonra eski uçlar).
function genislet(o, dalVar) {
  const eski = o.ctx.fetch, R = "/repos/emrelic/osmanli-tarih-atlasi";
  o.yorumlar = []; o.yuklenen = []; o.git = [];
  const yanit = (d, st) => Promise.resolve({ ok: (st || 200) < 400, status: st || 200,
    json: () => Promise.resolve(d), text: () => Promise.resolve(JSON.stringify(d)) });
  o.ctx.fetch = function (url, op) {
    op = op || {}; const m = op.method || "GET", y = url.replace("https://api.github.com", "");
    const g = op.body ? JSON.parse(op.body) : null;
    let k;
    if ((k = y.match(/^\/repos\/emrelic\/osmanli-tarih-atlasi\/issues\/(\d+)$/)) && m === "PATCH") {
      o.api.istekler.push(m + " " + url);
      const is = o.api.issues.filter(x => x.number === +k[1])[0];
      Object.assign(is, g); return yanit(is);
    }
    if ((k = y.match(/\/issues\/(\d+)\/comments$/))) {
      o.api.istekler.push(m + " " + url);
      if (m === "POST") { o.yorumlar.push({ no: +k[1], body: g.body }); return yanit({ id: 1 }, 201); }
      return yanit([]);
    }
    if (/\/issues\/\d+\/labels/.test(y)) { o.api.istekler.push(m + " " + url); return yanit([]); }
    if (y === R + "/branches/postit-resim") { o.git.push("branch?"); return dalVar ? yanit({ name: "postit-resim" }) : yanit({ message: "Not Found" }, 404); }
    if ((k = y.match(/\/git\/(blobs|trees|commits|refs)$/)) && m === "POST") {
      o.git.push(k[1] + (k[1] === "commits" ? ":parents=" + g.parents.length : k[1] === "refs" ? ":" + g.ref : ""));
      return yanit({ sha: k[1] + "-sha" }, 201);
    }
    if ((k = y.match(/\/contents\/(.+)$/)) && m === "PUT") {
      o.yuklenen.push({ yol: k[1], dal: g.branch, icerik: g.content });
      return yanit({ content: { download_url: "https://raw.githubusercontent.com/emrelic/osmanli-tarih-atlasi/postit-resim/" + k[1] } }, 201);
    }
    return eski(url, op);
  };
}
function panelDugme(o, metin) { return agac(o.ctx.document.getElementById("gn-panel"), e => e.tagName === "BUTTON" && e.textContent.indexOf(metin) >= 0); }
function form(o) { return o.ctx.document.getElementById("gn-form"); }

// Notu gerçek yoldan yaz: bölge çiz → form → Kaydet. Döner: issue.
async function notYaz(o, bolgeler, metin) {
  bolgeler.forEach((b, i) => o.ic.bolgeEkle(kopya(b), i < bolgeler.length - 1));
  formMetin(o).value = metin;
  formDugme(o, "Kaydet")[0].onclick(); await tik(10);
  const is = o.api.issues[o.api.issues.length - 1];
  o.G.notlar = [o.ic.notCoz(is)];
  return is;
}

(async function () {
  // ---------------------------------------------------------------- 1
  console.log("1 · Panelde '✏️ Düzenle' → form not dolu açılır");
  const A = ortam(JSKOD); genislet(A, false);
  const is = await notYaz(A, [KARE], "Selanik 1600'de yanlış");
  const eskiJson = jsonCoz(is.body);
  A.ic.panelAc(A.G.notlar[0]);
  sina("panelde Düzenle düğmesi var", panelDugme(A, "Düzenle").length === 1);
  panelDugme(A, "Düzenle")[0].onclick();
  sina("form açıldı, başlıkta '#1 düzenle'", form(A).style.display === "block" &&
       agac(form(A), e => e.className === "gn-form-bas")[0].textContent.indexOf("#1 düzenle") >= 0);
  sina("panel kapandı", A.ctx.document.getElementById("gn-panel").style.display === "none");
  sina("metin kutusu eski metinle dolu", formMetin(A).value === "Selanik 1600'de yanlış");
  sina("eski bölge taslakta (1 satır)", formSatir(A).length === 1 && A.G.taslak[0]._eski === true);
  sina("düzenlemede görünürlük seçimi YOK (eskisi korunur)", agac(form(A), e => e.tagName === "SELECT").length === 0);
  sina("'🖼 Resim ekle' düğmesi var", formDugme(A, "Resim ekle").length === 1);

  // ---------------------------------------------------------------- 2
  console.log("2 · Metin değişir + bölge eklenir + resim eklenir → PATCH + yorum");
  formMetin(A).value = "Selanik ve Tebriz 1600'de yanlış\nikinci satır";
  formDugme(A, "Bölge ekle")[0].onclick();
  sina("'Bölge ekle' düzenlemede de çizime çıkar", form(A).style.display === "none" && A.G.kip === "kare");
  A.ic.bolgeEkle(kopya(DAIRE), false);
  sina("çizimden sonra düzenleme formuna dönüldü (2 satır, metin korundu)",
       A.G.duzen && formSatir(A).length === 2 && formMetin(A).value.indexOf("Tebriz") >= 0);
  A.G.taslakResim.push({ veri: "data:image/jpeg;base64,QUJDRA==", ad: "ekran.png" });
  A.G.taslakResim.push({ veri: "data:image/jpeg;base64,RUZHSA==", ad: "pano" });
  A.ic.formAc({ tur: "harita" });
  sina("formda 2 yeni resim önizlemesi", agac(form(A), e => /gn-resim-yeni/.test(e.className)).length === 2);
  const istekOnce = A.api.istekler.length;
  formDugme(A, "Kaydet")[0].onclick(); await tik(25);
  const v = jsonCoz(is.body);
  sina("yeni issue AÇILMADI (aynı not güncellendi)", A.api.issues.length === 1);
  sina("PATCH /issues/1 yapıldı", A.api.istekler.slice(istekOnce).some(x => /^PATCH .*\/issues\/1$/.test(x)));
  sina("başlık yeni metnin ilk satırı", is.title === "[1600-06-15] Selanik ve Tebriz 1600'de yanlış", is.title);
  sina("JSON metin yeni", v.metin === "Selanik ve Tebriz 1600'de yanlış\nikinci satır");
  sina("JSON: surum 2, 2 bölge (kare + daire)", v.surum === 2 && v.hedef.bolgeler.length === 2 &&
       v.hedef.bolgeler[0].sekil === "kare" && v.hedef.bolgeler[1].sekil === "daire" && !v.bolge);
  sina("eski bölgenin bağlamı KORUNDU (yeniden ölçülmedi)",
       JSON.stringify(v.bolgeler[0].orneklenen_nokta) === JSON.stringify(eskiJson.bolge.orneklenen_nokta) &&
       JSON.stringify(v.bolgeler[0].sahipler) === JSON.stringify(eskiJson.bolge.sahipler) && v.bolgeler[0].no === 1);
  sina("yeni bölgenin bağlamı ölçüldü (Safevî + Tebriz)", v.bolgeler[1].no === 2 &&
       v.bolgeler[1].icindeki_yerlesimler.some(x => x.ad === "Tebriz"));
  sina("_eski / _baglam iç alanları JSON'a SIZMADI", is.body.indexOf("_eski") < 0 && is.body.indexOf("_baglam") < 0);
  sina("gün, kamera, yazan, olusturuldu, görünürlük korundu",
       v.gun === eskiJson.gun && JSON.stringify(v.kamera) === JSON.stringify(eskiJson.kamera) &&
       v.olusturuldu === eskiJson.olusturuldu && JSON.stringify(v.gorunur) === JSON.stringify(eskiJson.gorunur));
  sina("resim dalı yetim kuruldu (blob→tree→commit parents=0→ref)",
       A.git.join(",") === "branch?,blobs,trees,commits:parents=0,refs:refs/heads/postit-resim", A.git.join(","));
  sina("2 resim postit-resim dalına yüklendi (main DEĞİL)", A.yuklenen.length === 2 &&
       A.yuklenen.every(x => x.dal === "postit-resim" && /^resim\/\d{4}-\d{2}-\d{2}\/\d+-\d\.jpg$/.test(x.yol)) &&
       A.yuklenen[0].icerik === "QUJDRA==");
  sina("JSON resimler: 2 url + ad", v.resimler && v.resimler.length === 2 && /raw\.githubusercontent/.test(v.resimler[0].url) &&
       v.resimler[0].ad === "ekran.png");
  sina("gövdede resimler markdown olarak", /\*\*Resimler:\*\*\n\n!\[resim 1\]\(https:\/\/raw/.test(is.body));
  sina("düzenleme geçmişi: 1 kayıt, değişenler doğru", v.duzenlemeler && v.duzenlemeler.length === 1 &&
       v.duzenlemeler[0].degisen.join("|") === "metin|+1 bölge|+2 resim", v.duzenlemeler && v.duzenlemeler[0].degisen.join("|"));
  sina("gövdede 'Düzenlendi:' satırı", /\*Düzenlendi: 2026-10-16 09:00 \(metin, \+1 bölge, \+2 resim\)\*/.test(is.body));
  const y = A.yorumlar[0];
  sina("issue'ya 1 yorum düştü (not.py bekle uyansın)", A.yorumlar.length === 1 && y.no === 1);
  sina("yorum Claude yorumu SAYILMAZ (🤖/**Claude ile başlamaz)", !/^\s*(🤖|\*\*Claude)/.test(y.body));
  sina("yorumda yeni metin alıntı + eklenen resimler", /> Selanik ve Tebriz/.test(y.body) && /> ikinci satır/.test(y.body) &&
       (y.body.match(/!\[resim/g) || []).length === 2);
  sina("son:emre eklendi, son:claude silindi", A.api.istekler.some(x => /^POST .*\/issues\/1\/labels$/.test(x)) &&
       A.api.istekler.some(x => /^DELETE .*labels\/son%3Aclaude$/.test(x)));
  sina("form kapandı, taslak + düzenleme durumu temizlendi", form(A).style.display === "none" && !A.G.duzen &&
       !A.G.taslak.length && !A.G.taslakResim.length);
  sina("G.notlar'daki not güncellendi (2 bölge, son emre)", A.G.notlar.length === 1 &&
       A.ic.bolgeler(A.G.notlar[0].veri).length === 2 && A.G.notlar[0].son === "emre");
  sina("panel yeniden açıldı", A.ctx.document.getElementById("gn-panel").style.display === "block");
  A.G.gorunen = null; A.ic.haritaNotlariGuncelle();
  const canli = A.markerlar.filter(m => !m.kalkti);
  sina("haritada TEK post-it (eskisi kalktı) + 2 bölge numarası",
       canli.filter(m => /gn-postit/.test(m.el.className)).length === 1 &&
       canli.filter(m => /gn-bolge-no/.test(m.el.className) && m.el.textContent !== "").length >= 2);

  // ---------------------------------------------------------------- 3
  console.log("3 · İkinci düzenleme: bölge + resim silinir, dal zaten var");
  A.ic.duzenleBasla(A.G.notlar[0]);
  sina("eski resimler formda (2, ✕'li)", agac(form(A), e => e.className === "gn-resim-sil").length === 2);
  agac(form(A), e => e.className === "gn-resim-sil")[0].onclick();
  agac(form(A), e => e.className === "gn-bolge-sil")[0].onclick();   // kareyi sil
  const gitOnce = A.git.length;
  formDugme(A, "Kaydet")[0].onclick(); await tik(25);
  const v2 = jsonCoz(is.body);
  sina("tek bölgeye inen not v1 biçimine döner (hedef.geo + bolge, surum 1)",
       v2.surum === 1 && v2.hedef.sekil === "daire" && Array.isArray(v2.hedef.geo) && v2.bolge && !v2.bolgeler);
  sina("kalan bölgenin bağlamı eski (Tebriz)", v2.bolge.icindeki_yerlesimler.some(x => x.ad === "Tebriz"));
  sina("1 resim kaldı, ikincisi", v2.resimler.length === 1 && v2.resimler[0].ad === "pano");
  sina("geçmiş 2 kayıt: −1 bölge, −1 resim", v2.duzenlemeler.length === 2 &&
       v2.duzenlemeler[1].degisen.join("|") === "−1 bölge|−1 resim", v2.duzenlemeler[1].degisen.join("|"));
  sina("yeni resim yoksa dala HİÇ dokunulmadı", A.git.length === gitOnce);
  sina("metin değişmedi → yorumda 'Yeni metin' yok", A.yorumlar.length === 2 && A.yorumlar[1].body.indexOf("Yeni metin") < 0);

  // ---------------------------------------------------------------- 4
  console.log("4 · Değişiklik yoksa hiçbir şey yazılmaz · Vazgeç paneli geri açar");
  A.ic.duzenleBasla(A.G.notlar[0]);
  const once4 = A.api.istekler.length;
  formDugme(A, "Kaydet")[0].onclick(); await tik(10);
  sina("değişiklik yok → PATCH/yorum YOK", A.api.istekler.length === once4 && A.yorumlar.length === 2);
  A.ic.duzenleBasla(A.G.notlar[0]);
  formMetin(A).value = "vazgeçilecek";
  formDugme(A, "Vazgeç")[0].onclick();
  sina("Vazgeç: form kapandı, düzenleme durumu sıfır, panel açık", form(A).style.display === "none" && !A.G.duzen &&
       A.ctx.document.getElementById("gn-panel").style.display === "block");
  sina("Vazgeç sonrası not değişmedi", jsonCoz(is.body).metin === v2.metin);

  // ---------------------------------------------------------------- 5
  console.log("5 · Madde notu: metin + resim düzenlenir, hedef dokunulmaz · dal varsa yeniden kurulmaz");
  const B = ortam(JSKOD); genislet(B, true);
  B.ic.formAc({ tur: "madde", t: "1526-08-29", gun: "1526-08-29", b: "Mohaç" });
  formMetin(B).value = "Mohaç tarihi yanlış";
  formDugme(B, "Kaydet")[0].onclick(); await tik(10);
  const isB = B.api.issues[0]; B.G.notlar = [B.ic.notCoz(isB)];
  B.ic.duzenleBasla(B.G.notlar[0]);
  sina("madde notu formu: bölge listesi YOK, metin dolu", formSatir(B).length === 0 && formMetin(B).value === "Mohaç tarihi yanlış");
  formMetin(B).value = "Mohaç tarihi yanlış — 29 Ağustos olmalı";
  B.G.taslakResim.push({ veri: "data:image/jpeg;base64,WFla", ad: "a.jpg" });
  formDugme(B, "Kaydet")[0].onclick(); await tik(25);
  const vB = jsonCoz(isB.body);
  sina("madde hedefi aynen", vB.hedef.tur === "madde" && vB.hedef.b === "Mohaç");
  sina("metin + resim yazıldı", vB.metin.indexOf("29 Ağustos") >= 0 && vB.resimler.length === 1);
  sina("dal varken git uçlarına gidilmedi", B.git.join(",") === "branch?", B.git.join(","));

  // ---------------------------------------------------------------- 6
  console.log("6 · Yeni notta da resim · resimsiz/düzenlemesiz gövde eski biçimde");
  const C = ortam(JSKOD); genislet(C, true);
  C.ic.bolgeEkle(kopya(KALEM), false);
  formMetin(C).value = "resimli yeni not";
  C.G.taslakResim.push({ veri: "data:image/jpeg;base64,QQ==", ad: "x.jpg" });
  formDugme(C, "Kaydet")[0].onclick(); await tik(25);
  const vC = jsonCoz(C.api.issues[0].body);
  sina("yeni not resimle kaydedildi", vC && vC.resimler && vC.resimler.length === 1 && C.yuklenen.length === 1);
  sina("yeni notta düzenleme geçmişi yok", !vC.duzenlemeler && C.api.issues[0].body.indexOf("Düzenlendi") < 0);

  // ---------------------------------------------------------------- 7
  console.log("7 · Token'da Contents izni yoksa açık hata, not yazılmaz");
  const E = ortam(JSKOD); genislet(E, false);
  const f0 = E.ctx.fetch;
  E.ctx.fetch = (u, o) => /\/git\/blobs$/.test(u) ? Promise.resolve({ ok: false, status: 403,
    text: () => Promise.resolve('{"message":"Resource not accessible by personal access token"}') }) : f0(u, o);
  E.ic.bolgeEkle(kopya(KARE), false);
  formMetin(E).value = "izinsiz resim";
  E.G.taslakResim.push({ veri: "data:image/jpeg;base64,QQ==", ad: "x.jpg" });
  formDugme(E, "Kaydet")[0].onclick(); await tik(25);
  const bild = E.ctx.document.getElementById("gn-bildirim");
  sina("issue açılmadı", E.api.issues.length === 0);
  sina("bildirim Contents iznini söylüyor", bild && /Contents: Read and write/.test(bild.textContent), bild && bild.textContent);
  sina("form açık kaldı, Kaydet yeniden basılabilir", form(E).style.display === "block" && !formDugme(E, "Kaydet")[0].disabled);

  // ---------------------------------------------------------------- 8
  console.log("8 · Yorumdaki resim markdown'ı panelde küçük resim olur");
  const kap = new (A.body.constructor)("div");
  A.ic.metinYaz(kap, "bak:\n![resim 1](https://raw.githubusercontent.com/a/b.jpg)\nson");
  const img = agac(kap, e => e.tagName === "IMG");
  sina("1 küçük resim, metinden markdown silindi", img.length === 1 && img[0].src === "https://raw.githubusercontent.com/a/b.jpg" &&
       kap.textContent.indexOf("![") < 0 && /bak:/.test(kap.textContent));

  const [g, d] = D.sonuc();
  console.log("\nSONUÇ: " + g + " geçti · " + d + " düştü");
  process.exit(d ? 1 : 0);
})().catch(e => { console.log("SINAV ÇÖKTÜ: " + (e && e.stack || e)); process.exit(1); });
