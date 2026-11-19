# ACILIS-ULKE-1119 — millet paketleri: her milletin 10 kişi + 10 simgesi (Emre, 19 Kas 2026).
#   py arac/acilis_millet.py [KOD ...]      → data/acilis_m/<KOD>.js + img/acilis/m/<KOD>.webp
#   py arac/acilis_millet.py --kaynak       → img/acilis/m/KAYNAK.md (pakete giren her görselin
#                                             Commons dosyası, lisansı, yazarı; düşenler sebebiyle)
#   py arac/acilis_millet.py --onbellek     → hiç indirmeden, yalnız önbellekteki görsellerle üret
#                                             (429 bekleme döngüsü olmadan dakikalar içinde biter)
# Girdi: veri-kaynak/acilis-katalog/<KOD>.json (katalog: kişiler + simgeler, Commons dosya
# adları API ile doğrulanmış — araştırma 19 Kas). Görseller veri-kaynak/acilis-katalog/img/
# önbelleğine Commons'un HAZIR küçük resim basamaklarından (250/330/500) iner: standart dışı
# genişlik ve asıl dosya 429 veriyor (19 Kas ölçümü).
# Ziyaretçinin ülkesi data/acilis_ulke.js'te bulunur; paket orada senkron yüklenir, perde
# (data/acilis_siluet.js) paketin karolarını İLK fırlatır.
import os, sys, json, re, time, hashlib, urllib.request, urllib.parse, urllib.error
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
from PIL import Image, ImageDraw, ImageFilter

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
KAT = os.path.join(KOK, "veri-kaynak", "acilis-katalog")
IMG = os.path.join(KAT, "img")
MJS = os.path.join(KOK, "data", "acilis_m")
MIMG = os.path.join(KOK, "img", "acilis", "m")
UA = {"User-Agent": "tarih-atlasi-acilis/1.0 (egitim amacli statik site)"}
PW, PH = 120, 160        # portre hücresi (3:4)
SW = 128                 # bayrak/arma/mühür hücresi (saydam, gölgeli)
FW, FH = 160, 120        # yapı/eser fotoğrafı (4:3, kartpostal kenarı)
TABAKA_EN = 640
SAYDAM = {"bayrak", "arma", "muhur"}
# Lisansı hukuken belirsiz — Emre karar verene kadar pakete girmez (araştırma notları, 19 Kas):
#   guevara: René Burri fotoğrafı, "PD US not renewed / PD Cuba" — fotoğrafçının hakkı tartışmalı
#   AU_aborijin: Aborijin bayrağı "Copyrighted free use" (tasarımcının telifi; 2022'de kamuya devredildi
#   ama Commons etiketi belirsiz)
DISLA = {"guevara", "AU_aborijin"}
ONBELLEK = "--onbellek" in sys.argv


_SON = [0.0]


def bekle():
    """Commons'a iki istek arası en az ARALIK sn (19 Kas: art arda istek 429 veriyordu)."""
    t = time.time() - _SON[0]
    if t < ARALIK:
        time.sleep(ARALIK - t)
    _SON[0] = time.time()


ARALIK = 6


def api(**p):
    p.update(format="json")
    u = "https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode(p)
    for den in range(6):
        try:
            bekle()
            return json.load(urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=60))
        except urllib.error.HTTPError as e:
            if e.code != 429 or den == 5:
                raise
            time.sleep(60 * (den + 1))


def indir(dosya, hedef, genislikler):
    """Commons küçük resmini standart basamaklardan ilk inenle indirir. Dönüş: (lisans, yazar)."""
    son = None
    for g in genislikler:
        r = api(action="query", prop="imageinfo", iiprop="url|size|extmetadata", iiurlwidth=g, titles="File:" + dosya)
        sayfa = list(r["query"]["pages"].values())[0]
        if "imageinfo" not in sayfa:
            raise FileNotFoundError(dosya)
        ii = sayfa["imageinfo"][0]
        u = ii.get("thumburl") or ii["url"]
        for den in range(4):
            try:
                bekle()
                veri = urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=60).read()
                open(hedef, "wb").write(veri)
                em = ii.get("extmetadata", {})
                time.sleep(2)
                return (em.get("LicenseShortName", {}).get("value", ""),
                        re.sub("<[^>]+>", "", em.get("Artist", {}).get("value", ""))[:80])
            except urllib.error.HTTPError as e:
                son = e
                if e.code != 429:
                    break
                time.sleep(60 * (den + 1))
    raise son or RuntimeError(dosya)


_YUZ = None


def yuz_bul(im):
    """En büyük yüz (x, y, w, h) — OpenCV Haar; bulunamazsa None."""
    global _YUZ
    import cv2, numpy as np
    if _YUZ is None:
        _YUZ = [cv2.CascadeClassifier(cv2.data.haarcascades + f) for f in
                ("haarcascade_frontalface_default.xml", "haarcascade_frontalface_alt2.xml", "haarcascade_profileface.xml")]
    g = cv2.cvtColor(np.array(im.convert("RGB")), cv2.COLOR_RGB2GRAY)
    g = cv2.equalizeHist(g)
    en = min(im.size)
    for c in _YUZ:
        ys = c.detectMultiScale(g, scaleFactor=1.08, minNeighbors=5, minSize=(max(20, en // 12),) * 2)
        if len(ys):
            return tuple(int(v) for v in max(ys, key=lambda r: r[2] * r[3]))
    return None


def portre_kirp(im, kirp=None):
    """Baş + omuz, dikey 3:4. kirp verilirse (merkez x, y 0-10, yüz/genişlik) elle; yoksa yüz bulunur."""
    W, H = im.size
    if kirp:
        cx, cy, fw = kirp[0] / 10 * W, kirp[1] / 10 * H, kirp[2] * W
    else:
        y = yuz_bul(im)
        if y:
            cx, cy, fw = y[0] + y[2] / 2, y[1] + y[3] / 2, y[2]
        else:   # yüz bulunamadı: üst-orta (portrelerin çoğu)
            cx, cy, fw = W / 2, H * 0.3, W * 0.45
    gw = fw * 2.6
    gh = gw * PH / PW
    if gw > W:
        gw, gh = W, W * PH / PW
    if gh > H:
        gh, gw = H, H * PW / PH
    x0 = min(max(cx - gw / 2, 0), W - gw)
    y0 = min(max(cy - gh * 0.38, 0), H - gh)
    return im.crop((int(x0), int(y0), int(x0 + gw), int(y0 + gh))).convert("RGB").resize((PW, PH), Image.LANCZOS)


def foto_kirp(im):
    W, H = im.size
    if W / H > FW / FH:
        gw = H * FW / FH
        im = im.crop((int((W - gw) / 2), 0, int((W + gw) / 2), H))
    else:
        gh = W * FH / FW
        im = im.crop((0, int((H - gh) / 2), W, int((H + gh) / 2)))
    c = im.convert("RGB").resize((FW, FH), Image.LANCZOS)
    ImageDraw.Draw(c).rectangle((0, 0, FW - 1, FH - 1), outline=(243, 238, 226), width=5)
    return c


def saydam_hucre(im):
    im = im.convert("RGBA")
    bb = im.getbbox()
    if bb:
        im = im.crop(bb)
    a = SW - 8
    o = min(a / im.width, a / im.height)
    im = im.resize((max(1, round(im.width * o)), max(1, round(im.height * o))), Image.LANCZOS)
    c = Image.new("RGBA", (SW, SW), (0, 0, 0, 0))
    x0, y0 = (SW - im.width) // 2, (SW - im.height) // 2
    g = Image.new("RGBA", im.size, (0, 0, 0, 0))
    g.putalpha(im.getchannel("A").point(lambda v: v * 0.55))
    gt = Image.new("RGBA", (SW, SW), (0, 0, 0, 0))
    gt.alpha_composite(g, (x0 + 3, y0 + 4))
    c.alpha_composite(gt.filter(ImageFilter.GaussianBlur(1.6)))
    c.alpha_composite(im, (x0, y0))
    return c


def mevcut_coz(o, tur, U):
    """Sitede zaten olan karo: Commons dosyası + kırpma (kişi) ya da harita gövdesi (simge).
    Dönüş: o'nun kopyası, 'dosya'/'kirp'/'tur'/'hb' doldurulmuş; bulunamazsa None."""
    m = o.get("mevcut")
    o = dict(o)
    liste = o.get("mevcut_liste")
    if tur == "k":
        for p in U.PORTRE:
            if p[0] == m:
                o["dosya"] = p[2]
                if m in getattr(U, "LEVHA", {}):   # yuvarlak levha (Hz. Muhammed): elle hazırlanır, tabakaya
                    return {"taban": p[1]}          # girmez — perde dünya setindeki karoyu adıyla çağırır
                o["kirp"] = list(p[5]) if p[5] else None
                return o
        return None
    if liste in (None, "TARIH", "BUGUN") and (o.get("tur") == "harita" or liste in ("TARIH", "BUGUN")):
        for t in U.TARIH:
            if t[0] == m:
                o.update(tur="harita", hb=(t[3], t[2]), renk=t[4], dunya=t[6])
                return o
        for b in U.BUGUN:
            if b[0] == m:
                o.update(tur="harita", ne=b[1], renk=b[3])
                return o
    if liste in (None, "AMBLEM"):
        for a in U.AMBLEM:
            if a[0] == m:
                o.update(dosya=a[2], tur=o.get("tur") if o.get("tur") in SAYDAM else "arma")
                return o
    if liste in (None, "TABLO"):
        for t in U.TABLO:
            if t[0] == m:
                o.update(dosya=t[3], tur="eser" if t[2] else "yapi")
                return o
    return None


_NE = None


def harita_ogesi(o, U):
    """Harita karosu: historical-basemaps (hb_ad/hb_yil ya da mevcut TARIH deseni) veya Natural Earth."""
    global _NE
    if o.get("ne"):
        if _NE is None:
            C = json.load(open(os.path.join(KOK, "veri-kaynak", "ne_10m_admin_0_countries.geojson"), encoding="utf-8"))
            _NE = {f["properties"]["ADM0_A3"]: f for f in C["features"]}
        from shapely.geometry import shape, box
        g = shape(_NE[o["ne"]]["geometry"])
        if o["ne"] in U.KIRP:
            g = g.intersection(box(*U.KIRP[o["ne"]]))
        return {"t": "h", "ad": o["ad"], "yol": U.yol_uret(g, 0.02)[0], "renk": o.get("renk", "#8e0b22")}
    if o.get("hb"):
        desen, dilimler = o["hb"]
    else:
        desen, dilimler = re.escape(o["hb_ad"]), [str(o["hb_yil"])]
    g, d = U.tarih_govde(desen, dilimler)
    if o.get("dunya"):
        return {"t": "h", "ad": o["ad"], "yol": U.dunya_yolu(g), "renk": o.get("renk", "#8e0b22"), "dunya": 1}
    return {"t": "h", "ad": o["ad"], "yol": U.yol_uret(g, 0.01, None)[0], "renk": o.get("renk", "#8e0b22")}


def ulke_noktasi(kod, U):
    """Ülkenin ana kara parçasında bir nokta (Natural Earth; ISO_A2_EH — Fransa/Norveç'te ISO_A2 -99)."""
    global _NE
    if _NE is None:
        C = json.load(open(os.path.join(KOK, "veri-kaynak", "ne_10m_admin_0_countries.geojson"), encoding="utf-8"))
        _NE = {f["properties"]["ADM0_A3"]: f for f in C["features"]}
    from shapely.geometry import shape
    for f in _NE.values():
        p = f["properties"]
        if kod in (p.get("ISO_A2_EH"), p.get("ISO_A2")):
            return U.firlama_noktasi(shape(f["geometry"]))
    return None


def paket(kod, U):
    k = json.load(open(os.path.join(KAT, kod + ".json"), encoding="utf-8"))
    os.makedirs(IMG, exist_ok=True)
    eksik = []
    # "yedek": true olanlar ana listeden sonra gelir (araştırma 19 Kas: ana 10 + yedekler);
    # DISLA: Emre'nin kararına kadar çıkarılan karolar (lisansı belirsiz vb.)
    def sec(liste):
        # "cikar": gözle denetimde düşen karo (yanlış dosya, seçilemeyen görsel, Emre kararı bekleyen)
        liste = [x for x in liste if x.get("anahtar") not in DISLA and not x.get("cikar")]
        return ([x for x in liste if not x.get("yedek")] + [x for x in liste if x.get("yedek")])[:10]
    kisiler = sec(k.get("kisiler", []))
    simgeler = sec(k.get("simgeler", []))
    # Sıra: kişi ve simge dönüşümlü (1. kişi, 1. simge, 2. kişi …)
    sira = []
    for i in range(max(len(kisiler), len(simgeler))):
        if i < len(kisiler):
            sira.append(("k", kisiler[i]))
        if i < len(simgeler):
            sira.append(("s", simgeler[i]))
    sonuc, hucreler = [], []   # sonuc: sıralı öğeler; resimli olanların hücresi hucreler'de
    for tur, o in sira:
        if o.get("mevcut"):
            c = mevcut_coz(o, tur, U)
            if c is None:
                eksik.append("%s (mevcut '%s' çözülemedi)" % (o.get("anahtar"), o.get("mevcut")))
                continue
            if "taban" in c:
                sonuc.append({"t": "b", "ad": c["taban"]})
                continue
            o = c
        if tur == "s" and o.get("tur") == "harita":
            try:
                sonuc.append(harita_ogesi(o, U))
            except (SystemExit, Exception) as e:
                eksik.append("%s (harita: %s)" % (o.get("anahtar"), e))
            continue
        dosya = o.get("dosya")
        if not dosya:
            eksik.append("%s (dosya yok)" % o.get("anahtar"))
            continue
        uz = ".png" if (tur == "s" and o.get("tur") in SAYDAM) else ".jpg"
        p = os.path.join(IMG, o["anahtar"] + uz)
        if not os.path.exists(p) and ONBELLEK:
            eksik.append("%s (önbellekte yok)" % o.get("anahtar"))
            continue
        if not os.path.exists(p):
            try:
                oran = (o.get("en") or 1) / max(1, o.get("boy") or 1)
                # çok uzun panorama/tomar: ortadan 4:3 kırpılacak — dar küçük resim işe yaramaz
                gen = [250] if uz == ".png" else ([3840, 1920] if oran > 4 else [1280, 500] if oran > 2 else [500, 330])
                lis, yaz = indir(dosya, p, gen)
                print("  indi %-24s %s · %s" % (o["anahtar"], lis, yaz))
            except Exception as e:
                eksik.append("%s (%s)" % (o.get("anahtar"), e))
                continue
        try:
            im = Image.open(p)
            im.load()
        except Exception as e:
            eksik.append("%s (bozuk: %s)" % (o.get("anahtar"), e))
            continue
        if tur == "k":
            c, t = portre_kirp(im, o.get("kirp")), "k"
        elif uz == ".png":
            c, t = saydam_hucre(im), "s"
        else:
            c, t = foto_kirp(im), "f"
        oge = {"t": t, "ad": o["ad"]}
        hucreler.append((c, oge))
        sonuc.append(oge)
    # raf yerleşimi (öğe sözlüğüne "r": [x, y, en, boy] yazılır)
    x = y = raf = 0
    for c, oge in hucreler:
        if x + c.width > TABAKA_EN:
            x, y, raf = 0, y + raf, 0
        oge["r"] = [x, y, c.width, c.height]
        x += c.width
        raf = max(raf, c.height)
    os.makedirs(MIMG, exist_ok=True)
    os.makedirs(MJS, exist_ok=True)
    tab = Image.new("RGBA", (TABAKA_EN, max(1, y + raf)), (0, 0, 0, 0))
    for c, oge in hucreler:
        tab.alpha_composite(c.convert("RGBA"), tuple(oge["r"][:2]))
    yol = os.path.join(MIMG, kod + ".webp")
    tab.save(yol, "WEBP", quality=76, method=6)
    oz = hashlib.md5(open(yol, "rb").read()).hexdigest()[:8]
    veri = {"kod": kod, "ad": k.get("ad", kod), "tabaka": "img/acilis/m/%s.webp?v=%s" % (kod, oz),
            "en": TABAKA_EN, "o": sonuc}
    nokta = ulke_noktasi(kod, U)   # karolar ülkenin küredeki yerinden fırlar
    if nokta:
        veri["lon"], veri["lat"] = nokta
    open(os.path.join(MJS, kod + ".js"), "w", encoding="utf-8", newline="\n").write(
        "/* uretildi: arac/acilis_millet.py — ELLE DUZENLEME */\nwindow.ACILIS_MILLET = " +
        json.dumps(veri, ensure_ascii=False, separators=(",", ":")) + ";\n")
    print("%s: %d karo (%d kişi, %d simge/harita) · tabaka %d B%s" % (
        kod, len(sonuc), sum(1 for s in sonuc if s["t"] in ("k", "b")), sum(1 for s in sonuc if s["t"] not in ("k", "b")),
        os.path.getsize(yol), (" · EKSİK: " + "; ".join(eksik)) if eksik else ""))


def uret_modulu():
    """arac/acilis_uret.py'nin listeleri ve yardımcıları — betiğin sonundaki main() çağrısı
    koşturulmadan (o dosya veri bloğunu yeniden yazar)."""
    import types
    yol = os.path.join(KOK, "arac", "acilis_uret.py")
    src = open(yol, encoding="utf-8").read()
    src = re.sub(r"\n(if __name__ == \"__main__\":\n    )?main\(\)\s*$", "\n", src)
    m = types.ModuleType("acilis_uret")
    m.__file__ = yol
    exec(compile(src, yol, "exec"), m.__dict__)
    import functools   # tarihî harita dilimi bir kez okunur (her ülkede yeniden okumak dakikalar sürüyordu)
    m.hb_dilim = functools.lru_cache(maxsize=None)(m.hb_dilim)
    return m


def kaynak_yaz():
    """Lisans dökümü: pakete seçilen her görsel (sec ile aynı kural) + çıkarılanlar."""
    sat = ["# Açılış perdesi — millet paketleri: görsel kaynakları", "",
           "Üretildi: `py arac/acilis_millet.py --kaynak` — ELLE DÜZENLEME. Katalog: "
           "`veri-kaynak/acilis-katalog/<KOD>.json`. Dosyalar Wikimedia Commons'tan; "
           "`mevcut` olanların kaynağı `img/acilis/KAYNAK.md`dedir.", ""]
    cik = []
    for f in sorted(x for x in os.listdir(KAT) if re.fullmatch(r"[A-Z]{2}\.json", x)):
        k = json.load(open(os.path.join(KAT, f), encoding="utf-8"))
        sat += ["## %s — %s" % (f[:2], k.get("ad", "")), "", "| Öğe | Commons dosyası | Lisans | Yazar |", "|---|---|---|---|"]
        for liste in ("kisiler", "simgeler"):
            hepsi = [x for x in k.get(liste, []) if x.get("anahtar") not in DISLA]
            cik += ["%s · %s: %s" % (f[:2], x.get("ad"), x["cikar"]) for x in hepsi if x.get("cikar")]
            hepsi = [x for x in hepsi if not x.get("cikar")]
            for o in ([x for x in hepsi if not x.get("yedek")] + [x for x in hepsi if x.get("yedek")])[:10]:
                if o.get("mevcut") or not o.get("dosya"):
                    continue
                sat.append("| %s | [%s](https://commons.wikimedia.org/wiki/File:%s) | %s | %s |" % (
                    o.get("ad", ""), o["dosya"], urllib.parse.quote(o["dosya"].replace(" ", "_")),
                    o.get("lisans", "?"), (o.get("yazar") or "").replace("|", "/")))
        sat.append("")
    sat += ["## Çıkarılanlar (gözle denetim, 19 Kas 2026)", ""] + ["- " + c for c in cik] + [""]
    sat += ["Lisansı belirsiz olduğu için hiç alınmayanlar: " + ", ".join(sorted(DISLA)) + ".", ""]
    open(os.path.join(MIMG, "KAYNAK.md"), "w", encoding="utf-8", newline="\n").write("\n".join(sat))
    print("KAYNAK.md:", len(sat), "satır")


def main():
    if "--kaynak" in sys.argv:
        return kaynak_yaz()
    U = uret_modulu()
    kodlar = [a for a in sys.argv[1:] if re.fullmatch(r"[A-Z]{2}", a)] or \
             sorted(f[:-5] for f in os.listdir(KAT) if re.fullmatch(r"[A-Z]{2}\.json", f))
    for kod in kodlar:
        paket(kod, U)


if __name__ == "__main__":
    main()
