# -*- coding: utf-8 -*-
"""GARİPLİK TARAMA — pilot betiği (PLAN-GARIPLIK-TARAMA-1124.md §B, §C).

Haritada beş garipliği arar, SALT OKUR (veriye ve motora yazmaz):
  1 kopuk enklav/eksklav · 2 deniz-kara boşluğu · 3 girinti/koridor ·
  4 devlet içi boşluk · 5 iki devlet arası sahipsiz toprak.

GİRDİ: ÇÖZÜLMÜŞ `devletler_harita.js` (worktree'de yoktur; önce, KASA/LAB'da, AYRI worktree'de:
  py arac/kodla.py coz-c data data/devletler_harita.js
  (kodla.py yay çıkış 0 vermeden coz-c koşturma — CLAUDE.md "coz-c diriltir")
KARA MASKESİ: veri-kaynak/ne_10m_land.geojson (kutuya kırpılır → ucuz).

🔴 ÇIKTI HİÇBİR ZAMAN main'e girmez: denetim/GARIPLIK-<bolge>-<dilim>.tsv dalda kalır.
🔴 BU BİR SÜZGEÇTİR, HÜKÜM DEĞİL: bulgu "atlasa göre garip"tir; kaynak (§D) bulunmadan teyitli işaret yazılmaz.
🔴 MOTOR DOSYALARINA (uret_petek/renkler/girdi/motor_onbellek) DOKUNMAZ, içe de almaz.

kullanım:
  py arac/gariplik_tara.py --sinav                          # sentetik sınav (ağır veri yok, saniyeler)
  py arac/gariplik_tara.py --kuru --bolge R4 --dilim erken-yeni --harita <yol>   # yalnız gün listesini yaz
  py arac/gariplik_tara.py --bolge R4 --dilim erken-yeni --harita <yol> --carpan 1.0 [--kontrol-gunleri N]
  (üç eşik için --carpan 0.7 / 1.0 / 1.5 ayrı koş; çıktı dosyası adına çarpan eklenir)
"""
import argparse
import hashlib
import io
import json
import math
import os
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# ───────────────────────── bölge şeması (plan §A.3; kutu = lat0,lat1,lon0,lon1) ──────────
BOLGE = {
    "R1": ("Avrupa", (35, 72, -25, 62)),
    "R2": ("Orta Doğu + Kuzey Afrika", (12, 43, -18, 65)),
    "R3": ("Orta Asya + Step", (36, 60, 45, 100)),
    "R4": ("Güney Asya", (5, 38, 60, 95)),
    "R5": ("Doğu Asya", (18, 70, 95, 180)),
    "R6": ("GD Asya + adalar", (-11, 25, 92, 150)),
    "R7": ("Sahra-altı Afrika", (-35, 15, -20, 52)),
    "R8": ("Kuzey Amerika", (15, 85, -170, -50)),
    "R9": ("Meksika + Karayipler", (5, 33, -120, -58)),
    "R10": ("Güney Amerika", (-56, 13, -82, -34)),
    "R11": ("Okyanusya + uzak adalar", (-50, 0, 110, 180)),
}
# çağ dilimi: ad → (başlangıç yılı, bitiş yılı)
DILIM = {
    "antik": (-9999, 500), "erken-ortacag": (500, 1000), "ortacag": (1000, 1500),
    "erken-yeni": (1500, 1800), "yakin": (1800, 1945), "modern": (1945, 9999),
}
# eşik tablosu (plan §C.2 — İLK ÖNERİ, pilotla kalibre edilir). km / km².
# sütunlar: t2 deniz-kara boşluk genişliği · t4 iç boşluk alanı · t5 (küçük, orta, büyük) · bölüştürme sınırı ·
#           t1 eksklav kopukluk · t3 (en <, boy >)
ESIK = {
    "antik":         dict(t2=500, t4=60000, t5=(150, 300, 600), bol=400, t1=800, t3=(80, 400)),
    "erken-ortacag": dict(t2=400, t4=40000, t5=(120, 250, 450), bol=300, t1=600, t3=(60, 300)),
    "ortacag":       dict(t2=250, t4=20000, t5=(100, 200, 350), bol=250, t1=400, t3=(50, 250)),
    "erken-yeni":    dict(t2=150, t4=10000, t5=(80, 150, 250), bol=200, t1=300, t3=(40, 200)),
    "yakin":         dict(t2=100, t4=5000, t5=(50, 100, 150), bol=150, t1=250, t3=(30, 150)),
    "modern":        dict(t2=100, t4=2000, t5=(30, 60, 100), bol=100, t1=200, t3=(25, 100)),
}
OLCEK_SINIR = (300, 1500)      # devlet ölçeği: küçük < 300 km · orta < 1500 km · büyük


def _shapely():
    global shape, box, unary_union, nearest_points, LineString, prep, Point
    from shapely.geometry import shape, box, LineString, Point
    from shapely.ops import unary_union, nearest_points
    from shapely.prepared import prep


# ───────────────────────── yardımcılar ─────────────────────────
def gun_anahtar(s):
    """'-0025-06-01' / '1526-09' / '1526' → (yıl, ay, gün); negatif yıl desteklenir (metin olarak karşılaştırılmaz)."""
    neg = s.startswith("-")
    p = s.lstrip("-").split("-")
    y = int(p[0])
    return (-y if neg else y, int(p[1]) if len(p) > 1 else 1, int(p[2]) if len(p) > 2 else 1)


def dilim_adi(yil):
    for ad, (a, b) in DILIM.items():
        if a <= yil < b:
            return ad
    return "modern"


def kmdeg(lat):
    return 111.320 * math.cos(math.radians(lat)), 110.574     # (km/derece boylam, km/derece enlem)


def uzunluk_km(a, b):
    kx, ky = kmdeg((a[1] + b[1]) / 2.0)
    return math.hypot((b[0] - a[0]) * kx, (b[1] - a[1]) * ky)


def alan_km2(g):
    c = g.centroid
    kx, ky = kmdeg(c.y)
    return g.area * kx * ky


def en_boy_km(g):
    """Yönlü en küçük dikdörtgenin kısa/uzun kenarı (km)."""
    r = g.minimum_rotated_rectangle
    if r.geom_type != "Polygon":
        return 0.0, 0.0
    k = list(r.exterior.coords)
    a, b = uzunluk_km(k[0], k[1]), uzunluk_km(k[1], k[2])
    return min(a, b), max(a, b)


def parcalar(g):
    if g.is_empty:
        return []
    return list(g.geoms) if hasattr(g, "geoms") else [g]


def hash_kimlik(tur, geom, devletler, gun_basi):
    c = geom.centroid
    anahtar = "%s|%.1f,%.1f|%s|%s" % (tur, round(c.y * 2) / 2, round(c.x * 2) / 2,
                                      ",".join(sorted(devletler)), gun_basi)
    return "gr-" + hashlib.sha1(anahtar.encode("utf-8")).hexdigest()[:12]


def olcek(g):
    k = en_boy_km(g)[1]
    return 0 if k < OLCEK_SINIR[0] else (1 if k < OLCEK_SINIR[1] else 2)


# ───────────────────────── bir günün analizi ─────────────────────────
def analiz(gun, devlet_geom, kara, kutu, e, carpan, dilim):
    """devlet_geom: {id: shapely}; kara: kutuya kırpılmış kara (shapely); e: ESIK[dilim]. Döner: bulgu sözlükleri."""
    bulgu = []
    boyali = unary_union(list(devlet_geom.values())) if devlet_geom else None
    bos = kara if boyali is None else kara.difference(boyali.buffer(0))
    komsu_tampon = 0.08                      # ≈ 9 km: bir boşluğa değen devletleri bulmak için
    deniz_tampon = 0.08

    # --- tür 2 / 4 / 5: boşluk bileşenleri
    for p in parcalar(bos):
        a = alan_km2(p)
        if a < 50:                           # kırıntı: ölçü hatası
            continue
        en, boy = en_boy_km(p)
        kom = sorted(i for i, g in devlet_geom.items() if g.distance(p) <= komsu_tampon)
        deniz = p.buffer(deniz_tampon).difference(kara).area > 1e-6            # kıyıya (denize) komşu mu
        kutu_kenari = not kutu.buffer(-1e-6).contains(p)                    # bölge kutusunu kesiyor mu → ölçülemez
        if kutu_kenari or not kom:
            continue                         # kutu kenarı artefaktı / hiç komşusu yok (iç bölge: Envanter'de)
        if len(kom) == 1 and not deniz:      # çevrili boşluk → tür 4
            if a >= e["t4"] * carpan:
                bulgu.append(("4", p, kom, "alan_km2=%.0f en=%.0f boy=%.0f" % (a, en, boy)))
        elif len(kom) >= 2:                  # iki devlet arası → tür 5
            sc = min(olcek(devlet_geom[k]) for k in kom)
            if en >= e["t5"][sc] * carpan:
                bol = "bolusturulebilir" if en <= e["bol"] else "BOLUSTURULMEZ"
                bulgu.append(("5", p, kom, "en=%.0f boy=%.0f alan_km2=%.0f %s" % (en, boy, a, bol)))
        elif deniz and len(kom) == 1:        # tek devlete bitişik kıyı şeridi → tür 2
            if en >= e["t2"] * carpan:
                bulgu.append(("2", p, kom, "en=%.0f boy=%.0f alan_km2=%.0f" % (en, boy, a)))

    # --- tür 1: kopuk bileşenler (aynı devletin gövdeye değmeyen parçası)
    kara_h = prep(kara.buffer(0.02))
    for i, g in devlet_geom.items():
        ps = sorted(parcalar(g), key=lambda x: x.area, reverse=True)
        if len(ps) < 2:
            continue
        ana = ps[0]
        for p in ps[1:]:
            if alan_km2(p) < 100:
                continue
            n1, n2 = nearest_points(ana, p)
            d = uzunluk_km((n1.x, n1.y), (n2.x, n2.y))
            if d < 30 or d > e["t1"] * 2:    # bitişik sayılır / çok uzak (koloni, deniz-aşırı) → bu betiğin işi değil
                continue
            if not kara_h.covers(LineString([n1, n2])):
                continue                     # arada deniz: ada/kıyı bağlantısı, eksklav kopukluğu sayılmaz
            if d >= e["t1"] * carpan:
                orta = LineString([n1, n2]).interpolate(0.5, normalized=True)
                aradaki = sorted(j for j, h in devlet_geom.items() if j != i and h.buffer(0.02).contains(orta))
                tur = "1e" if aradaki else "1b"       # 1e: aradaki alan BAŞKA devletin (enklav-adayı) · 1b: aradaki sahipsiz
                bulgu.append((tur, p, [i] + aradaki, "kopukluk_km=%.0f parca_km2=%.0f" % (d, alan_km2(p))))

    # --- tür 3: girinti/koridor (gövdeyi kapat; farkı dar-uzun mu?)
    for i, g in devlet_geom.items():
        ana = max(parcalar(g), key=lambda x: x.area, default=None)
        if ana is None or alan_km2(ana) < 5000:
            continue
        yaricap = max(e["t3"][0] / 111.0, 0.15)            # derece, kaba
        kapali = ana.buffer(yaricap).buffer(-yaricap)
        fark = kapali.difference(ana).intersection(kara)
        for q in parcalar(fark):
            if alan_km2(q) < 300:
                continue
            en, boy = en_boy_km(q)
            if en < e["t3"][0] / carpan and boy > e["t3"][1] * carpan and not q.buffer(1e-6).intersects(kutu.exterior):
                bulgu.append(("3", q, [i], "en=%.0f boy=%.0f" % (en, boy)))
    return bulgu


# ───────────────────────── veri yükleme ─────────────────────────
def js_blok(metin, ad):
    i = metin.index("window." + ad)
    j = metin.index("=", i) + 1
    k = metin.index("\n", j)
    while metin[k - 1] != ";":
        k = metin.index("\n", k + 1)
    return json.loads(metin[j:k].rstrip().rstrip(";"))


def harita_yukle(yol):
    ham = io.open(yol, encoding="utf-8").read()
    return js_blok(ham, "DEVLET_HARITA"), js_blok(ham, "DEVLET_PARCALAR"), js_blok(ham, "DEVLET_PARCA_HALKA")


def poligonlar(dnm_g, havuz, ph):
    """app.js parcaCoz'un aynısı: g = [halka-grubu indeksi]; PARCA_HALKA[i] = [halka indeksleri] (ilki dış, ötekiler delik)."""
    from shapely.geometry import Polygon
    out = []
    for p in dnm_g or []:
        if not isinstance(p, int):
            hl = p
        else:
            hl = [havuz[h] for h in (ph[p] or []) if 0 <= h < len(havuz) and havuz[h]]
        if not hl or len(hl[0]) < 4:
            continue
        try:
            q = Polygon(hl[0], hl[1:]).buffer(0)
            if not q.is_empty:
                out.append(q)
        except Exception:
            pass
    return out


def kara_yukle(kutu):
    gj = json.load(io.open(os.path.join(KOK, "veri-kaynak", "ne_10m_land.geojson"), encoding="utf-8"))
    parca = []
    for f in gj["features"]:
        g = shape(f["geometry"])
        if g.intersects(kutu):
            parca.append(g.intersection(kutu))
    return unary_union(parca).buffer(0)


def gun_listesi(dev, yil0, yil1, kutu, n_kontrol):
    """Bölgedeki devlet dönemlerinin kırılma günleri (f ve t) + her dilim için kontrol günü."""
    gunler = set()
    for d in dev:
        for p in d.get("dnm", []):
            for a in (p.get("f"), p.get("t")):
                if a and yil0 <= gun_anahtar(a)[0] < yil1:
                    gunler.add(a)
    adim = max(1, (yil1 - yil0) // max(1, n_kontrol))
    for y in range(yil0, yil1, adim):
        gunler.add("%04d-06-15" % y if y >= 0 else "-%04d-06-15" % -y)
    return sorted(gunler, key=gun_anahtar)


def aktif_devletler(dev, havuz, ph, gun, kutu):
    k = gun_anahtar(gun)
    out = {}
    for d in dev:
        for p in d.get("dnm", []):
            if p.get("f") and p.get("t") and gun_anahtar(p["f"]) <= k < gun_anahtar(p["t"]):
                ps = [q.intersection(kutu) for q in poligonlar(p.get("g"), havuz, ph)]
                ps = [q for q in ps if not q.is_empty]
                if ps:
                    g = unary_union(ps)
                    out[d["id"]] = unary_union([out[d["id"]], g]) if d["id"] in out else g
                break
    return out


# ───────────────────────── sentetik sınav (ağır veri yok) ─────────────────────────
def sinav():
    """İki yönde sınar: (a) bilinen garipliği BULMALI, (b) temiz yapıyı BULMAMALI."""
    _shapely()
    from shapely.geometry import Polygon
    kutu = box(-5, -5, 45, 45)
    kara = box(0, 5, 30, 35)                                 # çevresi deniz
    A = box(0, 5, 14, 35).difference(box(4, 15, 7, 18)).buffer(0)          # 3x3° delik ≈ 100.000 km² → t4(erken-yeni)=10.000 aşar
    B = box(18, 5, 30, 35)                                    # A ile B arası 4° ≈ 440 km boşluk (tür 5)
    gun = "1600-06-15"
    e = ESIK["erken-yeni"]
    b1 = analiz(gun, {"A": A, "B": B}, kara, kutu, e, 1.0, "erken-yeni")
    turler = sorted(set(t for t, *_ in b1))
    ok = True
    if "4" not in turler:
        print("✗ sınav: çevrili delik (tür 4) BULUNAMADI"); ok = False
    if "5" not in turler:
        print("✗ sınav: iki devlet arası boşluk (tür 5) BULUNAMADI"); ok = False
    # negatif: boşluksuz iki komşu devlet + eşik altı delik → bulgu OLMAMALI
    T1 = box(0, 5, 15, 35)
    T2 = box(15, 5, 30, 35).difference(box(20, 20, 20.3, 20.3))
    b2 = analiz(gun, {"T1": T1, "T2": T2}, kara, kutu, e, 1.0, "erken-yeni")
    if [x for x in b2 if x[0] in ("4", "5")]:
        print("✗ sınav: temiz yapıda yanlış bulgu:", [(t, k) for t, _, k, _ in b2]); ok = False
    # kopuk eksklav + arada sahipsiz
    D = box(0, 5, 8, 15); D2 = box(12, 5, 16, 9)             # 4° ≈ 440 km ara → t1 (300) aşar; arada boşluk
    b3 = analiz(gun, {"D": unary_union([D, D2])}, kara, kutu, e, 1.0, "erken-yeni")
    if not [x for x in b3 if x[0] == "1b"]:
        print("✗ sınav: kopuk eksklav (tür 1b) BULUNAMADI:", [(t, k) for t, _, k, _ in b3]); ok = False
    # enklav-adayı: aradaki alan başka devletin
    E1 = unary_union([box(0, 5, 8, 15), box(12, 5, 16, 9)]); E2 = box(8, 5, 12, 15)
    b4 = analiz(gun, {"E1": E1, "E2": E2}, kara, kutu, e, 1.0, "erken-yeni")
    if not [x for x in b4 if x[0] == "1e"]:
        print("✗ sınav: enklav-adayı (tür 1e) BULUNAMADI:", [(t, k) for t, _, k, _ in b4]); ok = False
    print("sentetik sınav:", "GEÇTİ" if ok else "KALDI", "· tür dağılımı (pozitif):", turler)
    return 0 if ok else 1


# ───────────────────────── ana akış ─────────────────────────
def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--sinav", action="store_true")
    ap.add_argument("--kuru", action="store_true", help="yalnız gün listesini yaz (veri yüklenir, analiz yapılmaz)")
    ap.add_argument("--bolge", choices=sorted(BOLGE))
    ap.add_argument("--dilim", choices=sorted(DILIM))
    ap.add_argument("--harita", help="ÇÖZÜLMÜŞ devletler_harita.js")
    ap.add_argument("--carpan", type=float, default=1.0)
    ap.add_argument("--kontrol-gunleri", type=int, default=6)
    ap.add_argument("--en-cok-gun", type=int, default=0, help="0 = hepsi; sınama için küçük tut")
    ap.add_argument("--gunler", help="virgüllü gün listesi (YYYY-AA-GG; negatif yıl: -0025-06-01) — dilim listesinin yerine")
    a = ap.parse_args()
    _shapely()
    if a.sinav:
        return sinav()
    if not (a.bolge and a.dilim and a.harita):
        ap.error("--bolge --dilim --harita gerekli")
    ad, (la0, la1, lo0, lo1) = BOLGE[a.bolge]
    kutu = box(lo0, la0, lo1, la1)
    yil0, yil1 = DILIM[a.dilim]
    e = ESIK[a.dilim]
    dev, havuz, ph = harita_yukle(a.harita)
    gunler = gun_listesi(dev, yil0, yil1, kutu, a.kontrol_gunleri)
    if a.gunler:
        gunler = [x.strip() for x in a.gunler.split(",") if x.strip()]
    if a.en_cok_gun:
        gunler = gunler[:a.en_cok_gun]
    print("%s %s · dilim %s · çarpan %.1f · %d devlet kaydı · %d tarama günü" % (a.bolge, ad, a.dilim, a.carpan, len(dev), len(gunler)))
    if a.kuru:
        print(" ".join(gunler))
        return 0
    kara = kara_yukle(kutu)
    cik = os.path.join(KOK, "denetim", "GARIPLIK-%s-%s-c%s.tsv" % (a.bolge, a.dilim, ("%.1f" % a.carpan).replace(".", "")))
    gorulen = {}
    for g in gunler:
        dg = aktif_devletler(dev, havuz, ph, g, kutu)
        if not dg:
            continue
        for tur, geom, kom, olcu in analiz(g, dg, kara, kutu, e, a.carpan, a.dilim):
            h = hash_kimlik(tur, geom, kom, g)
            h2 = hash_kimlik(tur, geom, kom, "")          # kalıcılık: gün başı olmadan eşleştir
            if h2 in gorulen:
                gorulen[h2]["son_gun"] = g
                gorulen[h2]["gun_sayisi"] += 1
                continue
            c = geom.centroid
            gorulen[h2] = dict(hash=h, bolge=a.bolge, gorunen_bolge="", tur=tur, ilk_gun=g, son_gun=g, gun_sayisi=1,
                               lat=round(c.y, 3), lon=round(c.x, 3), devletler="+".join(kom), olcu=olcu,
                               dilim=a.dilim, durum="yeni")
    alanlar = ["hash", "bolge", "gorunen_bolge", "tur", "ilk_gun", "son_gun", "gun_sayisi", "lat", "lon", "devletler", "olcu", "dilim", "durum"]
    with io.open(cik, "w", encoding="utf-8", newline="\n") as f:
        f.write("\t".join(alanlar) + "\n")
        for v in gorulen.values():
            f.write("\t".join(str(v[k]) for k in alanlar) + "\n")
    print("✓ %d tekil bulgu → %s" % (len(gorulen), os.path.relpath(cik, KOK)))
    return 0


if __name__ == "__main__":
    sys.exit(main())
