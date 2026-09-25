# -*- coding: utf-8 -*-
"""MOTOR-LEGO-0925 · KARO — `_puan_bolgesi`nin içi: hangi kısmı pahalı, KAROya bölünür mü?

Motorun `_puan_bolgesi`ni (AST ile birebir çekilmiş) üç fazlı zamanlı KOPYASIYLA karşılaştırır:
  Pz  ızgara puanı (numpy, nokta başına halka)
  Pp  maske → satır-koşusu kutuları → unary_union (poligonlaştırma)
Kopyanın çıktısı ORİJİNALLE WKB-BİT-BİT aynı olmalı (yoksa ölçüm geçersiz).
KARO SINAVI: aynı maske, dünya KARO×KARO dereceye bölünüp her karo 400 km HALE ile ayrı
puanlanırsa (Pz karo) — maske BİT BİT aynı mı? Poligonlaştırma karo başına yapılıp
birleşirse (Pp karo) — sonuç geometrik olarak aynı mı (simetrik fark alanı), WKB aynı mı?
Kullanım: py denetim/ARAC-LEGO-karo-puan.py <koşu6_kok> [--ornek N] [--karo 10]
"""
import importlib.util, math, os, random, sys, time
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
import numpy as np
import shapely
from shapely.geometry import box
from shapely.ops import unary_union

sp = importlib.util.spec_from_file_location("ko", os.path.join(r"C:\atlas\denetim", "ARAC-LEGO-karo-olc.py"))
ko = importlib.util.module_from_spec(sp); sp.loader.exec_module(ko)


def pencere(ns, aktif, Y):
    KV = ns["KV_ADIM"]; _r = ns["PUAN_HALKA"][-1][0]
    _lo = [Y[j]["lon"] for j in aktif]; _la = [Y[j]["lat"] for j in aktif]
    c = max(0.15, math.cos(math.radians(max(abs(min(_la)), abs(max(_la))))))
    x0 = max(ns["_kvx0"], min(_lo) - _r / 111.320 / c)
    x1 = min(ns["_kvx0"] + ns["_kvnx"] * KV, max(_lo) + _r / 111.320 / c)
    y0 = max(ns["_kvy0"], min(_la) - _r / 110.574)
    y1 = min(ns["_kvy0"] + ns["_kvny"] * KV, max(_la) + _r / 110.574)
    return x0, y0, max(1, int((x1 - x0) / KV)), max(1, int((y1 - y0) / KV))


def puan_izgara(ns, aktif, Y, x0, y0, nx, ny, j0=0, i0=0, h=None, w=None):
    """_puan_bolgesi'nin puan döngüsünün AYNISI; isteğe bağlı alt pencere (satır j0.., sütun i0..)."""
    KV = ns["KV_ADIM"]
    h = ny if h is None else h; w = nx if w is None else w
    _p = np.zeros((h, w), dtype="int16")
    _cy = y0 + (np.arange(j0, j0 + h) + 0.5) * KV
    _cx = x0 + (np.arange(i0, i0 + w) + 0.5) * KV
    _cos = np.cos(np.radians(_cy))
    for _jj in aktif:
        _yy = Y[_jj]
        _dy = (_cy - _yy["lat"]) * 110.574
        _dx = (_cx[None, :] - _yy["lon"]) * 111.320 * _cos[:, None]
        _m = np.sqrt(_dx ** 2 + _dy[:, None] ** 2)
        _k = np.zeros(_m.shape, dtype="int16")
        _once = 0.0
        for _e, _pu in ns["PUAN_HALKA"]:
            _k[(_m >= _once) & (_m < _e)] = _pu
            _once = _e
        _p += _k
    return _p >= ns["PUAN_ESIK"]


def poligonla(msk, x0, y0, KV, j0=0, i0=0):
    _kut = []
    ny, nx = msk.shape
    for _j2 in range(ny):
        _sat = msk[_j2]
        if not _sat.any():
            continue
        _i2 = 0
        while _i2 < nx:
            if _sat[_i2]:
                _b = _i2
                while _i2 < nx and _sat[_i2]:
                    _i2 += 1
                _kut.append(box(x0 + (i0 + _b) * KV, y0 + (j0 + _j2) * KV,
                                x0 + (i0 + _i2) * KV, y0 + (j0 + _j2 + 1) * KV))
            else:
                _i2 += 1
    return unary_union(_kut) if _kut else None, len(_kut)


def main():
    kok6 = sys.argv[1]
    n_orn = int(sys.argv[sys.argv.index("--ornek") + 1]) if "--ornek" in sys.argv else 12
    KARO = float(sys.argv[sys.argv.index("--karo") + 1]) if "--karo" in sys.argv else 10.0
    ns = ko.motor_ad_alani()
    Y, B, PE, kara, et = ko.kur(kok6)
    ko.ns_hazirla(ns, Y, kara)
    KV = ns["KV_ADIM"]
    rnd = random.Random(7)
    butun = [(did, a, ak) for did in B for a, ak in ko.donemler(Y, B, did)]
    orn = rnd.choices(butun, weights=[len(ak) for _, _, ak in butun], k=n_orn)
    T = {"orij": 0.0, "Pz": 0.0, "Pp": 0.0, "Pz_karo": 0.0, "Pp_karo": 0.0, "Pp_karo_birles": 0.0}
    bit_ayni = maske_ayni = 0; karo_geo_fark = []; karo_wkb = 0; kutu_say = 0
    for did, a, ak in orn:
        ns["_PUAN_ONBELLEK"].clear()
        s = time.perf_counter(); g0 = ns["_puan_bolgesi"](did, ak, None); T["orij"] += time.perf_counter() - s
        x0, y0, nx, ny = pencere(ns, ak, Y)
        s = time.perf_counter(); msk = puan_izgara(ns, ak, Y, x0, y0, nx, ny); T["Pz"] += time.perf_counter() - s
        s = time.perf_counter(); g1, nk = poligonla(msk, x0, y0, KV); T["Pp"] += time.perf_counter() - s
        kutu_say += nk
        bit_ayni += int((g0 is None and g1 is None) or (g0 is not None and g1 is not None and
                        shapely.to_wkb(g0) == shapely.to_wkb(g1)))
        # ---- KARO: maske karo karo, her karo yalnız HALE içindeki noktalarla ----
        kh = int(round(KARO / KV))
        halo_km = ns["PUAN_HALKA"][-1][0]
        s = time.perf_counter()
        mk = np.zeros_like(msk)
        karolar = []
        for j0 in range(0, ny, kh):
            for i0 in range(0, nx, kh):
                h, w = min(kh, ny - j0), min(kh, nx - i0)
                cx0, cy0 = x0 + i0 * KV, y0 + j0 * KV
                cx1, cy1 = cx0 + w * KV, cy0 + h * KV
                lat_m = max(abs(cy0), abs(cy1))
                dx = halo_km / 111.320 / max(0.05, math.cos(math.radians(min(89.9, lat_m)))) + KV
                dy = halo_km / 110.574 + KV
                yak = [q for q in ak if cx0 - dx <= Y[q]["lon"] <= cx1 + dx and cy0 - dy <= Y[q]["lat"] <= cy1 + dy]
                if yak:
                    mk[j0:j0 + h, i0:i0 + w] = puan_izgara(ns, yak, Y, x0, y0, nx, ny, j0, i0, h, w)
                karolar.append((j0, i0, h, w))
        T["Pz_karo"] += time.perf_counter() - s
        maske_ayni += int(np.array_equal(mk, msk))
        s = time.perf_counter()
        parca = [poligonla(msk[j0:j0 + h, i0:i0 + w], x0, y0, KV, j0, i0)[0] for j0, i0, h, w in karolar]
        T["Pp_karo"] += time.perf_counter() - s
        s = time.perf_counter()
        parca = [p for p in parca if p is not None]
        g2 = unary_union(parca) if parca else None
        T["Pp_karo_birles"] += time.perf_counter() - s
        if g1 is not None and g2 is not None:
            karo_geo_fark.append(g1.symmetric_difference(g2).area / max(g1.area, 1e-12))
            karo_wkb += int(shapely.to_wkb(g1) == shapely.to_wkb(g2))
        print(f"    {did:22s} {a} |aktif| {len(ak):4d} · ızgara {nx}×{ny} · kutu {nk:6,d} · "
              f"orij {T['orij']:.0f}", flush=True)
    n = len(orn)
    print(f"\n  örnek {n} (ağırlıkla orantılı) · KARO {KARO}°")
    print(f"  kopya = orijinal (WKB bit bit): {bit_ayni}/{n}   ← ölçüm geçerliliği")
    Tp = T["Pz"] + T["Pp"]
    print(f"  _puan_bolgesi orijinal {T['orij']:.1f} sn · kopya {Tp:.1f} sn = ızgara Pz {T['Pz']:.1f} "
          f"(%{100 * T['Pz'] / Tp:.0f}) + poligonlaştırma Pp {T['Pp']:.1f} (%{100 * T['Pp'] / Tp:.0f}) · "
          f"ort kutu/gövde {kutu_say / n:,.0f}")
    print(f"  KARO maske = tek parça maske (BİT BİT): {maske_ayni}/{n} · karo ızgara {T['Pz_karo']:.1f} sn")
    print(f"  KARO poligon: karo başına {T['Pp_karo']:.1f} sn + birleştirme {T['Pp_karo_birles']:.1f} sn · "
          f"WKB aynı {karo_wkb}/{len(karo_geo_fark)} · simetrik fark/alan en çok "
          f"{max(karo_geo_fark) if karo_geo_fark else 0:.2e}")


if __name__ == "__main__":
    main()
