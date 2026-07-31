# ÖLÇÜM — gelecek olayın şehirlerini önceden göstermek

**Ölçen:** ARAYÜZ (A) · **31 Temmuz 2026** · **Uygulama YOK** — yeni özellik,
dört sınav kapanmadan yazılmaz

> Kullanıcı: *"Bir iki madde sonra gerçekleşecek tarihî olaydan önce, o olayda
> geçecek olan şehirleri haritada görünür kılmalıyız."*
> Bugün `anilan` mekanizması **o anki** maddede geçen yerleşimleri görünür
> kılıyor; istenen bunun **ileriye** uzatılması.

---

## 1. MADDE BAŞINA KAÇ YERLEŞİM ANILIYOR

`app.js`'in kendi eşleştirme ölçütüyle (`ad.split(" (")[0]`, ≥4 harf, `yer:`+`b`):

```
min 0 · %25 1 · medyan 1 · %75 2 · %90 3 · azami 11 · ortalama 1,34
hiç yerleşim anmayan madde: 108
```

**İki madde ileri bakmanın ekrana eklediği işaret:**
```
medyan 2 · %90 4 · azami 13
```
⇒ Maliyet **sınırlı**. En kötü hâlde 13 ek işaret; bugün z6'da 108 aday
işaretten 97'si tutuluyordu, yani bu mertebe dengeyi devirmez.

---

## 2. 🔴 SABİT SAYI mı SABİT SÜRE mi — ÖLÇÜM KESİN

Kullanıcı *"bir iki madde"* dedi. İki aday kural var ve **çok farklı
davranıyorlar**:

### (a) Sabit sayı — "2 madde ileri"
```
kapsadığı süre: medyan 308 gün · %90 1.074 · azami 5.327 (14,6 yıl)

yüzyıla göre medyan:
  1200'ler 7,0 yıl   1500'ler 0,8 yıl   1800'ler 0,5 yıl
  1300'ler 1,3 yıl   1600'ler 1,2 yıl   1900'ler 0,3 yıl
  1400'ler 1,0 yıl   1700'ler 1,1 yıl
```
⚠️ Zaman ufku **23 kat** oynuyor (7,0 yıl ↔ 0,3 yıl).

### (b) Sabit süre — "1 yıl ileri"
```
kapsadığı madde: medyan 2 · %90 7 · AZAMİ 24
```
🔴 24 madde × 1,34 yerleşim ≈ **32 ek işaret.** Ekranı basar ve bugün
sıfırladığımız çakışmayı geri açar.

### Karar: **SABİT SAYI**

| | sabit sayı (2 madde) | sabit süre (1 yıl) |
|---|---|---|
| ek işaret | **azami 13** | **azami ~32** |
| zaman ufku | 0,3 – 7,0 yıl (23×) | sabit |

⇒ Sabit sayı **görsel maliyeti** sınırlıyor, sabit süre **zaman ufkunu**.
Bozulan denge görsel tarafta olduğu için sabit sayı kazanıyor.

📌 Ve zaman ufkunun oynaması burada **kusur değil**: kullanıcı gün değil
**madde** okuyor. *"Sıradaki iki madde"* onun listede kaydırdığı şeyin ta
kendisi; 1200'lerde o iki madde 7 yıla yayılıyorsa, orada zaten 7 yılda iki
olay olmuş demektir.

---

## 3. ÇAKIŞMAYA ETKİSİ — ölçülemedi, ama sınırlandı

Bugün z4/z5/z6'da çakışan çift **sıfıra** indirildi. Ek işaretler bunu bozar mı,
**tarayıcı olmadan ölçülemez** (panel gizli).

Ölçülebilen: eklenen işaret sayısı **azami 13**, medyan 2. Ve bu işaretler
`anilan` sınıfına girecekse **elemeye dahil olacaklar** (bugünkü düzeltme:
anılanlar muaf değil, öncelikli). Yani kalabalık yaparlarsa **kendileri
elenirler**, mevcut işaretleri itmezler.
⇒ Risk yapısal olarak sınırlı, ama **sınav şart**: z4/z5/z6'da `CAKISAN` yine 0 mu?

---

## 4. TASARIM — gelecek şehri AYIRT EDİLEBİLMELİ

🔴 Gelecek olayın şehri, olmuş olayın şehrinden ayrılmazsa kullanıcı *"bu şehir
şimdi mi el değiştirdi"* diye okur ve **yanlış okur**.

**Öneri:** aynı işaret, **soluk** (opaklık ~%55) + **kesikli** nokta çerçevesi.
- Punto küçültmek **yanlış olur**: punto zaten önem derecesini anlatıyor
  (`d1/d2/d3`), ikinci bir anlam yüklenirse ikisi de okunmaz olur.
- Renk değiştirmek **yanlış olur**: renk devlet sahipliğini anlatıyor.
- ⇒ Serbest kalan tek eksen **opaklık + kenar deseni**.

⚠️ **Lejantta karşılığı olacak.** Bugün sönen kenar tam bunu yapmadığı için
kullanıcı *"iki ayrı kırmızı"* diye kusur bildirdi — görünen her yeni şey
lejanta girmezse kusur diye rapor ediliyor.
