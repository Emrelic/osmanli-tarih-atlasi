# -*- coding: utf-8 -*-
"""TDV GÖVDE TARAYICI — SINIR-KAFRIKA-0907

🔴 KESMEZ. `uganda` vakasında bir çıkarıcı gövdeyi ilk "Bibliyografya"da
   kesti ve metnin %79'unu attı; sonra "Bunyoro 0 kez" diye ölçüldü,
   gerçek 13'tü. Bu alet gövdenin TAMAMINI alır ve kaç karakter aldığını
   BASAR.
🔴 SINIR KORUMALI yıl araması: çıplak alt-dizgi `533`ü "533-538" sayfa
   aralığında bulur. (?<!\d)YYYY(?!\d) kullanılır.
🔴 Türkçe harf duyarsız arama için ORTAK normalleştirici — `"İ".lower()`
   iki kod noktası verir ve sessizce kaçırır.
"""
import io
import os
import re
import sys
import unicodedata

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

TR = {ord(a): b for a, b in zip("İIıŞşĞğÜüÖöÇçÂâÎîÛû’‘", "iiissgguuooccaaiiuu''")}


def norm(s):
    s = (s or "").translate(TR)
    s = unicodedata.normalize("NFKD", s)
    s = "".join(c for c in s if not unicodedata.combining(c))
    return s.lower()


def govde(yol):
    h = io.open(yol, encoding="utf-8", errors="replace").read()
    h = re.sub(r"(?is)<script.*?</script>", " ", h)
    h = re.sub(r"(?is)<style.*?</style>", " ", h)
    h = re.sub(r"(?s)<[^>]+>", " ", h)
    h = h.replace("&nbsp;", " ").replace("&amp;", "&").replace("&#39;", "'")
    h = h.replace("&quot;", '"').replace("&lt;", "<").replace("&gt;", ">")
    h = re.sub(r"[ \t\r\f\v]+", " ", h)
    h = re.sub(r"\n\s*\n+", "\n", h)
    return h.strip()


def cumleler(t):
    # Nokta+bosluk+buyuk harf ya da satir sonu ile ayir; kisa parcalari birlestir.
    ham = re.split(r"(?<=[.!?])\s+(?=[A-ZÂÇĞİÖŞÜ])|\n", t)
    return [c.strip() for c in ham if len(c.strip()) > 25]


def main():
    if len(sys.argv) < 3:
        print("kullanim: py ARAC-SINIR-KAFRIKA-TDV-0907.py <html-yolu> <anahtar> [anahtar...]")
        print("          anahtar 'y:1925' ise SINIR KORUMALI yil aramasi yapar")
        return 2
    yol = sys.argv[1]
    anah = sys.argv[2:]
    t = govde(yol)
    print("DOSYA: %s" % os.path.basename(yol))
    print("GOVDE: %d karakter  (KESILMEDI)" % len(t))
    if len(t) < 2500:
        print("🔴 BOILERPLATE SUPHESI — govde 2500 karakterin altinda (§4④).")
    cs = cumleler(t)
    print("CUMLE: %d" % len(cs))
    print("")
    for a in anah:
        if a.startswith("y:"):
            yil = a[2:]
            rx = re.compile(r"(?<!\d)" + re.escape(yil) + r"(?!\d)")
            bul = [c for c in cs if rx.search(c)]
            etiket = "YIL %s (sinir korumali)" % yil
        else:
            na = norm(a)
            bul = [c for c in cs if na in norm(c)]
            etiket = "'%s' (Turkce normallestirilmis)" % a
        print("=== %s — %d cumle ===" % (etiket, len(bul)))
        for c in bul[:14]:
            print("   • %s" % c[:520])
        if len(bul) > 14:
            print("   ... %d cumle daha" % (len(bul) - 14))
        print("")
    return 0


if __name__ == "__main__":
    sys.exit(main())
