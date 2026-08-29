# -*- coding: utf-8 -*-
"""Emre'de bekleyen KARARLARI dok — `senin-kararin` hukmu tasiyanlar."""
import json, glob, os, io

KOK = "C:/Users/emrem/OneDrive/Desktop/ClaudEmre/kutu/giden"

for yol in sorted(glob.glob(os.path.join(KOK, "*", "CEVAP.json"))):
    parti = os.path.basename(os.path.dirname(yol))
    try:
        d = json.load(io.open(yol, encoding="utf-8"))
    except Exception:
        continue
    for hid, v in sorted((d.get("maddeler") or {}).items()):
        if not isinstance(v, dict):
            continue
        if (v.get("hukum") or "").strip() != "senin-kararin":
            continue
        n = " ".join((v.get("not") or "").split())
        n = n.encode("ascii", "replace").decode("ascii")
        print("%-22s %-8s %s" % (parti, hid, n[:230]))
        print()
