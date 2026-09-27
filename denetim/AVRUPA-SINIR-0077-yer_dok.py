import sys, json
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
sys.path.insert(0, r"C:\atlas\arac")
import girdi
Y = girdi.yukle(sessiz=True)
out = [{k: y.get(k) for k in ("ad", "lat", "lon", "s", "d", "v", "isg")} for y in Y]
json.dump(out, open(r"C:\atlas\denetim\AVRUPA-SINIR-0077-yer.json", "w", encoding="utf-8"), ensure_ascii=False)
print(len(out))
