import sys, os, re, json, collections
KOK = os.getcwd()
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi, denetle
CIK = os.path.dirname(os.path.abspath(__file__))
nj = json.load(open(os.path.join(CIK, "node.json"), encoding="utf-8"))
SAY, SAYD = nj["say"], nj["sayD"]
BOS = nj["bos"]
BOSAD = {}
for b in BOS:
    BOSAD.setdefault(b["ad"], []).append(b)
DEV = {d["id"]: d for d in nj["devlet"]}

Y = girdi.yukle(sessiz=True)
YAD = {y["ad"]: y for y in Y}

# ---- dosya:satir indeksi ----
_idx = {}
RX_AD = re.compile(r'(?:^|[\s,{])"?ad"?\s*:\s*"((?:[^"\\]|\\.)*)"')
RX_ID = re.compile(r'(?:^|[\s,{])"?id"?\s*:\s*"((?:[^"\\]|\\.)*)"')
def indeks(dosya, rx):
    k = (dosya, rx.pattern)
    if k not in _idx:
        m = {}
        try:
            for i, ln in enumerate(open(os.path.join(KOK, "data", dosya), encoding="utf-8"), 1):
                for g in rx.finditer(ln):
                    m.setdefault(g.group(1), i)
        except Exception:
            pass
        _idx[k] = m
    return _idx[k]
def ds_y(y):
    return "data/%s:%s" % (y["_kaynak"], indeks(y["_kaynak"], RX_AD).get(y["ad"], "?"))
def ds_dev(i):
    return "data/devletler.js:%s" % indeks("devletler.js", RX_ID).get(i, "?")

def tmz(s, n=170):
    if s is None: return ""
    if not isinstance(s, str): s = json.dumps(s, ensure_ascii=False)
    s = re.sub(r"\s+", " ", s).strip()
    return s if len(s) <= n else s[:n - 1] + "…"
def konum(y):
    try: return "%.3f,%.3f" % (y["lat"], y["lon"])
    except Exception: return ""

ROWS = []
def ekle(sinif, ad, konum_, cins, ft, kaynak, neden, dosya, kron=None):
    if kron is None: kron = SAY.get(ad, 0)
    ROWS.append([sinif, ad, konum_, cins, ft, tmz(kaynak), tmz(neden, 220), str(kron), dosya])

# ---- terrain ----
RX_ARZ = re.compile(r"(çöl|bozkır|vaha|buzul|tundra|orman|dağ|plato|yayla|bataklık|kutup|step\b|sahra|taşlık|kum denizi|kumul|permafrost|tayga)", re.I)
RX_ARZ_AD = re.compile(r"(?<![\wçğıöşüÇĞİÖŞÜ])(çölü|çöl|bozkırı|bozkır|vahası|vaha|buzulu|buzul|tundra|ormanı|orman|platosu|dağlığı|dağları|yaylası|bataklığı|tayga|permafrost)(?![\wçğıöşüÇĞİÖŞÜ])|\(.*(çöl|bozkır).*\)", re.I)
def arz_tur(m):
    m = m.lower()
    for k, v in (("çöl", "col"), ("sahra", "col"), ("kum", "col"), ("taşlık", "col"), ("vaha", "vaha"), ("bozkır", "bozkir"), ("step", "bozkir"),
                 ("buzul", "buzul"), ("kutup", "buzul"), ("tundra", "tundra"), ("permafrost", "tundra"), ("tayga", "orman"),
                 ("orman", "orman"), ("dağ", "dag"), ("plato", "dag"), ("yayla", "dag"), ("bataklık", "bataklik")):
        if k in m: return v
    return "?"

# ================= (a) sahipsiz yerlesimler =================
S = denetle.degismez1(Y)
def sahipsiz_cins(ad, y):
    if ad in BOSAD: return BOSAD[ad][0]["cins"]
    if y.get("bos"): return "bos:" + y["bos"] + "(BOS_ALANLAR'da yok)"
    return "BEYANSIZ(bos:yok)"
A = {}
for ad, yillar in S.items():
    y = YAD[ad]
    c = sahipsiz_cins(ad, y)
    A[ad] = c
    neden = (BOSAD[ad][0].get("neden") if ad in BOSAD else None) or y.get("neden") or ("kasitli_bosluk" if y.get("kasitli_bosluk") else "")
    ekle("a-sahipsiz-yerlesim", ad, konum(y), "%s|%s" % (c, y.get("tur", "")),
         "sahipsiz yillar %d..%d (%d kesit)" % (min(yillar), max(yillar), len(yillar)),
         y.get("kaynak"), neden, ds_y(y))

# ================= (b) BOS_ALANLAR =================
for b in BOS:
    y = YAD.get(b["ad"])
    p = b.get("p") or []
    ft = ";".join("%s..%s" % (a or "", z or "") for a, z in p[:4]) + ("…" if len(p) > 4 else "")
    ekle("b-bos-alan", b["ad"], "%.3f,%.3f" % (b["lat"], b["lon"]), "%s|r=%s" % (b["cins"], b["yaricap_km"]),
         ft, y.get("kaynak") if y else "", b.get("neden"), ds_y(y) if y else "?")

# ================= (c) asiret / konfederasyon =================
TUR_ASIRET = re.compile(r"kabile|konfeder|boylar|gocebe")
AD_ASIRET = re.compile(r"konfederasyon|aşiret|kabile|boylar|boy birliği|kavim", re.I)
ASIRET = {}
FEDONLY = set()
for d in nj["devlet"]:
    t = d.get("tur") or ""
    olcut = []
    if TUR_ASIRET.search(t): olcut.append("tur=" + t)
    if AD_ASIRET.search(d.get("ad") or ""): olcut.append("ad")
    if olcut:
        ASIRET[d["id"]] = ("+".join(olcut), d)
    elif t == "federasyon" or re.search("federasyon", d.get("ad") or "", re.I):
        ASIRET[d["id"]] = ("YALNIZ-federasyon(" + t + ") - genelde modern/devlet federasyonu, asiret degil", d)
        FEDONLY.add(d["id"])
# yerlesim x pencere
ASIRET_PENCERE = collections.defaultdict(list)
for y in Y:
    for kat in ("s", "v", "isg"):
        for p in y.get(kat) or []:
            if isinstance(p, dict) and p.get("d") in ASIRET and p.get("d") not in FEDONLY:
                ASIRET_PENCERE[p["d"]].append((y, kat, p))
ndevpen = collections.Counter()
for i, (olcut, d) in ASIRET.items():
    n = len(ASIRET_PENCERE.get(i, []))
    ekle("c1-asiret-kunye", d.get("ad") or i, d.get("bolge") or "", "%s|%s" % (d.get("tur"), i),
         "%s..%s" % (d.get("f"), d.get("t")), d.get("kaynak"),
         "olcut=%s; yerlesim_penceresi=%d; %s" % (olcut, n, d.get("ic_not_f") or d.get("ozet") or ""),
         ds_dev(i), kron=SAYD.get(i, 0))
for i, lst in ASIRET_PENCERE.items():
    per = collections.defaultdict(list)
    for y, kat, p in lst:
        per[y["ad"]].append((kat, p))
    for ad, ps in per.items():
        y = YAD[ad]
        ft = ";".join("%s:%s..%s" % (k, p.get("f"), p.get("t")) for k, p in ps[:3])
        ekle("c2-asiret-penceresi", ad, konum(y), "%s(%s)" % (i, ASIRET[i][1].get("ad")), ft,
             ps[0][1].get("kaynak") or y.get("kaynak"), "", ds_y(y))
for b in BOS:
    if b["cins"] == "kabile":
        y = YAD.get(b["ad"])
        ekle("c3-asiret-devletsiz-nokta", b["ad"], "%.3f,%.3f" % (b["lat"], b["lon"]), "kabile",
             ";".join("%s..%s" % (a or "", z or "") for a, z in (b.get("p") or [])[:3]),
             y.get("kaynak") if y else "", b.get("neden"), ds_y(y) if y else "?")

# ================= (d) kaynaksiz s: donemleri =================
K = denetle.kaynaksizlik_olc(Y)
ndonem = 0
for a in K["hicbiri"]:
    dosya, ad = a.split("|", 1)
    y = YAD[ad]
    for p in y["s"]:
        ndonem += 1
        ekle("d-kaynaksiz-s-donemi", ad, konum(y), "%s|%s" % (y.get("tur", ""), p.get("d")),
             "%s..%s" % (p.get("f"), p.get("t")), "(kayit kaynagi:%s)" % (y.get("kaynak") or "yok"),
             "donem.kaynak=%s" % (p.get("kaynak") or "yok"), ds_y(y))

# ================= (e) __BOSLUK__ =================
BEY = denetle.BEYAN_EDILEN_BOSLUK
ne_b = nb_beyan = 0
for y in Y:
    for kat in ("s", "v", "isg", "d"):
        for p in y.get(kat) or []:
            if isinstance(p, dict) and p.get("d") == "__BOSLUK__":
                ne_b += 1
                bey = (y["ad"], p.get("f"), p.get("t")) in BEY
                nb_beyan += bey
                ekle("e-bosluk-donemi", y["ad"], konum(y), "%s|%s%s" % (y.get("tur", ""), kat, "|BEYAN_EDILEN" if bey else ""),
                     "%s..%s" % (p.get("f"), p.get("t")), p.get("kaynak") or y.get("kaynak"),
                     "beyanli" if "BEYANLI" in str(p.get("kaynak", "")).upper() else "", ds_y(y))
for t in sorted(BEY):
    y = YAD.get(t[0])
    ekle("e2-beyan-edilen-bosluk-listesi", t[0], konum(y) if y else "", "denetle.BEYAN_EDILEN_BOSLUK", "%s..%s" % (t[1], t[2]),
         y.get("kaynak") if y else "", "arac/denetle.py", "arac/denetle.py:1401", )

# ================= (f) col / bozkir / dag / orman / buzul =================
F = {}
for y in Y:
    m = RX_ARZ_AD.search(y["ad"]) or (RX_ARZ.search(y.get("tur") or "") if y.get("tur") not in ("sehir", "kale", "liman", "kasaba", "koy", "bolge", "harabe") else None)
    if m:
        F[y["ad"]] = ("ad-tur", arz_tur(m.group(0)))
for b in BOS:
    if b["cins"] in ("col", "insansiz") and b["ad"] not in F:
        m = RX_ARZ.search(b["ad"] + " " + (b.get("neden") or ""))
        F[b["ad"]] = ("bos-cins=" + b["cins"], arz_tur(m.group(0)) if m else "?")
    elif b["ad"] not in F:
        m = RX_ARZ.search(b["ad"] + " " + (b.get("neden") or "")[:400])
        if m:
            F[b["ad"]] = ("neden-anahtar", arz_tur(m.group(0)))
for ad, (olcut, alt) in F.items():
    y = YAD.get(ad)
    b = BOSAD.get(ad, [None])[0]
    ekle("f-bos-toprak-arazi", ad, konum(y) if y else "", "%s|%s|%s" % (alt, olcut, (b or {}).get("cins", "BOS_ALANLAR-degil")),
         "", y.get("kaynak") if y else "", (b or {}).get("neden") or (y or {}).get("neden") or "", ds_y(y) if y else "?")

# ---- yaz ----
BASLIK = ["sinif", "ad", "bolge_veya_koordinat", "cins_tur", "f_t", "mevcut_kaynak", "beyan_neden", "bagli_kronoloji_madde_sayisi", "dosya:satir"]
with open(os.path.join(CIK, "envanter.tsv"), "w", encoding="utf-8", newline="") as f:
    f.write("\t".join(BASLIK) + "\n")
    for r in ROWS:
        f.write("\t".join(x.replace("\t", " ") for x in r) + "\n")

# ---- ozet ----
sinif_say = collections.Counter(r[0] for r in ROWS)
yer_sinif = collections.defaultdict(set)
for r in ROWS:
    if r[0] in ("c1-asiret-kunye", "e2-beyan-edilen-bosluk-listesi"): continue
    yer_sinif[r[1]].add(r[0])
cok = {a: s for a, s in yer_sinif.items() if len(s) > 1}
cift = collections.Counter(tuple(sorted(s)) for s in cok.values())
benzersiz = {}
for r in ROWS:
    if r[0] == "c1-asiret-kunye": continue
    benzersiz.setdefault(r[1], int(r[7]))
yerler = {a: n for a, n in benzersiz.items()}
top = sorted(((n, a, sorted(yer_sinif.get(a, []))) for a, n in yerler.items() if a in yer_sinif), reverse=True)[:20]
sifir = collections.Counter()
for sn in sinif_say:
    adlar = {r[1] for r in ROWS if r[0] == sn}
    sifir[sn] = sum(1 for a in adlar if SAY.get(a, 0) == 0)
tum_adlar = set(yer_sinif)
sifir_tum = sum(1 for a in tum_adlar if SAY.get(a, 0) == 0)
a_cins = collections.Counter(A.values())
b_cins = collections.Counter(b["cins"] for b in BOS)
f_alt = collections.Counter(v[1] for v in F.values())
out = []
w = out.append
w("# Envanter 1119 - ozet (betikle uretildi: envanter.py)\n")
w("Olcum agaci: worktree HEAD (%s). Kronoloji: %d madde (OLAYLAR*/KRONOLOJI*), yer alani dolu madde: odak_yer=%d yer_id=%d yer=%d; node vm ile %d data betigi yuklendi, yukleme hatasi=%d. Yerlesim: %d kayit (girdi.yukle)." % (
    os.popen("git rev-parse --short HEAD").read().strip(), nj["madde"], nj["alanlar"].get("odak_yer", 0), nj["alanlar"].get("yer_id", 0), nj["alanlar"].get("yer", 0), nj["srcs"], len(nj["hata"]), len(Y)))
w("\n## Sinif basina satir sayisi\n")
for s, n in sorted(sinif_say.items()): w("- %s: %d" % (s, n))
w("\nToplam satir: %d" % len(ROWS))
w("\n## Dogrulama (denetle.py tanimlariyla)\n")
w("- (a) degismez1 sahipsiz AD: %d (denetle.py BEKLENEN_SAHIPSIZ tavani 210)" % len(S))
w("- (a) cins dagilimi: %s" % dict(a_cins))
w("- (b) BOS_ALANLAR: %d, cins: %s" % (len(BOS), dict(b_cins)))
w("- (c1) asiret/konfederasyon kunyesi: %d satir = %d siki (devletler.js tur ~ kabile|konfeder|boylar|gocebe VEYA ad ~ konfederasyon|asiret|kabile|boylar|kavim) + %d 'YALNIZ-federasyon' (tur/ad federasyon; cogu modern/devlet federasyonu, asiret degil; c2'ye alinmadi); c2 = siki kunyelere bagli yerlesim-pencere (yerlesim basina bir satir) ciftleri: %d; c3 (kabile noktalari = BOS_ALANLAR kabile alt kumesi): %d" % (
    len(ASIRET), len(ASIRET) - len(FEDONLY), len(FEDONLY), sinif_say["c2-asiret-penceresi"], sinif_say["c3-asiret-devletsiz-nokta"]))
w("- (d) kaynaksiz s: 'hicbiri' yerlesim: %d, donem: %d (kayit_kaynaksiz=%d, donem_ici=%d, s_tasiyan=%d; yalniz 'hicbiri' listelendi)" % (
    len(K["hicbiri"]), ndonem, len(K["kayit_kaynaksiz"]), len(K["donem_ici"]), len(K["s_tasiyan"])))
w("- (e) __BOSLUK__ donemi: %d (yerlesim: %d), bunlardan BEYAN_EDILEN_BOSLUK ile eslesen: %d; BEYAN_EDILEN_BOSLUK listesi: %d tuple" % (
    ne_b, len({r[1] for r in ROWS if r[0] == 'e-bosluk-donemi'}), nb_beyan, len(BEY)))
w("- (f) arazi-tipi bos toprak: %d yer; alt tur: %s" % (len(F), dict(f_alt)))
w("\n## Ayni yerin birden cok sinifta gecisi\n")
w("Birden cok sinifta yer sayisi: %d (c1 ve e2 kunye/liste satirlari haric; c3 = b'nin kabile alt kumesi, f cogu zaman b ile ortusur: beklenen)" % len(cok))
for k, n in cift.most_common(): w("- %s: %d" % (" + ".join(k), n))
w("\n## Bagli kronoloji maddesi en cok ilk 20 (yer adi = odak_yer/yer_id/yer esitligi; tum siniflardaki yerler)\n")
for n, a, s in top: w("- %d  %s  [%s]" % (n, a, ", ".join(s)))
w("\n## Hic maddesi olmayan\n")
for sn, n in sorted(sifir.items()):
    ad_say = len({r[1] for r in ROWS if r[0] == sn})
    w("- %s: %d / %d benzersiz ad" % (sn, n, ad_say))
w("- TUM siniflar (c1 haric) benzersiz yer: %d, maddesiz: %d" % (len(tum_adlar), sifir_tum))
w("\nNot: BEYAN_EDILEN_BOSLUK 5 tuple'i 'donemler arasi bosluk' beyanidir (ornegin Cenne 1700-1818); verideki d:__BOSLUK__ donemleriyle ayni sey DEGIL, bu yuzden e satirlariyla eslesme 0. e = d:'__BOSLUK__' ile acikca boyanan donemler (beyanli/BEYANLI kaynakli olanlar neden sutununda).")
w("Not: d sinifi: 43 yerlesim / %d donem (gorevde '44 / ~148' denmisti; bugunku denetle.kaynaksizlik_olc 'hicbiri' = 43 yerlesim). Kayit duzeyi kaynaksiz (kayit_kaynaksiz=%d) ama donem-ici kaynakli olanlar listelenmedi." % (ndonem, len(K["kayit_kaynaksiz"])))
w("Not: sahipsiz (a) sinifinda cins BOS_ALANLAR.cins'ten gelir; 'devletsiz-yerlesim' = devletsiz SEHIR (yerlesim var, devlet yok), 'devletsiz' = bos arazi. BOS_ALANLAR'da yok ve bos: alani yok = BEYANSIZ sahipsiz (denetle 1c tavani).")
w("Not: kronoloji eslesmesi ad tam esitligi (odak_yer|yer_id|yer); 'Tekirdag' gibi yazim farklari (Dellis/Dellîs vakasi) kacirilir - alt sinir.")
w("Not: c1 kunye satirinda kron sayisi 'devlet/devletler' alani kunye id'sine esit madde sayisidir (yer esitligi degil).")
open(os.path.join(CIK, "ozet.md"), "w", encoding="utf-8").write("\n".join(out) + "\n")
print("\n".join(out))
