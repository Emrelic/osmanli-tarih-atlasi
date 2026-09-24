# -*- coding: utf-8 -*-
"""SINIR-D-AMERIKA-0077 — Amerika YOK kayıtlarını belgeye dayanan C'ye YÜKSELTİR.

Çıktı : data/d_sinirlar_amerika.js (tek sahibi SINIR-D-AMERIKA-0077)
Yöntem: denetim/ARAC-D5AM-URET-0916.py DEĞİŞTİRİLMEDEN okunur ve çalıştırılır; yalnız aşağıdaki YUK
        sözlüğündeki kimlikler için `yok()` çağrısı yakalanır ve yerine `ekle(..., "C", ...)` (+ gerekiyorsa
        daraltılmış YOK) yazılır. Sözlük boşken çıktı, 24 Eylül 2026 commit'li dosyayla BİREBİR aynıdır
        (sınav: `--sina`).
Kural  (SINIR-DUNYA-0077 §1): C = antlaşma/hakem kararı hattı TANIMLAR ama koordinat kaba. Geometri
        bugünkü NE 10m çizgisidir (VEKİL); 1923 hattından bilinen büyük sapma olan kesim (kaynakta anılan
        sonraki değişiklik) C'ye ALINMAZ, YOK kutusu olarak kalır. TARTIŞMALI / belgesiz çift YÜKSELTİLMEZ.
        Pencere: C'nin f'i hattı tanımlayan belgenin günüdür; öncesi YOK olarak kalır (ardıl f = öncül t).
Elle düzeltme: `ingiliz-honduras` → `ingiliz-hondurasi` (künye devletler.js'te bu id ile; dosyaya
        elle yapılmış düzeltme, üretici bilmiyordu — burada açıkça yeniden uygulanır).

Kullanım: py denetim/SINIR-D-AMERIKA-0077-yukselt.py [--sina]
"""
import sys, io, os
# stdout'u üretici kendisi sarar (sarmayı burada da yapmak ilk sarmalayıcıyı kapatır)
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(KOK)
SINA = "--sina" in sys.argv

src = io.open("denetim/ARAC-D5AM-URET-0916.py", encoding="utf-8").read()
ESKI_BAS = "// Üretici: denetim/ARAC-D5AM-URET-0916.py — 🔴 ELLE DÜZENLEME, yeniden üret.\n"
if ESKI_BAS not in src:
    raise SystemExit("üretici başlık satırı bulunamadı — üretici değişmiş, önce oku")
YENI_BAS = ("// Üretici: denetim/SINIR-D-AMERIKA-0077-yukselt.py (ARAC-D5AM-URET-0916.py'yi sarar) — 🔴 ELLE DÜZENLEME, yeniden üret.\n"
            "// SINIR-D-AMERIKA-0077 (24 Eyl 2026): belgeli YOK kayıtları C'ye yükseltildi — denetim/SINIR-D-AMERIKA-0077.md\n")
if not SINA:
    src = src.replace(ESKI_BAS, YENI_BAS)
KESIM = "CA, US, MX, GT, BH = "
YAZ = "# ======================= YAZ ======================="
i, j = src.index(KESIM), src.index(YAZ)
ns = {"__name__": "d5am", "__file__": os.path.abspath("denetim/ARAC-D5AM-URET-0916.py")}
exec(compile(src[:i], "ARAC-D5AM-URET-0916.py", "exec"), ns)

box, Point = ns["box"], ns["Point"]
KES_C = "NE 1:10m bugünkü çizgi = 1923 hukukî hattın VEKİLİ; kayma ÖLÇÜLMEDİ"

def disinda(*kutular):
    return lambda c: not any(k.contains(Point(c)) for k in kutular)

def ceviri(ns, id_, a, b, f, kutu, degisti, dayanak, not_, t, hukuki):
    """YUK[id_] → (C kayıtları + kalan YOK'lar). ns değişkenleri üreticinin kendi geometrisidir."""
    E, Y, T = ns["ekle"], ns["_yok0"], ns["T"]
    if id_ == "d1923-ar-cl":
        ac = ns["cizgi"]("ARG-CHL")
        # IBS 101 s.2-3: Palena–California kesimi = 16 ile 17 numaralı direkler arası (Palena ırmağı 71°47'B ·
        # General Paz gölü 71°41'30"B); 1966 kararıyla DEĞİŞTİ. Kutu TAHMİNİ (koordinatlar kaynaktan, enlemler NE).
        PAL = box(-71.95, -43.95, -71.55, -43.50)
        # Laguna del Desierto (1994 kararı) + Güney Patagonya buz sahası (1998 anlaşması; hat 1923'te sahada yoktu).
        # Kaynak OKUNMADI ⇒ kutu geniş tutuldu, TAHMİNİ.
        BUZ = box(-74.00, -50.80, -72.40, -48.70)
        Y(id_ + "-oncesi", a, b, f, kutu, degisti, dayanak,
          "1881 antlaşması hattı 'en yüksek tepeler' ile 'su ayrımı'nı eşitliyordu; 1893 protokolü ve 1896 antlaşması "
          "anlaşmazlığı çözemedi, dört kesim tahkime gitti (IBS 101 s.2) ⇒ 1902 kararına kadar hat tanımsız", t="1902-11-20",
          hukuki="tanımsız (tahkimde)")
        E(id_, a, b, "1902-11-20", "C", ns["parcala"](ac, disinda(PAL, BUZ)),
          [{"ad": "Sınır Antlaşması", "tarih": "1881-01-01", "tur": "antlaşma", "not": "IBS yalnız YIL veriyor; gün BULUNAMADI"},
           {"ad": "Ek protokol", "tarih": "1893-05-01", "tur": "protokol"},
           {"ad": "Antlaşma (tahkim ve Bolivya katkısıyla işaretleme)", "tarih": "1896-04-17", "tur": "antlaşma"},
           {"ad": "VII. Edward hakem kararı ve raporu", "tarih": "1902-11-20", "tur": "hakem kararı"},
           ns["ibs"](101, "Argentina–Chile", "Demarcation pillars were established along the frontier; spaced, however, rather far apart.", "3")],
          {"deger": True, "kaynak": "IBS 101", "not": "Palena–California 9 Ara 1966 kararıyla değişti (kutu dışarıda) · Laguna del Desierto 1994 · buz sahası 1998 (kutu dışarıda)"},
          {"t": None, "not": "1902-1903 direkleri seyrek (IBS 101 s.3); yıl BULUNAMADI"},
          10.0, KES_C + " · Palena ve buz sahası kutuları TAHMİNİ",
          "C: 1902 kararı hattı su ayrımı ve 'zorunlu noktalar'la tanımlar; koordinatlar 'approximate only' (IBS 101 s.3) · "
          "f = 1902 kararı (Puna de Atacama 1899 kararı OKUNMADI — kuzey uç için f ondan önce olamaz, sorun yok)")
        for kid, k, n in (("palena", PAL, "Palena–California: 1902 raporu §22 iki direk arası ~24 mil; 1966 kararı hattı yeniden çizdi"),
                          ("buz-sahasi", BUZ, "Laguna del Desierto (1994) + Güney Patagonya buz sahası (1998): bugünkü çizgi 1923 hattı DEĞİL; kaynak OKUNMADI")):
            Y(id_ + "-DEGISTI-" + kid, a, b, "1902-11-20", k.bounds, {"deger": True, "kaynak": "IBS 101" if kid == "palena" else "—", "not": n},
              [ns["ibs"](101, "Argentina–Chile", "the course of the boundary between the territories of the Parties in the sector between Boundary Posts 16 and 17", "4")] if kid == "palena"
              else [{"ad": "bulunamadı — kaynak okunmadı", "tur": "bulunamadı"}],
              "kutu TAHMİNİ", hukuki="hukuken C, bugünkü çizgi farklı")
        return
    if id_ == "d1923-co-br-kuzey":
        bc, AP = ns["cizgi"]("BRA-COL"), ns["APAPORIS"]
        # IBS 174 s.7: 1907 metni Papuri kaynağından 69°30' meridyenini izletiyordu; 1930–36 komisyonu Taraira
        # kaynağının meridyenine (70°02'37") çekti ⇒ ~60 km kayma. Kesim kutusu TAHMİNİ.
        TAR = box(-70.25, -1.00, -69.35, 0.75)
        E(id_, a, b, f, "C", ns["parcala"](bc, lambda c: c[1] > AP[1] and not TAR.contains(Point(c))), dayanak,
          {"deger": True, "kaynak": "IBS 174", "not": "1930–36 komisyonu 'several adjustments' yaptı, en büyüğü Papuri–Taraira (kutu dışarıda)"},
          {"t": "1930-1936", "not": "1907 komisyonu hiç toplanmadı (IBS 174 s.7)"},
          5.0, KES_C + " · IBS: düzeltmeler çoğunlukla hatalı haritadan (ırmak kaynakları) · Taraira kutusu TAHMİNİ",
          "C: 1907 md. I hattı tanımlar, haritası hatalıydı")
        Y(id_ + "-DEGISTI-taraira", a, b, f, TAR.bounds,
          {"deger": True, "kaynak": "IBS 174", "not": "69°30' → 70°02'37\" meridyeni (1930–36)"},
          [ns["ibs"](174, "Brazil–Colombia", "a compromise line drawn along the meridian of the headwaters of the Taraira", "7")],
          "1907 meridyeni Taraira'yı KESMİYORDU (IBS 174 s.7) ⇒ 1923'te bu kesimin hattı sahada tanımsız · kutu TAHMİNİ",
          hukuki="hukuken C, uygulanamaz")
        return
    if id_ == "d1923-sr-gf":
        fs = ns["cizgi"]("FRA-SUR")
        MAR = (-54.0675, 3.29222)   # GeoNames "Rivière Malani" (alt. Marouini) — akarsu noktası, KONUM VEKİLİ
        Y(id_, a, b, f, kutu, degisti, dayanak, "1891 Çar kararına kadar Awa/Tapanahony anlaşmazlığı", t="1891-05-25")
        E(id_ + "-maroni-awa", a, b, "1891-05-25", "C", ns["parcala"](fs, lambda c: c[1] > MAR[1]), dayanak,
          {"deger": None, "kaynak": "Ireland 1938", "not": "Maroni + Awa ırmak hattı; bugünkü durum ölçülmedi"},
          {"t": None, "not": "bulunamadı"}, 2.0, KES_C + " · güney ucu GeoNames 'Marouini' noktası enleminde kesildi",
          "C: Çar kararı Awa'yı sınır ırmağı sayar (alıntı dayanakta) · Stoelman–Portal adaları 1915'te E — tek kayıt, en düşük sınıf")
        Y(id_ + "-itany-marouini", a, b, "1891-05-25", ns["bbox"](ns["parcala"](fs, lambda c: c[1] <= MAR[1]), 0.05), degisti, dayanak,
          "TARTIŞMALI: Awa'nın yukarısı Itany mi Marouini mi (Ireland 1938 s.244)")
        return
    if id_ == "d1923-pa-co":
        Y(id_, a, b, f, kutu, degisti, dayanak, "1903–1922 Kolombiya Panama'yı tanımıyordu", t="1922-03-01")
        E(id_, a, b, "1922-03-01", "C", ns["cizgi"]("COL-PAN"),
          dayanak + [{"ad": "Thomson–Urrutia onaylarının teatisi", "tarih": "1922-03-01", "tur": "antlaşma"}],
          degisti, {"t": "1936-1938", "not": "işaretsiz"}, 5.0, KES_C,
          "C: Kolombiya 1 Mar 1922'de hattı 1855 kanununa göre tanıdı; Panama antlaşmanın tarafı değil (ikili antlaşma 1924) · id '-1922'",
          )
        ns["KAYIT"][-1]["id"] = id_ + "-1922"
        return
    if id_ == "d1923-us-mx-DEGISTI-rio-grande":
        CH = box(-106.47, 31.74, -106.42, 31.78)   # üreticinin Chamizal kutusu — orada YOK kalır
        E("d1923-us-mx-rio-grande", a, b, "1848-05-30", "C", ns["parcala"](ns["rg"], disinda(CH)),
          [ns["GH"]] + dayanak, degisti, {"t": None, "not": "nehir hattı; 1884/1905 banco kuralları"},
          5.0, KES_C + " · 1933 El Paso–Juárez kanal düzeltmesi ve 1970 antlaşması nehir yatağını oynattı; Chamizal kutusu çıkarıldı",
          "C: hat 'nehrin en derin kanalı' — hareketli, 1923 yatağının koordinatı yok")
        return
    if id_ == "d1923-us-mx-DEGISTI-colorado":
        BC = ns["B_COL"]
        E("d1923-us-mx-colorado", a, b, "1854-06-30", "C", ns["parcala"](ns["mu"], lambda c: BC.contains(Point(c))),
          [ns["GADS"]] + dayanak, degisti, {"t": None, "not": "bulunamadı"}, 3.0, KES_C + " · kutu TAHMİNİ (üreticinin)",
          "C: Colorado nehir kesimi Gadsden md. I ile tanımlandı · f = Gadsden onayı (1848 hattı bu kesimde nehir DEĞİLDİ)")
        return
    if id_ == "d1923-ca-us-DEGISTI-lake-of-the-woods":
        BL = ns["B_LOW"]
        E("d1923-ca-us-lake-of-the-woods", a, b, f, "C", ns["parcala"](ns["ana"], lambda c: BL.contains(Point(c))),
          dayanak, degisti, {"t": None, "not": "bulunamadı"}, 3.0, KES_C + " · kutu TAHMİNİ (üreticinin)",
          "C: 1923 tanımı kusurlu (hat 5 noktada kendini kesiyordu), 1925 antlaşması düzeltti")
        return
    if id_ == "d1923-ca-us-alaska-guneydogu":
        E(id_, a, b, f, "C", ns["parcala"](ns["alaska"], lambda c: c[0] > -140.99), dayanak, degisti,
          {"t": None, "not": "işaretleme yılı BULUNAMADI"}, 3.0, KES_C,
          "C: 1903 kararı hattı tepelerle tanımlar, bir kesimi 1905 notalarına bıraktı · E adayı: 'değişmedi' kaynağı OKUNMADI")
        return
    if id_ == "d1923-bo-cl-tacna":
        E(id_, a, b, f, "C", ns["parcala"](ns["bp"], lambda c: c[1] < ns["TOLACOLLO"][1]), dayanak, degisti,
          {"t": None, "not": "bulunamadı"}, 3.0, KES_C + " · kuzey ucu GeoNames 'Tolacollo' enleminde",
          "C: 1904 antlaşması hattı (Visviri–Tolacollo); karşı yaka 1923'te Şili idaresindeki Tacna, 1929'dan sonra aynı hat Bolivya–Peru",
          sol_iso=dict(ns["ISO"], **{b: ["PER"]}))
        return
    # düz C: bütün çift, kendi f'iyle
    ek = {"d1923-co-ve": ("C: 1891 İspanya kararı hattı tanımlar; 1922 İsviçre kararının dört kesimi 1923 sonunda sahadaydı "
                          "(uzman kararı 30 Tem 1924) ⇒ kaba", 5.0),
          "d1923-br-gf": ("C: Oyapock talvegi + Tumuc-Humac su ayrımı (1900 kararı); işaretleme yok", 3.0),
          "d1923-bo-br": ("C: Petrópolis hattı; 1928 Natal düzeltmeleri (Rapirran–Bahia · Cuatro Hermanos–Verde · Madeira adaları) "
                          "kaymasının büyüklüğü ÖLÇÜLMEDİ", 5.0),
          "d1923-hn-ni-DEGISTI-dogu": ("C: 1906 İspanya Kralı kararı Coco (Segovia) ırmağı · TARTIŞMALI: Nikaragua reddediyordu; "
                                       "UAD 18 Kas 1960 kararı 1906 kararını geçerli ve bağlayıcı saydı", 3.0)}
    n, kes = ek[id_]
    cift = {"d1923-co-ve": "COL-VEN", "d1923-br-gf": "BRA-FRA", "d1923-bo-br": "BOL-BRA"}
    parca = ns["cizgi"](cift[id_]) if id_ in cift else ns["parcala"](ns["hn"], lambda c: c[0] > ns["TEOTECACINTE"][0])
    E(id_.replace("-DEGISTI", ""), a, b, f, "C", parca, dayanak, degisti, {"t": None, "not": "bulunamadı"}, kes, KES_C, n)

YUK = set() if SINA else {
    "d1923-ar-cl", "d1923-co-ve", "d1923-co-br-kuzey", "d1923-br-gf", "d1923-bo-br", "d1923-sr-gf",
    "d1923-pa-co", "d1923-us-mx-DEGISTI-rio-grande", "d1923-us-mx-DEGISTI-colorado",
    "d1923-ca-us-DEGISTI-lake-of-the-woods", "d1923-ca-us-alaska-guneydogu", "d1923-bo-cl-tacna",
    "d1923-hn-ni-DEGISTI-dogu"}
GORULEN = set()
ns["_yok0"] = ns["yok"]

def yok(id_, a, b, f, kutu, degisti, dayanak, not_="", t=None, hukuki=None):
    t = t or ns["T"]
    if id_ in YUK:
        GORULEN.add(id_)
        return ceviri(ns, id_, a, b, f, kutu, degisti, dayanak, not_, t, hukuki)
    return ns["_yok0"](id_, a, b, f, kutu, degisti, dayanak, not_, t, hukuki)

ns["yok"] = yok
exec(compile(src[i:j], "ARAC-D5AM-URET-0916.py", "exec"), ns)
if YUK - GORULEN:
    raise SystemExit(f"yakalanmayan kimlik: {sorted(YUK - GORULEN)}")
for k in ns["KAYIT"]:
    k["taraflar"] = ["ingiliz-hondurasi" if x == "ingiliz-honduras" else x for x in k["taraflar"]]
    if k.get("sol_taraf") == "ingiliz-honduras":
        k["sol_taraf"] = "ingiliz-hondurasi"
ns["ISO"]["ingiliz-hondurasi"] = ns["ISO"]["ingiliz-honduras"]
exec(compile(src[j:], "ARAC-D5AM-URET-0916.py", "exec"), ns)
print("yükseltilen:", len(GORULEN), sorted(GORULEN))
