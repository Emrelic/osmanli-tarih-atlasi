"""MÖ arkeoloji yerleşimlerini MOTORUN okuduğu biçime çevirir (VERI-MO-ARKEO, 21 Ekim 2026; Emre ek yönü).

    py denetim/arkeoloji_yerlesim_1020.py

Girdi : data/sehir_tarihce_arkeoloji*.js (≥2 tanıklı koordinatlı yerleşimler) + denetim/arastirma/*.json (kaynak blokları)
Çıktı : data/yerlesimler_mo_<grup>.js         (window.YERLESIMLER_MO_<GRUP>)  — kur:/bit:/s: zinciri
        data/olaylar_arkeoloji_gecis.js        (künye geçişi / künye sınırı olayları — Değişmez 2: her s: sınırı ±30 gün içinde madde ister)
        data/devletler.js                       (yeni kültür künyeleri; idempotent)
        arac/girdi_listesi.py, index.html       (bağlama; idempotent)

KURALLAR (CLAUDE.md «Veri kuralları»):
 • sahip kavramı yoksa kültür künyesi SAHİPTİR (s:[{d:<künye id>}]); künye f/t'si dışına dönem yazılmaz (hayalet devlet).
 • künyeden önceki/sonraki aralıklar ve künyeler arası boşluk __BOSLUK__ + kaynak:'ta BEYAN (kimsenin değil ≠ künyesi yok ≠ araştırılmadı: bos:"veri-yok").
 • kur: = ilk TARİHLİ KANIT (Şırnak kalıbı), kuruluş iddiası değil → neden/not'ta yazılı. Yazılı (tarihsel) kentlerde kur: YAZILMAZ.
 • bit: kaynaktaki bitiş (olay) ya da kur bloğunun dönem-sonu; yoksa künye sonu = TÜRETİLMİŞ (not'ta), terk günü DEĞİL.
 • Yeni boya anahtarı/harita: YAZILMAZ (renkler.py motor tuzu; mo-motor KULTUR_DESEN'i yapacak).
"""
import glob, json, math, os, re, sys

sys.stdout.reconfigure(encoding="utf-8")
KOK = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))
ARA = os.path.join(KOK, "denetim", "arastirma")
SURE = {"donem-toplami", "yerlesim-suresi", "tabaka-donem"}


# ───────────────────────────── yardımcılar
def yil(t):
    m = re.match(r"^(-?)(\d{4,6})-(\d\d)-(\d\d)$", t)
    return (-1 if m.group(1) else 1) * int(m.group(2)), int(m.group(3)), int(m.group(4))


def gun_no(t):
    y, m, d = yil(t)
    return y * 372 + (m - 1) * 31 + (d - 1)          # yalnız SIRALAMA/yakınlık için (gerçek gün sayacı değil)


def iso(mo):
    return "0000-01-01" if mo == 1 else "-%04d-01-01" % (mo - 1)


def km(a, b):
    p = math.pi / 180
    x = (b[1] - a[1]) * p * math.cos((a[0] + b[0]) / 2 * p)
    return 6371 * math.hypot(x, (b[0] - a[0]) * p)


def js(x):
    return json.dumps(x, ensure_ascii=False)


def jso(x):
    """JS nesne gösterimi (anahtarlar tırnaksız, boşluksuz) — denetle.py'nin ayrıştırıcısı bu biçimi bekler (JSON biçimi `"t": "…"` bozuyor)."""
    if isinstance(x, dict):
        return "{" + ",".join("%s:%s" % (k, jso(v)) for k, v in x.items()) + "}"
    if isinstance(x, list):
        return "[" + ",".join(jso(v) for v in x) + "]"
    return json.dumps(x, ensure_ascii=False)


# ───────────────────────────── girdileri yükle
def sehir_tarihce():
    out = {}
    for f in sorted(glob.glob(os.path.join(KOK, "data", "sehir_tarihce_arkeoloji*.js"))):
        s = open(f, encoding="utf-8").read()
        m = re.search(r"=\s*(\[.*\])\s*;?\s*$", s, re.S)
        for y in json.loads(m.group(1)):
            out[y["id"]] = y
    return out


def arastirma():
    out = {}
    for f in sorted(glob.glob(os.path.join(ARA, "*.json"))):
        n = os.path.basename(f)
        if n.startswith("2-") or n.startswith("3-"):
            continue
        d = json.load(open(f, encoding="utf-8"))
        for r in d["kayitlar"]:
            out[r["id"]] = r
    return out


def kunyeler():
    s = open(os.path.join(KOK, "data", "devletler.js"), encoding="utf-8").read()
    out = {}
    for m in re.finditer(r'\{ id:"([^"]+)", ad:"([^"]*)", tur:"[^"]*", bolge:"[^"]*", f:"([^"]+)", t:"([^"]+)"', s):
        out[m.group(1)] = (m.group(2), m.group(3), m.group(4))
    return out


def olaylar_mo():
    ev = []
    for f in sorted(glob.glob(os.path.join(KOK, "data", "olaylar_arkeoloji*.js"))):
        if os.path.basename(f) == "olaylar_arkeoloji_gecis.js":
            continue                       # bu betiğin KENDİ çıktısı
        s = open(f, encoding="utf-8").read()
        m = re.search(r"=\s*(\[.*\])\s*;?\s*$", s, re.S)
        ev += [(o["t"], " ".join(str(o.get(a) or "") for a in ("b", "yer", "d")).lower()) for o in json.loads(m.group(1))]
    return ev


def mevcut_noktalar():
    """normalleştirilmiş ad + koordinat — mükerrer tarama için (data/yerlesimler*.js)."""
    out = []
    kendi = {"yerlesimler_mo_%s.js" % g.replace("-", "_") for g in GRUP}
    for f in glob.glob(os.path.join(KOK, "data", "yerlesimler*.js")):
        if os.path.basename(f) in kendi:
            continue                       # bu betiğin KENDİ çıktısı (idempotent yeniden üretim)
        s = open(f, encoding="utf-8", errors="replace").read()
        for m in re.finditer(r'ad:"([^"]+)"[^\n]*?lat:(-?[\d.]+)\s*,\s*lon:(-?[\d.]+)', s):
            out.append((m.group(1), float(m.group(2)), float(m.group(3)), os.path.basename(f)))
    return out


# ───────────────────────────── TABLO (el ile, kaynaklı eşleme)
# site id → dict(grup, ad, zincir=[künye id…], bit: "olay"|"kunye" , not)
# Yeni künyeler: NEW[kid] = dict(ad, bolge, uyeler=[site id…], etiket)  → f = üyelerin en erken kur'u, t = üyelerin en geç bit'i
NEW = {
 "aseramik-kuzey-levant-anadolu": dict(ad="Epipaleolitik–Çanak Öncesi Neolitik toplulukları (Kuzey Levant, Fırat, Güneydoğu Anadolu)", bolge="suriye-filistin",
                                       uyeler=["abu-hureyra", "mureybet", "nevali-cori", "cayonu-tepesi", "hallan-cemi", "jerf-el-ahmar", "gobekli-tepe"]),
 "orta-anadolu-neolitik": dict(ad="Orta Anadolu Aseramik–Seramik Neolitik toplulukları (Konya Ovası, Kapadokya)", bolge="anadolu",
                               uyeler=["asikli-hoyuk", "catalhoyuk", "boncuklu-konya"]),
 "jeitun-kultur": dict(ad="Jeitun Kültürü (Kopet Dağ, Türkmenistan)", bolge="orta-asya", uyeler=["jeitun"]),
 "hissar-kultur": dict(ad="Hissar I–III (Damghan, İran platosu)", bolge="iran", uyeler=["tepe-hissar"]),
 "yahya-donemleri": dict(ad="Tepe Yahya Dönemleri VII–I (Kirman)", bolge="iran", uyeler=["tepe-yahya"]),
 "mehrgarh-neolitik": dict(ad="Mehrgarh Neolitiği (Kaççi Ovası, Belucistan)", bolge="guney-asya", uyeler=["mehrgarh"]),
 "jiahu-kultur": dict(ad="Jiahu Kültürü (Henan)", bolge="dogu-asya", uyeler=["jiahu"]),
 "dadiwan-laoguantai": dict(ad="Dadiwan I / Laoguantai (Gansu, Yangshao öncesi)", bolge="dogu-asya", uyeler=["dadiwan"]),
 "taosi-kultur": dict(ad="Taosi Kültürü (Longshan sonu, Shanxi)", bolge="dogu-asya", uyeler=["taosi"]),
 "shimao-kultur": dict(ad="Shimao Kültürü (Shaanxi)", bolge="dogu-asya", uyeler=["shimao"]),
 "erlitou-kultur": dict(ad="Erlitou Kültürü (Henan)", bolge="dogu-asya", uyeler=["erlitou-2-liton-arkeolojik"]),
 "sanxingdui-kultur": dict(ad="Sanxingdui Kültürü (Sichuan)", bolge="dogu-asya", uyeler=["sanxingdui-medeniyet"]),
 "lepenski-vir-kultur": dict(ad="Lepenski Vir (Proto-LV → Mezolitik-Neolitik geçiş → Erken Neolitik, Demir Kapılar)", bolge="balkanlar", uyeler=["lepenski-vir"]),
 "vinca-kultur": dict(ad="Vinča Kültürü (Belo Brdo dizisi)", bolge="balkanlar", uyeler=["vinca-belo-brdo"]),
 "orkney-gec-neolitik": dict(ad="Orkney Geç Neolitik / Grooved Ware (Skara Brae)", bolge="bati-avrupa", uyeler=["skara-brae"]),
 "malta-gantija-tarxien": dict(ad="Malta Neolitiği: Ġgantija ve Tarxien evreleri", bolge="italya", uyeler=["xaghra-brochtorff-circle"]),
 "los-millares-kultur": dict(ad="Los Millares Bakır Çağı topluluğu (Almería)", bolge="iberya", uyeler=["los-millares"]),
 "el-argar-kultur": dict(ad="El Argar Kültürü (Güneydoğu İberya)", bolge="iberya", uyeler=["el-argar"]),
 "lbk-szederkeny": dict(ad="Formatif/Erken LBK ve Vinča-Ražište karışık Neolitik (Transdanubia)", bolge="orta-avrupa", uyeler=["szederkeny-kukorica-dulo"]),
 "poverty-point-kultur": dict(ad="Poverty Point Kültürü (Geç Arkaik, Louisiana)", bolge="kuzey-amerika", uyeler=["poverty-point"]),
 "maya-orta-preklasik": dict(ad="Orta Preklasik Maya (Mirador Havzası ve Petén)", bolge="orta-amerika", uyeler=["nakbe", "el-mirador", "aguada-fenix"]),
 "kotosh-dini-gelenek": dict(ad="Kotosh Dini Geleneği (Orta And)", bolge="guney-amerika", uyeler=["kotosh-dini-gelenegi"]),
 "turkana-pastoral-neolitik": dict(ad="Turkana Pastoral Neolitiği ('pillar sites' geleneği)", bolge="dogu-afrika", uyeler=["lothagam-north-turkana"]),
 "shaheinab-neolitik": dict(ad="Shaheinab Neolitiği (Orta Sudan)", bolge="misir-sudan", uyeler=["esh-shaheinab"]),
 "khok-phanom-di-neolitik": dict(ad="Khok Phanom Di Neolitiği (Orta Tayland kıyısı)", bolge="guneydogu-asya", uyeler=["khok-phanom-di"]),
 "guney-hint-neolitik-megalitik": dict(ad="Güney Hint Neolitiği → Megalitik geçiş (Sanganakallu-Kupgal)", bolge="guney-asya", uyeler=["sanganakallu-kupgal"]),
}

TABLO = {
 # Güney Levant (Natufiyen / PPN künyeleri arac/arkeoloji_kunye_1020.py ile zaten devletler.js'te)
 "ain-mallaha": ["natufiyen"],
 "eriha": ["ppna-guney-levant", "ppnb-guney-levant"],
 "kfar-hahoresh": ["ppnb-guney-levant"],
 "ain-ghazal": ["ppnb-guney-levant", "ppnc-guney-levant"],
 "baja": ["ppnb-guney-levant"],
 # Kuzey Levant / Anadolu
 "abu-hureyra": ["aseramik-kuzey-levant-anadolu"], "mureybet": ["aseramik-kuzey-levant-anadolu"], "nevali-cori": ["aseramik-kuzey-levant-anadolu"],
 "cayonu-tepesi": ["aseramik-kuzey-levant-anadolu"], "hallan-cemi": ["aseramik-kuzey-levant-anadolu"], "jerf-el-ahmar": ["aseramik-kuzey-levant-anadolu"],
 "gobekli-tepe": ["aseramik-kuzey-levant-anadolu"],
 "asikli-hoyuk": ["orta-anadolu-neolitik"], "catalhoyuk": ["orta-anadolu-neolitik"], "boncuklu-konya": ["orta-anadolu-neolitik"],
 # Mezopotamya / İran / Orta Asya
 "halaf-kulturu": ["halaf-kultur"],
 "jeitun": ["jeitun-kultur"], "tepe-hissar": ["hissar-kultur"], "tepe-yahya": ["yahya-donemleri"],
 # Güney Asya
 "mehrgarh": ["mehrgarh-neolitik"],
 "harappa": ["erken-harappa", "harappa", "gec-harappa"],
 "sanganakallu-kupgal": ["guney-hint-neolitik-megalitik"],
 "khok-phanom-di": ["khok-phanom-di-neolitik"],
 # Doğu Asya
 "jiahu": ["jiahu-kultur"], "hemudu-kulturu": ["hemudu"], "liangzhu-kulturu": ["liangzhu"], "kuahuqiao-kulturu": ["kuahuqiao"],
 "dadiwan": ["dadiwan-laoguantai", "yangshao"],
 "taosi": ["taosi-kultur"], "shimao": ["shimao-kultur"], "erlitou-2-liton-arkeolojik": ["erlitou-kultur"], "sanxingdui-medeniyet": ["sanxingdui-kultur"],
 "yinxu-anyang": ["shang"],
 # Avrupa
 "lepenski-vir": ["lepenski-vir-kultur"], "vinca-belo-brdo": ["vinca-kultur"], "skara-brae": ["orkney-gec-neolitik"],
 "xaghra-brochtorff-circle": ["malta-gantija-tarxien"], "los-millares": ["los-millares-kultur"], "el-argar": ["el-argar-kultur"],
 "szederkeny-kukorica-dulo": ["lbk-szederkeny"],
 # Afrika
 "naqada-kulturu": ["naqada-kultur"], "esh-shaheinab": ["shaheinab-neolitik"], "lothagam-north-turkana": ["turkana-pastoral-neolitik"],
 # Amerika
 "caral": ["caral-norte-chico"], "chavin-de-huantar": ["chavin"], "poverty-point": ["poverty-point-kultur"],
 "san-lorenzo-tenochtitlan": ["olmek"], "la-venta": ["olmek"],
 "nakbe": ["maya-orta-preklasik"], "el-mirador": ["maya-orta-preklasik"], "aguada-fenix": ["maya-orta-preklasik"],
 "monte-alban": ["zapotek-monte-alban"], "teotihuacan-baslangic": ["teotihuacan"], "kotosh-dini-gelenegi": ["kotosh-dini-gelenek"],
}
GRUP = {  # site → dosya grubu
 "levant-anadolu": ["ain-mallaha", "eriha", "kfar-hahoresh", "ain-ghazal", "baja", "abu-hureyra", "mureybet", "nevali-cori", "cayonu-tepesi", "hallan-cemi",
                    "jerf-el-ahmar", "gobekli-tepe", "asikli-hoyuk", "catalhoyuk", "boncuklu-konya", "halaf-kulturu"],
 "iran-asya": ["jeitun", "tepe-hissar", "tepe-yahya", "mehrgarh", "harappa", "sanganakallu-kupgal", "khok-phanom-di"],
 "dogu-asya": ["jiahu", "hemudu-kulturu", "liangzhu-kulturu", "kuahuqiao-kulturu", "dadiwan", "taosi", "shimao", "erlitou-2-liton-arkeolojik", "sanxingdui-medeniyet", "yinxu-anyang"],
 "avrupa": ["lepenski-vir", "vinca-belo-brdo", "skara-brae", "xaghra-brochtorff-circle", "los-millares", "el-argar", "szederkeny-kukorica-dulo"],
 "afrika": ["naqada-kulturu", "esh-shaheinab", "lothagam-north-turkana"],
 "amerika": ["caral", "chavin-de-huantar", "poverty-point", "san-lorenzo-tenochtitlan", "la-venta", "nakbe", "el-mirador", "aguada-fenix", "monte-alban",
             "teotihuacan-baslangic", "kotosh-dini-gelenegi"],
}
AD = {  # görünen ad (yerel/yaygın), yoksa sehir_tarihce adı
 "teotihuacan-baslangic": "Teotihuacan", "cayonu-tepesi": "Çayönü Tepesi", "boncuklu-konya": "Boncuklu Höyük", "halaf-kulturu": "Tell Halaf",
 "jerf-el-ahmar": "Jerf el-Ahmar", "baja": "Ba'ja", "erlitou-2-liton-arkeolojik": "Erlitou", "sanxingdui-medeniyet": "Sanxingdui",
 "yinxu-anyang": "Yinxu (Anyang)", "hemudu-kulturu": "Hemudu", "liangzhu-kulturu": "Liangzhu", "kuahuqiao-kulturu": "Kuahuqiao",
 "naqada-kulturu": "Naqada", "esh-shaheinab": "Esh-Shaheinab", "lothagam-north-turkana": "Lothagam North", "szederkeny-kukorica-dulo": "Szederkény-Kukorica-dűlő",
 "kotosh-dini-gelenegi": "Kotosh", "san-lorenzo-tenochtitlan": "San Lorenzo Tenochtitlán", "nakbe": "Nakbé", "los-millares": "Los Millares",
 "xaghra-brochtorff-circle": "Xagħra (Brochtorff Çemberi)", "vinca-belo-brdo": "Vinča-Belo Brdo", "lepenski-vir": "Lepenski Vir",
 "dadiwan": "Dadiwan", "ain-ghazal": "Ain Ghazal", "tepe-hissar": "Tepe Hissar", "tepe-yahya": "Tepe Yahya", "chavin-de-huantar": "Chavín de Huántar",
 "monte-alban": "Monte Albán", "caral": "Caral", "la-venta": "La Venta", "aguada-fenix": "Aguada Fénix", "el-mirador": "El Mirador",
 "poverty-point": "Poverty Point", "mehrgarh": "Mehrgarh", "harappa": "Harappa", "jiahu": "Jiahu", "jeitun": "Jeitun", "sanganakallu-kupgal": "Sanganakallu-Kupgal",
 "khok-phanom-di": "Khok Phanom Di", "taosi": "Taosi", "shimao": "Shimao", "el-argar": "El Argar", "skara-brae": "Skara Brae",
}


# ───────────────────────────── çekirdek
BIT_EK = {   # kaynaklı ama sehir_tarihce'de bulunmayan bitişler: site → (iso, etiket)
    "mehrgarh": ("-4723-01-01", "olay"),   # Mutin vd. 2025: Dönem I mezarlığı 4769–4679 cal BCE'de sona erdi (orta nokta MÖ 4724; denetim/arastirma/2-hint-guneydogu.json)
}


def site_bit(y, r):
    """(bit_t, etiket) ya da (None, None). Öncelik: sehir_tarihce bit → araştırma kur bloğunun dönem-sonu."""
    if y["id"] in BIT_EK:
        return BIT_EK[y["id"]]
    if y.get("bit"):
        return y["bit"]["t"], "olay"
    kur = (r or {}).get("kur") or {}
    if kur.get("aralik_turu") in {"donem-toplami", "yerlesim-suresi"} and kur.get("son_mo"):   # tabaka-donem = evre sonu, YERLEŞİM sonu değil
        return iso(kur["son_mo"]), "blok-sonu"
    return None, None


def main():
    ST, AR, KU, EV = sehir_tarihce(), arastirma(), kunyeler(), olaylar_mo()
    MEV = mevcut_noktalar()
    uyar, red = [], []

    # 1) yeni künyelerin f/t'si
    yenikunye = {}
    for kid, d in NEW.items():
        fs, ts = [], []
        for u in d["uyeler"]:
            y = ST.get(u)
            if not y:
                continue
            fs.append(y["ilk"]["t"])
            bt, _ = site_bit(y, AR.get(u))
            if bt:
                ts.append(bt)
        if not fs or not ts:
            red.append((kid, "künye f/t türetilemedi (üye yerleşimlerin bitişi yok)"))
            continue
        f, t = min(fs, key=gun_no), max(ts, key=gun_no)
        yenikunye[kid] = (d["ad"], f, t)
        KU.setdefault(kid, (d["ad"], f, t))

    # 2) yerleşimler
    cikti = {g: [] for g in GRUP}
    gecis = []                       # (t, başlık, açıklama, kaynak)
    n_uretilen = 0
    for grup, siteler in GRUP.items():
        for sid in siteler:
            y, r = ST.get(sid), AR.get(sid)
            if not y:
                red.append((sid, "sehir_tarihce kaydı yok (koordinat <2 tanık ya da elendi)"))
                continue
            zincir = TABLO[sid]
            if any(k not in KU for k in zincir):
                red.append((sid, "künye yok: %s" % [k for k in zincir if k not in KU]))
                continue
            kur_t = y["ilk"]["t"]
            bit_t, bit_et = site_bit(y, r)
            son_kunye_t = KU[zincir[-1]][2]
            turetilmis = False
            if not bit_t:
                bit_t, turetilmis = son_kunye_t, True
            if gun_no(bit_t) > gun_no(son_kunye_t):
                bit_t_eski, bit_t = bit_t, son_kunye_t          # nokta, sahibi olan künyenin ömrünü aşamaz (sahipsiz kalmasın)
                uyar.append((sid, "bit %s künye sonunu %s aşıyor → künye sonuna çekildi" % (bit_t_eski, son_kunye_t)))
                turetilmis = True
            if gun_no(bit_t) <= gun_no(kur_t):
                red.append((sid, "bit <= kur (%s %s)" % (kur_t, bit_t)))
                continue
            # mükerrer tarama: ad + 3 km
            for (ad2, la, lo, fn) in MEV:
                if km((y["lat"], y["lon"]), (la, lo)) < 3.0:
                    red.append((sid, "3 km içinde mevcut nokta: %s (%s)" % (ad2, fn)))
                    break
            else:
                pass
            if red and red[-1][0] == sid:
                continue
            # s: zinciri
            seg, cur = [], kur_t
            kaynak_y = y["ilk"]["kaynak"]
            for kid in zincir:
                ka, kf, kt = KU[kid]
                f0 = kf if gun_no(kf) > gun_no(cur) else cur
                t0 = kt if gun_no(kt) < gun_no(bit_t) else bit_t
                if gun_no(f0) >= gun_no(t0):
                    continue
                if gun_no(f0) > gun_no(cur):
                    seg.append(dict(f=cur, t=f0, d="__BOSLUK__", kaynak="BEYAN (VERI-MO-ARKEO): bu aralıkta nokta var (kur: ilk tarihli kanıt) ama sahibi künye kapsamının dışında — "
                                    "sahip kavramı yok / kaynak sessiz; bos:'veri-yok' (kimsenin değil DEĞİL, araştırılmadı da DEĞİL: kaynak bu aralık için sahip vermiyor)"))
                seg.append(dict(f=f0, t=t0, d=kid, kaynak="künye %s (%s) · %s" % (kid, ka, kaynak_y[:260])))
                cur = t0
            if not seg:
                red.append((sid, "hiçbir künye penceresi nokta ömrüyle örtüşmedi"))
                continue
            if gun_no(cur) < gun_no(bit_t):
                seg.append(dict(f=cur, t=bit_t, d="__BOSLUK__", kaynak="BEYAN (VERI-MO-ARKEO): künye sonrası, bit:'e dek sahip yok (veri-yok)"))
            ad = AD.get(sid, y["ad"])
            for sg in seg:                                    # Değişmez 2/2s: HER dönem ucu ±30 günde, YERİ anan madde ister
                for uc_, tip_ in ((sg["f"], "başlar"), (sg["t"], "sona erer")):
                    gecis.append((uc_, ad, sg["d"], tip_, y["ad"]))
            notm = ("MÖ ARKEOLOJİ KAYDI (21 Ekim 2026). kur: KURULUŞ DEĞİL, İLK TARİHLİ KANIT (%s; %s). " % (y["ilk"]["gun"], y["ilk"]["nicelik"]) +
                    ("bit: TÜRETİLMİŞ = sahip künyenin sonu (ölçüm/terk günü DEĞİL). " if turetilmis else
                     ("bit: kaynak bitişi (%s). " % (y["bit"]["gun"] if y.get("bit") else "Mutin vd. 2025: Dönem I mezarlığı 4769–4679 cal BCE'de sona erdi; orta nokta MÖ 4724") if bit_et == "olay" else "bit: kaynaktaki kur bloğunun dönem-sonu ucu (dönem toplamı). ")) +
                    "Koordinat: %s " % y["konum_teyit"][:300] + "Sahiplik: kültür künyesi (sahip kavramı yok); bos:'veri-yok'. Kaynak/alıntı/uç aralıkları: olaylar_arkeoloji_*.js ic_not_d ve denetim/arastirma/*.json.")
            rec = dict(ad=ad, tur="sehir", lat=y["lat"], lon=y["lon"], g=0, k=0, kur=kur_t, bit=bit_t,
                       kesinlik={"f": y["ilk"]["kesinlik"], "t": (y["bit"]["kesinlik"] if y.get("bit") else "belirsiz")},
                       d=[], s=seg, kaynak=kaynak_y[:400], **{"not": notm})
            cikti[grup].append(rec)
            n_uretilen += 1

    # 3) yazma — yerleşim dosyaları
    for grup, L in cikti.items():
        if not L:
            continue
        yol = os.path.join(KOK, "data", "yerlesimler_mo_%s.js" % grup.replace("-", "_"))
        with open(yol, "w", encoding="utf-8", newline="\n") as f:
            f.write("// MÖ ARKEOLOJİ YERLEŞİMLERİ — %s · VERI-MO-ARKEO 21 Ekim 2026 · üretici denetim/arkeoloji_yerlesim_1020.py (elle düzenleme: tabloyu/araştırma JSON'unu düzelt)\n" % grup)
            f.write("// kur:/bit: NEGATİF astronomik yıl; kur = ilk tarihli kanıt; sahip = KÜLTÜR KÜNYESİ (s:), boşluklar __BOSLUK__ beyanlı. Boya anahtarı YOK (renkler.py = mo-motor).\n")
            f.write("window.YERLESIMLER_MO_%s = [\n" % grup.upper().replace("-", "_"))
            for r in L:
                f.write("{ " + ", ".join("%s:%s" % (k, jso(v)) for k, v in r.items()) + " },\n")
            f.write("];\n")
        print(os.path.basename(yol), len(L))
    # 4) yeni künyeler → devletler.js (idempotent)
    dv = os.path.join(KOK, "data", "devletler.js")
    s = open(dv, encoding="utf-8").read()
    ek = []
    for kid, (ad, f, t) in yenikunye.items():
        if 'id:"%s"' % kid in s:
            continue
        d = NEW[kid]
        uyeler = [ST[u] for u in d["uyeler"] if u in ST]
        kay = "; ".join(sorted({u["ilk"]["kaynak"][:230] for u in uyeler}))[:700]
        ozet = ("Arkeolojik KÜLTÜR/DÖNEM — siyasî devlet değil, sahip kavramı yok; haritada boyanmaz (veri-yok). f/t = üye yerleşimlerin kaynaklı kur/bit uçları "
                "(%s). f = ilk tarihli kanıt, t = üyelerin son kaynaklı ucu — kültürün gerçek başlangıç/bitişi DEĞİL." % ", ".join(u["ad"] for u in uyeler))
        ek.append('{ id:%s, ad:%s, tur:"kultur", bolge:%s, f:%s, t:%s, baskent:"yok (kültür; merkez tanımsız)", ozet:%s, kaynak:%s,\n  kronoloji:[\n'
                  '    { t:%s, tur:"kurulus", b:%s, kaynak:%s },\n    { t:%s, tur:"son", b:%s, kaynak:%s }\n  ] },'
                  % (js(kid), js(ad), js(d["bolge"]), js(f), js(t), js(ozet), js(kay), js(f), js("%s: ilk tarihli kanıt" % ad), js(kay), js(t), js("%s: son kaynaklı uç" % ad), js(kay)))
    if ek:
        son = s.rstrip().rfind("];")
        blok = "\n// =========== ARKEOLOJİ KÜLTÜRLERİ 2 — yerleşim sahipleri (VERI-MO-ARKEO 21 Ekim 2026; denetim/arkeoloji_yerlesim_1020.py üretir) ===========\n" + "\n".join(ek) + "\n"
        s = s[:son] + blok + s[son:]
        open(dv, "w", encoding="utf-8", newline="").write(s)
    # 5) künye geçişi olayları — ±30 gün içinde madde yoksa
    yeni_ev, gorulen = [], []
    grup_ev = {}
    dosyalar, kirli = {}, set()
    for f in sorted(glob.glob(os.path.join(KOK, "data", "olaylar_arkeoloji*.js"))):
        if os.path.basename(f) == "olaylar_arkeoloji_gecis.js":
            continue
        sx = open(f, encoding="utf-8").read()
        mx = re.search(r"^(.*?=\s*)(\[.*\])(\s*;?\s*)$", sx, re.S)
        dosyalar[f] = (mx.group(1), json.loads(mx.group(2)))
    havuz = [(o, f) for f, (_, L) in dosyalar.items() for o in L]

    def metin(o):
        return " ".join(str(o.get(a) or "") for a in ("b", "yer", "d")).lower()

    for (t, ad, kid, tip, tamad) in sorted(set(gecis)):
        sozc = {w for w in re.sub(r"[^\wçğıöşü]", " ", (ad + " " + tamad).lower()).split() if len(w) >= 4} or {tamad.lower()}
        yakin = [(o, f) for (o, f) in havuz if abs(gun_no(t) - gun_no(o["t"])) <= 31]
        if any(re.search(r"(?<!\w)" + re.escape(w) + r"(?!\w)", metin(o)) for (o, f) in yakin for w in sozc):
            continue                                       # ±30 günde YERİ anan madde zaten var
        if yakin:                                          # madde var ama yeri anmıyor → o maddenin `yer`ine nokta adı eklenir (yeni mükerrer madde AÇILMAZ)
            o, f = min(yakin, key=lambda of: abs(gun_no(t) - gun_no(of[0]["t"])))
            o["yer"] = ((o.get("yer") or "") + " / " + tamad).strip(" /")
            kirli.add(f)
            continue
        grup_ev.setdefault((t, kid, tip), []).append((ad, tamad))
    for f in kirli:
        on, L = dosyalar[f]
        with open(f, "w", encoding="utf-8", newline="\n") as fh:
            fh.write(on)
            json.dump(L, fh, ensure_ascii=False, indent=1)
            fh.write(";\n")
    if kirli:
        print("yer alanı genişletilen olay dosyası:", len(kirli))
    for (t, kid, tip), L in sorted(grup_ev.items()):
        ka = KU[kid][0] if kid in KU else "sahipsiz aralık"
        adlar = ", ".join(sorted({a for a, _ in L}))
        bas = ("%s: sahip dönemi %s — %s" % (adlar, tip, ka)) if kid != "__BOSLUK__" else ("%s: sahipsiz (veri-yok) aralık %s" % (adlar, tip))
        yeni_ev.append({"t": t, "k": "diger", "b": bas, "gun": ("MÖ %d (dönem ucu)" % (1 - yil(t)[0])) if yil(t)[0] <= 0 else ("MS %d (dönem ucu)" % yil(t)[0]),
                        "yer": " / ".join(sorted({a for a, _ in L} | {b for _, b in L})),
                        "d": "%s noktalarının s: sahiplik dizisinde bu uç, sahip künyenin (%s) f/t sınırından ya da nokta kur:/bit: ucundan gelir; künye ve kaynakları data/devletler.js'te. "
                             "Ayrı bir tarihsel olay DEĞİL, dönem ucu kaydıdır (Değişmez 2 kapsamı)." % (adlar, ka),
                        "kaynak": "künye %s — data/devletler.js; nokta kaynağı yerlesimler_mo_*.js kaynak: alanı" % kid, "kaynak_turu": "yazili", "kesinlik": "yuzyil"})
    print("yeni künye:", len(ek), "· künye geçişi olayı:", len(yeni_ev), "· üretilen yerleşim:", n_uretilen)
    yol = os.path.join(KOK, "data", "olaylar_arkeoloji_gecis.js")
    if not yeni_ev:
        if os.path.exists(yol):
            os.remove(yol)
        yeni_ev = None
    for _ in ([] if yeni_ev is None else [0]):
      with open(yol, "w", encoding="utf-8", newline="\n") as f:
        f.write("// MÖ KÜNYE GEÇİŞLERİ — s: dönem sınırlarını destekleyen künye-geçişi maddeleri (Değişmez 2). denetim/arkeoloji_yerlesim_1020.py üretir.\n")
        f.write("window.OLAYLAR_ARKEOLOJI_GECIS = ")
        json.dump(yeni_ev, f, ensure_ascii=False, indent=1)
        f.write(";\n")
    for x in uyar:
        print("UYARI", x)
    for x in red:
        print("ATLANDI", x)


main()
