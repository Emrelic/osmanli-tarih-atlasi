# SUMER-2000-OLCEK-1009 ③ — tarih taşıyan site sayımı (DESEN SAYIMI, AST değil; yorum satırları hariç).
# Kullanım (ağaç kökünden): py denetim/ARAC-SUMER-2000-SITE-1009.py
import io, os, re, sys, glob
from collections import OrderedDict
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if getattr(sys.stdout, "encoding", "").lower() not in ("utf-8", "utf8"):
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

TARIH_LIT = r'"-?\d{3,5}-\d\d(?:-\d\d)?"'
DESEN = OrderedDict([
    # sınıf: (desen, ne olur — negatif yılda)
    ("gunIdx çağrısı", r"\bgunIdx\("),
    ("idxTarih/getUTCFullYear", r"\bidxTarih\(|getUTCFullYear\("),
    ("Date.UTC / new Date / Date.parse", r"Date\.UTC\(|new Date\(|Date\.parse\("),
    ("split('-') (tarih parçalama)", r"""split\(\s*["']-["']\s*\)"""),
    ("ilk-4 dilim (slice/substr/[:4])", r"slice\(\s*0\s*,\s*4\s*\)|substr(?:ing)?\(\s*0\s*,\s*4\s*\)|\[:4\]|\[0:4\]"),
    ("int(…[:4]) / int(p[0])", r"int\([^)]*\[:4\]|int\(\s*p\[0\]"),
    ("gun_no çağrısı", r"\bgun_no\("),
    ("_gun_farki çağrısı", r"\b_gun_farki\("),
    ("date( / fromisoformat / strptime", r"\bdate\(|fromisoformat\(|strptime\("),
    ("tarih LİTERALİYLE dizgi kıyası", r"[<>]=?\s*" + TARIH_LIT + r"|" + TARIH_LIT + r"\s*[<>]=?"),
    ("f/t alanıyla dizgi kıyası", r"""(?:\[["'][ft]["']\]|\.get\(["'][ft]["']\)|\.[ft]\b)\s*[<>]=?|[<>]=?\s*\w+(?:\[["'][ft]["']\]|\.get\(["'][ft]["']\)|\.[ft]\b)"""),
    ("sorted/min/max/sort (tarih evreni olabilir)", r"\bsorted\(|\bmin\(|\bmax\(|\.sort\("),
])
DOSYALAR = ["js/app.js", "arac/odak_cozum.js", "arac/denetle.py", "arac/renk_olc.py",
            "arac/uret_petek.py", "arac/girdi.py", "arac/motor_onbellek.py", "arac/uret_devirler.py",
            "arac/odak_olc.py", "arac/denetle_yayin.py", "arac/kodla.py"]

def yorumsuz(yol, s):
    if yol.endswith(".py"):
        return "\n".join(l for l in s.split("\n") if not l.lstrip().startswith("#"))
    s = re.sub(r"/\*.*?\*/", " ", s, flags=re.S)
    return "\n".join(l for l in s.split("\n") if not l.lstrip().startswith("//"))

print("dosya".ljust(26) + "".join(k[:14].rjust(15) for k in DESEN))
for d in DOSYALAR:
    yol = os.path.join(KOK, d)
    if not os.path.exists(yol):
        print(d.ljust(26) + "  YOK"); continue
    s = yorumsuz(d, io.open(yol, encoding="utf-8").read())
    print(d.ljust(26) + "".join(str(len(re.findall(r, s))).rjust(15) for r in DESEN.values()))

# veri dosyalarında ÇALIŞAN kod içinde tarih kıyası (data/*.js'te function gövdesi)
n_dosya, n_site = 0, 0
for yol in sorted(glob.glob(os.path.join(KOK, "data", "*.js"))):
    if os.path.basename(yol).startswith("paket_"):
        continue                     # paketler kaynakların kopyası — çift sayılmaz
    s = io.open(yol, encoding="utf-8", errors="replace").read()
    if "function" not in s and "=>" not in s:
        continue
    k = len(re.findall(r"[<>]=?\s*" + TARIH_LIT + r"|" + TARIH_LIT + r"\s*[<>]=?", yorumsuz(yol + ".js", s)))
    if k:
        n_dosya += 1; n_site += k
print(f"\ndata/*.js (paket hariç) içinde ÇALIŞAN kodda tarih literaliyle kıyas: {n_site} site / {n_dosya} dosya")
