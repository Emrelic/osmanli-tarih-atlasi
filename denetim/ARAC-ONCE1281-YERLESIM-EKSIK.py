# -*- coding: utf-8 -*-
"""ONCE1281-YERLESIM-OLC · ④ — 1000-1281 kuşağının başkent/büyük şehir ekseni
atlasta VAR mı? (ad normalleştirilmiş eşleşme + 3 km tarama, CLAUDE.md §11)

🔴 KOORDİNATLAR bu listede YAKLAŞIKTIR ve kaynak DEĞİLDİR: modern şehir
merkezi / arkeolojik alanın bilinen konumu, yalnız 3 km/100 km taramasını
sürmek için. Nokta ÖNERİSİ olarak yazılırken koordinat bir kaynaktan
(TDV/akademik gazeteer) TEYİT EDİLMELİDİR — raporda "koordinat: yaklaşık,
teyit bekler" diye damgalıdır.
TDV slug'ı olanlar için madde canlılığı ölçülür (302 takip edilmez).
Kullanım: py denetim/ARAC-ONCE1281-YERLESIM-EKSIK.py [--cik <json>]
"""
import sys, io, os, json, math
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
sys.path.insert(0, os.path.join(KOK, "denetim"))
import girdi
import importlib.util as _iu
_s = _iu.spec_from_file_location("nrm", os.path.join(KOK, "denetim", "ARAC-NORMAL-0903.py"))
nrm = _iu.module_from_spec(_s); _s.loader.exec_module(nrm)
_s = _iu.spec_from_file_location("tdv", os.path.join(KOK, "denetim", "ARAC-ONCE1281-YERLESIM-TDV.py"))
tdv = _iu.module_from_spec(_s); _s.loader.exec_module(tdv)

# (bölge, [adlar — ilk ad rapor adı], lat, lon, tdv_slug | None, kuşaktaki rolü)
EKSEN = [
 # — İslâm dünyası (TDV birincil)
 ("Irak", ["Bağdat", "Baghdad"], 33.31, 44.36, "bagdat", "Abbâsî başkenti"),
 ("Irak", ["Musul", "Mosul"], 36.34, 43.13, "musul", "Zengî/Lü'lü' merkezi"),
 ("Irak", ["Basra"], 30.51, 47.81, "basra", "liman şehri"),
 ("Irak", ["Vâsıt", "Vasit"], 32.19, 46.29, "vasit", "Irak eyalet merkezi"),
 ("Irak", ["Kûfe", "Kufe"], 32.03, 44.40, "kufe", "şehir"),
 ("Mısır", ["Kahire", "Cairo", "Kâhire"], 30.05, 31.25, "kahire", "Fâtımî/Eyyûbî/Memlük başkenti"),
 ("Mısır", ["Fustat", "Fustât"], 30.00, 31.23, "fustat", "Mısır'ın ticaret merkezi"),
 ("Mısır", ["İskenderiye", "Alexandria"], 31.20, 29.92, "iskenderiye", "liman"),
 ("Mısır", ["Dimyat", "Damietta"], 31.42, 31.81, "dimyat", "Haçlı seferleri hedefi"),
 ("Suriye", ["Şam", "Dımaşk", "Damascus"], 33.51, 36.29, "dimask", "Zengî/Eyyûbî merkezi"),
 ("Suriye", ["Halep", "Aleppo"], 36.20, 37.16, "halep", "Hamdânî/Zengî/Eyyûbî merkezi"),
 ("Suriye", ["Kudüs", "Jerusalem"], 31.78, 35.23, "kudus", "Kudüs Krallığı başkenti"),
 ("Suriye", ["Antakya", "Antioch"], 36.20, 36.16, "antakya", "Antakya Prinkepsliği"),
 ("Suriye", ["Akkâ", "Akka", "Acre"], 32.92, 35.07, "akka", "Haçlı liman başkenti"),
 ("Suriye", ["Trablusşam", "Trablus", "Tripoli"], 34.44, 35.83, "trablussam", "Trablus Kontluğu"),
 ("İran", ["Rey", "Rayy"], 35.59, 51.44, "rey", "Büyük Selçuklu merkezi"),
 ("İran", ["İsfahan", "Isfahan"], 32.65, 51.67, "isfahan", "Büyük Selçuklu başkenti"),
 ("İran", ["Hemedan", "Hamadan"], 34.80, 48.51, "hemedan", "Irak Selçuklu başkenti"),
 ("İran", ["Tebriz", "Tabriz"], 38.08, 46.29, "tebriz", "İlhanlı başkenti (1265 sonrası)"),
 ("İran", ["Merâga", "Maragheh"], 37.39, 46.24, "meraga", "İlhanlı ilk başkenti"),
 ("İran", ["Şiraz", "Shiraz"], 29.61, 52.53, "siraz", "Salgurlu merkezi"),
 ("İran", ["Kirman", "Kerman"], 30.28, 57.08, "kirman", "Kirman Selçukluları"),
 ("İran", ["Nîşâbûr", "Nişabur", "Nishapur"], 36.21, 58.80, "nisabur", "Horasan merkezi"),
 ("İran", ["Tûs", "Tus"], 36.49, 59.51, "tus", "Horasan şehri"),
 ("Horasan", ["Merv", "Mary"], 37.66, 62.19, "merv", "Sencer'in başkenti"),
 ("Horasan", ["Herat", "Herât"], 34.35, 62.20, "herat", "Horasan şehri"),
 ("Horasan", ["Belh", "Balkh"], 36.76, 66.90, "belh", "Horasan şehri"),
 ("Horasan", ["Gazne", "Ghazni"], 33.55, 68.42, "gazne", "Gazneli başkenti"),
 ("Horasan", ["Fîrûzkûh", "Firuzkuh", "Jam"], 34.40, 64.52, "firuzkuh", "Gurlu başkenti"),
 ("Mâverâünnehir", ["Semerkant", "Samarkand"], 39.65, 66.96, "semerkant", "Karahanlı merkezi"),
 ("Mâverâünnehir", ["Buhara", "Bukhara"], 39.77, 64.42, "buhara", "Karahanlı/Sâmânî merkezi"),
 ("Mâverâünnehir", ["Gürgenç", "Ürgenç", "Konye-Urgench"], 42.33, 59.15, "gurgenc", "Hârizmşah başkenti"),
 ("Mâverâünnehir", ["Otrar", "Farab"], 42.85, 68.30, "otrar", "1219 Otrar olayı"),
 ("Mâverâünnehir", ["Kâşgar", "Kaşgar", "Kashgar"], 39.47, 75.99, "kasgar", "Karahanlı merkezi"),
 ("Mâverâünnehir", ["Balasagun", "Balâsâgûn"], 42.75, 75.25, "balasagun", "Karahanlı/Karahıtay merkezi"),
 ("Anadolu", ["Konya", "Iconium"], 37.87, 32.49, "konya", "Türkiye Selçuklu başkenti"),
 ("Anadolu", ["Kayseri"], 38.72, 35.49, "kayseri", "Selçuklu şehri"),
 ("Anadolu", ["Sivas"], 39.75, 37.02, "sivas", "Dânişmend/Selçuklu şehri"),
 ("Anadolu", ["Erzurum"], 39.90, 41.27, "erzurum", "Saltuklu merkezi"),
 ("Anadolu", ["Ani"], 40.51, 43.57, "ani", "Bagratlı başkenti"),
 ("Anadolu", ["Trabzon"], 41.00, 39.72, "trabzon", "Trabzon Rum İmp. başkenti"),
 ("Anadolu", ["İznik", "Nikaia"], 40.43, 29.72, "iznik", "İznik İmp. başkenti"),
 ("Anadolu", ["Malatya", "Melitene"], 38.40, 38.36, "malatya", "Dânişmend/Selçuklu şehri"),
 ("Kafkas", ["Tiflis", "Tbilisi"], 41.69, 44.80, "tiflis", "Gürcistan başkenti"),
 ("Arabistan", ["Mekke", "Mecca"], 21.42, 39.83, "mekke", "Haremeyn"),
 ("Arabistan", ["Medine", "Medina"], 24.47, 39.61, "medine", "Haremeyn"),
 ("Arabistan", ["Aden", "Aden"], 12.79, 45.03, "aden", "Resûlî limanı"),
 ("Arabistan", ["San'a", "Sana", "Sanaa"], 15.35, 44.21, "sana", "Yemen merkezi"),
 ("Mağrib", ["Kayrevan", "Kairouan"], 35.68, 10.10, "kayrevan", "Zîrî merkezi"),
 ("Mağrib", ["Mehdiye", "Mahdia"], 35.50, 11.06, "mehdiye", "Zîrî başkenti"),
 ("Mağrib", ["Tunus", "Tunis"], 36.80, 10.18, "tunus", "Hafsî başkenti"),
 ("Mağrib", ["Merakeş", "Marrakesh", "Marrakech"], 31.63, -7.99, "merakes", "Murâbıt/Muvahhid başkenti"),
 ("Mağrib", ["Fas", "Fes", "Fez"], 34.06, -4.97, "fas", "Merînî başkenti"),
 ("Mağrib", ["Tilimsan", "Tlemcen"], 34.88, -1.32, "tilimsan", "Zeyyânî başkenti"),
 ("Endülüs", ["Kurtuba", "Córdoba", "Cordoba"], 37.88, -4.78, "kurtuba", "Endülüs merkezi"),
 ("Endülüs", ["İşbîliye", "Sevilla", "Seville"], 37.39, -5.99, "isbiliye", "Muvahhid Endülüs başkenti"),
 ("Endülüs", ["Gırnata", "Granada"], 37.18, -3.60, "girnata", "Nasrî başkenti"),
 ("Endülüs", ["Tuleytula", "Toledo"], 39.86, -4.02, "tuleytula", "1085 Kastilya fethi"),
 ("İtalya", ["Palermo", "Bâlerm"], 38.12, 13.36, "palermo", "Sicilya Krallığı başkenti"),
 ("Hind", ["Delhi", "Dehli"], 28.65, 77.23, "delhi", "Delhi Sultanlığı başkenti"),
 ("Hind", ["Lahor", "Lahore"], 31.55, 74.34, "lahor", "Gazneli merkezi"),
 ("Hind", ["Multan", "Mültan"], 30.20, 71.47, "multan", "Sind/Pencap merkezi"),
 # — Avrupa / Bizans (TDV kapsamı dışında kalabilir)
 ("Bizans", ["İstanbul", "Konstantinopolis", "Constantinople"], 41.01, 28.98, "istanbul", "Bizans başkenti"),
 ("Bizans", ["Selanik", "Thessaloniki"], 40.64, 22.94, "selanik", "Bizans ikinci şehri"),
 ("Balkan", ["Tırnova", "Veliko Tarnovo", "Tarnovo"], 43.08, 25.63, "tirnova", "İkinci Bulgar başkenti"),
 ("Avrupa", ["Venedik", "Venezia", "Venice"], 45.44, 12.33, "venedik", "Venedik Cumhuriyeti"),
 ("Avrupa", ["Cenova", "Genova", "Genoa"], 44.41, 8.93, "cenova", "Cenova Cumhuriyeti"),
 ("Avrupa", ["Roma", "Rome"], 41.89, 12.48, "roma", "Papalık"),
 ("Avrupa", ["Paris"], 48.86, 2.35, None, "Kapet başkenti"),
 ("Avrupa", ["Londra", "London"], 51.51, -0.13, None, "İngiltere"),
 ("Avrupa", ["Aachen", "Aix-la-Chapelle"], 50.78, 6.08, None, "Kutsal Roma taç giyme"),
 ("Avrupa", ["Krakov", "Kraków", "Krakow"], 50.06, 19.94, None, "Polonya başkenti"),
 ("Avrupa", ["Estergon", "Esztergom", "Esztergon"], 47.79, 18.74, "estergon", "Macar başkenti"),
 ("Rus", ["Kiev", "Kiyev", "Kyiv"], 50.45, 30.52, "kiev", "Kiev Rus başkenti"),
 ("Rus", ["Novgorod"], 58.52, 31.27, None, "Novgorod Cumhuriyeti"),
 ("Rus", ["Vladimir"], 56.13, 40.41, None, "Vladimir-Suzdal başkenti"),
 ("Volga", ["Bulgar", "Bolgar"], 54.98, 49.05, "bulgar", "İdil Bulgar başkenti"),
 ("Moğol", ["Karakurum", "Karakorum"], 47.20, 102.82, "karakurum", "Moğol başkenti"),
 # — Doğu / Güney / GD Asya
 ("Çin", ["Kaifeng", "Bianjing"], 34.80, 114.31, None, "Kuzey Song başkenti"),
 ("Çin", ["Hangzhou", "Lin'an"], 30.25, 120.17, None, "Güney Song başkenti"),
 ("Çin", ["Pekin", "Beijing", "Zhongdu", "Dadu", "Hanbalık"], 39.90, 116.40, None, "Jin/Yuan başkenti"),
 ("Çin", ["Xi'an", "Chang'an"], 34.26, 108.94, None, "eski başkent"),
 ("Çin", ["Xingqing", "Yinchuan"], 38.47, 106.27, None, "Batı Xia başkenti"),
 ("Japonya", ["Kyōto", "Kyoto", "Heian-kyō"], 35.01, 135.77, None, "Heian başkenti"),
 ("Japonya", ["Kamakura"], 35.32, 139.55, None, "Kamakura şogunluğu"),
 ("Kore", ["Kaesong", "Kaegyong"], 37.97, 126.55, None, "Goryeo başkenti"),
 ("GD Asya", ["Thăng Long", "Hanoi", "Hanoy"], 21.03, 105.85, None, "Đại Việt başkenti"),
 ("GD Asya", ["Angkor", "Yasodharapura"], 13.41, 103.87, None, "Khmer başkenti"),
 ("GD Asya", ["Bagan", "Pagan"], 21.17, 94.86, None, "Pagan başkenti"),
 ("GD Asya", ["Sukhothai"], 17.01, 99.70, None, "Sukhothai başkenti (13. yy)"),
 ("GD Asya", ["Palembang", "Srivijaya"], -2.99, 104.76, None, "Srivijaya merkezi"),
 ("Hind", ["Polonnaruva", "Polonnaruwa"], 7.94, 81.00, None, "Sri Lanka başkenti"),
 ("Hind", ["Thanjavur", "Tanjore"], 10.79, 79.14, None, "Çola başkenti"),
 ("Hind", ["Kannauj", "Kanauj"], 27.05, 79.92, None, "Gahadavala merkezi"),
 # — Afrika
 ("Afrika", ["Gao", "Kawkaw"], 16.27, -0.04, None, "Gao/Songhay merkezi"),
 ("Afrika", ["Timbuktu", "Tombuktu"], 16.77, -3.01, None, "ticaret şehri"),
 ("Afrika", ["Kumbi Salih", "Koumbi Saleh"], 15.77, -7.97, None, "Gana başkenti"),
 ("Afrika", ["Kilve", "Kilwa", "Kilwa Kisiwani"], -8.96, 39.51, "kilve", "Kilve Sultanlığı"),
 ("Afrika", ["Mogadişu", "Makdişu", "Mogadishu"], 2.04, 45.34, "mogadisu", "Doğu Afrika limanı"),
 ("Afrika", ["Zeyla", "Zeila"], 11.35, 43.47, "zeyla", "Adal limanı"),
 ("Afrika", ["Lalibela", "Roha"], 12.03, 39.04, None, "Zagwe başkenti"),
 ("Afrika", ["Büyük Zimbabve", "Great Zimbabwe"], -20.27, 30.93, None, "Zimbabve merkezi"),
 ("Afrika", ["Mapungubwe"], -22.19, 29.39, None, "Mapungubwe başkenti"),
 ("Afrika", ["İfe", "Ife", "Ile-Ife"], 7.48, 4.56, None, "Yoruba merkezi"),
 # — Amerika
 ("Amerika", ["Tula", "Tollan"], 20.06, -99.34, None, "Tolték başkenti"),
 ("Amerika", ["Chichén Itzá", "Chichen Itza"], 20.68, -88.57, None, "Maya merkezi"),
 ("Amerika", ["Mayapán", "Mayapan"], 20.63, -89.46, None, "Maya merkezi (13. yy)"),
 ("Amerika", ["Cahokia"], 38.66, -90.06, None, "Mississippi kültürü merkezi"),
 ("Amerika", ["Chaco Kanyonu", "Chaco Canyon", "Pueblo Bonito"], 36.06, -107.96, None, "Anasazi merkezi"),
 ("Amerika", ["Chan Chan"], -8.11, -79.07, None, "Chimú başkenti"),
 ("Amerika", ["Cusco", "Cuzco", "Kuzko"], -13.53, -71.97, None, "İnka çekirdeği"),
]


def km(a, b, c, d):
    return girdi.km(a, b, c, d)


def main():
    Y = girdi.yukle(sessiz=True)
    idx = {}
    for y in Y:
        for p in [y["ad"].split("(")[0]] + __import__("re").findall(r"\(([^)]*)\)", y["ad"]):
            for q in p.split("/"):
                idx.setdefault(nrm.norm(q.strip()), []).append(y)
    out = []
    for bolge, adlar, la, lo, slug, rol in EKSEN:
        ad_es = []
        for a in adlar:
            ad_es += idx.get(nrm.norm(a), [])
        yakin = sorted(((km(la, lo, y["lat"], y["lon"]), y) for y in Y), key=lambda x: x[0])
        en = yakin[0]
        uc = [y for d, y in yakin if d <= 3.0]
        onbes = [y for d, y in yakin if d <= 15.0]
        eslesen = None
        ad_es = [y for y in ad_es if km(la, lo, y["lat"], y["lon"]) <= 50]   # adaş başka yer (Tula/Tamaulipas 329 km) sayılmaz
        if ad_es:
            eslesen = min(ad_es, key=lambda y: km(la, lo, y["lat"], y["lon"]))
            durum = "VAR (ad)"
        elif uc:
            eslesen = uc[0]; durum = "VAR (3 km)"
        elif onbes:
            eslesen = onbes[0]; durum = "YAKIN (≤15 km, ad tutmadı — insan bakmalı)"
        else:
            durum = "YOK"
        tdv_kod = None
        if slug:
            tdv_kod, _ = tdv.cek(slug)
        r = {"bolge": bolge, "ad": adlar[0], "adlar": adlar, "rol": rol,
             "koordinat_oneri": [la, lo], "koordinat_kaynak": "yaklaşık — teyit bekler",
             "durum": durum,
             "atlas_ad": eslesen["ad"] if eslesen else None,
             "atlas_uzaklik_km": round(km(la, lo, eslesen["lat"], eslesen["lon"]), 1) if eslesen else None,
             "atlas_ilk_donem": (min((p["f"] for k in ("s", "d", "v") for p in (eslesen.get(k) or []) if p.get("f")), default=None) if eslesen else None),
             "en_yakin_ad": en[1]["ad"], "en_yakin_km": round(en[0], 1),
             "tdv_slug": slug, "tdv_http": tdv_kod}
        out.append(r)
        print(f"{bolge:14} {adlar[0]:18} {durum:28} {r['atlas_ad'] or '-':28} "
              f"{r['atlas_uzaklik_km'] if r['atlas_uzaklik_km'] is not None else '':>6} "
              f"en yakın {r['en_yakin_ad'][:22]} {r['en_yakin_km']} km · TDV {slug}:{tdv_kod}")
    say = {}
    for r in out:
        k = r["durum"].split(" ")[0]
        say[k] = say.get(k, 0) + 1
    print("ÖZET", len(out), say)
    if "--cik" in sys.argv:
        json.dump(out, io.open(sys.argv[sys.argv.index("--cik") + 1], "w", encoding="utf-8"),
                  ensure_ascii=False, indent=1)


if __name__ == "__main__":
    main()
