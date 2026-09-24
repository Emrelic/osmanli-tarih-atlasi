# -*- coding: utf-8 -*-
"""SINIR-D-AVRUPA-BATI-0077 — hattın 5 km iki yanında DOĞRU RENK oranı (gün 1923-09-01).

İki adım (renk tarayıcıda, yaslama UYGULANMIŞ `devlet` kaynağında okunur —
yaslama js/d_katman.js'te koşar, Python'da yeniden kurulmaz):

  1) py denetim/SINIR-D-AVRUPA-BATI-0077-olc.py --nokta
       data/d_sinirlar_avrupa_bati.js'in o gün etkin, hattı olan kayıtlarından
       her ADIM_KM'de bir nokta; noktanın YAN_KM solu (sol_taraf beklenir) ve
       sağı (öteki taraf beklenir) → denetim/SINIR-D-AVRUPA-BATI-0077-noktalar.json
  2) tarayıcıda denetim/SINIR-D-AVRUPA-BATI-0077-olc.js (tarihi kurar, noktaları
       devlet kaynağına sorar, sonucu döndürür) → çıktı ...-sonuc-<etiket>.json
  3) py denetim/SINIR-D-AVRUPA-BATI-0077-olc.py --skor <sonuc.json> [<ikinci.json>]
       kayıt kayıt doğru/yanlış/boş (deniz, sahipsiz) ve ağırlıklı toplam;
       iki dosya verilirse ÖNCE → SONRA farkı.
"""
import io, json, math, subprocess, sys
sys.stdout.reconfigure(encoding="utf-8")

KOK = r"C:\atlas"
GUN = "1923-09-01"
ADIM_KM = 5.0
YAN_KM = 5.0
NOKTA = KOK + r"\denetim\SINIR-D-AVRUPA-BATI-0077-noktalar.json"


def kayitlar():
    js = ("global.window={};require('./data/d_sinirlar_avrupa_bati.js');"
          "process.stdout.write(JSON.stringify(window.D_SINIRLAR_AVRUPA_BATI))")
    out = subprocess.run(["node", "-e", js], cwd=KOK, capture_output=True, check=True).stdout
    return json.loads(out.decode("utf-8"))


def etkin(k):
    return k["f"] <= GUN and (k.get("t") is None or GUN < k["t"])


def km(a, b):
    kx = 111.32 * math.cos(math.radians((a[1] + b[1]) / 2))
    return math.hypot((b[0] - a[0]) * kx, (b[1] - a[1]) * 110.57)


def noktalar():
    K = kayitlar()
    cikti = []
    for k in K:
        h = k.get("hat")
        if not etkin(k) or not h or len(h) < 2:
            continue
        tf = k["taraflar"]
        sol = k.get("sol_taraf")
        sag = [x for x in tf if x != sol]
        if sol not in tf or len(sag) != 1:
            cikti.append({"id": k["id"], "sinif": k["sinif"], "hata": "sol_taraf taraflarda değil"})
            continue
        sag = sag[0]
        pts = []
        birikim, sonraki = 0.0, ADIM_KM / 2
        for a, b in zip(h, h[1:]):
            d = km(a, b)
            if d == 0:
                continue
            while sonraki <= birikim + d:
                u = (sonraki - birikim) / d
                x, y = a[0] + (b[0] - a[0]) * u, a[1] + (b[1] - a[1]) * u
                kx = 111.32 * math.cos(math.radians(y))
                dx, dy = (b[0] - a[0]) * kx, (b[1] - a[1]) * 110.57
                n = math.hypot(dx, dy)
                nx, ny = -dy / n, dx / n                    # sol normal (km)
                pts.append([round(x + nx * YAN_KM / kx, 5), round(y + ny * YAN_KM / 110.57, 5), sol])
                pts.append([round(x - nx * YAN_KM / kx, 5), round(y - ny * YAN_KM / 110.57, 5), sag])
                sonraki += ADIM_KM
            birikim += d
        cikti.append({"id": k["id"], "sinif": k["sinif"], "km": round(birikim, 1), "p": pts})
    io.open(NOKTA, "w", encoding="utf-8").write(json.dumps({"gun": GUN, "adim_km": ADIM_KM,
                                                            "yan_km": YAN_KM, "hatlar": cikti},
                                                           ensure_ascii=False))
    print("hat:", len(cikti), "· nokta:", sum(len(c.get("p", [])) for c in cikti), "→", NOKTA)


def oku(yol):
    return {r["id"]: r for r in json.load(io.open(yol, encoding="utf-8"))["hatlar"]}


def skor(yollar):
    tablolar = [oku(y) for y in yollar]
    ids = sorted(set().union(*[t.keys() for t in tablolar]))
    top = [[0, 0, 0] for _ in tablolar]
    for i in ids:
        satir = []
        for j, t in enumerate(tablolar):
            r = t.get(i)
            if not r:
                satir.append("   —   ")
                continue
            dg, yn, bs = r["dogru"], r["yanlis"], r["bos"]
            top[j][0] += dg; top[j][1] += yn; top[j][2] += bs
            n = dg + yn
            satir.append("%5.1f%% (%d/%d, boş %d)" % (100.0 * dg / n if n else float("nan"), dg, n, bs))
        sinif = next(t[i]["sinif"] for t in tablolar if i in t)
        print("%-40s %-3s %s" % (i, sinif, "  →  ".join(satir)))
    for j, (dg, yn, bs) in enumerate(top):
        n = dg + yn
        print("TOPLAM[%d] %s: %.1f%% doğru (%d/%d kara noktası) · boş %d" %
              (j, yollar[j], 100.0 * dg / n if n else float("nan"), dg, n, bs))


if __name__ == "__main__":
    if sys.argv[1] == "--nokta":
        noktalar()
    elif sys.argv[1] == "--skor":
        skor(sys.argv[2:])
