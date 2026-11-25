# -*- coding: utf-8 -*-
"""id <-> metin KAYMA sinamasi (olay cevirileri). Kullanim: py kayma.py <depo> [--sinav] [--cikti dosya.json]"""
import sys, os, re, json, unicodedata, statistics, collections

DEPO = sys.argv[1]
sys.path.insert(0, os.path.join(DEPO, "arac"))
import ceviri

LATIN = "en es fr pt de it pl nl id sw az".split()

def rakam(s):
    s = "".join(str(unicodedata.digit(c)) if c.isdigit() and not "0" <= c <= "9" and unicodedata.digit(c, None) is not None else c for c in s)
    s = re.sub(r"(?<=\d)[.,  ٬٫](?=\d{3}(?!\d))", "", s)
    return s

def sayilar(s):
    return frozenset(x for x in re.findall(r"\d+", rakam(s)) if len(x) >= 3)

def katla(s):
    s = s.replace("İ", "i").replace("ı", "i")
    s = unicodedata.normalize("NFD", s.lower())
    return "".join(c for c in s if not unicodedata.combining(c))

def adlar(s):
    out = set()
    for w in re.findall(r"(?<![.!?:]\s)(?<!^)\b([A-ZÇĞİÖŞÜÂÎÛ][a-zçğıöşüâîû]{4,})", s):
        out.add(katla(w)[:4])
    return out

def tara(dil, tr, kayit, ids):
    say = {"kayit": 0, "sayili": 0}
    S = {i: sayilar(" ".join(tr[i].values())) for i in ids}
    ters = collections.defaultdict(set)
    for i in ids:
        for n in S[i]:
            ters[n].add(i)
    oran = {}
    metinler = {}
    bulgu = collections.defaultdict(list)
    for i in ids:
        r = kayit.get(i)
        if not r:
            continue
        say["kayit"] += 1
        cm = " ".join(r[a][0] for a in ("b", "d") if a in r)
        km = " ".join(tr[i][a] for a in ("b", "d") if a in tr[i] and a in r)
        T = sayilar(cm)
        s = S[i]
        if s:
            say["sayili"] += 1
        if s and T:
            geri = len(s & T) / len(s)
            if (len(s) >= 2 and geri <= 0.25) or (len(s) == 1 and not (s & T)):
                aday = collections.Counter(k for n in T for k in ters.get(n, ()) if k != i)
                eslesen = None
                for k, _ in aday.most_common(40):
                    j = len(S[k] & T) / len(S[k] | T)
                    if j >= 0.8 and len(S[k] & T) >= 2:
                        eslesen = k
                        break
                bulgu["kayma_sayi" if eslesen else "sayi_uyumsuz"].append((i, eslesen))
        if len(km) >= 80:
            oran[i] = len(cm) / len(km)
        for a in ("b", "d"):
            if a in r and a in tr[i] and len(r[a][0]) > 40:
                metinler.setdefault((a, r[a][0]), []).append((i, tr[i][a]))
        if dil in LATIN:
            ad = adlar(tr[i].get("d", "")) if "d" in tr[i] and "d" in r else set()
            if len(ad) >= 4:
                k = katla(cm)
                if sum(1 for x in ad if x in k) == 0:
                    bulgu["ad_yok"].append((i, None))
    if oran:
        med = statistics.median(oran.values())
        for i, o in oran.items():
            if o < med * 0.5 or o > med * 2.0:
                bulgu["oran"].append((i, round(o / med, 2)))
    for (a, m), l in metinler.items():
        kaynaklar = {k for _, k in l}
        if len(kaynaklar) > 1:
            norm = {re.sub(r"\W+", "", katla(k)) for k in kaynaklar}
            if len(norm) > 1:
                bulgu["kopya"].append(([i for i, _ in l], a))
    supheli = {x[0] for t in ("kayma_sayi", "sayi_uyumsuz", "oran", "ad_yok") for x in bulgu[t]}
    for ad_sira, sira in (("kaynak", ids), ("alfabe", sorted(ids))):
        seri = []
        for i in sira + [None]:
            if i is not None and i in supheli:
                seri.append(i)
            else:
                if len(seri) >= 3:
                    bulgu["ardisik_" + ad_sira].append((seri[0], len(seri)))
                seri = []
    return say, bulgu

def main():
    j = ceviri.cikar()
    tr = ceviri.turkce(j, "olay")
    ids = [o["id"] for o in j["olay"]]
    if "--sinav" in sys.argv:
        for dil in ("en", "zh", "de"):
            k = ceviri.oku(dil, "olay")
            var = [i for i in sorted(ids) if i in k]
            bas = 1000
            hedef = var[bas:bas + 30]
            bozuk = dict(k)
            for n, i in enumerate(hedef):
                bozuk[i] = k[hedef[(n + 1) % len(hedef)]]
            _, b0 = tara(dil, tr, k, ids)
            _, b1 = tara(dil, tr, bozuk, ids)
            iz = lambda b: {x[0] for t in ("kayma_sayi", "sayi_uyumsuz", "oran", "ad_yok") for x in b[t]}
            print("SINAV %s: 30 kayit kasitli kaydirildi -> bozuk kumede isaretlenen %d/30 (oncesinde %d) | kayma_sayi %d | ardisik seri en uzun %d" % (
                dil, len(iz(b1) & set(hedef)), len(iz(b0) & set(hedef)),
                len([x for x in b1["kayma_sayi"] if x[0] in hedef]),
                max([n for _, n in b1["ardisik_alfabe"]] or [0])))
        return
    cikti = {}
    print("TR olay kaydi", len(ids))
    print("dil  kayit  sayili | kayma_sayi sayi_uyumsuz kopya oran ad_yok | ardisik(kaynak) ardisik(alfabe)")
    for dil, _ in ceviri.DILLER:
        if dil == "tr":
            continue
        k = ceviri.oku(dil, "olay")
        if not k:
            continue
        say, b = tara(dil, tr, k, ids)
        enuz = lambda t: "%d(en uzun %d)" % (len(b[t]), max([n for _, n in b[t]] or [0]))
        print("%-4s %5d %6d | %10d %12d %5d %4d %6d | %-15s %s" % (dil, say["kayit"], say["sayili"], len(b["kayma_sayi"]), len(b["sayi_uyumsuz"]), len(b["kopya"]), len(b["oran"]), len(b["ad_yok"]), enuz("ardisik_kaynak"), enuz("ardisik_alfabe")))
        cikti[dil] = {t: v for t, v in b.items()}
    if "--cikti" in sys.argv:
        json.dump(cikti, open(sys.argv[sys.argv.index("--cikti") + 1], "w", encoding="utf-8"), ensure_ascii=False, indent=1)

main()
