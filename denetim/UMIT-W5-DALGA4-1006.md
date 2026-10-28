# UMIT-W5-DALGA4-1006 — 1915-18 işgal emsali (s: mi isg: mi) · Lublin isg: ile D7 · Brest üçüncü kaynak

Görev: UMIT İRTİBAT (dalga 4) · İşçi: UMIT-W5-POLONYA-1006 · YALNIZ ÖLÇÜM, diff yok ·
worktree `C:\atlas-w5` = origin/main `3d89e4c4` · motor tuzu dosyalarına dokunulmadı.

## 0. ÖNGÖRÜ (ölçümden ÖNCE mühürlendi)

Ölçümden önce bildiklerim: KASA-POLONYA-1005 diff'inin ne yazdığı (dalga 2'de okudum:
Częstochowa, Łódź, Kielce 1915, Zamość, Varşova, Radom, Chełm `s:`; Kielce 1914 ara
pencereleri `isg:`) · Brest/Kovel/Volodymyr zincirleri (dalga 3: 1917'ye kadar `rusya`,
`isg:` yok) · `degismez7`nin kodu (yalnız `d`, `v`, `s` okur; `isg:` OKUMAZ).

**İŞ 1 — emsal:**
- Kongre Polonyası'nın 1915-18 işgali için projedeki kayıtların ÇOĞU `s:` kullanıyor
  (almanya / avusturya) — ama bu çoğunluk **TEK bir partiden** (KASA-POLONYA-1005, 5 Ekim
  2026) geliyor ⇒ bağımsız emsal değil, tek kararın yedi kopyası. Ayrı işaretlenecek.
- KASA öncesi (eski) kayıtlarda: Vilnius / Grodno / Kaunas / Białystok / Brest **işgal hiç
  yazılmamış** (`rusya` 1917'ye kadar, `isg:` yok) — yani 1915-18 için ne `s:` ne `isg:`
  emsali var; boşluk var.
- `isg:` emsali olarak yalnız Kielce'nin 1914 ara pencereleri çıkacak (o da KASA'nın).
- Lublin'in "1917-1918 kuyruğu Varşova kaydının deseni" notunu taşıyan en az bir kayıt
  daha çıkacak (Chełm/Zamość aynı partiden: "Lublin kaydıyla aynı dayanak").
- Sonuç öngörüsü: **bağımsız emsal 1915-18 Polonya için YOK ya da tek yönlü değil**;
  koordinatörün işaret ettiği `isg:` emsali (Adana/Tarsus, Pécs, Timișoara) başka coğrafya.

**İŞ 2 — D7 (Lublin `isg:`):** `degismez7` `isg:`i okumadığı için Lublin `s:`de
`kongre-polonyasi` kalır ⇒ köprü oluşmaz ⇒ **734** (diff'in öteki parçalarıyla). Üyelik
TABAN ile aynı, tek fark Radom kaydının günü: `1915-07-01 Radom` çıkar, `1915-07-20 Radom`
girer; `1915-10-01 Kielce` KALIR. Lublin `isg:` bitiş günü kaynaklı değil ⇒ ölçüm için
varsayım (1918-11-11) — D7 `isg:` okumadığı için sonuca etkisi 0.

**İŞ 3 — Brest:** TDV'de `brest` slug'ı 302 (kaydın notu); arama "Brest-Litovsk
Antlaşması" maddesini getirecek, 1915 kalesinin gününü VERMEYECEK ⇒ TDV `bulunamadı`.
Üçüncü akademik kaynak bulunma olasılığı orta; bulunursa **26 Ağustos** der (askerî
literatürde kalenin "alınışı" sabah girişidir; 25'i tahliye gecesinin başlangıcıdır).

## 1. İŞ 1 — EMSAL: 1915-18 Merkezî Devletler işgali hangi alanla yazılmış?

Yöntem: `girdi.yukle()` (motorun okuduğu 93 dosya), kutu enlem 48,5–58,5 · boylam 13,5–30,5,
tarih 1916-06-01; ek olarak bütün veride `isg:` başlangıcı 1914-07-28 ile 1918-11-11 arası
olan her pencere ve 1914-18 arasında `s:` ile almanya/avusturya'ya geçen her kayıt.
Betikler: scratchpad `emsal.py`, `isg.py`, `ww1.py`. HEAD `3d89e4c4` (POLONYA-DUZELT UYGULANMAMIŞ).

### 1.1 Kongre Polonyası ve doğusu — işgal YAZILMIŞ kayıtlar

| Kayıt | dosya:satır | 1915-18 `s:` | `isg:` | Parti | Emsal mi? |
|---|---|---|---|---|---|
| Częstochowa | yerlesimler.js:1082 | 1914-08-03 → `almanya` | — | KASA-POLONYA-1005 | tek parti |
| Łódź | yerlesimler.js:1081 | 1914-12-06 → `almanya` | — | KASA | tek parti |
| Varşova | yerlesimler.js:1113 | 1915-08-05 → `almanya` | — | KASA | tek parti |
| Kielce | yerlesimler.js:1083 | 1915-05-13 `almanya` → 1915-10-01 `avusturya` | **1914: 3 pencere** (avusturya ×2, almanya) | KASA | tek parti — İKİ ALAN BİRDEN |
| Radom (Polonya) | yerlesimler.js:1084 | 1915-07-01 → `avusturya` | — | KASA | tek parti |
| Chełm (Kholm) | yerlesimler_p0037.js:79 | 1915-08-01 → `avusturya` | — | KASA | 🔁 DESEN ("Lublin kaydıyla aynı dayanak") |
| Zamość | yerlesimler_p0037.js:85 | 1915-07-01 `almanya` → 1915-09-01 `avusturya` | — | KASA | 🔁 DESEN ("Lublin kaydıyla aynı dayanak") |

⇒ **Yedi kaydın yedisi de tek partiden (KASA-POLONYA-1005, 5 Ekim 2026)** — bağımsız emsal
DEĞİL, tek kararın yedi uygulaması. Aynı parti 1914'teki KISA (1 gün – 5 hafta) Kielce
işgallerini `isg:`, 1915-18'in UZUN işgalini `s:` yazmış; ayrımın gerekçesi kayıtta yazılı değil.

### 1.2 Kongre Polonyası ve doğusu — işgal YAZILMAMIŞ kayıtlar (1916-06-01'de `rusya`/`kongre-polonyasi`)
Lublin (yerlesimler_p0037.js:73, `kongre-polonyasi` 1917'ye kadar, 🔁 DESEN: "1917-1918 kuyruğu
Varşova kaydının deseni") · Białystok (p0037:91, 🔁) · Brest-Litovsk (p0037:97) · Grodno (p0037:107) ·
Pinsk (p0037:102, 🔁) · Kovel (p0037:112, 🔁) · Lutsk (p0037:117, 🔁) · Volodymyr-Volynskyi
(p0037:122, 🔁) · Rivne (p0037:127, 🔁) · Vilnius (yerlesimler.js:1114) · Kaunas (ek7:147) ·
Šiauliai (ek7:149) · Klaipėda hariç Litvanya · Riga (yerlesimler.js:1107) · Daugavpils, Cēsis
(ek7) · Minsk (yerlesimler.js:1115) … — **35 kayıt 1916'da `rusya`, hiçbirinde `isg:` yok.**
⇒ Burada ne `s:` ne `isg:` emsali var; işgal hiç yazılmamış (Brest'in kendi notu bunu beyan ediyor).
🔁 = kaynak alanı "deseni / aynı dayanak" diyor ⇒ kopyalanmış zincir, emsal SAYILMAZ.

### 1.3 Bütün veri — 1914-18 `isg:` pencereleri (bölge dışı dahil)

| Adet | `isg:` kimliği | o günkü `s:` | Örnek |
|---|---|---|---|
| 57 | ingiltere | misir-sultanligi | Kahire 1914-12-18 → (himaye) |
| 8 | fransa-cumhuriyet | OSMANLI | Suruç, Akçakale, Nusaybin 1918-10-30 → 1921 |
| 3 | avusturya / almanya | kongre-polonyasi | Kielce 1914 (KASA) |
| 2 | ingiltere | katar | Doha 1916 |
| 2 | italya | avusturya | Zadar, Şibenik 1918-11 |
| 1 | ingiltere | kuveyt | Kuveyt 1914 |
| **1** | **almanya** | **luksemburg** | **Lüksemburg 1914-08-02 → 1918-11-20** (yerlesimler_avrupa.js) |

Merkezî Devletlerin öteki büyük 1914-18 işgallerine bakıldı (1917-06-01): Brüksel, Anvers,
Gent, Liège (`belcika`) · Lille (`fransa-cumhuriyet`) · Belgrad, Niş, Üsküp, Priştine
(`sirbistan-kralligi`) · Bükreş, Köstence (`romanya-kralligi`) · Cetinje, Podgorica (`karadag`) ·
Udine (`italya`) — **hiçbirinde ne `s:` ne `isg:` işgal kaydı var.**

### 1.4 Hüküm
- **KASA dışında, Merkezî Devletlerin 1914-18 işgali için projedeki TEK bağımsız emsal
  Lüksemburg'dur ve `isg:` kullanır** (`s:` = hukukî sahip korunur). Koordinatörün andığı tür
  (hukuken egemenlik devretmeyen askerî işgal) ile birebir aynı sınıf.
- 1918 sonrası aynı bölgede de emsal `isg:`: Lvov (`s:` avusturya, `isg:` polonya 1918-11-22),
  Kassa (`isg:` çekoslovakya 1918-12-29), Zadar/Şibenik (`isg:` italya).
- `s:` ile yazılmış yedi Polonya kaydı TEK partinin kararı; bu karar Lüksemburg emsaliyle
  ÇELİŞİYOR. ⚠️ Emsale uyulursa yalnız Lublin değil, KASA'nın yedi kaydı da (Częstochowa, Łódź,
  Varşova, Kielce 1915, Radom, Chełm, Zamość) aynı sorunun içindedir — POLONYA-DUZELT'in
  "kabul" edilen Radom/Chełm/Zamość parçaları `s:` alanına yazıyor. Bu bir hüküm değil, kapsam
  uyarısı: karar koordinatörün.

## 2. İŞ 2 — D7, Lublin `isg:` ile

Varsayım (beyan): Lublin `isg:` = `{f:"1915-07-30", t:"1918-11-11", d:"avusturya"}`. Bitiş günü
KAYNAKLI DEĞİL — **ölçüm için varsayım** (komşu kayıtların deseni; Lewandowski 2013 MGGP için
"do 3 listopada 1918 r." diyor). `s:` Lublin'de `kongre-polonyasi → … ` aynen kalır.
Betik: scratchpad `d7b.py` (denetle.py'nin kendi `degismez7`si, HEAD `3d89e4c4`, bellekte).

| Varyant | D7 ihlal | geçici-cephe | Üyelik farkı (TABAN'a göre) |
|---|---|---|---|
| TABAN | 734 | 77 | — |
| RADOM (diff'in kabul edilen parçası) | 734 | 77 | − `1915-07-01 Radom` · + `1915-07-20 Radom` |
| **RADOM + LUBLIN `isg:`** | **734** | 77 | aynı: − `07-01 Radom` · + `07-20 Radom` · `1915-10-01 Kielce` KALIR |
| LUBLIN `isg:` (tek başına) | 734 | 77 | **fark yok** |
| RADOM + LUBLIN `s:` (eski diff) | 732 | 79 | − `07-01 Radom` · − `1915-10-01 Kielce` |

- **Lublin `isg:` ile D7 = 734.** Sebep yapısal: `degismez7` yalnız `d`, `v`, `s` okur
  (`denetle.py` `degismez7` gövdesi), `isg:`i hiç okumaz ⇒ Lublin `isg:` D7'ye GÖRÜNMEZ.
- Öngörü ↔ ölçüm: 734 ✓ · üyelik (Radom gün taşınır, Kielce kalır) ✓ · "isg: etkisi 0" ✓.
- ⚠️ Bunun anlamı: Lublin `isg:` yazılırsa D7 Radom/Kielce'nin "Habsburg adası"nı İHLAL
  olarak göstermeye devam eder — oysa ada, işgalin `s:`/`isg:` diye KARIŞIK yazılmasından
  doğuyor (Radom/Kielce `s:` avusturya, aradaki Lublin `isg:`). Emsale TAM uyulursa (yedi KASA
  kaydı da `isg:`) Radom/Kielce `s:`de `kongre-polonyasi` kalır ve bu iki ada hiç DOĞMAZ.

**Ek varyant — TAM EMSAL ölçüldü** (scratchpad `d7c.py`): yedi KASA kaydının 1914-08 → 1918-11-11
arası `almanya`/`avusturya` `s:` pencereleri `isg:`e taşındı (`s:` `kongre-polonyasi` uzatıldı)
+ Lublin `isg:`.
```
TABAN                   734 ihlal · geçici-cephe 77
TAM-EMSAL + LUBLIN isg  731 ihlal · geçici-cephe 76
   DÜŞTÜ  1915-07-01  Radom (Polonya)  HABSBURG  ada: Radom              171,1 km Krakov
   DÜŞTÜ  1915-07-01  Zamość           almanya   ada: Zamość             184,9 km Kielce
   DÜŞTÜ  1915-10-01  Kielce           HABSBURG  ada: Kielce+Krakov+Radom 184,9 km Zamość
   YENİ   (yok)
```
🔴 **Ama bu düşüş İYİLEŞME DEĞİL, KÖRLEŞMEDİR** — dalga 3'teki 732'nin tersine: üç kayıt
kapandığı için değil, D7'nin okuduğu `s:` alanından `isg:`e (D7'nin OKUMADIĞI alana)
taşındıkları için düştü. Ayrıca bir `geçici-cephe` muafiyeti de sorulmaz oldu (77 → 76).
Yani `isg:` kararı D7 evrenini daraltır; Polonya'nın 1915-18 işgali D7'de hiç sorulmaz olur.
Bu, Lüksemburg ve Mısır gibi bütün `isg:` kayıtları için zaten bugün geçerli olan bir
körlüktür (D7 tasarımı), yeni değildir — ama sayının düşmesi "düzeldi" diye OKUNMAMALI.

## 3. İŞ 3 — Brest-Litovsk üçüncü kaynak

**TDV:** `https://islamansiklopedisi.org.tr/arama/?q=brest` ve `?q=brest-litovsk` (HTTP 200).
Bütün isabetler **3 Mart 1918 Brest-Litovsk Antlaşması** bağlamında; sayfada "1915" geçmiyor
(0 eşleşme). Kalenin 1915'te düşüşüne dair TDV cümlesi **bulunamadı** (`D217`: TDV olay değil
yer-kişi ansiklopedisi; `brest` slug'ı kaydın notuna göre 302).

**Üçüncü akademik kaynak: `bulunamadı`.** Bakılanlar ve neden kullanılmadıkları:
- Brest Merkez Şehir Kütüphanesi (А.С. Пушкин), «Крепость во время Первой мировой войны» —
  https://gcbs-brest.by/krepost-vo-vremya-pervoj-mirovoj-vojny (HTTP 200, okundu):
  > "12 августа 1915 года в 9 часов 30 минут вечера комендант крепости … переехал из
  > центрального убежища в д. Тришин"
  > "В ночь на 1 (13) августа 1915 в ходе общего отступления крепость была оставлена и
  > частично взорвана русскими войсками. Немецкие войска, обойдя крепость с севера и юга,
  > 13 августа 1915 года беспрепятственно заняли Брест-Литовск"
  ⇒ KULLANILMADI: kaynak göstermeyen derleme (`§4` kırmızı liste: "kaynaksız derleme") ve
  kendi içinde tutarsız ("1 (13) августа" ile "13 августа" aynı paragrafta).
  📌 AMA bir AÇIKLAMA ADAYI veriyor (ÇIKARIM, kaynak değil): sayfadaki günler Jülyen
  (eski takvim) görünüyor — "4 августа … падении крепости Ковно" Kaunas'ın Ağustos 1915
  ortasındaki düşüşüyle ancak eski takvimde uyuşuyor. Eski takvim +13 gün ⇒ komutanın
  çıkışı **12 Ağustos ES = 25 Ağustos YS akşamı**, Alman girişi **13 Ağustos ES = 26 Ağustos YS**.
  Bu, Jarosławski'nin 25'i ile Mikietyński'nin 26'sını bir geceyle uzlaştırır — ama bunu
  söyleyen akademik bir cümle BULUNAMADI.
- "Mémorial complex Brestskaya krepost-geroy" (brest-fortress.by, devlet kurumu): yalnız
  "В августе 1915 года … гарнизон Брестской крепости был эвакуирован" — ay düzeyi.
- polesie.org, Vikipedi, passa.waw.pl, blog — kırmızı liste / tek dayanak olamaz, açılmadı.

**Brest hükmü (koordinatörün editoryal seçimi için):** iki akademik kaynak (25 · 26) +
kaynaksız bir derlemenin işaret ettiği "25 akşam Rus çıkışı / 26 Alman girişi" ayrımı.
Seçim yapılmadı.

## 4. BULUNAMADI / ÖLÇÜLEMEDİ
- KASA'nın 1914 `isg:` / 1915-18 `s:` ayrımının gerekçesi (kayıtta yazılı değil).
- Lublin Avusturya işgalinin bitiş günü için kaynak (ölçümde varsayım).
- Emsale tam uyulursa (yedi kayıt `isg:`) D7'nin ne çıkacağı — ölçülmedi, yalnız çıkarım (§2).
- Brest için üçüncü akademik kaynak; TDV'de 1915 cümlesi.
