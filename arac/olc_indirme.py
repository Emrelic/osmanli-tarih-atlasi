# -*- coding: utf-8 -*-
# ═══════════════════════════════════════════════════════════════════════
# 🔴 BU ALET DEPONUN DIŞINI OKUR — ve boş evreni SESSİZCE geçebilir.
#
# Okuduğu yol `~/.claude/projects/<proje-yolundan-türetilmiş>/*.jsonl`;
# depoda DEĞİL, `.gitignore`da DEĞİL, makineye ÖZEL ve adı proje yolundan
# üretiliyor. Dolayısıyla:
#   · başka bir makinede    → dosya yok → glob BOŞ liste → sessizce 0
#   · proje taşınır/yeniden adlandırılırsa → yine sessizce 0
#   · bir kapıya bağlanırsa → "temiz" diye rapor eder
# ⇒ Aşağıdaki nöbetçi tam bunun için: EVREN BOŞSA GÜRÜLTÜLÜ ÖLÜR.
#   `C13`in geçme yolu: kusur yokken temiz demeli, ama evren boşken
#   TEMİZ DEMEMELİ.
# 📌 Bildiren: KAYNAK PLANLAMACISI, kapanış mesajında — plana yazmamıştı,
#    "sende kalan bilgi kurtarılamaz" kuralı gereği son anda aktardı.
# ═══════════════════════════════════════════════════════════════════════
def _evren_nobetcisi(dosyalar, yol):
    """Evren boşsa GÜRÜLTÜLÜ öl. Sessiz sıfır, yanlış 'temiz'in kaynağıdır."""
    if not dosyalar:
        import sys as _s
        print("🔴 DUR — oturum dökümü BULUNAMADI:", yol)
        print("   Bu alet `~/.claude/projects/` altını okur ve o dizin")
        print("   MAKİNEYE ÖZELDİR. Başka bir makinedeysen ya da proje")
        print("   klasörü taşındıysa bu normaldir — ama SONUÇ ÜRETİLEMEZ.")
        print("   ⇒ 'temiz' değil, ÖLÇÜLEMEDİ. Çıkış kodu 1.")
        _s.exit(1)
    return dosyalar


"""Bir sayfa ziyaretinin gercek indirme maliyetini olcer.
index.html'deki yerel <script src> ve <link href> dosyalarini bulur,
ham ve gzip boyutlarini toplar. Hicbir seyi DEGISTIRMEZ."""
import re, gzip, os, sys, io

KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
h = open(os.path.join(KOK, "index.html"), encoding="utf-8").read()

yollar = []
for m in re.finditer(r'(?:src|href)="([^"]+)"', h):
    u = m.group(1)
    if u.startswith("http") or u.startswith("//") or u.startswith("#"):
        continue
    yollar.append(u.split("?")[0])

gorulen, satir = set(), []
ham_t = gz_t = 0
for y in yollar:
    if y in gorulen:
        continue
    gorulen.add(y)
    p = os.path.join(KOK, y.replace("/", os.sep))
    if not os.path.isfile(p):
        satir.append((0, 0, y + "   [DOSYA YOK]"))
        continue
    b = open(p, "rb").read()
    g = len(gzip.compress(b, 6))
    ham_t += len(b); gz_t += g
    satir.append((len(b), g, y))

satir.sort(reverse=True)
print("=== BIR ZIYARETIN INDIRDIGI YEREL DOSYALAR (index.html'den) ===")
print("%10s %10s  %s" % ("HAM MB", "GZIP MB", "dosya"))
for r, g, y in satir[:14]:
    print("%10.2f %10.2f  %s" % (r/1048576, g/1048576, y))
print("... (toplam %d dosya)" % len(satir))
print()
print("TOPLAM  ham %.2f MB · gzip %.2f MB · sikistirma orani %.1f%%"
      % (ham_t/1048576, gz_t/1048576, 100*gz_t/ham_t if ham_t else 0))
print()

# yayinlanan ama TARAYICININ HIC ISTEMEDIGI izlenen dosyalar
import subprocess
os.chdir(KOK)
ls = subprocess.run(["git", "ls-tree", "-r", "-l", "HEAD"],
                    capture_output=True, text=True, encoding="utf-8").stdout
olu = []
for ln in ls.splitlines():
    par = ln.split(None, 4)
    if len(par) < 5:
        continue
    try:
        boy = int(par[3])
    except ValueError:
        continue
    yol = par[4].strip()
    if yol not in gorulen:
        olu.append((boy, yol))
olu.sort(reverse=True)
print("=== YAYINLANIYOR AMA TARAYICI HIC ISTEMIYOR (en buyuk 12) ===")
for b, y in olu[:12]:
    print("%10.2f MB  %s" % (b/1048576, y))
print("TOPLAM OLU YUK: %.2f MB (%d dosya)"
      % (sum(b for b, _ in olu)/1048576, len(olu)))
