"""LISTE.tsv `tarihce_id` geri yazimi (KASA 17, 18 Kasim 2026; EMRELIC onayi).

Dallar data/sehir_tarihce_*.js yazarken denetim/SEHIR-DUNYA-1116/*/LISTE.tsv'deki
`tarihce_id` sutununu doldurmuyordu; "tarihcesiz kalan" sayisi bu yuzden gercegi gostermiyordu.
Bu betik bos `tarihce_id` hucrelerini doldurur. YENIDEN KOSTURULABILIR (idempotent: dolu hucreye dokunmaz).

Eslesme (yalniz KESIN eslesme yazilir, belirsizse yazilmaz):
  ① LISTE `id` == tarihce `id` (ya da `<id>-p3o`)  → yaz
  ② tarihce kaydi koordinati (lat/lon) LISTE satirina <= 3 km VE ad kumesi (LISTE ad_1900/ad_modern/atlas_ad ile
     tarihce ad/atlas_ad/adlar, ASCII-sadelestirilmis) kesisiyor VE bu LISTE satirina tek aday var, ve o tarihce
     kaydi tek LISTE satirina aday → yaz
Kullanim:  py arac/sehir_liste_geri.py [--kuru]      (--kuru: yazmadan sayar)
"""
import glob, json, math, re, sys, unicodedata

sys.stdout.reconfigure(encoding="utf-8")
KURU = "--kuru" in sys.argv


def sade(s):
    s = unicodedata.normalize("NFKD", (s or "").lower())
    s = "".join(ch for ch in s if not unicodedata.combining(ch))
    s = re.sub(r"\(.*?\)", " ", s)
    return re.sub(r"[^a-z0-9]+", "", s)


def km(a, b, c, d):
    p = math.pi / 180
    x = (math.sin((c - a) * p / 2)) ** 2 + math.cos(a * p) * math.cos(c * p) * (math.sin((d - b) * p / 2)) ** 2
    return 12742 * math.asin(math.sqrt(x))


# tarihce kayitlari
kayit = []
for f in sorted(glob.glob("data/sehir_tarihce_*.js")):
    s = open(f, encoding="utf-8").read()
    i = s.find("[")
    j = s.rfind("]")
    try:
        arr = json.loads(s[i:j + 1])
    except Exception as e:
        print("OKUNAMADI", f, e)
        continue
    for r in arr:
        adlar = {sade(r.get("ad")), sade(r.get("atlas_ad"))}
        for a in r.get("adlar") or []:
            adlar.add(sade(a if isinstance(a, str) else (a.get("ad") if isinstance(a, dict) else "")))
        adlar.discard("")
        kayit.append({"id": r["id"], "lat": r.get("lat"), "lon": r.get("lon"), "adlar": adlar})
ids = {k["id"] for k in kayit}
print("tarihce kaydi", len(kayit))

# LISTE satirlari
dosyalar = {}
satirlar = []  # (dosya, idx, id, lat, lon, adlar)
for f in sorted(glob.glob("denetim/SEHIR-DUNYA-1116/*/LISTE.tsv")):
    raw = open(f, encoding="utf-8", newline="").read()
    lines = raw.splitlines(keepends=True)
    h = lines[0].rstrip("\r\n").split("\t")
    if "tarihce_id" not in h or "id" not in h:
        continue
    dosyalar[f] = (lines, h)
    ti, ii = h.index("tarihce_id"), h.index("id")
    for n, ln in enumerate(lines[1:], 1):
        c = ln.rstrip("\r\n").split("\t")
        if len(c) <= max(ti, ii) or c[ti].strip():
            continue
        def g(name):
            return c[h.index(name)] if name in h and len(c) > h.index(name) else ""
        try:
            lat, lon = float(g("lat").replace(",", ".")), float(g("lon").replace(",", "."))
        except ValueError:
            lat = lon = None
        ad = {sade(g("ad_1900")), sade(g("ad_modern")), sade(g("atlas_ad"))}
        ad.discard("")
        satirlar.append((f, n, c[ii], lat, lon, ad))

atama = {}  # (f,n) -> tarihce id
# ① id
for f, n, i, lat, lon, ad in satirlar:
    for cand in (i, i + "-p3o"):
        if cand in ids:
            atama[(f, n)] = cand
            break
# ② koordinat + ad
aday_satir = {}
aday_kayit = {}
for f, n, i, lat, lon, ad in satirlar:
    if (f, n) in atama or lat is None:
        continue
    for k in kayit:
        if k["lat"] is None:
            continue
        if km(lat, lon, k["lat"], k["lon"]) <= 3 and (ad & k["adlar"]):
            aday_satir.setdefault((f, n), []).append(k["id"])
            aday_kayit.setdefault(k["id"], []).append((f, n))
kullanilan = set(atama.values())
for sk, ks in aday_satir.items():
    if len(ks) == 1 and len(aday_kayit[ks[0]]) == 1 and ks[0] not in kullanilan:
        atama[sk] = ks[0]
belirsiz = sum(1 for sk, ks in aday_satir.items() if sk not in atama)
print("atama", len(atama), "| belirsiz (yazilmadi)", belirsiz)

kalan = {}
for f, (lines, h) in dosyalar.items():
    ti = h.index("tarihce_id")
    ki = h.index("kat") if "kat" in h else None
    out = [lines[0]]
    for n, ln in enumerate(lines[1:], 1):
        body = ln.rstrip("\r\n")
        eol = ln[len(body):]
        c = body.split("\t")
        if (f, n) in atama:
            while len(c) <= ti:
                c.append("")
            c[ti] = atama[(f, n)]
        elif len(c) > ti and not c[ti].strip():
            k = c[ki] if ki is not None and len(c) > ki else "?"
            bolge = f.replace("\\", "/").split("/")[-2]
            kalan[(k, bolge)] = kalan.get((k, bolge), 0) + 1
        out.append("\t".join(c) + eol)
    if not KURU:
        open(f, "w", encoding="utf-8", newline="").write("".join(out))
print("KALAN tarihcesiz (kat, bolge):")
tk = {}
for (k, b), v in sorted(kalan.items()):
    print("  k%s %-28s %d" % (k, b, v))
    tk[k] = tk.get(k, 0) + v
print("KAT TOPLAM", tk, "| TOPLAM", sum(tk.values()))
