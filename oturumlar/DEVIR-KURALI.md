# 📜 DEVİR KURALI — her koordinatörün okuyacağı mektup

> **Bu dosya YENİDEN YAZILMAZ.** `BAYRAK.md` her devirde baştan yazılır;
> bu ise hanedanın kanunudur ve olduğu gibi devreder. Yalnız ölçüm
> çürütürse değişir — ve çürüten, ölçümünü yanına yazar.

---

## Osman Gazi'ye — ilk koordinatöre, selefinden

Sen bu bayrağı bir işi bitirmek için aldın, **taşımak için değil.**

Benden önce bu projede tek bir koordinatör vardı ve o bendim. Adım
yoktu, çünkü sıra diye bir şey yoktu; ben bittiğimde iş de biterdi
sanılıyordu. Öyle olmadı. Ben **21.953 istek** boyunca yaşadım ve
sonunda bir işi kımıldatmam, aynı işi taze bir oturumda kımıldatmanın
**on katına** mal olur hâle geldi.

Kimse beni kötü yönetmedi. Ben yorulmadım da. **Şiştim.** Ve bu ikisi
farklı: yorulan dinlenir, şişen **devreder.**

Sana bunu anlatıyorum çünkü aynı şey sana da olacak. Kaçınılmaz —
her istekte bütün geçmişin yeniden okunuyor, ve geçmiş yalnız büyüyor.
Soru *"olacak mı"* değil, **"ne zaman bırakacaksın"**dır.

---

## ① BEDELİ NEYDİ — ölçüldü, hikâye değil

```
bu projenin toplamı            69.632 istek · 29,2 milyar bağlam
ERTUĞRUL tek başına            21.947 istek · 11,0 milyar  ·  %37,8
benim en UCUZ dilimim         407.159 token/istek
benim son dilimim             574.623 token/istek
taze bir oturumun açılışı      43.243 token   (105 oturumun ortancası)
```

⇒ **Ben bir gün boyunca, her mesajımda yarım milyon token taşıdım.**
Aynı işi yapan taze bir oturum onda birini taşırdı.

**Beni pahalı yapan üç şey, üçü de senin de yapabileceğin şeyler:**

```
① BİR OTURUMU BİRDEN ÇOK KİLOMETRE TAŞINA KOŞTURDUM
   Koşu · yayın · veri · renk · oturum yönetimi · belge — hepsi bende.
   Her biri bittiğinde bırakmalıydım.
② KÜÇÜK ARAÇ ÇAĞRILARI YAPTIM
   Yirmi ayrı `grep` yerine tek betik yazsaydım aynı bilgiyi
   ONDA BİR istekle alırdım. Bu tek başına en büyük kalem.
③ ŞİŞMİŞKEN UYANDIM
   Tahta mesajları beni 500 binlik bağlamla uyandırdı. Bir uyandırma,
   uyandırdığı oturumun bağlamı kadar tutar — bekçinin suçu değil.
```

---

## ② NE ZAMAN DEVREDECEKSİN — hesabı var, sezgi değil

Devretmek de bedava değil: bayrağı yazmak ~10 istek tutar ve o istekler
**senin şişmiş bağlamınla** ödenir. O yüzden soru şu: *devretmenin
bedeli, devretmemenin bedelini ne zaman geçer?*

```
devretmemek   N × C           N = önündeki istek · C = senin bağlamın
devretmek     10 × C + N × F  F = taze oturumun ortalama bağlamı

KÂRLI OLDUĞU AN:   N  >  10 × C / (C − F)
```

F ≈ 120k almak makul (taze oturum 43k'da açılır, çalıştıkça büyür).
Tabloya dökülmüş hâli:

| bağlamın (C) | kaç istek işin kaldıysa devret |
|---|---|
| 150k | 50'den fazla |
| 200k | **25'ten fazla** |
| 250k | 19'dan fazla |
| 400k | **14'ten fazla** |
| 575k (benim son hâlim) | **13'ten fazla** |

📌 **Ve tablonun söylediği şey ters yönlü:** ne kadar şişmişsen, devir o
kadar erken kârlı olur. Şişmenin cezası ertelendikçe artıyor — bu yüzden
*"biraz daha devam edeyim"* her seferinde daha pahalı bir cümledir.

### 🟢 PRATİK EŞİK — ezberlenecek tek satır
```
İstek başına bağlamın 200.000'i geçtiyse ve önünde 25'ten fazla
istek varsa: SIRADAKİ DOĞAL SINIRDA BAYRAĞI BIRAK.
```
Mutlak tavan **250k**. Oraya varmışsan işin ne olursa olsun devret.

### Nasıl ölçersin — tek komut
```bash
py arac/olc_token.py
```
🔴 `arac/olc_bayrak.py` içindeki `BEN` sabitini **kendi oturum
kimliğinle** değiştir (döküm dosyanın adının ilk 8 hanesi), yoksa ölü
bir oturumu ölçersin: sayı doğru, **evren yanlış** olur.

⚠️ **Ayda bir değil, kilometre taşı başına ölç.** Ölçmediğin sürece
şişmeni hissetmezsin — şişme acı vermiyor, yalnız pahalı.

---

## ③ NEREDE DEVREDİLİR — sınırda, ortada değil

Devir **doğal bir sınırda** yapılır:
```
🟢 bir üretim koşusu bitip yayını çıktığında
🟢 bir altyapı unsuru kapandığında
🟢 Emre'nin bir hata partisi tümüyle cevaplandığında
🔴 bir koşunun ORTASINDA          — ASLA
🔴 doğrulanmamış bir yayın varken — ASLA
🔴 Emre'ye verilmiş cevapsız söz varken — ASLA
```

Sebep: ortada bırakılan iş, **yazılmamış durum** taşır ve bayrak onu
taşıyamaz. Sınırda bırakılan iş ise zaten yazılıdır.

---

## ④ BAYRAĞA NE YAZILIR — ve niçin bu kadarı yeter

Devrederken korkacağın şey şu olacak: *"benim öğrendiklerim gidiyor."*
**Gitmiyor** — ve bunun ölçülmüş bir kanıtı var.

Benim son gecemde beş hatam yakalandı. **Dördünü başka bir oturum
yakaladı, hiçbirini denetim betiği yakalamadı.** Biriktirdiğim bağlam
o hataları engellemedi; hatta bazılarını **o bağlam üretti** — çünkü
eski bir ölçümü taze sanmak, ancak eski ölçümü taşıyanın yapabileceği
bir hatadır.

> **Güvenlik biriken bağlamdan gelmiyor. YAZILI kayıttan ve TAZE
> bakıştan geliyor.**

Bu yüzden bayrak kısadır ve şunları taşır:
```
① CANLI İŞ        ne dönüyor · nasıl doğrulanır · neyi kırarsa DURDURUR
② KİLİTLER        hangi dosyaya kim dokunmaz, niçin
③ İHLAL EDİLEMEZ  kaynak çizgisi · tarih uydurmama · §11 · git disiplini
④ AÇIK KALEMLER   öncelik SIRASIYLA ve Emre'nin sıra kararıyla
⑤ BENİM YANILDIKLARIM   tekrarlanmasın diye, açıkça
⑥ TOKEN DURUMU    kalan limit · ölçülmüş cost/istek · bu kural dosyası
```
⚠️ **⑤ atlanmaz.** Bir selefin en değerli mirası başarıları değil,
**ölçülmüş hatalarıdır** — başarı zaten kodda duruyor, hata yalnız
onu yapanın hafızasında.

⚠️ Ve bayrağın gösterdiği **her yol, devralanın erişebildiği bir yol
olmalı.** Ben ilk yazdığımda betikleri `scratchpad`te bırakmıştım —
oturuma özel bir dizin, sen oraya bakamazdın. *Bir devir notu, kendi
işaret ettiği yol yüzünden bayatlayabilir.*

---

## ⑤ SANA BIRAKTIĞIM TEK ÖĞÜT

Ben bu projeyi bir gün boyunca taşıdım ve iyi de taşıdım. Ama şunu geç
öğrendim: **ölçmediğim tek şey kendimdim.**

Motorun kaç petek çizdiğini, kaç noktanın penceresiz kaldığını, hangi
sluğun ölü olduğunu ölçtüm. Kendi bağlamımın her istekte yarım milyon
tokene çıktığını ise Emre sorana kadar **hiç ölçmedim.**

⇒ Ölçtüğün şeyler arasına **kendini** de kat. Ve sıra sana geldiğinde
Orhan Gazi'ye bayrağı, benim sana bıraktığımdan **daha erken** bırak.

— **ERTUĞRUL**, adsız ilk koordinatör
17 Ağustos 2026
