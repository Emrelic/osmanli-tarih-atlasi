"""data/kaynak_guven.js'e teyit dalgalarının (D1/D2) önerdiği kaynakları ekler — ENC-ZABAYKALYE satırından sonra."""
import json, sys
yol = sys.argv[1]
s = open(yol, encoding="utf-8").read()
EK = [
    ("BNF-ARCHIVES", "BnF Archives et manuscrits / data.bnf / Gallica (birincil belge)", "A",
     ["archivesetmanuscrits\\.bnf\\.fr", "gallica\\.bnf\\.fr", "data\\.bnf\\.fr"], "D1-03"),
    ("HLB", "Historisches Lexikon Bayerns (Bayerische Staatsbibliothek)", "A",
     ["historisches-lexikon-bayerns\\.de", "Historisches Lexikon Bayerns"], "D2-08"),
    ("ZAKONY", "zakonyprolidi.cz (Çek mevzuat metni)", "A", ["zakonyprolidi\\.cz"], "D2-08"),
    ("ORBILU", "ORBilu (Lüksemburg Üniv. açık arşivi, hakemli makale; Hémecht)", "A",
     ["orbilu\\.uni\\.lu", "Hémecht"], "D2-08"),
    ("ACADEMIE-SCIENCES", "Académie des sciences (resmî site, kurum tarihi)", "B", ["academie-sciences\\.fr"], "D1-03"),
    ("ACADEMIE-FRANCAISE", "Académie française (resmî site, kurum tarihi)", "B", ["academie-francaise\\.fr"], "D1-03"),
    ("OBSPM", "Observatoire de Paris (resmî site, kurum tarihi)", "B", ["obspm\\.fr"], "D1-05"),
    ("RJB-CSIC", "Real Jardín Botánico (CSIC, resmî site, kurum tarihi)", "B", ["rjb\\.csic\\.es"], "D1-06"),
    ("GEDANOPEDIA", "Gedanopedia (Encyklopedia Gdańska)", "B", ["gedanopedia\\.pl", "Gedanopedia"], "D2-07"),
    ("ETHW", "Engineering and Technology History Wiki (IEEE Milestones)", "B", ["ethw\\.org"], "D1-01"),
    ("ESBE", "Brockhaus–Efron Ansiklopedik Sözlüğü (1890–1907)", "B",
     ["Брокгауз", "Brockhaus.{0,5}Efron", "\\bESBE\\b"], "D2-06"),
    ("RISIERA", "Risiera di San Sabba Müzesi (Comune di Trieste)", "B", ["risierasansabba\\.it"], "D2-06"),
    ("HH-GESCH", "Hamburg Geschichtsbuch (şehir resmî tarih sitesi)", "B", ["geschichtsbuch\\.hamburg\\.de"], "D2-08"),
]
capa = '  {"kod": "ENC-ZABAYKALYE"'
i = s.index(capa)
j = s.index("\n", i) + 1
satir = []
for kod, ad, kad, desen, dil in EK:
    if '"kod": "%s"' % kod in s:
        sys.exit("zaten var: " + kod)
    satir.append("  " + json.dumps({"kod": kod, "ad": ad, "kademe": kad, "desen": desen,
                                    "not": "TEYIT-DALGA-1014 %s." % dil}, ensure_ascii=False) + ",\n")
s = s[:j] + "".join(satir) + s[j:]
open(yol, "w", encoding="utf-8", newline="").write(s)
print(len(EK), "giris eklendi")
