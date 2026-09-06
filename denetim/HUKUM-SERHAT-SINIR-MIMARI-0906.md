# HÜKÜM — 1923 SINIR ÇİPASI ve `S` (SERHAT): **fikrin doğru, yeri yanlış**

> **1.MURAT (Oturum 0) · 6 Eylül 2026 · KOD/VERİ YAZILMADI** (koşu 7b sürüyor).
> Emre: *"tüm dünyanın 1923 sınırlarını çizelim… `k1 k2 k3 k4`'e ek olarak
> serhat şehirlerini de tespit edelim, adına `S` diyelim… yahut senin daha
> iyi bir fikrin var ise söyleyebilirsin."*

---

## ① 🟢 ÖNCE ÖLÇÜM: **VERİNİN BÜYÜK KISMI ZATEN VAR**

> *"hangi yerleşim hangi ülkeye ait bunun verisini toplayacağız"*

Ölçüldü (`1923-10-28` kesiti — pencere sonu `10-29` hariç):
```
toplam nokta          3805
SAHİPLİ               3630   ← "hangi yerleşim hangi ülkede" ZATEN YAZILI
sahipsiz               156   çoğu KASITLI (çöl · Rub'ul Hâlî · Nûbe)
pencere dışı/kapalı     19
BENZERSİZ DEVLET       106
  ingiltere 420 · sovyet-rusya 399 · fransa-cumhuriyet 278 ·
  tbmm-turkiye 230 · abd 196 · kanada 185 · italya 127 …
```
⇒ **Toplanacak veri değil, DOĞRULANACAK ve SIKLAŞTIRILACAK veri var.**
📌 Bugün beşinci kez: *"istenen şeyin altyapısı zaten vardı."* Bir işçi
oturuma *"1923 sahipliğini topla"* demek, 3630 kaydı yeniden yazdırmak
olurdu.

## ② 🔴 EKSİK OLAN: SINIR BOYUNDAKİ **YOĞUNLUK**

Motor sınırı **zaten iki yerleşimin tam ortasından** geçiriyor (Voronoi).
Senin *"sınır bu iki yerleşimin arasından geçecek"* dediğin şey
mekanizma olarak **kurulu**. Ama doğru yerden geçmesi için **iki yanda da
nokta** gerekir — yoksa sınır komşunun peteğine kayar (`§2`, projenin en
sık hatası).

Ölçüldü: **55 devlet çiftinin** sınır aşırı en yakın noktası **50 km
içinde** — o sınırlar sağlam çivili.
⚠️ *"423 zayıf"* diye bir sayı da çıktı ama **onu raporlamıyorum**:
ölçütüm 900 km yakınlığı "komşuluk" sanıyor ve `fransa ↔ norveç`,
`ispanya ↔ lüksemburg` gibi **hiç komşu olmayan** çiftleri sayıyor.
⇒ Gerçek komşuluk, gövde geometrisinden okunmalı (`devletler_harita.js`)
ve o **KOŞUDAN SONRA** yapılır. **ÖLÇÜLMEDİ.**

---

## ③ 🔴 `S`'İ `k`'NIN İÇİNE KOYMA — ve gerekçe bu projede ÖLÇÜLMÜŞ

> *"`k1 k2 k3 k4` şeklinde tasnifledik, buna ek olarak `S` diyelim"*

`k` bir **KADEME**dir: eyalet merkezi (k1) · sancak (k2) · alt kademe
(k3/k4). Serhat ise **bir konumdur** — sınıra göre. İkisi **ayrı eksen**:
```
Edirne  k1 (eyalet merkezi)  VE  1361'de serhat, 1500'de iç şehir
Bağdat  k1                    VE  1638'de serhat, 1900'de iç şehir
```
🔴 **VE BU PROJE O HATAYI ZATEN YAPMIŞ, ve hâlâ ödüyor.** `Değişmez 3`
bugün **sağlanmıyor** ve teşhisi `CLAUDE.md`de aynen şöyle:
> *"`m:` bir **idarî merkez** tutuyor — yani **siyasî** bir şey — ama
> **coğrafî** bir gruplama için kullanılıyor. ⇒ Mekân ekseni ile konu
> ekseni birbirine karışıyor ve **ikisi de bozuluyor.**"*

⇒ `S`'i `k`'ya katmak **aynı hatanın ikincisi** olur.

### 🟢 ÖNERİM: AYRI ALAN, VE **ZAMANLI**
```js
serhat: [{ f:"1361-01-01", t:"1521-01-01", karsi:"macaristan" },
         { f:"1521-01-01", t:"1683-09-12", karsi:"avusturya" }]
```
Üç gerekçe, üçü de ölçülmüş:
```
① EKSEN AYRI      `k` kademe, `serhat` konum. Karıştırmak `m:`nin
                  hatasıdır ve o hata HÂLÂ açık.
② ZAMANLI OLMALI  Bir şehir serhat OLUR ve OLMAKTAN ÇIKAR. Zamansız bir
                  `S`, `m:`nin bugünkü hâli gibi bütün tarih boyunca
                  tek değer taşır ⇒ aynı kusur.
③ KARŞI TARAF     "Serhat" tek başına eksik: KİME KARŞI serhat? `karsi:`
                  alanı, senin istediğin ÇİFT yapısını kaydın içine taşır.
```

---

## ④ ÇİFT YAPISI — fikrin doğru, ama **kaydın üstünde değil AYRI DOSYADA**

> *"A-B C-D E-F şeklinde çifter çifter… A C E Türkiye, B D F Suriye"*

🟢 **Doğru primitif** — ve niçin: bir çift, haritaya karşı **sınanabilir**
bir iddiadır (*"sınır A ile B'nin ARASINDAN geçmeli"*). Bu, bugün hiçbir
denetimin sormadığı bir soru.

🔴 **Ama yerleşim kaydının üstünde tutulmamalı**, çünkü bir çift **iki
kayda birden** aittir ve ikisinde de tutulursa ayrışır (bugün beş kayıtta
ölçtüğümüz **mükerrer alan** kusurunun aynısı).

### 🟢 ÖNERİM: SINIR KAYDI — `data/sinirlar.js`
```js
{ a:"tbmm-turkiye", b:"suriye-fransiz-mandasi",
  f:"1921-10-20", t:"1923-10-29",
  kaynak:"ankara-itilafnamesi",
  cift:[ ["Kilis","Halep"], ["Antep","Menbic"], ["Ceylanpınar","Resülayn"] ],
  nehir:["Meriç"],            // varsa — motor ZATEN nehre yaslıyor
  not:"…" }
```
```
🟢 TEK OTORİTE   çift bir yerde durur, iki kayda kopyalanmaz
🟢 ZAMANLI       `f`/`t` ile — aynı iki devletin sınırı yıllara göre değişir
🟢 SINANABİLİR   bir denetim şunu sorabilir: "çizilen sınır gerçekten
                 A ile B'nin arasından mı geçiyor?" — bugün SORULMUYOR
🟢 NEHİR HAZIR   motorda nehir yaslaması ZATEN var (`§2`); `nehir:` alanı
                 onu ADIYLA çağırır, yeni mekanizma gerekmez
```

---

## ⑤ 🟢 VE GERİYE DOĞRU GİTME FİKRİ DOĞRU — ama çıpa TERSİNE İŞLİYOR

> *"1923'ü çıpa alıp geriye doğru geleceğiz"*

Veri modeli **zaten böyle çalışıyor**: her yerleşimin `s:`/`d:`/`v:`
zinciri geriye doğru uzanıyor ve `Değişmez 2` her kırılmanın maddesini
şart koşuyor. ⇒ *"Geriye doğru gelme"* yeni bir mimari değil, **var
olanın doldurulması.**
📌 Bugün üç vakada tam bunu yaptık: Agadez (1906 bulundu, 17 yıl kapandı)
· Timbuktu (1750/arma bulundu, 60 yıl kapandı) · Van (1548 günü düzeldi).

---

## ⑥ SIRA — ve ilk iş ARAŞTIRMA DEĞİL, ÖLÇÜM
```
① KOŞU BİTSİN. Sonra `devletler_harita.js`ten GERÇEK komşuluk çıkarılır
   (hangi iki devletin gövdesi DEĞİYOR). Bugünkü "yakınlık" ölçütü
   komşuluğu ölçmüyor — sayı raporlanmadı.
② O listeden ZAYIF ÇİVİLİ sınırlar seçilir ⇒ işçi oturumların iş listesi
   bu olur. Bölge bölge değil, SINIR SINIR.
③ `serhat:` alanı `girdi.py`nin `BILINEN_DONEM_ALANLARI` kütüğüne
   eklenir — yoksa motor her koşuda uyarır ve alan sessizce düşer
   (bugün `bos:`/`neden:`te ölçülmüş bir kusur).
④ `data/sinirlar.js` + `index.html` satırı + basit bir denetim
   ("çizilen sınır çiftin arasından geçiyor mu").
```
🔴 ①·③·④ **kod/motor işi ⇒ koşu bitmeden yapılamaz.** ② de ①'e bağlı.
