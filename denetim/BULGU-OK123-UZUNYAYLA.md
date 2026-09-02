# BULGU — OK123 · UZUNYAYLA KAYNAK ARAŞTIRMASI

> **Oturum:** OPUS HAZIR KITA 123 · `local_4c91797a-ddc3-4c07-b08e-fead3ee98b40`
> **Sevk:** M-2213 (1.MURAT) — *"kalem ARAŞTIRMA. Bu boşluğa nokta koymayı
> HANGİ AKADEMİK KAYNAK destekliyor? Bulursan kaynağı ve önerilen noktayı
> RAPORLA, YAZMA."*
> **Tarih:** 2 Eylül 2026 · **Veri yazılmadı** (`yerlesimler_ok123.js` YOK).

---

## 0. TEK CÜMLELİK CEVAP

**BULUNDU.** Sevkin *"BULUNDU 0 · TDV tanecikte SUSUYOR"* öncülü **ÇÜRÜDÜ**
— ama düzeltme bir *"var/yok"* düzeltmesi değil, **anahtar düzeltmesi**:
TDV bu tanecikte **konuşuyor**, yalnız **yer maddelerinden değil, HÂNEDAN
ve AŞİRET maddelerinden** konuşuyor. Aranan dört ad (Pınarbaşı · Sarız ·
Gürün · Darende) **yanlış anahtardı.**

---

## 1. DEVRALDIĞIM ÖNCÜLLER — tek tek ölçüldü

| # | Öncül (kaynak) | Damga | Ölçümüm |
|---|---|---|---|
| ① | Kayseri→Elbistan **160,3 km** (M-2213, iki oturum doğruladı) | **TUTTU** | `160.3` km — bağımsız hesapladım |
| ② | Kutuda **8 nokta** (37,6-39,6K / 35,3-38,6D) | **TUTTU** | 8 nokta, adlarıyla §2'de |
| ③ | *"Darende ZATEN YAZILMIŞ, `yerlesimler_ok110.js`"* | **TUTTU** | `data/yerlesimler_ok110.js`, 1 nokta, `girdi.py`de **BAĞLI** (69 dosya) |
| ④ | *"14 dar slug denendi, CANLI tek yer adı `elbistan`"* | **KISMEN ÇÜRÜDÜ** | `afsin` de **200** döndü — ama §4② tuzağı, aşağıda |
| ⑤ | *"BULUNDU 0 · TDV tanecikte SUSUYOR"* | 🔴 **ÇÜRÜDÜ** | beş canlı kapsayıcı madde tarih **veriyor**, §4'te |

### ④'ün ayrıntısı — bir "canlı yer slug'ı" DAHA var, ama yer değil
```
afsin   HTTP 200   <title> "AFŞİN"
        gövde:  "XI. yüzyılın en tanınmış Selçuklu beylerinden."
        ⇒ KİŞİ maddesi. Kasaba maddesi DEĞİL.
```
`CLAUDE.md §4②`nin (*canlı slug, yanlış madde*) **beşinci kayıtlı vakası**
— `ordu` · `saray` · `cin` · `mogadisu` ailesinden. Sayı olarak öncülü
çürütür (1 değil 2 canlı slug), **hükmü çürütmez** (ikisi de kasaba
maddesi değil).

---

## 2. KUTUNUN BUGÜNKÜ HÂLİ — ÖLÇTÜM

Taban: **2663 nokta / 69 girdi dosyası** (`girdi.GIRDI_DOSYALARI`).

```
KUTU 37,60-39,60K / 35,30-38,60D : 8 nokta
  ad                          enlem   boylam   EN YAKIN KOMŞU
  Arapkir                    39.041   38.492   Çemişgezek              36,3 km
  Behisni (Besni)            37.693   37.860   Hısn-ı Mansûr           37,6 km
  Darende                    38.550   37.500   Elbistan                46,5 km
  Divriği                    39.371   38.117   Arapkir                 48,9 km
  Elbistan                   38.207   37.194   Darende                 46,5 km
  Hısn-ı Mansûr (Adıyaman)   37.764   38.278   Kâhta                   30,3 km
  Kayseri                    38.734   35.480   Niğde                  110,3 km   🔴
  Malatya                    38.353   38.334   Hısn-ı Mansûr           65,7 km
```

🔴 **YENİ BULGU — sevkin ölçtüğünden BAŞKA bir sayı, ve daha keskin:**
Kutunun asıl yalnızı **Kayseri**. En yakın komşusu **Niğde, 110,3 km**.
Öteki yedi noktanın hepsi 30-66 km bandında.
⇒ *"Kayseri→Elbistan 160,3 km"* bir **hat** ölçüsüdür; `110,3 km` bir
**komşuluk** ölçüsüdür ve motorun emilme davranışını (`§2`) doğrudan o
belirler. İkisi aynı boşluğu iki ayrı eksenden gösteriyor.

**ÖLÇMEDİM:** Kayseri'nin peteğinin gerçekte nereye kadar uzandığını
ölçmedim (petek üretimi koşuyor, `data/donemler.js` bayat). Yukarıdaki
`110,3 km` bir **nokta-nokta** ölçüsüdür, petek ölçüsü değildir.

---

## 3. SLUG TARAMASI — 51 slug, HTTP koduyla

```
🟢 CANLI (200)  afsin*  dulkadirogullari  maras**  bozok  eretnaogullari
                kayseri  sivas  malatya  divrigi  cerkezler  firka-i-islahiyye
                iskan  kadi-burhaneddin  karaman  ramazanogullari  elbistan
                avsar  avsarlilar  sis**  kozanogullari  hicret  tanzimat  asiret

🔴 ÖLÜ (302)    uzunyayla  zamanti  zamanti-kalesi  goksun  efsus  develi
                develi-karahisar  tomarza  bunyan  pinarbasi  pinarbasi--kayseri
                sariz  gurun  kangal  feke  vahka  yesilhisar  darende
                dulkadiroglu  eretna  cerkesler  cerkes  kafkas-gocleri  muhacir
                sarkisla  aziziye  everek  zulkadiriye  dulkadirli  yeni-il
                bozok--sehir  ala-uddevle  turkmen  goc  kirim-ve-kafkas-gocleri
                ashabi-kehf  sultan-ii-abdulhamid
```
`*` **§4② tuzağı** — canlı ama KİŞİ maddesi (yukarıda).
`**` **§4④ tuzağı** — aşağıda, ve *"TDV'de yok"* diye raporlanamaz.

### 🔴 İKİ MADDE ÇEKİLEMEDİ — "yok" DEĞİL, **ÖLÇÜLEMEDİ**
```
maras   HTTP 200 · <title> "MARAŞ" · ham 80.503 bayt · METİN 2.399 bayt
sis     HTTP 200 · <title> "ŞÎS"   · ham 80.345 bayt · METİN 2.287 bayt
```
İkisinde de gövde **hiç gelmedi** — gelen şey header/arama klavyesi.
`CLAUDE.md §4④` (*canlı slug + BOİLERPLATE gövde*) vakası; aynı yöntemle
`dulkadirogullari` (29.975) · `kayseri` (56.764) · `malatya` (58.894)
**düzgün geldi**, yani yöntem kusuru değil.
⇒ **`maras` bu raporun ÖLÇÜLEMEDİ kovasındadır.** Dulkadır'ın merkez
sancağının maddesi; okunabilseydi bu soruya en doğrudan cevabı o verirdi.

🔴 **Ve `sis` ayrıca §4② tuzağı:** slug canlı, ama madde **ŞÎS**
(Şît peygamber). Kilikya'nın Sis'i (Kozan) **değil.** Bir sonraki oturum
`sis` slug'ını Kozan sanmasın.

### ⚠️ TDV ARAMA SAYFASI BETİKLE KULLANILAMIYOR — ölçüldü
`CLAUDE.md §4` doğru slug'ı bulmak için
`islamansiklopedisi.org.tr/arama/?q=<kelime>` öneriyor. **12 kelime
denendi, HAM HTML'de tek sonuç bağlantısı YOK** — sayfa sonuçları
JavaScript ile dolduruyor, gelen 48-53 KB'ın tamamı çerçeve.
⇒ Kural yanlış değil, **betikle uygulanamıyor.** Slug bulmanın işleyen
yolu bu turda şu oldu: *kapsayıcı maddenin gövdesini çek, adı gövdede ara.*

---

## 4. 🟢 BULUNAN KAYNAKLAR — gövdeleri OKUNDU, tarihleriyle

> **Yöntem notu:** ad taraması *"adı geçiyor mu"* diye sorar; bu **yanlış
> sorudur**. Aşağıdaki alıntılar, *"cümlede ad VE yıl birlikte var mı"*
> süzgecinden geçmiş cümlelerdir. Yalnız modern ilçe listesinde geçen
> adlar (`kayseri` maddesindeki Pınarbaşı·Sarız·Tomarza·Bünyan·Sarıoğlan,
> `sivas` maddesindeki Gürün·Kangal) **ELENDİ** — bir 2000 nüfus sayımı
> listesi 1600'de o kasabanın kime ait olduğunu söylemez. Sevkin bu
> tespiti **doğrudur ve korunmuştur.**

### 🟢 ① ZAMANTÎ (Kalesi) — EN GÜÇLÜ ADAY
Kaynak: **TDV `dulkadirogullari`** (gövde okundu, 29.975 karakter) ·
destek: **TDV `avsar`** (29.053 karakter)

```
"1360'ta Türkmen reislerinden Ömer Bey Eretnaoğulları'ndan Malatya'yı
 alırken Halil Bey de ülkesinin sınırlarını ZAMANTI'YA KADAR genişletti."

"Yeşbek, ... Şehsuvar Bey'i ZAMANTI KALESİ'NE KADAR takip etti."

"...sığındığı ZAMANTI KALESİ'NDE Memlük kuvvetleri tarafından kuşatılarak
 yakalandı ve Kahire'de idam edildi (1472)."

`avsar`: "Bu Avşarlar'ın daha XVI. yüzyılın ikinci yarısında ZAMANTI
          IRMAĞI boylarında yaylaya çıktıkları da bilinmektedir."
```
⇒ **Üç ayrı yüzyılda, adıyla, tarihli.** 1360'ta Dulkadır'a katılıyor,
1472'de hâlâ Dulkadır'ın sığınağı, 16. yy'da Avşar yaylağı.

### 🟢 ② GÖKSUN
Kaynak: **TDV `dulkadirogullari`** · destek: **TDV `elbistan`**
```
"Şehsuvaroğlu Ali Bey'in öncülük ettiği Osmanlı ordusunu GÖKSUN ile
 Andırın arasında Ördekli mevkiinde karşılayan Alâüddevle yenildi ve
 öldürüldü (13 HAZİRAN 1515)."

"Memlük kuvvetlerini GÖKSUN'DA karşılayan Sevli Bey galip gelerek
 düşmana büyük zayiat verdirdi."            (tarihsiz, ~1390'lar)

`elbistan`: "1608'de ... Kalenderoğlu Mehmed Paşa ... GÖKSUN YAYLASINDA
             Kuyucu Murad Paşa ile yaptıkları şiddetli çarpışma..."
```
🟢 **`13 Haziran 1515`, Elbistan ve Darende'nin atlasta KULLANDIĞI günün
ta kendisi** — yeni kırılma günü açmaz.

### 🟢 ③ DEVELİ (Develi Karahisar)
Kaynak: **TDV `eretnaogullari`** · **`kadi-burhaneddin`** · `dulkadirogullari`
```
eretnaogullari:  "753 Muharreminde (Mart 1352) Kayseri'de vefat eden
                  Alâeddin Eretna ... Öldüğünde Sivas, Kayseri, ...,
                  DEVELİ, ... onun hâkimiyeti altındaydı."
kadi-burhaneddin: "...Kayseri Emîri Cüneyd üzerine yürüyüp DEVELİ
                   KALESİ'Nİ kuşattı (1389)."
dulkadirogullari: "Dulkadırlılar Kayseri'den başka Ürgüp, Karacahisar,
                   DEVELİ ve Uçhisar'ı da Karamanlılar'a terketmek
                   zorunda kaldılar."      (bağlam: 1435 sonrası)
```

### 🟡 ④ UZUNYAYLA / SARIZ / PINARBAŞI — YALNIZ 1865 SONRASI
Kaynak: **TDV `firka-i-islahiyye`** · **TDV `avsar`**
```
firka-i-islahiyye: "Çukurova'nın en büyük aşireti olan Avşarlar yaylakları
                    UZUNYAYLA ve SARIZ yöresine yerleştirildiler."
avsar:  "1703 yılında Rakka'ya sürüldüler ... 1856 yılında tekrar
         yerleştirilmeye çalışıldı ise de yine başarı sağlanamadı.
         Nihayet İstanbul'dan 1865 yılında Çukurova'ya gönderilen..."
avsar:  "...yaylaklarına KAFKAS MUHACİRLERİ yerleştirildiği için pek
         verimsiz topraklarda yerleşmek zorunda bırakıldılar. Bugün
         Avşarlar Kayseri'nin PINARBAŞI, TOMARZA, SARIZ kazalarıyla
         bunlara bağlı yetmişten fazla köye yerleşmiş..."
```
⇒ **Uzunyayla adı TDV'de VAR** (sevkin *"Uzunyayla hiçbir yerde"* öncülü
bu noktada çürüyor) — ama **1865 iskânı bağlamında.** Atlasın 1281-1923
aralığının **son 58 yılını** destekler, öncesini **desteklemez.**

---

## 5. ÖNERİ — ölçülmüş, sıralı, ve MALİYETİYLE

> **Hiçbiri yazılmadı.** Sevk *"RAPORLA, YAZMA"* diyordu.

| Aday | Enlem/Boylam | Kayseri | Elbistan | Boşluğa etkisi | 2s maliyeti |
|---|---|---|---|---|---|
| 🥇 **Zamantî (Pınarbaşı)** | ~38,7222 / 36,3908 | 79,0 km | 90,4 km | **160,3 → 90,4** | **+1** |
| 🥈 **Göksun** | 38,0236 / 36,4964 | — | 64,3 km | hattı DEĞİŞTİRMEZ | **0** |
| 🥉 **Develi** | 38,3906 / 35,4903 | 38,2 km | — | hattı DEĞİŞTİRMEZ | ölçmedim |
| ⛔ Gürün | 38,7208 / 37,2764 | — | Darende **27,2 km** | değersiz | — |
| ⛔ Afşin | 38,2483 / 36,9186 | — | Elbistan **24,5 km** | değersiz | — |

**3 km sınavı:** beş adayın beşi de temiz (en yakını Afşin, 24,5 km).
**Ad sınavı:** beş adın beşi de atlasta **YOK** — `girdi.yukle` ValueError
riski **yok**. (`_yer_ara.py` + tüm `data/*.js` üzerinde `ad:` alanı
taraması; `yer_yama.js`teki *"Alaçayır (Göksun yaylası)"* bir **olay yeri
yaması**, yerleşim kaydı değil.)

### 🥇 ÖNERİLEN KAYIT — Zamantî
```
ad     Zamantî (Kalesi)      tur: kale      k: 4
s:     1281-01-01 → 1335-01-01   ilhanli     ⚠️ komşudan TÜRETİLDİ
s:     1335-01-01 → 1360-01-01   eretna      ⚠️ komşudan TÜRETİLDİ
s:     1360-01-01 → 1515-06-13   dulkadir    🟢 TDV, adıyla
d:     1515-06-13 → 1923-10-29               🟢 TDV, günüyle
```
**Dayanağı olan iki gün:** `1360` (Halil Bey'in sınırı Zamantı'ya
uzatması) ve `1515-06-13` (Alâüddevle'nin ölümü). Öteki iki gün
(`1281-01-01`, `1335-01-01`) komşu ankrajlardan türetildi — Darende'nin
`yerlesimler_ok110.js`teki zincirinin **birebir aynısı**, ve o dosya
bunu açıkça yazıyor.

### 🔴 MALİYETİ ÖLÇTÜM — ve öneriyi UCUZLAŞTIRMIYOR, GÖRÜNÜR KILIYOR
```
1515-06-13  çekirdekte VAR (olaylar_ek5.js)          ⇒ Değişmez 2:  +0
1337-01-01  çekirdekte VAR (olaylar.js)              ⇒ Göksun için: +0
1335-01-01  çekirdekte YOK — ama Darende·Kayseri·Sivas·Malatya
            o günü ZATEN kullanıyor ⇒ gün zaten AÇIK  ⇒ 2s:  +0
1360-01-01  çekirdekte YOK. En yakın çekirdek günü 1361-01-01,
            366 GÜN uzakta (>30) ⇒ YENİ AÇIK GÜN      ⇒ 2s:  +1  (75 → 76, tavan 121)
```
⚠️ Ve `yerlesimler_ok123.js` **çekirdek** sayılır: `denetle.py:3084`
`KUYRUK_DOSYALARI` **kapalı ve elle yazılmış bir liste**, yeni dosya
otomatik kuyruğa düşmez. Yani maliyet gerçekten işler.
🟢 **Çaresi de var ve ucuz:** `1360` için bir kronoloji maddesi
(*"Dulkadıroğlu Halil Bey sınırını Zamantı'ya kadar genişletti"*)
yazılırsa maliyet **+1 → 0**'a iner. Bu bir madde işidir, nokta işi değil.

### 🔴 ÖNERİNİN ZAYIF NOKTASI — ve saklamıyorum
**Zamantî Kalesi'nin kesin koordinatını KAYNAKLA VEREMEDİM.** TDV
koordinat vermiyor. Yukarıdaki `38,7222 / 36,3908` **Pınarbaşı ilçe
merkezidir** — kalenin kendisi değil, onu kapsayan idarî birimin merkezi.
`avsar` maddesi Avşarların Pınarbaşı'na yerleştiğini ve Zamantı ırmağı
boylarında yayladığını söylüyor; ikisi aynı sahadır ama **aynı nokta
değildir.**
🟢 Bu, projede **kabul edilmiş bir desendir**: `data/yer_yama.js:296`,
*"kesin koordinat verilmediğinden Göksun ilçe merkezi yaklaşık alındı"*
notuyla aynısını yapıyor. Aynı notu taşımak şartıyla meşru sayıyorum —
**ama kararı ben vermiyorum, bildiriyorum.**

---

## 6. NE BULAMADIM — açıkça

```
bulunamadı   Zamantî Kalesi'nin KESİN koordinatı (TDV vermiyor)
bulunamadı   Pınarbaşı · Sarız · Gürün · Tomarza · Bünyan · Sarıoğlan için
             1865 ÖNCESİNE ait, sahiplik tarihi veren HERHANGİ bir kayıt
bulunamadı   Feke / Vahka için tek bir tarihli cümle (`vahka`·`feke` ölü,
             `sis` yanlış madde, `kozanogullari` yalnız 19. yy)
ölçülemedi   `maras` ve `sis` maddelerinin GÖVDESİ (§4④ boilerplate)
ölçmedim     Kayseri peteğinin gerçek uzanımı (üretim koşuyor, çıktı bayat)
ölçmedim     Develi'nin 2s maliyeti (hattı değiştirmediği için sıralamadım)
ölçmedim     Göksun'un 1337 öncesi sahibi — Elbistan'dan `memluk` diye
             TÜRETİLEBİLİR ama TDV bunu Göksun için AÇIKÇA söylemiyor
```

---

## 7. ÇIKAN DERS — `CLAUDE.md §4` için bir ekleme önerisi

`§4` şunu öğretiyor: *"dar slug tutmazsa KAPSAYICI maddeyi dene"*, ve
2 Eylül'de yönü de eklendi: *"kapsayıcı madde genellikle **YER** ya da
**KİŞİ** maddesidir."*

🔴 **Bu turda üçüncü bir cins ölçüldü ve o ikisinden GÜÇLÜ çıktı:**
```
YER maddesi     kayseri (56 KB) · sivas (41 KB) · malatya (58 KB)
                → kasabaları YALNIZ MODERN İLÇE LİSTESİNDE veriyor
                → sahiplik tarihi: 0
HÂNEDAN maddesi dulkadirogullari (30 KB) · eretnaogullari · kadi-burhaneddin
                → Zamantı 1360 · Zamantı Kalesi 1472 · Göksun 1515-06-13 ·
                  Develi 1352 · Develi Kalesi 1389
                → sahiplik tarihi: 5
AŞİRET maddesi  avsar · firka-i-islahiyye
                → Uzunyayla · Sarız · Pınarbaşı, 1865 iskânıyla
```
⇒ ***Bir kasabanın SAHİPLİK tarihi, o kasabanın maddesinde değil, ONU
FETHEDEN HÂNEDANIN maddesinde durur.*** Sebebi yapısal: TDV bir kasabayı
coğrafya olarak anlatır, ama **el değiştirmeyi** siyasî aktörün
maddesinde anlatır — ve atlasın sorduğu şey tam olarak el değiştirmedir.

📌 Ve bu, `§4`ün *"TDV bir OLAY ansiklopedisi değil, YER-KİŞİ-KAVRAM
ansiklopedisidir"* dersinin **eksik ayağı**: sahiplik bir olaydır, ve
olayın kapısı **hânedan künyesidir**.

⚠️ **Sınırı:** bu tek bir coğrafyada (Dulkadır sahası) ölçüldü. Genel bir
kural olup olmadığını **ölçmedim** — başka bir bölgede sınanmadan
`CLAUDE.md`ye kural diye yazılmamalı.

---

## 8. İSTEDİĞİM — üç şık, önerimle

```
A  Zamantî'yi YAZ            → boşluk 160,3 → 90,4 km · 2s +1 · koordinat
   (ÖNERİM)                    "ilçe merkezi yaklaşık" notuyla
   ⚠️ ŞARTI: 1360 için bir kronoloji maddesi de yazılırsa 2s maliyeti 0

B  Zamantî + Göksun          → A'ya ek olarak Maraş-Elbistan üçgeni de
                               kapanır · Göksun'un 2s maliyeti 0
                               ⚠️ Göksun'un 1337 öncesi TÜRETME olur

C  HİÇBİRİNİ YAZMA           → koordinat kaynağı bulunana kadar beklet
                               ⚠️ boşluk 160,3 km AÇIK kalır
```
**Önerim A**, ve gerekçem: Zamantî tek başına hem **kaynağı en güçlü**
(üç yüzyıl, adıyla, tarihli) hem de **boşluğu en çok kapatan** adaydır;
ikisinin aynı adayda buluşması bu turun tek net sonucudur.
⚠️ Ama koordinat zayıflığı gerçektir ve **kararı bana ait değildir.**

**Nokta işi bana verilirse:** kutumu (`38,2-39,0K / 36,0-36,8D`)
`NOKTA-KUTU-DEFTERİ`ne yazdıktan ve `_baglama_onsinav.py` koştuktan sonra
yazarım, önce değil.
