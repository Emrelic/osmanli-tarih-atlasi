# -*- coding: utf-8 -*-
"""DEGISMEZ3-0907 ⑭ — şüpheli `continue` dallarının ETKİSİ ölçülüyor.

Koordinatörün şartı: *"🔴 KOVAYI ETKİSİYLE AYIR — bir `continue` sessiz
olabilir ve ZARARSIZ olabilir."* (`degismez4:1833` emsali: bulamadığını
`kunyesiz` kovasına koyup RAPORLUYOR, yani sessiz değil.)

ÖLÇÜLEN ÜÇ ADAY:
  :924  `olaylari_yukle`  regex eşleşmezse DOSYA sessizce atlanıyor
  :2833 `savas_senkronu`  `t` taşımayan savaş kaydı sessizce atlanıyor
  :3125/3144/3153 `donem_sagligi`  `f`/`t` eksik dönem HİÇ denetlenmiyor
"""
import io
import json
import os
import re
import subprocess
import sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi  # noqa: E402

DATA = os.path.join(KOK, "data")
print("=" * 74)
print("ŞÜPHELİ `continue` DALLARININ ETKİSİ")
print("=" * 74)
rapor = {}

# ═══ :924 — olaylari_yukle: regex eşleşmeyen dosya SESSİZCE atlanıyor ═══
print("\n[:924  olaylari_yukle]  `window.(OLAYLAR\\w*)\\s*=` eşleşmezse DOSYA atlanır")
import glob  # noqa: E402
tum = sorted(glob.glob(os.path.join(DATA, "olaylar*.js")))
uymayan = []
for yol in tum:
    js = open(yol, encoding="utf-8").read()
    if not re.search(r"window\.(OLAYLAR\w*)\s*=", js):
        uymayan.append(os.path.basename(yol))
print("  data/olaylar*.js dosyası : %d" % len(tum))
print("  regex'e UYMAYAN          : %d %s" % (len(uymayan), uymayan))
# ve tersi: OLAYLAR değişkeni taşıyıp adı `olaylar*` OLMAYAN dosya var mı?
kron = sorted(glob.glob(os.path.join(DATA, "kronoloji*.js")))
kron_olaylar = [os.path.basename(y) for y in kron
                if re.search(r"window\.(OLAYLAR\w*)\s*=", open(y, encoding="utf-8").read())]
print("  data/kronoloji*.js       : %d" % len(kron))
print("  bunlardan OLAYLAR değişkeni taşıyan: %d %s"
      % (len(kron_olaylar), kron_olaylar[:5]))
print("  ⇒ %s" % ("🟢 bugün ZARARSIZ — hiçbir dosya elenmiyor" if not uymayan
                  else "🔴 %d DOSYA SESSİZCE YÜKLENMİYOR" % len(uymayan)))
rapor["924"] = {"dosya": len(tum), "uymayan": uymayan,
                "kronoloji_dosyasi": len(kron),
                "kronolojide_OLAYLAR_tasiyan": kron_olaylar}

# ═══ :2833 — savas_senkronu: `t` taşımayan kayıt ═══
print("\n[:2833 savas_senkronu]  `not r.get(\"t\")` → sessizce atlanır")
js = subprocess.run(
    ["node", "-e",
     "global.window={};const fs=require('fs');"
     "eval(fs.readFileSync('data/savaslar.js','utf8'));"
     "const o={};for(const k of Object.keys(global.window))"
     "if(Array.isArray(global.window[k]))o[k]=global.window[k];"
     "process.stdout.write(JSON.stringify(o));"],
     cwd=KOK, capture_output=True)
if js.returncode != 0:
    print("  ⚠️ node hatası — ÖLÇÜLEMEDİ")
    rapor["2833"] = {"olculemedi": True}
else:
    kumeler = json.loads(js.stdout.decode("utf-8"))
    for ad, kayitlar in sorted(kumeler.items()):
        tsiz = [r.get("ad") or r.get("b") or "?" for r in kayitlar
                if isinstance(r, dict) and not r.get("t")]
        print("  window.%-14s %4d kayıt · `t` YOK: %d %s"
              % (ad, len(kayitlar), len(tsiz), tsiz[:4] if tsiz else ""))
        rapor.setdefault("2833", {})[ad] = {"kayit": len(kayitlar),
                                            "t_yok": len(tsiz),
                                            "ornek": tsiz[:10]}

# ═══ :3125/3144/3153 — donem_sagligi: f/t eksik dönem ═══
print("\n[:3125·3144·3153  donem_sagligi]  `not f or not t` → dönem HİÇ denetlenmez")
Y = girdi.yukle(sessiz=True)
eksik = []
for y in Y:
    for kat in ("d", "s", "v", "isg"):
        for p in (y.get(kat) or []):
            if not p.get("f") or not p.get("t"):
                eksik.append((y["ad"], kat, p.get("f"), p.get("t")))
print("  yerleşim %d · taranan kategori d/s/v/isg" % len(Y))
print("  `f` ya da `t` EKSİK dönem : %d" % len(eksik))
for r in eksik[:10]:
    print("    %-26s %-4s f:%s t:%s" % (r[0][:26], r[1], r[2], r[3]))
print("  ⇒ %s" % ("🟢 bugün ZARARSIZ — eksik dönem yok" if not eksik
                  else "🔴 %d DÖNEM DENETİMDEN KAÇIYOR" % len(eksik)))
rapor["3125"] = {"eksik_donem": len(eksik),
                 "ornek": [list(r) for r in eksik[:20]]}

# ═══ EK: :1931 degismez5 — dönemi hiç olmayan kayıt ═══
print("\n[:1931 degismez5]  `not donemler` → dönemsiz kayıt sessizce atlanır")
donemsiz = [y["ad"] for y in Y
            if not any(p.get("f") for k in ("d", "s", "v") for p in (y.get(k) or []))]
print("  d/s/v hiç `f` taşımayan kayıt : %d %s"
      % (len(donemsiz), donemsiz[:6]))
print("  ⚠️ `Değişmez 1` bunları ZATEN sahipsiz diye yakalar ⇒ çift kapı")
rapor["1931"] = {"donemsiz": len(donemsiz), "ornek": donemsiz[:20]}

json.dump(rapor, open(os.path.join(KOK, "denetim",
                                   "OLCUM-DEGISMEZ3-CONTINUE2-0907.json"),
                      "w", encoding="utf-8", newline=""),
          ensure_ascii=False, indent=1)
print("\n[YAZILDI] denetim/OLCUM-DEGISMEZ3-CONTINUE2-0907.json")
