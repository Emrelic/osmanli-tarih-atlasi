# -*- coding: utf-8 -*-
"""TON DENETIMI — DUYGU-VE-SEKME-SARTNAME.md §A⑤③.
Kiyim maddesinde senlikli emoji var mi, ve emojisiz madde kaldi mi.

Cikis: 0 temiz · 1 kalan var · 2 olculemedi."""
import io, os, re, sys, glob
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import olay_kayit

KIYIM = re.compile(r"kılıçtan geçir|katliam|kıyım|soykırım|tehcir|kıtlık|"
                   r"vebâ|veba|tâun|salgın|yağma|talan", re.I)
YASAK = set(["🎉", "😀", "😂", "🤣", "🤮", "👏", "🏆", "💍"])

# Kayitlar TARAYICI GIBI yuklenir (olay_kayit.yukle) — 14 Ekim 2026: regex
# tarayici JSON anahtarini gormuyor, yorumdaki 3 kaydi ve olaylar.js'in 29
# alt_kronoloji adimini madde sayiyordu (emojisiz 407; gercek 377).
try:
    Y = olay_kayit.yukle(sorted(glob.glob("data/olaylar*.js")))
except Exception as e:
    print("🔴 ÖLÇÜLEMEDİ — olay dosyaları yüklenemedi: %s" % e)
    sys.exit(2)
if not Y:
    print("🔴 ÖLÇÜLEMEDİ — data/olaylar*.js bulunamadı (kök dizinde mi koşuyor?)")
    sys.exit(2)

n = i1 = i2 = bos = 0
for f in sorted(Y):
    for g in Y[f]:
        dy = g.get("duygu")
        em = set(e for e in dy if isinstance(e, str)) if isinstance(dy, list) else set()
        if not em:
            bos += 1
            continue
        n += 1
        baslik = g.get("b") if isinstance(g.get("b"), str) else ""
        metin = g.get("d") if isinstance(g.get("d"), str) else ""
        if KIYIM.search(baslik) and (em & YASAK):
            i1 += 1
            if i1 < 4:
                print("  🔴 kıyım BAŞLIĞI + şenlikli:", baslik[:54], em & YASAK)
        if KIYIM.search(metin) and em <= YASAK:
            i2 += 1
            if i2 < 4:
                print("  🔴 metinde kıyım + SAF şenlikli:", baslik[:50], em)

print()
print("duygu: taşıyan madde %d · emojisiz %d · dosya %d" % (n, bos, len(Y)))
print("ihlal 1  kıyım başlığında şenlikli emoji : %d" % i1)
print("ihlal 2  kıyım metni, saf şenlikli       : %d" % i2)
temiz = not (i1 or i2 or bos)
print("🟢 TON KURALI TEMİZ" if temiz else "🔴 kalan var")
sys.exit(0 if temiz else 1)
