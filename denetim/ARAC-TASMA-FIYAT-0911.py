# -*- coding: utf-8 -*-
"""TAŞMA ÖLÇÜM — poligonlaştırmanın FİYATI + 8/16 yön sapması.

🔴 AĞIR HİÇBİR ŞEY KOŞTURMAZ. Koşu 9 canlı, makine dar (boş ~1,8 GB).
   · ızgara KURMAZ · maske YÜKLEMEZ · Dijkstra KOŞTURMAZ · geometri AÇMAZ
   · yaptığı tek şey: iki üretilmiş dosyayı AKIŞ hâlinde tarar (sabit bellek,
     1 MB'lık parça) ve birkaç bin kayan nokta işlemi yapar.
   Ölçülen tepe bellek: parça tamponu + sayaçlar ⇒ birkaç MB.

KÖŞE SAYIMI YÖNTEMİ ve YANLILIĞI (D107 — ne ölçtüğümü yazıyorum):
   Bir koordinat çifti dosyada `[28.9,41.0]` biçiminde yazılıyor. Yapısal
   köşeli parantezleri saymamak için ölçüt `[` + ARDINDAN GELEN RAKAM/EKSİ:
   yapısal parantezin ardından `[` gelir, koordinatınkinin ardından sayı.
   ⇒ Bu sayım koordinat çiftlerini sayar, ve yanlılığı YUKARI değil:
     DONEMLER'in indeks dizileri (`[3,17,42]`) de bu kalıba uyar, yani
     ölçüm bir ÜST SINIRDIR. Alt sınırı ayrıca basıyorum (bkz. `ondalikli`).
"""
import io
import os
import math
import re
import sys

sys.stdout.reconfigure(encoding="utf-8")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PARCA = 1 << 20                      # 1 MB — bellek sabit kalsın

# `[` + (rakam | eksi)  →  koordinat çifti ya da indeks dizisi açılışı
_ACIK = re.compile(r"\[-?\d")
# `[` + ondalıklı sayı  →  koordinat olduğu KESİN olan alt küme
_ONDALIK = re.compile(r"\[-?\d+\.\d")


def tara(yol):
    """Dosyayı AKIŞ hâlinde tarar. Belleğe hiçbir zaman 1 MB'tan fazlası girmez."""
    if not os.path.exists(yol):
        return None
    boy = os.path.getsize(yol)
    acik = ondalik = 0
    kuyruk = ""
    with io.open(yol, encoding="utf-8", errors="replace") as f:
        while True:
            p = f.read(PARCA)
            if not p:
                break
            g = kuyruk + p
            acik += len(_ACIK.findall(g))
            ondalik += len(_ONDALIK.findall(g))
            kuyruk = g[-8:]          # parça sınırında kalıp bölünmesin
    return {"bayt": boy, "mb": boy / 1048576.0,
            "ust_sinir_kose": acik, "alt_sinir_kose": ondalik}


# ─────────────────────────────────────────────────────────────────────────────
# ② 8 YÖN / 16 YÖN — SÜREKLİ LİMİTTE SAPMA. Izgara kurulmuyor, Dijkstra yok.
#
# Bir ızgara metriğinde bir yöne gitmenin maliyeti, o yönü SARAN iki taban
# vektörünün negatif olmayan birleşimidir (en ucuz yol hep ikisini karıştırır).
# Sektör [v1, v2] içindeki (x, y) için:  a·v1 + b·v2 = (x, y) çözülür ve
# maliyet a·|v1| + b·|v2| olur. Euklid'e oranın TEPESİ sapmadır.
# ─────────────────────────────────────────────────────────────────────────────
def sektor_tepe(v1, v2, adim=200000):
    """[v1,v2] sektöründe maliyet/Euklid oranının tepesi. Saf aritmetik."""
    (x1, y1), (x2, y2) = v1, v2
    n1, n2 = math.hypot(x1, y1), math.hypot(x2, y2)
    det = x1 * y2 - y1 * x2
    t1, t2 = math.atan2(y1, x1), math.atan2(y2, x2)
    en, en_ac = 0.0, None
    for k in range(adim + 1):
        th = t1 + (t2 - t1) * k / adim
        x, y = math.cos(th), math.sin(th)
        a = (x * y2 - y * x2) / det          # Cramer
        b = (x1 * y - y1 * x) / det
        if a < -1e-12 or b < -1e-12:
            continue
        r = a * n1 + b * n2                  # Euklid uzunluğu 1 ⇒ oran = maliyet
        if r > en:
            en, en_ac = r, math.degrees(th)
    return en, en_ac


def komsuluk_sapmasi(vekler, ad):
    """Birinci çeyrekteki taban vektörlerini açıya göre sıralar, sektör sektör tarar."""
    v = sorted(set(vekler), key=lambda p: math.atan2(p[1], p[0]))
    en, en_ac, nere = 1.0, None, None
    for i in range(len(v) - 1):
        r, a = sektor_tepe(v[i], v[i + 1])
        if r > en:
            en, en_ac, nere = r, a, (v[i], v[i + 1])
    print("  %-10s taban %2d vektör · TEPE SAPMA %%%.3f  (açı %.2f°, sektör %s)"
          % (ad, len(v), (en - 1) * 100, en_ac, nere))
    return en


def acilar(vekler):
    a = sorted({round(math.degrees(math.atan2(y, x)), 4)
                for x, y in vekler if x >= 0 and y >= 0})
    return a


def main():
    print("═" * 78)
    print("① POLİGONLAŞTIRMANIN FİYATI — üretilmiş dosyalar (AKIŞ taraması)")
    print("═" * 78)
    for ad in ("data/donemler.js", "data/devletler_harita.js",
               "data/bolgeler.js", "veri-kaynak/motor_kara.geojson"):
        s = tara(os.path.join(KOK, ad))
        if s is None:
            print("  %-34s ⚪ YOK" % ad)
            continue
        print("  %-34s %8.1f MB · köşe: alt %10s · üst %10s"
              % (ad, s["mb"], "{:,}".format(s["alt_sinir_kose"]),
                 "{:,}".format(s["ust_sinir_kose"])))

    print()
    print("═" * 78)
    print("② 8 YÖN → 16 YÖN — sürekli limitte sapma (analitik + sayısal tarama)")
    print("═" * 78)
    d4 = [(1, 0), (0, 1)]
    d8 = d4 + [(1, 1)]
    d16 = d8 + [(2, 1), (1, 2)]
    komsuluk_sapmasi(d4, "4 yön")
    r8 = komsuluk_sapmasi(d8, "8 yön")
    r16 = komsuluk_sapmasi(d16, "16 yön")
    print("  ⇒ iyileşme: %%%.3f → %%%.3f  =  %.2f KAT"
          % ((r8 - 1) * 100, (r16 - 1) * 100, (r8 - 1) / (r16 - 1)))
    print()
    print("  ANALİTİK KAPALI BİÇİM (taramadan bağımsız — çapraz sınav):")
    print("    8 yön : √(1+(√2−2+1)²)… d = maks + (√2−1)·min ⇒ tepe √(1+(√2−1)²)"
          " = %%%.3f" % ((math.sqrt(1 + (math.sqrt(2) - 1) ** 2) - 1) * 100))
    print("    16 yön: (1,0)-(2,1) sektörü ⇒ tepe √(1+(√5−2)²) = %%%.3f"
          % ((math.sqrt(1 + (math.sqrt(5) - 2) ** 2) - 1) * 100))

    print()
    print("  🔴 22,5° SINAVI — Emre '22,5 derece farkla' dedi:")
    print("     8  yön açıları: %s" % acilar(d8 + [(0, 1)]))
    print("     16 yön açıları: %s" % acilar(d16))
    print("     istenen       : [0, 22.5, 45, 67.5, 90]")
    hedef = 22.5
    en_yakin = min(((abs(math.degrees(math.atan2(j, i)) - hedef), (i, j))
                    for i in range(1, 13) for j in range(0, 13)
                    if math.gcd(i, j) == 1), key=lambda t: t[0])
    print("     22,5°'ye EN YAKIN ilkel tam sayı öteleme (i,j≤12): %s · sapma %.3f°"
          % (str(en_yakin[1]), en_yakin[0]))
    print("     tan(22,5°) = √2−1 = %.10f  (İRRASYONEL ⇒ tam sayı ızgarada TAM"
          " 22,5° YOKTUR)" % (math.sqrt(2) - 1))


if __name__ == "__main__":
    main()
