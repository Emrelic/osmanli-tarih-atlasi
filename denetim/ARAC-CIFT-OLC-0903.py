# -*- coding: utf-8 -*-
"""`renk_olc.py --dogrula` ciktisindaki 🟠 ciftlerini TEK TEK olcer.

    py denetim/ARAC-CIFT-OLC-0903.py <dogrula-ciktisi.txt>

Her cift icin GERCEK mesafe (nokta x nokta, en yakin) ve GERCEK
eszamanlilik (donem araliklarinin kesisimi) hesaplanir, sonra uc kovaya
ayrilir:

    🔴 IHLAL      <1500 km VE eszamanli  → gorulebilir cakisma
    🟢 MESRU      >=1500 km YA DA hic ortusmuyor
    ⚪ OLCULEMEDI noktasi olmayan kimlik → "temiz" DEGIL

🔴 NICIN VAR — 3 Eylul 2026, ve doguran sey KOORDINATORUN HATASI:
   `--dogrula` ciktisi siralanip yan yana duran ESIT DEGERLER cift
   sanildi. `hehe ↔ lozi` diye bir cift YOKTU (gercekte `hehe ↔ manica`
   ve `lozi ↔ nama-orlam`), ve o hayalet cift bir isci oturumu bosa
   bir olcume gonderdi.
   📌 ***Bir listeden cift turetmek, o ciftleri OLCMEK degildir.***
   ⇒ Bu betik ciftleri SATIRDAN ayristirir, siradan DEGIL.

Ve kabul olcutu: 🟠 listesi BOS donmeli, ya da kalan her cift BURADA
🟢 cikmali. "Azaldi" yetmez — 1667→1005 azalmasi da tek basina
yanilticiydi, cinsi ayrilinca anlasildi.
"""
import io, os, re, sys, math

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)
import girdi

if len(sys.argv) < 2:
    print(__doc__); sys.exit(1)
D = sys.argv[1]
if not os.path.exists(D):
    print("🔴 dosya yok: %s" % D); sys.exit(1)

cift, sat, atlanan = {}, 0, 0
for s in io.open(D, encoding="utf-8", errors="replace"):
    if "🟠" not in s:
        continue
    sat += 1
    m = re.search(r"🟠\s+(\S+)\s+\d+\s+çift:\s*(.*)$", s.strip())
    if not m:
        atlanan += 1
        print("🔴 AYRISTIRILAMADI: %r" % s.strip()[:90])
        continue
    a = m.group(1)
    for mm in re.finditer(r"([A-Za-zÇĞİÖŞÜçğıöşü0-9_-]+)\s+(\d+\.\d+)",
                          m.group(2)):
        cift[tuple(sorted((a, mm.group(1))))] = float(mm.group(2))

print("🟠 satir: %d · ayristirilamayan: %d · BENZERSIZ CIFT: %d"
      % (sat, atlanan, len(cift)))
if atlanan:
    print("🔴 ayristirilamayan satir VAR — sayim EKSIK olabilir")
if not cift:
    print("\n🟢 🟠 LISTESI BOS — kabul olcutu SAGLANDI.")
    sys.exit(0)

Y = girdi.yukle(sessiz=True)
KUN = {k["id"]: k for k in girdi.oku_devletler()}
nok, don = {}, {}
for y in Y:
    for al in ("s", "isg"):
        for p in (y.get(al) or []):
            d = p.get("d")
            if not d:
                continue
            nok.setdefault(d, []).append((y.get("lat"), y.get("lon")))
            don.setdefault(d, []).append((p.get("f"), p.get("t")))


def _km(a, b):
    if None in a or None in b:
        return None
    la1, lo1, la2, lo2 = map(math.radians, (a[0], a[1], b[0], b[1]))
    h = (math.sin((la2 - la1) / 2) ** 2
         + math.cos(la1) * math.cos(la2) * math.sin((lo2 - lo1) / 2) ** 2)
    return 6371.0 * 2 * math.asin(min(1, math.sqrt(h)))


def _ortusme(x, y):
    en = None
    for f1, t1 in don.get(x, []):
        for f2, t2 in don.get(y, []):
            if f1 and t1 and f2 and t2 and f1 < t2 and f2 < t1:
                p = (max(f1, f2), min(t1, t2))
                if en is None or p[0] < en[0]:
                    en = p
    return en


print("\n%-22s %-22s %5s %9s %-7s %s"
      % ("A", "B", "ΔE", "MESAFE", "BOLGE", "ESZAMANLI"))
ihl = mesru = olcusuz = 0
for (a, b), de in sorted(cift.items(), key=lambda x: x[1]):
    pa, pb = nok.get(a, []), nok.get(b, [])
    d = None
    for x in pa:
        for y2 in pb:
            k = _km(x, y2)
            if k is not None and (d is None or k < d):
                d = k
    o = _ortusme(a, b)
    ba = (KUN.get(a) or {}).get("bolge", "?")
    bb = (KUN.get(b) or {}).get("bolge", "?")
    bl = "AYNI" if ba == bb else "farkli"
    if d is None:
        dm = "⚪"; olcusuz += 1
    elif d < 1500 and o:
        dm = "🔴"; ihl += 1
    else:
        dm = "🟢"; mesru += 1
    print("%s %-20s %-20s %5.1f %8s %-7s %s"
          % (dm, a, b, de, ("%.0f km" % d) if d is not None else "—", bl,
             ("%s→%s" % o) if o else "ORTUSMUYOR"))

print("\n🔴 IHLAL (<1500 km VE eszamanli) : %d" % ihl)
print("🟢 MESRU (uzak ya da ortusmeyen)  : %d" % mesru)
print("⚪ OLCULEMEDI (noktasiz)          : %d   ← 'temiz' DEGIL" % olcusuz)
print("\n%s" % ("🟢 KABUL — gorulebilir cakisma YOK"
                if ihl == 0 and olcusuz == 0 else
                "🔴 KABUL EDILMEZ — %d ihlal, %d olculemedi" % (ihl, olcusuz)))
sys.exit(0 if (ihl == 0 and olcusuz == 0) else 1)
