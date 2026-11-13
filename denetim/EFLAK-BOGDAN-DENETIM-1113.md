# EFLAK-BOGDAN DENETİMİ — 13 Kasım 2026 (UMIT oturumu)

Biçim: PAPALIK-DENETIM-1111. Ölçüm ağacı: `origin/main` (dal `umit-1113-eflak-bogdan`).
`py arac/denetle.py` **koşturulmadı → ölçülmedi.** Veri değiştirilmedi; yalnız rapor.

## 1. Envanter (ölçüldü)
- Künye: `eflak` (f 1330-01-01, t 1859-02-05, `tabi` 1462-06-01→1859-02-05) · `bogdan` (f 1359-01-01, t 1859-02-05, `tabi` 1456-06-01→1859-02-05) — `data/devletler.js` 1068, 1081.
- Yerleşim zinciri: 32 `s:` dönemi `eflak`/`bogdan` sahipli (Eflak 20, Bogdan 12; `yerlesimler.js`, `_ek29`, `_zincir64`, `_p0037`). Vassallık dönemi yerleşimlerde `s:` değil `v:` ile yazılı (Bogdan `v: 1456-06-01→…`, Eflak `v: 1462-06-01→…`); yani `s:` bitişleri künye `tabi` başlangıcıyla tutarlı.
- Kırılma maddeleri: 1456-06-01 «Boğdan'ın haraca bağlanışı», 1462-06-01 «Eflak seferi: Kazıklı Voyvoda» (`olaylar_ek2.js` 67, 69) — ikisi de **yalnız yıl** (gün `06-01` yer tutucu).

## 2. TDV karşılaştırması
| Konu | Atlas | TDV | Sonuç |
|---|---|---|---|
| Bogdan haraç başlangıcı | tabi 1456-06-01; künye özeti «1455'te haraca» | `bogdan` (Özcan, c.6): Petru Aron «1455 Eylülünden itibaren … yılda 2000 altın» | **Çelişki E1** |
| Rovine | `1395-05-17` | `eflak` (Karpat, c.10): «Rovine'deki çetin savaşta (1394)» | **Çelişki E2** |
| Eflak tâbiliği | tabi 1462-06-01; kronoloji maddesi «1417 vasal statüsü» | `eflak`: Mircea «1417'de … Osmanlı hükümranlığını kabul etti»; 1396 Niğbolu sonrası «Bayezid'in hükümranlığı» | **Tutarsızlık E3** |
| Vaslui 1475 / Akdere 1476 | 1475-01-10 / 1476-07-26 | `bogdan`: 1475, «ertesi yıl» Akdere; gün yok | yıl tutuyor, gün TDV'de yok (E4) |
| 1538 Boğdan seferi | 1538-09-14 | `bogdan`: 1538, gün yok | yıl tutuyor |
| Bukovina 1775 | 1775-05-07 | `bogdan` maddesinde yok (kaynak `hotin`) | madde başka TDV maddesine dayanıyor, sorun yok |
| 1859 birleşme | 1859-02-05 | `bogdan`: Cuza 5 Şubat 1859 Boğdan, 24 Şubat Eflak | **E5:** künye t `1859-02-05` yalnız Boğdan seçimidir; Eflak 24 Şubat |

## 3. Bulgular
- **E1 (Bogdan haraç, 1455-09 ↔ 1456-06-01):** TDV ay verir (Eylül 1455). Atlas 9 ay sonra. Öneri: `tabi.f` ve madde `1455-09-01`, `ic_not`: «TDV bogdan: 1455 Eylülünden itibaren; gün yok; 1512/1456 yok». Etki: Bogdan `v:` başlangıçları (8+ kayıt) ve Değişmez 2 (±30 gün maddesi) birlikte taşınmalı. **Emre kararı** (iki kaynaklı çift teyit henüz yok).
- **E2 (Rovine 1394 ↔ 1395-05-17):** Atlas günü TDV'ye aykırı (TDV: 1394). CLAUDE.md: TDV esastır, çelişki `ic_not`ta iki kaynakla beyan edilir. 17 Mayıs 1395 Batı literatüründe yaygın okuma (İnalcık/Fine) — bu oturumda ikinci bağımsız akademik kaynak **okunmadı**; bu yüzden tarihi değiştirmedim. **Emre kararı** (ikinci kaynak: İnalcık EI² «Mircea»; Işıksel; DergiPark).
- **E3 (Eflak tâbilik):** Kronoloji «1417 haraçgüzar» diyor, künye `tabi` 1462'den başlıyor. TDV 1417'yi destekliyor, ayrıca 1396/1402'de önce tâbi-sonra-ayrılış hareketi var. 1417–1462 arası `tabi` boşluğu ya beyan edilmeli ya `tabi` 1417'ye çekilmeli (Vlad Tepeş 1456-62 kesintisiyle). **Emre kararı.**
- **E4:** Vaslui 1475-01-10 ve Akdere 1476-07-26 günleri TDV'de yok; `ic_not` «gün eski kayıttan» diyor (var). Başka akademik kaynakla gün teyidi bu oturumda yapılmadı.
- **E5:** Künye `t` Boğdan için 1859-02-05, Eflak için aynı gün; TDV Eflak seçimini 24 Şubat verir. Eflak `t` → `1859-02-24` önerisi; birleşme maddesi tek gün olduğundan **Emre kararı.**

## 4. Ölçülmedi
- 32 `s:` diliminin tek tek ±30 gün kronoloji eşleşmesi (Değişmez 2) — betik yazılmadı.
- Yerleşim noktası eksikliği / `__BOSLUK__` taraması (Eflak'ta Olt, Oltenya, Dobruca çevresi).
- İkinci kaynak (İSAM/TTK/DergiPark) hiçbir bulguda okunmadı; yalnız TDV.

## 5. Emre'den istenen
E1, E2, E3, E5 kararları. Önerim: E1 ve E3'ü TDV'ye çek (ay/yıl hassasiyetiyle beyanlı), E2'yi ikinci kaynak bulununca değiştir.
