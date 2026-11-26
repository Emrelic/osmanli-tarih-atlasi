# -*- coding: utf-8 -*-
"""CAPRAZ PARALEL — ureteC bicimindE FAZ 2 ortasinda istisna: ne oluyor?

SORU (koordinator, (3)): list() biciminde istisna HEMEN patliyordu; ureteC
biciminde FAZ 2'nin ORTASINDA patlar. O noktada havuza() YARIM uygulanmis
olur. Kosu YARIM CIKTIYLA mi oluyor? Ve ana is parcacigi ASILIYOR mu
(with _TPE(...) cikisi shutdown(wait=True) yapar)?

Uc kip olculur:
   A) list(map): ISCI patlar
   B) uretec   : ISCI patlar
   C) uretec   : TUKETICI (FAZ 2 govdesi) patlar     <- YENI olan hal
Her kipte: gecen sure · KAC IS BASLADI (yani bekleyenler IPTAL edildi mi) ·
istisna disari cikti mi.

ONGORU (olcumden ONCE yazildi, D022):
   Ucunde de istisna DISARI CIKAR (sarmalayan try yok, olculdu: 0 blok).
   C'de baslamis is sayisi N'den KUCUK olur -> bekleyenler IPTAL edilir ->
   ASILMA YOK, sure ~ bir isin suresi kadar uzar.
   C curursE: ureteC bicimi bir ASILMA riski getirir ve bu YENI bir kusurdur.

Bu alet MOTORU KOSTURMAZ.
"""
import sys, io, os, json, time, threading
from concurrent.futures import ThreadPoolExecutor
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

N_IS, ISCI, IS_SN = 400, 4, 0.02
kilit = threading.Lock()


def kos(kip):
    basladi = {"n": 0}

    def is_govdesi(i):
        with kilit:
            basladi["n"] += 1
        time.sleep(IS_SN)
        if kip in ("A", "B") and i == 5:
            raise RuntimeError("ISCI PATLADI (is %d)" % i)
        return i

    t0 = time.time()
    hata = None
    try:
        with ThreadPoolExecutor(max_workers=ISCI) as ex:
            if kip == "A":
                sonuc = list(ex.map(is_govdesi, range(N_IS)))
                for r in sonuc:
                    pass
            else:
                for r in ex.map(is_govdesi, range(N_IS)):
                    if kip == "C" and r == 5:
                        raise RuntimeError("TUKETICI (FAZ 2) PATLADI (is %d)" % r)
    except BaseException as e:
        hata = "%s: %s" % (type(e).__name__, e)
    sn = time.time() - t0
    return {"gecen_sn": round(sn, 2), "baslayan_is": basladi["n"],
            "toplam_is": N_IS, "istisna": hata,
            "bekleyenler_iptal_edildi_mi": basladi["n"] < N_IS}


tam_sure = round(N_IS * IS_SN / ISCI, 2)
print("taban: %d is x %.3f sn / %d isci = HEPSI kossaydi ~%.2f sn"
      % (N_IS, IS_SN, ISCI, tam_sure))
print()
rapor = {"taban_hepsi_kossaydi_sn": tam_sure, "is": N_IS, "isci": ISCI}
for kip, ad in (("A", "list(map)  · ISCI patlar"),
                ("B", "uretec     · ISCI patlar"),
                ("C", "uretec     · TUKETICI patlar  <- YENI")):
    r = kos(kip)
    rapor[kip] = r
    print("%s  %-34s  %6.2f sn · baslayan is %3d/%d · iptal: %s"
          % (kip, ad, r["gecen_sn"], r["baslayan_is"], r["toplam_is"],
             "EVET" if r["bekleyenler_iptal_edildi_mi"] else "🔴 HAYIR"))
    print("      istisna disari cikti mi: %s" % (r["istisna"] or "🔴 HAYIR"))

asilma = any(rapor[k]["gecen_sn"] > tam_sure * 0.8 for k in "ABC")
rapor["asilma_riski"] = bool(asilma)
print()
print("HUKUM:", "🔴 ASILMA/TAM KOSMA VAR" if asilma
      else "🟢 ucunde de bekleyenler IPTAL edildi, ASILMA YOK")

yol = os.path.join(os.path.dirname(__file__),
                   "OLCUM-CAPRAZ-PARALEL-ISTISNA-0910.json")
json.dump(rapor, open(yol, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print("->", yol)
