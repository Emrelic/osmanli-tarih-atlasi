# ÖNCELİK — neyi önce, neyi hiç

> **ÇÖL SEYYAHI İLKESİ** — kullanıcının kendi sözü, 3 Ağustos 2026:
>
> *"Çağlayan yanında yaşayan ve suyun boşa akmasını izleyen birisi değil,
> çöldeki seyyah gibi olmalıyız. Token harcamaktan geri durmamalıyız ama
> harcadığımız tokenler hızlı, sağlıklı, isabetli, disiplinli işlere
> dönüşmeli."*
>
> 🔴 Ve bağlayıcı sınır: **tasarruf, disiplinden ve doğruluktan taviz
> vererek yapılmaz.** Ucuzlatmak uğruna ölçümü atlamak, kaynağa bakmamak
> ya da denetimi es geçmek TASARRUF DEĞİLDİR — o, bedeli sonra ve daha
> pahalı ödenen bir borçtur. Bu belgedeki her kural bu sınırın içindedir.

**Neden var:** haftalık bütçenin **%71'i iki günde** harcandı. Aynı hızda,
aynı sağlıkta, aynı isabette daha az harcamak zorundayız.

---

## 1. NEREDE YANIYOR — ölçüm, tahmin değil

Sıralama pahalıdan ucuza. En üstteki **en pahalısı ve en kolay kısılanı.**

```
① KOORDİNATÖRÜN UZUN CEVAPLARI
   Çıktı tokeni, girdinin birkaç katı fiyatlıdır. 80 satırlık bir cevap
   yazmak, 80 satırlık bir dosya okumaktan KAT KAT pahalıdır.
   ⇒ Bu belgenin kendisi bir örnek: burada duruyor, sohbette değil.

② AYNI ŞEYİ İKİ KEZ YAZMAK
   Karar dosyaya yazılıyor, sonra AYNI karar sohbette baştan anlatılıyor.
   ⇒ Dosyaya yaz, sohbette ÜÇ SATIRLA yerini söyle.

③ BOŞA GİDEN KOŞU
   4,5 saat + tam bir üretim. Beş üretim girdi donmadığı için kayboldu.
   ⇒ En pahalı tek kalem. Kuralı `CLAUDE.md §7`.

④ ÖLÇÜLMEDEN VERİLEN CEVAP
   Yanlış çıkar, düzeltilir, yeniden anlatılır: üç tur yerine bir tur.
   ⇒ Ucuzluk sanılan şey, en pahalı yol.

⑤ BAĞLAMIN YENİDEN OKUNMASI
   ⚠️ EN AZ ÖNEMLİSİ. Önbellek sayesinde değişmeyen bağlam ~1/10 fiyata
   okunur. Mesajı ikiye bölmek bağlamı iki kat OKUTMAZ; asıl bedeli
   koordinatörün İKİ KEZ CEVAP YAZMASIDIR (bkz. ①).
```

📌 **Mesajı bölmek serbest — ama "bekle, devamı var" de.** Tek cevap yaz,
tek seferde. Zaten çalışırken gelen mesajlar aynı tura giriyor: o ucuz yol.

## 2. ALTI KURAL

```
K1  Cevap üç satırdır. Uzunu dosyaya yazılır, yeri söylenir.
K2  Bir karar İKİ YERDE anlatılmaz. Dosya asıldır, sohbet işarettir.
K3  Toplu iş kutudan gelir. 25 madde tek turda; 25 tur değil.
K4  Ölçmeden cevap yok. Tahmin, üç tur demektir.
K5  Mekanik iş Sonnet'e, karar Opus'a. Model seçimi bir maliyet kalemidir.
K6  Pahalı koşudan önce SIRA BİRLEŞTİRİLİR. Tek düzeltme için koşu yok.
```

## 3. 🔴 SİSTEM İTİRAZ EDER — yeni görev

**Koordinatör, kapsam isteklerine sessizce uymaz.** Bir iş istendiğinde
önce **sırasını** söyler, gerekiyorsa **itiraz eder.**

Kullanıcının kendi tarifi, ve bu artık bir görevdir:

> *"Arkadaş, binlerce fiyort ve ada için binlerce token yakacağız ama
> oralar tarihî olarak kıyı köşe tenha yerler, üstelik Osmanlı'nın etki
> alanı da değil. Çin, Hindistan bitmeden Novaya Zemlya adasıyla
> uğraşmaya ne gerek var? Tokyo dururken kuzey Rusya'nın Tiksi kentinde
> ne işimiz var — henüz önem olarak sıralama oraya gelmedi."*

⇒ İtiraz **üç cümleyi geçmez** ve şunu içerir: *bu iş hangi halkada ·
önündeki halka bitti mi · bitmediyse ne bitmeli.*
⚠️ Kullanıcı ısrar ederse iş **yapılır** — itiraz bir veto değil, bir
uyarıdır. Ama sessiz kalmak da bir seçenek değildir.

---

## 4. COĞRAFÎ SIRA — halkalar

Ölçü **kilometre değil, Osmanlı hikâyesine bağlılık.**
🔴 **Bir halka, öncekinin değişmezleri temiz olmadan açılmaz.**

```
HALKA 0  ÇEKİRDEK      Anadolu · Rumeli · Arap vilâyetleri · Kırım
                       ✅ kurulu — ama Kırım 11 kat seyrek (açık)
HALKA 1  KOMŞULAR      İran · Rusya güneyi · Habsburg · Venedik ·
                       Memlûk mirası · Kafkasya · Kuzey Afrika
                       🟡 YARIM — İran çekirdeği hâlâ tek `iran` kutusunda
HALKA 2  ETKİ ALANI    Hindistan · Çin · Orta Asya · Sahra üstü Afrika ·
                       Batı Avrupa · Endonezya-Malezya
                       🔵 r690'da kutuya girdi, 98 kimlik adsız
HALKA 3  BAĞLANTISIZ   Amerika · Sahra altı Afrika · Japonya ötesi
                       ⬜ açılmadı
HALKA 4  TENHA         Sibirya · Arktik kıyı · İzlanda · Novaya Zemlya ·
                       Okyanusya · Avustralya
                       ⬜ EN SON. Ölçüldü: Arktik + İzlanda kıyı verisi
                       +22.011 köşe = mevcudun %14'ü — ucuz ama SIRASI YOK
```

📌 Kullanıcının kendi örneği kuralı özetliyor: *"New York, Virginia
bitmeden Teksas'a gelmemeli; Teksas'a gelmeden Oklahoma'ya."*

---

## 5. ZAMAN SIRASI — ve burada ölçüm konuşuyor

Kronoloji yoğunluğu (1.057 madde, `devletler.js`):

```
1275-1499   327 madde   yılda 1,5
1500-1699   212 madde   yılda 1,1
1700-1899   312 madde   yılda 1,6
1900-1924   122 madde   yılda 4,9   ← ÜÇ KAT YOĞUN
```

🔴 **Kullanıcının sezgisi ölçümle doğrulandı:** *"1914 senesi için
üretilecek madde sayısı 1450-1500 arasıyla yarışır."* Yarışmıyor —
**geçiyor.** Ve 122 madde bile I. Dünya Savaşı için İNCE: her cephe
(Çanakkale · Kafkas · Filistin · Irak · Galiçya) ayrı işlenmeli.

### Sıra

```
ÖNCELİK 1  1281-1923 PENCERESİNİ DOLDUR — özellikle 1900-1923
           Pencere zaten AÇIK; içi eksik. Yeni pencere açmadan önce
           açık olanı bitirmek en ucuz kazanç. Balkan Savaşları ve
           I. Dünya Savaşı cephe cephe.

ÖNCELİK 2  1923-2026 — AYNI hikâyenin devamı
           Osmanlı'nın ardıl devletleri: Türkiye, Irak, Suriye, Ürdün,
           Yugoslavya, mandalar, 1948, 1991. Aynı coğrafya, aynı
           kimliklerin çocukları. II. Dünya Savaşı BURAYA girer.

ÖNCELİK 3  1071-1281 — önsöz
           Selçuklu, Haçlı seferleri, Moğol istilâsı. Atlasın kendi
           başlangıcını açıklar.

ÖNCELİK 4  Roma / Bizans / öncesi — 🔴 AYRI ÜRÜN
           Bizans künyesi ZATEN var (330-1461). Eksik olan 1281 ÖNCESİ
           HARİTA — ve o başka bir hikâyedir: kendi kimlik dizini, kendi
           paleti, kendi coğrafyası. Bu atlasa eklenmez, YANINA kurulur.
```

### "II. Dünya Savaşı mı önce, Roma-Bizans mı" — cevap: **II. Dünya Savaşı**

Üç sebeple, ve üçü de ölçülebilir:

```
① SÜREKLİLİK   1923'te biten hikâyenin devamı. Aynı devletler, aynı
               sınırlar, aynı kimlik zinciri. Roma yeni bir dizin ister.
② KAYNAK       1939-45 için kaynak yoğunluğu 1200'lerin kat kat üstünde.
               Aynı emekle çok daha fazla doğrulanmış madde çıkar.
③ İZLEYİCİ     Kullanıcının kendi sözü: "babalarımızın dedelerimizin
               gördüğü zamanlar." Tanıdık olan, öğreteni de kolaylaştırır.
```

⚠️ **Ama ÖNCELİK 1'den sonra.** 1914-1923 atlasın KENDİ penceresinin
içinde ve hâlâ ince. Açık pencereyi bırakıp yenisini açmak, bu belgenin
yasakladığı şeyin ta kendisidir.

---

## 6. YOĞUNLUK ASİMETRİSİ — kabul edilen bir gerçek

Kullanıcının sözü: *"Balkan Savaşları'nın detayı ile Eflak
Prensliği'nin ele geçirilmesi detayı aynı şey değil."* **Doğru, ve bu
bir kusur değil tasarımdır.**

```
6 yıllık II. Dünya Savaşı, 300 yıllık bir taşra tarihinden
DAHA FAZLA madde üretebilir — ve üretmelidir.
```

📌 Bu, `ANSİKLOPEDİ EKSENİ / Kural ⓪` (kısa metin) ile çelişmez:
**madde SAYISI artar, madde UZUNLUĞU artmaz.** Beş cephe için beş
kartvizit, tek uzun makale değil.
