# KRONO-EKSIK-0921 — TESLİM RAPORU (21 Eylül 2026)

Şartname: `oturumlar/GECE-0921.md` "## KRONO-EKSIK-0921" · ortak kurallar
`oturumlar/DALGA-0073.md` · sevk M-4873. Öngörü (ölçümden önce yazıldı):
[`KRONO-EKSIK-0921-ONGORU.md`](KRONO-EKSIK-0921-ONGORU.md).

---

## KALEM ① — altı eksik madde

### 🔴 Şartnamenin öncülü kısmen yanlıştı: ALTIDAN İKİSİ ZATEN VARDI

| şartnamedeki olay | atlasta | nerede |
|---|---|---|
| Mühendishâne-i Berrî-i Hümâyun | **VARDI** | `olaylar_ek5.js:304` (açılış, `t:"1795-06-15"`) + `olaylar_ek14.js:65` (inşaat başlangıcı, `t:"1793-07-14"`) |
| Kilitbahir Kalesi | **VARDI** | `olaylar_p0036.js:15` (`t:"1463-01-01"`, `kesinlik:"yil"`) |
| Şehzade Mahmud'un idamı | yoktu | ↓ yazıldı |
| Boğaz'ın donması | yoktu | ↓ yazıldı |
| Hendese-i Mülkiyye | yoktu | ↓ yazıldı |
| Nusretiye Camii | yoktu | ↓ yazıldı |

Ölçüm yöntemi: `data/olaylar*.js` + `data/kronoloji*.js` üzerinde `b:` alanı
taraması (Mahmud · don/dondu/buz · Mühendishâne · Hendese · Kilitbahir ·
Nusretiye) — tarama evreni ve çıktısı bu raporun altındaki komutla tekrarlanır.

**Mükerrer yazılmadı.** İkisi için bulunan durum:

- **Mühendishâne-i Berrî — mevcut maddenin GÜNÜ KAYNAKSIZ.** Kayıt
  `t:"1795-06-15"` diyor, kendi `gun:` alanı ise sadece `"1795"`. TDV
  `muhendishane-i-berri-i-humayun` gövdesi: *"Mühendis yetiştirmek üzere 1795
  yılında açılan mektep"* · *"5 Zilhicce 1207'de (14 Temmuz 1793) başlanmış ve
  Safer 1210'da (Eylül 1795) tamamlanmıştır"* · *"1210'da (1795) Hasköy'de
  açılmıştır"*. ⇒ Kaynak **haziran demiyor**; bina **Eylül 1795**'te tamamlandı,
  açılış için gün YOK. `15 Haziran` sahte kesinliktir (D210).
  **Öneri (uygulanmadı, hüküm 1.MURAT'ın):** `t:"1795-09-01"` + `kesinlik:"ay"`
  + `gun:"Safer 1210 / Eylül 1795"`, `ic_not_gun`e gerekçe.
  Dokunmadım çünkü kayıt benim dosyam değil ve tarih taşımak Değişmez 2
  eşleşmesini oynatır — tek hamlede ve senin hükmünle yapılmalı.
- **Kilitbahir — mevcut madde DOĞRU, şartnamedeki aday gün YANLIŞ.** Şartname
  `1452` diyor; bu Evliya Çelebi rivayetidir ve **TDV onu tercih etmez**. Mevcut
  kayıt zaten TDV'nin tercihine (Kritovulos: 867/1463 görev, 869/1464-65
  tamamlanma) göre 17 Eylül'de 1463'e taşınmış ve gerekçesi `ic_not_d`de
  duruyor. Değişiklik gerekmiyor.

### Yazılan dört madde — `data/olaylar_kronoeksik_0921.js` (YENİ DOSYA)

Değişken adı `window.OLAYLAR_KRONOEKSIK0921` (🔴 tek altçizgi — `js/app.js:6225`
süzgeci `/^OLAYLAR(_[A-Za-z0-9]+)?$/`; `OLAYLAR_KRONO_EKSIK_0921` OKUNMAZDI).
`index.html:1270` satırı eklendi (paylaşılan dosya — yazıldı, **commitlenmedi**).

| `t` | kesinlik | `k` | başlık | kaynak | aday gün TUTTU mu? |
|---|---|---|---|---|---|
| 1603-06-07 | gun | siyaset | Şehzade Mahmud'un boğdurulması | `mehmed-iii` | ✓ TUTTU |
| 1621-01-01 | **yil** | diger | Görülmemiş kış — İstanbul Boğazı'nın donması | `osman-ii` | ✗ aday 1621-01-24 KAYNAKSIZ |
| 1826-04-08 | gun | kultur | Nusretiye Camii **inşaatının tamamlanması** | `nusretiye-camii` | ~ gün doğru, OLAY başka |
| 1883-11-03 | gun | bilim | Hendese-i Mülkiyye Mektebi'nin kuruluşu | `hendese-i-mulkiyye-mektebi` | ✓ TDV GÜN VERDİ |

Üç ayrık not:

1. **1621 — gün BULUNAMADI.** TDV `osman-ii`: *"Sefer hazırlıkları sürerken
   görülmemiş bir kış yaşanmış, boğaz donmuş, yiyecek içecek bulunamaz
   olmuştu."* Gün de ay da yok. TDV `bogazici` maddesinde don/buz **hiç
   geçmiyor** (gövde okundu — `bulunamadı` bir sonuçtur). ⇒ D210 gereği
   `YYYY-01-01` + `kesinlik:"yil"`. **Yıl tahmin değil, kaynaktan türedi:**
   aynı paragraf Ali Paşa'nın ölümünü *15 Rebîülâhir (9 Mart)*, otağın
   kuruluşunu *7 Cemâziyelâhir (29 Nisan)* diye verir; 15 Rebîülâhir 1030 =
   9 Mart 1621 ve sefer 1621 Hotin seferidir ⇒ kış 1620-21 kışıdır.
2. **Nusretiye — şartname "açılış" diyordu, kaynak "inşaatın bitişi" diyor.**
   TDV gövdesinde 1826 geçen iki cümle: *"inşaat 8 Nisan 1826'da
   bitirilmiştir"* ve *"14 Mayıs 1826 tarihinde minareler alt şerefeye kadar
   yıktırılıp yeniden inşa edilmiş"*. Gün doğru, tarihlediği olay başka
   (D211 tuzak ⑧). Başlık kaynağın dediğine çevrildi; küşâd töreni günü
   TDV'de **bulunamadı**.
3. **`k:"mimari"` KULLANILMADI** — `css/style.css`te `k-mimari` sınıfı YOK
   (0 eşleşme), yani o kategori nötr renge düşüyor. Nusretiye `kultur`a
   yazıldı. ⚠️ Yan bulgu: veride **27 madde** `k:"mimari"` kullanıyor ve
   hepsi liste renginden mahrum — ayrı bir kalem, dokunmadım.

**Denetim:** `py arac/denetle.py` → **SONUÇ: temiz**.
`Değişmez 2t ✓ kırılmasız madde: 1 (tavan 42)` — **dört madde bu kovayı
BÜYÜTMEDİ** (2t toprak kategorilerini sayıyor; siyaset/diger/kultur/bilim
maddeleri kovaya girmiyor).

⚠️ Ara koşuda bir kez `Ek denetim ✗ mükerrer madde: 1 şüpheli çift` görüldü ve
bir sonraki koşuda kendiliğinden **0'a döndü** — başka bir oturumun `data/`ya
yazması sırasında yakalanmış GEÇİCİ hâl, benim dosyamdan değil. Son koşu temiz.

---

## KALEM ② — FETİH ROZETİ TARAMASI

### 🔴 SEVKİN ÖNCÜLÜ YANLIŞ: rozet paragraftan çıkarılmıyor

Sevk: *"rozet bugün maddenin PARAGRAFINDAN çıkarılıyor"*.
`js/app.js:3343` bunun TERSİNİ yazar ve gerekçesi zaten ÖLÇÜLMÜŞ:

> 🔴 FETİH TARİHİ ETİKETİ — **YALNIZ `fethedilen:` ALANINDAN.**
> Bunu METİN EŞLEŞMESİNDEN türetmek ÖLÇÜLDÜ ve elendi: 1.360 madde-şehir
> çiftinde 554'ü maddenin tarihini TEKRAR ederdi, 739'u ALAKASIZ bir tarih
> gösterirdi.

Rozeti besleyen dört alan (`js/app.js:3386`): `fethedilen` · `kaybedilen` ·
`statu_dogrudan` · `statu_vasal`. Tarih metinden değil maddenin kendi
`gun`/`gi` değerinden gelir. Sevkteki iki soru bu gövdeye çevrilerek ölçüldü.

### Ölçüm — evren `data/olaylar*.js`, **1731 madde**, 3885 yerleşim adı

Alet: [`ARAC-KRONO-EKSIK-ROZET-0921.py`](ARAC-KRONO-EKSIK-ROZET-0921.py) ·
[`ARAC-KRONO-EKSIK-ROZET2-0921.py`](ARAC-KRONO-EKSIK-ROZET2-0921.py)
(ikisi de `denetle.py`nin ayrıştırıcısını ve glob'unu kullanır — ikinci bir
ayrıştırıcı yazılmadı).

**① "fetih/alındı/teslim oldu geçiyor ama rozet yok":**

| ölçüm | sayı |
|---|---|
| dört alandan en az birini taşıyan madde | **41** (99 ad yazılı) |
| metinde el-değiştirme fiili VAR, dört alan da YOK ⇒ **rozetsiz** | **579** |
| bunlardan **başlığında da** fiil geçen (yüksek güvenli kova) | **198** |

Rozetsizlerin kategori dağılımı: `fetih` 233 · `kayip` 120 · `savas` 66 ·
`siyaset` 44 · (`k:` yok) 42 · `antlasma` 17 · `kurulus` 9 · `isyan` 8 ·
`kazanc` 6 · `kusatma` 4 · kalanı tekli.

**② "rozet var ama tarihle çelişiyor":**

| hâl | sayı |
|---|---|
| TUTUYOR (ad eşleşti, kırılmaya ±30 gün, yön doğru) | **99 / 99** |
| ÖLÜ AD (alanda yazılı, hiçbir yerleşimle eşleşmiyor ⇒ rozet hiç çizilmez) | **0** |
| UZAK (en yakın kırılma > 30 gün) | **0** |
| YÖN-TERS (`fethedilen` kayba, `kaybedilen` kazanca denk geliyor) | **0** |

🔴 **Temiz sonuç ancak alet kusuru GÖREBİLİYORSA bir şey söyler.** Aletin kendi
sınavı var: `py denetim/ARAC-KRONO-EKSIK-ROZET2-0921.py --sina` → **5/5 geçti**
(olmayan ad → OLU-AD · 40 yıl uzak gün → UZAK · işgal başlangıcında
`kaybedilen` → TUTUYOR · aynı günde `fethedilen` → YON-TERS · işgalin bitişinde
`fethedilen` → TUTUYOR).

**Aletin kendi iki kusuru ölçüm sırasında bulundu ve düzeltildi** (veri kusuru
DEĞİLDİ, ikisi de raporda bırakıldı ki tekrar edilmesin):
- `isg:` kovası ilk yazımda hiç okunmuyordu → Böğürdelen'in 1788-04-24 Avusturya
  işgali "en yakın kırılma 6485 gün ötede" görünüyordu.
- `isg:` kovasında YÖN TERSTİR: işgalin BAŞLAMASI sahibi için KAYIP, BİTMESİ
  KAZANÇtır. Düz "f = kazanç" kuralı aynı kaydı yanlışlıkla YON-TERS sayıyordu.

### Öngörü × ölçüm karnesi

| öngörü | tahmin | ölçüm | |
|---|---|---|---|
| alanı olan madde | 7-25 | **41** | ✗ TUTMADI (az tahmin ettim; `kaybedilen:` sonradan büyümüş) |
| rozetsiz madde | 450-750 | **579** | ✓ tuttu |
| ölü ad | 0-3 | **0** | ✓ tuttu |
| uzak/çelişkili çift | 0-2 | **0** | ✓ tuttu |

### 🔴 ÖNERİ — TOPLU DÜZELTMEYE GİRİLMEMELİ

579 maddenin alanını metinden otomatik doldurmak, `js/app.js:3343`te
**ölçülüp elenen yolun ta kendisidir** (1.360 çiftte 554 tekrar + 739 alâkasız).
Metin "bahsedilen şehir" ile "el değiştiren şehir"i ayırmaz; 233'ü `k:"fetih"`
ama 120'si `k:"kayip"`, 66'sı `k:"savas"` — yönü de metin söylemez.

Önerilen sıra (karar senin):
1. **198 maddelik "başlığında da fiil geçen" kovasıyla başla** — başlıkta geçen
   ad, maddenin ODAK şehri olma ihtimali en yüksek olandır.
2. Bu kovada bile alan **elle** yazılsın, ama **ölçüyle beslensin**: madde günü
   ± 30 gün içinde kırılması olan yerleşimler zaten hesaplanabiliyor
   (`ARAC-KRONO-EKSIK-ROZET2-0921.py`nin `kirilmalar()`i). Yani "aday ad
   listesi" üretilir, insan **seçer**; makine yazmaz.
3. Her parti sonrası `--sina` + tam tarama koşar; `TUTUYOR` dışı hâl çıkarsa
   parti geri alınır.

Maliyet tahmini: 198 madde, madde başına 1 doğrulama + 1 alan yazımı ⇒ yaklaşık
4-6 oturumluk iş. **Başlatma emri sende.**

---

## Değişen / eklenen dosyalar

| dosya | durum | commit |
|---|---|---|
| `data/olaylar_kronoeksik_0921.js` | YENİ, 4 madde | paylaşılan — **1.MURAT** |
| `index.html` (satır 1270) | 1 satır eklendi | paylaşılan — **1.MURAT** |
| `denetim/KRONO-EKSIK-0921.md` | YENİ (bu rapor) | KRONO-EKSIK-0921 |
| `denetim/KRONO-EKSIK-0921-ONGORU.md` | YENİ | KRONO-EKSIK-0921 |
| `denetim/ARAC-KRONO-EKSIK-ROZET-0921.py` | YENİ | KRONO-EKSIK-0921 |
| `denetim/ARAC-KRONO-EKSIK-ROZET2-0921.py` | YENİ (`--sina` var) | KRONO-EKSIK-0921 |
| `denetim/KRONO-EKSIK-ROZET-0921.json` | YENİ (ölçüm çıktısı) | KRONO-EKSIK-0921 |
| `denetim/KRONO-EKSIK-ROZET2-0921.json` | YENİ (ölçüm çıktısı) | KRONO-EKSIK-0921 |

## Tekrar koşum

```bash
py denetim/ARAC-KRONO-EKSIK-ROZET-0921.py
py denetim/ARAC-KRONO-EKSIK-ROZET2-0921.py
py denetim/ARAC-KRONO-EKSIK-ROZET2-0921.py --sina
py arac/denetle.py
```
