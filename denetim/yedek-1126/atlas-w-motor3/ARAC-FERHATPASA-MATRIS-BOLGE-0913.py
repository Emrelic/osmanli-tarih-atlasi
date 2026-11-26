# -*- coding: utf-8 -*-
"""FERHATPASA-MATRIS — BÖLGE (kapsam güncellemesi, koordinatör mesajı 13 Eylül) · SALT OKUR

Emre'nin bölgesi:
   DOĞU sınırı  : Erdebil – Kazvin – Tahran – İsfahan – Behbehan hattının BATISI
   BATI sınırı  : Batum – Kars – Van – Bağdat – Basra hattının DOĞUSU
   KUZEY        : Kafkas sırtının güneyi   ·   GÜNEY : Basra Körfezi
BU İŞÇİ: yalnız KUZEY YARI, lat >= 36.0.

Hat köşeleri ATLAS koordinatlarından okunur (elle yazılmaz). Hattın üstündeki
köşe kentleri İÇERİDE sayılır. Erdebil'in kuzeyinde doğu hattı TANIMSIZ →
Hazar kıyısına kadar içeride (Şirvan · Bakü · Talış). Batum'un kuzeyinde batı
hattı TANIMSIZ → Kafkas sırtının güneyindeki Batı Gürcistan (Kutaisi · Sohum)
"kenar" damgasıyla içeride. Kafkas sırtının kuzeyi (Tarki · Kızlar · Nalçik ·
Vladikavkaz · Ağrahan) DIŞARIDA ama ek listede basılır — sırt çizgisi burada
kaba bir enlem/boylam kuralıdır (Derbend koordinatörce adıyla içeride).

Kullanım:  py denetim/ARAC-FERHATPASA-MATRIS-BOLGE-0913.py [--json yol]
"""
import os, sys, io, json

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
sys.path.insert(0, os.path.join(KOK, "denetim"))
import girdi

Y = girdi.yukle(sessiz=True)
IX = {y["ad"]: y for y in Y}
KESIT = ["1590-03-21", "1603-10-21", "1612-11-20"]
DOGU = ["Erdebil", "Kazvin", "Tahran", "Isfahan", "Behbehân"]
BATI = ["Batum", "Kars", "Van", "Bağdat", "Basra"]
ESKI_0047 = {"Kasr-ı Şîrîn", "Zencan", "Sultâniye", "Bîcâr", "Merîvan", "Sakkız",
             "Bâne", "Serdeşt (Sardasht)", "Mahabad (Sâvücbulak)"}
KITA29 = {"Revan", "Gümrü (Aleksandropol)", "Eçmiyadzin", "Nahçıvan", "Ordubad",
          "Çaldıran", "Başkale", "Şerur (Sharur)", "Mâku", "Hoy", "Merend",
          "Selmâs (Dilman)"}
KAFKAS_KUZEY = {"Tarki (Tarku)", "Terek deltası (Kızlar)", "Kabartay (Nalçik)",
                "Vladikavkaz", "Ağraham burnu"}


def hat_lon(koseler, lat):
    """Kuzey→güney sıralı köşelerde verilen enlemdeki hat boylamı; aralık dışıysa None."""
    P = [(IX[a]["lat"], IX[a]["lon"]) for a in koseler]
    for (la1, lo1), (la2, lo2) in zip(P, P[1:]):
        hi, lo_ = max(la1, la2), min(la1, la2)
        if lo_ <= lat <= hi and la1 != la2:
            return lo1 + (lat - la1) / (la2 - la1) * (lo2 - lo1)
    return None


def sahip(y, g):
    for p in (y.get("d") or []):
        if p.get("f") <= g < p.get("t"):
            return "OSMANLI"
    for p in (y.get("v") or []):
        if p.get("f") <= g < p.get("t"):
            return "tabi:" + str(p.get("k") or p.get("d"))
    for p in (y.get("s") or []):
        if p.get("f") <= g < p.get("t"):
            return str(p.get("d"))
    return "SAHIPSIZ"


ICERI, DIS_K = [], []
for y in Y:
    la, lo = y.get("lat"), y.get("lon")
    if la is None or la < 36.0 or la > 44.5 or lo < 38 or lo > 53:
        continue
    if y["ad"] in KAFKAS_KUZEY:
        DIS_K.append(y)
        continue
    d = hat_lon(DOGU, la)          # doğu hattı yalnız Erdebil (38.25) güneyinde tanımlı
    if d is not None and lo > d + 1e-9:
        continue
    if d is None and la < IX["Erdebil"]["lat"]:
        continue                   # güneyde tanımsız olmamalı (Kazvin–Tahran 35.7-36.3 kapsıyor)
    b = hat_lon(BATI, la)          # batı hattı Batum (41.64) güneyinde tanımlı
    if b is not None and lo < b - 1e-9:
        continue
    if b is None:
        if la > IX["Batum"]["lat"] and lo >= 40.9:
            pass                   # Batı Gürcistan kenarı
        else:
            continue
    ICERI.append(y)

ICERI.sort(key=lambda z: (-z["lat"], z["lon"]))
print("# taban %d · KUZEY YARI içeride %d nokta · Kafkas kuzeyi (ek) %d" % (len(Y), len(ICERI), len(DIS_K)))
out = []
for grup, L in (("ICERI", ICERI), ("KAFKAS_KUZEY_EK", DIS_K)):
    print("## %s" % grup)
    for y in L:
        s = [sahip(y, g) for g in KESIT]
        etiket = "0047" if y["ad"] in ESKI_0047 else ("KITA29" if y["ad"] in KITA29 else "")
        print("%-28s %6.3f %6.3f %-22s %-22s %-22s %s" % (y["ad"][:28], y["lat"], y["lon"],
              s[0][:22], s[1][:22], s[2][:22], etiket))
        out.append({"grup": grup, "ad": y["ad"], "lat": y["lat"], "lon": y["lon"],
                    "dosya": y.get("_kaynak"), "sahip": dict(zip(KESIT, s)), "onceki_is": etiket,
                    "d": [p for p in (y.get("d") or []) if p.get("t", "9") > "1570" and p.get("f", "0") < "1650"],
                    "v": [p for p in (y.get("v") or []) if p.get("t", "9") > "1570" and p.get("f", "0") < "1650"],
                    "s": [p for p in (y.get("s") or []) if p.get("t", "9") > "1570" and p.get("f", "0") < "1650"]})
if "--json" in sys.argv:
    with open(sys.argv[sys.argv.index("--json") + 1], "w", encoding="utf-8") as f:
        json.dump(out, f, ensure_ascii=False, indent=1)
