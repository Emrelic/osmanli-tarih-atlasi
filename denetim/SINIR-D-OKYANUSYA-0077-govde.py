# -*- coding: utf-8 -*-
"""SINIR-D-OKYANUSYA-0077 — sömürge kimliği → gövde yoklaması (1923-09-01).

Koordinatör sorusu (YILDIRIM BAYEZIT): hangi taraf kimliği hangi gövdede, hangisi hiçbir
gövdede? Tahmin değil yoklama:
  ① künye: devletler.js'te id var mı, `harita:` anahtarı, f/t — ayrıca ad/id TARAMASI
     (Borneo/Brunei/Sabah/Sarawak/Papua/Timor/Yeni Gine geçen bütün künyeler).
  ② gövde: devletler_harita.js'te o gün gövde var mı, bbox, alan (km²).
  ③ yerleşim: o gün `s:` = bu kimlik olan nokta sayısı.
  ④ nokta yoklaması: bilinen şehirler o gün HANGİ gövdenin içinde.
"""
import io, json, math, os, re, subprocess, sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
from renk_cikti import _cek, _govde                       # noqa: E402
from shapely.geometry import Point                        # noqa: E402

GUN = "1923-09-01"
KIMLIK = ["hollanda-dogu-hint", "sarawak-brooke", "ingiliz-kuzey-borneo", "brunei",
          "brunei-sultanligi", "portekiz", "avustralya", "ingiltere"]
TARAMA = re.compile(r"borneo|brunei|sabah|sarawak|saravak|papua|timor|gine|guinea|labuan|"
                    r"samoa|fiji|tonga|nauru|solomon|hebrid|gilbert|zelanda", re.I)
NOKTA = [("Kuching", 110.35, 1.55), ("Sibu", 111.82, 2.30), ("Bintulu", 113.03, 3.17),
         ("Miri", 113.99, 4.40), ("Limbang", 115.00, 4.75), ("Brunei (Bandar)", 114.94, 4.89),
         ("Labuan", 115.24, 5.28), ("Jesselton/K.Kinabalu", 116.07, 5.98),
         ("Sandakan", 118.12, 5.84), ("Tawau", 117.89, 4.25),
         ("Pontianak", 109.33, -0.03), ("Samarinda", 117.15, -0.50), ("Tarakan", 117.59, 3.30),
         ("Dili", 125.57, -8.56), ("Kupang", 123.60, -10.17), ("Oecussi/Pante Macassar", 124.37, -9.20),
         ("Jayapura/Hollandia", 140.70, -2.53), ("Vanimo", 141.30, -2.68), ("Merauke", 140.40, -8.47),
         ("Daru", 143.21, -9.07), ("Port Moresby", 147.18, -9.44), ("Rabaul", 152.18, -4.20),
         ("Madang", 145.79, -5.22), ("Kieta (Bougainville)", 155.63, -6.22),
         ("Tulagi (Solomon)", 160.15, -9.10), ("Apia (B.Samoa)", -171.76, -13.83),
         ("Suva (Fiji)", 178.44, -18.14), ("Nuku'alofa (Tonga)", -175.20, -21.14),
         ("Nauru", 166.93, -0.52), ("Port Vila (Y.Hebrid)", 168.32, -17.73),
         ("Noumea", 166.45, -22.27), ("Tarawa (Gilbert)", 172.98, 1.45),
         ("Darwin", 130.84, -12.46), ("Sydney", 151.21, -33.87), ("Auckland", 174.76, -36.85)]


def aktif(f, t):
    return f <= GUN and (t is None or GUN < t or (GUN == "1923-10-29" and t == "1923-10-29"))


def km2(g):
    c = g.centroid.y
    return g.area * 111.32 * math.cos(math.radians(c)) * 110.57


def main():
    kod = ("global.window={};require('./data/devletler.js');"
           "process.stdout.write(JSON.stringify(window.DEVLETLER.map(d=>({id:d.id,ad:d.ad,f:d.f,t:d.t,harita:d.harita||null}))))")
    kunye = json.loads(subprocess.run(["node", "-e", kod], cwd=KOK, capture_output=True,
                                      check=True).stdout.decode("utf-8"))
    kid = {k["id"]: k for k in kunye}
    ham = io.open(os.path.join(KOK, "data", "devletler_harita.js"), encoding="utf-8").read()
    parca = _cek(ham, "DEVLET_PARCALAR"); harita = _cek(ham, "DEVLET_HARITA")
    halka = _cek(ham, "DEVLET_PARCA_HALKA")
    govde = {}
    for d in harita:
        for p in d["dnm"]:
            if aktif(p["f"], p["t"]):
                g = _govde(parca, p["g"], halka)
                if g is not None:
                    govde[d["id"]] = g
                break
    import girdi
    Y = girdi.yukle(sessiz=True)
    say = {}
    for y in Y:
        for p in y.get("s") or []:
            if p.get("f", "") <= GUN < p.get("t", "9999"):
                say[p.get("d")] = say.get(p.get("d"), 0) + 1

    print("① TARAMA — adı/id'si bölgeyi anan künyeler:")
    for k in kunye:
        if TARAMA.search(k["id"] + " " + (k["ad"] or "")):
            hk = k["harita"] or k["id"]
            print("   %-28s f=%s t=%s harita:%s · o gün gövde(%s)=%s · o gün s: noktası %d"
                  % (k["id"], k["f"], k["t"], k["harita"], hk, "VAR" if hk in govde else "yok",
                     say.get(k["id"], 0)))
    print("\n② SORULAN KİMLİKLER:")
    print("   %-22s %-6s %-14s %-9s %-40s %8s %6s" % ("kimlik", "künye", "harita:", "gövde", "gövde bbox (lon/lat)", "km²", "nokta"))
    for i in KIMLIK:
        k = kid.get(i)
        hk = (k and k["harita"]) or i
        g = govde.get(hk) or govde.get(i)
        bb = "[%.1f,%.1f,%.1f,%.1f]" % g.bounds if g is not None else "—"
        print("   %-22s %-6s %-14s %-9s %-40s %8s %6d" % (i, "VAR" if k else "YOK", (k or {}).get("harita") or "—",
              "VAR" if g is not None else "YOK", bb, ("%d" % km2(g)) if g is not None else "—", say.get(i, 0)))
    print("\n③ NOKTA YOKLAMASI — şehir o gün hangi gövdenin içinde:")
    for ad, x, y in NOKTA:
        p = Point(x, y)
        ic = [a for a, g in govde.items() if g.contains(p)]
        if ic:
            print("   %-26s (%7.2f,%6.2f) → %s" % (ad, x, y, ", ".join(ic)))
            continue
        # İçinde değilse en yakın gövde ve uzaklığı: kıyı genelleştirmesi (< ~5 km)
        # ile gerçek boşluğu (onlarca km) AYIRMAK için.
        kx = 111.32 * math.cos(math.radians(y))
        yak = sorted((g.distance(p), a) for a, g in govde.items()
                     if g.bounds[0] - 3 < x < g.bounds[2] + 3 and g.bounds[1] - 3 < y < g.bounds[3] + 3)
        if yak:
            d, a = yak[0]
            print("   %-26s (%7.2f,%6.2f) → — hiçbir gövde · en yakın %s ~%.0f km"
                  % (ad, x, y, a, d * (kx + 110.57) / 2))
        else:
            print("   %-26s (%7.2f,%6.2f) → — hiçbir gövde · 3° içinde gövde yok" % (ad, x, y))


if __name__ == "__main__":
    main()
