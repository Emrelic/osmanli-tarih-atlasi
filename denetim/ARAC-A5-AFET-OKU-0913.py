# -*- coding: utf-8 -*-
"""PAKET-A5 · 0035/H-0034 — afet adaylarını OKUMAK için basar (yazmaz).
py denetim/ARAC-A5-AFET-OKU-0913.py MADDELER.json [kova]
Her aday için: sıra no · t · başlık · eşleşen kelimenin ±70 kr bağlamı (başlık ya da gövde).
Sıra no, afet kararlarının denetim/ARAC-A5-ETIKET-0913.py içindeki elle kontrol listesine
yazılabilmesi içindir (anahtar: t|b).
"""
import io, json, re, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
O = json.load(open(sys.argv[1], encoding="utf-8"))
H = "a-zçğıöşüâîûA-ZÇĞİÖŞÜÂÎÛ"
AFET = {
    "deprem": r"deprem|zelzele",
    "yangin": r"yangın|harîk|(?<![" + H + r"])harik",
    "sel": r"(?<![" + H + r"])sel(?:i|in|de|den|ler|lerin)?(?![" + H + r"])|taşkın|su baskını",
    "salgin": r"veba|tâun|(?<![" + H + r"])taun|kolera|salgın|çiçek hastalığı|tifüs|sıtma",
    "kitlik": r"kıtlık|açlık|kuraklık|çekirge",
    "volkan_firtina": r"yanardağ|volkan|tsunami|fırtına|kasırga|(?<![" + H + r"])çığ(?![" + H + r"])",
}
sec = sys.argv[2] if len(sys.argv) > 2 else None
for ad, rx in AFET.items():
    if sec and ad != sec:
        continue
    print(f"\n===== {ad}")
    n = 0
    for o in O:
        m = re.search(rx, o["b"], re.I)
        yer = "B"
        metin = o["b"]
        if not m:
            m = re.search(rx, o["d"], re.I); yer = "D"; metin = o["d"]
        if not m:
            continue
        n += 1
        s, e = max(0, m.start() - 70), min(len(metin), m.end() + 70)
        print(f"{n:3} {yer} {o['t']:10} [{o['kova'][:3]}] {o['b'][:60]} ‖ …{metin[s:e]}…")
