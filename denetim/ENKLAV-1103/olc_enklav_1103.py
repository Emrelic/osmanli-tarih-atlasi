# -*- coding: utf-8 -*-
"""
olc_enklav_1103.py — ENKLAV / EKSKLAV ADAY ÖLÇÜMÜ (LAB SALI, 3 Kasım 2026)

EVREN (sayının içine ne girer):
  · Yayındaki motor çıktısı = EKRAN: data/devletler_harita.js (yabancı devlet
    dönem gövdeleri, dnm[].g) + data/donemler.js (OSMANLI = DONEMLER[].o,
    TÂBİ = DONEMLER[].v yalnız KOMŞU olarak). İkisi de `kodla.py coz-c` ile
    çözülmüş olmalı (koşu 32). İndeks eşlemesi YOK: gövdeler kendi kendine
    yeter (arac/olc_enklav/OKU-BENI.md §3).
  · Her devlet dönemi (dnm / DONEMLER satırı) ayrı kesittir — yıldan ince.
    Parçalar unary_union ile birleştirilir; bağlı bileşen = parça.
    Ana gövde = en büyük alanlı bileşen; ötekiler KOPUK.
  · Kopuk parçanın çevresi (0,05° tampon halkası) o günün öteki gövdeleriyle
    kesiştirilir:
        DAR-AYRIM     kendi ana gövdesine ≤ ~5 km (ince şerit / kıl payı kopma)
        ENKLAV        halkanın ≥ %90'ı başka devlet, tek devlet ≥ %85
        KARA-EKSKLAV  halkanın ≥ %10'u başka devlet (deniz + kara sınırı)
        ADA           halkanın < %10'u başka devlet (deniz ayırıyor) — aday DEĞİL
GİRMEYEN: tâbi bileşenleri (karışık beylikler, tek devlet değil), deniz.
Yaklaşıklama: tampon 0,05° düzlemsel; pay oranı derece-alanıyla.
"""
import json, math, os, sys, time, bisect
import numpy as np

KOK = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.insert(0, os.path.join(KOK, "arac"))
sys.path.insert(0, os.path.join(KOK, "arac", "olc_enklav"))
import gun as _gun
from _ortak import km2
from shapely.geometry import Polygon, Point
from shapely.ops import unary_union
from shapely import STRtree

TAMPON = 0.05
CIKTI = sys.argv[1] if len(sys.argv) > 1 else os.path.join(KOK, "denetim", "ENKLAV-1103", "olcum.json")


def log(*a):
    print(time.strftime("%H:%M:%S"), *a, file=sys.stderr, flush=True)


def satir_oku(dosya, ad):
    on = ("window.%s = " % ad).encode()
    with open(os.path.join(KOK, dosya), "rb") as f:
        for line in f:
            if line.startswith(on):
                return line[len(on):].rstrip().rstrip(b";")
    raise SystemExit("bulunamadı: %s %s" % (dosya, ad))


def halka_havuzu(dosya, ad):
    b = satir_oku(dosya, ad)
    assert b[:3] == b"[[[" and b[-3:] == b"]]]", ad
    parcalar = b[3:-3].split(b"]],[[")
    del b
    out = []
    for r in parcalar:
        a = np.fromstring(r.replace(b"],[", b","), dtype=np.float64, sep=",")
        out.append(a.reshape(-1, 2))
    return out


class Havuz:
    def __init__(self, halka, parca_halka):
        self.H = halka
        self.PH = parca_halka
        self.cache = {}

    def poly(self, i):
        p = self.cache.get(i)
        if p is None:
            ks = self.PH[i]
            try:
                p = Polygon(self.H[ks[0]], [self.H[j] for j in ks[1:]])
                if not p.is_valid:
                    p = p.buffer(0)
            except Exception:
                p = Polygon()
            self.cache[i] = p
        return p


def g(s):
    return _gun.gun(s)


def _gun_km(a, b):
    la1, la2 = math.radians(a.y), math.radians(b.y)
    dl = math.radians(b.x - a.x)
    h = math.sin((la2 - la1) / 2) ** 2 + math.cos(la1) * math.cos(la2) * math.sin(dl / 2) ** 2
    return 2 * 6371.0088 * math.asin(min(1.0, math.sqrt(h)))


def main():
    t0 = time.time()
    log("devletler_harita.js okunuyor")
    VH = halka_havuzu("data/devletler_harita.js", "DEVLET_PARCALAR")
    VPH = json.loads(satir_oku("data/devletler_harita.js", "DEVLET_PARCA_HALKA"))
    VD = json.loads(satir_oku("data/devletler_harita.js", "DEVLET_HARITA"))
    log("halka", len(VH), "parca", len(VPH), "devlet", len(VD))
    log("donemler.js okunuyor")
    OH = halka_havuzu("data/donemler.js", "PARCALAR")
    OPH = json.loads(satir_oku("data/donemler.js", "PARCA_HALKA"))
    OD = json.loads(satir_oku("data/donemler.js", "DONEMLER"))
    log("osm halka", len(OH), "parca", len(OPH), "donem", len(OD))
    hv = {"V": Havuz(VH, VPH), "O": Havuz(OH, OPH)}

    # devlet -> [(fi, ti, havuz, parcalar)]
    DEV = {}
    ADLAR = {}
    for d in VD:
        ADLAR[d["id"]] = d["ad"]
        DEV[d["id"]] = sorted((g(x["f"]), g(x["t"]), "V", tuple(x["g"]), x["f"], x["t"]) for x in d["dnm"])
    DEV["OSMANLI"] = sorted((g(x["f"]), g(x["t"]), "O", tuple(x.get("o") or []), x["f"], x["t"]) for x in OD)
    DEV["TABI"] = sorted((g(x["f"]), g(x["t"]), "O", tuple(x.get("v") or []), x["f"], x["t"]) for x in OD)
    ADLAR["OSMANLI"] = "Osmanlı"; ADLAR["TABI"] = "Osmanlı tâbileri"
    BAS = {k: [x[0] for x in v] for k, v in DEV.items()}

    # parça -> devlet (komşu sorgusu için), parça kutuları + STRtree
    sahip_v = {}
    for k, v in DEV.items():
        if k in ("OSMANLI", "TABI"):
            continue
        for x in v:
            for p in x[3]:
                sahip_v.setdefault(p, k)
    sahip_o = {}
    for x in DEV["OSMANLI"]:
        for p in x[3]:
            sahip_o.setdefault(p, set()).add("OSMANLI")
    for x in DEV["TABI"]:
        for p in x[3]:
            sahip_o.setdefault(p, set()).add("TABI")

    def kutu_agaci(havuz, ids):
        from shapely.geometry import box
        kut = []
        for i in ids:
            ks = havuz.PH[i]
            a = havuz.H[ks[0]]
            kut.append(box(a[:, 0].min(), a[:, 1].min(), a[:, 0].max(), a[:, 1].max()))
        return STRtree(kut), ids
    vids = sorted(sahip_v)
    oids = sorted(sahip_o)
    agac = {"V": kutu_agaci(hv["V"], vids), "O": kutu_agaci(hv["O"], oids)}
    log("ağaçlar kuruldu", round(time.time() - t0), "sn")

    def aktif_set(dev, gi):
        L = DEV[dev]
        j = bisect.bisect_right(BAS[dev], gi) - 1
        if j >= 0 and L[j][0] <= gi < L[j][1]:
            return set(L[j][3])
        return set()

    aktif_cache = {}

    def komsu_paylari(geo, kendi, gi):
        zon = geo.buffer(TAMPON).difference(geo)
        za = zon.area
        if za <= 0:
            return {}, 0.0
        pay = {}
        for hk in ("V", "O"):
            tr, ids = agac[hk]
            for ix in tr.query(zon):
                pid = ids[ix]
                devs = [sahip_v[pid]] if hk == "V" else sahip_o[pid]
                for dv in devs:
                    key = (dv, gi)
                    if key not in aktif_cache:
                        aktif_cache[key] = aktif_set(dv, gi)
                    if pid not in aktif_cache[key]:
                        continue
                    pg = hv[hk].poly(pid)
                    if pg.is_empty:
                        continue
                    a = zon.intersection(pg).area
                    if a > 0:
                        pay[dv] = pay.get(dv, 0.0) + a / za
        return pay, za

    def nokta_sahibi(q, gi, kendi):
        """q noktası gi gününde kimin gövdesinde: devlet id · KENDI · DENIZ/BOS."""
        for hk in ("V", "O"):
            tr, ids = agac[hk]
            for ix in tr.query(q):
                pid = ids[ix]
                devs = [sahip_v[pid]] if hk == "V" else sahip_o[pid]
                for dv in devs:
                    key = (dv, gi)
                    if key not in aktif_cache:
                        aktif_cache[key] = aktif_set(dv, gi)
                    if pid in aktif_cache[key] and hv[hk].poly(pid).contains(q):
                        return "KENDI" if dv == kendi else dv
        return "DENIZ/BOS"

    comp_cache = {}
    tree_cache = {}
    adaylar = []   # açık/kapalı aday listesi
    say = {"donem": 0, "cok_bilesen": 0, "kopuk": 0}
    for n, (dev, L) in enumerate(sorted(DEV.items())):
        if dev == "TABI":
            continue
        acik = []
        for (fi, ti, hk, parts, fs, ts) in L:
            if fi >= ti or not parts:
                continue
            say["donem"] += 1
            key = (hk, parts)
            if key not in comp_cache:
                u = unary_union([hv[hk].poly(p) for p in parts])
                ps = [u] if u.geom_type == "Polygon" else [x for x in getattr(u, "geoms", []) if x.geom_type == "Polygon"]
                ps = [(km2(p), p) for p in ps if not p.is_empty]
                ps.sort(key=lambda x: -x[0])
                comp_cache[key] = ps
                if len(comp_cache) > 4000:
                    comp_cache.pop(next(iter(comp_cache)))
            ps = comp_cache[key]
            if len(ps) < 2:
                acik = []
                continue
            say["cok_bilesen"] += 1
            ana = ps[0][1]
            gi = (fi + ti) // 2
            yeni_acik = []
            for alan, p in ps[1:]:
                if alan < 1.0:
                    continue
                say["kopuk"] += 1
                rp = p.representative_point()
                eski = None
                for a in acik:
                    if a["_geo"].intersects(rp) or p.intersects(a["_rp"]):
                        eski = a
                        break
                if eski is None:
                    eski = {"devlet": dev, "f": fs, "t": ts, "alan_max": 0.0, "kesit": 0,
                            "siniflar": {}, "komsular": {}, "_geo": p, "_rp": rp}
                    adaylar.append(eski)
                eski["t"] = ts
                eski["kesit"] += 1
                if alan > eski["alan_max"]:
                    eski["alan_max"] = alan
                    eski["_buyuk"] = p
                    eski["_gi"] = gi
                    eski["_f_buyuk"] = fs
                eski["_geo"], eski["_rp"] = p, rp
                # sınıf: her kesitte değil, alanı ilk kez büyüyen ya da ilk kesitte
                if alan >= 50 and (eski["kesit"] <= 1 or alan >= eski["alan_max"]):
                    # KORİDOR: kendinden büyük en yakın kardeş gövdeye en kısa
                    # doğru; doğru üstünde 9 örnek — kimin toprağı / deniz.
                    # Bileşenler ayrık: birleştirme yok; kutu ağacıyla aday daralt.
                    if key not in tree_cache:
                        tree_cache.clear()
                        tree_cache[key] = STRtree([q for _, q in ps])
                    tr = tree_cache[key]
                    hedef = None
                    for R in (1, 3, 10, 40, 400):
                        ix = [i for i in tr.query(p.envelope.buffer(R)) if ps[i][0] > alan]
                        if ix:
                            hedef = min((ps[i][1] for i in ix), key=p.distance)
                            break
                    from shapely.ops import nearest_points
                    pa, pb = nearest_points(p, hedef)
                    dkm = _gun_km(pa, pb)
                    ornek = {}
                    for k in range(1, 10):
                        q = Point(pa.x + (pb.x - pa.x) * k / 10, pa.y + (pb.y - pa.y) * k / 10)
                        sh = nokta_sahibi(q, gi, dev)
                        ornek[sh] = ornek.get(sh, 0) + 1
                    eski["_kor"] = [round(pa.x, 3), round(pa.y, 3), round(pb.x, 3), round(pb.y, 3)]
                    eski["koridor_km"] = round(dkm, 1)
                    eski["koridor"] = ornek
                if eski["kesit"] <= 1 or alan >= eski["alan_max"]:
                    dar = p.buffer(TAMPON).intersects(ana)
                    pay, _ = komsu_paylari(p, dev, gi)
                    pay.pop(dev, None)
                    top = sum(pay.values())
                    if dar:
                        s = "DAR-AYRIM"
                    elif top >= 0.9 and pay and max(pay.values()) >= 0.85:
                        s = "ENKLAV"
                    elif top >= 0.1:
                        s = "KARA-EKSKLAV"
                    else:
                        s = "ADA"
                    eski["siniflar"][s] = eski["siniflar"].get(s, 0) + 1
                    for k2, v2 in pay.items():
                        if v2 > eski["komsular"].get(k2, 0):
                            eski["komsular"][k2] = round(v2, 3)
                    eski["sinif"] = s if s != "ADA" or "sinif" not in eski else eski["sinif"]
                yeni_acik.append(eski)
            acik = yeni_acik
        if n % 100 == 0:
            log(n, dev, say, "aday", len(adaylar), round(time.time() - t0), "sn")
    log("bitti", say, "aday", len(adaylar))

    # yerleşimler
    import girdi
    Y = girdi.yukle(sessiz=True)

    def yer_sahip(y, gi):
        for kat in ("d", "v"):
            for p in y.get(kat) or []:
                if g(p["f"]) <= gi < g(p["t"]):
                    return "OSMANLI" if kat == "d" else "TABI"
        for p in y.get("s") or []:
            if g(p["f"]) <= gi < g(p["t"]):
                return p.get("d") or "?"
        return None
    noktalar = [(Point(y["lon"], y["lat"]), y) for y in Y if "lat" in y and "lon" in y]
    nagac = STRtree([p for p, _ in noktalar])
    out = []
    for a in adaylar:
        geo, gi = a["_buyuk"], a["_gi"]
        icer = []
        for ix in nagac.query(geo):
            pt, y = noktalar[ix]
            if geo.contains(pt):
                icer.append({"ad": y.get("ad"), "sahip": yer_sahip(y, gi),
                             "eksklav": any(p.get("eksklav") for p in y.get("s") or [])})
        kor = []
        if a.get("_kor"):
            from shapely.geometry import LineString
            ax, ay, bx, by = a["_kor"]
            hat = LineString([(ax, ay), (bx, by)]) if (ax, ay) != (bx, by) else Point(ax, ay)
            alan_k = hat.buffer(0.25)
            for ix in nagac.query(alan_k):
                pt, y = noktalar[ix]
                if alan_k.contains(pt) and not geo.contains(pt):
                    kor.append({"ad": y.get("ad"), "sahip": yer_sahip(y, gi)})
        a["koridor_yer"] = kor[:30]
        c = geo.representative_point()
        out.append({k: v for k, v in a.items() if not k.startswith("_")} |
                   {"devlet_ad": ADLAR.get(a["devlet"]), "alan_max": round(a["alan_max"], 1),
                    "nokta": [round(c.y, 3), round(c.x, 3)], "buyuk_gun": a["_f_buyuk"],
                    "yerlesimler": icer})
    # s.eksklav kayıtları
    eks = []
    for y in Y:
        for p in y.get("s") or []:
            if p.get("eksklav"):
                eks.append({"ad": y.get("ad"), "lat": y.get("lat"), "lon": y.get("lon"),
                            "f": p["f"], "t": p["t"], "d": p.get("d")})
    json.dump({"olcum": say, "adaylar": out, "s_eksklav": eks}, open(CIKTI, "w", encoding="utf-8"),
              ensure_ascii=False, indent=0)
    log("yazıldı", CIKTI, round(time.time() - t0), "sn")


if __name__ == "__main__":
    main()
