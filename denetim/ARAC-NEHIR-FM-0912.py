# -*- coding: utf-8 -*-
"""ARAC-NEHIR-FM-0912 — FM 90-13 (River-Crossing Operations) icinden
SAYISAL gecis olcutlerini cikar. Salt okur.

Kaynak: US Army FM 90-13 / FMFM 7-26, River Crossing Operations (1992).
§4 bu sinifi acikca kabul ediyor: "ASKERI SAHRA TALIMNAMELERI".
"""
import io, os, re, glob, sys, json

DIZIN = os.path.join(
    os.path.expanduser("~"), ".claude", "projects",
    "C--Users-emrem-OneDrive-Desktop-TAR-H-CO-RAFYA-S-TES-",
    "5a21cf9b-3f7a-4360-abe8-3cb0339d9f8e", "tool-results")

from pypdf import PdfReader

# en buyuk sayfali olan FM (135 sayfa); Herzog 8 sayfa
hedef = None
for p in sorted(glob.glob(os.path.join(DIZIN, "webfetch-*.pdf"))):
    try:
        r = PdfReader(p)
    except Exception:
        continue
    if len(r.pages) > 50:
        hedef = (p, r)
if hedef is None:
    sys.exit("FM PDF bulunamadi")
p, r = hedef
print("FM:", os.path.basename(p), len(r.pages), "sayfa")

metin = []
for sf in r.pages:
    try:
        metin.append(sf.extract_text() or "")
    except Exception:
        metin.append("")
T = re.sub(r"\s+", " ", "\n".join(metin))

# --- SAYISAL OLCUT ARAYAN DESENLER -----------------------------------------
DESEN = [
    ("AKINTI HIZI", r"[^.]{0,220}(?:current|velocit)[^.]{0,220}?\d[^.]{0,120}(?:mps|MPS|m/s|fps|FPS|feet per second|meters per second)[^.]{0,120}\."),
    ("DERINLIK",    r"[^.]{0,220}(?:ford|depth)[^.]{0,160}?\d+(?:\.\d+)?\s*(?:meters?|metres?|m\b|feet|ft|inches)[^.]{0,160}\."),
    ("BANKA/YAMAC", r"[^.]{0,200}(?:bank|slope|gradient)[^.]{0,120}?\d+(?:\.\d+)?\s*(?:percent|%|degrees)[^.]{0,120}\."),
    ("GECIS HIZI",  r"[^.]{0,200}(?:per hour|vehicles per|rate of|crossing rate)[^.]{0,200}\."),
]
bulgu = {}
for ad, d in DESEN:
    m = []
    for x in re.finditer(d, T):
        c = re.sub(r"\s+", " ", x.group(0)).strip()
        if 40 < len(c) < 420 and c not in m:
            m.append(c)
    bulgu[ad] = m
    print("")
    print("=== %s  (%d) ===" % (ad, len(m)))
    for c in m[:8]:
        print("   • " + c)

# --- FORD gecen her cumle ---------------------------------------------------
cumleler = re.split(r"(?<=[.!?])\s+", T)
ford = [re.sub(r"\s+", " ", c).strip() for c in cumleler
        if re.search(r"\bford", c, re.I)]
print("")
print("=== 'ford' GECEN CUMLELER (%d) ===" % len(ford))
for c in ford:
    if 40 < len(c) < 400:
        print("   • " + c)

hedef_json = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                          "NEHIR-FM-ALINTI-0912.json")
io.open(hedef_json, "w", encoding="utf-8").write(json.dumps(
    {"kaynak": "US Army FM 90-13 / FMFM 7-26, River Crossing Operations (1992)",
     "sayfa": len(r.pages), "karakter": len(T),
     "bulgu": bulgu, "ford_cumleleri": [c for c in ford if 40 < len(c) < 400]},
    ensure_ascii=False, indent=1))
print("")
print("yazildi:", hedef_json)
