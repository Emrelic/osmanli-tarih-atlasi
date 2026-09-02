# -*- coding: utf-8 -*-
"""GÜZERGÂH — koridor ağının DÜNYA ayağı için eksik olan son adım.

Oturum: OPUS HAZIR KITA 106 · 2 Eylül 2026 · koordinatör 1.MURAT
Tasarım: `denetim/TASARIM-KORIDOR-DUNYA-OK106.md`
Ölçüm  : `denetim/BULGU-KORIDOR-OK106.md`

═══ NİÇİN VAR ═══
Emre'nin kararı (a) karma yol: *"Osmanlı kuşağında OWTRAD (gerçek menziller),
dünyada DEM'den TÜRET."* Ölçüldü ve **türetmenin son adımı yazılı değildi**:

    maliyet.py VAR   sürtünme · DEM+eğim · ÇOK KAYNAKLI Dijkstra · voronoi ·
                     kara bileşeni · hız eğrisi · ve `skor` (maliyet YÜZEYİ)
    maliyet.py YOK   `skor`dan hedeften kaynağa GERİ YÜRÜYÜP bir çizgi
                     döndüren işlev · TEK KAYNAKLI koşu · çift seçimi

Çok kaynaklı Dijkstra her hücreyi EN YAKIN kaynağa atar ⇒ **TOPRAK üretir,
YOL üretmez.** Bu dosya o boşluğu kapatır.

🔴 `arac/maliyet.py`ye TEK BAYT YAZILMADI — yalnız içe aktarılıyor.
🔴 `motor_izi()` yalnız `uret_petek.py · renkler.py · girdi.py` üçlüsünü
   parmak izler (ölçüldü, `girdi.py:1183`) ⇒ bu dosya koşuyu ETKİLEMEZ.

═══ MALİYET MODELİ — `maliyet_mesafe`in AYNISI, TEK BİLİNÇLİ FARKLA ═══
    bedel = dkm * sürtünme                     ← aynı
    nehre GİRİŞTE + NEHIR_BEDELI               ← aynı
    / nk[n]["agirlik"]  (kademe ağırlığı)      ← 🔴 KULLANILMIYOR, ve niçin:
        o bölen bir TOPRAK PAYLAŞTIRMA aygıtıdır (büyük merkez daha çok yer
        kapsın diye). Bir YOL için anlamsız: aynı fiziksel güzergâh, başlangıç
        noktasının kademesine göre farklı maliyet çıkarırdı. Yol maliyeti
        araziye aittir, şehre değil.
    ⇒ Bu fark BİLİNÇLİDİR ve çıktıda `agirlik_kullanildi:false` diye yazılır.

═══ 🔴 SINANMAMIŞ VARSAYIM — kodun İÇİNE yazılıyor ═══
    "İki komşu düğüm arasındaki en ucuz yol, o iki düğümü çevreleyen
     kutunun DIŞINA çıkmaz."
Bu varsayım ÖLÇÜLMEDİ. Yanlışsa yol kutunun kenarına YAPIŞIR — ve o hâlde
bu betik **UYARI BASAR, sessizce kırpmaz** (`kenara_yapisti` bayrağı).
Sınav takımı hazır: koridorun Osmanlı ayağında **km'si dolu 84 kenar** var.

    py arac/_guzergah_ok106.py sinav        # küçük kutu, DEM'siz — hızlı
    py arac/_guzergah_ok106.py sinav --dem  # DEM ile
    py arac/_guzergah_ok106.py cift         # aday çift üretimi (raster YOK)
    py arac/_guzergah_ok106.py kenar-sinav  # 84 bilinen kenara karşı ölçüm
                                            # 🔴 AĞIR — koşu bitince koştur
"""
import heapq
import math
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import maliyet as M          # noqa: E402  — SALT OKUNUR kullanım
import girdi                 # noqa: E402


# ═══════════════════════════════════════════════════════════════════════
# ① ÇİFT SEÇİMİ — kuş uçuşu k-en-yakın komşu
# ═══════════════════════════════════════════════════════════════════════
def km_arasi(a, b):
    """İki (lat, lon) arasında büyük daire uzaklığı (km)."""
    la1, lo1 = math.radians(a[0]), math.radians(a[1])
    la2, lo2 = math.radians(b[0]), math.radians(b[1])
    return 6371.0 * 2 * math.asin(math.sqrt(
        math.sin((la2 - la1) / 2) ** 2 +
        math.cos(la1) * math.cos(la2) * math.sin((lo2 - lo1) / 2) ** 2))


def adaylar(dugumler, k=3, taban_km=25.0, tavan_km=1400.0):
    """k-en-yakın komşu çiftleri. Çift TEK KEZ döner (a<b sırasıyla).

    🟢 İKİ SINIR DA ÖLÇÜLDÜ — sezgiden değil, Osmanlı ayağının KENDİ
    kenarlarından türetildi (2 Eylül 2026, 121 kenarın koordinattan
    hesaplanan uzunluğu; `km` alanı dolu olan 85 kenar aynı sonucu veriyor):

        min  3,4 · %5  25,6 · %10  37,9 · ortanca 84,9 · %90 158,2 · max 1388,5

    `taban_km=25` — 5. yüzdelik. Altındaki tek gerçek kenar **İstanbul-Üsküdar
        boğaz geçişi (3,4 km)** ve o bir MENZİL AYAĞI DEĞİL, bir GEÇİT:
        elle yazılmış özel bir kenar. ⇒ Taban **türetilen kara koridorları**
        için geçerlidir; elle yazılan geçit/boğaz kenarlarını BAĞLAMAZ.
        📌 Niçin gerekli: tabansız üretimde ilk beş aday `Caparra ↔ San Juan`
        (4,5 km) · `Trujillo ↔ Chan Chan` (5,2 km) gibi **aynı yerin iki
        noktası** çıkıyordu — menzil kenarı değil.
        ÖLÇÜLDÜ: taban 25 km, 2516 adayın **40'ını** eler (%1,6).
    `tavan_km=1400` — ölçülen en uzun gerçek kenar 1388,5 km. Önceki
        değer 1200'dü ve **UYDURMAYDI**; ölçüm onu çürüttü (gerçek kenar
        tavanın üstünde kalıyordu).
    ⚠️ Ve tavanın kendisi bir MODEL kararıdır: 1388 km'lik bir kenar bir
        yol değil bir ÖZETtir. Tavanı düşürmek meşrudur ama o zaman
        gerçek kenarların bir kısmı da elenir — karar koordinatörün.
    """
    cift = {}
    for i, a in enumerate(dugumler):
        uzak = sorted(
            ((km_arasi((a["lat"], a["lon"]), (b["lat"], b["lon"])), j)
             for j, b in enumerate(dugumler) if j != i))[:k]
        for d, j in uzak:
            if d < taban_km or d > tavan_km:
                continue
            anahtar = (min(i, j), max(i, j))
            if anahtar not in cift or d < cift[anahtar]:
                cift[anahtar] = d
    return sorted((d, i, j) for (i, j), d in cift.items())


# ═══════════════════════════════════════════════════════════════════════
# ② KÜÇÜK KUTU
# ═══════════════════════════════════════════════════════════════════════
def kutu_cifte(a, b, pay=0.20, en_az_derece=0.5):
    """Çifti çevreleyen kutu + pay. `maliyet.py` sırası: (lon0, lat0, lon1, lat1).

    `pay` — kenarların dışına bırakılan boşluk oranı. Yol düz gitmez;
    dağ silsilesi dolambaç dayatırsa kutu onu kapsamalı.
    `en_az_derece` — çok yakın çiftlerde kutu bir hücreye çökmesin diye taban.
    """
    lo0, lo1 = sorted((a["lon"], b["lon"]))
    la0, la1 = sorted((a["lat"], b["lat"]))
    dlo = max(lo1 - lo0, en_az_derece) * pay
    dla = max(la1 - la0, en_az_derece) * pay
    return (lo0 - dlo, la0 - dla, lo1 + dlo, la1 + dla)


# ═══════════════════════════════════════════════════════════════════════
# ③ TEK KAYNAKLI DIJKSTRA + GERİ YÜRÜME
# ═══════════════════════════════════════════════════════════════════════
def _hucre(kutu, adim, lat, lon):
    lon0, lat0, lon1, lat1 = kutu
    return int((lat - lat0) / adim), int((lon - lon0) / adim)


def _en_yakin_kara(fr, j, i, ny, nx, yaricap=8):
    """Nokta DENİZ hücresine düştüyse en yakın KARA hücresine kaydır.

    `maliyet_mesafe`in aynı davranışı (kıyı yuvarlaması). Sessiz eleme yasak:
    kaydırma yapılmazsa düğüm kendi yolunu hiç kuramaz ve KAYBOLUR.
    """
    if 0 <= j < ny and 0 <= i < nx and fr[j][i] != M.DENIZ:
        return j, i
    for r in range(1, yaricap + 1):
        for dj in range(-r, r + 1):
            for di in range(-r, r + 1):
                if max(abs(dj), abs(di)) != r:
                    continue
                jj, ii = j + dj, i + di
                if 0 <= jj < ny and 0 <= ii < nx and fr[jj][ii] != M.DENIZ:
                    return jj, ii
    return None


def guzergah(kutu, adim, fr, nehir, bas, son):
    """TEK KAYNAKLI Dijkstra + geri yürüme → güzergâh.

    Dönüş: sözlük
        cizgi          [(lat, lon), …]  · bulunamadıysa []
        maliyet        birikmiş bedel (km cinsinden, sürtünmeyle ağırlıklı)
        km             çizginin gerçek uzunluğu
        kenara_yapisti True ise VARSAYIM ÇÜRÜMÜŞ olabilir — kutu büyütülmeli
        uyari          [] ya da açıklama satırları

    🔴 Kademe ağırlığı BÖLENİ KULLANILMIYOR — dosya başındaki gerekçe.
    """
    lon0, lat0, lon1, lat1 = kutu
    nx, ny = M.izgara(kutu, adim)
    uyari = []

    bj, bi = _hucre(kutu, adim, bas["lat"], bas["lon"])
    sj, si = _hucre(kutu, adim, son["lat"], son["lon"])
    b = _en_yakin_kara(fr, bj, bi, ny, nx)
    s = _en_yakin_kara(fr, sj, si, ny, nx)
    if b is None or s is None:
        return {"cizgi": [], "maliyet": None, "km": None, "kenara_yapisti": False,
                "uyari": ["🔴 başlangıç ya da bitiş KARA hücresine oturmadı — "
                          "deniz aşırı çift olabilir, kara koridoru kurulamaz"]}
    if (b != (bj, bi)) or (s != (sj, si)):
        uyari.append("🟡 uç nokta(lar) en yakın kara hücresine kaydırıldı "
                     "(kıyı yuvarlaması) — maliyet_mesafe ile aynı davranış")

    INF = float("inf")
    skor = [[INF] * nx for _ in range(ny)]
    onceki = [[None] * nx for _ in range(ny)]
    bj, bi = b
    skor[bj][bi] = 0.0
    yigin = [(0.0, bj, bi)]
    hedef = s
    while yigin:
        d, j, i = heapq.heappop(yigin)
        if d > skor[j][i]:
            continue
        if (j, i) == hedef:
            break
        lat = lat0 + (j + 0.5) * adim
        for dj, di in ((1, 0), (-1, 0), (0, 1), (0, -1),
                       (1, 1), (1, -1), (-1, 1), (-1, -1)):
            jj, ii = j + dj, i + di
            if not (0 <= ii < nx and 0 <= jj < ny):
                continue
            f = fr[jj][ii]
            if f == M.DENIZ:
                continue
            dkm = math.hypot(M._km_enlem(dj * adim), M._km_boylam(di * adim, lat))
            bedel = dkm * f
            if nehir[jj][ii] and not nehir[j][i]:
                bedel += M.NEHIR_BEDELI
            yeni = d + bedel
            if yeni < skor[jj][ii]:
                skor[jj][ii] = yeni
                onceki[jj][ii] = (j, i)
                heapq.heappush(yigin, (yeni, jj, ii))

    if skor[hedef[0]][hedef[1]] == INF:
        return {"cizgi": [], "maliyet": None, "km": None, "kenara_yapisti": False,
                "uyari": uyari + ["🔴 hedefe ULAŞILAMADI — kutu içinde kesintisiz "
                                  "kara yolu yok (ada/deniz ayrımı ya da kutu dar)"]}

    # geri yürüme
    yol = []
    dur = hedef
    while dur is not None:
        j, i = dur
        yol.append((lat0 + (j + 0.5) * adim, lon0 + (i + 0.5) * adim))
        dur = onceki[j][i]
    yol.reverse()

    # 🔴 VARSAYIM SINAVI — yol kutunun kenarına yapıştı mı?
    kenar = 0
    for j, i in ((int((p[0] - lat0) / adim), int((p[1] - lon0) / adim)) for p in yol):
        if i <= 0 or j <= 0 or i >= nx - 1 or j >= ny - 1:
            kenar += 1
    yapisti = kenar > 0
    if yapisti:
        uyari.append(
            "🔴 GÜZERGÂH KUTUNUN KENARINA YAPIŞTI (%d hücre). Bu, dosya başındaki "
            "SINANMAMIŞ VARSAYIMIN çürüdüğü anlamına gelebilir: gerçek en ucuz yol "
            "kutunun DIŞINDAN geçiyor olabilir. Kutu payı büyütülüp TEKRAR "
            "koşulmalı — bu çizgi olduğu gibi KULLANILMAMALI." % kenar)

    uz = sum(km_arasi(yol[t], yol[t + 1]) for t in range(len(yol) - 1))
    return {"cizgi": yol, "maliyet": skor[hedef[0]][hedef[1]], "km": uz,
            "kenara_yapisti": yapisti, "uyari": uyari,
            "agirlik_kullanildi": False}


# ═══════════════════════════════════════════════════════════════════════
# ④ SADELEŞTİRME — Douglas-Peucker (km toleransıyla)
# ═══════════════════════════════════════════════════════════════════════
def _dik_km(p, a, b):
    """p noktasının a-b doğrusuna dik uzaklığı (km, küçük ölçekte düzlem kabulü)."""
    lat = math.radians((a[0] + b[0]) / 2)
    ax, ay = a[1] * math.cos(lat) * 111.32, a[0] * 111.32
    bx, by = b[1] * math.cos(lat) * 111.32, b[0] * 111.32
    px, py = p[1] * math.cos(lat) * 111.32, p[0] * 111.32
    dx, dy = bx - ax, by - ay
    n = math.hypot(dx, dy)
    if n < 1e-9:
        return math.hypot(px - ax, py - ay)
    return abs(dy * px - dx * py + bx * ay - by * ax) / n


def sadelestir(cizgi, tol_km=3.0):
    """Douglas-Peucker. Izgara basamaklarını atar, dönüşleri KORUR."""
    if len(cizgi) < 3:
        return list(cizgi)
    en, k = -1.0, 0
    for t in range(1, len(cizgi) - 1):
        d = _dik_km(cizgi[t], cizgi[0], cizgi[-1])
        if d > en:
            en, k = d, t
    if en <= tol_km:
        return [cizgi[0], cizgi[-1]]
    return sadelestir(cizgi[:k + 1], tol_km)[:-1] + sadelestir(cizgi[k:], tol_km)


# ═══════════════════════════════════════════════════════════════════════
# CLI
# ═══════════════════════════════════════════════════════════════════════
def _sinav(dem=False, adim=0.05):
    """GEÇME YOLU + ATEŞLEME YOLU — ikisi de koşulur (§11 C13).

    Sınav çifti Osmanlı ayağından seçildi ki sonuç bilinen bir şeyle
    karşılaştırılabilsin: Üsküdar → Gebze (koridor.js anadolu/sag#1).
    """
    Y = {y["ad"]: y for y in girdi.yukle(sessiz=True)}
    a, b = Y.get("Üsküdar"), Y.get("Gebze")
    if not a or not b:
        print("🔴 sınav noktaları veride yok:", "Üsküdar" if not a else "", "Gebze" if not b else "")
        return 1
    print("SINAV ÇİFTİ  %s (%.3f, %.3f) → %s (%.3f, %.3f)  kuş uçuşu %.1f km"
          % (a["ad"], a["lat"], a["lon"], b["ad"], b["lat"], b["lon"],
             km_arasi((a["lat"], a["lon"]), (b["lat"], b["lon"]))))

    # `surtunme_sec` ÜÇLÜ döner: (fr, nehir, bilgi) — `maliyet.py:398/405`
    print("\n── ① GEÇME YOLU — normal pay (%0.20) ──")
    kutu = kutu_cifte(a, b, pay=0.20)
    fr, nehir, bilgi = M.surtunme_sec(kutu, adim, dem=dem, sessiz=True)
    print("   sürtünme kaynağı: %s · eğim: %s" % (bilgi.get("kaynak"), bilgi.get("egim")))
    r = guzergah(kutu, adim, fr, nehir, a, b)
    _bas(r, adim)

    print("\n── ② ATEŞLEME YOLU — pay SIFIRA çekildi, uyarı ötmeli ──")
    kutu2 = kutu_cifte(a, b, pay=0.0, en_az_derece=0.0)
    fr2, nehir2, _ = M.surtunme_sec(kutu2, adim, dem=dem, sessiz=True)
    r2 = guzergah(kutu2, adim, fr2, nehir2, a, b)
    _bas(r2, adim)
    if not (r2["kenara_yapisti"] or r2["uyari"]):
        print("🔴 ATEŞLEME BAŞARISIZ — pay sıfırken bile uyarı ötmedi. "
              "Bu dal SINANMAMIŞ sayılır (§11 C13).")
        return 1
    print("\n🟢 İKİ YOL DA SINANDI: geçme yolu koştu, ateşleme yolu ÖTTÜ.")
    return 0


def _bas(r, adim):
    print("   çizgi hücre: %s · km: %s · maliyet: %s"
          % (len(r["cizgi"]),
             "%.1f" % r["km"] if r["km"] is not None else "—",
             "%.1f" % r["maliyet"] if r["maliyet"] is not None else "—"))
    if r["cizgi"]:
        s = sadelestir(r["cizgi"], 3.0)
        print("   sadeleştirilmiş düğüm: %d  (%.0f%% seyreltme)"
              % (len(s), 100.0 * (1 - len(s) / len(r["cizgi"]))))
    for u in r["uyari"]:
        print("   " + u)


def _cift():
    """Aday çift üretimi — RASTER YOK, saniyeler sürer."""
    Y = girdi.yukle(sessiz=True)
    KLA1, KLO1, KLA2, KLO2 = 21.42, 12.33, 49.84, 48.05
    dis = [y for y in Y
           if not (KLA1 <= y["lat"] <= KLA2 and KLO1 <= y["lon"] <= KLO2)
           and (y.get("k") or 0) in (1, 2, 3)]
    print("koridor kutusu DIŞINDA k1-k3 yerleşim:", len(dis))
    c = adaylar(dis, k=3)
    print("aday çift (k=3, tavan 1200 km):", len(c))
    if c:
        uz = [d for d, _, _ in c]
        uz.sort()
        print("uzunluk: en kısa %.0f km · ortanca %.0f · en uzun %.0f"
              % (uz[0], uz[len(uz) // 2], uz[-1]))
        print("ilk beş:")
        for d, i, j in c[:5]:
            print("   %-26s ↔ %-26s %7.1f km" % (dis[i]["ad"], dis[j]["ad"], d))
    return 0


def main(argv):
    komut = argv[1] if len(argv) > 1 else "sinav"
    dem = "--dem" in argv
    if komut == "sinav":
        return _sinav(dem=dem)
    if komut == "cift":
        return _cift()
    print(__doc__)
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
