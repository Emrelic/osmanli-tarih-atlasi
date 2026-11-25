# id<->metin kaymasi sinamasi: onceki turlar (denetim 13 dil, ikinci goz 8 dil, TR1125 10 dil).
# Olcut: Turkce kaynakta 3-4 haneli sayi tasiyan DEGISEN kayitta sayilarin en az yarisi yeni metinde var mi.
import sys, os, json, re, glob
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
S = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, S)
import dogrula_ortak as O, ceviri as C
O.git("fetch", "origin", "--quiet")
RAKAM = {}
for blok in (0x0660, 0x06F0, 0x0966, 0x09E6, 0xFF10):
    for i in range(10): RAKAM[blok + i] = str(i)
def sayi(s): return set(re.findall(r"(?<!\d)\d{3,4}(?!\d)", re.sub(r"(?<=\d)[.,  ](?=\d{3}\b)", "", s.translate(RAKAM))))
j = C.cikar()
TR = {t: C.turkce(j, t) for t in C.TURLER}
def metin(t, i, a):
    try: return TR[t][i][a] if t == "olay" else next(iter(TR[t][i].values()))
    except KeyError: return None
def sina(ad, ciftler):
    deg = olc = kotu = 0; ornek = []
    for t, i, a, v in ciftler:
        deg += 1
        s = metin(t, i, a)
        if s is None: continue
        ns = sayi(s)
        if not ns: continue
        olc += 1
        if len(ns & sayi(v)) < (len(ns) + 1) // 2:
            kotu += 1
            if len(ornek) < 3: ornek.append((t, i, a))
    print("%s | degisen %d | sayiyla olculebilen %d | uyumsuz %d %s" % (ad, deg, olc, kotu, ornek if kotu else ""))
    return deg, olc, kotu
def fark(taban, uc, dil, turler):
    for t in turler:
        a, b = O.oku(taban, dil, t), O.oku(uc, dil, t)
        for i in b:
            if t == "olay":
                for al, x in b[i].items():
                    if a.get(i, {}).get(al, [None])[0] != x[0]: yield t, i, al, x[0]
            elif a.get(i, [None])[0] != b[i][0]: yield t, i, "m", b[i][0]
for dil in "ar ru zh hi ja fa pl el id bn ur sw az".split():
    uc = "origin/ceviri-denetim-%s-1125" % dil
    sina("denetim " + dil, fark(O.git("merge-base", uc, "a7074ae1e").strip(), uc, dil, C.TURLER))
for dil in "en de fr es it pt nl bg".split():
    uc = "origin/ceviri-teyit-%s-1125-u" % dil
    if not O.git("rev-parse", "--verify", "-q", uc).strip(): print("ikinci goz", dil, "dal yok (silinmis)"); continue
    sina("ikinci-goz " + dil, fark(uc + "~1", uc, dil, ("arayuz", "devlet")))
for y in sorted(glob.glob(os.path.join(S, "tr1125", "*", "olay-is.json"))):
    dil = os.path.basename(os.path.dirname(y))
    c = json.loads(O.git("show", "origin/ceviri-tr1125-umit:denetim/CEVIRI-TR1125/%s-olay-cevap.json" % dil))["kayit"]
    k = json.load(open(y, encoding="utf-8"))["kaynak"]
    olc = kotu = n = 0
    for i, al in c.items():
        for a, v in al.items():
            n += 1; ns = sayi(k[i][a])
            if ns:
                olc += 1; kotu += len(ns & sayi(v)) < (len(ns) + 1) // 2
    print("tr1125 %s | alan %d | olculebilen %d | uyumsuz %d" % (dil, n, olc, kotu))
