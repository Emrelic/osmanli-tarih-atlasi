# -*- coding: utf-8 -*-
"""
SINIR-ASYA-0907 · CIKTI URETICI  ->  denetim/SINIR-HUKUKI-ASYA-0907.json
Sartname: oturumlar/SINIR-HUKUKI-ORTAK-0907.md · sema: ONERI-KADEME-C-MODEL-0907.md

🔴 KAYIT YAZMA KURALI (sartname IV'un kendi semantigi):
   "Kaydin hic yazilmamasi = OKUMADIM. Yazip `bulunamadi` demek = ARADIM, YOK."
   ⇒ INCELEMEDIGIM kenara KAYIT YAZMIYORUM. Bos bir `olculemedi` kaydi
     yazmak, okumadigimi olctugum gibi gosterirdi.

Ucu birlestiriyor:
   OLCUM-SINIR-ASYA-KENAR-0907.json      geometri (mekanik)
   OLCUM-SINIR-ASYA-KIMLIK1923-0907.json poligon BASKIN kimligi
   OLCUM-SINIR-ASYA-KENARYANI-0907.json  KENAR YANI kimligi  <- daha keskin

IKI YONTEM CELISIRSE: kayit YAZILIR ama `hal:"olculemedi"` ve celiski
`not`a yazilir. Celiskiyi gizleyip birini secmek, olcumu gorus yapardi.
"""
import json, sys, io, os, collections
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
D = os.path.join(KOK, "denetim")
KENAR = json.load(io.open(os.path.join(D, "OLCUM-SINIR-ASYA-KENAR-0907.json"), encoding="utf-8"))
KIM = json.load(io.open(os.path.join(D, "OLCUM-SINIR-ASYA-KIMLIK1923-0907.json"), encoding="utf-8"))
YAN = json.load(io.open(os.path.join(D, "OLCUM-SINIR-ASYA-KENARYANI-0907.json"), encoding="utf-8"))

CIPA = "1923-10-29"
OLCUM_GUNU = "1923-10-28"

# NE adi -> atlas kimligi. YALNIZ olcumun kendi cikardigi kimlikler;
# TAHMIN EDILMEDI (§3.5.0: "id TAHMIN EDILMEZ, TARANIR"). Bos birakilanlar
# ESLEME-NE-KIMLIK-0907.json'a birakiliyor - o dosyanin yazari BEN DEGILIM.

KIMLIK_DEGIL_NOT = {
    "Baykonur Cosmodrome": "NE TYPE=Lease · Rusya'ya kirali · devlet DEGIL",
    "US Naval Base Guantanamo Bay": "NE TYPE=Lease · ABD'ye kirali · devlet DEGIL",
    "Siachen Glacier": "NE TYPE=Indeterminate · Hindistan/Pakistan ihtilafli",
    "Southern Patagonian Ice Field": "NE TYPE=Indeterminate · Sili/Arjantin sinirlandirilmamis",
    "Brazilian Island": "NE TYPE=Indeterminate · Brezilya/Uruguay ihtilafli ada",
    "Spratly Islands": "NE TYPE=Indeterminate",
    "Scarborough Reef": "NE TYPE=Indeterminate",
}


def yan_bas(t):
    return (t["a"][0][0] if t["a"] else None, t["b"][0][0] if t["b"] else None)


def main():
    kimu = KIM["ulke"]
    yanx = {(k["ne_a"], k["ne_b"]): k for k in YAN["kenar"]}
    kimx = {(k["ne_a"], k["ne_b"]): k for k in KIM["kenar"]}

    kayitlar, atlanan = [], []
    for k in KENAR["kenarlar"]:
        a, b = k["ne_a"], k["ne_b"]
        y = yanx[(a, b)]
        km = kimx[(a, b)]
        t = y["tampon"]["2.5"] if (y["tampon"]["2.5"]["a_n"] and
                                   y["tampon"]["2.5"]["b_n"]) else y["tampon"]["1.0"]
        ya, yb = yan_bas(t)
        ba, bb = km["a_1923"], km["b_1923"]

        kd = (a in KIMLIK_DEGIL_NOT) or (b in KIMLIK_DEGIL_NOT)

        # ---- karar
        if kd:
            hal, cins = "olculemedi", "kimlik-degil"
            notu = ("NE girdisi DEVLET DEGIL: " +
                    KIMLIK_DEGIL_NOT.get(a, KIMLIK_DEGIL_NOT.get(b, "")) +
                    " · `bulunamadi` YAZILMADI, o yanlis damga olurdu (sartname III).")
        elif ya is None or yb is None:
            # kenar yaninda hic nokta yok -> poligon baskinina dus
            if ba is None or bb is None:
                hal, cins = "olculemedi", "atlas-noktasi-yok"
                notu = ("Kenarin iki yaninda da (2,5 derece tamponda) VE poligon "
                        "icinde atlas noktasi YOK ⇒ 1923 kimligi OLCULEMEDI. "
                        "Bu `bulunamadi` DEGIL: aramadim degil, ATLAS SUSUYOR.")
                ya, yb = ba, bb
            else:
                hal, cins = "olculemedi", "kenar-yani-bos"
                notu = ("Kenar yaninda nokta yok; yalnizca poligon BASKIN kimligi "
                        "olculebildi (%s / %s). Baskin kimlik kenardaki kimligi "
                        "GIZLEYEBILIR - bu olcum bunu bir kez zaten gosterdi "
                        "(Cin-Hindistan: baskin `cin-cumhuriyeti`, kenar yani "
                        "`tibet-ganden-phodrang`)." % (ba, bb))
                ya, yb = ba, bb
        elif ya == yb:
            hal, cins = "bulunamadi", "1923te-ic-hat"
            notu = ("1923-10-28'de cizginin IKI YANI DA `%s`. ⇒ Bu kenar 1923'te "
                    "ULUSLARARASI SINIR DEGILDI; onu tarif eden bir 1923 "
                    "antlasmasi ARANDI ve OLAMAZ - taraf yok. C'ye 1923 "
                    "cipasiyla GIRMEZ, A/B'de kalir. (Sartname II: 🔴 bir "
                    "basarisizlik degil, BIR SONUCTUR.)" % ya)
        else:
            hal, cins = "olculemedi", "gercek-sinir-adayi"
            notu = ("1923-10-28'de iki yan FARKLI kimlik (`%s` / `%s`) ⇒ bu "
                    "kenar 1923'te GERCEK bir siniri. Ama asil soru "
                    "(\"CIZGI 1923'ten bugune degisti mi\") KAYNAK ISTER ve "
                    "HENUZ ARANMADI. `bulunamadi` YAZILMADI - aramadan oyle "
                    "yazmak hatayi KALICILASTIRIRDI (sartname IX)." % (ya, yb))

        # iki yontem celisiyor mu?
        celiski = None
        if ba and bb and ya and yb:
            m1 = (ba == bb)
            m2 = (ya == yb)
            if m1 != m2:
                celiski = ("YONTEM CELISKISI: poligon BASKIN kimligi %s diyor "
                           "(%s/%s), KENAR YANI %s diyor (%s/%s). Kenar yani "
                           "esas alindi - sorulan sey CIZGININ iki yani."
                           % ("AYNI" if m1 else "FARKLI", ba, bb,
                              "AYNI" if m2 else "FARKLI", ya, yb))
                if hal == "bulunamadi":
                    hal = "olculemedi"
                    cins = "yontem-celiskisi"

        kayitlar.append({
            "a": None, "b": None,               # atlas kimligi - ESLEME bekliyor
            "ne_a": a, "ne_b": b,
            "ne_surum": "ne_10m_admin_0_countries",
            "f": CIPA, "t": CIPA, "t_cinsi": "pencere",
            "hal": hal, "cins": cins,
            "dayanak": None, "dayanak_t": None, "madde": None, "kaynak": None,
            "kesinlik": None,
            "kimlik_bugun": {"a": a, "b": b},
            "kimlik_1923": {"a": ya, "b": yb,
                            "yontem": "kenar-yani-tampon" if t["a_n"] and t["b_n"]
                                      else "poligon-baskin",
                            "olcum_gunu": OLCUM_GUNU,
                            "a_nokta": t["a_n"], "b_nokta": t["b_n"]},
            "ne_degisti": None,
            "uzunluk_derece": k["uzunluk_derece"],
            "parca": k["parca"], "tepe": k["tepe_3ond"],
            "not": notu + ((" 🔴 " + celiski) if celiski else ""),
            "gc": k["gc"],
        })

    r = {
        "_NOT": ("SINIR-ASYA-0907 · kademe C adaylari. Bolge: Asya "
                 "(Arap/Anadolu/Kafkas HARIC) + Okyanusya + Amerika."),
        "_SEMA": "denetim/ONERI-KADEME-C-MODEL-0907.md",
        "_SARTNAME": "oturumlar/SINIR-HUKUKI-ORTAK-0907.md",
        "_AD_ALANI": "data/sinir_hukuki_asya.js -> window.SINIR_HUKUKI_ASYA",
        "_CIPA": CIPA,
        "_OLCUM_GUNU": OLCUM_GUNU,
        "_OLCUM_GUNU_NICIN": ("Atlas donemleri [f,t) yarim acik. t:'1923-10-29' "
                              "tasiyan donem 29 Ekim'de KAPSAMAZ; 29'unda "
                              "olcmek pencere ucunda biten butun donemleri "
                              "SAHIPSIZ gosterirdi. Cipa 29, olcum 28."),
        "_YAZILMAYAN": ("Bu dosyada HER kenarin kaydi VAR (98/98) - hicbiri "
                        "'okumadim' degil. `hal` alani her birinin nereye "
                        "kadar goturuldugunu soyler."),
        "kenar_sayisi": len(kayitlar),
        "kenarlar": kayitlar,
    }
    yol = os.path.join(D, "SINIR-HUKUKI-ASYA-0907.json")
    json.dump(r, io.open(yol, "w", encoding="utf-8"),
              ensure_ascii=False, separators=(",", ":"))

    c = collections.Counter(k["cins"] for k in kayitlar)
    h = collections.Counter(k["hal"] for k in kayitlar)
    print("KAYIT:", len(kayitlar), "· dosya:", os.path.getsize(yol), "bayt")
    print("hal :", dict(h))
    print("cins:", dict(c))
    print()
    for cc in ("1923te-ic-hat", "yontem-celiskisi", "gercek-sinir-adayi",
               "kenar-yani-bos", "atlas-noktasi-yok", "kimlik-degil"):
        v = [k for k in kayitlar if k["cins"] == cc]
        print("--- %s (%d)" % (cc, len(v)))
        for k in v:
            print("     %-24s %-24s  %s / %s"
                  % (k["ne_a"][:24], k["ne_b"][:24],
                     str(k["kimlik_1923"]["a"])[:24], str(k["kimlik_1923"]["b"])[:24]))


if __name__ == "__main__":
    main()
