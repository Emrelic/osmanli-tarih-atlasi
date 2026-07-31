# Oturum 14 — Nil vadisi: Kavalalı zincirinin SONU

**Araştırma oturumu — `data/` altına hiçbir şey yazılmadı.**
Görev: A5 zincirin **başını** düzeltti (1805-07-03); bitişleri hiç doğrulanmadı.

---

## 0. 🔴 Baş bulgu — zincirin sonu ikiye bölünmüş

118 Kavalalı/Hidiv `v:` dönemi tarandı. Bitiş tarihi dağılımının sonu:

| Bitiş | Kayıt |
|---|---|
| … | … |
| 1885-01-26 | 19 |
| **1914-11-05** | **43** |
| **1914-12-18** | **13** |

**Aynı olay, iki tarih, aynı katman.** 43 + 13 = 56 — A5'in saydığı Mısır
katmanının tamamı.

İki bağımsız yöntemle ölçtüm (gevşek blok eşleştirmesi ve katı `},` sınırlı
eşleştirme), ikisi de **43 / 13** verdi. Kuveyt ve Yirgalem ilk taramada
yanlış pozitif çıkmıştı; katı ölçüm ikisini de dışarıda bıraktı — **43'ün
43'ü Mısır kaydı.**

## 0a. 🔴 VE BU 43 KAYIT BENİM ÖLÇMEDİĞİM KAYIT

Dürüst olmam gerek: `1914-11-05 → 1914-12-18` düzeltmesini **ben önerdim**
(`OTURUM-14-DUZELTMELER §1`) ve listeme **10 kayıt** yazdım. Merkez onları
uyguladı — bugün `1914-12-18` taşıyan 13 kaydın kaynağı bu (10 + kendi
yazdığım 4 vaha, biri örtüşüyor).

**Gerçek kapsam 10 değil 56'ydı.** Kalan 43'ü hiç ölçmedim, çünkü listeyi
çekirdek dosyaya bakarak çıkardım; Mısır katmanının büyük kısmı
`yerlesimler_afrika.js`'te duruyor.

> Bu tam olarak dün adını koyduğunuz sınıf: **yön doğru, ölçek ölçülmemiş.**
> A5 Kavalalı'nın başında "altı kayıt" dedi, 56 çıktı. Ben Kavalalı'nın
> sonunda "10 kayıt" dedim, 56 çıktı. **Aynı zincirin iki ucunda, aynı hata,
> iki ayrı oturum** — üstelik benimki önce oldu ve A5'inkini uyarabilecekken
> uyarmadı.

## 0b. 🔴 DENETİM BUNU YAKALAMIYOR — ve sebebi öğretici

`Değişmez 2` bu 43 kırılmayı **temiz** raporluyor. Sebep:

```
olaylar.js:  t:"1914-11"  "I. Dünya Savaşı'na giriş"     → ay hassasiyeti
             ay hassasiyetli tarih ayın 1'ine genişler   → 1914-11-01
             43 kırılma 1914-11-05'te                    → fark 4 GÜN
             ±30 gün ölçütü                              → ✅ TEMİZ
```

Yani **43 Mısır kasabası, Osmanlı'nın savaşa girişi maddesinin altında el
değiştiriyor.** Kullanıcı 1914 sonuna geldiğinde haritada Mısır'ın renk
değiştirdiğini görüyor, yanındaki listede "I. Dünya Savaşı'na giriş" okuyor.

`CLAUDE.md §10`'un tarif ettiği şikâyetin ta kendisi — ve **denetim temiz
diyor.** `1914-11` maddesinin ay hassasiyetinde olması (CLAUDE.md §8'in
yasakladığı şey) bu körlüğü tek başına üretiyor.

📌 **Doğru tarih zaten kronolojide var:**
`olaylar_ek5.js` → `1914-12-18 "Mısır'ın İngiliz himayesine alınarak
sultanlık ilan edilmesi"`. Yani 13 kayıt doğru maddeye bağlanıyor, 43 kayıt
alâkasız bir maddeye. **Kronoloji doğru, veri geride.**

---

## 1. Hangi tarih doğru? — TDV bir gün fark veriyor

| Kaynak | Tarih | Ne diyor |
|---|---|---|
| Verideki madde (`olaylar_ek5.js`) | **18 Aralık 1914** | himaye + sultanlık ilânı |
| TDV `abbas-hilmi-ii` ✅ CANLI | **19 Aralık 1914** | *"19 Aralık 1914'te İngiltere Mısır'ı himayesine aldı"* |

### 1a. Çelişki değil — ardışık iki olay

Standart kayıt ikisini ayırır: **18 Aralık** himaye ilânı, **19 Aralık**
Hidiv Abbas Hilmi'nin azli ve Hüseyin Kâmil'in sultan ilânı. TDV'nin maddesi
**hidivin kendi maddesi** olduğu için tarihi *azil gününden* veriyor.

**Harita için hangisi doğru?** `v:` dönemi bir **tâbiiyet** ilişkisidir
(Kavalalı hanedanı, Osmanlı vasalı). Onu bitiren şey hanedanın değişmesi
değil — hanedan devam etti, Hüseyin Kâmil aynı aileden — **metbûun
değişmesidir.** Osmanlı hukukî hükümranlığını bitiren **18 Aralık himaye
ilânıdır.**

⇒ **Önerim: `1914-12-18` kalsın, 43 kayıt ona hizalansın.** Veri değil,
verinin çoğunluğu yanlış; azınlık (13) doğru.

### 1b. 🔴 Ve mevcut maddenin `kaynak:`ı fakir — §5'te ÖLÇÜLDÜ

Madde `kaynak:"misir"` diyor. İlk çekimde tarih bölümünün 1780-90'larda
bittiğini gördüm ama **kesin konuşmadım**: uzun ülke maddeleri bölümlere
ayrılıyor, çektiğim gövde eksik olabilirdi.

> ⇒ **Sonradan hedefli olarak ölçüldü ve şüphe doğrulandı: §5a.**
> `misir`'in tarih anlatısı gerçekten 1786'da bitiyor; eksik çekim değil,
> **fakir slug.** Üstelik sorun bu maddeye özgü değil — `kaynak:"misir"`
> kullanan **dokuz maddenin dokuzu** da 1786 sonrasını anlatıyor (§5b).

**Önerim:** maddenin `kaynak:`ı `misir` → **`abbas-hilmi-ii`**. Metni
değiştirmez, yalnız atfını sağlamlaştırır.

---

## 2. Uygulanacak — 43 kayıt

`1914-11-05` → `1914-12-18`. **Kuveyt DEĞİŞMEZ** (aşağıda), Yirgalem'in
zincirinde Kavalalı dönemi yok.

Delta bölgesi ve Aşağı Mısır (15): Demenhûr · Dessûk · Kafrüşşeyh ·
Bürüllüs (Baltîm) · Tanta · Mahalletülkübrâ · Şibînülkûm · Benhâ · Mansûre ·
Mît Gamr · Menzile · Bilbîs · Fâkūs · Sâlihiyye · Ebûkîr

Kanal ve Sînâ (5): Portsaid · İsmâiliye · Katye · El-Arîş · Tûr (Sînâ)

Batı çölü ve kıyı (2): Mersâ Matruh · Sellûm

Orta Mısır (8): Atfîh · Benî Süveyf · Feyyûm · Behnesâ · Minye · Mellevî ·
Deyrût · Tahtâ

Yukarı Mısır (9): Ahmîm · Cirge · Ferşût · Kına · Kūs · Uksur · Esna · Edfû ·
Kûm Ombo

Kızıldeniz kıyısı (3): Kusayr · Sefâce · Ebû Ramâd (Şalâtîn)

Nübye (1): Vâdî Halfâ

**Toplam 43.**

### 2a. ⚠️ KUVEYT DEĞİŞMEZ — ve sebebini yazıyorum ki tekrar sorulmasın

Kuveyt'in `1914-11-05`i **doğru ve başka bir olaydır**: İngiltere'nin Osmanlı
ile savaş hâline girmesi ve Kuveyt'i bağımsız şeyhlik olarak tanıması.
Mısır himayesiyle alâkası yok, aynı güne düşmesi tesadüf.

`DUZELTMELER §1`'de de dışarıda bırakmıştım; **o kararım doğruydu, eksik
olan yanı kapsamdı.**

### 2b. Denetime beklenen etki

- `Değişmez 2`: 43 kırılma `1914-11-05`ten `1914-12-18`e taşınır. Yeni tarihte
  **madde zaten var** (`olaylar_ek5.js`), yani açık **üretmez** —
  ve 43 kırılma "I. Dünya Savaşı'na giriş"in altından çıkıp doğru maddesine
  bağlanır. **Sayı değişmez, doğruluk değişir.**
- `1914-11-05` tarihi veriden **tamamen kalkar** (Kuveyt hariç).
- `Değişmez 3` etkilenmez (`m:` bağları oynamıyor).

---

## 3. 🔴 AÇIK KALAN ASIL SORU — 1882 veride HİÇ YOK

Zincirin sonunu ölçerken çıktı ve sizin sorunuzun ikinci yarısıydı
(*"1882 İngiliz işgali mi, 1914 himaye ilânı mı"*). Cevap:

> **1882 hiçbir Mısır kaydında geçmiyor.** Bütün yerleşim dosyalarında
> `1882` içeren tek kayıt **Aseb** ve o da İtalya ile ilgili.

### 3a. Bu bir hata mı? — Hayır, ama eksik

`v:`/`d:`/`s:` **hukukî** ekseni tutar. 1882'de Mısır'ın hukukî statüsü
**değişmedi**: hidivlik Osmanlı vasalı olarak sürdü, İngiltere işgal etti
ama ilhak etmedi. Bu yüzden 1882'de bir `v:` sınırı **olmaması doğrudur.**

🔴 **Ama kullanıcının `hatalar 11 md.41-42` şikâyeti tam da buydu**: haritada
1882'de hiçbir şey olmuyor. Ve doğru çözümü zaten teşhis edilmişti —
**`isg:` örtüsü.** Ölçtüm:

```
data/yerlesimler.js         isg: 3 kayıt  (üçü de Bosna)
data/yerlesimler_afrika.js  isg: 0 kayıt
```

⇒ **Mısır'da tek bir `isg:` örtüsü yok.** Ne 1882 İngiliz örtüsü, ne
`DUZELTMELER §18`'de kesinleştirdiğim Napolyon örtüsü uygulanmış.

### 3b. Öneri

1882-1914 arası İngiliz işgali için `isg:` örtüsü, **56 Mısır kaydına**:
```js
isg:[{f:"1882-09-13", t:"1914-12-18", d:"ingiltere", kaynak:"❓"}]
```
- **Başlangıç `1882-09-13`** — Tel el-Kebîr Muharebesi, `olaylar_ek9.js`'te
  maddesi var (benim yazdığım). Kahire'nin düşüşü ve Urâbî ordusunun dağılması.
- **Bitiş `1914-12-18`** — himaye ilânı; o tarihte örtü gereksizleşir çünkü
  `s:"ingiltere"` başlar.
- `kaynak:` **`urabi-pasa`** — ❓ **kapandı, §5e.** Madde 1882'yi gün gün
  veriyor (*"13 Eylül'de … Tellülkebîr"*) ve başlangıç tarihimi bağımsız
  olarak doğruluyor.

⚠️ **Bu 56 kayıtlık bir iştir ve ölçüsünü şimdi yazıyorum ki üçüncü kez aynı
hataya düşmeyelim.** `isg:` kırılma üretmediği için (`DUZELTMELER §18a`)
kronoloji borcu doğurmaz; maliyeti yalnız 56 satır düzenleme.

---

## 4. Özet

| Bulgu | Durum |
|---|---|
| Zincir sonu 43/13 bölünmüş | 🔴 **43 kayıt düzeltilecek**, liste §2'de |
| Doğru tarih hangisi | ✅ `1914-12-18` — gerekçe §1a |
| TDV bir gün fark veriyor | 🟡 ardışık iki olay, çelişki değil |
| Maddenin `kaynak:`ı | 🟡 `misir` → `abbas-hilmi-ii` önerildi |
| Denetim neden görmedi | 🔴 `1914-11` ay hassasiyetli, 4 gün uzakta |
| Kuveyt | ✅ değişmez, ayrı olay |
| 1882 | 🔴 veride hiç yok — `isg:` örtüsü gerekli, 56 kayıt |
| Zincir **başı** (1805-07-03) | A5'in işi, dokunmadım |

**Ölçülmüş kapsam: 43 kayıt (hizalama) + 56 kayıt (`isg:` örtüsü).**
İkisi de `yerlesimler.js` ve `yerlesimler_afrika.js`'te, yani sizde.

---

# 5. `kaynak:"misir"` ölçüldü — **fakir slug, kesin. Ve dokuzunun dokuzu.**

## 5a. Ayrım yapıldı: eksik çekim DEĞİL

Hedefli çekim istediniz. Maddenin **yapısını** çektim, özetini değil:

| # | Bölüm | Yazar | Kapsadığı yıllar |
|---|---|---|---|
| I | Fizikî ve Beşerî Coğrafya | Suna Doğaner | — |
| II | Tarih — Başlangıçtan Bizans'a | Hilal Görgün | ~MÖ 5000 – 395 |
| | Bizans Dönemi | Casim Avcı | 306 – 642 |
| | Fetihten Osmanlı Dönemine | Cengiz Tomar | 640 – **1517** |
| | **Osmanlı Dönemi** | Seyyid Muhammed es-Seyyid | 1517 – **1786** |

**Son cümle** (birebir): *"Bâbıâli ise Fransızlar'ın Mısır'a girişine kadar
bu durumu kabul etmek zorunda kaldı."*

🔴 **Bu eksik çekim değil, üç sebeple:**
1. **Bölüm yapısı eksiksiz geldi** — beş bölüm, yazar adlarıyla. Çekim
   kesilseydi yapı da kesilirdi.
2. **Son cümle bir kapanış cümlesi**, yarım kalmış bir cümle değil.
3. İki ayrı çekim, iki ayrı istem, **aynı terminus**: 1786.

⇒ **`misir` maddesinin tarih anlatısı 1786'da bitiyor.** Fransız işgalinin
arifesinde, kasıtlı olarak. Modern Mısır bu maddede yok.

## 5b. 🔴 Dokuz maddenin DOKUZU da 1786'dan sonra

`kaynak:"misir"` kullanan **9 madde** var. Tarihleri:

| Tarih | Madde | 1786 sonrası? |
|---|---|---|
| 1798-07 | Napolyon'un Mısır'ı işgali | ✗ |
| 1798-09-03 | Fransa'ya savaş ilanı | ✗ |
| 1801-10-09 | Mısır'ın Fransızlardan tahliyesi | ✗ |
| 1802-06-25 | Paris Antlaşması | ✗ |
| 1805-07-09 | Mısır valiliği fermanı | ✗ |
| 1807-03-17 | Fraser seferi | ✗ |
| 1841-06-01 | Valiliğin irsî bırakılması | ✗ |
| 1882-09 | Mısır'ın İngiliz işgali | ✗ |
| 1914-12-18 | İngiliz himayesi ve sultanlık | ✗ |

**Kısmî değil, tam.** `misir`'i kaynak gösteren her madde, maddenin
anlatmadığı bir dönemi anlatıyor. Şüphem doğruymuş ve tahmin ettiğimden
temiz çıktı: ayıklanacak bir alt küme yok, dokuzu da taşınacak.

## 5c. 🔴 İKİSİNİN TARİHİ DE YANLIŞ — ve doğrusu veride zaten var

Doğru maddeyi (`kavalali-mehmed-ali-pasa`, ✅ canlı, 1769-1849) çekince
çıktı:

| Madde | Yazan tarih | TDV `kavalali-mehmed-ali-pasa` | Veri ne diyor |
|---|---|---|---|
| Valilik fermanı | `1805-07-09` | *"valiliğe getirildi **(3 Temmuz 1805)**"* | **1805-07-03** (56 kayıt) ✅ |
| İrsî ferman | `1841-06-01` | *"**24 Mayıs 1841** tarihli bir fermanla…"* | **1841-05-24** (4 kayıt) ✅ |

🔴 **İki maddede de veri TDV ile uyuşuyor, KRONOLOJİ uyuşmuyor.** Yani
alışılmışın tersi: bu kez geride kalan kronoloji.

📌 A5'in `1805-07-03` düzeltmesi bununla **bağımsız olarak doğrulanmış oldu** —
başka bir maddeden, başka bir oturumdan. Ama maddenin kendisi hâlâ 07-09'da.

## 5d. 🔴 AYNA TUZAĞININ ÜÇÜNCÜ VAKASI — ve sınama ilk kullanımda yakaladı

1882 için slug ararken `urabi` araması iki sonuç verdi. **İkisini de
iki aşamalı sınamadan geçirdim:**

| Slug | `<title>` | Gövde | Sonuç |
|---|---|---|---|
| `ahmed-urabi-pasa` | AHMED URÂBÎ PAŞA - TDV… ✅ | *"**bk. URÂBÎ PAŞA**"* | 🔴 **YÖNLENDİRME KÜTÜĞÜ** |
| `urabi-pasa` | URÂBÎ PAŞA - TDV… ✅ | gerçek madde, dört tarihli cümle | ✅ **ASIL MADDE** |

`<title>` sınaması ikisini de "canlı" sayardı. **Dün önerdiğim ikinci aşama
(gövde "bk. XXX"ten mi ibaret) ilk uygulamasında bir vaka yakaladı.**
`alaiye` ve `habesistan`dan sonra üçüncü.

## 5e. 🟢 Ve `isg:` örtüsünün ❓'si kapandı

`urabi-pasa` 1882'yi **gün gün** veriyor:

> *"11-12 Temmuz'da İskenderiye istihkâmlarını topa tuttu"*
> *"İngilizler **15 Temmuz**'da İskenderiye'yi işgal etti"*
> *"**13 Eylül**'de … **Tellülkebîr** mevkiinde … ağır bir yenilgiye uğradı"*

🟢 **`OTURUM-14-NIL-ZINCIRI §3b`'de `kaynak:"❓"` bıraktığım örtünün kaynağı
budur:**
```js
isg:[{f:"1882-09-13", t:"1914-12-18", d:"ingiltere", kaynak:"urabi-pasa"}]
```
Ve başlangıç tarihi **bağımsız olarak doğrulandı**: benim `olaylar_ek9.js`'e
yazdığım `1882-09-13 Tel el-Kebîr` maddesi TDV'nin *"13 Eylül"*üyle birebir.
`1882-07-11 İskenderiye'nin bombardımanı` maddem de *"11-12 Temmuz"*la uyuşuyor.

## 5f. Önerilen `kaynak:` taşıması

| Madde | `misir` → | Doğrulama |
|---|---|---|
| 1805-07-09 *(+ tarih 07-03'e)* | **`kavalali-mehmed-ali-pasa`** | ✅ çekildi, gün veriyor |
| 1841-06-01 *(+ tarih 05-24'e)* | **`kavalali-mehmed-ali-pasa`** | ✅ çekildi, gün veriyor |
| 1882-09 *(+ gün hassasiyetine)* | **`urabi-pasa`** | ✅ çekildi, gün veriyor |
| 1914-12-18 | **`abbas-hilmi-ii`** | ✅ çekildi (§1) |
| 1798-07 · 1801-10-09 | `kahire` ya da `aris` | 🟡 ikisi de canlı, **hangisinin daha uygun olduğunu ölçmedim** |
| 1798-09-03 · 1802-06-25 · 1807-03-17 | ❓ | 🔴 **araştırılmadı** — üçü de Osmanlı-Fransa diplomasisi, Mısır maddesi zaten yanlış adres |

⚠️ Son iki satırı **tahminle doldurmuyorum.** Beşi için slug önermem yeni bir
araştırma turu ister; isterseniz yaparım, ama bu turda ölçülmediğini
yazıyorum ki "önerildi" sanılmasın.

## 5g. 📌 Sınıf ayrımı — sizin uyarınız işledi

*"Fakir slugda `kaynak:` değişir, eksik çekimde tekrar denenir"* demiştiniz.
Ayrım gerçekten belirleyici oldu: **eksik çekim sansaydım** `misir`'i tekrar
tekrar çekip modern bölümü arardım ve bulamazdım; **fakir slug olduğunu
ölçtüğüm için** doğrudan yerine koyacak maddeleri aramaya geçtim — ve
`kavalali-mehmed-ali-pasa` ile `urabi-pasa` iki bonus verdi (iki yanlış tarih
ve örtünün eksik kaynağı).

A5'in `misir` çekiminin 1786'da kesilmesi de artık açıklanıyor: **çekim
kesilmedi, madde orada bitiyor.** Aynı gözlem, iki farklı teşhis — ölçüm
hangisinin doğru olduğunu söyledi.
