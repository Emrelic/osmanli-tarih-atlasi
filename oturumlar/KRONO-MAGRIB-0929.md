# KRONO-MAGRIB-0929 — şartname (Mağrib / Kuzey Afrika)

> 🔴 ÖNCE OKU: `CLAUDE.md` + [`oturumlar/KRONO-DUNYA-0929-ORTAK.md`](KRONO-DUNYA-0929-ORTAK.md)
> Dalga 1 · model Opus

## Kapsam — dört ülke, hiçbirinin kendi kronolojisi YOK

| Ülke | Bugün | Ölçüm (29 Eylül 2026) |
|---|---|---|
| **Libya / Trablusgarp** | 🔴 dosya YOK | 119 anılma · 18 künye eşleşmesi |
| **Tunus** | 🔴 dosya YOK | 153 anılma · 20 künye eşleşmesi |
| **Cezayir** | 🔴 dosya YOK | 126 anılma · 16 künye eşleşmesi |
| **Fas / Mağrib** | 🔴 dosya YOK | 134 anılma · 23 künye eşleşmesi |

Emre: *"libya tunus fas cezayir gibi ülkelerin kronolojilerini de ayrıca ele
alalım ve dolduralım."*

📌 **İyi haber: bu senin coğrafyan TDV'nin EN GÜÇLÜ olduğu yer.** `CLAUDE.md §4`:
İslâm dünyasında TDV birincildir. Dört ülkenin de kurumsal, hanedan ve şehir
maddeleri TDV'de zengindir — Balkan paketlerinin aksine kaynak sıkıntın az olmalı.

## 🔴 Dosya sahipliği — BUNLARIN DIŞINA YAZMA

| Dosya | Global adı | Durum |
|---|---|---|
| `data/kronoloji_libya.js` | `window.KRONOLOJI_LIBYA` | YENİ |
| `data/kronoloji_tunus.js` | `window.KRONOLOJI_TUNUS` | YENİ |
| `data/kronoloji_cezayir.js` | `window.KRONOLOJI_CEZAYIR` | YENİ |
| `data/kronoloji_fas.js` | `window.KRONOLOJI_FAS` | YENİ |
| `denetim/KRONO-MAGRIB-0929.md` | — | raporun |
| `denetim/KRONO-MAGRIB-0929-YERLESIM-ONERI.md` | — | `s:` önerileri |
| `denetim/KRONO-MAGRIB-0929-DUZELTME.md` | — | mevcut maddelerdeki kusurlar |

## 🔴 MÜKERRER TUZAĞI — yazmadan önce bunları tara

```
data/kronoloji_kuzeyafrika.js    83 madde  ← 🔴 EN KRİTİK. Senin dört ülkeni ZATEN
                                             kapsayan bölgesel torba. İLK İŞİN BU.
data/kronoloji_misir.js         119 madde  ← Mısır SENİN DEĞİL (Dalga 2'de)
data/kronoloji_memluk.js        155 madde  ← 1517 öncesi
data/kronoloji_ispanya.js       158 · kronoloji_portekiz.js 86 ← Kuzey Afrika
                                             kaleleri: Oran, Septe, Melilla, Mazagan
data/kronoloji_venedik.js        86 · kronoloji_italya_sehir.js 186 ← korsanlık, ticaret
data/olaylar*.js               1736 madde  ← Preveze, Cerbe, Osmanlı seferleri BURADA
data/kronoloji_dogu_afrika.js   218 madde  ← Doğu Afrika SENİN DEĞİL, karıştırma
```

🔴 **İlk işin `kronoloji_kuzeyafrika.js`in 83 maddesini okumak ve
sınıflandırmak:** her madde dört ülkenden hangisine ait? Bu bir **taşıma önerisi**
üretebilir ("şu 18 madde `kronoloji_cezayir.js`e taşınmalı"). 🔴 **TAŞIMA YAPMA,
ÖNER** — `kronoloji_kuzeyafrika.js` senin dosyan değil; taşıma kararı bende.

## Sana özel — beş uyarı

**① Üç ocak (Cezayir · Tunus · Trablusgarp) Osmanlı'nın en özel tâbilik
rejimidir** ve haritada temsili zordur:
```
1516/1529 Cezayir   Barbaros → beylerbeyilik → 1671'den DAYI seçimi
1534/1574 Tunus     eyalet → 1705'ten HÜSEYNÎ beyliği (irsî)
1551      Trablusgarp eyalet → 1711'den KARAMANLI (irsî) → 1835 yeniden merkezî
```
🔴 Bunlar **hukuken Osmanlı, fiilen özerk**tir. Haritada Osmanlı **doğrudan koyu**
mu, **tâbi açık** mı görünüyor? (`CLAUDE.md §1`: Osmanlı doğrudan koyu, tâbi açık.)
Çelişki varsa `-YERLESIM-ONERI.md`ye yaz — bu, paketin en değerli bulgusu olabilir.
⚠️ Ama hüküm verme: "fiilî özerklik" ile "tâbi devlet" aynı görsel kademe mi,
kararı Emre'nin. Sen ÖLÇ ve SOR.

**② Fas Osmanlı'ya HİÇ tâbi olmadı — ve bu bir ayırt edici gerçektir.**
Sa'dîler (1549-1659) ve Alevîler/Filâlîler (1631-) bağımsız kaldı; 1578 Vâdisseyl
(el-Mehâzin / "Üç Kral Savaşı") ve 1554 Tlemsen Osmanlı ile ilişkinin uçlarıdır.
🔴 Fas maddelerinin çoğu `kapsam:"ic"` olacaktır — Osmanlı ile ilişkisi az. Bu
**normaldir**, zorlama.

**③ 19. yüzyıl kopuşları üç ayrı yoldan oldu ve haritada ayrı görünmeli:**
```
1830  Cezayir  Fransız işgali (Osmanlı hukukî iddiası 1847'ye kadar sürdü)
1881  Tunus    Bardo — Fransız himayesi (Osmanlı iddiası hukuken kalktı mı?)
1911-12 Trablusgarp İtalyan işgali → Uşi (1912) → 1923'e kadar İtalyan
1912  Fas     Fes — Fransız/İspanyol himayesi
```
🔴 `isg:` mi `s:` mi sorusu tam burada yaşanır — `VERI-YAPISI.md §136`
**TAHRİR ÖLÇÜTÜ**nü oku (Emre, 24 Eylül 2026). Karar vermeden önce onu oku;
yanlış alan seçmek Değişmez 2i'yi (işgal senkronu, tavan 3) bozar.

**④ Ad ekseni.** TDV'de arama yaparken Osmanlı yazımını dene: `Trablusgarp`
(≠ Trablusşam!) · `Cezayir-i Garb` · `Tunus` · `Fas` · `Septe` (Ceuta) ·
`Vehrân` (Oran) · `Tilimsân` (Tlemsen) · `Derne` · `Bingazi` · `Mağrib`.
`D215`: "yok" demeden `bolge:` alanı taranır.
🔴 **`Trablus` iki ayrı yerdir** — Trablusgarp (Libya) ve Trablusşam (Lübnan).
Karıştırırsan `yer_id` yanlış yere düşer ve kamera Lübnan'a uçar.

**⑤ Senûsî hareketi** için veride zaten bir dosya var: `olaylar_senusi_0919.js`
(5 madde). Onu tara, tekrar yazma.

## Sıra ve denetim

`ORTAK.md §6`daki altı adım. Yazdıktan sonra:
```bash
for f in libya tunus cezayir fas; do node --check data/kronoloji_$f.js; done
py arac/denetle.py    &&  py arac/odak_olc.py
```
🔴 `yer_id` uydurma — çözülmeyen `yer_id` yayın kapısını kilitler (0 tolerans).

## Teslim
Tek tahta mesajı, üçlü kural + dosya listesi + commit. Sonuna: **"bekçimi öldüreyim mi?"**
