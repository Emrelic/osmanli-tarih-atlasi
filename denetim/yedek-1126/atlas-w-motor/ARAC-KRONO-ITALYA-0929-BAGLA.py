# KRONO-ITALYA-0929 — kronoloji_italya.js maddelerine gerçek künye (`devlet:`/`devletler:`) yazar
# ve global adı KRONOLOJI_ITALYA -> KRONOLOJI_COK_ITALYA yapar.
# Niçin: KRONOLOJI_ITALYA künye `italya`ya (f=1861-03-17) bağlanıyordu; 192 maddenin 164'ü
# 1861'den ÖNCE (anakronik) ve `italya`nın kendi 6 maddesini eziyordu (ORTAK §4.1).
# Kullanım: py -X utf8 denetim/ARAC-KRONO-ITALYA-0929-BAGLA.py [--yaz]
import re, sys, io, json, subprocess
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
DOSYA = "data/kronoloji_italya.js"


def kimlik(i):
    """Madde sırasına (dosyadaki 0..191) göre künye. Aralıklar dosyanın başlık bölümlerinden."""
    if i == 28:
        return ["papalik", "italya"]           # 1870-09-20: Papalık'ın son günü + İtalya Krallığı'nın ilhakı
    if i == 29:
        return "italya"                         # 1871 Garanti Kanunu (İtalyan yasası)
    if i <= 27:
        return "papalik"
    if i <= 60:
        return "napoli"
    if i <= 77:
        return "cenova"
    if i == 78:
        return "sardinya-piyemonte"             # 1815 Cenova'nın Sardinya'ya verilmesi
    if i == 98:
        return "italya-napolyon"                # 1797-07-09 Cisalpin Cumhuriyeti
    if i <= 102:
        return "milano-dukaligi"
    if i <= 120:
        return "floransa"
    if i <= 129:
        return "toskana"
    if i == 130:
        return "italya"                         # 1865 geçici başkent
    if i <= 133:
        return "siena"
    if i <= 138:
        return "ferrara"
    if i <= 140:
        return "savoya"
    if i == 141:
        return ["savoya", "sardinya-piyemonte"]  # 1720-08-02 tam geçiş günü
    if i <= 156:
        return "sardinya-piyemonte"
    if i == 157:
        return ["sardinya-piyemonte", "italya"]  # 1861-03-17 tam geçiş günü
    if i <= 180:
        return "italya"
    if i == 181:
        return "milano-dukaligi"
    if i <= 183:
        return "papalik"
    if i <= 186:
        return "toskana"
    if i == 187:
        return "cenova"
    if i <= 189:
        return "napoli"
    return "milano-dukaligi"                    # 190 La Scala · 191 Beccaria


metin = io.open(DOSYA, encoding="utf-8", newline="").read()
if "KRONOLOJI_COK_ITALYA" in metin:
    print("ZATEN DÖNÜŞMÜŞ"); sys.exit(0)
parcalar = re.split(r'(?m)^(\{ t:")', metin)
# parcalar: [baş, '{ t:"', gövde0, '{ t:"', gövde1, ...]
n = (len(parcalar) - 1) // 2
print("madde:", n)
assert n == 192, n
cikti = [parcalar[0]]
for i in range(n):
    k = kimlik(i)
    if isinstance(k, list):
        onek = 'devletler:[' + ",".join('"%s"' % x for x in k) + '], '
    else:
        onek = 'devlet:"%s", ' % k
    cikti.append('{ ' + onek + 't:"')
    cikti.append(parcalar[2 + 2 * i])
yeni = "".join(cikti)
yeni = yeni.replace("window.KRONOLOJI_ITALYA = [", "window.KRONOLOJI_COK_ITALYA = [", 1)
ek = ("// 🔴 29 Eylül 2026 — KRONO-ITALYA-0929: global KRONOLOJI_ITALYA → KRONOLOJI_COK_ITALYA.\n"
      "//    Eski ad `italya` künyesine (1861+) bağlanıp 164 anakronik maddeyi oraya yığıyordu;\n"
      "//    artık her madde `devlet:`/`devletler:` ile olayın günü var olan künyeye gider (ORTAK §4.1).\n"
      "//    Kayıt: denetim/KRONO-ITALYA-0929-DUZELTME.md · araç: denetim/ARAC-KRONO-ITALYA-0929-BAGLA.py\n")
yeni = yeni.replace("window.KRONOLOJI_COK_ITALYA = [", ek + "window.KRONOLOJI_COK_ITALYA = [", 1)
if "--yaz" in sys.argv:
    io.open(DOSYA, "w", encoding="utf-8", newline="").write(yeni)
    print("YAZILDI")
else:
    print("kuru koşu — yazmak için --yaz")
# sayım
from collections import Counter
c = Counter()
for i in range(n):
    k = kimlik(i)
    for x in (k if isinstance(k, list) else [k]):
        c[x] += 1
print(dict(c))
