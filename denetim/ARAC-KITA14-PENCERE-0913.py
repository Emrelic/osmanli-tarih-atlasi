# -*- coding: utf-8 -*-
"""ARAC-KITA14-PENCERE-0913 — "BU MADDEYİ SİLERSEM / TAŞIRSAM KIRILMA AÇILIR MI?"

Kullanım:
  py denetim/ARAC-KITA14-PENCERE-0913.py <gün> [<gün> …] [--haric <dosya>:<t>:<b-parçası>] [--yer <ad-parçası>]

Her <gün> için ±30 gün penceresine düşen BÜTÜN kırılmaları (d:/v:/s: dönem uçları)
listeler ve her kırılmanın --haric ile çıkarılan madde OLMADAN hâlâ bir olaylar*
maddesiyle ±30 gün içinde kapanıp kapanmadığını söyler. --yer verilirse o yere ait
kayıtların dönemlerini de basar. SALT OKUR. Ölçüt denetle.py Değişmez 2 ile aynı
(yalnız olaylar*.js evreni, ±30 gün).
"""
import io, os, sys, re, glob, datetime

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)
import girdi

args = sys.argv[1:]
gunler, haric, yerler = [], [], []
i = 0
while i < len(args):
    if args[i] == "--haric":
        haric.append(args[i + 1]); i += 2
    elif args[i] == "--yer":
        yerler.append(args[i + 1].lower()); i += 2
    else:
        gunler.append(args[i]); i += 1


def gun(s):
    s = s if len(s) == 10 else (s + "-01" if len(s) == 7 else s + "-01-01")
    return datetime.date(int(s[:4]), int(s[5:7]), int(s[8:10]))


MADDE = re.compile(r'\{[^{}]*?\bt"?\s*:\s*"(\d{4}(?:-\d{2}){0,2})"[^{}]*?\}', re.S)
OL = []
for f in sorted(glob.glob(os.path.join("data", "olaylar*.js"))):
    s = io.open(f, encoding="utf-8").read()
    for m in MADDE.finditer(s):
        b = re.search(r'\bb"?\s*:\s*"([^"]*)"', m.group(0))
        OL.append((os.path.basename(f), m.group(1), b.group(1) if b else ""))
print("olaylar* madde (ayrıştırılan):", len(OL))


def haric_mi(f, t, b):
    for h in haric:
        hf, ht, hb = (h.split(":", 2) + ["", ""])[:3]
        if hf in f and t == ht and hb.lower() in b.lower():
            return True
    return False


cikan = [x for x in OL if haric_mi(*x)]
print("--haric ile çıkarılan madde:", len(cikan))
for x in cikan:
    print("   ", x)
kalan = [gun(t) for f, t, b in OL if not haric_mi(f, t, b)]

Y = girdi.yukle()
if yerler:
    print("")
    print("═══ KAYITLAR ═══")
    for y in Y:
        if any(p in y["ad"].lower() for p in yerler):
            print("### %s" % y["ad"])
            for tur in ("s", "d", "v"):
                for p in y.get(tur, []):
                    print("   %s: %s -> %s  %s" % (tur, p["f"], p["t"],
                          p.get("d", "OSMANLI" if tur == "d" else "tabi")))

for g in gunler:
    h = gun(g)
    print("")
    print("═══ %s ±30 gün ═══" % g)
    n = 0
    for y in Y:
        for tur in ("d", "v", "s"):
            for p in y.get(tur, []):
                for uc in ("f", "t"):
                    v = p.get(uc)
                    if not v or v <= "1281-01-01" or v >= "1923-10-29":
                        continue
                    fark = (gun(v) - h).days
                    if abs(fark) > 30:
                        continue
                    n += 1
                    kapali = any(abs((gun(v) - e).days) <= 30 for e in kalan)
                    print("   %s %+4dg %s.%s %-32s %-18s %s" % (
                        v, fark, tur, uc, y["ad"][:32],
                        str(p.get("d", "OSMANLI" if tur == "d" else "tabi"))[:18],
                        "🟢 haric OLMADAN da kapalı" if kapali else "🔴 haric ÇIKARILIRSA AÇIK KALIR"))
    if not n:
        print("   (pencerede kırılma yok)")
