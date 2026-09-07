# -*- coding: utf-8 -*-
"""DEGISMEZ 7 — 660 -> 663. YENI UC ENKLAV HANGISI?

Sahiplik yamasi 215 kayit indirdi ve `Degismez 7` UC ARTTI. Bu, FAZ 1'in
Sarikamis vakasinin aynisi olabilir: veri denetimleri kaydi tek tek dogru
bulur, GEOMETRI kayitlar ARASINDAKI tutarsizligi gorur.

Bu betik HEAD (yama ONCESI) ile calisma kopyasini (yama SONRASI)
karsilastirir ve YENI DOGAN enklavlari adiyla verir.
Aleti TAKLIT ETMEZ — `denetle.degismez7`u iki veri kumesiyle KOSTURUR.

VERIYE DOKUNMAZ.
"""
import json
import os
import subprocess
import sys
import tempfile

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))

import girdi     # noqa: E402
import denetle   # noqa: E402


def anahtar(x):
    return "%s|%s|%s" % (x.get("gun"), x.get("yerlesim"), x.get("sahip"))


# ─── SONRA (calisma kopyasi) ──────────────────────────────────────────
Y2 = girdi.yukle(sessiz=True)
if len(Y2) < 3000:
    raise SystemExit("SESSIZ SIFIR: %d" % len(Y2))
i2, m2 = denetle.degismez7(Y2)
print("SONRA (calisma kopyasi): %d ihlal · muaf=%s" % (len(i2), m2))

# ─── ONCE (HEAD) — dosyalari gecici bir dizine cikar ──────────────────
gec = tempfile.mkdtemp(prefix="d7_once_")
dosyalar = list(girdi.GIRDI_DOSYALARI)
os.makedirs(os.path.join(gec, "data"), exist_ok=True)
cikti_yok = []
for f in dosyalar:
    r = subprocess.run(["git", "show", "HEAD:data/%s" % f],
                       cwd=KOK, capture_output=True)
    if r.returncode != 0:
        cikti_yok.append(f)
        continue
    with open(os.path.join(gec, "data", f), "wb") as fh:
        fh.write(r.stdout)
if cikti_yok:
    print("UYARI: HEAD'de bulunamayan dosya: %s" % ", ".join(cikti_yok[:5]))

# 🔴 `os.chdir` ÇALIŞMIYOR — ve ilk sürümde bunu YAPTIM.
#   `girdi.KOK` MODÜL DOSYASININ konumundan hesaplanıyor (girdi.py:47),
#   `import` anında ve BİR KEZ. `os.chdir` + `reload` onu değiştirmez ⇒
#   "ÖNCE" ölçümü de ÇALIŞMA KOPYASINI okudu ve alet 663 ↔ 663 basıp
#   "yeni 0 · kapanan 0" dedi. O bir kıyas değil, verinin KENDİSİYLE
#   karşılaştırılmasıydı. §11: *"bir ölçümü doğrulayan şey ikinci bir
#   ölçüm değil, ölçümün YOKLUĞUNDA ne olduğunu gösteren KONTROLDÜR."*
#   ⇒ Okunan dizin AÇIKÇA yönlendirilir, ve yönlendiğini SINARIZ.
eski_data = girdi.DATA
girdi.DATA = os.path.join(gec, "data")
try:
    Y1 = girdi.yukle(sessiz=True)
finally:
    girdi.DATA = eski_data
if len(Y1) < 3000:
    raise SystemExit("SESSIZ SIFIR (ONCE): %d" % len(Y1))
# 🔴 YONLENDIRMENIN SINAVI — iki kume GERCEKTEN farkli mi?
#   Ayni cikarsa ya HEAD ile calisma kopyasi ayni, ya YONLENDIRME
#   TUTMADI. Ikisi ayni gorunur; ayirt etmeden hukum verilmez.
im1 = json.dumps([(y.get("ad"), y.get("d"), y.get("s"), y.get("v"),
                   y.get("isg")) for y in Y1], sort_keys=True, ensure_ascii=False)
im2 = json.dumps([(y.get("ad"), y.get("d"), y.get("s"), y.get("v"),
                   y.get("isg")) for y in Y2], sort_keys=True, ensure_ascii=False)
print("iki kume AYNI mi: %s  (ONCE %d nokta · SONRA %d nokta)"
      % ("EVET — yonlendirme TUTMADI ya da veri degismemis" if im1 == im2
         else "hayir, FARKLI (yonlendirme tuttu)", len(Y1), len(Y2)))
i1, m1 = denetle.degismez7(Y1)
print("ONCE  (HEAD)            : %d ihlal · muaf=%s" % (len(i1), m1))

a1 = {anahtar(x): x for x in i1}
a2 = {anahtar(x): x for x in i2}
yeni = [a2[k] for k in a2 if k not in a1]
kapanan = [a1[k] for k in a1 if k not in a2]

print("\n" + "=" * 68)
print("  YENI DOGAN enklav : %d" % len(yeni))
print("  KAPANAN enklav    : %d" % len(kapanan))
print("=" * 68)
for x in yeni[:20]:
    print("  🔴 %-10s %-22s %-20s ada=%s ana=%s km=%s kova=%s"
          % (x.get("gun"), x.get("yerlesim"), x.get("sahip"),
             x.get("ada"), x.get("ana"), x.get("ana_km"), x.get("kova")))
if len(yeni) > 20:
    print("  … +%d" % (len(yeni) - 20))
for x in kapanan[:6]:
    print("  🟢 KAPANDI %-10s %-22s %s"
          % (x.get("gun"), x.get("yerlesim"), x.get("sahip")))
