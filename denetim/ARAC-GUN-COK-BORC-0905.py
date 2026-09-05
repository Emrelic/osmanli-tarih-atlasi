# -*- coding: utf-8 -*-
"""BIR GUN, KAC AYRI BORC? — `1668-01-01` bulgusunun SINIF BUYUKLUGU.

NEHIR SURTUNME olctu: `1668-01-01` UC AYRI GECIS tasiyor, UC KITA
(Waskaganish/HBC · Sault Ste. Marie · Kamislov/Ural). Bir madde `2s`
sayacini kapatir, BORCU KAPATMAZ.

Bu betik SINIFIN BUYUKLUGUNU olcer — bir denetim adayi ONCE olculur
(§11: "bir olcutun kusur mu tasarim mi olctugu, denetime donusturulmeden
ONCE sorulur"; yoksa cevabi yanlis alarmlarin gurultusunden okunur).

SALT OKUR. Cikti ASCII.
"""
import io, os, sys, math, unicodedata, collections
KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)


def a(s):
    s = str(s).replace("İ", "I").replace("ı", "i").replace("Ş", "S").replace("ş", "s")
    s = s.replace("Ğ", "G").replace("ğ", "g").replace("Ü", "U").replace("ü", "u")
    s = s.replace("Ö", "O").replace("ö", "o").replace("Ç", "C").replace("ç", "c")
    return "".join(c for c in unicodedata.normalize("NFKD", s) if ord(c) < 128)


def p(s=""):
    print(a(s))


import girdi
Y = girdi.yukle()
p("yerlesim: %d" % len(Y))


def km(p1, p2):
    la1, lo1 = math.radians(p1[0]), math.radians(p1[1])
    la2, lo2 = math.radians(p2[0]), math.radians(p2[1])
    h = (math.sin((la2 - la1) / 2) ** 2
         + math.cos(la1) * math.cos(la2) * math.sin((lo2 - lo1) / 2) ** 2)
    return 6371.0 * 2 * math.asin(min(1.0, math.sqrt(h)))


# gun -> [(ad, lat, lon, kimlik)]
gun = collections.defaultdict(list)
for y in Y:
    la, lo = y.get("lat"), y.get("lon")
    if la is None or lo is None:
        continue
    for kat, etiket in (("d", "OSMANLI"), ("v", "tabi"), ("s", None)):
        for d in (y.get(kat) or []):
            kim = etiket or d.get("d") or "?"
            for g in (d.get("f"), d.get("t")):
                if not g or g <= "1281-01-01" or g >= "1923-10-29":
                    continue
                gun[g].append((y.get("ad", "?"), la, lo, kim))

p("kirilma gunu: %d" % len(gun))

# her gun icin: en uzak iki gecis kac km?
ESIK = float(os.environ.get("ESIK","2000"))
bulgu = []
for g, kayit in gun.items():
    if len(kayit) < 2:
        continue
    enb, cift = 0.0, None
    for i in range(len(kayit)):
        for j in range(i + 1, len(kayit)):
            d = km((kayit[i][1], kayit[i][2]), (kayit[j][1], kayit[j][2]))
            if d > enb:
                enb, cift = d, (kayit[i], kayit[j])
    if enb >= ESIK:
        kimlikler = sorted({k[3] for k in kayit})
        bulgu.append((enb, g, len(kayit), len(kimlikler), cift, kimlikler))

bulgu.sort(reverse=True)
p("")
p("=== BIR GUN, COGRAFI OLARAK BAGDASMAZ GECISLER (>= %d km) ===" % ESIK)
p("toplam boyle gun: %d  /  %d  (%%%.1f)"
  % (len(bulgu), len(gun), 100.0 * len(bulgu) / max(1, len(gun))))

yuvarlak = [b for b in bulgu if b[1].endswith("-01-01")]
p("bunlarin YUVARLAK (`YYYY-01-01`) olani: %d  (%%%.1f)"
  % (len(yuvarlak), 100.0 * len(yuvarlak) / max(1, len(bulgu))))

p("")
p("=== EN UZAK 12 ===")
for enb, g, n, nk, cift, kim in bulgu[:12]:
    p("  %s  %6.0f km · gecis %3d · kimlik %2d" % (g, enb, n, nk))
    p("      %s  <->  %s" % (cift[0][0][:26], cift[1][0][:26]))
    p("      kimlikler: %s" % ", ".join(kim[:6])[:88])

p("")
p("=== 1668-01-01 (NEHIR SURTUNME'nin vakasi) ===")
k = gun.get("1668-01-01", [])
p("  gecis: %d" % len(k))
for ad, la, lo, kim in sorted(k)[:8]:
    p("    %-30s %7.2f,%8.2f  %s" % (ad[:30], la, lo, kim))
