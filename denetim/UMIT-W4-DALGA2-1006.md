# UMIT-W4-DALGA2-1006 — P1 osman1 (gün düşer, yıl kalır) · VERI-YAPISI dört sayı

## 0. ÖNGÖRÜ — ölçümden ÖNCE mühürlendi (hiçbir dosya açılmadan)
- **Değişmez 2:** Osman'ın vefatı bir toprak kırılmasına bağlı değil ⇒ Osmanlı senkronu açık sayısı **0 → 0**, kırılma sayısı değişmez. Üyelikte en fazla şu oynar: 1324-08-01 ±30 gün içinde bu maddeye dayanan bir kırılma varsa eşleşmesi kopar. Beklentim: **hiçbir üyelik değişmez.** Yıl-temsilî borç (`YYYY-01-01` kırılmaları) kovasına da girmez, çünkü madde kırılma değil.
- **`to:"1326-04"`ün dayanağı:** TDV'de **Bursa'nın teslimi (1326)** olarak bulunur (`bursa` / `orhan-gazi` maddesi), ama **Osman'ın saltanat sonu olarak bulunmaz** — TDV ölümü 1324 diyorsa saltanat sonu 1326 TDV ile çelişir; dayanak "bulunamadı" çıkar.

## 0.1 Öngörü tuttu mu
- **Değişmez 2: TUTTU** — Osmanlı 623 kırılma / 0 açık → 623 / 0. 2s 1720 · 187 açık · 165 yıl-temsilî → aynı. 2i 171 / 1 açık → aynı. 2t 13 → 13. Mükerrer madde 112 → 112.
  Ama "hiçbir üyelik değişmez" **TUTMADI** — iki üyelik satırı oynadı (§3).
- **`to:"1326-04"` dayanağı: TUTTU** — TDV'de 1326 yalnız Bursa'nın teslimi; saltanat sonu olarak: bulunamadı (§2).

Temel: `origin/main` = `fc3809758ae0b56e6b6ea19dd81cf98f5c71bbdf` · worktree `C:\atlas-w4`

## 1. P1 — Osman'ın ölümü: GÜN DÜŞTÜ, YIL KALDI
**TDV (curl ile çekildi, gövdeden cümle cümle okundu, 6 Ekim 2026):**
- `osman-i` (200): "Osman'ın ölüm tarihi Asporça Hatun ile Mekece vakfiyelerine göre belirlenebilir. Birincisinde Osman hayatta, ikincisinde vefat etmiş görünmektedir. Dolayısıyla Osman 724'te (1324) ölmüştür." · künye "(1302-1324)".
- `orhan` (200): "Orhan'ın beyliğe geliş tarihi Rebîülevvel 724'tür (Mart 1324)." · "Orhan Bey'in 724 Rebîülevvel ortalarında (Mart 1324) Şerefeddin Mukbil'e verdiği berat …" · Asporça vakfiyesi "723 Ramazan ayı başları (Eylül 1323)".

**D263 sınaması — ölçüldü (tablolu hicrî takvim → Jülyen; algoritma `orhan`ın "2 Cemâziyelevvel 726 / 6 Nisan 1326" eşlemesiyle doğrulandı, birebir tuttu):**
| Sınır | Hicrî | Jülyen |
|---|---|---|
| alt (osman-i "724'te") | 1 Muharrem 724 | 1323-12-30 |
| alt (Asporça, Osman hayatta) | 1 Ramazan 723 | 1323-09-03 |
| üst (Orhan beyliğe geldi) | Rebîülevvel 724 ortası (berat) | ≈1324-03-13 · ay sonu 1324-03-27 |
⇒ Mümkün pencere **1323-12-30 – ≈1324-03-13**. `1324-01-01` **İÇİNDE** (alt sınırın 2 gün üstünde). Eski `1324-08-01` **DIŞINDAYDI** — Orhan'ın beyliğe gelişinden ~5 ay SONRA, yani D263 türünden imkânsız bir tarihti.

**08-01'in kökeni (git, bulundu):** madde ilk commit'te (6dc55e7b, 27 Temmuz) `t:"1324-01-01"` idi; `b47d09a7` (28 Temmuz, "Kronoloji-harita senkronu", 44 yakın ıska hizalandı) onu `1324-08-01`e çekti. `padisahlar.js` `olum:"1324-08-01"` 4 Ağustos'ta (a872df03, kartvizit birleştirmesi) maddeden kopyalanmış görünüyor. Bugün 1324-08-01 ±30 günde ona dayanan Osmanlı kırılması YOK (yerleşimlerde 1324 kırılmaları: 01-01 · 03-01 · 06-19 Kalyari). ⇒ Senkron gerekçesi artık geçerli değil.

**Hassasiyet alanı (D213):**
- `olaylar_ek5.js` madde: `t:"1324-01-01"` + **`kesinlik:"yil"`** (VERI-YAPISI.md §`kesinlik`, :248/:347 — kronoloji dosyalarında 56 maddede aynı kullanım var) + `ic_not_t` (eski değer, kökeni, D263 penceresi). `gun:"1324"` zaten vardı, arayüz onu gösterir.
- `padisahlar.js` `olum`: bu dosyada `kesinlik` alanı ŞEMADA YOK (bulunamadı). `olum` serbest metin alanıdır (yalnız `app.js:10182` "Ölüm: " + metin olarak basar; tarih olarak ayrıştıran kod: js/ ve arac/ tarandı, **0**). Dosyanın kendi deseni `dogum:"1257 (dolayı, kesin değil)"` ⇒ `olum:"1324"` + `ic_not_olum` (eski değer ve TDV dayanağı). Yıl hassasiyeti değerin KENDİSİNDE okunur, `-01-01` sahte günü yok.

## 2. `to:"1326-04"` — dayanak ARANDI, DEĞİŞTİRİLMEDİ
- `osman-i` / `orhan` / `bursa` gövdelerinde 1326/726 geçen her cümle okundu: yalnız Bursa'nın teslimi — `orhan` "(2 Cemâziyelevvel 726 / 6 Nisan 1326)", `bursa` "şehir Osmanlılar'a teslim edildi (6 Nisan 1326)", `osman-i` "Kızık köyleri 1303-1326 döneminde".
- Bağ kuran tek TDV cümlesi rivayettir: `osman-i` "Osmanlı rivayetine göre vefatında Orhan Bey Bursa'yı kuşatmakla meşguldü." — yani 1326-04, eski rivayetin "Osman Bursa'nın fethi sırasında öldü" okumasıyla örtüşüyor.
- **Saltanat sonu olarak dayanak: bulunamadı.** TDV saltanatı "(1302-1324)" ve devri "Rebîülevvel 724 (Mart 1324)" verir ⇒ `to:"1326-04"` TDV ile ÇELİŞİR. `orhan.from:"1326-04"` de aynı alan (iki kayıt birlikte değişmeli).
- ⚠️ Sonuç: yama sonrası da `olum` (1324) < `to` (1326-04) — P1'in "ölüm < saltanat sonu" kusuru **yarı kapandı**: ölüm günü düzeldi, saltanat ucu hüküm bekliyor (Değişmez 2 dokunuşu: `to`/`from` bir harita kırılması değil, padişah kartı sınırıdır — ama kronolojide "Orhan Bey'in beyliğe geçişi" maddesi 1324'te dururken Orhan kartı 1326'da açılıyor).
- Ek not (dokunulmadı): `from:"1299-01"` TDV künyesiyle (1302) farklı; TDV 1299'u "Osmanlı rivayeti" olarak anar.

## 3. Sınav — `py arac/denetle.py --ayrinti`, ÖNCE / SONRA
Çıkış **2 / 2** (sebep yamadan bağımsız: Değişmez 8 körlük, atlas-umit'ten kopyalanan 4 Ekim üretim çıktısı main'den bayat; dalga 1 ile aynı).
Sıra-bağımsız karşılaştırma (çıktı satırları sıralanıp diff'lendi; 8a satırlarının sırası iki koşuda zaten oynuyor — eşit uzaklıklı satırlar, küme AYNI):
| Ölçüm | ÖNCE | SONRA | Üyelik |
|---|---|---|---|
| Değişmez 2 (Osmanlı) | 623 / 0 açık | 623 / 0 | — |
| 2s yabancı | 1720 · 187 açık · 165 YT | aynı | — |
| **2i işgal** | 171 / 1 açık | 171 / 1 | açık olan TEK kırılma **Kalyari (Cagliari) 1324-06-19**: "en yakın 43g: Osman Gazi'nin vefatı" → "en yakın **110g**: Gemlik (Kios) ve Armutlu'nun fethi" — açık kalıyor, tavan 1 tutuyor. (Doğru maddesi `kronoloji_*` sardinya'da 1324-06-19 var ama Değişmez 2 evreninde değil — eski durum da buydu.) |
| 2t kırılmasız madde | 13 | 13 | — |
| mükerrer madde (şüpheli) | 112 | 112 | — |
| **zayıf ölçüt (ihlal değil)** | 109 | **110** | yeni çift: `[kişi:orhan] 1324-01-01` Akyazı ve İmralı Adası'nın fethi ↔ 1324-01-01 Osman Gazi'nin vefatı. Ayrı olaylar; gözden geçirme kovası. |
- `node --check`: padisahlar.js · olaylar_ek5.js (+ ardışık sınamada savaslar.js · seferler_p0037.js) temiz.
- `git diff --check` temiz.

## 4. Diff sınaması
| Diff | Sıra | ileri | -R |
|---|---|---|---|
| OSMAN1-YIL-1006 | tek başına (temiz fc380975) | OK | red |
| OSMAN1-YIL-1006 | ELLE-VERI-DUZELT-1006 uygulandıktan SONRA | OK | red |
| VERI-YAPISI-SAYI-1006b | temiz main | OK | red |
- İki sırada da ikisi birlikte uygulandı, 4 dosya `node --check` temiz.
- LF, CR 0 · OSMAN1 7174 bayt (2 dosya, 2 hunk) · 1006b 1345 bayt (1 hunk).
- `VERI-YAPISI-SAYI-1006b.diff` eski `VERI-YAPISI-SAYI-1006.diff`in yerine geçer; ikisi AYNI satıra dokunur (`:544`) ⇒ **ikisi birden uygulanmaz.** Eskisi dokunulmadan duruyor.

## 5. VERI-YAPISI dört sayı (ölçüm, fc380975, node ile yüklendi)
`KISILER` 247 → **288** · `SAVASLAR` 169 → **174** · `ANTLASMALAR` 33 → **41** · `SEFERLER` 50 → **86** (`SERILER` 16 tutuyor). ELLE-VERI-DUZELT-1006 SEFERLER sayısını değiştirmez (p0037 ayrı değişkendi).

## 6. Uygulayana
- OSMAN1-YIL-1006 `data/` paket kopyalarını bayatlatır ⇒ `py arac/paketle.py` (dalga 1 ile aynı not).
- `to:"1326-04"` / `orhan.from` hükmü genel koordinatörde (kaynak TDV: Mart 1324).
