# -*- coding: utf-8 -*-
"""MOTOR-KOMSU-KUR-BOL-1016 — MALİYET TAHMİNİ (motor koşturmadan, ~1 dk, tek çekirdek).

Motorun peteği YERİNE kaba yakınlık: scipy Voronoi (kara maskesi YOK, hücre
noktanın ±2° kutusuna kırpılır) ⇒ komşuluk ve zarflar motordakinden GENİŞ
(denizaşırı komşu sayılır) ⇒ sayılar ÜST SINIRDIR.
Devir kümesi vekili: o gün kurulmamış/yok olmuş HER nokta (motor yalnız sahibi
yazılı + kuşatılmış olanı devreder ⇒ yine üst sınır).

İki sayı basar:
  ① ERİŞİM (GERÇEK `_kkb_erisim` AST'den; kip geo = Delaunay grafı vekil · kip zarf = kaba zarf) → ek GÖVDE HESABI
     üst sınırı: (devlet, gün) çiftleri, gün o devletin kendi kırılma günü DEĞİL
  ② DELAUNAY 1-komşu (gerçek pay alışverişine yakın) → ek DÖNEM tahmini
Taban: her devletin bugünkü kırılma günü sayısı (kendi s/d/v günleri; KOŞU 26'nın
sınır hattı günleri HARİÇ — onlar d_sinirlar'dan gelir, burada okunmaz).
Kullanım: py denetim/ARAC-KOMSU-KUR-BOL-MALIYET-1016.py [--json yol]
"""
import ast, io, json, os, sys, time

sys.stdout.reconfigure(encoding="utf-8", errors="replace", line_buffering=True)
AG = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(AG, "arac"))
import numpy as np
from scipy.spatial import Voronoi, Delaunay
import girdi

SRC = io.open(os.path.join(AG, "arac", "uret_petek.py"), encoding="utf-8").read()
ns = {}
for n in ast.parse(SRC).body:
    if isinstance(n, ast.FunctionDef) and n.name in ("_kkb_bilesenler", "_kkb_en_yakin", "_kkb_erisim"):
        exec(ast.get_source_segment(SRC, n), ns)

t0 = time.time()
Y = girdi.yukle(sessiz=True)
EPOK, SON = girdi.UFUK[0], girdi.UFUK[1]
n = len(Y)
xy = np.array([[y["lon"], y["lat"]] for y in Y], dtype=float)
# yinelenen konum Voronoi'yi bozar — ufak titreşim
xy_v = xy + np.random.RandomState(0).uniform(-1e-6, 1e-6, xy.shape)
vor = Voronoi(xy_v)
zarf = np.zeros((n, 4))
for i in range(n):
    r = vor.regions[vor.point_region[i]]
    x, y = xy[i]
    if not r or -1 in r:
        zarf[i] = (x - 2, y - 2, x + 2, y + 2)
        continue
    v = vor.vertices[r]
    zarf[i] = (max(v[:, 0].min(), x - 2), max(v[:, 1].min(), y - 2),
               min(v[:, 0].max(), x + 2), min(v[:, 1].max(), y + 2))
bos = np.zeros(n, dtype=bool)
tri = Delaunay(xy_v)
ip, ix = tri.vertex_neighbor_vertices
komsu = [set(ix[ip[i]:ip[i + 1]].tolist()) for i in range(n)]

gunler = sorted(g for g in ({y["kur"] for y in Y if y.get("kur")} | {y["bit"] for y in Y if y.get("bit")})
                if EPOK < g <= SON)


def devir(g):
    return frozenset(i for i, y in enumerate(Y)
                     if (y.get("kur") and y["kur"] > g) or (y.get("bit") and y["bit"] <= g))


def sahip(i, g):
    y = Y[i]
    if any(p["f"] <= g < p["t"] for p in y["d"] + y["v"]):
        return None                      # Osmanlı (doğrudan/tâbi) — yabancı gövde değil
    for p in y["s"]:
        if p["f"] <= g < p["t"]:
            return p["d"]
    return None


# taban kırılma günleri (motor FAZ 1: kendi noktalarının s günleri + d/v günleri)
ts = {}
for y in Y:
    ds = {p["d"] for p in y["s"]}
    for d in ds:
        k = ts.setdefault(d, set())
        for p in y["s"]:
            if p["d"] == d:
                k.add(p["f"]); k.add(p["t"])
        for p in y["d"] + y["v"]:
            k.add(p["f"]); k.add(p["t"])
ts = {d: {t for t in v if EPOK <= t <= SON} for d, v in ts.items()}
taban_donem = sum(max(0, len(v) - 1) for v in ts.values())

KIPLER = ("geo", "zarf")
er_cift = {k: set() for k in KIPLER}
er_boy = {k: [] for k in KIPLER}
er_sn = {k: 0.0 for k in KIPLER}
dl_cift = set()
once = devir(EPOK)
t1 = time.time()
for g in gunler:
    sonra = devir(g)
    for kip in KIPLER:
        _t = time.time()
        if kip == "geo":     # petek komşuluğu vekili = Delaunay komşuluğu (pay modellenmez)
            er = ns["_kkb_erisim"](xy, bos, once, sonra, graf=komsu)
        else:                # motorun zarf kuralı, kaba zarf, YÜRÜYÜŞ payı 0,32° (KOŞU 26)
            er = ns["_kkb_erisim"](xy, bos, once, sonra, zarf=zarf, pay=0.32)
        er_sn[kip] += time.time() - _t
        er_boy[kip].append(len(er))
        for j in er:
            d = sahip(j, g)
            if d and g not in ts.get(d, ()):
                er_cift[kip].add((d, g))
    # Delaunay 1-komşu: ölü/doğan noktanın canlı komşuları
    X = once ^ sonra
    for x in X:
        for j in komsu[x]:
            if j in sonra and j in once:
                continue
            d = sahip(j, g)
            if d and g not in ts.get(d, ()):
                dl_cift.add((d, g))
    once = sonra
t2 = time.time()

print(f"veri: {n} nokta · {sum(1 for y in Y if y.get('kur'))} kur: · {sum(1 for y in Y if y.get('bit'))} bit: "
      f"· {len(gunler)} varlık kırılma günü (ufuk içinde)")
print(f"taban: {len(ts)} kimlik · {taban_donem} dönem aralığı (kendi günleri, sınır hattı günleri HARİÇ)")
for kip in KIPLER:
    print(f"① ERİŞİM kip={kip} ({'Delaunay grafı' if kip == 'geo' else 'kaba zarf, pay 0,32°'}): {len(er_cift[kip])} ek (devlet, gün) "
          f"çifti → ek gövde hesabı ÜST SINIRI · {len({g for _, g in er_cift[kip]})} farklı gün · erişim boyu ort "
          f"{np.mean(er_boy[kip]):.1f} / en çok {max(er_boy[kip])} · {len({d for d, _ in er_cift[kip]})} devlet"
          f" · {er_sn[kip]:.1f} sn")
print(f"② DELAUNAY 1-komşu: {len(dl_cift)} ek (devlet, gün) çifti → ek DÖNEM tahmini "
      f"· {len({d for d, _ in dl_cift})} devlet · tabanın %{100.0 * len(dl_cift) / max(1, taban_donem):.1f}'i")
print(f"süre: yükleme {t1 - t0:.0f} sn · döngü {t2 - t1:.1f} sn (iki kip + Delaunay)")
for ad in ("inancogullari", "germiyan", "saruhan", "karesi", "hamid"):
    print(f"   {ad}: taban {max(0, len(ts.get(ad, ())) - 1)} · ERİŞİM geo +{sum(1 for d, _ in er_cift['geo'] if d == ad)} zarf +{sum(1 for d, _ in er_cift['zarf'] if d == ad)}"
          f" · DELAUNAY +{sum(1 for d, _ in dl_cift if d == ad)}"
          f" · {sorted(g for d, g in dl_cift if d == ad)[:6]}")
if "--json" in sys.argv:
    with open(sys.argv[sys.argv.index("--json") + 1], "w", encoding="utf-8") as f:
        json.dump({"erisim": {k: sorted(v) for k, v in er_cift.items()}, "delaunay": sorted(dl_cift), "taban_donem": taban_donem},
                  f, ensure_ascii=False)
