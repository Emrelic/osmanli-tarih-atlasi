# -*- coding: utf-8 -*-
"""BAĞLANMAMIŞ YAMA TARAMASI — "yazıldı ama motora girmedi". 10 Eylül 2026

İZ-YOK DENETİM B'nin bulduğu DESEN (§7.1⑥ eşiğini aştı):
   "yama dosyası yazılmış ama `girdi.py`ye bağlanmamış / mükerrer kayıtla
    eziliyor" — Mersin (kesin) + Kutaisi · Erzincan · Şehrizor-Halepçe
    (bunlar şanslı kurtulmuş, başka bir oturum ayrıca uygulamış).
Üç işçi ÜÇ AYRI dosyada aynı sınıfa çarptı:
   A → denetim/uygulanmis-0905/yer_yama_p19.js  "Mersin ve Malatya kasten DIŞARIDA"
   B → data/yama_p0037_bekleyen.js              glob-dışı ad, uygulanmamış
   C → data/yer_yama_uyg2.js                    "bu bir YAMA'dır, doğrudan yazma yok"

🔴 SORU: `data/` altında KAÇ dosya bir yerleşim/dönem verisi taşıyor ama
   `girdi.GIRDI_DOSYALARI` içinde DEĞİL? Yani motor onu HİÇ OKUMUYOR.

⚠️ BU ALET "KUSUR" SAYMAZ, "GÖRÜNMEZLİK" SAYAR. Bir dosyanın bağlı
   olmaması kusur olmayabilir (uygulanmış bir yamanın arşivi, kasten
   bekletilen bir öneri). Kusur, İÇİNDEKİ İDDİANIN başka bir yerde
   "yapıldı" diye kaydedilmiş olmasıdır — onu bu alet bilemez.
   ⇒ Çıktı bir ADAY LİSTESİDİR (`§11`: eşleşme bulmak, doğru şeyi
     bulmak değildir).
"""
import io, json, os, re, subprocess, sys

try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi

BAGLI = set(girdi.GIRDI_DOSYALARI)
print("=" * 72)
print("girdi.py'nin OKUDUĞU dosya: %d" % len(BAGLI))
print("=" * 72)

VERI = os.path.join(KOK, "data")
# yerleşim/dönem verisi taşıma İHTİMALİ olan adlar
DESEN = re.compile(r"^(yerlesimler|yer_yama|yama|donem_yama|kademe_yama)",
                   re.I)
# 🔴🔴 BU SATIR BİR KEZ YANLIŞ YAZILDI VE KAYDI DURUYOR — 10 Eylül 2026.
# İlk hâli yalnız `\bad\s*:\s*"` idi, yani `ad:"Bağdat"` yazımını tutuyor
# ama **`"ad": "Bağdat"` (JSON biçimi) yazımını HİÇ TUTMUYORDU** — çünkü
# `ad`dan sonra `:` değil `"` geliyor. Ve `if not n: continue` satırı
# eşleşmeyen dosyayı SESSİZCE atlıyordu.
#     ATLANAN   13 dosya · 447 kayıt
#     en büyüğü yer_yama_tbmm_1920_0905.js — 218 kayıt (kümenin 2.'si)
# 🔴 VE ASIL VURUCU AYRINTI: aletin ÜST YAZISINDA sayılan üç motive edici
#    vakadan biri (`data/yer_yama_uyg2.js`, 10 kayıt) TAM DA BU KÖR
#    NOKTADAYDI. Yani alet, YAZILMA SEBEBİNİ göremiyordu.
# 📌 `D125` (bir regex'in görmediği yazım biçimi) · `D060` (bir alet,
#    aradığı şeyin NEREDE OLMAYACAĞINI da bilmeli) · `D187` (boş bir küme
#    her öngörüyü doğrular, alet ✓ basar).
# ⇒ Bulan: İZ-YOK DENETİM A, sevkin paydasını kabul etmeden ÖNCE ölçtüğü
#   için — "81 = 📦+⏳+🔴+⚪" kabul ölçütü yanlış paydayla kurulamazdı.
ALAN = re.compile(r'(?:\bad\s*:\s*"|"ad"\s*:\s*")')

aday = []
for f in sorted(os.listdir(VERI)):
    if not f.endswith(".js") or f in BAGLI:
        continue
    if not DESEN.match(f):
        continue
    yol = os.path.join(VERI, f)
    try:
        s = io.open(yol, encoding="utf-8", errors="replace").read()
    except Exception as e:
        aday.append((f, -1, "OKUNAMADI %s" % type(e).__name__, ""))
        continue
    n = len(ALAN.findall(s))
    if not n:
        continue
    # ilk satırda kendini nasıl tarif ediyor?
    bas = ""
    for satir in s.split("\n")[:14]:
        satir = satir.strip()
        if satir.startswith("//") and len(satir) > 12:
            bas = satir[2:].strip()[:88]
            break
    # git: en son ne zaman dokunulmuş
    try:
        r = subprocess.run(["git", "-C", KOK, "log", "-1", "--format=%ad",
                            "--date=short", "--", "data/" + f],
                           capture_output=True, text=True, timeout=20)
        tarih = r.stdout.strip() or "?"
    except Exception:
        tarih = "?"
    aday.append((f, n, bas, tarih))

print()
print("🔴 `data/` altında ad taşıyan AMA girdi.py'de OLMAYAN dosya: %d"
      % len(aday))
print()
for f, n, bas, tarih in sorted(aday, key=lambda x: -x[1]):
    print("  %-38s %4s kayıt  · son dokunuş %s" % (f, n if n >= 0 else "?", tarih))
    if bas:
        print("      %s" % bas)
print()
top = sum(n for _, n, _, _ in aday if n > 0)
print("⇒ TOPLAM %d kayıt motorun GÖRMEDİĞİ dosyalarda duruyor." % top)
print()
print("⚠️ SINIR — BU ALET NE SÖYLEMEZ: bir dosyanın bağlı OLMAMASI kusur")
print("   DEĞİLDİR. Uygulanmış bir yamanın arşivi de, kasten bekletilen bir")
print("   öneri de burada görünür. KUSUR, içindeki iddianın BAŞKA BİR YERDE")
print("   'yapıldı' diye kaydedilmiş olmasıdır — onu bu alet BİLEMEZ.")
print("   ⇒ Bu bir ADAY LİSTESİDİR, bir kusur listesi değil.")
