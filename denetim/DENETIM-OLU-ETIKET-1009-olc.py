# DENETIM-OLU-ETIKET-1009 — haritada boyanan gövde × künye ölümü
# Kullanım: py olc.py <worktree-kökü> <çıktı.json>
import sys, os, json, re, math, hashlib, subprocess, datetime
KOK, CIKTI = sys.argv[1], sys.argv[2]
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi

def gun(s):
    p = s.split("-")
    return datetime.date(int(p[0]), int(p[1]) if len(p) > 1 and p[1] else 1,
                         int(p[2]) if len(p) > 2 and p[2] else 1).toordinal()
def tarih(o): return datetime.date.fromordinal(o).isoformat()

# ---- gövdeler (yayındaki dosyadan çözülmüş) ----
s = open(os.path.join(KOK, "data", "devletler_harita.js"), encoding="utf-8").read()
def dizi(ad):
    i = s.find("window.%s" % ad); i = s.find("=", i) + 1
    j = s.find(";\n", i)
    return json.loads(s[i:j])
PARCA = dizi("DEVLET_PARCALAR"); HALKA = dizi("DEVLET_PARCA_HALKA")
DH = dizi("DEVLET_HARITA"); IZI = dizi("URETIM_IZI")

# ---- künyeler (node ile — denetle.py'nin yöntemi) ----
yol = os.path.join(KOK, "data", "devletler.js")
js = ("global.window={};eval(require('fs').readFileSync(%s,'utf8'));"
      "process.stdout.write(JSON.stringify(window.DEVLETLER||[]));" % json.dumps(yol))
K = json.loads(subprocess.run(["node", "-e", js], capture_output=True,
                              encoding="utf-8").stdout)
anahtar = {}   # boya anahtarı -> [künye]
for k in K:
    for a in {k.get("id"), k.get("harita")}:
        if a: anahtar.setdefault(a, []).append(k)

# ---- alan: halka -> km² (küresel yaklaşık: dereceye cos(enlem)) ----
R = 6371.0088
def halka_km2(h):
    a = 0.0
    for (x1, y1), (x2, y2) in zip(h, h[1:]):
        a += math.radians(x2 - x1) * (2 + math.sin(math.radians(y1)) + math.sin(math.radians(y2)))
    return abs(a * R * R / 2.0)
_parca_alan = {}
def parca_km2(gi):
    # g indeksi -> DEVLET_PARCA_HALKA[gi] = [dış, delik...] halka indeksleri
    if gi in _parca_alan: return _parca_alan[gi]
    hl = HALKA[gi]
    a = halka_km2(PARCA[hl[0]]) - sum(halka_km2(PARCA[x]) for x in hl[1:])
    _parca_alan[gi] = a; return a
def dnm_alan(d): return sum(parca_km2(g) for g in d["g"])

# ---- yerleşimler: anahtar -> [(f,t,ad)] s: dönemleri ----
Y = girdi.yukle(sessiz=True)
sdon = {}
for y in Y:
    for p in y.get("s") or []:
        if p.get("d"):
            sdon.setdefault(p["d"], []).append((gun(p["f"]), gun(p["t"]), y["ad"], y.get("_kaynak")))

# ---- girdi bayatlığı ----
bayat = []
for ad, h in IZI.get("girdi", {}).items():
    yp = os.path.join(KOK, "data", ad)
    if os.path.exists(yp):
        if hashlib.sha256(open(yp, "rb").read()).hexdigest() != h: bayat.append(ad)
    else: bayat.append(ad + " (YOK)")

vakalar, kunyesiz, bosluk = [], [], []
toplam_dnm = 0
for st in DH:
    a = st["id"]
    for d in st["dnm"]:
        toplam_dnm += 1
        f, t = gun(d["f"]), gun(d["t"])
        if a == "__BOSLUK__":
            bosluk.append((a, d["f"], d["t"])); continue
        ks = anahtar.get(a)
        if not ks:
            kunyesiz.append((a, d["f"], d["t"])); continue
        # canlı: herhangi bir künye [kf, kt] içinde (kt dahil). ölü günler = [f,t) − ∪[kf,kt]
        kapsa = sorted((gun(k["f"]), gun(k["t"])) for k in ks if k.get("f") and k.get("t"))
        olu = []; c = f
        for kf, kt in kapsa:
            if kt < c: continue
            if kf > c: olu.append((c, min(kf, t)))
            c = max(c, kt + 1)
            if c >= t: break
        if c < t: olu.append((c, t))
        olu = [(x, y) for x, y in olu if y > x]
        if not olu: continue
        ka = max(kt for kf, kt in kapsa) if kapsa else None
        ke = min(kf for kf, kt in kapsa) if kapsa else None
        alan = dnm_alan(d)
        for x, y in olu:
            yon = "SONRA" if ka is not None and x > ka else ("ONCE" if ke is not None and y <= ke else "ARA")
            # bu ölü dilimde s: kaydı aktif yerleşim var mı?
            aktif = [(n, kay) for (sf, stt, n, kay) in sdon.get(a, []) if sf < y and stt > x]
            vakalar.append(dict(anahtar=a, kunyeler=[(k["id"], k.get("f"), k.get("t")) for k in ks],
                                dnm_f=d["f"], dnm_t=d["t"], olu_f=tarih(x), olu_t=tarih(y),
                                gun=y - x, yon=yon, km2=round(alan), km2_gun=round(alan * (y - x)),
                                aktif_s=len(aktif), aktif_ornek=sorted({n for n, _ in aktif})[:6],
                                aktif_kaynak=sorted({kay for _, kay in aktif})))
json.dump(dict(toplam_dnm=toplam_dnm, devlet=len(DH), kunye=len(K), bayat_girdi=bayat,
               kunyesiz=kunyesiz, bosluk_dnm=len(bosluk), vakalar=vakalar),
          open(CIKTI, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print("devlet", len(DH), "dnm", toplam_dnm, "künye", len(K), "bayat girdi", len(bayat), bayat[:5])
print("künyesiz anahtar dnm", len(kunyesiz), sorted({x[0] for x in kunyesiz})[:20])
print("__BOSLUK__ dnm", len(bosluk))
from collections import Counter
print("vaka", len(vakalar), Counter(v["yon"] for v in vakalar))
