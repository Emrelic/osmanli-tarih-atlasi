"""1900 şehir listesine GeoNames koordinatı bağlar, sonra atlasla 3 km eşleştirir.

Kullanım: py -I denetim/SEHIR-1900-KOORDINAT-1013/koordinat.py <cities1000.txt>
Girdi : denetim/SEHIR-1900-LISTE-1013/LISTE.tsv
Çıktı : bu klasörde LISTE-KOORD.tsv ; özet stdout'a.

GeoNames (geonames.org, CC-BY 4.0) YALNIZ koordinat bulmak içindir; atlas verisinde kaynak sayılmaz.
Seçim: aynı ülkede ad tutan yerleşimler arasından fcode sırası PPLC > PPLA > PPLA2 > PPLA3/4 > öteki,
eşitlikte ana ad (name/asciiname) eşleşmesi alternatif addan önce, sonra nüfus.
"""
import csv, math, os, re, sys, unicodedata, collections

BURASI = os.path.dirname(os.path.abspath(__file__))
KOK = os.path.normpath(os.path.join(BURASI, "..", ".."))
sys.path.insert(0, os.path.join(KOK, "arac"))
LISTE = os.path.join(KOK, "denetim", "SEHIR-1900-LISTE-1013", "LISTE.tsv")
ESIK_KM = 3.0      # CLAUDE.md mükerrer kuralı
KAYIK_KM = 15.0    # aynı adlı atlas noktası bu kadar yakınsa aynı şehir sayılır
INCELE_KM = 10.0   # farklı adlı en yakın nokta bu kadar yakınsa elle bakılır

ULKE = {
    "ABD": "US", "ABD (Amerikan Samoası)": "AS", "ABD (Guam)": "GU", "ABD (Kuzey Mariana)": "MP",
    "ABD (Porto Riko)": "PR", "ABD (Virgin Adaları)": "VI", "Afganistan": "AF", "Almanya": "DE",
    "Andorra": "AD", "Angola": "AO", "Antigua ve Barbuda": "AG", "Arjantin": "AR", "Arnavutluk": "AL",
    "Avustralya": "AU", "Avusturya": "AT", "Azerbaycan": "AZ", "BAE": "AE", "Bahamalar": "BS",
    "Bahreyn": "BH", "Bangladeş": "BD", "Barbados": "BB", "Batı Sahra": "EH", "Belarus": "BY",
    "Belize": "BZ", "Belçika": "BE", "Benin": "BJ", "Birleşik Krallık": "GB", "Bolivya": "BO",
    "Bosna-Hersek": "BA", "Botsvana": "BW", "Brezilya": "BR", "Britanya (Bermuda)": "BM",
    "Britanya (Cayman)": "KY", "Britanya (Falkland)": "FK", "Britanya (Montserrat)": "MS",
    "Britanya (Turks ve Caicos)": "TC", "Britanya (Virgin Adaları)": "VG", "Brunei": "BN",
    "Bulgaristan": "BG", "Burkina Faso": "BF", "Butan": "BT", "Cebelitarık": "GI", "Cezayir": "DZ",
    "Cibuti": "DJ", "Cook Adaları": "CK", "Curaçao (Hollanda Krallığı)": "CW", "Danimarka": "DK",
    "Dominik Cumhuriyeti": "DO", "Dominika": "DM", "Doğu Timor": "TL", "Ekvador": "EC",
    "Ekvator Ginesi": "GQ", "El Salvador": "SV", "Endonezya": "ID", "Eritre": "ER", "Ermenistan": "AM",
    "Estonya": "EE", "Estonya / Letonya": "EE LV", "Esvatini": "SZ", "Etiyopya": "ET",
    "Faroe Adaları": "FO", "Fas": "MA", "Fiji": "FJ", "Fildişi Sahili": "CI", "Filipinler": "PH",
    "Filistin": "PS", "Finlandiya": "FI", "Fransa": "FR", "Fransa (Mayotte)": "YT",
    "Fransa (Réunion)": "RE", "Gabon": "GA", "Gambiya": "GM", "Gana": "GH", "Gine": "GN",
    "Gine-Bissau": "GW", "Grenada": "GD", "Guatemala": "GT", "Guernsey": "GG", "Guyana": "GY",
    "Güney Afrika": "ZA", "Güney Kore": "KR", "Gürcistan": "GE", "Haiti": "HT", "Hindistan": "IN",
    "Hollanda": "NL", "Honduras": "HN", "Hong Kong": "HK", "Hırvatistan": "HR", "Irak": "IQ",
    "Jamaika": "JM", "Japonya": "JP", "Jersey": "JE", "Kamboçya": "KH", "Kamerun": "CM",
    "Kanada": "CA", "Karadağ": "ME", "Kazakistan": "KZ", "Kenya": "KE", "Kenya/Uganda": "KE UG",
    "Kiribati": "KI", "Kolombiya": "CO", "Kongo DC": "CD", "Kosova": "XK", "Kosta Rika": "CR",
    "Kuveyt": "KW", "Kuzey Kore": "KP", "Kuzey Makedonya": "MK", "Küba": "CU", "Kıbrıs": "CY",
    "Kırgızistan": "KG", "Laos": "LA", "Lesotho": "LS", "Letonya": "LV", "Liberya": "LR",
    "Libya": "LY", "Lihtenştayn": "LI", "Litvanya": "LT", "Lübnan": "LB", "Lüksemburg": "LU",
    "Macaristan": "HU", "Madagaskar": "MG", "Malavi": "MW", "Malezya": "MY", "Mali": "ML",
    "Malta": "MT", "Man Adası": "IM", "Marshall Adaları": "MH", "Meksika": "MX", "Mikronezya": "FM",
    "Moldova": "MD", "Moldova (Transdinyester)": "MD", "Monako": "MC", "Moritanya": "MR",
    "Morityus": "MU", "Mozambik": "MZ", "Moğolistan": "MN", "Myanmar": "MM", "Mısır": "EG",
    "Namibya": "NA", "Nepal": "NP", "Nijer": "NE", "Nijerya": "NG", "Nikaragua": "NI",
    "Norveç": "NO", "Pakistan": "PK", "Panama": "PA", "Papua Yeni Gine": "PG", "Paraguay": "PY",
    "Peru": "PE", "Polonya": "PL", "Portekiz": "PT", "Romanya": "RO", "Rusya": "RU", "Samoa": "WS",
    "San Marino": "SM", "Senegal": "SN", "Seyşeller": "SC", "Sierra Leone": "SL", "Singapur": "SG",
    "Slovakya": "SK", "Slovenya": "SI", "Solomon Adaları": "SB", "Somali": "SO",
    "Somali (Somaliland)": "SO", "Sri Lanka": "LK", "St Helena (BK)": "SH", "St Kitts ve Nevis": "KN",
    "St Lucia": "LC", "St Vincent ve Grenadinler": "VC", "Sudan": "SD", "Surinam": "SR",
    "Suriye": "SY", "Suudi Arabistan": "SA", "São Tomé ve Príncipe": "ST", "Sırbistan": "RS",
    "Tacikistan": "TJ", "Tanzanya": "TZ", "Tayland": "TH", "Tayvan": "TW", "Togo": "TG",
    "Tonga": "TO", "Trinidad ve Tobago": "TT", "Tunus": "TN", "Türkiye": "TR", "Türkmenistan": "TM",
    "Uganda": "UG", "Ukrayna": "UA", "Ukrayna (Kırım)": "UA", "Umman": "OM", "Uruguay": "UY",
    "Venezuela": "VE", "Vietnam": "VN", "Yemen": "YE", "Yeni Zelanda": "NZ", "Yeşil Burun": "CV",
    "Yunanistan": "GR", "Zambiya": "ZM", "Zimbabve": "ZW", "Çekya": "CZ", "Çin": "CN",
    "Özbekistan": "UZ", "Ürdün": "JO", "İran": "IR", "İrlanda": "IE", "İspanya": "ES",
    "İsrail": "IL", "İsrail/Filistin": "IL PS", "İsveç": "SE", "İsviçre": "CH", "İtalya": "IT",
    "İzlanda": "IS", "Şili": "CL",
}
FSIRA = {"PPLC": 0, "PPLA": 1, "PPLA2": 2, "PPLA3": 3, "PPLA4": 3, "PPLG": 3}


def norm(s):
    s = s.replace("İ", "i").replace("I", "i").replace("ı", "i")
    s = unicodedata.normalize("NFKD", s)
    s = "".join(c for c in s if not unicodedata.combining(c)).lower()
    return re.sub(r"[^a-z0-9]", "", s)


def adlar(s):
    out = []
    for p in re.split(r"[()/;,]", s or ""):
        n = norm(p)
        if len(n) >= 3 and n != "bulunamadi" and n not in out:
            out.append(n)
    return out


def km(a, b, c, d):
    r = math.radians
    x = (r(d) - r(b)) * math.cos((r(a) + r(c)) / 2)
    return 6371.0 * math.hypot(x, r(c) - r(a))


def geonames_oku(yol):
    ana = collections.defaultdict(list)   # (ülke, ad) → kayıt ; ana ad
    alt = collections.defaultdict(list)   # alternatif ad
    with open(yol, encoding="utf-8") as f:
        for satir in f:
            p = satir.rstrip("\n").split("\t")
            k = {"id": p[0], "ad": p[1], "lat": float(p[4]), "lon": float(p[5]),
                 "fcode": p[7], "cc": p[8], "nufus": int(p[14] or 0)}
            anlar = {norm(p[1]), norm(p[2])}
            for n in anlar:
                if n:
                    ana[(p[8], n)].append(k)
            for a in p[3].split(","):
                n = norm(a)
                if n and n not in anlar:
                    alt[(p[8], n)].append(k)
    return ana, alt


def bul(r, ana, alt):
    ccs = ULKE.get(r["modern_ulke"], "").split()
    if not ccs:
        return None, "ulke-kodu-yok", 0
    for kaynak, isimler in (("modern", adlar(r["ad_modern"])), ("1900", adlar(r["ad_1900"]))):
        for tur, dizin in (("ana", ana), ("alt", alt)):
            aday = [k for cc in ccs for n in isimler for k in dizin.get((cc, n), [])]
            if aday:
                aday = list({k["id"]: k for k in aday}.values())
                aday.sort(key=lambda k: (FSIRA.get(k["fcode"], 9), -k["nufus"]))
                return aday[0], f"{kaynak}-{tur}", len(aday)
    return None, "bulunamadi", 0


def main():
    sys.stdout.reconfigure(encoding="utf-8")   # -I ortam değişkenini (PYTHONIOENCODING) yok sayar
    ana, alt = geonames_oku(sys.argv[1])
    import girdi
    os.chdir(KOK)
    Y = girdi.yukle(sessiz=True)

    with open(LISTE, encoding="utf-8") as f:
        S = list(csv.DictReader(f, delimiter="\t"))
    yol = collections.Counter()
    sinif = collections.Counter()
    for r in S:
        k, nasil, n = bul(r, ana, alt)
        yol[nasil] += 1
        r.update(lat="", lon="", geonames_id="", geonames_ad="", fcode="", aday_sayisi=str(n),
                 koord_yolu=nasil, atlas_en_yakin="", atlas_km="", eslesme="")
        if not k:
            r["eslesme"] = "koordinat-yok"
            sinif[r["eslesme"]] += 1
            continue
        r.update(lat=f"{k['lat']:.4f}", lon=f"{k['lon']:.4f}", geonames_id=k["id"],
                 geonames_ad=k["ad"], fcode=k["fcode"])
        y = min(Y, key=lambda y: km(k["lat"], k["lon"], y["lat"], y["lon"]))
        d = km(k["lat"], k["lon"], y["lat"], y["lon"])
        r["atlas_en_yakin"], r["atlas_km"] = y["ad"], f"{d:.1f}"
        # aynı adı taşıyan atlas noktalarına uzaklık (adaş başka kıtada olabilir)
        ayni = [y2 for y2 in Y if y2["ad"] in set(filter(None, r.get("atlas_aday", "").split(" | ")))]
        d_ad = min((km(k["lat"], k["lon"], y2["lat"], y2["lon"]) for y2 in ayni), default=None)
        if d <= ESIK_KM:
            r["eslesme"] = "atlasta"
        elif d_ad is not None and d_ad <= KAYIK_KM:
            r["eslesme"] = "atlasta-kayik"     # aynı şehir; atlas noktası ile GeoNames merkezi 3-15 km ayrık
            r["atlas_km"] = f"{d_ad:.1f}"
        elif d <= INCELE_KM:
            r["eslesme"] = "yakin-incele"      # 3-10 km'de FARKLI adlı nokta: Türkçe ad/eski ad olabilir
        else:
            r["eslesme"] = "atlasta-yok"
        sinif[r["eslesme"]] += 1

    alanlar = list(S[0].keys())
    with open(os.path.join(BURASI, "LISTE-KOORD.tsv"), "w", encoding="utf-8", newline="") as f:
        w = csv.DictWriter(f, fieldnames=alanlar, delimiter="\t")
        w.writeheader()
        w.writerows(S)

    print("koordinat yolu:", dict(yol))
    print("eşleşme:", dict(sinif))
    tab = collections.defaultdict(collections.Counter)
    for r in S:
        tab[(r["bolge"], r["kat"])][r["eslesme"]] += 1
    SIN = ["atlasta", "atlasta-kayik", "yakin-incele", "atlasta-yok", "koordinat-yok"]
    print("bolge kat |", " ".join(SIN))
    for key in sorted(tab):
        print(*key, "|", *(tab[key][s] for s in SIN))
    for s in ("yakin-incele",):
        print(f"örnek {s}:")
        for r in [r for r in S if r["eslesme"] == s][:25]:
            print(f"  {r['ad_modern']} [{r['modern_ulke']}] → en yakın atlas {r['atlas_en_yakin']} {r['atlas_km']} km")
    print("aday_sayisi > 1 (GeoNames'te ülke içinde adaş):",
          sum(1 for r in S if int(r["aday_sayisi"] or 0) > 1))


if __name__ == "__main__":
    main()
