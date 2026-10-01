# -*- coding: utf-8 -*-
r"""LAB'in ARASTIRMASINDAN cikan 8 odak kalemini uygular.

Kaynak: denetim/LAB-ODAK-YER-1001.md + LAB-ODAK-ORTADOGU-1002.md
LAB 81 odaksiz maddeyi tek tek okudu; 8'inde olayin gectigi yer atlasta VAR.

🔴 NICIN ARACIN ONERISI DEGIL, LAB'IN ARASTIRMASI UYGULANIYOR:
   `ARAC-ODAK-ONER` basliktaki ilk yer adini aliyordu ve 20 kalemin
   20'sinde o ad OLAYIN GECTIGI YER DEGILDI — maddede anilan bir TARAFTI
   ("Hittin Savasi" → Kudus · "Nureddin DIMASK'i aldi" → Halep).
   Dizgiden ayirt edilemez; cumlenin anlami gerekir. LAB okudu.

🔴 UCU IKI YOLDAN DOGRULANDI: 1001 listesindeki #30·#32·#42, 1002
   listesindeki #27·#38·#55 ile AYNI KAYITLAR. LAB iki ayri yoldan
   arastirip ayni sonuca vardi. Mukerrer degil, TEYIT.

⚠️ #27/#30 (Josselin → Surug) AYRICA bir `yer` alani kusurunu da duzeltiyor:
   kaydin `yer` alani "Urfa yoresi, Harput" diyor, TDV ise Seruc diyor
   (Harput HAPIS yeri). `yer_id:"Surug"` kaynaga uygun olan.
   `yer` metin alani AYRI bir kalem olarak duruyor — bu arac ona DOKUNMAZ.

KULLANIM:  py denetim/ARAC-LAB-ODAK-UYGULA-1002.py [--yaz]
"""
import io
import json
import os
import re
import subprocess
import sys

sys.stdout.reconfigure(encoding="utf-8")
os.chdir(r"C:\atlas")
KURU = "--yaz" not in sys.argv
YOL = "data/kronoloji_cok_once1281_ortadogu.js"

# (t, b oneki, yer_id, LAB'in kaynak dayanagi)
ISLER = [
    ("1030-01-01", "Mirdâsîler Azâz yakınında", "Azez (A'zâz)",
     "TDV mirdasiler: «Azâz yakınında Bizans ordusunu yenilgiye uğratarak»"),
    ("1122-01-01", "Urfa kontu Josselin", "Suruç",
     "TDV belek-b-behram: «13 Eylül 1122'de … Serûc yakınlarında mağlûp ve esir etti»"),
    ("1148-01-01", "II. Haçlı Seferi", "Şam",
     "TDV tugteginliler: «Kalabalık bir Haçlı ordusu 543'te (1148) şehri kuşattı»"),
    ("1154-04-25", "Nûreddin Mahmud Dımaşk'ı aldı", "Şam",
     "TDV zengiler: «25 Nisan 1154'te Dımaşk'ı zapteden Nûreddin»"),
    ("1174-01-01", "Turan Şah Yemen'i fethetti", "Zebîd",
     "TDV turan-sah: «Yemen'e girerek Zebîd'i kontrol altına aldı» — ilk alınan şehir"),
    ("1193-03-04", "Selâhaddin", "Şam",
     "TDV eyyubiler: «27 Safer 589 (4 Mart 1193) tarihinde Dımaşk'ta vefat etti»"),
    ("1250-01-01", "Halep'in el-Melikü'n-Nâsır", "Şam",
     "TDV sam--suriye: «Dımaşk'ta hâkimiyeti sağladı (648/1250)»"),
    ("1260-01-01", "Ketboğa", "Şam",
     "TDV sam--suriye: «Dımaşk da Moğollar'ın eline geçti (Rebîülevvel 658 / Mart 1260)»"),
]


def alan(ad):
    return re.compile(r'("?%s"?\s*:\s*)"((?:[^"\\]|\\.)*)"' % re.escape(ad))


def kayit_sonu(s, bas):
    i, tirnak, kacis = bas, False, False
    while i < len(s):
        c = s[i]
        if kacis:
            kacis = False
        elif c == "\\":
            kacis = True
        elif c == '"':
            tirnak = not tirnak
        elif c == "}" and not tirnak:
            return i
        i += 1
    return len(s)


s = io.open(YOL, encoding="utf-8", newline="").read()
print("### KURU KOŞU ###" if KURU else "### YAZIYOR ###")
print("  dosya: %s" % YOL)
n, atlanan = 0, []
for t, bp, yer, dayanak in ISLER:
    T = re.compile(r'"?t"?\s*:\s*"%s"' % re.escape(t))
    B = alan("b")
    hedef = []
    for mt in T.finditer(s):
        mb = B.search(s, mt.end(), mt.end() + 3000)
        if mb and bp in mb.group(2):
            hedef.append((mt, mb))
    if len(hedef) != 1:
        atlanan.append((t, bp, len(hedef)))
        print("  🔴 %s %-32s %d kayıt eşleşti (1 bekleniyordu) — ATLANDI"
              % (t, bp[:32], len(hedef)))
        continue
    mt, mb = hedef[0]
    son = kayit_sonu(s, mb.end())
    govde = s[mb.end():son]
    mbos = re.search(r'("?yer_id"?\s*:\s*)""', govde)
    if mbos:
        k0, k1 = mb.end() + mbos.start(1), mb.end() + mbos.end()
        s = s[:k0] + mbos.group(1) + '"%s"' % yer + s[k1:]
    elif re.search(r'"?yer_id"?\s*:', govde):
        print("  ⚪ %s zaten DOLU yer_id var — atlandı" % t)
        continue
    else:
        s = s[:mb.end()] + ', yer_id:"%s"' % yer + s[mb.end():]
    n += 1
    print("  ✓ %s %-32s → %-14s  %s" % (t, bp[:32], yer, dayanak[:54]))

print("\n  uygulanan: %d / %d" % (n, len(ISLER)))
if atlanan:
    print("  🔴 ATLANAN: %d" % len(atlanan))
if KURU:
    print("\n=> uygulamak için --yaz")
    sys.exit(0)
io.open(YOL, "w", encoding="utf-8", newline="").write(s)
r = subprocess.run(["node", "--check", YOL], capture_output=True, text=True)
if r.returncode != 0:
    print("🔴 node --check BAŞARISIZ"); print(r.stderr[:400]); sys.exit(1)
print("✓ YAZILDI · node --check temiz")
