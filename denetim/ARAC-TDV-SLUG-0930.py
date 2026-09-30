# -*- coding: utf-8 -*-
"""TDV-SLUG-HARITA (30 Eylül 2026) — 295 kronolojisiz künye için TDV slug haritası.

Evren: denetim/KRONO-BOSLUK-0930.json `siralama_tek_boya` (335) − `tdv_ilk40` (40) = 295.
Sıra: yerlesim_yil yüksekten aşağı. Her künye bitince JSON'a yazılır (yarım harita kullanılabilir).

Yöntem (şartname):
  - https://islamansiklopedisi.org.tr/<slug> — yönlendirme İZLENMEZ, ham kod kaydedilir.
  - 200 → yalnız <title> okunur (gövde çekilmez; ilk ~16 KB).
  - 302 → ölü slug · 000/5xx → taşıma arızası, geri çekilip tekrar denenir (ölü SAYILMAZ).
  - içerik geçişi: ajax_search_auto.php?mdl=txtdelay&q=<ad> → "TDV bu adı N maddede anıyor"
    (kaynak var DEMEK DEĞİL).
Hüküm (otomatik, aday türünden + başlıktan):
  VAR       · 200, aday künyenin kendi adı/kimliği/hanedanı, başlık adayla uyumlu
  KAPSAYICI · 200 yalnız başkent/bölge/halk/kaynak-atfı adayında
  YANLIS?   · 200 ama başlık adayla uyuşmuyor (tuzak ② şüphesi — elle bakılmalı)
  BELIRSIZ  · canlı slug yok; içerik geçişi ayrıca verilir
  ARIZA     · yalnız 000/5xx alındı — ölçülemedi
"""
import json, re, sys, io, time, urllib.request, urllib.error, urllib.parse, http.client
sys.path.insert(0, "denetim")
import importlib.util
_sp = importlib.util.spec_from_file_location("nrm", "denetim/ARAC-NORMAL-0903.py")
_m = importlib.util.module_from_spec(_sp); _sp.loader.exec_module(_m)
norm = _m.norm

TABAN = "https://islamansiklopedisi.org.tr/"
CIKTI = "denetim/TDV-SLUG-HARITA-0930.json"
BEKLE = 0.35

GENEL = set("""kralligi krallik sultanligi sultanlik hanligi hanlik beyligi beylik devleti devlet
imparatorlugu imparatorluk halklari halki halk cumhuriyeti cumhuriyet konfederasyonu konfederasyon
sehir sehirleri sehri federasyonu emirligi emirlik seyhligi seyhlik prensligi prenslik dukaligi
dukalik hanedani hanedanligi hanedan ulkesi bolgesi toplulugu topluluklari kabileleri kabilesi
kavmi kavimleri reisligi sefligi seflikleri sefligi ve ile de da ittifaki birligi kolonisi
genel valiligi valiligi yonetimi atabegligi atabegleri hukumdarligi tahti despotlugu
voyvodaligi naibligi imamligi imameti meliklik melikligi racaligi mihracelik""".split())


DEVLET_ISARET = re.compile(r"(ogullari|lar$|ler$|lar-|ler-|hanligi|sultanligi|kralligi|devleti|hanedani"
                           r"|beyligi|imparatorlugu|emirligi|atabegleri|nizamligi|imamligi|seyhligi|dukaligi)")


def slugla(s):
    s = norm(s)
    s = re.sub(r"[^a-z0-9]+", "-", s).strip("-")
    return s


def cogul(w):
    # Türkçe ünlü uyumu: son ünlü kalınsa -lar, inceyse -ler
    for c in reversed(w):
        if c in "aiou":  # norm sonrası ı→i olduğu için 'i' belirsiz; aşağıda ham ada bakılır
            return None
        if c in "e":
            return w + "ler"
    return None


def cogul_ham(ham):
    """Ham (Türkçe) sözcükten doğru çoğul eki."""
    for c in reversed(ham.lower()):
        if c in "aıouâû":
            return "lar"
        if c in "eiöüî":
            return "ler"
    return "ler"


def kunyeler_oku():
    t = open("data/devletler.js", encoding="utf-8").read()
    bloklar = re.split(r'\{\s*id:"', t)[1:]
    out = {}
    for b in bloklar:
        i = b.split('"', 1)[0]
        def al(k):
            m = re.search(r'\b' + k + r':"((?:[^"\\]|\\.)*)"', b[:20000])
            return m.group(1) if m else ""
        out[i] = {"ad": al("ad"), "baskent": al("baskent"), "kaynak": al("kaynak")}
    return out


def adaylar(k, kun):
    """(slug, tur) listesi — tur: 'dogrudan' | 'kapsayici' | 'atif'"""
    ad = kun.get("ad") or k["ad"]
    c = []
    def ekle(s, tur):
        s = slugla(s)
        if s and len(s) >= 3 and s not in [x[0] for x in c]:
            c.append((s, tur))
    # künyenin kendi kaynak atfı (TDV slug'ı)
    kay = kun.get("kaynak", "")
    for m in re.findall(r"islamansiklopedisi\.org\.tr/([a-z0-9-]+)", kay):
        ekle(m, "atif")
    m = re.match(r"\s*([a-z0-9]+(?:-{1,2}[a-z0-9]+)*)\s+[—-]", kay)
    if m:
        ekle(m.group(1), "atif")
    for m in re.findall(r"TDV\s+([a-z][a-z0-9-]{2,})", kay):
        ekle(m, "atif")
    # kimlik
    ekle(k["id"], "dogrudan")
    ana = re.sub(r"\(.*?\)", "", ad).strip()
    ic = re.findall(r"\((.*?)\)", ad)
    ekle(ana, "dogrudan")
    # çekirdek sözcükler (genel sözler atılır)
    sozler = [w for w in re.split(r"[\s/,\-–]+", ana) if w]
    cek = [w for w in sozler if slugla(w) not in GENEL and len(slugla(w)) >= 3]
    if cek:
        ekle(" ".join(cek), "dogrudan")
        ekle(cek[0], "dogrudan")
        if not re.search(r"(lar|ler|lari|leri)$", slugla(cek[0])):
            ekle(cek[0] + cogul_ham(cek[0]), "dogrudan")
        if len(cek) > 1:
            ekle(cek[-1], "dogrudan")
    # kimlik parçaları
    parca = [p for p in k["id"].split("-") if p not in GENEL and len(p) >= 4]
    if parca and not re.search(r"(lar|ler|lari|leri)$", parca[0]):
        ekle(parca[0], "dogrudan")
        ekle(parca[0] + ("lar" if re.search(r"[aou][^aeiou]*$", parca[0]) else "ler"), "dogrudan")
    # hanlığı / sultanlığı biçimi (TDV: hive-hanligi, cagatay-hanligi)
    if cek and any(slugla(w) in ("hanligi", "sultanligi", "beyligi", "emirligi", "nizamligi") for w in sozler):
        ekle(ana, "dogrudan")
    # parantez içi (başkent/diğer ad)
    for x in ic:
        for y in re.split(r"[,/;]", x):
            ekle(y, "kapsayici")
    if kun.get("baskent"):
        for y in re.split(r"[,/;]", kun["baskent"]):
            ekle(re.sub(r"\(.*?\)", "", y), "kapsayici")
    return c[:12]


def istek(url, oku=False):
    """Ham kod — yönlendirme izlenmez. (kod, başlık)"""
    p = urllib.parse.urlsplit(url)
    for deneme in range(3):
        try:
            h = http.client.HTTPSConnection(p.netloc, timeout=20)
            h.request("GET", p.path + ("?" + p.query if p.query else ""),
                      headers={"User-Agent": "Mozilla/5.0 (atlas TDV-SLUG-HARITA; olcum)"})
            r = h.getresponse()
            kod = r.status
            govde = r.read(16000) if (oku or kod == 200) else b""
            h.close()
            if kod >= 500:
                time.sleep(3 * (deneme + 1))
                continue
            return kod, govde.decode("utf-8", "replace")
        except Exception:
            time.sleep(3 * (deneme + 1))
    return 0, ""


def baslik(html):
    m = re.search(r"<title>(.*?)</title>", html, re.S | re.I)
    if not m:
        return ""
    t = re.sub(r"\s+", " ", m.group(1)).strip()
    t = re.sub(r"\s*\|.*$", "", t)
    t = re.sub(r"\s*-\s*TDV.*$", "", t, flags=re.I)
    return t.strip()


def uyum(slug, bas):
    """başlık adayla uyumlu mu: slug'ın ana kökü başlıkta geçiyor mu"""
    b = slugla(bas)
    kok = slug.split("--")[0]
    if not b:
        return False
    if b == kok or b.startswith(kok) or kok.startswith(b):
        return True
    ilk = kok.split("-")[0]
    return len(ilk) >= 4 and ilk[:5] in b


def gecis(q):
    kod, g = istek(TABAN + "ajax_search_auto.php?mdl=txtdelay&q=" + urllib.parse.quote(q), oku=True)
    if kod != 200:
        return None
    m = re.search(r"\d+", g)
    return int(m.group()) if m else None


def main():
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
    d = json.load(open("denetim/KRONO-BOSLUK-0930.json", encoding="utf-8"))
    ilk = {x["id"] for x in d["tdv_ilk40"]}
    evren = [x for x in d["siralama_tek_boya"] if x["id"] not in ilk]
    evren.sort(key=lambda x: -x["yerlesim_yil"])
    print("EVREN", len(evren), "(beklenen 295)")
    global CIKTI
    if "--ters" in sys.argv:   # ikinci işçi: sondan başa, ayrı dosyaya (rapor birleştirir)
        evren.reverse()
        CIKTI = CIKTI.replace(".json", "-ters.json")
    kun = kunyeler_oku()
    try:
        onceki = {r["id"]: r for r in json.load(open(CIKTI, encoding="utf-8"))["kunyeler"]}
    except Exception:
        onceki = {}
    sonuc = []
    t0 = time.time()
    for n, k in enumerate(evren, 1):
        if k["id"] in onceki and onceki[k["id"]]["hukum"] != "ARIZA":
            sonuc.append(onceki[k["id"]]); continue
        kk = kun.get(k["id"], {})
        ad = kk.get("ad") or k["ad"]
        canli, olu, ariza, yanlis = [], [], [], []
        for slug, tur in adaylar(k, kk):
            kod, g = istek(TABAN + slug)
            time.sleep(BEKLE)
            if kod == 200:
                b = baslik(g)
                (canli if uyum(slug, b) else yanlis).append({"slug": slug, "baslik": b, "tur": tur})
            elif kod in (301, 302, 303, 307, 308, 404):
                olu.append(slug)
            else:
                ariza.append(f"{slug}:{kod}")
        # VAR yalnız başlık DEVLET/HANEDAN/HALK işareti taşıyorsa (tek sözcük yer adı —
        # KARAMAN, AYDIN, KIBRIS — şehir/ülke maddesidir ⇒ KAPSAYICI)
        dog = [c for c in canli if c["tur"] == "dogrudan" and DEVLET_ISARET.search(slugla(c["baslik"]))]
        if dog:
            hukum = "VAR"
        elif canli:
            hukum = "KAPSAYICI"
        elif yanlis:
            hukum = "YANLIS?"
        elif ariza and not olu:
            hukum = "ARIZA"
        else:
            hukum = "BELIRSIZ"
        # içerik geçişi — yalnız doğrudan madde yoksa (hız)
        ig = {}
        if hukum != "VAR":
            cek = [w for w in re.split(r"[\s/,\-–()]+", re.sub(r"\(.*?\)", "", ad))
                   if w and slugla(w) not in GENEL and len(slugla(w)) >= 3]
            for q in (cek[:1] or [k["id"].split("-")[0]]):
                v = gecis(q.lower() if not q.startswith("İ") else "i" + q[1:].lower())
                ig[q] = v
                time.sleep(BEKLE)
        r = {"id": k["id"], "ad": ad, "bolge": k["bolge"], "yerlesim_yil": k["yerlesim_yil"],
             "sira": k["sira"], "hukum": hukum,
             "canli_slug": [c["slug"] for c in canli],
             "baslik": [c["baslik"] for c in canli],
             "canli_tur": [c["tur"] for c in canli],
             "yanlis_madde_supheli": yanlis,
             "olu_slug": olu, "ariza": ariza, "icerik_gecisi": ig}
        sonuc.append(r)
        print(f"{n:3d}/{len(evren)} {k['id']:28s} {hukum:9s} {','.join(r['canli_slug'])[:60]}  ig={ig}", flush=True)
        if n % 5 == 0 or n == len(evren):
            yaz(sonuc, len(evren), t0)
    yaz(sonuc, len(evren), t0)


def yaz(sonuc, evren, t0):
    import collections
    json.dump({"olcum": "TDV-SLUG-HARITA-0930", "evren": evren, "olculen": len(sonuc),
               "sure_sn": round(time.time() - t0),
               "hukum_dagilimi": dict(collections.Counter(r["hukum"] for r in sonuc)),
               "kunyeler": sonuc},
              open(CIKTI, "w", encoding="utf-8"), ensure_ascii=False, indent=1)


if __name__ == "__main__":
    main()
