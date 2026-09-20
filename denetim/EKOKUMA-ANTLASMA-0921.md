# EKOKUMA-ANTLASMA-0921 — antlaşma maddelerinin ek okuması

Oturum: EKOKUMA-ANTLASMA-0921 (Opus 5) · 21 Eylül 2026
Şartname: `oturumlar/GECE-0921.md` "## EKOKUMA-ANTLASMA-0921" · ortak kurallar `oturumlar/DALGA-0073.md`
Öngörü (ölçümden ÖNCE yazıldı): [`EKOKUMA-ANTLASMA-0921-ONGORU.md`](EKOKUMA-ANTLASMA-0921-ONGORU.md)
Aletler: [`ARAC-EKOKUMA-ANTLASMA-0921.js`](ARAC-EKOKUMA-ANTLASMA-0921.js) (kapsama ölçümü) ·
[`ARAC-EKOKUMA-ANTLASMA-0921-SINAV.js`](ARAC-EKOKUMA-ANTLASMA-0921-SINAV.js) (kart gerçekten görünüyor mu)
Ham sayılar: [`EKOKUMA-ANTLASMA-0921-OLCUM.json`](EKOKUMA-ANTLASMA-0921-OLCUM.json)

---

## 1. Ölçüt — ilan edilmiş hâli

**"Antlaşma maddesi" = kronoloji kaydının `k:` (kategori) alanı `antlasma`.**
`data/olaylar*.js` şemasının kendi kategori listesi bu alanı tanımlıyor
(`kurulus, fetih, savas, antlasma, taht, isyan, reform, kayip, diger`), yani ölçüt
veriden türetilmiş bir kalıp değil, verinin KENDİ alanıdır.

İkinci, gevşek ölçüt ayrıca sayıldı: `k` ne olursa olsun başlığında (`b`)
"antlaşma / anlaşma / muahede / ahidnâme / sulh / barış / protokol / konvansiyon /
mütareke" kalıplarından biri geçen madde.

**Evren — ve niçin bu evren:** ek okuma kutusu YALNIZ `OLAYLAR*` havuzunun
maddelerine çıkar. `js/app.js`te `obGoster` üç yerden çağrılıyor ve üçü de
`olaylar[]` dizisinden besleniyor (`olayGoster` · dizin penceresi dinleyicisi ·
`obTazele`); o dizi `/^OLAYLAR(_[A-Za-z0-9]+)?$/` deseniyle toplanıyor
(`var olaylar = Object.keys(window)…`).
🔴 SATIR NUMARASI VERİLMEDİ: `js/app.js`e bu oturum sırasında başka oturumlar da
yazıyordu ve numaralar koşu arasında kaydı (ör. `obGoster` çağrıları
6005/8209/8560 → 6014/8218/8569). Simge adıyla aranmalıdır.
`data/kronoloji_*.js` dosyaları (`KRONOLOJI_*`) AYRI bir panelin verisidir ve
ek okuma kartı alamaz — bu yüzden ölçüm evrenine alınmadı.
Kart evreni: `js/app.js` `_EKOKUMA_DOSYA_ADLARI`nın okuduğu 59 dosya +
`window.ANTLASMALAR` (`data/savaslar.js`, 41 kayıt).
Eşleşme mantığı `js/app.js`ten birebir kopyalandı (`_ekNorm` · `_ekBagEslesir` ·
`ekKartBagliMi`), yeniden yorumlanmadı.

## 2. Ölçüm — ÖNCE (kart yazılmadan)

| ölçü | sayı |
|---|---|
| `OLAYLAR*` kovası | 67 · toplam madde 1621 (`kapsam:"konu"` dahil 1622) |
| Yüklenen `data/*.js` (index.html) | 254'ün 253'ü (eksik: `data/dolgu.js` — başka oturumun kalemi) |
| Ek okuma dosyası | 59 addan 58'i diskte; **`ekokuma_antlasma6` YOKTU** |
| Havuzdaki kart | 581 (`EKOKUMA*`) + 41 (`ANTLASMALAR`) |
| **`k:"antlasma"` madde** | **131** |
| — en az bir kartı görünen | **88** (%67) |
| — **HİÇ kartı olmayan** | **43** (%33) |
| Gevşek ölçüt (kalıp dahil) | 154 · kartlı 98 · kartsız 56 |

**Kartsız 43'ün dağılımı** (yüzyıl): XV 1 · XVI 4 · XVII 3 · XVIII 5 · XIX 19 · XX 11.
Kova olarak ağırlık `OLAYLAR_EK16` (dünya kronolojisi, 14 madde) ve
`OLAYLAR_P0917TARAF` (sınır tahdit belgeleri, 6 madde) üzerindeydi.

## 3. Öngörü × ölçüm

| # | öngörü | ölçüm | sonuç |
|---|---|---|---|
| 1 | `k:"antlasma"` madde 90 ± 40 | 131 | ✓ (üst kenarda) |
| 2 | gevşek ölçüt 1,5–2,5 kat | 154 = 1,18 kat | ✗ **YANILDIM** — kategori alanı sanılandan disiplinli doldurulmuş; başlıkta antlaşma geçip kategorisi başka olan madde az |
| 3 | kartlı oran %35 ± 15 | %67 | ✗ **YANILDIM** — kapsama beklediğimden çok daha iyiydi |
| 4 | kartsızların çoğu Osmanlı dışı | 43'ün ~26'sı Osmanlı'nın taraf olmadığı ya da sınır-tahdit belgesi | ✓ |
| 5 | `ekokuma_antlasma6` app.js'te zaten kayıtlı, index.html satırı gerekmez | doğru — satır duruyordu, `index.html`de ek okuma dosyası hiç listelenmiyor (dinamik `<script>` enjeksiyonu, `ekOkumaMerakYukle`) | ✓ |
| 6 | 8–12 kartın en az 8'i TDV birincil | 11 kartın 10'u TDV birincil, 1'i (Viyana Kongresi) TDV'nin kapsamadığı | ✓ |

🔴 İkinci ve üçüncü öngörünün ikisinde de aynı yönde yanıldım: veriyi olduğundan
dağınık ve daha az kapsanmış varsaydım.

## 4. Yazılan kartlar — `data/ekokuma_antlasma6.js`

11 kart (`window.EKOKUMA_ANTLASMA6`, `tur:"sebep-sonuc"`). Seçim ölçütü:
kartsız 43 içinden ① Osmanlı tarihine doğrudan dokunan, ② kaynağı TDV'de
DOĞRULANABİLEN maddeler.

| gün | kart | birincil kaynak (TDV maddesi) |
|---|---|---|
| 1489-02-26 | Kıbrıs'ın Venedik'e devri | `kibris` |
| 1739-12-12 | Rusya ile barış (Azak · Kabartay) | `mahmud-i--osmanli` + `azak` + `belgrad` |
| 1790-09-18 | Yergöğü Mütarekesi | `zistovi-antlasmasi` |
| 1792-02-10 | Yaş tasdiknâmelerinin mübadelesi | `yas-antlasmasi` |
| 1815-06-09 | Viyana Kongresi Nihaî Senedi | 🔴 TDV DEĞİL — `viyana` (yalnız yıl) + 1911 EB "Vienna, Congress of" (kamu malı) |
| 1899-01-19 | Sudan Kondominyumu | `sudan` |
| 1906-10-01 | Refah itilâfnâmesi (Akabe meselesi) | `akabe-meselesi` |
| 1913-08-10 | Bükreş Antlaşması | `balkan-savasi` + `bulgaristan` |
| 1919-09-10 | Saint-Germain Antlaşması | `avusturya` + `birinci-dunya-savasi` |
| 1919-11-27 | Neuilly Antlaşması | `bulgaristan` + `birinci-dunya-savasi` |
| 1920-06-04 | Trianon Antlaşması | `macaristan` |

### Görünürlük sınavı (`ARAC-...-SINAV.js`)
- kart 11/11 `_ekHavuz()` regexine giriyor · tanımsız `tur` taşıyan kart 0
- **11/11 bağlandığı maddede GÖRÜNÜYOR** · birden çok maddeye düşen 0
- ters yön sınavı: uydurma bir ayırt edici ("1489-02-26" + var olmayan kelime)
  hiçbir maddede TUTMADI — yani sınav boş kümeyi "başarı" diye okumuyor

### Kapsama — SONRA
`k:"antlasma"` 131 madde · kartlı **99** · kartsız **32**. (+11, tam yazılan kart kadar.)

## 5. Bulamadıklarım — `bulunamadı` bir sonuçtur

Kartsız 43'ten şunlar TDV'de DOĞRULANAMADIĞI için yazılmadı:
- **1830-05-07 ABD ile ilk antlaşma** — `amerika-birlesik-devletleri` maddesi 76 KB'dir
  ve 1830 yalnız göç bağlamında geçer; antlaşma kapsanmıyor.
- **1884-07-18 Britanya'nın Somali himayesi** — `somali` maddesinde
  "Zeyla', Berberâ ve Tâcûre **aynı yıl** İngilizler tarafından Somaliland adıyla
  sömürgeleştirildi" cümlesi var; ama "aynı yıl"ın gönderdiği yıl gövdede
  BULUNAMADI: hemen önceki cümle ("Zengibar Sultanlığı bölgedeki topraklarının
  kullanım hakkını Fransa, İngiltere ve İtalya'ya devretti") de yıl taşımıyor,
  o bölgedeki en yakın rakam **1883**tür. D211 ⑧ ⇒ değer devşirilmedi, YAZILMADI.
  (Bu zincir `ARAC-TDV-GOVDE-0921.py`nin "aynı yıl" dalıyla ölçüldü.)
- **1884-06-03 Hewett (Adua) Antlaşması** — `habesistan` maddesinin gövdesi 2,3 KB
  (yönlendirme ölçeğinde); 1884, "Hewett" ve "Bogos" geçmiyor.
- **1662-01-30 Tanca'nın İngiltere'ye devri** — `tanca` maddesi İngiliz birliğinin
  yerleşmesini anlatıyor ama GÜN/YIL vermiyor.
- **1918-11-03 Villa Giusti Mütarekesi** — `birinci-dunya-savasi` maddesinde geçmiyor.
- **1909-04-19 İstanbul Protokolü** — `bulgaristan` maddesi "1909 tarihli İstanbul
  protokolü"nü YALNIZ vakıf/müftülük düzenlemesi olarak anıyor, bağımsızlığın
  tanınması bağlamında değil ve GÜN vermiyor.

Ölü sluglar (302 → arama sayfası): `belgrad-antlasmasi` · `nis-antlasmasi` ·
`viyana-kongresi` · `neuilly`. Hepsinde D217 uygulandı (olay yerine yer/kişi maddesi).

## 6. Yan bulgular — kalemim DEĞİL, hüküm koordinatörde

### 6a · 🔴 1913-08-10 madde başlığı kaynakla çelişiyor
Madde: *"Bükreş Antlaşması — **Batı Trakya ve Kavala havzası Bulgaristan'dan
Yunanistan'a geçti**"* (`OLAYLAR_2S0920`).
TDV `bulgaristan`: *"Savaşı sona erdiren Neully Antlaşması'yla (27 Kasım 1919)
Bulgaristan … **Batı Trakya'nın tamamını kaybetmiş**, Ege denizi kıyısını
Yunanistan'a bırakmak durumunda kalmış…"*
TDV `balkan-savasi`: Londra düzenlemesinde *"Edirne, Trakya ve Dedeağaç
**Bulgaristan'a**"*.
⇒ İki TDV maddesi birlikte, Batı Trakya'nın 1913'te değil **1919'da** Yunanistan'a
geçtiğini söylüyor. Yazdığım kart bu iddiayı TEKRARLAMADI; ama madde başlığı
düzeltilmeden okur kart ile başlık arasında çelişki görür. **Düzeltme yetkisi
bende değil** — başlık düzeltilirse `2s` bütçesine dokunulmadığını da doğrulamak gerekir.

### 6b · 🔴 1861-05-31 Bahreyn antlaşmasının günü TDV ile tutmuyor
Madde: *"Bahreyn'in İngiltere ile antlaşması"*, `t:"1861-05-31"`, `kaynak: bahreyn`.
TDV `bahreyn`: *"**21 Mayıs 1861**'de İngiltere ile Bahreyn'i temsilen Şeyh
Muhammed'in kardeşi Ali, bölgede köle ticaretini ve korsanlığı meneden bir anlaşma
imzaladılar."*
Madde TDV'yi kaynak gösteriyor ama TDV'nin yazdığı günü taşımıyor (on gün fark).
CLAUDE.md §4: çelişkide TDV esastır ve **atlas düzelir**. Bu maddeye kart
YAZMADIM — kart TDV'nin gününü yazsa madde başlığıyla çelişirdi.
⇒ Hüküm istiyorum: madde günü 21 Mayıs'a çekilsin mi (o zaman `d:`/`v:` senkronu
yeniden bakılmalı), yoksa maddenin `kaynak:` alanı mı düzeltilsin?

### 6c · 1920-06-04 Trianon başlığındaki oran TDV'de yok
Madde başlığı *"Macaristan **toprağının üçte ikisini** kaybetti"* diyor; TDV
`macaristan` yalnız *"toprak ve insan kaybına uğradı"* der, oran vermez.
Oran yaygın kabul görür ama kaynağı bu maddede DEĞİLDİR; kartta oran yazılmadı.

### 6d · `data/dolgu.js` yok
`index.html` bu dosyayı `<script>` ile yüklüyor ama dosya diskte yok (tarayıcıda
404). Başka oturumun (`arac/dolgu.py`, commit `bbbdec7`) kalemidir — yalnız bildiriyorum.

### 6e · Ölçüm sırasında doğrulanan bir NEGATİF
`_ekHavuz()` regexi `/^EKOKUMA(_[A-Z0-9]+)?$/` — iki altçizgili bir global
(ör. `EKOKUMA_KASRI_SIRIN`) süzgeçten düşerdi. **Ölçtüm: düşen yok.**
53 `EKOKUMA*` globalin 53'ü regexe giriyor, dışarıda kalan kart 0.

## 7. denetle.py

Veri yazıldıktan sonra `py arac/denetle.py` koşturuldu: **SONUÇ: temiz, çıkış kodu 0**
(21 Eylül 2026 gecesi; log saklanmadı, tekrar koşturulabilir).
İlk koşuda "mükerrer madde: 1 şüpheli çift"
çıkmıştı; ikinci koşuda 0'a dönmüştü — o kalem BAŞKA bir oturumun aynı anda
yazdığı veriden geliyordu, bu oturumun dosyasından değil (bu oturum hiçbir
kronoloji/yerleşim kaydına dokunmadı).

## 8. Değişen dosyalar

- `data/ekokuma_antlasma6.js` — YENİ, 11 kart (paylaşılan, **commitlemedim**)
- `js/app.js` — **DOKUNULMADI** (satır zaten vardı)
- `index.html` — **DOKUNULMADI** (ek okuma dosyaları dinamik yükleniyor)
- `denetim/EKOKUMA-ANTLASMA-0921*.md/.json` · `denetim/ARAC-EKOKUMA-ANTLASMA-0921*.js`
  · `denetim/ARAC-TDV-GOVDE-0921.py` — bu oturumun kendi dosyaları
