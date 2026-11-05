# -*- coding: utf-8 -*-
"""ENKLAV-1103/1104 hükümlerinden tekrarlayan kovaları VERİ üzerinde ölçer → kovalar.json.

Her kova bir kuraldır; kural yerleşim verisini (girdi.yukle) bugünkü hâliyle tarar ve etkilenen
yerleşimleri dosya:satır, şimdiki s:/d: dönemi ve önerilen dönemle döker. Önerilen kırılma gününün
±30 gün içinde kronoloji maddesi (olaylar*.js + kronoloji_sinir*.js, denetle.olaylari_yukle) olup
olmadığı da yazılır: madde yerin adını ya da yeni sahibin adını anıyorsa VAR.

Kullanım: py denetim/ENKLAV-1103/kovalar_olc.py   (worktree kökünden)
Çıktı:    denetim/ENKLAV-1103/kovalar.json
"""
import os, re, sys, json, glob, datetime, collections

KOK = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)
import girdi, gun, denetle

BURA = os.path.join(KOK, "denetim", "ENKLAV-1103")
Y = girdi.yukle(sessiz=True)
DEV = {d["id"]: d for d in girdi.oku_devletler()}
O = denetle.olaylari_yukle()
norm = denetle._2s_norm

# --- dosya:satır dizini ----------------------------------------------------------------------
SATIR = {}
for dosya in {y["_kaynak"] for y in Y}:
    for i, ln in enumerate(open(os.path.join(KOK, "data", dosya), encoding="utf-8"), 1):
        for m in re.finditer(r'(?:\bad|"ad")\s*:\s*"((?:[^"\\]|\\.)*)"', ln):
            try:
                ad = json.loads('"%s"' % m.group(1))
            except ValueError:
                ad = m.group(1)
            SATIR.setdefault((dosya, ad), i)


def yer_satir(y):
    return "data/%s:%s" % (y["_kaynak"], SATIR.get((y["_kaynak"], y["ad"]), "?"))


# --- yardımcılar -------------------------------------------------------------------------------
def g(s):
    return gun.gun(s)


def sahip(y, t):
    gn = g(t)
    if (y.get("kur") and g(y["kur"]) > gn) or (y.get("bit") and g(y["bit"]) <= gn):
        return "YOK(epok)"
    for kat in ("d", "v"):
        for p in y.get(kat) or []:
            if g(p["f"]) <= gn < g(p["t"]):
                return "OSMANLI" if kat == "d" else "TABI"
    for p in y.get("s") or []:
        if g(p["f"]) <= gn < g(p["t"]):
            return p.get("d")
    return None


def donemler(y, f, t, kat=("s",)):
    """[f, t) penceresine değen dönemler, kısa metin."""
    out = []
    for k in kat:
        for p in y.get(k) or []:
            if g(p["f"]) < g(t) and g(p["t"]) > g(f):
                out.append("%s:%s %s→%s" % (k, p.get("d", "OSMANLI" if k == "d" else "TABI"), p["f"], p["t"]))
    return "; ".join(out) or "—"


def kok(ad):
    return norm(re.split(r"\s*\(", ad)[0])


def krono(ad, tarih, devlet_idler=()):
    """±30 gün içinde yeri ya da yeni sahibi anan madde var mı?"""
    try:
        gn = g(tarih)
    except Exception:
        return "ÖLÇÜLEMEDİ"
    k = kok(ad)
    adlar = [norm(DEV[i]["ad"].split("(")[0]) for i in devlet_idler if i in DEV]
    for o in O:
        try:
            ot = g(denetle.tam(denetle.pad(o["t"])))
        except Exception:
            continue
        if abs(ot - gn) > 30:
            continue
        if o.get("yer_id") == ad:
            return "VAR: %s — %s" % (o["t"], o["b"][:70])
        metin = norm(" ".join(str(o.get(a, "")) for a in ("b", "yer", "d")))
        if len(k) >= 4 and re.search(r"\b%s" % re.escape(k), metin):
            return "VAR: %s — %s" % (o["t"], o["b"][:70])
        for a in adlar:
            if len(a) >= 5 and a in norm(o.get("b", "")):
                return "VAR (taraf): %s — %s" % (o["t"], o["b"][:70])
    return "YOK"


def kutu(y, lat1, lat2, lon1, lon2):
    return "lat" in y and lat1 <= y["lat"] <= lat2 and lon1 <= y["lon"] <= lon2


KOVALAR = []


def kova(kod, ad, dayanak, aciklama, satirlar, hukumler="", motor=False):
    KOVALAR.append(dict(kod=kod, ad=ad, dayanak=dayanak, aciklama=aciklama, hukumler=hukumler, motor=motor,
                        sayi=len(satirlar), satirlar=satirlar))
    print("%-4s %-46s %4d satır" % (kod, ad[:46], len(satirlar)))


def satir(y, simdi, oneri, kirilma, yeni_idler, guven):
    return dict(ad=y["ad"], yer=yer_satir(y), lat=y.get("lat"), lon=y.get("lon"), simdi=simdi, oneri=oneri,
                kirilma=kirilma, guven=guven, kronoloji=krono(y["ad"], kirilma, yeni_idler) if kirilma else "—")


# ================================================================================================
# A — 1917-11-07'den kesintisiz 'sovyet-rusya' (ara dönem yok)
# ================================================================================================
def transkafkas(y):
    """Kafkas sırtının güneyi (kaba): Ermenistan-Azerbaycan-Gürcistan; Abhazya ve Güney Osetya dahil, Dağıstan/Kabarda hariç."""
    la, lo = y["lat"], y["lon"]
    return la < 41.9 or (lo < 43.2 and la < 43.6) or (lo < 44.8 and la < 42.8)


BOLGE = [  # ad, kutu, önerilen ara dönem, ilgili künyeler
    ("Kuzey Kafkasya", (41.9, 45.5, 37.0, 48.8),
     "1917-1920 Dağlı Cumhuriyeti / Terek-Dağıstan Sovyetleri / guney-rusya-beyaz (Denikin 1919) / 1918 Osmanlı (Derbend, Temir Han Şura) "
     "— hangi yapı ve gün şehir şehir kaynakla", "1918-05-11", ["guney-rusya-beyaz"]),
    ("Kafkasya", (38.3, 43.6, 39.8, 50.6),
     "1917-11-07 → 1918-05-28 transkafkasya; 1918-05-28 → Sovyet girişi: azerbaycan-demokratik-cumhuriyeti (künye t 1920-04-27) / "
     "ermenistan-demokratik-cumhuriyeti (t 1920-12-02) / gurcistan-demokratik-cumhuriyeti (t 1921-03-16); 1918 Osmanlı ve İngiliz "
     "işgalleri ayrı — hangi cumhuriyet ve gün şehir şehir kaynakla", "1918-05-28",
     ["transkafkasya", "azerbaycan-demokratik-cumhuriyeti", "ermenistan-demokratik-cumhuriyeti", "gurcistan-demokratik-cumhuriyeti"]),
    ("Ukrayna", (44.3, 52.4, 22.0, 40.3),
     "1917-11-20 → ukrayna-halk-cumhuriyeti; 1918-04-29 → 1918-12-14 Hetmanlık (ukrayna-devleti-1918); 1919 guney-rusya-beyaz "
     "(sol yaka); Sovyet dönemi her şehrin kendi günüyle — Encyclopedia of Ukraine (ENKLAV-1103 E046-E051)", "1917-11-20",
     ["ukrayna-halk-cumhuriyeti", "ukrayna-devleti-1918", "guney-rusya-beyaz"]),
    ("Belarus", (51.2, 56.2, 23.2, 32.8),
     "1918-02 → 1918-11 Alman işgali (Brest-Litovsk); belarus-halk-cumhuriyeti 1918-03-25 → 1919-01-05 (künye); "
     "1919-1920 polonya işgali (Minsk 1919-08 → 1920-07) — günler kaynakla", "1918-03-25",
     ["belarus-halk-cumhuriyeti", "polonya", "almanya"]),
    ("Uzak Doğu / Çita", (40.0, 56.5, 105.0, 142.0),
     "uzak-dogu-cumhuriyeti 1920-04-06 → 1922-11-14 (künye); Primorye'de 1918-1922 Japon/Beyaz idaresi ayrıca", "1920-04-06",
     ["uzak-dogu-cumhuriyeti"]),
]
for bad, (a1, a2, o1, o2), oneri, kir, idler in BOLGE:
    S = []
    for y in Y:
        if not kutu(y, a1, a2, o1, o2):
            continue
        if bad == "Kafkasya" and not transkafkas(y):
            continue
        if bad == "Kuzey Kafkasya" and transkafkas(y):
            continue
        for p in y.get("s") or []:
            if p.get("d") == "sovyet-rusya" and p["f"] == "1917-11-07" and p["t"] >= "1920-03-01":
                S.append(satir(y, "s:sovyet-rusya %s→%s" % (p["f"], p["t"]), oneri, kir, idler, "OLCUM (boşluk) · KAYNAK-GEREK (günler)"))
    kova("A-%s" % {"Kuzey Kafkasya": "KKF", "Kafkasya": "KAF", "Ukrayna": "UKR", "Belarus": "BEL"}.get(bad, "UZD"), "1917-11-07'den kesintisiz sovyet-rusya — %s" % bad, "VERİ ÖLÇÜMÜ (boşluk); günler KAYNAK-GEREK",
         "s: dönemi 1917-11-07'de açılıp en az 1920-03'e dek kesintisiz 'sovyet-rusya'; o bölgede 1917-1922 ara devletleri (künyeleri "
         "devletler.js'te var) hiç yazılmamış.", S,
         "ENKLAV-1103 E021, E046-E051; ENKLAV-1104 K112, K177, K214, K291, K352-K354, K373")

# ================================================================================================
# B — NDH 1941-1945 kapsaması
# ================================================================================================
S = []
for y in Y:
    if not kutu(y, 42.5, 46.6, 13.4, 19.7) or (y["lat"] < 43.0 and y["lon"] > 18.4):
        continue
    if sahip(y, "1943-01-01") == "yugoslavya":
        S.append(satir(y, donemler(y, "1941-04-06", "1945-06-01"),
                       "1941-04-10 → 1945-05-08 hirvatistan-bagimsiz (künye); Dalmaçya kıyısı (İtalya ilhakı 1941-05-18), Međimurje/Baranya "
                       "(Macaristan), Syrmia doğusu ayrık — şehir şehir kaynakla", "1941-04-10", ["hirvatistan-bagimsiz"],
                       "OLCUM (boşluk) · KAYNAK-GEREK (ayrım)"))
kova("B", "NDH 1941-1945: işgal/NDH dönemi yok (1943'te 'yugoslavya')", "VERİ ÖLÇÜMÜ (boşluk); İtalya/Macar ayrımı KAYNAK-GEREK",
     "Hırvatistan-Bosna kutusunda (Karadağ hariç) 1943-01-01'de sahibi hâlâ 'yugoslavya' olan noktalar: 1941 işgali ve NDH hiç yazılmamış.",
     S, "ENKLAV-1103 E064, E074, E078, E085")

# ================================================================================================
# C — 1990'lar RS / RSK / HB (ad listesi)
# ================================================================================================
LISTE = {
    "bosna-sirp-cumhuriyeti": ("1993-06-01", "1992-04 (şehrin ele geçirilişi, kaynakla) → 1995-12-14 bosna-sirp-cumhuriyeti (künye t, Dayton)",
                               ["banja luka", "bijeljina", "prijedor", "doboj", "trebinje", "pale", "zvornik", "visegrad", "foca",
                                "novi grad", "bosanski novi", "gradiska", "derventa", "bileca", "gacko", "nevesinje", "sokolac", "rogatica",
                                "kotor varos", "teslic", "modrica", "samac", "prnjavor", "ljubinje", "han pijesak", "vlasenica", "bratunac"]),
    "sirp-krajina-cumhuriyeti": ("1993-06-01", "1991-12-19 → 1995-08-07 sirp-krajina-cumhuriyeti (künye; Oluja 1995-08-04/07 şehir günüyle); "
                                 "Doğu Slavonya 1995-11-12 Erdut → UNTAES 1998-01-15",
                                 ["knin", "benkovac", "obrovac", "glina", "petrinja", "kostajnica", "dvor", "vojnic", "slunj", "korenica",
                                  "gracac", "okucani", "vukovar", "beli manastir", "ilok", "topusko", "vrginmost"]),
    "herzeg-bosna": ("1993-06-01", "1991-11-18 → 1996-08-14 herzeg-bosna (künye; Washington Antlaşması 1994-03-18 sonrası beyan)",
                     ["capljina", "siroki brijeg", "posusje", "grude", "ljubuski", "livno", "tomislavgrad", "kiseljak", "vitez",
                      "busovaca", "kresevo", "neum", "prozor", "stolac", "citluk"]),
}
S = []
for hedef, (tarih, oneri, adlar) in LISTE.items():
    for y in Y:
        if not kutu(y, 42.3, 46.6, 13.4, 19.8):
            continue
        k = kok(y["ad"])
        if any(k == a or k.startswith(a + " ") for a in adlar) and sahip(y, tarih) != hedef:
            S.append(satir(y, donemler(y, "1991-06-01", "1998-01-16"), oneri, "1992-04-06" if hedef == "bosna-sirp-cumhuriyeti" else
                           ("1991-12-19" if hedef == "sirp-krajina-cumhuriyeti" else "1991-11-18"), [hedef],
                           "KAYNAK-GEREK (ad listesi bilinen çekirdek; şehir günleri)"))
kova("C", "1990'lar: RS / RSK / Herzeg-Bosna dönemi yok", "KAYNAK-GEREK (ad listesi + günler); boşluk VERİ ÖLÇÜMÜ",
     "Bilinen RS/RSK/HB çekirdek şehirleri (ad listesi) 1993-06-01'de beklenen kimlikte değil. Liste bilgiye dayanır, kaynakla daraltılmalı.",
     S, "ENKLAV-1103 E079, E081, E090; ENKLAV-1104 (yok)")

# ================================================================================================
# D — Habsburg üç kimlik (+ 'avusturya' takma adı s: içinde)
# ================================================================================================
S, say = [], collections.Counter()
for y in Y:
    for p in y.get("s") or []:
        if p.get("d") in ("avusturya", "habsburg", "macaristan-habsburg"):
            say[p.get("d")] += 1
for i, ac in (("habsburg (+ harita: 'avusturya')", "Avusturya arşidüklüğü / Cisleithania"),
              ("macaristan-habsburg", "Macar tacı (Hırvatistan-Slavonya, Erdel, Oltenya 1718-39 dahil)")):
    S.append(dict(ad=i, yer="data/devletler.js", simdi="s: dönemi: %s" % dict(say), oneri=ac, kirilma=None, guven="EMRE KARARI",
                  kronoloji="—"))
kova("D", "Habsburg: aynı hükümdarın iki tacı ayrı kimlik", "MODEL KARARI (Emre) · MOTOR/EVREN",
     "s: dönemlerinde %s. 'avusturya' 'habsburg' künyesinin harita: anahtarı (denetle id ∪ harita okur — ihlal değil). Kopukluk "
     "habsburg ile macaristan-habsburg'un yan yana boyanmasından: eksklav evreninde aynı hükümdar bitişik sayılsın mı, ya da "
     "Oltenya (K280) gibi tutarsız noktalar tek kimliğe mi alınsın." % dict(say), S,
     "ENKLAV-1103 K080; ENKLAV-1104 K101, K156, K157, K167, K180, K280", motor=True)

# ================================================================================================
# E — çatı kimlikler
# ================================================================================================
CATI = {"racput": "Racput devletleri (Mevar, Mârvâr, Amber, Bikaner, Kutch, Cûnâgadh…)",
        "nayak-devletleri": "Nâyak beylikleri (Madurai, Tancûr, Cinci, Keladi)",
        "endulus-tavaif": "Tavâif-i mülûk", "svahili-sehirleri": "Svahili şehir devletleri",
        "dogu-sumatra-sultanliklari": "Doğu Sumatra sultanlıkları", "maya-sehir-devletleri": "Maya şehir devletleri",
        "nahua-sehir-devletleri": "Nahua şehir devletleri", "itilaf-emaneti": "Müttefik emanet bölgeleri (Danzig, Memel, plebisit, Doğu Galiçya)"}
S = []
for i, aciklama in CATI.items():
    n = sum(1 for y in Y for p in (y.get("s") or []) if p.get("d") == i)
    S.append(dict(ad=i, yer="data/devletler.js", simdi="%d s: dönemi" % n, oneri=aciklama, kirilma=None, guven="EMRE KARARI",
                  kronoloji="—"))
n = sum(1 for y in Y for p in (y.get("s") or []) if p.get("d") == "almanya" and p["f"] < "1806-08-06")
S.append(dict(ad="almanya (962-1806 Kutsal Roma)", yer="data/devletler.js", simdi="%d s: dönemi 1806 öncesi" % n,
              oneri="İmparatorluk çatısı + üye prenslikler (brixen, salzburg, tirol, prusya…) yan yana", kirilma=None, guven="EMRE KARARI", kronoloji="—"))
n = sum(1 for y in Y for p in (y.get("s") or []) if p.get("d") in ("kastilya", "leon-kralligi") and "1037-01-01" <= p["f"] < "1230-09-24")
S.append(dict(ad="kastilya / leon-kralligi (1037-1065, 1072-1157, 1230)", yer="data/devletler.js", simdi="%d s: dönemi" % n,
              oneri="Kişisel birlik dönemlerinde aynı hükümdar iki kimlikle", kirilma=None, guven="EMRE KARARI", kronoloji="—"))
kova("E", "Çatı kimlikler: ayrı devletler tek kimlik / aynı hükümdar iki kimlik", "MODEL KARARI (Emre)",
     "Her satır bir kimlik; karar: (1) ayrı künyelere böl, (2) eksklav evreninden beyanla çıkar, (3) olduğu gibi bırak.", S,
     "ENKLAV-1104 K104, K109, K113, K118, K122, K147, K170, K187, K229, K261, K277, K285, K295, K296, K303, K329, K347, K391, K395", motor=True)

# ================================================================================================
# F — hayalet İlhanlı (Ebû Saîd 1335-11-30 sonrası)
# ================================================================================================
S = []
for y in Y:
    for p in y.get("s") or []:
        if p.get("d") == "ilhanli" and p["t"] > "1335-12-01":
            mazenderan = kutu(y, 35.5, 37.5, 50.0, 56.5)
            S.append(satir(y, "s:ilhanli %s→%s" % (p["f"], p["t"]),
                           ("Togay Timur'un Mâzenderan-Cürcân hanlığı (1353-12-13'e dek, TDV Serbedârîler) — bırakılabilir"
                            if mazenderan else "ilhanli t → 1335-11-30 (Ebû Saîd'in ölümü), sonrası halef (Celâyirli / Çobanoğulları / "
                            "Eretna / Dulkadir / İncû / Muzafferî / Lur atabeyleri) kaynakla"),
                           "1335-11-30", ["celayirli", "cobanogullari", "eretna"], "OLCUM (dönem) · KAYNAK-GEREK (halef)"))
kova("F", "Hayalet İlhanlı: 1335 sonrası 'ilhanli'", "VERİ ÖLÇÜMÜ; halef KAYNAK-GEREK",
     "İlhanlı devleti Ebû Saîd'in ölümüyle (1335-11-30) dağıldı. ⚠️ DÜZELTİLDİ — ayrıntı ILHANLI.md: TDV 1335-1353'ü kukla "
     "İlhanlar dönemi sayar; 151 noktanın 81'i KORU-BEYAN (ic_not), 58'i DUZELT (Doğu Anadolu, Luristan, Elbistan, Horasan ardılı), "
     "12'si KAYNAK-GEREK. Bu kovanın satırlarını değil ILHANLI.md'yi uygula.",
     S, "ENKLAV-1104 K230, K310, K335, K341")

# ================================================================================================
# G — kalacuri-tripuri hayaleti
# ================================================================================================
S = []
for y in Y:
    for p in y.get("s") or []:
        if p.get("d") == "kalacuri-tripuri" and p["t"] > "1213-01-01":
            S.append(satir(y, "s:kalacuri-tripuri %s→%s" % (p["f"], p["t"]),
                           "kalacuri-tripuri t → 13. yy başı (künyede t YOK; Britannica 'Kalachuri dynasty' kaynakla); sonrası gond/bundela/"
                           "maratha kaynakla", None, [], "OLCUM (dönem) · KAYNAK-GEREK (bitiş)"))
kova("G", "kalacuri-tripuri: 13. yy sonrası hayalet", "VERİ ÖLÇÜMÜ; bitiş KAYNAK-GEREK",
     "Künye 'kalacuri-tripuri' t alanı boş; Tripuri Kalaçurileri 12-13. yüzyılda sona erdi.", S, "ENKLAV-1104 K188, K189")

# ================================================================================================
# H — Osmanlı d: TBMM / Mondros sonrası
# ================================================================================================
S = []
for y in Y:
    if "lat" not in y:
        continue
    for p in y.get("d") or []:
        if p["t"] <= "1920-04-23":
            continue
        anadolu = kutu(y, 35.8, 42.2, 26.0, 44.9)
        istanbul = kutu(y, 40.0, 42.1, 26.0, 30.0)
        if istanbul:
            continue  # İstanbul hükümeti 1922-11'e dek — ayrı
        isgal = [q for q in (y.get("s") or []) if "1912-01-01" <= q["f"] <= "1923-10-29"
                 and q.get("d") in ("italya", "yunanistan", "oniki-ada-italyan", "ingiltere", "fransa-cumhuriyet", "fransiz-suriye-mandasi")]
        if isgal:
            S.append(satir(y, donemler(y, "1911-01-01", "1923-10-30", ("d", "s")),
                           "d: hukukî bitişe (Lozan 1923-07-24 vb.) dek uzatılmış; fiilî işgal/ilhak günü (Ege adaları 1912, Suriye-Filistin "
                           "1917-18) → d t ve işgal s: f oraya çekilsin, hukukî devir ic_not'ta — günler kaynakla (TDV ada maddeleri)",
                           None, [], "OLCUM · KAYNAK-GEREK (işgal günü)"))
        elif anadolu:
            S.append(satir(y, donemler(y, "1918-10-30", "1923-10-30", ("d", "s")),
                           "d t → 1920-04-23; s: tbmm-turkiye 1920-04-23 → 1923-10-29 (işgal bölgeleri ayrıca)", "1920-04-23",
                           ["tbmm-turkiye"], "OLCUM"))
        else:
            S.append(satir(y, donemler(y, "1917-01-01", "1923-10-30", ("d", "s")),
                           "Anadolu dışı: d t → işgal/Mondros günü (1917-1918, şehir günüyle, kaynakla)", None, [], "OLCUM · KAYNAK-GEREK (gün)"))
kova("H", "Osmanlı d: 1920-04-23 sonrası (TBMM kesimi / Anadolu dışı)", "VERİ ÖLÇÜMÜ",
     "İstanbul-Trakya kutusu dışında d: dönemi 1920-04-23'ten sonra biten noktalar.", S, "ENKLAV-1103 E042 (Silvan), Harran, Sart, Tiberya")

# ================================================================================================
# I — bölge/ülke adlı noktalar ve o devirde olmayan şehirler
# ================================================================================================
BOLGE_RE = re.compile(r"(bozkır|havzası|eteği|çölü|kumulları|platosu|bölgesi|ovası|^Beyan |^Karpat havzası|^Dacia$|^Tayland$|^Litvanya$|"
                      r"^Macaristan$|^Gürcistan$|^Almanya$|^Hicaz$|^Ürdün$|^Endülüs$|^Luristan$|^Cibâl$|^Media$|^Tihâme$)")
S = []
for y in Y:
    if BOLGE_RE.search(y["ad"]) and (y.get("s") or y.get("d")):
        n = len(y.get("s") or []) + len(y.get("d") or [])
        S.append(satir(y, "%d dönem; ilk %s" % (n, (y.get("s") or y.get("d"))[0]["f"]),
                       "şehir tanığı değil: kaldır ya da gerçek yerleşimle değiştir (Değişmez 3)", None, [], "OLCUM"))
YOK_DEVIR = {"Borisoglebsk": "1698", "Uralsk (Yayık)": "1613", "Petrovsk (Saratov)": "1698", "Ukek (Uvek)": "14. yy sonu harap (bit)",
             "Lokoca (Lokoja)": "1857-1860", "Arba Minç": "20. yy", "Penza": "1663", "Yelisavetgrad (Aziz Yelizaveta Kalesi)": "1754",
             "Novomirgorod": "1752", "Saratov": "1590", "Evrengâbâd": "1610", "Melun": "—", "Klosterneuburg": "—"}
for y in Y:
    if y["ad"] in YOK_DEVIR:
        ilk = (y.get("s") or y.get("d") or [{"f": "—"}])[0]["f"]
        S.append(satir(y, "kur=%s bit=%s; ilk dönem %s" % (y.get("kur"), y.get("bit"), ilk),
                       "kur: %s (kaynakla); öncesi dönemler kırpılsın, toprak komşu peteklere (merdiven ④)" % YOK_DEVIR[y["ad"]],
                       None, [], "KAYNAK-GEREK (kuruluş yılı)"))
kova("I", "Bölge/ülke adlı noktalar + o devirde olmayan şehirler", "VERİ ÖLÇÜMÜ (ad deseni); kuruluş yılları KAYNAK-GEREK",
     "Ad deseni bölge/ülke adı olan ve dönem taşıyan noktalar; hükümlerde 'o devirde yoktu' denen şehirler.", S,
     "ENKLAV-1103 Melun/Klosterneuburg; ENKLAV-1104 K131, K132, K137, K138, K139, K140, K152, K153, K204, K210, K219, K234, K298")

# ================================================================================================
# J — 0 noktalı parçalar
# ================================================================================================
S = []
for dosya in ("ENKLAV-1103/adaylar.json", "ENKLAV-1104/aday2.json", "ENKLAV-1104/aday3.json", "ENKLAV-1104/aday4.json",
              "ENKLAV-1104/aday5.json", "ENKLAV-1104/aday6.json", "ENKLAV-1104/aday7.json", "ENKLAV-1104/aday8.json", "ENKLAV-1104/aday9.json"):
    yol = os.path.join(KOK, "denetim", dosya)
    if not os.path.exists(yol):
        continue
    for a in json.load(open(yol, encoding="utf-8")):
        if not a.get("yerlesimler"):
            S.append(dict(ad="%s %s" % (a["no"], a["devlet"]), yer="denetim/%s" % dosya, lat=a["nokta"][0], lon=a["nokta"][1],
                          simdi="%s → %s · %d km² · en büyük kesit %s" % (a["f"][:10], a["t"][:10], a["alan_max"], a.get("buyuk_gun")),
                          oneri="Parçayı üreten emilme bölgesini ölç (bolgeler.js / *_parca*.js, nokta koordinatı); tanık nokta ekle",
                          kirilma=None, guven="OLCUM", kronoloji="—"))
kova("J", "0 noktalı parçalar (noktasız emilme)", "VERİ ÖLÇÜMÜ",
     "Koşu 32'de içinde hiçbir yerleşim noktası olmayan kopuk parçalar; alan bölge poligonu/emilmeden.", S)

# ================================================================================================
# L — ek veri kuralları (Konfedere, Kuzey Bölgesi, Malaya 1942)
# ================================================================================================
S = []
for y in Y:
    guney = (kutu(y, 25.0, 36.6, -106.6, -75.4) or kutu(y, 36.5, 39.0, -78.0, -75.2)) \
        and not kutu(y, 31.3, 37.1, -109.1, -103.0) and not kutu(y, 33.6, 37.1, -103.0, -94.4)  # New Mexico, Kızılderili Bölgesi
    if guney and sahip(y, "1863-06-01") == "abd":
        S.append(satir(y, donemler(y, "1860-12-20", "1865-06-01"),
                       "ayrılış günü (eyaletine göre, 1860-12-20 SC … 1861-06-08 TN) → 1865 konfedere-devletler; Kentucky/Missouri/Batı "
                       "Virginia/Kızılderili Bölgesi hariç — kutu kaba, eyalet eyalet ayıkla", "1861-02-08", ["konfedere-devletler"],
                       "OLCUM (boşluk) · KAYNAK-GEREK (eyalet günleri)"))
kova("L1", "Konfedere eyaletler 1861-1865 'abd'", "VERİ ÖLÇÜMÜ (kaba kutu)", "Güney kutusunda 1863-06-01'de sahibi 'abd' olan noktalar.", S,
     "ENKLAV-1104 K248")
S = []
for y in Y:
    if kutu(y, -26.0, -10.9, 129.0, 138.0):
        for p in y.get("s") or []:
            if p.get("d") == "ingiltere" and p["f"] < "1911-01-01" and p["t"] > "1901-01-01":
                S.append(satir(y, "s:ingiltere %s→%s" % (p["f"], p["t"]), "ingiltere t → 1901-01-01 → avustralya (Güney Avustralya idaresi; "
                               "1911-01-01 Federal devir ic_not)", "1901-01-01", ["avustralya"], "OLCUM"))
kova("L2", "Kuzey Bölgesi 1901-1911 'ingiltere'", "VERİ ÖLÇÜMÜ", "Kuzey Bölgesi kutusunda 1901-1911'e değen 'ingiltere' dönemleri.", S,
     "ENKLAV-1104 K182, K272")
S = []
for y in Y:
    for p in y.get("s") or []:
        if p.get("d") in ("fed-malay-devletleri", "malay-devletleri", "ingiliz-malaya") and p["f"] < "1945-01-01" and p["t"] > "1942-03-01":
            S.append(satir(y, "s:%s %s→%s" % (p["d"], p["f"], p["t"]), "1941-12-08 → 1942-02-15 işgal ilerleyişi (şehir günüyle) → 1945-09-02 "
                           "meiji-japonya", "1942-02-15", ["meiji-japonya"], "OLCUM (boşluk) · KAYNAK-GEREK (günler)"))
kova("L3", "Malaya 1942-1945 Japon işgali yazılmamış", "VERİ ÖLÇÜMÜ", "FMS kimliği işgal boyunca süren noktalar.", S, "ENKLAV-1104 K286")

# ================================================================================================
# N — ENKLAV-1104 K101-K500'den çıkan ek veri kuralları
# ================================================================================================
def kova_kural(kod, ad, kutusu, tarih, eski, oneri, kirilma, yeni, hukumler, dayanak="VERİ ÖLÇÜMÜ (boşluk); günler KAYNAK-GEREK"):
    S = []
    for y in Y:
        if "lat" in y and kutu(y, *kutusu) and sahip(y, tarih) in eski:
            S.append(satir(y, donemler(y, tarih, tarih[:4] + "-12-31"), oneri, kirilma, yeni, "OLCUM (boşluk) · KAYNAK-GEREK (günler)"))
    kova(kod, ad, dayanak, "%s kutusunda %s günü sahibi %s olan noktalar." % (kutusu, tarih, "/".join(eski)), S, hukumler)


kova_kural("N1", "Kuzey İtalya 1943-1945 'italya' (Salò / Alman işgali yok)", (44.0, 47.2, 6.6, 14.6), "1944-06-01", ("italya",),
           "1943-09-23 → 1945-04-25/28 salo-cumhuriyeti — şehir şehir kurtuluş günleri kaynakla", "1943-09-23", ["salo-cumhuriyeti"],
           "ENKLAV-1104 K406")


def reich_bolgesi(s):
    """Treccani: Trentino, Alto Adige, Belluno (Alpenvorland) ile Friuli, Venezia Giulia, İstria RSI dışı, fiilen Reich'a bağlı."""
    la, lo = s["lat"], s["lon"]
    alpenvorland = 45.8 <= la <= 47.2 and 10.4 <= lo <= 12.9
    kustenland = 44.8 <= la <= 46.7 and 12.3 <= lo <= 14.6
    return alpenvorland or kustenland


_n1 = [k for k in KOVALAR if k["kod"] == "N1"][0]
_ayir = [s for s in _n1["satirlar"] if reich_bolgesi(s)]
_n1["satirlar"] = [s for s in _n1["satirlar"] if not reich_bolgesi(s)]
_n1["sayi"] = len(_n1["satirlar"])
for s in _ayir:
    s["oneri"] = ("1943-09-08 sonrası Alman denetimi → Alpenvorland (Bolzano, Trento, Belluno) / Adriatisches Küstenland (Friuli, Venezia "
                  "Giulia, İstria) — almanya (Reich operasyon bölgesi), RSI değil; bitiş Belluno 1945-05-01 (Treccani); Küstenland günleri "
                  "KAYNAK-GEREK")
kova("N1b", "Alpenvorland / Adriatisches Küstenland 1943-1945 (Reich, RSI dışı)", "KAYNAKLI (Treccani) + günler KAYNAK-GEREK",
     "N1 kutusundan ayrılan, Treccani'ye göre RSI dışında kalıp fiilen Reich'a bağlanan bölgelerdeki noktalar.", _ayir, "ENKLAV-1104 K406")
kova_kural("N2", "Kurland-Litvanya 1915-1918 Rus (Ober Ost işgali yok)", (53.9, 57.9, 20.9, 26.9), "1916-06-01",
           ("rusya", "rusya-gecici-hukumet"), "1915 yaz taarruzu (şehrin düşüş günü) → 1918-11 almanya (Ober Ost); Riga 1917-09-03 — kaynakla",
           "1915-08-01", ["almanya"], "ENKLAV-1104 K447, K448")
S = []
for y in Y:
    for p in y.get("s") or []:
        if p.get("d") == "kosova-golge-cumhuriyeti":
            S.append(satir(y, "s:kosova-golge-cumhuriyeti %s→%s" % (p["f"], p["t"]),
                           "Gölge cumhuriyet toprak denetimi değildi: FRY (yugoslavya-federal/sirbistan-karadag) 1999-06-10'a dek; "
                           "gölge cumhuriyet ic_not/beyan — kaynakla", "1999-06-10", ["kosova"], "KAYNAK-GEREK (model)"))
kova("N3", "Kosova gölge cumhuriyeti toprak sahibi boyalı", "MODEL + KAYNAK-GEREK",
     "s: dönemi 'kosova-golge-cumhuriyeti' olan noktalar.", S, "ENKLAV-1104 K449")
S = []
for y in Y:
    for p in y.get("s") or []:
        if p.get("d") == "napoli" and p["f"] < "1282-03-30":
            S.append(satir(y, "s:napoli %s→%s" % (p["f"], p["t"]),
                           "1282-03-30 (Sicilya Akşam Duası) öncesi sicilya-kralligi; napoli f → 1282-03-30", "1282-03-30",
                           ["napoli", "sicilya-kralligi"], "OLCUM"))
kova("N4", "Napoli kimliği 1282 öncesine taşmış", "VERİ ÖLÇÜMÜ", "s: dönemi 'napoli' olup 1282-03-30'dan önce başlayan noktalar.", S,
     "ENKLAV-1104 K450")
kova_kural("N5", "Güney Hollanda (Belçika) 1813-1814 'hollanda'", (49.4, 51.5, 2.5, 6.4), "1814-02-01", ("hollanda",),
           "1813-12 → 1815-03-16 Müttefik askerî idaresi (beyan) → hollanda (Birleşik Krallık) — kaynakla", "1815-03-16", ["hollanda"],
           "ENKLAV-1104 K267")
kova_kural("N6", "Slovakya 1919 'macaristan-naiplik' (Çekoslovak işgali yok)", (47.7, 49.6, 16.8, 22.6), "1919-09-01",
           ("macaristan-naiplik", "macaristan-sovyet", "macaristan-halk-cumhuriyeti"),
           "1918-12 / 1919-01 Çekoslovak askerî işgali (şehir günüyle) → cekoslovakya; Trianon 1920-06-04 ic_not", "1919-01-01",
           ["cekoslovakya"], "ENKLAV-1104 K134")
# K501-K600'den (ENKLAV6, 4 Kasım 2026)
kova_kural("N7", "Tirol 1805-1810 'almanya' çatısı (Bavyera yazılmamış)", (46.6, 47.8, 10.1, 13.0), "1807-06-01", ("almanya",),
           "1805-12-26 (Pressburg) → bavyera; Güney Tirol 1810-02-28 → italya-napolyon, Doğu Tirol 1809-10-14 → İlirya — kaynakla",
           "1805-12-26", ["bavyera"], "ENKLAV-1104 K509, K516, K598")
kova_kural("N8", "Lombardiya 1796-1799 Cisalpin dönemi yok", (44.9, 46.3, 8.4, 10.7), "1798-06-01",
           ("avusturya", "milano-dukaligi", "ispanya"),
           "1796-05-15 (Bonaparte Milano'da) → fransa-cumhuriyet, 1797-07-09 → italya-napolyon, 1799-04-28 (Suvorov) → avusturya — kaynakla",
           "1796-05-15", ["fransa-cumhuriyet", "italya-napolyon"], "ENKLAV-1104 K549, K594")
kova_kural("N9", "Dubrovnik doğrudan 'venedik'/'macaristan' (özerk cumhuriyet, haraç bağı)", (42.6, 43.0, 17.6, 18.3), "1400-01-01",
           ("venedik", "macaristan"),
           "d: dubrovnik-cumhuriyeti; v: venedik (1205-1358), macaristan (1358-1458), OSMANLI (1458 sonrası) — künye ve günler kaynakla",
           "1358-02-18", ["dubrovnik-cumhuriyeti"], "ENKLAV-1104 K557, K558")
kova_kural("N10", "Doğu Anadolu 1920-1923 'OSMANLI' (İstanbul) — TBMM idaresi yazılmamış", (37.5, 41.5, 38.5, 44.8), "1921-06-01",
           ("OSMANLI",),
           "1920-04-23 → tbmm-turkiye (bölge bölge TBMM idaresine giriş günü kaynakla; işgal altındaki yerler ayrı)", "1920-04-23",
           ["tbmm-turkiye"], "ENKLAV-1104 K536")
# K601-K700'den (ENKLAV7, 4 Kasım 2026)
kova_kural("N11", "Bosna-Dalmaçya 1918-11 SHS Devleti yazılmamış", (42.4, 45.9, 13.5, 19.7), "1918-11-20",
           ("sirbistan-kralligi", "avusturya", "macaristan-habsburg"),
           "1918-10-29 → yugoslavya (Sloven-Hırvat-Sırp Devleti), 1918-12-01 Krallık; İtalyan işgal bölgesi (Londra antlaşması hattı) ayrı — kaynakla",
           "1918-10-29", ["yugoslavya"], "ENKLAV-1104 K625, K644, K655")
# K701-K758'den (ENKLAV8)
kova_kural("N12", "Batı Trakya 1920 Mayıs 'bulgaristan-kralligi' (Neuilly sonrası)", (40.8, 41.7, 24.3, 26.7), "1920-05-20",
           ("bulgaristan-kralligi",),
           "1919-10-15 Fransız (İtilâf) işgali (beyan) → 1920-05-22 yunanistan (TDV «Batı Trakya»)", "1920-05-22", ["yunanistan"],
           "ENKLAV-1104 K747, K756")

# ================================================================================================
# M — tâbi devlet (motor sorusu) — hüküm listesi
# ================================================================================================
S = []
for dosya in ("ENKLAV-1103/hukumler.json", "ENKLAV-1104/hukumler2.json", "ENKLAV-1104/hukumler3.json", "ENKLAV-1104/hukumler4.json",
              "ENKLAV-1104/hukumler5.json", "ENKLAV-1104/hukumler6.json", "ENKLAV-1104/hukumler7.json", "ENKLAV-1104/hukumler8.json", "ENKLAV-1104/hukumler9.json"):
    yol = os.path.join(KOK, "denetim", dosya)
    if not os.path.exists(yol):
        continue
    for no, h in json.load(open(yol, encoding="utf-8")).items():
        if not no.startswith("_") and h["kova"] == "YAPAY-m":
            S.append(dict(ad=no, yer="denetim/%s" % dosya, simdi=h["gerekce"][:160], oneri=h["duzeltme"][:160], kirilma=None,
                          guven="MOTOR SORUSU", kronoloji="—"))
kova("M", "Tâbi devlet yabancı sayılıyor / motor değme payı (YAPAY-m)", "MOTOR SORUSU (HAVVA/Emre)",
     "Kopukluk tâbinin komşu sayılmasından ya da < 1 km koridordan; veri düzeltmesi değil, evren/motor kararı.", S, motor=True)

json.dump(dict(olcum=dict(tarih=datetime.date.today().isoformat(), agac="lab-1104-kovalar", yerlesim=len(Y), madde=len(O)),
               kovalar=KOVALAR), open(os.path.join(BURA, "kovalar.json"), "w", encoding="utf-8", newline="\n"),
          ensure_ascii=False, indent=1)
print("toplam satır", sum(k["sayi"] for k in KOVALAR))
