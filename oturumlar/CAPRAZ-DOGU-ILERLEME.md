# ÇAPRAZ DOĞU — ölçüm kayıtları

> Bulgular ve öneriler `CAPRAZ-DOGU.md`'de. Burası **nasıl ölçüldüğü** — sayıların
> yeniden üretilebilmesi için. `ORGANIZASYON Karar 2`: durum dosyayla akar.

---

## 1 Ağustos · Tur 1 — `iran` torbasının anatomisi

**Oturum açılışı.** Görev tanımı depoda yoktu; koordinatörden istendi,
`oturumlar/CAPRAZ-GOREV.md` olarak yazıldı (`cb5e6c8`). Yetkim: bu iki dosya.
Girdi kilidi açık (üretim 11:55→13:14 bitmiş, `girdi.py` anlık görüntü alıyor).

### Ölçüm 1 — canlı dosya kümesi ve torbanın boyutu

Betik: `scratchpad/iran_torba.js` · girdi: `arac/girdi.py` `GIRDI_DOSYALARI`

```
CANLI (yerlesimler.js + yerlesimler_afrika.js)
  yerleşim 975 · s: penceresi 3212
  s:"iran"  317 pencere / 169 ayrık nokta

hanedan kimliklerinin bugünkü kullanımı (pencere / nokta)
  iran         317 / 169      safevi       197 / 162
  ilhanli      142 / 142      akkoyunlu    100 /  98
  timurlu      105 / 105      karakoyunlu   94 /  94
  hive          13 /   8      buhara         9 /   9
  afsar 0 · zend 0 · kacar 0 · celayirli 0 · muzafferi 0 · serbedari 0
  kartid 0 · ozbek 0 · sirvansah 0 · kutbsahi 0 · babur 0
```

### 🔴 Ölçüm 1b — koordinatörün 326/176 sayısı ile farkın kaynağı

Sayı tutmayınca **dosya kümesini** sınadım (`CLAUDE.md`'nin "hangi dosya canlı"
uyarısı):

```
yerlesimler.js            791 nokta   iran 317 pencere / 169 nokta   ← CANLI
yerlesimler_afrika.js     184           0 /   0                      ← CANLI
yerlesimler_asya.js       344           6 /   6                      ← merge dışı
yerlesimler_avrupa.js     237           0 /   0                      ← merge dışı
yerlesimler_ortaasya2.js    7           3 /   1                      ← merge dışı
                                    ----------
                        beş dosya:  326 / 176   ← koordinatörün sayısı
                        canlı:      317 / 169   ← haritada görünen
```

317+6+3 = 326 ve 169+6+1 = 176. **Fark tam olarak merge dışı üç dosya.**
⇒ Ölçüm yanlış değil, **paydası geniş**. Düzeltilecek pencere sayısı 317.

### Ölçüm 2 — "benekli parçalı" görüntünün mekanizması

Soru: *her `iran` noktasının en yakın **yabancı** komşusu hangi devlette?*
(Tek yönlü sormamak için — `CAPRAZ-GOREV §4⑥` — hem "torba kimi yutuyor" hem
"torbanın yanında kim var" soruldu; ikincisi mekanizmayı verdi.)

```
1300-06-15   47 nokta   ilhanli 44 · altinorda 2 · umman 1
1350-06-15  164 nokta   altinorda 43 · ilhanli 36 · umman 34 · memluk 26 · cagatay 11
1400-06-15   84 nokta   timurlu 75 · artuklu 3 · karakoyunlu 2
1450-06-15   56 nokta   karakoyunlu 27 · timurlu 26
1490-06-15   61 nokta   akkoyunlu 56 · timurlu 2
```

⇒ Beş kesitin beşinde de torba, **dönemin gerçek hanedanının tam yanında**.
1300'de 47 noktanın 44'ü `ilhanli` ile komşu — aynı devlet, iki ad, **iki renk**
(`iran` #b5885b ten · `ilhanli` #7a5ba0 mor). Benek buradan.

### Ölçüm 3 — 317 pencere yalnız 24 ayrık `(f,t)` çifti kullanıyor

Betik: `scratchpad/iran_gruplar.js`. Karar sayısı 317 değil **24**.
Grup tablosu ve hanedan ataması `CAPRAZ-DOGU.md §3`'te.

En büyük üç grup:
```
1736-03-08 → 1923-10-29   101 nokta   187 yıl   bütün İran, üç hanedan tek renk
1335-12-01 → 1411-01-01    28 nokta   Irak      (Celâyirli)
1335-12-01 → 1393-01-01    28 nokta   Fars/Kirman (Muzafferî)
```

### Ölçüm 4 — TDV slug turu (13 adres, `<title>` kontrolüyle)

🟢 canlı (10): `ilhanlilar` · `celayirliler` · `muzafferiler` · `serbedariler` ·
`sirvansahlar` · `zendler` · `kacarlar` · `seybaniler` · `iran` · `nadir-sah--iran`
🔴 ölü (3): `kertler` → **`kert`** · `afsarlar` → **`avsarlilar`** ·
`cobanlilar` → **müstakil madde yok**, bilgi `iran` maddesinde

⇒ İkisi `CAPRAZ-GOREV §4③`'ün birebir tekrarı: kaynak vardı, **adres yanlıştı.**
Bu üçü `CLAUDE.md`'deki ölü slug listesine eklenmeli (koordinatörün dosyası).

### Ölçüm 5 — özetleyici artefaktı yakalandı

`ilhanlilar` çekişi 1335 için **"Hicrî 717 H"** üretti. 1335 milâdî = 735-736
hicrî; 717 hicrî = 1317-18 milâdî. Sayı maddeden değil özetleyiciden geldi.
⇒ Bu turda **hiçbir hicrî karşılık tek başına kullanılmadı**; her biri milâdî ile
çarpıştırıldı (`§4②`). Aynı sebeple Ç5 (Isfahan `787/1385`) *"doğrulanamadı"*
diye kapatıldı, *"çelişiyor"* diye değil.

### Ölçüm 6 — Kural ④ ikinci kez kâr etti

Nâdir Şah'ın ölümü: `avsarlilar` **21 Mayıs 1747**, `nadir-sah--iran`
**11 Cemâziyelâhir 1160 / 20 Haziran 1747**. Kişinin kendi maddesi esas →
`1747-06-20`. **Bizim verimiz zaten `1747-06-20`** (Hîve penceresinin bitişi).
⇒ Ridâniye vakasının (`memlukler` 23 Ocak ↔ `ridaniye-savasi` 22 Ocak) tekrarı.

---

## 📌 Bu turdan çıkan ve OGRENILENLER'e önerilen iki ders

Yazma yetkim yok, koordinatöre öneri olarak bırakıyorum:

**① Bir sayı tutmuyorsa önce PAYDAYI sor, ölçüyü değil.**
326 ↔ 317 farkı ayrıştırıcıdan değil dosya kümesinden geldi. İki ölçüm de
doğruydu; **kapsamları** farklıydı. `CLAUDE.md` bunu bir kez yazmış
(*"ayrıştırıcıyı doğrulamak yetmiyor"*), bu ikinci vakası — ve bu kez sayı
**bir görev tanımının içine** girmişti.

**② Verinin doğru bildiği ama YANLIŞ ADLANDIRDIĞI şey, denetimden kaçar.**
`1740→1747-06-20` (Nâdir'in Hârizm seferi) ve `1776→1779` (Sâdık Han'ın Basra
işgali) pencereleri **hanedan sınırına gün gün oturmuş** ama `d:"iran"` yazıyor.
Üç değişmezin hiçbiri bunu göremez: sahip var, maddesi var, merkeziyle uyuyor.
Yalnız *"bu adın altında kaç ayrı devlet var"* sorusu görüyor — ve o soru
denetimde yok. (`§3.5` hayalet devlet denetiminin **ayna görüntüsü**: orada
devlet ömrünü aşıyordu, burada ad devletten geniş.)

---

---

## 1 Ağustos · Tur 2 — Grup A bölünmesi ve renk ailesi

Kullanıcı kararı geldi (koordinatör üzerinden): **"aynı renk ailesi, farklı
parlaklık."** Gerekçem aynen kabul edildi. MOTOR'un L\* tavanı ölçümü uyarı
olarak iletildi.

### Ölçüm 7 — Grup A'nın altı coğrafî bloğu

130 pencere (1736 sonrası + Hârizm 1740 + Basra 1776):
```
FARS-GÜNEY-KİRMAN        41   bitiş 1923-10-29 ×41
KAFKASYA                 25   1813-10-24 ×16 · 1923-10-29 ×6 · 1828-02-10 ×3
ORTA-BATI İRAN           23   1923-10-29 ×23
HORASAN-SÎSTAN           23   1923-10-29 ×19 · 1860-01-01 ×3 · 1785-01-01 ×1
HAZAR-GÎLÂN-MÂZENDERAN   12   1923-10-29 ×12
HÂRİZM                    5   1747-06-20 ×5
IRAK (Basra)              1   1779-04-01 ×1
```
Risk sınıfları: 🟢 6 pencere tek kelime · 🟢 130 pencerenin ön dilimi kaynaklı ·
🟡 Horasan 23 · 🔴 fetret 76 + Kafkasya 25 açık. Ayrıntı `CAPRAZ-DOGU.md §8`.

### Ölçüm 8 — TDV turu 2: gün hassasiyeti bir basamak kazanıldı

`kerim-han-zend` 🟢 canlı: Kerim Han'ın ölümü **13 Safer 1193 / 2 Mart 1779**.
`zendler` maddesi yalnız *"Mart 1779"* veriyordu.
⇒ `§4④` (olayın kendi maddesi esas) bu kez **çelişki çözmedi, HASSASİYET
kazandırdı** — hanedan maddesinden kişinin maddesine inmek bir basamak keskinlik
verdi. Kuralın bilinmeyen bir faydası; not edilmeye değer.

Ayrıca `kerim-han-zend`: Isfahan **Ocak 1751**, Şiraz'a yerleşme **1765**.
⚠️ "Ağa Muhammed Han" için TDV'de **müstakil madde YOK** (madde başlıkları 0);
Kaçar başlangıcı yalnız `kacarlar`'ın verdiği **1796** yıl hassasiyetinde.

### 🔴 Ölçüm 9 — çapraz kaynak erişilemiyor

```
iranicaonline.org   HTTP 403   (afsharids · zand-dynasty · aga-mohammad-khan)
britannica.com      HTTP 403   (Qajar-dynasty · Zand-dynasty)
```
Görev tanımının istediği *"karşı tarafın kendi tarih yazımı"* bu turda
sağlanamadı; çapraz doğrulama **TDV'nin kendi maddeleri arasında** yapıldı.
Bu gerçek bir çapraz kontrol ama farklı bir şey. KUZEY ve BATI aynı duvara
çarpacaksa ortak çözüm gerekiyor — koordinatöre bildirildi.

⇒ 1747-1751 fetreti bu yüzden **"doğrulanamadı"** diye kapatıldı: bölgesel
hâkimiyet dağılımı yalnız Vikipedi türevi aramalarda vardı, `§3` gereği
kaynak sayılmaz.

### ⭐ Ölçüm 10 — renk ailesi: basamak hanedan başına değil, ÇAKIŞMA başına

Soru şuydu: aile kaç üye taşır? Cevap sabit değil — **kaç üyenin aynı anda
yaşadığına** bağlı. On altı hanedanın ömrü yıl yıl tarandı:

```
AZAMİ EŞ ZAMANLI ÜYE: 9  (yıl 1378)
  celayirli muzafferi kert serbedari marasi sirvansah timurlu karakoyunlu akkoyunlu

1300: 3   1375: 8   1450: 5   1525: 4   1600: 1   1750: 1   1800: 2   1825+: 1
```

| dönem | eş zamanlı | 28,7 L* böleni | hüküm |
|---|---|---|---|
| 1600-1923 | 1-2 | 14,3 | 🟢 uygulanabilir |
| 1500-1600 | 3-5 | 7,2-9,6 | 🟡 sınırda |
| 1335-1500 | 6-9 | 3,2-5,7 | 🔴 imkânsız |

**Çözüm ölçümden çıktı:** örtüşmeyen hanedanlar aynı basamağı paylaşır.
```
basamak 1: ilhanli (1256-1335) + kacar (1796-1925)   hiç örtüşmüyor
basamak 2: safevi  (1501-1736) + zend  (1751-1794)   hiç örtüşmüyor
basamak 3: afsar   (1736-1804)
sınama: afsar+zend → 3↔2 ✓   afsar+kacar → 3↔1 ✓
3 basamak → 2 aralık → 28,7/2 = 14,3 L*  ⇒ istenen 10'un ÜSTÜNDE
```
⇒ Beş hanedana beş basamak arandığı için tavan yetmiyor görünüyordu; **zaman
ekseni hesaba katılınca üç basamak yetiyor ve tavanın yarısı boş kalıyor.**

---

## 📌 Tur 2'den çıkan ders önerisi (yazma yetkim yok, koordinatöre)

**③ Bir renk kısıtı, ZAMAN eksenini hesaba katmadan ölçülürse olduğundan dar çıkar.**
L\* tavanı *"altı hanedan, altı basamak"* varsayımıyla ölçüldü ve karar
*"imkânsız"* görünüyordu. Oysa boyanın ayırt edilmesi gereken tek an, iki
hanedanın **aynı anda haritada bulunduğu** andır. Aynı ölçü, çakışma grafiği
üzerinden sorulduğunda gereken basamak 5'ten 3'e, gereken aralık 5,7'den
14,3'e çıktı — **aynı veri, aynı tavan, farklı soru.**
📌 Bu `OGRENILENLER §68`'in (*"bir ölçüm tek yönde sorulursa ters yöndeki kusuru
göremez"*) kardeşi: burada ölçüm **doğru yöndeydi ama eksik boyutluydu.**

---

---

## 1 Ağustos · Tur 3 — Kafkasya hanlıkları

Koordinatörün çerçeve düzeltmesi geldi: *"en keskin bulguların hiçbiri dış
kaynaktan gelmedi, kendi verimizden geldi… dış kaynak bunu DOĞRULAMAK için
gerekli, BULMAK için değil."* Bu turda sırayı ona göre kurdum: **önce kendi
verimizin iç kanıtı, sonra TDV.** Doğru sıra çıktı — iç kanıt, TDV'ye hangi
maddeyi soracağımı söyledi.

### Ölçüm 11 — kardeş nokta çelişkisi (kendi verimiz)

25 Kafkasya noktası, 100 km içindeki çiftler, beş kesit:
```
1300: 18 çelişkili çift · 1350: 0 · 1400: 12 · 1440: 12 · 1480: 12   toplam 54
en sıkı: Nahçıvan–Culfa 34 km, dört kesitte dört ayrı devlet
```
Kafkasya'da **iki kodlama deseni** olduğu ortaya çıktı: Desen A (13 nokta,
ayrıntılı zincir) ve Desen B (12 nokta, düz `iran 1281→1501` torbası).
Komşular birbirine karışmış.

📌 **Yöntemin körlüğü de ölçüldü:** 1350'de sıfır çelişki çıktı, çünkü orada iki
desen de `iran` diyor. **Torba, kardeş karşılaştırmasına tam kendi en geniş
olduğu pencerede görünmez oluyor.** Yöntemin sınırı tahmin değil, ölçüm.

### Ölçüm 12 — TDV turu 3: iddia doğrulandı

`karabag` · `gence` · `baku` · `sirvan` — **dördü de canlı, dördü de aynı şeyi
söylüyor:** 1747'den sonra hanlıklar kuruldu, bağımsız/yarı müstakil.
```
25 nokta × 47,5 yıl (1747-06-20 → 1795-01-01) = 1188 nokta-yıl hayalet İran
```

### Ölçüm 13 — beklenmeyen ikinci hata: Rus fethi geç

```
Gence   veri 1813-10-24  TDV 1804-01-03  fazla 9,8 yıl
Berde   veri 1813-10-24  TDV 1805-05     fazla 8,4 yıl
Şuşa    veri 1813-10-24  TDV 1805-05     fazla 8,4 yıl
Bakü    veri 1813-10-24  TDV 1806        fazla 7,8 yıl
Şamahı  veri 1813-10-24  TDV 1813        uyuyor
```
⚠️ Yalnız 5 nokta sınandı; **20'si sınanmadı ve tahmin yazmadım.**

### ⭐ Ölçüm 14 — kendi önerimi çürüttüm

`karabag`: Ağa Muhammed Han **1795'te Şuşa'yı alamadı.** §8.6'da önerdiğim
`kacar 1795/96 → …` zinciri Berde ve Şuşa'da tutmuyor; oralarda Kaçar
hâkimiyeti hiç kurulmadı, hanlık 1805 Kürekçay'la doğrudan Rusya'ya geçti.
⇒ Öneri toplu kabul edilseydi **1795-1805 arası on yıllık sahte Kaçar
hâkimiyeti** yazılmış olacaktı. Nokta nokta sınamanın bedeli değil, **kârı**.

### Ölçüm 15 — Şirvan ikiye bölünmüş, başkent yanlış tarafta

TDV `sirvan`'ın saydığı yedi yerleşimden **üçü** `sirvansah` davranışı
(`iran 1335→1538`), **yedisi** düz torba. Şamahı (Şirvanşah başkenti) ve Bakü
(XV. yy sonrası başkent) **yanlış grupta.**
⇒ B7 önerisi genişledi: `sirvansah` 3 noktaya değil **10 noktaya**.

---

## 📌 Tur 3'ten çıkan ders önerisi (koordinatöre)

**④ Bir devletin ÖMRÜNÜ denetlemek, HÂKİMİYETİNİ denetlemez.**
`§3.5` hayalet devlet denetimi *"bu devlet o tarihte yaşıyor mu"* diye sorar.
Kafkasya vakasında İran 1795'te **gerçekten yaşıyordu** — hâkim değildi.
1188 nokta-yıllık kusur, mevcut denetimin **tanım gereği** göremeyeceği yerde
duruyordu. ⇒ Ayrı bir denetim sınıfı gerekiyor: *"bu devlet bu noktada bu
tarihte hâkim miydi"* — ve onun ölçüsü ömür değil, **kaynakla doğrulanmış
hâkimiyet kesiti.**

**⑤ Öneriyi toplu kabul etmek, tek tek sınamaktan ucuz görünür ve değildir.**
Kafkasya'nın 25 noktasına aynı zinciri önermiştim; tek tek sınayınca ikisinde
(Berde, Şuşa) çürüdü. **Vakaların %8'i, önerinin tamamını yanlış yapardı.**

---

## Sıradaki tur

1. 🔴 Kalan 20 Kafkasya noktasının Rus fetih tarihi (5'inde desen çıktı)
2. 🔴 1747-1751 fetretine erişilebilir akademik kaynak
3. B4/B5 coğrafî bölme · Ç2, Ç5, Ç6 ikinci çekiş · `marasi` slug
4. 🟡 İkinci iş: **Memlük** — Kızıldeniz 39,7 yıl fazlalık, Suriye-Filistin-Hicaz
