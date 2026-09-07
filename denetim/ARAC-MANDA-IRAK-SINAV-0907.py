# -*- coding: utf-8 -*-
"""MANDA'nin 1921-08-23 BOLUNMESI — uygulanmadan ONCE sinav.

Olcum zinciri (ARAC-FETRET-MANDA*-0907.js) sunu gosterdi:
  · baslangic gunleri MANDA/FETRET/CANLI ucunde de AYNI (fark 0)
  · FETRET 30/31 kayitta YENI donem GETIRMIYOR (canlinin kopyasi)
  · MANDA 31 kayitta `ingiltere` donemini 1921-08-23'te BOLUYOR ve
    `irak-kralligi` ekliyor  -> 60 yeni donem
  · Bagdat TEK gercek iki tarafli catisma: MANDA eski 1335-12-01
    sinirini tasiyor, FETRET duzeltilmis 1340-01-01'i (hukum M-2133).

BU SINAV UC SEYI OLCER, VARSAYMAZ:
  (1) 1921-08-23 kronolojide MADDESI VAR MI  (Degismez 2s riski)
  (2) `irak-kralligi` kunye penceresi bolunmeyi TASIYOR MU (4c/4d)
  (3) uygulanirsa ALTI DEGISMEZIN kovalari nasil degisir

VERIYE DOKUNMAZ — bellekte uygular.
"""
import json
import os
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))

import girdi     # noqa: E402
import denetle   # noqa: E402

GUN = "1921-08-23"
KIMLIK = "irak-kralligi"

Y = girdi.yukle()
if len(Y) < 3000:
    raise SystemExit("SESSIZ SIFIR: %d nokta" % len(Y))
O = denetle.olaylari_yukle()
print("girdi %d nokta · cekirdek kronoloji %d madde" % (len(Y), len(O)))

# ─── (1) GUNUN MADDESI — ve HANGI KOVADA ──────────────────────────────
g0 = denetle.gun_no(denetle.tam(GUN))
yakin = []
for o in O:
    t = o.get("t")
    if not t:
        continue
    d = abs(denetle.gun_no(denetle.tam(t)) - g0)
    if d <= 60:
        yakin.append((d, t, (o.get("b") or "")[:70]))
yakin.sort()
print("\n(1) %s — CEKIRDEKTE +-60 gun icinde %d madde" % (GUN, len(yakin)))
for d, t, b in yakin[:6]:
    print("    %3d gun · %s · %s" % (d, t, b))
if not yakin:
    print("    HICBIRI — bu gun 2s'de ACIK olur (kapsam iciyse)")

# ─── (2) KUNYE PENCERESI ──────────────────────────────────────────────
dev = girdi.oku_devletler()
k = next((d for d in dev if d.get("id") == KIMLIK), None)
print("\n(2) kunye `%s`: %s" % (KIMLIK, "YOK" if not k else
      "f=%s t=%s · %s" % (k.get("f"), k.get("t"), (k.get("ad") or "")[:60])))
if not k:
    raise SystemExit("KUNYE YOK — bolunme yazilamaz")
if not (k.get("f") <= GUN <= (k.get("t") or "9999")):
    raise SystemExit("KUNYE PENCERESI GUNU KAPSAMIYOR")
print("    -> pencere gunu KAPSIYOR")

# ─── (3) TABAN ────────────────────────────────────────────────────────
ALANLAR4 = ("ihlal", "kunyesiz", "ok", "asan", "once")


def d4(kume):
    r = denetle.degismez4(kume)
    if not isinstance(r, tuple) or len(r) != len(ALANLAR4):
        raise SystemExit("degismez4 DONUS YAPISI DEGISTI: %r" % (type(r),))
    return {a: (len(v) if isinstance(v, list) else v) for a, v in zip(ALANLAR4, r)}


print("\n(3) TABAN")
print("    4  ", json.dumps(d4(Y), ensure_ascii=False))

# ─── (4) YAMAYI BELLEKTE UYGULA ───────────────────────────────────────
import copy   # noqa: E402
import re     # noqa: E402
import subprocess  # noqa: E402

JS = (
    'const fs=require("fs"),vm=require("vm");'
    'const c={window:{},console:{log(){}}};vm.createContext(c);'
    'vm.runInContext(fs.readFileSync(process.argv[2],"utf8"),c);'
    'let e=null;for(const a of Object.keys(c.window)){const v=c.window[a];'
    'if(Array.isArray(v)&&(!e||v.length>e.length))e=v;}'
    'if(!e||!e.length)throw new Error("SIFIR KAYIT");'
    'process.stdout.write(JSON.stringify(e));'
)
gec = os.path.join(os.environ.get("TEMP", "."), "_manda_oku_0907.js")
with open(gec, "w", encoding="utf-8") as f:
    f.write(JS)
h = subprocess.run(["node", gec,
                    os.path.join(KOK, "data", "yer_yama_manda_0906.js")],
                   capture_output=True, text=True, encoding="utf-8")
if h.returncode != 0:
    raise SystemExit("node COKTU: " + (h.stderr or "")[:300])
MANDA = json.loads(h.stdout)
print("\n(4) MANDA okundu: %d kayit" % len(MANDA))
if len(MANDA) < 10:
    raise SystemExit("SESSIZ SIFIR: manda %d" % len(MANDA))

mI = {r["ad"]: r for r in MANDA if r.get("ad")}
Y2 = copy.deepcopy(Y)
uygulanan = 0
for y in Y2:
    m = mI.get(y.get("ad"))
    if not m or "s" not in m:
        continue
    y["s"] = copy.deepcopy(m["s"])
    uygulanan += 1
print("    bellekte uygulanan: %d / %d" % (uygulanan, len(MANDA)))
if uygulanan == 0:
    raise SystemExit("SIFIR UYGULANDI — ad eslesmesi tutmadi")

print("\n(5) MANDA UYGULANMIS")
print("    4  ", json.dumps(d4(Y2), ensure_ascii=False))
print("\n    TAVAN: asan<=%d · once<=%d · hayalet=%d"
      % (denetle.BEKLENEN_ASAN, denetle.BEKLENEN_ONCE, denetle.BEKLENEN_HAYALET))
