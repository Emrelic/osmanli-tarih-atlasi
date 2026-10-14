"""Bir bölgenin 1900 şehir listesini araştırma partilerine böler (şehir tarihçesi işi).

    py arac/sehir_tarihce_parti.py <bolge> <çıktı klasörü> [parti boyu=10]

<bolge>: osmanli | rusya | avrupa | asya | amerika | afrika (denetim/SEHIR-1900-KOORDINAT-1013/LISTE-KOORD.tsv `bolge`).
Çıktı: parti_NN.json (her şehre atlas eşleşmesi: atlas_ad, atlas_ilk_gun, atlas_ilk_sahip, atlas_kur …) ve
koordinatsiz.json (GeoNames'te bulunamayanlar — ayrıca ele alınır). Şema ve kurallar: VERI-YAPISI.md son bölüm.
⚠️ Koordinat GeoNames ad eşleşmesidir ve YANLIŞ ADAŞ olabilir (aday_sayisi > 1 olanları ajan sınar).
"""
import csv, json, math, os, re, sys, unicodedata

KOK = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))
sys.path.insert(0, os.path.join(KOK, "arac"))
LISTE = os.path.join(KOK, "denetim", "SEHIR-1900-KOORDINAT-1013", "LISTE-KOORD.tsv")


def km(a, b, c, d):
    r = math.radians
    return 6371 * math.hypot((r(d) - r(b)) * math.cos((r(a) + r(c)) / 2), r(c) - r(a))


def kimlik(s):
    s = s.replace("İ", "i").replace("I", "i").replace("ı", "i")
    s = unicodedata.normalize("NFKD", s)
    s = "".join(c for c in s if not unicodedata.combining(c)).lower()
    return re.sub(r"[^a-z0-9]+", "-", s).strip("-")


def main():
    sys.stdout.reconfigure(encoding="utf-8")
    if len(sys.argv) < 3:
        print(__doc__)
        return 2
    bolge, cikti = sys.argv[1], sys.argv[2]
    boy = int(sys.argv[3]) if len(sys.argv) > 3 else 10
    import girdi, sehir_tarihce as st
    cwd = os.getcwd()
    os.chdir(KOK)
    Y = girdi.yukle(sessiz=True)
    os.chdir(cwd)
    YA = {y["ad"]: y for y in Y}
    L = [r for r in csv.DictReader(open(LISTE, encoding="utf-8"), delimiter="\t") if r["bolge"] == bolge]
    if not L:
        print("bölge bulunamadı:", bolge)
        return 2

    def ilk_pencere(y):
        P = [(p["f"], (p.get("d") or "osmanli") if a != "s" else p.get("d"))
             for a in ("s", "d", "v") for p in (y.get(a) or []) if p.get("f")]
        return min(P, key=lambda p: st.gun_no(p[0])) if P else (None, None)

    kayit, disari = [], []
    for r in L:
        if not r["lat"]:
            disari.append(r)
            continue
        lat, lon = float(r["lat"]), float(r["lon"])
        atlas_ad = None
        if r["eslesme"] == "atlasta":
            atlas_ad = r["atlas_en_yakin"]
        elif r["eslesme"] == "atlasta-kayik":
            ad = [a for a in r["atlas_aday"].split(" | ") if a in YA]
            atlas_ad = min(ad, key=lambda a: km(lat, lon, YA[a]["lat"], YA[a]["lon"])) if ad else None
        k = {"id": kimlik(r["ad_modern"] or r["ad_1900"]), "ad": r["ad_modern"], "ad_1900": r["ad_1900"],
             "kat1900": int(r["kat"]), "ulke_1900": r["ulke_1900"],
             "birim": f"{r['birim_turu']} {r['birim_adi']}".strip(), "ust_birim": r["ust_birim"],
             "lat": round(lat, 4), "lon": round(lon, 4), "eslesme": r["eslesme"], "atlas_ad": atlas_ad,
             "geonames_id": r["geonames_id"], "aday_sayisi": int(r["aday_sayisi"] or 0)}
        if atlas_ad:
            y = YA[atlas_ad]
            f, s = ilk_pencere(y)
            k.update(atlas_lat=y["lat"], atlas_lon=y["lon"], atlas_ilk_gun=f, atlas_ilk_sahip=s,
                     atlas_kur=y.get("kur"), atlas_km=round(km(lat, lon, y["lat"], y["lon"]), 1))
        else:
            k["zincir_sonu"] = "1900-01-01"
            k["yakin_atlas_noktasi"] = f"{r['atlas_en_yakin']} ({r['atlas_km']} km)"
        kayit.append(k)
    gor = {}
    for k in kayit:
        if k["id"] in gor:
            gor[k["id"]] += 1
            k["id"] = f"{k['id']}-{gor[k['id']]}"
        else:
            gor[k["id"]] = 1
    kayit.sort(key=lambda k: (k["kat1900"], k["ulke_1900"], k["ad"]))
    os.makedirs(cikti, exist_ok=True)
    n = 0
    for i in range(0, len(kayit), boy):
        n += 1
        json.dump(kayit[i:i + boy], open(os.path.join(cikti, f"parti_{n:02d}.json"), "w", encoding="utf-8"),
                  ensure_ascii=False, indent=1)
    json.dump(disari, open(os.path.join(cikti, "koordinatsiz.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print(f"{bolge}: {len(kayit)} şehir → {n} parti · koordinatsız {len(disari)} · atlasta "
          f"{sum(1 for k in kayit if k['atlas_ad'])} · adaşlı (sınanmalı) {sum(1 for k in kayit if k['aday_sayisi'] > 1)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
