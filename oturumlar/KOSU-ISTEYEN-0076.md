# KOŞU İSTEYEN — `parti-emrelic-0076` · koordinatörün biriktirme defteri

> Bu gece hiçbir işçi `data/`ye yazmıyor. Nokta/hat/boya isteyen her bulgu
> **buraya** düşer; paket kapanınca `yerlesimler*.js` tek elden işlenir, sonra
> **tek koşu**. `arac/` donuk kaldığı sürece koşu ~23 dakika (22 Eylül ölçümü).
> Kaynak: tahta mesajları. Her satırın yanında kimin ölçtüğü yazılı.

---

## 🔴 Eklenecek yerleşim noktaları — SINAVDAN SAĞ ÇIKANLAR

⚠️ **Buraya bir ad yazılmadan önce `denetim/KRONO-0076-B-olc5.py` sınıfından
bir aramadan geçirilir.** Sebebi aşağıdaki "geri alınanlar" bölümü.

### Şarkî Rumeli — 13 kaza merkezi · `H-0081` · ölçen: `KRONO-0076-B`
```
Yeni Zağra · İslimye (Sliven) · Burgaz · Hasköy · Kızanlık · Çırpan
Ahyolu · Mesemvri · Sozopol · Karinabad · Aydos · Rupçoz · Ahiçelebi
```
**Havuzda ZATEN olan:** Filibe · Eski Zağra · Tatarpazarcığı · Yanbolu · Kırcaali.
📌 Emre'nin *"doğru mu"* sorusunun cevabı ölçüldü: haritadaki şekil vilâyet
sınırı **değil**, o beş noktanın Voronoi'sidir. Doğu yarısı (Burgaz–Ahyolu–
Mesemvri kıyı şeridi + İslimye–Yanbolu havzası) **noktasız** — `CLAUDE.md §2`.

### Refah–Taba hattı · `H-0103` · ölçen: `KRONO-0076-B`
```
Refah · Taba · Akabe · Nahl · Bi'rüssebi · Kuseyme     (altısı da YOK)
```
**Havuzda olan:** El-Ariş · Gazze · Süveyş.
📌 Hat **çizili** (`d1906-filistin-misir-hidivlik`, f:1906-10-01 · t:1914-12-18,
kategori E) — yani Emre'nin tahmini doğruydu; eksik olan hattın **tarif ettiği
uçlar**.

### Tunus–Trablusgarp · `H-0082` · `H-0087` · ölçen: `KRONO-0076-B`
```
Râs Ecdîr (hattın Akdeniz ucu, 1886 düzenlemesinin konusu) · Sinâven
Dehîbat · Remâda
```
**Havuzda olan:** Ğadâmis · Derc · Nâlût · Zuvâre · Bin Gerdân.

---

## 🔴 NOKTA İLE ÇÖZÜLMEYEN — hat kaydı işi
**1886 ve 1892 Tunus–Trablusgarp düzenlemeleri için `d_sinirlar*` kaydı SIFIR.**
Çizilen en eski hat `d1910-libya-tunus-osmanli` (f:1910-05-19). Kronoloji iki
kez *"sınır çizildi"* diyor, harita **24 yıl** boyunca hiçbir şey göstermiyor.
⇒ Bu bir hat kaydı işi; nokta eklemek çözmez. `H-0082` · `H-0087`.

### Sisam — tarih taşıması · `H-0124` · ölçen: `KRONO-0076-C`
🔴 **Bu gecenin en temiz `D207` vakası: elden çıkış günü kaynaktan değil
ATLASIN KENDİ HARİTASINDAN gelmiş.**
```
bugün   v:[{f:"1832-12-10", t:"1912-03-13", statu:"vassal"}]
        s:[..., {f:"1912-03-13", t:"1923-10-29", d:"yunanistan"}]
TDV     "Balkan savaşları sonunda Sisam adası Yunanistan ile birleşti
         (11 Kasım 1912)" · vali 1913'e kadar görevde
```
- Dönemin **başı** (1832-12-10) TDV ile **birebir** tutuyor — başı sağlam.
- Dönemin **sonu** hiçbir kaynağa dayanmıyor: kronoloji kaydının `gun:` alanı
  yalnız `"1912"` diyor. Üstelik **1912-03-13 veride ZATEN başka bir olayın
  günü** (Sırp–Bulgar İttifak Antlaşması) — komşu kayıttan devralınmış.
- **Yapılacak:** `v:` sonu + `s:` başı + kronoloji kaydı **ÜÇÜ BİRLİKTE**
  1912-11-11'e taşınır. Ayrılamazlar (Değişmez 2 + sahipsizlik).
- **Ters yön sınavı yapıldı:** eski konumun kapsayıp yeninin kapsamadığı
  kırılma günü 2, ikisi de başka maddelerle korunuyor, **açıkta kalan 0**.
- Etki: Sisam 8 ay daha Osmanlı tâbii kalır ⇒ **koşu gerekir.**

### Bosna kuzeybatı şeridi — eksik işgal kaydı · `H-0043` · ölçen: `KRONO-0076-A`
1878-07-29'da `isg:avusturya` başlaması gereken ama **kaydı hiç olmayan**:
```
Bosanski Brod · Bosanska Krupa · YENİPAZAR (Novi Pazar)
Bosanska Dubica · Bosanski Novi        (bu ikisinde yalnız 1788 işgali var)
```
📌 Emre'nin şikâyeti **ölçülenden dar** çıktı: o yalnız Yenipazar'ı saydı,
ölçüm dört komşusunu daha buldu. Saydığı Udbina · Cetingrad · Jasenovac ise
**zaten Avusturya** (Askerî Sınır, 1878 öncesi) — onlarda kusur yok.
⚠️ Kaynak notu: TDV `berlin-antlasmasi` **işgal** der, ilhak demez — yani
mevcut 14 kaydın `isg:` kovasında olması **doğru**; kusur kovanın eksik
kalması. **Yenipazar sancağı** için açık cümle **bulunamadı** ⇒ `isg:` mi düz
Osmanlı mı, kaynak kararı ister. Hüküm `SINIR-BERLIN-0076`da.

---

## ⚖️ KOŞU İSTEMEYEN AMA HÜKÜM BEKLEYEN

### Kars — 105 günlük "Rus eksklavı" · `H-0036` · ölçen: `KRONO-0076-A`
```
Kars                1877-11-18 → rusya   (TDV doksanüç-harbi: 18 Kasım)
çevresindeki 15 nokta  1878-03-03 → rusya   (Ayastefanos günü)
Ardahan             1877-05-17 → rusya   (zaten)
```
⇒ **105 gün** boyunca Kars, Osmanlı noktalarının ortasında tek başına Rusya
renkli tek nokta; petek onu kendi sahibiyle boyadığı için harita **Rus
eksklavı** gösteriyor. Emre'nin gördüğü şey bu.
🔴 **SINIF: sınır hatası DEĞİL, TARİH ASİMETRİSİ.** Kalenin düşüş günü
kaynaktan, çevredeki toprağın el değiştirmesi antlaşma gününe bağlanmış.
⚠️ `D206`: çevre noktalarını 1877'ye çekmek, Ayastefanos'a kadar gerçekten
Osmanlı kalan yerleri **erken kaybettirir**. İki ucu ölçmeden düzeltme yok.

### Nikarya — 🔴 ATLAS KENDİ İÇİNDE ÇELİŞİYOR, çözülemedi · `H-0127`
```
yerlesimler.js   isg:[{f:"1912-07-17", d:"yunanistan", kaynak:"oniki-ada"}]
olaylar_ek6.js   aynı gün: "Nikarya'nın BAĞIMSIZLIK İLANI" — kendi bayrağı,
                 pulu ve meclisiyle BEŞ AY süren serbest devlet, Yunanistan'a
                 Kasım 1912'de katıldı
```
İkisi aynı anda doğru olamaz. **Çözülemedi, çünkü kaynak yok:** TDV'de
`ikarya`/`nikarya` maddesi YOK (arama: "sonuç yok") ve ada TDV `oniki-ada`
maddesinde sayılan on iki adanın arasında da **geçmiyor** ⇒ kayıttaki
`kaynak:"oniki-ada"` şüpheli. **Veriye dokunulmadı** — akademik kaynak
bulmadan düzeltmek, atlasın kendi kaydını kaynak yerine koymak olur (`D207`).

### Gövde çakışması — `HARITA-0076` B kovası · koşu istemez
Boyalı hücrenin iki ya da daha çok gövdeyle boyandığı oran:
```
Hadramut  1884  %2,92   %96'sı tek çift: kesiri-sultanligi ¦¦ kuayti-sultanligi
Bulgaristan     %4,98   bulgaristan¦¦vassal 658 · sirbistan¦¦vassal 434
Trakya    1913  %2,28   tamamı bulgaristan¦¦osmanli
DÜNYA     1884  %1,43  ·  1878  %1,32
```
🔴 Baskın çift `bulgaristan ¦¦ vassal` demek: **AYNI POLITY İKİ KERE
ÇİZİLİYOR** — bir kez yabancı gövde, bir kez Osmanlı tâbisi. Ekrandaki
kahverengi kamalar bu. `CLAUDE.md §3`ün açıkça *"`kd:` ile DÜŞMEZ"* dediği
sınıf; çakışma `donemler.js` + `devletler_harita.js` **gövdelerinde**.
⚠️ Dünya ölçeğinde en büyük kaynak Batı Afrika künyeleri
(`mossi-vagadugu¦¦yatenga` 74 · `kenedugu¦¦mossi` 70 · `adar¦¦sokoto` 69 …) —
**hiçbir maddede bildirilmemiş**, yani sessiz borç.

---

## ✅ GERİ ALINANLAR — "yok" hükmü ÇÜRÜDÜ, nokta EKLENMEYECEK

🔴 **Bu bölüm bu dosyanın en önemli yeri.** İkisini de ben *"koşu isteyen"*
diye işaretlemiştim; `KRONO-0076-B` M-5024'ü okuyup süzgecini sınadı ve
**kendi ölçümünü çürüttü** — nokta eklenseydi mükerrer yerleşim doğacaktı
(`§11` · *yakın mükerrer yerleşim*).

| ad | "yok" sanılma sebebi | gerçek |
|---|---|---|
| **Eski Zağra** | literal `ad:"Eski Zağra` arandı | kayıt PARANTEZLİ: `"Eski Zağra (Stara Zagora)"` · 42.425 / 25.633 · `kid:"sarki-rumeli"` |
| **Ğadâmis** | baş harf `G` ile arandı | kayıt `Ğ` ile · `yerlesimler_afrika.js`. `Derc (Derj)` de var |

📌 Arama kördü, veri değil. Süzgeç artık 9 pozitif vakayla **önce ateşleniyor**
(9/9 OK) ve parantezli adlar iki anahtarla indeksleniyor
(`"Eski Zağra (Stara Zagora)"` → `eski zagra` + `stara zagora`).
Havuz: 9418 ad anahtarı · 6292 kayıt anahtarı. Alet:
`denetim/KRONO-0076-B-olc5.py`. `YASALAR B9`nin tam karşılığı.

---

## ✅ HARİTA YANLIŞ DEĞİL — ölçüldü, iş çıkmadı

**`H-0070` · Mehdî'nin Doğu Sudan'a "uçakla mı geldiği"** — `KRONO-0076-B`
`s:` kırılmalarını batıdan doğuya sıraladı:
```
Kordofan (Ubeyyid) 30,2°  → 1882-09-07     Berber   34,0° → 1884-05-01
Kordofan           29,5°  → 1882-09-07     Hartum   32,6° → 1885-01-26
TOKAR              37,7°  → 1884-01-01     Dongola  30,5° → 1885-01-26
                          (enklav:true)    Sennâr · Kesela · Fâşoda → 1885-01-26
```
⇒ 1884-01-01 ile 1884-05-01 arasında Mehdî'nin doğuda tek noktası Tokar,
batıda Kordofan; arası hâlâ Mısır. **Harita bitişiksizliği DOĞRU gösteriyor**
ve zaten `enklav:true` ile beyan edilmiş. Cevap: uçakla gelmediler, doğudaki
ayaklanma yereldi. ⚠️ Tokar'ın `1884-01-01` günü `YYYY-01-01` dolgusudur —
kaynağa soruluyor.
