"""odak_olc.py'nin `odak_kimlik` kuralı ile app.js'in kuralı arasındaki farkı TÜM
kronoloji/olaylar evreninde sayar (yalnız okur).

odak_olc.py:156  → KUTULU ⇔ odak_kimlik LİSTE ve len ≥ 2 (kimlik sayısı)
app.js:11739-51  → dizgi de kabul · şart madde GÜNÜNDE ≥ 2 YERLEŞİM
Kovalar (yalnız odak_kimlik'e kadar düşen maddeler, yani üstünde yer_kon/yer_id/
odak_kutu_kaynak/odak_yer çözülmemiş olanlar):
    olcer_hayir_app_evet   ölçer ODAKSIZ/BEYANLI der, app kutu KURAR   (yanlış pozitif)
    olcer_evet_app_hayir   ölçer KUTULU der, app kutu KURAMAZ          (yanlış negatif)
"""
import os
import subprocess
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
import odak_olc  # noqa: E402

havuz = odak_olc.yer_havuzu()
aday = []
for f in sorted(os.listdir(os.path.join(KOK, "data"))):
    if not (f.endswith(".js") and (f.startswith("kronoloji_") or f.startswith("olaylar"))):
        continue
    d, h = odak_olc._oku(os.path.join(KOK, "data", f))
    if h or not isinstance(d["kayit"], list):
        continue
    for o in d["kayit"]:
        if not isinstance(o, dict) or not o.get("odak_kimlik"):
            continue
        yk = o.get("yer_kon")
        if (isinstance(yk, list) and len(yk) == 2) or (o.get("yer_id") in havuz) or o.get("odak_kutu_kaynak"):
            continue
        oy = o.get("odak_yer")
        oy = [oy] if isinstance(oy, str) else (oy or [])
        if any(a in havuz for a in oy):
            continue
        ok = o["odak_kimlik"]
        ids = [ok] if isinstance(ok, str) else ok
        olcer = isinstance(ok, list) and len(ok) >= 2
        aday.append((f, o.get("t"), ids, olcer, (o.get("b") or "")[:50]))

arg = []
for _f, t, ids, _o, _b in aday:
    arg += [t, ",".join(ids)]
r = subprocess.run(["node", os.path.join(KOK, "denetim", "ODAK-OSMANLI-ANADOLU-0080-kimlik.js")] + arg,
                   capture_output=True, text=True, encoding="utf-8")
satir = r.stdout.splitlines()
fp, fn = [], []
for (f, t, ids, olcer, b), s in zip(aday, satir):
    n = int(s.split("n=")[1].split()[0])
    app = n >= 2
    if app and not olcer:
        fp.append((f, t, ids, n, b))
    if olcer and not app:
        fn.append((f, t, ids, n, b))
print("odak_kimlik'e düşen madde: %d" % len(aday))
print("olcer_hayir_app_evet (yanlış pozitif — iş sanılır, iş yok): %d" % len(fp))
for x in fp[:30]:
    print("   %s %s %s n=%d · %s" % x)
print("olcer_evet_app_hayir (yanlış negatif — tamam sanılır, kamera kıpırdamaz): %d" % len(fn))
for x in fn[:30]:
    print("   %s %s %s n=%d · %s" % x)
