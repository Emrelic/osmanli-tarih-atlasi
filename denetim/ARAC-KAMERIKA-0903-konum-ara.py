# -*- coding: utf-8 -*-
"""İKİ İNATÇI NOKTA — denetçinin KENDİ maskesiyle geçerli koordinat ara.

🔴 SORUN: `denetle.py` bu iki nokta için bir reçete veriyor ama kendi
reçetesini sınayıp *"GEÇMEDİ"* diye damgalıyor — önerdiği nokta maske
sınırının ÜSTÜNDE ve 4 ondalığa yuvarlanınca dışarı düşüyor.

🔴 VE KENDİ MASKEMİ KURMUYORUM. Bugün tam bu yüzden 54 ihlal doğdu:
benim `ne_10m_land` üzerinde tek adımlı `covers()`im "35 kayıt, kabul
edilebilir" demişti, denetçinin DÖRT ADIMLI maskesi 54 ihlal buldu.
⇒ Bu sefer denetçinin `konum_denetimi`ni İÇE AKTARIYORUM (`main()`
`__main__` guard'ının altında, yani import güvenli) ve aday
koordinatları ONA sordurup arıyorum.

📌 `§11`: *"bir aracın verdiği reçete, uygulanınca kendi testini geçmek
ZORUNDADIR."* Geçmiyorsa reçete kullanılamaz — ama sorun ORTADAN
KALKMAZ, başka bir koordinat aranır.

PROJE KÖKÜNDEN:  py denetim/ARAC-KAMERIKA-0903-konum-ara.py
"""
import importlib.util
import io
import json
import os
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
sys.path.insert(0, "arac")

_sp = importlib.util.spec_from_file_location("kam_denetle", "arac/denetle.py")
_d = importlib.util.module_from_spec(_sp)
_sp.loader.exec_module(_d)          # main() __main__ guard'ının altında
print("denetle.py içe aktarıldı · konum_denetimi hazır")

HEDEF = {
    "Fort Reliance (Büyük Köle Gölü)": (62.7170, -109.1670),
    "Üç Aziz Körfezi (Trekh Svyatiteley)": (57.1700, -153.5000),
}

# aday ızgara: merkezden dışa doğru, 0,002°-0,060° arası (≈0,2-6,7 km)
ADIM = [0.002, 0.004, 0.007, 0.010, 0.015, 0.020, 0.030, 0.040, 0.060]
YON = [(1, 0), (0, 1), (-1, 0), (0, -1), (1, 1), (1, -1), (-1, 1), (-1, -1),
       (2, 1), (1, 2), (-2, 1), (-1, 2), (2, -1), (1, -2), (-2, -1), (-1, -2)]


def maske_disi(adaylar):
    """adaylar: [(ad, lat, lon)] → maske DIŞINDA olanların adları."""
    Y = [{"ad": ad, "lat": la, "lon": lo} for ad, la, lo in adaylar]
    r = _d.konum_denetimi(Y)
    if r is None:
        raise SystemExit("🔴 konum_denetimi None döndü (shapely/veri yok)")
    # 🔴 DÖNÜŞ BİÇİMİNİ VARSAYMADIM, ÖLÇTÜM: iki listeden oluşan bir DEMET
    #    döner; birincisi maske dışı kayıtlar, ögeleri 7'li:
    #    (km, ad, lat, lon, en_yakın_lat, en_yakın_lon, öneri_geçti_mi)
    #    İlk yazımda doğrudan `r` üzerinde döndüm ve IndexError aldım —
    #    docstring 6 alan diyordu, gerçek 7 ve sarmalayıcı bir demet var.
    disari = r[0] if isinstance(r, tuple) else r
    return {x[1] for x in disari}


bulunan = {}
for ad, (la0, lo0) in HEDEF.items():
    print("\n=== %s  (%.4f, %.4f)" % (ad, la0, lo0))
    tamam = False
    for adim in ADIM:
        adaylar = []
        for i, (dy, dx) in enumerate(YON):
            la = round(la0 + dy * adim, 4)
            lo = round(lo0 + dx * adim, 4)
            adaylar.append(("%s#%d" % (ad, i), la, lo))
        dis = maske_disi(adaylar)
        gecen = [(a, la, lo) for a, la, lo in adaylar if a not in dis]
        if gecen:
            # en yakın olanı seç
            gecen.sort(key=lambda t: (abs(t[1] - la0) + abs(t[2] - lo0)))
            _, la, lo = gecen[0]
            km = ((la - la0) ** 2 + ((lo - lo0) * 0.5) ** 2) ** 0.5 * 111
            print("   🟢 GEÇTİ  adım %.3f°  →  lat:%.4f, lon:%.4f  (~%.2f km)"
                  % (adim, la, lo, km))
            bulunan[ad] = (la, lo, km)
            tamam = True
            break
        print("   adım %.3f° — 16 yönün 16'sı da maske dışı" % adim)
    if not tamam:
        print("   🔴 6,7 km yarıçapta geçerli nokta BULUNAMADI")

print("\n" + "=" * 60)
if len(bulunan) == len(HEDEF):
    print("🟢 İKİSİ DE ÇÖZÜLDÜ")
else:
    print("🔴 çözülemeyen: %d" % (len(HEDEF) - len(bulunan)))
for ad, (la, lo, km) in bulunan.items():
    print("   %-40s lat:%.4f, lon:%.4f  (%.2f km kaydırıldı)"
          % (ad, la, lo, km))
json.dump({k: [v[0], v[1]] for k, v in bulunan.items()},
          io.open("denetim/_konum_ara.json", "w", encoding="utf-8"),
          ensure_ascii=False)
