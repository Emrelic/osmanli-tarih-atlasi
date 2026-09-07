# -*- coding: utf-8 -*-
"""
SINIR-BALKAN-0907 · CIPA GUNU SINAVI
1.MURAT'in M-3191 uyarisi: `1923-10-29` atlasa SORULAMAZ (yari acik `f<=g<t`).
Bu alet UC seyi olcer, IDDIA ETMEZ:
  ① benim `kimlik_1923` atamalarim o tuzaga DUSTU MU?
  ② ayni kimlikler `1923-10-28` sorulunca GERCEKTEN aktif mi?
  ③ KIMLIK-1923-0907-ADIM1.json'daki 109 canli kimlikle ORTUSUYOR mu?
"""
import json, os, io, sys, subprocess
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

BENIM = os.path.join(KOK, "denetim", "SINIR-HUKUKI-BALKAN-0907.json")
ADIM1 = os.path.join(KOK, "denetim", "KIMLIK-1923-0907-ADIM1.json")

JS = r"""
const fs=require("fs"),path=require("path");
global.window={};
eval(fs.readFileSync(path.join(process.argv[2],"data","devletler.js"),"utf8"));
const D=window.DEVLETLER||[];
const aktif=g=>D.filter(d=>d.f&&d.t&&d.f<=g&&g<d.t).map(d=>d.id);
const aktifKapali=g=>D.filter(d=>d.f&&d.t&&d.f<=g&&g<=d.t).map(d=>d.id);
console.log(JSON.stringify({
  toplam:D.length,
  yari_29:aktif("1923-10-29"), yari_28:aktif("1923-10-28"),
  kapali_29:aktifKapali("1923-10-29"),
  pencere:D.filter(d=>d.t==="1923-10-29").map(d=>d.id),
}));
"""


def kunye_durumu():
    yol = os.path.join(KOK, "denetim", "_cipa_sinav.js")
    with open(yol, "w", encoding="utf-8") as f:
        f.write(JS)
    p = subprocess.run(["node", yol, KOK], capture_output=True, text=True,
                       encoding="utf-8", errors="replace")
    os.remove(yol)
    if p.returncode != 0:
        print("NODE HATASI:", p.stderr[-800:]); sys.exit(1)
    return json.loads(p.stdout)


if __name__ == "__main__":
    r = kunye_durumu()
    y29, y28, k29 = set(r["yari_29"]), set(r["yari_28"]), set(r["kapali_29"])
    pencere = set(r["pencere"])
    print("kunye toplam                     :", r["toplam"])
    print("YARI ACIK (f<=g<t)  g=1923-10-29 :", len(y29))
    print("YARI ACIK (f<=g<t)  g=1923-10-28 :", len(y28))
    print("KAPALI    (f<=g<=t) g=1923-10-29 :", len(k29))
    print("`t` == 1923-10-29 olan kunye     :", len(pencere), " <- PENCERE UCU")
    print()

    with open(BENIM, encoding="utf-8") as f:
        B = json.load(f)
    benim = set()
    for e in B["kenarlar"]:
        for a in ("kimlik_1923_a", "kimlik_1923_b"):
            if e.get(a):
                benim.add(e[a])
    print("BENIM kullandigim 1923 kimligi   :", len(benim))
    print("  ", ", ".join(sorted(benim)))
    print()
    print("① TUZAGA DUSTUM MU?")
    print("   benim ∩ yari_29 (g=29 ile aktif) :", len(benim & y29),
          "  <- 0 ise: atamalarim o sorguyla URETILMEDI")
    print("   benim ∩ yari_28 (g=28 ile aktif) :", len(benim & y28), "/", len(benim))
    yok28 = sorted(benim - y28)
    print("   g=28'de AKTIF OLMAYAN benim kimligim:", yok28 if yok28 else "yok ✓")
    print()

    if os.path.exists(ADIM1):
        with open(ADIM1, encoding="utf-8") as f:
            A = json.load(f)
        # 109'luk kimlik listesini nerede tuttugunu VARSAYMA, DOK.
        def kimlikleri_bul(o, yol=""):
            found = []
            if isinstance(o, dict):
                for kk, vv in o.items():
                    found += kimlikleri_bul(vv, yol + "/" + kk)
            elif isinstance(o, list):
                if o and isinstance(o[0], dict) and ("id" in o[0] or "kimlik" in o[0]):
                    found.append((yol, len(o),
                                  [x.get("id") or x.get("kimlik") for x in o]))
                elif o and isinstance(o[0], str):
                    found.append((yol, len(o), o))
            return found
        adaylar = [x for x in kimlikleri_bul(A) if x[1] >= 50]
        print("② ADIM1.json — 50+ ogeli kimlik listeleri:")
        for yol, n, ids in adaylar:
            print("   %-40s %d" % (yol, n))
        if adaylar:
            en = max(adaylar, key=lambda x: x[1])
            a109 = set(i for i in en[2] if i)
            print()
            print("③ ORTUSME  (%s, %d kimlik)" % (en[0], len(a109)))
            print("   benim ⊆ ADIM1 ?  ortak:", len(benim & a109), "/", len(benim))
            eksik = sorted(benim - a109)
            print("   ADIM1'de OLMAYAN benim kimligim:", eksik if eksik else "yok ✓")
    else:
        print("② ADIM1.json YOK — olculemedi")
