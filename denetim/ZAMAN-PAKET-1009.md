# ZAMAN-PAKET-1009 — Z1+Z2+Z5+Z6+Z7 tek paket, bugünkü origin/main üstünde ölçüldü

UMIT yazıcı/paketleyici · 9 Ekim 2026 · **commit/push YOK, stash YOK**. Teslim iki dosya:
`denetim/ZAMAN-PAKET-1009.diff` (293.649 bayt, 18 dosya, LF, CR 0, BOM yok) · bu rapor.

## 0. Taban — ve yol üstünde değişti
- İş `23c08363` üstünde başladı. Ölçümler sürerken `origin/main` **`cefc73bb` (DALGA 4 İNDİ)** oldu:
  GUNNO-PAD · DENETLE-TARIH-KALAN · SAHIPLIK-UYGULA-KUSUR · BAYAT-KOPYA-KOORD · SEFER-OKU · GUN-SAYACI-C0 indi.
  ⇒ Paket **`cefc73bb` üstünde yeniden türetildi ve bütün ölçümler yeniden koşturuldu**. Aşağıdaki her sayı
  `cefc73bb`dir. (`23c08363` ölçümü de vardı: denetle/odak/yayın/arayüz sayıları BİREBİR aynı çıktı.)
- Temiz `cefc73bb` ağacında `git apply --check ZAMAN-PAKET-1009.diff` **TEMİZ**. Uygulanıp 11 dosya
  bayt bayt karşılaştırıldı: paketli worktree ile **aynı**.

## 1. Parça sınıflaması

| parça | `cefc73bb`e karşı | sınıf | pakette |
|---|---|---|---|
| Z1-MOTOR (girdi.py, uret_petek.py) | fwd temiz | **TEMİZ** | ✓ |
| Z1-ARAC (denetle, eslesme, gorunur, statu, yayin, odak_cozum.js, odak_olc, renk_olc) | fwd temiz; denetle.py hunk 2-9 ofsetli (+6…+38 satır) | **BAĞLAM KAYDI (yalnız ofset)** — DALGA 1-4 (`658a7552` `f6ff142d` `23c08363` `cefc73bb`) satır ekledi | ✓ |
| Z1-KOORD (goller.js Aral) | fwd temiz | **DIŞARIDA — Z1 s2 hükmü: GEÇERSİZ** (Aral `girdi.py`de örtüşme testiyle çözüldü) | ✗ |
| Z2-APPJS (app.js, index.html, style.css) | `index.html:3` uymadı | **BAĞLAM KAYDI**: yalnız damga satırı `css/style.css?v=r11964→r11994` (`cefc73bb`). `-C1` ile türetildi; değişen satır yalnız `<title>`. **app.js ve style.css Z2'nin hedef blob'uyla BAYT BAYT aynı** (`c793e1f5` · `456b1635`) — SEFER-OKU'nun 3 satırı artık main'de olduğu için app.js ofsetsiz oturdu | ✓ |
| Z5-KOORD (`data/yer_yama_1923_1945.js`) | fwd "already exists", reverse temiz; main blob = diff blob `f1c84358` | **ZATEN MAIN'DE** (`1177d6eb`) — ikinci kez uygulanmadı | ✗ |
| Z6-KOORD (`data/yer_yama_once1281_z6.js`, yeni) | fwd temiz | **TEMİZ** (metin olarak — anlam çakışması §5'te) | ✓ |
| Z7-PAD (`900`→`0900`, `981`→`0981`) | fwd temiz, main'de YOK | **TEMİZ** (makine/umit'te var: blob'lar `aa06cde6`/`5be988c1` = paket) | ✓ |
| Z7-MADDE (1923_1945 +3 madde · once1281_iran +1) | fwd temiz, main'de YOK | **TEMİZ** (makine/umit'te var, orada üstüne SONRA1923-EKSIK + GORUNURLUK-TUR da binmiş) | ✓ |

**Metinsel GERÇEK ÇAKIŞMA: 0.** Uydurma birleştirme yapılmadı. **Anlam çakışması VAR** (Z5 + Z6 gövdeleri bayat) — §5.

Uygulama sırası (md'lerden): Z1-MOTOR → Z1-ARAC (MOTOR'suz ImportError) → Z2 → Z6 → Z7-PAD → Z7-MADDE.

## ③ Motor tuzu — sha256 önce → sonra
| dosya | `cefc73bb` | paketli | |
|---|---|---|---|
| arac/uret_petek.py | `108ec62b…` | `2ce682d3…` | **DEĞİŞİYOR** |
| arac/girdi.py | `31edf55c…` | `0670c8eb…` | **DEĞİŞİYOR** |
| arac/renkler.py | `25be10fa…` | `25be10fa…` | aynı |
| arac/motor_onbellek.py | `b9f36f42…` | `b9f36f42…` | aynı |

⇒ **TAM İNŞA KOŞUSU GEREKİR** (§9.1-2): Z1-MOTOR + Z1-ARAC aynı commit'te, koşudan hemen önce.

## ① Paketin dokunduğu sayaçlar (`PYTHONHASHSEED=0`, `cefc73bb` → paketli)

`denetle.py --ayrinti`: **çıkış 2 → 2** (ikisinde de yalnız D8 ÖLÇÜLEMEDİ, `devletler_harita.js` yok). İhlal (1) YOK.

| sayaç | önce | sonra | not |
|---|---|---|---|
| 2s YABANCI kırılma | 1735 | **1736** | +1 |
| 2s YIL-TEMSİLÎ BORÇ | 170 | **171** | +1 = Lapaha (Muʻa) `tui-tonga-imparatorlugu f:1220-01-01` (Z1 adıyla öngörmüştü). Tavan uyarısı 151 zaten aşık, yalnız uyarı |
| D1 KAPSAM DIŞI (YENİ kova, bilgi) | — | **6804** | geri 1000→1281: 2676 · ileri 1923-10-29→1945-09-02: 4128 · 309 borçla toplanmıyor |
| D1 VERİLİ DEVİR DELİĞİ (YENİ, `BEKLENEN_VERILI_DELIK = None`) | — | **0** | tavan yazılmadı ⇒ yalnız bilgi |
| D7 muaf cografi-tecrit | 4689 | **4690** | D7 başlığı 738 değişmedi |
| D7 muaf kucuk-devlet | 310 | **312** | |
| Kuyruk `yerlesimler_h2_kuzeyafrika.js` | 45 kırılma · 2 MADDESİZ | **47 · 4** | Şefşâven `rif-cumhuriyeti` 1924-11-15 / 1926-05-27 ufka girdi (Z1 ④-5: aynı dönem iki kez yazılı) |
| durum_tablosu §1.5 | yalnız 2s satırı | aynı fark | çıkış 0 → 0 |

**Değişmeyenler (adıyla):** D1 309/309 · 1c 4 · 1b 0 · boşluk cinsi 0 · D2 628/0 · 2s AÇIK 181 (tavan 181) · 2s KAPSAM DIŞI 791 ·
2sk 2265 · 2i 171/1 · 2t 13 · 3z 492/59/418 · 4 0 · 4c 118 · 4d 326 · 4s 2 · 5 0 · 5a-muaf 1 · 5b 149 · 5c 2450 · D7 738 ·
dönem sağlığı 0 · kaynaksız `s:` 1887 (tavan 1930) / kayıt 2301 · mükerrer 95 · ölü istisna 0/52 · savaş senkronu 165/174 · R 0 · konum 0.
**`BEKLENEN_*` sabitlerinin HİÇBİRİNİN değeri değişmiyor**; yalnız yeni `BEKLENEN_VERILI_DELIK = None` ekleniyor.
Z7 evren kararı pakette YOK (olaylari_yukle genişlemedi ⇒ 2t 13, mükerrer 95 yerinde).

`odak_olc.py`: çıkış 0 → 0
| | önce | sonra |
|---|---|---|
| SEKME madde | 10805 | 10809 |
| SEKME_NOKTA | 5354 | 5357 |
| SEKME_GOVDE | 254 | **235** (−19 → VERİ PENCERESİ DIŞI) |
| SEKME_OKUNMAYAN | 1408 | 1409 (`kipirdamaz_yer_kon` 732→733) |
| SEKME_SESSIZ | 46 | 46 |
| kronoloji_cok_1923_1945 | 500/500 | 503/503 |
| kronoloji_cok_once1281_iran | 169 (77 konumlu) | 170 (78) |
| TOPLAM | 12604 / ODAKSIZ 312 | 12608 / 312 |

`denetle_yayin.py`: çıkış **1 → 1** (taban da İHLAL veriyor)
| | önce (`cefc73bb`) | sonra |
|---|---|---|
| SEKME SESSİZ GERİLEDİ | 1: 1381 Timur → iran | 1: aynı (tabanın borcu) |
| SEKME OKUNMAYAN GERİLEDİ | **2**: `900-01-01` Mapungubwe · `981-01-01` Bạch Đằng | **1**: `1026-01-08` Gazneli/Somnat (`gazneli`) |
| VERİ PENCERESİ DIŞI (YENİ) | — | 19 (selçuklu 6 · kilikya-ermeni 9 · gürcistan · memlük · bulgar-çarlığı · karaman) |
| UFUK EŞİTLİĞİ (YENİ) | — | ✓ app.js = girdi.py |
| yetim veri / ARA ÇIKTI | 0/571 · 106 | 0/572 · 107 (+`yer_yama_once1281_z6.js`) |
| damga | ✓ | ✗ ÇALIŞMA AĞACI app.js+style.css, damga r11994 ⇒ commit öncesi `surum_damgala.py` |

Öteki kapılar: `denetle_arayuz.py` 0 → 0, çıktı BİREBİR · `node --check` 7/7 ✓ (odak_cozum.js · app.js · 4 kronoloji · z6 yaması) ·
`ARAC-ZAMAN-Z1-SINAV-1008.py --gercek` **31/31**, çıkış 0 · Z2'nin sınavları tarayıcıda, KOŞULMADI.

## ② Aynı sayaca başka hangi bekleyen diff dokunuyor

### 2a. Kuyruğun bugünkü durumu (`cefc73bb`, `apply --check` ileri/geri + satır varlığı)
| diff | main'de mi | dosya | tarih | sayacı (kendi raporundan) |
|---|---|---|---|---|
| DIVRIGI-MEMLUK ailesi (7 diff) | **ZATEN MAIN'DE** (`647bcf31`). EK · EK-KOORD · EK-BEHISNI-…-ARTUKLU-SONRASI geri temiz. KOORD / KOORD-ARTUKLU-SONRASI 4/5 satır · 1008.diff 9/9 satır · EK-BEHISNI-KOORD 1/1 | yerlesimler.js · _ok110 · olaylar_senkron_0930 | 1281-1923 (madde 1399-1418) | 4c/2s — tabanda |
| EPOK-SAHIP-KOORD | **YOK**, main'e **UYGULANMIYOR**, `-C0`da da: `yerlesimler.js:159` bağlamındaki Ankara satırı `23c08363` (ANKARA-1406) ile değişti ⇒ yeniden türetilmeli | yerlesimler.js · _ok107 | 1281-1923 (1282, 1291) | 2s YABANCI +3 · KAPSAM DIŞI +1 · 2sk YER +6 · 4d 326→325 · **5a-muaf 1→2 (İHLAL)** · 2s AÇIK tek başına +2, KRONO ile net 0 |
| EPOK-SAHIP-KRONO | YOK, ileri temiz | olaylar_ek5.js | 1282-1291 | 2s AÇIK −2 (KOORD'la birlikte) |
| KRONO-SENKRON ailesi | MOSTAR + MOSTAR-KOORD + 1008.diff geri temiz; GURCISTAN-KOORD içerik main'de; 1008-KOORD 2/4+1/2 satır (GURCISTAN sürümüyle aşılmış) | devletler · yer_yama · yerlesimler · _seyrek · olaylar_ek5 | 1466-1762 | 2s AÇIK — tabanda |
| KRONO-GORUNURLUK-SUZGEC | YOK, ileri temiz | js/suzgec.js | — | odak (iddia: değişmez) |
| KRONO-GORUNURLUK-TUR | YOK; **main'e uymaz, PAKETTEN SONRA uyar** (`kronoloji_cok_once1281_iran.js:7`, Z7-MADDE'nin dosyası) | 8 kronoloji dosyası | 637-1911 (36 madde <1281) | yalnız `tur` alanı; denetle/odak değişmez iddiası |
| KRONO-GORUNURLUK-TUR2 | YOK, ileri temiz (TUR'dan sonra da) | 6 kronoloji dosyası | 1170-1955 | aynı |
| KRONO-SONRA1923-EKSIK (A) | YOK, ileri temiz (paketten sonra da) | **kronoloji_cok_1923_1945.js** (Z7-MADDE ile aynı) | 1925-1940 (8 madde) | odak SEKME +8 |
| KRONO-SONRA1923-EKSIK-B | YOK; yalnız A'dan SONRA uyar | aynı dosya | 1925-1945 (5 madde) | odak SEKME +4 · AÇILAMAZ +1. **Z5'in Kaçar→İran 1925-10-31 maddesi BURADA** — main'de yok |
| EEK-DOGU-1008-KOORD | ZATEN MAIN'DE (`0e45a9b9`) | yerlesimler.js | | |
| EEK-DOGU-2-0086 KRONO/FARK-KRONO | ZATEN MAIN'DE; FARK-KOORD içerik 7/7; 0086-KOORD FARK ile aşılmış (1/24) | yerlesimler · olaylar_ek11 | 1504 | |
| SAHIPLIK-UYGULA-KAPI | ZATEN MAIN'DE (42/43 + 128/128) | _sahiplik_uygula · _bayat_yama_kapi | | |
| SAHIPLIK-UYGULA-KUSUR | ZATEN MAIN'DE (`cefc73bb`) | _sahiplik_uygula.py | | |
| SAHIPLIK-DOSYA-DOKUMU | YOK, ileri temiz | _sahiplik_uygula.py (+409) | — | sayaç yok (salt okur) |
| GUN-SAYACI-C0 | 🔴 **YARIM İNMİŞ**: `cefc73bb` iki sınav dosyasını taşıyor ama **`arac/gun.py` ve `js/gun.js` ağaçta YOK** (`git ls-tree` 0, gitignore değil). `ARAC-GUN-SAYACI-C0-SINAV-1009.py` → `ModuleNotFoundError: gun`. Commit mesajı "YENİ: arac/gun.py + js/gun.js" diyor | — | sayaç yok |
| DENETLE-TARIH-KALAN · GUNNO-PAD · BAYAT-KOPYA-KOORD | ZATEN MAIN'DE (`cefc73bb`) | denetle.py · yerlesimler.js | | |
| SEFER-OKU-0087 | **ZATEN MAIN'DE** (`cefc73bb`) — görevde "yalnız makine/umit" deniyordu, artık değil | savaslar.js · app.js | 1511-1523 | savaş senkronu |
| DENIZ-OKU-0085-METIN | ZATEN MAIN'DE | olaylar_ek5.js | 1454 | |
| DENIZ-OKU-0085 | **main'de YOK**, ileri temiz | savaslar.js (+18) | 1454 | savaş senkronu 165/174 |

**Ayrı tutulanlar (içerik main'de, yeniden uygulanmayacak):** ACICI-CGNAT (geri temiz, `6865cc87`) · ARTUKLU-IKI-PARCA
(2/3 satır; bir satırı sonra DIVRIGI/HARPUT değiştirdi) · YIL-DOLGU-1009 (110/111 + ODAK-TAVAN 50/50, `38cf24ae`) · DOGUBEYAZIT (geri temiz, `8584cfce`).

### 2b. Aynı sayaca kaç diff dokunuyor
| sayaç | paket | başka bekleyen (main'de olmayan) | toplam |
|---|---|---|---|
| 2s YABANCI | 1735→1736 | EPOK-SAHIP-KOORD (+3) | **2** |
| 2s AÇIK | 181 = | EPOK-SAHIP KOORD (+2) + KRONO (−2) | 1 (paket dokunmuyor) |
| 2s YIL-TEMSİLÎ | 170→171 | — | 1 |
| D1 KAPSAM DIŞI / VERİLİ DELİK (yeni) | 6804 / 0 | Z5 + Z6 gövdeleri uygulanınca düşer | paket + 2 gövde |
| D7 muaf | 4689/310 → 4690/312 | — | 1 |
| 4d | 326 = | EPOK-SAHIP (−1) | 1 |
| 5a-muaf | 1 = | EPOK-SAHIP (+1, İHLAL) | 1 |
| odak SEKME / dosya satırı | 10805→10809 · 1923_1945 500→503 · iran 169→170 | SONRA1923-EKSIK A (+8) · B (+4, AÇILAMAZ +1) · GORUNURLUK SUZGEC/TUR/TUR2 (iddia 0) | **4-6** |
| yayın OKUNMAYAN GERİLEDİ | 2→1 | — | 1 |
| savaş senkronu | 165/174 = | DENIZ-OKU-0085 | 1 |
| **dosya** kronoloji_cok_1923_1945.js | Z7-MADDE | SONRA1923-EKSIK A, B | 3 — sıra: Z7-MADDE → A → B, üçü de temiz |
| **dosya** kronoloji_cok_once1281_iran.js | Z7-MADDE | GORUNURLUK-TUR (**ancak pakettensonra uyar**) | 2 |

## 5. 🔴 Z5 ve Z6 gövdeleri BAYAT — paketten sonra da ATIL, ve uygulayıcının kapısı bunu GÖRMÜYOR

**Z5 okunuyor mu? HAYIR.** Paketli ağaçta: `girdi.GIRDI_DOSYALARI` 93 dosya, `yer_yama*` **0** · `index.html`de `yer_yama` **0** ·
`denetle_yayin` onu "ARA ÇIKTI (`yama_uygula.js` tarar)" sayıyor · D1 KAPSAM DIŞI ileri **4128** = 1923-1945'te verisi olmayan
nokta. Tek değişen `app.js`: `BITIS = gunIdx("1945-09-02")` (önce 1923-10-29). Gövde ancak `_sahiplik_uygula.py --yaz`
yerleşim dosyalarına yazınca okunur (Z5 md: `GIRDI_DOSYALARI`na satır gerekmez). Künye ön şartları (kacar.t = iran.f =
1925-10-31 · bhopal/surakarta 1945-09-02 · buhara-halk-cumhuriyeti 1924-10-27) **main'de zaten var** (Z5 sınavı 4c {} · 4d {}).

**Ama main'deki Z5 gövdesi bugünkü veriye karşı BAYAT** (`ARAC-ZAMAN-Z5-SINAV-1008.py data/yer_yama_1923_1945.js`, çıkış 1):
eski_donem_kayip **115** · eski_donem_degisti **31** · yeni_donem_1923_once **87** · uc_donem_kisaldi **2** ⇒ **83 kayıt**.
Yama `s:` dizisinin TAMAMINI taşıdığı için 1281-1923 dilimindeki sonraki düzeltmeleri geri yazar. Örnek, ölçüldü:
Budin 1527-09-23→1529-09-08 main'de `macaristan-habsburg` (BOSNA-MACAR-0087), yamada `avusturya`.
Geri alınacak düzeltmelerin commit'leri (main'deki kaynak etiketinden, `git log -S`):
`f6ff142d` DALGA 2 (BOSNA-MACAR-0087 23 · DOGU-ANADOLU-0085 4 · BERKA-0087 3) · `658a7552` DALGA 1 (DOGU-SAFEVI-0086 12 · DOGU-1533-0087 2) ·
`23c08363` DALGA 3 (ANKARA-1406 · CELAYIRLI-0085) · `04971c2a` (HARPUT-DULKADIR-1009 · EEK-BALKAN-1009) · `0e45a9b9`/`0291c38d` (EEK-DOGU-1008).
83 ad: Ambohimanga, Andican, Ankara, Ardahan, Arpaçay, Ayn el-Ğazâle, Bakü, Beri, Bihaç, Bosna Brod'u, Bosna Dubiçası,
Bosna Novi'si, Budin, Cabalpûr, Cetin, Coweta, Derne, Digor, Drežnik, Eperjes, Erciş, Ereş, Etowah, Eğri, Fülek, Gence, Harput,
Hemedan, Herseknovi, Hoima, Hokand, Hucend, Iğdır, Jasenovaç, Kabala, Kahnawake, Kanije, Karahisâr-ı Şarkî, Kars, Kassa, Kirman,
Kostayniçe, Kotabato, Krupa, Kuba, Küçükperveli, Kızıl Kızılderili Gölü, Luang Prabang, Luristan, Mahmudâbâd, Masindi, Muang Sing,
Nitra, Ocmulgee, Ossossané, Oş, Peşte, Plaisance, Reşt, Sainte-Marie, Salyan, Sarıkamış, Savannakhet, Sisak, Taşkent, Toamasina,
Tokaj, Tsiroanomandidy, Tulmeyse, Udbina, Uyvar, Vientiane, Werowocomoco, Xieng Khouang, Yanıkkale, Yendi, Yezd, Zagros içi,
Zencan, Zigetvar, Şamahı, Şiraz, Şâbüran.

**Uygulayıcının kuru koşusu bunu yakalamıyor** (`_sahiplik_uygula.py --yama-glob "^yer_yama_1923_1945\.js$"`, main'deki
KUSUR-1008 sürümü): **çıkış 0** · İNEN 3975 · ATLANAN 7 (yalnız KAPSAM DARALDI: Arpaçay, Ayn el-Ğazâle, Beri, Digor, Iğdır,
Küçükperveli, Tulmeyse) · GERİ ALMA KAPISI geçti. Budin, Ankara, Harput "İNEN" listesinde.
⇒ **83'ün 76'sı sessizce geri alınırdı.** Sebep: bayat-yama kapısı "yamanın yazacağı dizi kaydın GEÇMİŞİNDE vardı mı" diye
soruyor; burada yama kaydın geçmişinde hiç olmamış ESKİ bir tabandan üretilmiş — kapı bu soruyu sormuyor (denetim var ≠ o soruyu soruyor).

**Z6 aynı sınıf, küçük ölçekte** (bu raporda yazılan bellek karşılaştırması, 1281 sonrası dilim, `f ≤ 1281` uçları normalleştirilerek):
80 kaydın **6'sı** main'le ayrışıyor: Ankara (1404-1411, `23c08363` ANKARA-1406) · Kars (1467-1534, `658a7552`) ·
Kahire (memlük ucu 1517-01-24 → yamada 02-15, `658a7552`) · Gence (celâyirli/timurlu 1386) · Taşkent (timurlu/moğolistan 1485) ·
Hucend (1500/1504) — son üçünün commit'i `-S` ile adıyla bulunamadı. Uygulayıcı kuru koşusu: çıkış 0, İNEN 80, kapı geçti.

**MÖ verisi:** pakette ve iki gövdede negatif yıl/"MÖ" **0**. 1000 öncesi MS tarihleri: Z7-PAD `0900-01-01`, `0981-01-01`
(UFUK dışı, Z1 sınavı ⑥ kovaya girmediklerini doğruluyor) · Z6 İstanbul `bizans f:0330-05-11` (motor 1000'de kırpar).
⇒ Z7 "MÖ verisi C4'ten önce yok" planını **çiğnemiyor**. Not: C4'ün temeli GUN-SAYACI-C0 main'de yarım (§2a).

## 6. Bulamadıklarım / ölçemediklerim
- D8 iki ağaçta da ÖLÇÜLEMEDİ (`devletler_harita.js` yok) — tam inşa koşusunun logunda okunmalı. Motorun 1000-01-01'deki
  `petek_epok`/PAYLAŞTIRMA davranışı koşulmadı (Z1 ③'ün uyarısı sürüyor).
- Z2'nin tarayıcı sınavları koşturulmadı.
- D7 muaf +1/+2'nin kayıt adları basılmıyor; Lapaha + Şefşâven (2) olduğu ÇIKARIM, ölçülmedi.
- Gence/Taşkent/Hucend farkını getiren commit adıyla bulunamadı.
- Z5 gövdesinin yeniden üretimi yapılmadı (Z5 oturumunun işi).

## 7. Açık sorular (koordinatöre)
1. Z5 gövdesi (`1177d6eb`) ve Z6 yaması bugünkü main'e karşı **yeniden üretilmeli** mi, yoksa uygulayıcıya "yama tabanı ≠ kaydın
   bugünkü 1281-1923 dilimi ⇒ dur" sorusu mu eklenmeli? İkisi olmadan `--yaz` 76+6 düzeltmeyi sessizce geri alır.
2. GUN-SAYACI-C0: `arac/gun.py` + `js/gun.js` `cefc73bb`e girmemiş — bilerek mi?
3. Yayın kapısı taban'da zaten çıkış 1 (Timur/iran SESSİZ). Paket 0900/0981'i kapatıp 1026 Somnat'ı açıyor — Somnat'ın çaresi
   `yer_id`/`kapsam_genis` (madde sahibi), Z1 bunu kovaya koymadı.
4. EPOK-SAHIP-KOORD Ankara bağlamından dolayı yeniden türetilmeli; 2s YABANCI'ya paketle birlikte dokunan tek ikinci diff o.
5. TUR (GORUNURLUK) ancak paketten SONRA uygulanabiliyor; SONRA1923-EKSIK A→B Z7-MADDE ile aynı dosyada — sıra: Z7-MADDE → A → B → TUR → TUR2.

## 8. Temizlik
Worktree'ler `C:\atlas-umit-zaman` ve `C:\atlas-umit-zaman-taban` kaldırıldı. Durum çıktıları son mesajda.

```
$ git -C C:\atlas status --short
(boş — temiz)
$ git -C C:\atlas-umit status --short
?? denetim/ZAMAN-PAKET-1009.diff
?? denetim/ZAMAN-PAKET-1009.md
?? denetim/ZAMAN-Z6-tdv/        ← işten ÖNCE de vardı (Z6 oturumunun, benim değil)
```
