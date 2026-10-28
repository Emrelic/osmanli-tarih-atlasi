# -*- coding: utf-8 -*-
"""ONEMLI-YOK (parti_106 'cozulemedi' + tek_tanik + belirsiz) başkent yerlerini çözme betiği (YER-2, 23 Ekim 2026).
Adımlar:
  bilesen  : her TSV yer dizesini bileşen adlara ayırır (→, ->, ·, çift boşluk = parantez); atlas eşlemesi (ad_esanlam.coz + parantez adları)
  tgn      : atlasta olmayan bileşenleri Getty TGN SPARQL (luc:term) ile sorgular → önbellek denetim/yer-arastirma/TGN-ONBELLEK-1023.json
  esle     : TGN adayı (yer türü yerleşim/arkeolojik alan, ad birebir) × ikinci tanık (Pleiades CSV / GeoNames cities1000, ≤10 km, ad birebir)
             → denetim/yer-arastirma/parti_107_sonuc.json (cift_tanik) + denetim/once1281/yer-eksik/ONEMLI-YOK-BULUNAMADI.tsv
Kullanım: py -I denetim/ARAC-YER-ONEMLI-COZ-1023.py <bilesen|tgn|esle> [--bolge=a,b]
Veri: gazetteer C:/atlas-veri/gazetteer (güvenilmez veri, yalnız okunur). TGN yanıtı veri olarak işlenir."""
import sys, io, os, re, json, csv, math, time, subprocess, collections, urllib.parse
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
csv.field_size_limit(10 ** 9)
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi
import ad_esanlam
from ad_esanlam import sadelestir as N

KL = os.path.join(KOK, "denetim", "yer-arastirma")
YE = os.path.join(KOK, "denetim", "once1281", "yer-eksik")
GAZ = "C:/atlas-veri/gazetteer"
BIL = os.path.join(KL, "ONEMLI-BILESEN-1023.json")
ONB = os.path.join(KL, "TGN-ONBELLEK-1023.json")
KOMUT = sys.argv[1]
YENIDEN = "--yeniden" in sys.argv      # tgn: 25 sınırına takılan sorguları 300 ile yenile
BOLGE = set(",".join(a.split("=", 1)[1] for a in sys.argv if a.startswith("--bolge=")).split(",")) - {""}

# kaynakta şehir adı olmadığını söyleyen ifadeler (bileşen yer adı değildir)
BOS_IFADE = re.compile(r"^(belirsiz|bilinmiyor|yok|bulunamadı|cok merkezli|çok merkezli|—|-|ad|taslak|varsayım|yazlık|sonra|seçimli|valilik|kültür|göçebe.*|toplu künye)$", re.I)
NITEL = re.compile(r"\b(civari|civarı|çevresi|cevresi|yöresi|yoresi|vadisi|havzası|bozkırı|ovası|kıyısı|bölgesi|yurtları|konfederasyon|beylikleri|racalıklar|cacicazgo|belirtilmemiş|kaynakta|tartışmalı|bilinmiyor|teyit edilmedi|birimler arası|sanılıyor|ardışık|arası|yakını|doğusu|güneyi|semti|ağzı|dönemi|döneminde|sonrası|itibaren|beri|kadar|dek|birlikte|ikinci merkez|kolları|iki melik)\b", re.I)


def km(a, b):
    p = math.pi / 180
    h = math.sin((b[0] - a[0]) * p / 2) ** 2 + math.cos(a[0] * p) * math.cos(b[0] * p) * math.sin((b[1] - a[1]) * p / 2) ** 2
    return 12742 * math.asin(math.sqrt(h))


def bilesenler(yer):
    """'Kudüs → Dımaşk' / 'Halep  Halab' (çift boşluk = parantez içi) → [[ad, eşanlam...], ...]"""
    ana, _, par = yer.partition("  ")
    out = []
    for p in re.split(r"\s*(?:→|->|·)\s*", ana):
        p = re.sub(r"\s*\d{3,4}(?:[-–']\S*)?\s*$", "", p.strip(" ?")).strip(" ?")
        if p:
            out.append([p])
    par = par.strip()
    if par and len(out) == 1 and not NITEL.search(par) and not re.search(r"\d", par):
        for q in re.split(r"\s*(?:→|·|:|,)\s*", par):
            q = q.strip(" ?")
            if q and not BOS_IFADE.match(q):
                out[0].append(q)
    elif par and len(out) == 1 and re.search(r"\d", par):
        pass
    return out, par


def atlas_indeks():
    Y = [y for y in girdi.yukle(sessiz=True) if "parti_107_sonuc.json" not in str(y.get("kaynak", ""))]     # kendi çıktımız atlas sayılmaz
    idx = {}
    for y in Y:
        for a in [y["ad"], re.sub(r"\s*\(.*?\)", "", y["ad"])] + re.findall(r"\(([^)]*)\)", y["ad"]):
            for p in re.split(r"[;,/]| veya ", a):
                n = N(p)
                if len(n) >= 3:
                    idx.setdefault(n, []).append((y["ad"], y["lat"], y["lon"]))
    return Y, idx


def genis(b, k):
    """bileşen adları + model eşanlamları (ONEMLI-MODEL-ALIAS-1023.json; yalnız arama terimi)."""
    _ma = json.load(open(os.path.join(KL, "ONEMLI-MODEL-ALIAS-1023.json"), encoding="utf-8"))["tablo"]
    out = list(b["adlar"])
    for a in b["adlar"]:
        m = _ma.get(a)
        if m and (not m.get("bolge") or m["bolge"] == k["bolge"]):
            out += m.get("alias", [])
            break
    return list(dict.fromkeys(out))


def tsv_satirlari():
    sat = {}
    for i, l in enumerate(open(os.path.join(YE, "ONEMLI-YERLESIM-SIRA.tsv"), encoding="utf-8").read().splitlines()[1:]):
        c = l.split("\t")
        if len(c) >= 8 and c[5] == "yok":
            sat[c[1]] = {"bolge": c[0], "yer": c[1], "onem": int(c[2]), "ilk_yil": c[4], "devletler": c[7]}
    return sat


if KOMUT == "bilesen":
    sat = tsv_satirlari()
    p106 = {r["ad"]: r for r in json.load(open(os.path.join(KL, "parti_106_sonuc.json"), encoding="utf-8"))["sonuclar"]}
    Y, idx = atlas_indeks()
    adlar = [y["ad"] for y in Y]
    kayit = []
    for yer, s in sat.items():
        r106 = p106.get(yer, {})
        if r106.get("durum") == "cift_tanik":
            continue          # 106 zaten yazdı (ya da mükerrer raporunda)
        bl, par = bilesenler(yer)
        bs = []
        for adl in bl:
            b = {"adlar": adl, "atlas": None}
            if BOS_IFADE.match(adl[0]) or NITEL.search(adl[0]):
                b["bos"] = True
            else:
                for a in adl:
                    if idx.get(N(a)):
                        b["atlas"] = idx[N(a)][0][0]
                        b["atlas_yol"] = "ad"
                        break
                    try:
                        c = ad_esanlam.coz(a, adlar)
                    except Exception:
                        c = {"durum": "yok"}
                    if c.get("durum") in ("birebir", "esanlam") and c.get("ad"):
                        b["atlas"] = c["ad"]
                        b["atlas_yol"] = "esanlam"
                        break
            bs.append(b)
        kayit.append(dict(s, parantez=par, bilesen=bs, p106=r106.get("durum"), p106_tek=r106.get("tanik")))
    json.dump(kayit, open(BIL, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    c = collections.Counter()
    for k in kayit:
        yer_b = [b for b in k["bilesen"] if not b.get("bos")]
        if not yer_b:
            c["yer-adi-yok"] += 1
        elif all(b["atlas"] for b in yer_b):
            c["atlasta-var"] += 1
        elif any(b["atlas"] for b in yer_b):
            c["kismen"] += 1
        else:
            c["eksik"] += 1
    print(len(kayit), dict(c))
    print("eksik bileşen:", sum(1 for k in kayit for b in k["bilesen"] if not b.get("bos") and not b["atlas"]))

elif KOMUT == "tgn":
    kayit = json.load(open(BIL, encoding="utf-8"))
    onb = json.load(open(ONB, encoding="utf-8")) if os.path.exists(ONB) else {}
    istek = []
    for k in kayit:
        if BOLGE and k["bolge"] not in BOLGE:
            continue
        for b in k["bilesen"]:
            if b.get("bos"):
                continue          # atlasta eşleşenler de sorgulanır: eşanlam çarpışmasını (Pella/Fihl) mesafeyle sınamak için
            for a in genis(b, k):
                if (a not in onb or (YENIDEN and len(onb[a]) >= 25)) and a not in istek:
                    istek.append(a)
    print("TGN sorgusu:", len(istek))
    def cek(a):
        terim = re.sub(r"[\"\\'’‘ʻ`()]", " ", a).strip()
        terim = " ".join(w for w in terim.split() if len(w) > 1)
        if not terim:
            return a, []
        q = ('select ?p ?n ?lat ?lon ?t ?par (group_concat(distinct ?al; separator="|") as ?als) ?sn where { ?p skos:inScheme tgn: ; luc:term "%s"; '
             'gvp:prefLabelGVP/xl:literalForm ?n; gvp:parentString ?par . optional{?p foaf:focus ?f . ?f wgs:lat ?lat; wgs:long ?lon .} '
             'optional {?p gvp:placeTypePreferred/gvp:prefLabelGVP/xl:literalForm ?t} optional{?p xl:altLabel/xl:literalForm ?al} '
             'optional{?p skos:scopeNote/rdf:value ?sn} } group by ?p ?n ?lat ?lon ?t ?par ?sn limit %d') % (terim, 300 if YENIDEN else 25)
        url = "http://vocab.getty.edu/sparql.json?" + urllib.parse.urlencode({"query": q})
        sonuc = None
        for deneme in range(3):
            try:
                o = subprocess.run(["curl", "-sL", "-m", "40", "-A", "Mozilla/5.0", url], capture_output=True, timeout=60)
                sonuc = json.loads(o.stdout.decode("utf-8"))
                break
            except Exception:
                time.sleep(3)
        if sonuc is None:
            return a, None
        return a, [{kk: v["value"] for kk, v in r.items()} for r in sonuc["results"]["bindings"]]
    from concurrent.futures import ThreadPoolExecutor
    with ThreadPoolExecutor(6) as ex:
        for i, (a, r) in enumerate(ex.map(cek, istek)):
            if r is None:
                print("ÇEKİLEMEDİ", a, flush=True)
                continue
            onb[a] = r
            if i % 25 == 0:
                json.dump(onb, open(ONB, "w", encoding="utf-8"), ensure_ascii=False)
                print(i, a, len(r), flush=True)
    json.dump(onb, open(ONB, "w", encoding="utf-8"), ensure_ascii=False)
    print("önbellek:", len(onb))

elif KOMUT == "idai":
    IDB = os.path.join(KL, "IDAI-ONBELLEK-1023.json")
    kayit = json.load(open(BIL, encoding="utf-8"))
    onb = json.load(open(IDB, encoding="utf-8")) if os.path.exists(IDB) else {}
    istek = list(dict.fromkeys(a for k in kayit for b in k["bilesen"] if not b.get("bos") for a in genis(b, k) if a not in onb))
    print("iDAI sorgusu:", len(istek), flush=True)

    def cek(a):
        url = "https://gazetteer.dainst.org/search.json?" + urllib.parse.urlencode({"q": re.sub(r"[\"'’‘ʻ`()?:]", " ", a).strip(), "limit": 25})
        for deneme in range(3):
            try:
                o = subprocess.run(["curl", "-sL", "-m", "40", "-A", "Mozilla/5.0", url], capture_output=True, timeout=60)
                j = json.loads(o.stdout.decode("utf-8"))
                out = []
                for r in j.get("result", []):
                    loc = (r.get("prefLocation") or {}).get("coordinates")
                    if not loc:
                        continue
                    out.append({"id": r.get("gazId"), "n": (r.get("prefName") or {}).get("title", ""), "adlar": [x.get("title", "") for x in r.get("names", [])],
                                "lon": loc[0], "lat": loc[1], "tip": ",".join(r.get("types") or []), "guven": (r.get("prefLocation") or {}).get("confidence")})
                return a, out
            except Exception:
                time.sleep(3)
        return a, None
    from concurrent.futures import ThreadPoolExecutor
    with ThreadPoolExecutor(4) as ex:
        for i, (a, r) in enumerate(ex.map(cek, istek)):
            if r is None:
                print("ÇEKİLEMEDİ", a, flush=True)
                continue
            onb[a] = r
            if i % 50 == 0:
                json.dump(onb, open(IDB, "w", encoding="utf-8"), ensure_ascii=False)
                print(i, a, len(r), flush=True)
    json.dump(onb, open(IDB, "w", encoding="utf-8"), ensure_ascii=False)
    print("önbellek:", len(onb))

elif KOMUT == "chgis":
    CHB = os.path.join(KL, "CHGIS-ONBELLEK-1023.json")
    kayit = json.load(open(BIL, encoding="utf-8"))
    onb = json.load(open(CHB, encoding="utf-8")) if os.path.exists(CHB) else {}
    BL = BOLGE or {"dogu-asya", "orta-asya", "sibirya-bozkir", "guneydogu-asya"}
    istek = list(dict.fromkeys(a for k in kayit if k["bolge"] in BL for b in k["bilesen"] if not b.get("bos") for a in genis(b, k) if a not in onb and re.match(r"^[A-Za-z' -]+$", a)))
    print("CHGIS sorgusu:", len(istek), flush=True)

    def cek(a):
        url = "https://chgis.hudci.org/tgaz/placename?" + urllib.parse.urlencode({"fmt": "json", "n": a.replace("'", "").replace("-", "")})
        for deneme in range(3):
            try:
                o = subprocess.run(["curl", "-sL", "-m", "60", "-A", "Mozilla/5.0", url], capture_output=True, timeout=80)
                j = json.loads(o.stdout.decode("utf-8"))
                out = []
                for r in j.get("placenames", []):
                    try:
                        x, y = [float(v) for v in r.get("xy coordinates", "").split(",")]
                    except ValueError:
                        continue
                    yl = re.findall(r"-?\d+", r.get("years", ""))
                    out.append({"id": r["sys_id"], "uri": r["uri"], "ad": r.get("name"), "tr": r.get("transcription", ""), "tip": r.get("feature type", ""),
                                "lat": y, "lon": x, "y0": int(yl[0]) if yl else None, "y1": int(yl[-1]) if yl else None, "ust": r.get("parent name", "")})
                return a, out
            except Exception:
                time.sleep(3)
        return a, None
    from concurrent.futures import ThreadPoolExecutor
    with ThreadPoolExecutor(4) as ex:
        for i, (a, r) in enumerate(ex.map(cek, istek)):
            if r is None:
                print("ÇEKİLEMEDİ", a, flush=True)
                continue
            onb[a] = r
    json.dump(onb, open(CHB, "w", encoding="utf-8"), ensure_ascii=False)
    print("önbellek:", len(onb))

elif KOMUT == "esle":
    # TSV bölgesi → kaba kutu (lat0, lat1, lon0, lon1); homonim süzgeci (Hebron/Labrador, Pella/Fihl). Kenar payı 3°.
    KUTU = {"anadolu": (34, 43, 25, 46), "arabistan": (10, 32, 34, 60), "balkanlar": (34, 48, 13, 30), "bati-afrika": (-5, 25, -20, 15),
            "bati-avrupa": (42, 62, -11, 16), "dogu-afrika": (-15, 20, 25, 52), "dogu-asya": (18, 55, 73, 146), "dogu-avrupa": (44, 68, 20, 60),
            "guney-afrika": (-35, -10, 10, 41), "guney-amerika": (-56, 13, -82, -34), "guney-asya": (5, 38, 60, 98), "guneydogu-asya": (-11, 29, 90, 130),
            "iberya": (35, 44.5, -10, 4.5), "iran": (24, 41, 43, 64), "italya": (36, 47.5, 6, 19), "kafkasya": (38, 45, 36, 51),
            "kuzey-afrika": (18, 38, -18, 26), "kuzey-amerika": (14, 72, -170, -50), "kuzey-avrupa": (53, 72, -25, 32), "mezopotamya": (29, 39, 38, 49),
            "misir-sudan": (3, 32, 24, 40), "orta-afrika": (-15, 15, 5, 35), "orta-amerika": (7, 33, -118, -76), "orta-asya": (33, 55, 50, 95),
            "orta-avrupa": (44, 56, 5, 25), "sibirya-bozkir": (40, 75, 30, 180), "suriye-filistin": (29, 38, 33, 43)}

    MODEL_RED = {
        ("Akova", "balkanlar"): "Akova/Matagrifon baronluğu Mora'dadır; bulunan nokta Sakarya (TR) Akova'sı",
        ("Ratnapura", "guney-asya"): "Kalacuri Ratnapura = Ratanpur (Chhattisgarh); bulunan nokta Sri Lanka Ratnapura'sı",
        ("Lori", "kafkasya"): "Lori krallığı merkezi Lori Berd (Ermenistan); bulunan nokta Ardahan/Yokuşdibi",
        ("Rûdbâr", "iran"): "Custanid Rûdbâr'ı Alamut vadisidir (Kazvin); bulunan nokta Gilan Rudbar'ı",
        ("Alamut Kalesi", "iran"): "Alamut Kalesi Kazvin'dedir; bulunan nokta Gilan Rudbar'ı",
        ("Kerec", "iran"): "Dulefî Kerec'i Kerec-i Ebû Dülef (Arak yöresi); bulunan nokta Tahran yanı modern Karaj",
        ("Fîrûzkûh", "iran"): "Gurlu Fîrûzkûh'u Afganistan'dadır (Cam yöresi); bulunan nokta Mazenderan Firuzkuh'u",
        ("Yingqiu", "dogu-asya"): "Qi'nin Yingqiu'su Linzi ile özdeş ya da yakını sayılır; CHGIS Yingqiu Xian'ı (Changle) ile başkent özdeşliği kaynakla teyit edilmedi",
        ("Antigoneia", "anadolu"): "aranan Antigoneia (Orontes) Suriye'dedir; bulunan nokta Troas Antigoneia'sı (Alexandria Troas)",
        ("Mediolanum", "bati-avrupa"): "Batı Roma başkenti Mediolanum = Milano (atlasta var, ESKI eşlemesi); bulunan nokta Mediolanum Santonum (Saintes)",
        ("Abila", "suriye-filistin"): "Abilene merkezi Abila Lysaniou (Vadi Barada); bulunan nokta Dekapolis Abila'sı",
        ("Delos", "balkanlar"): "ada kara maskesinde yok (nokta 4.6 km dışarıda); denetle'nin önerdiği nokta başka adaya (Mikonos yönü) düşüyor — taşınmadı",
        ("Arvad", "suriye-filistin"): "Arvad adası kara maskesinde yok (3.8 km); önerilen nokta ana karaya (Tartus) düşüyor — taşınmadı",
        ("Suyab", "orta-asya"): "atlas Suyab/Ak-Beşim'i «Balasagun (Ak-Beşim)» yerleşimiyle temsil ediyor (~6 km; kronoloji maddeleri o ada bağlı) — mükerrer yazılmadı",
        ("Addis Ababa", "dogu-afrika"): "atlasta «Addis» yerleşimi 5.8 km'de — aynı şehir, mükerrer yazılmadı",
        ("Kalkis", "suriye-filistin"): "Chalcis ad Libanum'un Anjar'la özdeşliği tartışmalı (TSV dizesi de '?' taşıyor); teyit edilmedi",
        ("Kastro", "balkanlar"): "Limni adasının merkezi (Kastro/Myrina) atlasta «Limni» yerleşimiyle temsil ediliyor olabilir (8.5 km) — mükerrer riski, yazılmadı",
        ("Zhenzhou", "dogu-asya"): "Zhenzhou adı birden çok idarî merkezde (Zhending/Hebei, Yizheng/Jiangsu); hangisi olduğu teyit edilmedi",
    }

    MA = json.load(open(os.path.join(KL, "ONEMLI-MODEL-ALIAS-1023.json"), encoding="utf-8"))["tablo"]

    def model_alias(adl, bolge):
        for a in adl:
            m = MA.get(a)
            if m and (not m.get("bolge") or m["bolge"] == bolge):
                return m
        return None

    def kutuda(bolge, la, lo):
        if bolge == "okyanusya":
            return -50 <= la <= 30 and (lo >= 110 or lo <= -120)
        k = KUTU.get(bolge)
        return k is None or (k[0] - 1 <= la <= k[1] + 1 and k[2] - 1 <= lo <= k[3] + 1)

    YERLESIM_TIP = re.compile(r"inhabited|cit(y|ies)|town|village|settlement|capital|ancient site|archaeolog|deserted|ruin|fort|castle|palace|tell|site|abandoned|historical|former|oppid|neighborhood|metropol|port", re.I)
    RED_TIP = re.compile(r"river|mountain|region|province|nation|state|district|island|lake|count(y|ies)|prefecture|departement|department|general region|peninsula|valley|plain|kingdom|empire|dependent|municipalit", re.I)
    HARABE_TIP = re.compile(r"archaeolog|ancient|deserted|ruin|abandoned|tell", re.I)
    kayit = json.load(open(BIL, encoding="utf-8"))
    onb = json.load(open(ONB, encoding="utf-8"))
    _idb = os.path.join(KL, "IDAI-ONBELLEK-1023.json")
    idb = json.load(open(_idb, encoding="utf-8")) if os.path.exists(_idb) else {}
    _chb = os.path.join(KL, "CHGIS-ONBELLEK-1023.json")
    chb = json.load(open(_chb, encoding="utf-8")) if os.path.exists(_chb) else {}
    # Pleiades
    fl = lambda x: float(x) if x not in (None, "") else None
    places = {}
    with open(os.path.join(GAZ, "gaz-pleiades", "pleiades-places-latest.csv"), encoding="utf-8", newline="") as f:
        for r in csv.DictReader(f):
            try:
                places[r["id"]] = {"id": r["id"], "title": r["title"], "lat": fl(r["reprLat"]), "lon": fl(r["reprLong"]), "prec": r["locationPrecision"], "tip": r["featureTypes"]}
            except ValueError:
                pass
    pidx = collections.defaultdict(set)
    for pid, p in places.items():
        for parca in re.split(r"[/,;]", p["title"] or ""):
            pidx[N(re.sub(r"\(.*?\)", "", parca))].add(pid)
    with open(os.path.join(GAZ, "gaz-pleiades", "pleiades-names-latest.csv"), encoding="utf-8", newline="") as f:
        for r in csv.DictReader(f):
            pid = r["pid"].rsplit("/", 1)[-1]
            for a in (r["nameTransliterated"], r["nameAttested"], r["title"]):
                for parca in re.split(r"[/,;]", a or ""):
                    n = N(re.sub(r"\(.*?\)", "", parca))
                    if len(n) >= 3 and pid in places:
                        pidx[n].add(pid)
    gidx = collections.defaultdict(list)
    with open(os.path.join(GAZ, "gaz-geonames1000", "cities1000.txt"), encoding="utf-8") as f:
        for ln in f:
            a = ln.rstrip("\n").split("\t")
            if len(a) < 15:
                continue
            g = {"id": a[0], "ad": a[1], "lat": float(a[4]), "lon": float(a[5]), "ulke": a[8]}
            for ad in {a[1], a[2], *a[3].split(",")}:
                n = N(ad)
                if len(n) >= 3:
                    gidx[n].append(g)
    Y, idx = atlas_indeks()
    atlas_nokta = {y["ad"]: (y["lat"], y["lon"]) for y in Y}

    def tgn_aday(adl, bolge):
        out = {}
        nset = {N(a) for a in adl}
        for a in adl:
            for t in onb.get(a, []):
                if not t.get("lat"):
                    continue
                tip = t.get("t", "")
                adlari = {N(t.get("n", ""))} | {N(x) for x in (t.get("als") or "").split("|")}
                adlari |= {N(re.sub(r"\s*\(.*?\)", "", x)) for x in [t.get("n", "")] + (t.get("als") or "").split("|")}
                if not (nset & adlari):
                    continue
                if RED_TIP.search(tip) and not YERLESIM_TIP.search(tip):
                    continue
                la, lo = float(t["lat"]), float(t["lon"])
                if not kutuda(bolge, la, lo):
                    continue
                out[t["p"]] = {"tgn": t["p"], "n": t.get("n"), "lat": la, "lon": lo, "tip": tip, "par": t.get("par"), "sn": t.get("sn") or ""}
        return list(out.values())

    def ikinci(adl, pt, bolge):
        tan = []
        for a in adl:
            for pid in pidx.get(N(a), ()):
                p = places[pid]
                if p["lat"] is not None and km(pt, (p["lat"], p["lon"])) <= 10:
                    tan.append(("Pleiades", "pleiades.stoa.org/places/%s (%s, %s, %s)" % (pid, p["title"], p["tip"], p["prec"]), p["lat"], p["lon"], p))
            for g in gidx.get(N(a), ()):
                if km(pt, (g["lat"], g["lon"])) <= 10:
                    tan.append(("GeoNames", "geonames.org/%s (%s, %s)" % (g["id"], g["ad"], g["ulke"]), g["lat"], g["lon"], g))
        tek = {}
        for t in tan:
            tek.setdefault(t[0], t)
        return list(tek.values())

    def tarih_notu(sn):
        """TGN kapsam notundan kuruluş/ilk anılış cümlesi (yıl içeren); yoksa ''. Yorum yok: cümle olduğu gibi, kısaltılmış."""
        for c in re.split(r"(?<=[.;])\s+", sn or ""):
            if re.search(r"\b(founded|established|built|settled|first mentioned|first recorded|dates (back )?(to|from)|inhabited since|origins?)\b", c, re.I) and re.search(r"\b\d{1,4}(st|nd|rd|th)?\b|\bcentur", c, re.I):
                return c.strip()[:220]
        return ""

    sonuclar, yok_sat, ozet = [], [], collections.Counter()
    for k in kayit:
        if BOLGE and k["bolge"] not in BOLGE:
            continue
        bs = [b for b in k["bilesen"] if not b.get("bos")]
        if not bs:
            yok_sat.append((k, "-", "yer-adi-yok", "kaynak (devletler.js/DEVLET-LISTESI) başkent alanında şehir adı yok: '%s'" % k["yer"]))
            ozet["yer-adi-yok"] += 1
            continue
        for b in bs:
            adl = b["adlar"]
            bolge = k["bolge"]
            ma = model_alias(adl, bolge)
            ip = tuple(ma["ipucu"]) if ma and ma.get("ipucu") else None
            if ma:
                adl = list(dict.fromkeys(adl + ma.get("alias", [])))
            nset = {N(a) for a in adl}
            cands = []
            for t in tgn_aday(adl, bolge):
                cands.append({"src": "Getty TGN", "ref": "%s (%s)" % (t["tgn"], t["n"]), "lat": t["lat"], "lon": t["lon"], "tip": t["tip"] or "", "n": t["n"],
                              "par": t["par"] or "", "sn": t["sn"], "harabe": bool(HARABE_TIP.search(t["tip"] or "")), "kesin": True})
            for pid in {pid for a in adl for pid in pidx.get(N(a), ())}:
                p = places[pid]
                if p["lat"] is None or not kutuda(bolge, p["lat"], p["lon"]):
                    continue
                if re.search(r"river|mountain|region|province|people|island|archipelago|territory|district|lake|sea|bay|cape|plain|valley|road|bridge", p["tip"] or "") and not re.search(r"settlement|fort|urban|city|town|villa|temple|sanctuary|tell", p["tip"] or ""):
                    continue
                cands.append({"src": "Pleiades", "ref": "pleiades.stoa.org/places/%s (%s, %s, %s)" % (pid, p["title"], p["tip"], p["prec"]), "lat": p["lat"], "lon": p["lon"],
                              "tip": p["tip"] or "", "n": p["title"], "harabe": bool(re.search("archaeolog|ruin|findspot", p["tip"] or "")), "kesin": p["prec"] == "precise"})
            for a in adl:
                for r in idb.get(a, []) or []:
                    if not ({N(r["n"])} | {N(x) for x in r["adlar"]}) & nset:
                        continue
                    if not kutuda(bolge, r["lat"], r["lon"]):
                        continue
                    if r["tip"] and not re.search(r"populated|archaeolog|building|site|settlement", r["tip"]):
                        continue
                    if any(c["src"] == "iDAI.gazetteer" and c["ref"].startswith("gazetteer.dainst.org/place/%s " % r["id"]) for c in cands):
                        continue
                    cands.append({"src": "iDAI.gazetteer", "ref": "gazetteer.dainst.org/place/%s (%s, %s)" % (r["id"], r["n"], r["tip"] or "-"), "lat": r["lat"], "lon": r["lon"],
                                  "tip": r["tip"] or "", "n": r["n"], "harabe": "archaeolog" in (r["tip"] or ""), "kesin": True})
            gn = [g for a in adl for g in gidx.get(N(a), ()) if kutuda(bolge, g["lat"], g["lon"])]
            if ip:       # model ipucu: yalnız ≤40 km'deki gazetteer kayıtları aday kalır (ipucu tanık değildir)
                cands = [c for c in cands if km(ip, (c["lat"], c["lon"])) <= 40]
                gn = [g for g in gn if km(ip, (g["lat"], g["lon"])) <= 40]
            # CHGIS (Harvard-Fudan tarihî Çin gazetteer'i): idarî merkez kayıtları (köy/kasaba hariç, başlangıç ≤1281) Çin homonimlerini ayırır
            ch = []
            for a in adl:
                for r in chb.get(a, []) or []:
                    trn = N(re.sub(r"\s+(Xian|Zhou|Jun|Fu|Cheng|Lu|Du|Jing|Zhen|Guo)$", "", r["tr"]))
                    if trn not in nset or re.search(r"村|镇|cun|zhen|POLYGON", r["tip"]) or r["y0"] is None or r["y0"] > 1281 or r["lon"] == 0:
                        continue
                    ch.append({"src": "CHGIS", "ref": "%s (%s %s, %s, %s~%s)" % (r["uri"], r["ad"], r["tr"], r["tip"], r["y0"], r["y1"]), "lat": r["lat"], "lon": r["lon"],
                               "tip": r["tip"], "n": r["tr"], "harabe": False, "kesin": True, "y0": r["y0"]})
            if ch:
                kume_tabani = ch
                tgn_disi = [c for c in cands if c["src"] != "Getty TGN"]
                kume_tabani = ch + tgn_disi
                cands = ch + cands
            else:
                kume_tabani = cands
            hk = []          # 30 km kümeleri (GeoNames hariç: modern köy homonimleri belirsizlik üretmesin; CHGIS varsa TGN köy homonimleri küme açmaz)
            for c in kume_tabani:
                for h in hk:
                    if km((h[0]["lat"], h[0]["lon"]), (c["lat"], c["lon"])) <= 30:
                        h.append(c)
                        break
                else:
                    hk.append([c])
            noktalar = [(c["lat"], c["lon"]) for c in cands] + [(g["lat"], g["lon"]) for g in gn]
            if b["atlas"]:
                aplar = [atlas_nokta[b["atlas"]]] + [(la, lo) for a in adl for (_, la, lo) in idx.get(N(a), [])]
                if noktalar and min(km(ap, q) for ap in aplar for q in noktalar) > 30:
                    b["homonim"] = "%s atlas noktası tanıklardan %.0f km uzak" % (b["atlas"], min(km(ap, q) for ap in aplar for q in noktalar))
                else:
                    ozet["atlasta-var" + ("" if noktalar else "-sinanmadi")] += 1
                    continue
            secim_notu = " MODEL İPUCU: aynı adlı gazetteer kayıtları arasından ipucuna ≤40 km olan seçildi (ONEMLI-MODEL-ALIAS-1023.json; ipucu tanık değildir, koordinat tanıktan)." if ip else ""
            if len(hk) > 1:      # aranan yer tarihî başkenttir: yalnız BİR küme tarihî/başkent işaretliyse (harabe türü ya da TGN notunda 'capital') o seçilir
                tarihi = [h for h in hk if any(c.get("harabe") or re.search(r"\bcapital\b", c.get("sn") or "", re.I) or re.search(r"capital", c.get("tip") or "", re.I) for c in h)]
                if len(tarihi) == 1:
                    secim_notu = " HOMONİM SEÇİMİ: bölgede %d aynı adlı küme; yalnız bu küme tarihî yer/başkent işaretli (harabe türü ya da TGN kapsam notunda 'capital')." % len(hk)
                    hk = tarihi
            if len(hk) > 1:
                durum, neden = "belirsiz", "belirsiz: bölge kutusunda aynı adla %d ayrı yer kümesi (homonim; TSV dizesi ayırt etmiyor): %s" % (
                    len(hk), "; ".join("%s %.2f,%.2f" % (h[0]["src"].split()[-1], h[0]["lat"], h[0]["lon"]) for h in hk[:5]))
            elif len(hk) == 1:
                h = hk[0]
                ana = next((c for c in h if c["src"] == "Pleiades" and c["kesin"]), None) or next((c for c in h if c["src"] == "Getty TGN"), None) or next((c for c in h if c["src"] == "iDAI.gazetteer"), None) or h[0]
                pt = (ana["lat"], ana["lon"])
                tan = {}
                for c in cands:
                    if km(pt, (c["lat"], c["lon"])) <= 10:
                        tan.setdefault(c["src"], c)
                for g in gn:
                    if km(pt, (g["lat"], g["lon"])) <= 10:
                        tan.setdefault("GeoNames", {"src": "GeoNames", "ref": "geonames.org/%s (%s, %s)" % (g["id"], g["ad"], g["ulke"]), "lat": g["lat"], "lon": g["lon"], "n": g["ad"], "ulke": g["ulke"]})
                if len(tan) >= 2:
                    tg = tan.get("Getty TGN")
                    tn = tarih_notu(tg["sn"]) if tg else ""
                    modern = (tan.get("GeoNames") or {}).get("n") or (tg or {}).get("n") or ""
                    modern = {"Taxila Railway Station": "Taxila", "Sybaris": "Thurii", "Qal‘at al ‘Ajāj": "Qal'at al-Bahrain"}.get(modern, modern)      # gazetteer kayıt adı yer adı değil
                    ulke = (tan.get("GeoNames") or {}).get("ulke") or ((tg["par"].split(",")[-3].strip()) if tg and tg["par"].count(",") >= 2 else "")
                    harabe = any(c.get("harabe") for c in tan.values())
                    not_ = "ÖNEMLİ BAŞKENT (YER-2, 23 Ekim 2026): %s başkenti (devletler: %s; TSV yer dizesi '%s'). Tanık kaynaklar: %s.%s %s" % (
                        bolge, k["devletler"], k["yer"], " + ".join(tan), (" TGN yer türü: %s; hiyerarşi: %s." % (tg["tip"], tg["par"])) if tg else "",
                        ("KURULUŞ/İLK ANILIŞ (TGN kapsam notu, olduğu gibi): \"%s\" — kur: yazılmadı (ilk anılıştan kur: türetilmez)." % tn) if tn else "Kuruluş/ilk anılış tarihi: tanık kayıtlarda yok; yazılmadı.")
                    if "CHGIS" in tan:
                        y0 = min(c["y0"] for c in ch if km(pt, (c["lat"], c["lon"])) <= 10)
                        not_ += " CHGIS'te bu adla en erken idarî kayıt: %s yılı (en geç tanıklığı; CHGIS kapsamı MÖ 221'de başlar — kuruluş değildir, kur: yazılmadı)." % y0
                    sonuclar.append({"ad": adl[0], "eski_adlar": adl[1:], "esanlam_modern": modern, "ulke_modern": ulke, "durum": "cift_tanik",
                                     "lat": round(pt[0], 6), "lon": round(pt[1], 6), "tur": "harabe" if harabe else "sehir", "konum_kesinligi": "kesin",
                                     "ilk_anilis_tgn": tn, "bolge_tsv": bolge, "onem": k["onem"],
                                     "tanik": [{"kaynak": c["src"], "url_veya_atif": c["ref"], "lat": c["lat"], "lon": c["lon"]} for c in tan.values()],
                                     "not": not_ + secim_notu + (" HOMONİM DÜZELTMESİ: " + b["homonim"] if b.get("homonim") else "")})
                    ozet["cift_tanik"] += 1
                    continue
                durum, neden = "tek_tanik", "tek tanık: %s %s (%.4f, %.4f) — ikinci bağımsız gazetteer'de aynı adla ≤10 km kayıt yok" % (ana["src"], ana["ref"], ana["lat"], ana["lon"])
            elif len(gn) == 1:
                g = gn[0]
                durum, neden = "tek_tanik", "tek tanık: yalnız GeoNames %s (%s, %s; %.4f, %.4f) — TGN/Pleiades/iDAI'de yok" % (g["id"], g["ad"], g["ulke"], g["lat"], g["lon"])
            elif gn:
                durum, neden = "belirsiz", "yalnız GeoNames'te %d aynı adlı modern yer (TGN/Pleiades/iDAI'de yok)" % len(gn)
            else:
                durum, neden = "bulunamadi", "TGN/Pleiades/iDAI/GeoNames1000'de bölge kutusunda yerleşim türünde birebir ad yok (%s)%s" % (" / ".join(adl), "; " + b["homonim"] if b.get("homonim") else "")
            ozet[durum] += 1
            sonuclar.append({"ad": adl[0], "durum": durum, "not": neden, "bolge_tsv": bolge})
            yok_sat.append((k, " / ".join(adl), durum, neden))
    # MODEL DOĞRULAMASI (YER-2): betiğin çift tanıklı bulduğu ama YANLIŞ yere düşen eşleşmeler (homonim) — yazılmaz, BULUNAMADI'ya gerekçeyle
    for r in sonuclar:
        if r["durum"] == "cift_tanik" and (r["ad"], r["bolge_tsv"]) in MODEL_RED:
            r["durum"] = "model_red"
            r["not"] = "MODEL REDDİ: %s (bulunan %s, %s). " % (MODEL_RED[(r["ad"], r["bolge_tsv"])], r["lat"], r["lon"]) + r["not"]
            ozet["cift_tanik"] -= 1
            ozet["model_red"] += 1
            yok_sat.append(({"bolge": r["bolge_tsv"], "yer": re.search(r"TSV yer dizesi '([^']*)'", r["not"]).group(1), "onem": r["onem"],
                             "devletler": re.search(r"devletler: ([^;]*);", r["not"]).group(1)}, r["ad"], "model_red", r["not"][:260]))
    # atlas yakınlık süzgeci:çift tanıklı nokta ≤5 km'de atlas yerleşimi varsa aynı yer sayılır (Thessalonike/Selanik), yazılmaz
    ap = [(y["lat"], y["lon"], y["ad"]) for y in Y if y.get("lat") is not None]
    for r in sonuclar:
        if r["durum"] != "cift_tanik":
            continue
        en = min(ap, key=lambda q: km((r["lat"], r["lon"]), (q[0], q[1])))
        d = km((r["lat"], r["lon"]), (en[0], en[1]))
        if d <= 5:
            r["durum"] = "atlasta_yakin"
            r["not"] = "atlasta var sayıldı: %s %.1f km — yazılmadı. " % (en[2], d) + r["not"]
            ozet["cift_tanik"] -= 1
            ozet["atlasta-yakin"] += 1
    json.dump({"parti": 107, "yontem": "YER-2 23 Ekim 2026: Getty TGN SPARQL (luc:term, ad birebir, yer türü süzgeci, TSV bölge kutusu) × Pleiades CSV / GeoNames cities1000 ≤10 km; denetim/ARAC-YER-ONEMLI-COZ-1023.py esle",
               "sonuclar": sonuclar}, open(os.path.join(KL, "parti_107_sonuc.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    with open(os.path.join(YE, "ONEMLI-YOK-BULUNAMADI.tsv"), "w", encoding="utf-8") as f:
        f.write("bolge\tyer\tonem_puan\tdevletler\tbilesen\tdurum\tgerekce\n")
        for k, b, d, n in sorted(yok_sat, key=lambda x: (x[0]["bolge"], -x[0]["onem"])):
            f.write("\t".join([k["bolge"], k["yer"], str(k["onem"]), k["devletler"], b, d, n.replace("\t", " ")]) + "\n")
    print(dict(ozet))
