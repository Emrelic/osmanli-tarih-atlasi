# SAHIPLIK-OLCULEMEDI-1006 — SALT OKUR. 11 ölçülemedi + Suriye 16 kaydının atlas dönemlerini basar.
import sys, os, json
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi

ADLAR = ["Erciş", "Çemişgezek", "Palu", "Çaldıran", "Özalp", "Bargiri", "Şeyhrumi",
         "Kulluk", "Hidra", "Bihaç", "Vişegrad",
         "Amman", "Kerak", "Suruç", "Azez", "Münbiç", "Cerablus", "Ayn el-Arab", "Mersin",
         "İskenderun", "Dörtyol", "Erzin", "Yumurtalık", "Sûr", "Birecik", "Mercihamis", "Sincan"]

Y = girdi.yukle(sessiz=True)
for ad in ADLAR:
    bul = [y for y in Y if ad.lower() in str(y.get("ad", "")).lower()]
    print("==", ad, len(bul))
    for y in bul[:3]:
        print("  ", y.get("id"), "|", y.get("ad"), "|", round(y["lat"], 3), round(y["lon"], 3))
        for alan in ("s", "v", "isg"):
            for p in (y.get(alan) or []):
                print("     ", alan, p.get("f"), "->", p.get("t"), p.get("d"))
