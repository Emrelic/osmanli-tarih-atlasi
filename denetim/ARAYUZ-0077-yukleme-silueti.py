# ARAYUZ-0077 · H-0002 — açılış perdesinin silüetlerini üretir.
# Kaynak: veri-kaynak/ne_10m_admin_0_countries.geojson + ne_10m_land.geojson
# (Natural Earth, kamu malı). Çıktı: CSS değişkenleri (data URI SVG) — elle
# kopyalanmaz, bu betik css/style.css'teki işaretli bloğu YENİDEN yazar.
#   py denetim/ARAYUZ-0077-yukleme-silueti.py
# Silüetler SÜS'tür, ölçü değildir: sadeleştirme toleransı ülke boyunun ~%1'i.
import sys, json, math, re, urllib.parse
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
from shapely.geometry import shape, MultiPolygon, Polygon, box
from shapely.ops import unary_union

import os  # MUTLAK-KOK-DENETIM-1006: kök için
KOK = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "")
ULKELER = [  # (ISO_A3, ekranda yazı, renk) — Emre'nin H-0002 listesinin modern kısmı
    ("TUR", "Türkiye", "#c0392b"),
    ("FRA", "Fransa", "#2e5aa8"),
    ("GBR", "İngiltere", "#7e3d8f"),
    ("ITA", "İtalya", "#2e8b57"),
    ("RUS", "Rusya", "#4f7d4f"),
    ("ESP", "İspanya", "#d4a017"),
    ("JPN", "Japonya", "#b03a48"),
    ("CHN", "Çin", "#c8553d"),
    ("IND", "Hindistan", "#e07b24"),
]


def halkalar(g):
    ps = [g] if isinstance(g, Polygon) else list(g.geoms)
    return ps


def ulke_yolu(g, anakara_esik=0.02):
    # küçük adacıkları at (en büyük parçanın %2'sinden küçük)
    ps = halkalar(g)
    en = max(p.area for p in ps)
    ps = [p for p in ps if p.area >= en * anakara_esik]
    g = unary_union(ps)
    x0, y0, x1, y1 = g.bounds
    lat0 = (y0 + y1) / 2
    k = math.cos(math.radians(lat0))
    w, h = (x1 - x0) * k, (y1 - y0)
    s = 96.0 / max(w, h)
    tol = max(w, h) * 0.008
    g = g.simplify(tol / max(k, 0.2), preserve_topology=True)
    ox = (100 - w * s) / 2
    oy = (100 - h * s) / 2
    d = []
    for p in halkalar(g):
        pts = list(p.exterior.coords)
        d.append("M" + "L".join("%.1f %.1f" % (ox + (x - x0) * k * s, oy + (y1 - y) * s) for x, y in pts) + "Z")
    return "".join(d)


def data_uri(svg):
    return "url(\"data:image/svg+xml," + urllib.parse.quote(svg, safe=" =:/,.'-") + "\")"


def main():
    C = json.load(open(KOK + "veri-kaynak/ne_10m_admin_0_countries.geojson", encoding="utf-8"))
    # ISO_A3 NE'de Fransa/Norveç için "-99"dur — ADM0_A3 her ülkede dolu.
    bul = {f["properties"]["ADM0_A3"]: f for f in C["features"]}
    satirlar = []
    for i, (iso, ad, renk) in enumerate(ULKELER):
        g = shape(bul[iso]["geometry"])
        if iso == "RUS":  # antimeridyenin doğusundaki Çukotka parçası silüeti ikiye böler
            g = g.intersection(box(19, 40, 180, 82))
        if iso == "FRA":  # denizaşırı (Guyana, Réunion) çerçeveyi okyanusa yayar
            g = g.intersection(box(-6, 41, 10, 52))
        yol = ulke_yolu(g)
        # Ad SVG'nin İÇİNDE: CSS `content` anahtar karede canlandırılamıyor.
        svg = ("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 116'>"
               "<path d='%s' fill='%s' stroke='white' stroke-width='1.2' stroke-linejoin='round'/>"
               "<text x='50' y='112' text-anchor='middle' font-family='Georgia,serif' font-size='10' "
               "fill='white'>%s</text></svg>") % (yol, renk, ad)
        satirlar.append("  --sil-%d: %s;" % (i, data_uri(svg)))
        print(iso, ad, "yol uzunluğu", len(yol))
    # Osmanlı — atlasın KENDİ zirve dönemi (ao en büyük: 1600-10-20). Mamul
    # ürünün kendini göstermesidir, bir tarih hükmü değil.
    Z = json.load(open(KOK + "denetim/ARAYUZ-0077-osmanli-zirve.json", encoding="utf-8"))
    g = unary_union([Polygon(r).buffer(0) for r in Z["halkalar"]])
    yol = ulke_yolu(g, anakara_esik=0.005)
    svg = ("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 116'>"
           "<path d='%s' fill='#8e0b22' stroke='white' stroke-width='1.2' stroke-linejoin='round'/>"
           "<text x='50' y='112' text-anchor='middle' font-family='Georgia,serif' font-size='10' "
           "fill='white'>Osmanlı (1600)</text></svg>") % yol
    satirlar.append("  --sil-%d: %s;" % (len(ULKELER), data_uri(svg)))
    print("OSM zirve yol uzunluğu", len(yol))
    # Dünya karası — dönen küre için eşdikdörtgen şerit (360 x 180)
    L = json.load(open(KOK + "veri-kaynak/ne_10m_land.geojson", encoding="utf-8"))
    kara = unary_union([shape(f["geometry"]) for f in L["features"]]).simplify(0.9, preserve_topology=True)
    d = []
    for p in halkalar(kara):
        if p.area < 4:
            continue
        pts = list(p.exterior.coords)
        d.append("M" + "L".join("%.0f %.0f" % (x + 180, 90 - y) for x, y in pts) + "Z")
    svg = ("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 180'>"
           "<path d='%s' fill='#8fbf6a'/></svg>") % "".join(d)
    satirlar.append("  --kure-kara: %s;" % data_uri(svg))
    print("kara yolu", len("".join(d)))
    blok = ("/* >>> ARAYUZ-0077 SILUETLER (uretildi: denetim/ARAYUZ-0077-yukleme-silueti.py) — ELLE DUZENLEME */\n"
            ":root {\n" + "\n".join(satirlar) + "\n}\n"
            "/* <<< ARAYUZ-0077 SILUETLER */")
    # style.css CRLF'dir: okurken normalleştir, yazarken CRLF geri ver.
    css = open(KOK + "css/style.css", encoding="utf-8", newline="").read().replace("\r\n", "\n")
    desen = re.compile(r"/\* >>> ARAYUZ-0077 SILUETLER.*?/\* <<< ARAYUZ-0077 SILUETLER \*/", re.S)
    if desen.search(css):
        css = desen.sub(lambda m: blok, css)
    else:
        css = css.rstrip("\n") + "\n\n" + blok + "\n"
    open(KOK + "css/style.css", "w", encoding="utf-8", newline="\r\n").write(css)
    print("css/style.css yazıldı, blok", len(blok), "karakter")


main()
