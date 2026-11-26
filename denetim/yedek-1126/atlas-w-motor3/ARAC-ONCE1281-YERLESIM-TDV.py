# -*- coding: utf-8 -*-
"""ONCE1281-YERLESIM-OLC · ③ — çekirdek kovada (Anadolu · Suriye · Irak · Mısır ·
İran · Mâverâünnehir) TDV YER maddesi ve 1000-1281 kuşağında varlık tanıklığı.

Yöntem (ÖLÇÜM, hüküm değil):
  1. Kova: koordinat kutusu (aşağıda, sırayla ilk tutan kazanır). `tur:"bolge"` hariç.
  2. Slug: adın parantez dışı + parantez içi biçimleri, Türkçe → ASCII, boşluk → '-'.
     302 TAKİP EDİLMEZ (ölü slug, CLAUDE.md §4 tuzak ①). `000` = taşıma arızası.
  3. Madde canlıysa gövdede 1000-1280 arası MİLADÎ yıl taşıyan cümle aranır.
     Bulunursa `var-aday` + CÜMLE birebir alıntı (insan teyidi bekler: rakamı
     taşıyan cümlenin NEYİ tarihlediği okunmalı — tuzak ⑧).
     Bulunmazsa `ölçülemedi`. "yok" HİÇ yazılmaz.
Kullanım: py denetim/ARAC-ONCE1281-YERLESIM-TDV.py [--say] [--cik <json>]
Önbellek: denetim/ONCE1281-YERLESIM-tdv-onbellek/<slug>.txt (ilk satır: HTTP kodu)
"""
import sys, io, os, re, json, html, time, urllib.request, urllib.error, urllib.parse
from concurrent.futures import ThreadPoolExecutor
if __name__ == "__main__":
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi

DIZ = os.path.join(KOK, "denetim", "ONCE1281-YERLESIM-tdv-onbellek")
os.makedirs(DIZ, exist_ok=True)

# (ad, lat_min, lat_max, lon_min, lon_max) — SIRA önemli
KOVALAR = [
    ("Suriye",         29.3, 36.6, 34.0, 38.8),   # Halep·Antakya Suriye'ye
    ("Irak",           29.0, 37.3, 38.8, 48.6),   # Cezîre (Urfa·Mardin·Musul) Irak'a
    ("Anadolu",        36.0, 42.3, 25.9, 44.8),
    ("Mısır",          22.0, 31.8, 24.5, 34.9),
    ("Mâverâünnehir",  36.5, 45.5, 60.0, 76.0),
    ("İran",           25.0, 40.0, 44.0, 63.5),
]

_TR = str.maketrans({"İ": "i", "I": "i", "ı": "i", "Ş": "s", "ş": "s", "Ğ": "g",
                     "ğ": "g", "Ü": "u", "ü": "u", "Ö": "o", "ö": "o", "Ç": "c",
                     "ç": "c", "Â": "a", "â": "a", "Î": "i", "î": "i", "Û": "u",
                     "û": "u"})
import unicodedata as _u


def slugla(s):
    s = s.translate(_TR)
    s = _u.normalize("NFKD", s)
    s = "".join(c for c in s if not _u.combining(c)).lower()
    s = re.sub(r"[ʻʼ'’`]", "", s)
    s = re.sub(r"[^a-z0-9]+", "-", s).strip("-")
    return s


def adaylar(ad):
    parca = [ad.split("(")[0]] + re.findall(r"\(([^)]*)\)", ad)
    out = []
    for p in parca:
        for q in re.split(r"[/,;]| veya ", p):
            q = q.strip()
            if len(q) < 3:
                continue
            sl = slugla(q)
            if sl and sl not in out:
                out.append(sl)
    return out


def kova(y):
    for ad, a, b, c, d in KOVALAR:
        if a <= y["lat"] <= b and c <= y["lon"] <= d:
            return ad
    return None


class _Yok(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, *a, **k):
        return None


_ac = urllib.request.build_opener(_Yok)


def duz(h):
    t = re.sub(r"<script.*?</script>", " ", h, flags=re.S | re.I)
    t = re.sub(r"<style.*?</style>", " ", t, flags=re.S | re.I)
    t = re.sub(r"<(br|/p|/div|/h\d|/li)[^>]*>", "\n", t, flags=re.I)
    t = re.sub(r"<[^>]+>", " ", t)
    t = html.unescape(t)
    t = re.sub(r"[ \t\r\f\v]+", " ", t)
    return re.sub(r"\n\s*\n+", "\n", t)


def cek(slug):
    yol = os.path.join(DIZ, slug + ".txt")
    if os.path.exists(yol):
        t = io.open(yol, encoding="utf-8").read()
        kod, _, govde = t.partition("\n")
        return kod, govde
    # 🔴 5xx (ölçüldü: ilk koşuda 741 isteğin 421'i 503) HIZ SINIRIDIR, ölü
    #    slug DEĞİL — önbelleğe YAZILMAZ, bekleyip yeniden denenir.
    for deneme in range(6):
        baslik = ""
        try:
            r = _ac.open(urllib.request.Request("https://islamansiklopedisi.org.tr/" + slug,
                                                headers={"User-Agent": "Mozilla/5.0"}), timeout=40)
            h = r.read().decode("utf-8", "replace")
            kod = str(r.status)
            m = re.search(r"<title>(.*?)</title>", h, re.S | re.I)
            baslik = html.unescape(m.group(1)).strip() if m else ""
            govde = "BASLIK: " + baslik + "\n" + duz(h)
        except urllib.error.HTTPError as e:
            kod, govde = str(e.code), ""
        except Exception as e:
            kod, govde = "000:" + type(e).__name__, ""
        if kod.startswith("5") or kod.startswith("000"):
            time.sleep(4 * (deneme + 1))
            continue
        break
    if not (kod.startswith("5") or kod.startswith("000")):
        io.open(yol, "w", encoding="utf-8").write(kod + "\n" + govde)
    time.sleep(1.0)
    return kod, govde


def cek_arama(kelime):
    """TDV arama sayfası → madde slug listesi (önbellekli, 5xx yazılmaz)."""
    yol = os.path.join(DIZ, "ARAMA-" + kelime + ".txt")
    if os.path.exists(yol):
        t = io.open(yol, encoding="utf-8").read()
        kod, _, g = t.partition("\n")
        return kod, [l for l in g.split("\n") if l]
    for deneme in range(6):
        try:
            r = _ac.open(urllib.request.Request(
                "https://islamansiklopedisi.org.tr/arama/?q=" + urllib.parse.quote(kelime),
                headers={"User-Agent": "Mozilla/5.0"}), timeout=40)
            h = r.read().decode("utf-8", "replace"); kod = str(r.status)
        except urllib.error.HTTPError as e:
            kod, h = str(e.code), ""
        except Exception as e:
            kod, h = "000:" + type(e).__name__, ""
        if kod.startswith("5") or kod.startswith("000"):
            time.sleep(4 * (deneme + 1)); continue
        break
    # ölçüldü: arama sayfası bağlantıları GÖRELİ yazar (href="/slug") — mutlak
    # desen 361 aramanın 361'inde sessiz 0 verdi (D240 ailesi)
    linkler = sorted(set(re.findall(r'href="(?:https://islamansiklopedisi\.org\.tr)?/([a-z0-9][a-z0-9\-]*)"', h)))
    if not (kod.startswith("5") or kod.startswith("000")):
        io.open(yol, "w", encoding="utf-8").write(kod + "\n" + "\n".join(linkler))
    time.sleep(1.0)
    return kod, linkler


YIL = re.compile(r"(?<![\d.,])(1[0-2]\d\d)(?![\d.,])")
YER_SOZU = re.compile(r"\b(şehir|şehri|kasaba|kale|kalesi|liman|merkez|bölge)", re.I)


# 🔴 İlk sürüm her 4 haneli sayıyı yıl sandı; örneklemde (15 kayıt) yanlış
#    pozitifler ölçüldü: "1000 askerin", "1200 akçe", "1000 tona", "milâttan
#    önce 1100", sayfa kalıbındaki `data-width="200"` artığı. Artık yalnız
#    TARİH BİÇİMİNDEKİ yıl sayılır:
#      (1071) · (464/1071) · (431/1040) · (1096-1099) · 1071'de/’te/… · 1071 yılı
TARIH_BICIM = re.compile(
    r"\((?:\d{1,3}\s*/\s*)?(1[0-2]\d\d)(?:\s*-\s*\d{1,4})?\)"
    r"|(?<![\d.,])(1[0-2]\d\d)(?:\s*-\s*\d{2,4})?\s*(?:[’']\s*(?:de|da|te|ta|den|dan|ten|tan|e|a|ye|ya|deki|daki|teki|taki|li|lı|lu|lü)\b| yıl)")
MO = re.compile(r"(milâttan önce|milattan önce|m\.\s?ö\.|mö)\s*$", re.I)
KALIP = ("data-", "style=", "rastgele bir madde", "TDV İslâm Ansiklopedisi '")
YER_IPUCU = re.compile(r"\b(şehir|şehri|kasaba|kalesi|kale|ilçe|ili\b|il merkezi|liman|bölge|ada|nahiye|köy|vilâyet|sancak)", re.I)


def govde_metni(govde):
    return "\n".join(s for s in govde.split("\n")
                     if len(s) > 200 and not any(k in s for k in KALIP))


def yer_maddesi_mi(govde):
    """Madde bir YER maddesi mi — ilk 1500 karakterde yer sözcüğü (tuzak ②:
    `ordu` = ordu teşkilatı, şehir değil)."""
    return bool(YER_IPUCU.search(govde_metni(govde)[:1500]))


def tanik(govde):
    """1000-1280 arası TARİH BİÇİMLİ miladî yıl taşıyan İLK cümle."""
    for cum in re.split(r"(?<=[.!?])\s+", govde_metni(govde)):
        for m in TARIH_BICIM.finditer(cum):
            v = int(m.group(1) or m.group(2))
            # HİCRÎ tuzak (ölçüldü, Milas): "1087’de (1676)" — 1000-1280 hicrî =
            # 1591-1864 miladî. Hemen ardından ≥1281 miladî parantez gelirse atla.
            arka = cum[m.end():m.end() + 14]
            hicri = re.match(r"[^()]{0,6}\((1[3-9]\d\d|12[89]\d)\)", arka)
            if 1000 <= v <= 1280 and not hicri and not MO.search(cum[:m.start()][-25:]):
                return v, cum.strip()[:400]
    return None, None


def main():
    Y = girdi.yukle(sessiz=True)
    evren = [y for y in Y if y.get("tur") != "bolge"]
    kovali = [(kova(y), y) for y in evren]
    kovali = [(k, y) for k, y in kovali if k]
    say = {}
    for k, _ in kovali:
        say[k] = say.get(k, 0) + 1
    print(f"evren {len(Y)} · tur!=bolge {len(evren)} · çekirdek kovada {len(kovali)}: {say}")
    if "--say" in sys.argv:
        return
    isler = []
    for k, y in kovali:
        isler.append((k, y, adaylar(y["ad"])))

    def isle(is_):
        k, y, sl = is_
        denenen = []
        for s in sl:
            kod, g = cek(s)
            denenen.append(f"{s}:{kod}")
            if kod == "200" and len(g) > 2000 and not yer_maddesi_mi(g):
                denenen[-1] += "-yer-maddesi-degil"
                continue
            if kod == "200" and len(g) > 2000:
                v, c = tanik(g)
                bas = g.split("\n", 1)[0].replace("BASLIK: ", "")
                ilk = min((p["f"] for kat in ("s", "d", "v") for p in (y.get(kat) or []) if p.get("f")), default=None)
                return {"ad": y["ad"], "kova": k, "lat": y["lat"], "lon": y["lon"], "tur": y.get("tur"),
                        "ilk_donem": ilk, "slug": s, "tdv_baslik": bas, "denenen": denenen,
                        "varlik": "var-aday" if v else "ölçülemedi",
                        "yil": v, "cumle": c,
                        "kaynak": f"TDV: {s}" + (" — gövde cümlesi, insan teyidi bekler" if v else " — 1000-1280 yılı taşıyan cümle bulunamadı")}
        # Slug ölü → ARAMA (CLAUDE.md §4: "TDV'de yok" demeden ARA). Aramadan
        # yalnız aday slug'la BAŞLAYAN bağlantı alınır (ör. ani → ani--sehir).
        if sl:
            ak, ag = cek_arama(sl[0])
            denenen.append(f"arama:{sl[0]}:{ak}")
            # yalnız "--" ayrım eki (humus--suriye, ordu--sehir). Tek tire
            # ölçüldü: 6 isabetin 5'i YANLIŞ madde (meshed-ulucamii, resid-riza,
            # sari-abdullah-efendi, esref-i-mazenderani, damgan-tarihane-camii)
            for s2 in [l for l in ag if l.startswith(sl[0] + "--")][:2]:
                kod, g = cek(s2)
                denenen.append(f"{s2}:{kod}")
                if kod == "200" and len(g) > 2000 and not yer_maddesi_mi(g):
                    denenen[-1] += "-yer-maddesi-degil"
                    continue
                if kod == "200" and len(g) > 2000:
                    v, c = tanik(g)
                    bas = g.split("\n", 1)[0].replace("BASLIK: ", "")
                    ilk = min((p["f"] for kat in ("s", "d", "v") for p in (y.get(kat) or []) if p.get("f")), default=None)
                    return {"ad": y["ad"], "kova": k, "lat": y["lat"], "lon": y["lon"], "tur": y.get("tur"),
                            "ilk_donem": ilk, "slug": s2, "tdv_baslik": bas, "denenen": denenen,
                            "varlik": "var-aday" if v else "ölçülemedi", "yil": v, "cumle": c,
                            "kaynak": f"TDV: {s2} (aramadan)" + (" — gövde cümlesi, insan teyidi bekler" if v else " — 1000-1280 yılı taşıyan cümle bulunamadı")}
        ilk = min((p["f"] for kat in ("s", "d", "v") for p in (y.get(kat) or []) if p.get("f")), default=None)
        return {"ad": y["ad"], "kova": k, "lat": y["lat"], "lon": y["lon"], "tur": y.get("tur"),
                "ilk_donem": ilk, "slug": None, "tdv_baslik": None, "denenen": denenen,
                "varlik": "ölçülemedi", "yil": None, "cumle": None,
                "kaynak": "TDV maddesi bulunamadı (slug denemesi: " + ", ".join(denenen) + ")"}

    with ThreadPoolExecutor(1) as ex:
        sonuc = list(ex.map(isle, isler))
    ozet = {}
    for r in sonuc:
        o = ozet.setdefault(r["kova"], {"n": 0, "madde": 0, "var_aday": 0, "000": 0})
        o["n"] += 1
        o["madde"] += bool(r["slug"])
        o["var_aday"] += r["varlik"] == "var-aday"
        o["000"] += any(":000" in d for d in r["denenen"])
        o.setdefault("5xx_kalici", 0)
        o["5xx_kalici"] += any(re.search(r":5\d\d$", d) for d in r["denenen"])
        o.setdefault("aramadan", 0)
        o["aramadan"] += "(aramadan)" in (r["kaynak"] or "")
    print(json.dumps(ozet, ensure_ascii=False, indent=1))
    if "--cik" in sys.argv:
        json.dump(sonuc, io.open(sys.argv[sys.argv.index("--cik") + 1], "w", encoding="utf-8"),
                  ensure_ascii=False, indent=1)


if __name__ == "__main__":
    main()
