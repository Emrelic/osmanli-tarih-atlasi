# -*- coding: utf-8 -*-
"""1DUNYA-B · I. Dünya Savaşı — AVRUPA DIŞI çok taraflı kronoloji üreticisi.

Şartname: oturumlar/BIRINCI-DUNYA-SAVASI-0917.md ("1DUNYA-B (Avrupa dışı)")
Çıktı:    data/kronoloji_cok_1dunya_B.js  →  window.KRONOLOJI_COK_1DUNYA_B
Kullanım: py denetim/ARAC-1DUNYA-B-URET-0917.py

Kurallar (CLAUDE.md §4):
  · Osmanlı cephelerinde birincil kaynak TDV; gün TDV gövdesinden okundu
    (denetim/_govde_1dunyab/<slug>.txt, ARAC-1DUNYA-B-GOVDE-0917.py çeker).
  · TDV dışı: 1914-1918-online (FU Berlin, hakemli) · FRUS (ABD Dışişleri
    belge neşri, birincil). Kaynak ADIYLA yazılır.
  · Kaynak yalnız ay/yıl veriyorsa t = YYYY-01-01 ve ay metinde durur
    (`gun` alanı hassasiyeti söyler).
  · Osmanlı tarafı `taraflar`a YAZILMAZ; `etiket`e "osmanli" eklenir.
  · Aynı künyede aynı gün zaten bir madde varsa (çekirdek/künye/KRONOLOJI_*)
    o künye `taraflar`dan çıkarıldı — yükleyici yalnız t+b ile eler, anlamca
    mükerrer madde doğmasın.
"""
import sys, os, json

sys.stdout.reconfigure(encoding="utf-8")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CIKTI = os.path.join(KOK, "data", "kronoloji_cok_1dunya_B.js")

# ---- kaynak kısaltmaları -------------------------------------------------
def tdv(slug, bolum=""):
    return "TDV İslâm Ansiklopedisi, \"%s\" maddesi%s — islamansiklopedisi.org.tr/%s" % (
        slug, (" (" + bolum + ")") if bolum else "", slug)

TDV_BDS = tdv("birinci-dunya-savasi", "Ercüment Kuran, 1992")
OL = "1914-1918-online. International Encyclopedia of the First World War (Freie Universität Berlin, hakemli)"
def ol(madde):
    return OL + ", \"%s\" maddesi" % madde
def frus(cilt, bolum):
    return "Papers Relating to the Foreign Relations of the United States (FRUS), %s, bölüm başlığı: \"%s\" — history.state.gov" % (cilt, bolum)

# ---- maddeler ------------------------------------------------------------
# (t, gun, taraflar, b, tur, onem, dunya, yer_id, etiket_ek, d, kaynak)
M = []
def ekle(t, gun, taraflar, b, tur, onem, dunya, yer, ek, d, kaynak):
    M.append(dict(t=t, gun=gun, taraflar=taraflar, b=b, tur=tur, onem=onem,
                  dunya=dunya, yer=yer, ek=ek, d=d, kaynak=kaynak))

OSM = ["osmanli"]

# ===================== PARTİ 1 — Osmanlı cephelerinin karşı tarafı ========
ekle("1914-11-01", "1 Kasım 1914", ["rusya"],
     "Rus Kafkas ordusu sınırı aşıp Erzurum yönünde taarruza geçti", "savas", 3, 3, "", OSM + ["kafkas-cephesi"],
     "TDV'ye göre Kafkas cephesindeki çarpışmalar Rusların 1 Kasım 1914'te saldırıya geçerek Erzurum istikametine ilerlemesiyle başladı. Rusya'nın resmî savaş ilanı ertesi gün geldi.",
     tdv("sarikamis-harekati"))
ekle("1914-11-02", "2 Kasım 1914", ["rusya"],
     "Rusya Osmanlı Devleti'ne savaş ilan etti", "savas", 4, 4, "", OSM,
     "Osmanlı donanmasının 27 Ekim'de Karadeniz'e açılıp Rus gemilerini batırması ve Sivastopol ile Novorossiysk'i topa tutması üzerine Rusya 2 Kasım 1914'te Osmanlı Devleti'ne savaş ilan etti. TDV'ye göre Osmanlı Devleti böylece bir oldubitti sonucunda Almanya ve Avusturya-Macaristan'ın müttefiki olarak savaşa girdi.",
     TDV_BDS)
ekle("1914-11-06", "6-9 Kasım 1914", ["rusya"],
     "Köprüköy Muharebesi — Rus taarruzu geri püskürtüldü", "savas", 3, 2, "", OSM + ["kafkas-cephesi"],
     "Sarıkamış-Erzurum istikametinde ilerleyen Rus kuvvetleri 6-9 Kasım 1914'teki Köprüköy Muharebesi'nde 3. Osmanlı Ordusu'na yenilerek sınır yakınlarına çekildi.",
     TDV_BDS)
ekle("1914-11-22", "22 Kasım 1914", ["ingiltere", "ingiliz-hindistani"],
     "İngiliz-Hint kuvvetleri Basra'yı işgal etti", "isgal", 4, 3, "Basra", OSM + ["irak-cephesi"],
     "Hindistan'dan gelen İngiliz seferî kuvveti Şattülarap'tan ilerleyerek Basra'yı işgal etti; Irak cephesi böyle açıldı. TDV kendi içinde çelişiyor: \"basra\" ve \"kuveyt\" maddeleri 22 Kasım 1914, \"birinci-dunya-savasi\" maddesi 23 Kasım 1914 diyor. Burada şehrin kendi maddesinin günü kullanıldı.",
     tdv("basra") + " · " + tdv("kuveyt") + " · çelişen gün: " + TDV_BDS)
ekle("1915-01-04", "22 Aralık 1914 - 4 Ocak 1915", ["rusya"],
     "Sarıkamış'ta Rus Kafkas Ordusu'nun zaferi — Osmanlı taarruzu çöktü", "savas", 4, 3, "", OSM + ["kafkas-cephesi"],
     "Osmanlı 3. Ordusu'nun 22 Aralık 1914'te başlattığı Sarıkamış taarruzu 4 Ocak 1915'te sona erdi. Rus kumandanlığı Türk taarruz gücünün kırılmasını bekleyip 1 Ocak 1915'te Bardız-Sarıkamış-Eşekmeydanı üçgeninde kuşatma harekâtına geçti. TDV'ye göre 112.000 mevcudun 60.000'i kaybedildi; askerin çoğu soğuktan donmuştu.",
     tdv("sarikamis-harekati") + " · " + TDV_BDS)
ekle("1915-02-03", "3 Şubat 1915", ["ingiltere", "misir-sultanligi"],
     "Süveyş Kanalı savunması — Osmanlı kanal geçişi püskürtüldü", "savas", 3, 3, "", OSM + ["sina-filistin-cephesi"],
     "Cemal Paşa kumandasındaki 4. Ordu kuvvetleri 3 Şubat 1915'te Süveyş Kanalı'nı geçmeye girişti. İngiliz savunması karşısında başarısız olan kuvvetler 15 Şubat'ta Birüssebi'ye döndü.",
     TDV_BDS)
ekle("1915-02-19", "19 Şubat 1915", ["ingiltere", "fransa-cumhuriyet"],
     "İtilaf donanması Çanakkale Boğazı'nın dış tabyalarını topa tuttu", "savas", 3, 3, "", OSM + ["canakkale-cephesi"],
     "İngiliz savaş kabinesi Deniz Bakanı Churchill'in ısrarıyla Boğaz'ı denizden zorlama kararı almıştı. Hazırlıklar tamamlanınca 19 Şubat 1915'te Boğaz'ın dış tabyaları topa tutuldu. Amaç İstanbul'u işgal edip Rusya'ya en kısa yoldan yardım ulaştırmaktı.",
     TDV_BDS)
ekle("1915-03-18", "18 Mart 1915", ["ingiltere", "fransa-cumhuriyet"],
     "İtilaf donanmasının Boğaz'ı geçme teşebbüsü başarısız oldu — üç zırhlı battı", "savas", 4, 4, "", OSM + ["canakkale-cephesi"],
     "İngiliz-Fransız donanması 18 Mart 1915'te Çanakkale Boğazı'nı geçmeye teşebbüs etti. Türk topçularının ve denizcilerinin direnişi karşısında üç zırhlısını kaybedip geri çekildi. Bunun üzerine İngiliz savaş kabinesi Boğaz'ı karadan ve denizden ortak harekâtla almayı kararlaştırdı.",
     TDV_BDS)
ekle("1915-04-25", "25 Nisan 1915", ["yeni-zelanda"],
     "Anzak birlikleri Gelibolu'da Arıburnu'na çıktı", "savas", 4, 3, "", OSM + ["canakkale-cephesi"],
     "İngilizlerle birlikte Anzak denilen Avustralya ve Yeni Zelanda birlikleri 25 Nisan 1915'te Gelibolu yarımadasının Arıburnu kıyısına çıktı. 19. Tümen kumandanı Yarbay Mustafa Kemal'in Conkbayırı'nda düşmanı geri atması üzerine çıkarma hedefine ulaşamadı ve dar bir kıyı şeridinde siper savaşına döndü.",
     TDV_BDS)
ekle("1915-08-06", "6-7 Ağustos 1915 gecesi", ["ingiltere", "avustralya", "yeni-zelanda"],
     "Anafartalar taarruzu — İngiliz ve Anzak kuvvetleri yeni çıkarma yaptı", "savas", 4, 3, "", OSM + ["canakkale-cephesi"],
     "Takviye alan İngiliz ve Anzak kuvvetleri 6-7 Ağustos gecesi yarımadanın Anafartalar bölgesinde taarruza geçti. İlerleyişi Anafartalar Grubu kumandanı Albay Mustafa Kemal 9-10 Ağustos'ta durdurdu. 20-27 Ağustos'taki 2. Anafartalar taarruzu da sonuç vermedi.",
     TDV_BDS)
ekle("1915-07-14", "14 Temmuz 1915 - 30 Ocak 1916", ["ingiltere", "mekke-serifligi"],
     "Hüseyin-McMahon yazışmaları başladı", "ittifak", 4, 3, "", OSM + ["arap-isyani"],
     "Şerif Hüseyin oğlu Abdullah aracılığıyla İngilizlerle McMahon-Şerif Hüseyin mektupları adıyla bilinen müzakereleri başlattı (14 Temmuz 1915 - 30 Ocak 1916). TDV'ye göre İngiltere bu müzakereleri Fransızlara ancak Kasım 1915'te bildirdi.",
     tdv("serif-huseyin"))
ekle("1915-09-26", "26 Eylül 1915", ["ingiltere", "ingiliz-hindistani"],
     "General Townshend Kûtülamâre'yi işgal etti", "isgal", 3, 2, "Kût el-Amâre", OSM + ["irak-cephesi"],
     "Bağdat'ı hedefleyen General Townshend Dicle boyunca ilerleyerek yol üzerindeki Kûtülamâre'yi 26 Eylül 1915'te işgal etti. TDV'nin \"birinci-dunya-savasi\" maddesi aynı olayı yalnız \"1915 Eylülü sonunda\" diye tarihliyor.",
     tdv("kutulamare"))
ekle("1915-11-22", "22-26 Kasım 1915", ["ingiltere", "ingiliz-hindistani"],
     "Selmanıpak Muharebesi — Townshend'in Bağdat yürüyüşü durduruldu", "savas", 3, 3, "", OSM + ["irak-cephesi"],
     "General Townshend 22-26 Kasım 1915'te Bağdat'a 30 km mesafedeki Selmanıpak'ta taarruz etti. Çok sayıda kayıp veren İngiliz kuvvetleri Kûtülamâre'ye çekilmek zorunda kaldı.",
     tdv("kutulamare"))
ekle("1915-12-05", "5 Aralık 1915", ["ingiltere", "ingiliz-hindistani"],
     "Osmanlı kuvvetleri Townshend'i Kûtülamâre'de kuşattı", "savas", 3, 2, "Kût el-Amâre", OSM + ["irak-cephesi"],
     "Selmanıpak'tan çekilen İngiliz kuvvetleri Kûtülamâre'de 5 Aralık 1915'ten itibaren kuşatma altına alındı. Basra'dan gönderilen kurtarma kuvvetlerinin 1916 başındaki teşebbüsleri kuşatmayı yaramadı.",
     tdv("kutulamare"))
ekle("1915-01-01", "Aralık 1915 (gün kaynakta yok)", ["ingiltere", "suud-ucuncu"],
     "İngiltere ile İbn Suûd arasında gizli anlaşma (Aralık 1915)", "antlasma", 3, 2, "", OSM + ["arap-isyani"],
     "TDV'ye göre Aralık 1915'te varılan gizli anlaşmayla İngiltere, Necid toprakları ile Basra körfezinin güney kıyılarında (Küveyt hariç) İbn Suûd'un bağımsızlığını ve egemenliğini tanıdı. TDV, aynı toprakların Şerif Hüseyin'e de vaat edildiğini belirtiyor. Kaynak yalnız ayı verdiği için tarih yıl başına yazıldı; olay Aralık 1915'tir.",
     TDV_BDS + " · " + tdv("serif-huseyin"))
ekle("1916-02-16", "16 Şubat 1916", ["rusya"],
     "Rus ordusu Erzurum'a girdi", "isgal", 4, 3, "Erzurum", OSM + ["kafkas-cephesi"],
     "Savaşın başından beri Erzurum'u başlıca hedef seçen Rus ordusu şehre 16 Şubat 1916'da girdi. İşgal 12 Mart 1918'e kadar sürdü.",
     tdv("erzurum"))
ekle("1916-02-18", "18 Şubat 1916", ["rusya"],
     "Rus kuvvetleri Muş'u işgal etti", "isgal", 2, 1, "", OSM + ["kafkas-cephesi"],
     "TDV'ye göre Muş 18 Şubat 1916'da işgal edildi. Bu işgal kısa sürdü; şehir aynı yılın 26 Temmuz'unda geri alındı.",
     tdv("mus"))
ekle("1916-03-01", "1 Mart 1916", ["rusya"],
     "Rus kuvvetleri Bitlis'i işgal etti", "isgal", 2, 1, "Bitlis", OSM + ["kafkas-cephesi"],
     "Bitlis'teki Rus işgali 1 Mart 1916'da başladı ve 8 Ağustos 1916'ya kadar sürdü.",
     tdv("bitlis"))
ekle("1916-04-18", "18 Nisan 1916", ["rusya"],
     "Rus ordusu Trabzon'a girdi", "isgal", 3, 2, "Trabzon", OSM + ["kafkas-cephesi"],
     "Rus birlikleri 14 Nisan 1916'da Karadere savunma hattını yarıp 16 Nisan'da Yomra'ya ulaştı. Aynı gece Türk nüfus şehri boşalttı; Ruslar 18 Nisan'da şehre girdi ve 24 Şubat 1918'e kadar Trabzon'u elde tuttu.",
     tdv("trabzon"))
ekle("1916-04-29", "29 Nisan 1916", ["ingiltere", "ingiliz-hindistani"],
     "Townshend Kûtülamâre'de teslim oldu — 13.309 kişilik İngiliz ordusu esir", "savas", 4, 3, "Kût el-Amâre", OSM + ["irak-cephesi"],
     "Kurtarma kuvvetlerinin Felâhiye (5 Nisan) ve 21-22 Nisan taarruzları sonuç vermeyince General Lake, Townshend'e teslim müzakerelerini başlatmasını bildirdi. 29 Nisan 1916'da protokol imzalandı ve Türk kuvvetleri 13.309 kişilik İngiliz ordusunu teslim aldı. TDV'nin \"birinci-dunya-savasi\" maddesi teslimi 28 Nisan 1916 diye tarihliyor; olayın kendi maddesi olan \"kutulamare\" 29 Nisan diyor.",
     tdv("kutulamare") + " · çelişen gün: " + TDV_BDS)
ekle("1916-05-16", "16 Mayıs 1916", ["ingiltere"],
     "Sykes-Picot Antlaşması — Osmanlı Arap toprakları nüfuz bölgelerine ayrıldı", "antlasma", 5, 4, "", OSM + ["paylasim"],
     "İngiltere ile Fransa arasındaki gizli antlaşmaya göre Akkâ'nın kuzeyinde kalan Suriye kıyısı, Adana ve Mersin Fransa'ya; Bağdat-Basra arasındaki Dicle-Fırat bölgesi İngiltere'ye düşüyordu. Kalan topraklarda Akkâ-Kerkük çizgisinin kuzeyi Fransız, güneyi İngiliz nüfuzunda bir Arap devleti ya da federasyonu kurulacak, Filistin milletlerarası bölge olacaktı. Savaştan çekilen Bolşevikler 1917'de antlaşmayı ifşa etti (TDV \"serif-huseyin\"). TDV \"birinci-dunya-savasi\" antlaşmayı \"9 ve 16 Mayıs 1916\" diye tarihliyor.",
     tdv("serif-huseyin") + " · " + TDV_BDS)
ekle("1916-06-27", "27 Haziran 1916", ["hicaz-kralligi", "ingiltere"],
     "Şerif Hüseyin isyan bildirisini yayımladı — İngiliz destekli Arap İsyanı", "isyan", 4, 3, "Mekke", OSM + ["arap-isyani"],
     "Şerif Hüseyin Haziran 1916'da Mekke'de isyanı başlattı ve 27 Haziran tarihli bildirisinde İttihat ve Terakki yönetimini dinsizlikle suçlayarak isyanını meşrulaştırmaya çalıştı. TDV \"fahreddin-pasa\" maddesine göre Hüseyin ve dört oğlu 3 Haziran 1916'da Medine çevresindeki demiryolu ve telgraf hatlarını tahrip etmişti. Medine dışındaki önemli Hicaz şehirleri isyancıların eline geçti.",
     tdv("serif-huseyin") + " · " + tdv("fahreddin-pasa"))
ekle("1916-07-24", "24 Temmuz 1916", ["rusya"],
     "Rus ordusu Erzincan'ı işgal etti", "isgal", 3, 2, "Erzincan", OSM + ["kafkas-cephesi"],
     "Erzincan 24 Temmuz 1916'da Rus kuvvetlerince işgal edildi ve 26 Şubat 1918'de geri alındı.",
     tdv("erzincan"))
ekle("1916-07-26", "26 Temmuz 1916", ["rusya"],
     "Muş Rus işgalinden geri alındı", "toprak-kayip", 2, 1, "", OSM + ["kafkas-cephesi"],
     "TDV'ye göre 18 Şubat 1916'daki Muş işgali kısa sürdü ve şehir 26 Temmuz'da geri alındı. Aynı madde şehrin 1 Mayıs 1917'de \"kesin olarak\" kurtarıldığını da yazıyor; arada ikinci bir Rus işgali olduğu anlaşılıyor ama TDV onun başlangıç gününü vermiyor.",
     tdv("mus"))
ekle("1916-08-08", "8 Ağustos 1916", ["rusya"],
     "Rus kuvvetleri Bitlis'ten çekildi", "toprak-kayip", 2, 1, "Bitlis", OSM + ["kafkas-cephesi"],
     "Bitlis'teki Rus işgali 1 Mart - 8 Ağustos 1916 arasında sürdü.",
     tdv("bitlis"))
ekle("1916-09-17", "17 Eylül 1916", ["hicaz-kralligi"],
     "Tâif Şerif Hüseyin'in kuvvetlerine geçti", "toprak-kazanc", 3, 2, "Tâif", OSM + ["arap-isyani"],
     "TDV'ye göre Tâif, Osmanlı yönetimine karşı ayaklanan ve İngilizlerin desteklediği Şerif Hüseyin'in eline 17 Eylül 1916'da geçti.",
     tdv("taif"))
ekle("1917-01-01", "Şubat 1917 (gün kaynakta yok)", ["ingiltere", "ingiliz-hindistani"],
     "İngiliz kuvvetleri Kûtülamâre'yi geri aldı (Şubat 1917)", "isgal", 3, 2, "Kût el-Amâre", OSM + ["irak-cephesi"],
     "TDV'ye göre Kûtülamâre Şubat 1917'de, Bağdat Mart 1917'de İngilizlerin eline geçti. Kaynak yalnız ayı verdiği için tarih yıl başına yazıldı; olay Şubat 1917'dir.",
     tdv("kutulamare"))
ekle("1917-03-11", "11 Mart 1917", ["ingiliz-hindistani"],
     "İngiliz-Hint kuvvetleri Bağdat'ı işgal etti", "isgal", 4, 3, "Bağdat", OSM + ["irak-cephesi"],
     "İngiliz kuvvetlerinin 11 Mart 1917'de Bağdat'ı işgali, TDV'ye göre Irak'ın Türklerin elinden çıkmakta olduğunu gösteriyordu. Irak cephesindeki İngiliz kuvvetlerinin büyük kısmı Hindistan'dan gönderilmişti.",
     TDV_BDS + " · " + tdv("kutulamare"))
ekle("1917-01-01", "1916-Mart 1917 (gün kaynakta yok)", ["kacar"],
     "Osmanlı kuvvetleri Kirmanşah'ı boşalttı (Mart 1917)", "isgal", 2, 1, "Kirmanşah", OSM + ["iran-cephesi"],
     "TDV'ye göre Kirmanşah 1916'da Osmanlıların eline geçti ve 1917 Mart'ında tahliye edildi. İran savaşta tarafsızlığını ilan etmişti ama toprakları Osmanlı, Rus ve İngiliz kuvvetlerinin çarpışma alanı oldu. Kaynak yalnız ayı verdiği için tarih yıl başına yazıldı.",
     tdv("kirmansah"))
ekle("1917-11-16", "16 Kasım 1917", ["ingiltere"],
     "İngiliz kuvvetleri Yafa'ya girdi", "isgal", 3, 2, "Yafa", OSM + ["sina-filistin-cephesi"],
     "Gazze'nin düşmesinin ardından ilerleyen İngiliz kuvvetleri 16 Kasım 1917'de Yafa'ya girdi; TDV'ye göre bunun üzerine şehirden çıkarılmış yahudiler geri dönmeye başladı.",
     tdv("yafa"))
ekle("1918-02-24", "24 Şubat 1918", ["transkafkasya"],
     "Rus kuvvetleri Trabzon'dan çekildi — iki yıllık işgal sona erdi", "toprak-kayip", 3, 2, "Trabzon", OSM + ["kafkas-cephesi"],
     "Trabzon'daki Rus işgali 18 Nisan 1916 - 24 Şubat 1918 arasında sürdü. İhtilal sonrası dağılan Rus Kafkas ordusunun bıraktığı bölge o sırada Kafkasötesi Komiserliği'nin idaresindeydi.",
     tdv("trabzon"))
ekle("1918-02-26", "26 Şubat 1918", ["transkafkasya"],
     "Erzincan geri alındı", "toprak-kayip", 3, 2, "Erzincan", OSM + ["kafkas-cephesi"],
     "24 Temmuz 1916'dan beri Rus işgalinde bulunan Erzincan 26 Şubat 1918'de kurtarıldı.",
     tdv("erzincan"))
ekle("1918-03-12", "12 Mart 1918", ["transkafkasya"],
     "Kâzım Karabekir kumandasındaki kuvvetler Erzurum'u geri aldı", "toprak-kayip", 4, 2, "Erzurum", OSM + ["kafkas-cephesi"],
     "Rus ihtilali Erzurum için kurtuluşun başlangıcı oldu. Rus ordusu çekilirken yerini Ermeni birliklerine bıraktı; Kâzım Karabekir Paşa kumandasındaki Türk birlikleri 12 Mart 1918'de Erzurum'u geri aldı.",
     tdv("erzurum"))
ekle("1918-04-02", "2 Nisan 1918", ["transkafkasya"],
     "Van işgalden kurtarıldı", "toprak-kayip", 3, 2, "Van", OSM + ["kafkas-cephesi"],
     "TDV'ye göre Van 2 Nisan 1918'de düşman işgalinden kurtarıldı. Aynı madde Rus işgalinin 1915-1917 yıllarında şehirde büyük tahribata yol açtığını yazıyor; işgalin başlangıç gününü vermiyor.",
     tdv("van"))
ekle("1918-06-04", "4 Haziran 1918", ["gurcistan-demokratik-cumhuriyeti", "ermenistan-demokratik-cumhuriyeti", "azerbaycan-demokratik-cumhuriyeti"],
     "Batum Antlaşması — Osmanlı Devleti ile Kafkasya cumhuriyetleri arasında barış", "antlasma", 4, 3, "Batum", OSM + ["kafkas-cephesi"],
     "Feth Ali Han başkanlığındaki ilk Azerbaycan hükümeti 4 Haziran 1918'de Batum'da Osmanlı Devleti ile bir antlaşma yaptı. Aynı gün Gürcistan ve Ermenistan ile de antlaşma imzalandığı akademik kaynaklarda yer alır; TDV'nin burada okunan maddesi yalnız Azerbaycan'ınkini anıyor.",
     tdv("azerbaycan") + " · Gürcistan ve Ermenistan antlaşmaları için: F. Kazemzadeh, The Struggle for Transcaucasia 1917-1921 (New York 1951) — bu turda metinden okunmadı")
ekle("1918-09-02", "2-5 Eylül 1918", ["kacar", "ingiltere"],
     "Osmanlı kuvvetleri Tebriz'e girdi ve İngiliz birliklerini püskürttü", "isgal", 3, 2, "Tebriz", OSM + ["iran-cephesi"],
     "16 Ağustos 1918'de Tebriz'e sevk edilen Osmanlı tümeni 2 Eylül'de şehre ulaştı ve 5 Eylül'de İngilizleri püskürttü. Ekim 1918'de az bir kuvvet bırakılarak şehirden çekilindi. Ruslar Şubat 1918'de Tebriz'den ayrılmıştı. TDV'nin \"azerbaycan\" maddesi Osmanlıların Tebriz'e girişini \"Haziran 1918\" diye veriyor; burada şehrin kendi maddesinin günü kullanıldı.",
     tdv("tebriz") + " · çelişen ay: " + tdv("azerbaycan"))
ekle("1918-09-15", "15 Eylül 1918", ["ingiltere"],
     "Kafkas İslâm Ordusu Bakü'yü aldı", "toprak-kazanc", 4, 3, "Bakü", OSM + ["kafkas-cephesi"],
     "Nûri Paşa kumandasındaki Kafkas İslâm Ordusu 15 Eylül 1918'de Bakü'yü ele geçirdi ve şehir Azerbaycan Demokratik Cumhuriyeti'nin başkenti oldu. Şehri savunan kuvvetler arasında İngiliz birlikleri de vardı. TDV \"baku\" maddesi Bakü'nün önce İngilizlerce işgal edildiğini yazıyor.",
     tdv("azerbaycan") + " · " + tdv("baku"))
ekle("1918-09-23", "23 Eylül 1918", ["ingiltere"],
     "İngiliz kuvvetleri Hayfa'yı aldı", "isgal", 3, 2, "", OSM + ["sina-filistin-cephesi"],
     "31 Ekim 1917'de başlayan Filistin işgal harekâtı 23 Eylül 1918'de Hayfa'yı da içine aldı.",
     tdv("hayfa"))
ekle("1918-10-01", "1 Ekim 1918", ["ingiltere", "hicaz-kralligi"],
     "İngiliz ve Arap kuvvetleri Şam'a girdi", "isgal", 4, 3, "Şam", OSM + ["sina-filistin-cephesi", "arap-isyani"],
     "General Allenby kumandasındaki İngiliz ordusunun Arapların da katıldığı harekâtı sonunda Türk kuvvetleri Suriye'yi boşalttı ve 1 Ekim 1918'de Şam'ı terk etti. TDV \"halep\" maddesine göre İngiliz ve Arap kuvvetleri Osmanlı kuvvetlerini Şam'dan Halep'e doğru geri çekilmeye zorladı.",
     TDV_BDS + " · " + tdv("halep"))
ekle("1918-10-27", "27 Ekim 1918", ["ingiltere", "hicaz-kralligi"],
     "Halep önce Arap, ardından İngiliz kuvvetlerince işgal edildi", "isgal", 3, 2, "Halep", OSM + ["sina-filistin-cephesi", "arap-isyani"],
     "Dördüncü Ordu Kumandanı Cemal Paşa başarısız savunma teşebbüslerinden vazgeçip çekilince Halep önce Arap kuvvetleri, ardından İngilizler tarafından 27 Ekim 1918'de işgal edildi.",
     tdv("halep"))
ekle("1918-12-24", "24 Aralık 1918", ["ingiltere"],
     "İngiliz kuvvetleri Batum'u işgal etti", "isgal", 3, 2, "Batum", OSM + ["kafkas-cephesi"],
     "Mondros Mütarekesi ile Osmanlı Devleti Batum'dan çekilmek zorunda kalınca şehir 24 Aralık 1918'de İngilizlerce işgal edildi. İngilizler Temmuz 1920'de Kafkasya'dan çekilirken Batum'u boşalttı ve şehre Gürcistan hükümeti el koydu.",
     tdv("batum"))
ekle("1919-01-13", "13 Ocak 1919", ["hicaz-kralligi"],
     "Şerif Abdullah'ın kuvvetleri Medine'ye girdi", "toprak-kazanc", 3, 2, "Medine", OSM + ["arap-isyani"],
     "Fahreddin Paşa 10 Ocak 1919'da subaylarının baskısıyla Medine'den çıkarıldı. Şerif Abdullah'ın kuvvetleri teslim antlaşması gereğince 13 Ocak 1919'da şehre girdi.",
     tdv("fahreddin-pasa") + " · " + tdv("medine"))
ekle("1920-01-01", "Temmuz 1920 (gün kaynakta yok)", ["ingiltere", "gurcistan-demokratik-cumhuriyeti"],
     "İngilizler Batum'u boşalttı, şehre Gürcistan el koydu (Temmuz 1920)", "toprak-kazanc", 2, 2, "Batum", ["kafkas-cephesi"],
     "İngilizler Kafkasya'dan Temmuz 1920'de çekilirken Batum'u da boşalttı ve şehre Gürcistan hükümeti el koydu. Kaynak yalnız ayı verdiği için tarih yıl başına yazıldı.",
     tdv("batum"))
ekle("1920-04-25", "25 Nisan 1920", ["ingiltere"],
     "San Remo Konferansı — Irak ve Filistin mandası İngiltere'ye verildi", "antlasma", 5, 4, "", OSM + ["paylasim"],
     "San Remo Konferansı Şam'da ilan edilen Büyük Suriye Krallığı'nı tanımadı ve Filistin'i Suriye'den ayırdı. Suriye ile Lübnan Fransız, Irak ile Filistin İngiliz mandasına verildi. 1916 antlaşması değiştirilerek Musul bölgesi İngiliz nüfuz alanına bırakıldı; karşılığında Fransa'ya Musul petrollerinden hisse verildi. TDV konferansı yalnız \"Nisan 1920\" diye tarihliyor; 25 Nisan günü konferans kararının tarihidir.",
     TDV_BDS + " · gün: San Remo Konferansı kararı, 25 Nisan 1920 (Great Britain, Cmd. 1176, 1921) — bu turda metinden okunmadı")
ekle("1921-02-26", "26 Şubat 1921", ["kacar", "sovyet-rusya"],
     "İran-Sovyet Rusya Antlaşması", "antlasma", 3, 3, "Tebriz", [],
     "26 Şubat 1921'de İran ile Sovyet Rusya arasında bir antlaşma yapıldı. TDV'ye göre Tebriz bu antlaşmayla İran'a bırakıldı.",
     tdv("tebriz"))

# ===================== PARTİ 2 — Afrika · Asya-Pasifik · Latin Amerika · dominyonlar
AFR = ["afrika-cephesi"]
PAS = ["asya-pasifik-cephesi"]
LAT = ["latin-amerika"]
DOM = ["dominyonlar"]
DENIZ = ["deniz-savasi"]
F17 = "FRUS 1917, Supplement 1, The World War"
F18 = "FRUS 1918, Supplement 1, The World War, Volume I"

# ---- Afrika
ekle("1914-08-26", "26 Ağustos 1914", ["ingiltere", "fransa-cumhuriyet", "almanya"],
     "Togo'daki Alman kuvvetleri Kamina'da teslim oldu", "isgal", 3, 3, "", AFR,
     "İngiliz ve Fransız kuvvetleri karşısında tutunamayan Alman birlikleri Kamina kasabası önünde son kez direndi. Durumun umutsuz olduğunu gören Binbaşı von Döring kısa dalga telsiz istasyonunu tahrip ettirip 26 Ağustos 1914'te teslim oldu. Togo'daki çarpışmalar üç haftadan kısa sürdü.",
     ol("Colonial Warfare and Occupation (Africa)"))
ekle("1914-09-27", "27 Eylül 1914", ["ingiltere", "fransa-cumhuriyet", "almanya"],
     "İngiliz-Fransız kuvvetleri Kamerun'da Duala'yı aldı", "isgal", 3, 3, "Duala", AFR,
     "Tuğgeneral Dobell komutasındaki İngiliz-Fransız seferî kuvveti 27 Eylül 1914'ten itibaren kıyıdaki Duala'yı fazla direnişle karşılaşmadan ele geçirdi. Almanlar uzun sürecek bir savunma stratejisiyle iç bölgelere çekildi. Müttefikler Kamerun'daki Alman direnişini ancak Şubat 1916'da kırabildi.",
     ol("Colonial Warfare and Occupation (Africa)"))
ekle("1914-10-09", "9 Ekim 1914", ["guney-afrika-birligi", "almanya"],
     "Maritz isyanı — Güney Afrikalı subay birlikleriyle Almanların yanına geçti", "isyan", 3, 2, "", AFR + DOM,
     "Güney Afrika Birliği'nin Alman Güneybatı Afrikası'nı işgal kararına karşı çıkan Maritz, 9 Ekim 1914'te açıkça isyan etti ve en az 500 askeriyle Almanların safına geçti. 22 Ekim'de Alman birliklerinin desteğiyle Keimoes kasabasına saldırdı ama geri püskürtüldü. Güney Afrika Birliği'nin atlasta künyesi yoktur.",
     ol("Afrikaner (Boer) Rebellion (Union of South Africa)"))
ekle("1914-11-04", "4 Kasım 1914", ["ingiltere", "ingiliz-hindistani", "almanya"],
     "Tanga Muharebesi — İngiliz-Hint çıkarması Doğu Afrika'da püskürtüldü", "savas", 3, 3, "Tanga", AFR,
     "Doğu Afrika'daki ilk büyük çarpışmada General Aitken komutasındaki İngiliz-Hint \"B\" seferî kuvveti Tanga'nın üç km güneyine çıktı ve 4 Kasım 1914'te şehre ilerlemeye başladı. Taarruz Alman Schutztruppe'si karşısında başarısız oldu. Zafer, Alman komutanı Lettow-Vorbeck'in Vali Schnee karşısındaki ağırlığını pekiştirdi.",
     ol("Tanga, Battle of"))
ekle("1915-01-01", "Mayıs 1915 (gün kaynakta yok)", ["guney-afrika-birligi", "almanya"],
     "Botha komutasındaki Güney Afrika kuvvetleri Windhoek'i aldı (Mayıs 1915)", "isgal", 3, 2, "Vindhuk (Windhoek)", AFR + DOM,
     "Güney Afrika kuvvetleri Louis Botha komutasında ancak Mayıs 1915'te Windhoek'i ve telsiz istasyonunu ele geçirebildi. Almanlar ülkenin geri kalanını bir süre daha elde tuttu, ama Temmuz 1915'te teslim olmak zorunda kaldı. Kaynak yalnız ayı verdiği için tarih yıl başına yazıldı.",
     ol("Colonial Warfare and Occupation (Africa)"))
ekle("1916-11-06", "6 Kasım 1916", ["ingiliz-sudani"],
     "Ali Dînâr öldürüldü — Dârfûr İngiliz Sudanı'na bağlandı", "toprak-kazanc", 3, 2, "Darfur", AFR + ["osmanli"],
     "Savaşta Osmanlı Devleti'ne yaklaşan ve Bâbıâli ile yakın ilişki kuran Dârfûr Sultanı Ali Dînâr, Sudan hükümetinin gönderdiği kuvvetlerce 6 Kasım 1916'da öldürüldü. Bir süre sonra Dârfûr toprakları bir eyalet olarak İngiliz Sudanı'na bağlandı.",
     tdv("darfur"))
ekle("1916-12-01", "1 Aralık 1916", ["agadez-sultanligi", "fransa-cumhuriyet"],
     "Senûsî ve Tevârik kuvvetleri Agadez'i Fransız işgalinden kurtardı", "isyan", 3, 2, "Agadez", AFR + ["senusiyye"],
     "Senûsîlerin Büyük Sahra'daki mücadelesi bu dönemde en üst seviyeye çıktı. Nijer'in kuzeyindeki önemli yerel sultanlıklardan Agadez, 1 Aralık 1916 - 3 Mart 1917 arasında Fransız işgalinden kurtarıldı. Aynı gün papaz Charles de Foucauld Tevâriklerce öldürüldü.",
     tdv("senusiyye"))
ekle("1917-03-03", "3 Mart 1917", ["agadez-sultanligi", "fransa-cumhuriyet"],
     "Fransız kuvvetleri Agadez'i yeniden aldı", "isgal", 3, 2, "Agadez", AFR + ["senusiyye"],
     "TDV'ye göre Agadez'in Fransız işgalinden kurtulması 1 Aralık 1916 - 3 Mart 1917 arasında sürdü; 3 Mart 1917'de Fransız denetimi yeniden kuruldu.",
     tdv("senusiyye"))
ekle("1917-05-08", "8 Mayıs 1917", ["liberya", "almanya"],
     "Liberya Almanya ile diplomatik ilişkilerini kesti", "savas", 2, 2, "", AFR,
     "ABD Dışişleri belge neşrinde Liberya bölümü, Almanya ile ilişkilerin 8 Mayıs 1917'de kesildiğini kaydediyor.",
     frus(F17, "Severance of relations with Germany, May 8 (Liberya)"))
ekle("1917-08-04", "4 Ağustos 1917", ["liberya", "almanya"],
     "Liberya Almanya'ya savaş ilan etti", "savas", 3, 3, "", AFR,
     "Liberya, ABD'nin savaşa girişinden dört ay sonra, 4 Ağustos 1917'de Almanya'ya savaş ilan etti.",
     frus(F17, "Liberia's declaration of war against Germany, August 4"))
ekle("1918-11-25", "25 Kasım 1918", ["ingiltere", "almanya"],
     "Lettow-Vorbeck Kuzey Rodezya'da teslim oldu — Doğu Afrika'da savaş bitti", "son", 3, 3, "", AFR,
     "Doğu Afrika'da dört yıl boyunca yakalanamayan Alman komutan Lettow-Vorbeck, Eylül 1918'de koloniye yeniden girip batıya, Kuzey Rodezya'ya yöneldi. Avrupa'daki ateşkesi öğrenince 25 Kasım 1918'de teslim oldu. Güney Afrikalı birlikler bu tarihe kadar cephede kaldı.",
     ol("South Africa and the German East Africa Campaign (Union of South Africa)"))

# ---- Asya-Pasifik ve denizler
ekle("1914-08-23", "23 Ağustos 1914", ["almanya"],
     "Japonya Almanya'ya savaş ilan etti", "savas", 4, 4, "", PAS,
     "Almanya'nın cevapsız bıraktığı ültimatomun ardından Japonya 23 Ağustos 1914'te Almanya'ya savaş ilan etti ve Tsingtao'daki Alman üssünü almak üzere asker gönderdi.",
     tdv("japonya") + " · " + ol("Qingdao, Siege of/German-Japanese War"))
ekle("1914-08-29", "29 Ağustos 1914", ["yeni-zelanda", "almanya"],
     "Yeni Zelanda kuvvetleri Alman Samoası'nı direnişsiz aldı", "isgal", 3, 2, "", PAS + DOM,
     "İngiltere'nin çağrısıyla aceleyle toplanan 1.374 kişilik Yeni Zelanda seferî kuvveti 29 Ağustos 1914'te Apia'ya çıktı ve Alman Samoası'nın teslimini kabul etti. Samoa, Togo'dan sonra müttefiklere geçen ikinci Alman sömürgesiydi.",
     ol("Pacific Islands") + " · " + ol("Warfare 1914-1918 (New Zealand)"))
ekle("1914-10-03", "3 Ekim 1914", ["meiji-japonya", "almanya"],
     "Japon donanması Jaluit'i işgal etti — Alman Mikronezyası'nın işgali başladı", "isgal", 3, 3, "", PAS,
     "Japon deniz kurmay başkanlığı 3 Ekim 1914'te \"geçici\" işgal emrini verdi ve Amiral Yamaya aynı gün Marshall Adaları'nda Jaluit'i işgal etti. 12 Ekim'e kadar Doğu Karolin adalarından Kusaie, Ponape ve Truk alındı. Aynı dönemde ikinci filo Yap ile Palau'yu denetime aldı.",
     ol("Micronesia"))
ekle("1914-10-14", "14 Ekim 1914", ["meiji-japonya", "almanya"],
     "Saipan'ın alınmasıyla Alman Mikronezyası'nın Japon işgali tamamlandı", "isgal", 2, 2, "", PAS,
     "Japon kuvvetleri 14 Ekim 1914'te Mariana Adaları'ndaki Saipan'ı aldı ve böylece Alman Mikronezyası'nın işgali tamamlandı.",
     ol("Micronesia"))
ekle("1914-11-01", "1 Kasım 1914", ["ingiltere", "almanya"],
     "Coronel Deniz Muharebesi — Alman Doğu Asya filosu İngiliz filosunu yendi", "savas", 3, 3, "", DENIZ,
     "Alman Doğu Asya Kruvazör Filosu 1 Kasım 1914'te Şili'deki Coronel limanı açıklarında İngiliz 4. Kruvazör Filosu'nu yendi. 1.700'den fazla İngiliz denizci öldü; Alman tarafında üç yaralı vardı.",
     ol("Coronel, Battle of"))
ekle("1914-11-07", "7 Kasım 1914", ["meiji-japonya", "almanya"],
     "Tsingtao'daki Alman garnizonu Japonlara teslim oldu", "isgal", 4, 3, "Qingdao (Tsingtau)", PAS,
     "Japon ordusu Şantung'daki Kiaochow körfezinde Tsingtao'yu kuşattı ve ağustos sonunda yarımadayı iç bölgeden kesti. Son taarruz 29 Ekim'de başladı. Topçusunun çoğunu yitiren ve ikmali tükenen Alman garnizonu 7 Kasım 1914'te teslim oldu.",
     ol("Qingdao, Siege of/German-Japanese War"))
ekle("1914-11-09", "9 Kasım 1914", ["avustralya", "almanya"],
     "Avustralya kruvazörü Sydney, Emden'i Cocos Adaları'nda imha etti", "savas", 3, 2, "", DENIZ + DOM,
     "Alman kruvazörü Emden 9 Kasım 1914'te Direction Adası'ndaki haberleşme istasyonunu tahrip etmek üzere Cocos Takımadaları'na geldi. Orada Avustralya kruvazörü HMAS Sydney tarafından sıkıştırılıp imha edildi. Çıkarma birliği kabloları kesip telsiz istasyonunu yok etti ve bir yelkenliyle kaçarak Haziran 1915'te Almanya'ya ulaştı.",
     ol("Emden, SMS"))
ekle("1914-12-08", "8 Aralık 1914", ["ingiltere", "almanya"],
     "Falkland Deniz Muharebesi — von Spee filosu batırıldı", "savas", 3, 3, "", DENIZ,
     "Amiral Sturdee komutasındaki İngiliz filosu 8 Aralık 1914'te Falkland Adaları açıklarında Amiral von Spee'nin Alman filosunu yendi. Günün sonunda Alman gemilerinden biri dışında hepsi batırılmıştı.",
     ol("Falklands, Battle of the"))
ekle("1915-01-18", "18 Ocak 1915", ["meiji-japonya", "cin-cumhuriyeti"],
     "Japonya Yuan Shikai'ye \"Yirmi Bir Talep\"i sundu", "antlasma", 4, 3, "", PAS,
     "Japonya 18 Ocak 1915'te Cumhurbaşkanı Yuan Shikai'ye ekonomik, toprak, diplomatik ve siyasî nüfuz öngören gruplara ayrılmış \"Yirmi Bir Talep\"i sundu. Talepler bütünüyle kabul edilseydi Çin fiilen Japonya'nın vasalı konumuna düşecekti.",
     ol("China"))
ekle("1915-05-25", "25 Mayıs 1915", ["meiji-japonya", "cin-cumhuriyeti"],
     "Çin, Yirmi Bir Talep'e dayanan antlaşmaları imzaladı", "antlasma", 4, 3, "", PAS,
     "Japon elçisi Hioki 7 Mayıs 1915'te beşinci grup dışındaki bütün taleplerin kabulünü isteyen bir ültimatom verdi. Yuan Shikai ültimatomu ertesi gün kabul etti ve Çin 25 Mayıs'ta anlaşmayı imzaladı.",
     ol("China"))
ekle("1917-03-14", "14 Mart 1917", ["cin-cumhuriyeti", "almanya"],
     "Çin Almanya ile diplomatik ilişkilerini kesti", "savas", 3, 2, "", PAS,
     "ABD Dışişleri belge neşri, Çin'in Almanya ile ilişkilerini 14 Mart 1917'de kestiğini kaydediyor.",
     frus(F17, "Severance of relations with Germany by China, March 14"))
ekle("1917-07-22", "22 Temmuz 1917", ["siyam-chakri", "almanya", "habsburg"],
     "Siyam Almanya ve Avusturya-Macaristan'a savaş ilan etti", "savas", 3, 3, "", PAS,
     "Kral Vajiravudh 22 Temmuz 1917'de Almanya ve Avusturya-Macaristan'a savaş ilan etti. ABD'nin Nisan 1917'de savaşa girip tarafsız ülkeleri kendi safına çağırması üzerine Siyam bu fırsatla kendini modern bir devlet olarak göstermek istedi. Müttefiklerin artan baskısı da etkiliydi. Ertesi yıl 1.284 gönüllüden oluşan bir seferî kuvvet Fransa'ya gönderildi.",
     ol("Siam"))
ekle("1917-08-14", "14 Ağustos 1917", ["cin-cumhuriyeti", "almanya"],
     "Çin Almanya'ya savaş ilan etti", "savas", 4, 3, "", PAS,
     "Çin Cumhuriyeti, ilişkileri kesmesinden beş ay sonra, 14 Ağustos 1917'de savaş ilan etti.",
     frus(F17, "Declaration of war by China, August 14"))

# ---- Latin Amerika (FRUS bölüm başlıkları — günler başlıklarda)
ekle("1917-04-07", "7 Nisan 1917", ["kuba-cumhuriyeti", "almanya"],
     "Küba Almanya'ya savaş ilan etti", "savas", 3, 3, "", LAT,
     "Küba, ABD'nin Almanya'ya savaş ilanının ertesi günü, 7 Nisan 1917'de Almanya'ya savaş ilan etti.",
     frus(F17, "Declaration of war with Germany by Cuba, April 7"))
ekle("1917-04-07", "7 Nisan 1917", ["panama-cumhuriyeti", "almanya"],
     "Panama Almanya ile ilişkilerini kesti ve ABD'nin yanında yer aldı", "savas", 3, 3, "", LAT,
     "ABD Dışişleri belge neşri, Panama'nın Almanya ile ilişkilerini 7 Nisan 1917'de kestiğini kaydediyor. Panama Avusturya-Macaristan'a 10 Aralık 1917'de savaş ilan etti.",
     frus(F17, "Severance of relations with Germany by Panama, April 7"))
ekle("1917-04-11", "11 Nisan 1917", ["brezilya-cumhuriyeti", "almanya"],
     "Brezilya Almanya ile diplomatik ilişkilerini kesti", "savas", 3, 2, "", LAT,
     "ABD Dışişleri belge neşri, Brezilya'nın Almanya ile ilişkilerini 11 Nisan 1917'de kestiğini kaydediyor.",
     frus(F17, "Severance of relations with Germany by Brazil, April 11"))
ekle("1917-04-13", "13 Nisan 1917", ["bolivya-cumhuriyeti", "almanya"],
     "Bolivya Almanya ile diplomatik ilişkilerini kesti", "savas", 2, 2, "", LAT,
     "ABD Dışişleri belge neşri, Bolivya'nın Almanya ile ilişkilerini 13 Nisan 1917'de kestiğini kaydediyor.",
     frus(F17, "Severance of relations with Germany by Bolivia, April 13"))
ekle("1917-04-27", "27 Nisan 1917", ["guatemala", "almanya"],
     "Guatemala Almanya ile diplomatik ilişkilerini kesti", "savas", 2, 2, "", LAT,
     "ABD Dışişleri belge neşri, Guatemala'nın Almanya ile ilişkilerini 27 Nisan 1917'de kestiğini kaydediyor.",
     frus(F17, "Severance of relations with Germany by Guatemala, April 27"))
ekle("1917-05-17", "17 Mayıs 1917", ["honduras", "almanya"],
     "Honduras Almanya ile diplomatik ilişkilerini kesti", "savas", 2, 1, "", LAT,
     "ABD Dışişleri belge neşri, Honduras'ın Almanya ile ilişkilerini 17 Mayıs 1917'de kestiğini kaydediyor. Honduras'ın atlasta künyesi yoktur.",
     frus(F17, "Severance of relations with Germany by Honduras May 17; by Nicaragua, May 19"))
ekle("1917-05-19", "19 Mayıs 1917", ["nikaragua", "almanya"],
     "Nikaragua Almanya ile diplomatik ilişkilerini kesti", "savas", 2, 1, "", LAT,
     "ABD Dışişleri belge neşri, Nikaragua'nın Almanya ile ilişkilerini 19 Mayıs 1917'de kestiğini kaydediyor. Nikaragua'nın atlasta künyesi yoktur.",
     frus(F17, "Severance of relations with Germany by Honduras May 17; by Nicaragua, May 19"))
ekle("1917-06-17", "17 Haziran 1917", ["haiti", "almanya"],
     "Haiti Almanya ile diplomatik ilişkilerini kesti", "savas", 2, 1, "", LAT,
     "ABD Dışişleri belge neşri, Haiti'nin Almanya ile ilişkilerini 17 Haziran 1917'de kestiğini kaydediyor.",
     frus(F17, "Severance of relations with Germany by Haiti, June 17"))
ekle("1917-10-06", "6 Ekim 1917", ["peru-cumhuriyeti", "almanya"],
     "Peru Almanya ile diplomatik ilişkilerini kesti", "savas", 2, 2, "", LAT,
     "ABD Dışişleri belge neşri, Peru'nun Almanya ile ilişkilerini 6 Ekim 1917'de kestiğini kaydediyor.",
     frus(F17, "Severance of relations with Germany by Peru, October 6; by Uruguay, October 7"))
ekle("1917-10-07", "7 Ekim 1917", ["uruguay-cumhuriyeti", "almanya"],
     "Uruguay Almanya ile diplomatik ilişkilerini kesti", "savas", 2, 2, "", LAT,
     "ABD Dışişleri belge neşri, Uruguay'ın Almanya ile ilişkilerini 7 Ekim 1917'de kestiğini kaydediyor.",
     frus(F17, "Severance of relations with Germany by Peru, October 6; by Uruguay, October 7"))
ekle("1917-10-26", "26 Ekim 1917", ["brezilya-cumhuriyeti", "almanya"],
     "Brezilya ile Almanya arasında savaş hali ilan edildi", "savas", 4, 3, "", LAT,
     "Brezilya, ilişkileri kesmesinden altı ay sonra, 26 Ekim 1917'de Almanya ile savaş halinde olduğunu ilan etti. Brezilya savaşa giren tek Güney Amerika ülkesiydi.",
     frus(F17, "Declaration of a state of war between Brazil and Germany, October 26"))
ekle("1917-12-07", "7 Aralık 1917", ["ekvador-cumhuriyeti", "almanya"],
     "Ekvador Almanya ile diplomatik ilişkilerini kesti", "savas", 2, 1, "", LAT,
     "ABD Dışişleri belge neşri, Ekvador'un Almanya ile ilişkilerini 7 Aralık 1917'de kestiğini kaydediyor.",
     frus(F17, "Severance of relations with Germany by Ecuador, December 7"))
ekle("1917-12-10", "10 Aralık 1917", ["panama-cumhuriyeti", "habsburg"],
     "Panama Avusturya-Macaristan'a savaş ilan etti", "savas", 2, 2, "", LAT,
     "Panama 10 Aralık 1917'de Avusturya-Macaristan'a savaş ilan etti; Küba aynı adımı 16 Aralık'ta attı.",
     frus(F17, "Declaration of war on Austria-Hungary by Panama, December 10; by Cuba, December 16"))
ekle("1917-12-16", "16 Aralık 1917", ["kuba-cumhuriyeti", "habsburg"],
     "Küba Avusturya-Macaristan'a savaş ilan etti", "savas", 2, 2, "", LAT,
     "Küba 16 Aralık 1917'de Avusturya-Macaristan'a savaş ilan etti.",
     frus(F17, "Declaration of war on Austria-Hungary by Panama, December 10; by Cuba, December 16"))
ekle("1918-04-21", "21 Nisan 1918", ["guatemala", "almanya"],
     "Guatemala Almanya ile savaş halinde olduğunu ilan etti", "savas", 2, 2, "", LAT,
     "Guatemala 21 Nisan 1918'de Almanya ile savaş halini ilan etti; onu 8 Mayıs'ta Nikaragua, 23 Mayıs'ta Kosta Rika izledi.",
     frus(F18, "Declaration of a state of war with Germany by Guatemala, April 21, Nicaragua, May 8, and Costa Rica, May 23"))
ekle("1918-05-08", "8 Mayıs 1918", ["nikaragua", "almanya"],
     "Nikaragua Almanya ile savaş halinde olduğunu ilan etti", "savas", 2, 1, "", LAT,
     "Nikaragua 8 Mayıs 1918'de Almanya ile savaş halini ilan etti. Nikaragua'nın atlasta künyesi yoktur.",
     frus(F18, "Declaration of a state of war with Germany by Guatemala, April 21, Nicaragua, May 8, and Costa Rica, May 23"))
ekle("1918-05-23", "23 Mayıs 1918", ["kosta-rika", "almanya"],
     "Kosta Rika Almanya ile savaş halinde olduğunu ilan etti", "savas", 2, 1, "", LAT,
     "Kosta Rika 23 Mayıs 1918'de Almanya ile savaş halini ilan etti. Kosta Rika'nın atlasta künyesi yoktur.",
     frus(F18, "Declaration of a state of war with Germany by Guatemala, April 21, Nicaragua, May 8, and Costa Rica, May 23"))
ekle("1918-07-12", "12 Temmuz 1918", ["haiti", "almanya"],
     "Haiti Almanya ile savaş halinde olduğunu ilan etti", "savas", 2, 2, "", LAT,
     "ABD işgali altındaki Haiti 12 Temmuz 1918'de Almanya ile savaş halini ilan etti; onu 19 Temmuz'da Honduras izledi.",
     frus(F18, "Declaration of a state of war with Germany by Haiti, July 12, and by Honduras, July 19"))
ekle("1918-07-19", "19 Temmuz 1918", ["honduras", "almanya"],
     "Honduras Almanya ile savaş halinde olduğunu ilan etti", "savas", 2, 1, "", LAT,
     "Honduras 19 Temmuz 1918'de Almanya ile savaş halini ilan etti. Honduras'ın atlasta künyesi yoktur.",
     frus(F18, "Declaration of a state of war with Germany by Haiti, July 12, and by Honduras, July 19"))

# ---- dominyonlar
ekle("1914-08-04", "Ağustos 1914 (İngiltere'nin ilan günü: 4 Ağustos)", ["kanada"],
     "Kanada, İngiltere'nin savaş ilanıyla kendiliğinden savaşa girdi", "savas", 4, 3, "", DOM,
     "Kanada Dominyonu, İngiltere Ağustos 1914'te savaşa girdiği anda kendiliğinden savaş haline geçti; ayrı bir savaş ilanı yapmadı. İngiltere'nin Almanya'ya savaş ilanı 4 Ağustos 1914'tür (TDV).",
     ol("Canada") + " · gün: " + TDV_BDS)
ekle("1917-04-09", "9-12 Nisan 1917", ["kanada"],
     "Vimy Sırtı Muharebesi — Kanada kolordusu sırtı aldı", "savas", 4, 3, "", DOM,
     "Vimy Sırtı Muharebesi'nin ilk günü, 9 Nisan 1917, Kanada askerî tarihinin tek günde en kanlı günü oldu: 2.500'den fazla ölü. Sırtın alınması müttefik basınında büyük övgüyle karşılandı.",
     ol("Canada"))

# ---- üretim ----------------------------------------------------------------
def madde(m):
    taraflar = m["taraflar"]
    etiket = ["1-dunya-savasi"] + m["ek"] + [x for x in taraflar] + ["konu-siyasi"]
    tekil = []
    for e in etiket:
        if e not in tekil:
            tekil.append(e)
    return {
        "t": m["t"], "gun": m["gun"],
        "devlet": taraflar[0], "taraflar": taraflar, "devletler": taraflar,
        "b": m["b"], "tur": m["tur"], "onem": m["onem"], "dunya": m["dunya"],
        "kapsam": "dis", "yer_id": m["yer"], "kapsam_genis": not m["yer"],
        "etiket": tekil, "d": m["d"], "kaynak": m["kaynak"],
    }

cikti = sorted((madde(m) for m in M), key=lambda x: (x["t"], x["b"]))
bas = """// =====================================================================
// I. DÜNYA SAVAŞI — AVRUPA DIŞI çok taraflı kronoloji (1DUNYA-B)
// =====================================================================
// 🔴 ÜRETİLMİŞ DOSYA — elle düzenleme; üretici denetim/ARAC-1DUNYA-B-URET-0917.py
// window.KRONOLOJI_COK_1DUNYA_B — şartname oturumlar/BIRINCI-DUNYA-SAVASI-0917.md
// Her madde `taraflar[]`daki HER künyeye eklenir (js/app.js cokTarafliKronolojiEkle).
// Osmanlı tarafı çekirdek olaylarda; burada `taraflar`a yazılmadı, `etiket`te "osmanli".
// `gun`: kaynağın verdiği hassasiyet. "gün kaynakta yok" yazan maddelerde t = YYYY-01-01.
"""
with open(CIKTI, "w", encoding="utf-8", newline="\n") as f:
    f.write(bas + "\nwindow.KRONOLOJI_COK_1DUNYA_B = [\n")
    f.write(",\n".join(json.dumps(x, ensure_ascii=False) for x in cikti))
    f.write("\n];\n")
print("madde:", len(cikti), "→", CIKTI)
