# -*- coding: utf-8 -*-
"""YAMA (HAZIRLIK, UYGULANMADI) — C (hukukî sınır) için motor entegrasyonu.

🔒 arac/ DONUK. Bu dosya arac/uret_petek.py İÇİNE YAZILMAK ÜZERE hazırlanmış
bir YAMADIR — kendisi çalıştırılamaz. Koşu 10 bitip `arac/` açılınca
aşağıdaki değişikliği uygula.

────────────────────────────────────────────────────────────────────────
BAĞLAM — C MOTOR ŞARTNAMESİ sevki, 1.MURAT (11 Eylül 2026)
────────────────────────────────────────────────────────────────────────
`C ŞEMA KAPANIŞ` oturumu (`denetim/SEMA-C-0911.md` §8.3) motor girişini
BULDU ama "doğrulanmış GİRİŞ NOKTASI, tam patch NOKTASI DEĞİL" diye
damgaladı. Bu yama o boşluğu, Ottoman (doğrudan/tâbi) tarafı için,
KAPATIYOR — yabancı (`s:`) taraf İÇİN AYRI bir yama gerekir (aşağıda §④,
bilerek YAZILMADI, D107).

────────────────────────────────────────────────────────────────────────
① SIRA DOĞRULAMASI — statik boru hattı, satır numarasıyla (BUGÜNKÜ dosya)
────────────────────────────────────────────────────────────────────────
Motorun kendi yorumu (satır 1701-1707) zaten NUMARALI bir sıra veriyor,
ben yalnız DOĞRULADIM (izledim, çürütmedim):
```
1701  "Örtü boru hattı" — Petekler TEK bir ÖRTÜ olarak işlenir
1708  Ortak kenar ağı çıkarılıyor (her kenar TEK kopya)
1740  Kenarlar doğal hatlara YASLANIYOR (dogal_hatta_yasla, satır 1748)
1750    + CHAIKIN yumuşatma (chaikin_acik, AYNI satırda, art arda) — "bir
        kez yapılır, düğümler sabit"
1752  Hücreler geri kuruluyor (polygonize) → PETEK ilk hâlini alır
1864  Örtü sadeleştirme (coverage_simplify, SADE_TOL)
1896  KIYI KESİMİ (KARA) EN SON — "sonrasında hiçbir geometri işlemi yok"
2384  [AYRI BLOK] Eğim-tabanlı Dijkstra devri (PETEK_D parça-parça el
      değiştirir — bkz. `denetim/BULGU-VASSAL-RENK-0911.md`ye KOMŞU iş,
      `B BOŞLUK PAYLAŞTIRMA` şartnamesi) — BU DA STATİK, tarihten bağımsız
4581  gosterim_duzelt() PER-DÖNEM çağrılır (B2 enklav + B3 koridor) — bu
      NOKTADA gövde artık belirli bir (a,b) dönemine ÖZGÜ
4587  İKİNCİ bir KARA kesimi, PER-DÖNEM gövde üzerinde (güvenlik ağı —
      gosterim_duzelt'in ürettiği köprüler kıyıyı aşabilir)
4842  "Dönemler kuruluyor" döngüsü — HER (a,b) için tabi/dogrudan (Osmanlı
      tâbi/doğrudan yerleşim KÜMELERİ, settlement INDEX bazında) hesaplanır
```
⇒ `PETEK_D` (her yerleşimin kendi peteği) satır ~1898'de (kıyı kesimi) VE
~2429'da (eğim devri) OLMAK ÜZERE İKİ KEZ "son hâlini" alır — ama İKİSİ DE
STATİK, tarihten bağımsız. **Tarihe bağlı TEK adım 4842-4938 arası
döngüdür** — SEMA-C'nin işaret ettiği yer DOĞRU, ve gövde montajının
KİMLİĞİ (hangi PETEK_D parçası hangi (a,b) döneminde hangi kümeye
girdiği) TAMAMEN bu döngünün İÇİNDE, `tabi`/`dogrudan` frozenset'lerinin
KURULMA anında belirleniyor.

**⇒ C, en erken satır 4856'DAN SONRA, en geç satır 4869'dan (DOLGU_ACIK
bloğu) ÖNCE girmeli.** Daha erken (statik boru hattı içinde) girerse
`:1748` yaslama C'nin çizdiği cetveli en yakın nehre çeker (koordinatörün
uyardığı TAM senaryo — C, bir NEHRİ değil bir ANTLAŞMA MADDESİNİ temsil
eder, yaslanmamalı). Daha geç girerse (`aktif`/`anahtar` hesaplandıktan
sonra) dönem-birleştirme mantığı (satır 4890, "hiçbir şey değişmediyse
dönemi uzat") C'nin ürettiği YENİ dönem sınırını fark etmeyip önceki
döneme yanlışlıkla BİRLEŞTİREBİLİR.

────────────────────────────────────────────────────────────────────────
② YAMA — Ottoman tabi/dogrudan kümelerine C override'ı (satır ~4856 sonrası)
────────────────────────────────────────────────────────────────────────

ESKİ (satır 4851-4856, bugünkü hâl):
```python
    tabi = frozenset(j for j, y in enumerate(YERLER)
                     if j not in _dv
                     and any(dn["f"] <= a < dn["t"] for dn in y["v"]))
    dogrudan = frozenset(j for j, y in enumerate(YERLER)
                         if j not in _dv
                         and any(dn["f"] <= a < dn["t"] for dn in y["d"])) - tabi
```

YENİ (EKLENECEK, hemen ardından — DOLGU_ACIK bloğundan ÖNCE):
```python
    # ---- C: HUKUKÎ SINIR ÖVERRIDE (window.HUKUKI_SINIRLAR) --------------
    # SEMA-C-0911.md §8.2/§8.3 — yalnız Osmanlı (doğrudan/tâbi) tarafı.
    # 🔴 Yabancı (`s:`) taraf İÇİN AYRI bir override GEREKİR, bu yamada YOK.
    for _hs in (HUKUKI_SINIRLAR if 'HUKUKI_SINIRLAR' in globals() else []):
        if not (_hs["f"] <= a < _hs["t"]):
            continue                          # bu dönemde aktif değil
        _kut = _hs["kapsama"]["kutu"]
        _hat = _hs["hat"]["nokta_dizisi"]      # [{lon,lat,...}, ...]
        _hat_ls = LineString([(p["lon"], p["lat"]) for p in _hat])
        _taraf_a, _taraf_b = _hs["taraflar"]
        _a_osmanli = (_taraf_a == "osmanli") or _taraf_a in _OSMANLI_AILESI
        for j, y in enumerate(YERLER):
            if j in _dv:
                continue                       # yabancıya devredilmiş, C bu döngünün işi değil
            _lat, _lon = y["lat"], y["lon"]
            if not (_kut["lat_min"] <= _lat <= _kut["lat_max"]
                    and _kut["lon_min"] <= _lon <= _kut["lon_max"]):
                continue                        # kapsama DIŞI, dokunma
            # YEREL (nearest-segment) cross-product — SEMA-C §8.2
            _q = nearest_points(_hat_ls, Point(_lon, _lat))[0]
            _seg_i = min(range(len(_hat) - 1),
                         key=lambda k: LineString([(_hat[k]["lon"], _hat[k]["lat"]),
                                                    (_hat[k+1]["lon"], _hat[k+1]["lat"])])
                                       .distance(_q))
            _p0, _p1 = _hat[_seg_i], _hat[_seg_i + 1]
            _dx, _dy = _p1["lon"] - _p0["lon"], _p1["lat"] - _p0["lat"]
            _cross = _dx * (_lat - _q.y) - _dy * (_lon - _q.x)
            _bu_taraf_a = _cross > 0            # yon_kurali'ne göre işaret YÖNÜ TERSİNE ÇEVRİLEBİLİR
            if _a_osmanli and _bu_taraf_a:
                dogrudan = dogrudan | {j}; tabi = tabi - {j}
            elif _a_osmanli and not _bu_taraf_a:
                dogrudan = dogrudan - {j}; tabi = tabi - {j}
                # 🔴 j artık YABANCI tarafta olmalı — bu döngü onu SADECE
                # Osmanlı kümelerinden ÇIKARIYOR, yabancı gövdeye EKLEMİYOR.
                # Eşleniği (③) YAZILMADI.
```

────────────────────────────────────────────────────────────────────────
③ 🔴 EKSİK — YABANCI (`s:`) TARAF override'ı YAZILMADI (D107)
────────────────────────────────────────────────────────────────────────
Yukarıdaki yama yalnız bir yerleşimi Osmanlı kümelerinden (tabi/dogrudan)
ÇIKARABİLİR ya da SOKABİLİR. Midye-Enez ve Kasr-ı Şirin'in İKİSİ de
Osmanlı ↔ YABANCI (Bulgaristan/Safevî) sınırı — yani bir yerleşim C
yüzünden Osmanlı'dan ÇIKARSA, onu ALAN tarafın (`_yabanci_devlet_faz1`,
`arac/uret_petek.py:4537`) gövde hesabına da EKLENMESİ gerekir, yoksa
o toprak parçası HİÇBİR gövdede görünmez (sessiz alan kaybı — tam
motorun kendi §4869 yorumunun uyardığı sınıf). Bu ikinci taraf
BULUNAMADI/SINANMADI çünkü `_yabanci_devlet_faz1`'in TAM mekaniği bu
görevde izlenmedi (yalnız `arac/uret_petek.py:4537-4550` civarı okundu,
bkz. `denetim/BULGU-TUNUS-IBERYA-0911.md` ve `BULGU-VASSAL-RENK-0911.md`
— AYNI fonksiyon, FARKLI bir görev için kısmen incelendi). **Bir sonraki
oturumun ilk işi bu olmalı.**

────────────────────────────────────────────────────────────────────────
④ GERİ DÖNÜŞ YOLU
────────────────────────────────────────────────────────────────────────
```python
MOTOR_C_KAPALI = os.environ.get("MOTOR_C_KAPALI") == "1"
# yukarıdaki `for _hs in (HUKUKI_SINIRLAR if ...)` satırının başına:
for _hs in ([] if MOTOR_C_KAPALI else
            (HUKUKI_SINIRLAR if 'HUKUKI_SINIRLAR' in globals() else [])):
```
`MOTOR_PARALEL_KAPALI` emsaliyle AYNI desen — 1 ise C mekanizması TAMAMEN
devre dışı, motor bugünkü (C'siz) davranışına döner.
"""
