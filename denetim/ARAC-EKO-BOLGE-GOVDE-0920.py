# -*- coding: utf-8 -*-
"""EKO-BOLGE-0073 · TDV madde govdesi cekici (20 Eylul 2026).

Kullanim:  py denetim/ARAC-EKO-BOLGE-GOVDE-0920.py <slug> [<slug> ...]
Cikti:     denetim/_govde_ekobolge/<slug>.txt   (duz metin)
Yonlendirme IZLENMEZ: 302 = olu slug (CLAUDE.md §4 TDV tuzagi (1)), govde yazilmaz.
Kaynak sablon: denetim/ARAC-BASRA-GOVDE-0917.py (ayni metne() cevirici).
"""
import sys, os, re, html, time, urllib.request, urllib.error

sys.stdout.reconfigure(encoding="utf-8")
KOK = os.path.dirname(os.path.abspath(__file__))
CIKTI = os.path.join(KOK, "_govde_ekobolge")


class Tut(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, *a, **k):
        return None


def metne(ham):
    g = re.sub(r"(?is)<(script|style|noscript)[^>]*>.*?</\1>", " ", ham)
    g = re.sub(r"(?s)<[^>]+>", " ", g)
    g = html.unescape(g)
    g = re.sub(r"[ \t\xa0]+", " ", g)
    return re.sub(r"\n\s*\n+", "\n", g).strip()


def cek(slug):
    os.makedirs(CIKTI, exist_ok=True)
    yol = os.path.join(CIKTI, slug + ".txt")
    if os.path.exists(yol) and os.path.getsize(yol) > 0:
        return "onbellek", os.path.getsize(yol)
    url = "https://islamansiklopedisi.org.tr/" + slug
    try:
        o = urllib.request.build_opener(Tut)
        with o.open(urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"}), timeout=60) as r:
            ham = r.read().decode("utf-8", errors="replace")
    except urllib.error.HTTPError as e:
        return "kod-%d" % e.code, 0
    except Exception as e:
        return "000-" + type(e).__name__, 0
    metin = metne(ham)
    open(yol, "w", encoding="utf-8").write(metin)
    time.sleep(0.5)
    return "cekildi", len(metin)


if __name__ == "__main__":
    for s in sys.argv[1:]:
        durum, boy = cek(s)
        print("%-32s %-10s %d" % (s, durum, boy))
