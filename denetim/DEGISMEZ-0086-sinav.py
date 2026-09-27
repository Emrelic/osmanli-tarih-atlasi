# DEGISMEZ-0086 — Değişmez 8'in İKİ YÖNLÜ sınavı (C13 · B9).
# "0 bulundu" demek için aletin ATEŞLENDİĞİ ispat edilir; temiz vaka RAHAT bırakılır.
#   py denetim/DEGISMEZ-0086-sinav.py          yapay + gerçek (gerçek ~2 dk: gövde okunur)
#   py denetim/DEGISMEZ-0086-sinav.py --yapay  yalnız yapay (saniyeler)
# Çıkış kodu: 0 = bütün sınavlar tuttu · 1 = en az biri çürüdü.
import sys, os
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "arac"))
import denetle
from shapely.geometry import box, Polygon

SONUC = []


def sina(ad, kosul, ayrinti=""):
    SONUC.append(bool(kosul))
    print(("  ✓ " if kosul else "  ✗ ") + ad + ("  · " + ayrinti if ayrinti else ""))


class Sahte:
    """_D8Govde yerine: elle kurulmuş gövde. Enlem 0'da 1° ≈ 111 km."""
    damga = "YAPAY"

    def __init__(self, parcalar, bolgeler=()):
        self.p = parcalar
        self.bolgeler = list(bolgeler)
        self._Polygon = Polygon

    def kesit(self, gun, kutu, bitis_dahil=False):
        return list(self.p)


def yer(ad, lon, lat, d):
    return {"ad": ad, "lon": lon, "lat": lat, "s": [{"d": d, "f": "1000-01-01", "t": "3000-01-01"}]}


KM = 1 / 111.32
HAT = {"id": "yapay", "taraflar": ["aaa-yapay", "bbb-yapay"], "sol_taraf": "aaa-yapay",
       "f": "1900-01-01", "t": "1900-06-01", "sinif": "E",
       "hat": [[0.0, -0.9], [0.0, 0.9]]}          # kuzeye gider ⇒ SOL = batı = aaa
Y = [yer("A-merkez", -0.5, 0.0, "aaa-yapay"), yer("B-merkez", 0.5, 0.0, "bbb-yapay"),
     yer("B-cikinti", 0.02, 0.3, "bbb-yapay")]
A = box(-1, -1, 0, 1)
B = box(0, -1, 1, 1)


def a_say(parcalar, bolgeler=(), hat=HAT):
    return denetle.degismez8(Y, hatlar=[hat], gv=Sahte(parcalar, bolgeler))


def yapay():
    print("YAPAY — 8a")
    R = a_say([("aaa-yapay", A), ("bbb-yapay", B)])
    sina("temiz hat: gövdeler tam hatta yaslı ⇒ 0", len(R["a"]) == 0, f"{len(R['a'])} birim")
    sina("ölçüldü (boş küme ölçümsüzlükten gelmiyor)", R["olculen"] == 2, f"ölçülen {R['olculen']}")

    cik = box(-15 * KM, 0.2, 0, 0.4)                      # B, hattı 15 km aşıp batıya
    R = a_say([("aaa-yapay", A.difference(cik)), ("bbb-yapay", B.union(cik))])
    sina("BOZUK: B 15 km taşıyor ⇒ yakalanır", len(R["a"]) >= 1,
         "; ".join(f"{x['gun']} {x['yer']} {x['km']}km {x['km2']}km²" for x in R["a"]))
    sina("taşma doğru yerleşime bağlandı (B-cikinti)",
         all(x["yer"] == "B-cikinti" for x in R["a"]) and R["a"])
    sina("derinlik ölçüldü ≈ 15 km", R["a"] and 13 <= max(x["km"] for x in R["a"]) <= 15.5,
         str(max((x["km"] for x in R["a"]), default=0)))

    sig = box(-3 * KM, 0.2, 0, 0.4)                       # 3 km: genelleştirme payı
    R = a_say([("aaa-yapay", A.difference(sig)), ("bbb-yapay", B.union(sig))])
    sina("3 km taşma (< D8_DERIN) ⇒ 0", len(R["a"]) == 0, f"{len(R['a'])}")

    ada = box(-20 * KM, 0.2, -10 * KM, 0.4)               # hatta DEĞMEYEN B parçası
    R = a_say([("aaa-yapay", A.difference(ada)), ("bbb-yapay", B), ("bbb-yapay", ada)])
    sina("eksklav (hatta değmiyor) ⇒ muaf", len(R["a"]) == 0, f"{len(R['a'])}")

    R = a_say([("aaa-yapay", A.difference(cik)), ("bbb-yapay", B), ("__BOSLUK__", cik)])
    sina("__BOSLUK__ taşması ⇒ muaf", len(R["a"]) == 0, f"{len(R['a'])}")

    R = a_say([("aaa-yapay", A)])
    sina("karşı gövde yok ⇒ ÖLÇÜLEMEDİ (temiz DEĞİL)",
         R["olculen"] == 0 and len(R["olculemeyen"]) == 2, f"ölçülemeyen {len(R['olculemeyen'])}")

    print("YAPAY — 8b")
    BOL = {"ad": "Yapay", "k": 2, "lat": 0.0, "lon": 0.0, "f": "1900-01-01", "t": "1900-06-01",
           "g": [[list(box(-0.5, -0.5, 0.5, 0.5).exterior.coords)]]}
    osm = box(-1, -1, 0, 1)
    R = a_say([("OSMANLI", osm), ("bbb-yapay", B)], [BOL])
    sina("BOZUK: bölgenin yarısı yabancı gövdede ⇒ yakalanır", len(R["b"]) >= 1,
         "; ".join(f"{x['gun']} {x['kime']} {x['km2']}km² %{x['oran']}" for x in R["b"]))
    R = a_say([("OSMANLI", osm), ("OSM-TABI", B)], [BOL])
    sina("tâbi gövde ⇒ muaf (§3)", len(R["b"]) == 0, f"{len(R['b'])}")
    R = a_say([("OSMANLI", box(-1, -1, 1, 1))], [BOL])
    sina("bölge tamamen Osmanlı ⇒ 0", len(R["b"]) == 0, f"{len(R['b'])}")
    kucuk = box(0.495, -0.5, 1, 0.5)                    # ~0,5 km şerit: < 50 km²
    R = a_say([("OSMANLI", box(-1, -1, 0.495, 1)), ("bbb-yapay", kucuk)], [BOL])
    sina("kıl payı (< 50 km²) ⇒ 0", len(R["b"]) == 0, f"{len(R['b'])}")


def rapor_dali():
    """denetle.py'nin KARAR dalı ateşleniyor mu: tavan aşımı ✗, yeni hat kovası tavana girmez."""
    import tempfile, json, io, contextlib
    print("YAPAY — karar dalı (degismez8_rapor)")
    sahte = dict(a=[dict(hat="h-eski", gun="1900-01-01", yan="sol", yer="X", km=9.0, km2=40,
                         sinif="E", kimden="bbb"),
                    dict(hat="h-yeni", gun="1900-01-01", yan="sol", yer="Y", km=9.0, km2=40,
                         sinif="E", kimden="bbb")],
                 a_kaba=[], b=[dict(bolge="Z", k=2, gun="1900-01-01", kime="bbb", km2=900, oran=9.0)],
                 olculen=2, olculemeyen=[], olculen_hatlar=["h-eski"], hat_sayisi=2,
                 iki_tarafsiz=0, damga="YAPAY", sure=(0, 0))
    esk = (denetle.degismez8, denetle.DEGISMEZ8_DEFTERI, denetle.BEKLENEN_D8A, denetle.BEKLENEN_D8B)
    d = tempfile.mkdtemp()
    try:
        denetle.degismez8 = lambda Y: sahte
        denetle.DEGISMEZ8_DEFTERI = os.path.join(d, "defter.json")
        json.dump({"hatlar": ["h-eski"], "a": [], "b": []}, open(denetle.DEGISMEZ8_DEFTERI, "w"))

        def kos(ta, tb):
            denetle.BEKLENEN_D8A, denetle.BEKLENEN_D8B = ta, tb
            f = io.StringIO()
            with contextlib.redirect_stdout(f):
                r = denetle.degismez8_rapor([])
            return r, f.getvalue()
        r, cik = kos(1, 1)
        sina("tavanda ⇒ ihlal YOK; yeni hat tavana KATILMADI (1 evren içi, 1 YENİ KAPSAM)",
             r is False and "YENİ KAPSAM" in cik and "1 birim (tavan 1)" in cik)
        r, cik = kos(0, 1)
        sina("8a tavanı aşılınca ⇒ İHLAL (✗) ve yeni birim ADIYLA basılır",
             r is True and "8a ✗" in cik and "8a YENİ  h-eski" in cik)
        r, cik = kos(1, 0)
        sina("8b tavanı aşılınca ⇒ İHLAL", r is True and "8b ✗" in cik)
        r, cik = kos(5, 1)
        sina("ölçüm tavanın altında ⇒ TAVAN GEVŞEK uyarısı", r is False and "TAVAN GEVŞEK" in cik)
        denetle.degismez8 = lambda Y: (_ for _ in ()).throw(ImportError("shapely yok"))
        r, cik = kos(1, 1)
        sina("ölçülemezse 'ÖLÇÜLEMEDİ' basar, temiz ✓ basmaz", "ÖLÇÜLEMEDİ" in cik and "✓" not in cik)
    finally:
        (denetle.degismez8, denetle.DEGISMEZ8_DEFTERI,
         denetle.BEKLENEN_D8A, denetle.BEKLENEN_D8B) = esk


def gercek():
    print("GERÇEK — koşu gövdesi (yükleniyor…)")
    import girdi
    Yg = girdi.yukle(sessiz=True)
    gv = denetle._D8Govde()
    print("  gövde damgası:", gv.damga)
    gv.bolgeler = [b for b in gv.bolgeler if b["ad"] == "Edirne"]
    R = denetle.degismez8(Yg, sadece={"d1920-tbmm-bg", "d1923-be-lu", "d1923-fr-de"}, gv=gv)
    a = R["a"]
    ed = [x for x in a if x["hat"] == "d1920-tbmm-bg" and x["gun"] == "1920-04-23" and x["yer"] == "Edirne"]
    sina("ATEŞLEME: Edirne 1920-04-23 TR→BG yakalanır", bool(ed),
         "; ".join(f"{x['km']}km {x['km2']}km²" for x in ed))
    tb = [x for x in a if x["hat"] == "d1920-tbmm-bg" and x["gun"] == "1920-04-23"]
    sina("tbmm-bg 1920-04-23 iki yönde taşma (TR→BG ve BG→TR)",
         {x["yan"] for x in tb} == {"sol", "sag"}, ", ".join(sorted({x['yer'] for x in tb})))
    bl = [x for x in a if x["hat"] == "d1923-be-lu"]
    sina("be-lu BE→LU YAKALANIR (şartnamenin 'temiz' okuması çürük — rapor LU yanı %0 doğru)",
         any(x["kimden"] == "belcika" for x in bl), ", ".join(sorted({x['yer'] for x in bl})))
    fd = [x for x in a if x["hat"] == "d1923-fr-de"]
    sina("NEGATİF: fr-de Almanya→Fransa yanı temiz (rapor FR yanı %95)",
         not any(x["kimden"] != "fransa-cumhuriyet" for x in fd),
         f"{sum(1 for x in fd if x['kimden'] != 'fransa-cumhuriyet')} birim")
    sina("POZİTİF aynı hatta: Strazburg FR→DE yakalanır",
         any(x["yer"] == "Strazburg" for x in fd))
    eb = [x for x in R["b"] if x["bolge"] == "Edirne" and x["gun"] == "1920-04-22"]
    sina("8b ATEŞLEME: Edirne bölgesi 1920-04-22 Bulgar gövdesinde (rapor ~21.958 km²)",
         any(x["kime"].startswith("bulgar") and x["km2"] > 15000 for x in eb),
         "; ".join(f"{x['kime']} {x['km2']}km² %{x['oran']}" for x in eb))


yapay()
rapor_dali()
if "--yapay" not in sys.argv:
    gercek()
print(f"\nSINAV: {sum(SONUC)}/{len(SONUC)} tuttu")
sys.exit(0 if all(SONUC) else 1)
