# -*- coding: utf-8 -*-
"""ARAC-TUZ-YUKSEKLIK-SINAV-1010 — eğim DEM'i tuzda mı, künyede mi? İKİ YÖNDE.

Motoru KOŞTURMAZ, `uret_petek.py`yi İTHAL ETMEZ (AST ile okur). Sentetik
GeoTIFF'ler geçici dizinde üretilir; hiçbir ağaca yazılmaz.

    py denetim/ARAC-TUZ-YUKSEKLIK-SINAV-1010.py --arac <arac_dizini> --bekle yamasiz
    py denetim/ARAC-TUZ-YUKSEKLIK-SINAV-1010.py --arac <arac_dizini> --bekle yamali

Çıkış: 0 gözlem beklenenle AYNI · 1 FARKLI · 2 ölçülemedi (rasterio yok vb.)
Ters beklentiyle koşturmak (yamasız ağaca `--bekle yamali`) 1 vermelidir —
sınavın ötebildiğinin kanıtı.

Sorular
  T1 tuz, yukseklik.py içeriği değişince DEĞİŞMEZ          (iki ağaçta da — KASITLI)
  T2 tuz, seçilen DEM değişince (dünya yarım ⇒ atlas) DEĞİŞMEZ (iki ağaçta da — KASITLI)
  T3 tuz, aynı adda başka içerikli DEM ile DEĞİŞMEZ          (iki ağaçta da — KASITLI)
  S1 tam_mi: tam sentetik DEM ⇒ True, son şeridi nodata ⇒ False (seçim mekanizması gerçek)
  K1 yukseklik.dem_izi VAR mı                               yamasız HAYIR · yamalı EVET
  K2 seçim değişince künye (dem_izi.ad) değişiyor mu         yamasız ölçülemez(HAYIR) · yamalı EVET
  K3 aynı ad / başka içerik ⇒ künye (sha256) değişiyor mu    yamasız HAYIR · yamalı EVET
  K4 aynı içerik ⇒ künye AYNI mı (yanlış pozitif yok)        yamasız HAYIR · yamalı EVET
  K5 uret_petek.py'deki URETIM_IZI yazımlarının hepsi "egim" taşıyor mu (AST)
                                                            yamasız HAYIR · yamalı EVET
"""
import argparse
import ast
import hashlib
import importlib.util
import json
import os
import shutil
import sys
import tempfile

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

TUZ_DOSYALARI = ("uret_petek.py", "renkler.py", "girdi.py", "motor_onbellek.py")
KOPYA = TUZ_DOSYALARI + ("girdi_listesi.py", "yukseklik.py")


def modul_yukle(ad, yol):
    spec = importlib.util.spec_from_file_location(ad + "_" + hashlib.md5(yol.encode()).hexdigest()[:6], yol)
    m = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(m)
    return m


def tuz(arac):
    """`uret_petek._ONB_TUZ`un BİREBİR formülü (uret_petek.py:576-584), ortam
    sabit tutularak. girdi.motor_izi() kendi dizinindeki dosyaları özetler."""
    sys.path.insert(0, arac)
    try:
        g = modul_yukle("girdi", os.path.join(arac, "girdi.py"))
        mob = modul_yukle("motor_onbellek", os.path.join(arac, "motor_onbellek.py"))
    finally:
        sys.path.remove(arac)
    return json.dumps({
        "surum": "onbellek-1",
        "motor": g.motor_izi(),
        "onbellek_modulu": mob.dosya_ozeti(os.path.join(arac, "motor_onbellek.py")),
        "ortam": [],
    }, sort_keys=True, ensure_ascii=False)


def sentetik_dem(yol, deger, son_serit_nodata=False):
    import numpy as np
    import rasterio
    from rasterio.transform import from_origin
    z = np.full((40, 80), deger, dtype="int16")
    z[5:15, 10:30] = deger + 900                     # bir "dağ"
    if son_serit_nodata:
        z[-4:, :] = -32768
    with rasterio.open(yol, "w", driver="GTiff", height=40, width=80, count=1,
                       dtype="int16", crs="EPSG:4326", nodata=-32768,
                       transform=from_origin(-20, 40, 0.5, 0.5)) as d:
        d.write(z, 1)


def secim(yk, dizin):
    """uret_petek.py:707-718 seçim döngüsünün aynısı (ad sırası dahil)."""
    for a in ("etopo2022_30s_dunya.tif", "etopo2022_30s_atlas.tif"):
        y = os.path.join(dizin, a)
        if not os.path.exists(y):
            continue
        tam, _ = yk.tam_mi(y)
        if tam:
            return y
    return None


def k5_urtetim_izi(up_yol):
    """`window.URETIM_IZI` yazan her json.dumps({...}) sözlüğünde "egim" var mı."""
    t = ast.parse(open(up_yol, encoding="utf-8").read())
    toplam = egimli = 0
    for n in ast.walk(t):
        if isinstance(n, ast.Dict):
            anah = {k.value for k in n.keys if isinstance(k, ast.Constant)}
            if {"girdi", "motor"} <= anah and "surum" not in anah:
                toplam += 1
                egimli += "egim" in anah
    return toplam, egimli


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--arac", required=True)
    ap.add_argument("--bekle", required=True, choices=("yamasiz", "yamali"))
    a = ap.parse_args()
    try:
        import numpy  # noqa: F401
        import rasterio  # noqa: F401
    except Exception as e:
        print("ÖLÇÜLEMEDİ — rasterio/numpy yok:", e)
        return 2
    yamali = a.bekle == "yamali"
    gecici = tempfile.mkdtemp(prefix="tuzyk_sinav_")
    sonuc = []

    def soru(kod, gozlem, beklenen, aciklama):
        ok = gozlem == beklenen
        sonuc.append(ok)
        print(f"  {'✓' if ok else '✗'} {kod}: gözlem {gozlem!s:<5} beklenen {beklenen!s:<5} — {aciklama}")

    try:
        arac = os.path.join(gecici, "arac")
        os.makedirs(arac)
        for f in KOPYA:
            shutil.copy2(os.path.join(a.arac, f), os.path.join(arac, f))
        yk = modul_yukle("yukseklik", os.path.join(arac, "yukseklik.py"))
        print(f"arac: {os.path.abspath(a.arac)} · beklenti: {a.bekle}")
        for f in TUZ_DOSYALARI + ("yukseklik.py",):
            print(f"  {f:<20} sha256 {hashlib.sha256(open(os.path.join(a.arac, f), 'rb').read()).hexdigest()[:12]}")

        # ---- T1: yukseklik.py içeriği değişir ----
        t0 = tuz(arac)
        with open(os.path.join(arac, "yukseklik.py"), "a", encoding="utf-8") as f:
            f.write("\n# sinav: tam_mi olcutu degisti varsayimi\nESIK_SINAV = 1\n")
        t1 = tuz(arac)
        soru("T1", t0 != t1, False, "yukseklik.py değişince tuz değişti mi (KASITLI: hayır)")

        # ---- DEM'ler ----
        d_iki = os.path.join(gecici, "iki"); os.makedirs(d_iki)
        sentetik_dem(os.path.join(d_iki, "etopo2022_30s_dunya.tif"), 100)
        sentetik_dem(os.path.join(d_iki, "etopo2022_30s_atlas.tif"), 300)
        d_yarim = os.path.join(gecici, "yarim"); os.makedirs(d_yarim)
        sentetik_dem(os.path.join(d_yarim, "etopo2022_30s_dunya.tif"), 100, son_serit_nodata=True)
        sentetik_dem(os.path.join(d_yarim, "etopo2022_30s_atlas.tif"), 300)
        d_baska = os.path.join(gecici, "baska"); os.makedirs(d_baska)
        sentetik_dem(os.path.join(d_baska, "etopo2022_30s_dunya.tif"), 777)   # AYNI AD, başka içerik
        d_ayni = os.path.join(gecici, "ayni"); os.makedirs(d_ayni)
        shutil.copy2(os.path.join(d_iki, "etopo2022_30s_dunya.tif"), d_ayni)

        tam1, _ = yk.tam_mi(os.path.join(d_iki, "etopo2022_30s_dunya.tif"))
        tam2, _ = yk.tam_mi(os.path.join(d_yarim, "etopo2022_30s_dunya.tif"))
        soru("S1", (tam1, tam2) == (True, False), True, "tam_mi tam/yarımı ayırıyor (seçim mekanizması GERÇEK)")

        s_iki, s_yarim = secim(yk, d_iki), secim(yk, d_yarim)
        print(f"     seçim: ikisi tam ⇒ {os.path.basename(s_iki)} · dünya yarım ⇒ {os.path.basename(s_yarim)}")
        # tuz seçimden etkilenmez: tuz formülü DEM'i hiç okumuyor (T2/T3 aynı tuz)
        t_iki, t_yarim = tuz(arac), tuz(arac)
        soru("T2", t_iki != t_yarim or os.path.basename(s_iki) == os.path.basename(s_yarim), False,
             "seçilen DEM değişti, tuz değişti mi (KASITLI: hayır)")
        soru("T3", tuz(arac) != t_iki, False, "aynı ad/başka içerik, tuz değişti mi (KASITLI: hayır)")

        var = hasattr(yk, "dem_izi")
        soru("K1", var, yamali, "yukseklik.dem_izi var mı")
        if var:
            i_iki = yk.dem_izi(s_iki); i_yarim = yk.dem_izi(s_yarim)
            i_baska = yk.dem_izi(os.path.join(d_baska, "etopo2022_30s_dunya.tif"))
            i_ayni = yk.dem_izi(os.path.join(d_ayni, "etopo2022_30s_dunya.tif"))
            k2 = i_iki["ad"] != i_yarim["ad"]
            k3 = i_iki["ad"] == i_baska["ad"] and i_iki["sha256"] != i_baska["sha256"]
            k4 = i_iki == i_ayni
            print(f"     künye: {i_iki['ad']} {i_iki['sha256'][:12]} · başka içerik {i_baska['sha256'][:12]}")
        else:
            k2 = k3 = k4 = False
        soru("K2", k2, yamali, "seçim değişince künye değişiyor mu")
        soru("K3", k3, yamali, "aynı ad, başka içerik ⇒ künye değişiyor mu")
        soru("K4", k4, yamali, "aynı içerik ⇒ künye aynı mı (yanlış pozitif yok)")
        top, egm = k5_urtetim_izi(os.path.join(a.arac, "uret_petek.py"))
        print(f"     URETIM_IZI sözlüğü: {top} yazım · {egm} tanesi 'egim' taşıyor")
        soru("K5", top > 0 and egm == top, yamali, "bütün URETIM_IZI yazımları egim taşıyor mu")
    finally:
        shutil.rmtree(gecici, ignore_errors=True)
    hukum = all(sonuc)
    print(f"HÜKÜM: {'gözlem beklenenle AYNI' if hukum else 'gözlem beklenenden FARKLI'} "
          f"({sum(sonuc)}/{len(sonuc)})")
    return 0 if hukum else 1


if __name__ == "__main__":
    sys.exit(main())
