# -*- coding: utf-8 -*-
u"""ALASKA: RAPOR ile YAMA BİREBİR AYNI MI? — bağımsız kıyas.

    SINAV-KOSU8-0907 · 7 Eylül 2026

İki dosya var ve ben bugün **yanlış olanı** iş sandım:
```
denetim/ALASKA-DEVIR-0907.json          1.885 B   RAPOR (insan okunur zincir)
denetim/yer_yama_alaska_devir_0907.js  11.567 B   YAMANIN KENDİSİ (s:[{f,t,d}])
```
Dönüştürücü gereksizdi — ama boşa gitmedi: raporun `yeni` zincirlerinden
**bağımsız olarak** 18 dönem ürettim. Bu alet o 18 dönemi yamanın
kendisiyle karşılaştırıyor.

    AYNI ise    yama, raporun beyanını birebir taşıyor  ⇒ İKİ UÇ tutuyor
    FARKLI ise  ikisinden biri ötekini yanlış anlatıyor ⇒ merge'den ÖNCE
                bilinmeli

📌 `§3.5.1`: *bir sınır kayması önerildiğinde İKİ UÇ DA ölçülür.* Burada
iki uç RAPOR ile YAMA; bugüne kadar kimse ikisini yan yana koymadı —
çünkü ikisinin **aynı işin iki dosyası** olduğu da bugün anlaşıldı.

Bu alet hiçbir dosyaya yazmaz.
"""
from __future__ import unicode_literals

import io
import json
import os
import re
import subprocess
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RAPOR = os.path.join(KOK, "denetim", "ALASKA-DEVIR-0907.json")
YAMA = os.path.join(KOK, "denetim", "yer_yama_alaska_devir_0907.js")
KALIP = re.compile(r"(\d{4}-\d{2}-\d{2})\.\.(\d{4}-\d{2}-\d{2}) ([a-z0-9\-]+)")

# `_sahiplik_uygula.py:88` süzgeci — ADIYLA, tahminle değil.
SUZGEC = ("d", "s", "v", "isg", "m", "kaynak", "bos", "neden", "not", "kur")


def yamayi_oku():
    u"""JS'i kendi yorumlayıcısına okutur — regex DEĞİL (§11, sekiz vaka)."""
    p = subprocess.run(
        ["node", "-e",
         "global.window={};"
         "eval(require('fs').readFileSync(process.argv[1],'utf8'));"
         "const A=Object.keys(global.window).map(k=>global.window[k])"
         ".filter(Array.isArray);"
         "process.stdout.write('@@'+JSON.stringify({"
         "adlar:Object.keys(global.window),kayit:A.length?A[0]:[]}));",
         YAMA],
        cwd=KOK, capture_output=True, timeout=300)
    ham = p.stdout.decode("utf-8", "replace")
    if "@@" not in ham:
        print("🔴 yama okunamadı: %s"
              % (ham + p.stderr.decode("utf-8", "replace"))[-300:])
        return None, None
    v = json.loads(ham.split("@@", 1)[1])
    return v["adlar"], v["kayit"]


def main():
    with io.open(RAPOR, encoding="utf-8") as f:
        kalemler = json.load(f)["kalemler"]
    beyan = {}
    for k in kalemler:
        don = []
        for ham in k["yeni"]:
            m = KALIP.match(ham)
            if not m or m.end() != len(ham):
                print("🔴 rapor dizgisi kalıba uymuyor: %r" % ham)
                return 2
            don.append({"f": m.group(1), "t": m.group(2), "d": m.group(3)})
        beyan[k["ad"]] = don

    adlar, kayitlar = yamayi_oku()
    if kayitlar is None:
        return 2
    print("YAMA · window adları : %s" % ", ".join(adlar))
    print("YAMA · kayıt         : %d" % len(kayitlar))
    print("RAPOR · kalem        : %d" % len(beyan))
    print("")

    # ── SÜZGEÇ SINAVI — kayıt `_sahiplik_uygula`ya görünür mü?
    print("SÜZGEÇ SINAVI (`_sahiplik_uygula.py:88`)")
    gorunmez = []
    for r in kayitlar:
        var = [a for a in SUZGEC if r.get(a) is not None]
        if not r.get("ad") or not var:
            gorunmez.append(r.get("ad") or "(adsız)")
        print("  %-34s ad:%s  taşıdığı: %s"
              % (r.get("ad"), "VAR" if r.get("ad") else "🔴 YOK",
                 ", ".join(var) or "🔴 HİÇBİRİ"))
    print("  ⇒ %s"
          % ("🔴 SÜZGEÇTEN ELENEN: %s" % ", ".join(gorunmez) if gorunmez
             else "🟢 %d kaydın %d'i süzgeçten GEÇER"
                  % (len(kayitlar), len(kayitlar))))
    print("")

    # ── KIYAS
    print("KIYAS · rapor `yeni` zinciri ↔ yama `s:` dizisi")
    yama_ix = {}
    for r in kayitlar:
        yama_ix.setdefault(r.get("ad"), []).append(r)
    fark = []
    for ad in beyan:
        rs = yama_ix.get(ad)
        if not rs:
            fark.append("%s · YAMADA YOK" % ad)
            print("  🔴 %-34s YAMADA YOK" % ad)
            continue
        if len(rs) > 1:
            fark.append("%s · yamada %d KEZ" % (ad, len(rs)))
        s = [{"f": p.get("f"), "t": p.get("t"), "d": p.get("d")}
             for p in (rs[0].get("s") or [])]
        if s == beyan[ad]:
            print("  🟢 %-34s BİREBİR AYNI (%d dönem)" % (ad, len(s)))
        else:
            print("  🔴 %-34s AYRIŞIYOR" % ad)
            print("       rapor: %s" % json.dumps(beyan[ad],
                                                  ensure_ascii=False))
            print("       yama : %s" % json.dumps(s, ensure_ascii=False))
            fark.append("%s · rapor ≠ yama" % ad)
    yalniz_yamada = [a for a in yama_ix if a not in beyan]
    if yalniz_yamada:
        print("  ⚪ yalnız yamada olan (raporda yok): %s"
              % ", ".join(yalniz_yamada))
    print("")

    # ── KAYNAK / NOT beyanı
    print("§4 BEYAN · `kaynak:` ve `not:` alanları")
    for r in kayitlar:
        k = r.get("kaynak")
        n = r.get("not")
        print("  %-34s kaynak:%s  not:%s"
              % (r.get("ad"),
                 ("%d kar." % len(k)) if k else "🔴 YOK",
                 ("%d kar." % len(n)) if n else "—"))
    print("")

    print("TOPLAM yama dönemi: %d"
          % sum(len(r.get("s") or []) for r in kayitlar))
    if fark:
        print("🔴 AYRIŞMA · %d" % len(fark))
        for f in fark:
            print("   · %s" % f)
        return 1
    print("🟢 RAPOR ile YAMA BİREBİR AYNI — iki uç tutuyor.")
    return 0


if __name__ == "__main__":
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.exit(main())
