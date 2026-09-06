# -*- coding: utf-8 -*-
"""④ CEZAYİR — kapsam ölçümü. Şartname "ÖLÇÜLMEDİ" diyor.

🔴 Kaba kutu 139 saymış ve Fas/Tunus/Sahra'yı YUTMUŞ. Bu ölçüm kutu
   kullanmıyor: 1923'te `fransa-cumhuriyet` taşıyan Kuzey Afrika
   noktalarını alır ve KOMŞU MODELLERİNE göre ayırır —
   Tunus (kendi `v:` + `isg:` örtüsü) · Fas (`fas` kimliği) ·
   Cezayir (metropol kimliği, künyesi kullanılmıyor).
🔴 Bölge ölçütü CASCADE (`ARAC-BOLGE-KUTU-0906.js`), kendi kutum DEĞİL.
🔴 VERİ YAZMAZ.
"""
import io
import json
import os
import subprocess
import sys
import tempfile

KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
import girdi  # noqa: E402

G = "1923-10-28"

# ── cascade'i KENDİ aletinden sor, taklit etme
# 🔴 `require` GEÇİCİ DOSYANIN yerine göre çözülür, cwd'ye göre DEĞİL —
# ilk yazımda `./denetim/...` ile çağırdım ve node modülü BULAMADI.
JS = """
const path=require('path');
const {bolge} = require(path.resolve(process.argv[2],
                        'denetim/ARAC-BOLGE-KUTU-0906.js'));
const fs=require('fs'),vm=require('vm');const c={window:{}};
vm.createContext(c);
vm.runInContext(fs.readFileSync(
   path.resolve(process.argv[2],'data/devletler.js'),'utf8'),c);
const kk=Object.keys(c.window).find(x=>Array.isArray(c.window[x]));
process.stdout.write(JSON.stringify({
  kunye: c.window[kk],
  cascade_var: typeof bolge === 'function'
}));
"""
fd, p = tempfile.mkstemp(suffix=".js")
os.write(fd, JS.encode("utf-8"))
os.close(fd)
r = subprocess.run(["node", p, KOK], capture_output=True, cwd=KOK)
os.unlink(p)
assert r.returncode == 0, r.stderr.decode("utf-8", "replace")[:400]
KUNYE = {k["id"]: k for k in json.loads(r.stdout.decode("utf-8"))["kunye"]}


def sahip(z, g):
    for q in (z.get("d") or []):
        if q.get("f", "") <= g < q.get("t", ""):
            return "OSMANLI"
    for q in (z.get("v") or []):
        if q.get("f", "") <= g < q.get("t", ""):
            return "OSMANLI-tabi"
    for q in (z.get("s") or []):
        if q.get("f", "") <= g < q.get("t", ""):
            return q.get("d") or "(kimliksiz)"
    return None


def ortu(z, g):
    return [q for q in (z.get("isg") or [])
            if q.get("f", "") <= g < q.get("t", "")]


Y = girdi.yukle(sessiz=True)

# ── `cezayir-fransiz` VERİDE HİÇ KULLANILIYOR MU (§4: tahmin etme, tara)
kul = [(z["ad"], kat, q.get("f"), q.get("t"))
       for z in Y for kat in ("d", "s", "isg")
       for q in (z.get(kat) or []) if q.get("d") == "cezayir-fransiz"]
print("═══ `cezayir-fransiz` VERİDE")
print("   künye : %s → %s · harita:%s"
      % (KUNYE["cezayir-fransiz"].get("f"), KUNYE["cezayir-fransiz"].get("t"),
         KUNYE["cezayir-fransiz"].get("harita", "—")))
print("   veride kullanan dönem : %d %s" % (len(kul), kul[:3]))

# ── Kuzey Afrika'da 1923'te `fransa-cumhuriyet`
KA = [z for z in Y if z.get("lat") is not None
      and 19 <= z["lat"] <= 38 and -18 <= z["lon"] <= 26]
fr = [z for z in KA if sahip(z, G) == "fransa-cumhuriyet"]
print("\n═══ KUZEY AFRİKA'da 1923'te `fransa-cumhuriyet`: %d nokta" % len(fr))

# hangi modeli taşıyorlar
model = {}
for z in fr:
    o = ortu(z, G)
    v_var = any(q.get("f", "") <= G < q.get("t", "")
                for q in (z.get("v") or []))
    m = ("v:+isg: (Tunus modeli)" if v_var and o else
         "isg: örtüsü VAR" if o else
         "DÜZ `s:fransa-cumhuriyet` — örtü YOK")
    model.setdefault(m, []).append(z)
for m, zs in sorted(model.items(), key=lambda x: -len(x[1])):
    print("\n   ── %-38s %d nokta" % (m, len(zs)))
    lo = sorted(z["lon"] for z in zs)
    la = sorted(z["lat"] for z in zs)
    print("      boylam %.1f … %.1f · enlem %.1f … %.1f"
          % (lo[0], lo[-1], la[0], la[-1]))
    for z in sorted(zs, key=lambda x: x["lon"])[:10]:
        q = next((x for x in (z.get("s") or [])
                  if x.get("f", "") <= G < x.get("t", "")), {})
        print("      %-26s %6.2f°D  s:%s→%s"
              % (z["ad"][:26], z["lon"], q.get("f"), q.get("t")))
    if len(zs) > 10:
        print("      … +%d" % (len(zs) - 10))

# ── başlangıç gününe göre küme
print("\n═══ `s:fransa-cumhuriyet` BAŞLANGIÇ GÜNÜ DAĞILIMI (Kuzey Afrika)")
gun = {}
for z in fr:
    q = next((x for x in (z.get("s") or [])
              if x.get("f", "") <= G < x.get("t", "")), None)
    if q:
        gun[q["f"]] = gun.get(q["f"], 0) + 1
for k, n in sorted(gun.items(), key=lambda x: -x[1]):
    print("   %s  %3d nokta" % (k, n))
