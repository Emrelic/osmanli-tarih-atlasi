# -*- coding: utf-8 -*-
"""ODAK-DOGU-ISLAM-0080 — TDV maddesini indirir, gövde metnini çıkarır, önbelleğe yazar.
    py denetim/ODAK-DOGU-ISLAM-0080-tdv.py <slug> [<slug> ...]
    py denetim/ODAK-DOGU-ISLAM-0080-tdv.py --ara <slug> <kelime> [<kelime> ...]   önbellekte bağlamlı ara
HTTP kodu basılır (302 = ölü slug, CLAUDE.md §4 tuzak ①); boş gövde 'BOŞ' diye basılır (tuzak ③)."""
import html, io, os, re, sys, urllib.request, urllib.error
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.abspath(__file__))
OB = os.path.join(KOK, "ODAK-DOGU-ISLAM-0080-tdv-onbellek")
os.makedirs(OB, exist_ok=True)


class NoRedir(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, *a, **k):
        return None


def indir(slug):
    yol = os.path.join(OB, slug + ".txt")
    if os.path.exists(yol):
        return io.open(yol, encoding="utf-8").read(), "önbellek"
    url = "https://islamansiklopedisi.org.tr/" + slug
    op = urllib.request.build_opener(NoRedir)
    try:
        r = op.open(urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"}), timeout=40)
        kod = r.status
        h = r.read().decode("utf-8", "replace")
    except urllib.error.HTTPError as e:
        return "", "HTTP %s" % e.code
    except Exception as e:  # noqa: BLE001
        return "", "TAŞIMA ARIZASI %s" % e
    h = re.sub(r"(?is)<(script|style)[^>]*>.*?</\1>", " ", h)
    m = re.search(r'(?is)<div[^>]+class="[^"]*(article-content|madde-metni|text-justify)[^"]*".*', h)
    govde = m.group(0) if m else h
    t = html.unescape(re.sub(r"(?s)<[^>]+>", " ", govde))
    t = re.sub(r"[ \t\r\f\v]+", " ", t)
    t = re.sub(r"\n\s*\n+", "\n", t).strip()
    io.open(yol, "w", encoding="utf-8").write(t)
    return t, "HTTP %s" % kod


def main():
    if sys.argv[1] == "--ara":
        slug = sys.argv[2]
        t, d = indir(slug)
        print("## %s (%s, %d karakter)" % (slug, d, len(t)))
        for k in sys.argv[3:]:
            for m in re.finditer(re.escape(k), t, re.I):
                print("  [%s] …%s…" % (k, t[max(0, m.start() - 220):m.end() + 220].replace("\n", " ")))
        return
    for s in sys.argv[1:]:
        t, d = indir(s)
        print("%-40s %-14s %s" % (s, d, "BOŞ" if len(t) < 500 else "%d karakter" % len(t)))


if __name__ == "__main__":
    main()
