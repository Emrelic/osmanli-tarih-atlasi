# BULGU — "etiketsiz toprak parçası" denetimi

**Madde:** `parti-emrelic-0019` · **H-0023**
**Oturum:** OPUS HAZIR KITA 104 · **2 Eylül 2026**
**Görevi veren:** 1.MURAT HÜDAVENDİGAR · tahta **M-1903**
**Araç:** `denetim/denetle_etiket_ok104.py` (bu dizinde, çalışır hâlde)

---

## Emre'nin isteği

> *"haritada hiçbir zaman çizelgesindeki noktada etiketsiz toprak parçası
> olmamalı. hangi devlete ait ise belli bir boyama toprak parçası devlet
> etiketi kesin olmalı. **bir kontrol çalıştıralım ve hepsini kontrol
> etsin**"*

İstenen şey bir düzeltme değil, bir **nöbetçi**. Yazıldı.

---

## 1. Niçin var olan denetimler bu soruyu sormuyor

```
Değişmez 1   "bu NOKTA sahipsiz mi"           -> nokta tarafı
Değişmez 2   "bu KIRILMANIN maddesi var mı"   -> kronoloji tarafı
Değişmez 3   "merkeziyle uyuşuyor mu"          -> bölge tarafı
HİÇBİRİ      "bu sahiplik EKRANDA GÖRÜNÜYOR mu" diye SORMUYOR.
```

`CLAUDE.md §8`: bir kimlik `BOYALAR`da tanımlı değilse bölge **boyanmaz**.
`CLAUDE.md §5`: gövdenin adı `devletler.js` künyesinden gelir; künye yoksa
gövde **ham slug** ile çizilir (`js/app.js` `devletAdi()` vakası — 30 gövde
`kaffa` · `sirbistan` · `ceneviz` diye görünüyordu).

⇒ Veride kullanılan ama **rengi** ya da **künyesi** olmayan bir kimlik,
ekranda ya **boş** ya **etiketsiz** bir toprak parçası üretir. Emre'nin tarif
ettiği tam bu — ve `denetle.py` bunu **temiz** raporlar, çünkü o soruyu
sormuyor.

📌 `CLAUDE.md §11`: *"denetim var ≠ o soruyu soruyor."*

---

## 2. Bugünkü sonuç

```
evren    arac/girdi.py GIRDI_DOSYALARI · 63 dosya   (elle liste DEĞİL)
kimlik   400 ayrı devlet kimliği veride KULLANILIYOR
taban    BOYALAR 401 kimlik · devletler.js 432 künye

🔴 A · RENKSIZ      0     rengi yok -> boyanmaz, harita deliği
🔴 B · KÜNYESİZ     4     rengi var, künyesi yok -> ETİKETSİZ boyanır
🟢 C · YÖNLENDİRME 246    künye `harita:` ile bağlı — kusur DEĞİL
⚪ M · MUAF          1     tasarım
🟡 D · ÖLÇÜLEMEDİ   0     ("ölçülemedi" asla "temiz" diye raporlanmaz)
```

### Dört gerçek kusur

| kimlik | nokta | dönem | aralık |
|---|---|---|---|
| `panama-cumhuriyeti` | 2 | 2 | 1903-11 … 1923-10 |
| `farukiler` | 2 | 2 | 1370-01 … 1601-01 |
| `apaci-ovalar` | 1 | 1 | 1281-01 … 1750-01 |
| `komanci` | 1 | 1 | 1750-01 … 1875-01 |

🔴 **VE ÜÇÜ TAZE — DÜNKÜ İŞTEN DOĞDULAR.** `arac/girdi.py` kendi yorumunda
şunu yazıyor:

> *"🟢 1 EYLÜL 2026 — BEŞ RENK DE YAZILDI (RENK AÇIKLIK TABANI):
> hawaii-kralligi · merina · **farukiler** · **apaci-ovalar** · **komanci**
> ⇒ ENGEL KALKTI, üçü de aşağıda BAĞLANDI."*

⇒ **Renkler yazıldı, künyeler yazılmadı.** Engel kalktı sanıldı; yarısı
kalkmış. Gövdeler artık boyanıyor ama **adsız**.

📌 Bu, `§11`in *"bir düzeltme doğru çalışabilir ve sonraki aşama onu geri
alabilir"* ailesinin kardeşi: burada geri alan yok, **tamamlayan** yok.
Renk ve künye iki ayrı kapı ve **yalnız biri açıldı.**

**ÇARE:** dört kimliğe `data/devletler.js`te künye. O dosya benim değil —
`data/devletler.js` sahibine sevk edilmeli.

### Muaf olan (kusur değil)

`__BOSLUK__` — 1 nokta. Bir devlet kimliği değil, *"burası kimsenin değildi"*
demenin veri karşılığı. Boyanmaması **tasarım**. Araçta ADIYLA ve
GEREKÇESİYLE muaf listesinde duruyor ⇒ bir sonraki oturum onu **kusur diye
ikinci kez keşfetmeyecek** (`§11`: *"kabul edilmiş borç kayıtsız kalırsa
yarın kusur diye yeniden bulunur"*).

---

## 3. 🔴 ARACIN KENDİ KUSURU — ve niçin buraya yazılıyor

**İlk sürümüm 26 SAHTE kusur bildirdi** ve listenin başında şunlar vardı:

```
suleyman-celebi   126 nokta · 194 dönem     "künye YOK"
avusturya         123 nokta · 142 dönem     "künye YOK"
musa-celebi        68 nokta · 136 dönem     "künye YOK"
ceneviz            25 nokta ·  25 dönem     "künye YOK"
```

Hiçbiri kusur değildi. Kusur **bendeydi**: künyeyi yalnız `id` ile aradım.
Oysa bir kimliğe giden **iki yol** var — künyenin kendi `id`si, **ve başka
bir künyenin `harita:` alanı.**

Ve bu ders `CLAUDE.md §11`de **zaten yazılıydı**:

> *"`js/app.js`te birleşim DOĞRUYDU ve uygulandı: `devletAdi()` yalnız `d.id`
> okuduğu için **30 gövde ham slug gösteriyordu** (`kaffa` · `sirbistan` ·
> `ceneviz` · `sovalye`…)"*

⇒ **Ölçüm doğruydu, EVREN dardı.** Ters dizin (`harita:` → kimlik) kuruldu,
**26 → 4.**

📌 Ve şunu ayrıca kaydediyorum: aracın ilk çıktısı **inandırıcıydı** —
sayılar büyüktü, isimler tanıdıktı, ve *"126 noktalık bir kimliğin künyesi
yok"* cümlesi acil görünüyordu. Bir kusur ne kadar büyük görünürse, aracın
kendisinden şüphelenmek o kadar zorlaşıyor. **Büyük bulgu, önce aracı
sınamak için sebeptir.**

---

## 4. C13 — iki yönde de sınandı

```
ATEŞLEME  --sinav    sahte kimlik enjekte edildi
          A dalı 🔴 1 · B dalı 🔴 5 · D dalı 🟡 1 · çıkış kodu 1     ✓ öttü
GEÇME     --gecme    bugünkü 4 kusur geçici muaf sayıldı
          A 0 · B 0 · "🟢 TEMIZ" · çıkış kodu 0                      ✓ sustu
```

⚠️ **Geçme yolu ZORLANMAK zorunda kaldı**, çünkü gerçek veride 4 kusur var
ve araç kendiliğinden hiç `0` döndürmüyordu. `§11`in tam vakası:
*"hangi yönün zorlanacağı önceden bilinmez"* — burada zorlanması gereken
**ateşleme değil geçme yoluydu.**

---

## 5. Aracın yeri — ve niçin `arac/` değil

Betik **`denetim/`** altına kondu, `arac/` altına **DEĞİL**.

```
ÖLÇTÜM     girdi.py:1168 `motor_izi()` YALNIZ üç dosyayı parmaklıyor:
           uret_petek.py · renkler.py · girdi.py
ÇIKARDIĞIM arac/ altına YENİ bir dosya koymak o üç özeti değiştiremez,
           yani koşan üretimi öldürmesi teorik olarak imkânsız
YAPTIĞIM   yine de arac/ dışında tuttum
```

Sebep: 1 Eylül 22:51'de başlayan koşu sürüyor ve `§11`de *"bir koşu 83 dakika
çalıştı ve öldü"* vakası var. Ölçümüm bu riski dışlıyor ama **maliyet
asimetriktir**: yanılırsam sekiz saatlik koşu gider, haklıysam kazandığım şey
dosyanın bir dizin soldaki hâli. ⇒ Taşımayı koşu bittikten sonra
koordinatör yapsın:

```bash
git mv denetim/denetle_etiket_ok104.py arac/denetle_etiket.py
```

**Kullanımı:**

```bash
py denetim/denetle_etiket_ok104.py .            # denetim
py denetim/denetle_etiket_ok104.py . --sinav    # ateşleme sınavı
py denetim/denetle_etiket_ok104.py . --gecme    # geçme sınavı
```

Çıkış kodu: `0` temiz · `1` kusur · `2` ayrıştırma çöktü (bu **temiz
değildir**).

---

## 6. Ölçülmeyenler — açıkça

- **Etiketin EKRANDA basılıp basılmadığını ölçmedim.** Bu araç veri
  katmanını sorar: *"kimliğin rengi ve adı var mı?"* Gövdenin gerçekten
  etiket taşıyacak kadar büyük çizilip çizilmediği `js/app.js` sorusudur ve
  o dosya benim değil. H-0026'daki Arnavutluk vakası tam bu ikinci sınıftı:
  kimliğin **rengi de künyesi de vardı**, ama gövde tek noktalık olduğu için
  etiket görünmüyordu. ⇒ **Bu araç o vakayı YAKALAMAZ.**
- **`donemler.js` / `devletler_harita.js` okunmadı** (12 ve 14 MB, üretilmiş).
  Yani *"çizilen gövde"* değil *"çizilecek kimlik"* ölçüldü.
