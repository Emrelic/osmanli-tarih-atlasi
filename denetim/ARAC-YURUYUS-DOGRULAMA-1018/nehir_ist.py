import os, pickle, sys
import numpy as np
SP = os.environ.get("YDOG_DIZIN") or os.path.join(__import__("tempfile").gettempdir(), "ydog1018")
os.makedirs(SP, exist_ok=True)
BETIK_DIZIN = os.path.dirname(os.path.abspath(__file__))
for ad in ("anadolu", "ova", "orta_asya", "sahra", "arabistan"):
    D = pickle.load(open(os.path.join(SP, "dok_%s.pkl" % ad), "rb"))
    nb, bay = D["nehir"]
    v = np.array(list(nb.values()))
    g = D["grid"]
    print("[%s] nehir kenar kaydı %d · bayraklı hücre %d · bedel (km-eşd.) min %.1f medyan %.1f p90 %.1f maks %.1f · bedel/201,6km (bütçe payı) maks %.2f · boğaz yasağı kenarı %d · kara %d"
          % (ad, len(nb), int(sum(1 for x in bay if x)) if bay is not None else 0,
             v.min() if len(v) else 0, np.median(v) if len(v) else 0, np.percentile(v, 90) if len(v) else 0,
             v.max() if len(v) else 0, (v.max() / 201.6) if len(v) else 0, len(D["kvsu"]), int(D["kara"].sum())))
    vals, cnt = np.unique(np.round(v, 1), return_counts=True)
    print("   en sık 5 bedel:", sorted(zip(cnt.tolist(), vals.tolist()), reverse=True)[:5])
