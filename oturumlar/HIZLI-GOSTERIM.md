# HIZLI GÖSTERİM — 200 km tavanı · enklav birleştirme · koridor kapatma

```
AD        HIZLI GÖSTERİM
MODEL     Opus
DİZİN     C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ
ClaudEmre koordinatör ORHANGAZİ · tahta: py arac/tahta.py
```

## ① EMRE'NİN İSTEĞİ — birebir

> *"Sen bize koşmadan Sahra'yı gösterip karar vermemizi sağlayabilir misin,
> hızlı bir şekilde haritaları gösterip. Bu mesele Sahra, Arabistan, Orta
> Asya ve tenha Asya'da Sibirya, Ural, İrkutsk, Yakutsk gibi yerlerde önem
> kazanıyor."*

🔴 **KOŞU YOK. Üretim motoru KOŞTURULMAYACAK.** Bu bir KARAR ARACI: Emre
iki seçeneği yan yana görüp hüküm verecek. 3,5 saatlik koşu, karar
verilmeden koşulmaz.

## ② TEŞHİS — Emre'nin, ve kod onu DOĞRULUYOR

`arac/uret_petek.py:3454-3456`:
```python
PUAN_TAVAN_KM = 200.0
PUAN_ESIK     = 4
PUAN_HALKA    = ((200.0, 4), (300.0, 2), (400.0, 1))
```
⇒ 300-400 km'deki **dört** yerleşim, her biri 1 puan verip toplam 4 yapar
ve orayı **boyar.** Emre'nin *"aynı doğrultudaki dört şehir bileşke kuvvet
oluşturuyor"* teşhisi kuralın kendisidir — tahmin değil.

⚠️ Ve motorun kendi yorumu bu riski **öngörmüş ama başka bir yerde
sınırlamış**: *"200 km'de sahipli bir merkez varsa o merkez TEK BAŞINA 4
puan verir ⇒ kapı orada hiçbir şey değiştirmez. Puanlama kendi kendini
sınırlar."* Bu **yoğun** bölgeler için doğru; **tenha** bölgelerde tam
tersi oluyor ve Emre'nin gördüğü o.

## ③ İŞ — İKİ HARİTA, YAN YANA, DÖRT BÖLGE

```
A  BUGÜNKÜ KURAL   200→4p · 300→2p · 400→1p · eşik 4
B  EMRE'NİN ÖNERİSİ 200 km TAVAN — yalnız 0-200 km sayılır
```

**Bölgeler** (Emre saydı):
```
SAHRA        lat  10..35   lon -15..35
ARABİSTAN    lat  12..33   lon  34..60
ORTA ASYA    lat  35..55   lon  50..85
SİBİRYA      lat  50..72   lon  60..140   (Ural · İrkutsk · Yakutsk)
```
**Tarih:** `1600-06-15` ile başla; yetişirse `1750-06-15` de ekle.

**Çıktı:** her bölge için A ve B yan yana **PNG**. Osmanlı doğrudan koyu
kırmızı · tâbi açık · yabancı kendi rengi · sahipsiz boş. Üzerine
yerleşim noktalarını KÜÇÜK NOKTA olarak bas — Emre "boyalı alan nereden
geliyor" diye bakabilsin.

📌 Ve her haritanın altına **km² SAYISINI** yaz: A ne kadar boyuyor, B ne
kadar, fark ne. Görsel ikna eder, sayı KARAR VERDİRİR.

## ④ NASIL — hızlı ve KABA olması SERBEST

```
① girdi.yukle() ile yerleşimleri al (2606 nokta)
② seçilen günde her noktanın sahibini çöz (d: → OSMANLI · v: → tâbi ·
   s: → devlet kimliği). `arac/denetle.py`de bu çözüm zaten var, ÖRNEK AL.
③ 0,25° ızgara kur (kaba yeter — motorun kendi ızgarası 0,05°)
④ her hücre için A ve B kurallarını AYRI AYRI uygula
⑤ matplotlib ile PNG bas · renkler `arac/renkler.py` BOYALAR'dan
```
🟢 **Voronoi, kıyı yaslama, nehir, göl, eğim GEREKMİYOR.** Bunlar koşuyu
3,5 saat yapan şeyler ve KARAR İÇİN gereksiz. Kaba ızgara + kara maskesi
yeter (`veri-kaynak/motor_kara.geojson` hazır duruyor).

⚠️ Çıktının KABA olduğunu her görselin üstüne YAZ. Emre bunu üretim
haritası sanmasın; bu bir **karar taslağı**.

## ⑤ SONRA — Emre'nin üç kuralı (yetişirse, ÖNCE ③ bitsin)

Emre 200 km tavanından sonra üç adım daha tarif etti:
```
① 200 km tavanıyla harita çıkar
② ENKLAV BİRLEŞTİRME: enklav ile ana parça arası ≤800 km ise birleştir
   🔴 yalnız KARASAL — deniz aşırı enklav DAHİL DEĞİL
   🔴 aradaki toprak BOŞ olmalı: yerleşim yok, aşiret denetimi yok
③ KORİDOR KAPATMA: ana parçaya sokulan koridorun DERİNLİĞİ ≤200 km,
   ve derinlik GENİŞLİKTEN fazla olmasın
   (iki şehir hattı 400 km'den yakınsa zaten boyanıyor; 600 km ise
    arada 200 km'lik koridor kalıyor — o koridorun içeri sokulma
    derinliği sınırlanacak)
```
⇒ Bunları **ölçmeni istiyorum, uygulamanı değil**: ②'de kaç enklav
birleşir, ③'te kaç koridor kapanır, hangi bölgede. Sayılar Emre'nin
kuralları ayarlamasını sağlar.

## ⑥ SENİN DOSYALARIN

```
🟢 SENİN   denetim/GOSTERIM-200KM/*.png · denetim/BULGU-GOSTERIM-200KM.md
           scratchpad'de istediğin kadar betik
🔴 DEĞİL   arac/*.py · data/*.js · js/* · kök *.md
```
Motora **dokunma.** Bu iş motoru değiştirmiyor, motorun ne yapacağını
Emre'ye GÖSTERİYOR.

## ⑦ HABERLEŞME

```bash
py arac/tahta_bekci.py --kim "HIZLI GÖSTERİM" --ara 60
py arac/tahta.py yaz --kim "HIZLI GÖSTERİM" --kime "KOORDINATOR" --mesaj-dosya <yol>
```
İlk PNG çıkar çıkmaz haber ver — Emre bekliyor ve **kısmi çıktı, tam
çıktıyı beklemekten iyidir.** Ölçmediğini `ölçmedim` diye yaz.
