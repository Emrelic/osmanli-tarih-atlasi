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


def _govde(parca, gi, halka_idx=None):
    """`dnm[].g` TEK İNDİS DEĞİL, İNDİS LİSTESİDİR — gövde çok parçalı.

    🔴 BİÇİM DEĞİŞTİ VE BU DENETİM SESSİZCE ÖLDÜ (7 Ağustos 2026, RENK 2).
      Eski varsayım: `parca[i]` = bir poligonun HALKA LİSTESİ, ilk halka dış.
      Bugünkü gerçek:
        DEVLET_PARCALAR[i]    = TEK halka, [[lat, lon], ...]
        DEVLET_PARCA_HALKA[j] = HALKA İNDİS listesi [dış, delik, delik…]
        dnm[].g               = DEVLET_PARCA_HALKA'yı indeksliyor (maks 16502
                                < 16503; DEVLET_PARCALAR 17407)
      Eski kod `halka = parca[i]` alıp `len(halka[0]) < 4` diye eliyordu;
      yeni biçimde `halka[0]` tek bir [lat, lon] çifti, yani uzunluğu 2 ⇒
      HER parça elendi ⇒ `aktif` her kesitte BOŞ kaldı ⇒ döngü `continue`
      etti ⇒ ekrana "toplam DEĞEN kimlik çifti: 0" ve
      "✓ ÇİZİLİ HARİTADA ΔE<12 DEĞEN ÇİFT YOK / Ölçülen 0, çizilen 0'dır."

      📌 Yani denetim "baktım, bulamadım" demiyordu; **hiç bakmıyordu** —
      ve tam da bunu reddeden bir cümleyi basıyordu. `renk_olc`in "sessiz
      sıfır yasak" kuralının çıktı eksenindeki ihlali.
      ⚠️ Tek işareti KESİT SATIRLARININ HİÇ BASILMAMASIYDI (her kesit için
      "  1500-06-15: NNN gövde çizili …" basılmalıydı). Sessizliği fark
      etmek için ÇIKTININ OLMAYAN KISMINA bakmak gerekiyordu.
    """
    idx = gi if isinstance(gi, (list, tuple)) else [gi]
    pol = []
    for j in idx:
        # halka_idx yoksa eski biçim (geriye dönük): parca[i] halka listesi
        halkalar = ([parca[int(h)] for h in halka_idx[int(j)]]
                    if halka_idx is not None else parca[int(j)])
        if not halkalar or len(halkalar[0]) < 4:
            continue
        try:
            p = Polygon(halkalar[0], [h for h in halkalar[1:] if len(h) >= 4])
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
    # 🔴 HALKA DİZİSİ ZORUNLU — yoksa `_govde` hiçbir gövde üretemez ve
    #   denetim SESSİZCE "0 değen çift" der (bkz. `_govde` kütüğü).
    #   Bulunamazsa SystemExit: ölçemeyen denetim temiz denetim değildir.
    try:
        halka_idx = _cek(ham, "DEVLET_PARCA_HALKA")
    except ValueError:
        halka_idx = None
        print("  i DEVLET_PARCA_HALKA yok — ESKİ biçim varsayılıyor")
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
    # 🔴 TANIK KOLONU — ΔE tek başına öncelik ölçütü DEĞİL (PETEK/NOKTA'nın
    #   "derinleşen çatışma" bulgusu, 2026-08-03). Aynı ΔE tek noktada
    #   görünüyorsa zararsız, sınır boyunca görünüyorsa ciddi. Ölçülmüş vaka:
    #     safevi↔iran  ΔE 12,7 · 101 tanık · 90,68° sınır  ← EN BÜYÜK maruziyet
    #     afsar↔iran   ΔE 12,0 ·  12 tanık · 26,46°
    #   ΔE'ye göre sıralansa `afsar↔iran` önce gelirdi; gerçek risk ötekiydi.
    #   ⇒ Liste ΔE ile DEĞİL, ΔE × tanık ile sıralanır.
    tanik = collections.defaultdict(lambda: [0, 0.0])
    degen, cakisan = set(), collections.defaultdict(set)
    for gun in KESIT:
        aktif = []
        for d in harita:
            for dn in d["dnm"]:
                if dn["f"] <= gun < dn["t"]:
                    g = _govde(parca, dn["g"], halka_idx)
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
                cift = tuple(sorted((ai, bi)))
                degen.add(cift)
                tanik[cift][0] += 1
                tanik[cift][1] += ort.length
                d_e = dE(renk_lab(ai), renk_lab(bi))
                if d_e < DE_KOMSU:
                    cakisan[cift].add(gun)
                    n_cak += 1
        print("  %s: %3d gövde çizili · ΔE<%.0f değen çift %d"
              % (gun, len(aktif), DE_KOMSU, n_cak))

    print("\n  toplam DEĞEN kimlik çifti: %d" % len(degen))

    # ── ③ SINIRDA OLANLAR — eşiği geçiyor ama maruziyeti büyük
    # Eşiği geçmek "güvenli" demek değil: ΔE 12,7 bir noktada görünüyorsa
    # sorun yok, uzun bir sınır boyunca görünüyorsa gözle ayırt edilemez.
    #
    # 🔴 MARUZİYET ÖLÇÜSÜ ÇIKTI EKSENİNDE **SINIR UZUNLUĞU**, TANIK SAYISI DEĞİL.
    #   Ölçüldü ve iki eksen AYNI ŞEYİ ÖLÇMÜYOR:
    #     girdi  (Voronoi hücreleri) safevi↔iran = 101 tanık · 90,68°
    #     çıktı  (birleşik gövdeler) safevi↔iran =   1 tanık ·  8,66°
    #   Sebep: girdide her HÜCRE ÇİFTİ ayrı sayılıyor; çıktıda o hücrelerin
    #   hepsi TEK gövdeye birleşiyor ve tek (uzun) sınır olarak değiyorlar.
    #   ⇒ Çıktıda tanık sayısı yapısal olarak küçük (çoğu çiftte 1-3); onunla
    #     süzmek bütün uyarıları söndürürdü. Uzunluk taşınabilir ölçüdür.
    #   📌 Bir metrik, eksen değişince anlamını koruduğu VARSAYILAMAZ.
    sinirda = []
    for cift in degen:
        a, b = cift
        if cift in cakisan:
            continue
        d_e = dE(renk_lab(a), renk_lab(b))
        t, uz = tanik[cift]
        if d_e < DE_KOMSU + 4 and uz >= 5.0:
            sinirda.append((d_e / max(1.0, uz ** 0.5), d_e, a, b, t, uz))
    if sinirda:
        print("\n" + "=" * 74)
        # ⚠️ BAŞLIK SÜZGEÇLE AYNI ŞEYİ SÖYLEMELİ. İlk yazımda "≥10 tanık"
        #   yazıyordu ama süzgeç sınır uzunluğuna çevrilmişti — etiket kodla
        #   çelişiyordu. Bugün gün boyu avladığımız sınıfın kendisi.
        print("  ⚠️ SINIRDA — eşiği geçiyor ama SINIR UZUNLUĞU büyük")
        print("     (ΔE < %.0f ve paylaşılan sınır ≥ 5°; ihlal DEĞİL, "
              "öncelik uyarısı)" % (DE_KOMSU + 4))
        print("=" * 74)
        print("     %-19s %-19s %6s %7s %9s"
              % ("a", "b", "ΔE", "tanık", "sınır°"))
        for _, d_e, a, b, t, uz in sorted(sinirda)[:10]:
            print("     %-19s %-19s %6.1f %7d %9.2f" % (a, b, d_e, t, uz))

    print("\n" + "=" * 74)
    if not cakisan:
        print("  ✓ ÇİZİLİ HARİTADA ΔE<%.0f DEĞEN ÇİFT YOK" % DE_KOMSU)
        print("    Ölçülen 0, çizilen 0'dır.")
    else:
        print("  🔴 %d ÇİFT ÇİZİLİ HARİTADA DEĞİYOR VE AYIRT EDİLEMİYOR:"
              % len(cakisan))
        # 🔴 ΔE ile DEĞİL, ΔE × tanık ile sıralanır — bkz. yukarıdaki kütük.
        # ΔE ile DEĞİL, ΔE ÷ √sınır ile sıralanır — uzun sınır boyunca görünen
        # marjinal bir çift, tek noktada görünen daha kötü ΔE'den önce gelir.
        sirali = sorted(cakisan.items(),
                        key=lambda x: dE(renk_lab(x[0][0]), renk_lab(x[0][1]))
                        / max(1.0, tanik[x[0]][1] ** 0.5))
        print("     %-19s %-19s %6s %7s %9s"
              % ("a", "b", "ΔE", "tanık", "sınır°"))
        for (a, b), gunler in sirali:
            t, uz = tanik[(a, b)]
            print("     %-19s %-19s %6.1f %7d %9.2f   %s"
                  % (a, b, dE(renk_lab(a), renk_lab(b)), t, uz,
                     ", ".join(sorted(gunler))))
    print("=" * 74)
    return len(sapma), len(cakisan)


if __name__ == "__main__":
    _guncel = "--guncel" in sys.argv
    _bayat, _cak = denetle(_guncel)
    sys.exit(1 if _cak else 0)
