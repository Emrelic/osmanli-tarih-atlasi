# -*- coding: utf-8 -*-
"""② EKSİK KÜNYE — b sürümü. İLK SÜRÜM KENDİ ÜZERİNDE ÇÜRÜDÜ.

🔴 a sürümü 22 polity / 138 dönem dedi. Yanlış: eşleştiricim
   "Cezayir Ocaklığı" ile künye "Cezayir Ocağı" (`cezayir-ocagi`)
   arasındaki `Ocaklığı ↔ Ocağı` farkını bağlayamadı — alt-dizgi
   içermesi iki yönde de tutmuyor.
   ⇒ `§4` Türkçe yazım ekseninin EK BİÇİMİ: aynı kökün farklı
     TÜRETİMİ. Normalleştirici çözmez; bunu ancak KÖK EŞLEŞMESİ
     ya da bir sözlük çözer.

Bu sürüm HÜKÜM VERMEZ: her etiket için ADAY künyeleri listeler,
kararı okumaya bırakır. "Eşleşme bulmak, doğru şeyi bulmak değildir."
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
       "û": "u", "’": "'", "‘": "'", "ć": "c", "č": "c", "š": "s",
       "í": "i", "ý": "y", "ř": "r", "ž": "z"}


def norm(s):
    s = "".join(CEV.get(c, c) for c in s)
    s = unicodedata.normalize("NFKD", s)
    s = "".join(c for c in s if not unicodedata.combining(c))
    return re.sub(r"[^a-z0-9]+", " ", s.lower()).strip()


def kok(t):
    """Kaba Türkçe kök — `Ocaklığı`/`Ocağı` gibi türetimleri buluşturur."""
    t = re.sub(r"(ligi|liği|lik|lığı|lugu|luk)$", "", t)
    t = re.sub(r"(gi|ği|si|si|i|u|a|e)$", "", t)
    return t[:5]


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

# künye → ilk-token kök dizini
dizin = {}
for k in KUNYE:
    for alan in ("id", "ad", "harita"):
        v = k.get(alan)
        if isinstance(v, str) and v:
            tok = norm(v).split()
            if tok:
                dizin.setdefault(kok(tok[0]), set()).add(
                    "%s (%s)" % (k.get("id"), k.get("ad", "")[:28]))

Y = girdi.yukle(sessiz=True)
vd = [(z["ad"], p) for z in Y for p in (z.get("v") or [])]
etiket = {}
for ad, p in vd:
    kk = (p.get("k") or "").strip()
    if kk:
        etiket.setdefault(kk, []).append(ad)

print("═══ `v:` ETİKETİ → KÜNYE ADAYLARI  (hüküm YOK, ADAY var)")
print("   `v:` dönemi %d · benzersiz etiket %d · künye %d\n"
      % (len(vd), len(etiket), len(KUNYE)))

adaysiz = []
for et, yerler in sorted(etiket.items(), key=lambda x: -len(x[1])):
    ana = re.sub(r"\s*\(.*?\)\s*$", "", et).strip()
    tok = norm(ana).split()
    aday = dizin.get(kok(tok[0]), set()) if tok else set()
    im = "🟡" if aday else "🔴"
    print("   %s %-40s %2d  %s"
          % (im, et[:40], len(yerler),
             ("aday: " + " · ".join(sorted(aday))[:66]) if aday
             else "ADAY YOK"))
    if not aday:
        adaysiz.append((et, len(yerler), sorted(set(yerler))))

print("\n═══ 🔴 HİÇ ADAYI OLMAYAN: %d etiket · %d dönem"
      % (len(adaysiz), sum(a[1] for a in adaysiz)))
for et, n, yerler in adaysiz:
    araliklar = sorted({(p.get("f"), p.get("t")) for a, p in vd
                        if (p.get("k") or "").strip() == et})
    print("\n   ── %-42s %d dönem" % (et, n))
    print("      yerleşim: %s" % ", ".join(yerler[:7]))
    print("      aralık  : %s" % " ".join("%s→%s" % x
                                          for x in araliklar[:5]))
