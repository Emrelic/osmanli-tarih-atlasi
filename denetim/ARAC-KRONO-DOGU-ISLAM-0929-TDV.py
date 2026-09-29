# KRONO-DOGU-ISLAM-0929 — TDV maddesi çek / önbellekte ara / metinde bağlamla bul.
# Kullanım:
#   py denetim/ARAC-KRONO-DOGU-ISLAM-0929-TDV.py cek <slug> [...]      (önce bütün denetim/*onbellek* taranır)
#   py denetim/ARAC-KRONO-DOGU-ISLAM-0929-TDV.py arama:<kelime>
#   py denetim/ARAC-KRONO-DOGU-ISLAM-0929-TDV.py bul <slug> <regex> [baglam=300]
# Kendi önbelleği: denetim/KRONO-DOGU-ISLAM-0929-tdv-onbellek/<slug>.txt
# TDV tuzakları (CLAUDE.md §4): 302 = ölü slug · kısa gövde = boş/boilerplate · 000 = taşıma arızası.
import sys, re, os, html, glob, urllib.request, urllib.error, urllib.parse
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
DEN = os.path.dirname(os.path.abspath(__file__))
KOK = os.path.join(DEN, "KRONO-DOGU-ISLAM-0929-tdv-onbellek")
os.makedirs(KOK, exist_ok=True)


class Yonlenmez(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, *a, **k):
        return None


acici = urllib.request.build_opener(Yonlenmez)


def cek_url(url):
    istek = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    try:
        r = acici.open(istek, timeout=40)
        return r.status, r.read().decode("utf-8", "replace"), ""
    except urllib.error.HTTPError as e:
        return e.code, "", e.headers.get("Location", "")
    except Exception as e:
        return 0, "", str(e)


def duz(h):
    t = re.sub(r"<script.*?</script>", " ", h, flags=re.S | re.I)
    t = re.sub(r"<style.*?</style>", " ", t, flags=re.S | re.I)
    t = re.sub(r"<(br|/p|/div|/h\d|/li)[^>]*>", "\n", t, flags=re.I)
    t = re.sub(r"<[^>]+>", " ", t)
    t = html.unescape(t)
    t = re.sub(r"[ \t\r\f\v]+", " ", t)
    t = re.sub(r"\n\s*\n+", "\n", t)
    return t.strip()


def onbellekte(slug):
    kendi = os.path.join(KOK, slug + ".txt")
    if os.path.exists(kendi) and os.path.getsize(kendi) > 3000:
        return kendi
    for yol in glob.glob(os.path.join(DEN, "*onbellek*", slug + ".txt")) + \
            glob.glob(os.path.join(DEN, "*onbellek*", slug + ".html")):
        if os.path.getsize(yol) > 3000:
            return yol
    return None


def metin(slug):
    yol = onbellekte(slug)
    if yol:
        t = open(yol, encoding="utf-8", errors="replace").read()
        return (duz(t) if yol.endswith(".html") else t), yol, "önbellek"
    kod, h, yer = cek_url("https://islamansiklopedisi.org.tr/" + slug)
    t = duz(h) if h else ""
    if kod == 200 and t:
        open(os.path.join(KOK, slug + ".txt"), "w", encoding="utf-8").write(t)
    return t, None, f"HTTP {kod} {('-> ' + yer) if yer else ''}"


if __name__ == "__main__":
    a = sys.argv[1:]
    if a and a[0].startswith("arama:"):
        q = a[0][6:]
        kod, h, _ = cek_url("https://islamansiklopedisi.org.tr/arama/?q=" + urllib.parse.quote(q))
        slugs = sorted(set(re.findall(r'href="/([a-z0-9\-]+)"', h)))
        print(f"ARAMA {q}: {kod} ·", " ".join(s for s in slugs if len(s) > 3)[:2500])
    elif a and a[0] == "cek":
        for slug in a[1:]:
            t, yol, durum = metin(slug)
            print(f"{slug}: {durum} {yol or ''} · {len(t)} karakter")
    elif a and a[0] == "bul":
        slug, rx = a[1], a[2]
        bag = int(a[3]) if len(a) > 3 else 300
        t, yol, durum = metin(slug)
        print(f"## {slug} ({durum}, {len(t)} kr)")
        for m in re.finditer(rx, t, flags=re.I):
            s, e = max(0, m.start() - bag), min(len(t), m.end() + bag)
            print("…" + t[s:e].replace("\n", " ") + "…\n")
