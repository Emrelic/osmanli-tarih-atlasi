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
# 🔴 KÜNYE KÜMESİ = `id:` ∪ `harita:` — ve bu, RENK kümesinden FARKLI.
# Bir kimliğin "künyesi var mı" sorusuna `harita:` de cevap verir:
# `sirbistan-despotlugu` künyesi `harita:"sirbistan"` yazıyorsa, veride
# geçen `sirbistan` kimliğinin künyesi VARDIR. Bu araç önce yalnız `id:`
# okuyordu ve 22 kimliği YANLIŞLIKLA künyesiz sayıyordu — 20'sinin 20'si
# ölçüldü, hepsi `harita:` ile karşılanıyordu.
# ⚠️ Aynı birleşim RENK kümesinde YANLIŞ olurdu (CLAUDE.md §11: ölçüldü,
# 33 sahte eksik üretiyor) — `boya` bilerek yalnız `BOYALAR` anahtarı.
kunye = set(D) if isinstance(D, dict) else {d.get("id") for d in D}
if not isinstance(D, dict):
    kunye |= {d.get("harita") for d in D if d.get("harita")}
kunye.discard(None)
# 🔴 C13 ATEŞLEME KAPISI — `--sinav <kimlik>` verilen kimliği künye ve
# renk kümelerinden DÜŞÜRÜR. Gerçek veride kusur yokken "temiz" demek,
# denetimin ÇALIŞTIĞINI kanıtlamaz; ancak zorla ötebilen bir alarm
# denetimdir. Kullanım:  py arac/bagli_delik.py --sinav osmanli
SINAV = (sys.argv[sys.argv.index("--sinav") + 1]
         if "--sinav" in sys.argv else "")
# ⚠️ Sınav kimliği `s:` içinde GEÇEN biri olmalı. İlk denemede `osmanli`
# seçildi ve alarm ÖTMEDİ — çünkü Osmanlı toprağı `d:` ile yazılır, bu
# araç yalnız `s:` (yabancı devlet) okur. Alarm sağlamdı, SINAV yanlıştı.
# 📌 Ve bu, sınavın kendi değerini gösterdi: zorlanmasaydı aracın hangi
# ekseni okuduğu hiç sorulmayacaktı. Doğrulanmış sınav kimliği: sirbistan

try:
    import renkler as R
    boya = set(R.BOYALAR)
except Exception as e:
    print("🔴 renkler.py: %s" % e)
    boya = set()

if SINAV:
    kunye.discard(SINAV)
    boya.discard(SINAV)
    print("⚠️  SINAV KİPİ — '%s' iki kümeden de düşürüldü; alarm ÖTMELİ."
          % SINAV)

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

# ─────────────────────────────────────────────────────────────────────
# 🔴 ÜÇÜNCÜ SORU — "KÜNYESİ VAR, HİÇ DÖNEMİ YOK"
#
# 16 Ağustos 2026, gece. Kol G şöyle tarif edilmişti: *"künye VAR,
# kronoloji DOLU, eksik olan TEK ŞEY nokta."* Bir işçi oturum yazmadan
# ÖNCE ölçtü ve tarifi çürüttü:
#     evfat   → Zeyla     VERİDE VAR, yazılacak koordinata 0,4 km
#     makdisu → Mogadişu  VERİDE VAR, yazılacak koordinata 0,1 km
# ⇒ Nokta ORADAYDI; eksik olan **o künyenin DÖNEMİ**ydi.
#
# 🔴 VE NİÇİN HİÇBİR NÖBETÇİ ÖTMEDİ: ikisi de ZATEN SAHİPLİ (başka bir
# kimlikle). `Değişmez 1` delik görmüyor, yukarıdaki iki soru da
# görmüyor — çünkü ikisi de "veride GEÇEN kimliğe" bakıyor, "veride
# HİÇ GEÇMEYEN künyeye" değil.
#
# 📌 AYRIM, ve gecenin en incesi:
#     "künyenin NOKTASI yok"  → nokta yaz
#     "künyenin DÖNEMİ yok"   → var olan noktaya `s:` dönemi ekle
#   ve BİRİNCİSİ İKİNCİSİNİ GİZLER: nokta arayan bir ölçüm, dönemi
#   eksik olanı "noktası var, iş yok" diye eler.
#
# ⚠️ Bu bir İHLAL değil BİLGİ: bir künye kasten dönemsiz olabilir
# (henüz veri yazılmamış bölge). O yüzden çıkış kodunu ETKİLEMEZ —
# ama listelenir, çünkü listelenmezse hiç kimse aramaz.
print("i  KÜNYESİ VAR AMA VERİDE HİÇ DÖNEMİ YOK — nokta değil DÖNEM işi")
_gecen = set()
for y in Y:
    for p in (y.get("s") or []):
        if p.get("d"):
            _gecen.add(p["d"])
_D = D if not isinstance(D, dict) else list(D.values())
_donemsiz = []
for d in _D:
    if not isinstance(d, dict):
        continue
    _kim = d.get("harita") or d.get("id")
    if _kim and _kim not in _gecen:
        _donemsiz.append((d.get("id"), _kim, len(d.get("kronoloji") or [])))
print("   toplam: %d künye" % len(_donemsiz))
for _id, _kim, _kr in sorted(_donemsiz)[:20]:
    _im = "  🔴 kronolojisi DOLU — araştırma YAPILMIŞ" if _kr else ""
    print("   %-30s → %-18s kr:%d%s" % (_id, _kim, _kr, _im))
if len(_donemsiz) > 20:
    print("   ... +%d" % (len(_donemsiz) - 20))
print()

if eksik_r:
    print("HÜKÜM: 🔴 YAYINDA DELİK VAR — bu kimlikler çiziliyor olmalıydı.")
    sys.exit(1)
print("HÜKÜM: 🟢 bağlı veride renksiz kimlik YOK.")
