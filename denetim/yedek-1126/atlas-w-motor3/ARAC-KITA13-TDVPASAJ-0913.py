# -*- coding: utf-8 -*-
"""KITA 13 — TDV GÖVDESİNDEN PASAJ (SALT OKUR)

Bir anahtar kelimenin geçtiği cümleyi ÖNCEKİ ve SONRAKİ cümlelerle birlikte
basar. Niçin: tek cümle alıntı, cümlenin NEYİ tarihlediğini söylemeyebilir
(`CLAUDE.md §4⑧`, `D162` — "rakam gövdede geçiyor ≠ gövde onu destekliyor";
`D093` — "adıyla anıyor ≠ tarihliyor"). Dün "10 Eylül 1515'te şehrin
anahtarlarını teslim aldı" cümlesi tek başına okununca HANGİ şehir olduğu
belli değildi.

Kullanım:
    py denetim/ARAC-KITA13-TDVPASAJ-0913.py <slug> <önce> <sonra> <anahtar> [...]
"""
import sys, re, io, urllib.request

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

slug, once, sonra = sys.argv[1], int(sys.argv[2]), int(sys.argv[3])
anahtarlar = sys.argv[4:]
req = urllib.request.Request("https://islamansiklopedisi.org.tr/" + slug,
                             headers={"User-Agent": "Mozilla/5.0"})
h = urllib.request.urlopen(req, timeout=40).read().decode("utf-8", "replace")
t = re.sub(r"<script.*?</script>", " ", h, flags=re.S | re.I)
t = re.sub(r"<style.*?</style>", " ", t, flags=re.S | re.I)
t = re.sub(r"<[^>]+>", " ", t)
t = re.sub(r"\s+", " ", t)
C = re.split(r"(?<=[.!?])\s+", t)
print("# slug: %s | gövde %d karakter | %d cümle" % (slug, len(t), len(C)))
basildi = set()
for i, c in enumerate(C):
    if any(a in c for a in anahtarlar):
        lo, hi = max(0, i - once), min(len(C), i + sonra + 1)
        if all(j in basildi for j in range(lo, hi)):
            continue
        print("=" * 78)
        for j in range(lo, hi):
            isaret = ">>" if j == i else "  "
            print("%s [%d] %s" % (isaret, j, C[j][:500]))
            basildi.add(j)
