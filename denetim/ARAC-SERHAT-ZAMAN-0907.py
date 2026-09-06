# -*- coding: utf-8 -*-
"""SERHAT ZAMANLA DEGISIYOR MU — ve ne kadar?  YALNIZ OKUR.

Bu, tasarim karsilastirmasinin BELKEMIGI:
  `k:` bir SKALERDIR (tek deger, zaman boyutu YOK).
  Serhat ZAMANLA degisiyorsa, `k:`ye konan bir `S` onu ifade EDEMEZ.

Emre'nin kendi ornegi:
  "Edirne 1365-1453 SERHAT · 1453-1878 IC · 1878- SERHAT"
⇒ VERIYE SORULUYOR: dogru mu, ve kac nokta boyle?
"""
import sys, io, math, json
from collections import defaultdict

KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
sys.path.insert(0, KOK + r"\arac")
import girdi

KESIT = ["1400-06-15", "1500-06-15", "1600-06-15",
         "1700-06-15", "1800-06-15", "1900-06-15", "1923-10-28"]
D_MAX = 600.0
HUC = 5.0
R = 6371.0
rad = math.pi / 180


def hav(la1, lo1, la2, lo2):
    dp = (la2 - la1) * rad
    dl = (lo2 - lo1) * rad
    x = math.sin(dp / 2) ** 2 + math.cos(la1 * rad) * math.cos(la2 * rad) * math.sin(dl / 2) ** 2
    return 2 * R * math.asin(min(1.0, math.sqrt(x)))


def orta(la1, lo1, la2, lo2):
    p1, l1, p2, l2 = la1 * rad, lo1 * rad, la2 * rad, lo2 * rad
    bx = math.cos(p2) * math.cos(l2 - l1)
    by = math.cos(p2) * math.sin(l2 - l1)
    p3 = math.atan2(math.sin(p1) + math.sin(p2),
                    math.sqrt((math.cos(p1) + bx) ** 2 + by ** 2))
    l3 = l1 + math.atan2(by, math.cos(p1) + bx)
    return p3 / rad, ((l3 / rad + 540) % 360) - 180


def sahip(y, g):
    for p in (y.get("d") or []):
        if p.get("f", "") <= g < p.get("t", ""):
            return "OSMANLI"
    for p in (y.get("v") or []):
        if p.get("f", "") <= g < p.get("t", ""):
            return "OSMANLI-tabi"
    for p in (y.get("s") or []):
        if p.get("f", "") <= g < p.get("t", ""):
            return p.get("d")
    return None


Y = girdi.yukle()


def kesit(g):
    P = []
    for y in Y:
        if y.get("lat") is None or y.get("lon") is None:
            continue
        if y.get("bit") and y["bit"] <= g:
            continue
        if y.get("kur") and y["kur"] > g:
            continue
        s = sahip(y, g)
        if s:
            P.append((y["ad"], float(y["lat"]), float(y["lon"]), s))
    izg = defaultdict(list)
    for i, p in enumerate(P):
        izg[(int(math.floor(p[1] / HUC)), int(math.floor(p[2] / HUC)))].append(i)

    def yakin(la, lo, r_km):
        dy = int(r_km / 111.32 / HUC + 1)
        dx = int(r_km / (111.32 * max(0.15, math.cos(la * rad))) / HUC + 1)
        a0 = int(math.floor(la / HUC)); b0 = int(math.floor(lo / HUC))
        out = []
        for a in range(a0 - dy, a0 + dy + 1):
            for b in range(b0 - dx, b0 + dx + 1):
                out.extend(izg.get((a, ((b + 36) % 72) - 36), []))
        return out

    serhat = set()
    n = len(P)
    for i in range(n):
        for j in yakin(P[i][1], P[i][2], D_MAX):
            if j <= i:
                continue
            d = hav(P[i][1], P[i][2], P[j][1], P[j][2])
            if d > D_MAX or d <= 0:
                continue
            if P[i][3] == P[j][3]:
                continue          # ayni sahip -> sinir cifti olamaz
            mla, mlo = orta(P[i][1], P[i][2], P[j][1], P[j][2])
            bos = True
            for k in yakin(mla, mlo, d / 2):
                if k in (i, j):
                    continue
                if hav(mla, mlo, P[k][1], P[k][2]) < d / 2 - 1e-9:
                    bos = False
                    break
            if bos:
                serhat.add(P[i][0]); serhat.add(P[j][0])
    return set(p[0] for p in P), serhat


tarih = {}
for g in KESIT:
    sahne, ser = kesit(g)
    tarih[g] = (sahne, ser)
    print("%s  sahne %4d · SERHAT %4d (%%%.1f)"
          % (g, len(sahne), len(ser), 100.0 * len(ser) / max(1, len(sahne))))

# durum dizisi: her nokta icin kesit kesit S / I / -
dizi = {}
for y in Y:
    ad = y.get("ad")
    if not ad:
        continue
    d = ""
    for g in KESIT:
        sahne, ser = tarih[g]
        d += "S" if ad in ser else ("I" if ad in sahne else "-")
    if d.strip("-"):
        dizi[ad] = d

degisen = {a: d for a, d in dizi.items()
           if "S" in d and "I" in d}
hep_s = [a for a, d in dizi.items() if set(d.replace("-", "")) == {"S"}]
hep_i = [a for a, d in dizi.items() if set(d.replace("-", "")) == {"I"}]

f = io.open(KOK + r"\denetim\SERHAT-ZAMAN-0907.md", "w", encoding="utf-8")
W = f.write
W("# SERHAT ZAMANLA DEĞİŞİYOR MU — tasarım kararının belkemiği\n\n")
W("> `k:` bir **skalerdir** — tek değer, zaman boyutu yok. Serhat zamanla\n")
W("> değişiyorsa, `k:`ye konan bir `S` onu **ifade edemez.** Emre'nin\n")
W("> kendi örneği (*Edirne 1365-1453 serhat · 1453-1878 iç · 1878- serhat*)\n")
W("> veriye soruldu.\n\n")
W("```\nkesit           sahnede   SERHAT\n")
for g in KESIT:
    s, r = tarih[g]
    W("%s   %5d   %5d  (%%%.1f)\n" % (g, len(s), len(r), 100.0 * len(r) / max(1, len(s))))
W("```\n\n")
W("## 🔴 ÖLÇÜM — kaç nokta serhat DURUMU DEĞİŞTİRİYOR\n\n```\n")
W("bir kesitte olsun sahnede olan nokta   %d\n" % len(dizi))
W("🔴 DURUM DEĞİŞTİREN (hem S hem I)      %d   (%%%.1f)\n"
  % (len(degisen), 100.0 * len(degisen) / max(1, len(dizi))))
W("   hep SERHAT                          %d\n" % len(hep_s))
W("   hep İÇ                              %d\n" % len(hep_i))
W("```\n\n")
W("⇒ **%d nokta için tek bir `S` damgası YANLIŞ OLUR** — o nokta bazı\n" % len(degisen))
W("dönemlerde serhat, bazılarında iç. Bir skaler bunu taşıyamaz.\n")
W("*(Yalnız %d kesit örneklendi; gerçek sayı bundan BÜYÜKTÜR — ara\n" % len(KESIT))
W("dönemlerdeki değişimler görünmüyor. Bu bir ALT SINIRDIR.)*\n\n")

W("## 🟢 EMRE'NİN KENDİ ÖRNEĞİ — Edirne\n\n```\n")
W("kesit:       " + "  ".join(g[:4] for g in KESIT) + "\n")
for ad in ["Edirne", "Belgrad", "Budin", "Bağdat", "Kahire", "Şam", "Bursa", "İstanbul"]:
    if ad in dizi:
        W("%-10s   " % ad + "     ".join(dizi[ad]) + "\n")
W("\nS = serhat · I = iç · - = sahnede değil\n")
W("```\n\n")
W("## Durum dizisi en çok değişen 25 nokta\n\n```\n")
say = defaultdict(int)
for a, d in degisen.items():
    k = sum(1 for i in range(1, len(d)) if d[i] != d[i - 1] and "-" not in (d[i], d[i - 1]))
    say[a] = k
for a, k in sorted(say.items(), key=lambda t: -t[1])[:25]:
    W("%-28s %s   (%d değişim)\n" % (a, "  ".join(dizi[a]), k))
W("```\n")
f.close()
json.dump({"kesit": KESIT, "dizi": dizi},
          io.open(KOK + r"\denetim\SERHAT-ZAMAN-0907.json", "w", encoding="utf-8"),
          ensure_ascii=False)
print("durum degistiren:", len(degisen), "/", len(dizi))
print("yazildi: denetim/SERHAT-ZAMAN-0907.md")
