# -*- coding: utf-8 -*-
"""M-5020'yi tahta.json'dan GERI OKU — uzunlugu tam mi (ORTAK-0076 §6 ⑤)."""
import io, json, sys, os
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")

kaynak = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "denetim", "KRONO-0076-B-mesaj1.txt")
gonderilen = open(kaynak, encoding="utf-8").read()

d = json.load(open(os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "oturumlar", "tahta.json"), encoding="utf-8"))
ms = d["mesajlar"] if isinstance(d, dict) and "mesajlar" in d else d

hedef = None
for m in ms:
    if str(m.get("no") or m.get("id") or m.get("kod") or "").endswith("5020"):
        hedef = m
        break
if hedef is None:
    for m in reversed(ms):
        if m.get("kim") == "KRONO-0076-B" or m.get("gonderen") == "KRONO-0076-B":
            hedef = m
            break

if hedef is None:
    print("BULUNAMADI — KRONO-0076-B mesaji tahta.json'da yok")
    print("anahtarlar ornegi:", sorted(ms[-1].keys()))
    sys.exit(1)

print("anahtarlar:", sorted(hedef.keys()))
metin = hedef.get("mesaj") or hedef.get("metin") or ""
print("GONDERILEN uzunluk:", len(gonderilen))
print("TAHTADAKI  uzunluk:", len(metin))
print("TAM MI    :", "EVET" if metin.strip() == gonderilen.strip() else "HAYIR")
print("son 120 karakter:", repr(metin[-120:]))
