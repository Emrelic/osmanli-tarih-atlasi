# -*- coding: utf-8 -*-
"""ARAC-GECIS-SURE-DAGILIM-0907 — Ⓐ: PARCA DAGILIMI (tabakalamanin ON KOSULU)

GECIS-SURE-0907 · 7 Eylul 2026.

Sartname Ⓐ: "Maliyeti cift SAYISI degil PARCA KARMASIKLIGI suruyor.
240.687 parca 552 kimlige dagilmis ve dagilim neredeyse kesinlikle CARPIK.
Rastgele bir orneklem basit ciftlerin agirliginda kalir ve maliyeti
OLDUGUNDAN KUCUK gosterir. ⇒ ONCE dagilimi olc."

Bu betik YALNIZ dagilimi olcer. Kesisim maliyeti AYRI bir alette
(`ARAC-GECIS-SURE-MALIYET-0907.py`) — cunku bu asamanin cevabi otekinin
TABAKALARINI belirliyor ve ikisini tek alete koymak, tabakalari
olcumden ONCE sabitlemek olurdu.

🔴 AYRISTIRICI YAZMIYORUM: `devletler_harita.js` JavaScript'tir, `node`
   okur. Ve `parcaCoz` app.js'ten AYNEN alinir — yeniden yazilmaz.
   (Bu proje "kendi yazdigin ayristirici her zaman kotudur" dersini
    ALTI kez ogrendi.)
🔒 `data/` DONUK — bu betik yalniz OKUR.
"""
import io
import json
import os
import subprocess
import sys

try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# 🔴 `parcaCoz` js/app.js'ten AYNEN — bir harf degistirilmedi.
#    Degistirilirse bu olcum app.js'in cozdugu geometriyi DEGIL, benim
#    cozdugumu olcer ve ikisi ayrisirsa kimse fark etmez.
OKU = r"""
const fs = require('fs'), vm = require('vm');
const ctx = { window: {}, console: { log(){}, warn(){}, error(){} } };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(process.argv[2], 'utf8'), ctx, { timeout: 900000 });

const H  = ctx.window.DEVLET_HARITA || [];
const PH = ctx.window.DEVLET_PARCA_HALKA || [];

// kimlik basina: donem sayisi · TOPLAM parca · en buyuk donemin parcasi
// ve kimligin butun donemlerindeki KOSE NOKTASI toplami (asil maliyet
// surucusu bu olabilir — parca sayisi degil)
const satir = [];
let toplamParca = 0, toplamKose = 0;
for (const s of H) {
  const dnm = s.dnm || [];
  let parca = 0, kose = 0, enBuyukDonem = 0;
  for (const p of dnm) {
    const g = p.g || [];
    parca += g.length;
    if (g.length > enBuyukDonem) enBuyukDonem = g.length;
    for (const idx of g) {
      if (typeof idx !== 'number') continue;
      const ph = PH[idx];
      if (!ph) continue;
      for (const h of ph) {
        const halka = (ctx.window.DEVLET_PARCALAR || [])[h];
        if (Array.isArray(halka)) kose += halka.length;
      }
    }
  }
  toplamParca += parca; toplamKose += kose;
  satir.push({ id: s.id || null, donem: dnm.length, parca: parca,
               kose: kose, enBuyukDonem: enBuyukDonem });
}
process.stdout.write(JSON.stringify({
  kimlik: H.length, toplamParca, toplamKose, satir
}));
"""


def yuzdelik(dizi, p):
    if not dizi:
        return 0
    d = sorted(dizi)
    i = int(round((len(d) - 1) * p))
    return d[i]


def main():
    yol = os.path.join(KOK, "data", "devletler_harita.js")
    okuyucu = os.path.join(KOK, "denetim", "_gecis_oku.js")
    io.open(okuyucu, "w", encoding="utf-8").write(OKU)
    print("okunuyor: data/devletler_harita.js (%.1f MB) — bir kez"
          % (os.path.getsize(yol) / 1048576))
    r = subprocess.run(["node", "--max-old-space-size=6144", okuyucu, yol],
                       capture_output=True)
    if r.returncode != 0:
        # 🔴 ⑤'in sarti: cikti hatasi mi OLCUM hatasi mi — AYIR.
        hata = (r.stderr or b"").decode("utf-8", "replace")
        print("🔴 node COKTU — bu bir OLCUM hatasi, cikti hatasi DEGIL:")
        print(hata[-500:])
        return 2
    d = json.loads(r.stdout)
    try:
        os.remove(okuyucu)
    except Exception:
        pass

    satir = d["satir"]
    parcalar = [s["parca"] for s in satir]
    koseler = [s["kose"] for s in satir]
    dolu = [s for s in satir if s["parca"] > 0]

    print("=" * 74)
    print("Ⓐ PARCA DAGILIMI — tabakalamanin on kosulu")
    print("=" * 74)
    print("kimlik            : %d  (parcasi olan: %d)" % (d["kimlik"], len(dolu)))
    print("TOPLAM parca      : %d" % d["toplamParca"])
    print("TOPLAM kose nokta : %d" % d["toplamKose"])
    print()
    print("kimlik basina PARCA:")
    for ad, v in (("en kucuk", min(parcalar)), ("%25", yuzdelik(parcalar, .25)),
                  ("ORTANCA", yuzdelik(parcalar, .50)),
                  ("%75", yuzdelik(parcalar, .75)),
                  ("%90", yuzdelik(parcalar, .90)),
                  ("%99", yuzdelik(parcalar, .99)),
                  ("AZAMI", max(parcalar))):
        print("   %-10s %8d" % (ad, v))
    print()
    print("kimlik basina KOSE NOKTASI:")
    for ad, v in (("ORTANCA", yuzdelik(koseler, .50)),
                  ("%90", yuzdelik(koseler, .90)),
                  ("%99", yuzdelik(koseler, .99)),
                  ("AZAMI", max(koseler))):
        print("   %-10s %10d" % (ad, v))
    print()

    # 🔴 CARPIKLIK SINAVI — sartnamenin dayandigi `urabi-pasa` olcutu:
    #    "evrenin en buyuk uyesi yaridan fazlasini tutuyorsa, orneklem bir
    #     ORAN degil O UYENIN PORTRESIDIR"
    sirali = sorted(satir, key=lambda s: -s["parca"])
    top = float(d["toplamParca"]) or 1
    print("CARPIKLIK — en buyuk uyeler toplamin yuzde kacini tutuyor:")
    for n in (1, 2, 5, 10, 25, 50):
        pay = sum(s["parca"] for s in sirali[:n]) / top
        print("   en buyuk %-3d kimlik : %5.1f%%" % (n, 100 * pay))
    print()
    print("EN BUYUK 12 KIMLIK:")
    print("   %-30s %8s %8s %8s" % ("id", "donem", "parca", "kose"))
    for s in sirali[:12]:
        print("   %-30s %8d %8d %8d"
              % (str(s["id"])[:30], s["donem"], s["parca"], s["kose"]))

    cikti = os.path.join(KOK, "denetim", "_gecis_dagilim.json")
    io.open(cikti, "w", encoding="utf-8").write(
        json.dumps(d, ensure_ascii=False))
    print()
    print("dagilim yazildi: %s (%.1f KB)"
          % (os.path.relpath(cikti, KOK), os.path.getsize(cikti) / 1024))
    print()
    print("⚠️ BU BETIK SURE OLCMEZ — yalniz DAGILIMI olcer. Tabakalar bu")
    print("   ciktiya gore kurulacak, ve kesisim maliyeti AYRI alette.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
