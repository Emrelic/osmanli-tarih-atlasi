# `denetle_eslesme.py` TAVAN AŞIMININ SEBEBİ — İŞ (b)

**Oturum:** OPUS HAZIR KITA 102 · **Sevk:** 1.MURAT · **Tarih:** 2 Eylül 2026
**Soru:** `§A 130/97` ve `§C 117/73` tavanları niçin aşkın?

---

## 0. HÜKÜM — ÜÇ CÜMLE

```
① §A'nın "45 YENİ" sayısının 18'i SAHTE — defterin KİMLİĞİ kararsız.
   Gerçek: YENİ 27 · KAPANAN 6.
② 27 gerçek yeninin SIFIRI bugün doğdu. Hepsi 20-31 Ağustos dosyalarından.
③ §C'nin sebebi BUGÜN ÖLÇÜLEMEZ — §C'nin DEFTERİ YOK. Ve tavanı aşan,
   bekçisi yeni öten bölüm tam olarak o.
```

---

## 1. 🔴 DEFTERİN KİMLİĞİ KARARSIZ — ve kimse fark etmemiş

`_a_kimlik` şöyle kuruluyor: `"tarih|kırılan İLK yer"`. Dosyanın kendi
yorumu bir tuzağı zaten görmüş:
> *"⚠️ Madde başlığı kimliğe GİRMEZ: madde düzeltilince kimlik değişir ve
> aynı kırılma 'kapandı + yeni açıldı' diye iki kez görünürdü."*

**Ama aynı kusur "ilk yer"de de var ve görülmemiş:** o güne YENİ BİR
YERLEŞİM eklenince alfabetik ilk sıra kayıyor, kimlik değişiyor, ve aynı
kırılma **bir KAPANAN + bir YENİ** olarak sayılıyor.

**ÖLÇÜLDÜ — 18 tarih hem YENİ hem KAPANAN listesinde:**
```
1393-09-01  KAPANAN Köstence            → YENİ Babadağı (Babadag)
1463-06-01  KAPANAN Travnik             → YENİ Koniçe (Konjic)
1466-06-01  KAPANAN İlbasan (Elbasan)   → YENİ Trebinye
1687-08-01  KAPANAN Mora (Tripoliçe)    → YENİ Elafonisos (Cervi)
1711-03-01  KAPANAN Benî Velîd          → YENİ Ayn el-Ğazâle (Bomba)
1718-07-21  KAPANAN Krayova (Craiova)   → YENİ Ayamavra (Lefkada)
1771-07-01  KAPANAN Bahçesaray          → YENİ Akmescid
1821-06-14  KAPANAN Ed-Düveym           → YENİ Cebeleyn
1835-05-26  KAPANAN Benî Velîd          → YENİ Ayn el-Ğazâle (Bomba)
1878-07-13  KAPANAN Ardahan             → YENİ Alacahisar (Kruševac)
1882-09-07  KAPANAN Kordofan            → YENİ Bâbanûsa
1912-10-18  KAPANAN Benî Velîd          → YENİ Ayn el-Ğazâle (Bomba)
1912-11-08  KAPANAN Selanik             → YENİ Lanzaka (Lagkadas)
1913-05-30  KAPANAN Dimetoka            → YENİ Dedeağaç (Alexandroupoli)
1913-06-28  KAPANAN Kavala              → YENİ Drama
1913-07-14  KAPANAN Gümülcine           → YENİ Kırcaali
1913-09-29  KAPANAN Gümülcine           → YENİ Ahtapolu (Ahtopol)
1918-10-30  KAPANAN Ebha (Asir)         → YENİ Akçakale
```
```
KİMLİK ekseninde   YENİ 45 · KAPANAN 24
TARİH ekseninde    YENİ 27 · KAPANAN  6      ← GERÇEK
⇒ "gerileme adayı" listesinin %40'ı GÜRÜLTÜ.
```
📌 Ve defterin var olma sebebi tam da buydu: *"tavan bir sayıdır, küme
değil"* diyerek küme kurulmuş — ama **kümenin kimliği sayıdan daha
kararsız çıkmış.** Doğru soruyu soran alet, yanlış anahtarla sormuş.

### 🟢 ÇARE ÖLÇÜLDÜ: KİMLİK YALNIZ TARİH OLMALI
```
§A şüphelileri: 130 satır · FARKLI tarih: 130 · bir tarihte >1 satır: 0
```
⇒ **Tarih tek başına hem BENZERSİZ hem KARARLI.** `_a_kimlik` şu olmalı:
```python
def _a_kimlik(kayit):
    """Kırılma GÜNÜ — §A'da her gün en çok bir satır üretir (ölçüldü:
    130 satır / 130 farklı tarih). 'İlk yer' kimliğe GİRMEZ: o güne yeni
    bir yerleşim eklenince alfabetik ilk sıra kayar ve aynı kırılma
    'kapandı + yeni açıldı' diye İKİ KEZ sayılır (ölçüldü: 18 vaka)."""
    return kayit[0]
```
⚠️ **Bu değişiklik var olan defteri GEÇERSİZ KILAR** (bütün anahtarlar
değişir) ⇒ `--defter-yaz` ile taban yeniden yazılmalı ve **o an tabanın
sıfırlandığı kayda geçmeli.** Karar koordinatörün; ben uygulamadım.

### ⚠️ KÜÇÜK BİR YAN KUSUR — `_NOT` bir kayıt sanılıyor
Defter dosyasında `_NOT` adlı bir açıklama anahtarı var ve sayıma
giriyor: `110 kayıt` deniyor, gerçek **109**. Tek satırlık düzeltme
(`if k.startswith("_"): continue`), ama sayı raporlanan bir sayı.

---

## 2. 27 GERÇEK YENİNİN SIFIRI BUGÜN DOĞDU — uyarın ölçüldü

Koordinatörün uyarısı: *"tavan aşımının sebebi bugün inen yeni maddeler
olabilir; `git log` ile 'bugün mü doğdu' ayrımını yap."*

**Ölçüm** (kırılmayı taşıyan yerleşim dosyasının damgası):
```
🔴 BUGÜN (2 Eylül) değişmiş bir dosyadan gelen : 0
🟢 20-31 Ağustos dosyalarından gelen           : 27
```
Bugün değişen tek yerleşim dosyaları **bağlanmamış kuyruk** dosyaları
(`ok101` 02:44 · `ok107` 01:03 · `ok102` 01:00 · `p0037` · `ok104`) ve
onlar ölçüme **hiç girmiyor** — canlı taban `yerlesimler.js` 31 Ağustos
16:30. ⇒ **Tavan aşımı bugünün işi değil, Ağustos boyunca biriken bir borç.**

📌 Ve tavanın kendisi de bayat: defter **1 Ağustos'ta 109 kayıtla**
yazılmış, tavan ise **97**. Yani *taban yazıldığı gün zaten tavanın
üstündeydi.* Tavan bir aydır aşkın; bugün fark edilmesinin sebebi
bekçinin ayrı bir dalda ötmesi.

### 27'nin cinsi — kabaca ikiye ayrılıyor
```
ANTLAŞMA/TOPLU DEVİR (5+ yerleşim, madde adları saymıyor)   7
   1430 Yanya (7) · 1639 Kasr-ı Şirin (5) · 1682 Tököli (6)
   1685 (5) · 1783 Kırım (11) · 1878 Ayastefanos (11) · 1921 Kars (10)
   ⇒ dosyanın KENDİ yorumunun "yanlış eşleşme değil, eksik `yer:`" dediği sınıf
TEKİL (1-3 yerleşim)                                        20
   ⇒ gerçek gözden geçirme adayları burada
```

---

## 3. 🔴 §C'NİN SEBEBİ ÖLÇÜLEMEZ — DEFTERİ YOK

```
§A  defter VAR  (ESLESME-A-DEFTERI.json)
§B  defter VAR  (ESLESME-B-DEFTERI.json)
§C  DEFTER YOK  ← ve tavanı aşan, 117/73 ile kırmızı olan bölüm BU
```
§C bugün *"117 eksik (tavan 73) — YENİ EKSİK"* diyor ama **hangileri yeni,
hangileri bir aydır orada söyleyemiyor.** Tavan bir sayı; küme yok.
📌 Bu, dosyanın kendi başlığındaki dersin **uygulanmamış üçüncü ayağı**:
*"tavan bir SAYI, defter bir KÜMEDİR"* — A ve B için kurulmuş, C için değil.

**ÖNERİ:** `_defter` gövdesi zaten ortak; §C için de bir defter açmak
neredeyse bedava. Kimlik: `tarih` (aynı gerekçe — ölçülmeli, §A'da 1:1
çıktı, §C'de madde başına satır olduğu için `tarih|k:` gerekebilir).
⚠️ **Ölçmeden yazılmamalı:** §C'de bir tarihte birden çok madde olabilir;
kimliği seçmeden önce §A'da yaptığım çakışma ölçümünün aynısı yapılmalı.

---

## 4. NE ÖLÇMEDİM

- **§C'nin 117 satırının içi** — defter olmadan "yeni mi eski mi" sorusu
  cevaplanamaz; tahmin yazmadım.
- **20 tekil adayın hiçbiri araştırılmadı** — bu bir liste, hüküm değil.
- `git log` ile **commit düzeyinde** izleme yapmadım; dosya damgası
  yeterliydi çünkü soru *"bugün mü"* idi ve cevap sıfır çıktı. Daha ince
  bir soru (hangi commit) sorulursa ölçüm tekrarlanmalı.
- **Tavanların ne olması gerektiğini önermiyorum** — tavan bir karardır,
  ölçüm değil. Ölçtüğüm: 130'un 18'i defter gürültüsü, 7'si tasarım gereği
  meşru sınıf, kalanı gerçek kuyruk.
