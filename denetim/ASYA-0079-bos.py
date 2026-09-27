"""ASYA-0079 — H-79:4 kutusundaki bos_alanlar kayitlari (kuru)."""
import sys, json, re
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
sys.path.insert(0, "arac")
import girdi

metin = open("data/bos_alanlar.js", encoding="utf-8").read()
kayit = girdi._cevir(metin, "BOS_ALANLAR")
print("toplam", len(kayit), "anahtarlar", sorted({k for r in kayit for k in r})[:30])
for r in kayit:
    la, lo = r.get("lat"), r.get("lon")
    if la is None:
        continue
    if 35.0 <= la <= 47.5 and 49.0 <= lo <= 66.0:
        print(json.dumps(r, ensure_ascii=False)[:900])
        print()
