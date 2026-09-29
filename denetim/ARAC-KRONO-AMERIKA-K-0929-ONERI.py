# -*- coding: utf-8 -*-
"""KRONO-AMERIKA-K-0929 — yazdığım maddelerin haritadaki yerleşim penceresiyle GÜN FARKI tablosu.

Her maddenin `yer_id`si atlasta bir noktadır. O noktanın `s:` penceresi maddenin yılında başlıyor/bitiyorsa ve günü
maddenin kaynaklı gününden farklıysa (çoğu `…-01-01` yıl işareti) tabloya girer. `data/yerlesimler*.js`e DOKUNULMAZ:
bu yalnız ÖNERİdir (`CLAUDE.md §7` — dosya Oturum 0'ındır); koordinatör biriktirip tek koşuda uygular.

    py denetim/ARAC-KRONO-AMERIKA-K-0929-ONERI.py            tabloyu basar (markdown)
"""
import contextlib
import importlib.util
import io
import json
import os
import sys
from datetime import date

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))


def gun(t):
    return date(int(t[:4]), int(t[5:7]), int(t[8:10])).toordinal()


def main():
    spec = importlib.util.spec_from_file_location("uret", os.path.join(KOK, "denetim", "ARAC-KRONO-AMERIKA-K-0929-URET.py"))
    u = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(u)
    with contextlib.redirect_stdout(io.StringIO()):
        import girdi
        Y = girdi.yukle()
    Y = Y[0] if isinstance(Y, tuple) else Y
    ix = {}
    for y in Y:
        ix.setdefault(y["ad"], y)
    satirlar = []
    for m in sorted(u.ITEMS, key=lambda m: m["t"]):
        ad = m.get("yer_id") or ""
        y = ix.get(ad)
        if not y:
            continue
        sinirlar = {e.get(k) for e in (y.get("s") or []) for k in ("f", "t")}
        if m["t"] in sinirlar:                       # pencere zaten o günde açılıp/kapanıyor — öneri gerekmez
            continue
        for e in (y.get("s") or []):
            if e.get("d") not in m["devletler"]:     # yalnız maddenin künyesindeki pencere
                continue
            for uc in ("f", "t"):
                v = e.get(uc)
                if v and v != m["t"] and abs(gun(v) - gun(m["t"])) <= 366:
                    satirlar.append((m["t"], ad, y.get("_kaynak", "?"), e, uc, v, abs(gun(v) - gun(m["t"]))))
    print("| madde günü | yerleşim | dosya | mevcut `s:` girdisi | fark | önerilen |")
    print("|---|---|---|---|---|---|")
    for t, ad, dosya, e, uc, v, fark in satirlar:
        yeni = dict(e)
        yeni[uc] = t
        print("| %s | %s | %s | `%s` | %d gün | `%s` |" % (
            t, ad, dosya, json.dumps(e, ensure_ascii=False), fark, json.dumps(yeni, ensure_ascii=False)))
    print("\n%d satır" % len(satirlar), file=sys.stderr)


if __name__ == "__main__":
    main()
