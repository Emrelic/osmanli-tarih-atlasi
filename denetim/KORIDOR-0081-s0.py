"""KORIDOR-0081 — S0 (noktasızlık) eşiğinin 10 vakada ölçümü.

Tanım (Emre'nin cümlesinin geometrisi): ada kümesi I (devlet X, gün g),
gövde noktası B = I dışındaki en yakın X noktası, P = I'nin B'ye en yakın üyesi.
KORİDOR MERCEĞİ = g günü VAR olan ve  uzak(q,P) < uzak(P,B)  ve
uzak(q,B) < uzak(P,B)  olan noktalar (sahibi ne olursa olsun, X hariç).
Ölçülen iki sayı:
  n_mercek   mercekteki nokta sayısı
  bosluk_km  uzak(P,B) / (n_mercek+1)  — merceği ortalama kaç km'de bir nokta bölüyor
⚠️ Atlas dökümüdür (D207) — S0 bir MOTOR sorusudur, tarih sorusu değil; bu yüzden
atlas burada meşru ölçüm evrenidir.
"""
import math
import sys

sys.path.insert(0, "arac")
sys.stdout.reconfigure(encoding="utf-8")
import girdi  # noqa: E402

def sahip(y, gun):
    for p in y.get("isg") or []:
        if p.get("f", "") <= gun < p.get("t", "9999"):
            return "isg:" + p.get("d", "?")
    for p in y.get("d") or []:
        if p.get("f", "") <= gun < p.get("t", "9999"):
            return "OSMANLI"
    for p in y.get("v") or []:
        if p.get("f", "") <= gun < p.get("t", "9999"):
            return "tabi"
    for p in y.get("s") or []:
        if p.get("f", "") <= gun < p.get("t", "9999"):
            return p.get("d", "?")
    return None


def km(a, b):
    return girdi.km(a["lat"], a["lon"], b["lat"], b["lon"])


VAKA = [
    ("H-0007", "1365-01-01", "OSMANLI", ["Ahtapolu (Ahtopol)", "Rezve (Rezovo)", "İğneada"]),
    ("H-0008", "1365-01-01", "bizans", ["Uzunköprü"]),
    ("H-0011", "1365-01-01", "OSMANLI", ["Gümülcine"]),
    ("H-0018a", "1412-06-01", "sirp-despotlugu", ["Şehirköy (Pirot)"]),
    ("H-0018b", "1413-08-01", "OSMANLI", ["Vidin"]),
    ("H-0024", "1443-06-01", "sirp-despotlugu", ["Şehirköy (Pirot)"]),
    ("H-0028", "1428-06-01", "OSMANLI", ["Alacahisar (Kruševac)"]),
]


# Aynı polity iki kimlikle yazılmış (rapor yan bulgu 3) — ikisi de harita:"sirbistan".
ESDEGER = {"sirp-despotlugu": "sirbistan"}
BAG_KM = 150.0   # denetle.py D7_BAG_KM ile aynı


def es(s):
    return ESDEGER.get(s, s)


def komsu(a, b, evren):
    """Göreli komşuluk çizgesi (RNG ⊂ Delaunay): a-b arasındaki merceğe hiçbir
    nokta düşmüyorsa komşudur — Voronoi peteği bitişikliğinin yaklaşığı.
    D7'nin 150 km bağı Trakya gibi sık yerde adayı KAÇIRIYOR (H-0007: İğneada →
    Lüleburgaz 77 km ⇒ D7'ye göre ada değil, haritada ada)."""
    d = km(a, b)
    return not any(km(q, a) < d and km(q, b) < d for q in evren
                   if q is not a and q is not b)


def bilesenler(noktalar, evren):
    kalan, sonuc = list(noktalar), []
    while kalan:
        kume, yigin = [], [kalan.pop()]
        while yigin:
            a = yigin.pop()
            kume.append(a)
            yakin = [b for b in kalan if komsu(a, b, evren)]
            for b in yakin:
                kalan.remove(b)
            yigin.extend(yakin)
        sonuc.append(kume)
    return sonuc


def main():
    Y = girdi.yukle(sessiz=True)
    ada = {y["ad"]: y for y in Y}
    for kod, gun, x, adlar in VAKA:
        m = ada[adlar[0]]
        var = [y for y in Y if y.get("lat") is not None and sahip(y, gun)
               and abs(y["lat"] - m["lat"]) < 4 and abs(y["lon"] - m["lon"]) < 5]
        tum_x = [y for y in var if es(sahip(y, gun)) == es(x)]
        kumeler = bilesenler(tum_x, var)
        I = next(k for k in kumeler if ada[adlar[0]] in k)
        govde = max((k for k in kumeler if k is not I), key=len, default=[])
        adlar = [y["ad"] for y in I]
        if len(I) >= len(govde):
            print(f"{kod:8s} {gun}  {x}: '{m['ad'][:22]}' en büyük "
                  f"bileşende ({len(I)} nokta) — ADA DEĞİL (petek bitişikliğinde gövdeye bağlı)")
            continue
        if not govde:
            print(f"{kod:8s} {gun}  {x}: gövde yok (tek bileşen {len(I)} nokta) — ada DEĞİL")
            continue
        P, B = min(((p, b) for p in I for b in govde), key=lambda t: km(*t))
        d = km(P, B)
        mercek = [q for q in var if es(sahip(q, gun)) != es(x) and q["ad"] not in adlar
                  and km(q, P) < d and km(q, B) < d]
        n = len(mercek)
        print(f"{kod:8s} {gun}  P={P['ad'][:18]:18s} B={B['ad'][:20]:20s} "
              f"uzak(P,B)={d:6.1f} km  n_mercek={n:2d}  bosluk={d/(n+1):6.1f} km  "
              f"[{', '.join(q['ad'][:14] + '=' + str(sahip(q, gun))[:10] for q in mercek)}]")


if __name__ == "__main__":
    main()
