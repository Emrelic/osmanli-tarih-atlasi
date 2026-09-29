# KRONO-TUNA-0929 — şartname (Tuna ve Kuzey Karadeniz)

> 🔴 ÖNCE OKU: `CLAUDE.md` + [`oturumlar/KRONO-DUNYA-0929-ORTAK.md`](KRONO-DUNYA-0929-ORTAK.md)
> Dalga 1 · model Opus

## Kapsam — iki coğrafya, ikisinin de kronolojisi HİÇ YOK

| Coğrafya | Bugün | Ölçüm (29 Eylül 2026) |
|---|---|---|
| **Romanya** (Eflak · Boğdan · Transilvanya) | 🔴 dosya YOK | 317 anılma · 24 künye eşleşmesi |
| **Ukrayna** (Kazak Hetmanlığı · Zaporijya) | 🔴 dosya YOK | 226 anılma · 12 künye eşleşmesi |

Emre: *"romanya ukrayna … kronolojilerini de ayrıca ele alalım."*

🔴 **Bu paket kasıtlı olarak ÜÇ voyvodalığı tek pakete koyuyor,** çünkü Eflak ·
Boğdan · Transilvanya Osmanlı'nın **aynı tâbilik rejimini** paylaşır ve tarihleri
birbirine kilitlidir. Ayırmak üç kez aynı antlaşmayı yazdırırdı.

## 🔴 Dosya sahipliği — BUNLARIN DIŞINA YAZMA

| Dosya | Global adı | Durum |
|---|---|---|
| `data/kronoloji_romanya.js` | `window.KRONOLOJI_ROMANYA` | YENİ (üç voyvodalık birlikte) |
| `data/kronoloji_ukrayna.js` | `window.KRONOLOJI_UKRAYNA` | YENİ |
| `denetim/KRONO-TUNA-0929.md` | — | raporun |
| `denetim/KRONO-TUNA-0929-YERLESIM-ONERI.md` | — | `s:` önerileri |
| `denetim/KRONO-TUNA-0929-DUZELTME.md` | — | mevcut maddelerdeki kusurlar |

## 🔴 MÜKERRER TUZAĞI — yazmadan önce bunları tara

```
data/kronoloji_balkan.js      177 madde
data/kronoloji_macaristan.js  127 madde  ← Transilvanya 1526-1699 BURADA olabilir
data/kronoloji_lehistan.js    140 madde  ← Boğdan, Hotin, Kamaniçe
data/kronoloji_kirim.js        91 madde  ← akınlar, Kazaklar
data/kronoloji_rusya.js       173 madde  ← 1774 sonrası Eflak/Boğdan himayesi
data/kronoloji_habsburg.js    117 madde  ← 1699 sonrası Transilvanya
data/olaylar*.js             1736 madde  ← Osmanlı seferleri BURADA
```
⚠️ **Transilvanya bu paketin en çakışan konusu.** `kronoloji_macaristan.js` ve
`kronoloji_habsburg.js` onu zaten anıyor olabilir. **KRONO-ORTA-AVRUPA-0929**
(Dalga 2) aynı dosyalara bakacak — yatay mesaj serbest (`--kime "KRONO-ORTA-AVRUPA-0929"`),
ama iş bölümü hükmü bende.

## Sana özel — beş uyarı

**① Üç voyvodalığın tâbilik derecesi AYNI DEĞİLDİR ve zamanla değişir.**
Eflak (1417'den) · Boğdan (1455/1538) · Transilvanya (1541-1699, Erdel) farklı
rejimler. Haritada Osmanlı **tâbi** (açık ton) mı, doğrudan mı görünüyor?
Çelişki varsa `-YERLESIM-ONERI.md` (koşu ister, `ORTAK.md §1` (b)).
📌 Defterde bir künye kaydı var: *"erdel/thokoly/hirvatistan renkleri"* — Erdel
renk/künye tarafında da açık kalem olabilir; **künyeye dokunma**, görürsen not et.

**② Fener Beyleri devri (1711/1716-1821) kronolojide muhtemelen bir kara delik.**
Yüz yıllık bir dönem ve voyvoda değişimleri Osmanlı atamalarıdır — `tur:"hukumdar"`
ya da `tur:"idari"`, `kapsam:"dis"`. 🔴 Ama **her voyvoda değişimini yazma**;
`onem:` alanını dürüst kullan (veride 5→1475, yani "dönüm noktası" için ayrılmış).

**③ Ukrayna 1281-1923 arasında bir devlet olarak süreklilik göstermez.**
Yazılacak olan: Litvanya-Leh yönetimi · **Kazak Hetmanlığı (1649-1764)** ·
Pereyaslav (1654) · Osmanlı himayesinde Doroşenko (1669-1676) · Çehrin
seferleri (1678) · Bahçesaray (1681) · 1783 Kırım ilhakı sonrası.
🔴 **"Ukrayna" künyesi 1281-1923 için ANAKRONİK olabilir.** Künye YOK ya da
yanlışsa `denetim/KUNYE-DUNYA-0929.json`u (kardeş paket) bekle ya da ölç ve öner
— `data/devletler.js`e **DOKUNMA** (`CLAUDE.md §3.5` hayalet devlet).

**④ Kaynak dengesi.** TDV `eflak` · `bogdan` · `erdel` · `kazak` maddeleri
birincildir. TDV kapsamadığı yerde akademik kaynak meşrudur ve `kaynak:` alanına
**açıkça** yazılır. 🔴 Romen/Ukrain millî tarihyazımı ile Osmanlı kaynakları aynı
olayı farklı tarihler ve farklı çerçevelerle anlatır — **çelişkiyi gizlemeyin,**
`ic_not_d:` alanına yazın (kullanıcıya gösterilmez).

**⑤ Takvim.** `VERI-YAPISI.md §59`: atlasın geleneği **Jülyen**. Bu coğrafyada
Rus/Ortodoks kaynakları Jülyen, Habsburg kaynakları Gregoryen verir — 10-13 günlük
fark gerçek bir senkron hatası üretir. Şüphedeysen `gun:` alanında hangi takvim
olduğunu yaz.

## Sıra ve denetim

`ORTAK.md §6`daki altı adım. Yazdıktan sonra:
```bash
node --check data/kronoloji_romanya.js
node --check data/kronoloji_ukrayna.js
py arac/denetle.py    &&  py arac/odak_olc.py
```
🔴 `yer_id` uydurma — çözülmeyen `yer_id` yayın kapısını kilitler (0 tolerans).

## Teslim
Tek tahta mesajı, üçlü kural + dosya listesi + commit. Sonuna: **"bekçimi öldüreyim mi?"**
