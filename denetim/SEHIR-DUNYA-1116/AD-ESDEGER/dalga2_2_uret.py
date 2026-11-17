import json, os
TDV = "TDV İslâm Ansiklopedisi '%s' https://islamansiklopedisi.org.tr/%s"
BR = "Encyclopaedia Britannica '%s' https://www.britannica.com/place/%s"
HJ = "Hobson-Jobson (Yule-Burnell) '%s' https://dsal.uchicago.edu/cgi-bin/app/hobsonjobson_query.py?qs=%s&searchhws=yes&matchtype=exact"
BP = "Banglapedia '%s' https://en.banglapedia.org/index.php/%s"

def e(ad, dil, donem, kaynak, kanit):
    return {"ad": ad, "dil": dil, "donem": donem, "kaynak": kaynak, "kanit": kanit}

R = []
def s(id_, ek, kaynaksiz, sira=None):
    R.append({"id": id_, "ad_kaynak": ek, "adlar_sira": sira, "kaynaksiz": kaynaksiz})

t = TDV % ("AMRİTSAR", "amritsar")
s("amritsar-in", [
    e("Râmdâspûr", "tr-osm", None, t, "Râmdâspûr (Râm Dâs’ın şehri) adı verilen"),
    e("Amritsar", "tr-osm", None, t, "bulunan Amritsar, aynı adı taşıyan ilin merkezi"),
    e("Ramdaspur", "en", None, BR % ("Amritsar", "Amritsar"), "Also known as: Ramdaspur"),
    e("Amrita-saras", "sa", None, t, "Amrita-saras (< Amritsar “âb-ı hayât havuzu”)"),
], [], ["Ramdaspur", "Amritsar"])

t = TDV % ("BAHÂVELPÛR", "bahavelpur")
s("bahavelpur-pk", [
    e("Bahâvelpûr", "tr-osm", None, t, "Bahâvelpûr’da halkın çoğu Sünnî müslümandır"),
    e("Bağdâdulcedîd", "tr-osm", None, t, "Bağdat’a benzediği için Bağdâdulcedîd adıyla da bilinir"),
], [])

t = TDV % ("MÜRŞİDÂBÂD", "mursidabad")
s("mursidabad-in", [
    e("Maksûdâbâd", "tr-osm", None, t, "şehrin önceki adı Maksûdâbâd’dır (Mahsûsâbâd)"),
    e("Mahsûsâbâd", "tr-osm", None, t, "şehrin önceki adı Maksûdâbâd’dır (Mahsûsâbâd)"),
    e("Mürşidâbâd", "tr-osm", None, t, "isminin Mürşidâbâd’a çevrilmesi bu döneme rastlar"),
    e("Makhsudabad", "en", None, BR % ("Murshidabad", "Murshidabad"), "Also known as: Makhsudabad"),
    e("Makhsudabad", "en", None, BP % ("Murshidabad", "Murshidabad"), "the place was called after him Makhsudabad"),
    e("Morasudabad", "sa", None, BP % ("Murshidabad", "Murshidabad"), "There is also mention of this place as 'Morasudabad' founded by a Yavana"),
    e("Moxudabath", "nl", "1658-1664", BP % ("Murshidabad", "Murshidabad"), "In Valentyn's map (1658-64) 'Moxudabath' is shown on an island"),
], [])

t = TDV % ("LEKNEVTÎ", "leknevti")
b = BP % ("Lakhnauti", "Lakhnauti")
s("gaur-bd", [
    e("Gavr", "tr-osm", None, t, "şehre Gavr (Gur) ve Cennetâbâd da denilir"),
    e("Gur", "tr-osm", None, t, "şehre Gavr (Gur) ve Cennetâbâd da denilir"),
    e("Cennetâbâd", "tr-osm", "1538-", t, "şehrin güzelliğinden dolayı buraya Cennetâbâd ismini verdi"),
    e("Leknevtî", "tr-osm", "1538-", t, "Hümâyun 1538’de Afgan Şîr Şah’ı mağlûp ederek Leknevtî’yi ele geçirdi"),
    e("Lakhanavati", "sa", None, t, "Sanskritçe’de “yerleşim yeri” anlamına da gelen “lakhanavati” kelimesinden geldiği düşünülür"),
    e("Lakhnauti", "en", None, b, "Lakhnauti a ruined city in the Maldah district of west Bengal"),
    e("Laksmanavati", "sa", None, b, "Laksmanavati came to be known as Lakhnauti under the Muslim rulers"),
], [])

t = TDV % ("BOPAL", "bopal--sehir")
s("bhopal-in", [
    e("Bopal", "tr-osm", None, t, "Önceleri Bopal İslâm Devleti’nin başşehri olan Bopal"),
], ["Bhopal (yalnız yazım; TDV Bopal yazar, Britannica 'Bhopal-India' gövdesi alınamadı)"])

t = TDV % ("ÂDİLŞÂHÎLER", "adilsahiler")
s("caul-in-a3", [
    e("Çaul", "tr-osm", None, t, "Goa ve Çaul limanlarını kuşattılarsa"),
], ["Sîmûr (TDV: Sîmûr (Çaul))", "Chaul"])

s("kalyani-in-a3", [
    e("Kalyan", "tr-osm", None, t, "önce Bîder, sonra da Kalyan şehirlerini ele geçirdi"),
], ["Kalyani", "Basavakalyan"])

b = BR % ("Kollam", "Kollam")
h = HJ % ("QUILON", "Quilon")
s("kolam-in", [
    e("Coilum", "en", None, b, "Also known as: Coilum, Elancon, Kaulam Mall, Quilon"),
    e("Elancon", "en", None, b, "Also known as: Coilum, Elancon, Kaulam Mall, Quilon"),
    e("Kaulam Mall", "en", None, b, "Also known as: Coilum, Elancon, Kaulam Mall, Quilon"),
    e("Quilon", "en", None, b, "Formerly: Quilon"),
    e("Quilon", "en", None, h, "QUILON, n.p. A form which we have adopted from the Portuguese"),
    e("Kaulam", "ar", None, h, "known to the Arabs as Kaulam. The proper name is Tamil, Kollam"),
    e("Kollam", "ta", None, h, "known to the Arabs as Kaulam. The proper name is Tamil, Kollam"),
], [])

b = BP % ("Rajmahal", "Rajmahal")
s("racmahal-in", [
    e("Rajmahal", "en", None, b, "Rajmahal a historic town, is situated on the west bank"),
    e("Agmahl", "en", None, b, "The earlier name of the place was Agmahl"),
    e("Akbarnagar", "en", "1595-", b, "named it Akbarnagar, after akbar, the emperor"),
], [])

h = HJ % ("MANGALORE", "Mangalore")
s("mangalor-in", [
    e("Mangalore", "en", None, BR % ("Mangaluru", "Mangaluru"), "Also known as: Mangalore"),
    e("Mangalore", "en", None, h, "MANGALORE, n.p. The only place now well known by this name"),
    e("Mangal-ūr", "kn", None, h, "Mangal-ūr, a port on the coast of Southern Canara"),
    e("Manjarūr", "ar", "1343", h, "we arrived after three days at the city of Manjarūr"),
], ["Mangaluru (Britannica sayfa başlığı; ad satırı yok)"])

s("bikaner-p6", [], ["Bikaner"])
s("indor-p6", [
    e("Indur", "en", None, BR % ("Indore", "Indore"), "Also known as: Indur"),
], ["Indore (Britannica sayfa başlığı; gövde alınamadı)"])

s("broac-p6", [
    e("Broach", "en", None, BR % ("Bharuch", "Bharuch"), "Also called: Broach"),
    e("Bharukaccha", "sa", None, BR % ("Bharuch", "Bharuch"), "Historically: Bharukaccha or Bhrgukaccha"),
    e("Bhrgukaccha", "sa", None, BR % ("Bharuch", "Bharuch"), "Historically: Bharukaccha or Bhrgukaccha"),
    e("Broach", "en", None, HJ % ("BROACH", "Broach"), "From the sands of Swallow to Broach"),
    e("Bhṛigu-kachchha", "sa", None, HJ % ("BROACH", "Broach"), "The original forms of the name are Bhṛigu-kachchha, and Bhāru-Kachchha"),
    e("Bhāru-Kachchha", "sa", None, HJ % ("BROACH", "Broach"), "The original forms of the name are Bhṛigu-kachchha, and Bhāru-Kachchha"),
    e("Barygaza", "grc", "80", HJ % ("BROACH", "Broach"), "they are piloted up to Barygaza."),
], ["Bharuch (Britannica sayfa başlığı; ad satırı yok)", "Bhrigukaccha (yazım: kaynaklar Bhrgukaccha / Bhṛigu-kachchha yazar)"])

s("mirat-p6", [], ["Meerut", "Mîrat"])

h = HJ % ("KURNOOL", "Kurnool")
s("kurnool-in-p6", [
    e("Kurnool", "en", None, h, "KURNOOL, n.p. The name of a city and territory in the Deccan"),
    e("Karnūl", "en", None, h, "Karnūl of the Imp. Gazetteer"),
    e("Kandanūr", "en", None, h, "Properly Kandanūr; Canoul of Orme."),
    e("Canoul", "fr", None, h, "Properly Kandanūr; Canoul of Orme."),
], [])

s("meysur-in-p6", [
    e("Meysûr", "tr-osm", None, TDV % ("MEYSÛR", "meysur"), "Meysûr şehri Bengalur’dan sonra"),
    e("Maisūr", "ta", None, HJ % ("MYSORE", "Mysore"), "MYSORE, n.p. Tam. Maisūr, Can. Maisūru."),
    e("Maisūru", "kn", None, HJ % ("MYSORE", "Mysore"), "MYSORE, n.p. Tam. Maisūr, Can. Maisūru."),
], ["Mysore", "Mysuru"])

h = HJ % ("CANNANORE", "Cannanore")
s("kannur-in-p6", [
    e("Cannanore", "en", None, BR % ("Kannur", "Kannur"), "Formerly: Cannanore"),
    e("Cannanore", "en", None, h, "CANNANORE, n.p. A port on the coast of northern Malabar"),
    e("Kaṇṇūr", "ta", None, h, "The name is Kaṇṇūr or Kaṇṇanūr, 'Krishna's Town.'"),
    e("Kaṇṇanūr", "ta", None, h, "The name is Kaṇṇūr or Kaṇṇanūr, 'Krishna's Town.'"),
    e("Cananor", "pt", "1572", h, "Que entre Calecut jaz, e Cananor."),
], ["Kannur (Britannica sayfa başlığı; ad satırı yok)"])

h = HJ % ("MASULIPATAM", "Masulipatam")
bm = BR % ("Machilipatnam", "Machilipatnam")
s("masulipatnam-in-p6", [
    e("Masulipatam", "en", None, bm, "Also known as: Masulipatam, Masulipatnam"),
    e("Masulipatnam", "en", None, bm, "Also known as: Masulipatam, Masulipatnam"),
    e("Machhlipatan", "hi", None, h, "sometimes vulgarly called Machhlipatan or Machhli-bandar"),
    e("Machhli-bandar", "hi", None, h, "sometimes vulgarly called Machhlipatan or Machhli-bandar"),
    e("Missulapatam", "en", "1619", h, "Master Methwold came from Missulapatam in one of the country Boats."),
], ["Machilipatnam (Britannica sayfa başlığı; ad satırı yok)"])

s("yafna-lk-p6", [], ["Jaffna", "Yafna"])

h = HJ % ("NEGAPATAM", "Negapatam")
s("nagapatnam-in-p7", [
    e("Nagappattinam", "en", None, BR % ("Nagapattinam", "Nagapattinam"), "Also known as: Nagappattinam, Negapattam"),
    e("Negapattam", "en", None, BR % ("Nagapattinam", "Nagapattinam"), "Also known as: Nagappattinam, Negapattam"),
    e("Negapatam", "en", None, h, "NEGAPATAM, n.p. A seaport of Tanjore district"),
    e("Nāgai-ppaṭṭanam", "ta", None, h, "written Nāgai-ppaṭṭanam, which may mean 'Snake Town.'"),
    e("Negapatan", "en", "1598", h, "The coast of Choramandel beginneth from the Cape of Negapatan."),
], ["Nagapattanam (yazım; kaynaklar Nagappattinam/Nagapattinam yazar)", "Choramandel (Portekizce) (kaynakta kıyı adı olarak geçer, şehir adı değil)"])

out = os.path.join(os.path.dirname(os.path.abspath(__file__)), "DALGA2_2.json")
json.dump(R, open(out, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
tsv = ["id\tad\tneden"]
for r in R:
    for k in r["kaynaksiz"]:
        tsv.append("%s\t%s\tkaynak bulunamadi/okunamadi (TDV girdisi yok veya ad kaynakta yazmiyor)" % (r["id"], k))
open(os.path.join(os.path.dirname(out), "DALGA2_2_BORC.tsv"), "w", encoding="utf-8").write("\n".join(tsv) + "\n")
n = sum(len(r["ad_kaynak"]) for r in R)
d = {x["dil"] for r in R for x in r["ad_kaynak"]}
print(len(R), n, len(d), sorted(d), sum(len(r["kaynaksiz"]) for r in R))
