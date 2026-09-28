# DUNYA-KRONO-0081 — Bánlaky (MEK 09477) sayfalarını çekip önbelleğe yazar, desen arar.
# Kullanım: py denetim/ARAC-DUNYA-KRONO-0081-BANLAKY.py <dizin> <ilk> <son> <desen>
import sys, re, os, html, urllib.request
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.join(os.path.dirname(os.path.abspath(__file__)), "DUNYA-KRONO-0081-banlaky-onbellek")
os.makedirs(KOK, exist_ok=True)
dizin, ilk, son, desen = sys.argv[1], int(sys.argv[2]), int(sys.argv[3]), sys.argv[4]

def cek(no):
    yol = os.path.join(KOK, f"{dizin}-{no}.txt")
    if os.path.exists(yol):
        return open(yol, encoding="utf-8").read()
    url = f"https://mek.oszk.hu/09400/09477/html/{dizin}/{no}.html"
    try:
        r = urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"}), timeout=40)
        ham = r.read()
        for kod in ("utf-8", "iso-8859-2", "cp1250"):
            try:
                h = ham.decode(kod); break
            except UnicodeDecodeError:
                continue
    except Exception as e:
        return f"HATA {e}"
    t = re.sub(r"<[^>]+>", " ", h)
    t = re.sub(r"\s+", " ", html.unescape(t)).strip()
    open(yol, "w", encoding="utf-8").write(t)
    return t

for no in range(ilk, son + 1):
    t = cek(no)
    if t.startswith("HATA"):
        print(dizin, no, t[:80]); continue
    bas = t[:90]
    isabet = [m.start() for m in re.finditer(desen, t)]
    print(f"{dizin}/{no}: {len(t)} kr · {len(isabet)} isabet · {bas}")
