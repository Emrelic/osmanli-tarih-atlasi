# -*- coding: utf-8 -*-
"""KALEM Ⓐ — `9999-01-01` NÖBETÇİ DEĞERİ · SINIR-KAFRIKA-0907

Öngörü ÖNCE yazıldı: `denetim/ONGORU-SINIR-KAFRIKA-9999-0907.json`.
Bu alet onu sınar. `data/` DONUK (koşu 8) ⇒ YALNIZ OKUR.

SORAR   `9999-01-01` nerede geçiyor · motor onu nasıl okuyor ·
        bir KUSUR mu bir SÖZLEŞME mi
SORMAZ  "doğrusu ne olmalı" — o `§4` işi ve ayrı bir turda
"""
import io
import os
import re
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi  # noqa: E402

NOBET = "9999-01-01"
UFUK_SON = "1923-10-29"


def main():
    Y = girdi.yukle()
    print("=" * 74)
    print("① `%s` NEREDE GECIYOR" % NOBET)
    print("=" * 74)
    kayit, donem = [], 0
    for y in Y:
        vur = []
        for kat in ("d", "v", "s", "isg"):
            for p in (y.get(kat) or []):
                for uc in ("f", "t"):
                    if p.get(uc) == NOBET:
                        vur.append((kat, uc, p.get("f"), p.get("t"),
                                    p.get("d") or p.get("kid") or p.get("k")))
                        donem += 1
        if vur:
            kayit.append((y["ad"], y.get("_kaynak"), vur))
    print("KAYIT (nokta) : %d" % len(kayit))
    print("DONEM         : %d" % donem)
    for ad, dosya, vur in kayit:
        print("   %-26s  %s" % (ad, dosya))
        for v in vur:
            print("      %s.%s   %s -> %s   (%s)" % v)

    print("")
    print("=" * 74)
    print("② SEFSAVEN'IN TAM `s:` ZINCIRI")
    print("=" * 74)
    ss = [y for y in Y if "efs" in y["ad"] or "Şefş" in y["ad"]]
    for y in ss:
        print("   %s  (%s)  lat %.3f lon %.3f"
              % (y["ad"], y.get("_kaynak"), y["lat"], y["lon"]))
        for kat in ("d", "v", "s", "isg"):
            for p in (y.get(kat) or []):
                print("      %-4s %s -> %-12s  %s"
                      % (kat + ":", p.get("f"), p.get("t"),
                         p.get("d") or p.get("kid") or p.get("k") or ""))

    print("")
    print("=" * 74)
    print("③ MOTOR `9999`I OZEL ISLIYOR MU — KODDA ARANDI")
    print("=" * 74)
    for dosya in ("girdi.py", "uret_petek.py", "denetle.py"):
        yol = os.path.join(KOK, "arac", dosya)
        if not os.path.exists(yol):
            print("   %-16s DOSYA YOK" % dosya)
            continue
        s = io.open(yol, encoding="utf-8", errors="replace").read()
        n = len(re.findall(r"9999", s))
        print("   %-16s '9999' gecis: %d" % (dosya, n))
        if n:
            for m in re.finditer(r"9999", s):
                sat = s[:m.start()].count("\n") + 1
                bas = s.rfind("\n", 0, m.start()) + 1
                son = s.find("\n", m.end())
                print("      :%-5d %s" % (sat, s[bas:son].strip()[:110]))

    print("")
    print("=" * 74)
    print("④ SOZLESME — acik uc NASIL yaziliyor?")
    print("=" * 74)
    sayac = {}
    for y in Y:
        for kat in ("d", "v", "s", "isg"):
            for p in (y.get(kat) or []):
                t = p.get("t")
                if t and t >= UFUK_SON:
                    sayac[t] = sayac.get(t, 0) + 1
    for t, n in sorted(sayac.items(), key=lambda x: -x[1]):
        etiket = ""
        if t == UFUK_SON:
            etiket = "  <- UFUK (atlasin acik uc yazimi)"
        elif t == NOBET:
            etiket = "  <- NOBETCI"
        else:
            etiket = "  <- UFKU ASIYOR"
        print("   %-14s %6d%s" % (t, n, etiket))

    print("")
    print("=" * 74)
    print("⑤ `denetle.py` BUNU SORUYOR MU")
    print("=" * 74)
    s = io.open(os.path.join(KOK, "arac", "denetle.py"),
                encoding="utf-8", errors="replace").read()
    for kel in ("9999", "nobetci", "sentinel", "UFUK"):
        print("   '%-9s' gecis: %d" % (kel, len(re.findall(kel, s))))

    print("")
    print("=" * 74)
    print("⑥ SEFSAVEN 1923-10-28'DE KIMIN")
    print("=" * 74)
    g = "1923-10-28"
    for y in ss:
        sah = None
        for kat, et in (("d", "OSMANLI"), ("v", "tabi"), ("s", None)):
            for p in (y.get(kat) or []):
                if p["f"] <= g < p["t"]:
                    sah = et or p.get("d")
        print("   %-20s %s -> %s" % (y["ad"], g, sah))
    return 0


if __name__ == "__main__":
    sys.exit(main())
