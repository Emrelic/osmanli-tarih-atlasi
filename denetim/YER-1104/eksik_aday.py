# -*- coding: utf-8 -*-
"""siniflar.json'daki EKSİK adlardan ilk N gerçek yerleşim adayı: koordinat (OSM Nominatim), mükerrer (ad + 3 km), maddenin tarafları.

Kullanım: py denetim/YER-1104/eksik_aday.py BAS SON   (ör. 0 50) → eksik_aday.json'a ekler (var olanı korur), EKSIK-ADAY.md'yi yazar.
Koordinat: OpenStreetMap Nominatim (https://nominatim.openstreetmap.org, kullanım kuralı: ≤ 1 istek/sn, kimlikli User-Agent).
  OSM bir gazeteerdir, tarih kaynağı değil: koordinat ÖNERİDİR, KASA haritada doğrular (özellikle antik yerlerde aynı adlı
  modern yer çıkabilir — sonuç türü (class/type) ve ülke satırda yazılı).
Sahip: maddenin `taraflar`/`devlet` alanı ve maddenin kendi `kaynak`ı — atlasın o yıldaki komşu sahibi DEĞİL. Teyit KAYNAK-GEREK.
"""
import os, re, sys, json, time, math, urllib.request, urllib.parse, collections

KOK = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)
import girdi, denetle

BURA = os.path.dirname(os.path.abspath(__file__))
norm = denetle._2s_norm
Y = [y for y in girdi.yukle(sessiz=True) if "lat" in y]
K = json.load(open(os.path.join(BURA, "siniflar.json"), encoding="utf-8"))
DUR = {norm(x) for x in (
    "Şattülarab", "Şattülarap", "Cebel-i Lübnan", "İçel", "Şarkî Ürdün", "Timsah gölü", "Alpler (Po ovası)", "Ebro (Hispania)",
    "Bosphorus", "Hydaspes (Jhelum)", "Hyphasis (Beas) nehri", "Isonzo", "Mısır'ın tamamı", "Orta Mısır", "İyonya", "Halys (Kızılırmak)",
    "Aras", "İsrail", "Galile", "Gilead", "Hindukuş-İndus", "kuzey İsrail", "orta Mezopotamya", "Sümer şehirleri", "Sümer (Uruk çevresi)",
    "Arzava (Batı Anadolu)", "Tabal (Anadolu)", "Yehuda (Kenan)", "İsrail-Yehuda şehirleri (Kenan)", "Parthava (Horasan)",
    "Memphis merkezli devletin Mısır geneline hâkimiyeti", "Babil yakınları", "Teutoburg Ormanı (Germania)", "Toxandria (Aşağı Ren)",
    "Ren (Mainz çevresi)", "Arvernia (Auvergne)", "Aegates (Egadi Adaları)", "Siwa Vahası (Libya Çölü)", "Mendes ağzı (Delta)",
    "Fayrouz-Şapur (Fırat)", "Kuk Swamp", "Zsitva suyu ağzı", "Margus (Tuna)", "Sikayauvati (Medya)", "Misiche", "Lade",
    "Samos (Augustus'un kış karargâhı)", "Pampa de las Hamacas", "Kos", "Hagmatāna", "Ecbatana", "Bābili", "Babilim", "Agade (Akad)",
    "Agade (Sargonic period)", "Akkade", "Urim", "Unug", "ʿUbaid", "Kalhu", "Teb (Waset)", "Teb (Waset; bugünkü Luksor-Karnak)",
    "Budin (Budapeşte)", "Budin (Buda)")}
# Not: son satırdakiler aynı yerin başka yazımı/dili — tek kayda indirilir (aşağıda BIRLES), ayrı aday sayılmaz.
BIRLES = {norm("Teb (Waset)"): "Teb", norm("Teb (Waset; bugünkü Luksor-Karnak)"): "Teb", norm("Kalhu"): "Kalhu (Nimrud)",
          norm("Budin (Buda)"): "Budin", norm("Budin (Budapeşte)"): "Budin", norm("Ecbatana"): "Hemedan (YAZIM)",
          norm("Hagmatāna"): "Hemedan (YAZIM)"}

UA = {"User-Agent": "osmanli-tarih-atlasi-denetim/1.0 (egitim amacli; LAB SALI oturumu)"}


KOTU_TUR = {"shop", "amenity", "highway", "railway", "information", "tourism", "aeroway", "building", "office", "leisure", "craft"}
YADI = {y["ad"]: y for y in Y}


def referans(x):
    """Maddenin yer_id'si ya da maddede anılan atlas yerleşimi → (lat, lon); yoksa None."""
    for o in x["ornek"]:
        y = YADI.get(o.get("yer_id") or "")
        if y:
            return (y["lat"], y["lon"]), y["ad"]
    return None, None


def osm(ad, ref):
    q = re.sub(r"\s*\(.*?\)", "", ad).strip() or ad
    url = "https://nominatim.openstreetmap.org/search?" + urllib.parse.urlencode(dict(q=q, format="json", limit=10, addressdetails=1))
    try:
        with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=30) as r:
            j = json.loads(r.read().decode("utf-8"))
    except Exception as e:
        return None, "HATA %s" % e, None
    finally:
        time.sleep(1.2)
    j = [x for x in j if x.get("class") not in KOTU_TUR] or []
    if not j:
        return None, "OSM sonuç yok (uygun tür)", None
    if ref:
        j.sort(key=lambda x: girdi.km(ref[0], ref[1], float(x["lat"]), float(x["lon"])))
        x = j[0]
        d = girdi.km(ref[0], ref[1], float(x["lat"]), float(x["lon"]))
        if d > 600:
            return None, "OSM adayı maddenin yerinden %d km uzak — reddedildi" % d, None
    else:
        x = j[0]
        d = None
    return ((float(x["lat"]), float(x["lon"])), "%s/%s · %s" % (x.get("class"), x.get("type"), (x.get("address") or {}).get("country", "?")),
            d)


def mukerrer(ad, ko):
    k = norm(re.split(r"\s*\(", ad)[0])
    adla = [y["ad"] for y in Y if norm(re.split(r"\s*\(", y["ad"])[0]) == k]
    yakin = []
    if ko:
        yakin = ["%s (%.1f km)" % (y["ad"], girdi.km(ko[0], ko[1], y["lat"], y["lon"])) for y in Y
                 if girdi.km(ko[0], ko[1], y["lat"], y["lon"]) <= 3.0]
    return adla, yakin


# Elle denetim (LAB SALI): OSM sonucunun bilinen yanlışları — koordinat reddedilir, KASA kaynakla koyar.
OSM_RED = {
    "Kaneş (Kültepe)": "OSM Slovakya'da bir yer verdi; Kaneş Kayseri yakını Kültepe'dir",
    "Çamurlu": "OSM Türkiye'de köy verdi; 1413 Çamurlu Savaşı Bulgaristan'da (Samokov yakını)",
    "Dumlupınar": "OSM bir semt verdi; Dumlupınar Kütahya'dadır",
    "Kalhu (Nimrud)": "OSM Nijerya'da köy verdi; Nimrud Irak'ta, Musul güneyi",
    "Suda": "OSM Sudan verdi; maddedeki Suda Girit'teki Suda Körfezi/kalesidir",
    "Bucaş": "OSM Filipinler'de ada verdi; yer belirsiz — madde metnine bak",
    "Alesia (Burgonya)": "OSM ABD'de mezra verdi; Alesia Fransa'da (Alise-Sainte-Reine)",
    "Nikopolis (Doğu Pontus)": "OSM Ukrayna'da Nikopol verdi; Pontus Nikopolisi Sivas-Suşehri/Koyulhisar yöresidir",
    "Mercidabık": "OSM Kilis'te bir yer verdi; Mercidabık Halep kuzeyi Dâbık'tır (Suriye)",
    "Karlofça": "OSM Hırvatistan'da Karlovac verdi; Karlofça Antlaşması Sremski Karlovci'dir (Sırbistan)",
    "Nemrut": "OSM Nemrut yanardağını verdi; maddedeki Nemrut belirsiz (Adıyaman Nemrut Dağı ya da Kalhu) — madde metnine bak",
    "Tongatapu": "ada (bölge), yerleşim değil",
}
YAZIMA = {"Pelusium": "Feremâ", "Ix-Xagħra": "Xagħra (Brochtorff Çemberi)", "Hüfûf": "Lahsa", "Cirta (Konstantine)": "Konstantin",
          "Karkemiş": "Cerablus (yakın ama ayrı höyük — KASA karar)"}

bas, son = int(sys.argv[1]), int(sys.argv[2])
E = [x for x in K if x["sinif"] == "EKSİK" and norm(x["ad"]) not in DUR]
yol = os.path.join(BURA, "eksik_aday.json")
ONCE = {x["ad"]: x for x in json.load(open(yol, encoding="utf-8"))} if os.path.exists(yol) else {}
for i, x in enumerate(E[bas:son], bas + 1):
    if x["ad"] in ONCE:
        continue
    ref, refad = referans(x)
    ko, tur, d = osm(x["ad"], ref)
    adla, yakin = mukerrer(x["ad"], ko)
    o = x["ornek"][0]
    guven = ("REFERANSLI (%s, %d km)" % (refad, d)) if (ko and ref) else ("REFERANSSIZ — DOĞRULA" if ko else "—")
    ONCE[x["ad"]] = dict(sira=i, ad=x["ad"], sayi=x["sayi"], koordinat=ko, osm=tur, koordinat_guven=guven, mukerrer_ad=adla,
                         mukerrer_3km=yakin,
                         madde_t=o["t"], madde=o["b"], taraflar=o["taraflar"], madde_kaynak=o["kaynak"],
                         maddeler=["%s — %s" % (m["t"], m["b"][:70]) for m in x["ornek"]])
    print(i, x["ad"], ko, tur, "mük:", adla or yakin or "—")
for ad, r in ONCE.items():
    r["elle"] = None
    if ad in OSM_RED:
        r["koordinat"], r["koordinat_guven"], r["elle"] = None, "OSM REDDEDİLDİ", OSM_RED[ad]
    if ad in YAZIMA:
        r["elle"] = "YAZIM'a geç → %s (yeni nokta değil)" % YAZIMA[ad]
L = sorted(ONCE.values(), key=lambda r: r["sira"])
json.dump(L, open(yol, "w", encoding="utf-8", newline="\n"), ensure_ascii=False, indent=1)

M = ["# EKSİK-ADAY — kronolojide geçen, atlasta olmayan yerleşimler (ilk %d)\n" % len(L),
     "Ölçen: LAB SALI · 4 Kasım 2026 · `yer_sinifla.py` → `eksik_aday.py`. Sıra: kronolojide anılma sayısı (eşitlikte madde sırası).\n",
     "- **Koordinat:** OpenStreetMap Nominatim önerisi (OSM sınıf/tür ve ülke yazılı). Tarih kaynağı değildir; antik yerlerde aynı adlı "
     "modern yer çıkabilir → KASA haritada doğrular, gerekirse Pleiades/TIB/akademik atlasla düzeltir.",
     "- **Sahip:** maddenin tarafları ve maddenin kendi kaynağı (madde zaten kronolojide → Değişmez 2 kapanır). Yerleşimin o yıldaki "
     "sahibi madde kaynağıyla teyit edilmeli (KAYNAK-GEREK).",
     "- **Mükerrer:** aynı normalleştirilmiş ad atlasta var mı / önerilen koordinatın 3 km'sinde nokta var mı.",
     "- `DUR` listesi (ırmak, bölge, aynı yerin başka dili) aday dışı bırakıldı; birleşenler tek aday.\n",
     "- **Koordinat güveni:** REFERANSLI = OSM'in 10 sonucundan maddenin yer_id'sine (atlas yerleşimi) en yakını, ≤ 600 km; "
     "REFERANSSIZ = maddenin atlas yeri yok, ilk uygun OSM sonucu — mutlaka doğrula. Mükerrerde 3 km'de nokta çıkarsa büyük olasılıkla "
     "**aynı yer** (YAZIM sınıfına geçmeli, yeni nokta değil).\n",
     "- **Elle not:** LAB SALI'nin OSM sonucunu bilinen bir yanlış yüzünden reddettiği ya da mükerrerle YAZIM'a geçirdiği satırlar.\n",
     "**Özet:** %d aday · koordinatlı %d (referanslı %d) · OSM reddedildi/sonuç yok %d · YAZIM'a geçmeli %d.\n" % (
         len(L), sum(1 for r in L if r["koordinat"]), sum(1 for r in L if str(r.get("koordinat_guven", "")).startswith("REFERANSLI")),
         sum(1 for r in L if not r["koordinat"]), sum(1 for r in L if (r.get("elle") or "").startswith("YAZIM"))),
     "| # | ad | anılma | önerilen koordinat (OSM) | güven | OSM türü | mükerrer | elle not | madde (yıl — başlık) | taraflar | madde kaynağı |",
     "|---|---|---|---|---|---|---|---|---|---|---|"]
for r in L:
    ko = "%.4f, %.4f" % tuple(r["koordinat"]) if r["koordinat"] else "—"
    mk = "; ".join(r["mukerrer_ad"] + r["mukerrer_3km"]) or "yok"
    M.append("| %d | %s | %d | %s | %s | %s | %s | %s | %s — %s | %s | %s |" % (
        r["sira"], r["ad"], r["sayi"], ko, r.get("koordinat_guven", "—"), r["osm"], mk, r.get("elle") or "—", r["madde_t"],
        r["madde"][:70].replace("|", "/"),
        str(r["taraflar"]).replace("|", "/")[:60], r["madde_kaynak"][:90].replace("|", "/")))
open(os.path.join(BURA, "EKSIK-ADAY.md"), "w", encoding="utf-8", newline="\n").write("\n".join(M))
print("aday", len(L))
