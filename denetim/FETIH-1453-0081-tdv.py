# FETIH-1453-0081 — TDV önbelleğinden 1453 kuşatması gün tanıklıklarını çıkarır.
# Her madde için: gövde uzunluğu · kuşatma anahtar kelime sayımı · tarihli bağlamlar.
# Koş: py denetim/FETIH-1453-0081-tdv.py > denetim/FETIH-1453-0081-tdv-cikti.txt
import re, sys, io, html, pathlib
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
K = pathlib.Path(__file__).parent / "FETIH-1453-0081-tdv-onbellek"
GUN = re.compile(r"\b(\d{1,2})(-\d{1,2})?\s+(Nisan|Mayıs|Mart)(’[a-zı]+|\s+1453)?")
ANAH = ["rum ateşi", "grejuva", "urban", "orban", "zincir", "hendek", "yürüyen kule",
        "tünel", "lağım", "kerkoporta", "karadan", "büyük top", "ceneviz gemi"]

for p in sorted(K.glob("*.html")):
    if p.stat().st_size < 1000 or p.name.startswith("arama"):
        continue
    h = p.read_text(encoding="utf-8", errors="ignore")
    h = re.sub(r"<script.*?</script>|<style.*?</style>", " ", h, flags=re.S)
    t = re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ", h)))
    low = t.lower()
    sayim = {a: low.count(a) for a in ANAH if low.count(a)}
    hits = []
    for m in GUN.finditer(t):
        w = t[max(0, m.start() - 250):m.end() + 150]
        wl = w.lower()
        if "1453" in w or "muhasara" in wl or "kuşatma" in wl or "haliç" in wl:
            hits.append(m.group(0) + " ⟶ …" + w + "…")
    print("=" * 70)
    print(p.name, "gövde", len(t), "· anahtar", sayim, "·", len(hits), "tarih")
    for x in hits:
        print(" -", x)
