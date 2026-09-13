# HALKA-ADAY · 13 Eylül 2026 · SALT OKUR
# (1) TEMP'e curl ile indirilmiş Encyclopaedia Iranica HTML'inden metni çıkarır, desen çevresini basar.
# (2) Tablo (aritmetik) hicrî → JDN → Jülyen ve Gregoryen karşılık + haftagünü (Kandiye takvim sınavı).
#     Tablo takvim ±1-2 gün sapabilir; yalnız TAKVİM FARKININ büyüklüğünü (10 gün mü 21 gün mü) ayırmak içindir.
# kullanım: py denetim/ARAC-HLA-IRANICA-0913.py <html> <regex> [genislik]
import sys, re, html
sys.stdout.reconfigure(encoding="utf-8", errors="replace")


def hicri_jdn(y, m, d):
    return d + ((11 * y + 3) // 30) + 354 * y + 30 * m - ((m - 1) // 2) + 1948440 - 385


def jdn_greg(j):
    a = j + 32044; b = (4 * a + 3) // 146097; c = a - 146097 * b // 4
    d = (4 * c + 3) // 1461; e = c - 1461 * d // 4; m = (5 * e + 2) // 153
    return (100 * b + d - 4800 + m // 10, m + 3 - 12 * (m // 10), e - (153 * m + 2) // 5 + 1)


def jdn_jul(j):
    c = j + 32082; d = (4 * c + 3) // 1461; e = c - 1461 * d // 4; m = (5 * e + 2) // 153
    return (d - 4800 + m // 10, m + 3 - 12 * (m // 10), e - (153 * m + 2) // 5 + 1)


GUN = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"]
if sys.argv[1] == "--hicri":
    y, m, d = map(int, sys.argv[2:5])
    for dd in (-1, 0, 1):
        j = hicri_jdn(y, m, d) + dd
        print("hicri %d-%02d-%02d%+d  JDN %d  Gregoryen %s  Jülyen %s  %s" % (y, m, d, dd, j, jdn_greg(j), jdn_jul(j), GUN[j % 7]))
    sys.exit()

ham = open(sys.argv[1], encoding="utf-8", errors="replace").read()
t = re.search(r"<title>(.*?)</title>", ham, re.S)
print("TITLE:", t.group(1).strip() if t else "-")
g = re.sub(r"(?is)<(script|style|nav|header|footer)[^>]*>.*?</\1>", " ", ham)
g = html.unescape(re.sub(r"(?s)<[^>]+>", " ", g))
g = re.sub(r"\s+", " ", g)
gen = int(sys.argv[3]) if len(sys.argv) > 3 else 350
son = -10**9
for mm in re.finditer(sys.argv[2], g):
    if mm.start() < son + gen:
        continue
    son = mm.start()
    print("--- @%d ---" % mm.start())
    print(g[max(0, mm.start() - gen): mm.end() + gen])
