# -*- coding: utf-8 -*-
"""KRONOLOJI-COK-PAKET-1006-B — 55 "ÇÖZÜLMEDİ" kaleminin atlas tarafı ölçümü. SALT OKUR.

Gerçek çözücüyü (`arac/odak_cozum.js`) ③ bölümüne KADAR koşturur (tarayıcı evreni +
app.js'ten kesilen işlevler + `SUZGEC.sahipKimlikte`), sonra kendi sorularını sorar:
  ① maddenin günü n (odak_kimlik sayısı — kapının sorduğu soru, birebir)
  ② künye f/t ve harita anahtarı
  ③ yıllık ızgarada kimliğin n>=1 / n>=2 olduğu ilk-son yıl + o yıllardaki yerleşim adları
  ④ aday yer adlarının AD_KONUM'da (kamera havuzu) çözülüp çözülmediği (`adKonumBul`)
Hiçbir dosyaya yazmaz (geçici JSON + geçici JS, işletim sistemi temp'inde, silinir).
Kullanım: py denetim/ARAC-KCP-1006B-OLC.py <aday-json>   → stdout JSON
"""
import io, json, os, subprocess, sys, tempfile

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import odak_olc  # noqa: E402  (yalnız etiket_kaynak / disk_dosyalari okunur)

KESIM = "// ---- ③ tek maddenin çözümü"

SORU_JS = r"""
const SOR = JSON.parse(require("fs").readFileSync(G.soru, "utf8"));
function nSay(ids, gs) {
  let n = 0, adlar = [];
  for (let i = 0; i < YER.length; i++) {
    const y = YER[i];
    if (typeof y.lat !== "number" || typeof y.lon !== "number") continue;
    if (!SG.sahipKimlikte(SG.sahipAnahtari(y, gs), SG.aktifVAdi(y, gs), ids, kunyeIx)) continue;
    n++; adlar.push(y.ad);
  }
  return { n: n, adlar: adlar };
}
const cikti = { kalemler: [], kimlikler: {}, adlar: {}, baslangic: W.idxTarih ? null : null };
const kimSet = new Set(SOR.kalemler.map(k => k.kimlik));
kimSet.forEach(function (id) {
  const kn = kunyeIx[id] || null;
  const yil = [];
  for (let Y = SOR.yil_bas; Y <= SOR.yil_son; Y++) {
    const r = nSay([id], String(Y).padStart(4, "0") + "-07-01");
    if (r.n) yil.push([Y, r.n, r.adlar.slice(0, 6)]);
  }
  cikti.kimlikler[id] = {
    kunye: kn ? { ad: kn.ad, f: kn.f, t: kn.t, harita: kn.harita || null } : null,
    yil_n: yil,
  };
});
SOR.kalemler.forEach(function (k) {
  const r = nSay([k.kimlik], k.t);
  cikti.kalemler.push({ dosya: k.dosya, sira: k.sira, t: k.t, kimlik: k.kimlik, n: r.n, adlar: r.adlar });
});
(SOR.adlar || []).forEach(function (a) { cikti.adlar[a] = !!adKonumBul(a); });
process.stdout.write(JSON.stringify(cikti));
"""


def main():
    soru = sys.argv[1]
    kaynak = io.open(os.path.join(KOK, "arac", "odak_cozum.js"), encoding="utf-8").read()
    i = kaynak.find(KESIM)
    if i < 0:
        print(json.dumps({"hata": "ÖLÇÜLEMEDİ: odak_cozum.js kesim işareti yok"}))
        return 2
    js = kaynak[:i] + SORU_JS
    fd, jsyol = tempfile.mkstemp(suffix=".js"); os.close(fd)
    fd, gyol = tempfile.mkstemp(suffix=".json"); os.close(fd)
    try:
        io.open(jsyol, "w", encoding="utf-8").write(js)
        io.open(gyol, "w", encoding="utf-8").write(json.dumps(
            {"kok": KOK.replace("\\", "/"), "etiket_kaynak": odak_olc.etiket_kaynak(),
             "disk": odak_olc.disk_dosyalari(), "soru": os.path.abspath(soru)}, ensure_ascii=False))
        r = subprocess.run(["node", jsyol, gyol], capture_output=True, text=True,
                           encoding="utf-8", errors="replace")
        sys.stdout.write(r.stdout)
        if r.returncode:
            sys.stderr.write(r.stderr[-2000:])
        return r.returncode
    finally:
        os.unlink(jsyol); os.unlink(gyol)


if __name__ == "__main__":
    sys.exit(main())
