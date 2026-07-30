# -*- coding: utf-8 -*-
"""
DOKUZUNCU DENETİM — görünürlük
===============================
Soru: *bir kırılma, kullanıcının ekranında GERÇEKTEN görünüyor mu?*

`OGRENILENLER.md §10`'un dersi: veri düzeltmesi yeterli değil. Taman'da tarih
düzeltildi, denetim temiz geçti, ama üretimden sonra ölçüldüğünde yarımada hâlâ
1475'te el değiştiriyordu. Estergon'da veri doğru, madde doğru, motor kaybı
doğru işliyor — ama boyanan alan **8 km²** değişiyor, yani hiç görünmüyor.

Ölçüm: üretilmiş `data/donemler.js`'te ardışık iki dönem arasında boyanan
alanın DEĞİŞİMİ. `Δ ≈ 0` olan kırılma kullanıcıya görünmüyor demektir.

⚠️ İKİ TUZAK — ikisi de yaşandı:

1. **Yalnız `o` sayma.** Tâbi katmana geçen petekler `o`'dan düşüp `v`'ye
   girer; yalnız `o` ölçülürse Bursa bile "0 km²" çıkar. Ölçüm `o + v`
   TOPLAMI üzerinden yapılır. (Bugünkü çıktıda `z` katmanı yok; şehzade
   payları `devletler_harita.js`'ten çiziliyor.)

2. **Kayıttaki `ao` alanını kullanma.** `uret_petek.py`'deki `alan_km2`
   `round(T, -3)` yapıyor — bini yuvarlıyor. 500 km²'nin altındaki her değişim
   sıfır görünür ve denetim körleşir. Yedinci denetime bu yüzden 50 km² mutlak
   eşik konmuş ve 101 yanlış alarm vermişti (OGRENILENLER §3). Bu araç alanı
   GEOMETRİDEN yeniden hesaplar, yuvarlamaz.

ÇALIŞTIRMA
    py arac/denetle_gorunurluk.py            # eşik altı kırılmalar
    py arac/denetle_gorunurluk.py --dagilim  # eşik seçmek için ham dağılım
"""
import io
import json
import math
import os
import sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(KOK, "data")
R_DUNYA = 6371.0088

# ⚠️ ÖLÇÜLEREK KONDU — gerekçe raporda. Mutlak km² değil, çünkü bir kırılmanın
# "görünür" sayılması ekrandaki büyüklüğüne bağlı: 500 km²'lik bir değişim
# Rumeli'de görünmez, Ege adasında bariz. Bu yüzden İKİ ölçüt birden:
#   - mutlak taban (piksel altı kalmasın)
#   - o günkü toplam alana ORAN (OGRENILENLER §3: doğru ölçüt hep oran çıktı)
GORUNUR_MUTLAK_KM2 = 150.0
GORUNUR_ORAN = 1e-4          # toplam gövdenin on binde biri


def _dizi(js, degisken):
    """`window.<X> = [...];` — üretilmiş dosya, gövde saf JSON."""
    anahtar = f"window.{degisken} = "
    i = js.index(anahtar) + len(anahtar)
    j = js.index(";\n", i)
    return json.loads(js[i:j])


def oku_donemler():
    """DONEMLER + PARCALAR havuzu.

    ⚠️ BİÇİM: `o`/`v` artık doğrudan geometri DEĞİL, `PARCALAR` havuzuna
    İNDEKS dizisi (aynı gövde parçası yüzlerce dönemde tekrarlanmasın diye).
    `js/app.js:parcaCoz` de aynı çözümü yapıyor. Havuz biçimi değişirse bu
    araç sessizce yanlış ölçer — bu yüzden çözüm burada tek yerde.
    """
    yol = os.path.join(DATA, "donemler.js")
    js = io.open(yol, encoding="utf-8").read()
    return _dizi(js, "DONEMLER"), _dizi(js, "PARCALAR")


def halka_alani(cs):
    """Küresel çokgen alanı (km²) — uret_petek.py:alan_km2 ile aynı formül,
    farkı: YUVARLAMA YOK."""
    s = 0.0
    for i in range(len(cs) - 1):
        lo1, la1 = math.radians(cs[i][0]), math.radians(cs[i][1])
        lo2, la2 = math.radians(cs[i + 1][0]), math.radians(cs[i + 1][1])
        s += (lo2 - lo1) * (2 + math.sin(la1) + math.sin(la2))
    return abs(s * R_DUNYA * R_DUNYA / 2)


def mp_alan(indeksler, havuz, onbellek):
    """PARCALAR indeks listesi → km². Delikler çıkarılır, parça alanı önbellekli."""
    if not indeksler:
        return 0.0
    T = 0.0
    for ix in indeksler:
        a = onbellek.get(ix)
        if a is None:
            parca = havuz[ix]
            a = 0.0
            for i, halka in enumerate(parca):
                h = halka_alani(halka)
                a += h if i == 0 else -h
            onbellek[ix] = a
        T += a
    return T


def alanlar(D, havuz):
    """Her dönem için (o alanı, v alanı, toplam) — geometriden, yuvarlamasız."""
    onbellek = {}
    out = []
    for d in D:
        ao = mp_alan(d.get("o"), havuz, onbellek)
        av = mp_alan(d.get("v"), havuz, onbellek)
        out.append((ao, av, ao + av))
    return out


def main():
    argv = sys.argv[1:]
    print("Görünürlük denetimi — her kırılma ekranda gerçekten değişiyor mu?\n")
    D, havuz = oku_donemler()
    print(f"  {len(D)} dönem · {len(D)-1} kırılma · {len(havuz)} gövde parçası havuzda")
    A = alanlar(D, havuz)
    print(f"  alanlar geometriden hesaplandı (yuvarlama yok)\n")

    kayit = []
    for i in range(len(D) - 1):
        onc, son = A[i], A[i + 1]
        d_o = son[0] - onc[0]
        d_v = son[1] - onc[1]
        d_top = abs(son[2] - onc[2])
        # Katman arası geçiş de bir değişimdir: o'dan v'ye kayan alan toplamı
        # değiştirmez ama ekranda RENK değiştirir. İkisinin büyüğü alınır.
        etkin = max(d_top, abs(d_o), abs(d_v))
        taban = max(GORUNUR_MUTLAK_KM2, onc[2] * GORUNUR_ORAN)
        kayit.append({
            "i": i, "f": D[i + 1]["f"], "ad": D[i + 1].get("ad", "—"),
            "d_o": d_o, "d_v": d_v, "d_top": d_top, "etkin": etkin,
            "taban": taban, "toplam": onc[2],
        })

    if "--dagilim" in argv:
        print("=== ETKİN DEĞİŞİM DAĞILIMI (eşik seçmek için) ===")
        for alt, ust, et in [(-1, 1, "= 0 km²        görünmez"),
                             (1, 10, "1-10 km²       görünmez"),
                             (10, 50, "10-50 km²      neredeyse görünmez"),
                             (50, 150, "50-150 km²     zar zor"),
                             (150, 1000, "150-1000 km²   görünür"),
                             (1000, 10000, "1-10 bin km²   bariz"),
                             (10000, 10 ** 12, ">10 bin km²    çok bariz")]:
            n = [k for k in kayit if alt < k["etkin"] <= ust]
            print(f"  {et:32} {len(n):4}")
        print("\nOranla karşılaştırma (etkin / o günkü toplam):")
        for alt, ust, et in [(0, 1e-5, "< 1/100 000"), (1e-5, 1e-4, "1/100 000 - 1/10 000"),
                             (1e-4, 1e-3, "1/10 000 - 1/1 000"), (1e-3, 1, "> 1/1 000")]:
            n = [k for k in kayit if k["toplam"] > 0 and alt <= k["etkin"] / k["toplam"] < ust]
            print(f"  {et:32} {len(n):4}")
        return

    # ⚠️ İKİ KADEME — tek eşik yanlış olurdu, ölçüm gösterdi:
    # Mutlak eşikte dağılımda TEMİZ BİR BOŞLUK var: 15 kırılma 150 km²'nin
    # altında, sonra 36'sı 150-1000 arasına sıçrıyor. Yani 150 km² veriden
    # okunan bir sınır, sezgiden değil.
    # Oran ölçütü (toplam×1e-4) ise geç dönemde 500 km²'ye çıkıyor ve Ege
    # adalarının kaybını "görünmez" sayıyor — oysa kullanıcı tam da o adaları
    # ekran görüntüsüyle bildirdi. Bu yüzden oran ÖLDÜRÜCÜ değil, ŞÜPHELİ.
    kesin = sorted([k for k in kayit if k["etkin"] < GORUNUR_MUTLAK_KM2],
                   key=lambda k: k["etkin"])
    supheli = sorted([k for k in kayit
                      if GORUNUR_MUTLAK_KM2 <= k["etkin"] < k["toplam"] * GORUNUR_ORAN],
                     key=lambda k: k["etkin"])

    def bas(k):
        print(f"  {k['etkin']:9.1f} km²  {k['f']}  {k['ad'][:56]}")
        if abs(k["d_o"]) > 1 or abs(k["d_v"]) > 1:
            print(f"             doğrudan {k['d_o']:+.1f}  ·  tâbi {k['d_v']:+.1f}")

    print(f"=== A) GÖRÜNMEYEN — etkin değişim < {GORUNUR_MUTLAK_KM2:.0f} km² ===")
    print(f"{len(kesin)} / {len(kayit)} kırılma\n")
    for k in kesin:
        bas(k)
    print(f"\n=== B) ŞÜPHELİ — mutlak olarak küçük değil ama o günkü gövdenin "
          f"{GORUNUR_ORAN:g}'inden az ===")
    print(f"{len(supheli)} kırılma · çoğu ada kaybı; ada gerçekten görünür,")
    print("bu kademe yalnız gözden geçirme listesidir\n")
    for k in supheli:
        bas(k)
    print()
    print("SONUÇ:", "temiz ✓" if not kesin else
          f"{len(kesin)} kırılma görünmüyor (+{len(supheli)} şüpheli)")
    return 1 if kesin else 0


if __name__ == "__main__":
    sys.exit(main() or 0)
