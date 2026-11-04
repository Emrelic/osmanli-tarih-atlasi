"""tdv.py ara <kelime>  |  tdv.py oku <slug> <anahtar1,anahtar2,...> [pencere]
ara: TDV arama sonuçlarından madde slug'larını listeler.
oku: maddeyi çeker, gövde metninde anahtar kelimelerin geçtiği cümleleri basar."""
import sys, re, html, urllib.request, urllib.parse

UA = {"User-Agent": "Mozilla/5.0 (atlas kaynak teyidi)"}


def al(url):
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=40) as r:
        return r.geturl(), r.read().decode("utf-8", "replace")


def metin(h):
    h = re.sub(r"(?s)<script.*?</script>|<style.*?</style>", " ", h)
    h = re.sub(r"<br\s*/?>|</p>", "\n", h)
    h = re.sub(r"<[^>]+>", " ", h)
    return re.sub(r"[ \t\r]+", " ", html.unescape(h))


if sys.argv[1] == "ara":
    for q in sys.argv[2:]:
        u, h = al("https://islamansiklopedisi.org.tr/arama/?q=" + urllib.parse.quote(q))
        slugs = []
        for s in re.findall(r'href="/([a-z0-9\-]+)"', h):
            if s not in slugs and s not in ("arama", "hakkinda", "iletisim", "giris", "yardim", "kunye", "ilkeler",
                                            "duyurular", "dosyalar", "sergi-arsivi", "gecen-ayin-ilk-20-si", "iletisim-formu"):
                slugs.append(s)
        print("==", q, ":", " ".join(slugs[:25]))
else:
    slug, anah = sys.argv[2], [a.lower() for a in sys.argv[3].split(",")]
    pen = int(sys.argv[4]) if len(sys.argv) > 4 else 300
    u, h = al("https://islamansiklopedisi.org.tr/" + slug)
    t = metin(h)
    print("URL:", u, "uzunluk", len(t))
    m = re.search(r"(?s)Müellif\s*:\s*([^\n]{3,80})", t)
    if m:
        print("MÜELLİF:", m.group(1).strip())
    m = re.search(r"(?s)(TDV İslâm Ansiklopedisi,\s*[^\n]{0,40}c\.\s*\d+[^\n]{0,40})", t)
    if m:
        print("KÜNYE:", m.group(1).strip())
    tl = t.lower()
    goruldu = []
    for a in anah:
        for mm in re.finditer(re.escape(a), tl):
            i = mm.start()
            if any(abs(i - g) < pen for g in goruldu):
                continue
            goruldu.append(i)
            print("---[%s]" % a, t[max(0, i - pen):i + pen].replace("\n", " "))
