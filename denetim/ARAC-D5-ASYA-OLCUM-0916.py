# -*- coding: utf-8 -*-
"""D5-ASYA — üreticiden ÖNCE ölçüm: çift varlığı, Mekong nehri, künye id'leri, Sahalin 50°K kesişimi."""
import sys, io, os, json, re
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(KOK)
from shapely.geometry import shape, LineString
from shapely.ops import unary_union

GJ = json.load(open("veri-kaynak/d_bugunku_sinirlar.geojson", encoding="utf-8"))
CIFT = {}
for ft in GJ["features"]:
    p = ft["properties"]
    CIFT.setdefault(p["cift"], []).append(round(p["uzunluk_km"], 1))
ISTENEN = ["CHN-RUS", "CHN-KAZ", "CHN-KGZ", "CHN-TJK", "MNG-RUS", "CHN-MNG", "CHN-PRK", "PRK-RUS", "CHN-HKG",
           "CHN-MAC", "CHN-IND", "CHN-NPL", "CHN-BTN", "CHN-PAK", "CHN-MMR", "CHN-LAO", "CHN-VNM", "LAO-MMR",
           "LAO-THA", "KHM-THA", "MMR-THA", "MYS-THA", "IDN-MYS", "BRN-MYS", "IDN-TLS", "IND-NPL", "BTN-IND",
           "BGD-IND", "IND-MMR", "AFG-TKM", "AFG-UZB", "AFG-TJK", "AFG-PAK", "AFG-CHN", "IND-PAK", "KAS-CHN",
           "CHN-KAS", "IND-KAS", "KAS-PAK"]
for c in ISTENEN:
    print(f"{c:9}", CIFT.get(c, "YOK"))
print("KAS ile ilgili çiftler:", sorted(k for k in CIFT if "KAS" in k or "KAB" in k))

R = json.load(open("veri-kaynak/ne_10m_rivers.geojson", encoding="utf-8"))
print("nehir alanları:", list(R["features"][0]["properties"].keys())[:12])
mek = [f for f in R["features"] if re.search(r"mekong", json.dumps(f["properties"]), re.I)]
print("Mekong parça:", len(mek), [f["properties"].get("name") for f in mek][:5])

L = json.load(open("veri-kaynak/ne_10m_land.geojson", encoding="utf-8"))
hat = LineString([(141.0, 50.0), (145.0, 50.0)])
kes = []
for f in L["features"]:
    g = shape(f["geometry"])
    if g.intersects(hat):
        i = g.intersection(hat)
        kes += list(getattr(i, "geoms", [i]))
print("50°K × kara (141–145°D):", [[round(c[0], 4) for c in s.coords] for s in kes])

txt = open("data/devletler.js", encoding="utf-8").read()
for k in ["sovyet-rusya", "cin-cumhuriyeti", "mogolistan", "tannu-tuva", "meiji-japonya", "ingiliz-hindistani",
          "tibet-ganden-phodrang", "nepal", "cammu-kesmir", "san-devletleri", "fransiz-cinhindi", "siyam-chakri",
          "ingiliz-malaya", "hollanda-dogu-hint", "sarawak-brooke", "portekiz", "ingiltere", "afganistan",
          "buhara-halk-cumhuriyeti", "brunei-sultanligi"]:
    m = re.search(r'id:\s*"%s"[^\n]*' % re.escape(k), txt)
    print(f"{k:24}", "VAR" if m else "YOK", (m.group(0)[:110] if m else ""))
