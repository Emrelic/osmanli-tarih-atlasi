# -*- coding: utf-8 -*-
"""KRONO-KAYNAK-DENETLE (30 Eylül 2026) — bu akşam yazılan kronolojinin KAYNAK denetimi.

Evren: node vm ile okunur (ARAC-KRONO-KAYNAK-DENETLE-yukle.js -> evren.json).
  statik   : ③ hassasiyet · ④ kırmızı çizgi · ⑤ boş kaynak · slug + alıntı çıkarımı
  cek      : ① TDV slug'larını HAM kodla (yönlendirme İZLENMEZ) çeker, önbelleğe yazar
  alinti   : ② alıntıları çekilen TDV gövdesinde birebir arar
Düzeltme YAPMAZ; data/ altına YAZMAZ.
"""
import sys, io, os, re, json, time, html, unicodedata, importlib.util, urllib.request, urllib.error, http.client
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
_s = importlib.util.spec_from_file_location("normal", os.path.join(KOK, "denetim", "ARAC-NORMAL-0903.py"))
_n = importlib.util.module_from_spec(_s); _s.loader.exec_module(_n)
norm = _n.norm

PENCERE_UCLARI = {"1281-01-01", "1923-10-29", "1945-09-02", "1000-01-01"}


def yukle(yol):
    return json.load(open(yol, encoding="utf-8"))["maddeler"]


# ---------------------------------------------------------------- slug
SLUG_URL = re.compile(r"islamansiklopedisi\.org\.tr/([a-z0-9][a-z0-9\-]*)", re.I)
# "TDV: slug" ya da iki nokta OLMADAN "TDV slug (" / "TDV slug \"" (ardından alıntı/parantez şart —
# yoksa "TDV ve Iranica", "TDV vergi kesintisi" düz cümleleri slug sanılır)
SLUG_TDV = re.compile(r"TDV\s*(?:[:·]\s*([a-z0-9][a-z0-9\-]*)(?=[\s,;.()\"'“”‘’]|$)"
                      r"|\s([a-z0-9][a-z0-9\-]*)(?=\s*[(\"“'«‘]))")


def sluglar(kaynak):
    """[(konum, slug)] — URL ve 'TDV: slug' biçimi. 'arama' sayfası slug sayılmaz."""
    out = []
    for m in SLUG_URL.finditer(kaynak):
        s = m.group(1).lower()
        if s not in ("arama",):
            out.append((m.start(), s))
    for m in SLUG_TDV.finditer(kaynak):
        out.append((m.start(), (m.group(1) or m.group(2)).lower()))
    for m in SLUG_TIK.finditer(kaynak):
        out.append((m.start(), m.group(1).lower()))
    # "TDV İA 'Arnavutluk'" — URL'siz ad: slug addan TÜRETİLİR (ölçümde ayrı sayılır)
    for m in SLUG_AD.finditer(kaynak):
        s = re.sub(r"[^a-z0-9]+", "-", norm(m.group(1))).strip("-")
        if s:
            out.append((m.start(), s))
    return sorted(set(out))


SLUG_TIK = re.compile(r"TDV[^`\n]{0,20}`([a-z0-9][a-z0-9\-]*)`")
SLUG_AD = re.compile(r"TDV İA '([^']{2,40})'(?!\s*\(?[^'\n]{0,40}https?://islamansiklopedisi)")


# ---------------------------------------------------------------- alıntı
ALINTI_RE = [re.compile(r"“([^”]{25,}?)”"), re.compile(r"\"([^\"]{25,}?)\""),
             re.compile(r"(?<![A-Za-zÇĞİÖŞÜçğıöşüâîû])'([^']{25,}?)'(?![A-Za-zÇĞİÖŞÜçğıöşüâîû])"),
             re.compile(r"‘([^’]{25,}?)’"), re.compile(r"«([^»]{25,}?)»")]


def alintilar(metin):
    out = []
    for r in ALINTI_RE:
        for m in r.finditer(metin):
            out.append((m.start(), m.group(1).strip()))
    # iç içe/aynı alıntıyı teke indir
    seen, res = set(), []
    for p, q in sorted(out):
        k = norm(q)
        if k in seen:
            continue
        seen.add(k); res.append((p, q))
    return res


def kaynak_parcalari(kaynak):
    """Her alıntıyı kendinden ÖNCE gelen son kaynak işaretine bağlar.
    işaret: ('tdv', slug) | ('url', url) | ('ad', None)"""
    isaretler = [(p, ("tdv", s)) for p, s in sluglar(kaynak)]
    for m in re.finditer(r"https?://[^\s\"'“”)]+", kaynak):
        if "islamansiklopedisi" not in m.group(0):
            isaretler.append((m.start(), ("url", m.group(0).rstrip(".,;:"))))
    isaretler.sort()
    res = []
    for p, q in alintilar(kaynak):
        onceki = [i for ip, i in isaretler if ip < p]
        res.append((q, onceki[-1] if onceki else ("ad", None)))
    return res


def kimlik(m):
    return {"dosya": m["dosya"], "t": m["t"], "b": m["b"]}


# ---------------------------------------------------------------- statik
def statik(M):
    r = {"evren": len(M)}
    # ⑤ boş kaynak
    bos = [kimlik(m) for m in M if not str(m.get("kaynak", "")).strip()]
    bulunamadi = [m for m in M if "bulunamad" in norm(m.get("kaynak", ""))]
    r["bes_bos_kaynak"] = {"sayi": len(bos), "liste": bos, "bulunamadi_beyanli": len(bulunamadi)}

    # ④ kırmızı çizgi
    # 'wiki' kurumsal olabilir (Wien Geschichte Wiki = Viyana belediyesi) → ayrı kova 'ara_wiki'
    # 'blog' URL yolu kurumsal olabilir (AWM, müze) → ayrı kova 'ara_blog'. Britannica kırmızı listede DEĞİL.
    KIRMIZI = {"wikipedia": r"wikipedia|wikiwand", "vikipedi": r"vikipedi",
               "ara_wiki": r"wiki(?!pedia)", "ara_blog": r"\bblog|blogspot|wordpress|medium\.com",
               "forum": r"forum\b|reddit|quora|eksisozluk|ekşi",
               "icerik_ciftligi": r"worldhistory\.org|ancient\.eu|historyextra|thoughtco|history\.com|ranker|listverse|allaboutturkey|timelines\.ws|fandom|about\.com",
               "yz": r"chatgpt|\bgpt\b|gemini|yapay zek|\bglm\b"}
    ihl = []
    for m in M:
        k = m.get("kaynak", "")
        kn = k.lower()
        for tur, desen in KIRMIZI.items():
            if re.search(desen, kn):
                # tek dayanak mı: kaynakta başka URL/TDV/eser işareti var mı
                digerleri = [u for u in re.findall(r"https?://([^/\s]+)", k)
                             if not re.search(desen, u.lower())]
                tdv = bool(sluglar(k)) or "tdv" in kn
                ihl.append({**kimlik(m), "tur": tur, "tek_dayanak": not digerleri and not tdv,
                            "kaynak": k[:400]})
    r["dort_kirmizi"] = {"sayi": len(ihl), "tek_dayanak": sum(1 for x in ihl if x["tek_dayanak"]), "liste": ihl}
    # tüm alanlarda 'wikipedia/vikipedi' (d:, ic_not dahil) — kaynak dışı sızıntı
    r["dort_wiki_her_alan"] = [kimlik(m) | {"alan": a} for m in M for a, v in m.items()
                              if isinstance(v, str) and re.search(r"wikipedia|vikipedi", v, re.I)]
    # kaynağın AÇILMADIĞINI beyan eden maddeler (dürüst beyan, ama dayanak zayıf)
    ac = [kimlik(m) | {"kaynak": m["kaynak"][:200]} for m in M
          if re.search(r"açılmadı|açılamadı|AÇILAMADI|WebSearch|web araması|özetiyle", m.get("kaynak", ""))]
    r["acilmamis_kaynak_beyani"] = {"sayi": len(ac), "liste": ac}

    # ③ hassasiyet
    tt = {"gun": 0, "yil_0101": 0, "ay_YYYY_MM": [], "yil_YYYY": [], "baska": [], "pencere_ucu": [],
          "0101_gun_beyansiz": []}
    for m in M:
        t = str(m.get("t", ""))
        if re.fullmatch(r"-?\d{3,4}-\d\d-\d\d", t):
            if t[-6:] == "-01-01" or t.endswith("-01-01"):
                tt["yil_0101"] += 1
                g = norm(str(m.get("gun", ""))).strip()
                if not g and not m.get("ic_not_t"):
                    tt["0101_gun_beyansiz"].append({**kimlik(m), "gun": m.get("gun"), "neden": "gun bos + ic_not_t yok"})
                elif re.fullmatch(r"(1|01) ocak -?\d{3,4}( \S+)?", g) and not m.get("ic_not_t"):
                    tt.setdefault("0101_gercek_1ocak_iddiasi", []).append({**kimlik(m), "gun": m.get("gun")})
            else:
                tt["gun"] += 1
                # D213: ay biliniyor, gün yok → YYYY-MM-01'e kodlanmış mı?
                if t.endswith("-01"):
                    g = norm(str(m.get("gun", "")))
                    if not re.search(r"(^|\D)0?1(\D|$)", g.split("(")[0]) or re.search(r"gun bilinm|gun yok|gun verm", g):
                        tt.setdefault("ay_birine_kodlanmis_supheli", []).append(
                            {**kimlik(m), "gun": m.get("gun"), "ic_not_t": m.get("ic_not_t")})
            if t in PENCERE_UCLARI:
                tt["pencere_ucu"].append({**kimlik(m), "gun": m.get("gun"), "ic_not_t": m.get("ic_not_t")})
        elif re.fullmatch(r"-?\d{3,4}-\d\d", t):
            tt["ay_YYYY_MM"].append(kimlik(m))
        elif re.fullmatch(r"-?\d{3,4}", t):
            tt["yil_YYYY"].append(kimlik(m))
        else:
            tt["baska"].append({**kimlik(m)})
    # ③b gün iddiası kaynakta görünüyor mu: günün sayısı, ayın herhangi bir dildeki adıyla ya da sayısal tarih olarak
    AYLAR = {1: "ocak|january|januar|janvier|gennaio|enero|gener|siječ|janu", 2: "şubat|subat|february|februar|février|fevrier|febbraio|febrero|febrer|velja",
             3: "mart|march|märz|marz|mars|marzo|març|ožuj|marts", 4: "nisan|april|avril|aprile|abril|trav", 5: "mayıs|mayis|may|mai|maggio|mayo|maig|svib",
             6: "haziran|june|juni|juin|giugno|junio|juny|lip", 7: "temmuz|july|juli|juillet|luglio|julio|juliol|srp",
             8: "ağustos|agustos|august|août|aout|agosto|agost|kolovoz", 9: "eylül|eylul|september|septembre|settembre|septiembre|setembre|ruj",
             10: "ekim|october|oktober|octobre|ottobre|octubre|octubre|listop", 11: "kasım|kasim|november|novembre|noviembre|studen",
             12: "aralık|aralik|december|dezember|décembre|decembre|dicembre|diciembre|desembre|prosin"}
    gorunmez = []
    evren_gun = 0
    for m in M:
        t = str(m.get("t", ""))
        mt = re.fullmatch(r"(-?\d{3,4})-(\d\d)-(\d\d)", t)
        if not mt or t.endswith("-01-01") and not re.match(r"\s*0?1\s", str(m.get("gun", ""))):
            continue
        evren_gun += 1
        y, a, g = int(mt.group(1)), int(mt.group(2)), int(mt.group(3))
        k = (m.get("kaynak", "") + " " + str(m.get("alinti", ""))).lower()
        gd = r"(?<!\d)0?%d(?!\d)" % g
        var = (re.search(gd + r"(\.|st|nd|rd|th|er|º)?\s*(de\s+|d')?(" + AYLAR[a] + ")", k)
               or re.search("(" + AYLAR[a] + r")\.?\s+" + gd + r"(?!\d)", k)
               or re.search(r"(?<!\d)0?%d[./-]0?%d[./-]%d" % (g, a, y), k)
               or re.search(r"%d-%02d-%02d" % (y, a, g), k))
        if not var:
            gorunmez.append(kimlik(m) | {"gun": m.get("gun"), "kaynak": m.get("kaynak", "")[:220]})
    r["uc_gun_kaynakta_gorunmuyor"] = {"evren": evren_gun, "sayi": len(gorunmez), "liste": gorunmez}
    r["uc_hassasiyet"] = tt
    return r


# ---------------------------------------------------------------- çek
class _NoRedir(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, *a, **k):
        return None


_op = urllib.request.build_opener(_NoRedir)


def ham_cek(url, zaman=30):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (atlas denetim; nazik)"})
    try:
        with _op.open(req, timeout=zaman) as f:
            return f.status, f.read().decode("utf-8", "replace"), None
    except urllib.error.HTTPError as e:
        return e.code, "", e.headers.get("Location")
    except Exception as e:
        return 0, "", str(e)[:120]


def cek(M, onbellek, bekle=1.2):
    os.makedirs(onbellek, exist_ok=True)
    tum = sorted({s for m in M for _, s in sluglar(m.get("kaynak", ""))})
    print("benzersiz slug:", len(tum))
    ozet = {}
    ozet_yol = os.path.join(onbellek, "_ozet.json")
    if os.path.exists(ozet_yol):
        ozet = json.load(open(ozet_yol, encoding="utf-8"))
    for i, s in enumerate(tum):
        if s in ozet and ozet[s]["kod"] in (200, 301, 302, 404):
            continue
        kod, govde, konum = ham_cek("https://islamansiklopedisi.org.tr/" + s)
        if kod in (503, 429):
            time.sleep(10)
            kod, govde, konum = ham_cek("https://islamansiklopedisi.org.tr/" + s)
        baslik = ""
        mt = re.search(r"<title>(.*?)</title>", govde, re.S | re.I)
        if mt:
            baslik = html.unescape(mt.group(1)).strip()
        if kod == 200:
            open(os.path.join(onbellek, s + ".html"), "w", encoding="utf-8").write(govde)
        ozet[s] = {"kod": kod, "baslik": baslik, "konum": konum, "uzunluk": len(govde)}
        if i % 25 == 0:
            print(i, s, kod, baslik[:60], flush=True)
            json.dump(ozet, open(ozet_yol, "w", encoding="utf-8"), ensure_ascii=False)
        time.sleep(bekle)
    json.dump(ozet, open(ozet_yol, "w", encoding="utf-8"), ensure_ascii=False)
    return ozet


# ---------------------------------------------------------------- alıntı eşle
def govde_metni(h):
    h = re.sub(r"<script.*?</script>|<style.*?</style>", " ", h, flags=re.S | re.I)
    h = re.sub(r"<[^>]+>", " ", h)
    return html.unescape(h)


def arama_norm(s):
    s = norm(unicodedata.normalize("NFC", s))
    s = s.replace("‘", "'").replace("’", "'").replace("ʿ", "'").replace("ʾ", "'").replace("`", "'")
    s = re.sub(r"[^\w]+", " ", s)
    return re.sub(r"\s+", " ", s).strip()


def yabanci_dil(q):
    w = set(re.findall(r"[a-zA-Z]+", q.lower()))
    return len(w & {"the", "of", "and", "was", "in", "to", "by", "his", "der", "die", "das", "und", "les", "et", "del", "which", "were"}) >= 2 \
        and not re.search(r"[ğışĞİŞ]", q)


_UCLU = {}


def en_uzun_ortak_oran(q, g):
    """alıntının kelime üçlülerinden gövdede bulunanların payı (0-1). Kısa alıntıda ikili."""
    w = q.split()
    n = 3 if len(w) >= 6 else 2
    if len(w) < n:
        return 1.0 if q in g else 0.0
    anahtar = (id(g), n)
    if anahtar not in _UCLU:
        gw = g.split()
        _UCLU[anahtar] = {" ".join(gw[i:i + n]) for i in range(len(gw) - n + 1)}
    kume = _UCLU[anahtar]
    qs = [" ".join(w[i:i + n]) for i in range(len(w) - n + 1)]
    return sum(1 for x in qs if x in kume) / len(qs)


def alinti_esle(M, onbellek):
    ozet = json.load(open(os.path.join(onbellek, "_ozet.json"), encoding="utf-8"))
    gov = {}

    def g(s):
        if s not in gov:
            p = os.path.join(onbellek, s + ".html")
            gov[s] = arama_norm(govde_metni(open(p, encoding="utf-8").read())) if os.path.exists(p) else None
        return gov[s]

    sonuc = []
    for m in M:
        k = m.get("kaynak", "")
        tdvler = [s for _, s in sluglar(k)]
        adaylar = [(q, isr, "kaynak") for q, isr in kaynak_parcalari(k)]
        if m.get("alinti"):
            adaylar.append((str(m["alinti"]), ("tdv", tdvler[-1]) if tdvler else ("ad", None), "alinti"))
        for p, q in alintilar(m.get("d", "")):
            adaylar.append((q, ("tdv", tdvler[-1]) if tdvler else ("ad", None), "d"))
        for q, isr, alan in adaylar:
            if isr[0] != "tdv" and not tdvler:
                sonuc.append({**kimlik(m), "alan": alan, "alinti": q, "kaynak_turu": isr[0],
                              "kaynak": isr[1], "durum": "TDV_DISI_DENETLENMEDI"})
                continue
            # alıntı, maddenin atıf yaptığı BÜTÜN TDV slug'larında aranır (bağlanan önce):
            # çok-slug'lı kaynakta alıntının hangi maddeye ait olduğu dizgiden güvenle çıkmıyor
            hedef = ([isr[1]] if isr[0] == "tdv" else []) + [s for s in tdvler if not (isr[0] == "tdv" and s == isr[1])]
            qn = arama_norm(q)
            durum, oran, hangi = None, 0.0, None
            olculemedi = []
            for s in hedef:
                gv = g(s)
                if gv is None:
                    olculemedi.append((s, ozet.get(s, {}).get("kod")))
                    continue
                if qn and qn in gv:
                    durum, oran, hangi = "BIREBIR", 1.0, s
                    break
                parcalar = [arama_norm(p) for p in re.split(r"\[?\.\.\.\]?|…", q) if len(arama_norm(p).split()) >= 2]
                if len(parcalar) > 1 and all(p in gv for p in parcalar):
                    durum, oran, hangi = "BIREBIR_ATLAMALI", 1.0, s
                    break
                o = en_uzun_ortak_oran(qn, gv)
                if o >= oran:
                    oran, hangi = o, s
            if durum is None:
                if not hangi:
                    durum = "OLCULEMEDI"
                elif oran >= 0.8:
                    durum = "YAKIN"
                elif oran >= 0.4:
                    durum = "KISMI"
                else:
                    durum = "YOK"
                if isr[0] != "tdv" and alan == "kaynak" and durum in ("YOK", "KISMI"):
                    durum = "TDV_DE_YOK_DIGER_KAYNAK_DENETLENMEDI"
                elif durum in ("YOK", "KISMI") and yabanci_dil(q):
                    # TDV Türkçedir: yabancı dilde alıntı TDV'den olamaz → başka esere ait, bağlama hatası
                    durum = "YABANCI_DIL_TDV_DISI_DENETLENMEDI"
                elif durum in ("YOK", "KISMI") and alan == "d" and len(q.split()) < 8:
                    durum = "D_KISA_TIRNAK_ALINTI_DEGIL"
            sonuc.append({**kimlik(m), "alan": alan, "alinti": q, "slug": hangi or (hedef[0] if hedef else None),
                          "durum": durum, "oran": round(oran, 2), "olculemedi": olculemedi,
                          "baska_kaynak": isr[1] if isr[0] == "url" else None})
    return sonuc


def slug_sayim(M):
    sl = [x for m in M for _, x in sluglar(m.get("kaynak", ""))]
    return {"atif": len(sl), "benzersiz": len(set(sl)),
            "tdv_atifli_madde": sum(1 for m in M if sluglar(m.get("kaynak", ""))),
            "tdv_gecen_slugsuz": [kimlik(m) | {"kaynak": m["kaynak"][:200]} for m in M
                                  if "TDV" in m.get("kaynak", "") and not sluglar(m.get("kaynak", ""))]}


if __name__ == "__main__":
    kip, evren = sys.argv[1], sys.argv[2]
    M = yukle(evren)
    onb = os.path.join(os.path.dirname(evren), "tdv_onbellek")
    if kip == "statik":
        r = statik(M)
        r["slug"] = slug_sayim(M)
        json.dump(r, open(sys.argv[3], "w", encoding="utf-8"), ensure_ascii=False, indent=1)
        h = r["uc_hassasiyet"]
        print("evren", r["evren"])
        print("slug atif", r["slug"]["atif"], "benzersiz", r["slug"]["benzersiz"], "tdv atifli madde",
              r["slug"]["tdv_atifli_madde"], "TDV gecen slugsuz", len(r["slug"]["tdv_gecen_slugsuz"]))
        print("⑤ bos", r["bes_bos_kaynak"]["sayi"], "bulunamadi beyanli", r["bes_bos_kaynak"]["bulunamadi_beyanli"])
        print("④ kirmizi", r["dort_kirmizi"]["sayi"], "tek dayanak", r["dort_kirmizi"]["tek_dayanak"])
        print("③ gun", h["gun"], "yil0101", h["yil_0101"], "YYYY-MM", len(h["ay_YYYY_MM"]), "YYYY", len(h["yil_YYYY"]),
              "baska", len(h["baska"]), "pencere_ucu", len(h["pencere_ucu"]), "0101 beyansiz", len(h["0101_gun_beyansiz"]),
              "1ocak iddiasi", len(h.get("0101_gercek_1ocak_iddiasi", [])))
    elif kip == "baslik":
        # ① sonuç: kod, başlık↔slug, iddia edilen ad↔başlık, gövde boyu
        o = json.load(open(os.path.join(onb, "_ozet.json"), encoding="utf-8"))
        from collections import Counter
        r = {"kod": Counter(v["kod"] for v in o.values()), "benzersiz": len(o),
             "baslik_slug_farkli": [], "ad_baslik_uyumsuz": [], "govde_kelime": {}}
        for s, v in o.items():
            p = os.path.join(onb, s + ".html")
            if os.path.exists(p):
                r["govde_kelime"][s] = len(govde_metni(open(p, encoding="utf-8").read()).split())
            b = re.sub(r"[^a-z0-9]+", "-", norm(v["baslik"].split(" - ")[0])).strip("-")
            if b != s:
                r["baslik_slug_farkli"].append([s, v["baslik"]])
        TIRNAK = "‘’'`"
        for m in M:
            k = m["kaynak"]
            for p, sl in sluglar(k):
                seg = k[p:p + 160]
                iddia = re.findall(r"[(']([A-ZÇĞİÖŞÜÂÎÛ‘’ \-]{3,})[)']", seg)
                if not iddia or sl not in o:
                    continue
                t = re.sub(r"\W", "", norm(o[sl]["baslik"].split(" - ")[0]).translate({ord(c): None for c in TIRNAK}))
                i = re.sub(r"\W", "", norm(iddia[0]).translate({ord(c): None for c in TIRNAK}))
                if i != t:
                    r["ad_baslik_uyumsuz"].append(kimlik(m) | {"slug": sl, "iddia": iddia[0], "baslik": o[sl]["baslik"]})
        gk = sorted(r["govde_kelime"].items(), key=lambda x: x[1])
        print("kod", dict(r["kod"]), "benzersiz", r["benzersiz"])
        print("en kisa govde", gk[:5], "medyan", gk[len(gk) // 2])
        print("baslik!=slug", r["baslik_slug_farkli"])
        print("ad!=baslik", len(r["ad_baslik_uyumsuz"]))
        for x in r["ad_baslik_uyumsuz"]:
            print("  ", x["dosya"], x["t"], x["slug"], "| iddia:", x["iddia"], "| baslik:", x["baslik"][:45])
        json.dump(r, open(sys.argv[3], "w", encoding="utf-8"), ensure_ascii=False, indent=1, default=str)
    elif kip == "gun_tdv":
        # ③b devamı: kaynak dizgisinde görünmeyen gün, atıf yapılan TDV gövdesinde var mı?
        st = json.load(open(sys.argv[3], encoding="utf-8"))
        AY_TR = ["", "ocak", "subat", "mart", "nisan", "mayis", "haziran", "temmuz", "agustos", "eylul", "ekim", "kasim", "aralik"]
        Mx = {(m["dosya"], m["t"], m["b"]): m for m in M}
        sonuc = {"TDV_DE_VAR": [], "TDV_DE_YOK": [], "TDV_ATIFSIZ": []}
        for x in st["uc_gun_kaynakta_gorunmuyor"]["liste"]:
            m = Mx[(x["dosya"], x["t"], x["b"])]
            sl = [s for _, s in sluglar(m["kaynak"]) if os.path.exists(os.path.join(onb, s + ".html"))]
            if not sl:
                sonuc["TDV_ATIFSIZ"].append(x); continue
            y, a, g = [int(v) for v in re.fullmatch(r"(-?\d+)-(\d+)-(\d+)", x["t"]).groups()]
            desen = re.compile(r"(?<!\d)%d %s( %d)?" % (g, AY_TR[a], y))
            bulundu = None
            for s in sl:
                gv = arama_norm(govde_metni(open(os.path.join(onb, s + ".html"), encoding="utf-8").read()))
                mm = desen.search(gv)
                if mm:
                    bulundu = (s, gv[max(0, mm.start() - 80): mm.end() + 20]); break
            (sonuc["TDV_DE_VAR"] if bulundu else sonuc["TDV_DE_YOK"]).append(x | {"slug": sl, "baglam": bulundu})
        for k, v in sonuc.items():
            print(k, len(v))
        for x in sonuc["TDV_DE_YOK"]:
            print("  YOK", x["dosya"], x["t"], x["b"][:50], "| gun:", x["gun"], "|", x["slug"])
        st["uc_gun_tdv"] = sonuc
        json.dump(st, open(sys.argv[3], "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    elif kip == "disi":
        # ② TDV-DIŞI alıntı örneklemi: alan başına en çok N, URL çekilir (yönlendirme İZLENİR), birebir aranır
        import random, hashlib
        N = int(sys.argv[4]) if len(sys.argv) > 4 else 4
        s = json.load(open(os.path.join(os.path.dirname(evren), "alinti.json"), encoding="utf-8"))
        aday = [x for x in s if x.get("baska_kaynak") or (x.get("kaynak_turu") == "url")]
        for x in aday:
            x["url"] = x.get("baska_kaynak") or x.get("kaynak")
        alan = {}
        for x in aday:
            alan.setdefault(re.search(r"https?://([^/]+)", x["url"]).group(1), []).append(x)
        random.seed(930)
        ornek = []
        for d, L in sorted(alan.items()):
            ornek += random.sample(L, min(N, len(L)))
        print("TDV-disi URL'li alinti", len(aday), "alan", len(alan), "orneklem", len(ornek), flush=True)
        dob = os.path.join(os.path.dirname(evren), "disi_onbellek"); os.makedirs(dob, exist_ok=True)
        acik = urllib.request.build_opener()
        for i, x in enumerate(ornek):
            p = os.path.join(dob, hashlib.md5(x["url"].encode()).hexdigest() + ".txt")
            if not os.path.exists(p):
                try:
                    req = urllib.request.Request(x["url"], headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36",
                                                                   "Accept-Language": "en,tr;q=0.8"})
                    with acik.open(req, timeout=40) as f:
                        ham = f.read()
                        tur = f.headers.get("Content-Type", "")
                    metin = ham.decode("utf-8", "replace") if "pdf" not in tur else "%%PDF%%"
                    kod = 200
                except urllib.error.HTTPError as e:
                    metin, kod = "", e.code
                except Exception as e:
                    metin, kod = "", 0
                open(p, "w", encoding="utf-8").write(json.dumps({"kod": kod, "metin": metin}))
                time.sleep(1.0)
            c = json.load(open(p, encoding="utf-8"))
            gv = arama_norm(govde_metni(c["metin"])) if c["metin"] and c["metin"] != "%%PDF%%" else None
            qn = arama_norm(x["alinti"])
            if gv is None or len(gv.split()) < 150:
                x["disi_durum"], x["disi_oran"] = "OLCULEMEDI(kod %s%s)" % (c["kod"], ", pdf" if c["metin"] == "%%PDF%%" else ", bos/kisa govde" if c["kod"] == 200 else ""), None
            elif qn in gv:
                x["disi_durum"], x["disi_oran"] = "BIREBIR", 1.0
            else:
                parcalar = [arama_norm(q) for q in re.split(r"\[?\.\.\.\]?|…", x["alinti"]) if len(arama_norm(q).split()) >= 2]
                if len(parcalar) > 1 and all(q in gv for q in parcalar):
                    x["disi_durum"], x["disi_oran"] = "BIREBIR_ATLAMALI", 1.0
                else:
                    o = en_uzun_ortak_oran(qn, gv)
                    x["disi_durum"] = "YAKIN" if o >= 0.8 else "KISMI" if o >= 0.4 else "YOK"
                    x["disi_oran"] = round(o, 2)
            if i % 20 == 0:
                print(i, x["disi_durum"], x["url"][:70], flush=True)
        from collections import Counter
        print(Counter(x["disi_durum"].split("(")[0] for x in ornek))
        json.dump(ornek, open(sys.argv[3], "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    elif kip == "cek":
        cek(M, onb, float(sys.argv[3]) if len(sys.argv) > 3 else 1.2)
    elif kip == "alinti":
        s = alinti_esle(M, onb)
        json.dump(s, open(sys.argv[3], "w", encoding="utf-8"), ensure_ascii=False, indent=1)
        from collections import Counter
        print(Counter(x["durum"] for x in s))
