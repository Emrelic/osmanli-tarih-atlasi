# -*- coding: utf-8 -*-
"""1281 öncesi kronoloji maddelerine yer_id bağlama (B). Yalnız KESİN eşleşmede `yer_id:"<atlas adı>"` ekler; minimal diff.
Kullanım:
  py -I denetim/ARAC-YER-BAGLA-1021.py <veri.json> --kuru     -> yazmaz; sayı + örnek + liste yazar
  py -I denetim/ARAC-YER-BAGLA-1021.py <veri.json> --yaz      -> data/olaylar*.js ve data/kronoloji*.js dosyalarına yazar
Kesin eşleşme: maddenin `yer` alanının İLK adı (parantez içi ve diğer adlar hariç) bir atlas yerleşimine
  (ad / parantez içi ad / ESKI_AD / TDV-teyitli alias) tek başına çözülüyor; çözüm yerleşimi birden çok uzak aday değil;
  yer_kon varsa ≤30 km; madde devletinin bölge kutusu ile tutarlı. Aksi hâlde BAĞLANMAZ (belirsiz listesine)."""
import sys, io, os, re, json, math, ast, glob, collections
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi
from ad_esanlam import sadelestir as N

KL = os.path.join(KOK, "denetim", "yer-arastirma")
YAZ = "--yaz" in sys.argv
w = json.load(open(sys.argv[1], encoding="utf-8"))["win"]
dev = {d["id"]: d for d in w["DEVLETLER"] if d.get("id")}

# --- ESKI_AD'ı betikten AST ile al (betiği çalıştırmadan)
src = open(os.path.join(KOK, "denetim", "ARAC-YER-ENVANTER-1021.py"), encoding="utf-8").read()
ESKI = {}
for node in ast.parse(src).body:
    if isinstance(node, ast.Assign) and getattr(node.targets[0], "id", "") == "ESKI":
        ESKI = ast.literal_eval(node.value)

# --- TDV ile teyitli alias (parti_81-83)
ALIAS_TEYIT = {}
alias_tum = json.load(open(os.path.join(KL, "ALIAS-ORTACAG.json"), encoding="utf-8"))["alias"]
for f in glob.glob(os.path.join(KL, "parti_8*_sonuc.json")):
    for r in json.load(open(f, encoding="utf-8")).get("sonuclar", []):
        if r.get("alias_teyit") is True and "TDV" in (r.get("kaynak") or "") and r.get("gövde_okundu", True) and not re.search("kaynaksız|bilgi tabanı|genel bilgi|okunmadı|özet", (r.get("kaynak") or "") + (r.get("not") or ""), re.I):
            ALIAS_TEYIT[r["ad"]] = r.get("dogru_alias") or alias_tum.get(r["ad"], [])

Y = girdi.yukle(sessiz=True)
idx = collections.defaultdict(list)


def ekle(ad, y, tip):
    n = N(ad)
    if len(n) >= 3 and all(z[0] is not y for z in idx[n]):
        idx[n].append((y, tip))


for y in Y:
    ad = y["ad"]
    ekle(re.sub(r"\s*\(.*?\)", "", ad), y, "ad")
    ekle(ad, y, "ad")
    for i in re.findall(r"\(([^)]*)\)", ad):
        for x in re.split(r"[;,/]| veya ", i):
            ekle(x, y, "paran")
adlar = {y["ad"]: y for y in Y}
core = {N(re.sub(r"\s*\(.*?\)", "", y["ad"])): y for y in Y}
for atlas, es in ESKI.items():
    h = adlar.get(atlas) or core.get(N(atlas))
    if h:
        for e in es:
            ekle(e, h, "eski")
for tr, als in ALIAS_TEYIT.items():          # TDV-teyitli: Türkçe adı doğrudan, alias anahtarlarını atlas adlarıyla
    for a in als:
        for (y, t) in list(idx.get(N(a), [])):
            ekle(tr, y, "alias")

KUTU = {  # tutarlılık: ARAC-YER-TUTARLILIK-1021 ile aynı
 "dogu-asya": (18, 60, 95, 150), "balkanlar": (34, 48, 13, 30), "guney-asya": (5, 38, 60, 95), "guneydogu-asya": (-12, 28, 92, 142),
 "dogu-afrika": (-15, 20, 28, 55), "bati-afrika": (3, 28, -20, 16), "anadolu": (34, 43, 25, 46), "orta-avrupa": (44, 56, 4, 26),
 "kuzey-amerika": (15, 72, -170, -50), "italya": (35, 48, 6, 19), "bati-avrupa": (41, 61, -11, 9), "arabistan": (12, 33, 33, 60),
 "dogu-avrupa": (44, 62, 20, 50), "orta-asya": (35, 52, 50, 90), "kuzey-afrika": (18, 38, -14, 35), "iran": (24, 40, 43, 64),
 "kafkasya": (38, 45, 38, 51), "guney-amerika": (-56, 13, -82, -34), "guney-afrika": (-36, -5, 11, 40), "suriye-filistin": (28, 38, 33, 43),
 "misir-sudan": (2, 32, 20, 39), "orta-afrika": (-12, 12, 8, 32), "orta-amerika-karayip": (8, 27, -92, -60), "mezopotamya": (28, 38, 38, 49),
 "okyanusya": (-48, 0, 110, 180), "iberya": (35, 44, -10, 4), "orta-amerika": (8, 24, -108, -82), "sibirya-bozkir": (45, 75, 50, 180),
 "kuzey-avrupa": (54, 72, 4, 32)}


def km(a, b):
    p = math.pi / 180
    h = math.sin((b[0] - a[0]) * p / 2) ** 2 + math.cos(a[0] * p) * math.cos(b[0] * p) * math.sin((b[1] - a[1]) * p / 2) ** 2
    return 12742 * math.asin(math.sqrt(h))


def tutarli(y, bolgeler):
    et = [b for b in bolgeler if b in KUTU]
    if not et:
        return True
    return any(KUTU[b][0] - 6 <= y["lat"] <= KUTU[b][1] + 6 and KUTU[b][2] - 6 <= y["lon"] <= KUTU[b][3] + 6 for b in et)


def yil(s):
    m = re.match(r"^(-?\d{1,5})", s or "")
    return int(m.group(1)) if m else None


def ilk_ad(yer):
    """yer metninin ilk adı (virgül/noktalı virgül/slash/'·'/'→'/' ve ' öncesi); parantez içi ayrıca aday."""
    p = re.split(r"[;,/·→]| ve | – | — ", yer)[0].strip(" .")
    ic = re.findall(r"\(([^)]*)\)", p)
    dis = re.sub(r"\([^)]*\)", " ", p).strip(" .")
    dis = re.sub(r"\s+(yak[ıi]n[ıi]|çevres[ia]|civar[ıi]|bölges[ii]|kalesi|şehri)$", "", dis, flags=re.I)
    return [x.strip() for x in [dis] + [z for i in ic for z in re.split(r"[;,/]| veya ", i)] if x.strip()]


OBJ = re.compile(r"\{\s*(\"?)t\1\s*:\s*\"(-?\d[^\"]*)\"")
STR = lambda k: re.compile(r"(?<![\w])\"?" + k + r"\"?\s*:\s*\"((?:[^\"\\]|\\.)*)\"")
RB, RYER, RYID = STR("b"), STR("yer"), STR("yer_id")
RKON = re.compile(r"yer_kon\"?\s*:\s*\[\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)\s*\]")
RTARAF = re.compile(r"(?:taraflar|devletler)\"?\s*:\s*\[([^\]]*)\]")
RDEV = re.compile(r"(?<![\w])\"?devlet\"?\s*:\s*\"([^\"]+)\"")
RTUR = re.compile(r"(?<![\w])(?:tur|k)\s*:\s*\"([^\"]+)\"")


def madde_bolgeler(obj):
    ids = set(re.findall(r"\"([^\"]+)\"", (RTARAF.search(obj).group(1) if RTARAF.search(obj) else "")))
    m = RDEV.search(obj)
    if m:
        ids.add(m.group(1))
    return [dev[i].get("bolge") for i in ids if i in dev]


dosyalar = sorted(f for f in glob.glob(os.path.join(KOK, "data", "*.js")) if re.match(r"(olaylar|kronoloji)", os.path.basename(f)) and not re.search(r"yedek|_bk_|kaynakli", f))
sayac = collections.Counter()
yeni_yerid = {}      # dosya -> [(offset_start, offset_end_or_None, yer_id)]
belirsiz = collections.Counter()
ornek = []
detay = []
toplam_once = 0
for f in dosyalar:
    s = open(f, encoding="utf-8", newline="").read()
    ms = list(OBJ.finditer(s))
    degisim = []
    for j, m in enumerate(ms):
        son = ms[j + 1].start() if j + 1 < len(ms) else len(s)
        obj = s[m.start():son]
        y = yil(m.group(2))
        if y is None or y >= 1281:
            continue
        toplam_once += 1
        mb = RB.search(obj)
        if not mb:
            continue
        sayac["once1281_madde"] += 1
        mid = RYID.search(obj)
        if mid and mid.group(1).strip():
            sayac["yer_id_zaten_var"] += 1
            continue
        myer = RYER.search(obj)
        if not myer:
            sayac["yer_alani_yok"] += 1
            continue
        sayac["yer_var_yer_id_yok"] += 1
        adaylar = []
        for tok in ilk_ad(myer.group(1))[:3]:
            for (yy, tip) in idx.get(N(tok), []):
                adaylar.append((tok, yy, tip))
            if adaylar:
                break
        if not adaylar:
            belirsiz["atlasta_yok"] += 1
            continue
        yer_set = {id(a[1]): a for a in adaylar}
        sec = None
        kon = RKON.search(obj)
        if len(yer_set) == 1:
            sec = adaylar[0]
        else:
            ys = [a[1] for a in adaylar]
            if kon:
                p = (float(kon.group(1)), float(kon.group(2)))
                yakin = [a for a in adaylar if km(p, (a[1]["lat"], a[1]["lon"])) <= 30]
                if len({id(a[1]) for a in yakin}) == 1:
                    sec = yakin[0]
            if sec is None:
                bol = madde_bolgeler(obj)
                tut = [a for a in adaylar if tutarli(a[1], bol)] if bol else []
                if len({id(a[1]) for a in tut}) == 1:
                    sec = tut[0]
        if sec is None:
            belirsiz["belirsiz_cok_aday"] += 1
            detay.append({"dosya": os.path.basename(f), "t": m.group(2), "yer": myer.group(1), "neden": "çok aday", "adaylar": sorted({a[1]["ad"] for a in adaylar})[:4]})
            continue
        tok, yy, tip = sec
        if kon and km((float(kon.group(1)), float(kon.group(2))), (yy["lat"], yy["lon"])) > 30:
            belirsiz["yer_kon_uyumsuz"] += 1
            continue
        if not tutarli(yy, madde_bolgeler(obj)):
            belirsiz["bolge_uyumsuz"] += 1
            detay.append({"dosya": os.path.basename(f), "t": m.group(2), "yer": myer.group(1), "neden": "bölge uyumsuz", "adaylar": [yy["ad"]]})
            continue
        sayac["BAGLANACAK"] += 1
        sayac["tip_" + tip] += 1
        degisim.append((m.start(), m.end(), json.dumps(yy["ad"], ensure_ascii=False), (m.start() + mid.span(1)[0], m.start() + mid.span(1)[1]) if mid else None, m.group(1)))
        if len(ornek) < 400:
            ornek.append({"dosya": os.path.basename(f), "t": m.group(2), "b": mb.group(1)[:70], "yer": myer.group(1), "yer_id": yy["ad"], "tip": tip})
    if degisim:
        yeni_yerid[f] = (s, degisim, ms)
print(json.dumps(dict(sayac), ensure_ascii=False))
print("belirsiz:", dict(belirsiz))
json.dump({"sayac": dict(sayac), "belirsiz": dict(belirsiz), "belirsiz_detay": detay, "ornek": ornek}, open(os.path.join(KL, "YERID-BAGLA-RAPOR-1021.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
if YAZ:
    for f, (s, degisim, ms) in yeni_yerid.items():
        # sondan başa, offset kaymasın
        for (bas, bit, ad_js, mid_span, kot) in sorted(degisim, key=lambda x: -x[0]):
            if mid_span:                            # yer_id:"" boş → yalnız değeri (tırnaklarıyla) değiştir
                s = s[:mid_span[0] - 1] + ad_js + s[mid_span[1] + 1:]
            else:
                s = s[:bit] + ", " + kot + "yer_id" + kot + ":" + ad_js + s[bit:]      # t:"…", yer_id:"X" (arkasından orijinal ',' gelir)
        # t:"..." eşleşmesinin hemen SONRASINA eklendi (m.end()) → "t:"1002-01-01" yer_id:"X"," virgül düzeltmesi aşağıda
        open(f, "w", encoding="utf-8", newline="").write(s)
    print("yazıldı:", len(yeni_yerid), "dosya")
