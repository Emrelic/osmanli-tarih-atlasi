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
