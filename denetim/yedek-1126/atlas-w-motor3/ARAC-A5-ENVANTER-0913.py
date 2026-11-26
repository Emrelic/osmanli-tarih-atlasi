# -*- coding: utf-8 -*-
"""PAKET-A3/A5 — etiket envanteri (yalnız OKUR).
py denetim/ARAC-A5-ENVANTER-0913.py MADDELER.json
Girdi: ARAC-A3-MADDE-TOPLA-0913.js çıktısı. Basar: k · tur · etiket değer sayıları;
afet anahtar kelimelerinin BAŞLIKTA ve yalnız GÖVDEDE geçtiği aday sayıları.
"""
import io, json, re, sys, collections
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
O = json.load(open(sys.argv[1], encoding="utf-8"))
print("madde", len(O))
for alan in ("k", "tur"):
    c = collections.Counter(o[alan] for o in O if o[alan])
    print(f"\n{alan}: {len(c)} değer · boş {sum(1 for o in O if not o[alan])}")
    print("  " + " · ".join(f"{k} {v}" for k, v in c.most_common()))
c = collections.Counter(e for o in O for e in o["etiket"])
print(f"\netiket: {len(c)} değer · etiketsiz {sum(1 for o in O if not o['etiket'])}")
print("  " + " · ".join(f"{k} {v}" for k, v in c.most_common()))
H = "a-zçğıöşüâîûA-ZÇĞİÖŞÜÂÎÛ"
AFET = {
    "deprem": r"deprem|zelzele",
    "yangin": r"yangın|yangını|harîk|harik",
    "sel": r"(?<![" + H + r"])sel(?:i|in|de|den|ler|lerin)?(?![" + H + r"])|taşkın|su baskını",
    "salgin": r"veba|tâun|taun|kolera|salgın|çiçek hastalığı|tifüs|sıtma",
    "kitlik": r"kıtlık|açlık|kuraklık|çekirge",
    "volkan_firtina": r"yanardağ|volkan|tsunami|fırtına|kasırga|çığ(?![" + H + r"])",
}
for ad, rx in AFET.items():
    b = [o for o in O if re.search(rx, o["b"], re.I)]
    d = [o for o in O if not re.search(rx, o["b"], re.I) and re.search(rx, o["d"], re.I)]
    print(f"\nAFET {ad}: başlıkta {len(b)} · yalnız gövdede {len(d)}")
    for o in b[:40]:
        print(f"   B {o['t']:10} [{o['kova'][:3]}] {o['b'][:90]}")
