# -*- coding: utf-8 -*-
"""ÇIKTI RENK DENETİMİ — ölçülen 0, ÇİZİLEN 0 mı?

🔴 NEDEN AYRI BİR ARAÇ VAR (RENK oturumu, 2026-08-03)

`renk_olc.py` komşuluğu **Voronoi hücrelerinden** kurar: iki hücre değiyor mu,
dönemleri örtüşüyor mu. Ama harita o hücrelerden DEĞİL, onların
**birleştirilmiş gövdelerinden** çizilir — `uret_petek.py` unary_union yapar,
`delikleri_doldur(kapat(g))` ile boşlukları kapatır, kıyıya kırpar ve Chaikin
ile yumuşatır. Bu adımlar komşuluğu DEĞİŞTİRİR:

  · kıyı kırpması, Voronoi'de değen iki hücreyi AYIRABİLİR
  · birleştirme + delik doldurma, Voronoi'de değmeyen iki gövdeyi DEĞDİREBİLİR

⇒ Girdi denetimi temiz olsa bile harita kirli olabilir. ÖLÇÜLDÜ (2026-08-03):

      çizili haritada değen kimlik çifti     608
      girdi komşuluğunda OLMAYAN              13   ← Voronoi bunları HİÇ görmüyor

Ve o 13'ün ikisi gerçek kusurdu:
      qing-hanedani ↔ toungoo   ΔE 0,0   (aynı hex, Çin-Birmanya sınırı)
      berar ↔ golkonda          ΔE 7,4   (Dekken)
İkisi de `renk_olc.denetle()` tarafından GÖRÜLEMİYORDU.

📌 Bu araç bugünün üçlüsünü tamamlıyor — üçü de aynı cins, "doğru sanılan ama
   doğrulanmamış" olanı bağırtıyor:
      renkler._opaklik_dogrula()   kopyalanmış SABİT ayrışırsa
      renkler._paylasim_dogrula()  örtük BAĞ bozulursa
      renk_cikti.py                GİRDİ ile ÇIKTI ayrışırsa   ← bu

⚠️ BU BETİK GİRDİYE HİÇ BAKMAZ. `yerlesimler.js`i, Voronoi'yi, `girdi.py`yi
   okumaz. Yalnız `data/devletler_harita.js` — yani motorun GERÇEKTEN çizdiği
   şey. Karşılaştırma da motorun O KOŞUDA yazdığı `renk` alanı üzerinden
   yapılır, `renkler.py`nin güncel rengiyle değil; yoksa girdiyle çıktı yine
   karışır.

ÇALIŞTIRMA
    py arac/renk_cikti.py            harita bayat mı + çizili çakışma var mı
    py arac/renk_cikti.py --guncel   ΔE'yi GÜNCEL palete göre hesapla
                                     (bir sonraki koşunun ne üreteceğini kestirir)
"""
import io
import json
import os
import sys
import collections

# ⚠️ BURADA `sys.stdout` SARMALANMAZ. `renk_olc` içe aktarılırken onu zaten
#   sarmalıyor; ikinci kez sarmalamak alttaki tamponu kapatıyor ve ilk print
#   `ValueError: I/O operation on closed file` ile patlıyor. Ölçüldü, iki kez.
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from renkler import BOYALAR, ALTLIK, OPAKLIK          # noqa: E402
from renk_olc import dE, lab, bind, h2r, DE_KOMSU     # noqa: E402
from shapely.geometry import Polygon                  # noqa: E402
from shapely.strtree import STRtree                   # noqa: E402
from shapely.ops import unary_union                   # noqa: E402

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
YOL = os.path.join(KOK, "data", "devletler_harita.js")

# Denetlenen kesitler. Her gün taranmıyor: 608 çiftlik bir kesit ~2 sn sürüyor,
# günlük tarama saatler alırdı. Sekiz kesit atlasın bütün çağlarını örnekliyor.
KESIT = ["1300-06-15", "1400-06-15", "1500-06-15", "1550-06-15",
         "1600-06-15", "1700-06-15", "1800-06-15", "1900-06-15"]


def _cek(ham, ad):
    i = ham.index("window." + ad + " = ")
    j = ham.index("\n", i)
    return json.loads(ham[i + len("window." + ad + " = "):j].rstrip(";"))


def _govde(parca, gi):
    """`dnm[].g` TEK İNDİS DEĞİL, İNDİS LİSTESİDİR — gövde çok parçalı.
    parca[i] = bir poligonun halka listesi; ilk halka dış, sonrakiler delik."""
    idx = gi if isinstance(gi, (list, tuple)) else [gi]
    pol = []
    for i in idx:
        halka = parca[int(i)]
        if not halka or len(halka[0]) < 4:
            continue
        try:
            p = Polygon(halka[0], [h for h in halka[1:] if len(h) >= 4])
            if not p.is_valid:
                p = p.buffer(0)
            if not p.is_empty and p.area > 0:
                pol.append(p)
        except Exception:
            pass
    return unary_union(pol) if pol else None


def denetle(guncel_palet=False):
    if not os.path.exists(YOL):
        raise SystemExit("!! %s yok — önce üretim koşulmalı" % YOL)
    ham = io.open(YOL, encoding="utf-8").read()
    parca = _cek(ham, "DEVLET_PARCALAR")
    harita = _cek(ham, "DEVLET_HARITA")
    print("çizili harita: %d kimlik · %d geometri parçası · %.1f MB"
          % (len(harita), len(parca), os.path.getsize(YOL) / 1e6))

    # ── ① harita bayat mı: çizilen renk = beyan edilen renk mi
    sapma = [(d["id"], d["renk"], BOYALAR.get(d["id"], (None, None))[1])
             for d in harita
             if BOYALAR.get(d["id"], (None, None))[1] is None
             or BOYALAR[d["id"]][1].lower() != d["renk"].lower()]
    print("\n" + "=" * 74)
    print("① HARİTA GÜNCEL Mİ — çizilen renk = renkler.py'deki renk mi")
    print("=" * 74)
    if sapma:
        print("  🔴 %d kimlik ESKİ renkle çizili — harita renkler.py'den GERİDE."
              % len(sapma))
        for a, ciz, bek in sapma[:12]:
            print("     %-20s çizilen %s · beyan %s" % (a, ciz, bek or "YOK"))
        if len(sapma) > 12:
            print("     ... ve %d kimlik daha" % (len(sapma) - 12))
        print("  ⇒ Yeni bir üretim koşusu gerekiyor.")
    else:
        print("  ✓ çizilen renkler renkler.py ile birebir")
    cizilmeyen = sorted(set(BOYALAR) - {d["id"] for d in harita})
    print("\n  BOYALAR'da olup ÇİZİLMEYEN: %d (gövdesiz kimlikler)"
          % len(cizilmeyen))

    # ── ② çizilen gövdelerin gerçek komşuluğu
    ciz = {d["id"]: d["renk"] for d in harita}

    def renk_lab(kim):
        if guncel_palet and kim in BOYALAR:
            return lab(bind(h2r(BOYALAR[kim][1])))
        return lab(bind(h2r(ciz[kim])))

    print("\n" + "=" * 74)
    print("② ÇİZİLEN GÖVDELER — hangileri DEĞİYOR, ΔE < %.0f var mı"
          % DE_KOMSU)
    print("   (ΔE kaynağı: %s)"
          % ("renkler.py GÜNCEL palet — kestirim"
             if guncel_palet else "haritanın KENDİ yazdığı renk"))
    print("=" * 74)
    degen, cakisan = set(), collections.defaultdict(set)
    for gun in KESIT:
        aktif = []
        for d in harita:
            for dn in d["dnm"]:
                if dn["f"] <= gun < dn["t"]:
                    g = _govde(parca, dn["g"])
                    if g is not None and not g.is_empty:
                        aktif.append((d["id"], g))
                    break
        if not aktif:
            continue
        agac = STRtree([x[1] for x in aktif])
        n_cak = 0
        for i, (ai, ag) in enumerate(aktif):
            for jj in agac.query(ag):
                j = int(jj)
                if j <= i or aktif[j][0] == ai:
                    continue
                bi, bg = aktif[j]
                ort = ag.intersection(bg)
                if ort.is_empty or (ort.length < 1e-6 and ort.area < 1e-12):
                    continue
                degen.add(tuple(sorted((ai, bi))))
                d_e = dE(renk_lab(ai), renk_lab(bi))
                if d_e < DE_KOMSU:
                    cakisan[tuple(sorted((ai, bi)))].add(gun)
                    n_cak += 1
        print("  %s: %3d gövde çizili · ΔE<%.0f değen çift %d"
              % (gun, len(aktif), DE_KOMSU, n_cak))

    print("\n  toplam DEĞEN kimlik çifti: %d" % len(degen))
    print("\n" + "=" * 74)
    if not cakisan:
        print("  ✓ ÇİZİLİ HARİTADA ΔE<%.0f DEĞEN ÇİFT YOK" % DE_KOMSU)
        print("    Ölçülen 0, çizilen 0'dır.")
    else:
        print("  🔴 %d ÇİFT ÇİZİLİ HARİTADA DEĞİYOR VE AYIRT EDİLEMİYOR:"
              % len(cakisan))
        for (a, b), gunler in sorted(cakisan.items()):
            print("     %-20s ↔ %-20s  kesitler: %s"
                  % (a, b, ", ".join(sorted(gunler))))
    print("=" * 74)
    return len(sapma), len(cakisan)


if __name__ == "__main__":
    _guncel = "--guncel" in sys.argv
    _bayat, _cak = denetle(_guncel)
    sys.exit(1 if _cak else 0)
