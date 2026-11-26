# -*- coding: utf-8 -*-
"""ADAYLARIN URETECEGI YENI KIRILMA GUNLERINI ONCEDEN OLC.

🔴 NICIN: `Degismez 2s` her YABANCI kirilmasi icin +/-30 gun icinde bir
kronoloji maddesi ister. Bugun 79 ACIK, tavan 121 — yani 42 birimlik
pay var. ~1000 yeni nokta binlerce donem ucu getirecek; bunlarin KACI
YENI ve MADDESIZ oldugunu UYGULAMADAN ONCE bilmek gerekiyor.

⚠️ Bu bir YAKLASIMDIR, `denetle.py`nin kendisi degil:
   · cekirdek kronoloji evreni `olaylar*.js` (2s'in evreni)
   · `1281-01-01` ve `1923-10-29` ATLAS SINIRIDIR, kirilma sayilmaz
   · mevcut veride ZATEN olan bir gun YENI sayilmaz
   · `denetle.py` kapsam-disi kurallarini (192 kayit) UYGULAMAZ
   ⇒ ciktisi bir UST SINIRDIR.
"""
import sys, os, io, json, glob, subprocess
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.getcwd()
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi

SINIR = {"1281-01-01", "1923-10-29"}


def gun(s):
    q = str(s).split("-")
    try:
        y, m, d = int(q[0]), int(q[1]) if len(q) > 1 else 1, int(q[2]) if len(q) > 2 else 1
        return y * 372 + m * 31 + d          # kaba ama monoton gun sayaci
    except (ValueError, IndexError):
        return None


# --- CEKIRDEK kronoloji gunleri (2s'in evreni) --------------------
js = ("global.window={};const fs=require('fs');"
      "for (const f of process.argv.slice(1)) eval(fs.readFileSync(f,'utf8'));"
      "const K=Object.keys(window).filter(k=>k.startsWith('OLAYLAR'))"
      ".flatMap(k=>window[k]);"
      "console.log(JSON.stringify(K.map(o=>o.t)));")
dosyalar = sorted(glob.glob("data/olaylar*.js"))
p = subprocess.run(["node", "-e", js] + dosyalar, capture_output=True,
                   text=True, encoding="utf-8")
OLAY = sorted(set(g for g in (gun(t) for t in json.loads(p.stdout.strip())) if g))
print("çekirdek kronoloji dosyası: %d · madde günü: %d" % (len(dosyalar), len(OLAY)))


def maddesiz(g):
    """+/-30 gun icinde madde VAR MI (kaba sayacla ~31 birim)"""
    import bisect
    i = bisect.bisect_left(OLAY, g)
    for j in (i - 1, i):
        if 0 <= j < len(OLAY) and abs(OLAY[j] - g) <= 31:
            return False
    return True


# --- MEVCUT kirilma gunleri --------------------------------------
Y = girdi.yukle(sessiz=True)
mevcut = set()
for y in Y:
    for a in ("s", "d", "v"):
        for pp in (y.get(a) or []):
            for t in (pp.get("f"), pp.get("t")):
                if t and t not in SINIR:
                    mevcut.add(t)
print("mevcut kırılma günü (benzersiz): %d" % len(mevcut))

# --- ADAY kirilma gunleri ----------------------------------------
print()
print("%-40s %7s %7s %7s" % ("DOSYA", "uç", "YENİ", "MADDESİZ"))
tum_yeni = set()
for yol in sys.argv[1:]:
    if not os.path.exists(yol):
        continue
    kay = []

    def topla(o):
        if isinstance(o, dict):
            if "ad" in o and ("s" in o or "d" in o or "v" in o):
                kay.append(o)
            else:
                for v in o.values():
                    topla(v)
        elif isinstance(o, list):
            for e in o:
                topla(e)

    topla(json.load(io.open(yol, encoding="utf-8")))
    uc, yeni = set(), set()
    for k in kay:
        for a in ("s", "d", "v"):
            for pp in (k.get(a) or []):
                if not isinstance(pp, dict):
                    continue
                for t in (pp.get("f"), pp.get("t")):
                    if t and t not in SINIR:
                        uc.add(t)
                        if t not in mevcut:
                            yeni.add(t)
    ms = {t for t in yeni if maddesiz(gun(t))}
    tum_yeni |= yeni
    print("%-40s %7d %7d %7d" % (os.path.basename(yol)[:40], len(uc),
                                 len(yeni), len(ms)))

hepsi_ms = {t for t in tum_yeni if maddesiz(gun(t))}
print()
print("BİRLEŞİK — mükerrer günler tek sayılarak")
print("   yeni kırılma günü : %d" % len(tum_yeni))
print("   bunun MADDESİZİ   : %d" % len(hepsi_ms))
print()
print("bugünkü `2s` : 79 AÇIK · tavan 121 · pay 42")
print("⚠️ ÜST SINIR — `denetle.py` kapsam-dışı kuralı (192 kayıt) ve")
print("   `kur:` süzgeci UYGULANMADI. Gerçek sayı bundan KÜÇÜK olacak.")
print()
print("en erken 15 maddesiz gün:")
for t in sorted(hepsi_ms)[:15]:
    print("   " + t)
