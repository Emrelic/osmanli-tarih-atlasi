import sys, json
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
import os  # MUTLAK-KOK-DENETIM-1006: kök için
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "arac"))
import girdi
Y = girdi.yukle(sessiz=True)
out = [{k: y.get(k) for k in ("ad", "lat", "lon", "s", "d", "v", "isg")} for y in Y]
json.dump(out, open(os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "denetim", "AVRUPA-SINIR-0077-yer.json"), "w", encoding="utf-8"), ensure_ascii=False)
print(len(out))
