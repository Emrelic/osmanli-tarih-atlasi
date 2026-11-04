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


def _al(url):
    try:
        with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=40) as r:
            return r.read().decode("utf-8", "replace")
    except Exception as e:
        return "HATA %s" % e
    finally:
        time.sleep(1.0)


def pleiades(ad, ref):
    """Pleiades (pleiades.stoa.org) arama RSS'i → ilk yer → /json reprPoint. Ad ve parantez içi eş adlar sırayla denenir.
    Referans (maddenin atlas yeri) varsa sonuç ≤ 400 km olmalı; yoksa tek sonuçlu aramalar kabul edilir."""
    adaylar = [re.sub(r"\s*\(.*?\)", "", ad).strip()]
    m = re.search(r"\(([^)]*)\)", ad)
    if m:
        adaylar += [p.strip() for p in re.split(r"[,;/]", m.group(1)) if len(p.strip()) >= 3]
    for q in adaylar:
        rss = _al("https://pleiades.stoa.org/search_rss?" + urllib.parse.urlencode(dict(SearchableText=q, portal_type="Place")))
        bloklar = re.findall(r'(<item rdf:about="(https://pleiades\.stoa\.org/places/\d+)">\s*<title>([^<]*)</title>.*?</item>)', rss, re.S)
        # bölge, dağ, ırmak vb. yerleşim olmayan kayıtları ele; yerleşim (settlement) etiketlileri öne al
        yerler = []
        for blok, url, baslik in bloklar:
            if re.search(r"\((region|mountain|river|island|islands|bay|cape|lake|people|province|mountains|sea)\)|\bPr\.$|\bM\.$|\bfl\.$|"
                         r"Pentapolis", baslik):
                continue
            # başlık sorgunun kökünü taşımıyorsa (ör. 'House of Thiasus' ← Nola) yerleşimin kendisi değildir
            kq = norm(q)[:4]
            if kq and kq not in norm(baslik) and not any(norm(b).startswith(kq[:3]) for b in re.split(r"[/(),]", baslik)):
                continue
            yerler.append((url, baslik, "settlement" in blok))
        if not yerler:
            continue
        if not ref:
            es = [y for y in yerler if norm(y[1].split("/")[0]) == norm(q) and y[2]]
            if len(es) == 1:
                yerler = es
            elif len(yerler) > 1:
                return None, "Pleiades: '%s' için %d sonuç, referans yok — seçilmedi" % (q, len(yerler)), None
        yerler = [(u, b) for u, b, _ in yerler]
        for url, baslik in yerler[:5]:
            j = _al(url + "/json")
            try:
                rp = json.loads(j).get("reprPoint")
            except ValueError:
                rp = None
            if not rp:
                continue
            lat, lon = rp[1], rp[0]
            d = girdi.km(ref[0], ref[1], lat, lon) if ref else None
            if ref and d > 400:
                continue
            return (lat, lon), "Pleiades %s (%s)" % (url, baslik), d
        return None, "Pleiades: '%s' sonuçları referanstan uzak ya da noktasız" % q, None
    return None, "Pleiades sonuç yok", None


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
PLEIADES_RED = {"Ithome (Messene)": "Pleiades Tesalya'daki Ithome'u verdi; madde Messene Ithome'u (Peloponnesos)",
                "Karaburun": "Pleiades ada/burun verdi; maddedeki Karaburun belirsiz",
                "Berka": "Pleiades antik Barke'yi (Libya) verdi; madde bağlamı teyit edilmeli",
                "Hisarlık": "Pleiades Hisarlıkaya'yı verdi; Hisarlık = Troia (Çanakkale) — Pleiades 'Ilion' ile ara",
                "Kadeş": "Pleiades Celile'deki Kadasa'yı verdi; maddelerde Kadeş (Orontes, Suriye) kastediliyor olabilir",
                "Hallstatt C": "dönem adı (Hallstatt C evresi), yerleşim değil",
                # parti 4 (referanssız Pleiades sonuçları — elle denetim)
                "Buda": "Pleiades Budalia'yı (Sirmium yöresi) verdi; Buda = Budin (atlas: Aquincum-Óbuda-Pest)",
                "Buda (Matthias Kilisesi)": "Pleiades Budalia'yı verdi; yapı, Budin'de",
                "Belgica Prima (Ren)": "Pleiades Syrastrene'yi (Hindistan) verdi; Belgica Prima Roma eyaletidir, yerleşim değil",
                "Sapaudia (Cenevre Gölü çevresi)": "Pleiades bölge kaydı; yerleşim değil",
                "Khalkis (Euboia)": "Pleiades Makedonya'daki Euboia/Dausara'yı verdi; Euboia Khalkis'i = Eğriboz",
                "Elea (Lucania)": "Pleiades Epiros'taki Elea'yı verdi; Lucania Elea'sı = Velia (konum4_yaz.py hedefli sorgu)",
                "Korkyra": "Pleiades Korkyra Melaina'yı (Korčula) verdi; madde Korint kolonisi Korkyra = Korfu",
                "Kuleli Burgaz (Pythion)": "Pleiades Tesalya'daki Pythion'u verdi; Kuleli Burgaz Trakya'da, Dimetoka yöresi kalesi",
                "Kalûgerân (Călugăreni)": "Pleiades Erdel'deki Călugăreni'yi verdi; 1595 savaşı Eflak'ta (Giurgiu yöresi)",
                "Akropolis": "Pleiades Klazomenai akropolisini verdi; madde Atina Akropolisi (yapı)",
                "Uşi (Ouchy)": "Pleiades Usil(l)a'yı (Tunus) verdi; Ouchy = Lozan'ın liman semti",
                # parti 5
                "Berka (Cyrenaica)": "Pleiades Creta et Cyrene eyaletini verdi; bölge adı, yerleşim değil",
                "Talas": "Pleiades Talashkan tepe'yi (Baktria) verdi; Talas = Taraz (Kazakistan)"}
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
    ko, tur, d = pleiades(x["ad"], ref)
    adla, yakin = mukerrer(x["ad"], ko)
    o = x["ornek"][0]
    guven = ("PLEİADES, REFERANSLI (%s, %d km)" % (refad, d)) if (ko and ref) else ("PLEİADES, TEK SONUÇ" if ko else "koordinat yok")
    ONCE[x["ad"]] = dict(sira=i, ad=x["ad"], sayi=x["sayi"], koordinat=ko, osm=tur, koordinat_guven=guven, mukerrer_ad=adla,
                         mukerrer_3km=yakin,
                         madde_t=o["t"], madde=o["b"], taraflar=o["taraflar"], madde_kaynak=o["kaynak"],
                         maddeler=["%s — %s" % (m["t"], m["b"][:70]) for m in x["ornek"]])
    print(i, x["ad"], ko, tur, "mük:", adla or yakin or "—")
for ad, r in ONCE.items():
    r["elle"] = None
    if ad in OSM_RED:
        r["elle"] = "konum notu: " + OSM_RED[ad].replace("OSM", "OSM (dayanak değil)")
    if ad in PLEIADES_RED:
        r["koordinat"], r["koordinat_guven"], r["elle"] = None, "koordinat yok", "Pleiades sonucu reddedildi: " + PLEIADES_RED[ad]
    if ad in YAZIMA:
        r["elle"] = "YAZIM'a geç → %s (yeni nokta değil)" % YAZIMA[ad]
    elif any(float(re.search(r"\(([\d.]+) km\)", m).group(1)) <= 1.0 for m in r["mukerrer_3km"]):
        r["elle"] = "YAZIM'a geç → %s (Pleiades noktası atlas kaydına ≤ 1 km — aynı yer)" % r["mukerrer_3km"][0]
L = sorted(ONCE.values(), key=lambda r: r["sira"])
json.dump(L, open(yol, "w", encoding="utf-8", newline="\n"), ensure_ascii=False, indent=1)

M = ["# EKSİK-ADAY — kronolojide geçen, atlasta olmayan yerleşimler (ilk %d)\n" % len(L),
     "Ölçen: LAB SALI · 4 Kasım 2026 · `yer_sinifla.py` → `eksik_aday.py`. Sıra: kronolojide anılma sayısı (eşitlikte madde sırası).\n",
     "- **Koordinat:** yalnız Pleiades (pleiades.stoa.org, akademik antik yer gazeteeri; yer URL'si satırda). EMRELİC kuralı: OSM "
     "dayanak değil; İslâm dünyası için TDV konumu, Çin için CHGIS, öteki bölgeler için GeoNames (beyanlı) — bu partide okunmadı. "
     "Koordinatı doğrulanmamış aday **koordinat yok** kalır (yanlış nokta eksik noktadan kötü).",
     "- **Sahip:** maddenin tarafları ve maddenin kendi kaynağı (madde zaten kronolojide → Değişmez 2 kapanır). Yerleşimin o yıldaki "
     "sahibi madde kaynağıyla teyit edilmeli (KAYNAK-GEREK).",
     "- **Mükerrer:** aynı normalleştirilmiş ad atlasta var mı / önerilen koordinatın 3 km'sinde nokta var mı.",
     "- `DUR` listesi (ırmak, bölge, aynı yerin başka dili) aday dışı bırakıldı; birleşenler tek aday.\n",
     "- **Koordinat güveni:** PLEİADES, REFERANSLI = Pleiades sonucu maddenin atlas yerine ≤ 400 km; PLEİADES, TEK SONUÇ = madde "
     "atlas yerine bağlı değil ama Pleiades araması tek yer döndürdü. Mükerrerde 3 km'de nokta çıkarsa büyük olasılıkla **aynı yer** "
     "(YAZIM'a geçmeli, yeni nokta değil).\n",
     "- **Elle not:** LAB SALI'nin OSM sonucunu bilinen bir yanlış yüzünden reddettiği ya da mükerrerle YAZIM'a geçirdiği satırlar.\n",
     "**Özet:** %d aday · Pleiades koordinatlı %d (referanslı %d) · koordinat yok %d · YAZIM'a geçmeli %d.\n" % (
         len(L), sum(1 for r in L if r["koordinat"]), sum(1 for r in L if "REFERANSLI" in str(r.get("koordinat_guven", ""))),
         sum(1 for r in L if not r["koordinat"]), sum(1 for r in L if (r.get("elle") or "").startswith("YAZIM"))),
     "| # | ad | anılma | koordinat (lat, lon) | güven | koordinat kaynağı | mükerrer | elle not | madde (yıl — başlık) | taraflar | madde kaynağı |",
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
