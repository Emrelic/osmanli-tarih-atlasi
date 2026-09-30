# ARAYUZ-MADDE-0930 — paket 0042 H-0004 veri yaması ÜRETİCİ (data/savaslar.js'e YAZMAZ)
# Katalan seferinin f'si 1303-09-01 → 1303-01-01 (TDV yıl verir, gün vermez; §4/D210).
# Çıktı: kopya dosya + denetim/ARAYUZ-MADDE-0930-katalan-f.diff
import sys, subprocess
KAYNAK = "data/savaslar.js"
KOPYA = sys.argv[1]
ESKI = '{ ad:"Katalan Kumpanyası\'nın Anadolu seferi (1303-1305)", tur:"sefer", sonuc:"belirsiz", f:"1303-09-01", t:"1305-06-01",'
YENI = '{ ad:"Katalan Kumpanyası\'nın Anadolu seferi (1303-1305)", tur:"sefer", sonuc:"belirsiz", f:"1303-01-01", t:"1305-06-01",'
metin = open(KAYNAK, encoding="utf-8", newline="").read()
n = metin.count(ESKI)
print("eşleşme", n)
if n != 1:
    sys.exit("🔴 beklenen 1 eşleşme, bulunan %d — yama ÜRETİLMEDİ" % n)
open(KOPYA, "w", encoding="utf-8", newline="").write(metin.replace(ESKI, YENI))
out = subprocess.run(["diff", "-u", "--label", "a/" + KAYNAK, "--label", "b/" + KAYNAK, KAYNAK, KOPYA],
                     capture_output=True, text=True, encoding="utf-8")
open("denetim/ARAYUZ-MADDE-0930-katalan-f.diff", "w", encoding="utf-8", newline="").write(out.stdout)
print("diff satır", out.stdout.count("\n"))
