# -*- coding: utf-8 -*-
"""IRAN-KAFKAS-0082 — ADA taraması: o GÜN sahibi komşularının HEPSİNDEN farklı olan yerleşim.
Komşu = en yakın N nokta (varsayılan 4, ≤ 120 km). Sahiplik ARAC-IRAN-KAFKAS-0082-OLC.py ile aynı öncelik.
⚠️ Ada her zaman kusur DEĞİLDİR (gerçek eksklav, tâbi, kaynaklı kale olabilir) — liste ADAY'dır.
Kullanım: py denetim/ARAC-IRAN-KAFKAS-0082-ADA.py <gun> <lat0> <lat1> <lon0> <lon1> [N]"""
import sys, io
sys.path.insert(0, "arac"); sys.path.insert(0, "denetim")
import girdi
import importlib.util  # OLC modülü yüklenirken stdout'u utf-8'e zaten sarar (ikinci sarma dosyayı kapatır)
sp = importlib.util.spec_from_file_location("olc", "denetim/ARAC-IRAN-KAFKAS-0082-OLC.py")
olc = importlib.util.module_from_spec(sp); sp.loader.exec_module(olc)

gun = sys.argv[1]; la0, la1, lo0, lo1 = map(float, sys.argv[2:6])
N = int(sys.argv[6]) if len(sys.argv) > 6 else 4
Y = [y for y in girdi.yukle(sessiz=True)
     if la0 - 2 <= y["lat"] <= la1 + 2 and lo0 - 2 <= y["lon"] <= lo1 + 2]
S = {id(y): olc.sahip(y, gun) for y in Y}
Y = [y for y in Y if S[id(y)] != "—SAHIPSIZ/YOK—"]
say = 0
for y in Y:
    if not (la0 <= y["lat"] <= la1 and lo0 <= y["lon"] <= lo1):
        continue
    kom = sorted(((girdi.km(y["lat"], y["lon"], z["lat"], z["lon"]), z) for z in Y if z is not y),
                 key=lambda r: r[0])[:N]
    kom = [(d, z) for d, z in kom if d <= 120]
    if len(kom) < 2:
        continue
    ks = {S[id(z)] for _, z in kom}
    if S[id(y)] not in ks and len(ks) == 1:
        say += 1
        print(f"ADA  {y['ad']:<26} {S[id(y)]:<14} ← çevresi {ks.pop():<12} "
              f"({', '.join(f'{z['ad']} {d:.0f}km' for d, z in kom)})")
print(f"# {say} ada adayı · gün {gun}")
