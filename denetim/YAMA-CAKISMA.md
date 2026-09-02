# YAMA ÇAKIŞMASI — 28 kayıt, karara bağlanabilir hâle getirildi

> Sevk: 1.MURAT, M-2111 (2 Eylül 2026). Yöntem: `py arac/_sahiplik_uygula.py`
> kuru koşusu + her çakışma için node ile ilgili `data/yer_yama_*.js`
> dosyalarından doğrudan kayıt çıkarma (regex değil). **KARAR VERİLMEDİ —
> öneri var, gerekçesiyle.**
>
> ÖNGÖRÜ (M-2112'de ölçümden ÖNCE yazıldı): 28'in ~10-14'ü gerçek. ÖLÇÜM:
> aşağıya bak — 28'in çoğu aslında **üç TEKRARLAYAN DESENE** indirgeniyor,
> bu yüzden "gerçek/sahte" ayrımından daha önemli bir bulgu **kaç BAĞIMSIZ
> karar olduğu.**

## 🔴 EN ÖNEMLİ BULGU — 28 çakışma aslında ~6 BAĞIMSIZ karar

```
GRUP A  Van koridoru "akkoyunlu boşluk hatası"     5 madde   → ①
GRUP B  Kars/Revan koridoru "hangi ankraj"         5 madde   → ②
GRUP C  Fetret 1335→1340 sınır günü (toplu, BİLİNEN) 3 madde → ③
GRUP D  Mardin koridoru "eksik katman"             3 madde   → ④
GRUP E  1689 Avusturya ara-dönemi (Sırbistan)      2 madde   → ⑤
TEKİL   geri kalan 10 madde                        10 madde  → ⑥-⑮
```

---

## ① GRUP A — Van koridoru: `yer_yama_kafkas.js`'te GERÇEK SAHİPSİZLİK BOŞLUĞU var
**Başkale · Doğubayazıt · Çaldıran · Özalp (Saray) · Yüksekova (Gever)**
**ÖNERİ: `yer_yama_ok110.js` KAZANSIN — yüksek güven, bu bir gerekçe/kaynak
tercihi değil, ÖLÇÜLEBİLİR bir hata.**

① NE FARK EDİYOR: Her 5 kaydın `kafkas.js` sürümünde `akkoyunlu` dönemi
`...→1514-09-06` ile bitiyor ve **bir sonraki dönem doğrudan `1639-05-17`de
başlıyor** (`d:` dizisinde) — **1514-09-06 ile 1639-05-17 arasında 125 YIL
hiçbir `s:`/`d:` kaydı yok.** `ok110.js` sürümünde bu boşluk YOK: akkoyunlu
1502-01-01'de bitiyor, `safevi` hemen `1639-05-17`ye kadar dolduruyor.
**Bu Değişmez 1'in (sahipsizlik yok) doğrudan ihlali** — kafkas.js'in kendi
notu bunu görmüyor, yalnız "akkoyunlu 59 yıl erken başlıyordu" diyor ve
akkoyunlu'nun NE ZAMAN BİTTİĞİNİ hiç ele almıyor.
② HANGİSİ DAHA GEÇ: kafkas.js 2 Eylül 04:02, ok110.js 2 Eylül 00:50 —
kafkas 3 saat daha yeni AMA bu bir ipucu, hüküm değil (ve burada yanıltıcı:
yeni olan hatalı).
③ KAYNAK GÜCÜ: ok110.js "ankraj Van/Çölemerik/Hakkâri (Xkm) — külliyattaki
zincirin birebir aynısı" diyor — yani VAR OLAN, TDV kaynaklı bir kaydı
kopyalıyor. kafkas.js "bulunamadı — Başkale ile aynı gerekçe" diyor, yani
KENDİSİ DE dolaylı, ama akkoyunlu bitiş gününü hiç TARTIŞMIYOR.
**DOĞRULADIM:** `ok110.js`'in akkoyunlu-bitiş tarihi (1502-01-01 ya da
Özalp/Yüksekova'da 1502) tarihsel olarak da makul — Akkoyunlu Devleti
gerçekten 1501-1503 arası Safevîler'e yenilip çöktü (Şûrûr Savaşı 1501,
Tebriz'in düşüşü), yani ok110'un tarihi hem BOŞLUK BIRAKMIYOR hem de
GERÇEK Akkoyunlu-Safevi geçişiyle örtüşüyor.

## ② GRUP B — Kars/Revan koridoru: iki ayrı ANKRAJ, ikisi de TDV kaynaklı
**Arpaçay (Akyaka) · Digor · Iğdır · Eçmiyadzin · Gümrü (Aleksandropol)**
**ÖNERİ: `ok110.js`, ORTA GÜVEN — gerçek bir kaynak farkı, kesin değil.**

① NE FARK EDİYOR: `kafkas.js` bu 5 kaydı **Kars'ın kendi TDV-doğrulanmış
zincirinin** (celayirli biter 1386, karakoyunlu biter 1467/1468) bir
kopyası gibi dolduruyor. `ok110.js` ise her birini **en yakın "ankraj"
noktasının** (çoğunlukla Revan) zincirine göre dolduruyor (celayirli biter
1410, karakoyunlu biter 1469, akkoyunlu biter 1501-07-01). **İkisi de
BOŞLUK BIRAKMIYOR** (Grup A'daki gibi bir Değişmez 1 ihlali yok) — bu
gerçek bir kaynak/yöntem tercihi.
② HANGİSİ DAHA GEÇ: aynı (kafkas 04:02, ok110 00:50, 2 Eylül).
③ KAYNAK GÜCÜ: **Eçmiyadzin'de çelişki YAKALADIM:** kafkas.js "Revan'a 19
km" diyor, ok110.js DE "ankraj Revan (19 km)" diyor — **AYNI ANKRAJ NOKTASI
İDDİA EDİLİYOR ama İKİ FARKLI ZİNCİR ÇIKIYOR** (celayirli biter 1386 vs
1410). Bu, kafkas.js'in aslında Revan'ı değil **Kars'ın şablonunu**
uyguladığını gösteriyor — mesafe gerekçesi doğru ama KAYNAK YANLIŞ
ETİKETLENMİŞ. ⇒ `ok110.js`'in "ankraj X — külliyattaki zincirin birebir
aynısı" iddiası DAHA TUTARLI: gerçekten aynı ankrajın gerçek değerlerini
kopyalıyor. **Ama bu ORTA güven** — Kars'a mı Revan'a mı daha yakın olmak
"doğru" ankrajı belirler mi, bu tarihî-coğrafî bir yargı, ben yalnız
TUTARLILIĞI ölçtüm, hangi ankrajın TARİHEN daha isabetli olduğunu
ölçmedim.

## ③ GRUP C — Fetret sınır günü (1335-12-01 → 1340-01-01): BİLİNEN, AYRI karar
**Bağdat · Halepçe · Şehrizor**
**ÖNERİ: bu 3 kaydı 28'in İÇİNDEN ÇIKAR — zaten senin "kendi-kilidi 31"
kovanda, 32 kayıtlık toplu kararla AYNI soru.**

① NE FARK EDİYOR: Üç kaydın da TEK gerçek farkı `ilhanli` döneminin bitiş
günü: eski dosyalar (`erken.js`, `uyg3.js`) `1335-12-01` kullanıyor,
`ok109_fetret.js` `1340-01-01`ye çekilmesini öneriyor — **bu tam olarak
senin M-2111'de ayrı saydığın "32 fetret kaydı" toplu kararı.**
🟢 AMA EK BULGU: `Halepçe` ve `Şehrizor`da fark yalnız bu değil —
`ok109_fetret.js`'in kayıtlarında **hiç `d:` (Osmanlı sahiplik) alanı
YOK**, oysa `uyg3.js` ikisine de araştırılmış Osmanlı dönemleri eklemiş
(Halepçe 1534-1550/1554-1623/1638-1917, Şehrizor 1535-1550/1554-1623/
1638-1918, TDV `şehrizor` gövdesinden alıntıyla). ⇒ **Bu iki kayıtta asıl
kazanan içerik `uyg3.js`'in `d:` eklemesi olmalı** — fetret sınır günü
kararı ne olursa olsun, `uyg3.js`'in eklediği veri kaybolmasın.
③ KAYNAK: Bağdat'ta `erken.js` zaten UYGULAMA-1'in kaydıyla birleştirilmiş
("ÇAKIŞMA ÇÖZÜLDÜ" notu kendi içinde duruyor) — yani Bağdat'ın bugünkü
görünen "çakışması" da 1335/1340 sınırından ibaret.
**SONUÇ:** toplu 32-kayıt kararı verildiğinde bu üçü OTOMATİK çözülür.
`erken.js`/`uyg3.js`'in İÇERİK ZENGİNLİĞİ (Timur'un iki işgali, Osmanlı
d: dönemleri) hiçbir durumda kaybolmamalı.

## ④ GRUP D — Mardin koridoru: eksik katman + tarih hassasiyeti, İKİSİ DE
**Malikiye (Derik) · Nusaybin · Silopi**
**ÖNERİ: BİRLEŞTİR — `ok110.js`'in erken katmanı + `ok107.js`'in gün
hassasiyeti**

① NE FARK EDİYOR: `ok107.js` zinciri `akkoyunlu`dan başlatıyor
(1281'den) — `ok110.js` önce `artuklu`(1281-1409) ve `karakoyunlu`
(1409-1467) katmanlarını ekliyor, TDV `artuklular`dan alıntıyla ("Mardin
kolu 1409'da Kara Yûsuf'a teslim edildi"). Yani `ok110.js` daha ERKEN
dönemi düzeltiyor. AMA `ok107.js` da kendi payına düzeltme yapmış: safevi
bitiş/İngiliz-Fransız devri günü `ok107.js`'te `1515-09-19` (TDV `nusaybin`
govdesinden, "enklav ve alakasız-madde kusuru" notuyla) — `ok110.js`'te
hâlâ eski `1515-01-01`.
② İkisi de 2 Eylül 00:47-00:50 arası, aynı gece.
③ İkisi de gerçek TDV alıntısı taşıyor, FARKLI kısımlar için.
**SONUÇ:** bu bir ya/ya da değil — `ok110.js`'in artuklu/karakoyunlu
eklemesi + `ok107.js`'in 1515-09-19 gün düzeltmesi BİRLİKTE uygulanmalı.
Üçünde de (Malikiye, Nusaybin, Silopi) aynı desen.

## ⑤ GRUP E — 1689 Avusturya ara-dönemi (Sırbistan bozkırı)
**Kragujevac · Çaçak**
**ÖNERİ: `p35.js` UYGULANSIN, `sh107.js`'in kaynak kaygısı AYRI NOT olarak
kaydedilsin — bu bir çakışma değil, bir UYARI.**

① NE FARK EDİYOR: `p35.js` TAM bir kayıt sunuyor (1689-1690 Avusturya
ara-dönemini ekleyip 113 yıllık sahipsizliği kapatan dolu bir `s:`/`d:`/
`v:` zinciri). `sh107.js`'in kaydında ise **hiçbir değer yok** — yalnız
"tarihler muhtemelen Niş'ten ödünç alınmış, bağımsız doğrulanamadı,
akademik kaynak aranmalı" diyor. Bu VERİ ÇAKIŞMASI değil, `p35.js`'in
YÖNTEMİNE dair bir ŞÜPHE.
③ `p35.js`'in kaynağı da zaten "bulunamadı — komşu Niş/Vidin'den
hizalandı" diyor, yani `sh107.js`'in şüphesi HAKLI, ama alternatif bir
tarih ÖNERMİYOR.
**SONUÇ:** `p35.js`'i uygula (113 yıllık gerçek sahipsizlik boşluğunu
kapatıyor, hiçbir şey uygulanmamaktan iyi), ama "Niş'ten ödünç tarih —
ikinci bir akademik kaynakla doğrulanmalı" notunu KAYITTA TUT (kayıp
olmasın, `§11`: bir şüphe uygulamayı engellemez ama kaydı kaybolmamalı).

---

## TEKİL MADDELER — her biri kendi kararı

## ⑥ Ardahan + ⑦ Kars — SAHTE ÇAKIŞMA, aslında BİRLEŞTİRİLEBİLİR
`kafkas.js` ANTİK dönemi (Gürcistan→ilhanli/celayirli/.../safevi zincirini)
düzeltiyor ama 1877/1878 Rusya fetih gününe DOKUNMUYOR. `uyg1.js` TAM
TERSİNİ yapıyor: Rusya fetih gününü (akademik kaynakla, Allen & Muratoff
1953) 1878-07-13'ten gerçek düşüş gününe (Ardahan 1877-05-17, Kars
1877-11-18) çekiyor ama antik dönemi tek blok bırakıyor. **İKİSİ DE
DOĞRU, FARKLI SORUNLARA BAKIYOR.** ÖNERİ: BİRLEŞTİR — kafkas.js'in antik
zinciri + uyg1.js'in düzeltilmiş Rusya günü, `Bağdat`da zaten yapılmış
birleşim deseninin aynısı.

## ⑧ Manama (Bahreyn) — POLİTİKA farkı, İÇERİK farkı değil
`gece_v1.js` 7 dönemlik TAM bir zincir sunuyor (cebri→portekiz→safevi→
umman→zend→bahreyn→ingiltere), var olan bir kronoloji dosyasından
(olaylar_ek13.js) TDV alıntılarıyla. `uyg2.js` daha TEDBİRLİ: 1602-1783
arasını BİLEREK boş bırakıyor çünkü TDV bu dönemi "net tek hakim yok,
mücadele sahnesi" diye tarif ediyor (§3.5 hayalet-devlet riski).
ÖNERİ, ORTA GÜVEN: `gece_v1.js` — çünkü kaynağı (olaylar_ek13.js) daha
önce bağımsız yazılmış ve doğrudan TDV alıntısı taşıyor; ama `uyg2.js`'in
temkinli okuması da meşru. **Bu aslında bir üçüncü grup: kaynağın
KENDİSİNİN belirsiz olduğu (TDV net tek hakim vermiyor) bir dönem —
karar TDV'nin muğlaklığını nasıl yorumlayacağın, benim ölçebileceğim bir
şey değil.**

## ⑨ Mersin — SAHTE ÇAKIŞMA, iki dosya AYNI SONUCA ulaşmış
`ok110.js` ve `p35.js`'in `s:`/`d:` içerikleri **BİREBİR AYNI**
(kilikya-ermeni→ramazanoglu→fransa zinciri, aynı günler). p35.js'in kendi
notu zaten "üç bağımsız ölçüm" diyor. ÖNERİ: hangisi olursa olsun,
UYGULA — içerik farkı yok, `_sahiplik_uygula.py`nin alan-bazlı imzası
muhtemelen küçük bir biçim farkını (alan sırası) çakışma sanmış.

## ⑩ Mîyandoab — SAHTE ÇAKIŞMA, İKİSİ DE BİRLİKTE uygulanabilir
`iran.js` 1585-1603 dönemini ekliyor, `uyg2.js` 1724-1739 dönemini
ekliyor — **iki farklı zaman penceresi, ÇAKIŞMIYOR.** ÖNERİ: İKİSİNİ
BİRDEN uygula.

## ⑪ Hoy — ÜÇ YÖNLÜ, ama gerçek çakışma yalnız BİR pencerede
`iran.js` (1585-1603 + 1724-1730) ile `kademe_zincir.js` (yalnız `m:`
alanı + AYNI 1585-1603 penceresi, çakışmıyor) BİRLİKTE uygulanabilir.
Gerçek çakışma: `iran.js`'in 1724-09-28→1730-08-12'si ile `uyg2.js`'in
1724-01-01→1739-01-01'i AYNI dönemi FARKLI günlerle dolduruyor.
ÖNERİ: `iran.js` kazansın — Değişmez 2 gün-senkronunu (±0, iki gerçek
kronoloji maddesiyle) AÇIKÇA ölçüp seçmiş; `uyg2.js` TDV'nin yıl-düzeyi
bilgisini YYYY-01-01'e çevirmiş, daha kaba.

## ⑫ Yagodina (Jagodina) — SAHTE ÇAKIŞMA, İÇERİK NEREDEYSE AYNI
`ok110.js` ve `p35.js` aynı 1689-1690 ara-dönemini ekliyor, aynı kaynak
gerekçesiyle (Kragujevac/Niş'ten hizalama). Küçük fark: `ok110.js` `v:`
alanını "1830-1878 KORUNDU" diye özellikle vurguluyor. ÖNERİ: ikisi de
aynı sonucu veriyor, UYGULA (hangisi olursa).

## ⑬ Yedisan bozkırı — SAHTE ÇAKIŞMA, İKİSİ DE AYNI SORUNU AYNI YÖNDE ÇÖZÜYOR
`erken.js` ve `ok110.js` ikisi de 1783-1792 arasına `d:OSMANLI` ekleyip
8,7 yıllık çift-sahiplik çakışmasını kapatıyor — `ok110.js` yalnız
1917-sonrası Rus rejim değişikliklerini (geçici hükümet → Sovyet) de
ekliyor. ÖNERİ: `ok110.js` — aynı düzeltme + fazladan doğru ayrıntı.

## ⑭ Vidin — 🔴 DOKUNMADIM (senin kolun), yalnız ÖLÇTÜM
`p0037.js` ve `sh110.js` **BİREBİR AYNI** (aynı TDV alıntısı, aynı
1689-10-01 ay-kesinlikli tarih). `sh107.js` bir DEĞER sunmuyor, yalnız
şüphe: "ikincil bir kaynak 19 Ekim diyor, akademik değil, dokunmadım."
Bu üç yamalı çakışmanın GERÇEK doğası: iki dosya (p0037/sh110) aynı
sonuca ulaşmış, üçüncüsü (sh107) bir doğrulama sorusu bırakmış — TDV'nin
kendisi zaten "Ekim" diyor, sh107'nin ikincil kaynağı (19 Ekim) bunu
ÇÜRÜTMÜYOR, YALNIZ İNCELTİYOR (ay içindeki gün). Karar sende.

## ⑮ Erzincan (erken.js vs uyg2.js) — erken.js DAHA TAM, birleştirilebilir
① NE FARK EDİYOR: `erken.js` zinciri 1348'e kadar geri götürüyor ve
1379-1410 arasına yerel bir hükümdarın ("mutahharten") dönemini
ekliyor — Akkoyunlu ile arasına giren bir yerel beylik, TDV'de
doğrulanmış. `uyg2.js` bu dönemi HİÇ görmüyor, yalnız 1410-sonrasını
düzeltiyor (akkoyunlu→safevi geçişini 1500-01-01'e, Osmanlı'yı
1514-09-01'e çekiyor — erken.js'in 1502-01-01/1514-09-06'sına çok
yakın, birkaç günlük/yıllık fark).
② erken.js 29 Ağustos 14:02, uyg2.js 29 Ağustos 15:51 — uyg2.js DAHA
GEÇ ama daha AZ kapsamlı (bir ipucu, hüküm değil).
③ İkisi de TDV `erzincan` okumuş; erken.js ayrıca beylerbeyilik atama
tarihini (23 Ekim 1514) Çaldıran seferi günüyle çapraz kontrol etmiş,
daha derin okuma.
**ÖNERİ:** `erken.js` kazansın (mutahharten dönemi gerçek ve eksik
kalmamalı); `uyg2.js`'in 1500/1514-09-01 gibi ince tarih farkları
gözardı edilebilir (birkaç günlük/yıllık, Değişmez 2'yi etkilemiyor).

## ⑯ 0038/H-0007 (Zuhab Antlaşması) — bu 28'in içinde DEĞİL
(KARAR-MASASI.md'de C kovasında zaten işaretliydi, burada tekrar
etmiyorum — hâlâ araştırma bitmemiş.)

---

## SAYININ TUTMASI VE ÖNGÖRÜ KARŞILAŞTIRMASI

```
28 çakışmanın GERÇEK içerik farkı taşıyanı:     13  (Grup A 5 + Grup B 5 + ⑧ + ⑪ + Vidin ölçüldü-karar-sende)
SAHTE çakışma (iki dosya aynı/tamamlayıcı):      12  (⑥⑦ birleş. + ⑨ + ⑩ + ⑫ + ⑬ + Grup D 3 + Grup E 2 — bazıları birleştirme gerektiriyor, "aynı" değil ama çakışma da değil)
AYRI SORUYA AİT (toplu 32-kayıt kararı):          3  (Grup C)
```
Öngörümdeki "~6-8 kök karar" tuttu: gerçekte **6 grup + Vidin (sana ait) +
bir toplu karar (Grup C, zaten bilinen)**. Senin "~10-14 gerçek" öngörünle
kıyasla: gerçek İÇERİK farkı taşıyan tekil karar sayısı bu tanımla **~9**
(Grup A tek karar · Grup B tek karar · ⑥⑦ tek karar · ⑧ · ⑪ · Vidin · Grup
D tek karar · Grup C tek karar [zaten bilinen] · Mersin/Yagodina/Yedisan/
Mîyandoab/Kragujevac-Çaçak SAHTE) — yani ikimiz de kabaca doğruyduk, asıl
kazanç SAYIYI DEĞİL YAPIYI görmek oldu.

— PAKET-0003-0006, 2 Eylül 2026
