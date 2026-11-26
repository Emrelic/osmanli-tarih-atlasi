"""NOKTA-AMERIKA — 88 Amerika NOKTASIZ-ADAY kümesinin sınıflaması.

Kullanım: py denetim/ARAC-NOKTA-AMERIKA-SINIF-0917.py > denetim/NOKTA-AMERIKA-SINIF-0917.txt
Sınıflar (sırayla):
  NOKTA          küme merkezine ≤250 km'de bu partinin yeni noktası var
  KARAR          ≤250 km'de karar bekleyen aday var (Tucuruí · Bauru · Diamantino · Tupiza ·
                 Maturín · Franklin · Lewistown · Aberdeen)
  BOSLUK-DOGRU   KUTUP/SUBARKTİK — enlem ≥50 (Kanada · Alaska · Grönland): İnuit/Dene/Innu yurdu;
                 İngiliz/Danimarka/Rus-ABD iddiası nominal, fiilî idare mevcut karakol noktalarında
  BOSLUK-DOGRU   TROPİKAL ORMAN — -14<enlem<7 ve -76<boylam<-48: Amazon/Orinoko/Guyana içi;
                 sömürge ve devlet idaresi nehir karakollarında (mevcut noktalar), iç ormanda YOK
  BOSLUK-DOGRU   KUZEY CHACO — -26<enlem<-20 ve -63.5<boylam<-57.5: Paraguay/Bolivya fiilî idaresi 20. yy
  ACIK           yukarıdakilerin hiçbiri — kaynaklı nokta bu turda bulunamadı
⚠️ Kural bir KABA coğrafî süzgeçtir, kaynak hükmü değildir; ACIK ve KARAR satırları araştırma ister.
"""
import io, json, math, subprocess, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")


def km(a, b, c, d):
    p = math.pi / 180
    x = math.sin((c - a) * p / 2) ** 2 + math.cos(a * p) * math.cos(c * p) * math.sin((d - b) * p / 2) ** 2
    return 12742 * math.asin(math.sqrt(x))


YENI = json.loads(subprocess.run(["node", "-e",
    "global.window={};eval(require('fs').readFileSync('data/yerlesimler_nokta_amerika_0917.js','utf8'));"
    "process.stdout.write(JSON.stringify(window.YERLESIMLER_NOKTA_AMERIKA_0917.map(y=>[y.ad,y.lat,y.lon,y.kur])))"],
    capture_output=True, timeout=60).stdout.decode("utf-8"))
KARAR = [("Tucuruí (Alcobaça)", -3.7661, -49.6725), ("Bauru", -22.3246, -49.0871),
         ("Diamantino", -14.4086, -56.4461), ("Tupiza", -21.4447, -65.7189), ("Maturín", 9.7457, -63.1832),
         ("Franklin (Venango)", 41.3978, -79.8314), ("Lewistown (Montana)", 47.0625, -109.4282),
         ("Aberdeen (South Dakota)", 45.4647, -98.4865)]
N = [k for k in json.load(io.open("denetim/NOKTASIZLIK-ADAY-0917.json", encoding="utf-8"))["NOKTASIZ-ADAY"]
     if k["merkez_lon"] < -30]
N.sort(key=lambda k: -k["km2"])
say, alan = {}, {}
for k in N:
    la, lo = k["merkez_lat"], k["merkez_lon"]
    y = [(km(la, lo, a[1], a[2]), a[0], a[3]) for a in YENI]
    y = sorted(t for t in y if t[0] <= 250)
    q = sorted((km(la, lo, a[1], a[2]), a[0]) for a in KARAR)
    q = [t for t in q if t[0] <= 250]
    if y:
        s, ek = "NOKTA", " · ".join("%s (%s, %.0f km)" % (t[1], t[2], t[0]) for t in y[:3])
    elif q:
        s, ek = "KARAR", " · ".join("%s %.0f km" % (t[1], t[0]) for t in q[:2])
    elif la >= 50:
        s, ek = "BOSLUK-DOGRU", "kutup/subarktik"
    elif -14 < la < 7 and -76 < lo < -48:
        s, ek = "BOSLUK-DOGRU", "tropikal orman içi"
    elif -26 < la < -20 and -63.5 < lo < -57.5:
        s, ek = "BOSLUK-DOGRU", "Kuzey Chaco"
    else:
        s, ek = "ACIK", "kaynaklı nokta bulunamadı — A_sahipleri: " + " · ".join(k["A_sahipleri"][:2])
    say[s] = say.get(s, 0) + 1
    alan[s] = alan.get(s, 0) + k["km2"]
    print("%-13s %7d km² %7.2f %8.2f  %s" % (s, k["km2"], la, lo, ek))
print("\nÖZET (%d küme · %d km²)" % (len(N), sum(k["km2"] for k in N)))
for s in sorted(say):
    print("  %-13s %3d küme  %8d km²" % (s, say[s], alan[s]))
