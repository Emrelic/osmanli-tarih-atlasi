# -*- coding: utf-8 -*-
"""KUNYE-DUNYA-0929 — 678 künyenin envanteri, kronoloji eşlemesi, eksik ve
şüpheli ömür listesi. YALNIZ ÖLÇER; data/ dosyalarına YAZMAZ.

    py -X utf8 denetim/ARAC-KUNYE-DUNYA-0929.py          # ölç + JSON yaz
    py -X utf8 denetim/ARAC-KUNYE-DUNYA-0929.py --ozet   # yalnız ekrana

ÇIKTI: denetim/KUNYE-DUNYA-0929.json (kardeş paketler okur)

KÜNYE → MADDE EŞLEMESİ — dört katman (her madde birden çok künyeye gidebilir)
  K1 kimlik alanı  devlet · devlet2 · devletler[] · kunye[] · taraflar[]
                   (durum_tablosu.KATMAN_ALANLARI ile aynı alanlar)
  K2 etiket        etiket[] içinde künye id'si birebir
  K3 dosya+pencere kronoloji_<x>.js → DOSYA_ADAYLARI[x] künyeleri; madde, t'si
                   künyenin [f,t] penceresine düşen adaya gider. Hiçbir
                   adayın penceresine düşmüyorsa PENCERE DIŞI sayılır (hayalet
                   işareti) ve en yakın adaya "pencere_disi" olarak yazılır.
  K4 ad geçişi     künye adının çekirdeği (sınıf sözcükleri atılmış) b/d
                   metninde geçiyor VE madde t'si künye penceresinde.
                   ZAYIF sinyaldir: ayrı sayılır, madde_sayisi'na KATILMAZ.
  madde_sayisi = |K1 ∪ K2 ∪ K3|  ·  ad_gecen = |K4 − (K1∪K2∪K3)|
  🔴 `devlet:` alanıyla eşleme (koordinatörün 484 sayısı) yalnız K1'in bir
     parçasıdır; ülke kronolojilerinde devlet DOSYANIN KENDİSİDİR (K3).
"""
import io, os, re, sys, json, subprocess, collections, unicodedata, contextlib

# ⚠️ stdout burada SARILMAZ: durum_tablosu import edilince kendi sarmalayıcısını
#    kurar ve öncekini kapatır ("I/O operation on closed file"). `py -X utf8` kullan.
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(KOK)
sys.path.insert(0, os.path.join(KOK, "arac"))
CIKTI = os.path.join("denetim", "KUNYE-DUNYA-0929.json")

# ─── 1. VERİYİ YÜKLE (node: dosyaları window bağlamında koşturur) ──────────
_JS = r"""
const vm=require('vm'),fs=require('fs');
const files=fs.readdirSync('data').filter(f=>/^(kronoloji|olaylar).*\.js$/.test(f)).sort();
const K=[];
for(const f of files){const w={};const c={window:w};vm.createContext(c);
 try{vm.runInContext(fs.readFileSync('data/'+f,'utf8'),c);}catch(e){console.error('HATA',f,e.message);continue;}
 for(const [g,arr] of Object.entries(w)){ if(!Array.isArray(arr))continue;
  arr.forEach((r,i)=>{if(r&&typeof r==='object'){const o={};
   for(const k of ['t','b','d','devlet','devlet2','devletler','kunye','taraflar','etiket','kaynak'])
     if(r[k]!==undefined)o[k]=r[k];
   o._f=f;o._g=g;o._i=i;K.push(o);}});}}
const w={};const c={window:w};vm.createContext(c);
vm.runInContext(fs.readFileSync('data/devletler.js','utf8'),c);
const D=w.DEVLETLER.map(d=>{const o=Object.assign({},d);o.kron_ic=(d.kronoloji||[]).length;delete o.kronoloji;delete o.ozet;return o;});
process.stdout.write(JSON.stringify({K,D,files}));
"""


def yukle():
    p = subprocess.run(["node", "-e", _JS], capture_output=True, cwd=KOK)
    if p.returncode:
        sys.exit("node hatası: " + p.stderr.decode("utf-8", "replace"))
    if p.stderr:
        print(p.stderr.decode("utf-8", "replace"), file=sys.stderr)
    return json.loads(p.stdout.decode("utf-8"))


# ─── 2. NORMALLEŞTİRME ────────────────────────────────────────────────────
def norm(s):
    s = (s or "").replace("İ", "i").replace("I", "ı").lower()
    s = s.replace("ı", "i")
    s = unicodedata.normalize("NFKD", s)
    s = "".join(c for c in s if not unicodedata.combining(c))
    s = s.replace("’", "'").replace("‘", "'")
    return s


def pad(t):
    """Üç haneli yıl dizgi karşılaştırması için (CLAUDE.md §3.5 · D205)."""
    t = (t or "")[:10]
    m = re.match(r"^(-?)(\d+)(.*)$", t)
    if not m:
        return t
    return m.group(1) + m.group(2).zfill(4) + m.group(3)


def tam(t):
    t = pad(t)
    if len(t) == 4:
        return t + "-01-01"
    if len(t) == 7:
        return t + "-01"
    return t


# ─── 3. SINIF — tur alanı + ad sözcüğü ────────────────────────────────────
# (ad içindeki sözcük, sınıf) — İLK eşleşen kazanır; sıra özelden genele
AD_SINIF = [
    (r"sehir[- ]devlet|serbest sehri|cumhuriyeti? \(?sehir", "sehir-devleti"),
    (r"voyvodaligi|knezligi|despotlugu|prensligi|prenslik|kontlugu|senyorlugu|hetmanligi", "knezlik-voyvodalik-prenslik"),
    (r"imparatorlugu|carligi", "imparatorluk"),
    (r"krallig|kralliklari|krallik|tac[ii]\b|zamorin|racalig|racaliklari|sunanlig", "krallik"),
    (r"emirlig|emirlikleri|imamlig|halifelig|almamilig|seyhlig|nevablig|nizamlig|atabeglig", "emirlik"),
    (r"sultanlig|sultanliklari", "sultanlik"),
    (r"hanlig|ordasi|samhallig", "hanlik"),
    (r"dukalig|dukaligi|dukalik", "dukalik"),
    (r"beylig|beylikleri|ogullari|oglu\b", "beylik"),
    (r"cumhuriyet", "cumhuriyet"),
    (r"konfederasyon|birligi|halki|halklari|ulusu|kabile|devletcikleri|seflik", "halk-konfederasyon"),
    (r"hanedan|hanedani|hanedanligi|soguluk|sogunlug", "hanedan"),
    (r"mandasi|kolonisi|protektora|isgali|idaresi|genel valiligi|dominyon|valilig|kondominyum|hindistani|guyanasi|cinhindi|malaya|hint adalari|brezilyasi|kongosu|mozambig|angolasi|ginesi|afrikasi|sudani|nijeryasi|kenyasi|rodezya|hondurasi|leone", "somurge-manda-isgal"),
    (r"eyaleti|sancagi|vilayeti|mutasarrif|ocagi", "eyalet-ocak"),
]


def ad_sinifi(ad):
    a = norm(ad)
    for rx, s in AD_SINIF:
        if re.search(rx, a):
            return s
    return "belirsiz"


# ─── 4. AD ÇEKİRDEĞİ (K4 için) ────────────────────────────────────────────
SINIF_SOZ = set(norm(x) for x in """
Krallığı Krallıkları Krallık İmparatorluğu Sultanlığı Sultanlıkları Hanlığı
Emirliği Emirlikleri Beyliği Beylikleri Devleti Devletleri Devletçikleri Dukalığı
Dükalığı Büyük Cumhuriyeti Prensliği Knezliği Voyvodalığı Despotluğu Hanedanı
Hanedanlığı Konfederasyonu Halkı Halkları Şehir Ulusu Tacı Çarlığı Şeyhliği
Nevablığı Şogunluğu Dönemi Mandası Kolonisi İmamlığı Halifeliği Birliği Ordası
Atabegliği Kontluğu Hükûmeti Hükümeti Racalığı Sunanlığı Almamiliği Paşalığı
Zamorinliği Seyyidleri Şeflikleri Kabile Protektorası Eyaleti Sancağı Ocağı
Vilayeti Mutasarrıflığı Kaptanlıkları Restorasyonu İdaresi Toprağı Genel Valiliği
Bağımsız Bağımsızlığı Özerk Demokratik Halk Sovyet Serbest Hür İkinci Birinci
Son Erken Sonrası Öncesi Dominyonu Selçuklu""".split())
GENEL = set(norm(x) for x in """osmanli dogu bati kuzey guney orta ingiliz fransiz
yukari asagi kiyi buyuk kucuk yeni eski ic dis ada adalari
ordu kasim kazan""".split())
# ⚠️ ordu/kasim/kazan: künye çekirdeği ama aynı zamanda sıradan Türkçe sözcük
#   (ordu · Kasım ayı · kazandı). İlk koşuda haciemir 66 · kasim 49 · kazan 91
#   sahte "ad geçişi" verdi.


def cekirdekler(d):
    ad = d["ad"]
    parca = [re.sub(r"\(.*?\)", " ", ad)] + re.findall(r"\((.*?)\)", ad)
    out = set()
    for p in parca:
        for q in re.split(r"\s*(?:/|→|—|·|,|\bve\b)\s*", p):
            w = [x for x in norm(q).replace("-", " ").split() if x]
            w = [x for x in w if x not in SINIF_SOZ and not re.match(r"^\d", x)]
            if not w:
                continue
            ph = " ".join(w)
            ph = re.sub(r"ogullari$", "ogul", ph)
            ph = re.sub(r"(lari|leri|liler|lilar)$", "", ph) if len(ph) > 8 else ph
            if len(ph.replace(" ", "")) < 4 or ph in GENEL:
                continue
            out.add(ph)
    return sorted(out)


# ─── 5. DOSYA → ADAY KÜNYELER (K3) ───────────────────────────────────────
# Tek soyun ya da tek devletin kronolojisini taşıyan dosyalar. Bölge dosyaları
# (anadolu, balkan, arabistan, orta_asya, guney_asya, dogu_afrika, kuzeyafrika,
# italya_sehir, hindistan, cok_1dunya_*, sinir_*) BURADA YOK: onlarda devlet
# dosyadan okunamaz, K1/K2/K4'e kalır.
DOSYA_ADAYLARI = {
    "kronoloji_akkoyunlu.js": ["akkoyunlu"],
    "kronoloji_karakoyunlu.js": ["karakoyunlu"],
    "kronoloji_almanya.js": ["almanya"],
    "kronoloji_altinorda.js": ["altinorda"],
    "kronoloji_atina_dukaligi.js": ["atina-dukaligi"],
    "kronoloji_bizans.js": ["bizans"],
    "kronoloji_fransa.js": ["fransa", "fransa-cumhuriyet"],
    "kronoloji_gurcistan.js": ["gurcistan", "gurcistan-demokratik-cumhuriyeti"],
    "kronoloji_habsburg.js": ["habsburg", "avusturya-cumhuriyet"],
    "kronoloji_hollanda.js": ["hollanda"],
    "kronoloji_ingiltere.js": ["ingiltere"],
    "kronoloji_iran.js": ["ilhanli", "safevi", "afsar", "zend", "kacar", "iran"],
    "kronoloji_ispanya.js": ["kastilya", "aragon", "ispanya"],
    "kronoloji_isvec.js": ["isvec-birlik-oncesi", "isvec"],
    "kronoloji_katalan.js": ["katalan"],
    "kronoloji_kirim.js": ["kirim"],
    "kronoloji_lehistan.js": ["polonya-erken", "lehistan", "varsova-dukaligi",
                              "kongre-polonyasi", "polonya"],
    "kronoloji_macaristan.js": ["macaristan", "macaristan-habsburg", "macaristan-naiplik"],
    "kronoloji_memluk.js": ["memluk"],
    "kronoloji_misir.js": ["memluk", "misir-eyaleti", "fransiz-misir-seferi", "misir-kavalali",
                           "misir-sultanligi", "misir-kralligi"],
    "kronoloji_naksa_dukaligi.js": ["naksa-dukaligi"],
    "kronoloji_ozbek.js": ["buhara", "hive", "hokand"],
    "kronoloji_portekiz.js": ["portekiz"],
    "kronoloji_rodos_sovalyeleri.js": ["rodos-sovalyeleri"],
    "kronoloji_rusya.js": ["moskova", "rusya", "rusya-gecici-hukumet", "sovyet-rusya"],
    "kronoloji_safevi.js": ["safevi"],
    "kronoloji_sirbistan.js": ["sirbistan-nemanjic", "sirp-despotlugu", "sirbistan-eyaleti",
                               "sirbistan-prensligi", "sirbistan-kralligi", "yugoslavya"],
    "kronoloji_timurlu.js": ["timurlu"],
    "kronoloji_venedik.js": ["venedik"],
    "kronoloji_japonya.js": ["kamakura", "kenmu", "muromachi", "azuchi-momoyama",
                             "edo-bakufu", "meiji-japonya"],
    "kronoloji_cin.js": ["song", "yuan-hanedani", "ming-hanedani", "qing-hanedani",
                         "cin-cumhuriyeti"],
}
YUKLENMEYEN = {"kronoloji_sinir_guney_g8.js"}  # durum_tablosu.katman_evreni notu

KIMLIK_DIZI = ("devletler", "kunye", "taraflar")
KIMLIK_DIZE = ("devlet", "devlet2")


def esle(K, D):
    ids = {d["id"] for d in D}
    by = {d["id"]: d for d in D}
    cek = {d["id"]: cekirdekler(d) for d in D}
    k1, k2, k3, k4 = (collections.defaultdict(set) for _ in range(4))
    disi = collections.defaultdict(list)       # künye → pencere dışı madde
    dosya_disi = collections.Counter()
    # K4 için ön hazırlık: çekirdek → künyeler
    rx = {}
    for kid, cs in cek.items():
        for c in cs:
            rx.setdefault(c, set()).add(kid)
    derli = [(c, re.compile(r"(?<![a-z])" + re.escape(c)), kids) for c, kids in rx.items()]
    for n, r in enumerate(K):
        t = tam(r.get("t"))
        for a in KIMLIK_DIZI:
            v = r.get(a)
            if isinstance(v, list):
                for x in v:
                    if x in ids:
                        k1[x].add(n)
        for a in KIMLIK_DIZE:
            x = r.get(a)
            if isinstance(x, str) and x in ids:
                k1[x].add(n)
        for x in (r.get("etiket") or []):
            if isinstance(x, str) and x in ids:
                k2[x].add(n)
        ad = DOSYA_ADAYLARI.get(r["_f"])
        if ad:
            ic = [k for k in ad if pad(by[k]["f"]) <= t <= pad(by[k]["t"])]
            if ic:
                for k in ic:
                    k3[k].add(n)
            else:
                dosya_disi[r["_f"]] += 1
                def uzak(k):
                    f, tt = pad(by[k]["f"]), pad(by[k]["t"])
                    return 0 if f <= t <= tt else min(abs(int(t[:4]) - int(f[:4])), abs(int(t[:4]) - int(tt[:4])))
                k = min(ad, key=uzak)
                disi[k].append(n)
        metin = norm((r.get("b") or "") + " " + (r.get("d") or ""))
        for c, cr, kids in derli:
            if c in metin and cr.search(metin):
                for k in kids:
                    if pad(by[k]["f"]) <= t <= pad(by[k]["t"]):
                        k4[k].add(n)
    return k1, k2, k3, k4, disi, dosya_disi, cek


# ─── 5b. SİTENİN GERÇEKTE GÖSTERDİĞİ (app.js:13516 + 13572'nin AYNASI) ───
# Anlamsal eşleme (K1-K3) "madde hangi devlete ait" der; bu katman "sitede o
# künyenin kronoloji panelinde KAÇ madde görünüyor" der. İkisi farklıdır
# (M-5396): KRONOLOJI_<X> künyeye YALNIZ X.lower() (sonra _→-) ile bağlanır ve
# künyenin kendi maddelerini EZER (`=`). SINIR/COK dosyaları taraflar ||
# devletler || [devlet] üzerinden EKLER (t+b mükerreri atılır).
# ⚠️ app.js'in KRONOLOJI_ID_OZEL tablosu 29 Eylül'de BOŞ ({}); dolarsa buraya da yaz.
def sitede(K, D):
    ids = {d["id"]: d for d in D}
    kron = {d["id"]: None for d in D}          # None = künyenin kendi listesi
    baglanan, eslenmeyen, ezilen = {}, {}, []
    gl = collections.defaultdict(list)
    for n, r in enumerate(K):
        if r["_f"] in YUKLENMEYEN or not r["_g"].startswith("KRONOLOJI_"):
            continue
        gl[r["_g"]].append(n)
    ek = collections.defaultdict(list)
    for g, ns in sorted(gl.items()):
        if re.match(r"^KRONOLOJI_(SINIR|COK)_", g):
            continue
        a = g[10:].lower()
        aday = [a] + ([a.replace("_", "-")] if "_" in a else [])
        hit = next((x for x in aday if x in ids), None)
        if hit:
            if ids[hit]["kron_ic"]:
                ezilen.append(hit)
            kron[hit] = [("dosya", n) for n in ns]
            baglanan[g] = hit
        else:
            eslenmeyen[g] = len(ns)
    say = {}
    for i, d in ids.items():
        say[i] = len(kron[i]) if kron[i] is not None else d["kron_ic"]
    gorulen = collections.defaultdict(set)
    for g, ns in gl.items():
        if not re.match(r"^KRONOLOJI_(SINIR|COK)_", g):
            continue
        for n in ns:
            r = K[n]
            tl = r.get("taraflar") or r.get("devletler") or ([r["devlet"]] if r.get("devlet") else [])
            for x in tl:
                if x in ids and (r.get("t"), r.get("b")) not in gorulen[x]:
                    gorulen[x].add((r.get("t"), r.get("b")))
                    say[x] += 1
    return say, baglanan, eslenmeyen, ezilen


# ─── 6. KRONOLOJİDE ADI GEÇEN AMA KÜNYESİ OLMAYAN YAPILAR (③ veri ayağı) ──
YAPI_RX = re.compile(
    r"((?:[A-ZÇĞİÖŞÜÂÎÛ][\wçğıöşüâîûé'’\-]+\s){1,3}"
    r"(?:Beyliği|Beylikleri|Hanlığı|Emirliği|Emirlikleri|Krallığı|Despotluğu|Prensliği|"
    r"Knezliği|Voyvodalığı|Sultanlığı|Dukalığı|Dükalığı|Şeyhliği|Atabegliği|İmamlığı|"
    r"Cumhuriyeti|Çarlığı|Hetmanlığı|Kontluğu|Şamhallığı|Markizliği|Senyörlüğü))")


def adsiz_yapilar(K, D, cek):
    tum = set()
    for cs in cek.values():
        tum |= set(cs)
    adlar = {norm(re.sub(r"\(.*?\)", "", d["ad"])).strip() for d in D}
    say = collections.Counter()
    ornek = {}
    for n, r in enumerate(K):
        for alan in ("b", "d"):
            for m in YAPI_RX.finditer(r.get(alan) or ""):
                ph = m.group(1).strip()
                w = norm(ph).replace("-", " ").split()
                core = " ".join(x for x in w if x not in SINIF_SOZ)
                core = re.sub(r"'.*$", "", core).strip()
                if not core or core in GENEL or len(core) < 4:
                    continue
                if any(core == c or core.startswith(c) or c.startswith(core) for c in tum):
                    continue
                if norm(ph) in adlar:
                    continue
                say[ph] += 1
                ornek.setdefault(ph, []).append("%s %s#%d" % (r.get("t"), r["_f"], 0))
    return say, ornek


# ─── 7. HARİTA KULLANIMI + RENKSİZ KOVALAR (durum_tablosu otoritesi) ───────
def harita_ve_renk():
    import girdi, durum_tablosu as dt
    kul, diz = dt.kimlik_evreni()
    with contextlib.redirect_stdout(io.StringIO()):
        import renkler
        Y = girdi.yukle(sessiz=True)
    boyalar = set(renkler.BOYALAR)
    kn = {k["id"]: (k.get("harita") or "") for k in girdi.oku_devletler()}
    delik, sessiz, tabi = dt.renksiz_kovalari(boyalar, set(kn), kn, kul, dt.v_kid_sayaci(Y))
    # 🔴 29 Eylül 2026: index.html artık paket_*.js yüklüyor; katman_evreni()
    #    src'den okuduğu için 4 kronoloji / 0 sınır dosyası görüyordu (M-5395).
    #    Canlı küme = index src ∪ paket_kunye.json kaynakları.
    _orj = dt._oku

    def _oku2(y):
        s = _orj(y)
        if y == "index.html":
            pk = json.load(io.open("data/paket_kunye.json", encoding="utf-8"))
            s += "".join('src="%s"' % k["yol"] for p in pk["paketler"] for k in p["kaynak"])
        return s
    dt._oku = _oku2
    kat, katdosya = dt.katman_evreni()
    dt._oku = _orj
    _, katdosya_eski = dt.katman_evreni()
    baska, gercek = dt.sessiz_bol(sessiz, kat)
    eksik, kasitli = dt.bosluk_kovalari(kul, diz)
    return dict(kul=kul, vkid=dt.v_kid_sayaci(Y), boyalar=boyalar, delik=delik,
                sessiz=sessiz, tabi=tabi, baska=baska, gercek=gercek,
                katdosya=katdosya, katdosya_eski=katdosya_eski,
                gercek_eski=dt.sessiz_bol(sessiz, dt.katman_evreni()[0])[1],
                dizinsiz=sorted(eksik), kasitli=sorted(kasitli))


# ─── 8. ÖMÜR ŞÜPHESİ — mekanik sinyaller (hüküm DEĞİL, işaret) ─────────────
def mekanik_supheler(D, disi, K):
    by = {d["id"]: d for d in D}
    s = []
    for d in D:
        f, t = pad(d["f"]), pad(d["t"])
        if f >= t:
            s.append(dict(id=d["id"], alan="f/t", veri="%s ≥ %s" % (d["f"], d["t"]),
                          sinyal="ters ya da sıfır uzunluk"))
        for tb in d.get("tabi") or []:
            if pad(tb["f"]) < f or pad(tb["t"]) > t:
                s.append(dict(id=d["id"], alan="tabi", veri=str(tb), sinyal="tabi künye penceresini aşıyor"))
    for kid, ns in disi.items():
        if len(ns) >= 1:
            ts = sorted(tam(K[n]["t"]) for n in ns)
            s.append(dict(id=kid, alan="f/t", veri="%s..%s" % (by[kid]["f"], by[kid]["t"]),
                          sinyal="kendi dosyasında %d madde pencere DIŞINDA (%s … %s)" % (len(ns), ts[0], ts[-1])))
    return s


TUR_SINIF = {"krallik": "krallik", "imparatorluk": "imparatorluk", "sultanlik": "sultanlik",
             "hanlik": "hanlik", "beylik": "beylik", "emirlik": "emirlik", "dukalik": "dukalik",
             "cumhuriyet": "cumhuriyet", "prenslik": "knezlik-voyvodalik-prenslik"}


def tur_ad_celiski(D):
    """`tur` alanı ile ADIN söylediği sınıf çelişiyor mu (her ikisi de belirli ise)."""
    out = []
    for d in D:
        a = ad_sinifi(d["ad"])
        t = TUR_SINIF.get(d.get("tur") or "")
        if t and a not in ("belirsiz",) and a != t and not (a == "sehir-devleti" and t == "cumhuriyet"):
            out.append(dict(id=d["id"], ad=d["ad"], tur=d.get("tur"), ad_sinifi=a))
    return out


# ─── 10. ELLE SINIFLANAN LİSTELER — her satırın dayanağı yazılı ───────────
# TDV cümleleri `--tdv` ile 29 Eylül 2026'da çekildi (yönlenme izlenmeden; 302 =
# ölü slug). "bulunamadı" = slug tutmadı ya da gövde boilerplate; UYDURULMADI.
# Ölçüt (③): 1281-1923 arasında Osmanlı ile DOĞRUDAN temas (sınır · tâbilik ·
# savaş/antlaşma) + künyesi YOK + dayanağı var (TDV cümlesi ya da atlasın kendi
# kronolojisinde adının geçmesi — adsiz_yapilar). Öncelik: 1 komşu · 2 tâbi ·
# 3 Anadolu/Balkan beyliği · 4 öteki.
EKSIK = [
 # öncelik 1-2 — Osmanlı komşusu / tâbisi
 dict(onerilen_id="dogu-macar-kralligi", ad="Doğu Macar Krallığı / Erdel Voyvodalığı (Zapolya)", oncelik=2,
      gerekce="erdel künyesi 1570'te başlıyor; TDV 1541'i veriyor — ayrı künye DEĞİL, erdel'in GENİŞLETİLMESİ daha doğru olabilir (supheli_omur: erdel)",
      kaynak="TDV `erdel`: '1541'de Erdel Osmanlılar'a bağlı haraçgüzâr statüsünde bir voyvodalık haline geldi'"),
 dict(onerilen_id="vidin-carligi", ad="Vidin Çarlığı (İvan Sracimir)", oncelik=2,
      gerekce="bulgar-carligi 1185-1396 Tırnova ile Vidin'i tek künyede tutuyor; kronolojide 'Vidin Prensliği' 1396 maddesi var",
      kaynak="TDV `vidin`: İvan Aleksandr '1360'tan kısa bir süre önce' Vidin'i Sracimir'e verip yarı bağımsız prenslik yaptı; 1396 Niğbolu",
      omur="f: ~1356-1360 (TDV 'kısa bir süre önce' — gün YOK) · t: 1396"),
 dict(onerilen_id="dobruca-despotlugu", ad="Dobruca (Karvuna) Despotluğu — Balık, Dobrotiç, İvanko", oncelik=1,
      gerekce="Osmanlı'nın 14. yy Tuna komşusu; 1388 Eflak, 1394 Yıldırım",
      kaynak="TDV `dobruca`: Dobrotiç '1359'da Kuzey Dobruca'yı işgal'; '1394'te Yıldırım Bayezid tarafından mağlûp'"),
 dict(onerilen_id="aka-prensligi", ad="Aka (Achaea) Prensliği", oncelik=1,
      gerekce="Mora'da 1205-1432 Latin prensliği; mora-despotlugu yalnız Bizans kolunu tutuyor",
      kaynak="TDV `mora`: Mora 'Achaea Prensliği'nin bir parçası haline getirildi'"),
 dict(onerilen_id="epir-despotlugu", ad="Epir (Yanya) Despotluğu — Tocco dönemi dâhil", oncelik=1,
      gerekce="Yanya 1430'da Osmanlı'ya geçti; künye yok",
      kaynak="TDV `yanya` (canlı; `epir` 302 ölü): 'Haçlı Seferi'nden sonra Despot I…' — tarih cümlesi okunmadı"),
 dict(onerilen_id="midilli-gattilusio", ad="Midilli Gattilusio Senyörlüğü", oncelik=2,
      gerekce="Osmanlı'ya haraçgüzar Cenevizli ada yönetimi, 1462 Fâtih",
      kaynak="TDV `midilli`: 'Gattilusio ailesi 1462 yılına kadar iktidarda kaldı'"),
 dict(onerilen_id="sakiz-maonasi", ad="Sakız Maonası (Ceneviz şirket yönetimi)", oncelik=2,
      gerekce="1346-1566; cenova künyesi altında mı ayrı mı — HÜKÜM koordinatörde",
      kaynak="TDV `sakiz-adasi`: '1346'da Cenovalı Simone Vignosi … burayı işgal etti (15-21 Haziran)'"),
 dict(onerilen_id="sicilya-kralligi", ad="Sicilya Krallığı (Aragon/İspanya tacı, 1282-1816)", oncelik=1,
      gerekce="napoli künyesi 'Napoli / İki Sicilya' 1282'den başlıyor; Sicilya 1816'ya dek AYRI taçtı. Kronolojide 'Sicilya Krallığı' 4 + 'Trinacria' 1 geçiş",
      kaynak="TDV `sicilya` (canlı; krallık cümlesi 1194 Hohenstaufen) — 1282/1816 cümlesi ÇEKİLMEDİ"),
 dict(onerilen_id="kafkas-imameti", ad="Kafkas İmâmeti (Gazi Muhammed → Şeyh Şâmil)", oncelik=1,
      gerekce="Osmanlı'nın Kırım Savaşı müttefiki; 1859'a dek Dağıstan-Çeçenya",
      kaynak="TDV `seyh-samil` (canlı) — kuruluş/bitiş cümlesi çekilmedi; TDV `kumuklar`: Şâmil'in mücadelesi 1859'da başarısızlık"),
 dict(onerilen_id="karabag-hanligi", ad="Karabağ Hanlığı", oncelik=1, gerekce="Osmanlı-İran-Rus arasında Azerbaycan hanlığı",
      kaynak="TDV `karabag` (canlı) — hanlık tarihleri çekilmedi"),
 dict(onerilen_id="gence-hanligi", ad="Gence Hanlığı", oncelik=1, gerekce="aynı", kaynak="TDV `gence` (canlı) — hanlık tarihleri çekilmedi"),
 dict(onerilen_id="seki-hanligi", ad="Şeki Hanlığı", oncelik=1, gerekce="aynı", kaynak="TDV `seki`: 'Azerbaycan'da bir hanlığın merkezi olan şehir'"),
 dict(onerilen_id="baku-hanligi", ad="Bakü Hanlığı", oncelik=1, gerekce="aynı",
      kaynak="TDV `baku`: 'Bağımsız Bakü Hanlığı kurulduğunda (1747)… Gülistan Antlaşması (1813) ile kesin olarak Rusya'ya geçti'"),
 dict(onerilen_id="nahcivan-hanligi", ad="Nahçıvan Hanlığı", oncelik=1, gerekce="aynı", kaynak="TDV `nahcivan` (canlı) — hanlık cümlesi çekilmedi"),
 dict(onerilen_id="revan-hanligi", ad="Revan (Çukursaad) Hanlığı", oncelik=1, gerekce="Osmanlı 1724-1736 işgali; 1828 Türkmençay",
      kaynak="TDV `revan`: 'Safevîler … Sa'dçukuru Revan Hanlığı'nı oluşturdu'"),
 dict(onerilen_id="sirvan-hanligi", ad="Şirvan (Şamahı) Hanlığı", oncelik=1, gerekce="Şirvanşahlar 1538'de bitiyor; ardıl hanlık yok",
      kaynak="bulunamadı (`semahi`/`samahi` 302)"),
 dict(onerilen_id="derbent-hanligi", ad="Derbent Hanlığı", oncelik=1, gerekce="aynı", kaynak="bulunamadı (`derbent` 302)"),
 dict(onerilen_id="kartli-kralligi", ad="Kartli Krallığı / Kartli-Kaheti Krallığı (1762-1801)", oncelik=1,
      gerekce="gurcistan künyesi 'Krallıkları' diye toplu; kronolojide 'Kartli-Kaheti Çarlığı' 2 + 1 geçiş",
      kaynak="TDV `tiflis` (canlı) — krallık tarihleri çekilmedi"),
 dict(onerilen_id="samtshe-atabegligi", ad="Samtshe (Ahıska/Çıldır) Atabegliği", oncelik=2,
      gerekce="1578 sonrası Çıldır eyaleti; Osmanlı'nın doğrudan komşusu/tâbisi",
      kaynak="TDV `ahiska`: 'bölgedeki mahallî valiler yarı bağımsız olarak atabeg unvanını aldılar'"),
 dict(onerilen_id="megrelya-prensligi", ad="Megrelya (Dadiani) Prensliği", oncelik=2, gerekce="Osmanlı haraçgüzarı", kaynak="bulunamadı (`megrel`/`megrelya` 302)"),
 dict(onerilen_id="abhazya-prensligi", ad="Abhazya (Şervaşidze) Prensliği", oncelik=2, gerekce="Osmanlı haraçgüzarı", kaynak="bulunamadı (`abhazya`/`abhaz` 302)"),
 dict(onerilen_id="ukrayna-halk-cumhuriyeti", ad="Ukrayna Halk Cumhuriyeti", oncelik=1,
      gerekce="9 Şubat 1918 Brest-Litovsk'ta Osmanlı'nın antlaşma tarafı; kronolojide 1 geçiş",
      kaynak="TDV `ukrayna`: '1917 Ekim İhtilâli… Ukraynalılar'a bağımsızlıklarını ilân etmek için beklenen fırsatı verdi'"),
 dict(onerilen_id="kazak-hetmanligi", ad="Kazak Hetmanlığı (Hmelnitski → Doroşenko)", oncelik=2,
      gerekce="Doroşenko'nun Osmanlı tâbiliği; zaporojye künyesi Sech'i tutuyor, Hetmanlığı değil — kronolojide 'Ukrayna Kazak Hetmanlığı' 1654",
      kaynak="TDV `ukrayna` (canlı) — hetman cümlesi çekilmedi"),
 dict(onerilen_id="dagli-cumhuriyeti", ad="Kuzey Kafkasya Dağlılar Cumhuriyeti (1918-1920)", oncelik=1,
      gerekce="Osmanlı 1918'de tanıdı, Kafkas İslâm Ordusu", kaynak="bulunamadı (TDV `dagistan` canlı; cümle çekilmedi)"),
 dict(onerilen_id="cenub-i-garbi-kafkas", ad="Cenûb-i Garbî Kafkas Hükûmeti (Kars, 1918-1919)", oncelik=1,
      gerekce="Mondros sonrası Elviye-i Selâse", kaynak="TDV `kars`: '3 Mart 1918 … Brest-Litovsk … Kars, Ardahan ve Batum Osmanlı Devleti'ne verildi' — hükûmet cümlesi çekilmedi"),
 dict(onerilen_id="aras-turk-cumhuriyeti", ad="Aras Türk Cumhuriyeti (1918-1919)", oncelik=1,
      gerekce="kronolojide geçiyor (olaylar_p0057 'Aras Cumhuriyeti')", kaynak="atlasın kendi maddesi — bağımsız kaynak çekilmedi"),
 dict(onerilen_id="kalmuk-hanligi", ad="Kalmuk (İdil) Hanlığı", oncelik=1,
      gerekce="Kırım/Nogay/Osmanlı komşusu 17-18. yy; kronolojide 'İdil Kalmukları Hanlığı' 1632",
      kaynak="TDV `kalmuklar` (canlı) — hanlık cümlesi çekilmedi"),
 dict(onerilen_id="bagdat-memlukleri", ad="Bağdat Memlükleri (Irak, 1749-1831)", oncelik=2,
      gerekce="Osmanlı eyaleti içinde yarı özerk hanedan", kaynak="bulunamadı (`irak` 302)"),
 dict(onerilen_id="zahir-el-omer", ad="Zâhir el-Ömer'in Akka yönetimi", oncelik=2, gerekce="18. yy Filistin'de yarı bağımsız",
      kaynak="TDV `zahir-el-omer` (canlı) — tarih cümlesi çekilmedi"),
 dict(onerilen_id="bitlis-emirligi", ad="Bitlis (Rojiki) Emirliği", oncelik=2, gerekce="Kürt hükûmeti, 1515 sonrası Osmanlı tâbisi",
      kaynak="TDV `bitlis` (canlı) — emirlik cümlesi çekilmedi"),
 dict(onerilen_id="hakkari-beyligi", ad="Hakkâri Beyliği", oncelik=2, gerekce="aynı", kaynak="TDV `hakkari` (canlı) — beylik cümlesi çekilmedi"),
 dict(onerilen_id="cizre-bohtan-emirligi", ad="Cizre-Bohtan Emirliği", oncelik=2, gerekce="aynı (Bedirhan 1847)", kaynak="TDV `cizre` (canlı, gövde boş — tuzak ③); `bohtan` 302"),
 dict(onerilen_id="soran-emirligi", ad="Soran Emirliği", oncelik=2, gerekce="aynı", kaynak="bulunamadı (`soran`, `soran-emirligi` 302)"),
 dict(onerilen_id="baban-emirligi", ad="Baban Emirliği", oncelik=2, gerekce="aynı", kaynak="bulunamadı (`baban`, `babanogullari` 302)"),
 dict(onerilen_id="behdinan-emirligi", ad="Behdinan (İmâdiye) Emirliği", oncelik=2, gerekce="aynı", kaynak="bulunamadı (`imadiye`, `bahdinan` 302)"),
 dict(onerilen_id="erdelan-emirligi", ad="Erdelan Emirliği", oncelik=1, gerekce="Osmanlı-İran sınırında", kaynak="bulunamadı (`erdelan`, `ardalan` 302)"),
 dict(onerilen_id="resuliler", ad="Resûlîler (Yemen)", oncelik=4, gerekce="kronolojide 'Resûlî Sultanlığı' 2 geçiş (memluk dosyası)",
      kaynak="TDV `resuliler`: 'Yemen'de 1229-1454 yılları arasında hüküm süren muhtemelen Türkmen asıllı bir hânedan'", omur="1229 · 1454 (TDV, yıl)"),
 dict(onerilen_id="tahiriler", ad="Tâhirîler (Yemen)", oncelik=1, gerekce="1517-1538 Osmanlı-Memlük Yemen seferinin karşı tarafı",
      kaynak="bulunamadı (`tahiriler`, `tahiri`, `tahiriler-yemen` 302)"),
 # öncelik 4 — kronolojide adı geçen, Osmanlı'dan uzak
 dict(onerilen_id="ligurya-cumhuriyeti", ad="Ligurya Cumhuriyeti (1797-1805)", oncelik=4, gerekce="cenova'nın ardılı; kronolojide 6 geçiş", kaynak="atlasın kendi maddeleri"),
 dict(onerilen_id="batav-cumhuriyeti", ad="Batav Cumhuriyeti / Holland Krallığı (1795-1810)", oncelik=4,
      gerekce="hollanda künyesi 1581-1923'ü 'Cumhuriyet' diye tek tutuyor",
      kaynak="TDV `hollanda`: 'Fransız himayesinde Batav Cumhuriyeti kuruldu (1795)'"),
 dict(onerilen_id="lombardiya-venedik", ad="Lombardiya-Venedik Krallığı (1815-1866)", oncelik=4, gerekce="kronolojide 2 geçiş; milano-dukaligi 1859'a uzanıyor", kaynak="atlasın kendi maddeleri"),
 dict(onerilen_id="oyrat-hanligi", ad="Oyrat Hanlığı (Cungar öncesi)", oncelik=4, gerekce="kronolojide 5+1 geçiş", kaynak="atlasın kendi maddeleri"),
 dict(onerilen_id="moldova-demokratik-cumhuriyeti", ad="Moldova Demokratik Cumhuriyeti (1917-1918)", oncelik=4, gerekce="kronolojide 1 geçiş", kaynak="atlasın kendi maddesi"),
 dict(onerilen_id="kurland-dukaligi", ad="Kurland Dukalığı (1561-1795)", oncelik=4, gerekce="kronolojide 1 geçiş", kaynak="atlasın kendi maddesi"),
 dict(onerilen_id="ilorin-emirligi", ad="İlorin Emirliği", oncelik=4, gerekce="kronolojide 2 geçiş", kaynak="atlasın kendi maddeleri"),
 dict(onerilen_id="hannover / wurttemberg / vestfalya", ad="Hannover · Württemberg · Vestfalya krallıkları", oncelik=4, gerekce="kronolojide 1'er geçiş; almanya künyesi 1806-1871'i tek tutuyor", kaynak="atlasın kendi maddeleri"),
]

# Kronolojide YANLIŞ YAZIMLA geçen ama künyesi VAR olan yapılar (D215 eşanlam işi,
# EKSİK DEĞİL): kardeş paket yeni künye istemesin.
ESANLAM = [
 ("Ceneviz Cumhuriyeti", "cenova", 4), ("Astrahan Hanlığı", "astarhan", 2), ("Kokand Hanlığı", "hokand", 1),
 ("Vedây Sultanlığı", "vaday", 2), ("Hârizm Halk Cumhuriyeti / SSC", "harezm-halk-cumhuriyeti", 5),
 ("Zengibar Sultanlığı", "umman-zengibar", 4), ("Kilve Sultanlığı", "svahili-sehirleri", 3),
 ("Kâşgar Hanlığı", "yakub-beg", 3), ("Neopatras Dukalığı", "katalan", 2), ("Egeopelagos Dukalığı", "naksa-dukaligi", 1),
 ("Yadigâroğulları Hanlığı", "hive", 1), ("Mütevekkilî Krallığı", "yemen-zeydi", 2), ("İki Ulusun Cumhuriyeti", "lehistan", 1),
 ("Burcî Memlük Sultanlığı", "memluk", 1), ("Felemenk Birleşik Cumhuriyeti", "hollanda", 2),
]

# ④ — sınıf: ① KISALT (devlet öldü) · ② GENİŞLET (aynı polity sürüyor) ·
# ③ ARDIL KÜNYE (başka yapı geçti) · "mükerrer" (iki künye bir polity) ·
# "gün" (yalnız gün farkı) · "ölçülemedi" (kaynak çekilemedi — HÜKÜM YOK)
SUPHELI = [
 dict(id="erdel", alan="f", veri="1570-01-01", sinif="②",
      kaynak="TDV `erdel`: '1541'de Erdel … haraçgüzâr statüsünde bir voyvodalık haline geldi'",
      not_="1541-1570 Erdel tâbi voyvodalık — aynı polity; 1570 yalnız 'prens' unvanı. Kardeş: KRONO-TUNA, KRONO-ORTA-AVRUPA"),
 dict(id="mekke-serifligi", alan="t", veri="1919-01-10", sinif="gün",
      kaynak="TDV `mekke`: '8 Mayıs 1919'da çıkarılan Meclis-i Vükelâ kararı ve irâde-i seniyye ile emirlik unvanı kaldırılıp…'",
      not_="künye 10 Ocak 1919 diyor, TDV 8 Mayıs 1919 — kaynağı yazılmamış gün"),
 dict(id="trablusgarp-ocagi", alan="t", veri="1911-10-09", sinif="①",
      kaynak="TDV `trablusgarp`: '1835'te tekrar merkeze bağlanan Trablusgarp'ta…'; 'Karamanlılar döneminde (1711-1835)'",
      not_="künye adı 'Karamanlı Hanedanı'; 1835-1911 doğrudan Osmanlı. Kısaltma DELİK açmaz ama v:kid tâbi dönemleri (39) 1835 sonrası OSMANLI'ya dönmeli — yerleşim önerisi, koşu ister"),
 dict(id="sirbistan-nemanjic", alan="t", veri="1402-01-01", sinif="③",
      kaynak="TDV `sirbistan`: 'Nemanjići hânedanı: 1166-1371'",
      not_="1371-1402 Lazarević (Moravya Sırbistanı) Nemanjić değil; künye ya ad değiştirir ya ardıl künye alır. Kardeş: KRONO-BALKAN-B"),
 dict(id="karakoyunlu", alan="t", veri="1469-01-01", sinif="②",
      kaynak="atlasın kendi dosyası kronoloji_karakoyunlu.js: 'Hasan Ali öldürüldü — hanedan sona erdi' 1469-04-01 (kaynağı maddede)",
      not_="künye t'si son hükümdarın ölümünden ÖNCE; 3 madde pencere dışında. TDV `karakoyunlu` 302 — slug bulunamadı"),
 dict(id="katalan", alan="t", veri="1388-01-01", sinif="②",
      kaynak="atlasın kendi dosyası kronoloji_katalan.js: 1388-05-02 'Nerio Acciaiuoli'nin Akropolis'i alması — Katalan devrinin sonu'",
      not_="künye t'si olaydan 4 ay önce"),
 dict(id="varsova-dukaligi", alan="f", veri="1807-07-22", sinif="gün",
      kaynak="atlasın kendi dosyası kronoloji_lehistan.js: 1807-07-07 'Varşova Düklüğü kuruldu (Tilsit)'",
      not_="künye ile madde 15 gün ayrışıyor (Tilsit 7 Temmuz / anayasa 22 Temmuz?) — hangisi kuruluş, kaynakla seçilmeli"),
 dict(id="kumuk-samhalligi", alan="f/t", veri="1578-11-01 … 1607-01-01", sinif="②",
      kaynak="TDV `kumuklar`: 'Kumuklar ve diğer Dağıstan kavimleri 1867 yılına kadar Çarlık Rusyası'nın hâkimiyeti altına girdiler'",
      not_="künye penceresi Osmanlı'nın 1578 seferi penceresi gibi; Şamhallık öncesinde ve sonrasında da var. Kesin uçlar ÖLÇÜLEMEDİ"),
 dict(id="kaheti-kralligi", alan="f/t", veri="1578-08-09 … 1606-01-01", sinif="②?",
      kaynak="bulunamadı (`kaheti` 302)",
      not_="aynı desen: 28 yıllık pencere bir sefer penceresi; Kaheti krallığı daha uzun yaşadı (kaynak çekilemedi — HÜKÜM YOK)"),
 dict(id="arma", alan="f/t", veri="1750-01-01 … 1760-01-01", sinif="ölçülemedi",
      kaynak="TDV `tinbuktu`: 'arma denilen çocukları … 1163'te (1750) Tinbüktü'de yönetimi ele geçirdiler'; TDV `arma` gövdesi boilerplate (tuzak ④)",
      not_="Arma Paşalığı 1591 Fas fethiyle başlar; 1750 ancak bir yönetim değişimi. Künye 10 yıl — dar olabilir"),
 dict(id="eyyubi-hisnikeyfa", alan="t", veri="1462-01-01", sinif="ölçülemedi",
      kaynak="TDV `hisnikeyfa` gövdesi 2.387 karakter (boilerplate, tuzak ④); `eyyubiler` bitiş cümlesi yok",
      not_="Hısnıkeyfâ Eyyûbîleri Akkoyunlu sonrası da sürdü — İKİNCİ çıkarıcı gerek (tuzak ⑦)"),
 dict(id="hurmuz-sultanligi", alan="t", veri="1514-01-01", sinif="②?",
      kaynak="bulunamadı (`hurmuz` 302)", not_="Portekiz himayesinde sürdü; kaynak çekilemedi — HÜKÜM YOK"),
 dict(id="konstantin-beyligi", alan="t", veri="1844-03-04", sinif="ölçülemedi",
      kaynak="bulunamadı (`konstantine` 302)", not_="Konstantine şehri 1837'de düştü; Ahmed Bey direnişi sonrası da sürdü — uç hangi olaya bağlı, yazılmamış"),
 dict(id="kuveyt", alan="—", veri="kuveyt 1752 · sabah-emirligi 1795-1914", sinif="mükerrer",
      kaynak="TDV `kuveyt` (Sabah ailesi; bibliyografyada 'Al-Sabah … 1752-1987')",
      not_="aynı polity iki künye; sabah-emirligi renksiz sessiz borç (14'ten biri)"),
 dict(id="katar", alan="—", veri="katar 1868 · sani-emirligi 1871-1913", sinif="mükerrer",
      kaynak="TDV `katar`: '1868 sonbaharında Katar'a gemi göndererek Muhammed b. [Sânî]…'",
      not_="aynı polity iki künye; sani-emirligi renksiz sessiz borç"),
 dict(id="sadi", alan="—", veri="sadi 1511-1659 · fas 1549-1923 ('Sâdî / Alevî')", sinif="mükerrer",
      kaynak="TDV `sadiler`: Muhammed eş-Şeyh 'Fas şehrine girip Vattâsî hâkimiyetine son verdi (956/1549)'",
      not_="1549-1659 iki künye aynı hanedanı taşıyor"),
 dict(id="zeta", alan="t", veri="1514-01-01", sinif="mükerrer",
      kaynak="atlasın kendi künyesi crnojevic-zetasi 1482-1499 (TDV `zeta` 302)",
      not_="zeta 1356-1514 ile crnojevic-zetasi 1482-1499 örtüşüyor — biri ötekinin içinde"),
 dict(id="hollanda", alan="f/t", veri="1581-07-26 … 1923-10-29 'Cumhuriyet'", sinif="③",
      kaynak="TDV `hollanda`: 'Fransız himayesinde Batav Cumhuriyeti kuruldu (1795)'",
      not_="1795 Batav · 1806 Holland Krallığı · 1810 Fransız ilhakı · 1815 krallık — tek 'cumhuriyet' künyesi. Ayrıca 3 madde f'den önce (1568-1579)"),
 dict(id="almanya", alan="f/t", veri="962-02-02 … 1923-10-29", sinif="③",
      kaynak="bulunamadı (TDV kapsamı dışı) — atlasın kendi dosyası: Vestfalya/Württemberg/Weimar maddeleri",
      not_="1806-1871 arasında 'Almanya' adlı devlet yok; tek künye Kutsal Roma → Alman İmparatorluğu → Weimar'ı birleştiriyor"),
 dict(id="milano-dukaligi", alan="t", veri="1859-11-10", sinif="①/③",
      kaynak="bulunamadı (TDV kapsamı dışı) — kronolojide 'Ambrosian' ve 'Lombardiya-Venedik' maddeleri",
      not_="1797 Cisalpin, 1815-1859 Avusturya'nın Lombardiya-Venedik'i; dukalık 1859'a uzanmaz"),
 dict(id="napoli", alan="kapsam", veri="1282-03-30 … 1861 'Napoli / İki Sicilya'", sinif="③",
      kaynak="TDV `sicilya` (canlı; 1282/1816 cümlesi çekilmedi)",
      not_="1282 Sicilya Akşam Duası ile ada AYRILDI; İki Sicilya 1816. Adadaki yerleşimler hangi künyede — ölçülmedi"),
 dict(id="sirbistan-prensligi", alan="f", veri="1804-02-14", sinif="ölçülemedi",
      kaynak="bulunamadı (bu oturumda çekilmedi)", not_="1804 isyanın başlangıcı; 1813'te Osmanlı geri aldı, özerklik 1830 (bkz. ORTAK §5 üç ayrı gün vakası). Kardeş: KRONO-BALKAN-B"),
 dict(id="yunanistan", alan="f", veri="1821-03-25 'Krallık'", sinif="ölçülemedi",
      kaynak="bulunamadı (bu oturumda çekilmedi)", not_="krallık 1832; 1821-1832 isyan/geçici hükûmet. Kardeş: KRONO-BALKAN-D"),
 dict(id="polonya-erken", alan="f", veri="1320-01-20", sinif="③?",
      kaynak="atlasın kendi dosyası kronoloji_lehistan.js: 1295 Przemysł II taç giydi",
      not_="5 madde f'den önce (1295-1308) — 1295-1320 dönemi künyesiz"),
 dict(id="kacar", alan="t", veri="1925-01-01", sinif="gün",
      kaynak="bulunamadı (bu oturumda çekilmedi)", not_="iran künyesi 1925-12-12 başlıyor: 11 aylık boşluk. Site ufku (1923) DIŞINDA — önemsiz"),
 dict(id="aiz", alan="f/t", veri="1918-10-30 … 1920-01-01", sinif="ölçülemedi",
      kaynak="bulunamadı (`asir` 302)", not_="Âl-i Âiz Asîr'de 19. yy'da da hüküm sürdü; 1918-1920 penceresi dar olabilir"),
]


def main(argv):
    V = yukle()
    K, D, files = V["K"], V["D"], V["files"]
    k1, k2, k3, k4, disi, dosya_disi, cek = esle(K, D)
    H = harita_ve_renk()
    say, ornek = adsiz_yapilar(K, D, cek)
    ssay, sbag, sesl, sezl = sitede(K, D)

    tur_say = collections.Counter(d.get("tur") or "YOK" for d in D)
    ad_say = collections.Counter(ad_sinifi(d["ad"]) for d in D)
    bolge_say = collections.Counter(d["bolge"] for d in D)
    kunye = {}
    for d in D:
        i = d["id"]
        es = k1[i] | k2[i] | k3[i]
        hk = d.get("harita") or i
        kunye[i] = dict(
            ad=d["ad"], f=d["f"], t=d["t"], tur=d.get("tur"),
            sinif=(ad_sinifi(d["ad"]) if ad_sinifi(d["ad"]) != "belirsiz"
                   else TUR_SINIF.get(d.get("tur") or "", d.get("tur") or "belirsiz")),
            bolge=d["bolge"], harita=d.get("harita"),
            madde_sayisi=len(es), k1_kimlik=len(k1[i]), k2_etiket=len(k2[i]),
            k3_dosya=len(k3[i]), ad_gecen=len(k4[i] - es),
            pencere_disi=len(disi.get(i, [])), kunye_ic_kronoloji=d["kron_ic"],
            sitede_gorunen=ssay[i], sitede_ezildi=i in sezl,
            harita_pencere=H["kul"].get(hk, 0) + (H["kul"].get(i, 0) if hk != i else 0),
            v_kid=H["vkid"].get(i, 0), boyali=hk in H["boyalar"],
            supheli=False, not_="")
    O = dict(
        olcum="29 Eylül 2026 · denetim/ARAC-KUNYE-DUNYA-0929.py",
        evren=dict(kunye=len(D), kronoloji_dosya=len(files), kronoloji_madde=len(K),
                   yuklenmeyen=sorted(YUKLENMEYEN)),
        tur=dict(tur_say.most_common()), ad_sinifi=dict(ad_say.most_common()),
        bolge=dict(bolge_say.most_common()),
        kunye=kunye,
        dosya_pencere_disi=dict(dosya_disi),
        sitede=dict(baglanan=sbag, eslenmeyen=sesl, ezilen=sorted(sezl),
                    gorunen_sifir=sorted(i for i in ssay if ssay[i] == 0)),
        adsiz_yapilar=[dict(ad=a, gecis=n, ornek=ornek[a][:3]) for a, n in say.most_common()],
        renksiz=dict(delik=H["delik"], sessiz_toplam=H["sessiz"], baska_katmanda=H["baska"],
                     gercek_sessiz=H["gercek"], tabi=H["tabi"]),
        dizinsiz_harita_kimligi=H["dizinsiz"], kasitli=H["kasitli"],
        mekanik_supheler=mekanik_supheler(D, disi, K),
        eksik=EKSIK,
        esanlam=[dict(kronolojideki_ad=a, kunye=k, gecis=n) for a, k, n in ESANLAM],
        supheli_omur=SUPHELI,
        renksiz_14=H["gercek"],
        tur_ad_celiski=tur_ad_celiski(D),
    )
    by = set(kunye)
    for s in SUPHELI:
        if s["id"] in by:
            kunye[s["id"]]["supheli"] = True
            kunye[s["id"]]["not_"] = (s["sinif"] + " · " + s["not_"])[:300]
    for s in O["mekanik_supheler"]:
        if s["id"] in by and not kunye[s["id"]]["supheli"]:
            kunye[s["id"]]["not_"] = "mekanik: " + s["sinyal"]
    for e in ESANLAM:
        assert e[1] in by, e
    sifir = [i for i, k in kunye.items() if k["madde_sayisi"] == 0]
    sifir_ad = [i for i in sifir if kunye[i]["ad_gecen"] == 0]
    print("künye %d · madde %d · dosya %d" % (len(D), len(K), len(files)))
    print("devlet: alanıyla eşleşmeyen künye:",
          sum(1 for d in D if not any(K[n].get("devlet") == d["id"] for n in k1[d["id"]])))
    print("K1∪K2∪K3 = 0 madde:", len(sifir), "· bunlardan ad da geçmiyor:", len(sifir_ad))
    print("haritada (s:/isg:) kullanılıp maddesi 0:",
          sum(1 for i in sifir if kunye[i]["harita_pencere"]))
    print("SİTEDE: bağlanan dosya %d · eşlenmeyen %d (%d madde) · ezilen künye %d · panelde 0 madde %d"
          % (len(sbag), len(sesl), sum(sesl.values()), len(sezl), sum(1 for v in ssay.values() if v == 0)))
    print("katman dosya (doğru):", H["katdosya"], "· index-src ile (kör):", H["katdosya_eski"],
          "· kör sayım:", len(H["gercek_eski"]))
    print("renksiz gerçek sessiz:", len(H["gercek"]), H["gercek"])
    print("dizinsiz harita kimliği:", len(H["dizinsiz"]))
    print("adı geçen künyesiz yapı (tekil ad):", len(say))
    print("pencere dışı (dosya):", dict(dosya_disi))
    if "--ozet" not in argv:
        io.open(CIKTI, "w", encoding="utf-8").write(json.dumps(O, ensure_ascii=False, indent=1))
        print("yazıldı:", CIKTI)
    return O


# ─── 9. TDV SLUG SINAMASI — eksik devlet adaylarının dayanağı ──────────────
# `--tdv slug:anahtar ...` · yönlenme İZLENMEZ (302 = ölü slug, CLAUDE.md §4 ①).
# Gövdede anahtar kelime aranır (② canlı slug yanlış madde tuzağı) ve anahtarın
# geçtiği ilk cümle basılır — TARİH ÇIKARIMI OKUYANIN işidir (⑧).
def tdv(argv):
    import urllib.request, urllib.error, html as H
    from concurrent.futures import ThreadPoolExecutor

    class Y(urllib.request.HTTPRedirectHandler):
        def redirect_request(self, *a, **k):
            return None
    ac = urllib.request.build_opener(Y)

    def cek(sa):
        slug, _, an = sa.partition(":")
        try:
            r = ac.open(urllib.request.Request("https://islamansiklopedisi.org.tr/" + slug,
                                               headers={"User-Agent": "Mozilla/5.0"}), timeout=40)
            h = r.read().decode("utf-8", "replace")
            kod = r.status
        except urllib.error.HTTPError as e:
            return slug, e.code, 0, ""
        except Exception as e:
            return slug, 0, 0, str(e)[:60]
        t = re.sub(r"<script.*?</script>|<style.*?</style>", " ", h, flags=re.S | re.I)
        t = H.unescape(re.sub(r"<[^>]+>", " ", t))
        t = re.sub(r"\s+", " ", t)
        cum = ""
        for a in (an or slug).split("|"):
            m = re.search(r"[^.]{0,160}" + re.escape(a) + r"[^.]{0,200}", t, re.I)
            if m:
                cum = m.group(0).strip()
                break
        return slug, kod, len(t), cum

    import time

    def cek2(sa):
        # 503 = hız sınırı (29 Eylül: 6 iplikte 25/50 istek 503 döndü) — bekle, yeniden dene
        for k in range(4):
            s = cek(sa)
            if s[1] != 503:
                return s
            time.sleep(4 * (k + 1))
        return s

    with ThreadPoolExecutor(2) as ex:
        for slug, kod, n, cum in ex.map(cek2, argv):
            print("%-34s %s %7d · %s" % (slug, kod, n, cum[:330]))


if __name__ == "__main__":
    if sys.argv[1:2] == ["--tdv"]:
        tdv(sys.argv[2:])
    else:
        main(sys.argv[1:])
