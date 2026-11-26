# -*- coding: utf-8 -*-
"""
SINIR-BALKAN-0907 · govde icinde CUMLE arayici
§11: eslesme bulmak, dogru seyi bulmak degildir -> CUMLEYI basar, rakami degil.
§4: yil aramasi SINIR KORUMALI - yoksa sayfa numarasi tarih sanilir.
Turkce buyuk/kucuk harf: ARAC-NORMAL ailesi ile normallestirir (i/I/ı/İ tuzagi).
"""
import sys, io, os, re, glob
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIZ = os.path.join(KOK, "denetim", "_tdv_balkan_0907")

CEV = {"İ": "i", "I": "i", "ı": "i", "Ş": "s", "ş": "s", "Ğ": "g", "ğ": "g",
       "Ü": "u", "ü": "u", "Ö": "o", "ö": "o", "Ç": "c", "ç": "c",
       "Â": "a", "â": "a", "Î": "i", "î": "i", "Û": "u", "û": "u", "’": "'"}


def norm(s):
    return "".join(CEV.get(c, c) for c in s).lower()


def cumleler(metin):
    return re.split(r"(?<=[.!?])\s+", metin)


def ara(dosya, desenler, baglam=0):
    with open(dosya, encoding="utf-8") as f:
        m = f.read()
    cs = cumleler(m)
    nc = [norm(c) for c in cs]
    bulunan = []
    for i, c in enumerate(nc):
        for d in desenler:
            if re.search(d, c):
                a = max(0, i - baglam)
                b = min(len(cs), i + baglam + 1)
                bulunan.append((d, " ".join(cs[a:b]).strip()))
                break
    return bulunan


if __name__ == "__main__":
    slug = sys.argv[1]
    desenler = sys.argv[2:]
    yol = os.path.join(DIZ, slug + ".txt")
    if not os.path.exists(yol):
        print("YOK:", yol); sys.exit(1)
    print("### %s  (%d kar)" % (slug, os.path.getsize(yol)))
    b = ara(yol, [norm(d) for d in desenler])
    if not b:
        print("  ESLESME YOK  <- 'yok' ile 'bakmadim' AYRI: bu ARANDI")
    for d, c in b:
        print("  [%s] %s" % (d, re.sub(r"\s+", " ", c)[:700]))
