# -*- coding: utf-8 -*-
"""
BİNME DENETİMİ — aynı toprak aynı günde iki devletin gövdesinde mi?
====================================================================
Post-it #24 (1354-03-02): Çorum kur: günü yüzünden Candar×Eretna 568 km² ve
Eretna×Ahiler 124 km² aynı anda iki devletin rengine girdi. Boşluk envanteri
(denetle_bosluk.py) "hiçbir devletin boyamadığı yeri" sayar; bu araç tersini:
**birden fazla devletin boyadığı yeri.**

Ölçüm ÜRETİLMİŞ geometriden yapılır (donemler.js + devletler_harita.js),
örneklenmez: gövdelerin değiştiği her gün (dönem başlangıcı) bir kesittir, iki
kırılma arası durum sabittir. Devletler ikişerli kesiştirilir (Osmanlı doğrudan +
tâbi tek gövde sayılır); ASGARI_KM2 altı kıyı/çizgi gürültüsü sayılmaz.

TAVAN (denetim/BINME-TAVAN.json): tüm tarama için
{"toplam_gun_km2", "binen_gun", "kesit_sayisi"}. Bugünkü ölçümdür; yalnız gerileme
bloke eder, iyileşince iner. Tavanı oturum önerir, Emre onaylar.

    py arac/denetle_binme.py --kesit 1354-03-02     # tek gün, çift listesi
    py arac/denetle_binme.py --tam                  # bütün kırılma günleri
    py arac/denetle_binme.py --tam --tavan-yaz      # tavanı bugünkü ölçüme çek

Çıkış: 0 temiz (tavan altı) · 1 tavan aşıldı · 2 ölçülemedi (geometri/tavan yok).
**2 temiz değildir.** Worktree'de üretilmiş ham dosyalar yoktur; ana checkout'un
data/ klasörü okunur (KOK_VERI ile ezilebilir). Okunan veri koşunun çıktısıdır:
hangi koşuya ait olduğu ilk satırda yazılır — eski koşuyu ölçmek yeni koşuyu
temize çıkarmaz.
"""
import io
import json
import os
import sys
import time
from collections import defaultdict

if ((getattr(sys.stdout, "encoding", None) or "").lower() not in ("utf-8", "utf8")
        and hasattr(sys.stdout, "buffer")):
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import denetle_bosluk as B  # noqa: E402
from shapely.geometry import Polygon  # noqa: E402
from shapely.ops import unary_union  # noqa: E402

KOK = B.KOK
TAVAN_YOL = os.path.join(KOK, "denetim", "BINME-TAVAN.json")
ASGARI_KM2 = 10
_VERI = {}
_PARCA = {}


def _veri_dizini():
    d = os.environ.get("KOK_VERI")
    if d:
        return d
    yerel = os.path.join(KOK, "data")
    if os.path.exists(os.path.join(yerel, "devletler_harita.js")) and \
            os.path.exists(os.path.join(yerel, "donemler.js")):
        return yerel
    # worktree: .claude/worktrees/<ad>/ → ana checkout'un data/'sı
    return os.path.abspath(os.path.join(KOK, "..", "..", "..", "data"))


def _oku(dosya, adlar):
    metin = open(os.path.join(B.DATA, dosya), encoding="utf-8").read()
    return [B._dizi(metin, a) for a in adlar]


def _poligon(halka_havuz, parca_halka, i, onek):
    """js/app.js parcaCoz sözleşmesi: parça indeksi → halka indeksleri → halkalar.

    İlk halka dış sınır, kalanlar delik. denetle_bosluk._parca bu iki basamağı
    atlıyor ve ham halkayı doğrudan Polygon sanıyor; üretilmiş dosyada hepsini
    None yapar ⇒ gövde boş, binme 0 görünür. Burada kullanılmaz.
    """
    k = (onek, i)
    if k not in _PARCA:
        try:
            rs = [halka_havuz[h] for h in parca_halka[i]]
            p = Polygon(rs[0], rs[1:])
            if not p.is_valid:
                p = p.buffer(0)
            _PARCA[k] = None if p.is_empty else p
        except Exception:
            _PARCA[k] = None
    return _PARCA[k]


def _yab():
    if "y" not in _VERI:
        _VERI["y"] = _oku("devletler_harita.js",
                          ["DEVLET_PARCALAR", "DEVLET_PARCA_HALKA", "DEVLET_HARITA"])
    return _VERI["y"]


def _km2(geom):
    return 0.0 if geom.is_empty else B._km2(geom.area, geom.centroid.y)


_GOVDE = {}   # (id, parça anahtarı) -> birleşik gövde; aynı parça kümesi bir kez birleştirilir
_CIFT = {}    # (anahtarA, anahtarB) -> km²; aynı iki gövde bir kez kesiştirilir


def _govde(kimlik, anahtar, parcalar):
    k = (kimlik, anahtar)
    if k not in _GOVDE:
        _GOVDE[k] = unary_union(parcalar) if parcalar else None
    return _GOVDE[k]


def yabanci_devlet_govdeleri(gun):
    """{devlet_id: (anahtar, birleşik gövde)} — o gün boyanan yabancılar.

    Anahtar = gövdeyi oluşturan parça indeksleri. İki kırılma arasında bir devletin
    parçaları değişmezse anahtar aynı kalır; birleştirme ve çift kesişimi önbellekten
    gelir (tam tarama ~2,5 saatten dakikalara iner).
    """
    havuz, ph, kayitlar = _yab()
    out = {}
    for k in kayitlar:
        idx = []
        for d in (k.get("dnm") or []):
            if d.get("f") and d.get("t") and d["f"] <= gun < d["t"]:
                idx.extend(d.get("g") or [])
        if idx:
            anahtar = tuple(sorted(idx))
            g = _govde(k.get("id"), anahtar,
                       [p for p in (_poligon(havuz, ph, i, "Y") for i in anahtar)
                        if p is not None])
            if g is not None:
                out[k.get("id")] = (anahtar, g)
    return out


def osmanli_govde(gun, D, PARCA):
    """(anahtar, gövde) — doğrudan (o) + tâbi (v) tek gövde; o gün dönem yoksa None."""
    havuz, ph = PARCA
    sec = [d for d in D if d.get("f") and d.get("t") and d["f"] <= gun < d["t"]]
    if not sec:
        return None
    idx = tuple(sorted([("o", i) for i in (sec[0].get("o") or [])] +
                       [("v", i) for i in (sec[0].get("v") or [])]))
    g = _govde("osmanli", idx,
               [p for p in (_poligon(havuz, ph, i, "O") for _, i in idx)
                if p is not None])
    return (idx, g) if g is not None else None


def kirilma_gunleri(D):
    g = {d["f"] for d in D if d.get("f")}
    for k in _yab()[2]:
        for d in (k.get("dnm") or []):
            if d.get("f"):
                g.add(d["f"])
    return sorted(g)


def kesit_olc(gun, D, PARCA):
    """[(a, b, km²)] — km² ≥ ASGARI_KM2 olan devlet çiftleri, büyükten küçüğe."""
    govdeler = yabanci_devlet_govdeleri(gun)
    osm = osmanli_govde(gun, D, PARCA)
    if osm is not None:
        govdeler["osmanli"] = osm   # (anahtar, gövde)
    ids = sorted(govdeler, key=str)
    sonuc = []
    for i, a in enumerate(ids):
        ga = govdeler[a]
        ka, ga = ga
        for b in ids[i + 1:]:
            kb, gb = govdeler[b]
            ck = ((a, ka), (b, kb))
            if ck not in _CIFT:
                _CIFT[ck] = (_km2(ga.intersection(gb)) if ga.intersects(gb) else 0.0)
            km = _CIFT[ck]
            if km >= ASGARI_KM2:
                sonuc.append((a, b, round(km)))
    return sorted(sonuc, key=lambda t: -t[2])


ORNEK_ADIM = 50   # kapı örneği: sıralı kırılma günlerinin her 50.'si (~60 kesit)


def ornek_olc(D, PARCA):
    """Kapı ölçümü: kırılma günlerinin her ORNEK_ADIM.'si — tam taramanın ~1/50'si.

    Tam tarama (--tam) ~30 dk sürer, her push'ta koşturulamaz. Örnek günler sabit
    (sıralı kırılma listesinin [::ORNEK_ADIM] dilimi) ⇒ iki ölçüm aynı günlere bakar;
    yeni kırılma günü eklenince dilim kayar, o zaman tavan yeniden yazılır (Emre onaylar).
    """
    gunler = kirilma_gunleri(D)[::ORNEK_ADIM]
    binen, toplam = 0, 0
    for g in gunler:
        r = kesit_olc(g, D, PARCA)
        if r:
            binen += 1
            toplam += sum(t[2] for t in r)
    return {"ornek_binen_gun": binen, "ornek_gun_km2": toplam,
            "ornek_kesit": len(gunler), "ornek_adim": ORNEK_ADIM}


def kapi():
    """denetle.py için: (çıkış 0/1/2, tek satır özet). Üretilmiş veri/tavan yoksa 2."""
    B.DATA = _veri_dizini()
    for f in ("donemler.js", "devletler_harita.js"):
        if not os.path.exists(os.path.join(B.DATA, f)):
            return 2, "%s altında %s yok (coz-c gerekir)" % (B.DATA, f)
    if not os.path.exists(TAVAN_YOL):
        return 2, "tavan dosyası yok (%s)" % TAVAN_YOL
    tavan = json.load(open(TAVAN_YOL, encoding="utf-8"))
    if "ornek_gun_km2" not in tavan:
        return 2, "tavan dosyasında örnek tavanı yok (--ornek --tavan-yaz)"
    havuz, ph, D = _oku("donemler.js", ["PARCALAR", "PARCA_HALKA", "DONEMLER"])
    o = ornek_olc(D, (havuz, ph))
    ozet = "%d/%d örnek günde binme · %d km² (tavan %d gün · %d km²)" % (
        o["ornek_binen_gun"], o["ornek_kesit"], o["ornek_gun_km2"],
        tavan["ornek_binen_gun"], tavan["ornek_gun_km2"])
    if o["ornek_gun_km2"] > tavan["ornek_gun_km2"] or \
            o["ornek_binen_gun"] > tavan["ornek_binen_gun"]:
        return 1, ozet
    return 0, ozet


def main():
    arg = sys.argv[1:]
    B.DATA = _veri_dizini()
    for f in ("donemler.js", "devletler_harita.js"):
        if not os.path.exists(os.path.join(B.DATA, f)):
            print("✗ ölçülemedi: %s altında %s yok (py arac/kodla.py coz-c …)"
                  % (B.DATA, f))
            return 2
    print("Binme denetimi — veri: %s · donemler.js %s"
          % (B.DATA, time.ctime(os.path.getmtime(os.path.join(B.DATA, "donemler.js")))))
    t0 = time.time()
    havuz, ph, D = _oku("donemler.js", ["PARCALAR", "PARCA_HALKA", "DONEMLER"])
    PARCA = (havuz, ph)

    if "--kesit" in arg:
        gun = arg[arg.index("--kesit") + 1]
        r = kesit_olc(gun, D, PARCA)
        print("\n%s · ≥%d km² binen çift: %d · toplam %d km²"
              % (gun, ASGARI_KM2, len(r), sum(t[2] for t in r)))
        for a, b, km in r:
            print("  %-28s × %-28s %8d km²" % (a, b, km))
        return 0

    if "--ornek" in arg:
        o = ornek_olc(D, PARCA)
        print("ÖRNEK ÖLÇÜM (%.0f sn): %s" % (time.time() - t0, json.dumps(o)))
        if "--tavan-yaz" in arg:
            t = json.load(open(TAVAN_YOL, encoding="utf-8")) \
                if os.path.exists(TAVAN_YOL) else {}
            t.update(o)
            json.dump(t, open(TAVAN_YOL, "w", encoding="utf-8"),
                      ensure_ascii=False, indent=1)
            print("Örnek tavanı yazıldı: %s (Emre onaylamadan commit etme)" % TAVAN_YOL)
        return 0

    if "--tam" not in arg:
        print("Tam tarama pahalıdır; açıkça iste: --tam  (ya da --kesit YYYY-AA-GG · "
              "--ornek = kapı örneği)")
        return 0

    gunler = kirilma_gunleri(D)
    print("%d kırılma günü taranıyor…" % len(gunler))
    ihlal, toplam = {}, 0
    for n, g in enumerate(gunler):
        r = kesit_olc(g, D, PARCA)
        if r:
            ihlal[g] = r
            toplam += sum(t[2] for t in r)
        if n % 100 == 0:
            print("  %d/%d · %.0f sn" % (n, len(gunler), time.time() - t0), flush=True)
    olcum = {"binen_gun": len(ihlal), "toplam_gun_km2": toplam,
             "kesit_sayisi": len(gunler)}
    cift = defaultdict(int)
    for r in ihlal.values():
        for a, b, km in r:
            cift["%s × %s" % (a, b)] += km
    print("\nÖLÇÜM: %s" % json.dumps(olcum, ensure_ascii=False))
    print("En çok binen çiftler (gün×km² toplamı):")
    for k, v in sorted(cift.items(), key=lambda t: -t[1])[:15]:
        print("  %-50s %10d" % (k, v))

    if "--tavan-yaz" in arg:
        t = json.load(open(TAVAN_YOL, encoding="utf-8")) \
            if os.path.exists(TAVAN_YOL) else {}
        t.update(olcum)
        json.dump(t, open(TAVAN_YOL, "w", encoding="utf-8"),
                  ensure_ascii=False, indent=1)
        print("Tavan yazıldı: %s (Emre onaylamadan commit etme)" % TAVAN_YOL)
        return 0
    if not os.path.exists(TAVAN_YOL):
        print("✗ tavan dosyası yok (%s) — ölçülemedi sayılır" % TAVAN_YOL)
        return 2
    tavan = json.load(open(TAVAN_YOL, encoding="utf-8"))
    if olcum["toplam_gun_km2"] > tavan["toplam_gun_km2"] or \
            olcum["binen_gun"] > tavan["binen_gun"]:
        print("✗ İHLAL: binme tavanı aşıldı (tavan %s)" % tavan)
        return 1
    print("✓ binme tavan altında (tavan %s)" % tavan)
    return 0


if __name__ == "__main__":
    sys.exit(main())
