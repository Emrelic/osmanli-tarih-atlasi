# -*- coding: utf-8 -*-
"""MERGE HAZIRLIK DURUMU — tek ekran. SALT OKUR. ASCII."""
import io, os, re, sys, subprocess, unicodedata
KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"


def a(s):
    s = str(s).replace("İ", "I").replace("ı", "i").replace("Ş", "S").replace("ş", "s")
    s = s.replace("Ğ", "G").replace("ğ", "g").replace("Ü", "U").replace("ü", "u")
    s = s.replace("Ö", "O").replace("ö", "o").replace("Ç", "C").replace("ç", "c")
    return "".join(c for c in unicodedata.normalize("NFKD", s) if ord(c) < 128)


def p(s=""):
    print(a(s))


D = os.path.join(KOK, "denetim")

p("=== BEKLEYEN ARTEFAKTLAR ===")
yer = [f for f in os.listdir(D) if re.match(r"^yer_yama.*\.js$", f)]
kun = [f for f in os.listdir(D) if f.startswith("YAMA-KUNYE") and f.endswith(".json")]
kro = [f for f in os.listdir(D) if f.startswith(("KRONOLOJI", "ONERI-KRONOLOJI"))
       and f.endswith(".json")]
n_yer = 0
for f in yer:
    s = io.open(os.path.join(D, f), encoding="utf-8", errors="replace").read()
    n_yer += len(re.findall(r'\bad\s*:\s*"', s))
p("  sahiplik yamasi   %2d dosya · %d kayit" % (len(yer), n_yer))
p("  kunye yamasi      %2d dosya" % len(kun))
p("  kronoloji yamasi  %2d dosya" % len(kro))

p("")
p("=== ADIM ⑥ ON SINAVI (aletle, borusuz) ===")
r = subprocess.run([sys.executable, os.path.join(D, "ARAC-KIMLIK-KARSILIGI-0905b.py")],
                   cwd=KOK, capture_output=True, text=True,
                   encoding="utf-8", errors="replace")
for satir in (r.stdout or "").split("\n"):
    if "SONUC" in satir or "kimlik" in satir and "kunyesiz" in satir:
        p("  %s" % satir.strip())
p("  cikis kodu: %d   (1 = hala renksiz kimlik VAR, beklenen)" % r.returncode)

p("")
p("=== ANAHTAR BELGELER ===")
for f in ("oturumlar/MERGE-KONTROL-0905.md",
          "oturumlar/KOSU-SONRASI-KUYRUK.md",
          "denetim/SARTNAME-KAYNAK-DENETIMI-0905.md",
          "BEKLEYENLER.md"):
    yol = os.path.join(KOK, f)
    if os.path.exists(yol):
        n = len(io.open(yol, encoding="utf-8", errors="replace").read().split("\n"))
        p("  %-46s %5d satir" % (f, n))

p("")
p("=== BU GECE EKLENEN ALETLER (denetim/ARAC-*0905*) ===")
for f in sorted(x for x in os.listdir(D)
                if x.startswith("ARAC-") and "0905" in x):
    p("  %s" % f)

p("")
p("=== KOSU ===")
kilit = os.path.join(KOK, ".petek.kilit")
if os.path.exists(kilit):
    p("  .petek.kilit: %s" % io.open(kilit, errors="replace").read().strip()[:40])
dj = os.path.join(KOK, "data", "donemler.js")
import datetime
p("  donemler.js damgasi: %s"
  % datetime.datetime.fromtimestamp(os.path.getmtime(dj)).strftime("%d %b %H:%M"))
p("  (kosu onu SONDA yazar — degismediyse kosu SURUYOR)")
