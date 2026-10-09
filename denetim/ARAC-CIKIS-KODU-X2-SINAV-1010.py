# -*- coding: utf-8 -*-
"""ARAC-CIKIS-KODU-X2-SINAV-1010 — v2 (ⓑ) sınavı: bayat soruyu tanıyan iki araç.

Sözleşme (CLAUDE.md §3): 0 temiz · 1 ihlal · 2 ölçülemedi; ihlal ölçülemediden önce gelir.
Öncül kalkmışsa (reçete devletler.js'e işlenmiş / dosya GIRDI_DOSYALARI'nda) araç 2 verir
ve SEBEBİ ADIYLA basar; öncül geri gelirse (id silinir / dosya listeden çıkar) GERÇEK
ölçüme döner — araç gerileme sezicisi olarak yaşar.

Veriye YAZMAZ: KAMERIKA kopyası geçici dizinde, A-OKYANUSYA bellekte sarmalanır.
PROJE KÖKÜNDEN:  py denetim/ARAC-CIKIS-KODU-X2-SINAV-1010.py      (çıkış 0 = hepsi geçti)
"""
import io
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PY = sys.executable
ENV = dict(os.environ, PYTHONIOENCODING="utf-8")
KAMERIKA = "denetim/ARAC-KAMERIKA-0903-kunye-sina.py"
OKYAN = "denetim/A-OKYANUSYA-0078-sina.py"
RECETE = ["denetim/KUNYE-KAMERIKA-0903.json",
          "denetim/KUNYE-KAMERIKA-0903-parti2.json",
          "denetim/KUNYE-KAMERIKA-0903-parti3.json",
          "denetim/KUNYE-KAMERIKA-0903-parti4.json"]
SONUC = []


def kos(arg, cwd=KOK):
    p = subprocess.run([PY] + arg, cwd=cwd, capture_output=True, text=True,
                       encoding="utf-8", errors="replace", env=ENV)
    return p.returncode, p.stdout


def sor(ad, kosul, ayrinti=""):
    SONUC.append(bool(kosul))
    print("%s %s%s" % ("✓" if kosul else "✗ KALDI", ad, ("  [" + ayrinti + "]") if ayrinti else ""))


def sonuc_satiri(out):
    m = [l for l in out.splitlines() if l.startswith("SONUÇ:")]
    return m[-1] if m else "(SONUÇ satırı yok)"


# ---------------------------------------------------------------- KAMERIKA
print("── KAMERIKA-kunye-sina ──")
rc, out = kos([KAMERIKA])
s = sonuc_satiri(out)
print("   " + s)
sor("K1 bugün: çıkış 2", rc == 2, "rc=%d" % rc)
sor("K2 bugün: sebep ADIYLA (46/46 zaten devletler.js'te, soru bayat)",
    "ÖLÇÜLEMEDİ: 46 reçetenin tamamı (46/46) zaten devletler.js'te — soru bayat" in s)

ids = [k["id"] for d in RECETE for k in json.load(io.open(os.path.join(KOK, d), encoding="utf-8"))]
HEDEF = ids[0]


def kamerika_kopya(degistir):
    """Geçici dizin: denetim/ (araç + reçeteler) + data/devletler.js (değiştirilmiş)."""
    t = tempfile.mkdtemp(prefix="x2sinav-")
    os.makedirs(os.path.join(t, "denetim"))
    os.makedirs(os.path.join(t, "data"))
    for d in RECETE + [KAMERIKA]:
        shutil.copy(os.path.join(KOK, d), os.path.join(t, d))
    s = io.open(os.path.join(KOK, "data/devletler.js"), encoding="utf-8").read()
    s2 = degistir(s)
    assert s2 != s, "kopya değişmedi"
    io.open(os.path.join(t, "data/devletler.js"), "w", encoding="utf-8").write(s2)
    return t


# K3-K5: bir id SİLİNİRSE (gerileme) → o reçete gerçek ölçüme girer, 45'i "zaten işlenmiş"
t = kamerika_kopya(lambda s: re.sub(r'id\s*:\s*"%s"' % re.escape(HEDEF),
                                    'id:"%s-SILINDI"' % HEDEF, s, count=1))
try:
    rc, out = kos([KAMERIKA], cwd=t)
finally:
    shutil.rmtree(t, ignore_errors=True)
s = sonuc_satiri(out)
print("   [%s silindi] %s" % (HEDEF, s))
sor("K3 id silinince: gerçek ölçüme 1 reçete girer",
    "gerçek ölçüme giren: 1" in out)
sor("K4 id silinince: kalan 45 AYRICA sayılır ('hepsi' değil 'ayrıca')",
    "ayrıca 45 reçete zaten işlenmiş" in out and "tamamı" not in out)
sor("K5 id silinince: çıkış 0/1 (gerçek ölçüm), 2 DEĞİL", rc in (0, 1), "rc=%d" % rc)

# K6: aynı id + FARKLI ad = gerçek çakışma → ⑥ öter, çıkış 1 (2 ile yutulmaz)
t = kamerika_kopya(lambda s: re.sub(r'(id\s*:\s*"%s"\s*,\s*ad\s*:\s*")' % re.escape(HEDEF),
                                    r'\1BAŞKA BİR DEVLET ', s, count=1))
try:
    rc, out = kos([KAMERIKA], cwd=t)
finally:
    shutil.rmtree(t, ignore_errors=True)
print("   [%s ad değişti] %s" % (HEDEF, sonuc_satiri(out)))
sor("K6 aynı id + farklı ad: İHLAL (çıkış 1, ZATEN VAR öttü)",
    rc == 1 and ("%s" % HEDEF) in out and "ZATEN VAR" in out, "rc=%d" % rc)

# ------------------------------------------------------------- A-OKYANUSYA
print("── A-OKYANUSYA-0078-sina ──")
rc, out = kos([OKYAN])
s = sonuc_satiri(out)
print("   " + s)
sor("O1 bugün: çıkış 2", rc == 2, "rc=%d" % rc)
sor("O2 bugün: sebep ADIYLA (GIRDI'de, 61 nokta kendisiyle)",
    "ÖLÇÜLEMEDİ: a78_okyanusya GIRDI_DOSYALARI'nda, 61 nokta kendisiyle eşleşiyor" in s)
sor("O3 bugün: kendisiyle eşleşme HATA sayılmadı (GERÇEK: 0 hata)", "GERÇEK: 0 hata" in out)

SARMAL = r'''
import sys, os, runpy, copy
KOK = %r
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi
D = "yerlesimler_a78_okyanusya.js"
MOD = %r
if MOD == "cikar":
    girdi.GIRDI_DOSYALARI.remove(D)
elif MOD == "bozuk":
    asil = girdi.oku_dosya
    def oku(f, *a, **k):
        r = asil(f, *a, **k)
        if f == D:
            r = copy.deepcopy(r); r[0]["kaynak"] = ""
        return r
    girdi.oku_dosya = oku
sys.argv = [os.path.join(KOK, "denetim", "A-OKYANUSYA-0078-sina.py")]
runpy.run_path(sys.argv[0], run_name="__main__")
'''
for mod in ("cikar", "bozuk"):
    f = tempfile.NamedTemporaryFile("w", suffix=".py", delete=False, encoding="utf-8")
    f.write(SARMAL % (KOK, mod)); f.close()
    try:
        rc_m, out_m = kos([f.name])
    finally:
        os.unlink(f.name)
    print("   [%s] %s" % (mod, sonuc_satiri(out_m)))
    if mod == "cikar":
        sor("O4 a78 GIRDI'den çıkarılınca: gerçek ölçüm, çıkış 0 (temiz)",
            rc_m == 0 and "SONUÇ: temiz" in out_m, "rc=%d" % rc_m)
    else:
        sor("O5 canlıdayken gerçek ihlal (KAYNAKSIZ): İHLAL ölçülemediden önce → çıkış 1",
            rc_m == 1 and "KAYNAKSIZ" in out_m, "rc=%d" % rc_m)

# -------------------------------------------- v1'in öteki iki aracı değişmez
print("── v1'in öteki iki aracı (davranış) ──")
rc, out = kos(["denetim/NOKTA-KAFKAS-0077-sina.py"])
sor("N1 NOKTA-KAFKAS bugün: çıkış 0 (kusur 0)", rc == 0 and "kusur: 0" in out, "rc=%d" % rc)
rc, out = kos(["denetim/ARAC-KIMLIK-SINA-0903.py"])
sor("M1 KIMLIK-SINA argümansız: çıkış 2", rc == 2, "rc=%d" % rc)
td = tempfile.mkdtemp(prefix="x2kimlik-")
try:
    iyi = os.path.join(td, "iyi.json")
    kotu = os.path.join(td, "kotu.json")
    json.dump([{"d": "avustralya", "f": "1910-01-01", "t": "1920-01-01"}], io.open(iyi, "w", encoding="utf-8"))
    json.dump([{"d": "yok-boyle-devlet", "f": "1910-01-01", "t": "1920-01-01"}], io.open(kotu, "w", encoding="utf-8"))
    rc1, _ = kos(["denetim/ARAC-KIMLIK-SINA-0903.py", iyi])
    rc2, _ = kos(["denetim/ARAC-KIMLIK-SINA-0903.py", kotu])
finally:
    shutil.rmtree(td, ignore_errors=True)
sor("M2 KIMLIK-SINA geçerli JSON: çıkış 0", rc1 == 0, "rc=%d" % rc1)
sor("M3 KIMLIK-SINA künyesiz d: çıkış 1", rc2 == 1, "rc=%d" % rc2)

print("\nSINAV: %d/%d geçti" % (sum(SONUC), len(SONUC)))
sys.exit(0 if all(SONUC) else 1)
