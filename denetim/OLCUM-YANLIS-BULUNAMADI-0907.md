# «YANLIŞ `bulunamadı`» — KÜLLİYAT ÖLÇÜMÜ

**Oturum:** ASYA · 1.MURAT sevki (M-3095 ailesi) · 7 Eylül 2026
**Cins:** ÖLÇÜM — veri yazılmadı, commit edilmedi, künye kalemi açılmadı.
**ANLIK GÖRÜNTÜ:** 7 Eylül, koşu 7b sürerken (PID 3880) alındı. `data/*.js`
DONUK olduğu için payda o andaki hâldir: **617 künye · 3805 nokta · 77 girdi
dosyası.** Koşu inince paydalar kayabilir; oranlar kaymaz.

---

---

## 🔴🔴 ÖNCE BİR DÜZELTME: BU SINIF **YENİ DEĞİL**, VE ÖNCEKİ ÖLÇÜMÜ BEN YAPMIŞIM

Bu ölçümü *"yeni bir kusur sınıfı"* diye önerdim ve koordinatör onu öyle
kabul etti. **İkimiz de yanıldık:**

```
denetim/ONERI-KAYNAK-7-0905.json
   «YEDİ YANLIŞ "bulunamadı" DAMGASI — kaynak: metni önerisi»
   oturum: KURE GORUNUM  ·  sevk: M-2904  ·  damga: 2026-09-05
   dayanak: denetim/OLCUM-KAYNAK-DAMGA-KOVA-0905.md (263 künye · 12 canlı)
```
**KURE GORUNUM bu oturumun kendi önceki kimliğidir.** Yani iki gün önce
ölçtüğüm bir sınıfı, kaydını okumadan yeniden keşfettim.
📌 `§11`: *"kendi ödediğin borcu, kaydını okumadan yeniden iş
sanabilirsin"* — ve bu sefer *borç* değil **bulgunun kendisi** tekrarlandı.
⚠️ Ve `§11`in çaresi (*"işe dönüştürmeden önce `git log`"*) **on saniyelik
işti**; yapmadım.

### 🟢 AMA ÖLÇÜM MÜKERRER DEĞİL — GENİŞLEME, ve niçin genişlediği ölçülü
```
5 Eylül   7   delhi-sultanligi · meysur · mogolistan · nepal · nube · somali · tibet
7 Eylül  11
ORTAK     7   ⇒ 5 Eylül'ün bulup bugün KAÇIRDIĞIM: 0  (gerileme YOK)
YENİ      4   banda-adalari · cenova · cimma-sultanligi · sur-hanedani
```
**Ve dördünün üçü tek bir sebepten geldi — ADAY SLUG'IN KÖKENİ:**
```
cenova            `ceneviz`  ← `harita:` anahtarından   (id `cenova` ÖLÜ)
cimma-sultanligi  `cimma`    ← `harita:` anahtarından
sur-hanedani      `suriler`  ← künye ADINDAN            (id `sur-hanedani` ÖLÜ)
banda-adalari     `banda-adalari` ← id (5 Eylül evreni 263 künyeydi)
```
⇒ 5 Eylül taraması sluğu ağırlıkla **`id`den** türetiyordu. Bugünkü
tarama `id ∪ harita: ∪ ad` kullandı ⇒ **21 canlı slug** (5 Eylül: 12).
📌 Yani kazanç yeni bir fikirden değil, `§4`ün **Türkçe yazım ekseninden**
geldi: *bir künyenin `id`si ölü olabilir ve maddesi yine de vardır.*

### ⚠️ VE 5 EYLÜL ÖNERİSİ HÂLÂ UYGULANMAMIŞ — ölçüldü
`data/devletler.js` bugün yedisinde de **eski damgayı taşıyor** (`«bulunamadı
— TDV'de müstakil maddesi yok»` külliyatta **145** kez geçiyor). Sebep meşru:
`devletler.js` koşudan beri DONUK ve uygulama TEK ELDEN.
⇒ **İki öneri dosyası aynı yedi künyeye dokunacak.** Uygulanırken
`ONERI-KAYNAK-7-0905.json` ile bu ölçüm **birleştirilmeli**, arka arkaya
uygulanmamalı.

---

## ⓪ TESTİN YÖNÜ — ÖNCE BU, çünkü sonucu okumanın şartı

```
🔴 slug 200 + gövde polity'yi ANIYOR   ⇒ damga ÇÜRÜDÜ        (KANIT)
🟢 slug 302                            ⇒ damga çürümedi      (KANIT DEĞİL)
```
**Bu test bir damgayı ancak ÇÜRÜTEBİLİR, DOĞRULAYAMAZ.** Bir sluğun 302
dönmesi *"TDV'de madde yok"* demek değildir — başka bir yazım canlı olabilir
(`brunei` ölü ↔ `bruney` canlı; `hive` ölü ↔ `harizm` canlı). Bu yüzden
🟢 kovası **`GEÇERLİ` diye değil, `ÇÜRÜMEDİ` diye** okunur.

⇒ Aşağıdaki **11**, yanlış damgaların **ALT SINIRIDIR**, sayısı değil.

## ① EVREN — 1061 damga, ve çoğu SINANAMAZ

`kaynak:` alanında *bulunamadı / madde yok / kapsamıyor* ailesinden bir
ifade taşıyan **her** kayıt (künye + yerleşim kaydı + yerleşim dönemi):

```
DAMGA TOPLAM                                     1061
   künye                                          286
   yerleşim (kayıt seviyesi)                      769
   yerleşim (dönem seviyesi)                        6
```

🔴 **Ve 986'sı hangi sluğu denediğini SÖYLEMİYOR.** En çok tekrarlayan üçü:
```
503×  «bulunamadı»                                        ← ÇIPLAK, Kuzey Amerika
178×  «bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor»
136×  «bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak»
```
⇒ Yerleşim damgaları bir **tanecik** iddiası taşıyor (`§4`de meşru) ve slug
adı vermiyor ⇒ **slug tahmin etmeden sınanamazlar.** Ölçüm bu yüzden
**künye katmanında** yapıldı: künyenin bir `id`si, bir `harita:` anahtarı ve
bir `ad`ı var — aday slug **kayıttan TÜRETİLİR, uydurulmaz.**

## ② AYNI DAMGA, FARKLI İDDİA — sınamadan önce sınıfla

🔴 **Bunu atlamak doğrudan sahte pozitif üretir** ve ürettiği ölçüldü
(aşağıda `napoli`). 283 künye damgası iddiasına göre ayrıldı:

| | iddia | n | slug 200 bunu çürütür mü? |
|---|---|---|---|
| **A** | «TDV'de **müstakil maddesi yok**» | **152** | 🎯 **EVET** |
| B | «TDV bu **taneciği** kapsamıyor» | 3 | hayır — madde olabilir |
| C | «*<belirli bir veri>* TDV'de yok» | 2 | hayır — madde **var**, veri yok |
| D | çıplak, iddia yok | 17 | sınanacak bir şey yok |
| E | «çevrimiçi **doğrulanmadı**» | 109 | hayır — açık itiraf |

## ③ SONUÇ — A SINIFI (150)

474 aday slug HTTP ile sınandı (**200 → 21 · 302 → 453**), 21 canlı gövdenin
tamamı okundu.

```
🔴 ÇÜRÜK        11    %7,3
⚫ ÖLÇÜLEMEDİ    1    dahomey — 200 döndü, GÖVDE ALINAMADI (§4④)
🟢 ÇÜRÜMEDİ    138
```
> Payda **152 değil 150**: ikisi damga metni okununca A sınıfı çıkmadı (④).

### 🔴 ON BİR ÇÜRÜK DAMGA
Üçe ayrıldı, çünkü *"gövde adı anıyor"* ile *"gövde tarihliyor"* aynı şey
değildir (`§4⑧` · `uganda`/Ankole vakası):

**🔴 GÜÇLÜ (8)** — gövde polity'yi anıyor **ve** künyenin yılını da veriyor
| künye | künye yılı | gövdede bulunan | slug | ad isabeti |
|---|---|---|---|---|
| `delhi-sultanligi` | 1206/1526 | **1206 · 1526** | `delhi-sultanligi` | 76 |
| `sur-hanedani` | 1540/1564 | **1540 · 1564** | `suriler` *(ad)* | 6 |
| `mogolistan` | 1911 | **1911** | `mogolistan` | 67 |
| `banda-adalari` | 1621 | **1621** | `banda-adalari` | 13 |
| `tibet` | 1354/1642 | **1354** | `tibet` | 69 |
| `nube` | 543/1504 | **543** | `nube` | 61 |
| `cenova` | 1005/1797 | **1797** | `ceneviz` *(harita)* | 7 |
| `meysur` | 1761/1799 | **1799** | `meysur` | 33 |

**🟠 ZAYIF (2)** — yalnızca **anıyor**, künye yılını vermiyor (`§4` ANMA boşluğu)
`cimma-sultanligi` (ad ×27) · `somali` (ad ×115)

**⚫ SINANAMAZ (1)** — `nepal`: künyenin iki ucu da **pencere işareti**
(1281/1923), yıl ekseninde ölçülemez. Ama gövde **16.050 karakter** ve
Nepal'i **84 kez** anıyor; Tur 5'te okundu, Suguali Antlaşması'nı veriyor.

⚠️ **`suriler` ve `ceneviz` sluglarına dikkat:** ikisi de künyenin `id`si
DEĞİL — biri `ad`dan, biri `harita:` anahtarından türedi. `§4`ün Türkçe
yazım ekseni: **`id` ölü diye "TDV'de yok" denemez.**

## ④ KENDİ SAYIMI İKİ KEZ DÜŞÜRDÜM — ve ikisi de damga metnini OKUYARAK

Sınıflandırıcım **13** dedi. Damga metinleri tek tek okununca **ikisi
sahte pozitif** çıktı — çünkü damga TDV maddesinin varlığını **zaten kendisi
söylüyordu**:
```
napoli         «napoli (TDV, 1480/1861) + standart akademik kaynak (…TDV'de yok)»
sutayogullari  «TDV `diyarbakir` (200, gövde okundu): …»
```
⇒ Bunlar A değil **C** sınıfı: madde **var**, eksik olan bir **veri**. Slug
liveness onları çürütmez.
📌 Ve sınıflandırıcıyı yazan bendim: regexim `/TDV'de yok/` görünce A dedi,
cümlenin **öznesinin** madde mi bir tarih mi olduğunu sormadı.

## ⑤ İKİNCİ EKSEN — DAMGANIN KENDİ İTİRAFI (HTTP'siz ölçülür)

1061 damganın metni tarandı; **115'i kendi içinde** aramadığını ya da
doğrulamadığını söylüyor:
```
doğrulanmadı  109      erişilemedi  5      ölçülmedi  1      aranmadı  1
```
🔴 **İki tanesi doğrudan YANLIŞ DAMGA — üç damga sözlüğüne göre:**
```
irak-kralligi   «TDV 'irak--ulke' CANLI ve dönemi ele alıyor AMA … tam
                 çekilemedi»          ⇒ bu `bulunamadı` DEĞİL, `ölçülemedi`
rif-cumhuriyeti «bu spesifik siyasi yapı için DOĞRUDAN ARANMADI»
                                      ⇒ bu `bulunamadı` DEĞİL, `ölçmedim`
```
⚠️ Ve ikisi de **dürüst**: gerçeği metne yazmışlar. Yanlış olan **damga
seçimi** — ve damga, metnin altındaki cümleden **daha görünür.**

🟢 **E sınıfının 109'u yalan söylemiyor** (*"doğrulanmadı"* diyor, *"yok"*
demiyor). Ama üçünde cevap **tek bir istek** ötedeydi:
`ibadan` · `liberya` · `kanada` — aday slugları **200.**

## ⑥ NİÇİN PAHALI — mekanizma

`CLAUDE.md` bunu başka bir eksende zaten kaydediyor: *"yanlış bir güvence,
hiç yazılmamış bir nottan kötüdür"* (silinen kodun mezar taşı). Aynı
mekanizma:

```
ÇIPLAK «bulunamadı»          şüphe uyandırır → bir sonraki oturum ARAR
GEREKÇELİ ama YANLIŞ         GÜVEN verir     → bir sonraki oturum ARAMAZ
```
⇒ **Bir güvence okuru ölçümden ÇEVİRİR.** `nepal` bunun ölçülmüş bedeli:
damga iki tur boyunca doğru sanıldı, ve TDV'nin 16 KB'lık maddesi
kullanılmadı.

## ⑦ ÖLÇMEDİM / SINIRLAR

```
⚪ 769 YERLEŞİM damgasının hiçbiri — slug adı vermiyorlar, tahmin edilmez
⚪ 453 «302» sonucunun hiçbiri DOĞRULANMADI — 302 bir yokluk kanıtı DEĞİL
   (yazım varyantı sınanmadı: `bruney`/`brunei` deseni her birinde olabilir)
⚫ dahomey — 200 döndü, gövde alınamadı. CLAUDE.md onu YÖNLENDİRME kütüğü
   («bk. BENİN») diye kaydediyor ⇒ kapsayıcı `benin` DENENMELİ, ayrı kalem
⚪ 11 çürüğün hiçbirinde YENİ `kaynak:` metni yazılmadı — bu ayrı bir iş
   ve künye alanı benim değil (§7)
```

### 🔴 VE BU ÖLÇÜMDE KENDİ ALETİM ALTI KEZ YANILDI
Hepsi *"temiz bir sayı üretip hata vermeyen"* cinsten (`§11`):
```
① slug çıkarıcı `TDV\s+(\w+)` ile Türkçe kelime yakaladı  (kapsam · taneci · maddesi)
② ardıl kelime sınırı Türkçe EKİ kesti — «Sutayoğulları'ndan» eşleşmedi (1 kayıt sınıf değiştirdi)
③ üç haneli yıl dilimlemesi: "543-01-01"[:4] = "543-"    → `nube` SAHTE NEGATİF
④ pencere ucu yılları (1281/1923) ölçülebilir sanıldı     → `nepal` yanlış kovada
⑤ «damga zaten kabul ediyor» dedektörü 13'ün 13'ünü işaretledi (`— TDV\b` ↔ `TDV'de`)
⑥ iddia sınıflandırıcısı `napoli` ve `sutayogullari`yı A sandı
```
📌 ③'ü **`CLAUDE.md §4⑧`in kendi kaydı çürüttü** (`nube` gövdesinde "543"
geçtiği orada yazılı); ②'yi **`§3.5`in kendi kaydı** çürüttü (TDV
`diyarbakir` 1343'te Sutayoğulları'nı anıyor). ⇒ *Belgeyi okumak, belgenin
kendi ölçümünü de okumaktır* — iki kez kurtardı.
