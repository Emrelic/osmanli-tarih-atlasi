# -*- coding: utf-8 -*-
"""ARAC-KITA14-0913-OLC — Değişmez 2'nin iki açığı: KAYIT + KRONOLOJİ ölçümü.
SALT OKUR. Hiçbir dosyaya yazmaz.

① Bosna Novi'si · Tobruk · Kostayniçe kayıtları: dosya, koordinat, dönemler,
   kaynak/not alanları (girdi.yukle — motorun gerçek yükleyicisi, D053)
② Bu üç yere dair mevcut madde: olaylar* (Değişmez 2 evreni) VE kronoloji*
   (kuyruk) — D006: "gün var" yetmez, hangi kovada?
③ 1555-12 … 1556-09 arası olaylar* maddeleri (en yakın komşular)
"""
import io, os, re, sys, glob, unicodedata

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)
import girdi

ESLE = str.maketrans({"İ": "i", "I": "i", "ı": "i", "Ş": "s", "ş": "s",
                      "Ğ": "g", "ğ": "g", "Ü": "u", "ü": "u", "Ö": "o",
                      "ö": "o", "Ç": "c", "ç": "c", "Â": "a", "â": "a",
                      "Î": "i", "î": "i", "Û": "u", "û": "u", "’": "'"})


def norm(s):
    s = (s or "").translate(ESLE)
    s = unicodedata.normalize("NFKD", s)
    s = "".join(c for c in s if not unicodedata.combining(c))
    return s.lower()


HEDEF = {"novi": ["bosna novi", "bosanski novi", "novi grad"],
         "tobruk": ["tobruk", "tubruk"],
         "kostaynice": ["kostaynice", "kostajnica", "kostanica"]}

Y = girdi.yukle()
print("yerlesim:", len(Y))

# hangi dosyada — ad dizgisini ham dosyalarda ara
dosyalar = sorted(glob.glob(os.path.join("data", "yerlesimler*.js")))

print("")
print("═══ ① KAYITLAR ═══")
bulunan = {}
for anahtar, adaylar in HEDEF.items():
    for y in Y:
        n = norm(y.get("ad"))
        if any(a in n for a in adaylar):
            bulunan.setdefault(anahtar, []).append(y)
    for y in bulunan.get(anahtar, []):
        print("")
        print("### %s   lat %.4f lon %.4f" % (y["ad"], y["lat"], y["lon"]))
        dos = [os.path.basename(f) for f in dosyalar
               if ('ad:"%s"' % y["ad"]) in io.open(f, encoding="utf-8").read()]
        print("   dosya :", dos)
        for alan in ("kaynak", "not", "kur", "bit", "m"):
            if y.get(alan):
                print("   %-6s: %s" % (alan, str(y[alan])[:400]))
        for tur, et in (("s", "s"), ("d", "OSMANLI"), ("v", "tabi")):
            for p in y.get(tur, []):
                ek = {k: v for k, v in p.items() if k not in ("f", "t", "d")}
                print("   %s: %s -> %s  %s  %s" % (tur, p["f"], p["t"],
                      p.get("d", et), ek if ek else ""))
    if anahtar not in bulunan:
        print("🔴 %s: ad aramasi BOS — koordinat komsulugu ile tekrar bak" % anahtar)

print("")
print("═══ ② MEVCUT MADDELER (olaylar* ve kronoloji*) ═══")
ANAH = ["novi", "kostaj", "kostayn", "kostanic", "tobruk", "tubruk", "una "]
MADDE = re.compile(r'\{[^{}]*?t:\s*"(\d{4}(?:-\d{2}){0,2})"[^{}]*?\}', re.S)
for f in sorted(glob.glob(os.path.join("data", "olaylar*.js")) +
                glob.glob(os.path.join("data", "kronoloji*.js"))):
    s = io.open(f, encoding="utf-8").read()
    kova = "CEKIRDEK(olaylar)" if os.path.basename(f).startswith("olaylar") else "kuyruk(kronoloji)"
    for m in MADDE.finditer(s):
        govde = m.group(0)
        n = norm(govde)
        if any(a in n for a in ANAH):
            b = re.search(r'b:\s*"([^"]*)"', govde)
            k = re.search(r'kaynak:\s*"([^"]*)"', govde)
            print("   %s  %-16s %-26s | %s | kaynak=%s" % (
                m.group(1), kova, os.path.basename(f),
                (b.group(1) if b else "?")[:70], k.group(1) if k else "-"))

print("")
print("═══ ③ olaylar* 1555-10 … 1556-10 arası maddeler ═══")
for f in sorted(glob.glob(os.path.join("data", "olaylar*.js"))):
    s = io.open(f, encoding="utf-8").read()
    for m in MADDE.finditer(s):
        t = m.group(1)
        if "1555-10" <= t[:7] <= "1556-10":
            b = re.search(r'b:\s*"([^"]*)"', m.group(0))
            print("   %-10s %-24s %s" % (t, os.path.basename(f),
                                         (b.group(1) if b else "?")[:80]))
