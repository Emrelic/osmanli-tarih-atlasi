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
# ───────────────────────── PARTİ 2 · 1916 ─────────────────────────
("1916-02-21", ["fransa-cumhuriyet"],
 "Verdun Muharebesi başladı", "savas", 5, 5,
 "Almanlar 21 Şubat 1916'da Verdun'e karşı taarruza başladı. "
 "TDV'ye göre Verdun'ü savunan General Pétain komutasındaki 2. Fransız Ordusu 3 Eylül 1916'da düşmanı çekilmeye mecbur etti. "
 "(Almanya künyesinde bu olay zaten var; madde Fransa Cumhuriyeti tarafı içindir.)",
 ve(TDV, TL), ["bati-cephesi"]),
("1916-03-09", ["almanya"],
 "Almanya Portekiz'e savaş ilan etti", "savas", 3, 3,
 "Portekiz, 1914'te kendi sularına sığınmış onlarca Alman gemisine İngiltere'nin ittifak talebiyle el koydu. "
 "Şikâyeti karşılıksız kalan Almanya 9 Mart 1916'da Portekiz'e savaş ilan etti. "
 "(Portekiz künyesinde bu olay zaten var; madde Almanya tarafı içindir.)",
 ve(POR, TL), ["savas-ilani"]),
("1916-05-04", ["almanya", "abd"],
 "Sussex Taahhüdü — Almanya denizaltı savaşını sınırladı", "diplomasi", 3, 3,
 "Almanya 24 Mart 1916'da Fransız yolcu gemisi Sussex'i batırdı; olay Alman denizaltı savaşının geçici olarak durdurulmasına yol açtı. "
 "Almanya 4 Mayıs 1916'da Sussex Taahhüdü'nü verdi.",
 TL, ["deniz-savasi"]),
("1916-06-04", ["rusya", "habsburg"],
 "Brusilov Taarruzu başladı", "savas", 5, 4,
 "Rus güney orduları grubu General Brusilov komutasında 4 Haziran 1916'da Avusturyalılara karşı büyük bir taarruza girişti. "
 "TDV'ye göre üç ay süren taarruz başarılı fakat yıpratıcı oldu; Rus kayıpları 1.400.000'i buldu. Bu cephede Avusturyalılarla birlikte Osmanlı'nın 15. Kolordusu da savaştı.",
 ve(TDV, TL, EF), ["dogu-cephesi"]),
("1916-07-01", ["fransa-cumhuriyet", "almanya"],
 "Somme Muharebesi başladı", "savas", 5, 5,
 "Batı Cephesi'nde 1 Temmuz 1916'da Somme Muharebesi başladı. "
 "15 Eylül 1916'da İngilizler bu cephede tankı ilk kez kullandı. "
 "(İngiltere künyesinde bu olay zaten var.)",
 TL, ["bati-cephesi"]),
("1916-08-04", ["italya", "habsburg"],
 "Gorizia Muharebesi", "savas", 3, 3,
 "İtalya cephesinde 4 Ağustos 1916'da Gorizia Muharebesi başladı.",
 TL, ["italya-cephesi"]),
("1916-08-17", ["romanya-kralligi", "fransa-cumhuriyet", "ingiltere", "rusya", "italya"],
 "Romanya ile İtilâf devletleri arasında siyasî ve askerî sözleşme imzalandı", "ittifak", 4, 3,
 "Romanya hükümetinin İtilâf devletleriyle görüşmeleri 17 Ağustos 1916 Siyasî ve Askerî Sözleşmesi ile sonuçlandı. "
 "Büyük devletler, Avusturya-Macaristan'ın Rumen çoğunluklu topraklarında Romanya'nın hakkını tanıdı; sözleşme on gün sonraki savaş ilanının zeminiydi.",
 ROM, ["ittifak"]),
("1916-08-17", ["bulgaristan-kralligi", "sirbistan-kralligi"],
 "Makedonya cephesinde Merkezî Devletler'in ani taarruzu", "savas", 3, 3,
 "Romanya'nın savaşa girişini desteklemek için İtilâf kuvvetleri Selanik cephesinde taarruz hazırlarken karşı taraf 17 Ağustos 1916'da bütün cephe boyunca ani bir saldırı başlattı. "
 "17 Ağustos–20 Kasım 1916 arasındaki Gorniçevo, Kaymakçalan ve Çerna vadisi muharebelerinde İtilâf kuvvetleri bu taarruzu durdurdu ve karşı tarafı kırk kilometre kadar kuzeye itti.",
 ve(GRE, SE), ["balkan-cephesi"]),
("1916-08-27", ["habsburg"],
 "Romanya Avusturya-Macaristan'a savaş ilan etti", "savas", 5, 4,
 "İtilâf'la yapılan sözleşmenin ardından Romanya 27 Ağustos 1916'da Avusturya-Macaristan'a savaş ilan etti; birkaç gün sonra Erdel'e karşı harekât başladı. "
 "TDV'ye göre bu karar Rusların Brusilov taarruzundaki başarısının üzerine alındı. "
 "(Romanya künyesinde bu olay zaten var; madde Habsburg tarafı içindir.)",
 ve(TDV, TL, ROM), ["savas-ilani", "balkan-cephesi"]),
("1916-08-30", ["yunanistan"],
 "Selanik'te Venizelos yanlılarının hareketi — Yunanistan'da ikilik", "isyan", 3, 3,
 "Venizelos yanlıları 30 Ağustos 1916'da Selanik'teki Yunan garnizonunu denetime almaya çalıştı; bunu ancak güçlükle ve İtilâf komutanı Sarrail'in yardımıyla başardılar. "
 "Venizelos, General Danglis ve Amiral Kunduriotis Selanik'te ayrı bir millî müdafaa hükümeti kurdu.",
 GRE, ["balkan-cephesi"]),
("1916-09-11", ["yunanistan", "bulgaristan-kralligi"],
 "Kavala'daki Yunan kolordusu Bulgar ordusuna teslim oldu", "toprak-kayip", 3, 2,
 "Kavala'daki Yunan IV. Kolordusu 11 Eylül 1916'da çarpışmadan Bulgar ordusuna teslim oldu. "
 "Kolordu Almanya'da Görlitz'deki bir esir kampına götürüldü ve savaşın sonuna kadar orada kaldı.",
 GRE, ["balkan-cephesi"]),
("1916-09-15", ["ingiltere", "almanya"],
 "İngilizler Somme cephesinde tankı ilk kez kullandı", "savas", 4, 4,
 "15 Eylül 1916'da İngiliz ordusu Somme cephesinde ilk kez tank kullandı. "
 "TDV'ye göre 1918 yazındaki İtilâf taarruzları da tank ve uçak desteğiyle yapıldı.",
 ve(TL, TDV), ["bati-cephesi"]),
("1916-11-05", ["almanya", "habsburg"],
 "Merkezî Devletler'e bağlı «Polonya Krallığı» ilan edildi", "kurulus", 4, 3,
 "Almanya ve Avusturya-Macaristan 5 Kasım 1916'da «İki İmparator Bildirisi» ile işgal altındaki Rus Polonyası'nda bir Polonya Krallığı ilan etti. "
 "Krallığın siyasî yetkisi sınırlıydı, ama sonradan Polonya'nın yeniden kuruluşunda önemli bir adım sayıldı; Aralık 1916'da Geçici Devlet Konseyi kuruldu.",
 ve(TL, POL, AHO), ["dogu-cephesi"]),
("1916-12-01", ["yunanistan", "fransa-cumhuriyet", "ingiltere"],
 "İtilâf deniz piyadeleri Pire'ye çıktı", "savas", 3, 2,
 "İtilâf devletleri kralcıları uymaya zorlamak için 1 Aralık 1916'da (eski Jülyen takvimiyle 18 Kasım) Pire'ye 3.000 İngiliz ve Fransız deniz piyadesi çıkardı.",
 GRE, ["balkan-cephesi"]),
# ───────────────────────── PARTİ 2 · 1917 ─────────────────────────
("1917-01-22", ["abd"],
 "Wilson'ın «zafersiz barış» konuşması", "diplomasi", 3, 4,
 "ABD Başkanı Woodrow Wilson 22 Ocak 1917'de «zafersiz barış» konuşmasını yaptı.",
 TL, ["diplomasi"]),
("1917-03-16", ["almanya", "fransa-cumhuriyet"],
 "Alman ordusu Hindenburg Hattı'na çekildi", "toprak-kayip", 4, 3,
 "Alman ordusu Şubat 1917'de başlayan «Alberich Harekâtı»yla hazırlanan geri mevzilere, Hindenburg Hattı'na 16 Mart 1917'de çekildi.",
 TL, ["bati-cephesi"]),
("1917-04-17", ["fransa-cumhuriyet", "almanya"],
 "Üçüncü Şampanya Muharebesi (Nivelle Taarruzu)", "savas", 4, 3,
 "Şampanya'da 17 Nisan 1917'de üçüncü muharebe başladı. "
 "(Eski «Fransa» künyesinde bu taarruz 16 Nisan tarihiyle geçiyor; zaman çizelgesi 17 Nisan veriyor.)",
 TL, ["bati-cephesi"]),
("1917-06-11", ["yunanistan", "fransa-cumhuriyet"],
 "Fransa Yunanistan'a ültimatom verdi — Kral Konstantin'in çekilmesi istendi", "diplomasi", 4, 3,
 "Müttefiklerin ilk itirazlarına rağmen Fransa 11 Haziran 1917'de güney Yunanistan'da stratejik noktaları ele geçirdi ve Yunan hükümetine Kral Konstantin'in derhal çekilmesini isteyen bir ültimatom verdi. "
 "Venizelos 26 Haziran 1917'de Atina'ya dönerek başbakanlığa yeniden geçti.",
 GRE, ["balkan-cephesi"]),
("1917-07-01", ["rusya-gecici-hukumet", "habsburg", "almanya"],
 "Kerenski Taarruzu başladı", "savas", 4, 3,
 "Rusya Geçici Hükûmeti Doğu Cephesi'nde 1 Temmuz 1917'de Kerenski Taarruzu'nu başlattı. "
 "TDV'ye göre Kerenski hükümeti ülkeyi saran karışıklıkları gideremedi.",
 ve(TL, TDV), ["dogu-cephesi"]),
("1917-07-20", ["sirbistan-kralligi"],
 "Korfu Bildirisi — Sırp, Hırvat ve Slovenlerin birleşme ilkeleri", "diplomasi", 4, 3,
 "Sırbistan hükümeti ile 1915'te kurulan Yugoslav Komitesi 20 Temmuz 1917'de Korfu'da ortak bir bildiri yayımladı. "
 "Bildiri bir Sırp-Hırvat-Sloven Krallığı'nda birleşmeyi öngördü; ilkeleri 1 Aralık 1918'de ilan edilen birleşmenin temeli oldu.",
 ve(TL, EK + "Mile Bjelajac, «Serbia» — encyclopedia.1914-1918-online.net/article/serbia/"), ["balkan-cephesi"]),
("1917-07-24", ["romanya-kralligi", "rusya-gecici-hukumet"],
 "Mărăşti ve Mărăşeşti muharebeleri — Rumen-Rus yaz taarruzu", "savas", 4, 3,
 "Fransız yardımıyla yeniden düzenlenen Rumen ordusu Rus birlikleriyle birlikte Temmuz 1917'de taarruza geçti. "
 "Mărăşti (24 Temmuz–1 Ağustos), Mărăşeşti (6 Ağustos–3 Eylül), Oituz (8-21 Ağustos) ve Cireşoaia (9-10 Eylül) muharebeleri, kaynağa göre İtilâf'ın 1917'deki tek başarılarıydı.",
 SE, ["balkan-cephesi"]),
("1917-07-31", ["ingiltere", "almanya", "belcika"],
 "Üçüncü Ypres (Passchendaele) Muharebesi başladı", "savas", 4, 4,
 "Belçika'da Ypres kesiminde 31 Temmuz 1917'de üçüncü büyük muharebe başladı; Kanada birlikleri 26 Ekim'de Passchendaele'ye saldırdı.",
 TL, ["bati-cephesi"]),
("1917-10-24", ["habsburg", "almanya"],
 "Caporetto yarması — on ikinci Isonzo Muharebesi", "savas", 5, 4,
 "Avusturya-Macaristan birlikleri Alman birlikleriyle birlikte 24 Ekim 1917'de başlayan on ikinci Isonzo taarruzunda İtalyan cephesini yardı. "
 "(İtalya künyesinde bu olay «Caporetto Bozgunu» olarak geçiyor; madde Merkezî Devletler tarafı içindir.)",
 ve(TL, AHO), ["italya-cephesi"]),
("1917-11-08", ["sovyet-rusya"],
 "Barış Kararnamesi kabul edildi", "diplomasi", 4, 4,
 "Lenin'in «Barış Kararnamesi» 8 Kasım 1917'de İkinci Sovyetler Kongresi'nde kabul edildi.",
 TL, ["dogu-cephesi"]),
("1917-12-07", ["romanya-kralligi", "almanya", "habsburg"],
 "Focşani Mütarekesi — Romanya savaşı durdurdu", "antlasma", 4, 3,
 "Taç Konseyi 2 Aralık 1917'de direnişi sürdürme kararı almış olsa da Başbakan Brătianu, Rusya'nın Brest-Litovsk'ta barış görüşmelerine başlamasından iki gün sonra, 7 Aralık 1917'de Focşani'de Merkezî Devletler'le mütareke imzaladı. "
 "Bunun sebebi Rus devrimi yüzünden yaklaşık 1.200.000 Rus askerinin cepheden çekilmesiydi.",
 ve(ROM, SE), ["balkan-cephesi"]),
("1917-12-15", ["sovyet-rusya", "almanya", "habsburg", "bulgaristan-kralligi"],
 "Brest-Litovsk Mütarekesi — Rusya ile Merkezî Devletler savaşı durdurdu", "antlasma", 5, 4,
 "TDV'ye göre Bolşevik hükümeti 15 Aralık 1917'de Almanya ve müttefikleriyle mütareke yaptı. "
 "Doğu Cephesi makalesine göre mütareke 17 Aralık'ta yürürlüğe girdi.",
 ve(TDV, EF), ["dogu-cephesi"]),
# ───────────────────────── PARTİ 2 · 1918 ─────────────────────────
("1918-01-08", ["abd"],
 "Wilson'ın On Dört Madde'si", "diplomasi", 5, 5,
 "ABD Başkanı Wilson 8 Ocak 1918'de Kongre'de On Dört Madde'lik barış programını açıkladı. "
 "Programın on üçüncü maddesi denize çıkışı olan bağımsız bir Polonya'nın kurulmasını öngörüyordu.",
 ve(TL, POL, MNE), ["diplomasi"]),
("1918-02-09", ["almanya", "habsburg", "bulgaristan-kralligi", "ukrayna-halk-cumhuriyeti"],
 "«Ekmek Barışı» — Ukrayna ile Merkezî Devletler arasında Brest-Litovsk Antlaşması", "antlasma", 4, 4,
 "Rus ve Ukraynalı Kızıl Muhafızlar Ukrayna'ya girip Rada'yı Kiev'den çıkarınca Rada delegeleri acil askerî yardım umuduyla 9 Şubat 1918'de Brest-Litovsk'ta Merkezî Devletler'le barış antlaşması imzaladı. "
 "(Ukrayna Halk Cumhuriyeti'nin atlasta künyesi YOK; kimlik öneri olarak yazıldı.)",
 ve(TL, AHO), ["dogu-cephesi"]),
("1918-03-03", ["almanya", "habsburg", "bulgaristan-kralligi"],
 "Brest-Litovsk Antlaşması — Rusya savaştan çekildi", "antlasma", 5, 5,
 "Bolşevik hükümeti 3 Mart 1918'de Brest-Litovsk Antlaşması'nı imzalayarak savaştan çekildi. "
 "Antlaşmayla Ukrayna, Galiçya, Finlandiya, Baltık ülkeleri ve Kafkasya üzerindeki denetimden vazgeçildi. "
 "(Sovyet Rusya künyesinde ve Osmanlı kronolojisinde bu olay zaten var; madde öteki imzacılar içindir.)",
 ve(TDV, TL, EF), ["dogu-cephesi"]),
("1918-03-05", ["romanya-kralligi", "almanya", "habsburg"],
 "Buftea Ön Barışı — Romanya ile Merkezî Devletler", "antlasma", 4, 3,
 "Alman ve Avusturya-Macaristan baskısı ve aylarca süren görüşmelerin ardından 5 Mart 1918'de Bükreş yakınındaki Buftea'da ön barış antlaşması imzalandı.",
 ROM, ["balkan-cephesi"]),
("1918-03-21", ["ingiltere", "fransa-cumhuriyet"],
 "Alman Bahar Taarruzu başladı", "savas", 5, 4,
 "Almanlar bütün güçlerini toplayarak 21 Mart 1918'de Batı Cephesi'nde büyük taarruza geçti. "
 "TDV'ye göre taarruz şiddetli oldu ama 19 Nisan'da başarısızlıkla sonuçlandı; bundan sonra Almanya ve müttefikleri savunmada kaldı. "
 "(Almanya künyesinde bu olay zaten var.)",
 ve(TDV, TL), ["bati-cephesi"]),
("1918-04-09", ["portekiz", "almanya", "ingiltere"],
 "La Lys Muharebesi — Portekiz tümeni ağır kayıp verdi", "savas", 4, 3,
 "Mart 1918 Alman taarruzu durdurulduktan sonra İngiliz komutanlığı yıpranmış 1. Portekiz Tümeni'ni geri çekmeye başlamıştı; cephede güçlendirilmiş 2. Tümen kalmıştı. "
 "Portekiz Seferî Kolordusu'nun savaştaki en ağır sınavı 9 Nisan 1918'de başlayan La Lys Muharebesi oldu.",
 POR, ["bati-cephesi"]),
("1918-04-17", ["fransa-cumhuriyet", "ingiltere", "abd"],
 "General Foch İtilâf orduları başkomutanı oldu", "ittifak", 4, 4,
 "İtilâf devletleri ortak başkomutanlık kurmaya karar verdi: 1917 Kasım'ında Yüksek Harp Kurulu oluşturuldu, TDV'ye göre 17 Nisan 1918'de de Fransız General Foch'un İtilâf orduları başkomutanı olmasında anlaşıldı.",
 TDV, ["bati-cephesi"]),
("1918-05-07", ["romanya-kralligi", "almanya", "habsburg", "bulgaristan-kralligi"],
 "Bükreş Antlaşması — Romanya ile Merkezî Devletler barışı", "antlasma", 5, 4,
 "Romanya hükümeti 7 Mayıs 1918'de Bükreş Antlaşması'nı imzaladı. "
 "Antlaşma işgal altındaki Romanya'nın parlamentosunca onaylanmadı; işgal kuvvetleri ülkede birkaç ay daha kaldı.",
 ve(TL, ROM, EK + "Richard C. Hall, «Bulgaria» — encyclopedia.1914-1918-online.net/article/bulgaria/"), ["balkan-cephesi"]),
("1918-06-15", ["italya", "habsburg"],
 "Piave Muharebesi", "savas", 4, 3,
 "İtalya cephesinde 15 Haziran 1918'de Piave nehri boyunca muharebe başladı.",
 TL, ["italya-cephesi"]),
("1918-07-15", ["fransa-cumhuriyet", "almanya", "abd", "ingiltere"],
 "İkinci Marne Muharebesi", "savas", 5, 4,
 "15 Temmuz 1918'de Marne'da ikinci büyük muharebe başladı. "
 "TDV'ye göre Foch komutasındaki İtilâf karşı taarruzları yaz boyunca sürdü ve Almanlar geride hazırladıkları mevzilere çekildi.",
 ve(TL, TDV), ["bati-cephesi"]),
("1918-08-08", ["ingiltere", "fransa-cumhuriyet", "almanya"],
 "Amiens Taarruzu", "savas", 5, 4,
 "İngiliz ve Fransız kuvvetleri 8 Ağustos 1918'de Amiens'de taarruza geçti.",
 TL, ["bati-cephesi"]),
("1918-09-29", ["sirbistan-kralligi", "bulgaristan-kralligi", "fransa-cumhuriyet"],
 "Üsküp'ün düşüşü — Bulgar direnişi çöktü", "toprak-kazanc", 4, 3,
 "Selanik cephesinin yarılmasından sonra Sırp birlikleri 26 Eylül'de Köprülü (Veles) ve İştip'e girdi; Fransız süvarisi 29 Eylül 1918'de ani bir baskınla Üsküp'ü aldı. "
 "Üsküp'ün düşüşü Bulgar direnişinin sonu oldu ve Bulgaristan İtilâf devletleriyle mütareke imzalayarak savaştan çekildi.",
 ve(TDV, GRE, SE), ["balkan-cephesi"]),
("1918-10-03", ["bulgaristan-kralligi"],
 "Çar Ferdinand tahttan çekildi — III. Boris çar oldu", "siyasi", 4, 3,
 "Bulgar Çarı Ferdinand 3 Ekim 1918'de oğlu Boris lehine tahttan çekildi ve ülkeyi bir daha dönmemek üzere terk etti.",
 EK + "Richard C. Hall, «Bulgaria» — encyclopedia.1914-1918-online.net/article/bulgaria/", ["balkan-cephesi"]),
("1918-10-12", ["sirbistan-kralligi"],
 "Sırp ordusu Niş'i aldı", "toprak-kazanc", 3, 2,
 "Sırp birlikleri 12 Ekim 1918'de Niş'i aldı; böylece Merkezî Devletler'in Osmanlı Devleti ile bütün kara bağlantısı kesildi. "
 "Eski Sırbistan Krallığı'nın bütün toprakları 1 Kasım 1918'e kadar kurtarıldı.",
 ve(SE, EK + "Mile Bjelajac, «Serbia» — encyclopedia.1914-1918-online.net/article/serbia/"), ["balkan-cephesi"]),
("1918-10-24", ["habsburg"],
 "Vittorio Veneto Muharebesi başladı", "savas", 5, 4,
 "İtalya cephesinde 24 Ekim 1918'de Vittorio Veneto Muharebesi başladı. "
 "Yenilgiyi kabul eden Avusturya-Macaristan TDV'ye göre 3 Kasım'da silah bıraktı. "
 "(İtalya künyesinde bu olay zaten var; madde Habsburg tarafı içindir.)",
 ve(TL, TDV), ["italya-cephesi"]),
("1918-10-30", ["habsburg"],
 "Polonyalılar Krakov'da yönetimi ele geçirdi", "toprak-kayip", 3, 2,
 "Naiplik Konseyi 7 Ekim 1918'de bağımsız Polonya'nın yeniden kurulduğunu ilan etmişti. "
 "Polonyalılar 30 Ekim 1918'de Avusturya Galiçyası'nın merkezi Krakov'da yönetimi ele geçirdi.",
 POL, ["dogu-cephesi"]),
("1918-11-03", ["almanya"],
 "Kiel'de denizci ayaklanması başladı", "isyan", 4, 3,
 "Alman donanmasının Kiel'deki denizcileri 3 Kasım 1918'de ayaklandı. "
 "Altı gün sonra, 9 Kasım'da, Philipp Scheidemann ve Karl Liebknecht ayrı ayrı cumhuriyet ilan etti ve II. Wilhelm tahttan çekildi.",
 TL, ["alman-devrimi"]),
("1918-11-10", ["romanya-kralligi", "almanya"],
 "Romanya yeniden savaşa girdi", "savas", 3, 2,
 "Romanya, Compiègne mütarekesinden bir gün önce, 10 Kasım 1918'de Merkezî Devletler'e yeniden savaş ilan etti. "
 "Böylece savaşın sonunda galip devletlerin tarafında yer aldı.",
 ve(ROM, SE), ["savas-ilani", "balkan-cephesi"]),
("1918-11-11", ["abd", "belcika"],
 "Compiègne Mütarekesi — Batı Cephesi'nde savaş sona erdi", "antlasma", 5, 5,
 "Almanya 11 Kasım 1918'de Compiègne ormanında mütareke imzalayarak silah bıraktı. "
 "TDV'ye göre dört yıl üç ay on bir gün süren savaşta İtilâf devletleri 5.152.115, Almanya ve müttefikleri 3.386.200 ölü verdi. "
 "(Almanya, İngiltere ve Fransa künyelerinde bu olay zaten var.)",
 ve(TDV, TL), ["mutareke"]),
("1918-11-13", ["macaristan-habsburg", "fransa-cumhuriyet", "sirbistan-kralligi"],
 "Belgrad Mütarekesi — Macaristan ile savaşın son mütarekesi", "antlasma", 3, 3,
 "Savaşın son mütarekesi 13 Kasım 1918'de Belgrad'da Macaristan ile imzalandı.",
 SE, ["mutareke", "balkan-cephesi"]),
("1918-11-20", ["luksemburg", "almanya"],
 "Alman işgal ordusu Lüksemburg'dan çekildi", "toprak-kazanc", 3, 2,
 "Alman işgal ordusu 20 Kasım 1918'de Lüksemburg'dan ayrıldı; ertesi gün ilk Müttefik birlikleri ülkeye girdi.",
 LUX, ["bati-cephesi"]),
("1918-11-21", ["belcika"],
 "Belçika'da yeni hükümet kuruldu — kral ülkeye döndü", "siyasi", 3, 2,
 "Belçika'da 21 Kasım 1918'de yeni hükümet kuruldu. "
 "Kral I. Albert ve Kraliçe Elisabeth Kasım 1918'de kurtarılan Belçika topraklarına döndü.",
 ve(TL, BEL), ["bati-cephesi"]),
("1917-09-03", ["rusya-gecici-hukumet", "almanya"],
 "Alman ordusu Riga'yı aldı", "isgal", 4, 3,
 "Ludendorff, Rusya'yı savaştan çıkarmak için topçusunu kuzeye kaydırıp Riga'ya taarruz emri verdi; Almanlar 1 Eylül 1917'de yoğun gaz ve yüksek infilaklı mermi bombardımanıyla taarruza başladı. "
 "General von Hutier'in 8. Ordusu iki gün sonra şehri aldı; saldırıyı öngören General Klembovski 12. Ordu'yu haftalar önce çekmiş, Riga'yı savunmak için yalnız küçük bir kuvvet bırakmıştı.",
 EF, ["dogu-cephesi"]),
# ───────────────────────── PARTİ 3 · 1919-1923 ─────────────────────────
("1919-01-18", ["fransa-cumhuriyet", "ingiltere", "italya", "abd"],
 "Paris Barış Konferansı toplandı", "diplomasi", 5, 5,
 "TDV'ye göre Barış Konferansı 18 Ocak 1919'da Paris'te toplandı. "
 "Konferansta Almanya, Avusturya, Bulgaristan, Macaristan ve Osmanlı Devleti ile ayrı ayrı barış antlaşmaları hazırlandı; TDV'ye göre galipler Türkiye dışındaki yenik devletlere ağır barış şartları kabul ettirdi.",
 ve(TDV, TL), ["baris"]),
("1919-04-28", ["fransa-cumhuriyet", "ingiltere", "italya", "abd"],
 "Paris Barış Konferansı Milletler Cemiyeti Misakı'nı kabul etti", "diplomasi", 4, 5,
 "Paris Barış Konferansı 28 Nisan 1919'da Milletler Cemiyeti'nin kuruluş belgesini onayladı.",
 TL, ["baris"]),
("1919-05-11", ["avusturya-cumhuriyet", "isvicre"],
 "Vorarlberg'de İsviçre'ye katılma referandumu", "diplomasi", 2, 2,
 "Avusturya'nın Vorarlberg eyaletinde 11 Mayıs 1919'da İsviçre Konfederasyonu'na katılma konusunda halkoylaması yapıldı.",
 TL, ["baris"]),
("1919-06-19", ["letonya", "estonya"],
 "Cēsis Muharebesi", "savas", 3, 2,
 "Litvanya, Letonya ve Estonya'nın bağımsızlık savaşları sırasında 19 Haziran 1919'da Cēsis Muharebesi yapıldı.",
 TL, ["baltik-bagimsizlik"]),
("1919-06-28", ["fransa-cumhuriyet", "italya", "abd", "belcika"],
 "Versay Antlaşması imzalandı", "antlasma", 5, 5,
 "Almanya Dışişleri Bakanı Hermann Müller 28 Haziran 1919'da Versay Antlaşması'nı imzaladı. "
 "TDV'ye göre Belçika bu antlaşmayla bağımsızlığına yeniden kavuştu ve Almanya'dan Malmedy ile çevresini aldı. "
 "(Almanya, İngiltere, eski Fransa ve Polonya künyelerinde bu olay zaten var.)",
 ve(TDV, TL, "TDV İslâm Ansiklopedisi, «Belçika» — islamansiklopedisi.org.tr/belcika"), ["baris"]),
("1919-07-12", ["almanya", "ingiltere"],
 "Müttefiklerin Almanya'ya uyguladığı deniz ablukası kaldırıldı", "diplomasi", 3, 3,
 "Müttefiklerin savaş boyunca Almanya'ya uyguladığı deniz ablukası 12 Temmuz 1919'da kaldırıldı.",
 TL, ["baris"]),
("1919-09-10", ["italya", "fransa-cumhuriyet", "ingiltere", "abd", "polonya", "romanya-kralligi"],
 "Saint-Germain Antlaşması — Avusturya ile barış", "antlasma", 5, 4,
 "TDV'ye göre 10 Eylül 1919'da Avusturya ile Saint-Germain Antlaşması imzalandı. "
 "Antlaşma Bukovina'nın Romanya'nın parçası olduğunu uluslararası alanda tanıdı. "
 "(Avusturya, Çekoslovakya ve SHS künyelerinde bu olay zaten var.)",
 ve(TDV, TL, ROM), ["baris"]),
("1919-11-27", ["bulgaristan-kralligi", "yunanistan", "yugoslavya", "romanya-kralligi", "fransa-cumhuriyet", "ingiltere", "italya"],
 "Neuilly Antlaşması — Bulgaristan ile barış", "antlasma", 5, 4,
 "TDV'ye göre 27 Kasım 1919'da Bulgaristan ile Neuilly Antlaşması imzalandı. "
 "Yunanistan bu antlaşmayla Bulgaristan'dan Batı Trakya'yı aldı.",
 ve(TDV, TL, EK + "Richard C. Hall, «Bulgaria» — encyclopedia.1914-1918-online.net/article/bulgaria/", GRE), ["baris"]),
("1920-01-10", ["ingiltere", "italya"],
 "Versay Antlaşması yürürlüğe girdi", "antlasma", 4, 4,
 "Versay Antlaşması 10 Ocak 1920'de yürürlüğe girdi. "
 "Ren bölgesindeki başlangıçta tamamen askerî olan işgal idaresinin yerini Müttefiklerin sivil idaresi olan Ren Bölgesi Müttefikler Arası Yüksek Komisyonu aldı. "
 "(Almanya, Fransa Cumhuriyeti, Belçika, Polonya ve Çekoslovakya künyelerinde bu yürürlük sınır maddeleriyle zaten var.)",
 ve(TL, EK + "«Occupation during and after the War (Germany)» — encyclopedia.1914-1918-online.net/article/occupation-during-and-after-the-war-germany/"), ["baris"]),
("1920-04-25", ["polonya", "sovyet-rusya"],
 "Polonya-Sovyet Savaşı", "savas", 4, 3,
 "1914-1918-online zaman çizelgesi Polonya-Sovyet Savaşı'nı 25 Nisan 1920 tarihiyle veriyor. "
 "Polonya açısından Dünya Savaşı, 18 Mart 1921 Riga Barışı'na kadar süren sınır mücadeleleriyle birlikte ele alınır.",
 ve(TL, POL), ["polonya-sovyet-savasi"]),
("1920-06-04", ["romanya-kralligi", "yugoslavya", "avusturya-cumhuriyet", "fransa-cumhuriyet", "ingiltere", "italya"],
 "Trianon Antlaşması — Macaristan ile barış", "antlasma", 5, 4,
 "TDV'ye göre 4 Haziran 1920'de Macaristan ile Trianon Antlaşması imzalandı. "
 "Antlaşma Erdel, Crişana ve Maramureş'in ve Banat'ın üçte ikisinin Romanya ile birleşmesini tanıdı. "
 "(Macaristan ve Çekoslovakya künyelerinde bu olay zaten var.)",
 ve(TDV, TL, ROM), ["baris"]),
("1920-11-15", ["isvicre", "fransa-cumhuriyet", "ingiltere", "italya"],
 "Milletler Cemiyeti ilk kez Cenevre'de toplandı", "diplomasi", 4, 5,
 "Milletler Cemiyeti Genel Kurulu 15 Kasım 1920'de Cenevre'de ilk toplantısını yaptı.",
 TL, ["baris"]),
("1921-03-18", ["sovyet-rusya"],
 "Riga Antlaşması — Polonya-Sovyet Savaşı sona erdi", "antlasma", 5, 4,
 "Polonya ile Sovyetler arasında 18 Mart 1921'de Riga Antlaşması imzalandı. "
 "TDV'ye göre antlaşmayla Polonya'nın Batı Ukrayna üzerindeki hâkimiyeti tanındı. "
 "(Polonya künyesinde bu olay zaten var.)",
 ve(TL, POL, "TDV İslâm Ansiklopedisi, «Ukrayna» — islamansiklopedisi.org.tr/ukrayna"), ["polonya-sovyet-savasi", "baris"]),
("1921-05-23", ["almanya"],
 "Leipzig savaş suçları davaları başladı", "siyasi", 3, 3,
 "Almanya'da savaş suçlarıyla itham edilenlerin yargılandığı Leipzig davaları 23 Mayıs 1921'de başladı.",
 TL, ["baris"]),
]

CELISKI = [
    ("Bükreş'in düşüşü", "TDV 7 Aralık 1916", "Tasić 6 Aralık 1916 · «Romania» makalesi 9 Aralık 1916"),
    ("Manastır'ın alınışı", "TDV 11 Aralık 1916", "Tasić: 17 Ağustos–20 Kasım 1916 muharebeleri sonunda"),
    ("Bulgaristan mütarekesi", "TDV 29 Eylül 1918 (ve mevcut KRONOLOJI_BALKAN)", "Tasić 30 Eylül 1918"),
    ("Dobro Pole / Makedonya taarruzu", "TDV 15 Eylül 1918", "Hall (Bulgaria) ve Greece makalesi 14 Eylül 1918"),
    ("Yunanistan'ın savaş ilanı", "Greece makalesi 28 Haziran 1917", "zaman çizelgesi 29 Haziran 1917"),
    ("Zimmermann telgrafı", "USA makalesi 16 Ocak 1917", "zaman çizelgesi 19 Ocak 1917"),
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
