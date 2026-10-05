# SINAV-ENVANTER-1006 — denetim/ sınav betiklerinin toplu koşusu

Oturum: UMIT-W27-SINAV-ENVANTER-1006 · görevi veren: UMIT İRTİBAT · hüküm: YILDIRIM BAYEZIT
Koşu ağacı: `C:\atlas-w27` (atılabilir worktree, `origin/main` 9a2772bd, detached)
Bu bir SAYIMDIR — hiçbir sınav düzeltilmedi.

## 0. Öngörü — ÖLÇÜMDEN ÖNCE MÜHÜRLENDİ (2026-10-06, tarama/koşu başlamadan)

Evren (sayıldı, koşu değil): `denetim/` altında adında `SINA` ya da `TEST` geçen
`.py`/`.js`/`.mjs` dosyası = **167** (119 py · 48 js; 166 `SINA`, 1 `TEST`).
"~256" rakamı, bütün uzantılar sayılınca çıkan ~265 dosyaya karşılık geliyor
(png/json/md/diff dahil) — betik değiller.

Tahminler (167 üstünden, kaba):
- ATLANDI ≈ %40 (~65) — çoğu (b) mutlak yol ve (c) `http` kalıbı yüzünden; (c) kalıbı
  geniş (yorumdaki URL de yakalanır), bu yüzden şişkin çıkacak.
- GECTI ≈ %30 (~50)
- HATA ≈ %20 (~35) — taşınmış/silinmiş dosya, tarayıcıda koşması gereken JS.
- OTTU ≈ %7 (~12) — veri sınavdan sonra değişti.
- ZAMAN-AŞIMI ≈ %3 (~5)
- Tek seferlik/sürekli: başlığında AÇIKÇA söyleyen azınlık (< %25); çoğu "belirsiz".
- Yan etki: en az 1 betik worktree'de dosya değiştirecek (denetim/ altında rapor/json yazımı);
  data/ · arac/ · oturumlar/ altında değişiklik beklemiyorum.

## 1. Ölçüm — özet sayılar (167 betik)

| Kova | Sayı | Öngörü | Not |
|---|---|---|---|
| GECTI | **75** | ~50 | 3'ünde çıktıda "ÖTTÜ/✗" geçiyor ama hepsi kasıtlı ters yön sınavı (okundu) |
| ATLANDI | **45** | ~65 | neden (çoklu): b 17 · c 16 · a 11 · d 11 |
| HATA | **28** | ~35 | alt sebep aşağıda |
| OTTU | **18** | ~12 | 11 GERILEME ADAYI · 7 BAYAT SABIT ADAYI |
| ZAMAN-AŞIMI | **1** | ~5 | `ARAC-BEKCI-SINAV-SAHTEMOTOR-0911.py` (300 sn, süreç ağacı taskkill /T ile öldürüldü) |

Öngörü tutmadı: GECTI fazla, ATLANDI az çıktı. Tek seferlik/sürekli öngörüsü tuttu (aşağıda).

**HATA alt sebepleri (28):** argüman 12 (`sys.argv[1]`/`process.argv` bekliyor — 6 py IndexError,
5 js "path undefined", 1 argparse `--bantli`) · üretilmiş-çıktı-yok 5 (`data/devletler_harita.js`,
`data/donemler.js` gitignore'lu; taze ağaçta yok — 2'si bunu kendisi söylüyor) · dosya-yok 4
(`yer_yama_afrika_1923.js`, `yer_yama_manda_0906.js`, `adaylar_tum.json` silinmiş; `ARAC-D-RENK-0073`
**başka makinenin** temp yolunu `C:\Users\emrem\…` gömülü taşıyor) · tarayıcı-betiği 2 · ölçülemedi 2
(KOSU8-BITIS, KOSU8-PETEKSIZ: çıkış 2, kendi çıktısını ayrıştıramadı) · ortam 1 (TAHTA-KAPI-1003
`.git/rebase-merge` arıyor; worktree'de `.git` dosyadır) · girdi-boş 1 (ODAK-ASYA-0080) ·
istisna 1 (ODAK-OSMANLI-ANADOLU-0080: `odak_olc.yer_havuzu` artık yok — API değişmiş).
⇒ 28 HATA'nın **yalnız 5'i** (dosya-yok 4 + API 1) gerçek çürüme; 12 argüman + 5 üretilmiş çıktı +
1 ortam = **18'i koşu biçiminden**, argümanla / tam koşudan sonra koşturulsa farklı kovaya düşebilir
(ÖLÇÜLMEDİ). Kalan 5 (tarayıcı 2 · ölçülemedi 2 · girdi-boş 1) bu ayrımda belirsiz.

**OTTU (18) — ADAY, hüküm değil.** Ölçüt mekanik: kodda sabit beklenen değer (`== 389`,
`BEKLENEN = …`, `TAVAN = …`, sabit sayılı assert, `=== 12` vb.) varsa BAYAT SABIT ADAYI.
- BAYAT SABIT ADAYI (7): ANTLASMA-KADEME-0074 (2 geçti · 6 kaldı) · ENKLAV-0907 (TABAN 661 bekliyor, 734 ölçtü) ·
  MANDA-IRAK-0907 (degismez4 dönüş yapısı tuple oldu) · IKINCI-GECIS-0903 · KOSU8-ENKLAV · KOSU8-MUKERRERANAHTAR ·
  RENK-98-0903
- GERILEME ADAYI (11): 1DUNYA-A-0917 · DEGISMEZ2-YERKORU-1004 · KAMERIKA-0907 · KAYNAK-TAVAN-1004 (19/20, S1 kaldı) ·
  KUNYE-KRONO-KAPSAM-1004 (3 hata) · LISTE-BAYAT-1004 · MUKERRER-0906 · KRONO-0076-A (id çarpışması) ·
  ORTAK-0076-BIRLESTIRME · KOSU8-KILIT (bekleyen yamalar varsayılan glob'a düşmüyor) · ONEM-SUZGEC-0910
- ⚠️ Mekanik ölçütün zaafı: `SABIT` kalıbı dosyanın HERHANGİ bir yerinde sabit karşılaştırma görürse
  "sabit" der — "olcum" diye işaretlenen bir betik de dolaylı sabit taşıyabilir. 34 betik sabit,
  124 ölçüm, 9 belirsiz; GECTI'lerin 18'i sabit taşıyor (bugün tutuyor, yarın bayatlayabilir).

## 2. Süreler

Toplam koşu: **1612 sn (~27 dk)**, 122 betik. Kapı adayı hızlı küme (GECTI · < 60 sn · yan etkisiz):
66 betik, toplam 241 sn.

| # | sn | kova | betik |
|---|---|---|---|
| 1 | 300 | ZAMAN-AŞIMI | ARAC-BEKCI-SINAV-SAHTEMOTOR-0911.py |
| 2 | 206.9 | GECTI | SINAV-KOSU8-ACIKUZANTI-0907.py |
| 3 | 202.7 | GECTI | SINAV-KOSU8-ACIKBAGLAM-0907.py |
| 4 | 183.4 | OTTU | ARAC-KAYNAK-TAVAN-SINAV-1004.py |
| 5 | 143.0 | GECTI | SINAV-KOSU8-ACIK-0907.py |
| 6 | 114.3 | GECTI | ARAC-YETIM-MADDE-SINAV-1004.py |
| 7 | 106.3 | GECTI | SINAV-KOSU8-ACIKCINS-0907.py |
| 8 | 58.1 | GECTI | ARAC-OLCULEMEDI-KAPI-SINAV-1004.py |
| 9 | 37.7 | GECTI | ARAC-KRONO-KUNYE-PENCERE-SINAV-1004.py |
| 10 | 28.9 | GECTI | ARAC-DEGISMEZ2-SIZINTI-SINAV-1004.py |

## 3. Tek seferlik / sürekli

Betiğin İLK 40 SATIRINDA açık beyan aranarak: **belirsiz 160 · sürekli 6 · tek seferlik 1.**
Sürekli diyenler: ODAK-KAPI-SINAV (GECTI, zaten yayın kapısına bağlı) · SINAV-KOSU8-ALETESIK (GECTI) ·
ORTAK-0076-BIRLESTIRME (OTTU) · AFRIKA-SUDAN-0906 (HATA) · MOTOR-YURUYUS-0917 ve KOSU8-URETIMSIZ (ATLANDI).
Tek seferlik: DEGISMEZ8-KORLUK-1004 (HATA, üretilmiş çıktı yok).
⇒ Betikler kendi ömürlerini neredeyse HİÇ beyan etmiyor. Adlardaki tarih damgası bir ipucu ama beyan değil.

## 4. ATLANDI (45) — adıyla, koşturulmadı

Kalıplar METİN taramasıdır, kanıtlanmış yazma değil: (a) = tuz dosyasının adı + herhangi bir yazma
ilkeli (`open(..,'w')`, `write_text`, `writeFileSync`, `shutil.copy`, `git apply` …) aynı dosyada;
(d) = `uret_petek` adı + yürütme ilkeli (`subprocess`, `spawn`, `execFile` …). (c) kalıbı `http`
geniş: yorumdaki URL ve `http.server` da yakalanır — 16'nın çoğu muhtemelen yerel tarayıcı sınavı
(ÖLÇÜLMEDİ). Tam liste `.tsv`de `kova=ATLANDI`, sebebi `alt_sebep` sütununda.
- (a)/(d): BEKCI-SINAV-YARIYAZIM-0911 · DONEMLER-OKUYUCU-1004 · KODLA-VK-1004 · MOTOR-V-KID-1004 · MOTOR-YURUYUS-0917 ·
  PARALEL-0910 · PARALEL-UYGULAMA-0910 · TUZ-0924 · UFUK-SABITI-1004 · KOSU8-ALASKA-DONUSTUR · KOSU8-KAPI ·
  KOSU8-KIYAS · KOSU8-KOS · KOSU8-URETIMSIZ · KOSU8-VL
- (b) mutlak yol: ACILIS-ANIM-0929-sinav-kur · FAZ2-0906 · HIMAYE-0914 · LEGO-ayikla · SERHAT-IZGARA-0907 · SERHAT-0907 ·
  TASIMA-ON-0905 · YAMA-SINAV-1001 · YERLESIM-UYGULA-0930 · YUK-KAPI-0925 · EKOKUMA-0076-A · EKOKUMA-0076-B ·
  EKOKUMA-0077-B · KRONO-0076-C · SINIR-CIZGI-0076 (+ BEKCI-YARIYAZIM, TUZ-0924)
- (c) ağ kalıbı: ACILIS-ANIM-0929-sina · CIZGI-ANLAM-0072/0074 · ETIKET-0073 · HALKA-SARI-0072 · OK-0071/0072/0073/0074/0074B ·
  SEFER-OK-0070 · YAMA-SINA.js · YUK-ACILIS-0925 · YUKLEME-0072 · EKO-UI-0073 (+ sinav-kur)

## 5. YAN ETKİ — worktree'de `git status --porcelain` (koşu sonu, AYNEN)

```
 M denetim/EKO-BOLGE-BAG-0920.json
 M denetim/ODAK-TAVAN.json
 M denetim/_1783_cikar.js
 M denetim/_1783_ulke.json
?? denetim/_omur.json
```
Her betikten sonra status alındı; değişiklik sahipleri:
- `ARAC-1783-ULKE-SINA.py` → `_1783_cikar.js` (2 satır içerik) · `_1783_ulke.json` (yalnız satır sonu)
- `ARAC-EKO-BOLGE-BAG-SINA-0920.py` → `EKO-BOLGE-BAG-0920.json` (35 satır içerik — sınav kendi rapor dosyasını yeniden yazıyor)
- `ARAC-KAMERIKA-0903-taban-sina.py` → `_omur.json` (yeni dosya)
- `ODAK-KAPI-SINAV.py` → `ODAK-TAVAN.json` (yalnız satır sonu, içerik farkı 0; betiğin kendisi "data/ temiz" doğruluyor)

**`data/` · `arac/` · `oturumlar/` altında değişiklik: 0.** Hepsi `denetim/` altında.
⚠️ Sınır: git status yalnız ağacın İÇİNİ görür. (b) kalıbı mutlak yolu olan betikleri dışarıda
tuttu; ama `ARAC-D-RENK-0073` gibi başka bir mutlak yol taşıyan (`C:\Users\emrem\…`) betikler (b)
kalıbına girmedi — bu betik yalnız OKUMAYA çalışıp düştü. Ağaç dışına yazan bir betik olsaydı bu
ölçüm onu GÖRMEZDİ.

## 6. Öneri — kapıya bağlanmaya ADAY (hüküm koordinatörde)

1. **Hızlı küme:** GECTI · < 60 sn · yan etkisiz · beklenen ölçümden = en güçlü aday. Özellikle
   `-1004` dizisi (DEGISMEZ2-SIZINTI 29 sn · DEVRALMA-DONGU 7 sn · KRONO-KUNYE-PENCERE 38 sn ·
   KRONO-SUZGEC 8 sn · OLCULEMEDI-KAPI 58 sn) iki yönlü sınav olarak yazılmış ve bugün geçiyor.
2. **Bağlanmamalı (önce iş):** 7 BAYAT SABIT ADAYI (sabit değer yenilenmeden bağlanırsa kapı ilk günden kırmızı) ·
   12 argümanlı betik (kapı onlara argümanı vermeli; hangi argüman — ÖLÇÜLMEDİ) · 5 üretilmiş-çıktı
   betiği (yalnız tam koşudan SONRAKİ kapıya bağlanabilir).
3. **Kapı tasarımı için ders:** 4 betik koşunca `denetim/` altında dosya yazıyor — kapıya bağlanacaksa
   ya salt-okur yapılmalı ya da yan etkisi kabul edilmeli; CRLF/LF yeniden yazımı (ODAK-KAPI, 1783)
   boş diff yaratıp "değişiklik var" yanılgısı doğurur.
4. **11 GERILEME ADAYI** tek tek bir işçiye: özellikle `-1004` dizisinden 4'ü (YERKORU · KAYNAK-TAVAN ·
   KUNYE-KRONO-KAPSAM · LISTE-BAYAT) 2 gün önce yazılmış ve bugün ötüyor — en taze sinyal bunlar.

## 7. Ölçülemeyenler
- 45 ATLANDI betiğin bugünkü durumu (güvenlik şartı gereği).
- 12 argümanlı betiğin argümanla davranışı; 5 üretilmiş-çıktı betiğinin tam koşu sonrası davranışı.
- SAHTEMOTOR-0911'in 300 sn'de bitip bitmeyeceği (zaman aşımına uğradı).
- Ağaç dışına yazım (git status görmez).

Koşu aracı: oturum scratchpad'inde `w27_kos.py` (tara+koş) · `w27_yakin.py` (belirsiz hataları yeniden
okuma) · `w27_rapor.py` (elle ayrılan 27 satır + .tsv). Ağaç koşudan sonra kaldırıldı.
