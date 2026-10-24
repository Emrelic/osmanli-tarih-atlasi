# -*- coding: utf-8 -*-
"""YER-3-BATI (23 Ekim 2026): ONEMLI-YOK-BULUNAMADI.tsv'nin doğu-asya / güneydoğu-asya DIŞI satırlarının
ikinci tur çözümü. Araştırma: 7 alt ajan (TDV / Iranica / Pleiades / TGN / iDAI / GeoNames / UNESCO /
Imperial Gazetteer of India / akademik), çıktı denetim/yer-arastirma/parti_130_sonuc.json.
Kullanım:
  py -I denetim/ARAC-YER3-BATI-1023.py birlestir <sonuc_klasoru>   # sonuc_*.json -> parti_130_sonuc.json
  py -I denetim/ARAC-YER3-BATI-1023.py uret                        # parti_130 -> data/yerlesimler_once1281_yt_yer3.js
                                                                    #   + denetim/once1281/yer-eksik/ONEMLI-YOK-BULUNAMADI-BATI.tsv
Süzgeç (betik uygular, model değil): durum=cift_tanik · ≥2 tanık, Vikipedi/Wikidata tanık sayılmaz ·
koordinatlı her tanık seçilen noktaya ≤10 km · atlas mükerrer: normalleştirilmiş ad (+eski/modern adlar) 30 km
ya da herhangi yerleşim 3 km · parti içi ad/3 km tekrarı · RED listesi (gerekçeli)."""
import sys, io, os, re, json, csv, math, glob
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi
from ad_esanlam import sadelestir as N

KL = os.path.join(KOK, "denetim", "yer-arastirma")
PARTI = os.path.join(KL, "parti_130_sonuc.json")
CIKTI = os.path.join(KOK, "data", "yerlesimler_once1281_yt_yer3.js")
TSV_ANA = os.path.join(KOK, "denetim", "once1281", "yer-eksik", "ONEMLI-YOK-BULUNAMADI.tsv")
TSV_BATI = os.path.join(KOK, "denetim", "once1281", "yer-eksik", "ONEMLI-YOK-BULUNAMADI-BATI.tsv")
WIKI = re.compile(r"wikipedia|wikidata|wikimedia", re.I)
# gerekçeli elle red (tanık var ama yazmak yanlış/erken)
RED = {
    "Suyab": "atlasta «Balasagun (Ak-Beşim)» yerleşimi ~6 km'de: Ak-Beşim aynı höyük; ikinci nokta mükerrer olur (YER-2 model reddi sürüyor)",
    "Delos": "ada kara maskesinde yok: denetle'nin önerdiği nokta (4.6 km) başka adaya (Mykonos/Rineia) düşüyor; konum doğru, maske sorunu (YER-2 reddi sürüyor)",
    "Arvad": "ada kara maskesinde yok: denetle'nin önerdiği nokta (4.0 km) ana karaya (Tartus) düşüyor; konum doğru, maske sorunu (YER-2 reddi sürüyor)",
    "Kastro":"Limni adasının merkezi Kastro/Myrina atlasta «Limni» (39.876, 25.156; ~8.5 km) yerleşimiyle temsil ediliyor; ikinci nokta mükerrer riski (YER-2 model reddi sürüyor)",
}

MASKE = {"Nan Madol": (6.8335, 158.3142), "Birsay": (59.1270, -3.3235), "Anakena": (-27.0788, -109.3280)}


def km(a, b):
    p = math.pi / 180
    h = math.sin((b[0] - a[0]) * p / 2) ** 2 + math.cos(a[0] * p) * math.cos(b[0] * p) * math.sin((b[1] - a[1]) * p / 2) ** 2
    return 12742 * math.asin(math.sqrt(h))


def birlestir(klasor):
    hepsi = []
    for f in sorted(glob.glob(os.path.join(klasor, "sonuc_*.json"))):
        d = json.load(open(f, encoding="utf-8"))
        for r in d.get("sonuclar", []):
            r["grup"] = d.get("grup") or os.path.basename(f)[6:-5]
            hepsi.append(r)
    json.dump({"parti": 130, "yontem": __doc__, "sonuclar": hepsi}, open(PARTI, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print("birlestirildi:", len(hepsi), "->", PARTI)


def sayi(x):
    try:
        return float(x)
    except (TypeError, ValueError):
        return None


def uret():
    S = json.load(open(PARTI, encoding="utf-8"))["sonuclar"]
    satirlar = list(csv.DictReader(open(TSV_ANA, encoding="utf-8"), delimiter="\t"))
    Y = [y for y in girdi.yukle(sessiz=True) if not str(y.get("_kaynak", "")).startswith("yerlesimler_once1281_yt_yer3")]     # kendi çıktımız mükerrer sayılmasın
    adlar = {}
    for y in Y:
        for a in [y["ad"], re.sub(r"\s*\(.*?\)", "", y["ad"])] + re.findall(r"\(([^)]*)\)", y["ad"]):
            if N(a):
                adlar.setdefault(N(a), []).append((y["lat"], y["lon"], y["ad"]))
    noktalar = [((y["lat"], y["lon"]), y["ad"]) for y in Y if y.get("lat") is not None and y.get("tur") != "bolge"]
    yaz, ret, gorulen = [], {}, []      # ret: no -> gerekçe
    for r in S:
        no = r.get("no")
        if r.get("durum") == "ayni":
            ret[no] = "aynı yer: satır no %s ile çözüldü/çözülemedi (o satıra bak)" % r.get("ayni_no")
            continue
        if r.get("durum") != "cift_tanik":
            ret[no] = "çözülemedi: " + (r.get("gerekce") or "-")
            continue
        ad = (r.get("ad") or "").strip()
        lat, lon = sayi(r.get("lat")), sayi(r.get("lon"))
        if ad in RED:
            ret[no] = "RED: " + RED[ad]
            continue
        if not ad or lat is None or lon is None:
            ret[no] = "ad/koordinat eksik"
            continue
        tan = [t for t in r.get("tanik") or [] if not WIKI.search((t.get("kaynak") or "") + " " + (t.get("url") or ""))]
        koor = [t for t in tan if sayi(t.get("lat")) is not None and sayi(t.get("lon")) is not None]
        if len(tan) < 2 or not koor:
            ret[no] = "tanık şartı sağlanmadı (Vikipedi dışı %d tanık, koordinatlı %d)" % (len(tan), len(koor))
            continue
        uzak = [(t.get("kaynak"), round(km((lat, lon), (sayi(t["lat"]), sayi(t["lon"]))), 1)) for t in koor]
        uzak = [u for u in uzak if u[1] > 10]
        if uzak:
            ret[no] = "tanık koordinatları >10 km ayrışıyor: %s" % uzak
            continue
        aday_adlar = [ad, r.get("modern") or "", r.get("bilesen") or ""] + list(r.get("eski_adlar") or [])
        aday_adlar = [x for a in aday_adlar for x in re.split(r"\s*/\s*", a) if x]
        ceki = None
        for a in aday_adlar:
            for (la, lo, mad) in adlar.get(N(a), []):
                if km((lat, lon), (la, lo)) <= 30:
                    ceki = "atlasta mevcut (ad+30 km): «%s» %.1f km" % (mad, km((lat, lon), (la, lo)))
                    break
            if ceki:
                break
        if not ceki:
            for p, mad in noktalar:
                if km((lat, lon), p) <= 3:
                    ceki = "atlasta 3 km içinde yerleşim: «%s» %.2f km (mükerrer olabilir; yazılmadı)" % (mad, km((lat, lon), p))
                    break
        if not ceki:
            for (q, qad, qno) in gorulen:
                if N(qad) == N(ad) or km((lat, lon), q) <= 3:
                    ceki = "parti içi tekrar: satır no %s («%s»)" % (qno, qad)
                    break
        if ceki:
            ret[no] = ceki
            continue
        gorulen.append(((lat, lon), ad, no))
        r["_tan"] = tan
        yaz.append(r)

    def js(s):
        return json.dumps(s, ensure_ascii=False)

    out = ["// yerlesimler_once1281_yt_yer3.js — 1281 öncesi önemli başkent yerleri, ikinci tur (YER-3-BATI, 23 Ekim 2026)",
           "// Kaynak: denetim/yer-arastirma/parti_130_sonuc.json (ÇİFT TANIK: ≥2 bağımsız kaynak, ≥1 koordinatlı, ≤10 km; Vikipedi/Wikidata tanık değil)",
           "// Üreten: denetim/ARAC-YER3-BATI-1023.py uret · kapsam: ONEMLI-YOK-BULUNAMADI.tsv doğu-asya/güneydoğu-asya DIŞI",
           "// s:[] + bos:\"veri-yok\" + bit:\"1281-01-01\": motor penceresinde canlı DEĞİL (yer_id/kamera için). kur: yazılmadı (ilk anılıştan kur türetilmez; ilk anılış not:'ta).",
           "// Mükerrer tarama: normalleştirilmiş ad (+eski/modern) 30 km + 3 km. BAĞLAMA: arac/girdi_listesi.py + index.html.",
           "window.YERLESIMLER_ONCE1281_YT_YER3 = [", ""]
    for r in yaz:
        lat, lon = float(r["lat"]), float(r["lon"])
        if r["ad"] in MASKE:      # denetle 'konum' kapısı: kıyı/adacık noktası kara maskesine çekildi (beyanlı)
            r["gerekce"] = (r.get("gerekce") or "") + " [koordinat kara maskesine çekildi: %s,%s → %s,%s (denetle 'konum' kapısı); konum yaklaşık]" % (lat, lon, MASKE[r["ad"]][0], MASKE[r["ad"]][1])
            lat, lon = MASKE[r["ad"]]
            r["konum_kesinligi"] = "yaklasik"
        tur = r.get("tur") if r.get("tur") in ("sehir", "kale", "kasaba", "harabe", "liman") else "sehir"
        il = r.get("ilk_anilis") or {}
        il_s = ("İlk anılış/kuruluş: %s (%s). " % (il["tarih"], il.get("kaynak") or "-")) if il.get("tarih") else "İlk anılış: kaynakta bulunamadı. "
        not_ = "YER-3-BATI: önemli başkent listesinde «%s» (%s; devlet: %s) bileşeni; eski adlar: %s; modern: %s (%s). %s%s" % (
            r.get("tsv_yer") or "-", r.get("bolge") or "-", r.get("devletler") or "-", ", ".join(r.get("eski_adlar") or []) or "-",
            r.get("modern") or "-", r.get("ulke") or "-", il_s, r.get("gerekce") or "")
        tan = " · ".join("%s %s (%s, %s)%s" % (t.get("kaynak", ""), t.get("url", ""), t.get("lat"), t.get("lon"),
                         (": " + t["ozet"]) if t.get("ozet") else "") for t in r["_tan"])
        out.append('{ ad:%s, tur:%s, lat:%s, lon:%s, g:0, k:0, s:[], d:[], bos:"veri-yok", bit:"1281-01-01",' % (js(r["ad"].strip()), js(tur), round(lat, 5), round(lon, 5)))
        if r.get("konum_kesinligi") == "yaklasik":
            out.append('  konum_kesinlik:"yaklasik",')
        out.append("  not:%s," % js(re.sub(r"\s+", " ", not_).strip()))
        out.append("  kaynak:%s }," % js("ÇİFT TANIK: " + re.sub(r"\s+", " ", tan) + " · denetim/yer-arastirma/parti_130_sonuc.json"))
    out.append("];")
    open(CIKTI, "w", encoding="utf-8").write("\n".join(out) + "\n")
    # çözülemeyenler: grup dosyasındaki 'no' ana TSV satır sırasıdır (0 = ilk veri satırı)
    yazilan_no = {r.get("no") for r in yaz}
    with open(TSV_BATI, "w", encoding="utf-8", newline="") as f:
        w = csv.writer(f, delimiter="\t", lineterminator="\n")
        w.writerow(["bolge", "yer", "onem_puan", "devletler", "bilesen", "durum_yer2", "gerekce_yer3"])
        for i, s in enumerate(satirlar):
            if s["bolge"] in ("dogu-asya", "guneydogu-asya") or i in yazilan_no:
                continue
            w.writerow([s["bolge"], s["yer"], s["onem_puan"], s["devletler"], s["bilesen"], s["durum"],
                        re.sub(r"\s+", " ", ret.get(i, "sonuç kaydı yok (araştırılmadı)"))])
    print(json.dumps({"yazilan": len(yaz), "cozulemedi": len(ret), "dosya": CIKTI}, ensure_ascii=False))
    from collections import Counter
    print(Counter(v.split(":")[0][:40] for v in ret.values()))


if __name__ == "__main__":
    {"birlestir": lambda: birlestir(sys.argv[2]), "uret": uret}[sys.argv[1]]()
