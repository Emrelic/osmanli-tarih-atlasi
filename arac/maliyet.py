# -*- coding: utf-8 -*-
"""maliyet.py — MALİYET-MESAFE (cost-distance) PROTOTİPİ · `ALTYAPI ③`

🔴 NİÇİN VAR — Emre'nin kuralı (`denetim/KUTU-ACIK-MADDELER.md:594`):
    "Toprağın boyanması için orada yerleşim ya da garnizon olmalı;
     KARŞI KIYIDAKİ EGEMENLİĞİN TAŞMASI olmamalı."

Bugünkü motor peteği **kuş uçuşu** mesafeyle kuruyor: deniz engel DEĞİL.
Sonuç, `CLAUDE.md §2`de sayılan hataların bir kısmı — Sardinya'nın
Annaba'dan, Kefalonya'nın Ayamavra'dan boyanması. Voronoi *"en yakın
nokta kim"* diye sorar; doğru soru **"oraya nereden GİDİLİR"**dir.

Bu betik o ikinci soruyu soran motorun **prototipidir.** Üretime
girmiyor, `uret_petek.py`ye dokunmuyor; yan yana koşup **farkı ölçüyor.**

    py arac/maliyet.py sinav        Çimpe/Gelibolu sınavı (öngörü: denetim/MALIYET-ONGORU.md)
    py arac/maliyet.py kutu --b "lon0,lat0,lon1,lat1" [--adim 0.01]
    py arac/maliyet.py --yardim

────────────────────────────────────────────────────────────────────────
YÖNTEM — ve her kararın gerekçesi

① IZGARA      Enlem-boylam ızgarası. Hücre EŞİT AÇI, eşit alan değil;
              o yüzden komşuya geçiş bedeli GERÇEK KM olarak hesaplanır
              (boylam adımı cos(lat) ile daralır). Bunu yapmayan bir
              prototip kuzeyde mesafeyi 1,5 kat şişirirdi.

② SÜRTÜNME    friction[hücre] = KM BAŞINA BEDEL çarpanı.
                  kara          1,0
                  deniz         ∞      (GEÇİLMEZ — sınavın konusu bu)
                  göl           ∞
                  nehir geçişi  +NEHIR_BEDELI km eşdeğeri (kenar bedeli)
                  yükseklik     🔴 VERİ YOK — katman duruyor, AĞIRLIĞI 0
              ⚠️ Yükseklik katmanı SAHTE DOLDURULMADI. Veri gelince tek
              satırla açılır; o güne kadar "dağ engeldir" iddiası bu
              betikte SINANMAMIŞTIR ve öyle yazılıdır.

③ ÇOK KAYNAKLI DIJKSTRA
              Bütün yerleşimler aynı anda kaynak. Bir hücrenin sahibi,
              **birim ağırlık başına en ucuz** ulaşandır:
                  skor = birikmiş_km / agirlik(nokta)
              ⇒ `ALTYAPI §1.1b`: ağırlık bir KAPI değil ÇARPANDIR ve
              sonucu belirleyen mutlak değeri değil KOMŞUSUYLA ORANI.
              Aynı düşük ağırlık, İstanbul'un yanında ihmal edilebilir
              bir hücre verir, boşlukta koca bir bölge — ikisi de doğru.

④ KARŞILAŞTIRMA
              Aynı ızgarada düz Voronoi (en yakın nokta, kuş uçuşu) da
              hesaplanır ve iki atama HÜCRE HÜCRE karşılaştırılır.
              📌 Tek başına "maliyet-mesafe çalıştı" demek ölçüm değildir;
              ölçüm, **neyi değiştirdiğidir.**

────────────────────────────────────────────────────────────────────────
⚠️ SINIRLARI — açıkça, çünkü yazılmayan sınır yok sayılır
   · BÖLGESELDİR. "Bütün dünyada çalışır" bu betikle ÖLÇÜLMEDİ.
   · Saf Python Dijkstra (scipy yok). Büyük kutuda yavaştır.
   · Yükseklik · eğim · orman · bataklık: VERİ YOK, ölçülmedi.
   · Üretimdeki peteği ÜRETMEZ; onu değiştirmek ayrı ve sonraki iştir.
"""
import heapq
import io
import json
import math
import os
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
KAYNAK = os.path.join(KOK, "veri-kaynak")

# ── AYARLAR — hepsi ölçülebilir, hiçbiri gizli ───────────────────────
NEHIR_BEDELI = 8.0       # bir nehri geçmek ~8 km yürümeye bedel
DENIZ = float("inf")     # geçilmez
KARA = 1.0
# Kademe → ağırlık. `ALTYAPI §1.2b`: tablo bir kez UYDURULDU ve ölçüm
# değiştirdi. Buradaki de bir BAŞLANGIÇ; prototipin işi onu SINAMAK.
# k:0 "kademesiz" demek, "ağırlıksız" DEĞİL (1538 nokta k:0 — sıfır
# ağırlık verilseydi bir gecede silinirlerdi).
AGIRLIK = {1: 3.0, 2: 2.0, 3: 1.4, 4: 1.0, 0: 1.0}

# yükseklik katmanı — VERİ YOK, ağırlığı 0. Veri gelince YUKSEKLIK_AGIRLIK
# büyütülür ve `_yukseklik_oku` gerçek bir raster döndürür.
YUKSEKLIK_AGIRLIK = 0.0

SINAV_KUTU = (25.6, 39.9, 27.6, 41.1)   # Gelibolu · Çanakkale · Marmara


def _km_enlem(d_lat):
    return d_lat * 110.574


def _km_boylam(d_lon, lat):
    return d_lon * 111.320 * math.cos(math.radians(lat))


def _geojson(ad):
    yol = os.path.join(KAYNAK, ad)
    if not os.path.exists(yol):
        return None
    return json.load(io.open(yol, encoding="utf-8"))


def _sekiller(gj, kutu):
    """GeoJSON → kutuyla kesişen shapely şekilleri. Yoksa boş liste."""
    from shapely.geometry import box, shape
    if not gj:
        return []
    k = box(*kutu)
    out = []
    for f in gj.get("features", []):
        try:
            g = shape(f["geometry"])
        except Exception:
            continue
        if g.is_valid and g.intersects(k):
            out.append(g.intersection(k))
    return out


def izgara(kutu, adim):
    lon0, lat0, lon1, lat1 = kutu
    nx = int(round((lon1 - lon0) / adim))
    ny = int(round((lat1 - lat0) / adim))
    return nx, ny


def surtunme(kutu, adim, sessiz=False):
    """Hücre başına sürtünme + nehir kenarları. (fr, nehir_hucre) döner.

    🔴 `motor_kara.geojson` motorun KENDİ kara maskesi — `uret_petek.py`
    onu kullanıyor. Aynı maskeyi kullanmak şart: iki alet farklı kara
    tanımı kullanırsa fark ÖLÇÜLEMEZ, çünkü farkın kaynağı belirsizleşir.
    """
    from shapely.geometry import Point
    from shapely.prepared import prep
    lon0, lat0, lon1, lat1 = kutu
    nx, ny = izgara(kutu, adim)
    kara = _sekiller(_geojson("motor_kara.geojson"), kutu)
    if not kara:
        kara = _sekiller(_geojson("ne_10m_land.geojson"), kutu)
    goller = _sekiller(_geojson("ne_10m_lakes.geojson"), kutu)
    nehirler = _sekiller(_geojson("ne_10m_rivers.geojson"), kutu)
    if not sessiz:
        print("  kara parçası %d · göl %d · nehir %d"
              % (len(kara), len(goller), len(nehirler)))
    pk = [prep(g) for g in kara]
    pg = [prep(g) for g in goller]
    fr = [[DENIZ] * nx for _ in range(ny)]
    nehir = [[False] * nx for _ in range(ny)]
    for j in range(ny):
        lat = lat0 + (j + 0.5) * adim
        for i in range(nx):
            lon = lon0 + (i + 0.5) * adim
            p = Point(lon, lat)
            if any(g.contains(p) for g in pk) and not any(g.contains(p) for g in pg):
                fr[j][i] = KARA
    # nehir hücreleri: nehir çizgisinin geçtiği KARA hücreleri
    from shapely.geometry import box as _box
    for g in nehirler:
        try:
            mnx, mny, mxx, mxy = g.bounds
        except Exception:
            continue
        i0 = max(0, int((mnx - lon0) / adim) - 1)
        i1 = min(nx, int((mxx - lon0) / adim) + 2)
        j0 = max(0, int((mny - lat0) / adim) - 1)
        j1 = min(ny, int((mxy - lat0) / adim) + 2)
        for j in range(j0, j1):
            for i in range(i0, i1):
                if fr[j][i] == DENIZ or nehir[j][i]:
                    continue
                h = _box(lon0 + i * adim, lat0 + j * adim,
                         lon0 + (i + 1) * adim, lat0 + (j + 1) * adim)
                if g.intersects(h):
                    nehir[j][i] = True
    return fr, nehir


DEM_ADAYLAR = ("etopo2022_30s_dunya.tif", "etopo2022_30s_atlas.tif")
# 🔴 EĞİM ÇARPANI — HENÜZ UYDURULMADI ve öyle kalacak.
# `ALTYAPI §1.2b`de yazılı vaka: ağırlık tablosu bir kez uyduruldu, ölçüm
# onu değiştirdi. Bu sayı `T-0112` ile ÖLÇÜLEREK ayarlanacak: 41 sefer
# güzergâhı + koridor.js'te uzunluğu ölçülmüş 22 kenar hazır bir sınav
# kümesi. O ölçüm yapılana kadar değer 0 ⇒ eğim SONUCU DEĞİŞTİRMEZ,
# ve bu betik bunu her koşuda YAZAR.
EGIM_CARPANI = 0.0          # metre başına ek sürtünme · ÖLÇÜLMEDİ
EGIM_OLCULDU = False


def _dem_yolu(sessiz=False):
    """Kullanılabilir DEM — VARLIK DEĞİL, AÇILABİLİRLİK sınanır.

    🔴 AYNI TUZAK, İKİNCİ YER. `yukseklik_indir.py`de bugün kapatıldı:
    yarım kalan dosya "zaten var" diye geçiliyordu. Burada da geçti — ve
    bu sefer HEMEN patladı, çünkü dünya dosyası İNDİRİLİRKEN seçildi:
        RasterioIOError: Cannot open TIFF image
    ⚠️ Patlaması ŞANSTI. Yarısı yazılmış ama okunabilir bir TIFF sessizce
    seçilseydi, motorun yarım bir dünyada koştuğu ANLAŞILMAZDI —
    eksiklik yalnız güney yarıda görünürdü.
    📌 `§11`in "ölçemediğini eleyen süzgeç onu temiz sayar" dersinin
    ÜÇÜNCÜ vakası: kural bir yerde uygulanınca öteki yerde kendiliğinden
    uygulanmıyor. Ders KODA inmedikçe inmiş sayılmaz.
    """
    # 🔴 BÜTÜNLÜK SORUSU BURADA CEVAPLANMAZ — `yukseklik.tam_mi`ye SORULUR.
    # Sebep ölçüldü: aynı soru iki dosyada iki kopyayla soruluyordu, biri
    # düzeltilince öteki bayat kaldı ve yarım bir dünya dosyası seçildi.
    import yukseklik as _yk
    for a in DEM_ADAYLAR:
        y = os.path.join(KAYNAK, "yukseklik", a)
        if not os.path.exists(y):
            continue
        tam, neden = _yk.tam_mi(y)
        if tam:
            return y
        if not sessiz:
            print("  ⚠️ %s ATLANDI — %s" % (a, neden))
    return None


def surtunme_dem(kutu, adim, sessiz=False):
    """DEM'den sürtünme — shapely DEĞİL numpy. (fr, nehir, bilgi) döner.

    🔴 NİÇİN BAŞKA BİR İŞLEV: `surtunme()` her hücreye *"kara mısın"* diye
    **poligona** soruyor — 3.491 hücre/sn, dünya 1 km = **75 saat**. Oysa
    o soru gereksiz: **DEM zaten cevabı taşıyor.** Deniz = negatif
    yükseklik, eğim = aynı dizinin gradyanı.
        shapely        3.491 hücre/sn
        numpy/DEM 11.538.420 hücre/sn      ⇒ 3305 KAT
        atlas penceresi (229 M hücre): 19,8 saniye
    📌 Ve bu, bugün ölçülen bir yanılgının düzeltmesi: darboğazın Dijkstra
    olduğunu söylemiştim (255.870 hücre/sn — yanlıştı, o hızlıydı).

    ⚠️ KARA TANIMI ÇAPRAZ DOĞRULANIR. Motor `motor_kara.geojson` kullanıyor,
    bu işlev `z > 0` kullanıyor. İkisi AYNI ŞEY DEĞİL: kıyı çizgisi
    sadeleştirmesi, iç göller, Hollanda gibi deniz seviyesi altı kara.
    ⇒ Fark ÖLÇÜLÜR ve basılır; ölçülmeden "aynı" varsayılmaz.
    """
    import numpy as np
    import rasterio
    from rasterio.windows import from_bounds
    yol = _dem_yolu()
    if not yol:
        return None, None, {"hata": "DEM YOK — py arac/yukseklik_indir.py"}
    lon0, lat0, lon1, lat1 = kutu
    nx, ny = izgara(kutu, adim)
    with rasterio.open(yol) as s:
        p = from_bounds(lon0, lat0, lon1, lat1, transform=s.transform)
        z = s.read(1, window=p, out_shape=(ny, nx),
                   resampling=rasterio.enums.Resampling.average).astype("float32")
    # eğim: komşu farkı → metre / hücre
    gy, gx = np.gradient(z)
    egim = np.hypot(gx, gy)
    kara = z > 0
    fr = np.where(kara, 1.0 + EGIM_CARPANI * egim, np.inf)
    bilgi = {
        "hucre": int(z.size), "kara": int(kara.sum()),
        "kara_yuzde": 100.0 * float(kara.mean()),
        "egim_medyan": float(np.median(egim[kara])) if kara.any() else 0.0,
        "egim_maks": float(egim.max()),
        "dem": os.path.basename(yol),
    }
    if not sessiz:
        print("  DEM: %s · %d x %d · kara %%%.1f · eğim medyan %.1f m"
              % (bilgi["dem"], nx, ny, bilgi["kara_yuzde"], bilgi["egim_medyan"]))
        if not EGIM_OLCULDU:
            print("  🔴 EĞİM ÇARPANI = %.1f — ÖLÇÜLMEDİ, sonuca ETKİSİ YOK."
                  % EGIM_CARPANI)
            print("     T-0112 ile ayarlanacak (41 sefer güzergâhı sınavı).")
    # nehir katmanı bu yolla gelmiyor — ayrı ve AÇIKÇA boş
    nehir = np.zeros((ny, nx), dtype=bool)
    return fr.tolist(), nehir.tolist(), bilgi


def kara_farki(kutu, adim):
    """İKİ KARA TANIMI NE KADAR AYRIŞIYOR — DEM (z>0) ile motor maskesi.

    🔴 `§11`: iki alet farklı evrende koşarsa fark ÖLÇÜLEMEZ, çünkü farkın
    kaynağı belirsizleşir. Sürtünmeyi DEM'e taşımadan önce bu ayrışma
    bilinmeli — bilinmezse maliyet-mesafenin getirdiği her değişiklik
    "acaba kara tanımı mı değişti" sorusunu doğurur.
    """
    import numpy as np
    fr_dem, _, bilgi = surtunme_dem(kutu, adim, sessiz=True)
    if fr_dem is None:
        print("🔴 " + bilgi.get("hata", "DEM yok"))
        return 2
    fr_shp, _n = surtunme(kutu, adim, sessiz=True)
    a = np.isfinite(np.array(fr_dem))
    b = np.isfinite(np.array(fr_shp))
    ayni = int((a == b).sum())
    top = a.size
    print("KARA TANIMI KARŞILAŞTIRMASI · kutu %s · adım %.3f" % (str(kutu), adim))
    print("  DEM (z>0)        kara %8d  (%%%.1f)" % (a.sum(), 100.0 * a.mean()))
    print("  motor maskesi    kara %8d  (%%%.1f)" % (b.sum(), 100.0 * b.mean()))
    print("  UYUŞAN hücre     %8d  (%%%.2f)" % (ayni, 100.0 * ayni / top))
    print("  🔴 AYRIŞAN       %8d  — DEM'de kara, maskede deniz: %d"
          % (top - ayni, int((a & ~b).sum())))
    print("                     maskede kara, DEM'de deniz: %d"
          % int((b & ~a).sum()))
    print("  📌 Ayrışma SIFIR OLMAZ ve olmamalı: maske kıyıyı 1,3 km'ye")
    print("     sadeleştiriyor, DEM sadeleştirmiyor. Ölçüt SIFIR değil,")
    print("     ayrışmanın KIYIDA kalması — iç bölgede ayrışma KUSURDUR.")

    # 🔴 VE ÖLÇÜTÜ YAZIP UYGULAMAMAK, ÖLÇÜT KOYMAMAKTAN KÖTÜDÜR.
    # Yukarıdaki cümle "iç bölgede ayrışma kusurdur" diyor; o hâlde
    # ayrışmanın KAÇTA KAÇI kıyıda, ölçülmeli. Kıyı = maskede karayla
    # denizin komşu olduğu hücre (3x3 pencerede iki cins birden).
    ayr = a != b
    kiyi = np.zeros_like(b)
    for dy in (-1, 0, 1):
        for dx in (-1, 0, 1):
            if dy == 0 and dx == 0:
                continue
            kaydir = np.roll(np.roll(b, dy, 0), dx, 1)
            kiyi |= (b != kaydir)
    # kenar etkisini at (roll sarmalıyor)
    kiyi[0, :] = kiyi[-1, :] = kiyi[:, 0] = kiyi[:, -1] = True
    ic = int((ayr & ~kiyi).sum())
    kn = int((ayr & kiyi).sum())
    print()
    print("  AYRIŞMANIN YERİ:")
    print("    KIYI şeridinde  %6d  (%%%.1f)" % (kn, 100.0 * kn / max(1, ayr.sum())))
    print("    İÇ bölgede      %6d  (%%%.1f)  %s"
          % (ic, 100.0 * ic / max(1, ayr.sum()),
             "🟢 kabul edilebilir" if ic * 20 < ayr.sum() else "🔴 İNCELE"))
    if ic:
        print("    ⚠️ İç ayrışmanın meşru sebepleri VAR ve elenmeden hüküm")
        print("       verilmez: iç göller (DEM'de su, maskede kara olabilir)")
        print("       · deniz seviyesi altı kara · baraj gölleri. Bu betik")
        print("       onları AYIRMIYOR — ölçtüğü şey yalnız KONUM.")
    return 0


def noktalar(kutu, gun="1352-03-02"):
    """Kutu içindeki yerleşimler. (ad, lon, lat, agirlik, sahip) listesi."""
    import girdi
    Y = girdi.yukle(sessiz=True)
    lon0, lat0, lon1, lat1 = kutu
    out = []
    for y in Y:
        lon, lat = y.get("lon"), y.get("lat")
        if lon is None or lat is None:
            continue
        if not (lon0 <= lon <= lon1 and lat0 <= lat <= lat1):
            continue
        if y.get("kur") and y["kur"] > gun:
            continue          # o gün henüz kurulmamış
        out.append({
            "ad": y.get("ad"), "lon": lon, "lat": lat,
            "agirlik": AGIRLIK.get(y.get("k") or 0, 1.0),
            "k": y.get("k"), "sahip": _sahip(y, gun),
        })
    return out


def _sahip(y, gun):
    for p in (y.get("d") or []):
        if p.get("f", "") <= gun < p.get("t", "9999"):
            return "OSMANLI"
    for p in (y.get("v") or []):
        if p.get("f", "") <= gun < p.get("t", "9999"):
            return "tabi"
    for p in (y.get("s") or []):
        if p.get("f", "") <= gun < p.get("t", "9999"):
            return p.get("d")
    return None


def maliyet_mesafe(kutu, adim, fr, nehir, nk):
    """Çok kaynaklı Dijkstra. sahip[j][i] = nk indeksi ya da -1."""
    lon0, lat0, lon1, lat1 = kutu
    nx, ny = izgara(kutu, adim)
    INF = float("inf")
    skor = [[INF] * nx for _ in range(ny)]
    sahip = [[-1] * nx for _ in range(ny)]
    yigin = []
    for n, p in enumerate(nk):
        i = int((p["lon"] - lon0) / adim)
        j = int((p["lat"] - lat0) / adim)
        if not (0 <= i < nx and 0 <= j < ny):
            continue
        # 🔴 Nokta DENİZ hücresine düşerse (kıyı yuvarlaması) en yakın
        # KARA hücresine kaydırılır. Yoksa nokta kendi peteğini hiç
        # kuramaz ve sessizce KAYBOLUR — sessiz eleme yasak.
        if fr[j][i] == DENIZ:
            bul = None
            for r in range(1, 6):
                for dj in range(-r, r + 1):
                    for di in range(-r, r + 1):
                        jj, ii = j + dj, i + di
                        if 0 <= ii < nx and 0 <= jj < ny and fr[jj][ii] != DENIZ:
                            bul = (jj, ii)
                            break
                    if bul:
                        break
                if bul:
                    break
            if not bul:
                continue
            j, i = bul
        s = 0.0
        if s < skor[j][i]:
            skor[j][i] = s
            sahip[j][i] = n
            heapq.heappush(yigin, (s, j, i, n))
    while yigin:
        s, j, i, n = heapq.heappop(yigin)
        if s > skor[j][i]:
            continue
        lat = lat0 + (j + 0.5) * adim
        for dj, di in ((1, 0), (-1, 0), (0, 1), (0, -1),
                       (1, 1), (1, -1), (-1, 1), (-1, -1)):
            jj, ii = j + dj, i + di
            if not (0 <= ii < nx and 0 <= jj < ny):
                continue
            f = fr[jj][ii]
            if f == DENIZ:
                continue
            dkm = math.hypot(_km_enlem(dj * adim), _km_boylam(di * adim, lat))
            bedel = dkm * f
            if nehir[jj][ii] and not nehir[j][i]:
                bedel += NEHIR_BEDELI
            yeni = s + bedel / nk[n]["agirlik"]
            if yeni < skor[jj][ii]:
                skor[jj][ii] = yeni
                sahip[jj][ii] = n
                heapq.heappush(yigin, (yeni, jj, ii, n))
    return sahip, skor


def voronoi(kutu, adim, fr, nk):
    """Düz Voronoi — bugünkü motorun sorduğu soru: EN YAKIN nokta kim."""
    lon0, lat0, lon1, lat1 = kutu
    nx, ny = izgara(kutu, adim)
    sahip = [[-1] * nx for _ in range(ny)]
    for j in range(ny):
        lat = lat0 + (j + 0.5) * adim
        for i in range(nx):
            if fr[j][i] == DENIZ:
                continue
            lon = lon0 + (i + 0.5) * adim
            en, eni = None, -1
            for n, p in enumerate(nk):
                d = math.hypot(_km_enlem(p["lat"] - lat),
                               _km_boylam(p["lon"] - lon, lat))
                d /= p["agirlik"]
                if en is None or d < en:
                    en, eni = d, n
            sahip[j][i] = eni
    return sahip


def kara_bilesenleri(kutu, adim, fr):
    """Kara hücrelerini BAĞLANTILI BİLEŞENLERE ayır. bilesen[j][i] = no.

    🔴 BU FONKSİYON BİR ÖLÇÜT DÜZELTMESİDİR — ilk sınavı ÇÜRÜTTÜ.
    İlk sürümde yakalar bir DOĞRUYLA ayrılıyordu: *"Çanakkale Boğazı
    kabaca şu hat boyunca uzanır."* Kaba ama zararsız sanılmıştı. Ölçüm
    aksini söyledi:
        VORONOİ atlayan  97   ·   MALİYET atlayan 106
    Maliyet-mesafenin atlamayı ARTIRMASI **imkânsızdır** — deniz sonsuz
    sürtünmedir, hücre karşı kıyıya geçemez. ⇒ Kusur motorda değil
    ÖLÇÜTTEYDİ: Şarköy gibi TRAKYA'daki noktalar doğrunun güneyine
    düşüyor, "Anadolu" sayılıyor, onların peteği de "atlamış" görünüyordu.

    ⇒ Doğrusu geometri tahmini değil **bağlantılılık**: Gelibolu-Trakya
    kütlesi ile Anadolu kütlesi bu kutuda KARADAN BAĞLI DEĞİLDİR. Bir
    hücrenin sahibi BAŞKA BİR BİLEŞENDEYSE, oraya yürünerek gidilemez —
    yani gerçekten "atlamıştır". Tahmin yok, tanım var.

    📌 `CLAUDE.md §11`: *"doğru aleti yanlış evrenle koşturmak"* —
    ölçülen şey boğaz değil, benim çizdiğim doğruydu.
    """
    lon0, lat0, lon1, lat1 = kutu
    nx, ny = izgara(kutu, adim)
    bil = [[-1] * nx for _ in range(ny)]
    no = 0
    for j0 in range(ny):
        for i0 in range(nx):
            if fr[j0][i0] == DENIZ or bil[j0][i0] >= 0:
                continue
            yigin = [(j0, i0)]
            bil[j0][i0] = no
            while yigin:
                j, i = yigin.pop()
                for dj, di in ((1, 0), (-1, 0), (0, 1), (0, -1),
                               (1, 1), (1, -1), (-1, 1), (-1, -1)):
                    jj, ii = j + dj, i + di
                    if (0 <= ii < nx and 0 <= jj < ny
                            and fr[jj][ii] != DENIZ and bil[jj][ii] < 0):
                        bil[jj][ii] = no
                        yigin.append((jj, ii))
            no += 1
    return bil, no


def sinav(adim=0.02):
    kutu = SINAV_KUTU
    print("=" * 72)
    print("SINAV — ÇİMPE / GELİBOLU · kutu %s · adım %.3f°" % (str(kutu), adim))
    print("öngörü: denetim/MALIYET-ONGORU.md (KOD YAZILMADAN ÖNCE yazıldı)")
    print("=" * 72)
    nx, ny = izgara(kutu, adim)
    print("ızgara: %d x %d = %d hücre" % (nx, ny, nx * ny))
    fr, nehir = surtunme(kutu, adim)
    kara_h = sum(1 for j in range(ny) for i in range(nx) if fr[j][i] != DENIZ)
    print("  kara hücre: %d (%%%.1f)" % (kara_h, 100.0 * kara_h / (nx * ny)))

    bil, nbil = kara_bilesenleri(kutu, adim, fr)
    boy = {}
    for j in range(ny):
        for i in range(nx):
            if bil[j][i] >= 0:
                boy[bil[j][i]] = boy.get(bil[j][i], 0) + 1
    print("  kara BİLEŞENİ: %d — en büyük üçü: %s" % (
        nbil, ", ".join("#%d:%d hücre" % (k, n) for k, n in
                        sorted(boy.items(), key=lambda x: -x[1])[:3])))
    print("  📌 Bileşenler KARADAN BAĞLI DEĞİL. Bir hücrenin sahibi başka")
    print("     bileşendeyse oraya YÜRÜNEREK GİDİLEMEZ — 'atlamış'tır.")

    def _bil_nokta(p):
        i = int((p["lon"] - kutu[0]) / adim)
        j = int((p["lat"] - kutu[1]) / adim)
        if not (0 <= i < nx and 0 <= j < ny):
            return -1
        if bil[j][i] >= 0:
            return bil[j][i]
        for r in range(1, 6):                    # kıyı yuvarlaması
            for dj in range(-r, r + 1):
                for di in range(-r, r + 1):
                    jj, ii = j + dj, i + di
                    if 0 <= ii < nx and 0 <= jj < ny and bil[jj][ii] >= 0:
                        return bil[jj][ii]
        return -1

    for gun, beklenen in (("1346-06-15", "Rumeli BOŞ"),
                          ("1352-03-02", "yalnız Çimpe")):
        nk = noktalar(kutu, gun)
        if not nk:
            print("\n%s — kutuda nokta YOK, sınav koşulamaz" % gun)
            continue
        print("\n── %s ── (%s bekleniyor) · %d nokta"
              % (gun, beklenen, len(nk)))
        osm = [p for p in nk if p["sahip"] in ("OSMANLI", "tabi")]
        print("   Osmanlı/tâbi nokta: %d — %s"
              % (len(osm), ", ".join(p["ad"] for p in osm[:6]) or "yok"))
        nb = [_bil_nokta(p) for p in nk]
        s_md = voronoi(kutu, adim, fr, nk)
        s_mm, _ = maliyet_mesafe(kutu, adim, fr, nehir, nk)
        atlayan_v = atlayan_m = fark = 0
        for j in range(ny):
            for i in range(nx):
                if fr[j][i] == DENIZ:
                    continue
                b = bil[j][i]
                if s_md[j][i] != s_mm[j][i]:
                    fark += 1
                v, m = s_md[j][i], s_mm[j][i]
                if v >= 0 and nb[v] != b:
                    atlayan_v += 1
                if m >= 0 and nb[m] != b:
                    atlayan_m += 1
        print("   🔴 VORONOİ  — BAŞKA BİLEŞENE atlayan hücre: %d  (%%%.1f)"
              % (atlayan_v, 100.0 * atlayan_v / kara_h if kara_h else 0))
        print("   🟢 MALİYET  — BAŞKA BİLEŞENE atlayan hücre: %d  (%%%.1f)"
              % (atlayan_m, 100.0 * atlayan_m / kara_h if kara_h else 0))
        print("   iki yöntemin AYRIŞTIĞI hücre: %d (%%%.1f)"
              % (fark, 100.0 * fark / kara_h if kara_h else 0))

        # ── ASIL SINAV: SAHİPLİK projeksiyonu ────────────────────────
        # 🔴 Yukarıdaki sayılar BÖLÜNMEYİ ölçüyor, BOYAMAYI değil — ve
        # bölünme iki tarihte AYNI çıkıyor (nokta kümesi aynı, yalnız
        # sahipleri değişiyor). Emre'nin sorusu ise boyamayla ilgili:
        # "1346'da Rumeli BOŞ, 1352'de yalnız Çimpe."
        # ⇒ Aynı bölünmeyi SAHİPLE boyayıp Rumeli bileşenini saymak
        #    gerekiyor. Bunu eklemeden sınav, sorulan soruyu sormuyordu.
        rum_bil = max(boy, key=lambda k: boy[k])   # en büyük = Trakya-Gelibolu
        for ad, s in (("VORONOİ", s_md), ("MALİYET", s_mm)):
            osm_h = 0
            kimler = {}
            for j in range(ny):
                for i in range(nx):
                    if bil[j][i] != rum_bil or s[j][i] < 0:
                        continue
                    p = nk[s[j][i]]
                    if p["sahip"] in ("OSMANLI", "tabi"):
                        osm_h += 1
                        kimler[p["ad"]] = kimler.get(p["ad"], 0) + 1
            print("   %s → RUMELİ bileşeninde OSMANLI boyalı hücre: %d %s"
                  % (ad, osm_h,
                     "(" + ", ".join("%s:%d" % x for x in
                                     sorted(kimler.items(),
                                            key=lambda x: -x[1])[:4]) + ")"
                     if kimler else ""))


def kutu_kos(kutu, adim):
    print("kutu %s · adım %.3f°" % (str(kutu), adim))
    nx, ny = izgara(kutu, adim)
    print("ızgara: %d x %d = %d hücre" % (nx, ny, nx * ny))
    fr, nehir = surtunme(kutu, adim)
    nk = noktalar(kutu)
    print("nokta: %d" % len(nk))
    if not nk:
        return 1
    s_mm, skor = maliyet_mesafe(kutu, adim, fr, nehir, nk)
    s_md = voronoi(kutu, adim, fr, nk)
    kara_h = fark = ulasilmaz = 0
    for j in range(ny):
        for i in range(nx):
            if fr[j][i] == DENIZ:
                continue
            kara_h += 1
            if s_mm[j][i] < 0:
                ulasilmaz += 1
            if s_md[j][i] != s_mm[j][i]:
                fark += 1
    print("kara hücre %d · ayrışan %d (%%%.1f) · maliyetle ULAŞILAMAYAN %d"
          % (kara_h, fark, 100.0 * fark / kara_h if kara_h else 0, ulasilmaz))
    print("📌 ULAŞILAMAYAN = karadan gidilemeyen ada/enklav. Voronoi bunu")
    print("   GÖREMEZ; sahibi varmış gibi boyar. Asıl bulgu budur.")
    return 0


def agirlik_sinavi(kutu=SINAV_KUTU, adim=0.03):
    """ÖNGÖRÜ ④ — 'aynı ağırlık, komşusuna göre farklı alan verir.'

    🔴 Bu bir TASARIM iddiasıdır (`ALTYAPI §1.1b`) ve bugüne kadar
    ÖLÇÜLMEDİ. Emre'nin cümlesi: ağırlık SIFIRLANMAZ, KÜÇÜLTÜLÜR; ve
    sonucu belirleyen ağırlığın kendisi değil **komşusuyla ORANI.**

    Ölçüm: her nokta için (a) hücre sayısı, (b) en yakın komşuya uzaklık
    — yani YEREL SEYREKLİK. İddia doğruysa aynı ağırlıktaki iki nokta,
    seyrek yerde kalabalık yerdekinden KAT KAT büyük alan tutar.
    """
    print("=" * 72)
    print("ÖNGÖRÜ ④ — AĞIRLIK · ALAN · YEREL SEYREKLİK")
    print("=" * 72)
    fr, nehir = surtunme(kutu, adim, sessiz=True)
    nk = noktalar(kutu)
    sahip, _ = maliyet_mesafe(kutu, adim, fr, nehir, nk)
    nx, ny = izgara(kutu, adim)
    say = {}
    for j in range(ny):
        for i in range(nx):
            if sahip[j][i] >= 0:
                say[sahip[j][i]] = say.get(sahip[j][i], 0) + 1
    sat = []
    for n, p in enumerate(nk):
        en = min((math.hypot(_km_enlem(q["lat"] - p["lat"]),
                             _km_boylam(q["lon"] - p["lon"], p["lat"]))
                  for m, q in enumerate(nk) if m != n), default=0.0)
        sat.append((p["ad"], p["agirlik"], say.get(n, 0), en))
    print("%-22s %6s %8s %10s" % ("nokta", "ağırlık", "hücre", "en yakın km"))
    for ad, a, h, e in sorted(sat, key=lambda x: -x[2]):
        print("%-22s %6.1f %8d %10.1f" % ((ad or "?")[:22], a, h, e))
    # aynı ağırlıktaki noktalar arasında alan oranı
    grup = {}
    for ad, a, h, e in sat:
        grup.setdefault(a, []).append((h, e, ad))
    print()
    for a, g in sorted(grup.items()):
        if len(g) < 2:
            continue
        g.sort()
        kucuk, buyuk = g[0], g[-1]
        oran = (buyuk[0] / kucuk[0]) if kucuk[0] else float("inf")
        print("ağırlık %.1f · %d nokta → en küçük %d hücre (%s, komşu %.0f km)"
              % (a, len(g), kucuk[0], kucuk[2], kucuk[1]))
        print("            en büyük %d hücre (%s, komşu %.0f km) → ORAN %.1f kat"
              % (buyuk[0], buyuk[2], buyuk[1], oran))
        print("   ⇒ öngörü '> 3 kat' %s"
              % ("TUTTU ✓" if oran > 3 else "ÇÜRÜDÜ 🔴"))
    return 0


def main(argv):
    if not argv or argv[0] in ("--yardim", "-h"):
        print(__doc__)
        return 0
    if argv[0] == "sinav":
        a = 0.02
        if "--adim" in argv:
            a = float(argv[argv.index("--adim") + 1])
        sinav(a)
        return 0
    if argv[0] == "agirlik":
        return agirlik_sinavi()
    if argv[0] == "kara-fark":
        b = SINAV_KUTU
        if "--b" in argv:
            b = tuple(float(x) for x in argv[argv.index("--b") + 1].split(","))
        a = 0.02
        if "--adim" in argv:
            a = float(argv[argv.index("--adim") + 1])
        return kara_farki(b, a)
    if argv[0] == "kutu":
        if "--b" not in argv:
            print("kullanim: maliyet.py kutu --b lon0,lat0,lon1,lat1 [--adim 0.02]")
            return 2
        b = tuple(float(x) for x in argv[argv.index("--b") + 1].split(","))
        a = 0.02
        if "--adim" in argv:
            a = float(argv[argv.index("--adim") + 1])
        return kutu_kos(b, a)
    print("bilinmeyen komut: %s" % argv[0])
    return 2


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
