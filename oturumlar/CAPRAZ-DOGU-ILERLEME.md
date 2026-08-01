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

---

## 1 Ağustos · Tur 4 — kalan 20 Kafkasya noktası

Koordinatör gösterim kararını verdi (**Seçenek 2**, tek `kafkas-hanliklari`
kimliği) ve *"kalan 20'yi sına, tek pakette gelsin"* dedi.

### Ölçüm 16 — TDV turu 4: 9 adres denendi

🟢 canlı: `nahcivan` · `revan` · `seki` · `talis-hanligi` · `azerbaycan` ·
`dagistan`
🔴 ölü: `kuba` (müstakil madde yok) · `derbend` (**madde VAR, adres bilinmiyor**)

**Sonuç: 25 noktanın 19'u kapandı, 6'sı sınanmadı** (Tarki · Ağraham ·
Kabala · Ereş · Şâbüran · Mahmudâbâd — müstakil madde bulunamadı).

```
Nahçıvan          95,6 yıl FAZLA   (veri 1923-10-29, TDV 1828)
Ordubad           15   yıl EKSİK   (veri 1813-10-24, TDV 1828)  <- TERS YÖN
Lenkeran·Astara   15   yıl fazla   (Lenkeran 1 Ocak 1813'te düştü)
Gence              9,8 yıl fazla
Berde·Şuşa         8,4 yıl fazla
Bakü               7,8 yıl fazla
Derbend           37   yıl (1759-1796 Kuba Hanlığı) ⚠ yarım doğrulama
Revan              3,9 ay  (kale 13 Ekim 1827)
Şeki·Şamahı       ✅ uyuyor
```

### ⭐ Ölçüm 17 — Kural ⑥ birebir çıktı: Nahçıvan ↔ Ordubad

**Aynı hanlığın iki şehri, 63 km arayla, hatalar ZIT yönde.** Nahçıvan 95 yıl
fazla İran, Ordubad 15 yıl eksik. Kafkasya'yı *"fazladan İran var mı"* diye
sormaya başlamıştım — o soru Nahçıvan'ı bulurdu, **Ordubad'ı asla bulamazdı.**
⇒ Hanlık hanlık sorduğum için ikisi de çıktı. **Doğru payda, ters yöndeki
hatayı da yakalıyor.** Kuralın bedeli bu turda sıfır oldu.

### ⭐⭐ Ölçüm 18 — TAKVİM TUZAĞI: görev tanımı bunu veri gelmeden haber vermişti

```
Gülistan    veride 1813-10-24   = 24 Ekim 1813 Gregoryen     ✓ GREGORYEN
Türkmençay  veride 1828-02-10   = 10 Şubat 1828 JÜLYEN       ✗
            TDV talis-hanligi: "22 Şubat 1828'de imzalanan"  = Gregoryen
            fark tam 12 gün — XIX. yy Jülyen-Gregoryen farkı
```
Etkilenen: **6 pencere ucu / 3 nokta** (Revan · Astara · Lenkeran); Nahçıvan
ve Ordubad düzeltilince **5 nokta**.

⇒ **Aynı savaş serisinin iki antlaşması iki farklı takvimle yazılmış.**
`CAPRAZ-GOREV §2` kuralı olmasaydı bunu *"TDV yanlış"* diye kaydedecektim;
kural sayesinde **kendi verimizin tutarsızlığı** olarak teşhis edildi.
📌 Kuralın ölçülmüş faydası: **bir sahte çelişki önlendi, bir gerçek tutarsızlık
bulundu** — ikisi aynı 12 günün içindeydi.

### ⭐ Ölçüm 19 — `azerbaycan` maddesi fetretin bir kısmını kaynakladı

§8.6'da *"doğrulanamadı"* diye kapattığım 1747-1751 fetreti, Azerbaycan için
kaynaklandı: *"Azerbaycan'ın Safevî hâkimiyeti son buldu"*, ~50 yıl *"bağımsız
fakat şiddetli politik çekişme"*. Ve madde **güney hanlıklarını da sayıyor**:
Tebriz · Urmiye · Erdebil · Hoy · Mâkû · Merâga.

```
hayalet İran:  25 nokta / 1188 nokta-yıl  →  31 nokta / 1473 nokta-yıl
```
İran'ın geri kalanı (Fars · Kirman · Horasan) hâlâ kaynaksız.

---

## 📌 Tur 4'ten çıkan ders önerileri (koordinatöre)

**⑥ "Ölü slug" ile "madde yok" aynı şey değil — üçüncü bir hâl var: MADDE VAR,
ADRES BİLİNMİYOR.** `derbend` slug'ı ölü döndü ama arama dizininde DERBEND diye
bir madde duruyor ve içeriğinden alıntı yapılabiliyor. `CLAUDE.md`'nin ölü slug
listesi bu üçünü ayırmıyor; ayırmazsa *"kaynak yok"* hükmü yanlış verilir —
kural ③'ün tam da uyardığı şey.

**⑦ Bir kuralın faydası, ÖNLEDİĞİ hatayla ölçülür ve bu genelde görünmez.**
Takvim kuralı (`§2`) veri gelmeden önce yazılmıştı. Bugün 12 günlük bir fark
çıktı ve kural olmasaydı **iki hata birden** yapılacaktı: TDV'yi yanlış
sanmak (sahte çelişki) ve kendi tutarsızlığımızı görmemek (gerçek hata).
Kural bir şey *bulmadı* — **yanlış teşhisi önledi.**

---

---

## 1 Ağustos · Tur 5 — Memlük

Takvim kararı geldi: **Gregoryen esas**, ham hâl `gun:`te. Ders önerim `§71`
oldu. Sıra Memlük'e açıldı.

### Ölçüm 20 — Memlük anatomisi: veri İran'dakinden ÇOK daha iyi

```
107 pencere / 101 nokta / 18 ayrık (f,t) çifti
1516-17 seferi şehir şehir, gün gün: Antep 08-24 (Mercidabık'ın günü),
Halep 08-28, Şam 09-27, Kudüs 12-29, Ridâniye 01-22, Kahire 02-15,
Tomanbay 04-13, İskenderiye 05-19, Hicaz 07-06
```
Malatya grubunda 1399-1402 Osmanlı arası **boşluksuz** kurulmuş.
⇒ **Torba yok.** İran'da kimlik yanlıştı; burada kimlik doğru, sorun
**halefiyette.**

### Ölçüm 21 — hukukî halefiyet, fiilî fetih yerine

```
1517-04-13 (Tomanbay idam)  →  30 nokta AYNI GÜN Osmanlı
1517-05-19                   →  24 nokta
```
30'un içinde Nil vadisi var (doğru) ama **Sevâkin · Halâib · Akīk · Tokar ·
Sinkat · Vâdî Halfâ · İbrim** de var. ⇒ Kafkasya'daki *"Gülistan 1813 toptan"*
hatasının **aynası**.

### 🔴🔴 Ölçüm 22 — TERS YÖNDE HAYALET: fazladan boyanan devlet OSMANLI

TDV `habes-eyaleti` 🟢 doğrudan söylüyor: **"Bu kıyı toprakları 1517'de
Memlükler'den devralınmadı"**, Osmanlı 1550'lerde kademe kademe fethetti.
Habeş Eyaleti **5 Temmuz 1555**, Masavva **2 Nisan 1557**.

```
Sevâkin   veri 1517-04-13  TDV 1554-04-10   37,0 yıl   🟢 kesin
Akīk      veri 1517-04-13  TDV 1555-07-05   38,2 yıl   🟢 kesin
Halâib · Tokar · Sinkat    (aynı eyalet)    38,2 ×3    🟡 desen
İbrim · Vâdî Halfâ         TDV 1573         55,7 ×2    🔴 zayıf
--------------------------------------------------------------
kesin 75,2 · desen 114,7 · zayıf 111,4 nokta-yıl
```

🔴 **Bu, projenin bugüne kadar aradığı hatanın TERSİ.** `§3.5` listesi hep
*"fazladan yabancı devlet"* arıyor. Buradaki fazlalık **Osmanlı'da**.
📌 Neden hiç yakalanmadığı belli: *"Osmanlı fazla mı görünüyor"* diye **kimse
sormadı** — bütün denetimler Osmanlı'yı ölçüt alıp çevresini sorguluyor.
⇒ Kural ⑥'nın **üçüncü ve en pahalı** vakası: soru sorulmadığı için kusur
sınıfı tamamen görünmez kalmış.

### Ölçüm 23 — Masavva · Dahlak · Arkîko hiç Memlük olmadı

TDV `masavva` 🟢: XII-XIV. yy **"Dehlek emîrlerinin hâkimiyetinde"**.
Veride üçü de `memluk 1281→1517` — **236 yıl yanlış kimlik.**
Ve `dahlak` kimliği veride hiç yok: noktanın **adı** Dahlak, **sahibi** Memlük.
🟢 Kısmen fark edilmiş: üçünde `habesistan 1517→1557` dönemi zaten var.

### Ölçüm 24 — Masavva'nın Osmanlı başlangıcı 91 gün erken
`1557-01-01` (yıl hassasiyeti biçimi) yazılmış ama **gün biliniyor**:
2 Cemâziyelâhir 964 / **2 Nisan 1557**.

### 📌 Ölçüm 25 — bir düzeltme, kusuru kapatırken TARAF DEĞİŞTİRMİŞ

`CLAUDE.md §3.5`: *"İbrim `memluk` 1555'e kadar — 38 yıl fazla."* Bu
**düzeltilmiş** (bugün veri `1517-04-13`). Ama TDV İbrim sancağını **1573**'e
koyuyor ⇒ Memlük fazlalığı kaldırılırken yerine **Osmanlı** konmuş ve
**55,7 yıllık ters hata** açılmış.
⇒ **Hata giderilmedi, taraf değiştirdi.** Sebebi: ölçüm *"Memlük fazla mı"*
diye soruyordu, *"yerine ne konmalı"* diye değil.

---

## 📌 Tur 5'ten çıkan ders önerileri (koordinatöre)

**⑧ Bir kusuru KALDIRMAK ile YERİNE DOĞRUSUNU KOYMAK ayrı işlerdir; ölçüm
yalnız birincisini sorarsa ikincisi sessizce yanlış yapılır.**
İbrim vakası: 38 yıllık Memlük fazlalığı doğru teşhis edildi, kaldırıldı, ve
yerine 55,7 yıllık Osmanlı fazlalığı kondu. Denetim temiz kaldı çünkü
*"sahipsiz mi"* ve *"maddesi var mı"* sorularının ikisi de geçiyor.

**⑨ Bütün denetimler bir devleti ÖLÇÜT alıyorsa, o devletin kendi hatası
ölçülemez.** Bu projenin denetimleri Osmanlı'yı sabit alıp çevresini sorguluyor.
Sonuç: 190+ nokta-yıllık erken Osmanlı, hiçbir denetimden geçmediği için değil,
**hiçbir denetimin konusu olmadığı için** görünmedi.

---

---

## 1 Ağustos · Tur 6 — Kızıldeniz'in sahibi

Koordinatör `§72`'yi yazdı: sabah başka bir oturum **aynı 38 yılı** ters uçtan
ölçmüş, yamayı uygulamış ve hayalet **taraf değiştirmiş**. Benim *"tek başına
yapılamaz"* uyarım o tuzağın öbür yüzüymüş.

### ⚠️ Ölçüm 26 — önce bir röle düzeltmesi

Koordinatör *"`func`'u zaten elemiştin"* dedi. **Elememiştim** — Teslim 5'te
yazdığım *"Beca konfederasyonu muhtemel, doğrulanmadı"*; Func'un adını hiç
anmadım. Düzelttim (`§38`), sonra **gerçekten eledim** (`§41`).
📌 `ORGANIZASYON §12`: röle, aktardığı iddianın otoritesini yükseltiyor.
*"Zaten elemişti"* diye geçseydi elenmemiş bir aday elenmiş sayılacaktı.

### Ölçüm 27 — TDV turu 6: 6 adres

🟢 canlı: `func` · `nube` · `bece` · `dehlek`
🔴 ölü: `beca` (**doğrusu `bece`** — ders ⑥'nın 5. vakası) · `sevakin` ·
`ibrim` (ikisinin de müstakil maddesi yok, içerik `habes-eyaleti` ve `nube`'de)

### Sonuç — sahip sorusu ikiye ayrıldı

```
Masavva · Dahlak · Arkîko   → ① ADI KONMUŞ HÂKİMİYET: Dehlek melikleri
   dehlek : "XII. yy'dan itibaren kendi meliklerince BAĞIMSIZ"
            Memlük yönetimi BELGELENMİYOR
   masavva: "Dehlek emîrlerinin hâkimiyetinde"
   ⇒ iki bağımsız madde, Teslim 5 bulgusu GÜÇLENDİ, sahipsizlik açmıyor

Sevâkin · Halâib · Akīk · Tokar · Sinkat → ② KABİLE, DEVLET DEĞİL
   bece: Hadârib·Zenâfice·Abâbde·Bişârîn·Ummarâr·Hadenduva
         "merkezî devlet değil, kabile konfederasyonu"
   🔴 AMA: bece "1517'de Osmanlılar bölgeye hâkim oldular" diyor
      habes-eyaleti ise "1517'de devralınmadı, 1550'lerde fethedildi"
   ⇒ Ç7: İKİ TDV MADDESİ ÇELİŞİYOR — kaydettim, çözmedim
```

### Ölçüm 28 — Func elendi, gerekçesiyle

`func` 🟢: kuruluş **1504** Sennâr; Kızıldeniz'e **II. Bâdî devrinde
(1649-1680)** ulaşıyor. Bizim pencere 1517-1554 ⇒ **bir buçuk asır önce.**
Aday değil.

### 🔴 Ölçüm 29 — TESLİM 5'TEKİ BİR BULGUMU GERİ ALDIM

`nube` 🟢: Memlük hâkimiyeti Mısır'ın fethiyle bitti, ardından *"Osmanlılar,
Aşağı Nûbe'de **Halfa vadisine kadar** olan bölgeyi kontrolleri altına aldı"*.
**981 (1573) fetih değil, İDARÎ BAĞLANMA tarihi.**

⇒ İbrim ve Vâdî Halfâ için ileri sürdüğüm **55,7 yıl × 2 = 111,4 nokta-yıl**
iddiası **geçersiz. Veri doğru.**

```
erken Osmanlı hayaleti:  190,9  →  75,2 nokta-yıl   (ve o da artık 🟡 çelişkili)
```

---

## 📌 Tur 6'dan çıkan ders önerisi (koordinatöre)

**⑩ Bulguya GÜÇ ETİKETİ koymak, yanlış bulgunun maliyetini sıfıra indirir.**
Teslim 5'te üç iddia vardı: biri güçlendi, biri çelişkiye düştü, biri çürüdü.
Çürüyeni **🔴 zayıf** diye işaretlediğim için hiçbir yama ona dayanmadı ve
hiçbir şey bozulmadı. Etiket olmasaydı `İbrim/Vâdî Halfâ`'nın **doğru** olan
kaydı bozulacaktı.
> **Yanlış bulgu ücretsizdir; etiketsiz bulgu değildir.**

📌 Ve `§72`'deki sabah vakası tam bunun eksikliği: *"hayalet Memlük 39,7 yıl"*
teşhisi doğruydu ama **güç etiketi yoktu**, yama hemen uygulandı, hayalet taraf
değiştirdi. Aynı gün, aynı 38 yıl, iki oturum — **etiketli olan zarar vermedi.**

---

## Sıradaki tur

1. 🟡 **Ç7 kararı koordinatörde** — `bece` ↔ `habes-eyaleti`
2. ⏳ **Suriye-Filistin kesiti** — hâlâ ölçmedim, sıradaki iş
3. Önceki turlardan: 6 Kafkasya noktası · fetretin İran geri kalanı ·
   B4/B5 · Ç2, Ç5, Ç6 · `marasi`
4. Koordinatörün haber verdiği yeni iş: **Fransa**
