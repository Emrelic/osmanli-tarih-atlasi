# -*- coding: utf-8 -*-
"""ONERI JSON'undan `data/yerlesimler_<x>.js` URETIR ve BAGLAR.

🔴 VARSAYILAN KURU KOSU — `--yaz` verilmedikce hicbir dosyaya dokunmaz.
🔴 KOSU CANLIYSA `--yaz` REDDEDILIR (§7: data/ DONUK).

NE YAPAR
  ① SEMA DISI alanlari AYIKLAR (bit_durum · konum_kesinlik · kova …)
     — `denetim/` altinda deger tasiyorlar, `data/` altinda uyari uretirler
  ② `_kaynak` gibi YUKLEYICI alanlarini atar
  ③ ON SINAV: ad cakismasi (girdi.yukle ValueError ATAR ve KOSUYU OLDURUR)
             3 km mukerrer · zorunlu alan · s: yoksa kasitli_bosluk sarti
  ④ dosyayi YAZAR + `girdi.py` GIRDI_DOSYALARI'na + `index.html`e EKLER
     🔴 IKISI BIRDEN — biri eksikse dosya YARIM baglidir ve denetim
        bunu TEMIZ gosterir (3 Eylul'de ucu birden bu hale dusmustu)

Kullanim:
  py nokta_uygula.py <json> --dosya yerlesimler_gamerika.js [--yaz]
"""
import sys, os, io, json, re, math, subprocess

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.getcwd()
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi

# yalniz BILINEN_ALANLAR gecer; `_` ile baslayanlar YUKLEYICININ
GECER = set(girdi.BILINEN_ALANLAR)
SIRA = ["ad", "tur", "lat", "lon", "g", "k", "m", "kur", "bit",
        "kasitli_bosluk", "bos", "neden", "s", "d", "v", "isg",
        "kd", "go", "ikiz", "sinir", "kesinlik", "not", "kaynak"]


def q(s):
    return '"' + str(s).replace("\\", "\\\\").replace('"', '\\"') + '"'


def deger(v):
    if v is None:
        return "null"
    if isinstance(v, bool):
        return "true" if v else "false"
    if isinstance(v, (int, float)):
        return repr(v)
    if isinstance(v, list):
        return "[" + ", ".join(deger(e) for e in v) + "]"
    if isinstance(v, dict):
        # 🔴 DONEM ANAHTAR SIRASI atlasin emsaliyle AYNI olmali: {f, t, d}
        #    JS'te fark yok ama diff okunabilirligi ve elle bakan goz icin
        #    var — 10 327 mevcut donemin hepsi bu sirada.
        ds = ["f", "t", "d", "k", "y"]
        par = [(a, v[a]) for a in ds if a in v] + \
              [(a, b) for a, b in v.items() if a not in ds]
        return "{" + ", ".join("%s:%s" % (a, deger(b)) for a, b in par) + "}"
    return q(v)


def km(a, b):
    la1, lo1 = math.radians(a[0]), math.radians(a[1])
    la2, lo2 = math.radians(b[0]), math.radians(b[1])
    h = (math.sin((la2 - la1) / 2) ** 2 +
         math.cos(la1) * math.cos(la2) * math.sin((lo2 - lo1) / 2) ** 2)
    return 6371.0 * 2 * math.asin(math.sqrt(h))


def main():
    if len(sys.argv) < 2 or "--dosya" not in sys.argv:
        print(__doc__)
        return 2
    yol = sys.argv[1]
    dosya = sys.argv[sys.argv.index("--dosya") + 1]
    yaz = "--yaz" in sys.argv
    ad_alani = "YERLESIMLER_" + dosya.replace("yerlesimler_", "").replace(".js", "").upper()

    kay = []

    def topla(o):
        if isinstance(o, dict):
            if "ad" in o and "lat" in o and "lon" in o:
                kay.append(o)
            else:
                for v in o.values():
                    topla(v)
        elif isinstance(o, list):
            for e in o:
                topla(e)

    topla(json.load(io.open(yol, encoding="utf-8")))
    print("öneri kaydı : %d" % len(kay))
    print("hedef       : data/%s   → window.%s" % (dosya, ad_alani))

    Y = girdi.yukle()
    mevcut_ad = {y["ad"] for y in Y}

    # 🔴 KIMLIK VARLIGI — ilk surumumde YOKTU ve gercek bir kusurdu:
    #    on sinav yalniz `s:` alaninin DOLU oldugunu soruyordu, kimligin
    #    `devletler.js`te VAR oldugunu DEGIL. KAMERIKA'nin 22 bloke
    #    noktasi (kunyesi henuz yazilmamis 17 kimlik) bu sinavdan
    #    GECERDI ve kunyesiz inerdi ⇒ §3.5 hayalet.
    #    📌 §11: "bir on sinav, taklit ettigi denetciden GEVSEK olursa
    #    KACIRIR, KATI olursa mesru isi BLOKLAR — ikisi de kusur."
    _js = ("global.window={};eval(require('fs').readFileSync(process.argv[1],"
           "'utf8'));const D=window.DEVLETLER||[];console.log(JSON.stringify("
           "D.flatMap(d=>[d.id,d.harita]).filter(Boolean)));")
    _p = subprocess.run(["node", "-e", _js, os.path.join(KOK, "data", "devletler.js")],
                        capture_output=True, text=True, encoding="utf-8")
    KUNYE = set(json.loads(_p.stdout.strip()))
    mevcut_kon = [(y["lat"], y["lon"], y["ad"]) for y in Y
                  if y.get("lat") is not None]

    hata, atilan = [], {}
    temiz = []
    for k in kay:
        ad = k.get("ad")
        # ① ad çakışması — girdi.yukle ValueError ATAR, KOŞUYU ÖLDÜRÜR
        if ad in mevcut_ad:
            hata.append("🔴 AD ÇAKIŞMASI: %s — girdi.yukle ValueError atar" % ad)
        # ② 3 km
        if k.get("lat") is not None:
            for la, lo, oad in mevcut_kon:
                d = km((k["lat"], k["lon"]), (la, lo))
                if d < 3.0:
                    hata.append("🔴 3 KM: %s ↔ %s  %.2f km" % (ad, oad, d))
                    break
        # ③b KIMLIK VARLIGI — kunyesi olmayan kimlik §3.5 hayalet uretir
        for _a in ("s", "d", "v", "isg"):
            for _p2 in (k.get(_a) or []):
                if isinstance(_p2, dict) and _p2.get("d") and _p2["d"] not in KUNYE:
                    hata.append("🔴 KÜNYE YOK: %s → `%s` (devletler.js'te "
                                "yok — §3.5 hayalet)" % (ad, _p2["d"]))
        # ③ sahiplik
        if not k.get("s") and not k.get("d") and not k.get("v"):
            if not k.get("kasitli_bosluk"):
                hata.append("🔴 SAHİPSİZ: %s — s: yok ve kasitli_bosluk yok "
                            "(Değişmez 1 öter)" % ad)
            elif not k.get("bos"):
                hata.append("🔴 CİNSSİZ BEYAN: %s — kasitli_bosluk var, bos: yok" % ad)
        t = {}
        for a, v in k.items():
            if a.startswith("_"):
                atilan[a] = atilan.get(a, 0) + 1
            elif a in GECER:
                t[a] = v
            else:
                atilan[a] = atilan.get(a, 0) + 1
        temiz.append(t)

    print()
    print("ayıklanan şema dışı alan : %s" %
          (", ".join("%s(%d)" % (a, n) for a, n in sorted(atilan.items())) or "yok"))
    # 🟡 SAHIPSIZ/CINSSIZ kayit bir KUSUR DEGIL, bir BEKLEYEN olabilir:
    #    OKYANUSYA'nin 64 kaydi `s:null` cunku TARIHLERI DOGRULANMADI,
    #    AFRIKA'nin 7 kaydi cunku KUNYESI HENUZ YOK. Ikisi de KASITLI.
    #    Ad cakismasi ve 3 km ise GERCEK kusurdur — onlar durdurur.
    #    `KÜNYE YOK` da BEKLEYENdir, DURDURAN degil: kunye adim ①'de
    #    inecek. Ad cakismasi ve 3 km ise GERI DONULEMEZ kusurdur.
    durduran = [h for h in hata if not h.startswith("🔴 SAHİPSİZ")
                and not h.startswith("🔴 CİNSSİZ")
                and not h.startswith("🔴 KÜNYE YOK")]
    bekleyen = [h for h in hata if h not in durduran]
    print("🔴 DURDURAN HATA  : %d  (ad çakışması · 3 km)" % len(durduran))
    for h in durduran[:20]:
        print("   " + h)
    print("🟡 HENÜZ YAZILAMAZ : %d  (sahipsiz — zincir ya da beyan bekliyor)"
          % len(bekleyen))
    for h in bekleyen[:6]:
        print("   " + h)
    if len(bekleyen) > 6:
        print("   … %d tane daha" % (len(bekleyen) - 6))
    if durduran:
        print("🔴 DURDU — hiçbir şey yazılmadı.")
        return 1
    if bekleyen and "--yalniz-hazir" not in sys.argv:
        print("🔴 %d kayıt yazılamaz. Yalnız hazırları yazmak için "
              "--yalniz-hazir ekle." % len(bekleyen))
        return 1
    if bekleyen:
        bekad = {h.split(": ", 1)[1].split(" — ")[0] for h in bekleyen}
        onceki = len(temiz)
        ikili = [(t, k) for t, k in zip(temiz, kay) if k.get("ad") not in bekad]
        temiz = [t for t, _ in ikili]
        print("🟡 --yalniz-hazir : %d → %d kayıt yazılacak" % (onceki, len(temiz)))

    gov = []
    for t in temiz:
        par = [(a, t[a]) for a in SIRA if a in t]
        par += [(a, t[a]) for a in t if a not in SIRA]
        gov.append("{ " + ", ".join("%s:%s" % (a, deger(v)) for a, v in par) + " }")
    metin = ("// %s — 1.MURAT tarafından öneri JSON'undan ÜRETİLDİ\n"
             "// kaynak: %s · %d kayıt · 3 Eylül 2026\n"
             "// 🔴 ELLE DÜZENLEME YOK — kaynağı `denetim/` altındaki JSON'dur.\n"
             "window.%s = [\n%s\n];\n") % (
        ad_alani, os.path.basename(yol), len(temiz), ad_alani,
        ",\n".join(gov))

    canli = subprocess.run(
        ["powershell", "-NoProfile", "-Command",
         "if (Get-Process -Id 1268 -ErrorAction SilentlyContinue) {'CANLI'} else {'YOK'}"],
        capture_output=True, text=True).stdout.strip()
    print("koşu PID 1268 : %s" % canli)
    print("üretilecek dosya : %d bayt · ilk kayıt:" % len(metin))
    print("   " + gov[0][:200])

    if not yaz:
        print()
        print("🟡 KURU KOŞU — hiçbir şey yazılmadı. Yazmak için --yaz")
        return 0
    if canli == "CANLI":
        print("🔴 KOŞU CANLI — `data/` DONUK (§7). DURDU.")
        return 1

    io.open(os.path.join(KOK, "data", dosya), "w",
            encoding="utf-8", newline="").write(metin)
    print("🟢 data/%s yazıldı" % dosya)

    # --- ④ İKİ YERE BİRDEN BAĞLA -------------------------------------
    gp = os.path.join(KOK, "arac", "girdi.py")
    g = io.open(gp, encoding="utf-8").read()
    if dosya not in g:
        g = g.replace('    "yerlesimler_p0037.js"',
                      '    "%s",\n    "yerlesimler_p0037.js"' % dosya, 1)
        io.open(gp, "w", encoding="utf-8", newline="").write(g)
        print("🟢 girdi.py GIRDI_DOSYALARI'na eklendi")
    ip = os.path.join(KOK, "index.html")
    h = io.open(ip, encoding="utf-8").read()
    if dosya not in h:
        m = re.search(r'<script src="data/yerlesimler_p0037\.js\?v=r\d+"></script>', h)
        sur = re.search(r"\?v=(r\d+)", h).group(1)
        h = h[:m.start()] + ('<script src="data/%s?v=%s"></script>\n' % (dosya, sur)) \
            + h[m.start():]
        io.open(ip, "w", encoding="utf-8", newline="").write(h)
        print("🟢 index.html'e eklendi")
    print("🔴 ŞİMDİ: py arac/denetle.py · py arac/renk_olc.py")
    return 0


if __name__ == "__main__":
    sys.exit(main())
