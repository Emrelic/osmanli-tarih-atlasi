# -*- coding: utf-8 -*-
"""EKOKUMA-0076-B — TDV madde gövdesi çıkarıcı.

`arac/` DONMUŞ (ORTAK-0076 §2) olduğu için alet buraya yazıldı.
Kullanım:  py denetim/EKOKUMA-0076-B-tdv.py <slug> [<slug> ...]
           py denetim/EKOKUMA-0076-B-tdv.py --ara <kelime>

Gövde `islamansiklopedisi.org.tr/<slug>` sayfasının HTML'inden doğrudan
çıkarılır; özet aracına güvenilmez (CLAUDE.md §4, TDV tuzağı ⑦).
Çıktı `denetim/EKOKUMA-0076-B-tdv-onbellek/<slug>.txt` dosyasına da yazılır ki aynı madde
iki kez indirilmesin (ORTAK-0076 §1 ④ "aynı ölçümü iki kez yapma").
"""
import html
import io
import os
import re
import sys
import urllib.parse
import urllib.request

KOK = os.path.dirname(os.path.abspath(__file__))
ONBELLEK = os.path.join(KOK, "EKOKUMA-0076-B-tdv-onbellek")
BAS = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
                     "(KHTML, like Gecko) Chrome/124.0 Safari/537.36"}


def indir(url):
    istek = urllib.request.Request(url, headers=BAS)
    with urllib.request.urlopen(istek, timeout=60) as c:
        ham = c.read()
        return c.geturl(), c.status, ham.decode("utf-8", "replace")


def metne_cevir(h):
    h = re.sub(r"(?is)<script.*?</script>", " ", h)
    h = re.sub(r"(?is)<style.*?</style>", " ", h)
    h = re.sub(r"(?is)<nav.*?</nav>", " ", h)
    h = re.sub(r"(?is)<footer.*?</footer>", " ", h)
    h = re.sub(r"(?i)<br\s*/?>", "\n", h)
    h = re.sub(r"(?i)</(p|div|li|h[1-6]|tr)>", "\n", h)
    h = re.sub(r"(?s)<[^>]+>", " ", h)
    h = html.unescape(h)
    h = re.sub(r"[ \t ]+", " ", h)
    h = re.sub(r"\n\s*\n\s*\n+", "\n\n", h)
    satir = [s.strip() for s in h.split("\n")]
    return "\n".join(s for s in satir if s)


def madde(slug):
    yol = os.path.join(ONBELLEK, slug.replace("/", "_") + ".txt")
    if os.path.exists(yol):
        return io.open(yol, encoding="utf-8").read(), "ONBELLEK"
    url = "https://islamansiklopedisi.org.tr/" + slug
    son, kod, h = indir(url)
    if son.rstrip("/") != url.rstrip("/"):
        return "🔴 YONLENDIRME (olu slug olabilir): %s -> %s" % (url, son), "302"
    m = metne_cevir(h)
    if not os.path.isdir(ONBELLEK):
        os.makedirs(ONBELLEK)
    io.open(yol, "w", encoding="utf-8").write(m)
    return m, str(kod)


def ara(kelime):
    url = "https://islamansiklopedisi.org.tr/arama/?q=" + urllib.parse.quote(kelime)
    son, kod, h = indir(url)
    m = metne_cevir(h)
    return m


def govde(m):
    """Sayfanın boilerplate'ini atıp yalnız madde metnini döndürür.

    TDV tuzağı ④ (CLAUDE.md §4): boilerplate gövde "çekilemedi" demektir,
    "yok" demez — bu yüzden kırpma BAŞARISIZ olursa metin OLDUĞU GİBİ döner
    ve başına uyarı konur; sessizce boş dönmez.
    """
    bas = m.find("Kopyalama metni")
    son = m.find("BİBLİYOGRAFYA")
    if son < 0:
        son = m.find("Bu madde TDV İslâm Ansiklopedisi’nin")
    if bas < 0 or son < 0 or son <= bas:
        return "⚠️ GÖVDE KIRPILAMADI (ham metin):\n" + m
    return m[bas + len("Kopyalama metni"):son].strip()


def main():
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    a = sys.argv[1:]
    if not a:
        print(__doc__)
        return
    if a[0] == "--ara":
        print(ara(" ".join(a[1:]))[:6000])
        return
    ham = False
    if a[0] == "--ham":
        ham, a = True, a[1:]
    for slug in a:
        m, nereden = madde(slug)
        g = m if ham else govde(m)
        print("=" * 78)
        print("### SLUG:", slug, "  (", nereden, ", gövde ", len(g), " / ham ",
              len(m), " karakter )", sep="")
        print("=" * 78)
        print(g)


if __name__ == "__main__":
    main()
