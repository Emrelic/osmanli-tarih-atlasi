# -*- coding: utf-8 -*-
"""
ARAC-BIRLESTIR-ESLEME-0907 — `hal:"ayni-kimlik"` ESLEME TABLOSUNU URETIR.

    BIRLESTIRICI-0907 · 7 Eylul 2026 · hukum: 1.MURAT (M-3183 · ① ONAY)

NE YAPAR
--------
Alti kolun KENDI yan alanindan, hangi kayitlarin `hal:"ayni-kimlik"`e
cevrilecegini olcer ve UC KOVAYA ayirir. Kollar bu tabloyu okuyup KENDI
dosyalarinda uygular (§7 — dosyalar onlarin); bu alet HICBIR KOL DOSYASINA
YAZMAZ.

🔴 TABLO STATIK DEGIL, URETILIR. Kol dosyalari CANLI: 7 Eylul 15:00-15:35
   arasinda dordu birden degisti (ARAP TUR 2 indi, GAFRIKA `hal_atlas`
   ekledi, KAFRIKA `hal:"ayni-kimlik"` yazmaya basladi). Elle yazilmis bir
   tablo dakikalar icinde bayatlar — CLAUDE.md §1.5: "elle yazma, URET".

KULLANIM
    py denetim/ARAC-BIRLESTIR-ESLEME-0907.py
    py denetim/ARAC-BIRLESTIR-ESLEME-0907.py --json denetim/ESLEME-AYNIKIMLIK-0907.json
"""
import argparse
import collections
import glob
import json
import os
import sys
import time

sys.stdout.reconfigure(encoding="utf-8")


def _gafrika(r):
    """
    🔴 GAFRIKA IKI OLCUT ISTER — ve sebebi OLCULDU, tercih degil.

    Kolun iki alani var ve TEK BASINA ikisi de yaniltiyor:

    `sinif_1923` tek basina  → 7 kaydi 'ayni-kimlik' sayar, oysa atlas
        slug'i BIR UCTA YOK (['fransa-cumhuriyet', None]) ⇒ o kayitlar
        'ayni kimlik' DEGIL 'OLCULEMEDI'.
    `hal_atlas` tek basina   → 6 kaydi 'ayni-kimlik' sayar, oysa bunlar
        GERCEK uluslararasi sinirlar: South Africa|Lesotho ·
        Namibia|Botswana … ikisi de atlasta `ingiltere`ye dusuyor cunku
        ATLAS Ingiliz somurgelerini ayri modellemiyor. Bu bir TARIH hukmu
        degil bir MODEL ARTEFAKTI; uygulanirsa ALTI GERCEK SINIR silinir.

    ⇒ Ikisi de 'evet' diyorsa cevrilir (28 kayit). Kesisim, ihtiyatli olan.
    """
    eski = r.get("sinif_1923") in ("ayni_egemen_farkli_yapi", "ic_idari_cizgi")
    yeni = r.get("hal_atlas") == "ayni-kimlik"
    return eski and yeni


# Her kolun KENDI alani — kimse baskasinin adini kullanmaya zorlanmiyor.
OLCUT = {
    "ANADOLU": ("hal_oneri === 'ic-idari'",
                lambda r: r.get("hal_oneri") == "ic-idari"),
    "ASYA":    ("cins === '1923te-ic-hat'",
                lambda r: r.get("cins") == "1923te-ic-hat"),
    "BALKAN":  ("ic_sinir_1923 === true",
                lambda r: r.get("ic_sinir_1923") is True),
    "GAFRIKA": ("sinif_1923 VE hal_atlas (ikisi birden)", _gafrika),
    "KAFRIKA": ("nitelik_1923 ∈ {ic-idari, yok}",
                lambda r: r.get("nitelik_1923") in ("ic-idari", "yok")),
    "ARAP":    ("kimlik_1923[0] === kimlik_1923[1]",
                lambda r: isinstance(r.get("kimlik_1923"), list)
                and len(r["kimlik_1923"]) == 2
                and r["kimlik_1923"][0] == r["kimlik_1923"][1]),
}

# 🔴 CEVRIM YALNIZ BU KOVADAN YAPILIR.
#    Sebep olculdu: olcut eslesen kayitlarin bir kismi ZATEN `hukuki` ve
#    gercek bir antlasma dayanagi tasiyor (KAFRIKA 3: Fransiz-Ispanyol
#    Antlasmasi 1904 · Misir arretesi 1902 ×2). Onlari cevirmek bir HUKMU
#    YOK ETMEK olur — ve `§11`: bir ihlali kapatan recete GERCEGI SILEBILIR.
CEVRILEBILIR_HAL = ("bulunamadi",)


def yukle(dizin):
    recs, damga = {}, {}
    for f in sorted(glob.glob(os.path.join(dizin, "SINIR-HUKUKI-*-0907.json"))):
        b = os.path.basename(f).split("-")[2]
        d = json.load(open(f, encoding="utf-8"))
        aday = [k for k in d if isinstance(d[k], list) and d[k] and isinstance(d[k][0], dict)]
        if len(aday) != 1:
            print("🔴 %s — kapsayici belirsiz (%d aday), ATLANDI" % (os.path.basename(f), len(aday)))
            continue
        recs[b] = d[aday[0]]
        damga[b] = time.strftime("%Y-%m-%d %H:%M", time.localtime(os.path.getmtime(f)))
    return recs, damga


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--dizin", default="denetim")
    ap.add_argument("--json", dest="json_yol")
    a = ap.parse_args()

    recs, damga = yukle(a.dizin)
    kovalar = {"cevir": [], "dokunma_hukuki": [], "karar_olculemedi": [], "zaten": []}
    ozet = {}

    for b, rs in sorted(recs.items()):
        ad, f = OLCUT.get(b, (None, None))
        c = collections.Counter()
        if f is None:
            print("🔴 %s icin olcut TANIMLI DEGIL — atlandi" % b)
            continue
        for i, r in enumerate(rs):
            if not f(r):
                continue
            kayit = dict(bolge=b, i=i, a=r.get("a"), b=r.get("b"), mevcut_hal=r.get("hal"))
            h = r.get("hal")
            if h == "ayni-kimlik":
                kovalar["zaten"].append(kayit); c["zaten"] += 1
            elif h in CEVRILEBILIR_HAL:
                kovalar["cevir"].append(kayit); c["cevir"] += 1
            elif h == "hukuki":
                kayit["dayanak"] = str(r.get("dayanak"))[:120]
                kovalar["dokunma_hukuki"].append(kayit); c["dokunma"] += 1
            else:
                kovalar["karar_olculemedi"].append(kayit); c["karar"] += 1
        ozet[b] = dict(olcut=ad, damga=damga[b], kayit=len(rs), **dict(c))

    P = print
    P("=" * 78)
    P("ESLEME TABLOSU — hal:'ayni-kimlik'   (uretim: %s)" % time.strftime("%Y-%m-%d %H:%M"))
    P("=" * 78)
    P("%-9s %-12s %-34s %-7s %-8s %-7s %s" % ("BOLGE", "dosya damga", "OLCUT (kolun KENDI alani)",
                                              "CEVIR", "dokunma", "karar", "zaten"))
    for b, o in sorted(ozet.items()):
        P("%-9s %-12s %-34s %-7d %-8d %-7d %d" % (
            b, o["damga"][-5:], o["olcut"], o.get("cevir", 0), o.get("dokunma", 0),
            o.get("karar", 0), o.get("zaten", 0)))
    P("%-9s %-12s %-34s %-7d %-8d %-7d %d" % (
        "TOPLAM", "", "", len(kovalar["cevir"]), len(kovalar["dokunma_hukuki"]),
        len(kovalar["karar_olculemedi"]), len(kovalar["zaten"])))
    P("")
    P("🔴 DOKUNULMAYACAK — olcut esliyor ama `hal` ZATEN 'hukuki'")
    P("   (cevirmek bir HUKMU yok etmek olur; kararlari kollarin)")
    for k in kovalar["dokunma_hukuki"]:
        P("   %-9s #%-4d %-18s|%-18s  %s" % (k["bolge"], k["i"], k["a"], k["b"], k.get("dayanak", "")[:60]))
    P("")
    P("🟡 KARAR GEREKIYOR — olcut esliyor ama `hal` 'olculemedi'")
    P("   ('ayni kimlik' bir OLCUM sonucu; 'olculemedi' bir OLCUM YOKLUGU —")
    P("    ikisini birlestirmek, olculmemis bir kaydi olculmus gostermek olur)")
    for k in kovalar["karar_olculemedi"]:
        P("   %-9s #%-4d %-18s|%-18s" % (k["bolge"], k["i"], k["a"], k["b"]))
    P("")
    once = collections.Counter()
    for b, rs in recs.items():
        once.update(r.get("hal") for r in rs)
    sonra = collections.Counter(once)
    sonra["bulunamadi"] -= len(kovalar["cevir"])
    sonra["ayni-kimlik"] = sonra.get("ayni-kimlik", 0) + len(kovalar["cevir"])
    P("SONUC   ONCE : %s" % dict(once))
    P("        SONRA: %s" % dict(sonra))
    P("=" * 78)

    if a.json_yol:
        with open(a.json_yol, "w", encoding="utf-8") as fh:
            json.dump(dict(
                _NOT="hal:'ayni-kimlik' esleme tablosu — URETILDI, elle yazilmaz. "
                     "Kollar KENDI dosyalarinda uygular (§7); bu alet kol dosyasina YAZMAZ.",
                _URETIM=time.strftime("%Y-%m-%d %H:%M"),
                _KURAL="cevrim YALNIZ hal=='bulunamadi' kayitlarda. 'hukuki' DOKUNULMAZ "
                       "(hukmu yok eder), 'olculemedi' KARAR bekler (olcum yoklugu, "
                       "olcum sonucu degil).",
                ozet=ozet, kovalar=kovalar), fh, ensure_ascii=False, indent=1)
        P("JSON: %s" % a.json_yol)
    return 0


if __name__ == "__main__":
    sys.exit(main())
