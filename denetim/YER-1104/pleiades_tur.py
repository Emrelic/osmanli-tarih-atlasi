# -*- coding: utf-8 -*-
"""TDV-KONUM'un 50 ANTİK YERLEŞİM adayı: Pleiades koordinatı + atlasta 3 km içinde nokta → YAZIM, yoksa EKSİK.

Pleiades sorgusu: adayın Latin/İngilizce Pleiades adı (aşağıdaki tablo). Birden çok sonuçta ayırt etmek için yalnız
"beklenen bölge" kaba merkezi kullanılır (≤ 100 km) — koordinat her zaman Pleiades'in reprPoint'idir, tablo değildir.
Pleiades kapsamı dışı (Amerika, Okyanusya, Sibirya, Sahra-altı, tarihöncesi höyükler) → koordinat yok.
Çıktı: pleiades_tur.json + PLEIADES.md
"""
import os, re, sys, json, time, urllib.request, urllib.parse

KOK = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)
import girdi

BURA = os.path.dirname(os.path.abspath(__file__))
Y = [y for y in girdi.yukle(sessiz=True) if "lat" in y]
UA = {"User-Agent": "osmanli-tarih-atlasi-denetim/1.0 (egitim amacli; LAB SALI)"}

# aday: (Pleiades sorgusu, beklenen bölge kaba merkezi (lat, lon)) — merkez yalnız çok sonuçta seçim için
T = {
    "Teb": ("Diospolis Magna", (25.7, 32.6)), "Efes": ("Ephesus", (37.9, 27.3)), "Elefantin": ("Elephantine", (24.1, 32.9)),
    "Kalhu (Nimrud)": ("Kalhu", (36.1, 43.3)), "Qalʿat Sherqat": ("Assur", (35.5, 43.3)),
    "Nikopolis (Doğu Pontus)": ("Nicopolis", (40.1, 38.1)), "Sikyon": ("Sikyon", (37.98, 22.7)), "Argos": ("Argos", (37.6, 22.7)),
    "Lysimakheia (Gelibolu Yarımadası)": ("Lysimachia", (40.5, 26.7)), "Lysimakheia (Trakya kıyısı)": ("Lysimachia", (40.5, 26.7)),
    "Baktra": ("Bactra", (36.8, 66.9)), "Miletos": ("Miletus", (37.5, 27.3)), "Milet": ("Miletus", (37.5, 27.3)),
    "Halikarnassos": ("Halicarnassus", (37.0, 27.4)), "Ithome (Messene)": ("Messene", (37.2, 21.9)),
    "Teb (Boiotia)": ("Thebae", (38.3, 23.3)), "Eleusis (Attika)": ("Eleusis", (38.0, 23.5)), "Nisibis": ("Nisibis", (37.1, 41.2)),
    "Premnis (Qasr İbrim)": ("Primis", (22.6, 31.95)), "Philae": ("Philae", (24.0, 32.9)), "Beth-Shean": ("Scythopolis", (32.5, 35.5)),
    "Kadeş": ("Kadesh", (34.6, 36.5)), "Akhetaton": ("Akhetaten", (27.6, 30.9)), "Amada": ("Amada", (22.7, 32.3)),
    "Semne": ("Semna", (21.5, 30.95)), "Khalkedon": ("Chalcedon", (40.98, 29.03)), "Ragai": ("Rhagae", (35.6, 51.4)),
    "Aşkelon": ("Ascalon", (31.66, 34.55)), "Lakiş": ("Lachish", (31.56, 34.85)), "Vaşşukanni": ("Washukanni", (36.8, 40.1)),
    "Hisarlık": ("Ilion", (39.96, 26.24)), "Shillourokambos": ("Shillourokambos", (34.7, 33.2)), "Qart-ḥadašt": ("Carthago", (36.85, 10.32)),
    "Alexandreia": ("Alexandria", (31.2, 29.9)), "Yenoam": ("Yenoam", (32.7, 35.6)), "Stonehenge": ("Stonehenge", (51.18, -1.83)),
}
EK_SORGU = {"Hisarlık": ["Troia", "Ilion"], "Kadeş": ["Qadesh", "Kinza"], "Akhetaton": ["Amarna", "Akhetaton"], "Ragai": ["Rhagai", "Rhaga"],
            "Premnis (Qasr İbrim)": ["Qasr Ibrim", "Primis"], "Lysimakheia (Gelibolu Yarımadası)": ["Lysimacheia"],
            "Lysimakheia (Trakya kıyısı)": ["Lysimacheia"], "Vaşşukanni": ["Wassukanni"]}
KAPSAM_DISI = {"Pınarbaşı Höyüğü", "Dzheitun (Ahal)", "Djenné-Djenno", "Teouma", "Monte Verde", "Caral-Supe", "San Martin Tilcajete",
               "Cueva San Marcos", "Los Morteros", "Izapa", "Mulifanua (SU-17-1)", "Talepakemalai (site ECA)", "Kamgot", "Afontova Gora-2"}


def al(url):
    try:
        with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=40) as r:
            return r.read().decode("utf-8", "replace")
    except Exception as e:
        return "HATA %s" % e
    finally:
        time.sleep(1.0)


def pleiades(q, merkez):
    rss = al("https://pleiades.stoa.org/search_rss?" + urllib.parse.urlencode(dict(SearchableText=q, portal_type="Place")))
    bulunan = re.findall(r'<item rdf:about="(https://pleiades\.stoa\.org/places/\d+)">\s*<title>([^<]*)</title>', rss)
    aday = []
    for url, baslik in bulunan[:15]:
        if re.search(r"\((region|mountain|river|island|islands|bay|cape|lake|people|province|sea)\)", baslik):
            continue
        if q.lower()[:4] not in baslik.lower():
            continue
        try:
            rp = json.loads(al(url + "/json")).get("reprPoint")
        except ValueError:
            rp = None
        if rp:
            d = girdi.km(merkez[0], merkez[1], rp[1], rp[0])
            aday.append((d, rp[1], rp[0], url, baslik))
        if len(aday) >= 6:
            break
    if not aday:
        return None, "Pleiades: '%s' için uygun sonuç yok (%d ham sonuç)" % (q, len(bulunan))
    aday.sort()
    d, la, lo, url, baslik = aday[0]
    if d > 100:
        return None, "Pleiades: en yakın '%s' beklenen bölgeden %d km — seçilmedi" % (baslik, d)
    return (la, lo), "%s (%s)" % (url, baslik)


S = []
konum = json.load(open(os.path.join(BURA, "konum.json"), encoding="utf-8"))
for x in [k for k in konum if k["sinif"] == "ANTİK YERLEŞİM"]:
    ad = x["ad"]
    if ad in KAPSAM_DISI or ad not in T:
        S.append(dict(ad=ad, sonuc="EKSİK", koordinat=None, kaynak="koordinat yok — Pleiades kapsamı dışı", atlas=None, madde=x["madde"]))
        continue
    ko, kaynak = pleiades(*T[ad])
    for q in EK_SORGU.get(ad, []):
        if ko:
            break
        ko, kaynak = pleiades(q, T[ad][1])
    yakin = None
    if ko:
        en = min(((girdi.km(ko[0], ko[1], y["lat"], y["lon"]), y["ad"]) for y in Y))
        yakin = "%s (%.1f km)" % (en[1], en[0])
        sonuc = "YAZIM" if en[0] <= 3.0 else "EKSİK"
    else:
        sonuc = "EKSİK"
    S.append(dict(ad=ad, sonuc=sonuc, koordinat=ko, kaynak=kaynak, atlas=yakin, madde=x["madde"]))
    print(ad, "→", sonuc, ko, kaynak[:70], "| en yakın:", yakin)
json.dump(S, open(os.path.join(BURA, "pleiades_tur.json"), "w", encoding="utf-8", newline="\n"), ensure_ascii=False, indent=1)

y = [s for s in S if s["sonuc"] == "YAZIM"]
e_ko = [s for s in S if s["sonuc"] == "EKSİK" and s["koordinat"]]
e_yok = [s for s in S if s["sonuc"] == "EKSİK" and not s["koordinat"]]
M = ["# PLEIADES — 50 antik aday: Pleiades koordinatı ve atlas eşlemesi\n",
     "Ölçen: LAB SALI · 4 Kasım 2026 · `pleiades_tur.py`. Kural (EMRELİC): önce Pleiades koordinatı, sonra atlasta 3 km içinde nokta → "
     "YAZIM (eşleme); yoksa EKSİK (Pleiades koordinatıyla eklenebilir).\n",
     "**Özet:** YAZIM %d · EKSİK koordinatlı %d · EKSİK koordinatsız %d.\n" % (len(y), len(e_ko), len(e_yok)),
     "## YAZIM — atlasta zaten var (eşleme: kronolojideki ad → atlas kaydı)\n",
     "| kronolojideki ad | atlas kaydı (mesafe) | Pleiades | madde |", "|---|---|---|---|"]
M += ["| %s | %s | %s | %s |" % (s["ad"], s["atlas"], s["kaynak"], s["madde"][:60].replace("|", "/")) for s in y]
M += ["\n## EKSİK — Pleiades koordinatlı (KASA ekleyebilir; sahip madde kaynağıyla)\n",
      "| ad | koordinat | Pleiades | en yakın atlas noktası | madde |", "|---|---|---|---|---|"]
M += ["| %s | %.5f, %.5f | %s | %s | %s |" % (s["ad"], s["koordinat"][0], s["koordinat"][1], s["kaynak"], s["atlas"],
                                            s["madde"][:60].replace("|", "/")) for s in e_ko]
M += ["\n## EKSİK — koordinat yok\n", "| ad | neden | madde |", "|---|---|---|"]
M += ["| %s | %s | %s |" % (s["ad"], s["kaynak"], s["madde"][:60].replace("|", "/")) for s in e_yok]
open(os.path.join(BURA, "PLEIADES.md"), "w", encoding="utf-8", newline="\n").write("\n".join(M))
print("YAZIM", len(y), "EKSİK koordinatlı", len(e_ko), "koordinatsız", len(e_yok))
