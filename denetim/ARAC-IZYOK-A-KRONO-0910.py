# -*- coding: utf-8 -*-
"""IZ-YOK DENETIM A — kronoloji / savas sorgulayici (SALT OKUR).

Bir hukum notu "kronolojide su madde var" ya da "savaslar.js'te su kayit
koordinatli" diye iddia ediyorsa, bugunku veride karsiligini arar.

EVREN AYRIMI KASITLI (CLAUDE.md §5 · D124):
    CEKIRDEK  data/olaylar*.js        -> Degismez 2'nin evreni
    KUYRUK    data/kronoloji*.js      -> CANLI ama Degismez 2 disinda
Ikisi AYRI sayilir; "var" hukmu hangi kovada oldugunu da soyler.

Kullanim:
    py denetim/ARAC-IZYOK-A-KRONO-0910.py olay <arama-metni> [...]
    py denetim/ARAC-IZYOK-A-KRONO-0910.py gun <YYYY-MM-DD> [...]
    py denetim/ARAC-IZYOK-A-KRONO-0910.py savas <arama-metni> [...]
"""
import os, sys, io, glob, re, json, importlib.util

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(KOK, "data")

_np = os.path.join(KOK, "denetim", "ARAC-NORMAL-0903.py")
_spec = importlib.util.spec_from_file_location("arac_normal_0903", _np)
_m = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(_m)
norm = _m.norm
NORM_KAYNAK = "ARAC-NORMAL-0903.py::norm"


def kayitlar(dosya):
    """Bir JS veri dosyasindan kaba kayit dilimleri cikarir.

    Ayristirma DEGIL, DILIMLEME: her `{ ... }` blogu bir kayit sayilir ve
    metni oldugu gibi dondurulur. Bir alani "yok" ilan etmek icin
    KULLANILMAZ; yalnizca "su metin su kaydin icinde geciyor mu" sorusu
    icin (D023: var olan ayristirici yerine gecmez).
    """
    try:
        s = open(dosya, encoding="utf-8").read()
    except Exception:
        return []
    out, derinlik, bas = [], 0, None
    for i, ch in enumerate(s):
        if ch == "{":
            if derinlik == 0:
                bas = i
            derinlik += 1
        elif ch == "}":
            derinlik -= 1
            if derinlik == 0 and bas is not None:
                out.append((bas, s[bas:i + 1]))
                bas = None
            if derinlik < 0:
                derinlik = 0
    satir_no = lambda p: s.count("\n", 0, p) + 1
    return [(satir_no(p), t) for p, t in out]


def evren():
    cek = sorted(glob.glob(os.path.join(DATA, "olaylar*.js")))
    kuy = sorted(glob.glob(os.path.join(DATA, "kronoloji*.js")))
    return [("CEKIRDEK", f) for f in cek] + [("KUYRUK", f) for f in kuy]


def kisalt(t, n=150):
    t = re.sub(r"\s+", " ", t)
    return t[:n]


def ara(esle, baslik):
    print("=" * 72)
    print(baslik)
    bulundu = 0
    for kova, f in evren():
        for satir, met in kayitlar(f):
            if esle(met):
                bulundu += 1
                print("  [%s] %s:%d" % (kova, os.path.basename(f), satir))
                print("      " + kisalt(met))
                if bulundu >= 12:
                    print("  ... (12'de kesildi)")
                    return bulundu
    if bulundu == 0:
        print("  ARANDI, YOK (evren: %d dosya)" % len(evren()))
    return bulundu


def main():
    print("# normallestirici: %s" % NORM_KAYNAK)
    kip = sys.argv[1]
    if kip == "olay":
        for a in sys.argv[2:]:
            n = norm(a)
            ara(lambda m, n=n: n in norm(m), 'KRONOLOJI ARAMASI: "%s"' % a)
    elif kip == "gun":
        for g in sys.argv[2:]:
            ara(lambda m, g=g: ('t:"%s"' % g) in m or ('t: "%s"' % g) in m,
                'GUN ARAMASI: t:"%s"' % g)
    elif kip == "savas":
        f = os.path.join(DATA, "savaslar.js")
        n_ = 0
        for a in sys.argv[2:]:
            n = norm(a)
            print("=" * 72)
            print('SAVASLAR.JS ARAMASI: "%s"' % a)
            for satir, met in kayitlar(f):
                if n in norm(met):
                    n_ += 1
                    print("  savaslar.js:%d" % satir)
                    print("      " + kisalt(met, 220))
            if n_ == 0:
                print("  ARANDI, YOK")
    else:
        print("bilinmeyen kip:", kip)


main()
