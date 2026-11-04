# PAYLAŞILAN SÜRÜM (UMIT SALI, 5 Kasım 2026; EMRELİC isteği) — denetim/DADIM-1104/brif/sayfa.py
# Kullanım: py -X utf8 sayfa.py oku "<url>" "<anahtar1,anahtar2>" 400  ·  tdv-ara "<kelime>"  ·  ia-ara "<sorgu>"  ·  ia-oku <kimlik> "<anahtarlar>"
# Ortam değişkenleri (isteğe bağlı): SAYFA_BEKLE=saniye (vars. 3; aynı makinedeki bütün ajanlar ortak bekler),
#   SAYFA_ZAMAN=<ortak zaman damgası dosyası> (vars. betiğin yanındaki .son_istek — paralel ajanlar AYNI dosyayı görmeli).
# ERİŞİLEMEYEN KAPILAR (deneme): Britannica (403), Iranica tahmin slug'ları (404; iranicaonline.org/articles/<slug> doğru biçimdir),
#   archive.org ödünç kitapları (401), Banrepcultural, academia.edu, Tynwald, APH/MoAD (robots). TDV'de slug TAHMİN ETME: önce tdv-ara.
"""sayfa.py oku <url> <anahtar1,anahtar2,...> [pencere]   — sayfayı çeker, anahtarların geçtiği yerleri basar
sayfa.py ia-ara <sorgu>                                   — archive.org kimlik + başlık + yıl listesi
sayfa.py ia-oku <kimlik> <anahtar1,...> [pencere]         — archive.org tam metninde (djvu.txt) anahtar arar
sayfa.py ham <url> [ilk_n_karakter]                       — sayfanın düz metninin başı (bağlantı görmek için)
sayfa.py tdv-ara <kelime>                                 — TDV arama sonuçlarından madde slug'ları
(TDV maddesi: sayfa.py oku "https://islamansiklopedisi.org.tr/<slug>" "<anahtarlar>")"""
import sys, re, html, json, os, time, urllib.request, urllib.parse, urllib.robotparser

sys.stdout.reconfigure(encoding="utf-8")
# Açık, genel istemci kimliği (tarayıcı taklidi yok). robots.txt'e uyulur; aynı makinede istekler
# arası en az BEKLE saniye. 403 / robots yasağı veren kaynak atlanır, aşılmaya çalışılmaz (EMRELİC, 4 Kasım 2026).
AD = "atlas-kaynak-teyidi"
UA = {"User-Agent": AD + "/1.0 (egitim amacli tarih atlasi; kaynak teyidi)"}
BEKLE = float(os.environ.get("SAYFA_BEKLE", "3.0"))
ZAMAN = os.environ.get("SAYFA_ZAMAN") or os.path.join(os.path.dirname(os.path.abspath(__file__)), ".son_istek")
_robots = {}


def robots_izin(url):
    p = urllib.parse.urlsplit(url)
    kok = "%s://%s" % (p.scheme, p.netloc)
    if kok not in _robots:
        rp = urllib.robotparser.RobotFileParser()
        try:
            req = urllib.request.Request(kok + "/robots.txt", headers=UA)
            with urllib.request.urlopen(req, timeout=30) as r:
                rp.parse(r.read().decode("utf-8", "replace").splitlines())
        except urllib.error.HTTPError as e:
            # 401/403: robots.txt'in kendisi kapalı = site botlara kapalı; 404: kural yok
            rp.parse(["User-agent: *", "Disallow: /"] if e.code in (401, 403) else [])
        except Exception:
            rp.parse([])
        _robots[kok] = rp
    return _robots[kok].can_fetch(AD, url)


def tempo():
    try:
        gecen = time.time() - os.path.getmtime(ZAMAN)
        if gecen < BEKLE:
            time.sleep(BEKLE - gecen)
    except OSError:
        pass
    open(ZAMAN, "w").close()


def al(url):
    # Türkçe/Çince vb. ASCII dışı karakterli URL'ler: yüzde-kodla (UnicodeEncodeError onarımı, 5 Kasım 2026)
    url = urllib.parse.quote(url, safe=":/?&=%#+,;@!$'()*[]~")
    if not robots_izin(url):
        raise PermissionError("robots.txt bu adresi yasaklıyor — kaynak atlanır: " + url)
    tempo()
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=60) as r:
        ham = r.read()
        kod = r.headers.get_content_charset()
        if not kod:
            m = re.search(rb'charset=["\']?([A-Za-z0-9_\-]+)', ham[:3000])
            kod = m.group(1).decode() if m else "utf-8"
        metin_ = ham.decode(kod, "replace")
        if metin_.count("�") > 20:   # yanlış beyan: Orta Avrupa sayfaları (MEK vb.)
            for k2 in ("utf-8", "cp1250", "iso-8859-2"):
                t2 = ham.decode(k2, "replace")
                if t2.count("�") < metin_.count("�"):
                    metin_ = t2
        return r.geturl(), r.status, metin_


def metin(h):
    h = re.sub(r"(?s)<script.*?</script>|<style.*?</style>", " ", h)
    h = re.sub(r"<br\s*/?>|</p>|</div>|</li>|</h\d>", "\n", h)
    h = re.sub(r"<[^>]+>", " ", h)
    return re.sub(r"[ \t\r]+", " ", html.unescape(h))


def bul(t, anah, pen):
    tl = t.lower()
    goruldu = []
    for a in anah:
        n = 0
        for mm in re.finditer(re.escape(a.lower()), tl):
            i = mm.start()
            if any(abs(i - g) < pen for g in goruldu):
                continue
            goruldu.append(i)
            n += 1
            print("---[%s]" % a, t[max(0, i - pen):i + pen].replace("\n", " "))
            if n >= 8:
                print("   (… [%s] için daha fazla eşleşme var)" % a)
                break
        if n == 0:
            print("---[%s] YOK" % a)


try:
    k = sys.argv[1]
    if k == "oku":
        u, s, h = al(sys.argv[2])
        t = metin(h)
        print("URL:", u, "durum", s, "uzunluk", len(t))
        bul(t, sys.argv[3].split(","), int(sys.argv[4]) if len(sys.argv) > 4 else 300)
    elif k == "ham":
        u, s, h = al(sys.argv[2])
        n = int(sys.argv[3]) if len(sys.argv) > 3 else 3000
        print("URL:", u, "durum", s)
        print(metin(h)[:n])
        for b in sorted(set(re.findall(r'href="([^"#]+)"', h)))[:80]:
            print("  ->", b)
    elif k == "tdv-ara":
        u, s, h = al("https://islamansiklopedisi.org.tr/arama/?q=" + urllib.parse.quote(sys.argv[2]))
        slugs = []
        for x in re.findall(r'href="/([a-z0-9\-]+)"', h):
            if x not in slugs and x not in ("arama", "hakkinda", "iletisim", "giris", "yardim", "kunye", "ilkeler",
                                            "duyurular", "dosyalar", "sergi-arsivi", "gecen-ayin-ilk-20-si", "iletisim-formu"):
                slugs.append(x)
        print("==", sys.argv[2], ":", " ".join(slugs[:25]))
    elif k == "ia-ara":
        q = urllib.parse.quote(sys.argv[2])
        u, s, h = al("https://archive.org/advancedsearch.php?q=%s&fl[]=identifier&fl[]=title&fl[]=date&rows=25&output=json" % q)
        for d in json.loads(h)["response"]["docs"]:
            print(d.get("identifier"), "|", str(d.get("date", ""))[:4], "|", d.get("title"))
    elif k == "ia-oku":
        i = sys.argv[2]
        # metin dosyasının adı kimlikten farklı olabilir: önce metadata'dan *_djvu.txt adını al
        _, _, mh = al("https://archive.org/metadata/%s" % i)
        adlar = [f["name"] for f in json.loads(mh).get("files", []) if f["name"].endswith("_djvu.txt")]
        if not adlar:
            raise FileNotFoundError("tam metin (_djvu.txt) yok — ödünç kilitli ya da taranmamış: " + i)
        if len(adlar) > 1 and len(sys.argv) > 5:
            adlar = [a for a in adlar if sys.argv[5].lower() in a.lower()] or adlar
        if len(adlar) > 1:
            print("BİRDEN ÇOK METİN (5. argümanla süz):", " | ".join(adlar[:20]))
        u, s, h = al("https://archive.org/download/%s/%s" % (i, urllib.parse.quote(adlar[0])))
        t = metin(h)
        print("URL:", u, "uzunluk", len(t))
        bul(t, sys.argv[3].split(","), int(sys.argv[4]) if len(sys.argv) > 4 else 300)
except Exception as e:
    print("HATA:", type(e).__name__, e)
