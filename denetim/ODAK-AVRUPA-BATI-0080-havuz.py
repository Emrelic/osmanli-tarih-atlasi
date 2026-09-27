# -*- coding: utf-8 -*-
"""girdi.yukle() evrenini (odak_olc.py'nin havuzu) JSON'a döker — node sınayıcısı
(ODAK-AVRUPA-BATI-0080-sina.js) suzgec.js'in KENDİ işlevleriyle sahipliği onun
üstünde sayar (D045: ölçüm aleti ile uygulama iki ayrı mantık taşımaz)."""
import io, json, os, sys
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
import girdi
Y = []
for y in girdi.yukle(sessiz=True):
    if not y.get("ad"):
        continue
    Y.append({k: y.get(k) for k in ("ad", "lat", "lon", "d", "v", "s") if y.get(k) is not None})
io.open(sys.argv[1], "w", encoding="utf-8").write(json.dumps(Y, ensure_ascii=False))
print("yerlesim", len(Y))
