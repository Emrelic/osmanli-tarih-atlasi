# BULGU — Değişmez 2s (75 AÇIK) dört kovaya ayrıştırma

> SONNET HAZIR KITA 120 · 2 Eylül 2026 · 1.MURAT'a M-2281/M-2288 sevkinin cevabı.
> Ölçüm oturumu — düzeltme YAPILMADI, veriye dokunulmadı.

## ① SINAV — AMERİKA-0902'nin öncülü 75'e UYGULANAMAZ, ÇÜRÜDÜ

Sevk şöyle diyordu: *"AMERIKA-0902 bugün ölçtü: 25 açığının 22'si KURULUŞ
günü... Bunu bütün 75'e uygula."* Bu öncülü doğrulamadan aktarmadım
(`CLAUDE.md §11/⑥`), kendim ölçtüm:

```
AMERİKA-0902 (M-2193)   25 açık   22 KURULUŞ (%88)    3 diğer
BEN (Değişmez 2s, 75)   75 açık   14 KURULUŞ (%19)   61 EL DEĞİŞTİRME (%81)
```

**ÇÜRÜDÜ.** Sebebi anlaşılır: Amerika'nın 25'i TEK BİR partinin (kendi
yeni eklediği `yerlesimler_amerika3.js`) taze kayıtlarıydı — hepsi
gerçekten yeni kurulan sömürge şehirleri, yani "kuruluş" oranı orada
%88 olması BEKLENEN bir şey. Değişmez 2s'nin 75'i ise **aylardır biriken,
onlarca partiden gelen** bir küme — ve bu kümede baskın örüntü **gerçek
devlet-arası el değiştirmedir**, kuruluş değil. `CLAUDE.md §11`in
*"ölçüm doğru, çıkarım yanlış olabilir"* dersinin bir örneği daha: senin
gözlemin (Amerika için) doğruydu, genellemesi (75'in tamamı için) değildi.

## YÖNTEM — kendi ayrıştırıcımı yazmadım

`arac/denetle.py`yi import ettim, `degismez2(Y_cekirdek, O, ("s",))` ve
`kapsam_disi(Y, acik_ham)` fonksiyonlarını olduğu gibi çağırdım (75 açık
sayısı böylece **denetle.py ile birebir doğrulandı**, 75 = 75).
Her açık kırılma günü **birden çok isim** taşıyabildiği için (aynı gün
birden fazla yerleşim değişebiliyor), 75 kaydın içindeki **toplam 122
isim-dokunuşunun HER BİRİNİ AYRI AYRI** sınıflandırdım: o yerleşimin
TÜM `d:`/`v:`/`s:` dönemlerini (tarihe göre sıralı) çıkarıp, kırılma
günü o yerleşimin **ilk döneminin başlangıcı mı** (KURULUŞ), **son
döneminin bitişi mi** (VERİ SONU — yapısal, aynı sınıf), yoksa **önünde
ve/veya ardında başka bir dönem olan gerçek bir devir mi** (EL
DEĞİŞTİRME) olduğuna baktım.

⚠️ **Bir kendi hatamı burada kaydediyorum** (`CLAUDE.md §11`in
"ölçmediğini ölçmedim diye yaz" kuralı gereği): ilk sürümde kırılma
gününün PAYLAŞILAN tipini (`kazanç`/`kayıp`) her isim için doğru
sandım — oysa `denetle.py:degismez2` aynı güne düşen birden fazla
isimde bu tipi yalnız İLK EKLENENİNKİ olarak saklıyor
(`kir.setdefault`). 4 dokunuş bu yüzden yanlış sınıflandı (BİLİNMİYOR).
Düzeltme: her isim için tipi PAYLAŞILANDAN değil, **kendi f:/t:
alanlarından bağımsızca** tespit ettim. Son koşuda **0 BİLİNMİYOR** kaldı.

## ② DÖRT KOVA — sayılarla

```
KURULUŞ/VERİ-SINIRI     14 / 75  (%19)   — yapısal, borç DEĞİL
EL DEĞİŞTİRME           61 / 75  (%81)   — gerçek devir, aşağıda alt-kırılım
KAPSAM DIŞI              0 / 75  (%0)    — zaten ayrı filtre, aşağıya bak
GERÇEK BORÇ             (61'in İÇİNDE — bkz. ③, kesin sayı KARAR gerektiriyor)
```

### KURULUŞ/VERİ-SINIRI — 14 kayıt, hepsi yapısal
Herseknovi(1382)·Ufa(1574)·Karlovac(1579)·Zamość(1580)·Tsaritsyn(1589)·
Saratov(1590)·Ferahâbâd(1611)·Senendec(1636)·Yeni Ürgenç(1646)·
Kuveyt+Omsk(1716)·Perm(1723)·Rostov/Don(1749)·Şuşa(1752)·Mukalla(1888).
Desen tutarlı: **Rus/Habsburg sınır kaleleri** (Ufa·Karlovac·Tsaritsyn·
Saratov·Perm·Rostov — kayıt bu yerleşimin atlasa girdiği ilk gün, yani
"kuruluş" tarihiyle çakışıyor, transfer değil) ve birkaç İran/Arabistan
noktası. Bunlara madde ARANMAMALI — kayıt zaten doğru davranıyor.

### KAPSAM DIŞI — 75 içinde 0, ama sınıra en yakın 4 kayıt burada
`kapsam_disi()` zaten 173 kaydı ayrı kovaya koymuş (75 + 173 = 248 =
`acik_ham`, doğrulandı). 75'in içinde eşiğe (2014 km) en yakın olanlar:
```
1975 km   Cenne (Djenné) — 1818 · 1862 · 1893 (üç ayrı kırılma, AYNI YER)
1960 km   1500-01-01 Orta Asya toplu grubu (Andican·Buhara·… 15 isim)
1865 km   1751-01-01 Belh
```
Hiçbiri eşiği (2014 km) geçmiyor — **yeniden sınıflandırma önerm iyorum**,
zaten doğru kovada. Not ediyorum çünkü Cenne 39 km farkla en yakın aday;
bölge (Batı Sudan/Sahel) ileride biraz daha genişlerse bu üç kayıt
kendiliğinden "kapsam dışı"na düşebilir — o an tavan da düşer.

## ③ EL DEĞİŞTİRME (61) — gerçek borcu ayıklamak için üç EK ölçüt

75'in 61'i **gerçek** devlet-arası devir — ama hepsi otomatik olarak
"eksik kronoloji maddesi" (gerçek borç) demek değil. Üç ek ölçüt uyguladım:

**(a) Tekli mi toplu mu** — aynı gün BİRDEN ÇOK isim değişiyorsa bu
muhtemelen TEK bir antlaşma/olayın sonucu, tek madde yeterli:
```
tekli isim (1 yerleşim)     23 kayıt  — ayrı ayrı araştırılmalı
toplu isim (2-18 yerleşim)  38 kayıt  — muhtemelen TEK olay, TEK maddeyle kapanır
```
En büyük toplu kayıtlar: 1881-03-26 **18 isim** (Romanya sınır bölgesi,
muhtemelen Berlin Antlaşması sonrası bir idari düzenleme) · 1500-01-01
**15 isim** (Orta Asya, Şeybânî fetihleri) · 1351-01-01 **15 isim**
(Doğu Anadolu). Bu üçü tek bir araştırma turuyla onlarca kaydı kapatabilir.

**(b) Boşluklu mu ardışık mı** — önceki dönem TAM O GÜN bitiyorsa
("ardışık devir", 56 kayıt) devir kesintisiz; önceki dönemle arada
GERÇEK bir boşluk varsa ("bkz. interregnum", 5 kayıt: Cenne'nin üç
kırılması + Gao/Segu 1898 + bir kayıt daha) o boşluk muhtemelen zaten
`kasıtlı_boşluk` olarak biliniyor (`CLAUDE.md §2` Cenne/Gao/Timbuktu'yu
zaten KASITLI diye anıyor) — bu 5 kayıt öncelik listesinde EN ALTTA
durmalı.

**(c) En yakın maddeye uzaklık (gün)** — 61 kaydın `fark_gün` dağılımı:
```
min 31 · medyan 152 · maks 1461
≤60 gün (sınıra YAKIN)     7 kayıt  — muhtemelen zaten "neredeyse" kapsanıyor
>365 gün (GERÇEK boşluk)  11 kayıt  — en güçlü gerçek-borç adayı
```
≤60 gün olan 7 kayıt (Białystok 40g · Yunus 1830 grubu 31g · 1721 Don
bölgesi 79g · 1410 Doğu Anadolu 43g · 1881-03-26 Romanya 47g · 1841
Arabistan 80g · 1362 Kiev/Kursk 59g) eşiğin (30 gün) hemen üstünde —
bunlar "hiç maddesi yok" değil, "en yakın maddesi 31-60 gün ötede,
belki İLGİLİ AMA eşleşmiyor" sınıfı; `denetle_eslesme.py` A bölümünün
konusu, benim görevimin değil, ama işaret ediyorum.

**Tam tablo** (75 kaydın tümü, tarih·isim sayısı·kova·alt-not·fark
gün·km) — `denetim/_S120_TABLO.md` olarak ayrı dosyaya kondu (75 satır,
okunabilirlik için ana rapordan ayrıldı).

## ÖLÇÜLEMEDİ
Yok — 75 kaydın 75'i de (122 isim-dokunuşunun 122'si de) sınıflandı.
"Gerçek borç"un KESİN sayısını vermiyorum çünkü o bir ARAŞTIRMA kararı
(hangi 61'in gerçekten madde gerektirdiği, hangisinin toplu bir olayla
zaten kapanabileceği) — yalnız ölçtüm, seçmedim.

## ③ NE İSTİYORUM
Seçmiyorum, sayıyorum:
1. **AMERİKA-0902 sevkindeki "kuruluş" öngörüsü 2s'nin GENELİNE
   uygulanamaz** — kaydını güncellersen (%19, %81 değil) ileride başka
   bir oturum aynı yanlış varsayımla başlamaz.
2. 61 "el değiştirme"nin içinde en verimli hedef **38 toplu kayıt**
   (özellikle 1881-03-26/18 isim · 1500-01-01/15 isim · 1351-01-01/15
   isim) — üç araştırma turu düzinelerce kaydı kapatabilir. Bu bir
   içerik/kronoloji oturumuna mı gider, sen karar ver.
3. 5 "boşluklu" kayıt (Cenne ağırlıklı) muhtemelen zaten kasıtlı boşluk
   biliniyor — öncelik listesinde EN ALTTA kalsın.
4. Tam tablo elimde (`denetim/_S120_TABLO.md`), istersen kova bazında
   ayrı dosyalara da bölerim.

✅ İŞLERİM BİTTİ — boştayım, yeni iş bekliyorum.
