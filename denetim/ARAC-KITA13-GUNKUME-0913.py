# -*- coding: utf-8 -*-
"""KITA 13 · 0044 — GÜN KÜMESİ + YAMA BENZETİMİ (SALT OKUR, hiçbir şey YAZMAZ)

① Bir dönem sınırı TAM bir güne düşen bütün kayıtları listeler
   (d/s/v/isg · f ya da t). Niçin: Van'ın 1548-08-25'i TDV'de 24 Ağustos;
   bir gün kaydırılırsa KAÇ kaydın birlikte kayması gerektiği ölçülmeli.
② Önerilen yamayı BELLEKTE uygular ve iki şeyi sorar:
   · 1548-10-01'de Van çevresi 37 noktada enklav/cep sayısı kaç olur?
   · yamalanan kayıtlarda Değişmez 1 boşluğu (hiçbir dönemin örtmediği gün)
     doğuyor mu?  (§3.5.1 — iki uç da ölçülür)

Kullanım:  py denetim/ARAC-KITA13-GUNKUME-0913.py
"""
import os, sys, io, copy

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi

Y = girdi.yukle(sessiz=True)
ALANLAR = ("d", "s", "v", "isg")


def gun_kumesi(g):
    out = []
    for y in Y:
        for a in ALANLAR:
            for p in (y.get(a) or []):
                if p.get("f") == g or p.get("t") == g:
                    out.append((y["ad"], a, p.get("f"), p.get("t"), p.get("d", "")))
    return out


for g in ("1548-08-25", "1548-08-24", "1639-05-17", "1515-09-15"):
    k = gun_kumesi(g)
    adlar = sorted(set(x[0] for x in k))
    print("=" * 78)
    print("GÜN %s → %d dönem sınırı · %d kayıt" % (g, len(k), len(adlar)))
    for a in adlar:
        print("   ", a)

# ---------------- ② YAMA BENZETİMİ ----------------
LA1, LA2, LO1, LO2 = 36.8, 40.2, 41.5, 46.0
BOLGE = [y for y in Y if y.get("lat") is not None
         and LA1 <= y["lat"] <= LA2 and LO1 <= y["lon"] <= LO2]


def sahip(y, g):
    for p in (y.get("d") or []):
        if p["f"] <= g < p["t"]:
            return "OSMANLI"
    for p in (y.get("v") or []):
        if p["f"] <= g < p["t"]:
            return "tabi"
    for p in (y.get("s") or []):
        if p["f"] <= g < p["t"]:
            return p.get("d")
    return "SAHIPSIZ"


def cepler(noktalar, g, k=6):
    """Sahibi, en yakın k komşusunun EN AZ (k-1)'inden farklı olan noktalar."""
    out = []
    for y in noktalar:
        s = sahip(y, g)
        kom = sorted((girdi.km(y["lat"], y["lon"], z["lat"], z["lon"]), z)
                     for z in noktalar if z is not y)[:k]
        farkli = sum(1 for _, z in kom if sahip(z, g) != s)
        if farkli >= k - 1:
            out.append((y["ad"], s, farkli))
    return out


def yama(noktalar, adlar, gun):
    """safevi dilimini `gun`e kısalt, d: `gun`den başlat (1639 kümesi için)."""
    yeni = []
    for y in noktalar:
        if y["ad"] not in adlar:
            yeni.append(y)
            continue
        z = copy.deepcopy(y)
        eski_d = z["d"][0]["f"]
        for p in z["s"]:
            if p.get("d") == "safevi" and p["t"] == eski_d:
                p["t"] = gun
        z["d"][0]["f"] = gun
        yeni.append(z)
    return yeni


def bosluk(y, bas="1281-01-01", son="1923-10-29"):
    """Hiçbir d/v/s döneminin örtmediği aralıklar (Değişmez 1b benzeri)."""
    pp = sorted([(p["f"], p["t"]) for a in ("d", "v", "s")
                 for p in (y.get(a) or [])])
    delik, imlec = [], bas
    for f, t in pp:
        if f > imlec:
            delik.append((imlec, f))
        imlec = max(imlec, t)
    if imlec < son:
        delik.append((imlec, son))
    return delik


G = "1548-10-01"
ONER = {"Başkale", "Çaldıran", "Şeyhrumi (Yücelen)"}
once = cepler(BOLGE, G)
sonra_noktalar = yama(BOLGE, ONER, "1548-08-25")
sonra = cepler(sonra_noktalar, G)
print()
print("=" * 78)
print("② YAMA BENZETİMİ · %s · bölge %d nokta · cep ölçütü: 6 komşunun ≥5'i farklı"
      % (G, len(BOLGE)))
print("   YAMA ÖNCESİ cep: %d" % len(once))
for c in once:
    print("      %-26s %-9s farklı komşu %d/6" % c)
print("   YAMA SONRASI cep: %d" % len(sonra))
for c in sonra:
    print("      %-26s %-9s farklı komşu %d/6" % c)
print()
print("   Değişmez 1 — yamalanan kayıtlarda BOŞLUK:")
for y in sonra_noktalar:
    if y["ad"] in ONER:
        print("      %-26s %s" % (y["ad"], bosluk(y) or "yok ✓"))
