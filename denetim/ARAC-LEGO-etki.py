# -*- coding: utf-8 -*-
"""MOTOR-LEGO-0925 ② — govde/osm önbelleği ateşlenseydi KAÇ GÖVDE İSABET ederdi?

Motoru KOŞTURMAZ. `_onb_parca_anahtar`ın anahtarını VEKİL olarak yeniden kurar:
  üyeler  : aktif kümedeki yerleşimlerin (lon,lat) kanonik sırada
  çevre   : üyelerin kutusu ± R içindeki BÜTÜN yerleşimler (tarihten bağımsız —
            motorda da `_TUM_AGAC` tarihsiz), her biri (lon,lat,kasitli_bosluk,bos,aktifte-mi)
  R       : motorun formülü, dmax=0 ile (petek kutusu yerine NOKTA kutusu)
VEKİLİN KÖRLÜKLERİ (hepsi İSABETİ FAZLA sayar ⇒ sonuç ÜST SINIRDIR):
  · petek WKB'si anahtara girmiyor (petek değişimi çevre kutusu dışındaki bir
    noktadan gelirse görülmez — seyrek bölgede mümkün)
  · dmax=0 ⇒ R motordakinden küçük ⇒ çevre dar
  · ekleyici kapı (dolgu) ve `_kusatilmis` devir kümesi yok; yalnız kur/bit
Ağırlık = |aktif| (motorun ETA ağırlığı; süreyle R²=0,96 — uret_petek.py:6249).

Kip 1 — gerçek fark:  py denetim/ARAC-LEGO-etki.py gercek <eski_kok> <yeni_kok>
Kip 2 — Emre'nin örneği ("5 bölge × 3 zaman"): py denetim/ARAC-LEGO-etki.py senaryo <kok> [--tohum N] [--tur K]
   ① SAHİP: 5 farklı bölgeden 5 yerleşimin, 3 farklı zamanda birer `s:` döneminin sahibi değişir
   ② NOKTA: 5 farklı bölgeye birer YENİ nokta eklenir (komşunun 0,1° yanı, sahipliği kopya)
"""
import importlib.util, math, os, random, sys, time
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
from shapely import STRtree
from shapely.geometry import Point, box

EPOK, SON = "1281-01-01", "1923-11-01"
YALNIZ_UYE = "--yalniz-uye" in sys.argv   # anahtar = yalnız üye konumları (puan katmanı vekili)


def yukle(kok):
    """kok/arac/girdi.py + renkler.py + devletler.js → (YERLER, BOYALAR)"""
    arac = os.path.join(kok, "arac")
    sys.path.insert(0, arac)
    try:
        def mod(ad):
            sp = importlib.util.spec_from_file_location(f"{ad}_{abs(hash(kok))}", os.path.join(arac, ad + ".py"))
            m = importlib.util.module_from_spec(sp)
            sp.loader.exec_module(m)
            return m
        g = mod("girdi")
        import io, contextlib
        with contextlib.redirect_stdout(io.StringIO()):
            Y = g.yukle(sessiz=True)
            r = mod("renkler")
            alt = {k.get("id"): k.get("harita") for k in g.oku_devletler() if k.get("id") and k.get("harita")}
    finally:
        sys.path.remove(arac)
    B = r.BOYALAR
    for y in Y:
        for a, d in g.VARSAYILAN.items():
            y.setdefault(a, [] if d == [] else d)
        for sp in y["s"]:
            if sp["d"] not in B and alt.get(sp["d"]) in B:
                sp["d"] = alt[sp["d"]]
    return Y, B


def sahnede(y, a):
    return not ((y.get("kur") and y["kur"] > a) or (y.get("bit") and y["bit"] <= a))


def kim(y):
    return (repr(y["lon"]), repr(y["lat"]))


class Anahtarci:
    def __init__(self, Y):
        self.Y = Y
        self.pt = [Point(y["lon"], y["lat"]) for y in Y]
        self.agac = STRtree(self.pt)
        self.kim = [kim(y) for y in Y]
        self.bay = [(1 if y.get("kasitli_bosluk") else 0, 1 if y.get("bos") else 0) for y in Y]

    def __call__(self, katman, gruplar):
        if YALNIZ_UYE:
            # KARO tasarımı: `_puan_bolgesi` YALNIZ aktif noktaların konumunu okur
            # (petek, çevre, tarih YOK) ⇒ ayrı bir `puan` katmanının anahtarı bu olurdu
            return hash((katman, tuple(tuple(sorted(self.kim[j] for j in g)) for g in gruplar)))
        aks = set().union(*gruplar)
        lo = [self.Y[j]["lon"] for j in aks]; la = [self.Y[j]["lat"] for j in aks]
        x0, x1, y0, y1 = min(lo), max(lo), min(la), max(la)
        lat_max = min(89.0, max(abs(y0), abs(y1)) + 1.0)
        hat = math.hypot(250.0 / (111.32 * max(0.15, math.cos(math.radians(lat_max)))), 250.0 / 110.574)
        R = max(hat + 0.15, hat + 3.15, 0.45 * 4 + 0.15) + 0.5
        q = self.agac.query(box(x0 - R, y0 - R, x1 + R, y1 + R))
        cevre = tuple(sorted(self.kim[t] + self.bay[t] + (1 if t in aks else 0,) for t in map(int, q)))
        return hash((katman, tuple(tuple(sorted(self.kim[j] for j in g)) for g in gruplar), cevre))


def govdeler(Y, B):
    """[(anahtar, ağırlık, devlet)] — yabancı gövde + Osmanlı dönemi, motorun dönem birleştirmesiyle."""
    A = Anahtarci(Y)
    out = []
    for did in B:
        hj = [j for j, y in enumerate(Y) if any(sp["d"] == did for sp in y["s"])]
        if not hj:
            continue
        ts = set()
        for j in hj:
            for sp in Y[j]["s"]:
                if sp["d"] == did: ts.add(sp["f"]); ts.add(sp["t"])
            for dn in Y[j]["d"] + Y[j]["v"]:
                ts.add(dn["f"]); ts.add(dn["t"])
            for k in ("kur", "bit"):
                if Y[j].get(k): ts.add(Y[j][k])
        ts = sorted(t for t in ts if EPOK <= t <= SON)
        if not ts:
            continue
        if ts[0] != EPOK: ts.insert(0, EPOK)
        onceki = None
        for a in ts[:-1] if ts[-1] == SON else ts:
            ak = frozenset(j for j in hj if sahnede(Y[j], a)
                           and any(sp["d"] == did and sp["f"] <= a < sp["t"] for sp in Y[j]["s"])
                           and not any(dn["f"] <= a < dn["t"] for dn in Y[j]["d"] + Y[j]["v"]))
            if ak == onceki or not ak:
                onceki = ak; continue
            onceki = ak
            out.append((A("govde", [ak]), len(ak), did))
    # Osmanlı
    tar = sorted({dn[k] for y in Y for dn in y["d"] + y["v"] for k in ("f", "t")} |
                 {y[k] for y in Y for k in ("kur", "bit") if y.get(k)})
    tar = [t for t in tar if EPOK <= t < SON]
    onceki = None
    for a in tar:
        t_ = frozenset(j for j, y in enumerate(Y) if sahnede(y, a) and any(dn["f"] <= a < dn["t"] for dn in y["v"]))
        d_ = frozenset(j for j, y in enumerate(Y) if sahnede(y, a) and any(dn["f"] <= a < dn["t"] for dn in y["d"])) - t_
        if (d_, t_) == onceki or not (d_ | t_):
            onceki = (d_, t_); continue
        onceki = (d_, t_)
        out.append((A("osm", [d_, t_]), len(d_ | t_), "OSMANLI"))
    return out


def kiyas(eski, yeni, etiket):
    ek = {k for k, _, _ in eski}
    n = len(yeni); w = sum(x for _, x, _ in yeni)
    hn = sum(1 for k, _, _ in yeni if k in ek); hw = sum(x for k, x, _ in yeni if k in ek)
    osm = [(k, x) for k, x, d in yeni if d == "OSMANLI"]
    oh = sum(x for k, x in osm if k in ek); ow = sum(x for _, x in osm)
    print(f"  {etiket}: gövde {n:,} · İSABET {hn:,} (%{100 * hn / max(1, n):.1f}) · "
          f"ağırlıkça %{100 * hw / max(1, w):.1f} · yeniden hesap ağırlığı %{100 * (w - hw) / max(1, w):.1f}"
          f" · [Osmanlı ağırlıkça isabet %{100 * oh / max(1, ow):.1f}]")
    return hw / max(1, w)


def main():
    kip = sys.argv[1]
    t0 = time.time()
    if kip == "gercek":
        Ye, Be = yukle(sys.argv[2]); Yy, By = yukle(sys.argv[3])
        ke = {kim(y) for y in Ye}; ky = {kim(y) for y in Yy}
        print(f"eski {len(Ye)} nokta / {len(Be)} boya · yeni {len(Yy)} nokta / {len(By)} boya · "
              f"yalnız yenide {len(ky - ke)} · yalnız eskide {len(ke - ky)} konum")
        ge, gy = govdeler(Ye, Be), govdeler(Yy, By)
        kiyas(ge, gy, "koşu 6 → koşu 15 girdisi")
        kiyas(gy, gy, "sağlama (aynı girdi, beklenen %100)")
    else:
        kok = sys.argv[2]
        tohum = int(sys.argv[sys.argv.index("--tohum") + 1]) if "--tohum" in sys.argv else 1
        tur = int(sys.argv[sys.argv.index("--tur") + 1]) if "--tur" in sys.argv else 5
        Y, B = yukle(kok)
        taban = govdeler(Y, B)
        print(f"taban: {len(Y)} nokta · {len(taban):,} gövde · ağırlık {sum(x for _, x, _ in taban):,}")
        kiyas(taban, taban, "sağlama (değişiklik yok, beklenen %100)")
        import copy
        for s in ("SAHİP", "NOKTA"):
            oran = []
            for t in range(tur):
                rnd = random.Random(tohum * 1000 + t)
                Y2 = copy.deepcopy(Y)
                # 5 farklı "bölge" = 30°x30° hücre; her hücreden bir aday
                hucre = {}
                for j, y in enumerate(Y2):
                    if len([sp for sp in y["s"] if sp["d"] in B]) >= 1:
                        hucre.setdefault((int(y["lon"] // 30), int(y["lat"] // 30)), []).append(j)
                secim = [rnd.choice(v) for v in rnd.sample(sorted(hucre.values()), 5)]
                zamanlar = sorted(rnd.sample(range(1300, 1920), 3))
                for n, j in enumerate(secim):
                    y = Y2[j]
                    if s == "SAHİP":
                        yil = f"{zamanlar[n % 3]:04d}-01-01"
                        sp = min(y["s"], key=lambda p: abs(int(p["f"][:4]) - int(yil[:4])))
                        # komşu bir boyalı devletin kimliğine devret (en yakın başka sahip)
                        yak = min((k for k in range(len(Y2)) if k != j and any(p["d"] in B and p["d"] != sp["d"] for p in Y2[k]["s"])),
                                  key=lambda k: (Y2[k]["lon"] - y["lon"]) ** 2 + (Y2[k]["lat"] - y["lat"]) ** 2)
                        sp["d"] = next(p["d"] for p in Y2[yak]["s"] if p["d"] in B and p["d"] != sp["d"])
                    else:
                        z = copy.deepcopy(y); z["ad"] = y["ad"] + "~"; z["lon"] = y["lon"] + 0.1
                        Y2.append(z)
                oran.append(kiyas(taban, govdeler(Y2, B), f"{s} tur {t + 1}"))
            print(f"  ⇒ {s}: ağırlıkça isabet ort %{100 * sum(oran) / len(oran):.1f} "
                  f"(en az %{100 * min(oran):.1f} · en çok %{100 * max(oran):.1f})")
    print(f"  ({time.time() - t0:.0f} sn)")


main()
