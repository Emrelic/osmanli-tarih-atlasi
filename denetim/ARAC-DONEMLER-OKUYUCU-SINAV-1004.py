# -*- coding: utf-8 -*-
"""DONEMLER OKUYUCU SINAVI (1004) — `vk` (MOTOR-V-KID-1004.diff) yeni anahtarını `window.DONEMLER`i OKUYAN
araçlar nasıl karşılar? Sentetik `donemler.js` üzerinde, motora ve gerçek veriye DOKUNMADAN.

NEDEN: motor yaması tam inşada bir kez girer (~83 dk). Bir okuyucu yeni anahtarla boğulursa bunu koşudan SONRA
öğrenmek o dakikaları ve bir tuz değişimini boşa harcar. Sınav dakikalar sürer.

HER OKUYUCU İÇİN ÜÇ AYRI KOVA (çökmek bir sonuçtur; sessizce YANLIŞ davranmak bir KUSURDUR):
  ✅ TAŞIYOR / YOK SAYIYOR   vk'lı ve vk'sız girdide çıktı AYNI ya da fark YALNIZ vk anahtarının kendisi
  🔴 ÇÖKÜYOR                vk'lı girdide istisna (kontrol girdisi — vk'sız — GEÇERKEN)
  🔴 SESSİZCE FARKLI        vk'lı girdi vk dışında BAŞKA bir çıktı farkı üretiyor
  ⚪ KURULUM                kontrol girdisi (vk'sız) de çöktü: sınav kurulumunun kusuru, vk'nın değil

İKİ SINIF OKUYUCU AYRI SAYILIR: (A) DONEMLER'i GERÇEKTEN AYRIŞTIRAN/ÇÖZEN kod, (B) yalnız dosya/ad varlığına ya
da yoruma bakan. (B) çalıştırılmaz, statik okunur ve gerekçesi yazılır.

YÖNTEM: okuyucu işlevleri AYNEN, kendi dosyalarından AST ile ÇIKARILIP (betiklerin içe alınırken yan etkisi var)
sentetik girdide çalıştırılır; `arac/` dosyalarına DOKUNULMAZ. Girdi: `denetim/SENTETIK-DONEMLER-VK-1004.js`
(iki dönem vk taşır) ve ondan türetilen vk'sız ikizi.

ÜÇÜNCÜ BULGU TÜRÜ: `DONEMLER` tarafında bilinmeyen-alan KÜTÜĞÜ var mı? (yerleşim tarafında `girdi.BILINEN_ALANLAR`
var çünkü bilinmeyen alan orada GERÇEK sorun olmuştu — D225, `dogrulanmadi`). Statik taranır.

Başta/sonda `git rev-parse HEAD` basılır (LAB yöntem kuralı).
KULLANIM:  py denetim/ARAC-DONEMLER-OKUYUCU-SINAV-1004.py     (çıkış: 0 kusur yok · 1 çöken/sessizce farklı okuyucu var)
"""
import ast, glob, importlib, io, json, os, re, shutil, subprocess, sys, tempfile, traceback

try:
    sys.stdout.reconfigure(encoding="utf-8")
except Exception:                                   # noqa
    pass
DENETIM = os.path.dirname(os.path.abspath(__file__))
KOK = os.path.dirname(DENETIM)
ARAC = os.path.join(KOK, "arac")
SENTETIK = os.path.join(DENETIM, "SENTETIK-DONEMLER-VK-1004.js")
sys.path.insert(0, DENETIM)
sys.path.insert(0, ARAC)


def head():
    p = subprocess.run(["git", "-C", KOK, "rev-parse", "HEAD"], capture_output=True)
    return p.stdout.decode().strip()[:12] if p.returncode == 0 else "?"


# ------------------------------------------------------------------ girdiler
def metinler():
    vk = open(SENTETIK, encoding="utf-8", newline="").read()
    a = vk.index("window.DONEMLER = ") + len("window.DONEMLER = ")
    b = vk.index(";\n", a)
    d0 = json.loads(vk[a:b])
    d1 = [{k: v for k, v in x.items() if k != "vk"} for x in d0]
    J = lambda x: json.dumps(x, separators=(",", ":"))
    vksiz = vk[:a] + J(d1) + vk[b:]
    return vk, vksiz, d0, d1


def yaz_klasor(dizin, metin):
    """donemler.js + öteki dosyalar (okuyucuların birlikte istediği MİNİMUM geçerli dosyalar)."""
    os.makedirs(dizin, exist_ok=True)
    open(os.path.join(dizin, "donemler.js"), "w", encoding="utf-8", newline="").write(metin)
    ek = {"devletler_harita.js": "window.DEVLET_HARITA = [];\nwindow.DEVLET_PARCALAR = [];\nwindow.DEVLET_PARCA_HALKA = [];\n",
          "bolgeler.js": "window.BOLGELER = [];\n",
          "devirler.js": "window.DEVIRLER = [];\nwindow.ISGALLER = [];\n"}
    for ad, m in ek.items():
        open(os.path.join(dizin, ad), "w", encoding="utf-8", newline="").write(m)


def cikar(dosya, adlar, ns):
    """arac/<dosya> içinden YALNIZ istenen üst-düzey işlevleri AST ile çıkarıp `ns`te tanımla."""
    kaynak = open(os.path.join(ARAC, dosya), encoding="utf-8").read()
    for n in ast.parse(kaynak).body:
        if isinstance(n, ast.FunctionDef) and n.name in adlar:
            exec(compile(ast.get_source_segment(kaynak, n), dosya + ":" + n.name, "exec"), ns)
    eksik = [a for a in adlar if a not in ns]
    if eksik:
        raise RuntimeError("%s içinde işlev yok: %s" % (dosya, eksik))
    return ns


def ns_taban():
    from shapely.geometry import Polygon, MultiPolygon, shape
    from shapely.ops import unary_union
    return {"json": json, "io": io, "os": os, "re": re, "Polygon": Polygon, "MultiPolygon": MultiPolygon,
            "shape": shape, "unary_union": unary_union, "sys": sys}


def _norm(x):
    """JSON'a çevrilebilir kanonik biçim: dict anahtarları (demet dahil) str olur."""
    if isinstance(x, dict):
        return {str(k): _norm(v) for k, v in x.items()}
    if isinstance(x, (list, tuple)):
        return [_norm(v) for v in x]
    if isinstance(x, float) and x == int(x):
        return int(x)                       # node JSON.stringify 100.0 → 100 yazar; değer AYNI
    return x


def ayni(a, b):
    return json.dumps(_norm(a), sort_keys=True, default=str) == json.dumps(_norm(b), sort_keys=True, default=str)


def vk_sil(x):
    """özyinelemeli: dict içindeki 'vk' anahtarlarını at (sonuç ağacı için)."""
    if isinstance(x, dict):
        return {k: vk_sil(v) for k, v in x.items() if k != "vk"}
    if isinstance(x, (list, tuple)):
        return [vk_sil(v) for v in x]
    return x


# ------------------------------------------------------------------ okuyucular
def okuyucular(tmp, vk_klasor, no_klasor, d0, d1):
    """→ [(ad, mekanizma, calistir(klasor)->sonuc, tur)]; tur: 'ayristirici' (DONEMLER'i döndürür) | 'turetilmis'."""
    R = []

    yol = lambda k: os.path.join(k, "donemler.js")
    import denetle
    R.append(("denetle.oku_pencere", "bracket-dengeli JSON", lambda k: denetle.oku_pencere(yol(k), "DONEMLER"), "ayristirici"))
    R.append(("denetle._d8_js (D8 gövde okuyucusu)", "json.raw_decode", lambda k: denetle._d8_js(yol(k))["DONEMLER"], "ayristirici"))
    R.append(("denetle._d8_node", "node eval", lambda k: denetle._d8_node([yol(k)], "window.DONEMLER"), "ayristirici"))

    def d8_govde(k):
        eski = denetle.DATA
        denetle.DATA = k
        try:
            g = denetle._D8Govde()
            return [list(map(str, t[:3])) + [t[3]] for t in g.kay[1][2]]
        finally:
            denetle.DATA = eski
    R.append(("denetle._D8Govde (gerçek yapıcı)", "_d8_js + d.get('o'/'v')", d8_govde, "turetilmis"))

    me = importlib.import_module("motor_esitlik")
    R.append(("motor_esitlik.js_oku", "satır-bazlı JSON", lambda k: me.js_oku(yol(k))["DONEMLER"], "ayristirici"))
    R.append(("motor_esitlik.govdeler", "js_oku + d.get('o'/'v'/'h')", lambda k: me.govdeler(k), "turetilmis"))

    # --- AST ile çıkarılanlar
    def dolgu_kesit(k):
        ns = ns_taban()
        ns["KOK"] = os.path.dirname(k)
        cikar("dolgu.py", {"_js_oku", "_kesitler"}, ns)
        return ns["_kesitler"]()[0]
    os.makedirs(os.path.join(tmp, "dolgu_kok"), exist_ok=True)
    R.append(("dolgu._kesitler (+_js_oku)", "satır-bazlı JSON + r.get('o')+r.get('v')", dolgu_kesit, "turetilmis"))

    def bitisiklik(k):
        ns = ns_taban()
        cikar("denetle_bitisiklik.py", {"_dizi", "govde"}, ns)
        m = open(yol(k), encoding="utf-8").read()
        D, P = ns["_dizi"](m, "DONEMLER"), ns["_dizi"](m, "PARCALAR")
        return {"D": D, "govde": [(ns["govde"](d, P).wkt if ns["govde"](d, P) is not None else None) for d in D]}
    R.append(("denetle_bitisiklik._dizi + govde", "index('];') + JSON; d.get('o')", bitisiklik, "ayristirici"))

    def bosluk(k):
        ns = ns_taban()
        cikar("denetle_bosluk.py", {"_dizi"}, ns)
        return ns["_dizi"](open(yol(k), encoding="utf-8").read(), "DONEMLER")
    R.append(("denetle_bosluk._dizi", "JSON dilimi", bosluk, "ayristirici"))

    def gorunurluk(k):
        ns = ns_taban()
        ns["DATA"] = k
        cikar("denetle_gorunurluk.py", {"_dizi", "oku_donemler"}, ns)
        return ns["oku_donemler"]()[0]
    R.append(("denetle_gorunurluk.oku_donemler", "index(';\\n') + JSON", gorunurluk, "ayristirici"))

    def alan_kaybi(k):
        ns = ns_taban()
        ns["GUN"] = "1400-06-15"
        ns["yaz"] = lambda s: None
        cikar("_alan_kaybi_sinavi.py", {"pencere", "coz", "alan", "olc"}, ns)
        return ns["olc"](open(yol(k), encoding="utf-8").read(), "x")
    R.append(("_alan_kaybi_sinavi.olc", "regex-anahtar tırnaklama + JSON", alan_kaybi, "turetilmis"))

    def enklav(k):
        ns = ns_taban()
        ns["ham"] = open(yol(k), encoding="utf-8").read()
        cikar("_enklav_kara.py", {"blok"}, ns)
        return ns["blok"]("DONEMLER")
    R.append(("_enklav_kara.blok", "satır sonu + JSON", enklav, "ayristirici"))

    def devirler(k):
        ns = ns_taban()
        cikar("uret_devirler.py", {"oku_pencere"}, ns)
        return ns["oku_pencere"](yol(k), "DONEMLER")
    R.append(("uret_devirler.oku_pencere", "regex-anahtar tırnaklama + JSON", devirler, "ayristirici"))

    def tavan200(k):
        kaynak = open(os.path.join(ARAC, "_tavan200_olc.py"), encoding="utf-8").read()
        js = re.search(r'JS = r"""(.*?)"""', kaynak, re.S).group(1)
        os.makedirs(os.path.join(os.path.dirname(k), "t200", "data"), exist_ok=True)
        cwd = os.path.join(os.path.dirname(k), "t200")
        shutil.copy(yol(k), os.path.join(cwd, "data", "donemler.js"))
        r = subprocess.run(["node", "-e", js], capture_output=True, text=True, encoding="utf-8", cwd=cwd, timeout=120)
        return (r.stdout + r.stderr).strip()
    R.append(("_tavan200_olc (node snippet)", "node eval", tavan200, "turetilmis"))

    def app_js(k):
        a = open(os.path.join(KOK, "js", "app.js"), encoding="utf-8").read()
        i = a.index("var donemler = window.DONEMLER.map(function (d) {")
        j = a.index("\n});", i) + 4
        D = json.loads(open(yol(k), encoding="utf-8").read().split("window.DONEMLER = ", 1)[1].split(";\n", 1)[0])
        js = ("global.window={DONEMLER:%s};function gunIdx(s){return s}function parcaCoz(a){return a}"
              "function hatCoz(x){return x||null}var PARCALAR=[],PARCA_HALKA=[];%s\n"
              "process.stdout.write(JSON.stringify(donemler.map(function(d){return {ad:d.ad,v:d.v,o:d.o,vk:('vk' in d)};})));"
              % (json.dumps(D), a[i:j]))
        r = subprocess.run(["node", "-e", js], capture_output=True, text=True, encoding="utf-8", timeout=120)
        if r.returncode != 0:
            raise RuntimeError(r.stderr.strip()[-200:])
        return json.loads(r.stdout)
    R.append(("js/app.js donemler.map (node, stub'lı)", "alan alan kopya", app_js, "turetilmis"))
    return R


# ------------------------------------------------------------------ ana
def main():
    print("ORTAM (başta): HEAD %s" % head())
    print("=" * 76)
    print("DONEMLER OKUYUCU SINAVI — vk yeni anahtarı")
    print("=" * 76)
    vk, vksiz, d0, d1 = metinler()
    tmp = tempfile.mkdtemp(prefix="donokuyucu-")
    sorun = 0
    satirlar = []
    try:
        kv, kn = os.path.join(tmp, "vk", "data"), os.path.join(tmp, "no", "data")
        yaz_klasor(kv, vk)
        yaz_klasor(kn, vksiz)
        for okuyucu in okuyucular(tmp, kv, kn, d0, d1):
            ad, mek, fn, tur = okuyucu
            try:
                kontrol = fn(kn)
            except BaseException as e:                       # noqa
                satirlar.append((ad, mek, "⚪ KURULUM", "kontrol (vk'sız) de çöktü: %s: %s" % (type(e).__name__, str(e)[:90])))
                continue
            try:
                sonuc = fn(kv)
            except BaseException as e:                       # noqa
                satirlar.append((ad, mek, "🔴 ÇÖKÜYOR", "%s: %s" % (type(e).__name__, str(e)[:100])))
                sorun += 1
                continue
            if tur == "ayristirici":
                if ayni(sonuc, d0) and ayni(kontrol, d1):
                    satirlar.append((ad, mek, "✅ TAŞIYOR", "DONEMLER birebir; vk değer ve sırasıyla geldi"))
                elif ayni(vk_sil(sonuc), kontrol):
                    satirlar.append((ad, mek, "✅ TAŞIYOR*", "vk'lı ve vk'sız çıktı arasındaki fark YALNIZ vk anahtarının kendisi (vk dışı AYNI)"))
                else:
                    satirlar.append((ad, mek, "🔴 SESSİZCE FARKLI", "vk dışında da fark var"))
                    sorun += 1
            else:
                if ayni(sonuc, kontrol):
                    satirlar.append((ad, mek, "✅ YOK SAYIYOR", "türetilmiş çıktı vk'lı ve vk'sızda AYNI"))
                elif ayni(vk_sil(sonuc), vk_sil(kontrol)) and "vk" in json.dumps(_norm(sonuc), default=str):
                    satirlar.append((ad, mek, "✅ TAŞIYOR*", "fark yalnız vk anahtarı"))
                else:
                    satirlar.append((ad, mek, "🔴 SESSİZCE FARKLI", "türetilmiş çıktı vk yüzünden DEĞİŞTİ"))
                    sorun += 1

        # ---- KONTROL (sınavın BOŞ KÜMEYE karşı geçmediğini kanıtlar): DÜŞMAN kimlik değeri "x, y: z".
        # Bazı okuyucular bare-anahtar tırnaklama regex'i (`([{,]\s*)(\w+)\s*:`) uygular; dize İÇİNDEKİ
        # `, y:` bir anahtar sanılıp JSON bozulur (girdi._cevir dersi, D225'in akrabası). Gerçek kid değerleri
        # [a-z0-9-] (ölçüldü: 28 kid, 478 dönem) ⇒ bugün TETİKLENMEZ; ama sınav bu sınıfı GÖREBİLİYOR mu?
        d_h = json.loads(json.dumps(d0))
        d_h[1]["vk"][0] = "x, y: z"
        J = lambda x: json.dumps(x, separators=(",", ":"))
        a_ = vk.index("window.DONEMLER = ") + len("window.DONEMLER = ")
        b_ = vk.index(";\n", a_)
        kh = os.path.join(tmp, "dusman", "data")
        yaz_klasor(kh, vk[:a_] + J(d_h) + vk[b_:])
        dusman_kirilan = []
        for ad, mek, fn, tur in okuyucular(tmp, kh, kn, d_h, d1):
            try:
                kontrol_ = fn(kn)
            except BaseException:                              # noqa
                continue
            try:
                s_ = fn(kh)
                if tur == "ayristirici":
                    ok_ = ayni(s_, d_h) or ayni(vk_sil(s_), kontrol_)
                else:
                    ok_ = ayni(s_, kontrol_) or ayni(vk_sil(s_), vk_sil(kontrol_))
                if not ok_:
                    dusman_kirilan.append((ad, "SESSİZCE FARKLI"))
            except BaseException as e:                         # noqa
                dusman_kirilan.append((ad, "çöktü: " + type(e).__name__))

        # ---- motor_esitlik.kiyas: beklenen fark (bayt) ama ANLAMSAL fark OLMAMALI
        me = importlib.import_module("motor_esitlik")
        eski = sys.stdout
        sys.stdout = io.StringIO()
        try:
            s = me.kiyas(kn, kv, sessiz=True)
        finally:
            sys.stdout = eski
        d = s["dosya"].get("donemler.js", {})
        yol = (d.get("ilk_fark") or {}).get("yol", "")
        # `anlamsal` boş DEĞİL "anlamsal fark YOK (fark yalnız havuz sırası/biçim)" döndürür: beklenen cevap bu.
        beklenen = d.get("durum") == "FARKLI" and ".vk" in yol and "fark YOK" in str(d.get("anlamsal")) \
            and all(s["dosya"][a]["durum"] == "AYNI" for a in s["dosya"] if a != "donemler.js")
        satirlar.append(("motor_esitlik.kiyas (bayt eşitlik kapısı)", "sha256 + ilk fark yolu + anlamsal fark",
                         "✅ BEKLENEN FARK" if beklenen else "🔴 BEKLENMEDİK",
                         "donemler.js %s · ilk fark yolu %r · anlamsal %r" % (d.get("durum"), yol, d.get("anlamsal"))))
        if not beklenen:
            sorun += 1

        # ---- (B) çalıştırılmayanlar: statik
        statik = []
        yayin = open(os.path.join(ARAC, "denetle_yayin.py"), encoding="utf-8").read()
        statik.append(("denetle_yayin", "yalnız KÜRESEL AD kütüğü (`window.X` adları); alan düzeyi kütük DEĞİL — `vk` bir JSON anahtarı olduğundan kapsamaz",
                       '"PARCALAR": "DONEMLER' in yayin))
        statik.append(("_komsu_donem", "DONEMLER'den yalnız başlık metni basıyor (ayrıştırma yok)", True))
        suz = open(os.path.join(KOK, "js", "suzgec.js"), encoding="utf-8").read()
        statik.append(("js/suzgec.js", "DONEMLER'i yalnız YORUMDA anıyor (kod okuması yok)",
                       not re.search(r"^[^/\n]*window\.DONEMLER", suz, re.M)))
        legacy = open(os.path.join(ARAC, "uret_donemler.py"), encoding="utf-8").read()
        statik.append(("uret_donemler.py", "ESKİ ÜRETİCİ: aynı `data/donemler.js`i vk'SIZ yazar (`{f,t,ad,b,o,v}`). Çalıştırılırsa motor çıktısını vk'sız bir dosyayla EZER",
                       "window.DONEMLER = " in legacy))
        tek = [f for f in glob.glob(os.path.join(DENETIM, "ARAC-*.py")) + glob.glob(os.path.join(DENETIM, "GOVDE-*.py"))
               if "DONEMLER" in open(f, encoding="utf-8", errors="replace").read()
               and not re.search(r"(KODLA-VK|DONEMLER-OKUYUCU|MOTOR-V-KID)", f)]
        statik.append(("denetim/ARAC-* tek seferlik ölçüm betikleri", "%d dosya DONEMLER'e değiyor; boru hattının parçası DEĞİL, ÇALIŞTIRILMADI (tarihsel ölçüm araçları)" % len(tek), True))

        # ---- ③ bilinmeyen-alan KÜTÜĞÜ taraması
        DKEYS = {"f", "t", "ad", "b", "ao", "av", "e", "c", "o", "v", "vl", "h", "sb", "z"}
        kutuk = []
        for f in sorted(glob.glob(os.path.join(ARAC, "*.py"))):
            if os.path.basename(f) in ("uret_petek.py", "uret_donemler.py"):
                continue
            try:
                agac = ast.parse(open(f, encoding="utf-8").read())
            except SyntaxError:
                continue
            for n in ast.walk(agac):
                if isinstance(n, (ast.Set, ast.List, ast.Tuple)):
                    s_ = {e.value for e in n.elts if isinstance(e, ast.Constant) and isinstance(e.value, str)}
                    if len(s_ & DKEYS) >= 6:
                        kutuk.append("%s:%d" % (os.path.basename(f), n.lineno))
    finally:
        shutil.rmtree(tmp, ignore_errors=True)

    print("  %-44s %-20s %s" % ("okuyucu", "sonuç", "kanıt"))
    for ad, mek, kova, kanit in satirlar:
        print("  %-44s %-20s %s" % (ad, kova, kanit))
        print("  %-44s %s" % ("", "mekanizma: " + mek))
    print("-" * 76)
    print("(B) ÇALIŞTIRILMAYAN okuyucular — statik:")
    for ad, aciklama, dogru in statik:
        print("  %s %-44s %s" % ("✅" if dogru else "⚠️", ad, aciklama if dogru else "BEKLENEN DESEN BULUNAMADI (statik okuma yanlış olabilir): " + aciklama))
    print("-" * 76)
    print("KONTROL — DÜŞMAN kimlik değeri 'x, y: z' (sınav bu sınıfı GÖREBİLİYOR mu?): %s" % (
        ", ".join("%s [%s]" % x for x in dusman_kirilan) if dusman_kirilan else "hiçbir okuyucu kırılmadı"))
    print("   Gerçek kid değerleri [a-z0-9-] (28 kid · 478 dönem, ölçüldü) ⇒ bu sınıf bugün TETİKLENMEZ; kimlik sözdizimini")
    print("   bir gün [a-z0-9-] dışına çıkarmak (virgül/iki nokta) bu okuyucuları bozar — `vk` şemasının KISITI olarak yazılı kalsın.")
    print("-" * 76)
    print("③ DONEMLER tarafında bilinmeyen-alan KÜTÜĞÜ taraması (≥6 dönem anahtarı içeren sabit liste/küme, arac/*.py):")
    print("   %s" % (("BULUNDU: " + ", ".join(kutuk)) if kutuk else
                      "YOK — yerleşim tarafında `girdi.BILINEN_ALANLAR` + `BILINEN_DONEM_ALANLARI` var, DONEMLER tarafında karşılığı YOK."))
    print("   (alan şeması yalnız uret_petek.py'de yazılıp js/app.js `donemler.map`te elle kopyalanıyor: yeni anahtar app.js'e")
    print("    eklenmezse SESSİZCE düşer; vk bu yüzden bugün yalnız `v` ile yan yana yaşar, tüketilmez.)")
    print("=" * 76)
    print("ORTAM (sonda): HEAD %s" % head())
    n = len(satirlar)
    print("SONUÇ: %s" % ("%d okuyucu: hiçbiri çökmedi, hiçbiri sessizce farklı davranmadı (vk taşıyor/yok sayıyor)" % n
                         if sorun == 0 else "%d okuyucuda KUSUR (çöken ya da sessizce farklı)" % sorun))
    return 0 if sorun == 0 else 1


if __name__ == "__main__":
    sys.exit(main())
