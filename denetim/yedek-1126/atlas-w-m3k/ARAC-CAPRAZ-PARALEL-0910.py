# -*- coding: utf-8 -*-
"""CAPRAZ PARALEL — FAZ 1'in "yan etkisiz" iddiasini CURUTMEYE calisan alet.

Sordugu soru: _yabanci_devlet_faz1'ten ULASILABILEN her fonksiyonda,
MODUL DUZEYINDEKI paylasilan bir nesneye YAZAN bir ifade var mi?

Yontem: ast ile cagri grafi (yalniz bu dosyadaki def'ler) + uc yazim cinsi
   (1) global bildirimli ada atama            GLOBAL_ATAMA
   (2) modul duzeyi kapta abonelik yazimi     ABONE_YAZIM / ABONE_AUG
   (3) modul duzeyi kapta mutasyon metodu     MUTASYON.<metot>
Ayrica sayac() / havuza() / hat_havuza() / ilerleme() cagrilari AYRICA
isaretlenir: diff'in kendi iddiasi tam olarak bunlar hakkinda.

CIKTI: denetim/OLCUM-CAPRAZ-PARALEL-0910.json  (+ ekrana ozet)
NOT: bu alet KOD OKUR, motoru KOSTURMAZ.
"""
import ast, json, sys, io, os
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

KAYNAK = os.path.join(os.path.dirname(__file__), "..", "arac", "uret_petek.py")
src = open(KAYNAK, encoding="utf-8").read()
agac = ast.parse(src)

# ---- modul duzeyindeki adlar (paylasilan kaplar) --------------------------
MODUL_ADI = set()
for d in agac.body:
    if isinstance(d, (ast.Assign, ast.AugAssign, ast.AnnAssign)):
        hedefler = d.targets if isinstance(d, ast.Assign) else [d.target]
        for t in hedefler:
            for n in ast.walk(t):
                if isinstance(n, ast.Name):
                    MODUL_ADI.add(n.id)
    elif isinstance(d, (ast.FunctionDef, ast.AsyncFunctionDef)):
        MODUL_ADI.add(d.name)
    elif isinstance(d, ast.For):
        for n in ast.walk(d.target):
            if isinstance(n, ast.Name):
                MODUL_ADI.add(n.id)

FONK = {}
for n in ast.walk(agac):
    if isinstance(n, (ast.FunctionDef, ast.AsyncFunctionDef)):
        FONK.setdefault(n.name, n)

MUTASYON_METOT = {"append", "add", "update", "extend", "setdefault", "pop",
                  "insert", "clear", "discard", "remove", "sort"}


def yerel_adlar(fn):
    yer = set()
    for a in list(fn.args.args) + list(fn.args.kwonlyargs) + list(fn.args.posonlyargs):
        yer.add(a.arg)
    if fn.args.vararg:
        yer.add(fn.args.vararg.arg)
    if fn.args.kwarg:
        yer.add(fn.args.kwarg.arg)
    for n in ast.walk(fn):
        if isinstance(n, ast.Name) and isinstance(n.ctx, ast.Store):
            yer.add(n.id)
        elif isinstance(n, ast.comprehension):
            for x in ast.walk(n.target):
                if isinstance(x, ast.Name):
                    yer.add(x.id)
        elif isinstance(n, ast.ExceptHandler) and n.name:
            yer.add(n.name)
        elif isinstance(n, (ast.Import, ast.ImportFrom)):
            for al in n.names:
                yer.add((al.asname or al.name).split(".")[0])
    return yer


def kok_ad(node):
    while isinstance(node, (ast.Subscript, ast.Attribute)):
        node = node.value
    return node.id if isinstance(node, ast.Name) else None


def incele(fn):
    yer = yerel_adlar(fn)
    global_bildirim = set()
    for n in ast.walk(fn):
        if isinstance(n, ast.Global):
            global_bildirim.update(n.names)
    bulgu, cagri = [], set()
    for n in ast.walk(fn):
        if isinstance(n, ast.Call):
            f = n.func
            if isinstance(f, ast.Name):
                cagri.add(f.id)
            elif isinstance(f, ast.Attribute):
                cagri.add("." + f.attr)
        if isinstance(n, (ast.Assign, ast.AugAssign)):
            hedefler = n.targets if isinstance(n, ast.Assign) else [n.target]
            for t in hedefler:
                if isinstance(t, ast.Name):
                    if t.id in global_bildirim:
                        bulgu.append(("GLOBAL_ATAMA", t.id, n.lineno))
                elif isinstance(t, (ast.Subscript, ast.Attribute)):
                    k = kok_ad(t)
                    if k and k in MODUL_ADI and k not in yer:
                        cins = "ABONE_YAZIM" if isinstance(n, ast.Assign) else "ABONE_AUG"
                        bulgu.append((cins, k, n.lineno))
        if isinstance(n, ast.Call) and isinstance(n.func, ast.Attribute) \
                and n.func.attr in MUTASYON_METOT:
            k = kok_ad(n.func.value)
            if k and k in MODUL_ADI and k not in yer:
                bulgu.append(("MUTASYON." + n.func.attr, k, n.lineno))
    return bulgu, cagri


KOK = "_yabanci_devlet_faz1"
gorulen, yigin, kenar = set(), [KOK], {}
while yigin:
    ad = yigin.pop()
    if ad in gorulen or ad not in FONK:
        continue
    gorulen.add(ad)
    b, c = incele(FONK[ad])
    kenar[ad] = {"yazim": b, "cagri": sorted(c)}
    for x in c:
        if x in FONK and x not in gorulen:
            yigin.append(x)

rapor = {"kok": KOK, "ulasilan_fonksiyon": sorted(gorulen), "yazimlar": {}}
for ad in sorted(gorulen):
    if kenar[ad]["yazim"]:
        rapor["yazimlar"][ad] = [
            {"cins": c, "ad": k, "satir": l} for c, k, l in kenar[ad]["yazim"]]

rapor["iddia_sinavi"] = {}
for hedef in ("sayac", "havuza", "hat_havuza", "ilerleme"):
    cagiran = sorted(a for a in gorulen if hedef in kenar[a]["cagri"])
    rapor["iddia_sinavi"][hedef] = {"faz1den_cagiran": cagiran,
                                    "cagriliyor_mu": bool(cagiran)}

yol = os.path.join(os.path.dirname(__file__), "OLCUM-CAPRAZ-PARALEL-0910.json")
json.dump(rapor, open(yol, "w", encoding="utf-8"), ensure_ascii=False, indent=1)

print("FAZ 1 kokunden ULASILAN fonksiyon:", len(gorulen))
print("  ", ", ".join(sorted(gorulen)))
print()
print("=== DIFF'IN IDDIA SINAVI ===")
for h, v in rapor["iddia_sinavi"].items():
    im = "CAGRILIYOR" if v["cagriliyor_mu"] else "cagrilmiyor"
    print("  %-12s %-12s %s" % (h, im, ", ".join(v["faz1den_cagiran"]) or "-"))
print()
print("=== PAYLASILAN KABA YAZIM (FAZ 1'den ulasilan) ===")
if not rapor["yazimlar"]:
    print("  YOK")
for ad, ys in rapor["yazimlar"].items():
    print("  " + ad + ":")
    for y in ys:
        print("      %-18s %-24s satir %d" % (y["cins"], y["ad"], y["satir"]))
print()
print("->", yol)
