# -*- coding: utf-8 -*-
"""
eksklav_olc.py — EKSKLAV ÖLÇÜMÜ (denetle.py'ye bağlı tavan)

Emre kararı, 14 Ekim 2026 (KARARLAR-1014 #49, kutu 0064/H-0010): "eksklav aleti
denetle'ye bağlansın — bugünkü ölçüm tavan." Alet `denetim/ARAC-EKSKLAV-0917.py`
(17 Eylül, iki yönde sınandı, 6 vakaya uygulandı) tek tek gün/kutu soruyordu ve
hiçbir kapıya bağlı değildi. Kural yazılıydı (dersler/D287-eksklav-karar-agaci.md),
ölçüm kapıda yoktu.

SORU (aletle AYNI yöntem, AYNI sahiplik): Osmanlı'nın d/v kırılma günlerinin
her birinde Osmanlı noktalarının Delaunay komşuluğunda (kenar ≤ 400 km) ana
gövdeden KOPUK kaç parçası var? Toplam = gün başına kopuk parça sayılarının
toplamı. Sahiplik: d/v → OSMANLI, s → d kimliği; isg sahipliği değiştirmez.
Bu bir YAKLAŞIKLAMADIR (kara maskesi/nehir yok) — motor çıktısı değil, VERİNİN
sorusudur: "kopuk parça ile ana gövde arasında kimin noktası duruyor?"

⚠️ Değişmez 7 (enklav sorgusu) ile AYNI SORU DEĞİL: o 150 km "bağlı" eşiğiyle
koridor sorusunun SORULUP SORULMADIĞINI sayar (ve kampanya boyunca donuk);
bu ölçü aradaki başka sahipli noktayı Delaunay ile sorar (Bihaç–Banaluka 104 km
vakası: eşik bağlı sayar, harita kopuk çizer).

Tavan yalnız GERİLEMEYİ bloke eder; iyileşince iner (CLAUDE.md "Tavanlar").
Hızlandırma: Delaunay ve kenar uzunlukları o gün VAR olan nokta kümesine göre
önbelleğe alınır (küme yalnız `kur` geçince değişir), km numpy ile vektörel.
"""
import math
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import gun as _gun     # C1: tarih kiyasi gun sayacıyla (dizgi MÖ'de ters)


def _sahip(y, g):
    for kat in ("d", "v"):
        for p in y.get(kat) or []:
            if p.get("f") and p.get("t") and _gun.gun(p["f"]) <= _gun.gun(g) < _gun.gun(p["t"]):
                return "OSMANLI"
    for p in y.get("s") or []:
        if p.get("f") and p.get("t") and p.get("d") and _gun.gun(p["f"]) <= _gun.gun(g) < _gun.gun(p["t"]):
            return p["d"]
    return None


def osmanli_kirilma_gunleri(Y, bas="1281-01-01", son="1923-10-29"):
    g = set()
    for y in Y:
        for kat in ("d", "v"):
            for p in y.get(kat) or []:
                for u in (p.get("f"), p.get("t")):
                    if u and _gun.gun(bas) <= _gun.gun(u) < _gun.gun(son):
                        g.add(u)
    return sorted(g, key=_gun.gun)


def olc(Y, gunler, devlet="OSMANLI", kenar_km=400.0):
    """{gun: [parça adları listesi, ...]} — yalnız kopuk parçası olan günler."""
    import numpy as np
    from scipy.spatial import Delaunay
    Y = [y for y in Y if y.get("lat") is not None and y.get("lon") is not None]
    lat0 = math.cos(math.radians(40.0))
    onb = {}
    sonuc = {}
    for g in gunler:
        V = tuple(i for i, y in enumerate(Y)
                  if not (y.get("kur") and _gun.gun(y["kur"]) > _gun.gun(g))
                  and not (y.get("bit") and _gun.gun(y["bit"]) <= _gun.gun(g)))
        if V not in onb:
            la = np.radians(np.array([Y[i]["lat"] for i in V]))
            lo = np.radians(np.array([Y[i]["lon"] for i in V]))
            pts = np.column_stack([np.degrees(lo) * lat0, np.degrees(la)])
            tri = Delaunay(pts)
            s = tri.simplices
            e = np.vstack([s[:, [0, 1]], s[:, [0, 2]], s[:, [1, 2]]])
            e = np.unique(np.sort(e, axis=1), axis=0)
            a, b = e[:, 0], e[:, 1]
            h = (np.sin((la[b] - la[a]) / 2) ** 2 +
                 np.cos(la[a]) * np.cos(la[b]) * np.sin((lo[b] - lo[a]) / 2) ** 2)
            d = 6371.0 * 2 * np.arcsin(np.sqrt(h))
            e = e[d <= kenar_km]
            kom = [[] for _ in V]
            for x, z in e:
                kom[x].append(z)
                kom[z].append(x)
            onb = {V: kom}          # tek giriş: günler sıralı, küme büyür
        kom = onb[V]
        own = [_sahip(Y[i], g) == devlet for i in V]
        gor = [False] * len(V)
        bil = []
        for k in range(len(V)):
            if not own[k] or gor[k]:
                continue
            c, st = [], [k]
            gor[k] = True
            while st:
                u = st.pop()
                c.append(u)
                for v in kom[u]:
                    if own[v] and not gor[v]:
                        gor[v] = True
                        st.append(v)
            bil.append(c)
        if len(bil) > 1:
            bil.sort(key=len, reverse=True)
            sonuc[g] = [sorted(Y[V[i]]["ad"] for i in c) for c in bil[1:]]
    return sonuc


if __name__ == "__main__":
    import sys, os, time
    sys.stdout.reconfigure(encoding="utf-8")
    sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
    import girdi
    Y = girdi.yukle(sessiz=True)
    t0 = time.time()
    G = osmanli_kirilma_gunleri(Y)
    R = olc(Y, G)
    n = sum(len(v) for v in R.values())
    print(f"{len(G)} Osmanlı kırılma günü · {len(R)} günde kopuk parça · toplam {n} parça "
          f"({time.time() - t0:.1f} sn)")
    if "--ayrinti" in sys.argv:
        for g in sorted(R, key=_gun.gun):
            for p in R[g]:
                print(f"  {g}  {', '.join(p)[:110]}")
