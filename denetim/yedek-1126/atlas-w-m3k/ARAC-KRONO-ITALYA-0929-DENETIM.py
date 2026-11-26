# KRONO-ITALYA-0929 — kronoloji_venedik.js + kronoloji_italya.js madde denetimi (salt okunur).
# Girdi: node ile yüklenmiş JSON (denetim/ARAC-KRONO-ITALYA-0929-DENETIM.js üretir) — burada yalnız sayım.
import json, os, re, sys, collections
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
d = json.load(open(os.environ["TEMP"] + "/tum.json", encoding="utf-8"))
ZORUNLU = ["t", "b", "tur", "onem", "dunya", "kapsam", "etiket", "yer_id", "d", "kaynak"]
TUR = collections.Counter()
for k, v in d.items():
    if isinstance(v, list) and not k.startswith("devletler::"):
        for x in v:
            if isinstance(x, dict) and "tur" in x and k.split("::")[0] not in ("kronoloji_venedik.js", "kronoloji_italya.js"):
                TUR[x["tur"]] += 1
DIS = {"kronoloji_venedik.js::KRONOLOJI_VENEDIK": "venedik", "kronoloji_italya.js::KRONOLOJI_COK_ITALYA": "italya"}
for anahtar, ad in DIS.items():
    L = d[anahtar]
    print("==", ad, len(L))
    eksik = [(i, x["t"], [a for a in ZORUNLU if a not in x or x[a] in ("", None)]) for i, x in enumerate(L)]
    eksik = [e for e in eksik if e[2] and e[2] != ["yer_id"]]
    print(" zorunlu alan eksik (yer_id hariç):", len(eksik), eksik[:5])
    yerbos = sum(1 for x in L if not x.get("yer_id"))
    print(" yer_id boş:", yerbos)
    bul = collections.Counter()
    for x in L:
        k = x.get("kaynak", "")
        if k.startswith("bulunamadı"):
            m = re.search(r"gün (YAKLAŞIK|DOĞRULANMADI|YAYGIN KABUL)", k, re.I)
            bul[m.group(1).upper() if m else "diğer"] += 1
    print(" kaynak 'bulunamadı' ile başlayan:", sum(bul.values()), dict(bul))
    print(" kaynak Vikipedi geçen:", sum(1 for x in L if re.search(r"vikipedi|wikipedia", x.get("kaynak", ""), re.I)))
    print(" yeni tür değeri (listede olmayan, diğer dosyalarda da yok):",
          sorted({x["tur"] for x in L if TUR.get(x["tur"], 0) == 0}))
    ilk = [x for x in L if x["t"].endswith("-01-01")]
    print(" t YYYY-01-01 biçiminde:", len(ilk), "· `gun:` alanı taşıyan:", sum(1 for x in ilk if x.get("gun")))
    dolgu = [(x["t"], x["b"][:60]) for x in L if x["t"] == "1281-01-01"]
    print(" 1281-01-01 pencere-ucu dolgu maddesi:", dolgu)
    cc = collections.Counter((int(x["t"][:4]) - 1) // 100 + 1 for x in L)
    print(" yüzyıl dağılımı:", sorted(cc.items()))
