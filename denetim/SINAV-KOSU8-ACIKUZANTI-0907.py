# -*- coding: utf-8 -*-
u"""Ⓐ'NIN 28 «YOK» DOSYA YOLU — UZANTI VARYANTI VAR MI?

    SINAV-KOSU8-0907 · 7 Eylül 2026

`SINAV-KOSU8-ACIKCINS-0907.py` kovayı 48 → 42'ye indirdi. Kalan 40
satır 28 benzersiz **dosya yolu**. Kovaya bakınca bir desen çıktı:
```
denetim/YAMA-KUNYE-NORSE-0905.js      ← ama künye yamaları `.json`
denetim/ONERI-SOZLESME-11-0905.js     ← öteki ONERI dosyaları `.json`
denetim/_kaynak_denetim_0907.js       ← `.py` olabilir
```
🔴 Bir belge dosyayı `.js` diye anmış olabilir, dosya `.json` ya da
`.py` olarak durabilir. Önceki alet **yol AYNEN** ve **başka dizinde
AYNI AD** dallarını taşıyordu; **aynı kök, BAŞKA UZANTI** dalı yoktu.

Bu, bugünün beşinci ad-varyantı ekseni:
```
Cânet ≠ Cânet (Djanet)     ek AÇIKLAMA
Doha  ≠ Doha (Katar)       ek AÇIKLAMA
MADDELER ≠ maddeler        BÜYÜK/küçük harf
kenarlar ≠ kenar           ÇOĞUL/tekil
usku  ≠ Üsküp              TÜRKÇE HARF
.js   ≠ .json / .py   🆕   UZANTI
```

## VE ÜÇ AYRI SORU, ÜÇÜ DE AYRI KOVA
```
Ⓤ UZANTI VARYANTI   aynı kök, başka uzantı  ⇒ dosya VAR, ad yanlış anılmış
Ⓖ GİT'TE VARDI      dosya bir zamanlar VARDI, sonra silindi/taşındı
                    ⇒ borç DEĞİL, TAMAMLANMIŞ İŞ
Ⓗ HİÇ OLMADI        git geçmişinde de yok ⇒ GERÇEK AÇIK BORÇ
```
📌 Ⓖ önemli: `denetim/` altındaki bir yama merge'de `data/`ye **taşınır**
ve `denetim/`ten silinir. O zaman belge *"artefakt yok"* der ve **doğru
söyler** — ama borç değil, **ödenmiş bir borçtur.** `§11`: *"kendi
ödediğin borcu, kaydını okumadan yeniden iş sanabilirsin."*

    py denetim/SINAV-KOSU8-ACIKUZANTI-0907.py
    py denetim/SINAV-KOSU8-ACIKUZANTI-0907.py --atesle
"""
from __future__ import unicode_literals

import os
import re
import subprocess
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ALET = os.path.join(KOK, "denetim", "SINAV-KOSU8-ACIKCINS-0907.py")
UZANTILAR = (".js", ".json", ".py", ".md", ".txt", ".geojson", ".csv")


def git(args):
    p = subprocess.run(["git"] + args, cwd=KOK, capture_output=True,
                       timeout=180)
    return p.returncode, p.stdout.decode("utf-8", "replace").strip()


def uzanti_varyanti(yol):
    u"""Aynı kök, başka uzantı — HERHANGİ bir dizinde."""
    kok_ad = os.path.splitext(os.path.basename(yol))[0]
    bulunan = []
    for dizin in ("denetim", "data", "arac", "oturumlar", "js", "."):
        tam = os.path.join(KOK, dizin)
        if not os.path.isdir(tam):
            continue
        for dosya in os.listdir(tam):
            k, u = os.path.splitext(dosya)
            if k == kok_ad and u in UZANTILAR:
                aday = "%s/%s" % (dizin, dosya)
                if aday.replace("./", "") != yol:
                    bulunan.append(aday)
    return bulunan


def kok_adiyla_gitte(yol):
    u"""KÖK ADIYLA git geçmişinde herhangi bir uzantıda var mı?

    🔴 `uzanti_varyanti()` DİSKE bakar. Bir dosya `git mv` ile yeniden
    adlandırıldıysa kök adı diskte kalmaz ⇒ varyant bulunmaz; ve
    `gitte_vardi_mi()` belgedeki YANLIŞ uzantıyla arar ⇒ o da bulmaz.
    İkisi birden ıskalayınca kayıt «HİÇ OLMADI» kovasına düşer ve
    **yeniden adlandırılmış bir iş, hiç yapılmamış görünür.**
    Ölçüldü: 13 yolun 1'i tam buraya düşüyordu
    (`YAMA-KUNYE-HIMAYE-UCUZ-0905` → `.json`, sonra `git mv`).
    """
    kok_ad = os.path.splitext(os.path.basename(yol))[0]
    kod, cikti = git(["log", "--all", "--oneline", "--name-only",
                      "--diff-filter=A", "--", "*" + kok_ad + "*"])
    if kod != 0 or not cikti:
        return []
    return sorted(set(s for s in cikti.splitlines()
                      if "/" in s and kok_ad in s))


def gitte_vardi_mi(yol):
    u"""Dosya git geçmişinde HİÇ var oldu mu? (silinmiş/taşınmış olabilir)"""
    kod, cikti = git(["log", "--oneline", "--all", "--", yol])
    if kod == 0 and cikti:
        return cikti.splitlines()[-1][:64], len(cikti.splitlines())
    # ad değişmiş olabilir — yalnız TABAN ADIYLA ara
    taban = os.path.basename(yol)
    kod, cikti = git(["log", "--oneline", "--all", "--diff-filter=A",
                      "--", "*/" + taban])
    if kod == 0 and cikti:
        return cikti.splitlines()[-1][:64] + "  (taban adla)", \
            len(cikti.splitlines())
    return None, 0


def yollari_al():
    import importlib.util
    ozel = importlib.util.spec_from_file_location("_cins0907", ALET)
    mod = importlib.util.module_from_spec(ozel)
    ozel.loader.exec_module(mod)
    alt = mod.aleti_yukle()
    satirlar = alt.acik_satirlar()
    art = re.compile(r"`([^`]+)`")
    yollar = {}
    for gor, no, s in satirlar:
        k, ger = alt.sinifla(s)
        if k != "AÇIK":
            continue
        m = art.search(ger)
        if not m:
            continue
        a = m.group(1)
        if mod.cinsle(a) == "yol":
            yollar.setdefault(a, []).append("%s:%d" % (gor, no))
    return yollar


def main():
    if "--atesle" in sys.argv:
        return atesle()

    yollar = yollari_al()
    print("═" * 78)
    print("Ⓐ'NIN «YOK» DOSYA YOLLARI — UZANTI ve GİT GEÇMİŞİ")
    print("═" * 78)
    print("benzersiz yol: %d · toplam satır: %d"
          % (len(yollar), sum(len(v) for v in yollar.values())))
    print("")

    kova = {"U": [], "G": [], "R": [], "H": []}
    for yol in sorted(yollar):
        n = len(yollar[yol])
        uz = uzanti_varyanti(yol)
        if uz:
            kova["U"].append((yol, n, ", ".join(uz)))
            continue
        gec, kac = gitte_vardi_mi(yol)
        if gec:
            kova["G"].append((yol, n, "%d commit · ilk: %s" % (kac, gec)))
            continue
        # 🔴 SON KAPI: kök adıyla, uzantı fark etmeksizin, git'te
        eski = kok_adiyla_gitte(yol)
        if eski:
            kova["R"].append((yol, n, ", ".join(eski[:3])))
        else:
            kova["H"].append((yol, n, ""))

    print("Ⓤ UZANTI VARYANTI — dosya VAR, belge BAŞKA UZANTIYLA anmış")
    for yol, n, bilgi in kova["U"]:
        print("  🟢 %-44s (%d satır)" % (yol, n))
        print("       ⇒ %s" % bilgi)
    if not kova["U"]:
        print("  (yok)")
    print("")

    print("Ⓖ GİT GEÇMİŞİNDE VARDI — silinmiş/taşınmış ⇒ ÖDENMİŞ BORÇ olabilir")
    for yol, n, bilgi in kova["G"]:
        print("  🟡 %-44s (%d satır)" % (yol, n))
        print("       ⇒ %s" % bilgi)
    if not kova["G"]:
        print("  (yok)")
    print("")

    print("Ⓡ KÖK ADIYLA GİT'TE VARDI — YENİDEN ADLANDIRILMIŞ ⇒ borç DEĞİL")
    for yol, n, bilgi in kova["R"]:
        print("  🟡 %-44s (%d satır)" % (yol, n))
        print("       ⇒ %s" % bilgi)
    if not kova["R"]:
        print("  (yok)")
    print("")

    print("Ⓗ HİÇ OLMADI — git geçmişinde de yok ⇒ GERÇEK AÇIK BORÇ")
    for yol, n, _b in kova["H"]:
        print("  🔴 %-44s (%d satır)" % (yol, n))
    if not kova["H"]:
        print("  (yok)")
    print("")

    print("─" * 78)
    top = sum(len(v) for v in yollar.values())
    for k, ad in (("U", "Ⓤ uzantı varyantı"), ("G", "Ⓖ git'te vardı"),
                  ("R", "Ⓡ yeniden adlandırılmış"), ("H", "Ⓗ hiç olmadı")):
        s = sum(n for _y, n, _b in kova[k])
        print("  %-22s %2d yol · %2d satır  (%.1f%%)"
              % (ad, len(kova[k]), s, 100.0 * s / max(1, top)))
    print("")
    print("⚠️ SINIR — Ⓖ *«ödenmiş borç»* DEĞİL, *«ödenmiş OLABİLİR»*:")
    print("   dosya silinmiş olabilir çünkü İŞ BİTTİ, ya da çünkü İŞ")
    print("   İPTAL EDİLDİ. İkisini ayıran şey commit MESAJIDIR ve bu")
    print("   alet onu OKUMUYOR. Ⓖ kovası `okumadım` damgalı kalır.")
    return 0


def atesle():
    print("C13 ② ATEŞLEME — uzantı ve git dalları")
    d = []
    # Ⓤ: bilinen bir dosyanın uzantısını değiştirip ara
    var = uzanti_varyanti("denetim/SINAV-KOSU8-ACIKCINS-0907.json")
    d.append(("uzantı varyantı BULUNUR", bool(var), True, str(var)[:52]))
    # Ⓤ negatif: gerçekten olmayan bir kök
    var = uzanti_varyanti("denetim/ZZZ-OLMAYAN-KOK-QQQ.js")
    d.append(("olmayan kök için varyant YOK", not var, True, str(var)[:52]))
    # Ⓖ: git'te KESİN var olan bir dosya
    g, _k = gitte_vardi_mi("CLAUDE.md")
    d.append(("git geçmişi BULUNUR", bool(g), True, (g or "")[:52]))
    # Ⓗ: git'te kesin olmayan
    g, _k = gitte_vardi_mi("denetim/ZZZ-HIC-OLMAYAN-QQQ.js")
    d.append(("olmayan dosya için geçmiş YOK", not g, True, str(g)[:52]))
    kotu = 0
    for ad, ger, bek, bilgi in d:
        ok = ger == bek
        kotu += (not ok)
        print("  %s %-34s %s" % ("🟢" if ok else "🔴", ad, bilgi))
    print("")
    print("%d/%d dal ateşledi" % (len(d) - kotu, len(d)))
    return 1 if kotu else 0


if __name__ == "__main__":
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.exit(main())
