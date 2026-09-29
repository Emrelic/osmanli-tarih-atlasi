# -*- coding: utf-8 -*-
"""KRONO-AMERIKA-K-0929 — 203 net olay adayını üç sınıfa ayırır: GERÇEK · ARTEFAKT · ÖLÇÜLEMEDİ.

    py denetim/ARAC-KRONO-AMERIKA-K-0929-SINIF.py            özet basar
    py denetim/ARAC-KRONO-AMERIKA-K-0929-SINIF.py --yaz      denetim/KRONO-AMERIKA-K-0929-SINIF.json yazar

Girdi (hepsi diskte, hiçbiri belleğe topluca alınmaz):
    denetim/SENKRON-DEFTER-0929.json  → paket["PAKETSIZ:kuzey-amerika" | "orta-amerika" | "orta-amerika-karayip"]
    data/devletler.js                 → künye-içi kronoloji (node ile ÇALIŞTIRILIR; kopyası yok)
    denetim/ARAC-KRONO-AMERIKA-K-0929-URET.py → yazılan maddeler (ITEMS)

Sınıf kuralı (sırayla; ilk tutan kazanır):
    KAPALI-KUNYE   grubun eski ya da yeni künyesinin KENDİ kronolojisinde AYNI GÜN madde var
                   (defterin `kunyede_kapali` alanı bunu göremiyor: 30/37 devir grubu böyle)
    YAZILDI        bu paketin maddesi aynı gün + aynı yer (ya da aynı künye) — GERÇEK, kapatıldı
    OLCULEMEDI     devir grubu (eski ≠ —) ama madde yazılamadı, ya da kaynak yıl-temsilî (gün kaynaksız)
    ARTEFAKT       eski = — : NOKTA DOĞUMU. Bir yerleşimin `s:` penceresi başladı ve petek sahip değiştirdi;
                   hiçbir egemenlik devri yok (kale/misyon/ticaret postu kuruldu, toprak el değiştirmedi)
"""
import importlib.util
import io
import json
import os
import subprocess
import sys
import tempfile
from collections import Counter, OrderedDict

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BOLGELER = ["PAKETSIZ:kuzey-amerika", "PAKETSIZ:orta-amerika", "PAKETSIZ:orta-amerika-karayip"]

NODE = r"""
const fs = require("fs"), vm = require("vm");
const ctx = { console }; ctx.window = ctx; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(process.argv[2], "utf8"), ctx);
const ix = {}; (ctx.DEVLETLER || []).forEach(d => ix[d.id] = d);
const gun = t => Date.parse(String(t).slice(0, 10) + "T00:00:00Z") / 864e5;
const G = JSON.parse(fs.readFileSync(process.argv[3], "utf8"));
const out = G.map(g => {
  let en = null;
  for (const id of [g.eski, g.yeni].filter(x => x && x !== "—")) {
    const d = ix[id]; if (!d) continue;
    for (const m of (d.kronoloji || [])) {
      const f = Math.abs(gun(m.t) - gun(g.gun));
      if (en === null || f < en.f) en = { f, id, t: m.t, b: m.b };
    }
  }
  return en && en.f <= 30 ? en : null;
});
process.stdout.write(JSON.stringify(out));
"""


def guncel_defter():
    """Defterin ŞU ANKİ (yeniden ölçülmüş) açık grupları: {(gun,eski,yeni): yerleşim sayısı}."""
    d = json.load(io.open(os.path.join(KOK, "denetim", "SENKRON-DEFTER-0929.json"), encoding="utf-8"))
    G = Counter()
    for k in BOLGELER:
        for r in d["paket"][k]["kayit"]:
            if not (r.get("kuyrukta_kapali") or r.get("kunyede_kapali")):
                G[(r["gun"], r["eski"], r["yeni"])] += 1
    return G, d.get("olcum_ani", "?")


def gruplar():
    """TABAN = koordinatörün sevk ettiği 203 grup (defterin 29 Eylül ilk ölçümü; bu paketin dosyaları YAZILMADAN ÖNCE).
    Defter sonradan yeniden ölçüldü ve dosyalarım `data/kronoloji_*` altında olduğu için bazı grupları kapattı;
    taban dosyada saklanır ki 'kaç grubu kim kapattı' ölçülebilsin."""
    T = json.load(io.open(os.path.join(KOK, "denetim", "KRONO-AMERIKA-K-0929-TABAN-203.json"), encoding="utf-8"))
    return T, sum(x["n"] for x in T)


def kunye_kapsam(L):
    with tempfile.NamedTemporaryFile("w", suffix=".json", delete=False, encoding="utf-8") as f:
        json.dump(L, f, ensure_ascii=False)
        gy = f.name
    with tempfile.NamedTemporaryFile("w", suffix=".js", delete=False, encoding="utf-8") as f:
        f.write(NODE)
        jy = f.name
    try:
        p = subprocess.run(["node", jy, os.path.join(KOK, "data", "devletler.js"), gy], capture_output=True,
                           text=True, encoding="utf-8")
    finally:
        os.unlink(gy)
        os.unlink(jy)
    if p.returncode != 0:
        raise SystemExit("node hatası: " + p.stderr[-800:])
    return json.loads(p.stdout)


def maddeler():
    yol = os.path.join(KOK, "denetim", "ARAC-KRONO-AMERIKA-K-0929-URET.py")
    spec = importlib.util.spec_from_file_location("uret", yol)
    m = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(m)
    return m.ITEMS


def main(argv):
    L, ham = gruplar()
    kk = kunye_kapsam(L)
    ITEMS = maddeler()
    guncel, olcum_ani = guncel_defter()
    sonuc = []
    for g, k in zip(L, kk):
        sinif, neden = None, ""
        if k and k["f"] == 0:
            sinif, neden = "KAPALI-KUNYE", "künye-içi madde aynı gün: %s · %s" % (k["id"], k["b"][:60])
        else:
            for m in ITEMS:
                if m["t"] != g["gun"]:
                    continue
                onek = (m.get("yer_id") or "")[:12]
                if (onek and any(y.startswith(onek) for y in g["yerler"])) or (
                        g["yeni"] in m["devletler"] and g["eski"] in m["devletler"]):
                    sinif, neden = "YAZILDI", m["b"][:70]
                    break
        if sinif is None:
            if g["eski"] not in ("—", ""):
                sinif, neden = "OLCULEMEDI", "devir grubu; güvenilir gün/kaynak bulunamadı ya da yıl-temsilî"
            elif g["kova"] == "yil_temsili":
                sinif, neden = "OLCULEMEDI", "yıl-temsilî (gün kaynaksız) ve nokta doğumu"
            else:
                sinif, neden = "ARTEFAKT", "nokta doğumu: egemenlik devri yok, `s:` penceresi başladı"
        simdi = guncel.get((g["gun"], g["eski"], g["yeni"]), 0)
        durum = "KAPANDI" if simdi == 0 else ("KISMEN" if simdi < g["n"] else "ACIK")
        sonuc.append(dict(g, sinif=sinif, neden=neden, defter_simdi=simdi, defter_durum=durum))
    c = Counter(x["sinif"] for x in sonuc)
    kd = Counter((x["sinif"], x["defter_durum"]) for x in sonuc)
    print("taban: %d grup / %d yerleşim · defter yeniden ölçümü %s: %d açık grup" % (len(sonuc), ham, olcum_ani, len(guncel)))
    print("defterin yeniden ölçümü (taban gruplarının durumu):",
          dict(Counter(x["defter_durum"] for x in sonuc)))
    print("  YAZILDI sınıfı × defter durumu:", {k[1]: v for k, v in kd.items() if k[0] == "YAZILDI"})
    print("  başka sınıflardan defterce KAPANAN:", {k[0]: v for k, v in kd.items() if k[1] == "KAPANDI" and k[0] != "YAZILDI"})
    for s in ("KAPALI-KUNYE", "YAZILDI", "ARTEFAKT", "OLCULEMEDI"):
        print("  %-13s %3d grup · %3d yerleşim" % (s, c[s], sum(x["n"] for x in sonuc if x["sinif"] == s)))
    art = Counter(x["yeni"] for x in sonuc if x["sinif"] == "ARTEFAKT")
    print("ARTEFAKT'ın sahiplere göre dağılımı:", dict(art.most_common()))
    if "--yaz" in argv:
        yol = os.path.join(KOK, "denetim", "KRONO-AMERIKA-K-0929-SINIF.json")
        with io.open(yol, "w", encoding="utf-8") as f:
            json.dump({"ham_kirilma": ham, "net_acik_grup": len(sonuc), "sayim": dict(c), "gruplar": sonuc}, f,
                      ensure_ascii=False, indent=0)
        print("yazıldı:", yol)
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
