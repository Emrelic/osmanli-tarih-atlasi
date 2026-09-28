"""KORIDOR-0081 — Değişmez 7 evreninin RNG ile YENİDEN ölçümü (hüküm M-5370).

D7 (arac/denetle.py degismez7) iki yerleşimi ≤150 km ise BAĞLI sayar. Bu bağ sık
bölgede yanlış bağlar: 1365'te İğneada→Lüleburgaz 77 km, arada 6 Bizans noktası —
D7'ye göre tek bileşen, haritada ada (H-0007).
Bu alet D7'nin BÜTÜN kurallarını (ada eşiği 5 · beş muafiyet · kova sınırları)
aynen kopyalar ve YALNIZ bileşen bağını değiştirir:
    RNG bağı  a-b ⇔ küresel Delaunay kenarı  VE  ≤ D7_BAG_KM  VE  merceklerinde
              (uzak(q,a)<uzak(a,b) ve uzak(q,b)<uzak(a,b)) hiçbir nokta yok.
    Mercek sınaması a ile b'nin Delaunay komşularına karşı yapılır (yaklaşık —
    RNG ⊂ Delaunay; tam sınama N² olurdu).
⇒ RNG bağı ⊆ D7 bağı. Coğrafi tecrit muafiyeti (②) D7'nin 150 km komşu SAYISINI
okumaya devam eder — o soru "yerleşim seyrek mi", bitişiklik değil.
D7'YE DOKUNULMAZ; denetle.py yalnız import edilir (sabitler + D7'nin kendi listesi).

Kullanım: py denetim/KORIDOR-0081-rng7.py [--json denetim/KORIDOR-0081-rng7.json]
"""
import json
import math
import sys
from collections import deque
from datetime import date, timedelta

import numpy as np
from scipy.spatial import ConvexHull

sys.path.insert(0, "arac")
sys.stdout.reconfigure(encoding="utf-8")
import girdi  # noqa: E402
import denetle as D  # noqa: E402


def rng_komsuluk(Y, kip="rng"):
    """kip: "rng" (mercek boş) · "gabriel" (çap-çember boş) · "delaunay" (süzgeç yok).
    Hepsi ≤ D7_BAG_KM. Delaunay = kırpılmamış düzlemde TAM petek bitişikliği;
    Gabriel ve RNG ondan kademeli olarak katıdır (RNG ⊂ Gabriel ⊂ Delaunay)."""
    n = len(Y)
    xyz = []
    for i, y in enumerate(Y):
        la, lo = math.radians(y["lat"]), math.radians(y["lon"])
        # Aynı koordinatlı noktalar hull'ı bozar — kayıt sırasına bağlı milimetrik sapma.
        e = 1e-9 * i
        xyz.append((math.cos(la) * math.cos(lo) + e, math.cos(la) * math.sin(lo), math.sin(la) + e))
    hull = ConvexHull(np.array(xyz))
    dk = [set() for _ in range(n)]
    for a, b, c in hull.simplices:
        for u, v in ((a, b), (b, c), (a, c)):
            dk[u].add(v)
            dk[v].add(u)
    P = [(y["lat"], y["lon"]) for y in Y]
    kom = [[] for _ in range(n)]
    for a in range(n):
        for b in dk[a]:
            if b < a:
                continue
            d = D._d7_km(P[a], P[b])
            if d > D.D7_BAG_KM:
                continue
            aday = [q for q in (dk[a] | dk[b]) if q != a and q != b]
            if kip == "rng" and any(D._d7_km(P[q], P[a]) < d and D._d7_km(P[q], P[b]) < d
                                    for q in aday):
                continue
            if kip == "gabriel" and any(D._d7_km(P[q], P[a]) ** 2 + D._d7_km(P[q], P[b]) ** 2
                                        < d * d for q in aday):
                continue
            kom[a].append(b)
            kom[b].append(a)
    return kom


def degismez7_rng(Y, kom_bag, kom_sayi):
    """denetle.degismez7'nin birebir kopyası; bileşen = kom_bag, tecrit = kom_sayi."""
    DON = []
    for y in Y:
        d = []
        for kat in ("d", "v"):
            for p in (y.get(kat) or []):
                if p.get("f") and p.get("t"):
                    d.append((p["f"], p["t"], "OSMANLI", bool(p.get("enklav"))))
        for p in (y.get("s") or []):
            if p.get("f") and p.get("t") and p.get("d"):
                d.append((p["f"], p["t"], p["d"], bool(p.get("enklav"))))
        DON.append(d)

    def sahip(i, g):
        for f, t, s, _e in DON[i]:
            if f <= g < t:
                return s
        return None

    def bilesen(i, g, s, tavan):
        gor, q = {i}, deque([i])
        while q and len(gor) < tavan:
            u = q.popleft()
            for v in kom_bag[u]:
                if v not in gor and sahip(v, g) == s:
                    gor.add(v)
                    q.append(v)
        return gor

    def artir(g, gun):
        p = g.split("-")
        try:
            return (date(int(p[0]), int(p[1]), int(p[2])) + timedelta(days=gun)).isoformat()
        except Exception:
            return g

    muaf = {"beyan": 0, "cografi-tecrit": 0, "ada-fethi": 0, "kucuk-devlet": 0, "gecici-cephe": 0}
    ihlal = []
    for i, y in enumerate(Y):
        for f, t, s, enk in DON[i]:
            if f <= "1281-01-01" or f >= "1923-10-29":
                continue
            ada = bilesen(i, f, s, D.D7_ADA_ESIK + 1)
            if len(ada) > D.D7_ADA_ESIK:
                continue
            if enk:
                muaf["beyan"] += 1
                continue
            if len(kom_sayi[i]) <= D.D7_TECRIT_KOMSU:
                muaf["cografi-tecrit"] += 1
                continue
            if any(Y[j]["ad"] in D.D7_ADA_MUAF for j in ada):
                muaf["ada-fethi"] += 1
                continue
            toplam = sum(1 for j in range(len(Y)) if sahip(j, f) == s)
            if toplam < D.D7_KUCUK_KAT * len(ada):
                muaf["kucuk-devlet"] += 1
                continue
            g1 = artir(f, D.D7_CEPHE_GUN)
            if t <= g1:
                g1 = artir(t, -1)
            if sahip(i, g1) != s or len(bilesen(i, g1, s, D.D7_ADA_ESIK + 1)) > D.D7_ADA_ESIK:
                muaf["gecici-cephe"] += 1
                continue
            en, p0 = None, (y["lat"], y["lon"])
            for j in range(len(Y)):
                if j in ada or sahip(j, f) != s:
                    continue
                dk = D._d7_km(p0, (Y[j]["lat"], Y[j]["lon"]))
                if en is None or dk < en[0]:
                    en = (dk, Y[j]["ad"])
            km = en[0] if en else None
            kova = ("C-hakiki" if km is None or km > 800 else
                    "A-koridor" if km <= 300 else "B-bilinmiyor")
            ihlal.append({"gun": f, "yerlesim": y["ad"], "sahip": s,
                          "ada": sorted(Y[j]["ad"] for j in ada),
                          "ana_km": round(km, 1) if km is not None else None,
                          "ana": en[1] if en else None, "kova": kova})
    return ihlal, muaf


def main():
    # denetle.py'nin kendi yükleyicisi — D7 sayısı birebir (725) çıkmalı, yoksa
    # evren farklıdır ve karşılaştırma geçersizdir (aşağıda basılır).
    Y = D.yerlesimleri_yukle()
    d7, m7 = D.degismez7(Y)
    kom150 = D._d7_komsuluk(Y)
    kip = sys.argv[sys.argv.index("--kip") + 1] if "--kip" in sys.argv else "rng"
    print(f"KİP: {kip}")
    kr = rng_komsuluk(Y, kip)
    rn, mr = degismez7_rng(Y, kr, kom150)
    anahtar = lambda r: (r["gun"], r["yerlesim"], r["sahip"])  # noqa: E731
    A, B = {anahtar(r): r for r in d7}, {anahtar(r): r for r in rn}
    kes = A.keys() & B.keys()
    kacan = B.keys() - A.keys()
    dusen = A.keys() - B.keys()
    print(f"nokta {len(Y)} · RNG kenarı {sum(map(len, kr)) // 2} · 150-km kenarı {sum(map(len, kom150)) // 2}")
    print(f"D7 kovası   {len(A)}   muaf {m7}")
    print(f"{kip.upper()} kovası  {len(B)}   muaf {mr}")
    print(f"kesişim {len(kes)} · D7'nin KAÇIRDIĞI (RNG'de var) {len(kacan)} · "
          f"RNG'nin DÜŞÜRDÜĞÜ (D7'de var) {len(dusen)}")
    h7 = [k for k in kacan if k[1] in ("İğneada", "Rezve (Rezovo)", "Ahtapolu (Ahtopol)")]
    print("H-0007 sınavı (kaçanlar içinde):", sorted(h7))
    if "--json" in sys.argv:
        yol = sys.argv[sys.argv.index("--json") + 1]
        with open(yol, "w", encoding="utf-8") as f:
            json.dump({"d7": d7, "rng": rn, "kesisim": sorted(kes), "kacan": sorted(kacan),
                       "dusen": sorted(dusen), "muaf_d7": m7, "muaf_rng": mr},
                      f, ensure_ascii=False, indent=0)
        print("yazıldı:", yol)


if __name__ == "__main__":
    main()
