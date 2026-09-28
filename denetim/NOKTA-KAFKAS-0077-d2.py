# -*- coding: utf-8 -*-
# NOKTA-KAFKAS-0077 — iki noktamı (Çayeli, Gümüşhane) girdi listesine DOKUNMADAN bellekte
# ekleyip Değişmez 2'yi denetle.py'nin KENDİ işleviyle sorar: d:/v: (İHLAL kolu) ve s: (2s borç).
# Öngörü (ölçümden ÖNCE, 28 Eyl): d: kırılmaları 4, açık 0 (Bitlis 1916-03-01, Erzincan 07-24,
#   Trabzon 1918-02-24, Erzurum 03-12 pencerede). 2s: yeni açık ≤ 2 (yer şartı Çayeli/Gümüşhane'yi
#   anan madde ister, kronolojide yok).
# ATEŞLEME: --atesle Çayeli'nin 1916-03-05 kırılmasını 1917-06-15'e (±30 günde madde olmayan bir
#   güne) taşır; d: açık ≥ 1 çıkmazsa ölçü geçersizdir.
import sys, os, io, contextlib
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi
import denetle

O = denetle.olaylari_yukle()
if "--taslak" in sys.argv:
    js = open(os.path.join(KOK, "denetim", "NOKTA-KAFKAS-0077-kronoloji.js"), encoding="utf-8").read()
    taslak = girdi._cevir(js, "OLAYLAR_P77_KAFKAS")
    etiketler = {e for o in O for e in (o.get("etiket") or [])}
    for o in taslak:
        for e in o.get("etiket") or []:
            if e not in etiketler:
                print("   SÖZLÜKTE OLMAYAN ETİKET:", e, "·", o["b"])
    print(f"taslak: {len(taslak)} madde okundu")
    O = O + taslak
with contextlib.redirect_stdout(io.StringIO()):
    Y = girdi.yukle(sessiz=True)
benim = girdi.oku_dosya("yerlesimler_p77_kafkas.js")
for y in benim:
    for alan, deger in girdi.VARSAYILAN.items():
        y.setdefault(alan, [] if deger == [] else deger)
    y["_kaynak"] = "yerlesimler_p77_kafkas.js"
if "--atesle" in sys.argv:
    benim[0]["d"][0]["t"] = "1917-06-15"
    benim[0]["s"][1]["f"] = "1917-06-15"
Yc = [y for y in Y if y.get("_kaynak") not in denetle.KUYRUK_DOSYALARI]
adlar = {y["ad"] for y in benim}

k0, a0 = denetle.degismez2(Yc, O)
k1, a1 = denetle.degismez2(Yc + benim, O)
print(f"d:/v:  kırılma {len(k0)} → {len(k1)} · açık {len(a0)} → {len(a1)}")
for a in a1:
    if a not in a0:
        print("   YENİ AÇIK:", a)
s0, sa0 = denetle.degismez2(Yc, O, ("s",), yer_sarti=True)
s1, sa1 = denetle.degismez2(Yc + benim, O, ("s",), yer_sarti=True)
print(f"s: (2s ham, kapsam-dışı ayıklanmadan) kırılma {len(s0)} → {len(s1)} · açık {len(sa0)} → {len(sa1)}")
for a in sa1:
    if a not in sa0:
        print("   YENİ 2s AÇIK:", str(a)[:200])
