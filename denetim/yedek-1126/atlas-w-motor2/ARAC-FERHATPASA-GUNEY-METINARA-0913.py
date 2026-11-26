# -*- coding: utf-8 -*-
"""FERHATPASA-GUNEY — DÜZ METİN / PDF'TE ANAHTAR ARAMA, BAĞLAMLI (SALT OKUR)

Niçin ayrı alet: `py -c` Türkçe/tırnakla sessizce boşalıyor (§11 PY-C
koruması). Alet bir URL ya da yerel yol alır; URL ise scratch klasörüne
bir kez indirir (aynı bayt tekrar tekrar çekilmesin — belge sabitlenir).

  · .pdf  → pypdf, sayfa numarasıyla (§4⑦: metinsiz sayfa sayısı basılır)
  · diğer → düz metin (archive.org djvu.txt gibi), karakter konumuyla

Kullanım:
  py denetim/ARAC-FERHATPASA-GUNEY-METINARA-0913.py <url|yol> <bağlam_kar> <anahtar> [...]
Ortam: FPG_CACHE (varsayılan: %TEMP%/fpg)
"""
import sys, io, os, re, hashlib, urllib.request

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
kaynak, bag = sys.argv[1], int(sys.argv[2])
anah = sys.argv[3:]
CACHE = os.environ.get("FPG_CACHE", os.path.join(os.environ.get("TEMP", "."), "fpg"))
os.makedirs(CACHE, exist_ok=True)

if kaynak.startswith("http"):
    ad = hashlib.sha1(kaynak.encode()).hexdigest()[:12] + os.path.splitext(kaynak.split("?")[0])[1][:5]
    yol = os.path.join(CACHE, ad)
    if not os.path.exists(yol) or os.path.getsize(yol) < 5000:
        req = urllib.request.Request(kaynak, headers={"User-Agent": "Mozilla/5.0"})
        with open(yol, "wb") as f:
            f.write(urllib.request.urlopen(req, timeout=300).read())
else:
    yol = kaynak
b = open(yol, "rb").read()
print("# %s → %s | %d bayt" % (kaynak, yol, len(b)))

parcalar = []
if b[:4] == b"%PDF":
    import pypdf
    r = pypdf.PdfReader(io.BytesIO(b))
    bos = 0
    for i, p in enumerate(r.pages):
        try:
            t = re.sub(r"\s+", " ", p.extract_text() or "")
        except Exception:
            t = ""
        if not t.strip():
            bos += 1
        parcalar.append(("s%d" % (i + 1), t))
    print("# pdf %d sayfa · metinsiz %d" % (len(r.pages), bos))
else:
    t = re.sub(r"\s+", " ", b.decode("utf-8", "replace"))
    parcalar.append(("c", t))
    print("# metin %d karakter" % len(t))

for a in anah:
    n = 0
    for etiket, t in parcalar:
        for m in re.finditer(re.escape(a), t):
            n += 1
            yer = etiket if etiket != "c" else "c%d" % m.start()
            print("[%s] %s: …%s…" % (yer, a, t[max(0, m.start() - bag):m.end() + bag]))
    print("## %s → %d eşleşme" % (a, n))
