# -*- coding: utf-8 -*-
"""SINIR-D-OKYANUSYA-0077 — hattın 5 km iki yanında doğru renk oranı, ÖNCE → SONRA.

Ölçü birimi (oturumlar/SINIR-DUNYA-0077.md §4.2): o gün çizilen her hat boyunca ~5 km
arayla örnek; her örnekten hatta dik 5 km SOL ve SAĞ nokta. Beklenen: sol nokta
`sol_taraf`ın, sağ nokta öteki tarafın gövdesinde.

  ÖNCE  = `data/devletler_harita.js` gövdeleri (motorun peteği, yaslamasız).
  SONRA = js/d_katman.js `_dYaslaGuncelle`nin BENZETİMİ: hat yaslama sınıfındaysa
          (hukukî görünüm: E/F), iki taraf gövdesi o gün varsa, hat ≥10 km ise ve
          yön doğrulaması (solDogru>solYanlis & sagDogru>sagYanlis, ya da tek yan
          taşması: ≥3× ve iki gövde de kendi 100 km şeridinde ≥50 km²) geçerse,
          100 km şerit içinde KARŞI tarafın gövdesine düşen nokta beklenen tarafa
          geçer. Üçüncü devletin / denizin / sahipsiz toprağın noktası DEĞİŞMEZ
          (JS de yalnız iki tarafın gövdesine dokunur).
  🔴 Benzetimdir: JS'in çok genişlikli şerit birleşimi ve üçlü nokta sırası
     taklit edilmez; şerit shapely tek yanlı buffer'ı ile kurulur.

Gövdesiz nokta orana GİRMEZ, ikiye ayrılıp sayılır: "sahipsiz kara" (NE 10m karası
içinde ama o gün hiçbir gövde yok — motorun kasıtlı sahipsiz noktaları, ör. Yeni
Gine iç yaylaları) ve "deniz". Sahipsiz kara HAT kusuru değil NOKTA/künye bulgusudur.

Kullanım:
  py denetim/SINIR-D-OKYANUSYA-0077-olc.py            # bölge ölçümü
  py denetim/SINIR-D-OKYANUSYA-0077-olc.py --sina     # B9: pozitif/negatif ateşleme
"""
import io, json, math, os, subprocess, sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
from renk_cikti import _cek, _govde                       # noqa: E402
from shapely.geometry import Point, LineString, box, shape  # noqa: E402
from shapely.strtree import STRtree                       # noqa: E402
from shapely.ops import transform, unary_union            # noqa: E402
from shapely.prepared import prep                         # noqa: E402

GUN = "1923-09-01"
BITIS = "1923-10-29"
KUTU = (94.0, -50.0, 180.0, 22.0)          # Okyanusya + ada Güneydoğu Asya
ADIM_KM, YAN_KM, SERIT_KM = 5.0, 5.0, 100.0
EN_KISA_KM, EN_AZ_KM2 = 10.0, 50.0
YASLA_SINIF = {"E", "F"}                   # hukukî görünüm (_D_YASLA_SINIF_HUKUKI)
CIZILEN_SINIF = {"E", "F", "C"}            # hukukî görünüm çizer
KARA = None


def aktif(f, t, g=GUN):
    return f <= g and (t is None or g < t or (g == BITIS and t == BITIS))


def js_yukle():
    """Bütün D aileleri + künye harita anahtarları — node ile (JS'in kendi değerleri)."""
    kod = r"""
global.window={};const fs=require('fs');
const dosyalar=fs.readdirSync('data').filter(f=>/^d_sinirlar.*\.js$/.test(f));
for(const f of dosyalar) require('./data/'+f);
require('./data/devletler.js');
const aile={};for(const k of Object.keys(window)) if(/^D_SINIRLAR/.test(k)&&Array.isArray(window[k])) aile[k]=window[k];
const kunye={};(window.DEVLETLER||[]).forEach(d=>{kunye[d.id]=d.harita||null;});
process.stdout.write(JSON.stringify({aile,kunye}));
"""
    cik = subprocess.run(["node", "-e", kod], cwd=KOK, capture_output=True, check=True)
    return json.loads(cik.stdout.decode("utf-8"))


def govdeler_yukle():
    ham = io.open(os.path.join(KOK, "data", "devletler_harita.js"), encoding="utf-8").read()
    parca = _cek(ham, "DEVLET_PARCALAR")
    harita = _cek(ham, "DEVLET_HARITA")
    halka = _cek(ham, "DEVLET_PARCA_HALKA")
    k = box(KUTU[0] - 10, KUTU[1] - 10, min(180, KUTU[2] + 10), KUTU[3] + 10)
    g = {}
    for d in harita:
        for p in d["dnm"]:
            if aktif(p["f"], p["t"]):
                geo = _govde(parca, p["g"], halka)
                if geo is not None and geo.intersects(k):
                    g[d["id"]] = geo
                break
    return g


def kara_yukle():
    d = json.load(io.open(os.path.join(KOK, "veri-kaynak", "ne_10m_land.geojson"), encoding="utf-8"))
    k = box(KUTU[0] - 5, KUTU[1] - 5, 180, KUTU[3] + 5)
    gs = [shape(f["geometry"]) for f in d["features"]]
    return prep(unary_union([g.intersection(k) for g in gs if g.intersects(k)]))


def govde_anahtari(taraf, kunye, govde):
    """_dTarafGovdesi: künyenin `harita:` anahtarı; o gün gövdesi yoksa id'nin kendisi."""
    hk = kunye.get(taraf) or taraf
    if hk not in govde and taraf in govde:
        hk = taraf
    return hk if hk in govde else None


def izdusum(lat0):
    kx = 111.32 * math.cos(math.radians(lat0))
    ileri = lambda x, y, z=None: (x * kx, y * 110.57)
    geri = lambda x, y, z=None: (x / kx, y / 110.57)
    return ileri, geri


def ornekler(hat_km):
    """Hat boyunca ADIM_KM arayla (sol, sağ) nokta çiftleri, km düzleminde."""
    L = hat_km.length
    n = max(1, int(L // ADIM_KM))
    cift = []
    for i in range(n):
        s = (i + 0.5) * L / n
        a = hat_km.interpolate(max(0.0, s - 0.5))
        b = hat_km.interpolate(min(L, s + 0.5))
        dx, dy = b.x - a.x, b.y - a.y
        u = math.hypot(dx, dy) or 1.0
        nx, ny = -dy / u, dx / u                       # sola dik
        m = hat_km.interpolate(s)
        cift.append((Point(m.x + nx * YAN_KM, m.y + ny * YAN_KM),
                     Point(m.x - nx * YAN_KM, m.y - ny * YAN_KM)))
    return cift


def sahibi(pt, agac, adlar, geos):
    for i in agac.query(pt):
        if geos[i].contains(pt):
            return adlar[i]
    return None


def yasla_karari(hat_km, gs_km, gr_km):
    """JS yön doğrulamasının benzetimi (d_katman.js _dYaslaGuncelle)."""
    sol = hat_km.buffer(SERIT_KM, single_sided=True)      # shapely: + = sol
    sag = hat_km.buffer(-SERIT_KM, single_sided=True)
    solDogru, sagYanlis = sol.intersection(gs_km).area, sol.intersection(gr_km).area
    sagDogru, solYanlis = sag.intersection(gr_km).area, sag.intersection(gs_km).area
    tek = (not (solYanlis > solDogru and sagYanlis > sagDogru) and
           (solDogru >= 3 * solYanlis or sagDogru >= 3 * sagYanlis) and
           solDogru >= EN_AZ_KM2 and sagDogru >= EN_AZ_KM2)
    ok = (solDogru > solYanlis and sagDogru > sagYanlis) or tek
    acik = "sol gövde doğru/yanlış yanda %d/%d km² · sağ %d/%d km²" % (solDogru, solYanlis, sagDogru, sagYanlis)
    return ok, acik


def olc(kayitlar, kunye, govde, sessiz=False):
    adlar = list(govde)
    geos = [govde[a] for a in adlar]
    agac = STRtree(geos)
    toplam = {"once": [0, 0], "sonra": [0, 0], "deniz": 0, "sahipsiz": 0}
    satirlar = []
    for aile, k in kayitlar:
        hat = k["hat"]
        lat0 = sum(p[1] for p in hat) / len(hat)
        ileri, geri = izdusum(lat0)
        hkm = transform(ileri, LineString(hat))
        sol_t = k.get("sol_taraf")
        sag_t = [x for x in k["taraflar"] if x != sol_t][0] if sol_t in k["taraflar"] else None
        hs = govde_anahtari(sol_t, kunye, govde) if sol_t else None
        hr = govde_anahtari(sag_t, kunye, govde) if sag_t else None
        yas = False
        if k["sinif"] not in YASLA_SINIF:
            durum = "sınıf %s yaslanmaz" % k["sinif"]
        elif not hs or not hr:
            durum = "gövde yok: " + ", ".join(str(t) for t, h in ((sol_t, hs), (sag_t, hr)) if not h)
        elif hkm.length < EN_KISA_KM:
            durum = "hat < 10 km"
        else:
            yas, acik = yasla_karari(hkm, transform(ileri, govde[hs]), transform(ileri, govde[hr]))
            durum = ("YASLANIR · " if yas else "YÖN DOĞRULANAMADI · ") + acik
        o = s = n = deniz = sahipsiz = 0
        yanlis = []
        for pl, pr in ornekler(hkm):
            for pt, bek, karsi in ((pl, hs, hr), (pr, hr, hs)):
                geo = Point(geri(pt.x, pt.y))
                sh = sahibi(geo, agac, adlar, geos)
                if sh is None:
                    if KARA.contains(geo):
                        sahipsiz += 1
                    else:
                        deniz += 1
                    continue
                n += 1
                if sh == bek:
                    o += 1
                sonra = bek if (yas and sh == karsi) else sh
                if sonra == bek:
                    s += 1
                elif len(yanlis) < 3:
                    yanlis.append("%.2f,%.2f=%s" % (geo.x, geo.y, sh))
        toplam["once"][0] += o; toplam["once"][1] += n
        toplam["sonra"][0] += s; toplam["sonra"][1] += n
        toplam["deniz"] += deniz; toplam["sahipsiz"] += sahipsiz
        satirlar.append({"aile": aile, "id": k["id"], "sinif": k["sinif"], "km": round(hkm.length),
                         "once": o, "sonra": s, "n": n, "deniz": deniz, "sahipsiz": sahipsiz,
                         "durum": durum, "yanlis": yanlis})
    if not sessiz:
        for r in satirlar:
            yz = lambda x: ("%3d%%" % round(100 * x / r["n"])) if r["n"] else "  — "
            print("  %-42s %s %5d km  ÖNCE %s → SONRA %s  (n=%d · sahipsiz kara %d · deniz %d)  %s"
                  % (r["id"][:42], r["sinif"], r["km"], yz(r["once"]), yz(r["sonra"]), r["n"],
                     r["sahipsiz"], r["deniz"], r["durum"]))
            if r["yanlis"] and r["sonra"] < r["n"]:
                print("      yanlış örnek: " + " · ".join(r["yanlis"]))
    return toplam, satirlar


def bolge_kayitlari(aile_dict):
    kb = box(*KUTU)
    out = []
    for aile, dizi in sorted(aile_dict.items()):
        for k in dizi:
            if not k or not isinstance(k.get("hat"), list) or len(k["hat"]) < 2 or k.get("f") is None:
                continue
            if k.get("sinif") not in CIZILEN_SINIF or not aktif(k["f"], k.get("t")):
                continue
            if LineString(k["hat"]).intersects(kb):
                out.append((aile, k))
    return out


def yuzde(a):
    return "%.1f%% (%d/%d)" % (100.0 * a[0] / a[1], a[0], a[1]) if a[1] else "— (0 örnek)"


def ozet(t):
    return "ÖNCE %s → SONRA %s · sahipsiz kara %d · deniz %d" % (
        yuzde(t["once"]), yuzde(t["sonra"]), t["sahipsiz"], t["deniz"])


def main():
    global KARA
    KARA = kara_yukle()
    js = js_yukle()
    govde = govdeler_yukle()
    print("gün %s · bölgede gövdesi olan kimlik: %d" % (GUN, len(govde)))
    if "--sina" in sys.argv:
        sina(js, govde)
        return
    kay = bolge_kayitlari(js["aile"])
    print("bölgede o gün çizilen hat: %d (E/F/C, hukukî görünüm)\n" % len(kay))
    for aile in sorted({a for a, _ in kay}):
        alt = [(a, k) for a, k in kay if a == aile]
        print("== %s (%d hat)" % (aile, len(alt)))
        t, _ = olc(alt, js["kunye"], govde)
        print("   " + ozet(t) + "\n")
    t, _ = olc(kay, js["kunye"], govde, sessiz=True)
    print("TOPLAM bölge: " + ozet(t))


def sina(js, govde):
    """B9 — ölçüm iki yönde ateşlenmeli. Sınav hattı: Timor orta (E, iki gövde de var).
    ① POZİTİF nokta: Port Moresby=avustralya, Jayapura=hollanda-dogu-hint, Dili=portekiz.
    ② TERS beyan: sol_taraf çevrilince ÖNCE ≈ 100 − gerçek olmalı ve yön doğrulaması
       yaslamayı REDDETMELİ (SONRA da düşük kalmalı).
    ③ SENTETİK TAŞMA: sol gövdeden hattın 20 km solu kesilip sağa verilince ÖNCE
       düşmeli, SONRA (yaslama) geri toplamalı."""
    adlar = list(govde); geos = [govde[a] for a in adlar]; agac = STRtree(geos)
    for ad, (x, y), bek in (("Port Moresby", (147.18, -9.44), "avustralya"),
                            ("Jayapura/Hollandia", (140.70, -2.53), "hollanda-dogu-hint"),
                            ("Dili", (125.57, -8.56), "portekiz")):
        sh = sahibi(Point(x, y), agac, adlar, geos)
        print("  ① %-20s beklenen %-20s ölçülen %-20s %s" % (ad, bek, sh, "✓" if sh == bek else "✗"))
    kay = [(a, k) for a, k in bolge_kayitlari(js["aile"]) if k["id"] == "d1923-hd-pt-orta"]
    if not kay:
        print("  !! sınav hattı yok"); return
    a, k = kay[0]
    t, s1 = olc([(a, k)], js["kunye"], govde, sessiz=True)
    print("  ② gerçek beyan   : %s · %s" % (ozet(t), s1[0]["durum"]))
    k2 = dict(k); k2["sol_taraf"] = [x for x in k["taraflar"] if x != k["sol_taraf"]][0]
    t2, s2 = olc([(a, k2)], js["kunye"], govde, sessiz=True)
    print("  ② TERS beyan     : %s · %s" % (ozet(t2), s2[0]["durum"]))
    lat0 = sum(p[1] for p in k["hat"]) / len(k["hat"])
    ileri, geri = izdusum(lat0)
    serit = transform(geri, transform(ileri, LineString(k["hat"])).buffer(20, single_sided=True))
    hs = govde_anahtari(k["sol_taraf"], js["kunye"], govde)
    hr = govde_anahtari([x for x in k["taraflar"] if x != k["sol_taraf"]][0], js["kunye"], govde)
    g3 = dict(govde)
    g3[hr] = govde[hr].union(govde[hs].intersection(serit))
    g3[hs] = govde[hs].difference(serit)
    t3, s3 = olc([(a, k)], js["kunye"], g3, sessiz=True)
    print("  ③ sentetik taşma : %s · %s" % (ozet(t3), s3[0]["durum"]))


if __name__ == "__main__":
    main()
