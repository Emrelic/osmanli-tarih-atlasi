# -*- coding: utf-8 -*-
"""GEOMETRI HAVUZUNU ZAMANA GORE DILIMLE — YUK-BOLME-0925.

uret_petek.py'den SONRA kosar (uret_devirler.py gibi); motora DOKUNMAZ.
Girdi : data/donemler.js · data/devletler_harita.js (motorun yazdigi, havuzlu hali)
        🔴 GIRDIYE YAZILMAZ: sekiz arac (denetle_bosluk, denetle_bitisiklik,
        denetle_gorunurluk, uret_devirler, motor_esitlik, renk_cikti, dolgu,
        denetle_yayin) havuzu BU dosyalardan okuyor; bosaltmak onlari kirar.
Cikti : data/donemler_web.js · data/devletler_harita_web.js — ayni degiskenler,
        havuz dizileri BOS (window.PARCALAR = [] …) + window.GEO_DILIMLER
        + data/geo/gNN.json  (her dilimin halkalari, GLOBAL indeksleriyle)
        index.html YALNIZ _web dosyalarini yukler.

ESIT BAYT: dilim sinirlari kayit kenarlarina (f/t gunleri) oturur, dilimin
boyu ham bayt hedefine gore acgozlu secilir; hedef, istenen dilim sayisini
verecek sekilde ikili aranir.  Bir dilim, [f_i, f_{i+1}) araliginin HERHANGI
bir gununu cizmeye yeten BUTUN halkalari tasir (kendi basina yeterli; ortak
havuz YOK — olculdu: ORTAK kova acilisa 20 MB ham ekliyordu).

Tekrar kosturmak guvenli: girdi okunur, yalniz _web + geo/ yeniden yazilir.
Kullanim:  py arac/geo_dilimle.py [--k 24] [--kok <depo koku>]
           py arac/geo_dilimle.py --sina        # YAYIN KAPISI SARTI, hicbir sey yazmaz

🔴 --sina — CATAL KAPISI (YILDIRIM BAYEZIT hukmu, M-5180 ④):
Bu betikten sonra TARAYICI `_web` + `geo/` okur, SEKIZ ARAC asil dosyayi okur.
Dilimleyicide bir kusur olursa araclar TEMIZ der, site YANLIS gosterir. Bu
yuzden esdegerlik her yayindan once yeniden sorulur:
  S1 TAMLIK  — app.js'in sectigi dilim, o gun aktif her kaydin her halkasini
               tasiyor mu? (gunIdx/aktifAralik/geoDilimNo app.js'in AYNISI;
               test gunleri: her kaydin f, f-1, t, t-1 · dilim siniri ±1 · uclar)
  S1-NEG     — ayni sinav dilim secimi 1 GUN kaydirilarak: EKSIK BULMALI.
               Bulamazsa sinav kordur ve kapi KALIR (C13: iki yonde sinanmayan
               denetim calisiyor sayilmaz).
  S2 AYNILIK — dilimdeki her halka asil havuzdaki ayni indeksli halkayla esit mi?
               Asil havuzun HER halkasi en az bir dilimde mi?
  S3 CATAL   — `_web` dosyalari asil dosyalarla, havuz satiri ve GEO_DILIMLER
               disinda SATIR SATIR ayni mi? (DONEMLER/DEVLET_HARITA/PARCA_HALKA
               ayrismasi site ile araclari sessizce ayirirdi.)
  S4 DOSYA   — GEO_DILIMLER'in her dosyasi diskte mi, yazilan bayt boyu tutuyor mu?
Cikis kodu 0 = temiz · 1 = ihlal. Sure ~1-2 dk (bellek ~2 GB).
"""
import argparse, datetime, gzip, json, os, re, sys, time
sys.stdout.reconfigure(encoding="utf-8", errors="replace")

ap = argparse.ArgumentParser()
ap.add_argument("--k", type=int, default=24)
ap.add_argument("--kok", default=os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
ap.add_argument("--sina", action="store_true", help="catal kapisi: S1-S4, hicbir sey yazmaz")
arg = ap.parse_args()
KOK = arg.kok
T0 = time.time()
BAS_S, BITIS_S = "1281-01-01", "1923-10-29"


def gun(s):
    y, a, g = (s.split("-") + ["1", "1"])[:3]
    return int(y) * 372 + (int(a or 1) - 1) * 31 + (int(g or 1) - 1)


BAS, BITIS = gun(BAS_S), gun(BITIS_S)


def satirlar(yol):
    return open(yol, encoding="utf-8").read().split("\n")


def degisken(sat, ad):
    on = "window." + ad + " = "
    for i, s in enumerate(sat):
        if s.startswith(on):
            g = s[len(on):].rstrip()
            return i, (g[:-1] if g.endswith(";") else g)
    raise SystemExit("YOK: window." + ad)


def halkalara_bol(govde):
    g = govde.strip()
    if g == "[]":
        raise SystemExit("HAVUZ BOS — dosya zaten dilimlenmis. Once uret_petek.py ciktisini geri getir.")
    assert g.startswith("[[[") and g.endswith("]]]"), g[:30]
    parca = g[1:-1].split("]],[[")
    son = len(parca) - 1
    return [("[[" if k else "") + p + ("]]" if k < son else "") for k, p in enumerate(parca)]


yol_os = os.path.join(KOK, "data", "donemler.js")
yol_yb = os.path.join(KOK, "data", "devletler_harita.js")
S_OS, S_YB = satirlar(yol_os), satirlar(yol_yb)
i_hos, g_hos = degisken(S_OS, "PARCALAR")
i_hyb, g_hyb = degisken(S_YB, "DEVLET_PARCALAR")
H_OS, H_YB = halkalara_bol(g_hos), halkalara_bol(g_hyb)
PH_OS = json.loads(degisken(S_OS, "PARCA_HALKA")[1])
PH_YB = json.loads(degisken(S_YB, "DEVLET_PARCA_HALKA")[1])
DON = json.loads(degisken(S_OS, "DONEMLER")[1])
DH = json.loads(degisken(S_YB, "DEVLET_HARITA")[1])


# ═══════════════════════════════════════════════════════════════ --sina
def js_gun(s):
    """app.js gunIdx: Math.round(Date.UTC(+y, (+m || 1) - 1, +d || 1) / 864e5).
    Date.UTC'nin iki huyu AYNEN taklit edilir: 0-99 yili 1900+ sayilir; gun ve
    ay tasmasi ileri yuvarlanir (1700-02-30 -> 2 Mart)."""
    p = s.split("-")
    y = int(p[0])
    m = int(p[1]) if len(p) > 1 and p[1] else 0
    d = int(p[2]) if len(p) > 2 and p[2] else 0
    m, d = (m or 1), (d or 1)
    if 0 <= y <= 99:
        y += 1900
    y += (m - 1) // 12
    m = (m - 1) % 12 + 1
    return datetime.date(y, m, 1).toordinal() + d - 1


def sina():
    ihlal = []
    web_os = os.path.join(KOK, "data", "donemler_web.js")
    web_yb = os.path.join(KOK, "data", "devletler_harita_web.js")
    for y in (web_os, web_yb):
        if not os.path.exists(y):
            print("❌ YOK:", y); return 1
    W_OS, W_YB = satirlar(web_os), satirlar(web_yb)

    # ---- S3 CATAL: havuz satiri + GEO_DILIMLER + baslik disinda satir satir esit
    def govde(sat, havuz_adi, web):
        on = "window." + havuz_adi + " = "
        out = [s for s in sat if not s.startswith(on) and not s.startswith("window.GEO_DILIMLER = ")]
        if web:
            assert out and out[0].startswith("// "), "web basligi yok"
            out = out[1:]
        return out
    for ad, asil, web, hv in (("donemler", S_OS, W_OS, "PARCALAR"),
                              ("devletler_harita", S_YB, W_YB, "DEVLET_PARCALAR")):
        a, w = govde(asil, hv, False), govde(web, hv, True)
        fark = sum(1 for x, z in zip(a, w) if x != z) + abs(len(a) - len(w))
        print("S3 CATAL %-17s satir %d/%d · FARKLI %d" % (ad, len(a), len(w), fark))
        if fark:
            ihlal.append("S3 %s: _web asil dosyadan AYRISMIS (%d satir) — geo_dilimle.py yeniden kosmali" % (ad, fark))
    # satir "[];   // 🔴 DILIMLENDI …" — yorum payi var, basi sinanir
    if not degisken(W_OS, "PARCALAR")[1].startswith("[];") or not degisken(W_YB, "DEVLET_PARCALAR")[1].startswith("[];"):
        ihlal.append("S3: _web havuzu BOS DEGIL (tarayici 131 MB'i yine indirir)")

    # ---- S4 DOSYA
    G = json.loads(degisken(W_OS, "GEO_DILIMLER")[1])
    if G.get("o_n") != len(H_OS) or G.get("y_n") != len(H_YB):
        ihlal.append("S4: GEO_DILIMLER havuz boyu %s/%s ≠ asil %d/%d" % (G.get("o_n"), G.get("y_n"), len(H_OS), len(H_YB)))
    DIL = []
    for x in G["d"]:
        y = os.path.join(KOK, x["dosya"])
        if not os.path.exists(y):
            ihlal.append("S4: dilim dosyasi YOK: " + x["dosya"]); DIL.append(None); continue
        ham = open(y, "rb").read()
        if len(ham) != x["ham"]:
            ihlal.append("S4: %s bayt %d ≠ tablo %d (bayat dilim)" % (x["dosya"], len(ham), x["ham"]))
        j = json.loads(ham.decode("utf-8"))
        DIL.append(({i: r for i, r in zip(j["o"]["i"], j["o"]["r"])},
                    {i: r for i, r in zip(j["y"]["i"], j["y"]["r"])}))
    print("S4 DOSYA  %d dilim · eksik %d" % (len(G["d"]), sum(1 for d in DIL if d is None)))
    if any(d is None for d in DIL):
        for s in ihlal: print("❌", s)
        return 1

    # ---- S2 AYNILIK + kapsama
    fark = n = 0
    kapsanan_o, kapsanan_y = set(), set()
    for do, dy in DIL:
        for i, r in do.items():
            n += 1; kapsanan_o.add(i)
            if i >= len(H_OS) or json.loads(H_OS[i]) != r: fark += 1
        for i, r in dy.items():
            n += 1; kapsanan_y.add(i)
            if i >= len(H_YB) or json.loads(H_YB[i]) != r: fark += 1
    kaps_eksik = (len(H_OS) - len(kapsanan_o)) + (len(H_YB) - len(kapsanan_y))
    print("S2 AYNILIK halka %d · FARKLI %d · hicbir dilimde olmayan asil halka %d" % (n, fark, kaps_eksik))
    if fark: ihlal.append("S2: %d halka asil havuzdan FARKLI" % fark)
    if kaps_eksik: ihlal.append("S2: %d asil halka hicbir dilimde yok" % kaps_eksik)

    # ---- S1 TAMLIK (+ negatif)
    BAS_J, BITIS_J = js_gun(BAS_S), js_gun(BITIS_S)
    SINIR = [js_gun(x["f"]) for x in G["d"]]

    def dilim_no(t, kay=0):             # 🔴 app.js geoDilimNo'nun AYNISI (kay=0)
        i = 0
        while i + 1 < len(SINIR) and SINIR[i + 1] <= t + kay:
            i += 1
        return i

    def aktif(fi, ti, t):                # app.js aktifAralik
        return fi <= t and (t < ti or (t == BITIS_J and ti == BITIS_J))

    WD = json.loads(degisken(W_OS, "DONEMLER")[1])
    WH = json.loads(degisken(W_YB, "DEVLET_HARITA")[1])
    WPH_O = json.loads(degisken(W_OS, "PARCA_HALKA")[1])
    WPH_Y = json.loads(degisken(W_YB, "DEVLET_PARCA_HALKA")[1])
    KAY = []
    for d in WD:
        ph = list(d.get("o") or []) + list(d.get("v") or [])
        for hb in d.get("h") or []: ph += list(hb.get("g") or [])
        KAY.append((js_gun(d["f"]), js_gun(d["t"]), 0,
                    {h for p in ph if isinstance(p, int) for h in WPH_O[p]}))
    for s in WH:
        for p in s["dnm"]:
            KAY.append((js_gun(p["f"]), js_gun(p["t"]), 1,
                        {h for q in (p.get("g") or []) if isinstance(q, int) for h in WPH_Y[q]}))
    gunler = {BAS_J, BITIS_J}
    for fi, ti, _, _ in KAY: gunler.update((fi, fi - 1, ti, ti - 1))
    for x in SINIR: gunler.update((x - 1, x, x + 1))
    GUN = sorted(g for g in gunler if BAS_J <= g <= BITIS_J)

    def tamlik(kay):
        ciftler = set()                  # (kayit, dilim) — ayni cift bir kez sinanir
        kg = 0
        for t in GUN:
            dn = dilim_no(t, kay)
            for k, (fi, ti, _, _) in enumerate(KAY):
                if aktif(fi, ti, t):
                    kg += 1; ciftler.add((k, dn))
        eksik = 0
        for k, dn in ciftler:
            havuz = DIL[dn][KAY[k][2]]
            eksik += sum(1 for h in KAY[k][3] if h not in havuz)
        return kg, len(ciftler), eksik
    kg, nc, eksik = tamlik(0)
    print("S1 TAMLIK test gunu %d · aktif kayit-gun %d · (kayit,dilim) cifti %d · EKSIK halka %d" % (len(GUN), kg, nc, eksik))
    if eksik: ihlal.append("S1: %d halka, gosterildigi gunun diliminde YOK — site o gunleri YANLIS/eksik cizer" % eksik)
    _, _, eksik_neg = tamlik(1)
    print("S1-NEG   dilim secimi 1 gun kaydirildi · EKSIK %d (sifirdan buyuk OLMALI)" % eksik_neg)
    if not eksik_neg: ihlal.append("S1-NEG: kaydirilmis secimde de eksik 0 — SINAV KOR, S1'in temizligi bir sey soylemez")

    if ihlal:
        for s in ihlal: print("❌", s)
        print("SONUC: IHLAL — %d" % len(ihlal)); return 1
    print("SONUC: TEMIZ — tarayicinin gordugu geometri araclarin gordugune esit (%.0f sn)" % (time.time() - T0))
    return 0


if arg.sina:
    sys.exit(sina())
# butunluk: PARCA_HALKA'nin gosterdigi en buyuk halka havuzda olmali
assert max(max(x) for x in PH_OS if x) < len(H_OS), "PARCA_HALKA havuz disini gosteriyor"
assert max(max(x) for x in PH_YB if x) < len(H_YB), "DEVLET_PARCA_HALKA havuz disini gosteriyor"
print("okundu %.0f sn · halka: Osmanli %d · yabanci %d" % (time.time() - T0, len(H_OS), len(H_YB)))

OFS = 10_000_000
BOY = {}
for i, h in enumerate(H_OS): BOY[i] = len(h.encode("utf-8"))
for i, h in enumerate(H_YB): BOY[OFS + i] = len(h.encode("utf-8"))


def coz(dizi, ph, ofs):
    out = set()
    for p in dizi or []:
        if isinstance(p, int):
            out.update(ofs + h for h in ph[p])
    return out


KAY = []                      # (f, t, kume) — pencereye kirpilmis
TARIH_METNI = {BAS: BAS_S}
for f_s, t_s, s in (
        [(d["f"], d["t"], coz(d.get("o"), PH_OS, 0) | coz(d.get("v"), PH_OS, 0) |
          set().union(*[coz(hb.get("g"), PH_OS, 0) for hb in (d.get("h") or [])]))
         for d in DON] +
        [(dn["f"], dn["t"], coz(dn.get("g"), PH_YB, OFS)) for dv in DH for dn in dv["dnm"]]):
    f, t = gun(f_s), gun(t_s)
    TARIH_METNI.setdefault(f, f_s)
    f2 = max(f, BAS)
    t2 = BITIS + 1 if t >= BITIS else t          # t==BITIS son gunu da kapsar (aktifAralik)
    if f2 < t2 and s:
        KAY.append((f2, t2, s))

olay = sorted({BAS} | {f for f, t, s in KAY} | {t for f, t, s in KAY if t <= BITIS})
basla, bit = {}, {}
for f, t, s in KAY:
    basla.setdefault(f, []).append(s); bit.setdefault(t, []).append(s)
ref, EKLENEN, AKTIF = {}, [], []
for x in olay:
    for s in bit.get(x, []):
        for k in s:
            ref[k] -= 1
            if not ref[k]: del ref[k]
    ek = set()
    for s in basla.get(x, []):
        for k in s:
            if k not in ref: ref[k] = 0; ek.add(k)
            ref[k] += 1
    EKLENEN.append(ek); AKTIF.append(set(ref))
NJ = len(olay)


def acgozlu(hedef):
    dil, a = [], 0
    s = set(AKTIF[0]); b = sum(BOY[k] for k in s)
    for j in range(1, NJ):
        yeni = [k for k in EKLENEN[j] if k not in s]
        eb = sum(BOY[k] for k in yeni)
        if b + eb > hedef:
            dil.append(a); a = j
            s = set(AKTIF[j]); b = sum(BOY[k] for k in s)
        else:
            s.update(yeni); b += eb
    dil.append(a)
    return dil                    # dilim baslangic temel-aralik indeksleri


lo, hi, en = max(sum(BOY[k] for k in A) for A in AKTIF), sum(BOY.values()), None
for _ in range(24):
    orta = (lo + hi) // 2
    d = acgozlu(orta)
    if len(d) > arg.k: lo = orta
    else: hi, en = orta, d
BASLAR = en
print("K=%d istendi -> %d dilim · hedef %.2f MB ham" % (arg.k, len(BASLAR), hi / 1048576))


def yuk(kume):
    o = sorted(k for k in kume if k < OFS)
    y = sorted(k - OFS for k in kume if k >= OFS)
    return ('{"o":{"i":' + json.dumps(o, separators=(",", ":")) + ',"r":[' + ",".join(H_OS[k] for k in o) +
            ']},"y":{"i":' + json.dumps(y, separators=(",", ":")) + ',"r":[' + ",".join(H_YB[k] for k in y) + ']}}')


geo_dir = os.path.join(KOK, "data", "geo")
os.makedirs(geo_dir, exist_ok=True)
for eski in os.listdir(geo_dir):
    if re.match(r"g\d+\.json$", eski): os.remove(os.path.join(geo_dir, eski))
tablo = []
for n, a in enumerate(BASLAR):
    b = BASLAR[n + 1] - 1 if n + 1 < len(BASLAR) else NJ - 1
    kume = set(AKTIF[a])
    for j in range(a + 1, b + 1): kume |= EKLENEN[j]
    metin = yuk(kume)
    ad = "g%02d.json" % (n + 1)
    open(os.path.join(geo_dir, ad), "w", encoding="utf-8", newline="\n").write(metin)
    ham = len(metin.encode("utf-8")); gz = len(gzip.compress(metin.encode("utf-8"), 6))
    tablo.append({"f": TARIH_METNI[olay[a]], "dosya": "data/geo/" + ad, "halka": len(kume),
                  "ham": ham, "gz": gz})
    print("  %s  %s  %6d halka  ham %5.2f MB  gzip %4.2f MB" % (ad, TARIH_METNI[olay[a]], len(kume), ham / 1048576, gz / 1048576))

GEO = {"surum": 1, "o_n": len(H_OS), "y_n": len(H_YB), "d": tablo}
S_OS[i_hos] = "window.PARCALAR = [];   // 🔴 DILIMLENDI — halkalar data/geo/gNN.json'da (arac/geo_dilimle.py)"
S_YB[i_hyb] = "window.DEVLET_PARCALAR = [];   // 🔴 DILIMLENDI — halkalar data/geo/gNN.json'da (arac/geo_dilimle.py)"
S_OS.insert(i_hos + 1, "window.GEO_DILIMLER = " + json.dumps(GEO, ensure_ascii=False, separators=(",", ":")) + ";")
web_os = os.path.join(KOK, "data", "donemler_web.js")
web_yb = os.path.join(KOK, "data", "devletler_harita_web.js")
BASLIK = "// 🔴 TARAYICI KOPYASI — arac/geo_dilimle.py uretti; motorun asli data/%s (araclar onu okur). ELLE DUZENLEME."
open(web_os, "w", encoding="utf-8", newline="\n").write(BASLIK % "donemler.js" + "\n" + "\n".join(S_OS))
open(web_yb, "w", encoding="utf-8", newline="\n").write(BASLIK % "devletler_harita.js" + "\n" + "\n".join(S_YB))
print("yazildi: donemler_web.js %.2f MB · devletler_harita_web.js %.2f MB · %d dilim · toplam gzip %.2f MB · %.0f sn" % (
    os.path.getsize(web_os) / 1048576, os.path.getsize(web_yb) / 1048576, len(tablo),
    sum(x["gz"] for x in tablo) / 1048576, time.time() - T0))
