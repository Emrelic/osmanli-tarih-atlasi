# -*- coding: utf-8 -*-
"""DEGISMEZ3-0907 ㉑ — `savaslar.js` DÖRT KÜMESİNİN ALAN SÖZLEŞMESİ.

Beni ısıran şeyin kendisi: `savas_basi`yı `SAVASLAR`ın alanı sandım, oysa
`ANTLASMALAR`ındı. Alan kümeleri **tahmin edilmiyor, DÖKÜLÜYOR**
(`§11`: *"bir kaydın ALAN KÜMESİ varsayılmaz, DÖKÜLÜR"*).

ÜÇ SORU:
  ① aynı kavram kaç ayrı adla yazılmış?  (`f` ↔ `savas_basi`)
  ② bir kümede olup kardeşinde olmayan alan: EKSİK Mİ, AİT DEĞİL Mİ?
  ③ hangi alan HİÇBİR ALET tarafından okunmuyor?
     🔴 ŞART (koordinatör): `grep` yetmez — okuyan KODU göster.

🟡 PAYDA DAMGASI: `ANTLASMALAR`ı `oku_pencere` **31**, node **41** okuyor
   (benim `oku_pencere` bulgum, sebebi teşhis edilemedi). Bu betik
   **İKİSİYLE DE** ölçer: alan kümeleri ayrışırsa görünmeyen 10 kayıt
   farklı alanlar taşıyor demektir ve bu **ayrı bir bulgudur**.
"""
import io
import json
import os
import re
import subprocess
import sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)
import denetle  # noqa: E402

KUMELER = ("SAVASLAR", "ANTLASMALAR", "SEFERLER", "SERILER")

# ── İKİ OKUYUCU ──────────────────────────────────────────────────────
JS = ("global.window={};const fs=require('fs');"
      "eval(fs.readFileSync('data/savaslar.js','utf8'));"
      "const o={};for(const k of Object.keys(global.window))"
      "if(Array.isArray(global.window[k]))o[k]=global.window[k];"
      "process.stdout.write(JSON.stringify(o));")
p = subprocess.run(["node", "-e", JS], cwd=KOK, capture_output=True)
nd = json.loads(p.stdout.decode("utf-8")) if p.returncode == 0 else {}


def alanlar(kayitlar):
    s = {}
    for r in kayitlar:
        if isinstance(r, dict):
            for a in r:
                s[a] = s.get(a, 0) + 1
    return s


print("=" * 78)
print("`savaslar.js` — DÖRT KÜMENİN ALAN SÖZLEŞMESİ")
print("=" * 78)

py_alan, nd_alan, sayilar = {}, {}, {}
for k in KUMELER:
    S = denetle.oku_pencere(os.path.join(KOK, "data", "savaslar.js"), k)
    py_alan[k] = alanlar(S)
    nd_alan[k] = alanlar(nd.get(k, []))
    sayilar[k] = (len(S), len(nd.get(k, [])))
    print("\n[%s]  oku_pencere %d · node %d %s"
          % (k, len(S), len(nd.get(k, [])),
             "🟡 PAYDA AYRIŞIYOR" if len(S) != len(nd.get(k, [])) else ""))
    for a, n in sorted(py_alan[k].items(), key=lambda x: (-x[1], x[0])):
        tam = "TAM" if n == len(S) else "%d/%d" % (n, len(S))
        print("    %-14s %s" % (a, tam))

# ── PAYDA SINAVI: iki okuyucunun ALAN KÜMESİ ayrışıyor mu? ───────────
print("\n" + "=" * 78)
print("🟡 PAYDA SINAVI — iki okuyucunun ALAN KÜMESİ aynı mı?")
print("=" * 78)
ayrisan = {}
for k in KUMELER:
    a, b = set(py_alan[k]), set(nd_alan[k])
    if a != b:
        ayrisan[k] = {"yalniz_oku_pencere": sorted(a - b),
                      "yalniz_node": sorted(b - a)}
        print("  %-13s 🔴 AYRIŞIYOR · yalnız node: %s" % (k, sorted(b - a)))
    else:
        print("  %-13s ✓ alan kümesi AYNI (payda %d↔%d olsa bile)"
              % (k, sayilar[k][0], sayilar[k][1]))
if not ayrisan:
    print("\n  ⇒ `ANTLASMALAR`ın görünmeyen 10 kaydı YENİ BİR ALAN GETİRMİYOR;")
    print("    eksiklik alan sözleşmesini DEĞİŞTİRMİYOR. (Sıklıklar yine de")
    print("    31 üzerinden — payda damgası duruyor.)")

# ── ① AYNI KAVRAM, AYRI AD ───────────────────────────────────────────
print("\n" + "=" * 78)
print("① AYNI KAVRAM, AYRI AD")
print("=" * 78)
kavram = {
    "BAŞLANGIÇ": {"SEFERLER": "f", "ANTLASMALAR": "savas_basi",
                  "SAVASLAR": None, "SERILER": None},
    "BİTİŞ/TARİH": {"SEFERLER": "t", "ANTLASMALAR": "t",
                    "SAVASLAR": "t", "SERILER": None},
    "ARALIK (metin)": {"SERILER": "aralik"},
}
for kv, esl in kavram.items():
    print("\n  %s" % kv)
    for k in KUMELER:
        ad = esl.get(k, "—")
        var = (ad in py_alan[k]) if ad else False
        n = py_alan[k].get(ad, 0) if ad else 0
        print("    %-13s %-12s %s" % (k, ad or "—",
                                      ("%d/%d" % (n, sayilar[k][0])) if var else
                                      ("YOK" if ad else "")))
print("\n  🔴 BAŞLANGIÇ kavramı ÜÇ AYRI SÖZLEŞME:")
print("     `f` (SEFERLER) · `savas_basi` (ANTLASMALAR) · YOK (SAVASLAR)")
print("     ve `SERILER` onu `aralik` diye SERBEST METİNDE taşıyor.")

# ── ② KÜMEDE VAR, KARDEŞİNDE YOK ─────────────────────────────────────
print("\n" + "=" * 78)
print("② BİR KÜMEDE VAR, KARDEŞİNDE YOK")
print("=" * 78)
tum = set()
for k in KUMELER:
    tum |= set(py_alan[k])
ortak = set(py_alan[KUMELER[0]])
for k in KUMELER[1:]:
    ortak &= set(py_alan[k])
print("  bütün alanlar     : %d" % len(tum))
print("  DÖRDÜNDE DE olan  : %s" % (sorted(ortak) or "—"))
for k in KUMELER:
    ozel = sorted(set(py_alan[k]) - set().union(
        *[set(py_alan[o]) for o in KUMELER if o != k]))
    print("  yalnız %-13s: %s" % (k, ", ".join(ozel) or "—"))

# ── ③ HANGİ ALAN HİÇBİR ALET TARAFINDAN OKUNMUYOR ────────────────────
print("\n" + "=" * 78)
print("③ HANGİ ALAN OKUNUYOR — ve OKUYAN KODU GÖSTER")
print("=" * 78)
# önce: bu kümeleri KİM okuyor
tuketici = []
for kok_dizin in ("arac", "js"):
    for dosya in sorted(os.listdir(os.path.join(KOK, kok_dizin))):
        if not dosya.endswith((".py", ".js")):
            continue
        yol = os.path.join(KOK, kok_dizin, dosya)
        try:
            metin = open(yol, encoding="utf-8").read()
        except Exception:
            continue
        if any(k in metin for k in KUMELER):
            tuketici.append((os.path.join(kok_dizin, dosya), metin))
print("  bu kümeleri ANAN dosya: %s" % ", ".join(t[0] for t in tuketici))

okuyan = {}
for a in sorted(tum):
    yerler = []
    for yol, metin in tuketici:
        # gerçek OKUMA kalıpları — yorum/metin değil
        kaliplar = [r'\.get\(\s*["\']%s["\']' % re.escape(a),
                    r'\[\s*["\']%s["\']\s*\]' % re.escape(a),
                    r'\br\.%s\b' % re.escape(a),
                    r'\bo\.%s\b' % re.escape(a),
                    r'\bs\.%s\b' % re.escape(a)]
        for kal in kaliplar:
            for m in re.finditer(kal, metin):
                sat = metin[:m.start()].count("\n") + 1
                yerler.append("%s:%d" % (yol, sat))
                break
    okuyan[a] = sorted(set(yerler))

hic = [a for a, v in okuyan.items() if not v]
print("\n  OKUNAN ALANLAR:")
for a in sorted(tum):
    if okuyan[a]:
        print("    %-14s %s" % (a, ", ".join(okuyan[a][:3])))
print("\n  🔴 HİÇBİR ALETTE OKUMA KALIBI BULUNAMAYAN: %d" % len(hic))
for a in hic:
    hangi = [k for k in KUMELER if a in py_alan[k]]
    print("    %-14s (kümeler: %s)" % (a, ", ".join(hangi)))
print("\n  ⚠️ Bu bir YOKLUK KANITI DEĞİL: kalıp tabanlı arama, `for a in r`")
print("     gibi dolaylı okumaları GÖRMEZ. Damga: `okuma kalıbı BULUNAMADI`,")
print("     `okunmuyor` DEĞİL. Kesin hüküm için kod tek tek okunmalı.")

json.dump({"_NOT": ("savaslar.js dört kümesinin alan sözleşmesi. Alan "
                    "kümeleri DÖKÜLDÜ, tahmin edilmedi. Sıklıklar "
                    "`oku_pencere` paydasında (ANTLASMALAR 31; node 41 — "
                    "payda ayrışması ayrı kalem)."),
           "payda": {k: {"oku_pencere": sayilar[k][0], "node": sayilar[k][1]}
                     for k in KUMELER},
           "payda_alan_ayrismasi": ayrisan,
           "alanlar": py_alan,
           "dortunde_de": sorted(ortak),
           "okuma_yerleri": okuyan,
           "okuma_kalibi_bulunamayan": hic},
          open(os.path.join(KOK, "denetim", "OLCUM-DEGISMEZ3-ALANSOZ-0907.json"),
               "w", encoding="utf-8", newline=""), ensure_ascii=False, indent=1)
print("\n[YAZILDI] denetim/OLCUM-DEGISMEZ3-ALANSOZ-0907.json")
