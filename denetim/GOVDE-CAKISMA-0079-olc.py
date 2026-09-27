# -*- coding: utf-8 -*-
"""GOVDE-CAKISMA-0079 — govde cakismasinin KOK SEBEBI olcumu.

Yalniz OKUR: data/donemler.js · data/devletler_harita.js · girdi.py (YERLER).
arac/ ve data/ya YAZMAZ, uret_petek.py'yi CAGIRMAZ/import ETMEZ.

Soru: iki govdenin paylastigi hucre, hangi govdenin KENDI peteginden tasmasi?
  - ham petek vekili = o gun sahnedeki yerlesimlerin en-yakin-nokta Voronoi'si
    (yaslama/Chaikin YOK -> sinirda ~bir-iki km gurultu beklenir)
  - hucrenin 'hakli sahibi' = en yakin sahnedeki yerlesimin o gunku etiketi
  - 'tasan' = hucreyi boyayan ama hakli sahibi olmayan govde
  - derinlik = hucrenin, tasan govdenin kendi Voronoi bolgesine uzakligi
  - KAPAMA SINAVI: tasan govdenin ham bolgesine motorun `kapat(g, 0.15)`
    esdegeri (izgarada disk kapamasi) uygulaninca hucre kapsaniyor mu?
Kullanim: py denetim/GOVDE-CAKISMA-0079-olc.py
"""
import sys, os, re, json, math
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import numpy as np
import shapely
from shapely.geometry import Polygon
from scipy.spatial import cKDTree
from scipy import ndimage as ndi
import girdi

KAPAMA_R = 0.15          # uret_petek.py:2788 kapat(g, yaricap=0.15)


def js_oku(yol, adlar):
    out = {}
    # GOVDE_KOK: eski bir govdeyi (git show ile cikarilmis data/) olcmek icin
    with open(os.path.join(os.environ.get("GOVDE_KOK", KOK), yol), encoding="utf-8") as f:
        for line in f:
            m = re.match(r"window\.([A-Z_]+) = ", line)
            if m and m.group(1) in adlar:
                out[m.group(1)] = json.loads(line[m.end():].rstrip().rstrip(";"))
    eksik = set(adlar) - set(out)
    if eksik:
        raise SystemExit(f"OKUNAMADI {yol}: {sorted(eksik)}")
    return out


print("yukleniyor ...", flush=True)
D1 = js_oku("data/donemler.js", ["PARCALAR", "PARCA_HALKA", "DONEMLER"])
D2 = js_oku("data/devletler_harita.js", ["DEVLET_PARCALAR", "DEVLET_PARCA_HALKA", "DEVLET_HARITA"])
YERLER = girdi.yukle(sessiz=True)
print(f"  DONEMLER {len(D1['DONEMLER'])} · DEVLET_HARITA {len(D2['DEVLET_HARITA'])} · YERLER {len(YERLER)}")


def coz(g, havuz, ph):
    ps = []
    for p in g or []:
        halkalar = [havuz[h] for h in ph[p]]
        if len(halkalar[0]) < 4:
            continue
        ps.append(shapely.make_valid(Polygon(halkalar[0], [r for r in halkalar[1:] if len(r) >= 4])))
    return shapely.union_all(ps) if ps else None


def govdeler(gun, kutu):
    """o gun kutuya degen butun govdeler: [(ad, geom, f, t)]"""
    x0, y0, x1, y1 = kutu
    kb = shapely.box(x0, y0, x1, y1)
    out = []
    for d in D2["DEVLET_HARITA"]:
        for p in d["dnm"]:
            if p["f"] <= gun < p["t"]:
                g = coz(p["g"], D2["DEVLET_PARCALAR"], D2["DEVLET_PARCA_HALKA"])
                if g is not None and g.intersects(kb):
                    out.append(("devlet:" + d["id"], g, p["f"], p["t"]))
    for d in D1["DONEMLER"]:
        if d["f"] <= gun < d["t"]:
            for alan, ad in (("o", "osmanli"), ("v", "vassal")):
                g = coz(d.get(alan), D1["PARCALAR"], D1["PARCA_HALKA"])
                if g is not None and g.intersects(kb):
                    out.append((ad, g, d["f"], d["t"]))
            for i, hb in enumerate(d.get("h") or []):
                g = coz(hb.get("g"), D1["PARCALAR"], D1["PARCA_HALKA"])
                if g is not None and g.intersects(kb):
                    out.append((f"himaye:{hb.get('renk')}", g, d["f"], d["t"]))
    return out


def etiket(y, g):
    for p in y.get("d") or []:
        if p["f"] <= g < p["t"]:
            return "OSMANLI"
    for p in y.get("v") or []:
        if p["f"] <= g < p["t"]:
            return "V:" + str(p.get("kid") or p.get("k") or "?")
    for p in y.get("s") or []:
        if p["f"] <= g < p["t"]:
            return p["d"]
    return "SAHIPSIZ"


def sahne(g, kutu, pay=4.0):
    x0, y0, x1, y1 = kutu
    Y = [y for y in YERLER
         if x0 - pay <= y["lon"] <= x1 + pay and y0 - pay <= y["lat"] <= y1 + pay
         and not (y.get("kur") and y["kur"] > g) and not (y.get("bit") and y["bit"] <= g)]
    return Y


def olc(ad, gun, kutu, adim=0.02, ayrinti=True):
    x0, y0, x1, y1 = kutu
    cz = math.cos(math.radians((y0 + y1) / 2))
    xs = np.arange(x0 + adim / 2, x1, adim)
    ys = np.arange(y0 + adim / 2, y1, adim)
    X, Yg = np.meshgrid(xs, ys)
    G = govdeler(gun, kutu)
    kaps = np.zeros((len(G),) + X.shape, dtype=bool)
    for i, (_, g, _, _) in enumerate(G):
        kaps[i] = shapely.contains_xy(g, X, Yg)
    sayi = kaps.sum(0)
    boyali = int((sayi >= 1).sum())
    cak = sayi >= 2
    print(f"\n=== {ad} · {gun} · kutu {kutu} · adim {adim}°")
    print(f"  govde {len(G)} · boyali hucre {boyali} · CAKISAN {int(cak.sum())}"
          f" ({100.0 * cak.sum() / max(1, boyali):.2f}%)")
    if not cak.any():
        return {"ad": ad, "gun": gun, "boyali": boyali, "cakisan": 0}
    if os.environ.get("SADECE_SAY"):
        cift = {}
        for (j, i) in zip(*np.nonzero(cak)):
            a = " || ".join(sorted(G[k][0] for k in range(len(G)) if kaps[k, j, i]))
            cift[a] = cift.get(a, 0) + 1
        for k, v in sorted(cift.items(), key=lambda kv: -kv[1])[:6]:
            print(f"    {v:6d}  {k}")
        return {"ad": ad, "gun": gun, "boyali": boyali, "cakisan": int(cak.sum()),
                "cift": dict(sorted(cift.items(), key=lambda kv: -kv[1])[:12])}
    # ---- ham petek vekili
    Y = sahne(gun, kutu)
    P = np.array([[y["lon"] * cz, y["lat"]] for y in Y])
    agac = cKDTree(P)
    L = [etiket(y, gun) for y in Y]
    # etiket -> govde eslemesi: yerlesim noktasi hangi govdenin icinde
    es = {}
    for i, (gad, g, _, _) in enumerate(G):
        for y, l in zip(Y, L):
            if shapely.contains_xy(g, y["lon"], y["lat"]):
                es.setdefault(l, {}).setdefault(i, 0)
                es[l][i] += 1
    etg = {l: max(v, key=v.get) for l, v in es.items()}
    # her govdenin ham bolgesi (izgara maskesi) = en yakin yerlesimi ona eslenen hucreler
    _, en = agac.query(np.c_[X.ravel() * cz, Yg.ravel()])
    hakli = np.array([etg.get(L[k], -1) for k in en]).reshape(X.shape)
    hakli_et = np.array([L[k] for k in en], dtype=object).reshape(X.shape)
    r_px = KAPAMA_R / adim
    rr = int(math.ceil(r_px))
    yy, xx = np.mgrid[-rr:rr + 1, -rr:rr + 1]
    disk = (xx * xx + yy * yy) <= r_px * r_px
    kapali = {}
    cift, sinif = {}, {"kapama": 0, "kapama_disi": 0, "hakli_yok": 0}
    derin = []
    ornek = {}
    for (j, i) in zip(*np.nonzero(cak)):
        ic = [k for k in range(len(G)) if kaps[k, j, i]]
        h = hakli[j, i]
        anahtar = " || ".join(sorted(G[k][0] for k in ic))
        cift[anahtar] = cift.get(anahtar, 0) + 1
        if h < 0 or h not in ic:
            sinif["hakli_yok"] += 1
            ornek.setdefault(("hakli_yok", anahtar), (X[j, i], Yg[j, i], hakli_et[j, i]))
            continue
        for k in ic:
            if k == h:
                continue
            if k not in kapali:
                ham = hakli == k
                pad = rr + 2
                hp = np.pad(ham, pad)
                kap = ndi.binary_erosion(ndi.binary_dilation(hp, disk), disk)[pad:-pad, pad:-pad]
                kapali[k] = kap & ~ham
            # derinlik: tasan govdenin kendi Voronoi bolgesine uzaklik
            if ("edt", k) not in kapali:
                maske = hakli == k
                kapali[("edt", k)] = (ndi.distance_transform_edt(~maske, sampling=(adim, adim * cz))
                                      if maske.any() else None)
            _e = kapali[("edt", k)]
            dd = float(_e[j, i]) if _e is not None else float("nan")
            derin.append(dd)
            if kapali[k][j, i]:
                sinif["kapama"] += 1
            else:
                sinif["kapama_disi"] += 1
                ornek.setdefault(("kapama_disi", G[k][0]), (X[j, i], Yg[j, i], hakli_et[j, i], dd))
    print("  cift (hucre):")
    for k, v in sorted(cift.items(), key=lambda kv: -kv[1])[:8]:
        print(f"    {v:6d}  {k}")
    top = sum(sinif.values())
    print(f"  TASMA SINIFI: kapama {sinif['kapama']} · kapama-disi {sinif['kapama_disi']}"
          f" · hakli-sahip-yok/uymuyor {sinif['hakli_yok']}  (toplam {top})")
    d = np.array([x for x in derin if x == x])
    if len(d):
        print(f"  derinlik (derece, tasanin kendi Voronoi bolgesine): medyan {np.median(d):.3f}"
              f" · %90 {np.percentile(d, 90):.3f} · en {d.max():.3f}"
              f" · <=2r(0.30) orani {100.0 * (d <= 0.30).mean():.0f}%")
    if ayrinti:
        for k, v in list(ornek.items())[:6]:
            print(f"    ornek {k}: {tuple(round(float(a), 3) if isinstance(a, (float, np.floating)) else a for a in v)}")
    for gad, g, f, t in G:
        pass
    return {"ad": ad, "gun": gun, "boyali": boyali, "cakisan": int(cak.sum()), "sinif": sinif,
            "cift": dict(sorted(cift.items(), key=lambda kv: -kv[1])[:8])}


if __name__ == "__main__":
    PENCERE = [
        ("H-79:1 Cizre", "1281-01-01", (42.02, 36.63, 43.11, 38.00), 0.01),
        ("H-79:2 Trabzon", "1281-01-01", (36.73, 39.53, 41.81, 41.52), 0.02),
        ("H-79:5 Yinchuan-Xian", "1281-01-01", (103.97, 30.92, 110.73, 40.34), 0.05),
        ("H-79:6 G.Cin", "1281-01-01", (103.38, 20.33, 112.73, 27.36), 0.05),
        ("H-77:13 Nigbolu", "1915-09-06", (24.2, 43.6, 25.8, 44.4), 0.01),
        ("H-77:82/83 Kafkas", "1921-06-01", (40.99, 40.45, 43.4, 41.59), 0.02),
        ("KONTROL Ic Anadolu", "1600-01-01", (31.0, 38.0, 34.0, 40.0), 0.02),
        ("H-77:76 Derbend", "1920-07-28", (46.7, 41.4, 48.9, 42.7), 0.01),
    ]
    if os.environ.get("SADECE_SAY"):       # DUNYA: -180..180 x -60..85, 0.25 derece
        PENCERE = [(f"DUNYA {g}", g, (-180.0, -60.0, 180.0, 85.0), 0.25)
                   for g in ("1281-01-01", "1453-05-29", "1600-06-15", "1800-06-15", "1884-01-01", "1921-06-01")]
    sec = sys.argv[1:]
    sonuc = []
    for ad, gun, kutu, adim in PENCERE:
        if sec and not any(s in ad for s in sec):
            continue
        sonuc.append(olc(ad, gun, kutu, adim))
    _son = ("-eski" if os.environ.get("GOVDE_KOK") else "") + ("-dunya" if os.environ.get("SADECE_SAY") else "")
    with open(os.path.join(KOK, "denetim", f"GOVDE-CAKISMA-0079-olc{_son}.json"), "w", encoding="utf-8") as f:
        json.dump(sonuc, f, ensure_ascii=False, indent=1, default=str)
