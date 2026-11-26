# -*- coding: utf-8 -*-
"""0047 — YAMA ÖNERİLERİ BELLEKTE (SALT OKUR · data/ DOKUNULMAZ)

Önerilen dönemleri girdi.yukle() kopyasına bellekte uygular ve ölçer:
  A  boşluk (Değişmez 1): değişen kayıtta 1500-1750 arası her 30 günde sahipsiz gün var mı
  B  çakışma: aynı günde d ile s aynı anda mı (motor d'yi öne alır — bilgi amaçlı)
  C  komşu cebi: en yakın 8 komşudan kaçı "farklı sistem"de
     (OSMANLI ile tâbi:* AYNI sistem sayılır — CLAUDE.md §3 muafiyeti)
     kesitler 1580-06-15 · 1590-03-21 · 1595-06-15 · 1605-06-15 · 1630-06-15
  D  yeni kırılma günleri — mevcut kırılma kümesinde var mı (Değişmez 2 riski)
Önerilen günler DOĞRUDAN komşu kayıtlardan (D084) alındı; yeni gün ÜRETİLMEZ.

Kullanım:  py denetim/ARAC-0047-BENZETIM-0913.py
"""
import os, sys, io, copy, datetime

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi

Y0 = girdi.yukle(sessiz=True)
IX0 = {y["ad"]: y for y in Y0}

# Mevcut s zincirindeki safevi dönemini [f,t) aralığıyla böler ve d ekler.
YAMA = {
    # kaynaklı — Bağdat eyaleti sancağı (TDV bagdat [758-760]); günler Hânekîn'den (25 km)
    "Kasr-ı Şîrîn": [("1534-12-04", "1623-11-28")],
    # Kürt kuşağı — günler Merâga/Mîyandoab/Tebriz'den (1585-09-25 → 1603-10-21)
    "Merîvan": [("1585-09-25", "1603-10-21")],
    "Bâne": [("1585-09-25", "1603-10-21")],
    "Mahabad (Sâvücbulak)": [("1585-09-25", "1603-10-21")],
    "Sakkız": [("1585-09-25", "1603-10-21")],
    "Serdeşt (Sardasht)": [("1585-09-25", "1603-10-21")],
    "Bîcâr": [("1585-09-25", "1603-10-21")],
}
DOKUZ = ["Kasr-ı Şîrîn", "Zencan", "Sultâniye", "Bîcâr", "Merîvan", "Sakkız", "Bâne",
         "Serdeşt (Sardasht)", "Mahabad (Sâvücbulak)"]
KESIT = ["1580-06-15", "1590-03-21", "1595-06-15", "1605-06-15", "1630-06-15"]


def uygula(Y):
    Y = copy.deepcopy(Y)
    ix = {y["ad"]: y for y in Y}
    for ad, donemler in YAMA.items():
        y = ix[ad]
        for f, t in donemler:
            yeni_s = []
            for p in (y.get("s") or []):
                if p.get("d") == "safevi" and p["f"] < t and f < p["t"]:
                    if p["f"] < f:
                        yeni_s.append(dict(p, t=f))
                    if t < p["t"]:
                        yeni_s.append(dict(p, f=t))
                else:
                    yeni_s.append(p)
            y["s"] = yeni_s
            y["d"] = sorted((y.get("d") or []) + [{"f": f, "t": t}], key=lambda p: p["f"])
    return Y


def sistem(y, g):
    if y.get("kur") and y["kur"] > g:
        return "HENÜZ-YOK"
    for p in (y.get("d") or []):
        if p["f"] <= g < p["t"]:
            return "OSM-SİSTEM"
    for p in (y.get("v") or []):
        if p["f"] <= g < p["t"]:
            return "OSM-SİSTEM"
    for p in (y.get("s") or []):
        if p["f"] <= g < p["t"]:
            return p.get("d")
    return "SAHİPSİZ"


Y1 = uygula(Y0)
IX1 = {y["ad"]: y for y in Y1}

print("# taban %d · yama %d kayıt (bellekte)" % (len(Y0), len(YAMA)))
print("=" * 90)
print("A · BOŞLUK (1500-01-01 → 1750-12-31, 30 günlük adım + her dönem ucunun ±1 günü)")
for ad in YAMA:
    y = IX1[ad]
    g = datetime.date(1500, 1, 1)
    bos = []
    gunler = set()
    while g <= datetime.date(1750, 12, 31):
        gunler.add(g.isoformat())
        g += datetime.timedelta(days=30)
    for alan in ("d", "v", "s"):
        for p in (y.get(alan) or []):
            for u in (p["f"], p["t"]):
                d0 = datetime.date.fromisoformat(u)
                for k in (-1, 0, 1):
                    gunler.add((d0 + datetime.timedelta(days=k)).isoformat())
    for gs in sorted(gunler):
        if "1500-01-01" <= gs <= "1750-12-31" and sistem(y, gs) == "SAHİPSİZ":
            bos.append(gs)
    print("  %-22s boşluk günü: %d %s" % (ad[:22], len(bos), bos[:3]))

print()
print("=" * 90)
print("B · d/s ÇAKIŞMASI (aynı gün iki alan)")
for ad in YAMA:
    y = IX1[ad]
    n = 0
    for p in y["d"]:
        for q in (y.get("s") or []):
            if p["f"] < q["t"] and q["f"] < p["t"]:
                n += 1
    print("  %-22s çakışan dönem çifti: %d" % (ad[:22], n))


def cep(Y, ix, ad, g):
    y = ix[ad]
    s0 = sistem(y, g)
    uz = sorted(((girdi.km(y["lat"], y["lon"], z["lat"], z["lon"]), z) for z in Y
                 if z is not y and z.get("lat") is not None), key=lambda x: x[0])[:8]
    return s0, sum(1 for d, z in uz if sistem(z, g) != s0)


print()
print("=" * 90)
print("C · KOMŞU CEBİ (farklı sistemdeki komşu / 8) — ÖNCE → SONRA")
print("  %-22s" % "yer" + "".join(" %-24s" % g for g in KESIT))
for ad in DOKUZ + ["Hânekîn", "Halepçe", "Şehrizor", "Mîyandoab", "Kirmanşah", "Hemedan", "Miyâne"]:
    satir = "  %-22s" % ad[:22]
    for g in KESIT:
        a0, n0 = cep(Y0, IX0, ad, g)
        a1, n1 = cep(Y1, IX1, ad, g)
        satir += " %-24s" % ("%s %d→%s %d" % (a0[:3], n0, a1[:3], n1))
    print(satir)
for g in KESIT:
    say0 = sum(1 for ad in DOKUZ + ["Hânekîn", "Halepçe", "Şehrizor", "Mîyandoab", "Kirmanşah", "Hemedan", "Miyâne"]
               if cep(Y0, IX0, ad, g)[1] >= 6)
    say1 = sum(1 for ad in DOKUZ + ["Hânekîn", "Halepçe", "Şehrizor", "Mîyandoab", "Kirmanşah", "Hemedan", "Miyâne"]
               if cep(Y1, IX1, ad, g)[1] >= 6)
    print("  %s  ≥6/8 cep sayısı (16 nokta): ÖNCE %d · SONRA %d" % (g, say0, say1))

print()
print("=" * 90)
print("D · YENİ KIRILMA GÜNLERİ — mevcut d/v kırılma kümesinde var mı")
mevcut = set()
for y in Y0:
    for alan in ("d", "v"):
        for p in (y.get(alan) or []):
            mevcut.add(p.get("f"))
            mevcut.add(p.get("t"))
for ad, donemler in YAMA.items():
    for f, t in donemler:
        print("  %-22s %s %s · %s %s" % (ad[:22], f, "VAR" if f in mevcut else "🔴 YENİ", t,
                                        "VAR" if t in mevcut else "🔴 YENİ"))
