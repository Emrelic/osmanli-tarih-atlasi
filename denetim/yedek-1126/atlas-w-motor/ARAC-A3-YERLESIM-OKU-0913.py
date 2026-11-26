# -*- coding: utf-8 -*-
"""PAKET-A3 — yerleşim girdisini OKUR (yazmaz). Motorla aynı okuyucu: arac/girdi.py
py denetim/ARAC-A3-YERLESIM-OKU-0913.py adlar AD [AD ...]   → tam adla var mı, koordinat, dönem özeti
py denetim/ARAC-A3-YERLESIM-OKU-0913.py sinir GUN          → sınırı tam GUN olan her dönem (ad, kat, dönem)
"""
import io, os, sys, json
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi
Y = girdi.yukle(sessiz=True)
ne = sys.argv[1]
if ne == "adlar":
    ix = {}
    for y in Y:
        ix.setdefault(y["ad"], []).append(y)
    for a in sys.argv[2:]:
        r = ix.get(a)
        if not r:
            yakin = [k for k in ix if a.lower() in k.lower()][:5]
            print(f"YOK   {a}   (içeren: {yakin})")
            continue
        for y in r:
            dv = {k: len(y.get(k) or []) for k in ("d", "v", "s")}
            print(f"VAR   {a}  {y.get('lat')},{y.get('lon')}  dönem {dv}  dosya={y.get('_dosya') or y.get('dosya') or '?'}")
elif ne == "donem":
    # py ... donem AD [AD ...] [--sonra YYYY]  → tam adla kaydın bütün dönemleri (--sonra: t'si o yıldan sonra olanlar)
    a = sys.argv[2:]
    sonra = "0000"
    if "--sonra" in a:
        i = a.index("--sonra"); sonra = a[i + 1]; del a[i:i + 2]
    for ad in a:
        r = [y for y in Y if y["ad"] == ad]
        if not r:
            print(f"YOK   {ad}")
            continue
        for y in r:
            print(f"== {ad}  ({y.get('_kaynak')})")
            for kat in ("d", "v", "s", "isg"):
                for p in (y.get(kat) or []):
                    if (p.get("t") or "9999") >= sonra:
                        print(f"     {kat:3} {json.dumps(p, ensure_ascii=False)[:160]}")
elif ne == "sinir":
    G = sys.argv[2]
    n = 0
    for y in Y:
        for kat in ("d", "v", "s", "isg"):
            L = y.get(kat) or []
            for i, p in enumerate(L):
                if p.get("f") == G or p.get("t") == G:
                    n += 1
                    print(f"{y['ad']:28} {kat} [{i}] {json.dumps(p, ensure_ascii=False)}")
    print("toplam dönem:", n, "· anahtarlar örnek:", sorted(Y[0].keys()))
