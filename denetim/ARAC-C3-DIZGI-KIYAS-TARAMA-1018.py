# -*- coding: utf-8 -*-
"""C3 tarama: uret_petek.py'de TARIH DIZGISI kiyasi yapan yerleri AST ile bulur.
Kullanim: py denetim/ARAC-C3-DIZGI-KIYAS-TARAMA-1018.py [dosya]   (cikis 0 = sifir supheli, 1 = var)
Supheli: <,<=,>,>= iceren Compare ya da min/max/sorted cagrisi; kaynak metni TARIH_IZI'ne
uyuyor ve gn( ile sarili degil. Sozlesme: tarih kiyasi yalniz gn() ile (arac/gun.py sayaci).
Heuristik: yanlis-pozitif verir (gozle ayiklanir); izi genis tutar ki yanlis-negatif az olsun."""
import ast, re, sys
yol = sys.argv[1] if len(sys.argv) > 1 else "arac/uret_petek.py"
src = open(yol, encoding="utf-8-sig").read()
tree = ast.parse(src)
IZ = re.compile(r'\["[ft]"\]|\.get\("[ft]"\)|\bEPOK\b|\bKESIT_SON\b|"-?\d{3,4}-\d\d(-\d\d)?"|'
                r'\b_?(a|g|g0|wa|ts|tt|tarih\w*|_gun\w*|skf|skt\d?|kur|gun|f|t|f_|t_|pf|pt|df|dt|kf|kt|bas|son|bit|ilk|ft|tf)\b')
SAR = re.compile(r'\bgn\(|\b_gn\(|key=gn|_gun\.gun\(|key=_gun|\.area|_kvn|KV_MIN|_ea\b|< hedef|0\.0|_kusatilmis|_kus_kayit|< 1\.0|abs\(|_gun_farki\(|_gun_no\(|ROTUS|HAYALET|MUKERRER|SAVAS|_son < 0|len\(t\)|centroid|distance|en_iyi_fark|int\(t\)|x\["km"\]|defter\.get')
bul = []
for n in ast.walk(tree):
    if isinstance(n, ast.Compare) and any(isinstance(o, (ast.Lt, ast.LtE, ast.Gt, ast.GtE)) for o in n.ops):
        kind = "kiyas"
    elif isinstance(n, ast.Call) and isinstance(n.func, ast.Name) and n.func.id in ("min", "max", "sorted"):
        kind = n.func.id
    else:
        continue
    t = ast.get_source_segment(src, n) or ""
    if IZ.search(t) and not SAR.search(t):
        bul.append((n.lineno, kind, " ".join(t.split())))
bul.sort()
for l, k, t in bul:
    print("%5d %-6s %s" % (l, k, t[:170]))
print("--- %d supheli" % len(bul))
sys.exit(1 if bul else 0)
