# -*- coding: utf-8 -*-
"""Çöldeki yerleşim noktaları GERÇEK Mİ?

Emre'nin sorusu (21 Eylül 2026): *"bu noktalar yerleşim yerleri ise sorun yok
ama eğer bu noktalar boşluğa konmuş anlamsız noktalar ise bunları silmeliyiz.
bu çölde eğer bir şehir bir yerleşim yeri var ise oraya nokta koyabilirsin.
yerleşim yeri yok ise koymamalısın."*

Bu alet SİLMEZ — ayırır ve sayar. Silme kararı Emre'nindir ve her nokta için
AYRI verilir; toplu silme, gerçek vaha şehirlerini de götürür.

AYIRMA ÖLÇÜTLERİ (hiçbiri tek başına hüküm değil, birlikte okunur):
  ① ad kalıbı    — "Beyan G<enlem> B<boylam>" gibi koordinattan türetilmiş ad
                   İNSAN ADI DEĞİLDİR; böyle bir ad ancak üretilmiş olabilir
  ② kaynak dosya — hangi `yerlesimler*.js` dosyasından geldiği
  ③ `tur`        — sehir / kasaba / kale / vaha …
  ④ `kur`        — kuruluş tarihi VAR MI (gerçek yerleşimin tarihi olur)
  ⑤ `s` dönemi   — hiç devlete bağlanmış mı

⚠️ "Çölde" olmak tek başına kusur DEĞİLDİR: Gat, Murzuk, Bilma, Agadez,
   Tinbüktü gerçek çöl şehirleridir ve haritada BULUNMALIDIR. Aranan şey
   çölde nokta değil, KAYNAKSIZ ve ADSIZ nokta.

Koşu:  py denetim/ARAC-COL-NOKTA-0921.py
"""
import json
import os
import re
import sys
from collections import Counter

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi  # noqa: E402
from shapely.geometry import shape, Point  # noqa: E402
from shapely.ops import unary_union  # noqa: E402

# Motorun kelepçesiyle AYNI süzgeç — ikisi ayrışırsa ölçüm başka bir yeri
# ölçer (`uret_petek.py` çöl kelepçesi bloğunun kendi uyarısı).
GEO = os.path.join(KOK, "veri-kaynak", "basemaps",
                   "ne_10m_geography_regions_polys.geojson")
URETILMIS_AD = re.compile(r"^(Beyan|Dolgu|Nokta|Çöl|Col)\s", re.IGNORECASE)


def col_alani():
    if not os.path.exists(GEO):
        for kok, _, dosyalar in os.walk(os.path.join(KOK, "veri-kaynak")):
            if "ne_10m_geography_regions_polys.geojson" in dosyalar:
                return os.path.join(kok, "ne_10m_geography_regions_polys.geojson")
        raise SystemExit("çöl verisi BULUNAMADI — ölçüm yapılamadı (yok DEĞİL)")
    return GEO


def main():
    yol = col_alani()
    gr = json.load(open(yol, encoding="utf-8"))
    parca, sahra = [], []
    for f in gr["features"]:
        p = f["properties"]
        if (p.get("FEATURECLA") or "") != "Desert":
            continue
        g = shape(f["geometry"]).buffer(0)
        parca.append(g)
        if "SAHARA" in (p.get("NAME") or "").upper():
            sahra.append(g)
    COL = unary_union(parca)
    SAHRA = unary_union(sahra) if sahra else None
    print(f"çöl poligonu: {len(parca)} · Sahra adlı: {len(sahra)}")

    Y = girdi.yukle(sessiz=True)
    icinde = []
    for y in Y:
        if y.get("lat") is None or y.get("lon") is None:
            continue
        nk = Point(float(y["lon"]), float(y["lat"]))
        if COL.contains(nk):
            icinde.append((y, bool(SAHRA is not None and SAHRA.contains(nk))))
    print(f"çölün İÇİNDE kalan yerleşim: {len(icinde)} / {len(Y):,} "
          f"(Sahra'da {sum(1 for _, s in icinde if s)})")

    # ── sınıflandırma ────────────────────────────────────────────────────
    uretilmis, gercek = [], []
    for y, s in icinde:
        ad = y.get("ad", "")
        isaret = []
        if URETILMIS_AD.match(ad):
            isaret.append("ad-üretilmiş")
        if not y.get("kur"):
            isaret.append("kur-yok")
        if not y.get("s"):
            isaret.append("dönem-yok")
        (uretilmis if "ad-üretilmiş" in isaret else gercek).append((y, s, isaret))

    print(f"\n① ADI ÜRETİLMİŞ (koordinattan türetilmiş ad): {len(uretilmis)}")
    for y, s, isaret in sorted(uretilmis, key=lambda t: t[0].get("ad", "")):
        print(f"   {y.get('ad',''):<28} {y['lon']:8.2f},{y['lat']:7.2f}  "
              f"{os.path.basename(y.get('_kaynak','?')):<26} "
              f"{'SAHRA' if s else ''} [{' · '.join(isaret)}]")

    print(f"\n② ADI GERÇEK GÖRÜNEN: {len(gercek)} — kaynak dosyaya göre dağılım")
    for d, n in Counter(os.path.basename(y.get("_kaynak", "?"))
                        for y, _, _ in gercek).most_common():
        print(f"   {n:4}  {d}")
    supheli = [t for t in gercek if "kur-yok" in t[2] and "dönem-yok" in t[2]]
    print(f"\n③ ADI GERÇEK AMA KURULUŞU DA DÖNEMİ DE YOK: {len(supheli)}"
          + ("  ← elle bakılacak liste" if supheli else "  ✓"))
    for y, s, _ in sorted(supheli, key=lambda t: t[0].get("ad", ""))[:60]:
        print(f"   {y.get('ad',''):<28} {y['lon']:8.2f},{y['lat']:7.2f}  "
              f"{os.path.basename(y.get('_kaynak','?')):<26} "
              f"{'SAHRA' if s else ''} tur={y.get('tur','?')}")
    if len(supheli) > 60:
        print(f"   … ve {len(supheli)-60} tane daha")
    return 0


if __name__ == "__main__":
    sys.exit(main())
