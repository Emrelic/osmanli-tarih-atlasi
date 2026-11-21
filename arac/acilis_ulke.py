# ACILIS-ULKE-1119 — ziyaretçinin ülkesi → dil sırası + millet kataloğu + komşular.
#   py arac/acilis_ulke.py         → data/acilis_ulke.js (VERİ bloğu; kurucu IIFE elle yazılmış)
# Emre, 19 Kas 2026: "site hangi devletten açıldıysa o devletin dili olsun; dili yoksa en yakın
# dil (eski Sovyet ülkeleri → Rusça, Cezayir → Arapça + Fransızca, Güney Afrika → İngilizce);
# o milletin 10 kişi + 10 simgesi önce fırlasın, komşu/rakiplerinden 20 görsel, kalanı dünya."
#
# Ülke tespiti js/acilis.js ile AYNI kaynaktan: data/acilis_tablosu.js ACILIS_SAAT_DILIMI
# (IANA saat dilimi → ISO2) ve ACILIS_DIL (dil etiketi → ISO2). Bu betik onları KOPYALAR —
# perde sayfanın en başında çalışır, acilis_tablosu.js ise sayfanın sonunda yüklenir.
import os, re, json, sys
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CIKTI = os.path.join(KOK, "data", "acilis_ulke.js")
TABLO = os.path.join(KOK, "data", "acilis_tablosu.js")
MDIR = os.path.join(KOK, "data", "acilis_m")          # millet paketleri (arac/acilis_millet.py)

# ── DİL: ülke → sitenin dillerinden tercih sırası (ilk VAR olan seçilir) ─────────────────
# Sitenin dilleri: data/ceviri_dizin.js (tr en ar es fr ru zh hi pt de ja).
DIL_GRUP = {
    ("tr",): "TR",
    ("ru", "tr"): "AZ KZ UZ TM KG",                    # Türk dilli eski Sovyet (Emre'nin örneği)
    ("ru", "en"): "RU BY MD AM TJ",                    # öteki eski Sovyet
    ("en", "ru"): "UA GE EE LV LT",                    # Rusçanın siyasî yükü ağır olanlar: önce İngilizce
    ("ar",): "SA AE QA KW BH OM YE IQ SY JO LB PS EG SD LY",
    ("ar", "fr"): "DZ MA TN MR",                       # Mağrip (Emre'nin örneği: Cezayir)
    ("fr", "ar"): "KM DJ TD",
    ("fr",): "FR MC BE LU SN CI ML BF NE CM GA CG CD CF BJ TG GN MG HT RW BI",
    ("es", "en"): "ES MX AR BO CL CO CR CU DO EC SV GT HN NI PA PY PE UY VE GQ PR",
    ("pt",): "PT BR AO MZ CV GW ST TL",
    ("de",): "DE AT CH LI",
    ("zh", "en"): "CN TW HK MO SG",
    ("ja",): "JP",
    ("hi", "en"): "IN NP",
    ("en", "tr"): "CY BA AL XK MK",                    # Osmanlı mirası güçlü Balkan/Kıbrıs
    ("bg", "en"): "BG",                                # 21 Kasım 2026: Bulgarca yayında (Emre) → Bulgaristan'dan girene önce Bulgarca
}
# yukarıda olmayan ülke → İngilizce (Güney Afrika, Nijerya, ABD, İran, Pakistan, …)
VARSAYILAN_DIL = ["en"]

# ── MİLLET: ülke → katalog anahtarı (kendi kataloğu olan ülke kendisi) ───────────────────
# Kataloğu olmayan ülke yakın akrabasına bağlanır; bağı belirsizse bağlanmaz (yalnız dünya sırası).
AKRABA = {
    "AE": "SA", "QA": "SA", "KW": "SA", "BH": "SA", "OM": "SA", "YE": "SA", "JO": "SA", "LB": "SY",
    "PS": "SA", "LY": "TN", "SD": "EG", "MR": "MA", "BY": "RU", "MD": "RO", "TJ": "IR", "LU": "BE",
    "LI": "CH", "MC": "FR", "AD": "ES", "SM": "IT", "VA": "IT", "MT": "IT", "BO": "PE", "EC": "PE",
    "UY": "AR", "PY": "AR", "DO": "CU", "PR": "US", "TW": "CN", "HK": "CN", "MO": "CN", "SG": "MY",
    "NE": "ML", "BF": "ML", "GM": "SN", "GN": "SN", "CI": "GH", "TG": "GH", "BJ": "NG", "ER": "ET",
    "DJ": "ET", "SO": "ET", "TZ": "KE", "UG": "KE", "NP": "IN", "LK": "IN", "BT": "IN", "KP": "KR",
}
# Komşu / rakip milletler (Emre: "komşularına, rakiplerine dair 20 görsel")
KOMSU = {
    "TR": "GR IR RU SA AZ BG", "AZ": "TR IR RU GE", "KZ": "RU CN UZ KG MN", "UZ": "KZ TM KG IR AF",
    "TM": "UZ IR KZ AF TR", "KG": "KZ UZ CN TR", "MN": "CN RU KZ", "IR": "TR IQ AF SA AZ",
    "SA": "EG IQ IR TR SY", "EG": "SA IL SY TR", "IQ": "IR SY SA TR", "SY": "IQ TR EG SA",
    "IL": "EG SY SA", "DZ": "MA TN FR ML", "MA": "DZ ES FR PT", "TN": "DZ IT FR",
    "GB": "FR IE DE NL ES", "IE": "GB FR", "FR": "GB DE ES IT BE", "BE": "FR NL DE",
    "NL": "BE DE GB ES", "DE": "FR AT PL NL CH", "AT": "DE HU CZ IT TR", "CH": "DE FR IT AT",
    "IT": "FR AT GR ES CH", "ES": "PT FR MA IT NL", "PT": "ES BR MA", "GR": "TR IT BG CY",
    "CY": "GR TR", "RU": "UA PL DE TR CN KZ", "UA": "RU PL TR RO", "PL": "DE RU UA CZ SE",
    "HU": "AT RO RS TR CZ", "CZ": "DE AT PL HU", "RO": "HU BG UA TR RS", "BG": "TR GR RS RO",
    "RS": "BG HU TR AT", "GE": "TR RU AM IR", "AM": "GE IR TR RU", "CN": "JP KR MN RU IN",
    "JP": "CN KR US RU", "KR": "JP CN MN", "SE": "NO DK FI RU PL", "NO": "SE DK GB",
    "DK": "SE NO DE", "FI": "SE RU", "IN": "PK BD CN AF GB", "PK": "IN AF IR BD", "BD": "IN PK",
    "AF": "PK IR UZ TM", "ID": "MY NL PH TH", "VN": "CN TH FR US", "TH": "VN MY JP",
    "PH": "ES US ID JP", "MY": "ID TH GB", "US": "CA MX GB FR", "CA": "US GB FR",
    "MX": "US ES CU", "BR": "PT AR ES", "AR": "CL BR ES PE", "CO": "VE PE ES", "VE": "CO ES CU",
    "PE": "CL ES CO AR", "CL": "AR PE ES", "CU": "US ES MX", "NG": "GH GB SN", "ET": "EG KE IT",
    "ZA": "GB NL KE", "KE": "ET GB", "GH": "NG ML GB", "ML": "SN MA DZ GH", "SN": "ML FR MA",
    "AU": "GB NZ ID", "NZ": "AU GB",
}


def js_nesne(ad, s):
    """`window.<ad> = {...};` bloğunu JSON'a çevirir (anahtarlar tırnaklı)."""
    i = s.index("window.%s = " % ad) + len("window.%s = " % ad)
    j = s.index("};", i) + 1
    b = re.sub(r"//[^\n]*", "", s[i:j])
    return json.loads(b)


def main():
    s = open(TABLO, encoding="utf-8").read()
    tz = js_nesne("ACILIS_SAAT_DILIMI", s)
    dl = js_nesne("ACILIS_DIL", s)
    dil = {}
    for diller, ulkeler in DIL_GRUP.items():
        for u in ulkeler.split():
            if u in dil:
                raise SystemExit("iki dil grubunda: " + u)
            dil[u] = list(diller)
    paket = {}
    if os.path.isdir(MDIR):
        import hashlib
        for f in sorted(os.listdir(MDIR)):
            if f.endswith(".js"):
                paket[f[:-3]] = hashlib.md5(open(os.path.join(MDIR, f), "rb").read()).hexdigest()[:8]
    veri = {"tz": tz, "dilEtiket": dl, "dil": dil, "varsayilanDil": VARSAYILAN_DIL, "akraba": AKRABA,
            "komsu": {k: v.split() for k, v in KOMSU.items()}, "paket": paket}
    blok = ("/* >>> VERI (uretildi: arac/acilis_ulke.py) — ELLE DUZENLEME */\n"
            "window.ACILIS_ULKE_VERI = " + json.dumps(veri, ensure_ascii=False, separators=(",", ":")) + ";\n"
            "/* <<< VERI */")
    if os.path.exists(CIKTI):
        c = open(CIKTI, encoding="utf-8").read()
        c = re.sub(r"/\* >>> VERI .*?/\* <<< VERI \*/", lambda m: blok, c, flags=re.S)
    else:
        raise SystemExit("data/acilis_ulke.js yok (kurucu IIFE elle yazılır, VERI işaretleriyle)")
    open(CIKTI, "w", encoding="utf-8", newline="\n").write(c)
    print("%s · %d saat dilimi · %d ülkenin dili · %d akraba · %d komşu satırı · %d millet paketi · %d B" % (
        CIKTI, len(tz), len(dil), len(AKRABA), len(KOMSU), len(paket), len(c.encode("utf-8"))))


main()
