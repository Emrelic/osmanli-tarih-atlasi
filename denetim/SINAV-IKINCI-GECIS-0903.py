# -*- coding: utf-8 -*-
"""İKİNCİ GEÇİŞ SINAVI — koordinatörün kabul ölçütü, kayıt kayıt.

🔴 KABUL ÖLÇÜTÜ (M-2660, ÖNCEDEN yazılı):
   ① `--dogrula` 🟠 listesi BOŞ, ya da
   ② kalan HER çift ÖLÇÜLEREK meşru: >1500 km VEYA örtüşmüyor
   ⚠️ «azaldı» YETMEZ — 1667→1005 azalması da tek başına yanıltıcıydı.

ÖLÇÜT (mesafe, `--dogrula` ile AYNI evren):
   İHLAL = ΔE < 12  **ve**  künye pencereleri ÖRTÜŞÜYOR
           **ve**  (Voronoi komşusu  **ya da**  en yakın nokta < 1500 km)

kullanım:
   py denetim/SINAV-IKINCI-GECIS-0903.py <artefakt> [karsilastirilacak_artefakt]
örnek:
   py denetim/SINAV-IKINCI-GECIS-0903.py denetim/oneri-YENI.txt \\
                                          denetim/oneri-20260903-223128.txt
"""
import sys, os, io, itertools, collections
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
sys.path.insert(0, os.path.join(os.getcwd(), "arac"))
import girdi
import renk_olc as R

if len(sys.argv) < 2:
    raise SystemExit(__doc__)
YENI_YOL = sys.argv[1]
ESKI_YOL = sys.argv[2] if len(sys.argv) > 2 else None


def oku(yol):
    d = {}
    if not os.path.exists(yol):
        print("🔴 artefakt YOK:", yol)
        raise SystemExit(2)
    for ln in io.open(yol, encoding="utf-8"):
        ln = ln.strip()
        if not ln or ln.startswith("//"):
            continue
        p = ln.split()
        if len(p) >= 2 and p[1].startswith("#"):
            d[p[0]] = p[1].lower()
    if not d:
        print("🔴 artefakttan hiçbir kimlik okunamadı:", yol)
        raise SystemExit(2)
    return d


D = girdi.oku_devletler()
pen = {k["id"]: (k.get("f"), k.get("t")) for k in D if k.get("id")}
bol = {k["id"]: (k.get("bolge") or "—") for k in D if k.get("id")}
k, _ = R.komsuluk()
R.engel_kumesi(next(iter(oku(YENI_YOL))), k=k)      # önbelleği kurdur
_NOKTA, _PEN, _BOL = R.engel_kumesi._onbellek


def g(hx):
    return R.lab(R.bind(R.h2r(hx)))


def mesafe(a, b):
    pa, pb = _NOKTA.get(a), _NOKTA.get(b)
    if not (pa and pb):
        return None                       # ÖLÇÜLEMEDİ — «temiz» DEĞİL
    return min(girdi.km(x[0], x[1], y[0], y[1]) for x in pa for y in pb)


def olc(oneri, ad):
    """ΔE<12 çiftleri CİNSİNE göre ayırır — «azaldı» yetmez, cins gerekir."""
    ihlal, uzak, ortusmez, olculemedi = [], [], [], []
    for a, b in itertools.combinations(sorted(oneri), 2):
        d = R.dE(g(oneri[a]), g(oneri[b]))
        if d >= 12:
            continue
        fa, ta = _PEN.get(a, (None, None))
        fb, tb = _PEN.get(b, (None, None))
        if not (fa and ta and fb and tb) or not (fa < tb and fb < ta):
            ortusmez.append((d, a, b, None))
            continue
        vor = b in k.get(a, ()) or a in k.get(b, ())
        m = mesafe(a, b)
        if vor:
            ihlal.append((d, a, b, m))
        elif m is None:
            olculemedi.append((d, a, b, None))
        elif m < 1500:
            ihlal.append((d, a, b, m))
        else:
            uzak.append((d, a, b, m))
    for L in (ihlal, uzak, ortusmez, olculemedi):
        L.sort()
    print()
    print("=" * 78)
    print("%s — %d kimlik · %d çift" % (ad, len(oneri),
                                        len(oneri) * (len(oneri) - 1) // 2))
    print("=" * 78)
    print("  ΔE<12 toplam            : %d" % (len(ihlal) + len(uzak)
                                              + len(ortusmez) + len(olculemedi)))
    print("  🔴 İHLAL (<1500km + eşz.): %d" % len(ihlal))
    print("  🟢 uzak (>1500 km)       : %d" % len(uzak))
    print("  🟢 örtüşmüyor            : %d" % len(ortusmez))
    print("  ⚪ ÖLÇÜLEMEDİ            : %d %s"
          % (len(olculemedi), "🔴 «temiz» SAYILMAZ" if olculemedi else ""))
    if ihlal:
        print()
        print("  🔴 İHLAL LİSTESİ (hepsi):")
        for d, a, b, m in ihlal:
            print("     %-26s ↔ %-26s ΔE %5.2f · %s · %s / %s"
                  % (a, b, d, ("%4.0f km" % m) if m is not None else "Voronoi",
                     bol.get(a), bol.get(b)))
    return {"ihlal": ihlal, "uzak": uzak, "ortusmez": ortusmez,
            "olculemedi": olculemedi}


yeni = oku(YENI_YOL)
sy = olc(yeni, "YENİ ARTEFAKT — " + os.path.basename(YENI_YOL))

if ESKI_YOL:
    eski = oku(ESKI_YOL)
    se = olc(eski, "ESKİ ARTEFAKT — " + os.path.basename(ESKI_YOL))
    print()
    print("=" * 78)
    print("KIYAS")
    print("=" * 78)
    print("  🔴 İHLAL : %d → %d  (%+d)"
          % (len(se["ihlal"]), len(sy["ihlal"]),
             len(sy["ihlal"]) - len(se["ihlal"])))
    ei = {(a, b) for _, a, b, _ in se["ihlal"]}
    yi = {(a, b) for _, a, b, _ in sy["ihlal"]}
    print("  kapanan  : %d" % len(ei - yi))
    print("  🔴 YENİ DOĞAN: %d %s"
          % (len(yi - ei), "— " + ", ".join("%s↔%s" % c for c in sorted(yi - ei)[:5])
             if (yi - ei) else ""))
    degisen = sum(1 for a in set(eski) & set(yeni) if eski[a] != yeni[a])
    print("  hex'i değişen kimlik: %d / %d" % (degisen, len(set(eski) & set(yeni))))

print()
print("=" * 78)
print("HÜKÜM — koordinatörün kabul ölçütü (M-2660)")
print("=" * 78)
if not sy["ihlal"] and not sy["olculemedi"]:
    print("🟢 KABUL — ihlal 0, ölçülemedi 0.")
    print("   Kalan her ΔE<12 çifti ÖLÇÜLEREK meşru: >1500 km ya da örtüşmüyor.")
    raise SystemExit(0)
print("🔴 KABUL EDİLMEDİ")
if sy["ihlal"]:
    print("   %d çift hâlâ ihlal (eşzamanlı + <1500 km ya da Voronoi)" % len(sy["ihlal"]))
if sy["olculemedi"]:
    print("   %d çift ÖLÇÜLEMEDİ — «temiz» sayılmaz (§11)" % len(sy["olculemedi"]))
raise SystemExit(1)
