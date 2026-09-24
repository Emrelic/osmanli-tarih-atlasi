# SINIR-D-ORTADOGU-0077 — Ortadoğu 1923 sınırları (çalışma defteri)

Şartname: `oturumlar/SINIR-DUNYA-0077.md` · dosyam: `data/d_sinirlar_ortadogu.js` · koordinatör YILDIRIM BAYEZIT.
Envanter öncülü: `denetim/D4-ORTADOGU-0916.md` (30 satır/32 kesim, 16 Eylül).

## 0. ÖNGÖRÜ — ölçümden ÖNCE yazıldı (24 Eylül 2026 ~13:05, ölçüm betiği henüz sonuç vermedi)

Sınav anı: ilk `SDO_OLC` çıktısı (1923-09-01, adım 10 km, yan 5 km) ve son teslimdeki çıktı.

1. **Kayıt sayısı:** 13 → **en çok ~24** (kendi dosyam içinde). Yeni kayıtların **en çok 2'si E**,
   **~6'sı C**, geri kalanı YOK/D belgeleme kaydı. Sebep: Arap Yarımadası'nın iç hatlarının
   (Necid–Hicaz, Necid–Asîr, Necid–Umman, Necid–Katar, Necid–Sahil…) **1923'te hukukî hattı
   YOKTU** (envanter A2–A15: 17 kesim "fiili"). Bunlar merdivende A/B'de kalır; C bile yazılamaz.
   Mağrip kesimlerinin (M2b/c, M3-kuzey, M4a, M5–M8) çoğu C'dir ama taraflarından birinin
   künyesi yok (İspanyol Fas, Tanca, İfni) ⇒ C yazılsa bile bir kısmı çizilemez.
2. **Renk ölçüsü (bugünkü 13 kayıt, 1923-09-01):** 5 çizilen E hattından yalnız Libya–Tunus
   (454 km) yaslama boyuna yeter; Necid–Küveyt parçaları kısa (62–90 km) ama ≥10 km ⇒ yaslanır.
   Tahmin: ÖNCE (A/B) **%60–75**, SONRA **%85–95**. Filistin–Mısır `D` sınıfında ⇒ hukukî
   görünümde yaslanmaz; C (Filistin–Ürdün) hiç yaslanmaz.
3. **En büyük kazanç kendi dosyamda DEĞİL:** Irak–Necid (Ukayr, Tarafsız Bölge dışı ~700 km)
   KOMSU dosyasında `YOK`. Devir hükmü gelmezse Ortadoğu'nun renk ölçüsü kilometre olarak
   küçük kalır. (M-5065/5066, KOMSU M-5067: A'ya katılıyor, hüküm koordinatörde.)

Öngörü çürürse burada kalır; çürüdüğü yer §2'ye yazılır.

### 0b. ÖNGÖRÜ — Kuzey Afrika (koordinatör kapsamı genişletti, 24 Eyl ~13:20; ölçümden ÖNCE)
- Yazılabilecek: Cezayir–Fas 1845 (C), Libya–Cezayir Gat→Nijer 1919 (C), Libya–Cezayir
  Gadames→Gat (YOK: 1919 metni yok, 1956'da değişti). Tunus–Cezayir ve Fransız–İspanyol Fas
  YAZILAMAZ (ilki kaynak yok, ikincisinin İspanyol bölge künyesi yok).
- Renk ölçüsü: 3 kaydın hiçbiri E değil ⇒ %47,7 DEĞİŞMEZ; kazanç çizgide (≈350 + 400 km siyah hat).
- Sınav: teslimdeki `SDO_OLC` çıktısı.

## 2. İLK ÖLÇÜM (1923-09-01, adım 10 km, yan 5 km) — öngörü ÇÜRÜDÜ

**Pozitif vaka (B9) — betik ateşliyor:** aynı betik KOMSU/Türkiye ailelerinde
`d1923-gr-shs-1` %71→%99 · `d1923-gr-bg-bati` %50→%98 · `d1923-bg-shs-1` %54→%100 ·
`d1923-gr-al` (C) %36 — şartnamenin §3.1 rakamlarıyla birebir. Yaslama: 78 kayıt, 45,8 sn (taklitli).

**Ortadoğu dosyası: ÖNCE %47,7 → SONRA %47,7 (304 örnek, 84 hesapsız). Yaslanan hat: 0.**
Öngörü "%60–75 → %85–95" idi; yanlış. Sebep veri hattı DEĞİL, A katmanının gövdeleri:

| hat | sınıf | ÖNCE→SONRA | neden yaslanmıyor (ölçüldü) |
|---|---|---|---|
| necid-kuveyt-bati | E | %50→%50 | Necid yakasının 9/9 örneği **kuveyt** gövdesinde; `suud` gövdesi hattın 100 km şeridinde **0 km²** ⇒ yön doğrulaması (≥50 km²) düşüyor. Hafr el-Bâtın (28.43K 45.97D) HİÇBİR gövdede değil |
| necid-kuveyt-yay | E | %50→%50 | aynı: 16/16 Necid örneği kuveyt'te |
| necid-kuveyt-tarafsiz-bati | E | — | `sol_taraf:null` (ortak alan) — tasarım gereği yaslanmaz |
| filistin-misir | D | %48→%48 | hukukî görünümde D yaslanmaz; Filistin yakasında 19 örnek **hicaz** (Akabe peteği Ümmürreşraş'a taşıyor) |
| filistin-urdun | C | %25→%25 | C yaslanmaz; Ürdün yakasında 62 örnek **hicaz** — Maan/Akabe 1923'te fiilen Hicaz'da (RIAA §66), yani büyük kısmı TARİHÎ olarak doğru |
| libya-tunus | E | %88→%88 | `tunus-beyligi-fransiz` gövdesi 1923-09-01'de YOK: Tunus/Gabes hiçbir `devletler2` gövdesinde değil; yerleşim `isg:` fransa-cumhuriyet taşıyor |
| libya-cezayir-gadames | E | %100 (İtalya yakası) | Cezayir `fransa-cumhuriyet` olarak boyanıyor; künye `cezayir-fransiz`in `harita:` anahtarı yok |

**Irak–Necid (KOMSU dosyasında YOK):** bugünkü hattın 20 km iki yanında 7/7 noktada HİÇBİR
gövde yok (1923-09-01). ⇒ Hat E yazılsa bile yaslama boşluğa dokunmaz, renk ölçüsü değişmez;
kazanç yalnız ÇİZGİDE.

**Filistin–Mısır D mi E mi (terim tuzağı kontrolü):** RIAA XX §71 — manda 29.09.1923'te
yürürlüğe girdiğinde "no boundaries had been established"; §73 Mısır 4 Şub 1926'da çekince
koydu; §74 İngiliz teyidi 25 Haz 1926. ⇒ 1923'te iki taraf arasında hukukî hat yok; önceki
oturumun `D` hükmü DOĞRU, değiştirilmedi.

## 2b. SON ÖLÇÜM (teslim, 1923-09-01) — sınav anı

`d_sinirlar_ortadogu.js` **13 → 18 kayıt** (E 8 · D 3 · C 1→3 · YOK 1→4). Çizilen hat 1923-09-01:
5 E + 1 C → 5 E + **3 C** (+438 km siyah hat: Lalla Magniye 148 km, Gat–Nijer 290 km).

| ölçü | ÖNCE (A/B) | SONRA (yaslamalı) |
|---|---|---|
| dosyanın tamamı (376 örnek, 156 hesapsız) | %56,9 | %56,9 |
| d1845-cezayir-fas-lalla-magniye (C) | %91 | %91 (C yaslanmaz; 3 Fas-yakası örneği fransa-cumhuriyet'te) |
| d1919-libya-cezayir-gat-nijer (C) | %100 İtalya yakası | — Cezayir yakası hesapsız (`cezayir-fransiz` gövdesi yok) |
| pozitif vaka gr-shs-1 / gr-bg-bati | %71 / %50 | %99 / %98 ✓ |

%47,7 → %56,9 artışı RENK düzelmesi DEĞİL: yeni C hatlarının iki yanı zaten doğru boyalıydı,
ortalamaya girdiler. Yaslanan Ortadoğu hattı: **0** (öngörü §0b tuttu: "renk değişmez").

KOMSU'ya devredilen C hatları (M-5084, commit 5c579927) aynı ölçüde: iq-necd-* **%0** (iki yan boş
çöl), iq-sy-1920 %40, sy-jo-1920 **%59 → %44** — başka bir hattın yaslaması bu hattın yakınında
gövdeyi YANLIŞA çeviriyor; hangisi olduğu ÖLÇÜLMEDİ (KOMSU/koordinatör için).

## 3. KOMSU'YA DEVREDİLEN KAYITLAR — koordinatör hükmü B; KOMSU uyguladı (M-5084, 5c579927)

Üretici: scratchpad `kayit_uret.py` (teslimde `denetim/`e taşınır). Hepsi **C** — belge var,
koordinat yok; geometri GeoNames ülke dökümlerinden (SY/IQ/JO/SA) çıpalandı.

| id | hat | km | IBS ile sağlama |
|---|---|---|---|
| d1923-iq-necd-ukayr | Ensab→Cümeyme→Akabe→Useymîn→Lîfiye→Ar'ar→Aneze | 671 | IBS 111 ~426 mil = 686 km ✓ |
| d1923-iq-necd-tarafsiz-kuzey | Ensab→Amgar→Bâtın (Irak / ortak alan) | 192 | IBS 111 ~119 mil = 192 km ✓ |
| d1923-iq-necd-tarafsiz-guney | Bâtın→Vukube→Ensab (Necid / ortak alan) | 197 | IBS 111 ~125 mil = 201 km ✓ |
| d1923-iq-sy-1920 | Dicle üçlüsü→Rumeylan→Abu Kemal→ayrım | 564 | IBS 100 bugünkü 376 mil (1932 hattı) |
| d1923-sy-jo-1920 | ayrım→Imtan→Nasib→Yermük | 329 | IBS 94 bugünkü 233 mil (1931 hattı) |

🔴 **KOMSU kaydının "Tarafsız Bölge dışında hat aynı" notu yalnız UÇ noktalar için doğru.**
Ukayr md.1(d)'nin ara noktaları bugünkü hattın üstünde DEĞİL: Birket el-Cümeyme (29.60K 43.60D)
bugünkü çizginin ~40 km güneyinde, Useymîn (30.37K 43.66D) ~50 km kuzeyinde. 1922 hattının
Cümeyme–Akabe–Useymîn cebi bugün yok ⇒ NE vekili KULLANILAMAZ. Değişikliğin antlaşması BULUNAMADI.

## 1. ÖLÇÜ ARACI

`denetim/SINIR-D-ORTADOGU-0077-olc.js` — tarayıcıda koşar (yaslama `js/d_katman.js`te,
tarayıcıda). Şartname `.py` diyor; Python'da aynı hesabı yeniden yazmak ölçü değil model
olurdu ⇒ sapma bilerek yapıldı. Önizleme bölmesi gizliyken MapLibre yüklenmiyor; o durumda
`SDO_YASLA` yaslamanın kendi fonksiyonunu kaynak yazımını boşa düşürerek koşturur (hesap aynı).
