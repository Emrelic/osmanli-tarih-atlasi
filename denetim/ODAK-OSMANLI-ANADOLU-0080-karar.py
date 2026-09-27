"""ODAK-OSMANLI-ANADOLU-0080 — 100 maddenin SINIF + ALAN + GEREKÇE + KAYNAK kararları.

Bu dosya yalnız KARAR tablosudur; `-oneri.json`u üretir:
    py denetim/ODAK-OSMANLI-ANADOLU-0080-karar.py <iskelet.json>
İskelet (n · dosya · t · b) `-dok.py` dökümünden otomatik çıkarıldı — başlıklar
elle YAZILMADI (yazım hatası maddeyi kaçırtır).

Sınıflar (şartname): A tek yer · B birkaç yer / iki taraf · C devletin tamamı ·
D Osmanlı çapı (kapsam_genis KALIR) · E belirlenemedi (HİÇBİR ŞEY yazılmaz).
`yk~` = yer_kon YAKLAŞIK: yerin bilinen konumu, kaynak koordinat vermiyor (D210).
"""
import json
import os
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

IC_IL = ["Silifke", "Ermenek"]      # TDV karamanogullari: "merkezi Silifke olan İç İl ile Ermenek ve Mut yöreleri" (Mut noktası yok)
KILIKYA = ["Adana", "Tarsus"]        # 1281 öncesi: kilikya-ermeni kimliği 0 yerleşim döndürür (atlas s: dönemleri 1281'de başlar)
MACAR_OZ = ["Budin", "Peçuy", "Eğri", "Debrecen", "Segedin (Szeged)", "Kassa (Košice)"]
BACS_BANAT = ["Baç (Bács)", "Varadin (Petrovaradin)", "Temeşvar", "Lugos (Lugoj)"]
KD_MACAR = ["Kassa (Košice)", "Eperjes (Prešov)", "Ungvár (Uzhhorod)"]
ZISTOVI = [43.62, 25.35]            # yk~ Svishtov kasabası; atlasta nokta YOK

TDV_K = "TDV karamanogullari"
TDV_D = "TDV dulkadirogullari"
TDV_C = "TDV cuneyd-bey"

K = {
    # ── kronoloji_anadolu.js · Karamanoğulları ─────────────────────────────
    1: ("B", {"odak_yer": IC_IL}, "Mehmed Bey Moğol öncüleri önünde İç İl'e çekilip orada öldürüldü; İç İl bölge, merkezi Silifke. 1281 öncesi: karaman kimliği 0 yerleşim",
        TDV_K + ": 'Alâeddin Siyavuş'la birlikte İç İl'e çekildi (Haziran 1277)' · 'merkezi Silifke olan İç İl ile Ermenek ve Mut yöreleri'"),
    2: ("C", {"odak_kimlik": ["karaman"]}, "hükümdar değişimi, yer belirtilmiyor → beyliğin gövdesi (1281: 5 yerleşim)", TDV_K),
    3: ("C", {"odak_kimlik": ["karaman"]}, "hükümdar ölümü, yer belirtilmiyor (1307: 4 yerleşim)", TDV_K + ": 'Mahmud Bey 707'de (1307-1308) öldü'"),
    4: ("C", {"odak_kimlik": ["karaman"]}, "suikastın yeri metinde yok (1361: 4 yerleşim)", TDV_K + ": 'bizzat akrabaları tarafından öldürülmüştür (762/1361)'"),
    5: ("B", {"odak_yer": ["Beyşehir"]}, "barışla bırakılan toprak Beyşehir'e bağlı Köşkbükü batısı — kamera orada",
        TDV_K + ": 'Beyşehir'e bağlı Köşkbükü köyünün batısındaki yerler Osmanlılar'a ait olmak üzere barış yapıldı (793/1391)'"),
    6: ("C", {"odak_kimlik": ["karaman"]}, "iade edilen beylik toprağının tamamı (1402-07-28: 6 yerleşim)", TDV_K),
    7: ("B", {"odak_yer": ["Ankara", "Kütahya", "Karahisâr-ı Sâhib (Afyon)"]}, "akın yerleri; Beypazarı, Bolvadin, Hamîd-ili noktası atlasta yok",
        TDV_K + ": 'Ankara, Beypazarı, Kütahya, Karahisar, Bolvadin ve Hamîd-ili'nde yağma ve tahribatta bulundu'"),
    8: ("C", {"odak_kimlik": ["karaman"]}, "antlaşmanın imza yeri metinde yok; öbür taraf Osmanlı (kutusu imparatorluk) → beylik tarafı (7 yerleşim)",
        TDV_K + ": 'Ağustos 1444'te yapılan anlaşmaya göre İbrâhim Bey …'"),
    9: ("C", {"odak_kimlik": ["karaman"]}, "beyliğin tamamına hâkimiyet (7 yerleşim)", TDV_K),
    10: ("B", {"odak_yer": ["Niğde", "Silifke"]}, "sefer hedefi Niğde-Develi yöresi ve İç İl sahilleri; Develi noktası yok. (karaman kimliği 1474'te 0 yerleşim)",
         TDV_K + ": 'Niğde ve Develi yöresiyle İç İl sahillerine yönelik Osmanlı seferi 1474'te başarıyla sonuçlandı'"),
    11: ("B", {"odak_yer": IC_IL}, "Turgutoğlu Mahmud İç İl'de bey yapıldı (karaman kimliği 1483'te 0 yerleşim)",
         TDV_K + ": 'Turgut oğlu Mahmud'u İç İl'de bey yaptılarsa da'"),
    12: ("C", {"odak_kimlik": ["karaman"]}, "eserin yazıldığı yer metinde yok; beylik sarayı eseri (1380: 7 yerleşim)", TDV_K + ": 'Karamannâme adında bir tarih yazdırmıştır'"),
    13: ("C", {"odak_kimlik": ["karaman"]}, "dönem geneli ekonomi (madde temsilî tarih taşıyor); 1400'de 3 yerleşim", TDV_K + ": 'ihraç maddeleri arasında buğday, yün, deri, halı ve at'"),
    14: ("C", {"odak_kimlik": ["karaman"]}, "dönem geneli toplum yapısı (1350: 4 yerleşim)", TDV_K + ": oymak cümleleri"),
    # ── Anadolu Selçukluları (hepsi 1281 öncesi → kimlik 0 yerleşim, odak_yer zorunlu)
    15: ("E", {}, "iskân politikası dağınık (Batı Anadolu'dan Selçuk ülkesine); tek/birkaç yer kaynakta yok",
         "TDV selcuklular: 'Rum ailelerini Selçuk ülkesine göç ettiriyor' — yer adı yok"),
    16: ("C", {"odak_yer": ["Konya", "Niğde", "Karahisâr-ı Sâhib (Afyon)"]}, "darp yeri kaynakta YOK; kamera I. Mesud'un başlangıçtaki ülkesine (maddenin kendi metni: Konya-Niğde-Afyonkarahisar)",
         "TDV mesud-i: 'Tarih ve darp yeri bulunmayan bu bakır sikkeler' — ⚠️ maddenin 1140 tarihi bu cümleyle çelişebilir, BAŞLIK/TARİH DOKUNULMADI"),
    17: ("B", {"odak_yer": ["Tiflis"]}, "sefer hedefi Gürcistan; muharebe yeri kaynakta yok → kamera Gürcistan'ın merkezine",
         "TDV selcuklular: 'Ancak 1202'de yaptığı Gürcistan seferinden bir netice elde edemedi'"),
    18: ("B", {"odak_yer": KILIKYA}, "Çinçin, Haçin, Keben kaleleri atlasta yok → kamera Kilikya çekirdeği",
         "TDV keykavus-i: 'Çinçin ve Haçin (Hacın) kaleleri şiddetli hücumlardan sonra fethedildi'"),
    19: ("B", {"odak_yer": ["Antalya", "Alanya", "Lefkoşa"]}, "iki taraf: Selçuklu limanları (Antalya, Alâiye) + Kıbrıs",
         "TDV selcuklular: 'Venedikliler ve Kıbrıs Frankları'yla ticarî anlaşmalar yapılmış'"),
    20: ("B", {"odak_yer": ["Hısn-ı Mansûr (Adıyaman)", "Kâhta", "Malatya", "Kırşehir"]}, "isyan Adıyaman-Kâhta-Malatya'da yayıldı, Kırşehir Malya ovasında bastırıldı (Gerger noktası yok)",
         "TDV baba-ishak (maddenin kendi alıntısı)"),
    # ── Artuklular
    21: ("E", {}, "Alparslan'ın hizmetine giriş — yer kaynakta yok; 1063 atlas penceresi dışı", "TDV artuklular"),
    22: ("B", {"odak_yer": ["Hasankeyf", "Diyarbakır", "Mardin"]}, "maddenin kendi üçgeni (Diyarbakır-Mardin-Hasankeyf) — ⚠️ maddenin kaynağı 'bulunamadı' damgalı",
         "madde kaynak alanı: bulunamadı (genel çıkarım)"),
    # ── Dulkadıroğulları
    23: ("C", {"odak_kimlik": ["dulkadir"]}, "kervan 'yolda Dulkadırlılar tarafından' soyuldu — soygunun tam yeri yok (2 yerleşim)",
         TDV_D + ": 'Halep'e taşıyan kervanın yolda Dulkadırlılar tarafından soyulması'"),
    24: ("A", {"yer_id": "Yumurtalık"}, "Ayas = Yumurtalık (TDV parantezi)", TDV_D + ": 'Memlük kuvvetleri ise Ayas'ta (Yumurtalık) … imha edildi'"),
    25: ("C", {"odak_kimlik": ["dulkadir"]}, "öldürülme yeri metinde yok", TDV_D + ": 'hançerlenerek öldürüldü (1386)'"),
    26: ("C", {"odak_kimlik": ["dulkadir"]}, "öldürülme yeri metinde yok", TDV_D + ": 'Sevli Bey'in Sultan Berkuk tarafından öldürülmesi'"),
    27: ("C", {"odak_kimlik": ["dulkadir"]}, "tahta çıkış, yer yok", TDV_D),
    28: ("C", {"odak_kimlik": ["dulkadir"]}, "evlilik; öbür taraf Memlük (kutusu Mısır-Suriye) → beylik tarafı", TDV_D + ": 'Çakmak … Nasreddin Mehmed'in kızı ile evlendi (1440)'"),
    29: ("C", {"odak_kimlik": ["dulkadir"]}, "ölüm/tahta çıkış, yer yok", TDV_D),
    30: ("C", {"odak_kimlik": ["dulkadir"]}, "düğün yeri TDV dulkadirogullari'nda YOK (sitti-hatun slug'ı 302) → Edirne YAZILMADI", TDV_D + ": 'ertesi yıl diğer kızı Sitti Hatun'u II. …'"),
    31: ("C", {"odak_kimlik": ["dulkadir"]}, "ölüm/tahta çıkış, yer yok", TDV_D),
    32: ("A", {"yer_id": "Kahire"}, "idam yeri Kahire (yakalandığı yer Zamantı Kalesi — noktası yok)",
         TDV_D + ": 'Zamantı Kalesi'nde … yakalandı ve Kahire'de idam edildi (1472)'"),
    33: ("C", {"odak_kimlik": ["dulkadir"]}, "taht mücadelesi, yer yok", TDV_D),
    34: ("C", {"odak_kimlik": ["dulkadir"]}, "asker göndermeyi reddeden beylik; yer yok", TDV_D),
    35: ("C", {"odak_yer": ["Maraş", "Elbistan"]}, "tâbi beylik; dulkadir kimliği 1515'ten sonra 0 yerleşim (v: kaydı kid'siz, adı 'Osmanlı'ya tâbi…' ile başlıyor) → merkezler",
         TDV_D + ": 'Elbistan ve Maraş merkez olmak üzere'"),
    36: ("A", {"yer_kon": [36.536, 37.270]}, "yk~ Mercidâbık = Dâbık köyü, Halep kuzeyi; atlasta nokta yok. ⚠️ kronoloji_* maddesinde yer_kon bugün devlet sekmesinde OKUNMAZ (maddeAc yer_id ister)",
         TDV_D + " (maddenin kendi kaynağı) · konum: Dâbık köyünün bilinen yeri, YAKLAŞIK"),
    37: ("A", {"yer_kon": [30.07, 31.28]}, "yk~ Ridâniye = Kahire'nin kuzeydoğu kenarı; atlasta ayrı nokta yok. ⚠️ yer_kon devlet sekmesinde OKUNMAZ",
         TDV_D + " (maddenin kendi kaynağı) · konum YAKLAŞIK"),
    38: ("B", {"odak_yer": ["Kırşehir", "Çorum", "Tokat"]}, "Bozok (Yozgat) noktası atlasta YOK → komşu merkezlerin kutusu Bozok'u içine alır. NOKTA İHTİYACI: Bozok/Yozgat",
         TDV_D + ": 'Bozok (Yozgat)' · 'Bozoklu Şeyh Celâl … bastırılmasında'"),
    39: ("B", {"odak_yer": ["Şam"]}, "bozgun Mastaba'da (Şam yakını, noktası yok) → kamera Şam", "TDV canbirdi-gazali (maddenin kendi alıntısı): 'Mastaba'da bozguna uğradı'"),
    # ── Aydınoğulları
    40: ("C", {"odak_kimlik": ["aydin"]}, "ittifak; yer yok → beylik tarafı (8 yerleşim)", "TDV umur-bey: 'Umur Bey, Bizans İmparatorluğu için önemli bir müttefik haline geldi'"),
    41: ("B", {"odak_yer": ["Enez", "Dimetoka"]}, "çıkarma Meriç ağzı (Enez), karargâh Dimetoka",
         "TDV umur-bey: '1342 yılı sonlarında 20.000'e yakın asker ve 380 kadar gemiyle Meriç ağzına geldi' · 'Dimetoka'da bulunan Kantakuzenos'un hanımı … karşılandı'"),
    42: ("C", {"odak_yer": ["Ayasuluk (Selçuk)", "Tire", "Birgi"]}, "beyliğin tâbiiyeti; aydin kimliği 1390'da 1 yerleşim (kutu kurulamaz) → beylik merkezleri", "TDV aydinogullari (maddenin kaynağı)"),
    43: ("C", {"odak_kimlik": ["aydin"]}, "iade edilen beylik toprağı (6 yerleşim)", "TDV aydinogullari"),
    44: ("C", {"odak_kimlik": ["aydin"]}, "hükümdar değişimi, yer yok (8 yerleşim)", TDV_C),
    45: ("C", {"odak_kimlik": ["aydin"]}, "beyliğin tek hâkimi (8 yerleşim); Salihli ve Nif (İzmir-Kemalpaşa) noktası YOK — atlastaki 'Kirmasti (M.Kemalpaşa)' BAŞKA yer, kullanılmadı",
         TDV_C + ": 'Alaşehir, Salihli ve Nif'i (Kemalpaşa) aldı'"),
    46: ("B", {"odak_yer": ["Niğbolu", "Selanik"]}, "Cüneyd o sırada Niğbolu sancakbeyi; Selânik'e kaçtı (aydin kimliği 1419'da 0)",
         TDV_C + ": 'Niğbolu sancak beyliğine tayin' · 'Cüneyd burada da boş durmadı … Mustafa ile Selânik'e kaçtı'"),
    47: ("C", {"odak_kimlik": ["aydin"]}, "beylik topraklarını yeniden ele geçirdi (8 yerleşim)", TDV_C),
    48: ("B", {"odak_yer": ["Söke", "Kuşadası"]}, "İpsili (Sisam karşısı) noktası YOK → karşı kıyının iki noktası; aydin kimliği 1425-06'da 0",
         TDV_C + ": 'Sisam adası karşısındaki İpsili'ye çekilen Cüneyd … teslim olmak'"),
    # ── Kilikya Ermeni Krallığı (akademik kaynaklar maddenin kendi alanında)
    49: ("C", {"odak_yer": KILIKYA}, "veraset krizi, yer yok; 1281 öncesi kimlik 0", "madde kaynağı: Ghazarian 2000"),
    50: ("C", {"odak_yer": KILIKYA}, "hanedan değişimi, yer metinde yok", "madde kaynağı: Der Nersessian"),
    51: ("B", {"odak_yer": ["Tarsus"]}, "iki darphane: Sis + Tarsus; Sis (Kozan) noktası YOK → Tarsus. NOKTA İHTİYACI: Sis",
         "madde kaynağı: Bedoukian"),
    52: ("C", {"odak_yer": KILIKYA}, "ön anlaşmanın yeri yok", "madde kaynağı: Stewart 2001"),
    53: ("A", {"yer_kon": [36.463, 34.150]}, "yk~ Korikos = Kızkalesi (Erdemli); nokta yok. ⚠️ yer_kon devlet sekmesinde OKUNMAZ", "madde kaynağı: Edwards (Dumbarton Oaks) · konum YAKLAŞIK"),
    54: ("A", {"yer_kon": [37.270, 37.857]}, "yk~ Hromkla = Rumkale (Halfeti); nokta yok. ⚠️ yer_kon devlet sekmesinde OKUNMAZ", "madde kaynağı: Der Nersessian · konum YAKLAŞIK"),
    55: ("C", {"odak_yer": KILIKYA}, "akınların hedefi krallığın tamamı; tek yer yok", "madde kaynağı: Bournoutian 2006"),
    56: ("C", {"odak_yer": KILIKYA}, "çevirinin yapıldığı yer yok", "madde kaynağı: ⚠️ 'Sophene Books akademik dizi özeti' — kaynak niteliği koordinatörce bakılmalı"),
    57: ("B", {"odak_yer": ["Adana", "Tarsus", "Yumurtalık"]}, "Mari mevkii yeri belirsiz; yağmalanan Adana, Tarsus, Ayas (Mamistra noktası yok)", "madde kaynağı: Stewart 2001; Ghazarian 2000"),
    58: ("C", {"odak_yer": KILIKYA}, "ölüm yeri yok; 1281 öncesi", "madde kaynağı: Der Nersessian"),
    59: ("C", {"odak_kimlik": ["kilikya-ermeni"]}, "zehirlenme yeri yok (1289: 2 yerleşim)", "madde kaynağı: Bournoutian 2006"),
    60: ("C", {"odak_kimlik": ["kilikya-ermeni"]}, "tahttan çekilme; manastır Mamistra'da (noktası yok) — olayın özü tahttan çekilme", "madde kaynağı: Bournoutian 2006"),
    61: ("C", {"odak_kimlik": ["kilikya-ermeni"]}, "saray darbesi, yer yok", "madde kaynağı: Bournoutian 2006"),
    62: ("A", {"yer_id": "Adana"}, "Adana Konsili", "madde kaynağı: Council of Sis literatürü"),
    63: ("C", {"odak_kimlik": ["kilikya-ermeni"]}, "taht mücadelesi, muharebe yeri yok", "madde kaynağı: Stewart 2001"),
    64: ("C", {"odak_kimlik": ["kilikya-ermeni"]}, "ölüm yeri yok", "madde kaynağı: Bournoutian 2006"),
    65: ("A", {"yer_id": "Yumurtalık"}, "Ayas = Yumurtalık (TDV dulkadirogullari parantezi)", "madde kaynağı: Orient dergisi makalesi · eşleme: TDV dulkadirogullari"),
    66: ("A", {"yer_id": "Yumurtalık"}, "Ayas = Yumurtalık", "madde kaynağı: Orient dergisi makalesi"),
    67: ("C", {"odak_kimlik": ["kilikya-ermeni"]}, "taç giyme yeri metinde yok", "madde kaynağı: Bournoutian 2006"),
    68: ("C", {"odak_kimlik": ["kilikya-ermeni"]}, "isyan yeri yok", "madde kaynağı: Bournoutian 2006"),
    69: ("B", {"odak_yer": ["Lefkoşa", "Magosa"]}, "göçün varış yeri Kıbrıs Krallığı (kilikya-ermeni künyesi 1375-04-14'te bitiyor)", "madde kaynağı: Bournoutian 2006"),
    70: ("A", {"yer_id": "Kahire"}, "esaret ve fidyeyle serbest bırakılış Kahire'de", "madde kaynağı: Bournoutian 2006"),
    # ── kronoloji_macaristan.js
    71: ("C", {"odak_kimlik": ["macaristan"]}, "krallık çapında yasa (28 yerleşim)", "madde kaynağı: Engel 2001"),
    72: ("C", {"odak_kimlik": ["macaristan"]}, "krallık çapında kilise hukuku (29 yerleşim)", "madde kaynağı: Engel 2001"),
    73: ("C", {"odak_kimlik": ["macaristan"]}, "krallığın daimî ordusu (31 yerleşim)", "madde kaynağı: Engel 2001"),
    74: ("B", {"odak_kimlik": ["erdel", "lehistan"]}, "iki taraf: Erdel ordusu Lehistan'da imha edildi (23 yerleşim)", "madde kaynağı: Kontler 2002"),
    75: ("B", {"odak_yer": ["Kassa (Košice)", "Eperjes (Prešov)", "Munkács (Mukacheve)", "Ungvár (Uzhhorod)"]}, "Kuruc hareketi Kuzey-Doğu Macaristan'da (orta-macar-kralligi kimliği 1678'de 0 — künye 1682'de başlıyor)",
         "TDV tokoli-imre (maddenin kendi alıntısı)"),
    76: ("B", {"odak_yer": BACS_BANAT}, "iskân Bácska ve Bánát'ta", "madde kaynağı: Evans 2006"),
    77: ("B", {"odak_yer": BACS_BANAT}, "salgın Bánát ve Bácska'yı vurdu", "madde kaynağı: Evans 2006"),
    78: ("B", {"odak_yer": KD_MACAR}, "isyan Doğu Slovakya / Kuzey-Doğu Macaristan'da", "madde kaynağı: Kontler 2002"),
    79: ("C", {"odak_yer": MACAR_OZ}, "Macaristan çapında idare; macaristan(-habsburg) kimliği 1850'de 0 yerleşim (atlas bu toprağı 'avusturya' çiziyor) → Macaristan merkezleri. Erdel, Banat ve Hırvatistan Bach döneminde AYRI taç toprağıydı, kutuya alınmadı",
         "madde kaynağı: Kontler 2002"),
    80: ("C", {"odak_yer": MACAR_OZ}, "Macaristan çapında tazminat düzenlemesi; kimlik 1854'te 0 yerleşim", "madde kaynağı: Evans 2006"),
    81: ("B", {"odak_kimlik": ["habsburg", "macaristan-habsburg"]}, "iki taraf: Avusturya + Macaristan gümrük birliği (53 yerleşim)", "madde kaynağı: Kontler 2002"),
    # ── olaylar_p0068b.js (ana yol — odak_* OKUNUR)
    82: ("A", {"yer_kon": [45.255, 30.204]}, "yk~ Yılan Adası (Fidonisi); atlasta nokta yok", "TDV cezayirli-gazi-hasan-pasa: 'Ağustos 1788'de yapılan Yılan Adası Muharebesi' · konum YAKLAŞIK"),
    83: ("B", {"odak_yer": ["Rusçuk"]}, "azlin yeri kaynakta YOK; sadrazam Nisan 1789'da Rusçuk'taydı → kamera tercihi (yer_id DEĞİL)",
         "TDV yusuf-pasa-koca: 'Rusçuk'ta bulunan Yûsuf Paşa vazifesinde ibkā edildiyse de' · '(7 Haziran 1789)'"),
    84: ("A", {"yer_kon": [45.697, 27.186]}, "yk~ Fokşani kasabası; atlasta nokta yok", "TDV yusuf-pasa-koca: '1 Ağustos 1789'da Fokşan'da' · konum YAKLAŞIK"),
    85: ("A", {"yer_id": "Rimnik-i Sârat (Râmnicu Sărat)"}, "Remnik (Râmnic) nehri geçişi, Rimnik-i Sârat yöresi", "TDV yusuf-pasa-koca: '22 Eylül'de Remnik nehrini geçerken ve ardından Boza suyu kıyısında'"),
    86: ("A", {"yer_id": "Orsova (Eski Orsova)"}, "TDV'nin 'eski Hırsova'sı Çerna suyu kıyısındadır = Eski Orsova (Dobruca'daki Hırsova DEĞİL); atlas noktası da 1790'da avusturya'ya geçiyor",
         "TDV zistovi-antlasmasi: '16 Nisan'da eski Hırsova … Avusturya kuvvetlerinin eline geçti' · 'Çerna suyunun sağ yakasına kadar … Eski Hırsova'"),
    87: ("A", {"yer_kon": [43.99, 22.94]}, "yk~ Kalafat (Vidin karşısı); nokta yok", "TDV zistovi-antlasmasi: 'Vidin'den hareketle Tuna üzerinden Kalafat'a çıkan' · konum YAKLAŞIK"),
    88: ("A", {"yer_kon": [45.245, 28.135]}, "yk~ Maçin kasabası; nokta yok", "TDV yas-antlasmasi: 'Maçin'de yaşanan genel bozgun (9 Temmuz 1791)' · konum YAKLAŞIK"),
    89: ("B", {"odak_yer": ["Yergöğü (Giurgiu)"]}, "mütarekenin SONA ERMESİ bir yerde olmaz → kamera mütarekenin imza yerine (yer_id DEĞİL)",
         "TDV zistovi-antlasmasi: 'Yergöğü'ndeki sadrazam çadırında … (18 Eylül 1790) … imzalandı'"),
    90: ("A", {"yer_kon": ZISTOVI}, "yk~ Ziştovi; nokta yok", "TDV zistovi-antlasmasi: 'Ziştovi (Ziştova) üzerinde karar kılındı' · konum YAKLAŞIK"),
    91: ("A", {"yer_kon": ZISTOVI}, "görüşmeler Ziştovi'de kesildi (Herbert Bükreş'e gitti)", "TDV zistovi-antlasmasi: '10 Haziran'da Bükreş'e çekilerek görüşmelerin kesilmesine yol açtı'"),
    92: ("A", {"yer_kon": ZISTOVI}, "heyet Ziştovi'ye döndü", "TDV zistovi-antlasmasi: 'Avusturya heyeti 18 Temmuz'da Ziştovi'ye döndü'"),
    93: ("A", {"yer_kon": ZISTOVI}, "mübadele Ziştovi'de. ⚠️ TDV İKİ madde İKİ gün veriyor (yas: 31 Ağustos · zistovi: 23 Ağustos) — tarih alanına DOKUNULMADI, rapor edildi",
         "TDV yas-antlasmasi: 'Ziştovi'deki Osmanlı heyeti, 1 Muharrem 1206'da (31 Ağustos 1791) … tasdiknâmelerini mübadele ettikten sonra' · TDV zistovi-antlasmasi: '23 Ağustos'ta yine merasimle Ziştovi'de mübadele edildi'"),
    # ── olaylar_p0917taraf.js
    94: ("B", {"odak_yer": ["Medenîn", "Trablus"]}, "sınırın kıyı kesimi Tunus-Trablusgarp arası; iki yakanın atlas noktaları (Ras Ecdir yakını nokta yok)", "IBS 121 (1972) — maddenin kaynağı"),
    95: ("B", {"odak_yer": ["Medenîn", "Nâlût", "Ğadâmis"]}, "sınır kıyıdan Gadames'e", "IBS 121 (1972) — maddenin kaynağı"),
    96: ("B", {"odak_yer": ["Gazze", "Tûr (Sînâ)", "Maan"]}, "Refah-Taba hattı; Refah, Taba, Akabe noktası YOK → kutu hattın iki ucunu içine alır", "RIAA XX (1988) Taba hakem kararı — maddenin kaynağı"),
    # ── olaylar_p0063.js
    97: ("B", {"odak_yer": ["Derbend", "Bakü"]}, "görüşmenin yeri kaynakta yok; konu Hazar eyaletleri ve Derbend → kamera konu yerine (yer_id DEĞİL)", "Salamova 2007 — maddenin kaynağı"),
    98: ("A", {"yer_kon": [44.717, 22.456]}, "yk~ Adakale (Tuna adası, bugün baraj altında); nokta yok", "TDV mahmud-i--osmanli: '17 Ağustos 1738'de Adakale alındı' · konum YAKLAŞIK"),
    # ── olaylar_ek4.js
    99: ("Ø", {}, "İŞ YOK — ölçer YANLIŞ POZİTİFİ: madde zaten odak_kimlik:\"suud-birinci\" (DİZGİ) taşıyor; app.js dizgiyi listeye çevirir (app.js:11740) ve 1816-09-01'de 11 yerleşimlik kutu kurar. odak_olc.py:156 yalnız LİSTE kabul ettiği için ODAKSIZ sayıyor",
         "ölçüm: -kimlik.js 1816-09-01 suud-birinci → n=11"),
    # ── olaylar_p0057b.js
    100: ("B", {"odak_yer": ["Ergiri (Ergirikasrı)"]}, "defter Arvanid sancağının; sancak merkezi Ergirikasrı (arvanid-sancagi kimliği 1431'de 0 yerleşim)",
          "TDV tahrir: '835 (1431) tarihli Arvanid Sancağı Defteri' · TDV arnavutluk: 'sancak merkezi olan Ergirikasrı'"),
}

isk = json.load(open(sys.argv[1], encoding="utf-8"))
out = []
for r in isk:
    s, alan, ger, kay = K[r["n"]]
    out.append({"n": r["n"], "dosya": r["dosya"], "t": r["t"], "b": r["b"], "olc": r["sinif_olc"],
                "sinif": s, "alan": alan, "gerekce": ger, "kaynak": kay})
assert len(out) == 100 and len(K) == 100
yol = os.path.join(KOK, "denetim", "ODAK-OSMANLI-ANADOLU-0080-oneri.json")
json.dump(out, open(yol, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print("yazıldı:", yol, len(out))
