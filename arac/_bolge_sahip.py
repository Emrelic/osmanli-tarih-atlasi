# -*- coding: utf-8 -*-
"""MERIC'IN BATISI — Balkan savaslarindan SONRA Osmanli toprak kalmis mi?

Emre: "Balkan savaslarindan sonra Meric nehrinin batisinda Osmanli
topragi kalmis gorunuyor, bu hatali olmali. Teyid et duzelt."

TARIHI ZEMIN (teyit edilecek):
  1913-09-29 Istanbul Antlasmasi (Osmanli-Bulgaristan) — sinir kabaca
  Meric. Edirne Osmanli'ya DONDU; BATI TRAKYA (Gumulcine · Dedeagac ·
  Iskece) BULGARISTAN'da kaldi.
  ⚠️ Karaagac istisnasi: 1913'te Osmanli'da DEGIL; 1923 Lozan'da
  Yunanistan'dan tazminat olarak alindi — atlas 1923-10-29'da bitiyor.
"""
import sys

sys.path.insert(0, "arac")
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
import girdi  # noqa: E402

Y = girdi.yukle() if hasattr(girdi, "yukle") else girdi.oku()
if isinstance(Y, tuple):
    Y = Y[0]

# Trakya kutusu: Meric'in agzi ~40,7K/26,3D · yukari kolu ~41,7K/26,3D
# BATI TRAKYA: 40,5-41,8 K  ·  24,0-26,4 D
KUTU = (40.5, 41.8, 24.0, 26.4)
GUN = "1913-10-01"          # Istanbul Antlasmasi'ndan iki gun sonra


def aktif(y, alan, g):
    return [p for p in (y.get(alan) or []) if p.get("f", "") <= g < p.get("t", "")]


icinde = [y for y in Y
          if y.get("lat") is not None and y.get("lon") is not None
          and KUTU[0] <= y["lat"] <= KUTU[1] and KUTU[2] <= y["lon"] <= KUTU[3]]
icinde.sort(key=lambda y: y["lon"])

print("BATI TRAKYA KUTUSU  %.1f-%.1f K / %.1f-%.1f D  ->  %d nokta"
      % (KUTU[0], KUTU[1], KUTU[2], KUTU[3], len(icinde)))
print("Olcum gunu: %s (Istanbul Antlasmasi 1913-09-29'dan sonra)" % GUN)
print()
print("%-30s %7s %7s  %-28s %s" % ("ad", "lat", "lon", "o gun sahip", "kaynak"))
print("-" * 110)

suphe = []
for y in icinde:
    d = aktif(y, "d", GUN)
    v = aktif(y, "v", GUN)
    s = aktif(y, "s", GUN)
    if d:
        sahip = "🔴 OSMANLI (dogrudan)"
        suphe.append((y, "d", d))
    elif v:
        sahip = "🟠 tabi"
        suphe.append((y, "v", v))
    elif s:
        sahip = s[0].get("d", "?")
    else:
        sahip = "— (sahipsiz)"
    k = (y.get("kaynak") or "")[:34]
    print("%-30s %7.3f %7.3f  %-28s %s" % (y["ad"][:30], y["lat"], y["lon"], sahip, k))

print()
if suphe:
    print("🔴 MERIC'IN BATISINDA %s ITIBARIYLA OSMANLI/TABI: %d nokta"
          % (GUN, len(suphe)))
    for y, alan, par in suphe:
        print("   %-28s %s: %s" % (y["ad"][:28], alan,
              " · ".join("%s→%s" % (p.get("f"), p.get("t")) for p in par)))
        # butun donemlerini de dok
        for a in ("d", "v", "s"):
            for p in (y.get(a) or []):
                if p.get("t", "") > "1912-01-01":
                    print("        %s %s → %s %s" % (a, p.get("f"), p.get("t"),
                                                     p.get("d", "")))
else:
    print("🟢 Meric'in batisinda %s itibariyla Osmanli/tabi nokta YOK." % GUN)
