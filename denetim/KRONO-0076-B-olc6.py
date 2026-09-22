# -*- coding: utf-8 -*-
"""KRONO-0076-B ÖLÇÜM 6 — cizili d-hatlarinin UCLARI.

H-0103 ve H-0082/H-0087'de "nokta yok" dedigim yerlerin koordinati, zaten
CIZILI olan hattin `hat` dizisinin uclarinda duruyor olabilir. Olculuyor.
🔴 NOT: atlasin kendi koordinati bir KAYNAK DEGILDIR; bu olcum yalnizca
"hat nereye kadar cizilmis" sorusuna cevap verir.
"""
import io, json, re, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")

HEDEF = {
    "d1906-filistin-misir-hidivlik": r"C:\atlas\data\d_sinirlar_ortadogu.js",
    "d1910-libya-tunus-osmanli":     r"C:\atlas\data\d_sinirlar_ortadogu.js",
    "d1910-libya-cezayir-gadames-osmanli": r"C:\atlas\data\d_sinirlar_ortadogu.js",
    "d1923-libya-tunus":             r"C:\atlas\data\d_sinirlar_ortadogu.js",
    "d1909-osm-bg-eski":             r"C:\atlas\data\d_sinirlar.js",
}

for hid, yol in HEDEF.items():
    t = open(yol, encoding="utf-8").read()
    m = re.search(r'\{"id":"' + re.escape(hid) + r'".*?(?=\n|\}\s*,\s*\{"id")', t, re.S)
    if not m:
        print("=" * 70)
        print(hid, "-> bulunamadi")
        continue
    blok = m.group(0)
    f = re.search(r'"f":"([^"]+)"', blok)
    tt = re.search(r'"t":"([^"]+)"', blok)
    kat = re.search(r'"kategori":"([^"]+)"', blok)
    hat = re.search(r'"hat":(\[\[.*?\]\])', blok, re.S)
    print("=" * 70)
    print(hid, " f=%s t=%s kategori=%s" % (f.group(1) if f else "?",
          tt.group(1) if tt else "?", kat.group(1) if kat else "-"))
    if not hat:
        print("   hat: YOK (null)")
        continue
    try:
        noktalar = json.loads(hat.group(1))
    except Exception as e:
        print("   hat cozulemedi:", e)
        continue
    print("   nokta sayisi: %d" % len(noktalar))
    print("   BAS  ucu: lon=%.4f lat=%.4f" % (noktalar[0][0], noktalar[0][1]))
    print("   SON  ucu: lon=%.4f lat=%.4f" % (noktalar[-1][0], noktalar[-1][1]))
    kuzey = max(noktalar, key=lambda p: p[1])
    guney = min(noktalar, key=lambda p: p[1])
    print("   en KUZEY: lon=%.4f lat=%.4f" % (kuzey[0], kuzey[1]))
    print("   en GUNEY: lon=%.4f lat=%.4f" % (guney[0], guney[1]))
