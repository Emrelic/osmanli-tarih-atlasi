# -*- coding: utf-8 -*-
r"""MAKINE ÖLÇER — her makinede AYNI işi koşturur, kıyaslanabilir sayı verir.

🔴 NİÇİN TEK ARAÇ: makine makine farklı komut sormak kıyaslanabilir sayı
   vermez. Beş makineyi rol dağıtmak için sıralayacaksak hepsinin AYNI işi
   yapması şart — yoksa "hızlı" kelimesi her makinede başka şey demek olur.

🔴 NİÇİN HAM ÖZELLİK YETMEZ — ölçüldü (1 Ekim 2026):
       UMIT    i5-1135G7 @ 2,40 GHz  →  koşu 1 sa 53 dk 52 sn
       EMRELIC i5-8250U  @ 1,60 GHz  →  koşu 4 sa 10 dk
   Saat farkı 1,5 kat, süre farkı 2,2 kat. GHz tek başına yanıltır: mimari,
   bellek bant genişliği ve tek-çekirdek verimi birlikte belirler.
   ⇒ Bu araç koşunun GERÇEK yükünü taklit eden kısa bir iş koşturur.

KOŞUNUN YÜK DAĞILIMI (koşu 19 logundan, UMIT):
       Dönemler          52 dk 05 sn   %45,9
       Yabancı gövdeler  24 dk 33 sn   %21,6
       Ufuk bantları     13 dk 27 sn   %11,9
   Üçü de shapely geometri işi: AĞIRLIKLA TEK ÇEKİRDEK + bellek bandı.
   ⇒ En belirleyici ölçü `tek_cekirdek` ve `bellek`tir; `cok_cekirdek`
     oturum taşıma kapasitesini söyler, koşu süresini DEĞİL.

KULLANIM:  py -X utf8 denetim/ARAC-MAKINE-OLC-1001.py
           (depo yoksa dosyayı tek başına kopyalayıp koşturmak da olur)
ÇIKTI:     okunur blok + sonda tek satır JSON (kıyas için)
SÜRE:      ~30-60 sn. Koşu sırasında KOŞTURMA — ölçümü bozar ve bozulur.

🔴 İKİ KEZ KOŞTUR, İKİNCİYİ GÖNDER. Ölçüldü (EMRELIC, 1 Ekim 2026):
       1. koşu (soğuk)  tek_çekirdek 1,332
       2. koşu          tek_çekirdek 0,828
       3. koşu          tek_çekirdek 0,781   ⇒ 2. ve 3. arası %6
   İlk koşu dosya önbelleği ve CPU frekans basamağı yüzünden YAVAŞ çıkar;
   onu kıyasa katmak yavaş makineyi daha da yavaş gösterir. İkinci koşu
   kararlıdır (çok_çekirdek %1, geometri %3 oynadı).
"""
import json
import os
import platform
import socket
import subprocess
import sys
import time

try:
    sys.stdout.reconfigure(encoding="utf-8")
except Exception:
    pass


# 🔴 BUTUN CALISTIRILABILIR KOD main() ICINDE VE __main__ KORUMASI ALTINDA.
#   Sebebi OLCULDU (1 Ekim 2026, bu aracin ILK kosusu): Windows'ta
#   ProcessPoolExecutor cocuk sureclerde modulu YENIDEN ICE AKTARIR. Kod
#   modul duzeyindeyken betigin TAMAMI 8 kez yeniden kostu; cok_cekirdek
#   olcumu 29,164 sn cikti ve o sayi BASARIMI DEGIL kendi hatasini olcuyordu.
#   Ayrica rapor IKI KEZ basildi ve ilk JSON eksik alanla cikti.
#   ⇒ Bes makineye gondermeden once KENDI makinemde kosturmak bunu yakaladi.
#     D248 ailesi: kosturulmamis arac baskasina verilmez.


# 🔴 MODUL DUZEYINDE OLMAK ZORUNDA: ProcessPoolExecutor isci islevini
#   PICKLE eder ve ic ice tanimli islev pickle EDILEMEZ
#   ("Can't pickle local object 'main.<locals>._is'").
#   Ama modul duzeyinde olmasi, __main__ korumasini da ZORUNLU kilar —
#   yoksa cocuk surecler butun betigi yeniden kosturur.
def _is(_):
    import math
    s = 0.0
    for i in range(1, 400_000):
        s += math.sqrt(i)
    return s


def main():
    R = {}


    def bas(k, v):
        R[k] = v


    # ─────────────────────────── KİMLİK ──────────────────────────────────────────
    bas("ad", socket.gethostname())
    bas("os", platform.platform())
    bas("py", platform.python_version())

    # ─────────────────────────── CPU ─────────────────────────────────────────────
    cpu = platform.processor() or "?"
    cekirdek = mantiksal = saat = None
    try:
        out = subprocess.run(
            ["powershell", "-NoProfile", "-Command",
             "$c=Get-CimInstance Win32_Processor|Select-Object -First 1;"
             "'{0}|{1}|{2}|{3}' -f $c.Name,$c.NumberOfCores,"
             "$c.NumberOfLogicalProcessors,$c.MaxClockSpeed"],
            capture_output=True, text=True, timeout=60).stdout.strip()
        p = out.split("|")
        if len(p) == 4:
            cpu, cekirdek, mantiksal, saat = p[0].strip(), int(p[1]), int(p[2]), int(p[3])
    except Exception:
        pass
    bas("cpu", cpu)
    bas("cekirdek", cekirdek)
    bas("mantiksal", mantiksal or os.cpu_count())
    bas("saat_mhz", saat)

    # ─────────────────────────── RAM ─────────────────────────────────────────────
    ram_top = ram_bos = None
    try:
        import ctypes

        class M(ctypes.Structure):
            _fields_ = [("dwLength", ctypes.c_ulong), ("dwMemoryLoad", ctypes.c_ulong),
                        ("ullTotalPhys", ctypes.c_ulonglong), ("ullAvailPhys", ctypes.c_ulonglong),
                        ("ullTotalPageFile", ctypes.c_ulonglong),
                        ("ullAvailPageFile", ctypes.c_ulonglong),
                        ("ullTotalVirtual", ctypes.c_ulonglong),
                        ("ullAvailVirtual", ctypes.c_ulonglong),
                        ("ullAvailExtendedVirtual", ctypes.c_ulonglong)]

        m = M()
        m.dwLength = ctypes.sizeof(M)
        ctypes.windll.kernel32.GlobalMemoryStatusEx(ctypes.byref(m))
        ram_top = round(m.ullTotalPhys / 1024 ** 3, 2)
        ram_bos = round(m.ullAvailPhys / 1024 ** 3, 2)
        bas("pagefile_bos_gb", round(m.ullAvailPageFile / 1024 ** 3, 2))
    except Exception:
        pass
    bas("ram_gb", ram_top)
    bas("ram_bos_gb", ram_bos)

    # ─────────────────────────── DİSK ────────────────────────────────────────────
    try:
        import shutil
        t, k, b = shutil.disk_usage("C:\\")
        bas("disk_gb", round(t / 1024 ** 3, 1))
        bas("disk_bos_gb", round(b / 1024 ** 3, 1))
    except Exception:
        pass
    try:
        out = subprocess.run(
            ["powershell", "-NoProfile", "-Command",
             "(Get-PhysicalDisk | Select-Object -First 1).MediaType"],
            capture_output=True, text=True, timeout=60).stdout.strip()
        bas("disk_tur", out or "?")
    except Exception:
        bas("disk_tur", "?")

    # ─────────────────────────── ARAÇLAR ─────────────────────────────────────────
    for ad, komut in (("node", ["node", "--version"]), ("git", ["git", "--version"])):
        try:
            bas(ad, subprocess.run(komut, capture_output=True, text=True,
                                   timeout=30).stdout.strip() or None)
        except Exception:
            bas(ad, None)
    try:
        bas("autocrlf", subprocess.run(["git", "config", "--get", "core.autocrlf"],
                                       capture_output=True, text=True,
                                       timeout=30).stdout.strip() or "(tanımsız)")
    except Exception:
        bas("autocrlf", "?")

    # 🔴 MOTOR KÜTÜPHANELERİ — sürüm farkı SESSİZCE farklı sayı üretir.
    #   Ölçüldü: bir makinede numpy 2.3.5, ötekinde 2.2.6. Bunlar motor TUZUNDA
    #   DEĞİL (`CLAUDE.md §9.1`: tuz uret_petek·renkler·girdi·motor_onbellek) ⇒
    #   önbellek aynı sayılır ama sonuç farklı çıkabilir. Koşu TEK makinede
    #   tutulmasının sebeplerinden biri budur.
    kut = {}
    for ad in ("numpy", "shapely", "pyproj", "rasterio", "scipy"):
        try:
            kut[ad] = __import__(ad).__version__
        except Exception:
            kut[ad] = None
    bas("kutuphane", kut)

    # ─────────────────────────── BAŞARIM ─────────────────────────────────────────
    # ⚠️ Hepsi SABİT iş; süre ölçülür. Makineler arası kıyas için tek ölçüt budur.

    def sure(f, *a):
        t0 = time.perf_counter()
        f(*a)
        return round(time.perf_counter() - t0, 3)


    def tek_cekirdek():
        """Koşunun baskın yükü: kayan nokta + döngü, TEK çekirdek."""
        import math
        s = 0.0
        for i in range(1, 1_200_000):
            s += math.sqrt(i) * math.sin(i % 360)
        return s


    def bellek():
        """Bellek bandı: büyük liste kurma + toplama."""
        a = list(range(3_000_000))
        b = [x * 2 for x in a]
        return sum(b)


    def disk_io():
        """Diske 64 MB yaz-oku (önbellek etkisi var, yine de kıyaslanabilir)."""
        yol = os.path.join(os.environ.get("TEMP", "."), "_atlas_olc.bin")
        veri = b"x" * (1024 * 1024)
        with open(yol, "wb") as f:
            for _ in range(64):
                f.write(veri)
        with open(yol, "rb") as f:
            while f.read(1024 * 1024):
                pass
        try:
            os.remove(yol)
        except Exception:
            pass


    def cok_cekirdek():
        """Oturum taşıma kapasitesinin vekili: N paralel süreç."""
        from concurrent.futures import ProcessPoolExecutor
        n = min(os.cpu_count() or 2, 8)
        with ProcessPoolExecutor(max_workers=n) as ex:
            list(ex.map(_is, range(n)))




    print("Ölçülüyor… (~30-60 sn, lütfen bekle)")
    bas("b_tek_cekirdek_sn", sure(tek_cekirdek))
    bas("b_bellek_sn", sure(bellek))
    bas("b_disk_sn", sure(disk_io))
    if __name__ == "__main__":
        try:
            bas("b_cok_cekirdek_sn", sure(cok_cekirdek))
        except Exception as e:
            bas("b_cok_cekirdek_sn", None)
            bas("b_cok_hata", str(e)[:60])

    # shapely varsa GERÇEK yükün minyatürü
    def geometri():
        from shapely.geometry import Point
        from shapely.ops import unary_union
        d = [Point(i % 100, i // 100).buffer(0.6) for i in range(900)]
        u = unary_union(d)
        return u.area


    if kut.get("shapely"):
        try:
            bas("b_geometri_sn", sure(geometri))
        except Exception as e:
            bas("b_geometri_sn", None)
            bas("b_geo_hata", str(e)[:60])
    else:
        bas("b_geometri_sn", None)

    # ─────────────────────────── DEPO ────────────────────────────────────────────
    depo = None
    for y in (r"C:\atlas", r"C:\atlas-depo", os.getcwd()):
        if os.path.isdir(os.path.join(y, ".git")):
            depo = y
            break
    bas("depo", depo)
    if depo:
        try:
            bas("depo_head", subprocess.run(["git", "-C", depo, "log", "--oneline", "-1"],
                                            capture_output=True, text=True,
                                            timeout=60).stdout.strip()[:60])
        except Exception:
            pass

    # ─────────────────────────── RAPOR ───────────────────────────────────────────
    ESIK_KOSU = 8.5   # GB — koşu tepe 8.329 MiB ölçüldü (UMIT, koşu 19)

    print("\n" + "=" * 66)
    print("MAKİNE: %s" % R["ad"])
    print("=" * 66)
    print("  OS        : %s" % R["os"])
    print("  CPU       : %s" % R["cpu"])
    print("  çekirdek  : %s fiziksel / %s mantıksal · %s MHz"
          % (R["cekirdek"], R["mantiksal"], R["saat_mhz"]))
    print("  RAM       : %s GB toplam · %s GB boş" % (R["ram_gb"], R["ram_bos_gb"]))
    print("  disk      : %s GB boş / %s GB · %s" % (R.get("disk_bos_gb"), R.get("disk_gb"),
                                                    R.get("disk_tur")))
    print("  araçlar   : py %s · node %s · %s" % (R["py"], R["node"], R["git"]))
    print("  autocrlf  : %s" % R["autocrlf"])
    print("  kütüphane : %s" % ", ".join("%s %s" % (k, v or "YOK") for k, v in kut.items()))
    print("  depo      : %s" % (R["depo"] or "YOK"))
    print("\n  BAŞARIM (düşük = hızlı, saniye)")
    print("    tek çekirdek : %s   ← KOŞU SÜRESİNİ BU BELİRLER" % R["b_tek_cekirdek_sn"])
    print("    bellek       : %s" % R["b_bellek_sn"])
    print("    çok çekirdek : %s   ← oturum taşıma kapasitesi" % R.get("b_cok_cekirdek_sn"))
    print("    disk 64 MB   : %s" % R["b_disk_sn"])
    print("    geometri     : %s   ← shapely yoksa None" % R.get("b_geometri_sn"))

    kosar = (R["ram_gb"] or 0) >= ESIK_KOSU
    print("\n  KOŞU YETENEĞİ: %s  (toplam RAM %s GB, eşik %s GB — koşu tepesi 8.329 MiB ölçüldü)"
          % ("✅ KOŞABİLİR" if kosar else "❌ KOŞAMAZ", R["ram_gb"], ESIK_KOSU))
    print("  YAYIN YETENEĞİ: %s  (node %s)"
          % ("✅ YAPABİLİR" if R["node"] else "❌ node YOK", R["node"] or "-"))
    print("\n--- KIYAS SATIRI (bunu aynen gönder) ---")
    print(json.dumps(R, ensure_ascii=False))


if __name__ == "__main__":
    main()
