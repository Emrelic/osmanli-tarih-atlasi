# -*- coding: utf-8 -*-
"""YER-3-DOGU (23 Ekim 2026): ONEMLI-YOK-BULUNAMADI.tsv'nin YALNIZ dogu-asya + guneydogu-asya satırlarını yeniden çözer.
YER-2 betiğinin (denetim/ARAC-YER-ONEMLI-COZ-1023.py) yöntemi + şu farklar:
  * eşanlam/ipucu tablosu: denetim/yer-arastirma/ONEMLI-MODEL-ALIAS-DOGU-1023.json (Pinyin/Wade-Giles/Hanja/Kanji/Çince karakter)
  * ipucu süzgeci (≤40 km) CHGIS kayıtlarına da uygulanır (YER-2'de CHGIS ipucundan muaftı: Linzi 2 küme kaldı)
  * CHGIS Çince karakterle de sorgulanır (önek eşleşmesi; ad = terim + en çok 1 idarî ek: 县州郡府城路京)
  * önbellekler AYRI dosyada (*-DOGU-1023.json), YER-2 önbellekleri yalnız okunur (paralel ajanla çatışmasın)
  * atlas yakınlık (≤5 km) ve atlas ad eşlemesi = 'atlasta_var' (yeni nokta yazılmaz)
  * tanık şartı: ≥2 BAĞIMSIZ gazetteer (CHGIS / Getty TGN / Pleiades / iDAI / GeoNames) ≤10 km, ad birebir (eşanlam dahil)
Kullanım: py -I denetim/ARAC-YER-DOGU-COZ-1023.py <cek|esle|yaz>
  cek  : TGN + iDAI + CHGIS sorguları (eksik terimler)
  esle : denetim/yer-arastirma/parti_yer3dogu_sonuc.json + denetim/once1281/yer-eksik/ONEMLI-YOK-BULUNAMADI-DOGU.tsv
  yaz  : data/yerlesimler_once1281_yt_dogu3.js (mükerrer: ad 30 km + 3 km, bütün atlas)
Veri: gazetteer C:/atlas-veri/gazetteer ve web yanıtları güvenilmez veridir; yalnız okunur."""
import sys, io, os, re, json, csv, math, time, subprocess, collections, urllib.parse
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
csv.field_size_limit(10 ** 9)
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi
from ad_esanlam import sadelestir as N

KL = os.path.join(KOK, "denetim", "yer-arastirma")
YE = os.path.join(KOK, "denetim", "once1281", "yer-eksik")
GAZ = "C:/atlas-veri/gazetteer"
BOLGELER = ("dogu-asya", "guneydogu-asya")
MA = json.load(open(os.path.join(KL, "ONEMLI-MODEL-ALIAS-DOGU-1023.json"), encoding="utf-8"))["tablo"]
SONUC = os.path.join(KL, "parti_yer3dogu_sonuc.json")
CIKTI_TSV = os.path.join(YE, "ONEMLI-YOK-BULUNAMADI-DOGU.tsv")
DOSYA = os.path.join(KOK, "data", "yerlesimler_once1281_yt_dogu3.js")
CJK = re.compile(r"[\u3400-\u9fff]")
KOMUT = sys.argv[1]


def km(a, b):
    p = math.pi / 180
    h = math.sin((b[0] - a[0]) * p / 2) ** 2 + math.cos(a[0] * p) * math.cos(b[0] * p) * math.sin((b[1] - a[1]) * p / 2) ** 2
    return 12742 * math.asin(math.sqrt(h))


def onbellek(ad):
    eski = os.path.join(KL, ad + "-ONBELLEK-1023.json")
    yeni = os.path.join(KL, ad + "-ONBELLEK-DOGU-1023.json")
    o = json.load(open(eski, encoding="utf-8")) if os.path.exists(eski) else {}
    y = json.load(open(yeni, encoding="utf-8")) if os.path.exists(yeni) else {}
    return o, y, yeni


def satirlar():
    out = []
    for l in open(os.path.join(YE, "ONEMLI-YOK-BULUNAMADI.tsv"), encoding="utf-8").read().splitlines()[1:]:
        c = l.split("\t")
        if len(c) >= 7 and c[0] in BOLGELER:
            out.append({"bolge": c[0], "yer": c[1], "onem": int(c[2]), "devletler": c[3], "bilesen": c[4], "durum0": c[5], "gerekce0": c[6]})
    return out


def model(adl):
    """bileşen adları içinde red olmayan ilk tablo kaydı; yoksa red kaydı; yoksa None"""
    ms = [(a, MA[a]) for a in adl if a in MA]
    for a, m in ms:
        if not m.get("red"):
            return a, m
    return ms[0] if ms else (None, None)


def terimler(adl):
    a, m = model(adl)
    out = list(adl)
    if m and not m.get("red"):
        out += m.get("alias", [])
    return list(dict.fromkeys(x for x in out if x and x != "-"))


def curl_json(url, sure=40):
    for deneme in range(3):
        try:
            o = subprocess.run(["curl", "-sL", "-m", str(sure), "-A", "Mozilla/5.0", url], capture_output=True, timeout=sure + 20)
            return json.loads(o.stdout.decode("utf-8"))
        except Exception:
            time.sleep(3)
    return None


if KOMUT == "cek":
    S = satirlar()
    tum = []
    for s in S:
        if s["bilesen"] == "-":
            continue
        a, m = model(s["bilesen"].split(" / "))
        if m and m.get("red"):
            continue
        tum += terimler(s["bilesen"].split(" / "))
    tum = list(dict.fromkeys(tum))
    from concurrent.futures import ThreadPoolExecutor
    # --- TGN (Latin terimler) ---
    o, y, yol = onbellek("TGN")
    istek = [a for a in tum if not CJK.search(a) and a not in o and a not in y]
    print("TGN sorgusu:", len(istek), flush=True)

    def tgn(a):
        terim = " ".join(w for w in re.sub(r"[\"\\'’‘ʻ`(),]", " ", a).split() if len(w) > 1)
        if not terim:
            return a, []
        q = ('select ?p ?n ?lat ?lon ?t ?par (group_concat(distinct ?al; separator="|") as ?als) ?sn where { ?p skos:inScheme tgn: ; luc:term "%s"; '
             'gvp:prefLabelGVP/xl:literalForm ?n; gvp:parentString ?par . optional{?p foaf:focus ?f . ?f wgs:lat ?lat; wgs:long ?lon .} '
             'optional {?p gvp:placeTypePreferred/gvp:prefLabelGVP/xl:literalForm ?t} optional{?p xl:altLabel/xl:literalForm ?al} '
             'optional{?p skos:scopeNote/rdf:value ?sn} } group by ?p ?n ?lat ?lon ?t ?par ?sn limit 300') % terim
        j = curl_json("http://vocab.getty.edu/sparql.json?" + urllib.parse.urlencode({"query": q}))
        if j is None:
            return a, None
        return a, [{kk: v["value"] for kk, v in r.items()} for r in j["results"]["bindings"]]
    with ThreadPoolExecutor(4) as ex:
        for a, r in ex.map(tgn, istek):
            if r is None:
                print("ÇEKİLEMEDİ TGN", a, flush=True)
            else:
                y[a] = r
    json.dump(y, open(yol, "w", encoding="utf-8"), ensure_ascii=False)
    # --- iDAI (Latin terimler) ---
    o, y, yol = onbellek("IDAI")
    istek = [a for a in tum if not CJK.search(a) and a not in o and a not in y]
    print("iDAI sorgusu:", len(istek), flush=True)

    def idai(a):
        j = curl_json("https://gazetteer.dainst.org/search.json?" + urllib.parse.urlencode({"q": re.sub(r"[\"'’‘ʻ`()?:]", " ", a).strip(), "limit": 25}))
        if j is None:
            return a, None
        out = []
        for r in j.get("result", []):
            loc = (r.get("prefLocation") or {}).get("coordinates")
            if loc:
                out.append({"id": r.get("gazId"), "n": (r.get("prefName") or {}).get("title", ""), "adlar": [x.get("title", "") for x in r.get("names", [])],
                            "lon": loc[0], "lat": loc[1], "tip": ",".join(r.get("types") or []), "guven": (r.get("prefLocation") or {}).get("confidence")})
        return a, out
    with ThreadPoolExecutor(4) as ex:
        for a, r in ex.map(idai, istek):
            if r is None:
                print("ÇEKİLEMEDİ iDAI", a, flush=True)
            else:
                y[a] = r
    json.dump(y, open(yol, "w", encoding="utf-8"), ensure_ascii=False)
    # --- CHGIS (Latin + Çince) ---
    o, y, yol = onbellek("CHGIS")
    istek = [a for a in tum if (CJK.search(a) or re.match(r"^[A-Za-z' -]+$", a)) and a not in o and a not in y]
    print("CHGIS sorgusu:", len(istek), flush=True)

    def chgis(a):
        j = curl_json("https://chgis.hudci.org/tgaz/placename?" + urllib.parse.urlencode({"fmt": "json", "n": a.replace("'", "").replace("-", "")}), 60)
        if j is None:
            return a, None
        out = []
        for r in j.get("placenames", []):
            try:
                x, yy = [float(v) for v in r.get("xy coordinates", "").split(",")]
            except ValueError:
                continue
            yl = re.findall(r"-?\d+", r.get("years", ""))
            out.append({"id": r["sys_id"], "uri": r["uri"], "ad": r.get("name"), "tr": r.get("transcription", ""), "tip": r.get("feature type", ""),
                        "lat": yy, "lon": x, "y0": int(yl[0]) if yl else None, "y1": int(yl[-1]) if yl else None, "ust": r.get("parent name", "")})
        return a, out
    with ThreadPoolExecutor(3) as ex:
        for a, r in ex.map(chgis, istek):
            if r is None:
                print("ÇEKİLEMEDİ CHGIS", a, flush=True)
            else:
                y[a] = r
    json.dump(y, open(yol, "w", encoding="utf-8"), ensure_ascii=False)
    print("tamam")

elif KOMUT == "esle":
    KUTU = {"dogu-asya": (18, 55, 73, 146), "guneydogu-asya": (-11, 29, 90, 130)}

    def kutuda(b, la, lo):
        k = KUTU[b]
        return k[0] - 1 <= la <= k[1] + 1 and k[2] - 1 <= lo <= k[3] + 1
    YERLESIM_TIP = re.compile(r"inhabited|cit(y|ies)|town|village|settlement|capital|ancient site|archaeolog|deserted|ruin|fort|castle|palace|tell|site|abandoned|historical|former|oppid|neighborhood|metropol|port", re.I)
    RED_TIP = re.compile(r"river|mountain|region|province|nation|state|district|island|lake|count(y|ies)|prefecture|departement|department|general region|peninsula|valley|plain|kingdom|empire|dependent|municipalit", re.I)
    HARABE_TIP = re.compile(r"archaeolog|ancient|deserted|ruin|abandoned|tell", re.I)
    tgo, tgy, _ = onbellek("TGN")
    TG = dict(tgo, **tgy)
    ido, idy, _ = onbellek("IDAI")
    ID = dict(ido, **idy)
    cho, chy, _ = onbellek("CHGIS")
    CH = dict(cho, **chy)
    fl = lambda x: float(x) if x not in (None, "") else None
    places = {}
    with open(os.path.join(GAZ, "gaz-pleiades", "pleiades-places-latest.csv"), encoding="utf-8", newline="") as f:
        for r in csv.DictReader(f):
            try:
                places[r["id"]] = {"title": r["title"], "lat": fl(r["reprLat"]), "lon": fl(r["reprLong"]), "prec": r["locationPrecision"], "tip": r["featureTypes"]}
            except ValueError:
                pass
    pidx = collections.defaultdict(set)
    for pid, p in places.items():
        for parca in re.split(r"[/,;]", p["title"] or ""):
            pidx[N(re.sub(r"\(.*?\)", "", parca))].add(pid)
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
    Y = [y for y in girdi.yukle(sessiz=True) if "parti_yer3dogu_sonuc.json" not in str(y.get("kaynak", ""))]
    aidx = collections.defaultdict(list)
    for y in Y:
        if y.get("lat") is None:
            continue
        for a in [y["ad"], re.sub(r"\s*\(.*?\)", "", y["ad"])] + re.findall(r"\(([^)]*)\)", y["ad"]):
            for p in re.split(r"[;,/]| veya ", a):
                if len(N(p)) >= 3:
                    aidx[N(p)].append(y)
    ap = [(y["lat"], y["lon"], y["ad"]) for y in Y if y.get("lat") is not None]

    def tarih_notu(sn):
        for c in re.split(r"(?<=[.;])\s+", sn or ""):
            if re.search(r"\b(founded|established|built|settled|first mentioned|first recorded|dates (back )?(to|from)|inhabited since|origins?)\b", c, re.I) and re.search(r"\b\d{1,4}(st|nd|rd|th)?\b|\bcentur", c, re.I):
                return c.strip()[:220]
        return ""

    sonuclar, cozulemeyen, ozet = [], [], collections.Counter()
    for s in satirlar():
        b = s["bolge"]
        if s["bilesen"] == "-":
            cozulemeyen.append((s, "yer-adi-yok", "kaynak başkent alanında şehir adı yok: '%s' (YER-2 gerekçesi korunur; nokta yazılamaz)" % s["yer"]))
            ozet["yer-adi-yok"] += 1
            continue
        adl0 = [a for a in s["bilesen"].split(" / ") if a]
        anahtar, m = model(adl0)
        if m and m.get("red"):
            cozulemeyen.append((s, "model_red", "MODEL REDDİ: " + m["red"]))
            ozet["model_red"] += 1
            continue
        tum = terimler(adl0)
        lat_adl = [a for a in tum if not CJK.search(a)]
        cjk_adl = [a for a in tum if CJK.search(a)]
        nset = {N(a) for a in lat_adl} - {""}
        ip = tuple(m["ipucu"]) if m and m.get("ipucu") else None
        # atlas: aynı ad (eşanlam dahil) ipucuna ≤40 km atlas noktası varsa yer atlastadır
        atl = [y for a in lat_adl for y in aidx.get(N(a), []) if (ip is None or km(ip, (y["lat"], y["lon"])) <= 40)]
        if atl:
            y = atl[0]
            sonuclar.append({"ad": adl0[0], "durum": "atlasta_var", "atlas": y["ad"], "not": "atlasta aynı ad/eşanlamla var: %s (%.4f, %.4f)" % (y["ad"], y["lat"], y["lon"]), "bolge_tsv": b})
            ozet["atlasta_var"] += 1
            continue
        cands = []
        for a in lat_adl:
            for t in TG.get(a, []) or []:
                if not t.get("lat"):
                    continue
                adlari = {N(t.get("n", ""))} | {N(x) for x in (t.get("als") or "").split("|")}
                adlari |= {N(re.sub(r"\s*\(.*?\)", "", x)) for x in [t.get("n", "")] + (t.get("als") or "").split("|")}
                tip = t.get("t", "")
                if not (nset & adlari) or (RED_TIP.search(tip) and not YERLESIM_TIP.search(tip)):
                    continue
                la, lo = float(t["lat"]), float(t["lon"])
                if kutuda(b, la, lo) and not any(c["ref"].startswith(t["p"] + " ") for c in cands):
                    cands.append({"src": "Getty TGN", "ref": "%s (%s)" % (t["p"], t.get("n")), "lat": la, "lon": lo, "tip": tip, "n": t.get("n"), "par": t.get("par") or "",
                                  "sn": t.get("sn") or "", "harabe": bool(HARABE_TIP.search(tip))})
            for pid in pidx.get(N(a), ()):
                p = places[pid]
                if p["lat"] is None or not kutuda(b, p["lat"], p["lon"]) or any(c["ref"].startswith("pleiades.stoa.org/places/%s " % pid) for c in cands):
                    continue
                if re.search(r"river|mountain|region|province|people|island|territory|district|lake|sea|bay|cape|plain|valley|road|bridge", p["tip"] or "") and not re.search(r"settlement|fort|urban|city|town|villa|temple|sanctuary", p["tip"] or ""):
                    continue
                cands.append({"src": "Pleiades", "ref": "pleiades.stoa.org/places/%s (%s, %s, %s)" % (pid, p["title"], p["tip"], p["prec"]), "lat": p["lat"], "lon": p["lon"],
                              "tip": p["tip"] or "", "n": p["title"], "harabe": bool(re.search("archaeolog|ruin|findspot", p["tip"] or ""))})
            for r in ID.get(a, []) or []:
                if not ({N(r["n"])} | {N(x) for x in r["adlar"]}) & nset or not kutuda(b, r["lat"], r["lon"]):
                    continue
                if r["tip"] and not re.search(r"populated|archaeolog|building|site|settlement", r["tip"]):
                    continue
                if not any(c["ref"].startswith("gazetteer.dainst.org/place/%s " % r["id"]) for c in cands):
                    cands.append({"src": "iDAI.gazetteer", "ref": "gazetteer.dainst.org/place/%s (%s, %s)" % (r["id"], r["n"], r["tip"] or "-"), "lat": r["lat"], "lon": r["lon"],
                                  "tip": r["tip"] or "", "n": r["n"], "harabe": "archaeolog" in (r["tip"] or "")})
        for a in tum:
            for r in CH.get(a, []) or []:
                if r["y0"] is None or r["y0"] > 1281 or r["lon"] == 0 or re.search(r"村|镇|cun|zhen|POLYGON", r["tip"] or ""):
                    continue
                if CJK.search(a):
                    ek = (r["ad"] or "")[len(a):]
                    if not (r["ad"] or "").startswith(a) or len(ek) > 1 or (ek and ek not in "县州郡府城路京"):
                        continue
                else:
                    if N(re.sub(r"\s+(Xian|Zhou|Jun|Fu|Cheng|Lu|Du|Jing|Zhen|Guo)$", "", r["tr"] or "")) not in nset:
                        continue
                if any(c["ref"].startswith(r["uri"] + " ") for c in cands):
                    continue
                cands.append({"src": "CHGIS", "ref": "%s (%s %s, %s, %s~%s)" % (r["uri"], r["ad"], r["tr"], r["tip"], r["y0"], r["y1"]), "lat": r["lat"], "lon": r["lon"],
                              "tip": r["tip"], "n": r["tr"], "harabe": False, "y0": r["y0"]})
        gn = [g for a in lat_adl for g in gidx.get(N(a), ()) if kutuda(b, g["lat"], g["lon"])]
        if ip:
            cands = [c for c in cands if km(ip, (c["lat"], c["lon"])) <= 40]
            gn = [g for g in gn if km(ip, (g["lat"], g["lon"])) <= 40]
        # kümeler (30 km; GeoNames küme açmaz)
        hk = []
        for c in cands:
            for h in hk:
                if km((h[0]["lat"], h[0]["lon"]), (c["lat"], c["lon"])) <= 30:
                    h.append(c)
                    break
            else:
                hk.append([c])
        if not hk and gn:
            hk = [[{"src": "GeoNames", "ref": "geonames.org/%s (%s, %s)" % (g["id"], g["ad"], g["ulke"]), "lat": g["lat"], "lon": g["lon"], "n": g["ad"], "ulke": g["ulke"]}] for g in gn[:1]]
        if len(hk) > 1:
            neden = "belirsiz: ipucu süzgecinden sonra da %d ayrı küme: %s" % (len(hk), "; ".join("%s %.2f,%.2f" % (h[0]["src"].split()[-1], h[0]["lat"], h[0]["lon"]) for h in hk[:5]))
            cozulemeyen.append((s, "belirsiz", neden))
            ozet["belirsiz"] += 1
            continue
        if not hk:
            neden = "TGN/CHGIS/Pleiades/iDAI/GeoNames1000'de bölge kutusunda%s yerleşim türünde birebir ad yok (aranan: %s)" % (" ve ipucuna ≤40 km" if ip else "", " / ".join(tum))
            cozulemeyen.append((s, "bulunamadi", neden))
            ozet["bulunamadi"] += 1
            continue
        h = hk[0]
        ana = next((c for c in h if c["src"] == "Pleiades"), None) or next((c for c in h if c["src"] == "Getty TGN"), None) or next((c for c in h if c["src"] == "iDAI.gazetteer"), None) or h[0]
        pt = (ana["lat"], ana["lon"])
        tan = {}
        for c in cands:
            if km(pt, (c["lat"], c["lon"])) <= 10:
                tan.setdefault(c["src"], c)
        for g in gn:
            if km(pt, (g["lat"], g["lon"])) <= 10:
                tan.setdefault("GeoNames", {"src": "GeoNames", "ref": "geonames.org/%s (%s, %s)" % (g["id"], g["ad"], g["ulke"]), "lat": g["lat"], "lon": g["lon"], "n": g["ad"], "ulke": g["ulke"]})
        if len(tan) < 2:
            neden = "tek tanık: %s %s (%.4f, %.4f) — ikinci bağımsız gazetteer'de aynı ad/eşanlamla ≤10 km kayıt yok (aranan: %s)" % (ana["src"], ana["ref"], pt[0], pt[1], " / ".join(tum))
            cozulemeyen.append((s, "tek_tanik", neden))
            ozet["tek_tanik"] += 1
            continue
        # dönem kayması sınavı: CHGIS'in bu ad/eşanlamla EN ERKEN kaydı (ipucu ≤40 km) noktaya >10 km ise gazetteer
        # konsensüsü sonraki (taşınmış) merkezi gösteriyor olabilir (Anyi: Yuncheng ↔ MÖ Anyi) — yazılmaz
        chs = sorted((c for c in cands if c["src"] == "CHGIS"), key=lambda c: c["y0"])
        if chs and km(pt, (chs[0]["lat"], chs[0]["lon"])) > 10:
            neden = "dönem kayması: tanıklar (%s) %.4f,%.4f'te buluşuyor ama CHGIS'in en erken kaydı %s %.1f km uzakta — tarihî merkez taşınmış olabilir; nokta teyit edilmedi" % (
                " + ".join(tan), pt[0], pt[1], chs[0]["ref"], km(pt, (chs[0]["lat"], chs[0]["lon"])))
            cozulemeyen.append((s, "donem_kaymasi", neden))
            ozet["donem_kaymasi"] += 1
            continue
        en = min(ap, key=lambda q: km(pt, (q[0], q[1])))
        d = km(pt, (en[0], en[1]))
        if d <= 5:
            sonuclar.append({"ad": adl0[0], "durum": "atlasta_var", "atlas": en[2], "not": "atlasta var sayıldı (≤5 km): %s %.1f km — yazılmadı" % (en[2], d), "bolge_tsv": b})
            ozet["atlasta_var"] += 1
            continue
        tg = tan.get("Getty TGN")
        tn = tarih_notu(tg["sn"]) if tg else ""
        modern = (tan.get("GeoNames") or {}).get("n") or (tg or {}).get("n") or ""
        ulke = (tan.get("GeoNames") or {}).get("ulke") or ((tg["par"].split(",")[-3].strip()) if tg and tg["par"].count(",") >= 2 else "")
        not_ = "ÖNEMLİ BAŞKENT (YER-3-DOGU, 23 Ekim 2026): %s başkenti (devletler: %s; TSV yer dizesi '%s'). Tanık kaynaklar: %s.%s %s" % (
            b, s["devletler"], s["yer"], " + ".join(tan), (" TGN yer türü: %s; hiyerarşi: %s." % (tg["tip"], tg["par"])) if tg else "",
            ("KURULUŞ/İLK ANILIŞ (TGN kapsam notu, olduğu gibi): \"%s\" — kur: yazılmadı (ilk anılıştan kur: türetilmez)." % tn) if tn else "Kuruluş/ilk anılış tarihi: tanık kayıtlarda yok; yazılmadı.")
        if "CHGIS" in tan:
            y0 = min(c["y0"] for c in cands if c["src"] == "CHGIS" and km(pt, (c["lat"], c["lon"])) <= 10)
            not_ += " CHGIS'te bu ad/eşanlamla en erken idarî kayıt: %s yılı (en geç tanıklığı; CHGIS kapsamı MÖ 221'de başlar — kuruluş değildir, kur: yazılmadı)." % y0
        if ip:
            not_ += " MODEL İPUCU: aynı adlı gazetteer kayıtları arasından ipucuna ≤40 km olanlar seçildi (ONEMLI-MODEL-ALIAS-DOGU-1023.json; ipucu tanık değildir, koordinat tanıktan)."
        sonuclar.append({"ad": adl0[0], "eski_adlar": adl0[1:], "esanlam_modern": modern, "ulke_modern": ulke, "durum": "cift_tanik", "lat": round(pt[0], 6), "lon": round(pt[1], 6),
                         "tur": "harabe" if any(c.get("harabe") for c in tan.values()) else "sehir", "konum_kesinligi": "kesin", "ilk_anilis_tgn": tn, "bolge_tsv": b, "onem": s["onem"],
                         "tanik": [{"kaynak": c["src"], "url_veya_atif": c["ref"], "lat": c["lat"], "lon": c["lon"]} for c in tan.values()], "not": not_})
        ozet["cift_tanik"] += 1
    json.dump({"parti": "yer3dogu", "yontem": "YER-3-DOGU 23 Ekim 2026: denetim/ARAC-YER-DOGU-COZ-1023.py esle (TGN/CHGIS/Pleiades/iDAI/GeoNames, ≥2 bağımsız ≤10 km, ipucu ≤40 km)",
               "sonuclar": sonuclar}, open(SONUC, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    with open(CIKTI_TSV, "w", encoding="utf-8") as f:
        f.write("bolge\tyer\tonem_puan\tdevletler\tbilesen\tdurum\tgerekce\n")
        for s, d, n in sorted(cozulemeyen, key=lambda x: (x[0]["bolge"], -x[0]["onem"])):
            f.write("\t".join([s["bolge"], s["yer"], str(s["onem"]), s["devletler"], s["bilesen"], d, n.replace("\t", " ")]) + "\n")
    for r in sonuclar:
        print(r["durum"], r["ad"], r.get("lat", ""), r.get("lon", ""), r.get("atlas", ""), " + ".join(t["kaynak"] for t in r.get("tanik", [])))
    print(dict(ozet))

elif KOMUT == "yaz":
    R = json.load(open(SONUC, encoding="utf-8"))["sonuclar"]
    Y = [y for y in girdi.yukle(sessiz=True) if "parti_yer3dogu_sonuc.json" not in str(y.get("kaynak", ""))]
    mevcut = [(y["lat"], y["lon"], y["ad"]) for y in Y if y.get("lat") is not None]
    madidx = collections.defaultdict(list)
    for y in Y:
        if y.get("lat") is None:
            continue
        for a in [y["ad"], re.sub(r"\s*\(.*?\)", "", y["ad"])] + re.findall(r"\(([^)]*)\)", y["ad"]):
            madidx[N(a)].append((y["lat"], y["lon"], y["ad"]))
    jstr = lambda x: json.dumps(x, ensure_ascii=False)
    satir = ["// yerlesimler_once1281_yt_dogu3.js — 1281 öncesi önemli başkent yerleri, Doğu + Güneydoğu Asya (YER-3-DOGU, 23 Ekim 2026)",
             "// Kaynak: denetim/yer-arastirma/parti_yer3dogu_sonuc.json (ÇİFT TANIK: ≥2 bağımsız gazetteer ≤10 km) · üreten: denetim/ARAC-YER-DOGU-COZ-1023.py yaz",
             "// s:[] + bos:\"veri-yok\" + bit:\"1281-01-01\": motor penceresinde canlı DEĞİL (yer_id/kamera için; YER-2 emsali). kur: yazılmadı (gazetteer kuruluş vermiyor).",
             "// Mükerrer tarama: normalleştirilmiş ad (30 km) + 3 km, bütün atlas. Çözülemeyenler: denetim/once1281/yer-eksik/ONEMLI-YOK-BULUNAMADI-DOGU.tsv",
             "window.YERLESIMLER_ONCE1281_YT_DOGU3 = [", ""]
    yazilan, atlanan, gor = 0, [], []
    for r in R:
        if r["durum"] != "cift_tanik":
            continue
        pt = (r["lat"], r["lon"])
        ceki = None
        for a in [r["ad"], r.get("esanlam_modern") or ""] + list(r.get("eski_adlar") or []):
            for la, lo, mad in madidx.get(N(a), []):
                if N(a) and km(pt, (la, lo)) <= 30:
                    ceki = "%s ad %.1f km" % (mad, km(pt, (la, lo)))
        for la, lo, mad in mevcut:
            if not ceki and km(pt, (la, lo)) <= 3:
                ceki = "%s 3km (%.2f km)" % (mad, km(pt, (la, lo)))
        for q in gor:
            if not ceki and km(pt, q[0]) <= 3:
                ceki = "%s parti içi 3 km" % q[1]
        if ceki:
            atlanan.append((r["ad"], ceki))
            continue
        modern = re.split(r"[(,/;]", r.get("esanlam_modern") or "")[0].strip()
        ad_yaz = r["ad"] if (not modern or N(modern) == N(r["ad"]) or N(modern) in N(r["ad"]) or N(r["ad"]) in N(modern)) else "%s (%s)" % (r["ad"], modern)
        gor.append((pt, ad_yaz))
        tan = " · ".join("%s %s (%s, %s)" % (t["kaynak"], t["url_veya_atif"], t["lat"], t["lon"]) for t in r["tanik"])
        satir.append('{ ad:%s, tur:%s, lat:%s, lon:%s, g:0, k:0, s:[], d:[], bos:"veri-yok", bit:"1281-01-01",' % (jstr(ad_yaz), jstr(r["tur"]), r["lat"], r["lon"]))
        satir.append('  not:%s,' % jstr("YER-TANIMA: kronolojide %s adıyla geçer; eski adlar: %s; modern: %s (%s). %s" % (r["ad"], ", ".join(r.get("eski_adlar") or []) or "-", r.get("esanlam_modern") or "-", r.get("ulke_modern") or "-", r["not"])))
        satir.append('  kaynak:%s },' % jstr("ÇİFT TANIK: " + tan + " · denetim/yer-arastirma/parti_yer3dogu_sonuc.json"))
        yazilan += 1
    satir.append("];")
    open(DOSYA, "w", encoding="utf-8").write("\n".join(satir) + "\n")
    print("yazılan:", yazilan)
    for a in atlanan:
        print("MÜKERRER atlandı:", *a)
