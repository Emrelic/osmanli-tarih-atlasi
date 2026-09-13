# -*- coding: utf-8 -*-
"""0047 — TDV gövdesinden CÜMLE ARALIĞI basar (SALT OKUR)

ARAC-KITA13-TDVPASAJ ile aynı bölme (cümle numaraları birebir aynı), ama
anahtar yerine aralık alır: bir alıntının NEYİ tarihlediğini okumak için
öncesi/sonrası tam okunur (§4⑧ · D162).

Kullanım:  py denetim/ARAC-0047-TDVARALIK-0913.py <slug> <bas> <son> [<bas> <son> ...]
"""
import sys, re, io, urllib.request

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
slug = sys.argv[1]
ar = [int(x) for x in sys.argv[2:]]
req = urllib.request.Request("https://islamansiklopedisi.org.tr/" + slug,
                             headers={"User-Agent": "Mozilla/5.0"})
r = urllib.request.urlopen(req, timeout=40)
h = r.read().decode("utf-8", "replace")
t = re.sub(r"<script.*?</script>", " ", h, flags=re.S | re.I)
t = re.sub(r"<style.*?</style>", " ", t, flags=re.S | re.I)
t = re.sub(r"<[^>]+>", " ", t)
t = re.sub(r"\s+", " ", t)
C = re.split(r"(?<=[.!?])\s+", t)
print("# slug: %s | son adres %s | gövde %d | %d cümle" % (slug, r.geturl(), len(t), len(C)))
for i in range(0, len(ar), 2):
    print("=" * 78)
    for j in range(ar[i], min(ar[i + 1] + 1, len(C))):
        print("  [%d] %s" % (j, C[j][:700]))
