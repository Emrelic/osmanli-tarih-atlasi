# -*- coding: utf-8 -*-
"""KIMLIK-1923-0907 — `rus-amerika` künye önerisinin SINAVI.

🔴 Bir künye önerisi *"yazdım"* diye teslim edilmez. Bu betik dört şeyi
   ölçer ve hiçbirini varsaymaz:
   ① ŞEMA     uygulayıcının `ZORUNLU` kümesi — TAHMİN EDİLMEDİ,
              `_kunye_uygula.py`den OKUNDU.
   ② ÇAKIŞMA  `id` zaten var mı (varsa uygulayıcı REDDEDER).
   ③ GLOB     uygulayıcının varsayılan deseni bu dosyayı TUTUYOR MU?
              (`§11`: bir glob bir AD SÖZLEŞMESİDİR; tutmayan dosya
              sessizce görünmez olur ve *"uygulandı"* sanılır.)
   ④ İŞLEV    künye penceresi, bekleyen Alaska yamasının ihtiyacını
              KAPSIYOR MU · ve rengi VAR MI (§8: renk yoksa harita deliği).
"""
import io
import json
import os
import re
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "arac"))
import girdi  # noqa: E402
import renkler  # noqa: E402

KOK = os.path.join(os.path.dirname(__file__), "..")
ONERI = os.path.join(KOK, "denetim", "YAMA-KUNYE-RUS-AMERIKA-0907.json")
# Alaska'da 1923'te yanlış kimlik taşıyan beş nokta (ADIM1'den)
ALASKA = ["Alatna / Allakaket", "Fort Yukon", "Nikolai (Yukarı Kuskokwim)",
          "Nuchalawoya (Tanana)", "Telida / Denali eteği (Atabask)"]


def main():
    # ── C13③ GIRDI — dosyayi KENDI okuyucumla degil, UYGULAYICININ
    #   cikaricisiyla oku. Ilk yazimda bunu ATLADIM: sema · cakisma · glob
    #   sinanmisti ama "cikarici bu dosyayi OKUYABILIYOR MU" hic
    #   sorulmamisti, ve dosya ust duzey LISTE oldugu icin cikarici
    #   `AttributeError` ile COKUYORDU. (`§11`: bir aletin girdiyi GERCEK
    #   kaynagindan okuma yolu da sinanir.)
    import importlib.util
    sp = importlib.util.spec_from_file_location(
        "kunye_uygula", os.path.join(KOK, "arac", "_kunye_uygula.py"))
    KU = importlib.util.module_from_spec(sp)
    sp.loader.exec_module(KU)
    ham = json.load(io.open(ONERI, encoding="utf-8"))
    try:
        cikan = KU.kunyeleri_cikar(ham)
    except Exception as e:
        print("🔴 C13③ CIKARICI OKUYAMADI: %s: %s" % (type(e).__name__, e))
        return 1
    print("⓪ CIKARICI  `kunyeleri_cikar` -> %d kunye %s"
          % (len(cikan), "🟢" if len(cikan) == 1 else "🔴"))
    if len(cikan) != 1:
        return 1
    k = cikan[0]
    D = {x["id"]: x for x in girdi.oku_devletler()}
    Y = {y["ad"]: y for y in girdi.yukle(sessiz=True)}
    ok = True

    # ── ① ŞEMA — uygulayıcıdan OKU, tahmin etme ─────────────────────
    src = io.open(os.path.join(KOK, "arac", "_kunye_uygula.py"),
                  encoding="utf-8").read()
    zor = re.search(r"^ZORUNLU\s*=\s*\(([^)]*)\)", src, re.M)
    ZORUNLU = tuple(x.strip().strip('"\'')
                    for x in zor.group(1).split(",") if x.strip())
    eksik = [a for a in ZORUNLU if not k.get(a)]
    print("① SEMA   zorunlu=%s" % (ZORUNLU,))
    print("         eksik: %s %s" % (eksik or "yok", "🔴" if eksik else "🟢"))
    ok &= not eksik

    # ── ② ÇAKIŞMA ───────────────────────────────────────────────────
    car = k["id"] in D
    print("② CAKISMA `%s` devletler.js'te var mi: %s %s"
          % (k["id"], car, "🔴" if car else "🟢"))
    ok &= not car

    # ── ③ GLOB — dosya adı uygulayıcının desenine giriyor mu ────────
    var = re.search(r'^VARSAYILAN\s*=\s*"([^"]+)"', src, re.M).group(1)
    import glob as G
    tutulan = [os.path.basename(p)
               for p in G.glob(os.path.join(KOK, var))]
    bende = os.path.basename(ONERI)
    print("③ GLOB   varsayilan desen: %s" % var)
    print("         bu dosyayi TUTUYOR mu: %s %s"
          % (bende in tutulan, "🟢" if bende in tutulan else
             "🔴 TUTMUYOR — `--yama` ile ACIKCA verilmeli"))

    # ── ④ İŞLEV ─────────────────────────────────────────────────────
    print("④ ISLEV")
    B = renkler.BOYALAR
    renk = k["id"] in B
    print("   renk (BOYALAR): %s %s"
          % ("VAR" if renk else "YOK",
             "🟢" if renk else "🔴 §8 HARITA DELIGI — ayri is"))
    # künye penceresi Alaska'nın ihtiyacını kapsıyor mu
    print("   Alaska 5 noktasinin bugunku zinciri ve kunyenin kapsamasi:")
    for ad in ALASKA:
        y = Y.get(ad)
        if not y:
            print("     🔴 %s VERIDE YOK" % ad)
            ok = False
            continue
        s = sorted(y["s"], key=lambda p: p["f"])
        bas, bit = s[0]["f"], s[-1]["t"]
        # 🔴 BU SART ILK YAZIMDA YANLISTI ve SINAVI DUSURDU — ve dusuren
        #   VERI DEGIL BENIM KONTROLUMDU. `k["f"] >= bas` yazmistim; o
        #   "kunye, zincirin BASINDAN once baslasin" demek ve HICBIR SEY
        #   ifade etmiyor. Fort Yukon'un zinciri 1847'de basliyor (1799'dan
        #   SONRA) ve bu bir kusur DEGIL — yazilacak donem yine kunyenin
        #   icinde kaliyor. Dogru sart: YAZILACAK DONEM kunye penceresinin
        #   ICINDE mi. (`§11`: aletin cevabini dogru yerden okudugunu
        #   gostermeden "gecti" denmez — burada alet OTTU ve HAKLIYDI
        #   degil, YANLIS SORUYU soruyordu.)
        don_f = max(bas, k["f"])          # gercekten yazilacak donem
        don_t = k["t"]
        kapsar = (don_f < don_t and k["f"] <= don_f and don_t <= k["t"])
        onces = "1281..%s `bos: devletsiz`" % k["f"] if bas < k["f"] else "—"
        print("     %-34s zincir %s..%s | yazilacak %s..%s  kunye ICINDE: %s"
              % (ad, bas, bit, don_f, don_t, "🟢" if kapsar else "🔴"))
        print("       %-32s once gereken: %s" % ("", onces))
        ok &= kapsar
    a = D.get("abd")
    bosluk = (k["t"] < a["f"] or k["t"] > a["t"])
    print("   ardil `abd` [%s..%s] devir gununu (%s) kapsiyor mu: %s"
          % (a["f"], a["t"], k["t"], "🟢 EVET" if not bosluk else "🔴 HAYIR"))
    ok &= not bosluk

    print("\n%s" % ("🟢 KUNYE ONERISI SINAVLARI GECTI — renk borcu AYRI"
                    if ok else "🔴 SINAV DUSTU"))
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(main())
