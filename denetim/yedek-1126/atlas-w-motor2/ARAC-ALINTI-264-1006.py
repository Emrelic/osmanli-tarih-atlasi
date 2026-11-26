# ARAC-ALINTI-264-1006 — W30'un LISTEDE bıraktığı 264 tırnağı TDV gövdesine karşı ölçer (SALT OKUR).
#
# Veri dosyalarına YAZMAZ. Ağa çıkar (yalnız önbellekte olmayan slug için), önbelleği scratchpad'e yazar.
# Kullanım:  py ARAC-ALINTI-264-1006.py --onbellek <dizin> [--ro-onbellek <dizin>] --cikti <tsv>
#
# Her satır için:
#   mukerrer : alıntı bugünkü ağaçta (kaynak dosyasında) hâlâ var mı · bekleyen diff'lerin '-' satırında var mı
#   govde    : TDV tam gövde (bölümler birleşik, kaynakça HARİÇ; `bk.` gönderme sayfası hedefe izlenir)
#   birebir  : ARAC-TDV-CIKARICI-1006.birebir() — TEK TANIM (BIREBIR-TANIM-1006), burada kopyası YOKTUR:
#              BIREBIR · YAKIN-EK (kenar kelime ortasında; BİREBİR DEĞİL) · YOK · BOS
#              (eski TAM/NORM ikilisi kalktı: TAM kelime sınırı aramıyordu — #121 millet vakası)
#   en_yakin : gövdede alıntının en uzun ortak kelime dizisi ve onu taşıyan cümle (ELLE OKUMA İÇİN, hüküm değil)
import sys, os, re, csv, glob, hashlib, argparse, importlib.util, subprocess

sys.stdout.reconfigure(encoding="utf-8")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DEN = os.path.join(KOK, "denetim")


def yukle(ad, yol):
    sp = importlib.util.spec_from_file_location(ad, yol)
    m = importlib.util.module_from_spec(sp)
    sp.loader.exec_module(m)
    return m


C = yukle("cik", os.path.join(DEN, "ARAC-TDV-CIKARICI-1006.py"))
N = yukle("nrm", os.path.join(DEN, "ARAC-NORMAL-0903.py"))

ap = argparse.ArgumentParser()
ap.add_argument("--onbellek", required=True)
ap.add_argument("--ro-onbellek", default=None)
ap.add_argument("--cikti", required=True)
a = ap.parse_args()
os.makedirs(a.onbellek, exist_ok=True)


def getir(yol):
    k = hashlib.md5(yol.encode()).hexdigest()
    for d in [x for x in (a.ro_onbellek, a.onbellek) if x]:
        f = os.path.join(d, k)
        if os.path.exists(f + ".kod"):
            return open(f + ".kod").read().strip(), open(f + ".html", encoding="utf-8").read(), "onbellek"
    r = subprocess.run(["curl", "-s", "-A", "Mozilla/5.0", "-w", "\n__KOD__%{http_code}", C.KOK + yol],
                       capture_output=True)
    govde, kod = r.stdout.decode("utf-8", "replace").rsplit("\n__KOD__", 1)
    if kod in ("200", "302"):
        f = os.path.join(a.onbellek, k)
        open(f + ".kod", "w").write(kod)
        open(f + ".html", "w", encoding="utf-8").write(govde)
    return kod, govde, "canli"


GOVDE = {}
OZET = {}
TIRNAK = r"[\"“‘']\s*"  # alıntıdan hemen önce açılış tırnağı (", “, ‘ ya da ')


def govde(slug):
    if slug in GOVDE:
        return GOVDE[slug]
    kod, h, nereden = getir(slug)
    if kod != "200":
        GOVDE[slug] = (f"HTTP {kod}", "", nereden)
        return GOVDE[slug]
    t = C.tam(h)
    # 🔴 MADDE ÖZETİ: başlığın altındaki tanım cümlesi (div.article_info) m-content DIŞINDADIR ve
    # ARAC-TDV-CIKARICI-1006.tam() onu gövdeye KATMAZ. Sayfada görünür TDV metnidir ⇒ ölçüme katılır,
    # ayrı işaretlenir (birebir_yer = OZET).
    from bs4 import BeautifulSoup
    oz = " ".join(C._duz(x.get_text(" ")) for x in BeautifulSoup(h, "html.parser").select(".article_info"))
    OZET[slug] = oz
    metin, sinif = t["govde"], "TAM"
    if not t["bolumler"] and t["gonderme"]:
        parca = []
        for g in t["gonderme"]:
            k2, h2, _ = getir(g)
            if k2 == "200":
                parca.append(C.tam(h2)["govde"])
        metin, sinif = " ".join(parca), "GONDERME->" + ",".join(t["gonderme"])
    if len(metin) < 200:
        sinif = f"BOS({len(metin)}kr)"
    GOVDE[slug] = (sinif, metin, nereden)
    return GOVDE[slug]


def bicim(s):
    s = re.sub(r"[’‘`´ʼʻ']", "'", s)
    s = re.sub(r"[“”„\"«»]", '"', s)
    s = re.sub(r"[–—−‑]", "-", s)
    return re.sub(r"\s+", " ", s).strip()


def kelime(s):
    return re.sub(r"[^0-9a-z]+", " ", N.norm(s)).split()


def en_yakin(al, g):
    """Alıntının içerik kelimelerini (>=4 harf ya da rakam) en çok taşıyan İKİ gövde cümlesi. ELLE OKUMA İÇİN."""
    ak = {w for w in kelime(al) if len(w) >= 4 or w.isdigit()}
    if not ak or not g:
        return 0, ""
    puan = []
    for c in re.split(r"(?<=[.!?])\s+", g):
        ck = kelime(c)
        kok = {w[:5] for w in ck}
        p = sum(1 for w in ak if w in ck or w[:5] in kok)
        puan.append((p, c))
    puan.sort(key=lambda x: -x[0])
    return puan[0][0], " ⟂ ".join(c[:300] for _, c in puan[:2] if _ > 0)


def sayilar_var(al, g):
    """Alıntıdaki 3-4 haneli sayıların gövdede geçmeyenleri."""
    gs = set(re.findall(r"\d+", g))
    return ",".join(x for x in re.findall(r"\d{3,4}", al) if x not in gs)


# bekleyen (uygulanmamış) diff'lerin silinen satırları — mükerrer kapısı
SILINEN, EKLENEN = [], {}
for f in glob.glob(os.path.join(DEN, "*1006*.diff")):
    if "ALINTI-264" in f:
        continue
    b_ = os.path.basename(f)
    EKLENEN[b_] = []
    for sat in open(f, encoding="utf-8", errors="replace"):
        if sat.startswith("-") and not sat.startswith("---"):
            SILINEN.append((b_, bicim(sat)))
        elif sat.startswith("+") and not sat.startswith("+++"):
            EKLENEN[b_].append(bicim(sat))

satirlar = list(csv.DictReader(open(os.path.join(DEN, "UMIT-W30-ALINTI-DUZELT-1006.tsv"), encoding="utf-8"),
                               delimiter="\t"))
satirlar = [r for r in satirlar if r["karar"] == "LISTEDE"]


def kova(s):
    if "cumle-yok" in s: return "yakin-cumle-yok"
    if "dil:" in s: return "yabanci-dil"
    if "sayi-eksik" in s: return "sayi-tutmuyor"
    if "sayisiz" in s: return "sayisiz"
    return "benzerlik-dusuk"


DOSYA = {}


def dosya(ad):
    if ad not in DOSYA:
        y = os.path.join(KOK, "data", ad)
        DOSYA[ad] = open(y, encoding="utf-8").read().split("\n") if os.path.exists(y) else None
    return DOSYA[ad]


cik = []
for n, r in enumerate(satirlar, 1):
    al = r["alinti"]
    ad, _, sat = r["kaynak_konum"].partition(":")
    sat = int(sat) if sat.isdigit() else 0
    d = dosya(ad)
    simdi = ""
    if d is None:
        simdi = "DOSYA-YOK"
    else:
        ab = bicim(al)
        bul = [i + 1 for i, x in enumerate(d) if ab in bicim(x)]
        tirnakli = [i + 1 for i, x in enumerate(d) if re.search(TIRNAK + re.escape(ab), bicim(x))]
        simdi = ("TIRNAKLI:" + ",".join(map(str, tirnakli[:5]))) if tirnakli else                 (("TIRNAKSIZ:" + ",".join(map(str, bul[:5]))) if bul else "YOK")
    ab = bicim(al)
    dokunan = sorted({f for f, x in SILINEN if ab in x})
    # dokunan diff alıntıyı '+' tarafında TIRNAKLI geri yazıyorsa tırnak İŞLENMEMİŞTİR
    bekleyen = [f for f in dokunan if not any(re.search(TIRNAK + re.escape(ab), x) for x in EKLENEN[f])]
    dokunup_birakan = [f for f in dokunan if f not in bekleyen]
    sinif, g, nereden = govde(r["slug"])
    if g:
        bb = C.birebir(al, C.alinti_metinleri(dict(ozet=OZET.get(r["slug"], ""), govde=g)))
        b, yer, kenar = bb["kova"], bb["yer"], bb["kenar"]
    else:
        b, yer, kenar = "OLCULEMEDI", "", ""
    en, cumle = en_yakin(al, g) if g else (0, "")
    cik.append(dict(no=n, kova=kova(r["sebep"]), slug=r["slug"], govde_sinif=sinif, govde_kr=len(g),
                    w30_konum=r["kaynak_konum"], simdi=simdi, bekleyen_diff=";".join(bekleyen), dokunup_birakan=";".join(dokunup_birakan),
                    birebir=b, birebir_yer=yer, birebir_kenar=kenar, ozet=OZET.get(r["slug"], ""), ortak_kelime=en, alinti_kelime=len({w for w in kelime(al) if len(w) >= 4 or w.isdigit()}), eksik_sayi=sayilar_var(al, g), alinti=al,
                    en_yakin_cumle=cumle, w30_sebep=r["sebep"]))
    print(n, r["slug"], sinif, b, simdi, file=sys.stderr)

with open(a.cikti, "w", encoding="utf-8", newline="") as f:
    w = csv.DictWriter(f, fieldnames=list(cik[0]), delimiter="\t")
    w.writeheader()
    w.writerows(cik)
from collections import Counter
print("birebir:", Counter(x["birebir"] for x in cik))
print("simdi:", Counter(x["simdi"].split(":")[0] for x in cik))
print("bekleyen:", Counter(bool(x["bekleyen_diff"]) for x in cik))
print("govde:", Counter(x["govde_sinif"] for x in cik))
