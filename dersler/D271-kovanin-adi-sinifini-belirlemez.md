# D271 — Bir borç kovasının ADI, içindekinin SINIFINI belirlemez

**Slogan:** *"kaynaksız"* dediğimiz 1841 kaydın 1419'u kaynaksız değil **YANLIŞ
KAYNAKLI** — ve yanlış ad, **yanlış çareyi** çağırır: biri ARAŞTIRMA ister,
öteki DÜZELTME.

## Vaka (`KAYNAKSIZ-ORNEKLEM-1010`, 10 Ekim 2026)

Emre'ye sorulacak üç karardan biri şuydu: *`kaynaksız s:` 1841 bir **beyan
borcu** mu (kaynağını yazmadık), bir **yanlışlık tahmini** mi (kayıt yanlış)?*
Tabakalı örneklemle ölçüldü (N=48, 11 bölge, tohum 20261010, Hamilton
orantılı; her kayıttan rng ile tek pencere-içi iddia sınandı):

```
YANLIŞ 10 · DOĞRU 36 · ÖLÇÜLEMEDİ 2        ⇒ ölçülende %21,7
Wilson %95: %12,3–35,6                      ⇒ 1841'e ≈400 (226–655)
```

🔴 **Ama asıl bulgu oran değil, ORANIN NEREDE TOPLANDIĞI:**
```
iddia penceresi 1281-01-01'de BAŞLIYORSA   YANLIŞ %70  (7/10,  %40–89)
daha GEÇ başlıyorsa                        YANLIŞ  %8  (3/36,  %3–22)
1841 kaydın 1419'u (%77) en az bir 1281-başlangıçlı halka taşıyor
```

### Sebep — ve `D210` onu zaten yasaklıyordu
`1281-01-01` atlasın **ufkunun kenarı**: bir kaynak değil, bir **sınır
işareti.** `CLAUDE.md §4` / [`D210`](D210-hassasiyet-kaynagi-asamaz.md) bunu
açıkça yazıyor — *"pencere uçları ölçüm değeri değil sınır işaretidir."*
1419 kayıtta o kenar **bir kaynak gibi** yazılmış: nokta *"1281'den beri şu
devletin"* diye işaretlenmiş, oysa 1281 o devletle ilgili **hiçbir şey**
söylemiyor — atlasın nereden başladığını söylüyor.
⇒ Ve `§4`ün *"atlas referans değildir, mamul üründür"* kuralı (Emre, 13 Eylül)
tam bunu yasaklıyor. Bu ölçüm, o kuralın **ihlal sayısını** verdi.

## Kural

> **Bir borç kovasının adı, içindekinin sınıfını belirlemez. Ad bir VARSAYIM
> taşır, ve varsayım yanlışsa kova yanlış ÇAREYE yönlendirir.**
```
"kaynaksız"      varsayımı: kaynak YAZILMADI       → çare ARAŞTIRMA
gerçek içeriği:  kaynak YANLIŞ yazıldı (ufuk ucu)  → çare DÜZELTME
```
İki çare aynı değil, aynı maliyette değil, aynı aciliyette değil. 1419 kayıt
"belgelenmemiş" sanıldığı sürece bir **dokümantasyon** işi görünüyordu;
ölçülünce bir **hata** işi çıktı.

**HÜKÜM: kova BÖLÜNDÜ.**
```
kaynaksız ∧ 1281-01-01 başlangıçlı  = 1419  → YANLIŞLIK ŞÜPHESİ
kalan                               =  422  → gerçek BEYAN BORCU
```
Tavan ailesi kalemi olduğu için ikisi **aynı commit'te** iner (`§3.4 ②`) ve
tavan yazılmadan hemen önce **yeniden ölçülür** (`§3.4 ⓪`).

## Yöntem notları — ölçümün kendisinden çıkan iki ders

**① "ÖLÇÜLEMEDİ"nin eşiği sonucu belirliyor, ve bunu ÖLÇEN söyledi.**
Her satır bir GÜÇ etiketi taşıdı: `DOĞRUDAN` 11 · `DOLAYLI` 13 · `ARAMA` 3 ·
`GENEL` 19 · `ÖLÇÜLEMEDİ` 2. `GENEL` = kaynak okunmadı, egemenliği değişmemiş
geç iddialar (Caen 1792+, Vetluga 1547+…). Bunları ölçülemedi saymak oranı
%21,7'den %37,5'e çıkarıyor — ama **YUKARI YANLI**, çünkü kolay doğruları
paydadan atıyor. ⇒ Ölçen oturum iki görüşü de bastı ve yanlılığı **kendi**
beyan etti. Tek sayı verilseydi hangisinin politika sayısı olduğu belirsiz
kalırdı.
**② Tabaka tanımı ölçümden ÖNCE donar.** Bölge kutuları dört kez düzeltildi
(Milos/Kûs/İran kıyısı/Volga sızıntıları) ve her düzeltme örneklemi
DEĞİŞTİRDİ; hiçbir sürümde kaynak okunmadığı beyan edildi. ⇒ Beyan olmasa
bu, sonucu seçmek olurdu. Ve ikinci örneklemde **yeni tohum** şart: aynı
tohum aynı kayıtları verir, o zaman ikinci örneklem birinciyi *teyit* etmez,
**tekrarlar.**

📌 En yakın akrabası
[`HUKUM-KASA-1010 §9.5`](../oturumlar/HUKUM-KASA-1010.md) — *"etiket taşınır,
tanım taşınmaz."* Orada bir SINIF ETİKETİ tanımından koparak yolculuk
ediyordu; burada **bir KOVANIN ADI** içeriğinden kopmuş. Aynı hastalık, bir
ölçek yukarıda.
