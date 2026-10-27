# -*- coding: utf-8 -*-
"""Bölge adları -> Pleiades region/province kayıt adayları (çevrimdışı). Çıktı: denetim/yer-arastirma/parti_60_girdi.json
Kullanım: py -I denetim/ARAC-YER-BOLGE-PLEIADES-1021.py <gaz-kok>
Aday, ajanın ikinci tanık araştırması için girdidir (TDV/Iranica/akademik bölge tanımı)."""
import sys, io, os, re, json, csv, collections
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
csv.field_size_limit(10 ** 9)
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
from ad_esanlam import sadelestir as N

GAZ = sys.argv[1]
# Türkçe/ortaçağ bölge adı -> Pleiades'te aranacak Latin/Yunan adlar
BOLGE = {
 "Kapadokya": ["Cappadocia"], "Kilikya": ["Cilicia"], "Moravya": ["Moravia"], "Hârezm": ["Chorasmia", "Khwarezm"],
 "Horasan": ["Khorasan", "Chorasmene", "Parthia", "Arachosia"], "Cibâl": ["Media", "Jibal", "Media Magna"],
 "Kastilya": ["Castilla", "Castile"], "Trakya": ["Thracia", "Thrace"], "Bitinya": ["Bithynia"], "Galatya": ["Galatia"],
 "Frigya": ["Phrygia"], "Lidya": ["Lydia"], "Karya": ["Caria"], "Pontus": ["Pontus"], "Makedonya": ["Macedonia", "Makedonia"],
 "Epir": ["Epirus"], "Pannonia": ["Pannonia"], "Mauretania": ["Mauretania"], "Dacia": ["Dacia"], "Dakya": ["Dacia"],
 "Moesia": ["Moesia"], "Illyricum": ["Illyricum"], "Ermenistan": ["Armenia"], "Mezopotamya": ["Mesopotamia"], "Yahudiye": ["Iudaea", "Judaea"],
 "Filistin": ["Palaestina", "Palestine"], "Suriye": ["Syria"], "Fars": ["Persis", "Fars"], "Hûzistan": ["Susiana", "Khuzestan"],
 "Huzistan": ["Susiana"], "Sistan": ["Sistan", "Drangiana"], "Kirman": ["Carmania"], "Tabaristan": ["Hyrcania", "Tabaristan"],
 "Taberistan": ["Hyrcania"], "Cürcân": ["Hyrcania", "Gorgan"], "Tohâristân": ["Tokharistan", "Bactria"], "Fergana": ["Fergana"],
 "Maveraunnehir": ["Sogdiana", "Transoxiana"], "Mâverâünnehir": ["Sogdiana", "Transoxiana"], "Sogdiana": ["Sogdiana"],
 "Azerbaycan": ["Atropatene", "Media Atropatene"], "Arrân": ["Caucasian Albania", "Albania", "Arran"], "Şirvan": ["Shirvan"],
 "Gürcistan": ["Iberia", "Colchis", "Georgia"], "Kafkasya": ["Caucasus"], "Hicaz": ["Hejaz", "Hijaz"], "Yemen": ["Arabia Felix", "Himyar", "Yemen"],
 "Tihâme": ["Tihamah"], "Yemâme": ["Yamamah"], "İfrîkıye": ["Africa Proconsularis", "Ifriqiya", "Africa"], "Mağrib": ["Maghreb"],
 "Endülüs": ["Hispania Baetica", "Baetica", "Al-Andalus"], "Galiçya": ["Gallaecia", "Galicia"], "Gallaecia": ["Gallaecia"],
 "Dalmaçya": ["Dalmatia"], "Slavonya": ["Slavonia", "Pannonia Savia"], "Hırvatistan": ["Croatia"], "Bulgaristan": ["Bulgaria"],
 "Raşka": ["Rascia", "Raska"], "Zeta": ["Zeta", "Doclea"], "Sicilya": ["Sicilia", "Sicily"], "Toskana": ["Etruria", "Tuscia"],
 "Aragon": ["Aragon"], "Normandiya": ["Normandy"], "Bretanya": ["Armorica", "Brittany"], "Burgonya": ["Burgundy", "Burgundia"],
 "Galya": ["Gallia", "Gaul"], "Britannia": ["Britannia"], "Northumbria": ["Northumbria", "Bernicia"], "Wessex": ["Wessex"], "Mercia": ["Mercia"],
 "Saksonya": ["Saxony"], "Silezya": ["Silesia"], "Thüringen": ["Thuringia"], "Holstein": ["Holstein"], "Slesvig": ["Schleswig"],
 "Livonya": ["Livonia"], "Litvanya": ["Lithuania"], "Çin": ["China"], "Tibet": ["Tibet"], "Yunnan": ["Yunnan"], "Sichuan": ["Sichuan", "Shu"],
 "Liaodong": ["Liaodong"], "Ordos": ["Ordos"], "Bengal": ["Bengal", "Vanga", "Gauda"], "Hindistan": ["India"], "Champa": ["Champa"],
 "Annam": ["Annam"], "Kamboçya": ["Cambodia", "Funan", "Chenla"], "Japonya": ["Japan"], "Libya": ["Libya", "Cyrenaica"],
 "Hadramut": ["Hadramawt", "Hadramaut"], "Umman": ["Oman", "Omana"], "Bahreyn": ["Dilmun", "Bahrain"], "Necid": ["Najd"],
 "Anadolu": ["Anatolia", "Asia Minor"], "Irak": ["Iraq", "Babylonia"], "İran": ["Iran", "Persia"], "İtalya": ["Italia", "Italy"],
 "Macaristan": ["Hungary"], "Eflak": ["Wallachia"], "Boğdan": ["Moldavia"], "Erdel": ["Transylvania"], "Mısır": ["Aegyptus", "Egypt"],
 "Nübye": ["Nubia"], "Habeşistan": ["Aksum", "Ethiopia"], "Lübnan": ["Phoenicia", "Lebanon"], "Ürdün": ["Jordan", "Transjordan"],
 "Galile": ["Galilaea", "Galilee"], "Hauran": ["Auranitis", "Hauran"], "Sina": ["Sinai"], "Kıbrıs": ["Cyprus"], "Girit": ["Crete"],
 "Berka": ["Barqa", "Cyrenaica"], "Tripolitanya": ["Tripolitania"], "Mora": ["Peloponnesus"], "Teselya": ["Thessalia", "Thessaly"],
 "Attika": ["Attica"], "Beotya": ["Boeotia"], "Arnavutluk": ["Albania", "Epirus Nova"], "Bosna": ["Bosnia"], "Kıpçak": ["Kipchak"],
}
env = json.load(open(os.path.join(KOK, "denetim", "ONCE1281-YER-ENVANTER.json"), encoding="utf-8"))
ads = {}
for sinif in ("bolge", "yok", "atlasta"):
    for r in env[sinif]:
        if r["ad"] in BOLGE:
            ads.setdefault(r["ad"], r)
places = {}
with open(os.path.join(GAZ, "gaz-pleiades", "pleiades-places-latest.csv"), encoding="utf-8", newline="") as f:
    for r in csv.DictReader(f):
        places[r["id"]] = r
idx = collections.defaultdict(set)
def ekle(ad, pid):
    for p in re.split(r"[/,;]", ad or ""):
        n = N(re.sub(r"\(.*?\)", "", p))
        if len(n) >= 4 and pid in places:
            idx[n].add(pid)
for pid, r in places.items():
    ekle(r["title"], pid)
with open(os.path.join(GAZ, "gaz-pleiades", "pleiades-names-latest.csv"), encoding="utf-8", newline="") as f:
    for r in csv.DictReader(f):
        pid = r["pid"].rsplit("/", 1)[-1]
        ekle(r["nameTransliterated"], pid)
        ekle(r["nameAttested"], pid)
BT = re.compile(r"region|province|territory|people|district|island")
out = []
for ad, r in ads.items():
    adaylar = []
    for lat in BOLGE[ad]:
        for pid in idx.get(N(lat), ()):
            p = places[pid]
            if BT.search(p["featureTypes"] or "") and p["reprLat"]:
                adaylar.append({"pleiades": pid, "title": p["title"], "tip": p["featureTypes"], "lat": float(p["reprLat"]), "lon": float(p["reprLong"]),
                                "bbox": p["bbox"], "donem": [p["minDate"], p["maxDate"]], "kesinlik": p["locationPrecision"]})
    out.append({"ad": ad, "madde_sayisi": r["n"], "yil_araligi": [r["yil_min"], r["yil_maks"]], "ornek_maddeler": r["ornek"],
                "pleiades_adaylari": adaylar[:6]})
out.sort(key=lambda x: -x["madde_sayisi"])
json.dump({"sinif": "bolge_pleiades", "adlar": out}, open(os.path.join(KOK, "denetim", "yer-arastirma", "parti_60_girdi.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print(len(out), "bölge adı;", sum(1 for x in out if x["pleiades_adaylari"]), "Pleiades adaylı")
