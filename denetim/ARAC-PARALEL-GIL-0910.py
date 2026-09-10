# -*- coding: utf-8 -*-
"""ARAC-PARALEL-GIL-0910 — SHAPELY 2.1 GIL'i BIRAKIYOR MU?

NİÇİN BU SORU TASARIMI BELİRLİYOR
  Windows'ta yalnız `spawn` var (ölçüldü: get_all_start_methods() == ['spawn']).
  SÜREÇ paralelliği ⇒ (a) motorun bir MODÜLE bölünmesi ⇒ büyük ameliyat
                     (b) 7 saf önbelleğin İŞÇİ BAŞINA TEKRARLANMASI
                         (`_kusatilmis` ıskası koşu 8'de 1s 01dk 24sn)
  İŞ PARÇACIĞI paralelliği ⇒ sıfır aktarım · sıfır bellek kopyası ·
                             ÖNBELLEKLER PAYLAŞILIR · script bölünmez
  ⇒ Ama yalnız GEOS çağrıları GIL'i BIRAKIYORSA işe yarar. Aksi hâlde
    iş parçacıkları sırayla koşar ve HİÇBİR ŞEY kazanılmaz.

🔴 TAHMİN EDİLMEZ, ÖLÇÜLÜR. Ölçüt: aynı işi 1 ve N iş parçacığıyla koş,
   HIZLANMA oranına bak.
     ~1,0x  → GIL BIRAKILMIYOR   ⇒ iş parçacığı YOLU KAPALI
     >1,5x  → GIL BIRAKILIYOR    ⇒ iş parçacığı YOLU AÇIK

KONTROL DENEYİ (D132: yanlış eksen seçilirse "temiz" cevap yanıltır):
   saf Python döngüsü de ölçülür. O ~1,0x çıkmalı; çıkmazsa ölçüm
   düzeneği bozuktur, GEOS sonucu da güvenilmez.
"""
import os, io, json, time, sys
from concurrent.futures import ThreadPoolExecutor

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
KAYNAK = os.path.join(KOK, "veri-kaynak")


def geometri_yukle(yol, tavan=None):
    import shapely.geometry as sg
    d = json.load(io.open(yol, encoding="utf-8"))
    out = []
    for f in d["features"]:
        g = sg.shape(f["geometry"])
        if g.geom_type == "MultiPolygon":
            out.extend(list(g.geoms))
        else:
            out.append(g)
        if tavan and len(out) >= tavan:
            break
    return out


def olc(fn, isler, n_thread):
    """isler: cagrilabilir listesi. n_thread=1 ise duz dongu."""
    t0 = time.perf_counter()
    if n_thread == 1:
        out = [fn(i) for i in isler]
    else:
        with ThreadPoolExecutor(max_workers=n_thread) as ex:
            out = list(ex.map(fn, isler))
    return time.perf_counter() - t0, out


def main():
    from shapely.ops import unary_union
    rapor = {}
    import shapely
    rapor["shapely"] = shapely.__version__
    rapor["python"] = sys.version.split()[0]
    import multiprocessing as mp
    rapor["cpu_count"] = mp.cpu_count()

    print("yuk yukleniyor ...")
    petek = geometri_yukle(os.path.join(KAYNAK, "motor_kara.geojson"))
    print("  %d parca" % len(petek))

    # --- IS TANIMI: motorun gercekte yaptigi is -----------------------------
    # g = unary_union([...])  ·  kapat/buffer(0)  ·  intersection  ·
    # representative_point   —  hepsi GEOS
    N_IS = 24
    ADIM = max(1, len(petek) // N_IS)
    kume = [petek[i * ADIM:(i + 1) * ADIM] for i in range(N_IS)]
    kume = [k for k in kume if k]

    def is_geos(k):
        g = unary_union(k)
        g = g.buffer(0)
        rp = g.representative_point()
        return (g.area, rp.x, rp.y)

    def is_python(k):
        # KONTROL: saf Python, GIL'i BIRAKMAZ — ~1,0x cikmali
        s = 0.0
        for g in k:
            for _ in range(400):
                s += len(g.bounds)
        return s

    rapor["is_sayisi"] = len(kume)
    sonuc = {}
    for ad, fn in (("GEOS", is_geos), ("PY-KONTROL", is_python)):
        # isinma (onbellek/ilk cagri etkisini disari at)
        fn(kume[0])
        t1, o1 = olc(fn, kume, 1)
        satir = {"tek_sn": round(t1, 2), "hizlanma": {}}
        for n in (2, 4, 8):
            if n > mp.cpu_count():
                continue
            tn, on = olc(fn, kume, n)
            satir["hizlanma"][str(n)] = round(t1 / tn, 2)
            satir["sn_%d" % n] = round(tn, 2)
            if ad == "GEOS":
                # SONUC AYNI MI? (is parcaciklari sonucu bozmasin)
                satir.setdefault("sonuc_ayni", True)
                if on != o1:
                    satir["sonuc_ayni"] = False
        sonuc[ad] = satir
        print("  %-11s tek %.2f sn · hizlanma %s"
              % (ad, satir["tek_sn"], satir["hizlanma"]))
    rapor["olcum"] = sonuc

    g2 = sonuc["GEOS"]["hizlanma"]
    en = max(g2.values()) if g2 else 0
    kontrol = max(sonuc["PY-KONTROL"]["hizlanma"].values()) \
        if sonuc["PY-KONTROL"]["hizlanma"] else 0
    if kontrol > 1.35:
        rapor["hukum"] = ("OLCUM DUZENEGI SUPHELI — saf Python kontrolu de "
                          "%.2fx hizlandi; GEOS sonucu guvenilmez" % kontrol)
    elif en >= 1.5:
        rapor["hukum"] = "GIL BIRAKILIYOR — is parcacigi yolu ACIK (en %.2fx)" % en
    else:
        rapor["hukum"] = "GIL BIRAKILMIYOR — is parcacigi yolu KAPALI (en %.2fx)" % en
    print("HUKUM:", rapor["hukum"])
    print("  (kontrol deneyi en yuksek hizlanma: %.2fx — 1,0 civari olmali)"
          % kontrol)

    hedef = os.path.join(KOK, "denetim", "PARALEL-GIL-0910.json")
    io.open(hedef, "w", encoding="utf-8").write(
        json.dumps(rapor, ensure_ascii=False, indent=1))
    print("yazildi:", hedef)


if __name__ == "__main__":
    main()
