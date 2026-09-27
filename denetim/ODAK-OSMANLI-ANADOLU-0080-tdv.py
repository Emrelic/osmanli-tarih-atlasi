"""TDV madde çekici + cümle arayıcı (yalnız okur, önbelleğe yazar).

Kullanım: py denetim/ODAK-OSMANLI-ANADOLU-0080-tdv.py <slug> [<kelime> …]
  · gövde denetim/ODAK-OSMANLI-ANADOLU-0080-tdv-onbellek/<slug>.txt'e yazılır
  · HTTP kodu basılır (302 = ölü slug, CLAUDE.md §4 tuzak ①; 000 = taşıma arızası)
  · kelime verilirse o kelimeyi taşıyan CÜMLELER basılır (tuzak ⑧: rakamı taşıyan
    cümle okunur, gövdede geçmesi yetmez)
"""
import html
import os
import re
import sys
import urllib.error
import urllib.request

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIZ = os.path.join(KOK, "denetim", "ODAK-OSMANLI-ANADOLU-0080-tdv-onbellek")
os.makedirs(DIZ, exist_ok=True)


class _Yonsuz(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, *a, **k):
        return None


def cek(slug):
    yol = os.path.join(DIZ, slug + ".txt")
    if os.path.exists(yol):
        return "önbellek", open(yol, encoding="utf-8").read()
    url = "https://islamansiklopedisi.org.tr/" + slug
    op = urllib.request.build_opener(_Yonsuz)
    try:
        r = op.open(urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"}), timeout=40)
        kod, ham = r.status, r.read().decode("utf-8", "replace")
    except urllib.error.HTTPError as e:
        return str(e.code), ""
    except Exception as e:  # noqa: BLE001
        return "000 " + str(e)[:80], ""
    m = re.search(r'<div[^>]*class="[^"]*(?:madde-content|article-content|makale)[^"]*"[^>]*>(.*?)</section>',
                  ham, re.S)
    govde = m.group(1) if m else ham
    govde = re.sub(r"<script.*?</script>|<style.*?</style>", " ", govde, flags=re.S)
    metin = html.unescape(re.sub(r"<[^>]+>", " ", govde))
    metin = re.sub(r"\s+", " ", metin).strip()
    open(yol, "w", encoding="utf-8").write(metin)
    return str(kod), metin


slug = sys.argv[1]
kod, metin = cek(slug)
print("%s · HTTP %s · %d karakter" % (slug, kod, len(metin)))
cumleler = re.split(r"(?<=[.!?])\s+", metin)
for k in sys.argv[2:]:
    kk = k.lower()
    hit = [c for c in cumleler if kk in c.lower()]
    print("-- %s : %d cümle" % (k, len(hit)))
    for c in hit[:6]:
        print("   · " + c[:420])
