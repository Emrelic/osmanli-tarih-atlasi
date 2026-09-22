# -*- coding: utf-8 -*-
"""
SINIR-BALKAN-0907 · CIPA SINAVI, DORDUNCU TUR
Ucuncu tur `avusturya` (harita: anahtari, kunyesi `habsburg` 1526-1918) ile
`avusturya-cumhuriyet` (kunye id'si 1918-1923) ayrismasini gosterdi.
Bu alet BOLGEMDEKI 17 KIMLIGIN HER BIRI ICIN sorar:
   VERIDE hangi dizgi kullaniliyor · KUNYE var mi · o gun AKTIF mi
IDDIA ETMEZ, DOKER.
"""
import sys, os, io, re, json
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__))), "arac"))
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
import girdi

G = "1923-10-28"          # SORGU GUNU (cipa 1923-10-29, yari acik aralik disinda)


def pad(s):
    m = re.match(r"^(\d+)(-.*)?$", str(s or ""))
    return m.group(1).zfill(4) + (m.group(2) or "") if m else str(s)


BENIM = ["arnavutluk-bagimsiz", "avusturya-cumhuriyet", "yugoslavya",
         "bulgaristan-kralligi", "cekoslovakya", "estonya", "almanya",
         "yunanistan", "macaristan-naiplik", "italya", "letonya", "litvanya",
         "polonya", "romanya-kralligi", "sovyet-rusya", "isvicre", "tbmm-turkiye"]

Y = girdi.yukle()
kunye = girdi.oku_devletler() if hasattr(girdi, "oku_devletler") else None

# VERIDE o gun aktif olan kimlikler + kac noktada
sayac, ornek = {}, {}
for y in Y:
    for kat in ("d", "s", "v", "isg"):
        for p in (y.get(kat) or []):
            f, t = p.get("f"), p.get("t")
            if not f or not t:
                continue
            if not (pad(f) <= pad(G) < pad(t)):
                continue
            kid = p.get("d") or p.get("kid") or ("OSMANLI-dogrudan" if kat == "d" else "?")
            sayac[kid] = sayac.get(kid, 0) + 1
            ornek.setdefault(kid, []).append(y.get("ad"))

print("yerlesim:", len(Y), "· g =", G, "(cipa 1923-10-29, YARI ACIK aralik disinda)")
print("veride o gun aktif KIMLIK:", len(sayac))
print()
print("%-26s %-8s %-8s %s" % ("BENIM YAZDIGIM KIMLIK", "VERIDE?", "nokta", "ornek"))
for b in BENIM:
    n = sayac.get(b, 0)
    print("   %-26s %-8s %-8d %s" %
          (b, "VAR" if n else "🔴 YOK", n, ", ".join(ornek.get(b, [])[:3])))

print()
print("VERIDE VAR ama benim listemde OLMAYAN, bolgeme yakin adaylar:")
ilgi = ["avusturya", "habsburg", "osmanli", "sirbistan-kralligi", "karadag",
        "bosna-isgal", "macaristan-habsburg", "rusya", "prusya", "oniki-ada-italyan",
        "__BOSLUK__", "__KIDSIZ__"]
for a in ilgi:
    if a in sayac:
        print("   %-26s %-8d %s" % (a, sayac[a], ", ".join(ornek[a][:4])))
    else:
        print("   %-26s %-8s" % (a, "yok"))

with open(os.path.join(KOK, "denetim", "OLCUM-SINIR-BALKAN-CIPA-0907.json"),
          "w", encoding="utf-8") as f:
    json.dump({"_NOT": "SINIR-BALKAN-0907 cipa sinavi · sorgu gunu " + G,
               "veride_aktif_kimlik": sayac}, f, ensure_ascii=False, indent=1)
print()
print("yazildi: denetim/OLCUM-SINIR-BALKAN-CIPA-0907.json")
