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

**Nokta dosyaları şeması:** `data/yerlesimler.js` ile AYNI (ad, tur, lat, lon, g, k, kur, s/d/v dönemleri, kaynak). Devlet kimliği `devletler.js`'ten TARANIR ve `arac/renkler.py`'de boyası olmalı (yoksa listele). 3 km'den yakın mevcut nokta varsa YAZMA (D002). `girdi.py`ye kaydı 1.MURAT yapar.
**Teslim:** `py arac/tahta.py yaz --kim <AD> --kime 1.MURAT --mesaj "TESLIM ..."` — sayıyla, dosya adıyla, `node --check` sonucuyla. `py arac/denetle.py` koşturabiliyorsan sonucunu yaz.
