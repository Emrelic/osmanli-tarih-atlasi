# -*- coding: utf-8 -*-
"""YERLESIM ARAMA — "bu kayit var mi?" sorusunun TEK DOGRU CEVABI.

  py arac/_yer_ara.py Taganrog Yagodina "Cuha"
  py arac/_yer_ara.py --kutu 40.5 37.0 45.5 49.0      # lat1 lon1 lat2 lon2
  py arac/_yer_ara.py --gun 1590-03-21 Urmiye          # o gunku sahibi

🔴 NICIN VAR — 28 Agustos 2026, VERI SAHIPLIK'in yakaladigi tuzak:
   `data/yerlesimler.js` yalniz `window.YERLESIMLER`i tanimlar (790 nokta).
   Oteki 54 dosyanin HER BIRI KENDI degiskenini tanimlar
   (YERLESIMLER_EK27 · YERLESIMLER_H2_RUSYA ...). Node ile yalniz
   `window.YERLESIMLER`e bakan bir sorgu, verinin %70'INI GORMEZ ve
   "kayit yok" diye YANLIS NEGATIF uretir. Iki kayit boyle "yok" ilan
   edildi; ikisi de vardi.

🔴 VE DUZELTMESI DE TAM DEGIL: "butun window.YERLESIMLER* degiskenlerini
   birlestir" 2632 verir, gercek 2606. Fark 26: dosya VAR ama GIRDIYE
   BAGLI DEGIL (ornek: yerlesimler_kafkas_duzeltme.js — 19 kayitlik bir
   yama, adi yaniltici). Bagli olmayan dosyayi saymak, olmayan veriyi
   varmis gibi gostermek demektir.
   ⇒ TEK OTORITE `girdi.GIRDI_DOSYALARI`dir. Bu alet onu kullanir.
   📌 `CLAUDE.md §5`: "ayristiriciyi dogrulamak yetmiyor, hangi DOSYALARI
      okudugunu da dogrulamak gerekiyor."
"""
import sys, os, io, contextlib

sys.path.insert(0, os.path.join(os.getcwd(), "arac"))

def duz(s):
    return str(s).encode("ascii", "replace").decode("ascii")

# girdi.yukle() yukleme dokumu basiyor; onu yutuyoruz
_gurultu = io.StringIO()
with contextlib.redirect_stdout(_gurultu):
    import girdi
    Y = girdi.yukle()
if isinstance(Y, tuple):
    Y = Y[0]

def sahip(y, gun):
    for p in y.get("d") or []:
        if p["f"] <= gun < p["t"]:
            return "OSMANLI"
    for p in y.get("v") or []:
        if p["f"] <= gun < p["t"]:
            return "tabi"
    for p in y.get("s") or []:
        if p["f"] <= gun < p["t"]:
            return p.get("d", "?")
    return "-"

args = sys.argv[1:]
gun = None
if "--gun" in args:
    i = args.index("--gun")
    gun = args[i + 1]
    del args[i:i + 2]

print("TABAN: %d nokta · %d girdi dosyasi (girdi.GIRDI_DOSYALARI)"
      % (len(Y), len(girdi.GIRDI_DOSYALARI)))

if args and args[0] == "--kutu":
    la1, lo1, la2, lo2 = (float(x) for x in args[1:5])
    ic = [y for y in Y if la1 <= y["lat"] <= la2 and lo1 <= y["lon"] <= lo2]
    print("\nKUTU %.2f-%.2fK / %.2f-%.2fD : %d nokta" % (la1, la2, lo1, lo2, len(ic)))
    for y in sorted(ic, key=lambda x: x["ad"]):
        ek = ("  " + sahip(y, gun)) if gun else ""
        print("  %-32s %7.3f %8.3f  k%d%s"
              % (duz(y["ad"])[:32], y["lat"], y["lon"], y.get("k", 0), ek))
    sys.exit(0)

if not args:
    print("\nkullanim: py arac/_yer_ara.py <ad parcasi> [...]")
    print("          py arac/_yer_ara.py --kutu lat1 lon1 lat2 lon2 [--gun YYYY-AA-GG]")
    sys.exit(0)

for aranan in args:
    a = aranan.lower()
    bulunan = [y for y in Y if a in y["ad"].lower()]
    print("\n=== '%s' : %d eslesme ===" % (duz(aranan), len(bulunan)))
    if not bulunan:
        print("  KAYIT YOK — ve bu hukum GUVENILIR (55 dosyanin tamami tarandi).")
        print("  [!] Ama TURKCE/OSMANLI ADINI da dene: Lefkada->Ayamavra,")
        print("     Kithira->Cuha, Taganrog->Taygan gibi. Ad ekseni ayri bir tuzak.")
        continue
    for y in bulunan:
        print("  %-32s %7.3f %8.3f  k%d  tur:%s"
              % (duz(y["ad"])[:32], y["lat"], y["lon"],
                 y.get("k", 0), duz(y.get("tur", "?"))))
        if gun:
            print("      %s -> %s" % (gun, duz(sahip(y, gun))))
        for alan in ("d", "v", "s"):
            for p in y.get(alan) or []:
                print("      %s: %s -> %s  %s"
                      % (alan, p.get("f"), p.get("t"), duz(p.get("d", ""))))
