"""KORIDOR-0081 — bir kutudaki yerleşimlerin verilen GÜNDEKİ sahibini döker.

⚠️ D207: ATLAS KAYDIDIR, DELİL DEĞİL. "Harita ne gösteriyor" sorusunu cevaplar.
Kullanım: py denetim/KORIDOR-0081-kutu.py <gün> <lat1> <lat2> <lon1> <lon2>
"""
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
            return "tabi:" + str(p.get("kid") or p.get("d") or "?")
    for p in y.get("s") or []:
        if p.get("f", "") <= gun < p.get("t", "9999"):
            return p.get("d", "?")
    return "—SAHİPSİZ—"


def main():
    gun = sys.argv[1]
    la1, la2, lo1, lo2 = map(float, sys.argv[2:6])
    Y = girdi.yukle(sessiz=True)
    satir = []
    for y in Y:
        la, lo = y.get("lat"), y.get("lon")
        if la is None or not (la1 <= la <= la2 and lo1 <= lo <= lo2):
            continue
        if y.get("f") and y["f"] > gun or y.get("t") and y["t"] <= gun:
            continue
        satir.append((sahip(y, gun), la, lo, y["ad"]))
    for s, la, lo, ad in sorted(satir):
        print(f"{s:28s} {la:7.3f} {lo:7.3f}  {ad}")
    print(f"toplam {len(satir)}")


if __name__ == "__main__":
    main()
