# -*- coding: utf-8 -*-
"""KONUM DÜZELTİCİ — `denetle.py`nin "kara maskesi dışında" önerilerini uygular.

    py arac/_konum_duzelt.py           KURU KOŞU
    py arac/_konum_duzelt.py --yaz     gerçekten yaz

🔴 NİÇİN VAR: dünya penceresi açılınca (`BOLGE` = box(-180,-60,180,85))
   179 noktanın *"pencere dışı"* muafiyeti kalktı ve 18'i kara maskesinin
   dışında çıktı. Muafiyet kalkması bir kusur değil — o noktalar hep
   oradaydı, ARTIK DENETLENİYORLAR.

🔴 VE İKİ SATIRI KARIŞTIRMA — `CLAUDE.md`de ölçülmüş vaka:
       KARA DIŞI     → nokta YANLIŞ yerde  → koordinatı düzelt
       PENCERE DIŞI  → nokta DOĞRU yerde   → koordinata DOKUNMA
   Araç bunları ayırdıktan sonra bu betik yalnız BİRİNCİYİ uygular.
   (Sofala bir zamanlar 1020 km kuzeye taşınacaktı; ihlal kapanacak,
   GERÇEK SİLİNECEKTİ.)

🔴 ÜÇÜNCÜ KORUMA — REÇETE KENDİ TESTİNİ GEÇMELİ:
   `denetle.py` önerisini yazılacağı hassasiyette (4 ondalık) sınıyor ve
   geçmezse **`⚠️ bu öneri sınandı ve GEÇMEDİ`** diye damgalıyor.
   Bu betik damgalı öneriyi UYGULAMAZ — damgayı görmezden gelmek, aracın
   kendi uyarısını çöpe atmaktır.
"""
import collections
import io
import os
import re
import subprocess
import sys

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KOK = os.getcwd()
VERI = os.path.join(KOK, "data")
YAZ = "--yaz" in sys.argv

# "  Ad   N.NN km dışarıda  LAT,LON → ŞUNU YAZ: lat:LAT, lon:LON   [damga]"
#
# 🔴 İLK SÜRÜM AD İLE MESAFE ARASINDA `\s{2,}` İSTİYORDU VE İKİ SATIR KAÇTI:
#     "Doğu Sibirya kıyısı (Çuvan-Yukagir) 40.45 km dışarıda …"   ← TEK boşluk
#     "Penjina havzası (kuzey Koryak) 20.26 km dışarıda …"        ← TEK boşluk
#   Uzun adlar hizalama boşluğunu yiyor. Alet "15 öneri okundu" dedi,
#   denetim ise 18 diyordu — **sayı tutmadı ve ancak KARŞILAŞTIRINCA görüldü.**
# 📌 Ders: bir ayrıştırıcının kaç satır okuduğu, kaynaktaki satır sayısıyla
#   KARŞILAŞTIRILMADAN doğru sayılmaz. Sessizce eksik okuyan regex, hiç
#   çalışmayandan daha tehlikelidir — çünkü çıktı üretir.
SATIR_RX = re.compile(
    r"^\s{2,}(.+?)\s+([\d.]+)\s*km dışarıda\s+[-\d.]+,[-\d.]+\s*"
    r"→\s*ŞUNU YAZ:\s*lat:\s*(-?[\d.]+),\s*lon:\s*(-?[\d.]+)(.*)$")

print("denetle.py koşuyor (konum dalı için)…")
ham = subprocess.run([sys.executable, "arac/denetle.py"], cwd=KOK,
                     capture_output=True, text=True, encoding="utf-8",
                     errors="replace", timeout=900).stdout

oneri, damgali = [], []
for s in ham.splitlines():
    m = SATIR_RX.match(s)
    if not m:
        continue
    ad, uzak, la, lo, kuyruk = m.groups()
    if "GEÇMEDİ" in kuyruk:
        damgali.append((ad.strip(), float(uzak), kuyruk.strip()))
    else:
        oneri.append((ad.strip(), float(uzak), la, lo))

print("okunan öneri: %d  ·  damgalı (uygulanmayacak): %d"
      % (len(oneri), len(damgali)))

# 🔴 SAYI TUTUYOR MU — ayrıştırıcı denetimin söylediği kadar satır okudu mu?
#   Bu kontrol bir kez GERÇEK bir kaçağı yakaladı (regex iki satırı atladı).
_beyan = re.search(r"konum:\s*(\d+)\s*nokta kara maskesinin dışında", ham)
if _beyan:
    _n = int(_beyan.group(1))
    _okunan = len(oneri) + len(damgali)
    if _okunan != _n:
        print()
        print("🔴 DUR — AYRIŞTIRICI EKSİK OKUDU: denetim %d diyor, ben %d okudum."
              % (_n, _okunan))
        print("   Eksik satırları uygulamak, kalanları SESSİZCE bırakmak olur.")
        raise SystemExit(2)
    print("🟢 sayı tutuyor: denetim %d · okunan %d" % (_n, _okunan))

# ---- ad -> (dosya, satır) ; kayıt ÇOK SATIRLI olabilir ama lat/lon
#      her zaman `ad:`ın olduğu satırdadır (ölçüldü: 2624/2624)
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi  # noqa: E402

AD_RX = re.compile(r'\bad:\s*"((?:[^"\\]|\\.)*)"')
LAT_RX = re.compile(r'(\blat:\s*)(-?[\d.]+)')
LON_RX = re.compile(r'(\blon:\s*)(-?[\d.]+)')

konum = collections.defaultdict(list)
icerik = {}
for dosya in girdi.GIRDI_DOSYALARI:
    ad_d = os.path.basename(dosya)
    yol = os.path.join(VERI, ad_d)
    if not os.path.exists(yol):
        continue
    satirlar = io.open(yol, encoding="utf-8", newline="").read().split("\n")
    icerik[ad_d] = satirlar
    for i, s in enumerate(satirlar):
        m = AD_RX.search(s)
        if m:
            konum[m.group(1)].append((ad_d, i))

ist = collections.Counter()
inen, atlanan = [], []
for ad, uzak, la, lo in oneri:
    yerler = konum.get(ad, [])
    if not yerler:
        ist["veride-yok"] += 1
        atlanan.append((ad, "veride YOK"))
        continue
    if len(yerler) > 1:
        ist["belirsiz"] += 1
        atlanan.append((ad, "%d kayıtta birden" % len(yerler)))
        continue
    dosya, i = yerler[0]
    s = icerik[dosya][i]
    if not (LAT_RX.search(s) and LON_RX.search(s)):
        ist["cipa-yok"] += 1
        atlanan.append((ad, "lat/lon çıpası yok"))
        continue
    eski = (LAT_RX.search(s).group(2), LON_RX.search(s).group(2))
    s2 = LAT_RX.sub(lambda m: m.group(1) + la, s, count=1)
    s2 = LON_RX.sub(lambda m: m.group(1) + lo, s2, count=1)
    if s2 == s:
        ist["zaten-boyle"] += 1
        continue
    icerik[dosya][i] = s2
    ist["uygulandi"] += 1
    inen.append((ad, dosya, uzak, eski, (la, lo)))

print()
print("=== KONUM DÜZELTME — %s ===" % ("YAZILDI" if YAZ else "KURU KOŞU"))
for k in ("uygulandi", "zaten-boyle", "belirsiz", "veride-yok", "cipa-yok"):
    if ist[k]:
        print("  %-14s %3d" % (k, ist[k]))
if inen:
    print()
    for ad, dosya, uzak, e, y in inen:
        print("  %-34s %6.2f km  %s,%s → %s,%s" % (ad[:34], uzak, e[0], e[1], y[0], y[1]))
if damgali:
    print()
    print("🔴 UYGULANMADI — aracın kendi uyarısı (%d):" % len(damgali))
    for ad, uzak, kuyruk in damgali:
        print("  %-34s %6.2f km  %s" % (ad[:34], uzak, kuyruk))
if atlanan:
    print()
    print("[!] ATLANAN:")
    for ad, sebep in atlanan:
        print("  %-34s %s" % (ad[:34], sebep))

if YAZ:
    dosyalar = {d for _, d, _, _, _ in inen}
    for d in dosyalar:
        io.open(os.path.join(VERI, d), "w", encoding="utf-8",
                newline="").write("\n".join(icerik[d]))
    print()
    print("%d dosya yazıldı. 🔴 ŞİMDİ `py arac/denetle.py` KOŞTUR." % len(dosyalar))
else:
    print()
    print("(kuru koşu — hiçbir dosya yazılmadı; --yaz ile çalıştır)")
