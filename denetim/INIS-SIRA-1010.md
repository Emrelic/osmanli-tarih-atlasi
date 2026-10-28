# INIS-SIRA-1010 — inişin TEK OTORİTE LİSTESİ (ÖLÇÜM, hüküm değil)

İşçi: INIS-SIRA-1010 (UMIT, ajan) · 10 Ekim 2026 · **SÜRÜM 1 (ilk teslim, 09:55)** — adım adım
kümülatif koşu (her adımda o adımın sınavı) arka planda sürüyor; sürüm 2 onun sonucuyla gelir.
Kural: commit/push/stash YOK · C:\atlas'a ve main'e yazılmadı · `uret_petek.py` KOŞTURULMADI ve
İTHAL EDİLMEDİ · gerçek zincirler (kosu_yayin, kos_ve_yayinla) KOŞTURULMADI.
Kova kararı koordinatörün; burada yalnız **uygulanabilirlik** ölçülür.

## 0. TABAN
```
ölçüm ağacı      C:\atlas-inissira  (git worktree add … origin/main --detach; tek kullanımlık)
sürüm 1 tabanı   792bf4a4  (09:26, kümülatif + sınav koşusu)
sürüm 2 tabanı   8a6aead0  (09:52, adım adım koşu SÜRÜYOR)
fark             37ce1db2 → 792bf4a4 → 8a6aead0 yalnız CLAUDE.md + oturumlar/INIS-KOSU22.md
                 (git diff --stat ölçüldü); 534633f8'den beri arac/ js/ data/ index.html farkı 0
yerel C:\atlas   99 commit GERİDE (09:20) — ölçüm orada YAPILMADI
core.autocrlf    true ⇒ sha256'lar diff DOSYASININdır (bayt), çalışma kopyasının değil
önbellek izolasyonu  MOTOR_ONBELLEK_DIZIN proses/User/Machine: BOŞ · MOTOR_ONBELLEK_KAPALI: yok
                 varsayılan <ağaç>/arac/../_motor_onbellek = C:\atlas-inissira\_motor_onbellek
                 ölçüm öncesi/sonrası VAR MI: False/False (tuz aracı basıyor)
```

## 1. EVREN — ne tarandı
- `C:\atlas-umit\denetim\*.diff`, mtime ≥ 09 Ekim 00:00: **134 dosya** (dal makine/umit `a4fbe51c`→ sonraki
  commit'ler; takipsiz olanlar = YOLDA).
- Uzak dallar (`git diff origin/main...<dal> -- denetim/*.diff`): makine/kasa `8614a6af` (3) ·
  makine/emrelic-nokta `7100bd5f` (2) · makine/emrelic-nokta-k2 `4d879a32` (2) · makine/emrelic-kunye `6b025c94` (1) ·
  makine/emrelic-kunye-2 `cd5828f8` (2) · makine/lab `0b8c524c` (11) · nokta-once1281-ucuz-1010 `3f6b7701` (1) ·
  nokta-once1281-zincir-1010 `0e707ee6` (1). Öteki 1010 dalları (kasa-*-1010, kibris-1191-1010, kunye-*-1010,
  nokta-levant-kiyi-1010, nokta-once1281-delik-1010): `denetim/*.diff` farkı **0** — bulunamadı.
- Tek başına `origin/main` ucunda: `git apply -R --check` (inmiş mi) + `git apply --check` (uygulanabilir mi).
  **154 aday: İNMİŞ 52 · UYGULANABİLİR 50 · ÇAKIŞIYOR 52** (çakışanların çoğu bağımlı ya da eski KOORD varyantı).
  Ham liste: `scratchpad/INIS-SIRA/envanter.json`.

## 2. SIRALI TABLO (kümülatif, 792bf4a4 üstünde, her adımda önce --check)

Tuz bugün (AST, `ARAC-TAM-INSA-PARTISI-1010-TUZ.py`, uret_petek İTHAL EDİLMEDEN):
```
main 792bf4a4   girdi.motor_izi() 3: girdi 0670c8eb · renkler 25be10fa · uret_petek 2ce682d3
                _ONB_TUZ 3+onbellek_modulu(motor_onbellek b9f36f42) = 4 · geo 2 · hash fcfc307db9e8 / 3eb9a23f68c9
parti sonrası   motor_izi 6: girdi 2da70c03 · gun ea9a77a2 · motor_onbellek b9f36f42 · renkler e91c24e6 ·
(P1-P7)         uret_petek 455f48e9 · yukseklik 54c1b4c2 · _ONB_TUZ 7 alan · geo 5 (gun, motor_onbellek,
                uret_petek, yukseklik + modül) · hash 2a69c06d6ccd / 058bdcbab1de
```
⇒ TUZ sütunu: "BUGÜN" = uret_petek/renkler/girdi/motor_onbellek'e dokunur · "v3 SONRASI" = gun.py/yukseklik.py.

| # | diff (dal · commit · sha256[:12]) | dosyalar | tuz | bağımlılık | sınav · beyan · SÜRÜM 1 koşusu | --check |
|---|---|---|---|---|---|---|
| F1 | SAHIPLIK-KAPSAM-1010-v3 · umit `89b4b041` · `9e6f87c9234c` | arac/_sahiplik_uygula, _hukum_listesi (yeni), denetle, _bayat_yama_kapi; dn/ sınavlar + 2 json | hayır | — | KAPSAM-SINAV · beyan 93/93 · **son ağaçta rc1** (aşağıda ⑤) | tek ✓ · küm ✓ |
| F2 | SAHIPLIK-KUR-KAPI-1010 · `d1fcb961` · `e3e8edf11060` | _sahiplik_uygula + 2 sınav | hayır | **F1** (main'de tek RED :34) | KUR-KAPI-SINAV · beyan 16/16 · **son ağaçta rc1** (⑤) | tek ✗ · küm ✓ |
| F3 | D5-GUN-1010-v3 · `65554e0a` · `7138105ac357` | denetle, dn/D5C-DEFTER.json | hayır | — | D5-GUN-SINAV · 23/23 · **23/23 ✓** | ✓ · ✓ |
| F4 | YER-YAMA-SESSIZ-7-1010-KOORD-v2 · `e256778f` · `227fe5e47337` | data/yerlesimler.js (+1) | hayır | — · ⚠️ LAB karantina uyarısı (INIS §6b) | sınav dosyası YOK | ✓ · ✓ |
| F5 | KASA-GORUNURLUK-SAYAC-1010 · kasa `a169e505`/uç `8614a6af` · `e5fdb478e024` | denetle (`--- a/` biçimi, `diff --git` başlığı yok) | hayır | — | satır içi (6/6 + 13/13), dosya YOK | ✓ · ✓ |
| F6 | KASA-DIKIS-KAPI-1010 **v3** · kasa `7d3270e4` · `22c26f9234ea` | denetle | hayır | **F1-F5** (v3 yeniden tabanlandı; main'de tek RED :7770) | satır içi, dosya YOK | tek ✗ · küm ✓ |
| Z1 | KOSU-YAYIN-KAPI-1010 · `700bebd9` · `dd33fb7e4bd9` | kosu_yayin, kos_ve_yayinla | hayır | — | KOSU-YAYIN-KAPI-SINAV · 23/23 · **son ağaçta 8/23** (⑤) | ✓ · ✓ |
| Z2 | KOSU-YAYIN-LISTE-1010 · `047b8d9b` · `ea361154be0d` | kosu_yayin, yayin_listesi (yeni) | hayır | **Z1** | 11/11 · **11/11 ✓** | tek ✗ · küm ✓ |
| Z3 | KOS-VE-YAYINLA-ADD-1010 · `820d517e` · `f2476a5cf76e` | kos_ve_yayinla | hayır | **Z1+Z2** | 11/11 · **11/11 ✓** | tek ✗ · küm ✓ |
| Z4 | YAYIN-KAPI-OLCULEMEDI-1010 · `eec0419c` · `032d9dd407c3` | denetle_yayin, durum_tablosu, dn/ODAK-KAPI-SINAV, yeni sınav | hayır | 🔴 **Z1 ÖNCE ya da AYNI iniş** (koordinatör: main kosu_yayin 2'yi BİLİNEN BORÇ sayıp sürdürür) | 14/14 · **rc0 ✓**; ODAK-KAPI-SINAV kirli ağaçta ÇALIŞMAZ (⑤) | ✓ · ✓ |
| J1 | NEGATIF-YIL-1010-A2 · `05cc834a` · `4ab33816c568` | js/suzgec.js + sınav | hayır | — | A2-SINAV · 60/60 · **60/60 ✓** | ✓ · ✓ |
| J2 | APPJS-TARIH-1010 · `b761a608` · `0b5eb91bc4f8` | js/app.js, js/d_katman.js + sınav | hayır | J1 | 79/79 · **79/79 ✓** | ✓ · ✓ |
| J3 | ARAYUZ-UFUK-KIRPMA-1010-**v2** (v1'in yerini aldı) | js/app.js, js/d_katman.js, APPJS sınavı (A46), yeni UFUK sınavı | hayır | **J1 → J2 → J3** | UFUK-SINAV 22/22 · APPJS J3 sonrası 79/79 beklenir — **sürüm 2'de** | sürüm 2 |
| E1 | KRONO-NEG-1010 · `5f0aa0c0` · `baa29b1d9a6c` | denetle_duygu, uret_duygu, _yama_sinav, denetle_kronoloji | hayır | — | KRONO-NEG-SINAV --taban origin/main · **15/15 ✓** | ✓ · ✓ |
| E2 | SINAV-ISIRMA-1010 · `4adcbadb` · `09c9e1752c6e` | arac/sinav_isirma.py (yeni) + sınav | hayır | — | 18/18 beyan · **--gercek-yok 17/17 ✓** | ✓ · ✓ |
| E3 | OLCUM-AGACI-1010 · `c0f5a830` · `e8ec4dfabde0` | arac/olcum_agaci.py (yeni) + sınav | hayır | — | KOŞTURULMADI (⑤: paylaşılan depoda worktree add/prune + gerçek fetch) | ✓ · ✓ |
| E4 | TAHTA-ACIL-I-1010 · `ec0f882c` · `e2924ce4567f` | tahta, tahta_bekci, tahta_sunucu, aciliyet (yeni) … | hayır | — | 41/41 · **41/41 ✓** | ✓ · ✓ |
| E5 | ARAC-TAHTA-NUMARA-1010 · `1afaace7bd07` | tahta*, (5 dosya) | hayır | — | 25/25 beyan · **son ağaçta IndexError rc1** (⑤) | ✓ · ✓ |
| E6 | ARGV-GIT-DENETIM-1010-**v2** (v1'in yerini aldı) | 2 yeni dn/ dosyası | hayır | — · doğrulama: Z3 SONRASI araç 0 ihlal (main'de 2) | 28/28 beyan — **sürüm 2'de** | sürüm 2 |
| — | UMIT-KAPANIS-1010.md · umit `4eb3d0dc` · içerik sha `988b267eb77c` | oturumlar/UMIT-KAPANIS-1010.md | hayır | — · **dosya kopyası, diff değil** | — | origin/main'de **YOK** (doğrulandı) |
| V1 | KUNYE-SUMER-7-1010-v2 · kunye-2 `cd5828f8` · `75daf24f039b` | data/devletler.js | hayır | — | (V2 ile) | ✓ · ✓ |
| V2 | KUNYE-SUMER-7-1010-v4 · umit `a4fbe51c` · `9d0951053d84` | data/devletler.js | hayır | **V1** (v4 v2 ÜSTÜNE artımlı: index `199f1060`=main+v2; main'de tek RED :10568) | SUMER-SAHIP-SINAV 12/12 beyan | tek ✗ · küm ✓ |
| K1 | **KOORD-DEVLETLER-1010 (TASLAK — ONAY BEKLİYOR)** · bu işte hazırlandı · `C:\atlas-umit\denetim\` | data/devletler.js | hayır | **V2'den SONRA** | — | v4 üstüne ✓ |
| K2 | KASA-FAZ2-1010 · kasa `65e9ac7e` · `ba84025c8656` | kronoloji_almanya, olaylar_kronoeksik_0921, yerlesimler ×5 | hayır | K1 + `paketle.py yenile` AYNI iniş (koordinatör C) | md'de sınav yok | ✓ · sürüm 2 |
| P1 | NEGATIF-YIL-1010-B-v2 (−denetle:3188 hunk, −sınav) · `d298c46f7813` → ayıklanmış `NEGB-eksi3188.diff` | denetle, girdi, gun, motor_esitlik, uret_petek | **BUGÜN: girdi, uret_petek · v3 SONRASI: gun** | F3 (3188 hunk'ı D5 ile çakışır) · sınav `--exclude` | main sınavı + P2 · **67/67 ✓** | tek ✗(sınav var) · küm ✓ |
| P2 | NEGATIF-YIL-B-SINAV-DUZELT-1010 · `3e50965e1998` | dn/ARAC-NEGATIF-YIL-B-SINAV-1010.py | hayır | main sınavı | 67/67 ✓ | ✓ · ✓ |
| P3 | TUZ-DORT-DOSYA-1010-v3 (−sınav) · `eba1b787bb9b` | girdi, kaynak_durum, motor_iz_dosyalari (yeni) | **BUGÜN: girdi** | P1 aynı commit · CLAUDE.md §9.1 "ALTI" aynı commit | **33/34 ✗ (yalnız c2 = CLAUDE.md §9.1)** | tek ✗(sınav var) · küm ✓ |
| P4 | TUZ-YUKSEKLIK-1010 · `e56a9f2e` · `d5f738893b58` | uret_petek, yukseklik | **BUGÜN: uret_petek · v3 SONRASI: yukseklik** | P3 | `--arac` mutlak yol ister — sürüm 2'de | ✓ · ✓ |
| P5 | BOYA-BORC-1009-v2 · `d851887e2786` | renkler.py | **BUGÜN: renkler** | P6 ile AYNI commit | — | ✓ · ✓ |
| P6 | **BOYA-PARTISI-1010-v2** (orijinalin yerini alır; bu işte hazırlandı) | renkler.py + devletler.js (teuton-devleti boya_gerekli kaldırılır) | **BUGÜN: renkler** | **K1 üstüne** · P5 aynı commit | renk_olc — sürüm 2 | sürüm 2 |
| P7 | GIRDI-TEKIL-1010 · `3d3ce951` · `37d8b2f3a0c9` | girdi.py (yorum/mesaj) | **BUGÜN: girdi** | P3 · inmeyebilir | 7/7 · **7/7 ✓** | ✓ · ✓ |

Sözdizimi (sürüm 1 kümülatif ağacı, 49 değişen dosya): `node --check` + `py_compile` **46/46 ✓**.

## 3. KOVALAR
**③a BU İNİŞE GİRER (tuz dışı, bağımlılık karşılanmış, kümülatif temiz):**
F1 · F2 · F3 · F4 · F5 · F6(v3) · Z1 · Z2 · Z3 · Z4 · J1 · J2 · J3(v2) · E6(v2) · UMIT-KAPANIS (dosya)
+ EK (görev listesinde yok, tuz dışı, temiz — koordinatör seçer): E1 KRONO-NEG · E2 SINAV-ISIRMA · E3 OLCUM-AGACI ·
E4 TAHTA-ACIL-I · E5 ARAC-TAHTA-NUMARA
+ SEÇENEK: V1+V2 (KÜNYE, ⑥) · K1 KOORD-DEVLETLER (ONAY BEKLİYOR) + K2 KASA-FAZ2 + paketle (grup)

**③b TAM İNŞA PARTİSİ (tuzda):** P1 NEG-B-v2(−3188, −sınav) · P2 · P3 TUZ-v3 (+CLAUDE.md §9.1) · P4 TUZ-YUKSEKLIK ·
P5 BOYA-BORC-v2 + P6 BOYA-PARTISI-v2 (aynı commit) · P7 GIRDI-TEKIL · [ileride MOTOR-GECISLI-DEVIR]

**③c BEKLİYOR:**
- SUMER-SAHIP-1010 (`73fcc647`, `a9dae0f03bc9`) — taban `2fc290cd` = ANA+B10 uygulanmış nokta dosyası; kümülatif ağaçta
  ANA→B10→SUMER-SAHIP zinciri **check+apply TEMİZ** (sonra geri alındı). Bekleme SEBEBİ teknik değil, ön koşul:
  denetle.py sayısal (NEG-B, P1) + DENETLE-ONBIR 12-13 (YOLDA).
- NOKTA-SUMER ANA (`a33e8c379ef7`) / B10 (`16021ca5060d`) — SUMER-SAHIP + MOTOR-GECISLI (YOLDA).

**③d YOLDA (teslim edilmedi ya da takipsiz):** DENETLE-ONBIR-1010 · MADDE-VAR-MO-1010 (takipsiz diff var: kümülatife
check ✓) · OKU-DOSYA-ATLAMA-1010 (takipsiz: check ✓) · SAHIPLIK-OLCULEMEDI-CIKIS-1010 (takipsiz: **Y1+Y2 üstüne ✓**,
yalnız Y2 → RED :215, yalnız Y1 → RED :592 — ölçüldü) · MOTOR-GECISLI-DEVIR (yalnız sınav dosyası var, diff yok) ·
URET-PETEK-KAPI · YAYIN-KAPI ajanının beş diff'i (SEKME-YENI-KAPSAM · ODAK-KAPI başlığı · ölçülemedi çare komutu ·
iz_olculemedi ⇒ 2 · iz_kapsami CRLF; hepsi denetle_yayin + durum_tablosu + ODAK-KAPI-SINAV)

**③e FAZ 2 (INIS §6b, kümülatife yalnız check):** LAB-KONUM-ONERI-1010-v3 ✓ · -v3-ikame ✓ · -v3-balasagun-not ✓ ·
ZAMAN-Z5-1009-KOORD-v4 ✓ (data/yer_yama_1923_1945.js — karantina dosyası).

**İNMİŞ (zaten main'de, 52):** bu gecenin 1010'ları: ARAC-CIKIS-KODU-DUZELT-1010-X-v2 · -Y · ARAC-STDOUT-A-1010 ·
-YAYIN · ARAC-TAHTA-TEMIZ-AGAC-1010 · DENETLE-STDOUT-1010 · IZNIK-1097-1010-KOORD/KRONO; ayrıca 44 tane 1008/1009
(liste `envanter.json`). NEGATIF-YIL-1010-A: kısmen inmiş (−R de ✗) — TAM-INSA: `5c45d2c0` ile indi.

**YERİNİ ALDI:** KUNYE-SUMER-7-1010 (v1) ve v3 → v2+v4 · ARGV-GIT-DENETIM-1010 → v2 · ARAYUZ-UFUK-KIRPMA-1010 → v2 ·
BOYA-PARTISI-1010 → v2 · BOYA-BORC-1009 → v2 · SAHIPLIK-KAPSAM v1/v2 → v3 · D5-GUN v1/v2 → v3 (NEG-SONRA varyantı
main'de ÇAKIŞIYOR :3178) · KASA-DIKIS v1/v2 → v3 · ZAMAN-Z5-1009-KOORD-v2 → v4 · ARAC-CIKIS-KODU-DUZELT-X → X-v2 ·
NOKTA-SUMER-K2/K2-B (partide değil) · LAB-KONUM-ONERI v1/v2 → v3.

**KAPSAM DIŞI, inmemiş, tek başına check ✓ (karar bilgisi YOK, koordinatöre):** C3-YURUYUS-SUZGEC-1009 ·
KRONO-GORUNURLUK-1008-SUZGEC/-TUR/-TUR2 · KRONO-SONRA1923-EKSIK-1008 · RENK-ARDIL-1009-v3-PAKETUSTU ·
SAHIPLIK-DOSYA-DOKUMU-1009-v2 · KRONO-ONCE1281-1010-C (A/B index.html'de ÇAKIŞIYOR; üç veri dosyası da main'de YOK) ·
NOKTA-ONCE1281-UCUZ/-ZINCIR-1010 · LAB-KONUM aday/seçenek diff'leri.

## 4. surum_damgala GEREKENLER
J1 NEGATIF-YIL-1010-A2 (js/suzgec.js) · J2 APPJS-TARIH-1010 (js/app.js, js/d_katman.js) · J3 ARAYUZ-UFUK-KIRPMA-1010-v2
(js/app.js, js/d_katman.js). Hiçbir aday `index.html`e dokunmuyor (KRONO-ONCE1281-A/B hariç — kapsam dışı).

## 5. ÖLÇÜLEMEDİ (sürüm 1)
- F1, F2 sınavları **son ağaçta (tuz partisi dahil) rc 1**: sebep ÖLÇÜLDÜ — sınav fikstürü sabit bir arac/ listesi
  kopyalıyor (`ARAC = [_sahiplik_uygula, _bayat_yama_kapi, girdi, girdi_listesi, _hukum_listesi, gun, …]`), P3 TUZ-v3
  sonrası `girdi.py` `from motor_iz_dosyalari import …` yapıyor ⇒ fikstürde `ModuleNotFoundError` (elle tekrarlandı).
  ⇒ **ürün kusuru değil, SINAV FİKSTÜRÜ kusuru, ve TUZ PARTİSİ inince F1/F2 sınavları koşmaz.** Ürün aracı aynı ağaçta
  doğrudan koştu: `_sahiplik_uygula.py --atlama-yalniz` → ÇIKIŞ 2, kovalar basıldı. Adım adım koşu FAZ 1 anındaki sonucu verecek.
- Z1 sınavı son ağaçta 8/23 — Z2/Z3 sonrası sahte depo değişmiş olabilir; adım adım koşu ayıracak.
- E5 sınavı son ağaçta IndexError — E4 (TAHTA-ACIL-I) aynı tahta dosyalarını değiştiriyor; adım adım koşu ayıracak.
- ODAK-KAPI-SINAV.py: kirli ağaçta çalışmayı REDDEDİYOR (rc 2, "kirli dosyalar") — commit yasağı yüzünden bu ağaçta koşamaz.
- F4, F5, F6, K2, P5, P6: çalıştırılabilir sınav dosyası YOK (satır içi/md'de) — denetle.py çıktısıyla dolaylı.
- E3 OLCUM-AGACI sınavı bilerek koşturulmadı (paylaşılan depoda worktree add/remove/prune + gerçek fetch).
- D8: devletler_harita.js/donemler.js çözülmedi ⇒ denetle.py'de ÖLÇÜLEMEDİ (beklenen).

## 6. KUNYE-SUMER-7-1010-v4 — iki seçenek (karar koordinatörün) — sürüm 2'de denetle önce/sonra ile dolacak

## 7. KOORD-DEVLETLER-1010 / BOYA-PARTISI-1010-v2 — sürüm 2'de (ölçümler sürüyor)
