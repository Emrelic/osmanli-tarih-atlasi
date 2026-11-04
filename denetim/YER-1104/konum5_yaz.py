# -*- coding: utf-8 -*-
"""Parti 5 (EKSİK sırası 301-421, kalan 121 ad): konum4_yaz.py ile aynı zincir ve sınıflar.

EMRELİC kararı (4 Kasım 2026): olay maddesinde geçen ad, o yılda var olan gerçek bir kasabaysa YERLEŞİM'dir ve eklenir; yalnız ova, geçit,
tepe, ırmak, ordugâh, köy kenarı tarla gibi olay yerleri petek olmaz. Bu partide "OLAY YERİ + KASABA" sınıfı yoktur.
Çıktı: konum5.json · sahip5.json · KONUM5.md
"""
import os, sys, json, collections

KOK = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)
import girdi

BURA = os.path.dirname(os.path.abspath(__file__))
Y = [y for y in girdi.yukle(sessiz=True) if "lat" in y]
L = [r for r in json.load(open(os.path.join(BURA, "eksik_aday.json"), encoding="utf-8")) if r["sira"] > 300]

GN = "https://www.geonames.org/"
KONUM = {  # ad: (lat, lon, dayanak) — GeoNames arama satırı LAB SALI okudu
    "Kailua-Kona": (19.64016, -155.99912, "GeoNames " + GN + "5847504"),
    "Fontainebleau": (48.40908, 2.70177, "GeoNames " + GN + "3018074"),
    "Saint-Germain-en-Laye": (48.89643, 2.09040, "GeoNames " + GN + "2979783"),
    "Versailles": (48.80359, 2.13424, "GeoNames " + GN + "2969679"),
    "Neuilly-sur-Seine": (48.88460, 2.26965, "GeoNames " + GN + "2990611"),
    "Barcs": (45.96000, 17.45861, "GeoNames " + GN + "3055368"),
    "Selâ": (34.05310, -6.79846, "GeoNames " + GN + "2537763 (Salé, Fas)"),
    "Cezîretülhadrâ (Algeciras)": (36.13326, -5.45051, "GeoNames " + GN + "2522013 (Algeciras)"),
    "Thânesâr": (29.97323, 76.83214, "GeoNames " + GN + "1254657 (Thanesar, Haryana)"),
    "Somnât (Sûmenât)": (20.88808, 70.40129, "GeoNames " + GN + "1255818 (Somnāth, Gucerat — Verāval'in 4 km doğusu)"),
    "Misilmeri": (38.03183, 13.44795, "GeoNames " + GN + "2524126"),
    "Rânye": (21.25040, 42.84751, "GeoNames " + GN + "12546009 (Ranyah; GeoNames idare 'Asir' yazıyor — BEYANLI KONUM)"),
    "Menfûha": (24.60050, 46.72722, "GeoNames " + GN + "104433 (Manfūḩah — bugün Riyad'ın semti, 1819'da ayrı kasaba)"),
    "Oskol": (51.30250, 37.84613, "GeoNames " + GN + "487928 (Stary Oskol)"),
    "Altınköprü": (35.75344, 44.14727, "GeoNames " + GN + "98979 (Āltūn Kawbrī, Kerkük)"),
    "Kırkağaç": (39.10638, 27.66925, "GeoNames " + GN + "307623"),
    "Nazilli": (37.91631, 28.32225, "GeoNames " + GN + "303873"),
    "Gediz": (38.99389, 29.39131, "GeoNames " + GN + "314716 (Gediz, Kütahya)"),
    "Oltu": (40.53944, 41.98722, "GeoNames " + GN + "741160"),
    "Adakale": (44.71667, 22.45000, "GeoNames " + GN + "686694 (Ada Kaleh — 1970'te baraj gölü altında kaldı; tarihî konum)"),
    "Mozdok (Terek boyu)": (43.73976, 44.65157, "GeoNames " + GN + "524736"),
    "Fokşani (Focşani)": (45.70000, 27.18333, "GeoNames " + GN + "678015"),
    "Kalafat": (43.99069, 22.93328, "GeoNames " + GN + "683034 (Calafat)"),
    "Maçin": (45.24371, 28.13564, "GeoNames " + GN + "674230 (Măcin)"),
    "Pazar": (41.18019, 40.88663, "GeoNames " + GN + "740675 (Pazar, Rize)"),
    "Kızılrubat": (33.82112, 44.41145, "GeoNames " + GN + "387368 (As Sa‘dīyah — Osmanlı Kızılrubat'ı, Diyala)"),
    "Gerger": (38.02807, 39.03418, "GeoNames " + GN + "324126 (Gerger ilçe merkezi — tarihî Gerger kalesi Fırat kıyısında, birkaç km "
               "doğuda; BEYANLI KONUM)"),
    "Kadirli": (37.37389, 36.09611, "GeoNames " + GN + "310892"),
    "Blagay": (43.25892, 17.88815, "GeoNames " + GN + "3203970 (Blagaj, Mostar yöresi — kuzeydeki eş adlılar değil)"),
    "Kraków": (50.06143, 19.93658, "GeoNames " + GN + "3094802"),
    "Tellülkebîr": (30.54323, 31.78504, "GeoNames " + GN + "359710 (At Tall al Kabīr)"),
    "Ümmüdurman (Omdurman)": (15.64453, 32.47773, "GeoNames " + GN + "365137"),
    "Îmbâbe": (30.07625, 31.20666, "GeoNames " + GN + "355549 (Imbābah, Gize)"),
    # yer6: TDV tarifi + GeoNames
    "Rumkale": (37.27091, 37.83824, "GeoNames " + GN + "7619098 (Rum Kalesi, castle) · TDV tarifi: 'Fırat üzerinde inşa edilmiş Rumkale' "
                "(«Fırat») — kale-şehir; Halfeti 4 km kuzeyde"),
}
YAZIM = {
    "Sèvres": ("Sevr", "YÜKSEK", "② eklenecek nokta Sevr ile aynı yer (TDV: 'Paris'in banliyösü Sevr')"),
    "Tagdempt": ("Tâhert (Tiaret)", "DOĞRULA", "Tagdemt, antik Tâhert'in harabe yeri — atlas noktası modern Tiaret'te"),
    "Tinmellel": ("Tinmel (Tin Mal)", "YÜKSEK", "eş ad"), "Şâş": ("Taşkent", "YÜKSEK", "Şâş = Taşkent"),
    "Talas": ("Taraz (Evliya-Ata)", "YÜKSEK", "Talas = Taraz"), "Eski Hırsova": ("Hırsova (Hârșova)", "YÜKSEK", "eş ad"),
    "Meksiko": ("Tenochtitlan (Mexico City)", "YÜKSEK", "eş ad"), "Rey şehri": ("Rey", "YÜKSEK", "eş ad"),
    "Dânişmendli şehirleri: Kayseri": ("Kayseri", "YÜKSEK", "liste öğesi"), "Yanbolu": ("Yanbolu (Yambol)", "YÜKSEK",
                                                                                    "② eklenecek nokta (parti 4) ile aynı yer"),
    "Szászsebes": ("Szászsebes (Sebeş)", "YÜKSEK", "② eklenecek nokta (parti 4) ile aynı yer"),
    "Karánsebes": ("Karánşebeş (Caransebeş)", "YÜKSEK", "② eklenecek nokta (parti 1-3) ile aynı yer"),
    "Selâ (Salé)": ("Selâ", "YÜKSEK", "② eklenecek nokta (bu parti) ile aynı yer"),
    "Berdesîr (Kirman'ın kuzey merkezi)": ("Kirman", "DOĞRULA", "Ortaçağ Berdesîr (Güvâşîr) Kirman şehrinin kendisidir; bugünkü Bardsir "
                                                              "ilçesi ayrı — KASA TDV «Kirman» ile teyit eder"),
    "Çortomlık burnu": ("Çortomlık Seçi", "DOĞRULA", "maddenin yer_id'si; Seç burunda kuruldu"),
}
OLAY = {
    "Serdrûd (Tebriz yakınları)": "1408 savaşı", "Mugan Sahrası": "Nâdir'in tahta çıktığı sahra", "Menevâşî": "1874 savaşı (Darfur)",
    "Şeykan": "1883 savaşı (orman)", "Pul-i Şikeste": "1618 savaşı (köprü)", "Dücum": "1733 savaşı (Sâmerrâ yöresi)",
    "Kağaverd mevkii": "1745 savaşı", "Katvân (Siriderya ötesi)": "sınır sahrası", "Kûhek (Semerkant'a yaklaşık 42 km)": "1003 savaşı (tepe/ırmak)",
    "Karasu": "1204 savaşı (ırmak)", "İlâmış sahrası": "1210 savaşı", "Yassıçimen": "1230 savaşı", "Montaperti": "1260 savaşı (tepe)",
    "Vâdiilekke (Guadalete) veya Barbate kıyısı": "711 savaşı (ırmak)", "Merciuyûn (Mercayoun)": "1179 savaşı (vadi)",
    "Stavuçani": "1739 savaşı (köy kenarı)", "Aslıhanlar": "1921 savaşı (köy kenarı)", "Kocatepe": "1922 taarruz tepesi",
    "Boza suyu": "1789 Rimnik savaşı (ırmak)", "Nâdir'in karargâhı": "ordugâh", "Ordugâh": "ordugâh",
    "Şahdiz (Dizkûh)": "İsfahan yöresi Bâtınî kalesi — KALE/YAPI", "Hırtıs": "Ahıska kalesi (Khertvisi) — KALE/YAPI",
    "Altunkale": "Ahıska kalesi — KALE/YAPI (konum teyitsiz)", "Gülanber": "Şehrizor kalesi — KALE/YAPI (konum teyitsiz)",
    "Şüregel": "Kars yöresi kalesi — KALE/YAPI (konum teyitsiz)", "Cebelimesâr": "Yemen'de dağ kalesi — KALE/YAPI",
}
SEMT = {"Tophane", "Gruž", "Trianon (Versailles)"}
KOORDSUZ = {  # yerleşim ama konum doğrulanamadı → koordinat yok
    "Dara": "Darfur'daki Dara kalesi-kasabası; GeoNames yalnız kaba 'locality' (12,2 / 25,33) ve aynı adlı başka yerler verdi; TDV'de "
            "tarif yok — yanlış nokta riskli, koordinat yok",
    "Deyrülâkūl (Bağdat'a 50 mil)": "TDV tarifi: 'Dicle nehri kıyısında', 'Nûmâniye yakınında', 'Bağdat'a 50 mil' («Saffârîler», "
                                    "«Mütenebbî», «Muvaffak») — GeoNames'te kayıt yok; tarif tek noktaya yetmiyor, koordinat yok",
    "Ferâve": "TDV tarifi: Horasan'da, 'Merv, Serahs ve Ferâve arasındaki topraklar', Nesâ-Bâverd ile anılır («Çağrı Bey», «Selçuklular») "
              "— ribatın kalıntı yeri GeoNames'te bulunamadı, koordinat yok",
    "İtil (İdil ağzı)": "Hazar başkenti; TDV'de konum tarifi yok, arkeolojik yeri kesinleşmedi → KONUM BİLİNMİYOR (EMRELİC kararı)",
}
SAHIP = {
    "Kailua-Kona": ("hawaii-kralligi", "1819-11-01", "Hawaii Krallığı (Kamehameha sarayı)", "madde", "KAYNAKLI (madde)"),
    "Fontainebleau": ("fransa", "1762-11-03", "Fransa Krallığı", "madde", "KAYNAKLI (madde)"),
    "Saint-Germain-en-Laye": ("fransa-cumhuriyet", "1919-09-10", "Fransa (III. Cumhuriyet)", "madde", "KAYNAKLI (madde)"),
    "Versailles": ("fransa-cumhuriyet", "1919-06-28", "Fransa (III. Cumhuriyet)", "madde", "KAYNAKLI (madde)"),
    "Neuilly-sur-Seine": ("fransa-cumhuriyet", "1919-11-27", "Fransa (III. Cumhuriyet)", "madde", "KAYNAKLI (madde)"),
    "Barcs": ("macaristan-naiplik", "1921-08-20", "Sırp işgalinden Macar jandarmasına (Szigetvár ile) — Barcs'ın işgal dönemi KAYNAK-GEREK",
              "madde", "KAYNAK-GEREK"),
    "Selâ": ("muvahhidler", "1163-05-16", "Muvahhid şehri → 1248-04-26 Merînî (merini)", "madde (TDV)", "KAYNAKLI (madde)"),
    "Cezîretülhadrâ (Algeciras)": ("sevilla-abbadiler", "1086-06-30", "Hammûdîler → 450/1058 Abbâdîler (Sevilla) ele geçirdi → 1086 "
                                   "Murâbıtlar'a (murabitlar) bırakıldı", "TDV «Hammûdîler»", "KAYNAKLI (hicrî yıl)"),
    "Thânesâr": (None, "1014-07-02", "Hindu krallığı şehri; Gazneli akını (fetih değil) — sahip KAYNAK-GEREK", "madde (TDV)", "KAYNAK-GEREK"),
    "Somnât (Sûmenât)": ("caulukya", "1026-01-08", "Gazneli Mahmud 'Zilkade 416'da (8 Ocak 1026) Somnât Kalesi'ni fethetti' (geçici) — "
                         "öncül sahip Çaulukya KAYNAK-GEREK", "TDV «Mahmûd-ı Gaznevî», «Gazneliler»", "KAYNAKLI (fetih günü); öncül KAYNAK-GEREK"),
    "Misilmeri": ("sicilya-emirligi", "1068-01-01", "Palermo yolu üstünde; ABİ MERKEZ: Palermo — müslüman emîrlerde, 1072'de I. Ruggero "
                  "Palermo'yu aldı (sicilya-kralligi)", "TDV «Sicilya» (Palermo 1072)", "BEYANLI YAKLAŞIKLIK (zincir Palermo'dan)"),
    "Rânye": ("misir-kavalali", "1816-01-01", "Mısır (Kavalalı) garnizonu çekildi → Necid", "madde", "KAYNAKLI (madde)"),
    "Menfûha": ("misir-kavalali", "1819-08-13", "Dir'iye sonrası Mısır garnizonu", "madde", "KAYNAKLI (madde)"),
    "Oskol": ("rusya", "1596-01-01", "Moskova Çarlığı'nın bozkır garnizonu (kuruluş 1593 — KAYNAK-GEREK)", "madde", "KAYNAKLI (madde)"),
    "Altınköprü": ("safevi", "1625-01-01", "Bağdat'ın düşüşünden sonra 'Kerkük ve Musul şahın kumandanlarından Kāsım Han tarafından "
                   "zaptedildi' → Hâfız Ahmed Paşa Musul'u geri aldı. ABİ MERKEZ: Kerkük-Musul arası yol kasabası",
                   "TDV «Hâfız Ahmed Paşa»", "BEYANLI YAKLAŞIKLIK (zincir Kerkük/Musul'dan)"),
    "Kırkağaç": ("OSMANLI", "1920-06-22", "Osmanlı → Yunan işgali (yaz taarruzu)", "madde", "KAYNAKLI (madde)"),
    "Nazilli": ("OSMANLI", "1920-06-22", "Osmanlı kazası (TDV «Aydın»: Aydın sancağının kazası) — 1920 Yunan işgaline girip girmediği "
                "TDV'de yok; basamak ④ (DergiPark/Millî Mücadele monografisi) gerek", "TDV «Aydın» (idari bağ)", "KAYNAK-GEREK (işgal)"),
    "Gediz": ("OSMANLI", "1920-08-29", "Osmanlı kazası (TDV «Kütahya»: 1520'den kaza) — 1920 işgali TDV'de yok; basamak ④ gerek",
              "TDV «Kütahya» (idari bağ)", "KAYNAK-GEREK (işgal)"),
    "Oltu": ("safevi", "1534-01-01", "Safevî → Osmanlı (Pasin, Şüregel, Oltu kaleleri)", "madde", "KAYNAKLI (yıl)"),
    "Adakale": ("habsburg", "1738-08-17", "Avusturya → Osmanlı", "madde", "KAYNAKLI (madde)"),
    "Mozdok (Terek boyu)": ("rusya", "1763-01-01", "Rusya'nın kurduğu kale-kasaba (kur)", "madde", "KAYNAKLI (yıl)"),
    "Fokşani (Focşani)": ("OSMANLI", "1789-08-01", "'Fokşani kasabası' (1772 barış görüşmeleri); '1 Ağustos 1789'da Fokşan'da' bozgun — "
                          "Eflak-Boğdan sınırı, tâbi beylik (v:) hangisi KAYNAK-GEREK", "TDV «Vâsıf Ahmed Efendi», «Yûsuf Paşa, Koca»",
                          "KAYNAKLI (gün); v: KAYNAK-GEREK"),
    "Kalafat": ("OSMANLI", "1790-01-01", "Eflak (tâbi) kıyısı", "madde", "KAYNAK-GEREK (v:)"),
    "Maçin": ("OSMANLI", "1791-07-09", "Osmanlı Tuna kalesi", "madde", "KAYNAKLI (madde)"),
    "Pazar": ("OSMANLI", "1916-03-08", "Osmanlı → Rus işgali; ABİ MERKEZ: Rize (Çaykıran 2021)", "madde + ABİ MERKEZ", "BEYANLI YAKLAŞIKLIK"),
    "Kızılrubat": ("OSMANLI", "1917-12-06", "Osmanlı → İngiliz hattı (Hânekîn ile)", "madde", "KAYNAKLI (madde)"),
    "Gerger": ("memluk", "1467-01-01", "Şehsuvar Bey 'Memlükler'in elindeki Besni, Gerger, Birecik ve Rumkale şehirlerini de zaptetti' "
               "→ dulkadir", "TDV «Dulkadıroğulları»", "KAYNAKLI (yıl)"),
    "Kadirli": ("dulkadir", "1471-01-01", "Şehsuvar Bey'in üssü → 1471 ilkbaharı 'Yeşbek, Kadirli ve Kozan'dan Dulkadırlılar'ı çıkardı' "
                "→ memluk", "TDV «Dulkadıroğulları»", "KAYNAKLI (yıl/mevsim)"),
    "Rumkale": ("memluk", "1467-01-01", "Fırat üzerinde kale-şehir; Memlük → Şehsuvar Bey zaptetti (dulkadir). Sonraki dönemde kaza "
                "merkezi Halfeti'ye (TDV «Rıtl»: 'Rumkale'ninki (Halfeti)')", "TDV «Dulkadıroğulları», «Fırat»", "KAYNAKLI (yıl)"),
    "Blagay": ("hersek", "1448-01-01", "Stjepan Vukčić-Kosača'nın merkezi", "madde", "KAYNAKLI (madde)"),
    "Kraków": ("polonya-erken", "1525-04-08", "Polonya Krallığı başkenti", "madde", "KAYNAKLI (madde)"),
    "Tellülkebîr": ("misir-kavalali", "1882-09-13", "Hidiv Mısır'ı → İngiliz işgali", "madde", "KAYNAKLI (madde)"),
    "Ümmüdurman (Omdurman)": ("mehdi", "1898-09-02", "Mehdî devleti başkenti → İngiliz-Mısır (ingiliz-sudani)", "madde", "KAYNAKLI (madde)"),
    "Îmbâbe": ("misir-eyaleti", "1798-07-21", "Osmanlı Mısır'ı (Memlük beyleri) → Fransız (fransiz-misir-seferi)", "madde", "KAYNAKLI (madde)"),
}

S = []
for r in L:
    ad = r["ad"]
    o = dict(sira=r["sira"], ad=ad, sayi=r["sayi"], madde_t=r["madde_t"], madde=r["madde"], koordinat=None, konum="koordinat yok", tur=None)
    if ad in YAZIM:
        o.update(sinif="YAZIM", yazim=YAZIM[ad][0], yazim_guven=YAZIM[ad][1], not_=YAZIM[ad][2])
    elif ad in SEMT:
        o.update(sinif="SEMT/YAPI", not_="şehir içi semt, yapı ya da meydan — maddenin şehri taşır")
    elif ad in OLAY:
        o.update(sinif="KALE/YAPI" if "KALE/YAPI" in OLAY[ad] else "OLAY YERİ", not_=OLAY[ad])
    elif ad in KOORDSUZ:
        o.update(sinif="YERLEŞİM", not_=KOORDSUZ[ad])
    elif ad in KONUM:
        o.update(sinif="YERLEŞİM", not_="")
    else:
        o.update(sinif="YER DEĞİL", not_="bölge, ırmak, dağ, ada, rota ya da liste")
    if ad in KONUM:
        la, lo, dy = KONUM[ad]
        o.update(koordinat=[la, lo], konum=dy, tur=dy.split()[0])
        en = sorted((girdi.km(la, lo, y["lat"], y["lon"]), y["ad"]) for y in Y)[0]
        o["en_yakin"] = "%s (%.1f km)" % (en[1], en[0])
        if en[0] <= 3.0:
            o.update(sinif="YAZIM", yazim=en[1], yazim_guven="DOĞRULA", not_="konum atlas kaydına %.1f km — aynı yer olabilir" % en[0])
    S.append(o)
json.dump(S, open(os.path.join(BURA, "konum5.json"), "w", encoding="utf-8", newline="\n"), ensure_ascii=False, indent=1)
json.dump({k: list(v) for k, v in SAHIP.items()}, open(os.path.join(BURA, "sahip5.json"), "w", encoding="utf-8", newline="\n"),
          ensure_ascii=False, indent=1)
c = collections.Counter(x["sinif"] for x in S)
M = ["# KONUM5 — EKSİK sırası 301-421 (kalan 121 ad): sınıf ve konum\n",
     "Ölçen: LAB SALI · 4 Kasım 2026 · `eksik_aday.py 300 421` → `konum5_yaz.py`. Zincir konum4 ile aynı; EMRELİC kararıyla o yılda var olan "
     "gerçek kasaba YERLEŞİM'dir (olay maddesinde geçse de). Çin adı yok (CHGIS gerekmedi).\n",
     "**Özet:** %s.\n" % ", ".join("%s %d" % kv for kv in c.most_common()),
     "| # | ad | sınıf | koordinat | dayanak | en yakın atlas noktası | not | madde |", "|---|---|---|---|---|---|---|---|"]
for x in S:
    ko = "%.5f, %.5f" % tuple(x["koordinat"]) if x["koordinat"] else "—"
    nt = x.get("not_") or ""
    if x["sinif"] == "YAZIM":
        nt = "→ %s (%s) %s" % (x["yazim"], x["yazim_guven"], nt)
    M.append("| %d | %s | %s | %s | %s | %s | %s | %s — %s |" % (x["sira"], x["ad"], x["sinif"], ko, x["konum"], x.get("en_yakin", "—"),
                                                               nt.replace("|", "/"), x["madde_t"], x["madde"][:70].replace("|", "/")))
open(os.path.join(BURA, "KONUM5.md"), "w", encoding="utf-8", newline="\n").write("\n".join(M) + "\n")
print(dict(c))
for x in S:
    if x.get("en_yakin"):
        print(x["ad"], "→", x["en_yakin"], x["sinif"])
