# -*- coding: utf-8 -*-
"""B-5 OLCUMU — kalici sadelestirmenin DOLGU BOYUTUNA etkisi.

B-GORUNUM-0072 sartnamesi B-5: *"Motor tarafinda kalici hale getirmenin
dolgu boyutuna etkisini de olc."*

YONTEM ve NICIN BU YONTEM: dolguyu her tolerans icin yeniden hesaplamak
kesit basina ~300-470 sn tutuyor (B-4 olcumu) ve tolerans onbellek tuzuna
girdigi icin her deger TAM YENIDEN HESAP demek. Oysa sorulan sey hesap
degil BOYUT: ayni dolgu halkalari farkli toleranslarda ne kadar yer
kapliyor? O yuzden URETILMIS cikti okunur ve halkalari yeniden
sadelestirilir. Olculen sey birebir sorunun kendisidir.

UYARI - NE OLCMUYOR: bu betik GORUNUMUN bozulup bozulmadigini olcmez,
yalniz bayti sayar. Tolerans yukseldikce kiyi ve girinti kaybolur; hangi
toleransin kabul edilebilir oldugu GOZLE karara baglanir.

Kosus: py denetim/ARAC-B-GORUNUM-SADE-0072.py <dolgu.js yolu>
"""
import io
import json
import os
import sys

from shapely.geometry import Polygon

TOLERANSLAR = [0.0, 0.005, 0.01, 0.02, 0.05]


def js_oku(yol, ad):
    onek = "window." + ad + " = "
    with io.open(yol, "r", encoding="utf-8") as f:
        for satir in f:
            if satir.startswith(onek):
                return json.loads(satir[len(onek):].rstrip()[:-1])
    raise SystemExit("EKSIK: %s -> %s" % (ad, yol))


def kose_say(halkalar):
    return sum(len(h) for h in halkalar)


def main():
    if len(sys.argv) < 2:
        raise SystemExit("kullanim: py ARAC-B-GORUNUM-SADE-0072.py <dolgu.js>")
    yol = sys.argv[1]
    halkalar = js_oku(yol, "DOLGU_PARCALAR")
    parcalar = js_oku(yol, "DOLGU_PARCA_HALKA")
    kayitlar = js_oku(yol, "DOLGU")
    print("girdi : %s (%.1f KB)" % (os.path.basename(yol),
                                    os.path.getsize(yol) / 1024.0))
    print("        %d halka - %d parca - %d kayit"
          % (len(halkalar), len(parcalar), len(kayitlar)))
    print()
    print("%-10s %10s %12s %10s %8s" % ("tolerans", "kose", "halka JSON",
                                        "fark", "~km"))
    taban_kose, taban_bayt = None, None
    for tol in TOLERANSLAR:
        if tol == 0.0:
            yeni = halkalar
        else:
            yeni = []
            for h in halkalar:
                try:
                    p = Polygon(h)
                    if not p.is_valid:
                        p = p.buffer(0)
                    s = p.simplify(tol, preserve_topology=True)
                    cs = list(s.exterior.coords) if s.geom_type == "Polygon" \
                        else list(h)
                    # Cikti yazicisiyla AYNI yuvarlama (5 ondalik) - yoksa
                    # olculen fark sadelestirmenin degil bicimin farki olur.
                    yeni.append([[round(x, 5), round(y, 5)] for x, y in cs])
                except Exception:
                    yeni.append(h)
        k = kose_say(yeni)
        b = len(json.dumps(yeni, separators=(",", ":")).encode("utf-8"))
        if taban_kose is None:
            taban_kose, taban_bayt = k, b
            fark = "-"
        else:
            fark = "%%%.1f" % (100.0 * (b - taban_bayt) / taban_bayt)
        print("%-10s %10d %11.1f KB %10s %8.1f"
              % (("%.3f" % tol), k, b / 1024.0, fark, tol * 111.32))
    print()
    print("NOT: 'halka JSON' yalniz halka havuzudur; dosyada ayrica parca")
    print("     havuzu ve kayit listesi var (tolerenstan ETKILENMEZ).")


if __name__ == "__main__":
    main()
