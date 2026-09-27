"""H-0003 ölçümü: `s:` alanında `avusturya` (habsburg künyesinin harita: anahtarı) taşıyan
dönemlerden künye başından (f) ÖNCE başlayanlar — bugünkü f ile ve önerilen f ile.
Tolerans denetle.py'deki HAYALET_TOLERANS_GUN (400 gün) ile aynı. Yalnız okur."""
import os
import sys
from datetime import date

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
import girdi  # noqa: E402

Y = girdi.yukle(sessiz=True)


def gun(s):
    p = [int(x) for x in s.split("-")]
    return date(*p)


don = [(y["ad"], p["f"], p["t"]) for y in Y for p in (y.get("s") or []) if p.get("d") in ("avusturya", "habsburg")]
print("s: avusturya|habsburg dönemi: %d (yerleşim %d)" % (len(don), len({d[0] for d in don})))
for kf in ("1526-08-29", "1282-01-01"):
    once = [d for d in don if (gun(kf) - gun(d[1])).days > 400]
    print("künye f=%s → f'den >400 gün ÖNCE başlayan dönem: %d" % (kf, len(once)))
    for d in once[:8]:
        print("   %s %s→%s" % d)
bas = sorted({d[1] for d in don})
print("en erken dönem başları:", bas[:5])
