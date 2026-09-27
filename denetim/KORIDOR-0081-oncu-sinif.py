"""KORIDOR-0081 — 31 öncü boşluğun YAPISAL sınıflaması (kaynak gerektirmeyen ilk eleme).

Soru: öncü boşluk (ilk dönemden önce sahipsiz) bir DELİK mi, yoksa bayrağı eksik bir
KASITLI BOŞLUK parçası mı? Ölçüt veriden, kaynaksız:
  gün = ilk dönemin bir gün öncesi; o gün VAR olan en yakın 6 komşu.
  ⓓ DELİK    komşuların ≥ 4'ü SAHİPLİ  → boşluk sahipli toprağın ortasında, görünür
  ⓚ KASITLI  komşuların ≥ 4'ü SAHİPSİZ → boşluk zaten boş bir bölgenin parçası,
             eksik olan `kasitli_bosluk` bayrağı
  ⓢ SINIR    arada
⚠️ Bu yapısal bir ayıklamadır, TARİH hükmü değil: ⓓ "fetih öncesi sahip yazılmalı"
der, KİM olduğunu kaynak söyler. ⓚ "bayrak yazılabilir" der, gerçekten boş muydu
sorusu yine kaynağındır (atlas referans değil, D207).
"""
import sys
from datetime import date, timedelta

sys.path.insert(0, "arac")
sys.stdout.reconfigure(encoding="utf-8")
import girdi  # noqa: E402

sys.path.insert(0, "denetim")
import importlib.util  # noqa: E402

_s = importlib.util.spec_from_file_location("s0", "denetim/KORIDOR-0081-s0.py")
s0 = importlib.util.module_from_spec(_s)
_s.loader.exec_module(s0)


def onceki(g):
    y, a, d = map(int, g.split("-"))
    return (date(y, a, d) - timedelta(days=1)).isoformat()


def main():
    Y = girdi.yukle(sessiz=True)
    u0 = girdi.UFUK[0]
    say = {"ⓓ": 0, "ⓚ": 0, "ⓢ": 0}
    satir = []
    for y in Y:
        donem = [p for k in ("d", "s", "v", "isg") for p in (y.get(k) or [])]
        if not donem:
            continue
        ilk = min(p.get("f", u0) for p in donem)
        if ilk <= u0 or (y.get("kur") and y["kur"] >= ilk) or y.get("kasitli_bosluk"):
            continue
        g = onceki(ilk)
        komsu = sorted((q for q in Y if q is not y and q.get("lat") is not None
                        and not (q.get("kur") and q["kur"] > g)),
                       key=lambda q: s0.km(y, q))[:6]
        sahipli = [q for q in komsu if s0.sahip(q, g)]
        n = len(sahipli)
        sinif = "ⓓ" if n >= 4 else ("ⓚ" if n <= 2 else "ⓢ")
        say[sinif] += 1
        satir.append((sinif, ilk, y["ad"], y.get("tur", ""), n,
                      ", ".join(f"{q['ad'][:12]}={str(s0.sahip(q, g) or '—')[:12]}"
                                for q in komsu)))
    for r in sorted(satir):
        print(f"{r[0]} {r[1]}  {r[2][:30]:30s} tur={r[3]:8s} sahipli {r[4]}/6  [{r[5]}]")
    print("toplam", len(satir), say)


if __name__ == "__main__":
    main()
