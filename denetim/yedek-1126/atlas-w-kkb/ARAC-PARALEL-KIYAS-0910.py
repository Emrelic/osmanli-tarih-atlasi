# -*- coding: utf-8 -*-
"""ARAC-PARALEL-KIYAS-0910 — AYNI İŞ, ÜÇ YOL: tek / iş parçacığı / süreç.

`ARAC-PARALEL-GIL-0910` iş parçacığını ölçtü (8'de 1,65x). Bu alet AYNI
İŞİ süreçle ölçer ki karşılaştırma ADİL olsun — iki ayrı aletin iki ayrı
iş tanımıyla ölçtüğü sayılar KIYASLANAMAZ (D188: "sayıyı biliyorum ≠
sayının neye göre olduğunu biliyorum").

Ayrıca ÇEKİRDEK ölçülür: `cpu_count` MANTIKSAL çekirdektir. 8 mantıksal
= 4 fiziksel ise iş parçacığı tavanı zaten 4'tür ve 1,65x'i "GIL kötü"
diye okumak YANLIŞ TEŞHİS olur.

🔴 VE SÜREÇ ÖLÇÜMÜ YÜK AKTARIMINI İÇERİR — dışarıda bırakmak süreci
   haksız yere kazandırır. Ölçülen şey DUVAR SAATİDİR, çekirdek değil.
"""
import os, io, json, time, sys, pickle
import multiprocessing as mp
from concurrent.futures import ThreadPoolExecutor

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
KAYNAK = os.path.join(KOK, "veri-kaynak")
KUME = None


def geometri_yukle(yol):
    import shapely.geometry as sg
    d = json.load(io.open(yol, encoding="utf-8"))
    out = []
    for f in d["features"]:
        g = sg.shape(f["geometry"])
        if g.geom_type == "MultiPolygon":
            out.extend(list(g.geoms))
        else:
            out.append(g)
    return out


def _is(k):
    """Motorun gercekte yaptigi is: birlestir · onar · temsili nokta."""
    from shapely.ops import unary_union
    g = unary_union(k)
    g = g.buffer(0)
    rp = g.representative_point()
    return (round(g.area, 9), round(rp.x, 9), round(rp.y, 9))


def _init(pyuk):
    global KUME
    KUME = pickle.loads(pyuk)


def _is_ix(i):
    return _is(KUME[i])


def _isin(_):
    """Havuzun GERCEKTEN ayaga kalktigini dogrular — Pool() cagrisi
    isciler hazir olmadan doner, kurulum maliyeti aksi hâlde map'e karisir."""
    return os.getpid()


def main():
    rapor = {}
    try:
        import psutil
        rapor["fiziksel_cekirdek"] = psutil.cpu_count(logical=False)
        rapor["mantiksal_cekirdek"] = psutil.cpu_count(logical=True)
        rapor["yuk_yuzde_baslangic"] = psutil.cpu_percent(interval=1.0)
    except Exception as e:
        rapor["cekirdek_hata"] = str(e)
    print("cekirdek: fiziksel %s · mantiksal %s · anlik yuk %%%s"
          % (rapor.get("fiziksel_cekirdek"), rapor.get("mantiksal_cekirdek"),
             rapor.get("yuk_yuzde_baslangic")))

    petek = geometri_yukle(os.path.join(KAYNAK, "motor_kara.geojson"))
    # 🔴 İŞ SAYISI 24'TEN 96'YA ÇIKARILDI — ve sebebi ölçülmüş bir KUSUR:
    #    ilk turda 24 işle süreç yolu n=2'de 1,44x, n=8'de 1,26x verdi,
    #    yani İŞÇİ ARTTIKÇA KÖTÜLEŞTİ. Bu bir donanım hükmü DEĞİL bir
    #    düzenek artefaktıdır: 24 iş / 8 işçi = işçi başına 3 kaba parça,
    #    ve `Pool.map` varsayılan yığınlamasıyla YÜK DENGESİZ dağılıyor.
    #    Havuz kurulumu da haritalama süresine karışıyordu.
    #    ⇒ (a) iş sayısı 96 (işçi başına 12) (b) kurulum AYRI ölçülüyor.
    #    D081: "bir ölçüt, karşılaştırılan iki seçeneği ayırt etmiyorsa,
    #    cevabı 'evet' olsa bile soru yanlış sorulmuştur."
    N_IS = 96
    ADIM = max(1, len(petek) // N_IS)
    kume = [petek[i * ADIM:(i + 1) * ADIM] for i in range(N_IS)]
    kume = [k for k in kume if k]
    rapor["is_sayisi"] = len(kume)
    print("  %d parca -> %d is" % (len(petek), len(kume)))

    _is(kume[0])                                   # isinma
    t0 = time.perf_counter()
    temel_sonuc = [_is(k) for k in kume]
    t_tek = time.perf_counter() - t0
    rapor["tek_sn"] = round(t_tek, 2)
    print("  TEK: %.2f sn" % t_tek)

    rapor["is_parcacigi"] = {}
    for n in (2, 4, 8):
        t0 = time.perf_counter()
        with ThreadPoolExecutor(max_workers=n) as ex:
            o = list(ex.map(_is, kume))
        t = time.perf_counter() - t0
        rapor["is_parcacigi"][str(n)] = {
            "sn": round(t, 2), "hizlanma": round(t_tek / t, 2),
            "sonuc_ayni": o == temel_sonuc}
        print("  IS PARCACIGI n=%d  %.2f sn  %.2fx  sonuc_ayni=%s"
              % (n, t, t_tek / t, o == temel_sonuc))

    pyuk = pickle.dumps(kume, protocol=pickle.HIGHEST_PROTOCOL)
    rapor["yuk_mb"] = round(len(pyuk) / 1e6, 1)
    rapor["surec"] = {}
    for n in (2, 4, 8):
        t0 = time.perf_counter()
        hav = mp.Pool(n, initializer=_init, initargs=(pyuk,))
        try:
            hav.map(_isin, range(n))           # havuzu GERCEKTEN ayaga kaldir
            t_kur = time.perf_counter() - t0
            t1 = time.perf_counter()
            o = hav.map(_is_ix, range(len(kume)), chunksize=1)
            t_map = time.perf_counter() - t1
        finally:
            hav.close(); hav.join()
        t = t_kur + t_map
        rapor["surec"][str(n)] = {
            "kurulum_sn": round(t_kur, 2), "map_sn": round(t_map, 2),
            "sn": round(t, 2), "hizlanma": round(t_tek / t, 2),
            "hizlanma_kurulumsuz": round(t_tek / t_map, 2),
            "sonuc_ayni": o == temel_sonuc}
        print("  SUREC        n=%d  kurulum %.2f + map %.2f = %.2f sn  "
              "%.2fx (kurulumsuz %.2fx)  sonuc_ayni=%s"
              % (n, t_kur, t_map, t, t_tek / t, t_tek / t_map,
                 o == temel_sonuc))

    hedef = os.path.join(KOK, "denetim", "PARALEL-KIYAS-0910.json")
    io.open(hedef, "w", encoding="utf-8").write(
        json.dumps(rapor, ensure_ascii=False, indent=1))
    print("yazildi:", hedef)
    print("")
    print("NOT: 'sonuc_ayni' burada 9 haneye yuvarlanmis alan/nokta kiyasidir —")
    print("     BIT DENKLIGI DEGILDIR. Bit denkligi ADIM 3'un isi.")


if __name__ == "__main__":
    main()
