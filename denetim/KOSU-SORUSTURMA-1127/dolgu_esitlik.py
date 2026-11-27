# -*- coding: utf-8 -*-
"""dolgu_esitlik — DOLGU-YEREL-1127 düzeltmesinin İKİ YÖNLÜ sınavı (HAVVA, 27 Kasım 2026).

Motoru KOŞTURMAZ; Koşu 40'ın `devletler_harita.js`ini okur (salt okuma), önbellek dosyası açmaz.
Her tarih için:
  ① ESKİ kod (git'teki `dolgu.py`, ayrı dosya) ile YENİ kod AYNI girdide soğuk koşturulur; dolgu
     parçaları (kim, cins) bazında birleştirilip simetrik fark alanı ölçülür (kabul: ≤ TOL).
  ② ÖNBELLEK SAĞLAMLIĞI: yeni kod süreç içi ezberi sıcakken girdi DEĞİŞTİRİLİR — (a) bir deliğin
     içine + (b) bütün deliklerin dışına engel noktası, (c) küçük bir gövde 100 m oynatılır — ve
     sonuç, ezber boşaltılıp sıfırdan hesaplananla karşılaştırılır (kabul: AYNI). Ezberden gelen
     bayat sonuç bu sınavda fark olarak görünür. Yeniden hesaplanan devlet sayısı da yazılır.
  ③ TERS YÖN: sınavın kör olmadığı — deliğe düşen engel noktası sonucu DEĞİŞTİRMELİ.
Bağlam: taklit ızgara (gövdeler 0,05° ızgaraya rasterize) + taklit engel; duvar yok.
Kullanım: py dolgu_esitlik.py <devletler_harita.js> <arac> <dolgu_eski.py> <kara pkl dizini> <tarih>...
          [--eski-atla]  (yalnız ②③)
"""
import os, sys, time, gc, ctypes, hashlib, importlib.util
sys.stdout.reconfigure(encoding="utf-8", errors="replace", line_buffering=True)
ctypes.windll.kernel32.SetPriorityClass(ctypes.windll.kernel32.GetCurrentProcess(), 0x40)   # IDLE
arg = [x for x in sys.argv[1:] if not x.startswith("--")]
ESKI_ATLA = "--eski-atla" in sys.argv
yol, arac, eski_yol, pkl = arg[:4]
tarihler = arg[4:]
os.environ["MOTOR_ONBELLEK_KAPALI"] = "1"
os.environ["MOTOR_DOLGU_UFUK_GUN"] = "10"
os.environ["MOTOR_ONBELLEK_DIZIN"] = pkl
os.environ.pop("MOTOR_DOLGU_IZ", None)
if "--kanonik0" in sys.argv:     # kanonik adım KAPALI: komşuluk daraltmasının TEK BAŞINA etkisi ölçülür
    os.environ["DOLGU_KANONIK"] = "0"
else:
    os.environ.pop("DOLGU_KANONIK", None)
if "--sade0" in sys.argv:        # sadeleştirme KAPALI: iki kodun sadeleştirme ÖNCESİ geometrisi kıyaslanır
    os.environ["MOTOR_DOLGU_SADE"] = "0"
else:
    os.environ.pop("MOTOR_DOLGU_SADE", None)
sys.path.insert(0, arac)
import numpy as np
import shapely
from shapely.geometry import MultiPoint, Point
from shapely.affinity import translate
from shapely.ops import unary_union
import rasterio.features as rfe
from rasterio.transform import Affine
import dolgu as yeni
spec = importlib.util.spec_from_file_location("dolgu_eski", eski_yol)
eski = importlib.util.module_from_spec(spec)
spec.loader.exec_module(eski)
TOL = 1e-9                                  # derece² (~1e-5 km²)
print("yeni:", yeni.__file__, yeni.KURAL_SURUM, "· eski:", eski.__file__, eski.KURAL_SURUM,
      "· SADE_TOL yeni/eski:", yeni.SADE_TOL, eski.SADE_TOL, "· kanonik:", yeni.KANONIK)
y = yeni._js_oku(yol, ["DEVLET_HARITA", "DEVLET_PARCALAR", "DEVLET_PARCA_HALKA"])
kara = yeni._kara_yukle()
kh_y, kh_e = yeni.KaraIndeks(kara), eski.KaraIndeks(kara)
NX, NY, AD = 7200, 2900, 0.05


def govdeler_kur(tarih):
    a, gv, ai = yeni._gk(tarih), [], 0
    for dev in y["DEVLET_HARITA"]:
        for p in dev.get("dnm", []):
            if p.get("g"):
                if yeni._gk(p["f"]) <= a < yeni._gk(p["t"]):
                    gv.append((dev["id"], yeni._coz(p["g"], y["DEVLET_PARCALAR"], y["DEVLET_PARCA_HALKA"]), ai))
                ai += 1
    return gv, ai


def izgara_kur(gv):
    kuzey = rfe.rasterize([(g, i) for i, (_k, g, _a) in enumerate(gv)], out_shape=(NY, NX),
                          transform=Affine(AD, 0, -180.0, 0, -AD, 85.0), fill=-1, dtype="int32")
    sahip = np.ascontiguousarray(np.flipud(kuzey))
    kim = {i: k for i, (k, _g, _a) in enumerate(gv)}
    gr = {}
    for j in sorted(kim):
        gr.setdefault(kim[j], []).append(j)
    return {"sahip": sahip, "x0": -180.0, "y0": -60.0, "adim": AD, "kim": kim,
            "grid_oz": hashlib.sha1(sahip.tobytes()).hexdigest()[:16],
            "devlet_oz": {d: hashlib.sha1(repr(js).encode()).hexdigest()[:12] for d, js in gr.items()}}


def delik_noktalari(gv):
    """(kim, deliğin iç noktası) — alanı büyükten küçüğe."""
    out = []
    for k, g, _a in gv:
        for h in yeni._delikler(g):
            out.append((h.area, k, h.representative_point()))
    out.sort(key=lambda t: -t[0])
    return out


def ozet(parcalar):
    d = {}
    for pc in parcalar:
        d.setdefault((pc["kim"], pc["cins"]), []).append(pc["g"])
    return {k: unary_union(v) for k, v in d.items()}


def kiyas(etiket, pa, pb):
    a, b = ozet(pa), ozet(pb)
    fark, en = 0.0, (0.0, None)
    for k in set(a) | set(b):
        ga, gb = a.get(k), b.get(k)
        if ga is None or gb is None:
            f = (ga or gb).area
        else:
            f = ga.symmetric_difference(gb).area
        fark += f
        if f > en[0]:
            en = (f, k)
    wa = {(p["kim"], p["cins"], shapely.to_wkb(shapely.normalize(p["g"]), output_dimension=2)) for p in pa}
    wb = {(p["kim"], p["cins"], shapely.to_wkb(shapely.normalize(p["g"]), output_dimension=2)) for p in pb}
    alan = sum(g.area for g in a.values())
    sonuc = "AYNI" if fark <= TOL else "FARKLI"
    print("   %-46s %s · parça %d/%d · ayrık parça %d/%d · bit bit aynı %d · toplam dolgu %.4f derece² · "
          "simetrik fark %.3e%s" % (etiket, sonuc, len(pa), len(pb), len(wa), len(wb), len(wa & wb), alan, fark,
                                    "" if fark <= TOL else " · en büyük %r %.3e" % (en[1], en[0])))
    return fark <= TOL, fark


def kos(mod, kh, gv, izg, engel):
    t = time.time()
    p, r = mod.kesit_dolgu(gv, kara, kh, r_km=mod.YARICAP_KM, izgara=izg, duvar=None, engel=engel)
    return p, r, time.time() - t


def yeni_sifirla(talep_kalsin=True):
    yeni._DEVLET_ONB.clear()
    for k in yeni.ILERLEME:
        yeni.ILERLEME[k] = 0
    if not talep_kalsin:
        yeni._TALEP_ONB.clear()
        del yeni._TALEP_SIRA[:]


hepsi = True
for tarih in tarihler:
    gv, N_AI = govdeler_kur(tarih)
    izg = izgara_kur(gv)
    dn = delik_noktalari(gv)
    uzak = [Point(-150.0, -55.0), Point(170.0, -58.0)]              # açık deniz: hiçbir deliğin içinde değil
    engel0 = MultiPoint([p for _a, _k, p in dn[1::3]][:12] + uzak) if dn else MultiPoint(uzak)
    print("\n##### %s · gövde %d · delik %d · engel noktası %d #####" % (tarih, len(gv), len(dn), len(engel0.geoms)))
    yeni_sifirla(talep_kalsin=False)
    py, ry, ty = kos(yeni, kh_y, gv, izg, engel0)
    hy = yeni.ILERLEME["devlet_hesap"]
    print("   YENİ soğuk: %.0f sn · parça %d · devlet hesabı %d · kapanış %.0f / çekişme %.0f / cins %.0f sn · yutma %s" % (
        ty, len(py), hy, ry["sn_kapanis"], ry["sn_cekisme"], ry["sn_cins"], dict(yeni.YUTMA)))
    if not ESKI_ATLA:
        eski._TALEP_ONB.update(yeni._TALEP_ONB)                      # `_talep` DEĞİŞMEDİ: kapanışı iki kez hesaplama
        pe, re_, te = kos(eski, kh_e, gv, izg, engel0)
        print("   ESKİ soğuk (kapanış ezberden): %.0f sn · parça %d · çekişme %.0f / cins %.0f sn" % (
            te, len(pe), re_["sn_cekisme"], re_["sn_cins"]))
        ok, _f = kiyas("① ESKİ ↔ YENİ (aynı girdi)", pe, py)
        hepsi &= ok
        eg = sorted(re_["engellendi"]) == sorted(ry["engellendi"])
        print("   ① engellenen listesi %s · talep km² %.1f / %.1f" % ("AYNI" if eg else "FARKLI", re_["talep_km2"], ry["talep_km2"]))
        hepsi &= eg
        eski._TALEP_ONB.clear()
        del eski._TALEP_SIRA[:]
    # ── ② önbellek sağlamlığı ──────────────────────────────────────────────
    # (a)+(b): engele bir deliğin içine ve dışarıya nokta ekle
    # ③ için: engel noktası konunca sonucu GERÇEKTEN değiştiren bir delik ara. Küçük delikler kapanışla
    #    (2r) zaten dolar ve delik kuralına hiç uğramaz; yalnız kapanışın kapatamadığı büyük delikte
    #    engel fark üretir. En çok 12 aday denenir (her biri sıcak ezberle ucuz bir koşu).
    secim, gordu = None, False
    adaylar = [(_k, _p) for _al, _k, _p in dn
               if not engel0.intersects(_p) and any(pc["kim"] == _k and pc["g"].covers(_p) for pc in py)][:12]
    for _k, _p in adaylar:
        _pd, _r, _t = kos(yeni, kh_y, gv, izg, MultiPoint(list(engel0.geoms) + [_p]))
        _a, _b = ozet(py), ozet(_pd)
        _f = sum((_a[k].symmetric_difference(_b[k]).area if k in _a and k in _b else (_a.get(k) or _b.get(k)).area)
                 for k in set(_a) | set(_b))
        secim = (_k, _p)
        if _f > TOL:
            gordu = True
            print("   ③ ters yön: %s deliğine engel noktası → dolgu %.4f derece² değişti (sınav GÖRÜYOR; %d aday denendi)" % (
                _k, _f, adaylar.index((_k, _p)) + 1))
            break
    if adaylar and not gordu:
        print("   ③ ters yön: %d adayın hiçbiri fark üretmedi (bu kesitte delik kuralına kalan dolu delik yok) — KÖR" % len(adaylar))
    if secim is None and dn:
        secim = (dn[0][1], dn[0][2])
    yeni_h0 = yeni.ILERLEME["devlet_hesap"]
    if dn:
        ic_kim, ic_p = secim
        engel1 = MultiPoint(list(engel0.geoms) + [ic_p, Point(-140.0, -50.0)])
        p_sicak, _r, t_s = kos(yeni, kh_y, gv, izg, engel1)
        h_sicak = yeni.ILERLEME["devlet_hesap"] - yeni_h0
        yeni_sifirla()
        p_soguk, _r, _t = kos(yeni, kh_y, gv, izg, engel1)
        ok, _f = kiyas("②a engel değişti: ezber sıcak ↔ sıfırdan", p_sicak, p_soguk)
        print("      yeniden hesaplanan devlet: %d (deliği vurulan: %s) · sıcak süre %.0f sn" % (h_sicak, ic_kim, t_s))
        hepsi &= ok
    # (c): bir gövdeyi 100 m oynat — orta büyüklükte bir gövde ve en büyük gövde
    sirali = sorted(gv, key=lambda t: t[1].area)
    for hedef in (sirali[len(sirali) // 2], sirali[-1]):
        gv2 = [(k, translate(g, xoff=0.001), N_AI + 1) if (k, a_) == (hedef[0], hedef[2]) else (k, g, a_)
               for k, g, a_ in gv]
        yeni_sifirla()
        kos(yeni, kh_y, gv, izg, engel0)                               # ezberi özgün girdiyle doldur
        h0 = yeni.ILERLEME["devlet_hesap"]
        p_sicak, _r, t_s = kos(yeni, kh_y, gv2, izg, engel0)
        h_sicak = yeni.ILERLEME["devlet_hesap"] - h0
        yeni_sifirla()
        p_soguk, _r, _t = kos(yeni, kh_y, gv2, izg, engel0)
        ok, _f = kiyas("②c gövde oynatıldı: ezber sıcak ↔ sıfırdan", p_sicak, p_soguk)
        print("      oynatılan: %s · yeniden hesaplanan devlet: %d / %d · sıcak süre %.0f sn" % (hedef[0], h_sicak, hy, t_s))
        hepsi &= ok
    del gv, izg
    gc.collect()
print("\nSONUÇ:", "HEPSİ AYNI" if hepsi else "FARK VAR — İNCELE")
sys.exit(0 if hepsi else 1)
