# EK OKUMA — DALGA 2 · 13 Eylül 2026

**Dosya:** `data/ekokuma_dalga2.js` → `window.EKOKUMA_DALGA2` (12 kart). Commit YOK.
**Kaynak liste:** `denetim/EKOKUMA-DAGITIM-0913.md §⑦`, ilk 12 satır (hepsi kartsızdı).
**Dokunulmayanlar:** `js/app.js` (yükleyiciye `"ekokuma_dalga2"` satırını başka işçi ekliyor), kronoloji dosyaları, öteki `data/` dosyaları.

## ① Yazılan kartlar

| # | id | tur | bağlı madde(ler) |
|---|---|---|---|
| 1 | `tartisma-osman-gazi-olum-yili` | tartisma | 1324-08-01 Osman Gazi'nin vefatı · 1326-04-06 Bursa'nın fethi |
| 2 | `savas-bursa-1326` | savas-hikayesi | 1326-04-06 Bursa'nın fethi |
| 3 | `kimdir-orhan-gazi` | kimdir | 1362-03-01 Orhan Gazi'nin vefatı |
| 4 | `fetret-sonu-mehmed-birlik-1413` | sebep-sonuc | 1413-07 Çelebi Mehmed birliği yeniden kurdu |
| 5 | `belgrad-1456-1521-yarim-kalan-hedef` | sebep-sonuc | 1456-07-22 Belgrad kuşatmasının başarısızlığı · 1521-08-29 Belgrad'ın fethi |
| 6 | `mora-despot-kardesler-1460` | sebep-sonuc | 1460-05-29 Mora'nın fethi |
| 7 | `savas-trabzon-1461` | savas-hikayesi | `1461-08-15\|Trabzon` (ayırıcı) |
| 8 | `savas-otlukbeli-1473` | savas-hikayesi | 1473-08-11 Otlukbeli Savaşı |
| 9 | `kirim-eminek-kefe-1475` | sebep-sonuc | 1475-06-06 Kırım'ın Osmanlı himayesine girişi · `1475-07-01\|Mengli Giray` (ayırıcı, kuyruk) |
| 10 | `cezayir-oruc-reis-olumu-1519` | sebep-sonuc | 1519-09-01 Cezayir'in Osmanlı Devleti'ne bağlanması |
| 11 | `kimdir-kanuni-tahta-cikis` | kimdir | 1520-09-30 Kanunî Sultan Süleyman tahta çıktı |
| 12 | `savas-rodos-1522` | savas-hikayesi | 1522-12-21 Rodos'un fethi |

Tür seçimi şartnameye göre yapıldı: savaş/kuşatma → `savas-hikayesi`, vefat/cülus → `kimdir` (Osman'ın vefatında kaynak bir tarih tartışması taşıdığı için `tartisma`), fetih/bağlanma → `sebep-sonuc`. Şemalar mevcut dosyalardan birebir alındı (`ekokuma.js` sebep-sonuc, `ekokuma_savas.js`, `ekokuma_kadin.js` kimdir, son çare dalı için tartisma).

## ② Ölçüm (node, `scratchpad/dogrula.js`)

- Evren: `index.html`in yüklediği 82 `olaylar*`/`kronoloji*` dosyası, 6193 madde.
- 12/12 kart ayrıştı, `tur` geçerli, zorunlu alanlar dolu, id'ler bütün `ekokuma*.js` içinde benzersiz. **Sorun: 0.**
- Bütün `olay` değerleri gerçek bir `t`ye denk geliyor. Ayırıcılı iki değer, başlık parçasıyla **yalnız hedef maddeyi** buluyor.
- Aynı güne düşen kuyruk ikizleri (Bizans/Bursa · Macaristan/Belgrad · İran+Akkoyunlu/Otlukbeli · İtalya/Kefe · Rodos Şövalyeleri/Rodos) **aynı olayı** anlatıyor. Bu yüzden düz tarih bırakıldı.
- **Kopya ölçümü** (kart metni ile okunan TDV gövdeleri arasındaki en uzun ortak kelime dizisi): en yüksek 8 kelime (özel adlar ve kısa kalıplar). İlk yazımda Mora 17, Orhan 10 kelimeydi; ikisi yeniden yazıldı (5 ve 5).

## ③ Ayırıcı uyarısı — BEKLEYEN

`js/app.js` `ekKartBagliMi` bugün `"YYYY-MM-DD|parça"` biçimini **tanımıyor**. Grep ile doğrulandı: `split("|")` yok, eşleşme `liste.indexOf(o.t)` ile yapılıyor. Bu yüzden iki bağ ayırıcı inene kadar **buton üretmez**:
- `1461-08-15|Trabzon` → Trabzon kartı bugün **hiçbir yerde görünmez**. Aynı güne kuyrukta iki "Amasra'nın düşüşü" maddesi var (`KRONOLOJI_ITALYA`, `KRONOLOJI_ITALYA_SEHIR`).
- `1475-07-01|Mengli Giray` → aynı güne `KRONOLOJI_AKKOYUNLU` "Üveys'in idamı" düşüyor. Kartın öteki bağı (1475-06-06) bugün çalışıyor.

Ayırıcı gelmeyecekse çare: Trabzon satırını düz `1461-08-15`e çevirmek. O zaman kart Amasra maddelerinde de çıkar (aynı seferin maddesi, zayıf ilgili).

## ④ Okunan kaynaklar (HTTP kodu, gövde okundu)

| slug | HTTP | başlık / yazar | kullanıldığı kart |
|---|---|---|---|
| osman-i | 200 | OSMAN I · Halil İnalcık | 1, 2, 3 |
| orhan | 200 | ORHAN · Halil İnalcık | 1, 2, 3 |
| bursa | 200 | BURSA · Halil İnalcık (tarih bölümü dahil) | 2 |
| mehmed-i | 200 | MEHMED I · Halil İnalcık | 4 |
| mehmed-ii | 200 | MEHMED II · Halil İnalcık | 5, 6, 7 |
| belgrad | 200 | BELGRAD · Divna Djuric-Zamolo | 5 |
| mora | 200 | MORA · Machiel Kiel, John Alexander | 6 |
| trabzon | 200 | TRABZON · Heath W. Lowry, Feridun Emecen | 7 |
| otlukbeli-savasi | 200 | OTLUKBELİ SAVAŞI · Erhan Afyoncu | 7, 8 |
| kirim | 200 | KIRIM · DİA (çok yazarlı) | 9 |
| kefe | 200 | KEFE · Yücel Öztürk | 9 |
| barbaros-hayreddin-pasa | 200 | BARBAROS HAYREDDİN PAŞA · Şerafettin Turan | 10 |
| oruc-reis | 200 | ORUÇ REİS · İdris Bostan | 10 |
| cezayir | 200 | CEZAYİR · çok bölümlü | 10 |
| suleyman-i | 200 | SÜLEYMAN I · Feridun Emecen | 5, 11, 12 |
| rodos | 200 | RODOS · Machiel Kiel | 12 |
| uzun-hasan | 200 | UZUN HASAN · Faruk Sümer | çekildi, karta dayanak olmadı |

**Ölü (302):** `osman-gazi` · `orhan-gazi` · `otlukbeli` · `kirim-hanligi` · `yanko` · `hunyadi-janos` · `hunyadi`.

## ⑤ Madde ↔ TDV ayrışmaları — RAPOR (kronoloji dosyaları benim değil, düzeltilmedi)

1. **`OLAYLAR_EK13` 1362-03-01 Orhan vefatı.** `ic_not_d` alanı *"TDV'de Orhan Gazi'nin müstakil maddesi bulunmadığından"* diyor. **Yanlış:** `orhan` HTTP 200 veriyor ve gövdesi Orhan Gazi'yi anlatıyor (Halil İnalcık, 65 bin karakter). Ölüm için Cemâziyelevvel 763 (Mart 1362) veriyor, sebebi veba. `§4`ün *"TDV'de yok demeden önce ARA"* vakası; `hurmuz`/`incular` deseni (`orhan-gazi` 302, `orhan` 200).
2. **1326-04-06 Bursa maddesi** *"fetih haberi ölüm döşeğindeki Osman Gazi'ye ulaştırıldı"* rivayetini veriyor. Okunan üç gövdede (osman-i · orhan · bursa) bu biçim yok. TDV yalnız *"öldüğünde Orhan Bursa'yı kuşatıyordu"* rivayetini aktarıyor ve ölümü vakfiyelere dayanarak 1324'e koyuyor. Kart 1 bunu tartışma olarak işliyor.
3. **1460-05-29 Mora.** TDV yalnız "1460 baharı" veriyor; maddenin kendi `gun` alanı "1460 yazı" diyor; `t` gün iddia ediyor. `§4` hassasiyet ekseni.
4. **1461-08-15 Trabzon.** TDV `trabzon`: *"Ağustos veya Eylül 1461"*, kuşatma 4 ya da 6 hafta. 15 Ağustos okunan gövdelerde yok.
5. **1461-08-15 Amasra** (`KRONOLOJI_ITALYA` · `KRONOLOJI_ITALYA_SEHIR`). TDV `mehmed-ii` Amasra'nın savaşsız teslimini **1459 yazına**, Semendire seferinin ardına koyuyor. Çekirdekte ayrıca `1460-01-01` ve `1461-06-01` Amasra maddeleri var; üç ayrı tarih.
6. **1519-09-01 Cezayir.** TDV (`barbaros-hayreddin-pasa`, `cezayir`) başvuru arîzasını **Ekim 1519** tarihli veriyor; madde tarihi belgeden önce düşüyor.
7. **1522-12-21 Rodos.** TDV'nin iki maddesi de teslim için **1 Safer 929 / 20 Aralık 1522** veriyor (kuyruk kaydı bunu zaten not etmiş). TDV içi iki çelişki de var:
   - sefere çıkış: `suleyman-i` 18 Haziran, `rodos` 16 Haziran
   - 1524 garnizonu: `rodos` içinde bir yerde 1343, başka yerde 1378
8. **1520-09-30 Kanunî maddesi** *"kanunnâmeleri ona 'Kanunî' unvanını kazandırdı"* diyor. TDV `suleyman-i`: unvan ilk kez XVIII. yüzyılda Cantemir'de geçer, XIX. yüzyılda yaygınlaşır. Çelişki değil ama maddenin cümlesi unvanı çağdaşıymış gibi okutuyor. Kart 11'in `not` alanında yazılı.
9. **1456-07-22 Belgrad maddesi** Hunyadi'yi ve Kapistrano'yu anıyor, `kaynak: mehmed-ii` gösteriyor. `mehmed-ii` ile `belgrad` gövdelerinde 1456 anlatısında **ikisi de geçmiyor**; `yanko`/`hunyadi` slugları 302. Dayanak bulunamadı. Kart bu adları kullanmadı.

## ⑥ Bulunamadı / ölçülmedi

- **Kuvvet sayıları:** Bursa, Trabzon ve Rodos'ta TDV sayı vermiyor. Kartta "kaynakta sayı verilmiyor" yazıyor, uydurulmadı.
- **Rodos hücumları:** TDV hücumların ayrıntısını vermiyor (*"zorlu ve kanlı"*). `akis` bölümü bu yüzden kısa ve bunu açıkça söylüyor.
- **Çamurlu (1413):** yer adı `mehmed-i` gövdesinde geçmiyor. Kart savaşın yerini adlandırmadı.
- **Tarayıcıda görünüm ölçülmedi:** dosya henüz yükleyici listesinde değil.
- **Görsel aranmadı:** `gorsel:null`.
