# -*- coding: utf-8 -*-
"""ARAC-MTR-ORTAK-0914 — P13A-MOTOR-OLCUM ortak yükleyici (SALT OKUMA).

Ne yapar:
  · yayındaki koşu 10 (r8232) çıktısını okur: data/donemler.js · devletler_harita.js ·
    petek_govde.js  → dönem gövdeleri (Osmanlı o/v, yabancı dnm), SERBEST hatlar,
    zamansız petek geometrisi.
  · SAHİPLİĞİ koşu 10'un GÖRDÜĞÜ girdiden okur: `URETIM_IZI.girdi` sha256 izleri
    bugünkü data/ ile karşılaştırılır; tutmayan dosyanın izi tutan git blob'u
    bulunur ve scratch kopyasına yazılır. (14 Eylül ölçümü: 80 girdinin 11'i
    değişmişti, 11'inin de izi git'te bulundu.)
  · kara maskesini motorun yolundan kutu başına yeniden kurar (NE 10m land
    ∩ kutu → simplify(KARA_TOL=0.002) − göller(simplify 0.01)).
Hiçbir proje dosyasına yazmaz. Önbellek yalnız SCRATCH altına.
"""
import os, sys, io, json, re, hashlib, pickle, subprocess, math
from shapely.geometry import Polygon, MultiPolygon, LineString, MultiLineString, Point, box, shape
from shapely.ops import unary_union
from shapely.validation import explain_validity

KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
SCRATCH = os.environ.get("MTR_SCRATCH", r"C:\Users\emrem\AppData\Local\Temp\claude\C--Users-emrem-OneDrive-Desktop-TAR-H-CO-RAFYA-S-TES-\695200e0-9040-42fa-b8ca-a816459e5434\scratchpad")
DATA = os.path.join(KOK, "data")
VK = os.path.join(KOK, "veri-kaynak")
R_DUNYA = 6371.0088
sys.path.insert(0, os.path.join(KOK, "arac"))


def js_var(metin, ad):
    """`window.AD = <json>` değerini ayrıştırır (motor çıktısı saf JSON yazar)."""
    anahtar = f"window.{ad} = "
    i = metin.find(anahtar)
    if i < 0:
        raise KeyError(ad)
    v, _ = json.JSONDecoder().raw_decode(metin, i + len(anahtar))
    return v


REV = os.environ.get("MTR_REV")          # boşsa yayındaki çalışma kopyası (r8232)
CIKTI = DATA
if REV:
    CIKTI = os.path.join(SCRATCH, "rev_" + REV)
    os.makedirs(CIKTI, exist_ok=True)
    for _f in ("donemler.js", "devletler_harita.js", "petek_govde.js"):
        _hed = os.path.join(CIKTI, _f)
        if not os.path.exists(_hed):
            _b = subprocess.run(["git", "show", REV + ":data/" + _f], capture_output=True, cwd=KOK).stdout
            if not _b:
                raise SystemExit(f"!! {REV}:data/{_f} git'te yok")
            open(_hed, "wb").write(_b)


def _yukle_cikti():
    onb = os.path.join(SCRATCH, "mtr_cikti_" + (REV or "r8232") + ".pkl")
    DATA_ = CIKTI
    dmt = os.path.join(DATA_, "donemler.js")
    imza = [os.path.getsize(os.path.join(DATA_, f)) for f in
            ("donemler.js", "devletler_harita.js", "petek_govde.js")]
    if os.path.exists(onb):
        with open(onb, "rb") as fh:
            C = pickle.load(fh)
        if C.get("_imza") == imza:
            return C
    C = {"_imza": imza}
    s = io.open(dmt, encoding="utf-8").read()
    for ad in ("PETEKLER", "PARCALAR", "PARCA_HALKA", "DONEMLER", "SERBEST", "SERBEST_U", "URETIM_IZI"):
        C[ad] = js_var(s, ad)
    s = io.open(os.path.join(DATA_, "devletler_harita.js"), encoding="utf-8").read()
    for ad in ("DEVLET_PARCALAR", "DEVLET_PARCA_HALKA", "DEVLET_HARITA"):
        C[ad] = js_var(s, ad)
    s = io.open(os.path.join(DATA_, "petek_govde.js"), encoding="utf-8").read()
    for ad in ("PETEK_GOVDE_PARCA", "PETEK_GOVDE"):
        C[ad] = js_var(s, ad)
    del s
    with open(onb, "wb") as fh:
        pickle.dump(C, fh, protocol=4)
    return C


C = _yukle_cikti()


# ---------------- koşu 10 girdi anlık görüntüsü ----------------
def kosu10_data_dizini(sessiz=False):
    hedef = os.path.join(SCRATCH, "girdi_" + (REV or "r8232"))
    os.makedirs(hedef, exist_ok=True)
    iz = C["URETIM_IZI"]["girdi"]
    rapor = []
    for f, h in iz.items():
        cik = os.path.join(hedef, f)
        if os.path.exists(cik) and hashlib.sha256(open(cik, "rb").read()).hexdigest() == h:
            continue
        kay = os.path.join(DATA, f)
        b = open(kay, "rb").read() if os.path.exists(kay) else b""
        if hashlib.sha256(b).hexdigest() == h:
            open(cik, "wb").write(b); continue
        bul = None
        L = subprocess.run(["git", "log", "--format=%H", "-n", "80", "--", "data/" + f],
                           capture_output=True, text=True, cwd=KOK).stdout.split()
        for c in L:
            bb = subprocess.run(["git", "show", c + ":data/" + f], capture_output=True, cwd=KOK).stdout
            for aday in (bb, bb.replace(b"\n", b"\r\n")):
                if hashlib.sha256(aday).hexdigest() == h:
                    bul = (c, aday); break
            if bul: break
        if not bul:
            raise SystemExit(f"!! {f}: koşu 10 izi git'te BULUNAMADI — sahiplik ölçülemez")
        open(cik, "wb").write(bul[1])
        rapor.append((f, bul[0][:7]))
    # girdi olmayan ama girdi.py'nin okuduğu yardımcılar (künye)
    for f in ("devletler.js",):
        open(os.path.join(hedef, f), "wb").write(open(os.path.join(DATA, f), "rb").read())
    if rapor and not sessiz:
        print("  koşu 10 izine geri alınan girdi:", rapor)
    return hedef


_Y = None
def yerler():
    """Koşu 10'un gördüğü YERLER, motorun `harita:` düşüşüyle."""
    global _Y
    if _Y is not None:
        return _Y
    import girdi
    girdi.DATA = kosu10_data_dizini(sessiz=True)
    _old = sys.stdout
    sys.stdout = io.StringIO()
    try:
        Y = girdi.yukle(sessiz=True)
        kun = girdi.oku_devletler()
    finally:
        sys.stdout = _old
    harita_alt = {k.get("id"): k.get("harita") for k in kun if k.get("id") and k.get("harita")}
    dev_ids = {d["id"] for d in C["DEVLET_HARITA"]}
    for y in Y:
        for alan in ("d", "v", "s"):
            y.setdefault(alan, [])
        for sp in y["s"]:
            if sp["d"] not in dev_ids and harita_alt.get(sp["d"]) in dev_ids:
                sp["d"] = harita_alt[sp["d"]]
    assert len(Y) == len(C["PETEKLER"]), (len(Y), len(C["PETEKLER"]))
    for i, (p, y) in enumerate(zip(C["PETEKLER"], Y)):
        assert p["a"] == y["ad"], (i, p["a"], y["ad"])
    _Y = Y
    return Y


def sahip(y, g):
    """Motorun sırasıyla: d/v Osmanlı (yabancı gövdeye katılmaz), sonra s."""
    for p in y["d"]:
        if p["f"] <= g < p["t"]:
            return "OSMANLI"
    for p in y["v"]:
        if p["f"] <= g < p["t"]:
            return "OSMANLI-tabi"
    for p in y["s"]:
        if p["f"] <= g < p["t"]:
            return p["d"]
    return None


def sahnede(y, g):
    return not ((y.get("kur") and y["kur"] > g) or (y.get("bit") and y["bit"] <= g))


# ---------------- geometri çözücü ----------------
def _poligonlar(dizi, havuz, parca_halka):
    out = []
    for p in dizi or []:
        halkalar = [havuz[h] for h in parca_halka[p]]
        out.append((p, halkalar))
    return out


def ham_poligon(halkalar):
    """Onarımsız poligon — is_valid sınavı bunun üzerinde yapılır."""
    return Polygon(halkalar[0], halkalar[1:])


def govde(dizi, havuz, parca_halka, onar=True):
    ps = []
    for _, h in _poligonlar(dizi, havuz, parca_halka):
        q = ham_poligon(h)
        if onar and not q.is_valid:
            q = q.buffer(0)
        ps.append(q)
    return unary_union(ps) if onar else ps


def donem(g):
    for d in C["DONEMLER"]:
        if d["f"] <= g < d["t"]:
            return d
    return None


def osmanli(g, onar=True):
    d = donem(g)
    if d is None:
        return None, None, d
    o = govde(d.get("o"), C["PARCALAR"], C["PARCA_HALKA"], onar)
    v = govde(d.get("v"), C["PARCALAR"], C["PARCA_HALKA"], onar) if d.get("v") else (MultiPolygon() if onar else [])
    return o, v, d


def yabancilar(g, kutu=None, onar=True):
    """{id: (gövde, dnm kaydı)} — kutu verilirse yalnız kesişenler."""
    out = {}
    for dv in C["DEVLET_HARITA"]:
        for p in dv["dnm"]:
            if p["f"] <= g < p["t"]:
                gg = govde(p["g"], C["DEVLET_PARCALAR"], C["DEVLET_PARCA_HALKA"], onar)
                if kutu is not None:
                    geo = gg if onar else unary_union([x.buffer(0) for x in gg])
                    if not geo.intersects(kutu):
                        break
                out[dv["id"]] = (gg, p)
                break
    return out


def sahipler(g, kutu=None):
    """Bütün boyalı katmanlar: {'OSMANLI': o, 'OSMANLI-tabi': v, <id>: gövde}."""
    o, v, _ = osmanli(g)
    out = {}
    if o is not None and not o.is_empty and (kutu is None or o.intersects(kutu)):
        out["OSMANLI"] = o
    if v is not None and not v.is_empty and (kutu is None or v.intersects(kutu)):
        out["OSMANLI-tabi"] = v
    for k, (gg, _) in yabancilar(g, kutu).items():
        out[k] = gg
    return out


_PETEK = {}
def petek(i):
    if i not in _PETEK:
        _PETEK[i] = govde(C["PETEK_GOVDE"][i], C["PETEK_GOVDE_PARCA"],
                          list(range(len(C["PETEK_GOVDE_PARCA"]))), True) \
            if False else _petek_coz(i)
    return _PETEK[i]


def _petek_coz(i):
    ps = []
    for pj in C["PETEK_GOVDE"][i]:
        parca = C["PETEK_GOVDE_PARCA"][pj]
        q = Polygon(parca[0], parca[1:])
        if not q.is_valid:
            q = q.buffer(0)
        ps.append(q)
    return unary_union(ps) if ps else Polygon()


_PAGAC = None
def petek_agaci():
    global _PAGAC
    if _PAGAC is None:
        from shapely import STRtree
        geos = [box(*_petek_zarf(i)) for i in range(len(C["PETEK_GOVDE"]))]
        _PAGAC = STRtree(geos)
    return _PAGAC


def _petek_zarf(i):
    xs, ys = [], []
    for pj in C["PETEK_GOVDE"][i]:
        for x, y in C["PETEK_GOVDE_PARCA"][pj][0]:
            xs.append(x); ys.append(y)
    if not xs:
        return (0, 0, 0, 0)
    return (min(xs), min(ys), max(xs), max(ys))


def kutudaki_petekler(kutu):
    return [int(i) for i in petek_agaci().query(kutu) if petek(int(i)).intersects(kutu)]


# ---------------- kara maskesi (motorun yolu, kutu başına) ----------------
_NE = {}
def _ne(ad):
    if ad not in _NE:
        _NE[ad] = json.load(open(os.path.join(VK, ad), encoding="utf-8"))
    return _NE[ad]


def kara(kutu, tampon=0.3):
    genis = kutu.buffer(tampon)
    parca = []
    for f in _ne("ne_10m_land.geojson")["features"]:
        g = shape(f["geometry"])
        if g.envelope.intersects(genis):
            parca.append(g.buffer(0).intersection(genis))
    K = unary_union(parca).buffer(0).simplify(0.002, preserve_topology=True).buffer(0)
    gs = []
    DOGAL = {"Lake Il'Men'", "Ozero Kubenskoye", "Mjøsa", "Kostroma Reservoir"}
    for f in _ne("ne_10m_lakes.geojson")["features"]:
        p = f["properties"]
        g = shape(f["geometry"]).buffer(0)
        if not (g.envelope.intersects(genis) and g.area > 0.02):
            continue
        ad = p.get("name") or "(adsız)"; yil = p.get("year") or -99
        if p.get("featurecla") == "Reservoir" and ad not in DOGAL and (yil >= 1900 or p.get("dam_name")):
            continue
        gs.append(g.intersection(genis))
    import girdi
    girdi.DATA = kosu10_data_dizini(sessiz=True)
    _old = sys.stdout; sys.stdout = io.StringIO()
    try:
        ek = girdi.oku_goller(sessiz=True)
    finally:
        sys.stdout = _old
    for e in ek:
        g = shape(e["geometry"]).buffer(0)
        if g.intersects(genis):
            gs.append(g.intersection(genis))
    if gs:
        K = K.difference(unary_union(gs).buffer(0).simplify(0.01, preserve_topology=True).buffer(0)).buffer(0)
    return K.intersection(kutu)


def ne_kara_tam(kutu, tampon=0.1):
    """Sadeleştirmesiz NE 10m kara (ada kıyı kalitesi karşılaştırması için)."""
    genis = kutu.buffer(tampon)
    parca = [shape(f["geometry"]).buffer(0).intersection(genis)
             for f in _ne("ne_10m_land.geojson")["features"]
             if shape(f["geometry"]).envelope.intersects(genis)]
    return unary_union(parca).intersection(kutu)


# ---------------- ölçü ----------------
def km2(g):
    """Motorun `_ham_km2` formülü (küresel alan, yuvarlamasız)."""
    if g is None or g.is_empty:
        return 0.0
    if g.geom_type == "GeometryCollection":
        return sum(km2(x) for x in g.geoms if x.geom_type in ("Polygon", "MultiPolygon"))
    if g.geom_type not in ("Polygon", "MultiPolygon"):
        return 0.0
    ps = g.geoms if isinstance(g, MultiPolygon) else [g]
    T = 0.0
    for p in ps:
        for ring, sg in [(p.exterior, 1)] + [(h, -1) for h in p.interiors]:
            cs = list(ring.coords); s = 0.0
            for i in range(len(cs) - 1):
                lo1, la1 = math.radians(cs[i][0]), math.radians(cs[i][1])
                lo2, la2 = math.radians(cs[i + 1][0]), math.radians(cs[i + 1][1])
                s += (lo2 - lo1) * (2 + math.sin(la1) + math.sin(la2))
            T += sg * abs(s * R_DUNYA * R_DUNYA / 2)
    return T


def km(a_lat, a_lon, b_lat, b_lon):
    p1, p2 = math.radians(a_lat), math.radians(b_lat)
    dp, dl = p2 - p1, math.radians(b_lon - a_lon)
    h = math.sin(dp / 2) ** 2 + math.cos(p1) * math.cos(p2) * math.sin(dl / 2) ** 2
    return 2 * R_DUNYA * math.asin(math.sqrt(h))


def kutu_lat_lon(la0, la1, lo0, lo1):
    return box(lo0, la0, lo1, la1)


def parcalar(g):
    if g is None or g.is_empty:
        return []
    if g.geom_type == "Polygon":
        return [g]
    if g.geom_type == "MultiPolygon":
        return list(g.geoms)
    if g.geom_type == "GeometryCollection":
        out = []
        for x in g.geoms:
            out += parcalar(x)
        return out
    return []


if __name__ == "__main__":
    Y = yerler()
    print("çıktı:", len(C["PETEKLER"]), "petek ·", len(C["DONEMLER"]), "Osmanlı dönemi ·",
          len(C["DEVLET_HARITA"]), "yabancı kimlik")
    print("yerleşim:", len(Y), "· ad hizası tam (assert)")
