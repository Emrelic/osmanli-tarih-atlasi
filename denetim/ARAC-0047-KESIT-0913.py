# -*- coding: utf-8 -*-
"""0047 — Ferhat Paşa batı kanadı: dokuz yerin atlas kaydı (SALT OKUR)

Türkçe-duyarlı normalleştirilmiş ad araması (CLAUDE.md §4 · İ.lower() tuzağı),
her eşleşmenin dosyası, m:, kaynak:, 1500-1750 zinciri ve iki kesitte sahibi
(motor sırası d > v > s, ARAC-KITA29-KESIT ile aynı). Ek: her yerin en yakın 8
komşusu ve 1590-03-21 sahipleri.

Kullanım:  py denetim/ARAC-0047-KESIT-0913.py
"""
import os, sys, io, unicodedata, collections

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi

TR = str.maketrans({"İ": "i", "I": "i", "ı": "i", "Ş": "s", "ş": "s", "Ğ": "g", "ğ": "g",
                    "Ü": "u", "ü": "u", "Ö": "o", "ö": "o", "Ç": "c", "ç": "c",
                    "Â": "a", "â": "a", "Î": "i", "î": "i", "Û": "u", "û": "u",
                    "’": "", "'": "", "-": " ", "‘": ""})


def norm(s):
    s = (s or "").translate(TR)
    s = unicodedata.normalize("NFKD", s)
    s = "".join(c for c in s if not unicodedata.combining(c))
    return s.lower()


HEDEF = collections.OrderedDict([
    ("Kasr-ı Şirin", ["kasr i sirin", "kasrisirin", "qasr", "kasr sirin", "kasri sirin"]),
    ("Zencan", ["zencan", "zanjan"]),
    ("Sultaniye", ["sultaniye", "soltaniy", "sultaniyye"]),
    ("Bîcâr", ["bicar", "bijar", "garrus", "gerrus"]),
    ("Merîvan", ["merivan", "marivan"]),
    ("Sakız", ["sakiz", "sakkiz", "saqqez", "saqqiz", "sakkez"]),
    ("Bâne", ["bane", "baneh"]),
    ("Serdeşt", ["serdest", "sardasht"]),
    ("Mahabad", ["mahabad", "savucbulak", "savojbolagh", "sogukbulak", "soukbulak", "sovucbulak"]),
])
KESIT = ["1590-03-21", "1603-10-21"]
EK_KESIT = ["1583-01-01", "1588-06-15", "1595-06-15", "1612-11-21", "1624-06-15", "1639-06-15"]

Y = girdi.yukle(sessiz=True)
print("# taban %d nokta · %d girdi dosyası" % (len(Y), len(girdi.GIRDI_DOSYALARI)))


def sahip(y, g):
    if y.get("kur") and y["kur"] > g:
        return "HENÜZ-YOK"
    for p in (y.get("d") or []):
        if p.get("f") <= g < p.get("t"):
            return "OSMANLI"
    for p in (y.get("v") or []):
        if p.get("f") <= g < p.get("t"):
            return "tâbi:" + str(p.get("d") or p.get("k"))
    for p in (y.get("s") or []):
        if p.get("f") <= g < p.get("t"):
            return str(p.get("d"))
    return "SAHİPSİZ"


def eslesir(ad, anahtarlar):
    n = norm(ad)
    kel = n.replace("(", " ").replace(")", " ").replace(",", " ").split()
    for a in anahtarlar:
        if " " in a or len(a) >= 6:
            if a in n:
                return True
        else:
            if a in kel:          # kısa anahtar (bane) yalnız TAM KELİME — D159
                return True
    return False


bulunan = {}
for etiket, anahtarlar in HEDEF.items():
    es = [y for y in Y if eslesir(y["ad"], anahtarlar)]
    bulunan[etiket] = es
    print()
    print("=" * 96)
    print("■ %s  anahtarlar=%s  →  %d eşleşme" % (etiket, anahtarlar, len(es)))
    for y in es:
        print("  · %-30s (%.4f, %.4f) dosya=%s m=%s tur=%s kur=%s"
              % (y["ad"], y["lat"], y["lon"], y.get("_kaynak"), y.get("m"), y.get("tur"), y.get("kur")))
        print("    kaynak: %s" % (str(y.get("kaynak"))[:300]))
        for alan in ("d", "v", "s", "isg"):
            for p in (y.get(alan) or []):
                if p.get("t", "9999") < "1500-01-01" or p.get("f", "0") > "1750-12-31":
                    continue
                ek = {k: v for k, v in p.items() if k not in ("f", "t")}
                print("      %-3s %s → %s  %s" % (alan, p.get("f"), p.get("t"), ek))
        print("    KESİT: " + " · ".join("%s=%s" % (g, sahip(y, g)) for g in KESIT))
        print("    ek   : " + " · ".join("%s=%s" % (g[:7], sahip(y, g)) for g in EK_KESIT))
        uz = sorted(((girdi.km(y["lat"], y["lon"], z["lat"], z["lon"]), z)
                     for z in Y if z is not y and z.get("lat") is not None), key=lambda x: x[0])[:8]
        print("    en yakın 8 (1590-03-21): " + " · ".join(
            "%s %.0fkm %s" % (z["ad"][:16], d, sahip(z, "1590-03-21")[:10]) for d, z in uz))

print()
print("=" * 96)
print("ÖZET")
for etiket, es in bulunan.items():
    if not es:
        print("  %-14s NOKTA YOK" % etiket)
    for y in es:
        print("  %-14s %-28s %s" % (etiket, y["ad"][:28],
                                     " · ".join("%s=%s" % (g, sahip(y, g)) for g in KESIT)))

# Bölge kutusu — batı İran kuşağında 1590'da Osmanlı olan noktalar (bağlam)
print()
print("=" * 96)
print("BAĞLAM · 33,5-37,5°K × 44,5-49,5°D kutusu · 1590-03-21 sahipleri")
kutu = [y for y in Y if y.get("lat") is not None and 33.5 <= y["lat"] <= 37.5 and 44.5 <= y["lon"] <= 49.5]
say = collections.defaultdict(list)
for y in sorted(kutu, key=lambda z: z["lon"]):
    say[sahip(y, "1590-03-21")].append("%s(%.1f,%.1f)" % (y["ad"][:18], y["lat"], y["lon"]))
for k, v in say.items():
    print("  %-14s %2d  %s" % (k, len(v), " · ".join(v)))
