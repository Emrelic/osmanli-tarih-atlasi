# -*- coding: utf-8 -*-
"""v1 (eski cikarici) ile v2 (duzeltilmis) taramayi karsilastirir.
Karar verilmis adlarda YENI pencere-ici cumle belirenleri listeler —
yeniden inceleme listesi. Ayrica genel istatistik."""
import io, json, os
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
v1 = {json.loads(l)["ad"]: json.loads(l)
      for l in io.open(os.path.join(KOK, "glm", "epok_asama1.v1.jsonl"), encoding="utf-8")}
v2 = [json.loads(l) for l in io.open(os.path.join(KOK, "glm", "epok_asama1.jsonl"), encoding="utf-8")]
karar = [json.loads(l) for l in io.open(os.path.join(KOK, "glm", "epok_karar.jsonl"), encoding="utf-8")]
kararda = {k["ad"]: k for k in karar}
print("v1:", len(v1), "· v2:", len(v2), "· karar:", len(karar))

degisen_http = []
for r in v2:
    e = v1.get(r["ad"])
    if not e:
        print("YENİ KAYIT?:", r["ad"])
        continue
    if e.get("http") != r.get("http") or e.get("slug") != r.get("slug"):
        degisen_http.append((r["ad"], e.get("http"), e.get("slug"), "->", r.get("http"), r.get("slug"), r.get("takip", "")))
print("slug/http değişen:", len(degisen_http))
for d in degisen_http[:30]:
    print("  ", d)

# kararlı adlarda yeni cümle
def cumle_kumesi(rec):
    return set((c or "").strip()[:120] for _, c in (rec.get("c_yil") or []) + (rec.get("c_ek") or []))

yeni_cumleli = []
for r in v2:
    k = kararda.get(r["ad"])
    if not k:
        continue
    eski = cumle_kumesi(v1[r["ad"]])
    yeni = cumle_kumesi(r)
    fark = [c for c in yeni if c not in eski]
    pencere = []
    for y, c in (r.get("c_yil") or []):
        if y is not None and 1200 <= y <= 1310 and (c or "").strip()[:120] not in eski:
            pencere.append((y, c[:200]))
    if pencere:
        yeni_cumleli.append((r["ad"], k["kova"], pencere[:4], len(fark)))
print()
print("kararlı adlarda YENİ pencere-içi cümle:", len(yeni_cumleli))
for ad, kova, p, nf in yeni_cumleli:
    print(f"  [{kova}] {ad} (+{nf} cümle)")
    for y, c in p:
        print(f"      Y[{y}] {c}")
