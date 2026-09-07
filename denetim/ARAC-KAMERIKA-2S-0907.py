# -*- coding: utf-8 -*-
"""KUZEY-AMERIKA-DEVIR-0907 — SAYMADIĞIM EKSEN: `Değişmez 2s`.

🔴 `§11`: *"«her eksende temiz» demek, SAYDIĞIN eksenlerde temiz
   demektir."* Yamanın üç sınavı (kapsama · künye · biçim) `Değişmez 1`i
   ve `4c/4d`yi koruyor — ama yama YENİ KIRILMA GÜNLERİ doğuruyor
   (1848-02-02 · 1846-06-15 · 1853-12-30 · 1821-02-22 · 1836-03-02 ·
   1845-12-29) ve `Değişmez 2s` her kırılmanın ±30 gününde bir kronoloji
   maddesi arar. O eksen sayılmadan yama teslim edilemez.

🔴 VE DENETÇİYİ TAKLİT ETMİYORUM, ONU KOŞTURUYORUM (`§11`): eşiği ·
   kova yapısını · `yer_id` tercihini · `kapsam_disi` ayrımını kendim
   yeniden yazsaydım hepsini taşımam gerekirdi, ve bu proje o hatayı
   ölçtü (taklit alet `4s` kovasını taşımadığı için 4d'yi 467 sandı,
   gerçek 434).

YÖNTEM: veri BELLEKTE yamalanır, `denetle.degismez2` ÖNCE ve SONRA
   çağrılır, fark raporlanır. Disk'e dokunulmaz (koşu 8 · `data/` donuk).
"""
import io
import json
import os
import sys

ARAC = os.path.join(os.path.dirname(__file__), "..", "arac")
sys.path.insert(0, ARAC)
import girdi  # noqa: E402

sys.argv = [sys.argv[0]]          # denetle.py argüman okumasın
import denetle  # noqa: E402

KOK = os.path.join(os.path.dirname(__file__), "..")
YAMA = os.path.join(KOK, "denetim", "yer_yama_kamerika_devir_0907.js")


# 🔴 EVREN — `denetle.py:3308`'in KENDİ çağrısından alındı, TAHMİN EDİLMEDİ:
#     kir_s, acik_ham = degismez2(Y_cekirdek, O, ("s",))
#     acik_s, disi_s  = kapsam_disi(Y, acik_ham)      ← BURADA TAM Y
#   İlk koşumda `degismez2`ye TAM Y verdim ve taban 187 çıktı; `§1.5` 104
#   diyor. Fonksiyon doğruydu, EVREN yanlıştı — `§11`in *"doğru aleti
#   yanlış evrenle koşturmak"* dersi, ve bu sefer bende.
#   ⚠️ İki çağrının evreni FARKLI ve bu kasıtlı: kırılmalar çekirdekten
#     sayılır, Osmanlı küresi ise TÜM veriden kurulur.
def olc(Y, O, etiket):
    Yc = [y for y in Y if y.get("_kaynak") not in denetle.KUYRUK_DOSYALARI]
    kir, acik = denetle.degismez2(Yc, O, kategoriler=("s",))
    ici, disi = denetle.kapsam_disi(Y, acik)
    print("  %-8s kirilma %5d · ACIK %4d · kapsam ici %4d · disi %4d"
          % (etiket, len(kir), len(acik), len(ici), len(disi)))
    return kir, acik, ici, disi


def main():
    Y = denetle.yerlesimleri_yukle()
    O = denetle.olaylari_yukle()
    print("yerlesim %d · olay (cekirdek) %d\n" % (len(Y), len(O)))

    print("=== Degismez 2s — kategoriler=('s',) ===")
    kir0, acik0, ici0, disi0 = olc(Y, O, "ONCE")

    yama = json.load(io.open(
        os.path.join(KOK, "denetim", "KUZEY-AMERIKA-DEVIR-0907.json"),
        encoding="utf-8"))
    # yamayı KENDİ ürettiğim rapordan değil, YAMA DOSYASINDAN al (§C13③)
    import subprocess
    js = ("global.window={};eval(require('fs').readFileSync(%s,'utf8'));"
          "const k=Object.keys(global.window)[0];"
          "process.stdout.write(JSON.stringify(global.window[k]));"
          % json.dumps(YAMA))
    kayit = json.loads(subprocess.run(["node", "-e", js], capture_output=True,
                                      text=True, encoding="utf-8").stdout)
    del yama

    ix = {y["ad"]: y for y in Y}
    uygulanan = 0
    for r in kayit:
        y = ix.get(r["ad"])
        if y is None:
            print("  🔴 %s veride yok" % r["ad"])
            continue
        y["s"] = r["s"]
        uygulanan += 1
    print("\n  bellekte uygulanan kayit: %d / %d" % (uygulanan, len(kayit)))

    kir1, acik1, ici1, disi1 = olc(Y, O, "SONRA")

    a0 = {k[0] for k in acik0}
    a1 = {k[0] for k in acik1}
    i0 = {k[0] for k in ici0}
    i1 = {k[0] for k in ici1}
    print("\n=== FARK ===")
    print("  kirilma  %+d   ACIK %+d   kapsam ICI %+d   DISI %+d"
          % (len(kir1) - len(kir0), len(acik1) - len(acik0),
             len(ici1) - len(ici0), len(disi1) - len(disi0)))
    print("  YENI acilan gun : %s" % sorted(a1 - a0))
    print("  KAPANAN gun     : %s" % sorted(a0 - a1))
    print("  YENI KAPSAM ICI : %s" % sorted(i1 - i0))
    print("  🔴 TAVAN: 2s ACIK tavani 121 · kapsam ici %d" % len(ici1))
    print("     %s" % ("🟢 TAVANIN ALTINDA" if len(ici1) <= 121
                       else "🔴 TAVAN ASILDI"))
    return 0 if len(ici1) <= 121 else 1


if __name__ == "__main__":
    sys.exit(main())
