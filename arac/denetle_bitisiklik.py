# -*- coding: utf-8 -*-
"""
ONUNCU DENETİM — bitişiklik
============================
Kullanıcının genel kuralı (hatalar 12, md.11):

    "Karadan toprak genişlemelerinde ana kara ile genişleyen yerin bağlantısının
     olması beklenir. Eğer böyle bir durum yok ise bunun geçerli sebebinin
     araştırılması lazım. Denizden geçiş mi yapılmış acaba diye. Neticede uçakla
     gidilip arada geçiş yok iken ele geçirilemez."

Soru: *bir gün gövdeye katılan parça, o gün gövdenin geri kalanıyla KARADAN
bitişik mi? Değilse arada deniz var mı?*

⚠️ BU DENETİM ÜRETİLMİŞ GEOMETRİYİ OKUR (`data/donemler.js`), yerleşim
kayıtlarını değil. Sebebi bilerek böyle: kullanıcı **ekranda gördüğü** kopukluğu
şikâyet ediyor, ve kopukluk yerleşim verisinde değil, peteğin kıyı maskesine
kesilmesinde doğuyor. Veriden bakan bir denetim Gümülcine'yi temiz raporlardı.
→ Sonuç, son üretimin tarihine aittir. Üretim koşmadan bu araç eski haritayı
  denetler; `data/donemler.js`'in tarihine bak.

ÇALIŞTIRMA (~2,5 dk — 24 MB geometri + kara maskesi okunur)
    py arac/denetle_bitisiklik.py
    py arac/denetle_bitisiklik.py --ayrinti    # bütün satırlar
    py arac/denetle_bitisiklik.py --dagilim    # eşik seçmek için ham dağılım
"""
import io
import json
import os
import sys
import time

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

import girdi

if getattr(sys.stdout, "encoding", "").lower() not in ("utf-8", "utf8"):
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

from shapely.geometry import LineString, Polygon, shape
from shapely.ops import nearest_points, unary_union

KOK = girdi.KOK
DATA = os.path.join(KOK, "data")
KAYNAK = os.path.join(KOK, "veri-kaynak")

# ============================================================== EŞİKLER
# ⚠️ HEPSİ ÖLÇÜLDÜ (30 Temmuz 2026, r92 geometrisi · 442 dönem · 917 petek).
# Ham ölçüm: 1486 yeni bileşen · 1216'sı gövdeye DEĞİYOR · 270'i KOPUK.
#
# 270 kopuğun tamamını ihlal saymak yanlış olurdu ve sebebi ölçümde:
#
#   aradaki en kısa hattın KARA oranı      adet
#     DENİZ (<%10)                          147   ← ada / deniz aşırı, MEŞRU
#     çoğu deniz (%10-50)                    50   ← boğaz, kıyı şeridi
#     çoğu kara (%50-90)                     32
#     KARA (>=%90)                           43
#
# "Uçakla gidilemez" kuralı yalnız KARA hattı olanlar için ihlaldir. Deniz
# hattı olan 147 bileşen Rodos, Girit, Kıbrıs, Cezayir, Kırım — hepsi gerçek
# ve donanmayla alınmış. Kara/deniz ayrımı bu yüzden BİRİNCİ ölçüt.
KARA_ORANI = 0.85          # bu oranın üstü "karadan gidilebilirdi" sayılır

# İkinci ölçüt MESAFE. Kara boşluğu olan 75 bileşenin dağılımı:
#     <5 km 1 · 5-20 km 5 · 20-50 km 9 · 50-100 km 14 · 100-300 km 38 · >=300 km 8
# 100 km'nin ÜSTÜ tarihsel olarak GERÇEK sıçramadır: Tebriz 1514 (585 km),
# Bağdat 1638 (129 km), Hotin, Basra, Şamahı — ordu Safevî toprağını aşıp
# gitmiştir, arada başka devlet vardır. Bunlar enklav/sefer sonucudur, geometri
# hatası DEĞİLDİR; bilinen borç kademesinde sayılır.
# 100 km'nin ALTINDA araya bir devlet sığmaz — orada kopukluk geometri
# kusurudur ya da eksik yerleşim noktasıdır. İhlal kademesi budur.
YAKIN_KM = 100

# Üçüncü ölçüt ALAN. Kopuk bileşenlerin 71'i 10 km²'den, 118'i 100 km²'den
# küçük: bunlar yarımada burunları ve kıyı kırıntılarıdır (Modon, Preveze,
# Aynaroz), "toprak genişlemesi" değil. Ölçülen kesme noktası 500 km²:
# altında kalan 25 aday da tek tek bakıldığında kıyı kırıntısı çıktı.
ALAN_KM2 = 500

# Sıfır uzunluklu temas = iki gövde TEK NOKTADA değiyor. Kullanıcının
# "köşesinden birleşmiş" dediği hâl (hatalar 12 md.1, md.6). Ölçüm: 45 bileşen
# tek noktada değiyor, 39'u 1 km²'den küçük kırıntı, 2'si 1000 km²'den büyük.
# Aynı alan eşiği burada da kullanılıyor.
TEMAS_SIFIR = 1e-9

# ⚠️ TAVAN — Değişmez 3'ün deseni. Ölçülen bugünkü değerler; aşılırsa YENİ
# kopukluk eklenmiş demektir. Düşürülmesi düzeltme yapıldıkça ELLE yapılır.
BEKLENEN_KARA_KOPUK = 4         # ihlal kademesi (yakın + kara + büyük)
BEKLENEN_KOSE = 2               # ALAN_KM2 üstü tek nokta teması
BEKLENEN_UZAK_SICRAMA = 33      # >=100 km kara boşluğu — bilinen borç
# ⚠️ 24 İLK YAZIMDA UYDURULMUŞTU ve yanlıştı — bu dosyanın kendi kuralını ihlal
# ediyordu. Sebebi: D bölümü iki kez 9 dakikada bitmeyince tavan ölçülmeden
# kondu. Ölçüldüğünde 128 çıktı, ama o da yanlıştı: imza alana bakıyordu ve
# imparatorluk her dönem büyüdüğü için aynı kusur defalarca sayılıyordu.
# İmza boşluğun KONUMUNA çevrilince gerçek sayı çıktı: 21 ayrı fiziksel kusur.
BEKLENEN_GOVDE_KOPUK = 21       # gövde içi kara kopukluğu (konuma göre tekil)


def _dizi(metin, ad):
    i = metin.index("window." + ad + " = ") + len("window." + ad + " = ")
    return json.loads(metin[i:metin.index("];", i) + 1])


def yukle():
    yol = os.path.join(DATA, "donemler.js")
    if not os.path.exists(yol):
        print("✗ data/donemler.js yok — önce üretim koşmalı (py arac/uret_petek.py)")
        sys.exit(2)
    metin = open(yol, encoding="utf-8").read()
    P = _dizi(metin, "PETEKLER")
    PARCA = _dizi(metin, "PARCALAR")
    D = _dizi(metin, "DONEMLER")
    del metin
    ne = json.load(open(os.path.join(KAYNAK, "ne_10m_land.geojson"), encoding="utf-8"))
    kara = unary_union([shape(f["geometry"]) for f in ne["features"]])
    return P, PARCA, D, kara, time.ctime(os.path.getmtime(yol))


def govde(d, PARCA):
    ps = []
    for i in d.get("o", []):
        h = PARCA[i]
        try:
            p = Polygon(h[0], h[1:])
            if not p.is_valid:
                p = p.buffer(0)
            if not p.is_empty:
                ps.append(p)
        except Exception:
            pass
    return unary_union(ps) if ps else None


def _bilesenler(g):
    return list(g.geoms) if hasattr(g, "geoms") else ([g] if g else [])


def _km2(alan_derece):
    """Kaba ama tutarlı: 1° ≈ 111 km, orta enlemde boylam daralması ≈ 0,75."""
    return alan_derece * 111 * 111 * 0.75


def govde_ici_kopukluk(D, PARCA, kara):
    """Gövdenin KENDİ büyük parçaları arasında kısa KARA boşluğu var mı?

    A ve B bölümleri yalnız o gün EKLENEN parçaya bakar. İlk dönemin öncesi
    olmadığı için md.1 oraya hiç düşmez — ve ölçüldüğünde tam orada çıktı:
    1281 gövdesi iki parça, aralarında **1,66 km tamamen KARA** boşluk.
    Kullanıcı bunu "başlangıçtaki iki toprak köşesinden birleşmiş" diye
    tarif etti; ekranda iki ayrı leke görünüyor.

    Aynı kusur ardışık dönemlerde tekrar eder (1281'deki boşluk 1299'a kadar
    sürer). Bu yüzden imzaya göre TEKİLLEŞTİRİLİR: her kusur ilk göründüğü
    dönemle bir kez raporlanır, yoksa tek hata üç satır olur.

    Maliyet: yalnız ALAN_KM2 üstü parçalar karşılaştırılır (adalar elenir),
    o yüzden dönem başına birkaç çift kalıyor.
    """
    bulgular, gorulen, parca_kumesi = [], set(), set()
    # ⚠️ İKİ ÖN ELEME OLMADAN BU BÖLÜM 9 DAKİKADA BİTMİYOR (ölçüldü):
    #   1) aynı parça kümesini kullanan dönem bir kez hesaplanır — ardışık
    #      dönemler gövdenin çoğunu paylaşır;
    #   2) kutu ön elemesi — iki parçanın kutuları YAKIN_KM kadar şişirilince
    #      kesişmiyorsa mesafe hesabına hiç girilmez. Pahalı olan distance(),
    #      kutu testi bedava.
    ESNEME = YAKIN_KM / 111.0
    for d in D:
        anahtar = tuple(sorted(d.get("o", [])))
        if anahtar in parca_kumesi:
            continue
        parca_kumesi.add(anahtar)
        # ⚠️ SADELEŞTİRME ŞART. Ölçüldü: ham geometriyle bu bölüm 9 dakikada
        # bitmiyor — distance() köşe sayısıyla ölçekleniyor ve imparatorluk
        # gövdesi on binlerce köşe taşıyor. 0,005° ≈ 550 m tolerans, aradığımız
        # 1-100 km'lik boşlukların yanında görünmez; kusurun kendisi değişmez.
        gs = [p.simplify(0.005) for p in _bilesenler(govde(d, PARCA))
              if _km2(p.area) >= ALAN_KM2]
        for i in range(len(gs)):
            bi = gs[i].bounds
            for j in range(i + 1, len(gs)):
                bj = gs[j].bounds
                if (bi[2] + ESNEME < bj[0] or bj[2] + ESNEME < bi[0] or
                        bi[3] + ESNEME < bj[1] or bj[3] + ESNEME < bi[1]):
                    continue
                try:
                    m = gs[i].distance(gs[j])
                except Exception:
                    continue
                if m * 111 >= YAKIN_KM:
                    continue
                a, b = nearest_points(gs[i], gs[j])
                hat = LineString([a, b])
                try:
                    oran = hat.intersection(kara).length / hat.length if hat.length else 1.0
                except Exception:
                    oran = 0.0
                if oran < KARA_ORANI:
                    continue
                # ⚠️ İMZA ALANA DEĞİL BOŞLUĞUN YERİNE BAKAR. İlk yazımda imza
                # (küçük alan, büyük alan, mesafe) idi ve TEKİLLEŞTİRMİYORDU:
                # imparatorluk her dönem büyüdüğü için aynı 20,5 km'lik boşluk
                # her seferinde yeni bir "büyük alan" ile çift kuruyordu —
                # 128 satır, hepsi bir avuç fiziksel kusurun kopyası. Boşluğun
                # ORTA NOKTASI ise kusur düzeltilene kadar sabit kalır.
                # 0,1° ≈ 11 km yuvarlama: aynı boğazın iki ucu tek kusur sayılır.
                imza = (round((a.x + b.x) / 2, 1), round((a.y + b.y) / 2, 1),
                        round(m * 111))
                if imza in gorulen:
                    continue
                gorulen.add(imza)
                k, B_ = sorted((_km2(gs[i].area), _km2(gs[j].area)))
                bulgular.append({"f": d["f"], "t": d["t"], "ad": d["ad"],
                                 "kucuk": k, "buyuk": B_, "km": m * 111,
                                 "kara": oran,
                                 "lon": round((a.x + b.x) / 2, 2),
                                 "lat": round((a.y + b.y) / 2, 2)})
    return bulgular


def olc(P, PARCA, D, kara):
    """Her katılım için yeni bileşenleri çıkarır ve sınıflar."""
    sonuc, onceki = [], None
    for d in D:
        g = govde(d, PARCA)
        if onceki is None or g is None or not d.get("e"):
            onceki = g if g is not None else onceki
            continue
        try:
            yeni = g.difference(onceki)
        except Exception:
            onceki = g
            continue
        for c in _bilesenler(yeni):
            if c.area < 1e-6:
                continue
            try:
                mesafe = c.distance(onceki)
            except Exception:
                continue
            kayit = {"km2": _km2(c.area), "f": d["f"], "ad": d["ad"],
                     "e": [P[i]["a"] for i in d.get("e", [])[:4]]}
            if mesafe <= 0:
                # Değiyor — ama NASIL? Tek nokta mı, çizgi mi?
                try:
                    temas = c.boundary.intersection(onceki.boundary).length
                except Exception:
                    temas = -1.0
                kayit.update(tip="kose" if temas <= TEMAS_SIFIR else "bitisik",
                             temas_km=temas * 111, km=0.0, kara=1.0)
            else:
                a, b = nearest_points(c, onceki)
                hat = LineString([a, b])
                try:
                    oran = hat.intersection(kara).length / hat.length if hat.length else 0
                except Exception:
                    oran = 0.0
                kayit.update(tip="kopuk", temas_km=-1.0,
                             km=mesafe * 111, kara=oran)
            sonuc.append(kayit)
        onceki = g
    return sonuc


def main():
    ayrinti = "--ayrinti" in sys.argv
    dagilim = "--dagilim" in sys.argv
    t0 = time.time()
    print("Bitişiklik denetimi — katılan toprak gövdeye karadan bağlı mı?\n")
    P, PARCA, D, kara, damga = yukle()
    print(f"  {len(P)} petek · {len(D)} dönem · geometri damgası: {damga}")
    R = olc(P, PARCA, D, kara)
    print(f"  {len(R)} yeni bileşen · {time.time()-t0:.0f} sn\n")

    kopuk = [r for r in R if r["tip"] == "kopuk"]
    kose = [r for r in R if r["tip"] == "kose"]
    deniz = [r for r in kopuk if r["kara"] < KARA_ORANI]
    karali = [r for r in kopuk if r["kara"] >= KARA_ORANI]
    ihlal_l = sorted([r for r in karali if r["km"] < YAKIN_KM and r["km2"] >= ALAN_KM2],
                     key=lambda r: -r["km2"])
    uzak = sorted([r for r in karali if r["km"] >= YAKIN_KM], key=lambda r: -r["km2"])
    kose_b = sorted([r for r in kose if r["km2"] >= ALAN_KM2], key=lambda r: -r["km2"])

    print(f"  değen {len(R)-len(kopuk)} · kopuk {len(kopuk)}"
          f"  (deniz hattı {len(deniz)} · kara hattı {len(karali)})")
    print(f"  ✓ DENİZ hattı olan {len(deniz)} bileşen İHLAL DEĞİL — Rodos, Girit,")
    print( "    Kıbrıs, Cezayir, Kırım… donanmayla alınmıştır, kural bunları muaf tutar.")

    ihlal = 0

    # ---------------- A) kara boşluğu, yakın, büyük → İHLAL
    print(f"\n=== A) KARADAN GİDİLEBİLİRDİ AMA GÖVDE KOPUK ===")
    print(f"    ölçüt: kara ≥%{KARA_ORANI*100:.0f} · boşluk <{YAKIN_KM} km · alan ≥{ALAN_KM2} km²")
    print( "    100 km'nin altında araya bir devlet sığmaz — burada kopukluk")
    print( "    geometri kusuru ya da EKSİK YERLEŞİM NOKTASI demektir.")
    if len(ihlal_l) > BEKLENEN_KARA_KOPUK:
        ihlal += 1
        print(f"  ✗ {len(ihlal_l)} bileşen (tavan {BEKLENEN_KARA_KOPUK}) — YENİ KOPUKLUK")
    else:
        print(f"  i {len(ihlal_l)} bileşen (tavan {BEKLENEN_KARA_KOPUK}) — bilinen borç")
    for r in ihlal_l:
        print(f"      {r['km2']:9.0f} km²  boşluk {r['km']:5.1f} km  kara %{r['kara']*100:3.0f}"
              f"  {r['f']}  {r['ad'][:34]:34s} {r['e'][:2]}")

    # ---------------- B) köşe teması
    print(f"\n=== B) KÖŞEDEN BİRLEŞME — iki gövde TEK NOKTADA değiyor ===")
    print(f"    {len(kose)} bileşen tek noktada değiyor; {len(kose_b)}'i {ALAN_KM2} km² üstü.")
    print( "    Ekranda 'köşesinden birleşmiş' görünen hâl budur (md.1, md.6).")
    if len(kose_b) > BEKLENEN_KOSE:
        ihlal += 1
        print(f"  ✗ {len(kose_b)} büyük köşe teması (tavan {BEKLENEN_KOSE})")
    else:
        print(f"  i {len(kose_b)} büyük köşe teması (tavan {BEKLENEN_KOSE}) — bilinen borç")
    for r in kose_b:
        print(f"      {r['km2']:9.0f} km²  {r['f']}  {r['ad'][:40]:40s} {r['e'][:2]}")
    kucuk_kose = [r for r in kose if r["km2"] < ALAN_KM2]
    if ayrinti:
        print(f"    --- {ALAN_KM2} km² altı köşe temasları ({len(kucuk_kose)}) ---")
        for r in sorted(kucuk_kose, key=lambda r: -r["km2"]):
            print(f"      {r['km2']:9.1f} km²  {r['f']}  {r['ad'][:40]:40s} {r['e'][:2]}")

    # ---------------- C) uzak sıçrama — bilinen borç
    print(f"\n=== C) UZAK KARA SIÇRAMASI (≥{YAKIN_KM} km) — TARİHSEL, geometri değil ===")
    print( "    Ordu araya giren YABANCI toprağı aşmıştır: Tebriz 1514 (585 km),")
    print( "    Bağdat 1638, Hotin, Basra, Şamahı. Enklav/sefer sonucu; meşru.")
    print( "    ⚠️ Meşru olması KAYITSIZ olabileceği anlamına gelmez — her birinin")
    print( "       kronoloji maddesi Değişmez 2'nin işidir, bu denetimin değil.")
    if len(uzak) > BEKLENEN_UZAK_SICRAMA:
        ihlal += 1
        print(f"  ✗ {len(uzak)} sıçrama (tavan {BEKLENEN_UZAK_SICRAMA}) — YENİ SIÇRAMA")
    else:
        print(f"  i {len(uzak)} sıçrama (tavan {BEKLENEN_UZAK_SICRAMA}) — bilinen borç")
    for r in (uzak if ayrinti else uzak[:10]):
        print(f"      {r['km2']:9.0f} km²  {r['km']:6.0f} km  {r['f']}  {r['ad'][:34]:34s} {r['e'][:2]}")
    if not ayrinti and len(uzak) > 10:
        print(f"      … {len(uzak)-10} satır daha (--ayrinti)")

    # ---------------- D) gövde içi kopukluk
    gk = sorted(govde_ici_kopukluk(D, PARCA, kara), key=lambda r: -r["kucuk"])
    print(f"\n=== D) GÖVDE İÇİ KARA KOPUKLUĞU — {len(gk)} ayrı kusur ===")
    print( "    A ve B yalnız o gün EKLENEN parçaya bakar; ilk dönemin öncesi")
    print( "    olmadığı için md.1 oraya hiç düşmüyordu. Bu bölüm gövdenin")
    print( "    BÜTÜNÜNE bakar; kusurlar imzaya göre tekilleştirilmiştir.")
    if len(gk) > BEKLENEN_GOVDE_KOPUK:
        ihlal += 1
        print(f"  ✗ {len(gk)} kusur (tavan {BEKLENEN_GOVDE_KOPUK}) — YENİ KOPUKLUK")
    else:
        print(f"  i {len(gk)} kusur (tavan {BEKLENEN_GOVDE_KOPUK}) — bilinen borç")
    for r in (gk if ayrinti else gk[:14]):
        print(f"      {r['f']}  boşluk {r['km']:6.2f} km @ {r['lon']:7.2f},{r['lat']:6.2f}"
              f"  {r['kucuk']:8.0f} km² ⟷ {r['buyuk']:9.0f} km²  {r['ad'][:26]}")
    if not ayrinti and len(gk) > 14:
        print(f"      … {len(gk)-14} satır daha (--ayrinti)")

    if dagilim:
        print("\n--- HAM DAĞILIM (eşik seçmek için) ---")
        import collections
        kv = collections.Counter()
        for r in kopuk:
            o = r["kara"]
            kv["deniz <%10" if o < .1 else "%10-50" if o < .5 else "%50-85"
               if o < .85 else "kara ≥%85"] += 1
        print("  kara oranı :", dict(kv))
        kv = collections.Counter()
        for r in karali:
            k = r["km"]
            kv["<5 km" if k < 5 else "5-20" if k < 20 else "20-50" if k < 50
               else "50-100" if k < 100 else "100-300" if k < 300 else "≥300"] += 1
        print("  kara boşluğu mesafesi:", dict(kv))
        kv = collections.Counter()
        for r in kopuk:
            a = r["km2"]
            kv["<10 km²" if a < 10 else "<100" if a < 100 else "<1000" if a < 1000
               else "<10000" if a < 10000 else "≥10000"] += 1
        print("  alan       :", dict(kv))

    print()
    print("SONUÇ:", "temiz ✓" if not ihlal else
          f"İHLAL VAR ({ihlal} başlık) — çıkış kodu 1")
    return 1 if ihlal else 0


if __name__ == "__main__":
    sys.exit(main() or 0)
