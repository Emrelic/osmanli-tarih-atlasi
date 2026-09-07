# -*- coding: utf-8 -*-
"""NORM-MARUZIYET-0907 — "12 aletin kaçı gerçekten kova kuruyor" ÖLÇÜMÜ.

🔴 KENDİ AÇIK KALEMİMİ KAPATIYORUM. `USKUP-MUKERRER-0907.json`da şunu
   yazmıştım: *"`norm(` geçtiğini ölçtüm, NASIL kullanıldığını ölçmedim."*
   Bu betik onu ölçer.

🔴 MARUZİYET İKİ ŞART İSTER, VE İKİSİ BİRDEN OLMADAN RİSK YOKTUR:
```
   ① KOVA      alet `norm(...)` ile bir SÖZLÜK/KÜME ANAHTARI kuruyor mu
   ② EVREN     o anahtarın alanı YERLEŞİM ADI mı, ve alet HER İKİ kaydı
               da (Kudüs · Kudus) görüyor mu
```
   Yalnız ①: künye adları üzerinde kova kuran bir alet bu çifti HİÇ
   görmez — `Kudüs`/`Kudus` YERLEŞİMDİR, künye değil.
   Yalnız ②: tam külliyatı okuyan ama karşılaştırma yapan bir alet
   yanlış birleştirmez (ama `find`/`filter` YANLIŞ TEKİ seçebilir —
   ayrı ve daha hafif bir sınıf).

⚠️ VE İLK SAYIM ("12+ CANLI ALET") FAZLA GENİŞTİ, iki sebeple:
   · `git grep "norm("` `_norm(` gibi ALAKASIZ adları da yakalıyor
     (`SINAV-BIRLESTIR-0907.py`de `_norm` bir SINAV KAYDEDİCİSİDİR,
      normalleştirici değil — aynı harfler, başka şey)
   · dosya sayısı ≠ risk sayısı
   ⇒ `§11`: *"aynı sayı ≠ aynı vaka."* Bu betik dosyayı değil KULLANIMI
     sayar.
"""
import io
import os
import re
import subprocess
import sys

KOK = os.path.join(os.path.dirname(__file__), "..")
CIFT = ("Kudüs", "Kudus")

# Bir satır KOVA mı kuruyor? (sözlük/küme anahtarı olarak norm)
KOVA_RX = [
    re.compile(r"\w+\.setdefault\(\s*norm\("),          # d.setdefault(norm(x)
    re.compile(r"\w+\[\s*norm\("),                       # d[norm(x)] =
    re.compile(r"\{\s*norm\(.*?\)\s*:"),                 # {norm(k): v}
    re.compile(r"\bset\(\s*norm\("),
    re.compile(r"\.set\(\s*norm\("),                     # JS Map.set
    re.compile(r"\.get\(\s*norm\("),                     # JS Map.get (LOOKUP)
    re.compile(r"\w+\.get\(\s*norm\("),
]
# Yalnız karşılaştırma / süzme
KIYAS_RX = [
    re.compile(r"norm\(.*?\)\s*===?\s*norm\("),
    re.compile(r"norm\(.*?\)\s*(?:==|!=)"),
    re.compile(r"\bin\s+norm\("),
    re.compile(r"norm\(.*?\)\.includes\("),
]


def satirlar(yol):
    s = io.open(os.path.join(KOK, yol), encoding="utf-8").read()
    out = []
    for i, ln in enumerate(s.split("\n"), 1):
        t = ln.strip()
        if t.startswith("#") or t.startswith("//"):
            continue
        if "norm(" not in ln:
            continue
        out.append((i, ln.rstrip()))
    return s, out


def main():
    r = subprocess.run(["git", "grep", "-l", "norm(", "--", "arac", "denetim",
                        "js"], capture_output=True, text=True,
                       encoding="utf-8", cwd=KOK)
    dosyalar = [x for x in r.stdout.split()
                if x.endswith((".py", ".js"))
                and "USKUP-MUKERRER" not in x]
    print("`norm(` gecen ALET dosyasi: %d" % len(dosyalar))

    rapor = []
    for yol in sorted(dosyalar):
        s, sat = satirlar(yol)
        if not sat:
            continue
        # ── ALAKASIZ AD ELEMESİ: `norm(` gecen ama ortak normallestirici
        #   OLMAYAN dosyalar. Sinav: dosya `def norm(`/`function norm(`
        #   tanimliyor mu, ya da ARAC-NORMAL'i import ediyor mu.
        tanim = bool(re.search(r"(?:def|function)\s+norm\s*\(", s)) \
            or "ARAC-NORMAL" in s
        if not tanim:
            rapor.append((yol, "ALAKASIZ", "ortak `norm` DEGIL "
                          "(baska bir ad, ya da yerel yardimci)", []))
            continue
        kova = [(i, l) for i, l in sat if any(rx.search(l) for rx in KOVA_RX)]
        kiyas = [(i, l) for i, l in sat if any(rx.search(l) for rx in KIYAS_RX)]
        # ── EVREN: alet TAM KULLIYATI okuyor mu (ikisini de gorur mu)
        tam_kulliyat = ("girdi.yukle" in s or "yerlesimleri_yukle" in s
                        or "GIRDI_DOSYALARI" in s)
        ikisi_de = all(a in s for a in CIFT)   # adlari GOMULU tutuyorsa
        if kova:
            cins = "KOVA"
        elif kiyas:
            cins = "KIYAS"
        else:
            cins = "DIGER"
        rapor.append((yol, cins,
                      "tam kulliyat: %s" % ("EVET" if tam_kulliyat else "hayir"),
                      kova or kiyas))
        del ikisi_de

    print("\n%-46s %-9s %s" % ("DOSYA", "CINS", "EVREN"))
    print("-" * 96)
    sayac = {}
    riskli = []
    for yol, cins, evren, ornek in rapor:
        sayac[cins] = sayac.get(cins, 0) + 1
        print("%-46s %-9s %s" % (os.path.basename(yol), cins, evren))
        if cins == "KOVA" and "EVET" in evren:
            riskli.append(yol)
        for i, l in ornek[:2]:
            print("%50s:%d  %s" % ("", i, l.strip()[:70]))
    print("\nCINS DAGILIMI: %s" % sayac)
    print("\n🔴 HER IKI SART DA TUTAN (KOVA + tam kulliyat): %d" % len(riskli))
    for y in riskli:
        print("   %s" % y)
    if not riskli:
        print("   YOK — kova kuranlarin hicbiri tam kulliyati okumuyor")
    return 0


if __name__ == "__main__":
    sys.exit(main())
