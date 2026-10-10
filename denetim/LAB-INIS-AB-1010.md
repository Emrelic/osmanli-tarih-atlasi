# LAB-INIS-AB-1010 — INIS-SIRA-1010 kalemlerinin A/B sınıflandırma ÖLÇÜMÜ (hüküm değil)

## §0 ÖNGÖRÜ (ölçümden ÖNCE) — 2026-10-10 11:01:08 +0300

- Soru tipi: SINIFLANDIRMA / ARAMA (her kalemde B-tetikleyicisi = "çarpışma" araması). LAB çarpışma aramasında karamsar
  (fazla B bulma) eğilimli → beklenen hata yönü: **B'yi fazla sayma** (dolaylı okuma zincirini fazla genişletip A kalemini B'ye itme).
  Buna karşı önlem: ② için yalnızca 1 seviye çağrı izi; ③ için yalnızca motor/build çıktısına bağlı ölçülen sabitler.
- EVREN: **154 KALEM** (INIS-SIRA-1010.md içindeki kalem satırları; birim = KALEM; bir kalem birden çok DİFF/DOSYA içerebilir).
  Henüz INIS-SIRA-1010.md okunmadı; yalnızca görevdeki "154" sayısına dayanılıyor.
- Tahmin: A ≈ **95 KALEM** · B ≈ **45 KALEM** · ÖLÇÜLEMEDİ ≈ **14 KALEM** (toplam 154).
- Bilinen iki tavan (TABAN 190 · D5C 2449) dışında tahmin edilen yeni ③ tavanı: **3** (D8a/D8k/VERILI_DELIK türü).
- Bu bölüm düzenlenmez.

---

## §1 TABAN ve EVREN (ölçüldü)
```
fetch            git -C C:\atlas fetch origin --quiet (11:01)
ağaç             <scratch>/LAB-INIS-AB/agac · git worktree add --detach origin/main
origin/main      681e2a8247731d8087cde8b6329e51049eb99d03 · rev-list --count HEAD..origin/main = 0
girdi            INIS-SIRA-1010.md origin/main'de YOK · origin/makine/umit'te `denetim/` altında (oturumlar/ DEĞİL)
                 ref origin/makine/umit @ 371961c8e (09:55, "surum 1") · blob 43cd59afbc6c8f47e4ef54ac208533777123cd81
                 (umit ucu 6dbcc51f bu dosyayı DEĞİŞTİRMEDİ; sürüm 2 bulunamadı)
```
- INIS-SIRA-1010.md 154 kalemi **ADIYLA LİSTELEMİYOR** — tabloda 31 satır, gerisi "ham liste `scratchpad/INIS-SIRA/envanter.json`".
  envanter.json hiçbir uzak dalda YOK (bütün `refs/remotes` tarandı). ⇒ Evreni INIS §1'in YÖNTEMİYLE yeniden kurdum:
  - `371961c8e` geçmişinde 09 Ekim 00:00'dan beri dokunulmuş ve o uçta HÂLÂ var olan `denetim/*.diff`: **132 DİFF**
    (13'ü sonradan silinmiş: v1/v2'ler, ZAMAN-Z5-v3 vb. — evrene alınmadı)
  - INIS'in adıyla verdiği dal uçlarında `git diff origin/main...<uç> -- denetim/*.diff`: kasa 8614a6af 3 · nokta 7100bd5f 2 ·
    nokta-k2 4d879a32 2 · kunye 6b025c94 1 · kunye-2 cd5828f8 2 · lab 0b8c524c 11 · once1281-ucuz 1 · once1281-zincir 1 = **23 DİFF**;
    `KUNYE-SUMER-7-1010.diff` iki dalda AYNI blob (d0328f32) ⇒ 22 tekil.
  - **132 + 22 = 154 KALEM = 154 DİFF.** Doğrulama: aynı uçta `apply -R --check` / `apply --check` → **İNMİŞ 52 · UYGULANABİLİR 50 ·
    ÇAKIŞIYOR 52** = INIS §1 ile BİREBİR. ⇒ Yeniden kurulan evren INIS evreniyle sayıca ve kovaca örtüşüyor; ad ad örtüşme
    envanter.json olmadan ÖLÇÜLEMEDİ (bkz §5).
- Birim: 1 KALEM = 1 DİFF dosyası; 154 diff toplam **359 DOSYA** başlığına dokunuyor (B kalemlerinde 78).

## §2 YÖNTEM
- Hepsi `git cat-file -p <blob>` ile scratch'e çıkarıldı (gerçek checkout'a yazılmadı; diff değiştirilmedi). Betikler: `sinifla.py`, `fonk.py`, `tablo.py` (scratch).
- ① `diff --git a/ b/` + `---/+++` başlıklarındaki yollar ∩ {uret_petek, renkler, girdi, motor_onbellek}.py. (Başlıksız biçim
  `--- a/` — KASA-GORUNURLUK — de çözüldü; 154'ünün hepsinde ≥1 yol bulundu.)
- ② (a) eklenen satırlarda `devletler_harita|donemler.js|bolgeler.js|devirler.js|ufuk_bantlari|ufuk_bant_parcalar|devlet_harita_ust|
  devlet_parcalar|donem_parcalar|coz-c` ve D8 işlevleri (`degismez8|degismez_r|_D8Govde|_d8_*|_D8_GOVDE_DAMGA`);
  (b) denetle.py için AST ile "üretilmiş okuyanlar": DOĞRUDAN `_D8Govde` (:5249) · 1 SEVİYE `degismez8` (:5361), `degismez_r` (:6369);
  hunk bağlamı bunların içinde mi; (c) arac/js içinde üretilmiş adı geçen 33 araç listelendi ve o araçlara dokunan 39 kalemin
  hunk'ları tek tek okundu; (d) kalemin SINAV betikleri (diff içindeki + umit ucundaki `denetim/*SINAV*`) aynı desenle tarandı,
  isabet varsa GERÇEK dosya mı SAHTE fikstür mü okunduğuna bakıldı. Kural: ALT SÜREÇ olarak bütün bir aracı koşmak (ör. tam
  denetle.py) 2 seviye sayıldı ve tek başına B yapmadı (SINIRDA diye işaretlendi).
  ⚠️ Tuzak ölçüldü: denetle.py `_devletler_harita()` (:2667) ÜRETİLMİŞ dosyayı DEĞİL `data/devletler.js`in `harita:` takma adını okur.
- ③ eklenen/silinen satırlarda `BEKLENEN_*|*TAVAN*|*TABAN*|BILINEN_*|bilinen_kusur =/:` + tavan JSON'ları (D5C-DEFTER, SAHIPLIK-TABAN-OLCULEMEDI,
  KAYNAK-TAVAN, ODAK-TAVAN); her isabetin hangi işlev/girdiyle ölçüldüğü okundu.

## §3 SAYILAR (birim: KALEM; her kalem = 1 DİFF)
| kova | KALEM | DOSYA başlığı | main'de: İNMİŞ / UYG / ÇAKIŞ |
|---|---|---|---|
| **A** | **134** | 281 | 50 / 39 / 45 |
| **B** | **20** | 78 | 2 / 11 / 7 |
| **ÖLÇÜLEMEDİ** | **0** | — | — |

B ölçüt dağılımı (KALEM): yalnız ① 11 · yalnız ② 5 · ①+② 1 (NEGATIF-YIL-1010-B-v2) · yalnız ③ 3.
- ① (12): BOYA-BORC-1009 · BOYA-BORC-1009-v2 · BOYA-PARTISI-1010 · BOYA-PARTISI-1010-v2 · C3-YURUYUS-SUZGEC-1009 · GIRDI-TEKIL-1010 ·
  NEGATIF-YIL-1010-B-v2 · TUZ-DORT-DOSYA-1010-v3 · TUZ-YUKSEKLIK-1010 · ZAMAN-PAKET-1009 · ZAMAN-PAKET-1009-v2 · ZAMAN-Z1-1008-MOTOR
- ② (6): DENETLE-TARIH-KALAN-1008 · KOSU-YAYIN-LISTE-1010 · KOS-VE-YAYINLA-ADD-1010 · OLCUM-AGACI-1010 · YAYIN-KAPI-OLCULEMEDI-1010 · NEGATIF-YIL-1010-B-v2
- ③ (3): SAHIPLIK-KAPSAM-1010-v3 · D5-GUN-1010-v3 · D5-GUN-1010-NEG-SONRA
- Not: B'nin 2'si zaten İNMİŞ (DENETLE-TARIH-KALAN-1008, ZAMAN-Z1-1008-MOTOR) ⇒ iniş kararı için fiilen 18 B kalemi açık.

## §4 ③ TAVAN LİSTESİ — ADIYLA
**Bilinen (ikisi de bulundu):**
1. `BEKLENEN_TABAN_OLCULEMEDI = 190` — SAHIPLIK-KAPSAM-1010-v3.diff:1138 (arac/denetle.py, hunk `@@ -6548 +6586`) + `denetim/SAHIPLIK-TABAN-OLCULEMEDI.json`.
   Ölçtüğü girdi: `_sahiplik_uygula` taban-ölçülemedi kümesi (yer_yama_*.js + yerleşim). **Üretilmiş dosya okuması BULUNAMADI.**
   §3.4② riski: sabit ≠ defter ⇒ ÖLÇÜLEMEDİ; A grubundaki yama/veri kalemleri (ZAMAN-Z5-v4, LAB-KONUM, NOKTA-*, KASA-FAZ2…) kümeyi
   oynatırsa 190 bayatlar ⇒ ara commit'te doğru çıktı "DEFTER DIŞI/ÖLÇÜLEMEDİ" (çıkış 2) alır. ⇒ B'liği DOĞRU ama sebebi motor değil, **A'dan sonra ölçülme** zorunluluğu.
2. `BEKLENEN_D5C = 2449` — D5-GUN-1010-v3.diff:41 + `denetim/D5C-DEFTER.json`; aynı sabit D5-GUN-1010-NEG-SONRA.diff:26.
   Ölçtüğü girdi: `degismez5(Y)` = yerleşim + devletler.js künyesi. **Üretilmiş dosya okuması BULUNAMADI.** Aynı mekanizma: A grubundaki
   künye/yerleşim kalemleri 5c kümesini oynatır ⇒ ara commit'te defter dışı giren = ÖLÇÜLEMEDİ (çıkış 2).

**Yeni (motor/build çıktısına bağlı) ③ tavanı: 0 bulundu.** İncelenip ③ OLMADIĞI ölçülenler (ADIYLA):
- `BEKLENEN_VERILI_DELIK = None` (ZAMAN-Z1-1008-ARAC.diff:63 · ZAMAN-PAKET-1009(-v2).diff:64) — tavan yazılmamış; girdi.ufuk_devirleri + yerleşim.
- `TAM_PENCERE_TAVAN = 110` · `TAM_PENCERE_TEK_TAVAN = 112` · `KUNYE_IC_BOSLUK_TAVAN = 27` (KASA-GORUNURLUK-SAYAC-1010.diff:32-35) — yerleşim/künye verisi.
  ⚠️ YENİ tavanlar; motor değil ama A grubundaki veri kalemleriyle oynayabilir (§3.4⓪ — iniş anında yeniden ölçülmeli).
- `DIKIS_DEFTER` / `ESKI_UFUKLAR` (KASA-DIKIS-KAPI-1010) — liste-tavan, yerleşim verisi.
- `BEKLENEN_2S_YALNIZ_TARAF` (DOGU-1533-0087-KOORD, DOGU-SAFEVI-0086-KOORD) · `BEKLENEN_ONCE` (DOGU-1533) · `BEKLENEN_ASAN` (HARPUT-DULKADIR ×2)
  — veriyle AYNI diffte, girdi verisinden.
- `ARDIL_BOSLUK_TAVANI = 30` (RENK-ARDIL ×2) — gün penceresi parametresi.
- `denetim/ODAK-TAVAN.json` (YIL-DOLGU-1009) · `denetim/KAYNAK-TAVAN.json` `_BEYANLI_SINIR` (KAYNAK-PENCERE-1009-v2) — veri.
- `GOVDE_TAVAN` (TAHTA-SUNUCU-MAIN-1009) HTTP sınırı · `TABAN_*` (SAHIPLIK-BAYAT-TABAN-1009) git taban revizyonu · `ZAMAN_DIS_TABAN` arayüz.
- `BEKLENEN_D8A` / `BEKLENEN_D8B` / `BEKLENEN_ENKLAV_SORGU`: **hiçbir kalem değiştirmiyor.** Ama ③-GÖLGE: DENETLE-TARIH-KALAN-1008 (İNMİŞ) ve
  NEGATIF-YIL-1010-B-v2 `degismez8`/`_d8_gun_once`yi değiştiriyor ⇒ D8A/D8B'nin ÖLÇTÜĞÜ değer koşu sonrası oynayabilir; sabit diffte yok.

## §5 ÖLÇÜLEMEDİ — ADIYLA
- KALEM düzeyinde: **0.** 154 diffin hepsinin blob'u okundu, hepsinde dosya başlığı var; ÇAKIŞAN 52 kalem için de sınıflama
  dosya+içerikle yapıldı (uygulanabilirlik gerekmez).
- EVREN düzeyinde ÖLÇÜLEMEDİ (kalem değil):
  1. `envanter.json` (INIS'in ham listesi) hiçbir dalda yok ⇒ 154'ün AD AD INIS'inkiyle aynı olduğu doğrulanamadı (yalnız sayı 154 ve 52/50/52 tuttu).
  2. INIS §1 "C:\atlas-umit … 134 dosya (takipsiz olanlar = YOLDA)" diyor; benim izli sayım 132. Takipsiz diffler (MADDE-VAR-MO, OKU-DOSYA-ATLAMA,
     SAHIPLIK-OLCULEMEDI-CIKIS) git'te yok — okunamadı.
  3. INIS tablosundaki `UMIT-KAPANIS-1010.md` (diff değil, dosya kopyası) ve J3/E6 "sürüm 2" ölçümleri 154'ün dışında; içerik okunmadı.

## §6 SINIRDA / KARAR GEREKTİRENLER (A'ya koydum, koordinatöre)
- **KOSU-YAYIN-KAPI-1010** (Z1): denetle_yayin'i alt süreç olarak koşup çıkış kodunu okur (diff :274-276) — üretilmiş okuma 2 seviye. Sınavı sahte data/*.js.
- **ZAMAN-Z1-1008-ARAC** (İNMİŞ): sınavı `--gercek` kipinde devletler_harita.js ister (ARAC-ZAMAN-Z1-SINAV-1008.py:4).
- **BAĞIMLILIK ÇATIŞMASI** (INIS §2'den): SAHIPLIK-KUR-KAPI-1010 (F2, A) → F1 (B) · KASA-DIKIS-KAPI v3 (F6, A) → F1..F5 (F1, F3 B) ·
  KOS-VE-YAYINLA-ADD (Z3, B) → Z2 (B) ✓ · YAYIN-KAPI-OLCULEMEDI (Z4, B) → Z1 (A) ✓. ⇒ F2 ve F6 A kovasında olsalar da main'e tek başlarına inemezler.
- **GUN-SAYACI-C0-1009**: arac/gun.py bugün tuz değil; TUZ-DORT-v3 inince olur.

## §7 §0 İLE KIYAS
| | §0 öngörü | ölçüm | fark |
|---|---|---|---|
| evren | 154 KALEM | 154 KALEM (=154 DİFF, 359 DOSYA başlığı) | 0 (kalemler adıyla verilmemişti — yeniden kuruldu) |
| A | ≈95 | **134** | +39 |
| B | ≈45 | **20** | −25 |
| ÖLÇÜLEMEDİ | ≈14 | **0** KALEM (+3 evren düzeyi) | −14 |
| yeni ③ tavanı | 3 | **0** motor-bağımlı (3 yeni VERİ tavanı: KASA-GORUNURLUK) | −3 |
- Öngörülen hata yönü (B'yi fazla sayma) §0'ın KENDİSİNDE gerçekleşti: B 2,25 kat, ÖLÇÜLEMEDİ fazla tahmin edildi.
  Sebep: 154'ün 86'sı yalnız `data/*.js` (yerleşim/kronoloji/künye) diffi — motor çıktısına dokunmuyor (§10'un "kalemlerin çoğu" cümlesi doğru).
- Ölçümdeki fren: ② için 1 seviye kuralı; bu kural KOSU-YAYIN-KAPI'yı A'da bıraktı (§6). Fren olmasa B = 21.
- ⚠️ Bilinen iki tavanın B sebebi §10'un yazdığı "koşu sonrası" DEĞİL: ikisi de üretilmiş dosya okumuyor; B oluşları **A grubundan
  sonra ölçülme** zorunluluğundan (§3.4⓪). Sonuç (B) aynı, gerekçe farklı — hüküm koordinatörün.

## §8 KALEM TABLOSU (154) — CSV: `C:\atlas-lab-denetim\denetim\LAB-INIS-AB-1010.csv`
| # | kalem | dosya(lar) — hepsi 1 DİFF | main | kova | B-ölçütü | kanıt | not |
|---|---|---|---|---|---|---|---|
| 1 | ACICI-CGNAT-1009 | arac/acici.py | INMIS | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 2 | ANKARA-1406-KOORD | data/yerlesimler.js | CAKISIYOR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 3 | ANKARA-1406-KRONO | data/olaylar_ek5.js | INMIS | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 4 | APPJS-TARIH-1010 | denetim/ARAC-APPJS-TARIH-SINAV-1010.js · js/app.js · js/d_katman.js | UYGULANABILIR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 5 | ARAC-CIKIS-KODU-DUZELT-1010-X-v2 | denetim/A-OKYANUSYA-0078-sina.py · denetim/ARAC-CIKIS-KODU-X2-SINAV-1010.py · denetim/ARAC-KAMERIKA-0903-kunye-sina.py · denetim/ARAC-KIMLIK-SINA-0903.py · denetim/NOKTA-KAFKAS-0077-sina.py | INMIS | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 6 | ARAC-CIKIS-KODU-DUZELT-1010-X | denetim/A-OKYANUSYA-0078-sina.py · denetim/ARAC-KAMERIKA-0903-kunye-sina.py · denetim/ARAC-KIMLIK-SINA-0903.py · denetim/NOKTA-KAFKAS-0077-sina.py | CAKISIYOR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 7 | ARAC-CIKIS-KODU-DUZELT-1010-Y | denetim/ARAC-HARITA-DURUM-0074-KABARTMA-SINAV.py · denetim/ARAC-UYGULA4-ONSINAV-0918.py · denetim/SINAV-DONEM-KAYNAK-0907.py | INMIS | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 8 | ARAC-STDOUT-A-1010-YAYIN | arac/denetle_yayin.py · denetim/ARAC-STDOUT-A-SINAV-1010.py | INMIS | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 9 | ARAC-STDOUT-A-1010 | arac/_defter_sinav_ok102.py · arac/_odenmis_sinav_ok102.py · arac/_odunc_capraz_sh110.py · arac/_yer_eslesme_ok102.py · arac/denetle_anakronizm.py · arac/denetle_bitisiklik.py · arac/denetle_bosluk.py · arac/denetle_eslesme.py · arac/denetle_gorunur.py · arac/denetle_gorunurluk.py · arac/denetle_olcek.py · arac/denetle_statu.py · arac/denetle_tabiyet.py · arac/denetle_tutarlilik.py | INMIS | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok | A — yalnız stdout başlık bloğu (hunk başlıkları import satırları). İNMİŞ. |
| 10 | ARAC-TAHTA-NUMARA-1010 | arac/_nobet.py · arac/tahta.py · arac/tahta_sunucu.py · arac/tahta_yeni.py · denetim/ARAC-TAHTA-NUMARA-SINAV-1010.py | UYGULANABILIR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 11 | ARAC-TAHTA-TEMIZ-AGAC-1010 | arac/tahta.py · denetim/ARAC-TAHTA-TEMIZ-AGAC-SINAV-1010.py | INMIS | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 12 | ARAYUZ-UFUK-KIRPMA-1010-v2 | denetim/ARAC-APPJS-TARIH-SINAV-1010.js · denetim/ARAC-UFUK-KIRPMA-SINAV-1010.js · js/app.js · js/d_katman.js | CAKISIYOR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 13 | ARGV-GIT-DENETIM-1010-v2 | denetim/ARAC-ARGV-GIT-DENETIM-1010.py · denetim/ARAC-ARGV-GIT-DENETIM-SINAV-1010.py | UYGULANABILIR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 14 | BAYAT-KOPYA-1008-KOORD | data/yerlesimler.js | INMIS | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 15 | BERKA-0087-KOORD | data/yerlesimler.js · data/yerlesimler_h2_kuzeyafrika.js | CAKISIYOR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 16 | BOSNA-MACAR-0087-KOORD | data/yerlesimler.js · data/yerlesimler_ek.js · data/yerlesimler_ek29.js · data/yerlesimler_ek_macaristan.js | INMIS | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 17 | BOSNA-MACAR-0087-KRONO | data/olaylar_ek5.js | INMIS | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 18 | BOYA-BORC-1009-v2 | arac/renkler.py | UYGULANABILIR | **B** | ① | diff başlığı: arac/renkler.py |  |
| 19 | BOYA-BORC-1009 | arac/renkler.py | UYGULANABILIR | **B** | ① | diff başlığı: arac/renkler.py |  |
| 20 | BOYA-PARTISI-1010-v2 | arac/renkler.py · data/devletler.js | UYGULANABILIR | **B** | ① | diff başlığı: arac/renkler.py |  |
| 21 | BOYA-PARTISI-1010 | arac/renkler.py | UYGULANABILIR | **B** | ① | diff başlığı: arac/renkler.py |  |
| 22 | C3-YURUYUS-SUZGEC-1009 | arac/uret_petek.py | UYGULANABILIR | **B** | ① | diff başlığı: arac/uret_petek.py | INIS: kapsam dışı, karar yok. |
| 23 | CELAYIRLI-0085-KOORD-v2 | data/yerlesimler.js | CAKISIYOR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 24 | CELAYIRLI-0085-KOORD | data/yerlesimler.js | CAKISIYOR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 25 | CELAYIRLI-0085-SECENEK-KOORD | data/yerlesimler_ok107.js · data/yerlesimler_sinir_guney.js | CAKISIYOR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 26 | D5-GUN-1010-NEG-SONRA | arac/denetle.py | CAKISIYOR | **B** | ③ | D5-GUN-1010-NEG-SONRA.diff:26 `+BEKLENEN_D5C = 2449` | D5C 2449 varyantı (NEG-B sonrası taban); main'de ÇAKIŞIYOR. Aynı tavan. |
| 27 | D5-GUN-1010-v3 | arac/denetle.py · denetim/D5C-DEFTER.json | UYGULANABILIR | **B** | ③ | D5-GUN-1010-v3.diff:41 `+BEKLENEN_D5C = 2449` + denetim/D5C-DEFTER.json (:430, 2461 satır) | D5C 2449 (bilinen). degismez5 Y (yerleşim) + devletler.js künyesini okur — üretilmiş dosya bağımlılığı BULUNAMADI. B sebebi: A grubundaki künye/yerleşim kalemleri (KUNYE-SUMER, KOORD-DEVLETLER, KASA-FAZ2…) 5c kümesini oynatır ⇒ sabit+defter A sonrası ölçülmeli. |
| 28 | DENETLE-STDOUT-1010 | arac/denetle.py · denetim/ARAC-DENETLE-STDOUT-SINAV-1010.py | INMIS | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 29 | DENETLE-TARIH-KALAN-1008 | arac/denetle.py | INMIS | **B** | ② | DENETLE-TARIH-KALAN-1008.diff:46-67 hunk `def degismez8` içinde ölçüm günü kümesi değişir; :18-40 `_d8_gun_once` + yeni `_d8_gunler` | D8 ölçümünün kendisi değişir (degismez8 → _D8Govde: devletler_harita.js·donemler.js·bolgeler.js). BEKLENEN_D8A/D8B sabiti DEĞİŞMEDİ ama ölçtüğü değer oynayabilir (③-gölge). İNMİŞ. |
| 30 | DENIZ-OKU-0085-METIN | data/olaylar_ek5.js | INMIS | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 31 | DENIZ-OKU-0085 | data/savaslar.js | INMIS | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 32 | DIVRIGI-MEMLUK-1008-EK-BEHISNI-KOORD-ARTUKLU-SONRASI | data/yerlesimler.js | INMIS | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 33 | DIVRIGI-MEMLUK-1008-EK-BEHISNI-KOORD | data/yerlesimler.js | CAKISIYOR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 34 | DIVRIGI-MEMLUK-1008-EK-KOORD | data/yerlesimler_ok110.js | INMIS | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 35 | DIVRIGI-MEMLUK-1008-EK | data/olaylar_senkron_0930.js | INMIS | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 36 | DIVRIGI-MEMLUK-1008-KOORD-ARTUKLU-SONRASI | data/yerlesimler.js | CAKISIYOR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 37 | DIVRIGI-MEMLUK-1008-KOORD | data/yerlesimler.js | CAKISIYOR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 38 | DIVRIGI-MEMLUK-1008 | data/olaylar_senkron_0930.js | CAKISIYOR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 39 | DOGU-1533-0087-KOORD | arac/denetle.py · data/yerlesimler_ek26.js · data/yerlesimler_sinir_kuzey.js | CAKISIYOR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok | A — BEKLENEN_2S_YALNIZ_TARAF/BEKLENEN_ONCE yerleşim+künye verisinden; sabit veriyle aynı diffte. |
| 40 | DOGU-1533-0087-KRONO | data/olaylar_ek17.js | INMIS | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 41 | DOGU-ANADOLU-0085-KOORD-ALT-AKKOYUNLU-KALINTI | data/yerlesimler_ek29.js | CAKISIYOR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 42 | DOGU-ANADOLU-0085-KOORD | data/yerlesimler_ek29.js | INMIS | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 43 | DOGU-SAFEVI-0086-KOORD | arac/denetle.py · data/yerlesimler.js · data/yerlesimler_ek15.js · data/yerlesimler_ek28.js | CAKISIYOR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok | A — BEKLENEN_2S_YALNIZ_TARAF veriyle aynı diffte. |
| 44 | DOGU-SAFEVI-0086-KRONO | data/olaylar_ek17.js | INMIS | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 45 | DOGUBEYAZIT-0087-KOORD | data/yerlesimler_ek26.js | INMIS | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 46 | DOGUBEYAZIT-0087 | data/olaylar_ek6.js | INMIS | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 47 | DURUM-TABLOSU-YUTMA-1009 | arac/_bagli_mi.py · arac/paketle.py | INMIS | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok | A — _bagli_mi index dosya listesi + paketle stdout. İNMİŞ. |
| 48 | EEK-BALKAN-1009-KOORD | data/yerlesimler.js · data/yerlesimler_ek.js | INMIS | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 49 | EEK-BALKAN-1009-KRONO | data/olaylar_ek2.js · data/olaylar_ek6.js | INMIS | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 50 | EEK-DOGU-1008-KOORD | data/yerlesimler.js | INMIS | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 51 | EEK-DOGU-2-0086-FARK-KOORD | data/yerlesimler.js | CAKISIYOR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 52 | EEK-DOGU-2-0086-FARK-KRONO | data/olaylar_ek11.js | INMIS | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 53 | EEK-DOGU-2-0086-KOORD | data/yerlesimler.js | CAKISIYOR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 54 | EEK-DOGU-2-0086-KRONO | data/olaylar_ek11.js | INMIS | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 55 | EPOK-SAHIP-1008-KOORD | data/yerlesimler.js · data/yerlesimler_ok107.js | CAKISIYOR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 56 | EPOK-SAHIP-1008-KRONO | data/olaylar_ek5.js | INMIS | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 57 | EPOK-SAHIP-1009-KOORD-v2 | data/yerlesimler.js · data/yerlesimler_ok107.js | CAKISIYOR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 58 | GIRDI-TEKIL-1010 | arac/girdi.py | UYGULANABILIR | **B** | ① | diff başlığı: arac/girdi.py |  |
| 59 | GORUNTU-0085-KOORD-v2 | data/yerlesimler.js | CAKISIYOR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 60 | GORUNTU-0085-KOORD | data/yerlesimler.js | CAKISIYOR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 61 | GORUNTU-0087-KOORD | data/yerlesimler_ek.js | INMIS | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 62 | GUN-SAYACI-C0-1009 | arac/gun.py · denetim/ARAC-GUN-SAYACI-C0-SINAV-1009.js · denetim/ARAC-GUN-SAYACI-C0-SINAV-1009.py · js/gun.js | CAKISIYOR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok | A — arac/gun.py bugün tuzda DEĞİL; TUZ-DORT-v3/NEG-B inince tuza girer (INIS §2 "v3 SONRASI"). |
| 63 | HARPUT-DULKADIR-1009-KOORD-V2-BOSLUK | arac/denetle.py · data/yerlesimler.js | CAKISIYOR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok | A — BEKLENEN_ASAN veriyle aynı diffte. |
| 64 | HARPUT-DULKADIR-1009-KOORD | arac/denetle.py · data/yerlesimler.js | CAKISIYOR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok | A — BEKLENEN_ASAN veriyle aynı diffte (degismez4 `_devletler_harita()` = devletler.js harita: takma adı, ÜRETİLMİŞ devletler_harita.js DEĞİL). |
| 65 | HARPUT-DULKADIR-1009 | data/kronoloji_anadolu.js | INMIS | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 66 | HAYALET-KUNYE-1008-EK-KOORD | data/yerlesimler_kamerika.js | INMIS | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 67 | HAYALET-KUNYE-1008-K-KOORD | data/devletler.js · data/yerlesimler_afrika2.js · data/yerlesimler_amerika.js · data/yerlesimler_asya.js · data/yerlesimler_gdasya.js · data/yerlesimler_kamerika.js | INMIS | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 68 | HAYALET-KUNYE-1008-KOORD | data/yerlesimler.js · data/yerlesimler_asya.js · data/yerlesimler_kamerika.js | INMIS | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 69 | IZNIK-1097-1010-KOORD | data/devletler.js | INMIS | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 70 | IZNIK-1097-1010-KRONO | data/kronoloji_anadolu.js | INMIS | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 71 | KAYNAK-PENCERE-1009-v2 | arac/denetle.py · denetim/ARAC-KAYNAK-PENCERE-SINAV-1009.py · denetim/ARAC-KAYNAK-TAVAN-SINAV-1004.py · denetim/KAYNAK-TAVAN.json | INMIS | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok | A — KAYNAK-TAVAN.json `_BEYANLI_SINIR` yalnız basılır; kaynaksızlık yerleşim verisinden. Hunk başlığı degismez8_rapor ama değişiklik sonraki yorum/kod bloğunda. İNMİŞ. |
| 72 | KITA-AD-MODEL-1009 | .claude/commands/kita.md · oturumlar/HAZIR-KITA.md | INMIS | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 73 | KOORD-DEVLETLER-1010 | data/devletler.js | UYGULANABILIR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok | A — INIS K1 TASLAK, ONAY BEKLİYOR; V2 sonrası. |
| 74 | KOS-VE-YAYINLA-ADD-1010 | arac/kos_ve_yayinla.py | CAKISIYOR | **B** | ② | KOS-VE-YAYINLA-ADD-1010.diff:43 `yayin_listesi.turet(KOK)` (1 seviye → yayin_listesi BAYAT TÜREV okuması) | 1 seviye iz. Ayrıca INIS bağımlılığı Z1+Z2; Z2 (LISTE) B ⇒ A olsaydı bile tek başına inemezdi. Sınav sahte fikstür. |
| 75 | KOSU-YAYIN-KAPI-1010 | arac/kos_ve_yayinla.py · arac/kosu_yayin.py | UYGULANABILIR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok | SINIRDA: kosu_yayin denetle_yayin'i ALT SÜREÇ olarak koşup çıkış kodunu okur (diff :274-276); üretilmiş dosya okuması 2 seviye uzakta (denetle_yayin→bayat_mi). 1-seviye kuralıyla A. Sınavı sahte data/*.js yazar. |
| 76 | KOSU-YAYIN-LISTE-1010 | arac/kosu_yayin.py · arac/yayin_listesi.py | CAKISIYOR | **B** | ② | KOSU-YAYIN-LISTE-1010.diff:396 `hashlib.sha256(_oku(ky))` (BAYAT TÜREV: kaynak data/devletler_harita.js·donemler.js ↔ *_parcalar.js damgası); :148 ESKI_LISTE | Yeni arac/yayin_listesi.py üretilmiş dosyaların İÇERİĞİNİ okur. Sınavı (ARAC-KOSU-YAYIN-LISTE-SINAV-1010.py) tempfile sahte fikstür kullanır — ürün kapısı gerçek dosyayı okur. |
| 77 | KRONO-GORUNURLUK-1008-SUZGEC | js/suzgec.js | UYGULANABILIR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 78 | KRONO-GORUNURLUK-1008-TUR | data/kronoloji_cok_500_1000.js · data/kronoloji_cok_ince_avrupa_amerika.js · data/kronoloji_cok_ince_dg_afrika.js · data/kronoloji_cok_ince_gd_asya.js · data/kronoloji_cok_ince_guney_asya.js · data/kronoloji_cok_ince_kuzey_amerika.js · data/kronoloji_cok_ince_misir_orta_asya.js · data/kronoloji_cok_once1281_iran.js | UYGULANABILIR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 79 | KRONO-GORUNURLUK-1008-TUR2 | data/kronoloji_cok_ince_avrupa_amerika.js · data/kronoloji_cok_ince_dg_afrika.js · data/kronoloji_cok_ince_gd_asya.js · data/kronoloji_cok_ince_guney_asya.js · data/kronoloji_cok_ince_misir_orta_asya.js · data/kronoloji_cok_senkron_0930.js | UYGULANABILIR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 80 | KRONO-NEG-1010 | arac/_yama_sinav.py · arac/denetle_duygu.py · arac/denetle_kronoloji.py · arac/uret_duygu.py | UYGULANABILIR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 81 | KRONO-ONCE1281-1010-A | data/olaylar_once1281_a.js · index.html | CAKISIYOR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 82 | KRONO-ONCE1281-1010-B | index.html · data/olaylar_once1281_b.js | CAKISIYOR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 83 | KRONO-ONCE1281-1010-C | data/olaylar_once1281_c.js | UYGULANABILIR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 84 | KRONO-SENKRON-1008-GURCISTAN-KOORD | data/devletler.js · data/yerlesimler.js | CAKISIYOR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 85 | KRONO-SENKRON-1008-MOSTAR-KOORD | data/yer_yama.js · data/yerlesimler.js · data/yerlesimler_seyrek.js | INMIS | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 86 | KRONO-SENKRON-1008-MOSTAR | data/olaylar_ek5.js | INMIS | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 87 | KRONO-SONRA1923-EKSIK-1008-B | data/kronoloji_cok_1923_1945.js | CAKISIYOR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 88 | KRONO-SONRA1923-EKSIK-1008 | data/kronoloji_cok_1923_1945.js | UYGULANABILIR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 89 | KUNYE-SUMER-7-1010-v4 | data/devletler.js | CAKISIYOR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 90 | MISIR-SENKRON-0087-KOORD | data/yerlesimler.js · data/yerlesimler_afrika.js | CAKISIYOR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 91 | MISIR-SENKRON-0087-KRONO | data/kronoloji_misir.js · data/olaylar_ek5.js · data/olaylar_ek8.js | INMIS | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 92 | NEGATIF-YIL-1010-A | arac/odak_cozum.js · denetim/ARAC-GUN-SAYACI-C0-SINAV-1009.js · index.html · js/app.js · denetim/ARAC-NEGATIF-YIL-A-SINAV-1010.js | CAKISIYOR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok | A — sınavlardaki TABAN/tabanKip = sınav taban dosyası, tavan değil; odak_cozum.js hunk :134 (yay_dogrula değil). |
| 93 | NEGATIF-YIL-1010-A2 | denetim/ARAC-NEGATIF-YIL-A2-SINAV-1010.js · js/suzgec.js | UYGULANABILIR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 94 | NEGATIF-YIL-1010-B-v2 | arac/denetle.py · arac/girdi.py · arac/gun.py · arac/motor_esitlik.py · arac/uret_petek.py · denetim/ARAC-NEGATIF-YIL-B-SINAV-1010.py | CAKISIYOR | **B** | ①+② | diff başlığı: arac/girdi.py, arac/uret_petek.py / hunk @@ -5157 `def _d8_gun_once` gövdesi değişir (D8 gün yardımcısı) | ① girdi.py+uret_petek.py; ② D8 yardımcısı. INIS P1 (main'de ÇAKIŞIYOR: −3188 ayıklanmış sürüm ayrı). |
| 95 | NEGATIF-YIL-B-SINAV-DUZELT-1010 | denetim/ARAC-NEGATIF-YIL-B-SINAV-1010.py | UYGULANABILIR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 96 | OLCUM-AGACI-1010 | arac/olcum_agaci.py · denetim/ARAC-OLCUM-AGACI-SINAV-1010.py | UYGULANABILIR | **B** | ② | OLCUM-AGACI-1010.diff:20 `kodla.py coz-c data data/devletler_harita.js` · :48 `_D8_GOVDE_DAMGA` · sınav `_d8_govde_kimlik` | Aracın işi coz-c İKİLİSİyle üretilmiş gövdeyi çözmek (§5) — tanım gereği üretilmiş veri okur. |
| 97 | RENK-ARDIL-1009-v3-PAKETUSTU | arac/renk_olc.py · denetim/ARAC-RENK-ARDIL-SINAV-1009.py | UYGULANABILIR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok | A — aynı (ARDIL_BOSLUK_TAVANI=30). |
| 98 | RENK-ARDIL-1009 | arac/renk_olc.py · denetim/ARAC-RENK-ARDIL-SINAV-1009.py | CAKISIYOR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok | A — ARDIL_BOSLUK_TAVANI=30 gün penceresi (parametre); renk_olc üretilmiş dosya okumaz. |
| 99 | SABLON-KANADA-1008-KOORD | data/yerlesimler_kamerika.js | INMIS | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 100 | SAHIPLIK-BAYAT-TABAN-1009 | arac/_sahiplik_uygula.py · denetim/ARAC-SAHIPLIK-BAYAT-TABAN-SINAV-1009.py · denetim/ARAC-SAHIPLIK-KAPI-SINAV-1006.py | CAKISIYOR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok | A — "taban" burada git taban revizyonu. |
| 101 | SAHIPLIK-BAYAT-TABAN-R5-1009 | denetim/ARAC-SAHIPLIK-BAYAT-TABAN-SINAV-1009.py | INMIS | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 102 | SAHIPLIK-DOSYA-DOKUMU-1009-v2 | arac/_sahiplik_uygula.py · denetim/ARAC-SAHIPLIK-DOSYA-DOKUMU-SINAV-1009.py | UYGULANABILIR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 103 | SAHIPLIK-DOSYA-DOKUMU-1009 | arac/_sahiplik_uygula.py | CAKISIYOR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 104 | SAHIPLIK-KAPSAM-1010-v3 | arac/_bayat_yama_kapi.py · arac/_hukum_listesi.py · arac/_sahiplik_uygula.py · arac/denetle.py · denetim/ARAC-SAHIPLIK-BAYAT-TABAN-SINAV-1009.py · denetim/ARAC-SAHIPLIK-KAPSAM-SINAV-1010.py · denetim/SAHIPLIK-HUKUM-LISTESI.json · denetim/SAHIPLIK-TABAN-OLCULEMEDI.json | UYGULANABILIR | **B** | ③ | SAHIPLIK-KAPSAM-1010-v3.diff:1138 `+BEKLENEN_TABAN_OLCULEMEDI = 190` (arac/denetle.py, hunk @@ -6548 +6586) + denetim/SAHIPLIK-TABAN-OLCULEMEDI.json | TABAN 190 (bilinen). Ölçtüğü girdi: _sahiplik_uygula taban kümesi (data/yer_yama_*.js + yerleşim) — üretilmiş dosya OKUMASI BULUNAMADI (sınavdaki :2121 "devletler_harita" sahte dizgi). B sebebi motor çıktısı değil: A grubundaki yama/veri kalemleri kümeyi oynatır ⇒ A inişinden SONRA ölçülmeli (§3.4⓪②). |
| 105 | SAHIPLIK-KOD-TABLOSU-BEYAN-1009 | arac/_sahiplik_uygula.py | INMIS | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 106 | SAHIPLIK-KUR-KAPI-1010 | arac/_sahiplik_uygula.py · denetim/ARAC-SAHIPLIK-KAPSAM-SINAV-1010.py · denetim/ARAC-SAHIPLIK-KUR-KAPI-SINAV-1010.py | CAKISIYOR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok | A, ama INIS: F1'e BAĞIMLI (main'de tek RED). F1 B ⇒ fiilen B ile birlikte iner. |
| 107 | SAHIPLIK-UYGULA-KUSUR-1008 | arac/_sahiplik_uygula.py | CAKISIYOR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 108 | SEFER-OKU-0087 | data/savaslar.js · js/app.js | INMIS | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 109 | SEFER-PENCERE-1009 | js/app.js | INMIS | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 110 | SINAV-ISIRMA-1010 | arac/sinav_isirma.py · denetim/ARAC-SINAV-ISIRMA-SINAV-1010.py | UYGULANABILIR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 111 | SUMER-SAHIP-1010 | data/yerlesimler_nokta_ortadogu_0917.js | CAKISIYOR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 112 | TAHTA-ACIL-I-1010 | arac/aciliyet.py · arac/tahta.py · arac/tahta_bekci.py · arac/tahta_sunucu.py · denetim/ARAC-TAHTA-ACIL-I-SINAV-1010.py | UYGULANABILIR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 113 | TAHTA-SUNUCU-MAIN-1009 | arac/tahta_sunucu.py · denetim/ARAC-API-AD-SINAV-1009.py · denetim/ARAC-TAHTA-CGNAT-SINAV-1009.py · denetim/ARAC-TAHTA-SUNUCU-YAZMA-SINAV-1009.py | INMIS | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok | A — GOVDE_TAVAN HTTP gövde boyu sınırı. |
| 114 | TEBRIZ-1514-0087-KOORD | data/yerlesimler.js · data/yerlesimler_ok107.js | CAKISIYOR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 115 | TEBRIZ-1514-0087 | data/olaylar_ek5.js | INMIS | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 116 | TUNA-BALKAN-0085-KRONO | data/olaylar_ek3.js | INMIS | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 117 | TUZ-DORT-DOSYA-1010-v3 | arac/girdi.py · arac/kaynak_durum.py · arac/motor_iz_dosyalari.py · denetim/ARAC-TUZ-DORT-DOSYA-SINAV-1010.py | CAKISIYOR | **B** | ① | diff başlığı: arac/girdi.py |  |
| 118 | TUZ-YUKSEKLIK-1010 | arac/uret_petek.py · arac/yukseklik.py | UYGULANABILIR | **B** | ① | diff başlığı: arac/uret_petek.py |  |
| 119 | YAYIN-KAPI-OLCULEMEDI-1010 | arac/denetle_yayin.py · arac/durum_tablosu.py · denetim/ARAC-YAYIN-KAPI-OLCULEMEDI-SINAV-1010.py · denetim/ODAK-KAPI-SINAV.py | UYGULANABILIR | **B** | ② | YAYIN-KAPI-OLCULEMEDI-1010.diff:168 `olculemedi("yayın tazeliği", yontem)` — main() bayat_mi() sonucunu hükme bağlar; bayat_mi = arac/denetle_yayin.py:190 `data/donemler.js` okur | 1 seviye iz (main→bayat_mi). donemler.js YOK/bayat iken kapı çıkışı 0→2 olur ⇒ çıktısı üretilmiş dosyanın durumuna bağlı. Sınav sahte fikstür. INIS: Z1 önce/aynı iniş. |
| 120 | YER-YAMA-SESSIZ-7-1010-KOORD-v2 | arac/denetle.py · data/yerlesimler.js | UYGULANABILIR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 121 | YIL-DOLGU-1008 | data/devletler.js | CAKISIYOR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 122 | YIL-DOLGU-1009 | data/devletler.js · denetim/ODAK-TAVAN.json | CAKISIYOR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok | A — ODAK-TAVAN.json değişir; odak ölçümü index.html+data okur (üretilmiş okuma yalnız odak_cozum.js:607 yay_dogrula kipinde, varsayılan KAPALI). |
| 123 | ZAMAN-PAKET-1009-v2 | arac/denetle.py · arac/denetle_eslesme.py · arac/denetle_gorunur.py · arac/denetle_statu.py · arac/denetle_yayin.py · arac/girdi.py · arac/odak_cozum.js · arac/odak_olc.py · arac/renk_olc.py · arac/uret_petek.py · css/style.css · data/kronoloji_cok_1923_1945.js · data/kronoloji_cok_once1281_afrika.js · data/kronoloji_cok_once1281_dogu_asya.js · data/kronoloji_cok_once1281_iran.js · data/yer_yama_once1281_z6.js · index.html · js/app.js | CAKISIYOR | **B** | ① | diff başlığı: arac/girdi.py, arac/uret_petek.py | ① girdi.py+uret_petek.py; ayrıca BEKLENEN_VERILI_DELIK=None (③ değil). main'de ÇAKIŞIYOR. |
| 124 | ZAMAN-PAKET-1009 | arac/denetle.py · arac/denetle_eslesme.py · arac/denetle_gorunur.py · arac/denetle_statu.py · arac/denetle_yayin.py · arac/girdi.py · arac/odak_cozum.js · arac/odak_olc.py · arac/renk_olc.py · arac/uret_petek.py · css/style.css · data/kronoloji_cok_1923_1945.js · data/kronoloji_cok_once1281_afrika.js · data/kronoloji_cok_once1281_dogu_asya.js · data/kronoloji_cok_once1281_iran.js · data/yer_yama_once1281_z6.js · index.html · js/app.js | CAKISIYOR | **B** | ① | diff başlığı: arac/girdi.py, arac/uret_petek.py | ① girdi.py+uret_petek.py; ayrıca BEKLENEN_VERILI_DELIK=None (③ değil). main'de ÇAKIŞIYOR. |
| 125 | ZAMAN-Z1-1008-ARAC | arac/denetle.py · arac/denetle_eslesme.py · arac/denetle_gorunur.py · arac/denetle_statu.py · arac/denetle_yayin.py · arac/odak_cozum.js · arac/odak_olc.py · arac/renk_olc.py | INMIS | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok | SINIRDA: sınavı ARAC-ZAMAN-Z1-SINAV-1008.py:4 `--gercek` kipinde "devletler_harita.js ister" (varsayılan kip istemez). BEKLENEN_VERILI_DELIK = None (tavan yazılmadı; girdi.ufuk_devirleri + yerleşim — motor çıktısı değil). İNMİŞ. |
| 126 | ZAMAN-Z1-1008-MOTOR | arac/girdi.py · arac/uret_petek.py | INMIS | **B** | ① | diff başlığı: arac/girdi.py, arac/uret_petek.py | İNMİŞ (main'de zaten). |
| 127 | ZAMAN-Z2-1008-APPJS | css/style.css · index.html · js/app.js | CAKISIYOR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok | A — ZAMAN_DIS_TABAN arayüz sabiti. |
| 128 | ZAMAN-Z5-1008-KOORD | data/yer_yama_1923_1945.js | CAKISIYOR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 129 | ZAMAN-Z5-1009-KOORD-v2 | data/yer_yama_1923_1945.js | UYGULANABILIR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok | A — "taban" yorumda; veri yaması. |
| 130 | ZAMAN-Z5-1009-KOORD-v4 | data/yer_yama_1923_1945.js | UYGULANABILIR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok | A — "taban" yorumda; veri yaması (INIS: karantina dosyası). |
| 131 | ZAMAN-Z6-1008-KOORD | data/yer_yama_once1281_z6.js | CAKISIYOR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 132 | ZAMAN-Z6-1009-KOORD-v2 | data/yer_yama_once1281_z6.js | INMIS | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 133 | KASA-DIKIS-KAPI-1010 | arac/denetle.py | CAKISIYOR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok | A (DIKIS_DEFTER/ESKI_UFUKLAR yerleşim verisinden). INIS: v3 F1-F5'e bağımlı (F1,F3 B). Bu blob kasa 8614a6af sürümü (main'de ÇAKIŞIYOR). |
| 134 | KASA-FAZ2-1010 | data/kronoloji_almanya.js · data/olaylar_kronoeksik_0921.js · data/yerlesimler.js · data/yerlesimler_a78_avrupa.js · data/yerlesimler_anadolu_0914.js · data/yerlesimler_avrupa.js · data/yerlesimler_ek9.js | UYGULANABILIR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok | A — INIS: K1 + `paketle.py yenile` aynı iniş. |
| 135 | KASA-GORUNURLUK-SAYAC-1010 | arac/denetle.py | CAKISIYOR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok | A — YENİ tavanlar TAM_PENCERE_TAVAN=110 · TAM_PENCERE_TEK_TAVAN=112 · KUNYE_IC_BOSLUK_TAVAN=27 (diff :32-35) yerleşim/künye verisinden, motor çıktısından DEĞİL; ama A grubundaki veri kalemleri bunları oynatabilir (§3.4⓪). |
| 136 | NOKTA-SUMER-1010-B10 | data/yerlesimler_nokta_ortadogu_0917.js | UYGULANABILIR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 137 | NOKTA-SUMER-1010 | data/yerlesimler_nokta_ortadogu_0917.js | UYGULANABILIR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 138 | NOKTA-SUMER-1010-K2-B | data/yerlesimler_nokta_ortadogu_0917.js | CAKISIYOR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 139 | NOKTA-SUMER-1010-K2 | data/yerlesimler_nokta_ortadogu_0917.js | UYGULANABILIR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 140 | KUNYE-SUMER-7-1010 | data/devletler.js | UYGULANABILIR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 141 | KUNYE-SUMER-7-1010-v2 | data/devletler.js | UYGULANABILIR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 142 | LAB-KONUM-ADAY-1010-pantelerya | data/yerlesimler.js | UYGULANABILIR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 143 | LAB-KONUM-ONERI-1010-ikame-tasi-secenegi | data/yerlesimler.js · data/yerlesimler_afrika.js | UYGULANABILIR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 144 | LAB-KONUM-ONERI-1010-kusayr-secenekA | data/yerlesimler_afrika.js | UYGULANABILIR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 145 | LAB-KONUM-ONERI-1010-v2-ikame-secenegi | data/yerlesimler.js · data/yerlesimler_asya.js | UYGULANABILIR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 146 | LAB-KONUM-ONERI-1010-v2-tasima-secenegi | data/sehirler.js · data/yerlesimler.js · data/yerlesimler_asya.js | UYGULANABILIR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 147 | LAB-KONUM-ONERI-1010-v2 | data/yerlesimler.js · data/yerlesimler_asya.js · data/yerlesimler_h2_kuzeyafrika.js | UYGULANABILIR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 148 | LAB-KONUM-ONERI-1010-v3-balasagun-not | data/yerlesimler_ortaasya3.js | UYGULANABILIR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 149 | LAB-KONUM-ONERI-1010-v3-balasagun-tasima-BEKLER | data/yerlesimler_ortaasya3.js | UYGULANABILIR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 150 | LAB-KONUM-ONERI-1010-v3-ikame | data/yerlesimler_asya.js | UYGULANABILIR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 151 | LAB-KONUM-ONERI-1010-v3 | data/sehirler.js · data/yerlesimler.js · data/yerlesimler_asya.js · data/yerlesimler_h2_kuzeyafrika.js | UYGULANABILIR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 152 | LAB-KONUM-ONERI-1010 | data/yerlesimler.js · data/yerlesimler_asya.js · data/yerlesimler_h2_kuzeyafrika.js | UYGULANABILIR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 153 | NOKTA-ONCE1281-UCUZ-1010 | data/yerlesimler.js · data/yerlesimler_asya.js · data/yerlesimler_avrupa.js | UYGULANABILIR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
| 154 | NOKTA-ONCE1281-ZINCIR-1010 | data/devletler.js · data/olaylar_once1281_zincir_1010.js · data/yerlesimler.js · data/yerlesimler_asya.js · data/yerlesimler_ek14.js · data/yerlesimler_ortaasya3.js | UYGULANABILIR | **A** | — | tuz dosyası yok · eklenen satırda üretilmiş ad/D8 işlevi yok · motor-bağımlı tavan yok |  |
