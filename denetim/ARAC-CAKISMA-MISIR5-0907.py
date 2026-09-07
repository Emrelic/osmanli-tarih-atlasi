# -*- coding: utf-8 -*-
"""KÜME 1 — BEŞ MISIR NOKTASI · BİRLEŞİM ÜRETECİ.

HÜKÜM (gerekçesi HUKUM-CAKISMA-MISIR5-0907.md):
  `misir_himaye` KAZANIR, benim `ortadogu_misir_1923` yamam KAYBEDER —
  ama örtüsü 1922-03-15'te KESİLİR.

🔴 Yama beş kaydın TAMAMINI `misir_himaye`den alır ve yalnız `isg:`
   ucunu düzeltir. Elle yazılmaz: kaynak yamadan OKUNUR.
🔴 VERİ YAZMAZ — `denetim/` altına.
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

HEDEF = ["Süveyş", "Sina güneyi", "Tûr (Sînâ)", "Sefâce", "Kusayr"]
BAGIMSIZ = "1922-03-15"


def oku(yol, ad_alani=None):
    JS = ("const fs=require('fs'),vm=require('vm');const c={window:{}};"
          "vm.createContext(c);vm.runInContext(fs.readFileSync("
          "process.argv[2],'utf8'),c);"
          "const k=Object.keys(c.window).find(x=>Array.isArray(c.window[x]));"
          "process.stdout.write(JSON.stringify(c.window[k]));")
    fd, p = tempfile.mkstemp(suffix=".js")
    os.write(fd, JS.encode("utf-8"))
    os.close(fd)
    r = subprocess.run(["node", p, yol], capture_output=True)
    os.unlink(p)
    assert r.returncode == 0, r.stderr.decode("utf-8", "replace")[:300]
    return json.loads(r.stdout.decode("utf-8"))


HIM = {k["ad"]: k for k in oku("data/yer_yama_misir_himaye.js")}
BEN = {k["ad"]: k for k in oku("data/yer_yama_ortadogu_misir_1923.js")}

KAY = ("TDV `misir` (330.454 kar., kesilmedi) — «İngiltere 28 Şubat "
       "1922'de tek taraflı olarak Mısır'ı bağımsız devlet ilân etti» ve "
       "«Sultan Ahmed Fuâd 15 Mart 1922'de kral (melik) unvanını aldı». "
       "Dört İngiliz çekincesinin HİÇBİRİ toprak devretmiyor "
       "(haberleşme güvenliği · savunma · azınlık hakları · Sudan'ın "
       "yönetimi) ⇒ 1922-03-15'ten sonra `isg:` YAZILMAZ (koordinatör "
       "hükmü, M-3096). 1914-1922 ise HİMAYE: künyenin kendi adı "
       "«Mısır Sultanlığı (İngiliz Himayesi)», penceresi 1914-12-18 → "
       "1922-03-15 ile BİREBİR.")

yama, not_ = [], []
for ad in HEDEF:
    h = HIM.get(ad)
    if h is None:
        not_.append((ad, "🔴 `misir_himaye`de YOK"))
        continue
    kayit = {"ad": ad}
    for alan in ("d", "s", "v", "isg"):
        if alan in h:
            kayit[alan] = [dict(q) for q in h[alan]]
    kesildi = []
    for q in kayit.get("isg", []):
        if q.get("d") == "ingiltere" and q.get("f") == "1914-12-18" \
                and q.get("t", "") > BAGIMSIZ:
            kesildi.append("%s → %s" % (q["t"], BAGIMSIZ))
            q["t"] = BAGIMSIZ
            q["kaynak"] = KAY
    # sıfır/ters dönem sınavı (§8 — Tebriz vakası)
    ters = [q for a in ("d", "s", "v", "isg") for q in kayit.get(a, [])
            if q.get("f") and q.get("t") and q["f"] >= q["t"]]
    if ters:
        not_.append((ad, "🔴 TERS/SIFIR: %s" % ters[:2]))
        continue
    yama.append(kayit)
    b = BEN.get(ad)
    print("── %-14s isg kesildi: %-22s benim yamamdaki 1914-22: %s"
          % (ad[:14], (kesildi[0] if kesildi else "—"),
             next((q.get("d") for q in (b or {}).get("s", [])
                   if q.get("f") == "1914-12-18"), "—")))

print("\n🟢 birleşen kayıt: %d · 🔴 atlanan: %d %s"
      % (len(yama), len(not_), not_))

# C13 ATEŞLEME — sıfır dönem dalı zorlanır
import copy  # noqa: E402
bz = copy.deepcopy(yama[0])
for q in bz.get("isg", []):
    q["t"] = q["f"]
ters = [q for q in bz["isg"] if q["f"] >= q["t"]]
print("═══ C13 ATEŞLEME (sıfır dönem zorlandı): %d yakalandı" % len(ters))
assert ters, "🔴 C13 İHLALİ — sıfır dönem dalı ateşlemedi"

yol = os.path.join(KOK, "denetim", "yer_yama_misir5_0907.js")
with open(yol, "w", encoding="utf-8") as f:
    f.write("// denetim/yer_yama_misir5_0907.js — CAKISMA-0907\n")
    f.write("// KÜME 1 birleşimi · TASLAK · koşu 8 sürüyor, data/ DONUK\n")
    f.write("// Gerekçe: denetim/HUKUM-CAKISMA-MISIR5-0907.md\n")
    f.write("window.YER_YAMA_MISIR5_0907 = ")
    json.dump(yama, f, ensure_ascii=False, indent=1)
    f.write(";\n")
print("\n⇒ %s" % yol)
