# -*- coding: utf-8 -*-
"""ARAC-PARALEL-USTKUME-0910 — DÖNEM BAŞINA BÖLMENİN BOŞA GİDEN PAYI,
TAM GİRDİDE. Ve düzeltilmiş kazanç tablosu.

SORU
    FAZ 1 `aktif` boş olmayan HER dönem için geometri hesaplıyor;
    FAZ 2 birleştirmeden sonra bir kısmını kullanıyor. Fark BOŞA GİDER.
    Anadolu alt kümesinde ölçüldü: 329 / 296 = %11,1. Tam girdide kaç?

🔴 YÖNTEMİN SINIRI, PEŞİNEN (öngörüde de yazılıydı)
    `aktif`in TAM hesabı `devir_kumesi(a)` ve `_dolgu_kumesi(a)` ister;
    ikisi de geometri hattına bağlı. ⇒ geometri koşturmadan TAM `aktif`
    hesaplanamaz. Motorun KENDİ ETA bloğunun yaklaşımı kullanılıyor
    (`uret_petek.py:4477` — orada da `devir_kumesi()` KASTEN çağrılmıyor).

🟢 VE YAKLAŞIM KÖRÜ KÖRÜNE KULLANILMIYOR — KALİBRE EDİLİYOR:
    aynı yaklaşım ANADOLU kutusunda koşturulup bilinen 329/296'yı
    üretiyor mu diye sınanıyor. Üretmiyorsa sapma raporlanır.

arac/ SALT OKUNUR — girdi.py ve renkler.py import edilir, yazılmaz.
"""
import os, io, sys, json, hashlib, subprocess

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)

import girdi                       # noqa: E402
from renkler import BOYALAR        # noqa: E402

EPOK = "1281-01-01"
SON = "1923-11-01"
TUM = girdi.yukle()

# ANADOLU kutusu — sinav hangisini kullandiysa AYNISI
KUTU = (26.0, 36.0, 45.0, 42.0)


def girdi_izi(yerler):
    return hashlib.sha256(json.dumps(
        yerler, sort_keys=True, ensure_ascii=False,
        separators=(",", ":")).encode("utf-8")).hexdigest()


def _osm_aktif(y, a):
    return (any(dn["f"] <= a < dn["t"] for dn in y["d"]) or
            any(dn["f"] <= a < dn["t"] for dn in y["v"]))


def olc(YERLER):
    """Motorun ETA blogunun mantigi — ama IKI kova ayri sayiliyor:
       UST KUME  : `aktif` bos olmayan HER donem  (FAZ 1'in hesaplayacagi)
       GERCEK    : birlestirmeden sonra kalan     (FAZ 2'nin kullanacagi)"""
    ust, gercek, agirlik = 0, 0, 0
    devlet_ayrinti = []
    for _wdid in BOYALAR:
        _whj = [j for j, y in enumerate(YERLER)
                if any(sp["d"] == _wdid for sp in y["s"])]
        if not _whj:
            continue
        _wts = set()
        for _wj in _whj:
            for _wsp in YERLER[_wj]["s"]:
                if _wsp["d"] == _wdid:
                    _wts.add(_wsp["f"]); _wts.add(_wsp["t"])
            for _wdn in YERLER[_wj]["d"] + YERLER[_wj]["v"]:
                _wts.add(_wdn["f"]); _wts.add(_wdn["t"])
        _wts = sorted(t for t in _wts if EPOK <= t <= SON)
        if not _wts:
            continue
        if _wts[0] != EPOK:
            _wts.insert(0, EPOK)
        if _wts[-1] != SON:
            _wts.append(SON)
        d_ust, d_ger, d_ag = 0, 0, 0
        _wonce = None
        for _wk in range(len(_wts) - 1):
            _wa = _wts[_wk]
            _wak = frozenset(
                j for j in _whj
                if any(sp["d"] == _wdid and sp["f"] <= _wa < sp["t"]
                       for sp in YERLER[j]["s"])
                and not _osm_aktif(YERLER[j], _wa))
            if _wak:
                d_ust += 1                      # FAZ 1 BUNU HESAPLAR
            # motorun birlestirme kurali (ETA blogundaki bicimiyle):
            # `_w` = simdiye kadar birikmis agirlik, `dnm` bos degil vekili
            if _wak == _wonce and d_ag and _wak:
                continue                        # BIRLESTIRILDI -> BOSA GITTI
            _wonce = _wak
            if not _wak:
                continue
            d_ger += 1                          # FAZ 2 BUNU KULLANIR
            d_ag += len(_wak)
        if d_ger:
            devlet_ayrinti.append((_wdid, d_ust, d_ger, d_ag))
        ust += d_ust; gercek += d_ger; agirlik += d_ag
    return ust, gercek, agirlik, devlet_ayrinti


def lpt(isler, n):
    yuk = [0] * n
    for w in sorted(isler, reverse=True):
        i = yuk.index(min(yuk))
        yuk[i] += w
    return max(yuk)


# ---------- KALIBRASYON: ANADOLU kutusunda bilinen sayiyi uretiyor mu? -----
ANADOLU = [y for y in TUM
           if KUTU[0] <= y["lon"] <= KUTU[2] and KUTU[1] <= y["lat"] <= KUTU[3]]
a_ust, a_ger, a_ag, _ = olc(ANADOLU)
BEKLENEN = (329, 296)
sapma_ust = a_ust - BEKLENEN[0]
sapma_ger = a_ger - BEKLENEN[1]
print("KALIBRASYON — Anadolu kutusu (%d nokta)" % len(ANADOLU))
print("   yaklasim : ust %d · gercek %d · bosa %d (%%%.1f)"
      % (a_ust, a_ger, a_ust - a_ger,
         100.0 * (a_ust - a_ger) / max(1, a_ger)))
print("   SINAVDAN : ust %d · gercek %d · bosa %d (%%11.1)"
      % (BEKLENEN[0], BEKLENEN[1], BEKLENEN[0] - BEKLENEN[1]))
print("   sapma    : ust %+d · gercek %+d" % (sapma_ust, sapma_ger))

kal_oran_yak = 100.0 * (a_ust - a_ger) / max(1, a_ger)
kal_oran_ger = 100.0 * (BEKLENEN[0] - BEKLENEN[1]) / BEKLENEN[1]
kal_fark = abs(kal_oran_yak - kal_oran_ger)
KALIBRE = kal_fark <= 3.0
print("   ORAN     : yaklasim %%%.1f · gercek %%%.1f · fark %.1f puan -> %s"
      % (kal_oran_yak, kal_oran_ger, kal_fark,
         "KALIBRE ✓" if KALIBRE else "🔴 KALIBRE DEGIL"))

# ---------- TAM GIRDI ------------------------------------------------------
t_ust, t_ger, t_ag, ayrinti = olc(TUM)
t_oran = 100.0 * (t_ust - t_ger) / max(1, t_ger)
print("")
print("TAM GIRDI (%d nokta · %d kunye)" % (len(TUM), len(BOYALAR)))
print("   UST KUME %d · GERCEK %d · BOSA GIDEN %d  ->  %%%.1f"
      % (t_ust, t_ger, t_ust - t_ger, t_oran))
print("   toplam agirlik %d hucre-birlesimi" % t_ag)

print("")
print("   EN COK BOSA GIDEN 10 DEVLET (bosa/gercek):")
for did, u, g, w in sorted(ayrinti, key=lambda r: r[1] - r[2], reverse=True)[:10]:
    print("      %-26s ust %5d · gercek %5d · bosa %4d (%%%.0f)"
          % (did, u, g, u - g, 100.0 * (u - g) / max(1, g)))

# ---------- DUZELTILMIS KAZANC TABLOSU -------------------------------------
# Donem basina isler: her GERCEK donemin agirligi len(aktif). Ust kume
# maliyeti, FAZ 1'in FAZLADAN hesapladigi donemler.
donem_w = []
for _wdid in BOYALAR:
    pass
# is agirliklarini yeniden toplamak yerine, LPT icin GERCEK donem
# agirliklari gerekli -> olc() icinde toplanmadi; burada tekrar cikariyoruz.


def donem_agirliklari(YERLER):
    out_ger, out_ust = [], []
    for _wdid in BOYALAR:
        _whj = [j for j, y in enumerate(YERLER)
                if any(sp["d"] == _wdid for sp in y["s"])]
        if not _whj:
            continue
        _wts = set()
        for _wj in _whj:
            for _wsp in YERLER[_wj]["s"]:
                if _wsp["d"] == _wdid:
                    _wts.add(_wsp["f"]); _wts.add(_wsp["t"])
            for _wdn in YERLER[_wj]["d"] + YERLER[_wj]["v"]:
                _wts.add(_wdn["f"]); _wts.add(_wdn["t"])
        _wts = sorted(t for t in _wts if EPOK <= t <= SON)
        if not _wts:
            continue
        if _wts[0] != EPOK:
            _wts.insert(0, EPOK)
        if _wts[-1] != SON:
            _wts.append(SON)
        _wonce = None; _w = 0
        for _wk in range(len(_wts) - 1):
            _wa = _wts[_wk]
            _wak = frozenset(
                j for j in _whj
                if any(sp["d"] == _wdid and sp["f"] <= _wa < sp["t"]
                       for sp in YERLER[j]["s"])
                and not _osm_aktif(YERLER[j], _wa))
            if _wak:
                out_ust.append(len(_wak))
            if _wak == _wonce and _w and _wak:
                continue
            _wonce = _wak
            if not _wak:
                continue
            out_ger.append(len(_wak)); _w += len(_wak)
    return out_ger, out_ust


ger_w, ust_w = donem_agirliklari(TUM)
P = 0.821                      # asamanin kosudaki payi (kosu 8 logu)
KOSU_DK = 1205.5
print("")
print("DUZELTILMIS KAZANC — FAZ 1 UST KUMEYI kosar, FAZ 2 gercegi kullanir")
print("   (asama payi %%82,1 · kosu 8 = 1205,5 dk)")
tablo = {}
for n in (4, 8, 12, 16, 24, 32):
    ms_ger = lpt(ger_w, n)                 # bosa giden YOKSAYILIRSA
    ms_ust = lpt(ust_w, n)                 # GERCEK durum: ust kume kosuluyor
    hiz_ideal = sum(ger_w) / ms_ger
    hiz_gercek = sum(ger_w) / ms_ust       # payda ust kumeden, pay gercek isten
    kosu_ideal = 1.0 / ((1 - P) + P / hiz_ideal)
    kosu_gercek = 1.0 / ((1 - P) + P / hiz_gercek)
    tablo[str(n)] = {
        "asama_ideal": round(hiz_ideal, 2),
        "asama_ustkumeli": round(hiz_gercek, 2),
        "kosu_ideal": round(kosu_ideal, 2),
        "kosu_ustkumeli": round(kosu_gercek, 2),
        "kosu_dk": round(KOSU_DK / kosu_gercek),
        "kosu_saat": round(KOSU_DK / kosu_gercek / 60, 1)}
    print("   N=%-3d asama %5.2fx (ideal %5.2fx) -> KOSU %.2fx = %.1f saat"
          % (n, hiz_gercek, hiz_ideal, kosu_gercek, KOSU_DK / kosu_gercek / 60))

rapor = {
    "girdi_izi": girdi_izi(TUM),
    "yerlesim": len(TUM), "kunye": len(BOYALAR),
    "kalibrasyon": {
        "anadolu_nokta": len(ANADOLU),
        "yaklasim": {"ust": a_ust, "gercek": a_ger,
                     "oran_yuzde": round(kal_oran_yak, 1)},
        "sinavdan": {"ust": BEKLENEN[0], "gercek": BEKLENEN[1],
                     "oran_yuzde": round(kal_oran_ger, 1)},
        "fark_puan": round(kal_fark, 1),
        "kalibre": KALIBRE},
    "tam": {"ust_kume": t_ust, "gercek": t_ger, "bosa": t_ust - t_ger,
            "oran_yuzde": round(t_oran, 1), "agirlik": t_ag},
    "en_bosa_giden": [{"id": d, "ust": u, "gercek": g, "bosa": u - g}
                      for d, u, g, w in
                      sorted(ayrinti, key=lambda r: r[1] - r[2],
                             reverse=True)[:15]],
    "kazanc": tablo,
}
hedef = os.path.join(KOK, "denetim", "PARALEL-USTKUME-TAM-0910.json")
io.open(hedef, "w", encoding="utf-8").write(
    json.dumps(rapor, ensure_ascii=False, indent=1))
print("")
print("girdi izi:", rapor["girdi_izi"][:32])
print("yazildi:", hedef)
if not KALIBRE:
    print("🔴 KALIBRASYON TUTMADI — tam girdideki oran `olculemedi` damgalanmali")
    sys.exit(1)
