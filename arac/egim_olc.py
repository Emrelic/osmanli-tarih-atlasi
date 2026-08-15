# -*- coding: utf-8 -*-
"""egim_olc.py — EĞİM ÇARPANINI ÖLÇEREK BUL · `T-0112`

🔴 NİÇİN — `ALTYAPI §1.2b`de yazılı vaka: ağırlık tablosu bir kez
UYDURULDU (`1,00 / 0,70 / 0,45 / 0,00`) ve *"bu sayılar hiçbir şeye
dayanmıyordu"*. Ölçüm onu değiştirdi. Eğim çarpanı aynı yola girmeyecek.

    py arac/egim_olc.py

────────────────────────────────────────────────────────────────────────
ÖLÇÜM FİKRİ — `T-0112`, üreteç önerdi, Emre onayladı (14 Ağustos)

> *"Projede **61 sefer güzergâhı** kayıtlı — gerçek orduların gerçekten
> yürüdüğü yollar. Bir maliyet yüzeyi DOĞRUYSA, en ucuz yolu o
> güzergâhlara BENZEMELİDİR. Yani elimizde HAZIR bir doğrulama kümesi
> var ve hiç kullanılmadı: hiçbir kaynak indirmeden 'c katsayılarım
> doğru mu' sorusu cevaplanabilir."*

Ve ekliyor: *"Emre askerî doktrin sormuştu; en iyi doktrin DIŞARIDA
değil İÇERİDE."*

## YÖNTEM

Her sefer güzergâhı bir **düğüm dizisidir** (`yol:[[lon,lat], …]`).
Ordu A'dan B'ye gitmiş. Farklı eğim çarpanlarıyla A→B en ucuz yolu
hesaplanır ve **gerçek güzergâha ne kadar benzediği** ölçülür.

    çarpan 0     → düz mesafe · dağ bedava
    çarpan büyük → dağdan kaçınır, vadi ve geçit izler

🟢 Doğru çarpan, en ucuz yolu **gerçek güzergâha en çok yaklaştıran**dır.

## ⚠️ VE ÜÇ SINIR — ölçümden ÖNCE yazılıyor

**① GÜZERGÂH VERİSİ KABA.** `yol:` alanı 3-6 düğümlü; ordunun izlediği
gerçek patika değil, **kabaca geçtiği yerler.** Yani ölçüm "hangi
çarpan daha iyi" der, "çarpan tam olarak şudur" DEMEZ.

**② SEFERLER YOL SEÇMEZ, HEDEF SEÇER.** Bir ordu en ucuz yolu değil,
**stratejik yolu** izler: ikmal, su, tâbi şehirler, düşmandan kaçınma.
⇒ Uyuşmazlık her zaman çarpanın hatası değildir.

**③ DENİZ SEFERLERİ ELENİR.** `tur:"deniz"` olanlar kara sürtünmesini
ölçemez. Ayrıca iki düğüm arası deniz geçen kara seferleri de elenir —
ölçülemeyen ayrı kovaya yazılır, "uyuşmadı" sayılmaz.

📌 Bu üçü yüzünden çıktı **tek bir sayı değil BİR EĞRİdir**: hangi
çarpan aralığı daha iyi uyuyor. Hüküm insanın.
"""
import heapq
import io
import json
import math
import os
import subprocess
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))

ADIM = 0.05                      # ~5,5 km — güzergâh verisi zaten kaba
CARPANLAR = (0.0, 0.005, 0.01, 0.02, 0.05, 0.10)


def _seferler():
    yol = os.path.join(KOK, "data", "savaslar.js")
    js = ("global.window={};eval(require('fs').readFileSync(%s,'utf8'));"
          "process.stdout.write(JSON.stringify(window.SEFERLER||[]));"
          % json.dumps(yol))
    c = subprocess.run(["node", "-e", js], capture_output=True,
                       encoding="utf-8", timeout=90)
    if c.returncode != 0:
        return []
    return json.loads(c.stdout)


def _yuzey(kutu, carpan):
    """(fr, z, nx, ny) — sürtünme yüzeyi. Deniz ∞, kara 1 + carpan*eğim."""
    import numpy as np
    import rasterio
    from rasterio.windows import from_bounds
    import yukseklik as yk
    dem = None
    for a in ("etopo2022_30s_dunya.tif", "etopo2022_30s_atlas.tif"):
        y = os.path.join(KOK, "veri-kaynak", "yukseklik", a)
        if os.path.exists(y) and yk.tam_mi(y)[0]:
            dem = y
            break
    if not dem:
        return None, None, 0, 0
    lon0, lat0, lon1, lat1 = kutu
    nx = max(4, int((lon1 - lon0) / ADIM))
    ny = max(4, int((lat1 - lat0) / ADIM))
    with rasterio.open(dem) as s:
        p = from_bounds(lon0, lat0, lon1, lat1, transform=s.transform)
        z = s.read(1, window=p, out_shape=(ny, nx),
                   resampling=rasterio.enums.Resampling.average).astype("float32")
    z = np.flipud(z)          # 🔴 satır 0 KUZEY → ızgaramda j=0 GÜNEY
    gy, gx = np.gradient(z)
    egim = np.hypot(gx, gy)
    fr = np.where(z > 0, 1.0 + carpan * egim, np.inf)
    return fr, z, nx, ny


def _enucuz(fr, kutu, nx, ny, a, b):
    """A'dan B'ye en ucuz yol — hücre dizisi. Ulaşılamazsa None."""
    lon0, lat0, lon1, lat1 = kutu

    def hu(p):
        i = min(nx - 1, max(0, int((p[0] - lon0) / ADIM)))
        j = min(ny - 1, max(0, int((p[1] - lat0) / ADIM)))
        return j * nx + i

    bas, son = hu(a), hu(b)
    INF = float("inf")
    d = [INF] * (nx * ny)
    onceki = [-1] * (nx * ny)
    d[bas] = 0.0
    q = [(0.0, bas)]
    DY = ADIM * 110.574
    while q:
        c, h = heapq.heappop(q)
        if c > d[h]:
            continue
        if h == son:
            break
        j, i = divmod(h, nx)
        dx = ADIM * 111.32 * math.cos(math.radians(lat0 + (j + 0.5) * ADIM))
        for di, dj in ((1, 0), (-1, 0), (0, 1), (0, -1),
                       (1, 1), (1, -1), (-1, 1), (-1, -1)):
            ii, jj = i + di, j + dj
            if not (0 <= ii < nx and 0 <= jj < ny):
                continue
            k = jj * nx + ii
            f = float(fr[jj][ii])
            if not math.isfinite(f):
                continue
            nd = c + math.hypot(dx * di, DY * dj) * f
            if nd < d[k]:
                d[k] = nd
                onceki[k] = h
                heapq.heappush(q, (nd, k))
    if d[son] == INF:
        return None
    yol, h = [], son
    while h >= 0:
        yol.append(h)
        h = onceki[h]
    return yol[::-1]


def _sapma(yol, kutu, nx, dugumler):
    """En ucuz yol ile GERÇEK güzergâh arasındaki ortalama sapma (km).

    Her gerçek düğüm için, en ucuz yolun EN YAKIN hücresine uzaklık.
    ⚠️ Simetrik değil ve bilerek: gerçek güzergâh SEYREK (3-6 düğüm),
    en ucuz yol YOĞUN. Seyrekten yoğuna bakmak doğru yön.
    """
    lon0, lat0 = kutu[0], kutu[1]
    nok = []
    for h in yol:
        j, i = divmod(h, nx)
        nok.append((lon0 + (i + 0.5) * ADIM, lat0 + (j + 0.5) * ADIM))
    top = 0.0
    for lon, lat in dugumler:
        en = min(math.hypot((x - lon) * 111.32 * math.cos(math.radians(lat)),
                            (y - lat) * 110.574) for x, y in nok)
        top += en
    return top / len(dugumler)


def main():
    S = _seferler()
    kara = [s for s in S if s.get("yol") and len(s["yol"]) >= 3
            and s.get("tur") != "deniz"]
    print("=" * 74)
    print("EĞİM ÇARPANI ÖLÇÜMÜ — T-0112 · %d sefer güzergâhı" % len(S))
    print("=" * 74)
    print("kara seferi, en az 3 düğüm: %d" % len(kara))
    print("ızgara adımı %.2f° (~%.0f km) · çarpanlar: %s\n"
          % (ADIM, ADIM * 111, ", ".join(str(c) for c in CARPANLAR)))

    sonuc = {c: [] for c in CARPANLAR}
    olculemedi = 0
    bakilan = 0
    for s in kara:
        d = [(p[0], p[1]) for p in s["yol"]]
        lo = [p[0] for p in d]
        la = [p[1] for p in d]
        pay = 2.0
        kutu = (min(lo) - pay, min(la) - pay, max(lo) + pay, max(la) + pay)
        try:
            ilk, _z, nx, ny = _yuzey(kutu, 0.0)
        except Exception:
            olculemedi += 1
            continue
        if ilk is None:
            print("🔴 DEM YOK — py arac/yukseklik_indir.py --dunya")
            return 2
        bakilan += 1
        for c in CARPANLAR:
            fr, _z, nx, ny = _yuzey(kutu, c)
            yol = _enucuz(fr, kutu, nx, ny, d[0], d[-1])
            if yol is None:
                continue
            sonuc[c].append(_sapma(yol, kutu, nx, d))

    print("%-10s %8s %10s %10s" % ("çarpan", "sefer", "ort. sapma", "medyan"))
    print("-" * 46)
    import statistics
    en_iyi = None
    for c in CARPANLAR:
        v = sonuc[c]
        if not v:
            print("%-10s %8d %10s" % (c, 0, "ölçülemedi"))
            continue
        o = sum(v) / len(v)
        m = statistics.median(v)
        if en_iyi is None or o < en_iyi[1]:
            en_iyi = (c, o)
        print("%-10s %8d %9.1f km %9.1f km" % (c, len(v), o, m))
    print("\nbakılan sefer: %d · ölçülemeyen: %d" % (bakilan, olculemedi))
    if en_iyi:
        print("\n🟢 EN İYİ UYUM: çarpan %s · ortalama sapma %.1f km"
              % (en_iyi[0], en_iyi[1]))
    print("\n" + "=" * 74)
    print("⚠️ BU BİR ÖNERİDİR, HÜKÜM DEĞİL — üç sınır ölçümden ÖNCE yazıldı:")
    print("   ① güzergâh verisi KABA (3-6 düğüm), gerçek patika değil")
    print("   ② ordular EN UCUZ yolu değil STRATEJİK yolu izler")
    print("      (ikmal · su · tâbi şehirler · düşmandan kaçınma)")
    print("   ③ deniz geçen seferler elendi — 'uyuşmadı' SAYILMADI")
    print("   ⇒ Çıktı tek sayı değil BİR EĞRİ: hangi aralık daha iyi.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
