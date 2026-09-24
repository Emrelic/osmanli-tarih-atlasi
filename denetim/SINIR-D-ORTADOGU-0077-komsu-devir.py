# SINIR-D-ORTADOGU-0077 — devralınacak manda hatlarının C kayıtları (taslak üretici)
import json, math, sys
sys.stdout.reconfigure(encoding="utf-8")

def km(h):
    t = 0
    for (x0, y0), (x1, y1) in zip(h, h[1:]):
        kx = 111.32 * math.cos((y0 + y1) / 2 * math.pi / 180)
        t += math.hypot((x1 - x0) * kx, (y1 - y0) * 110.57)
    return round(t, 1)

NE = json.load(open(r"C:\atlas\veri-kaynak\d_bugunku_sinirlar.geojson", encoding="utf-8"))
def ne(cift):
    return [f for f in NE["features"] if f["properties"]["cift"] == cift][0]["geometry"]["coordinates"]

# GeoNames çıpaları (download.geonames.org/export/dump, 24 Eyl 2026) — (lon, lat)
ANSAB = (44.71667, 29.18333)      # SA 411294 Anşāb (WLLS)
JUMAYMA = (43.6, 29.60278)        # SA 95079 Birkat al Jumaymah (RSVT)
UQBA = (43.62028, 30.14028)       # IQ 98835 Birkat al 'Aqabah (WLL)
UTHAYMIN = (43.65853, 30.37161)   # IQ 6912009 'Uthaymīn (SAND) — "Qasr Uthaimin" vekili
LIFIYA = (43.06806, 30.41861)     # SA 109257 Al Līfīyah (WLL)
ARAR = (41.43964, 31.37836)       # IQ 6769403 Jadīdat 'Ar'Ar (PPL)
ANAZA = (39.3025, 32.2308)        # IBS 111 s.2: 32°13'51"K 39°18'09"D (Jabal 'Anazah)
BATIN = (46.5525, 29.08972)       # SA 285664 'Awjat al Bāţin (WADB); IBS 111: 29°06'05"K 46°33'19"D
AMGHAR = (45.45351, 29.46526)     # IQ 98913 Jabal al Amghar (HLL)
WUQUBA = (45.53021, 28.77491)     # SA 108769 Ābār al Wuqubá (WLL)
TIGRIS3 = (42.3789, 37.112)       # d1923-tr-sy-dogu ilk noktası (TR–SY–IQ Dicle üçlüsü) — atlas kaydı, YALNIZ bitiştirme
RUMAYLAN = (41.96876, 36.9472)    # SY 386136 Rumaylān Bāshā (PPL) — "Roumelan Koeui"
ABUKEMAL = (40.91854, 34.45226)   # SY 174448 Ālbū Kamāl (PPLA2)
IMTAN = (36.81729, 32.41905)      # SY 169377 Imtān (PPL) — metinde "Imtar"
# Irak ile Ürdün'ün 1920 hattı üzerindeki ayrım noktası 1923'te TANIMSIZ: bugünkü üçlü nokta
# (NE 38.7745,33.3717) 1920 Abu Kemal–Imtan doğrusuna izdüşürüldü (1,9 km).
def izdus(p, a, b):
    ax, ay = a; bx, by = b; px, py = p
    t = ((px - ax) * (bx - ax) + (py - ay) * (by - ay)) / ((bx - ax) ** 2 + (by - ay) ** 2)
    return (round(ax + t * (bx - ax), 5), round(ay + t * (by - ay), 5))
AYRIM = izdus((38.774511, 33.371685), ABUKEMAL, IMTAN)

jor_syr = ne("JOR-SYR")  # 0 = Yermük batı ucu ... 39 = Nasib güneyi
NASIB_YERMUK = [tuple(c) for c in reversed(jor_syr[0:40])]  # Nasib → Yermük (batıya)

LNTS = {"ad": "Fransız–İngiliz Sözleşmesi (Suriye-Lübnan, Filistin, Irak mandaları)", "madde": "md. 1",
        "tarih": "1920-12-23", "tur": "antlaşma metni",
        "kaynak": "Société des Nations, Recueil des Traités c.22 (1924) No. 564 — tarama: upload.wikimedia.org (LNTS baskısı)",
        "url": "https://upload.wikimedia.org/wikipedia/commons/f/fd/FRANCO-BRITISH_CONVENTION_ON_CERTAIN_POINTS_CONNECTED_WITH_THE_MANDATES_FOR_SYRIA_AND_THE_LEBANON,_PALESTINE_AND_MESOPOTAMIA,_SIGNED_AT_PARIS,_DECEMBER_23,_1920.pdf"}
IBS100 = {"ad": "IBS No. 100 Iraq–Syria (1970)", "sayfa": "s.9-10", "tur": "resmî sınır çalışması",
          "url": "https://library.law.fsu.edu/Digital-Collections/LimitsinSeas/pdf/ibs100.pdf",
          "alinti": "delimited the boundary only in general terms, subject to later determination"}
IBS94 = {"ad": "IBS No. 94 Jordan–Syria (1969)", "sayfa": "s.11", "tur": "resmî sınır çalışması",
         "url": "https://library.law.fsu.edu/Digital-Collections/LimitsinSeas/pdf/ibs094.pdf",
         "alinti": "No evidence has been uncovered on demarcation of the boundary."}
IBS111 = {"ad": "IBS No. 111 Iraq–Saudi Arabia (1971)", "sayfa": "s.11-12", "tur": "resmî sınır çalışması",
          "url": "https://library.law.fsu.edu/Digital-Collections/LimitsinSeas/pdf/ibs111.pdf"}
UQAYR = {"ad": "Ukayr Protokolü (Muhammere Antlaşması eki)", "madde": "md. 1", "tarih": "1922-12-02",
         "tur": "antlaşma metni (İngilizcesi IBS 111'de)", "url": IBS111["url"], "sayfa": "s.11-12"}
MUH = {"ad": "Muhammere Antlaşması", "madde": "md. 1", "tarih": "1922-05-05", "tur": "antlaşma metni (IBS 111'de)",
       "url": IBS111["url"], "sayfa": "s.11",
       "alinti": "a committee shall be formed ... to fix the final boundaries"}

SN_C = "belge var, koordinat yok: metin adlı nokta/yer sayıyor, işaretleme yok; geometri GeoNames çıpalarından kuruldu ⇒ C (renk bu hatta OTURTULMAZ)"
ORT = {"kategori": "C", "sinif": "C", "kategori_tarihi": True, "tahdit": None}

kayitlar = []

def ekle(**k):
    r = {}
    r.update(k)
    r["uzunluk_km"] = km(r["hat"])
    kayitlar.append(r)

hat = [ANSAB, JUMAYMA, UQBA, UTHAYMIN, LIFIYA, ARAR, ANAZA]
ekle(id="d1923-iq-necd-ukayr", taraflar=["irak-kralligi", "suud-ucuncu"], f="1922-12-02", t="1923-10-29",
     kategori="C", sinif="C", sinif_not=SN_C, sol_taraf="suud-ucuncu", hat=[list(p) for p in hat],
     geometri_kaynagi="Ukayr md.1(d) nokta dizisi · GeoNames çıpaları (Ensab, Birket el-Cümeyme, Birket el-Akabe, Useymîn, Lîfiye, Cedîdetü Ar'ar) · batı ucu IBS 111 Cebel Aneze koordinatı",
     degisti={"deger": True, "kaynak": "ölçüm (bu oturum): bugünkü hat (NE IRQ-SAU) Birket el-Cümeyme'nin ~40 km KUZEYİNDEN, Useymîn'in ~50 km GÜNEYİNDEN geçiyor",
              "not": "Cümeyme–Akabe–Useymîn cebi bugün yok; değişikliğin günü/antlaşması BULUNAMADI. Lîfiye ve Ar'ar bugünkü hatta ≤7 km. Tarafsız Bölge 1981'de bölündü (ayrı kayıtlar)."},
     tahdit={"t": None, "not": "IBS 111 (1971): demarcation 'has not been accomplished'"},
     kesinlik_km=15.0,
     kesinlik_not="Menâiye (Bir el-Menaiye) ve Mukur BULUNAMADI ⇒ Lîfiye→Ar'ar ve Ar'ar→Aneze kesimleri DÜZ çizildi (bugünkü hattan sapma ölçülmedi, ~10-15 km mertebesi) · Useymîn çıpası bir kum alanı (SAND), 'Kasr' değil · Cal el-Batn ortası ayrıca çıpalanmadı",
     dayanak=[dict(UQAYR, alinti="From Bir Ansab (Bir Unsab) the boundary between the two states proceeds N.W."),
              dict(IBS111, alinti="delimited in 1922, is the first international boundary that ever has been defined"),
              MUH],
     not_="Ukayr md.1(d): Ensab → Birket el-Cümeyme → kuzeye Bir el-Akabe ve Kasr Useymîn → batıya Cal el-Batn ortasından Bir Lîfiye → Bir el-Menaiye → Cedîdetü Ar'ar → Mukur → Cebel Aneze (32K 39D civarı). GeoNames çıpaları metnin yönleriyle tutarlı (Cümeyme→Akabe tam kuzey, Useymîn→Lîfiye tam batı). 1923'te Ürdün–Necid ve Ürdün–Irak hattı YOK ⇒ batı ucu üçlü nokta değil, Ukayr'ın bitiş noktası. KOMSU'nun d1923-iq-necd-BILINMIYOR kaydının devamı (M-5065..5067).",
     )
ekle(id="d1923-iq-necd-tarafsiz-kuzey", taraflar=["irak-kralligi", "suud-ucuncu"], f="1922-12-02", t="1923-10-29",
     kategori="C", sinif="C", sinif_not=SN_C, sol_taraf="irak-kralligi", hat=[list(ANSAB), list(AMGHAR), list(BATIN)],
     geometri_kaynagi="Ukayr md.1(b) · GeoNames çıpaları (Ensab, Cebel el-Amgar, Avcetü'l-Bâtın)",
     degisti={"deger": True, "kaynak": "KOMSU d1923-iq-necd-BILINMIYOR notu (1981 bölüşümü)", "not": "Tarafsız Bölge 1981'de ikiye bölündü; bu hat bugün sınır değil"},
     tahdit={"t": None, "not": "işaretsiz"}, kesinlik_km=5.0,
     kesinlik_not="Amgar 'hattın güneyinde bırakılır' — çıpa (Cebel el-Amgar tepesi) hattın ÜSTÜNE kondu, gerçek hat birkaç km kuzeyde olabilir",
     dayanak=[dict(UQAYR, alinti="the Iraq boundary continues in a straight line N.W. to Al Amghar"), IBS111],
     not_="Irak ile Irak–Necid Tarafsız Bölgesi arasındaki hat. Güney yakası Necid DEĞİL, ortak alan (md.1(c) 'equal rights').",
     cins="ortak_alan_siniri", ortak_alan="irak-necid-tarafsiz-bolge")
ekle(id="d1923-iq-necd-tarafsiz-guney", taraflar=["suud-ucuncu", "irak-kralligi"], f="1922-12-02", t="1923-10-29",
     kategori="C", sinif="C", sinif_not=SN_C, sol_taraf="suud-ucuncu", hat=[list(BATIN), list(WUQUBA), list(ANSAB)],
     geometri_kaynagi="Ukayr md.1(a) · GeoNames çıpaları (Avcetü'l-Bâtın, Âbârü'l-Vukube, Ensab)",
     degisti={"deger": True, "kaynak": "KOMSU d1923-iq-necd-BILINMIYOR notu (1981 bölüşümü)", "not": "Tarafsız Bölge 1981'de bölündü; bu hat bugün Suudi Arabistan'ın içinde"},
     tahdit={"t": None, "not": "işaretsiz"}, kesinlik_km=5.0,
     kesinlik_not="Vukube ve Düleymiye 'hattın kuzeyinde bırakılır' — çıpa kuyunun üstüne kondu; Düleymiye (28.94K 45.67D) ara nokta olarak alınmadı",
     dayanak=[dict(UQAYR, alinti="the Najd frontier passes in a straight line to the well called Al Wuqubah"), IBS111],
     not_="Necid ile Tarafsız Bölge arasındaki hat. Kuzey yakası Irak DEĞİL, ortak alan.",
     cins="ortak_alan_siniri", ortak_alan="irak-necid-tarafsiz-bolge")

hat = [TIGRIS3, RUMAYLAN, ABUKEMAL, AYRIM]
ekle(id="d1923-iq-sy-1920", taraflar=["irak-kralligi", "suriye-lubnan-mandasi"], f="1921-08-23", t="1923-10-29",
     kategori="C", sinif="C", sinif_not=SN_C, sol_taraf="irak-kralligi", hat=[list(p) for p in hat],
     geometri_kaynagi="1920 Sözleşmesi md.1 · GeoNames çıpaları (Rumaylān, Ālbū Kamāl) · kuzey ucu d1923-tr-sy-dogu ile bitiştirildi · güney ucu 1920 Abu Kemal–Imtan doğrusu üzerinde, bugünkü üçlü noktanın izdüşümü",
     degisti={"deger": True, "kaynak": "IBS 100 s.10", "not": "bugünkü hat Milletler Cemiyeti komisyonu raporu, Cenevre 10 Eyl 1932 (Sincar kesimi dahil)"},
     tahdit={"t": None, "not": "IBS 100: bilinen tek kalıcı işaret Leachman taşı (1932 sonrası hat)"},
     kesinlik_km=20.0,
     kesinlik_not="Dicle→Rumeylan kesimi 'eski Diyarbekir–Musul vilâyet sınırı' — koordinatı BULUNAMADI, DÜZ çizildi · Rumeylan→Abu Kemal metinde 'Batı Habur havzasının tamamını Fransız'a bırakan' düz hat · Irak/Ürdün ayrım noktası 1923'te TANIMSIZ",
     dayanak=[dict(LNTS, alinti="passing in a straight line towards the Euphrates, which it crosses at Abu Kemal"), IBS100],
     not_="f = Irak Krallığı künyesi (sözleşme 23 Ara 1920). 3 Şub 1922 anlaşması 'yalnız hafifçe' farklı (IBS 100) — metni AÇILMADI. KOMSU'nun d1923-iq-sy-DEGISTI kaydının devamı.",
     )
hat = [AYRIM, IMTAN] + NASIB_YERMUK
ekle(id="d1923-sy-jo-1920", taraflar=["urdun-emirligi", "suriye-lubnan-mandasi"], f="1921-02-01", t="1923-10-29",
     kategori="C", sinif="C", sinif_not=SN_C, sol_taraf="urdun-emirligi", hat=[list(p) for p in hat],
     geometri_kaynagi="1920 Sözleşmesi md.1 · GeoNames Imtān · Nasib güneyi → Yermük kesimi NE 10m JOR-SYR (1931 hattı, VEKİL) · doğu ucu 1920 doğrusu üzerinde bugünkü üçlü noktanın izdüşümü",
     degisti={"deger": True, "kaynak": "IBS 94 s.11-13", "not": "bugünkü hat 31 Eki 1931 Paris Protokolü; Nasib doğusunda 1931 hattı Imtan'ın ~11 km güneyinden geçiyor (ölçüldü) — 1920 hattı Imtan'dan geçer"},
     tahdit={"t": None, "not": "IBS 94: işaretlemeye dair kanıt yok"},
     kesinlik_km=10.0,
     kesinlik_not="Ayrım→Imtan→Nasib düz (metin 'straight line to Imtar', 'line to the south of Nasib') · Nasib→Yermük kesimi 1931 hattı: 1920 'demiryolunun güneyinden, ona paralel' diyor — farkı ÖLÇÜLMEDİ, degisti bu kesim için bilinmiyor",
     dayanak=[dict(LNTS, alinti="thence a straight line to Imtar to the south of Jebul Druse"), IBS94],
     not_="f = Şarkî Ürdün Emirliği künyesi. Metin: Der'a ve çevresi Fransız mandasında kalır. Batı ucu Yermük'te 1923 Filistin–Suriye–Ürdün üçlüsü (Paulet–Newcombe) — koordinatı yok, bugünkü üçlü nokta. KOMSU'nun d1923-sy-jo-DEGISTI kaydının devamı.",
     )

for r in kayitlar:
    if "not_" in r:
        r["not"] = r.pop("not_")
    print(r["id"], r["sinif"], r["uzunluk_km"], "km", len(r["hat"]), "nokta")
json.dump(kayitlar, open(r"C:\Users\emrem\AppData\Local\Temp\claude\C--atlas\2b76af78-4cc3-4c79-923c-4dd8852804bd\scratchpad\yeni_kayitlar.json", "w", encoding="utf-8"), ensure_ascii=False)
print("AYRIM", AYRIM)
