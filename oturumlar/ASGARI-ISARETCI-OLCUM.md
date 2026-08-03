# ASGARÎ İŞARETÇİ — ölçüm + UYGULANDI

**Yazan:** ARAYÜZ 2 · 3 Ağustos 2026 · Koordinatörün sorusu: küçük petekli
ama tarihsel önemli yerleşimler (Sebte, Melilla, Mersa'l-Kebîr, Mazagan,
Balaklava, Yalta, Sudak, Boğaziçi) neden haritada görünmüyor.

🔴 **GÜNCELLEME — Parça 1 yazıldı ve kalabalık kesitte ölçüldü** (aşağıda,
"UYGULAMA SONRASI ÖLÇÜM" başlığı altında). Aşağıdaki ilk bölüm hâlâ
KARAR ÖNCESİ ölçümdür, değiştirilmedi (§35: ölçüm kaydı silinmez).

---

## ① Eşik neye bağlı — ÖLÇÜLDÜ

Etiket görünürlüğü **poligon alanına DEĞİL**, yerleşimin `g:` (önem
katmanı, 0-3) alanına ve o anki zoom'a bağlı (`js/app.js` `sehirGuncelle`,
`zoomEsigi()`):

```javascript
var d = aktif.d;                    // pencereler.push'ta: d: Math.max(y.g, 1)
if (d < zoomEsigi()) { /* çizilmez */ }

zoomEsigi():  z<4.0 → 3   ·   z<5.2 → 2   ·   z≥5.2 → 1
```
`g:0` olan bir kayıt `Math.max(0,1)=1` tavanına ÇEKİLİR — yani "en düşük"
değil, doğrudan **tier 1**'e yükseltilir ve YALNIZ `z≥5.2`de (çok yakın
zoom) görünür. Ortalama/genel bakış zoom'unda (z 4-5) HİÇ görünmez.

**Sekiz örneğin `g:` değeri ölçüldü — SEKİZİ DE `g:0`:**
```
Sebte (Ceuta)        g:0  liman   Mersa'l-Kebîr    g:0  liman
Melîle (Melilla)     g:0  liman   Mazagan          g:0  kale
Balaklava             g:0  liman   Yalta            g:0  liman
Sudak                 g:0  liman   Boğaziçi         g:0  bölge
```
Kök sebep budur: `g:0` = "geçici" katman, tasarım gereği kalabalık
önlemek için en dipte tutuluyor — ama bu sekiz nokta geçici değil,
**küratörlük eksik** (kimse onlara daha yüksek bir `g:` vermemiş).

## ② Kaç yerleşim eşiğin altında — ÖLÇÜLDÜ

```
toplam yerleşim         1615
g:0 (en düşük katman)   1324   (%82 — büyük çoğunluk)
  tur:sehir              671
  tur:kale               292
  tur:liman              290
  tur:bolge               71
```
`g:0` olmak İSTİSNA değil KURAL — bu rakam tek başına "hepsine etiket
ver" çözümünü **imkânsız** kılıyor (koordinatörün de uyardığı gibi).

## ③ Çare seçenekleri — ÖLÇÜLDÜ VE KARŞILAŞTIRILDI

Amaç: `g:0` içinden "küçük ama önemli" olanı ayırt eden bir ölçüt.
Üç aday ölçüldü, ikisi ELENDİ:

### ELENEN A — `tur:kale`/`tur:liman` + kırılma sayısı ≥2
```
aday sayısı: 534
```
Çok gevşek — Gemlik, Yalova, Mudanya gibi yüzlerce sıradan Anadolu
kıyı noktasını da içine alıyor, seçici değil. **Elendi.**

### ELENEN B — kronolojide anılma sayısı (`sehirAnilma`, zaten var olan alan)
```
Sebte        anılma: 0     Mersa'l-Kebîr  anılma: 0
Melîle       anılma: 0     Balaklava      anılma: 0
Mazagan      anılma: 2     Yalta          anılma: 0
Boğaziçi     anılma: 3     Sudak          anılma: 0
```
🔴 **Sekiz örneğin ALTISI kronolojide HİÇ geçmiyor** (anılma: 0). Bu
ölçüt en isabetli görüneni olması gerekirken tam tersi çıktı — çünkü
sorun yalnız GÖRÜNÜRLÜK değil, bu altı yerin **kendi fetih/kayıp maddesi
de yazılmamış.** Ölçüt bunu YAKALAYAMAZ, çünkü olmayan bir maddeyi sayamaz.
**Elendi — ama değerli bir yan bulgu üretti (aşağıda).**

### 🔴 YAN BULGU — bu aslında İKİ AYRI SORUN, TEK ZANNEDİLİYOR

```
sorun 1   GÖRÜNÜRLÜK    g:0 → yalnız z≥5.2'de görünüyor        ARAYÜZ işi
sorun 2   İÇERİK        6/8 örneğin hiç kronoloji maddesi yok  VERİ işi
```
Sebte/Melilla/Balaklava/Yalta/Sudak/Mersa'l-Kebîr'i görünür yapsak bile,
tıklandığında/yakınlaşıldığında anlatacak bir hikâyeleri yok — ad görünür
ama arkası boş. **İkisi birlikte çözülmeli**, yalnız görünürlük yeterli
olmayacak.

---

## ÖNERİ — iki parça, ikisi de ölçülmüş maliyetle

### Parça 1 (ARAYÜZ, veri değişmeden yapılabilir): "asgarî işaretçi"

`g:0` için YENİ bir dördüncü görsel davranış — dot VAR, isim YOK, HER
zoom'da görünür (bugünkü `zoomEsigi` kapısından muaf):

```
g:1/2/3   bugünkü gibi: nokta + isim, zoom kademeli
g:0       YALNIZ küçük soluk nokta (isim yok), HER zoom'da — collision
          elemesi zaten var, kalabalıkta kendiliğinden elenir
```
**Neden kalabalık yapmaz:** çakışma elemesi `sehirOncelik` sırasına göre
çalışıyor (büyük/önemli önce yerleşir). g:1-3 zaten önce yer kaplayacağı
için g:0 noktaları YALNIZ boşta kalan yerlerde belirir — tam da
`oturumlar/OLCUM-ILERI-BAKIS.md`nin "gelecek işaretler listenin sonunda"
ilkesiyle aynı desen (aynı motoru ikinci kez kullanıyoruz, §35).
İsim yakınlaşınca (z≥5.2) zaten bugünkü gibi eklenir — DEĞİŞEN yalnız
NOKTANIN HER ZOOMDA varlığı, isim mantığı aynı kalıyor.

⚠️ **Bunu da çözmez:** hâlâ 1324 nokta hangisinin "Sebte kadar önemli"
olduğunu ayırt etmiyor — hepsini EŞİT küçük nokta yapıyor. Bu kasıtlı:
seçici bir ölçüt YOK (yukarıda ikisi de elendi), o yüzden ayrım
YAPILMIYOR — coğrafi varlık gösteriliyor, önem sıralaması iddia
edilmiyor.

### Parça 2 (VERİ, bu oturumun işi değil): manuel `g:` düzeltmesi + madde

Sekiz örnek gibi "dünyaca bilinen ama küçük" yerler için TEK güvenilir
yöntem küratörlük: birileri bunları TDV/akademik kaynaktan tarayıp
① `g:` değerini 1'den yukarı çıkarsın (kalıcı görünürlük) ② en az bir
fetih/kayıp maddesi yazsın (anlatacak bir şey olsun). Bu, **PETEK/NOKTA
ya da ÇAPRAZ İBERYA'nın işi** — 15 noktalık "küçük petek" listesi zaten
onların elinde, oradan başlanabilir.

---

## SIRA ÖNERİSİ

```
① Parça 1 (asgarî işaretçi) — ARAYÜZ, kod yazılınca hemen etkili,
   BÜTÜN g:0 için otomatik çalışır, veri beklemez
② Parça 2 (sekiz + benzerlerinin g: ve maddesi) — VERİ oturumu,
   Parça 1 tamamlanınca bu noktalar zaten görünür olacak, yalnız
   isim/hikâye eksik kalacak — onu bu parça tamamlar
```
📌 Parça 1 TEK BAŞINA "veri doğru, kullanıcı göremiyor" şikâyetini
kapatır (nokta görünür). Parça 2 olmadan kalan tek eksik: nokta var,
üstüne tıklayınca/yakınlaşınca anlatacak bir şey yok — ama bu ARTIK
"görünmüyor" değil "hikâyesi yazılmamış" sorunu, farklı ve daha kolay
teşhis edilen bir sınıf.

---

## UYGULAMA SONRASI ÖLÇÜM — kalabalık kesitte okunabilirlik

`js/app.js` (`sehirGuncelle`, yeni `asgariMi` dalı) + `css/style.css`
(`.sehir.asgari`) yazıldı. `m.gecici` (zaten var olan `g:0` bayrağı)
DOĞRUDAN kullanıldı — yeni bir veri alanı AÇILMADI.

⚠️ **Ölçüm yöntemi notu:** bu oturumda Browser pane render etmiyordu
(`document.hidden=true`, aynı bilinen kısıt). `haritaHazir`/`zoomEsigi`'yi
elle enjekte edip `sehirGuncelle`'i GERÇEK veri üzerinde çalıştırdım —
tahmin değil, kodun kendisini çalıştırıp DOM'dan ölçtüm.

```
z=6.3 (yakın)     asgari: 0    normal: 828   — beklenen: bu zoom'da
                  g:0 noktalar zaten NORMAL yoldan görünüyor, asgari
                  dalı hiç devreye girmiyor (tasarım gereği)
z=6.0 (Istanbul)  toplam: 819 marker, hata yok
z=4.8 (Ege)       asgari: 199  normal: 14   çakışan çift: 0
z=3.5 (bütün      asgari: 379  normal: 2    çakışan çift: 0
      imparatorluk)
```
Gerçek ekran (973×640, masaüstü boyutu) üzerinde **hiçbir çakışan çift
YOK** — mevcut ikinci-geçiş çakışma elemesi asgarî noktalara da aynen
uygulanıyor ve iş görüyor.

🔴 **Ama dürüst bir uyarı — "çakışmıyor" ile "seyrek" AYNI ŞEY DEĞİL.**
Bütün imparatorluk görünümünde (z=3.5) **379 nokta** ekranda; hiçbiri
üst üste binmiyor ama bu, ege/dalmaçya gibi yoğun kesitlerde gözle
"benekli/gürültülü" bir izlenim verebilir — 4px'lik solgun noktalar
teker teker OKUNAKLI ama TOPLU hâlde göze bir doku gibi çarpabilir. Bu
**estetik bir yargı**, çakışma testinin ölçemediği bir şey; ben
"çakışma yok" diyebilirim, "göze hoş geliyor mu" diyemem — ekran
görüntüsü alamadığım için bu turda GÖZLE doğrulayamadım.

**Karar noktası:** çakışma sıfır, mekanizma çalışıyor, kod hazır. Yoğunluk
öznel değerlendirmeni bekliyor — beğenmezsen geri alınacak kadar küçük
bir değişiklik (`.sehir.asgari` CSS'i + `sehirGuncelle`'deki tek `if`
dalı), commit'ten önce ekran görüntüsüyle de bakmanı öneririm.
