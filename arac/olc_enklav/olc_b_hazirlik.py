# -*- coding: utf-8 -*-
"""⑥ (b) HAZIRLIK OLCUMU — PLAN icin, PROTOTIP DEGIL.

⚠️ (b) "cok yonlu takviye / col tavani yuvarlaginin yumusatilmasi" Emre'nin
esik kararina baglidir. Bu betik HICBIR SEY UYGULAMAZ; yalnizca planin
dayanacagi sayilari uretir.

UC SORUYA CEVAP VERIR:
 ① Sahra kutusunda kac nokta var, kaci TAVANA BAGLI (yuvarlak kenarli)
 ② Iki haritayi yan yana koymak icin TAM KOSU sart mi
 ③ Yerel yeniden-Voronoi'nin kaba maliyeti

🟢 EN DEGERLI BULGU (11 Agu 2026):
   DARALTMA   kosusuz ve EXACT.  Sebep YAPISAL: tavan yalniz KESER
              (uret_petek.py, A1 blogu: "tavan yalniz CIKARIR, hic EKLEMEZ"
              ⇒ petek_son ⊆ petek_voronoi). Daha kucuk tavan = yayindaki
              hucre ∩ daha kucuk elips. BILGI KAYBI YOK.
   GENISLETME ayni yolla YAPILAMAZ (kesilen geometri yayinda yok) — ama tam
              kosu da gerekmez: yerel yeniden-Voronoi saniyeler suruyor.
   ⇒ 73 dakikalik kosu yalniz KABUL EDILEN parametre icin gerekir,
     DENEMEK icin degil.

⚠️ TAVAN_KM burada KOPYALANMIS bir sabittir. `uret_petek.py:595` degisirse
   bu satir bayatlar ve SESSIZ yanilir. Kosarken karsilastir.

Kosum:  py arac/olc_enklav/olc_b_hazirlik.py
"""
import time
import math
import re
import _ortak as O
import girdi
from shapely.geometry import Point, box, MultiPoint
from shapely.ops import unary_union, voronoi_diagram
from shapely.affinity import scale as _scale

TAVAN_KM = {1: 700, 2: 420, 3: 280, 4: 140, 0: 280}     # uret_petek.py:595

# 🔴 KOPYA SABIT NOBETCISI — "bir bilgi iki yerde duruyorsa biri bayatlar"
_src = open(O.KOK + "/arac/uret_petek.py", encoding="utf-8").read()
_m = re.search(r"^TAVAN_KM\s*=\s*(\{[^}]*\})", _src, re.M)
if _m:
    _canli = eval(_m.group(1))
    if _canli != TAVAN_KM:
        print(f"🔴 TAVAN_KM AYRISMASI — bu betik BAYAT")
        print(f"   burada: {TAVAN_KM}")
        print(f"   motorda: {_canli}")
        print(f"   ⇒ motordaki degeri kullaniyorum, ama betigi GUNCELLE.")
        TAVAN_KM = _canli
    else:
        print(f"✓ TAVAN_KM motordakiyle ayni: {TAVAN_KM}")


def tavan_daire(p, r_km, lat):
    """uret_petek.py:599 `_tavan_daire`in aynisi — enlem duzeltmeli ELIPS.
    🔴 EMRE'NIN GORDUGU YUVARLAGI URETEN SATIR BUDUR."""
    dy = r_km / 111.32
    dx = r_km / (111.32 * max(0.15, math.cos(math.radians(lat))))
    return _scale(p.buffer(1.0, quad_segs=24), xfact=dx, yfact=dy, origin=p)


t0 = time.time()
Y = girdi.yukle(sessiz=True)
GOV, HUCRE = O.oku_petek_govde()
print()
print("HIZALAMA SINAVI:")
# ═══ 🔴 BURASI BIR KEZ YANLIS YAZILDI VE OLCULEREK DUZELTILDI ═══════════
# Ilk yazimda `zorunlu=False` kondu, gerekcesi soyleydi: "② nokta basina
# HUKUM veriyor, kaymis indeks orada YANLIS AD raporlar ⇒ dursun. ⑥ ise
# TOPLAM plan sayisi uretiyor, birkac noktalik kayma onu anlamsiz kilmaz
# ⇒ uyarsin, durmasin." Kulaga makul geliyordu. OLCULDU VE CURUDU:
#     hizali taban (2308)    193 nokta · 6.489.793 km² · TAVANA BAGLI 75
#     kaymis taban (2312)    193 nokta · 5.610.810 km² · TAVANA BAGLI 60
#     ⇒ %13,5 alan · %20 sayi sapmasi — DORT NOKTALIK bir kaymadan
# Sebep: indeks kaymasi bir sayiyi BIRAZ oynatmaz; hucreleri BASKA
# yerlesimlerle esler. Sonuc "yaklasik" degil YANLIS.
# ⇒ HUKUM: indeks eslemesi ya gecerlidir ya degildir; ARASI YOKTUR.
#   `zorunlu=True` geri kondu. "Plan sayisi" olmasi onu bagisik kilmiyor —
#   yanlis bir plan sayisi da bir sonraki oturumun tabani olur.
O.hizalama_sinavi(Y, GOV, zorunlu=True)

SAHRA = box(-17.0, 15.0, 37.0, 33.0)      # Atlantik -> Kizildeniz, Sahel -> Atlas
ic = [i for i, y in enumerate(Y) if SAHRA.contains(Point(y["lon"], y["lat"]))]
bugun = sum(O.km2(HUCRE[i]) for i in ic)
print()
print("=" * 78)
print(f"① SAHRA KUTUSU  box(-17, 15, 37, 33)")
print("=" * 78)
print(f"   nokta: {len(ic)}  ·  toplam petek alani: {bugun:,.0f} km²")
kd = {}
for i in ic:
    k = Y[i].get("k") or 0
    kd[k] = kd.get(k, 0) + 1
print("   kademe: " + " · ".join(f"k{k}={v}" for k, v in sorted(kd.items())))

bagli = []
for i in ic:
    if HUCRE[i].is_empty:
        continue
    r = TAVAN_KM.get(Y[i].get("k") or 0, TAVAN_KM[0])
    d = tavan_daire(Point(Y[i]["lon"], Y[i]["lat"]), r, Y[i]["lat"])
    # hucrenin siniri tavan elipsinin sinirina yapisiksa tavan onu KESMIS demektir
    if HUCRE[i].boundary.distance(d.boundary) < 1e-6:
        bagli.append(i)
print(f"   🔴 TAVANIN BAGLADIGI (yuvarlak kenarli): {len(bagli)} / {len(ic)}")
print(f"      ⇒ Emre'nin sikayet ettigi yuvarlaklar BU peteklerin kenarlari.")
for i in sorted(bagli, key=lambda j: -O.km2(HUCRE[j]))[:8]:
    print(f"      {Y[i]['ad']:<28} {O.km2(HUCRE[i]):>10,.0f} km²  "
          f"k={Y[i].get('k') or 0}")

print()
print("=" * 78)
print("② DARALTMA BEDAVA MI?")
print("=" * 78)
for carpan in (0.9, 0.75, 0.5):
    t = time.time()
    kucuk = 0.0
    for i in ic:
        if HUCRE[i].is_empty:
            continue
        r = TAVAN_KM.get(Y[i].get("k") or 0, TAVAN_KM[0]) * carpan
        d = tavan_daire(Point(Y[i]["lon"], Y[i]["lat"]), r, Y[i]["lat"])
        kucuk += O.km2(HUCRE[i].intersection(d))
    print(f"   tavan ×{carpan:<5} -> {kucuk:>12,.0f} km²  "
          f"({100*(kucuk-bugun)/bugun:+6.1f}%)   {time.time()-t:.1f} sn")
print("   ⇒ DARALTMA KOSUSUZ ve EXACT. Tavan yalniz KESER, bilgi kaybi yok.")
print("   ⚠️ GENISLETME AYNI YOLLA YAPILAMAZ: kesilen geometri yayinda YOK.")

print()
print("=" * 78)
print("③ YEREL YENIDEN-VORONOI maliyeti (Sahra + 10° tampon)")
print("=" * 78)
t = time.time()
gen = box(-27.0, 5.0, 47.0, 43.0)
ic2 = [i for i, y in enumerate(Y) if gen.contains(Point(y["lon"], y["lat"]))]
vd = voronoi_diagram(MultiPoint([Point(Y[i]["lon"], Y[i]["lat"]) for i in ic2]),
                     envelope=gen)
print(f"   tampon icinde {len(ic2)} nokta · Voronoi {len(vd.geoms)} hucre · "
      f"{time.time()-t:.1f} sn")
print("   ⇒ Yerel Voronoi SANIYELER. Gorsel kiyas icin ham Voronoi ∩ KARA")
print("     yeter; eksik olan yalniz yaslama/Chaikin (gorsel kiyasi degistirmez).")

print()
print("=" * 78)
print("④ (b) HANGI KODDA YASAR — degisecek sey bir SAYI degil bir FONKSIYON")
print("=" * 78)
print("""   :561-630   A1 YARICAP TAVANI            butun cografya
   :595       TAVAN_KM = {1:700, 2:420, 3:280, 4:140, 0:280}  dict[int,int] km
   :599       def _tavan_daire(p, r_km, lat)   🔴 YUVARLAGI URETEN SATIR
              izotrop ELIPS: buffer(1.0, quad_segs=24) sonra
              xfact = r/(111,32·cos φ)  ·  yfact = r/111,32
   :605       TAVAN_DAIRE = [...]  nokta basina bir elips, BIR KEZ kurulur
   uygulama   kiyi kesimiyle AYNI ADIMDA: kara_kesik.intersection(TAVAN_DAIRE[i])

   :1528-…    COL TAVANI                   yalniz col poligonu icinde
   :1549      COL_TAVAN_KM = 300.0         float, km
   :1550      COL_SU_MUAF_KM = 30.0        float, km
   :1573      COL_MUAF_YERLESIM_BAZLI = False   bool — olculerek (A) secildi

   ⇒ "Cok yonlu takviye" teknik olarak: izotrop elips -> YONE GORE DEGISEN
     cokgen. Yani `TAVAN_KM` skalerden VEKTORE doner ve degisen sey
     `_tavan_daire` FONKSIYONUDUR.
   ⚠️ Bu bir YORUM, olcum degil. Emre'nin "kuzeyden 250 guneyden 250 dogudan
     350 batidan 400" cumlesi bir ENKLAVIN DERINLIGINI de tarif ediyor
     olabilir. Iki okuma da mumkun, KARAR ONUN.""")

print()
print("=" * 78)
print("⑤ (b) HANGI DENETIMLERI KIPIRDATIR")
print("=" * 78)
print("""   Degismez 1 (sahipsiz 180)   kipirdamaz — tavan NOKTAYA degil ALANA dokunur
   Degismez 2 · 2s · 2i · 2t   kipirdamaz — kirilma tarihleri degismiyor
   boyanan toplam alan         🔴 BUYUK degisir
   renk_olc.py                 🔴 SART (CLAUDE.md §9: komsuluk VERIDEN gelir)
   serbest kenar               🔴 cok degisir — tavan sahipli↔sahipsiz sinirini
                                  URETEN seyin ta kendisi
   delikleri_doldur muafiyeti  ⚠️ ATESLEYEBILIR — tavan genislerse bir col cebi
                                  kusatilabilir; nobetci tam bunun icin kondu
   A1 tavani ↔ yetim yuz       🔴 OLCULSUN — MIMARI §2.9 VAKA 1: tavan
                                  3.397.649 km² serbest birakti, yetim yuz
                                  GERI VERDI. (b) ayni tuzaga girer.""")
print()
print(f"({time.time()-t0:.0f} sn)")
