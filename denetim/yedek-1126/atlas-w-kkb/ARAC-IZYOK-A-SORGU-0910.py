# -*- coding: utf-8 -*-
"""IZ-YOK DENETIM A — atlas sorgulayici (SALT OKUR).

Bir hukum notu "su kayit su donemi tasiyor" diye IDDIA ediyorsa, o iddianin
BUGUNKU veride karsiligi var mi diye sorar.

Ad tuzagi (CLAUDE.md §4 · "I".lower() iki kod noktasi verir) icin
denetim/ARAC-NORMAL-0903.py normallestiricisi kullanilir; bulunamazsa
yerel bir kopyasi devreye girer ve bu DAMGALANIR.

Kullanim:
    py denetim/ARAC-IZYOK-A-SORGU-0910.py yer <ad-parcasi> [...]
    py denetim/ARAC-IZYOK-A-SORGU-0910.py kimlik <kimlik-id>   # kac kayitta
"""
import os, sys, io, importlib.util

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))

# --- normallestirici: ONCE var olani kullan (D023: kendi yazdigin ayristirici
#     var olandan her zaman kotudur). Yoksa yerel kopya + DAMGA.
NORM_KAYNAK = "?"
_spec = None
_np = os.path.join(KOK, "denetim", "ARAC-NORMAL-0903.py")
if os.path.isfile(_np):
    try:
        _spec = importlib.util.spec_from_file_location("arac_normal_0903", _np)
        _m = importlib.util.module_from_spec(_spec)
        _spec.loader.exec_module(_m)
        for _ad in ("norm", "normal", "normallestir", "nrm"):
            if hasattr(_m, _ad):
                norm = getattr(_m, _ad)
                NORM_KAYNAK = "ARAC-NORMAL-0903.py::" + _ad
                break
    except Exception as e:
        NORM_KAYNAK = "ARAC-NORMAL-0903.py YUKLENEMEDI: %s" % e

if NORM_KAYNAK in ("?",) or NORM_KAYNAK.startswith("ARAC-NORMAL-0903.py YUKLENEMEDI"):
    import unicodedata
    _TR = {ord("İ"): "i", ord("I"): "i", ord("ı"): "i", ord("Ş"): "s", ord("ş"): "s",
           ord("Ğ"): "g", ord("ğ"): "g", ord("Ü"): "u", ord("ü"): "u",
           ord("Ö"): "o", ord("ö"): "o", ord("Ç"): "c", ord("ç"): "c",
           ord("Â"): "a", ord("â"): "a", ord("Î"): "i", ord("î"): "i",
           ord("Û"): "u", ord("û"): "u", ord("’"): "'", ord("‘"): "'"}

    def norm(s):
        s = (s or "").translate(_TR)
        s = unicodedata.normalize("NFKD", s)
        s = "".join(ch for ch in s if not unicodedata.combining(ch))
        return s.lower()
    if NORM_KAYNAK == "?":
        NORM_KAYNAK = "YEREL KOPYA (ARAC-NORMAL-0903.py yok)"

import girdi

Y = girdi.yukle(sessiz=True)


def don_yaz(y):
    sat = []
    for p in (y.get("d") or []):
        sat.append("  d: %s -> %s   OSMANLI" % (p.get("f"), p.get("t")))
    for p in (y.get("v") or []):
        sat.append("  v: %s -> %s   tabi:%s" % (p.get("f"), p.get("t"), p.get("d")))
    for p in (y.get("s") or []):
        sat.append("  s: %s -> %s   %s" % (p.get("f"), p.get("t"), p.get("d")))
    for p in (y.get("isg") or []):
        sat.append("  isg: %s -> %s  %s" % (p.get("f"), p.get("t"), p.get("d")))
    sat.sort(key=lambda s: s.split(":")[1].strip()[:10])
    return sat


def main():
    print("# normallestirici: %s" % NORM_KAYNAK)
    print("# taban: girdi.GIRDI_DOSYALARI = %d dosya · %d nokta"
          % (len(girdi.GIRDI_DOSYALARI), len(Y)))
    kip = sys.argv[1]
    if kip == "yer":
        for arg in sys.argv[2:]:
            a = norm(arg)
            bul = [y for y in Y if a in norm(y.get("ad", ""))]
            print("=" * 70)
            print('ARANAN "%s"  ->  %d eslesme' % (arg, len(bul)))
            for y in bul:
                print("--- %s   (%s, %s)  kur:%s  kaynak-dosya:%s"
                      % (y.get("ad"), y.get("lat"), y.get("lon"),
                         y.get("kur"), y.get("_dosya", "?")))
                for s in don_yaz(y):
                    print(s)
    elif kip == "kimlik":
        for arg in sys.argv[2:]:
            n = 0
            ornek = []
            for y in Y:
                for anahtar in ("s", "v", "isg"):
                    for p in (y.get(anahtar) or []):
                        if p.get("d") == arg:
                            n += 1
                            if len(ornek) < 8:
                                ornek.append("%s %s %s->%s"
                                             % (y.get("ad"), anahtar, p.get("f"), p.get("t")))
            print('KIMLIK "%s" -> %d donemde' % (arg, n))
            for o in ornek:
                print("   ", o)
    else:
        print("bilinmeyen kip:", kip)


main()
