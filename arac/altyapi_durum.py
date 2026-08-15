# -*- coding: utf-8 -*-
"""altyapi_durum.py — BEŞ ALTYAPI MADDESİ · DÜNYA ÇAPINDA · BÖLGE BÖLGE.

🔴 NİÇİN — Emre, 15 Ağustos 2026: *"bu beşli altyapının 1281-1923
arasındaki tarih açısından dünya çapında yüzde kaçı bitti, ne kadarı
kaldı, nereler bitti nereler kaldı."*

    py arac/altyapi_durum.py

────────────────────────────────────────────────────────────────────────
🔴 ÖNCE ÖLÇÜT — yoksa yüzde anlamsızdır

Bugün öğrenilmiş bir ders var: *"%95 bir ölçüm değil, bir totolojidir"* —
ölçüt kuralın faydasını değil metnin üslûbunu ölçüyordu. Aynı tuzağa
düşmemek için her maddenin **"bitti" tanımı** burada AÇIK yazılı:

  ①  bitti = o bölgenin YÜKSEKLİK verisi elimizde VE motorun penceresi
             oraya AÇIK. (Veri var ama pencere kapalıysa BİTMEDİ.)
  ②  bitti = o bölgede 1281'de sahnede olan yerleşimler yazılı VE
             kademesi belli. Ölçüt iki ayaklı; biri eksikse yarım.
  ③  bitti = maliyet-mesafe o bölgede ÜRETİMDE koşuyor.
             🔴 Bugün HİÇBİR bölgede koşmuyor — prototip üretim değildir.
  ④  bitti = o bölgenin noktalarında GERÇEK `kd:` var (türetilmiş değil).
  ⑤  bitti = o bölgede kaynaklı koridor düğümü VAR.

⚠️ PAYDA SORUNU — ve dürüst cevabı:
Bir bölgede *"olması gereken"* yerleşim sayısını kimse bilmiyor.
`ALTYAPI §0` projenin kendi hedefini **~4.000 nokta / dünya** diye
yazmış. Bu betik o hedefi payda alır ve **bunu her çıktıda söyler** —
ölçülmüş bir gerçek değil, PROJENİN KENDİ TAHMİNİDİR.
📌 Yüzdeyi bir kesinlik gibi okumak, bu aletin en kolay yanlış
kullanımıdır.
"""
import io
import json
import os
import subprocess
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))

HEDEF_TOPLAM = 4000        # ALTYAPI §0 — PROJENİN TAHMİNİ, ölçüm değil

# Motorun bugünkü penceresi (uret_petek.py BOLGE)
PENCERE = [(-12.0, -11.0, 146.0, 82.0), (-25.0, 60.0, -12.0, 82.0)]

# Bölgeler: (ad, lon0, lat0, lon1, lat1, halka)
# 🔴 Halka ONCELIK.md §4'ten (KİLİTLİ), coğrafî kutular kabadır ve
# ÖLÇÜT DEĞİL TARAMA aracıdır — sınırda kalan nokta komşuya düşebilir.
BOLGELER = [
    ("Anadolu",            25, 35, 45, 42, 1),
    ("Rumeli-Balkanlar",   15, 38, 30, 48, 1),
    ("Kırım-Karadeniz K.", 28, 44, 42, 52, 1),
    ("Kafkasya",           38, 38, 50, 46, 1),
    ("Suriye-Irak",        34, 29, 48, 38, 1),
    ("Mısır-Sudan",        24, 8, 38, 32, 1),
    ("Arabistan",          34, 12, 60, 32, 1),
    ("Kuzey Afrika",       -18, 20, 25, 38, 1),
    ("İran",               44, 25, 63, 40, 2),
    ("Avusturya-Macar.",   9, 45, 23, 50, 2),
    ("Lehistan-Litvanya",  14, 49, 30, 57, 2),
    ("Rusya",              28, 50, 60, 70, 2),
    ("İtalya-Venedik",     7, 36, 19, 47, 2),
    ("Gürcistan-Habeş",    33, 3, 48, 15, 2),
    ("Orta Asya",          55, 35, 80, 50, 3),
    ("Hindistan",          65, 6, 92, 35, 3),
    ("Batı Afrika-Sahel",  -18, 4, 25, 20, 3),
    ("Doğu Afrika",        30, -12, 52, 5, 3),
    ("İberya",             -10, 36, 4, 44, 3),
    ("Batı-Kuzey Avrupa",  -11, 43, 15, 62, 3),
    ("İskandinavya-Baltık", 5, 55, 32, 71, 3),
    ("Sibirya",            60, 50, 146, 75, 4),
    ("Çin-Doğu Asya",      95, 20, 146, 50, 4),
    ("Güneydoğu Asya",     92, -11, 141, 22, 4),
    ("Güney Afrika",       10, -35, 42, -12, 4),
    ("Amerika",            -170, -56, -34, 72, 4),
    ("Okyanusya",          110, -48, 180, -5, 4),
]


def _kutuda(lon, lat, k):
    return k[0] <= lon <= k[2] and k[1] <= lat <= k[3]


def _pencerede(lon, lat):
    return any(_kutuda(lon, lat, k) for k in PENCERE)


def _sahipli(y, gun):
    for a in ("d", "v", "s"):
        for p in (y.get(a) or []):
            if (p.get("f") or "") <= gun < (p.get("t") or "9999"):
                return True
    return False


def main():
    import girdi
    Y = girdi.yukle(sessiz=True)

    # koridor düğümleri
    kyol = os.path.join(KOK, "data", "koridor.js")
    js = ("global.window={};eval(require('fs').readFileSync(%s,'utf8'));"
          "process.stdout.write(JSON.stringify(window.KORIDOR_DUGUM||[]));"
          % json.dumps(kyol))
    try:
        c = subprocess.run(["node", "-e", js], capture_output=True,
                           encoding="utf-8", timeout=60)
        DUG = [x for x in json.loads(c.stdout) if x.get("lat") is not None]
    except Exception:
        DUG = []

    dem = os.path.exists(os.path.join(KOK, "veri-kaynak", "yukseklik",
                                      "etopo2022_30s_atlas.tif"))

    sat = []
    atanan = set()
    for ad, lo0, la0, lo1, la1, halka in BOLGELER:
        k = (lo0, la0, lo1, la1)
        nokta = [y for y in Y if y.get("lon") is not None
                 and _kutuda(y["lon"], y["lat"], k)]
        for y in nokta:
            atanan.add(y["ad"])
        kad = len([y for y in nokta if y.get("k")])
        kd = len([y for y in nokta if y.get("kd")])
        s1281 = len([y for y in nokta if _sahipli(y, "1281-06-15")])
        s1900 = len([y for y in nokta if _sahipli(y, "1900-06-15")])
        dug = len([d for d in DUG if _kutuda(d["lon"], d["lat"], k)])
        # ① pencere: kutunun MERKEZİ pencerede mi
        mlon, mlat = (lo0 + lo1) / 2.0, (la0 + la1) / 2.0
        pen = _pencerede(mlon, mlat)
        sat.append(dict(ad=ad, halka=halka, n=len(nokta), kad=kad, kd=kd,
                        s1281=s1281, s1900=s1900, dug=dug, pen=pen))

    print("=" * 96)
    print("BEŞ ALTYAPI MADDESİ — DÜNYA ÇAPINDA · 1281-1923 · BÖLGE BÖLGE")
    print("=" * 96)
    print("⚠️ PAYDA: ALTYAPI §0'ın hedefi ~%d nokta/dünya. Bu PROJENİN"
          % HEDEF_TOPLAM)
    print("   KENDİ TAHMİNİ, ölçülmüş bir gerçek DEĞİL. Yüzdeyi kesinlik")
    print("   gibi okumak bu aletin en kolay yanlış kullanımıdır.\n")

    bas = ("%-21s %2s %5s %6s %6s %6s %6s %5s %4s"
           % ("BÖLGE", "H", "nokta", "kademe", "1281", "1900", "kd:", "kor", "①"))
    print(bas)
    print("-" * 96)
    for h in (1, 2, 3, 4):
        g = [s for s in sat if s["halka"] == h]
        if not g:
            continue
        for s in sorted(g, key=lambda x: -x["n"]):
            print("%-21s %2d %5d %5d%% %5d%% %5d%% %5d %5d %4s"
                  % (s["ad"][:21], s["halka"], s["n"],
                     100 * s["kad"] // s["n"] if s["n"] else 0,
                     100 * s["s1281"] // s["n"] if s["n"] else 0,
                     100 * s["s1900"] // s["n"] if s["n"] else 0,
                     s["kd"], s["dug"],
                     "🟢" if (s["pen"] and dem) else "🔴"))
        t = sum(s["n"] for s in g)
        print("%-21s %2d %5d   ← HALKA %d TOPLAM (%%%.1f hedefin)"
              % ("", h, t, h, 100.0 * t / HEDEF_TOPLAM))
        print("-" * 96)

    dis = [y for y in Y if y.get("lon") is not None and y["ad"] not in atanan]
    print("\nBÖLGE KUTULARINA DÜŞMEYEN: %d nokta (kutular kaba — bu bir"
          " KUSUR değil, tarama sınırı)" % len(dis))

    n = len(Y)
    kad = len([y for y in Y if y.get("k")])
    kd = len([y for y in Y if y.get("kd")])
    print("\n" + "=" * 96)
    print("BEŞ MADDE — DÜNYA TOPLAMI")
    print("=" * 96)
    print("① TOPOGRAFYA   veri %s · motor penceresi dünyanın %%%.0f'ini kapsıyor"
          % ("VAR (ETOPO 30\")" if dem else "YOK", _pencere_yuzde()))
    print("               🔴 motora BAĞLANMADI — eğim katmanı yok")
    print("② YERLEŞİM     %d nokta (hedef ~%d) = %%%.0f · kademe %%%.0f"
          % (n, HEDEF_TOPLAM, 100.0 * n / HEDEF_TOPLAM, 100.0 * kad / n))
    print("③ SINIRLAR     ÇİZİLİYOR %100 (Voronoi, kuş uçuşu) · DOĞRU")
    print("               yöntemle (maliyet-mesafe) %0 — prototip üretim değil")
    print("④ kd:          gerçek kayıt %d / %d = %%%.1f (okuyucu hazır)"
          % (kd, n, 100.0 * kd / n))
    print("⑤ KORİDOR      %d düğüm · yalnız Anadolu-Rumeli · dünyanın geri"
          % len(DUG))
    print("               kalanında SIFIR")
    return 0


def _pencere_yuzde():
    """Motorun penceresi dünya yüzeyinin yüzde kaçı (enlem düzeltmeli)."""
    import math
    top = 0.0
    for lo0, la0, lo1, la1 in PENCERE:
        top += (lo1 - lo0) * (math.sin(math.radians(la1))
                              - math.sin(math.radians(la0)))
    dunya = 360.0 * (math.sin(math.radians(90)) - math.sin(math.radians(-90)))
    return 100.0 * top / dunya


if __name__ == "__main__":
    sys.exit(main())
