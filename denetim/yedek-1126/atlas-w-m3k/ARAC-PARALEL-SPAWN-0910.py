# -*- coding: utf-8 -*-
"""ARAC-PARALEL-SPAWN-0910 — Windows `spawn` ve BELLEK maliyeti.
ŞARTNAME ADIM 2: "bellek maliyeti ve spawn maliyeti TAHMİNLE DEĞİL
KÜÇÜK BİR DENEYLE ölçülsün."

NE ÖLÇER
  (1) gerçek geometri yükünün pickle boyutu ve süresi
  (2) STRtree PICKLE EDİLEBİLİYOR MU  (motor `_TUM_AGAC` / `_KB_AGAC` kullanıyor)
  (3) N işçi doğurmanın (spawn) + yükü aktarmanın DUVAR SAATİ
  (4) işçi başına RSS (bellek) — psutil ile, tahminle değil

YÜK NEREDEN: motorun KENDİ çıktısı `veri-kaynak/motor_kara.geojson`
(= unary_union(PETEK_D)) + girdi maskesi `ne_10m_land.geojson`.
🔴 BU BİR VEKİLDİR, PETEK_D'NİN KENDİSİ DEĞİL — ve yönü BİLİNİYOR:
   PETEK_D 3805 AYRI hücredir, ortak kenarlar iki kez yazılır ⇒
   gerçek yük bu vekilden BÜYÜKTÜR. Ölçülen sayı bir ALT SINIRDIR
   ve raporda öyle yazılır.

arac/** ve data/** OKUNMAZ BİLE — yalnız veri-kaynak/.
"""
import os, sys, io, time, json, pickle, statistics
import multiprocessing as mp

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
KAYNAK = os.path.join(KOK, "veri-kaynak")

YUK = None          # işçilerde initializer ile dolar


def _isci_kur(pyuk):
    """Pool initializer — işçi yükü ÇÖZER (unpickle maliyeti burada)."""
    global YUK
    t0 = time.time()
    YUK = pickle.loads(pyuk)
    import psutil
    p = psutil.Process()
    return (os.getpid(), time.time() - t0, p.memory_info().rss)


_KUR_SONUC = []


def _init(pyuk):
    global YUK, _T_KUR, _RSS_KUR
    t0 = time.time()
    YUK = pickle.loads(pyuk)
    _T_KUR = time.time() - t0
    import psutil
    _RSS_KUR = psutil.Process().memory_info().rss


def _isci_rapor(_):
    import psutil
    n = 0
    for g in YUK["petek"][:200]:
        n += len(g.exterior.coords) if hasattr(g, "exterior") else 0
    return {"pid": os.getpid(), "cozme_sn": round(_T_KUR, 3),
            "rss_mb": round(_RSS_KUR / 1e6, 1), "kose": n}


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


def main():
    from shapely import STRtree
    from shapely.geometry import Point
    rapor = {"cpu_count": mp.cpu_count(),
             "start_methods": mp.get_all_start_methods()}

    print("YUK KURULUYOR (veri-kaynak/) ...")
    t0 = time.time()
    petek = geometri_yukle(os.path.join(KAYNAK, "motor_kara.geojson"))
    kara = geometri_yukle(os.path.join(KAYNAK, "ne_10m_land.geojson"))
    rapor["yukleme_sn"] = round(time.time() - t0, 1)
    rapor["petek_parca"] = len(petek)
    rapor["kara_parca"] = len(kara)
    rapor["petek_kose"] = sum(len(g.exterior.coords) for g in petek
                              if hasattr(g, "exterior"))
    print("  petek vekili %d parca / %d kose · kara %d parca · %.1f sn"
          % (len(petek), rapor["petek_kose"], len(kara), rapor["yukleme_sn"]))

    # ---- (2) STRtree pickle edilebiliyor mu? --------------------------------
    agac = STRtree([g for g in petek[:2000]])
    try:
        b = pickle.dumps(agac, protocol=pickle.HIGHEST_PROTOCOL)
        rapor["strtree_pickle"] = "EVET (%d bayt)" % len(b)
    except Exception as e:
        rapor["strtree_pickle"] = "HAYIR — %s: %s" % (type(e).__name__, str(e)[:120])
    print("  STRtree pickle:", rapor["strtree_pickle"])
    # STRtree yeniden KURMA maliyeti (pickle olmuyorsa iscide bu odenir)
    t0 = time.time()
    STRtree([g for g in petek[:2000]])
    rapor["strtree_kurma_sn_2000"] = round(time.time() - t0, 3)
    print("  STRtree yeniden kurma (2000 parca): %.3f sn"
          % rapor["strtree_kurma_sn_2000"])

    # ---- (1) pickle boyutu / suresi ----------------------------------------
    yuk = {"petek": petek, "kara": kara}
    t0 = time.time()
    pyuk = pickle.dumps(yuk, protocol=pickle.HIGHEST_PROTOCOL)
    rapor["pickle_sn"] = round(time.time() - t0, 2)
    rapor["pickle_mb"] = round(len(pyuk) / 1e6, 1)
    t0 = time.time()
    pickle.loads(pyuk)
    rapor["unpickle_sn"] = round(time.time() - t0, 2)
    print("  pickle %.1f MB · yazma %.2f sn · cozme %.2f sn"
          % (rapor["pickle_mb"], rapor["pickle_sn"], rapor["unpickle_sn"]))

    # ---- (3)+(4) spawn + RSS ------------------------------------------------
    rapor["kosular"] = []
    for N in (2, 4, 8):
        if N > mp.cpu_count():
            continue
        t0 = time.time()
        with mp.Pool(N, initializer=_init, initargs=(pyuk,)) as hav:
            t_spawn = time.time() - t0
            sonuc = hav.map(_isci_rapor, range(N))
        t_top = time.time() - t0
        k = {"isci": N,
             "spawn_sn": round(t_spawn, 2),
             "toplam_sn": round(t_top, 2),
             "isci_cozme_sn": round(statistics.mean(s["cozme_sn"] for s in sonuc), 2),
             "isci_rss_mb": round(statistics.mean(s["rss_mb"] for s in sonuc), 1),
             "toplam_rss_mb": round(sum(s["rss_mb"] for s in sonuc), 1)}
        rapor["kosular"].append(k)
        print("  N=%d  spawn+aktarim %.2f sn · isci cozme %.2f sn · "
              "isci RSS %.0f MB · TOPLAM RSS %.0f MB"
              % (N, k["spawn_sn"], k["isci_cozme_sn"], k["isci_rss_mb"],
                 k["toplam_rss_mb"]))

    import psutil
    vm = psutil.virtual_memory()
    rapor["makine_ram_gb"] = round(vm.total / 1e9, 1)
    rapor["bos_ram_gb"] = round(vm.available / 1e9, 1)
    print("  makine RAM %.1f GB · bos %.1f GB"
          % (rapor["makine_ram_gb"], rapor["bos_ram_gb"]))

    hedef = os.path.join(KOK, "denetim", "PARALEL-SPAWN-0910.json")
    io.open(hedef, "w", encoding="utf-8").write(
        json.dumps(rapor, ensure_ascii=False, indent=1))
    print("yazildi:", hedef)


if __name__ == "__main__":
    main()
