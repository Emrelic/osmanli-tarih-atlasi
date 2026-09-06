# -*- coding: utf-8 -*-
"""ORTAK YARDIMCI — bir kimligin KUNYESI ve RENGI var mi?

NICIN VAR (6 Eylul 2026):
  Bu kor nokta `CLAUDE.md §11`de ADIYLA kayitli:
      "renk `harita:` anahtarina bakar, `id`ye DEGIL
       (`sardinya-piyemonte` id olarak yok, `sardinya` harita anahtari
        olarak var)"
  Ve buna ragmen AYNI OTURUMDA IKI KEZ yapildi:
      1) Silistre zincir sinavi  -> `bulgaristan` · `musa-celebi` ·
         `suleyman-celebi` icin "KUNYE YOK" basti (ucu de YANLIS)
      2) manda renk sondasi      -> `bulgaristan-kralligi` · `suud-ucuncu` ·
         `yemen-zeydi` icin "RENK YOK" basti (yanlis)
  Iki vakada da yanlis olan SESSIZDI: hata vermedi, temiz bir satir basti.
  ⇒ Care kural degil ALET. `§11`: "kural yetmiyor, ALISKANLIK gerekiyor"un
    bir ustu: "yeter olan tek sey ARACI DEGISTIRMEK".

IKI DOLAYLAMA VAR ve KARISTIRILIYOR:
  KUNYE  : `devletler.js`teki `id` alani           — kunye var mi?
  BOYA   : `harita:` varsa O, yoksa `id`           — hangi anahtar boyanir?
  Bir kimlik KUNYESIZ olup BOYALI olabilir (yalniz `harita:` anahtari
  olarak yasayanlar: ceneviz · sirbistan · sovalye · musa-celebi ·
  suleyman-celebi ...), ve KUNYELI olup BOYASIZ olabilir (harita deligi).

KULLANIM
  py denetim/ARAC-KIMLIK-BOYA-0906.py            # tam tarama + sinav
  py denetim/ARAC-KIMLIK-BOYA-0906.py --sinav    # yalniz C13 sinavi

KUTUPHANE OLARAK
  from ARAC_KIMLIK_BOYA_0906 import boya_anahtari, renk_of, kunye_var
"""
import json
import os
import subprocess
import sys

KOK = os.getcwd()
sys.path.insert(0, os.path.join(KOK, "arac"))

_KUNYE = None      # id -> harita (None ise dolaylama yok)
_BOYA_ANAHTAR = None   # BOYALAR'in anahtar kumesi


def _kunyeleri_oku():
    """devletler.js'i NODE ile okur — regex ile DEGIL (§11, bes vaka)."""
    js = os.path.join(KOK, "denetim", "_kb_oku.js")
    with open(js, "w", encoding="utf-8") as f:
        f.write(
            "const fs=require('fs'),vm=require('vm');const d={window:{}};"
            "vm.createContext(d);"
            "vm.runInContext(fs.readFileSync('data/devletler.js','utf8'),d);"
            "const o={};for(const k of (d.window.DEVLETLER||[]))"
            "o[k.id]=(k.harita===undefined?null:k.harita);"
            "console.log(JSON.stringify(o));\n")
    try:
        r = subprocess.run(["node", js], cwd=KOK, capture_output=True,
                           text=True, encoding="utf-8", errors="replace",
                           timeout=300)
        if not r.stdout.strip():
            raise RuntimeError("node bos dondu: " + (r.stderr or "")[:200])
        return json.loads(r.stdout.strip())
    finally:
        if os.path.exists(js):
            os.remove(js)


def _yukle():
    global _KUNYE, _BOYA_ANAHTAR
    if _KUNYE is None:
        _KUNYE = _kunyeleri_oku()
    if _BOYA_ANAHTAR is None:
        import renkler
        _BOYA_ANAHTAR = renkler.BOYALAR


def kunye_var(kid):
    """`devletler.js`te `id` olarak var mi? (harita anahtari SAYILMAZ)"""
    _yukle()
    return kid in _KUNYE


def boya_anahtari(kid):
    """Bu kimlik HANGI anahtarla boyanir? `harita:` varsa o, yoksa kendisi.
    Kunyesi olmayan bir kimlik icin de kendisini dondurur — cunku yalniz
    `harita:` anahtari olarak yasayan kimlikler VARDIR ve boyanirlar."""
    _yukle()
    h = _KUNYE.get(kid)
    return h if h else kid


def renk_of(kid):
    """Ekranda cizilecek hex — yoksa None (= §8 harita deligi)."""
    _yukle()
    v = _BOYA_ANAHTAR.get(boya_anahtari(kid))
    return v[1] if v else None


# ---------------------------------------------------------------- sinav
def _sinav():
    """C13 dort ayak: GECME · ATESLEME · GIRDI (dosyadan) · CIKTI."""
    _yukle()
    h = []
    # (3) GIRDI: gercek dosyadan okundu mu?
    if len(_KUNYE) < 100:
        h.append("GIRDI: kunye sayisi %d — devletler.js okunamamis olabilir"
                 % len(_KUNYE))
    # (1) GECME + (4) CIKTI: bilinen dogru vakalar
    dogru = [
        # (kimlik, kunye_var, renk BEKLENIYOR mu)
        ("bulgaristan-kralligi", True, True),    # harita: bulgaristan
        ("romanya-kralligi", True, True),        # harita: romanya
        ("musa-celebi", False, True),            # KUNYESIZ ama BOYALI
        ("suleyman-celebi", False, True),        # KUNYESIZ ama BOYALI
        ("misir-kralligi", True, True),          # harita: YOK -> id
        ("irak-kralligi", True, True),
    ]
    for kid, bek_k, bek_r in dogru:
        if kunye_var(kid) != bek_k:
            h.append("GECME: %s kunye_var=%s beklenen %s"
                     % (kid, kunye_var(kid), bek_k))
        if (renk_of(kid) is not None) != bek_r:
            h.append("GECME: %s renk=%s beklenen %s"
                     % (kid, renk_of(kid), "VAR" if bek_r else "YOK"))
    # (2) ATESLEME: olmayan kimlik hem kunyesiz hem renksiz OLMALI
    yok = "zzz-yok-boyle-bir-kimlik-qqq"
    if kunye_var(yok):
        h.append("ATESLEME: uydurma kimlik icin kunye_var True dondu")
    if renk_of(yok) is not None:
        h.append("ATESLEME: uydurma kimlik icin renk dondu")
    # (4) CIKTI: dolaylama GERCEKTEN calisiyor mu — id ile arama BASARISIZ
    #     olmali, harita anahtari ile BASARILI
    import renkler
    if "bulgaristan-kralligi" in renkler.BOYALAR:
        h.append("CIKTI: sinav gecersiz — bulgaristan-kralligi artik "
                 "dogrudan BOYALAR'da, dolaylama sinanamiyor")
    elif boya_anahtari("bulgaristan-kralligi") != "bulgaristan":
        h.append("CIKTI: dolaylama calismiyor")
    return h


# --------------------------------------------------------------- tarama
def _girdi_dosyalari():
    import girdi
    return list(girdi.GIRDI_DOSYALARI)


def _veride_kullanilan():
    """Veride GERCEKTEN kullanilan kimlikler (d:/v: haric — onlar Osmanli)."""
    js = os.path.join(KOK, "denetim", "_kb_veri.js")
    dosya = [os.path.basename(f) for f in _girdi_dosyalari()]
    with open(js, "w", encoding="utf-8") as f:
        f.write("const fs=require('fs'),vm=require('vm');"
                "const D=" + json.dumps(dosya) + ";const say={};"
                "for(const f of D){const y='data/'+f;"
                "if(!fs.existsSync(y))continue;const d={window:{}};"
                "vm.createContext(d);"
                "try{vm.runInContext(fs.readFileSync(y,'utf8'),d)}catch(e){continue}"
                "for(const k of Object.keys(d.window)){const A=d.window[k];"
                "if(!Array.isArray(A))continue;for(const r of A){"
                "for(const kat of ['s','isg'])for(const p of (r[kat]||[]))"
                "if(p.d)say[p.d]=(say[p.d]||0)+1;}}}"
                "console.log(JSON.stringify(say));\n")
    try:
        r = subprocess.run(["node", js], cwd=KOK, capture_output=True,
                           text=True, encoding="utf-8", errors="replace",
                           timeout=600)
        if not r.stdout.strip():
            raise RuntimeError("node bos dondu: " + (r.stderr or "")[:200])
        return json.loads(r.stdout.strip())
    finally:
        if os.path.exists(js):
            os.remove(js)


def _tarama():
    _yukle()
    kul = _veride_kullanilan()
    delik, dolayli, kunyesiz = [], [], []
    for kid, n in sorted(kul.items(), key=lambda x: -x[1]):
        if renk_of(kid) is None:
            delik.append((kid, n))
        if boya_anahtari(kid) != kid:
            dolayli.append((kid, boya_anahtari(kid), n))
        if not kunye_var(kid):
            kunyesiz.append((kid, n))
    print("")
    print("=== TARAMA — veride kullanilan kimlikler ===")
    print("  kullanilan benzersiz kimlik : %d" % len(kul))
    print("  toplam donem                : %d" % sum(kul.values()))
    print("")
    print("  [1] HARITA DELIGI (veride VAR, BOYASI YOK) : %d" % len(delik))
    for kid, n in delik[:25]:
        print("        %-32s %5d donem" % (kid, n))
    print("")
    print("  [2] `harita:` DOLAYLAMASI kullanan         : %d" % len(dolayli))
    for kid, an, n in dolayli[:15]:
        print("        %-28s -> %-18s %5d donem" % (kid, an, n))
    if len(dolayli) > 15:
        print("        ... +%d daha" % (len(dolayli) - 15))
    print("")
    print("  [3] PAYLASILAN BOYA ANAHTARI               : %d" % len(kunyesiz))
    print("      (kendi `id` kunyesi YOK, ama bir ya da daha cok kunyenin")
    print("       `harita:` HEDEFI — TASARIM, kusur DEGIL. Ardisik devletler")
    print("       tek renkte toplanir: sirbistan 4 kunye · bulgaristan 3 ·")
    print("       suud 3 · fetret-* 4. §1.5 bunlari `dizinli` sayar.)")
    for kid, n in kunyesiz[:15]:
        r = renk_of(kid)
        print("        %-28s %5d donem   renk %s"
              % (kid, n, r if r else "YOK"))
    return delik, kunyesiz


if __name__ == "__main__":
    hatalar = _sinav()
    print("=== C13 SINAVI ===")
    if hatalar:
        for x in hatalar:
            print("  [X] " + x)
        print("SINAV KALDI")
        sys.exit(1)
    print("  GECME + ATESLEME + GIRDI + CIKTI : TEMIZ")
    if "--sinav" in sys.argv:
        sys.exit(0)
    delik, _ = _tarama()
    print("")
    if delik:
        print("SONUC: %d HARITA DELIGI — bu kimlikler veride kullaniliyor "
              "ama BOYANMIYOR (§8)." % len(delik))
        sys.exit(1)
    print("SONUC: harita deligi YOK.")
