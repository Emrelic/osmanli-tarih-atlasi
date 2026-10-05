# UMIT-W4-DALGA3-1006 — osman1.to / orhan.from: "Bursa'yı aldı" ≠ "hükümdar oldu"

## 0. ÖNGÖRÜ — ölçümden ÖNCE mühürlendi (yalnız dalga 2'de okunan TDV cümleleri bilinerek)
- **Devrin TDV değeri:** gün YOK; ay var — `orhan`: "Rebîülevvel 724 (Mart 1324)" ⇒ yeni değer `1324-03` (dosyanın kendi `YYYY-AA` biçimi, gün uydurulmaz). Rebîülevvel 724 Jülyen ≈ 27 Şubat – 27 Mart 1324 (dalga 2 hesabı) — "Mart" demek pencerenin ~%95'i.
- **`denetle.py`:** padişah sınırlarını SORMAZ sanıyorum ⇒ Değişmez 2 sayı ve üyeliği **değişmez** (yalnız süre satırı).
- **Bağımlılık taraması:** `app.js`te padişah kartı/zaman çubuğu `from`/`to`yu okuyor olmalı; kronolojide "dönemin padişahı" seçimi bu sınırla yapılıyorsa **1324-03 … 1326-04 arasındaki maddeler** (Gemlik 1324-03-01? · Akyazı 1324-01-01 · Konuralp 1325 · Adranos …) Osman'dan Orhan'a geçer. Tahmin: 3-6 madde.
- **Zincir sınavı:** bugün boşluk 0 / çakışma 0 (osman1.to = orhan.from = 1326-04); sonra da 0/0.
- **`saltanat_yil`** iki kayıtta da yeniden ölçülmeli (P3 kuralı: kaydın kendi from/to'su): orhan 36 → 38; osman1 27 bir RİVAYET sayısı (TDV "yirmi yedi yıl") — çelişki bildirilir.

## 0.1 Öngörü tuttu mu
- Devir değeri **1324-03: TUTTU** (TDV gün vermiyor, ay veriyor).
- `denetle.py` değişmez: **TUTTU** — `--ayrinti` çıktısı sıra-bağımsız karşılaştırmada BİREBİR aynı (üyelik dahil).
- Bağımlılık: "3-6 madde Osman'dan Orhan'a geçer" **TUTMADI** — kronoloji kartı padişahı tarihten değil İSİMDEN seçiyor (§2); etkilenen madde **0**. Etki üstteki padişah kartında (25 ay).
- Zincir 0/0: **YARI** — Osman/Orhan dikişi önce de sonra da temiz, ama zincirde bu işten bağımsız **1 boşluk** zaten var (§3).
- saltanat_yil: orhan 36 → 38 **TUTTU**; osman1 rivayet çelişkisi bildirildi (§1).

Temel: `origin/main` = `6ba250497be30e37781aebad2e166b27d4cc9e8d` · koşu sürüyor, motor tuzuna dokunulmadı.

## 1. Kaynak — TDV (dalga 2'de curl ile çekilen gövdeler; `osman-gazi` bugün yine **302** → `/arama/osman-gazi`, kapsayıcı `osman-i`)
- `orhan`: "Orhan'ın beyliğe geliş tarihi Rebîülevvel 724'tür (Mart 1324)." · "Orhan Bey'in 724 Rebîülevvel ortalarında (Mart 1324) Şerefeddin Mukbil'e verdiği berat …" · künye "Osmanlı padişahı (1324-1362)."
- `osman-i`: künye "Osmanlı Devleti'nin ve hânedanının kurucusu (1302-1324)." · "Dolayısıyla Osman 724'te (1324) ölmüştür."
- `orhan` ve `bursa`: 1326 yalnız Bursa'nın teslimi — "(2 Cemâziyelevvel 726 / 6 Nisan 1326)" · "şehir Osmanlılar'a teslim edildi (6 Nisan 1326)".
- ⇒ Teşhis doğrulandı: `1326-04` = Bursa'nın teslimi; devir **Mart 1324**. Gün YOK, pencere: Rebîülevvel 724 = Jülyen **≈ 27 Şubat – 27 Mart 1324** (dalga 2'deki doğrulanmış hesap). Dosyanın biçimi `YYYY-AA` ve başlığı "YYYY-AA hassasiyetinde, ay yaklaşık" diyor ⇒ **`1324-03`**, gün uydurulmadı. Hassasiyet: `padisahlar.js`te `kesinlik` alanı yok ⇒ dalga 2 deseni, `ic_not_to` / `ic_not_from` alanlarında kaynak cümlesiyle.

**Değişen alanlar (`data/padisahlar.js`, tek dosya, 4 hunk):**
| Kayıt | Alan | Eski | Yeni |
|---|---|---|---|
| osman1 | `to` | 1326-04 | **1324-03** (+ `ic_not_to`) |
| osman1 | `saltanat_yil` | 27 | **25** (+ `ic_not_saltanat_yil`) |
| orhan | `from` | 1326-04 | **1324-03** (+ `ic_not_from`) |
| orhan | `tahta` | "1326-04 (Bursa'nın fethiyle örtüşür)" | "1324-03 (Rebîülevvel 724 — TDV orhan: "Mart 1324")" (+ `ic_not_tahta`) |
| orhan | `saltanat_yil` | 36 | **38** (+ `ic_not_saltanat_yil`) |
⚠️ **osman1 `saltanat_yil` bir HÜKÜM içerir, reddedilebilir:** 27 TDV'nin aktardığı RİVAYETtir ("Osmanlı rivayetine göre … yirmi yedi yıl hükümdarlık yapmıştı"). Dosyanın kuralı (P3, dalga 1) alanı kaydın kendi from/to'sundan yazmak: 1299-01 → 1324-03 = 25,2 ⇒ 25. Kart artık "1299 – 1324 · Saltanat: 25 yıl" der; 27 bırakılsaydı kart kendi içinde çelişirdi. `from:"1299-01"` (rivayet; TDV künyesi 1302) DEĞİŞTİRİLMEDİ — o başka bir hükümdür.

## 2. Bağımlılık taraması — padişah sınırını okuyan HER yer
| Tüketici | Yer | Etki (ölçüldü) |
|---|---|---|
| Üst padişah kartı | `app.js:6876 padisahGuncelle` (`from <= t < to`) + sarmalayıcı `:15131` | **1324-03 … 1326-03 arası 25 ay: Osman Gazi → Orhan Gazi.** Saltanat yazısı "1299 – 1326" → "1299 – 1324", Orhan "1326 – 1362" → "1324 – 1362". Zaman çubuğu ayrı bir padişah şeridi ÇİZMİYOR (aranan: `PADISAHLAR` geçen tüm satırlar). |
| Kronoloji madde kartı portresi | `app.js:10305` → `padisahEslesmesi(ad, gi)` (`:10095`) | Padişah tarihten değil `vefat_id` / `kisiler` ADINDAN seçilir; tarih yalnız koruma penceresidir [from−30 yıl, to+3 yıl]. Osman'ın üst ucu 1329-04 → 1327-03 daralıyor, Orhan'ın alt ucu 1296 → 1294 genişliyor. Bütün `data/*.js` tarandı: 1327-03…1329-04 arasında `kisiler`inde Osman geçen madde **0**, 1294-1296 arasında Orhan geçen madde **0** ⇒ **etkilenen madde 0**. |
| `padisahBul(t)` | `app.js:10114` | Tanımlı ama ÇAĞRILMIYOR (`:10316` yorumu: düşüş kaldırıldı). Etki 0. |
| Kartvizit sekmesi | `app.js:9393` (K1) | Orta sütun "from → to": Osman "1299-01 → 1324-03", Orhan "1324-03 → 1362-03". |
| Kişi kartı satırları | `app.js:10182-10186` | "Tahta çıkış: 1324-03 (…)" · "Saltanat: 38 yıl" / "25 yıl". |
| `arac/denetle_tutarlilik.py` A) padişah ↔ kronoloji | `:252` | 🔴 **ÖLÇÜLEMEDİ — bugünkü main'de de** (yamadan bağımsız): `oku_pencere` padisahlar.js'i JSON'a çeviremiyor (`JSONDecodeError line 14 col 5` — `ovgu:"…" + "…"` dizgi birleştirmesi). Çıkış 1, ÖNCE ve SONRA aynı. ⇒ Padişah sınırı ↔ cülûs maddesi tutarlılığını bugün HİÇBİR kapı ölçmüyor. Ayrı kalem önerilir. |
| `arac/durum_tablosu.py:530` | yalnız kayıt sayar | Etki 0. |
| `denetle.py` | padisahlar.js okumuyor | Etki 0 (§3). |

Kronolojinin kendi tarafı (dokunulmadı, tutarlı): "Osman Gazi'nin vefatı ve Orhan Bey'in beyliğe geçişi" OSMAN1-YIL sonrası **1324-01-01** (`kesinlik:yil`) — üst kart o gün Osman'ı gösterir, Orhan Mart'ta başlar; TDV penceresiyle (ölüm 1323-12-30…≈1324-03-13, devir Mart 1324) çelişmez. "Gemlik ve Armutlu'nun fethi" 1324-03-01 (`kisiler: Orhan Gazi`) artık Orhan'ın saltanatı içinde (önce Osman'ınkindeydi).

## 3. Sınav
**`py arac/denetle.py --ayrinti` ÖNCE/SONRA:** çıkış 2 / 2 (sebep yamadan bağımsız — üretim çıktısı bayat, dalga 1-2 ile aynı). Çıktı sıra-bağımsız diff'te **BİREBİR AYNI**: Değişmez 2 623/0 · 2s 1720/187/165 · 2i 171/1 · 2t 13 · mükerrer 112. D2 üyeliği değişmedi — `denetle.py` padisahlar.js'i okumaz.

**Padişah zinciri sınavı** (node, `app.js`in `from <= t < to` mantığıyla; 41 kayıt):
| | ÖNCE | SONRA (tek başına) | SONRA (üçü ardışık) |
|---|---|---|---|
| boşluk | 1 | 1 | 1 |
| çakışma | 0 | 0 | 0 |
| ters / sıfır uzunluk | 0 | 0 | 0 |
| osman1 → orhan dikişi | 1326-04 = 1326-04 | 1324-03 = 1324-03 | 1324-03 = 1324-03 |
- Bilinen tek boşluk BU İŞTEN BAĞIMSIZ: **mehmed1 `to:"1421-05"` → murad2 `from:"1421-06"`** — Mayıs 1421 boyunca kart "—" gösterir. Dokunulmadı; ayrı kalem.
- Standalone uygulamada `olum:"1324-08-01"` > `to:"1324-03"` olur (P1'in eski kusuru); OSMAN1-YIL ile birlikte `olum:"1324"` ≤ 1324-03 — tutarlı. ⇒ İkisi BİRLİKTE inmeli.

**Diff (`OSMAN-ORHAN-DEVIR-1006.diff`, 2235 bayt, 4 hunk, LF/CR 0, `diff --check` temiz, node --check temiz):**
| Sıra | ileri | -R |
|---|---|---|
| tek başına (temiz 6ba25049) | OK | red |
| ELLE-VERI-DUZELT-1006 → OSMAN1-YIL-1006 → **bu** | OK | red |
- 🔴 **Diff `-U1` (1 bağlam satırı) ile üretildi, bilerek:** osman1'in `to` satırı (4) ile OSMAN1-YIL'ın değiştirdiği `olum` satırı (6) arasında 1 satır var; 3 satırlık bağlamla üretilen sürüm ardışık sırada **REDDEDİLDİ** (ölçüldü: "patch failed: data/padisahlar.js:1"). `-U1` iki sırada da temiz.
- ⚠️ TERS sıra (önce bu, sonra OSMAN1-YIL) **reddedilir** (OSMAN1-YIL 3 satır bağlamlı). Uygulama sırası: **ELLE-VERI → OSMAN1-YIL → OSMAN-ORHAN-DEVIR** (ya da bu tek başına).

## 4. Uygulayana
- Sıra yukarıda. `py arac/paketle.py` (paket kopyaları bayatlar).
- Bu yama koşu girdisi DEĞİL (`padisahlar.js` motor tuzunda değil, `uret_petek.py` okumuyor) — HAVVA'nın koşusunu beklemesi gerekmez.

## 5. Ayrı kalem önerileri (yapılmadı)
1. `denetle_tutarlilik.py` padisahlar.js'i okuyamıyor (JSONDecodeError) ⇒ padişah ↔ cülûs maddesi tutarlılığı ölçülmüyor.
2. Zincirde mehmed1 → murad2 1 aylık boşluk (1421-05 → 1421-06).
3. osman1 `from:"1299-01"` (rivayet) ↔ TDV künye 1302 (Bapheus 27 Temmuz 1302).
