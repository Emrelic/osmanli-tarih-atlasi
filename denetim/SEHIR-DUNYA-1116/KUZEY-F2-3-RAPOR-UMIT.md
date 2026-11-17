# KUZEY F2-3 — rapor (UMIT, 17 Kasım 2026)

Dosya: `data/sehir_tarihce_kuzey_avrupa_3.js` (`window.SEHIR_TARIHCE_KUZEY_AVRUPA_3`, `arac/sehir_tarihce.py yaz` ile).
Denetle: `py -I -X utf8 arac/sehir_tarihce.py denetle data/sehir_tarihce_kuzey_avrupa_3.js` → çıkış **0**, **ihlal 0**, uyarı 15
(8 hayalet: norvec-1814 / norvec-isvec-birligi 1814 künye günleri, arendal-no emsali; 1 hayalet: roskilde danimarka 936<950;
6 'atlas başlangıcı düzeltilmeli'). Commit/push YOK. Ağaç: UMIT, worktree sehir-afrika-1116.

## ① Ölçülen
- Evren: 103 BORC satırı (BK 49, İrlanda 14, Finlandiya 12, Norveç 10, İsveç 7, Danimarka 4, İzlanda 3, Faroe 2, Grönland 1, Svalbard 1).
- tarihce_var iki yönlü (yerel + origin/main, 99 dosya, ad + ≤10 km): 22 adayda 0 eşleşme.
- **Yazılan: 15 şehir · 23 sahiplik dönemi · 98 olay.**
  - Zincirli (atlasta nokta yok, zincir 1900'e): Lund, Roskilde, Porvoo, Fredrikstad, Ålesund, Halden, Skara, Strängnäs, Kristiansund (9).
  - Zincir boş (atlas noktası 1281'de başlıyor, şehir sonra; atlas başlangıcı düzeltilmeli): Tampere 1779, Norrköping 1283,
    Pori 1558, Lappeenranta 1649, Røros 1644, Jyväskylä 1801 (6).
- `ilk` yılları: Roskilde 936 (geç kopya) · Skara 1059 (onyıl) · Lund 1085 · Strängnäs 1129 (onyıl) · Norrköping 1283 ·
  Porvoo 1327 (socken, belirsiz) · Kristiansund 1520 · Pori 1558 · Fredrikstad 1567-09-12 (gün) · Halden 1580 ·
  Røros 1644 · Lappeenranta 1649 · Tampere 1779 · Ålesund 1793 · Jyväskylä 1801.
- **Yeni akademik dikiş kaynağı**: SBL 'Gustav I' (I. Svalenius, bd 17, s. 433): 'på riksdagen i Strängnäs 6 juni 1523 valdes till sv konung'
  → İsveç zincirlerinde 1523-06-06 künye geçişi artık GÜNÜYLE kaynaklı (yıl başı yaklaşıklığı gerekmedi; önceki partilerdeki
  1523-01-01 beyanlı sınırlar bununla 1523-06-06'ya çekilebilir — öneri).
- Takvim: Lund/Roskilde 1658 Roskilde Barışı 26.2 (Jülyen) → 1658-03-08; Lund Muharebesi 4.12.1676 → 12-14; Lund Barışı 26.9.1679 → 10-06;
  Villmanstrand 23.8.1741 → 09-03 (Gregoryen'e çevrildi, ic_not'ta iki gün).

## Tek / çift kaynak (ilk)
- ÇİFT (yıl, iki bağımsız eser; ikisi akademik değil): Tampere, Fredrikstad (gün tek), Halden, Pori, Lappeenranta, Røros (snl + UNESCO) = **6**
- KISMİ: Strängnäs (RAÄ 1120'ler + lex/snl yüzyıl), Lund (lex + Lund kommun portalı, cümlede ad yok) = **2**
- TEK: Roskilde (Trap), Norrköping (lex), Porvoo (Uppslagsverket), Ålesund (snl), Skara (lex; SBL adı teyit, yıl yok), Kristiansund (snl), Jyväskylä 1801 (Uppslagsverket) = **7**
- İki AKADEMİK kaynakla teyit: **0**.

## Zayıf tanık
- Zamir özne (ad cümlede yok, madde konusu): Tampere ('Staden'), Lappeenranta ('Byen') = **2**
- Diğer zayıf: Roskilde (geç kopya), Porvoo (socken anılışı → kesinlik belirsiz), Skara (statü cümlesi, onyıl), Røros 1718 olayı (tiyatro cümlesi) = 4 not.

## ② Bulunamayan / yazılmayan
- 88 BORC satırı denenmedi (63'ü BK/İrlanda: künye zinciri ayrı parti) — `YAZILAMADI-KUZEY-3.md`.
- Okunmadı: SDHK 12626 (CAPTCHA), Fritz 'Gåvobrevet 1085', Helmfrid 1283 (yalnız arama özeti), Odense müzesi PDF'i (indirme yasağı).

## Siteler
Açıldı/okundu: lex.dk 12 (+2 404: Skånes_historie, Roskilde_-_by), trap.lex.dk 1 (+1 404), snl.no 13, uppslagsverket.fi 5 (+arama; analitik çerezine
cevap verilmedi), sok.riksarkivet.se/sbl 2 (Olof skötkonung, Gustav I), bebyggelseregistret.raa.se 2, whc.unesco.org 1, kulturportallund.se 1.
Vikipedi kullanılmadı. Britannica açılmadı.

## ③ Atlas önerileri
1. Atlas başlangıcını düzelt: Tampere→1779, Norrköping→1283, Pori→1558, Lappeenranta→1649, Røros→1644, Jyväskylä→1801.
2. Yeni nokta adayları (atlasta yok): Lund, Roskilde, Porvoo, Fredrikstad, Ålesund, Halden, Skara, Strängnäs, Kristiansund.
3. Ayrı kayıt: Ulvsby (Pori öncülü, 1365, snl), Sarpsborg (Fredrikstad'ın 1567 öncesi yeri).
4. Künye/olay kararları: Skåne 1332-1360; Trondheim len 1658-1660 (Nordmøre kapsamı); Villmanstrand 1710-1721 Rus işgali.
5. İsveç zincirlerinde 1523-01-01 → 1523-06-06 (SBL Gustav I).
