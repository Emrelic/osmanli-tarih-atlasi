# -*- coding: utf-8 -*-
"""M-5043'u tahta.json'dan GERI OKU — uzunluk tam mi (ORTAK-0076 §6 ⑤)."""
import io, json, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")

gonderilen = open(r"C:\atlas\denetim\KRONO-0076-B-teslim.txt", encoding="utf-8").read()
d = json.load(open(r"C:\atlas\oturumlar\tahta.json", encoding="utf-8"))
ms = d["mesajlar"] if isinstance(d, dict) and "mesajlar" in d else d
hedef = next((m for m in ms if str(m.get("no")).lstrip("M-") == "5043"), None)
if hedef is None:
    print("🔴 M-5043 BULUNAMADI"); sys.exit(1)
metin = hedef.get("mesaj", "")
print("gonderilen karakter:", len(gonderilen))
print("tahtadaki  karakter:", len(metin))
print("son 140 karakter:", repr(metin[-140:]))
# satir sonlari bosluga cevrildigi icin birebir esitlik beklenmez; SON CUMLE sinanir
son = "bekcimi olduruyorum."
print("SON CUMLE YERINDE MI:", "EVET" if son in metin else "🔴 HAYIR — MESAJ KESILMIS")
for anahtar in ["EKOKUMA_P76E", "25/25", "Ras Ecdir", "D-YOK", "H-0103", "43"]:
    print("  ic anahtar %-14s :" % anahtar, "var" if anahtar in metin else "🔴 YOK")
