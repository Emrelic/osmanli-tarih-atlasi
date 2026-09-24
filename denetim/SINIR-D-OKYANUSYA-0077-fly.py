# -*- coding: utf-8 -*-
"""SINIR-D-OKYANUSYA-0077 — Yeni Gine güney hattına Fly Nehri kıvrımını işler.

Eski hat Fly talvegini DÜZ ÇİZGİYLE geçiyordu ([141.019444,-6.8925] → [141.0,-6.323333]);
kaydın kendi kesinlik_not'u bunu söylüyordu (IBS 160 toplamı 885 km, dosya 728 km).
Dayanak değişmez: 1895 Sözleşmesi "the waterway (thalweg) of the Fly River forms the
boundary" (IBS 160) ve IBS 160 hattın 1895'ten beri değişmediğini söyler (degisti:false).
Geometri: Natural Earth 10m admin-0 IDN–PNG hattının Fly kıvrımı (21..80. noktalar,
güneyden kuzeye ters sırayla). Meridyen kesimleri ve uç noktalar IBS/1973 koordinatı
olarak AYNEN kalır.
Yalnız aynı hattı paylaşan üç güney kaydına dokunur; kuzey kayıtları değişmez.
"""
import io, json, math, os

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DOSYA = os.path.join(KOK, "data", "d_sinirlar_okyanusya.js")
HEDEF = {"d1923-oky-yenigine-guney-britanya-koruma", "d1923-oky-yenigine-guney-britanya",
         "d1923-oky-yenigine-guney-avustralya"}
ESKI_GUNEY_UC = [141.019444, -6.8925]
KUZEY_UC = [141.0, -6.323333]


def km(h):
    t = 0.0
    for a, b in zip(h, h[1:]):
        kx = 111.32 * math.cos(math.radians((a[1] + b[1]) / 2))
        t += math.hypot((b[0] - a[0]) * kx, (b[1] - a[1]) * 110.57)
    return t


ne = json.load(io.open(os.path.join(KOK, "veri-kaynak", "d_bugunku_sinirlar.geojson"), encoding="utf-8"))
f = [x for x in ne["features"] if x["properties"]["cift"] == "IDN-PNG"]
assert len(f) == 1, "IDN-PNG tek parça bekleniyordu"
c = f[0]["geometry"]["coordinates"]
kivrim = [[round(x, 6), round(y, 6)] for x, y in reversed(c[21:81])]
assert -6.34 < c[21][1] < -6.33 and -6.89 < c[80][1] < -6.88, "NE indeksleri kaydı"
assert all(-6.9 < p[1] < -6.32 for p in kivrim)

satirlar = io.open(DOSYA, encoding="utf-8").read().split("\n")
degisen = 0
for i, s in enumerate(satirlar):
    if not s.startswith('{"id": '):
        continue
    ek = s.endswith(",")
    k = json.loads(s[:-1] if ek else s)
    if k["id"] not in HEDEF:
        continue
    h = k["hat"]
    assert h[-2] == ESKI_GUNEY_UC and h[-1] == KUZEY_UC, k["id"] + ": hat beklenen uçlarda değil"
    k["hat"] = h[:-1] + kivrim + [KUZEY_UC]
    k["uzunluk_km"] = round(km(k["hat"]), 1)
    k["geometri_kaynagi"] = (k["geometri_kaynagi"] +
        " · FLY KIVRIMI (SINIR-D-OKYANUSYA-0077, 24 Eylul 2026): Natural Earth 10m admin-0 IDN-PNG "
        "hattinin 21-80. noktalari (Fly talvegi); meridyen kesimleri ve uclar IBS 160/1973 koordinati olarak AYNEN")
    k["kesinlik_km"] = 5.0 if k["kesinlik_km"] >= 5.0 else k["kesinlik_km"]
    k["kesinlik_not"] = (
        "Meridyen kesimleri 1973 anket koordinatlariyla ~0 hata. Fly Nehri kesimi artik DUZ CIZGI DEGIL: "
        "NE 10m admin-0 IDN-PNG kivrimi (~60 nokta). NE'nin kendi 141d meridyeni IBS degerinin 2,6-4,7 km "
        "BATISINDA duruyor (NE 140.9769 vs 141.0/141.0194) -- kivrim ayni sistematik kaymayi tasiyabilir, "
        "kesinlik bu yuzden 5 km. Kivrimin iki ucunda NE ile IBS noktasi arasinda ~3-5 km'lik bir baglanti "
        "sicramasi var; kaydirma YAPILMADI (NE kaymasi olculmus bir duzeltme degil).")
    if k["id"] == "d1923-oky-yenigine-guney-britanya-koruma":
        k["kesinlik_not"] += " 1895 ONCESI: hat 1895 sozlesmesinin GERIYE IZDUSUMUDUR (bkz. not); kivrim da oyle."
        k["kesinlik_km"] = 50.0
    satirlar[i] = json.dumps(k, ensure_ascii=False) + ("," if ek else "")
    degisen += 1
    print("%s: %d nokta, %.1f km" % (k["id"], len(k["hat"]), k["uzunluk_km"]))

assert degisen == 3, degisen
io.open(DOSYA, "w", encoding="utf-8", newline="\n").write("\n".join(satirlar))
print("yazildi:", degisen, "kayit")
