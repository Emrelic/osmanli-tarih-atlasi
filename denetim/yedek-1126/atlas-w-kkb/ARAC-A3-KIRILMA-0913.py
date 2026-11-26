# -*- coding: utf-8 -*-
"""PAKET-A3 — kırılma/madde komşuluğu ölçer (yalnız OKUR, veriye yazmaz).

py denetim/ARAC-A3-KIRILMA-0913.py GUN [GUN ...] [--pencere N] [--ad ALT]

Her GUN için:
  ① ±N gün (vars. 30) içindeki BÜTÜN kırılmalar — d · v · s · isg ayrı ayrı,
     yerleşim adı, dönem kimliği, kazanç/kayıp
  ② ±30 gün içindeki ÇEKİRDEK maddeler (data/olaylar*.js — denetle.py evreni)
  ③ D147 SİMÜLASYONU: bu güne yeni bir madde yazılırsa hangi kırılma günleri
     BUGÜN ±30 günde maddesizken KAPANIR (sahte kapanış adayları)
--ad ALT : yalnız adı ALT içeren yerleşimleri göster (büyük/küçük duyarsız)
Evren: yerleşimler arac/girdi.py (motorla aynı) · maddeler denetle.olaylari_yukle
"""
import os, sys
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import denetle  # stdout'u denetle kendisi sarar — burada TEKRAR SARILMAZ

args = sys.argv[1:]
pencere = 30
ad_suz = None
if "--pencere" in args:
    i = args.index("--pencere"); pencere = int(args[i + 1]); del args[i:i + 2]
if "--ad" in args:
    i = args.index("--ad"); ad_suz = args[i + 1].lower(); del args[i:i + 2]

import girdi
Y = girdi.yukle(sessiz=True)
O = denetle.olaylari_yukle()
gn = denetle.gun_no

kir = {}  # gun -> list[(kat, tip, ad, kimlik)]
for y in Y:
    for kat in ("d", "v", "s", "isg"):
        for p in (y.get(kat) or []):
            kim = p.get("d") or p.get("k") or ("OSMANLI" if kat == "d" else kat)
            for d, tip in ((p.get("f"), "kazanc"), (p.get("t"), "kayip")):
                if not d or d <= "1281-01-01" or d >= "1923-10-29":
                    continue
                kir.setdefault(d, []).append((kat, tip, y["ad"], kim))
ol = [(gn(o["t"]), o) for o in O]

def maddeler(g, w=30):
    return sorted([(abs(x - g), o) for x, o in ol if abs(x - g) <= w], key=lambda z: z[0])

for G in args:
    g = gn(G)
    print("=" * 78)
    print(f"GÜN {G}  (±{pencere} kırılma · ±30 madde)")
    print("── ① kırılmalar")
    for d in sorted(kir):
        if abs(gn(d) - g) > pencere:
            continue
        for kat, tip, ad, kim in sorted(kir[d]):
            if ad_suz and ad_suz not in ad.lower():
                continue
            print(f"   {d}  {kat:3} {tip:6} {ad[:34]:34} {kim}")
    print("── ② çekirdek maddeler ±30")
    for f, o in maddeler(g):
        print(f"   {o['t']:10} ({f:>2}g) {o.get('b','')[:90]}")
    print("── ③ D147: bu güne madde yazılırsa KAPANACAK maddesiz kırılma günleri")
    n = 0
    for d in sorted(kir):
        gd = gn(d)
        if abs(gd - g) > 30:
            continue
        if maddeler(gd):
            continue
        n += 1
        adlar = sorted({a for _, _, a, _ in kir[d]})
        kim = sorted({k for _, _, _, k in kir[d]})
        print(f"   {d}  {len(kir[d])} uç  {', '.join(adlar[:5])[:70]}  [{', '.join(kim[:4])}]")
    print(f"   ⇒ {n} gün (0 ise sahte kapanış riski YOK)")
