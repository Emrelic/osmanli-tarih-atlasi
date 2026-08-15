# -*- coding: utf-8 -*-
"""bosluk_haritasi.py — NEREDE NOKTA EKSİK? Sınırsız işi SONLU kuyruğa çevirir.

🔴 NİÇİN — Emre, 15 Ağustos 2026:
    "Benim aklımdaki önce TÜM YERLEŞİMLERİ eklemek… korkma, varsın Kars'ın
     noktası Çin'i boyasın. Ama en azından **nerelerde nokta ihtiyacımız
     olduğu direkt görünür.**"

*"Tüm yerleşimleri ekle"* tek oturumluk bir iş değil — 2527 nokta var,
hedef ~4000, ve her nokta koordinat **ve sahiplik dönemi** ister. Sınırsız
bir iş kimse tarafından bitirilemez. Bu betik onu **sonlu ve sıralı** bir
kuyruğa çevirir: hangi karede kaç nokta var, hangi karede HİÇ yok.

    py arac/bosluk_haritasi.py                 kara ızgarası · halka sırasıyla
    py arac/bosluk_haritasi.py --kare 5        ızgara adımı (derece)
    py arac/bosluk_haritasi.py --halka 1       yalnız o halka

────────────────────────────────────────────────────────────────────────
YÖNTEM

Dünya `--kare` derecelik karelere bölünür. Her kare için:
    · KARA mı  — DEM'den (deniz karesi sayılmaz, boşluk değildir)
    · kaç nokta var
    · en yakın noktaya uzaklık (karenin merkezinden)
    · hangi halkaya düşüyor (`ONCELIK.md §4`, KİLİTLİ)

🔴 ÖLÇÜT: bir karenin BOŞ sayılması için **kara olması** ve **hiç nokta
içermemesi** gerekir. Deniz karesi boşluk değildir; Antarktika da değildir.

⚠️ VE "BOŞ KARE" HER ZAMAN KUSUR DEĞİLDİR. Üç ayrı sebep olabilir ve
bu betik onları AYIRMAZ — yalnız KONUMU söyler:
    ① gerçekten yerleşim yoktu     (Rub'ul Hâlî · Sahra iç · Grönland)
    ② yerleşim vardı, YAZILMADI    ← ARADIĞIMIZ BU
    ③ kasıtlı boş bırakıldı        (`kasitli_bosluk` noktası VAR demektir,
                                    yani o kare "boş" görünmez)
📌 ①'i ②'den ayırmak ARAŞTIRMADIR, ölçüm değil. Bu betiğin işi
araştırmacıya **nereye bakacağını** söylemek.
"""
import math
import os
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))

# ONCELIK.md §4 — KİLİTLİ. Kutular kaba; ölçüt değil TARAMA aracı.
HALKA = [
    (1, "Osmanlı küresi", (-18, 8, 60, 52)),
    (2, "birinci komşular", (-20, 3, 80, 72)),
    (3, "komşuların komşuları", (-25, -15, 100, 75)),
    (4, "dünyanın geri kalanı", (-180, -60, 180, 84)),
]


def _halka(lon, lat):
    for h, ad, k in HALKA:
        if k[0] <= lon <= k[2] and k[1] <= lat <= k[3]:
            return h, ad
    return 4, "dünyanın geri kalanı"


def main(argv):
    import numpy as np
    import rasterio
    from rasterio.windows import from_bounds
    import girdi
    import yukseklik as yk

    kare = 5.0
    if "--kare" in argv:
        kare = float(argv[argv.index("--kare") + 1])
    yalniz = None
    if "--halka" in argv:
        yalniz = int(argv[argv.index("--halka") + 1])

    dem = None
    for a in ("etopo2022_30s_dunya.tif", "etopo2022_30s_atlas.tif"):
        y = os.path.join(KOK, "veri-kaynak", "yukseklik", a)
        if os.path.exists(y) and yk.tam_mi(y)[0]:
            dem = y
            break
    if not dem:
        print("🔴 DEM YOK — py arac/yukseklik_indir.py --dunya")
        return 2

    Y = [y for y in girdi.yukle(sessiz=True) if y.get("lon") is not None]
    print("=" * 88)
    print("BOŞLUK HARİTASI — nerede nokta eksik · kare %.0f°" % kare)
    print("=" * 88)
    print("DEM: %s · nokta: %d\n" % (os.path.basename(dem), len(Y)))

    # noktaları kareye dağıt
    kova = {}
    for y in Y:
        a = (int(math.floor(y["lon"] / kare)), int(math.floor(y["lat"] / kare)))
        kova[a] = kova.get(a, 0) + 1

    sonuc = []
    with rasterio.open(dem) as s:
        b = s.bounds
        i0, i1 = int(math.floor(b.left / kare)), int(math.ceil(b.right / kare))
        j0, j1 = int(math.floor(b.bottom / kare)), int(math.ceil(b.top / kare))
        for j in range(j0, j1):
            lat0, lat1 = j * kare, (j + 1) * kare
            if lat1 <= b.bottom or lat0 >= b.top:
                continue
            for i in range(i0, i1):
                lon0, lon1 = i * kare, (i + 1) * kare
                if lon1 <= b.left or lon0 >= b.right:
                    continue
                try:
                    p = from_bounds(max(lon0, b.left), max(lat0, b.bottom),
                                    min(lon1, b.right), min(lat1, b.top),
                                    transform=s.transform)
                    z = s.read(1, window=p, out_shape=(24, 24),
                               resampling=rasterio.enums.Resampling.average)
                except Exception:
                    continue
                kara = float((z > 0).mean())
                if kara < 0.15:          # deniz karesi — boşluk DEĞİL
                    continue
                n = kova.get((i, j), 0)
                h, had = _halka((lon0 + lon1) / 2, (lat0 + lat1) / 2)
                if yalniz and h != yalniz:
                    continue
                sonuc.append(dict(lon=lon0, lat=lat0, kara=kara, n=n,
                                  halka=h, had=had,
                                  yuk=float(np.median(z[z > 0])) if (z > 0).any() else 0))

    top = len(sonuc)
    bos = [r for r in sonuc if r["n"] == 0]
    seyrek = [r for r in sonuc if 0 < r["n"] <= 2]
    print("KARA KARESİ: %d  ·  BOŞ (hiç nokta yok): %d (%%%.0f)  ·  SEYREK (1-2): %d"
          % (top, len(bos), 100.0 * len(bos) / max(1, top), len(seyrek)))

    print("\n%-6s %-24s %6s %6s %7s %8s" %
          ("HALKA", "bölge", "kare", "BOŞ", "seyrek", "nokta"))
    print("-" * 88)
    for h, had, _k in HALKA:
        g = [r for r in sonuc if r["halka"] == h]
        if not g:
            continue
        print("%-6d %-24s %6d %6d %7d %8d"
              % (h, had, len(g), len([r for r in g if r["n"] == 0]),
                 len([r for r in g if 0 < r["n"] <= 2]),
                 sum(r["n"] for r in g)))

    print("\n" + "=" * 88)
    print("🔴 ÖNCELİKLİ BOŞLUKLAR — halka sırasıyla, kara oranı yüksek olan önce")
    print("=" * 88)
    print("(kare = sol-alt köşe · kara% = karenin kara oranı · yük = medyan m)")
    for h, had, _k in HALKA:
        g = sorted([r for r in bos if r["halka"] == h],
                   key=lambda r: -r["kara"])
        if not g:
            continue
        print("\n── HALKA %d · %s — %d boş kare" % (h, had, len(g)))
        for r in g[:12]:
            print("   %7.1f°D %6.1f°K   kara %%%3.0f   yük %5.0f m"
                  % (r["lon"], r["lat"], 100 * r["kara"], r["yuk"]))
        if len(g) > 12:
            print("   … %d kare daha" % (len(g) - 12))

    print("\n" + "=" * 88)
    print("⚠️ BOŞ KARE HER ZAMAN KUSUR DEĞİLDİR — üç sebep var ve bu betik")
    print("   onları AYIRMAZ:  ① gerçekten yerleşim yoktu  ② yazılmadı")
    print("   ③ kasıtlı boş (o kare zaten 'boş' görünmez, noktası VAR)")
    print("   ①'i ②'den ayırmak ARAŞTIRMADIR. Bu liste nereye BAKILACAĞINI")
    print("   söyler, ne yazılacağını değil.")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
