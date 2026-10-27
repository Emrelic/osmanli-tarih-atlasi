# -*- coding: utf-8 -*-
"""once1281_envanter — 1281 ÖNCESİ (MS 0–1281) ölçümü: bölge×yüzyıl matrisi + yerleşim envanteri.

Salt okunur; data/'ya yazmaz. Çıktı: denetim/ONCE1281-ENVANTER-1018.json (+ ekrana özet).
Önce `node arac/once1281_yukle.js <veri.json>` koşar (devlet + kronoloji dökümü).
Kullanım: py arac/once1281_envanter.py --veri <veri.json> [--cik denetim/ONCE1281-ENVANTER-1018.json]

Eşleşme kademeleri (yerleşim × 1281 öncesi kronoloji maddesi):
  K  koordinat   madde yer_kon'u ≤ 15 km (ad değişse de tutar — arama koordinat tabanlı)
  I  yer_id      madde yer_id'si yerleşim adıyla (ya da eski adıyla) birebir aynı
  M  metin       madde b/d/yer metninde yerleşim adı (ya da eski adı) tam sözcük olarak geçer
K ve I güçlü, M zayıf (insan teyidi ister). Atlas kaydı dayanak sayılmaz: yalnız kronoloji
maddesi ve 0930 TDV var-aday listesi sayılır.
"""
import sys, io, os, re, json, math, argparse, collections, unicodedata
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi

EPOK = "1281-01-01"
YUZYIL = [(a, a + 99) for a in range(0, 1200, 100)] + [(1200, 1281)]   # MS 0–1281
YUZYIL_AD = [f"{a:04d}-{b:04d}" for a, b in YUZYIL]


def yil(s):
    """'YYYY-AA-GG' / '-0044-03-15' -> int yıl (astronomik; negatif = MÖ). Okunamazsa None."""
    if not isinstance(s, str):
        return None
    m = re.match(r"^(-?\d{1,5})", s.strip())
    return int(m.group(1)) if m else None


def yuzyil_dizin(y):
    if y is None or y < 0 or y > 1281:
        return None
    return min(y // 100, 12)


def norm(s):
    s = unicodedata.normalize("NFKD", s.replace("İ", "i").replace("I", "ı").lower())
    s = "".join(c for c in s if not unicodedata.combining(c))
    s = s.replace("ı", "i").replace("’", "'").replace("ʻ", "'")
    return re.sub(r"[^a-z0-9' ]+", " ", s).strip()


def km(a, b):
    p = math.pi / 180
    h = (math.sin((b[0] - a[0]) * p / 2) ** 2
         + math.cos(a[0] * p) * math.cos(b[0] * p) * math.sin((b[1] - a[1]) * p / 2) ** 2)
    return 12742 * math.asin(math.sqrt(h))


# eski ad / bölge adı eşleri — yalnız kronolojide GEÇEN klasik adlar (ad_esanlam.js 25 çift tutuyor, yetmez)
ESKI_AD = {
    "İstanbul": ["Byzantion", "Konstantinopolis", "Constantinopolis", "Konstantiniyye", "Nova Roma", "Bizantion"],
    "Bursa": ["Prusa", "Brusa"], "İznik": ["Nikaia", "Nicaea"], "Edirne": ["Adrianopolis", "Hadrianopolis", "Odrin"],
    "Selanik": ["Thessalonike", "Thessalonica", "Solun"], "İzmir": ["Smyrna"], "Ankara": ["Ankyra", "Angora", "Ancyra"],
    "Konya": ["Ikonion", "Iconium", "Konia"], "Antakya": ["Antiokheia", "Antioch", "Antiochia"],
    "Halep": ["Beroia", "Aleppo", "Haleb"], "Şam": ["Dimashq", "Damascus", "Dımaşk"], "Kudüs": ["Hierosolyma", "Jerusalem", "Aelia Capitolina"],
    "Bağdat": ["Madinat al-Salam", "Medinetüsselam"], "Kahire": ["Fustat", "Fustât", "Babylon"],
    "İskenderiye": ["Alexandria", "Aleksandria"], "Trabzon": ["Trapezous", "Trebizond"], "Samsun": ["Amisos"],
    "Sivas": ["Sebasteia", "Sebastea"], "Kayseri": ["Kaisareia", "Caesarea Mazaca"], "Malatya": ["Melitene"],
    "Erzurum": ["Theodosiopolis", "Karin"], "Diyarbakır": ["Amida", "Amid"], "Urfa": ["Edessa", "Ruha"],
    "Tarsus": ["Tarsos"], "Adana": ["Antiochia ad Sarum"], "Mersin": ["Zephyrion"], "Atina": ["Athenai", "Athens"],
    "Roma": ["Roma", "Rome"], "Milano": ["Mediolanum"], "Paris": ["Lutetia"], "Londra": ["Londinium", "London"],
    "Köln": ["Colonia Agrippina", "Cologne"], "Viyana": ["Vindobona", "Wien", "Vienna"], "Belgrad": ["Singidunum", "Beograd"],
    "Sofya": ["Serdica", "Sredets", "Sardika"], "Niş": ["Naissus"], "Üsküp": ["Skopje", "Scupi"], "Zagreb": ["Agram"],
    "Budin": ["Aquincum", "Buda"], "Pekin": ["Dadu", "Khanbaliq", "Yanjing", "Zhongdu"], "Xi'an": ["Chang'an", "Changan"],
    "Nanjing": ["Jiankang"], "Kyoto": ["Heian-kyō", "Heian"], "Delhi": ["Dilli", "Indraprastha"], "Mekke": ["Mecca", "Makka"],
    "Medine": ["Yathrib", "Medina"], "Kufe": ["Kufa"], "Basra": ["Basra"], "Semerkant": ["Samarkand", "Marakanda", "Samarqand"],
    "Buhara": ["Bukhara", "Bukhârâ"], "Merv": ["Marw", "Mervi Şahicihan"], "Nişabur": ["Nishapur", "Neyşâbûr"], "Rey": ["Rayy", "Ray"],
    "Kartaca": ["Carthage", "Karthago"], "Tunus": ["Tunis"], "Kayrevan": ["Kairouan", "Qayrawan"], "Kurtuba": ["Cordoba", "Córdoba"],
    "Sevilla": ["Hispalis", "Ishbiliya", "İşbiliye"], "Toledo": ["Toletum", "Tuleytula"], "Lizbon": ["Olisipo", "Lisbon"],
}
# bölge adı -> bölge sözcüğü (yer bilinmeyip yalnız bölge geçen maddeler için ayrı sayaç)
BOLGE_ADI = ["Trakya", "Bitinya", "Kapadokya", "Kilikya", "Pontus", "Frigya", "Lidya", "Karya", "Galatya", "Makedonya", "Epir",
             "Mezopotamya", "Cezire", "Horasan", "Mâverâünnehir", "Transoksiyana", "Hicaz", "Yemen", "Şam", "Filistin"]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--veri", required=True)
    ap.add_argument("--cik", default=os.path.join(KOK, "denetim", "ONCE1281-ENVANTER-1018.json"))
    a = ap.parse_args()
    w = json.load(open(a.veri, encoding="utf-8"))["win"]

    # ---------------- devletler ----------------
    dev = {d["id"]: d for d in w["DEVLETLER"] if d.get("id")}
    bolge_dev = {i: d.get("bolge") or "?" for i, d in dev.items()}

    # ---------------- kronoloji maddeleri (tekilleştir t+b) ----------------
    maddeler, gorulen = [], set()
    for k, v in w.items():
        if not isinstance(v, list):
            continue
        for it in v:
            if isinstance(it, dict) and isinstance(it.get("t"), str) and it.get("b"):
                anahtar = (it["t"], it["b"])
                if anahtar in gorulen:
                    continue
                gorulen.add(anahtar)
                it = dict(it); it["_kaynak"] = k
                maddeler.append(it)
    for d in dev.values():       # devletin içine gömülü kronoloji
        for it in d.get("kronoloji") or []:
            if isinstance(it, dict) and it.get("t") and it.get("b") and (it["t"], it["b"]) not in gorulen:
                gorulen.add((it["t"], it["b"]))
                it = dict(it); it.setdefault("devlet", d["id"]); it["_kaynak"] = "DEVLETLER.kronoloji"
                maddeler.append(it)

    def madde_taraf(it):
        ids = []
        for alan in ("taraflar", "devletler"):
            for x in it.get(alan) or []:
                ids.append(x if isinstance(x, str) else (x or {}).get("id"))
        if isinstance(it.get("devlet"), str):
            ids.append(it["devlet"])
        return [i for i in ids if i in dev]

    def madde_bolge(it):
        for i in madde_taraf(it):
            return bolge_dev[i]
        return "bolgesiz"

    # ---------------- matris: madde / künye ----------------
    madde_mat = collections.defaultdict(lambda: [0] * 13)
    mo_madde = bolgesiz_madde = 0
    ms_once_madde = []
    for it in maddeler:
        y = yil(it["t"])
        if y is None:
            continue
        if y < 0:
            mo_madde += 1
            continue
        yd = yuzyil_dizin(y)
        if yd is None:
            continue
        b = madde_bolge(it)
        madde_mat[b][yd] += 1
        if b == "bolgesiz":
            bolgesiz_madde += 1
        ms_once_madde.append(it)

    kunye_mat = collections.defaultdict(lambda: [0] * 13)
    kunye_madde = collections.Counter()
    for it in ms_once_madde:
        for i in madde_taraf(it):
            kunye_madde[i] += 1
    bos_devlet = []     # MS 0–1281'de yaşayan ama 1281 öncesi HİÇ maddesi olmayan künyeler
    olu_gecit = 0
    yasayan = []
    for i, d in dev.items():
        f, t = yil(d.get("f")), yil(d.get("t"))
        if f is None:
            continue
        t = 99999 if t is None else t
        if f > 1281 or t < 0:
            continue
        yasayan.append(i)
        for yd, (ya, yb) in enumerate(YUZYIL):
            if f <= yb and t >= ya:
                kunye_mat[bolge_dev[i]][yd] += 1
        if kunye_madde[i] == 0:
            bos_devlet.append({"id": i, "ad": d.get("ad"), "bolge": bolge_dev[i], "f": d.get("f"), "t": d.get("t"),
                               "harita": d.get("harita")})
    mo_kunye = sum(1 for d in dev.values() if (yil(d.get("f")) or 0) < 0)

    # ---------------- yerleşimler ----------------
    Y = girdi.yukle(sessiz=True)

    def donemler(y):
        return [(k, p) for k in ("s", "d", "v", "isg") for p in (y.get(k) or []) if p.get("f")]

    def bolge_yer(y):
        s = sorted([p for k, p in donemler(y) if k in ("s", "d", "v")], key=lambda p: p["f"])
        for p in s:
            d = p.get("d") or p.get("k")
            if d in bolge_dev:
                return bolge_dev[d]
        return "?"

    yer_mat = collections.defaultdict(lambda: [0] * 13)
    yer_once_donem = 0
    for y in Y:
        for k, p in donemler(y):
            f, t = yil(p["f"]), yil(p.get("t") or "9999")
            if f is None or f >= 1281 or (t is not None and t < 0):
                continue
            yer_once_donem += 1
            for yd, (ya, yb) in enumerate(YUZYIL):
                if f <= yb and (t is None or t >= ya):
                    yer_mat[bolge_yer(y)][yd] += 1

    # ---------------- envanter: 1281'de var olan yerleşimler ----------------
    onceki = [it for it in ms_once_madde if (yil(it["t"]) or 0) < 1281]
    madde_kon = [(it, it["yer_kon"]) for it in onceki
                 if isinstance(it.get("yer_kon"), list) and len(it["yer_kon"]) == 2
                 and all(isinstance(x, (int, float)) for x in it["yer_kon"])]
    yerid_idx = collections.defaultdict(list)
    for it in onceki:
        if it.get("yer_id"):
            yerid_idx[norm(str(it["yer_id"]))].append(it)
    metin = [(it, " " + norm(" ".join(str(it.get(x, "")) for x in ("b", "d", "yer"))) + " ") for it in onceki]

    esan = (w.get("AD_ESANLAM") or {}).get("esanlam") or {}
    try:
        tdv = json.load(open(os.path.join(KOK, "denetim", "ONCE1281-YERLESIM-0930.json"), encoding="utf-8"))
        tdv_var = {r.get("ad") for r in tdv["s3_liste"] if r.get("once1281_varlik") == "var-aday"}
    except Exception:
        tdv_var = set()

    def adlar(y):
        ad = y["ad"]
        temel = re.sub(r"\s*\(.*?\)\s*", " ", ad).strip()
        kume = {ad, temel} | set(esan.get(ad, [])) | set(ESKI_AD.get(ad, [])) | set(ESKI_AD.get(temel, []))
        par = re.findall(r"\((.*?)\)", ad)
        kume |= {p.strip() for p in par if len(p.strip()) >= 4}
        return {norm(x) for x in kume if len(norm(x)) >= 4}

    sonuc, bolge_say = [], collections.defaultdict(collections.Counter)
    for y in Y:
        dn = donemler(y)
        var1281 = any(k in ("s", "d", "v", "isg") and p["f"] <= EPOK and (p.get("t") or "9999") > EPOK for k, p in dn)
        if not var1281 or y.get("tur") == "bolge":
            continue
        konum = (y.get("lat"), y.get("lon"))
        kat = {"K": [], "I": [], "M": []}
        if None not in konum:
            for it, kn in madde_kon:
                if abs(kn[0] - konum[0]) < 0.3 and km(kn, konum) <= 15:
                    kat["K"].append(it)
        nl = adlar(y)
        for n in nl:
            for it in yerid_idx.get(n, []):
                kat["I"].append(it)
        for it, tx in metin:
            if any(" " + n + " " in tx for n in nl):
                kat["M"].append(it)
        guclu = {id(i): i for i in kat["K"] + kat["I"]}
        ilk = min((it["t"] for it in list(guclu.values()) + kat["M"]), default=None)
        sinif = "guclu" if guclu else ("zayif" if kat["M"] else ("tdv-aday" if y["ad"] in tdv_var else "yok"))
        b = bolge_yer(y)
        bolge_say[b][sinif] += 1
        sonuc.append({"ad": y["ad"], "bolge": b, "lat": konum[0], "lon": konum[1], "sinif": sinif,
                      "ilk_t": ilk, "K": len(kat["K"]), "I": len(kat["I"]), "M": len(kat["M"]),
                      "ornek": [{"t": it["t"], "b": it["b"][:90]} for it in (list(guclu.values()) + kat["M"])[:3]],
                      "tdv_aday": y["ad"] in tdv_var})

    toplam = collections.Counter(r["sinif"] for r in sonuc)
    cikti = {
        "_": "once1281_envanter.py · salt okunur · 18 Ekim 2026",
        "yuzyil": YUZYIL_AD,
        "evren": {"devlet_kunye": len(dev), "kronoloji_madde_tekil": len(maddeler),
                  "ms_0_1281_madde": len(ms_once_madde), "mo_madde": mo_madde,
                  "ms_0_1281_yasayan_kunye": len(yasayan), "mo_baslayan_kunye": mo_kunye,
                  "yerlesim_toplam": len(Y), "yerlesim_donem_f_lt_1281": yer_once_donem,
                  "bolgesiz_madde": bolgesiz_madde, "kunyesi_madde_olmayan_devlet": len(bos_devlet)},
        "matris_madde": madde_mat, "matris_kunye": kunye_mat, "matris_yerlesim_donem": yer_mat,
        "bos_devlet": bos_devlet,
        "envanter_ozet": {"yerlesim_1281de_var": len(sonuc), "sinif": toplam,
                          "bolge": {b: dict(c) for b, c in bolge_say.items()}},
        "envanter": sonuc,
    }
    os.makedirs(os.path.dirname(a.cik), exist_ok=True)
    json.dump(cikti, open(a.cik, "w", encoding="utf-8"), ensure_ascii=False, indent=1, default=dict)
    print(json.dumps(cikti["evren"], ensure_ascii=False))
    print("envanter:", dict(toplam), "/", len(sonuc))


if __name__ == "__main__":
    main()
