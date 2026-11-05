# -*- coding: utf-8 -*-
"""Kronolojide (olaylar*.js + kronoloji_sinir*.js) `yer` alanında geçip atlasın hiçbir yerleşimiyle eşleşmeyen adları sınıflar.

Eşleşme (nokta_aday.py ile aynı): normalleştirilmiş ad kökü (parantez öncesi) ya da parantez içi eş adlar.
Sınıflar:
  BÖLGE/ÜLKE — devletler.js künye adı/kökü, ya da bölge/ırmak/dağ/ada/ülke sözcüğü, ya da bilinen bölge adı listesi
  YAZIM      — atlasta yakın yazımla bir ad var (difflib oranı ≥ 0,86, ya da biri ötekinin başı/sonu ≥ 5 harf); hedef id önerilir
  EKSİK      — öteki her şey (gerçekten atlasta olmayan yerleşim adayı)
Çıktı: siniflar.json (ad, sınıf, sayı, hedef, örnek maddeler)
"""
import os, re, sys, json, difflib, collections

KOK = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)
import girdi, denetle

BURA = os.path.dirname(os.path.abspath(__file__))
Y = girdi.yukle(sessiz=True)
O = denetle.olaylari_yukle()
DEV = girdi.oku_devletler()
norm = denetle._2s_norm


def kok(ad):
    return norm(re.split(r"\s*\(", ad)[0]).strip()


ADI = collections.defaultdict(list)
for y in Y:
    ADI[kok(y["ad"])].append(y["ad"])
    m = re.search(r"\(([^)]*)\)", y["ad"])
    if m:
        for p in re.split(r"[,/;]", m.group(1)):
            if len(p.strip()) >= 3:
                ADI[norm(p.strip())].append(y["ad"])
ANAHTAR = list(ADI)

DEVKOK = set()
for d in DEV:
    for parca in re.split(r"[()/,;–-]", d.get("ad", "")):
        k = norm(parca).strip()
        if len(k) >= 4:
            DEVKOK.add(k)
    DEVKOK.add(norm(d["id"].replace("-", " ")))

BOLGE_SOZ = re.compile(r"\b(bolgesi|bolge|ovasi|ova|nehri|irmagi|irmak|dagi|daglari|daglik|adasi|adalari|korfezi|denizi|cölü|colu|"
                       r"kiyisi|kiyilari|yarimadasi|havzasi|platosu|vadisi|bogazi|cephesi|sahili|sinir|hatti|eyaleti|vilayeti|sancagi|"
                       r"ulkesi|topraklari|kesimi|yakasi|kuzeyi|guneyi|dogusu|batisi|cevresi|hinterland|region|river|mountains|island|"
                       r"coast|valley|province|kingdom|sultanate|empire|kralligi|imparatorlugu|hanligi|beyligi|emirligi|cumhuriyeti|"
                       r"devleti|despotlugu|prensligi|dukaligi|kontlugu)\b")
BOLGE_AD = {norm(x) for x in (
    "Tuna", "Eflak", "Boğdan", "Banat", "Sırbistan", "Anadolu", "Batı Anadolu", "Doğu Anadolu", "Orta Anadolu", "Rumeli", "Kıbrıs",
    "Arnavutluk", "Epir", "Trablusgarp", "Mora", "Bosna", "Hersek", "Erdel", "Macaristan", "Polonya", "Lehistan", "Kırım", "Kafkasya",
    "Gürcistan", "Ermenistan", "Azerbaycan", "Horasan", "Mâverâünnehir", "Irak", "Suriye", "Şam", "Mısır", "Hicaz", "Yemen", "Habeşistan",
    "Mağrib", "Endülüs", "Sicilya", "Sardinya", "Korsika", "Girit", "Ege", "Akdeniz", "Karadeniz", "Hazar", "Kızıldeniz", "Basra Körfezi",
    "Fırat", "Dicle", "Nil", "Volga", "Dinyeper", "Dinyester", "Don", "Bug", "Prut", "Sava", "Drava", "Morava", "Vardar", "Meriç",
    "Kuzey Afrika", "Batı Afrika", "Doğu Afrika", "Güney Afrika", "Orta Asya", "Hindistan", "Çin", "Japonya", "Kore", "Moğolistan",
    "Tibet", "İran", "Afganistan", "Pencap", "Bengal", "Dekken", "Gucerat", "Sind", "Keşmir", "Avrupa", "Asya", "Afrika", "Amerika",
    "Balkanlar", "Trakya", "Makedonya", "Teselya", "Bulgaristan", "Yunanistan", "İtalya", "İspanya", "Portekiz", "Fransa", "Almanya",
    "Avusturya", "İngiltere", "İskoçya", "İrlanda", "Hollanda", "Belçika", "İsviçre", "Rusya", "Ukrayna", "Litvanya", "Letonya", "Estonya",
    "Finlandiya", "İsveç", "Norveç", "Danimarka", "Prusya", "Bohemya", "Moravya", "Silezya", "Galiçya", "Podolya", "Volinya", "Besarabya",
    "Dobruca", "Kuban", "Dağıstan", "Çerkezya", "Kabartay", "Kuzey Kafkasya", "Mezopotamya", "Cezîre", "Kürdistan", "Lazistan", "Karaman",
    "Kilikya", "Çukurova", "Toros", "Lübnan", "Filistin", "Ürdün", "Sina", "Necd", "Lahsa", "Umman", "Hadramut", "Sudan", "Nubya",
    "Libya", "Tunus", "Cezayir", "Fas", "Moritanya", "Senegal", "Mali", "Sahra", "Sahel", "Kongo", "Angola", "Mozambik", "Madagaskar",
    "Zengibar", "Etiyopya", "Somali", "Kenya", "Tanganika", "Uganda", "Nijerya", "Gana", "Kamerun", "Çad", "Nijer", "Benin", "Togo",
    "Sibirya", "Mançurya", "Turkistan", "Türkistan", "Doğu Türkistan", "Kazakistan", "Özbekistan", "Türkmenistan", "Kırgızistan", "Tacikistan",
    "Kuzey Amerika", "Güney Amerika", "Meksika", "Peru", "Şili", "Arjantin", "Brezilya", "Kanada", "Teksas", "Kaliforniya", "Florida",
    "Louisiana", "Virginia", "Yeni İngiltere", "Antiller", "Karayipler", "Okyanusya", "Avustralya", "Yeni Zelanda", "Filipinler",
    "Endonezya", "Cava", "Sumatra", "Borneo", "Malakka", "Burma", "Birmanya", "Siyam", "Vietnam", "Annam", "Tonkin", "Kamboçya", "Laos")}

def parcala(metin):
    """Üst düzey ayırıcılarla böl (parantez içindeki virgülleri koru): / , ; · ' ve '."""
    out, derin, buf = [], 0, ""
    i = 0
    while i < len(metin):
        c = metin[i]
        if c == "(":
            derin += 1
        elif c == ")":
            derin = max(0, derin - 1)
        if derin == 0 and (c in "/,;·" or metin.startswith(" ve ", i)):
            out.append(buf)
            buf = ""
            i += 4 if metin.startswith(" ve ", i) else 1
            continue
        buf += c
        i += 1
    out.append(buf)
    return [p.strip(" .:-–") for p in out if p.strip(" .:-–")]


def eslesir(p):
    if ADI.get(kok(p)):
        return True
    m = re.search(r"\(([^)]*)\)", p)
    if m and any(ADI.get(norm(x.strip())) for x in re.split(r"[,/;]", m.group(1))):
        return True
    return False


YAPI = re.compile(r"\b(saray|sarayi|camii|cami|kalesi|kale|kilise|manastir|turbe|kulliye|liman|limani|meydan|kopru|koprusu|hisar|"
                  r"palace|castle|fort|church|temple|tapinagi|mabedi)\b")
DONEM = re.compile(r"\b(culture|cultura|kulturu|kultur|period|donemi|devri|classique|moyen|recent|ancien|horizon|phase|fase|evresi|"
                   r"katmani|edict|era|final|late|early|tradition|mesolithic|dynasty|troia [ivx]+|via|aśoka|asoka|nanda|"
                   r"hakhamanishiya|haltamti|chulmun|tumulus|circle|rock shelter|complejo|depression|lake|cephe|cepheleri)\b")
# Bilinen antik/yerel eş adlar (atlas ad kökü) — elle, kısa ve denetlenebilir
ES_AD = {"ekbatana": "Hemedan", "pergamon": "Bergama", "sardes": "Sart", "ktesifon": "Ktesiphon", "budapeste": "Peşte",
         "massalia": "Marsilya", "syrakusai": "Siraküza", "pantikapaion": "Kerç", "kanes": "Kültepe", "budin": "Budin",
         "endican": "Andican", "thessalonike": "Selanik", "bizantion": "İstanbul", "taras": "Taranto", "san'a": "Sana",
         "diyarbekir": "Diyarbakır", "hufuf": "Hüfûf", "szigetvar": "Zigetvar", "otrar": "Otrar"}
YANLIS_HEDEF = {"Agadez", "Stavropol (Kafkas)", "Memphis (Chickasaw Bluffs)", "Bârfurûş (Bâbil)", "San Martín (Meta)", "Zamantı (Pınarbaşı)",
                "Varad (Oradea)", "Rakkāde", "Mongo", "Advâr (Tuvât)", "Kerma"}

ad_say = collections.Counter()
ornek = collections.defaultdict(list)
for o in O:
    for p in parcala(o.get("yer", "")):
        if not p or len(kok(p)) < 3 or eslesir(p):
            continue
        ad_say[p] += 1
        if len(ornek[p]) < 3:
            ornek[p].append(dict(t=o.get("t"), b=o.get("b", "")[:100], kaynak=str(o.get("kaynak", ""))[:160],
                                 taraflar=o.get("taraflar") or o.get("devlet") or o.get("devletler"), yer_id=o.get("yer_id")))

LATIN = re.compile(r"^[\sA-Za-zÀ-ÖØ-öø-ɏḀ-ỿʻʿʾ’'\-–.()0-9;:]+$")
BOLGE2 = re.compile(r"\b(trakya|ege|akdeniz|kenan|suriye|iran|irak|cezayir|macaristan|italya|ukrayna|pontus|nubya|filistin|kush|"
                    r"galya|germania|hispania|africa|proconsularis|numidia|mauretania|bithynia|kappadokia|lykia|karia|pisidia|"
                    r"lykaonia|aitolia|attika|messenia|akhaia|samnium|latium|aquitania|raetia|baktriya|sogdiana|fenike|amurru|"
                    r"euboia|pelagonia|byzacena|vorarlberg|stiria|baranya|kordun|deliorman|tabasco|mongolia|russia|tonga|tuva|"
                    r"papua|harizm|hârizm|irak-i acem|koile|habur|delta|semt)\b")
ROTA = re.compile(r"→|—|–| - |sınırı|sinir|yakını|yakini|civarı|civari|önleri|onleri|açıkları|aciklari|girişi|girisi|kuzeydoğusu|"
                  r"kuzeyi|güneyi|degismez")
SEMT = {norm(x) for x in ("Şehzadebaşı", "Bâbıâli", "Kâğıthane", "Kasımpaşa", "Dolmabahçe", "Atmeydanı", "Etmeydanı", "Gülhane",
                          "Bayazıt", "Süleymaniye", "Büyükçekmece", "Balta Limanı")}

kayit = []
for ad, n in ad_say.most_common():
    k = kok(re.sub(r"\s*—\s*Atlas'ta yok.*$", "", ad))
    sinif, hedef, oran = "EKSİK", None, None
    if not LATIN.match(ad):
        sinif = "YABANCI-YAZI"
    elif ROTA.search(ad) or ROTA.search(k):
        sinif = "ROTA/YAKLAŞIK"
    elif k in SEMT:
        sinif = "SEMT"
    elif BOLGE2.search(k):
        sinif = "BÖLGE/ÜLKE"
    elif k in BOLGE_AD or k in DEVKOK or BOLGE_SOZ.search(k) or any(k.startswith(b + " ") for b in BOLGE_AD):
        sinif = "BÖLGE/ÜLKE"
    elif YAPI.search(k):
        sinif = "YAPI"
    elif DONEM.search(k):
        sinif = "DÖNEM/KÜLTÜR"
    elif k.split(" ")[0] in ES_AD and ADI.get(norm(ES_AD[k.split(" ")[0]])):
        sinif, hedef, oran = "YAZIM", ADI[norm(ES_AD[k.split(" ")[0]])][0], "eş-ad tablosu"
    else:
        aday = [a for a in difflib.get_close_matches(k, ANAHTAR, n=3, cutoff=0.90) if a[:1] == k[:1] and len(k) >= 5
                and ADI[a][0] not in YANLIS_HEDEF]
        if aday:
            sinif, hedef, oran = "YAZIM", ADI[aday[0]][0], round(difflib.SequenceMatcher(None, k, aday[0]).ratio(), 2)
        else:
            bas = [a for a in ANAHTAR if len(k) >= 5 and len(a) >= 5 and (a.startswith(k + " ") or k.startswith(a + " "))
                   and ADI[a][0] not in YANLIS_HEDEF]
            if bas:
                sinif, hedef, oran = "YAZIM", ADI[bas[0]][0], "ad başı"
    if sinif == "EKSİK" and k.split(" ")[0] in ES_AD:
        hedef = ES_AD[k.split(" ")[0]]
        if ADI.get(norm(hedef)):
            sinif, hedef, oran = "YAZIM", ADI[norm(hedef)][0], "eş-ad tablosu"
        else:
            hedef = None
    guven = None
    if sinif == "YAZIM":
        guven = "YÜKSEK" if (oran == "eş-ad tablosu" or (isinstance(oran, float) and oran >= 0.95)
                             or (oran == "ad başı" and ROTA.search(ad) is None and len(k.split(" ")) == 2)) else "DOĞRULA"
    kayit.append(dict(ad=ad, kok=k, sinif=sinif, sayi=n, hedef=hedef, oran=oran, guven=guven, ornek=ornek[ad]))
json.dump(kayit, open(os.path.join(BURA, "siniflar.json"), "w", encoding="utf-8", newline="\n"), ensure_ascii=False, indent=1)
c = collections.Counter(x["sinif"] for x in kayit)
print("ad", len(kayit), dict(c), "anılma", sum(x["sayi"] for x in kayit))
for s in ("YAZIM", "EKSİK"):
    print("==", s, [(x["ad"], x["sayi"], x["hedef"]) for x in kayit if x["sinif"] == s][:60])
