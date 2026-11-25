# -*- coding: utf-8 -*-
"""Degisen her ceviri alanini KENDI eski haliyle kiyasla; benzemiyor ama BASKA kaydin eski haline benziyorsa KAYMA.
Kullanim: py eski_yeni.py <depo> <taban-commit> [--sinav]"""
import sys, re, json, subprocess, collections, difflib

DEPO, TABAN = sys.argv[1], sys.argv[2]
DESEN = re.compile(r"^data/ceviri_([a-z]+)_(arayuz|devlet|olay)(_\d+)?\.js$")

def git(*a):
    return subprocess.run(["git", "-c", "core.quotepath=false", *a], cwd=DEPO, capture_output=True, check=True).stdout.decode("utf-8")

def agac(ref):
    out = collections.defaultdict(dict)
    adlar = [y for y in git("ls-tree", "--name-only", ref, "data/").splitlines() if DESEN.match(y)]
    p = subprocess.run(["git", "cat-file", "--batch"], cwd=DEPO, input="".join("%s:%s\n" % (ref, y) for y in adlar).encode(), capture_output=True, check=True).stdout
    i = 0
    for y in adlar:
        j = p.index(b"\n", i)
        boy = int(p[i:j].split()[2])
        metin = p[j + 1:j + 1 + boy].decode("utf-8")
        i = j + 1 + boy + 1
        m = DESEN.match(y)
        for s in metin.split("\n"):
            if s.startswith('"'):
                (k, v), = json.loads("{" + s.rstrip("\r").rstrip(",") + "}").items()
                if isinstance(v, dict):
                    for a, vv in v.items():
                        out[(m.group(1), m.group(2))][(k, a)] = vv[0]
                else:
                    out[(m.group(1), m.group(2))][(k, "m")] = v[0]
    return out

def uc(s):
    return {s[i:i + 3] for i in range(len(s) - 2)} or {s}

def benzer(a, b):
    A, B = uc(a.lower()), uc(b.lower())
    return len(A & B) / min(len(A), len(B))

eski, yeni = agac(TABAN), agac("HEAD")

def tara(grup, e, y):
    degisen = [k for k in y if k in e and e[k] != y[k]]
    indeks = collections.defaultdict(set)
    uclu = {k: uc(v.lower()) for k, v in e.items() if len(v) >= 25}
    for k, u in uclu.items():
        for t in u:
            indeks[t].add(k)
    dusuk, kayma = [], []
    for k in degisen:
        if len(y[k]) < 25 or len(e[k]) < 25:
            continue
        kendi = benzer(y[k], e[k])
        if kendi >= 0.45:
            continue
        U = uc(y[k].lower())
        nadir = sorted((t for t in U if t in indeks), key=lambda t: len(indeks[t]))[:25]
        say = collections.Counter(o for t in nadir for o in indeks[t] if o != k and o[1] == k[1])
        en_iyi, puan = None, 0
        for o, _ in say.most_common(15):
            p = len(U & uclu[o]) / min(len(U), len(uclu[o]))
            if p > puan:
                en_iyi, puan = o, p
        dusuk.append((k, round(kendi, 2), en_iyi, round(puan, 2)))
        if puan >= 0.75 and puan > kendi + 0.35 and e[en_iyi] != e[k]:
            kayma.append((k, round(kendi, 2), en_iyi, round(puan, 2)))
    return degisen, dusuk, kayma

if "--sinav" in sys.argv:
    for g in (("en", "olay"), ("zh", "olay"), ("ar", "devlet")):
        e, y = eski[g], dict(yeni[g])
        hedef = [k for k in sorted(e) if k[1] in ("d", "m") and len(e[k]) >= 25 and k in y][100:120]
        for n, k in enumerate(hedef):
            y[k] = e[hedef[(n + 1) % len(hedef)]]
        _, _, kay = tara(g, e, y)
        print("SINAV %s/%s: %d alan kasitli kaydirildi -> yakalanan %d" % (g + (len(hedef), len({x[0] for x in kay} & set(hedef)))))
    sys.exit()

T = [0, 0, 0]
ayrinti = []
for g in sorted(eski):
    d, dus, kay = tara(g, eski[g], yeni.get(g, {}))
    T = [T[0] + len(d), T[1] + len(dus), T[2] + len(kay)]
    for x in kay:
        ayrinti.append((g, "KAYMA", x))
    for x in dus:
        if x not in kay:
            ayrinti.append((g, "dusuk", x))
print("taban", TABAN, "| degisen alan %d | kendine benzerligi dusuk %d | KAYMA adayi %d" % tuple(T))
say = collections.Counter((g, t) for g, t, _ in ayrinti)
print("dil/tur basina (kayma, dusuk):", {"%s-%s" % g: (say[(g, "KAYMA")], say[(g, "dusuk")]) for g in sorted({a[0] for a in ayrinti})})
goster = [a for a in ayrinti if a[1] == "KAYMA"][:25] + [a for a in ayrinti if a[1] == "dusuk" and a[2][1] < 0.2][:14]
for g, t, (k, kendi, o, p) in goster:
    print(t, g, k, "kendi", kendi, "oteki", p, o)
    print("    eski :", " ".join(eski[g][k].split())[:90])
    print("    yeni :", " ".join(yeni[g][k].split())[:90])
    if t == "KAYMA":
        print("    oteki-eski:", " ".join(eski[g][o].split())[:90])
