# -*- coding: utf-8 -*-
"""
DENETLE_YAYIN — index.html'in istediği her dosya gerçekten yayınlanıyor mu?
============================================================================

Bu araç bir vakadan doğdu. 2026-07-30'da `data/olaylar_ek8.js` şu durumdaydı:

    index.html    <script src="data/olaylar_ek8.js?v=r70"></script>   ✓ commit'li
    data/olaylar_ek8.js                                               ✗ UNTRACKED

Yayın o dosyada 404 alıyordu. `js/app.js` `window.OLAYLAR_EK8 || []` kalıbını
kullandığı için sayfa ÇÖKMÜYORDU — beş kronoloji maddesi (Şehrizor 1554, Fizan
1577, Nahçıvan 1585, Azak 1637, Limni 1657) canlıda sessizce yoktu. Dört commit
boyunca kimse görmedi.

Kök sebep bir yazım hatası değil, PARALEL OTURUM tuzağı: bir oturum
`arac/surum_damgala.py` çalıştırıp `index.html`'i commit ediyor, ama o dosya
başka oturumun eklediği yeni `<script>` satırını da taşıyor ve o oturumun
veri dosyası henüz untracked. `git add index.html` masum görünüyor.

Aynı sınıf o gün üç kez vurdu:
  1. Başka oturumun 13 yerleşim eklemesi benim commit'ime karıştı (mesaj
     sayıları yanlış kaldı)
  2. Benim düzenlemem koşan üretimin ortasına düştü (üretim çöpe gitti)
  3. Bu: index.html satırı commit'li, veri dosyası değil

Bu araç üçüncüsünü yakalar. Birinci ve ikincisinin karşılığı CLAUDE.md §7'deki
kilit kuralıdır — onlar disiplinle, bu ise ölçümle çözülür.

Kullanım:
    py arac/denetle_yayin.py           # özet
    py arac/denetle_yayin.py --ayrinti # her varlığı tek tek listele

İhlal varsa çıkış kodu 1. Commit ETMEDEN ÖNCE koşturulmalı.
"""
import argparse
import io
import os
import re
import subprocess
import sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# index.html'in çektiği yerel varlıklar: src= ve href=
VARLIK = re.compile(r'(?:src|href)\s*=\s*"([^"]+)"')


def yerel_mi(yol):
    return not (yol.startswith("http://") or yol.startswith("https://")
                or yol.startswith("//") or yol.startswith("data:")
                or yol.startswith("#") or yol.startswith("mailto:"))


def git_izlenen():
    """Depoda git tarafından İZLENEN dosyaların kümesi."""
    try:
        c = subprocess.run(["git", "ls-files"], cwd=KOK, capture_output=True,
                           text=True, encoding="utf-8", check=True)
    except (subprocess.CalledProcessError, FileNotFoundError) as e:
        print("UYARI: git ls-files çalıştırılamadı (%s) — yalnız disk kontrolü yapılıyor" % e)
        return None
    return {l.strip().replace("\\", "/") for l in c.stdout.splitlines() if l.strip()}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--ayrinti", action="store_true")
    args = ap.parse_args()

    html = io.open(os.path.join(KOK, "index.html"), encoding="utf-8").read()
    izlenen = git_izlenen()

    yoklar, izlenmeyenler, tamam = [], [], []
    for ham in VARLIK.findall(html):
        if not yerel_mi(ham):
            continue
        yol = ham.split("?")[0].split("#")[0].lstrip("./")
        if not yol:
            continue
        tam = os.path.join(KOK, yol.replace("/", os.sep))
        if not os.path.exists(tam):
            yoklar.append(ham)
        elif izlenen is not None and yol not in izlenen:
            izlenmeyenler.append(ham)
        else:
            tamam.append(ham)

    print("index.html'in çektiği yerel varlık: %d" % (len(yoklar) + len(izlenmeyenler) + len(tamam)))
    print("  diskte VAR ve git'te izlenen : %d" % len(tamam))

    durum1 = "✓" if not yoklar else "✗"
    print("\n%s  diskte HİÇ YOK: %d" % (durum1, len(yoklar)))
    for y in yoklar:
        print("     %s" % y)

    durum2 = "✓" if not izlenmeyenler else "✗"
    print("%s  diskte var ama GIT'TE İZLENMİYOR: %d" % (durum2, len(izlenmeyenler)))
    for y in izlenmeyenler:
        print("     %s   ← yayında 404 verir, sayfa sessizce eksik çalışır" % y)

    # sürüm damgası tutarlılığı: hepsi aynı ?v=rNN taşımalı
    damgalar = set(re.findall(r'\?v=(r\d+)', html))
    durum3 = "✓" if len(damgalar) <= 1 else "✗"
    print("%s  sürüm damgası: %s" % (durum3, ", ".join(sorted(damgalar)) or "yok"))
    if len(damgalar) > 1:
        print("     birden çok damga var — surum_damgala.py yarım kalmış olabilir")

    if args.ayrinti:
        print("\nizlenen varlıklar:")
        for y in sorted(tamam):
            print("     %s" % y)

    print()
    if yoklar or izlenmeyenler or len(damgalar) > 1:
        print("SONUÇ: İHLAL VAR — çıkış kodu 1")
        return 1
    print("SONUÇ: temiz")
    return 0


if __name__ == "__main__":
    sys.exit(main())
