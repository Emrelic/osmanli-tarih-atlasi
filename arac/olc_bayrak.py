# -*- coding: utf-8 -*-
"""BAYRAK YARISI + HAZIR KITA — Emre'nin dort sorusunu OLCER.

S1 Koordinatoru belli araliklarla emekli etmek token tasarrufu saglar mi?
   ⇒ Baglam ISTEK SAYISIYLA BUYUYORSA, toplam maliyet KARESEL artar ve
     sifirlamak dogrusala cevirir. Egriyi olcerek gosterir.
S3 Bekci/tahta token yiyor mu?  ⇒ istek uretmeyen surec token URETMEZ;
   olculebilen sey bekcinin UYANDIRDIGI isteklerin maliyeti.
S4 HAZIR KITA bekleyen oturum bosta token yiyor mu?
   ⇒ az istekli oturumlarin toplam maliyeti olculur.
"""
import io, json, os, sys, glob
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
DIZIN = r"C:\Users\emrem\.claude\projects\C--Users-emrem-OneDrive-Desktop-TAR-H-CO-RAFYA-S-TES-"
BEN = "2ad1685f"

# ---------- S1: baglam egrisi (bu oturum) ----------
yol = os.path.join(DIZIN, BEN + "-dd0a-4c8c-8b9d-a89c216d56e6.jsonl")
if not os.path.exists(yol):
    c = [p for p in glob.glob(os.path.join(DIZIN, BEN + "*.jsonl"))]
    yol = c[0] if c else None

egri = []
if yol:
    for satir in io.open(yol, encoding="utf-8", errors="replace"):
        satir = satir.strip()
        if not satir:
            continue
        try:
            r = json.loads(satir)
        except Exception:
            continue
        u = (r.get("message") or {}).get("usage") or {}
        if not u:
            continue
        egri.append((u.get("cache_read_input_tokens", 0) or 0) +
                    (u.get("cache_creation_input_tokens", 0) or 0))

print("=" * 66)
print("S1 — BAGLAM ISTEK SAYISIYLA BUYUYOR MU? (bu oturum)")
print("=" * 66)
n = len(egri)
print("  istek: %s" % f"{n:,}")
if n > 20:
    dilim = 10
    b = n // dilim
    print("  %-8s %14s %14s" % ("dilim", "ort. baglam", "o dilimin maliyeti"))
    for i in range(dilim):
        p = egri[i * b:(i + 1) * b]
        if p:
            print("  %2d/%2d    %14s %14s"
                  % (i + 1, dilim, f"{sum(p)//len(p):,}", f"{sum(p):,}"))
    ilk = egri[:b]; son = egri[-b:]
    print()
    print("  ILK dilim ort.  %12s" % f"{sum(ilk)//len(ilk):,}")
    print("  SON dilim ort.  %12s" % f"{sum(son)//len(son):,}")
    if sum(ilk):
        print("  BUYUME          %12.1f kat" % (sum(son) / sum(ilk)))

    # bayrak yarisi benzetimi: her K istekte sifirla (taban 60k)
    TABAN = 60_000
    gercek = sum(egri)
    print()
    print("  BAYRAK YARISI BENZETIMI (her K istekte yeni koordinator,")
    print("  devir notu ile taban %s token):" % f"{TABAN:,}")
    print("  %-10s %16s %10s" % ("K", "toplam baglam", "tasarruf"))
    for K in (500, 1000, 2000, 4000):
        t = 0
        # her blokta baglam TABAN'dan baslar ve blok icinde ayni HIZLA buyur
        art = (sum(egri[-b:]) / len(egri[-b:]) - sum(egri[:b]) / len(egri[:b])) / max(1, n)
        for i in range(n):
            yerel = i % K
            t += TABAN + art * yerel
        print("  %-10d %16s %9.0f%%" % (K, f"{int(t):,}", 100 * (1 - t / gercek)))

# ---------- S4: HAZIR KITA — bosta bekleyen oturum ----------
print()
print("=" * 66)
print("S4 — HAZIR KITA: bekleyen oturum token yiyor mu?")
print("=" * 66)
oturum = []
for p in glob.glob(os.path.join(DIZIN, "*.jsonl")):
    istek = 0; bag = 0; cik = 0
    for satir in io.open(p, encoding="utf-8", errors="replace"):
        satir = satir.strip()
        if not satir:
            continue
        try:
            r = json.loads(satir)
        except Exception:
            continue
        u = (r.get("message") or {}).get("usage") or {}
        if not u:
            continue
        istek += 1
        bag += (u.get("cache_read_input_tokens", 0) or 0) + \
               (u.get("cache_creation_input_tokens", 0) or 0)
        cik += u.get("output_tokens", 0) or 0
    oturum.append((os.path.basename(p)[:8], istek, bag, cik))

az = [o for o in oturum if o[1] <= 30]
orta = [o for o in oturum if 30 < o[1] <= 300]
cok = [o for o in oturum if o[1] > 300]
tb = sum(o[2] for o in oturum) or 1
for ad, kume in (("<=30 istek  (acilip bekleyen)", az),
                 ("31-300      (kisa is)", orta),
                 (">300        (uzun oturum)", cok)):
    print("  %-30s oturum %3d · baglam %14s  %%%.1f"
          % (ad, len(kume), f"{sum(o[2] for o in kume):,}",
             100 * sum(o[2] for o in kume) / tb))
print()
print("  📌 Bir oturum ISTEK URETMEDIKCE token HARCAMAZ. Bekleyen")
print("     oturumun maliyeti UYANDIGI ANDA dogar, beklerken DEGIL.")
