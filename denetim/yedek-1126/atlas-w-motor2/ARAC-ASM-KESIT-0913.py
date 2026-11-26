# -*- coding: utf-8 -*-
"""ASM-ARASTIRMA — ÇEVRİMİÇİ DÜZ METNİN BİR KONUM ARALIĞINI BASAR (SALT OKUR)

Amaç: archive.org djvu.txt'de bir eşleşmenin SAYFA NUMARASINI ve TARİH başlığını
okumak. Metin METINARA aletiyle AYNI normalleştirmeden geçer (\s+ -> " "), yani
konumlar ARAC-FERHATPASA-MATRIS-METINARA-0913.py çıktısıyla birebir uyumludur.
Aralıktaki sayfa başlığı adayları (ör. "616 The Year of the Hare, 1000/1591-92",
"643 History of Shah Hbbas: Book II") ayrıca listelenir.

Kullanım:  py denetim/ARAC-ASM-KESIT-0913.py <url> <baş> <son> [<baş> <son> ...]
"""
import sys, io, re, urllib.request

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
url = sys.argv[1]
ar = [int(x) for x in sys.argv[2:]]
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36"
t = urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": UA}), timeout=180).read().decode("utf-8", "replace")
t = re.sub(r"\s+", " ", t)
BASLIK = re.compile(r"\b(\d{3,4}) (The Year of the [A-Za-z]+, [0-9 \-/]+|History ?of Shah [^:]{0,12}: Book [IV]+|Book [IV]+, Discourse [IV0-9]+[^ ]*)")
for i in range(0, len(ar) - 1, 2):
    a, b = ar[i], ar[i + 1]
    print("=" * 30, a, b)
    for m in BASLIK.finditer(t, max(0, a - 6000), min(len(t), b + 6000)):
        print("  sayfa-başlığı @%d: %s" % (m.start(), m.group(0)))
    print(t[a:b])
