# -*- coding: utf-8 -*-
"""DEĞİŞMEZ R SINAVI — harita rötuşu kapısı İKİ YÖNDE öter mi? (P84-ROTUS, 6 Ekim 2026)

Tasarım `denetim/P84-ROTUS-TASARIM-1006b.md §6`daki altı vaka; her biri bir
ÖTMELİ ve bir ÖTMEMELİ ikizle. Kayıtlar SENTETİKTİR ve geçici dizine yazılır —
gerçek `data/rotus.js`e HİÇBİR ŞEY yazılmaz.

  ⓪ boş liste                    ⇒ ✓ ve gövde YÜKLENMEZ (fabrika çağrılmaz)
  ① geçerli rötuş                ⇒ temiz
  ② zaten bağlı parçalar         ⇒ R3 öter      ikizi ①
  ③ poligonda sahipli nokta      ⇒ R4 öter      ikizi: nokta kime'nin
  ④ İbrail şeridi (GERÇEK)       ⇒ R5 öter      ikizi: güney ucu da içine alan poligon
  ⑤ hüküm "askida"               ⇒ R2 öter      ikizi ①; ⑤b K8 uyarısı onaysız ⇒ R2, onaylı ⇒ temiz
  ⑥ gövde yok                    ⇒ ÖLÇÜLEMEDİ   ikizi ①

④ GERÇEK KOŞULDA koşar: yayın geometrisi `kodla.py coz-c` ile çözülmüş
`devletler_harita.js`/`donemler.js` geçici bir DATA'ya konur; `_D8Govde`
gövde kimliğini (`__DP_SHA`/`__PR_SHA`) KENDİSİ sınar. Çözülmüş dosyalar
verilmezse ④ "ATLANDI" basar ve sınav ÇIKIŞ 2 verir (ölçülemedi ≠ geçti).

    py denetim/ARAC-ROTUS-SINAV-1006.py [--cozulmus <dizin>]
      <dizin>: devletler_harita.js + donemler.js (kodla.py coz-c çıktıları)
Çıkış: 0 hepsi beklendiği gibi · 1 bir vaka yanlış · 2 ④ ölçülemedi
"""
import io
import json
import os
import shutil
import sys
import tempfile
import contextlib

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import denetle  # noqa: E402
from shapely.geometry import box, Polygon, LineString  # noqa: E402
from shapely.ops import unary_union, nearest_points  # noqa: E402

SONUC = []


def kayit(id_, kime, kimden, f, t, geo, hukum="uygun", sorular=None, onay=None):
    so = {q: {"sonuc": "gecti", "olcum": "sınav"} for q in
          ("K1", "K2", "K3", "K4", "K5", "K6", "K7", "K8", "K9")}
    so.update(sorular or {})
    ko = {"kim": "SINAV", "gun": "2026-10-06", "hukum": hukum, "sorular": so}
    if onay:
        ko["onay"] = onay
    return {"id": id_, "ad": "sınav " + id_, "tur": "baglanti", "kime": kime,
            "kimden": [{"d": d} for d in kimden], "f": f, "t": t,
            "geo": [list(p) for p in geo], "teklif": {"kim": "SINAV", "h": "SINAV"},
            "kontrol": ko, "kaynak": "sınav — sentetik"}


def halka(g):
    return [[round(x, 6), round(y, 6)] for x, y in g.exterior.coords]


class SahteGovde:
    """A: 1500-1600 iki parça (A1, A2) · 1600-1700 TEK parça. B: şerit."""
    D = {
        "A": [("1500-01-01", "1600-01-01", [box(0, 0, 1, 1), box(1.2, 0, 2.2, 1)]),
              ("1600-01-01", "1700-01-01", [box(0, 0, 2.2, 1)])],
        "B": [("1500-01-01", "1700-01-01", [box(1.0, 0.3, 1.2, 2.0)])],
    }

    def donemler(self, kimlik):
        return [(f, t) for f, t, _ in self.D.get(kimlik, [])]

    def kesit(self, gun, kutu):
        k = box(*kutu)
        return [(gid, p) for gid, dn in self.D.items() for f, t, ps in dn
                if f <= gun < t for p in ps if p.intersects(k)]


def kos(ad, kayitlar, beklenen, Y=(), govde_fab=SahteGovde, halka_=()):
    d = tempfile.mkdtemp(prefix="rotus_sinav_")
    yol = os.path.join(d, "rotus.js")
    with open(yol, "w", encoding="utf-8") as f:
        f.write("window.ROTUS = %s;\n" % json.dumps(kayitlar, ensure_ascii=False))
    cagri = {"n": 0}

    def fab():
        cagri["n"] += 1
        return govde_fab()
    try:
        R = denetle.degismez_r(list(Y), dosya=yol, govde_fab=fab, halka=list(halka_),
                               index_kontrol=False)
    finally:
        shutil.rmtree(d, ignore_errors=True)
    kodlar = sorted({k for _, k, _ in R["ihlal"]})
    gercek = "OLCULEMEDI" if R["olculemedi"] else (",".join(kodlar) if kodlar else "TEMIZ")
    ok = (gercek == beklenen) if beklenen != "TEMIZ+YUKLEMEDI" else \
         (gercek == "TEMIZ" and cagri["n"] == 0)
    SONUC.append(ok)
    print("%s  %-46s beklenen %-16s gerçek %s" % ("✓" if ok else "✗", ad, beklenen, gercek))
    if not ok or "-v" in sys.argv:
        for x in R["ihlal"]:
            print("        ", x)
        for x in R["olculemedi"]:
            print("        ÖLÇÜLEMEDİ", x)
    return R


def main():
    # geçerli poligon: A1↔A2 arasını B'nin güney ucundan geçerek bağlar; B bölünmez
    P1 = box(0.95, 0.25, 1.25, 0.45)
    print("── sentetik gövde ──")
    kos("⓪ boş liste", [], "TEMIZ+YUKLEMEDI")
    kos("① geçerli rötuş", [kayit("R-1", "A", ["B"], "1500-01-01", "1600-01-01", halka(P1))], "TEMIZ")
    kos("② zaten bağlı (1600-1700 A tek parça)",
        [kayit("R-2", "A", ["B"], "1600-01-01", "1700-01-01", halka(P1))], "R3")
    Yb = [{"ad": "Bkent", "lon": 1.1, "lat": 0.35, "d": [], "v": [],
           "s": [{"f": "1500-01-01", "t": "1600-01-01", "d": "B"}]}]
    Ya = [{"ad": "Akent", "lon": 1.1, "lat": 0.35, "d": [], "v": [],
           "s": [{"f": "1500-01-01", "t": "1600-01-01", "d": "A"}]}]
    kos("③ poligonda B'nin yerleşimi", [kayit("R-3", "A", ["B"], "1500-01-01", "1600-01-01", halka(P1))],
        "R4", Y=Yb)
    kos("③ ikiz: nokta kime'nin (A)", [kayit("R-3b", "A", ["B"], "1500-01-01", "1600-01-01", halka(P1))],
        "TEMIZ", Y=Ya)
    kos("⑤ hüküm 'askida'", [kayit("R-5", "A", ["B"], "1500-01-01", "1600-01-01", halka(P1),
                                  hukum="askida", sorular={"K5": {"sonuc": "olculemedi", "olcum": "aranmadı"}})],
        "R2")
    k8 = {"K8": {"sonuc": "uyari", "olcum": "oran yüksek"}}
    kos("⑤b K8 uyarısı ONAYSIZ", [kayit("R-5b", "A", ["B"], "1500-01-01", "1600-01-01", halka(P1),
                                       sorular=k8)], "R2")
    kos("⑤b ikiz: K8 uyarısı ONAYLI", [kayit("R-5c", "A", ["B"], "1500-01-01", "1600-01-01", halka(P1),
                                            sorular=k8, onay={"kim": "Emre", "gun": "2026-10-06",
                                                              "uyarilar": ["K8"]})], "TEMIZ")
    kos("⑤c K4 AYKIRI onaylı bile", [kayit("R-5d", "A", ["B"], "1500-01-01", "1600-01-01", halka(P1),
                                          sorular={"K4": {"sonuc": "aykiri", "olcum": "nokta"}},
                                          onay={"kim": "Emre", "gun": "2026-10-06", "uyarilar": ["K4"]})],
        "R2")
    kos("R5 kayıt dışı sahip (kimden boş bırakılmış B)",
        [kayit("R-k", "A", ["C"], "1500-01-01", "1600-01-01", halka(P1))], "R5")
    # 📌 İlk yazımda beklenen "R5,R7" idi ve YANLIŞTI: R7 kime+kimden sınırlarına
    #    bakar, `f` A'nın dönem başı ⇒ R7 haklı olarak susar. Kod değil öngörü düzeldi.

    def yok():
        raise RuntimeError("devletler_harita.js YOK (sınav)")
    kos("⑥ gövde yok", [kayit("R-6", "A", ["B"], "1500-01-01", "1600-01-01", halka(P1))],
        "OLCULEMEDI", govde_fab=yok)

    # ── ④ GERÇEK geometri: İbrail ──
    print("── ④ gerçek geometri (İbrail, yayın gövdesi) ──")
    coz = None
    if "--cozulmus" in sys.argv:
        coz = sys.argv[sys.argv.index("--cozulmus") + 1]
    if not coz or not os.path.isfile(os.path.join(coz, "devletler_harita.js")):
        print("!  ④ ATLANDI — çözülmüş gövde verilmedi (--cozulmus). ÖLÇÜLEMEDİ ≠ geçti.")
        return 2
    ana_data = os.path.join(os.path.dirname(KOK), "atlas", "data")
    tmp = tempfile.mkdtemp(prefix="rotus_data_")
    try:
        for ad, kaynak in (("devletler_harita.js", coz), ("donemler.js", coz),
                           ("bolgeler.js", ana_data), ("devlet_parcalar.js", ana_data),
                           ("donem_parcalar.js", ana_data)):
            shutil.copy(os.path.join(kaynak, ad), os.path.join(tmp, ad))
        eski = denetle.DATA
        denetle.DATA = tmp
        try:
            with contextlib.redirect_stdout(io.StringIO()):
                import girdi
                Y = girdi.yukle()
            G = denetle._D8Govde()
        finally:
            denetle.DATA = eski
        gun = "1400-06-01"
        par = G.kesit(gun, (26.0, 44.0, 29.0, 46.0))
        # ⚠️ kesit PARÇA verir; bileşen için birleştir (kapının kendi dersi)
        def bil(gid):
            u = unary_union([p for g, p in par if g == gid])
            return list(getattr(u, "geoms", [u]))
        ef, bg = bil("eflak"), bil("bogdan")
        ana = max(ef, key=lambda p: p.area)
        from shapely.geometry import Point
        ib = [p for p in ef if p.buffer(1e-6).contains(Point(27.972, 45.27))][0]
        p1, p2 = nearest_points(ana, ib)
        # kullanıcı gibi çiz: uçlar iki Eflak parçasının İÇİNE ~1 km taşar
        dx, dy = p2.x - p1.x, p2.y - p1.y
        L = (dx * dx + dy * dy) ** 0.5
        ux, uy = dx / L * 0.01, dy / L * 0.01
        serit = LineString([(p1.x - ux, p1.y - uy), (p2.x + ux, p2.y + uy)]).buffer(0.02, cap_style=2)
        bkama = [p for p in bg if p.intersects(serit)][0]
        guney = bkama.intersection(box(26.0, 40.0, 29.0, max(p1.y, p2.y) + 0.03))
        genis = unary_union([serit, guney])
        if genis.geom_type != "Polygon":
            genis = max(genis.geoms, key=lambda q: q.area)
        km = lambda g: g.area * 111.32 * 111.32 * 0.71
        print("   şerit %.1f km² · genişletilmiş %.1f km² (Boğdan kamasının güney ucu dahil)"
              % (km(serit), km(genis)))
        kos("④ İbrail şeridi (en dar nokta)",
            [kayit("R-4", "eflak", ["bogdan"], "1359-01-01", "1420-01-01", halka(serit))],
            "R5", Y=Y, govde_fab=lambda: G)
        kos("④ ikiz: güney ucu da içinde",
            [kayit("R-4b", "eflak", ["bogdan"], "1359-01-01", "1420-01-01", halka(genis))],
            "TEMIZ", Y=Y, govde_fab=lambda: G)
    finally:
        shutil.rmtree(tmp, ignore_errors=True)
    return 0


if __name__ == "__main__":
    kod = main()
    n_ok = sum(SONUC)
    print("──\n%d/%d vaka beklendiği gibi" % (n_ok, len(SONUC)))
    if n_ok != len(SONUC):
        sys.exit(1)
    sys.exit(kod)
