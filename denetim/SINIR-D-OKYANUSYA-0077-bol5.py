# -*- coding: utf-8 -*-
"""SINIR-D-OKYANUSYA-0077 — 141°D kuzey hattını 5°G üçlü noktasında böler (TARAF HATASI).

Ölçülen kusur: `kuzey-alman` (1884–1914), `kuzey-isgal-avustralya` (1914–1920) ve `kuzey`
(1920–) kayıtları 141°D'yi Fly Nehri'nin kuzey kesişiminden (6,3233°G) başlatıyordu.
Ama 6,32–5°G arasında meridyenin doğusu Alman DEĞİL, İngiliz/Papua'dır:
  - IBS 160 s.2: "The London Agreement of April 1885 delimited a boundary between the
    British and German territories by a series of lines from the north coast near Mitre
    Rock on the 8th parallel of south latitude to the intersection of the 5th parallel
    south latitude and the 141st meridian of east longitude."
  - 1895 Sözleşmesi Md. IV (IBS 160 s.3): "The 141st degree of east longitude after this
    forms the boundary up to the point of intersection of the boundaries of the British,
    Netherland, and German possessions."
⇒ 6,3233–5°G kesimi 1895 Sözleşmesi'nin (Hollanda↔İngiltere, 1906'dan Avustralya/Papua)
kesimidir; 5°G'nin kuzeyi Hollanda↔Almanya (1914'ten Avustralya işgali, 1920 manda).
1923-09-01'de iki taraf da `avustralya` olduğu için renk DEĞİŞMEZ; düzelen şey 1885–1920
arası taraf ve dayanaktır.

Ek: Papua ↔ Alman Yeni Ginesi kara hattı (London 1885) `sinif:"YOK"` olarak yazılır — uçları
belli (Mitre Rock 8°G kıyı · 5°G×141°D) ama ara köşeleri kaynakta BULUNAMADI; çizilmez.
1914–1923 Papua ↔ Yeni Gine (işgal/manda) hattı YAZILMAZ: iki yan da atlasta `avustralya`,
ayrı künye yok (koordinatöre bildirildi).
"""
import io, json, math, os

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DOSYA = os.path.join(KOK, "data", "d_sinirlar_okyanusya.js")
UC = [141.0, -5.0]
FLY_KUZEY = [141.0, -6.323333]
KUZEY = ["d1923-oky-yenigine-kuzey-alman", "d1923-oky-yenigine-kuzey-isgal-avustralya",
         "d1923-oky-yenigine-kuzey"]
IBS = "IBS No.160 (ABD Disisleri, 1977)"
LONDRA = {"ad": "Londra Anlasmasi (Ingiltere-Almanya, Yeni Gine sinir hatti)", "tarih": "1885",
          "tur": "antlasma", "kaynak": IBS + " s.2",
          "alinti": "to the intersection of the 5th parallel south latitude and the 141st meridian of east longitude",
          "not": "Ay: Nisan 1885 (IBS 160); gun kaynakta yok."}
S1895 = {"ad": "Ingiltere-Hollanda Sozlesmesi (New Guinea sinirini tanimlayan)", "madde": "Madde IV",
         "tarih": "1895-05-16", "tur": "antlasma",
         "kaynak": "British Foreign and State Papers Vol.87 (1894-95) s.18-21; " + IBS + " s.3",
         "alinti": "The 141st degree of east longitude after this forms the boundary up to the point of intersection of the boundaries of the British, Netherland, and German possessions"}
PAPUA_ACT = {"ad": "Papua Act 1905 — Britanya Yeni Ginesi'nin Avustralya idaresine devri", "tarih": "1906-09-01",
             "tur": "devir", "kaynak": IBS + " s.3",
             "alinti": "British New Guinea became the Territory of Papua and was placed under Australian administration in September 1906"}


def km(h):
    t = 0.0
    for a, b in zip(h, h[1:]):
        kx = 111.32 * math.cos(math.radians((a[1] + b[1]) / 2))
        t += math.hypot((b[0] - a[0]) * kx, (b[1] - a[1]) * 110.57)
    return round(t, 1)


metin = io.open(DOSYA, encoding="utf-8").read()
satirlar = metin.split("\n")
kayit = {}
for i, s in enumerate(satirlar):
    if s.startswith('{"id": '):
        ek = s.endswith(",")
        k = json.loads(s[:-1] if ek else s)
        kayit[k["id"]] = (i, ek, k)
assert not any(x.startswith("d1923-oky-yenigine-orta") for x in kayit), "zaten bolunmus"

eski_hat = kayit[KUZEY[0]][2]["hat"]
assert eski_hat[0] == FLY_KUZEY, eski_hat[0]
orta_hat = [p for p in eski_hat if p[1] < -5.0] + [UC]
kuzey_hat = [UC] + [p for p in eski_hat if p[1] > -5.0]
assert len(orta_hat) == 4 and kuzey_hat[1] == [141.0, -4.915], (orta_hat, kuzey_hat[:2])

for kid in KUZEY:
    i, ek, k = kayit[kid]
    assert k["hat"] == eski_hat
    k["hat"] = kuzey_hat
    k["uzunluk_km"] = km(kuzey_hat)
    k["not"] = k.get("not", "") + (
        " · TARAF DUZELTMESI (SINIR-D-OKYANUSYA-0077, 24 Eylul 2026): hat eskiden 6,3233G'den basliyordu; "
        "6,3233-5G arasi Hollanda-Ingiltere/Papua kesimidir (Londra 1885 uclu noktasi 5Gx141D, 1895 Sozlesmesi Md.IV) "
        "-- o kesim d1923-oky-yenigine-orta-* kayitlarina ayrildi. Bu kayit artik 5G'den kuzeye.")
    k["dayanak"] = k["dayanak"] + [LONDRA]
    satirlar[i] = json.dumps(k, ensure_ascii=False) + ("," if ek else "")

sablon = kayit["d1923-oky-yenigine-kuzey"][2]
ortak = {"sol_taraf": "hollanda-dogu-hint", "hat": orta_hat, "uzunluk_km": km(orta_hat),
         "kesinlik_km": 0.5,
         "kesinlik_not": "Saf meridyen (141d00'00\"E), 1973 anket monumanlari (IBS 160); 5G ucu Londra 1885'in tanimladigi uclu nokta.",
         "degisti": {"deger": False, "kaynak": IBS + " s.2-4",
                     "not": "141d00'00\"E hatti 1895'ten beri ayni; degisen yalniz dogu tarafin idarecisi (1906 Papua)."},
         "tahdit": {"t": "bulunamadi", "not": "1973 ortak anketi bilinen tek resmi isaretleme."}}
yeni = [
    dict({"id": "d1923-oky-yenigine-orta-britanya-koruma", "taraflar": ["hollanda-dogu-hint", "ingiltere"],
          "f": "1885-01-01", "t": "1895-07-20", "kategori": "D", "sinif": "D",
          "geometri_kaynagi": "d1923-oky-yenigine-orta-britanya ile AYNI hat, GERIYE IZDUSUM - 1895 oncesi Hollanda-Ingiltere antlasmasi YOK",
          "dayanak": [LONDRA],
          "not": "SINIR-D-OKYANUSYA-0077: 141D'nin 6,3233-5G kesimi. Londra 1885 Ingiliz-Alman hattini 5Gx141D'de bitirdi -> bu kesimin dogusu Ingiliz. Hollanda ile Ingiltere arasinda 1895'e kadar antlasma yok (Hollanda iddiasi tek tarafli, IBS 160 s.2) -> sinif D, guney-britanya-koruma ile ayni mantik. f: Londra Anlasmasi Nisan 1885, gun kaynakta yok -> yil basi (CLAUDE.md 4)."},
         **ortak),
    dict({"id": "d1923-oky-yenigine-orta-britanya", "taraflar": ["hollanda-dogu-hint", "ingiltere"],
          "f": "1895-07-20", "t": "1906-09-01", "kategori": "D", "sinif": "E",
          "geometri_kaynagi": IBS + " + 1973 Avustralya-Endonezya Anlasmasi monuman koordinatlari - 1923 hatti icin VEKIL (degisti:false)",
          "dayanak": [S1895, LONDRA],
          "not": "SINIR-D-OKYANUSYA-0077: 1895 Sozlesmesi Md.IV'un meridyen kesimi (Fly'dan uclu noktaya). f = onay degisimi 1895-07-20 (guney-britanya ile ayni)."},
         **ortak),
    dict({"id": "d1923-oky-yenigine-orta-avustralya", "taraflar": ["hollanda-dogu-hint", "avustralya"],
          "f": "1906-09-01", "t": "1923-10-29", "kategori": "D", "sinif": "E",
          "geometri_kaynagi": IBS + " + 1973 Avustralya-Endonezya Anlasmasi monuman koordinatlari - 1923 hatti icin VEKIL (degisti:false)",
          "dayanak": [S1895, PAPUA_ACT],
          "not": "SINIR-D-OKYANUSYA-0077: Papua (Avustralya idaresi) ile Hollanda arasinda 141D, 6,3233-5G. Manda DEGIL: 5G'nin guneyi Papua'dir."},
         **ortak),
    {"id": "d1923-oky-papua-alman-1885", "taraflar": ["ingiltere", "almanya"], "f": "1885-01-01", "t": "1906-09-01",
     "kategori": "D-YOK", "sinif": "YOK", "hat": None,
     "dayanak": [LONDRA],
     "not": "SINIR-D-OKYANUSYA-0077: Ingiliz ve Alman Yeni Ginesi arasindaki kara hatti. Uclari kaynakta var (Mitre Rock yakini 8G kiyi; 5Gx141D) ama ARA KOSELER BULUNAMADI (IBS 160 yalniz 'a series of lines' diyor; ANU Firth 2025 ve Wikipedia koseleri vermiyor). Uydurulmadi, cizilmez."},
    {"id": "d1923-oky-papua-alman-avustralya", "taraflar": ["avustralya", "almanya"], "f": "1906-09-01", "t": "1914-09-17",
     "kategori": "D-YOK", "sinif": "YOK", "hat": None,
     "dayanak": [LONDRA, PAPUA_ACT],
     "not": "SINIR-D-OKYANUSYA-0077: ayni hat, Papua'nin Avustralya'ya devrinden Alman Yeni Ginesi'nin isgaline kadar. Ara koseler BULUNAMADI. 1914-1923 Papua <-> Yeni Gine (isgal/manda) YAZILMADI: iki yan da atlasta 'avustralya', ayri kunye yok."},
]
# yeni kayıtlar kuzey kayıtlarından ÖNCE eklenir
ilk = min(kayit[k][0] for k in KUZEY)
satirlar[ilk:ilk] = [json.dumps(k, ensure_ascii=False) + "," for k in yeni]
io.open(DOSYA, "w", encoding="utf-8", newline="\n").write("\n".join(satirlar))
print("orta hat", orta_hat, km(orta_hat), "km · kuzey", km(kuzey_hat), "km ·", len(yeni), "yeni kayit")
