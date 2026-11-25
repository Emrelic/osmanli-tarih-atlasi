# -*- coding: utf-8 -*-
import sys, os, json, collections
DEPO = sys.argv[1]
sys.path.insert(0, os.path.join(DEPO, "arac"))
import ceviri
j = ceviri.cikar(); tr = ceviri.turkce(j, "olay")
B = json.load(open(sys.argv[2], encoding="utf-8"))
kes = lambda s, n=95: " ".join(s.split())[:n]
gor = collections.OrderedDict()
for dil, b in B.items():
    for i, es in b.get("kayma_sayi", []):
        gor.setdefault(i, []).append((dil, es))
print("== kayma_sayi: %d ayri kayit" % len(gor))
for i, l in gor.items():
    print("*", i, [d for d, _ in l], "-> benzedigi:", l[0][1])
    print("   TR :", kes(tr[i]["b"]), "|", kes(tr[i].get("d", ""), 130))
    k = ceviri.oku(l[0][0], "olay")[i]
    print("   %s:" % l[0][0], kes(k["b"][0]), "|", kes(k.get("d", [""])[0], 130))
seri = collections.defaultdict(list)
sira = [o["id"] for o in j["olay"]]
for dil, b in B.items():
    sup = {x[0] for t in ("kayma_sayi", "sayi_uyumsuz", "oran", "ad_yok") for x in b.get(t, [])}
    for tur, s in (("ardisik_kaynak", sira), ("ardisik_alfabe", sorted(sira))):
        for bas, n in b.get(tur, []):
            p = s.index(bas)
            seri[tuple(s[p:p + n])].append(dil)
print("== ardisik seriler: %d" % len(seri))
for ids, diller in seri.items():
    print("*", diller, len(ids), "kayit:", ids[0])
    k = ceviri.oku(diller[0], "olay")
    for i in ids:
        print("   TR:", kes(tr[i]["b"], 80))
        print("   %s:" % diller[0], kes(k[i]["b"][0], 80))
print("== oran sapmasi")
for dil, b in B.items():
    for i, o in b.get("oran", []):
        k = ceviri.oku(dil, "olay")[i]
        print("*", dil, o, i)
        print("   TR:", len(tr[i].get("d", "")), kes(tr[i].get("d", ""), 120)); print("   %s:" % dil, len(k.get("d", [""])[0]), kes(k.get("d", [""])[0], 120))
