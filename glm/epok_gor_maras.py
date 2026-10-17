# -*- coding: utf-8 -*-
"""Maraş, Akçahisar (Kruja), Urfa v3 kayitlarinin tam cümlelerini basar."""
import io, json, os
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
for l in io.open(os.path.join(KOK, "glm", "epok_asama1.jsonl"), encoding="utf-8"):
    r = json.loads(l)
    if r["ad"] in ("Maraş", "Akçahisar (Kruja)", "Urfa"):
        print("###", r["ad"], "· slug:", r.get("slug"), "· takip:", r.get("takip", "-"),
              "· baslik:", r.get("baslik"))
        for y, c in (r.get("c_yil") or [])[:10]:
            print(f"  Y[{y}] {c[:230]}")
        for y, c in (r.get("c_ek") or [])[:4]:
            print(f"  E[{y}] {c[:200]}")
        print()
