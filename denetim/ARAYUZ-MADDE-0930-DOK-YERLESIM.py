# ARAYUZ-MADDE-0930 — motorun okuduğu yerleşim havuzunu JSON'a döker (node ölçümleri için)
import sys, json
sys.path.insert(0, "arac")
import girdi
Y = girdi.yukle(sessiz=True)
out = sys.argv[1]
json.dump(Y, open(out, "w", encoding="utf-8"), ensure_ascii=False)
print("yerleşim", len(Y), "->", out)
