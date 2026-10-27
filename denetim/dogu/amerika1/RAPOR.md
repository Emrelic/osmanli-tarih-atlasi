# AMERIKA-1 RAPOR (22 Ekim 2026) — `node denetim/dogu/dogrula.js amerika1` çıkış 0 (ihlal 0, uyarı 0)

## ① Ölçülen
- Girdi 17 polity: KUNYE_YOK 8 · KUNYE_MS1_DALINDA 1 (kaanul) · KUNYE_MAIN_DA 8.
- Künye yazılan: **6** (yaxchilan, piedras-negras-yokib, quirigua, naranjo-saal, ceibal, cholula). Yazılmayan: kaminaljuyu, zenu-sinu (bkz. ②).
- Kronoloji: künye içi 21 madde (yaxchilan 2, piedras-negras 2, quirigua 2, naranjo 7, ceibal 5, cholula 3) + `kronoloji_cok` 18 madde (yaxchilan 5, piedras-negras 5, quirigua 3, kaanul 3, tikal-mutul 1, palenque-baak 1) + `kronoloji_sinir` 2 (Calakmul 0636, Cholula 0700). Toplam 41. Polity başına: yaxchilan 7, piedras-negras 7, naranjo 7, quirigua 5, ceibal 5, cholula 3, kaanul 3(+1 sınır), tikal 1, palenque 1. Dokunulmayan (girdide zaten maddesi var, bu işte kaynak okunmadı): monte-alban 0, teotihuacan 0, moche 0, caracol 0, copan 0, tiwanaku 0.
- Yerleşim: **13 yeni** (Tikal, Calakmul, Dzibanché, Caracol, Copán, Palenque, Yaxchilán, Piedras Negras, Quiriguá, Naranjo (Saal), Ceibal (Seibal), Tiwanaku, Huacas de Moche); mükerrer yok (ad + 8 km taraması). 13 çift tanıklı koordinat (Wikidata P625 / OSM / es.Vikipedi; hepsi < 5 km, en büyüğü Copán 1,5 km).
- `s:` dilimi 14 (1 tanesi `__BOSLUK__`: Calakmul 0435-0636); yama 1 kayıt / 2 dilim (Cholula: 0500-0700 `__BOSLUK__`, 0700-1281 cholula). Kuyruk beyanı (`kuyruk_gerekli`) 13 yerleşimin hepsinde (1281 sonrası 2000-12-31'e kadar ayrı işçi).
- Birincil kaynak: Martin & Grube 2008 (archive.org OCR tam metin) — alıntılar betikle OCR metninde birebir sınandı (başarısız olanlar elendi/kısaltıldı). Tiwanaku: Marsh vd. 2023 (PMC makale gövdesi). Huacas de Moche: Rengifo vd. 2022 (yalnız özet).

## ② Bulamadığım / doğrulayamadığım
- **kaminaljuyu**: yazılmadı. Aradığım: Vikipedi (1500 MÖ–1200 MS iskân, Arévalo ≈900-800 MÖ), Arroyo/Inomata 2020 Latin American Antiquity özeti (Bayesian; Esperanza evresinin sonu/çöküş MS tarihi özette yok). 500-1281 için kaynaklı siyasi madde bulamadım; girdi f=-0499 "taslak" Inomata revizyonuyla (iskân ≈MÖ 900) çelişiyor.
- **zenu-sinu**: yazılmadı. Yalnız Vikipedi (≈200 MÖ–1600, Villamarín & Villamarín 1999 s.605 atfı; açılmadı); girdi "Finzenú başkent" ama Vikipedi Finzenú'yu *eyalet* (başkenti "Zenú") der → doğrulanamadı; koordinat yok. Museo del Oro/Plazas-Falchetti kronolojisi bulunamadı.
- **Cholula** (yazıldı ama ZAYIF): birincil kitaplar açılmadı (Evans 2001, McCafferty 1996/2008, Pohl); Olmeca-Xicalanca ele geçiş yılı hiçbir yerde yok (f=0700 evre başı, alt sınır); Tolteca-Chichimeca fethi Evans 1200 ↔ McCafferty 1168(?) çelişkisi `ic_not`ta. 500-700 sahibi bulunamadı → `__BOSLUK__`.
- **Ceibal t=889**: yalnız Vikipedi→Sharer&Traxler 2006 s.524 (açılmadı); M&G Seibal'ın son tarihini vermiyor. f=0411 yalnız "II. Sihyaj Chan K'awiil (411-456) devrinde" (alt sınır).
- **Naranjo t=810**: M&G hükümdar çizelgesi "784-810(?)"; terk tarihi okunmadı.
- Gün hassasiyeti: M&G'nin gün verdiği 6 olay `gun` (426-09-08, 526-02-11, 603-11-14, 682-08-27, 693-05-28, 785-07-27) + Palenque 431-03-10 (OCR "10 Mach 431", uzun sayım okunamadı); gerisi yıl. M&G Jülyen + GMT 584285 kullanıyor (elle hesapla sınandı); `ic_not_takvim` yazıldı.
- Piedras Negras/Yaxchilán sahip tablosunda Mathews erken kronolojisi M&G'de "sorunlu" (Yaxchilán 359 soru işaretli).

## ③ Kararlar / öneriler
**Künye düzeltme önerileri (KUNYE_MAIN_DA; dosyaya yazılmadı):**
- `moche`: f/t = 0001-01-01…0799-12-31; Rengifo vd. 2022 Huacas de Moche devletini 100-850 verir → öneri f=0100-01-01, t=0850-01-01 (yüzyıl).
- `tiwanaku-devleti`: Marsh vd. 2023 yerleşimin kuruluşunu ≈AD 180 verir (Tiwanaku "founded around ~AD 180"); devlet f=0500 bu makaleden doğrulanmadı (devlet kökeni tezi Marsh/atlas atfı). t=1010 doğru (970-1050). Girdi t 1100 "kismen-okundu" yerine künye 1010 doğru.
- `copan`, `palenque-baak`, `tikal-mutul`, `caracol-maya`, `moche`: girdi t'si ile `data/devletler.js` t'si farklı (copan 0822-02-01 ↔ 0820-01-01; palenque 0814 ↔ 0799-01-01; tikal 0869-01-01 ↔ 0869-08-13; moche 0800 ↔ 0799-12-31). Yerleşim zincirleri dar olanla kapatıldı; hangisi esas — Emre/HAVVA karar versin.
- `caracol-maya` kronolojisindeki **0631-01-01** maddesi ("K'an II Caracol Naranjo'yu yıldız savaşıyla yendi") M&G ile ÇELİŞİR: 626'daki iki yenilgi Caracol'un, Aralık 631 fethi **Calakmul'un** (Yuknoom Head). Atlas düzelmeli (benim Naranjo 0626 ve 0631 maddeleri M&G'ye göre doğru).
- `palenque-baak` künyesi 0431-01-01: M&G "10 March 431" (K'uk' Bahlam I) → gün yazılabilir; `kaanul` ms1 künyesi t=0909 M&G Stela 61 (899/909) ile uyumlu.

**YAMA GEREKLİ:** `Cholula` — `yama_amerika1.js` (0500-0700 `__BOSLUK__`, 0700-1281 cholula; mevcut zincir başı nahua-sehir-devletleri 1281). Monte Albán/Teotihuacan zincirleri (`yerlesimler_mo_amerika.js`) künye bitişinde (700/550) biter; yama yazmadım (pencere dışı sonrası: başka işçi).

**Boya ihtiyacı** (`arac/renkler.py BOYALAR`): yeni `d:` kimlikleri `yaxchilan`, `piedras-negras-yokib`, `quirigua`, `naranjo-saal`, `ceibal`, `cholula` — BOYALAR'da olması gerekir (bu işçi renkler.py'yi OKUMADI/değiştirmedi; MÖ-MOTOR a373df9f7 commit'i 23 künyeyi eklemiş, bu 6 yok). Ayrıca zincirde kullanılan `kaanul` ve `dos-pilas-petexbatun` (ms1 dalı künyeleri) BOYALAR'da olmalı; `tikal-mutul`, `caracol-maya`, `copan`, `palenque-baak`, `tiwanaku-devleti`, `moche` main'de var — boyalarını kontrol et.

**Diğer:** Değişmez 1 için 13 yeni yerleşimin kuyruğu (1281→2000-12-31) boş: ardıl devlet (Guatemala/Honduras/Meksika/Belize/Bolivya/Peru) zincirleri ayrı işçi. Calakmul 0636 devri ve Cholula 0700 devri BEYANLI YAKLAŞIKLIK taşır (devir günü kaynakta yok). Yeni tür/bölge değeri önerisi yok (`krallik`, `sehir-devleti`, `orta-amerika` kullanıldı).
