# -*- coding: utf-8 -*-
"""
ARAC-EKSKLAV-0917.py — D3-AVRUPA-ORTA · DALGA-0064 (H-0010 karar agaci icin alet)

SORU: Bir tarihte bir devletin (OSMANLI ya da kunye id) haritada ana govdeden
KOPUK parcalari var mi; varsa kopuk parca ile ana govde arasinda HANGI
yerlesimler, KIMIN elinde duruyor? (H-0010: A gercek eksklav · B1-B4 hata)

YONTEM (secim + gerekce):
  * Sahiplik denetle.degismez7 ile AYNI: d/v -> OSMANLI, s -> d kimligi.
    isg (isgal) sahipligi DEGISTIRMEZ (motor onu taralı ortu olarak cizer);
    parca listesinde ayrica gosterilir.
  * Komsuluk: petek (Voronoi) komsulugunun ikizi olan DELAUNAY ucgenlemesi,
    o gun VAR olan butun noktalar uzerinde (kur > gun olan nokta yok sayilir).
    Kenar > KENAR_KM (400 km = iki petegin TAVAN_KM 200 toplami) atilir.
    ⚠️ denetle.degismez7'nin 150 km "bagli" esigi bu soruyu SORMAZ: Bihac ile
    Banaluka 104 km'dir, esik onlari bagli sayar; oysa aradaki petek baska
    devletinse harita kopuk cizer. Delaunay "arada baska nokta var mi" sorar.
  * Kara maskesi, nehir/dag yaslanmasi YOK — bu bir YAKLASIKLAMA; motorun
    kendi ciktisi degildir. Kesin cevap donemler.js'tedir (--donemler ile
    kopuk bulunan parcanin o gunku canli ciktida Osmanli kumesinde olup
    olmadigi da basilir; yalniz OSMANLI icin).
  * Ana govde = devletin o gun EN KALABALIK bileseni. Her kopuk parca icin
    ana govdeye EN KISA Delaunay yolu (km agirlikli) bulunur; yol uzerindeki
    BASKA sahipli / sahipsiz noktalar "aradaki yerlesimler" diye basilir.
  * --yama YAMA.json: kalemlerdeki makine alani `uygula` bellekte uygulanir
    (dosyaya YAZILMAZ); cikti ONCE / SONRA iki kolon verir.
      uygula = {"islem":"alan","ad":..,"alan":"d|s|v|isg","deger":[...]}
             | {"islem":"yeni_nokta","kayit":{...}}

KULLANIM:
  py denetim/ARAC-EKSKLAV-0917.py --gun 1737-08-04 --gun 1739-09-18 \
     --devlet OSMANLI --kutu 42.5,46.5,14.5,23.5 \
     [--yama denetim/YAMA-0064-BALKAN.json] [--json cikti.json] [--donemler]
"""
import sys, os, json, math, argparse, heapq, copy
sys.stdout.reconfigure(encoding="utf-8")
KOK = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi
from scipy.spatial import Delaunay

KENAR_KM = 400.0


def km(a, b):
    la1, lo1, la2, lo2 = map(math.radians, (a[0], a[1], b[0], b[1]))
    h = (math.sin((la2 - la1) / 2) ** 2
         + math.cos(la1) * math.cos(la2) * math.sin((lo2 - lo1) / 2) ** 2)
    return 6371.0 * 2 * math.asin(math.sqrt(h))


def sahip(y, g):
    for kat in ("d", "v"):
        for p in y.get(kat) or []:
            if p.get("f") and p.get("t") and p["f"] <= g < p["t"]:
                return "OSMANLI"
    for p in y.get("s") or []:
        if p.get("f") and p.get("t") and p.get("d") and p["f"] <= g < p["t"]:
            return p["d"]
    return None


def isgal(y, g):
    for p in y.get("isg") or []:
        if p.get("f") and p.get("t") and p["f"] <= g < p["t"]:
            return p.get("d")
    return None


def var_mi(y, g):
    k = y.get("kur")
    return not (k and k > g)


def yama_uygula(Y, yol):
    Y = copy.deepcopy(Y)
    ix = {y["ad"]: y for y in Y}
    yama = json.load(open(yol, encoding="utf-8"))
    n = 0
    for k in yama.get("kalemler", []):
        u = k.get("uygula")
        if not u:
            continue
        ops = u if isinstance(u, list) else [u]
        for o in ops:
            if o["islem"] == "alan":
                if o["ad"] not in ix:
                    raise SystemExit(f"YAMA: '{o['ad']}' veride YOK (kalem {k.get('no')})")
                ix[o["ad"]][o["alan"]] = o["deger"]
            elif o["islem"] == "yeni_nokta":
                r = dict(o["kayit"])
                if r["ad"] in ix:
                    raise SystemExit(f"YAMA: '{r['ad']}' ZATEN VAR (kalem {k.get('no')})")
                r.setdefault("_kaynak", "YAMA")
                Y.append(r)
                ix[r["ad"]] = r
            else:
                raise SystemExit(f"YAMA: bilinmeyen islem {o['islem']}")
            n += 1
    return Y, n


def olc(Y, g, devlet, kutu):
    V = [i for i, y in enumerate(Y) if var_mi(y, g)]
    lat0 = math.radians(40.0)
    pts = [(Y[i]["lon"] * math.cos(lat0), Y[i]["lat"]) for i in V]
    tri = Delaunay(pts)
    kom = {i: set() for i in V}
    for s in tri.simplices:
        for a in range(3):
            for b in range(a + 1, 3):
                i, j = V[s[a]], V[s[b]]
                d = km((Y[i]["lat"], Y[i]["lon"]), (Y[j]["lat"], Y[j]["lon"]))
                if d <= KENAR_KM:
                    kom[i].add((j, d))
                    kom[j].add((i, d))
    own = {i: sahip(Y[i], g) for i in V}
    kume = [i for i in V if own[i] == devlet]
    gor, bil = set(), []
    for i in kume:
        if i in gor:
            continue
        c, st = [], [i]
        gor.add(i)
        while st:
            u = st.pop()
            c.append(u)
            for v, _ in kom[u]:
                if v not in gor and own[v] == devlet:
                    gor.add(v)
                    st.append(v)
        bil.append(c)
    if not bil:
        return {"gun": g, "devlet": devlet, "bilesen": 0, "kopuk": []}
    bil.sort(key=len, reverse=True)
    ana = set(bil[0])
    ic = lambda y: kutu[0] <= y["lat"] <= kutu[1] and kutu[2] <= y["lon"] <= kutu[3]
    cikti = []
    for c in bil[1:]:
        if not any(ic(Y[i]) for i in c):
            continue
        # en kisa yol: parca -> ana govde
        dist = {i: 0.0 for i in c}
        onc = {}
        pq = [(0.0, i) for i in c]
        heapq.heapify(pq)
        hedef = None
        while pq:
            d, u = heapq.heappop(pq)
            if d > dist.get(u, 1e18):
                continue
            if u in ana:
                hedef = u
                break
            for v, w in kom[u]:
                nd = d + w
                if nd < dist.get(v, 1e18):
                    dist[v] = nd
                    onc[v] = u
                    heapq.heappush(pq, (nd, v))
        yol = []
        if hedef is not None:
            u = hedef
            while u in onc:
                u = onc[u]
                if u not in c:
                    yol.append(u)
            yol.reverse()
        cikti.append({
            "parca": sorted(Y[i]["ad"] for i in c),
            "parca_isgal": {Y[i]["ad"]: isgal(Y[i], g) for i in c if isgal(Y[i], g)},
            "ana_govdeye": Y[hedef]["ad"] if hedef is not None else None,
            "yol_km": round(dist.get(hedef, 0), 1) if hedef is not None else None,
            "aradaki": [{"ad": Y[i]["ad"], "sahip": own[i] or "SAHIPSIZ",
                         "isg": isgal(Y[i], g), "dosya": Y[i].get("_kaynak")}
                        for i in yol],
        })
    return {"gun": g, "devlet": devlet, "bilesen": len(bil),
            "ana_boyut": len(ana), "kopuk": cikti}


def donemler_osmanli(gunler, adlar):
    """Canli ciktida (data/donemler.js) o gun Osmanli kumesinde mi."""
    s = open(os.path.join(KOK, "data", "donemler.js"), encoding="utf-8").read()

    def arr(name):
        key = "window." + name + " = "
        i = s.index(key)
        j = s.index("\n", i)
        t = s[i + len(key):j].strip().rstrip(";")
        return json.loads(t)
    PET, D = arr("PETEKLER"), arr("DONEMLER")
    pix = {p["a"]: k for k, p in enumerate(PET)}
    sonuc = {}
    for g in gunler:
        kume = set()
        for d in D:
            kume.update(d.get("e") or [])
            kume.difference_update(d.get("c") or [])
            if d["f"] <= g < d["t"]:
                break
        sonuc[g] = {a: (pix[a] in kume) if a in pix else "PETEK-YOK" for a in adlar}
    return sonuc


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--gun", action="append", required=True)
    ap.add_argument("--devlet", default="OSMANLI")
    ap.add_argument("--kutu", default="-90,90,-180,180")
    ap.add_argument("--yama")
    ap.add_argument("--json")
    ap.add_argument("--donemler", action="store_true")
    a = ap.parse_args()
    kutu = [float(x) for x in a.kutu.split(",")]
    Y0 = girdi.yukle(sessiz=True)
    surumler = [("ONCE", Y0)]
    if a.yama:
        Y1, n = yama_uygula(Y0, a.yama)
        print(f"yama: {n} islem bellekte uygulandi (dosyaya yazilmadi)")
        surumler.append(("SONRA", Y1))
    rapor = {}
    for etiket, Y in surumler:
        rapor[etiket] = []
        for g in a.gun:
            r = olc(Y, g, a.devlet, kutu)
            rapor[etiket].append(r)
            print(f"\n=== {etiket} · {g} · {a.devlet} · bilesen {r['bilesen']} · "
                  f"kutuda kopuk parca {len(r['kopuk'])}")
            for k in r["kopuk"]:
                print(f"  KOPUK: {', '.join(k['parca'])}"
                      + (f"  (isg: {k['parca_isgal']})" if k["parca_isgal"] else ""))
                print(f"    ana govdeye: {k['ana_govdeye']} · Delaunay yolu {k['yol_km']} km")
                for x in k["aradaki"]:
                    print(f"      arada: {x['ad']:36} sahip={x['sahip']}"
                          + (f" isg={x['isg']}" if x["isg"] else "")
                          + f"  [{x['dosya']}]")
    if a.donemler and a.devlet == "OSMANLI":
        adlar = sorted({x for r in rapor["ONCE"] for k in r["kopuk"]
                        for x in k["parca"] + [z["ad"] for z in k["aradaki"]]})
        dm = donemler_osmanli(a.gun, adlar)
        rapor["CANLI_DONEMLER"] = dm
        print("\n=== canli cikti (data/donemler.js) Osmanli kumesinde mi")
        for g, m in dm.items():
            for ad, v in m.items():
                print(f"  {g} {ad:36} {v}")
    if a.json:
        json.dump(rapor, open(a.json, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
        print("\nyazildi:", a.json)


if __name__ == "__main__":
    main()
