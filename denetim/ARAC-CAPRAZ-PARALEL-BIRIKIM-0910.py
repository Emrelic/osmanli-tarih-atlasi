# -*- coding: utf-8 -*-
"""CAPRAZ PARALEL — ureteci dolasmak B2'yi KAPATIYOR mu, yoksa KUCULTUYOR mu?

SORU (koordinator, (2)): Executor.map bir URETEC olarak tuketilirken isciler
ONDEN kac is calistirir? Tuketici yavassa birikim YINE olur mu?

YONTEM: gercek geometri yerine bir VEKIL nesne dondururuz; her nesne
dogdugunda ve oldugunde sayilir, boylece HERHANGI BIR ANDA HAYATTA OLAN
sonuc sayisi (= tepe bellek yuku) olculur. Uc kip:
   A) list(map)              -> eski/mevcut bicim
   B) map ureteci, HIZLI tuketici  -> onerilen care (FAZ 2 ucuz)
   C) map ureteci, YAVAS tuketici  -> patolojik hal (FAZ 2 pahali olsaydi)

ONGORU (olcumden ONCE yazildi, D022):
   A tepe = N (butun isler)
   B tepe = O(isci sayisi), yani ~4-8 -> B2 KAPANIR
   C tepe = O(isci sayisi) DE OLUR, cunku isciler kuyruktan sirayla ceker ve
     tuketici en eskiyi bekler; yavas tuketici isçileri BEKLETIR.
   C curursE: care B2'yi KUCULTUR ama KAPATMAZ, ve FAZ 2 maliyeti onemlidir.

Bu alet MOTORU KOSTURMAZ. Saf Python, birkac saniye.
"""
import sys, io, os, json, time, threading
from concurrent.futures import ThreadPoolExecutor
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

N_IS = 200
ISCI = 4
kilit = threading.Lock()


class Vekil:
    """FAZ 1'in dondurdugu ham geometrinin vekili — dogumu/olumu sayilir."""
    __slots__ = ("i", "yuk")

    def __init__(self, i, sayac):
        self.i = i
        self.yuk = bytearray(64 * 1024)      # 64 KB, gercek govdenin vekili
        with kilit:
            sayac["canli"] += 1
            sayac["tepe"] = max(sayac["tepe"], sayac["canli"])
        self._s = sayac

    def __del__(self):
        try:
            with kilit:
                self._s["canli"] -= 1
        except Exception:
            pass


# __slots__ ile _s tutulamaz; slots'u genislet
Vekil.__slots__ = ()


class VekilB:
    def __init__(self, i, sayac):
        self.i = i
        self.yuk = bytearray(64 * 1024)
        self.s = sayac
        with kilit:
            sayac["canli"] += 1
            sayac["tepe"] = max(sayac["tepe"], sayac["canli"])

    def __del__(self):
        try:
            with kilit:
                self.s["canli"] -= 1
        except Exception:
            pass


def kos(kip, tuketici_sn):
    sayac = {"canli": 0, "tepe": 0}

    def is_govdesi(i):
        time.sleep(0.004)                    # FAZ 1: pahali
        return VekilB(i, sayac)

    t0 = time.time()
    with ThreadPoolExecutor(max_workers=ISCI) as ex:
        if kip == "list":
            sonuc = list(ex.map(is_govdesi, range(N_IS)))
            for r in sonuc:
                time.sleep(tuketici_sn)
            del sonuc
        else:
            for r in ex.map(is_govdesi, range(N_IS)):
                time.sleep(tuketici_sn)
                del r
    return sayac["tepe"], round(time.time() - t0, 2)


sonuclar = {}
tepe, sn = kos("list", 0.0)
sonuclar["A_list_hizli_tuketici"] = {"tepe_canli": tepe, "sn": sn}
print("A) list(map)            tepe canli sonuc = %4d   (%.2f sn)" % (tepe, sn))

tepe, sn = kos("uretec", 0.0)
sonuclar["B_uretec_hizli_tuketici"] = {"tepe_canli": tepe, "sn": sn}
print("B) uretec, HIZLI tuk.   tepe canli sonuc = %4d   (%.2f sn)" % (tepe, sn))

tepe, sn = kos("uretec", 0.010)
sonuclar["C_uretec_yavas_tuketici"] = {"tepe_canli": tepe, "sn": sn}
print("C) uretec, YAVAS tuk.   tepe canli sonuc = %4d   (%.2f sn)" % (tepe, sn))

sonuclar["is_sayisi"] = N_IS
sonuclar["isci"] = ISCI
sonuclar["hukum"] = ("KAPANIR" if sonuclar["B_uretec_hizli_tuketici"]["tepe_canli"]
                     <= 3 * ISCI else "KUCULUR AMA KAPANMAZ")
print()
print("HUKUM:", sonuclar["hukum"],
      " (B tepesi %d, esik %d = 3 x isci)"
      % (sonuclar["B_uretec_hizli_tuketici"]["tepe_canli"], 3 * ISCI))

yol = os.path.join(os.path.dirname(__file__),
                   "OLCUM-CAPRAZ-PARALEL-BIRIKIM-0910.json")
json.dump(sonuclar, open(yol, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print("->", yol)
