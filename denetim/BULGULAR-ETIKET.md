# BULGULAR — ETİKET (KRONOLOJİ ŞEMASI oturumu, 2026-08-20)

Salt okuma denetimi. Hiçbir `data/*.js` dosyası bu oturumda değiştirilmedi.
Aşağıdaki her kalem **ne ölçtüğümü** ve (varsa) **ne yapılması gerektiğini**
ayrı satırda tutuyor — ölçüm ile çıkarım karıştırılmıyor (CLAUDE.md, "bugünün
en sık hatası" dersi).

Uygulama YAPILMADI — koordinatörün görev tanımı: *"Değişikliği data/olaylar*.js'te
SEN YAPMA — hangi dosyanın hangi satırında ne olacağını LİSTELE, uygulamayı
ben yaparım."*

---

## ① `toprak-kazanci` → `toprak-kazanc` (yazım hatası, tekil vaka)

**Ölçüm:** `etiket:` ekseninde 348 kayıt `"toprak-kazanc"` yazıyor, **1 kayıt**
`"toprak-kazanci"` yazıyor (sondaki "ı" fazladan).

```
data/olaylar_ek8.js:24
{ t:"1779-04-01", k:"fetih", etiket:["toprak-kazanci"], b:"Basra'nın İran
  işgalinden geri alınışı", ... }
```

**Öneri:** `"toprak-kazanci"` → `"toprak-kazanc"`.

---

## ② `isyan` → `ayaklanma` (etiket ekseninde, standart kullanımla çelişiyor)

**Ölçüm:** `etiket:` ekseninde `"ayaklanma"` 89 kayıtta var; `"isyan"` yalnız
**3 kayıtta.** Ayrıca ölçtüm: `k:"isyan"` ve `k:"darbe"` olan TÜM kayıtlar
(örnek: `olaylar.js:34`, `olaylar_ek2.js:72/74/75`) standart olarak
`etiket:["ayaklanma",...]` yazıyor, `etiket:["isyan",...]` DEĞİL. Yani
`"isyan"` etiket değeri bir tasarım kararı değil, **tutarsız tekil kullanım.**

```
data/olaylar_ek10.js:243  etiket:["isyan","diplomasi"]   (1594-10-05)
data/olaylar_ek10.js:254  etiket:["isyan","savas"]        (1594-11-13)
data/olaylar_ek10.js:419  etiket:["toprak-kaybi","isyan"] (1806-01-26)
```

**Öneri:** üçünde de `"isyan"` → `"ayaklanma"`.

⚠️ **NOT — `tur:"isyan"` (devletler.js, 48 kayıt) ve `k:"isyan"` (olaylar,
12 kayıt) buna DAHİL DEĞİL.** Onlar farklı eksenler (bölüntü), oradaki
`"isyan"` değeri kendi ekseninde standart ve dokunulmuyor. Yalnız
`etiket:` ekseni içindeki 3 kayıt karışıklık.

---

## ③ `idare` → `idari` (etiket ekseninde, 5 kayıt)

**Ölçüm:** `etiket:` ekseninde `"idari"` 11 kayıtta, `"idare"` 5 kayıtta.
`k:` ekseninde YALNIZ `"idari"` var (20 kayıt), `"idare"` hiç yok — yani
`k:` ekseni bu ayrımı zaten `idari` lehine çözmüş.

```
data/olaylar_ek10.js:297  { t:"1713-06-24", k:"idari", etiket:["toprak-kazanc","idare"], ...
data/olaylar_ek10.js:427  { t:"1457-01-01", k:"fetih", etiket:["toprak-kazanc","idare"], ...
data/olaylar_ek10.js:435  { t:"1448-01-01", k:"fetih", etiket:["toprak-kazanc","idare"], ...
data/olaylar_ek10.js:443  { t:"1465-01-01", k:"fetih", etiket:["toprak-kazanc","idare"], ...
data/olaylar_ek10.js:467  { t:"1420-01-01", k:"fetih", etiket:["toprak-kazanc","idare"], ...
```

**Öneri:** beşinde de `"idare"` → `"idari"`.

---

## ④ Emre'nin dictesi — ÖLÇÜLDÜ, hangisi VAR hangisi YENİ (koordinatörün istediği tablo)

Emre'nin saydığı 15 kalem, `etiket:` ekseninin gerçek 26 değeriyle karşılaştırıldı:

| Emre'nin kelimesi | Durum | Karşılığı |
|---|---|---|
| askerî | 🟡 ŞEMSİYE olarak yeni kuruldu | leaf değil — `savas`+`fetih`+`denizcilik`'i toplayan şemsiye |
| siyasî | 🟡 ŞEMSİYE olarak yeni kuruldu | `siyaset`+`diplomasi`+`antlasma`+`ittifak`+`saray` |
| toprak kazanç/kayıp | 🟢 ZATEN VAR (leaf) | `toprak-kazanc`(348) · `toprak-kaybi`(204) |
| anlaşma | 🟢 ZATEN VAR | `antlasma`(106) |
| ittifak | 🟢 ZATEN VAR | `ittifak`(37) |
| **iç savaş** | 🔴 **HİÇ YOK — GERÇEKTEN YENİ** | ne `etiket:` ne `k:` ne `tur:` ekseninde bu adla bir değer yok. `devletler.js`'te Bizans örneği metinde "iç savaşı" diyor ama `tur:"isyan"` yazılmış (bkz ⑥). Sözlüğe `ic-savas` olarak eklendi. |
| isyan | 🟡 VAR ama tutarsız | bkz ② — `ayaklanma`ya birleştirildi |
| **darbe** | 🟡 KISMEN VAR — eksen boşluğu | `k:`de 9 kayıt var, `etiket:`de SIFIR. Sözlüğe `etiket:` leaf'i olarak eklendi (bkz ⑤). |
| idari | 🟢 ZATEN VAR | bkz ③ |
| ekonomi | 🟢 ZATEN VAR | `ekonomi`(102) |
| sosyal | 🟡 en yakını `sosyoloji`(13) | aynı kelime değil ama aynı niyeti karşılıyor gibi görünüyor — **KARAR KOORDİNATÖRDE**: `sosyoloji` adı korunsun mu, `sosyal` olarak yeniden mi adlandırılsın? Ölçmedim hangisi daha doğru, karar veremedim. |
| kültürel | 🟡 birleşik | `kultur-sanat`(77) içinde — ayrıca bkz ⑦ |
| sanat | 🟡 birleşik | `kultur-sanat`(77) içinde — Emre ayrı ayrı saydı, veri BİRLEŞİK. **KARAR KOORDİNATÖRDE**: ayrılsın mı? |
| spor | 🟢 ZATEN VAR | `spor`(5) — ama bkz ⑤, hiçbir şemsiyeye bağlı değildi |
| mimari | 🟢 ZATEN VAR | `mimari`(26) |

**Sonuç:** 15 kalemin **9'u zaten vardı**, **1'i gerçekten yeni** (`ic-savas`),
**1'i eksen boşluğuydu** (`darbe`), **2'si şemsiye düzeyinde yeni kuruldu**
(askerî, siyasî zaten leaf değil şemsiyeydi), **2'si karar bekliyor**
(sosyal/sosyoloji adlandırması, kültür/sanat ayrımı).

---

## ⑤ 🔴 `js/suzgec.js`in KONU_GRUPLARI zaten bir şemsiye sistemi kuruyordu — AMA BAŞKA BİR EKSENDE

**Ölçüm:** `js/suzgec.js` içinde `KONU_GRUPLARI` adlı bir yapı zaten var —
7 şemsiye (`askeri, siyasi, hanedan, icduzen, kultur, iktisat, diger`) ve bu
şemsiyeler kronoloji panelinin süzgeç kutucuklarını besliyor. **Ama bu yapı
`etiket:` alanını DEĞİL, `k:` alanını gruplar** — iki alan farklı değer
kümesine sahip (etiket: 26 değer, k: 29 değer, örtüşme kısmi).

```
js/suzgec.js:16  "k:      25 değer · DİZİ olan madde   0   ← TEK DEĞERLİ (bölüntü)"
js/suzgec.js:17  "etiket: 20 değer · DİZİ olan madde 989   ← ÇOK DEĞERLİ"
```

Bu yorum **bayat**: 31 Temmuz'da (989 madde, k: 25 değer) yazılmış, bugün
(1223 madde) `k:` ekseninde **29 farklı değer** var. `KONU_GRUPLARI` tablosu
şu 4 değeri HİÇ İÇERMİYOR: **`sosyoloji`(13) · `mimari`(26) · `spor`(5) ·
`felsefe`(1)** — toplam **45 madde.** `js/suzgec.js:106`daki `bilinmeyenler()`
fonksiyonu bunları YAKALAR (görünür kalıyorlar, sessizce kaybolmuyorlar) ama
`maddeGrubu()` (satır 60-63) tanımadığı için hepsini **`diger`** kovasına
düşürüyor — kullanıcı "Kültür-bilim" filtresini açtığında `mimari` ve
`felsefe` maddeleri **görünmeyecek.**

⚠️ **Bu benim dosyam DEĞİL** (`js/suzgec.js`, Oturum 1 Yazılım/arayüz
sahipliğinde) — düzeltmiyorum, **bekletmeden bildiriyorum** (CLAUDE.md
§7.1⑥: "beklenenden ÇOK farklı bir sayı ölçtüysen" bekletme).

**Öneri (uygulama arayüz oturumunun kararı):** `KONU_GRUPLARI`e şu satırlar
eklenebilir:
```js
{ id:"kultur", ... k:[...,"mimari","felsefe"] }   // kultur grubuna eklenir
{ id:"sosyal", ad:"Sosyal", k:["sosyoloji","spor"] }  // YENİ grup
```
Bu, bu sözlükteki (`data/etiket_sozluk.js §3`) `sosyal` şemsiyesiyle
**isim düzeyinde tutarlı** olsun diye böyle önerildi — ama iki sistem yine
de AYRI EKSENİ (`k:` vs `etiket:`) grupluyor, birleşmiyor.

---

## ⑥ `devletler.js` tur: ekseninde 3 near-duplicate/belirsiz değer

**Ölçüm:** `tur:` ekseninde 17 farklı değer var, üçü şüpheli:

```
"kayip"   4 kayıt   — "toprak-kayip"(92) ile AYNI ANLAM, sadece kısaltılmış
                       data/devletler.js:564,574,4458,4478
"toprak"  2 kayıt   — belirsiz: bağımsızlık ilanı VE idari ilhak, ikisi de
                       "toprak" yazılmış ama YÖNLERİ ZIT (biri kaybediyor,
                       biri kazanıyor)
                       data/devletler.js:4448,4501
"baskent" 1 kayıt   — meşru, tekil ama açık: başkent kuruluşu
                       data/devletler.js:4101
```

**Öneri:**
- `"kayip"` → `"toprak-kayip"` (4 kayıt, net birleştirme)
- `"toprak"` → KARAR KOORDİNATÖRDE. İki kayıt farklı yönde (4448 bağımsızlık/
  kayıp yönünde, 4501 ilhak/kazanç yönünde); tek bir `toprak-belirsiz` etiketi
  altında toplamak istemedim çünkü **anlamları zıt.** Muhtemel çözüm: 4448 →
  `bolunme` ya da `isyan`, 4501 → `toprak-kazanc`. Ama bu değişiklik metni
  yeniden yorumlamayı gerektiriyor, ben yalnız ölçtüm.
- `"baskent"` — dokunma, meşru ve tekil.

---

## ⑦ `kaynak:` eksik 13 kayıt (OLAYLAR, bilgi amaçlı)

**Ölçüm:** 1223 maddenin 13'ünde `kaynak:` alanı hiç yok:

```
1581-04-16  İberya Birliği: Portekiz tacı İspanya kralına geçti
1640-12-01  Restauração: Portekiz bağımsızlığını geri aldı
1539-01-01  Zebîd'in Osmanlı hâkimiyetine kesin girişi
1662-01-30  Tanca İngiltere'ye devredildi
1747-06-20  Nâdir Şah'ın öldürülmesi — Afşar hâkimiyetinin dağılışı
1796-01-01  Kaçar hânedanının İran'a hâkim oluşu
1471-08-24  Arzila'nın Portekiz tarafından alınışı
1488-01-01  Safi'nin Portekiz nüfuzuna girmesi
1505-01-01  Santa Cruz do Cabo de Gué'nin kuruluşu
1513-09-01  Azemmûr'un alınışı
1514-01-01  Mazagan kalesinin kurulması
1769-03-11  Mazagan'ın boşaltılması
1362-03-01  Orhan Gazi'nin vefatı
```

Bu benim işimin kapsamı dışında (`data/olaylar*.js` başkalarında) — yalnız
ölçüldüğü için kaydediyorum. Coğrafi kümelenme dikkat çekici: 6'sı Fas kıyısı
Portekiz kaleleri (aynı yazarın toplu girdisi olabilir, `kaynak:` alanı
girilirken atlanmış olabilir).

---

## ⑧ `kültürel` / `sanat` ayrımı — çözülmedi, koordinatöre soru

`etiket:` ekseninde `kultur-sanat` TEK bir birleşik değer (77 kayıt). Emre
kendi dictesinde "kültürel" ve "sanat"ı AYRI AYRI saydı. İkisini ayırmak
77 kaydın her birini tek tek okuyup hangisinin kültür hangisinin sanat
olduğuna karar vermeyi gerektirir — bu oturumun kapsamında değil ve tek
başıma karar vermek istemedim (CLAUDE.md §7.1⑥: "şartname yanlış/eksik
çıktıysa BEKLETMEDEN bildir").

**Soru koordinatöre:** `kultur-sanat` birleşik kalsın mı (öneri: EVET, 77
kaydı tek tek ayırmanın maliyeti bu turun kazancından yüksek), yoksa ayrı bir
oturuma mı verilsin?

---

## ÖZET — SAYIYLA

```
etiket: ekseni    26 gerçek değer → sözlükte 25 (3 esanlam birleşti, 2 yeni eklendi)
tur: ekseni        17 gerçek değer → sözlükte 16 (1 esanlam birleşti)
şemsiye            8 (6'sı js/suzgec.js'teki KONU_GRUPLARI ile isim-uyumlu, 2 yeni: toprak, sosyal)
normalize önerisi  9 kayıt (①1 + ②3 + ③5), uygulama KOORDİNATÖRDE
karar bekleyen     3 kalem (sosyal/sosyoloji adı · kültür/sanat ayrımı · tur:"toprak")
yan bulgu          js/suzgec.js 45 madde sessizce "diger"e düşüyor (④), benim dosyam değil
kaynaksiz          13 OLAYLAR maddesi, bilgi amaçlı
```
