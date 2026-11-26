# -*- coding: utf-8 -*-
# denetim/ARAC-SINIR-ICASYA-0078.py — data/d_sinirlar_icasya.js ÜRETİCİSİ (SINIR-ICASYA-0078)
# Şartname oturumlar/BITIR-1923-0078.md · şema denetim/SEMA-D-0916.md
# Geometri: veri-kaynak/d_bugunku_sinirlar.geojson (D-GEOARAC, NE 10m admin-0 çiftleri).
# Kayıtların hükmü (sınıf, dayanak, not) BURADA elle yazılır; betik yalnız geometriyi
# ekler, uzunluğu ölçer ve `sol_taraf`ı NE ülke poligonundan tayin eder.
# Kullanım:  py denetim/ARAC-SINIR-ICASYA-0078.py          (kuru koşu: özet basar)
#            py denetim/ARAC-SINIR-ICASYA-0078.py --yaz    (data/d_sinirlar_icasya.js yazar)
import sys, os, json, math
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
from shapely.geometry import shape, Point

KOK = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
CIFT = os.path.join(KOK, "veri-kaynak", "d_bugunku_sinirlar.geojson")
ULKE = os.path.join(KOK, "veri-kaynak", "ne_10m_admin_0_countries.geojson")
CIKTI = os.path.join(KOK, "data", "d_sinirlar_icasya.js")


def hav(a, b):
    R = 6371.0
    la1, la2 = math.radians(a[1]), math.radians(b[1])
    dla, dlo = la2 - la1, math.radians(b[0] - a[0])
    h = math.sin(dla / 2) ** 2 + math.cos(la1) * math.cos(la2) * math.sin(dlo / 2) ** 2
    return 2 * R * math.asin(math.sqrt(h))


def parca(cift, no):
    g = json.load(open(CIFT, encoding="utf-8"))
    bul = [f for f in g["features"]
           if f["properties"]["cift"] == cift and f["properties"]["parca_no"] == no]
    if len(bul) != 1:
        raise SystemExit(f"!! {cift} parça {no}: {len(bul)} eşleşme (1 beklenirdi)")
    return [[round(x, 4), round(y, 4)] for x, y in bul[0]["geometry"]["coordinates"]]


def ulke(iso):
    g = json.load(open(ULKE, encoding="utf-8"))
    for f in g["features"]:
        p = f["properties"]
        if iso in (p.get("ISO_A3"), p.get("ISO_A3_EH"), p.get("ADM0_A3")):
            return shape(f["geometry"])
    raise SystemExit(f"!! NE ülke {iso} bulunamadı")


def sol_iso(hat, iso_a, iso_b, km=1.0):
    """Her ≥1 km'lik segmentin ortasından ilerleme yönünün 1 km SOLUNA bakar ve OYLAR.
    (Tek orta segment kıvrımda yanılıyor — Sikkim'de 20 m'lik bir segment ters oy verdi.)"""
    A, B = ulke(iso_a), ulke(iso_b)
    oy = {iso_a: 0, iso_b: 0, "?": 0}
    d = km / 111.32
    for a, b in zip(hat, hat[1:]):
        if hav(a, b) < 1.0:
            continue
        mx, my = (a[0] + b[0]) / 2, (a[1] + b[1]) / 2
        dx = (b[0] - a[0]) * math.cos(math.radians(my))
        dy = b[1] - a[1]
        n = math.hypot(dx, dy)
        lx, ly = -dy / n, dx / n                  # sol normal (yerel düzlem)
        p = Point(mx + lx * d / math.cos(math.radians(my)), my + ly * d)
        oy[iso_a if A.contains(p) else iso_b if B.contains(p) else "?"] += 1
    kazanan = max((iso_a, iso_b), key=lambda k: oy[k])
    kaybeden = iso_b if kazanan == iso_a else iso_a
    print(f"    sol oylama {oy}")
    if oy[kazanan] < 0.9 * (oy[kazanan] + oy[kaybeden]):
        raise SystemExit(f"!! sol taraf tartışmalı ({oy})")
    return kazanan


# ----------------------------------------------------------------------------
# KAYITLAR
# ----------------------------------------------------------------------------
KAYNAK_1890 = ("tibetjustice.org/materials/treaties/treaties9.html — M. C. van Walt van Praag, "
               "The Status of Tibet (1987) Ek; asıl: BFSP 82 s. 9–11")
KAYNAK_1904 = ("tibetjustice.org/materials/treaties/treaties10.html — van Walt van Praag (1987) Ek")
KAYNAK_1906 = ("tibetjustice.org/materials/treaties/treaties11.html — van Walt van Praag (1987) Ek")
KAYNAK_2017 = ("ÇHC Dışişleri Bakanlığı, 'The Facts and China's Position Concerning the Indian "
               "Border Troops' Crossing of the China-India Boundary in the Sikkim Sector' (2 Ağu 2017), "
               "english.www.gov.cn/state_council/ministries/2017/08/03/content_281475768664370.htm")
IBS64 = "https://library.law.fsu.edu/Digital-Collections/LimitsinSeas/pdf/ibs064.pdf"
IBS173 = "https://library.law.fsu.edu/Digital-Collections/LimitsinSeas/pdf/ibs173.pdf"
KAYNAK_SIMLA = ("tibetjustice.org/materials/treaties/treaties16.html — van Walt van Praag (1987) Ek; "
                "asıl FO 535/17")
KAYNAK_1914D = ("tibetjustice.org/materials/treaties/treaties15.html — van Walt van Praag (1987) Ek; "
                "asıl FO 535/17 no. 231 ek 7")

KAYITLAR = [
    # ---- E: Sikkim–Tibet su ayrımı -------------------------------------------------------
    {
        "id": "d1923-ih-tb-sikkim",
        "taraflar": ["ingiliz-hindistani", "tibet-ganden-phodrang"],
        "f": "1904-11-11", "t": "1923-10-29",
        "kategori": "D", "sinif": "E",
        "sinif_not": ("E: milimetrik (antlaşma tarifi = Teesta/Mochu su ayrımı sırtı; 1895'te yerinde "
                      "ortak işaretlendi — Nehru 22 Mar 1959, ÇHC 2017 ek III'te alıntı) + belgeli + "
                      "iki tarafça tanınmış (İngiltere 1890; Tibet 1904 Lhasa md. I; Çin 1906 md. IV "
                      "de teyit). F DEĞİL: tanınma tablosu kanıtı yok (D107)."),
        "_cift": ("CHN-IND", 2), "_iso": {"CHN": "tibet-ganden-phodrang", "IND": "ingiliz-hindistani"},
        "geometri_kaynagi": ("Natural Earth 10m admin-0 bugünkü CHN–IND sınırı, Sikkim kesimi "
                             "(D-GEOARAC parça 2/3) — su ayrımı hattının 10m çizimi"),
        "degisti": {"deger": False, "kaynak": "ÇHC Dışişleri 2017 + Nehru mektupları (1959)",
                    "not": ("İki taraf da 1890 hattını devraldığını yazılı beyan ediyor (Nehru 26 Eyl 1959: "
                            "'no dispute regarding the boundary of Sikkim with the Tibet region'; ÇHC 2017 "
                            "md. 5). TEK İSTİSNA güney ucu: üçlü nokta Gipmochi (ÇHC) mi Batang La (Hindistan) "
                            "mı — Doklam ihtilafı; hattın Sikkim–Tibet kesimi değil, Bhutan köşesi.")},
        "tahdit": {"t": "1895", "not": ("'jointly demarcated on the ground in 1895' (Nehru, 22 Mar 1959, "
                                         "ÇHC 2017 ek III-A). Gün/ay okunmadı. Lhasa 1904 md. I Tibet'e direk "
                                         "dikme yükümlülüğü getirdi; dikildiği BULUNAMADI.")},
        "kesinlik_km": None,
        "kesinlik_not": ("ölçülmedi — NE 10m su ayrımını D-GEOARAC ölçümüne göre ~2 km medyan aralıkla "
                         "düz parçalarla izliyor; güney ucunda (Gipmochi/Batang La) üçlü nokta ihtilafı "
                         "birkaç km mertebesinde, NE hangi yorumu çizdi ÖLÇÜLMEDİ."),
        "dayanak": [
            {"ad": "Kalküta Sözleşmesi (İngiltere–Çin, Sikkim ve Tibet)", "madde": "md. I", "tarih": "1890-03-17",
             "tur": "sözleşme", "not": "onay Londra 27 Ağu 1890", "kaynak": KAYNAK_1890,
             "alinti": "the crest of the mountain range separating the waters"},
            {"ad": "Lhasa Sözleşmesi (İngiltere–Tibet)", "madde": "md. I", "tarih": "1904-09-07",
             "tur": "sözleşme", "kaynak": KAYNAK_1904,
             "alinti": "to recognize the frontier between Sikkim and Thibet"},
            {"ad": "Lhasa Sözleşmesi'nin Hindistan Genel Valisince onayı", "tarih": "1904-11-11",
             "tur": "onay", "kaynak": KAYNAK_1906 + " (Pekin Sözleşmesi 1906 önsözü onay gününü veriyor)",
             "alinti": "ratified by the Viceroy and Governor-General of India on November 11, 1904"},
            {"ad": "Pekin Sözleşmesi (İngiltere–Çin, Tibet)", "madde": "md. IV", "tarih": "1906-04-27",
             "tur": "sözleşme", "kaynak": KAYNAK_1906,
             "alinti": "Anglo-Chinese Convention of 1890 ... shall ... remain in full force"},
            {"ad": "ÇHC Dışişleri Bakanlığı Sikkim kesimi beyanı", "tarih": "2017-08-02",
             "tur": "resmî devlet beyanı (taraf)", "kaynak": KAYNAK_2017,
             "alinti": "jointly demarcated on the ground in 1895"},
        ],
        "not": ("Taraf SİKKİM (İngiliz himayesi, 1890 md. II) — atlasta künyesi YOK, `ingiliz-hindistani` "
                "vekil (ASYA'daki yer tutucuyla aynı karar). f = Lhasa Sözleşmesi'nin İngiliz onayı: "
                "Tibet'in hattı tanıdığı hukukî an; 1890–1904 arası İngiltere–ÇİN hattıydı (Faz 2'nin işi). "
                "⚠️ A KATMANI: 86,5–92,5°D × 26,3–30,5°K kutusunda 1923'te yalnız 3 yerleşim var (Lhasa, "
                "Şigatse, Gyantse — hepsi Tibet); Sikkim/Darjeeling/Çumbi'de nokta YOK ⇒ İngiliz gövdesi "
                "hatta inmeyebilir, yaslama tutmayabilir. `d_sinirlar_asya.js`teki "
                "`d1923-ih-tb-BILINMIYOR-sikkim` (D-YOK, hatsız) aynı hattın yer tutucusudur."),
    },
]

# ---- BEYAN (D-YOK): 1923-09-01'de belge bulunamadı ya da tablonun boş gözü ⇒ A/B'de kalır ----
BEYANLAR = [
    {
        "id": "d1923-tb-cn-BOSGOZ",
        "taraflar": ["tibet-ganden-phodrang", "cin-cumhuriyeti"],
        "f": "1914-07-03", "t": "1923-10-29",
        "kategori": "D-YOK", "sinif": "YOK",
        "kutu": [78.3, 27.9, 103.0, 36.5],
        "degisti": {"deger": True, "kaynak": "NE 10m admin-0 ölçümü",
                    "not": "bugün iki taraf aynı devlet içinde; NE admin-0'da bu hatta çizgi YOK"},
        "dayanak": [
            {"ad": "Simla Sözleşmesi (İngiltere–Çin–Tibet)", "madde": "md. 9 (harita: kırmızı/mavi hat)",
             "tarih": "1914-07-03", "tur": "sözleşme (Çin imzalamadı)", "kaynak": KAYNAK_SIMLA,
             "alinti": "the borders of Tibet, and the boundary between Outer and Inner Tibet"},
            {"ad": "İngiliz–Tibet Beyannamesi", "tarih": "1914-07-03", "tur": "beyanname",
             "kaynak": KAYNAK_1914D,
             "alinti": "so long as the Government of China withholds signature"},
            {"ad": "E. Teichman, Travels of a Consular Officer in Eastern Tibet (Cambridge UP)",
             "tarih": "1922", "tur": "birincil tanıklık (arabulucu İngiliz konsolosu)", "sayfa": "58",
             "url": "https://archive.org/details/travelsofconsula00teicuoft",
             "alinti": "The provisional boundary between Szechuan and Tibet resulting from these frontier negotiations"},
        ],
        "not": ("🔴 TABLONUN BOŞ GÖZÜ (şartname §1.1) — UYDURULMADI, hüküm koordinatörde. Tibet–Çin "
                "arasında 1923-09-01'de iki aday var, İKİSİ de kaba ve Çin merkezî hükûmetince "
                "tanınmamış: ① Simla kırmızı hattı (md. 9) — Tibet ve İngiltere imzaladı, ÇİN (hattın "
                "öbür tarafı) imzalamadı; harita çizgisi, tahdit edilmedi. Üstelik Kham'da fiilî durumla "
                "örtüşmüyor. ② 1918 sonu ateşkes 'geçici sınırı' (Teichman s. 58) — Sichuan ve Tibet "
                "SINIR MAKAMLARI arasında İngiliz arabuluculuğuyla; çizgi değil İLÇE listesi: Batang, "
                "Litang, Nyarong, Kanze ve doğusu Çin'de; Çamdo, Draya, Markam, De-ge ve batısı "
                "Tibet'te. Pekin onayı OKUNMADI. ⇒ 'kimse tanımıyor × kaba'. Kuzey (Kökenor/Sinkiang–"
                "Tibet, Kunlun) kesiminde belge BULUNAMADI. ⇒ A/B'de kalır. Öneri: ② için gerekli olan "
                "A katmanında o ilçelerin 1923 sahibi (Tibet'te 1923'te yalnız 4 nokta var: Lhasa, "
                "Şigatse, Gyantse, Çamdo). f: Simla beyannamesinin günü."),
    },
    {
        "id": "d1923-sscb-tuva-BULUNAMADI",
        "taraflar": ["sovyet-rusya", "tannu-tuva"],
        "f": "1921-08-14", "t": "1923-10-29",
        "kategori": "D-YOK", "sinif": "YOK",
        "kutu": [88.7, 49.7, 99.3, 53.8],
        "degisti": {"deger": True, "kaynak": "IBS 64 s. 7",
                    "not": "Tuva 1944'te SSCB'ye katıldı; hat bugün Rusya İÇ idarî sınırı, NE admin-0'da YOK"},
        "dayanak": [
            {"ad": "Bur Antlaşması + protokoller (Rusya–Qing)", "tarih": "1727-08-20", "tur": "antlaşma",
             "not": "Sayan kesimini tarif eden eski Rus–Qing belgesi"},
            {"ad": "IBS No. 64 China–U.S.S.R. (Revised)", "tarih": "1978-02-13", "tur": "resmî sınır çalışması",
             "url": IBS64, "sayfa": "13",
             "alinti": "the imprecision of the delimitation in the Sayan Mountains"},
            {"ad": "IBS No. 64 China–U.S.S.R. (Revised)", "tarih": "1978-02-13", "tur": "resmî sınır çalışması",
             "url": IBS64, "sayfa": "7", "alinti": "The former declared itself independent in 1921"},
        ],
        "not": ("Sovyet Rusya–Tannu Tuva arasında 1923-09-01'de yürürlükte İKİ TARAFLI sınır belgesi "
                "BULUNAMADI; eski Rus–Qing Sayan tarifi IBS 64'e göre belirsizdi (kaba). Tuva–Sovyet "
                "karşılıklı tanıma belgesinin günü OKUNMADI. ⇒ A/B'de kalır. ⚠️ A KATMANI: Tannu Tuva "
                "1923-09-01'de 0 yerleşim noktasına sahip (girdi.yukle, 3921 nokta taradı) — Tuva "
                "haritada hiç görünmüyor; bu kutuda gövde Uliastay/Sibirya peteklerinden geliyor. "
                "f: künyenin doğumu (1921-08-14)."),
    },
    {
        "id": "d1923-tuva-mn-BULUNAMADI",
        "taraflar": ["tannu-tuva", "mogolistan"],
        "f": "1921-08-14", "t": "1923-10-29",
        "kategori": "D-YOK", "sinif": "YOK",
        "kutu": [88.7, 49.6, 99.3, 51.6],
        "degisti": {"deger": True, "kaynak": "IBS 64 s. 7",
                    "not": "Tuva 1944'te SSCB'ye katıldı; bugünkü MNG–RUS hattının bu kesimi 1923 hattı DEĞİL (kesim yeri ölçülmedi)"},
        "dayanak": [
            {"ad": "IBS No. 64 China–U.S.S.R. (Revised)", "tarih": "1978-02-13", "tur": "resmî sınır çalışması",
             "url": IBS64, "sayfa": "7",
             "alinti": "both Tannu Tuva and Mongolia shortly established Soviet regimes"},
        ],
        "not": ("Tuva–Moğolistan arasında 1923-09-01'de sınır belgesi BULUNAMADI; iki tarafın "
                "birbirini tanıdığı belgenin günü OKUNMADI. ⇒ A/B'de kalır. Kutu, "
                "`d_sinirlar_asya.js` `d1923-sscb-mn-BILINMIYOR` kutusunun batı ucuyla örtüşür "
                "(o kayıt kendi notunda bu kesimi Tuva–Moğolistan diye işaretliyor)."),
    },
    {
        "id": "d1923-ck-tb-BULUNAMADI",
        "taraflar": ["cammu-kesmir", "tibet-ganden-phodrang"],
        "f": "1846-03-16", "t": "1923-10-29",
        "kategori": "D-YOK", "sinif": "YOK",
        "kutu": [77.8, 32.2, 80.3, 35.0],
        "degisti": {"deger": None, "kaynak": "bulunamadı",
                    "not": "bugün Hindistan–Çin fiilî kontrol hattı (Doğu Ladakh); 1923 hattıyla örtüşmesi ÖLÇÜLEMEDİ"},
        "dayanak": [
            {"ad": "Ladakh–Tibet arasında çizgi tarif eden belge bulunamadı", "tur": "yok",
             "not": ("1842 Dogra–Tibet anlaşması 'eski sınırlar'a atıf yapar (ASYA'nın aksaicin kaydı) — "
                     "metni bu oturumda OKUNMADI, dayanak sayılmadı")},
        ],
        "not": ("Ladakh (Cammu-Keşmir) ile Batı Tibet (Ngari/Rudok) arasında 1923-09-01'de çizgi "
                "tarif eden belge BULUNAMADI. Bugünkü çizgi ihtilaflı (Hindistan iddiası ≠ fiilî "
                "kontrol hattı) ⇒ vekil olamaz. ⇒ A/B'de kalır. f: Cammu-Keşmir künyesinin doğumu (Amritsar 1846). Kaydı "
                "OLMAYAN çiftti; Aksay Çin (ck–cn) ayrı kayıt, ASYA'da."),
    },
]


def main():
    yaz = "--yaz" in sys.argv
    cikti = []
    for k in KAYITLAR:
        k = dict(k)
        cift, no = k.pop("_cift")
        iso = k.pop("_iso")
        hat = parca(cift, no)
        a, b = cift.split("-")
        sol = sol_iso(hat, a, b)
        k["sol_taraf"] = iso[sol]
        k["hat"] = hat
        k["uzunluk_km"] = round(sum(hav(hat[i], hat[i + 1]) for i in range(len(hat) - 1)), 1)
        print(f"  {k['id']}: {len(hat)} nokta · {k['uzunluk_km']} km · sol={sol}→{k['sol_taraf']} · "
              f"uçlar {hat[0]} … {hat[-1]}")
        cikti.append(k)
    for k in BEYANLAR:
        k = dict(k)
        k["hat"] = None
        print(f"  {k['id']}: BEYAN (D-YOK) kutu {k['kutu']}")
        cikti.append(k)
    ids = [k["id"] for k in cikti]
    assert len(ids) == len(set(ids)), "id mükerrer"
    for k in cikti:
        assert k["f"] < k["t"], k["id"]
        assert k["dayanak"], k["id"]
        for d in k["dayanak"]:
            if "alinti" in d:
                assert len(d["alinti"].split()) <= 15, (k["id"], d["alinti"])
    if not yaz:
        print(f"KURU KOŞU — {len(cikti)} kayıt; yazmak için --yaz")
        return
    bas = [
        "// -*- coding: utf-8 -*-",
        "// data/d_sinirlar_icasya.js — İÇ ASYA SINIRLARI · SINIR-ICASYA-0078 (1923 Faz 1)",
        "// Kapsam: Tibet · Moğolistan · Tannu Tuva · Sinkiang · Çin–Sovyet hattı (şartname oturumlar/BITIR-1923-0078.md §3.1)",
        "// Şema denetim/SEMA-D-0916.md · Üretici denetim/ARAC-SINIR-ICASYA-0078.py — 🔴 ELLE DÜZENLEME, yeniden üret.",
        "// D-YOK kayıtları BEYANDIR: 1923-09-01'de o çift için çizilecek belge BULUNAMADI ⇒ A/B'de kalır (Faz 1 şart ①).",
        "",
        "window.D_SINIRLAR_ICASYA = [",
    ]
    govde = ",\n".join(json.dumps(k, ensure_ascii=False) for k in cikti)
    open(CIKTI, "w", encoding="utf-8", newline="\n").write("\n".join(bas) + "\n" + govde + "\n];\n")
    print(f"YAZILDI {CIKTI} — {len(cikti)} kayıt")


if __name__ == "__main__":
    main()
