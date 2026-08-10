# -*- coding: utf-8 -*-
"""⑦b ADIM 1b v2 — TOPOGRAFYA KAPSAMI (ORAN) · UC KUSUR DUZELTILDI

v1'in uc kusuru:
  1) SIRT suzgeci `featurecla` (kucuk harf) ariyordu; motor `FEATURECLA`
     (BUYUK) kullaniyor -> 0 sirt buldum, olcum sirtsiz kaldi.
  2) "cetvel" olcutu TAM KOLLINEERLIK ariyordu; Chaikin yumusatmasi onu yok
     eder -> 0,0 cikti, olcut kordu.
  3) Tek bir kuresel oran, Emre'nin cekirdek bolgesini gizliyordu.

v2:
  · SIRT suzgeci motorun kendi olcutuyle (FEATURECLA + ENGEL_SINIFI + buffer -0.12)
  · CETVEL olcutu = SINUOZITE: kayan pencerede kiris/yol orani > 0,98 ise DUZ
  · BOLGESEL: Emre'nin cekirdegi (Anadolu+Balkanlar) ayri raporlanir

Salt okuma.
"""
import json, os, sys, math, pickle, random, unicodedata

KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
SCR = r"C:\Users\emrem\AppData\Local\Temp\claude\C--Users-emrem-OneDrive-Desktop-TAR-H-CO-RAFYA-S-TES-\a5479cb4-16ee-4def-832f-307c172e7614\scratchpad"
VK = os.path.join(KOK, "veri-kaynak")

from shapely.geometry import shape, box, Point, LineString
from shapely.ops import unary_union
from shapely.strtree import STRtree

BOLGE = unary_union([box(-12, -11, 146, 82), box(-25, 60, -12, 82)])
CEKIRDEK = box(19.0, 34.0, 46.0, 47.0)      # Anadolu + Balkanlar + Kafkas eteği
NEHIR_ONEM_ESIGI = 5.0
ENGEL_SINIFI = ("Range/mtn", "Plateau", "Gorge", "Wetlands")
YAKIN_DER = 0.02
KIYI_DER = 0.01
DUZ_PENCERE = 0.45          # ~50 km yol boyu
DUZ_ORAN = 0.98             # kiris/yol > 0,98 => DUZ (cetvel)
random.seed(7)


def sade(s):
    if not s:
        return ""
    s = unicodedata.normalize("NFKD", str(s))
    s = "".join(c for c in s if not unicodedata.combining(c))
    return "".join(c for c in s.lower() if c.isalnum())


BUYUK = """Danube Duna Dunav Sava Drava Tisza Tisa Morava Dniester Dnipro Dnieper Prut
SouthernBug Don Kuban Firat AlFurat Euphrates Dijlah Tigris Murat Kura Aras Nile Maritsa
Meric Vardar Struma Sakarya Kizilirmak Yesilirmak Seyhan Ceyhan Jordan Orontes
BuyukMenderes Gediz KucukMenderes Menderes Maeander Meander Bakircay Caicus Susurluk
Simav Kocacay Porsuk Aksu Kopru Koprucay Dalaman Esen Xanthos Goksu Calycadnus Coruh
Kelkit Devrez Filyos Yenice GreatZab LittleZab Habur Khabur Balikh Asi Berdan Tarsus
Manavgat Bartin Gonen Granicus Dicle""".split()
BS = {sade(b) for b in BUYUK}

print("nehirler...", flush=True)
hatlar = []
_n = json.load(open(os.path.join(VK, "ne_10m_rivers.geojson"), encoding="utf-8"))
nn = 0
for f in _n["features"]:
    pr = f.get("properties") or {}
    g = shape(f["geometry"])
    if not g.envelope.intersects(BOLGE):
        continue
    ad = None
    for k in ("name", "name_en", "name_alt", "NAME"):
        v = pr.get(k)
        if v and sade(v) in BS:
            ad = v; break
    try:
        sr = float(pr.get("scalerank"))
    except (TypeError, ValueError):
        sr = 99.0
    if ad is None and sr > NEHIR_ONEM_ESIGI:
        continue
    gg = g.intersection(BOLGE)
    if gg.is_empty:
        continue
    nn += 1
    for h in (gg.geoms if hasattr(gg, "geoms") else [gg]):
        if h.geom_type in ("LineString", "LinearRing") and h.length > 0:
            hatlar.append(h)
print("  nehir parcasi %d -> hat %d" % (nn, len(hatlar)), flush=True)

print("sirtlar (FEATURECLA, motorun olcutu)...", flush=True)
ns = 0
_d = json.load(open(os.path.join(VK, "ne_10m_geography_regions_polys.geojson"), encoding="utf-8"))
for f in _d["features"]:
    p = f.get("properties") or {}
    fc = p.get("FEATURECLA") or p.get("featurecla") or ""
    if not any(k in fc for k in ENGEL_SINIFI):
        continue
    g = shape(f["geometry"]).buffer(0)
    if not g.envelope.intersects(BOLGE):
        continue
    g = g.intersection(BOLGE)
    if g.is_empty or g.area < 0.05:
        continue
    cek = g.buffer(-0.12)
    b = cek.boundary if not cek.is_empty else g.boundary
    ns += 1
    for h in (b.geoms if hasattr(b, "geoms") else [b]):
        if h.geom_type in ("LineString", "LinearRing") and h.length > 0:
            hatlar.append(h)
print("  dag sirasi %d · TOPLAM hat %d" % (ns, len(hatlar)), flush=True)

hagac = STRtree(hatlar)
KARA = pickle.load(open(os.path.join(SCR, "kara_maskesi.pkl"), "rb"))
kiyi = KARA.boundary
kgs = list(kiyi.geoms) if hasattr(kiyi, "geoms") else [kiyi]
kagac = STRtree(kgs)

ORNEK = 0.30
say = {"g": {"ic": 0.0, "yasli": 0.0, "duz": 0.0, "kiyi": 0.0},
       "c": {"ic": 0.0, "yasli": 0.0, "duz": 0.0, "kiyi": 0.0}}
n_parca = 0
print("petek sinirlari (ornek %%%.0f)..." % (ORNEK * 100), flush=True)

with open(os.path.join(SCR, "petek.ndjson"), encoding="utf-8") as f:
    for satir in f:
        if random.random() > ORNEK:
            continue
        o = json.loads(satir)
        for ring in o["parts"]:
            cs = ring[0]
            n_parca += 1
            m = len(cs)
            # --- segment segment: kiyi / yasli ---
            for i in range(m - 1):
                a, b = cs[i], cs[i + 1]
                uz = math.hypot(b[0] - a[0], b[1] - a[1])
                if uz <= 0:
                    continue
                mx, my = (a[0] + b[0]) / 2, (a[1] + b[1]) / 2
                mid = Point(mx, my)
                cek = CEKIRDEK.covers(mid)
                kd = 9e9
                for j in [int(x) for x in kagac.query(mid.buffer(KIYI_DER))]:
                    d = kgs[j].distance(mid)
                    if d < kd:
                        kd = d
                        if kd <= 1e-9:
                            break
                if kd <= KIYI_DER:
                    say["g"]["kiyi"] += uz
                    if cek:
                        say["c"]["kiyi"] += uz
                    continue
                say["g"]["ic"] += uz
                if cek:
                    say["c"]["ic"] += uz
                hd = 9e9
                for j in [int(x) for x in hagac.query(mid.buffer(YAKIN_DER))]:
                    d = hatlar[j].distance(mid)
                    if d < hd:
                        hd = d
                        if hd <= 1e-9:
                            break
                if hd <= YAKIN_DER:
                    say["g"]["yasli"] += uz
                    if cek:
                        say["c"]["yasli"] += uz
            # --- SINUOZITE: kayan pencere ---
            i = 0
            while i < m - 1:
                yol = 0.0
                j = i
                while j < m - 1 and yol < DUZ_PENCERE:
                    yol += math.hypot(cs[j + 1][0] - cs[j][0], cs[j + 1][1] - cs[j][1])
                    j += 1
                if yol < DUZ_PENCERE * 0.9:
                    break
                kiris = math.hypot(cs[j][0] - cs[i][0], cs[j][1] - cs[i][1])
                if yol > 0 and kiris / yol > DUZ_ORAN:
                    mid = Point((cs[i][0] + cs[j][0]) / 2, (cs[i][1] + cs[j][1]) / 2)
                    kd = 9e9
                    for k in [int(x) for x in kagac.query(mid.buffer(KIYI_DER))]:
                        d = kgs[k].distance(mid)
                        if d < kd:
                            kd = d
                    if kd > KIYI_DER:                 # kiyi duzlugu sayilmaz
                        say["g"]["duz"] += yol
                        if CEKIRDEK.covers(mid):
                            say["c"]["duz"] += yol
                i = j

print()
print("=" * 86)
print("⑦b ADIM 1b — TOPOGRAFYA KAPSAMI · ORAN (ham sayi degil)")
print("=" * 86)
print("  ornek: parcalarin %%%.0f'i · %d parca   (B13: ORNEKLEM)" % (ORNEK * 100, n_parca))
print("  girdi: %d nehir hatti + %d dag sirasi = %d hat  (motorun kendi suzgeci)"
      % (nn, ns, len(hatlar)))
print()
for et, k in (("KURESEL (butun pencere)", "g"), ("CEKIRDEK (Anadolu+Balkanlar)", "c")):
    s = say[k]
    ic = max(s["ic"], 1e-9)
    print("  %s" % et)
    print("     kiyi kenari        %9.1f derece  (zaten dogal)" % s["kiyi"])
    print("     IC kenar           %9.1f derece" % s["ic"])
    print("     ├─ dogal hatta YASLI  %6.1f  = %%%.1f" % (s["yasli"], 100 * s["yasli"] / ic))
    print("     └─ CETVEL (duz kosu)  %6.1f  = %%%.1f" % (s["duz"], 100 * s["duz"] / ic))
    print()
