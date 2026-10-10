# LAB-DIFF-CARPISMA-1010 — bekleyen diff'lerin çarpışma ÖLÇÜMÜ (hüküm değil, sıra önerisi değil)

## §0 ÖNGÖRÜ (ölçümden ÖNCE) — 2026-10-10 09:31:29 +0300 — bu bölüm DÜZENLENMEZ

**Evren tanımı (liste YOK):** `origin/makine/umit:denetim/INIS-SIRA-1010.md` mevcut değil
(fetch sonrası umit ucu `93acc5f12`; hiçbir dalda `INIS-SIRA*` yok). Geri dönüş: tüm
`origin/makine/*` dallarında `denetim/*1010*.diff` tarandı → **59 tekil blob** (her adın tek
blob'u var). `origin/main@792bf4a42` üstünde `git apply --check`: 36 UYGULANIR · 15 UYGULANMAZ
(tek başına) · 8 ZATEN_MAINDE (`-R --check` temiz). ZATEN_MAINDE 8 evrenden çıkarıldı.

- **Evren: 51 diff · 1275 çift** (15 tek-başına-uygulanmaz dahil: yığılmış/bağımlı olabilirler,
  çift testinde tek yön uygulanırsa bu da sıra bağımlılığıdır).
- Not: aynı ailenin sürümleri (v2/v3/-B/-K2 …) evrende; aile içi çiftler ayrıca etiketlenecek.

**Öngörüler (sayı):**
| ölçü | öngörü |
|---|---|
| aynı-DOSYA çiftleri | ~120 (arac/denetle.py, data/devletler.js, index.html kümeleri) |
| aynı-HUNK-BÖLGESİ (±3) çiftleri | ~35 |
| aynı-SATIR çiftleri | ~15 (çoğu sürüm ailesi içi) |
| SIRA-BAĞIMLI çiftler | ~25 (çoğu "yalnız bir yön uygulanır") |
| SESSİZ-GERİ-ALMA vakaları | ~4 |
| ortak sınav dosyası çiftleri | ~3 |

## §1 YÖNTEM (ölçüm 09:35–09:47)

- Diff'ler `git cat-file -p <blob>` ile scratch'e çıkarıldı (hiçbir diff değiştirilmedi).
- Ölçüm ağacı: `git worktree add --detach <scratch>/agac origin/main` (792bf4a42). `arac/olcum_agaci.py`
  main'de YOK (onu `OLCUM-AGACI-1010.diff` ekliyor, bekliyor) ⇒ `hazirla` koşturulmadı; ölçüm yalnız
  metin uygulamasıdır, hiçbir araç/motor koşturulmadı.
- Her test öncesi sıfırlama: `git reset -q; git checkout -- .; git clean -fdq` (gitignored dosyalara
  dokunmaz, `-x` yok). Sonuç ağacı anlık görüntüsü: `git add -A && git write-tree` (yeni dosyalar dahil),
  sonra `git reset -q`.
- Matris: python ile diff başlıkları ayrıştırıldı (git biçimi + `---/+++` düz biçim — KASA-GORUNURLUK-SAYAC
  düz biçimdir). Aynı DOSYA = BİLGİ · ön-görüntü hunk aralıkları çakışık ya da ±3 komşu = SARI · aynı silinen
  satır / aynı ekleme noktası / biri yeni dosya oluşturup öbürü aynı dosyaya dokunuyor = KIRMIZI.
  ⚠ Bayat/yığılmış diff'lerin satır numaraları KENDİ tabanlarına göredir ⇒ onların şiddeti yaklaşıktır.
- Sıra testi: ≥1 ortak dosyalı her çift (105) için A→B ve B→A; `git apply` hatası kayda geçti.
- `--exclude` uygulanan iki diff (bu ağaçta bugünkü iniş biçimi; NEG-B emsali):
  `NEGATIF-YIL-1010-B-v2` → `--exclude=denetim/ARAC-NEGATIF-YIL-B-SINAV-1010.py` (main'de 1c639cf5 var) ·
  `TUZ-DORT-DOSYA-1010-v3` → `--exclude=denetim/ARAC-TUZ-DORT-DOSYA-SINAV-1010.py` (main'de ac11ddcd =
  diff'in yeni dosya blob'uyla BİREBİR aynı; 397c00c67 "GECENIN IKINCI TESLIM DALGASI" ile inmiş).
- Yığın tabanı arama: tek başına uygulanmayan her diff için "önce Y, sonra X `--check`" (tüm Y'ler), bulunamazsa
  ortak dosyalı (Y,Z) ikilileri. Bulunan tabanlarla yığın-tabanlı çift testi ayrıca koşturuldu.

### §1.1 TUZ (§9.1③) — uygulamadan ÖNCE ölçülen izolasyon
Tuz dosyası değiştiren diff'ler: `BOYA-PARTISI-1010` · `GIRDI-TEKIL-1010` · `NEGATIF-YIL-1010-B-v2`
(girdi.py+uret_petek.py) · `TUZ-DORT-DOSYA-1010-v3` (girdi.py) · `TUZ-YUKSEKLIK-1010` (uret_petek.py).
① `MOTOR_ONBELLEK_DIZIN`: süreç ortamında BOŞ, User ve Machine ortam değişkeninde BOŞ (ölçüldü).
   Ölçüm ağacının varsayılanı `<scratch>/agac/_motor_onbellek` (yerel C:, `AppData\Local\Temp`, OneDrive/ağ
   değil; sürücüler C/D/E hepsi yerel — `Get-PSDrive` DisplayRoot boş). Koşucunun yolu
   `kos_ve_yayinla._motor_ortami`: `C:\atlas-onbellek` (bu makinede yok; koşu HAVVA'nın ağacında) ⇒ AYNI DEĞİL.
② `uret_petek.py` ve hiçbir tuz işlevi koşturulmadı (yalnız `git apply`; tuz hash'i gerekmedi).
③ Ağaç push edilmedi, sonda kaldırıldı (§9). ④ commit yok.
`BOYA-PARTISI` hiçbir diffle dosya paylaşmıyor ⇒ çift testine girmedi.

## §2 ÇARPIŞMA MATRİSİ — `LAB-DIFF-CARPISMA-1010-matris.csv` (1275 satır)

| şiddet | tümü | sürüm-ailesi DIŞI |
|---|---|---|
| ortak dosya yok | 1170 | 1142 |
| BİLGİ (aynı dosya) | 71 | 52 |
| SARI (aynı hunk bölgesi ±3) | 13 | 13 |
| KIRMIZI (aynı satır / yeni-dosya) | 21 | 6 |
| **≥1 ortak dosya** | **105** | 71 |

Aile = aynı ad kökünün sürümleri (v2/v3/-B/-K2/-KOORD-v2…); aile içi çiftler çoğunlukla BİRBİRİNİN YERİNE
geçen seçeneklerdir (hüküm değil, ad gözlemi).
### Evren tablosu (59 blob; ZATEN_MAINDE 8 evren dışı)

| # | diff | kaynak dal:yol | blob | main@792bf4a42 durumu |
|---|---|---|---|---|
| 1 | `APPJS-TARIH-1010.diff` | `origin/makine/umit:denetim/APPJS-TARIH-1010.diff` | `4e8ddcabb277` | UYGULANIR |
| 2 | `ARAC-CIKIS-KODU-DUZELT-1010-X-v2.diff` | `origin/makine/emrelic-kunye:denetim/ARAC-CIKIS-KODU-DUZELT-1010-X-v2.diff` | `816a4e5b4318` | ZATEN_MAINDE |
| 3 | `ARAC-CIKIS-KODU-DUZELT-1010-X.diff` | `origin/makine/emrelic-kunye:denetim/ARAC-CIKIS-KODU-DUZELT-1010-X.diff` | `feca0bf51b10` | UYGULANMAZ |
| 4 | `ARAC-CIKIS-KODU-DUZELT-1010-Y.diff` | `origin/makine/emrelic-kunye:denetim/ARAC-CIKIS-KODU-DUZELT-1010-Y.diff` | `5cad84db4a24` | ZATEN_MAINDE |
| 5 | `ARAC-STDOUT-A-1010-YAYIN.diff` | `origin/makine/emrelic-kunye:denetim/ARAC-STDOUT-A-1010-YAYIN.diff` | `615d95425d41` | ZATEN_MAINDE |
| 6 | `ARAC-STDOUT-A-1010.diff` | `origin/makine/emrelic-kunye:denetim/ARAC-STDOUT-A-1010.diff` | `5d394cb92331` | ZATEN_MAINDE |
| 7 | `ARAC-TAHTA-NUMARA-1010.diff` | `origin/makine/emrelic-kunye:denetim/ARAC-TAHTA-NUMARA-1010.diff` | `6bfc2ecb2f43` | UYGULANIR |
| 8 | `ARAC-TAHTA-TEMIZ-AGAC-1010.diff` | `origin/makine/emrelic-kunye:denetim/ARAC-TAHTA-TEMIZ-AGAC-1010.diff` | `23b64c356b7b` | ZATEN_MAINDE |
| 9 | `ARGV-GIT-DENETIM-1010.diff` | `origin/makine/umit:denetim/ARGV-GIT-DENETIM-1010.diff` | `1302062f6386` | UYGULANIR |
| 10 | `BOYA-PARTISI-1010.diff` | `origin/makine/umit:denetim/BOYA-PARTISI-1010.diff` | `ea652e57c389` | UYGULANIR |
| 11 | `D5-GUN-1010-NEG-SONRA.diff` | `origin/makine/umit:denetim/D5-GUN-1010-NEG-SONRA.diff` | `6273009e9733` | UYGULANMAZ |
| 12 | `D5-GUN-1010-v3.diff` | `origin/makine/umit:denetim/D5-GUN-1010-v3.diff` | `cb3b2b801544` | UYGULANIR |
| 13 | `DENETLE-STDOUT-1010.diff` | `origin/makine/emrelic-kunye:denetim/DENETLE-STDOUT-1010.diff` | `7138d59bd3a3` | ZATEN_MAINDE |
| 14 | `GIRDI-TEKIL-1010.diff` | `origin/makine/umit:denetim/GIRDI-TEKIL-1010.diff` | `0e1b6febdb6f` | UYGULANIR |
| 15 | `IZNIK-1097-1010-KOORD.diff` | `origin/makine/emrelic-kunye:denetim/IZNIK-1097-1010-KOORD.diff` | `07ff75127e81` | ZATEN_MAINDE |
| 16 | `IZNIK-1097-1010-KRONO.diff` | `origin/makine/emrelic-kunye:denetim/IZNIK-1097-1010-KRONO.diff` | `c5f28e9840d9` | ZATEN_MAINDE |
| 17 | `KASA-DIKIS-KAPI-1010.diff` | `origin/makine/kasa:denetim/KASA-DIKIS-KAPI-1010.diff` | `aec60c345001` | UYGULANMAZ |
| 18 | `KASA-FAZ2-1010.diff` | `origin/makine/kasa:denetim/KASA-FAZ2-1010.diff` | `0aebe6c29c7d` | UYGULANIR |
| 19 | `KASA-GORUNURLUK-SAYAC-1010.diff` | `origin/makine/kasa:denetim/KASA-GORUNURLUK-SAYAC-1010.diff` | `08b6dbb4560f` | UYGULANMAZ |
| 20 | `KOS-VE-YAYINLA-ADD-1010.diff` | `origin/makine/umit:denetim/KOS-VE-YAYINLA-ADD-1010.diff` | `5b1ac358b1c2` | UYGULANMAZ |
| 21 | `KOSU-YAYIN-KAPI-1010.diff` | `origin/makine/umit:denetim/KOSU-YAYIN-KAPI-1010.diff` | `1d2be671aba0` | UYGULANIR |
| 22 | `KOSU-YAYIN-LISTE-1010.diff` | `origin/makine/umit:denetim/KOSU-YAYIN-LISTE-1010.diff` | `576acf6b8718` | UYGULANMAZ |
| 23 | `KRONO-NEG-1010.diff` | `origin/makine/umit:denetim/KRONO-NEG-1010.diff` | `913b91462496` | UYGULANIR |
| 24 | `KRONO-ONCE1281-1010-A.diff` | `origin/makine/emrelic-kunye:denetim/KRONO-ONCE1281-1010-A.diff` | `f3e22bfb7263` | UYGULANMAZ |
| 25 | `KRONO-ONCE1281-1010-B.diff` | `origin/makine/emrelic-kunye:denetim/KRONO-ONCE1281-1010-B.diff` | `ef190447c277` | UYGULANMAZ |
| 26 | `KRONO-ONCE1281-1010-C.diff` | `origin/makine/emrelic-kunye:denetim/KRONO-ONCE1281-1010-C.diff` | `afcdc1753603` | UYGULANIR |
| 27 | `KUNYE-SUMER-7-1010-v2.diff` | `origin/makine/emrelic-kunye-2:denetim/KUNYE-SUMER-7-1010-v2.diff` | `ed96aee01a53` | UYGULANIR |
| 28 | `KUNYE-SUMER-7-1010-v4.diff` | `origin/makine/umit:denetim/KUNYE-SUMER-7-1010-v4.diff` | `13309e35ae26` | UYGULANMAZ |
| 29 | `KUNYE-SUMER-7-1010.diff` | `origin/makine/emrelic-kunye:denetim/KUNYE-SUMER-7-1010.diff` | `d0328f32a558` | UYGULANIR |
| 30 | `LAB-KONUM-ADAY-1010-pantelerya.diff` | `origin/makine/lab:denetim/LAB-KONUM-ADAY-1010-pantelerya.diff` | `c6a7ee540528` | UYGULANIR |
| 31 | `LAB-KONUM-ONERI-1010-ikame-tasi-secenegi.diff` | `origin/makine/emrelic-kunye:denetim/LAB-KONUM-ONERI-1010-ikame-tasi-secenegi.diff` | `dba256b762c6` | UYGULANIR |
| 32 | `LAB-KONUM-ONERI-1010-kusayr-secenekA.diff` | `origin/makine/emrelic-kunye:denetim/LAB-KONUM-ONERI-1010-kusayr-secenekA.diff` | `bb3b896db856` | UYGULANIR |
| 33 | `LAB-KONUM-ONERI-1010-v2-ikame-secenegi.diff` | `origin/makine/lab:denetim/LAB-KONUM-ONERI-1010-v2-ikame-secenegi.diff` | `53eb676abad4` | UYGULANIR |
| 34 | `LAB-KONUM-ONERI-1010-v2-tasima-secenegi.diff` | `origin/makine/lab:denetim/LAB-KONUM-ONERI-1010-v2-tasima-secenegi.diff` | `0cd387c501a5` | UYGULANIR |
| 35 | `LAB-KONUM-ONERI-1010-v2.diff` | `origin/makine/lab:denetim/LAB-KONUM-ONERI-1010-v2.diff` | `594f4ca848b8` | UYGULANIR |
| 36 | `LAB-KONUM-ONERI-1010-v3-balasagun-not.diff` | `origin/makine/lab:denetim/LAB-KONUM-ONERI-1010-v3-balasagun-not.diff` | `c53a95728b48` | UYGULANIR |
| 37 | `LAB-KONUM-ONERI-1010-v3-balasagun-tasima-BEKLER.diff` | `origin/makine/lab:denetim/LAB-KONUM-ONERI-1010-v3-balasagun-tasima-BEKLER.diff` | `5b526cf66137` | UYGULANIR |
| 38 | `LAB-KONUM-ONERI-1010-v3-ikame.diff` | `origin/makine/lab:denetim/LAB-KONUM-ONERI-1010-v3-ikame.diff` | `a1ba8d79ec4a` | UYGULANIR |
| 39 | `LAB-KONUM-ONERI-1010-v3.diff` | `origin/makine/lab:denetim/LAB-KONUM-ONERI-1010-v3.diff` | `cb5dcaa2bfa2` | UYGULANIR |
| 40 | `LAB-KONUM-ONERI-1010.diff` | `origin/makine/emrelic-kunye:denetim/LAB-KONUM-ONERI-1010.diff` | `594f4ca848b8` | UYGULANIR |
| 41 | `NEGATIF-YIL-1010-A.diff` | `origin/makine/emrelic-kunye:denetim/NEGATIF-YIL-1010-A.diff` | `6a9b163b356a` | UYGULANMAZ |
| 42 | `NEGATIF-YIL-1010-A2.diff` | `origin/makine/umit:denetim/NEGATIF-YIL-1010-A2.diff` | `879b1518b2c8` | UYGULANIR |
| 43 | `NEGATIF-YIL-1010-B-v2.diff` | `origin/makine/emrelic-kunye:denetim/NEGATIF-YIL-1010-B-v2.diff` | `a957152e574d` | UYGULANMAZ → `--exclude=<main'de zaten olan sınav>` ile UYGULANIR |
| 44 | `NEGATIF-YIL-B-SINAV-DUZELT-1010.diff` | `origin/makine/umit:denetim/NEGATIF-YIL-B-SINAV-DUZELT-1010.diff` | `45bdb0e7a772` | UYGULANIR |
| 45 | `NOKTA-SUMER-1010-B10.diff` | `origin/makine/emrelic-nokta:denetim/NOKTA-SUMER-1010-B10.diff` | `234c229ad9f6` | UYGULANIR |
| 46 | `NOKTA-SUMER-1010-K2-B.diff` | `origin/makine/emrelic-nokta-k2:denetim/NOKTA-SUMER-1010-K2-B.diff` | `f31cad9fe595` | UYGULANMAZ |
| 47 | `NOKTA-SUMER-1010-K2.diff` | `origin/makine/emrelic-nokta-k2:denetim/NOKTA-SUMER-1010-K2.diff` | `5c745dd2af0c` | UYGULANIR |
| 48 | `NOKTA-SUMER-1010.diff` | `origin/makine/emrelic-nokta:denetim/NOKTA-SUMER-1010.diff` | `7c62be2374fd` | UYGULANIR |
| 49 | `OLCUM-AGACI-1010.diff` | `origin/makine/umit:denetim/OLCUM-AGACI-1010.diff` | `b25321de0e69` | UYGULANIR |
| 50 | `SAHIPLIK-KAPSAM-1010-v3.diff` | `origin/makine/umit:denetim/SAHIPLIK-KAPSAM-1010-v3.diff` | `de0f85c06439` | UYGULANIR |
| 51 | `SAHIPLIK-KUR-KAPI-1010.diff` | `origin/makine/umit:denetim/SAHIPLIK-KUR-KAPI-1010.diff` | `31242fa98188` | UYGULANMAZ |
| 52 | `SINAV-ISIRMA-1010.diff` | `origin/makine/umit:denetim/SINAV-ISIRMA-1010.diff` | `be24e96cdd68` | UYGULANIR |
| 53 | `SUMER-SAHIP-1010.diff` | `origin/makine/umit:denetim/SUMER-SAHIP-1010.diff` | `68d7902c2dcd` | UYGULANMAZ |
| 54 | `TAHTA-ACIL-I-1010.diff` | `origin/makine/umit:denetim/TAHTA-ACIL-I-1010.diff` | `6e6fe1a89717` | UYGULANIR |
| 55 | `TUZ-DORT-DOSYA-1010-v3.diff` | `origin/makine/emrelic-kunye:denetim/TUZ-DORT-DOSYA-1010-v3.diff` | `70ce4a2dbe2c` | UYGULANMAZ → `--exclude=<main'de zaten olan sınav>` ile UYGULANIR |
| 56 | `TUZ-YUKSEKLIK-1010.diff` | `origin/makine/umit:denetim/TUZ-YUKSEKLIK-1010.diff` | `9f40750289bf` | UYGULANIR |
| 57 | `YAYIN-KAPI-OLCULEMEDI-1010.diff` | `origin/makine/umit:denetim/YAYIN-KAPI-OLCULEMEDI-1010.diff` | `f43ba13e7557` | UYGULANIR |
| 58 | `YER-YAMA-SESSIZ-7-1010-KOORD-v2.diff` | `origin/makine/umit:denetim/YER-YAMA-SESSIZ-7-1010-KOORD-v2.diff` | `08311b335afd` | UYGULANIR |
| 59 | `YER-YAMA-SESSIZ-7-1010-KOORD.diff` | `origin/makine/emrelic-kunye:denetim/YER-YAMA-SESSIZ-7-1010-KOORD.diff` | `9e0037190f0c` | UYGULANIR |

### KIRMIZI / SARI çiftler (ad ad) + sıra testi sonucu

| şiddet | aile | A | B | dosya:şiddet | sıra testi (main üstü) | yığın-tabanlı test |
|---|---|---|---|---|---|---|
| SARI | - | `APPJS-TARIH-1010.diff` | `NEGATIF-YIL-1010-A.diff` | js/app.js:SARI | IKI-YON-DE-BASARISIZ |  |
| KIRMIZI | AILE | `D5-GUN-1010-NEG-SONRA.diff` | `D5-GUN-1010-v3.diff` | arac/denetle.py:KIRMIZI | IKI-YON-DE-BASARISIZ | IKI-YON-DE-BASARISIZ (taban NEGATIF-YIL-1010-B-v2.diff) |
| SARI | - | `D5-GUN-1010-NEG-SONRA.diff` | `NEGATIF-YIL-1010-B-v2.diff` | arac/denetle.py:SARI | SIRA-BAGIMLI(tek-yon:B>A) |  |
| KIRMIZI | - | `D5-GUN-1010-v3.diff` | `NEGATIF-YIL-1010-B-v2.diff` | arac/denetle.py:KIRMIZI | IKI-YON-DE-BASARISIZ |  |
| SARI | - | `GIRDI-TEKIL-1010.diff` | `TUZ-DORT-DOSYA-1010-v3.diff` | arac/girdi.py:SARI | DEGISMELI |  |
| SARI | - | `KOS-VE-YAYINLA-ADD-1010.diff` | `KOSU-YAYIN-KAPI-1010.diff` | arac/kos_ve_yayinla.py:SARI | SIRA-BAGIMLI(tek-yon:B>A) |  |
| SARI | - | `KOSU-YAYIN-KAPI-1010.diff` | `KOSU-YAYIN-LISTE-1010.diff` | arac/kosu_yayin.py:SARI | SIRA-BAGIMLI(tek-yon:A>B) |  |
| KIRMIZI | AILE | `KUNYE-SUMER-7-1010-v2.diff` | `KUNYE-SUMER-7-1010-v4.diff` | data/devletler.js:KIRMIZI | SIRA-BAGIMLI(tek-yon:A>B) |  |
| KIRMIZI | AILE | `KUNYE-SUMER-7-1010-v2.diff` | `KUNYE-SUMER-7-1010.diff` | data/devletler.js:KIRMIZI | IKI-YON-DE-BASARISIZ |  |
| KIRMIZI | AILE | `KUNYE-SUMER-7-1010-v4.diff` | `KUNYE-SUMER-7-1010.diff` | data/devletler.js:KIRMIZI | IKI-YON-DE-BASARISIZ | IKI-YON-DE-BASARISIZ (taban KUNYE-SUMER-7-1010-v2.diff) |
| KIRMIZI | - | `LAB-KONUM-ADAY-1010-pantelerya.diff` | `LAB-KONUM-ONERI-1010-v3.diff` | data/yerlesimler.js:KIRMIZI | IKI-YON-DE-BASARISIZ |  |
| KIRMIZI | AILE | `LAB-KONUM-ONERI-1010-v2-ikame-secenegi.diff` | `LAB-KONUM-ONERI-1010-v2-tasima-secenegi.diff` | data/yerlesimler.js:KIRMIZI;data/yerlesimler_asya.js:KIRMIZI | IKI-YON-DE-BASARISIZ |  |
| KIRMIZI | AILE | `LAB-KONUM-ONERI-1010-v2-ikame-secenegi.diff` | `LAB-KONUM-ONERI-1010-v3-ikame.diff` | data/yerlesimler_asya.js:KIRMIZI | IKI-YON-DE-BASARISIZ |  |
| KIRMIZI | AILE | `LAB-KONUM-ONERI-1010-v2-ikame-secenegi.diff` | `LAB-KONUM-ONERI-1010-v3.diff` | data/yerlesimler.js:KIRMIZI;data/yerlesimler_asya.js:BILGI | IKI-YON-DE-BASARISIZ |  |
| KIRMIZI | AILE | `LAB-KONUM-ONERI-1010-v2-tasima-secenegi.diff` | `LAB-KONUM-ONERI-1010-v3-ikame.diff` | data/yerlesimler_asya.js:KIRMIZI | IKI-YON-DE-BASARISIZ |  |
| KIRMIZI | AILE | `LAB-KONUM-ONERI-1010-v2-tasima-secenegi.diff` | `LAB-KONUM-ONERI-1010-v3.diff` | data/sehirler.js:KIRMIZI;data/yerlesimler.js:KIRMIZI;data/yerlesimler_asya.js:BILGI | IKI-YON-DE-BASARISIZ |  |
| KIRMIZI | AILE | `LAB-KONUM-ONERI-1010-v2.diff` | `LAB-KONUM-ONERI-1010-v3.diff` | data/yerlesimler.js:KIRMIZI;data/yerlesimler_asya.js:KIRMIZI;data/yerlesimler_h2_kuzeyafrika.js:KIRMIZI | IKI-YON-DE-BASARISIZ |  |
| KIRMIZI | AILE | `LAB-KONUM-ONERI-1010-v2.diff` | `LAB-KONUM-ONERI-1010.diff` | data/yerlesimler.js:KIRMIZI;data/yerlesimler_asya.js:KIRMIZI;data/yerlesimler_h2_kuzeyafrika.js:KIRMIZI | IKI-YON-DE-BASARISIZ |  |
| SARI | - | `LAB-KONUM-ONERI-1010-v2.diff` | `YER-YAMA-SESSIZ-7-1010-KOORD-v2.diff` | data/yerlesimler.js:SARI | DEGISMELI |  |
| SARI | - | `LAB-KONUM-ONERI-1010-v2.diff` | `YER-YAMA-SESSIZ-7-1010-KOORD.diff` | data/yerlesimler.js:SARI | DEGISMELI |  |
| KIRMIZI | AILE | `LAB-KONUM-ONERI-1010-v3-balasagun-not.diff` | `LAB-KONUM-ONERI-1010-v3-balasagun-tasima-BEKLER.diff` | data/yerlesimler_ortaasya3.js:KIRMIZI | IKI-YON-DE-BASARISIZ |  |
| KIRMIZI | AILE | `LAB-KONUM-ONERI-1010-v3.diff` | `LAB-KONUM-ONERI-1010.diff` | data/yerlesimler.js:KIRMIZI;data/yerlesimler_asya.js:KIRMIZI;data/yerlesimler_h2_kuzeyafrika.js:KIRMIZI | IKI-YON-DE-BASARISIZ |  |
| SARI | - | `LAB-KONUM-ONERI-1010-v3.diff` | `YER-YAMA-SESSIZ-7-1010-KOORD-v2.diff` | data/yerlesimler.js:SARI | DEGISMELI |  |
| SARI | - | `LAB-KONUM-ONERI-1010-v3.diff` | `YER-YAMA-SESSIZ-7-1010-KOORD.diff` | data/yerlesimler.js:SARI | DEGISMELI |  |
| SARI | - | `LAB-KONUM-ONERI-1010.diff` | `YER-YAMA-SESSIZ-7-1010-KOORD-v2.diff` | data/yerlesimler.js:SARI | DEGISMELI |  |
| SARI | - | `LAB-KONUM-ONERI-1010.diff` | `YER-YAMA-SESSIZ-7-1010-KOORD.diff` | data/yerlesimler.js:SARI | DEGISMELI |  |
| KIRMIZI | - | `NEGATIF-YIL-1010-B-v2.diff` | `NEGATIF-YIL-B-SINAV-DUZELT-1010.diff` | denetim/ARAC-NEGATIF-YIL-B-SINAV-1010.py:KIRMIZI | DEGISMELI |  |
| SARI | - | `NOKTA-SUMER-1010-B10.diff` | `SUMER-SAHIP-1010.diff` | data/yerlesimler_nokta_ortadogu_0917.js:SARI | IKI-YON-DE-BASARISIZ | SIRA-BAGIMLI(tek-yon:A>B) (taban NOKTA-SUMER-1010.diff) |
| SARI | - | `NOKTA-SUMER-1010-K2-B.diff` | `SUMER-SAHIP-1010.diff` | data/yerlesimler_nokta_ortadogu_0917.js:SARI | IKI-YON-DE-BASARISIZ | IKI-YON-DE-BASARISIZ (taban NOKTA-SUMER-1010-K2.diff+NOKTA-SUMER-1010.diff+NOKTA-SUMER-1010-B10.diff) |
| KIRMIZI | AILE | `NOKTA-SUMER-1010-K2.diff` | `NOKTA-SUMER-1010.diff` | data/yerlesimler_nokta_ortadogu_0917.js:KIRMIZI | IKI-YON-DE-BASARISIZ |  |
| KIRMIZI | - | `NOKTA-SUMER-1010-K2.diff` | `SUMER-SAHIP-1010.diff` | data/yerlesimler_nokta_ortadogu_0917.js:KIRMIZI | IKI-YON-DE-BASARISIZ | IKI-YON-DE-BASARISIZ (taban NOKTA-SUMER-1010.diff+NOKTA-SUMER-1010-B10.diff) |
| KIRMIZI | - | `NOKTA-SUMER-1010.diff` | `SUMER-SAHIP-1010.diff` | data/yerlesimler_nokta_ortadogu_0917.js:KIRMIZI | IKI-YON-DE-BASARISIZ | SIRA-BAGIMLI(tek-yon:A>B) (taban NOKTA-SUMER-1010-B10.diff) |
| KIRMIZI | - | `SAHIPLIK-KAPSAM-1010-v3.diff` | `SAHIPLIK-KUR-KAPI-1010.diff` | arac/_sahiplik_uygula.py:SARI;denetim/ARAC-SAHIPLIK-KAPSAM-SINAV-1010.py:KIRMIZI | SIRA-BAGIMLI(tek-yon:A>B) |  |
| KIRMIZI | AILE | `YER-YAMA-SESSIZ-7-1010-KOORD-v2.diff` | `YER-YAMA-SESSIZ-7-1010-KOORD.diff` | arac/denetle.py:KIRMIZI;data/yerlesimler.js:KIRMIZI | IKI-YON-DE-BASARISIZ |  |

### Ortak dosyalı TÜM çiftlerin sıra testi sayımı (105 çift)

IKI-YON-DE-BASARISIZ: 42, DEGISMELI: 57, SIRA-BAGIMLI(tek-yon:B>A): 3, SIRA-BAGIMLI(tek-yon:A>B): 3

### BİLGİ (yalnız aynı dosya) ama sıra testinde DEĞİŞMELİ olmayanlar

- `D5-GUN-1010-NEG-SONRA.diff` × `KASA-DIKIS-KAPI-1010.diff` (arac/denetle.py:BILGI): IKI-YON-DE-BASARISIZ · yığın-tabanlı: IKI-YON-DE-BASARISIZ (taban NEGATIF-YIL-1010-B-v2.diff)
- `D5-GUN-1010-NEG-SONRA.diff` × `KASA-GORUNURLUK-SAYAC-1010.diff` (arac/denetle.py:BILGI): IKI-YON-DE-BASARISIZ · yığın-tabanlı: IKI-YON-DE-BASARISIZ (taban NEGATIF-YIL-1010-B-v2.diff)
- `D5-GUN-1010-NEG-SONRA.diff` × `SAHIPLIK-KAPSAM-1010-v3.diff` (arac/denetle.py:BILGI): IKI-YON-DE-BASARISIZ · yığın-tabanlı: DEGISMELI (taban NEGATIF-YIL-1010-B-v2.diff)
- `D5-GUN-1010-NEG-SONRA.diff` × `YER-YAMA-SESSIZ-7-1010-KOORD-v2.diff` (arac/denetle.py:BILGI): IKI-YON-DE-BASARISIZ · yığın-tabanlı: DEGISMELI (taban NEGATIF-YIL-1010-B-v2.diff)
- `D5-GUN-1010-NEG-SONRA.diff` × `YER-YAMA-SESSIZ-7-1010-KOORD.diff` (arac/denetle.py:BILGI): IKI-YON-DE-BASARISIZ · yığın-tabanlı: DEGISMELI (taban NEGATIF-YIL-1010-B-v2.diff)
- `D5-GUN-1010-v3.diff` × `KASA-DIKIS-KAPI-1010.diff` (arac/denetle.py:BILGI): IKI-YON-DE-BASARISIZ
- `D5-GUN-1010-v3.diff` × `KASA-GORUNURLUK-SAYAC-1010.diff` (arac/denetle.py:BILGI): IKI-YON-DE-BASARISIZ
- `KASA-DIKIS-KAPI-1010.diff` × `KASA-GORUNURLUK-SAYAC-1010.diff` (arac/denetle.py:BILGI): IKI-YON-DE-BASARISIZ
- `KASA-DIKIS-KAPI-1010.diff` × `NEGATIF-YIL-1010-B-v2.diff` (arac/denetle.py:BILGI): IKI-YON-DE-BASARISIZ
- `KASA-DIKIS-KAPI-1010.diff` × `SAHIPLIK-KAPSAM-1010-v3.diff` (arac/denetle.py:BILGI): IKI-YON-DE-BASARISIZ
- `KASA-DIKIS-KAPI-1010.diff` × `YER-YAMA-SESSIZ-7-1010-KOORD-v2.diff` (arac/denetle.py:BILGI): IKI-YON-DE-BASARISIZ
- `KASA-DIKIS-KAPI-1010.diff` × `YER-YAMA-SESSIZ-7-1010-KOORD.diff` (arac/denetle.py:BILGI): IKI-YON-DE-BASARISIZ
- `KASA-GORUNURLUK-SAYAC-1010.diff` × `NEGATIF-YIL-1010-B-v2.diff` (arac/denetle.py:BILGI): IKI-YON-DE-BASARISIZ
- `KASA-GORUNURLUK-SAYAC-1010.diff` × `SAHIPLIK-KAPSAM-1010-v3.diff` (arac/denetle.py:BILGI): IKI-YON-DE-BASARISIZ
- `KASA-GORUNURLUK-SAYAC-1010.diff` × `YER-YAMA-SESSIZ-7-1010-KOORD-v2.diff` (arac/denetle.py:BILGI): IKI-YON-DE-BASARISIZ
- `KASA-GORUNURLUK-SAYAC-1010.diff` × `YER-YAMA-SESSIZ-7-1010-KOORD.diff` (arac/denetle.py:BILGI): IKI-YON-DE-BASARISIZ
- `KRONO-ONCE1281-1010-A.diff` × `KRONO-ONCE1281-1010-B.diff` (index.html:BILGI): IKI-YON-DE-BASARISIZ
- `KRONO-ONCE1281-1010-A.diff` × `NEGATIF-YIL-1010-A.diff` (index.html:BILGI): IKI-YON-DE-BASARISIZ
- `KRONO-ONCE1281-1010-B.diff` × `NEGATIF-YIL-1010-A.diff` (index.html:BILGI): IKI-YON-DE-BASARISIZ
- `NOKTA-SUMER-1010-B10.diff` × `NOKTA-SUMER-1010-K2-B.diff` (data/yerlesimler_nokta_ortadogu_0917.js:BILGI): IKI-YON-DE-BASARISIZ · yığın-tabanlı: DEGISMELI (taban NOKTA-SUMER-1010-K2.diff)
- `NOKTA-SUMER-1010-K2-B.diff` × `NOKTA-SUMER-1010-K2.diff` (data/yerlesimler_nokta_ortadogu_0917.js:BILGI): SIRA-BAGIMLI(tek-yon:B>A)
- `NOKTA-SUMER-1010-K2-B.diff` × `NOKTA-SUMER-1010.diff` (data/yerlesimler_nokta_ortadogu_0917.js:BILGI): IKI-YON-DE-BASARISIZ · yığın-tabanlı: IKI-YON-DE-BASARISIZ (taban NOKTA-SUMER-1010-K2.diff)

## §3 🔴 SIRA BAĞIMLILIĞI (ana soru) — `LAB-DIFF-CARPISMA-1010-sira.csv`, `-yigin.csv`

**İki yönde de uygulanıp sonuç ağacı FARKLI çıkan çift: 0.** 57 çift iki yönde de temiz uygulandı ve
`write-tree` sha'ları BİREBİR aynı çıktı ⇒ DEĞİŞMELİ. Sıra bağımlılığı yalnızca "tek yön uygulanır" biçiminde görüldü:

**3a. YALNIZ BİR YÖN UYGULANIR (main üstü, 6 çift).** Hepsi yığın: ikinci diff birincinin ÜSTÜNE yazılmış.
| önce | sonra | ters yön hatası |
|---|---|---|
| `NEGATIF-YIL-1010-B-v2` (--exclude) | `D5-GUN-1010-NEG-SONRA` | NEG-SONRA tek başına: `arac/denetle.py:3178` |
| `KOSU-YAYIN-KAPI-1010` | `KOS-VE-YAYINLA-ADD-1010` | `arac/kos_ve_yayinla.py:37` |
| `KOSU-YAYIN-KAPI-1010` | `KOSU-YAYIN-LISTE-1010` | `arac/kosu_yayin.py:12` |
| `KUNYE-SUMER-7-1010-v2` | `KUNYE-SUMER-7-1010-v4` | `data/devletler.js:10568` (aile) |
| `NOKTA-SUMER-1010-K2` | `NOKTA-SUMER-1010-K2-B` | `data/yerlesimler_nokta_ortadogu_0917.js:144` (aile) |
| `SAHIPLIK-KAPSAM-1010-v3` | `SAHIPLIK-KUR-KAPI-1010` | `arac/_sahiplik_uygula.py:34` + sınav dosyası yok |

**3b. Yığın tabanlı testte ek tek yön (2 çift).** `SUMER-SAHIP-1010` iki tabana birden yığılı:
`NOKTA-SUMER-1010` **ve** `NOKTA-SUMER-1010-B10` (ikisi de önce gelmeli; tek tabanla `…ortadogu_0917.js:20` / `:95`
hatası). `NOKTA-SUMER-1010-K2` ile `SUMER-SAHIP` bu taban üstünde de iki yönde başarısız (`:49`).

**3c. HİÇBİR SIRADA BİRLİKTE UYGULANMAZ: ikisi de main'e TEK BAŞINA temiz uygulanıyor (karşılıklı dışlayan).**
- 🔴 Aile DIŞI (2):
  - `D5-GUN-1010-v3` × `NEGATIF-YIL-1010-B-v2`: `arac/denetle.py` KIRMIZI. D5→NEG sırasında `denetle.py:3188`,
    NEG→D5 sırasında `denetle.py:3125` hatası. (Aynı ailedeki `D5-GUN-1010-NEG-SONRA`, NEG-B üstüne yığılı sürüm. NEG-B
    tabanında D5-v3 × NEG-SONRA da iki yönde başarısız: `:3098/:3151`.)
  - `LAB-KONUM-ADAY-1010-pantelerya` × `LAB-KONUM-ONERI-1010-v3`: `data/yerlesimler.js:1693` iki yönde.
- Aile İÇİ (12): `KUNYE-SUMER-7-1010` × `-v2` (devletler.js:10567) · `NOKTA-SUMER-1010` × `-K2` (:49) ·
  `YER-YAMA-SESSIZ-7-1010-KOORD` × `-KOORD-v2` (denetle.py:1396) · LAB-KONUM 9 çift: v2-ikame×v2-tasima,
  v2-ikame×v3-ikame, v2-ikame×v3, v2-tasima×v3-ikame, v2-tasima×v3, v2×v3, v2×v1, v3×v1,
  v3-balasagun-not×v3-balasagun-tasima-BEKLER.
- Tabanı bulunan yığınlarda ayrıca: `KUNYE-SUMER-7-1010-v4` × `-1010` (v2 tabanında `:10567`) ve
  `NOKTA-SUMER-1010-K2-B` × `NOKTA-SUMER-1010` (K2 tabanında `:49`).

**3d. Ölçülemeyen çiftler.** Tabanı bilinmeyen 2 KASA diff'inin ve bayat 4 diff'in çiftleri (§7). Bunlar sıra
testinde "iki yönde başarısız" çıktı, ama ölçülen neden bayat tabandır, çarpışma DEĞİL.

## §4 SESSİZ GERİ ALMA

Yöntem: her diff'in `+`/`-` satırlarındaki `SABIT = değer`, `"anahtar": sayı` ve `return/sys.exit N` kalıpları
dosya+ad anahtarıyla dizinlendi; ≥2 diff'in dokunduğu anahtarlar listelendi. Ayrıca yığınlarda "tabanın
EKLEDİĞİ satırı halefin SİLMESİ" sayıldı.

| sabit | koyan diff | değiştiren diff | A→B / B→A sonucu |
|---|---|---|---|
| `BEKLENEN_D5C` (denetle.py, YENİ) | `D5-GUN-1010-v3` = 2449 | `D5-GUN-1010-NEG-SONRA` = 2449 | aynı değer; ikisi birlikte uygulanmaz (aile) ⇒ her sırada 2449 ya da yalnız biri |
| `BEKLENEN_TABAN_OLCULEMEDI` (denetle.py, YENİ) | `SAHIPLIK-KAPSAM-1010-v3` = **190** | yok (evrende başka diff yok) | her sırada 190 |
| `BEKLENEN_ACIK_S` (2s) | main'de **193** | evrende değiştiren YOK | 193 |
| `BEKLENEN_ACIK_ISG` (2i) | main'de **1** | evrende değiştiren YOK | 1 |
| `BULUNAMADI_DEFTER` 6→7 üye | `KASA-GORUNURLUK-SAYAC-1010` (7: +Akçakale) | evrende başka YOK | ÖLÇÜLEMEDİ (diff main'e uymuyor, §7) |
| `TAM_PENCERE_TAVAN`=110 · `_TEK_TAVAN`=112 · `KUNYE_IC_BOSLUK_TAVAN`=27 | `KASA-GORUNURLUK-SAYAC-1010` | yok | ÖLÇÜLEMEDİ (§7) |
| çıkış kodu, `kos_ve_yayinla.py` | `KOSU-YAYIN-KAPI` `return 3` | `KOS-VE-YAYINLA-ADD` dört `return 1` EKLER; KAPI'nın satırını silmez (0 satır) | tek sıra (3a) |
| çıkış kodu, `kosu_yayin.py` | `KOSU-YAYIN-KAPI` `return 1`×3 | `KOSU-YAYIN-LISTE` +1 `return 1`, 0 silme | tek sıra (3a) |
| `ARAC` listesi (SAHIPLIK sınavı) | `SAHIPLIK-KAPSAM-v3` | `SAHIPLIK-KUR-KAPI` satırı değiştirir | tek sıra (3a) |

- **TABAN 190→188:** evrendeki hiçbir diff 188 yazmıyor. Tüm `origin/makine/*` dallarında `…=188` /
  `190→188` metni de bulunmadı. Evrende yalnızca 190 var ⇒ 188 bu ölçüm evreninde DEĞİL.
- **macaristan −8:** evrende `-8`/`−8` içeren satır yok. Tek macaristan veri değişikliği `KASA-FAZ2-1010`
  (Dubrovnik 1358-1459 `d:macaristan → d:dubrovnik`, 1 satır); FAZ2'nin dahil olduğu 9 çiftin hepsi DEĞİŞMELİ.
- **Yığın halefinin, tabanın eklediği satırları silmesi** (metin düzeyinde, yığın tasarımı gereği):
  KUNYE-v2→v4: 4 satır · NOKTA-K2→K2-B: 1 · KAPSAM-v3→KUR-KAPI: 9 (2 araç + 7 sınav) ·
  NEG-B-v2→D5-NEG-SONRA: 3 (NEG-B'nin `_gun.dizgi(...)` karşılaştırmaları `ilk_n > esik_5b` /
  `ilk_n <= esik_5c` olmuş, eşikler `gun_sayisi(...)` ile hesaplanıyor; yani dizgi karşılaştırması gün-sayısı karşılaştırmasıyla yeniden yazılmış) ·
  NOKTA-SUMER→SUMER-SAHIP: 19 · B10→SUMER-SAHIP: 16. Bunlara hüküm verilmedi; aileler dışında sabit ezen diff YOK.
- **Bulunan "sessiz geri alma" (bir diff'in eklediğini ilgisiz bir diff'in değiştirmesi, iki sırada farklı
  final): 0.**

## §5 SINAV DOSYASI ÖRTÜŞMESİ (evrende 20 sınav dosyası)
- `denetim/ARAC-NEGATIF-YIL-B-SINAV-1010.py`: `NEGATIF-YIL-1010-B-v2` (YENİ dosya; main'de zaten 1c639cf5 olarak var)
  × `NEGATIF-YIL-B-SINAV-DUZELT-1010` (dosyayı DEĞİŞTİRİR). `--exclude` ile DEĞİŞMELİ; exclude olmadan NEG-B-v2 hiç
  uygulanmaz ("already exists"). (Bugünkü NEG-B vakası.)
- `denetim/ARAC-SAHIPLIK-KAPSAM-SINAV-1010.py`: `SAHIPLIK-KAPSAM-1010-v3` (YENİ) × `SAHIPLIK-KUR-KAPI-1010`
  (DEĞİŞTİRİR): tek sıra (3a).
- (Ek) `TUZ-DORT-DOSYA-1010-v3`'ün sınavı main'de birebir var ⇒ `--exclude` gerektirir; başka bir diff'le örtüşmez.

## §6 ZATEN MAİNDE (evren dışı, 8)
ARAC-CIKIS-KODU-DUZELT-1010-X-v2 · -Y · ARAC-STDOUT-A-1010 · -A-1010-YAYIN · ARAC-TAHTA-TEMIZ-AGAC-1010 ·
DENETLE-STDOUT-1010 · IZNIK-1097-1010-KOORD · -KRONO (`git apply -R --check` temiz).

## §7 ÖLÇÜLEMEDİ
| diff | neden (ölçüldü) |
|---|---|
| `KASA-DIKIS-KAPI-1010` (makine/kasa) | ön-görüntü blob'u `29471b4d7` HİÇBİR ref'te yok (3-way: "repository lacks the necessary blob"); `--reject` ile 1 hunk uyuyor, 1 hunk reddediliyor; evrende tek ya da iki adımlı yığın tabanı yok |
| `KASA-GORUNURLUK-SAYAC-1010` (makine/kasa) | düz diff (index satırı yok, kaynak dosya damgası 07:00:35); 2 hunk'ın ikisi de ileri ve geri yönde reddediliyor; evrende tabanı yok |
| `KRONO-ONCE1281-1010-A`, `-B` (emrelic-kunye) | bayat taban: 3-way `index.html`'de ÇATIŞMA veriyor (main sonradan değişmiş); tek hunk ileri ve geri yönde reddediliyor. Aynı ailedeki `-C` main'e uyuyor |
| `NEGATIF-YIL-1010-A` (emrelic-kunye) | bayat: 3-way `index.html`'de çatışma (öbür 3 dosya temiz); `NEGATIF-YIL-1010-A2` main'e uyuyor |
| `ARAC-CIKIS-KODU-DUZELT-1010-X` | 10 hunk ileri yönde reddediliyor, 1 hunk geri yönde uyuyor; `-X-v2` main'de |
| `INIS-SIRA-1010.md` listesi | YOK ⇒ "BU İNİŞ / TAM İNŞA" kovaları ölçülemedi; evren geri dönüş taramasıdır (§0) |
| D8 / `olcum_agaci.py hazirla` | araç main'de yok; metin uygulaması için gerekmedi |

Bu 6 diff'in dahil olduğu çiftler CSV'de "IKI-YON-DE-BASARISIZ" görünüyor, ama nedeni çarpışma değil bayatlık.

## §8 §0 İLE KARŞILAŞTIRMA
| ölçü | öngörü | ölçülen |
|---|---|---|
| evren | 51 diff · 1275 çift | 51 · 1275 (aynı) |
| aynı-DOSYA çiftleri | ~120 | **105** (aile dışı 71) |
| aynı-HUNK-BÖLGESİ (SARI+KIRMIZI) | ~35 | **34** (SARI 13 · KIRMIZI 21) |
| aynı-SATIR (KIRMIZI) | ~15 | **21** (15'i aile içi; aile dışı 6 çiftin 2'si yeni-dosya kuralından: NEG-B×SINAV-DUZELT exclude ile DEĞİŞMELİ, KAPSAM×KUR-KAPI yığın) |
| SIRA-BAĞIMLI | ~25, çoğu tek yön | **8 tek yön** (6 main üstü + 2 yığın tabanlı) · **0 "iki yönde farklı sonuç"** · ek olarak **14 karşılıklı dışlayan** (12 aile içi, 2 aile dışı) |
| SESSİZ GERİ ALMA | ~4 | ilgisiz diff'ler arasında **0** (6 yığında tasarım gereği yeniden yazım var) |
| sınav örtüşmesi | ~3 | **2** |

Öngörü sapmaları: aynı-dosya çifti sayısını fazla tahmin ettim (index.html/devletler.js kümesi küçük çıktı). Sıra
bağımlılığı tahminden az çıktı: `git apply` bağlamın birebir tutmasını istediği için "iki yön de uygulanır ama sonuç farklı" vakası fiilen 0.

## §9 TEMİZLİK
Ölçüm worktree'si (<scratch>/agac) 09:49'de kaldırıldı. git worktree list: C:/atlas              1fe320ad0 [lab-1004] C:/atlas-d8           d829edfe9 [lab-d8-uye-1005] C:/atlas-d8m          fef9487b6 (detached HEAD) C:/atlas-lab-denetim  0b8c524cc [makine/lab] . Hiçbir checkout'un data/ veya arac/ dosyasına yazılmadı; commit/push yok. Scratch: LAB-DIFF-CARPISMA/ (diffs/, matris.py, sira.py, yigin*.py, sabit.py, geri.py).

## §EK — 10 Ekim: D5-GUN-v3 × NEG-B-v2 uzlaştırması (koordinatör istedi)

**Soru:** ölçülen NEG-B-v2, UMIT'in `3188` hunk'ını düşürdüğü sürüm mü?
**Blob:** `origin/makine/umit` ve `origin/makine/emrelic-kunye`'deki `NEGATIF-YIL-1010-B-v2.diff` AYNI blob (`a957152e574d`);
`D5-GUN-1010-v3.diff` = `cb3b2b801544`. Yani diff DOSYASI değişmedi — UMIT'in "hunk ayıklayıcıyla düşürme"si bir İNİŞ İŞLEMİ,
yeni bir blob değil. Bu yüzden iki ölçüm yan yana:

| NEG-B-v2 hâli | NEG→D5 | D5→NEG | sonuç |
|---|---|---|---|
| dosyadaki hâli (a957152e574d, `--exclude=denetim/ARAC-NEGATIF-YIL-B-SINAV-1010.py`) | ✗ `denetle.py:3151` | ✗ `denetle.py:3188` | HİÇBİR SIRADA birlikte uygulanmıyor (ana rapor) |
| `arac/denetle.py` @3188 hunk'ı (−3188,13) DÜŞÜRÜLMÜŞ (denetle.py'de 11 hunk kalıyor) | ✓ | ✓ | iki yönde write-tree **a27c07ed6db5** — BİREBİR AYNI ⇒ DEĞİŞMELİ |

Taban `origin/main` 5aecead18; ayrık worktree, yalnız `git apply`, araç koşulmadı, worktree kaldırıldı.
Düşürme betiği: scratchpad `LAB-DIFF-CARPISMA/uzlas.py` (hedef satır ±10 içindeki hunk).
⇒ **Çakışma, UMIT'in hunk düşürmesiyle ÇÖZÜLÜYOR — ölçüldü.** Şart: iniş, `--exclude` değil hunk düşürülmüş sürümle yapılmalı
(`--exclude` dosya düzeyinde çalışır, bu hunk'ı düşürmez). En sağlamı, düşürülmüş diff'in AYRI bir blob olarak diske yazılması —
yoksa "hangi sürüm indi" sorusu yine diskte cevapsız kalır.
