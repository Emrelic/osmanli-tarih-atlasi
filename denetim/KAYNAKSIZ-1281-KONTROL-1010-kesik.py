# 1281-01-01'de BİTEN s: dönemleri: hemen ardından AYNI tarihte BAŞKA sahip başlıyor mu?
# (ufuk kenarı bir egemenlik DEĞİŞİMİ gibi yazılmış mı) — gruplara göre
import sys, io, os, contextlib
from collections import Counter
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
KOK = os.path.abspath(sys.argv[1]); sys.path.insert(0, os.path.join(KOK, "arac")); os.chdir(KOK)
import girdi, denetle
with contextlib.redirect_stdout(io.StringIO()):
    Y = girdi.yukle(sessiz=True)
K = denetle.kaynaksizlik_olc(Y); U0 = girdi.VERI_UFKU[0]
H = set(K["hicbiri"]); D = set(K["donem_ici"])
c = Counter(); ornek = []
for y in Y:
    a = "%s|%s" % (y.get("_kaynak"), y.get("ad"))
    S = [p for p in (y.get("s") or []) if isinstance(p, dict) and p.get("f")]
    for p in S:
        if denetle.pad(p.get("t") or "9999") == U0:
            q = [r for r in S if denetle.pad(r["f"]) == U0]
            grup = "hicbiri" if a in H else ("donem_ici" if a in D else "kayit-kaynakli")
            if not q: c[(grup, "ardında 1281 dönemi YOK")] += 1
            elif q[0].get("d") == p.get("d"): c[(grup, "aynı sahip (yalnız kesik)")] += 1
            else:
                c[(grup, "BAŞKA sahip 1281-01-01'de")] += 1
                if len(ornek) < 15: ornek.append(f"{y['ad']}: {p['d']}→{q[0]['d']} ({grup}; kaynak: {'var' if denetle._kaynak_dolu(q[0].get('kaynak')) or denetle._kaynak_dolu(y.get('kaynak')) else 'yok'})")
for k in sorted(c): print(k, c[k])
print("örnek:", *ornek, sep="\n  ")
