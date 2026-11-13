# ANALIZ-1113 — Projenin komple analizi (13 Kasım 2026)

Yazan: EMRELIC 13 KASIM OTURUMU (KASA'nın görevi). Ağaç: `emrelic-1113-analiz` worktree, `origin/main` **f4b45bb0a**. Veri dosyasına dokunulmadı; yalnız bu belge eklendi.
Ölçüt kökü (CLAUDE.md): **kronoloji ile harita birbirini doğrulamalı.** Ham ara raporlar (alt ajan çıktıları) bu dalda `denetim/ANALIZ-1113-ham/` altındadır.
Yöntem: eksen başına Sonnet alt ajan ölçtü; sentezi ve öncelik kararını EMRELIC verdi. Alt ajan sayıları yeniden ölçülmedi, yalnız denetle çıktısı ile çapraz okundu.

## ① Eksen başına ölçüm tablosu

### Eksen 1 — Kronoloji × harita uyumu (`py arac/denetle.py`, f4b45bb0a)
| Değişmez | Ölçüm | Tavan/beklenen | Not |
|---|---|---|---|
| D1 sahipsizlik | 312 sahipsiz yerleşim, 3 belgesiz | 312 / tavan 4 | Tavan gevşek (BEKLENEN_BELGESIZ=3 olmalı). 843 "verili devir deliği" gerçek borç, kovaya girmiyor |
| D1b beyansız pencere boşluğu | 0 | 0 | Macaristan 796→895 beyanı bayat, çıkarılmalı |
| D2 sessiz toprak değişimi | 760 kırılma, **0 açık** | 0 | temiz |
| D2s yabancı kırılma | 3629 · **252 açık** · 870 kapsam dışı · 440 yıl-temsilî | açık tavan yok | |
| D2sk kapanış sınıfı | yalnız-taraf 5735 | **tavan 2246 AŞILDI** | yer düzeyinde doğrulanmamış kapanış arttı; künyeden devralınmış günler (D207) |
| D2sk yıl-temsilî | 440 | **tavan 151 AŞILDI** | yeni `YYYY-01-01` kırılmaları |
| D2i işgal | 349 kırılma, 0 açık | tavan 1 | temiz |
| D2t kırılmasız madde | 224 (`fetih` ağırlıklı sinyal: Çankırı 1417, Peşte 1684…) | tavan yok | madde var, harita değişmiyor |
| D3 `m:` zamansız | 586 | şema borcu | `kd:` 434 gerçek kayıt |
| D4 hayalet dönem | **0** | 0 | |
| D4c ölümü aşan dönem | 60 | beklenen 113 | tavan gevşek; en kötü: filipin-racaliklari 63,5 yıl, macaristan 17,7, bengal-sultanligi 16,0 |
| D4d doğumdan önce dönem | 234 | beklenen 325 | zend 103, adal 36, somali 21, napoli 14, umman 14 |
| D8 şehir bölgesi | **ölçülemedi** (ana ağaçta `coz-c` ister; push kapısı ölçer) | | |
| Çıkış kodu | bkz. Ek (denetle tam koşusu uzun sürdü) | | |

Kaymalar: yerleşim 5628 (DURUM-TABLOSU 5530), künye 2267 (2251) — **DURUM-TABLOSU.md 8 Kasım fotoğrafı, bayat**; `durum_tablosu.py` 110 sn'de bitmedi (yeniden üretilemedi).

### Eksen 2 — Kaynak borcu
| Ölçüm | Sayı |
|---|---|
| Künye-kronoloji kaynak boş | 1927 (toplam 13373) |
| Künye-kronoloji güvensiz (C) | 1467 |
| Künye-kronoloji "bulunamadı" | 177 |
| Dosya kronolojisi (18336 madde): güvensiz / bulunamadı / boş / tanınmayan parça | 67 / 738 / 2 / 2195 |
| Künye kaynağı "bulunamadı" | 239 / 2267 |
| Yerleşim kaynaksız | 2434 / 5628; s: dönemi kaynaksız 8140 / 26579 |
| Vikipedi-tek-dayanak adayı (kaba) | künye-kron 1884, dosya 122, yerleşim 108, künye 41 |
| TDV'siz dolu kaynak (dünya geneli) | dosya 9199, künye-kron 9054 — **Osmanlı/İslâm kapsamına özel sayı ölçülemedi** |
| Yıl temsilî `t=YYYY-01-01` (üst sınır) | dosya 8607, künye-kron 7044; "yalnız yıl teyitli" metni 520+118; DURUM-TABLOSU resmî 379 |
| `__BOSLUK__` dönem | 698 (tablo 687); beyansız 133 |
| BEYANLI YAKLAŞIKLIK / ABİ MERKEZ | 2272 / 769 dönem; beyansız yaklaşıklık adayı 128 |
| "Bulunamadı" toplamı | 1154 (ucuz kazanç: dayanak adı geçen ~554) |
| Künye `ic_not` eksik | 1325 / 2267 (kaynak alanı eksik: 0) |

### Eksen 3 — Yerleşim / künye / renk
| Ölçüm | Sayı |
|---|---|
| Hayalet dönem (toleranslı) | 0 (ham, toleranssız: 1071 dönem / 115 kimlik: avusturya-marki 192, zend 103, fetret-musa/isa 154, mehdi 51) |
| Künye id'si BOYALAR'da tanımsız | 0 (yalnız id eşleşmesi sayılırsa 52, hepsinin `harita:` karşılığı var); `s:`'te künyesiz d: yalnız `__BOSLUK__` |
| Sıfır uzunluk / ters / çakışan dönem | 0 / 0 / 0 |
| `renk_olc`: denizle karışan renk | 454; komşuyla çakışan 9 çift; aynı anahtar+tarih örtüşen 164 çift; aynı hex eşzamanlı 6 çift; ölçülemeyen 1480 çift; beyansız paylaşım hex grubu ~120 |
| Ad+3 km mükerrer | 2 beyanlı ikiz (Port Vila, Sault Ste. Marie); adsız ≤3 km çift: 20 beyansız + 4 beyanlı |
| Şemada tanımsız alan | `konum_kesinlik` 126 kayıt, `s.eksklav` 247 kayıt (girdi.py BILINEN_ALANLAR'a kayıt = motor tuzu) |

### Eksen 4 — Kapsam (dünya)
- Canlı: 5628 yerleşim, 2267 künye, ~16015 tekil kronoloji maddesi (Osmanlı çekirdek evreni 4732).
- **MS 500 öncesi her kıta ince**: Afrika MÖ500–MS500 = 3 yerleşim / 13 künye; Okyanusya 1500'e kadar 0–9 yerleşim, 0 kronoloji; Amerika 1000–1500 = 186 yerleşim, 36 madde.
- Kronolojide Asya/Afrika/Amerika, Avrupa'nın %44/%17/%7'si (1000–1500: 1040/303/36 vs 2898). 3519 maddenin (%22) kıtası belirlenemiyor.
- GOREV-DUNYA-1102: yalnız hücre 5/6/11/12/17/18 (1500–2000 Avrupa/Asya/Afrika) işlenmiş; MÖ3500–1500 ile Amerika/Okyanusya hücreleri hiç işlenmemiş.

### Eksen 5 — Yazılım / hız (canlı site, gömülü tarayıcı; yavaş ortam olabilir)
- `index.html` 263 `<script src>`, diskte toplam **46,2 MB JS**; `data/paket_*.js` 30 dosya 19,19 MB (paket_05 6,44; paket_28 2,37; paket_12 1,94).
- Canlı: 250 istek, 9,5 MB aktarım (34,7 MB açılmış); **DCL/load 24,9 sn, ilk çizim 27,8 sn**; mobil 375 genişlikte load 10,4 sn, yatay taşma yok.
- Konsol: tekrarlayan `Cannot read properties of undefined (reading 'points')` (açılışta ve yıl değişiminde ≥5 kez); "SINIFLANMAMIŞ 21 katman" her çizimde; 3 koridor düğümü koordinatsız; Suceava↔Suçava şüpheli koridor; `dolgu.js` üretilmemiş.
- Etkileşim: yıl atlama 1,6–3,1 sn; `sehirGuncelle` 963 ms; en uzun görev 2,5 sn; uçuşta 1 fps; geo_coz 8585 halka 17,4 sn.
- Çeviri (`arac/ceviri.py`): tavan aşılmadı ama **açık borç 11083**; arayüz her dilde 18 eksik; olay eksik/bayat: en/ar/es/de 307/65, pt 1424/53, ru 3520/31, fr 4420/7.

### Eksen 6 — Tasarım / kullanıcı dostu (siteyi gezen kullanıcı gözüyle)
- **Ana vaat testi (madde → harita):** Ridaniye 1517, Mohaç 1526, Çaldıran 1514 GEÇTİ. **Lozan 24 Tem 1923 BAŞARISIZ:** kamera İsviçre'deki Lozan'a uçuyor, 25 ada/Doğu Trakya değişimi hiç görünmüyor, üstte "0 km²" (Y). Karlofça 1698: Sırem sınırı dikdörtgen çentikli (O). Kaydırıcıya tıklayınca tarih 1786'ya gidiyor, kamera İsviçre'de kalıyor; kart (1785) ile tarih (1786-04-22) uyuşmuyor (Y).
- Y: açılış 25–45 sn ve tarih zıplıyor; dil değişimi sayfayı tam yenileyip 1453'e sıfırlıyor (~30 sn); telefonda (375) harita ~%40, atıf+lejant alt yarıyı örtüyor; şehir Dizin penceresinde ham `__BOSLUK__`.
- O: tam ekran sorusu + 20 adımlık tur; dil seçici 375'te taşıyor; İngilizce kipinde karışık Türkçe; Dizin'de ad/tarih örtüşmesi; bölgeye tıklayınca tepki yok; Butonlar menüsünde dahili jargon ("KOŞU 36", "r15122", "D SINIRI"); Osmanlı aralığı kaydırıcıda dar.
- İyi: arama (Konya), kaynak listesi (TDV linki), hükümdar şeridi doğru.
- Post-it: 6 açık; sahipli 5, sahipsiz 1 (#187 — 1453 boş alanlar); `son:emre` 4 (#132, #133 Kutsal İttifak şehir günleri; #175 Uyvar/Leva; #187); `son:claude` 2 (#185 çözüldü, #186 Eflak girintisi karar bekliyor).

### Eksen 7 — Birikmiş belgeler
- 8 belgenin hepsi 4–15 hafta eski. **Bayat:** DURUM.md, ONCELIK listesi, EKSIKLER koşu-7B/vassal bölümü, BEKLEYENLER 5 Eylül kararları (tbmm-turkiye artık işlendi), PLAN-DUNYA "pencere %26" (artık `box(-180,-60,180,85)`); YAPILACAKLAR.md'de 56 açık kutudan çözülmüş olanlar: çok dosyalı girdi, denetle.py, denetle_kapsama.py, cos(enlem), arama kutusu, Faz C-B/pencere, dünya künyesi.
- **Geçerli açık (16 madde):** sorgu.py yok (YAPILACAKLAR:929), kesinlik tüketicisiz (:961), zaman dilimli Voronoi/D3 (:892,898), kd:/tabi: ②–⑦ (:300–307), alan adı (:990), site hızı, enklav D7, nehir/yoğunluk haritası, kıta boşlukları, ~40 uygulanmamış madde önerisi + kırılma taşımaları, künye kaynak borcu, D2s 198 açık.
- **Emre kararı bekleyenler:** #16 273 uzak dal silme; #17 laptop temizliği/postit-9 yarım merge; #18 mo-data-hold; #19 zh çeviri (sona); #15 enklav-kirp (Koşu 37 sonrası ölçüm); 1453+dünya≥4 açılış varsayılanı; site hızı önerileri; post-it #132/#133/#186.

## ② Bulunamayan / ölçülemeyen
- D8 (ana ağaçta ölçülemez, push kapısı ölçer); denetle tam çıkış kodu (Ek'e bakınız).
- `durum_tablosu.py` canlı çıktısı (110+ sn, bitmedi); Osmanlı/İslâm kapsamına özel TDV'siz sayı; MERAK.md veri dosyası; YAPILACAKLAR 701–880 maddeleri; A/B görünüm; kronoloji maddesi tıklama süresi (seçici bulunamadı).
- Başlangıçta bu ağaçta üretilmiş dosyalar yoktu (`coz-c` ile çözüldü; commit edilmedi).
- Not: bu makinede (4 çekirdek, 12 GB) ağır araçlar (denetle, renk_olc, durum_tablosu) paralel koşunca birbirini yavaşlattı; sayıların hiçbiri yeniden üretim için tek başına garanti değildir.

## ③ ÖNCELİK LİSTESİ (iş paketi · büyüklük · dosyalar · önerilen makine)

Öncelik sırası "kronoloji ↔ harita vaadi önce, sonra hız/kullanım, sonra borç, sonra genişleme" ilkesiyle: P0 vaadi kıran, P1–P2 siteyi kullanılmaz kılan, P3–P6 doğruluk/borç, P7+ genişleme.

| # | Paket | Büyüklük | Dokunacağı dosyalar | Makine |
|---|---|---|---|---|
| **P0** | **Lozan 1923 vaadi kırığı:** madde odağı yanlış Lozan'a gidiyor + 25 ada/D. Trakya değişimi harita/D2'de yok; kaydırıcı tarih/kart uyuşmazlığı; `points` konsol hatası; Karlofça Sırem çentiği | S–M (1 oturum) | `data/olaylar*.js`/`kronoloji_sinir*.js` (Lozan maddesi odak/koordinat), `js/app.js`, `arac/odak_olc.py`; D2t'deki fetih-kırılmasız 224 maddeyi aynı elde tara | **EMRELIC** (kod+veri, tek elden); sonra KASA birleştirir |
| **P1** | **Açılış hızı** 25–45 sn: 263 betik/46 MB → paket birleştirme/lazy yükleme, mobilde hafif mod, tur/soru ekranı sadeleştirme, dil değişiminde yeniden yükleme yerine yerinde çeviri | L | `index.html`, `js/app.js`, `arac/paketle.py` (**motor tuzu DEĞİL**), `css/style.css` | EMRELIC (kod); ölçüm LAB |
| **P2** | **Mobil/arayüz düzeltmeleri:** 375'te atıf+lejant örtüsü, dil seçici taşması, Dizin `__BOSLUK__`/örtüşme, dahili jargon (KOŞU/r15122/D SINIRI) menüden çıkar, İngilizce karışık Türkçe | M | `css/style.css`, `js/app.js`, çeviri dosyaları | EMRELIC; P1 ile aynı dosyalar → **tek elde, P1'den sonra** |
| **P3** | **Tavan aşımları:** D2sk yalnız-taraf 5735>2246 ve yıl-temsilî 440>151 (künyeden devralınmış sahte günler) — yer düzeyinde madde/gün kararı; D2s 252 açık; D1/D4c/D4d tavan gevşekliği (düşür) | L (sürekli) | `data/kronoloji_sinir*.js`, `arac/denetle.py` tavanları, `data/devletler.js` | EMRELIC/UMIT araştırma+yazma (Sonnet alt ajan araştırır, Opus karar); tavan düşürme KASA |
| **P4** | **Künye f/t kararları:** D4d 234 dönem (zend 103, adal 36, somali 21, napoli 14, umman 14, sur 9, sih 7, babur 4…) + D4c 60 dönem (filipin 6/63,5 yıl, macaristan 8, malaka 7, bengal-sultanligi…) — sınıflandır: kısalt/genişlet/ardıl | M–L | `data/devletler.js`, ilgili `s:` dosyaları (ayrı küme: zend/adal/somali) | EMRELIC/UMIT araştırma; kapı KASA |
| **P5** | **Kaynak borcu küme küme:** ① künye-kron kaynaksız+güvensiz 3394 ② "bulunamadı" 1154 (ucuz ~554: dayanak adı geçen) ③ Vikipedi-tek ~2100 ④ yerleşim kaynaksız 2434 ⑤ künye `ic_not` 1325 ⑥ yıl-temsilî `YYYY-01-01` (teyit kampanyası) | XL (parçalanır) | `data/devletler.js`, `data/kronoloji_*.js`, `data/yerlesimler*.js` — **dosya başına tek yazıcı** | EMRELIC + UMIT (dosya bölüşümü KASA'dan); Sonnet alt ajan; TDV sırası |
| **P6** | **Çeviri borcu 11083:** fr 4420, ru 3520, pt 1424, en/ar/es/de 307, arayüz 18/dil, devlet 1 | L (dil başına bağımsız) | `data/ceviri_*` dosyaları, `arac/ceviri.py` | LAB / ucuz Sonnet; dil başına ayrı dal |
| **P7** | **Dünya kapsamı:** MS500 öncesi her kıta, Okyanusya, Amerika 1000–1500, Afrika; Asya/Afrika/Amerika kronoloji açığı (Avrupa'nın %44/%17/%7'si); GOREV-DUNYA boş hücreleri | XL | yeni `data/yerlesimler_*.js`/`kronoloji_*.js` (ayrı dosya = çakışma yok) | EMRELIC + UMIT; yol ağı sırası (memory) |
| **P8** | **Renk (palet verinin fonksiyonu):** denizle karışan 454, çakışan 9 çift + 164 örtüşme, ~120 beyansız paylaşım, 1480 ölçülemeyen çift | M | `arac/renkler.py` — **motor tuzu**, tam yeniden inşa | HAVVA koşu penceresine; KASA zamanlar |
| **P9** | **Şema kaydı:** `konum_kesinlik` 126, `s.eksklav` 247 → `girdi.py` BILINEN_ALANLAR | S | `arac/girdi.py` — **motor tuzu** | P8 ile aynı koşuya bindir (HAVVA) |
| **P10** | **Sessiz borçları temizle:** 312 sahipsiz yerleşim (D1) + 843 verili-devir deliği, 133 beyansız `__BOSLUK__`, 20 beyansız ikiz, D2t 224 kırılmasız madde, bayat beyanlar (Macaristan 796→895) | M | `data/yerlesimler*.js` | EMRELIC; P7 ile dosya ayrımı gözet |
| **P11** | **Belge hijyeni:** DURUM-TABLOSU.md/DURUM.md/ONCELIK/EKSIKLER/BEKLEYENLER bayat → bu analizle değiştir; YAPILACAKLAR'ın 16 geçerli maddesini tek listeye indir; `durum_tablosu.py` hızlandır (>110 sn) | S | kök `*.md`, `arac/durum_tablosu.py` | KASA (kısa) |
| **P12** | **Post-it/Emre kararları:** #132/#133 (Kutsal İttifak), #175, #186 Eflak, #187 sahipsiz; 273 uzak dal silme; mo-data-hold; enklav-kirp; açılış varsayılanı | S | — | **Emre'ye sorulacak** (KASA iletir) |

Aynı dosyaya dokunan paketler: **P1+P2** (js/app.js, css) tek el; **P8+P9** (arac/ motor tuzu) tek koşu; **P4+P5+P10** (devletler.js/yerlesimler*.js) dosya bölüşümü şart; **P0+P3** (kronoloji_sinir*) sıralı.

### Önerilen dağıtım (5 makine)
- **EMRELIC (bu makine, kısıt yok):** P0 → P1 → P2 sonra P4 kümeleri.
- **UMIT:** yalnız KASA/Emre onayıyla (eczane SQL — dokunulmaz kuralı); P5/P7 araştırma.
- **KASA:** birleştirme/kapı, P3 tavan düşürme, P11, P12 iletimi.
- **HAVVA:** P8+P9 tek koşu (Koşu 37 sürüyor; sonrası).
- **LAB:** P6 çeviri, ölçüm tekrarları (zayıf makine, ufak iş).

## Ek — denetle çıkış kodu
`py arac/denetle.py` bu makinede (4 çekirdek, ağır araçlar paralel) 15+ dk içinde bitmedi; çıktı D4d'den sonrasına (D5+, D8) ulaşmadan kesildi. **Çıkış kodu OKUNAMADI = ölçülemedi (2 sayılır, temiz değil).** Okunan kısım `ANALIZ-1113-ham/denetle-kismi.txt`; D1–D4d ihlal vermedi (⚠️ yalnız tavan aşımları: D2sk 5735>2246, yıl-temsilî 440>151). Tam çıkış kodu için KASA'nın push kapısı ölçümü (ayrı worktree, boş makine) esastır.
