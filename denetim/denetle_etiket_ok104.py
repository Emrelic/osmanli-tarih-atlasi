# -*- coding: utf-8 -*-
"""DENETLE ETIKET — "etiketsiz toprak parcasi" nobetcisi.  (parti-0019 H-0023)

Emre (H-0023): "haritada hicbir zaman cizelgesindeki noktada etiketsiz toprak
parcasi olmamali. hangi devlete ait ise belli bir boyama toprak parcasi devlet
etiketi KESIN olmali. bir kontrol calistiralim ve hepsini kontrol etsin."

🔴 NE SORUYOR — ve niçin var olan denetimler bunu SORMUYOR:
    Degismez 1   "bu NOKTA sahipsiz mi"      -> nokta tarafi
    Degismez 2   "bu KIRILMANIN maddesi var mi" -> kronoloji tarafi
    Degismez 3   "merkeziyle uyusuyor mu"    -> bolge tarafi
    HICBIRI      "bu SAHIPLIK EKRANDA GORUNUYOR mu" diye sormuyor.

   `CLAUDE.md §8`: bir kimlik `BOYALAR`da tanimli DEGILSE bolge BOYANMAZ.
   `CLAUDE.md §5`: kimligin adi `devletler.js` kunyesinden gelir; kunye yoksa
   gövde ham slug ile ya da adsiz cizilir (`js/app.js` `devletAdi()` vakasi,
   30 govde ham slug gosteriyordu).
   ⇒ Bir kimlik VERIDE KULLANILIYOR ama RENGI ya da KUNYESI yoksa, ekranda
     ya BOS ya ETIKETSIZ bir toprak parcasi cikar. Emre'nin tarif ettigi tam bu.

🟢 UC KOVA (ve dorduncusu SART — "olculemedi asla temiz diye raporlanmaz"):
    A) RENKSIZ   veride kullaniliyor, BOYALAR'da yok        -> BOYANMAZ, delik
    B) KUNYESIZ  veride kullaniliyor, devletler.js'te yok   -> ETIKETSIZ boyanir
    C) YONLENDIRME  kunyesi `harita:` ile baska anahtara bakiyor -> KUSUR DEGIL
    D) OLCULEMEDI  dosya ayristirilamadi                    -> AYRI kova

⚠️ EVREN: `arac/girdi.py`nin `GIRDI_DOSYALARI` sabiti — elle liste DEGIL.
   (`CLAUDE.md §5`: "ayristiriciyi dogrulamak yetmiyor, hangi DOSYALARI
    okudugunu da dogrulamak gerekiyor." Bu bolum uc kez bayatladi.)

C13 — IKI YONDE DE SINANDI, `--sinav` ile:
   GECME     kusur yokken TEMIZ diyor mu   -> kovalar bosaltilarak zorlandi
   ATESLEME  her kusur dali icin AYRI AYRI -> sahte kimlik enjekte edilerek
"""
import io
import json
import os
import re
import subprocess
import sys
import tempfile

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

KOK = sys.argv[1] if len(sys.argv) > 1 else "."
SINAV = "--sinav" in sys.argv
sys.path.insert(0, os.path.join(KOK, "arac"))

# ── ① EVREN: girdi.py'nin okudugu dosyalar ─────────────────────────────────
import girdi                                          # noqa: E402
import renkler as R                                   # noqa: E402

DOSYALAR = list(girdi.GIRDI_DOSYALARI)

# ── ② VERIDEKI KIMLIKLER — node ile, kendi dilinde ayristirilir ────────────
# (`CLAUDE.md §11`: "veri zaten bir dilde yazilmissa o dilin yorumlayicisini
#  cagir" — regex bu projede uc kez sessizce yanlis saydi.)
BETIK = r"""
const fs=require('fs'),path=require('path');
const KOK=process.argv[2], liste=process.argv[3].split(',');
const kim={}, olculemedi=[];
for(const f of liste){
  const yol=path.join(KOK,'data',f);
  if(!fs.existsSync(yol)){ olculemedi.push(f+' (dosya yok)'); continue; }
  global.window={};
  try{ eval(fs.readFileSync(yol,'utf8')); }
  catch(e){ olculemedi.push(f+' ('+e.message.slice(0,60)+')'); continue; }
  for(const k of Object.keys(global.window)){
    const v=global.window[k]; if(!Array.isArray(v)) continue;
    for(const r of v){
      if(!r||!r.ad) continue;
      for(const p of (r.s||[])){
        if(!p||!p.d) continue;
        const e=kim[p.d]||(kim[p.d]={nokta:new Set(),donem:0,ilk:'9999',son:'0000',dosya:new Set()});
        e.nokta.add(r.ad); e.donem++; e.dosya.add(f);
        if(p.f&&p.f<e.ilk) e.ilk=p.f;
        if(p.t&&p.t>e.son) e.son=p.t;
      }
    }
  }
}
const cik={olculemedi:olculemedi,kimlik:{}};
for(const k of Object.keys(kim)) cik.kimlik[k]={nokta:kim[k].nokta.size,donem:kim[k].donem,
   ilk:kim[k].ilk,son:kim[k].son,dosya:[...kim[k].dosya].slice(0,3)};
console.log(JSON.stringify(cik));
"""
yol_betik = os.path.join(tempfile.gettempdir(), "_etiket_ok104.js")
io.open(yol_betik, "w", encoding="utf-8").write(BETIK)
ham = subprocess.run(["node", yol_betik, KOK, ",".join(DOSYALAR)],
                     capture_output=True, text=True, encoding="utf-8",
                     errors="replace", timeout=600)
if ham.returncode != 0 or not ham.stdout.strip():
    print("🔴 AYRISTIRMA COKTU — bu bir TEMIZ rapor DEGILDIR:")
    print(ham.stderr[:2000])
    sys.exit(2)
veri = json.loads(ham.stdout.strip().splitlines()[-1])
KIMLIK = veri["kimlik"]
OLCULEMEDI = veri["olculemedi"]

# ── ③ KUNYELER: devletler.js — yine node ile ───────────────────────────────
BETIK2 = r"""
const fs=require('fs');
global.window={};
eval(fs.readFileSync(process.argv[2],'utf8'));
const D=window.DEVLETLER||[];
const cik={};
for(const d of D) if(d&&d.id) cik[d.id]={ad:d.ad||null, harita:d.harita||null};
console.log(JSON.stringify(cik));
"""
yol2 = os.path.join(tempfile.gettempdir(), "_etiket_ok104_dev.js")
io.open(yol2, "w", encoding="utf-8").write(BETIK2)
h2 = subprocess.run(["node", yol2, os.path.join(KOK, "data", "devletler.js")],
                    capture_output=True, text=True, encoding="utf-8",
                    errors="replace", timeout=300)
KUNYE = json.loads(h2.stdout.strip().splitlines()[-1]) if h2.stdout.strip() else {}

BOYALAR = dict(R.BOYALAR)

# 🔴 TERS DIZIN — ve bu satir bir KUSURUN kapagi. Ilk surumum kunyeyi YALNIZ
#    `id` ile aradi ve 26 SAHTE kusur bildirdi (`suleyman-celebi` 126 nokta ·
#    `avusturya` 123 · `ceneviz` 25 …). Oysa `CLAUDE.md §11` bunu zaten
#    yaziyordu: `js/app.js` `devletAdi()` yalniz `d.id` okudugu icin 30 govde
#    ham slug gosteriyordu ve care `id ∪ harita` birlesimiydi.
#    ⇒ Olcum dogruydu, EVREN dardi. Kimlige giden IKI yol var: kunyenin kendi
#      `id`si, ve BASKA bir kunyenin `harita:` alani.
HARITA_TERS = {}
for _k, _v in KUNYE.items():
    _h = (_v or {}).get("harita")
    if _h:
        HARITA_TERS.setdefault(_h, []).append(_k)

# ⚠️ TASARIM NOBETI — kusur DEGIL, kasitli. Ayri kovada durur ki bir sonraki
#    oturum onu "kusur" diye ikinci kez kesfetmesin (`CLAUDE.md §11`:
#    "kabul edilmis borc kayitsiz kalirsa yarin kusur diye yeniden bulunur").
MUAF = {
    "__BOSLUK__": "kasitli bosluk nobetcisi — bir devlet kimligi DEGIL, "
                  "'burasi kimsenin degildi' demenin veri karsiligi. "
                  "Boyanmamasi TASARIM.",
}

# ── SINAV MODU: dallari ZORLA atesle (C13) ─────────────────────────────────
# 🔴 GECME YOLU DA ZORLANIR — `C13`un eksik ayagi: "hangi yonun zorlanacagi
#    onceden bilinmez." Gercek veride 4 kusur VAR, yani ATESLEME kendiliginden
#    kosuyor ama GECME yolu hic kosulmuyordu. Bu bayrak dort kusuru gecici
#    olarak muaf sayip aracin TEMIZ diyebildigini ve 0 ile cikabildigini sinar.
if "--gecme" in sys.argv:
    print("🧪 GECME SINAVI — bugunku 4 kusur gecici olarak MUAF sayiliyor\n")
    for _x in ("panama-cumhuriyeti", "farukiler", "apaci-ovalar", "komanci"):
        MUAF[_x] = "GECME SINAVI icin gecici muafiyet — gercek kosuda YOK"

if SINAV:
    print("🧪 SINAV MODU — dallar sahte veriyle ZORLANIYOR\n")
    KIMLIK["__sahte_renksiz__"] = {"nokta": 3, "donem": 5, "ilk": "1400-01-01",
                                   "son": "1500-01-01", "dosya": ["sahte.js"]}
    KUNYE["__sahte_renksiz__"] = {"ad": "Sahte Renksiz", "harita": None}
    KIMLIK["__sahte_kunyesiz__"] = {"nokta": 2, "donem": 2, "ilk": "1600-01-01",
                                    "son": "1700-01-01", "dosya": ["sahte.js"]}
    BOYALAR["__sahte_kunyesiz__"] = ("Sahte", "#123456")
    OLCULEMEDI.append("sahte_bozuk.js (sinav)")

# ── ④ HÜKÜM ────────────────────────────────────────────────────────────────
A, B, C, M = [], [], [], []
for k, e in sorted(KIMLIK.items(), key=lambda x: -x[1]["nokta"]):
    if k in MUAF:
        M.append((k, e, None))
        continue
    ku = KUNYE.get(k)
    hedef = (ku or {}).get("harita")
    # RENK: kendi anahtarinda ya da kunyesinin isaret ettigi anahtarda
    renkli = (k in BOYALAR) or (hedef and hedef in BOYALAR)
    # KUNYE: kendi `id`si OLABILIR, ya da baska bir kunyenin `harita:`si
    isaret_eden = HARITA_TERS.get(k, [])
    kunyeli = (ku is not None) or bool(isaret_eden)
    if not renkli:
        A.append((k, e, ku))
    elif not kunyeli:
        B.append((k, e, ku))
    elif hedef or isaret_eden:
        C.append((k, e, ku or {"ad": "<- " + ", ".join(isaret_eden[:2]),
                               "harita": None}))

print("=" * 76)
print("ETIKET DENETIMI — 'etiketsiz toprak parcasi' nobetcisi   (H-0023)")
print("=" * 76)
print("evren      : girdi.py GIRDI_DOSYALARI · %d dosya" % len(DOSYALAR))
print("kimlik     : %d ayri devlet kimligi veride KULLANILIYOR" % len(KIMLIK))
print("BOYALAR    : %d kimlik · devletler.js kunye: %d" % (len(BOYALAR), len(KUNYE)))
print("")


def dok(baslik, kova, aciklama):
    print("-" * 76)
    print("%s  %d" % (baslik, len(kova)))
    print("   %s" % aciklama)
    for k, e, ku in kova:
        ad = (ku or {}).get("ad") or "(kunye YOK)"
        print("   %-28s %3d nokta · %3d donem · %s..%s   %s"
              % (k, e["nokta"], e["donem"], e["ilk"][:7], e["son"][:7], ad))
    if not kova:
        print("   🟢 bos")
    print("")


dok("🔴 A · RENKSIZ", A, "veride kullaniliyor, BOYALAR'da YOK -> BOYANMAZ, harita DELIGI")
dok("🔴 B · KUNYESIZ", B, "rengi var ama devletler.js'te kunye YOK -> ETIKETSIZ boyanir")
dok("🟢 C · YONLENDIRME", C, "kunye `harita:` ile bagli (iki yonde de arandi) — KUSUR DEGIL")

print("-" * 76)
print("⚪ M · MUAF (tasarim)  %d" % len(M))
for k, e, _ in M:
    print("   %-28s %3d nokta — %s" % (k, e["nokta"], MUAF[k]))
if not M:
    print("   (yok)")
print("")

print("-" * 76)
print("🟡 D · OLCULEMEDI  %d" % len(OLCULEMEDI))
print("   'olculemedi' ASLA 'temiz' diye raporlanmaz (CLAUDE.md §11)")
for f in OLCULEMEDI:
    print("   " + f)
if not OLCULEMEDI:
    print("   🟢 bos")
print("")

kusur = len(A) + len(B)
print("=" * 76)
if kusur == 0 and not OLCULEMEDI:
    print("🟢 TEMIZ — veride kullanilan her kimligin rengi VE kunyesi var.")
    sys.exit(0)
print("🔴 %d KUSUR (A %d · B %d) · olculemedi %d" % (kusur, len(A), len(B), len(OLCULEMEDI)))
sys.exit(1)
