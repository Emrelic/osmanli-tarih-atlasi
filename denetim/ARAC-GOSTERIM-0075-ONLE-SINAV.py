# -*- coding: utf-8 -*-
"""GOSTERIM-0075 / H-0024 — ÖNLEYİCİ İŞLEV ve İKİ YÖNLÜ SINAVI.

İşlev `baskasinin_petegini_cikar` `arac/uret_petek.py`nin gövde işlevlerine (aşağıda YAMA NOTU) girecek.
`arac/` DONMUŞ olduğu için burada, motordan BAĞIMSIZ (yalnız shapely) yazıldı ve sentetik düzende sınandı.
⚠️ MOTORA BAĞLANMADI · TAM KOŞUDA SINANMADI — kabul ölçütü: `ARAC-HARITA-DURUM-0074-CAKISMA.py --kesit`
   koşudan önce/sonra (1850-01-01 taban: 2.430.774 km² / 379 çift) — bkz. denetim/GOSTERIM-0075.md §5.

Kural (Emre'nin ③ kuralı, uret_petek.py:3043 docstring'i): *"arada BAŞKA DEVLETİN BÖLGESİ varsa … aradaki
renklendirilmiş bölge EZİLEREK iki bölge birleştirilemez."* Motor bu kuralı bugün NOKTAYLA (B1/B2/B3 `_yasakli_mi`)
ve köprü EKSENİYLE (`_bant_baskasinin_topragini_kesiyor_mu`, 10 km adım) uyguluyor; ALAN kuralı yok. Bir kapama /
köprü / koridor başka devletin yerleşim NOKTASINI içermeden onun PETEĞİNİN üstünden geçebilir.
Bu işlev kuralı ALAN olarak uygular: gövdeden, o gün BAŞKA bir sahibin (Osmanlı dâhil) peteklerini çıkarır.
Sahipsiz / dolgu / devredilmiş peteklere DOKUNMAZ (B1-B3'ün Emre onaylı işi: boşluğu komşuya katmak).
"""
import sys
from shapely.geometry import box, Polygon
from shapely.ops import unary_union
from shapely.strtree import STRtree

def baskasinin_petegini_cikar(g, benim_ix, sahipli_ix, petekler, agac=None):
    """g          : gövde (Polygon/MultiPolygon)
    benim_ix   : bu gövdenin sahibinin petek indeksleri (`aktif`, dolgu payı dâhil)
    sahipli_ix : o gün BİR sahibi olan bütün petek indeksleri (Osmanlı dâhil; sahipsiz/dolgu/devredilmiş HARİÇ)
    petekler   : o günün petek geometrileri (`petek_epok(a)`) — indeks = petek indeksi
    agac       : petekler üzerinde STRtree (çağıran gün başına bir kez kurar)
    Döner: g − ⋃{petekler[j] : j ∈ sahipli_ix ∖ benim_ix}"""
    if g is None or g.is_empty:
        return g
    if agac is None:
        agac = STRtree([p if p is not None else Polygon() for p in petekler])
    diger = [int(j) for j in agac.query(g) if int(j) in sahipli_ix and int(j) not in benim_ix
             and petekler[int(j)] is not None and not petekler[int(j)].is_empty]
    if not diger:
        return g
    return g.difference(unary_union([petekler[j] for j in diger]))

# ------------------------------------------------------------------ sentetik düzen
# 2×2 ızgara, her hücre bir petek:      A=0 | B=1
#                                       U=2 | A2=3     (U sahipsiz/dolgu; A2 de A'nın)
H = [box(0, 1, 1, 2), box(1, 1, 2, 2), box(0, 0, 1, 1), box(1, 0, 2, 1)]
sahibi = {0: "A", 1: "B", 2: None, 3: "A"}
sahipli = {j for j, s in sahibi.items() if s}
A = {0, 3}
agac = STRtree(H)

def alan(g): return round(g.area, 6)
hatalar = []
def sina(ad, kosul):
    print(("  ✓ " if kosul else "  ✗ ") + ad)
    if not kosul: hatalar.append(ad)

# T1 — A'nın gövdesi kendi peteklerine + B'nin peteğinin yarısına + sahipsiz U'ya taşmış (kapama/köprü artığı)
govde_A = unary_union([H[0], H[3], box(1, 1, 1.5, 2), H[2]])    # 0, 3, B'nin sol yarısı, U
sonuc = baskasinin_petegini_cikar(govde_A, A, sahipli, H, agac)
print("T1 — taşan gövde:")
sina("B'nin peteğine taşan yarım hücre KESİLDİ (A∩B = 0)", alan(sonuc.intersection(H[1])) == 0)
sina("A'nın kendi peteği AYNEN duruyor (0 ve 3)", alan(sonuc.intersection(H[0])) == 1 and alan(sonuc.intersection(H[3])) == 1)
sina("SAHİPSİZ U'ya katılan alan DURUYOR (Emre: boşluğu komşuya kat)", alan(sonuc.intersection(H[2])) == 1)
# T2 — temiz gövde DEĞİŞMEZ (yanlış pozitif yok)
temiz_g = unary_union([H[0], H[3], H[2]])
sonuc2 = baskasinin_petegini_cikar(temiz_g, A, sahipli, H, agac)
print("T2 — taşmayan gövde:")
sina("gövde DEĞİŞMEDİ (fark alanı 0)", alan(temiz_g.symmetric_difference(sonuc2)) == 0)
# T3 — SIRA ÖNEMLİ DEĞİL, iki taraf da uygulanınca çakışma SIFIR (karşılıklı taşma)
govde_B = unary_union([H[1], box(0.5, 1, 1, 2)])                # B, A'nın peteğinin sağ yarısına taşmış
a2 = baskasinin_petegini_cikar(govde_A, A, sahipli, H, agac)
b2 = baskasinin_petegini_cikar(govde_B, {1}, sahipli, H, agac)
print("T3 — karşılıklı taşma:")
sina("uygulamadan ÖNCE çakışma > 0", alan(govde_A.intersection(govde_B)) > 0)
sina("uygulamadan SONRA çakışma = 0", alan(a2.intersection(b2)) == 0)
# T4 — köprü iki parçayı bağlıyor ama başka sahibin peteğinden GEÇİYOR: köprü kesilir, parçalar ayrılır (Emre ③: ezerek birleştirme YASAK)
sol, sag = box(-1, 1.2, 0, 1.8), box(2, 1.2, 3, 1.8)
kopru = box(0, 1.2, 2, 1.8)                                       # 0 ve 1 hücrelerinin ortasından
H2 = H + [box(-1, 1, 0, 2), box(2, 1, 3, 2)]
sahibi2 = dict(sahibi); sahibi2[4] = "A"; sahibi2[5] = "A"
g_kopru = unary_union([sol, kopru, sag])
r = baskasinin_petegini_cikar(g_kopru, {0, 3, 4, 5}, {j for j, s in sahibi2.items() if s}, H2)
print("T4 — köprü:")
sina("B'nin peteğinden geçen köprü kesildi", alan(r.intersection(H2[1])) == 0)
sina("iki uç parça kaldı (birleştirme yok)", len(getattr(r, "geoms", [r])) >= 2)
print("\nSONUÇ:", "TÜM SINAVLAR GEÇTİ" if not hatalar else "BAŞARISIZ: %s" % hatalar)
sys.exit(1 if hatalar else 0)
