# -*- coding: utf-8 -*-
"""YER-ENVANTER 1021 — 1281 öncesi kronoloji maddelerinin yer adlarını atlasla eşler.
Kullanım: py denetim/ARAC-YER-ENVANTER-1021.py <veri.json> [çıktı.json]
veri.json = node arac/once1281_yukle.js çıktısı. Hafif (<1 GB). Salt okunur."""
import sys, io, os, re, json, math, collections
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi, ad_esanlam
from ad_esanlam import sadelestir as N

# eski ad / yabancı ad -> atlas adı (kronolojide geçen klasik adlar)
ESKI = {
 "İstanbul": ["Byzantion","Konstantinopolis","Constantinopolis","Konstantiniyye","Nova Roma","Constantinople","Kostantiniyye","Bizantion","Konstantinopel","Dersaadet"],
 "Bursa":["Prusa","Brusa"],"İznik":["Nikaia","Nicaea","Nikaea"],"Edirne":["Adrianopolis","Hadrianopolis","Adrianople","Odrin"],
 "Selanik":["Thessalonike","Thessalonica","Thessaloniki","Solun"],"İzmir":["Smyrna","Smyrne"],"Ankara":["Ankyra","Angora","Ancyra"],
 "Konya":["Ikonion","Iconium","Konia"],"Antakya":["Antiokheia","Antioch","Antiochia","Antiochia on the Orontes"],"Halep":["Beroia","Aleppo","Haleb"],
 "Şam":["Dimashq","Damascus","Dımaşk","Dımeşk"],"Kudüs":["Hierosolyma","Jerusalem","Aelia Capitolina","Bayt al-Maqdis"],
 "Bağdat":["Madinat al-Salam","Baghdad"],"Kahire":["Cairo","Fustat","Fustât"],"İskenderiye":["Alexandria","Aleksandria"],
 "Trabzon":["Trapezous","Trebizond"],"Samsun":["Amisos"],"Sivas":["Sebasteia","Sebastea"],"Kayseri":["Kaisareia","Caesarea Mazaca"],
 "Malatya":["Melitene"],"Erzurum":["Theodosiopolis","Karin"],"Diyarbakır":["Amida","Âmid","Amid"],"Urfa":["Edessa","Ruha","Er-Ruhâ"],
 "Tarsus":["Tarsos"],"Atina":["Athenai","Athens"],"Roma":["Rome"],"Milano":["Mediolanum","Milan"],"Paris":["Lutetia"],
 "Londra":["Londinium","London"],"Köln":["Colonia Agrippina","Cologne"],"Viyana":["Vindobona","Wien","Vienna"],"Belgrad":["Singidunum","Beograd","Belgrade"],
 "Sofya":["Serdica","Sredets","Sardika","Sofia"],"Niş":["Naissus"],"Üsküp":["Skopje","Scupi"],"Zagreb":["Agram"],"Budin":["Aquincum","Buda"],
 "Pekin":["Dadu","Khanbaliq","Yanjing","Zhongdu","Beijing","Peking"],"Xi'an":["Chang'an","Changan","Sian"],"Nanjing":["Jiankang","Nanking"],
 "Kyoto":["Heian-kyō","Heian"],"Delhi":["Dilli","Indraprastha"],"Mekke":["Mecca","Makka"],"Medine":["Yathrib","Medina"],"Kufe":["Kufa"],
 "Semerkant":["Samarkand","Marakanda","Samarqand"],"Buhara":["Bukhara"],"Merv":["Marw"],"Nişabur":["Nishapur","Neyşâbûr"],"Rey":["Rayy","Ray"],
 "Kartaca":["Carthage","Karthago"],"Tunus":["Tunis"],"Kayrevan":["Kairouan","Qayrawan"],"Kurtuba":["Cordoba","Córdoba"],
 "Sevilla":["Hispalis","Ishbiliya","İşbiliye"],"Toledo":["Toletum","Tuleytula"],"Lizbon":["Olisipo","Lisbon"],
}
# bölge sözlüğü (yerleşim değil; temsilci nokta gerektirir)
BOLGE = """Trakya Bitinya Kapadokya Kilikya Pontus Frigya Lidya Karya Galatya Makedonya Epir Mezopotamya Cezire Horasan Mâverâünnehir Transoksiyana
Hicaz Yemen Filistin Suriye Levant Anadolu Armenia Ermenistan Gürcistan Kafkasya Azerbaycan Şirvan Arran Tabaristan Hârezm Sogdiana Soğdiana
Baktriya Toharistan Fergana Sistan Kirman Fars Huzistan Irak Cibal Deylem Gilan Mazenderan Hindistan Pencap Sind Gucerat Bengal Dekkan
Mısır Nübye Habeşistan Etiyopya Mağrib Endülüs İfrikiye Berka Tripolitanya Libya Sicilya Sardinya Korsika Lombardiya Toskana Pulya Kalabriya
Burgonya Normandiya Akitanya Provans Aragon Kastilya Leon Navarra Galiçya Katalonya Septimania Austrasia Neustria Saksonya Bavyera
Švabya Schwaben Frankonya Lotaringya Thüringen Bohemya Moravya Silezya Pomeranya Polonya Litvanya Livonya Estonya Karelya Kuman Kıpçak
Dobruca Eflak Boğdan Erdel Transilvanya Panonya Dalmaçya Hırvatistan Slavonya Sırbistan Raşka Zeta Bosna Hum Arnavutluk Epiros Mora Teselya Attika Beotya
Bulgaristan Moesia Dacia Dakya İskit Sarmatya Illyricum İlirya Britannia Britanya İskoçya İrlanda Gal Galya Hispania İspanya Germanya Gallia Italia
Çin Mançurya Moğolistan Tibet Kore Japonya Annam Champa Kamboçya Yunnan Sichuan Şensi Kansu Hexi Liaodong Ordos Turfan Uygur Tarim Kaşgar Hotan
Arabistan Hadramut Umman Bahreyn Necid Yemame Tihame Lübnan Galile Celile Hauran Urdün Sina""".split()
BOLGE += """Danimarka Macaristan İran Wessex Kent Mercia Sussex Northumbria Hebei Henan Shanxi Shandong Hunan Hubei Guangdong Zhejiang Jiangsu Anhui Fujian
Taberistan Cürcân Tohâristân Tohâristan Kuzey Çin Güney Çin Tayland Vietnam Java Sumatra Bretanya Flandre Orta Mağrib İtalya Yahudiye Mauretania Pannonia
Gallaecia Wiltshire Holstein Lombardia Hollanda Almanya Fransa Norveç İsveç Finlandiya Rusya Ukrayna Belarus Romanya Yunanistan Bizans Güney Kore Kuzey Kore
Batı Türkistan Doğu Türkistan Türkistan Kuzey Kafkasya Orta Tuna Balkanlar Hindukuş Belucistan Mekrân Kirmân Kuhistan Cibâl İrmîniye Cezîre Şirvan Dağıstan
Orta Java Doğu Java Kuzey Vietnam Güney Vietnam Batı Francia Doğu Francia Orta Francia Alt Mısır Yukarı Mısır Aşağı Mısır Slesvig Holstein Sunnmøre Lungau""".split()
BOLGE_N = {N(b) for b in BOLGE}
DOGAL = re.compile(r"(ırmağı|nehri|nehir|deresi|çayı|suyu|gölü|denizi|körfezi|boğazı|dağı|dağları|geçidi|deltası|derya|kıyısı|yolu|köprüsü|river|lake|sea|dağ|hattı|sınırı)\s*$|^(yer |citadel$)", re.I)
BOLGE_EK = re.compile(r"(bölgesi|havzası|yaylası|ovası|çevresi|civarı|dolayları|kıyıları|vadisi|coğrafyası|toprakları|eyaleti|vilayeti|krallığı|dukalığı|kontluğu|prensliği|imparatorluğu|hattı|havalisi|sahili|adası|adaları|kuzeyi|güneyi|doğusu|batısı)\s*$", re.I)


def yil(s):
    m = re.match(r"^(-?\d{1,5})", s.strip()) if isinstance(s, str) else None
    return int(m.group(1)) if m else None


def km(a, b):
    p = math.pi / 180
    h = math.sin((b[0] - a[0]) * p / 2) ** 2 + math.cos(a[0] * p) * math.cos(b[0] * p) * math.sin((b[1] - a[1]) * p / 2) ** 2
    return 12742 * math.asin(math.sqrt(h))


def isimler(yer):
    """serbest yer metninden aday adlar: virgül/;/slash/ve ile böl, parantez içini ayrı ad say."""
    if not yer:
        return []
    out = []
    for parca in re.split(r"[;,/·→]| ve | and |\+| – | — | - ", yer):
        parca = parca.strip(" .")
        if not parca:
            continue
        ic = re.findall(r"\(([^)]*)\)", parca)
        dis = re.sub(r"\([^)]*\)", " ", parca).strip(" .")
        for a in [dis] + [x for i in ic for x in re.split(r"[;,/]| veya ", i)]:
            a = a.strip(" .-")
            if a.count(")") > a.count("("):
                a = a.rstrip(")").strip()
            if a.count("(") > a.count(")"):
                a = a.split("(")[0].strip()
            a = re.sub(r"\s+", " ", a)
            a = re.sub(r"\s+(yak[ıi]n[ıi]|yak[ıi]nlar[ıi])$", "", a, flags=re.I)
            if 2 <= len(a) <= 60 and not re.match(r"^(\d|yaklaşık|bilinmiyor|belirsiz|çeşitli|genel)", a, re.I):
                out.append(a)
    return out


w = json.load(open(sys.argv[1], encoding="utf-8"))["win"]
maddeler, gor = [], set()
for k, v in w.items():
    if isinstance(v, list):
        for it in v:
            if isinstance(it, dict) and isinstance(it.get("t"), str) and it.get("b") and (it["t"], it["b"]) not in gor:
                y = yil(it["t"])
                if y is not None and y < 1281:
                    gor.add((it["t"], it["b"]))
                    it = dict(it)
                    it["_k"] = k
                    maddeler.append(it)

for d in w.get("DEVLETLER") or []:       # devlet künyesine gömülü kronoloji (dosya listelerinde yok)
    for it in d.get("kronoloji") or []:
        if isinstance(it, dict) and isinstance(it.get("t"), str) and it.get("b") and (it["t"], it["b"]) not in gor:
            y = yil(it["t"])
            if y is not None and y < 1281:
                gor.add((it["t"], it["b"]))
                it = dict(it)
                it["_k"] = "DEVLETLER.kronoloji"
                maddeler.append(it)

Y = girdi.yukle(sessiz=True)
idx = collections.defaultdict(list)      # norm ad -> [yerleşim]


def ekle(ad, y):
    n = N(ad)
    if n and y not in idx[n]:
        idx[n].append(y)


for y in Y:
    ad = y["ad"]
    ekle(ad, y)
    ekle(re.sub(r"\s*\(.*?\)", "", ad), y)
    for i in re.findall(r"\(([^)]*)\)", ad):
        for x in re.split(r"[;,/]| veya ", i):
            ekle(x, y)
adlar = {y["ad"]: y for y in Y}
for atlas, eskiler in ESKI.items():
    hed = adlar.get(atlas) or next((y for y in Y if re.sub(r"\s*\(.*?\)", "", y["ad"]) == atlas), None)
    if hed:
        for e in eskiler:
            ekle(e, hed)
try:
    sz = ad_esanlam.yukle()
    for atlas, liste in (sz.get("esanlam") or {}).items():
        if atlas in adlar:
            for e in liste:
                ekle(e, adlar[atlas])
except Exception as e:
    print("ad_esanlam yüklenemedi:", e)
bolge_yerlesim = {N(re.sub(r"\s*\(.*?\)", "", y["ad"])) for y in Y if y.get("tur") == "bolge"}


def coz(ad, kon):
    n = N(ad)
    if n in idx:
        adaylar = idx[n]
        if kon and len(adaylar) > 1:
            adaylar = sorted(adaylar, key=lambda y: km(kon, (y["lat"], y["lon"])))
        return adaylar[0]["ad"], len(idx[n])
    return None, 0


tekil = {}
madde_bos = 0
madde_bos_baslik_atlas = 0
for it in maddeler:
    kon = it.get("yer_kon") if isinstance(it.get("yer_kon"), list) and len(it["yer_kon"]) == 2 else None
    adlar_m = []
    if isinstance(it.get("yer_id"), str) and it["yer_id"].strip():
        adlar_m += [(x, "yer_id") for x in isimler(it["yer_id"])]
    adlar_m += [(x, "yer") for x in isimler(it.get("yer") or "")]
    if not adlar_m:
        madde_bos += 1
        sozc = re.findall(r"[^\W\d_]+(?:['’][^\W\d_]+)?", it["b"])
        sozc = [re.sub(r"['’].*$", "", x) for x in sozc]
        bulundu = False
        for i in range(len(sozc)):
            for L in (1, 2, 3):
                g = N(" ".join(sozc[i:i + L]))
                if len(g) >= 4 and g in idx:
                    bulundu = True
        madde_bos_baslik_atlas += bulundu
        continue
    gordu = set()
    for ad, alan in adlar_m:
        n = N(ad)
        if not n or n in gordu:
            continue
        gordu.add(n)
        r = tekil.setdefault(n, {"ad": ad, "n": 0, "ornek": [], "alanlar": set(), "yillar": [], "kon": None})
        r["n"] += 1
        r["alanlar"].add(alan)
        if len(r["ornek"]) < 3:
            r["ornek"].append(it["t"] + " " + it["b"][:70])
        r["yillar"].append(yil(it["t"]))
        if kon and not r["kon"]:
            r["kon"] = kon

sonuc = {"atlasta": [], "bolge": [], "dogal_nesne": [], "yok": []}
for n, r in tekil.items():
    hedef, k = coz(r["ad"], r["kon"])
    bolge_mi = (n in BOLGE_N) or bool(BOLGE_EK.search(r["ad"])) or any(N(t) in BOLGE_N for t in re.split(r"\s+", r["ad"]) if len(t) > 3 and BOLGE_EK.search(r["ad"]))
    kayit = {"ad": r["ad"], "n": r["n"], "yil_min": min(y for y in r["yillar"] if y is not None),
             "yil_maks": max(y for y in r["yillar"] if y is not None),
             "alanlar": sorted(r["alanlar"]), "ornek": r["ornek"], "yer_kon": r["kon"]}
    if hedef:
        kayit["atlas"] = hedef
        kayit["aday_sayisi"] = k
        if n in bolge_yerlesim or bolge_mi:
            kayit["bolge_mi"] = True
        sonuc["atlasta"].append(kayit)
    elif DOGAL.search(r["ad"]):
        sonuc["dogal_nesne"].append(kayit)
    elif bolge_mi:
        sonuc["bolge"].append(kayit)
    else:
        sonuc["yok"].append(kayit)
for k in sonuc:
    sonuc[k].sort(key=lambda r: -r["n"])

mo = sum(1 for it in maddeler if (yil(it["t"]) or 0) < 0)
ozet = {"madde_1281_oncesi": len(maddeler), "madde_MO": mo, "madde_MS": len(maddeler) - mo,
        "madde_yer_alani_yok": madde_bos, "madde_yer_alani_yok_ama_baslikta_atlas_adi": madde_bos_baslik_atlas, "madde_yer_id_var": sum(1 for it in maddeler if it.get("yer_id")),
        "madde_yer_kon_var": sum(1 for it in maddeler if it.get("yer_kon")),
        "tekil_ad": len(tekil), "atlasta_var": len(sonuc["atlasta"]), "atlasta_yok_yerlesim_adayi": len(sonuc["yok"]),
        "bolge_adi_noktasiz": len(sonuc["bolge"]), "dogal_nesne_noktasiz": len(sonuc["dogal_nesne"]), "atlasta_ama_bolge_adi": sum(1 for r in sonuc["atlasta"] if r.get("bolge_mi")),
        "yerlesim_sayisi_atlas": len(Y), "yok_adlarin_madde_toplami": sum(r["n"] for r in sonuc["yok"]),
        "bolge_adlarin_madde_toplami": sum(r["n"] for r in sonuc["bolge"])}
cik = sys.argv[2] if len(sys.argv) > 2 else os.path.join(KOK, "denetim", "ONCE1281-YER-ENVANTER.json")
json.dump({"ozet": ozet, **sonuc}, open(cik, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print(json.dumps(ozet, ensure_ascii=False, indent=1))
