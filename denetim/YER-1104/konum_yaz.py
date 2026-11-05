# -*- coding: utf-8 -*-
"""EKSIK-ADAY'ın koordinatsız 110 adayı: elle sınıf (EMRELİC kuralı) + Osmanlı/İslâm dünyası yerleşimleri için GeoNames konumu.
Sınıflar: YERLEŞİM (petek noktası olabilir) · OLAY YERİ (savaş/ova/geçit — yalnız kronoloji odağı) · KALE/YAPI · ANTİK YERLEŞİM
(Pleiades'te tek eşleşme bulunamadı) · YER DEĞİL (kişi, kültür, dönem, bölge, ada, olay adı).
Konum: TDV'de madde yoksa (Arad, Otrar, Karlofça… için TDV araması madde başlığı döndürmedi) EMRELİC kuralının 4. basamağı:
GeoNames, ad ve ülke maddeyle tutuyorsa → 'beyanlı konum (GeoNames; ad + ülke maddeyle tutuyor)'. LAB SALI GeoNames sonuç sayfasını
(uygulama tarayıcısı) okudu; geonameid URL'si satırda."""
import os, json, collections

BURA = os.path.dirname(os.path.abspath(__file__))
L = json.load(open(os.path.join(BURA, "eksik_aday.json"), encoding="utf-8"))
K = [r for r in L if not r["koordinat"] and not (r.get("elle") or "").startswith("YAZIM")]


def dms(s):
    import re
    m = re.match(r"([NSEW]) (\d+)° (\d+)′ (\d+)''", s)
    d = int(m.group(2)) + int(m.group(3)) / 60 + int(m.group(4)) / 3600
    return round(-d if m.group(1) in "SW" else d, 5)


GEO = {  # ad: (lat, lon, geonames URL, GeoNames satırı özeti)
    "Karlofça": (dms("N 45° 12′ 10''"), dms("E 19° 56′ 1''"), "https://www.geonames.org/3190101/sremski-karlovci.html",
                 "Sremski Karlovci (alt adlar arasında Karlofça), Sırbistan, Voyvodina"),
    "Arad": (dms("N 46° 11′ 0''"), dms("E 21° 19′ 0''"), "https://www.geonames.org/686254/arad.html", "Arad, Romanya, Arad ili merkezi"),
    "Otrar": (dms("N 42° 54′ 48''"), dms("E 68° 20′ 37''"), "https://www.geonames.org/1520295/otrar.html",
              "Otrar (Otyrar), Kazakistan, Türkistan ili — yerleşim; antik höyük (Otyrar-tobe) yakını, KASA höyük konumunu tercih edebilir"),
    "Bucaş": (dms("N 49° 3′ 44''"), dms("E 25° 23′ 41''"), "https://www.geonames.org/711348/buchach.html", "Buchach (Bucac), Ukrayna, Ternopil"),
    "Küçük Kaynarca": (dms("N 43° 59′ 34''"), dms("E 27° 30′ 25''"), "https://www.geonames.org/730504/kaynardzha.html",
                       "Kaynardzha, Bulgaristan, Silistre"),
    "Sevr": (dms("N 48° 49′ 22''"), dms("E 2° 13′ 3''"), "https://www.geonames.org/2974678/sevres.html",
             "Sèvres (alt ad Sevr), Fransa, Hauts-de-Seine (ilk sorgu Deux-Sèvres/Niort verdi — elle düzeltildi)"),
    "Tepedelen": (dms("N 40° 17′ 45''"), dms("E 20° 1′ 9''"), "https://www.geonames.org/781443/tepelene.html", "Tepelenë, Arnavutluk"),
    "Karánşebeş (Caransebeş)": (dms("N 45° 25′ 0''"), dms("E 22° 13′ 0''"), "https://www.geonames.org/682729/caransebes.html",
                                "Caransebeş, Romanya, Caraș-Severin"),
    "Çayeli": (dms("N 41° 5′ 9''"), dms("E 40° 43′ 19''"), "https://www.geonames.org/749502/cayeli.html", "Çayeli (Mapavri), Türkiye, Rize"),
    "Nukuʻalofa": (-21.13667, -175.20111, "https://www.geonames.org/4032402/nuku-alofa.html", "Nuku'alofa, Tonga başkenti"),
}
SINIF = {
    "Çamurlu": ("OLAY YERİ", "1413 Çamurlu Savaşı (Bulgaristan, Samokov yöresi)"),
    "Karlofça": ("YERLEŞİM", "antlaşma yeri, kasaba"), "Dumlupınar": ("OLAY YERİ", "Büyük Taarruz / Başkomutan Meydan Muharebesi"),
    "Arad": ("YERLEŞİM", "şehir (madde Világos teslimi — Arad ilinde)"), "İnönü": ("OLAY YERİ", "İnönü muharebeleri"),
    "Nukuʻalofa": ("YERLEŞİM", "şehir"), "Berka": ("YER DEĞİL", "Berka = Bingazi/Kirenayka bölgesi"), "Otrar": ("YERLEŞİM", "şehir"),
    "Çayeli": ("YERLEŞİM", "kasaba"), "Karaburun": ("OLAY YERİ", "Börklüce Mustafa isyanı, Karaburun yarımadası"),
    "Otlukbeli": ("OLAY YERİ", "1473 savaşı"), "Mercidabık": ("OLAY YERİ", "1516 savaşı"), "Ridaniye": ("OLAY YERİ", "1517 savaşı"),
    "Haçova (Mezőkeresztes)": ("OLAY YERİ", "1596 meydan muharebesi"), "Granbosa (Gramvousa)": ("KALE/YAPI", "ada kalesi"),
    "Spinalonga": ("KALE/YAPI", "ada kalesi"), "Bucaş": ("YERLEŞİM", "antlaşma yeri, kasaba"),
    "Küçük Kaynarca": ("YERLEŞİM", "antlaşma yeri, köy"), "Sevr": ("YERLEŞİM", "antlaşma yeri, Paris banliyösü (ülke dışı)"),
    "Tepedelen": ("YERLEŞİM", "kasaba"), "Pandeleimon Manastırı": ("KALE/YAPI", "Yanya gölü adasında manastır"),
    "Karánşebeş (Caransebeş)": ("YERLEŞİM", "şehir/kale"),
}
YER_DEGIL = {"Tongatapu", "Tembladera", "Tell Halaf (Guzana)", "'Upolu", "Samoa", "Mussau Islands", "Anir Group",
             "Deer Stone-Khirigsuur Complex (DSKC)", "Lapita Cultural Complex", "Bismarck Archipelago", "Usolsky District", "Biainili",
             "Šuppiluliuma II", "Ḫattušili I", "Buddha parinirvāṇa", "Bimbisāra", "Ajātaśatru", "Expulsio regum", "primi consules",
             "Hallstatt C", "D-Übergang", "Roma condita (traditio)", "Aegyptus", "Mādā", "Proto-Elamite script", "Trypillia A1-2",
             "Precucuteni II", "Formative LBK", "Transdanubien", "Tradición Topará", "Southern Neolithic", "Valle de Tehuacan",
             "Kom el-Ahmar"}
OLAY_ANTIK = {"Kynoskephalai (Tesalya)", "Leuktra (Boiotia)", "Sybota (Epiros kıyısı)", "Kunaksa", "Eltekeh"}

S = []
for r in K:
    ad = r["ad"]
    if ad in SINIF:
        sinif, not_ = SINIF[ad]
    elif ad in YER_DEGIL:
        sinif, not_ = "YER DEĞİL", "kişi, kültür, dönem, bölge ya da ada adı"
    elif ad in OLAY_ANTIK:
        sinif, not_ = "OLAY YERİ", "antik savaş yeri"
    else:
        sinif, not_ = "ANTİK YERLEŞİM", "Pleiades'te tek/yakın eşleşme yok — Pleiades kimliği elle seçilmeli (koordinat yok)"
    g = GEO.get(ad) if sinif == "YERLEŞİM" else None
    S.append(dict(sira=r["sira"], ad=ad, sinif=sinif, not_=not_, madde_t=r["madde_t"], madde=r["madde"],
                  koordinat=[g[0], g[1]] if g else None,
                  konum=("beyanlı konum (GeoNames; ad + ülke maddeyle tutuyor) — %s · %s" % (g[3], g[2])) if g else "koordinat yok"))
json.dump(S, open(os.path.join(BURA, "konum.json"), "w", encoding="utf-8", newline="\n"), ensure_ascii=False, indent=1)
c = collections.Counter(x["sinif"] for x in S)
M = ["# TDV-KONUM — EKSIK-ADAY'ın koordinatsız %d adayı: sınıf ve konum\n" % len(S),
     "Ölçen: LAB SALI · 4 Kasım 2026 · `konum_yaz.py` · EMRELİC kuralı (TDV tarifi → GeoNames beyanlı konum; tutmazsa koordinat yok).\n",
     "**Özet:** %s. YERLEŞİM'lerin %d'i konumlu.\n" % (", ".join("%s %d" % kv for kv in c.most_common()),
                                                      sum(1 for x in S if x["koordinat"])),
     "- **TDV:** Arad, Otrar ve Karlofça için TDV aramasında madde başlığı çıkmadı (yalnız madde içi anılma); TDV tarifi okunamadı. "
     "Kural basamağı 4 uygulandı: GeoNames, ad + ülke maddeyle tutuyorsa beyanlı konum.",
     "- **OLAY YERİ ve KALE/YAPI petek noktası değildir** (toprağı yanlış sahiplere dağıtır) — kronoloji odağı olarak kalır.",
     "- **ANTİK YERLEŞİM:** Pleiades araması çok sonuç verdi ya da başlık uyuşmadı; Pleiades kimliği elle seçilene dek koordinat yok.\n",
     "- **Mükerrer (ad + 3 km):** 10 konumun hiçbirinin 3 km'sinde atlas noktası yok; en yakınlar: Karlofça–Varadin 7,5 km, "
     "Nukuʻalofa–Nukuleka 7,9 km, Sevr–Paris 10,6 km, Bucaş–Yazlofça 12,7 km (ölçüldü, girdi.km).\n",
     "## YERLEŞİM (KASA ekleyebilir — sahip madde kaynağıyla teyit)\n",
     "| # | ad | koordinat | konum dayanağı | madde |", "|---|---|---|---|---|"]
for x in S:
    if x["sinif"] == "YERLEŞİM":
        ko = "%.5f, %.5f" % tuple(x["koordinat"]) if x["koordinat"] else "—"
        M.append("| %d | %s | %s | %s | %s — %s |" % (x["sira"], x["ad"], ko, x["konum"], x["madde_t"], x["madde"][:70].replace("|", "/")))
for baslik, s in (("OLAY YERİ (petek değil)", "OLAY YERİ"), ("KALE/YAPI (petek değil)", "KALE/YAPI"),
                  ("ANTİK YERLEŞİM (koordinat yok)", "ANTİK YERLEŞİM"), ("YER DEĞİL", "YER DEĞİL")):
    M += ["\n## %s\n" % baslik, "| # | ad | not | madde |", "|---|---|---|---|"]
    for x in S:
        if x["sinif"] == s:
            M.append("| %d | %s | %s | %s — %s |" % (x["sira"], x["ad"], x["not_"], x["madde_t"], x["madde"][:70].replace("|", "/")))
open(os.path.join(BURA, "TDV-KONUM.md"), "w", encoding="utf-8", newline="\n").write("\n".join(M))
print(dict(c))
