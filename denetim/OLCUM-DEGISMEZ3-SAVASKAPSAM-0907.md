# `savas_senkronu` KAPSAMI + `:924` SINAVI · `DEGISMEZ3-0907`

## ① `:924` SINAVI — yazıldı, C13 dört ayak geçti
`denetim/ARAC-DEGISMEZ3-OLAYYUK-0907.py` · **çıkış kodu 0**

**Ölçüt:** `data/olaylar*.js` dosya sayısı == `window.OLAYLAR*` taşıyan sayısı.
```
③ GİRDİ     gerçek `data/` dizininden okundu (enjekte DEĞİL)
① GEÇME     35 dosya · 35'i taşıyor · 0 elenen — ve sınav `0`ı BASIYOR
② ATEŞLEME  sahte `olaylar_yanlis_ad.js` (window.KRONOLOJI_YANLIS) → YAKALANDI
④ ÇIKTI     dönüş dökülerek okundu (tip · uzunluk · liste · sözlük)
```
🟢 **Kapsam kontrolü sınavın İÇİNDE:** `kronoloji*.js` (42 dosya) bu sınavın
konusu değil (`CLAUDE.md §5` iki kova) ve **42'sinin 42'si** `OLAYLAR`
taşımıyor. Ateşleme dizinine bir `kronoloji_kuyruk.js` kondu — **kusur
sayılmadı**. Bu kontrol olmasa sınav 42 sahte kusur üretirdi.

🟢 Ateşleme `data/` **dışında** yapıldı (koşu 8'de `data/` donuk); sınav
dizin parametresi alıyor.

**Yan ölçüm:** 35 dosya · **35 benzersiz** `window.OLAYLAR*` adı ⇒ ad
çakışması yok (`§7` ad alanı dersi bu katmanda temiz).

---

## ② `savas_senkronu` KAPSAMI — HÜKÜM YOK, ÖLÇÜM VAR
```
küme          kayıt  `t`  senkron  açık   ayrıştırılamayan
SAVASLAR       171   171    %95      8          0
ANTLASMALAR     31    31   %100      0          0
SEFERLER        61    61    %70     18          0
SERILER         16     0     —       —          0   ⚪ KAPSAM DIŞI
```

**⚪ `SERILER` — kapsam dışı, doğrulandı.** Alanları `id · ad · aralik ·
ozet`; `t` **yok**, çünkü bir seri bir güne bağlanamaz. Denetlenemez.

**🟢 `ANTLASMALAR` — denetlenmesi ANLAMLI ve BEDAVA.** 31/31 kaydın ±30 gün
içinde maddesi var: **%100, 0 açık.** Denetime eklemek bugün hiç gürültü
üretmez, ve ileride bir antlaşma maddesiz kalırsa yakalar.

> ### 🟢 GÜNCELLEME — 18 AÇIK AYRILDI, hipotez DOĞRULANDI (ve DARALTILDI)
> `denetim/ARAC-DEGISMEZ3-SEFER-0907.py` · üç ölçüt, aynı veri, aynı pencere:
> ```
> Ⓐ `t` ±30       (BUGÜNKÜ ölçüt)  18 açık   ← taban
> Ⓑ `f` ±30       (başlangıç)      17 açık
> Ⓒ [f-30, t+30]  (ARALIK)          0 açık   ← öngörü "5'in altı" TUTTU
> ```
> **Kanıt birebir:** `Niğbolu seferi` → *"Niğbolu Zaferi"* · `Kosova seferi
> (1389)` → *"I. Kosova Savaşı"* · `Preveze harekâtı` → *"Preveze Deniz
> Zaferi"* · `Viyana seferi (1529)` → *"I. Viyana Kuşatması"*. Madde **var**,
> yalnız seferin **bitişinden** 30 günden uzakta.
>
> 🔴 **AMA Ⓒ TEK BAŞINA DENETİM ÖLÇÜTÜ OLAMAZ — kendi ölçütümün sınırı:**
> ```
> sefer adı ile eşleşen maddenin ORTAK kelimesi VAR : 16 / 18
> ORTAK kelime YOK (Ⓒ yanlış sebeple kapatıyor)     :  2 / 18
>    Memlük ordusunun karşı taarruzu (1488-1490, 22 AY)
>       → "Kraliçe Katerina Cornaro Kıbrıs'ı Venedik'e devretti"   ALAKASIZ
>    Timur'un Anadolu'dan çekilişi (1403)
>       → "Süleyman Çelebi – Bizans antlaşması"                    ALAKASIZ
> ```
> Uzun bir sefer aralığı (22 ay) içine **rastgele** bir madde düşüyor.
>
> ⚠️ **KENDİ SAYIMI DÜZELTİYORUM:** ilk yazdığım *"18'in 18'i ölçüt
> uyumsuzluğu, 0 gerçek"* fazla geniş. Doğrusu:
> ```
> 16  ÖLÇÜT UYUMSUZLUĞU — kanıtlı (ad eşleşmesi)
>  2  ÖLÇÜLEMEDİ — Ⓒ kapatıyor ama gerekçesi zayıf; gerçekten maddesiz OLABİLİR
>  0  KESİN maddesiz
> ```
> 🟢 **ÖNERİ (denetim YAZILMADI):** `SEFERLER` denetlenecekse ölçüt
> **Ⓒ + ad benzerliği** olmalı — Ⓒ tek başına 2 yanlış pozitif üretiyor.
> Ve `SAVASLAR`ın 8 açığı bu ölçütle **yeniden ölçülmeli**: `SAVASLAR`ın
> `savas_basi` alanı var (28 kayıtta), yani orada da aralık olabilir.

**🟡 `SEFERLER` — ölçüt UYMUYOR olabilir, denetim önermiyorum.**
18 açık var ama örnekler ölçütü sorgulatıyor:
```
Osmanlı'nın Çukurova seferi (1485)   -304g
Memlük ordusunun karşı taarruzu      -151g
II. Murad'ın İstanbul kuşatması      -88g
```
`SEFERLER` **`f` VE `t` taşıyor** (aralık), `savas_senkronu` ise yalnız `t`ye
(bitiş) bakıyor; kronoloji maddesi çoğu zaman seferin **başlangıcını**
anlatıyor. ⇒ %70, verinin kusuru değil **ölçütün sefere uymaması** olabilir.
Ölçüt `f`–`t` aralığına bakacak biçimde değişmeden bu küme denetlenmemeli.

🟢 **VE AÇIK KALEMİM KAPANDI:** `:2837` (`except: continue`, tarih
ayrıştırılamazsa) — **dört kümenin dördünde de ayrıştırılamayan 0**.
O dal bugün hiç ateşlemiyor.

---

## 🔴 YAN BULGU — `oku_pencere` ANTLASMALAR'ı EKSİK OKUYOR
Kapsamı ölçerken çıktı ve **kendi önceki sayımı da düzeltti**:
```
`denetle.py:739` YORUMU  "node okuyunca … ANTLASMALAR 41 …"
benim node ölçümüm       41
denetle.oku_pencere()    31        ← 🔴 10 KAYIT EKSİK
öteki üç küme            SAVASLAR 171 ✓ · SEFERLER 61 ✓ · SERILER 16 ✓
```
**Görünmeyen 10:** Serav · Vasvar · Kerden · Ziştovi · Yaş · Akkerman ·
Sırbistan özerklik fermanı · Ayastefanos (San Stefano) · İstanbul
(Bulgaristan, 1913) · Atina.

⚠️ **BUGÜN ZARARSIZ:** `savas_senkronu` `SAVASLAR` kullanıyor (171 ✓).
🔴 **AMA YUKARIDAKİ ②'yi UYGULAYAN İÇİN TUZAK:** `ANTLASMALAR` denetime
eklenirse **10 kayıt sessizce eksik ölçülür** ve *"31/31 %100"* diye
raporlanır — yani **benim yukarıdaki %100 ölçümüm de 31 üzerinden.**
Gerçek payda 41.

### SEBEBİNİ BULAMADIM — dört hipotez denendi, DÖRDÜ DE ÇÜRÜDÜ
Bir sonraki oturum bu dördünü tekrar denemesin:
```
① dizi ERKEN kapanıyor      ✗ son kayıt İKİSİNDE DE "Lozan" — eksik ORTADA
② kayıtlar BİRLEŞİYOR       ✗ alan sayısı dağılımı normal (6:3 · 7:27 · 9:1)
③ bir DİZGE 10 kaydı yutuyor ✗ 200+ karakterlik alan yalnız 3, hepsi meşru
                               `topraklar` metni (en uzun 310)
④ `_yorumsuz()` siliyor      ✗ on adın onu da yorumsuz gövdede DURUYOR
```
🔒 `arac/denetle.py` koordinatörün kalemi; bulguyu **ölçtüm ve doğruladım**,
sebebini **bulamadım** — `bulunamadı` değil, **`ölçtüm, teşhis edemedim`**.

---

## ÖLÇMEDİKLERİM
- `SEFERLER`in 18 açığının kaçı gerçekten maddesiz, kaçı `f`/`t` ölçüt
  uyumsuzluğu — **ayırmadım**, yalnız hipotez olarak yazdım.
- `ANTLASMALAR`ın görünmeyen 10'unun senkron durumu (paydası 41 olsaydı
  oran ne olurdu) — `oku_pencere` onları vermiyor, node ile ayrıca
  ölçmedim.
- `:924` sınavının koşu süresine etkisi (35 dosya okuma) — ölçmedim,
  ihmal edilebilir görünüyor.
