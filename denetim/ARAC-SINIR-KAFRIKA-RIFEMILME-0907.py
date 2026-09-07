# -*- coding: utf-8 -*-
"""RİF İÇ BÖLGESİ KİME EMİLİYOR — `§2`nin somut sonucu

Bir önceki ölçüm (RIFKUTU) Rif çekirdeğinde atlas noktası OLMADIĞINI
gösterdi: dar kutuda yalnız iki İspanyol egemenlik adacığı var.
`§2`: *"noktası olmayan bölge en yakın peteğe emilir ve O PETEĞİN
SAHİBİYLE boyanır."*

⇒ SORU: Rif iç bölgesi 1923-10-28'de HANGİ kimlikle boyanıyor?

🔴 YAKLAŞIKLIK, gizlenmiyor: bu alet EN YAKIN NOKTAyı buluyor. Motor
   ayrıca kıyıya/nehre/dağ sırtına yaslıyor, Chaikin ile yumuşatıyor ve
   `TAVAN_KM` uyguluyor. ⇒ Bu bir BİRİNCİ MERTEBE tahmindir, üretilmiş
   geometrinin kendisi DEĞİL. Kesin cevap `data/donemler.js`ten okunur;
   koşu 8 sürüyor ve o dosya donuk.
"""
import io
import math
import os
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi  # noqa: E402

GUN = "1923-10-28"

# Rif Cumhuriyeti'nin cekirdegi — Abdulkerim el-Hattabi'nin merkezi Acdir
# ve ic dagilik kesim. Temsili noktalar (yaklasik):
ORNEK = [
    ("Acdir (Ajdir) — Rif merkezi", 35.22, -3.87),
    ("Targuist", 34.94, -4.31),
    ("Beni Urriaguel ic kesim", 35.05, -3.95),
    ("Ketame (Ketama)", 34.92, -4.57),
    ("Nador cevresi", 35.17, -2.93),
    ("Vadi Kert (Rif dogusu)", 35.05, -3.35),
]


def sahip(y, g):
    for p in (y.get("d") or []):
        if p["f"] <= g < p["t"]:
            return "OSMANLI-dogrudan"
    for p in (y.get("v") or []):
        if p["f"] <= g < p["t"]:
            return "tabi:" + str(p.get("kid") or p.get("k") or "__KIDSIZ__")
    for p in (y.get("s") or []):
        if p["f"] <= g < p["t"]:
            return p.get("d")
    return None


def km(a, b):
    f1, f2 = math.radians(a[1]), math.radians(b[1])
    x = (math.sin((f2 - f1) / 2) ** 2
         + math.cos(f1) * math.cos(f2) * math.sin(math.radians(b[0] - a[0]) / 2) ** 2)
    return 6371.0 * 2 * math.asin(min(1.0, math.sqrt(x)))


def main():
    Y = [y for y in girdi.yukle()
         if y.get("lon") is not None and y.get("lat") is not None]
    print("SORGU GUNU: %s   ·   atlas noktasi: %d" % (GUN, len(Y)))
    print("🔴 YAKLASIKLIK: EN YAKIN NOKTA modeli — motorun kiyi/nehir")
    print("   yaslamasi ve TAVAN_KM'si HESABA KATILMADI.")
    print("")
    print("%-30s %8s %8s  %-26s %7s  %s"
          % ("Rif ic noktasi (temsili)", "lat", "lon", "en yakin atlas noktasi",
             "km", "1923 kimligi"))
    print("-" * 104)
    dagilim = {}
    for ad, la, lo in ORNEK:
        en, end = None, 9e9
        for y in Y:
            d = km((lo, la), (y["lon"], y["lat"]))
            if d < end:
                en, end = y, d
        s = sahip(en, GUN)
        dagilim[s] = dagilim.get(s, 0) + 1
        print("%-30s %8.2f %8.2f  %-26s %7.1f  %s"
              % (ad, la, lo, en["ad"], end, str(s)))
    print("")
    print("dagilim: %s" % dagilim)
    print("")
    print("=== NE ANLAMA GELIYOR ===")
    if dagilim.get("ispanya"):
        print("🔴 Rif ic bolgesinin bir kismi `ispanya` ile boyaniyor.")
        print("   TARIHI CEKINCE: 1921 Temmuz'unda Ispanya Annual'da bozguna")
        print("   ugradi ve Rif'i FIILEN KAYBETTI; 1921-1926 arasi orayi")
        print("   Rif Cumhuriyeti denetliyordu. ⇒ Harita, Ispanya'nin")
        print("   kaybettigi topragi Ispanya olarak gosteriyor OLABILIR.")
        print("   ⚪ Bunu URETILMIS GEOMETRIDEN dogrulamadim.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
