# -*- coding: utf-8 -*-
"""KUYRUK KAYNAK — data/kronoloji_*.js (42 dosya) icindeki `kaynak:` alanlarini
sinifa ayirir: gercek TDV slug mu, "bulunamadi" beyani mi, harici akademik
kaynak mi, ic capraz referans mi, yoksa belirsiz mi.

Cikti: denetim/OLCUM-KUYRUK-KAYNAK-SINIF-0911.json
"""
import io, json, re, glob, sys

try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

files = sorted(glob.glob("data/kronoloji_*.js"))
raw = []
for fn in files:
    txt = io.open(fn, encoding="utf-8").read()
    for m in re.finditer(r'kaynak\s*:\s*"([^"]+)"', txt):
        raw.append((m.group(1), fn))

SLUG_RE = re.compile(r'^[a-z0-9][a-z0-9\-]*$')
LEAD_SLUG_RE = re.compile(r'^([a-z0-9][a-z0-9\-]*)\s*[\(—–,]')

kova = {"bulunamadi": [], "ic_capraz": [], "harici_akademik": [],
        "slug_tek": set(), "slug_onekli": set(), "belirsiz": []}

AKADEMIK_DESEN = re.compile(
    r"akademik|Encyclopaedia|Cambridge|standart|Britannica|cilt \d|s\. \d|"
    r"History of|Metcalf|Davies|Riasanovsky|Schulze|Bournoutian|Kontler|"
    r"Evans \(|Sansom|UNESCO|whc\.unesco|dergipark|Üniv\.|Ansiklopedisi'nden"
)

for v, fn in raw:
    vs = v.strip()
    low = vs.lower()
    if low.startswith("bulunamad"):
        kova["bulunamadi"].append((v, fn))
        continue
    if vs.startswith("data/"):
        kova["ic_capraz"].append((v, fn))
        continue
    if SLUG_RE.match(vs) or re.match(r'^[a-z0-9][a-z0-9 \-·+]*$', vs):
        parts = re.split(r"\s*[·+]\s*", vs)
        if parts and all(SLUG_RE.match(p.strip()) for p in parts):
            for p in parts:
                kova["slug_tek"].add(p.strip())
            continue
    m = LEAD_SLUG_RE.match(vs)
    if m:
        kova["slug_onekli"].add(m.group(1))
        continue
    # buyuk harfle basliyorsa (ozel isim/yazar) TDV slug olamaz -- gercek
    # sluglar bu depoda daima kucuk-kebap-case
    if vs[:1].isupper() or AKADEMIK_DESEN.search(vs):
        kova["harici_akademik"].append((v, fn))
        continue
    kova["belirsiz"].append((v, fn))

print("TOPLAM kaynak alani:", len(raw))
print("bulunamadi:", len(kova["bulunamadi"]))
print("ic_capraz:", len(kova["ic_capraz"]))
print("harici_akademik:", len(kova["harici_akademik"]))
print("slug_tek (benzersiz):", len(kova["slug_tek"]))
print("slug_onekli (benzersiz, ek aciklamali):", len(kova["slug_onekli"]))
print("belirsiz:", len(kova["belirsiz"]))
print()
print("--- belirsiz orneklerden 25 ---")
for v, f in kova["belirsiz"][:25]:
    print(repr(v))

out = {
    "toplam_alan": len(raw),
    "bulunamadi_sayisi": len(kova["bulunamadi"]),
    "ic_capraz_sayisi": len(kova["ic_capraz"]),
    "harici_akademik_sayisi": len(kova["harici_akademik"]),
    "slug_tek": sorted(kova["slug_tek"]),
    "slug_onekli": sorted(kova["slug_onekli"]),
    "belirsiz_sayisi": len(kova["belirsiz"]),
    "belirsiz_ornek": [v for v, f in kova["belirsiz"][:60]],
    "bulunamadi_ornek": [v for v, f in kova["bulunamadi"][:20]],
    "harici_akademik_ornek": [v for v, f in kova["harici_akademik"][:20]],
}
io.open("denetim/OLCUM-KUYRUK-KAYNAK-SINIF-0911.json", "w", encoding="utf-8").write(
    json.dumps(out, ensure_ascii=False, indent=1)
)
print("\nyazildi: denetim/OLCUM-KUYRUK-KAYNAK-SINIF-0911.json")
