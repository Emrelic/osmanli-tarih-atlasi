"""uygula_umit.py SONUC.json [SONUC2.json ...] — UMIT kaynak teyitlerini bütün hüküm dosyalarına işler
(ENKLAV-1103/hukumler.json + ENKLAV-1104/hukumler2-5.json). uygula.py ile aynı kural:
tam/kismen/celiski -> guven KAYNAKLI; bulunamadi/giris_gerek -> KAYNAK-GEREK kalır, arama notu eklenir.
Hüküm/kova burada değişmez: kaynak hükmü çürütüyorsa not gerekçeye yazılır, kararı KASA verir."""
import json, sys, os, glob
from collections import Counter

BURA = os.path.dirname(os.path.abspath(__file__))
DOSYALAR = [os.path.join(BURA, "..", "hukumler.json")] + sorted(glob.glob(os.path.join(BURA, "..", "..", "ENKLAV-1104", "hukumler*.json")))
H = {yol: json.load(open(yol, encoding="utf-8")) for yol in DOSYALAR}
nerede = {no: yol for yol, d in H.items() for no in d if not no.startswith("_")}
say = Counter()
for sonuc in sys.argv[1:]:
    for no, s in json.load(open(sonuc, encoding="utf-8")).items():
        if no.startswith("_"):
            continue
        h = H[nerede[no]][no]
        if h["guven"] != "KAYNAK-GEREK":
            print("ATLANDI (zaten", h["guven"], ")", no)
            continue
        t = s["teyit"]
        if t in ("tam", "kismen", "celiski"):
            h["guven"] = "KAYNAKLI"
            onceki = h.get("kaynak") or ""
            h["kaynak"] = s["kaynak"] + (" · önceki: " + onceki if onceki and onceki != "bulunamadı" else "")
            ek = " [KAYNAK-UMIT (%s): %s" % (t, s["teyit_edilen"])
            if s.get("alinti"):
                ek += " — \"%s\"" % s["alinti"]
            if s.get("not"):
                ek += " · %s" % s["not"]
            h["gerekce"] += ek + "]"
        else:
            h["gerekce"] += " [KAYNAK-UMIT: %s — %s]" % (t, s.get("not") or s.get("kaynak") or "")
        say[t] += 1
for yol, d in H.items():
    json.dump(d, open(yol, "w", encoding="utf-8"), ensure_ascii=False, indent=0)
print(dict(say))
print(Counter(v["guven"] for d in H.values() for k, v in d.items() if not k.startswith("_")))
