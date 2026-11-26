# -*- coding: utf-8 -*-
"""IKINCI GECISIN SURESINI OLCER — Emre'nin istegi (6 Eylul 2026).

SORU: "A kosusu bir cikti verir, sonra B kosusu o ciktinin USTUNE kosar."
Bu modelin butun cazibesi "B dakikalar surer" varsayimina dayaniyor ve
o varsayim OLCULMEDI. Bu alet onu olcer.

🔒 KOSU SURERKEN KOSTURULMAZ. `uret_petek.py` MODUL DUZEYINDE agir is
   yapiyor (kara maskesi :485, nehirler :638, yerlesimler :686, col
   :2681) — ice aktarmak motorun TAMAMINI yukler. Kosu sirasinda
   calistirmak bellegi ikiye katlar ve 6 Eylul'de gorulen 6,2 GB'lik
   tepe zaten RAM'in yarisiydi. ⇒ KOSU BITTIKTEN SONRA.

YONTEM: `data/devletler_harita.js` (A ciktisi) okunur, her devletin her
donemi icin govde YENIDEN KURULUR ve B1/B2/B3 UYGULANIR — motorun KENDI
fonksiyonlariyla, yeniden yazilmadan.

🔴 SONUC BIR ALT SINIRDIR, ve sebebi:
   Bugunku `devletler_harita.js` ZATEN duzeltilmis (B1/B2/B3 govde kurma
   dongusunun icinde uygulaniyor). Duzeltilmis bir govdede
   `delikleri_doldur` DELIK BULAMAZ, `_b2_enklav_birlestir` BIRLESTIRECEK
   ENKLAV bulamaz ⇒ olculen sey TARAMA maliyeti, DUZELTME maliyeti degil.
   Gercek ikinci gecis HAM A uzerinde kosacak ve daha PAHALI olacak.
   ⇒ Bu sayi "en az bu kadar surer" der, "bu kadar surer" DEMEZ.

KULLANIM:  py denetim/ARAC-IKINCI-GECIS-SURE-0906.py [--ornek 40]
"""
import io, os, sys, time, json

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))


def a(s):
    for x, y in [("İ","I"),("ı","i"),("ş","s"),("Ş","S"),("ü","u"),("Ü","U"),
                 ("ö","o"),("Ö","O"),("ç","c"),("Ç","C"),("ğ","g"),("Ğ","G"),
                 ("â","a"),("î","i"),("û","u"),("’","'")]:
        s = s.replace(x, y)
    return "".join(c if ord(c) < 256 else "?" for c in s)


def p(s=""):
    sys.stdout.write(a(str(s)) + "\n")
    sys.stdout.flush()


# ── 0. KOSU SURUYOR MU — sigorta ───────────────────────────────────────
kilit = os.path.join(KOK, ".petek.kilit")
if os.path.exists(kilit):
    metin = io.open(kilit, encoding="utf-8", errors="replace").read()
    import re
    m = re.search(r"pid=(\d+)", metin)
    if m:
        try:
            import subprocess
            ck = subprocess.run(["powershell", "-NoProfile", "-Command",
                                 "if (Get-Process -Id %s -ErrorAction SilentlyContinue) "
                                 "{'CANLI'} else {'OLU'}" % m.group(1)],
                                capture_output=True, text=True, timeout=30)
            if "CANLI" in ck.stdout:
                p("[X] KOSU CALISIYOR (PID %s) — bu olcum motorun TAMAMINI"
                  % m.group(1))
                p("    bellege yukler ve kosuyu tehlikeye atar. DURDUM.")
                sys.exit(1)
        except Exception:
            pass

ORNEK = 40
if "--ornek" in sys.argv:
    ORNEK = int(sys.argv[sys.argv.index("--ornek") + 1])

# ── 1. A ciktisini oku ─────────────────────────────────────────────────
p("=" * 70)
p("IKINCI GECIS SURE OLCUMU")
p("=" * 70)
t0 = time.time()
import subprocess
js = subprocess.run(
    ["node", "-e",
     "const fs=require('fs'),vm=require('vm');const c={window:{}};"
     "vm.createContext(c);"
     "vm.runInContext(fs.readFileSync('data/devletler_harita.js','utf8'),c);"
     "process.stdout.write(JSON.stringify({h:c.window.DEVLET_HARITA,"
     "p:c.window.DEVLET_PARCALAR}));"],
    cwd=KOK, capture_output=True, text=True, timeout=600)
veri = json.loads(js.stdout)
DH, DP = veri["h"], veri["p"]
p("  A ciktisi okundu: %d devlet · %d parca · %.1f sn"
  % (len(DH), len(DP), time.time() - t0))

# ── 2. motoru yukle (AGIR — ayri olculur) ──────────────────────────────
p("")
p("  motor yukleniyor (uret_petek modul duzeyi — AGIR)...")
t1 = time.time()
os.environ.setdefault("MOTOR_OLCUM", "1")
import uret_petek as UP
yukleme = time.time() - t1
p("  motor yuklendi: %.1f sn  (%.1f dk)" % (yukleme, yukleme / 60.0))

from shapely.geometry import Polygon, MultiPolygon
from shapely.ops import unary_union

# ── 3. govdeleri kur ve B1/B2/B3 uygula ────────────────────────────────
p("")
p("  ornek: %d devlet-donem" % ORNEK)
isler = []
for d in DH:
    for dn in (d.get("dnm") or []):
        isler.append((d["id"], dn))
p("  toplam devlet-donem: %d   (ornek %d ile olculup OLCEKLENECEK)"
  % (len(isler), ORNEK))

import random
random.Random(20260906).shuffle(isler)
sec = isler[:ORNEK]

t_kur, t_b1, t_b23 = 0.0, 0.0, 0.0
basarili = 0
for kid, dn in sec:
    try:
        ta = time.time()
        halkalar = [DP[i] for i in dn.get("g", []) if i < len(DP)]
        if not halkalar:
            continue
        gov = unary_union([Polygon(h).buffer(0) for h in halkalar if len(h) >= 4])
        t_kur += time.time() - ta

        ta = time.time()
        g1 = UP.delikleri_doldur(gov)
        t_b1 += time.time() - ta

        ta = time.time()
        UP.gosterim_duzelt(g1)
        t_b23 += time.time() - ta
        basarili += 1
    except Exception as e:
        p("    [!] %s atlandi: %s" % (a(kid), a(str(e))[:60]))

p("")
p("=" * 70)
if not basarili:
    p("  [X] hicbir ornek olculemedi")
    sys.exit(1)
oran = len(isler) / float(basarili)
p("  olculen ornek        : %d / %d" % (basarili, len(sec)))
p("  govde kurma          : %6.2f sn  -> tahmini toplam %7.1f sn (%5.1f dk)"
  % (t_kur, t_kur * oran, t_kur * oran / 60))
p("  B1 delikleri_doldur  : %6.2f sn  -> tahmini toplam %7.1f sn (%5.1f dk)"
  % (t_b1, t_b1 * oran, t_b1 * oran / 60))
p("  B2+B3 gosterim_duzelt: %6.2f sn  -> tahmini toplam %7.1f sn (%5.1f dk)"
  % (t_b23, t_b23 * oran, t_b23 * oran / 60))
top = (t_kur + t_b1 + t_b23) * oran
p("  " + "-" * 66)
p("  IKINCI GECIS TAHMINI : %7.1f sn  (%5.1f dk)  + motor yukleme %.1f dk"
  % (top, top / 60, yukleme / 60))
p("")
p("  🔴 BU BIR ALT SINIRDIR: girdi ZATEN duzeltilmis, yani B1 delik")
p("     bulamiyor ve B2 birlestirecek enklav bulamiyor. Olculen sey")
p("     TARAMA maliyeti; gercek ikinci gecis HAM A uzerinde daha pahali.")
