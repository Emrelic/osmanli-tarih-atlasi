# ACILIS-ANIM-0929 — açılış perdesinin silüet verisini üretir.
#   py denetim/ARAC-ACILIS-ANIM-0929-URET.py
# Çıktı: data/acilis_siluet.js içindeki işaretli VERİ bloğu (kurucu kod elle
# yazılmıştır, bu betik ona DOKUNMAZ).
# Kaynaklar (telif YOK):
#   · bugünkü ülkeler: veri-kaynak/ne_10m_admin_0_countries.geojson (Natural Earth, kamu malı)
#   · imparatorluklar: atlasın KENDİ gövdeleri (data/devletler_harita.js, üretilmiş çıktımız)
#     + Osmanlı 1600 zirvesi (denetim/ARAYUZ-0077-osmanli-zirve.json)
#   · dünya karası (küre + dünyaya yayılmış imparatorluk zemini): ne_10m_land.geojson
# Silüetler SÜS'tür, ölçü değildir: sadeleştirme toleransı boyun ~%0,8'i.
# Etiketteki yıl = atlasın o künye için EN GENİŞ gövde döneminin BAŞLANGIÇ yılı
# (mamul ürünün kendini göstermesi; bir tarih hükmü değil, ölçüm değeri).
import sys, json, math, re, time
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
from shapely.geometry import shape, Polygon, box
from shapely.ops import unary_union

KOK = "C:/atlas/"
CIKTI = KOK + "data/acilis_siluet.js"

# (anahtar, tür, kaynak kimliği, ekranda ad, renk, seçim)
#  tür "ne"  = Natural Earth ADM0_A3 · "atlas" = DEVLET_HARITA id · "osm" = Osmanlı zirvesi
#  seçim: None = en geniş dönem · "YYYY-MM-DD" = o günü kapsayan dönem
# SIRA = GÖSTERİM SIRASI = ÖNEM SIRASI. Perde erken kalkarsa kuyruk kesilir;
# en bilinen/en büyük önce (Emre 29 Eyl: "en bilindik en büyükten başlayarak").
SIRA = [
    ("osm",     "osm",   None,                  "Osmanlı Devleti",        "#8e0b22", None),
    ("RUS",     "ne",    "RUS",                 "Rusya",                  "#4f7d4f", None),
    ("ing",     "atlas", "ingiltere",           "Britanya İmparatorluğu", "#7e3d8f", None),
    ("CHN",     "ne",    "CHN",                 "Çin",                    "#c8553d", None),
    ("USA",     "ne",    "USA",                 "ABD",                    "#2e5aa8", None),
    ("rus",     "atlas", "rusya",               "Rus Çarlığı",            "#5b8a3c", None),
    ("IND",     "ne",    "IND",                 "Hindistan",              "#e07b24", None),
    ("saf",     "atlas", "safevi",              "Safevîler",              "#1f8a70", None),
    ("CAN",     "ne",    "CAN",                 "Kanada",                 "#b03a48", None),
    ("bab",     "atlas", "babur-imparatorlugu", "Babür İmparatorluğu",    "#d4a017", None),
    ("BRA",     "ne",    "BRA",                 "Brezilya",               "#2e8b57", None),
    ("tim",     "atlas", "timurlu",             "Timurlular",             "#6d4c9f", None),
    ("AUS",     "ne",    "AUS",                 "Avustralya",             "#c07a2c", None),
    ("avm",     "atlas", "avusturya",           "Avusturya-Macaristan",   "#a8864a", "1914-01-01"),
    ("DEU",     "ne",    "DEU",                 "Almanya",                "#5d6d7e", None),
    ("qin",     "atlas", "qing-hanedani",       "Qing Hanedanı",          "#c9a227", None),
    ("FRA",     "ne",    "FRA",                 "Fransa",                 "#2e5aa8", None),
    ("isp",     "atlas", "ispanya",             "İspanya",                "#d4a017", None),
    ("IRN",     "ne",    "IRN",                 "İran",                   "#1f8a70", None),
    ("mem",     "atlas", "memluk",              "Memlükler",              "#b5651d", None),
    ("EGY",     "ne",    "EGY",                 "Mısır",                  "#c2a14d", None),
    ("alt",     "atlas", "altinorda",           "Altın Orda",             "#c9a227", None),
    ("GBR",     "ne",    "GBR",                 "Birleşik Krallık",       "#7e3d8f", None),
    ("ilh",     "atlas", "ilhanli",             "İlhanlılar",             "#3e7cb1", None),
    ("ITA",     "ne",    "ITA",                 "İtalya",                 "#2e8b57", None),
    ("alm",     "atlas", "almanya",             "Alman İmparatorluğu",    "#5d6d7e", "1914-01-01"),
    ("leh",     "atlas", "lehistan",            "Lehistan-Litvanya",      "#b03a48", None),
    ("min",     "atlas", "ming-hanedani",       "Ming Hanedanı",          "#c8553d", None),
]
FINAL = ("TUR", "ne", "TUR", "Türkiye", "#c0392b", None)  # perde kalkarken, EN SONA

# Gövdesi dünyaya yayılmış (sömürgeli) künyeler: tek silüet anlamsız, dünya zemini
# üstünde çizilir. AÇIKÇA sayılır — sınır kutusu eni ölçüt OLAMAZ: Rusya bitişik
# olduğu hâlde 160° enindedir (ilk koşuda "DÜNYA" diye yanlış sınıflandı).
DUNYA = {"ing", "isp", "alm"}


def halkalar(g):
    return [g] if isinstance(g, Polygon) else list(g.geoms)


def yol_uret(g, anakara_esik=0.02):
    """ARAYUZ-0077 ulke_yolu ile aynı yöntem: 100x100 kutuya, küçük adacıklar atılır."""
    ps = halkalar(g)
    en = max(p.area for p in ps)
    ps = [p for p in ps if p.area >= en * anakara_esik]
    g = unary_union(ps)
    x0, y0, x1, y1 = g.bounds
    k = math.cos(math.radians((y0 + y1) / 2))
    w, h = (x1 - x0) * k, (y1 - y0)
    s = 96.0 / max(w, h)
    tol = max(w, h) * 0.008
    g = g.simplify(tol / max(k, 0.2), preserve_topology=True)
    # Yatayda ortalı, dikeyde ALTA yaslı: ad (y=112) şeklin hemen altına düşsün —
    # ortalıyken geniş silüetlerde (Rusya) ad şekilden 30 birim kopuk kalıyordu.
    ox, oy = (100 - w * s) / 2, 99 - h * s
    d = []
    for p in halkalar(g):
        d.append("M" + "L".join("%.1f %.1f" % (ox + (x - x0) * k * s, oy + (y1 - y) * s)
                                for x, y in p.exterior.coords) + "Z")
    return "".join(d)


def dunya_yolu(g):
    """Eşdikdörtgen 360x180 (küre şeridiyle aynı eksen) — dünya zemini üstüne biner."""
    g = g.simplify(0.4, preserve_topology=True)
    d = []
    for p in halkalar(g):
        if p.area < 0.3:
            continue
        d.append("M" + "L".join("%.0f %.0f" % (x + 180, 90 - y) for x, y in p.exterior.coords) + "Z")
    return "".join(d)


def devlet_harita_oku(gerekli_idler):
    """177 MB'lık dosyayı TEK SEFERDE json.loads etmez (RAM): önce küçük iki dizi,
    sonra DEVLET_PARCALAR öğe öğe taranır, yalnız gereken halkalar tutulur."""
    t0 = time.time()
    s = open(KOK + "data/devletler_harita.js", encoding="utf-8").read()

    def dizi(ad):
        i = s.index("window." + ad + " =") + len("window." + ad + " =")
        j = s.index(";\n", i)
        return json.loads(s[i:j])
    DH = {d["id"]: d for d in dizi("DEVLET_HARITA")}
    HAL = dizi("DEVLET_PARCA_HALKA")
    eksik = [k for k in gerekli_idler if k not in DH]
    if eksik:
        raise SystemExit("DEVLET_HARITA'da gövdesi YOK: %s" % eksik)
    gerek = set()
    for k in gerekli_idler:
        for dn in DH[k]["dnm"]:
            for gi in dn["g"]:
                gerek.update(HAL[gi])
    dec = json.JSONDecoder()
    i = s.index("window.DEVLET_PARCALAR =") + len("window.DEVLET_PARCALAR =")
    i = s.index("[", i) + 1
    PAR, n = {}, 0
    L = len(s)
    while i < L:
        c = s[i]
        if c in " ,\n\r\t":
            i += 1; continue
        if c == "]":
            break
        v, i = dec.raw_decode(s, i)
        if n in gerek:
            PAR[n] = v
        n += 1
    print("devletler_harita: %d halka tarandı, %d tutuldu, %.0f sn" % (n, len(PAR), time.time() - t0))
    return DH, HAL, PAR


def yaklasik_alan(r):
    """cos(enlem) ölçekli shoelace — yalnız dönemleri SIRALAMAK için (birleşim yapılmaz)."""
    a = 0.0
    for (x1, y1), (x2, y2) in zip(r, r[1:]):
        k = math.cos(math.radians((y1 + y2) / 2))
        a += (x1 * k) * y2 - (x2 * k) * y1
    return abs(a) / 2


def atlas_govde(DH, HAL, PAR, kid, secim):
    dnm = DH[kid]["dnm"]
    if secim:
        aday = [d for d in dnm if d["f"] <= secim < d["t"]]
        if not aday:
            raise SystemExit("%s: %s gününü kapsayan dönem YOK" % (kid, secim))
        dn = aday[0]
    else:
        dn = max(dnm, key=lambda d: sum(yaklasik_alan(PAR[ri]) for gi in d["g"] for ri in HAL[gi] if len(PAR[ri]) >= 4))
    polys = []
    for gi in dn["g"]:
        for ri in HAL[gi]:
            r = PAR[ri]
            if len(r) >= 4:
                p = Polygon(r).buffer(0)
                if not p.is_empty:
                    polys.append(p)
    return unary_union(polys), dn


def js_dizgi(x):
    return json.dumps(x, ensure_ascii=False)


def main():
    C = json.load(open(KOK + "veri-kaynak/ne_10m_admin_0_countries.geojson", encoding="utf-8"))
    NE = {f["properties"]["ADM0_A3"]: f for f in C["features"]}  # ISO_A3 FRA/NOR'da -99
    atlas_idler = [k[2] for k in SIRA if k[1] == "atlas"]
    DH, HAL, PAR = devlet_harita_oku(atlas_idler)

    def ne_govde(iso):
        g = shape(NE[iso]["geometry"])
        if iso == "RUS":  # antimeridyen ötesi Çukotka silüeti ikiye böler
            g = g.intersection(box(19, 40, 180, 82))
        if iso == "FRA":  # denizaşırı topraklar çerçeveyi okyanusa yayar
            g = g.intersection(box(-6, 41, 10, 52))
        if iso == "USA":  # Alaska + Hawaii: anakara 48 eyalet
            g = g.intersection(box(-126, 24, -66, 50))
        return g

    ogeler = []
    for anahtar, tur, kid, ad, renk, secim in SIRA + [FINAL]:
        kaynak = ""
        if tur == "ne":
            g = ne_govde(kid)
            kaynak = "Natural Earth 10m admin_0 %s (bugün)" % kid
            yil = ""
        elif tur == "osm":
            Z = json.load(open(KOK + "denetim/ARAYUZ-0077-osmanli-zirve.json", encoding="utf-8"))
            g = unary_union([Polygon(r).buffer(0) for r in Z["halkalar"]])
            yil = "1600"
            kaynak = "atlas OSMANLI zirvesi 1600-10-20 (ARAYUZ-0077-osmanli-zirve.json)"
        else:
            g, dn = atlas_govde(DH, HAL, PAR, kid, secim)
            if kid == "rusya":  # NE Rusya ile aynı: antimeridyen ötesi parça silüeti böler
                g = g.intersection(box(19, 35, 180, 82))
            yil = dn["f"][:4]
            if yil == "1281":  # atlas penceresinin ALT UCU — ölçüm değeri değil (§4)
                yil = ""
            kaynak = "atlas devletler_harita.js %s dönemi %s→%s" % (kid, dn["f"], dn["t"])
            if renk is None:
                renk = DH[kid].get("renk")
        dunya = anahtar in DUNYA
        if tur != "ne":
            # Atlas gövdeleri petek parçalarının birleşimidir: aralarda kıl payı
            # yarıklar ve delikler silüeti "kıyılmış" gösteriyordu (sınav görüntüsü,
            # Osmanlı 1600). Morfolojik kapama ~0,3° — süs, ölçü değil.
            r = 0.2 if dunya else 0.3
            g = g.buffer(r, resolution=4).buffer(-r, resolution=4)
        yol = dunya_yolu(g) if dunya else yol_uret(g, 0.005 if tur != "ne" else 0.02)
        o = {"k": anahtar, "ad": ad, "yil": yil, "renk": renk, "yol": yol, "kaynak": kaynak}
        if dunya:
            o["dunya"] = 1
        ogeler.append(o)
        print("%-4s %-26s %-5s %6d B %s" % (anahtar, ad, yil, len(yol), "DÜNYA" if dunya else ""))

    L = json.load(open(KOK + "veri-kaynak/ne_10m_land.geojson", encoding="utf-8"))
    kara = unary_union([shape(f["geometry"]) for f in L["features"]]).simplify(0.9, preserve_topology=True)
    d = []
    for p in halkalar(kara):
        if p.area < 4:
            continue
        d.append("M" + "L".join("%.0f %.0f" % (x + 180, 90 - y) for x, y in p.exterior.coords) + "Z")
    kara_yol = "".join(d)
    print("kara yolu %d B" % len(kara_yol))

    blok = ("/* >>> VERI (uretildi: denetim/ARAC-ACILIS-ANIM-0929-URET.py) — ELLE DUZENLEME */\n"
            "window.ACILIS_SILUET = {\n"
            "  kara: " + js_dizgi(kara_yol) + ",\n"
            "  final: " + js_dizgi(ogeler[-1]) + ",\n"
            "  ogeler: [\n" + ",\n".join("    " + js_dizgi(o) for o in ogeler[:-1]) + "\n  ]\n};\n"
            "/* <<< VERI */")
    js = open(CIKTI, encoding="utf-8").read()
    desen = re.compile(r"/\* >>> VERI .*?/\* <<< VERI \*/", re.S)
    if not desen.search(js):
        raise SystemExit("data/acilis_siluet.js'te VERI işaretleri yok")
    js = desen.sub(lambda m: blok, js)
    open(CIKTI, "w", encoding="utf-8", newline="\n").write(js)
    print("%s yazıldı · %d öğe + final · dosya %d B" % (CIKTI, len(ogeler) - 1, len(js.encode("utf-8"))))


main()
