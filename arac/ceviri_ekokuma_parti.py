"""EK OKUMA TOPLU ÇEVİRİ — parti böl / al (CEVIRI-EKOKUMA-1125).

  py arac/ceviri_ekokuma_parti.py bol --dil en --klasor <iş klasörü> [--boy 55000] [--adet 3]
      Eksik+bayat kartlardan <adet> parti yazar: <klasör>/<dil>/pNNN/is.json
      (var olan parti klasörleri atlanır; içindeki kartlar yeniden dağıtılmaz).
  py arac/ceviri_ekokuma_parti.py al --dil en --parti <klasör>/<dil>/pNNN
      cevap*.json birleştirir → mekanik denetim → HATASIZ kartları `ceviri.py uygula` ile yazar;
      hatalı kartlar uygulanmaz, kuyrukta kalır ve <parti>/hata.json'a yazılır.
      Parti klasöründeki adlar*.json dil ad sözlüğüne (denetim/CEVIRI-EKOKUMA/adlar_<dil>.json) eklenir.
Çıkış: 0 temiz · 1 hatalı kart kaldı · 2 ölçülemedi.
"""
import argparse, glob, json, os, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import ceviri as C                                   # noqa: E402
from ceviri_ekokuma_denetle import denetle           # noqa: E402

ADLAR = os.path.join(C.KOK, "denetim", "CEVIRI-EKOKUMA")


def yaz_json(yol, veri):
    with open(yol, "w", encoding="utf-8") as f:
        json.dump(veri, f, ensure_ascii=False, indent=1)


def oku_json(yol):
    with open(yol, encoding="utf-8-sig") as f:
        return json.load(f)


def bol(a):
    tr = C.turkce(C.cikar(), "ekokuma")
    _, bayat, eksik, _ = C.kiyasla(tr, C.oku(a.dil, "ekokuma"), "ekokuma")
    kok = os.path.join(a.klasor, a.dil)
    os.makedirs(kok, exist_ok=True)
    var = sorted(glob.glob(os.path.join(kok, "p[0-9]*")))
    dagitilmis = set()
    for p in var:   # henüz alınmamış partiler
        y = os.path.join(p, "is.json")
        if os.path.exists(y) and not os.path.exists(os.path.join(p, "alindi")):
            dagitilmis |= set(oku_json(y)["kaynak"])
    istenen = set(eksik) | set(bayat)
    sira = [i for i in tr if i in istenen and i not in dagitilmis]
    no = max([int(os.path.basename(p)[1:]) for p in var] or [0])
    sozluk = os.path.join(ADLAR, "adlar_%s.json" % a.dil)
    for _ in range(a.adet):
        if not sira:
            break
        parti, boy = {}, 0
        while sira:
            u = sum(map(len, tr[sira[0]].values()))
            if parti and boy + u > a.boy:
                break
            i = sira.pop(0)
            parti[i] = tr[i]
            boy += u
        no += 1
        d = os.path.join(kok, "p%03d" % no)
        os.makedirs(d)
        # iki dosya: tek okumada araç sınırını aşmasın
        ids = list(parti)
        yaz_json(os.path.join(d, "is.json"), {"tur": "ekokuma", "kaynak": parti})
        yari, t = 0, 0
        for n, i in enumerate(ids):
            t += sum(map(len, parti[i].values()))
            if t >= boy / 2:
                yari = n + 1
                break
        for k, dilim in enumerate((ids[:yari], ids[yari:]), 1):
            yaz_json(os.path.join(d, "is_%d.json" % k), {"tur": "ekokuma", "kaynak": {i: parti[i] for i in dilim}})
        if os.path.exists(sozluk):
            yaz_json(os.path.join(d, "sozluk.json"), oku_json(sozluk))
        print("%s  kart %d · %d karakter" % (d, len(parti), boy))
    print("[%s] istenen %d · henüz dağıtılmamış %d" % (a.dil, len(istenen), len(sira)))
    return 0


def al(a):
    d = a.parti
    try:
        kaynak = oku_json(os.path.join(d, "is.json"))["kaynak"]
        kayit = {}
        for y in sorted(glob.glob(os.path.join(d, "cevap*.json"))):
            kayit.update(oku_json(y)["kayit"])
    except (OSError, ValueError, KeyError) as e:
        print("ÖLÇÜLEMEDİ:", e)
        return 2
    hata, uyari = denetle(a.dil, kaynak, kayit)
    bozuk = {h[0] for h in hata}
    temiz = {i: kayit[i] for i in kaynak if i not in bozuk and i in kayit}
    if temiz:
        k = C.oku(a.dil, "ekokuma")
        for i, alanlar in temiz.items():
            r = k.setdefault(i, {})
            for alan, s in kaynak[i].items():
                r[alan] = [alanlar[alan], C.ozet(s)]
        C.yaz_tur(a.dil, "ekokuma", k)
        C.dizin_yaz()
    sozluk = {}
    yol = os.path.join(ADLAR, "adlar_%s.json" % a.dil)
    if os.path.exists(yol):
        sozluk = oku_json(yol)
    for y in sorted(glob.glob(os.path.join(d, "adlar*.json"))):
        try:
            for tr_ad, h in oku_json(y).items():
                sozluk.setdefault(tr_ad, h)          # ilk yazılış korunur (tutarlılık)
        except (ValueError, AttributeError):
            print("uyarı: ad sözlüğü okunamadı:", y)
    if sozluk:
        os.makedirs(ADLAR, exist_ok=True)
        yaz_json(yol, dict(list(sozluk.items())[:600]))   # küçük kalsın
    yaz_json(os.path.join(d, "hata.json"), {"hata": hata, "uyari": uyari})
    open(os.path.join(d, "alindi"), "w").close()
    for h in hata:
        print("HATA  %s · %s · %s" % h)
    print("[%s] %s: uygulandı %d kart · hatalı %d kart · uyarı %d"
          % (a.dil, os.path.basename(d), len(temiz), len(bozuk), len(uyari)))
    return 1 if bozuk else 0


def main():
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    except AttributeError:
        pass
    ap = argparse.ArgumentParser()
    ap.add_argument("komut", choices=["bol", "al"])
    ap.add_argument("--dil", required=True)
    ap.add_argument("--klasor")
    ap.add_argument("--parti")
    ap.add_argument("--boy", type=int, default=55000)
    ap.add_argument("--adet", type=int, default=3)
    a = ap.parse_args()
    return bol(a) if a.komut == "bol" else al(a)


if __name__ == "__main__":
    sys.exit(main())
