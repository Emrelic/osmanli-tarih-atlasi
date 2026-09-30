# YAMA-MOTOR-0930 — ONCE1281 kunye dosyalarinin boya_gerekli kalemleri,
# bugunku BOYALAR'a (arac/renkler.py) ve devletler.js'e karsi.
import json, glob, pathlib, re, sys
sys.stdout.reconfigure(encoding="utf-8")
KOK = pathlib.Path(__file__).resolve().parent.parent
sys.path.insert(0, str(KOK / "arac"))
import renkler  # yalniz OKUNUR

BOY = renkler.BOYALAR
devlet_metin = (KOK / "data" / "devletler.js").read_text(encoding="utf-8")
devlet_idler = set(re.findall(r'\bid\s*:\s*"([^"]+)"', devlet_metin)) | \
               set(re.findall(r'"id"\s*:\s*"([^"]+)"', devlet_metin))
harita = dict(re.findall(r'\bid\s*:\s*"([^"]+)"[^{}]*?\bharita\s*:\s*"([^"]+)"', devlet_metin))

def kayitlar(d):
    if isinstance(d, list):
        return d
    for v in d.values():
        if isinstance(v, list) and v and isinstance(v[0], dict):
            return v
    return []

toplam = {}
for f in sorted(glob.glob(str(KOK / "denetim" / "ONCE1281-*-KUNYE.json"))):
    d = json.load(open(f, encoding="utf-8"))
    L = kayitlar(d)
    ad = pathlib.Path(f).name
    print("==", ad, "kayit", len(L))
    if L:
        print("   alanlar:", sorted(L[0].keys()))
    for x in L:
        if not isinstance(x, dict) or "boya_gerekli" not in x:
            continue
        kid = x.get("id") or x.get("kimlik")
        bg = x.get("boya_gerekli")
        anahtar = harita.get(kid, kid)
        durum = ("BOYALAR'DA" if anahtar in BOY else "BOYASIZ")
        kunye = "kunye-VAR" if kid in devlet_idler else "kunye-YOK"
        toplam.setdefault((durum, kunye, str(bg)), []).append((ad[9:-11], kid))
print()
for k, v in sorted(toplam.items()):
    print(k, len(v))
    for a, kid in v:
        print("     ", a, kid)
