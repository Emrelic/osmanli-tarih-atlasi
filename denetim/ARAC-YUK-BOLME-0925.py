# -*- coding: utf-8 -*-
"""YUK-BOLME-0925 — geometri havuzunu ZAMANA gore bolmenin BAYT olcumu.

Birim = HALKA (PARCALAR / DEVLET_PARCALAR ogesi). Kayit -> PARCA_HALKA -> halka.
  Osmanli kaydi: DONEMLER[].o, .v, .h[].g   (her biri PARCA_HALKA indeks dizisi)
  Yabanci kaydi: DEVLET_HARITA[].dnm[].g    (DEVLET_PARCA_HALKA indeks dizisi)
Bir kayit [f,t) araliginda aktif (app.js aktifAralik; t==BITIS son gunu kapsar).
Dilim [A,B) bir kaydi ister <=> kayit araligi dilimle kesisir.

Olculenler:
 1. halka bayti (kaynak metnin kendisi, yeniden serilestirme YOK) + havuz gzip
 2. uc kova: ORTAK (>=2 dilim) / DILIME OZEL (1 dilim) + TEK SEFERLIK (1 kayit)
 3. K dilim icin ESIT BAYT kesimi (acgozlu, hedef ikili aranir): her dilimin ham
    ve GZIP bayti GERCEK yuk metni kurularak olculur
 4. acilis gunu (1281-01-01) ve ornek gunler icin gereken halka kumesi
Cikti: denetim/YUK-BOLME-0925.json
"""
import gzip, json, os, re, sys, time
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
T0 = time.time()


def degisken(metin, ad):
    """window.AD = <deger>  -> (bas, son) metin araligi (noktali virgulsuz)."""
    m = re.search(r"window\." + ad + r"\s*=\s*", metin)
    if not m:
        return None
    s = m.end()
    n = re.search(r"\n\s*window\.[A-Z_]+\s*=", metin[s:])
    e = s + n.start() if n else len(metin)
    govde = metin[s:e].rstrip()
    if govde.endswith(";"):
        govde = govde[:-1]
    return govde


def halkalara_bol(govde, beklenen):
    """Havuz metni '[[[x,y],..],[[x,y],..]]'. Halka sinirı metinde ']],[[' —
    halka ici ayrac yalniz '],['. Parse etmeden boler (bellek)."""
    g = govde.strip()
    assert g.startswith("[[[") and g.endswith("]]]"), g[:20]
    ic = g[1:-1]                       # '[[..]],[[..]]'
    parca = ic.split("]],[[")
    out = []
    for k, p in enumerate(parca):
        if k > 0:
            p = "[[" + p
        if k < len(parca) - 1:
            p = p + "]]"
        out.append(p)
    assert len(out) == beklenen, (len(out), beklenen)
    return out


def gun(s):
    y, a, g = (s.split("-") + ["1", "1"])[:3]
    return int(y) * 372 + (int(a or 1) - 1) * 31 + (int(g or 1) - 1)


def gun_yaz(n):
    y, r = divmod(n, 372)
    return "%04d-%02d-%02d" % (y, r // 31 + 1, r % 31 + 1)


BAS = gun("1281-01-01")
BITIS = gun("1923-10-29")

# ---------------------------------------------------------------- oku
m_os = open(os.path.join(KOK, "data", "donemler.js"), encoding="utf-8").read()
DON = json.loads(degisken(m_os, "DONEMLER"))
PH_OS = json.loads(degisken(m_os, "PARCA_HALKA"))
PH_OS_N = len(PH_OS)
havuz_os_metin = degisken(m_os, "PARCALAR")
n_os = havuz_os_metin.count("]],[[") + 1
H_OS = halkalara_bol(havuz_os_metin, n_os)
SERBEST_B = len(degisken(m_os, "SERBEST").encode("utf-8"))
del m_os, havuz_os_metin

m_yb = open(os.path.join(KOK, "data", "devletler_harita.js"), encoding="utf-8").read()
DH = json.loads(degisken(m_yb, "DEVLET_HARITA"))
PH_YB = json.loads(degisken(m_yb, "DEVLET_PARCA_HALKA"))
havuz_yb_metin = degisken(m_yb, "DEVLET_PARCALAR")
n_yb = havuz_yb_metin.count("]],[[") + 1
H_YB = halkalara_bol(havuz_yb_metin, n_yb)
del m_yb, havuz_yb_metin
print("okundu %.0f sn · Osmanli halka %d · yabanci halka %d" % (time.time() - T0, len(H_OS), len(H_YB)))

OFS = 10_000_000            # yabanci halka kimligi = OFS + indeks
HALKA = {}                  # kimlik -> metin
for i, h in enumerate(H_OS):
    HALKA[i] = h
for i, h in enumerate(H_YB):
    HALKA[OFS + i] = h
BOY = {k: len(v.encode("utf-8")) for k, v in HALKA.items()}
HAM_OS = sum(BOY[i] for i in range(len(H_OS)))
HAM_YB = sum(BOY[OFS + i] for i in range(len(H_YB)))


def coz(dizi, ph, ofs):
    out = set()
    for p in dizi or []:
        if not isinstance(p, int):
            continue
        for h in ph[p]:
            out.add(ofs + h)
    return out


# kayitlar: (f, t, halka kumesi, etiket)
KAY = []
for d in DON:
    s = coz(d.get("o"), PH_OS, 0) | coz(d.get("v"), PH_OS, 0)
    for hb in d.get("h") or []:
        s |= coz(hb.get("g"), PH_OS, 0)
    KAY.append((gun(d["f"]), gun(d["t"]), s, "osm"))
for dv in DH:
    for dn in dv["dnm"]:
        KAY.append((gun(dn["f"]), gun(dn["t"]), coz(dn.get("g"), PH_YB, OFS), dv["id"]))

kullanilan = set()
for f, t, s, _ in KAY:
    kullanilan |= s
yetim = [k for k in HALKA if k not in kullanilan]
print("kayit %d · kullanilan halka %d · YETIM (hic kayitta yok) %d = %.2f MB"
      % (len(KAY), len(kullanilan), len(yetim), sum(BOY[k] for k in yetim) / 1048576))

# pencereye kirp (atlasin gorunur ekseni)
KAYK = []
for f, t, s, e in KAY:
    f2, t2 = max(f, BAS), min(t, BITIS + 1)   # BITIS gunu t==BITIS kaydinca kapsanir
    if t == BITIS:
        t2 = BITIS + 1
    if f2 < t2:
        KAYK.append((f2, t2, s, e))
disari = len(KAY) - len(KAYK)


def gz(metin):
    return len(gzip.compress(metin.encode("utf-8"), 6))


def yuk_metni(kume):
    """Gercek dilim yuku: {"o":{"i":[..],"r":[..]},"y":{...}} JSON metni."""
    o = sorted(k for k in kume if k < OFS)
    y = sorted(k - OFS for k in kume if k >= OFS)
    return ('{"o":{"i":' + json.dumps(o, separators=(",", ":")) + ',"r":[' + ",".join(HALKA[k] for k in o) +
            ']},"y":{"i":' + json.dumps(y, separators=(",", ":")) + ',"r":[' + ",".join(HALKA[OFS + k] for k in y) + ']}}')


mb = lambda b: round(b / 1048576.0, 2)
rap = {"olcum_gunu": "2026-09-25", "kaynak": "data/donemler.js + data/devletler_harita.js (r10122 diskte)"}

# ---------------------------------------------------------------- 1. havuz
t1 = time.time()
tum = yuk_metni(set(HALKA))
rap["havuz"] = {"osmanli_halka": len(H_OS), "yabanci_halka": len(H_YB),
                "osmanli_ham_mb": mb(HAM_OS), "yabanci_ham_mb": mb(HAM_YB),
                "toplam_ham_mb": mb(HAM_OS + HAM_YB), "toplam_gzip_mb": mb(gz(tum)),
                "yetim_halka": len(yetim), "yetim_mb": mb(sum(BOY[k] for k in yetim)),
                "kayit": len(KAY), "pencere_disi_kayit": disari, "serbest_mb": mb(SERBEST_B),
                "osmanli_parca_halka_oge": PH_OS_N, "yabanci_parca_halka_oge": len(PH_YB)}
ORAN = gz(tum) / len(tum.encode("utf-8"))
del tum
print("havuz: ham %.2f MB · gzip %.2f MB (oran %.3f) %.0f sn" % (
    rap["havuz"]["toplam_ham_mb"], rap["havuz"]["toplam_gzip_mb"], ORAN, time.time() - t1))

# ---------------------------------------------------------------- temel aralıklar
olay = sorted({BAS, BITIS + 1} | {f for f, t, s, e in KAYK} | {t for f, t, s, e in KAYK})
olay = [x for x in olay if BAS <= x <= BITIS + 1]
# her temel aralik [olay[j], olay[j+1]) icin: eklenen halkalar (onceki araliga gore)
basla = {}
bit = {}
for f, t, s, e in KAYK:
    basla.setdefault(f, []).append(s)
    bit.setdefault(t, []).append(s)
ref = {}
EKLENEN = []      # j -> set
AKTIF_B = []      # j -> aktif halka bayti
aktif_b = 0
for j in range(len(olay) - 1):
    x = olay[j]
    for s in bit.get(x, []):
        for k in s:
            ref[k] -= 1
            if ref[k] == 0:
                del ref[k]
                aktif_b -= BOY[k]
    ek = set()
    for s in basla.get(x, []):
        for k in s:
            if k not in ref:
                ref[k] = 0
                aktif_b += BOY[k]
                ek.add(k)
            ref[k] += 1
    EKLENEN.append(ek)
    AKTIF_B.append(aktif_b)
NJ = len(olay) - 1
print("temel aralik %d · tek gunluk azami aktif %.2f MB (ham)" % (NJ, max(AKTIF_B) / 1048576))


def aktif_kume(j):
    s = set()
    for f, t, ks, e in KAYK:
        if f <= olay[j] < t:
            s |= ks
    return s


def aralik_kume(a, b):
    """temel araliklar a..b (dahil) birlesimi"""
    s = aktif_kume(a)
    for j in range(a + 1, b + 1):
        s |= EKLENEN[j]
    return s


def acgozlu(hedef):
    """ham bayt hedefiyle acgozlu kesim -> [(a,b)] temel aralik indeksleri"""
    dilim = []
    a = 0
    s = set(aktif_kume(0)); b_top = sum(BOY[k] for k in s)
    j = 1
    while j < NJ:
        yeni = [k for k in EKLENEN[j] if k not in s]
        ek_b = sum(BOY[k] for k in yeni)
        if b_top + ek_b > hedef and j > a:
            dilim.append((a, j - 1))
            a = j
            s = aktif_kume(j); b_top = sum(BOY[k] for k in s)
        else:
            s.update(yeni); b_top += ek_b
        j += 1
    dilim.append((a, NJ - 1))
    return dilim


def k_icin(K):
    lo, hi = max(AKTIF_B), HAM_OS + HAM_YB
    en = None
    for _ in range(22):
        orta = (lo + hi) // 2
        d = acgozlu(orta)
        if len(d) > K:
            lo = orta
        else:
            hi = orta; en = d
    return en


# ---------------------------------------------------------------- 3. K dilim
rap["dilimleme"] = {}
KUMELER = {}
for K in (8, 12, 16, 20, 24, 30):
    t1 = time.time()
    d = k_icin(K)
    satir = []
    top_ham = top_gz = 0
    kumeler = []
    for (a, b) in d:
        kume = aralik_kume(a, b)
        kumeler.append(kume)
        metin = yuk_metni(kume)
        h = len(metin.encode("utf-8")); g = gz(metin)
        top_ham += h; top_gz += g
        satir.append({"bas": gun_yaz(olay[a]), "son": gun_yaz(olay[b + 1] - 1),
                      "halka": len(kume), "ham_mb": mb(h), "gzip_mb": mb(g)})
    KUMELER[K] = kumeler
    # kovalar
    kac = {}
    for kume in kumeler:
        for k in kume:
            kac[k] = kac.get(k, 0) + 1
    ortak = [k for k, c in kac.items() if c >= 2]
    ozel = [k for k, c in kac.items() if c == 1]
    rap["dilimleme"][str(K)] = {
        "dilim_sayisi": len(d), "dilimler": satir,
        "toplam_ham_mb": mb(top_ham), "toplam_gzip_mb": mb(top_gz),
        "cakisma_kati_ham": round(top_ham / (HAM_OS + HAM_YB - sum(BOY[k] for k in yetim)), 3),
        "en_buyuk_gzip_mb": max(x["gzip_mb"] for x in satir),
        "en_kucuk_gzip_mb": min(x["gzip_mb"] for x in satir),
        "acilis_dilimi_gzip_mb": satir[0]["gzip_mb"],
        "kova_ortak_halka": len(ortak), "kova_ortak_mb": mb(sum(BOY[k] for k in ortak)),
        "kova_ozel_halka": len(ozel), "kova_ozel_mb": mb(sum(BOY[k] for k in ozel)),
    }
    r = rap["dilimleme"][str(K)]
    print("K=%2d -> %2d dilim · toplam gzip %6.2f MB (ham kat %.2f) · en buyuk %5.2f · en kucuk %5.2f · acilis %5.2f · ORTAK %6.2f MB / OZEL %6.2f MB  (%.0f sn)"
          % (K, len(d), r["toplam_gzip_mb"], r["cakisma_kati_ham"], r["en_buyuk_gzip_mb"], r["en_kucuk_gzip_mb"],
             r["acilis_dilimi_gzip_mb"], r["kova_ortak_mb"], r["kova_ozel_mb"], time.time() - t1))

# TEK SEFERLIK: yalniz BIR kayitta gecen halka
kayit_sayisi = {}
for f, t, s, e in KAY:
    for k in s:
        kayit_sayisi[k] = kayit_sayisi.get(k, 0) + 1
tek = [k for k, c in kayit_sayisi.items() if c == 1]
rap["kova_tek_seferlik"] = {"halka": len(tek), "mb": mb(sum(BOY[k] for k in tek)),
                            "kayit_basina_halka_dagilimi": {
                                "1": len(tek),
                                "2-5": sum(1 for c in kayit_sayisi.values() if 2 <= c <= 5),
                                "6-20": sum(1 for c in kayit_sayisi.values() if 6 <= c <= 20),
                                "21+": sum(1 for c in kayit_sayisi.values() if c > 20)}}
# halka omru (ilk kullanim -> son kullanim, yil) — ORTAK kovanin neden buyudugunu gosterir
ilk = {}; son = {}
for f, t, s, e in KAYK:
    for k in s:
        ilk[k] = min(ilk.get(k, f), f); son[k] = max(son.get(k, t), t)
kova = {"<5y": 0, "5-25y": 0, "25-100y": 0, "100-300y": 0, ">300y": 0}
kova_b = dict.fromkeys(kova, 0)
for k in ilk:
    y = (son[k] - ilk[k]) / 372.0
    ad = "<5y" if y < 5 else "5-25y" if y < 25 else "25-100y" if y < 100 else "100-300y" if y < 300 else ">300y"
    kova[ad] += 1; kova_b[ad] += BOY[k]
rap["halka_omru"] = {a: {"halka": kova[a], "mb": mb(kova_b[a])} for a in kova}
print("halka omru:", {a: "%d/%.1fMB" % (kova[a], kova_b[a] / 1048576) for a in kova})

# ---------------------------------------------------------------- 3b. ESIT YIL (Emre'nin 30 yil onerisi)
import bisect
rap["esit_yil_30"] = []
sinirlar = [gun("%04d-01-01" % y) for y in range(1281, 1924, 30)]
for n, A in enumerate(sinirlar):
    B = sinirlar[n + 1] if n + 1 < len(sinirlar) else BITIS + 1
    a = max(0, bisect.bisect_right(olay, A) - 1)
    b = max(a, bisect.bisect_left(olay, B) - 1)
    kume = aralik_kume(a, b)
    metin = yuk_metni(kume)
    rap["esit_yil_30"].append({"bas": gun_yaz(A), "ham_mb": mb(len(metin.encode("utf-8"))), "gzip_mb": mb(gz(metin))})
g30 = [x["gzip_mb"] for x in rap["esit_yil_30"]]
print("ESIT 30 YIL: %d dilim · gzip en kucuk %.2f · en buyuk %.2f · kat %.1f · toplam %.2f MB" % (
    len(g30), min(g30), max(g30), max(g30) / min(g30), sum(g30)))

# ---------------------------------------------------------------- 4. gunler
rap["gun"] = {}
for g in ("1281-01-01", "1453-05-29", "1529-09-27", "1683-07-14", "1789-01-01", "1878-07-13", "1914-08-01", "1923-10-29"):
    G = gun(g)
    s = set()
    for f, t, ks, e in KAYK:
        if f <= G < t:
            s |= ks
    metin = yuk_metni(s)
    rap["gun"][g] = {"halka": len(s), "ham_mb": mb(len(metin.encode("utf-8"))), "gzip_mb": mb(gz(metin))}
    print("gun %s: %d halka · ham %.2f MB · gzip %.2f MB" % (g, len(s), rap["gun"][g]["ham_mb"], rap["gun"][g]["gzip_mb"]))

json.dump(rap, open(os.path.join(KOK, "denetim", "YUK-BOLME-0925.json"), "w", encoding="utf-8"),
          ensure_ascii=False, indent=1)
print("bitti %.0f sn -> denetim/YUK-BOLME-0925.json" % (time.time() - T0))
