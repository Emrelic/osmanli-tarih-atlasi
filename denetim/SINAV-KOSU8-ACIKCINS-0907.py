# -*- coding: utf-8 -*-
u"""Ⓐ'NIN 48 «GERÇEK AÇIK BORÇ» SATIRI — HEPSİ AYNI CİNS Mİ?

    SINAV-KOSU8-0907 · 7 Eylül 2026

`SINAV-KOSU8-ACIK-0907.py` 164 satırı üçe ayırdı ve **48**'ini
*"gerçek açık borç"* saydı. O kovaya elle bakınca üç satır göze
çarptı:
```
tanımlayıcı `f86bcbb` kaynakta YOK      ← bu bir GIT COMMIT SHA'sı
tanımlayıcı `r1859`   kaynakta YOK      ← bu bir YAYIN SÜRÜM DAMGASI
yol `data/yer_yama_k85.js` YOK          ← bu GERÇEKTEN bir dosya
```
🔴 İlk ikisi **doğası gereği kaynakta bulunmaz.** Bir commit SHA'sı
git nesne veritabanında yaşar, `?v=rNNNN` damgası `index.html`in
geçmişinde. Onları *"kaynakta yok ⇒ açık borç"* saymak, `§11`in
***"eşleşme bulmak, doğru şeyi bulmak değildir"*** ailesinin
**artefakt cinsi** yüzü: alet doğru aradı, **yanlış evrende.**

⇒ DÖRDÜNCÜ KOVA: **⚫ YANLIŞ CİNS** — artefakt bir kaynak
tanımlayıcısı değil, ve *"kaynakta yok"* onun hakkında **hiçbir şey**
söylemez.

## VE YANLIŞ CİNS «ÖLÇÜLEMEDİ» DEĞİLDİR — ÖLÇÜLEBİLİR
Bir commit SHA'sı **git'e sorulur** (`git cat-file -t`); bir sürüm
damgası `index.html`in geçmişinde **aranır** (`git log -S`). Yani bu
kova bir bilinmezlik değil, **başka bir kapıdan ölçülen** bir kova.
📌 `§4`ün *"dar slug tutmazsa KAPSAYICI maddeyi dene"* kuralının
**artefakt** yüzü: aranan şey yoksa, önce **doğru kapıda mı arıyorum**
diye sorulur.

## MANTIK YENİDEN YAZILMADI
Bu alet `SINAV-KOSU8-ACIK-0907.py`yi **içe aktarıyor** ve onun
`acik_satirlar()` + `sinifla()` fonksiyonlarını çağırıyor. Kendi
ayrıştırıcımı yazmak bu projede sekiz kez ısırdı; ateşleme sınavından
geçmiş bir aleti kopyalamak dokuzuncusu olurdu.

    py denetim/SINAV-KOSU8-ACIKCINS-0907.py
    py denetim/SINAV-KOSU8-ACIKCINS-0907.py --atesle
"""
from __future__ import unicode_literals

import os
import re
import subprocess
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ALET = os.path.join(KOK, "denetim", "SINAV-KOSU8-ACIK-0907.py")

ARTEFAKT = re.compile(r"`([^`]+)`")
SHA_RX = re.compile(r"^[0-9a-f]{7,40}$")
SURUM_RX = re.compile(r"^r\d{2,5}$")
YOL_RX = re.compile(r"^[A-Za-z0-9_\-]+/")


def aleti_yukle():
    u"""Dosya adında tire var — normal `import` çalışmaz."""
    import importlib.util
    ozel = importlib.util.spec_from_file_location("_acik0907", ALET)
    mod = importlib.util.module_from_spec(ozel)
    ozel.loader.exec_module(mod)
    return mod


def git(args):
    p = subprocess.run(["git"] + args, cwd=KOK, capture_output=True,
                       timeout=120)
    return (p.returncode,
            p.stdout.decode("utf-8", "replace").strip(),
            p.stderr.decode("utf-8", "replace").strip())


def sha_var_mi(sha):
    kod, cikti, _ = git(["cat-file", "-t", sha])
    if kod == 0 and cikti == "commit":
        _k, tarih, _e = git(["show", "-s", "--format=%ci %s", sha])
        return True, tarih[:60]
    return False, None


def surum_var_mi(damga):
    u"""`?v=rNNNN` damgası `index.html`in geçmişinde geçmiş mi?"""
    kod, cikti, _ = git(["log", "-S", "?v=" + damga, "--oneline",
                         "--", "index.html"])
    if kod == 0 and cikti:
        return True, cikti.splitlines()[0][:60]
    return False, None


def cinsle(art):
    if SHA_RX.match(art):
        return "sha"
    if SURUM_RX.match(art):
        return "surum"
    if YOL_RX.match(art) or art.endswith((".js", ".py", ".md", ".json")):
        return "yol"
    return "tanim"


def main():
    if "--atesle" in sys.argv:
        return atesle()

    mod = aleti_yukle()
    satirlar = mod.acik_satirlar()
    acik = []
    for gor, no, s in satirlar:
        k, ger = mod.sinifla(s)
        if k == "AÇIK":
            m = ARTEFAKT.search(ger)
            acik.append((gor, no, m.group(1) if m else "(?)", ger))

    print("═" * 78)
    print("Ⓐ'NIN «GERÇEK AÇIK BORÇ» KOVASI — CİNSLERE AYRILIYOR")
    print("═" * 78)
    print("AÇIK satır (aletin verdiği): %d" % len(acik))
    print("")

    kova = {"sha": [], "surum": [], "yol": [], "tanim": []}
    for gor, no, art, ger in acik:
        kova[cinsle(art)].append((gor, no, art, ger))
    for k in ("sha", "surum", "yol", "tanim"):
        print("  %-8s %3d" % (k, len(kova[k])))
    print("")

    yanlis_cins = 0
    gercek = 0

    # ── SHA'lar: git'e SORULUR
    print("① GIT COMMIT SHA'SI — kaynakta değil GIT'te aranır")
    benzersiz = sorted(set(a for _g, _n, a, _r in kova["sha"]))
    for a in benzersiz:
        var, bilgi = sha_var_mi(a)
        sayi = sum(1 for x in kova["sha"] if x[2] == a)
        if var:
            yanlis_cins += sayi
            print("  🟢 %-10s VAR (%d satır) — %s" % (a, sayi, bilgi))
        else:
            gercek += sayi
            print("  🔴 %-10s git'te de YOK (%d satır) — GERÇEK kayıp"
                  % (a, sayi))
    if not benzersiz:
        print("  (yok)")
    print("")

    # ── Sürüm damgaları: index.html geçmişinde aranır
    print("② YAYIN SÜRÜM DAMGASI — `index.html` geçmişinde aranır")
    benzersiz = sorted(set(a for _g, _n, a, _r in kova["surum"]))
    for a in benzersiz:
        var, bilgi = surum_var_mi(a)
        sayi = sum(1 for x in kova["surum"] if x[2] == a)
        if var:
            yanlis_cins += sayi
            print("  🟢 %-8s geçmişte VAR (%d satır) — %s"
                  % (a, sayi, bilgi))
        else:
            gercek += sayi
            print("  🔴 %-8s geçmişte de YOK (%d satır)" % (a, sayi))
    if not benzersiz:
        print("  (yok)")
    print("")

    # ── Yollar ve tanımlayıcılar: aletin hükmü DURUYOR
    print("③ DOSYA YOLU ve ④ KAYNAK TANIMLAYICISI — aletin hükmü duruyor")
    for k, baslik in (("yol", "DOSYA YOLU"), ("tanim", "TANIMLAYICI")):
        benzersiz = {}
        for _g, _n, a, _r in kova[k]:
            benzersiz[a] = benzersiz.get(a, 0) + 1
        print("  %s — %d satır · %d benzersiz artefakt"
              % (baslik, len(kova[k]), len(benzersiz)))
        for a in sorted(benzersiz, key=lambda x: -benzersiz[x]):
            print("     %-46s %d satır" % (a, benzersiz[a]))
        gercek += len(kova[k])
    print("")

    print("─" * 78)
    print("SONUÇ")
    print("  ⚫ YANLIŞ CİNS (kaynakta aranmamalıydı) : %3d  (%.1f%%)"
          % (yanlis_cins, 100.0 * yanlis_cins / max(1, len(acik))))
    print("  🔴 GERÇEK AÇIK BORÇ (kova daraldı)      : %3d  (%.1f%%)"
          % (gercek, 100.0 * gercek / max(1, len(acik))))
    print("")
    print("⚠️ SINIR — bu ölçüm kovayı DARALTIR, TEMİZLEMEZ:")
    print("   «yol» ve «tanım» kovaları HÂLÂ ELLE OKUNMADI. Bir dosyanın")
    print("   yokluğu, işin yapılmadığını KESİN göstermez — iş başka bir")
    print("   dosyada yapılmış olabilir. Bu kova bir ÜST SINIRDIR.")
    return 0


def atesle():
    u"""C13 ② — cins ayırıcı her dalda ötüyor mu?"""
    print("C13 ② ATEŞLEME — cinsleme")
    olay = [
        ("f86bcbb", "sha"), ("d143e65", "sha"),
        ("r1859", "surum"), ("r6711", "surum"),
        ("data/yer_yama_k85.js", "yol"),
        ("oturumlar/MOTOR-EPOK.md", "yol"),
        ("olaylar_ek7.js", "yol"),
        ("oku_kara", "tanim"), ("KADEME_YAMA", "tanim"),
        # 🔴 SINIR VAKALARI — ayırıcının yanılabileceği yerler
        ("abcdef", "tanim"),        # 6 hane: SHA değil (eşik 7)
        ("r1", "tanim"),            # 1 hane: sürüm değil (eşik 2)
        ("deadbeef", "sha"),        # hex görünümlü kelime — SHA sayılır
    ]
    kotu = 0
    for art, bekle in olay:
        ger = cinsle(art)
        ok = ger == bekle
        kotu += (not ok)
        print("  %s %-26s beklenen %-6s ölçülen %s"
              % ("🟢" if ok else "🔴", art, bekle, ger))
    print("")
    print("  ⚠️ Son satır KASITLI: `deadbeef` bir kelime ama hex, ve")
    print("     ayırıcı onu SHA sayıyor. Bu bir KUSUR DEĞİL bir SINIR —")
    print("     ve git'e sorulunca «yok» çıkacağı için GERÇEK kovasına")
    print("     düşer, yani yanlış tarafa DÜŞMEZ. Kayda geçiyor.")
    print("")
    print("%d/%d dal ateşledi" % (len(olay) - kotu, len(olay)))
    return 1 if kotu else 0


if __name__ == "__main__":
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.exit(main())
