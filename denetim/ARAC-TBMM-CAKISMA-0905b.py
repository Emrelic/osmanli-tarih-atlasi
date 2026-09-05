# -*- coding: utf-8 -*-
"""M-3068 ⑤ — TBMM çakışmaları, ARACIN KENDİ KURALIYLA.

🔴 İlk sürüm (`ARAC-TBMM-CAKISMA-0905.py`) 44 kayıt saydı, araç 19 diyor.
   Fark kuralı kendim yazmamdan geldi. Aracın gerçek ölçütü
   (`_sahiplik_uygula.py:267-273`):
       çakışma = AYNI alanı ≥2 dosya YAZIYOR **ve** değerler FARKLI
       (tek yazan ⇒ çatışma YOK)
   ve `kaynak` tek başına ayrışıyorsa VERİ İNER, yalnız uyarı basılır.
   Bu sürüm o kuralı taşır — ve bloke kayıtta HİÇBİR alanın inmediğini
   de (`:531 continue`) hesaba katar.

🔴 VERİ YAZMAZ.
"""
import io
import json
import os
import re
import subprocess
import sys
import tempfile

KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
os.chdir(KOK)
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
sys.path.insert(0, os.path.join(KOK, "arac"))

DIZIN = os.path.join(KOK, "data")
DOSYALAR = sorted(f for f in os.listdir(DIZIN)
                  if re.match(r"^yer_yama.*\.js$", f))

CATISABILIR = ("d", "s", "v", "isg", "m", "kaynak", "bos", "neden", "not",
               "kur")
VERI_ALANI = ("d", "s", "v", "isg", "m")

JS = """
const fs=require('fs'),vm=require('vm'),out={};
for (const f of process.argv.slice(2)) {
  const ctx={window:{}}; vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(f,'utf8'), ctx);
  let kayit=[];
  for (const k of Object.keys(ctx.window)) {
    const v=ctx.window[k];
    if (Array.isArray(v)) kayit=kayit.concat(v);
  }
  out[f.split(/[\\\\/]/).pop()]=kayit;
}
process.stdout.write(JSON.stringify(out));
"""
fd, yol = tempfile.mkstemp(suffix=".js")
os.write(fd, JS.encode("utf-8"))
os.close(fd)
ham = subprocess.run(["node", yol] + [os.path.join(DIZIN, f)
                                      for f in DOSYALAR],
                     capture_output=True)
os.unlink(yol)
assert ham.returncode == 0, ham.stderr.decode("utf-8", "replace")[:400]
YAMA = json.loads(ham.stdout.decode("utf-8"))

ix = {}
for dosya, kayitlar in YAMA.items():
    for k in kayitlar:
        ad = k.get("ad") or k.get("yerlesim")
        if ad:
            ix.setdefault(ad, {})[dosya] = k

TBMM = re.compile(r"tbmm")


def catisan_alanlar(d):
    out = []
    for alan in CATISABILIR:
        yaz = [f for f in d if alan in d[f]]
        if len(yaz) < 2:
            continue
        deg = {json.dumps(d[f][alan], sort_keys=True, ensure_ascii=False)
               for f in yaz}
        if len(deg) > 1:
            out.append(alan)
    return out


bloke = {}
for ad, d in ix.items():
    if len(d) < 2:
        continue
    ca = catisan_alanlar(d)
    if ca and any(a in VERI_ALANI for a in ca):
        bloke[ad] = (d, ca)

tb = {ad: v for ad, v in bloke.items() if any(TBMM.search(f) for f in v[0])}

print("═══ ARACIN KURALIYLA — bloke kayıt: %d · TBMM'li: %d"
      % (len(bloke), len(tb)))
say = {}
for d, _ in tb.values():
    for f in d:
        say[f] = say.get(f, 0) + 1
for f, n in sorted(say.items(), key=lambda x: -x[1]):
    print("      %-34s %d" % (f, n))


def don(k, kat):
    return [(p.get("f"), p.get("t"), p.get("d")) for p in (k.get(kat) or [])]


SKALER = ("kaynak", "not", "k", "m", "bos", "neden", "kur")
ust, kayip, celiski, esit = [], [], [], []

print("\n═══ KAYIT KAYIT")
for ad in sorted(tb):
    d, ca = tb[ad]
    tf = [f for f in d if TBMM.search(f)][0]
    of = [f for f in d if not TBMM.search(f)]
    tk = d[tf]
    print("\n── %-26s çatışan alan: %s" % (ad, ", ".join(ca)))
    kapsam = True
    for f in of:
        ok = d[f]
        for alan in ca:
            if alan not in VERI_ALANI:
                continue
            a, b = don(tk, alan), don(ok, alan)
            print("   %-8s TBMM %d dönem · %-24s %d dönem"
                  % (alan, len(a), f, len(b)))
            eks = [p for p in b if p not in a]
            faz = [p for p in a if p not in b]
            if eks:
                kapsam = False
                print("      🔴 TBMM'de OLMAYAN: %s"
                      % " ".join("%s→%s:%s" % p for p in eks[:4]))
            if faz:
                print("      🟢 TBMM'nin EKLEDİĞİ: %s"
                      % " ".join("%s→%s:%s" % p for p in faz[:4]))
            # (c) aynı gün aralığı, FARKLI kimlik
            for pb in b:
                for pa in a:
                    if pb[0] == pa[0] and pb[1] == pa[1] and pb[2] != pa[2]:
                        celiski.append("%s %s: %s→%s  %s vs %s"
                                       % (ad, alan, pb[0], pb[1], pb[2], pa[2]))
        # (b) bloke olduğu için İNMEYEN skaler
        for a in SKALER:
            if d[f].get(a) and not tk.get(a):
                kayip.append((ad, f, a, str(d[f][a])[:60]))
    print("   ⇒ (a) TBMM ÜST KÜME: %s" % ("🟢 EVET" if kapsam else "🔴 HAYIR"))
    (ust if kapsam else esit).append(ad)

print("\n═══ ÖZET — M-3068 ⑤")
print("   (a) TBMM üst küme  : %d / %d" % (len(ust), len(tb)))
if esit:
    print("       🔴 ÜST KÜME DEĞİL: %s" % ", ".join(esit))
print("   (b) bloke yüzünden İNMEYEN skaler alan: %d" % len(kayip))
for ad, f, a, v in kayip:
    print("       %-24s %-26s %-7s %s" % (ad, f, a, v))
print("   (c) ÇELİŞKİ: %d" % len(celiski))
for c in celiski:
    print("       🔴 %s" % c)
