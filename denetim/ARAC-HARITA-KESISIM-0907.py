# -*- coding: utf-8 -*-
"""ARAC-HARITA-KESISIM-0907 — BENIM 22'M ile CLAUDE.md'nin 33'U AYNI KUME MI?

GECIS-SURE-0907 · 7 Eylul 2026 · 1.MURAT M-3149.

🔴 HUKUM VERMIYORUM, OLCUYORUM. Bu proje `id ∪ harita` duzeltmesini BIR KEZ
   yapti ve CURUTTU (`CLAUDE.md`, "harita-or-id" vakasi):
       harita-or-id (mevcut)  kunyesi var rengi yok  63 ✓
       id ∪ harita (onerilen)                        96 🔴 +33 YANLIS
   Sebep: `bosna-kralligi` gibi kunyelerin `harita:`si BASKA bir anahtara
   bakar ve KENDI renklerine IHTIYACLARI YOKTUR; birlesim onlari
   "rengi eksik" sayar.

IKI KUME AYNI SEY DEGIL OLABILIR — ve bu betik onu SINAR:
   A = BENIM 22'M : `harita:` DEGERI olarak gecen ama hicbir kunyenin
                    `id`si OLMAYAN kimlikler   (ornek: `bosna`)
   B = O 33       : `harita:`si KENDI id'sinden FARKLI olan ve `id`si
                    BOYALAR'da OLMAYAN kunyeler (ornek: `bosna-kralligi`)
⇒ A `harita:` ANAHTARLARINDAN olusur, B KUNYELERDEN. Ayni ILISKININ iki
  ucu olabilirler ama AYNI KUME olmayabilirler. Olculecek olan bu.

🔒 `arac/renkler.py` KOSU 8 SURERKEN DONUK — bu betik onu YALNIZ OKUR
   (import), YAZMAZ. Import cozucuyu kosturur; ciktisi bastirilir.
"""
import contextlib
import io
import json
import os
import sys

try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)


def main():
    with contextlib.redirect_stdout(io.StringIO()):
        import girdi
        Y = girdi.yukle()
        D = girdi.oku_devletler()
        import renkler as R
    BOY = getattr(R, "BOYALAR", {})
    ks = [k for k in (D.values() if isinstance(D, dict) else D)
          if isinstance(k, dict) and k.get("id")]
    idler = {k["id"] for k in ks}

    print("künye %d · BOYALAR %d" % (len(ks), len(BOY)))
    print()

    # ── A : `harita:` degeri olan ama `id` OLMAYAN kimlikler
    har = {}
    for k in ks:
        if k.get("harita"):
            har.setdefault(k["harita"], []).append(k["id"])
    A = {a for a in har if a not in idler}
    # veride GERCEKTEN kullanilanlar
    kullanilan = set()
    for t in Y:
        for kat in ("s", "d", "v", "isg"):
            for p in (t.get(kat) or []):
                if p.get("d"):
                    kullanilan.add(p["d"])
    A_kul = {a for a in A if a in kullanilan}

    # ── B : `harita:` KENDI id'sinden FARKLI, ve `id` BOYALAR'da YOK
    B = {k["id"] for k in ks
         if k.get("harita") and k["harita"] != k["id"] and k["id"] not in BOY}
    # ve `harita:`si BOYALAR'da OLAN alt kumesi — asil "+33" adayi
    B_renkli = {k["id"] for k in ks
                if k.get("harita") and k["harita"] != k["id"]
                and k["id"] not in BOY and k["harita"] in BOY}

    print("=" * 74)
    print("A — `harita:` anahtarı, `id` DEĞİL  (benim 22'm)")
    print("=" * 74)
    print("   toplam            : %d" % len(A))
    print("   veride KULLANILAN : %d" % len(A_kul))
    print("   " + ", ".join(sorted(A_kul))[:400])
    print()
    print("=" * 74)
    print("B — `harita:` kendi id'sinden FARKLI ve id BOYALAR'da YOK (o 33)")
    print("=" * 74)
    print("   toplam                       : %d" % len(B))
    print("   ve `harita:`si BOYALAR'da VAR: %d   ← CLAUDE.md'nin +33'ü" % len(B_renkli))
    print("   " + ", ".join(sorted(B_renkli))[:400])
    print()

    print("=" * 74)
    print("KESİŞİM SINAVI")
    print("=" * 74)
    kes = A & B_renkli
    print("   A ∩ B  : %d" % len(kes))
    if kes:
        print("      " + ", ".join(sorted(kes))[:300])
    print()
    if not kes:
        print("🔴 KESİŞİM SIFIR ⇒ İKİ KÜME AYNI ŞEY DEĞİL.")
        print("   A `harita:` ANAHTARLARINDAN oluşuyor (`bosna`),")
        print("   B KÜNYELERDEN (`bosna-kralligi`). Aynı ilişkinin İKİ UCU.")
    else:
        print("🟡 KESİŞİM VAR — kümeler örtüşüyor, ayrıntı yukarıda.")

    # ── EŞLEŞME: A'nın her üyesini hangi künye gösteriyor?
    print()
    print("=" * 74)
    print("İLİŞKİ — A'nın üyeleri B'nin üyeleri tarafından mı gösteriliyor?")
    print("=" * 74)
    eslesen = 0
    for a in sorted(A_kul):
        sahipler = har.get(a, [])
        b_olan = [s for s in sahipler if s in B_renkli]
        if b_olan:
            eslesen += 1
        print("   %-22s ← %-46s %s"
              % (a, ", ".join(sahipler)[:46],
                 "B'de: " + ", ".join(b_olan)[:30] if b_olan else "B'de YOK"))
    print()
    print("   A'nın %d/%d üyesi B'deki bir künye tarafından gösteriliyor"
          % (eslesen, len(A_kul)))

    cikti = os.path.join(KOK, "denetim", "_harita_kesisim.json")
    io.open(cikti, "w", encoding="utf-8").write(json.dumps(
        {"A": sorted(A), "A_kullanilan": sorted(A_kul),
         "B": sorted(B), "B_renkli": sorted(B_renkli),
         "kesisim": sorted(kes)}, ensure_ascii=False, indent=1))
    print()
    print("yazıldı: %s" % os.path.relpath(cikti, KOK))
    return 0


if __name__ == "__main__":
    sys.exit(main())
