# -*- coding: utf-8 -*-
"""ODAK-AVRUPA-BATI-0080 — yükü (ODAKSIZ + BEYANLI) tam alanlarıyla döker.
Sınıflama `arac/odak_olc.py:sinifla` ile BİREBİR (aynı işlev çağrılır)."""
import io, json, os, sys
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
import odak_olc as O

DOSYALAR = ["kronoloji_sinir_avrupa_bati.js", "kronoloji_almanya.js",
            "kronoloji_portekiz.js", "kronoloji_hollanda.js", "kronoloji_ispanya.js",
            "kronoloji_habsburg.js", "kronoloji_fransa.js", "kronoloji_ingiltere.js",
            "kronoloji_isvec.js", "kronoloji_venedik.js", "kronoloji_lehistan.js",
            "kronoloji_italya.js", "kronoloji_italya_sehir.js"]
havuz = O.yer_havuzu()
cikti = []
say = {}
for f in DOSYALAR:
    d, h = O._oku(os.path.join(KOK, "data", f))
    if h:
        print("AYRISMADI", f, h); continue
    for o in d["kayit"]:
        sn, _ = O.sinifla(o, havuz)
        if sn in ("ODAKSIZ", "BEYANLI"):
            say[(f, sn)] = say.get((f, sn), 0) + 1
            x = {"dosya": f, "sinif_olc": sn}
            for k in ("t", "b", "devlet", "devletler", "yer_id", "kapsam_genis", "kapsam",
                      "tur", "d", "kaynak", "sinir_id"):
                if k in o:
                    x[k] = o[k]
            cikti.append(x)
for k, v in sorted(say.items()):
    print(k, v)
print("TOPLAM", len(cikti))
io.open(sys.argv[1], "w", encoding="utf-8").write(json.dumps(cikti, ensure_ascii=False, indent=1))
