# F3 ÖRTÜŞTÜRME ÖLÇÜMÜ — şehir tarihçesi ↔ devlet kronolojisi (LAB, 16 Kasım 2026)

Betik: `f3_ortustur.js` (salt okur; node; ~1 dk, bellek ölçüsü küçük). Hiçbir veri değişmedi.
Girdi: 37 şehir tarihçesi dosyası (ağaç 32 + 5 `origin/sehir-*-1116` dalının origin/main'e göre yeni dosyaları) = 1 117 şehir, 7 188 olay;
devlet tarafı 18 652 kronoloji maddesi (olaylar*, kronoloji*, kronoloji_sinir*). Çıktılar: `f3_olay.tsv`, `f3_sahip.tsv`, `f3_ters.tsv`, `f3_celiski.tsv`, `OZET.tsv`.

## Eşleşme kuralı (ve sınırı)
Şehir adı (ad, atlas_ad, adlar[] normalize, parantez atılır) ↔ kronolojide `yer_id`/`yer`/`odak_yer` alanı. Tarih ±30 gün. **Kronolojide şehir adı alanı yoksa madde bulunamaz**
(örn. Bloemfontein 1846-03-26 olayı için kronolojide `yer_id: Bloemfontein` maddesi yok ⇒ YOK; bu "çelişki" değil "madde yok / ad alanı eksik" demektir). Başlık içi şehir adı aranmadı.
Ad çakışması (aynı ad, başka yer) ayrıştırılmadı: ters yön sayıları bu yüzden şişik olabilir. `çelişki adayı` = aynı şehir, başlıkta ≥2 ortak anlamlı sözcük, tarihler 1 gün–5 yıl farklı: **aday**, çelişki kararı değil.

## TOPLAM (1 117 şehir)
| ölçü | sayı | oran |
|---|---|---|
| şehir olayı | 7 188 | |
| ① EŞLEŞTİ (±30 gün, aynı şehir) | 1 459 | %20 |
| ① ZAMAN_FARKI (31–400 gün, aynı şehir) | 553 | %8 |
| ① YOK (kronolojide şehir+tarih yok) | 5 176 | %72 |
| ② sahip[] değişimi (son dönem hariç) | 3 848 | |
| ② YER (şehir anılan madde ±30 gün) | 897 | %23 |
| ② TARAF (yalnız taraf anılan madde ±30 gün) | 1 488 | %39 |
| ② YOK (Değişmez 2'nin şehir eşi AÇIK) | 1 463 | %38 |
| ③ ters: kronolojide şehir anılan madde | 16 832 | |
| ③ ters: şehir tarihçesinde ±30 gün olay YOK | 15 043 | %89 |
| ④ çelişki adayı | 469 | |
| kronolojide hiç anılmayan şehir | 192 | %17 |

## Yeni LAB dosyaları (Afrika/Hint/Orta Asya)
| dosya | şehir | olay | EŞLEŞTİ | ZAMAN_FARKI | YOK | eşleşme % | çelişki adayı |
|---|---|---|---|---|---|---|---|
| sehir_tarihce_afrika_gb.js | 11 | 40 | 13 | 5 | 22 | 33 | 0 |
| sehir_tarihce_hint.js | 28 | 107 | 25 | 13 | 69 | 23 | 17 |
| sehir_tarihce_orta_asya.js | 34 | 157 | 56 | 23 | 78 | 36 | 22 |

## Bulgular
1. **Kronoloji ↔ şehir tarihçesi uç uca DEĞİL**: olayların yalnız %20'si ±30 günde aynı şehirli kronoloji maddesine denk geliyor; %72'si kronolojide hiç yok. Ters yönde kronoloji maddelerinin %89'u şehir tarihçesinde yok (şehir tarihçeleri kronoloji maddelerinin küçük bir kısmını taşıyor).
2. Şehir sahiplik değişimlerinin %38'i (1 463) ±30 günde ne şehir ne taraf adıyla kronolojide yok; %39'u yalnız TARAF düzeyinde kapanıyor (Değişmez 2sk'nin "yalnız taraf" borcuna benzer).
3. 192 şehir kronolojide hiç anılmıyor (`yer_id` ile): en çok k3 (37) ve osm (37), kuzey_avrupa_1 (19/19), arkeoloji d2/d3 dosyaları.
4. **3. ve 4. kaynağa gidilecek çelişki adayları**: `f3_celiski.tsv` 469 satır (osm 193, k12 112, k3 47, k3_g1 31, orta_asya 22, afrika_magrip 24, hint 17); önce `fark_gun` ≤ 400 ve ortak sözcük ≥ 3 olanlar.
5. **Düzeltme yönü**: YOK'ların büyük kısmı "kronolojide şehir adı alanı yok" (`yer_id` boş) — kronoloji maddelerine `yer_id` eklemek (ya da şehir olayına `kronoloji_ref`) eşleşmeyi en ucuz şekilde artırır; bu veri işi KASA'nın.

## Çalıştırma
node denetim/SEHIR-DUNYA-1116/F3/f3_ortustur.js [çıktı_dizini]
Dal listesi `git branch -r` ile `origin/sehir-*-1116` desenindedir; önce `git fetch origin`.
