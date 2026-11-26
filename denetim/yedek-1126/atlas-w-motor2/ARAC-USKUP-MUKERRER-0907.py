# -*- coding: utf-8 -*-
"""USKUP-MUKERRER-0907 — "Üsküp grep'te iki kez çıkıyor" şüphesini ÖLÇ.

🔴 SORU DAR, AMA "YOK" DEMEDEN ÖNCE ÜÇ EKSEN SORULMALI. Bir grep'in tek
   sonuç vermesi mükerrer olmadığını göstermez: aynı yer BAŞKA BİR ADLA
   yazılmış olabilir (`§4` Türkçe yazım ekseni · `Üsküp` ↔ `Skopje` ·
   `Diyarbekir` ↔ `Diyarbakır`). Bu proje o tuzağa BEŞ KEZ düştü.
```
① AD      kaç yerleşim kaydı `ad:"Üsküp"` taşıyor
② MESAFE  Üsküp'ün çevresinde (≤25 km) BAŞKA bir nokta var mı — adı ne
          olursa olsun. `§11`: 3 km bir YASAK değil bir ŞÜPHE eşiğidir,
          ve şartı ZAMAN ÇİZGİLERİNİN AYNI olmasıdır.
③ VARYANT külliyatta NORMALLEŞTİRİLMİŞ adı çakışan çift var mı — yani
          bir grep'in göremeyeceği mükerrer. (Ortak normalleştirici
          `denetim/ARAC-NORMAL-0903.py` KULLANILDI, yenisi YAZILMADI:
          "üç ayrı alet üç ayrı normalleştirici yazarsa üç ayrı kör
          nokta doğar.")
```
🔴 Ve ④: `ad_esanlam.js` VAR — ama OKUYAN var mı? (`§11`: bir bilgi
   makinenin göremeyeceği yerde duruyorsa kayıt vardır, VERİ YOKTUR.)
"""
import io
import os
import re
import subprocess
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "arac"))
import girdi  # noqa: E402
import importlib.util  # noqa: E402

KOK = os.path.join(os.path.dirname(__file__), "..")
HEDEF = "Üsküp"

sp = importlib.util.spec_from_file_location(
    "normal", os.path.join(os.path.dirname(__file__), "ARAC-NORMAL-0903.py"))
N = importlib.util.module_from_spec(sp)
sp.loader.exec_module(N)


def main():
    Y = girdi.yukle(sessiz=True)
    ix = {y["ad"]: y for y in Y}

    print("① AD — `ad:` alani olarak kac yerlesim kaydi")
    tam = [y for y in Y if y["ad"] == HEDEF]
    print("   `%s` kaydi: %d %s" % (HEDEF, len(tam),
                                    "🟢" if len(tam) == 1 else "🔴"))
    # `m:` referanslari mukerrer DEGILDIR — baska bir alan
    mref = [y["ad"] for y in Y if y.get("m") == HEDEF]
    print("   `m:\"%s\"` ile ONA BAGLI nokta: %d  %s"
          % (HEDEF, len(mref), ", ".join(sorted(mref))))
    print("   ⇒ grep'teki fazla satirlarin cogu BU — mukerrer degil, MERKEZ")
    if len(tam) != 1:
        return 1
    u = tam[0]
    print("   %s  lat %.4f lon %.4f  k:%s  dosya %s"
          % (u["ad"], u["lat"], u["lon"], u.get("k"), u.get("_kaynak")))

    print("\n② MESAFE — Uskup'un 25 km'sinde BASKA nokta (adi ne olursa olsun)")
    yakin = []
    for y in Y:
        if y is u or y.get("lat") is None:
            continue
        d = girdi.km(u["lat"], u["lon"], y["lat"], y["lon"])
        if d <= 25:
            yakin.append((d, y))
    if not yakin:
        print("   25 km icinde BASKA NOKTA YOK 🟢 — mukerrer supheси DUSUYOR")
    for d, y in sorted(yakin):
        print("   %6.2f km  %s (%s)" % (d, y["ad"], y.get("_kaynak")))

    print("\n③ VARYANT — normallestirilmis adi CAKISAN cift (grep GOREMEZ)")
    kova = {}
    for y in Y:
        kova.setdefault(N.norm(y["ad"]), []).append(y)
    cak = {k: v for k, v in kova.items() if len(v) > 1}
    print("   yerlesim %d · benzersiz normal ad %d · CAKISAN kova %d %s"
          % (len(Y), len(kova), len(cak), "🟢" if not cak else "🔴"))
    for k, v in sorted(cak.items()):
        adlar = [x["ad"] for x in v]
        d = girdi.km(v[0]["lat"], v[0]["lon"], v[1]["lat"], v[1]["lon"]) \
            if all(x.get("lat") is not None for x in v[:2]) else -1
        print("   🔴 %-24s %s  (%.1f km)" % (k, adlar, d))

    print("\n④ `ad_esanlam.js` — VAR ama OKUYAN VAR MI?")
    yol = os.path.join(KOK, "data", "ad_esanlam.js")
    if not os.path.exists(yol):
        print("   dosya YOK")
    else:
        s = io.open(yol, encoding="utf-8").read()
        n = len(re.findall(r'"[^"]+"\s*:\s*\[', s))
        print("   %s · %d eslesme girdisi" % (os.path.basename(yol), n))
        var = "Üsküp" in s and "Skopje" in s
        print("   `Üsküp` ↔ `Skopje` kaydi: %s" % ("🟢 VAR" if var else "🔴 YOK"))
        r = subprocess.run(
            ["git", "grep", "-l", "-e", "ad_esanlam", "-e", "AD_ESANLAM",
             "--", "arac", "js", "denetim", "index.html"],
            capture_output=True, text=True, encoding="utf-8", cwd=KOK)
        okur = [x for x in r.stdout.split() if x]
        print("   ONU OKUYAN dosya: %d %s"
              % (len(okur), "🟢 " + ", ".join(okur) if okur
                 else "🔴 HICBIRI — kayit var, VERI yok (§11)"))
    return 0


if __name__ == "__main__":
    sys.exit(main())
