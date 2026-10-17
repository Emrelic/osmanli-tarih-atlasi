# -*- coding: utf-8 -*-
"""GLM-I EPOK-SAHI P 1016 — TSV'de satiri olmayan (bekleyen) noktalari
incele partlarina dok (40 nokta/part). Format 9 Ekim partile ile ayni:
ad · 1281 sahibi(atlas) · slug · Y[yil] cümleleri · E[yakın yıl] cümleleri."""
import io, json, os, sys
if __name__ == "__main__":
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TSV = os.path.join(KOK, "denetim", "GLM1-EPOK-SAHIP-1016.tsv")
KLASOR = os.path.join(KOK, "glm", "epok_incele1016")
AS1 = ("Anadolu", "Kırım-Karadeniz", "Balkan", "Ortadoğu", "İran-Kafkas",
       "Kuzey Afrika", "Arabistan-Hint")
BOLGE_SIRA = {b: i for i, b in enumerate(AS1)}
if not os.path.isdir(KLASOR):
    os.mkdir(KLASOR)

var = set()
for l in io.open(TSV, encoding="utf-8"):
    if l.startswith("id\t") or not l.strip():
        continue
    var.add(l.split("\t")[1])

yeni = {e["ad"]: e for e in json.load(io.open(os.path.join(KOK, "glm", "epok_evren.json"), encoding="utf-8"))}
eski_evren = {e["ad"]: e for e in json.load(io.open(os.path.join(KOK, "glm", "epok_evren_1009.json"), encoding="utf-8"))}
tarama = {}
for l in io.open(os.path.join(KOK, "glm", "epok_asama1.jsonl"), encoding="utf-8"):
    r = json.loads(l)
    tarama[r["ad"]] = r
degisen = {ad for ad in (eski_evren.keys() & yeni.keys())
           if eski_evren[ad]["sahip_id"] != yeni[ad]["sahip_id"]}

bekleyen = []
for e in sorted(yeni.values(), key=lambda e: (BOLGE_SIRA.get(e["bolge"], 99), e["ad"])):
    if e["bolge"] not in AS1 or e["ad"] in var:
        continue
    r = tarama.get(e["ad"])
    if not r or not (r.get("c_yil") or r.get("c_ek")):
        continue
    bekleyen.append((e, r))
print(f"bekleyen (cümleli): {len(bekleyen)} · değişen olanı: {sum(1 for e, _ in bekleyen if e['ad'] in degisen)}")
for n, (e, r) in enumerate(bekleyen):
    part = n // 40 + 1
    with io.open(os.path.join(KLASOR, f"part-{part:02d}.txt"), "a", encoding="utf-8") as f:
        f.write(f"### {e['ad']} [{e['bolge']}] · atlas-1281: {e['sahip_ad']}"
                f"{' · DEĞİŞTİ' if e['ad'] in degisen else ''} · slug={r.get('slug')}\n")
        for y, c in (r.get("c_yil") or [])[:8]:
            f.write(f"Y[{y}] {c[:260]}\n")
        for y, c in (r.get("c_ek") or [])[:4]:
            f.write(f"E[{y}] {c[:260]}\n")
        f.write("\n")
print("partlar:", sorted(os.listdir(KLASOR)))
