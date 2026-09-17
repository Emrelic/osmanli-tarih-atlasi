"""1DUNYA-A üreticisi — data/kronoloji_cok_1dunya_A.js

Şartname: oturumlar/BIRINCI-DUNYA-SAVASI-0917.md (1DUNYA-A · Avrupa).
Maddeler aşağıda ELLE yazılır; bu betik yalnız biçimi basar (JSON satırları).
Sınav: node denetim/ARAC-1DUNYA-A-SINA-0917.js

KURAL (bu dosyanın): her madde için `kaynak` gerçekten OKUNMUŞ bir metne
dayanır — TDV `birinci-dunya-savasi` gövdesi ya da 1914-1918-online
(International Encyclopedia of the First World War, FU Berlin) zaman çizelgesi /
makalesi. Kaynaklar GÜNDE çelişiyorsa madde YAZILMAZ, `CELISKI` listesine
girer ve koordinatöre sorulur (CLAUDE.md §7.1⑥).
`taraflar`dan, o künyenin ETKİN kronolojisinde aynı olay zaten varsa o künye
ÇIKARILIR (app.js t+b eşitliğiyle eler, farklı başlık mükerrer üretir).
"""
import io, json, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")

TDV = ("TDV İslâm Ansiklopedisi, «Birinci Dünya Savaşı» (Ercüment Kuran, 1992, c. 6, s. 196-200) "
       "— islamansiklopedisi.org.tr/birinci-dunya-savasi")
TL = ("1914-1918-online. International Encyclopedia of the First World War (Freie Universität Berlin), "
      "WW1 Timeline — encyclopedia.1914-1918-online.net/ww1-timeline/")
EK = "1914-1918-online. International Encyclopedia of the First World War (Freie Universität Berlin), "
SE = EK + "Dmitar Tasić, «Warfare 1914-1918 (South East Europe)» — encyclopedia.1914-1918-online.net/article/warfare-1914-1918-south-east-europe/"
LUX = EK + "Benoît Majerus / Charel Roemer, «Luxembourg» — encyclopedia.1914-1918-online.net/article/luxembourg/"
BEL = EK + "«Belgium» — encyclopedia.1914-1918-online.net/article/belgium/"
MNE = EK + "«Montenegro» — encyclopedia.1914-1918-online.net/article/montenegro/"
AHO = EK + "«Occupation during and after the War (Austria-Hungary)» — encyclopedia.1914-1918-online.net/article/occupation-during-and-after-the-war-austria-hungary/"
POL = EK + "«Poland» — encyclopedia.1914-1918-online.net/article/poland/"
ROM = EK + "«Romania» — encyclopedia.1914-1918-online.net/article/romania-1-1/"
EF = EK + "«Eastern Front» — encyclopedia.1914-1918-online.net/article/eastern-front/"
USA = EK + "«United States of America» — encyclopedia.1914-1918-online.net/article/united-states-of-america/"
GRE = EK + "«Greece» — encyclopedia.1914-1918-online.net/article/greece/"
POR = EK + "«Portugal» — encyclopedia.1914-1918-online.net/article/portugal/"

def ve(*k):
    return " · ".join(k)

# (t, taraflar, b, tur, onem, dunya, d, kaynak, ek_etiket)
M = [
# ───────────────────────── PARTİ 1 · 1914 ─────────────────────────
("1914-06-28", ["sirbistan-kralligi"],
 "Saraybosna suikastı — Avusturya-Macaristan veliahdı Franz Ferdinand öldürüldü", "savas", 5, 5,
 "28 Haziran 1914'te Avusturya-Macaristan veliahdı ile eşi Saraybosna'da bir Sırp milliyetçisi tarafından öldürüldü. "
 "TDV'ye göre bu olay İttifak ve İtilâf devletlerinin zincirleme olarak birbirine savaş açmasına yol açtı. "
 "(Habsburg künyesinde aynı olay kendi başlığıyla duruyor; bu madde Sırbistan tarafı içindir.)",
 ve(TDV, TL), ["temmuz-krizi"]),
("1914-07-23", ["habsburg", "sirbistan-kralligi"],
 "Avusturya-Macaristan Sırbistan'a ültimatom verdi", "diplomasi", 4, 4,
 "Saraybosna suikastının ardından Avusturya-Macaristan Sırbistan'a ağır şartlar taşıyan bir ültimatom verdi. "
 "Ültimatomun beş gün sonra savaş ilanına dönüşmesi Temmuz Krizi'nin kırılma noktası oldu.",
 TL, ["temmuz-krizi"]),
("1914-07-28", ["sirbistan-kralligi"],
 "Avusturya-Macaristan Sırbistan'a savaş ilan etti", "savas", 5, 5,
 "Avusturya-Macaristan 28 Temmuz 1914'te Sırbistan'a savaş açtı; kaynaklara göre aynı gece ilk atışlar yapıldı. "
 "Bu ilan büyük devletleri zincirleme olarak savaşa sürükledi.",
 ve(TDV, TL), ["savas-ilani"]),
("1914-08-01", ["almanya", "rusya"],
 "Almanya Rusya'ya savaş ilan etti", "savas", 5, 5,
 "Rusya'nın 30 Temmuz seferberliği üzerine Almanya 1 Ağustos 1914'te Rusya'ya savaş ilan etti. "
 "TDV'ye göre Osmanlı-Alman gizli ittifakı bu ilanın ertesi günü İstanbul'da imzalandı.",
 ve(TDV, TL), ["savas-ilani", "dogu-cephesi"]),
("1914-08-02", ["almanya"],
 "Alman ordusu tarafsız Lüksemburg'u işgal etti", "isgal", 4, 3,
 "Lüksemburg, Alman ordusu için önemli bir demiryolu kavşağı olduğundan, savaşın fiilen başlamasından önce 2 Ağustos 1914 sabahı işgal edildi. "
 "Şansölye Bethmann Hollweg 4 Ağustos'ta Lüksemburg ve Belçika'nın protestolarının göz ardı edildiğini açıkladı.",
 LUX, ["bati-cephesi"]),
("1914-08-02", ["belcika", "almanya"],
 "Almanya Belçika'ya 24 saatlik geçiş ültimatomu verdi", "diplomasi", 4, 4,
 "Alman elçisi 2 Ağustos 1914'te Brüksel'de ültimatomu teslim etti; Belçika'ya cevap için yirmi dört saat tanındı. "
 "Belçika geçiş iznini reddetti.",
 BEL, ["bati-cephesi"]),
("1914-08-03", ["almanya", "fransa-cumhuriyet"],
 "Almanya Fransa'ya savaş ilan etti", "savas", 5, 5,
 "Almanya 1 Ağustos'ta Rusya'ya savaş açtıktan sonra 3 Ağustos 1914'te Rusya'nın müttefiki Fransa'ya da savaş ilan etti. "
 "Batı Cephesi'nde savaş, aynı günlerde Alman ordusunun Belçika ve Lüksemburg'a girmesiyle başladı.",
 ve(TDV, TL), ["savas-ilani", "bati-cephesi"]),
("1914-08-04", ["fransa-cumhuriyet"],
 "Almanya Belçika'yı işgale başladı, İngiltere Almanya'ya savaş ilan etti", "savas", 5, 5,
 "4 Ağustos 1914'te Alman Meuse Ordusu Liège yakınında Belçika topraklarına girdi; Kral I. Albert aynı gün parlamentoda ülkenin savaşa girdiğini bildirdi. "
 "İngiltere de aynı gün antlaşmalar gereği Almanya'ya savaş ilan etti ve bütün Britanya İmparatorluğu savaşa girdi. "
 "(Almanya, Belçika ve İngiltere künyelerinde bu olay zaten var; madde Fransa tarafı içindir.)",
 ve(TDV, TL, BEL), ["savas-ilani", "bati-cephesi"]),
("1914-08-07", ["karadag", "habsburg"],
 "Karadağ Avusturya-Macaristan'a savaş ilan etti", "savas", 4, 3,
 "Karadağ, Sırbistan'ın yanında yer alarak 7 Ağustos 1914'te Avusturya-Macaristan'a savaş ilan etti. "
 "Avusturya-Macaristan savaştan önce Karadağ'a mali destek ve toprak karşılığında tarafsız kalmasını önermişti.",
 ve(TL, MNE), ["savas-ilani", "balkan-cephesi"]),
("1914-08-17", ["sirbistan-kralligi", "habsburg"],
 "Cer Muharebesi — İtilâf'ın ilk zaferi", "savas", 4, 3,
 "Savaşın ilk büyük muharebesi 17-19 Ağustos 1914'te batı Sırbistan'da Cer Dağı'nın yamaçlarında yapıldı. "
 "Avusturya-Macaristan kuvvetleri, özellikle subay kadrosunda ağır kayıplarla geri püskürtüldü; bu, İtilâf tarafının savaştaki ilk zaferi sayılır.",
 SE, ["balkan-cephesi"]),
("1914-08-20", ["belcika", "almanya"],
 "Alman ordusu Brüksel'e girdi, Belçika ordusu Anvers'e çekildi", "isgal", 4, 3,
 "Liège kuşatması sürerken Belçika sahra ordusu kademe kademe kuzeye, müstahkem Anvers'e çekildi. "
 "Kral ve hükümet 20 Ağustos'a kadar Anvers'e geçmişti; açık şehir ilan edilen Brüksel aynı gün savaşmadan düştü.",
 BEL, ["bati-cephesi"]),
("1914-08-21", ["fransa-cumhuriyet", "almanya"],
 "Charleroi Muharebesi — Sınır Muharebeleri", "savas", 3, 3,
 "Almanlar Belçika'da ilerleyip 7-22 Ağustos 1914 muharebelerini kazandıktan sonra Paris'e yöneldiler. "
 "Charleroi Muharebesi, Almanların galip geldiği bu Ağustos 1914 muharebelerinin halkalarından biriydi.",
 ve(TDV, TL), ["bati-cephesi"]),
("1914-08-28", ["ingiltere", "almanya"],
 "Helgoland Körfezi Deniz Muharebesi", "savas", 3, 3,
 "28 Ağustos 1914'te Kuzey Denizi'ndeki Helgoland Körfezi'nde İngiliz ve Alman deniz kuvvetleri çarpıştı. "
 "TDV'ye göre savaş boyunca açık denizlerde İngiliz ve Fransız donanmaları hâkim kaldı.",
 ve(TL, TDV), ["deniz-savasi"]),
("1914-09-05", ["fransa-cumhuriyet", "almanya", "ingiltere"],
 "Birinci Marne Muharebesi — Almanların Paris yürüyüşü durduruldu", "savas", 5, 5,
 "General Joffre komutasında Marne nehrine çekilen Fransız kuvvetleri 5-10 Eylül 1914'teki Marne Meydan Muharebesi'nde Almanları yendi. "
 "Bunun üzerine Alman orduları Oise ile Verdun arasında cephe tuttu; Fransızların solunda bir İngiliz ordusu mevzilendi.",
 ve(TDV, TL), ["bati-cephesi"]),
("1914-09-07", ["almanya", "rusya"],
 "Birinci Mazurya Gölleri Muharebesi", "savas", 4, 3,
 "Doğu Prusya'da, TDV'ye göre Almanların zaferiyle biten Tannenberg Meydan Muharebesi'nin (26-30 Ağustos 1914) "
 "hemen ardından Alman ve Rus orduları Mazurya Gölleri'nde karşılaştı.",
 ve(TL, TDV), ["dogu-cephesi"]),
("1914-09-12", ["fransa-cumhuriyet", "almanya", "ingiltere"],
 "Birinci Aisne Muharebesi — «Denize Koşu» başladı", "savas", 3, 3,
 "Marne yenilgisinden sonra Alman orduları, TDV'ye göre Oise ırmağı ile Verdun arasında cephe tuttu. "
 "Aisne Muharebesi'yle başlayan «Denize Koşu» evresinde Almanların Fransız ve İngiliz ordularını ayırmak için "
 "Manş istikametinde giriştiği kuşatma hareketi başarılı olmadı.",
 ve(TL, TDV), ["bati-cephesi"]),
("1914-11-06", ["habsburg", "sirbistan-kralligi"],
 "Avusturya-Macaristan'ın Sırbistan'a üçüncü taarruzu başladı", "savas", 3, 3,
 "Avusturya-Macaristan'ın Sırbistan'a karşı üçüncü ve son 1914 taarruzu 6 Kasım 1914'te başladı. "
 "Mühimmatı tükenen ve sayıca üstün düşmana karşı çekilmek zorunda kalan Sırp ordusu başkent Belgrad'ı da boşalttı.",
 SE, ["balkan-cephesi"]),
("1914-12-03", ["sirbistan-kralligi", "habsburg"],
 "Kolubara Muharebesi — Sırp karşı taarruzu", "savas", 4, 3,
 "Geri çekilme Sırp ordusuna yeniden toplanma ve mühimmat ikmali imkânı verdi. "
 "Sırplar 3 Aralık 1914'te ikmal hatları aşırı uzamış Avusturya-Macaristan kuvvetlerine ani bir karşı taarruz başlattı.",
 SE, ["balkan-cephesi"]),
("1914-12-14", ["sirbistan-kralligi", "habsburg"],
 "Sırplar Belgrad'ı geri aldı", "toprak-kazanc", 4, 3,
 "TDV'ye göre Avusturyalılar ele geçirmiş oldukları Belgrad'ı Sırpların taarruzları sonunda 14 Aralık 1914'te geri verdiler. "
 "Böylece Avusturya-Macaristan'ın 1914 Sırbistan seferi başarısızlıkla sona erdi. "
 "(TDV Belgrad'ın düşüş gününü 29 Kasım veriyor; ikinci bir kaynakla doğrulanamadığı için ayrı madde yazılmadı.)",
 ve(TDV, SE), ["balkan-cephesi"]),
("1914-12-08", ["fransa-cumhuriyet", "almanya"],
 "Birinci Şampanya Muharebesi", "savas", 3, 2,
 "Siper savaşına dönüşen Batı Cephesi'nde Şampanya'da Fransız ve Alman kuvvetleri arasında muharebe başladı. "
 "TDV'ye göre bu dönemde Ypres-Arras-Soissons-Verdun-Belfort hattı boyunca siper savaşları sürüyordu.",
 ve(TL, TDV), ["bati-cephesi"]),
("1914-12-24", ["ingiltere", "almanya"],
 "Batı Cephesi'nde Noel Ateşkesi", "savas", 2, 3,
 "1914 Noel'inde Batı Cephesi'nin bazı kesimlerinde İngiliz ve Alman askerleri kendiliğinden ve resmî olmayan bir ateşkes yaptı.",
 TL, ["bati-cephesi"]),
# ───────────────────────── PARTİ 1 · 1915 ─────────────────────────
("1915-01-24", ["ingiltere", "almanya"],
 "Dogger Bank Deniz Muharebesi", "savas", 3, 2,
 "24 Ocak 1915'te Kuzey Denizi'ndeki Dogger Bank'ta İngiliz ve Alman deniz kuvvetleri çarpıştı.",
 TL, ["deniz-savasi"]),
("1915-02-04", ["almanya", "ingiltere"],
 "Almanya sınırsız denizaltı savaşını ilan etti", "savas", 4, 4,
 "Almanya 4 Şubat 1915'te sınırsız denizaltı savaşını ilan etti. "
 "TDV'ye göre Alman denizaltıları düşman savaş ve ticaret gemilerini batırmayı sürdürdü.",
 ve(TL, TDV), ["deniz-savasi"]),
("1915-05-02", ["almanya", "habsburg", "rusya"],
 "Gorlice-Tarnów yarması — Rus ordusu Galiçya'dan çekildi", "savas", 5, 4,
 "General Mackensen komutasındaki 11. Alman Ordusu 1915 ilkbaharında taarruza geçerek Rusları Galiçya'yı boşaltmak zorunda bıraktı. "
 "Avusturya birlikleri Haziran 1915'te, bir önceki eylülde Rusların aldığı Lemberg'e yeniden girdi.",
 ve(TDV, TL, POL), ["dogu-cephesi"]),
("1915-05-07", ["almanya", "ingiltere", "abd"],
 "Lusitania bir Alman denizaltısınca batırıldı", "savas", 4, 4,
 "İngiliz yolcu gemisi Lusitania 7 Mayıs 1915'te bir Alman denizaltısı tarafından batırıldı. "
 "TDV'ye göre ABD'nin 1917'de savaşa girmesinin başlıca sebebi Alman denizaltılarının Amerikan ticaret gemilerini batırmasıydı.",
 ve(TL, TDV), ["deniz-savasi"]),
("1915-05-23", ["habsburg"],
 "İtalya Avusturya-Macaristan'a savaş ilan etti", "savas", 5, 4,
 "Üçlü İttifak üyesi olduğu hâlde önce tarafsız kalan İtalya, 26 Nisan 1915 Londra Antlaşması'yla tavizler aldıktan sonra 23 Mayıs 1915'te Avusturya-Macaristan'a savaş ilan etti. "
 "TDV'ye göre Avusturyalılar bu yüzden 300.000 kişilik bir kuvveti İtalya sınırında tutmak zorunda kaldı. "
 "(İtalya künyesinde bu olay zaten var; madde Habsburg tarafı içindir.)",
 ve(TDV, TL), ["savas-ilani", "italya-cephesi"]),
("1915-06-23", ["italya", "habsburg"],
 "Birinci Isonzo Muharebesi", "savas", 3, 3,
 "İtalya cephesindeki Isonzo muharebelerinin ilki 23 Haziran 1915'te başladı. "
 "TDV'ye göre bu cephedeki muharebelerde hiçbir taraf üstünlük sağlayamadı.",
 ve(TL, TDV), ["italya-cephesi"]),
("1915-08-05", ["almanya", "rusya", "kongre-polonyasi"],
 "Alman ordusu Varşova'ya girdi — Rus Polonyası işgal edildi", "isgal", 5, 4,
 "Alman süvarisi 5 Ağustos 1915'te Varşova'ya girdi. "
 "TDV'ye göre Almanlar yaz boyunca Polonya'yı işgal etti, ağır kayıp veren Ruslar eylülde doğuya çekildi; Varşova'nın düşüşünden sonra Polonya yardım komitesi Petrograd'a taşındı.",
 ve(POL, TDV), ["dogu-cephesi"]),
("1915-09-06", ["bulgaristan-kralligi", "almanya"],
 "Bulgaristan Merkezî Devletler'le gizli ittifak anlaşması imzaladı", "ittifak", 4, 3,
 "TDV'ye göre Bulgarlar 6 Eylül 1915'te Almanya ve müttefikleriyle gizli bir anlaşma yaptı ve karşılığında Osmanlı Devleti'nden Dimetoka'nın bir bölümünü aldı. "
 "Bu anlaşma Bulgaristan'ın bir ay sonra savaşa girmesinin zeminini hazırladı.",
 TDV, ["ittifak"]),
("1915-09-22", ["fransa-cumhuriyet", "almanya"],
 "İkinci Şampanya Muharebesi başladı", "savas", 3, 2,
 "22 Eylül 1915'te Şampanya'da Fransız ve Alman kuvvetleri arasında ikinci muharebe başladı.",
 TL, ["bati-cephesi"]),
("1915-10-06", ["almanya", "habsburg", "sirbistan-kralligi"],
 "Alman ve Avusturya-Macaristan orduları Sırbistan'a saldırdı", "savas", 4, 3,
 "Alman-Avusturya taarruzu 6 Ekim 1915'te, Bulgar taarruzu 14 Ekim'de başladı. "
 "TDV'ye göre taarruzlar Sırpların 26 Kasım'da yenilmesiyle sona erdi ve Sırbistan Merkezî Devletler'in işgali altına girdi.",
 ve(SE, TDV), ["balkan-cephesi"]),
("1915-10-14", ["bulgaristan-kralligi", "sirbistan-kralligi"],
 "Bulgaristan Sırbistan'a savaş ilan ederek Merkezî Devletler yanında savaşa girdi", "savas", 5, 4,
 "Bulgaristan 14 Ekim 1915'te Sırbistan'a savaş ilan ederek İttifak devletleri tarafında savaşa girdi; Bulgar ordusu aynı gün taarruza geçti. "
 "TDV'ye göre Ekim başında İtilâf devletlerinin Selanik'e bir ordu çıkarmış olması Sırbistan'ı işgalden kurtaramadı.",
 ve(TDV, TL, SE), ["savas-ilani", "balkan-cephesi"]),
("1915-11-26", ["sirbistan-kralligi", "bulgaristan-kralligi", "almanya", "habsburg"],
 "Sırbistan seferi sona erdi — Sırbistan işgal altına girdi", "toprak-kayip", 5, 4,
 "TDV'ye göre Alman, Avusturya ve Bulgar kuvvetlerinin Sırbistan taarruzu Sırpların 26 Kasım 1915'te yenilmesiyle sona erdi. "
 "Böylece Almanya ile Osmanlı Devleti arasında kara bağlantısı kuruldu; çekilen Sırp ordusunu Fransız ve İtalyan donanmaları Korfu adasına taşıdı.",
 ve(TDV, SE), ["balkan-cephesi"]),
("1916-01-11", ["karadag", "habsburg"],
 "Lovćen düştü, Avusturya-Macaristan Karadağ'ı işgal etti", "isgal", 4, 3,
 "Avusturya-Macaristan kuvvetleri 11 Ocak 1916'da stratejik Lovćen dağını, iki gün sonra da başkent Çetine'yi aldı. "
 "Karadağ birlikleri 6-7 Ocak'taki Mojkovac Muharebesi'yle Sırp çekilmesini korumuştu; Kral I. Nikola ülkeyi terk etti ve ordu Ocak 1916'da teslim oldu. "
 "(Teslim gününü kaynaklar farklı veriyor: aynı makalede 16 ve 25 Ocak, zaman çizelgesinde 23 Ocak — bu yüzden gün yazılmadı.)",
 ve(AHO, MNE, SE), ["balkan-cephesi"]),
]

CELISKI = [
    ("İkinci Ypres / ilk zehirli gaz", "TDV 23 Şubat 1915", "1914-1918-online zaman çizelgesi 21-22 Nisan 1915"),
    ("Birinci Ypres başlangıcı", "TDV 29 Ekim 1914", "1914-1918-online zaman çizelgesi 20 Ekim 1914"),
    ("Karadağ ordusunun teslimi", "SE makalesi 16 Ocak ve 25 Ocak 1916 (iki ayrı yerde)", "zaman çizelgesi 23 Ocak 1916"),
]


def kayit(m):
    t, taraf, b, tur, onem, dunya, d, kaynak, ek = m
    return {"t": t, "devlet": taraf[0], "taraflar": taraf, "devletler": taraf, "b": b, "tur": tur,
            "onem": onem, "dunya": dunya, "kapsam": "dis", "yer_id": "",
            "etiket": ["1-dunya-savasi", "konu-siyasi"] + ek + taraf,
            "d": d, "kaynak": kaynak}


BAS = """// =====================================================================
// I. DÜNYA SAVAŞI — AVRUPA (1DUNYA-A) · çok taraflı kronoloji
// =====================================================================
// 🔴 ÜRETİLMİŞ DOSYA — elle düzenleme; üretici denetim/ARAC-1DUNYA-A-URET-0917.py
// window.KRONOLOJI_COK_1DUNYA_A — şartname oturumlar/BIRINCI-DUNYA-SAVASI-0917.md
// app.js cokTarafliKronolojiEkle: madde `taraflar[]`daki HER künyeye eklenir.
// Osmanlı tarafı çekirdek olaylardadır; `osmanli` taraflara yazılmaz.
// Bir künyenin etkin kronolojisinde aynı olay zaten varsa o künye taraflardan
// çıkarıldı (ayrıntı: maddenin `d` metnindeki parantez notu).
// Sınav: node denetim/ARAC-1DUNYA-A-SINA-0917.js
"""

if __name__ == "__main__":
    K = sorted((kayit(m) for m in M), key=lambda x: x["t"])
    yol = "data/kronoloji_cok_1dunya_A.js"
    with io.open(yol, "w", encoding="utf-8", newline="\n") as f:
        f.write(BAS + "\nwindow.KRONOLOJI_COK_1DUNYA_A = [\n")
        f.write(",\n".join(json.dumps(k, ensure_ascii=False) for k in K))
        f.write("\n];\n")
    print(yol, len(K), "madde ·", sum(len(k["taraflar"]) for k in K), "taraf bağı")
    print("ÇELİŞKİ (yazılmadı):", len(CELISKI))
    for c in CELISKI:
        print("  ", " | ".join(c))
