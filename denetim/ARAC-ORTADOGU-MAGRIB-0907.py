# -*- coding: utf-8 -*-
"""39 MAĞRİB GÜNÜ — dayanaklandırma. **KÜNYE ÖNCE** (⑱'in kuralı).

Sıra:
  ① KÜNYE ÇAPRAZ KONTROLÜ — gün `devletler.js`te bir künyenin `f:`/`t:`i
     olarak geçiyor mu? (⑱: sekiz günün altısında künye veriden daha
     kesin bir gün taşıyordu)
     🟡 Ama künyenin günü BİR KAYNAK DEĞİLDİR (`§4`) — bu bir ÇAPRAZ
     KONTROL, bir dayanak değil. Damgası ayrı.
  ② BU GECE ZATEN ÖLÇÜLENLER — kendi turlarımdan gelen TDV alıntıları
  ③ kalanlar → TDV

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

# ── bu gece KENDİ turlarımda TDV'den ölçtüklerim
OLCULEN = {
    "1881-05-12": ("🟢 TDV `tunus` BİREBİR — «12 Mayıs 1881'de Tunus beyi "
                   "ile Bardo Antlaşması'nı imzalayarak bu eyaleti kendi "
                   "himayelerine aldıklarını duyurdular»"),
    "1837-10-13": ("🟢 TDV `cezayir` BİREBİR — «Fransızlar … Ahmed Bey'in "
                   "denetiminde bulunan Kostantîne şehrini ele geçirdiler "
                   "(13 Ekim 1837)»"),
    "1830-07-05": ("🟡 TDV `cezayir` BAŞKA GÜN veriyor: «14 Haziran 1830» "
                   "(çıkarma). 5 Temmuz Cezayir'in TESLİMİ — ÇELİŞKİ "
                   "DEĞİL, farklı olay. Gün TDV'de ADIYLA geçmiyor."),
    "1844-03-04": ("⚪ ÖLÇÜLEMEDİ — TDV `cezayir` bu günü VERMİYOR "
                   "(İsly 14 Ağustos · Tanca 10 Eylül 1844 veriyor). "
                   "İkinci kaynak ARANMADI."),
}

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
KUN = json.loads(r.stdout.decode("utf-8"))

# gün → künye eşleşmesi
GUN_KUNYE = {}
for k in KUN:
    for alan in ("f", "t"):
        g = k.get(alan)
        if g:
            GUN_KUNYE.setdefault(g, []).append("%s.%s (%s)"
                                               % (k["id"], alan,
                                                  (k.get("ad") or "")[:26]))

# defterden 39 günü al
DEF = json.load(open("denetim/DAYANAK-GUNLER-0907.json", encoding="utf-8"))
kayit = DEF if isinstance(DEF, list) else DEF.get("gunler") or DEF.get("kayit")

Y = girdi.yukle(sessiz=True)
MAG = [z for z in Y if z.get("lat") is not None
       and 19 <= z["lat"] <= 38 and -18 <= z["lon"] <= 26]
MAGAD = {z["ad"] for z in MAG}


def magrib_mi(g):
    n = 0
    for z in MAG:
        for kat in ("d", "s", "v", "isg"):
            for q in (z.get(kat) or []):
                if q.get("f") == g or q.get("t") == g:
                    n += 1
                    break
    return n


if isinstance(kayit, dict):
    gunler = sorted(kayit.keys())
else:
    gunler = sorted({x.get("gun") or x.get("t") for x in kayit
                     if isinstance(x, dict)})

hedef = [(magrib_mi(g), g) for g in gunler]
hedef = sorted([x for x in hedef if x[0] > 0], reverse=True)

print("═══ MAĞRİB GÜNLERİ — %d gün (defter %d gün taşıyor)"
      % (len(hedef), len(gunler)))
print("\n%-12s %5s  %-34s %s" % ("GÜN", "nokta", "KÜNYE ÇAPRAZ", "DAYANAK"))
say = {"künye": 0, "ölçülen": 0, "açık": 0}
for n, g in hedef[:40]:
    ku = GUN_KUNYE.get(g)
    d = OLCULEN.get(g)
    if d:
        say["ölçülen"] += 1
    elif ku:
        say["künye"] += 1
    else:
        say["açık"] += 1
    print("%-12s %5d  %-34s %s"
          % (g, n, (", ".join(ku)[:34] if ku else "—"),
             d[:52] if d else ("🟡 künye çaprazı VAR, TDV YOK" if ku
                               else "🔴 AÇIK")))
print("\n   🟢 TDV ile ölçülmüş : %d" % say["ölçülen"])
print("   🟡 künye çaprazı var : %d  (çapraz kontrol, KAYNAK DEĞİL)" % say["künye"])
print("   🔴 tamamen açık      : %d" % say["açık"])
