# -*- coding: utf-8 -*-
"""KALEM Ⓒ — Sudan iki kimlikle boyanıyor · SINIR-KAFRIKA-0907

Öngörü ÖNCE: `denetim/ONGORU-SINIR-KAFRIKA-SUDAN-0907.json`
🔴 ÖLÇÜYORUM, DÜZELTMİYORUM. 1.MURAT M-3225: "Sudan senin kalemin
   değil, dokunma." `data/` ayrıca DONUK (koşu 8).
🔴 Ⓐ'NIN DERSİ: önce BEYAN aranır, sonra kusur ilan edilir.
"""
import io
import os
import re
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi  # noqa: E402

from shapely.geometry import shape, Point  # noqa: E402

GUN = "1923-10-28"
IKI = ("ingiltere", "ingiliz-sudani")


def main():
    Y = girdi.yukle()
    D = {d["id"]: d for d in girdi.oku_devletler()}

    import json
    gj = json.load(io.open(os.path.join(KOK, "veri-kaynak",
                   "ne_10m_admin_0_countries.geojson"), encoding="utf-8"))
    pg = None
    for ft in gj["features"]:
        if ft["properties"].get("ADMIN") == "Sudan":
            pg = shape(ft["geometry"]).buffer(0)
    ic = [y for y in Y if y.get("lon") is not None
          and pg.covers(Point(y["lon"], y["lat"]))]

    def sah(y, g):
        for p in (y.get("d") or []):
            if p["f"] <= g < p["t"]:
                return "OSMANLI"
        for p in (y.get("v") or []):
            if p["f"] <= g < p["t"]:
                return "tabi"
        for p in (y.get("s") or []):
            if p["f"] <= g < p["t"]:
                return p.get("d")
        return None

    print("=" * 74)
    print("① SUDAN POLIGONU ICINDE, %s" % GUN)
    print("=" * 74)
    dag = {}
    for y in ic:
        s = sah(y, GUN)
        dag[s] = dag.get(s, 0) + 1
    print("   nokta: %d" % len(ic))
    for k, v in sorted(dag.items(), key=lambda x: -x[1]):
        print("   %-22s %d" % (str(k), v))

    print("")
    print("=" * 74)
    print("② AYNI NOKTADA IKISI DE VAR MI — `d: ∩ s:` CAKISMA SINIFI MI?")
    print("=" * 74)
    ikili, cakisan = [], []
    for y in ic:
        kim = set()
        for p in (y.get("s") or []):
            if p.get("d") in IKI:
                kim.add(p.get("d"))
        if len(kim) == 2:
            ikili.append(y)
        # gercek CAKISMA: ayni gunde iki donem birden aktif
        akt = [p for p in (y.get("s") or []) if p["f"] <= GUN < p["t"]]
        akt += [p for p in (y.get("d") or []) if p["f"] <= GUN < p["t"]]
        if len(akt) > 1:
            cakisan.append((y["ad"], [(p.get("f"), p.get("t"), p.get("d"))
                                      for p in akt]))
    print("   AYNI noktada HEM ingiltere HEM ingiliz-sudani donemi: %d" % len(ikili))
    for y in ikili[:8]:
        print("      %s" % y["ad"])
    print("   %s'de AYNI ANDA birden cok aktif donem (gercek cakisma): %d"
          % (GUN, len(cakisan)))
    for c in cakisan[:6]:
        print("      %-24s %s" % c)

    print("")
    print("=" * 74)
    print("③ IKI KUME HANGI DOSYALARDAN")
    print("=" * 74)
    for kim in IKI:
        d = {}
        for y in ic:
            if sah(y, GUN) == kim:
                d[y.get("_kaynak")] = d.get(y.get("_kaynak"), 0) + 1
        print("   %-18s %s" % (kim, d))

    print("")
    print("=" * 74)
    print("⑥ DONEM SINIRLARI — ayni olay mi, ayri zaman dilimi mi?")
    print("=" * 74)
    for kim in IKI:
        dem = {}
        for y in ic:
            for p in (y.get("s") or []):
                if p.get("d") == kim:
                    dem[(p.get("f"), p.get("t"))] = dem.get((p.get("f"), p.get("t")), 0) + 1
        print("   %s — benzersiz (f,t): %d" % (kim, len(dem)))
        for k, v in sorted(dem.items(), key=lambda x: -x[1])[:6]:
            print("      %s -> %s   x%d" % (k[0], k[1], v))

    print("")
    print("=" * 74)
    print("⑤ KUNYE PENCERELERI")
    print("=" * 74)
    for kim in IKI:
        k = D.get(kim)
        print("   %-18s %s" % (kim, ("%s -> %s  | %s" % (k.get("f"), k.get("t"),
              str(k.get("ad"))[:44])) if k else "🔴 KUNYE YOK"))

    print("")
    print("=" * 74)
    print("④ BEYAN VAR MI — ONCE BUNU SOR (Ⓐ'nin dersi)")
    print("=" * 74)
    b = 0
    for y in ic:
        if sah(y, GUN) in IKI:
            for alan in ("neden", "bos", "not"):
                if y.get(alan):
                    b += 1
                    print("   %-24s %s: %s" % (y["ad"], alan, str(y[alan])[:160]))
                    break
    print("   beyan tasiyan kayit: %d" % b)
    print("")
    print("   --- denetle.py bunu sayiyor mu ---")
    s = io.open(os.path.join(KOK, "arac", "denetle.py"),
                encoding="utf-8", errors="replace").read()
    for kel in ("ingiliz-sudani", "kondominyum", "Anglo"):
        print("   '%-16s' gecis: %d" % (kel, len(re.findall(re.escape(kel), s))))
    return 0


if __name__ == "__main__":
    sys.exit(main())
