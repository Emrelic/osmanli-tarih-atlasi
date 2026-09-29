# KRONO-BALKAN-D-0929 — şartname (Doğu Balkanlar)

> 🔴 ÖNCE OKU: `CLAUDE.md` + [`oturumlar/KRONO-DUNYA-0929-ORTAK.md`](KRONO-DUNYA-0929-ORTAK.md)
> Dalga 1 · model Opus

## Kapsam — iki ülke, ikisinin de kronolojisi HİÇ YOK

| Ülke | Bugün | Ölçüm (29 Eylül 2026) |
|---|---|---|
| **Yunanistan** | 🔴 dosya YOK | metinlerde 289 anılma · künyede 6 eşleşme |
| **Bulgaristan** | 🔴 dosya YOK | 312 anılma · 15 künye eşleşmesi |

Bu ikisi Osmanlı'nın **en uzun tâbi, en erken kopan** iki coğrafyası — 312 ve 289
anılmaya karşılık kendi kronolojisi olmayan en büyük boşluk.

## 🔴 Dosya sahipliği — BUNLARIN DIŞINA YAZMA

| Dosya | Global adı | Durum |
|---|---|---|
| `data/kronoloji_yunanistan.js` | `window.KRONOLOJI_YUNANISTAN` | YENİ |
| `data/kronoloji_bulgaristan.js` | `window.KRONOLOJI_BULGARISTAN` | YENİ |
| `denetim/KRONO-BALKAN-D-0929.md` | — | raporun |
| `denetim/KRONO-BALKAN-D-0929-YERLESIM-ONERI.md` | — | `s:` önerileri |
| `denetim/KRONO-BALKAN-D-0929-DUZELTME.md` | — | mevcut maddelerdeki kusurlar |

## 🔴 MÜKERRER TUZAĞI — yazmadan önce bunları tara

```
data/kronoloji_balkan.js         177 madde  ← EN KRİTİK, bölgesel torba
data/kronoloji_bizans.js          97 madde  ← 1453 öncesi Yunan coğrafyası
data/kronoloji_atina_dukaligi.js  25 · kronoloji_naksa_dukaligi.js 25
data/kronoloji_venedik.js         86 madde  ← Mora, Girit, Ege adaları
data/kronoloji_rodos_sovalyeleri.js 96 madde
data/olaylar*.js                1736 madde  ← 1821 Mora, 1877-78 BURADA olabilir
data/ekokuma_yunan.js                        ← ek okuma kartları ZATEN VAR
```

📌 `data/ekokuma_yunan.js` var demek: 1821 için ek okuma kartları yazılmış ama
kronoloji dosyası yok. **Kartlar maddeye bağlanır** — senin yazacağın maddeler o
kartların bağını da güçlendirir. (Ölçüldü: o dosyadaki 4 kartın `kesinlik` alanı
eksik — bu senin işin DEĞİL, ama görürsen `-DUZELTME.md`ye not et.)

## Sana özel — dört uyarı

**① 1821-1832 Yunan bağımsızlığı büyük ve parçalı bir süreçtir.** Mora
ayaklanması (1821-03-25) · Navarin (1827-10-20) · Edirne (1829) · Londra
Protokolü (1830) · Constantinople Arrangement (1832). 🔴 **Bunların bir kısmı
çekirdekte ZATEN var** — ölç, sonra yaz. Karar noktası: aynı olayı Yunan
gözünden ikinci kez yazmak MÜKERRER mi, yoksa `kapsam:"ic"` ile meşru bir
Yunan maddesi mi? **Ölçtükten sonra tahtadan sor** — hükmü ben veririm.

**② Bulgaristan'ın üç ayrı hukukî hâli vardır ve karıştırılır:**
```
1878 Berlin  → Bulgaristan PRENSLİĞİ (Osmanlı'ya tâbi, muhtar)
1878-1885    → Doğu Rumeli AYRI bir vilâyet (1885'te birleşti)
1908         → BAĞIMSIZLIK ilânı
```
Haritada bu üçü ayrı görünmelidir; görünmüyorsa `-YERLESIM-ONERI.md`ye yaz
(`ORTAK.md §1` (b) yolu — koşu ister).
📌 Not: 1908 bağımsızlığı için bir ek okuma kartı var
(`ekokuma_p76g.js`, `p76g-bagimsizlik-1908-osmanli-tepkisi`).

**③ Tuna Bulgar Hanlığı (681-1018) ve İkinci Bulgar Devleti (1185-1396)
Osmanlı öncesidir.** Atlas 1281'de başlıyor. İkinci Bulgar Devleti'nin son
yüzyılı (1281-1396) **kapsam içindedir** ve muhtemelen hiç yazılmamıştır —
`kronoloji_balkan.js`i tara, orada olabilir.

**④ Yunan coğrafyası Osmanlı'da tek birim değildi.** Mora · Yanya · Selânik ·
Girit ayrı sancak/eyaletlerdir. 🔴 TDV'de "Yunanistan" maddesi dar kalırsa
**yere ve kişiye** git (`CLAUDE.md §4`: TDV olay değil yer-kişi ansiklopedisidir).

## Sıra ve denetim

`ORTAK.md §6`daki altı adım. Yazdıktan sonra:
```bash
node --check data/kronoloji_yunanistan.js
node --check data/kronoloji_bulgaristan.js
py arac/denetle.py    &&  py arac/odak_olc.py
```
🔴 `yer_id` uydurma — çözülmeyen `yer_id` yayın kapısını kilitler (0 tolerans).

## Teslim
Tek tahta mesajı, üçlü kural + dosya listesi + commit. Sonuna: **"bekçimi öldüreyim mi?"**
