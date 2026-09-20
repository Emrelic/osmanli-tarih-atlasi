# -*- coding: utf-8 -*-
import io, json, sys
sys.stdout.reconfigure(encoding="utf-8")
d = json.load(io.open("denetim/SINAV-EKO-UI-0073.json", encoding="utf-8"))
print("--- EKRANDAKI 8 SATIR ---")
for r in d["h0002_etiket"]:
    print(" %-16s ust=%-17s punto=%-4s yazi=%5s kolon=%5s tasti=%-5s BUYUK=%s" %
          (r["tur"], r["ust"], r["punto"], r["yazi_genislik"], r["kolon_genislik"],
           r["tasti_mi"], r["buyuk_harf"]))
print()
print("--- 18 TURUN TURETILMIS ETIKETI ---")
for r in d["kategori_evreni"]["liste"]:
    print(" %-17s %-26s -> %-17s (%d)" % (r["tur"], r["etiket"], r["ust"], len(r["ust"])))
