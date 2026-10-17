# -*- coding: utf-8 -*-
"""GLM-I EPOK-SAHI P 1016 — TSV derleyici (denetim/GLM1-EPOK-SAHIP-1016.tsv).

EKLEME KIPİ: var olan satıra (ad anahtarıyla) DOKUNMAZ; yalnız eksik
noktaların satırını ekler. Hüküm kaynağı önceliği:
  1. epok_karar1016.jsonl  (1016 hükümleri — son satır kazanır)
  2. eski epok_karar.jsonl (9 Ekim taşıma; yalnız 1281 sahibi DEĞİŞMEMİŞLER)
  3. tarama kaydı (mekanik): ④ 302 · ⑤ gövde-0/000 · ③-araç sıfır-cümle
Yazılmayan: insan-inceleme bekleyenler (satır yok = yarım satır yok).
Flip: epok_ara1016.jsonl 'bulundu' → yeni tarama satırı gelince PENDING'e döner.
"""
import io, json, os, sys
from collections import Counter
if __name__ == "__main__":
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TSV = os.path.join(KOK, "denetim", "GLM1-EPOK-SAHIP-1016.tsv")
AS1 = ("Anadolu", "Kırım-Karadeniz", "Balkan", "Ortadoğu", "İran-Kafkas",
       "Kuzey Afrika", "Arabistan-Hint")
BOLGE_SIRA = {b: i for i, b in enumerate(AS1)}
KOVA_H = {1: "①", 2: "②", 3: "③", 4: "④", 5: "⑤"}


def yukle(ad):
    p = os.path.join(KOK, "glm", ad)
    if not os.path.exists(p):
        return {}
    d = {}
    for l in io.open(p, encoding="utf-8"):
        if l.strip():
            d[json.loads(l)["ad"]] = json.loads(l)   # son kazanır
    return d


yeni = {e["ad"]: e for e in json.load(io.open(os.path.join(KOK, "glm", "epok_evren.json"), encoding="utf-8"))}
eski_evren = {e["ad"]: e for e in json.load(io.open(os.path.join(KOK, "glm", "epok_evren_1009.json"), encoding="utf-8"))}
tarama = yukle("epok_asama1.jsonl")
karar_eski = yukle("epok_karar.jsonl")
karar_1016 = yukle("epok_karar1016.jsonl")
ara = yukle("epok_ara1016.jsonl")          # {ad: {sonuc, slug?, sorgu}}
yanlis = yukle("epok_yanlis1016.jsonl")    # yanlış madde tespitleri

degisen = {ad for ad in (eski_evren.keys() & yeni.keys())
           if eski_evren[ad]["sahip_id"] != yeni[ad]["sahip_id"]}

# var olan tsv satırları
var, ilk = set(), not os.path.exists(TSV)
if not ilk:
    for l in io.open(TSV, encoding="utf-8"):
        if l.startswith("id\t") or not l.strip():
            continue
        var.add(l.split("\t")[1])


def cumle25(s):
    k = (s or "").replace("\t", " ").replace("\n", " ").split()
    return " ".join(k[:25]) + ("…" if len(k) > 25 else "")


def satir(e, slug, kova, cumle, not_):
    return "\t".join([e["ad"], e["ad"], e["sahip_ad"], slug or "",
                      KOVA_H[kova], cumle, not_])


eklenen, kova_say, tasima = [], Counter(), 0
a1 = sorted([e for e in yeni.values() if e["bolge"] in AS1],
            key=lambda e: (BOLGE_SIRA[e["bolge"]], e["ad"]))
for e in a1:
    ad = e["ad"]
    if ad in var:
        continue
    r = tarama.get(ad)
    slug = (r or {}).get("slug", "")
    # 1) insan hükmü: 1016 kararı her zaman geçerli
    if ad in karar_1016:
        k = karar_1016[ad]
        eklenen.append(satir(e, k.get("slug", slug), int(k["kova"]),
                             cumle25(k.get("alinti_prefix", "")), k.get("not", "")))
        kova_say[int(k["kova"])] += 1
        continue
    # 2) eski karar taşıma: yalnız sahibi değişmemiş noktalar
    if ad in karar_eski and ad not in degisen:
        k = karar_eski[ad]
        eklenen.append(satir(e, k.get("slug", slug), int(k["kova"]),
                             cumle25(k.get("alinti_prefix", "")),
                             (k.get("not", "") + " · hüküm 9 Ekim'den taşındı").strip(" ·")))
        kova_say[int(k["kova"])] += 1
        tasima += 1
        continue
    if r is None:
        continue                      # taranmamış — satır yok
    http, cumle_var = r.get("http"), bool(r.get("c_yil") or r.get("c_ek"))
    a = ara.get(ad)
    if ad in yanlis and not (a and a.get("sonuc") == "bulundu"):
        not_ = "yanlış madde yakalandı: slug=" + slug + " (" + yanlis[ad].get("not", "") + ")"
        if a and a.get("sonuc") == "yok":
            not_ = "arama(render) doğruladı: madde yok · " + not_
        eklenen.append(satir(e, slug, 4, "", not_))
        kova_say[4] += 1
        continue
    if http == "200" and (r.get("govde_uzunluk") or 0) > 0:
        if cumle_var:
            continue                  # insan-inceleme bekler
        eklenen.append(satir(e, slug, 3, "", "araç: 1200-1310 penceresinde cümle çıkmadı"))
        kova_say[3] += 1
        continue
    if http == "200":
        eklenen.append(satir(e, slug, 5, "", "gövde filtresi boş (BOZUK kayıt)"))
        kova_say[5] += 1
        continue
    if http in ("302", "404"):
        if a and a.get("sonuc") == "bulundu":
            continue                  # flip: yeni tarama satırı bekliyor
        not_ = "araç: slug ölü (302); arama doğrulanmadı"
        if a and a.get("sonuc") == "yok":
            not_ = "arama(render) doğruladı: kendi maddesi yok (yalnız geçmeler)"
        eklenen.append(satir(e, slug, 4, "", not_))
        kova_say[4] += 1
        continue
    eklenen.append(satir(e, slug, 5, "", "taşıma hatası http=" + str(http)))
    kova_say[5] += 1

if eklenen or ilk:
    with io.open(TSV, "a", encoding="utf-8") as f:
        if ilk:
            f.write("id\tad\t1281_sahibi_atlas\ttdv_slug\tkova\ttdv_cumle\tnot\n")
        for s in eklenen:
            f.write(s + "\n")
print(f"eklenen satır: {len(eklenen)} (taşıma {tasima}) · tsv toplam satır: {len(var) + len(eklenen)}")
print("bu tur kova:", dict(sorted(kova_say.items())))
print("bekleyen (satırsız):", len(a1) - len(var) - len(eklenen))
