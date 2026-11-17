# DOĞU BORÇ 2 — F2 tarihçe raporu (UMIT, 17 Kasım 2026)

Dosya: `data/sehir_tarihce_dogu_borc_2.js` (`window.SEHIR_TARIHCE_DOGU_BORC_2`, `arac/sehir_tarihce.py yaz`).
Ölçüm: worktree `sehir-afrika-1116`, `py -I -X utf8 arac/sehir_tarihce.py denetle` → **14 şehir · 36 sahiplik dönemi ·
144 olay · ihlal 0 · uyarı 11**. Commit/push yapılmadı. Üretici girdi: scratchpad `uret_borc2.py` → JSON → `yaz`.

## ① Ne ölçtüm

**İki yönlü `tarihce_var`:** BORC'un üç bloktaki eklenen-boş 146 satırı, yerel `data/sehir_tarihce_*.js` (36) + origin/main
`sehir_tarihce_*` (git show) ile ad / atlas_ad / adlar[] / ≤10 km taranadı. Yazılan 14 adayın hiçbiri başka dosyada yok.
Yakın ama ayrı: Khankendi–Şuşa 6,9 km, Gelati–Kutaisi 6,3 km, Gonio–Batumi 9,9 km (yazılmadı, YAZILAMADI'da).

**Yazılan 14 kayıt** (olay sayısı · ilk):
Rey 20 · 642 | Buşehr 9 · 1734-07-16 | Bâmiyan 7 · V. yy | Kısmâyû 4 · 1872 kuruluş | Nihâvend 14 · 20/641 |
Dizfûl 3 · XII. yy | Ahıska 8 · 1068 | Kuba 11 · XVI. yy | Alamut 11 · 246/860 | Abadan 4 · VIII-IX. yy kuruluş |
Sohum 23 · MÖ 120-63 | İstahr 14 · MÖ 331 | Cündişâpûr 11 · 241-273 kuruluş | Celâlâbâd 5 · 1570 kuruluş.

- Kaynak: TDV tam gövde 11 kayıt (REY, NİHÂVEND, DİZFÛL, AHISKA, KUBA, ALAMUT, ABADAN, SOHUM, İSTAHR, CÜNDİŞÂPÛR,
  CELÂLÂBÂD); Iranica 2 (BŪŠEHR i, BĀMĪĀN ii); Britannica 2 (Rayy, Kismaayo); UNESCO WHC 208 (Bâmiyan ark + 2001).
  **Tek kaynak: 12/14. İki kaynak: Rey (TDV + Britannica; 1220 Moğol yıkımı yıl düzeyinde çift teyit), Bâmiyan
  (Iranica + UNESCO, farklı olgular — ilk tek kaynak).** Ahıska 1829-09-14 günü TDV EDİRNE ANTLAŞMASI özetinden.
- Hicrî: ≈45 tarih tablo takvimiyle (1582 öncesi Jülyen, sonrası Gregoryen) hicrî aralık ∩ kaynağın mîlâdî yılı →
  kesişimin ilk günü, her biri `ic_not`ta. Türetilmiş 2 gün beyanlı (İstahr 887 "altı yıl sonra", Cündişâpûr 877).
- **Zayıf tanık: 5** (özne zamir / madde konusu): Bâmiyan ('it' = ad), Kısmâyû ('the town'), Alamut ('kale'), Sohum
  ('buraya … şehir'), İstahr ('Şehir'). `ilk.kesinlik: belirsiz` 4: Rey (fetih Nihâvend'den "iki ay sonra"), Sohum
  (saltanat aralığı), İstahr ("331'den sonra gelişti"), Cündişâpûr (saltanat aralığı).
- Zincirler: 36 dönemin 16'sı `__BOSLUK__`, 3'ü `__YOK__` (Rey 1224-1447, Sohum 542-565, Cündişâpûr 1201-1900),
  2'si `__BILINMIYOR__` (Rey 1447-1900, İstahr 1286-1900); hepsi beyanlı. 4 dikiş `dikis_beyan` (Nihâvend, Dizfûl,
  Abadan → ilhanli 1281; Sohum → gurcistan 1281). Yer tutucu olay yok.
- Uyarılar (11): 4 dikiş borcu · 5 "atlas başlangıcı düzeltilmeli" (Ahıska, Bâmiyan eşit gün; Buşehr, Kısmâyû,
  Kuba sonra) · 2 hayalet (İstahr sasani 224-01-01 < künye 224-04-28; Nihâvend abbasi 749-01-01 < künye 749-11-28),
  ikisi de `ic_not`ta beyanlı.

**Açılan siteler:** islamansiklopedisi.org.tr — REY, SOMALİ, NİHÂVEND, DİZFÛL, AHISKA, KUBA, ALAMUT, ABADAN, SOHUM,
İSTAHR, CÜNDİŞÂPÛR, CELÂLÂBÂD + ≈30 arama sayfası (≥6 sn aralıkla; 429 gelmedi) · iranicaonline.org — BŪŠEHR i,
BĀMĪĀN (başlık, i, ii), GANJA, BORUJERD ii; 404: ray-ii, ray/ (başka maddeye), abd-al-azim-hasani, borujerd-01-history ·
britannica.com — Rayy, Kismaayo, Adwa · whc.unesco.org/en/list/208 · geonames.org (2 arama) · pleiades.stoa.org (bot
koruması, geçilmedi). İndirme yok.

## ② Ne bulamadım

Ayrıntı `YAZILAMADI-DOGU-BORC-2.md`. Özet: **Eski Gence** koordinatı yine okunamadı (Iranica/GeoNames'te yok, Pleiades
korumalı); **Adwa** yalnız 1896 (yanıltıcı ilk olur); Burûcird, Sâve, Kâzerûn, Merend, Selmâs, Culfa, Lenkeran,
Kunduz, Gümrü, Meymene, Hürmüz, Sîrâf, Cîruft… TDV'de şehir maddesi yok; Iranica'nın RAY maddesi çevrimiçi bulunamadı,
bu yüzden Rey 1447-1900 `__BILINMIYOR__`.

## ③ Ne istiyorum — atlas düzeltme önerileri

1. **Kısmâyû:** atlas 1281 `__BOSLUK__` → şehir 1872'de Zengibar sultanınca kuruldu (Britannica); 1281-1872 delik
   yerine nokta yok olmalı.
2. **Kuba:** atlas 1281 `ilhanli` → kaynaklı ilk tanık XVI. yy (Osmanlı Derbend eyaleti sancağı, TDV KUBA).
3. **Buşehr:** atlas 1734-01-01 → 1734-07-16 (Gombroon Diary, Iranica); sahip `safevi` tutarlı.
4. **Ahıska:** atlas 1068-01-01 `__BOSLUK__` → aynı gün Alparslan fethi (TDV) → `buyuk-selcuklu`.
5. **Rey, İstahr:** atlas noktaları `s:` dönemsiz; tarihçe zinciri hazır (Rey 642-1224 + yok/bilinmiyor; İstahr MÖ 331-1286).
6. **Cündişâpûr, Celâlâbâd:** atlasta nokta yok (Cündişâpûr 273-1201 kaynaklı, sonra terk; Celâlâbâd 1570 Bâbürlü).
7. **Nihâvend, Dizfûl, Abadan (ilhanli 1281), Sohum (gurcistan 1281):** atlasın başlangıç iddiası kaynaksız (dikiş borcu).
8. **BORC eşleştirmesi:** atlas noktası olup `s:` dönemsiz kayıtlar (Rey, Istahr, Dvin, Bagram, Yahudiyye/Maymana)
   `atlas_ad` olarak kullanılamıyor; listede işaretlenmeli.
