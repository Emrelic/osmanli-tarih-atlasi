# -*- coding: utf-8 -*-
"""YAYINDA DELİK VAR MI — BAĞLI dosyaların künyesiz/renksiz kimlikleri.

Bekleyen dosyaları ölçmüştüm (M-0313) ama **bağlı olanları hiç
ölçmedim.** Bir nokta partisi (`yerlesimler_0ee15e.js` sahibi) bunu
fark etti: `yerlesimler_amerika.js` 134 kayıtla ZATEN `girdi.py`de.

⇒ Bağlı bir dosyada renksiz kimlik varsa `VERI-YAPISI §8` gereği
**bölge BOYANMAZ** — yani yayında GÖRÜNEN bir delik. Bekleyen dosyada
zararsız olan şey, bağlı dosyada kusurdur.
📌 "Bekleyeni ölçüp bağlı olanı ölçmemek" — ölçüm doğru, EVREN dar.
"""
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
sys.path.insert(0, "arac")
import girdi  # noqa: E402

Y = girdi.yukle()
D = girdi.oku_devletler()
kunye = set(D) if isinstance(D, dict) else {d.get("id") for d in D}
kunye.discard(None)
try:
    import renkler as R
    boya = set(R.BOYALAR)
except Exception as e:
    print("🔴 renkler.py: %s" % e)
    boya = set()

print("BAĞLI nokta: %d · künye %d · renk %d" % (len(Y), len(kunye), len(boya)))
print()

eksik_k, eksik_r = {}, {}
for y in Y:
    kay = y.get("_kaynak") or "?"
    for p in (y.get("s") or []):
        i = p.get("d")
        if not i:
            continue
        if i not in kunye:
            eksik_k.setdefault(i, set()).add(kay)
        if i not in boya:
            eksik_r.setdefault(i, set()).add(kay)

print("🔴 BAĞLI VERİDE KÜNYESİZ kimlik: %d" % len(eksik_k))
for i, fs in sorted(eksik_k.items())[:20]:
    print("   %-30s %s" % (i, ", ".join(sorted(fs))[:60]))
print()
print("🔴 BAĞLI VERİDE RENKSİZ kimlik: %d   ← BUNLAR HARİTA DELİĞİ" % len(eksik_r))
for i, fs in sorted(eksik_r.items())[:25]:
    print("   %-30s %s" % (i, ", ".join(sorted(fs))[:60]))
print()
if eksik_r:
    print("HÜKÜM: 🔴 YAYINDA DELİK VAR — bu kimlikler çiziliyor olmalıydı.")
    sys.exit(1)
print("HÜKÜM: 🟢 bağlı veride renksiz kimlik YOK.")
