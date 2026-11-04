# -*- coding: utf-8 -*-
"""Parti 4 (EKSİK sırası 151-300): elle sınıf + zincir — mükerrer (3 km) → Pleiades (antik) / TDV tarifi + GeoNames (İslâm dünyası ve
Osmanlı) / GeoNames beyanlı (öteki) → olay yeri ayrımı. CHGIS: bu partide Çin adı yok.

Sınıflar: YERLEŞİM (petek noktası olabilir) · OLAY YERİ (savaş/teslim/ordugâh — kronoloji odağı) · OLAY YERİ + KASABA (savaşın adını
taşıyan gerçek kasaba: madde olay maddesidir, ama kasaba atlasta yok — KASA petek isterse konum hazır) · SEMT/YAPI (bir şehrin içi: semt,
saray, kapı, kale) · ANTİK YERLEŞİM · YER DEĞİL (bölge, ırmak, dağ, kültür, dönem, halk, liste) · YAZIM (atlasta başka adla var).
Pleiades konumları `pleiades.stoa.org/places/<id>` reprPoint'i; GeoNames konumları LAB SALI'nin okuduğu arama satırı (geonameid satırda).
Referanssız Pleiades sonuçlarının 11'i yanlış yer verdi (eksik_aday.py PLEIADES_RED) — yalnız aşağıdaki hedefli sorgular kabul edildi.
Çıktı: konum4.json · sahip4.json · KONUM4.md
"""
import os, sys, json, collections

KOK = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)
import girdi

BURA = os.path.dirname(os.path.abspath(__file__))
Y = [y for y in girdi.yukle(sessiz=True) if "lat" in y]
L = [r for r in json.load(open(os.path.join(BURA, "eksik_aday.json"), encoding="utf-8")) if 150 < r["sira"] <= 300]

PL = "https://pleiades.stoa.org/places/"
GN = "https://www.geonames.org/"
# ad: (lat, lon, dayanak)
KONUM = {
    "Bhirrana (Bhirdana)": (29.55468, 75.54796, "Pleiades " + PL + "897851371 (Bhirrana)"),
    "Szászsebes (Sebeş)": (45.95646, 23.57100, "GeoNames " + GN + "667526 (Sebeş, Romanya, Alba) — Pleiades 207436 ile 0,4 km tutuyor"),
    "Jebel Barkal": (18.56595, 31.85374, "Pleiades " + PL + "805634 (Napata, settlement)"),
    "Elea (Lucania)": (40.16050, 15.15616, "Pleiades " + PL + "452488 (Velia/Elea, settlement)"),
    "Olbia": (46.69239, 31.90586, "Pleiades " + PL + "226546 (Borysthenes/Olbia)"),
    "Lokroi (Bruttium)": (38.22630, 16.24434, "Pleiades " + PL + "452369 (Lokroi Epizephyrioi)"),
    "Kirrha": (38.42958, 22.44555, "Pleiades " + PL + "540868 (Kirra)"),
    "Burzahom (Burzahama)": (34.16735, 74.87704, "GeoNames " + GN + "1429703 (Burzahom köyü, Srinagar) — Pleiades kapsamı dışı; "
                             "höyük köyün yanında, BEYANLI KONUM"),
    "Babaeski": (41.42809, 27.09660, "GeoNames " + GN + "751371 (Babaeski ilçe merkezi) · TDV tarifi: Lüleburgaz-Edirne yolu üstü"),
    "Osnabrück": (52.27411, 8.05056, "GeoNames " + GN + "2856883"),
    "Drivasto": (42.12306, 19.59139, "GeoNames " + GN + "3185761 (Drisht, Arnavutluk, İşkodra) — Drivasto = Drisht (TDV «Arnavutluk»da "
                 "Leş ve Draç'la birlikte anılan Venedik kalesi)"),
    "Serav (Serâb)": (37.94080, 47.53670, "GeoNames " + GN + "117368 (Sarāb, Doğu Azerbaycan) · TDV tarifi: 'Tebriz ile Erdebil arasındaki Serav'"),
    "Vasvár": (47.04928, 16.79954, "GeoNames " + GN + "3043033"),
    "Versec": (45.11667, 21.30361, "GeoNames " + GN + "784136 (Vršac, Sırbistan)"),
    "Facset": (45.85000, 22.18333, "GeoNames " + GN + "678490 (Făget, Romanya, Timiş — Bacău'daki eş ad değil)"),
    "Mehádia": (44.90083, 22.36694, "GeoNames " + GN + "673619 (Mehadia, Romanya, Caraş-Severin)"),
    "Csákóvár": (45.50806, 21.12861, "GeoNames " + GN + "681971 (Ciacova, Romanya, Timiş)"),
    "Ayastefanos (Yeşilköy)": (40.95900, 28.82240, "GeoNames " + GN + "737563 (Yeşilköy, Bakırköy, İstanbul)"),
    "Novigrad": (47.90852, 19.04806, "GeoNames " + GN + "3047356 (Nógrád köyü; Novigrad = Nógrád kalesi, Vác kuzeyi)"),
    "Fethülislâm": (44.61147, 22.60955, "GeoNames " + GN + "789485 (Kladovo) · TDV «Sırbistan», «Semendire»: 'Fethülislâm (Kladovo)'"),
    "Missolonghi": (38.37138, 21.43151, "GeoNames " + GN + "257186 (Messolonghi)"),
    # OLAY YERİ + KASABA
    "Yanbolu (Yambol)": (42.48243, 26.50006, "GeoNames " + GN + "725578"),
    "Nizip": (37.00972, 37.79417, "GeoNames " + GN + "303798"),
    "Kumanova": (42.13279, 21.71585, "GeoNames " + GN + "788886 (Kumanovo)"),
    "Zenta": (45.92750, 20.07722, "GeoNames " + GN + "785965 (Senta)"),
    "Dömeke": (39.12722, 22.30028, "GeoNames " + GN + "263000 (Domokos)"),
    "Bileća": (42.87645, 18.42967, "GeoNames " + GN + "3204161"),
    "Salankamen": (45.14249, 20.25765, "GeoNames " + GN + "785529 (Stari Slankamen)"),
    "Parkan": (47.79495, 18.71750, "GeoNames " + GN + "3057379 (Štúrovo; Macarca Párkány)"),
    "Sen Gotar": (46.95261, 16.27358, "GeoNames " + GN + "3044669 (Szentgotthárd)"),
    "Hisarcık (Grocka)": (44.67152, 20.71648, "GeoNames " + GN + "790132 (Grocka)"),
    "Kozluca": (43.33058, 27.59908, "GeoNames " + GN + "726591 (Suvorovo; GeoNames alt adı Kozludzha)"),
}
YAZIM = {  # ad: (atlas kaydı, güven, not)
    "Alexandria": ("İskenderiye", "YÜKSEK", "eş ad"), "Ninua": ("Ninova", "YÜKSEK", "Akkadca ad"), "Nīnawā": ("Ninova", "YÜKSEK", "Arapça ad"),
    "Buda": ("Aquincum-Óbuda-Pest", "DOĞRULA", "Buda = Budin; atlas kaydı Óbuda/Aquincum adını taşıyor — Buda kalesi ~3 km güneyde"),
    "Kerkyra": ("Korfu", "YÜKSEK", "eş ad"), "Korkyra": ("Korfu", "YÜKSEK", "eş ad"), "Khalkis (Euboia)": ("Eğriboz", "YÜKSEK", "Khalkis = Eğriboz"),
    "Rhegion": ("Reggio Calabria", "YÜKSEK", "eş ad"), "Gadir": ("Cádiz", "YÜKSEK", "Fenike adı"), "Kût": ("Kût el-Amâre", "YÜKSEK", "kısaltma"),
    "Halil": ("Hebron", "YÜKSEK", "el-Halîl = Hebron"), "Uşi (Ouchy)": ("Lozan", "YÜKSEK", "Ouchy Lozan'ın liman semti"),
    "Morača ile Ribnica'nın kavuştuğu yer": ("Podgorica", "YÜKSEK", "Podgorica'nın yeri (madde yer_id'si zaten Podgorica)"),
    "Sirem": ("Varadin (Petrovaradin)", "DOĞRULA", "Sirem bölgedir; madde yer_id'si Varadin — yer alanı bölge adı"),
}
OLAY = {
    "Marchfeld": "Kressenbrunn savaşı ovası", "Majtény": "Kuruc ordusunun teslim yeri (Majtény ovası)",
    "Világos (Şiria)": "1849 Macar teslimi (Şiria köyü, Arad ili)", "Thyrea (Kynouria)": "antik savaş (Champions)",
    "Hysiai (Argolis)": "antik savaş (Pleiades 570306 Hysiai)", "İzladi geçidi": "1443 geçit savaşı", "Kalûgerân (Călugăreni)": "1595 savaşı (Eflak)",
    "Neajlov bataklığı": "1595 savaşı alanı", "Şıpka Geçidi": "1877 geçit savaşı", "Erzurum-Aziziye tabyaları": "1877 tabya savaşı (Erzurum)",
    "İpsili (Sisam karşısı)": "Cüneyd Bey'in sığındığı kale", "Fethâbâd": "Nâdir Şah'ın öldürüldüğü ordugâh (Kuçan yöresi)",
    "Kosmidion": "1410 savaşı (İstanbul surları dışı)", "Ulaş": "1696 savaşı (Bega/Ulaş suyu)", "Safra geçidi": "1812 geçit savaşı (Hicaz)",
    "Bisel": "1815 savaşı (Hicaz)", "Koyunhisar": "1302 Bapheus savaşı — yeri tartışmalı", "İnceğiz": "1412 savaşı",
    "Dede Garkın sahrası": "1516 savaşı (Koçhisar)", "Terrûce": "Tomanbay'ın yakalandığı yer (Buhayre)", "Kerden": "TDV: 'bir ordugâhta imzalanan "
    "Kerden Antlaşması' — ordugâh, konum belirsiz", "Abalar köyü": "II. Bayezid'in öldüğü yer (Çorlu yolu)",
    "Sîdî Ferruc": "1830 Fransız çıkarma yeri (Cezayir kıyısı)", "Kuleli Burgaz (Pythion)": "kale (Dimetoka yöresi) — KALE/YAPI",
    "Hodidjed": "eski Saraybosna kalesi (Vrhbosna) — KALE/YAPI",
}
OLAY_KASABA = {"Yanbolu (Yambol)", "Nizip", "Kumanova", "Zenta", "Dömeke", "Bileća", "Salankamen", "Parkan", "Sen Gotar", "Hisarcık (Grocka)",
               "Kozluca"}
SEMT = {"Galata sırtları", "Eyüp", "Galatasaray", "Kasımpaşa-Şişli arası", "Kadırga", "Tahtakale", "Sarayburnu", "Tophane sırtları",
        "Akropolis", "Hünkâr İskelesi", "Castel Capuana", "Gökmeydan", "Bâbüzüveyle", "Aynalıkavak Kasrı", "Maçka", "Baltalimanı",
        "Çarşıkapı", "Yedikule", "Tersane-i Amire", "Sultanahmet Meydanı", "Tersane", "Gedikpaşa Tiyatrosu", "Buda (Matthias Kilisesi)",
        "Yavuz Selim"}
ANTIK_YOK = {"Ounjougou": "Pleiades kapsamı dışı (Mali, tarihöncesi); koordinat yok",
             "Berezan": "Pleiades 'Borysthenes' kaydını Olbia ile birleştiriyor; Berezan adası yerleşimi ayrı kayıt bulunamadı — madde Olbia "
                        "noktasıyla taşınır, koordinat yok"}
# İlk sahip (devlet id | OSMANLI | None, tarih, zincir, kaynak, güven)
SAHIP = {
    "Bhirrana (Bhirdana)": (None, "-6433-01-01", "en eski tabaka (Hakra çanak çömleği evresi) — devlet öncesi; erken-harappa künyesi "
                            "-3199'da başlar, o güne dek sahipsiz kültür noktası", "Sarkar vd. 2016, Sci Rep 6:26555 (madde)",
                            "KAYNAKLI (14C), KÜNYE YOK"),
    "Szászsebes (Sebeş)": ("dogu-macar-kralligi", "1540-07-22", "Szapolyai János'un öldüğü yer — Erdel'de, Szapolyai krallığı",
                           "madde kaynağı Vikipedi + Explore Carpathia (akademik değil)", "KAYNAK-GEREK"),
    "Jebel Barkal": ("misir-yeni-krallik", "-1499-01-01", "III. Thutmose'un Napata'ya ulaşması — aday sahip; madde 'başlar' (yerleşim başlangıcı)",
                     "Peeters vd. 2026 (madde) — sahip teyitsiz", "KAYNAK-GEREK"),
    "Elea (Lucania)": (None, "-0544-01-01", "Fokaia sürgünlerinin kurduğu bağımsız polis — künye yok", "Herodotos 1.167; Strabon 6.1.1",
                       "KAYNAKLI, KÜNYE YOK"),
    "Olbia": (None, "-0646-01-01", "Milet kolonisi, bağımsız polis — künye yok", "Eusebios; Hansen & Nielsen 2004", "KAYNAKLI, KÜNYE YOK"),
    "Lokroi (Bruttium)": (None, "-0672-01-01", "Lokris kolonisi, bağımsız polis — künye yok", "Strabon 6.1.7; Eusebios", "KAYNAKLI, KÜNYE YOK"),
    "Kirrha": (None, "-0594-01-01", "Birinci Kutsal Savaş'ta yıkıldı → bit: -0594 (kur: KAYNAK-GEREK)", "Aischines 3.107-113; Parker 2002",
               "KAYNAKLI (bitiş)"),
    "Burzahom (Burzahama)": (None, "-2899-01-01", "Keşmir Neolitiği — devlet öncesi; künye yok", "Dwivedi vd. 2025, Sci Rep (madde)",
                             "KAYNAKLI, KÜNYE YOK"),
    "Babaeski": ("OSMANLI", "1360-01-01", "Bizans → Osmanlı (I. Murad'ın Edirne kuşatması öncesi; yıl)", "TDV «Murad I», «Lüleburgaz» (madde)",
                 "KAYNAKLI (yıl)"),
    "Osnabrück": ("almanya", "1648-10-24", "Osnabrück Prens-Piskoposluğu (Kutsal Roma)", "TDV «Almanya» (madde)", "KAYNAKLI"),
    "Drivasto": ("venedik", "1478-01-01", "Venedik (1390'lar, yerli beylerden) → Osmanlı 1478 (yıl; Akçahisar, Leş, Jabyak ile)",
                 "TDV «Arnavutluk»", "KAYNAKLI (yıl)"),
    "Serav (Serâb)": ("safevi", "1618-09-26", "Safevî şehri (Tebriz-Erdebil arası)", "TDV «Osman II» (madde), «Dilâver Paşa»", "KAYNAKLI"),
    "Vasvár": ("macaristan-habsburg", "1664-08-09", "Habsburg Macaristan'ı (Vas ili)", "TDV «Vasvar Antlaşması» (madde)", "KAYNAKLI"),
    "Versec": ("OSMANLI", "1552-07-27", "Temeşvar'dan gönderilen kuvvetler tuttu (Güney Banat palankaları)", "Bánlaky, A magyar nemzet "
               "hadtörténelme (MEK 09477) (madde)", "KAYNAKLI"),
    "Facset": ("OSMANLI", "1552-07-27", "aynı madde (Versec, Facset, Mehádia, Csákóvár…)", "Bánlaky (madde)", "KAYNAKLI"),
    "Mehádia": ("OSMANLI", "1552-07-27", "aynı madde", "Bánlaky (madde)", "KAYNAKLI"),
    "Csákóvár": ("OSMANLI", "1552-07-27", "aynı madde", "Bánlaky (madde)", "KAYNAKLI"),
    "Ayastefanos (Yeşilköy)": ("OSMANLI", "1878-03-03", "İstanbul'un batısında köy; ABİ MERKEZ: İstanbul", "TDV «Ayastefanos Antlaşması» (madde)",
                               "BEYANLI YAKLAŞIKLIK (zincir İstanbul'dan)"),
    "Novigrad": ("OSMANLI", "1544-09-01", "Budin'in kuzey savunma kuşağı (1544 seferi; ay)", "TDV «Budin» (madde)", "KAYNAKLI (ay)"),
    "Fethülislâm": ("OSMANLI", "1867-04-18", "Osmanlı kalesi → 1867-04-18 garnizon çekildi, Sırbistan Prensliği'ne (sirbistan-prensligi)",
                    "TDV «Sırbistan» (madde)", "KAYNAKLI (kur KAYNAK-GEREK)"),
    "Missolonghi": ("OSMANLI", "1826-04-22", "1821 isyanıyla Yunan isyancılar → 1826-04-22 Osmanlı aldı → 1829 Yunan (KAYNAK-GEREK)",
                    "TDV «Reşid Mehmed Paşa» (madde)", "KAYNAKLI (düşüş günü)"),
    # yer6 (TDV + bölge kaynakları turu) — güncellenen satırlarda kaynak adı yazılı
    "Yanbolu (Yambol)": ("OSMANLI", "1410-02-13", "Bulgar kalesi → Osmanlı fethi 1373 (TDV: 'ikinci tarihin daha doğru olma ihtimali yüksek'; "
                         "eski görüş 766/1365) → 1410 fetret savaşı Osmanlı içi. ÇELİŞKİ: kronolojideki 1369 maddesi (Timurtaş) TDV'nin iki "
                         "tarihinden de farklı", "TDV «Yanbolu»", "KAYNAKLI (yıl) — fetih yılı çelişkisi beyanlı"),
    "Nizip": ("OSMANLI", "1839-06-24", "Nizip Muharebesi; kasaba Osmanlı (Mısır ordusu karşısında)", "madde", "KAYNAKLI (madde)"),
    "Kumanova": ("OSMANLI", "1912-10-23", "Osmanlı → Sırbistan (Kumanova savaşı)", "madde", "KAYNAKLI (madde)"),
    "Zenta": ("habsburg", "1697-09-08", "Habsburg tarafında kasaba-kale (1686'dan çarpışma alanı) → 8 Eylül 1697 Osmanlı zaptetti → "
              "11 Eylül bozgun, Habsburg; ilk anılma 1216 (Szintarev)", "TDV «Zenta» (E. Afyoncu)", "KAYNAKLI (gün)"),
    "Dömeke": ("yunanistan", "1897-05-17", "Osmanlı Tesalya kasabası (Dömeke) → 1881 Tesalya Yunan Krallığı'na → 1897 savaşında kısa "
               "Osmanlı idaresi", "TDV «Tesalya», «Yenişehir»", "KAYNAKLI (1881 yıl)"),
    "Bileća": ("bosna-kralligi", "1388-08-27", "ilk anılma 1387; 1388'de yakınında Bosna komutanı Vlatko Vuković Osmanlıları yendi → 1391 "
               "knez Pavle Radinović → 1430'lar Kosača → 1465 Osmanlı", "Hrvatska enciklopedija «Bileća» (LZMK)", "KAYNAKLI"),
    "Salankamen": ("OSMANLI", "1691-08-19", "Macar kalesi → 1521 Osmanlı (Srem sancağı) → 19.8.1691 savaştan sonra Habsburg (Askerî Sınır)",
                   "Hrvatska enciklopedija «Slankamen»; TDV «Srem» (XVI. yy. Osmanlı kasabası)", "KAYNAKLI (gün)"),
    "Parkan": ("OSMANLI", "1683-10-09", "Osmanlı Parkan palankası → 1683-10-09 bozgun, Habsburg", "madde", "KAYNAKLI (madde)"),
    "Sen Gotar": ("macaristan-habsburg", "1664-08-01", "Habsburg Macaristan'ı (Rába kıyısı) — TDV'de madde ve içerik eşleşmesi yok "
                  "(sengotar, vasvar-antlasmasi denendi)", "madde", "KAYNAK-GEREK"),
    "Hisarcık (Grocka)": ("habsburg", "1739-07-22", "Pasarofça (1718) ile Belgrad ve havalisi Avusturya'ya → 1739 Osmanlı; savaş "
                          "'Hisarcık Boğazı'nda 22 Temmuz' (TDV Hacı İvaz Paşa). ABİ MERKEZ: Belgrad",
                          "TDV «Pasarofça Antlaşması», «Hacı İvaz Paşa»", "BEYANLI YAKLAŞIKLIK (zincir Belgrad'dan)"),
    "Kozluca": ("OSMANLI", "1774-06-25", "Osmanlı (Varna-Şumnu arası)", "madde", "KAYNAKLI (madde)"),
}

NEHIR = {"Parkan": " · DİKKAT: Parkan Tuna'nın sol (kuzey) kıyısında, Estergon karşısında ayrı palanka — 1683'te ayrı el değiştirdi; "
                   "KASA eş ad mı ayrı nokta mı karar verir"}
S = []
for r in L:
    ad = r["ad"]
    o = dict(sira=r["sira"], ad=ad, sayi=r["sayi"], madde_t=r["madde_t"], madde=r["madde"], koordinat=None, konum="koordinat yok", tur=None)
    if ad in YAZIM:
        o.update(sinif="YAZIM", yazim=YAZIM[ad][0], yazim_guven=YAZIM[ad][1], not_=YAZIM[ad][2])
    elif ad in SEMT:
        o.update(sinif="SEMT/YAPI", not_="şehir içi semt, yapı ya da meydan — maddenin şehri taşır")
    elif ad in OLAY_KASABA:
        # EMRELİC kararı (4 Kasım 2026): o yılda var olan gerçek kasaba olay maddesinde geçse de YERLEŞİM'dir ve eklenir
        o.update(sinif="YERLEŞİM", not_="olay (savaş) maddesi; adını taşıyan kasaba o yılda vardı → YERLEŞİM (EMRELİC kararı)")
    elif ad in OLAY:
        o.update(sinif="KALE/YAPI" if "KALE/YAPI" in OLAY[ad] else "OLAY YERİ", not_=OLAY[ad])
    elif ad in ANTIK_YOK:
        o.update(sinif="ANTİK YERLEŞİM", not_=ANTIK_YOK[ad])
    elif ad in KONUM:
        o.update(sinif="YERLEŞİM", not_="")
    else:
        o.update(sinif="YER DEĞİL", not_="bölge, ırmak, dağ, kültür, dönem, halk ya da liste")
    if ad in KONUM and o["sinif"] == "YERLEŞİM":
        la, lo, dy = KONUM[ad]
        o.update(koordinat=[la, lo], konum=dy, tur=dy.split()[0])
        en = sorted((girdi.km(la, lo, y["lat"], y["lon"]), y["ad"]) for y in Y)[0]
        o["en_yakin"] = "%s (%.1f km)" % (en[1], en[0])
        if en[0] <= 3.0:  # mükerrer → YAZIM
            o.update(sinif="YAZIM", yazim=en[1], yazim_guven="DOĞRULA", not_="konum atlas kaydına %.1f km — aynı yer olabilir%s" % (
                en[0], NEHIR.get(ad, "")))
    S.append(o)
json.dump(S, open(os.path.join(BURA, "konum4.json"), "w", encoding="utf-8", newline="\n"), ensure_ascii=False, indent=1)
json.dump({k: list(v) for k, v in SAHIP.items()}, open(os.path.join(BURA, "sahip4.json"), "w", encoding="utf-8", newline="\n"),
          ensure_ascii=False, indent=1)
c = collections.Counter(x["sinif"] for x in S)
M = ["# KONUM4 — EKSİK sırası 151-300: sınıf ve konum\n",
     "Ölçen: LAB SALI · 4 Kasım 2026 · `eksik_aday.py 150 300` → `konum4_yaz.py`. Zincir: mükerrer (3 km) → Pleiades (antik) / TDV tarifi "
     "+ GeoNames / GeoNames beyanlı → olay yeri ayrımı. Çin adı yok (CHGIS gerekmedi).\n",
     "**Özet:** %s.\n" % ", ".join("%s %d" % kv for kv in c.most_common()),
     "- Referanssız Pleiades araması 14 koordinat döndürdü; **11'i yanlış yerdi** (Buda→Budalia, Korkyra→Korčula, Uşi→Tunus…) ve reddedildi "
     "(eksik_aday.py PLEIADES_RED). Antik adlar beklenen bölge merkezli hedefli sorguyla (≤ 100 km) yeniden arandı.",
     "- **Olay maddesindeki kasabalar** (Yanbolu, Nizip, Kumanova, Zenta…): EMRELİC kararıyla (4 Kasım 2026) o yılda var olan gerçek "
     "kasaba YERLEŞİM'dir ve eklenir; yalnız ova, geçit, tepe, ırmak, ordugâh gibi olay yerleri petek olmaz.",
     "- Mükerrer: her konum için atlasın en yakın noktası ölçüldü (girdi.km); 3 km içindekiler YAZIM'a geçti.\n",
     "| # | ad | sınıf | koordinat | dayanak | en yakın atlas noktası | not | madde |", "|---|---|---|---|---|---|---|---|"]
for x in S:
    ko = "%.5f, %.5f" % tuple(x["koordinat"]) if x["koordinat"] else "—"
    nt = x.get("not_") or ""
    if x["sinif"] == "YAZIM":
        nt = "→ %s (%s) %s" % (x["yazim"], x["yazim_guven"], nt)
    M.append("| %d | %s | %s | %s | %s | %s | %s | %s — %s |" % (x["sira"], x["ad"], x["sinif"], ko, x["konum"], x.get("en_yakin", "—"),
                                                               nt.replace("|", "/"), x["madde_t"], x["madde"][:70].replace("|", "/")))
open(os.path.join(BURA, "KONUM4.md"), "w", encoding="utf-8", newline="\n").write("\n".join(M) + "\n")
print(dict(c))
for x in S:
    if x.get("en_yakin"):
        print(x["ad"], "→", x["en_yakin"], x["sinif"])
