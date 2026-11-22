# -*- coding: utf-8 -*-
"""bosluk_sinif.py — kara karesi BOŞLUKLARINI ÜÇ NEDENE AYIRIR (Emre, 22 Kasım 2026).

Emre: "Bir bölge boş ise ya oradaki yerleşim yeri haritaya konulmamıştır, ya o yerleşim yerinin
sahipliği yapılmamıştır, ya kronoloji maddesi eksiktir."  Bu araç ilk İKİSİNİ her tarih için ve her kıta
için sayar (üçüncüsü Değişmez 2 + devlet kronoloji yoğunluğu ile ayrı ölçülür):

  OK            kare içinde o gün SAHNEDE (sahipli) nokta var
  ① NOKTA-YOK   kare içinde o günkü varlığı bilinen HİÇ nokta yok (yoksa hiç; ya da hepsi kur: > gün)
  ② SAHİPSİZ    kare içinde o gün VAR olan nokta(lar) var ama hiçbirinin o güne ait penceresi yok
  ③ (ayrı)      kronoloji eksiği: `py arac/denetle.py` Değişmez 2 + devlet başına kronoloji sayımı

kullanım:  py arac/bosluk_sinif.py [--kare 5] [--gun 1300-01-01 ...]
DEM gerekir (veri-kaynak/yukseklik/*.tif; deniz karesi sayılmaz). Sayı üretir, karar vermez.
"""
import math
import os
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))

GUNLER = ["1100-01-01", "1200-01-01", "1280-01-01", "1300-01-01", "1400-01-01", "1500-01-01",
          "1600-01-01", "1700-01-01", "1800-01-01", "1900-01-01"]
KITALAR = ["Avrupa", "Asya", "Afrika", "Amerika", "Okyanusya"]


def kita(lon, lat):
    """Kaba kutular (tarama aracı; ölçüt değil)."""
    if lon < -30:
        return "Amerika"
    if lon > 110 and lat < -8 or (110 <= lon <= 180 and lat < 0) or lat < -11 and lon > 100:
        return "Okyanusya"
    if lat >= 34 and -12 <= lon <= 40 and not (lat < 38 and lon > 28):
        return "Avrupa"
    if -20 <= lon <= 52 and lat < 37 and not (lon > 34 and lat > 12):
        return "Afrika"
    return "Asya"


def main(argv):
    import rasterio
    from rasterio.windows import from_bounds
    import girdi
    import yukseklik as yk

    kare = 5.0
    if "--kare" in argv:
        kare = float(argv[argv.index("--kare") + 1])
    gunler = GUNLER
    if "--gun" in argv:
        gunler = []
        i = argv.index("--gun") + 1
        while i < len(argv) and not argv[i].startswith("--"):
            gunler.append(argv[i]); i += 1
    dem = None
    for a in ("etopo2022_30s_dunya.tif", "etopo2022_30s_atlas.tif"):
        y = os.path.join(KOK, "veri-kaynak", "yukseklik", a)
        if os.path.exists(y) and yk.tam_mi(y)[0]:
            dem = y
            break
    if not dem:
        print("🔴 DEM YOK — py arac/yukseklik_indir.py --dunya")
        return 2
    Y = [y for y in girdi.yukle(sessiz=True) if y.get("lon") is not None]

    kareler = []   # (i, j, kita)
    with rasterio.open(dem) as s:
        b = s.bounds
        for j in range(int(math.floor(b.bottom / kare)), int(math.ceil(b.top / kare))):
            for i in range(int(math.floor(b.left / kare)), int(math.ceil(b.right / kare))):
                lon0, lat0 = i * kare, j * kare
                try:
                    p = from_bounds(max(lon0, b.left), max(lat0, b.bottom), min(lon0 + kare, b.right),
                                    min(lat0 + kare, b.top), transform=s.transform)
                    z = s.read(1, window=p, out_shape=(16, 16),
                               resampling=rasterio.enums.Resampling.average)
                except Exception:
                    continue
                if float((z > 0).mean()) < 0.15:
                    continue
                kareler.append((i, j, kita(lon0 + kare / 2, lat0 + kare / 2)))

    def pencere_var(y, g):
        for a in ("d", "v", "s"):
            for p in (y.get(a) or []):
                if (p.get("f") or "") <= g < (p.get("t") or "9999"):
                    return True
        return bool(y.get("kasitli_bosluk"))

    print("=" * 96)
    print("BOŞLUK SINIFLARI · kare %.0f° · kara karesi %d · DEM %s" % (kare, len(kareler), os.path.basename(dem)))
    print("OK = sahipli nokta var · ① NOKTA-YOK = o gün varlığı bilinen nokta yok · ② SAHİPSİZ = nokta var, o güne penceresi yok")
    print("=" * 96)
    for g in gunler:
        kova = {}
        for y in Y:
            kur = y.get("kur")
            bit = y.get("bit")
            a = (int(math.floor(y["lon"] / kare)), int(math.floor(y["lat"] / kare)))
            h = kova.setdefault(a, [0, 0, 0])      # sahipli, sahipsiz(var), henüz-yok
            if kur and kur > g:
                h[2] += 1
            elif bit and bit <= g:
                continue
            elif pencere_var(y, g):
                h[0] += 1
            else:
                h[1] += 1
        sat = {k: [0, 0, 0, 0] for k in KITALAR}   # ok, noktayok, sahipsiz, toplam
        liste = {"①": [], "②": []}
        for i, j, k in kareler:
            ok, sz, hy = kova.get((i, j), [0, 0, 0])
            if not ok:
                liste["②" if sz else "①"].append("%s %d°D %d°K%s" % (k, i * kare, j * kare, (" (sahipsiz %d, henüz-yok %d)" % (sz, hy)) if (sz or hy) else ""))
            sat[k][3] += 1
            if ok:
                sat[k][0] += 1
            elif sz:
                sat[k][2] += 1
            else:
                sat[k][1] += 1
        print("\nGÜN %s" % g)
        print("  %-10s %6s %6s %12s %10s %8s" % ("kıta", "kare", "OK", "①nokta-yok", "②sahipsiz", "boş%"))
        T = [0, 0, 0, 0]
        for k in KITALAR:
            o, n1, n2, t = sat[k]
            for x in range(4):
                T[x] += sat[k][x]
            if t:
                print("  %-10s %6d %6d %12d %10d %7.0f%%" % (k, t, o, n1, n2, 100.0 * (n1 + n2) / t))
        print("  %-10s %6d %6d %12d %10d %7.0f%%" % ("TOPLAM", T[3], T[0], T[1], T[2], 100.0 * (T[1] + T[2]) / max(1, T[3])))
        if "--liste" in argv:
            for t, ad in (("①", "NOKTA-YOK kareler (sol-alt köşe)"), ("②", "SAHİPSİZ kareler (sol-alt köşe)")):
                print("  -- %s %s (%d):" % (t, ad, len(liste[t])))
                for x in sorted(liste[t]):
                    print("     " + x)
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
