# ÖLÇÜM — 397 KAYDIN ALAN KAPSAMASI: `kur` tek miydi?

**Oturum:** KURE GORUNUM · sevk **M-3015** · 5 Eylül 2026, 19:5x
**Cins:** ÖLÇÜM — hüküm yok, kod yazılmadı, veri yazılmadı (koşu 5b canlı).

> **Soru:** `kur:` bu gece bir alanın sessizce düştüğünü gösterdi. Aynı
> soru öteki alanlar için hiç sorulmadı, ve taşıma adım ⑥'da **geri
> dönülmez.** Bir alan taşımadan SONRA kayıpsa, kaybı kimse aramaz.

**Evren:** `denetim/` altında **32 dosya · 397 kayıt**, her dosya
`node`+`vm` ile **ayrı bağlamda** okundu (`§7` sessiz ezme önlemi).
Alan kümesi **tahmin edilmedi, DÖKÜLDÜ.**

---

## SONUÇ

🟢 **`kur` TEKTİ — ve artık kapalı.** Kayıt seviyesinde 🔴 kova **boş**,
ve bu **üç bağımsız yoldan** doğrulandı:

```
① aracın TAŞIDIĞI küme      10 yük alanının 10'unu da kapsıyor
② 🟡 kovanın GERÇEK sınavı   6 alanın 6'sı YALNIZ yeni noktada (mevcut kayıt 0)
③ girdi.py'nin KÜTÜKLERİ     kayıt 17/17 · dönem 14/14 TANINIYOR
```

⚠️ Bu *"kusur yok"* değil, ***"bu üç kapıdan ölçüldü ve geçti"*** demek.
Ölçülmeyen kapılar `§ÖLÇMEDİM`de.

---

## ① KULLANILAN ALAN KÜMESİ — döküldü

**Kayıt seviyesi — 17 ayrı alan:**
```
ad 397 · s 380 · kaynak 257 · isg 137 · d 75 · not 72 · lat 60 · lon 60
v 58 · neden 51 · bos 33 · kasitli_bosluk 30 · tur 24 · g 22 · k 22
m 22 · kur 10
```
**Dönem seviyesi (d/s/v/isg içinde) — 14 ayrı alan:**
```
s.f 1922 · s.t 1922 · s.d 1922 · isg.f 199 · isg.t 199 · isg.d 199
d.f 87 · d.t 87 · isg.kaynak 62 · v.f 52 · v.t 52 · v.k 4
s.kaynak 1 · d.y 1
```
📌 Dönem alanları **ayrıca kaydedilmek zorunda değil**: `ALAN_RX` bütün
`d:[…]` metnini değiştiriyor, yani dönem içindeki her alan **birlikte
biniyor.** Aracın kümesine bakmak dönem seviyesi için yeterli değil —
ikinci kapı (`girdi.py`) için ③'e bak.

## ② ARACIN TAŞIDIĞI KÜME — `kur` düzeltmesinden SONRAKİ hâli
```
node süzgeci   d · s · v · isg · m · kaynak · bos · neden · not · kur   (10)
ALAN_RX        d · s · v · isg
CATISABILIR    d·s·v·isg·m·kaynak·bos·neden·not·kur                     (10)
SKALER_ALANLAR m·kaynak·bos·neden·not·kur                               (6)
SKALER_KORUNAN kaynak·bos·neden·not·kur                                 (5)
```
🟢 Üç kümenin üçü de **tutarlı**: node süzgeci = `ALAN_RX ∪ SKALER_ALANLAR`.
`kur` dördüne de inmiş (commit `a42a5de`), ve `SKALER_KORUNAN`da olması
doğru — bir kuruluş tarihi araştırma ürünüdür.

## ③ ÜÇ KOVA

| kova | alan | ölçüm |
|---|---|---|
| 🟢 **TAŞINIR** | `s · kaynak · isg · d · not · v · neden · bos · m · kur` | 10 alan, aracın kümesinde |
| 🟡 **BAŞKA KOL** | `lat · lon · tur · g · k · kasitli_bosluk` (+`ad` = anahtar) | 6 alan, yeni-nokta kolunda elle |
| 🔴 **SESSİZ DÜŞER** | — | **0 alan** |

### 🔴 VE 🟡'NİN SINAVINI İLK TURDA YANLIŞ KURDUM
İlk turda 🟡'yi **alan adına** göre ayırdım (*"`lat`/`lon` zaten yeni
nokta kolunda iner"*). **`kur` dersinin sınavı bu değildi:** `kur` de
10 kayıtta vardı ve önemli olan **kaçının MEVCUT kayda yazdığıydı** —
biri. Aynı sınav bütün 🟡 alanlara uygulandı:

```
alan             toplam    YENİ NOKTA    🔴 MEVCUT KAYIT
tur                  24            24          0
lat                  60            60          0
lon                  60            60          0
g                    22            22          0
k                    22            22          0
kasitli_bosluk       30            30          0
```
🟢 **Altısının altısı da yalnız yeni noktada.** Mevcut bir kayda `tur:`
ya da `kasitli_bosluk:` yazan **tek bir yama yok** ⇒ 🟡 kovası
gerçekten kasıtlı, `kur` gibi bir kaçak değil.
⚠️ Ve bu bir **tasarım güvencesi değil, bugünkü verinin ölçümü**:
yarın mevcut bir kayda `tur:` yazan bir yama gelirse **sessizce düşer**
ve hiçbir şey ötmez.

## ④ HANGİ KAPI ELERDİ — 🔴 boş olduğu için koşulmadı
Soru şuydu: *node süzgeci mi eliyor, yoksa süzgeci geçip alan mı
okunmuyor?* 🔴 kovası boş çıktığı için bu ayrım **hiçbir alana
uygulanmadı.** Yine de `kur`un kapanmış hâli iki kapının **bağımsız**
olduğunu doğruluyor:
```
yalnız-`kur` yama    → süzgeç eskiden ELERDİ  (Python'a hiç ulaşmaz)
`kur`+`kaynak` yama  → süzgeci GEÇER, alan okunmaz, `atlanan`a KAYIT DÜŞMEZ
```
Biri düzeltilseydi öteki gizlenirdi; dördü birlikte indiği için ikisi de
kapandı.

## ⑤ İKİNCİ KAPI — `girdi.py` alanı TANIYOR MU?
Araç bir alanı taşısa bile motor onu **tanımıyorsa** taşımadan sonra
uyarı verir. Bu kapı sevkte yoktu; ayrıca ölçüldü:
```
girdi.BILINEN_ALANLAR         24 alan   → 397'nin 17 alanı: 17/17 TANINIYOR 🟢
girdi.BILINEN_DONEM_ALANLARI   7 alan   → 14 dönem alanı:   14/14 TANINIYOR 🟢
                              (d · enklav · f · k · kaynak · t · y)
```
🟢 **397 kayıt motora TEK BİR bilinmeyen alan getirmiyor.** `d.y` (1
dönem) meşru — `y` kütükte var.

🔵 **Ve külliyattaki tek bilinmeyen alan bu kümede DEĞİL:** `s.kesinlik`
(2 kayıt) **canlı veride** duruyor (`yerlesimler.js:Vidin` ·
`yerlesimler_ok106.js:Kızıkermen`) ve her `girdi.yukle()` çağrısında
uyarı basıyor. Bu gece ayrıca ölçüldü (iki kütük vakası); **taşımanın
getirdiği bir şey değil.**

---

## 🔴 KENDİ ÖLÇÜM KUSURUM
İlk turda node süzgecini regex'le çıkarmaya çalıştım ve **`[]` döndü** —
boş küme. Kusur regex'te (`r\.X` kalıbını yanlış sınırladım). Zararı
ölçüldü:
```
NODE kümesi ④'ün mantığında KULLANILIYORDU
🟢 ama 🔴 kova boş çıktığı için ④ HİÇ KOŞMADI ⇒ yanlış çıktı ÜRETİLMEDİ
```
İkinci turda blok sınırından çıkarıldı ve **10 alan** verdi. ⇒ Boş bir
küme *"süzgeç hiçbir şey istemiyor"* diye de okunabilirdi; `§11`in
***`0`, "yok" ile "bakmadım" arasında ayrım yapmaz*** kuralı, bu sefer
kendi aletimde.

## ÖLÇMEDİM
```
⚪ `_kademe_uygula.py`nin kendi alan kümesini — `k`/`kd` kolunu ayrı
   ölçmedim; 🟡'deki `k` (22 kayıt) yeni noktada iniyor, ama KADEME
   kolunun mevcut kayıtlarda ne taşıdığı bu ölçümün DIŞINDA
⚪ `data/` altındaki 58 dosya / 3267 kaydı — sevk `denetim/`in 397'sini
   sordu, ötekini ölçmedim
⚪ Taşıma SONRASI `denetle.py` etkisini — bu bir alan ölçümü, değişmez
   ölçümü değil
⚪ Bir alanın DEĞERİNİN doğruluğunu — yalnız alanın TAŞINIP taşınmadığı
   ölçüldü, içeriği değil
```
