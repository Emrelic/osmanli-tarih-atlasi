# -*- coding: utf-8 -*-
"""FERHATPASA-KOSE — önbelleklenmiş düz metin/HTML içinde düzenli ifade arar (SALT OKUR).

Kullanım:  py denetim/ARAC-KSM-ARA-0913.py <dosya> <baglam_karakter> <regex> [<regex> ...]
HTML ise etiketler atılır. Boşluklar tek boşluğa indirgenir (konumlar ARAC-ASM-KESIT ile uyumlu
DEĞİL; burada yerel dosya). Her eşleşme: konum · bağlam.
Eskandar/Savory djvu metninde en yakın önceki sayfa başlığı da basılır.
"""
import sys, io, re, html

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
yol, bag = sys.argv[1], int(sys.argv[2])
t = open(yol, "rb").read().decode("utf-8", "replace")
if yol.endswith(".html"):
    t = re.sub(r"(?is)<script.*?</script>|<style.*?</style>", " ", t)
    t = html.unescape(re.sub(r"<[^>]+>", " ", t))
t = re.sub(r"\s+", " ", t)
BASLIK = re.compile(r"\b(\d{3,4}) (The Year of the [A-Za-z]+, [0-9 \-/]+|History ?of Shah [^:]{0,12}: Book [IV]+)")
bas = [(m.start(), m.group(0)) for m in BASLIK.finditer(t)]
for rx in sys.argv[3:]:
    ms = list(re.finditer(rx, t, flags=re.I))
    print("=" * 20, rx, "->", len(ms))
    for m in ms:
        onc = [b for b in bas if b[0] <= m.start()]
        son = [b for b in bas if b[0] > m.start()]
        ek = ""
        if bas:
            ek = " [önceki başlık: %s | sonraki: %s]" % (onc[-1][1] if onc else "-", son[0][1] if son else "-")
        print("@%d%s\n   %s" % (m.start(), ek, t[max(0, m.start() - bag): m.end() + bag]))
