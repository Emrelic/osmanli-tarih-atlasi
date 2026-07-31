# ÖLÇÜM — alan sayısını öne çıkarmak

**Ölçen:** ARAYÜZ (A) · **31 Temmuz 2026** · küre ertelendikten sonra açılan iş

> Kullanıcının şikâyeti *"Rumeli şişik görünüyor"* değil aslında; altındaki şey
> **"toprak kazandı mı kaybetti mi"yi gözle yanlış okumak.** Projeksiyon o
> hissin tek kaynağı değildi ve düzeltmesi en pahalısıydı. Elimizde **doğru
> km² değerleri** var; soru bunların nerede gösterileceği.

---

## 1. VERİ HAZIR — çalışma anı maliyeti YOK

```
dönem sayısı           462
ao (Osmanlı) taşıyan   462   ← %100
av (tâbi) taşıyan      373
örnek  1468-01-01  ao 823.000  av 203.000
```
⇒ Dönem başına alan **zaten hesaplı**, üretimden geliyor. Gösterim için tek bir
hesap yapılmasına gerek yok.

## 2. FARK TÜRETİLEBİLİYOR — ama işaretine GÜVENİLEMEZ

```
ardışık fark hesaplanabilen : 461 / 461
  kazanç 229 · kayıp 157 · değişmeyen 75
  |fark| km²: medyan 10.000 · %90 115.000 · azami 869.000
```

### 🔴 VE BURADA TUZAK ÇIKTI

Dönem **adı** ile alan **farkının işareti** çelişebiliyor:

```
Katılım + pozitif (tutarlı)  226
Katılım + NEGATİF (ÇELİŞKİ)   24
Kayıp   + negatif (tutarlı)  133
Kayıp   + POZİTİF (ÇELİŞKİ)    3
                              --
çelişki toplam                27  (işaretli 386 farkın %7'si)
```

Örnekler:
```
1671-01-01   -596.000 km²   "Katılım: Cezayir, Konstantin, Tilimsan…"
1547-02-01     -1.000 km²   "Katılım: Taiz"
1833-06-30   + 32.000 km²   "Kayıp: Kütahya, Konya, Karaman"
```

**Sebebi kusur değil, tanım farkı:** dönem **adı** o kırılmada *hangi
yerleşimlerin katıldığını* söylüyor; **fark** ise o kırılmadaki **net**
değişimi veriyor. Aynı gün başka yerde daha büyük bir kayıp varsa ad "Katılım"
kalır, sayı eksi çıkar. Küçük çelişkiler (1.000-3.000 km²) ayrıca `ao`'nun
bine yuvarlanmasından.

> ⚠️ **Tasarım sonucu:** bir kronoloji maddesinin yanına **işaretli fark**
> yazmak (`+120.000 km²`) bu 27 vakada **maddenin metniyle çelişen bir sayı**
> gösterir. Kullanıcı bunu kusur sanar — ve haklıdır, çünkü sayı "bu maddenin
> etkisi" gibi okunur, oysa "o günün net toplamı"dır.
> 📌 Bugün beş kez gördüğümüz sınıf: **makul görünen ama yanlış okunan sayı.**

## 3. BUGÜN PANELDE NE VAR

`app.js:2068` — lejantta yalnız **anlık toplam**:
```
📐 ≈ 823 bin km²  (+203 bin bağlı)
```
Şehzade paylarında ayrıca `≈ N bin km² (şehzade payları)`.

**Boşluk:** anlık değer var, **değişim ve karşılaştırma yok.** Kullanıcı
"büyüdü mü küçüldü mü"yü ancak iki farklı tarihe gidip sayıyı akılda tutarak
anlayabiliyor — yani gözle. Şikâyetin kaynağı tam burası.

---

## 4. ÖNERİ — ölçümden sonra, ve tuzağa göre

🔴 **Madde başına işaretli fark YAZILMAYACAK.** Ölçüm bunu eledi (§2).

Bunun yerine **iki değişiklik**, ikisi de mevcut lejant satırında:

1. **Zirveye göre konum.** `📐 ≈ 823 bin km² · zirvenin %64'ü`
   Zirve tek sefer hesaplanır (462 dönemin en büyüğü). Gözün yapamadığı şeyi
   sayı yapar: **her tarihte aynı ölçeğe göre** okuma.
2. **Yön oku, sayısız.** Bir önceki döneme göre `▲` / `▼` / `–`.
   ⚠️ **Miktar yazılmıyor**, yalnız yön — çünkü miktarın işareti güvenilir
   (fark hesabı doğru), ama **bir maddeye atfedilmesi** güvenilir değil.
   Yön, "o gün toprak arttı/azaldı" demektir ve bu doğrudur.

📌 Neden bu ikisi: kullanıcı yeni bir panel istemedi, **yanlış okumadan**
şikâyet etti. İkisi de mevcut satıra sığıyor, yeni yüzey açmıyor.

⏳ **Ölçülemedi:** görünüm. Bu oturumun paneli gizli (`visibilityState:
"hidden"` → rAF ateşlemiyor). Yazıldığında "sınavlık" olarak gidecek.
