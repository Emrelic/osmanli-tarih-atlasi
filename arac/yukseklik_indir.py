# -*- coding: utf-8 -*-
"""yukseklik_indir.py — ETOPO 2022 30" · ATLAS PENCERESİNİ kırpıp indirir.

🔴 TÜM DOSYA İNDİRİLMİYOR. Kaynak 1,59 GB'lık küresel bir GeoTIFF ama
**bloklu** (256×256) ve deflate sıkıştırmalı ⇒ GDAL `/vsicurl/` ile
YALNIZ atlas penceresine düşen bloklar çekiliyor. Emre'nin kotası bunu
hak ediyor: küresel dosyanın %75'i atlasın hiç bakmadığı yer.

    py arac/yukseklik_indir.py            indir (varsa DOKUNMAZ)
    py arac/yukseklik_indir.py --zorla    yeniden indir

Kaynak : NOAA NCEI · ETOPO 2022 v1 · 30 arc-sn (~0,9 km) yüzey yüksekliği
Lisans : kamu malı (US Gov work) — `KAYNAK.md` yazılıyor
Neden ETOPO değil GMTED: ikisi de uygundu; ETOPO **tek dosya** ve
`/vsicurl/` ile kırpılabiliyor. GMTED 30 ayrı karo indirmeyi ve birleştirme
adımını gerektirirdi — aynı sonuç, fazladan bir hata yüzeyi.
🔴 SRTM elendi: 60°K'ye kadar var, atlas 82°K'ye çıkıyor.

⚠️ float32 → int16'ya çevriliyor. Yükseklik METRE cinsindendir; ondalık
bir metre bu projede hiçbir soruyu değiştirmez, ama dosyayı İKİ KAT
büyütür. (Deniz altı değerleri de saklanıyor — maskeleme motorun işi,
verinin değil: veriyi kırpmak geri alınamaz, maskelemek alınabilir.)
"""
import io
import os
import sys
import time

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIZIN = os.path.join(KOK, "veri-kaynak", "yukseklik")
CIKTI = os.path.join(DIZIN, "etopo2022_30s_atlas.tif")
KAYNAK_URL = ("https://www.ngdc.noaa.gov/mgg/global/relief/ETOPO2022/data/"
              "30s/30s_surface_elev_gtif/ETOPO_2022_v1_30s_N90W180_surface.tif")
UZAK = "/vsicurl/" + KAYNAK_URL

# Atlas penceresi (`uret_petek.py` BOLGE) — bbox'ı:
#   unary_union([box(-12,-11,146,82), box(-25,60,-12,82)])
# ⚠️ Kutunun kendisi L şeklinde; burada BBOX kırpılıyor (dikdörtgen).
# Sebep: raster dikdörtgendir ve L'yi kesmek yalnız köşeyi kazanır,
# karşılığında bir maske bakımı getirir. Fazla veri zararsız, EKSİK
# veri zararlıdır.
PENCERE = (-25.0, -11.0, 146.0, 82.0)   # lon0, lat0, lon1, lat1

# 🔴 DÜNYA — 15 Ağustos, Emre: "dünyanın hepsini eklesek ve motora bağlasak."
# Atlas penceresi dünya yüzeyinin **%26**'sı; kalan %74'te bugün 173 nokta
# var (Amerika 134 · Okyanusya 35 · Güney Afrika 4) ve HARİTADA ÇİZİLMİYOR.
# Nokta yazmak yetmiyor — pencere açılmadan görünmezler.
# ⚠️ Ve dünya kutusu ±90° DEĞİL: ETOPO ±90'a kadar var ama kutup
# takkelerinde yerleşim yok ve raster boyutu iki katına çıkıyor. -60…84
# kesimi bütün kara kütlelerini kapsar (Antarktika hariç — orada 1281-1923
# arası yerleşim YOKTUR).
DUNYA = (-180.0, -60.0, 180.0, 84.0)


def _tam_mi():
    """Dosya BÜTÜN mü — (bool, gerekçe). VARLIK bütünlük demek değildir.

    🔴 İki ayrı şey sorulur ve ikisi de gerekir:
      ① BOYUT   beklenen ızgara (20520 × 11160) tutuyor mu
      ② İÇERİK  SON satır şeridi okunabiliyor mu, ve tamamı nodata mı
                (kesik bir GeoTIFF'in kuyruğu ya hata verir ya boş gelir)
    ②'siz denetim yetmez: kesik dosyanın başlığı doğru boyutu YAZAR,
    veri bloğu eksik olsa bile. Başlığa inanmak, aletin gösterdiğine
    inanmaktır — dosyada yazanı okumak gerekir (`§11`).
    """
    import numpy as np
    import rasterio
    try:
        with rasterio.open(CIKTI) as s:
            g = int(round((PENCERE[2] - PENCERE[0]) / 0.008333333333333333))
            y = int(round((PENCERE[3] - PENCERE[1]) / 0.008333333333333333))
            if abs(s.width - g) > 2 or abs(s.height - y) > 2:
                return False, ("boyut tutmuyor: %dx%d, beklenen ~%dx%d"
                               % (s.width, s.height, g, y))
            son = s.read(1, window=rasterio.windows.Window(
                0, max(0, s.height - 8), min(s.width, 4096), 8))
    except Exception as e:
        return False, "okunamadı: %s" % str(e)[:90]
    if not np.any(son != -32768):
        return False, "SON şerit tamamen boş — yazım yarıda kalmış"
    return True, "boyut ✓ · son şerit ✓"


def indir(zorla=False, dunya=False):
    import numpy as np
    import rasterio
    from rasterio.windows import from_bounds
    global CIKTI, PENCERE
    if dunya:
        CIKTI = os.path.join(DIZIN, "etopo2022_30s_dunya.tif")
        PENCERE = DUNYA
    os.makedirs(DIZIN, exist_ok=True)
    if os.path.exists(CIKTI) and not zorla:
        mb = os.path.getsize(CIKTI) / 1048576.0
        tam, neden = _tam_mi()
        if tam:
            print("🟢 zaten var ve TAM: %s (%.1f MB) — dokunulmadı"
                  % (os.path.relpath(CIKTI, KOK), mb))
            return 0
        # 🔴 YARIM DOSYA, "VAR" DEMEK DEĞİLDİR.
        # Doğuran vaka (15 Ağustos 2026): indirme arka planda koşarken
        # kullanıcı uygulamayı güncellemek istedi. Süreç ölseydi 176 MB'lık
        # KESİK bir dosya kalacaktı ve bu fonksiyon ona "zaten var,
        # dokunmuyorum" diyecekti. Motor onu okuyup EKSİK bir yükseklik
        # katmanıyla çalışacak, ve eksiklik yalnız GÜNEY YARIDA görünecekti
        # — yani hiç fark edilmeyecekti.
        # 📌 `§11`in "ölçemediğini eleyen süzgeç onu temiz sayar" dersinin
        # dosya tarafı: VARLIK, BÜTÜNLÜK demek değildir.
        print("🔴 YARIM DOSYA (%.1f MB) — %s" % (mb, neden))
        print("   yeniden indiriliyor (yarım dosya SİLİNMİYOR, üzerine yazılıyor)")
    t0 = time.time()
    print("kaynak açılıyor (uzaktan, blok blok)...")
    with rasterio.open(UZAK) as s:
        print("  küresel: %d x %d · %s · %s"
              % (s.width, s.height, s.dtypes[0], s.crs))
        p = from_bounds(*PENCERE, transform=s.transform)
        sut0, sut1 = int(p.col_off), int(p.col_off + p.width)
        sat0, sat1 = int(p.row_off), int(p.row_off + p.height)
        g, y = sut1 - sut0, sat1 - sat0
        print("  pencere: %d x %d piksel (%.0f M) · %.1f%% küresel alan"
              % (g, y, g * y / 1e6, 100.0 * g * y / (s.width * s.height)))
        prof = s.profile.copy()
        prof.update(dtype="int16", count=1, width=g, height=y, compress="deflate",
                    predictor=2, tiled=True, blockxsize=256, blockysize=256,
                    nodata=-32768,
                    transform=rasterio.windows.transform(p, s.transform))
        # 🔴 SATIR ŞERİDİ ŞERİDİ: 229 M piksel tek seferde float32 olarak
        # okunsa ~900 MB RAM ister. Şerit şerit okuyup yazmak hem belleği
        # hem de "yarıda kaldı" hâlini yönetilebilir kılar.
        SERIT = 512
        with rasterio.open(CIKTI, "w", **prof) as h:
            for i, r0 in enumerate(range(0, y, SERIT)):
                r1 = min(r0 + SERIT, y)
                pen = rasterio.windows.Window(sut0, sat0 + r0, g, r1 - r0)
                a = s.read(1, window=pen)
                a = np.where(np.isfinite(a), a, -32768)
                h.write(np.clip(a, -32768, 32767).astype("int16"), 1,
                        window=rasterio.windows.Window(0, r0, g, r1 - r0))
                gecen = time.time() - t0
                print("  %5.1f%%  satır %6d/%d  ·  %5.1f dk  ·  %.1f MB"
                      % (100.0 * r1 / y, r1, y, gecen / 60,
                         os.path.getsize(CIKTI) / 1048576.0), flush=True)
    mb = os.path.getsize(CIKTI) / 1048576.0
    print("\n🟢 BİTTİ: %s · %.1f MB · %.1f dk"
          % (os.path.relpath(CIKTI, KOK), mb, (time.time() - t0) / 60))
    _kaynak_yaz(mb)
    return 0


def _kaynak_yaz(mb):
    """🔴 `§4`: kaynağı yazılmayan bilgi, kaynağı olmayandan AYIRT EDİLEMEZ."""
    io.open(os.path.join(DIZIN, "KAYNAK.md"), "w", encoding="utf-8",
            newline="\n").write("""# YÜKSEKLİK VERİSİ — kaynak künyesi

| alan | değer |
|---|---|
| veri seti | **ETOPO 2022 v1**, 30 arc-saniye, yüzey yüksekliği (ice surface) |
| kurum | NOAA · National Centers for Environmental Information (NCEI) |
| lisans | **kamu malı** — ABD devlet eseri, kısıtsız kullanım |
| DOI | 10.25921/fd45-gt74 |
| indirme | %s |
| indirilme | %s |
| kırpma | atlas penceresi bbox: lon -25…146 · lat -11…82 |
| dönüşüm | float32 → **int16** (metre), deflate + predictor 2 |
| yerel dosya | `etopo2022_30s_atlas.tif` · %.1f MB |

## Niçin bu veri

`ALTYAPI ①` yükseklik/eğim istiyor; depoda hiç yoktu ve `maliyet.py`
sürtünme motoru eğimsiz çalışıyordu. Üç aday ölçüldü:

- **ETOPO 2022 30"** 🟢 seçildi — tek dosya, `/vsicurl/` ile kırpılabilir
- GMTED2010 30" — eşdeğer kalite, ama 30 ayrı karo + birleştirme adımı
- SRTM 90 m — 🔴 **elendi**: yalnız 60°K'ye kadar, atlas 82°K'ye çıkıyor

## Ne YAPILMADI

- Deniz altı değerleri **silinmedi**. Maskeleme motorun işi; veriyi
  kırpmak geri alınamaz, maskelemek alınabilir.
- Eğim çarpanı **uydurulmadı** — bilinen güzergâh üzerinde ölçülerek
  ayarlanacak (`ALTYAPI §1.2b`nin dersi: ağırlık tablosu bir kez
  uydurulmuştu, ölçüm onu değiştirdi).
""" % (KAYNAK_URL, time.strftime("%Y-%m-%d %H:%M"), mb))
    print("🟢 KAYNAK.md yazıldı.")


if __name__ == "__main__":
    a = sys.argv[1:]
    sys.exit(indir("--zorla" in a, "--dunya" in a))
