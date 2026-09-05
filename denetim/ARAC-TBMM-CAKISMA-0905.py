# -*- coding: utf-8 -*-
"""M-3068 ⑤ — TBMM çakışmalarını KAYIT BAZLI ve ALAN ALAN ölçer.

Koordinatörün ölçümü KÜME bazlıydı ("45 kayıtta EVET"); bu ölçüm
üç soruyu kayıt kayıt soruyor:
   (a) tbmm tarafı gerçekten ÜST KÜME mi?
   (b) tbmm tarafının KAYBETTİRDİĞİ alan var mı (kaynak/not/k/m)?
   (c) çelişki var mı?

🔴 VERİ YAZMAZ. Yalnız ölçer ve basar.
🔴 Yama dosyalarını REGEX'le değil, node+vm ile İZOLE BAĞLAMDA okur
   (§7: iki dosya aynı `window.X` adını kullanırsa tek bağlamda
   `eval` sessizce ezer).
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

DIZIN = os.path.join(KOK, "data")
DOSYALAR = sorted(f for f in os.listdir(DIZIN)
                  if re.match(r"^yer_yama.*\.js$", f))

# ── yama dosyalarını node ile, HER BİRİ AYRI BAĞLAMDA oku ──────────
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
ham = subprocess.run(
    ["node", yol] + [os.path.join(DIZIN, f) for f in DOSYALAR],
    capture_output=True)
os.unlink(yol)
if ham.returncode != 0:
    print("🔴 node HATA:", ham.stderr.decode("utf-8", "replace")[:400])
    sys.exit(1)
YAMA = json.loads(ham.stdout.decode("utf-8"))

# ── ad → {dosya: kayıt} ────────────────────────────────────────────
ix = {}
for dosya, kayitlar in YAMA.items():
    for k in kayitlar:
        ad = k.get("ad") or k.get("yerlesim")
        if ad:
            ix.setdefault(ad, {})[dosya] = k

TBMM = re.compile(r"tbmm")
cak = {ad: d for ad, d in ix.items()
       if len(d) > 1 and any(TBMM.search(f) for f in d)}

print("═══ TBMM ÇAKIŞMASI — KAYIT BAZLI")
print("   çakışan kayıt : %d" % len(cak))
say = {}
for d in cak.values():
    for f in d:
        say[f] = say.get(f, 0) + 1
for f, n in sorted(say.items(), key=lambda x: -x[1]):
    print("      %-34s %d" % (f, n))


def donemler(k, kat):
    return [dict(p) for p in (k.get(kat) or [])]


def ozet(p):
    return "%s→%s%s" % (p.get("f"), p.get("t"),
                        ":" + p["d"] if p.get("d") else "")


SKALER = ("kaynak", "not", "k", "m", "bos", "neden")

print("\n═══ KAYIT KAYIT — (a) üst küme mi · (b) kayıp alan · (c) çelişki")
ust, kayip_var, celiski = 0, [], []
for ad in sorted(cak):
    d = cak[ad]
    tf = [f for f in d if TBMM.search(f)]
    of = [f for f in d if not TBMM.search(f)]
    tk = d[tf[0]]
    print("\n── %s" % ad)
    print("   TBMM  %-30s d:%s | s:%s"
          % (tf[0],
             " ".join(ozet(p) for p in donemler(tk, "d")) or "—",
             " ".join(ozet(p) for p in donemler(tk, "s")) or "—"))
    kayb = []
    for f in of:
        ok = d[f]
        print("   ÖTEKİ %-30s d:%s | s:%s"
              % (f,
                 " ".join(ozet(p) for p in donemler(ok, "d")) or "—",
                 " ".join(ozet(p) for p in donemler(ok, "s")) or "—"))
        # (b) ötekinde olup tbmm'de OLMAYAN skaler alan
        for a in SKALER:
            if ok.get(a) and not tk.get(a):
                kayb.append("%s.%s=%s" % (f, a, str(ok[a])[:44]))
        # (c) çelişki: aynı gün aralığında FARKLI kimlik
        for po in donemler(ok, "s"):
            for pt in donemler(tk, "s"):
                if (po.get("f") == pt.get("f") and po.get("t") == pt.get("t")
                        and po.get("d") != pt.get("d")):
                    celiski.append("%s: %s → %s vs %s"
                                   % (ad, ozet(po), po.get("d"), pt.get("d")))
    # (a) üst küme sınavı: ötekinin her döneminin TBMM'de karşılığı var mı
    kapsam = True
    for f in of:
        for kat in ("d", "s", "v", "isg"):
            for po in donemler(d[f], kat):
                if not any(pt.get("f") == po.get("f")
                           and pt.get("d") == po.get("d")
                           for pt in donemler(tk, kat)):
                    kapsam = False
    print("   ⇒ (a) TBMM üst küme : %s" % ("🟢 EVET" if kapsam else "🔴 HAYIR"))
    if kapsam:
        ust += 1
    if kayb:
        kayip_var.append((ad, kayb))
        print("   ⇒ (b) 🔴 KAYBOLAN ALAN: %s" % " · ".join(kayb))
    else:
        print("   ⇒ (b) 🟢 kaybolan alan yok")

print("\n═══ ÖZET")
print("   (a) TBMM üst küme      : %d / %d" % (ust, len(cak)))
print("   (b) alan kaybettiren   : %d" % len(kayip_var))
print("   (c) ÇELİŞKİ            : %d" % len(celiski))
for c in celiski:
    print("      🔴 %s" % c)
