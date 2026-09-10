# -*- coding: utf-8 -*-
"""ARAC-SICIL-KUME-0910 — 500 hukumlu maddeyi KARAR kumelerine baglar.

Sicil MADDE basina degil KARAR basina tutulur. Bu alet her hukumlu maddeyi
tek bir karar kumesine baglar ve ARTIK (hicbir kurala uymayan) kumeyi
ACIKCA raporlar — sessizce elemez (D149 · D015).

Yontem:
  ① SIRALI kural tablosu, ILK ESLESEN kazanir (kural sirasi = oncelik)
  ② elle atama tablosu (ELLE) kurallari EZER — artik kovasi bosaltilir
  ③ IKI GECIS — once SIKAYET metni (baslik+metin), sonra CEVAP metni (not).
     🔴 Sebep OLCULDU: tek gecis, "tdv" anahtarini 92 maddede esletti —
     cunku CEVAP metni her seyi aniyor. Sikayeti kumelemek icin EMRE'NIN
     KENDI SOZU esastir; cevap metni yalnizca ARTIK icin yedektir.
     (D159 — alt-dizgi aramasi bir adi baska bir baglamin icinde bulur)
  ④ Turkce normallestirme ARAC-NORMAL-0903 ile (lower() KACIRIR · D064)

Cikti: denetim/OLCUM-SICIL-KUME-0910.json  (madde -> kume)
Kullanim: py denetim/ARAC-SICIL-KUME-0910.py [--ornek KUME_ID]
"""
import json, io, os, re, sys, glob, collections

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__))))
from importlib import machinery
_n = machinery.SourceFileLoader(
    "arac_normal",
    os.path.join(os.path.dirname(os.path.abspath(__file__)), "ARAC-NORMAL-0903.py")
).load_module()
norm = _n.norm

KOK = r"C:\Users\emrem\OneDrive\Desktop\ClaudEmre\kutu\giden"
CIKTI = "denetim/OLCUM-SICIL-KUME-0910.json"
ACIK_HUKUM = {"sirada", "olculecek", "kosu-bekliyor"}

# ── KURAL TABLOSU — SIRALI, ilk eslesen kazanir ─────────────────────────
# (kume_id, baslik, [normallestirilmis anahtarlar])
KURALLAR = [
    ("K01-EK-OKUMA", "Ek okuma · merak · tartisma · magazin maddeleri", [
        "ek okuma", "ekokuma", "merak edilen", "merak konusu", "merak butonu",
        "merak ek", "magazin", "tartisma", "sok haber", "komik", "hikaye susl",
        "ovgu ve", "merak vesaire", "merak filan", "susle", "donatalim",
        "zenginlestir", "bol bol ek"]),
    ("K02-ANTLASMA-METNI", "Antlasma metinleri maddenin icine", [
        "anlasma metni", "antlasma metni", "anlasma iceren", "antlasma iceren"]),
    ("K03-KUTU-ALTYAPI", "Kutu · tespih · paket altyapisi (Atlas disi)", [
        "mesaj kutusu", "tespih", "bekleyenler kutusu", "onay bekleyn",
        "program yapisi penceresi", "kaydede filan", "ek 4"]),
    ("K04-KAYNAK-YONTEM", "Kaynak politikasi — TDV birinci kaynak", [
        "birinci kaynak", "kullandigimiz en birinci", "tdv"]),
    ("K05-ISGAL-TARALI", "Tarali alan = isgal ortusu, antlasma alani DEGIL", [
        "tarali"]),
    ("K06-UST-CUBUK", "Ust cubuk metni ile kronoloji metni ayrisiyor", [
        "ust cubuk", "tepedeki", "tepede baslik", "tepede surekli", "cubuktaki",
        "cubugunda", "baslik damgasi", "haritanin tepe"]),
    ("K07-AYNI-GUN", "Ayni gune iki madde — panel ile harita ayrisiyor", [
        "ayni tarih", "ayni gun", "ayni anad", "ayni anda gosteril",
        "iki madde bir", "1 2 3 seklinde numaralan", "bir madde daha var",
        "bir sonraki maddeye tiklayinca", "sirayla kronolojik tarihte"]),
    ("K08-UCUS-ODAK", "Ucus / odak animasyonu ve ayarlari", [
        "ucus", "ucuh", "odagin ayarlanmasi", "zoom out", "yavas yavas olay",
        "haritanin genislik gosterimi", "odakda bakilan"]),
    ("K09-HIZ-ANIMASYON", "Oynatma hizi · goz kirpma · vurgu animasyonu · emoji", [
        "goz kirpma", "yanip son", "yansin sonsun", "oynatma hiz", "hizlarina",
        "emoji", "isaret yanip", "algida vurgu"]),
    ("K10-SEFER-GUZERGAH", "Sefer guzergahi — kesikli cizgi gosterimi", [
        "guzergah", "kesikli", "kesik k", "cizgi ile b", "cizgi ile goster"]),
    ("K11-SEMBOL", "Sembol sozlugu — baskent yildizi, merkez, simgeler", [
        "yildiz sekl", "yildiz olsun", "baskent", "sembol", "simge", "rozet",
        "sari gosterim", "ates simgesi", "yuvarlak isaret"]),
    ("K23-DUNYA-OLAYLARI", "Dunya olaylari kronolojide yer almali", [
        "fransiz devrimi", "fransiz ihtilali", "uluslararasi olaylar",
        "tum dunyayi etkileyen", "dunya tarihi", "onemli tarihi uluslararasi"]),
    ("K24-DEGISMEZ2", "Harita degisiyor ama kronolojide maddesi yok (Degismez 2)", [
        "kronolojide yok", "kronolojide maddesi yok", "kronoloji maddesi yok",
        "kronolojide bahsedilmiyor", "kronolojide gorunmuyor", "maddesi yok",
        "alakasiz bir madde", "iki madde sonra", "haritada katilmiyor",
        "kronolojide olmayan", "kronolojide anilmi", "kronolojide gormedi",
        "ilhak edildigi gorunmuyor", "dusmus gorunmuyor"]),
    ("K25-MADDE-METNI", "Madde basligi/metni eksik — o gun kirilan yerler anilsin", [
        "basliginda", "baslikda", "detay metin", "detayda var", "adiyla sayil",
        "bahsedilebilir", "anilabilir", "anilsin", "belirtelim", "listesini",
        "metnine ek", "icerigine"]),
    ("K12-OLAY-YERI", "Olay mahalli haritada isaretlenmemis (yer_id eksigi)", [
        "haritada isaret", "isaretlenmemis", "isaretlenemmis", "isaretli degil",
        "haritada yeri", "yeri gosterilmiyor", "haritada gosterilmiyor",
        "haritada gorunmuyor", "haritada gornumuyor", "olay mahali",
        "yeri belli degil", "haritada belli degil", "haritada yeri yok",
        "yeri harita", "gosterim yeri yok", "haritada isleniyor",
        "harita gosterimi yapilmamis", "olay yeri"]),
    ("K13-PANEL-ARAYUZ", "Panel · buton · menu · sutun · dizin penceresi", [
        "buton", "menu", "panel", "sutun", "tam ekran", "index", "combobox",
        "ayarlardan", "suzgec", "pencere", "hakkinda", "dar genis",
        "arayuz icin oneri", "kapatilabilir"]),
    # 🔴 SIRA = OZGULLUK. Asagidaki dort kume K14-K17'den ONCE gelir: "iki parca
    #    gorunuyor" bir ENKLAV sikayetidir, "iran ... siniri" bir KIMLIK ya da
    #    1923 sikayetidir — ve bunlar K16'nin genis "bosluk/aradaki" agina
    #    takiliyordu. 40'lik ilk ornekte dort yanlis atama tam bu sebepten cikti.
    ("K20-SINIR-1923", "1923 kapanis sinirlari", [
        # 🔴 "kalite" ANAHTARI KALDIRILDI ve kume IKINCI GECISTEN cikarildi:
        #    ikinci ornekte iki yanlis atamanin ikisi de buradan geldi — cevap
        #    metinlerinde "kalite" gecen her madde 1923 sanildi.
        "1923", "hatay#", "hatayin#", "sscb", "6. kalite", "1923 haritasi"]),
    ("K21-VASSAL", "Vassal / tabi gosterimi", [
        # 🔴 "tabi" ANAHTARI KALDIRILDI — "TABIKI" ve "tabii" icinde esliyordu;
        #    kelime BASI siniri bunu kesmez, cunku ikisi de kelime basidir.
        "vassal", "voyvoda", "tabiyet", "tabilik", "bagli devlet"]),
    ("K18-ENKLAV", "Enklav / benek gorunumu", [
        "enklav", "benek", "iki parca", "birbirinden kopuk", "birbirinden ayrik",
        "hep ayrik", "iki parcami", "iki ayri parca", "iki parcaya"]),
    ("K19-KIMLIK", "Devlet kimligi — iran/akkoyunlu/hayalet devlet ayrimi", [
        "iran", "akkoyunlu", "karakoyunlu", "safevi", "ilhanli", "celayirli",
        "ahiler", "muzafferi", "marasi", "karkiya", "germiyan", "hanedani"]),
    ("K14-RENK", "Renk sistemi — deniz tonu, ust uste binme, komsu benzerligi", [
        "koyu kirmizi", "deniz mavisi", "deniz ile ayni renk", "deniz rengi",
        "ustuste binmis", "ust uste bin", "renginin ustuste", "renk boyamaalri",
        "renk katmani", "ayni renk gorun", "farkli renkte gorun",
        "rengi birbiri ile", "hafifce pem", "pembe renkli", "mavi yapalim",
        "renginde gorunuyor", "yesil gorunmesi", "yesil renk"]),
    ("K15-BOSLUK-KASITLI", "Bos alan KASITLI — col/bozkir sahipsizlik beyani", [
        "hic mi yerlesim", "hicmi yerlesim", "yerlesim yeri yok",
        "yerlesim yok", "insanmi", "insan mi", "bosluklarin sebebi",
        "bozkir", "sahra", "kimse yasamiyor", "bos muymus", "bos alanlar bos",
        "yasamiyormuymus", "hic mi sehir yok", "baska yerlesim yok",
        "nedenbos", "neden bos"]),
    ("K16-NOKTASIZLIK", "Aradaki toprak boyanmamis / koridor — NOKTASIZLIK", [
        "aradaki toprak", "arasindaki toprak", "aradaki bolge", "aradaki topraklar",
        "boyanmamis", "gorunmeme sebebi", "koridor", "bos gorunen",
        "aradaki bos", "bosluk", "bos bolge", "bos parca", "bos gorunuyor",
        "bos araziyi", "fazladan", "pas mi gecild", "alinmadan"]),
    ("K17-GEOMETRI", "Petek geometrisi artefakti — kiymik, ucgen, cetvel, kopuk", [
        "kiymik", "ucken", "ucgen", "sivri", "cetvel", "kopuk", "bozuk gorun",
        "goruntu bozul", "gorunum bozuk", "tuhaf", "garip gorun", "girinti",
        "boruk gorun", "gorunum hatasi", "gorunum kusuru", "gozu kanatiyor",
        "bozukluk", "bozulmalarin"]),
    ("K22-DOGRULAMA", "Tarihi dogrulama talebi — bu toprak o tarihte kimindi", [
        "teyid et", "teyid ed", "dogrumu", "dogru mu", "kime ait", "kimin topra",
        "gercek sahibi", "hatami", "normal mi", "eminmiyiz", "eminm",
        "gecerlimi", "kontrol et", "bakalim", "sorgulanmali", "gercekten",
        "boyle miymis", "miymis", "acaba"]),
]

# ── IKINCI GECIS IZNI ────────────────────────────────────────────────────
# 🔴 Sikayet metni bos ya da anlamsizsa ("(basliksiz)", "bu nedir ya") CEVAP
#    metnine bakilir — AMA yalnizca KOK SEBEP kumeleri icin. Cunku cevap metni
#    ISTEK cinsinden anahtarlari da tasir ("ek okuma", "tarali", "tdv") ve
#    onlari serbest birakmak 40'lik ornekte dort yanlis atama uretti: dordu de
#    ikinci gecisten geldi. Kok sebep kumeleri cevabin TESHISIDIR, istegi degil.
IKINCI_GECIS = {
    "K12-OLAY-YERI", "K15-BOSLUK-KASITLI", "K16-NOKTASIZLIK", "K17-GEOMETRI",
    "K18-ENKLAV", "K19-KIMLIK", "K24-DEGISMEZ2", "K14-RENK",
}

# ── ELLE ATAMA — kurallarin ezildigi yer (artik kovasi buradan bosalir) ──
# Her satir OKUNARAK atandi (ARAC-SICIL-ARTIK-0910 ile tam metin dokuldu).
# 🔴 Bir maddeyi kurala UYDURMAK icin kural GENISLETILMEDI: genis bir anahtar
#    onlarca dogru atamayi bozar. Tek madde ELLE baglanir ve BURADA GORUNUR.
ELLE = {
    ("parti-0002", "H-0003"): "K17-GEOMETRI",        # gol maskesi (Iznik)
    ("parti-0003", "H-0001"): "K16-NOKTASIZLIK",     # Bogaz karsi kiyisi, 1,54 km
    ("parti-0003", "H-0013"): "K16-NOKTASIZLIK",     # H-0001 ile ayni duzeltme
    ("parti-0003", "H-0010"): "K19-KIMLIK",          # Aydinogullari "hortluyor"
    ("parti-0004", "H-0004"): "K13-PANEL-ARAYUZ",    # Kemal Reis kisi karti
    ("parti-0004", "H-0010"): "K16-NOKTASIZLIK",     # Maveraunnehir 16 nokta
    ("parti-emrelic-0011", "H-0002"): "K16-NOKTASIZLIK",   # Sarkoy/Saroz 4 nokta
    ("parti-emrelic-0019", "H-0027"): "K03-KUTU-ALTYAPI",  # token/limit fotografi
    ("parti-emrelic-0023", "H-0017"): "K12-OLAY-YERI",     # Karlofca kasabasi
    ("parti-emrelic-0024", "H-0006"): "K13-PANEL-ARAYUZ",  # odak + ok tusu
    ("parti-emrelic-0031", "H-0008"): "K12-OLAY-YERI",     # Timur Bagdat yer
    ("parti-emrelic-0033", "H-0002"): "K15-BOSLUK-KASITLI",  # Astarhan
    ("parti-emrelic-0035", "H-0007"): "K05-ISGAL-TARALI",  # Karlofca devir govdesi
    ("parti-emrelic-0035", "H-0060"): "K22-DOGRULAMA",     # Mersin veri hatasi
    ("parti-emrelic-0035", "H-0061"): "K16-NOKTASIZLIK",   # Fetret fazla boyama
    ("parti-emrelic-0035", "H-0067"): "K09-HIZ-ANIMASYON", # Taiz gorsel vurgu (b)
    ("parti-emrelic-0036", "H-0004"): "K16-NOKTASIZLIK",   # sinir ortusmemesi
    ("parti-emrelic-0040", "H-0006"): "K22-DOGRULAMA",     # Canet sinir dibinde
    # ── ikinci gecis daraltilinca acilan 43 kayit (hepsi tam metniyle okundu) ──
    ("parti-0002", "H-0002"): "K11-SEMBOL",            # "Sogut bolgesi" etiketi
    ("parti-0002", "H-0007"): "K13-PANEL-ARAYUZ",      # taslak-rozet metni
    ("parti-0002", "H-0008"): "K11-SEMBOL",            # Edirne yildiz + yuvarlak
    ("parti-0002", "H-0013"): "K22-DOGRULAMA",         # Akresi / Gelibolu
    ("parti-0003", "H-0003"): "K22-DOGRULAMA",         # Karaman Taseli sahili
    ("parti-0003", "H-0017"): "K24-DEGISMEZ2",         # Izvornik ayri madde
    ("parti-0004", "H-0001"): "K13-PANEL-ARAYUZ",      # kisiBul alakasiz kisi
    ("parti-0004", "H-0014"): "K22-DOGRULAMA",         # metinsiz gorsel, bayat
    ("parti-0004", "H-0015"): "K11-SEMBOL",            # padisah portresi tekrari
    ("parti-0006", "H-0003"): "K07-AYNI-GUN",          # ayni tarihli maddeler
    ("parti-0007", "H-0004"): "K01-EK-OKUMA",          # hristiyan tebaa merak
    ("parti-emrelic-0018", "H-0003"): "K22-DOGRULAMA",  # Kircaali kur: tarihi
    ("parti-emrelic-0019", "H-0017"): "K12-OLAY-YERI",  # butun olaylar isaretli mi
    ("parti-emrelic-0019", "H-0020"): "K23-DUNYA-OLAYLARI",  # onem 1-5
    ("parti-emrelic-0019", "H-0026"): "K24-DEGISMEZ2",  # Arnavutluk etiketsiz
    ("parti-emrelic-0019", "H-0043"): "K22-DOGRULAMA",  # Mercidabik uzak topraklar
    ("parti-emrelic-0019", "H-0048"): "K25-MADDE-METNI",  # Beyrut/Palmyra anilsin
    ("parti-emrelic-0019", "H-0057"): "K07-AYNI-GUN",   # Ikarya 3 olay tek gosterim
    ("parti-emrelic-0019", "H-0062"): "K10-SEFER-GUZERGAH",  # sari kesikli
    ("parti-emrelic-0019", "H-0067"): "K24-DEGISMEZ2",  # Fuzuli kaside tarihi
    ("parti-emrelic-0022", "H-0004"): "K22-DOGRULAMA",  # Ege adalari kronolojisi
    ("parti-emrelic-0023", "H-0002"): "K22-DOGRULAMA",  # Parkan / Estergon
    ("parti-emrelic-0023", "H-0004"): "K16-NOKTASIZLIK",  # Solnok komsudan kirmizi
    ("parti-emrelic-0023", "H-0018"): "K05-ISGAL-TARALI",  # Karlofca kayip alanlar
    ("parti-emrelic-0025", "H-0007"): "K22-DOGRULAMA",  # Karesi / Gelibolu
    ("parti-emrelic-0025", "H-0008"): "K22-DOGRULAMA",  # Midilli 1346
    ("parti-emrelic-0030", "H-0012"): "K22-DOGRULAMA",  # Isparta satin alinmasi
    ("parti-emrelic-0030", "H-0016"): "K17-GEOMETRI",   # Tuna'ya yaslanma
    ("parti-emrelic-0031", "H-0020"): "K07-AYNI-GUN",   # uc madde sirayla
    ("parti-emrelic-0032", "H-0006"): "K16-NOKTASIZLIK",  # Kirim 14 nokta
    ("parti-emrelic-0033", "H-0021"): "K17-GEOMETRI",   # Calu/Gat boyama matematigi
    ("parti-emrelic-0034", "H-0017"): "K19-KIMLIK",     # mustakil Gurcistan
    ("parti-emrelic-0035", "H-0002"): "K24-DEGISMEZ2",  # Anabolu kaybi maddesi
    ("parti-emrelic-0035", "H-0018"): "K05-ISGAL-TARALI",  # Eflak boyasiz
    ("parti-emrelic-0035", "H-0028"): "K24-DEGISMEZ2",  # Semendire geri alinisi
    ("parti-emrelic-0035", "H-0046"): "K23-DUNYA-OLAYLARI",  # dunya kronolojisi
    ("parti-emrelic-0035", "H-0050"): "K16-NOKTASIZLIK",  # Fetret parcasi
    ("parti-emrelic-0036", "H-0006"): "K10-SEFER-GUZERGAH",  # Suriye harekati
    ("parti-emrelic-0036", "H-0010"): "K10-SEFER-GUZERGAH",  # Rus donanmasi
    ("parti-emrelic-0036", "H-0011"): "K22-DOGRULAMA",  # Kutahya sonrasi Adana
    ("parti-emrelic-0036", "H-0014"): "K22-DOGRULAMA",  # Ibrail / Rusculk serhi
    ("parti-emrelic-0037", "H-0001"): "K22-DOGRULAMA",  # Besarabya guneyi
    ("parti-emrelic-0037", "H-0004"): "K12-OLAY-YERI",  # olayin yeri isaretlensin
    # "hatay#" sonu kapatilinca acilan iki kayit — ikisi de Cimpe oncesi
    # Avrupa yakasi sikayeti, H-0007/H-0008 ile ayni sinif
    ("parti-emrelic-0025", "H-0006"): "K22-DOGRULAMA",
    ("parti-emrelic-0030", "H-0007"): "K22-DOGRULAMA",
}


# 🔴 KELIME SINIRI — ham alt-dizgi aramasi 40'lik ornekte %27 yanlis atama
#    uretti: "tabi" ANAHTARI "TABIKI"nin icinde, "col" (col) baska kelimelerin
#    icinde eslesiyordu (D159). Anahtar bir KELIME BASI ile baslamali; sonu
#    serbest birakilir cunku Turkce EKLI yazar (bosluk -> boslugun, bosluklar).
_DERLI = {}


def _es(metin, anahtar):
    """Anahtar '#' ile bitiyorsa SONU DA kapatilir (kelime tam bitecek).
    🔴 Gerek oldugu OLCULDU: "hatay" anahtari "bu HATAYI" icinde esliyordu ve
    iki renk sikayetini 1923 SINIRLARI kumesine yaziyordu. Bas siniri bunu
    kesmez — "hatayi" kelimesi de bir kelime BASIDIR."""
    kal = _DERLI.get(anahtar)
    if kal is None:
        son = r"(?![a-z0-9])" if anahtar.endswith("#") else ""
        kal = _DERLI[anahtar] = re.compile(
            r"(?<![a-z0-9])" + re.escape(anahtar.rstrip("#")) + son)
    return bool(kal.search(metin))


def oku(y):
    with io.open(y, encoding="utf-8") as f:
        return json.load(f)


def main():
    kayitlar = []
    for p in sorted(glob.glob(os.path.join(KOK, "parti-*"))):
        ad = os.path.basename(p)
        cy, py_ = os.path.join(p, "CEVAP.json"), os.path.join(p, "PARTI.json")
        if not os.path.exists(cy):
            continue
        cev = oku(cy)
        bas, met = {}, {}
        if os.path.exists(py_):
            for m in oku(py_).get("maddeler", []) or []:
                bas[m.get("no")] = m.get("baslik") or ""
                met[m.get("no")] = m.get("metin") or ""
        for no, m in sorted((cev.get("maddeler") or {}).items()):
            if not isinstance(m, dict) or m.get("hukum") in ACIK_HUKUM:
                continue
            kayitlar.append({
                "paket": ad, "no": no, "hukum": m.get("hukum", ""),
                "delil_commit": (m.get("delil_commit") or "").strip(),
                "delil_atlas": m.get("delil_atlas", ""),
                # 🆕 IZ-YOK DENETIM A/B/C turundan sonra dolacak alanlar.
                #    SIMDIDEN okunuyorlar: alan sematik olarak yoksa BEYAN
                #    SESSIZCE DUSER (D067) — bos string olarak tasinirlar.
                "delil_yer": (m.get("delil_yer") or "").strip(),
                "delil_kim": (m.get("delil_kim") or "").strip(),
                "baslik": (bas.get(no) or "").replace("\n", " ")[:150],
                "_sik": norm(" ".join([bas.get(no, ""), met.get(no, "")])),
                "_cev": norm(m.get("not", "") or ""),
            })

    sayac = collections.Counter()
    artik = []
    for k in kayitlar:
        anahtar = (k["paket"], k["no"])
        if anahtar in ELLE:
            k["kume"], k["nasil"] = ELLE[anahtar], "elle"
        else:
            k["kume"], k["nasil"] = None, None
            for kaynak, etiket in (("_sik", "sikayet"), ("_cev", "cevap")):
                for kid, _b, anahtarlar in KURALLAR:
                    if etiket == "cevap" and kid not in IKINCI_GECIS:
                        continue
                    if any(_es(k[kaynak], a) for a in anahtarlar):
                        k["kume"], k["nasil"] = kid, etiket
                        break
                if k["kume"]:
                    break
            if k["kume"] is None:
                k["kume"], k["nasil"] = "ARTIK", "yok"
                artik.append(k)
        sayac[k["kume"]] += 1

    basliklar = {kid: b for kid, b, _ in KURALLAR}
    print("madde:", len(kayitlar), "| kume:",
          len([x for x in sayac if x != "ARTIK"]), "| ARTIK:", sayac["ARTIK"])
    print()
    for kid, _b, _a in KURALLAR:
        print("%-22s %4d  %s" % (kid, sayac[kid], basliklar[kid]))
    if sayac["ARTIK"]:
        print()
        print("── ARTIK (hicbir kurala uymadi) ──")
        for k in artik:
            print("   %s|%s|%s| %s" % (k["paket"].replace("parti-", ""),
                                       k["no"], k["hukum"], k["baslik"][:95]))

    nasil = collections.Counter(k["nasil"] for k in kayitlar)
    print()
    print("nasil baglandi:", dict(nasil))
    for k in kayitlar:
        del k["_sik"], k["_cev"]
    with io.open(CIKTI, "w", encoding="utf-8") as f:
        json.dump({"olcum_tarihi": "2026-09-10", "madde": len(kayitlar),
                   "kume_basliklari": basliklar,
                   "sayac": dict(sayac), "maddeler": kayitlar},
                  f, ensure_ascii=False, indent=1)

    if "--ornek" in sys.argv:
        hedef = sys.argv[sys.argv.index("--ornek") + 1]
        print()
        print("── ORNEK:", hedef, "──")
        n = 0
        for k in kayitlar:
            if k["kume"] == hedef:
                print("   %s|%s| %s" % (k["paket"].replace("parti-", ""),
                                        k["no"], k["baslik"][:110]))
                n += 1
                if n >= 25:
                    break


if __name__ == "__main__":
    main()
