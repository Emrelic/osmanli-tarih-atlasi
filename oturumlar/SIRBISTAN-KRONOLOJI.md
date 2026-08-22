# SIRBİSTAN KRONOLOJİ

| alan | değer |
|---|---|
| **AD** | SIRBİSTAN KRONOLOJİ |
| **MODEL** | Sonnet |
| **DİZİN** | `C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ` |
| **DOSYAN** | `data/kronoloji_sirbistan.js` → `window.KRONOLOJI_SIRBISTAN` · ve `oturumlar/SIRBISTAN-KRONOLOJI-ILERLEME.md` |
| **YAZMAYACAĞIN** | başka hiçbir şey. `index.html` · `devletler.js` koordinatörde |

---

## 0. NİÇİN ÖNCE SEN

Emre'nin önceliklendirmesi: *"ne kadar Osmanlı'ya yakın ve ne kadar büyük
devlet ise o kadar öncelikli."* Ölçüldü — Sırbistan **en tepede**:

```
derin kronoloji dosyası olan: 26 devlet
Sırbistan: DERİN DOSYA YOK · üç ayrı künye · 1281-1923 KESİNTİSİZ
```

Çekirdek Osmanlı kronolojimizle en çok kesişen boş küme: **Kosova (1389) ·
Ankara sonrası Despotluk · Semendire 1459 · 1804 ve 1815 ayaklanmaları ·
1878 bağımsızlık · 1912-13 Balkan savaşları.** Bunların hepsi bugün yalnız
Osmanlı gözünden yazılı; Sırp perspektifi yok.

## 1. 🔴 ÜÇ KÜNYE VAR — TEK DEĞİL

`devletler.js`te ölçüldü (kendi ayrıştırıcınla DOĞRULA):
```
sirbistan-nemanjic     · sirbistan-prensligi     · sirbistan-kralligi
```
⚠️ `sirbistan` diye bir künye **YOKTUR**. Koordinatör önce onu varsaydı,
ölçüm çürüttü — `CLAUDE.md §4` *"Türkçe yazım ekseni"*: kendi
transliterasyonunu değil **gerçek `id:`yi** kullan.

`d:` alanına yazarken hangi dönemde hangi künyenin geçerli olduğunu
künyelerin `f`/`t` aralığından oku (`§3.5` hayalet devlet kuralı: devlet
ömrü dışında dönem yazma).

## 2. ŞEMA — değişmedi

```js
{ t:"YYYY-AA-GG", b:"başlık", tur:"...", onem:1-5, dunya:1-5,
  kapsam:"ic"|"dis", etiket:[...], yer_id:"...", d:"...", kaynak:"..." }
```
- `onem` = **bu devlet için** · `dunya` = **dünya siyaseti için**
- 🔴 **AYNI OLAY her dosyada AYNI `dunya` taşır** — denetimin 8. dalı bunu
  ötüyor. Kosova 1389 başka dosyada varsa oradaki `dunya`yı KULLAN.
- `onem` iyi/kötü ölçeği **DEĞİL** — etkinin büyüklüğü.
- **YOĞUNLUK KOTA DEĞİL.** Kaynak kaç madde veriyorsa o kadar. Dolgu YOK.
- `yer_id` doluysa **gerçek bir yerleşim adına** eşleşmeli (denetim bakıyor).

## 3. KAYNAK — `CLAUDE.md §4`

TDV birincil. Denenecek sluglar: `sirbistan` · `kosova` · `semendire` ·
`belgrad` · `nis` · `uskup` · `karadag` · `karayorgi` · `milos-obrenovic`.
```
curl -s -o /dev/null -w "%{http_code}" https://islamansiklopedisi.org.tr/<slug>
302 → ÖLÜ    200 → VAR (ama İÇERİĞİ OKU — doğru madde mi?)
```
🔴 **VİKİPEDİ TEK DAYANAK OLAMAZ.** Bir oturum bu kuralı bilmediği için 24
kaydı yeniden yazmak zorunda kaldı. Bulamadığını **`bulunamadı`** diye yaz —
bu bir SONUÇTUR.
⚠️ `nis` slug'ı TUZAK: canlı ama **Niş şehrini** açar, İskender Bey'i değil.

## 4. KABUL KAPISI

```
node --check data/kronoloji_sirbistan.js       → 0
py arac/denetle_kronoloji.py                   → sirbistan satırı "✓ temiz"
```
Dokuz dal denetliyor: zorunlu alanlar · tarih biçimi · onem/dunya 1-5 ·
kapsam · yer_id eşleşmesi · mükerrer · ad alanı · `dunya` tutarlılığı ·
**Vikipedi tek dayanak**.

## 5. TESLİM RAPORU — sekiz kalem, SAYIYLA

```
① madde sayısı · dönem dağılımı
② konu dağılımı (askerî / siyasî / toplumsal…)
③ hangi künyeyi hangi aralıkta kullandın
④ kaynak dağılımı: kaç TDV · kaç akademik · kaç "bulunamadı"
⑤ yer_id: kaç madde dolu, kaçı eşleşti
⑥ `dunya` çakışması: başka dosyada da olan olay var mı, puanı tuttu mu
⑦ NE BULAMADIN — açıkça
⑧ BAĞLANMAYI BEKLİYOR: data/kronoloji_sirbistan.js → window.KRONOLOJI_SIRBISTAN
```

## 6. HABERLEŞME

```bash
py arac/tahta.py yaz --kim "SIRBİSTAN KRONOLOJİ" --kime "KOORDINATOR" --mesaj "..."
```
Açılınca haber ver · kalem kalem bildir · **aksaklığı bekletme** · sorulunca
*"iş üstündeyim · şu aşamadayım · ~şu kadar kaldı"*.
🔴 **Kendi pencerene yazmak = hiç cevap vermemek.**

`index.html`e **bağlama** — koordinatör bağlıyor. Kaçış/Türkçe karakter
içeren metni bash'ten geçirme: `Write` ile dosyaya yaz, `py <yol>` ile
çalıştır. `git add -A` ASLA.
