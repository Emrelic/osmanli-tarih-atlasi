# -*- coding: utf-8 -*-
"""KIMLIK-1923-0907 ① — 1923-10-29'da CANLI olan atlas kimliklerini ÇIKAR.

Soru: *"1923-10-29'da bu toprak hangi atlas kimliğindeydi?"*
Cevap TAHMİN EDİLMEZ, `data/yerlesimler.js`ten ÖLÇÜLÜR.

🔴 SINIR TUZAĞI — ve bu betiğin var oluş sebebi:
    `girdi.UFUK = ("1281-01-01", "1923-10-29")` ve dönemler YARI AÇIK:
    `f <= g < t`. Yani `t:"1923-10-29"` taşıyan bir dönem, `g="1923-10-29"`
    sorulduğunda AKTİF DEĞİLDİR. `CLAUDE.md §4`: *"pencere uçları bir ÖLÇÜM
    DEĞERİ değil, bir SINIR İŞARETİDİR."*
    ⇒ Bu betik İKİ günü de ölçer (`1923-10-29` ve `1923-10-28`) ve farkı
    raporlar. Tek gün ölçen bir alet, kapanış günü yüzünden yüzlerce
    yerleşimi "sahipsiz" gösterir ve o sayı sessizce yanlış olur.

Kimlik önceliği motorun/denetimin kendi sırasıdır (CLAUDE.md §3.5.1):
    d: (Osmanlı doğrudan) → v: (tâbi) → s: (yabancı)
`isg:` AYRI KOVA — bir örtüdür, sahipliği değiştirmez (motor kasten okumaz).
"""
import io
import json
import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "arac"))
import girdi  # noqa: E402

KOK = os.path.join(os.path.dirname(__file__), "..")
GUNLER = ["1923-10-29", "1923-10-28"]


def kimlik(y, g):
    """O gün geçerli (kova, kimlik, gorunen_ad). Yoksa (None, None, None).

    Kova: 'd' | 'v' | 's'   — `isg:` AYRI ölçülür, sahiplik değil örtüdür.
    """
    for p in y.get("d") or []:
        if p.get("f", "") <= g < p.get("t", "9999"):
            return "d", "osmanli", "Osmanlı (doğrudan)"
    for p in y.get("v") or []:
        if p.get("f", "") <= g < p.get("t", "9999"):
            # `kid` künye kimliği, `k` SERBEST METİN görünen ad (girdi.py:920).
            # kid yoksa kimlik makine tarafından SORULAMAZ → ayrı işaretlenir.
            return "v", (p.get("kid") or None), (p.get("k") or None)
    for p in y.get("s") or []:
        if p.get("f", "") <= g < p.get("t", "9999"):
            return "s", p.get("d"), p.get("d")
    return None, None, None


def isgal(y, g):
    for p in y.get("isg") or []:
        if p.get("f", "") <= g < p.get("t", "9999"):
            return p.get("d")
    return None


def main():
    Y = girdi.yukle(sessiz=True)
    print("yerlesim toplam: %d" % len(Y))

    rapor = {"_NOT": "KIMLIK-1923-0907 adim (1) — 1923-10-29'da canli atlas "
                     "kimlikleri. Kaynak: girdi.yukle() (yetkili yukleyici). "
                     "Donemler YARI ACIK (f <= g < t); UFUK sonu 1923-10-29 "
                     "oldugu icin iki gun de olculdu.",
             "yerlesim_toplam": len(Y),
             "gunler": {}}

    for g in GUNLER:
        sayac, kova, sahipsiz, kidsiz, isg_sayac = {}, {}, [], [], {}
        nokta = {}
        for y in Y:
            kv, kid, ad = kimlik(y, g)
            if kv is None:
                sahipsiz.append(y["ad"])
                continue
            kova[kv] = kova.get(kv, 0) + 1
            anahtar = kid
            if anahtar is None:
                # v: dönemi kid TAŞIMIYOR → makine soramaz, ayrı kova
                kidsiz.append({"yerlesim": y["ad"], "k_metni": ad})
                anahtar = "__KIDSIZ__"
            sayac[anahtar] = sayac.get(anahtar, 0) + 1
            nokta.setdefault(anahtar, []).append(
                (y["ad"], y.get("lat"), y.get("lon")))
            i = isgal(y, g)
            if i:
                isg_sayac[i] = isg_sayac.get(i, 0) + 1

        zarf = {}
        for k, ns in nokta.items():
            lats = [n[1] for n in ns if n[1] is not None]
            lons = [n[2] for n in ns if n[2] is not None]
            if not lats:
                continue
            # temsilî nokta: kümenin AĞIRLIK MERKEZİNE en yakın GERÇEK nokta.
            # Ortalamanın kendisi degil — ortalama denize/baska ulkeye
            # dusebilir; gercek bir yerlesim dusmez.
            olat, olon = sum(lats) / len(lats), sum(lons) / len(lons)
            en = min(ns, key=lambda n: (n[1] - olat) ** 2 + (n[2] - olon) ** 2)
            zarf[k] = {
                "nokta": len(ns),
                "bbox": [round(min(lons), 4), round(min(lats), 4),
                         round(max(lons), 4), round(max(lats), 4)],
                "temsili": {"ad": en[0], "lat": en[1], "lon": en[2]},
            }

        rapor["gunler"][g] = {
            "kimlik_sayisi": len([k for k in sayac if k != "__KIDSIZ__"]),
            "kova": kova,
            "sahipsiz": len(sahipsiz),
            "sahipsiz_ornek": sorted(sahipsiz)[:15],
            "kid_tasimayan_v_donemi": len(kidsiz),
            "kid_tasimayan_ornek": kidsiz[:15],
            "isgal_ortusu": isg_sayac,
            "kimlikler": dict(sorted(sayac.items(),
                                     key=lambda kv: -kv[1])),
            "zarf": zarf,
        }
        print("\n=== %s ===" % g)
        print("  kimlik: %d · sahipsiz: %d · kid'siz v: %d"
              % (rapor["gunler"][g]["kimlik_sayisi"], len(sahipsiz),
                 len(kidsiz)))
        print("  kova: %s" % kova)
        print("  isgal ortusu: %s" % isg_sayac)
        ilk = list(rapor["gunler"][g]["kimlikler"].items())[:12]
        print("  en cok nokta: %s" % ilk)

    a, b = GUNLER
    sa = set(rapor["gunler"][a]["kimlikler"])
    sb = set(rapor["gunler"][b]["kimlikler"])
    rapor["sinir_tuzagi"] = {
        "_NOT": "UFUK sonu (1923-10-29) yari acik araligin DISINDA kalir. "
                "Asagidaki fark, 't:1923-10-29' ile biten donemlerin "
                "olcumden dusmesinden dogar.",
        "sahipsiz_fark": (rapor["gunler"][a]["sahipsiz"]
                          - rapor["gunler"][b]["sahipsiz"]),
        "yalniz_%s" % b: sorted(sb - sa),
        "yalniz_%s" % a: sorted(sa - sb),
    }
    print("\n=== SINIR TUZAGI ===")
    print("  sahipsiz %s: %d · %s: %d  (fark %d)"
          % (a, rapor["gunler"][a]["sahipsiz"],
             b, rapor["gunler"][b]["sahipsiz"],
             rapor["sinir_tuzagi"]["sahipsiz_fark"]))
    print("  yalniz %s'de olan kimlik: %s" % (b, sorted(sb - sa)))

    yol = os.path.join(KOK, "denetim", "KIMLIK-1923-0907-ADIM1.json")
    with io.open(yol, "w", encoding="utf-8") as f:
        json.dump(rapor, f, ensure_ascii=False, indent=1)
    print("\nyazildi: %s" % yol)


if __name__ == "__main__":
    main()
