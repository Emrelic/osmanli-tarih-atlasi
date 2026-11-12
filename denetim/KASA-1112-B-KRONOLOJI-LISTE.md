# KASA-1112 görev B — kronoloji işleri: yapılanlar ve listelenenler

UMIT, hafif kip (denetle.py koşturulmadı). Yalnız `data/kronoloji_sinir_halef_1923_2000.js` ve
`data/olaylar_fransa_kontrol_1027.js` değişti. Kurallar: `denetim/KASA-1112-KARARLAR.md` (karar 4-6).

## Yapılanlar
**Rusya 1945-bugün** (`kronoloji_sinir_halef_1923_2000.js`):
- Yeni: 1954-02-19 Kırım devri (BRE «Крым» + CIUS 'Crimea'; Sivastopol iki taraflı `ic_not`, taraf tutulmadı) ·
  1990-06-12 RSFSR Egemenlik Bildirisi · 1991-12-21 Alma-Ata Bildirisi (prlib.ru 619829).
- 1991-12-25: yalnız Gorbaçov istifası + RSFSR'nin adının değişmesi (Закон № 2094-I); Viipuri/Petsamo cümlesi 12-26'ya.
- 1991-12-26 RF: 142-N Bildirisi metni ve kaynağı; Viipuri ve Petsamo (haritadaki kırılma günü).
- 1991-12-26 Belarus ve Ukrayna maddeleri **silindi** (haritada o gün kırılma yok; Brest-Litovsk/Grodno 1991-08-25,
  Lvov/Kovel/Kırım 1991-08-24 — ölçüldü). Yer adları 08-24/08-25 maddelerinin metnine taşındı.

**Fransa** (`olaylar_fransa_kontrol_1027.js`, 7 madde, iki bağımsız kaynakla teyitli günler):
Troyes 1420-05-21 (Troyes, Reims) · Arras 1435-09-21 (Amiens, Mâcon) · Pireneler 1659-11-07 (Perpignan, Arras) ·
Basel 1795-07-22 (Santo Domingo).

**Almanya:** raporun tek uygulanabilir madde bulgusu (1940-08-02 Alsace-Lorraine fiilî ilhakı) zaten
`olaylar_fransa_kontrol_1027.js`te vardı — iş yok. **Avusturya:** `AVUSTURYA-DENETIM-1111.md` depoda yok — bakılamadı.

## Listelenenler (yerleşim/künye değişikliği ya da teyit gerekiyor — bu işte YAPILMADI)
| # | Konu | Neden yapılmadı | Ne gerekiyor |
|---|---|---|---|
| L1 | Santo Domingo, Higüey, Santiago 1795-07-22 → fransa-cumhuriyet | Karar 4: kırılma = fiilî devir. Fiilî Fransız idaresi 1801 (Toussaint) | Yerleşim kırılması 1801 fiilî güne; Basel maddesi kalır |
| L2 | Troyes 1429-07-10 (atlas) | Kaynaklar 9 Temmuz 1429 diyor (tek akademik-dışı kaynak) | İkinci akademik kaynak, sonra kırılma + madde birlikte |
| L3 | Rouen 1449-10-29, Caen 1450-06-24 | Kaynaklar Kasım 1449 / 1 Temmuz 1450 (zayıf) | Teyit, sonra kırılma + madde |
| L4 | Cherbourg 1450-08-12, Bayonne 1451-08-20, Reims 1429-07-16 | Günler doğru görünüyor ama yalnız akademik-dışı kaynak | Akademik kaynak bulununca madde |
| L5 | Caen 1417-09-04 (şehir; kale 19-20 Eylül), Cherbourg 1418-09-29, La Rochelle 1372-09-08 (7 Eylül?) | Gün teyit edilemedi | Fransız kaynağı (Persée/BnF) |
| L6 | Metz 1552-04-18, Pau 1620-10-19 (ferman 19 / tescil 20 Ekim) | Teyit edilemedi | Zeller 1926; Navarre Egemen Konseyi kaydı |
| L7 | Santo Domingo 1809-07-09 | Kaynaklar 7 / 9 / 11 Temmuz | Academia Dominicana de la Historia |
| L8 | Monako/Menton 1793-01-03, Arras 1477/1493, Auxerre 1435-01-01, New Orleans 1763, İlirya 1813-01-01, Freiburg 1677, Cayenne 1817, Elba 1802, Verdun 1792-10-01 | Gün yanlış ⇒ kırılma ve madde birlikte taşınmalı (yerleşim değişikliği) | FRANSA-DENETIM-1111 §4 |
| L9 | Rusya K1-K3 (`devletler.js` sovyet-rusya `tur:"son"` 12-25 → 12-26, ozet, bayat not) | devletler.js yasak | Künye işi |
| L10 | Almanya C2 Heligoland 1890 | Nokta yok | Yerleşim + madde |
