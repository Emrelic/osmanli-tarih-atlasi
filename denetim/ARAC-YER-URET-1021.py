# -*- coding: utf-8 -*-
"""parti_*_sonuc.json -> data/yerlesimler_once1281_<bolge>.js adayları + mükerrer raporu.
Kullanım: py denetim/ARAC-YER-URET-1021.py   (yazar: data/yerlesimler_once1281_*.js, denetim/yer-arastirma/URET-RAPOR.json)
Kurallar: yalnız durum=cift_tanik yazılır; mükerrer (normalleştirilmiş ad ya da 3 km içinde aynı-ad-benzeri) atlanır ve rapora yazılır.
s:/d: BOŞ bırakılır (sahip yazımı DEVLET-LISTESI + era oturumlarıyla koordineli; öneri s_oneri sidecar'ında)."""
import sys, io, os, re, json, math, glob, collections
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi
from ad_esanlam import sadelestir as N

KL = os.path.join(KOK, "denetim", "yer-arastirma")


def km(a, b):
    p = math.pi / 180
    h = math.sin((b[0] - a[0]) * p / 2) ** 2 + math.cos(a[0] * p) * math.cos(b[0] * p) * math.sin((b[1] - a[1]) * p / 2) ** 2
    return 12742 * math.asin(math.sqrt(h))


def bolge_kutusu(lat, lon):
    """dosya adı bölümü: kaba coğrafi kutu."""
    if lat > 35 and -12 <= lon <= 45 and not (lon > 26 and lat < 42 and lon < 45 and lat < 41):
        return "avrupa" if lon < 40 else "avrupa"
    if 35 <= lat <= 42.5 and 26 <= lon <= 45:
        return "anadolu_kafkas"
    if lat < 36 and -20 <= lon < 34 and lat > -35:
        return "afrika_levant" if lon > 25 and lat > 28 else "afrika"
    if 12 <= lat <= 37 and 34 <= lon <= 60:
        return "ortadogu"
    if 25 <= lat <= 50 and 44 <= lon <= 75:
        return "iran_orta_asya"
    if lat >= 0 and 60 <= lon <= 100:
        return "hint"
    if lon >= 95 and lat > -15:
        return "dogu_gd_asya"
    if lon < -30:
        return "amerika"
    return "diger"


Y = girdi.yukle(sessiz=True)
mevcut = [(N(re.sub(r"\s*\(.*?\)", "", y["ad"])), (y["lat"], y["lon"]), y["ad"]) for y in Y]
mevcut_tum = {}
for y in Y:
    for ad in [y["ad"], re.sub(r"\s*\(.*?\)", "", y["ad"])] + re.findall(r"\(([^)]*)\)", y["ad"]):
        mevcut_tum.setdefault(N(ad), []).append((y["lat"], y["lon"], y["ad"]))

HARIC = {h["ad"]: h["neden"] for h in json.load(open(os.path.join(KL, "HARIC.json"), encoding="utf-8"))["haric"]}
ALIAS_TEYIT = {}      # ad -> kaynak metni (yalnız gerçekten TDV ile teyit edilenler)
for f in glob.glob(os.path.join(KL, "parti_8*_sonuc.json")):
    for r in json.load(open(f, encoding="utf-8")).get("sonuclar", []):
        m = (r.get("kaynak") or "") + " " + (r.get("not") or "")
        if r.get("alias_teyit") is True and "TDV" in (r.get("kaynak") or "") and not re.search("kaynaksız|bilgi tabanı|genel bilgi|okunmadı|özet", m, re.I) and r.get("gövde_okundu", True):
            ALIAS_TEYIT[r["ad"]] = r["kaynak"]
aday, rapor = [], {"alias_teyitsiz_yazilmadi": [],"mukerrer": [], "yazilmadi": collections.Counter(), "yazilan": 0}
gorulen = set()
for f in sorted(glob.glob(os.path.join(KL, "parti_*_sonuc.json")), key=lambda p: (os.path.basename(p) == "parti_51_sonuc.json", os.path.basename(p) != "parti_50_sonuc.json", p)):   # Natural Earth (51) son çare: sona
    for r in json.load(open(f, encoding="utf-8")).get("sonuclar", []):
        bolge_mi = r.get("durum") in ("bolge_temsilci", "bolge_nokta")
        if (r.get("durum") != "cift_tanik" and not bolge_mi) or r.get("lat") is None:
            rapor["yazilmadi"][r.get("durum", "?")] += 1
            continue
        if re.search(r"BAĞIMSIZLIK SINIRLI|aynı kaynak ailesi|bağımsız olmayabilir|aynı alttan", (r.get("not") or "") + " " + json.dumps(r.get("tanik", []), ensure_ascii=False), re.I):
            rapor.setdefault("bagimsizlik_sinirli", []).append({"ad": r["ad"], "lat": r.get("lat"), "lon": r.get("lon"), "dosya": os.path.basename(f), "not": (r.get("not") or "")[:300]})
            continue
        if r["ad"] in HARIC:
            rapor.setdefault("haric", []).append({"ad": r["ad"], "neden": HARIC[r["ad"]]})
            continue
        if r.get("alias"):
            if r["ad"] in ALIAS_TEYIT:
                r["not"] = (r.get("not") or "").replace("alias_teyit:false — TDV başlığı teyidi bekliyor", "alias_teyit:true — " + ALIAS_TEYIT[r["ad"]])
            else:
                rapor["alias_teyitsiz_yazilmadi"].append(r["ad"])
                continue
        pt = (float(r["lat"]), float(r["lon"]))
        adlar_aday = [r["ad"]] + [r.get("esanlam_modern") or ""] + list(r.get("eski_adlar") or [])
        ceki = None
        for a in adlar_aday:
            for (la, lo, mad) in mevcut_tum.get(N(a), []):
                if km(pt, (la, lo)) <= 30:     # aynı ad 30 km içinde = aynı yer
                    ceki = (mad, round(km(pt, (la, lo)), 1), "ad")
        if not ceki and not bolge_mi:
            for n, p, mad in mevcut:
                if km(pt, p) <= 3:
                    ceki = (mad, round(km(pt, p), 2), "3km")
                    break
        if not ceki and not bolge_mi:
            for a in aday:
                if a.get("tur") != "bolge" and a.get("lat") is not None and km(pt, (float(a["lat"]), float(a["lon"]))) <= 3:
                    ceki = (a["ad"], round(km(pt, (float(a["lat"]), float(a["lon"]))), 2), "parti-3km")
                    break
        if ceki or N(r["ad"]) in gorulen:
            rapor["mukerrer"].append({"ad": r["ad"], "atlas": ceki[0] if ceki else "(parti içi)", "km": ceki[1] if ceki else 0, "neden": ceki[2] if ceki else "parti"})
            continue
        gorulen.add(N(r["ad"]))
        r["_dosya"] = os.path.basename(f)
        if bolge_mi:
            r["tur"] = "bolge"
            r["konum_kesinligi"] = "bolge"
        aday.append(r)

def jstr(s):
    return json.dumps(s, ensure_ascii=False)

SAHIP = {}
_sy = os.path.join(KL, "SAHIP-YAZILAN-1021.json")
if os.path.exists(_sy):
    SAHIP = json.load(open(_sy, encoding="utf-8")).get("yazilan", {})
gruplar = collections.defaultdict(list)
for r in aday:
    gruplar[bolge_kutusu(float(r["lat"]), float(r["lon"]))].append(r)
for ad in sorted(gruplar):
    os.makedirs(os.path.join(KL, "aday"), exist_ok=True)
    yol = os.path.join(KL, "aday", "yerlesimler_once1281_yt_%s.js" % ad)     # data/ DEĞİL: bağlanmayan data dosyası denetle_yayin'de 'yetim' ihlali
    satir = ["// yerlesimler_once1281_yt_%s.js — 1281 öncesi kronoloji maddelerinde geçen yerlerin nokta adayları (YER-TANIMA, Ekim 2026)" % ad,
             "// Kaynak: denetim/yer-arastirma/parti_*_sonuc.json (ÇİFT TANIK şartı) · üreten: denetim/ARAC-YER-URET-1021.py",
             "// s: yalnız KAYNAKLI başkentlik dönemleri (denetim/ARAC-YER-SAHIP-YAZ-1021.py); aralar __BOSLUK__ beyanı; kur:/bit: = ilk/son başkentlik dönemi.",
             "// Sahibi bulunamayan yerler: s:[] + bos:\"veri-yok\" (savaşta TARAF olmak sahiplik sayılmadı). Sınır kaymaları için ±30 gün madde işi VERI-MS1-1281'de.",
             "// Mükerrer tarama: normalleştirilmiş ad (30 km) + 3 km. BAĞLAMA YAPILMADI (girdi_listesi/index.html'e dokunulmadı).",
             "window.YERLESIMLER_ONCE1281_YT_%s = [" % ad.upper(), ""]
    for r in gruplar[ad]:
        tan = " · ".join("%s %s (%s, %s)" % (t.get("kaynak", ""), t.get("url_veya_atif", ""), t.get("lat"), t.get("lon")) for t in r.get("tanik", []))
        kes = {"kesin": "yil", "yaklasik": "belirsiz"}.get(r.get("konum_kesinligi"), "belirsiz")
        modern = re.split(r"[(,/;]", r.get("esanlam_modern") or "")[0].strip()
        ad_yaz = r["ad"] if (not modern or N(modern) == N(r["ad"]) or N(modern) in N(r["ad"]) or N(r["ad"]) in N(modern)) else "%s (%s)" % (r["ad"], modern)
        ad_yaz = re.sub(r"\s+", " ", ad_yaz)
        per = SAHIP.get(ad_yaz)
        if per and any(p.get("t") is None for p in per):
            per = None
        if per:
            parcalar = []
            for j, p in enumerate(per):
                if j and p["f"] > per[j - 1]["t"]:
                    parcalar.append('{f:%s,t:%s,d:"__BOSLUK__",kaynak:%s}' % (jstr(per[j - 1]["t"]), jstr(p["f"]), jstr("BEYAN: iki başkentlik dönemi arası; bu aralıkta yerin sahibi kaynakta bulunamadı (YER-TANIMA, 22 Ekim 2026)")))
                parcalar.append('{f:%s,t:%s,d:%s,kaynak:%s}' % (jstr(p["f"]), jstr(p["t"]), jstr(p["d"]), jstr("BAŞKENT: yer bu devletin başkenti; " + p["kaynak"])))
            sahip_s = "s:[%s], d:[], kur:%s, bit:%s," % (",\n    ".join(parcalar), jstr(per[0]["f"]), jstr(per[-1]["t"]))
        else:
            sahip_s = 's:[], d:[], bos:"veri-yok",'
        satir.append('{ ad:%s, tur:%s, lat:%s, lon:%s, g:0, k:0, %s' % (jstr(ad_yaz), jstr(r.get("tur") or "sehir"), r["lat"], r["lon"], sahip_s))
        if r.get("konum_kesinligi") in ("yaklasik", "bolge"):
            satir.append('  konum_kesinlik:"%s",' % r["konum_kesinligi"])
        satir.append('  not:%s,' % jstr("YER-TANIMA: kronolojide %s adıyla geçer; eski adlar: %s; modern: %s (%s). %s" % (r["ad"], ", ".join(r.get("eski_adlar") or []) or "-", r.get("esanlam_modern") or "-", r.get("ulke_modern") or "-", r.get("not") or "")))
        satir.append('  kaynak:%s },' % jstr(("TEMSİLCİ NOKTA (çift tanık değil, bölge): " if r.get("konum_kesinligi") == "bolge" else "ÇİFT TANIK: ") + tan + " · denetim/yer-arastirma/" + r["_dosya"]))
    satir.append("];")
    open(yol, "w", encoding="utf-8").write("\n".join(satir) + "\n")
    rapor["yazilan"] += len(gruplar[ad])
    print(yol, len(gruplar[ad]))
rapor["yazilmadi"] = dict(rapor["yazilmadi"])
json.dump(rapor, open(os.path.join(KL, "URET-RAPOR.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print(json.dumps({"yazilan": rapor["yazilan"], "mukerrer": len(rapor["mukerrer"]), "yazilmadi": rapor["yazilmadi"]}, ensure_ascii=False))
