# -*- coding: utf-8 -*-
"""SINIR ENVANTERİ — hangi sınırın kaç çifte ihtiyacı var, ÖLÇEREK.

    py arac/_sinir_envanteri.py --gun 1923-06-15 --hedef 10

🔴 NİÇİN VAR — Emre'nin 0039/H-0009 maddesi:
    *"1923 itibarı ile tüm ülkelerin sınırlarını birebir 6. kalite
     çizelim. Sınır çizmek için gerekirse sınırın bir o tarafından bir
     bu tarafından yerleşim alıp ikisinin arasından geçirelim sınırı…
     şimdi bir yerleşim yeri sınıfı ortaya çıkaralım, bunun adına da
     SINIR YERLEŞİMİ diyelim."*

🟢 YÖNTEM MOTORLA BİREBİR UYUMLU: Voronoi hücre sınırı iki komşu
   noktanın **DİK ORTAY'ından** geçer. Sınırın iki yakasına eşlenik
   nokta koymak, petek kenarını oraya oturtmanın DOĞRUDAN yoludur.

🔴 VE TEK KISIT ÖLÇÜLDÜ: dik ortay TAM ORTADAN geçer ⇒
       EN KÖTÜ SAPMA = ÇİFT MESAFESİNİN YARISI
   Bugün ortanca çift 149,5 km ⇒ sınır 74,8 km kayabiliyor.
   Hedef 10 km çift ⇒ 5 km sapma.

Bu betik "hangi sınır ne kadar kötü" sorusunu sayıyla cevaplar; iş
listesi ondan çıkar. Sınır UZUNLUĞU ölçülmez (kara maskesi kesişimi
gerektirir, pahalı) — onun yerine TEMAS GENİŞLİĞİ (en uzak iki çift
arası) bir alt sınır olarak kullanılır ve BU AÇIKÇA YAZILIR.
"""
import argparse
import collections
import math
import os
import sys

sys.path.insert(0, os.path.join(os.getcwd(), "arac"))
if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
import girdi  # noqa: E402


def km(a, b):
    la = math.radians((a[0] + b[0]) / 2.0)
    return math.hypot((a[1] - b[1]) * 111.32 * math.cos(la),
                      (a[0] - b[0]) * 110.57)


def sahip(y, g):
    for p in (y.get("d") or []):
        if p.get("f", "") <= g < p.get("t", ""):
            return "OSMANLI"
    for p in (y.get("v") or []):
        if p.get("f", "") <= g < p.get("t", ""):
            return "tabi"
    for p in (y.get("s") or []):
        if p.get("f", "") <= g < p.get("t", ""):
            return p.get("d")
    return None


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--gun", default="1923-06-15")
    ap.add_argument("--hedef", type=float, default=10.0,
                    help="istenen çift mesafesi (km) — sapma bunun YARISI")
    ap.add_argument("--menzil", type=float, default=250.0)
    a = ap.parse_args()

    Y = girdi.yukle() if hasattr(girdi, "yukle") else girdi.oku()
    if isinstance(Y, tuple):
        Y = Y[0]
    N = [(y, sahip(y, a.gun)) for y in Y if y.get("lat") is not None]
    N = [(y, s) for y, s in N if s]

    ciftler = collections.defaultdict(list)
    for i in range(len(N)):
        yi, si = N[i]
        for j in range(i + 1, len(N)):
            yj, sj = N[j]
            if si == sj:
                continue
            d = km((yi["lat"], yi["lon"]), (yj["lat"], yj["lon"]))
            if d <= a.menzil:
                ciftler[tuple(sorted((si, sj)))].append(
                    (d, yi["ad"], yj["ad"], yi["lat"], yi["lon"],
                     yj["lat"], yj["lon"]))

    print("=" * 78)
    print("SINIR ENVANTERİ  ·  gün %s  ·  hedef çift %.0f km "
          "(⇒ sapma %.1f km)" % (a.gun, a.hedef, a.hedef / 2))
    print("sahipli nokta %d · komşu devlet çifti %d · toplam yakın çift %d"
          % (len(N), len(ciftler), sum(len(v) for v in ciftler.values())))
    print()
    print("%-34s %5s %8s %8s %9s" % ("sınır", "çift", "en yakın", "ortanca",
                                     "temas gen."))
    print("-" * 78)

    satir = []
    for k, v in ciftler.items():
        v.sort()
        ds = [x[0] for x in v]
        # temas genişliği: uçtaki iki çiftin orta noktaları arası
        if len(v) >= 2:
            o1 = ((v[0][3] + v[0][5]) / 2, (v[0][4] + v[0][6]) / 2)
            enu = max(v, key=lambda x: km(
                ((x[3] + x[5]) / 2, (x[4] + x[6]) / 2), o1))
            o2 = ((enu[3] + enu[5]) / 2, (enu[4] + enu[6]) / 2)
            gen = km(o1, o2)
        else:
            gen = 0.0
        satir.append((ds[0], k, len(v), ds[0], ds[len(ds) // 2], gen))

    # EN KÖTÜ ÖNCE: en yakın çifti bile uzak olanlar
    for _, k, n, eny, ort, gen in sorted(satir, reverse=True)[:34]:
        ihtiyac = max(0, int(gen / a.hedef) - n) if gen > 0 else 0
        im = "🔴" if eny > 100 else ("🟡" if eny > 30 else "🟢")
        print("%s %-32s %5d %7.1f %8.1f %8.1f  ~%d çift gerek"
              % (im, ("%s ↔ %s" % k)[:32], n, eny, ort, gen, ihtiyac))

    print()
    print("🟢 = en yakın çift ≤30 km (sınır oturmuş)  ·  🟡 30-100 km  ·  "
          "🔴 >100 km (sınır TAHMİNLE çiziliyor)")
    print()
    # ── ÖZET: kaç sınır oturmuş, kaçı tahminle çiziliyor
    iyi = sum(1 for _, _, _, e, _, _ in satir if e <= 30)
    orta = sum(1 for _, _, _, e, _, _ in satir if 30 < e <= 100)
    kotu = sum(1 for _, _, _, e, _, _ in satir if e > 100)
    print("ÖZET  🟢 %d oturmuş  ·  🟡 %d orta  ·  🔴 %d tahminle"
          % (iyi, orta, kotu))
    print()
    print("🔴🔴 VE BU ÖLÇÜMÜN KENDİ KUSURU — LİSTEYİ OKURKEN BİL:")
    print("   Ölçüt *'250 km içinde, farklı sahipli iki nokta'*. Bu")
    print("   KOMŞULUK DEĞİL, YAKINLIK ölçer. Listede `OSMANLI ↔ romanya`")
    print("   görünüyor ama 1923'te Türkiye Romanya'yla sınır komşusu")
    print("   DEĞİL — 237 km'lik o 'çift' Bulgaristan'ın ÜSTÜNDEN atlıyor.")
    print("   ⇒ Yalnız TEK ve UZAK çifti olan satırlar çoğunlukla GERÇEK")
    print("     SINIR DEĞİLDİR; onları iş listesine alma.")
    print("   ⇒ Gerçek iş: 🟢/🟡 satırlar (yani bir yerinde YAKIN çifti")
    print("     olan, demek ki GERÇEKTEN komşu olan sınırlar) ve o")
    print("     sınırların BOŞ KALAN kesimleri.")
    print("   📌 Doğru komşuluk ölçütü Voronoi ORTAK KENARI'dır ve o")
    print("     yalnız koşudan sonra bilinir. Bu betik ondan önce")
    print("     çalışabilsin diye yakınlığı vekil olarak kullanıyor —")
    print("     vekil olduğu BURADA YAZILI, sessiz geçilmedi.")
    print()
    print("⚠️ 'temas genişliği' sınır UZUNLUĞU DEĞİLDİR — uçtaki iki çiftin")
    print("   orta noktaları arası mesafedir ve gerçek sınırın ALT SINIRI'dır.")
    print("   Gerçek uzunluk kara maskesi kesişimi ister; ölçülmedi.")
    print("   ⇒ 'gerek' sütunu da bir ALT SINIR: gerçek ihtiyaç daha fazla.")


if __name__ == "__main__":
    main()
