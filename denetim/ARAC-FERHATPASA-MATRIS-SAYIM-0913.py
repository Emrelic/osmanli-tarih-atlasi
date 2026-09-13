# -*- coding: utf-8 -*-
"""FERHATPASA-MATRIS — SAYIM + ÇAPRAZ SINAV (SALT OKUR)

Girdi: denetim/YAMA-FERHATPASA-SEHIR-MATRISI-0913.json (hüküm matrisi)
  ① bölge kümesi (ARAC-...-BOLGE ile AYNI kural) ↔ matris adları: eksik / fazla
  ② atlas sahibi 1590-03-21 · 1603-10-21 · 1612-11-20 GİRDİDEN yeniden okunur
     (matristeki beyana güvenilmez) ve hükümle karşılaştırılır:
        OSMANLI ↔ atlas OSMANLI|tâbi  = uyumlu  (tür ayrımı kusur sayılmaz — öngörü mazereti)
        TABI    ↔ atlas OSMANLI|tâbi  = uyumlu
        SAFEVI  ↔ atlas safevi        = uyumlu
        BELIRSIZ / KAPSAM_DISI        = ayrı kova
     ⇒ KUSUR listesi HESAPLANIR; matristeki "kusur": true beyanıyla farkı basılır
  ③ ÖNERİLER'deki her yeni günün ±30 gün penceresi — data/olaylar*.js (Değişmez 2 evreni)

Kullanım:  py denetim/ARAC-FERHATPASA-MATRIS-SAYIM-0913.py
"""
import os, sys, io, re, json, glob, collections, datetime

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi

J = json.load(open(os.path.join(KOK, "denetim", "YAMA-FERHATPASA-SEHIR-MATRISI-0913.json"), encoding="utf-8"))
Y = girdi.yukle(sessiz=True)
IX = {y["ad"]: y for y in Y}
KESIT = ["1590-03-21", "1603-10-21", "1612-11-20"]
HAZAR_DOGUSU = {"Garabogaz (Bekdaş)", "Krasnovodsk (Türkmenbaşı)"}
KAFKAS_KUZEY = {"Tarki (Tarku)", "Terek deltası (Kızlar)", "Kabartay (Nalçik)", "Vladikavkaz", "Ağraham burnu"}


def sahip(y, g):
    for p in (y.get("d") or []):
        if p.get("f") <= g < p.get("t"):
            return "OSMANLI"
    for p in (y.get("v") or []):
        if p.get("f") <= g < p.get("t"):
            return "tabi"
    for p in (y.get("s") or []):
        if p.get("f") <= g < p.get("t"):
            return str(p.get("d"))
    return "SAHIPSIZ"


def hat_lon(koseler, lat):
    P = [(IX[a]["lat"], IX[a]["lon"]) for a in koseler]
    for (la1, lo1), (la2, lo2) in zip(P, P[1:]):
        if min(la1, la2) <= lat <= max(la1, la2) and la1 != la2:
            return lo1 + (lat - la1) / (la2 - la1) * (lo2 - lo1)
    return None


# ① bölge (BOLGE aletiyle aynı kural)
bolge = set()
for y in Y:
    la, lo = y.get("lat"), y.get("lon")
    if la is None or la < 36.0 or la > 44.5 or lo < 38 or lo > 53:
        continue
    if y["ad"] in KAFKAS_KUZEY or y["ad"] in HAZAR_DOGUSU:
        continue
    d = hat_lon(["Erdebil", "Kazvin", "Tahran", "Isfahan", "Behbehân"], la)
    if (d is not None and lo > d + 1e-9) or (d is None and la < IX["Erdebil"]["lat"]):
        continue
    b = hat_lon(["Batum", "Kars", "Van", "Bağdat", "Basra"], la)
    if (b is not None and lo < b - 1e-9) or (b is None and not (la > IX["Batum"]["lat"] and lo >= 40.9)):
        continue
    bolge.add(y["ad"])
M = {r["ad"]: r for r in J["matris"]}
print("# ① bölge %d nokta · matris %d satır · bölgede olup matriste YOK: %s · matriste olup bölgede YOK: %s"
      % (len(bolge), len(M), sorted(bolge - set(M)) or "-", sorted(set(M) - bolge) or "-"))

# ② karşılaştırma
kova = collections.Counter()
tur_say = collections.Counter()
kusur, beyan_farki = [], []
print("\n# ② %-26s %-9s %-9s %-9s  %-11s %-11s %s" % ("ad", "1590", "1603", "1612", "hüküm", "tür", "sonuç"))
for ad in sorted(M, key=lambda a: -IX[a]["lat"] if a in IX else 0):
    r = M[ad]
    y = IX.get(ad)
    s = [sahip(y, g) for g in KESIT] if y else ["YOK"] * 3
    h = r["hukum"]
    tur_say[r["tur"]] += 1
    if h in ("BELIRSIZ",):
        sonuc = "belirsiz"
    elif h == "KAPSAM_DISI":
        sonuc = "kapsam-disi"
    elif h in ("OSMANLI", "TABI"):
        sonuc = "dogru" if s[0] in ("OSMANLI", "tabi") else "KUSUR"
    elif h == "SAFEVI":
        sonuc = "dogru" if s[0] == "safevi" else "KUSUR"
    else:
        sonuc = "?"
    kova[(sonuc, r["tur"] if sonuc != "dogru" else "*")] += 1
    if sonuc == "KUSUR":
        kusur.append((ad, s[0], h, r["tur"], r.get("oneri")))
    if (sonuc == "KUSUR") != bool(r.get("kusur")):
        beyan_farki.append(ad)
    print("  %-26s %-9s %-9s %-9s  %-11s %-11s %s" % (ad[:26], s[0][:9], s[1][:9], s[2][:9], h, r["tur"], sonuc))

print("\n# SAYILAR")
for k, v in sorted(kova.items()):
    print("  %-12s tür=%-12s %d" % (k[0], k[1], v))
print("  hüküm türü dağılımı: %s" % dict(tur_say))
print("  KUSUR %d: " % len(kusur))
for k in kusur:
    print("    %-24s atlas=%-8s hüküm=%-8s %-10s öneri=%s" % k)
print("  'kusur' beyanı ile hesap FARKLI: %s" % (beyan_farki or "-"))

# ③ Değişmez 2 penceresi
olay = []
for f in glob.glob(os.path.join(KOK, "data", "olaylar*.js")):
    t = open(f, encoding="utf-8").read()
    for m in re.finditer(r'\{\s*t\s*:\s*"(\d{4}-\d{2}(?:-\d{2})?)"[^}]*?\bb\s*:\s*"([^"]*)"', t):
        g = m.group(1) if len(m.group(1)) == 10 else m.group(1) + "-01"
        try:
            olay.append((datetime.date.fromisoformat(g), m.group(2), os.path.basename(f)))
        except ValueError:
            pass
print("\n# ③ Değişmez 2 penceresi (data/olaylar*.js, %d madde)" % len(olay))
for o in J["ONERILER"]:
    for dg in o["degisiklik"]:
        for uc in ("f", "t"):
            g = (dg.get("yeni") or {}).get(uc)
            if not g:
                continue
            gd = datetime.date.fromisoformat(g)
            yakin = sorted((abs((x[0] - gd).days), x) for x in olay)[:2]
            print("  %-13s %s=%s  en yakın: %s" % (o["kod"], uc, g,
                  " | ".join("%+dg %s «%s» (%s)" % ((x[0] - gd).days, x[0], x[1][:50], x[2]) for d_, x in yakin)))
