# KRONO-BALKAN-D-0929 — künye önerileri ve künyesiz dönem ölçümü

> M-5416 kuralı: (1) madde olayın geçtiği gün var olan polity'ye bağlanır · (2) ardıl künyeye
> geriye dönük bağlama yasak · (3) künye yoksa önerilen id ile yazılır, künyeyi koordinatör açar.
> `data/devletler.js`e DOKUNULMADI.

## ① Önerilen künyeler — maddeleri YAZILDI, künye açılınca kendiliğinden bağlanır

| önerilen id | ad | f | t | D205 sınıfı | kaynak | bağlayan madde |
|---|---|---|---|---|---|---|
| `vidin-carligi` | Vidin Çarlığı (İvan Stratsimir) | ~1356-1360 — TDV "1360'tan kısa bir süre önce", **gün yok** | 1396 (Vidin'in Osmanlı'ya geçişi; atlas 1396-10-01, kaynağı ayrıca doğrulanmalı) | ③ ardıl yapı (bulgar-carligi'nden bölünme) | TDV «Vidin» (M. Kiel, 2013) | 2 (`kronoloji_cok_bulgaristan.js` 1365, 1369) |
| `epir-despotlugu` | Epir (Yanya) Despotluğu — Tocco dönemi dâhil | 1204 sonrası (Mikael Angelos; TDV gün vermez) | 1430-10-09 (Yanya'nın teslimi; çekirdek `olaylar_ek.js`) | yeni künye (hiç yok) | TDV «Yanya» (M. Kiel, 2013) | 4 (`kronoloji_cok_yunanistan.js` 1318, 1366, 1380, 1411) |

İkisi de `denetim/KUNYE-DUNYA-0929.json` `eksik` listesinde zaten var (vidin öncelik 2, epir öncelik 1).
Maddeler bugün `bulgar-carligi` (Vidin) ve `bizans` (1318) üzerinden kısmen görünür; epir'in
1366/1380/1411 maddeleri künye açılana dek konsolda "künyesi olmayan taraf" olarak sayılır —
kaybolmaz (`app.js:13596`).

⚠️ `vidin-carligi` açılırsa `bulgar-carligi`nin ömrü/özeti ("Tırnova → Vidin") ve kendi kronolojisindeki
"1396-01-01 Vidin'in düşüşüyle Bulgar Çarlığı sona erdi" maddesi yeniden düşünülmeli (bkz. DUZELTME ③).

`aka-prensligi` (Mora'daki Latin prensliği) KUNYE-DUNYA'da önerili; bu pakette ona bağlanan madde
YAZILMADI (1395 maddesi Aka'yı yalnız anar, polity'si `mora-despotlugu`).

## ② Künyesiz dönemler — ÖLÇTÜM, künye ÖNERMİYORUM, çekirdeğe aittir

### Bulgaristan 1396-1878
Aday maddeler (TDV «Bulgaristan», Halaçoğlu 1992): 1841 Niş-Leskofça ayaklanması · 1849 Vidin
ayaklanması (iki yıl sürdü) · 1867 Eflak'tan gelen çetelerin Ziştovi ayaklanması (Midhat Paşa bastırdı,
Rusçuk ve Tırnova'da yargılama) · 1875 Rus konsoloslarının desteğiyle kurulan ihtilal cemiyetleri
(TDV «Eski Zağra»: şehir bu yüzden tahribata uğradı) · Nisan 1876 isyanı.

Ölçüm — bu olayların geçtiği gün var olan siyasi yapı:
```
1841  Niş-Leskofça   → Niş eyaleti            (Osmanlı)
1849  Vidin          → Vidin eyaleti          (Osmanlı)
1867  Ziştovi        → Tuna vilâyeti (1864-)  (Osmanlı)
1875  Eski Zağra     → Edirne vilâyeti        (Osmanlı)  ← Tuna değil
1876  Nisan isyanı   → Filibe sancağı/Edirne vilâyeti (Osmanlı)
```
⇒ Beş olay DÖRT ayrı Osmanlı idari biriminde. Tek bir "Osmanlı Tuna/Rumeli" künyesi bunları
toplamaz: `tuna-vilayeti` (1864-1878) açılsa yalnız 1867'yi (ve kronoloji_balkan'daki 1864 +
1873 Levski'yi) alır, 1875-76'yı ALMAZ. `sirbistan-eyaleti` emsali burada tutmuyor çünkü ortada
tek bir eyalet yok. ⇒ **Önerim: bunlar Osmanlı'nın iç olaylarıdır, çekirdeğe (`olaylar*.js`)
aittir** (ORTAK §5.2). Çekirdekte bugün OLMAYANLAR: 1841 · 1849 · 1867 · 1875 · 1876 Nisan
isyanının kendisi (çekirdekte yalnız 1876-12-23 Tersane Konferansı var; Nisan isyanı
yalnız kronoloji_balkan'da). Yazmadım.

### Yunanistan 1821 öncesi
Adaylar (TDV «Yunanistan», Hacısalihoğlu 2013): 1798 Rigas Velestinlis'in Belgrad'da idamı ·
1814 Filikî Eterya'nın Odesa'da kuruluşu.
```
1798  Belgrad  → Osmanlı (Belgrad/Semendire)  — Osmanlı'nın yargı işlemi
1814  Odesa    → Rusya İmparatorluğu toprağı; örgüt bir polity DEĞİL
```
⇒ İkisinin de gününde bir Yunan polity'si yok ve `yunanistan`a (1821-) bağlamak kural (2)'yi
çiğner. 1798 çekirdeğe, 1814 bir KONU maddesidir (CLAUDE.md §1.6: 8. boyut sıralı; açmak
Emre'nin kararı). **Yazmadım.**

## ③ Mevcut künyelerde gördüğüm pencere/ad sorunları (hüküm sende)

| künye | gözlem | sınıf |
|---|---|---|
| `yunanistan` "Yunanistan Krallığı" f:1821-03-25 | Krallık 1832'de kuruldu (Otto); 1821-1832 geçici hükümet/Kapodistrias dönemi. Pencere doğru (aynı polity sürüyor), ADI dar. | ad — pencere değil |
| `girit-devleti` f:1898-12-22 | Kendi kronolojisindeki kuruluş maddesi **1898-12-09**, özeti 22 Aralık diyor; TDV «Girit»: muhtariyet 18 Aralık 1897, Prens George'un ataması 19 Kasım 1898'de bildirildi, göreve 22 Aralık 1898'de başladı. 12-09 hiçbir kaynakta yok. | künye maddesi (DUZELTME ④) |
| `bulgar-carligi` t:1396-01-01 | Kendi "son" maddesi 1396-01-01 (yıl-temsilî) ama aynı künyede 1396-09-25 Niğbolu maddesi var → "son"dan SONRA bir madde. Atlas geri kalanı Vidin'in düşüşünü 1396-10-01 veriyor. | D205 ② genişlet adayı (t → Vidin'in düşüş günü) |
