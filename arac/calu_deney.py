# -*- coding: utf-8 -*-
"""calu_deney.py — "Câlû'yu sıkıştıran yapıyı kaldırsak ne olur?"

🔴 Emre'nin sorusu (15 Ağustos): *"Câlû'nun bölgesinin yayılmasına engel
olan yapıyı kaldıralım, bunu kaldırırsak ne olur ki?"*

Bu betik cevabı **ölçer**, tartışmaz. Ve `§3.5.1`in kuralı gereği
**İKİ UCU DA** ölçer: bir sınır kayması önerildiğinde *"bu tarafta düzelir
mi"* yetmez, *"öbür tarafta ne doğuyor"* da sorulur. Çünkü dolgu
noktaları keyfî konmadı — çölün en yakın peteğe **emilip** boyanmasını
engellemek için kondular (`CLAUDE.md §2`).

    py arac/calu_deney.py

Üç senaryo, aynı ızgarada, TEK DEĞİŞKENLİ:
    A  BUGÜN            dolgular yerinde, tavan k0=280
    B  DOLGULAR YOK     iki dolgu silinmiş  ← Emre'nin önerisi
    C  DOLGU TAVANI KISILMIŞ  dolgular duruyor ama k0 tavanı 140
                        (yani bir çöl dolgusu bir kasabadan FAZLA
                         uzanamıyor — `ALTYAPI §1.1b`nin ruhu)
"""
import math
import os
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))

KUTU = (17.0, 25.0, 28.0, 33.5)     # Sirte'den Cağbûb'a, Serîr'e kadar
ADIM = 0.05                          # ~5,5 km — alan ölçmeye yeter
TAVAN_KM = {1: 700, 2: 420, 3: 280, 4: 140, 0: 280}
KALDIR = ["Libya iç çölü (Sirte ardı)", "Serîr Kalanşû"]
GUN = "1281-01-01"


def _sahip(y, gun):
    for p in (y.get("d") or []):
        if (p.get("f") or "") <= gun < (p.get("t") or "9999"):
            return "OSMANLI"
    for p in (y.get("v") or []):
        if (p.get("f") or "") <= gun < (p.get("t") or "9999"):
            return "tabi"
    for p in (y.get("s") or []):
        if (p.get("f") or "") <= gun < (p.get("t") or "9999"):
            return p.get("d")
    return None          # SAHİPSİZ — haritada BEYAZ


def kos(Y, tavan, etiket):
    """Basit tavanlı Voronoi. Hücre başına sahip ve km² döner."""
    lon0, lat0, lon1, lat1 = KUTU
    nx = int((lon1 - lon0) / ADIM)
    ny = int((lat1 - lat0) / ADIM)
    nk = [y for y in Y if y.get("lon") is not None]
    alan = {}
    bos_km2 = 0.0
    for j in range(ny):
        lat = lat0 + (j + 0.5) * ADIM
        # hücre alanı (enlem düzeltmeli)
        hkm2 = (ADIM * 110.574) * (ADIM * 111.32 * math.cos(math.radians(lat)))
        for i in range(nx):
            lon = lon0 + (i + 0.5) * ADIM
            en, eni = None, None
            for y in nk:
                d = math.hypot(
                    (y["lon"] - lon) * 111.32 * math.cos(math.radians(lat)),
                    (y["lat"] - lat) * 110.574)
                if d > tavan.get(y.get("k") or 0, 280):
                    continue          # tavan dışı — bu nokta buraya ulaşamaz
                if en is None or d < en:
                    en, eni = d, y
            if eni is None:
                bos_km2 += hkm2        # ② AYRILMAMIŞ boşluk (tavan dışı)
                continue
            s = _sahip(eni, GUN)
            if s is None:
                bos_km2 += hkm2        # ① AYRILMIŞ boşluk (dolgu hücresi)
            alan[eni["ad"]] = alan.get(eni["ad"], 0.0) + hkm2
    return alan, bos_km2


def main():
    import girdi
    Y = girdi.yukle(sessiz=True)
    lon0, lat0, lon1, lat1 = KUTU
    icinde = [y for y in Y if y.get("lon") is not None
              and lon0 <= y["lon"] <= lon1 and lat0 <= y["lat"] <= lat1]
    print("KUTU %s · adım %.2f° (~%.0f km) · %d nokta"
          % (str(KUTU), ADIM, ADIM * 111, len(icinde)))
    print("gün: %s\n" % GUN)

    kisik = dict(TAVAN_KM)
    kisik[0] = 140
    senaryo = [
        ("A · BUGÜN", icinde, TAVAN_KM),
        ("B · DOLGULAR YOK", [y for y in icinde if y["ad"] not in KALDIR], TAVAN_KM),
        ("C · DOLGU TAVANI 140", icinde, kisik),
    ]
    sonuc = {}
    for ad, nk, tv in senaryo:
        alan, bos = kos(nk, tv, ad)
        sonuc[ad] = (alan, bos)
        top = sum(alan.values())
        print("── %s" % ad)
        print("   Câlû peteği      %10s km²" % "{:,.0f}".format(alan.get("Câlû", 0)))
        print("   Cağbûb peteği    %10s km²" % "{:,.0f}".format(alan.get("Cağbûb", 0)))
        print("   BOŞ (beyaz)      %10s km²  (%%%.1f)"
              % ("{:,.0f}".format(bos), 100.0 * bos / max(1, top)))
        # 1281'de hafsi boyanan alan
        haf = sum(v for a, v in alan.items()
                  if _sahip(next(y for y in icinde if y["ad"] == a), GUN) == "hafsi")
        print("   HAFSÎ boyalı     %10s km²" % "{:,.0f}".format(haf))
        sonuc[ad] = (alan, bos, haf)

    print("\n" + "=" * 68)
    print("KARŞILAŞTIRMA — B ve C, A'ya göre")
    print("=" * 68)
    a_alan, a_bos, a_haf = sonuc["A · BUGÜN"]
    for ad in ("B · DOLGULAR YOK", "C · DOLGU TAVANI 140"):
        alan, bos, haf = sonuc[ad]
        print("\n%s" % ad)
        print("   Câlû      %+10s km²  (%s → %s)"
              % ("{:,.0f}".format(alan.get("Câlû", 0) - a_alan.get("Câlû", 0)),
                 "{:,.0f}".format(a_alan.get("Câlû", 0)),
                 "{:,.0f}".format(alan.get("Câlû", 0))))
        print("   BOŞ alan  %+10s km²  (%s → %s)"
              % ("{:,.0f}".format(bos - a_bos), "{:,.0f}".format(a_bos),
                 "{:,.0f}".format(bos)))
        print("   HAFSÎ     %+10s km²  ← 🔴 ASIL SORU BU"
              % "{:,.0f}".format(haf - a_haf))
    print("\n📌 `§3.5.1`: bir sınır kayması İKİ UÇTAN da ölçülür. Câlû'nun")
    print("   kazandığı her km², bir yerden ALINIYOR — ve o yer bugün BOŞ.")
    print("   Soru 'Câlû güzelleşti mi' değil, 'Hafsî Libya çölüne yayıldı mı'.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
