<!-- DURUM: BEKLIYOR ¦ 2026-08-16 02:2x ¦ KOSUDAN ÖNCE yazıldı, damgalı -->
# EĞİM ÇARPANI — KOŞU ÖNGÖRÜSÜ · `İŞ 1`

**Yazan** Opus hazır kıta 4 (görev `MOTOR-EPOK.md`) · **Damga** koşu
başlamadan, `git log`da bu dosyanın commit'i koşunun commit'inden ÖNCEDİR.

> 🔴 **NİÇİN ÖNCE YAZILIYOR.** `CLAUDE.md §11`: *"sonradan yazılan beklenti,
> ölçümü gördükten sonra farkında olmadan ona göre şekillenir ve hiçbir zaman
> yanlış çıkmaz — yani hiçbir şey öğretmez. Önce yazılan beklenti YANLIŞ
> ÇIKABİLİR, ve ancak yanlış çıkabilen bir şey bilgi taşır."*
>
> 🔴 **VE MAZERETLER DE ÖNCE YAZILIYOR.** Her kalemin yanında *"bu tutmazsa
> mazeret var mı"* ayrıca duruyor. Sonradan bulunan mazeret bulguya benzer;
> önceden yazılan mazeret bir **kapsam beyanıdır.**

---

## ⓪ NE DEĞİŞTİ — tek cümle

`uret_petek.py`nin KARA-KISITLI SAHİPLİK Dijkstra'sı bugüne kadar ağırlıksızdı
(`_nd = _d + hypot(...)`). Artık adım bedeli **hedef hücrenin sürtünmesiyle**
çarpılıyor: `surt = 1 + 0,005 × |∇z|`, DEM'den, motorun kendi 0,05° ızgarasında.

**Tek değişken.** Kara/deniz kararı motor maskesinde kaldı (koordinatör kararı,
M-0126 "A yolu").

### ⏸️ AÇIKÇA ERTELENEN BORÇ — B YOLU
Kara tanımını da DEM'e (`z > 0`) taşımak **ertelendi**, sebebi ölçüm değil
**tek değişken kuralı.** `maliyet.py`nin kendi `kara_farki()` ölçümü iki kara
tanımının ayrıştığını zaten söylüyor; bugün ölçüldü: **74.796 hücre ayrışıyor**
(maske kara/DEM deniz 27.583 · DEM kara/maske deniz 47.213).
📌 Bu bir **kabul edilmiş borçtur.** `CLAUDE.md §11`: *"ölçülmüş ve kabul
edilmiş bir borç, kayıtsız kalırsa yarın bir kusur olarak yeniden bulunur."*
Kaydı burasıdır.

---

## ① MOTOR ÖLMEZ, DEM SATIRINI BASAR
```
beklenen çıktı:  eğim DEM: etopo2022_30s_dunya.tif · 43200x17280 · …
```
🔴 **MAZERET YOK.** C13 ile dört dalda zorlanarak sınandı (5/5); ① dalı tam
budur. Tutmazsa `EGIM_DEM` çözümü ya da `yukseklik.tam_mi` bozulmuş demektir.

## ② IZGARANIN KARA HÜCRESİ — 3.359.608
```
beklenen:  ızgara 3420×1860 = 6.361.200 hücre, kara 3.359.608
```
🔴 **MAZERET YOK — ve bu kalem BİR ÖZ-DÜZELTMENİN sınavı.**
İlk ölçümümde **3.382.866** demiştim; sonra `uret_petek.py:437`i okudum ve
gördüm ki motor gölleri de `KARA`dan çıkarıyor (`KARA.difference(GOLLER)`).
Maskeyi motorun kuralıyla yeniden kurdum — `DOGAL_GOL` beyaz listesini **elle
yazmadım, motordan okudum**, çünkü iki liste ayrışırsa ölçüm sessizce
başkalaşır. Fark: **23.258 hücre.**
📌 Yani bu satır *"eğim doğru mu"* diye sormuyor; ***"benim evrenim motorun
evreni mi"*** diye soruyor. Tutmazsa öngörünün geri kalanının tabanı çürüktür.

## ③ SÜRTÜNME İSTATİSTİĞİ — medyan 1,119 · en pahalı 11,03
```
beklenen:  eğim çarpanı 0.005 · kara hücresinde eğim medyanı 24 m/hücre
           → sürtünme medyanı 1.119
           en pahalı hücre: sürtünme 11.03 (eğim 2,006 m/hücre)
```
🔴 **MAZERET YOK.** Bu sayılar yalnız maskeye ve DEM'e bağlı; **nokta
sayısından bağımsız.** Yani başka oturumlar nokta yazsa bile değişmez.
🟢 Ve doğruluğun bağımsız tanığı: en pahalı hücreler **84,12°D/28,48°K
(Annapurna)** ve **74,68°D/36,38°K (Karakurum)**. `np.flipud` ters olsaydı bu
hücreler Hint Okyanusu'na düşerdi — coğrafya, dizinin yönünün tanığıdır.

## ④ ERİŞİLEBİLİRLİK DEĞİŞMEZ
```
beklenen:  eğimsiz erişilen N · eğimli erişilen N   ✓ AYNI
```
🔴 **MAZERET YOK.** Sürtünme **sonludur** (maks 11,03), sonsuz değil; hiçbir
hücreyi erişilmez yapamaz. Fark çıkarsa kodda hata vardır, veride değil.

## ⑤ IZGARADA SAHİBİ DEĞİŞEN HÜCRE — ~166.966 (%4,97)
```
beklenen:  ızgarada sahibi değişen hücre: 150.000 – 185.000  (%4,5 – %5,5)
```
Ölçümüm: motorun Dijkstra'sını birebir kopyalayıp iki kez koşturdum
(çarpan 0,000 / 0,005), aynı ızgara, aynı 2391 tohum → **166.966 hücre,
≈4.048.075 km², 6.289 ayrı (eski→yeni) çifti.**
🟡 **MAZERET VAR ve dar:** taban kayması. Ölçümüm 2527 noktalıydı; koşuya kadar
NOKTA oturumları yazıyor ve her yeni nokta ızgarayı böler. Bant bu yüzden
±%10 açık. **Mertebe ve işaret tutmalı**; %1'in altına düşerse ya da %15'i
aşarsa mazeret yok, bir şey anlamamışım demektir.

## ⑥ 🔴 ASIL KALEM — EĞİMİN **HARİTAYA İNEN** ETKİSİ: 0–8 PARÇA
```
beklenen:  ① EĞİM ETKİSİ: 0–8 parçanın ızgara cevabını eğim değiştirdi
```
**Gerekçe ve niçin ⑤'ten bu kadar küçük:** `uret_petek.py:1790`
```python
if _kvkp.contains(LineString([_ptl[_i], _rp])):
    continue                      # kesin geometri geçerli — dokunma
```
Izgaraya **yalnız** tohumundan parçasına düz hattı DENİZ KESEN parçalar
soruluyor. Hattı karada olan her parçada Voronoi kalıyor. ⇒ Eğimin Himalaya'da
ürettiği 1.865 hücrelik fark oraya **hiç ulaşmıyor.** Son koşuda ızgaranın
dokunduğu her şey: **68 parça / 202.444 km²** — maske karasının binde 1,5'i.

🟡 **MAZERET VAR (aşağı yönde):** ızgaraya kaç parça sorulduğu **ÖLÇÜLMEDİ**
(motor onu basmıyor). 0–8 bandını ⑤'in %4,97'sinden türettim ve sorulan
parçalar rastgele dağılmış DEĞİL — kıyıda yoğunlar, kıyıda eğim düşük
(kıyı medyanı 1,204 · iç bölge 1,117 ama uç değerler içeride). ⇒ **SIFIR
çıkması mazeretlidir ve BAŞARISIZLIK DEĞİLDİR:** eğim ızgarada çalışıyor,
süzgeç haritaya geçirmiyor demektir, ve o bir bulgudur.

🔴 **AMA YUKARI YÖNDE MAZERET YOK: >25 parça çıkarsa mazeret aramayacağım.**
O durumda ya `:1790` okumam yanlış ya da eğim beklediğimden çok daha geniş
çalışıyor; ikisi de **koşu sonrası araştırma** gerektirir, "olur böyle" değil.

## ⑦ A1 TUZAĞI — SONRAKİ AŞAMA GERİ ALIYOR MU?
Şartname bunu adıyla işaret etti: *"tavan doğru hesapladı, öngörü birebir
tuttu, ve yayın durduruldu — çünkü sonraki aşamanın yetim yüz mantığı 118 yüzü
komşulara geri veriyordu."*
```
beklenen:  kara-kısıtlı sahiplik sonrası boşalan petek: 0 ✓
```
🔴 **MAZERET YOK.** ANA PARÇA kuralı (`:1782`) bunu garanti ediyor ve eğim o
kurala dokunmuyor.
```
beklenen:  🔒 bileşen kilidi: 20–30 devir reddedildi
```
🟡 **MAZERET VAR:** devredilen parça kümesi değişirse reddedilen de değişir;
taban 25'ti.

## ⑧ `Değişmez 1` SAHİPSİZ SAYISI — eğim yüzünden DEĞİŞMEZ
🔴 **MAZERET YOK (eğim ekseninde).** Sahipsizlik **veriden** ölçülüyor
(`d`/`v`/`s` dönemleri), geometriden değil; eğim ona dokunamaz.
🟡 Sayı yine de 180'den kayabilir — **ama sebebi eğim OLAMAZ**, `data/`ye yazan
oturumlardır ve o `VERİ ZAMAN`ın işidir. Bu ayrımı önceden yazıyorum ki koşudan
sonra kayma görülürse **eğime yıkılmasın.**

## ⑨ KOŞU SÜRESİ — +2 ila +3 dakika
```
eğim yüzeyi (DEM okuma + gradyan)     ~40 sn      (ölçüldü: 40 sn)
ikinci Dijkstra (A/B ölçümü)          ~1 dk 40 sn (taban: 1 dk 38 sn)
```
🟡 **MAZERET VAR:** `asama()`nın kendi uyarısı — duvar saati uykuyu ve rekabeti
de sayar. İşlemci süresi ayrışırsa aşama yavaşlamış DEĞİLDİR.
📌 A/B ölçümü `MOTOR_EGIM_AB_KAPALI=1` ile kapatılabilir; **kapatılmamalı**,
çünkü ⑥'yı ölçen tek şey odur.

---

## 🔴 KOŞUDAN SONRA — kaç kalem TUTTU, kaç kalem ÇÜRÜDÜ
Bu tablo koşudan sonra doldurulacak. **Çürüyen kalem, tutan kalemden
değerlidir** — `CLAUDE.md §11`, RENK 2 vakası: *"beş öngörülük bir kümede
bilgiyi yalnız YANLIŞ OLAN taşıdı."*

| # | kalem | mazeret | öngörü | ölçüm | sonuç |
|---|---|---|---|---|---|
| ① | motor ölmez, DEM satırı | 🔴 yok | basar | | |
| ② | ızgara kara hücresi | 🔴 yok | 3.359.608 | | |
| ③ | sürtünme medyanı · maks | 🔴 yok | 1,119 · 11,03 | | |
| ④ | erişilebilirlik | 🔴 yok | AYNI | | |
| ⑤ | ızgarada değişen hücre | 🟡 taban | 150–185 bin | | |
| ⑥ | **haritaya inen parça** | 🟡 aşağı / 🔴 yukarı | **0–8** | | |
| ⑦ | boşalan petek · bileşen kilidi | 🔴 yok / 🟡 | 0 · 20–30 | | |
| ⑧ | Değişmez 1 (eğim ekseni) | 🔴 yok | değişmez | | |
| ⑨ | ek süre | 🟡 uyku | +2–3 dk | | |
