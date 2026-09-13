# -*- coding: utf-8 -*-
"""KITA 29 — IRANICA GÖVDESİNDEN PASAJ (SALT OKUR)

`ARAC-KITA13-TDVPASAJ-0913.py`in Iranica karşılığı. Ayrı alet niçin:
  · Iranica `urllib` + kısa UA ile 403 veriyor (28 Ağu BULGU-FERHATPASA §9:
    "WebFetch 403, curl + tarayıcı UA ile 200") ⇒ tam tarayıcı UA gönderilir
  · adresler SONDAKİ '/' İLE ve bazıları 301 ile çözülüyor (ölçüldü:
    erevan → erevan-1 · khoy → khoy-ḵoy) ⇒ yönlendirme İZLENİR ve son
    adres BASILIR — yanlış maddeye düşüş görünür olsun diye
    (shirvan → shirvanlu-firuz · maku → makula-dynasty · georgia-iii → art)

Kullanım:
    py denetim/ARAC-KITA29-IRANICAPASAJ-0913.py <slug> <önce> <sonra> <anahtar> [...]
"""
import sys, re, io, html, urllib.request

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/124 Safari/537.36")
slug, once, sonra = sys.argv[1], int(sys.argv[2]), int(sys.argv[3])
anahtarlar = sys.argv[4:]
url = "https://www.iranicaonline.org/articles/%s/" % slug
req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "text/html"})
r = urllib.request.urlopen(req, timeout=60)
son = r.geturl()
h = r.read().decode("utf-8", "replace")
t = re.sub(r"<script.*?</script>", " ", h, flags=re.S | re.I)
t = re.sub(r"<style.*?</style>", " ", t, flags=re.S | re.I)
t = re.sub(r"<[^>]+>", " ", t)
t = html.unescape(t)
t = re.sub(r"\s+", " ", t)
C = re.split(r"(?<=[.!?])\s+", t)
baslik = re.search(r"<title>(.*?)</title>", h, flags=re.S | re.I)
print("# istenen: %s" % url)
print("# SON ADRES: %s" % son)
print("# başlık: %s" % (html.unescape(baslik.group(1)).strip() if baslik else "—"))
print("# gövde %d karakter | %d cümle" % (len(t), len(C)))
basildi = set()
for i, c in enumerate(C):
    if any(a in c for a in anahtarlar):
        lo, hi = max(0, i - once), min(len(C), i + sonra + 1)
        if all(j in basildi for j in range(lo, hi)):
            continue
        print("=" * 78)
        for j in range(lo, hi):
            isaret = ">>" if j == i else "  "
            print("%s [%d] %s" % (isaret, j, C[j][:600]))
            basildi.add(j)
