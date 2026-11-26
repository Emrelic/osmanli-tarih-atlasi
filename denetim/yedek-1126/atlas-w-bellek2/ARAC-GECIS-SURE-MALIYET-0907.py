# -*- coding: utf-8 -*-
"""ARAC-GECIS-SURE-MALIYET-0907 — Ⓑ/Ⓒ: CIFT BASINA KESISIM MALIYETI

GECIS-SURE-0907 · 7 Eylul 2026.

Ⓐ (`ARAC-GECIS-SURE-DAGILIM-0907.py`) olctu ve dagilim ASIRI CARPIK:
    kimlik basina parca  ortanca 4 · %90 231 · %99 6.755 · AZAMI 53.627
    en buyuk  1 kimlik toplamin %22,3'unu · en buyuk 5 %60,3'unu tutuyor
⇒ Sartname Ⓐ'nin uyarisi DOGRULANDI: rastgele orneklem ortanca-4'lerin
  agirliginda kalir ve maliyeti ONBINLERCE KAT kucuk gosterir.
  TABAKALAMA bir tercih degil, ZORUNLULUK.

🔴 TABAKA EKSENI: PARCA degil KOSE NOKTASI.
   Sebep olculdu: kose ortanca 203 · azami 1.285.912 — 6.300 kat menzil.
   GEOS kesisimi kabaca kose sayisiyla olceklenir, parca sayisiyla degil.
   ⚠️ Bu bir VARSAYIM ve betik onu SINIYOR: her tabakada hem parca hem
      kose kaydediliyor, ve sonda hangisinin sureyle daha iyi ORTUSTUGU
      raporlaniyor. Varsayim tutmazsa RAPORDA YAZAR.

🔴 MODELLEME KARARI — ACIKCA:
   Olculen atomik islem "iki kimligin AYNI ANDAKI govdelerinin kesisimi".
   Kimligin BUTUN donemlerini birlestirip kesistirmek maliyeti SISIRIRDI
   (gercek gecis zaman dilimi basina calisir). O yuzden her ciftten
   ORTUSEN birer donem secilip onlar kesistiriliyor.

🔒 `data/` DONUK — yalniz OKUR.
"""
import argparse
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

# node: SECILEN kimliklerin donem pencerelerini ve cozulmus geometrisini ver.
# 🔴 `parcaCoz` js/app.js'ten AYNEN — yeniden yazilmadi.
OKU = r"""
const fs = require('fs'), vm = require('vm');
const ctx = { window: {}, console: { log(){}, warn(){}, error(){} } };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(process.argv[2], 'utf8'), ctx, { timeout: 900000 });
const istenen = new Set(JSON.parse(fs.readFileSync(process.argv[3], 'utf8')));

const H = ctx.window.DEVLET_HARITA || [];
const HAVUZ = ctx.window.DEVLET_PARCALAR || [];
const PH    = ctx.window.DEVLET_PARCA_HALKA || [];

function parcaCoz(dizi, havuz, parcaHalka) {          // app.js:parcaCoz AYNEN
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
  out[s.id] = (s.dnm || []).map(function (p) {
    return { f: p.f, t: p.t, n: (p.g || []).length,
             g: parcaCoz(p.g, HAVUZ, PH) };
  });
}
process.stdout.write(JSON.stringify(out));
"""

# pencere: TUM kimlikler icin f/t (es zamanlilik hesabi Python'da)
PENCERE = r"""
const fs = require('fs'), vm = require('vm');
const ctx = { window: {}, console: { log(){}, warn(){}, error(){} } };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(process.argv[2], 'utf8'), ctx, { timeout: 900000 });
const H = ctx.window.DEVLET_HARITA || [];
const out = [];
for (const s of H) {
  const d = (s.dnm || []).map(p => [p.f, p.t, (p.g || []).length]);
  out.push({ id: s.id, dnm: d });
}
process.stdout.write(JSON.stringify(out));
"""


def yuzdelik(d, p):
    if not d:
        return 0
    s = sorted(d)
    return s[int(round((len(s) - 1) * p))]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--cift", type=int, default=40,
                    help="tabaka basina olculecek cift sayisi")
    ap.add_argument("--tohum", type=int, default=20260907)
    a = ap.parse_args()

    try:
        from shapely.geometry import shape
        import shapely
    except Exception as e:
        print("🔴 shapely YOK — bu bir ORTAM eksigi, olcum hatasi DEGIL: %s" % e)
        return 2
    print("shapely %s · GEOS %s" % (shapely.__version__,
                                    ".".join(map(str, shapely.geos_version))))

    dag_yol = os.path.join(KOK, "denetim", "_gecis_dagilim.json")
    if not os.path.exists(dag_yol):
        print("🔴 Ⓐ CIKTISI YOK — once: py denetim/ARAC-GECIS-SURE-DAGILIM-0907.py")
        return 2
    dag = json.load(io.open(dag_yol, encoding="utf-8"))
    satir = {s["id"]: s for s in dag["satir"] if s["id"]}

    # ── pencereleri al (es zamanlilik icin)
    yol = os.path.join(KOK, "data", "devletler_harita.js")
    p1 = os.path.join(KOK, "denetim", "_gecis_pencere.js")
    io.open(p1, "w", encoding="utf-8").write(PENCERE)
    print("pencereler okunuyor…")
    r = subprocess.run(["node", "--max-old-space-size=6144", p1, yol],
                       capture_output=True)
    os.remove(p1)
    if r.returncode != 0:
        print("🔴 node COKTU (pencere):",
              (r.stderr or b"")[-300:].decode("utf-8", "replace"))
        return 2
    pencereler = {x["id"]: x["dnm"] for x in json.loads(r.stdout) if x["id"]}

    # ── ES ZAMANLI ciftler + TABAKA
    kim = [k for k in pencereler if satir.get(k, {}).get("parca", 0) > 0]
    kose = {k: satir[k]["kose"] for k in kim}
    # tabaka siniri: kose yuzdelikleri (Ⓐ'nin olctugu carpikliga gore)
    kl = [kose[k] for k in kim]
    S = [yuzdelik(kl, .50), yuzdelik(kl, .90), yuzdelik(kl, .99)]
    print("tabaka sinirlari (kose): %s" % S)

    def tabaka(k):
        v = kose[k]
        return 0 if v <= S[0] else 1 if v <= S[1] else 2 if v <= S[2] else 3

    def ortusuyor(a, b):
        for fa, ta, _ in pencereler[a]:
            for fb, tb, _ in pencereler[b]:
                if fa < tb and fb < ta:
                    return (fa, ta, fb, tb)
        return None

    print("es zamanli ciftler taraniyor (%d kimlik)…" % len(kim))
    kova = {0: [], 1: [], 2: [], 3: []}
    toplam_cift = 0
    for i in range(len(kim)):
        for j in range(i + 1, len(kim)):
            o = ortusuyor(kim[i], kim[j])
            if not o:
                continue
            toplam_cift += 1
            # cift tabakasi = IKI kimligin BUYUK olani (maliyeti o surer)
            kova[max(tabaka(kim[i]), tabaka(kim[j]))].append((kim[i], kim[j]))
    print("ES ZAMANLI CIFT: %d" % toplam_cift)
    for t in sorted(kova):
        print("   tabaka %d : %7d cift  (%%%.1f)"
              % (t, len(kova[t]), 100.0 * len(kova[t]) / max(toplam_cift, 1)))

    # ── orneklem
    rnd = random.Random(a.tohum)
    ornek, gerekli = {}, set()
    for t in sorted(kova):
        lst = kova[t][:]
        rnd.shuffle(lst)
        ornek[t] = lst[:a.cift]
        for x, y in ornek[t]:
            gerekli.add(x)
            gerekli.add(y)
    print("orneklenen kimlik: %d" % len(gerekli))

    # ── geometriyi cek
    p2 = os.path.join(KOK, "denetim", "_gecis_geo.js")
    p3 = os.path.join(KOK, "denetim", "_gecis_istenen.json")
    io.open(p2, "w", encoding="utf-8").write(OKU)
    io.open(p3, "w", encoding="utf-8").write(json.dumps(sorted(gerekli)))
    print("geometri cekiliyor…")
    r = subprocess.run(["node", "--max-old-space-size=6144", p2, yol, p3],
                       capture_output=True)
    for p in (p2, p3):
        try:
            os.remove(p)
        except Exception:
            pass
    if r.returncode != 0:
        print("🔴 node COKTU (geometri):",
              (r.stderr or b"")[-300:].decode("utf-8", "replace"))
        return 2
    GEO = json.loads(r.stdout)

    # ── OLC
    print()
    print("=" * 74)
    print("Ⓑ CIFT BASINA KESISIM MALIYETI — tabakali, gercek shapely")
    print("=" * 74)
    sonuc = {}
    for t in sorted(ornek):
        sureler, koseler = [], []
        for x, y in ornek[t]:
            dx = GEO.get(x) or []
            dy = GEO.get(y) or []
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
                ga = shape(se[0]["g"])
                gb = shape(se[1]["g"])
            except Exception:
                continue
            n = len(ga.wkt) + len(gb.wkt)   # kaba kose vekili
            t0 = time.perf_counter()
            try:
                ga.intersection(gb)
            except Exception:
                # 🔴 GEOMETRI hatasi — OLCUM hatasi DEGIL. Ayri sayiliyor.
                sureler.append(None)
                continue
            sureler.append((time.perf_counter() - t0) * 1000.0)
            koseler.append(n)
        temiz = [s for s in sureler if s is not None]
        bozuk = len(sureler) - len(temiz)
        sonuc[t] = {"n": len(temiz), "bozuk": bozuk,
                    "ortanca": yuzdelik(temiz, .5) if temiz else None,
                    "p90": yuzdelik(temiz, .9) if temiz else None,
                    "azami": max(temiz) if temiz else None,
                    "cift": len(kova[t])}
        print("tabaka %d · olculen %3d cift · geometri hatasi %d" % (t, len(temiz), bozuk))
        if temiz:
            print("   ortanca %8.3f ms · %%90 %8.3f ms · azami %8.3f ms"
                  % (sonuc[t]["ortanca"], sonuc[t]["p90"], sonuc[t]["azami"]))

    # ── Ⓒ BANT
    print()
    print("=" * 74)
    print("Ⓒ TOPLAM — BANT (tek sayi DEGIL)")
    print("=" * 74)
    alt = ust = ort = 0.0
    for t in sorted(sonuc):
        s = sonuc[t]
        if not s["ortanca"]:
            continue
        alt += s["cift"] * s["ortanca"] / 1000.0
        ort += s["cift"] * s["ortanca"] / 1000.0
        ust += s["cift"] * s["p90"] / 1000.0
    print("   ORTANCA tabanli : %8.1f sn  (%.1f dk)" % (ort, ort / 60))
    print("   %%90    tabanli  : %8.1f sn  (%.1f dk)" % (ust, ust / 60))
    print()
    print("⚠️ ÜST SINIR — koşu 8 yükü altında ölçüldü. Damgasız kullanılamaz.")
    cikti = os.path.join(KOK, "denetim", "_gecis_maliyet.json")
    io.open(cikti, "w", encoding="utf-8").write(json.dumps(
        {"tabaka": sonuc, "toplam_cift": toplam_cift,
         "sinir_kose": S, "ortanca_sn": ort, "p90_sn": ust},
        ensure_ascii=False, indent=1))
    print("yazildi: %s" % os.path.relpath(cikti, KOK))
    return 0


if __name__ == "__main__":
    sys.exit(main())
