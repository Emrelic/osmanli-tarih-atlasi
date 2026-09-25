# -*- coding: utf-8 -*-
"""GEOMETRI HAVUZUNU ZAMANA GORE DILIMLE — YUK-BOLME-0925.

uret_petek.py'den SONRA kosar (uret_devirler.py gibi); motora DOKUNMAZ.
Girdi : data/donemler.js · data/devletler_harita.js (motorun yazdigi, havuzlu hali)
        🔴 GIRDIYE YAZILMAZ: sekiz arac (denetle_bosluk, denetle_bitisiklik,
        denetle_gorunurluk, uret_devirler, motor_esitlik, renk_cikti, dolgu,
        denetle_yayin) havuzu BU dosyalardan okuyor; bosaltmak onlari kirar.
Cikti : data/donemler_web.js · data/devletler_harita_web.js — ayni degiskenler,
        havuz dizileri BOS (window.PARCALAR = [] …) + window.GEO_DILIMLER
        + data/geo/gNN.json  (her dilimin halkalari, GLOBAL indeksleriyle)
        index.html YALNIZ _web dosyalarini yukler.

ESIT BAYT: dilim sinirlari kayit kenarlarina (f/t gunleri) oturur, dilimin
boyu ham bayt hedefine gore acgozlu secilir; hedef, istenen dilim sayisini
verecek sekilde ikili aranir.  Bir dilim, [f_i, f_{i+1}) araliginin HERHANGI
bir gununu cizmeye yeten BUTUN halkalari tasir (kendi basina yeterli; ortak
havuz YOK — olculdu: ORTAK kova acilisa 20 MB ham ekliyordu).

Tekrar kosturmak guvenli: girdi okunur, yalniz _web + geo/ yeniden yazilir.
Kullanim:  py arac/geo_dilimle.py [--k 24] [--kok <depo koku>]
"""
import argparse, gzip, json, os, re, sys, time
sys.stdout.reconfigure(encoding="utf-8", errors="replace")

ap = argparse.ArgumentParser()
ap.add_argument("--k", type=int, default=24)
ap.add_argument("--kok", default=os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
arg = ap.parse_args()
KOK = arg.kok
T0 = time.time()
BAS_S, BITIS_S = "1281-01-01", "1923-10-29"


def gun(s):
    y, a, g = (s.split("-") + ["1", "1"])[:3]
    return int(y) * 372 + (int(a or 1) - 1) * 31 + (int(g or 1) - 1)


BAS, BITIS = gun(BAS_S), gun(BITIS_S)


def satirlar(yol):
    return open(yol, encoding="utf-8").read().split("\n")


def degisken(sat, ad):
    on = "window." + ad + " = "
    for i, s in enumerate(sat):
        if s.startswith(on):
            g = s[len(on):].rstrip()
            return i, (g[:-1] if g.endswith(";") else g)
    raise SystemExit("YOK: window." + ad)


def halkalara_bol(govde):
    g = govde.strip()
    if g == "[]":
        raise SystemExit("HAVUZ BOS — dosya zaten dilimlenmis. Once uret_petek.py ciktisini geri getir.")
    assert g.startswith("[[[") and g.endswith("]]]"), g[:30]
    parca = g[1:-1].split("]],[[")
    son = len(parca) - 1
    return [("[[" if k else "") + p + ("]]" if k < son else "") for k, p in enumerate(parca)]


yol_os = os.path.join(KOK, "data", "donemler.js")
yol_yb = os.path.join(KOK, "data", "devletler_harita.js")
S_OS, S_YB = satirlar(yol_os), satirlar(yol_yb)
i_hos, g_hos = degisken(S_OS, "PARCALAR")
i_hyb, g_hyb = degisken(S_YB, "DEVLET_PARCALAR")
H_OS, H_YB = halkalara_bol(g_hos), halkalara_bol(g_hyb)
PH_OS = json.loads(degisken(S_OS, "PARCA_HALKA")[1])
PH_YB = json.loads(degisken(S_YB, "DEVLET_PARCA_HALKA")[1])
DON = json.loads(degisken(S_OS, "DONEMLER")[1])
DH = json.loads(degisken(S_YB, "DEVLET_HARITA")[1])
# butunluk: PARCA_HALKA'nin gosterdigi en buyuk halka havuzda olmali
assert max(max(x) for x in PH_OS if x) < len(H_OS), "PARCA_HALKA havuz disini gosteriyor"
assert max(max(x) for x in PH_YB if x) < len(H_YB), "DEVLET_PARCA_HALKA havuz disini gosteriyor"
print("okundu %.0f sn · halka: Osmanli %d · yabanci %d" % (time.time() - T0, len(H_OS), len(H_YB)))

OFS = 10_000_000
BOY = {}
for i, h in enumerate(H_OS): BOY[i] = len(h.encode("utf-8"))
for i, h in enumerate(H_YB): BOY[OFS + i] = len(h.encode("utf-8"))


def coz(dizi, ph, ofs):
    out = set()
    for p in dizi or []:
        if isinstance(p, int):
            out.update(ofs + h for h in ph[p])
    return out


KAY = []                      # (f, t, kume) — pencereye kirpilmis
TARIH_METNI = {BAS: BAS_S}
for f_s, t_s, s in (
        [(d["f"], d["t"], coz(d.get("o"), PH_OS, 0) | coz(d.get("v"), PH_OS, 0) |
          set().union(*[coz(hb.get("g"), PH_OS, 0) for hb in (d.get("h") or [])]))
         for d in DON] +
        [(dn["f"], dn["t"], coz(dn.get("g"), PH_YB, OFS)) for dv in DH for dn in dv["dnm"]]):
    f, t = gun(f_s), gun(t_s)
    TARIH_METNI.setdefault(f, f_s)
    f2 = max(f, BAS)
    t2 = BITIS + 1 if t >= BITIS else t          # t==BITIS son gunu da kapsar (aktifAralik)
    if f2 < t2 and s:
        KAY.append((f2, t2, s))

olay = sorted({BAS} | {f for f, t, s in KAY} | {t for f, t, s in KAY if t <= BITIS})
basla, bit = {}, {}
for f, t, s in KAY:
    basla.setdefault(f, []).append(s); bit.setdefault(t, []).append(s)
ref, EKLENEN, AKTIF = {}, [], []
for x in olay:
    for s in bit.get(x, []):
        for k in s:
            ref[k] -= 1
            if not ref[k]: del ref[k]
    ek = set()
    for s in basla.get(x, []):
        for k in s:
            if k not in ref: ref[k] = 0; ek.add(k)
            ref[k] += 1
    EKLENEN.append(ek); AKTIF.append(set(ref))
NJ = len(olay)


def acgozlu(hedef):
    dil, a = [], 0
    s = set(AKTIF[0]); b = sum(BOY[k] for k in s)
    for j in range(1, NJ):
        yeni = [k for k in EKLENEN[j] if k not in s]
        eb = sum(BOY[k] for k in yeni)
        if b + eb > hedef:
            dil.append(a); a = j
            s = set(AKTIF[j]); b = sum(BOY[k] for k in s)
        else:
            s.update(yeni); b += eb
    dil.append(a)
    return dil                    # dilim baslangic temel-aralik indeksleri


lo, hi, en = max(sum(BOY[k] for k in A) for A in AKTIF), sum(BOY.values()), None
for _ in range(24):
    orta = (lo + hi) // 2
    d = acgozlu(orta)
    if len(d) > arg.k: lo = orta
    else: hi, en = orta, d
BASLAR = en
print("K=%d istendi -> %d dilim · hedef %.2f MB ham" % (arg.k, len(BASLAR), hi / 1048576))


def yuk(kume):
    o = sorted(k for k in kume if k < OFS)
    y = sorted(k - OFS for k in kume if k >= OFS)
    return ('{"o":{"i":' + json.dumps(o, separators=(",", ":")) + ',"r":[' + ",".join(H_OS[k] for k in o) +
            ']},"y":{"i":' + json.dumps(y, separators=(",", ":")) + ',"r":[' + ",".join(H_YB[k] for k in y) + ']}}')


geo_dir = os.path.join(KOK, "data", "geo")
os.makedirs(geo_dir, exist_ok=True)
for eski in os.listdir(geo_dir):
    if re.match(r"g\d+\.json$", eski): os.remove(os.path.join(geo_dir, eski))
tablo = []
for n, a in enumerate(BASLAR):
    b = BASLAR[n + 1] - 1 if n + 1 < len(BASLAR) else NJ - 1
    kume = set(AKTIF[a])
    for j in range(a + 1, b + 1): kume |= EKLENEN[j]
    metin = yuk(kume)
    ad = "g%02d.json" % (n + 1)
    open(os.path.join(geo_dir, ad), "w", encoding="utf-8", newline="\n").write(metin)
    ham = len(metin.encode("utf-8")); gz = len(gzip.compress(metin.encode("utf-8"), 6))
    tablo.append({"f": TARIH_METNI[olay[a]], "dosya": "data/geo/" + ad, "halka": len(kume),
                  "ham": ham, "gz": gz})
    print("  %s  %s  %6d halka  ham %5.2f MB  gzip %4.2f MB" % (ad, TARIH_METNI[olay[a]], len(kume), ham / 1048576, gz / 1048576))

GEO = {"surum": 1, "o_n": len(H_OS), "y_n": len(H_YB), "d": tablo}
S_OS[i_hos] = "window.PARCALAR = [];   // 🔴 DILIMLENDI — halkalar data/geo/gNN.json'da (arac/geo_dilimle.py)"
S_YB[i_hyb] = "window.DEVLET_PARCALAR = [];   // 🔴 DILIMLENDI — halkalar data/geo/gNN.json'da (arac/geo_dilimle.py)"
S_OS.insert(i_hos + 1, "window.GEO_DILIMLER = " + json.dumps(GEO, ensure_ascii=False, separators=(",", ":")) + ";")
web_os = os.path.join(KOK, "data", "donemler_web.js")
web_yb = os.path.join(KOK, "data", "devletler_harita_web.js")
BASLIK = "// 🔴 TARAYICI KOPYASI — arac/geo_dilimle.py uretti; motorun asli data/%s (araclar onu okur). ELLE DUZENLEME."
open(web_os, "w", encoding="utf-8", newline="\n").write(BASLIK % "donemler.js" + "\n" + "\n".join(S_OS))
open(web_yb, "w", encoding="utf-8", newline="\n").write(BASLIK % "devletler_harita.js" + "\n" + "\n".join(S_YB))
print("yazildi: donemler_web.js %.2f MB · devletler_harita_web.js %.2f MB · %d dilim · toplam gzip %.2f MB · %.0f sn" % (
    os.path.getsize(web_os) / 1048576, os.path.getsize(web_yb) / 1048576, len(tablo),
    sum(x["gz"] for x in tablo) / 1048576, time.time() - T0))
