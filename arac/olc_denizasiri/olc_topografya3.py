# -*- coding: utf-8 -*-
"""⑦b ADIM 1b v3 — ASIL SORU: DUZ KALAN KENARIN YANINDA KULLANILMAYAN
                             BIR DOGAL HAT VAR MI?

Motor 0,30° icindeki nehre yaslar. Demek ki DUZ kalan kenarin yaninda
motorun KULLANDIGI bir hat YOKTUR. Soru: SUZGECIN ELEDIGI bir hat var mi?

  VARSA   suzgec cok dar -> esik dusurulunce kazanc olur
  YOKSA   veri gercekten yok -> esik dusurmek CARE DEGIL (ve DERE'yi katar)

Ayrica sartnamenin ikinci sorusu: "esik 5,0 -> 4 -> 3 denendiginde kac DERE
giriyor?"  -> her esikte kac hat girdigi sayilir.

Salt okuma.
"""
import json, os, sys, math, pickle, random, unicodedata, collections

KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
SCR = r"C:\Users\emrem\AppData\Local\Temp\claude\C--Users-emrem-OneDrive-Desktop-TAR-H-CO-RAFYA-S-TES-\a5479cb4-16ee-4def-832f-307c172e7614\scratchpad"
VK = os.path.join(KOK, "veri-kaynak")

from shapely.geometry import shape, box, Point, LineString
from shapely.ops import unary_union
from shapely.strtree import STRtree

BOLGE = unary_union([box(-12, -11, 146, 82), box(-25, 60, -12, 82)])
CEKIRDEK = box(19.0, 34.0, 46.0, 47.0)
ARAMA = 0.30                 # motorun nehir arama yaricapi (uret_petek.py:680)
KIYI_DER = 0.01
DUZ_PENCERE = 0.45
DUZ_ORAN = 0.98
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

_n = json.load(open(os.path.join(VK, "ne_10m_rivers.geojson"), encoding="utf-8"))
kullanilan, elenen = [], []
esik_sayaci = collections.Counter()
cek_kullanilan = cek_elenen = 0
for f in _n["features"]:
    pr = f.get("properties") or {}
    g = shape(f["geometry"])
    if not g.envelope.intersects(BOLGE):
        continue
    gg = g.intersection(BOLGE)
    if gg.is_empty:
        continue
    adli = any(pr.get(k) and sade(pr.get(k)) in BS
               for k in ("name", "name_en", "name_alt", "NAME"))
    try:
        sr = float(pr.get("scalerank"))
    except (TypeError, ValueError):
        sr = 99.0
    for e in (5.0, 6.0, 7.0, 8.0, 99.0):
        if adli or sr <= e:
            esik_sayaci[e] += 1
    hedef = kullanilan if (adli or sr <= 5.0) else elenen
    for h in (gg.geoms if hasattr(gg, "geoms") else [gg]):
        if h.geom_type in ("LineString", "LinearRing") and h.length > 0:
            hedef.append(h)
            if CEKIRDEK.intersects(h):
                if hedef is kullanilan:
                    cek_kullanilan += 1
                else:
                    cek_elenen += 1

# sirtlar (kullanilan tarafa)
ENGEL = ("Range/mtn", "Plateau", "Gorge", "Wetlands")
_d = json.load(open(os.path.join(VK, "ne_10m_geography_regions_polys.geojson"), encoding="utf-8"))
for f in _d["features"]:
    p = f.get("properties") or {}
    fc = p.get("FEATURECLA") or ""
    if not any(k in fc for k in ENGEL):
        continue
    g = shape(f["geometry"]).buffer(0)
    if not g.envelope.intersects(BOLGE):
        continue
    g = g.intersection(BOLGE)
    if g.is_empty or g.area < 0.05:
        continue
    cek = g.buffer(-0.12)
    b = cek.boundary if not cek.is_empty else g.boundary
    for h in (b.geoms if hasattr(b, "geoms") else [b]):
        if h.geom_type in ("LineString", "LinearRing") and h.length > 0:
            kullanilan.append(h)

print("=" * 88)
print("SORU A — ESIK KAC HAT ADMIT EDER (sartname: 'kac DERE giriyor')")
print("=" * 88)
for e in (5.0, 6.0, 7.0, 8.0, 99.0):
    et = "5,0 (BUGUNKU)" if e == 5.0 else ("hepsi" if e == 99.0 else "%.0f" % e)
    print("  esik %-14s -> %5d nehir parcasi" % (et, esik_sayaci[e]))
print("  cekirdek bolgede: KULLANILAN %d hat · ELENEN %d hat" % (cek_kullanilan, cek_elenen))
print()

kag = STRtree(kullanilan)
eag = STRtree(elenen) if elenen else None
KARA = pickle.load(open(os.path.join(SCR, "kara_maskesi.pkl"), "rb"))
kiyi = KARA.boundary
kgs = list(kiyi.geoms) if hasattr(kiyi, "geoms") else [kiyi]
kyag = STRtree(kgs)

ORNEK = 0.30
duz_top = duz_elenen_var = duz_hicbir_hat = 0.0
duz_top_c = duz_elenen_var_c = duz_hicbir_hat_c = 0.0
with open(os.path.join(SCR, "petek.ndjson"), encoding="utf-8") as f:
    for satir in f:
        if random.random() > ORNEK:
            continue
        o = json.loads(satir)
        for ring in o["parts"]:
            cs = ring[0]; m = len(cs)
            i = 0
            while i < m - 1:
                yol = 0.0; j = i
                while j < m - 1 and yol < DUZ_PENCERE:
                    yol += math.hypot(cs[j+1][0]-cs[j][0], cs[j+1][1]-cs[j][1]); j += 1
                if yol < DUZ_PENCERE * 0.9:
                    break
                kiris = math.hypot(cs[j][0]-cs[i][0], cs[j][1]-cs[i][1])
                if yol > 0 and kiris/yol > DUZ_ORAN:
                    seg = LineString(cs[i:j+1])
                    mid = seg.interpolate(0.5, normalized=True)
                    kd = min([kgs[k].distance(mid) for k in [int(x) for x in kyag.query(mid.buffer(KIYI_DER))]] or [9e9])
                    if kd > KIYI_DER:
                        cek = CEKIRDEK.covers(mid)
                        duz_top += yol
                        if cek: duz_top_c += yol
                        yakin_k = any(kullanilan[k].distance(seg) <= ARAMA
                                      for k in [int(x) for x in kag.query(seg.buffer(ARAMA))])
                        yakin_e = bool(eag) and any(elenen[k].distance(seg) <= ARAMA
                                      for k in [int(x) for x in eag.query(seg.buffer(ARAMA))])
                        if not yakin_k and yakin_e:
                            duz_elenen_var += yol
                            if cek: duz_elenen_var_c += yol
                        elif not yakin_k and not yakin_e:
                            duz_hicbir_hat += yol
                            if cek: duz_hicbir_hat_c += yol
                i = j

print("=" * 88)
print("SORU B — DUZ KALAN KENARIN YANINDA NE VAR (0,30° = motorun arama yaricapi)")
print("=" * 88)
for et, T, E, H in (("KURESEL", duz_top, duz_elenen_var, duz_hicbir_hat),
                    ("CEKIRDEK", duz_top_c, duz_elenen_var_c, duz_hicbir_hat_c)):
    t = max(T, 1e-9)
    print("  %s — duz kenar toplami %.1f derece" % (et, T))
    print("     ├─ yaninda SUZGECIN ELEDIGI hat VAR  %7.1f = %%%.1f   <- esik dusurmek KAZANDIRIR"
          % (E, 100*E/t))
    print("     ├─ yaninda HICBIR hat yok            %7.1f = %%%.1f   <- veri YOK, esik CARE DEGIL"
          % (H, 100*H/t))
    print("     └─ yaninda KULLANILAN hat var (yaslanmamis: koruma payi vb.) %7.1f = %%%.1f"
          % (T-E-H, 100*(T-E-H)/t))
    print()
