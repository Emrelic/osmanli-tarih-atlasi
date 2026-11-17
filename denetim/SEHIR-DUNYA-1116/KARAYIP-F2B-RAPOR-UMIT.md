# KARAYİP F2B — Panamá (2 kayıt) + Managua (UMIT, 17 Kasım 2026)

Ağaç: `C:\atlas\.claude\worktrees\sehir-afrika-1116` (dal `sehir-afrika-kuzey-dogu-1116`). Commit/push YAPILMADI.
Çıktı: `data/sehir_tarihce_karayip_2.js` (`window.SEHIR_TARIHCE_KARAYIP_2`, `arac/sehir_tarihce.py yaz` ile).
Girdi/üretici scratchpad'de: `kur_karayip_2.py`, `karayip_2.json`.

## ① Ölçülenler
- `py -I -X utf8 arac/sehir_tarihce.py denetle data/sehir_tarihce_karayip_2.js` → **3 şehir · 7 dönem · 34 olay · ihlal 0 · uyarı 2** (çıkış 0).
  Uyarılar Casco'da hayalet: `yeni-granada-valiligi` 1810-07-20'de biter ama Panamá 1821'e dek İspanyol (ara künye yok);
  `kolombiya-cumhuriyeti` künyesi 1831-01-01, Britannica Gran Colombia sonu yalnız "1830". İkisi de ic_not'ta beyanlı.
- Koordinatlar UNESCO 1582 bileşen tablosundan (`whc.unesco.org/en/list/1582/maps/`):
  Panamá Viejo 1582rev-005 N9 0 23.97 W79 29 6.98 → 9.00666, -79.48527 · Casco 1582rev-006 N8 57 8.75 W79 32 5.07 → 8.95243, -79.53474.
  Viejo–Casco 8,12 km · liste noktası→Viejo 4,05 km, →Casco 4,87 km · atlas "Panamá (Panama City)"→Casco 3,71 km, →Viejo 4,66 km.
- atlas_ad: Viejo null; **Casco null (bilerek)** — 3 km içindeki tek atlas noktası "Balboa Heights (Panama Kanalı İdaresi)" (1,7 km, 1904)
  ayrı yerleşim, eşlenmedi, beyanlı; Managua → atlas "Managua" (0,41 km, atlas başlangıcı 1933-01-01).

| Kayıt | ilk | Zincir | Kaynak durumu |
|---|---|---|---|
| panama-viejo-pa | 1519-08-15 kurulus, gun | ispanya 1519→1671 · `__YOK__` 1671→1900 · bit 1671 | Yıl 4 kaynak (ELAHC, Britannica, MDPI Heritage 2022, Rivera-Sandoval ORE 2021); gün yalnız ELAHC |
| panama-city-casco-pa | 1673-01-21 kurulus, gun | ispanya→1751 · yeni-granada-valiligi→1821 · gran-kolombiya→1830 · kolombiya-cumhuriyeti→1900 | **Hakemli karar:** Britannica şehir maddesi 1674; ELAHC (21 Ocak 1673) + Rivera-Sandoval (1673) + Britannica ülke maddesi (1673) → 1673. Gün tek kaynak (ELAHC). El değiştirmeler tek kaynak, yalnız yıl |
| managua-ni | 1852-01-01 ilk_anilis, yil | nikaragua-cumhuriyeti 1852→1933 (atlasla aynı sahip) | Tanık: Rodgers, NLR 49 (2008) "Managua was designated Nicaragua's capital in 1852" — tek kaynak, NLR hakemli değil (beyanlı). Gerçek ilk anılış değil, okunan en erken ad+yıl cümlesi |

## ② Bulunamayanlar / zayıf
- Managua başkent yılı çelişkisi çözülmedi: 1852 (Rodgers) · 1855 (ELAHC, ad cümlede yok → belirsiz) · 1857 (Britannica, ad cümlede yok → belirsiz).
- Managua 1819 "Leal Villa" yalnız basın/ecured'de görüldü (dayanak değil); Nikaragua Coğrafya ve Tarih Akademisi RAGHN 83 (2019) PDF → okunmadı (dosya indirme yok).
- Panamá'nın Peru Genel Valiliği dönemi tarihlenmedi → 1519–1751 üst künye `ispanya` (beyanlı yaklaşıklık).
- Morgan yıkımı (1671) ve 1821 ayrılışı yalnız yıl. Drake saldırısı 1595 (Britannica) / 1596 (ELAHC) çelişkisi beyanlı.
- UNESCO 790 → 404 (2025'te 1582'ye katılmış); 1582 sayfası kuruluş yılı vermiyor, yalnız koordinat kullanıldı.

## Siteler
| Site | Sonuç |
|---|---|
| UNESCO WHC | 790 → 404 · 1582 ana sayfa (tarih yok) · 1582/maps (bileşen koordinatları) AÇILDI |
| Britannica | Panama-City, Panama (Sports-and-recreation = tarih başı, Transcontinental-railroad…), Gran-Colombia, Managua AÇILDI |
| Encyclopedia.com (ELAHC) | Panama City (Juan Manuel Pérez), Managua (David L. Jickling) AÇILDI |
| MDPI Heritage 5/2 (2022) | AÇILDI (HTML) |
| Open Research Europe (Rivera-Sandoval 2021) | AÇILDI (HTML) |
| Revista de Indias 57/210 (Mena García 1997) | özet sayfası açıldı, tam metin PDF → okunmadı |
| New Left Review 49 (Rodgers 2008) | açık önizleme gövdesi AÇILDI |
| WebSearch | yalnız aday üretimi (basın/wiki sonuçları dayanak yapılmadı) |

## ③ Öneriler (karar Emre'nin)
1. Atlas "Panamá (Panama City)" noktası (8.9824,-79.5199) iki çekirdeğin de >3 km dışında ve 1519 kuruluşunu taşıyor → Casco'ya taşınıp 1673-01-21'den başlatılsın; Panamá Viejo ayrı nokta (1519-08-15 → 1671).
2. Atlas Managua 1933-01-01 → en geç 1852'ye çekilebilir (ikinci kaynak bulunursa; RAGHN 83 okunmalı).
3. `yeni-granada-valiligi` künyesi 1810'da bitiyor — Panamá 1810–1821 için ara künye eksik.
