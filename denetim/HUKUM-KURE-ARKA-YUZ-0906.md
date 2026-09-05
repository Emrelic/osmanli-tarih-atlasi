# HÜKÜM — KÜRE ARKA YÜZ: **ADAY B**, iki şartla

> **1.MURAT (Oturum 0) · 6 Eylül 2026.**
> Dayanak: `denetim/OLCUM-KURE-ARKA-YUZ-0906.md` (KÜRE GÖRÜNÜM).
> Emre'nin sevki: *"küre arka yüz opaklığı konusuna sen karar ver,
> beğenmezsek ötekine bakarız."* ⇒ karar bende, ve veriliyor.

---

## 0. ÖNCE: SORUM YANLIŞTI, VE ÖLÇÜM ONU DÜZELTTİ

Sevkim *"arka yüz gövdeleri hangi opaklıkla çiziliyor"* diye sordu.
**Opaklık diye bir şey yok.** Arka yüz `visibility:"hidden"` ile
**ikili** gizleniyor, `KURE_PAY_DER = 0`, ve hiçbir işaretçi 0 ile 1
arasında değil.
⇒ Sorun opaklık değil **SERT KESME**: ufkun ±5°'inde işaretçiler kamera
oynadıkça görünüp kayboluyor (pop), ve o bant z2-z3'te **%4,5'e** çıkıyor
— tam da dünya görünümünden bölgeye inerken geçilen aralık.

📌 `§11`: *bir sevk, taşıdığı öncülü de doğrulamalıdır.* Bu gece bu
kuralın **üçüncü** vakası, ve yine sevki yazan taraf yanıldı.

---

## 1. HÜKÜM: **B — kademeli opaklık**

**Gerekçe, ve ölçümün kendi cümlesine dayanıyor:**

> *"A pop'un SIKLIĞINI azaltır ve sızmayı ARTIRIR; B pop'u BİTİRİR ve
> sızmayı artırmaz."*

Bu ayrım kararı tek başına veriyor:

```
A  bir DOĞRULUK kaybı karşılığında bir GÖRSEL kazanç alıyor
   (5°'de 25 işaretçi kürenin arkasındayken ön yüze katlanmış görünür —
    yani özelliğin VAR OLMA SEBEBİ olan sızma geri geliyor)
B  görsel kazancı DOĞRULUKTAN ÖDÜN VERMEDEN alıyor
   (0'a giden bant hâlâ görünmez; kaybolan yalnız SERTLİK)
```

⇒ **Bir görsel kusuru düzeltmek için bir doğruluk kusuru satın
alınmaz.** Ve kodun kendi tarihi bu yönde bir uyarı taşıyor: ilk ufuk
formülü ufku dar verip **görünür etiketleri silmişti**; pozitif pay ters
yöne hata yapar, yani A bilinen bir hatanın aynasını üretir.

🔴 **C ELENDİ** ve gerekçesi ölçümde: z3+ arka yüzün **%52'sini
kaçırıyor**, ve kamera hareketinde **kendini güncellemiyor**
(190° dönüşte opacity-0 sayısı 35 → 35). Native yol hareket döngüsünün
yerini alamaz.

---

## 2. İKİ ŞART — ölçümün bulduğu maliyeti kapatır

### ŞART ①: `pointer-events` AYNI GEÇİŞTE, opaklıktan TÜRETİLEREK
Ölçüm B'nin maliyetini isabetle buldu:
```
opacity 0 olan 119 işaretçi:  pointerEvents "auto"  ← görünmez ama TIKLANABİLİR
```
İşçi bunu *"eşzamanlı tutulması gereken ikinci bir durum"* diye
kaydetti — **haklı bir çekince, ama ancak AYRI bir geçişte yazılırsa.**
```
🟢 opaklığı yazan döngü, pointer-events'i AYNI SATIRDA ondan türetir
🔴 ikinci bir döngü/geçiş YAZILMAZ — ayrışabilecek bir durum ancak
   ayrı yazılırsa ayrışır
```
📌 Bu gecenin `§7` dersinin arayüz yüzü: *ayrı dosya vermek ayrı ad
alanı vermektir* — burada da **ayrı geçiş vermek ayrı durum vermektir.**

### ŞART ②: OPAKLIK 0'DA `visibility:hidden`E DÜŞ
Ölçümün ikinci bulgusu (`getBoundingClientRect().width > 0` — hâlâ yer
kaplıyor) böyle kapanır. Yani:
```
opaklık > 0   →  opacity yaz, pointer-events "auto"
opaklık = 0   →  visibility "hidden"   ← BUGÜNKÜ MEKANİZMA, aynen
```
⇒ Tam arka yüzdeki işaretçiler **bugünkü garantilerini birebir korur**;
değişen yalnız ufuk bandı. Yeni bir mekanizma icat edilmiyor, var olan
ikisi **sıraya** konuyor.

---

## 3. UYGULAMADAN ÖNCE ÖLÇÜLECEK — işçinin kendi `ÖLÇMEDİM` kutusundan

```
🔴 BAĞLAYICI  yarı saydam banttaki etiketlerin haritanın üstünde
              GERÇEKTEN okunup okunmadığı — görsel yargı, ekran
              görüntüsü alınamamıştı. Bu ölçülmeden inmez:
              B'nin bütün değeri o bandın okunur olmasına dayanıyor.
🟡 İSTENEN    ikinci bir TARİH (ölçüm yalnız 1281-01-01'de yapıldı;
              işaretçi sayısı tarihe göre değişiyor, bant oranı da
              değişebilir)
⚪ İSTEĞE     kare hızı — koşu 6 CPU'yu paylaşırken ölçüldü, bugün
              anlamlı bir sayı vermez
```

## 4. KİM UYGULAR
`js/app.js` **Oturum 1'in** dosyası (`§7`). KÜRE GÖRÜNÜM kodu **yazmaz**;
yamayı `denetim/` altına bırakır, ben Oturum 1'e devrederim.
🔒 Not: `js/app.js` koşu 6'nın parmak izinde **değil** — yani koşuyu
öldürmez; kısıt yalnız `§7` sahipliğidir.

---

## 5. VE BİR ŞEY KAYDA GEÇİYOR
İşçi C adayında bir manşet yazmak üzereyken (*"kod yorumundaki %12
çürüdü"*) çok-zoom sınavı koştu ve **kendi manşetini çökertti**. Kod
yorumundaki düşük oran **gerçekmiş**, sebebi *"gizli belge"* değil
**zoom'a bağlı ayrışma**.
📌 Ve kendi dersini kendisi yazdı: *"örneklem büyüklüğü, örneklem
ÇEŞİTLİLİĞİ değildir — bu sefer eksen zoom'du."* Bu, aynı oturumun
5 Eylül gecesi *"ölçüm anı"* ekseninde öğrendiği dersin ikinci ekseni.
