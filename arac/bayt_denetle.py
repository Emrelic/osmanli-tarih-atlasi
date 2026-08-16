# -*- coding: utf-8 -*-
"""GÖRÜNMEYEN KONTROL BAYTI AVI — `Read` yalan söyler, `repr()` söylemez.

`§11` onuncu kusur sınıfı: bir `\\b` kaçışı bozulup dosyaya 0x08
(BACKSPACE) baytı yazılmıştı; `Read` onu GÖRÜNMEZ gösterdi ve satır
ekranda kusursuz görünüyordu. Denetim çalışıyordu ama SAYISI YALANDI.

⇒ Bir düzenlemenin doğruluğundan şüphe varsa `Read`e değil `repr()`e sor.
Bu betik BÜTÜN girdi dosyalarını tarar — yalnız şikâyet edileni değil,
çünkü aynı kaçış başka dosyalara da düşmüş olabilir.
"""
import io
import os
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

# JSON'un kabul etmediği kontrol baytları (tab/newline/carriage return hariç)
KOTU = set(range(0x00, 0x20)) - {0x09, 0x0A, 0x0D}

kok = "data"
bulunan = 0
for ad in sorted(os.listdir(kok)):
    if not ad.endswith(".js"):
        continue
    yol = os.path.join(kok, ad)
    try:
        ham = io.open(yol, "rb").read()
    except Exception:
        continue
    kotular = [(i, b) for i, b in enumerate(ham) if b in KOTU]
    if not kotular:
        continue
    bulunan += 1
    print("🔴 %s — %d kontrol baytı" % (ad, len(kotular)))
    for i, b in kotular[:6]:
        satir = ham[:i].count(b"\n") + 1
        # bağlam: baytın 40 karakter öncesi/sonrası, repr ile
        bas = max(0, i - 40)
        cevre = ham[bas:i + 40].decode("utf-8", "replace")
        print("     satır %-5d bayt 0x%02X  bağlam: %s"
              % (satir, b, repr(cevre)[:110]))
    if len(kotular) > 6:
        print("     … %d tane daha" % (len(kotular) - 6))

print()
if bulunan:
    print("HÜKÜM: 🔴 %d dosyada görünmeyen kontrol baytı var." % bulunan)
    print("       Bunlar `Read` ile GÖRÜNMEZ ve `json.loads` PATLAR.")
    sys.exit(1)
print("HÜKÜM: 🟢 hiçbir data/*.js dosyasında kontrol baytı yok.")
