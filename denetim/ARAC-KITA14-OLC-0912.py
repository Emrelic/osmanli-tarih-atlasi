# -*- coding: utf-8 -*-
"""ARAC-KITA14-OLC-0912 — SEHIRKOY ZINCIRI olcumu. SALT OKUR.

Uc soru:
 ① NIS kaydi hangi dosyada, donemleri ne? (TDV: 1444-1456 SIRP olmali)
 ② 1443-01-01 ve 1456-01-01 gunlerinin +-30 gununde kronoloji maddesi VAR MI?
 ③ SEHIRKOY'u degistirirsem oteki ucta (Sirp tarafinda) ne olur? (§3.5.1)
"""
import io, os, sys, json, glob, re, datetime

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)
import girdi

Y = girdi.yukle()
print("yerlesim yuklendi:", len(Y))

# ---------- ① NIS ----------------------------------------------------------
def bul(ad_parca):
    return [y for y in Y if ad_parca.lower() in (y.get("ad") or "").lower()]


for hedef in ("Niş", "Şehirköy", "Vidin", "Sofya", "Alacahisar", "Semendire"):
    for y in bul(hedef):
        print("")
        print("### %s   (%.4f, %.4f)" % (y["ad"], y["lat"], y["lon"]))
        for p in y.get("s", []):
            print("   s: %s -> %s   %s" % (p["f"], p["t"], p["d"]))
        for p in y.get("d", []):
            print("   d: %s -> %s   OSMANLI" % (p["f"], p["t"]))
        for p in y.get("v", []):
            print("   v: %s -> %s   tabi" % (p["f"], p["t"]))

# ---------- 1444 kesitinde kim ne? -----------------------------------------
def sahip(y, g):
    for p in y.get("d", []):
        if p["f"] <= g < p["t"]:
            return "OSMANLI"
    for p in y.get("v", []):
        if p["f"] <= g < p["t"]:
            return "tabi"
    for p in y.get("s", []):
        if p["f"] <= g < p["t"]:
            return p["d"]
    return "—"


print("")
print("=== 1444-08-15 ve 1450-06-15 KESITI ===")
for hedef in ("Niş", "Şehirköy", "Vidin", "Sofya", "Alacahisar", "Semendire",
              "Köstendil", "İhtiman", "Kruşevac", "Novo Brdo"):
    for y in bul(hedef):
        print("   %-22s 1444: %-20s 1450: %s"
              % (y["ad"][:22], sahip(y, "1444-08-15"), sahip(y, "1450-06-15")))

# ---------- ② KRONOLOJI: 1443-01-01 ve 1456-01-01 civari --------------------
OL = []
for yol in sorted(glob.glob(os.path.join(KOK, "data", "olaylar*.js")) +
                  glob.glob(os.path.join(KOK, "data", "kronoloji*.js"))):
    s = io.open(yol, encoding="utf-8").read()
    for m in re.finditer(r't:\s*"(\d{4}-\d{2}(?:-\d{2})?)"[^}]*?b:\s*"([^"]{0,120})"', s):
        OL.append((m.group(1), m.group(2), os.path.basename(yol)))
print("")
print("kronoloji maddesi (t: + b: eslesen):", len(OL))


def gun(s):
    s = s if len(s) == 10 else s + "-01"
    return datetime.date(int(s[:4]), int(s[5:7]), int(s[8:10]))


for hedef in ("1443-01-01", "1456-01-01", "1444-06-12"):
    h = gun(hedef)
    yakin = []
    for t, b, f in OL:
        try:
            d = (gun(t) - h).days
        except Exception:
            continue
        if abs(d) <= 30:
            yakin.append((d, t, b, f))
    yakin.sort(key=lambda r: abs(r[0]))
    print("")
    print("=== %s  +-30 GUN: %d madde ===" % (hedef, len(yakin)))
    for d, t, b, f in yakin[:12]:
        print("   %+4dg  %s  %-58s  [%s]" % (d, t, b[:58], f))
    if not yakin:
        print("   🔴 HIC MADDE YOK — Degismez 2 ihlali")

# ---------- ③ 1443 ve 1456 gecen butun maddeler ----------------------------
print("")
print("=== 1443 ya da 1456 YILINDA gecen butun maddeler ===")
for t, b, f in sorted(OL):
    if t.startswith("1443") or t.startswith("1456"):
        print("   %s  %-60s [%s]" % (t, b[:60], f))
