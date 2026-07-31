# ÖLÇÜM — coğrafya ekseni: arayüz ne taşıyabilir?

**Ölçen:** ARAYÜZ (A) · **31 Temmuz 2026** · **Uygulama YOK** — U4'ün şeması
gelmeden kod yazılmaz. Amaç: şema yazılmadan **önce** arayüzün şartlarını bildirmek.

---

## 🔴 1. BELİRLEYİCİ BULGU — COĞRAFYA BÖLÜNTÜ DEĞİL

```
994 maddenin 994'ünde `yer:` var (%100) · dizi olan: 0 (serbest metin)

madde başına yer sayısı (virgülle ayrıştırılmış):
   1 yer   516 madde  %51,9
   2 yer   362 madde  %36,4
   3 yer    84 madde   %8,5
   4 yer    24 madde   %2,4
  5+ yer     8 madde   %0,8
  ⇒ BİRDEN ÇOK yer taşıyan: 478 madde (%48,1) · ortalama 1,65 yer/madde
```

⚠️ **Bu, `etiket:` ile aynı yapı** (1,7 etiket/madde) — ve `etiket:`i konu
süzgecinde tam bu yüzden **reddetmiştik**: *dışlama yalnız bölüntü üzerinde
çalışır.*

### Sonuç: `k:` kararı coğrafyaya AKTARILAMAZ

Konu süzgecinde *"İç düzeni kapat"* demek, o maddeleri **tam olarak**
kaldırmak demekti; çünkü her madde tek bir `k:` taşıyor. Coğrafyada
*"Balkanları kapat"* dendiğinde, hem Belgrad hem İstanbul geçen bir madde
**yine görünür** — çünkü İstanbul hâlâ seçili.

> **Coğrafyada dışlama "bu madde X ile ilgili değil" anlamına gelemez;**
> ancak **"bu madde seçili bölgelerin HİÇBİRİNE dokunmuyor"** anlamına gelir.

📌 Ve bu, konu ekseninden farklı olarak **yanlış değil, doğru** semantik —
çünkü kullanıcının coğrafyadaki zihinsel modeli *"şurada olanları göster"*,
*"bunu şu diye sınıflandır"* değil. Ama **aynı görünen iki kutucuk ailesinin
farklı davranması** kullanıcıya anlatılmalı, yoksa "kapattım ama duruyor" der.

🔴 **U4'e şemadan ÖNCE söylenmesi gereken:** coğrafya ekseni çok değerli olacak
ve bu bilinçli bir karar olmalı. Tek değerli yapmak ("her maddenin bir ana
yeri") mümkün ama **bilgi kaybı**: 478 maddenin ikincil yerleri düşer.

---

## 2. KAÇ ÖĞE — yaprak kademesi süzgeçte GÖSTERİLEMEZ

```
ham `yer:` değeri (benzersiz)        679
virgülle ayrıştırılmış (benzersiz)   925
yalnız TEK maddede geçen             711  (%77)
```

⇒ Yaprak (şehir) kademesinde **925 öğe** var ve **%77'si tek bir maddede**
geçiyor. Kutucuk listesi olarak gösterilemez; gösterilse de %77'si tek maddelik
bir süzgeç düğmesi olurdu.

> **Süzme kıta / alt bölge / ülke kademelerinde yapılmalı.** Şehir kademesi
> arama kutusuyla erişilir, kutucukla değil.

📌 Kıyas: konu süzgecinde **7 kutucuk** var ve en küçük grup 10 madde. Burada
en küçük grup **1 madde** olurdu — süzgeç değil, liste.

---

## 3. PANELDE KAÇ SATIR — kısmen ölçüldü

Ölçülebilen (CSS'ten): `.suzgec-govde label` = 12 px yazı + 2 px dolgu →
**satır başına ~20 px**. Konu süzgeci 7 satır ≈ **140 px**.

Tahmin (U4'ün şeması gelince kesinleşir):
```
5 kıta                        →  100 px
+ ~12 alt bölge açılırsa      →  340 px
+ ülkeler açılırsa            →  taşar
```
⇒ **Ağaç tamamen açık duramaz.** Kademeli açılır-kapanır olmalı ve varsayılan
yalnız kıtalar görünmeli.

⏳ **ÖLÇÜLEMEDİ:** panelin gerçek yüksekliği. Bu oturumun tarayıcı paneli gizli
(`visibilityState: "hidden"` → `requestAnimationFrame` hiç ateşlemiyor →
MapLibre stili yüklemiyor). Kaç satırın taşmadan sığdığı tarayıcıda ölçülür.

---

## 4. ARAYÜZÜN U4'TEN İSTEDİKLERİ — şema yazılmadan önce

1. **Çok değerlilik bilinçli olsun.** Bir madde birden çok yere bağlanacaksa
   (%48,1 zaten öyle) şema bunu taşısın; tek değerliye zorlamak 478 maddenin
   ikincil yerlerini düşürür.
2. **Kademe sayısı beşi geçmesin** (kıta → alt bölge → ülke → bölge → şehir).
   Arayüz beş kademeyi ağaç olarak taşır; altıncı kademe ağacı okunmaz yapar.
3. **Süzülebilir kademeler işaretlensin.** Şema hangi kademede kutucuk
   olacağını söylemeli; 925 yapraklı bir ağaçta bunu arayüz tahmin edemez.
4. **Her öğenin ata zinciri türetilebilir olsun** (`PLAN-ETIKET §1.1`: en dar
   yer yazılır, üstü türetilir). Arayüz "Balkanlar seçildi" dediğinde hangi
   maddelerin kapsandığını bu zincirden hesaplayacak.

---

## 5. ÖZET — üç cümle

1. **Coğrafya bölüntü değil** (%48,1 çok yerli): konu süzgecindeki dışlama
   semantiği aktarılamaz; "seçili hiçbir bölgeye dokunmuyor" anlamına döner.
2. **925 yaprak, %77'si tek maddelik**: süzme üst kademelerde yapılmalı,
   şehir kademesi aramayla erişilmeli.
3. **Ağaç varsayılan kapalı olmalı**; beş kademe taşınabilir, altıncı taşınmaz.
