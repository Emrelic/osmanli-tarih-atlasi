# KARAR — `kimlikler.js` iki otoritenin biri, emekli oluyor

> VERİ KİMLİK 2'nin 2 Ağustos raporu üzerine. Rapor **kök sebebi buldu** ve
> koordinatörün *"VERİ KİMLİK sessiz kaldı"* teşhisini **haklı olarak
> çürüttü**: sessiz değildi, **görünmezdi.**

---

## 1. DOĞRULANDI — `kimlikler.js` hiçbir yerde yüklenmiyor

```
index.html'de yüklenen data/*.js  : 24 dosya
   data/kimlikler.js              : YOK
arac/denetle_yayin.py:414         : "kimlik sözlüğü, ARAYÜZ HENÜZ KULLANMIYOR"
```
Haritayı besleyen köprü `devletler.js`'in `harita:` alanı. ⇒ VERİ KİMLİK
aylarca **canlı olmayan bir dosyaya** yazdı; iş yapıldı, harita boş kaldı.

📌 `OGRENILENLER §40`'ın en pahalı vakası: *"verinin ÜRETİLİYOR olması,
ÇİZİLİYOR olması değildir."* Burada bir adım daha kötüsü oldu — **veri
yazılıyordu ve kimse okumuyordu.**

---

## 2. ⚠️ DÜZELTME — *"0 uyuşmazlık"* TEK ALAN üzerinden ölçülmüş

Rapor `harita:` alanını karşılaştırmış ve haklı olarak 0 çatışma bulmuş.
Koordinatör **bütün alanları** karşılaştırdı:

```
ortak id: 235 · yalnız devletler'de: 7 · yalnız kimlikler'de: 0
harita: çatışması        0     ✅ rapor doğru
f / t   çatışması        6     ← GÖRÜLMEDİ
```

| id | alan | `kimlikler.js` | `devletler.js` | fark |
|---|---|---|---|---|
| **rodos-sovalyeleri** | `t` | 1522-12-25 | 1798-06-12 | **275 yıl** |
| akkoyunlu | `t` | 1501-01-01 | 1514-01-01 | 13 yıl |
| memluk | `t` | 1517-01-22 | 1517-04-13 | 81 gün |
| misir-kavalali | `t` | 1914-11-05 | 1914-12-18 | 43 gün |
| kirim | `t` | 1783-04-08 | 1783-04-19 | 11 gün |
| misir-kavalali | `f` | 1805-07-09 | 1805-07-03 | 6 gün |

🔴 **Ve en az üçü `§74` vakası — ayrı soruların cevapları, rakip cevaplar
değil:**
- **rodos**: 1522 Rodos'un düşüşü · 1798 Malta'nın işgali. `devletler.js`'in
  özeti bunu zaten açıklıyor (*"1522-1530 arası tarikat topraksızdı"*).
- **memluk**: 01-22 Kahire'nin düşüşü · 04-13 Tomanbay'ın idamı.
- **akkoyunlu**: 1501 Tebriz'in kaybı · 1514 son.

📌 Ders koordinatörde de: **ölçüm tek uçlu olmamalı** (`YASALAR B8`). Bir
alanda çatışma yokluğu, dosyaların uyuştuğu anlamına gelmiyor.

---

## 3. KARAR ①  — dört kalem TAŞINSIN, `kazak` bir kelimeyle çözülüyor

```
arnavutluk-bagimsiz  -> arnavutluk       renkler.py: VAR   ✅ taşı
nogay                -> nogay            renkler.py: VAR   ✅ taşı
zend                 -> safevi           renkler.py: VAR   ✅ taşı
kazak-hanligi        -> kazak            renkler.py: YOK   ⇒ "kazak-hanligi" YAZ
```

🔴 **`kazak-hanligi` engel değil.** `renkler.py:373`'te anahtar **var**:
`"kazak-hanligi": ("Kazak Hanlığı", "#ad1457")`. Kısa `kazak` bilerek
reddedilmiş (satır 350: Türkçede hem Kazak Hanlığı hem Ukrayna kazakları).

⇒ `devletler.js`'e **`harita:"kazak-hanligi"`** yaz. `renkler.py`'ye
dokunulmuyor — yani MOTOR'un sahasına girilmiyor. **Dördü de bugün gider.**

📌 Ve `zend → safevi`: kullanıcının *"afsar/zend, safevî ile aynı renk
ailesi"* kararını VERİ KİMLİK **zaten uygulamış.** Kayıp değil, görünmezdi.

---

## 4. KARAR ② — TEK OTORİTE `devletler.js`, `kimlikler.js` EMEKLİ

Gerekçe ölçülmüş: iki dosya aynı gerçeği tutuyor ve **zaten ayrışmışlar
(6 tarih).** Bu, projenin **dördüncü** iki-otorite vakası olurdu — `y:`
simgeleri, `BOLGE` sabiti ve 1446 tarihi aynı bedeli ödetmişti.

```
devletler.js   242 kayıt · motorun okuduğu · harita: köprüsü buradan
kimlikler.js   235 kayıt · hiç okunmuyor · fazladan kayıt: 0
```
`kimlikler.js`'in **devletler.js'te olmayan tek bir kaydı yok.** ⇒ Emekli.

🔴 **AMA SİLEREK DEĞİL.** Silmek, altı çatışmanın altısını da sessizce
`devletler.js` lehine karara bağlar — **rodos'ta 275 yıl** buna dahil.
Sıra bağlayıcı:

```
1. dört harita: değeri taşınsın                     ← bugün, VERİ KİMLİK 2
2. altı tarih çatışması HÜKME BAĞLANSIN             ← araştırma işi, ayrı
3. sonra kimlikler.js başlığına "EMEKLİ" yazılsın
4. denetle_yayin.py:414'teki BEKLEYEN satırı düşsün
```
⚠️ 2 bitmeden 3'e geçilmez.

📌 Ve `kimlikler.js`'in başlığındaki *"TEK doğruluk kaynağı OLMAK ÜZERE
TASARLANDI"* cümlesi duruyor. **Tasarım gerçekleşmedi ve dosya bunu bilmiyor**
— emeklilik notu tam oraya yazılmalı.

---

## 5. Bir de bulundu: `renkler.py:352` ÇÜRÜK

```
yazan (satır 352): "yerlesimler_ortaasya2.js bugün hâlâ d:"kazak" yazıyor"
ölçüm (2 Ağustos): dosyadaki 9 kimliğin 9'u da renkler.py'de VAR,
                   ve kazak kaydı zaten "kazak-hanligi"
```
Uyarı **geçmişte doğruydu, bugün değil.** MOTOR'un dosyası, düzeltme onda.
⇒ Kapı A'nın *"0 renk eksiği"* ölçümü **ayakta.**
