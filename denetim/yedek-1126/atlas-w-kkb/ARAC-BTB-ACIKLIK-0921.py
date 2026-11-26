# -*- coding: utf-8 -*-
"""BTB — "boş toprak bölüşümü ayarı" eşiğinin SAYISI nereden geliyor?

Kapı (`MOTOR_BOS_TOPRAK="<pay_km>,<esik_km>"`) iki tohum arasındaki açıklığı
`d1+d2` ile ölçüyor. Eşiği tahminle koymak, kapıyı kurmamakla aynı kapıya
çıkar: yanlış eşik ya hiç kesmez ya her yeri keser. Bu alet eşiği VERİDEN
okunabilir kılıyor.

⚠️ NE ÖLÇER, NE ÖLÇMEZ — karıştırılırsa hüküm yanlış kurulur:
   Burada ölçülen BÜYÜK DAİRE (kuş uçuşu) mesafesidir; motorun kapısı
   SÜRTÜNMELİ bedeli (`d1+d2`) ölçer. İkisi düz arazide birbirine yakın,
   dağda değil — Himalaya'da sürtünmeli açıklık kuş uçuşunun KATIDIR.
   ⇒ Buradan çıkan sayı bir TABANDIR: gerçek `d1+d2` ondan küçük olamaz.
   Dağ denizi için eşik buradan okunamaz, çöl ve tundra için okunabilir
   (ikisi de düz).

Koşu:  py denetim/ARAC-BTB-ACIKLIK-0921.py
"""
import math
import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__))), "arac"))
import girdi  # noqa: E402

R = 6371.0088


def buyuk_daire(y1, x1, y2, x2):
    f1, f2 = math.radians(y1), math.radians(y2)
    dl = math.radians(x2 - x1)
    df = f2 - f1
    a = math.sin(df / 2) ** 2 + math.cos(f1) * math.cos(f2) * math.sin(dl / 2) ** 2
    return 2 * R * math.asin(min(1.0, math.sqrt(a)))


def yuzdelik(dizi, p):
    s = sorted(dizi)
    if not s:
        return float("nan")
    k = (len(s) - 1) * p / 100.0
    a, b = int(math.floor(k)), int(math.ceil(k))
    return s[a] if a == b else s[a] + (s[b] - s[a]) * (k - a)


def main():
    Y = girdi.yukle(sessiz=True)
    if isinstance(Y, tuple):
        Y = Y[0]
    N = [(y.get("ad", "?"), float(y["lat"]), float(y["lon"])) for y in Y
         if y.get("lon") is not None and y.get("lat") is not None]
    print(f"yerleşim: {len(N):,} nokta · girdi dosyası: "
          f"{len(girdi.GIRDI_DOSYALARI)}")

    # ── A) her noktanın EN YAKIN BAŞKA noktaya mesafesi ──────────────────
    # ⚠️ Kaba kuvvet O(n²) — 3921 nokta için ~7,7 milyon çift, saniyeler
    #    sürer. Izgara/ağaç kurmak hızlandırırdı ve kenar vakalarında
    #    (kutup, ±180 boylam) sessizce yanlış cevap verirdi. Burada hız
    #    değil DOĞRULUK isteniyor.
    enyakin = []
    for i, (ad, y1, x1) in enumerate(N):
        d = min(((buyuk_daire(y1, x1, y2, x2), ad2)
                 for j, (ad2, y2, x2) in enumerate(N) if j != i),
                key=lambda t: t[0])
        enyakin.append((d[0], ad, y1, x1, d[1]))
    sade = [e[0] for e in enyakin]
    print("\nA) EN YAKIN KOMŞU MESAFESİ (büyük daire, km)")
    for p in (50, 75, 90, 95, 99):
        print(f"   %{p:<3}: {yuzdelik(sade, p):8.1f}")
    print(f"   en büyük: {max(sade):8.1f} · ortalama: {sum(sade)/len(sade):8.1f}")

    # ── B) 300 km'yi aşan vakalar ────────────────────────────────────────
    ayk = sorted((e for e in enyakin if e[0] > 300.0), reverse=True)
    print(f"\nB) EN YAKIN KOMŞUSU 300 km'den UZAK: {len(ayk)} yerleşim "
          f"(%{100.0*len(ayk)/len(N):.2f})")
    for d, ad, y, x, ad2 in ayk[:30]:
        print(f"   {d:7.1f} km  {ad:<28} ({x:7.2f},{y:6.2f})  → {ad2}")
    if len(ayk) > 30:
        print(f"   … ve {len(ayk)-30} tane daha")

    # ── C) Emre'nin üç somut "denizi" ────────────────────────────────────
    # Ham koordinat mesafesi değil, VERİDEKİ noktalara göre GERÇEK açıklık:
    # iki ucun arasındaki koridorda yerleşim varsa deniz o kadar geniş değildir.
    print("\nC) ÜÇ DENİZİN GERÇEK AÇIKLIĞI (aradaki noktalar hesaba katılarak)")
    for ad, (ya, xa), (yb, xb) in (
            ("kum · Trablus → Kano", (32.9, 13.2), (12.0, 8.5)),
            ("orman · Yakutsk → Buz Denizi", (62.0, 129.7), (72.5, 130.0)),
            ("dağ · Lhasa → Katmandu", (29.6, 91.1), (27.7, 85.3))):
        tam = buyuk_daire(ya, xa, yb, xb)
        # iki ucu birleştiren doğru üzerinde 200 adım; her adıma en yakın
        # yerleşim ne kadar uzakta? En büyük değer = koridorun en boş yeri.
        bosluk, nere = 0.0, None
        for k in range(201):
            t = k / 200.0
            yy, xx = ya + (yb - ya) * t, xa + (xb - xa) * t
            d = min(buyuk_daire(yy, xx, y2, x2) for _, y2, x2 in N)
            if d > bosluk:
                bosluk, nere = d, (xx, yy)
        print(f"   {ad:<30} uçtan uca {tam:6.1f} km · koridorun en boş "
              f"noktası her yerleşimden {bosluk:6.1f} km uzak "
              f"({nere[0]:.2f},{nere[1]:.2f})")
        print(f"   {'':<30} ⇒ o noktadan geçen açıklık (d1+d2) EN AZ "
              f"{2*bosluk:6.1f} km")
    return 0


if __name__ == "__main__":
    sys.exit(main())
