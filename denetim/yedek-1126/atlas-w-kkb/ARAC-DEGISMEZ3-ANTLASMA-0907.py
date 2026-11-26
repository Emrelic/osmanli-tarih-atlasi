# -*- coding: utf-8 -*-
"""DEGISMEZ3-0907 ⑰ — `oku_pencere` ANTLASMALAR'ı EKSİK mi okuyor?

🔴 ÜÇ KAYNAK, İKİ FARKLI SAYI:
   `denetle.py:739` YORUMU : "node okuyunca … ANTLASMALAR **41** …"
   benim node ölçümüm      : **41**
   `denetle.oku_pencere()` : **31**       ← 10 KAYIT FARK

Öteki üç küme UYUŞUYOR (SAVASLAR 171 · SEFERLER 61 · SERILER 16), yani
bu bir dosya kusuru değil — ayrıştırıcı YALNIZ BU DİZİDE ayrışıyor.

📌 Ve `oku_pencere`nin kendi yorumu ayrıştırıcının İKİ KEZ kusurlu
   çıktığını anlatıyor (`rindex("]")` · yorum farkındalığı). Bu üçüncü
   olabilir — ya da yorumdaki 41 BAYAT olabilir. İkisi de ölçülür.
"""
import io
import json
import os
import subprocess
import sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)
import denetle  # noqa: E402

YOL = os.path.join(KOK, "data", "savaslar.js")

# ── node ile (yorumlayıcının kendisi) ────────────────────────────────
JS = ("global.window={};const fs=require('fs');"
      "eval(fs.readFileSync('data/savaslar.js','utf8'));"
      "const o={};for(const k of Object.keys(global.window))"
      "if(Array.isArray(global.window[k]))"
      "o[k]=global.window[k].map(r=>(r&&r.ad)||(r&&r.t)||'?');"
      "process.stdout.write(JSON.stringify(o));")
p = subprocess.run(["node", "-e", JS], cwd=KOK, capture_output=True)
if p.returncode != 0:
    print("⚠️ node ÖLÇÜLEMEDİ: %s" % p.stderr.decode("utf-8", "replace")[:200])
    sys.exit(2)
nd = json.loads(p.stdout.decode("utf-8"))

print("=" * 74)
print("`oku_pencere` ↔ node — küme küme")
print("=" * 74)
fark_var = {}
for kume in ("SAVASLAR", "ANTLASMALAR", "SEFERLER", "SERILER"):
    n_node = len(nd.get(kume, []))
    try:
        S = denetle.oku_pencere(YOL, kume)
        n_py = len(S)
    except Exception as e:
        print("  %-13s node %3d · oku_pencere ÇÖKTÜ: %s" % (kume, n_node, str(e)[:40]))
        continue
    isaret = "✓" if n_node == n_py else "🔴 FARK %+d" % (n_py - n_node)
    print("  %-13s node %3d · oku_pencere %3d   %s" % (kume, n_node, n_py, isaret))
    if n_node != n_py:
        py_ad = set((r.get("ad") or r.get("t") or "?") for r in S)
        nd_ad = list(nd[kume])
        eksik = [a for a in nd_ad if a not in py_ad]
        fark_var[kume] = {"node": n_node, "oku_pencere": n_py, "eksik": eksik}

for kume, d in fark_var.items():
    print("\n[%s] `oku_pencere`nin GÖRMEDİĞİ %d kayıt:" % (kume, len(d["eksik"])))
    for a in d["eksik"]:
        print("    %s" % a)

# ── SEBEP ARAMA: gövdenin nerede kesildiği ───────────────────────────
if fark_var:
    print("\n[SEBEP]")
    js = open(YOL, encoding="utf-8").read()
    for kume in fark_var:
        anahtar = "window.%s = " % kume
        i = js.index(anahtar)
        # node'un gördüğü son kayıt ile oku_pencere'nin gördüğü son kayıt
        S = denetle.oku_pencere(YOL, kume)
        son_py = (S[-1].get("ad") or S[-1].get("t")) if S else "?"
        son_nd = nd[kume][-1] if nd[kume] else "?"
        print("  %s  oku_pencere SON kayıt: %s" % (kume, son_py))
        print("  %s  node        SON kayıt: %s" % (" " * len(kume), son_nd))
        print("  ⇒ %s" % ("dizi ERKEN kapanıyor (ayrıştırıcı kaydı kaçırıyor)"
                          if son_py != son_nd else "son kayıt AYNI — eksik ORTADA"))

print("\n" + "=" * 74)
if fark_var:
    print("🔴 BULGU: `oku_pencere` %s dizisini EKSİK okuyor."
          % ", ".join(fark_var))
    print("   ⇒ `savas_senkronu` bugün `SAVASLAR` kullanıyor (171 ✓ uyuşuyor),")
    print("     yani BUGÜN ZARARSIZ. Ama `ANTLASMALAR` denetime eklenirse")
    print("     10 kayıt SESSİZCE eksik ölçülür.")
else:
    print("✓ dört küme de uyuşuyor")
print("=" * 74)
json.dump({"_NOT": "oku_pencere ↔ node karşılaştırması, savaslar.js.",
           "node": {k: len(v) for k, v in nd.items()},
           "fark": fark_var},
          open(os.path.join(KOK, "denetim",
                            "OLCUM-DEGISMEZ3-ANTLASMA-0907.json"),
               "w", encoding="utf-8", newline=""), ensure_ascii=False, indent=1)
print("[YAZILDI] denetim/OLCUM-DEGISMEZ3-ANTLASMA-0907.json")
