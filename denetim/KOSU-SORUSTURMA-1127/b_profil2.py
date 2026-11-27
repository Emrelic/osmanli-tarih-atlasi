# -*- coding: utf-8 -*-
"""Ⓑ TEK KESİT profili — 2. ölçüm: işlev başına süre + TAKLİT ızgara + "tek gövde değişince kaç devlet
yeniden hesaplanır" deneyi. SALT OKUMA (Koşu 40 devletler_harita.js); motor KOŞMAZ.

Farklar (1. ölçüme göre):
  * önbellek AÇIK ama ÖZEL dizinde (scratchpad) — Koşu 40 önbelleğine DOKUNMAZ.
  * izgara kancası TAKLİT: gerçek `_YR_SAHIP` diskte yok; 0,05° dünya ızgarası (7200×2900 int32) gövdeler
    rasterize edilerek kurulur (hücre sahibi = o hücreyi örten gövde; yoksa −1). Amaç sürtünmeli
    paylaşımın MALİYET yapısını ölçmek (pencere boyu, EDT, shapes); bölüşüm sonucu gerçekle AYNI DEĞİL.
  * duvar/engel kancası yok.
Sonra: (a) küçük bir devletin, (b) bir dünya imparatorluğunun gövdesi 100 m oynatılır ve kesit yeniden
koşulur; `dolgu2_devlet` ıska sayısı = yeniden hesaplanan devlet.
Kullanım: py b_profil2.py <devletler_harita.js> <arac> <tarih> <ozel onbellek dizini> <kucuk kim> <buyuk kim>
"""
import os, sys, time, gc, ctypes, threading, collections
sys.stdout.reconfigure(encoding="utf-8", errors="replace", line_buffering=True)
k32 = ctypes.windll.kernel32
k32.SetPriorityClass(k32.GetCurrentProcess(), 0x40)


class _MS(ctypes.Structure):
    _fields_ = [("dwLength", ctypes.c_ulong), ("dwMemoryLoad", ctypes.c_ulong),
                ("ullTotalPhys", ctypes.c_ulonglong), ("ullAvailPhys", ctypes.c_ulonglong),
                ("ullTotalPageFile", ctypes.c_ulonglong), ("ullAvailPageFile", ctypes.c_ulonglong),
                ("ullTotalVirtual", ctypes.c_ulonglong), ("ullAvailVirtual", ctypes.c_ulonglong),
                ("ullAvailExtendedVirtual", ctypes.c_ulonglong)]


def bos_gb():
    m = _MS()
    m.dwLength = ctypes.sizeof(_MS)
    k32.GlobalMemoryStatusEx(ctypes.byref(m))
    return m.ullAvailPhys / 2**30


def _nobet():
    while True:
        time.sleep(10)
        if bos_gb() < 3.0:
            print("!! BELLEK NÖBETÇİSİ: boş RAM %.1f GB < 3 — çıkılıyor" % bos_gb())
            os._exit(9)


threading.Thread(target=_nobet, daemon=True).start()
yol, arac, tarih, onb, kucuk, buyuk = sys.argv[1:7]
os.makedirs(onb, exist_ok=True)
os.environ.pop("MOTOR_ONBELLEK_KAPALI", None)
os.environ.pop("MOTOR_DOLGU_IZ", None)
os.environ["MOTOR_DOLGU_UFUK_GUN"] = "10"
os.environ["MOTOR_ONBELLEK_DIZIN"] = onb
sys.path.insert(0, arac)
import psutil
import numpy as np
import shapely
from shapely.affinity import translate
import dolgu
P = psutil.Process()
rss = lambda: P.memory_info().rss / 2**30

# ── işlev başına süre (kapsayıcı) ──────────────────────────────────────────
SURE = collections.defaultdict(lambda: [0, 0.0])
PAYLAS = []          # (sn, pencere hücre sayısı, köşe)
DEVLET = []          # (sn, kim, komşu gövde, komşu talep, ham köşe)


def sar(ad):
    f = getattr(dolgu, ad)

    def g(*a, **k):
        t = time.time()
        try:
            return f(*a, **k)
        finally:
            s = SURE[ad]
            s[0] += 1
            s[1] += time.time() - t
    setattr(dolgu, ad, g)
    return f


for _ad in ("_talep", "_deniz_kapanisi", "_cins", "_koridor_kirp", "_delik_talebi", "_paylas_surtunme"):
    sar(_ad)
_paylas0 = dolgu._paylas


def _paylas(alan, adaylar):
    t = time.time()
    try:
        return _paylas0(alan, adaylar)
    finally:
        b = alan.bounds
        PAYLAS.append((time.time() - t, int((b[2] - b[0]) / 0.05 + 3) * int((b[3] - b[1]) / 0.05 + 3),
                       shapely.get_num_coordinates(alan)))
        s = SURE["_paylas"]
        s[0] += 1
        s[1] += time.time() - t


dolgu._paylas = _paylas
_dh0 = dolgu._devlet_hesap


def _devlet_hesap(i, kim, g, ham, govdeler, kb, kt, g_liste, rapor):
    t = time.time()
    try:
        return _dh0(i, kim, g, ham, govdeler, kb, kt, g_liste, rapor)
    finally:
        DEVLET.append((time.time() - t, kim, len(kb), len(kt), shapely.get_num_coordinates(ham[i])))


dolgu._devlet_hesap = _devlet_hesap

t0 = time.time()
print("başladı · boş RAM %.1f GB · r_km %.1f · tarih %s" % (bos_gb(), dolgu.YARICAP_KM, tarih))
y = dolgu._js_oku(yol, ["DEVLET_HARITA", "DEVLET_PARCALAR", "DEVLET_PARCA_HALKA"])
a = dolgu._gk(tarih)
govdeler, ai = [], 0
for dev in y["DEVLET_HARITA"]:
    for p in dev.get("dnm", []):
        if p.get("g"):
            if dolgu._gk(p["f"]) <= a < dolgu._gk(p["t"]):
                govdeler.append((dev["id"], dolgu._coz(p["g"], y["DEVLET_PARCALAR"], y["DEVLET_PARCA_HALKA"]), ai))
            ai += 1
N_AI = ai
del y
gc.collect()
print("gövde %d · %.0f sn · RSS %.1f GB" % (len(govdeler), time.time() - t0, rss()))

# ── TAKLİT ızgara ─────────────────────────────────────────────────────────
import rasterio.features as rfe
from rasterio.transform import Affine
import hashlib
t1 = time.time()
NX, NY, AD = 7200, 2900, 0.05
kuzey = rfe.rasterize([(g, i) for i, (_k, g, _a) in enumerate(govdeler)], out_shape=(NY, NX),
                      transform=Affine(AD, 0, -180.0, 0, -AD, 85.0), fill=-1, dtype="int32")
SAHIP = np.ascontiguousarray(np.flipud(kuzey))          # satır 0 GÜNEY
del kuzey


def izgara_kur(gv):
    kim = {i: k for i, (k, _g, _a) in enumerate(gv)}
    gr = {}
    for j in sorted(kim):
        gr.setdefault(kim[j], []).append(j)
    return {"sahip": SAHIP, "x0": -180.0, "y0": -60.0, "adim": AD, "kim": kim,
            "grid_oz": hashlib.sha1(SAHIP.tobytes()).hexdigest()[:16],
            "devlet_oz": {d: hashlib.sha1(repr(js).encode()).hexdigest()[:12] for d, js in gr.items()}}


print("taklit ızgara %.0f sn · etiketli hücre %%%.1f · RSS %.1f GB" % (
    time.time() - t1, 100.0 * (SAHIP >= 0).mean(), rss()))
kara = dolgu._kara_yukle()
kh = dolgu.KaraIndeks(kara)


def sayac_al():
    return {k: list(v) for k, v in dolgu._ONB.sayac.items()}


def kos(etiket, gv):
    SURE.clear()
    del PAYLAS[:]
    del DEVLET[:]
    once = sayac_al()
    t = time.time()
    parcalar, rapor = dolgu.kesit_dolgu(gv, kara, kh, r_km=dolgu.YARICAP_KM, izgara=izgara_kur(gv))
    dt = time.time() - t
    son = sayac_al()
    print("\n=== %s === %.0f sn · parça %d · RSS %.1f GB · tepe %.1f GB" % (
        etiket, dt, len(parcalar), rss(), P.memory_info().peak_wset / 2**30))
    for kat in ("dolgu2_kesit", "dolgu2_talep", "dolgu2_devlet"):
        o, s = once.get(kat, [0] * 5), son.get(kat, [0] * 5)
        print("   önbellek %-14s isabet %4d · ıska %4d · yazılan %4d · okuma %.1f sn · yazma %.1f sn" % (
            kat, s[0] - o[0], s[1] - o[1], s[2] - o[2], s[3] - o[3], s[4] - o[4]))
    print("   rapor: kapanış %.0f sn · çekişme %.0f sn · cins %.0f sn" % (
        rapor["sn_kapanis"], rapor["sn_cekisme"], rapor["sn_cins"]))
    for ad, (n, s) in sorted(SURE.items(), key=lambda kv: -kv[1][1]):
        print("   işlev %-18s %6d çağrı %8.1f sn" % (ad, n, s))
    if DEVLET:
        d = sorted(DEVLET, reverse=True)
        top = sum(x[0] for x in d)
        print("   _devlet_hesap: %d çağrı · toplam %.0f sn · en pahalı 10'u toplamın %%%.0f'i" % (
            len(d), top, 100.0 * sum(x[0] for x in d[:10]) / max(top, 1e-9)))
        for sn, kim, nkb, nkt, nv in d[:15]:
            print("      %7.1f sn  %-26s komşu gövde %3d · komşu talep %3d · ham köşe %d" % (sn, kim, nkb, nkt, nv))
        kbs = sorted(x[2] for x in d)
        print("      komşu gövde sayısı: medyan %d · p90 %d · en çok %d (kesitte %d gövde)" % (
            kbs[len(kbs) // 2], kbs[9 * len(kbs) // 10], kbs[-1], len(gv)))
    if PAYLAS:
        p = sorted(PAYLAS, reverse=True)
        print("   _paylas: %d çağrı · toplam %.0f sn · pencere hücre medyan %d · en büyük %d · >1M hücre %d çağrı" % (
            len(p), sum(x[0] for x in p), sorted(x[1] for x in p)[len(p) // 2], max(x[1] for x in p),
            sum(1 for x in p if x[1] > 1000000)))
        for sn, hc, nv in p[:8]:
            print("      %7.1f sn  pencere %9d hücre · alan köşe %d" % (sn, hc, nv))
    print("   YUTMA:", dict(dolgu.YUTMA))
    return dt


kos("1) SOĞUK — hepsi hesaplanır", govdeler)
kos("2) AYNI kesit yeniden (kesit önbelleği isabet etmeli)", govdeler)


def oynat(gv, kim_hedef, sira):
    out, yapildi = [], False
    for k, g, ai_ in gv:
        if k == kim_hedef and not yapildi:
            out.append((k, translate(g, xoff=0.001), N_AI + sira))     # ~100 m; yeni aralık indeksi
            yapildi = True
        else:
            out.append((k, g, ai_))
    if not yapildi:
        print("!! %s kesitte yok" % kim_hedef)
    return out


kos("3) KÜÇÜK devlet oynatıldı: %s" % kucuk, oynat(govdeler, kucuk, 1))
kos("4) BÜYÜK devlet oynatıldı: %s" % buyuk, oynat(govdeler, buyuk, 2))
print("\ntoplam %.0f sn" % (time.time() - t0))
