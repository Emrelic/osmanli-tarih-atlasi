# -*- coding: utf-8 -*-
"""ARAC-SINIR-GAFRIKA-TDV-0907 — bolgemin TDV slug yogunlugunu OLCER.

NICIN   Sevkte iki sayi devraldim: bati Afrika 26/38 CANLI (%68) ·
        guney Afrika 8/32 (%25). Bunlar BASKA bir oturumun olcumu ve
        `§4`un kendi dersi: "bir bolgede olculen kaynak yogunlugu, komsu
        bolge icin bir tahmin BILE degildir." ORTA ve DOGU Afrika hic
        olculmemis. Dordunu de KENDIM olcuyorum.

SORAR   "bu slug CANLI mi?"        (HTTP kodu — 302 OLU, 200 canli)
SORMAZ  "acilan madde DOGRU madde mi?"   (`§4②` — `ordu` askeri ordudur)
        ⇒ 200 donenler `⚪ CANLI ama DOGRULANMADI` kovasina yazilir,
          ASLA "temiz" diye degil.
"""
import io
import json
import os
import sys
import urllib.request

try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CIKTI = os.path.join(KOK, "denetim", "_gafrika_tdv.json")
TDV = "https://islamansiklopedisi.org.tr/%s"

# NE adi -> denenecek TDV sluglari (dar -> kapsayici)
ADAYLAR = {
    "Nigeria": ["nijerya"], "Ghana": ["gana"], "Mali": ["mali"],
    "Senegal": ["senegal"], "Niger": ["nijer"], "Chad": ["cad"],
    "Cameroon": ["kamerun"], "Gabon": ["gabon"], "Congo": ["kongo"],
    "Dem. Rep. Congo": ["zaire", "kongo-demokratik-cumhuriyeti"],
    "Angola": ["angola"], "Mozambique": ["mozambik"],
    "Zimbabwe": ["zimbabve"], "Zambia": ["zambiya"], "Malawi": ["malavi"],
    "South Africa": ["guney-afrika-cumhuriyeti"], "Namibia": ["namibya"],
    "Botswana": ["botsvana"], "Lesotho": ["lesotho"], "eSwatini": ["svaziland"],
    "Madagascar": ["madagaskar"], "Comoros": ["komor-adalari", "komorlar"],
    "Mauritania": ["moritanya"], "Guinea": ["gine"],
    "Guinea-Bissau": ["gine-bissau"], "Sierra Leone": ["sierra-leone"],
    "Liberia": ["liberya"], "Cote d'Ivoire": ["fildisi-sahili"],
    "Burkina Faso": ["burkina-faso"], "Togo": ["togo"], "Benin": ["benin"],
    "Gambia": ["gambiya"], "Cabo Verde": ["yesilburun-adalari", "kabo-verde"],
    "Ethiopia": ["habesistan", "etiyopya"], "Eritrea": ["eritre"],
    "Djibouti": ["cibuti"], "Somalia": ["somali"], "Somaliland": ["somaliland"],
    "Kenya": ["kenya"], "Uganda": ["uganda"], "Tanzania": ["tanzanya"],
    "Rwanda": ["ruanda"], "Burundi": ["burundi"],
    "Central African Rep.": ["orta-afrika-cumhuriyeti"],
    "Eq. Guinea": ["ekvator-ginesi"],
    "Sao Tome and Principe": ["sao-tome-ve-principe"],
    "S. Sudan": ["guney-sudan"], "Sudan": ["sudan"],
    # kapsayici / tarihi maddeler — `§4`: dar slug tutmazsa kapsayiciyi dene
    "_KAPSAYICI": ["afrika", "sudan--bati-afrika", "fransa", "ingiltere",
                   "sömürgecilik", "somurgecilik", "berlin-konferansi"],
}
BOLGE = {  # NE SUBREGION karsiligi — dort bolgeyi AYRI raporlamak icin
    "Western Africa": "BATI", "Middle Africa": "ORTA",
    "Eastern Africa": "DOGU", "Southern Africa": "GUNEY",
    "Northern Africa": "KUZEY",
}


def kod(slug):
    """HTTP kodu dondurur. 000 BIR HTTP KODU DEGIL - tasima arizasi (`§4⑤`)."""
    url = TDV % slug
    try:
        r = urllib.request.urlopen(
            urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"}),
            timeout=25)
        son = r.geturl()
        return r.getcode(), son
    except urllib.error.HTTPError as e:
        return e.code, url
    except Exception:
        return 0, url


def main():
    with io.open(os.path.join(KOK, "veri-kaynak",
                              "ne_10m_admin_0_countries.geojson"),
                 encoding="utf-8") as f:
        ozl = json.load(f)["features"]
    alt = {p["properties"]["NAME"]: p["properties"].get("SUBREGION")
           for p in ozl}

    sonuc, sayac = {}, {}
    for ne_ad, slugs in ADAYLAR.items():
        for s in slugs:
            c, son = kod(s)
            # yonlendirme sinavi: arama sayfasina dustuyse OLU
            olu = (c == 302) or ("arama" in son)
            durum = ("OLCULEMEDI" if c == 0 else ("CANLI" if c == 200 and not olu
                                                  else "OLU"))
            sonuc.setdefault(ne_ad, []).append(
                {"slug": s, "kod": c, "durum": durum, "son_url": son})
            print("%-24s %-32s %s %s" % (ne_ad, s, c, durum))
            if durum == "CANLI":
                break
        b = BOLGE.get(alt.get(ne_ad), "?") if ne_ad != "_KAPSAYICI" else "KAPSAYICI"
        d = sonuc[ne_ad][-1]["durum"]
        sayac.setdefault(b, {"CANLI": 0, "OLU": 0, "OLCULEMEDI": 0})
        sayac[b][d] += 1

    print("\n=== BOLGE BASINA (girdi basina EN IYI sonuc) ===")
    for b in ("BATI", "ORTA", "DOGU", "GUNEY", "KUZEY", "?", "KAPSAYICI"):
        if b in sayac:
            v = sayac[b]
            t = sum(v.values())
            print("  %-10s CANLI %2d / %2d  (%%%.0f) · OLU %2d · OLCULEMEDI %d"
                  % (b, v["CANLI"], t, 100.0 * v["CANLI"] / t if t else 0,
                     v["OLU"], v["OLCULEMEDI"]))
    with io.open(CIKTI, "w", encoding="utf-8") as f:
        json.dump({"_NOT": "CANLI = 200 ve arama sayfasina dusmedi. "
                           "'DOGRU madde' OLCULMEDI (§4②).",
                   "sonuc": sonuc, "sayac": sayac}, f, ensure_ascii=False,
                  indent=1)
    print("\nyazildi: %s" % CIKTI)
    return 0


if __name__ == "__main__":
    sys.exit(main())
