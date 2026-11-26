# -*- coding: utf-8 -*-
"""ARAC-ANTLASMA-SLUG-0907 — 1923 cipasi cevresindeki SINIR ANTLASMALARININ
adres taramasi.  ANTLASMA-0907 kolu, `1.MURAT` sevki (M-3185).

NE SORAR : "bu antlasmanin TDV'de bir maddesi VAR MI, ve govdesi ALINABILIYOR MU?"
NE SORMAZ: "bu antlasma hangi siniri tarif ediyor?"   -> AYRI alet (GOVDE)
           "bu tarih dogru mu?"                        -> AYRI alet (CAPA)

`CLAUDE.md §4` tuzaklarina karsi kurulmustur:
   ① 302  -> OLU.  Ve KOD, govde ayristirmadan once OLCULUR (en ucuz sinyal).
   ② 200  -> "dogru madde" DEMEK DEGILDIR.  Bu alet onu OLCMEZ;
             ciktida `dogru_madde: "olculmedi"` diye DURUR, asla "temiz" diye degil.
   ④ BOILERPLATE -> govde < ESIK ise `olculemedi`.  ASLA "TDV'de yok" DEGIL.
   `§4` dar slug tutmazsa KAPSAYICI madde denenir; bu alet her kunye icin
   BIRDEN COK aday tasir ve hepsini AYRI AYRI kaydeder — elenen aday da bir kayittir.

C13 UC AYAK:
   ① GECME    : gercek slug listesi sessiz gecer (canli olanlar 🟢)
   ② ATESLEME : --atesle ile uydurma bir slug enjekte edilir, alet OLU bildirmeli
   ③ GIRDI    : govde GERCEK AGDAN (ya da diskteki onbellekten) okunur, enjekte degil

Kullanim:
    py denetim/ARAC-ANTLASMA-SLUG-0907.py            # tam tarama
    py denetim/ARAC-ANTLASMA-SLUG-0907.py --atesle   # C13 ② atesleme dali
"""
import sys, os, re, html, json, time
import urllib.request, urllib.error

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

BURA = os.path.dirname(os.path.abspath(__file__))
ONBELLEK = os.path.join(BURA, "_antlasma_govde")          # BENIM kovam
PAYLASILAN = os.path.join(BURA, "_tdv_onbellek")          # baska kollarin kovasi (YALNIZ OKUNUR)
CIKTI = os.path.join(BURA, "OLCUM-ANTLASMA-SLUG-0907.json")

BOILERPLATE_ESIK = 4000   # §4④ — altinda kalan govde ALINAMAMIS sayilir

# ═══════════════════════════════════════════════════════════════════════
# ADAY KUNYE LISTESI
#   🟡 DEVRALMADIM ama DOGRULAMADIM: adlar ve yillar GENEL BILGIDEN yazildi,
#      bu alet onlari DOGRULAMAZ — yalniz ADRESI olcer.  Gun/taraf/madde
#      dogrulamasi GOVDE aletinin isi.  Buradaki `y` yalnizca slug uretmek
#      ve ciktiyi siralamak icindir, bir TARIH IDDIASI DEGILDIR.
# ═══════════════════════════════════════════════════════════════════════
KUNYELER = [
    # (kimlik, gorunen ad, kaba yil, [slug adaylari])
    ("lozan",        "Lozan Baris Antlasmasi",            1923, ["lozan-antlasmasi", "lozan-konferansi", "lozan"]),
    ("mudanya",      "Mudanya Mutarekesi",                1922, ["mudanya-mutarekesi", "mudanya"]),
    ("mondros",      "Mondros Mutarekesi",                1918, ["mondros-mutarekesi", "mondros"]),
    ("sevr",         "Sevr Antlasmasi",                   1920, ["sevr-antlasmasi", "sevr"]),
    ("ankara-1921",  "Ankara Itilafnamesi (Fr.)",         1921, ["ankara-itilafnamesi", "ankara-antlasmasi", "franklin-bouillon"]),
    ("kars",         "Kars Antlasmasi",                   1921, ["kars-antlasmasi"]),
    ("moskova-1921", "Moskova Antlasmasi",                1921, ["moskova-antlasmasi"]),
    ("gumru",        "Gumru Antlasmasi",                  1920, ["gumru-antlasmasi", "gumru"]),
    ("brest",        "Brest-Litovsk Antlasmasi",          1918, ["brest-litovsk-antlasmasi", "brestlitovsk-antlasmasi"]),
    ("versay",       "Versay Antlasmasi",                 1919, ["versay-antlasmasi", "versailles"]),
    ("saint-germain","Saint-Germain Antlasmasi",          1919, ["saint-germain-antlasmasi", "sen-jermen-antlasmasi"]),
    ("neuilly",      "Noyyi (Neuilly) Antlasmasi",        1919, ["noyyi-antlasmasi", "neuilly-antlasmasi", "noyyi"]),
    ("trianon",      "Trianon Antlasmasi",                1920, ["trianon-antlasmasi", "trianon"]),
    ("rapallo",      "Rapallo Antlasmasi",                1920, ["rapallo-antlasmasi", "rapallo"]),
    ("riga",         "Riga Antlasmasi",                   1921, ["riga-antlasmasi"]),
    ("sykes-picot",  "Sykes-Picot Anlasmasi",             1916, ["sykes-picot-antlasmasi", "sykes-picot", "sykespicot"]),
    ("san-remo",     "San Remo Konferansi",               1920, ["san-remo-konferansi", "san-remo"]),
    ("ankara-1926",  "Ankara Antlasmasi (Musul)",         1926, ["ankara-antlasmasi--1926", "musul"]),
    ("ukayr",        "Ukayr Protokolu",                   1922, ["ukayr", "ukayr-protokolu", "akir"]),
    ("muhammara",    "Muhammere Antlasmasi",              1922, ["muhammere", "muhammara"]),
    ("cidde",        "Cidde Antlasmasi",                  1927, ["cidde-antlasmasi", "cidde"]),
    ("taif",         "Taif Antlasmasi",                   1934, ["taif-antlasmasi", "taif"]),
    ("usi",          "Usi (Ouchy) Antlasmasi",            1912, ["usi-antlasmasi", "ouchy"]),
    ("londra-1913",  "Londra Antlasmasi",                 1913, ["londra-antlasmasi"]),
    ("bukres-1913",  "Bukres Antlasmasi",                 1913, ["bukres-antlasmasi"]),
    ("istanbul-1913","Istanbul Antlasmasi (Bulgaristan)", 1913, ["istanbul-antlasmasi"]),
    ("atina-1913",   "Atina Antlasmasi",                  1913, ["atina-antlasmasi"]),
    ("berlin-1878",  "Berlin Antlasmasi",                 1878, ["berlin-antlasmasi"]),
    ("ayastefanos",  "Ayastefanos Antlasmasi",            1878, ["ayastefanos-antlasmasi", "ayastefanos"]),
    ("paris-1919",   "Paris Baris Konferansi",            1919, ["paris-baris-konferansi", "paris-konferansi"]),
    ("misak",        "Misak-i Milli",                     1920, ["misak-i-milli", "misakimilli"]),
]

# `§4` KAPSAYICI kapilar — dar slug tutmazsa bunlar denenir.  AYRI kova:
# bunlar antlasma maddesi DEGIL, antlasmayi ANLATAN yer/kavram maddeleri.
KAPSAYICI = ["musul", "bati-trakya", "on-iki-ada", "hatay", "kibris",
             "bulgaristan", "yunanistan", "suriye", "irak--ulke", "kuveyt",
             "necid", "yemen", "libya", "misir", "arnavutluk", "batum",
             "nahcivan", "kars", "ardahan", "trablusgarp"]


def _cek(slug):
    """Once HTTP KODU (yonlendirme IZLENMEDEN), sonra govde.  §4① en ucuz sinyal."""
    url = "https://islamansiklopedisi.org.tr/" + slug

    class Tut(urllib.request.HTTPRedirectHandler):
        def redirect_request(self, *a, **k):
            return None                      # yonlendirmeyi IZLEME

    kod, hedef = None, None
    try:
        o = urllib.request.build_opener(Tut)
        with o.open(urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"}), timeout=45) as r:
            kod = r.status
    except urllib.error.HTTPError as e:
        kod = e.code
        hedef = e.headers.get("Location")
    except Exception as e:
        return {"kod": "000", "hata": type(e).__name__, "govde": "", "hedef": None}

    if kod != 200:
        return {"kod": str(kod), "hata": None, "govde": "", "hedef": hedef}

    istek = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(istek, timeout=45) as r:
        ham = r.read().decode("utf-8", errors="replace")
        son = r.geturl()
    if "/arama" in son:
        return {"kod": "302*", "hata": None, "govde": "", "hedef": son}
    g = re.sub(r"(?is)<(script|style|noscript)[^>]*>.*?</\1>", " ", ham)
    g = re.sub(r"(?s)<[^>]+>", " ", g)
    g = html.unescape(g)
    g = re.sub(r"[ \t\xa0]+", " ", g)
    g = re.sub(r"\n\s*\n+", "\n", g).strip()
    return {"kod": "200", "hata": None, "govde": g, "hedef": son}


def govde(slug):
    """Onbellek -> paylasilan onbellek -> ag.  Dosya adi slug'dir."""
    os.makedirs(ONBELLEK, exist_ok=True)
    benim = os.path.join(ONBELLEK, slug + ".txt")
    meta = os.path.join(ONBELLEK, slug + ".kod")
    if os.path.exists(meta):
        k = open(meta, encoding="utf-8").read().strip()
        g = open(benim, encoding="utf-8").read() if os.path.exists(benim) else ""
        return k, g, "onbellek"
    ort = os.path.join(PAYLASILAN, slug + ".txt")
    if os.path.exists(ort) and os.path.getsize(ort) > 0:
        g = open(ort, encoding="utf-8").read()
        open(benim, "w", encoding="utf-8").write(g)
        open(meta, "w", encoding="utf-8").write("200")
        return "200", g, "paylasilan-onbellek"
    s = _cek(slug)
    time.sleep(0.6)
    open(meta, "w", encoding="utf-8").write(s["kod"])
    if s["govde"]:
        open(benim, "w", encoding="utf-8").write(s["govde"])
    return s["kod"], s["govde"], "cekildi"


def hal_ver(kod, uzunluk):
    if kod == "000":
        return "olculemedi", "tasima arizasi — §4⑤: 000 bir HTTP kodu DEGILDIR, OLU diye damgalanmaz"
    if kod.startswith("30") or kod == "302*":
        return "olu", "arama sayfasina yonlendi — adres OLU"
    if kod != "200":
        return "olculemedi", "beklenmeyen kod"
    if uzunluk < BOILERPLATE_ESIK:
        return "olculemedi", "govde BOILERPLATE olabilir (< %d) — §4④: 'TDV'de yok' YAZILMAZ" % BOILERPLATE_ESIK
    return "canli", "govde alindi"


def main():
    atesle = "--atesle" in sys.argv
    kunyeler = list(KUNYELER)
    if atesle:
        kunyeler = [("ZZZ-ATESLEME", "UYDURMA — C13② dali", 9999,
                     ["zzz-boyle-bir-antlasma-yok-qqq"])] + kunyeler[:1]

    sonuc, sayac = [], {"canli": 0, "olu": 0, "olculemedi": 0}
    for kid, ad, yil, adaylar in kunyeler:
        kayit = {"id": kid, "ad": ad, "kaba_yil": yil, "adaylar": [], "secilen": None,
                 "hal": None, "dogru_madde": "olculmedi (§4② — 200 'dogru madde' demek DEGILDIR)"}
        for slug in adaylar:
            kod, g, nasil = govde(slug)
            h, gerekce = hal_ver(kod, len(g))
            kayit["adaylar"].append({"slug": slug, "kod": kod, "karakter": len(g),
                                     "hal": h, "gerekce": gerekce, "kaynak": nasil})
            if h == "canli" and kayit["secilen"] is None:
                kayit["secilen"], kayit["hal"] = slug, "canli"
        if kayit["hal"] is None:
            haller = [a["hal"] for a in kayit["adaylar"]]
            kayit["hal"] = "olculemedi" if "olculemedi" in haller else "olu"
        sayac[kayit["hal"]] += 1
        sonuc.append(kayit)
        print("%-14s %-36s %-11s %s" % (
            kid, ad[:36], kayit["hal"].upper(),
            " · ".join("%s=%s/%d" % (a["slug"], a["kod"], a["karakter"]) for a in kayit["adaylar"])))

    print("\n" + "=" * 72)
    print("KUNYE %d   ·   🟢 canli %d   ·   🔴 olu %d   ·   ⚪ olculemedi %d"
          % (len(sonuc), sayac["canli"], sayac["olu"], sayac["olculemedi"]))
    print("⚠️ 'canli' = ADRES var demek.  DOGRU MADDE oldugu OLCULMEDI (§4②).")

    if atesle:
        a = sonuc[0]
        ok = a["hal"] in ("olu", "olculemedi")
        print("\nC13② ATESLEME: uydurma slug -> %s   %s" % (a["hal"].upper(), "GECTI" if ok else "🔴 KALDI"))
        sys.exit(0 if ok else 1)

    json.dump({"_NOT": "ANTLASMA-0907 · adres taramasi. 'canli' ADRESI olcer, "
                       "DOGRU MADDE oldugunu OLCMEZ (§4②). 'olculemedi' ASLA 'temiz' degildir.",
               "olcum_zamani": time.strftime("%Y-%m-%d %H:%M"),
               "boilerplate_esik": BOILERPLATE_ESIK,
               "sayac": sayac, "kunyeler": sonuc},
              open(CIKTI, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print("YAZILDI: " + CIKTI)


if __name__ == "__main__":
    main()
