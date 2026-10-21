"""MÖ DEVLET-ŞEHİR ZİNCİRLERİ: araştırma `sehir_kontrol` kayıtlarını motorun okuduğu yerleşimlere (s: devlet künyesi zinciri) çevirir.
VERI-MO-ARKEO, 21 Ekim 2026 (Emre ek yönü: "Mezopotamya/Mısır devletleri künye+yerleşim+s: zinciriyle MÖ 3000–MS 1").

    py denetim/arkeoloji_devlet_zincir_1020.py

Girdi : denetim/arastirma/3-*.json  `sehir_kontrol` (şehir, ≥2 koordinat tanığı, dönemler[sahip, bas_mo, son_mo, gecis_kaynagi, alinti, kronoloji_okulu])
Çıktı : data/yerlesimler_mo_zincir.js (yeni noktalar) · data/yerlesimler_mo_sumer.js (mevcut Sümer noktalarına s: eklenir) ·
        olay dosyalarında dönem-ucu maddeleri (data/olaylar_arkeoloji_zincir.js; var olan madde ±30 günde sahibi anıyorsa o maddenin `yer`i genişler)

KURALLAR
 • sahip → künye eşlemesi OWNER_MAP'te AÇIK; künyesi olmayan sahip (Lugalzagesi krallığı…) ya da künye ömrü DIŞINDA kalan aralık `__BOSLUK__` + kaynak:'ta BEYAN
   (sahip bilinir ama künyesi yok ≠ kimsenin değil); `dolayli_cikarim:true` dönemler YAZILMAZ (boşluk kalır); bas_mo'su olmayan dönem YAZILMAZ.
 • dönemler künye f/t penceresine KIRPILIR (hayalet devlet); çakışmada sonraki dönem başlangıcı öncekini keser; boşluklar __BOSLUK__ (veri-yok) beyanlı.
 • kur: = ilk KAYNAKLI sahip döneminin başı (kuruluş iddiası DEĞİL; not'ta yazılı); bit: = son dönem sonu (yoksa son künyenin sonu, TÜRETİLMİŞ).
 • Orta Kronoloji (MC) esas; okullar arası çelişki kaynaktaki ic_not'tan nota geçer, ortalanmaz.
"""
import glob, json, math, os, re, sys

sys.stdout.reconfigure(encoding="utf-8")
KOK = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))
ARA = os.path.join(KOK, "denetim", "arastirma")


def iso(mo):
    return "0000-01-01" if mo == 1 else ("-%04d-01-01" % (mo - 1) if mo > 1 else "%04d-01-01" % (-mo))


def yil(t):
    m = re.match(r"^(-?)(\d{4,6})-(\d\d)-(\d\d)$", t)
    return (-1 if m.group(1) else 1) * int(m.group(2))


def gn(t):
    m = re.match(r"^(-?)(\d{4,6})-(\d\d)-(\d\d)$", t)
    return (-1 if m.group(1) else 1) * int(m.group(2)) * 372 + (int(m.group(3)) - 1) * 31 + int(m.group(4)) - 1


def km(a, b):
    p = math.pi / 180
    x = (b[1] - a[1]) * p * math.cos((a[0] + b[0]) / 2 * p)
    return 6371 * math.hypot(x, (b[0] - a[0]) * p)


def js(x):
    return json.dumps(x, ensure_ascii=False)


def jso(x):
    if isinstance(x, dict):
        return "{" + ",".join("%s:%s" % (k, jso(v)) for k, v in x.items()) + "}"
    if isinstance(x, list):
        return "[" + ",".join(jso(v) for v in x) + "]"
    return json.dumps(x, ensure_ascii=False)


def kunyeler():
    s = open(os.path.join(KOK, "data", "devletler.js"), encoding="utf-8").read()
    return {m.group(1): (m.group(2), m.group(3), m.group(4)) for m in
            re.finditer(r'\{ id:"([^"]+)", ad:"([^"]*)", tur:"[^"]*", bolge:"[^"]*", f:"([^"]+)", t:"([^"]+)"', s)}


# sahip dizgisi (regex) → künye id | None (künyesi yok) ; ilk eşleşen kazanır
OWNER_MAP = [
    (r"Lugalzagesi", None), (r"Enşakuşana", None), (r"Gutium egemenliğinde Umma", "gutium"), (r"^Gutium|Gutium çağı", "gutium"),
    (r"Akad İmparatorluğu", "akad"), (r"Ur III", "ur-3"),
    (r"İsin I Hanedanı", "isin"), (r"Larsa", "larsa"), (r"Babil I Hanedanı|Eski Babil", "babil-eski"),
    (r"Deniz Ülkesi", "sealand-1"), (r"Kassit sonrası", "isin-2"), (r"Kassit", "kassit-babil"),
    (r"Yeni Asur", "yeni-asur"), (r"Asur \(Tukulti", "orta-asur"), (r"Orta/Yeni Asur", None), (r"Šamši-Adad", "samsi-adad"),
    (r"Bağımsız Aşşur|Eski Asur", "eski-asur"), (r"Mitanni", None), (r"Aşşur şehir", None),
    (r"Yeni Babil", "yeni-babil"), (r"Ahameniş", "ahamenis"), (r"Makedon", "iskender-imparatorlugu"), (r"Seleukos", "selevkos"), (r"Part", "part"),
    (r"Lagaş I \(", "sumer-lagas-1"), (r"Lagaş II", "lagas-2"), (r"^Elam|Elam \(", "ELAM"), (r"Med Devleti", "medya"),
    (r"Ebla krallığı", "ebla-1"), (r"Mari \(Ville II\)", "mari-erken"),
    (r"Güney isyanı|Pers \(Ahameniş atası\)|Ur III eyaleti", None),
]
ELAM_ZINCIR = ["elam-simaski", "elam-sukkalmah", "elam-orta", "elam-yeni"]


def eslestir(sahip, KU, bas_iso, son_iso):
    if sahip in KU:                                  # 4. dalga: araştırma doğrudan künye id'si veriyor
        return [sahip]
    for rx, kid in OWNER_MAP:
        if re.search(rx, sahip):
            if kid == "ELAM":
                return ELAM_ZINCIR
            if rx == r"Ur III eyaleti":
                return "ur-3" if "Ur III eyaleti" in sahip else None
            return [kid] if kid else None
    return None


def parcala(kids, KU, bas_iso, son_iso):
    """birden çok künyeye yayılan (Elam) dönemi künye pencerelerine böl"""
    out = []
    for k in kids:
        _, f, t = KU[k]
        a, b = max(bas_iso, f, key=gn), min(son_iso, t, key=gn)
        if gn(a) < gn(b):
            out.append((k, a, b))
    return out


def oku_sk():
    sk = []
    for f in sorted(glob.glob(os.path.join(ARA, "3-*.json")) + glob.glob(os.path.join(ARA, "4-*.json"))):
        d = json.load(open(f, encoding="utf-8"))
        for s in d.get("sehir_kontrol") or []:
            s["_dosya"] = os.path.basename(f)
            sk.append(s)
    return sk


def olay_havuzu():
    dosyalar = {}
    for f in sorted(glob.glob(os.path.join(KOK, "data", "olaylar_arkeoloji*.js"))):
        if os.path.basename(f) == "olaylar_arkeoloji_zincir.js":
            continue
        sx = open(f, encoding="utf-8").read()
        mx = re.search(r"^(.*?=\s*)(\[.*\])(\s*;?\s*)$", sx, re.S)
        dosyalar[f] = (mx.group(1), json.loads(mx.group(2)))
    return dosyalar


def mevcut_noktalar(haric):
    out = []
    for f in glob.glob(os.path.join(KOK, "data", "yerlesimler*.js")):
        if os.path.basename(f) in haric:
            continue
        s = open(f, encoding="utf-8", errors="replace").read()
        for m in re.finditer(r'ad:"([^"]+)"[^\n]*?lat:(-?[\d.]+)\s*,\s*lon:(-?[\d.]+)', s):
            out.append((m.group(1), float(m.group(2)), float(m.group(3)), os.path.basename(f)))
    return out


def main():
    KU = kunyeler()
    SK = oku_sk()
    if not SK:
        print("sehir_kontrol girdisi yok (denetim/arastirma/3-*.json)")
        return
    sumer_yol = os.path.join(KOK, "data", "yerlesimler_mo_sumer.js")
    sumer = open(sumer_yol, encoding="utf-8").read()
    sumer_noktalar = [(m.group(1), float(m.group(2)), float(m.group(3))) for m in
                      re.finditer(r'\{ ad:"([^"]+)"[^\n]*?lat:(-?[\d.]+), lon:(-?[\d.]+)', sumer)]
    MEV = mevcut_noktalar({"yerlesimler_mo_zincir.js", "yerlesimler_mo_sumer.js"})
    yeni, sumer_ek, red = [], {}, []
    PT_AD = {}
    gecisler = {}                                   # (t, kimden, kime) -> dict(sehirler:set, kaynak, alinti, okul)

    for s in SK:
        ad = re.sub(r"\s*\(.*?\)", "", s["sehir"]).strip()
        tn = [x for x in (s.get("konum_tanik") or []) if x.get("lat") is not None]
        if s.get("lat") is None or len(tn) < 2:
            red.append((s["sehir"], "koordinat <2 tanık"))
            continue
        # dönemleri sırala
        P = []
        for p in s["donemler"]:
            if p.get("dolayli_cikarim"):
                continue
            if p.get("bas_mo") is None:
                # başlangıç kaynakta yok: sahip künye ise dönem künyenin kendi f'sinden başlar (künye f'si kaynaklı)
                if p.get("sahip") in KU and p.get("yil_durumu") != "yil-bulunamadi" and p.get("son_mo") is not None:
                    p = dict(p)
                    p["bas_mo"] = 10 ** 6                      # sentinel: aşağıda künye f'sine çekilir
                    p["_bas_kunye"] = True
                else:
                    continue
            if p.get("yil_durumu") == "yil-bulunamadi" or not p.get("sahip"):
                continue                               # yılı kaynaklanmamış / sahibi künyesiz-özerk (ör. Sparta: Akhaia Birliği) dönemler YAZILMAZ
            P.append(p)                                # (MS yılları negatif bas_mo/son_mo: -476 = MS 476 — iso() halleder)
        P.sort(key=lambda p: -p["bas_mo"])
        if not P:
            red.append((s["sehir"], "kaynaklı dönem yok (bas_mo'su olan, dolaylı olmayan)"))
            continue
        # künye parçaları
        seg = []                                       # dict(f,t,d,kaynak,p)
        for i, p in enumerate(P):
            f = KU[p["sahip"]][1] if p.get("_bas_kunye") else iso(p["bas_mo"])
            if p.get("son_mo") is not None:
                t = iso(p["son_mo"])
            else:
                t = iso(P[i + 1]["bas_mo"]) if i + 1 < len(P) else None
            kids = eslestir(p["sahip"], KU, f, t or "2000-01-01")
            if t is None:
                # son dönem açık uçlu: künye sonuna kadar
                t = KU[kids[-1]][2] if kids else f
                if kids is None or gn(t) <= gn(f):
                    red.append((s["sehir"], "açık uçlu son dönem künyesiz: %s" % p["sahip"]))
                    continue
            if gn(f) >= gn(t):
                continue
            if not kids:
                seg.append(dict(f=f, t=t, d="__BOSLUK__", p=p,
                                kaynak="BEYAN (VERI-MO-ARKEO): sahip kaynakta %s ama künyesi yok → boşluk (kimsenin değil DEĞİL; künye açılınca doldurulur). %s" %
                                       (js(p["sahip"]), (p.get("gecis_kaynagi") or "")[:300])))
                continue
            for (k, a, b) in parcala(kids, KU, f, t):
                if gn(a) > gn(f) and not seg:
                    pass
                seg.append(dict(f=a, t=b, d=k, p=p, kaynak="künye %s (%s) · %s" % (k, KU[k][0], (p.get("gecis_kaynagi") or "")[:420])))
            # künye penceresi dışında kalan baş/son parça: boşluk (beyanlı)
            ilk_f, son_t = KU[kids[0]][1], KU[kids[-1]][2]
            if gn(f) < gn(ilk_f):
                seg.append(dict(f=f, t=min(ilk_f, t, key=gn), d="__BOSLUK__", p=p,
                                kaynak="BEYAN (VERI-MO-ARKEO): kaynak %s sahibini %s'dan itibaren veriyor ama künye f=%s → o aralık künye ömrü DIŞI: boşluk (künye aşımı: devlet yoksa dönem kısaltılır)" % (js(p["sahip"]), f, ilk_f)))
            if gn(t) > gn(son_t) and gn(son_t) > gn(f):
                seg.append(dict(f=son_t, t=t, d="__BOSLUK__", p=p,
                                kaynak="BEYAN (VERI-MO-ARKEO): kaynak %s sahibini %s'a dek veriyor ama künye t=%s → künye sonrası boşluk" % (js(p["sahip"]), t, son_t)))
        if not seg:
            red.append((s["sehir"], "hiç dönem üretilemedi"))
            continue
        seg.sort(key=lambda g: gn(g["f"]))
        # çakışma: sonraki başlangıcı öncekini keser; boşluk doldur
        temiz = []
        for g in seg:
            if temiz and gn(g["f"]) < gn(temiz[-1]["t"]):
                temiz[-1]["t"] = g["f"] if gn(g["f"]) > gn(temiz[-1]["f"]) else temiz[-1]["t"]
                if gn(temiz[-1]["f"]) >= gn(temiz[-1]["t"]):
                    temiz.pop()
            if temiz and gn(g["f"]) > gn(temiz[-1]["t"]):
                temiz.append(dict(f=temiz[-1]["t"], t=g["f"], d="__BOSLUK__", p=None,
                                  kaynak="BEYAN (VERI-MO-ARKEO): iki kaynaklı dönem arasında sahip kaynakta yok (%s … %s) → boşluk, bos:'veri-yok' (kimsenin değil DEĞİL, araştırılmadı da DEĞİL: kaynak sessiz)" % (temiz[-1]["t"], g["f"])))
            temiz.append(g)
        # komşu aynı-sahip parçaları birleştir
        son = []
        for g in temiz:
            if son and son[-1]["d"] == g["d"] and son[-1]["t"] == g["f"]:
                son[-1]["t"] = g["t"]
                if g["d"] == "__BOSLUK__" and g["kaynak"][:80] not in son[-1]["kaynak"]:
                    son[-1]["kaynak"] = (son[-1]["kaynak"] + " || " + g["kaynak"])[:900]
                    if g["p"] is not None and son[-1]["p"] is None:
                        son[-1]["p"] = g["p"]
            else:
                son.append(g)
        kur_t, bit_t = son[0]["f"], son[-1]["t"]
        # gerçek kaynaklı geçişleri biriktir
        for i, g in enumerate(son):
            if g["p"] is None:
                continue
            kim = son[i - 1]["d"] if i else None
            if kim is not None and kim != g["d"]:
                kd = (g["f"], kim, g["d"])
                o = gecisler.setdefault(kd, dict(s=set(), kaynak=g["p"].get("gecis_kaynagi"), alinti=g["p"].get("alinti"), okul=g["p"].get("kronoloji_okulu"), sahip=g["p"]["sahip"]))
                o["s"].add(s["sehir"])
        for ix_, g in enumerate(son):                   # her uç için (künye ucu/boşluk ucu dahil) kayıt
            if g["d"] == "__BOSLUK__" and 0 < ix_ < len(son) - 1:
                continue                                # ARA boşlukların uçları komşu sahiplerin uçlarıyla AYNI gün (onlar kayıtlı); ilk/son boşluk ucu yalnız kendisine ait
            for uc, tip in ((g["f"], "b"), (g["t"], "s")):
                kd = (uc, g["d"], tip)
                gecisler.setdefault(("UC",) + kd, dict(s=set(), kaynak=None, alinti=None, okul=None, sahip=g["d"]))["s"].add(s["sehir"])
        notm = ("MÖ DEVLET-ŞEHİR ZİNCİRİ (21 Ekim 2026, VERI-MO-ARKEO). kur: = ilk KAYNAKLI sahip döneminin başı (kuruluş iddiası DEĞİL — şehir daha eskidir); bit: = son dönem sonu "
                "(künye ömrüne kırpılmış). Kronoloji: %s. %s Koordinat tanıkları: %s. Dönemler araştırma kaydı `sehir_kontrol` (denetim/arastirma/%s); dolaylı çıkarım dönemler YAZILMADI. %s"
                % ("Orta Kronoloji (MC) / kronik yılı (mutlak)", "Boşluklar: " + (s.get("bosluk_notu") or "")[:500],
                   " ↔ ".join("%s (%.4f,%.4f)" % (x["kaynak"], x["lat"], x["lon"]) for x in tn), s["_dosya"], (s.get("konum_not") or "")[:300]))
        rec = dict(ad=ad, tur="sehir", lat=s["lat"], lon=s["lon"], g=1, k=0, kur=kur_t, bit=bit_t,
                   kesinlik={"f": "onyil", "t": "onyil"}, d=[],
                   s=[dict(f=g["f"], t=g["t"], d=g["d"], kesinlik={"f": "onyil", "t": "onyil"}, kaynak=g["kaynak"][:600]) for g in son],
                   kaynak="denetim/arastirma/%s sehir_kontrol: %s" % (s["_dosya"], s["sehir"]), **{"not": notm})
        # Sümer noktası mı?
        sm = [a for (a, la, lo) in sumer_noktalar if km((s["lat"], s["lon"]), (la, lo)) < 3.0]
        PT_AD[s["sehir"]] = sm[0] if sm else ad
        if sm:
            sumer_ek[sm[0]] = rec
            continue
        mk = [(a2, fn) for (a2, la, lo, fn) in MEV if km((s["lat"], s["lon"]), (la, lo)) < 3.0]
        if mk:
            red.append((s["sehir"], "3 km içinde mevcut nokta: %s" % (mk[0],)))
            continue
        yeni.append(rec)

    # ── Sümer noktalarına s: ekle (yalnız s:[] olan; kur/bit korunur, dönemler onlara kırpılır)
    #    VARSAYILAN: dosyaya YAZILMAZ (MÖ devlet künyelerinin BOYALAR girişi yok → 'HARİTA DELİĞİ' kapısı); denetim/arastirma/sumer-zincir-bekleyen.json'a dökülür.
    #    BOYALAR gelince: --sumer-uygula
    sumer_json = {}
    for a, rec in sumer_ek.items():
        m0 = re.search(r'\{ ad:"%s"' % re.escape(a), sumer)
        if not m0:
            red.append((a, "Sümer dosyasında ad bulunamadı"))
            continue
        sonr = sumer.find("\n{ ad:", m0.start() + 1)
        sonr = sonr if sonr != -1 else sumer.index("\n];", m0.start())
        blok = sumer[m0.start():sonr]
        m = m0
        if "s:[], d:[]" not in blok:
            red.append((a, "Sümer girdisinde s:[] kalıbı yok (zaten dolu?)"))
            continue
        kurm = re.search(r'kur:"([^"]+)"', blok)
        bitm = re.search(r'bit:"([^"]+)"', blok)
        segs = rec["s"]
        if kurm:
            segs = [g for g in segs if gn(g["t"]) > gn(kurm.group(1))]
            if segs and gn(segs[0]["f"]) < gn(kurm.group(1)):
                segs[0] = dict(segs[0], f=kurm.group(1))
        if bitm:
            segs = [g for g in segs if gn(g["f"]) < gn(bitm.group(1))]
            if segs and gn(segs[-1]["t"]) > gn(bitm.group(1)):
                segs[-1] = dict(segs[-1], t=bitm.group(1))
        if not segs:
            red.append((a, "Sümer noktası: kur/bit penceresiyle örtüşen dönem yok"))
            continue
        sumer_json[a] = segs
        ek_not = " ZİNCİR (21 Ekim 2026, VERI-MO-ARKEO): s: araştırma sehir_kontrol'dan (denetim/arastirma/3-mezopotamya-iran.json); dönemler nokta kur/bit penceresine ve künye ömrüne kırpıldı; boşluklar __BOSLUK__ beyanlı."
        yeni_blok = blok.replace("s:[], d:[]", "s:%s, d:[]" % jso(segs), 1)
        yeni_blok = yeni_blok.replace('SAHİPLİK (s:) YAZILMADI', 'SAHİPLİK s: ZİNCİRİ EKLENDİ (21 Ekim 2026)', 1)
        sumer = sumer[:m.start()] + yeni_blok + sumer[m.start() + len(blok):]
        print("Sümer noktası s: eklendi:", a, len(segs), "dönem")

    # ── yeni noktalar dosyası
    if yeni:
        yol = os.path.join(KOK, "data", "yerlesimler_mo_zincir.js")
        with open(yol, "w", encoding="utf-8", newline="\n") as f:
            f.write("// MÖ DEVLET-ŞEHİR ZİNCİRLERİ — Mezopotamya/İran şehirleri · VERI-MO-ARKEO 21 Ekim 2026 · üretici denetim/arkeoloji_devlet_zincir_1020.py\n")
            f.write("// s: = devlet künyeleri (devletler.js); kur: = ilk KAYNAKLI sahip dönemi (kuruluş DEĞİL); boşluk __BOSLUK__ beyanlı. Boya anahtarı: mevcut künye harita: alanları (yeni boya yok).\n")
            f.write("window.YERLESIMLER_MO_ZINCIR = [\n")
            for r in yeni:
                f.write("{ " + ", ".join("%s:%s" % (k, jso(v)) for k, v in r.items()) + " },\n")
            f.write("];\n")
        print("yerlesimler_mo_zincir.js", len(yeni), "nokta")
    if sumer_json:                                  # Sümer dosyasında s: zaten uygulanmışsa (boş sözlük) bekleyen kaydı ezilmez
        json.dump(sumer_json, open(os.path.join(ARA, "sumer-zincir-bekleyen.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    if "--sumer-uygula" in sys.argv:
        open(sumer_yol, "w", encoding="utf-8", newline="").write(sumer)
        print("Sümer dosyasına s: YAZILDI")

    # ── olaylar: kaynaklı geçişler + uçlar
    dosyalar = olay_havuzu()
    havuz = [(o, f) for f, (_, L) in dosyalar.items() for o in L]
    kirli, yeni_ev = set(), []

    def metin(o):
        return " ".join(str(o.get(a) or "") for a in ("b", "yer", "d")).lower()

    def sade(sh):
        return re.sub(r"\s*\(.*?\)", "", sh).strip()

    def sozc(sehirler):
        # denetle YER kolu kısa adları (Ur) saymaz → 4 harften kısa adlar HİÇ "anılmış" sayılmaz (özel `yer_id` maddesi ister)
        return {w for sh in sehirler for w in re.sub(r"[^\wçğıöşü]", " ", sade(sh).lower()).split() if len(w) >= 4}

    def ev_kur(t, kid, tip, kim, kaynak_var, o, cities, yer_id=None):
        ka = KU[kid][0] if kid in KU else ("sahipsiz aralık" if kid == "__BOSLUK__" else kid)
        adl = ", ".join(cities)
        if kaynak_var:
            kimad = KU[kim][0] if kim in KU else ("sahipsiz aralık" if kim == "__BOSLUK__" else kim)
            bas = "%s: %s → %s" % (adl, kimad, ka)
            d = "%s noktalarında sahiplik %s'dan %s'ya geçer. Kaynak geçiş bilgisi: %s" % (adl, kimad, ka, (o["kaynak"] or "")[:500])
            kay = (o["kaynak"] or "")[:700]
        else:
            bas = "%s: %s dönemi %s" % (adl, ka, "başlar" if tip == "b" else "sona erer")
            d = "%s noktalarının s: dizisinde bu uç, sahip künyenin (%s) f/t sınırından ya da nokta kur:/bit: ucundan gelir; künye kaynakları data/devletler.js'te. Ayrı tarihsel olay DEĞİL, dönem ucu kaydıdır (Değişmez 2)." % (adl, ka)
            kay = "künye %s — data/devletler.js; nokta kaynağı yerlesimler_mo_*.js" % kid
        e_ = {"t": t, "k": "diger", "b": bas, "gun": ("MÖ %d" % (1 - yil(t))) if yil(t) <= 0 else ("MS %d" % yil(t)), "yer": " / ".join(cities),
              "d": d, "kaynak": kay, "kaynak_turu": "yazili", "kesinlik": "onyil" if (o.get("okul") or "").startswith("Orta") else "yil"}
        if yer_id:
            e_["yer_id"] = yer_id
        return e_

    kisa_ev = {}
    for kd, o in sorted(gecisler.items(), key=lambda kv: str(kv[0])):
        if kd[0] == "UC":
            _, t, kid, tip = kd
            kaynak_var = False
            basl = None
        else:
            t, kim, kid = kd
            tip = "b"
            kaynak_var = True
        sehirler = sorted(o["s"])
        yakin = [(e, f) for (e, f) in havuz if abs(gn(t) - gn(e["t"])) <= 31]
        kapsam = [w for w in sozc(sehirler)]
        eksik = [sh for sh in sehirler if not any(re.search(r"(?<!\w)" + re.escape(w) + r"(?!\w)", metin(e)) for (e, f) in yakin
                                                 for w in sozc([sh]))]
        kisa = [sh for sh in eksik if len(sade(sh)) < 4]
        eksik = [sh for sh in eksik if len(sade(sh)) >= 4]
        if not eksik and not kisa:
            continue
        # kısa ad (Ur): denetle YER kolu yalnız `yer_id` TAM EŞİTLİĞİ ile kapatır → ilgili madde `yer_id`yi taşır (maddede TEK yer_id; aynı gün başka kısa ad yoksa yeterli)
        yid = PT_AD.get(kisa[0], sade(kisa[0])) if kisa else None
        eksik = eksik + [sade(sh) for sh in kisa]
        ka = KU[kid][0] if kid in KU else ("sahipsiz aralık" if kid == "__BOSLUK__" else kid)
        if yakin:
            # sahibi (künye adı/id parçası) anan madde varsa `yer`ine eklenir; yoksa yeni madde
            DUR = {"devleti", "krallığı", "krallik", "kralligi", "hanedanı", "hanedani", "dönemi", "donemi", "imparatorluğu", "imparatorlugu", "sehir", "şehir", "devlet", "sahipsiz", "aralık", "ve", "de"}
            kim_ad = (KU[kim][0] + " " + kim.replace("-", " ")) if (kaynak_var and kim in KU) else ""
            ad_w = {w for w in re.sub(r"[^\wçğıöşü]", " ", (ka + " " + kid.replace("-", " ") + " " + kim_ad).lower()).split() if len(w) >= 2 and w not in DUR}
            uyan = [(e, f) for (e, f) in yakin if any(re.search(r"(?<!\w)" + re.escape(w) + r"(?!\w)", metin(e)) for w in ad_w)]
            if yid:
                uyan = [(e, f) for (e, f) in uyan if e.get("yer_id") in (None, yid)]
            if uyan:
                e, f = min(uyan, key=lambda ef: abs(gn(t) - gn(ef[0]["t"])))
                mevcut_yer = [x.strip() for x in (e.get("yer") or "").split(" / ") if x.strip()]
                e["yer"] = " / ".join(mevcut_yer + [x for x in eksik if x not in mevcut_yer])    # idempotent: aynı ad iki kez eklenmez
                if yid:
                    e["yer_id"] = yid
                if f is not None:
                    kirli.add(f)
                continue
        e_ = ev_kur(t, kid, tip, kim if kaynak_var else None, kaynak_var, o, eksik, yer_id=yid)
        yeni_ev.append(e_)
        havuz.append((e_, None))
    for f in kirli:
        on, L = dosyalar[f]
        with open(f, "w", encoding="utf-8", newline="\n") as fh:
            fh.write(on)
            json.dump(L, fh, ensure_ascii=False, indent=1)
            fh.write(";\n")
    yol = os.path.join(KOK, "data", "olaylar_arkeoloji_zincir.js")
    if yeni_ev:
        with open(yol, "w", encoding="utf-8", newline="\n") as fh:
            fh.write("// MÖ DEVLET-ŞEHİR ZİNCİRİ — s: dönem uçlarını destekleyen maddeler (Değişmez 2). denetim/arkeoloji_devlet_zincir_1020.py üretir.\n")
            fh.write("window.OLAYLAR_ARKEOLOJI_ZINCIR = ")
            json.dump(yeni_ev, fh, ensure_ascii=False, indent=1)
            fh.write(";\n")
    elif os.path.exists(yol):
        os.remove(yol)
    print("yeni nokta:", len(yeni), "· sümer s: eklenen:", len(sumer_ek), "· yeni olay:", len(yeni_ev), "· yer genişletilen dosya:", len(kirli))
    for x in red:
        print("ATLANDI", x)


if __name__ == "__main__":
    main()
