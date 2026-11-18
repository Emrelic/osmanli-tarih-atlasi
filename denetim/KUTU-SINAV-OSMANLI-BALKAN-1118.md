# KUTU SINAVI — Osmanlı/Balkan — MOTOR-YAMA-5GUN-B-1118 (18-19 Kasım 2026)

Ağaç: `worktree-agent-a02e3f291e2858564` @ f93927663 (origin/main, motor yamalı). Tam koşu YAPILMADI; yalnız küçük kutu.
Alet: `denetim/ARAC-KUTU-SINAV-OSMANLI-BALKAN-1118.py` (motor metni kutuya çevrilir, `Ⓑ dolgu katmanı` bloğunun
BAŞINDA kesilir — `_dg_izgara/_dg_duvar/_dg_engel` tanımları kesimin içinde —, kesit gününde A gövdeleri +
`dolgu.kesit_dolgu(izgara, duvar, engel)` aynen motorun verdiği işlevlerle çağrılır). Motor DEĞİŞTİRİLMEDİ.
Kutu: lon 18–32, lat 36–46. Bayraklar: KOSU-YAYIN.md tek-harita bloğu + zorunlu koşu bayrakları
(YURUYUS=1, SAAT=40, COL_UFUK_SAAT=0, SINIR_KISIT=1, COL_GIRINTI_KAPALI=1, KOMSU_KUR_BOL, YAKA_KILIDI, KISTAK_KOPRU,
KUR_DEVIR, KUSATMA_BILESEN, TOHUM_YAKA) + `MOTOR_DOLGU_UFUK_GUN=10` (r = 201,6 km).
Kesitler: 1300-01-01, 1600-01-01, 1900-01-01 (istenen üçü) + 1913-07-01 ve 1914-06-01 (kutuda Osmanlı taraflı hatlar
yalnız 1908–1920 arasında etkin: 5 hat; 1300/1600/1900'de hiçbiri etkin DEĞİL ⇒ o üçünde duvar sınavı boştur).

⚠️ Kesit gününe özgü hızlandırma (sonuç aynı, hız için): yabancı devlet faz-1'i yalnız kesit gününde kutu+12° içinde
`s:` dönemi olan devletler (1300: 108, 1600: 60, 1900: 32) ve yalnız kesit penceresi günleri için koşar. Tam koşuda
bu daraltma YOKTUR; gövde farkı ölçülmedi (tam koşuyla bit bit kıyas yapılmadı — DOĞRULANAMADI).

## Kesit başına tablo

| ölçüm | 1300 | 1600 | 1900 | 1913-07-01 | 1914-06-01 |
|---|---|---|---|---|---|
| A gövdeli devlet | 25 | 4 | 10 | 11 | 11 |
| duvar listesi (o gün etkin hat taraflı devlet) | 0 (hat yok) | 0 (hat yok) | 55 | 72 | 75 |
| **(a) logdaki duvar aşan (`duvar_gecen_n`)** | **0** | **0** | **0** | **0** | **0** |
| **(a) bağımsız sayım (parça∩duvar > 1 km²)** | **0** | **0** | **0** | **0** | **0** |
| duvarın kestiği km² | 0 | 0 | 9,7 | 129,4 | 315,6 |
| (c) sürtünmeli paylaşım çağrısı / Voronoi'ye düşen | 168 / 0 | 0 / 0 | 11 / 0 | 34 / 0 | 32 / 0 |
| (d) devlet-içi delik doldurma (devlet-kesit / km²) | 10 / 229 | 2 / 11 | 5 / 319 | 8 / 309 | 9 / 320 |
| (d) engelli (atlanan) delik | 0 | 1 | 1 | 0 | 0 |
| sahne engeli (kabile/devletsiz nokta) | 0 | 4 | 8 | ? (ölçülmedi) | ? (ölçülmedi) |
| sessiz yutma (`YUTMA`) | 0 | 0 | 0 | 0 | 0 |
| dolgu parçası / km² | 215 / 540.912 (!) | 9 / 13.159 | 6 / 12.318 | 8 / 11.990 | 5 / 11.904 |
| dolgu↔başka devletin A'sı bindirme | 12,9 km² | 0 | 0 | 0 | 0 |
| **dolgu↔dolgu (farklı devlet) bindirme** | **8.203.247 km² (3.699 çift) (!)** | 0 | 0 | 0 | 0 |

**Duvarı aşan dolgu = 0** (5 kesitin 5'inde, hem motorun sayacı hem bağımsız sayım). Osmanlı taraflı 22 hat duvarda
(log: `DOLGU DUVARI: 453 hat (C+D+E+F) · Osmanlı taraflı 22 · elenen: iki taraflı değil/sol_taraf boş 6, sınıf kısıt değil 1`).
Duvarın GERÇEKTEN işlediği kesitler 1900 / 1913 / 1914 (kestiği alan 9,7 → 129 → 316 km²); 1913-07-01'de C hattı
(`d1913-londra-enez-midye`), 1914-06-01'de E hattı (`d1913-osm-bg-dogu`) etkindi. 1300 ve 1600'de duvar sınanamadı
(kutuda etkin hat yok) — 0 orada "kural çalıştı" değil "kural devreye girmedi" demektir.

(a) bağımsız sayımın yöntemi: her dolgu parçasının, kendi devletinin `_dg_duvar(a)` karşı yakasıyla kesişimi > 1 km².

## (b) Parçalanma (bileşen sayısı; ≥0 / ≥10 / ≥100 km², A → A+dolgu, kutu içinde)

| devlet | kesit | A (alan km²) | ≥0 | ≥10 | ≥100 |
|---|---|---|---|---|---|
| Bizans | 1300 | 201.698 | 32 → 39 | 20 → 28 | 9 → 17 |
| Osmanlı | 1300 | 24.661 | 1 → 4 | 1 → 4 | 1 → 4 |
| Sırp (Nemanjiç) | 1300 | 79.693 | 1 → 2 | 1 → 2 | 1 → 2 |
| Macar | 1300 | 133.330 | 1 → 1 | 1 → 1 | 1 → 1 |
| Bulgar çarlığı | 1300 | 107.352 | 3 → 3 | 3 → 3 | 1 → 1 |
| Osmanlı | 1600 | 751.396 | 56 → 59 | 34 → 40 | 11 → 17 |
| Erdel / Venedik / Napoli | 1600 | — | değişmedi (2/2/1) | | |
| Osmanlı | 1900 | 470.518 | 41 → 41 | 26 → 29 | 11 → 14 |
| Yunanistan | 1900 | 59.257 | 19 → 19 | 11 → 11 | 4 → 4 |
| Romanya/Sırp/Bulgar/Macar-Habsburg | 1900 | — | değişmedi | | |
| Osmanlı | 1913-07 | 267.966 | 35 → 34 | 22 → 24 | 12 → 14 |
| Bulgaristan | 1913-07 | 131.417 | 3 → 4 | 2 → 3 | 1 → 2 |
| Yunanistan | 1913-07 | 59.223 | 21 → 23 | 10 → 12 | 4 → 6 |
| Osmanlı | 1914-06 | 230.486 | 29 → 28 | 17 → 18 | 9 → 10 |
| Yunanistan | 1914-06 | 100.744 | 28 → 28 | 18 → 19 | 5 → 6 |

Bulgu: dolgu parçalanmayı AZALTMIYOR, çoğu kesitte ARTIRIYOR. Sebep: dolgu parçalarının çoğu `bosluk` cinsi ve A'ya
değmeyen (ada/kıyı/iç delik) ayrı parçalardır; bileşen sayısı onları yeni parça sayar. Osmanlı 1600'de ≥100 km²
parça 11 → 17 (+6 yeni, bağlı olmayan dolgu parçası). 1913-07'de Osmanlı ≥0 parça 35 → 34 (dolgu 1 köprüleme yaptı).
Kutu kenarı bileşenleri keser (kutu dışı bağlantılar görünmez), A kendi başına 56 parçadır (adalar, kutu kesimi).

## (c) Paylaşım yolu
Sürtünmeli çağrı: 168 / 0 / 11 / 34 / 32; **Voronoi'ye düşen: her kesitte 0** (hiç etiketli hücresiz alan kalmadı).
(Sayaçlar kesitin ilk hesaplandığı koşudan alındı; ikinci koşuda dolgu önbellekten geldiği için sayaç 0 görünür —
log notuyla uyumlu. Önbellekten gelen kesitin geometrisi aynı.)

## (d) Delik doldurma
1300: 10 devlet-kesit / 229 km² · 1600: 2 / 11 km² (engelli 1) · 1900: 5 / 319 km² (engelli 1) · 1913-07: 8 / 309 ·
1914-06: 9 / 320. Atlanan (engelli): 1600'de 1, 1900'de 1; 1300/1913/1914'te 0.
Not: 1900'de engel 8 nokta, 1600'de 4 nokta; 1913/1914 engel sayısı bu aletin ilk sürümünde basılmadı.

## (e) Kapı kuralları
`py arac/denetle.py` (aynı ağaç, kutu dosyaları geri alındıktan sonra): **çıkış kodu 2 (ÖLÇÜLEMEDİ), 1 değil.**
Ölçülemeyenler: Değişmez 8 (`devletler_harita.js` yok) ve 3b (`donemler.js` yok, `coz-c` gerekir) — taze ağaçta beklenen,
kutu sınavından bağımsız. İhlal (1) yok; `Değişmez 1/2/4/5` temiz. Tavan uyarıları (ihlal değil): 2sk 5961 > 5938,
YIL-TEMSİLÎ 441 > 436 (bu iş değiştirmedi; ağaçta zaten var).

## Bulgular / şüpheli noktalar
1. **🔴 1300'de dolgu↔dolgu bindirme (ÇOKLU TALEP hatası).** Anadolu beylikleri (Hamid, Sahibata, İnançoğulları, Germiyan,
   Karesi, Alaiye, Osmanlı…) 1300'de gövdeleri küçük ve talepleri aynı iç bölgede çakışıyor. `kesit_dolgu` çekişmeyi İKİLİ
   çiftler hâlinde bölüyor (her `kim2 > kim` çifti için `_paylas`); üç ve daha fazla devletin ortak bölgesi her çiftte tekrar
   dağıtılıyor ⇒ AYNI toprak parçası birden çok devlete ve aynı devlete defalarca yazılıyor: dolgu 215 parça, 540.912 km²
   yazılmış, oysa talep (`talep_km2`) 148.370 km². Örnek: aynı 5.820 km² poligon İnançoğulları+Sahibata'ya, 5.824 km² Hamid+Germiyan'a;
   [31.4,40.05,32.0,41.55] kutusundaki 5.747 km² parça Osmanlı'ya 5+ kez. **Bu YAMADAN ÖNCEKİ davranıştır:**
   `MOTOR_DOLGU_SURTUNME=0` (eski Voronoi) ile aynı kesit aynı kusuru veriyor (bindirme 8.189.906 km², 3.843 çift, 540.590 km²
   yazılan) — yama (sürtünmeli paylaşım) bunu ne artırıyor ne gideriyor. 1600/1900/1913/1914'te bindirme 0.
   Sonuç: görünüm katmanında çift boyama (ve veri şişmesi); `data/dolgu.js` bunu taşırsa 1281–1330 aralığında Anadolu'da
   kullanıcıya "hangisi kazanırsa" belirsizliği düşer. Çözüm önerisi: `ozel`i yalnız ikili değil N'li çekişme bölgesine göre
   (komşu birleşimi) ya da çiftlerin ortak bölgesinden önceki atamaları çıkararak sırayla böl.
2. `yazilan_km2` (rapor) bu yüzden dolgu toplamıyla uyumlu ama talebin 3,6 katı; kabul raporu "yazılan ≤ talep" gibi bir
   eşitsizlik içeriyorsa 1300'de sapar. Mevcut kabul satırları (aşan 0) bunu yakalamaz.
3. Dolgu 1300'de Bizans'a 38, Osmanlı'ya 15, Hamid'e 24 ayrı parça yazıyor (kutu içi parça sayısı şişiyor); `bosluk`
   parçalarının A'ya bağlılığı sayılmıyor — parçalanma "kapanış hizmeti" olarak değil bölünme olarak okunur.
4. 1300 ve 1600'de duvar listesi boş: yama bu çağlarda duvarı SINAMADIĞIMIZ için kabul sayacı 0 anlamsızdır. Duvar sınavı
   1900+ ve 1913/1914'te anlamlı (0 aşan, 55–75 devlette duvar aktif).
5. Bu alette `AKTIF devlet` süzgeci tam koşuyla bit bit kıyaslanmadı ⇒ 1300 Bizans gövdesi (A 201.698 km²) vb. tam koşudakiyle
   aynı olmayabilir (kutu kenarı etkisi ve süzgeç). Ölçülen şey dolgu KURALLARIDIR, harita doğruluğu değil.

## Doğrulanamayanlar
- Tam koşudaki gövde eşitliği (süzgeç/pencere daraltması) — ölçülmedi.
- Değişmez 8 / 3b — taze ağaçta ölçülemez (`coz-c`/koşu gerekir).
- 1913/1914 sahne engeli sayısı basılmadı.
- Süre: kesit başına motor ~9–17 dk (5 süreç paralel), dolgu 4–37 sn (1300: 37 sn, 1913/14: 19/23 sn).

## Temizlik
`data/bolgeler.js` ve `veri-kaynak/motor_kara.geojson` `git checkout --` ile geri alındı; koşunun yazdığı ignore'lu
`data/devletler_harita.js` ve `uretim_canli.log` silindi (not: sonraki koşular `devletler_harita.js`i eski çıktı diye
okuyup `TypeError` verir — koşular arasında silinmeli). Dalda yalnız bu rapor ve alet var. `veri-kaynak/yukseklik/*.tif`
(gitignored) kopyalandı, taşınmadı.
