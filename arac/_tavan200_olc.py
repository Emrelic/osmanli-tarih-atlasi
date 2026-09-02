# -*- coding: utf-8 -*-
"""TAVAN 200 ÖNGÖRÜSÜNÜ ÖLÇ — koşu bittikten SONRA koşulur.

`denetim/ONGORU-TAVAN-200.md` yedi kalem damgalamış ve kabul ölçütünü de
ÖNCEDEN yazmış. Bu betik o yedi kalemi ölçer; hiçbirini yorumlamaz,
YALNIZ SAYIYI getirir — hüküm koordinatörün.

🔴 Öngörünün kendi uyarısı: her kalemin yanında "hangi çıktıdan, hangi
BİRİMDE okuyacağım" yazmalı. Aşağıda her ölçümün kaynağı satır satır
yazılı; okunamayan kalem `ÖLÇÜLEMEDİ` diye basılır, ASLA "temiz" diye
değil ve ASLA "çürüdü" diye değil.

kullanım:  py arac/_tavan200_olc.py [kosu.log]
"""
import io, os, re, sys, glob, json, subprocess

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(KOK)

LOG = sys.argv[1] if len(sys.argv) > 1 else "kosu_2eylul.log"
print("=" * 66)
print("TAVAN 200 — ÖNGÖRÜ ÖLÇÜMÜ    log: %s" % LOG)
print("=" * 66)

if not os.path.exists(LOG):
    sys.exit("🔴 log bulunamadı: %s" % LOG)
ham = io.open(LOG, encoding="utf-8", errors="replace").read()
print("log: %d karakter\n" % len(ham))


def ara(desen, etiket, bayrak=0):
    """Logdan tek satır çek. Bulunamazsa ÖLÇÜLEMEDİ — 'yok' değil."""
    m = re.search(desen, ham, bayrak)
    if m:
        print("  🟢 %-34s %s" % (etiket, m.group(0).strip()[:110]))
        return m
    print("  ⚪ %-34s ÖLÇÜLEMEDİ (log bu satırı basmıyor)" % etiket)
    return None


print("### ③④ TAVAN'IN KENDİ SATIRLARI  (kaynak: koşu logu)")
ara(r"[^\n]*petek kısal[^\n]*", "kısalan petek")
ara(r"[^\n]*sahipsizleş[^\n]*", "serbest kalan alan")
ara(r"[^\n]*yetim yüz[^\n]*", "yetim yüz → komşuya")
ara(r"[^\n]*A1 tavan[^\n]*", "A1 tavanı")
ara(r"[^\n]*PUANLAMA KAPISI[^\n]*", "puanlama kapısı")

print("\n### ⑦ ÇÖL TAVANI  (öngörü: ATIL kalır, 200 < 300)")
ara(r"[^\n]*[çÇ]öl tavan[^\n]*", "çöl tavanı")
ara(r"[^\n]*COL_TAVAN[^\n]*", "COL_TAVAN")

print("\n### DOĞRULAMA SATIRI  (§9: bu satır GÖRÜLMELİ)")
ara(r"[^\n]*Doğrulama[^\n]*", "doğrulama")

# ---- ⑤ Değişmez 1 + ⑥ Osmanlı alanı: donemler.js'ten ----
print("\n### ⑥ OSMANLI ALANI — dokuz kesit  (kaynak: data/donemler.js)")
JS = r"""
const fs=require('fs');
global.window={};
try{eval(fs.readFileSync('data/donemler.js','utf8'));}catch(e){
  console.log('OLCULEMEDI '+e.message);process.exit(0);}
const D=window.DONEMLER||window.DEVIRLER||null;
if(!D){console.log('OLCULEMEDI donemler.js beklenen degiskeni tasimiyor: '
  +Object.keys(global.window).join(','));process.exit(0);}
console.log('ANAHTAR '+(Array.isArray(D)?('dizi '+D.length):
  ('nesne '+Object.keys(D).length)));
"""
r = subprocess.run(["node", "-e", JS], capture_output=True, text=True,
                   encoding="utf-8")
cikti = (r.stdout or "").strip()
print("  " + (cikti if cikti else "⚪ ÖLÇÜLEMEDİ (node çıktı vermedi)"))
if r.stderr.strip():
    print("  STDERR:", r.stderr.strip()[:200])
print("  ⚠️ Dokuz kesitteki Osmanlı km²'si bu betikte HESAPLANMIYOR —")
print("     ölçütü `denetle.py`nin lejant/alan çıktısı veriyor. ÖLÇÜLEMEDİ")
print("     damgası ile bırakılıyor; koordinatör kesit ölçümünü ayrı koşar.")

print("\n### ⑤ DEĞİŞMEZ 1  (kaynak: arac/denetle.py — AYRI koşulur)")
print("  ⚠️ Bu betik denetim koşturmaz (yavaş ve paylaşılan).")
print("     `py arac/denetle.py | grep 'Değişmez 1 '` ile ölç.")

print("\n" + "=" * 66)
print("KABUL ÖLÇÜTÜ (öngörüden, ÖNCEDEN yazılmış):")
print("  🟢 KABUL   ① tuttu · ⑤ temiz · ④ < 3.397.649 km² (4b'nin)")
print("  🟡 EMRE'YE ② tutmadı ya da ④ 4b mertebesinde")
print("  🔴 GERİ AL ⑤ bozuldu ya da ① tutmadı")
print("=" * 66)
