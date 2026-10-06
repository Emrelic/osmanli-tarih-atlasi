# UMIT-W56-KUCUK-KOD-1006 — üç küçük kod kalemi (diff, UYGULANMADI)

Temel: `origin/makine/umit` = `cac68699` · ağaç `C:\atlas-w56` (detached) · motor tuzunun dört
dosyasına (`uret_petek.py` · `renkler.py` · `girdi.py` · `motor_onbellek.py`) dokunulmadı.
Üç diff ayrı dosyalara dokunur (ortak dosya 0); üçü de `cac68699` üstünde `git apply --check` temiz.

## ① MOTOR-ENV-KAPI MUTLAK YOL — `denetim/MOTOR-ENV-MUTLAK-YOL-1006.diff`
`ARAC-MOTOR-ENV-KAPI-1006.py:46` + `ARAC-MOTOR-ENV-KAPI-SINAV-1006.py:20`: `--kok` varsayılanı
`r"C:\atlas"` → `os.path.dirname(os.path.dirname(os.path.abspath(__file__)))` (W35 çaresi).
Kullanım satırları da güncellendi.

| koşu | sonuç |
|---|---|
| ÖNCE: yamasız sınav, `--kok`'suz, `C:\atlas-w56`'da | ✗ 10/10 düştü (kapı `C:\atlas\denetim\`de YOK ⇒ hepsi çıkış 2) |
| SONRA: yamalı, `--kok`'suz, cwd=`C:\` (cwd'den de bağımsız) | ✓ 10/10 geçti · rc 0 |
| TERS: yamalı ama `--kok C:\atlas` | ✗ 10/10 düştü — açık `--kok` hâlâ saygı görüyor |
| kapı tek başına `--kok`'suz | MOD: KAPSAYICI, 30 ad tuzda, rc 0 |

### Aynı sınıftan kalanlar (DÜZELTİLMEDİ — ayrı iş)
- **`--kok` VARSAYILANI mutlak (tam bu sınıf): 3 dosya kaldı**
  `denetim/ARAC-BEKCI-KIMLIK-SINAV-1006.py:39` · `denetim/ARAC-LEGO-ZINCIR-SINAV-1006.py:24` ·
  `denetim/ARAC-LEGO-zincir.py:36`
- Daha geniş: `.py` içinde tam kök literali (`r"C:\atlas"` / `"C:\\atlas"` / `"C:/atlas"`)
  **120 satır / 120 dosya** (arac 13 · denetim 107); kök-altı yol literali (`"C:\atlas\..."`)
  **88 satır / 63 dosya**. Tam liste aşağıda (EK). ⚠️ `arac/` içinde 13 dosya var
  (`etiket.py`, `kosu_girdi_bagla.py`, `uret_duygu.py`, `olc_indirme.py` …) — bunlar sınav değil
  araç, öncelik onlarda olmalı.
- Not: görevdeki `git grep -n 'r"C:\\\\atlas"'` kabuk kaçışında 0 verdi (yanlış sıfır); sayım
  regex'le Python'da yapıldı, `default=` sınıfı ayrıca `git grep -E` ile doğrulandı.

## ② PAKETLE BAYT — `denetim/PAKETLE-BAYT-LF-1006.diff`
`arac/paketle.py` `_paket_yaz`: kaynak `bayt` = `len(_duzle(_oku_ham(y)))`, paket `bayt` =
`len(_duzle(govde.encode()))` — sha'nın kullandığı aynı düzleme.
Sınav: `denetim/ARAC-PAKETLE-BAYT-SINAV-1006.py` (kök `__file__`'dan; "eski" sabit `cac68699`).

| koşu | sonuç |
|---|---|
| YENİ: aynı içerik LF / CRLF | (2150, sha, 2416) = (2150, sha, 2416) ✓ EŞİT |
| ESKİ: aynı içerik LF / CRLF | 2150 ≠ 2350, 2416 ≠ 2616 ✓ FARKLI (sınav ötebiliyor) |
| sınav yamasız ağaçta | ✗ DÜŞTÜ (1) — beklendiği gibi |
| GERÇEK: `paketle.py yenile` bu ağaçta (autocrlf=true) → `paket_kunye.json` diff | YENİ: **1 satır** (dosya sonu yeni satırı, bayt değil) · ESKİ: **320 satır** |
| `paketle.py sina` | ✓ TAZE — 30 paket, 289 kaynak, rc 0 |

Yan bulgular (DÜZELTİLMEDİ):
- `_plan` (`paketle.py:136`, `:143`) paket sınırlarını `os.path.getsize` = HAM boyutla çiziyor
  (`TEK_BASINA` 2 MB · `TAVAN` 4 MB). Bir kaynak eşiğe yakınsa CRLF makinesi paketleri FARKLI
  bölebilir. Bugün ölçülmedi; aynı sınıf.
- `yenile` künyeyi dosya sonu yeni satırsız yazıyor (commitli hâlde var) ⇒ her `yenile` 1 satır oynatır.
- Paket gövdesi kaynakların ham satır sonlarını taşır (CRLF+LF karışık); commit'te git düzlediği için
  zararsız, yalnız not.

## ③ app.js:897 bayat yorum — `denetim/APP-UFUK-YORUM-1006.diff`
Yorum (+8 −3): 404 vakasında yoklananın HAM dosya olduğu belirtildi; bugün HEAD
`UFUK_DOSYALAR[0]` = `data/ufuk_bantlari_ust.js`. Zincir yazıldı: `uret_petek.py` (`MOTOR_UFUK_BANT`,
`:2154`) → ham `data/ufuk_bantlari.js` (`.gitignore:207`) → `kodla.py … bant` (`:558`) → takipli
`ufuk_bantlari_ust.js` + `ufuk_bant_parcalar.js` (`git ls-files` ile doğrulandı) → `ufukYukle`.
`node --check js/app.js` temiz. `app.js:856`daki "④c data/ufuk_bantlari.js YOK" cümlesi 27 Eylül
tarihli bir vaka anlatısı olduğu için dokunulmadı; W48 de yalnız 897'yi bayat saymıştı.

## EK — mutlak yol sayımı (`C:\atlas-w56`, `git ls-files '*.py'` = 1322 dosya)
```
py dosyasi: 1322
A tam kok literali: 120 satir / 120 dosya
  arac/_enklav_kara.py:10
  arac/_renksiz_kimlik.py:14
  arac/etiket.py:38
  arac/kosu_girdi_bagla.py:32
  arac/olc_denizasiri/olc_care.py:16
  arac/olc_denizasiri/olc_denizasiri3.py:21
  arac/olc_denizasiri/olc_gorunur.py:22
  arac/olc_denizasiri/olc_ii_riski.py:21
  arac/olc_denizasiri/olc_mekanizma.py:19
  arac/olc_denizasiri/olc_topografya2.py:20
  arac/olc_denizasiri/olc_topografya3.py:18
  arac/olc_indirme.py:35
  arac/uret_duygu.py:10
  denetim/ARAC-114-PAKET-0911.py:21
  denetim/ARAC-4C-SIRALA-0905.py:33
  denetim/ARAC-4D-SIRALA-0905.py:22
  denetim/ARAC-AFRIKA-RENK-0906.py:25
  denetim/ARAC-AFRIKA-SUDAN-RENK-0906.py:26
  denetim/ARAC-ALTINORDA-DUZELT-1001.py:45
  denetim/ARAC-B-ENKLAV-ARTIFAKT-0912.py:20
  denetim/ARAC-B-ENKLAV-DAGILIM-0912.py:22
  denetim/ARAC-B-UCUZ-PARCALAR-0911.py:45
  denetim/ARAC-BAGLA-GENEL-0903.py:15
  denetim/ARAC-BEKCI-KIMLIK-SINAV-1006.py:39
  denetim/ARAC-C-DENETIM-0911.py:35
  denetim/ARAC-C-KAPSAMA-0911.py:32
  denetim/ARAC-C-VORONOI-KARLOFCA-0911.py:39
  denetim/ARAC-CAKISMA-KUME2-0907.py:24
  denetim/ARAC-CAKISMA-KUME3-0907.py:28
  denetim/ARAC-CAKISMA-MISIR5-0907.py:19
  denetim/ARAC-D5-ASYA-NOKTA-BIRLESTIR-0917.py:6
  denetim/ARAC-DIZIN-TAMLIK-0911.py:51
  denetim/ARAC-FAZ2-CUKUROVA-0906.py:14
  denetim/ARAC-FAZ2-NOKTA-0906.py:14
  denetim/ARAC-FAZ2-TDV-0906.py:15
  denetim/ARAC-FAZ2-YAMA-0906.py:19
  denetim/ARAC-GUN-COK-BORC-0905.py:15
  denetim/ARAC-HAZIRLIK-0905.py:4
  denetim/ARAC-IC-TUTARSIZLIK-0911.py:45
  denetim/ARAC-ISG-FAZ2-0905.py:11
  denetim/ARAC-IZYOK-C-KESIF-0910.py:13
  denetim/ARAC-KID-KESISIM-0907.py:18
  denetim/ARAC-KID-OLCUM-0907.py:17
  denetim/ARAC-KIMLIK-KARSILIGI-0905.py:14
  denetim/ARAC-KIMLIK-KARSILIGI-0905b.py:37
  denetim/ARAC-KOSU-SONRASI-0905.py:25
  denetim/ARAC-KRONOLOJI-KUNYE-0911.py:30
  denetim/ARAC-KUNYE-ALANI-0911.py:36
  denetim/ARAC-KUNYE-ALANI-0912.py:29
  denetim/ARAC-KUNYE-ONCESI-III-0911.py:33
  denetim/ARAC-LAB-ODAK-UYGULA-1002.py:32
  denetim/ARAC-LAB-YER-UYGULA-1003.py:46
  denetim/ARAC-LEGO-0925-bit.py:133
  denetim/ARAC-LEGO-ZINCIR-SINAV-1006.py:24
  denetim/ARAC-LEGO-tuz.py:20
  denetim/ARAC-LEGO-zincir.py:36
  denetim/ARAC-MAKINE-OLC-1001.py:270
  denetim/ARAC-MERGE-BAGIMLILIK-0907.py:40
  denetim/ARAC-MISIR-SIRBISTAN-KOVA0-0911.py:35
  denetim/ARAC-MOTOR-ENV-KAPI-1006.py:46
  denetim/ARAC-MOTOR-ENV-KAPI-SINAV-1006.py:20
  denetim/ARAC-MTR-ORTAK-0914.py:21
  denetim/ARAC-ODAK-KAPAT-UYGULA-1001.py:39
  denetim/ARAC-ODAK-KAPAT-UYGULA-1DUNYA-1001.py:37
  denetim/ARAC-ODAK-TAVAN-INDIR-1001.py:31
  denetim/ARAC-ODAK-UYGULA-1001.py:44
  denetim/ARAC-ORTADOGU-CEZAYIR-0907.py:19
  denetim/ARAC-ORTADOGU-HICAZ-0907.py:22
  denetim/ARAC-ORTADOGU-MAGRIB-0907.py:22
  denetim/ARAC-ORTADOGU-MISIR-0907.py:13
  denetim/ARAC-ORTADOGU-TABAN-0906.py:17
  denetim/ARAC-ORTADOGU-TABAN-0906b.py:23
  denetim/ARAC-ORTADOGU-URDUN-0907.py:19
  denetim/ARAC-ORTEN-KUNYE-0905.py:27
  denetim/ARAC-P13B-BOGAZ-0914.py:12
  denetim/ARAC-P13B-DOLGU-KB-0914.py:13
  denetim/ARAC-P13B-GAT-0914.py:11
  denetim/ARAC-P13B-INCE-0914.py:11
  denetim/ARAC-P13B-KARA-0914.py:7
  denetim/ARAC-P13B-KUSATMA-0914.py:14
  denetim/ARAC-P13B-SERBEST-0914.py:7
  denetim/ARAC-P13B-SEYRELT-0914.py:8
  denetim/ARAC-PAKET-KORLUK-1001.py:38
  denetim/ARAC-PRENSLIK-PENCERE-0911.py:33
  denetim/ARAC-RUSYA-ATIF-UYGULA-1001.py:33
  denetim/ARAC-RUSYA-BEYAN-1001.py:33
  denetim/ARAC-SAYIM-BIRIMI-0905.py:5
  denetim/ARAC-SERHAT-DENIZ-0907.py:27
  denetim/ARAC-SERHAT-KOVA-0907.py:15
  denetim/ARAC-SERHAT-MALIYET-0907.py:17
  denetim/ARAC-SERHAT-NEHIR-0907.py:28
  denetim/ARAC-SERHAT-NEHIRAD-0907.py:22
  denetim/ARAC-SERHAT-TARIH-0907.py:25
  denetim/ARAC-SERHAT-TUNA-0907.py:15
  denetim/ARAC-SERHAT-ZAMAN-0907.py:15
  denetim/ARAC-SINIRLI-VORONOI-0911.py:25
  denetim/ARAC-TASIMA-0922.py:87
  denetim/ARAC-TASMA-PROTOTIP-0911.py:39
  denetim/ARAC-TBMM-CAKISMA-0905.py:23
  denetim/ARAC-TBMM-CAKISMA-0905b.py:23
  denetim/ARAC-TBMM-ONERI-0905.py:19
  denetim/ARAC-TRIAJ-98-0930.py:11
  denetim/ARAC-VASSAL-KUNYE-0906.py:21
  denetim/ARAC-VASSAL-KUNYE-0906b.py:25
  denetim/ARAC-VASSAL-TDV-0906.py:15
  denetim/ARAC-YANLIS-OLAY-0911.py:42
  denetim/HARITA-0076-olc.py:23
  denetim/HARITA-0076-sivri.py:26
  denetim/KRONO-0076-C-YAMA-uygula.py:17
  denetim/KRONO-0076-C-olc.py:5
  denetim/KRONO-0076-C-olc2.py:6
  denetim/KRONO-0076-C-olc3.py:7
  denetim/KRONO-0076-C-olc4.py:6
  denetim/SINIR-CIZGI-0076-KAYIT.py:6
  denetim/SINIR-CIZGI-0076-PIKSEL.py:9
  denetim/SINIR-CIZGI-0076-ROMANYA.py:6
  denetim/SINIR-CIZGI-0076-TOPLU-GUN.py:8
  denetim/SINIR-CIZGI-0076-YERLESIM.py:9
  denetim/SINIR-D-AVRUPA-BATI-0077-olc.py:20
  denetim/dogrula_puanlama.py:16
B kok-alti yol literali: 88 satir / 63 dosya
  denetim/A-AVRUPA-0078-serit.py:11,62
  denetim/ACILIS-ANIM-0081-avmac-olc.py:5
  denetim/ACILIS-ANIM-0081-govde-olc.py:11
  denetim/ARAC-ACILIS-ANIM-0929-URET.py:18
  denetim/ARAC-B-ENKLAV-CIZ-0912.py:20
  denetim/ARAC-D3ORTA-URET-0916.py:20
  denetim/ARAC-KASA-IC-CELISKI-1004.py:5
  denetim/ARAC-KASA-IMZA-YERI-1004.py:3
  denetim/ARAC-KASA-TERS-MADDE-1004.py:6
  denetim/ARAC-LEGO-0925-bit.py:22
  denetim/ARAC-LEGO-0925-say.py:9
  denetim/ARAC-LEGO-0925-tahta.py:8
  denetim/ARAC-LEGO-sayim.py:7
  denetim/ARAC-LEGO-tahta-ara.py:6
  denetim/ARAC-ONCE1281-DOGU-ASYA-ODAK.py:8
  denetim/ARAC-SINIRLI-VORONOI-0911.py:17
  denetim/ARAC-TASMA-PROTOTIP-CIZ-0911.py:26
  denetim/ARAC-TEKRAR-OLCULECEK-0930-CIZ.py:19,43
  denetim/ARAC-TEKRAR-OLCULECEK-0930-GOVDE.py:113,154
  denetim/ARAC-TEKRAR-OLCULECEK-0930-TOPLU.py:16,20,26
  denetim/ARAC-UFUK-DUGME-0930-TABAN.py:20
  denetim/ARAC-UYGULA-YERLESIM-0930.py:15
  denetim/ARAYUZ-0077-yukleme-silueti.py:12
  denetim/AVRUPA-SINIR-0077-yer_dok.py:3,7
  denetim/BALKAN-MACAR-0081-uygula.py:14,153
  denetim/BOGAZ-OLCUM-0081-sinif.py:75
  denetim/BOGAZ-OLCUM-0081.py:318
  denetim/HARITA-0076-cevap-yaz.py:16
  denetim/HARITA-0076-kutu-kapisi.py:26
  denetim/HARITA-0076-sahip-toplu.py:8,9,16
  denetim/HARITA-0076-sahip.py:15
  denetim/HARITA-0076-sivri.py:16
  denetim/KRONO-0076-B-geriokur.py:6,9
  denetim/KRONO-0076-B-oku5022.py:5
  denetim/KRONO-0076-B-okumesaj.py:5
  denetim/KRONO-0076-B-olc1.py:10
  denetim/KRONO-0076-B-olc2.py:10
  denetim/KRONO-0076-B-olc3.py:9,10
  denetim/KRONO-0076-B-olc4.py:10,11
  denetim/KRONO-0076-B-olc5.py:10,11
  denetim/KRONO-0076-B-olc6.py:13,14,15,16,17
  denetim/KRONO-0076-B-rapordenetle.py:15
  denetim/KRONO-0076-B-teslimoku.py:6,7
  denetim/NOKTA-ORTADOGU-0077-irak.py:9
  denetim/NOKTA-ORTADOGU-0077-kayit.py:8
  denetim/NOKTA-ORTADOGU-0077-misir.py:10,13
  denetim/NOKTA-ORTADOGU-0077-olc.py:14,17
  denetim/NOKTA-ORTADOGU-0077-sudan.py:10,13
  denetim/NOKTA-ORTADOGU-0077-tavan.py:12,15
  denetim/NOKTA-ORTADOGU-0077-uygula.py:36,154
  denetim/NOKTA-ORTADOGU-0077-yakin.py:9,12
  denetim/NOKTA-ORTADOGU-0077-yama.py:10,120
  denetim/SINIR-CIZGI-0076-KAYIT.py:5
  denetim/SINIR-CIZGI-0076-PIKSEL.py:8
  denetim/SINIR-CIZGI-0076-ROMANYA.py:5
  denetim/SINIR-CIZGI-0076-TOPLU-GUN.py:7
  denetim/SINIR-CIZGI-0076-YERLESIM.py:8
  denetim/SINIR-CIZGI-0076-geri-oku.py:7
  denetim/SINIR-CIZGI-0076-mesaj.py:5
  denetim/SINIR-CIZGI-0076-supurge.py:7
  denetim/SINIR-D-AVRUPA-ORTA-0077-C.py:19
  denetim/SINIR-D-ORTADOGU-0077-komsu-devir.py:12
  denetim/SINIR-D-ORTADOGU-0077-magrip-uret.py:8
```
