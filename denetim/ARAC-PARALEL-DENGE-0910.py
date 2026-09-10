# -*- coding: utf-8 -*-
"""ARAC-PARALEL-DENGE-0910 — PARALELLİĞİN GERÇEK TAVANI: YÜK DENGESİ.

NİÇİN — ve bu alet BİR ÖLÇÜM KUSURUNDAN doğdu:
  `ARAC-PARALEL-KIYAS-0910` süreç yolunda 4 fiziksel çekirdekte yalnız
  1,44x verdi. "Gömülü paralel" bir iş için bu fazla düşük. Şüphe: işler
  eşit SAYIDA ama eşit MALİYETTE değil — motor_kara'nın tek bir dev
  Avrasya parçası varsa, o tek iş bütün koşuyu bekletir.
  ⇒ Ve aynı soru GERÇEK motor için de geçerli: 617 devletin yükü ne kadar
    çarpık? Bir devlet toplamın yarısıysa, 16 çekirdek de 2x'ten fazla
    veremez — ÇEKİRDEK SAYISINDAN BAĞIMSIZ OLARAK.

ÖLÇTÜĞÜ ŞEY — motorun KENDİ ETA ağırlığı (uret_petek.py :4477-4499)
  Ağırlık = o devletin kuracağı HÜCRE-BİRLEŞİMİ sayısı. Motorun kendi
  yorumu: "süreyi açıklayan değişkenin bu olduğu 23 kontrol noktasıyla
  ölçüldü: hücre R²=0,96 · gövde R²=0,51."
  🔴 VEKİLDİR, SÜRENİN KENDİSİ DEĞİL — R²=0,96 iyi ama 1 değil. Raporda
    öyle yazılır.

TAVAN FORMÜLÜ (mükemmel çizelgeleme varsayımıyla bile):
      hizlanma <= toplam_agirlik / max(en_agir_devlet, toplam/N)
  ve N işçilik gerçekçi tavan LPT (en uzun iş önce) benzetimiyle ölçülür.

arac/ SALT OKUNUR — girdi.py ve renkler.py IMPORT edilir, hiçbir şey yazılmaz.
"""
import os, io, sys, json, collections

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)

import girdi                       # noqa: E402
from renkler import BOYALAR        # noqa: E402

EPOK = "1281-01-01"
SON = "1923-11-01"

YERLER = girdi.yukle()
print("yerlesim: %d · BOYALAR: %d" % (len(YERLER), len(BOYALAR)))


def _osm_aktif(y, a):
    return (any(dn["f"] <= a < dn["t"] for dn in y["d"]) or
            any(dn["f"] <= a < dn["t"] for dn in y["v"]))


# --- motorun ETA agirlik blogunun BIREBIR kopyasi (:4477-4499) -------------
AGIRLIK = {}
DONEM_IS = []          # (agirlik, devlet) — DONEM BASINA is; ikinci tasarim
for _wdid in BOYALAR:
    _whj = [j for j, y in enumerate(YERLER)
            if any(sp["d"] == _wdid for sp in y["s"])]
    _w = 0
    if _whj:
        _wts = set()
        for _wj in _whj:
            for _wsp in YERLER[_wj]["s"]:
                if _wsp["d"] == _wdid:
                    _wts.add(_wsp["f"]); _wts.add(_wsp["t"])
            for _wdn in YERLER[_wj]["d"] + YERLER[_wj]["v"]:
                _wts.add(_wdn["f"]); _wts.add(_wdn["t"])
        _wts = sorted(t for t in _wts if EPOK <= t <= SON)
        if _wts:
            if _wts[0] != EPOK:
                _wts.insert(0, EPOK)
            _wonce = None
            for _wk in range(len(_wts) - 1):
                _wa = _wts[_wk]
                _wak = frozenset(
                    j for j in _whj
                    if any(sp["d"] == _wdid and sp["f"] <= _wa < sp["t"]
                           for sp in YERLER[j]["s"])
                    and not _osm_aktif(YERLER[j], _wa))
                if _wak == _wonce and _w and _wak:
                    continue
                _wonce = _wak
                if not _wak:
                    continue
                _w += len(_wak)
                DONEM_IS.append((len(_wak), _wdid))
    AGIRLIK[_wdid] = _w

agir = sorted(((w, d) for d, w in AGIRLIK.items()), reverse=True)
TOPLAM = sum(AGIRLIK.values())
CALISAN = [w for w, _ in agir if w > 0]
print("toplam agirlik: %d hucre-birlesimi · agirligi>0 devlet: %d"
      % (TOPLAM, len(CALISAN)))
print("EN AGIR 12:")
for w, d in agir[:12]:
    print("   %-28s %8d   %%%.1f" % (d, w, 100.0 * w / TOPLAM))


def lpt_makespan(isler, n):
    """En uzun is once (LPT) — pratikte ulasilabilir en iyiye yakin."""
    yuk = [0] * n
    for w in sorted(isler, reverse=True):
        i = yuk.index(min(yuk))
        yuk[i] += w
    return max(yuk)


rapor = {
    "yerlesim": len(YERLER), "boyalar": len(BOYALAR),
    "toplam_agirlik": TOPLAM, "calisan_devlet": len(CALISAN),
    "en_agir": [{"id": d, "agirlik": w, "pay_yuzde": round(100.0 * w / TOPLAM, 2)}
                for w, d in agir[:20]],
    "tavan": {},
}
print("")
print("PARALELLIK TAVANI (LPT cizelgeleme · mukemmel isci varsayimi):")
for n in (2, 4, 8, 12, 16, 24, 32):
    ms = lpt_makespan(CALISAN, n)
    rapor["tavan"][str(n)] = {"makespan": ms, "hizlanma": round(TOPLAM / ms, 2)}
    print("   N=%-3d  hizlanma tavani %.2fx   (makespan %d)"
          % (n, TOPLAM / ms, ms))

enb = agir[0][0]
rapor["tek_is_tavani"] = round(TOPLAM / enb, 2) if enb else None
print("")
print("🔴 TEK IS TAVANI: en agir devlet %s = %d (%.1f%%)"
      % (agir[0][1], enb, 100.0 * enb / TOPLAM))
print("   ⇒ SONSUZ cekirdekle bile hizlanma <= %.2fx" % (TOPLAM / enb))

# ═══ İKİNCİ TASARIM — DÖNEM BAŞINA BÖLME ═══════════════════════════════════
# Devlet başına bölme `rusya`ya çarpıyor. Ama bir devletin DÖNEMLERİ de
# birbirinden bağımsız: `g = unary_union([petek_epok(a)[j] for j in aktif])`
# yalnız (a, aktif) çiftine bakıyor.
# 🔴 ENGEL, VE KODUN KENDİSİ ONU KAYDETMİŞ (:4443 yorumu): dönem
#    BİRLEŞTİRME ölçütü `aktif == onceki and dnm` — yani GEOMETRİ SONUCUNA
#    bağlı, ve "ayırmak çıktıyı değiştirebilirdi" diye vazgeçilmiş.
# 🟢 AMA BURADAKİ İŞ LİSTESİ TAM O BİRLEŞTİRMEDEN SONRA çıkıyor: ETA bloğu
#    `_wak == _wonce` ile ardışık eşitleri zaten eliyor. Kalan her iş
#    GERÇEK bir geometri çağrısıdır. ⇒ tavan bu liste üzerinden ölçülür.
donem_w = [w for w, _ in DONEM_IS]
print("")
print("DONEM BASINA IS: %d adet · toplam %d · en agir %d (%%%.2f)"
      % (len(donem_w), sum(donem_w), max(donem_w),
         100.0 * max(donem_w) / sum(donem_w)))
rapor["donem_is_sayisi"] = len(donem_w)
rapor["donem_toplam"] = sum(donem_w)
rapor["donem_en_agir"] = max(donem_w)
rapor["donem_tavan"] = {}
print("DONEM BASINA TAVAN:")
for n in (2, 4, 8, 12, 16, 24, 32):
    ms = lpt_makespan(donem_w, n)
    rapor["donem_tavan"][str(n)] = {"makespan": ms,
                                    "hizlanma": round(sum(donem_w) / ms, 2)}
    print("   N=%-3d  hizlanma tavani %.2fx" % (n, sum(donem_w) / ms))
print("   ⇒ SONSUZ cekirdek tavani %.1fx"
      % (sum(donem_w) / max(donem_w)))

# --- BUTUN KOSUYA ETKISI (Amdahl) — asama kosu 8'de %82,1 --------------
P = 0.821
rapor["amdahl"] = {}
print("")
print("BUTUN KOSUYA ETKISI (asama payi %%82,1 · kosu 8 = 1205,5 dk):")
for ad, tav in (("devlet", rapor["tavan"]), ("donem", rapor["donem_tavan"])):
    for n in ("4", "8", "16"):
        s_asama = tav[n]["hizlanma"]
        s_tam = 1.0 / ((1 - P) + P / s_asama)
        rapor["amdahl"]["%s_N%s" % (ad, n)] = {
            "asama_hizlanma": s_asama, "kosu_hizlanma": round(s_tam, 2),
            "kosu_dk": round(1205.5 / s_tam)}
        print("   %-7s N=%-3s asama %.2fx -> KOSU %.2fx  (%d dk = %.1f saat)"
              % (ad, n, s_asama, s_tam, 1205.5 / s_tam, 1205.5 / s_tam / 60))

hedef = os.path.join(KOK, "denetim", "PARALEL-DENGE-0910.json")
io.open(hedef, "w", encoding="utf-8").write(
    json.dumps(rapor, ensure_ascii=False, indent=1))
print("yazildi:", hedef)
