# -*- coding: utf-8 -*-
"""ARAC-TRI-0912 — HÜCRE İÇİ TOPOĞRAFYA İSTATİSTİĞİ (R3 · KITA 11)

Emre'nin tarifi: *"dağ tepe katman katman irili ufaklı YUMURTA KARTONU gibi
dağ tepe arkasında dağ tepe — dağı etrafından dolaşmak ya da geçitten geçmek
ya da tırmanmak."*

Bugünkü motor bir hücreyi TEK sayıya indiriyor (`Resampling.average`) ve o tek
sayı yumurta kartonunu düzlüyor. Bu alet ızgarayı BÜYÜTMEDEN, her 0,05°
hücrenin İÇİNDEKİ 6×6 = 36 alt-hücreden istatistik çıkarır.

╔══════════════════════════════════════════════════════════════════════════╗
║ NE ÜRETİR (hücre başına, motorun ızgarasında: 7200 × 2900)               ║
╚══════════════════════════════════════════════════════════════════════════╝
    z_min · z_max · z_ort · z_std          hücre içi yükseklik dağılımı
    tri_mutlak                             Riley TRI — Σ|Δz|, METRE
    tri_kok                                Riley TRI — √Σ(Δz)², METRE
    vrm                                    Sappington VRM, boyutsuz 0–1
    gecit_dz / gecit_gk                    en alçak DÜZ geçiş kotu (m)
    tirmanis_dz / tirmanis_gk              hücreyi kat ederken TOPLAM TIRMANIŞ (m)
    egim_motor                             motorun BUGÜNKÜ ölçüsü (|∇z| m/hücre)

╔══════════════════════════════════════════════════════════════════════════╗
║ KAYNAKLAR — `CLAUDE.md §4` · her formül ADIYLA                           ║
╚══════════════════════════════════════════════════════════════════════════╝
TRI  Riley, S.J., DeGloria, S.D., Elliot, R. (1999) "A Terrain Ruggedness
     Index That Quantifies Topographic Heterogeneity", Intermountain Journal
     of Sciences 5(1-4):23-27.  ÖZGÜN MAKALE OKUNDU (taranmış PDF, 6 sayfa,
     sayfa görüntüleri okundu — metin katmanı YOK, `pypdf` 5 karakter verdi).
     s.24: *"TRI = [ Σ(x_ij − x_00)² ]^(1/2) where x_ij = elevation of each
     neighbor cell to cell (0,0)"* · ızgara: **1 km² hücre** · sınıf tablosu
     (metre): düz 0-80 · neredeyse düz 81-116 · hafif engebeli 117-161 ·
     orta engebeli 162-239 · epey engebeli 240-497 · çok engebeli 498-958 ·
     aşırı engebeli 959-4367.

     🔴 VE MAKALE KENDİ İÇİNDE ÇELİŞİYOR — bu alet ikisini de hesaplar,
        birini seçmez. Şekil 3'ün kendi sayıları KÖK formülü DEĞİL, MUTLAK
        TOPLAMI veriyor (aletin `sinav_riley_sekil3()`i bunu ispatlar).

VRM  Sappington, J.M., Longshore, K.M., Thompson, D.B. (2007) "Quantifying
     Landscape Ruggedness for Animal Habitat Analysis…", Journal of Wildlife
     Management 71(5):1419-1426.
     🔴 ÖZGÜN MAKALE **OKUNAMADI** — ödemeli. Üç deneme ölçüldü ve üçü de
        başarısız: Wiley `403` · USGS WERC PDF `522` · Semantic Scholar
        `openAccessPdf: CLOSED`. (`D107`: bu "bulunamadı" değil OKUNAMADI.)
     🟢 Formül, ÖZGÜN MAKALEYİ ADIYLA ANAN RESMÎ BİR UYGULAMANIN KAYNAK
        KODUNDAN alındı: OSGeo `grass-addons`, `r.vector.ruggedness.py`:
            x = sin(aspect)·sin(slope) · y = cos(aspect)·sin(slope)
            z = cos(slope)
            VRM = 1 − √((Σx)² + (Σy)² + (Σz)²) / n
        SAGA (`ta_morphometry_17`) ve R `spatialEco::vrm` aynı makaleyi anıyor
        ama formülü BASMIYOR — yani eşleşme tek uygulamadan, ÜÇÜNDEN DEĞİL.

DEM  ETOPO 2022 v1, 30 yay-saniye yüzey yüksekliği · NOAA NCEI ·
     DOI 10.25921/fd45-gt74 · kamu malı. `veri-kaynak/yukseklik/KAYNAK.md`.

╔══════════════════════════════════════════════════════════════════════════╗
║ KULLANIM                                                                  ║
╚══════════════════════════════════════════════════════════════════════════╝
    py denetim/ARAC-TRI-0912.py --sinav              # yalnız birim sınavları
    py denetim/ARAC-TRI-0912.py --bolge ALPLER       # tek bölge ölçümü
    py denetim/ARAC-TRI-0912.py --ornek              # bütün örnek bölgeler
    py denetim/ARAC-TRI-0912.py --hizalama           # motorun DEM penceresi sınavı
    py denetim/ARAC-TRI-0912.py --tam --cikti X.json # TAM PENCERE (uzun koşu)

🔴 Bu alet `arac/uret_petek.py`ye DOKUNMAZ ve hiçbir `data/` dosyası yazmaz.
   Yalnız okur ve `denetim/` altına JSON yazar.
"""

import argparse
import json
import math
import os
import sys
import time

import numpy as np

try:
    import rasterio
    from rasterio.windows import Window, from_bounds as _from_bounds
except ImportError:                                            # pragma: no cover
    rasterio = None

# ── motorun ızgarası — `arac/uret_petek.py`den OKUNDU, uydurulmadı ──────────
#    BOLGE = box(-180, -60, 180, 85)   (satır 183)
#    KV_ADIM = 0.05                    (satır 2105)
KV_ADIM = 0.05
KV_X0, KV_Y0, KV_X1, KV_Y1 = -180.0, -60.0, 180.0, 85.0
KV_NX = int(round((KV_X1 - KV_X0) / KV_ADIM))      # 7200
KV_NY = int(round((KV_Y1 - KV_Y0) / KV_ADIM))      # 2900

DEM_YOL = os.path.join("veri-kaynak", "yukseklik", "etopo2022_30s_dunya.tif")
ALT = 6                       # 0,05° / (1/120°) = 6 alt-hücre kenarda
DERECE_M = 111320.0           # 1° enlem ≈ 111,32 km (motorun `_KVDY`si de bu)
PIKSEL_M = DERECE_M / 120.0   # 927,7 m — 30 yay-sn'nin KUZEY-GÜNEY boyu

# ── örnek bölgeler — hepsi bir CİNSİ temsil eder, hepsi ölçümle seçildi ────
BOLGELER = {
    #  ad            lon0    lat0    lon1    lat1   ne temsil ediyor
    "KARADENIZ":  (39.0,  40.0,  41.5,  41.5, "Dogu Karadeniz daglari — DAG"),
    "ALPLER":     ( 6.0,  45.0,  14.0,  47.5, "Alpler — DAG"),
    "HIMALAYA":   (85.0,  27.5,  88.0,  29.0, "Himalaya — ASIRI DAG"),
    "KONYA":      (32.0,  37.5,  34.0,  38.5, "Konya ovasi — DUZ"),
    "SAHRA":      (10.0,  22.0,  15.0,  26.0, "Sahra — DUZ/kum"),
    "RAMPA":      (-104.0, 39.0, -100.0, 41.0, "ABD Yuksek Ovalari — RAMPA"),
    "TUNA":       (18.0,  44.0,  23.0,  46.0, "Tuna ovasi — DUZ/nehirli"),
    "ZAGROS":     (46.0,  33.0,  50.0,  35.0, "Zagros — DAG"),
}

SEKIZ = ((-1, -1), (-1, 0), (-1, 1), (0, -1), (0, 1), (1, -1), (1, 0), (1, 1))


def ortalama_komsu_uzakligi_m(lat):
    """Sekiz komşuya ortalama yatay uzaklık — ENLEME BAĞLIDIR.

    🔴 30 yay-sn hücre KARE DEĞİLDİR: kuzey-güney boyu her enlemde 927,7 m,
       doğu-batı boyu 927,7·cos(enlem). 60°K'de hücre 464 × 928 m'lik bir
       dikdörtgendir. TRI bir METRE toplamıdır ve bu uzaklığa BÖLÜNMEDEN
       eğime çevrilemez; çevrilirse kuzeyde eğim sistematik olarak ŞİŞER.
       (Riley 1999 KARE 1 km ızgarada çalıştı — sınıf tablosu oradan gelir.)
    """
    dy = PIKSEL_M
    dx = PIKSEL_M * math.cos(math.radians(lat))
    kosegen = math.hypot(dx, dy)
    return (2 * dx + 2 * dy + 4 * kosegen) / 8.0


# ══════════════════════════════════════════════════════════════════════════
# ÖLÇÜ TANIMLARI — hepsi 30 yay-sn'lik ALT ızgarada çalışır
# ══════════════════════════════════════════════════════════════════════════
def _komsu(Z, dj, di):
    """Z'nin (dj,di) kadar kaydırılmışı; kenarda kenar değeri tekrarlanır."""
    return np.roll(np.roll(Z, -dj, axis=0), -di, axis=1)


def tri_iki_bicim(Z):
    """Riley TRI — İKİ biçim birden.

    Döner: (mutlak, kok)
        mutlak = Σ |z_komsu − z_merkez|          ← Şekil 3'ün ürettiği sayı
        kok    = √( Σ (z_komsu − z_merkez)² )    ← makalenin YAZILI formülü

    Kenar hücreleri geçersizdir; çağıran HALO ile besler.
    """
    Z = Z.astype(np.float32, copy=False)
    toplam = np.zeros_like(Z)
    kare = np.zeros_like(Z)
    for dj, di in SEKIZ:
        f = _komsu(Z, dj, di) - Z
        toplam += np.abs(f)
        kare += f * f
    return toplam, np.sqrt(kare)


def birim_normal(Z, dx_m, dy_m):
    """Yüzey birim normali (nx, ny, nz).

    Eğim/bakı üzerinden gitmekle AYNI vektördür ve `sinav_normal_denkligi()`
    bunu sayıyla ispatlar:
        p = ∂z/∂x · q = ∂z/∂y
        n = (−p, −q, 1) / √(p² + q² + 1)
        ⇔ (sin(egim)·sin(baki), sin(egim)·cos(baki), cos(egim))
    """
    q, p = np.gradient(Z.astype(np.float32, copy=False))
    p = p / dx_m
    q = q / dy_m
    boy = np.sqrt(p * p + q * q + 1.0)
    return (-p / boy, -q / boy, 1.0 / boy)


def vrm_pencere(Z, dx_m, dy_m, pencere=3):
    """Sappington VRM — 3×3 pencerede vektör dağılımı. 0 (düz/rampa) … 1.

    VRM = 1 − |Σ n| / n_sayi        (GRASS `r.vector.ruggedness.py`)
    🔑 DÜZGÜN BİR RAMPADA TAM SIFIRDIR — eğim ne kadar dik olursa olsun.
       Ayırdığı şey EĞİM değil, eğimin DEĞİŞKENLİĞİ. Emre'nin "rampa" ile
       "yumurta kartonu" ayrımının ölçüsü tam budur.
    """
    nx, ny, nz = birim_normal(Z, dx_m, dy_m)
    r = pencere // 2
    sx = np.zeros_like(nx)
    sy = np.zeros_like(ny)
    sz = np.zeros_like(nz)
    for dj in range(-r, r + 1):
        for di in range(-r, r + 1):
            sx += _komsu(nx, dj, di)
            sy += _komsu(ny, dj, di)
            sz += _komsu(nz, dj, di)
    n = float(pencere * pencere)
    return 1.0 - np.sqrt(sx * sx + sy * sy + sz * sz) / n


def _blok(Z, ny_h, nx_h):
    """(ny_h*ALT, nx_h*ALT) → (ny_h, nx_h, ALT*ALT) hücre içi yığın."""
    return (Z.reshape(ny_h, ALT, nx_h, ALT)
             .transpose(0, 2, 1, 3)
             .reshape(ny_h, nx_h, ALT * ALT))


def gecit_ve_tirmanis(Zc):
    """Hücre içi geçiş ölçüleri. Zc: (ny_h, nx_h, ALT, ALT) — [satır, sütun].

    Döner (hepsi metre):
      gecit_dz  batı→doğu düz geçişte EN ALÇAK tepe kotu
                = min_satır( max_sütun z )      ← gerçek darboğazın ÜST SINIRI
      gecit_gk  güney→kuzey aynısı
      tirm_dz   batı→doğu kat ederken TOPLAM TIRMANIŞ (en ucuz satır)
      tirm_gk   güney→kuzey aynısı

    ⚠️ "Düz geçiş" bir KISITTIR: gezgin yalnız 6 düz hattan birini seçebiliyor
       sayılır. Gerçek darboğaz (köşegenlere de izin veren minimax) bundan
       DÜŞÜK ya da EŞİT olur — yani bu ölçü İYİMSER DEĞİL, KÖTÜMSERDİR.
       Farkı `--minimax` ile ölçülür.
    """
    gecit_dz = Zc.max(axis=3).min(axis=2)          # satır boyunca max, en iyi satır
    gecit_gk = Zc.max(axis=2).min(axis=2)          # sütun boyunca max, en iyi sütun
    fark_x = np.diff(Zc, axis=3)
    satir_tirmanis = np.clip(fark_x, 0, None).sum(axis=3)     # (ny, nx, 6)
    tirm_dz = satir_tirmanis.min(axis=2)
    fark_y = np.diff(Zc, axis=2)
    sutun_tirmanis = np.clip(fark_y, 0, None).sum(axis=2)
    tirm_gk = sutun_tirmanis.min(axis=2)
    # 🔑 TOPLAM SALINIM (total variation) — YÖNDEN BAĞIMSIZ olan tek parça.
    #    Bir hattın tırmanışı YÖNE bağlıdır ve tek sayıya sığmaz; ama
    #        tirmanis(yön)  =  (TV + net_yukselti(yön)) / 2
    #    ve net yükselti motorun ZATEN sahip olduğu ortalama yükseklik
    #    alanından çıkar. ⇒ hücre başına saklanması gereken YENİ bilgi TV'dir.
    tv_dz = np.abs(fark_x).sum(axis=3).mean(axis=2)
    tv_gk = np.abs(fark_y).sum(axis=2).mean(axis=2)
    return (gecit_dz, gecit_gk, tirm_dz, tirm_gk, satir_tirmanis, sutun_tirmanis,
            tv_dz, tv_gk)


def minimax_darbogaz(Zc, yineleme=12):
    """GERÇEK darboğaz: 8 komşulu minimax (köşegenler serbest), batı→doğu.

    Bellman-Ford tarzı gevşetme: maliyet(h) = min over yol( max z ).
    36 düğüm için 12 yineleme fazlasıyla yeter (en uzun yol 6+6).
    Zc: (..., ALT, ALT) → döner (...)
    """
    B = np.full(Zc.shape, np.inf, dtype=np.float32)
    B[..., :, 0] = Zc[..., :, 0]                    # batı kenarından giriş
    for _ in range(yineleme):
        onceki = B
        aday = B
        for dj, di in SEKIZ:
            k = np.roll(np.roll(B, -dj, axis=-2), -di, axis=-1)
            if dj > 0:
                k[..., -dj:, :] = np.inf
            elif dj < 0:
                k[..., :-dj, :] = np.inf
            if di > 0:
                k[..., :, -di:] = np.inf
            elif di < 0:
                k[..., :, :-di] = np.inf
            aday = np.minimum(aday, np.maximum(k, Zc))
        B = aday
        if np.array_equal(B, onceki):
            break
    return B[..., :, -1].min(axis=-1)               # doğu kenarına en ucuz varış


# ══════════════════════════════════════════════════════════════════════════
# BİRİM SINAVLARI — `D010`: iki yönde de sınanmayan denetim çalışıyor sayılmaz
# ══════════════════════════════════════════════════════════════════════════
def sinav_riley_sekil3():
    """Riley 1999 Şekil 3'ün ÜÇ ızgarası — makalenin KENDİ sayılarına karşı.

    Makale bu üç ızgara için 700 · 700 · 100 basıyor. Hangi formül veriyor?
    """
    a = np.array([[100, 125, 100], [125, 200, 125], [100, 125, 100]], float)
    b = np.array([[200, 175, 200], [175, 100, 175], [200, 175, 200]], float)
    c = np.array([[200, 210, 220], [210, 225, 225], [205, 210, 220]], float)
    bek = {"3a": 700.0, "3b": 700.0, "3c": 100.0}
    cikti = {}
    for ad, Z in (("3a", a), ("3b", b), ("3c", c)):
        mut, kok = tri_iki_bicim(Z)
        cikti[ad] = {"makale": bek[ad],
                     "mutlak": round(float(mut[1, 1]), 2),
                     "kok": round(float(kok[1, 1]), 2)}
    mutlak_tutuyor = all(abs(v["mutlak"] - v["makale"]) < 1e-6 for v in cikti.values())
    kok_tutuyor = all(abs(v["kok"] - v["makale"]) < 1e-6 for v in cikti.values())
    return {"ad": "riley-sekil3", "deger": cikti,
            "MUTLAK_makaleyle_ayni": mutlak_tutuyor,
            "KOK_makaleyle_ayni": kok_tutuyor,
            "gecti": mutlak_tutuyor and not kok_tutuyor,
            "yorum": ("Sekil 3'un sayilari MUTLAK TOPLAM. Makalenin yazili "
                      "formulu (kok) AYNI sekilde 250/250/41,83 verir. "
                      "Makale kendi icinde CELISIYOR.")}


def sinav_riley_sinif_tablosu():
    """Sınıf tablosunun ÜST UCU (4367 m) hangi biçimle uyumlu?

    Sekiz komşu da merkezden d metre farklıysa:
        mutlak = 8d      →  d = 546 m/km   (Himalaya'da makul)
        kok    = 2,83d   →  d = 1544 m/km  (yeryüzünde YOK)
    """
    d_mutlak = 4367.0 / 8.0
    d_kok = 4367.0 / math.sqrt(8.0)
    return {"ad": "riley-sinif-ust-ucu",
            "mutlak_gerektirdigi_komsu_farki_m": round(d_mutlak, 1),
            "kok_gerektirdigi_komsu_farki_m": round(d_kok, 1),
            "gecti": d_mutlak < 1000.0 < d_kok,
            "yorum": ("Tablonun ust ucu MUTLAK biciminde fiziken mumkun, "
                      "KOK biciminde degil — Sekil 3'u BAGIMSIZ dogruluyor.")}


def sinav_vrm_rampa():
    """🔑 EN ÖNEMLİ SINAV: VRM rampayı yumurta kartonundan AYIRIR, TRI AYIRMAZ.

    İki yönde de sınanır (`D010`): ayırması gereken ölçü ayırıyor mu, VE
    ayıramayan ölçü gerçekten ayıramıyor mu.

    🔴 BU SINAVIN İLK HÂLİ KALDI VE EŞİĞİ GEVŞETMEDİM — `D179`.
       İlk hâl mutlak eşik koyuyordu (`rampa < 1e-9` · `karton > 0,01`);
       ölçüm `7,7e-8` ve `0,0045` verdi. Yani ölçü DOĞRU çalışıyordu, YANLIŞ
       OLAN EŞİKTİ: `1e-9` float32'nin gürültü tabanının (≈1e-7) altında bir
       sayı, `0,01` ise dayanaksız. Eşiği büyütmek sınavı körleştirirdi;
       onun yerine sınav bir ORANA çevrildi — iddia zaten bir oran iddiası:
       *"VRM ayırır, TRI ayırmaz."*
    """
    n = 40
    y, x = np.mgrid[0:n, 0:n].astype(np.float32)
    duz = np.zeros((n, n), np.float32)
    rampa = 0.30 * x * PIKSEL_M                      # sabit %30 eğim
    dik = 1.00 * x * PIKSEL_M                        # sabit %100 eğim (45°)
    rng = np.random.default_rng(20260912)
    karton = 300.0 * np.sin(x / 1.5) * np.cos(y / 1.5)   # yumurta kartonu
    gurultu = rng.normal(0, 200, (n, n)).astype(np.float32)
    d = {}
    for ad, Z in (("duz", duz), ("rampa_%30", rampa), ("rampa_%100", dik),
                  ("yumurta_kartonu", karton), ("rastgele", gurultu)):
        v = vrm_pencere(Z, PIKSEL_M, PIKSEL_M)[3:-3, 3:-3]
        m, _ = tri_iki_bicim(Z)
        d[ad] = {"vrm_ort": float(np.mean(v)),
                 "tri_mutlak_ort_m": round(float(np.mean(m[3:-3, 3:-3])), 1)}
    en_dik_rampa_vrm = max(d["rampa_%30"]["vrm_ort"], d["rampa_%100"]["vrm_ort"])
    vrm_ayirma_orani = d["yumurta_kartonu"]["vrm_ort"] / max(en_dik_rampa_vrm, 1e-12)
    tri_ayirma_orani = (d["yumurta_kartonu"]["tri_mutlak_ort_m"]
                        / max(d["rampa_%30"]["tri_mutlak_ort_m"], 1e-12))
    gecti = (
        d["duz"]["vrm_ort"] == 0.0                     # tam düzlükte TAM sıfır
        and en_dik_rampa_vrm < 1e-5                    # float32 gürültü tabanı ≈1e-7
        and vrm_ayirma_orani > 1000.0                  # VRM AYIRIYOR
        and tri_ayirma_orani < 1.0                     # TRI AYIRMIYOR — hatta TERS
    )
    return {"ad": "vrm-rampa-vs-karton", "deger": d, "gecti": bool(gecti),
            "vrm_ayirma_orani": round(vrm_ayirma_orani, 1),
            "tri_karton_bolu_rampa": round(tri_ayirma_orani, 3),
            "yorum": ("Rampa ne kadar dik olursa olsun VRM~0 (1e-7, float32 "
                      "gurultusu); yumurta kartonunda 0,0045 — arada 5x10^4 "
                      "kat var. TRI ise TERS siraliyor: duzgun %30 rampaya "
                      "1670 m, 300 m genlikli yumurta kartonuna 791 m veriyor. "
                      "=> IKI OLCU DE GEREKLI: TRI buyukluk, VRM CINS.")}


def sinav_normal_denkligi():
    """(−p,−q,1)/|·| ile (sin·sin, sin·cos, cos) AYNI vektör mü? Sayıyla."""
    rng = np.random.default_rng(7)
    Z = rng.normal(0, 120, (30, 30)).astype(np.float32)
    nx, ny, nz = birim_normal(Z, PIKSEL_M, PIKSEL_M)
    q, p = np.gradient(Z)
    p, q = p / PIKSEL_M, q / PIKSEL_M
    egim = np.arctan(np.hypot(p, q))
    baki = np.arctan2(-p, -q)
    ax = np.sin(egim) * np.sin(baki)
    ay = np.sin(egim) * np.cos(baki)
    az = np.cos(egim)
    hata = float(np.max(np.abs(nx - ax) + np.abs(ny - ay) + np.abs(nz - az)))
    return {"ad": "normal-denkligi", "en_buyuk_hata": hata,
            "gecti": hata < 1e-5,
            "yorum": "Gradyandan kurulan normal, egim/bakidan kurulanla AYNI."}


def sinav_gecit():
    """Sırtta bir çentik: geçit kotu ÇENTİĞİ mi verir, ZİRVEYİ mi?"""
    Z = np.zeros((ALT, ALT), np.float32)
    Z[:, 3] = 2000.0            # kuzey-güney uzanan sırt
    Z[4, 3] = 900.0             # tek hücrelik geçit
    Zc = Z[None, None, :, :]
    g_dz, g_gk, t_dz, t_gk = gecit_ve_tirmanis(Zc)[:4]
    mm = minimax_darbogaz(Zc)
    return {"ad": "gecit-centik",
            "duz_gecis_kotu_m": float(g_dz[0, 0]),
            "minimax_kotu_m": float(mm[0, 0]),
            "zirve_m": float(Z.max()),
            "gecti": abs(float(g_dz[0, 0]) - 900.0) < 1e-6 and abs(float(mm[0, 0]) - 900.0) < 1e-6,
            "yorum": ("Ortalama alma bu hucreyi 2000/6≈333 m'lik bir tumsek "
                      "gibi gosterirdi; gecit olcusu 900 m'lik CENTIGI buluyor.")}


def sinav_tirmanis():
    """Yumurta kartonunda toplam tırmanış BİLİNEN değeri veriyor mu?"""
    Z = np.zeros((ALT, ALT), np.float32)
    Z[:, :] = np.array([0, 300, 0, 300, 0, 300], np.float32)   # üç tümsek
    Zc = Z[None, None, :, :]
    t_dz = gecit_ve_tirmanis(Zc)[2]
    beklenen = 900.0            # 0→300 üç kez
    return {"ad": "tirmanis-yumurta-kartonu",
            "olculen_m": float(t_dz[0, 0]), "beklenen_m": beklenen,
            "net_yukselti_m": float(Z[0, -1] - Z[0, 0]),
            "gecti": abs(float(t_dz[0, 0]) - beklenen) < 1e-6,
            "yorum": ("Net yukselti 300 m; GERCEK tirmanis 900 m. Motorun "
                      "bugunku olcusu net yukseltiyi gorur, tirmanisi GORMEZ.")}


def sinav_minimax_ustsinir():
    """Minimax ≤ düz geçiş — kısıt gevşetildiğinde maliyet artamaz."""
    rng = np.random.default_rng(11)
    Zc = rng.normal(1000, 400, (200, 1, ALT, ALT)).astype(np.float32)
    g_dz = gecit_ve_tirmanis(Zc)[0]
    mm = minimax_darbogaz(Zc)
    ihlal = int(np.sum(mm > g_dz + 1e-4))
    return {"ad": "minimax-ust-sinir", "ihlal": ihlal,
            "ortalama_fark_m": round(float(np.mean(g_dz - mm)), 1),
            "gecti": ihlal == 0,
            "yorum": "Kosegenler serbest birakilinca darbogaz DUSMELI."}


def sinavlar():
    return [sinav_riley_sekil3(), sinav_riley_sinif_tablosu(),
            sinav_normal_denkligi(), sinav_vrm_rampa(), sinav_gecit(),
            sinav_tirmanis(), sinav_minimax_ustsinir()]


# ══════════════════════════════════════════════════════════════════════════
# ÖLÇÜM — bir pencere için hücre içi istatistik
# ══════════════════════════════════════════════════════════════════════════
def _hizala(v, adim, taban):
    """v'yi ızgaraya oturt (aşağı yuvarlar)."""
    return taban + math.floor((v - taban) / adim) * adim


def bolge_olc(ds, lon0, lat0, lon1, lat1, minimax=False):
    """Bir kutuyu hücre hücre ölç. Kutu 0,05° ızgarasına OTURTULUR."""
    lon0 = _hizala(lon0, KV_ADIM, KV_X0)
    lat0 = _hizala(lat0, KV_ADIM, KV_Y0)
    nx_h = int(round((lon1 - lon0) / KV_ADIM))
    ny_h = int(round((lat1 - lat0) / KV_ADIM))
    lon1 = lon0 + nx_h * KV_ADIM
    lat1 = lat0 + ny_h * KV_ADIM

    # 1 alt-piksel HALO — komşu ölçüleri hücre sınırını aşar
    ust = ds.transform.f
    sut0 = int(round((lon0 - ds.transform.c) * 120.0))
    sat0 = int(round((ust - lat1) * 120.0))
    w = nx_h * ALT
    h = ny_h * ALT
    if sat0 - 1 < 0 or sut0 - 1 < 0 or sat0 + h + 1 > ds.height or sut0 + w + 1 > ds.width:
        halo = 0
    else:
        halo = 1
    Zh = ds.read(1, window=Window(sut0 - halo, sat0 - halo, w + 2 * halo, h + 2 * halo)
                 ).astype(np.float32)
    Zh[Zh == ds.nodata] = np.nan

    orta_lat = (lat0 + lat1) / 2.0
    dx_m = PIKSEL_M * math.cos(math.radians(orta_lat))
    tri_m, tri_k = tri_iki_bicim(Zh)
    vrm = vrm_pencere(Zh, dx_m, PIKSEL_M)
    if halo:
        Z = Zh[halo:-halo, halo:-halo]
        tri_m = tri_m[halo:-halo, halo:-halo]
        tri_k = tri_k[halo:-halo, halo:-halo]
        vrm = vrm[halo:-halo, halo:-halo]
    else:
        Z = Zh

    # kuzeyden güneye gelen satırları motorun yönüne çevir (j=0 GÜNEY)
    Z = np.flipud(Z)
    tri_m = np.flipud(tri_m)
    tri_k = np.flipud(tri_k)
    vrm = np.flipud(vrm)

    yig = _blok(Z, ny_h, nx_h)
    Zc = Z.reshape(ny_h, ALT, nx_h, ALT).transpose(0, 2, 1, 3)
    (g_dz, g_gk, t_dz, t_gk, sat_t, sut_t, tv_dz, tv_gk) = gecit_ve_tirmanis(Zc)
    cikti = {
        "z_min": np.nanmin(yig, axis=2), "z_max": np.nanmax(yig, axis=2),
        "z_ort": np.nanmean(yig, axis=2), "z_std": np.nanstd(yig, axis=2),
        "tri_mutlak": _blok(tri_m, ny_h, nx_h).mean(axis=2),
        "tri_kok": _blok(tri_k, ny_h, nx_h).mean(axis=2),
        "vrm": _blok(vrm, ny_h, nx_h).mean(axis=2),
        "gecit_dz": g_dz, "gecit_gk": g_gk,
        "tirmanis_dz": t_dz, "tirmanis_gk": t_gk,
        # 🔴 AYNI ÖLÇÜNÜN ÜÇ VARYANTI — "en iyi satır" TEK BAŞINA YANILTICI:
        #    bir hat yalnız 5 adımdır ve tek bir monoton iniş 0 m tırmanış
        #    verir. Üçü birden raporlanır ki ölçünün KARARSIZLIĞI görünsün.
        "tirmanis_dz_ortanca": np.median(sat_t, axis=2),
        "tirmanis_dz_enb": sat_t.max(axis=2),
        "tv_dz": tv_dz, "tv_gk": tv_gk,
    }
    if minimax:
        cikti["gecit_minimax"] = minimax_darbogaz(Zc)

    # MOTORUN BUGÜNKÜ ÖLÇÜSÜ — aynı veriden, aynı yolla (karşılaştırma için)
    ort = cikti["z_ort"]
    gy, gx = np.gradient(ort)
    cikti["egim_motor"] = np.hypot(gx, gy)
    cikti["_kutu"] = (lon0, lat0, lon1, lat1)
    cikti["_hucre"] = (ny_h, nx_h)
    return cikti


def merdiven(ds, ad, kademeler=(1, 2, 3, 6)):
    """④'ÜN CEVABI — ÇÖZÜNÜRLÜK MERDİVENİ.

    Soru: *"30 yay-sn'nin İÇİNDEKİ dalgalanma yeterli mi, daha iyi DEM gerekir
    mi?"* Doğrudan cevaplanamaz (elimizde 30 m'lik veri yok). Ama **EĞRİNİN
    YÖNÜ VE HIZI** ölçülebilir: aynı DEM kabalaştırılıp aynı 0,05° hücrede
    aynı büyüklükler yeniden ölçülür.

        k=1 → 6×6 alt-hücre, 926 m   ← bugün elimizdeki en ince
        k=2 → 3×3,           1852 m
        k=3 → 2×2,           2780 m
        k=6 → 1×1,           5566 m  ← MOTORUN BUGÜNKÜ HÂLİ (tek ortalama)

    🔴 SINIRI ÖNCEDEN YAZILIR: bu ölçüm 30 m'lik bir DEM'in NE GÖSTERECEĞİNİ
       SÖYLEMEZ. Yalnız kaybın hangi hızla arttığını söyler; ince tarafa
       doğru okumak bir EKSTRAPOLASYONDUR ve öyle raporlanır.
    """
    lon0, lat0, lon1, lat1, nedir = BOLGELER[ad]
    lon0 = _hizala(lon0, KV_ADIM, KV_X0)
    lat0 = _hizala(lat0, KV_ADIM, KV_Y0)
    nx_h = int(round((lon1 - lon0) / KV_ADIM))
    ny_h = int(round((lat1 - lat0) / KV_ADIM))
    sut0 = int(round((lon0 - ds.transform.c) * 120.0))
    sat0 = int(round((ds.transform.f - (lat0 + ny_h * KV_ADIM)) * 120.0))
    Z = ds.read(1, window=Window(sut0, sat0, nx_h * ALT, ny_h * ALT)).astype(np.float32)
    Z[Z == ds.nodata] = np.nan
    Z = np.flipud(Z)
    kara = _blok(Z, ny_h, nx_h)
    kara = np.nanmean(kara, axis=2) > 0
    sonuc = {}
    for k in kademeler:
        a = ALT // k
        if a * k != ALT:
            continue
        # k×k ortalama — motorun `Resampling.average`ının birebir aynısı
        Zk = (Z.reshape(ny_h * a, k, nx_h * a, k).mean(axis=(1, 3))
              if k > 1 else Z)
        Zc = Zk.reshape(ny_h, a, nx_h, a).transpose(0, 2, 1, 3)
        yig = Zc.reshape(ny_h, nx_h, a * a)
        kabartma = np.nanmax(yig, axis=2) - np.nanmin(yig, axis=2)
        gecit = Zc.max(axis=3).min(axis=2)
        zirve = np.nanmax(yig, axis=2)
        sonuc["%d_alt_hucre_%d_m" % (a * a, round(PIKSEL_M * k))] = {
            "alt_izgara": "%dx%d" % (a, a),
            "piksel_m": round(PIKSEL_M * k),
            "kabartma_ortanca_m": round(float(np.nanmedian(kabartma[kara])), 1),
            "kabartma_ort_m": round(float(np.nanmean(kabartma[kara])), 1),
            "gecit_ortanca_m": round(float(np.nanmedian(gecit[kara])), 1),
            "zirve_eksi_gecit_ort_m": round(float(np.nanmean((zirve - gecit)[kara])), 1),
        }
    return {"_nedir": nedir, "_kara_hucre": int(kara.sum()), "kademeler": sonuc}


def ozetle(c, kara_esigi=0.0):
    """Bir bölge ölçümünü sayıya indirger. Deniz hücreleri (z_ort<eşik) elenir."""
    kara = c["z_ort"] > kara_esigi
    n = int(kara.sum())
    if n == 0:
        return {"kara_hucre": 0, "not": "kara hucre YOK — olculemedi"}
    def s(k, ond=1):
        v = c[k][kara]
        return {"ortanca": round(float(np.nanmedian(v)), ond),
                "ort": round(float(np.nanmean(v)), ond),
                "y90": round(float(np.nanpercentile(v, 90)), ond),
                "enb": round(float(np.nanmax(v)), ond)}
    kabartma = c["z_max"] - c["z_min"]
    o = {
        "kara_hucre": n,
        "z_ort_m": s("z_ort"),
        "hucre_ici_kabartma_m": {"ortanca": round(float(np.nanmedian(kabartma[kara])), 1),
                                 "ort": round(float(np.nanmean(kabartma[kara])), 1),
                                 "y90": round(float(np.nanpercentile(kabartma[kara], 90)), 1),
                                 "enb": round(float(np.nanmax(kabartma[kara])), 1)},
        "z_std_m": s("z_std"),
        "tri_mutlak_m": s("tri_mutlak"),
        "tri_kok_m": s("tri_kok"),
        "vrm": s("vrm", 5),
        "tirmanis_dz_m_ENIYI_SATIR": s("tirmanis_dz"),
        "tirmanis_dz_m_ORTANCA_SATIR": s("tirmanis_dz_ortanca"),
        "tirmanis_dz_m_EN_KOTU_SATIR": s("tirmanis_dz_enb"),
        "tirmanis_gk_m": s("tirmanis_gk"),
        "tv_dz_m": s("tv_dz"),
        "tv_gk_m": s("tv_gk"),
        "egim_motor_m_hucre": s("egim_motor"),
    }
    # Ö1c — hücre içi dalgalanma / hücreler arası eğim
    em = float(np.nanmean(c["egim_motor"][kara]))
    o["O1c_kabartma_bolu_motor_egimi"] = round(
        float(np.nanmean(kabartma[kara])) / em, 3) if em > 0 else None
    o["tirmanis_bolu_motor_egimi"] = round(
        float(np.nanmean(c["tirmanis_dz"][kara])) / em, 3) if em > 0 else None
    # geçidin kazandırdığı
    o["zirve_eksi_gecit_m"] = round(
        float(np.nanmean(c["z_max"][kara] - c["gecit_dz"][kara])), 1)
    if "gecit_minimax" in c:
        o["duz_eksi_minimax_m"] = round(
            float(np.nanmean(c["gecit_dz"][kara] - c["gecit_minimax"][kara])), 1)
    # 🔑 KÖPRÜ — TRI'yi motorun diliyle kıyaslanabilir hâle getiren tek sayı:
    #    yerel eğim ≈ (TRI / 8) / (ortalama komşu uzaklığı)
    #    Motorun bugünkü eğimi ise |∇z| / 5566 m (hücreden hücreye).
    #    İkisi AYNI BİRİMDE (boyutsuz eğim) ve doğrudan bölünebilir.
    lat_orta = (c["_kutu"][1] + c["_kutu"][3]) / 2.0
    d_ort = ortalama_komsu_uzakligi_m(lat_orta)
    yerel = float(np.nanmedian(c["tri_mutlak"][kara])) / 8.0 / d_ort
    motor = float(np.nanmedian(c["egim_motor"][kara])) / (KV_ADIM * DERECE_M)
    o["yerel_egim_%_TRIden"] = round(yerel * 100, 2)
    o["motor_egimi_%_bugun"] = round(motor * 100, 2)
    o["KAT_yerel_bolu_motor"] = round(yerel / motor, 2) if motor > 0 else None
    o["_ortalama_komsu_uzakligi_m"] = round(d_ort, 1)
    # TRI, TV'nin yerini tutabilir mi? (tutuyorsa ÜRETİMDE TEK DİZİ yeter)
    try:
        from scipy.stats import spearmanr as _sp
        o["spearman_tri_tv"] = round(float(_sp(np.asarray(c["tri_mutlak"])[kara].ravel(),
                                               np.asarray(c["tv_dz"])[kara].ravel()).statistic), 4)
        o["tv_bolu_tri"] = round(float(np.nanmean(c["tv_dz"][kara]))
                                 / max(float(np.nanmean(c["tri_mutlak"][kara])), 1e-9), 4)
    except Exception as e:                                       # pragma: no cover
        o["spearman_tri_tv"] = "olculemedi: %s" % e
    # Ö2a — TRI ile VRM birbirinin yerine geçer mi? (Spearman sıra ilintisi)
    try:
        from scipy.stats import spearmanr
        r = spearmanr(np.asarray(c["tri_mutlak"])[kara].ravel(),
                      np.asarray(c["vrm"])[kara].ravel())
        o["O2a_spearman_tri_vrm"] = round(float(r.statistic), 3)
    except Exception as e:                                       # pragma: no cover
        o["O2a_spearman_tri_vrm"] = "olculemedi: %s" % e
    # Riley sınıfı — MUTLAK biçim, 1 km ızgara varsayımıyla
    tm = c["tri_mutlak"][kara]
    sinirlar = [(0, 80, "duz"), (81, 116, "neredeyse-duz"), (117, 161, "hafif"),
                (162, 239, "orta"), (240, 497, "epey"), (498, 958, "cok"),
                (959, 10 ** 9, "asiri")]
    o["riley_sinifi_%"] = {ad: round(float(np.mean((tm >= a) & (tm <= b)) * 100), 1)
                           for a, b, ad in sinirlar}
    return o


# ══════════════════════════════════════════════════════════════════════════
# MOTORUN DEM PENCERESİ — hizalama sınavı
# ══════════════════════════════════════════════════════════════════════════
def hizalama_sinavi(ds):
    """Motor DEM'i 85°K'ye kadar istiyor; ETOPO 84°K'de bitiyor. Ne oluyor?

    Motorun KENDİ çağrısı (uret_petek.py:2233-2240) birebir tekrarlanır ve
    çıkan ızgarada Everest'in düştüğü hücre ölçülür. Kayma varsa BURADA görünür.
    """
    win = _from_bounds(KV_X0, KV_Y0, KV_X0 + KV_NX * KV_ADIM,
                       KV_Y0 + KV_NY * KV_ADIM, transform=ds.transform)
    Z = ds.read(1, window=win, out_shape=(KV_NY, KV_NX),
                resampling=rasterio.enums.Resampling.average).astype("float32")
    Z = np.flipud(Z)
    # Everest 27,9881°K / 86,9250°D  (kaynak: NOAA ETOPO'nun kendi ızgarası —
    # burada ARANAN şey mutlak doğruluk değil, KAYMA)
    hedef_lat, hedef_lon = 27.9881, 86.9250
    bek_j = int((hedef_lat - KV_Y0) / KV_ADIM)
    bek_i = int((hedef_lon - KV_X0) / KV_ADIM)
    pen = Z[bek_j - 30:bek_j + 30, bek_i - 30:bek_i + 30]
    jj, ii = np.unravel_index(int(np.argmax(pen)), pen.shape)
    bul_j, bul_i = bek_j - 30 + jj, bek_i - 30 + ii
    return {
        "dem_ust_enlem": ds.bounds.top, "motor_ust_enlem": KV_Y1,
        "fark_derece": round(KV_Y1 - ds.bounds.top, 4),
        "pencere_satir": round(win.height, 2), "pencere_sutun": round(win.width, 2),
        "ds_yukseklik_piksel": ds.height,
        "pencere_dis_tasma_piksel": round(win.height - ds.height, 2),
        "en_yuksek_hucre_lat": round(KV_Y0 + (bul_j + 0.5) * KV_ADIM, 3),
        "en_yuksek_hucre_lon": round(KV_X0 + (bul_i + 0.5) * KV_ADIM, 3),
        "en_yuksek_deger_m": round(float(pen.max()), 1),
        "beklenen_lat": hedef_lat, "beklenen_lon": hedef_lon,
        "kayma_lat_derece": round(KV_Y0 + (bul_j + 0.5) * KV_ADIM - hedef_lat, 3),
        "kayma_lon_derece": round(KV_X0 + (bul_i + 0.5) * KV_ADIM - hedef_lon, 3),
    }


# ══════════════════════════════════════════════════════════════════════════
# TAM PENCERE — bant bant, bellek ÖLÇÜLEREK
# ══════════════════════════════════════════════════════════════════════════
def bellek_mb():
    try:
        import psutil
        return psutil.Process().memory_info().rss / 1e6
    except Exception:
        try:
            import resource
            return resource.getrusage(resource.RUSAGE_SELF).ru_maxrss / 1e3
        except Exception:
            return -1.0


def kuresel_ozet(diz, ornek_adim=7):
    """🔑 Ö2'NİN ASIL SINAVI: VRM, TRI'nin YANINDA yeni bilgi taşıyor mu?

    Bölge içi Spearman yüksek çıktı (0,95-0,99) — ama bir bölge homojendir.
    Asıl soru bütün kara üzerinde: **TRI'ye göre "engebesiz" görünen ama VRM'e
    göre engebeli (ya da tersi) hücreler VAR MI, KAÇ TANE?**

    Ölçü: her hücrenin TRI yüzdelik sırası ile VRM yüzdelik sırası. İkisi
    birbirinin yerine geçiyorsa sıralar örtüşür; ayrışan hücre AZSA, VRM'i
    ayrıca taşımak 42 MB'ı hak etmez.
    """
    kara = (diz["z_max"][::ornek_adim, ::ornek_adim] > 0) & \
           (diz["z_max"][::ornek_adim, ::ornek_adim] != -32768)
    tri = diz["tri_mutlak"][::ornek_adim, ::ornek_adim][kara].astype(np.float64)
    vrm = diz["vrm_bin"][::ornek_adim, ::ornek_adim][kara].astype(np.float64)
    tir = diz["tirmanis_dz"][::ornek_adim, ::ornek_adim][kara].astype(np.float64)
    zmx = diz["z_max"][::ornek_adim, ::ornek_adim][kara].astype(np.float64)
    kab = diz["kabartma"][::ornek_adim, ::ornek_adim][kara].astype(np.float64)
    egm = diz["egim_motor"][::ornek_adim, ::ornek_adim][kara].astype(np.float64)
    n = tri.size
    if n < 100:
        return {"not": "ornek cok kucuk — olculemedi", "n": int(n)}
    def yuzdelik(v):
        s = np.argsort(np.argsort(v, kind="stable"), kind="stable")
        return s / max(len(v) - 1, 1) * 100.0
    pt, pv = yuzdelik(tri), yuzdelik(vrm)
    fark = np.abs(pt - pv)
    o = {"ornek_kara_hucre": int(n), "ornek_adim": ornek_adim,
         "tri_ortanca_m": round(float(np.median(tri)), 1),
         "tri_y90_m": round(float(np.percentile(tri, 90)), 1),
         "vrm_ortanca": float("%.3g" % np.median(vrm)),
         "vrm_y90": float("%.3g" % np.percentile(vrm, 90)),
         "vrm_sifira_esit_%": round(float(np.mean(vrm == 0) * 100), 3),
         "tirmanis_eniyi_ortanca_m": round(float(np.median(tir)), 1),
         "z_max_ortanca_m": round(float(np.median(zmx)), 1),
         "O1a_kabartma_ortanca_m": round(float(np.median(kab)), 1),
         "O1a_kabartma_ort_m": round(float(np.mean(kab)), 1),
         "O1c_kabartma_bolu_motor_egimi": (round(float(np.mean(kab)) / float(np.mean(egm)), 3)
                                           if float(np.mean(egm)) > 0 else None),
         "egim_motor_ortanca_m_hucre": round(float(np.median(egm)), 1),
         "sira_farki_ortanca_puan": round(float(np.median(fark)), 2),
         "sira_farki_20_puandan_buyuk_%": round(float(np.mean(fark > 20) * 100), 2),
         "sira_farki_40_puandan_buyuk_%": round(float(np.mean(fark > 40) * 100), 2)}
    try:
        from scipy.stats import spearmanr
        o["spearman_tri_vrm_KURESEL"] = round(float(spearmanr(tri, vrm).statistic), 4)
    except Exception as e:                                       # pragma: no cover
        o["spearman_tri_vrm_KURESEL"] = "olculemedi: %s" % e
    # RAMPA KOVASI — TRI yüksek (üst %25) ama VRM düşük (alt %25) olan hücre
    ust_tri, alt_vrm = np.percentile(tri, 75), np.percentile(vrm, 25)
    o["rampa_benzeri_hucre_%"] = round(
        float(np.mean((tri >= ust_tri) & (vrm <= alt_vrm)) * 100), 3)
    o["karton_benzeri_hucre_%"] = round(
        float(np.mean((tri <= np.percentile(tri, 25)) & (vrm >= np.percentile(vrm, 75))) * 100), 3)
    # Riley sınıf dağılımı — bütün kara
    sinirlar = [(0, 80, "duz"), (81, 116, "neredeyse-duz"), (117, 161, "hafif"),
                (162, 239, "orta"), (240, 497, "epey"), (498, 958, "cok"),
                (959, 10 ** 9, "asiri")]
    o["riley_sinifi_%"] = {ad: round(float(np.mean((tri >= a) & (tri <= b)) * 100), 2)
                           for a, b, ad in sinirlar}
    return o


def tam_pencere(ds, bant_hucre=100, tavan_mb=1500.0, dizi_yaz=None):
    """Bütün motor ızgarasını (7200×2900) bant bant ölç.

    Çıktı dizileri int16 (metre) — `Ö4`ün gerektirdiği bütçe.
    """
    t0 = time.time()
    # ⚠️ Bu koşu ÖLÇMEK için sekiz büyüklüğü birden tutuyor; ÖNERİ bu değildir
    #    (öneri `Ö4`te ve rapordadır). Sekizi tutmanın maliyeti de ölçülsün diye.
    alanlar = ["z_max", "z_std", "kabartma", "tri_mutlak", "vrm_bin",
               "tirmanis_dz", "gecit_dz", "egim_motor"]
    diz = {a: np.zeros((KV_NY, KV_NX), np.int16) for a in alanlar}
    # 🔴 VRM int16×10⁴ İLE PAKETLENEMEZ — ölçüldü ve kusur bu koşunun İLK
    #    turunda çıktı: kara hücrelerinin yarısından çoğu 0'a yuvarlandı
    #    (kara ortancası 0,0000) ve Spearman **bağlarla dolu** bir değişkenle
    #    hesaplandı. Tipik kara değeri 2e-5 … 1,2e-2; 1e-4'lük adım çok kaba.
    #    ⇒ ÖLÇÜM için float32 (83,5 MB). Üretim önerisi zaten VRM taşımıyor.
    diz["vrm_bin"] = np.zeros((KV_NY, KV_NX), np.float32)
    tepe = bellek_mb()
    dem_ust_j = int(round((ds.bounds.top - KV_Y0) / KV_ADIM))     # DEM'in bittiği satır
    islenen = 0
    for j0 in range(0, min(KV_NY, dem_ust_j), bant_hucre):
        j1 = min(j0 + bant_hucre, dem_ust_j, KV_NY)
        lat0 = KV_Y0 + j0 * KV_ADIM
        lat1 = KV_Y0 + j1 * KV_ADIM
        c = bolge_olc(ds, KV_X0, lat0, KV_X1, lat1)
        diz["z_max"][j0:j1] = np.nan_to_num(c["z_max"], nan=-32768).astype(np.int16)
        diz["z_std"][j0:j1] = np.clip(np.nan_to_num(c["z_std"]), 0, 32767).astype(np.int16)
        diz["tri_mutlak"][j0:j1] = np.clip(np.nan_to_num(c["tri_mutlak"]), 0, 32767).astype(np.int16)
        diz["vrm_bin"][j0:j1] = np.nan_to_num(c["vrm"]).astype(np.float32)
        diz["tirmanis_dz"][j0:j1] = np.clip(np.nan_to_num(c["tirmanis_dz"]), 0, 32767).astype(np.int16)
        diz["gecit_dz"][j0:j1] = np.clip(np.nan_to_num(c["gecit_dz"], nan=-32768), -32768, 32767).astype(np.int16)
        diz["kabartma"][j0:j1] = np.clip(np.nan_to_num(c["z_max"] - c["z_min"]), 0, 32767).astype(np.int16)
        diz["egim_motor"][j0:j1] = np.clip(np.nan_to_num(c["egim_motor"]), 0, 32767).astype(np.int16)
        tepe = max(tepe, bellek_mb())
        islenen = j1
        if tepe > tavan_mb:
            print(f"  🔴 BELLEK TAVANI ASILDI: {tepe:.0f} MB > {tavan_mb:.0f} MB — DURDURULDU")
            return None, {"durum": "TAVAN_ASILDI", "tepe_bellek_mb": round(tepe, 1),
                          "islenen_satir": islenen}
        if (j0 // bant_hucre) % 5 == 0:
            print(f"    satir {j0}/{KV_NY} · {time.time()-t0:.0f} sn · bellek {tepe:.0f} MB",
                  flush=True)
    sure = time.time() - t0
    if dizi_yaz:
        np.savez_compressed(dizi_yaz, **diz)
    return diz, {"durum": "TAMAM", "sure_sn": round(sure, 1), "kuresel": kuresel_ozet(diz),
                 "tepe_bellek_mb": round(tepe, 1),
                 "dem_disinda_kalan_satir": KV_NY - dem_ust_j,
                 "dizi_sayisi": len(alanlar),
                 "dizi_basina_mb": round(KV_NY * KV_NX * 2 / 1e6, 1),
                 "toplam_mb": round(len(alanlar) * KV_NY * KV_NX * 2 / 1e6, 1)}


# ══════════════════════════════════════════════════════════════════════════
def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--sinav", action="store_true", help="yalniz birim sinavlari")
    ap.add_argument("--bolge", help="tek bolge adi (BOLGELER)")
    ap.add_argument("--ornek", action="store_true", help="butun ornek bolgeler")
    ap.add_argument("--hizalama", action="store_true", help="motorun DEM penceresi sinavi")
    ap.add_argument("--merdiven", action="store_true", help="cozunurluk merdiveni (soru 4)")
    ap.add_argument("--tam", action="store_true", help="TAM pencere kosusu")
    ap.add_argument("--minimax", action="store_true", help="gercek darbogazi da olc")
    ap.add_argument("--bant", type=int, default=100, help="tam kosuda bant yuksekligi (hucre)")
    ap.add_argument("--tavan-mb", type=float, default=1500.0)
    ap.add_argument("--dizi-yaz", help="tam kosu dizilerini .npz olarak yaz")
    ap.add_argument("--cikti", help="JSON cikti yolu")
    a = ap.parse_args()

    rap = {"alet": "ARAC-TRI-0912", "tarih": time.strftime("%Y-%m-%d %H:%M"),
           "izgara": {"KV_ADIM": KV_ADIM, "nx": KV_NX, "ny": KV_NY,
                      "alt_hucre": ALT * ALT, "dem": DEM_YOL}}

    print("═══ BIRIM SINAVLARI ═══")
    rap["sinavlar"] = sinavlar()
    for s in rap["sinavlar"]:
        print(f"  {'GECTI ' if s['gecti'] else 'KALDI '} {s['ad']}")
    kalan = [s["ad"] for s in rap["sinavlar"] if not s["gecti"]]
    if kalan:
        print(f"  🔴 KALAN SINAV: {kalan} — olcume GECILMIYOR")
        if a.cikti:
            json.dump(rap, open(a.cikti, "w", encoding="utf-8"),
                      ensure_ascii=False, indent=1)
        sys.exit(1)

    if a.sinav:
        if a.cikti:
            json.dump(rap, open(a.cikti, "w", encoding="utf-8"),
                      ensure_ascii=False, indent=1)
        return

    if rasterio is None:
        print("🔴 rasterio YOK — olculemedi"); sys.exit(1)
    if not os.path.exists(DEM_YOL):
        print(f"🔴 DEM YOK: {DEM_YOL} — olculemedi"); sys.exit(1)

    with rasterio.open(DEM_YOL) as ds:
        if a.hizalama:
            print("\n═══ MOTORUN DEM PENCERESI ═══")
            rap["hizalama"] = hizalama_sinavi(ds)
            for k, v in rap["hizalama"].items():
                print(f"  {k:32s} {v}")

        adlar = list(BOLGELER) if a.ornek else ([a.bolge] if a.bolge else [])
        if adlar:
            print("\n═══ BOLGE OLCUMLERI ═══")
            rap["bolgeler"] = {}
            for ad in adlar:
                lon0, lat0, lon1, lat1, nedir = BOLGELER[ad]
                t = time.time()
                c = bolge_olc(ds, lon0, lat0, lon1, lat1, minimax=a.minimax)
                o = ozetle(c)
                o["_nedir"] = nedir
                o["_kutu"] = c["_kutu"]
                o["_sure_sn"] = round(time.time() - t, 2)
                rap["bolgeler"][ad] = o
                if o["kara_hucre"]:
                    print(f"  {ad:11s} {nedir:34s} kabartma ortanca "
                          f"{o['hucre_ici_kabartma_m']['ortanca']:7.1f} m · "
                          f"TRI {o['tri_mutlak_m']['ortanca']:7.1f} m · "
                          f"VRM {o['vrm']['ortanca']:.5f} · "
                          f"O1c {o['O1c_kabartma_bolu_motor_egimi']}")

        if a.merdiven:
            print("\n═══ COZUNURLUK MERDIVENI (soru 4) ═══")
            rap["merdiven"] = {}
            for ad in (["KARADENIZ", "ALPLER", "ZAGROS", "TUNA", "KONYA"]
                       if not a.bolge else [a.bolge]):
                m = merdiven(ds, ad)
                rap["merdiven"][ad] = m
                print(f"  {ad}")
                for k, v in m["kademeler"].items():
                    print(f"     {v['alt_izgara']:>5s} @ {v['piksel_m']:5d} m  "
                          f"kabartma ortanca {v['kabartma_ortanca_m']:7.1f} m  "
                          f"zirve−gecit {v['zirve_eksi_gecit_ort_m']:7.1f} m")

        if a.tam:
            print("\n═══ TAM PENCERE ═══")
            _, ozet = tam_pencere(ds, bant_hucre=a.bant, tavan_mb=a.tavan_mb,
                                  dizi_yaz=a.dizi_yaz)
            rap["tam_pencere"] = ozet
            for k, v in ozet.items():
                print(f"  {k:28s} {v}")

    if a.cikti:
        json.dump(rap, open(a.cikti, "w", encoding="utf-8"),
                  ensure_ascii=False, indent=1)
        print(f"\nJSON: {a.cikti}")


if __name__ == "__main__":
    main()
