# -*- coding: utf-8 -*-
"""SINIR-D-KOMSU-0077 — dört manda kaydı: bugünkü çizgi 1920/1923 belgesinin hattından ne kadar uzak?

1920 Fransız-İngiliz Sözleşmesi md. 1 (FRUS 1921 c.I, belge 113): "...passing in a straight line towards
the Euphrates, which it crosses at Abu Kemal, thence a straight line to Imtar to the south of Jebul Druse,
then a line to the south of Nasib ... then a line to Semakh". Imtar = GeoNames 'Imtān' (SY, 32.419 36.817)
— Cebel-i Dürzî'nin güneyinde tek eşleşen yer; özdeşlik BENİM OKUMAM, kaynakta koordinat yok.
Ölçü: bugünkü çift çizgisinin (veri-kaynak/d_bugunku_sinirlar.geojson) köşelerinin 1920 düz hattına uzaklığı.
"""
import io, json, math, sys
from shapely.geometry import shape, LineString, Point
from shapely.ops import linemerge

sys.stdout.reconfigure(encoding="utf-8")
AK = (40.91854, 34.45226)      # Ālbū Kamāl SY (GeoNames P.PPLA2)
IM = (36.81729, 32.41905)      # Imtān SY (GeoNames P.PPL)
NASIB = (36.18813, 32.5518)
SEMAKH = (35.58333, 32.7)      # Samakh IL (S.RUIN)


def yerel(p, lat0):
    return (p[0] * 111.32 * math.cos(math.radians(lat0)), p[1] * 110.57)


def uzak_km(p, a, b):
    lat0 = (a[1] + b[1]) / 2
    return LineString([yerel(a, lat0), yerel(b, lat0)]).distance(Point(yerel(p, lat0)))


GJ = json.load(io.open("veri-kaynak/d_bugunku_sinirlar.geojson", encoding="utf-8"))


def cizgi(c):
    g = [shape(f["geometry"]) for f in GJ["features"] if f["properties"]["cift"] == c]
    parts = []
    for x in g:
        parts += list(getattr(x, "geoms", [x]))
    m = linemerge(parts)
    return list(getattr(m, "geoms", [m]))


def ozet(ad, noktalar, a, b):
    d = sorted(uzak_km(p, a, b) for p in noktalar)
    if not d:
        print(ad, "— nokta yok"); return
    print("%-44s n=%3d  medyan %5.1f km  en çok %5.1f km" % (ad, len(d), d[len(d) // 2], d[-1]))


iqsy = cizgi("IRQ-SYR")
josy = cizgi("JOR-SYR")
print("IRQ-SYR parça", len(iqsy), "· JOR-SYR parça", len(josy))
iq = [c for l in iqsy for c in l.coords]
jo = [c for l in josy for c in l.coords]
# Irak–Suriye: Fırat geçişinin güneyi (1920: Ebu Kemal → Imtar düz hattı)
ozet("IRQ-SYR · Fırat güneyi ↔ AK–Imtar", [c for c in iq if c[1] < AK[1]], AK, IM)
# Fırat geçişi: bugünkü çizginin Fırat enlemine en yakın köşesi Ebu Kemal'den kaç km?
en = min(iq, key=lambda c: abs(c[1] - AK[1]))
print("IRQ-SYR · Fırat enlemindeki köşe", en, "→ Ebu Kemal'e %.1f km" % (math.dist(yerel(en, AK[1]), yerel(AK, AK[1]))))
# Ürdün–Suriye: Tell Romah → Irak üçlü noktası kesimi (bugün 'Ebu Kemal yönünde düz hat')
ozet("JOR-SYR · 36.9°D doğusu ↔ AK–Imtar", [c for c in jo if c[0] > 36.9], AK, IM)
ozet("JOR-SYR · Imtar–Nasib arası ↔ Imtar–Nasib", [c for c in jo if NASIB[0] <= c[0] <= IM[0]], IM, NASIB)
ozet("JOR-SYR · Nasib batısı ↔ Nasib–Semakh", [c for c in jo if c[0] < NASIB[0]], NASIB, SEMAKH)
print("JOR-SYR uç noktaları:", [l.coords[0] for l in josy], [l.coords[-1] for l in josy])

# İsrail–Suriye: NE hangi hattı çiziyor? 1923 hattı Taberiye'nin DOĞU kıyısından ~10 m içerde + Ürdün nehri;
# 1974 ayrılma hattı Golan'ın doğusunda (~35,8°D). Boylam dağılımı bunu ayırır.
issy = cizgi("ISR-SYR")
xs = [c[0] for l in issy for c in l.coords]
print("ISR-SYR parça", len(issy), "· boylam min/medyan/maks %.3f / %.3f / %.3f" % (min(xs), sorted(xs)[len(xs) // 2], max(xs)))
