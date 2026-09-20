# -*- coding: utf-8 -*-
"""Emre'nin gorsellerindeki renkleri SAY — "acik yesil bos arazi" gercekten
sahipsiz mi, yoksa boyali bir kimlik mi? Renk kumelerini cikarir ve
renkler.py'deki devlet renkleriyle (opaklik altinda) karsilastirir.
"""
import os, sys, json, io
from collections import Counter
from PIL import Image

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIZIN = r"C:\Users\emrem\OneDrive\Desktop\ClaudEmre\kutu\giden\parti-emrelic-0074"

ADAY = {  # arac/renkler.py
    "rusya": "#4f7d4f", "eflak": "#4db34d", "bogdan": "#24905a",
    "avusturya": "#bdab3f", "prusya": "#2478d2", "almanya": "#78d028",
    "krakow-serbest-sehri": "#d224ba",
}
def hx(h):
    h = h.lstrip("#")
    return tuple(int(h[i:i+2], 16) for i in (0, 2, 4))

def kar(renk, alt, a):
    """renk'i alt zemin uzerine a opaklikla karistir."""
    return tuple(int(round(renk[i]*a + alt[i]*(1-a))) for i in range(3))

SON = {}
for ad in ("H-0007-1.png", "H-0014-1.png", "H-0015-1.png"):
    yol = os.path.join(DIZIN, ad)
    im = Image.open(yol).convert("RGB")
    w, h = im.size
    # alt serit (altyazi) haric
    kirp = im.crop((5, 5, w-5, int(h*0.85)))
    c = Counter(kirp.getdata())
    top = c.most_common(12)
    SON[ad] = {"boyut": [w, h], "en_sik_renkler": [
        {"rgb": list(r), "hex": "#%02x%02x%02x" % r, "hucre": n,
         "yuzde": round(100.0*n/sum(c.values()), 1)} for r, n in top]}
    print("==", ad, "toplam renk:", len(c))
    for r, n in top:
        print("   #%02x%02x%02x" % r, r, n, "%.1f%%" % (100.0*n/sum(c.values())))

# opaklik taramasi: hangi devlet rengi hangi opaklikta o tonlari verir
zemin_aday = [(245, 243, 236), (230, 236, 222), (214, 227, 200)]  # acik altlik tonlari
print("\n== devlet rengi x opaklik tablosu (altlik #f5f3ec) ==")
tab = {}
for k, v in ADAY.items():
    tab[k] = {}
    for a in (0.30, 0.35, 0.40, 0.45, 0.50, 0.55, 0.60):
        r = kar(hx(v), zemin_aday[0], a)
        tab[k]["%.2f" % a] = "#%02x%02x%02x" % r
    print("  ", k, v, json.dumps(tab[k]))
SON["_opaklik_tablosu"] = tab

io.open(os.path.join(KOK, "denetim", "HARITA-DURUM-0074-PIKSEL.json"), "w",
        encoding="utf-8").write(json.dumps(SON, ensure_ascii=False, indent=1))
print("yazildi")
