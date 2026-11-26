# -*- coding: utf-8 -*-
"""P84-TIMUR-SAHIPLIK-1006 — bir kutudaki yerleşimlerin verilen günlerdeki sahibi.
SALT OKUR: yalnız girdi.yukle() okur, hiçbir dosyaya yazmaz.
Kullanım: py denetim/ARAC-P84-TIMUR-SAHIP-1006.py <lat0> <lat1> <lon0> <lon1> <gün> [<gün> ...]
          py denetim/ARAC-P84-TIMUR-SAHIP-1006.py --zincir <ad> [<ad> ...]
"""
import os, sys
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi  # noqa: E402


def icinde(p, gun):
    return (p.get("f") or "0000") <= gun < (p.get("t") or "9999")


def sahip(y, gun):
    isg = [p.get("d") for p in y.get("isg") or [] if icinde(p, gun)]
    ek = f" +isg:{','.join(isg)}" if isg else ""
    for p in y.get("d") or []:
        if icinde(p, gun):
            return "OSMANLI" + ek
    for p in y.get("v") or []:
        if icinde(p, gun):
            return f"tabi:{p.get('k') or '?'}" + ek
    for p in y.get("s") or []:
        if icinde(p, gun):
            return (p.get("d") or "?") + ek
    return "—SAHIPSIZ—" + ek


def main():
    Y = girdi.yukle(sessiz=True)
    if sys.argv[1] == "--zincir":
        adlar = set(sys.argv[2:])
        for y in Y:
            if y["ad"] in adlar:
                print(f"## {y['ad']} ({y['_kaynak']}) {y.get('lat')},{y.get('lon')} m:{y.get('m')}")
                for kat in ("s", "d", "v", "isg"):
                    for p in y.get(kat) or []:
                        print(f"   {kat}: {p}")
        return
    la0, la1, lo0, lo1 = map(float, sys.argv[1:5])
    gunler = sys.argv[5:]
    sec = [y for y in Y if la0 <= y["lat"] <= la1 and lo0 <= y["lon"] <= lo1]
    sec.sort(key=lambda y: (-y["lat"], y["lon"]))
    print("ad\tlat\tlon\tdosya\t" + "\t".join(gunler))
    for y in sec:
        print(f"{y['ad']}\t{y['lat']:.2f}\t{y['lon']:.2f}\t{y['_kaynak']}\t"
              + "\t".join(sahip(y, g) for g in gunler))
    print(f"# {len(sec)} yerleşim")


if __name__ == "__main__":
    main()


# --- ek: yaklaşık petek (en yakın nokta) — motor değil, KABA vekil ---
def en_yakin(Y, lat, lon, gun):
    """En yakın yerleşim (sahipliğe bakmaz; `gun` yalnız imza birliği için) —
    düz Voronoi VEKİLİ: motorun kıyı/nehir/sırt yaslaması YOK, yalnız aday üretir."""
    adaylar = [(girdi.km(lat, lon, y["lat"], y["lon"]), y) for y in Y]
    adaylar.sort(key=lambda a: a[0])
    return adaylar[0]
