import json, sys
sys.stdout.reconfigure(encoding='utf-8')
B = lambda t, u: f"Encyclopaedia Britannica '{t}' https://www.britannica.com/place/{u}"
C = lambda t, u: f"The Columbia Encyclopedia, 6th ed., '{t}' https://www.encyclopedia.com/reference/encyclopedias-almanacs-transcripts-and-maps/{u}"
T = lambda t, u: f"TDV İslâm Ansiklopedisi '{t}' https://islamansiklopedisi.org.tr/{u}"
def e(ad, dil, donem, kaynak, kanit):
    return {"ad": ad, "dil": dil, "donem": donem, "kaynak": kaynak, "kanit": kanit}

D = []
def add(id_, ad_kaynak, sira, kaynaksiz):
    D.append({"id": id_, "ad_kaynak": ad_kaynak, "adlar_sira": sira, "kaynaksiz": kaynaksiz})

add("konakri-af-p9", [
 e("Conakry", "en", None, B("Conakry", "Conakry"), "Conakry, national capital, largest city, and chief Atlantic port, western Guinea."),
 e("Konakry", "en", None, B("Conakry", "Conakry"), "Also spelled: Konakry"),
 e("Konakri", "tr-osm", None, T("KONAKRİ", "konakri"), "KONAKRİ Gine Cumhuriyeti’nin başşehri."),
 e("Conakry", "fr", None, T("GİNE", "gine"), "başşehri Atlas Okyanusu kıyısındaki Konakri’dir (Conakry)."),
 e("Konakry", "en", None, C("Conakry", "conakry"), "The name is also spelled Konakry."),
], ["Conakry", "Konakry", "Konakri"], [])

add("dakar-af-p9", [
 e("Dakar", "en", None, B("Dakar", "Dakar"), "Dakar, the capital of Senegal, is a major seaport"),
 e("Dakar", "tr-osm", None, T("DAKAR", "dakar"), "DAKAR Senegal Cumhuriyeti’nin başşehri."),
 e("Dakar", "en", None, C("Dakar", "dakar"), "Dakar (dəkär´, dä–), city (1988 pop. 672,991), capital of Senegal"),
], ["Dakar"], [])

add("yaunde-af-p9", [
 e("Yaoundé", "fr", None, B("Yaoundé", "Yaounde"), "Yaoundé, city and capital of Cameroon."),
 e("Yaunde", "en", None, B("Yaoundé", "Yaounde"), "Also spelled: Yaunde"),
 e("Yaunde", "tr-osm", None, T("YAUNDE", "yaunde"), "YAUNDE Kamerun Cumhuriyeti’nin başşehri."),
 e("Yaoundé", "fr", None, T("KAMERUN", "kamerun"), "başşehri Yaoundé (Yaunde: 990.000)"),
 e("Yaoundé", "en", None, C("Yaoundé", "yaounde"), "Yaoundé (yäōōndā´), city (1990 est. pop. 750,000), capital of Cameroon"),
], ["Yaoundé", "Yaunde"], [])

add("buake-af-p9", [
 e("Bouaké", "fr", None, B("Bouaké", "Bouake"), "Bouaké, city, central Côte d’Ivoire (Ivory Coast)."),
], ["Bouaké", "Buake"], ["Buake"])

add("ndjamena-af-p9", [
 e("Fort-Lamy", "fr", "1900-1973", B("N’Djamena", "NDjamena"), "It was named Fort-Lamy after a French major"),
 e("Fort-Lamy", "fr", "-1973", C("Ndjamena", "ndjamena"), "Ndjamena (ənjä´mānä), formerly Fort-Lamy (fôr-lämē´), city"),
 e("N’Djamena", "fr", "1973-", B("N’Djamena", "NDjamena"), "Its name was changed to N’Djamena in 1973"),
 e("Ndjamena", "fr", "1973-", C("Ndjamena", "ndjamena"), "Its name was changed to Ndjamena in 1973."),
], ["Fort-Lamy", "N’Djamena", "Ndjamena"], [])

add("lome-p10", [
 e("Lomé", "fr", None, B("Lomé", "Lome"), "Lomé, city, capital of Togo."),
 e("Lomé", "en", None, C("Lomé", "lome"), "Lomé (lômā´), city (2010 pop. 837,437), capital of Togo"),
 e("Lomé", "tr-osm", None, T("TOGO", "togo"), "başşehri Lomé (2006’da 750.000)"),
], ["Lomé", "Lome"], ["Lome"])

add("douala-p10", [
 e("Douala", "fr", None, B("Douala", "Douala"), "Douala, city and chief port of Cameroon."),
 e("Douala", "en", None, C("Douala", "douala"), "Douala (dōō-ä´lə), city (1991 est. pop. 1,604,500), Cameroon"),
], ["Douala"], [])

add("bangui-p10", [
 e("Bangui", "fr", None, B("Bangui", "Bangui"), "Bangui, city, capital of the Central African Republic"),
 e("Bangui", "tr-osm", None, T("ORTA AFRİKA CUMHURİYETİ", "orta-afrika-cumhuriyeti"), "başşehri Bangui (622.771)"),
 e("Bangui", "en", None, C("Bangui", "bangui"), "Bangui (bäng-gē´), city (1994 est. pop. 560,000), capital of the"),
], ["Bangui", "Bangi"], ["Bangi"])

add("timbo-p10", [
 e("Timbo", "en", None, B("Fouta Djallon", "Fouta-Djallon"), "Timbo, 26 miles (42 km) northeast of Mamou"),
 e("Timbo", "tr-osm", None, T("FUTA CALON", "futa-calon"), "Timbo, Medine, Kade ve Fugumba da diğer önemli şehirlerdir."),
], ["Timbo"], [])

add("likasi-p10", [
 e("Likasi", "fr", None, B("Likasi", "Likasi"), "Likasi, city, southeastern Democratic Republic of the Congo."),
 e("Jadotville", "fr", "-1966", B("Likasi", "Likasi"), "Formerly (until 1966): Jadotville"),
 e("Jadotville", "fr", None, C("Likasi", "likasi"), "Likasi (lĬkäs´ē), formerly Jadotville (zhädōvēl´), city"),
], ["Jadotville", "Likasi"], [])

add("okrika-p10", [
 e("Okrika", "en", None, B("Okrika", "Okrika"), "Okrika, town and port, Rivers state, southern Nigeria."),
], ["Okrika"], [])

add("lobito-p10", [
 e("Lobito", "pt", None, B("Lobito", "Lobito"), "Lobito, port city, western Angola, on the Atlantic coast"),
 e("Lobito", "pt", None, C("Lobito", "lobito"), "Lobito (lōbē´tō, lŏŏvē´tō), city (1983 est. pop. 150,000)"),
], ["Lobito"], [])

add("ibadan-p10", [
 e("Ibadan", "en", None, B("Ibadan", "Ibadan"), "Ibadan is the capital of Oyo State, Nigeria"),
 e("Ibadan", "en", None, C("Ibadan", "ibadan"), "Ibadan (ēbä´dän, ēbädäN´), city (1991 est. pop. 1,263,000), SW Nigeria"),
 e("İbadan", "tr-osm", None, T("İBADAN", "ibadan"), "İBADAN Nijerya’nın güneybatısında bir şehir."),
], ["Ibadan", "İbadan"], [])

add("laayoune-p10", [
 e("Laayoune", "en", None, B("Laayoune", "Laayoune"), "Laayoune, town, northern Western Sahara"),
 e("El-Aaiún", "en", None, B("Laayoune", "Laayoune"), "Also spelled: El-Aaiún, El-Ayoun, Aaiún, or Aiun"),
 e("El-Ayoun", "en", None, B("Laayoune", "Laayoune"), "Also spelled: El-Aaiún, El-Ayoun, Aaiún, or Aiun"),
 e("Aaiún", "en", None, B("Laayoune", "Laayoune"), "Also spelled: El-Aaiún, El-Ayoun, Aaiún, or Aiun"),
 e("Aiun", "en", None, B("Laayoune", "Laayoune"), "Also spelled: El-Aaiún, El-Ayoun, Aaiún, or Aiun"),
 e("Al-ʿUyūn", "ar", None, B("Laayoune", "Laayoune"), "From Arabic: Al-ʿUyūn"),
], ["Laayoune", "El-Aaiún", "El-Ayoun", "Aaiún", "Aiun", "Al-ʿUyūn"], ["El-Ayn"])

add("hwange-p13", [
 e("Wankie", "en", "-1980", C("Hwange", "hwange"), "Hwange (wän´gē), formerly Wankie (wŏng´kē), city"),
 e("Wankie", "en", None, B("Hwange", "Hwange"), "Formerly: Wankie"),
 e("Hwange", "en", None, B("Hwange", "Hwange"), "Hwange, town, western Zimbabwe."),
], ["Wankie", "Hwange"], [])

add("kikwit-p13", [
 e("Kikwit", "fr", None, B("Kikwit", "Kikwit"), "Kikwit, town and river port, southwestern Democratic Republic of the Congo."),
], ["Kikwit"], [])

# donem uydurma yok: kaynak yil vermeyen donemleri temizle
for r in D:
    for x in r["ad_kaynak"]:
        if x["ad"] == "Wankie" and x["donem"] == "-1980":
            x["donem"] = None
        if x["ad"] == "Fort-Lamy" and x["kaynak"].startswith("The Columbia"):
            x["donem"] = "-1973"

out = "C:/atlas/.claude/worktrees/sehir-afrika-1116/denetim/SEHIR-DUNYA-1116/AD-ESDEGER/"
json.dump(D, open(out + "DALGA2_6.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
borc = [("buake-af-p9", "Buake", "Turkce yazim; Britannica/TDV'de yok (Britannica 'Bouaké')"),
 ("lome-p10", "Lome", "aksansiz yazim kaynakta yok (Britannica/Columbia/TDV 'Lomé')"),
 ("bangui-p10", "Bangi", "Turkce yazim; TDV 'Bangui' yazar, 'Bangi' kaynakta yok"),
 ("laayoune-p10", "El-Ayn", "Britannica 'El-Ayoun/El-Aaiún' yazar; 'El-Ayn' yazimi kaynakta yok"),
 ("dakar-af-p9", "(Wolof yerel ad)", "Britannica yalniz 'dakhar' agac adini verir, sehrin Wolofca adi yok"),
 ("ibadan-p10", "(Yoruba Ìbàdàn)", "Britannica/Columbia/TDV'de Yoruba yazimi yok"),
 ("douala-p10", "(Duala yerel ad)", "kaynakta yok"),
 ("timbo-p10", "(Fula yerel ad)", "kaynakta yok"),
 ("hwange-p13", "(Ndebele/Nambya ad)", "kaynakta yok"),
 ("*", "(Arapca yazi / Osmanli yazimi)", "Afrika sehirleri icin Britannica/TDV/Columbia'da Arapca yazi yok (Laayoune Al-ʿUyūn translit. haric)"),
 ("hwange-p13", "Wankie donemi", "kaynak yil vermiyor; donem null")]
open(out + "DALGA2_6_BORC.tsv", "w", encoding="utf-8").write("id\tad\tneden\n" + "\n".join("\t".join(x) for x in borc) + "\n")
n = sum(len(r["ad_kaynak"]) for r in D)
print(len(D), n, sorted({x["dil"] for r in D for x in r["ad_kaynak"]}), sum(len(r["kaynaksiz"]) for r in D))
for r in D:
    for x in r["ad_kaynak"]:
        assert len(x["kanit"].split()) <= 12, x
