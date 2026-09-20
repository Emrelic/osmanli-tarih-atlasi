# -*- coding: utf-8 -*-
"""BANT SINAVI — B-GORUNUM-0072, 1.MURAT'in M-4908'deki iki istegi.

(b) DEVLET BANDI MALIYETI: bant geometrisini donem donem DEVLET govdesine
    birlestirmek, petek basina birakmaya gore kac kat pahali?
    🔴 Dar kutuda olculur, tam kosuda DEGIL — "olcmeden baslarsak 4,5 gun
    kaybederiz" sinifi bir soru.

(c) ASAMA FARKI (DOGRULUK sorusu, hiz degil): artis bantlari kiyi
    kesiminden SONRAKI asamalardan (ada kurali · kara-kisitli devir ·
    col tavani) GECMIYOR. Taban bant (<=5) PETEK_D oldugu icin hepsinden
    gecmistir. Fark ne kadar? Buyukse 5-7 bandindaki bir ada, tabandaki
    ayni adadan FARKLI kural gormus olur — ekranda yanlis toprak.

YONTEM: iki dokum karsilastirilir.
  - `bant_ham[b]`  : YALNIZ butce kesiminden gecmis (bantin bugunku hâli)
  - `pd` (butce=b) : TAM boru hattindan gecmis (dogru hâl)
  Ikisi de ayni kutudan, ayni motordan.
⚠️ Dokumler `ARAC-B-GORUNUM-UFUK-0072.py --dokum` ile alinir; bant ham
  kesimleri yalniz MOTOR_UFUK_BANT verilerek alinan dokumde bulunur.

Kosus:
  py denetim/ARAC-B-GORUNUM-BANTSINAV-0072.py --bantli <dokum> \
     --taban 40=<dokum> --taban 56=<dokum> --taban 80=<dokum>
"""
import argparse
import json
import math
import os
import pickle
import sys
import time

import shapely
from shapely.geometry import Polygon
from shapely.ops import unary_union

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
GUNLER = ("1520-06-15", "1683-06-15", "1800-06-15")


def km2(g):
    if g is None or g.is_empty:
        return 0.0
    lat = g.centroid.y
    return abs(g.area) * (111.32 ** 2) * max(0.05, math.cos(math.radians(lat)))


def coz(wkb_listesi):
    return [shapely.from_wkb(w) if w else Polygon() for w in wkb_listesi]


def yukle(yol):
    with open(yol, "rb") as f:
        return pickle.load(f)


def asama_farki(bantli, tabanlar):
    """(c) — bant ham kesimi ile tam boru hattinin farki."""
    print("--- (c) ASAMA FARKI ---", flush=True)
    ham = bantli.get("bant_ham") or {}
    if not ham:
        raise SystemExit("dokumde bant_ham YOK (MOTOR_UFUK_BANT ile alinmali)")
    satir = []
    for b_str, wkbs in sorted(ham.items(), key=lambda kv: float(kv[0])):
        b = float(b_str)
        if b not in tabanlar:
            print("  %g sa: taban dokumu verilmedi -> OLCULEMEDI" % b)
            continue
        A = coz(wkbs)                      # yalniz butce kesimi
        B = coz(tabanlar[b]["pd"])         # tam boru hatti
        fazla_n = fazla_km2 = 0
        eksik_n = eksik_km2 = 0
        top = 0.0
        for i, ga in enumerate(A):
            gb = B[i] if i < len(B) else Polygon()
            top += km2(gb)
            if ga.is_empty and gb.is_empty:
                continue
            try:
                f = ga.difference(gb)      # boru hattinin ATTIGI ama bantta DURAN
                e = gb.difference(ga)      # bantta OLMAYAN ama boru hattinda duran
            except Exception:
                continue
            if not f.is_empty:
                a = km2(f)
                if a > 1.0:
                    fazla_n += 1
                    fazla_km2 += a
            if not e.is_empty:
                a = km2(e)
                if a > 1.0:
                    eksik_n += 1
                    eksik_km2 += a
        oran = 100.0 * (fazla_km2 + eksik_km2) / max(top, 1e-9)
        satir.append({"saat": b, "fazla_petek": fazla_n,
                      "fazla_km2": round(fazla_km2), "eksik_petek": eksik_n,
                      "eksik_km2": round(eksik_km2),
                      "toplam_km2": round(top), "fark_yuzde": round(oran, 3)})
        print("  %3g sa | FAZLA %4d petek %12s km2 | EKSIK %4d petek %12s km2 "
              "| toplam %14s km2 | fark %%%.3f"
              % (b, fazla_n, format(round(fazla_km2), ","), eksik_n,
                 format(round(eksik_km2), ","), format(round(top), ","), oran),
              flush=True)
    return satir


def devlet_bandi_maliyeti(bantli, tabanlar):
    """(b) — bant geometrisini DEVLET govdesine birlestirmenin maliyeti."""
    print("--- (b) DEVLET BANDI MALIYETI ---", flush=True)
    sah = bantli.get("sahiplik")
    if not sah:
        raise SystemExit("dokumde sahiplik tablosu YOK")
    taban = coz(bantli["pd"])
    ham = bantli.get("bant_ham") or {}
    saatler = sorted(float(x) for x in ham)
    # artis bantlari (ic ice olmayan)
    bantlar = {}
    for k, b in enumerate(saatler):
        gl = coz(ham[str(b)] if str(b) in ham else ham[("%g" % b)])
        if k == 0:
            bantlar[b] = taban              # taban bant = PETEK_D
        else:
            o = bantlar["_ham_%g" % saatler[k - 1]]
            bantlar[b] = [g.difference(o[i]) if (not g.is_empty
                                                 and not o[i].is_empty) else g
                          for i, g in enumerate(gl)]
        bantlar["_ham_%g" % b] = gl

    def govdele(geolar, gun):
        kova = {}
        for i, dn in enumerate(sah):
            g = geolar[i] if i < len(geolar) else None
            if g is None or g.is_empty:
                continue
            for f, t, kim in dn:
                if f <= gun < t:
                    kova.setdefault(kim, []).append(g)
        out = 0
        for kim, gs in kova.items():
            try:
                u = unary_union(gs)
            except Exception:
                continue
            if not u.is_empty:
                out += 1
        return out

    sonuc = []
    for gun in GUNLER:
        t0 = time.time()
        n_taban = govdele(taban, gun)
        sn_taban = time.time() - t0
        sn_bant_top, n_bant = 0.0, 0
        for k, b in enumerate(saatler):
            if k == 0:
                continue
            t1 = time.time()
            n_bant += govdele(bantlar[b], gun)
            sn_bant_top += time.time() - t1
        kat = sn_bant_top / max(sn_taban, 1e-9)
        sonuc.append({"gun": gun, "taban_devlet": n_taban,
                      "taban_sn": round(sn_taban, 2),
                      "bant_devlet": n_bant, "bant_sn": round(sn_bant_top, 2),
                      "kat": round(kat, 2)})
        print("  %s | taban %3d devlet %6.2f sn | iki bant %3d devlet %6.2f sn "
              "| KAT %.2f" % (gun, n_taban, sn_taban, n_bant, sn_bant_top, kat),
              flush=True)
    if sonuc:
        ort = sum(s["kat"] for s in sonuc) / len(sonuc)
        print("  ⇒ DEVLET BANDI / TABAN GOVDE: %.2f kat (ortalama, %d gun)"
              .replace("⇒", "=>") % (ort, len(sonuc)))
    return sonuc


def main():
    p = argparse.ArgumentParser()
    p.add_argument("--bantli", required=True)
    p.add_argument("--taban", action="append", default=[],
                   help="saat=yol (or. 40=/yol/pd-40.pkl)")
    p.add_argument("--cikti", default=os.path.join(
        KOK, "denetim", "B-GORUNUM-0072-BANTSINAV.json"))
    a = p.parse_args()
    bantli = yukle(a.bantli)
    tabanlar = {}
    for t in a.taban:
        s, _, yol = t.partition("=")
        tabanlar[float(s)] = yukle(yol)
    H = {"c_asama_farki": asama_farki(bantli, tabanlar),
         "b_devlet_bandi": devlet_bandi_maliyeti(bantli, tabanlar)}
    with open(a.cikti, "w", encoding="utf-8") as f:
        json.dump(H, f, ensure_ascii=False, indent=1)
    print("-> " + os.path.relpath(a.cikti, KOK))


if __name__ == "__main__":
    sys.exit(main())
