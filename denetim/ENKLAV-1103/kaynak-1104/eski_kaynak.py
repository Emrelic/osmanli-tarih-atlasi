"""eski_kaynak.py SONUC.json — EMRELİC'in EB 1911 kuralını (4 Kasım 2026) eski başvuru eserlerinin tümüne uygular
ve EB 1911'e tek başına dayanan hükümlere bulunan yeni kaynağı işler.
Eski başvuru eseri: EB 1911, Enciclopedia Italiana (1929-37; Treccani adresinde "_(Enciclopedia-Italiana)"). Tek başına
en çok "kısmen" sayılır, çift teyitte ikinci kaynak olamaz. Güncel kaynak: TDV, DCB, UNESCO GHA, Treccani'nin güncel
çevrimiçi maddeleri, hakemli dergi, akademik monografi; Imperial Gazetteer 1908 EMRELİC'in kabul ettiği dijital neşir.
1) Sonuç dosyasında yalnız eski eserlere dayanan tam -> kismen (+ beyan).
2) KAYNAK-GEREK hükümler uygula_umit.py ile işlenir (önce bu betik, sonra o).
3) Zaten KAYNAKLI olup gerekçesinde "EB 1911 tek başına" beyanı olan hükümlere yeni kaynak eklenir; beyan, yeni kaynak
   güncelse "EB 1911 + güncel kaynak", eskiyse "eski başvuru eserleri — güncel akademik kaynak gerek" olur."""
import json, sys, os, glob, re

BURA = os.path.dirname(os.path.abspath(__file__))
DOSYALAR = [os.path.join(BURA, "..", "hukumler.json")] + sorted(glob.glob(os.path.join(BURA, "..", "..", "ENKLAV-1104", "hukumler*.json")))
ESKI = re.compile(r"EB 1911|Enciclopedia[- ]Italiana", re.I)
GUNCEL = re.compile(r"TDV|İslâm Ansiklopedisi|DCB|biographi\.ca|UNESCO|General History of Africa|Imperial Gazetteer|"
                    r"Beevor|Khodarkovsky|Ricklefs|Petech|Nicol|Cambridge|Oxford|Iranica|Journal|Review|Quarterly|"
                    r"treccani\.it/enciclopedia/(?![^ ]*Enciclopedia-Italiana)", re.I)


def parcalar(kaynak):
    return [p.strip() for p in re.split(r"\s[·;]\s|;\s", kaynak) if p.strip()]


def guncel_var(kaynak):
    return any(GUNCEL.search(p) and not ESKI.search(p) for p in parcalar(kaynak))


yol_sonuc = sys.argv[1]
S = json.load(open(yol_sonuc, encoding="utf-8"))
H = {yol: json.load(open(yol, encoding="utf-8")) for yol in DOSYALAR}
nerede = {no: yol for yol, d in H.items() for no in d if not no.startswith("_")}
say = {"tavan(tam->kismen)": 0, "EB+guncel": 0, "EB+eski": 0}
for no, s in S.items():
    if no.startswith("_"):
        continue
    guncel = guncel_var(s.get("kaynak", ""))
    if s["teyit"] == "tam" and not guncel and ESKI.search(s.get("kaynak", "")):
        s["teyit"] = "kismen"
        s["not"] = (s.get("not") or "") + " [eski başvuru eseri (EB 1911 / Enciclopedia Italiana 1929-37) tek başına: en çok kısmen — güncel akademik kaynak gerek]"
        say["tavan(tam->kismen)"] += 1
    h = H[nerede[no]][no]
    if h["guven"] == "KAYNAKLI" and "EB 1911 tek başına" in h["gerekce"] and s["teyit"] in ("tam", "kismen", "celiski"):
        if guncel:
            yeni = "%s; EB 1911 + güncel kaynak" % s["teyit"]
            say["EB+guncel"] += 1
        else:
            yeni = "kismen; EB 1911 + Enciclopedia Italiana — ikisi de eski başvuru eseri, güncel akademik kaynak gerek"
            say["EB+eski"] += 1
        h["gerekce"] = re.sub(r"\[KAYNAK-UMIT \((tam|kismen|celiski); EB 1911 tek başına — güncel akademik kaynak gerek\):",
                              "[KAYNAK-UMIT (\\1; EB 1911 — sonra: %s):" % yeni, h["gerekce"])
        ek = " [KAYNAK-UMIT parti 9 (%s): %s" % (yeni, s.get("teyit_edilen", ""))
        if s.get("alinti"):
            ek += " — \"%s\"" % s["alinti"]
        if s.get("not"):
            ek += " · %s" % s["not"]
        h["gerekce"] += ek + "]"
        h["kaynak"] = s["kaynak"] + " · önceki: " + h["kaynak"]
json.dump(S, open(yol_sonuc, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
for yol, d in H.items():
    json.dump(d, open(yol, "w", encoding="utf-8"), ensure_ascii=False, indent=0)
print(say)
