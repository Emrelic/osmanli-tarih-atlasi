# -*- coding: utf-8 -*-
"""KAPSAM-GUNCEL-1024 — kunye / s: / boya kapsam olcumu (YALNIZ OLCUM, veri yazmaz).

Kosu (worktree kokunden):  py denetim/ARAC-KAPSAM-GUNCEL-1024.py
Cikti: denetim/KAPSAM-GUNCEL-1024.tsv  (kunye basina satir, eski KAPSAM-TABLOSU bicimi + yeni sutunlar)
       denetim/KAPSAM-GUNCEL-KUNYESIZ-1024.tsv  (DEVLET-LISTESI kayitlari: kunye eslesmesi + guven)
       denetim/KAPSAM-GUNCEL-DILIM-1024.tsv     (dilim x bolge: kunye / s'li / boyali / yerlesim)
       denetim/KAPSAM-GUNCEL-OZET-1024.md

Yontem: node vm ile data/*.js (paket_*.js haric) yuklenir; yerlesimler motor girdi listesinden
(arac/girdi_listesi.py GIRDI_DOSYALARI); maddeler olaylar*/kronoloji*/kaynakli_halka* dizilerinden
+ kunyenin gomulu kronolojisinden; BOYALAR arac/renkler.py'den. Ag/denetle/motor KOSMAZ.
"""
import io, os, re, sys, json, subprocess, tempfile, datetime, socket, unicodedata, collections, contextlib
from difflib import SequenceMatcher

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DEN = os.path.join(KOK, "denetim")
sys.path.insert(0, os.path.join(KOK, "arac"))
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

NODE_JS = r"""
const fs = require('fs'), vm = require('vm'), path = require('path');
const dir = process.argv[2];
const girdi = new Set(process.argv[3].split(','));
const out = { devletler: [], maddeler: [], yer: [], hatalar: [], yukleme: 0 };
function yukle(f) {
  const w = {};
  const sb = { window: w, console: { log() {}, warn() {}, error() {} }, document: {}, navigator: {} };
  sb.self = sb; sb.globalThis = sb;
  try { vm.runInNewContext(fs.readFileSync(path.join(dir, f), 'utf8'), sb, { timeout: 120000 }); }
  catch (e) { out.hatalar.push(f + ': ' + String(e.message).slice(0, 100)); }
  return w;
}
const slim = (m, src) => ({ t: m.t, b: m.b, devlet: m.devlet || null, yer_id: m.yer_id || null,
  odak_yer: m.odak_yer || null, kaynak_dosya: src });
for (const f of fs.readdirSync(dir).filter(f => f.endsWith('.js'))) {
  if (/^paket_/.test(f)) continue;
  out.yukleme++;
  const w = yukle(f);
  for (const k of Object.keys(w)) {
    const v = w[k];
    if (!Array.isArray(v)) continue;
    if (f === 'devletler.js' && k === 'DEVLETLER') {
      for (const d of v) {
        const e = { id: d.id, ad: d.ad, tur: d.tur, bolge: d.bolge, f: d.f, t: d.t, harita: d.harita || null, kronoloji: [] };
        for (const m of (d.kronoloji || [])) e.kronoloji.push(slim(m, 'devletler.js#' + d.id));
        out.devletler.push(e);
      }
      continue;
    }
    if (girdi.has(f)) {
      for (const y of v) {
        if (y && typeof y === 'object' && y.ad && typeof y.lat === 'number') {
          out.yer.push({ ad: y.ad, lat: y.lat, lon: y.lon, f: f,
            s: (y.s || []).map(p => ({ f: p.f, t: p.t, d: p.d, kaynak: (p.kaynak || '').slice(0, 700) })) });
        }
      }
      continue;
    }
    if (/^(olaylar|kronoloji|kaynakli_halka)/.test(f) && v.length && typeof v[0] === 'object' && v[0] && 't' in v[0] && 'b' in v[0]) {
      for (const m of v) out.maddeler.push(slim(m, f));
    }
  }
}
fs.writeFileSync(process.argv[4], JSON.stringify(out));
"""

# ------------------------------------------------------------------ yardimcilar
_TR = str.maketrans({"İ": "i", "I": "i", "ı": "i", "Ş": "s", "ş": "s", "Ğ": "g", "ğ": "g", "Ü": "u", "ü": "u",
                     "Ö": "o", "ö": "o", "Ç": "c", "ç": "c", "Â": "a", "â": "a", "Î": "i", "î": "i",
                     "Û": "u", "û": "u", "Ê": "e", "ê": "e", "Ô": "o", "ô": "o", "ʿ": "", "ʾ": "", "‘": "", "’": "", "'": ""})


def norm(s):
    if not s:
        return ""
    s = unicodedata.normalize("NFKD", str(s).translate(_TR).lower())
    s = "".join(c for c in s if not unicodedata.combining(c))
    return re.sub(r"[^a-z0-9]+", "", s)


def normsp(s):
    if not s:
        return ""
    s = unicodedata.normalize("NFKD", str(s).translate(_TR).lower())
    s = "".join(c for c in s if not unicodedata.combining(c))
    return re.sub(r"[^a-z0-9]+", " ", s).strip()


_RX = re.compile(r"^(-?\d+)-(\d\d)-(\d\d)")


def yr(s):
    """ISO gun -> ondalik yil (astronomik); None = acik uc."""
    if not s:
        return None
    m = _RX.match(str(s))
    if not m:
        return None
    return int(m.group(1)) + (int(m.group(2)) - 1) / 12.0 + (int(m.group(3)) - 1) / 372.0


def tup(s):
    m = _RX.match(str(s)) if s else None
    return (int(m.group(1)), int(m.group(2)), int(m.group(3))) if m else None


def paren_taban(ad):
    return re.sub(r"\s*\(.*?\)\s*", " ", ad or "").strip()


def paren_ici(ad):
    return re.findall(r"\(([^)]*)\)", ad or "")


def yer_adaylari(ad):
    """esnek eslesme icin normalize ad kumesi: tam, parantezsiz, parantez ici parcalar."""
    c = {norm(ad), norm(paren_taban(ad))}
    for p in paren_ici(ad):
        for q in re.split(r"[,/;]|\bveya\b", p):
            c.add(norm(q))
    for q in re.split(r"[/]", paren_taban(ad)):
        c.add(norm(q))
    c.discard("")
    return c


def temiz(x):
    return "" if x is None else str(x).replace("\t", " ").replace("\n", " ").replace("\r", " ")


def overlap(a0, a1, b0, b1):
    a0 = -1e9 if a0 is None else a0
    b0 = -1e9 if b0 is None else b0
    a1 = 1e9 if a1 is None else a1
    b1 = 1e9 if b1 is None else b1
    return max(0.0, min(a1, b1) - max(a0, b0))


# ------------------------------------------------------------------ yukleme
def yukle_veri():
    from girdi_listesi import GIRDI_DOSYALARI
    td = tempfile.mkdtemp(prefix="kapsam_")
    js = os.path.join(td, "yukle.js")
    cikti = os.path.join(td, "dump.json")
    io.open(js, "w", encoding="utf-8").write(NODE_JS)
    r = subprocess.run(["node", js, os.path.join(KOK, "data"), ",".join(GIRDI_DOSYALARI), cikti],
                       capture_output=True, timeout=600)
    if r.returncode != 0:
        raise SystemExit("node yukleyici basarisiz: " + r.stderr.decode("utf-8", "replace")[:500])
    d = json.load(io.open(cikti, encoding="utf-8"))
    d["girdi_listesi_n"] = len(GIRDI_DOSYALARI)
    return d


def yukle_boyalar():
    with contextlib.redirect_stdout(io.StringIO()):
        import renkler
    return set(renkler.BOYALAR.keys())


# ------------------------------------------------------------------ BOSLUK siniflandirma
def bosluk_sinifla(kaynak, D, BOYA):
    """-> (kova, devlet_id|None)
    A  sahip belli (kaynakta 'sahip <id>' BOYALAR/boya beklemesi)       -> sahip id
    D  kunye omru asimi (kunye bu tarihte kapaniyor/basliyor)            -> kunye id
    C  sahip atlasta kunyesiz ('kunye yok', yeni_kunye_gerekli...)       -> yok
    B  sahip kaynakta bulunamadi (arandi, bulunamadi / veri-yok)         -> yok
    E  siniflanamadi
    """
    k = kaynak or ""
    m = re.search(r"sahip ([a-z0-9][a-z0-9\-_]{2,})\b", k)
    if m and (m.group(1) in D or m.group(1) in BOYA or "BOYALAR" in k):
        return "A", m.group(1)
    m = re.match(r"\s*([a-z0-9][a-z0-9\-_]+) k[uü]nyesi\b", k)
    if m and m.group(1) in D:
        return "D", m.group(1)
    m = re.search(r"\b([a-z0-9][a-z0-9\-_]+)(?: k[uü]nyesi| k[uü]nye f| k[uü]nye t)", k)
    if m and m.group(1) in D and re.search(r"kapan|ba[sş]l[ıi]yor|sonras[ıi]|[öo]l[uü]m|a[sş][ıi]m", k):
        return "D", m.group(1)
    if re.search(r"k[uü]nye(si)? yok|yeni_kunye_gerekli|BOYALAR d[ıi][sş][ıi]|k[uü]nyesi yok|kunye yok", k):
        return "C", None
    if re.search(r"ARANDI|arand[ıi]|BULUNAMADI|bulunamad[ıi]|veri-yok|kaynak sessiz|kimsenin de[gğ]il", k, re.I):
        return "B", None
    if re.search(r"BEYAN", k):
        return "E", None
    return "E", None


# ------------------------------------------------------------------ ana
def main():
    t0 = datetime.datetime.now()
    commit = subprocess.run(["git", "rev-parse", "--short", "HEAD"], cwd=KOK, capture_output=True, text=True).stdout.strip()
    dal = subprocess.run(["git", "rev-parse", "--abbrev-ref", "HEAD"], cwd=KOK, capture_output=True, text=True).stdout.strip()
    V = yukle_veri()
    BOYA = yukle_boyalar()
    DEV = V["devletler"]
    DID = {d["id"]: d for d in DEV}
    YER = V["yer"]
    MAD = V["maddeler"]
    LISTE = json.load(io.open(os.path.join(DEN, "ONCE1281-DEVLET-LISTESI.json"), encoding="utf-8"))["kayitlar"]

    def boyali(did):
        d = DID.get(did)
        return did in BOYA or bool(d and d.get("harita") and d["harita"] in BOYA)

    # ---- atlas yerlesim ad kumeleri
    tam_ad = set()
    esnek_ad = set()
    for y in YER:
        tam_ad.add(norm(y["ad"]))
        esnek_ad |= yer_adaylari(y["ad"])

    # ---- s: kullanimi
    s_kul = collections.Counter()
    s_asan = collections.Counter()
    bosluk_say = collections.Counter()           # (kova) -> n
    bosluk_dev = collections.defaultdict(collections.Counter)   # devlet -> kova -> n
    bosluk_yer = collections.defaultdict(set)
    s_ids = collections.Counter()
    for y in YER:
        for p in y["s"]:
            d = p["d"]
            if d == "__BOSLUK__":
                kv, did = bosluk_sinifla(p.get("kaynak"), DID, BOYA)
                bosluk_say[kv] += 1
                if did:
                    bosluk_dev[did][kv] += 1
                    bosluk_yer[did].add(y["ad"])
                continue
            s_ids[d] += 1
            s_kul[d] += 1
            k = DID.get(d)
            if k:
                pf, pt = tup(p["f"]), tup(p["t"])
                kf, kt = tup(k.get("f")), tup(k.get("t"))
                if (pf and kf and pf < kf) or (pt and kt and pt > kt):
                    s_asan[d] += 1

    # ---- maddeler (tekil t+b), devletli / devletsiz
    madde_dev = collections.defaultdict(set)
    devletsiz = {}
    for m in MAD:
        key = (m["t"], m["b"])
        if m["devlet"]:
            madde_dev[m["devlet"]].add(key)
        else:
            devletsiz[key] = m
    for d in DEV:
        for m in d["kronoloji"]:
            madde_dev[d["id"]].add((m["t"], m["b"]))
    # devletli madde yerleri
    yer_dev = collections.defaultdict(set)
    for m in MAD:
        if m["devlet"]:
            for ad in _yerler(m):
                yer_dev[m["devlet"]].add(ad)
    for d in DEV:
        for m in d["kronoloji"]:
            for ad in _yerler(m):
                yer_dev[d["id"]].add(ad)
    devletsiz_b = [norm(m["b"]) for m in devletsiz.values()]
    devletsiz_b_set = list(set(devletsiz_b))

    # ---- LISTE <-> KUNYE eslesmesi
    esl = eslestir(LISTE, DEV)
    liste_of = {}      # kunye id -> en iyi liste kaydi
    for r in esl:
        if r["sinif"] == "eslesti" and r["aday"]:
            o = liste_of.get(r["aday"])
            if o is None or r["guven"] > o["guven"]:
                liste_of[r["aday"]] = r

    # ---- tablo
    satirlar = []
    SUT = ["id", "ad", "bolge", "f", "t", "liste_durum", "onem", "madde_sayisi", "tahmini_madde", "yer_atlasta_var",
           "yer_atlasta_yok", "yer_tam_ad_yok", "boya_var", "s_kullanim", "s_omur_asan", "toplam_durum", "tum_eksikler",
           "yok_yerler(ilk5)", "tam_ad_yok_yerler(ilk5)", "bosluk_beyanli_s", "bosluk_beyanli_yer", "liste_id",
           "liste_guven", "tur", "donem"]
    for d in sorted(DEV, key=lambda x: (yr(x.get("f")) if yr(x.get("f")) is not None else -1e9)):
        i = d["id"]
        once = (yr(d.get("f")) is not None and yr(d.get("f")) < 1281.0)
        madde = len(madde_dev.get(i, ()))
        tah = ""
        if once:
            nm = {norm(d["ad"]), norm(paren_taban(d["ad"]))}
            nm = {n for n in nm if len(n) >= 5}
            tah = sum(1 for b in devletsiz_b_set if any(n in b for n in nm)) if nm else 0
        yvar = yyok = ytam = 0
        yok_l, tam_l = [], []
        for ad in sorted(yer_dev.get(i, ())):
            kum = yer_adaylari(ad)
            if kum & esnek_ad:
                yvar += 1
            else:
                yyok += 1
                yok_l.append(ad)
            if norm(ad) not in tam_ad:
                ytam += 1
                tam_l.append(ad)
        bv = boyali(i)
        sk, sa = s_kul.get(i, 0), s_asan.get(i, 0)
        bb = sum(bosluk_dev[i].values()) if i in bosluk_dev else 0
        eks = []
        if madde == 0:
            eks.append("madde eksik")
        if not bv:
            eks.append("boya eksik")
        if sa:
            eks.append("hayalet")
        if sk == 0:
            eks.append("s yok" if bb == 0 else "s yok(sahip belli, bosluk beyanli)")
        if not eks:
            tdur = "TAM"
        elif eks[0] == "s yok(sahip belli, bosluk beyanli)":
            tdur = "bosluk-beyanli"
        else:
            tdur = eks[0]
        lr = liste_of.get(i)
        if lr:
            L = lr["_k"]
            ld = "devredilebilir" if L.get("devredilebilir") else ("taslak" if L.get("taslak") else "listede")
            onem = L.get("oncelik") or ""
            lid, lg = L["id"], "%.2f" % lr["guven"]
        else:
            ld, onem, lid, lg = "yok", "", "", ""
        satirlar.append([i, d["ad"], d.get("bolge") or "", d.get("f") or "", d.get("t") or "", ld, onem, madde, tah, yvar, yyok,
                         ytam, "evet" if bv else "hayir", sk, sa, tdur, "; ".join(eks),
                         "; ".join(yok_l[:5]), "; ".join(tam_l[:5]), bb, len(bosluk_yer.get(i, ())), lid, lg,
                         d.get("tur") or "", "once1281" if once else "1281+"])
    with io.open(os.path.join(DEN, "KAPSAM-GUNCEL-1024.tsv"), "w", encoding="utf-8-sig", newline="") as f:
        f.write("\t".join(SUT) + "\n")
        for s in satirlar:
            f.write("\t".join(temiz(x) for x in s) + "\n")

    # ---- KUNYESIZ tsv
    with io.open(os.path.join(DEN, "KAPSAM-GUNCEL-KUNYESIZ-1024.tsv"), "w", encoding="utf-8-sig", newline="") as f:
        f.write("\t".join(["liste_id", "ad", "bolge", "f", "t", "oncelik", "devredilebilir", "taslak", "sinif",
                           "aday_kunye_id", "aday_ad", "guven", "yontem"]) + "\n")
        for r in sorted(esl, key=lambda r: ({"kunyesiz": 0, "belirsiz": 1, "eslesti": 2}[r["sinif"]],
                                            {"cekirdek": 0, "orta": 1, "kucuk": 2}.get(r["_k"].get("oncelik"), 3), r["id"])):
            K = r["_k"]
            f.write("\t".join(temiz(x) for x in [r["id"], K.get("ad"), K.get("bolge"), K.get("f") or "", K.get("t") or "",
                                                 K.get("oncelik"), "evet" if K.get("devredilebilir") else "hayir",
                                                 "evet" if K.get("taslak") else "hayir", r["sinif"], r["aday"] or "",
                                                 (DID[r["aday"]]["ad"] if r["aday"] else ""), "%.2f" % r["guven"],
                                                 r["yontem"]]) + "\n")

    # ---- DILIM
    dilim_rows, dilim_ozet = dilimle(DEV, DID, YER, boyali)
    with io.open(os.path.join(DEN, "KAPSAM-GUNCEL-DILIM-1024.tsv"), "w", encoding="utf-8-sig", newline="") as f:
        f.write("\t".join(["olcek_yil", "bas", "son", "bolge", "kunye", "s_gorunen_devlet", "boyali_devlet",
                           "boyasiz_devlet", "yerlesim_sahipli", "yerlesim_bosluk_delik", "s_olmayan_kunye"]) + "\n")
        for r in dilim_rows:
            f.write("\t".join(temiz(x) for x in r) + "\n")

    ozet_yaz(V, DEV, DID, YER, MAD, LISTE, esl, satirlar, SUT, bosluk_say, bosluk_dev, s_ids, BOYA, boyali,
             dilim_ozet, commit, dal, t0)
    print("tamam:", len(satirlar), "satir;", (datetime.datetime.now() - t0).seconds, "sn")


def _yerler(m):
    out = []
    yi = m.get("yer_id")
    if isinstance(yi, str) and yi.strip():
        out.append(yi.strip())
    oy = m.get("odak_yer")
    if isinstance(oy, list):
        out += [x for x in oy if isinstance(x, str) and x.strip()]
    elif isinstance(oy, str) and oy.strip():
        out.append(oy.strip())
    return out


# ------------------------------------------------------------------ liste eslestirme
SUFIKS = re.compile(r"-(tarihsel|tarih|uzun|ref|erken|gec|ilk|son|klasik|ortacag|antik|devleti|krallik|imparatorlugu|"
                    r"hanedani|kralligi|cumhuriyeti|emirligi|sultanligi|beyligi|hanligi|dukaligi)$")


DURAK = set("""krallik kralligi devleti devlet sehir imparatorlugu imparatorluk cumhuriyeti cumhuriyet sultanligi sultanlik
emirligi emirlik beyligi beylik prensligi prenslik dukaligi dukalik hanligi hanlik hanedani hanedanligi konfederasyonu konfederasyon
birligi birlik polis kabile lordlugu lordluk kontlugu kontluk topraklari toprak ve veya ile erken gec sonraki once ilk son buyuk kucuk
eski yeni donemi donem kultur kulturu uygarligi uygarlik medeniyeti sef seflik markligi marklik cemaati krali kral vadisi
kabileler cografyasi bolgesi piskoposlugu piskoposluk prens""".split())


def cekirdek_sozcukler(ad):
    return [t for t in normsp(paren_taban(ad)).split() if t not in DURAK and len(t) >= 2]


def id_kok(i):
    prev = None
    while prev != i:
        prev = i
        i = SUFIKS.sub("", i)
    return i


def eslestir(LISTE, DEV):
    DID = {d["id"]: d for d in DEV}
    kok_idx = collections.defaultdict(list)
    for d in DEV:
        kok_idx[id_kok(d["id"])].append(d["id"])
    ad_idx = collections.defaultdict(list)
    tok_idx = collections.defaultdict(set)
    for d in DEV:
        ad_idx[norm(paren_taban(d["ad"]))].append(d["id"])
        ad_idx[norm(d["ad"])].append(d["id"])
        for tk in set(cekirdek_sozcukler(d["ad"])) | (set(d["id"].split("-")) - DURAK):
            if len(tk) >= 4:
                tok_idx[tk].add(d["id"])
    out = []
    for L in LISTE:
        lid = L["id"]
        lf, lt = yr(L.get("f")), yr(L.get("t"))
        best = (0.0, None, "")
        def ov(did):
            k = DID[did]
            return overlap(lf, lt, yr(k.get("f")), yr(k.get("t")))
        def ovfrac(did):
            k = DID[did]
            a0, a1, b0, b1 = lf, lt, yr(k.get("f")), yr(k.get("t"))
            o = overlap(a0, a1, b0, b1)
            if a0 is None or a1 is None or b0 is None or b1 is None:
                return 1.0 if o > 0 or (a0 is None and a1 is None) else 0.0
            sh = max(1e-6, min(a1 - a0, b1 - b0))
            return o / sh
        cand = []
        if lid in DID:
            cand.append((1.0, lid, "id-esit"))
        em = (L.get("esleme") or {}).get("mevcut_id")
        if em and em in DID:
            cand.append((0.95, em, "liste-esleme(%s)" % (L["esleme"].get("durum") or "?")))
        for kid in kok_idx.get(id_kok(lid), []):
            if kid != lid:
                cand.append((0.90 if ovfrac(kid) > 0 else 0.55, kid, "id-kok"))
        for kid in ad_idx.get(norm(L["ad"]), []) + ad_idx.get(norm(paren_taban(L["ad"])), []):
            cand.append((0.90 if ovfrac(kid) > 0.2 else 0.45, kid, "ad-esit"))
        toks = set(cekirdek_sozcukler(L["ad"])) | (set(lid.split("-")) - DURAK)
        pool = set()
        for tk in toks:
            if len(tk) >= 4:
                pool |= tok_idx.get(tk, set())
        nl = "".join(cekirdek_sozcukler(L["ad"]))
        for kid in pool:
            nk = "".join(cekirdek_sozcukler(DID[kid]["ad"]))
            if len(nl) < 4 or len(nk) < 4:
                continue
            r = SequenceMatcher(None, nl, nk).ratio()
            if r >= 0.80:
                of = ovfrac(kid)
                if of <= 0:
                    g = 0.45 * r
                elif r >= 0.97:
                    g = 0.88 if of > 0.2 else 0.6
                else:
                    g = min(0.78, r * 0.85 * (1.0 if of > 0.2 else 0.75))
                cand.append((round(g, 3), kid, "ad-benzer(%.2f,ort=%.2f)" % (r, of)))
        if cand:
            cand.sort(key=lambda c: -c[0])
            best = cand[0]
        g, aday, yon = best
        sinif = "eslesti" if g >= 0.8 else ("belirsiz" if g >= 0.5 else "kunyesiz")
        out.append({"id": lid, "_k": L, "aday": aday if g >= 0.5 else (aday if g > 0 else None), "guven": g,
                    "yontem": yon or "aday-yok", "sinif": sinif})
    return out


# ------------------------------------------------------------------ dilimler
def dilimle(DEV, DID, YER, boyali):
    # s donemleri: (bas_yil, son_yil, devlet, yer_adi)  ve BOSLUK ayrik
    per = []
    bos = []
    for y in YER:
        for p in y["s"]:
            a, b = yr(p["f"]), yr(p["t"])
            if p["d"] == "__BOSLUK__":
                bos.append((a, b, y["ad"]))
            else:
                per.append((a, b, p["d"], y["ad"]))
    def bolge_of(did):
        k = DID.get(did)
        return (k.get("bolge") if k and k.get("bolge") else "?bilinmeyen")
    def osm(did):
        return did.startswith("osmanli")
    rows = []
    ozet = {}
    def hesapla(a0, a1, bolgeli, osmanli_haric):
        res = collections.defaultdict(lambda: {"kunye": set(), "s": set(), "yer": set(), "bos": set()})
        for d in DEV:
            if osmanli_haric and osm(d["id"]):
                continue
            if overlap(yr(d.get("f")), yr(d.get("t")), a0, a1) > 0:
                res["*"]["kunye"].add(d["id"])
                if bolgeli:
                    res[bolge_of(d["id"])]["kunye"].add(d["id"])
        for a, b, did, yad in per:
            if osmanli_haric and osm(did):
                continue
            if overlap(a, b, a0, a1) > 0:
                res["*"]["s"].add(did)
                res["*"]["yer"].add(yad)
                if bolgeli:
                    bg = bolge_of(did)
                    res[bg]["s"].add(did)
                    res[bg]["yer"].add(yad)
        for a, b, yad in bos:
            if overlap(a, b, a0, a1) > 0:
                res["*"]["bos"].add(yad)
        return res
    def yaz(olcek, a0, a1, bolgeli, osmanli_haric, etiket_bolge=True):
        res = hesapla(a0, a1, bolgeli, osmanli_haric)
        for bg in sorted(res, key=lambda x: (x != "*", x)):
            v = res[bg]
            sg = len(v["s"])
            by = sum(1 for x in v["s"] if boyali(x))
            sizkunye = len({x for x in v["kunye"] if x not in v["s"]})
            rows.append([olcek, int(a0), int(a1), "dunya" if bg == "*" else bg, len(v["kunye"]), sg, by, sg - by,
                         len(v["yer"]), len(v["bos"]) if bg == "*" else "", sizkunye])
        return res["*"]
    # pre-1281: dunya 100/500/3000 ; 500 bolge bolge
    glob = {}
    for olcek in (3000, 500, 100):
        a = -11999
        while a < 1281:
            b = min(a + olcek, 1281)
            r = yaz(olcek, a, b, bolgeli=(olcek == 500), osmanli_haric=False)
            glob[(olcek, a, b)] = (len(r["kunye"]), len(r["s"]), sum(1 for x in r["s"] if boyali(x)), len(r["yer"]), len(r["bos"]))
            a = b
    # 1281-1923 Osmanli disi, 100 yil, bolgeli ; 1923-2000 25 yil
    ms = {}
    a = 1281
    while a < 1923:
        b = min(a + 100, 1923)
        r = yaz(100, a, b, True, True)
        ms[("1281-1923", a, b)] = (len(r["kunye"]), len(r["s"]), sum(1 for x in r["s"] if boyali(x)), len(r["yer"]), len(r["bos"]))
        a = b
    a = 1923
    while a < 2000:
        b = min(a + 25, 2000)
        r = yaz(25, a, b, True, True)
        ms[("1923-2000", a, b)] = (len(r["kunye"]), len(r["s"]), sum(1 for x in r["s"] if boyali(x)), len(r["yer"]), len(r["bos"]))
        a = b
    # bolge bolge dokum (toplam donemler): 1281-1923 ve 1923-2000 tek dilimde
    bol = {}
    for ad, a0, a1 in (("1281-1923", 1281, 1923), ("1923-2000", 1923, 2000), ("MO12000-MS1281", -11999, 1281)):
        r = hesapla(a0, a1, True, ad != "MO12000-MS1281")
        for bg, v in r.items():
            sg = len(v["s"])
            bol[(ad, bg)] = (len(v["kunye"]), sg, sum(1 for x in v["s"] if boyali(x)), len(v["yer"]))
    return rows, {"glob": glob, "ms": ms, "bolge": bol}


# ------------------------------------------------------------------ OZET
def ozet_yaz(V, DEV, DID, YER, MAD, LISTE, esl, S, SUT, bosluk_say, bosluk_dev, s_ids, BOYA, boyali, dz, commit, dal, t0):
    ix = {c: n for n, c in enumerate(SUT)}
    once = [s for s in S if s[ix["donem"]] == "once1281"]
    sonra = [s for s in S if s[ix["donem"]] != "once1281"]
    L = []
    w = L.append
    w("# KAPSAM-GUNCEL-OZET-1024 (kunye / s: / boya kapsami)\n")
    w("Olcum: %s | makine: %s | dal: %s | HEAD: %s | arac: denetim/ARAC-KAPSAM-GUNCEL-1024.py | yalniz olcum, veri yazilmadi, denetle kosmadi."
      % (t0.strftime("%d.%m.%Y %H:%M"), socket.gethostname(), dal, commit))
    w("Yukleme: node vm, %d data/*.js (paket_*.js haric), yukleme hatasi %d; motor girdi listesi %d dosya.\n"
      % (V["yukleme"], len(V["hatalar"]), V["girdi_listesi_n"]))
    nin = len(YER)
    s_yer = sum(1 for y in YER if y["s"])
    w("## Sayilar")
    w("- Kunye (devletler.js): **%d** | 1281 oncesi (f<1281): **%d** | 1281 ve sonrasi: %d" % (len(DEV), len(once), len(sonra)))
    w("- Atlasta yerlesim (motor girdi, ad+lat): %d (s: tasiyan %d) | BOYALAR: %d | madde (t+b tekil, devletli+devletsiz+gomulu): %d"
      % (nin, s_yer, len(BOYA), len({(m['t'], m['b']) for m in MAD} | {(m['t'], m['b']) for d in DEV for m in d['kronoloji']})))
    sd = [(k, n) for k, n in s_ids.items() if k not in DID]
    w("- s: periyotlarinda gecen devlet kimligi: %d farkli; **devletler.js'te kunyesi olmayan s: kimligi: %d** (%d donem), BOYALAR'da olmayan s: kimligi: %d"
      % (len(s_ids), len(sd), sum(n for _, n in sd), sum(1 for k in s_ids if not (k in BOYA or boyali(k)))))
    top = ", ".join("%s(%d)" % kn for kn in sorted(sd, key=lambda x: -x[1])[:12])
    w("  - en cok: " + top)
    w("")
    for ad, grup in (("1281 oncesi kunye", once), ("1281 ve sonrasi kunye", sonra)):
        c = collections.Counter(s[ix["toplam_durum"]] for s in grup)
        w("## %s: toplam durum (n=%d)" % (ad, len(grup)))
        w("- " + " | ".join("%s: %d" % (k, n) for k, n in c.most_common()))
        fl = collections.Counter()
        for s in grup:
            for e in s[ix["tum_eksikler"]].split("; "):
                if e:
                    fl[e] += 1
        w("- eksik bayraklari (cok etiketli): " + " | ".join("%s: %d" % kn for kn in fl.most_common()))
        w("- boyasi var: %d / %d | s: kullanan kunye: %d | hayalet(s: omrunu asan): %d | madde=0: %d"
          % (sum(1 for s in grup if s[ix["boya_var"]] == "evet"), len(grup), sum(1 for s in grup if s[ix["s_kullanim"]] > 0),
             sum(1 for s in grup if s[ix["s_omur_asan"]] > 0), sum(1 for s in grup if s[ix["madde_sayisi"]] == 0)))
        w("- yer: en az 1 yeri tam adla atlasta olmayan kunye: %d | atlasta hic bulunamayan (esnek) yeri olan kunye: %d"
          % (sum(1 for s in grup if s[ix["yer_tam_ad_yok"]] > 0), sum(1 for s in grup if s[ix["yer_atlasta_yok"]] > 0)))
        w("")
    # bolge dokumu: eksik olanlar (1281 oncesi)
    bc = collections.Counter(s[ix["bolge"]] for s in once if s[ix["toplam_durum"]] != "TAM")
    w("### 1281 oncesi: TAM olmayan kunye, bolge dokumu")
    w(" | ".join("%s: %d" % kn for kn in bc.most_common()))
    w("")
    # (b) bosluk
    w("## (b) `__BOSLUK__` ile park edilmis s: donemleri")
    tot = sum(bosluk_say.values())
    adlar = {"A": "A sahip belli (boya/kunye bekliyor; kaynakta 'sahip <id>')", "D": "D kunye omru asimi (kunye kapaniyor/basliyor)",
             "C": "C sahip atlasta kunyesiz (kunye yok / yeni_kunye_gerekli)", "B": "B sahip kaynakta bulunamadi (arandi, bulunamadi / veri-yok)",
             "E": "E siniflanamayan"}
    w("- Toplam `__BOSLUK__` s: donemi: **%d** (yerlesim: %d)" % (tot, sum(1 for y in YER if any(p['d'] == '__BOSLUK__' for p in y['s']))))
    for k in "ABCDE":
        w("  - %s: %d" % (adlar[k], bosluk_say.get(k, 0)))
    sahipli = {d: sum(v.values()) for d, v in bosluk_dev.items()}
    w("- Devlete baglanan (A+D) donem: %d, %d farkli devlet kimligi; bunlardan devletler.js'te kunyesi olan: %d, kunyesiz id: %d"
      % (sum(sahipli.values()), len(sahipli), sum(1 for d in sahipli if d in DID), sum(1 for d in sahipli if d not in DID)))
    ac = sum(1 for s in S if s[ix["toplam_durum"]] == "bosluk-beyanli")
    w("- Kunye bazinda: s: kullanimi 0 olup bosluk-beyanli sahip olan kunye: **%d** (bunlar 'zincir yok' degil, 'sahip belli, bosluk beyanli' kovasinda)" % ac)
    w("- En cok beyanli bosluk tasiyan devletler (A+D): " + ", ".join("%s(%d)" % (d, n) for d, n in sorted(sahipli.items(), key=lambda x: -x[1])[:15]))
    w("")
    # (a) kunyesiz
    w("## (a) DEVLET-LISTESI (%d kayit) <-> kunye eslesmesi" % len(LISTE))
    sc = collections.Counter(r["sinif"] for r in esl)
    yc = collections.Counter(r["yontem"].split("(")[0] for r in esl if r["sinif"] == "eslesti")
    w("- eslesti (guven>=0.80): %d | belirsiz (0.50-0.80, elle bak): %d | **gercekten kunyesiz (<0.50): %d**" % (sc["eslesti"], sc["belirsiz"], sc["kunyesiz"]))
    w("- eslesen yontemler: " + ", ".join("%s %d" % kn for kn in yc.most_common()))
    w("  - eski olcu: id-esit eslesen 508, 'kunyede olmayan' 697 -> bugun id-esit: %d, isim+donem ile ek eslesen: %d"
      % (sum(1 for r in esl if r["yontem"] == "id-esit"), sum(1 for r in esl if r["sinif"] == "eslesti" and r["yontem"] != "id-esit")))
    dv = [r for r in esl if r["sinif"] == "kunyesiz" and r["_k"].get("devredilebilir")]
    dvb = [r for r in esl if r["sinif"] == "belirsiz" and r["_k"].get("devredilebilir")]
    w("- Gercekten kunyesiz: %d, bunlardan devredilebilir: **%d** (+ belirsiz-devredilebilir %d); taslak: %d"
      % (sc["kunyesiz"], len(dv), len(dvb), sum(1 for r in esl if r["sinif"] == "kunyesiz" and r["_k"].get("taslak"))))
    oc = collections.Counter(r["_k"].get("oncelik") for r in dv)
    w("  - devredilebilir kunyesiz onem dagilimi: " + ", ".join("%s %d" % kn for kn in oc.most_common()))
    bc2 = collections.Counter(r["_k"].get("bolge") for r in dv)
    w("  - bolge: " + ", ".join("%s %d" % kn for kn in bc2.most_common(12)))
    w("  - ilk 20 (cekirdek once):")
    for r in sorted(dv, key=lambda r: ({"cekirdek": 0, "orta": 1, "kucuk": 2}.get(r["_k"].get("oncelik"), 3), r["id"]))[:20]:
        w("    - %s | %s | %s..%s | %s | en iyi aday %s (%.2f)" % (r["id"], r["_k"]["ad"], (r["_k"].get("f") or "?")[:5],
                                                              (r["_k"].get("t") or "?")[:5], r["_k"].get("oncelik"), r["aday"] or "-", r["guven"]))
    w("  - tam liste: denetim/KAPSAM-GUNCEL-KUNYESIZ-1024.tsv")
    w("")
    # (c) dilim
    w("## (c) Dilim kapsami (dunya; 'gorunen' = en az bir yerlesimde s: donemi dilimle kesisen devlet kimligi)")
    g = dz["glob"]
    def blok(olcek, bas_etiket):
        ks = sorted(k for k in g if k[0] == olcek)
        w("| dilim | kunye | s: gorunen devlet | boyali | yerlesim(sahipli) | delik(BOSLUK) yerlesim |")
        w("|---|---|---|---|---|---|")
        for k in ks:
            v = g[k]
            w("| %s..%s | %d | %d | %d | %d | %d |" % (_et(k[1]), _et(k[2]), v[0], v[1], v[2], v[3], v[4]))
    w("### 3000 yillik dilimler")
    blok(3000, "")
    w("")
    w("### 500 yillik dilimler")
    blok(500, "")
    w("")
    k100 = sorted(k for k in g if k[0] == 100)
    zero = [k for k in k100 if g[k][1] == 0]
    w("### 100 yillik dilimler (%d dilim; tam tablo KAPSAM-GUNCEL-DILIM-1024.tsv)" % len(k100))
    w("- s: gorunen devleti **0** olan dilim: %d / %d" % (len(zero), len(k100)))
    w("- boyali devleti 0 olan dilim: %d / %d" % (sum(1 for k in k100 if g[k][2] == 0), len(k100)))
    w("- s: gorunen devlet sayisi: min %d, medyan %d, maks %d" % (min(g[k][1] for k in k100), sorted(g[k][1] for k in k100)[len(k100) // 2], max(g[k][1] for k in k100)))
    w("- boyasiz gorunen devlet (s: var, BOYALAR yok): toplam dilim-devlet %d" % sum(g[k][1] - g[k][2] for k in k100))
    w("- 0 gorunen dilim araliklari: " + (", ".join("%s..%s" % (_et(k[1]), _et(k[2])) for k in zero[:25]) + (" ..." if len(zero) > 25 else "") if zero else "yok"))
    w("")
    w("### 1281-1923, Osmanli disi dunya (100 yil)")
    w("| dilim | kunye | s: gorunen | boyali | yerlesim | delik |")
    w("|---|---|---|---|---|---|")
    for k in sorted(dz["ms"]):
        if k[0] == "1281-1923":
            v = dz["ms"][k]
            w("| %d..%d | %d | %d | %d | %d | %d |" % (k[1], k[2], v[0], v[1], v[2], v[3], v[4]))
    w("")
    w("### 1923-2000 (25 yil)")
    w("| dilim | kunye | s: gorunen | boyali | yerlesim | delik |")
    w("|---|---|---|---|---|---|")
    for k in sorted(dz["ms"]):
        if k[0] == "1923-2000":
            v = dz["ms"][k]
            w("| %d..%d | %d | %d | %d | %d | %d |" % (k[1], k[2], v[0], v[1], v[2], v[3], v[4]))
    w("")
    for ad in ("1281-1923", "1923-2000", "MO12000-MS1281"):
        w("### Bolge bolge, %s%s (kunye / s: gorunen / boyali / yerlesim)" % (ad, "" if ad == "MO12000-MS1281" else ", Osmanli disi"))
        rows = sorted(((bg, v) for (a, bg), v in dz["bolge"].items() if a == ad and bg != "*"), key=lambda x: -x[1][0])
        w("| bolge | kunye | s: gorunen | boyali | yerlesim | s: orani |")
        w("|---|---|---|---|---|---|")
        for bg, v in rows:
            w("| %s | %d | %d | %d | %d | %s |" % (bg, v[0], v[1], v[2], v[3], ("%d%%" % round(100.0 * v[1] / v[0])) if v[0] else "-"))
        tt = dz["bolge"].get((ad, "*"))
        if tt:
            w("| **toplam(dunya)** | %d | %d | %d | %d | %d%% |" % (tt[0], tt[1], tt[2], tt[3], round(100.0 * tt[1] / max(1, tt[0]))))
        w("")
    w("## Yontem notlari / sinirlar")
    w("- 'Gorunen' VERI duzeyinde olcumdur (yerlesim s: donemi var); motor/Voronoi ciktisi (petek, emilme, bos bolge) bu olcumde YOK. 'Yerlesim sahipli' = s:'si dilimle kesisen sahipli yerlesim sayisi (tek dilimde ayni yerlesim bir kez).")
    w("- Bolge, s: kimliginin devletler.js kunyesindeki `bolge` alanindan okunur; kunyesiz s: kimligi `?bilinmeyen` kovasina duser.")
    w("- toplam_durum onceligi: madde eksik > boya eksik > hayalet > s yok > TAM; yeni durum `bosluk-beyanli` = s: kullanimi 0 ve kaynagi bir sahip/kunye id'si adlandiran `__BOSLUK__` beyani var. `yer` eksigi bayrak degil, ayri sayilir (eski olcudeki gibi).")
    w("- `__BOSLUK__` kova siniflamasi `kaynak:` metnindeki kaliplardan regex ile yapilir (A/D guvenilir, B/C/E kaba); kova E elle bakilmali.")
    w("- Eslesme guveni: id-esit 1.0, liste `esleme.mevcut_id` 0.95, id-kok (-tarihsel/-tarih/... soneki atilmis) 0.90, ad-esit 0.90, ad-benzer = SequenceMatcher*donem uyumu (<=0.95). Donemi hic kesismeyen eslesme 0.45-0.55'e duser = 'belirsiz/kunyesiz'.")
    w("- tahmini_madde devletsiz maddelerde kunye adinin (>=5 harf) metinde gecmesidir; yanlis pozitif icerebilir, toplam duruma katilmaz. Yalniz 1281 oncesi icin hesaplandi.")
    io.open(os.path.join(DEN, "KAPSAM-GUNCEL-OZET-1024.md"), "w", encoding="utf-8", newline="\n").write("\n".join(L) + "\n")


def _et(y):
    return ("MO%d" % (1 - y) if y < 1 else "MS%d" % y)


if __name__ == "__main__":
    main()
