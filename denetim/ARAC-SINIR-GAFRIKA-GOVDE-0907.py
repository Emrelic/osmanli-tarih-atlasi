# -*- coding: utf-8 -*-
"""ARAC-SINIR-GAFRIKA-GOVDE-0907 — TDV govdesinden CUMLE cikarir.

NICIN   Bir slug'in CANLI olmasi "gerekli bilgiyi tasidigi" anlamina gelmez
        (`§4②`). Ve bir rakamin govdede GECMESI, govdenin o degeri
        DESTEKLEDIGI anlamina gelmez (`§4⑧`). O yuzden bu alet HUKUM
        VERMEZ — yalniz ARANAN kelimenin gectigi CUMLEYI dokup gosterir;
        hukmu okuyan verir.

SINIRLARI — onceden yaziliyor:
  · govde KESILMEZ (`uganda` vakasi: ilk "Bibliyografya"da kesmek metnin
    %79'unu atmisti)
  · kelime aramasi HARF DUYARSIZ ama KELIME SINIRLI (`ahar` ↔ `baHARati`)
  · kac karakter okundugu HER ZAMAN basilir — "yok" hukmu ancak govde
    gercekten alinmissa verilebilir (`§4④` boilerplate tuzagi)
"""
import io
import os
import re
import sys
import time
import urllib.request

try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TDV = "https://islamansiklopedisi.org.tr/%s"
BOILERPLATE_ESIK = 4000     # altinda kalan govde `§4④` adayidir


def govde(slug, deneme=4):
    # 🔴 `§4⑤`: tasima arizasi bir HTTP kodu DEGILDIR. Tek deneme "olu"
    # damgasi VERDIRMEZ — bu yuzden yeniden deniyoruz ve tukenirse
    # "OLCULEMEDI" yaziyoruz, "OLU" degil.
    son_hata = ""
    for i in range(deneme):
        try:
            r = urllib.request.urlopen(
                urllib.request.Request(TDV % slug,
                                       headers={"User-Agent": "Mozilla/5.0"}),
                timeout=40)
            ham = r.read().decode("utf-8", "replace")
            son = r.geturl()
            break
        except Exception as e:
            son_hata = str(e)[:90]
            time.sleep(2 + 3 * i)
    else:
        return None, "OLCULEMEDI (%d deneme): %s" % (deneme, son_hata), ""
    if "arama" in son:
        return None, "OLU (arama sayfasina yonlendi)", son
    m = re.sub(r"(?is)<(script|style)[^>]*>.*?</\1>", " ", ham)
    m = re.sub(r"(?s)<[^>]+>", " ", m)
    m = (m.replace("&nbsp;", " ").replace("&amp;", "&")
          .replace("&#39;", "'").replace("&quot;", '"'))
    m = re.sub(r"\s+", " ", m).strip()
    return m, "OK", son


def cumleler(metin, kelimeler, azami=3):
    parcalar = re.split(r"(?<=[.!?])\s+", metin)
    bulunan = []
    for p in parcalar:
        for k in kelimeler:
            if re.search(r"(?<![0-9A-Za-zÇĞİÖŞÜçğıöşü])%s" % re.escape(k),
                         p, re.IGNORECASE):
                bulunan.append((k, p.strip()))
                break
        if len(bulunan) >= azami:
            break
    return bulunan


def main():
    if len(sys.argv) < 3:
        print("kullanim: py ARAC-...-GOVDE-0907.py <slug> <kelime> [kelime...]")
        return 2
    sluglar, kelimeler = sys.argv[1].split(","), sys.argv[2:]
    hata = 0
    for slug in sluglar:
        m, hal, son = govde(slug)
        if m is None:
            print("%-22s %s" % (slug, hal))
            hata = 1
            continue
        print("%-22s govde %d karakter%s" % (
            slug, len(m),
            "  🔴 BOILERPLATE SUPHESI" if len(m) < BOILERPLATE_ESIK else ""))
        bulundu = cumleler(m, kelimeler)
        if not bulundu:
            print("   ⚪ aranan kelimelerin HICBIRI gecmiyor: %s"
                  % ", ".join(kelimeler))
            continue
        for k, c in bulundu:
            print("   [%s] %s" % (k, c[:420]))
    return hata


if __name__ == "__main__":
    sys.exit(main())
