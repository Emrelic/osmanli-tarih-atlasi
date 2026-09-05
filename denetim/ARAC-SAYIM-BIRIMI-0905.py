# -*- coding: utf-8 -*-
"""M-3029 dogrulamasi: `urabi-pasa` 110 uc = KAC BENZERSIZ IDDIA?
Ve ayni sisme oteki slug'larda da var mi? SALT OKUR. ASCII."""
import io, os, sys, collections, unicodedata
KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)


def a(s):
    s = str(s).replace("İ", "I").replace("ı", "i").replace("Ş", "S").replace("ş", "s")
    s = s.replace("Ğ", "G").replace("ğ", "g").replace("Ü", "U").replace("ü", "u")
    s = s.replace("Ö", "O").replace("ö", "o").replace("Ç", "C").replace("ç", "c")
    return "".join(c for c in unicodedata.normalize("NFKD", s) if ord(c) < 128)


def p(s=""):
    print(a(s))


import girdi
Y = girdi.yukle()

SLUG_OK = set("abcdefghijklmnopqrstuvwxyz0123456789-")
# slug -> {"uc": n, "demet": set((uc_adi, gun, kimlik, kategori)), "yer": set()}
d = collections.defaultdict(lambda: {"uc": 0, "demet": set(), "yer": set()})

for y in Y:
    ad = y.get("ad", "?")
    for kat in ("d", "s", "v", "isg"):
        for don in (y.get(kat) or []):
            k = don.get("kaynak")
            if not isinstance(k, str) or not k:
                continue
            k = k.strip()
            if " " in k or not set(k.lower()) <= SLUG_OK:
                continue
            if k.lower().startswith("bulunamad"):
                continue
            kim = don.get("d") or ("OSMANLI" if kat == "d" else kat)
            for alan in ("f", "t"):
                g = don.get(alan)
                if not g or g in ("1281-01-01", "1923-10-29") or g.endswith("-01-01"):
                    continue
                d[k]["uc"] += 1
                d[k]["demet"].add((alan, g, str(kim), kat))
                d[k]["yer"].add(ad)

p("=== SLUG BASINA: UC sayisi vs BENZERSIZ IDDIA ===")
p("%-24s %6s %8s %8s %8s" % ("slug", "uc", "IDDIA", "yerlesim", "sisme"))
top_uc = top_id = 0
for k, v in sorted(d.items(), key=lambda x: -x[1]["uc"]):
    n, m = v["uc"], len(v["demet"])
    top_uc += n
    top_id += m
    p("%-24s %6d %8d %8d %7.0fx" % (k[:24], n, m, len(v["yer"]), n / max(1, m)))

p("")
p("TOPLAM   uc %d · BENZERSIZ IDDIA %d · SISME %.1f kat"
  % (top_uc, top_id, top_uc / max(1, top_id)))

p("")
p("=== urabi-pasa DEMETLERI (M-3029'un cekirdek iddiasi) ===")
for t in sorted(d.get("urabi-pasa", {}).get("demet", [])):
    p("  %s=%s  kimlik=%s  kategori=%s" % t)
p("  yerlesim sayisi: %d" % len(d.get("urabi-pasa", {}).get("yer", set())))
