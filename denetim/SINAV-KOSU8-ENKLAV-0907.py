# -*- coding: utf-8 -*-
u"""ENKLAV 661/660 — «+1» HANGİ KAYIT? Tabanla karşılaştırılarak.

    SINAV-KOSU8-0907 · sevk: 1.MURAT · 7 Eylül 2026 · 🔴 SALT OKUR

`Değişmez 7` bugün **661** sorgusuz enklav sayıyor, tavan **660**.
`BEKLENEN_ENKLAV_SORGU`nun kendi yorumu ne yapılacağını yazıyor:

> *"bu sabit bir HEDEF degil bir FOTOGRAF … Buyume KUSUR DEGIL — kusur,
> bir enklavin koridoru SORULDUGU HALDE cevapsiz kalmasidir."*

Ve emsal aynı dosyada: **4 Eylül'de `639 → 642` kaydırılmadan önce
«hangi ÜÇ» diye soruldu ve üçü de adıyla bulundu.** Bu alet aynısını
`+1` için yapıyor.

## 🔴 ÖNCE BİR ÖNCÜL ÇÜRÜDÜ — ÖLÇÜLDÜ
Sevk *"enklav sayısı GEOMETRİDEN geliyor, ve diskteki geometri koşu
7B'nin ⇒ bugünkü geometriyle cevaplanamaz"* diyordu. Kaynağa soruldu:
```
denetle.py  n7 = len(degismez7(Y))          ← Y = girdi.yukle() ÇIKTISI
degismez7(Y) gövdesi: yalnız `y["d"]`, `y["v"]`, `y["s"]`, koordinatlar
                      donemler.js YOK · petek YOK · geojson YOK
```
⇒ ***Enklav sayısı GEOMETRİDEN DEĞİL, YERLEŞİM VERİSİNDEN geliyor.***
Koşu 8 geometriyi bu **aynı** veriden üretecek; enklav sayısını
değiştirmez. ⇒ Soru **bugün cevaplanabilir**, ve cevabı koşu 8'den
sonra da aynı kalır.

## YÖNTEM — çalışma ağacına DOKUNULMADAN
Taban `d041a08` (5 Eylül 23:07, `BEKLENEN_ENKLAV_SORGU = 660`ın
konduğu commit). O commit'in `data/`sı `git archive` ile **scratch
dizine** çıkarılıyor; `data/` HİÇ checkout edilmiyor (koşu 8 sürerken
`data/` DONUK).
Aynı `arac/` kodu iki veri kümesine uygulanıyor ⇒ fark **veriden**
gelir, koddan değil.

    py denetim/SINAV-KOSU8-ENKLAV-0907.py
Bu alet depoya HİÇBİR ŞEY yazmaz.
"""
from __future__ import unicode_literals

import io
import json
import os
import shutil
import subprocess
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
# W32 (6 Ekim): ESKI SABITLER `TABAN_COMMIT = "d041a08"` + baslıktaki 660/661
# BAYATLADI — tavan 660 → 731'e yürüdü ve d041a08'in `data/`sı bugünkü
# `girdi.py`nin okudugu 93 dosyanın çogunu TASIMIYOR ⇒ taban hiç kurulamıyor,
# alet "ÖLÇÜLEMEDİ … ADLANDIRILAMADI" deyip 1 dönüyordu. Ikisi de artık ÖLÇÜLÜR:
#   · tavan = `denetle.BEKLENEN_ENKLAV_SORGU`nun bugünkü degeri (kaynaktan)
#   · taban commit'i = o sayının SON DEGİSTİGİ commit (git log -G + ebeveyn
#     karsılastırması; yalnız yorumu degistiren commit sayılmaz)
TABAN_COMMIT = None
TAVAN = None
SABIT_RX = r"^BEKLENEN_ENKLAV_SORGU = (\d+)"


def _sabit(kaynak):
    import re
    m = re.search(SABIT_RX, kaynak, re.M)
    return int(m.group(1)) if m else None


def taban_commit_bul():
    u"""Tavanın SAYISININ son degistigi commit — (kısa sha, deger) ya da (None, hata)."""
    p = subprocess.run(["git", "log", "--format=%h", "-G", "^BEKLENEN_ENKLAV_SORGU = ",
                        "--", "arac/denetle.py"], cwd=KOK, capture_output=True, timeout=300)
    for c in p.stdout.decode("ascii", "replace").split():
        v = [subprocess.run(["git", "show", "%s:arac/denetle.py" % r], cwd=KOK,
                            capture_output=True, timeout=300).stdout.decode("utf-8", "replace")
             for r in (c, c + "^")]
        if _sabit(v[0]) is not None and _sabit(v[0]) != _sabit(v[1]):
            return c, _sabit(v[0])
    return None, "tavanı degistiren commit bulunamadı"
GECICI = os.path.join(
    os.environ.get("TEMP", os.path.join(KOK, "..")),
    "_enklav_taban_0907")


def _oku(kok_dizin):
    u"""Verilen depo kökünde `degismez7`yi koştur, enklav kaydını döndür."""
    betik = (
        "import sys, json, io, os\n"
        "sys.path.insert(0, 'arac')\n"
        "import girdi, denetle\n"
        "Y = girdi.yukle(sessiz=True)\n"
        "d7, muaf = denetle.degismez7(Y)\n"
        # 🔴 `[str(x) for x in r]` YAZMA — `d7`nin öğeleri SÖZLÜK ve bir
        #   sözlük üzerinde dolaşmak ANAHTARLARI verir. İlk yazımda öyleydi
        #   ve 660 kaydın 660'ı aynı anahtar listesine ÇÖKTÜ: «1 benzersiz».
        #   Alan kümesini VARSAYMA, SOR — ve sözlüğü DEĞERLERİYLE serile.
        #   📌 Bugün üçüncü kez: `ast.walk` sırayı, `ast.walk` dal üyeliğini,
        #     ve şimdi `for x in dict` değerleri kaybetti. Üçü de TEMİZ bir
        #     sayı üretti ve üçünü de ÇIKTININ KENDİ ÇELİŞKİSİ yakaladı.
        "kayit = []\n"
        "for r in d7:\n"
        "    if isinstance(r, dict):\n"
        "        kayit.append(json.dumps(r, sort_keys=True, default=str))\n"
        "    elif isinstance(r, (list, tuple)):\n"
        "        kayit.append(json.dumps([str(x) for x in r]))\n"
        "    else:\n"
        "        kayit.append(repr(r))\n"
        "sys.stdout.write('@@' + json.dumps(\n"
        "    {'n': len(d7), 'kayit': kayit, 'Y': len(Y)}))\n")
    p = subprocess.run(["py", "-c", betik], cwd=kok_dizin,
                       capture_output=True, timeout=1800)
    ham = p.stdout.decode("ascii", "replace")
    if "@@" not in ham:
        return None, (ham + p.stderr.decode("utf-8", "replace"))[-500:]
    return json.loads(ham.split("@@", 1)[1]), None


def taban_kur():
    u"""`git archive` ile taban `data/`yı scratch'e çıkar — checkout YOK."""
    if os.path.isdir(GECICI):
        shutil.rmtree(GECICI, ignore_errors=True)
    os.makedirs(os.path.join(GECICI, "data"))
    # arac/ AYNI KOD olmalı: fark VERİDEN gelsin, koddan değil
    shutil.copytree(os.path.join(KOK, "arac"),
                    os.path.join(GECICI, "arac"),
                    ignore=shutil.ignore_patterns("__pycache__", "*.pyc"))
    tar = os.path.join(GECICI, "_taban.tar")
    global BOS_SAYILAN
    with io.open(tar, "wb") as f:
        p = subprocess.run(["git", "archive", TABAN_COMMIT, "data"],
                           cwd=KOK, stdout=f, stderr=subprocess.PIPE,
                           timeout=900)
    if p.returncode != 0:
        return p.stderr.decode("utf-8", "replace")[-300:]
    p2 = subprocess.run(["tar", "-xf", "_taban.tar"], cwd=GECICI,
                        capture_output=True, timeout=900)
    if p2.returncode != 0:
        return p2.stderr.decode("utf-8", "replace")[-300:]
    # Bugünkü girdi listesinde olup tabanda HENÜZ olmayan dosya: o gün o veri
    # YOKTU ⇒ bos dizi olarak konur (girdi.py eksik dosyada çöker). ADIYLA basılır.
    sys.path.insert(0, os.path.join(KOK, "arac"))
    import girdi
    BOS_SAYILAN = []
    for ad in girdi.GIRDI_DOSYALARI:
        yol = os.path.join(GECICI, "data", ad)
        if not os.path.exists(yol):
            with io.open(yol, "w", encoding="utf-8") as f:
                f.write("window.YERLESIMLER_W32_BOS = [];\n")
            BOS_SAYILAN.append(ad)
    return None


BOS_SAYILAN = []


def main():
    print("═" * 78)
    global TABAN_COMMIT, TAVAN
    with io.open(os.path.join(KOK, "arac", "denetle.py"), encoding="utf-8") as f:
        TAVAN = _sabit(f.read())
    TABAN_COMMIT, deger = taban_commit_bul()
    if TABAN_COMMIT is None or TAVAN is None or deger != TAVAN:
        print("⚫ ÖLÇÜLEMEDİ — tavan %r · taban commit %r (%r)" % (TAVAN, TABAN_COMMIT, deger))
        return 2
    print("ENKLAV TAVAN %d — tavanın kondugu %s'den bugüne HANGİ KAYITLAR?"
          % (TAVAN, TABAN_COMMIT))
    print("═" * 78)
    print("")

    print("① ÖNCÜL SINAVI — enklav sayısı geometriden mi geliyor?")
    with io.open(os.path.join(KOK, "arac", "denetle.py"),
                 encoding="utf-8") as f:
        kaynak = f.read()
    i = kaynak.find("\ndef degismez7(")
    j = kaynak.find("\ndef ", i + 10)
    govde = kaynak[i:j if j > 0 else len(kaynak)]
    for anahtar in ("donemler", "petek", "geojson", "devletler_harita",
                    "altlik"):
        print("   `%s` degismez7 gövdesinde: %s"
              % (anahtar, "🔴 VAR" if anahtar in govde else "🟢 YOK"))
    print("   ⇒ %s"
          % ("🟢 GEOMETRİ OKUNMUYOR — sayı YERLEŞİM VERİSİNDEN geliyor, "
             "ve koşu 8 onu DEĞİŞTİRMEZ"
             if not any(a in govde for a in
                        ("donemler", "petek", "geojson")) else
             "🔴 geometri okunuyor — koşu 8'den önce ölçülemez"))
    print("")

    print("② BUGÜNKÜ ÖLÇÜM")
    bugun, hata = _oku(KOK)
    if bugun is None:
        print("   ⚫ ÖLÇÜLEMEDİ: %s" % (hata or "")[:200])
        return 2
    print("   yerleşim %d · sorgusuz enklav %d" % (bugun["Y"], bugun["n"]))
    print("")

    print("③ TABAN (%s · BEKLENEN=%d bu commit'te kondu)" % (TABAN_COMMIT, TAVAN))
    hata = taban_kur()
    if hata:
        print("   ⚫ ÖLÇÜLEMEDİ — taban kurulamadı: %s" % hata)
        print("   ⚠️ Bu «temiz» değil: `+1` ADLANDIRILAMADI.")
        return 1
    taban, hata = _oku(GECICI)
    if taban is None:
        print("   ⚫ ÖLÇÜLEMEDİ: %s" % (hata or "")[:200])
        print("   ⚠️ Bu «temiz» değil: `+1` ADLANDIRILAMADI.")
        return 1
    print("   yerleşim %d · sorgusuz enklav %d" % (taban["Y"], taban["n"]))
    if BOS_SAYILAN:
        print("   tabanda henüz OLMAYAN girdi dosyası (boş sayıldı): %s"
              % ", ".join(BOS_SAYILAN))
    print("")

    print("④ FARK")
    # 🔴 `set` KULLANMA — AYNI görünen kayıtlar ÇÖKER ve fark KAYBOLUR.
    #   İlk yazımda öyleydi ve çıktı KENDİ KENDİYLE ÇELİŞTİ: «net +1»
    #   derken «YENİ 0 · KAPANAN 0» bastı. İki küme farklı BOYUTTA olup
    #   farkları boş çıkamaz — çıkıyorsa küme yapısı yanlış.
    #   ⇒ ÇOKLU KÜME (`Counter`): aynı kayıt birden çok kez varsa
    #     çokluğu da bir bulgudur.
    from collections import Counter
    a = Counter(taban["kayit"])
    b = Counter(bugun["kayit"])
    print("   taban %d kayıt → %d benzersiz" % (taban["n"], len(a)))
    print("   bugün %d kayıt → %d benzersiz" % (bugun["n"], len(b)))
    if len(a) != taban["n"] or len(b) != bugun["n"]:
        print("   ⚠️ AYNI GÖRÜNEN KAYITLAR VAR — alanlar bir enklavı")
        print("      benzersiz KİMLİKLEMİYOR. Fark çokluk üzerinden ölçülüyor.")
    print("   net %+d" % (bugun["n"] - taban["n"]))
    yeni = sorted((b - a).elements())
    kapanan = sorted((a - b).elements())
    print("   YENİ DOĞAN : %d" % len(yeni))
    for r in yeni:
        print("      🔴 %s" % str(r)[:400])
    print("   KAPANAN    : %d" % len(kapanan))
    for r in kapanan:
        print("      🟢 %s" % str(r)[:400])
    # W32: iç tutarlılık SINAVDIR, yorum degil — çokluk kümesinde
    # net = yeni − kapanan ARİTMETİK olarak zorunludur; tutmuyorsa ölçülemedi.
    if bugun["n"] - taban["n"] != len(yeni) - len(kapanan):
        print("   🔴 ÇELİŞİK — net %+d ama yeni %d − kapanan %d. `ölçülemedi`."
              % (bugun["n"] - taban["n"], len(yeni), len(kapanan)))
        return 2
    print("")
    print("─" * 78)
    print("⚠️ Net fark `+1` olsa bile YENİ ve KAPANAN ayrı sayılır:")
    print("   bir enklav kapanıp başka biri doğduysa net 0 görünür ve")
    print("   İKİ AYRI OLAY gizlenir. `§11`: tek sayıda toplamak, iki")
    print("   vakayı bir gösterir.")
    print("")
    print("🔴 VE BU ÖLÇÜM BİR ÖNERİ DEĞİL: tavanı yükseltmek `1.MURAT`ın")
    print("   kararı. `CLAUDE.md` körlemesine yükseltmeyi adıyla yasaklıyor")
    print("   — tavan ihlali susturur, haritadaki adayı YERİNDE BIRAKIR.")
    return 0


if __name__ == "__main__":
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.exit(main())
