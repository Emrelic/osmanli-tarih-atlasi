# KRONO-DOGU-ISLAM-0929 — "TDV gün veriyor mu?" yarı-otomatik taraması.
# Evren: yedi mevcut dosyanın `gun:` alanı OLMAYAN ve t'si YYYY-01-01 ya da YYYY-MM-01 olan maddeleri.
# Her madde için TDV metinleri (kaynak alanındaki slug'lar + dosyanın omurga maddeleri) taranır:
#   GUNLU  : "<gün> <ay> <yıl>" (miladî)  ya da  "<gün> <hicrî ay> <hicrî yıl>" — ELLE okunur
#   AYLI   : "<ay> <yıl>" gün yok
#   YOK    : o yıl için hiçbir tarih ifadesi yok
# ⚠️ Bu araç HÜKÜM VERMEZ: GUNLU çıkan her satır, rakamı taşıyan cümle okunarak (CLAUDE.md §4 tuzak ⑧)
#    elle doğrulanır. "YOK" ise "TDV <slug> bu yıl için gün vermiyor" beyanının ölçümüdür.
# Kullanım: py denetim/ARAC-KRONO-DOGU-ISLAM-0929-GUN.py <tum.json> <çıktı.json>
import json, re, sys, os, importlib.util
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
DEN = os.path.dirname(os.path.abspath(__file__))
spec = importlib.util.spec_from_file_location("tdv", os.path.join(DEN, "ARAC-KRONO-DOGU-ISLAM-0929-TDV.py"))
tdv = importlib.util.module_from_spec(spec)
spec.loader.exec_module(tdv)

AY = "Ocak|Şubat|Mart|Nisan|Mayıs|Haziran|Temmuz|Ağustos|Eylül|Ekim|Kasım|Aralık"
HAY = ("Muharrem|Safer|Rebîülevvel|Rebîülâhir|Rebîülahir|Cemâziyelevvel|Cemâziyelâhir|Cemaziyelevvel|"
       "Cemaziyelahir|Receb|Recep|Şâban|Şaban|Ramazan|Şevval|Zilkade|Zilkâde|Zilhicce")
# Omurga = dosyanın hânedan + hükümdar maddeleri. İlk koşu yalnız hânedan maddeleriyle yapıldı ve
# Ebû Said'in ölüm gününü (TDV `ebu-said-bahadir-han`: 30 Kasım 1335) KAÇIRDI — hükümdar maddeleri eklendi.
OMURGA = {
    "kronoloji_iran.js": ["ilhanlilar", "safeviler", "kacarlar", "zendler", "iran", "sah-ismail", "abbas-i",
                          "ebu-said-bahadir-han", "gazan-han", "olcaytu-han", "timur", "muzafferiler",
                          "serbedariler", "celayirliler", "kert", "inculular", "akkoyunlular", "karakoyunlular"],
    "kronoloji_iran_ardillari.js": ["ilhanlilar", "celayirliler", "muzafferiler", "serbedariler", "inculular", "kert",
                                    "luristan", "hasan-i-buzurg", "ebu-said-bahadir-han", "gazan-han", "olcaytu-han",
                                    "timur"],
    "kronoloji_safevi.js": ["safeviler", "abbas-i", "sah-ismail"],
    "kronoloji_akkoyunlu.js": ["akkoyunlular", "uzun-hasan", "karakoyunlular"],
    "kronoloji_karakoyunlu.js": ["karakoyunlular", "cihan-sah", "akkoyunlular"],
    "kronoloji_memluk.js": ["memlukler", "baybars-i", "kalavun", "halil-b-kalavun", "muhammed-b-kalavun", "berkuk",
                            "ferec", "barsbay", "kayitbay", "kansu-gavri", "tomanbay"],
    "kronoloji_misir.js": ["misir", "kavalali-mehmed-ali-pasa", "ibrahim-pasa-kavalali", "ali-bey-bulutkapan"],
}
DOSYALAR = list(OMURGA)
HANEDAN_SLUG = {"İlhanlı": "ilhanlilar", "Safevî": "safeviler", "Kaçar": "kacarlar", "Zend": "zendler",
                "Muzafferî": "muzafferiler", "Serbedârî": "serbedariler", "Celâyir": "celayirliler",
                "Timur": "timur", "Akkoyunlu": "akkoyunlular", "Karakoyunlu": "karakoyunlular", "Kert": "kert",
                "Pehlevi": "iran", "Afşar": "iran"}
SLUG = re.compile(r"(?<![\w.-])(?:tdv[:\-\s]+)?([a-z][a-z0-9]*(?:-[a-z0-9]+)+|[a-z]{4,})(?![\w-])")
YASAK = {"tdv", "encyclopaedia", "iranica", "madde", "cambridge", "history", "govde", "okundu", "http", "https",
         "websearch", "bulunamadi", "gun", "yil"}


def sluglar(kaynak):
    k = (kaynak or "").lower()
    out = []
    for m in re.finditer(r"islamansiklopedisi\.org\.tr/([a-z0-9\-]+)", k):
        out.append(m.group(1))
    for m in re.finditer(r"tdv[\s:\-`]+([a-z0-9][a-z0-9\-]+)", k):
        out.append(m.group(1))
    for m in re.finditer(r"`([a-z0-9][a-z0-9\-]+)`", k):
        out.append(m.group(1))
    # yalın slug: kaynak alanının "·" ile bölünmüş parçalarının ilk kelimesi
    for parca in re.split(r"[·;,]| ve ", k):
        w = parca.strip().split(" ")[0].strip("`'\"()") if parca.strip() else ""
        if re.fullmatch(r"[a-z][a-z0-9\-]{3,}", w) and w not in YASAK:
            out.append(w)
    temiz = []
    for s in out:
        s = re.sub(r"^tdv-", "", s)
        if s not in temiz and s not in YASAK:
            temiz.append(s)
    return temiz


def tara(metin, yil):
    gunlu, ayli = [], []
    for m in re.finditer(r"(\d{1,2})\s+(%s)\s+(%d)" % (AY, yil), metin):
        s = max(0, m.start() - 220)
        gunlu.append(metin[s:m.end() + 120].replace("\n", " "))
    for m in re.finditer(r"(?<!\d\s)(?<!\d)\b(%s)\s+(%d)" % (AY, yil), metin):
        s = max(0, m.start() - 160)
        ayli.append(metin[s:m.end() + 80].replace("\n", " "))
    # hicrî: yılın ±1 hicrî karşılığı (yaklaşık: H = (M-622)*33/32)
    h = round((yil - 622) * 33 / 32)
    hicri = []
    for hy in (h - 1, h, h + 1):
        for m in re.finditer(r"(\d{1,2})\s+(%s)\s+(%d)" % (HAY, hy), metin):
            s = max(0, m.start() - 200)
            hicri.append(metin[s:m.end() + 120].replace("\n", " "))
    return gunlu, ayli, hicri


TR = str.maketrans({"ı": "i", "İ": "i", "ş": "s", "Ş": "s", "ğ": "g", "Ğ": "g", "ü": "u", "Ü": "u", "ö": "o",
                    "Ö": "o", "ç": "c", "Ç": "c", "â": "a", "Â": "a", "î": "i", "Î": "i", "û": "u", "Û": "u"})


def yer_slug(yer):
    """yer_id → TDV yer maddesi adayı ('İsfahan' → 'isfahan', 'Reşîd (Rosetta)' → 'resid').
    İkinci koşuda eklendi: hânedan maddeleri İsfahan katliamının gününü (TDV `isfahan`: 6 Zilkade 789 /
    18 Kasım 1387) VERMİYORDU; yer maddesi veriyor."""
    if not yer:
        return None
    s = re.sub(r"\s*\(.*?\)", "", str(yer)).translate(TR).lower()
    s = re.sub(r"[’'`]", "", s)
    s = re.sub(r"[^a-z0-9]+", "-", s).strip("-")
    return s or None


def main():
    T = json.load(open(sys.argv[1], encoding="utf-8"))
    sonuc = []
    onbellek = {}
    benim = "--benim-gun" in sys.argv   # bu oturumun yazdığı gun: beyanlı maddeleri de yeniden tara
    for m in T:
        if m["_f"] not in DOSYALAR:
            continue
        if m.get("gun") and not (benim and ("gün/ay vermiyor" in m["gun"] or "yıla indirildi" in m["gun"]
                                             or "DOĞRULANAMADI" in m["gun"] or "ay TDV'de var, gün yok" in m["gun"])):
            continue
        t = str(m.get("t", ""))
        if not re.fullmatch(r"\d{4}-\d\d-01", t):
            continue
        yil = int(t[:4])
        sl = sluglar(m.get("kaynak", ""))
        ys = yer_slug(m.get("yer_id"))
        if ys and ys not in sl:
            sl.insert(0, ys)
        # kronoloji_iran.js: d "[Hânedan]" etiketiyle başlar → o hânedanın maddesi ÖNE alınır
        etk = re.match(r"\[([^\]]+)\]", m.get("d", "") or "")
        if m["_f"] == "kronoloji_iran.js" and etk:
            for anahtar, s in HANEDAN_SLUG.items():
                if anahtar in etk.group(1) and s not in sl:
                    sl.append(s)
        for s in OMURGA[m["_f"]]:
            if s not in sl:
                sl.append(s)
        kayit = {"f": m["_f"], "t": t, "b": m["b"], "kaynak": m.get("kaynak", ""), "slug": {}, "sinif": "YOK"}
        for s in sl:
            if s not in onbellek:
                metin, yol, durum = tdv.metin(s)
                onbellek[s] = (metin if len(metin) > 3000 else "", durum)
            metin, durum = onbellek[s]
            if not metin:
                kayit["slug"][s] = {"durum": durum}
                continue
            g, a, h = tara(metin, yil)
            kayit["slug"][s] = {"durum": "ok", "gunlu": g, "ayli": a, "hicri": h}
            if g or h:
                kayit["sinif"] = "GUNLU"
            elif a and kayit["sinif"] == "YOK":
                kayit["sinif"] = "AYLI"
        sonuc.append(kayit)
    json.dump(sonuc, open(sys.argv[2], "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    from collections import Counter
    print(Counter((k["f"], k["sinif"]) for k in sonuc))
    print("ölü/boş slug:", sorted({s for k in sonuc for s, v in k["slug"].items() if v.get("durum") != "ok"}))


if __name__ == "__main__":
    main()
