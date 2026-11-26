# GUN-SAYACI-TASARIM-1009 ① — motor DIŞI tarih sitelerinin dökümü (dosya:satır:işlev:sınıf).
# DESEN + bağlam sınıflaması (AST taint DEĞİL — motorun 59 sitesi MOTOR-TARIH-TARAMA-1008'den).
# Kullanım (ağaç kökünden): py denetim/ARAC-GUN-SAYACI-ENVANTER-1009.py [cikti.tsv]
import io, os, re, sys, ast
from collections import Counter
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if getattr(sys.stdout, "encoding", "").lower() not in ("utf-8", "utf8"):
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

LIT = r'"-?\d{3,5}-\d\d(?:-\d\d)?"'
FT = r"""(?:\[["'](?:f|t|kur|bit|tarih|gun)["']\]|\.get\(["'](?:f|t|kur|bit)["'][^)]*\)|\b(?:m|o|p|d|dn|sp|x|e|k)\.(?:t|f)\b)"""
SINIF = [   # (sınıf, davranış, desen) — İLK eşleşen
    ("GUN-SAYI-URET", "gunIdx/gun_no/_gun_farki/Date → gün sayısı üretir (SINIR)",
     r"\bgunIdx\(|\bgun_no\(|\b_gun_farki\(|Date\.UTC\(|Date\.parse\(|fromisoformat\(|\bdate\(\s*int|toordinal\("),
    ("GUN-SAYI-COZ", "gün sayısı → takvim/yazı (idxTarih/getUTC*/new Date(i…))",
     r"\bidxTarih\(|\bidxYazi\(|getUTC(?:FullYear|Month|Date)\(|new Date\(\s*\w+\s*\*\s*864e5|\.isoformat\("),
    ("DIZGI-KIYAS", "tarih dizgisi < > <= >= ile kıyaslanıyor (negatifte TERS, 3 hanede YANLIŞ)",
     r"(?:" + FT + r"|" + LIT + r")\s*[<>]=?|[<>]=?\s*(?:" + FT + r"|" + LIT + r")"),
    ("DIZGI-SIRA", "tarih dizgisi sort/sorted/min/max/localeCompare ile",
     r"(?:sorted|min|max)\([^)]*(?:\[\"[ft]\"\]|\.t\b|\.f\b|tarih)|\.sort\([^)]*\.(?:t|f)\b|localeCompare\([^)]*\.(?:t|f)\b"),
    ("DIZGI-PARCALA", "split('-') / [:4] / slice(0,4) / int(s[..]) — yıl ayrıştırma",
     r"""split\(\s*["']-["']\s*\)|\[:4\]|\[0:4\]|slice\(\s*0\s*,\s*4\s*\)|substr(?:ing)?\(\s*0\s*,\s*4\s*\)|int\(\s*\w+\[\s*\d?\s*:\s*\d+\s*\]\)"""),
    ("DIZGI-ESIT", "tarih dizgisi == != in (tek yazım şartı)",
     r"(?:" + FT + r"|" + LIT + r")\s*[!=]==?|[!=]==?\s*(?:" + FT + r"|" + LIT + r")"),
    ("GOSTERIM", "yıl/tarih yazıya basılıyor (yilDizgi/isoDizgi/kisaTarih/ham p[0])",
     r"\byilDizgi\(|\bisoDizgi\(|\bkisaTarihYazi\(|\bolayTarihYazi\(|\bkesinlikliYazi\(|\b_isyanTarihYazi\("),
]
DOSYALAR = ["js/app.js", "arac/odak_cozum.js", "arac/denetle.py", "arac/renk_olc.py", "arac/uret_devirler.py",
            "arac/odak_olc.py", "arac/denetle_yayin.py", "arac/kodla.py", "arac/denetle_eslesme.py",
            "arac/denetle_statu.py", "arac/denetle_gorunur.py", "arac/denetle_anakronizm.py", "arac/durum_tablosu.py"]

def islev_haritasi(yol, s):
    """satır → kapsayan işlev adı."""
    sat = s.split("\n")
    h = ["(modül)"] * (len(sat) + 2)
    if yol.endswith(".py"):
        try:
            for n in ast.walk(ast.parse(s)):
                if isinstance(n, (ast.FunctionDef, ast.AsyncFunctionDef)):
                    for i in range(n.lineno, (n.end_lineno or n.lineno) + 1):
                        h[i] = n.name            # iç içe: içteki en son yazar (walk BFS)
        except SyntaxError:
            pass
        return h
    cur = "(modül)"
    for i, l in enumerate(sat, 1):
        m = re.match(r"^\s*(?:async\s+)?function\s+([\w$]+)|^\s*(?:var|let|const)\s+([\w$]+)\s*=\s*function", l)
        if m:
            cur = m.group(1) or m.group(2)
        elif re.match(r"^\}", l):
            h[i] = cur; cur = "(modül)"; continue
        h[i] = cur
    return h

satirlar, say, dsay = [], Counter(), Counter()
for d in DOSYALAR:
    yol = os.path.join(KOK, d)
    if not os.path.exists(yol):
        continue
    s = io.open(yol, encoding="utf-8").read()
    h = islev_haritasi(d, s)
    for i, l in enumerate(s.split("\n"), 1):
        ls = l.strip()
        if ls.startswith(("#", "//", "*")):
            continue
        for ad, _, rx in SINIF:
            if re.search(rx, l):
                satirlar.append((d, i, h[i], ad, ls[:150]))
                say[ad] += 1; dsay[(d, ad)] += 1
                break

print("sınıf toplamı:", dict(say), "· toplam", sum(say.values()))
print("\ndosya × sınıf:")
for d in DOSYALAR:
    r = {a: dsay[(d, a)] for a, _, _ in SINIF if dsay[(d, a)]}
    if r:
        print(f"  {d:<28} {sum(r.values()):>4}  {r}")
cikti = sys.argv[1] if len(sys.argv) > 1 else None
if cikti:
    with io.open(cikti, "w", encoding="utf-8", newline="\n") as f:
        f.write("dosya\tsatır\tişlev\tsınıf\tifade\n")
        for r in satirlar:
            f.write("\t".join(str(x).replace("\t", " ") for x in r) + "\n")
    print("döküm:", cikti, len(satirlar), "satır")
