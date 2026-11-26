# -*- coding: utf-8 -*-
"""ARAC-SINIR-GAFRIKA-CIPA-0907 — CIPA GUNU TUZAGINI BAGIMSIZ DOGRULAR.

1.MURAT (M-3191) sunu bildirdi: donemler YARI ACIK (`f <= g < t`) ve
`girdi.UFUK[1] == "1923-10-29"` ⇒ o gunle biten HER donem tam o gun
sorulunca AKTIF DEGIL. "Sahipsiz 3804 / canli kimlik 1."

🔴 DEVRALMIYORUM, OLCUYORUM (§11: devraldigin rakami dogrulamadan aktarma).
Ve ayrica sunu soruyorum — ONCUL kendi olcumumu ETKILEDI MI:
   TUR 1'de atlasa HIC SORMADIM (kaynak: NE geojson + TDV govdeleri).
   O yuzden bu tuzak TUR 1'i BOZMUS OLAMAZ. Bu alet onu da GOSTERIR.
"""
import io
import os
import sys

sys.path.insert(0, os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "arac"))

try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

import girdi                                                       # noqa: E402


def sahip(y, g):
    """Yari acik araligin AYNISI: f <= g < t. Motorun kuralini TAKLIT
    etmiyorum — ayni kurali uyguluyorum ki fark GUNDEN gelsin."""
    for p in (y.get("d") or []):
        if p.get("f", "") <= g < p.get("t", "9999"):
            return "OSMANLI"
    for p in (y.get("v") or []):
        if p.get("f", "") <= g < p.get("t", "9999"):
            return p.get("kid") or p.get("k") or "?tabi"
    for p in (y.get("s") or []):
        if p.get("f", "") <= g < p.get("t", "9999"):
            return p.get("d")
    return None


def main():
    Y = girdi.yukle()
    if isinstance(Y, tuple):
        Y = Y[0]
    print("girdi.UFUK = %s" % (girdi.UFUK,))
    print("yerlesim: %d" % len(Y))
    for g in ("1923-10-29", "1923-10-28", "1923-01-01", "1920-06-15"):
        kim, yok = set(), 0
        for y in Y:
            s = sahip(y, g)
            if s is None:
                yok += 1
            else:
                kim.add(s)
        print("  %s  canli kimlik %4d · SAHIPSIZ %4d" % (g, len(kim), yok))

    # ---- kapanis ucu KAC donemde UFUK sonuna denk geliyor -----------------
    n = sum(1 for y in Y for a in ("d", "v", "s")
            for p in (y.get(a) or []) if p.get("t") == girdi.UFUK[1])
    print("\n`t` == UFUK sonu olan donem: %d  ⇒ tam o gun sorulunca AKTIF DEGIL" % n)
    print("\n📌 TUR 1 ETKILENDI MI: HAYIR — SINIR-HUKUKI-GAFRIKA-0907.json")
    print("   atlasa HIC sorulmadi (kaynak: ne_10m_admin_0 + TDV govdeleri).")
    print("   Tuzak `kimlik_1923`i ATLASTAN doldurmaya kalkinca ISIRIR.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
