"""SAFEVI-DOGU-0081 — atlas dökümü (D207: DELİL DEĞİL, yalnız "harita ne gösteriyor").

  fark <g1> <g2> [kutu]   g1 ile g2 arasında sahibi değişen noktalar (kutu: la1,la2,lo1,lo2)
  gun <g> [kutu]          o gün kutudaki noktalar, sahibine göre
  ad <parça> ...          noktanın bütün dönemleri (kaynak alanıyla)
Varsayılan kutu: 29,43,35,56 (Doğu Anadolu · Irak · Batı İran · Kafkas).
"""
import sys
import unicodedata

sys.path.insert(0, "arac")
sys.stdout.reconfigure(encoding="utf-8")
import girdi  # noqa: E402

TR = str.maketrans("İIıŞşĞğÜüÖöÇçÂâÎîÛû", "iiissgguuoocca aiiuu".replace(" ", ""))
KUTU = (29.0, 43.0, 35.0, 56.0)


def norm(s):
    s = s.translate(TR).lower()
    return "".join(c for c in unicodedata.normalize("NFKD", s) if not unicodedata.combining(c))


def ic(p, g):
    return p.get("f", "") <= g < (p.get("t") or "9999")


def sahip(y, g):
    if y.get("f") and y["f"] > g or y.get("t") and y["t"] <= g:
        return None
    for p in y.get("isg") or []:
        if ic(p, g):
            return "isg:" + p.get("d", "?")
    for p in y.get("d") or []:
        if ic(p, g):
            return "OSMANLI"
    for p in y.get("v") or []:
        if ic(p, g):
            return "tabi:" + str(p.get("kid") or p.get("d") or "?")
    for p in y.get("s") or []:
        if ic(p, g):
            return p.get("d", "?")
    return "—SAHİPSİZ—"


def kutu(arg):
    return tuple(map(float, arg.split(","))) if arg else KUTU


def icinde(y, k):
    la, lo = y.get("lat"), y.get("lon")
    return la is not None and k[0] <= la <= k[1] and k[2] <= lo <= k[3]


def main():
    a = sys.argv[1:]
    Y = girdi.yukle(sessiz=True)
    if a[0] == "fark":
        k = kutu(a[3] if len(a) > 3 else None)
        n = 0
        for y in sorted(Y, key=lambda y: (y.get("lon") or 0)):
            if not icinde(y, k):
                continue
            s1, s2 = sahip(y, a[1]), sahip(y, a[2])
            if s1 != s2:
                n += 1
                print(f"{str(s1):22s} → {str(s2):22s} {y['lat']:6.2f} {y['lon']:6.2f} {y['ad']}")
        print(f"toplam {n}")
    elif a[0] == "gun":
        k = kutu(a[2] if len(a) > 2 else None)
        g = {}
        for y in Y:
            if icinde(y, k):
                s = sahip(y, a[1])
                if s:
                    g.setdefault(s, []).append(y["ad"])
        for s, L in sorted(g.items(), key=lambda x: -len(x[1])):
            print(f"{s:22s} {len(L):4d}  {', '.join(sorted(L)[:60])}")
    elif a[0] == "gunler":
        # gunler <g1> <g2> [kutu] [devlet]: aralıktaki kırılma günleri, o gün DEVLETE geçenler
        k = kutu(a[3] if len(a) > 3 else None)
        dev = a[4] if len(a) > 4 else "OSMANLI"
        G = {}
        for y in Y:
            if not icinde(y, k):
                continue
            for kat in ("d", "s", "v", "isg"):
                for p in y.get(kat) or []:
                    f = p.get("f", "")
                    if a[1] <= f <= a[2] and sahip(y, f) == dev:
                        G.setdefault(f, set()).add(y["ad"])
        for g in sorted(G):
            L = sorted(G[g])
            print(f"{g}  {len(L):3d}  {', '.join(L[:25])}")
    elif a[0] == "ad":
        for parca in a[1:]:
            nn = norm(parca)
            bul = [y for y in Y if nn in norm(y["ad"])]
            if not bul:
                print(f"## {parca}: BULUNAMADI")
            for y in bul:
                print(f"## {y['ad']} ({y.get('lat')}, {y.get('lon')}) [{y['_kaynak']}] "
                      f"f={y.get('f')} t={y.get('t')} kur={y.get('kur')}")
                for kat in ("d", "s", "v", "isg"):
                    for p in y.get(kat) or []:
                        ek = {k: v for k, v in p.items() if k not in ("f", "t")}
                        print(f"   {kat}: {p.get('f','')} → {p.get('t','')}  {ek}")


if __name__ == "__main__":
    main()
