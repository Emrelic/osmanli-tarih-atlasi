# -*- coding: utf-8 -*-
"""Devletler dizini sayfa metninde onerilen basliklarin gorunup gorunmedigini kontrol eder."""
import io, json, sys

try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

p = r"C:\Users\emrem\.claude\projects\C--Users-emrem-OneDrive-Desktop-TAR-H-CO-RAFYA-S-TES-\767848ed-4153-4df9-95dc-23b093bfb34e\tool-results\mcp-Claude_Browser-get_page_text-1789152684276.txt"
d = json.load(io.open(p, encoding="utf-8"))
txt = "".join(x.get("text", "") for x in d if isinstance(x, dict))

hedefler = ["İmparatorluklar", "Sultanlıklar", "Devletler (", "Hanlıklar",
            "Krallıklar", "Cumhuriyetler", "Prenslikler", "Dükalıklar",
            "Anadolu Beylikleri", "Kuzey Afrika Ocakları", "Özerk Hanedanlıklar",
            "Fetret Devri", "Geçici İşgaller", "Emirlik", "Federasyon",
            "Isyan", "İsyan", "Ulke", "Kralik", "kralik", "Gecici-hukumet",
            "Tür Belirtilmemiş"]

for h in hedefler:
    i = txt.find(h)
    if i >= 0:
        print("BULUNDU:", h, "->", repr(txt[i:i+40]))
    else:
        print("YOK    :", h)

print()
print("--- metin sonu (son 600 karakter, en alttaki basliklari gormek icin) ---")
print(txt[-600:])
