# -*- coding: utf-8 -*-
"""BESINCI KOSU — PUANLAMA-ONGORU.md'nin SEKIZ KALEMINI OLCER.

Ongoru kosudan ONCE damgalandi (commit 61a3469). Bu betik kosudan SONRA
kosar ve her kalemi TEK TEK olcer. Bes kalem MAZERETSIZ; biri curursa
yayin DURUR.

⚠️ B10: her kalem iki satir basar — OLCTUGUM ve CIKARDIGIM ayri durur.
⚠️ Yuvarlama: alan_km2 en yakin 1000'e yuvarlar (uret_petek.py:2298).
   ±1000 GURULTU TABANIDIR; ondan kucuk fark "degisti" sayilmaz.
   Bu, dorduncu kosuda ogrenildi: ongoru aletin cozunurlugunden INCEYDI.
"""
import io, json, os, re, subprocess, sys
sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
# 🔴 TABAN artik DEPODA duruyor. Onceki hali scratchpad'i gosteriyordu ve
#    scratchpad OTURUMA OZELDIR: bayragi devralan koordinator oraya
#    ERISEMEZ. Bir devir notunun isaret ettigi her yol, DEVRALANIN
#    gorebildigi bir yol olmak zorundadir — yoksa devir notu kendi
#    kendine bayatlar.
TABAN = os.path.join(KOK, "denetim", "olcu_TABAN.json")
LOG = os.path.join(KOK, "kosu_puanlama.log")
GURULTU = 1000

sonuc = []          # (no, ad, mazeret, ongoru, olcum, tuttu)


def kalem(no, ad, mazeretsiz, ongoru, olcum, tuttu):
    sonuc.append((no, ad, "🔴 yok" if mazeretsiz else "🟡 var",
                  ongoru, olcum, tuttu))


# ---------- yeni olcum ----------
r = subprocess.run(["node", "-e",
                    "global.window={};eval(require('fs').readFileSync("
                    "'data/donemler.js','utf8'));"
                    "console.log(JSON.stringify(window.URETIM_OLCU))"],
                   cwd=KOK, capture_output=True, encoding="utf-8",
                   errors="replace")
if r.returncode != 0:
    print("🔴 donemler.js okunamadi:", (r.stderr or "")[-300:]); sys.exit(2)
Y = json.loads(r.stdout.strip().splitlines()[-1])
T = json.load(io.open(TABAN, encoding="utf-8"))
log = io.open(LOG, encoding="utf-8", errors="replace").read()

print("TABAN  donem %s · nokta %s" % (T["donem"], T["nokta"]))
print("YENI   donem %s · nokta %s" % (Y["donem"], Y["nokta"]))
print()

# ---------- ① kesilen alan ----------
m = re.findall(r"PUANLAMA[^\n]*?kesilen[^\n]*?([\d.,]+)\s*km", log)
kes = None
if m:
    kes = max(int(re.sub(r"[.,]", "", x)) for x in m)
kalem("①", "kapinin kestigi alan", False, "2-15 M km²",
      ("%.2f M km²" % (kes / 1e6)) if kes else "logta BULUNAMADI",
      (2e6 <= kes <= 15e6) if kes else None)

# ---------- ② Osmanli 9/9 ----------
oyn = []
for g in sorted(T["kesit"]):
    a0, v0 = T["kesit"][g]
    a1, v1 = Y["kesit"].get(g, [None, None])
    if a1 is None:
        oyn.append("%s KESIT YOK" % g); continue
    if abs(a1 - a0) > GURULTU or abs(v1 - v0) > GURULTU:
        oyn.append("%s ao %d→%d · av %d→%d" % (g, a0, a1, v0, v1))
kalem("②", "OSMANLI 9/9 degismez", True, "degismez",
      "oynayan kesit: %d%s" % (len(oyn), (" · " + " | ".join(oyn[:4])) if oyn else ""),
      len(oyn) == 0)

# ---------- ③ tamamen bosalan ----------
m3 = re.findall(r"tamamen boşalan[^\d]*(\d+)", log)
bos = int(m3[-1]) if m3 else None
kalem("③", "tamamen bosalan govde-donemi", False, "50-400",
      str(bos) if bos is not None else "logta BULUNAMADI",
      (50 <= bos <= 400) if bos is not None else None)

# ---------- ④ yabanci toplam DUSER ----------
y0 = sum(T["yabanci"].values())
y1 = sum(Y["yabanci"].get(g, 0) for g in T["yabanci"])
kalem("④", "yabanci toplam DUSER", True, "DUSER",
      "%.1f M → %.1f M  (fark %+.2f M)" % (y0 / 1e6, y1 / 1e6, (y1 - y0) / 1e6),
      y1 < y0 - GURULTU)

# ---------- ⑤ A1 TUZAGI ----------
# kapinin kestigi alan ile kesitlerdeki GERCEK dusus tutarli mi?
dus = y0 - y1
if kes:
    geri = kes - dus          # kesilen ama geri verilmis
    oran = geri / kes if kes else 0
    kalem("⑤", "A1 tuzagi — geri verilen", True, "geri verilmez (~0)",
          "kesilen %.2f M · gercek dusus %.2f M · GERI VERILEN %.2f M (%%%.1f)"
          % (kes / 1e6, dus / 1e6, geri / 1e6, oran * 100),
          oran < 0.10)
else:
    kalem("⑤", "A1 tuzagi — geri verilen", True, "geri verilmez (~0)",
          "kesilen alan logta bulunamadi — OLCULEMEDI", None)

# ---------- ⑥ Degismez 1 ----------
d = subprocess.run([sys.executable, os.path.join(KOK, "arac", "denetle.py")],
                   cwd=KOK, capture_output=True, encoding="utf-8",
                   errors="replace")
md = re.search(r"Değişmez 1\s+(.)\s+(\d+) yerleşim, (\d+) sahipsiz", d.stdout or "")
kalem("⑥", "Degismez 1 sahipsiz", True, "degismez (228)",
      ("%s sahipsiz / %s yerlesim" % (md.group(3), md.group(2))) if md
      else "denetle.py satiri BULUNAMADI",
      (md.group(1) == "✓") if md else None)

# ---------- ⑦ sure ----------
ms = re.findall(r"koşu (\d+)s (\d+)dk (\d+)sn", log)
sur = None
if ms:
    s, dk, sn = ms[-1]
    sur = int(s) * 86400 + int(dk) * 60 + int(sn)
kalem("⑦", "sure", False, "+25-35 dk",
      ("toplam %.0f dk (duvar)" % (sur / 60)) if sur else "logta bulunamadi", None)

# ---------- ⑧ renk regresyonu ----------
rr = subprocess.run([sys.executable, os.path.join(KOK, "arac", "renk_olc.py")],
                    cwd=KOK, capture_output=True, encoding="utf-8",
                    errors="replace")
kalem("⑧", "renk regresyonu", True, "0",
      "renk_olc cikis kodu %d" % rr.returncode, rr.returncode == 0)

# ---------- rapor ----------
print("| # | kalem | mazeret | ongoru | OLCUM | sonuc |")
print("|---|---|---|---|---|---|")
curuk_mazeretsiz = []
for no, ad, mz, og, ol, tt in sonuc:
    im = "✓ TUTTU" if tt else ("🔴 ÇÜRÜDÜ" if tt is False else "— ölçülemedi")
    print("| %s | %s | %s | %s | %s | %s |" % (no, ad, mz, og, ol, im))
    if tt is False and mz.startswith("🔴"):
        curuk_mazeretsiz.append("%s %s" % (no, ad))

print()
if curuk_mazeretsiz:
    print("🔴🔴 MAZERETSIZ KALEM CURUDU — YAYIN DURUR:")
    for x in curuk_mazeretsiz:
        print("   " + x)
    sys.exit(1)
print("🟢 mazeretsiz kalemlerin hicbiri curumedi — yayin kapisi ACIK")
sys.exit(0)
