# ÖLÇÜM — komşu devlet dolgusu "boş" mu görünüyor?

**Ölçen:** ARAYÜZ (A) · **31 Temmuz 2026**

> Kullanıcı Arnavutluk'ta soluk bir alan görüp *"bu boş bölgede kim var, hata mı
> doğru mu"* diye sordu. Koordinatör ölçtü: sahipsiz değil — 1450-1478 arası
> `arnavutluk` (İskender Bey). Hipotezi: **%44 opaklık sınırın altında.**

---

## 🔴 HİPOTEZ DOĞRULANMADI — Arnavutluk soluk DEĞİL

Yöntem: dolgu altlığa kompozitlenir (`alfa·renk + (1−alfa)·altlık`), sonuç
altlıkla **CIE76 ΔE** olarak karşılaştırılır. Altlık `#e8dfc8` (`g-kara`,
artık varsayılan zemin).

```
arnavutluk  #8f5b7d @0.44  →  ΔE = 24,0      en soluk 62. / 114
```

⇒ **Ortada.** 114 kimliğin yarısı ondan daha soluk. ΔE 24 geniş bir alan için
rahatça ayırt edilebilir bir fark; "görünmüyor" diyebileceğimiz aralıkta değil.

**Eşik sayımı:**
```
ΔE <  5 :   0 kimlik
ΔE <  8 :   1        papalik #c9c1a3  ΔE 5,1
ΔE < 10 :   2        + sovalye #b0a08a  ΔE 9,7
ΔE < 12 :   3        + akkoyunlu #b5bcc9  ΔE 10,3
ΔE < 15 :  15  (%13)
```
⇒ Gerçekten görünmez sayılabilecek olan **bir tane**: `papalik` (ΔE 5,1).
Bu **gerçek bir kusur**, ama kullanıcının bildirdiği kusur **değil.**

---

## 🔴 ASIL ETKİ MUTLAK DEĞİL, GÖRELİ

```
Osmanlı doğrudan  #8e0b22 @0.68  ΔE = 58,6
Osmanlı tâbi      #b2384a @0.60  ΔE = 42,5
komşular @0.44    min 5,1 · %25 17,5 · medyan 22,6 · %75 29,7 · max 46,8
```

| | ΔE | Osmanlı'nın kaçta kaçı |
|---|---|---|
| en soluk komşu (papalik) | 5,1 | **%9** |
| %25 dilim | 17,5 | %30 |
| medyan komşu | 22,6 | %39 |
| **arnavutluk** | **24,0** | **%41** |
| en belirgin komşu | 46,8 | %80 |

> **Medyan komşu, Osmanlı dolgusunun %39'u kadar belirgin.** Yani sorun
> "Arnavutluk görünmüyor" değil; **Osmanlı'nın yanında her komşu sönük
> kalıyor.** Göz mutlak parlaklığı değil **yan yana duran farkı** okuyor.

📌 Ve bu **tasarımın kendisi**: Osmanlı öne çıksın diye komşular bilerek
soluklaştırılmış (0,44 ↔ 0,68). Niyet doğru — bu bir Osmanlı atlası. Ama bedeli
şu: kullanıcı komşu dolgusunu *"boş"* diye okuyabiliyor.

⚠️ **Opaklığı topluca yükseltmek çözüm değil** — Osmanlı'nın öne çıkmasını
bozar, yani kazanılan şeyi kaybettirir. Ölçüm bunu destekliyor: arnavutluk
zaten ΔE 24; sorun onun düşüklüğü değil, karşısındakinin yüksekliği.

---

## ÖNERİ — üç ayrı iş, karıştırılmasın

**1. `papalik` (ΔE 5,1) düzeltilsin.** Tek gerçek kontrast kusuru. Renk
`#c9c1a3` altlığa (`#e8dfc8`) fazla yakın. `renkler.py` MOTOR'un dosyası —
bildirilecek, ben yazmıyorum. `sovalye` (9,7) ve `akkoyunlu` (10,3) sınırda.

**2. Kullanıcının asıl sorusu kontrastla çözülmez.** *"Bu boş bölgede kim
var?"* — cevabı **etiket**tir, renk değil. Bölge adı etiketleri (bugün
eklendi) ve devlet adı etiketleri bu boşluğu kapatıyor; Arnavutluk'ta etiket
çıkmıyorsa sebebi **gövde alanının etiket eşiğinin altında kalması** olabilir.
🔬 Ölçülmeli: 1450-1478 arası `arnavutluk` gövdesi etiket eşiğini geçiyor mu?

**3. 🔴 GERÇEK sahipsizlik ayrı bir gösterim istiyor — kullanıcının kendi
önerisi.** *"Devletsiz bölge etiketi yapıştırılabilir ya da farklı bir renk
kullanılabilir."* Bu talep geçerli ve kapsamı büyük: 1288'de 48 sahipsiz petek,
çöl tavanı sonrası 3,59 milyon km². Bugün onlar da yalnız "boşluk".
⇒ İki farklı "boş" var ve kullanıcı ikisini ayırt edemiyor:
```
soluk komşu dolgusu   → bir devlet VAR, adı yazmıyor
gerçekten sahipsiz    → devlet YOK, ve bu KASITLI
```
Birincisi etiketle, ikincisi **desen/etiketle** çözülür. Ayrı işler.
