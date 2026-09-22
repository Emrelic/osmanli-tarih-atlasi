# -*- coding: utf-8 -*-
"""KÜME 2 — Şehrizor · Halepçe.

🔴 BULGU: `d:` ve `s:` ÜÇ YAMADA DA AYNI. Çakışma yalnız `kaynak:` ve
   `neden:`te — yani AÇIKLAMA alanlarında.
   Aracın muafiyeti (`_sahiplik_uygula.py:439`) TAM OLARAK
   `catisan_alanlar == ["kaynak"]` — `neden` de çatışınca dal
   ateşlemiyor ve kayıt BLOKE oluyor.
⇒ Bu bir TARİHÎ KARAR DEĞİL. Üç açıklama da MEŞRU ve BİRBİRİNİ
  TAMAMLIYOR (manda 1921'i · fetret 1340'ı · uyg3 Osmanlı-Safevî
  döngüsünü anlatıyor). Çare: metinleri BİRLEŞTİR, her parçayı
  KAYNAĞIYLA BİRLİKTE taşı (`§11`: metin birleştirmek dayanakları
  birleştirmek DEĞİLDİR).
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

HEDEF = ["Halepçe", "Şehrizor"]
VERI = ("d", "s", "v", "isg", "m")

DOSYALAR = sorted(f for f in os.listdir("data")
                  if re.match(r"^yer_yama.*\.js$", f))
JS = """
const fs=require('fs'),vm=require('vm'),out={};
for (const f of process.argv.slice(2)) {
  const c={window:{}}; vm.createContext(c);
  vm.runInContext(fs.readFileSync(f,'utf8'), c);
  let a=[]; for (const k of Object.keys(c.window)) {
    const v=c.window[k]; if (Array.isArray(v)) a=a.concat(v); }
  out[f.split(/[\\\\/]/).pop()]=a;
}
process.stdout.write(JSON.stringify(out));
"""
fd, p = tempfile.mkstemp(suffix=".js")
os.write(fd, JS.encode("utf-8"))
os.close(fd)
r = subprocess.run(["node", p] + [os.path.join("data", f)
                                  for f in DOSYALAR], capture_output=True)
os.unlink(p)
assert r.returncode == 0, r.stderr.decode("utf-8", "replace")[:300]
YAMA = json.loads(r.stdout.decode("utf-8"))

yama = []
for ad in HEDEF:
    kim = {f: k for f, ks in YAMA.items() for k in ks
           if (k.get("ad") or k.get("yerlesim")) == ad}
    print("\n════════ %s — %d yama" % (ad, len(kim)))

    # ① VERİ ALANLARI GERÇEKTEN AYNI MI — hükmün ÖN KOŞULU
    ayri = []
    for alan in VERI:
        yaz = {f: k[alan] for f, k in kim.items() if alan in k}
        if len(yaz) < 2:
            continue
        if len({json.dumps(v, sort_keys=True, ensure_ascii=False)
                for v in yaz.values()}) > 1:
            ayri.append(alan)
    print("   VERİ alanı ayrışması : %s" % (ayri or "🟢 YOK — hüküm geçerli"))
    if ayri:
        print("   🔴 HÜKÜM GEÇERSİZ — bu bir gerçek veri farkı, ayrı bakılmalı")
        continue

    # ② veriyi en zengin yamadan al (hepsi aynı, ama alan SAYISI farklı)
    kayit = {"ad": ad}
    for alan in VERI:
        for f in sorted(kim):
            if alan in kim[f]:
                kayit[alan] = kim[f][alan]
                break

    # ③ AÇIKLAMALARI BİRLEŞTİR — her parça KAYNAĞIYLA
    for alan in ("kaynak", "neden"):
        parca = []
        for f in sorted(kim):
            v = kim[f].get(alan)
            if v:
                parca.append("[%s] %s" % (f.replace("yer_yama_", "")
                                          .replace(".js", ""), v))
        if parca:
            kayit[alan] = ("§ BİRLEŞTİRİLDİ (CAKISMA-0907) — veri alanları "
                           "üç yamada da AYNI, çatışma yalnız bu alandaydı. "
                           "Her parça KENDİ dosyasıyla birlikte taşındı. || "
                           + "  ||  ".join(parca))
            print("   %-7s %d parça birleşti (%d kar.)"
                  % (alan, len(parca), len(kayit[alan])))
    yama.append(kayit)

yol = os.path.join(KOK, "denetim", "yer_yama_kume2_0907.js")
with open(yol, "w", encoding="utf-8") as f:
    f.write("// denetim/yer_yama_kume2_0907.js — CAKISMA-0907\n")
    f.write("// Şehrizor · Halepçe · TASLAK · koşu 8 sürüyor\n")
    f.write("// Gerekçe: denetim/HUKUM-CAKISMA-KUME2-0907.md\n")
    f.write("window.YER_YAMA_KUME2_0907 = ")
    json.dump(yama, f, ensure_ascii=False, indent=1)
    f.write(";\n")
print("\n🟢 birleşen kayıt: %d\n⇒ %s" % (len(yama), yol))
