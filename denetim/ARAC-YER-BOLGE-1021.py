# -*- coding: utf-8 -*-
"""Bölge adları için TEMSİLCİ NOKTA: Natural Earth (veri-kaynak/) çokgeninin en büyük halkasının ağırlık merkezi.
Kullanım: py -I denetim/ARAC-YER-BOLGE-1021.py   -> denetim/yer-arastirma/parti_51_sonuc.json
Kural (ARKEOLOJI-KATMANI-SARTNAME §5): yer bilinmiyor, bölge kaynakta -> tur:'bolge', konum_kesinlik:'bolge'.
UYARI: modern ülke/bölge poligonu antik/ortaçağ sınırı DEĞİLDİR; nokta yalnız temsilcidir (beyan edilir)."""
import sys, io, os, json
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
VK = os.path.join(KOK, "veri-kaynak")

# envanterdeki ad -> (katman, Natural Earth adı). Yalnız çokgeni gerçekten o bölgeyi gösterenler.
HARITA = {
    "Mısır": ("ulke", "Egypt"), "Suriye": ("ulke", "Syria"), "Yemen": ("ulke", "Yemen"), "Irak": ("ulke", "Iraq"),
    "Azerbaycan": ("ulke", "Azerbaijan"), "Ermenistan": ("ulke", "Armenia"), "Moğolistan": ("ulke", "Mongolia"),
    "Tayland": ("ulke", "Thailand"), "Japonya": ("ulke", "Japan"), "Bulgaristan": ("ulke", "Bulgaria"),
    "Hırvatistan": ("ulke", "Croatia"), "Macaristan": ("ulke", "Hungary"), "Norveç": ("ulke", "Norway"),
    "Danimarka": ("ulke", "Denmark"), "Ürdün": ("ulke", "Jordan"), "Libya": ("ulke", "Libya"), "Kamboçya": ("ulke", "Cambodia"),
    "İran": ("ulke", "Iran"), "İtalya": ("ulke", "Italy"), "İspanya": ("ulke", "Spain"), "Almanya": ("ulke", "Germany"),
    "Hollanda": ("ulke", "Netherlands"), "Gürcistan": ("ulke", "Georgia"), "Litvanya": ("ulke", "Lithuania"),
    "Çin": ("ulke", "China"), "Vietnam": ("ulke", "Vietnam"), "Lübnan": ("ulke", "Lebanon"), "Hindistan": ("bolge", "INDIA"),
    "Pakistan": ("ulke", "Pakistan"),
    "Tibet": ("bolge", "PLATEAU OF TIBET"), "Britanya": ("bolge", "GREAT BRITAIN"), "Balkanlar": ("bolge", "BALKAN PEN."),
    "Mezopotamya": ("bolge", "Mesopotamia"), "Sicilya": ("bolge", "Sicilia"), "Dalmaçya": ("bolge", "Dalmatia"),
    "Bretanya": ("bolge", "Bretagne"), "Normandiya": ("bolge", "Normandie"), "Kafkasya": ("bolge", "CAUCASUS MTS."),
    "Tihâme": ("bolge", "Tihāmah"), "Fergana": ("bolge", "Fergana Valley"), "Kore yarımadası": ("bolge", "KOREA"),
    "Sumatra": ("bolge", "SUMATRA"), "Karelya": ("bolge", "Karelia"), "Anadolu": ("bolge", "ANATOLIA"),
    "Nil vadisi": None, "Hadramut": ("bolge", "Hadhramaut"), "Pencap": ("bolge", "PUNJAB"), "Kalabriya": ("bolge", "Calabria"),
    "Piyemonte": ("bolge", "PIEDMONT"), "Jutland": ("bolge", "JUTLAND"), "Hexi": ("bolge", "Hexi Corridor"),
    "Yukarı Mısır": None, "Karpat havzası": ("bolge", "CARPATHIAN MOUNTAINS"), "Cezire": ("bolge", "Mesopotamia"),
    "Hicaz": ("bolge", "HEJAZ MTS."), "Yahudiye": None, "Kıbrıs": ("bolge", "Cyprus"),
}
HARITA = {k: v for k, v in HARITA.items() if v}


def alan_merkez(halka):
    """shoelace ağırlık merkezi + alan (derece düzleminde; temsilci için yeterli)."""
    a = cx = cy = 0.0
    for (x0, y0), (x1, y1) in zip(halka, halka[1:]):
        c = x0 * y1 - x1 * y0
        a += c
        cx += (x0 + x1) * c
        cy += (y0 + y1) * c
    if abs(a) < 1e-12:
        return None, 0
    return (cx / (3 * a), cy / (3 * a)), abs(a) / 2


def en_buyuk_merkez(geom):
    polys = [geom["coordinates"]] if geom["type"] == "Polygon" else geom["coordinates"]
    en, ea = None, -1
    for p in polys:
        m, a = alan_merkez(p[0])
        if m and a > ea:
            en, ea = m, a
    return en


def ice_dusuyor(pt, geom):
    polys = [geom["coordinates"]] if geom["type"] == "Polygon" else geom["coordinates"]
    x, y = pt
    for p in polys:
        r = p[0]
        ic = False
        for (x0, y0), (x1, y1) in zip(r, r[1:]):
            if (y0 > y) != (y1 > y) and x < (x1 - x0) * (y - y0) / (y1 - y0) + x0:
                ic = not ic
        if ic:
            return True
    return False


ulke = {f["properties"]["NAME_EN"]: f for f in json.load(open(os.path.join(VK, "ne_10m_admin_0_countries.geojson"), encoding="utf-8"))["features"]}
bolge = {}
for f in json.load(open(os.path.join(VK, "ne_10m_geography_regions_polys.geojson"), encoding="utf-8"))["features"]:
    bolge.setdefault(f["properties"]["NAME"], f)
env = json.load(open(os.path.join(KOK, "denetim", "ONCE1281-YER-ENVANTER.json"), encoding="utf-8"))
sonuc = []
for r in env["bolge"] + [x for x in env["yok"]]:
    h = HARITA.get(r["ad"])
    if not h:
        continue
    kat, ad = h
    f = (ulke if kat == "ulke" else bolge).get(ad)
    if not f:
        continue
    m = en_buyuk_merkez(f["geometry"])
    if not m:
        continue
    lon, lat = m
    ic = ice_dusuyor((lon, lat), f["geometry"])
    sonuc.append({"ad": r["ad"], "durum": "bolge_temsilci", "lat": round(lat, 3), "lon": round(lon, 3), "tur": "bolge",
                  "konum_kesinligi": "bolge", "ulke_modern": ad,
                  "tanik": [{"kaynak": "Natural Earth 10m (veri-kaynak/%s)" % ("ne_10m_admin_0_countries.geojson" if kat == "ulke" else "ne_10m_geography_regions_polys.geojson"),
                             "url_veya_atif": ad, "lat": round(lat, 3), "lon": round(lon, 3)}],
                  "not": "BÖLGE TEMSİLCİSİ: yer bilinmiyor, %s bölgesi kaynakta. Nokta = Natural Earth '%s' çokgeninin en büyük halkasının ağırlık merkezi (MODERN çokgen; tarihî sınır değildir)%s." % (r["ad"], ad, "" if ic else " — merkez çokgenin dışına düşüyor, gözden geçir")})
json.dump({"parti": 51, "yontem": "Natural Earth bolge temsilci", "sonuclar": sonuc}, open(os.path.join(KOK, "denetim", "yer-arastirma", "parti_51_sonuc.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print(len(sonuc), "bölge temsilcisi;", sum(1 for s in sonuc if "dışına" in s["not"]), "çokgen dışı")
