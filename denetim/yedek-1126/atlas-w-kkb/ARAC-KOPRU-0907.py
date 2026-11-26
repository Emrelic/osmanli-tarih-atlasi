# -*- coding: utf-8 -*-
"""1921-10-20'de KOPRUYU KESEN kayit hangisi?

Antep·Kilis·Mersin·Payas 1921-10-20'de OSMANLI ADA'sina dustu — AMA
DORDU DE DEGISMEDI (git diff bos). Demek ki koprusu kesildi: o gun
OSMANLI olan bir KOMSU, yamayla BASKA bir kimlige gecti.

Bu betik HEAD ile calisma kopyasini o GUN icin karsilastirir:
  1921-10-20'de sahibi DEGISEN kayitlari bulur.
"""
import json
import os
import subprocess
import sys
import tempfile

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi   # noqa: E402

GUN = "1921-10-20"


def sahip(y, g):
    for p in (y.get("d") or []):
        if p.get("f") and p.get("t") and p["f"] <= g < p["t"]:
            return "OSMANLI"
    for p in (y.get("v") or []):
        if p.get("f") and p.get("t") and p["f"] <= g < p["t"]:
            return "OSMANLI(tabi)"
    for p in (y.get("s") or []):
        if p.get("f") and p.get("t") and p["f"] <= g < p["t"]:
            return p.get("d")
    return None


Y2 = girdi.yukle(sessiz=True)
gec = tempfile.mkdtemp(prefix="kopru_")
os.makedirs(os.path.join(gec, "data"), exist_ok=True)
for f in girdi.GIRDI_DOSYALARI:
    r = subprocess.run(["git", "show", "HEAD:data/%s" % f],
                       cwd=KOK, capture_output=True)
    if r.returncode == 0:
        with open(os.path.join(gec, "data", f), "wb") as fh:
            fh.write(r.stdout)
eski = girdi.DATA
girdi.DATA = os.path.join(gec, "data")
try:
    Y1 = girdi.yukle(sessiz=True)
finally:
    girdi.DATA = eski
if len(Y1) < 3000 or len(Y2) < 3000:
    raise SystemExit("SESSIZ SIFIR")

s1 = {y["ad"]: (sahip(y, GUN), y.get("lat"), y.get("lon")) for y in Y1 if y.get("ad")}
s2 = {y["ad"]: (sahip(y, GUN), y.get("lat"), y.get("lon")) for y in Y2 if y.get("ad")}

degisen = [(a, s1[a][0], s2[a][0], s2[a][1], s2[a][2])
           for a in s2 if a in s1 and s1[a][0] != s2[a][0]]
print("%s gununde SAHIBI DEGISEN kayit: %d" % (GUN, len(degisen)))
print("=" * 68)
# Cukurova kutusuna yakin olanlari one al (36-38 K, 33-38 D)
def yakin(x):
    la, lo = x[3], x[4]
    if la is None or lo is None:
        return 9999
    return abs(la - 37.0) + abs(lo - 36.5)


for a, o, s, la, lo in sorted(degisen, key=yakin)[:20]:
    print("  %-26s %-22s -> %-22s  (%s, %s)" % (a, o, s, la, lo))
if len(degisen) > 20:
    print("  … +%d" % (len(degisen) - 20))
if not degisen:
    print("  HICBIRI — kopukluk bu gunun sahiplerinden DEGIL;")
    print("  komsuluk grafigini besleyen baska bir sey degismis olabilir.")
