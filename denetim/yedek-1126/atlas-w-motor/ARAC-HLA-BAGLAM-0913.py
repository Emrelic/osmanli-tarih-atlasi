# HALKA-ADAY · 13 Eylül 2026 · SALT OKUR
# TDV gövdesinde (TEMP'e _tdv_oku.py ile çekilmiş, depoya YAZILMAZ) bir desenin
# çevresini karakter konumuyla basar. Gövde kesilmez; eşleşme cümlesi okunmak içindir
# (§4 ⑧: rakam geçmesi dayanak değildir — cümle okunur).
# kullanım: py denetim/ARAC-HLA-BAGLAM-0913.py <slug> <regex> [genislik]
import sys, os, re
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
CIK = os.environ.get("TDV_CIKTI") or os.path.join(os.environ.get("TEMP") or "/tmp", "tdv_govde")
slug, desen = sys.argv[1], sys.argv[2]
gen = int(sys.argv[3]) if len(sys.argv) > 3 else 300
metin = open(os.path.join(CIK, slug + ".txt"), encoding="utf-8").read()
# gövde başlangıcı: "Kopyalama metni" sonrası (künye bloğu atlanır)
bas = metin.find("Kopyalama metni")
print("=== %s /%s/ · %d kar. · govde bas @%d" % (slug, desen, len(metin), bas))
son = -10**9
for m in re.finditer(desen, metin):
    if m.start() < son + gen:
        continue
    son = m.start()
    a, b = max(0, m.start() - gen), min(len(metin), m.end() + gen)
    print("--- @%d (%%%.0f) ---" % (m.start(), 100.0 * m.start() / len(metin)))
    print(metin[a:b].replace("\n", " / "))
print()
