# TASARIM — EK OKUMA / MERAK BUTONLARI

**Oturum:** OPUS HAZIR KITA 84 · **Aşama 1 (ölçüm + tasarım)** · 24 Ağustos 2026
**Kaynak paketler:** `parti-emrelic-0032` · `0033` · `0034`
**Yazma yetkim:** yalnız bu rapor + `data/icerik_ekokuma.js`.
`js/app.js` · `index.html` · `css/` koordinatörde — kod değişikliği **tarif edildi, uygulanmadı.**

> **Bu raporda ölçüm ile çıkarım ayrı satırlardadır.** Ölçülmemiş her cümle
> `⚠️ ölçmedim` diye damgalıdır.

---

## 0. ÖNCE ŞU — ŞARTNAMENİN ÜÇ VARSAYIMI DA ÖLÇÜMLE DEĞİŞTİ

| # | Şartnamede | Ölçüm | Etkisi |
|---|---|---|---|
| ① | "≈11 madde" (koordinatör *kaba* dedi) | **30 madde** anahtar eşleşmesi | iş **~3 kat** büyük |
| ② | "Emre'nin istediği **beş** tür" | Emre **on bir** başlık saydı (`0034/H-0022`) | şema kararı değişir |
| ③ | "beş tür × **6064** madde" | ilgili havuz **1183 ayrık tarih** | payda **5 kat** küçük |

Üçü de aşağıda ölçümüyle duruyor. **Hiçbiri şartnamenin kusuru değil** —
koordinatör ①'i kendisi "kaba, doğrula" diye işaretledi; ②/③ ise paketin
içinde, listelenmemiş maddelerdeydi.

---

## 1. BUGÜNKÜ MEKANİZMA — koddan ölçüldü, belgeden değil

### 1.1 Veri

```
window.EKOKUMA   (data/ekokuma.js)    4 kart   → tur "sebep-sonuc" 4
window.MERAK     (data/merak.js)     14 kart   → tur "merak"      14
                                     ────────
                            TOPLAM   18 kart
mükerrer id 0 · karşılıksız bağlantı 0        ⇒ VERİ TEMİZ
```

🔴 **`magazin` türü KODDA VAR, VERİDE SIFIR KART.** Kayıtlı, etiketi yazılı,
kaynağı bağlı — ama onu dolduran tek bir kayıt yok. **Boş dal.**
📌 Bu, projenin *"denetim var ≠ o soruyu soruyor"* ailesinin veri tarafı:
mekanizma var, **kullanılmıyor** — ve dışarıdan bakan "üç tür çalışıyor" sanır.

### 1.2 Şema — iki ayrı biçim, ortak dört alan

```
ORTAK   (18/18)   id · tur · kesinlik · kaynak
sebep-sonuc (4)   + sebep · sonuc · bag · metin · zincir · olay
merak      (14)   + soru · kisa · goruşler · baglanti
```
⚠️ `goruşler` Türkçe **ş** ile yazılı; `js/app.js` ikisini de okuyor
(`k.goruşler || k.gorusler`). Yeni kayıtta bu tuzağa dikkat.

### 1.3 Bağlama sözleşmesi — `js/app.js:4913`

```js
function ekKartBagliMi(kart, o) {
  if (kart.tur === "magazin") return kart.t === o.t;      // TEK tarih, birebir
  var liste = kart.olay || kart.baglanti || [];
  return liste.indexOf(o.t) >= 0;                          // BİREBİR eşleşme
}
```
⇒ Bağlantı **tarih dizesiyle** kuruluyor, kimlikle değil. Tarih birebir
tutmazsa buton **hiç çıkmaz ve hiçbir yerde hata vermez.**

### 1.4 Tür kütüğü — `js/app.js:4918`

```js
var EKOKUMA_TUR = {
  "sebep-sonuc": { etiket: "🔗 Sebep-Sonuç", kaynak: … window.EKOKUMA },
  "magazin":     { etiket: "🎭 Magazin",     kaynak: … window.EKOKUMA },
  "merak":       { etiket: "❓ Merak",        kaynak: … window.MERAK   }
};
```

### 1.5 Yükleme — ana yüke katılmaz

`app.js:4893 ekOkumaMerakYukle()` iki dosyayı **ilk gerektiğinde** çeker;
`index.html`in statik yükünde yoklar. Dosya yoksa sessizce buton çıkmaz.

### 1.6 Kapsama — ölçüldü

```
kronoloji havuzu   19 dosya · 1226 madde · 1183 AYRIK TARİH
buton çıkan tarih  52
kapsama            %4,40
```

---

## 2. SORU ② — "Emre'nin beş türü şemaya sığıyor mu?"

**Soru eksik sorulmuş: Emre beş değil, ON BİR başlık saydı.** Üç ayrı yerde,
üç farklı genişlikte:

| Kaynak | Emre'nin saydıkları |
|---|---|
| `0032/H-0013` | merak · ek okuma · sebeb sonuç · magazin · dış yankılar **(5)** |
| `0034/H-0026` | ek okumalar · merak · kimdir · magazin · bilimsel teknik · dış ülke yankılar **(6)** |
| `0034/H-0022` | ek okumalar · merak · **tartışma** · sebeb sonuç · magazin · **teknik bilimsel yazılar** · **kimdir** · dış ülkelerdeki yankılar · **kahramanlık hikayeleri** · **menkıbeler** · **şok haberler** **(11)** |

🔴 **Ve `H-0026` bir içerik isteği değil, KALICI BİR TANIM İSTEĞİDİR:**

> *"ek okuma deyince daha önce söylediğim 7-8 madde anlaşılacaktır. **bunu
> claude ye yaz.** bunu söyle yazsınlar bir yere **bundan sonra ek okuma
> deyince bu başlıklar anlaşılacak**"*

⇒ Emre bir **sözlük maddesi** istiyor ve **projede hiçbir yerde yazılı
değil.** Bu, tek tek kart yazmaktan önce gelir: tanım yazılmadan her oturum
"ek okuma" derken başka bir şey anlayacak.

### Sığma tablosu

| Emre'nin başlığı | bugünkü `tur` | durum |
|---|---|---|
| merak | `merak` | ✅ var, 14 kart |
| sebeb sonuç | `sebep-sonuc` | ✅ var, 4 kart |
| magazin | `magazin` | ⚠️ **kod var, veri 0** |
| ek okumalar | — | 🔴 yok |
| dış (ülke) yankılar | — | 🔴 yok |
| kimdir | — | 🔴 yok |
| teknik / bilimsel | — | 🔴 yok |
| tartışma | — | 🔴 yok |
| kahramanlık hikâyeleri | — | 🔴 yok |
| menkıbeler | — | 🔴 yok |
| şok haberler | — | 🔴 yok |

**Cevap: HAYIR, sığmıyor.** 11 başlığın 3'ü karşılanıyor (biri boş), 8'i yok.

### 🔴 "EK OKUMA" İKİ ANLAMDA KULLANILIYOR — önce bu çözülmeli

```
ÜST AD olarak   pencere başlığı · dosya adı (ekokuma.js) · Emre'nin H-0026'sı
TÜR olarak      H-0013 ve H-0022 listelerinde ötekilerle YAN YANA bir kalem
```
İkisi aynı anda olamaz. Eğer `tur:"ek-okuma"` yazılırsa, `ekokuma.js` dosyası
hem üst kap hem alt tür olur ve bir sonraki oturum hangisi olduğunu bilemez.
**Önerim:** üst ad **"EK OKUMA"** kalsın; Emre'nin listesindeki kalem
`tur:"ek-okuma"` değil **`tur:"okuma"`** (ya da `"kaynakca"`) diye ayrışsın.
⚠️ Bu bir **adlandırma kararı** ve Emre'nin isteğini yorumluyor — **onay
gerektirir**, kendiliğimden uygulamıyorum.

---

## 3. SORU ③ — buton metni

**Bugünkü metin, `js/app.js:4939`:**
```js
b.textContent = EKOKUMA_TUR[tur].etiket + (eslesen.length > 1 ? " (" + eslesen.length + ")" : "");
```
⇒ Metin **SABİT**: tür etiketi + (birden çoksa) sayı. Kartın **konusu butonda
görünmüyor.** Buton **kart başına değil TÜR BAŞINA** çıkıyor.
⇒ `H-0008` bugünkü davranışı **doğru tarif ediyor**, şikâyet **geçerli.**

### 🟢 Ve istenen alan ZATEN VAR

```
kisa:   14 merak kartının 14'ünde DOLU
        sebep-sonuc kartlarının 0'ında
```

⇒ **İki kelimelik ipucu için yeni alan gerekmiyor.** `kisa` yazılıyor, sadece
**butona basılmıyor.** Bu, koordinatörün uyardığı *"altyapı zaten vardı"*
tuzağının **üçüncü** yüzü: mekanizma var (§1), tür var ama boş (`magazin`),
**alan var ama gösterilmiyor** (`kisa`).

### Tarif edilen kod değişikliği (koordinatör uygular — `app.js:4939`)

```
tek kart eşleşiyorsa :  etiket + " · " + kart.kisa
birden çok ise       :  etiket + " (" + n + ")"     ← bugünkü davranış korunur
kisa yoksa           :  bugünkü davranış             ← geriye uyumlu
```
Ek iş: `sebep-sonuc` kartlarına `kisa` alanı yazılmalı (4 kart).
⚠️ Buton genişliği/taşma **ölçmedim** — `css/` bende değil, `.ob-ek-btn`
uzun metinle nasıl davranıyor bilmiyorum. Arayüz tarafı bunu görsün.

---

## 4. SORU ④ — İÇERİK NEREDEN, KAÇ MADDEDE? (en önemli soru)

### 4.1 🔴 Önce payda düzeltmesi

Şartname *"beş tür × 6064 madde devasa"* diyor. **6064 yanlış payda.**

```
6064   data/kronoloji_*.js   → YERLEŞİM SAHİPLİK kronolojisi
1183   data/olaylar*.js      → KULLANICIYA GÖRÜNEN panel  ← butonlar BURAYA bağlanıyor
```
`ekKartBagliMi` `o.t` ile eşleşiyor ve `o` panelin olay kaydı. ⇒ Gerçek payda
**1183 ayrık tarih.** İş devasa değil, **beşte bir.**
⚠️ *"6064 havuzunda buton hiç çıkmıyor"* — bunu **ölçtüm** (bağlantıların
tamamı `olaylar*.js` tarihleriyle eşleşiyor, 0 karşılıksız); ama o havuzun
panele **hiç** girmediğini ayrıca ölçmedim. `⚠️ kısmen ölçüldü`

### 4.2 Emre'nin kendi cevabı — `0034/H-0022`

> *"her kronoloji maddesi içeriği için bunlardan neler ekleyebiliriz bakalım
> **1 yada 3 yada 5 sayı önemli değil**"*

⇒ **Üniform kapsama İSTENMİYOR.** Madde başına değişken, içeriğe göre.

### 4.3 ÖNERİM — üç kova, ve yalnız ikisi elle yazılır

**A · KURALLA ÜRETİLİR (elle araştırma YOK)**
`0034/H-0010`: *"tüm anlaşma içeren kronolojik maddelerin içine anlaşma metni
butonu… **tüm anlaşma kronoloji maddeleri için bu standart olsun**"*
`0034/H-0024` aynı şeyi tekrarlıyor. Bu bir **tür değil kural**: antlaşma
maddesi ⇒ buton. `data/savaslar.js` **33 antlaşma** taşıyor.
⚠️ Antlaşma kaydı ile kronoloji tarihinin kaç maddede eşleştiğini **ölçmedim.**

**B · ELLE YAZILIR — Emre'nin ADIYLA istediği maddeler**
Ölçülen 30 maddenin adlı olanları: Topkapı · Osmanlı altını · Fâtih'in ölümü ·
Otranto · Gedik Ahmed Paşa · Pîrî Reis · Sokollu · tağşiş/akçe krizi · Kanije
ve Tiryâki Hasan Paşa · Kuyucu Murad Paşa · Celâlî isyanları · Sultanahmet
Camii · ekberiyet usulü · I. Mustafa'nın cülûsu ve hal'i · II. Osman ·
IV. Murad (içki yasağı dâhil) · Hezârfen · Lagarî · Evliyâ Çelebi · Deli
İbrahim · Kemankeş Mustafa Paşa · Kâtip Çelebi · Merzifonlu Kara Mustafa Paşa ·
III. Mehmed'in cülûsu.
**Aşama 2'nin gerçek işi budur ve ~24 konu başlığıdır — 11 değil.**

**C · ŞİMDİLİK KAPSAM DIŞI**
Kalan ~1130 tarih. Ne kural ne adlı istek var. **Boş bırakılır ve bu
kayda geçer** — yoksa yarın "eksik" diye yeniden keşfedilir.

### 4.4 Ve `0034/H-0040` — Emre bir SİSTEM istiyor

> *"TÜM MADDELERİN İÇERİĞİNİ GÖRÜP ONA GÖRE EK OKUMALAR İLE DONATAN BİR YAPI
> YAPALIM. EK OKUMA MADDELERİ ZATEN BELLİ"*

⇒ Nihai istek tek tek kart değil, **maddeye bakıp hangi türlerin uyduğuna
karar veren bir yapı.** B kovası o yapının **eğitim kümesi** olur.
⚠️ Böyle bir yapının nasıl kurulacağını **tasarlamadım** — kapsamım Aşama 1.

---

## 5. 🔴 KOORDİNATÖRE — CEVAPLANMADAN AŞAMA 2'YE GEÇEMEM

### ① AD ALANI ÇAKIŞMASI — bu, şartnamenin kendi uyarısının vakası

Bana verilen: `data/icerik_ekokuma.js` → `window.ICERIK_EKOKUMA`.
Zaten var olan: `data/ekokuma.js` → `window.EKOKUMA` · `data/merak.js` → `window.MERAK`.

⇒ Aynı özellik **üç dosya, üç ad alanı** olur. Şartname bana *"iki mekanizma
olursa biri bayatlar"* diye yazdı — **üçüncüsünü yazmam tam olarak o.**
Ve `EKOKUMA_TUR` her türü **tek bir kaynağa** bağlıyor; yeni türler benim
dosyamdan gelirse kütük üç kaynağa bölünür.

**Üç şık, önerim ②:**
| | ne | bedel |
|---|---|---|
| A | benim dosyam yalnız YENİ türleri taşır | üç kaynak, en karmaşık |
| **B** | **yeni türler mevcut iki dosyaya yazılır; ben o dosyaların sahibi olurum** | **tek mekanizma kalır** ← önerim |
| C | üçü tek dosyada birleşir | en temiz, ama göç işi ve `app.js` değişir |

**B'yi öneriyorum** çünkü ad alanı sayısını artırmıyor ve `EKOKUMA_TUR`
bugünkü hâliyle çalışmaya devam ediyor. **Ama `ekokuma.js`/`merak.js` bana
verilmedi — sahipliği sen devretmeden dokunmam.**

### ② "EK OKUMA" TANIMI — Emre açıkça istedi, hiçbir yerde yazılı değil
`H-0026`: *"bunu bir yere yazsınlar."* Nereye? `CLAUDE.md` senin dosyan.
Tanımı yazabilirim ama **yerini sen söyle.**

### ③ 11 TÜRÜN HEPSİ Mİ?
`EKOKUMA_TUR`'a 8 tür eklemek kod tarafında ucuz (kayıtsız tür buton
çıkarmıyor — `if (!eslesen.length) return`). Ama **11 ayrı buton** arayüz
kararıdır ve arayüz sende. Hepsi mi, yoksa `H-0026`'nın 6'sı mı?

### ④ ÖNCE HANGİSİ — A kovası (kural) mı B kovası (adlı maddeler) mi?
A ucuz ve 33 maddeyi bir kerede kapatır. B Emre'nin adıyla istediği.
**Önerim: önce A**, çünkü kuralı yazmak bir kez, kartı yazmak yirmi dört kez.

---

## 6. ÖLÇMEDİKLERİM — açıkça

- Butonun **görsel** hâli. `.claude/launch.json` ve `css/` bende değil;
  10 Ağustos oturumu da aynı sebeple gözle doğrulayamamış. **Hâlâ açık.**
- `savaslar.js`'teki 33 antlaşmanın kaçının kronoloji tarihiyle eşleştiği.
- 6064'lük havuzun panele hiç girmediği (kısmen ölçüldü, §4.1).
- 30 maddenin **tamamının** ek-okuma isteği olduğu — anahtar kelimeyle
  süzdüm, **elle teyit etmedim.** Yanlış pozitif olabilir; sayı **~30**.

## 7. YANLIŞ ALARM VERMEDİM — kayda geçsin

`js/app.js:4911` ve `:4988` satırlarını okuma aracı `\` ile başlıyor gibi
gösterdi — JavaScript'te sözdizimi hatası olurdu. Hüküm vermeden önce
ölçtüm: `node --check js/app.js` **çıkış 0**, ve baytlar `//` diyor
(0x08 · 0x00 yok). **Kusur dosyada değil, ARACIN GÖSTERİMİNDEYDİ.**
📌 `CLAUDE.md §11`in *"aletin gösterdiği ≠ dosyada yazan"* dersinin ters
yönü: orada araç bir kusuru **gizlemişti**, burada **olmayan bir kusuru
gösterdi.** İkisinin de çaresi aynı: `Read`'e değil **bayta** sor.

---
---

# EK — AŞAMA 2 AÇILIŞI (koordinatörün dört cevabından sonra)

## 8. (d) ÖLÇÜM — ANTLAŞMA KURALI KAÇ MADDEYİ KAPATIR?

### 8.1 Önce sayı düzeltmesi: **33 değil 41**

```
data/savaslar.js  ANTLASMALAR  →  41 kayıt
```
Şartname (ve `CLAUDE.md §5`) **33** diyor. Bir bayat sayı daha.

### 8.2 Kronoloji tarihine oturma

```
41 antlaşmanın 37'si  olaylar*.js'te BİREBİR bir t: değerine oturuyor
                  4'ü OTURMUYOR
```

🔴 **Ve oturmayan dördü de kronolojide VAR — tarihleri tutmuyor:**

| antlaşma | `savaslar.js` | `olaylar*.js` | fark |
|---|---|---|---|
| Vasvar | `1664-08-10` | `1664-08-09` | 1 gün |
| Yaş | `1792-01-09` | `1792-01-10` | 1 gün |
| Uşi | `1912-10-18` | `1912-10-15` | 3 gün |
| Sırbistan özerklik fermanı | `1830-08-30` | `1830-11-08` | 70 gün |

⇒ İki dosya aynı olayın gününde **çelişiyor**. `ekKartBagliMi` birebir
eşleştirdiği için bu, butonu **sessizce hiç çıkarmaz** — ne hata verir ne
denetim öter.
📌 Bu, *"bir gün fark bir özelliği görünmez yapar"* sınıfı ve **denetimsiz.**
⚠️ **Hangisinin doğru olduğunu ÖLÇMEDİM** ve `olaylar*.js` ile
`savaslar.js` benim dosyalarım değil — **düzeltmedim, bildiriyorum.**
(Uşi'de 15 Ekim gizli ön-antlaşma / 18 Ekim alenî antlaşma ayrımı olabilir;
Sırbistan'da ferman**ın çıkışı** ile Belgrad'da **okunuşu** ayrı olabilir.
İkisi de **tahmin** — `⚠️ ölçmedim`.)

### 8.3 🔴 ASIL CEVAP: TDV "METİN" VERMİYOR, "HÜKÜM ÖZETİ" VERİYOR

Koordinatörün sorusu: *"kaç tanesinin TDV maddesinde maddeleri
özetleniyor? 'Metin' değil 'hükümleri' basmak da meşru olabilir."*

**Ölçüm — dört tur slug denemesi, sonra GÖVDE okuması:**

| kova | ne | sayı |
|---|---|---|
| **A** | TDV'nin **kendi** maddesi, hükümler zengin → **kuralla yazılır** | **16** |
| **B** | TDV'nin kendi/kapsayıcı maddesi, hüküm işareti seyrek → **okunarak** | **10** |
| **C** | başka maddeye düşüyor (şehir/kişi) → hüküm özeti beklenmez | 8 |
| **D** | gövde şüpheli/kısa → **"çekilemedi"**, "yok" değil | 2 |
| **E** | dört turda da bulunamadı → **`bulunamadı`** | 5 |

```
ÜST SINIR (A+B) = 26 / 41  =  %63
```

⇒ **Cevap: evet, "hükümleri" basmak meşru — çünkü BAŞKA SEÇENEK YOK.**
TDV antlaşma **metni** yayımlamıyor; verdiği şey madde madde **hüküm
özeti.** En saf örnek `baltalimani-muahedesi`:
> *"Yedi maddeden ibaret birinci kısmın ilk maddesi…"* · *"Üçüncü madde…"* ·
> *"Beşinci madde Boğazlar'dan geçecek gemilere…"*

### 8.4 🔴 BU YÜZDEN BUTONUN ADI DEĞİŞMELİ — onay gerekiyor

Emre `0034/H-0010`'da **"anlaşma metni butonu"** dedi. Ama ölçüm diyor ki
elimizde **metin yok, hüküm özeti var.**
⇒ Buton **"📜 Antlaşma metni"** derse kullanıcıya **olmayan bir şey** vaat
eder; basınca özet görür ve *"metin nerede"* der.
**Önerim: "📜 Antlaşma hükümleri".**
⚠️ Bu Emre'nin **kendi kelimesini** değiştirmektir — **koordinatörün onayı
olmadan uygulamam.**

### 8.5 Ve `0034/H-0010`'un "STANDART olsun" isteği tam karşılanamaz

Kural en iyi hâlde **26/41 (%63)** kapatır. Kalan 15'te buton **çıkmaz**.
İki şık: (a) buton yalnız hükmü olanlarda çıkar — dürüst ama düzensiz;
(b) hepsinde çıkar, olmayanda *"TDV'de hükümleri özetlenmiyor"* yazar —
düzenli ve **`bulunamadı`yı bir sonuç olarak gösterir.**
**Önerim (b)** — projenin kendi kuralı: *"bulamadığını `bulunamadı` yaz."*

### 8.6 §4 DERSİ — yeni bir yazım ekseni ölçüldü

`balta-limani-antlasmasi` 302 · `baltalimani-antlasmasi` 302 · `baltalimani` 302
**`baltalimani-muahedesi` → 200**, 16 KB, hükümler madde madde.
⇒ **TDV bazı antlaşmaları "ANTLAŞMASI" değil "MUAHEDESİ" diye adlandırıyor.**
Aynı turda `akkerman` 302 · **`akkirman` 200** (Türkçe yazım ekseni).
📌 `§4`ün *"dar slug tutmazsa kapsayıcıyı dene"* kuralına **üçüncü bir
eksen**: *ANTLAŞMASI ↔ MUAHEDESİ*. Üçüncü/dördüncü tur **21 → 26** yaptı.

⚠️ **Ölçemediğim:** TDV'nin **arama** sayfası (`/arama/?q=`) sonuçları JS
ile yüklüyor; `curl` yalnız kabuk döndürüyor. ⇒ E kovasının 5'i için hüküm
**"bulunamadı" değil "ARAMA ÖLÇÜLEMEDİ"**. Tarayıcı ile bakan biri
bulabilir.

---

## 9. (b) "EK OKUMA" TANIMI — taslak, `CLAUDE.md`ye koordinatör işler

> ### EK OKUMA — ne demektir
> **"Ek okuma", kronoloji maddesinin altında açılan kart ailesinin ÜST
> ADIDIR** — tek bir tür değil. Emre'nin beyanı: `0034/H-0026`.
>
> **KAPSAR** (altı tür, `0034/H-0026`):
> merak · kimdir · magazin · sebep-sonuç · teknik-bilimsel · dış yankılar
>
> **KAPSAMAZ — ve sınanabilir olan budur:**
> - **maddenin kendi anlatımını** (o `b:` alanıdır; ek okuma onu tekrar etmez)
> - **görsel seçimini** (`0032/H-0010` ayrı bir iştir, buton değildir)
> - **kaynakçayı** (`kaynak:` alanı zaten var)
> - **haritayı ya da sınırı** ilgilendiren hiçbir şeyi — ek okuma
>   **hiçbir zaman** bir `d:`/`s:`/`v:` dönemini değiştirmez
> - **kaynaksız anekdotu.** "İlginç hikâye" isteği bir kaynak muafiyeti
>   değildir; `§4` aynen geçerlidir ve bulunamayan `bulunamadı` yazılır.
>
> **ÖLÇÜSÜ:** bir kart, maddeyi okuyan birinin *"peki ya…"* diye soracağı
> şeye cevap veriyorsa ek okumadır; maddeyi **özetliyorsa** değildir.

📌 Kapsamayanı yazmak kapsayanı yazmaktan değerli — koordinatörün isteği
buydu ve projenin `§4` dersiyle aynı: *"olumlu tarif neredeyse boştur,
sınanabilir olan neyin DIŞARIDA olduğudur."*

---

## 10. (c) ON BİR TÜR — HEDEF olarak kayda geçti

Koordinatör kararı: **`0034/H-0026`'nın ALTISI ile başla.** Gerekçesi
ölçülebilir ve bu raporun bulgusuna dayanıyor (`magazin`: kodda var, veride
sıfır — boş dal zaten bir tane var).

| # | tür | bugün | hedefte |
|---|---|---|---|
| 1 | merak | ✅ 14 kart | başlangıç kümesi |
| 2 | sebep-sonuç | ✅ 4 kart | başlangıç kümesi |
| 3 | magazin | ⚠️ kod var, **veri 0** | başlangıç kümesi |
| 4 | kimdir | 🔴 yok | başlangıç kümesi |
| 5 | teknik-bilimsel | 🔴 yok | başlangıç kümesi |
| 6 | dış yankılar | 🔴 yok | başlangıç kümesi |
| 7-11 | tartışma · kahramanlık hikâyeleri · menkıbeler · şok haberler · okuma | 🔴 yok | **HEDEF** — `0034/H-0022`, Emre'ye koordinatör götürecek |

⚠️ 4-6 için `EKOKUMA_TUR`'a üç tür eklenmeli — **`js/app.js` koordinatörde**,
tarif bu tablodur, uygulamayı o yapar.

---

## 11. YAPILAN İŞ — `kisa` dolduruldu

Koordinatörün bulgusu doğruydu: `EKOKUMA`'nın 4 kartının 4'ünde `kisa`
**yoktu** (alan hiç tanımlı değildi).

```
ÖNCE   MERAK 14/14 dolu · EKOKUMA 0/4
SONRA  MERAK 14/14      · EKOKUMA 4/4      ⇒ 18/18
node --check data/ekokuma.js   çıkış 0
mükerrer id 0 · karşılıksız bağlantı 0 · id/tur/kaynak eksik 0
```

42 karakterlik kırpmadan sonra butonda görünecek hâli **sınandı** — dördü de
kancayı ilk 42 karaktere taşıyor:
```
🔗 Sebep-Sonuç · Kuruluş ânı hâlâ tartışmalı: ocak bir günd…
🔗 Sebep-Sonuç · Beş yıl arayla iki zıt çözüm: Sırbistan il…
🔗 Sebep-Sonuç · Ankara'yı bir hânedan değil bir ESNAF-FÜTÜ…
🔗 Sebep-Sonuç · Dört asırlık düzeni bitiren şey bir fetih …
```
📌 `kisa` "iki kelime" değil kartın **iddiasıdır**; dördü de kartın kendi
`bag:` alanındaki kaynaklı içerikten çıkarıldı, yeni bir iddia eklenmedi.

⚠️ **Görsel olarak doğrulanmadı** — koordinatör bu doğrulamayı üstlendi.
