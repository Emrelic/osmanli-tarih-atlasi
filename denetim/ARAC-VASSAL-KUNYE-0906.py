# -*- coding: utf-8 -*-
"""② EKSİK KÜNYE — `v:` katmanındaki polity'ler, ÖNCÜL DOĞRULAMASIYLA.

🔴 Sevkin öncülü devralınmıyor, ölçülüyor (`§11`: "bir sevk, taşıdığı
   öncülü de doğrulamalıdır").
🔴 `v:` dönemlerinin KİMLİK ALANI YOK (bu gece ölçüldü: 423 dönem,
   yalnız f/t/k/enklav) ⇒ polity adı `k:` SERBEST METNİNDE duruyor.
   Bu ölçüm onu oradan çıkarır ve `devletler.js`e karşı tarar.
🔴 Künye araması NORMALLEŞTİRİCİ ile — `§4` Türkçe yazım ekseni.
🔴 VERİ YAZMAZ.
"""
import io
import json
import os
import re
import subprocess
import sys
import tempfile
import unicodedata

KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
import girdi  # noqa: E402

CEV = {"İ": "i", "I": "i", "ı": "i", "Ş": "s", "ş": "s", "Ğ": "g",
       "ğ": "g", "Ü": "u", "ü": "u", "Ö": "o", "ö": "o", "Ç": "c",
       "ç": "c", "Â": "a", "â": "a", "Î": "i", "î": "i", "Û": "u",
       "û": "u", "’": "'", "‘": "'", "ć": "c", "č": "c", "š": "s"}


def norm(s):
    s = "".join(CEV.get(c, c) for c in s)
    s = unicodedata.normalize("NFKD", s)
    s = "".join(c for c in s if not unicodedata.combining(c))
    return re.sub(r"[^a-z0-9]+", " ", s.lower()).strip()


# ── künyeleri KENDİ DİLİNİN yorumlayıcısıyla oku (regex DEĞİL)
JS = ("const fs=require('fs'),vm=require('vm');const c={window:{}};"
      "vm.createContext(c);vm.runInContext("
      "fs.readFileSync('data/devletler.js','utf8'),c);"
      "const k=Object.keys(c.window).find(x=>Array.isArray(c.window[x]));"
      "process.stdout.write(JSON.stringify(c.window[k]));")
fd, p = tempfile.mkstemp(suffix=".js")
os.write(fd, JS.encode("utf-8"))
os.close(fd)
r = subprocess.run(["node", p], capture_output=True)
os.unlink(p)
assert r.returncode == 0, r.stderr.decode("utf-8", "replace")[:300]
KUNYE = json.loads(r.stdout.decode("utf-8"))
print("═══ ÖNCÜL DOĞRULAMASI")
print("   künye sayısı : %d" % len(KUNYE))

kn = {}
for k in KUNYE:
    for alan in ("id", "ad", "harita"):
        v = k.get(alan)
        if isinstance(v, str) and v:
            kn.setdefault(norm(v), set()).add(k.get("id"))

# ── `v:` katmanı
Y = girdi.yukle(sessiz=True)
vd = [(z["ad"], p) for z in Y for p in (z.get("v") or [])]
alanlar = set()
for _a, p in vd:
    alanlar |= set(p.keys())
print("   `v:` dönemi  : %d" % len(vd))
print("   `v:` ALANLARI: %s" % sorted(alanlar))
print("   ⇒ kimlik alanı %s"
      % ("VAR" if {"d", "id"} & alanlar else "🔴 YOK — polity `k:` metninde"))

etiket = {}
for ad, p in vd:
    k = (p.get("k") or "").strip()
    if k:
        etiket.setdefault(k, []).append(ad)

print("\n═══ `k:` ETİKETLERİ ve KÜNYE KARŞILIĞI")
eksik = []
for et, yerler in sorted(etiket.items(), key=lambda x: -len(x[1])):
    ana = re.sub(r"\s*\((tâbi|tabi|vassal)\)\s*$", "", et).strip()
    n = norm(ana)
    hit = kn.get(n)
    if not hit:
        # gevşek: künye adı etiketin içinde mi
        hit = {i for kk, ii in kn.items()
               if kk and (kk in n or n in kk) and len(kk) > 5 for i in ii}
    im = "🟢" if hit else "🔴"
    print("   %s %-38s %2d dönem  %s"
          % (im, et[:38], len(yerler),
             ("künye: " + ", ".join(sorted(hit))[:40]) if hit
             else "KÜNYE YOK"))
    if not hit:
        eksik.append((et, ana, len(yerler), sorted(set(yerler))))

print("\n═══ 🔴 KÜNYESİ OLMAYAN POLITY: %d · toplam %d dönem"
      % (len(eksik), sum(e[2] for e in eksik)))
for et, ana, n, yerler in eksik:
    print("\n   ── %-34s %d dönem" % (et, n))
    print("      yerleşimler: %s" % ", ".join(yerler[:8]))
    araliklar = sorted({(p.get("f"), p.get("t")) for a, p in vd
                        if (p.get("k") or "").strip() == et})
    print("      aralık: %s" % " ".join("%s→%s" % x for x in araliklar[:6]))
