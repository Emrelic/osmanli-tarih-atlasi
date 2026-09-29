# -*- coding: utf-8 -*-
"""YERLESIM-BIRLESTIR-0930 kabullerini `data/yerlesimler*.js`e uygular.

    py denetim/ARAC-YERLESIM-UYGULA-0930.py           # KURU KOŞU (yazmaz)
    py denetim/ARAC-YERLESIM-UYGULA-0930.py --yaz     # gerçekten yazar

🔴 NİÇİN AYRI BİR ALET VE NİÇİN KURU KOŞU VARSAYILAN:
`yerlesimler*.js` motorun ANA GİRDİSİDİR ve 4.296 noktanın her biri bir
peteğin sahibidir. Yanlış uygulanan bir pencere, ancak ~5 saatlik koşudan
SONRA haritada görünür — yani hata en pahalı yerde ortaya çıkar. Bu yüzden
alet varsayılan olarak HİÇBİR ŞEY YAZMAZ; ne yapacağını basar, siz bakarsınız.

🔴 VE `replace(eski, yeni, 1)` TUZAĞI (CLAUDE.md §11): tek eşleşme değiştiren
toplu düzeltme bu depoda daha önce veri bozdu. Burada kayıt sınırı ad ile
DEĞİL, `ad:` alanından başlayıp dengeli süslü parantezle biten TAM KAYIT
olarak bulunuyor; bulunamayan ya da BİRDEN ÇOK bulunan ad UYGULANMAZ,
rapora düşer.
"""
import io
import json
import os
import re
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace", line_buffering=True)
KOK = r"C:\atlas"
YAZ = "--yaz" in sys.argv

d = json.load(io.open(os.path.join(KOK, "denetim", "YERLESIM-BIRLESTIR-0930.json"),
                      encoding="utf-8"))
son = d["yerlesim_son"]
print("uygulanacak yerleşim: %d · kip: %s\n"
      % (len(son), "YAZIYOR" if YAZ else "KURU KOŞU (yazmaz)"))


def kayit_bul(metin, ad):
    """`ad:"<ad>"` taşıyan TAM kaydın (bas, son) sınırı. Dengeli parantez."""
    hedef = re.escape(ad)
    bulunan = []
    for m in re.finditer(r'ad\s*:\s*["\']' + hedef + r'["\']', metin):
        # kaydın başı: geriye doğru ilk '{'
        i = metin.rfind("{", 0, m.start())
        if i < 0:
            continue
        derinlik, j = 0, i
        while j < len(metin):
            c = metin[j]
            if c == "{":
                derinlik += 1
            elif c == "}":
                derinlik -= 1
                if derinlik == 0:
                    bulunan.append((i, j + 1))
                    break
            j += 1
    return bulunan


def alan_yaz(kayit, alan, deger):
    """Kayıttaki `alan:` dizisini `deger` ile değiştirir; alan yoksa EKLER."""
    yeni = "%s:%s" % (alan, json.dumps(deger, ensure_ascii=False, separators=(",", ":")))
    m = re.search(r'(?<![A-Za-z0-9_])' + alan + r'\s*:\s*\[', kayit)
    if not m:
        if not deger:
            return kayit, "yok-bos"           # olmayan alanı boş yazmaya gerek yok
        return kayit[:-1].rstrip().rstrip(",") + ", " + yeni + "}", "eklendi"
    # dizinin dengeli kapanışını bul
    i = kayit.index("[", m.start())
    derinlik, j = 0, i
    while j < len(kayit):
        if kayit[j] == "[":
            derinlik += 1
        elif kayit[j] == "]":
            derinlik -= 1
            if derinlik == 0:
                break
        j += 1
    return kayit[:m.start()] + yeni + kayit[j + 1:], "degisti"


dosyalar, rapor = {}, {"uygulandi": [], "bulunamadi": [], "coklu": [], "degismedi": []}
for ad, v in son.items():
    dosya = v.get("dosya") or "yerlesimler.js"
    yol = os.path.join(KOK, "data", dosya)
    if dosya not in dosyalar:
        if not os.path.exists(yol):
            rapor["bulunamadi"].append((ad, dosya + " YOK"))
            continue
        dosyalar[dosya] = io.open(yol, encoding="utf-8", newline="").read()
    metin = dosyalar[dosya]

    yerler = kayit_bul(metin, ad)
    if not yerler:
        rapor["bulunamadi"].append((ad, dosya))
        continue
    if len(yerler) > 1:
        rapor["coklu"].append((ad, dosya, len(yerler)))
        continue

    bas, bit = yerler[0]
    kayit = metin[bas:bit]
    yeni_kayit = kayit
    degisen = []
    for alan in ("s", "d", "v", "isg"):
        if alan not in v:
            continue
        yeni_kayit, hal = alan_yaz(yeni_kayit, alan, v[alan])
        if hal != "yok-bos":
            degisen.append("%s:%s" % (alan, hal))
    if yeni_kayit == kayit:
        rapor["degismedi"].append((ad, dosya))
        continue
    dosyalar[dosya] = metin[:bas] + yeni_kayit + metin[bit:]
    rapor["uygulandi"].append((ad, dosya, ", ".join(degisen)))

print("✅ uygulanabilir : %d" % len(rapor["uygulandi"]))
print("⚪ zaten aynı    : %d" % len(rapor["degismedi"]))
print("🔴 bulunamadı    : %d" % len(rapor["bulunamadi"]))
print("🔴 birden çok    : %d  (UYGULANMADI — hangisi olduğu belirsiz)"
      % len(rapor["coklu"]))
for ad, ds in rapor["bulunamadi"][:15]:
    print("     bulunamadı: %-42s %s" % (ad[:42], ds))
for ad, ds, n in rapor["coklu"][:15]:
    print("     çoklu     : %-42s %s ×%d" % (ad[:42], ds, n))

if not YAZ:
    print("\n⚪ KURU KOŞU — hiçbir dosyaya dokunulmadı.")
    print("   Yazmak için: py denetim/ARAC-YERLESIM-UYGULA-0930.py --yaz")
    print("   🔴 YAZDIKTAN SONRA ŞART: node --check + py arac/denetle.py")
    sys.exit(0)

for dosya, metin in dosyalar.items():
    io.open(os.path.join(KOK, "data", dosya), "w",
            encoding="utf-8", newline="").write(metin)
    print("  ✓ yazıldı: data/%s" % dosya)
print("\n🔴 ŞİMDİ ŞART: node --check her dosya · py arac/denetle.py (tek kapı)")
