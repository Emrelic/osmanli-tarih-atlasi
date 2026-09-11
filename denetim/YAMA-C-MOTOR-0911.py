# -*- coding: utf-8 -*-
"""YAMA (HAZIRLIK, UYGULANMADI) — C (hukukî sınır/devralma) motor entegrasyonu, v2.

🔒 arac/ HÂLÂ DONUK (Koşu 9 gerçekte bitmedi — M-3487, nöbetçi ERKEN öttü,
motor süreci hâlâ çalışıyordu). Bu yama `denetim/` içinde HAZIR TUTULUYOR,
`arac/`e YAPIŞTIRILMADI.

🔴 v1 (bu dosyanın önceki hâli, commit 45e29a7) GEÇERSİZ — Emre M-3463 ile
C'nin tanımını "ekleme noktası"ndan "devralma/otorite"ye çevirdi. v1 yalnız
tabi/dogrudan KÜME ÜYELİĞİNİ değiştiriyordu; bu v2, kapsama alanı içindeki
TÜM sezgisel mekanizmaları (B2/B3/boşluk-paylaştırma/çöl-tavanı/A1-yarıçap/
§2-emilme) kapatan TEK bir post-hoc devralma adımı tanımlıyor
(`oturumlar/C-MOTOR-SARTNAMESI-V2-0911.md`'nin kod hâli).

────────────────────────────────────────────────────────────────────────
① MİMARİ — 6 mekanizma, TEK devralma noktası (SEMA-C v2'nin ta kendisi)
────────────────────────────────────────────────────────────────────────
```
:793   voronoi_diagram(...)              ← §2 EMİLME — dokunulmaz, HER ZAMAN
                                            normal çalışır (global, tek çağrı,
                                            "atla" şartı buraya GİREMEZ)
:900-1129  TAVAN_KM / _tavan_cokgen      ← A1 YARIÇAP — dokunulmaz, normal çalışır
:1512  _b2_enklav_birlestir              ← B2 — dokunulmaz, normal çalışır
:1614  _b3_koridor_kirp                  ← B3 — dokunulmaz, normal çalışır
:1740-1750  yaslama + Chaikin            ← YASLAMA — dokunulmaz (statik geçiş);
                                            C alanı içindeki kenarlar da NORMAL
                                            yaslanır, ama SONRADAN atılacaktır
:1896  Kıyı kesimi (KARA)                ← dokunulmaz, normal çalışır
:2076-2453  eğim-tabanlı Dijkstra devri  ← BOŞLUK PAYLAŞTIRMA — dokunulmaz,
                                            normal çalışır
:2637  COL_TAVAN_KM                      ← ÇÖL TAVANI — dokunulmaz, normal çalışır
```
**Hiçbirine "bu C alanında mı" şartı ENJEKTE EDİLMİYOR.** Hepsi normal
çalışır — kapsama kutusu içinde bile, İSRAF ama ZARARSIZ, çünkü sonucu
BİRAZDAN TAMAMEN ATILACAK. Tek gerçek müdahale noktası:

```
:2453 (eğim devri biter) İLE :4581 (per-dönem gosterim_duzelt) ARASI
      → YENİ ADIM: "C DEVRALMASI" (statik, PETEK_D üzerinde, TARİHTEN
        BAĞIMSIZ — Midye-Enez GİBİ zamana bağlı C kayıtları için PETEK_D
        DEĞİL, per-dönem 4842+ döngüsünde ayrıca ele alınır, bkz. ⑤ altı)
```

────────────────────────────────────────────────────────────────────────
② YAMA — C DEVRALMASI adımı (satır ~2453'ten SONRA eklenecek YENİ blok)
────────────────────────────────────────────────────────────────────────

```python
# ---- C: HUKUKÎ SINIR DEVRALMASI (window.HUKUKI_SINIRLAR) ----------------
# SEMA-C-0911.md v2 + M-3463/M-3480. Kapsama kutusu ARTIK dikdörtgen
# DEĞİL — Emre'nin kararıyla (M-3480) doğal sınıra kadar genişletiliyor;
# bu yama HER İKİ kapsama biçimini de kabul eder (`kapsama.tur`: "bbox"
# ya da "dogal_sinir" — ikincisi bir poligon/çokgen taşır).
MOTOR_C_KAPALI = os.environ.get("MOTOR_C_KAPALI") == "1"
if not MOTOR_C_KAPALI and 'HUKUKI_SINIRLAR' in globals():
    for _hs in HUKUKI_SINIRLAR:
        _kapsama_g = _kapsama_poligon(_hs["kapsama"])   # bbox ya da doğal sınır poligonu
        # ---- ÖN KOŞUL: belge coğrafyası kutuyu TAM kaplıyor mu? ----------
        _belge_noktalari = [(p["lon"], p["lat"]) for p in _hs["hat"]["nokta_dizisi"]]
        _belge_noktalari += _hs.get("ek_noktalar", [])   # Karlofça tipi: isimlendirilmiş kale/nehir/dağ
        if len(_belge_noktalari) < 2:
            print(f"  🔴 C ATLANDI ({_hs['id']}): belge nokta sayısı < 2")
            continue
        _yerel_vd = voronoi_diagram(MultiPoint(_belge_noktalari), envelope=_kapsama_g, tolerance=0.0)
        _yerel_orgu = poligonal(unary_union(list(_yerel_vd.geoms)).intersection(KARA).intersection(_kapsama_g))
        _hedef_alan = poligonal(KARA.intersection(_kapsama_g)).area
        _kapli_alan = _yerel_orgu.area if _yerel_orgu else 0.0
        _fark_km2 = abs(_hedef_alan - _kapli_alan) * (111.32 ** 2)   # kaba derece→km² (enlem düzeltmesi ihmal, ön-kontrol için yeterli)
        if _fark_km2 > KV_MIN_KM2:              # AYNI eşik, B BOŞLUK PAYLAŞTIRMA ile PAYLAŞILIYOR
            print(f"  🔴 C UYGULANMADI ({_hs['id']}): belge coğrafyası "
                  f"{_fark_km2:,.0f} km² boşluk bırakıyor (eşik {KV_MIN_KM2:.0f}) — "
                  f"önce nokta/hat eklenmeli. Motor SESSİZCE GEÇMEDİ.")
            continue
        # ---- YASLAMA — YALNIZ hat DOĞAL bir unsura dayanıyorsa (③) ------
        if _hs["hat"]["tur"] == "dogal-taninmayan":       # SEMA-C §8.2 ①b
            _yerel_kenarlar = _kenar_agi_cikar(_yerel_orgu)
            _yerel_kenarlar = [chaikin_acik(dogal_hatta_yasla(sikla(list(k.coords))), 2)
                                for k in _yerel_kenarlar]
            _yerel_orgu = poligonal(polygonize(_yerel_kenarlar))
        # "cetvel" (①c) ve "dogal-taninan" (①a — zaten C'ye hiç girmez,
        # A/B yeter) için yaslama UYGULANMAZ — cetvel çizgiyi BOZAR.
        # ---- KUTU İÇİNDEKİ PETEK_D PARÇALARINI DEĞİŞTİR ------------------
        for _i, _g in enumerate(PETEK_D):
            if _g is None or not _kapsama_g.intersects(_g):
                continue
            PETEK_D[_i] = poligonal(_g.difference(_kapsama_g))   # eski parça KUTUDAN ÇIKARILIR
        for _p_id, _p_geom in _yerel_petek_ayir(_yerel_orgu, _belge_noktalari).items():
            _j = _en_yakin_yerlesim_indeksi(_p_id, YERLER)   # belge noktası → yerlesimler.js eşlemesi
            PETEK_D[_j] = poligonal(unary_union([PETEK_D[_j], _p_geom])) if PETEK_D[_j] else _p_geom
```

⚠️ **`_kapsama_poligon`, `_kenar_agi_cikar`, `_yerel_petek_ayir`,
`_en_yakin_yerlesim_indeksi` YARDIMCI FONKSİYONLARDIR, bu yamada
TANIMLANMADI** — imzaları/amaçları yukarıdaki kullanımdan çıkarılabilir
ama gövdeleri bir UYGULAMA oturumunun işi (D107: iskelet verildi,
gövde yazılmadı — `arac/` donuk olduğu için gerçek shapely nesneleriyle
SINANAMADI).

────────────────────────────────────────────────────────────────────────
③ `dogal_hatta_yasla` — ŞARTA BAĞLANDI (yukarıda ②'nin içinde)
────────────────────────────────────────────────────────────────────────
```
hat.tur == "dogal-taninmayan" (①b)  → yaslama UYGULANIR (belge bir nehri/
                                       dağı sınır ilan ediyor, motor onu
                                       TANIMIYOR ama YİNE DE doğal unsura
                                       yaslanmalı — Emre'nin "belgede
                                       belirtilen nehir dağ" cümlesinin
                                       gereği)
hat.tur == "cetvel" (①c)            → yaslama UYGULANMAZ (yapay çizgi,
                                       yaslama onu en yakın nehre ÇEKİP
                                       BOZAR — v1'in zaten tespit ettiği
                                       risk, v2'de KORUNDU)
hat.tur == "dogal-taninan" (①a)     → C'ye HİÇ GİRMEZ (A/B zaten yeterli,
                                       SEMA-C §8.2 — Şattülarap örneği)
```

────────────────────────────────────────────────────────────────────────
④ 🅰 vs 🅱 — SAYIYLA KIYAS
────────────────────────────────────────────────────────────────────────
```
🅰 KUTU İÇİNDE SEZGİLERİ KAPAT (bu yamanın mimarisi, post-hoc devralma)
   maliyet     KÜÇÜK — yerel voronoi_diagram() + KARA kesişimi, bu
               gecenin İKİ bağımsız ölçümüyle (TAŞMA PROTOTİP: 0,04 sn
               pilot kutu · POLİGON FİYAT: 0,496 sn sentetik gerçek
               ölçek) AYNI işlem sınıfı — MERTEBE: saniyenin altı/birkaç
               saniyesi, motorun toplam süresine (koşu 9: ~20 saat)
               göre İHMAL EDİLEBİLİR
   risk        ÖLÇÜLDÜ VE DOĞRULANDI (C ÇİZİM oturumu, bu gece): kutu
               kenarında GÖRÜNÜR DİKİŞ (dar kutu: 1 dikiş; geniş kutu:
               0 görünür dikiş AMA en az 2 yeni yanlış-atıf riski, bkz.
               `denetim/BULGU-C-CIZIM-II-0911.md`). Emre'nin kararı
               (M-3480, "kutuyu doğal sınıra genişlet") bu dikişi
               GİZLİYOR, ÇÖZMÜYOR — kalıcı bir mimari düzeltme değil,
               bir GÖRSEL AZALTMA.
   uygulanabilirlik  BUGÜNKÜ shapely tabanlı motor mimarisiyle DOĞRUDAN
               uyumlu, yeni bir geometri kütüphanesi/algoritma GEREKMİYOR

🅱 C HATTINI PETEK KENARI OLARAK ÜRET (kutu kavramı kalkar, dikiş kalkar)
   maliyet     YÜKSEK — shapely'nin `voronoi_diagram()` fonksiyonu
               "kısıtlı/engelli Voronoi" (constrained Voronoi with
               barrier edges) DESTEKLEMİYOR. Bunu elde etmek ya (a) C
               hattını `:1708`teki ORTAK KENAR AĞINA bir EK kenar olarak
               enjekte edip TÜM `polygonize()` adımını (satır 1752+)
               bu yeni ağla YENİDEN çalıştırmak (GLOBAL bir veri
               yapısını değiştirmek — TEK bir C kaydı için BÜTÜN
               dünyanın kenar ağı yeniden inşa edilir), ya da (b) özel
               bir "hat-ile-kes" algoritması YAZMAK (bu motorda
               EMSALİ YOK, sıfırdan geliştirme) gerektirir.
   risk        YÜKSEK — global kenar ağına dokunmak, C'nin kapsama
               alanı DIŞINDAKİ petek şekillerini de ETKİLEME riski
               taşır (SEMA-C §8.5 SINAV 2'nin tam sınamak istediği şey,
               burada sınav ÇOK DAHA ZOR geçilir çünkü değişiklik
               GERÇEKTEN global bir veri yapısında)
   uygulanabilirlik  BUGÜNKÜ motor mimarisiyle UYUMSUZ, ya kütüphane
               değişikliği (shapely yerine ör. CGAL Python bind'leri,
               constrained Delaunay/Voronoi destekli) ya da sıfırdan
               algoritma geliştirme gerektirir — GÜNLER mertebesinde
               bir iş, bu şartnamenin/yamanın kapsamının ÇOK ÖTESİNDE

⇒ ÖNERİ: 🅰 KISA VADEDE, 🅱 UZUN VADELİ bir mimari hedef olarak KAYDA
  GEÇSİN. Emre'nin kendi kararı (M-3480, kutuyu genişletmek) zaten 🅰'yı
  DOLAYLI olarak seçmiş durumda — "dikişi gizle" bir 🅰 çaresi, 🅱'nin
  kendisi değil.
```

────────────────────────────────────────────────────────────────────────
⑤ GERİ DÖNÜŞ YOLU — değişmedi
────────────────────────────────────────────────────────────────────────
`MOTOR_C_KAPALI=1` — yukarıdaki ② kod bloğunun en başında zaten var
(`if not MOTOR_C_KAPALI and ...`).
"""
