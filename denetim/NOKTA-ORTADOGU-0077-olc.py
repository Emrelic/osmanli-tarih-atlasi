# -*- coding: utf-8 -*-
"""NOKTA-ORTADOGU-0077 — madde pencerelerinde "o gün hangi nokta kimin?" ölçümü.

HARITA-0076-sahip.py'nin sahip()/isgal() işlevlerini kullanır (Kudüs sınavından
geçmiş şema). Her nokta tek satır: ad · lat/lon · sahip · tâbi · işgal · dosya.
Hüküm vermez, sayı verir. arac/ ve data/ya YAZMAZ.

Kullanım: py denetim/NOKTA-ORTADOGU-0077-olc.py [madde-süzgeci]
"""
import sys
import importlib.util

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
import os  # MUTLAK-KOK-DENETIM-1006: kök için
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "arac"))
import girdi  # noqa: E402

_spec = importlib.util.spec_from_file_location("h76", os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "denetim", "HARITA-0076-sahip.py"))
_m = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(_m)
gun_no, sahip, isgal = _m.gun_no, _m.sahip, _m.isgal

# (madde, lon0, lon1, lat0, lat1, gün) — pencereler ekran görüntüsü damgasından
PENCERELER = [
    ("H-0001", 15.76, 18.15, 49.82, 51.06, "1883-11-05"),
    ("H-0004", 42.62, 50.14, 27.12, 32.57, "1914-11-22"),
    ("H-0005", 22.33, 38.31, 17.94, 32.85, "1914-12-18"),
    ("H-0006", 21.93, 41.17, 8.41, 22.84, "1914-12-18"),
    ("H-0017", 22.32, 39.88, 16.00, 32.43, "1914-12-18"),
    ("H-0029", 50.08, 52.39, 22.73, 26.39, "1916-09-17"),
    ("H-0031a", 44.84, 49.19, 31.12, 35.67, "1917-03-11"),
    ("H-0031b", 46.99, 49.44, 29.85, 32.58, "1917-03-11"),
    ("H-0033", 42.22, 46.57, 34.71, 36.93, "1917-03-11"),
    ("H-0046", 39.34, 41.34, 35.87, 37.59, "1918-10-27"),
    ("H-0050", 8.34, 15.19, 45.77, 48.95, "1918-11-11"),
    ("H-0074a", 43.34, 45.93, 39.37, 41.40, "1920-07-28"),
    ("H-0074b", 46.57, 50.00, 41.05, 43.10, "1920-07-28"),
    ("H-0087", 25.90, 28.54, 28.47, 30.25, "1922-03-15"),
]


def main():
    suz = sys.argv[1] if len(sys.argv) > 1 else ""
    Y = girdi.yukle(sessiz=True)
    if isinstance(Y, tuple):
        Y = Y[0]
    for madde, x0, x1, y0, y1, tarih in PENCERELER:
        if suz and suz not in madde:
            continue
        gun = gun_no(tarih)
        ic = [y for y in Y if x0 <= float(y.get("lon", 0)) <= x1 and y0 <= float(y.get("lat", 0)) <= y1]
        print("=" * 90)
        print("%s  %s  %.2f-%.2fE %.2f-%.2fN  nokta: %d" % (madde, tarih, x0, x1, y0, y1, len(ic)))
        sayac = {}
        for y in sorted(ic, key=lambda y: (-float(y["lat"]), float(y["lon"]))):
            kur = y.get("kur")
            if kur and gun_no(kur) > gun:
                o, v, i = "KURULMAMIS", None, None
            else:
                o, v = sahip(y, gun)
                i = isgal(y, gun)
            k = (o or "SAHIPSIZ") + ("|tabi:" + str(v) if v else "") + ("|isg:" + str(i) if i else "")
            sayac[k] = sayac.get(k, 0) + 1
            print("  %-34s %7.3f %7.3f  %-44s %s %s" % (
                y.get("ad", "?")[:34], float(y["lat"]), float(y["lon"]), k[:44],
                y.get("tur", ""), (y.get("_dosya") or y.get("_kaynak_dosya") or "")))
        print("  -- ozet:", ", ".join("%s=%d" % kv for kv in sorted(sayac.items(), key=lambda kv: -kv[1])))


if __name__ == "__main__":
    main()
