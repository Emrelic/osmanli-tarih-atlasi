# -*- coding: utf-8 -*-
"""KRONO-0076-A ikinci olcum: 28 maddenin olayina BAGLI ek okuma karti VAR MI?

Emre'nin 26 maddesi "ek okuma yapalim" diyor. Uretmeden once sorulacak soru:
o olaya bagli kart ZATEN var mi (once-cozuldu) — yoksa ayni kart ikinci kez yazilir.
Evren: data/ekokuma*.js + data/merak*.js icindeki `olay:[...]` baglari.
Hicbir dosyaya YAZMAZ.
"""
import io, os, re

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(KOK, "data")
RAPOR = os.path.join(KOK, "denetim", "KRONO-0076-A-KAPSAMA.md")

# madde -> (olayin t: gunu, ikincil gun/anahtar)
MADDE = [
 ("H-0001", "1856-02-18", "Islahat Fermani"),
 ("H-0003", "1856-03-30", "Paris Antlasmasi"),
 ("H-0005", "1858-06-06", "Arazi Kanunnamesi"),
 ("H-0006", "1859-09-14", "Kuleli Vak'asi"),
 ("H-0007", "1860-05-30", "Cebel-i Lubnan"),
 ("H-0009", "1861-06-25", "Abdulmecid vefati / Abdulaziz culusu"),
 ("H-0010", "1863-01-13", "Darulfunun ilk dersler"),
 ("H-0012", "1864-07-01", "Buyuk Cerkes Surgunu"),
 ("H-0013", "1864-11-08", "Vilayet Nizamnamesi"),
 ("H-0014", "1866-08-21", "Girit Isyani"),
 ("H-0016", "1867-08-30", "Yeni Osmanlilar Cemiyeti"),
 ("H-0017", "1868-01-04", "Girit Nizamnamesi"),
 ("H-0018", "1868-05-10", "Sura-yi Devlet"),
 ("H-0019", "1868-09-01", "Galatasaray Mekteb-i Sultanisi"),
 ("H-0021", "1870-03-11", "Bulgar Eksarhligi"),
 ("H-0024", "1873-04-01", "Vatan yahut Silistre"),
 ("H-0025", "1875-06-19", "Hersek Isyani"),
 ("H-0026", "1876-05-30", "Abdulaziz hal'i"),
 ("H-0029", "1876-08-31", "V. Murad hal'i / II. Abdulhamid culusu"),
 ("H-0030", "1876-12-23", "Kanun-i Esasi"),
 ("H-0035", "1877-04", "93 Harbi"),
 ("H-0036", "1877-11-18", "Kars'in dususu"),
 ("H-0039", "1878-05-20", "Ciragan Baskini / Ali Suavi"),
 ("H-0043", "1878-07-29", "Bosna-Hersek ve Yenipazar isgali"),
 ("H-0055", "1878-06-04", "Kibris'in Ingiliz idaresine birakilmasi"),
 ("H-0056", "1878-07-13", "Berlin Antlasmasi"),
 ("H-0061", "1882-07-11", "Iskenderiye bombardimani"),
 ("H-0062", "1882-07-11", "Iskenderiye bombardimani (tartisma)"),
]

KART = re.compile(r"\{\s*id\s*:\s*\"(?P<id>[^\"]+)\"(?P<govde>.*?)\n\s*(?=\{\s*id\s*:|\];)", re.S)
TUR = re.compile(r"\btur\s*:\s*\"([^\"]*)\"")
KISA = re.compile(r"\bkisa\s*:\s*\"((?:[^\"\\]|\\.)*)\"")
OLAY = re.compile(r"\bolay\s*:\s*\[(?P<ic>[^\]]*)\]", re.S)
BAG = re.compile(r"\"([^\"]*)\"")

kartlar = []
dosyalar = []
for ad in sorted(os.listdir(DATA)):
    if not ad.endswith(".js"):
        continue
    if not (ad.startswith("ekokuma") or ad.startswith("merak")):
        continue
    dosyalar.append(ad)
    metin = io.open(os.path.join(DATA, ad), encoding="utf-8").read()
    for m in KART.finditer(metin):
        g = m.group("govde")
        o = OLAY.search(g)
        baglar = BAG.findall(o.group("ic")) if o else []
        t = TUR.search(g)
        k = KISA.search(g)
        kartlar.append({
            "dosya": ad, "id": m.group("id"),
            "tur": t.group(1) if t else "",
            "kisa": (k.group(1) if k else "")[:110],
            "baglar": baglar,
        })

rap = io.open(RAPOR, "w", encoding="utf-8")
def yaz(s=""):
    rap.write(s + "\n")

yaz("# KRONO-0076-A — 28 maddenin olayina BAGLI mevcut ek okuma kartlari")
yaz()
yaz("okunan dosya: %d | toplam kart: %d" % (len(dosyalar), len(kartlar)))
yaz()
print("okunan dosya: %d | toplam kart: %d" % (len(dosyalar), len(kartlar)))

bos = []
for kod, gun, ad in MADDE:
    esl = [k for k in kartlar if any(b.startswith(gun) for b in k["baglar"])]
    yaz("## %s — %s (%s) — bagli kart: %d" % (kod, ad, gun, len(esl)))
    for k in esl:
        yaz("- `%s` *(%s)* — %s   **[%s]**" % (k["id"], k["tur"], k["kisa"], k["dosya"]))
    if not esl:
        yaz("- (bagli kart yok)")
        bos.append(kod)
    yaz()

yaz("---")
yaz("hic bagli karti olmayan madde: **%d** — %s" % (len(bos), ", ".join(bos)))
rap.close()
print("bagli karti olmayan: %d" % len(bos))
print(" ".join(bos))
print("rapor: %s" % RAPOR)
