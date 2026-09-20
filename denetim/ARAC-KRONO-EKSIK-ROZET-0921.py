# -*- coding: utf-8 -*-
"""
KRONO-EKSIK-0921 — FETİH ROZETİ TARAMASI
========================================
Sevkteki soru: "kaç maddede fetih/alındı/teslim oldu geçtiği hâlde rozet yok,
kaç maddede rozet var ama tarihle çelişiyor?"

🔴 ÖNCÜL DÜZELTMESİ: Sevk "rozet maddenin PARAGRAFINDAN çıkarılıyor" diyor.
`js/app.js:3343` bunun tersini yazar ve gerekçesini ölçmüştür — rozet YALNIZ
dört veri alanından gelir: fethedilen · kaybedilen · statu_dogrudan · statu_vasal.
Tarih metinden değil, maddenin kendi `gun`/`t` değerinden gelir. Bu yüzden
tarama METNİ değil, METİN ile ALAN arasındaki boşluğu ölçer.

Evren: data/olaylar*.js (denetle.py `olaylari_yukle` ile AYNI glob ve AYNI
ayrıştırıcı — ikinci bir ayrıştırıcı yazmamak için denetle.py import edilir).

Koşum:  py denetim/ARAC-KRONO-EKSIK-ROZET-0921.py
Çıktı:  denetim/KRONO-EKSIK-ROZET-0921.json  +  ekrana özet
"""
import io
import json
import os
import re
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import denetle  # noqa: E402  (main guard'ı var, import güvenli)

ROZET_ALANLARI = ["fethedilen", "kaybedilen", "statu_dogrudan", "statu_vasal"]

# Metinde "el değiştirme" anlatan fiiller. Türkçe ek çeşidi yüzünden kök
# aranıyor; `lower()` Türkçe'de bozuk olduğu için desen hem büyük hem küçük
# harfli biçimi kapsıyor (CLAUDE.md §4 / D215).
FIIL = re.compile(
    r"(fetih|fethed|fethi|fethin|fetheden|fethetti"
    r"|zapted|zaptet|zaptı|zabted"
    r"|ele geçir|eline geçir"
    r"|teslim ol|teslim al|teslim edil"
    r"|İşgal ed|işgal ed"
    r"|ilhak ed|ilhakı"
    r"|alındı|alınması|ele geçti|geçirildi)",
    re.IGNORECASE,
)


def metin(o):
    return " ".join(str(o.get(k, "")) for k in ("b", "d", "yer"))


def main():
    olaylar = denetle.olaylari_yukle()
    Y = denetle.yerlesimleri_yukle()

    # Şehir adı evreni: yerleşim kayıtlarının adları (rozet eşleşmesi app.js'te
    # `sehirler[si].s.ad.split(" (")[0]` ile yapılıyor — aynısı burada).
    adlar = set()
    for y in Y:
        ad = str(y.get("ad", "")).split(" (")[0].strip()
        if ad:
            adlar.add(ad)

    alanli = []
    rozetsiz = []
    olu_ad = []

    for o in olaylar:
        var = [a for a in ROZET_ALANLARI if o.get(a)]
        if var:
            alanli.append(o)
            for a in var:
                for ham in o[a]:
                    ad = str(ham).split(" (")[0].strip()
                    if ad not in adlar:
                        olu_ad.append({"t": o.get("t"), "b": o.get("b"),
                                       "alan": a, "ad": ad})
        else:
            if FIIL.search(metin(o)):
                rozetsiz.append(o)

    # Rozetsizlerin kategoriye göre dağılımı — öncelik önerisi için.
    kat = {}
    for o in rozetsiz:
        k = o.get("k", "?")
        kat[k] = kat.get(k, 0) + 1

    # Yalnız BAŞLIKTA fiil geçenler: daha yüksek güvenli aday kümesi.
    baslikta = [o for o in rozetsiz if FIIL.search(str(o.get("b", "")))]

    ozet = {
        "evren_madde": len(olaylar),
        "evren_yerlesim_adi": len(adlar),
        "alani_olan_madde": len(alanli),
        "alanda_yazili_ad": sum(len(o[a]) for o in alanli
                                for a in ROZET_ALANLARI if o.get(a)),
        "olu_ad_sayisi": len(olu_ad),
        "rozetsiz_madde": len(rozetsiz),
        "rozetsiz_basligi_da_fiilli": len(baslikta),
        "rozetsiz_kategori_dagilimi": dict(sorted(kat.items(),
                                                  key=lambda x: -x[1])[:15]),
        "olu_adlar": olu_ad,
        "alani_olan_maddeler": [
            {"t": o.get("t"), "b": o.get("b"),
             **{a: o[a] for a in ROZET_ALANLARI if o.get(a)}}
            for o in alanli
        ],
        "rozetsiz_ornek_20": [{"t": o.get("t"), "k": o.get("k"),
                               "b": o.get("b")} for o in baslikta[:20]],
    }

    yol = os.path.join(KOK, "denetim", "KRONO-EKSIK-ROZET-0921.json")
    io.open(yol, "w", encoding="utf-8").write(
        json.dumps(ozet, ensure_ascii=False, indent=1))

    print("evren: %d madde · %d yerleşim adı" % (ozet["evren_madde"],
                                                 ozet["evren_yerlesim_adi"]))
    print("alanı olan madde      : %d  (%d ad yazılı)"
          % (ozet["alani_olan_madde"], ozet["alanda_yazili_ad"]))
    print("ölü ad (rozet ÇIKMAZ) : %d" % ozet["olu_ad_sayisi"])
    print("metinde fiil VAR, alan YOK (rozetsiz): %d" % ozet["rozetsiz_madde"])
    print("  bunlardan BAŞLIĞINDA da fiil geçen : %d"
          % ozet["rozetsiz_basligi_da_fiilli"])
    print("kategori dağılımı: %s" % ozet["rozetsiz_kategori_dagilimi"])
    print("yazıldı: %s" % yol)


if __name__ == "__main__":
    main()
