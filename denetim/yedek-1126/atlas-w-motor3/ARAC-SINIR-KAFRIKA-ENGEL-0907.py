# -*- coding: utf-8 -*-
"""ENGEL KÜMESİ SINAVI — öneriler KÖR MÜ ÜRETİLDİ? · SINIR-KAFRIKA-0907

`renk_olc --oner` 15 kimliğin hepsi için şunu bastı:
```
🔴 komşusu ölçülemeyen kimlik: <15'inin hepsi>
   (verisi girdi.py'nin okuduğu dosyalarda DEĞİL —
    öneri yalnız altlık ve Osmanlı ikilisine dayanır)
   arvanid-sancagi   0 komşu, 2 renkli engel
```
⇒ ΔE'ler **2-3 engelli** bir evrende hesaplandı. Yamalar inince o
kimlikler gerçek komşular kazanacak ve ΔE **çökebilir.**

📌 `§11`in ÖLÇÜLMÜŞ vakası: *"ÖLÇEMEDİĞİNİ ELEYEN BİR SÜZGEÇ, ONU TEMİZ
SAYAR"* — `kuba ↔ lunda`: `b not in nokta` ⇒ engel SAYILMADI, sonra 365
km komşu oldular ve çakıştılar (ΔE 9,06). **Bu tam o durum.**

BU ALET: yamaların dokunduğu yerleşimlerin KOORDİNATLARINI atlastan
bulur ve her kimlik için "yamalar inince komşusu kim OLACAK" sorusunu
en kötü hâl varsayımıyla ölçer.

⚠️ SINIR: yaklaşıklık. Gerçek komşuluk Voronoi'den doğar; bu alet
MESAFE kullanıyor. Yön doğru, sınır kesin değil.
"""
import io
import json
import math
import os
import re
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi  # noqa: E402
import renkler as R  # noqa: E402  — YALNIZ OKUMA

HEDEF = ["arvanid-sancagi", "avusturya-cumhuriyet", "cezayir-ocagi",
         "dejanovic-prensligi", "dubrovnik", "gvalyar-sindiya",
         "indor-holkar", "kaheti-kralligi", "konstantin-beyligi",
         "kumuk-samhalligi", "mekke-serifligi", "meysur-racaligi",
         "orta-macar-kralligi", "sarki-rumeli", "trablusgarp-ocagi"]
YAKIN_KM = 600.0     # `§11`: <600 km ihlal · 600-1500 uyarı · >1500 tasarım


def km(a, b):
    f1, f2 = math.radians(a[1]), math.radians(b[1])
    x = (math.sin((f2 - f1) / 2) ** 2
         + math.cos(f1) * math.cos(f2) * math.sin(math.radians(b[0] - a[0]) / 2) ** 2)
    return 6371.0 * 2 * math.asin(min(1.0, math.sqrt(x)))


def main():
    Y = girdi.yukle()
    ix = {}
    for y in Y:
        if y.get("lon") is not None:
            ix.setdefault(y["ad"], y)
    boyali = set(R.BOYALAR.keys())

    olcum = json.load(io.open(os.path.join(KOK, "denetim",
                      "OLCUM-SINIR-KAFRIKA-RENKSIZ-0907.json"),
                      encoding="utf-8"))
    dosya_of = {k["kimlik"]: k["dosya"] for k in olcum["renksiz"]}

    # yamalardan (kimlik -> dokundugu yerlesim adlari)
    AD_RX = re.compile(r'\bad\s*:\s*"([^"]{1,60})"')
    yer = {k: set() for k in HEDEF}
    for kim in HEDEF:
        for d in dosya_of.get(kim, []):
            yol = os.path.join(KOK, d)
            if not os.path.exists(yol):
                continue
            s = io.open(yol, encoding="utf-8", errors="replace").read()
            s = re.sub(r"//[^\n]*", " ", s)
            # kaydi kaba bol, icinde kimlik gecen kayitlarin `ad`ini al
            for parca in re.split(r"\}\s*,\s*\{", s):
                if ('"%s"' % kim) in parca:
                    m = AD_RX.search(parca)
                    if m:
                        yer[kim].add(m.group(1))

    print("SORU: yamalar ININCE bu kimliklerin komsusu KIM OLACAK?")
    print("YAKINLIK ESIGI: %.0f km  (`§11` ihlal bandi)" % YAKIN_KM)
    print("")
    print("%-24s %5s %5s  %s" % ("kimlik", "yer", "koor", "600 km icindeki RENKLI kimlikler"))
    print("-" * 104)
    sonuc = {}
    for kim in HEDEF:
        adlar = sorted(yer[kim])
        koor = [(ix[a]["lon"], ix[a]["lat"]) for a in adlar if a in ix]
        yakin = {}
        for c in koor:
            for y in Y:
                if y.get("lon") is None:
                    continue
                d = km(c, (y["lon"], y["lat"]))
                if d > YAKIN_KM:
                    continue
                for kat in ("d", "v", "s"):
                    for p in (y.get(kat) or []):
                        kd = p.get("d") or p.get("kid")
                        if kd and kd in boyali and kd != kim:
                            if kd not in yakin or d < yakin[kd]:
                                yakin[kd] = d
        sonuc[kim] = {"yerlesim": adlar, "koordinatli": len(koor),
                      "yakin_renkli": {k: round(v, 1)
                                       for k, v in sorted(yakin.items(),
                                                          key=lambda x: x[1])}}
        ilk = sorted(yakin.items(), key=lambda x: x[1])[:5]
        print("%-24s %5d %5d  %d kimlik | en yakin: %s"
              % (kim, len(adlar), len(koor), len(yakin),
                 ", ".join("%s %.0fkm" % (a, b) for a, b in ilk)))

    yol = os.path.join(KOK, "denetim", "OLCUM-SINIR-KAFRIKA-ENGEL-0907.json")
    with io.open(yol, "w", encoding="utf-8") as f:
        f.write(json.dumps({
            "_NOT": "renk_olc --oner 15 kimligin HEPSI icin '0 komsu, 2-3 "
                    "renkli engel' dedi. Bu alet 'yamalar inince komsusu kim "
                    "OLACAK' sorusunu MESAFEYLE olcer. Yaklasiklik: gercek "
                    "komsuluk Voronoi'den dogar.",
            "esik_km": YAKIN_KM,
            "kimlikler": sonuc,
        }, ensure_ascii=False, indent=1))
    print("")
    print("yazildi: %s" % yol)
    top = sum(len(v["yakin_renkli"]) for v in sonuc.values())
    print("")
    print("=== HUKUM ===")
    print("aracin kullandigi engel sayisi : 2-3 (kimlik basina)")
    print("600 km icinde GERCEKTE bulunan : %.1f (ortalama)" % (top / len(HEDEF)))
    print("⇒ Oneriler bu farkin BUYUKLUGU kadar KOR uretildi.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
