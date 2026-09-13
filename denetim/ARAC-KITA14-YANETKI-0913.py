# -*- coding: utf-8 -*-
"""ARAC-KITA14-YANETKI-0913 — yeni iki maddenin (1556-01-01 · 1556-07-16) ±30 gün
penceresine düşen BÜTÜN kırılmaları listeler: hangileri bu maddelerle "kapandı"
ve o kapanış ANLAMLI mı (madde o yerden bahsediyor mu)? — D147.
SALT OKUR. Ölçüt denetle.py ile aynı: kırılma = d:/v:/s: dönem sınırı, ±30 gün.
"""
import io, os, sys, re, glob, datetime

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)
import girdi

Y = girdi.yukle()
YENI = {"1556-01-01": ["Tobruk"], "1556-07-16": ["Kostayniçe", "Novi"]}


def gun(s):
    s = s if len(s) == 10 else (s + "-01" if len(s) == 7 else s + "-01-01")
    return datetime.date(int(s[:4]), int(s[5:7]), int(s[8:10]))


# eski maddeler (bu ikisi hariç) — pencerede başka madde var mıydı?
ESKI = []
for f in sorted(glob.glob(os.path.join("data", "olaylar*.js"))):
    if f.endswith("olaylar_p0044.js"):
        continue
    for m in re.finditer(r't:\s*"(\d{4}(?:-\d{2}){0,2})"', io.open(f, encoding="utf-8").read()):
        ESKI.append(gun(m.group(1)))

for madde_t, bahsedilen in YENI.items():
    h = gun(madde_t)
    print("")
    print("═══ madde %s — ±30 gününe düşen kırılmalar ═══" % madde_t)
    for y in Y:
        for tur in ("d", "v", "s"):
            for p in y.get(tur, []):
                for uc, ad_uc in (("f", "başlangıç"), ("t", "bitiş")):
                    v = p.get(uc)
                    if not v or v <= "1281-01-01" or v >= "1923-10-29":
                        continue
                    try:
                        fark = (gun(v) - h).days
                    except Exception:
                        continue
                    if abs(fark) > 30:
                        continue
                    kim = p.get("d", "OSMANLI" if tur == "d" else "tabi")
                    eski_var = any(abs((gun(v) - e).days) <= 30 for e in ESKI)
                    bahsediyor = any(b.lower() in y["ad"].lower() for b in bahsedilen)
                    etiket = ("🟢 madde bu yerden BAHSEDİYOR" if bahsediyor else
                              ("⚪ zaten başka maddeyle kapalıydı" if eski_var else
                               "🔴 YALNIZ BU MADDEYLE kapandı — ilgisiz (D147)"))
                    print("   %s %+4dg  %-7s %-9s %-30s %-22s %s" % (
                        v, fark, tur, ad_uc, y["ad"][:30], str(kim)[:22], etiket))
