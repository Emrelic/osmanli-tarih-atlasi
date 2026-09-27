"""KORIDOR-0081 — vaka yerleşimlerinin ATLAS kaydını döker.

⚠️ D207: bu döküm DELİL DEĞİLDİR. Yalnız "harita bugün ne gösteriyor" sorusunu
cevaplar; "o gün kimdeydi" sorusunu kaynak cevaplar.

Kullanım: py denetim/KORIDOR-0081-dok.py <ad-parçası> [<ad-parçası> ...] [--yil 1350-1470]
"""
import sys
import unicodedata

sys.path.insert(0, "arac")
sys.stdout.reconfigure(encoding="utf-8")
import girdi  # noqa: E402

TR = str.maketrans("İIıŞşĞğÜüÖöÇçÂâÎîÛû", "iiissgguuoocca aiiuu".replace(" ", ""))


def norm(s):
    s = s.translate(TR).lower()
    return "".join(c for c in unicodedata.normalize("NFKD", s)
                   if not unicodedata.combining(c))


def main():
    arg = sys.argv[1:]
    yil = None
    if "--yil" in arg:
        i = arg.index("--yil")
        a, b = arg[i + 1].split("-")
        yil = (int(a), int(b))
        del arg[i:i + 2]
    Y = girdi.yukle(sessiz=True)
    for parca in arg:
        n = norm(parca)
        bul = [y for y in Y if n in norm(y["ad"])]
        if not bul:
            print(f"## {parca}: BULUNAMADI (atlasta nokta yok)")
            continue
        for y in bul:
            print(f"## {y['ad']}  ({y.get('lat')}, {y.get('lon')})  "
                  f"[{y['_kaynak']}]  f={y.get('f')} t={y.get('t')}")
            for kat in ("d", "s", "v", "isg"):
                for p in y.get(kat) or []:
                    f, t = p.get("f", ""), p.get("t", "")
                    if yil:
                        try:
                            if int(t[:4] or 9999) < yil[0] or int(f[:4] or 0) > yil[1]:
                                continue
                        except ValueError:
                            pass
                    ek = {k: v for k, v in p.items() if k not in ("f", "t")}
                    print(f"   {kat}: {f} → {t}  {ek}")


if __name__ == "__main__":
    main()
