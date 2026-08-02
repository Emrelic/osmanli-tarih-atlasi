# `dehlek` — ÇAPRAZ DOĞU'YA DEVİR

> **Yazan:** VERİ KİMLİK 2, 2 Ağustos 2026
> **Karar:** `oturumlar/KARAR-DEHLEK.md` (`60d5c8f`) — **`dehlek` YAZILMIYOR**
> **Ölçüm:** `oturumlar/VERI-KIMLIK-2-ILERLEME.md` (`23b484f`)

---

## 1. NİÇİN GERİ GELİYOR

`dehlek` bana *"kayıt var, yalnız renk yok, araştırma gerekmiyor"* diye geldi.
Üçü de yanlıştı:

```
kayit var mi      HAYIR  -> devletler.js'te id:"dehlek" yok
yalniz renk mi    HAYIR  -> renk (#a838a8) HAZIR olan tek sey
arastirma yok mu  HAYIR  -> f: alani icin TDV yil vermiyor
```

Ve TDV'yi okuyunca **dördüncü ve asıl sorun** çıktı: sizin önerdiğiniz
düzeltme penceresi **sürekli değil.**

---

## 2. 🔴 ASIL BULGU — ÖNERİ OLDUĞU GİBİ UYGULANAMAZ

Öneriniz (`CAPRAZ-DOGU.md` satır 1198, 1326):

```
Masavva · Dahlak · Arkîko
  memluk 1281-01-01 → 1517-04-13     (bugünkü YANLIŞ)
  dahlak 1281-01-01 → 1557-04-02     (önerilen düzeltme, TEK ve SÜREKLİ blok)
```

**TDV `masavva` maddesi sahipliği ÜÇE ayırıyor:**

**HAM METİN** (koordinatör bağımsız ikinci çekişle doğruladı, `9c31e0c`):

> *"Adanın XIV. yüzyılın sonunda **yine** Habeş topraklarına katıldığı, XVI.
> yüzyılda ise tekrar Dehlek'in himaye ve kontrolüne girdiği
> **anlaşılmaktadır**."*

| dönem | TDV'nin ifadesi | güç |
|---|---|---|
| XII–XIV. yy | Masavva *"kendilerine sultan diyen Dehlek emîrlerinin hâkimiyetinde"* | **KESİN** |
| XIV. yy sonu | *"**yine** Habeş topraklarına katıldığı … **anlaşılmaktadır**"* | **DESEN** |
| XVI. yy | *"tekrar Dehlek'in himaye ve kontrolüne girdiği … **anlaşılmaktadır**"* | **DESEN** |
| 1557-04-02 | *"2 Cemâziyelâhir 964 / 2 Nisan 1557"* — Özdemir Paşa | **KESİN** |

⇒ **Aradaki ~bir yüzyıl Masavva Dehlek'in değil HABEŞ'in elinde.**

### 🔴 VE İKİ KELİME HÜKMÜ DEĞİŞTİRİYOR

**① `anlaşılmaktadır` — TDV İDDİA ETMİYOR, ÇIKARIM YAPIYOR.**
Kaynak kendi hedge'ini koyuyor. ⇒ Kesintinin **varlığı** bile `KESİN` değil,
**`DESEN`**. (İlk yazımımda `KESİN` demiştim; **düşürüldü.**)

**② `yine` — Masavva DAHA ÖNCE DE Habeş'in olmuş.**
Manzara üç dönemli değil, **DÖNÜŞÜMLÜ**. XII–XIV. yüzyıldaki Dehlek evresi
zincirin **başı bile olmayabilir**; öncesinde en az bir Habeş evresi daha var.
⇒ *"Dehlek → Habeş → Dehlek → Osmanlı"* modeli **eksik** olabilir.

### Ve bunun maliyeti sayı değil, KAYIT

```
bugun   236 yil yanlis   ama DEFTERLI  -> sonraki kisi TEKRAR BAKAR
oneri   ~100 yil yanlis  ama ARASTIRILMIS gorunur -> sonraki kisi BAKMAZ
```

Sayı olarak öneri daha iyi, **kayıt olarak daha kötü.** Koordinatör bu yüzden
236 yıllık hatayı **bilinçli olarak yerinde bıraktı** — "sonra bakarız" değil,
ölçülmüş tercih. `uret_petek.py:1243`: *"yanlış renk 'biliyoruz' der."*

### 📌 Ve şunu kırıcı olsun diye değil, işe yarasın diye yazıyorum

Kesinti bilgisi **sizin gösterdiğiniz maddenin içinde.** *"Dehlek emîrlerinin
hâkimiyetinde"* alıntısı `masavva` maddesinden alınmış; **aynı paragrafın
devamı** alınmamış. Alıntı doğru, okuma eksik.

⇒ `§78`'in yeni bir yüzü: **bir düzeltmenin KAYNAĞI doğru olabilir ve düzeltme
yine de yanlış olabilir — çünkü kaynak, OKUNDUĞU YERE KADAR doğrudur.**

---

## 3. ⚠️ ALINTI STATÜSÜ — ÇÖZÜLDÜ, ve dersi burada

Alıntılara ilk turda **`WebFetch` üzerinden** ulaştım; ham sayfayı kendim
görmedim. Bunu bir risk olarak işaretledim; koordinatör uyarıyı ciddiye alıp
**bağımsız ikinci bir çekişle birebir metni aldı** (`9c31e0c`).

**Sonuç: kesinti GERÇEK, özetleyici uydurmamış. Ama İKİ KELİME düşürmüş.**

```
OZETIN VERDIGI:
  "XIV. yuzyilin sonu: Habes topraklarina KATILDIGI BELIRTILMEKTEDIR"
HAM METIN:
  "Adanin XIV. yuzyilin sonunda YINE Habes topraklarina katildigi, XVI.
   yuzyilda ise tekrar Dehlek'in himaye ve kontrolune girdigi ANLASILMAKTADIR"
```

🔴 **Özetleyici İÇERİĞİ korudu, KİPLİĞİ düşürdü.** Kaybolan şey olgu değil,
*"bu bir çıkarımdır"* uyarısıydı — **yani tam da güç etiketinin dayandığı
bilgi.**

⇒ **Ders: özet, bilginin kendisini değil GÜVENİLİRLİĞİNİ siler.** Cümle hâlâ
doğru, ama artık ne kadar güveneceğini bilmiyorsun. Ve bir düzeltmeyi
haklı çıkaran şey cümlenin içeriği değil, **güvenilirliğidir.**

📌 Bu dosyanın ilk hâlinde bu iki cümle `KESİN` etiketiyle duruyordu. Şimdi
`DESEN`. **Etiketi değiştiren şey yeni bir bilgi değil, aynı bilginin ham
hâliydi.**

---

## 4. ÜÇ SOMUT SORU

### ① 🔴 TDV'nin ÇIKARIMI DOĞRU MU? — soru değişti
**İlk yazımımda soru *"üç dönemi yıl düzeyinde tarihlendiren kaynak var mı"*
idi. Artık değil.** Ham metin TDV'nin *"anlaşılmaktadır"* dediğini gösterdi:
ortada bir **iddia değil, çıkarım** var.

⇒ Soru artık **"TDV ne diyor"** değil, **"TDV'nin çıkarımı doğru mu"**.
```
· Kesinti gercekten oldu mu?  (varlik: DESEN, KESIN degil)
· "yine" ne demek — oncesinde kac Habes evresi var?
· Ve ancak bunlar tutarsa: sinirlar yil duzeyine iner mi?
```
Habeş/Etiyopya külliyatı TDV'den keskin olabilir; Dahlak Sultanlığı ve
Etiyopya–Adal ilişkileri üzerine neşirler hem çıkarımı sınayabilir hem yıl
verebilir.
⚠️ **Sıra önemli:** önce çıkarım sınanır, sonra tarihlendirilir. Tarihlendirme
çalışması, sınanmamış bir çıkarımı *"araştırılmış"* gösterir — bugün
`dehlek`i durduran hatanın tam kendisi.

### ② Orta dönemi `habesistan` mı alacak?
`habesistan` kimliğinin **rengi hazır** — VERİ KİMLİK `dehlek`i ondan
kaçırırken ölçmüştü (min ΔE 36,2). Yani orta dönem için karşılık **mevcut**,
eksik olan yalnız tarih.
⇒ Ama bu bir **kaynak hükmü**: TDV *"Habeş toprakları"* diyor; bu, dizindeki
`habesistan` kimliğiyle aynı siyasî varlık mı, yoksa daha gevşek bir ifade mi?
Maddeyi okuyan siz karar verin.

### ③ `f:` için yıl veren bir neşir var mı?
TDV **hiçbir yıl vermiyor** — ne kuruluş ne bağımsızlık için.
```
"III. (IX.) yuzyilda Abbasi idaresinden cikan"       -> yuzyil
"VI. (XII.) yuzyildan itibaren ... bagimsiz"          -> yuzyil
```
⇒ `f:"1100-01-01"` ya da `f:"1281-01-01"` yazmak `§D8` (uydurulmuş kesinlik)
ve `§76` (paylaşılan yer tutucu) ihlali **aynı anda**. Dizideki tarihlerin
**%60'ı zaten `YYYY-01-01`**; kuyruğa bir tane daha eklemek kapatmaktan kötü.

---

## 5. 🔴 VE ÜÇÜ DE CEVAPSIZ KALIRSA — DOĞRU SONUÇ "YAZMAMAK" DEĞİL

Bugün kalemi açık bıraktık çünkü **belirsizliği taşıyacak bir şema yok.**
Ama "yazmamak" kalıcı çözüm değil: bilgi **var**, yalnız kesin değil.
Kaydı hiç yazmamak, *"bilmiyoruz"*u da *"yok"*a çeviriyor.

Şemanın taşıması gereken şey en az şu:
```
· f: icin ARALIK ya da BELIRSIZLIK derecesi (yil degil, pencere)
· bir kimligin ARALIKLI sahipligi (Dehlek → Habes → Dehlek)
· ve haritanin "bu donemde kim oldugu belirsiz"i BOSLUKTAN AYIRT etmesi
```
⚠️ **Bu bir şema kararıdır, ÇAPRAZ DOĞU'nun değil koordinatör + MOTOR'un
işidir.** Buraya yalnız *"ihtiyaç ölçüldü ve şurada doğdu"* diye yazıyorum.
`dehlek` bu şemaya ihtiyaç duyan **ilk ölçülmüş vaka**; muhtemelen tek değil.

---

## 6. DEVREDİLEN — kazanç kalıcı

```
✅ t: 1557-04-02      KESIN. "2 Cemaziyelahir 964 / 2 Nisan 1557".
                      Sizin oneriniz birincil kaynakta gun duzeyinde tuttu.
✅ slug = dehlek      baglayici (koordinator karari; dahlak YER adi,
                      dehlek KIMLIK adi)
✅ renk = #a838a8     hazir, min dE 36,2 (habesistan'a karsi), VERI KIMLIK
                      olcumu, OTURUM-9-ILERLEME EK-12
✅ ham metin          koordinator birebir cekti (9c31e0c) - devralanin
                      ham metni yeniden gormesine GEREK YOK
🔴 f:                 BULUNAMADI (TDV yalniz yuzyil veriyor)
🔴 pencere            SUREKLI DEGIL — ama bu TDV'nin CIKARIMI (DESEN),
                      iddiasi degil. Once cikarim sinanmali.
🔴 "yine"             oncesinde en az bir Habes evresi daha var - manzara
                      uc donemli degil DONUSUMLU olabilir
```

**Sıra:** ÇAPRAZ DOĞU **önce TDV'nin çıkarımını sınar** → tutarsa tarihlendirir
→ kimlik oturumu kaydı+rengi yazar → YAMACI noktaları çevirir.
**Zincirin hiçbir halkası, öncekini atlayarak başlayamaz** — bugünkü durdurma
tam da bir halkanın atlanmasından doğdu.

🔴 **YAMACI'ya bu hâliyle paket göndermeyin.** Kalem *"f: eksik"* diye açık
duruyor ama gerçek engel o değil; repoint hazır sanılırsa ~100 yıllık yeni
hata canlıya girer.
