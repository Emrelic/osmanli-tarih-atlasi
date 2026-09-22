# -*- coding: utf-8 -*-
"""KRONO-0076-A olcumu: 28 maddenin kronoloji karsiligi veride VAR MI?

Olcum evreni: data/olaylar*.js (Degismez 2 evreni) + data/kronoloji*.js (kuyruk).
Yontem: her dosyadaki `{ t:"..." ... b:"..." ... }` kayitlarindan tarih+baslik
cikarilir; 1855-1884 penceresi suzulur; her madde icin anahtar kelime aranir.
Hicbir veri dosyasina YAZMAZ — yalnizca okur.
"""
import io, os, re, json, sys, unicodedata

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(KOK, "data")

def norm(s):
    # 🔴 D215: "I".lower() iki kod noktasi verir; ı/İ ayrica NFKD'den SAG CIKAR
    # ve [^a-z] suzgecinde SESSIZCE SILINIR. Once elle i'ye katlanir.
    for a, b in (("I", "i"), ("İ", "i"), ("ı", "i"), ("Ş", "s"), ("ş", "s"),
                 ("Ğ", "g"), ("ğ", "g"), ("Ü", "u"), ("ü", "u"),
                 ("Ö", "o"), ("ö", "o"), ("Ç", "c"), ("ç", "c")):
        s = s.replace(a, b)
    s = s.lower()
    s = unicodedata.normalize("NFKD", s)
    s = "".join(c for c in s if not unicodedata.combining(c))
    return re.sub(r"[^a-z0-9 ]+", " ", s)

# --- kayit toplama -----------------------------------------------------------
KAYIT = re.compile(r"\{[^{}]*?\bt\s*:\s*\"(?P<t>\d{3,4}[^\"]*)\"[^{}]*?\}", re.S)
BASLIK = re.compile(r"\bb\s*:\s*\"((?:[^\"\\]|\\.)*)\"")
GUN = re.compile(r"\bgun\s*:\s*\"((?:[^\"\\]|\\.)*)\"")

kayitlar = []
dosyalar = []
for ad in sorted(os.listdir(DATA)):
    if not ad.endswith(".js"):
        continue
    if not (ad.startswith("olaylar") or ad.startswith("kronoloji")):
        continue
    dosyalar.append(ad)
    metin = io.open(os.path.join(DATA, ad), encoding="utf-8").read()
    for m in KAYIT.finditer(metin):
        govde = m.group(0)
        b = BASLIK.search(govde)
        g = GUN.search(govde)
        kayitlar.append({
            "dosya": ad,
            "t": m.group("t"),
            "b": b.group(1) if b else "",
            "gun": g.group(1) if g else "",
        })

def yil(t):
    try:
        return int(t[:4])
    except Exception:
        return -1

pencere = [k for k in kayitlar if 1855 <= yil(k["t"]) <= 1884]
for k in pencere:
    k["n"] = norm(k["b"] + " " + k["gun"])

# --- 28 madde: (kod, beklenen tarih, aranan anahtar kelimeler) ----------------
MADDE = [
 ("H-0001", "1856-02-18", ["islahat fermani"]),
 ("H-0003", "1856-03-30", ["paris antlasma", "paris baris", "paris muahede"]),
 ("H-0005", "1858-06-06", ["arazi kanunname"]),
 ("H-0006", "1859-09-14", ["kuleli"]),
 ("H-0007", "1860-05", ["cebel i lubnan", "cebel lubnan", "lubnan", "sam olaylari"]),
 ("H-0009", "1861-06-25", ["abdulaziz", "abdulmecid"]),
 ("H-0010", "1863-01-13", ["darulfunun"]),
 ("H-0012", "1864", ["cerkes"]),
 ("H-0013", "1864-11-08", ["vilayet nizamname"]),
 ("H-0014", "1866", ["girit isyan"]),
 ("H-0016", "1867-08-30", ["yeni osmanlilar"]),
 ("H-0017", "1868-01-04", ["girit nizamname"]),
 ("H-0018", "1868-05-10", ["sura yi devlet", "surayi devlet"]),
 ("H-0019", "1868-09-01", ["galatasaray", "mekteb i sultani"]),
 ("H-0021", "1870-03-11", ["bulgar eksarh"]),
 ("H-0024", "1873-04-01", ["vatan yahut silistre", "namik kemal"]),
 ("H-0025", "1875-06-19", ["hersek isyan"]),
 ("H-0026", "1876-05-30", ["abdulaziz"]),
 ("H-0029", "1876-08-31", ["murad", "abdulhamid"]),
 ("H-0030", "1876-12-23", ["kanun i esasi", "mesrutiyet"]),
 ("H-0035", "1877-04-24", ["93 harbi", "osmanli rus", "rus savas"]),
 ("H-0036", "1877-11-18", ["kars"]),
 ("H-0039", "1878-05-20", ["ciragan", "ali suavi"]),
 ("H-0043", "1878-07-29", ["bosna", "yenipazar"]),
 ("H-0055", "1878-06-04", ["kibris"]),
 ("H-0056", "1878-07-13", ["berlin antlasma", "berlin kongre"]),
 ("H-0061", "1882-07-11", ["iskenderiye", "misir isgal"]),
 ("H-0062", "1882-07-11", ["iskenderiye", "misir isgal"]),
]

RAPOR = os.path.join(KOK, "denetim", "KRONO-0076-A-OLCUM.md")
rap = io.open(RAPOR, "w", encoding="utf-8")
def yaz(s=""):
    rap.write(s + "\n")

yaz("# KRONO-0076-A — 28 maddenin kronoloji karsiligi (olcum)")
yaz()
yaz("okunan dosya: %d | toplam kayit: %d | 1855-1884 penceresi: %d"
    % (len(dosyalar), len(kayitlar), len(pencere)))
yaz()
print("okunan dosya: %d | toplam kayit: %d | 1855-1884 penceresi: %d"
      % (len(dosyalar), len(kayitlar), len(pencere)))

sonuc = {}
for kod, tarih, kelimeler in MADDE:
    bulunan = []
    for k in pencere:
        for kel in kelimeler:
            if norm(kel) in k["n"]:
                bulunan.append(k)
                break
    # tarih yakinligi: ayni yil onde
    hedef_yil = int(tarih[:4])
    bulunan.sort(key=lambda k: (abs(yil(k["t"]) - hedef_yil), k["t"]))
    sonuc[kod] = bulunan
    yaz("## %s  — beklenen %s — %d aday" % (kod, tarih, len(bulunan)))
    for k in bulunan[:4]:
        yaz("- `t=%s` gun=`%s` — %s   *[%s]*"
            % (k["t"], k["gun"], k["b"], k["dosya"]))
    if not bulunan:
        yaz("- 🔴 **BULUNAMADI**")
    yaz()

yok = [k for k, v in sonuc.items() if not v]
yaz("---")
yaz("karsiligi bulunamayan madde sayisi: **%d** — %s" % (len(yok), ", ".join(yok)))
rap.close()
print("karsiligi bulunamayan: %d  %s" % (len(yok), yok))
print("rapor: %s" % RAPOR)
