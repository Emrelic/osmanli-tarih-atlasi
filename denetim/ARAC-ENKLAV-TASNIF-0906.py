# -*- coding: utf-8 -*-
"""ENKLAV TASNIFI — `Degismez 7`nin 651 kaydini SORU LISTESINE cevirir.

Emre: *"1288'den 1923'e kadar devletlerin ortasinda kalan enklav
topraklari tespit edelim ve bu enklavlarin TARIHI GERCEGE UYGUN olup
olmadigini teyid edelim."*

Tespit ZATEN VAR (`Degismez 7`, 651 kayit). Eksik olan TEYIT.
651 kaydi tek tek teyit etmek 651 arastirma demek; bu alet onlari
KIMLIK · YUZYIL · MESAFE · ADA BUYUKLUGU eksenlerinde gruplar, ki
teyit SORU basina yapilsin, KAYIT basina degil.

GIRDI : `denetle.py --ayrinti` ciktisi (ada: satirlari)
CIKTI : gruplanmis tablo — hangi kimlik · hangi donem · ne kadar uzak
"""
import io, os, re, sys, collections

KAYNAK = sys.argv[1] if len(sys.argv) > 1 else "/tmp/d_ayrinti.txt"

def a(s):
    for x, y in [("İ","I"),("ı","i"),("ş","s"),("Ş","S"),("ü","u"),("Ü","U"),
                 ("ö","o"),("Ö","O"),("ç","c"),("Ç","C"),("ğ","g"),("Ğ","G"),
                 ("â","a"),("î","i"),("û","u"),("’","'"),("Â","A")]:
        s = s.replace(x, y)
    return "".join(c if ord(c) < 256 else "?" for c in s)

def p(s=""):
    sys.stdout.write(a(str(s)) + "\n")

# ornek satir:
#   1920-04-23  Sarıkamış   → tbmm-turkiye    156 km  ada: Sarıkamış
RX = re.compile(
    r"(\d{4}-\d{2}-\d{2})\s+(.+?)\s+→\s+(\S+)\s+([\d.,]+)\s*km\s+ada:\s*(.*)$")

kayitlar = []
for satir in io.open(KAYNAK, encoding="utf-8", errors="replace"):
    m = RX.search(satir)
    if not m:
        continue
    gun, yer, kimlik, km, ada = m.groups()
    try:
        kmf = float(km.replace(".", "").replace(",", "."))
    except ValueError:
        kmf = -1.0
    kayitlar.append({
        "gun": gun, "yer": yer.strip(), "kimlik": kimlik,
        "km": kmf, "ada": [x.strip() for x in ada.split(",") if x.strip()],
    })

p("=" * 78)
p("ENKLAV TASNIFI — %d kayit  (kaynak: %s)" % (len(kayitlar), os.path.basename(KAYNAK)))
p("=" * 78)
if not kayitlar:
    p("[!] hic kayit ayristirilamadi — bicim degismis olabilir. DURDUM.")
    sys.exit(1)

# ── KIMLIK ─────────────────────────────────────────────────────────────
p("")
p("### KIMLIGE GORE — hangi devlet kac enklav uretiyor")
say = collections.Counter(k["kimlik"] for k in kayitlar)
for kid, n in say.most_common(18):
    ilk = min(k["gun"] for k in kayitlar if k["kimlik"] == kid)
    son = max(k["gun"] for k in kayitlar if k["kimlik"] == kid)
    ort = sum(k["km"] for k in kayitlar if k["kimlik"] == kid and k["km"] > 0)
    n2 = sum(1 for k in kayitlar if k["kimlik"] == kid and k["km"] > 0)
    p("  %4d  %-26s %s .. %s   ort %s km"
      % (n, kid, ilk[:7], son[:7], ("%.0f" % (ort / n2)) if n2 else "?"))
p("  ... toplam %d ayri kimlik" % len(say))

# ── YUZYIL ─────────────────────────────────────────────────────────────
p("")
p("### YUZYILA GORE")
yy = collections.Counter((int(k["gun"][:4]) // 100 + 1) for k in kayitlar)
for c in sorted(yy):
    p("  %2d. yy : %4d" % (c, yy[c]))

# ── MESAFE ─────────────────────────────────────────────────────────────
p("")
p("### MESAFEYE GORE — uzaklik, kopuklugun BUYUKLUGU")
bant = [(0, 100), (100, 200), (200, 400), (400, 800), (800, 99999)]
for lo, hi in bant:
    n = sum(1 for k in kayitlar if lo <= k["km"] < hi)
    p("  %5d-%-5s km : %4d" % (lo, hi if hi < 99999 else "+", n))

# ── ADA BUYUKLUGU ──────────────────────────────────────────────────────
p("")
p("### ADA BUYUKLUGU — kac yerlesimlik kopuk govde")
ab = collections.Counter(len(k["ada"]) for k in kayitlar)
for n in sorted(ab):
    p("  %2d yerlesim : %4d" % (n, ab[n]))

# ── EN UZAK 15 ─────────────────────────────────────────────────────────
p("")
p("### 🔴 EN UZAK 15 — teyit sirasinin BASI")
for k in sorted(kayitlar, key=lambda x: -x["km"])[:15]:
    p("  %-11s %-24s %-22s %6.0f km  (ada %d)"
      % (k["gun"], k["yer"][:24], k["kimlik"][:22], k["km"], len(k["ada"])))

# ── TEK KIMLIK, COK KAYIT: ayni sorunun tekrari mi? ────────────────────
p("")
p("### AYNI KIMLIK + AYNI ADA — tekrar eden vaka (tek soru, cok kayit)")
grup = collections.Counter(
    (k["kimlik"], tuple(sorted(k["ada"]))) for k in kayitlar)
tekrar = [(g, n) for g, n in grup.items() if n >= 3]
tekrar.sort(key=lambda x: -x[1])
p("  %d ayri (kimlik, ada) cifti 3+ kez tekrar ediyor" % len(tekrar))
for (kid, ada), n in tekrar[:12]:
    p("  %4d  %-24s %s" % (n, kid[:24], ", ".join(ada)[:44]))
p("")
p("=" * 78)
p("SORU SAYISI ~ %d  (651 kayit degil)" % len(grup))
