# -*- coding: utf-8 -*-
"""M-5022'yi TAM oku."""
import io, json, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
d = json.load(open(r"C:\atlas\oturumlar\tahta.json", encoding="utf-8"))
ms = d["mesajlar"] if isinstance(d, dict) and "mesajlar" in d else d
for m in ms:
    if str(m.get("no")) in ("5022", "M-5022"):
        print(m.get("mesaj", ""))
        break
else:
    print("M-5022 yok; son 3 kayit:")
    for m in ms[-3:]:
        print(m.get("no"), m.get("kimden"), "->", m.get("kime"))
