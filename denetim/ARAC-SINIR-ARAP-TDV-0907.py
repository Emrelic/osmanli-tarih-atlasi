# -*- coding: utf-8 -*-
"""ARAC-SINIR-ARAP-TDV-0907 — TDV govdesini CEKER, METNE cevirir, ARAR.

`ORTAK §5` tuzaklarina karsi kurulmustur:
   ① 302        -> ÖLÜ diye damgalanir
   ④ BOILERPLATE-> govde < ESIK ise `olculemedi`, ASLA "TDV'de yok" DEGIL
   ⑧            -> aranan sayi/kelime bulununca CUMLESI basilir; "gecti"
                   demek "destekliyor" demek degildir, cumle OKUNUR
Sinir korumasi: yil aramasi (?<!\\d)YYYY(?!\\d) — "533" sayfa araliginda
eslesmesin diye (bu proje o tuzaga dustu).

Kullanim:  py denetim/ARAC-SINIR-ARAP-TDV-0907.py <slug> [anahtar ...]
"""
import sys, os, re, html, urllib.request

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

BOILERPLATE_ESIK = 4000   # ORTAK §5④ — altinda kalan govde ALINAMAMIS sayilir
ONBELLEK = os.path.join(os.path.dirname(os.path.abspath(__file__)), "_tdv_onbellek")


def govde(slug):
    os.makedirs(ONBELLEK, exist_ok=True)
    yol = os.path.join(ONBELLEK, slug + ".txt")
    if os.path.exists(yol) and os.path.getsize(yol) > 0:
        return open(yol, encoding="utf-8").read(), "onbellek"
    url = "https://islamansiklopedisi.org.tr/" + slug
    istek = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(istek, timeout=45) as r:
        ham = r.read().decode("utf-8", errors="replace")
        son = r.geturl()
    if "/arama" in son or son.rstrip("/").endswith("islamansiklopedisi.org.tr"):
        return "", "OLU (arama sayfasina yonlendi)"
    g = re.sub(r"(?is)<(script|style|noscript)[^>]*>.*?</\1>", " ", ham)
    g = re.sub(r"(?s)<[^>]+>", " ", g)
    g = html.unescape(g)
    g = re.sub(r"[ \t\xa0]+", " ", g)
    g = re.sub(r"\n\s*\n+", "\n", g).strip()
    open(yol, "w", encoding="utf-8").write(g)
    return g, "cekildi"


def cumleler(metin):
    return [c.strip() for c in re.split(r"(?<=[.!?])\s+|\n", metin) if c.strip()]


def main():
    slug = sys.argv[1]
    anahtarlar = sys.argv[2:]
    g, nasil = govde(slug)
    print("SLUG      : %s   (%s)" % (slug, nasil))
    print("KARAKTER  : %d" % len(g))
    if not g:
        print("HAL       : 🔴 OLU — kayit 'bulunamadi' DEGIL, adres olu; baska slug dene")
        return
    if len(g) < BOILERPLATE_ESIK:
        print("HAL       : ⚪ OLCULEMEDI — govde BOILERPLATE olabilir (< %d)" % BOILERPLATE_ESIK)
        print("            'TDV'de yok' YAZILMAZ (ORTAK §5④).")
    else:
        print("HAL       : 🟢 govde alindi")
    cs = cumleler(g)
    for a in anahtarlar:
        if re.fullmatch(r"\d{3,4}", a):
            desen = re.compile(r"(?<!\d)" + a + r"(?!\d)")
        else:
            desen = re.compile(re.escape(a), re.IGNORECASE)
        vurus = [c for c in cs if desen.search(c)]
        print("\n--- ARANAN: %s   ·  eslesen cumle: %d ---" % (a, len(vurus)))
        for c in vurus[:8]:
            print("   " + c[:400])


if __name__ == "__main__":
    main()
