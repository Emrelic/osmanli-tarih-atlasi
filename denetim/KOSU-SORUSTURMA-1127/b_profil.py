# -*- coding: utf-8 -*-
"""TEK KESİT Ⓑ profili — SALT OKUMA ölçüm (Koşu 40'ın devletler_harita.js'i üzerinde).

Motoru KOŞTURMAZ (uret_petek import edilmez). `dolgu.kesit_dolgu`yu tek tarih için, önbellek KAPALI,
kancasız (izgara/duvar/engel = None ⇒ Voronoi paylaşım, duvarsız) çağırır ve `MOTOR_DOLGU_IZ=1` ile
devlet başına süre + komşu sayısını bastırır. Osmanlı gövdesi YOK (donemler.js yazılmadı).
Düşük öncelik (IDLE), bellek nöbetçisi: boş RAM < 3 GB ⇒ çıkış 9.
Kullanım: py -I b_profil.py <devletler_harita.js> <arac dizini> <tarih> <kara pkl dizini>
"""
import os, sys, io, time, gc, ctypes, threading
sys.stdout.reconfigure(encoding="utf-8", errors="replace", line_buffering=True)
k32 = ctypes.windll.kernel32
k32.SetPriorityClass(k32.GetCurrentProcess(), 0x40)          # IDLE_PRIORITY_CLASS


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

yol, arac, tarih, pkl = sys.argv[1], sys.argv[2], sys.argv[3], sys.argv[4]
os.environ["MOTOR_ONBELLEK_KAPALI"] = "1"
os.environ["MOTOR_DOLGU_IZ"] = "1"
os.environ["MOTOR_DOLGU_UFUK_GUN"] = "10"
os.environ["MOTOR_ONBELLEK_DIZIN"] = pkl
sys.path.insert(0, arac)
import psutil
import dolgu
import shapely
P = psutil.Process()


def rss():
    return P.memory_info().rss / 2**30


t0 = time.time()
print("başladı · boş RAM %.1f GB · r_km %.1f · tarih %s" % (bos_gb(), dolgu.YARICAP_KM, tarih))
y = dolgu._js_oku(yol, ["DEVLET_HARITA", "DEVLET_PARCALAR", "DEVLET_PARCA_HALKA"])
print("A okundu %.0f sn · RSS %.1f GB · halka %d parça %d" % (
    time.time() - t0, rss(), len(y["DEVLET_PARCALAR"]), len(y["DEVLET_PARCA_HALKA"])))
a = dolgu._gk(tarih)
govdeler, ai = [], 0
for dev in y["DEVLET_HARITA"]:
    for p in dev.get("dnm", []):
        if p.get("g"):
            if dolgu._gk(p["f"]) <= a < dolgu._gk(p["t"]):
                govdeler.append((dev["id"], dolgu._coz(p["g"], y["DEVLET_PARCALAR"], y["DEVLET_PARCA_HALKA"]), ai))
            ai += 1
del y
gc.collect()
print("gövde %d (aralık evreni %d) · çözüm %.0f sn · RSS %.1f GB" % (len(govdeler), ai, time.time() - t0, rss()))
# gövde büyüklükleri
ol = sorted(((shapely.get_num_coordinates(g), len(dolgu._parcalar(g)), k, g.bounds) for k, g, _ in govdeler), reverse=True)
print("toplam köşe %d · en büyük 12 gövde (köşe · parça · kim · kutu genişliği° × yüksekliği°):" % sum(o[0] for o in ol))
for n, pc, k, b in ol[:12]:
    print("   %8d · %5d · %-26s %.0f × %.0f" % (n, pc, k, b[2] - b[0], b[3] - b[1]))
gen = sorted((o[3][2] - o[3][0]) for o in ol)
print("kutu genişliği: medyan %.1f° · p90 %.1f° · >90° olan gövde %d · >180° olan %d" % (
    gen[len(gen) // 2], gen[9 * len(gen) // 10], sum(1 for x in gen if x > 90), sum(1 for x in gen if x > 180)))

t1 = time.time()
kara = dolgu._kara_yukle()
kh = dolgu.KaraIndeks(kara)
print("kara %.0f sn · RSS %.1f GB" % (time.time() - t1, rss()))
t2 = time.time()
parcalar, rapor = dolgu.kesit_dolgu(govdeler, kara, kh, r_km=dolgu.YARICAP_KM)
dt = time.time() - t2
print("KESİT BİTTİ: %.0f sn · parça %d · kapanış %.0f sn · çekişme %.0f sn · cins %.0f sn · RSS %.1f GB · tepe RSS %.1f GB" % (
    dt, len(parcalar), rapor["sn_kapanis"], rapor["sn_cekisme"], rapor["sn_cins"], rss(),
    P.memory_info().peak_wset / 2**30))
print("YUTMA:", dolgu.YUTMA)
print("SAYAC:", dolgu.SAYAC)
print("toplam %.0f sn" % (time.time() - t0))
