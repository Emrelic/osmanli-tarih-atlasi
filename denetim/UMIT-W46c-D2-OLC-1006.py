# UMIT-W46c — Değişmez 2 açıklarının ANLIK GÖRÜNTÜSÜ (yalnız okur). Kök argv[1].
#   py UMIT-W46c-D2-OLC-1006.py <kok> <cikti.json>
# `denetle.py`nin KENDİ degismez2()'sini, onun çekirdek süzgeciyle çağırır (yeniden yazmaz):
#   d/v (kapı: açık 0) · isg (2i) · s yer_sarti=True (2s)
# İki görüntü (önce/sonra) karşılaştırılınca yeni açıklar ADIYLA çıkar.
import sys, os, json
sys.stdout.reconfigure(encoding="utf-8")
KOK = sys.argv[1]
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)
import girdi, denetle
Y = girdi.yukle(sessiz=True)
O = denetle.olaylari_yukle()
Yc = [y for y in Y if y.get("_kaynak") not in denetle.KUYRUK_DOSYALARI]
cikti = {}
for ad, kat, ys in (("dv", ("d", "v"), False), ("isg", ("isg",), False), ("s", ("s",), True)):
    kir, acik = denetle.degismez2(Yc, O, kat, yer_sarti=ys)
    cikti[ad] = {"kirilma": len(kir), "acik": sorted(f"{a[0]}|{a[1]}|{','.join(sorted(a[2]))}" for a in acik)}
    print(f"{ad}: kırılma {len(kir)} · açık {len(acik)}")
json.dump(cikti, open(sys.argv[2], "w", encoding="utf-8"), ensure_ascii=False, indent=1)
