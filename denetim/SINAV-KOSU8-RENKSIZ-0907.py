# -*- coding: utf-8 -*-
u"""KOŞU BİTİNCE KAÇ KİMLİK RENKSİZ KALACAK?
SINAV-KOSU8-0907  ·  7 Eylül 2026

🔴 ÖNGÖRÜ ÖLÇÜMDEN ÖNCE DAMGALANDI:
   `denetim/ONGORU-SINAV-KOSU8-PROVA-0907.md`
   Ö-V3 renksiz ≠17 · Ö-V4 `rus-amerika` o kümede

══════════════════════════════════════════════════════════════════════════
🔴 KÜME TANIMI BİR SEÇİMDİR — VE BU PROJE ONU BİR KEZ YANLIŞ SEÇTİ
══════════════════════════════════════════════════════════════════════════
`CLAUDE.md` ölçülmüş bir vaka kaydediyor:
```
                       harita-or-id (mevcut)   id ∪ harita (önerilen)
künyesi var, rengi yok        63  ✓                96  🔴 +33 YANLIŞ
```
Sebep: `bosna-kralligi` gibi künyelerin `harita:` alanı BAŞKA anahtara
bakar — kendi renklerine ihtiyaçları YOKTUR. Birleşim onları «rengi
eksik» sayardı.
⇒ Bu betik **İKİ TANIMI DA** ölçer ve ikisini de basar. Tek sayı
  vermez; hangi tanımın hangi soruyu cevapladığını yazar.

VE ASIL SORU (1.MURAT): *"koşu bittiğinde kaç kimlik renksiz kalacak?"*
⇒ Haritayı ilgilendiren küme **VERİDE KULLANILAN** kimliklerdir; künyesi
  olup veride kullanılmayan bir kimlik **harita deliği açmaz** (`§1.5`:
  «29 sessiz borç — künye var, veride yok»).

KOŞULUŞ
    py denetim/SINAV-KOSU8-RENKSIZ-0907.py
    py denetim/SINAV-KOSU8-RENKSIZ-0907.py --atesle
"""
from __future__ import unicode_literals

import io
import os
import re
import subprocess
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def node_oku(betik):
    ham = subprocess.run(["node", "-e", betik], cwd=KOK,
                         capture_output=True, timeout=600)
    return ham.stdout.decode("utf-8", "replace"), ham.returncode


def boyalar():
    u"""`renkler.py`nin BOYALAR sözlüğü — ast ile, regex DEĞİL."""
    import ast
    with io.open(os.path.join(KOK, "arac", "renkler.py"),
                 encoding="utf-8") as f:
        agac = ast.parse(f.read())
    for d in ast.walk(agac):
        if isinstance(d, ast.Assign):
            for h in d.targets:
                if isinstance(h, ast.Name) and h.id == "BOYALAR":
                    try:
                        return ast.literal_eval(d.value)
                    except Exception:                # noqa: BLE001
                        return None
    return None


def veride_kullanilan():
    u"""`d:`/`s:`/`v:`/`isg:` içinde geçen kimlikler — girdi.py'den."""
    ham = subprocess.run(
        ["py", "-c",
         "import sys,json;sys.path.insert(0,'arac');import girdi\n"
         "Y=girdi.yukle(sessiz=True)\n"
         "S=set()\n"
         "for y in Y:\n"
         "  for a in ('s','isg'):\n"
         "    for p in (y.get(a) or []):\n"
         "      if p.get('d'): S.add(p['d'])\n"
         "sys.stdout.write(json.dumps(sorted(S)))"],
        cwd=KOK, capture_output=True, timeout=600)
    m = ham.stdout.decode("utf-8", "replace")
    i = m.find("[")
    if i < 0:
        return None
    import json
    return set(json.loads(m[i:]))


def kunyeler():
    u"""(id kümesi, harita: kümesi) — devletler.js'ten NODE ile."""
    import json
    cikti, kod = node_oku(
        "global.window={};eval(require('fs').readFileSync("
        "'data/devletler.js','utf8'));"
        "const D=global.window.DEVLETLER||[];"
        "process.stdout.write(JSON.stringify({"
        "id:D.map(d=>d.id).filter(Boolean),"
        "harita:D.map(d=>d.harita).filter(Boolean)}));")
    i = cikti.find("{")
    if kod != 0 or i < 0:
        return (None, None)
    d = json.loads(cikti[i:])
    return (set(d["id"]), set(d["harita"]))


def atesleme():
    t = []

    def de(ad, bekle, olc):
        t.append((ad, bekle, olc, bekle == olc))

    b = boyalar()
    de("BOYALAR ast ile okunuyor", True, isinstance(b, dict) and len(b) > 100)
    de("BOYALAR bir hex taşıyor", True,
       any(isinstance(v, (list, tuple)) and any(
           isinstance(x, type(u"")) and x.startswith("#") for x in v)
           for v in list(b.values())[:20]) if b else False)
    kid, khar = kunyeler()
    de("künye id kümesi dolu", True, bool(kid) and len(kid) > 100)
    de("künye harita: kümesi dolu", True, bool(khar) and len(khar) > 10)
    de("iki küme AYNI DEĞİL (harita: bir dolaylama)", True,
       bool(kid) and bool(khar) and kid != khar)
    return t


def main():
    if "--atesle" in sys.argv:
        print("C13 ② ATEŞLEME\n")
        d = atesleme()
        kotu = 0
        for ad, b, o, ok in d:
            print(("  🟢 " if ok else "  🔴 ") + ad.ljust(44) +
                  "beklenen %r · ölçülen %r" % (b, o))
            kotu += (not ok)
        print("\n%d/%d dal ateşledi" % (len(d) - kotu, len(d)))
        return 1 if kotu else 0

    B = boyalar()
    if not B:
        print("⚫ ÖLÇÜLEMEDİ — BOYALAR okunamadı")
        return 2
    V = veride_kullanilan()
    KID, KHAR = kunyeler()
    if V is None or KID is None:
        print("⚫ ÖLÇÜLEMEDİ — veri ya da künye okunamadı")
        return 2

    print("═" * 78)
    print("RENKSİZ KİMLİK — koşu bitince kaç kimlik BOYANMAYACAK?")
    print("═" * 78)
    print("BOYALAR (renkler.py)      : %d" % len(B))
    print("veride kullanılan kimlik  : %d   (`s:`/`isg:` içindeki `d:`)" % len(V))
    print("künye `id`                : %d" % len(KID))
    print("künye `harita:`           : %d" % len(KHAR))
    print("")
    # ── TANIM 1: HARİTAYI İLGİLENDİREN — veride kullanılan ──────────────
    t1 = sorted(V - set(B))
    print("🔴 TANIM 1 — VERİDE KULLANILAN ama BOYALAR'da YOK : %d" % len(t1))
    print("   (harita DELİĞİ açan küme — `§1.5`in «RENKSİZ künye» satırı)")
    for a in t1[:25]:
        print("      %s" % a)
    if len(t1) > 25:
        print("      … %d kimlik daha" % (len(t1) - 25))
    print("")
    # ── TANIM 2: künye ∪ harita − BOYALAR (CLAUDE.md'nin UYARDIĞI) ──────
    t2 = sorted((KID | KHAR) - set(B))
    print("🟡 TANIM 2 — (künye `id` ∪ `harita:`) − BOYALAR : %d" % len(t2))
    print("   ⚠️ `CLAUDE.md` bu tanımın 33 YANLIŞ ürettiğini ölçmüş:")
    print("      `harita:` alanı BAŞKA anahtara bakan künyeler kendi")
    print("      renklerine İHTİYAÇ DUYMAZ. Bu sayı bir ÜST SINIRDIR.")
    print("")
    # ── kesişim: ikisinde de olan = en güvenli çekirdek ─────────────────
    ortak = sorted(set(t1) & set(t2))
    print("🟢 İKİ TANIMDA DA ÇIKAN (en güvenli çekirdek) : %d" % len(ortak))
    for a in ortak[:20]:
        print("      %s" % a)
    print("")
    print("─" * 78)
    print("ÖNGÖRÜ SINAVI (denetim/ONGORU-SINAV-KOSU8-PROVA-0907.md)")
    ra = "rus-amerika"
    for et, kos, ol in (
            ("Ö-V3  renksiz != 17", len(t1) != 17, len(t1)),
            ("Ö-V4  rus-amerika kümede", ra in t1 or ra in t2,
             "TANIM1 %s · TANIM2 %s" % (ra in t1, ra in t2))):
        print("  %-26s %s   ölçülen %s"
              % (et, "🟢 TUTTU" if kos else "🔴 ÇÜRÜDÜ", ol))
    print("")
    print("🔴 TEK SAYI VERİLMİYOR: iki tanım iki ayrı soruyu cevaplıyor.")
    print("   TANIM 1 «harita deliği açar mı», TANIM 2 «künye eksiksiz mi».")
    return 0


if __name__ == "__main__":
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.exit(main())
