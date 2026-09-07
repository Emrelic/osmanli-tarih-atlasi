# -*- coding: utf-8 -*-
"""ARAC-GECIS-SURE-EKSEN-0907 — VARSAYIMIM TUTMADI, ASIL EKSENI ARIYORUM.

GECIS-SURE-0907 · 7 Eylul 2026.

🔴 NE OLDU: `ARAC-GECIS-SURE-MALIYET-0907.py` tabakalari KOSE SAYISINA
   gore kurdu (varsayim: GEOS kesisimi kose ile olceklenir). Olcum:
       tabaka   kose siniri      ortanca ms
       0        <= 203              0.027
       1        <= 6.577            0.034
       2        <= 227.005          0.059
       3        >  227.005          0.044   ← EN BUYUK TABAKA, DAHA UCUZ
   Kose 6.300 KAT degisiyor, ortanca maliyet 2 KAT. Ve T3 < T2.
   ⇒ VARSAYIM TUTMADI. Kose maliyeti SURMUYOR.

HIPOTEZ: maliyeti suren sey KARMASIKLIK degil UZAMSAL ORTUSME.
   Cogu cift birbirinden UZAK; GEOS sinirlayici kutu (bbox) reddiyle
   ANINDA cikiyor ve kose sayisi hic okunmuyor. Pahali olanlar GERCEKTEN
   ortusen az sayidaki cift (azami 35 ms · 26 ms).

Bu betik onu AYIRIR: ayni orneklemde
   ① bbox AYRIK olan ciftler   (kesisim BOS, kisa devre)
   ② bbox ortusen ama kesisim BOS
   ③ kesisim DOLU
ve UCUNUN maliyetini AYRI olcer. Hipotez dogruysa ③ otekilerden
mertebe farkiyla pahali olmali.

🔒 `data/` DONUK — yalniz OKUR.
"""
import io
import json
import os
import random
import subprocess
import sys
import time

try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

OKU = r"""
const fs = require('fs'), vm = require('vm');
const ctx = { window: {}, console: { log(){}, warn(){}, error(){} } };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(process.argv[2], 'utf8'), ctx, { timeout: 900000 });
const istenen = new Set(JSON.parse(fs.readFileSync(process.argv[3], 'utf8')));
const H = ctx.window.DEVLET_HARITA || [];
const HAVUZ = ctx.window.DEVLET_PARCALAR || [];
const PH    = ctx.window.DEVLET_PARCA_HALKA || [];
function parcaCoz(dizi, havuz, parcaHalka) {          // app.js AYNEN
  if (!dizi) return null;
  var yeniBicim = !!(parcaHalka && parcaHalka.length);
  return { type: "MultiPolygon",
           coordinates: dizi.map(function (p) {
             if (typeof p !== "number") return p;
             if (!yeniBicim) return havuz[p];
             var ph = parcaHalka[p];
             if (!ph) throw new Error("PARCA_HALKA deligi: " + p);
             return ph.map(function (h) { return havuz[h]; });
           }) };
}
const out = {};
for (const s of H) {
  if (!istenen.has(s.id)) continue;
  out[s.id] = (s.dnm || []).map(p => ({ f: p.f, t: p.t,
                                        g: parcaCoz(p.g, HAVUZ, PH) }));
}
process.stdout.write(JSON.stringify(out));
"""


def yuzdelik(d, p):
    if not d:
        return None
    s = sorted(d)
    return s[int(round((len(s) - 1) * p))]


def main():
    try:
        from shapely.geometry import shape
        import shapely
    except Exception as e:
        print("🔴 shapely YOK (ortam eksigi, olcum hatasi DEGIL): %s" % e)
        return 2
    print("shapely %s · GEOS %s" % (shapely.__version__,
                                    ".".join(map(str, shapely.geos_version))))

    dag = json.load(io.open(os.path.join(KOK, "denetim",
                                         "_gecis_dagilim.json"), encoding="utf-8"))
    satir = {s["id"]: s for s in dag["satir"] if s["id"] and s["parca"] > 0}
    kim = sorted(satir)

    # pencereler + geometri: TEK cekimde, orneklem kimlikleri icin
    rnd = random.Random(20260907)
    sec = rnd.sample(kim, min(170, len(kim)))
    p2 = os.path.join(KOK, "denetim", "_eksen_geo.js")
    p3 = os.path.join(KOK, "denetim", "_eksen_ist.json")
    io.open(p2, "w", encoding="utf-8").write(OKU)
    io.open(p3, "w", encoding="utf-8").write(json.dumps(sec))
    print("geometri cekiliyor (%d kimlik)…" % len(sec))
    r = subprocess.run(["node", "--max-old-space-size=6144", p2,
                        os.path.join(KOK, "data", "devletler_harita.js"), p3],
                       capture_output=True)
    for p in (p2, p3):
        try:
            os.remove(p)
        except Exception:
            pass
    if r.returncode != 0:
        print("🔴 node COKTU:", (r.stderr or b"")[-300:].decode("utf-8", "replace"))
        return 2
    GEO = json.loads(r.stdout)

    kova = {"bbox_ayrik": [], "bbox_ortusur_kesisim_bos": [], "kesisim_dolu": []}
    kose_kova = {k: [] for k in kova}
    bakilan = 0
    # 🔴 HEDEF PARAMETRELI, ve sebebi olculdu: ilk kosuda 900 cift bakildi
    #    ve BANDI SUREN kovaya (`bbox_ortusur_kesisim_bos`) yalnizca
    #    **4 cift** dustu — %0,4'luk bir kova. O kova toplam maliyetin
    #    yarisindan fazlasini tasiyor ve en az orneklenen kova O.
    #    ⇒ Zayif halka, carpanlarin hatasi degil BU KOVANIN ORNEKLEMI.
    hedef = int(sys.argv[sys.argv.index("--cift") + 1]) \
        if "--cift" in sys.argv else 900
    ciftler = []
    for i in range(len(sec)):
        for j in range(i + 1, len(sec)):
            ciftler.append((sec[i], sec[j]))
    rnd.shuffle(ciftler)

    for x, y in ciftler:
        if bakilan >= hedef:
            break
        dx, dy = GEO.get(x) or [], GEO.get(y) or []
        se = None
        for px in dx:
            for py in dy:
                if px["f"] < py["t"] and py["f"] < px["t"]:
                    se = (px, py)
                    break
            if se:
                break
        if not se:
            continue
        try:
            ga, gb = shape(se[0]["g"]), shape(se[1]["g"])
        except Exception:
            continue
        bakilan += 1
        ax, ay2, ax2, ay3 = ga.bounds
        bx, by2, bx2, by3 = gb.bounds
        ayrik = ax2 < bx or bx2 < ax or ay3 < by2 or by3 < ay2
        n = len(ga.wkt) + len(gb.wkt)
        t0 = time.perf_counter()
        try:
            kes = ga.intersection(gb)
            ms = (time.perf_counter() - t0) * 1000.0
        except Exception:
            continue
        if ayrik:
            k = "bbox_ayrik"
        elif kes.is_empty:
            k = "bbox_ortusur_kesisim_bos"
        else:
            k = "kesisim_dolu"
        kova[k].append(ms)
        kose_kova[k].append(n)

    print()
    print("=" * 74)
    print("ASIL EKSEN — %d cift olculdu" % bakilan)
    print("=" * 74)
    print("%-30s %6s %10s %10s %10s %12s"
          % ("kova", "n", "ortanca", "%90", "azami", "ort. wkt"))
    for k in ("bbox_ayrik", "bbox_ortusur_kesisim_bos", "kesisim_dolu"):
        v = kova[k]
        if not v:
            print("%-30s %6d   (bu kovaya dusen cift YOK)" % (k, 0))
            continue
        ort_k = sum(kose_kova[k]) / len(kose_kova[k])
        print("%-30s %6d %10.4f %10.4f %10.3f %12.0f"
              % (k, len(v), yuzdelik(v, .5), yuzdelik(v, .9), max(v), ort_k))
    print()
    tk = sum(len(v) for v in kova.values()) or 1
    print("DAGILIM: bbox ayrik %%%.1f · ortusur-bos %%%.1f · DOLU %%%.1f"
          % (100.0 * len(kova["bbox_ayrik"]) / tk,
             100.0 * len(kova["bbox_ortusur_kesisim_bos"]) / tk,
             100.0 * len(kova["kesisim_dolu"]) / tk))
    print()
    d = kova["kesisim_dolu"]
    a = kova["bbox_ayrik"]
    if d and a:
        kat = yuzdelik(d, .5) / max(yuzdelik(a, .5), 1e-9)
        print("⇒ DOLU kesisim, AYRIK kesisimden %.0f KAT pahali (ortanca)" % kat)
        print("   Hipotez %s" % ("🟢 TUTTU" if kat > 3 else "🔴 TUTMADI"))
    io.open(os.path.join(KOK, "denetim", "_gecis_eksen.json"), "w",
            encoding="utf-8").write(json.dumps(
                {k: {"n": len(v), "ortanca": yuzdelik(v, .5),
                     "p90": yuzdelik(v, .9), "azami": max(v) if v else None}
                 for k, v in kova.items()}, ensure_ascii=False, indent=1))
    return 0


if __name__ == "__main__":
    sys.exit(main())
