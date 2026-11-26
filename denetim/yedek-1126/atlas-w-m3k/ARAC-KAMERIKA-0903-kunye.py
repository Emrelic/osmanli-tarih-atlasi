# -*- coding: utf-8 -*-
"""KÜNYE HARİTALAMA — 377 adaya `s:` kimlik zinciri önerisi.

Kural kaynağı: oturumlar/DUNYA-YERLESIM-PROGRAMI.md
  §⑤ ayrı koloni künyesi AÇILMAZ; HBC bir şirkettir ⇒ ingiliz-kuzey-amerika
     dominyon: Kanada 1867-07-01
  §⑥ yerli kimlik taneciği = HALK ya da KONFEDERASYON
     (kültür alanı FAZLA KABA · klan FAZLA İNCE)

ÇIKTI: her adayın önerilen kimlik zinciri + `devletler.js`te VAR mı.
🔴 Bu bir ÖNERİDİR. §⑦: "üç kapı da biçimseldir, tarihî doğruluğu
   hiçbiri ölçmez" — yazım turu her zinciri kaynağa sormalıdır.

PROJE KÖKÜNDEN:  py denetim/ARAC-KAMERIKA-0903-kunye.py
"""
import importlib.util
import io
import json
import os
import re
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

# ---- ORTAK normalleştirici (§4: alet başına ayrı yazılmaz) ----
_yol = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                    "ARAC-KAMERIKA-0903-normal.py")
_spec = importlib.util.spec_from_file_location("kam_normal", _yol)
_n = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(_n)
nrm, icerir = _n.nrm, _n.icerir

# ---- devletler.js'teki gerçek künyeler (regex DEĞİL, alanı okuyoruz) ----
s = io.open("data/devletler.js", encoding="utf-8").read()
VAR = set(re.findall(r'id\s*:\s*"([^"]+)"', s))
OMUR = {}
for m in re.finditer(r'id\s*:\s*"([^"]+)"[^}]*?\bf\s*:\s*"(\d{3,4})-', s):
    OMUR[m.group(1)] = m.group(2)

ADAY = json.load(io.open("denetim/ADAY-KAMERIKA-0903.json", encoding="utf-8"))

# ---- kırılma günleri (sömürge devri) ----
PARIS = "1763-02-10"        # Yeni Fransa -> Britanya
ABD_BAG = "1783-09-03"      # 13 koloni -> ABD
KANADA = "1867-07-01"       # British North America Act
ALASKA = "1867-10-18"       # Rus Amerikası -> ABD
MEKSIKA = "1821-09-27"      # Yeni İspanya -> Meksika
GUADALUPE = "1848-02-02"    # kuzey Meksika -> ABD


def zincir(*ciftler):
    return [{"d": k, "f": f} for k, f in ciftler]


# ---- YERLİ HALK KÜNYELERİ — §⑥ halk/konfederasyon taneciği ----
YERLI = [
    # (bolge anahtarı, önerilen künye)
    ("inyupiak", "inuit"), ("nunavik", "inuit"), ("bakır inuit", "inuit"),
    ("karayer inuit", "inuit"), ("netsilik", "inuit"),
    ("iglulingmiut", "inuit"), ("padlimiut", "inuit"),
    ("aivilingmiut", "inuit"), ("mackenzie inuit", "inuit"),
    ("inuvialuit", "inuit"), ("labrador inuit", "inuit"),
    ("sadlermiut", "inuit"), ("inuit", "inuit"),
    ("yupik", "yupik"), ("alutiiq", "alutiiq"), ("aleut", "aleut"),
    ("nunamiut", "inuit"),
    ("gwich'in", "dene"), ("ahtna", "dene"), ("yukarı tanana", "dene"),
    ("koyukon", "dene"), ("dena'ina", "dene"), ("dağ dene", "dene"),
    ("sahtu dene", "dene"), ("denesuline", "dene"),
    ("yellowknives", "dene"), ("kaska", "dene"), ("tahltan", "dene"),
    ("sekani", "dene"), ("babine", "dene"), ("tsilhqot'in", "dene"),
    ("atabask", "dene"), ("kuskokwim atabask", "dene"),
    ("innu", "innu"), ("naskapi", "innu"),
    ("atikamekw", "kri"), ("oji-kri", "kri"), ("kri", "kri"),
    ("ojibwe", "ojibwe"),
    ("hayda", "hayda"), ("tlingit", "tlingit"), ("tsimşiyan", "tsimsiyan"),
    ("nuxalk", "nuxalk"), ("heiltsuk", "heiltsuk"),
    ("mowaçaht", "nuu-cah-nulth"),
    ("secwépemc", "secwepemc"), ("nez perce", "nez-perce"),
    ("klamath", "klamath"), ("sahaptin", "sahaptin"),
    ("wintu", "wintu"), ("duwamish", "salish"),
    ("şoşoni", "sosoni"), ("payut", "payut"), ("ute", "ute"),
    ("navaho", "navaho"), ("yavapai", "yavapai"), ("mohave", "mohave"),
    ("meskalero", "meskalero-apaci"), ("çirikahua", "cirikahua-apaci"),
    ("zuni", "zuni"), ("pueblo", "pueblo-bagimsizligi"),
    ("mandan", "mandan"), ("hidatsa", "hidatsa"), ("arikara", "arikara"),
    ("pavni", "pavni"), ("karga", "karga"), ("wiçita", "wicita"),
    ("lakota", "lakota"), ("dakota", "lakota"),
    ("assiniboine", "assiniboine"), ("osage", "osage"),
    ("kansa", "kansa"), ("ponka", "ponka"), ("omaha", "omaha"),
    ("sauk", "sauk"), ("miami", "miami"), ("şavni", "savni"),
    ("ho-chunk", "ho-chunk"), ("mohavk", "haudenosaunee"),
    ("vendat", "vendat"), ("abenaki", "abenaki"), ("mikmak", "mikmak"),
    ("maliseet", "maliseet"), ("beothuk", "beothuk"),
    ("occaneechi", "occaneechi"), ("kalusa", "kalusa"),
    ("tocobaga", "tocobaga"), ("çikasav", "cikasav"),
    ("çeroki", "cherokee"), ("kiowa", "kiowa"),
    ("mississippi kültürü", "mississippi-kulturu"),
    ("zapotek", "zapotek-krallik"), ("huastek", "huastek"),
    ("koçimi", "kocimi"), ("julimes", "julimes"), ("kuçan", "kucan"),
    ("piankaşav", "miami"), ("métis", "metis"), ("metis", "metis"),
    ("muskoki", "creek-konfederasyonu"), ("caddo", "caddo"),
    ("taino", "taino"),
]


def abd_gollerleri(a):
    """Göller'in GÜNEYİ ve Ohio havzası — 1783'te ABD'ye geçen kuşak.

    Kaba enlem kutusu burada YETMİYOR: Michilimackinac 45,85K'dedir ve
    Michigan'dadır; Sault Ste. Marie'nin kuzey yakası Ontario'dur.
    Sınırı coğrafyadan değil ADDAN okuyorum, çünkü bu bir avuç kayıt ve
    yanlış bir formül otuz kaydı sessizce yanlış devlete verirdi.
    """
    return a.get("ad") in {
        "Michilimackinac", "La Baye (Green Bay)", "Prairie du Chien",
        "Chequamegon (La Pointe)", "Grand Portage",
        "Duluth (Fond du Lac)", "Fort Duquesne (Pittsburgh)",
    }


def yerli_kunye(bolge):
    for anahtar, k in YERLI:
        if icerir(bolge, anahtar):
            return k
    return None


def var_mi(bolge, *anahtarlar):
    return any(icerir(bolge, a) for a in anahtarlar)


# ---- AD BAZLI İSTİSNA — bolge yetmediği yerler ----
# 🔴 Mississippi merkezlerinin DÖRDÜ de bolge:"Mississippi kültürü"
# taşıyor, ama M-2525 gereği her biri AYRI künye aldı (dördün dört ayrı
# sonu var). Bölgeye bakan bir eşleştirici bunları ayıramaz — ada bakan
# bir istisna gerekiyor.
# 🔴 MİSSİSSİPPİ MERKEZLERİNDE ARDIL HALK ŞART: künye 1450/1550'de
# biter, Avrupalı 1682-1733'te gelir ⇒ arada 130-230 YILLIK SAHİPSİZLİK
# doğuyordu (`Değişmez 1` ihlali). Boşluğu ardıl halkla kapattım ve
# üçü de atlasta ZATEN VAR olan künyeler:
#   Etowah     → creek-konfederasyonu (f:1281 t:1832-03-24)
#   Moundville → choctaw              (f:1281 t:1830-09-27)
#   Spiro      → wicita               (benim künyem, Kaddo dilli)
# ⚠️ Üçü de HALK taneciğinde ÇIKARIM: höyük merkezi söndükten sonra o
#    toprağı hangi halkın tuttuğu arkeolojik süreklilikten okunur, bir
#    devir belgesinden değil. Yazım turu doğrulamalı.
AD_ISTISNA = {
    "Etowah": [("etowah", None), ("creek-konfederasyonu", "1550-01-01"),
               ("ingiltere", "1733-06-09"), ("abd", ABD_BAG)],
    "Moundville": [("moundville", None), ("choctaw", "1450-01-01"),
                   ("fransa", "1699-04-08"),
                   ("ingiltere", PARIS), ("abd", ABD_BAG)],
    "Spiro": [("spiro", None), ("wicita", "1450-01-01"),
              ("fransa", "1682-04-09"),
              ("yeni-ispanya", "1762-11-03"), ("abd", "1803-12-20")],
    # 🔴 KURULUŞU KÜNYESİNDEN SONRA olan dört kayıt: ölü künyeyle
    # başlayamazlar, doğrudan ARDILA bağlanırlar.
    "Qikiqtaruk (Herschel Adası)": [("kanada", None)],      # 1890 > inuit t:1880
    "Killiniq (Port Burwell)": [("kanada", None)],          # 1904 > inuit t:1880
    "Fort Robidoux (Uinta Havzası)": [("meksika", None)],   # 1832 > y-ispanya t:1821
    "Las Vegas (Yeni Meksika)": [("meksika", None)],        # 1835 > y-ispanya t:1821
    # Ocmulgee SÖNMEDİ, DEVROLDU ⇒ ayrı künye yok, ardılı zaten var
    "Ocmulgee": [("creek-konfederasyonu", None), ("abd", "1832-03-24")],
    # M-2425 sınavını geçemeyenler: künye yok, sömürge zinciri
    "Tocobaga (Safety Harbor)": [("ispanya", "1565-09-08"),
                                 ("abd", "1821-02-22")],
    "Wintu (Yukarı Sacramento)": [("abd", "1850-09-09")],
    "Natashquan": [("fransa", None), ("ingiliz-kuzey-amerika", PARIS),
                   ("kanada", KANADA)],
    # Teksas Cumhuriyeti 1845-12-29'da ABD'ye katıldı — zincir 1923'e
    # kadar gitmeliydi, 1845'te kesiliyordu (Değişmez 1 kusuru)
    "San Felipe de Austin": [("meksika", None),
                             ("teksas-cumhuriyeti", "1836-03-02"),
                             ("abd", "1845-12-29")],
}

# 🔴 KURULUŞU İLE İLK SAHİBİ ARASINDA BOŞLUK OLAN KAYITLAR.
# Emsal ATLASIN KENDİSİNDE: `Taos Pueblo` ve `Acoma Pueblo` 1281-1610
# arası için `kasitli_bosluk:true` + `bos:"devletsiz"` + gerekçeli
# `neden:` taşıyor VE 1610'dan itibaren `s:` zinciri var. Aynı biçim.
# 📌 Bu emsali, kendi yanlış iddiamı ölçerken buldum (§13.7) — çürüyen
#    bir bulgu, doğru bir kalıp öğretti.
ERKEN_BOSLUK = {
    "Pecos Pueblo (Cicuye)": (
        "devletsiz",
        "1281-1598 arasi Pueblo koyleri siyaseten OZERKTI: her koy kendi "
        "konseyiyle yonetiliyor, ustlerinde merkezi bir devlet YOKTU. "
        "Ispanyol yerlesimi 1598'de Onate ile basladi. Atlasin kendi "
        "Taos Pueblo ve Acoma Pueblo kayitlari AYNI beyani tasiyor — "
        "emsal onlardir. kaynak: HNAI c.9 Southwest (Smithsonian); "
        "TDV Pueblo halklarini ANMIYOR (olculdu, tanecik boslugu)."),
    "Paquimé (Casas Grandes)": (
        "devletsiz",
        "Paquime 14.-15. yy'da bolgesel bir merkezdi ve ~1450'de "
        "sonumlendi; ardindan bolgede merkezi bir siyasi yapi kurulmadi. "
        "Ispanyol Nueva Vizcaya idaresi 1560'lardan sonra ulasti. "
        "kaynak: HNAI c.10 Southwest (Smithsonian)."),
    "Tocobaga (Safety Harbor)": (
        "kabile",
        "Tocobaga bir reislikti ama datable bir bitisi YOK (18. yy "
        "basinda sonumlendi, kaynak yil vermiyor) ⇒ M-2425 teritoryal "
        "sinavini gecse de TARIH sinavini gecemiyor, kunye yazilmadi. "
        "Ispanyol Florida iddiasi 1565'te St. Augustine ile basladi. "
        "kaynak: HNAI c.14 Southeast (Smithsonian)."),
    "Wintu (Yukarı Sacramento)": (
        "kabile",
        "Wintu bantlari Yukari Sacramento'da yasadi ama Kaliforniya'nin "
        "18 antlasmasinin hicbiri ABD Senatosu'nca ONAYLANMADI ⇒ ortada "
        "bir devir gunu YOK ve kunye yazilamadi (arandi, bulunamadi). "
        "ABD idaresi eyalet olusuyla 1850-09-09'da basladi. "
        "kaynak: HNAI c.8 California (Smithsonian)."),
}


def haritala(a):
    ad = a.get("ad", "")
    if ad in AD_ISTISNA:
        f0 = a.get("f", "1281-01-01")
        return ([{"d": k, "f": (g or f0)} for k, g in AD_ISTISNA[ad]],
                "istisna")
    b = a.get("bolge", "")
    bl = nrm(b)
    f = a.get("f", "1281-01-01")

    # --- sömürge/devlet zincirleri ---
    if "rus amerika" in bl:
        return zincir(("rusya", f), ("abd", ALASKA)), "sömürge"
    if any(x in bl for x in ("hbc", "nwc", "britanya kanada",
                             "nwmp", "yukon", "britanya kolumbiyasi",
                             "kanada")):
        if f < KANADA:
            return zincir(("ingiliz-kuzey-amerika", f),
                          ("kanada", KANADA)), "sömürge"
        return zincir(("kanada", f)), "sömürge"
    if "yeni fransa" in bl or "akadya" in bl:
        # 🔴 YENİ FRANSA İKİYE BÖLÜNDÜ ve ben tek kural yazmıştım:
        # Paris 1763 ile Kanada Britanya'ya geçti, ama Göller'in GÜNEYİ
        # ve Ohio havzası 1783'te ABD'ye gitti. Kaba enlem kutusu
        # Michilimackinac · Green Bay · Prairie du Chien gibi ABD
        # noktalarını Kanada sayıyordu.
        if abd_gollerleri(a):
            return zincir(("fransa", f), ("ingiltere", PARIS),
                          ("abd", ABD_BAG)), "sömürge"
        return zincir(("fransa", f),
                      ("ingiliz-kuzey-amerika", PARIS),
                      ("kanada", KANADA)), "sömürge"
    if "fransiz luizyana" in bl:
        # 1762-11-03 Fontainebleau: Luizyana İSPANYA'ya · 1803 ABD'ye
        return zincir(("fransa", f), ("yeni-ispanya", "1762-11-03"),
                      ("abd", "1803-12-20")), "sömürge"
    if "fransiz illinois" in bl or "piankasav" in bl:
        # İllinois ülkesi Luizyana ile AYNI YOLU İZLEMEZ:
        # 1763 Paris ile BRİTANYA'ya, 1783 ile ABD'ye geçti
        return zincir(("fransa", f), ("ingiltere", PARIS),
                      ("abd", ABD_BAG)), "sömürge"
    if "moravian" in bl or "ingiltere/inuit" in bl or "bask" in bl:
        return zincir(("ingiliz-kuzey-amerika", f),
                      ("kanada", KANADA)), "sömürge"
    if "danimarka" in bl:
        return zincir(("danimarka", f)), "sömürge"
    if bl.startswith("abd") or "/abd" in bl or "teksas cumhuriyeti" in bl:
        return zincir(("abd", f)), "sömürge"
    if "meksika teksasi" in bl:
        return zincir(("meksika", f), ("teksas-cumhuriyeti",
                                       "1836-03-02")), "sömürge"
    if "ispanyol" in bl or "yeni ispanya" in bl or "nuevo santander" in bl \
            or "nueva vizcaya" in bl or "meksika" in bl:
        z = [("yeni-ispanya", f)]
        if f < MEKSIKA:
            z.append(("meksika", MEKSIKA))
        return zincir(*z), "sömürge"
    if "ingiliz moskito" in bl or "kereste" in bl:
        return zincir(("ingiltere", f)), "sömürge"
    if "ingiltere" in bl:
        return zincir(("ingiltere", f), ("abd", ABD_BAG)), "sömürge"

    k = yerli_kunye(b)
    if k:
        return zincir((k, f)), "yerli"
    return None, "?"


sonuc = []
gerekli = {}
for a in ADAY:
    z, cins = haritala(a)
    a2 = dict(a)
    a2["s_oneri"] = z
    a2["kimlik_cinsi"] = cins
    if a["ad"] in ERKEN_BOSLUK:
        b, n = ERKEN_BOSLUK[a["ad"]]
        a2["erken_bos"] = b
        a2["erken_neden"] = n
    sonuc.append(a2)
    if z:
        for p in z:
            gerekli.setdefault(p["d"], 0)
            gerekli[p["d"]] += 1

json.dump(sonuc, io.open("denetim/ADAY-KAMERIKA-0903-kunyeli.json", "w",
                         encoding="utf-8"), ensure_ascii=False, indent=1)

esiz = [a for a in sonuc if not a["s_oneri"]]
print("aday: %d · zincir önerilen: %d · ESLESMEYEN: %d"
      % (len(sonuc), len(sonuc) - len(esiz), len(esiz)))
for a in esiz:
    print("   ?  %-42s  bolge=%s" % (a["ad"], a.get("bolge")))

mevcut = sorted([k for k in gerekli if k in VAR], key=lambda k: -gerekli[k])
yeni = sorted([k for k in gerekli if k not in VAR], key=lambda k: -gerekli[k])
print("\n🟢 devletler.js'te ZATEN VAR: %d künye" % len(mevcut))
for k in mevcut:
    print("   %4d  %-28s (ömür f=%s)" % (gerekli[k], k, OMUR.get(k, "?")))
print("\n🔴 AÇILMASI GEREKEN YENİ KÜNYE: %d" % len(yeni))
for k in yeni:
    print("   %4d  %s" % (gerekli[k], k))
print("\n-> denetim/ADAY-KAMERIKA-0903-kunyeli.json yazildi")
