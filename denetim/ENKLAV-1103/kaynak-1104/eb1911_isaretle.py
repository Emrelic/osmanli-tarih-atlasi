"""eb1911_isaretle.py umit_partiN.json ... — EMRELİC kuralı (4 Kasım 2026): EB 1911 eski başvuru eseridir,
güncel akademik değil. Tek başına en çok "kısmen" sayılır, çift teyitte ikinci kaynak olamaz; güncel akademik
kaynakla (TDV, DCB, UNESCO GHA, hakemli dergi…) birlikte kullanılabilir.
Sonuç dosyasında kaynağı EB 1911 olan kayıtları bulur; güncel kaynak yanında yoksa:
  tam -> kismen; gerekçedeki [KAYNAK-UMIT (...)] etiketine "EB 1911 tek başına" beyanı eklenir.
Sonuç dosyası da aynı biçimde düzeltilir (sonraki uygulamalar tutarlı kalsın)."""
import json, sys, os, glob, re

BURA = os.path.dirname(os.path.abspath(__file__))
DOSYALAR = [os.path.join(BURA, "..", "hukumler.json")] + sorted(glob.glob(os.path.join(BURA, "..", "..", "ENKLAV-1104", "hukumler*.json")))
H = {yol: json.load(open(yol, encoding="utf-8")) for yol in DOSYALAR}
nerede = {no: yol for yol, d in H.items() for no in d if not no.startswith("_")}
EB = re.compile(r"EB 1911|Britannica[^·;]{0,40}(1911|11th|eleventh)|1911 EB", re.I)
GUNCEL = re.compile(r"TDV|İslâm Ansiklopedisi|biographi\.ca|Dictionary of Canadian Biography|DCB|UNESCO|General History of Africa|"
                    r"Treccani|Deutsche Biographie|NDB|HLS|Historisches Lexikon|Encyclopedia of Ukraine|Iranica|Cambridge|"
                    r"Oxford|Magyar Katolikus|Canadian Encyclopedia|Handbook of Texas|Journal|Review|Quarterly|Belleten", re.I)
say = {"tam->kismen": 0, "kismen/celiski beyan": 0, "guncel ile birlikte": 0}
for sonuc in sys.argv[1:]:
    S = json.load(open(sonuc, encoding="utf-8"))
    for no, s in S.items():
        if no.startswith("_") or not EB.search(s.get("kaynak", "")):
            continue
        yalniz_eb = not GUNCEL.search(EB.sub("", s["kaynak"]))
        if not yalniz_eb:
            say["guncel ile birlikte"] += 1
            continue
        h = H[nerede[no]][no]
        eski = s["teyit"]
        if eski not in ("tam", "kismen", "celiski"):
            continue
        yeni = "kismen" if eski == "tam" else eski
        s["teyit"] = yeni
        s["not"] = (s.get("not") or "") + " [EB 1911 tek başına: en çok kısmen, çift teyitte ikinci kaynak sayılmaz — güncel akademik kaynak gerek]"
        etiket = "[KAYNAK-UMIT (%s):" % eski
        if etiket in h["gerekce"]:
            h["gerekce"] = h["gerekce"].replace(etiket, "[KAYNAK-UMIT (%s; EB 1911 tek başına — güncel akademik kaynak gerek):" % yeni)
        say["tam->kismen" if eski == "tam" else "kismen/celiski beyan"] += 1
        print(no, eski, "->", yeni)
    json.dump(S, open(sonuc, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
for yol, d in H.items():
    json.dump(d, open(yol, "w", encoding="utf-8"), ensure_ascii=False, indent=0)
print(say)
