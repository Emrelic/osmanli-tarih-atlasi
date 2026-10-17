"""Osmanlı tarihçe partilerini birleştirir.
Kullanım: py -I osm_birlestir.py <osm klasörü> <çıktı json>
sonuc_NN.json (NN rakam) taban; sonuc_NNb.json düzeltmeler — aynı id'yi DEĞİŞTİRİR."""
import json, glob, os, re, sys, collections
sys.stdout.reconfigure(encoding="utf-8")
OSM, CIKTI = sys.argv[1], sys.argv[2]
taban, duzeltme = {}, {}
kaynak_dosya = {}
for yol in sorted(glob.glob(os.path.join(OSM, "sonuc_*.json"))):
    ad = os.path.basename(yol)
    hedef = duzeltme if re.match(r"sonuc_\d+b\.json$", ad) else taban
    for k in json.load(open(yol, encoding="utf-8")):
        if k["id"] in hedef:
            print(f"MÜKERRER id {k['id']}: {kaynak_dosya.get((id(hedef), k['id']))} ve {ad}")
        hedef[k["id"]] = k
        kaynak_dosya[(id(hedef), k["id"])] = ad
for i, k in duzeltme.items():
    print(f"düzeltme: {i} ({'yerine' if i in taban else 'YENİ — tabanda yok!'})")
    taban[i] = k
K = sorted(taban.values(), key=lambda k: k["id"])
# parti yardımcı alanlarını at (şema dışı)
YARDIMCI = {"eslesme", "atlas_lat", "atlas_lon", "atlas_ilk_gun", "atlas_ilk_sahip", "atlas_kur", "atlas_km",
            "zincir_sonu", "yakin_atlas_noktasi", "ad_1900", "ulke_1900", "birim"}
for k in K:
    for a in YARDIMCI & set(k):
        k.pop(a)
json.dump(K, open(CIKTI, "w", encoding="utf-8"), ensure_ascii=False, indent=1)

# özet
S = [s for k in K for s in k.get("sahip") or []]
O = [o for k in K for o in k.get("olay") or []]
print(f"\nŞEHİR {len(K)} · sahiplik dönemi {len(S)} · olay {len(O)}")
print("zinciri boş (ilk tanık atlas başlangıcından sonra):", sum(1 for k in K if not k.get("sahip")))
print("atlasta (atlas_ad dolu):", sum(1 for k in K if k.get("atlas_ad")), "· atlasta değil:", sum(1 for k in K if not k.get("atlas_ad")))
print("koordinat_bekliyor:", sum(1 for k in K if k.get("koordinat_bekliyor")))
print("dikis_beyan:", sum(1 for k in K if k.get("dikis_beyan")))
print("ilk.nicelik:", dict(collections.Counter((k.get("ilk") or {}).get("nicelik") for k in K)))
eski = [k for k in K if (k.get("ilk") or {}).get("t", "9").startswith("-")]
print("MÖ'de başlayan:", len(eski), "· 1281 öncesi başlayan:",
      sum(1 for k in K if (k.get("ilk") or {}).get("t", "9999") < "1281" or (k.get("ilk") or {}).get("t", "").startswith("-")))
for d in ("__BOSLUK__", "__YOK__"):
    print(d, "dilimi:", sum(1 for s in S if s.get("d") == d), "· şehir:", sum(1 for k in K if any(s.get("d") == d for s in k.get("sahip") or [])))
ky = collections.Counter(s["d"] for s in S if s.get("kunye_yok"))
print(f"kunye_yok: {sum(ky.values())} dilim, {len(ky)} ayrı önerilen id — en çok istenenler:")
for i, n in ky.most_common(15):
    print(f"   {n}× {i}")
print("en çok kullanılan sahipler:", collections.Counter(s["d"] for s in S).most_common(12))
