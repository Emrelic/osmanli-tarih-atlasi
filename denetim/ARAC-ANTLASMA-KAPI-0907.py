# -*- coding: utf-8 -*-
"""ARAC-ANTLASMA-KAPI-0907 — OLU cikan antlasmalar icin `§4` KAPSAYICI MADDE kapisi.

`CLAUDE.md §4`:
   "dar slug tutmazsa, KAPSAYICI maddeyi dene"
   "kapsayici maddenin BAGLANTILARI bir SLUG DIZINIDIR" (ammarogullari vakasi:
    yedi kez tahmin edildi, bir kez ARANDI — aramak tuttu)
   "kapsayici madde genellikle YER ya da KISI maddesidir" (553 slug taramasi:
    OLAY sluglarinin %100'u olu, YER/KISI'nin %2'si)

NE YAPAR:
   ① kapsayici maddenin HAM HTML'ini ceker, ICERIDEKI TUM /slug baglantilarini
      cikarir -> gercek bir slug dizini olusur (TAHMIN EDILMEZ)
   ② govdesinde antlasma adlarini arar; bulursa CUMLESINI basar
      (§4⑧: rakam/ad gecmesi "destekliyor" demek DEGILDIR — cumle OKUNUR)

NE YAPMAZ:
   - cumlenin neyi tarihledigine HUKUM VERMEZ. Onu insan okur.
   - "bulunamadi" YAZMAZ; yalnizca aday uretir ya da uretmez.

Kullanim: py denetim/ARAC-ANTLASMA-KAPI-0907.py
"""
import sys, os, re, html, json, time
import urllib.request, urllib.error

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

BURA = os.path.dirname(os.path.abspath(__file__))
HAM = os.path.join(BURA, "_antlasma_govde", "_ham")
CIKTI = os.path.join(BURA, "OLCUM-ANTLASMA-KAPI-0907.json")
BOILERPLATE_ESIK = 4000

# OLU cikan kunye  ->  denenecek KAPSAYICI kapilar (YER ya da KISI maddeleri)
KAPILAR = {
    "ankara-1921":   ["suriye", "hatay", "misak-i-milli", "lozan-antlasmasi"],
    "kars":          ["kars", "ardahan", "ermenistan", "gurcistan"],
    "moskova-1921":  ["batum", "nahcivan", "azerbaycan"],
    "gumru":         ["ermenistan", "gumru--sehir"],
    "ankara-1926":   ["musul--irak", "kerkuk", "irak--ulke", "musul-meselesi"],
    "ukayr":         ["necid", "kuveyt", "abdulaziz-b-abdurrahman"],
    "muhammara":     ["kuveyt", "irak--ulke", "necid"],
    "usi":           ["trablusgarp", "libya"],
    "londra-1913":   ["balkan-savasi", "balkan-harbi"],
    "bukres-1913":   ["balkan-savasi", "romanya"],
    "istanbul-1913": ["balkan-savasi", "bulgaristan"],
    "atina-1913":    ["balkan-savasi", "yunanistan"],
    "versay":        ["birinci-dunya-savasi", "almanya"],
    "trianon":       ["macaristan"],
    "saint-germain": ["avusturya"],
    "neuilly":       ["bulgaristan"],
    "san-remo":      ["manda", "filistin", "suriye"],
    "brest":         ["rusya", "birinci-dunya-savasi"],
    "riga":          ["polonya", "lehistan"],
    "rapallo":       ["italya", "yugoslavya"],
    "paris-1919":    ["birinci-dunya-savasi"],
    "sevr-EK":       ["sevr-antlasmasi"],      # CANLI — bagl. dizini icin taranir
    "lozan-EK":      ["lozan-antlasmasi"],     # CANLI — bagl. dizini icin taranir
}

# Kapida ARANACAK ifadeler.  Sinir korumasi: yil (?<!\d)YYYY(?!\d).
ARANAN = {
    "ankara-1921":   ["Ankara İtilâfnâmesi", "Ankara itilâfnâmesi", "20 Ekim 1921", "1921"],
    "kars":          ["Kars Antlaşması", "Kars antlaşması", "13 Ekim 1921"],
    "moskova-1921":  ["Moskova Antlaşması", "16 Mart 1921"],
    "gumru":         ["Gümrü", "3 Aralık 1920"],
    "ankara-1926":   ["Ankara Antlaşması", "5 Haziran 1926", "1926"],
    "ukayr":         ["Ukayr", "Ukâyr", "Akîr"],
    "muhammara":     ["Muhammere", "Muhammara"],
    "usi":           ["Uşi", "Ouchy", "18 Ekim 1912"],
    "londra-1913":   ["Londra Antlaşması", "30 Mayıs 1913"],
    "bukres-1913":   ["Bükreş", "10 Ağustos 1913"],
    "istanbul-1913": ["İstanbul Antlaşması", "29 Eylül 1913"],
    "atina-1913":    ["Atina Antlaşması", "14 Kasım 1913"],
    "versay":        ["Versay", "28 Haziran 1919"],
    "trianon":       ["Trianon", "4 Haziran 1920"],
    "saint-germain": ["Saint-Germain", "Sen Jermen", "10 Eylül 1919"],
    "neuilly":       ["Nöyyi", "Neuilly", "27 Kasım 1919"],
    "san-remo":      ["San Remo", "25 Nisan 1920"],
    "brest":         ["Brest-Litovsk", "3 Mart 1918"],
    "riga":          ["Riga", "18 Mart 1921"],
    "rapallo":       ["Rapallo", "12 Kasım 1920"],
    "paris-1919":    ["Paris Barış Konferansı", "18 Ocak 1919"],
    "sevr-EK":       ["sınır", "Musul", "Trakya"],
    "lozan-EK":      ["sınır", "Musul", "Trakya"],
}


def ham_cek(slug):
    os.makedirs(HAM, exist_ok=True)
    yol = os.path.join(HAM, slug + ".html")
    if os.path.exists(yol):
        return open(yol, encoding="utf-8").read(), "onbellek"

    class Tut(urllib.request.HTTPRedirectHandler):
        def redirect_request(self, *a, **k):
            return None

    url = "https://islamansiklopedisi.org.tr/" + slug
    try:
        o = urllib.request.build_opener(Tut)
        with o.open(urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"}), timeout=45) as r:
            if r.status != 200:
                open(yol, "w", encoding="utf-8").write("")
                return "", "kod-%s" % r.status
            ham = r.read().decode("utf-8", errors="replace")
    except urllib.error.HTTPError as e:
        open(yol, "w", encoding="utf-8").write("")
        return "", "kod-%d" % e.code
    except Exception as e:
        return "", "000-" + type(e).__name__
    open(yol, "w", encoding="utf-8").write(ham)
    time.sleep(0.6)
    return ham, "cekildi"


def metne(ham):
    g = re.sub(r"(?is)<(script|style|noscript)[^>]*>.*?</\1>", " ", ham)
    g = re.sub(r"(?s)<[^>]+>", " ", g)
    g = html.unescape(g)
    g = re.sub(r"[ \t\xa0]+", " ", g)
    return re.sub(r"\n\s*\n+", "\n", g).strip()


def baglantilar(ham):
    """Kapsayici maddenin KENDI capraz atiflari — bir SLUG DIZINI."""
    d = {}
    for m in re.finditer(r'<a[^>]+href="(?:https?://islamansiklopedisi\.org\.tr)?/([a-z0-9\-]{3,80})"[^>]*>(.{0,120}?)</a>',
                         ham, re.I | re.S):
        slug, etiket = m.group(1), metne(m.group(2)).strip()
        if slug in ("arama", "iletisim", "hakkimizda", "kunye"):
            continue
        d.setdefault(slug, etiket)
    return d


def cumleler(t):
    return [c.strip() for c in re.split(r"(?<=[.!?])\s+|\n", t) if c.strip()]


def main():
    sonuc = {}
    for kid, kapilar in KAPILAR.items():
        kayit = {"kapilar": [], "bulunan_cumle": [], "aday_slug": {}}
        for slug in kapilar:
            ham, nasil = ham_cek(slug)
            t = metne(ham)
            hal = ("olu" if not ham else
                   "olculemedi" if len(t) < BOILERPLATE_ESIK else "canli")
            kayit["kapilar"].append({"slug": slug, "hal": hal, "karakter": len(t), "kaynak": nasil})
            if hal != "canli":
                continue
            bl = baglantilar(ham)
            cs = cumleler(t)
            for a in ARANAN.get(kid, []):
                desen = (re.compile(r"(?<!\d)" + a + r"(?!\d)") if re.fullmatch(r"\d{4}", a)
                         else re.compile(re.escape(a), re.I))
                for c in cs:
                    if desen.search(c) and len(kayit["bulunan_cumle"]) < 40:
                        kayit["bulunan_cumle"].append({"kapi": slug, "aranan": a, "cumle": c[:420]})
            for s, e in bl.items():
                if any(x in s for x in ("antlasma", "muahede", "itilaf", "mutareke", "protokol", "konferans")):
                    kayit["aday_slug"][s] = e
        sonuc[kid] = kayit
        print("%-14s kapi:%s  cumle:%d  aday-slug:%d" % (
            kid, ",".join("%s/%s" % (k["slug"], k["hal"][:4]) for k in kayit["kapilar"]),
            len(kayit["bulunan_cumle"]), len(kayit["aday_slug"])))

    json.dump({"_NOT": "§4 kapsayici kapi taramasi. Bulunan cumle bir DAYANAK DEGIL, bir ADAYDIR — "
                       "§4⑧: ad/rakam gecmesi govdenin o degeri DESTEKLEDIGI anlamina gelmez, cumle OKUNUR.",
               "olcum_zamani": time.strftime("%Y-%m-%d %H:%M"), "sonuc": sonuc},
              open(CIKTI, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print("\nYAZILDI: " + CIKTI)


if __name__ == "__main__":
    main()
