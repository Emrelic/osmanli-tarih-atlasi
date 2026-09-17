# KOŞU 13 OTOBÜSÜ — yeniden başlatmaya binecek işler · 17 Eylül 2026 16:35

Emre: *"Koşu 13 için yapabildiğimiz kadar fazla materyali ekleyelim, hızlıca."*
🔴 **SON BİNİŞ: 17 Eylül 19:30.** Bu saate kadar tahtaya TESLİM yazmayan iş koşu 14'e kalır.
Koşu 13 ayrı worktree'de yeniden başlayacak: `MOTOR_YURUYUS=1 MOTOR_YURUYUS_16=1`.
Kurallar: CLAUDE.md §3 (değişmezler), §4 (kaynak; atlas referans değil; tarih uydurma yok), §7 (yalnız kendi dosyan, add+commit'te ADIYLA).
🔴 Mevcut yerleşim dosyalarına YALNIZ KOSU13-YAMA yazar. Yeni nokta = YENİ dosya.

| Oturum | İş | Dosya |
|---|---|---|
| KOSU13-YAMA (Opus) | 0052B/C/D → KOSU10-KALAN (72) → 0064 BALKAN/KARADENİZ. RENK önerilerini listele | mevcut yerleşim / yer_yama dosyaları |
| MOTOR-YURUYUS (Opus) | ① epok devri (b): ölen tohumun hücrelerini canlı komşudan kısıtlı Dijkstra ile dağıt ② puan kapısı EKLEYİCİ tarafını saate çevir (`denetim/TASLAK-PUAN-KAPISI-YURUYUS-0917.md`). İkisi de `MOTOR_YURUYUS=1` altında; kutu sınavı (bayrak kapalı = bit bit aynı). Yetişmeyen parça binmez | `arac/uret_petek.py` (ana klasör — koşu ayrı worktree'de) |
| NOKTA-AMERIKA (KOSU10-KALAN, Opus) | `denetim/NOKTASIZLIK-ADAY-0917.json` Amerika adayları (Bolivya altiplanosu, Chaco, Llanos, Aşağı Amazon…). 🔴 ÖNCE SOR: o dönemde orada DEVLET var mıydı? Yoksa boşluk DOĞRUDUR, nokta EKLENMEZ. Varsa kaynaklı yerleşim (kur/s dönemleri devlet künyesi penceresinde) | `data/yerlesimler_nokta_amerika_0917.js` → `window.YERLESIMLER_NOKTA_AMERIKA_0917` |
| NOKTA-ASYA (D5-ASYA, Opus) | Asya adayları (Kumul-Turfan, Amur, Vitim-Lena, Dekken kuzeyi, Güney Çin/Guilin-Şaoguan…) — aynı kural | `data/yerlesimler_nokta_asya_0917.js` → `window.YERLESIMLER_NOKTA_ASYA_0917` |
| NOKTA-ARABISTAN (D4-ORTADOGU, Opus) | Asir-Yemen, Has-Kandehar, Arabistan/İran adayları + K5 Kotur: Hoy'un Osmanlı dönemi için kaynak ara (bulursan KOSU13-YAMA'ya tahtadan) | `data/yerlesimler_nokta_ortadogu_0917.js` → `window.YERLESIMLER_NOKTA_ORTADOGU_0917` |
| GECIT-DUNYA (D2-KOMSU, Opus) | Geçit noktası Amerika 0 · Okyanusya 0 · Asya 3 · Sahra altı 1. Büyük nehirlerde (Mississippi, Amazon, Paraná, İndus, Ganj, Yangtze, Sarı Irmak, Mekong, Nijer, Kongo, Zambezi, Amur, Ob, Yenisey, Lena, Murray) kaynaklı tarihî geçit/köprü/feribot noktaları. Şema `data/gecitler.js` başlığı | `data/gecitler.js` (tek yazar sensin; motor okuyor) |

## EK KADRO — 16:55 (Emre: "19:30'a kadar ne kadar çok iş yaparsak o kadar iyi")
Noktasızlık adayları bölge dağılımı (212 küme): Amerika 88 · Sibirya-Orta Asya 68 · Afrika 27 · Okyanusya 12 · Asya 10 · Ortadoğu-İran 5 · Avrupa 2.

| Oturum | İş | Dosya |
|---|---|---|
| KOSU13-YAMA | 🔁 SIRA DEĞİŞTİ: önce KOSU10-KALAN (hazır, sınanmış) → 0064 → en son 0052 (tarama istiyor). 19:30'da nerede kaldıysa orada dur, teslim yaz | — |
| NOKTA-SIBIRYA (D1-TURKIYE, Opus) | Sibirya-Orta Asya adayları (68) — aynı kural | `data/yerlesimler_nokta_sibirya_0917.js` → `window.YERLESIMLER_NOKTA_SIBIRYA_0917` |
| NOKTA-AFRIKA (D3-AVRUPA-ORTA, Opus) | Afrika adayları (27) | `data/yerlesimler_nokta_afrika_0917.js` → `window.YERLESIMLER_NOKTA_AFRIKA_0917` |
| KUR-DENETIM (D3-AVRUPA-BATI, Opus) | Amerika, Sibirya, Okyanusya, Güney Afrika'da 1281 SONRASI kurulan (sömürge/kale) ama `kur:` alanı OLMAYAN yerleşimleri ölç; kaynaklı kuruluş günü → yama (mevcut dosyaya yazma). + Okyanusya adayları (12) | `denetim/YAMA-KUR-0917.json` (dosya · ad · kur · kaynak) — 1.MURAT uygular |
| RENK-ONERI (Sonnet 1010, eski KOSU10-DOGRULA) | Renk çakışmaları: indor↔maratha · bharatpur-cat↔gvalyar · `polonya-erken` rengi YOK (9 nokta) · `ispanya` altlıkla karışıyor · 0052 RENK 34 kalemi (KOSU13-YAMA listeler) · yeni nokta dosyalarının rengi olmayan kimlikleri. `py arac/renk_olc.py` ile öner, `arac/renkler.py`e YAZMA | `denetim/YAMA-RENK-0917.json` — 1.MURAT uygular |
| KUNYE-TARAF (Opus 1009) | 09:57'den beri ses yok — teslim et: Suriye Arap Krallığı (haritada Şam/Halep 1918-20 için gerekli) + öteki künyeler | `denetim/YAMA-KUNYE-TARAF-0917.json` |
| EKO-TEMIZ (Sonnet 1007) | Kendi yamanı (13 kalem) ek okuma dosyalarına İNDİR, node --check; commit etme, tahtaya yaz | `data/ekokuma_*.js` |
| KRONO3-A (EKO-TAMAMLA, Sonnet 1006) | 1-2 maddeli künyeler: Arabistan (10) + Balkanlar (7) — kuruluş · toprak değişimi · son, kaynaklı | `denetim/YAMA-KRONO3-A-0917.json` |
| KRONO3-B (D-KUNYE, Sonnet) | 1-2 maddeli künyeler: Batı Afrika (10) + Güney Amerika (7) | `denetim/YAMA-KRONO3-B-0917.json` |

**Nokta dosyaları şeması:** `data/yerlesimler.js` ile AYNI (ad, tur, lat, lon, g, k, kur, s/d/v dönemleri, kaynak). Devlet kimliği `devletler.js`'ten TARANIR ve `arac/renkler.py`'de boyası olmalı (yoksa listele). 3 km'den yakın mevcut nokta varsa YAZMA (D002). `girdi.py`ye kaydı 1.MURAT yapar.
**Teslim:** `py arac/tahta.py yaz --kim <AD> --kime 1.MURAT --mesaj "TESLIM ..."` — sayıyla, dosya adıyla, `node --check` sonucuyla. `py arac/denetle.py` koşturabiliyorsan sonucunu yaz.
