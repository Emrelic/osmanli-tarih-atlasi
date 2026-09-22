# -*- coding: utf-8 -*-
"""Tahtadan mesaj okur — SALT OKUR. py denetim/... <aranan> [son_kac]"""
import sys
import io
import json

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
d = json.load(io.open("oturumlar/tahta.json", encoding="utf-8"))
ms = d["mesajlar"] if isinstance(d, dict) and "mesajlar" in d else d
ara = sys.argv[1] if len(sys.argv) > 1 else ""
n = int(sys.argv[2]) if len(sys.argv) > 2 else 0
sec = [m for m in ms if ara in json.dumps(m, ensure_ascii=False)]
if n:
    sec = sec[-n:]
for m in sec:
    print("-" * 70)
    for k in ("no", "id", "zaman", "kim", "kime"):
        if m.get(k):
            print("%s: %s" % (k, m[k]))
    print(m.get("mesaj", ""))
