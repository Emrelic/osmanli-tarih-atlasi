# -*- coding: utf-8 -*-
"""asama1 jsonl uzerinde kusur siniflarini olcer: BOZUK (200 & govde=0),
bk.-kocasi (kisa govde), hicri-once kayip cümle adayi."""
import io, json, os, re
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
src = os.path.join(KOK, "glm", "epok_asama1.jsonl")
recs = [json.loads(l) for l in io.open(src, encoding="utf-8")]
print("kayit:", len(recs))

bozuk = [r for r in recs if r.get("http") == "200" and (r.get("govde_uzunluk") or 0) == 0]
print("BOZUK:", len(bozuk), [r["ad"] for r in bozuk][:30])

# bk. kocasi: govde var ama cikarim bos/kisa — ham govdeyi onbellekten oku
BK = re.compile(r"bk\.?\s+[A-ZÇĞİÖŞÜ][\wÇĞİÖŞÜçğıöşü\- ]{2,40}")
koca = []
for r in recs:
    if r.get("http") != "200":
        continue
    if (r.get("govde_uzunluk") or 0) > 0 and (r.get("c_yil") or r.get("c_ek")):
        continue
    # govde kisa mi kontrolu icin onbellek dosyasini oku
    yol = None
    for d in ("denetim/ONCE1281-YERLESIM-tdv-onbellek",
              "denetim/GLM1-TDV-ONBELLEK",
              "denetim/GLM1-EPOK-SAHIP-1009-tdv-onbellek"):
        p = os.path.join(KOK, d, r.get("slug", "") + ".txt")
        if os.path.exists(p):
            yol = p
            break
    if not yol:
        continue
    t = io.open(yol, encoding="utf-8").read()
    govde = t.partition("\n")[2]
    if len(govde) < 800:
        m = BK.search(govde)
        koca.append((r["ad"], r.get("slug"), len(govde), m.group(0) if m else "?"))
print("kisa-govde+cuval:", len(koca))
for k in koca[:40]:
    print("  ", k)

# http dagilimi
d = {}
for r in recs:
    d[r.get("http", "?")] = d.get(r.get("http", "?"), 0) + 1
print("http:", dict(sorted(d.items())))
# evrenin tamami kapsandi mi (asama1 evreni ile karsilastir)
evren = json.load(io.open(os.path.join(KOK, "glm", "epok_evren.json"), encoding="utf-8"))
AS1 = ("Anadolu", "Kırım-Karadeniz", "Balkan", "Ortadoğu", "İran-Kafkas",
       "Kuzey Afrika", "Arabistan-Hint")
e1 = [e["ad"] for e in evren if e["bolge"] in AS1]
yok = [a for a in e1 if a not in {r["ad"] for r in recs}]
print("asama1 evren:", len(e1), "· taranmamis:", len(yok), yok[:10])
