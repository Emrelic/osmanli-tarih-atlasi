# -*- coding: utf-8 -*-
"""BEKÇİ NABZI SINAVI — iki yönde.

🔴 BİR DENETİM İKİ YÖNDE SINANMADAN ÇALIŞIYOR SAYILMAZ (CLAUDE.md §11):
   "canlıda CANLI der" yetmez, "ölüde ÖLÜ der" de ölçülür. Boş küme her
   öngörüyü doğrular.

Sınanan: `arac/tahta_bekci.py` nabız damgası + `arac/bekci_olc.py` okuması.
KULLANIM:  py denetim/ARAC-BEKCI-NABIZ-SINAV-1003.py
"""
import io, json, os, shutil, subprocess, sys, time

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import bekci_olc

HATA = 0


def sonuc(ok, baslik, detay=""):
    global HATA
    print(("  OK   " if ok else "  HATA ") + baslik + ((" | " + detay) if detay else ""))
    if not ok:
        HATA += 1


print("=" * 72)
print("BEKCI NABZI SINAVI — iki yonde")
print("=" * 72)

DIZIN = bekci_olc.DIZIN
vardi = os.path.isdir(DIZIN)
SINAV = []            # sinavin yazdigi dosyalar — SONUNDA silinir


def damga(ad, durum, yas_sn, ara=60, tur=5, sebep=""):
    if not os.path.isdir(DIZIN):
        os.makedirs(DIZIN)
    y = os.path.join(DIZIN, ad + ".json")
    SINAV.append(y)
    io.open(y, "w", encoding="utf-8").write(json.dumps({
        "ad": ad, "durum": durum, "sebep": sebep, "pid": 0,
        "zaman": "sinav", "damga": int(time.time()) - yas_sn,
        "tur": tur, "ara": ara, "dinlenen": [ad],
    }, ensure_ascii=False))
    return y


try:
    # ------------------------------------------------- 1) CANLI YON
    damga("ZZSINAV_CANLI", "nobette", yas_sn=30, ara=60)
    k = {x["ad"]: x for x in bekci_olc.oku()}
    sonuc(k.get("ZZSINAV_CANLI", {}).get("hal") == "CANLI",
          "1) taze nabiz (30 sn / ara 60) -> CANLI",
          "donen: %r" % k.get("ZZSINAV_CANLI", {}).get("hal"))

    # ------------------------------------------------- 2) OLU YON  ← ASIL SINAV
    # ODAK-KAPAT vakasinin birebir taklidi: 9 saat sessizlik.
    damga("ZZSINAV_OLU", "nobette", yas_sn=9 * 3600, ara=60)
    k = {x["ad"]: x for x in bekci_olc.oku()}
    sonuc(k.get("ZZSINAV_OLU", {}).get("hal") == "OLU",
          "2) 9 SAAT sessiz (ara 60) -> OLU   [ODAK-KAPAT vakasi]",
          "donen: %r" % k.get("ZZSINAV_OLU", {}).get("hal"))

    # ------------------------------------------------- 3) ESIK NABIZ ARALIGININ KATI MI
    # 🔴 GERILEME SINAVI: ayni 20 dakikalik sessizlik, `ara`ya gore AYRI
    #    hukum almali. Sabit saniye esigi yazilsaydi ikisi ayni cikardi.
    damga("ZZSINAV_SIK", "nobette", yas_sn=1200, ara=60)      # 20 tur  -> OLU
    damga("ZZSINAV_SEYREK", "nobette", yas_sn=1200, ara=1800)  # <1 tur -> CANLI
    k = {x["ad"]: x for x in bekci_olc.oku()}
    sonuc(k.get("ZZSINAV_SIK", {}).get("hal") == "OLU"
          and k.get("ZZSINAV_SEYREK", {}).get("hal") == "CANLI",
          "3) AYNI 20 dk sessizlik: ara 60 -> OLU, ara 1800 -> CANLI",
          "sik=%r seyrek=%r" % (k.get("ZZSINAV_SIK", {}).get("hal"),
                                k.get("ZZSINAV_SEYREK", {}).get("hal")))

    # ------------------------------------------------- 4) CIKTI != OLU
    # Duzgun cikmis bekci OLU sayilmamali — yoksa her mesaj tesliminden
    # sonra koordinator yanlis alarm okur.
    damga("ZZSINAV_CIKTI", "cikti", yas_sn=9 * 3600, ara=60, sebep="mesaj-var")
    k = {x["ad"]: x for x in bekci_olc.oku()}
    sonuc(k.get("ZZSINAV_CIKTI", {}).get("hal") == "CIKTI",
          "4) duzgun CIKIS, 9 saat once bile -> CIKTI (OLU DEGIL)",
          "donen: %r" % k.get("ZZSINAV_CIKTI", {}).get("hal"))

    # ------------------------------------------------- 5) BOZUK DAMGA = OLCULEMEDI
    y = os.path.join(DIZIN, "ZZSINAV_BOZUK.json")
    SINAV.append(y)
    io.open(y, "w", encoding="utf-8").write("{ bu gecerli json DEGIL")
    k = {x["ad"]: x for x in bekci_olc.oku()}
    sonuc(k.get("ZZSINAV_BOZUK", {}).get("hal") == "OLCULEMEDI",
          "5) bozuk damga -> OLCULEMEDI (OLU DEGIL)",
          "donen: %r" % k.get("ZZSINAV_BOZUK", {}).get("hal"))

    # ------------------------------------------------- 6) CIKIS KODU
    p = subprocess.run([sys.executable, os.path.join(KOK, "arac", "bekci_olc.py"),
                        "--ham"], capture_output=True)
    sonuc(p.returncode == 1,
          "6) OLU varken cikis kodu 1", "donen: %d" % p.returncode)

    # ------------------------------------------------- 7) YAMA YERINDE Mİ
    s = io.open(os.path.join(KOK, "arac", "tahta_bekci.py"), encoding="utf-8").read()
    i_ilk = s.find('_nabiz_yaz(kim, "nobette", 0')
    i_wh = s.find("while True:")
    sonuc(-1 < i_ilk < i_wh,
          "7) ILK nabiz `while True`dan ONCE (ara=1800 bekci olu gorunmesin)",
          "ilk=%d while=%d" % (i_ilk, i_wh))
    sonuc("def _nabiz_dizin" in s,
          "8) dizin CAGRI ANINDA hesaplaniyor (`--tahta` ile bayatlamasin)")

finally:
    for y in SINAV:
        try:
            os.remove(y)
        except OSError:
            pass
    if not vardi and os.path.isdir(DIZIN):
        shutil.rmtree(DIZIN, ignore_errors=True)

# ------------------------------------------------- 9) IZ BIRAKMADI
kalan = [x["ad"] for x in bekci_olc.oku() if x["ad"].startswith("ZZSINAV")]
sonuc(not kalan, "9) sinav iz BIRAKMADI", "kalan: %r" % kalan)

print("-" * 72)
print("SONUC: " + ("temiz" if HATA == 0 else "%d KUSUR" % HATA))
sys.exit(1 if HATA else 0)
