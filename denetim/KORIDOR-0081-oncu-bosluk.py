"""KORIDOR-0081 — ÖNCÜ BOŞLUK ölçümü (H-0030'un sınıfı).

Soru: ilk sahiplik dönemi ufuk başından (girdi.UFUK[0]) SONRA başlayan, kendi
`kur:` (kuruluş) günü ilk dönemden ÖNCE olan ya da hiç `kur:` taşımayan ve kasıtlı boşluk beyanı taşımayan kaç
yerleşim var? Bu noktalar ilk dönemlerinden önce SAHİPSİZ çizilir.
Değişmez 1 (tamamen sahipsiz nokta) ve 1b (pencereler ARASI boşluk) bu soruyu
sormaz — öncü boşluk ne "hep sahipsiz" ne "iki pencere arası"dır.

Kullanım: py denetim/KORIDOR-0081-oncu-bosluk.py [--ayrinti] [--kutu lat1 lat2 lon1 lon2]
"""
import sys

sys.path.insert(0, "arac")
sys.stdout.reconfigure(encoding="utf-8")
import girdi  # noqa: E402


def main():
    arg = sys.argv[1:]
    kutu = None
    if "--kutu" in arg:
        i = arg.index("--kutu")
        kutu = tuple(map(float, arg[i + 1:i + 5]))
    ufuk0 = girdi.UFUK[0]
    Y = girdi.yukle(sessiz=True)
    say, liste, beyanli, hic = 0, [], 0, 0
    for y in Y:
        if kutu and not (kutu[0] <= y.get("lat", 99) <= kutu[1]
                         and kutu[2] <= y.get("lon", 999) <= kutu[3]):
            continue
        donem = [p for k in ("d", "s", "v", "isg") for p in (y.get(k) or [])]
        if not donem:
            hic += 1
            continue
        ilk = min(p.get("f", ufuk0) for p in donem)
        # `kur:` ilk dönemle aynı/sonra ⇒ o güne kadar KURULMAMIŞ, boşluk meşru.
        # (Motor: uret_petek.py ~4604 — kurulmamış VE sahipsiz alan BOŞ çizilir.)
        if ilk <= ufuk0 or (y.get("kur") and y["kur"] >= ilk):
            continue
        if y.get("kasitli_bosluk"):
            beyanli += 1
            continue
        say += 1
        liste.append((ilk, y["ad"], y.get("lat"), y.get("lon"), y["_kaynak"]))
    print(f"ufuk başı {ufuk0} · öncü boşluklu (beyansız, kur: yok ya da ilk dönemden önce): {say} · "
          f"kasitli_bosluk beyanlı: {beyanli} · hiç dönemi yok: {hic}")
    if "--ayrinti" in arg:
        for ilk, ad, la, lo, kay in sorted(liste):
            print(f"  {ilk}  {la:8.3f} {lo:8.3f}  {ad}  [{kay}]")


if __name__ == "__main__":
    main()
