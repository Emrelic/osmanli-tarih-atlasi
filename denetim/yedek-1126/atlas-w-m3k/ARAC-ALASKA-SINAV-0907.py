# -*- coding: utf-8 -*-
"""ALASKA-DEVIR-0907 — yamanın SINAVI. Denetçiler TAKLİT EDİLMEZ, KOŞTURULUR.

Ölçülen eksenler — ve `Değişmez 1`/`1b` bu yamada ÖZELLİKLE kritik, çünkü
sevkin önerdiği `bos:"devletsiz"` yolu tam onları bozacaktı:
  ① C13③ GİRDİ   yama DİSKTEN, node ile okunur
  ② Değişmez 1   yamadan sonra YENİ sahipsiz nokta doğdu mu
  ③ Değişmez 1b  BEYANSIZ pencere arası boşluk arttı mı (§1.5: 0)
  ④ Değişmez 2s  kapsam İÇİ açık kırılma arttı mı (tavan 121)
  ⑤ C13④ ÇIKTI   1923-10-28 kimliği YENİDEN ölçülür — hepsi `abd` olmalı
"""
import io
import json
import os
import subprocess
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "arac"))
import girdi  # noqa: E402
sys.argv = [sys.argv[0]]
import denetle  # noqa: E402

KOK = os.path.join(os.path.dirname(__file__), "..")
YAMA = os.path.join(KOK, "denetim", "yer_yama_alaska_devir_0907.js")
GUN = "1923-10-28"


def node_oku(yol):
    js = ("global.window={};eval(require('fs').readFileSync(%s,'utf8'));"
          "const k=Object.keys(global.window);"
          "if(k.length!==1)throw new Error('tek degisken: '+k);"
          "process.stdout.write(JSON.stringify("
          "{ad:k[0],kayit:global.window[k[0]]}));" % json.dumps(yol))
    r = subprocess.run(["node", "-e", js], capture_output=True, text=True,
                       encoding="utf-8")
    if r.returncode:
        raise RuntimeError(r.stderr[-400:])
    return json.loads(r.stdout)


def olc2s(Y, O):
    Yc = [y for y in Y if y.get("_kaynak") not in denetle.KUYRUK_DOSYALARI]
    kir, acik = denetle.degismez2(Yc, O, kategoriler=("s",))
    ici, disi = denetle.kapsam_disi(Y, acik)
    return len(kir), len(ici), len(disi)


def main():
    Y = denetle.yerlesimleri_yukle()
    O = denetle.olaylari_yukle()
    ok = True

    print("① C13③ GIRDI — yama DISKTEN, node ile")
    y = node_oku(YAMA)
    bekle = "YER_YAMA_ALASKA_DEVIR_0907"
    print("   window.%s · kayit %d · ad dogru: %s"
          % (y["ad"], len(y["kayit"]), "🟢" if y["ad"] == bekle else "🔴"))
    ok &= (y["ad"] == bekle and len(y["kayit"]) == 5)

    s1_0 = denetle.degismez1(Y)
    b1_0 = denetle.degismez1b(Y)
    k0, i0, d0 = olc2s(Y, O)
    print("\n   ONCE  sahipsiz %d · 1b bosluk %s · 2s(kirilma %d, ici %d, disi %d)"
          % (len(s1_0), _b(b1_0), k0, i0, d0))

    ix = {t["ad"]: t for t in Y}
    for r in y["kayit"]:
        if r["ad"] not in ix:
            print("   🔴 %s veride yok" % r["ad"])
            ok = False
            continue
        ix[r["ad"]]["s"] = r["s"]

    s1_1 = denetle.degismez1(Y)
    b1_1 = denetle.degismez1b(Y)
    k1, i1, d1 = olc2s(Y, O)
    print("   SONRA sahipsiz %d · 1b bosluk %s · 2s(kirilma %d, ici %d, disi %d)"
          % (len(s1_1), _b(b1_1), k1, i1, d1))

    print("\n② Degismez 1  YENI sahipsiz: %s %s"
          % (sorted(set(s1_1) - set(s1_0)) or "yok",
             "🟢" if not (set(s1_1) - set(s1_0)) else "🔴"))
    ok &= not (set(s1_1) - set(s1_0))

    n0, n1 = _n(b1_0), _n(b1_1)
    print("③ Degismez 1b bosluk %d -> %d  %s"
          % (n0, n1, "🟢" if n1 <= n0 else "🔴 ARTTI"))
    ok &= (n1 <= n0)

    print("④ Degismez 2s kapsam ICI %d -> %d (tavan 121) %s · DISI %d -> %d"
          % (i0, i1, "🟢" if i1 <= 121 and i1 <= i0 else
             ("🟢 tavan alti" if i1 <= 121 else "🔴"), d0, d1))
    ok &= (i1 <= 121)

    print("\n⑤ C13④ CIKTI — 1923-10-28 kimligi YENIDEN olculdu")
    for r in y["kayit"]:
        kim = None
        for p in r["s"]:
            if p["f"] <= GUN < p["t"]:
                kim = p["d"]
        isaret = "🟢" if kim == "abd" else "🔴"
        print("   %-34s -> %s %s" % (r["ad"], kim, isaret))
        ok &= (kim == "abd")

    print("\n⚠️ BEKLENEN UYARI: `rus-amerika` kunyesi devletler.js'te HENUZ "
          "YOK\n   ⇒ 4c/4d bu yamayi kunyesiz gorur. Bu bir KUSUR DEGIL, "
          "SIRA meselesi:\n   kunye (denetim/YAMA-KUNYE-RUS-AMERIKA-0907.json) "
          "once inecek.")
    print("\n%s" % ("🟢 SINAVLAR GECTI" if ok else "🔴 SINAV DUSTU"))
    return 0 if ok else 1


def _n(b):
    return len(b[0]) if isinstance(b, tuple) else (
        len(b) if hasattr(b, "__len__") else int(b or 0))


def _b(b):
    return str(_n(b))


if __name__ == "__main__":
    sys.exit(main())
