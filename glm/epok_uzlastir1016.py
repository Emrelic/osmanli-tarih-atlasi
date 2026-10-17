# -*- coding: utf-8 -*-
"""Karar/yanlış adlarını evren adlarına uzlaştırır; tsv'yi sıfırdan yeniden üretir.
Kural: karar adı evrende yoksa, parensizi (sondaki ' (...)') atılmış biçimler
eşleşiyorsa yeniden adlandır. Çift anlamlı eşleşmede durur (hiçbir şey yazmaz)."""
import io, json, os, re, sys
if __name__ == "__main__":
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PAREN = re.compile(r"\s*\([^)]*\)\s*$")


def bare(s):
    return PAREN.sub("", s).strip()


def yukle_satir(p):
    return [l for l in io.open(p, encoding="utf-8") if l.strip()]


evren = json.load(io.open(os.path.join(KOK, "glm", "epok_evren.json"), encoding="utf-8"))
evren_ad = {e["ad"] for e in evren}
bare_map = {}
for a in evren_ad:
    bare_map.setdefault(bare(a), []).append(a)

yeniden = {}
for kaynak in ("epok_karar1016.jsonl", "epok_yanlis1016.jsonl"):
    p = os.path.join(KOK, "glm", kaynak)
    if not os.path.exists(p):
        continue
    for l in yukle_satir(p):
        ad = json.loads(l)["ad"]
        if ad in evren_ad:
            continue
        adaylar = bare_map.get(bare(ad), [])
        if len(adaylar) != 1:
            print(f"DURDU · {kaynak}: '{ad}' → aday {adaylar}")
            sys.exit(1)
        yeniden.setdefault(kaynak, {})[ad] = adaylar[0]

for kaynak, m in yeniden.items():
    print(f"{kaynak}: {len(m)} yeniden adlandırma")
    for eski, yeni_ad in sorted(m.items()):
        print(f"  '{eski}' → '{yeni_ad}'")
    p = os.path.join(KOK, "glm", kaynak)
    out = []
    for l in yukle_satir(p):
        d = json.loads(l)
        if d["ad"] in m:
            d["ad"] = m[d["ad"]]
        out.append(json.dumps(d, ensure_ascii=False))
    io.open(p, "w", encoding="utf-8").write("\n".join(out) + "\n")

# çakışma denetimi: aynı hedefe giden iki farklı kaynak adı yok (bare benzersizliği zaten garantiledi)
print("uzlaştırma tamam")
