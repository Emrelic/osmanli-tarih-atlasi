# BULGU — NEHİR SÜRTÜNMESİ · araştırma ve katsayı önerisi

> Oturum: **NEHİR SÜRTÜNME** · sevk `1.MURAT` · 4 Eylül 2026
> 🔴 **VERİYE VE MOTORA DOKUNULMADI.** `arac/uret_petek.py · renkler.py ·
> girdi.py` yalnız **OKUNDU** (koşu 5 canlı, PID 19380, ölçtüm: StartTime
> 4.09.2026 21:26:47). `data/*.js` açılmadı. Bu bir **öneri** turudur.

---

## ⓪ DEVRALDIĞIM ÖNCÜLLER — hepsini kendim ölçtüm (`B10`)

| öncül | kaynak | sonuç |
|---|---|---|
| "sürtünme YALNIZ eğim" | şartname ① | ✅ **TUTTU** |
| "293 nehir parçası · 211 adlı akarsu" | şartname ① | ✅ **TUTTU** (`kosu4b.log`) |
| "Danube ve Donau iki ayrı kayıt" | şartname ② | ✅ **TUTTU** |
| "…ve BİRLEŞTİRİLMEMİŞ olabilir" | şartname ② | 🔴 **ÇÜRÜDÜ** |
| "deniz ~1/50 · nehir aşağı ~1/5 · yukarı ~1/2,5" | şartname ① | ⚪ **ÖLÇMEDİM** |

---

## ① SÜRTÜNME YÜZEYİ — bugünkü hâli, ölçüldü

`uret_petek.py:~2214`:
```python
_kvsurt = array("f", (1.0 + EGIM_CARPANI * _kvegim).ravel().tolist())
```
`NEHIR_HAT`ın **tüm** kullanımlarını taradım: `:1231` · `:1235`
(`dogal_hatta_yasla` — petek sınırının yaslanması) ve `:2709` (çöl tavanı
muafiyeti). **Maliyette hiç yok.** Göl ve bataklık da yok. ⇒ Şartnamenin
öncülü TUTTU.

### Ölçek — önerilecek katsayı buna oturmalı

```
KV_ADIM        0,05°            hücre  5,566 km
EGIM_CARPANI   0,005
sürtünme medyanı  1,111   (kara hücresinde eğim medyanı 22 m/hücre)
en pahalı hücre  11,75    (eğim 2.149 m/hücre)
ızgara          5.964.037 erişilen kara hücresi
⇒ BİR HÜCRE ADIMI ≈ 5,566 × 1,111 ≈ 6,18 maliyet birimi
```

---

## ② TUNA — "Danube/Donau" öncülü: yarısı tuttu, yarısı çürüdü

**Kayıt tarafı — TUTTU.** İki ayrı feature:
```
name=Danube  name_en=Danube  name_alt=None    scalerank 2  rivernum 25
name=Donau   name_en=Danube  name_alt=Danube  scalerank 2  rivernum 38
```

**"Birleştirilmemiş" tarafı — ÇÜRÜDÜ, iki ayrı yoldan:**

1. **İkisi de zaten yükleniyor.** `BUYUK` beyaz listesinde `Danube`,
   `Donau` **ve** `Tuna` üçü de var; üstelik `Donau`nun `name_en`i zaten
   `Danube`. Süzgeçten ikisi de geçiyor.
2. **Geometri sürekli.** `linemerge` 6 parça veriyor — ama uçları km
   cinsinden ölçtüm:

```
parça1.son ↔ parça2/3/4.baş   0,0 km      parça4.son ↔ parça5/6.baş  0,0 km
parça2.son · parça3.son       0,4 km      (ada/kol koltukları, 2-4 nokta)
"uzak" görünen iki uç: 332,3 km ve 455,4 km
   → BUNLAR KOPUKLUK DEĞİL, NEHRİN İKİ UCU
     (kaynak 8,18°D Almanya · delta 28,75°D)
```

🔴 **Ve bu benim kendi tuzağım oldu:** aletim önce *"7 kopuk parça"* dedi,
bir an **delik** sandım. Uçların mesafesini ölçünce hepsi çakışık çıktı.
***Bir parça SAYISI bir TOPOLOJİ değildir.*** Ölçmeden "kopuk" deseydim
bütün öneri yanlış bir kaygının üstüne kurulacaktı.

🟢 **Sonuç iyi haber:** Tuna **sürekli** bir hat. *Delikli bir engel engel
değildir* — Dijkstra delikten bedava geçer; **o risk yok.**

---

## ③ 🔴🔴 YAPISAL BULGU — katsayının BİÇİMİNİ bu belirliyor

`_kv_dijkstra` (`:2238-2272`) okundu:
```python
for di, dj in ((1,0),(-1,0),(0,1),(0,-1),(1,1),(1,-1),(-1,1),(-1,-1)):
    nd = d + math.hypot(dx*di, _KVDY*dj) * (surt[k] if surt else 1.0)
```
Kodun kendi yorumu: *"Sürtünme **HEDEF hücreden** okunur — `egim_olc.py:136`
kalibrasyonu birebir böyle yaptı."*

⇒ **Maliyet DÜĞÜM ağırlıklı** (girilen hücrenin sürtünmesi), **kenar
ağırlıklı değil.** Ve bunun sonucu Emre'nin istediğinin **tam tersi**:

```
nehri ENİNE geçmek     = nehir hücresine 1 KEZ girmek   → 1 birim ceza
nehir BOYUNCA gitmek   = nehir hücresine N KEZ girmek   → N birim ceza
```

📌 **Bir düğüm ağırlığı nehri "geçilmesi zor" YAPAMAZ; nehir boyunca gitmeyi
enine geçmekten DAHA pahalı yapar.** *"Enine geçmek pahalı, boyunca gitmek
ucuz"* ayrımı bugünkü `surt[k]` biçimiyle **ifade edilemez** — çünkü bu bir
**kenar** özelliğidir (*"bu adım nehri kesiyor mu"*), hücre özelliği değil.

⚠️ Ve ikinci bir ölçek gerçeği aynı yöne bakıyor: **hücre 5,566 km, Tuna
Rusçuk hizasında ~1-2 km.** Nehir bir hücreyi **hiçbir zaman doldurmaz** —
yani "nehir hücresi" diye bir şey yok, çizgi hücrelerin **içinden geçiyor**.
Bu da düğüm ağırlığını yapısal olarak yanlış araç yapıyor.

---

## ④ GEÇİT NOKTALARI — `§4`: önce TDV, adresler ÖLÇÜLDÜ

**Slug sınavı** (HTTP): 🟢 `tuna` · `isakca` · `yergogu` · `vidin` ·
`nigbolu` · `silistre` · `demirkapi` = **200** · 🔴 `rusuk` · `orsova` ·
`kalafat` · `zimnice` = **302 ÖLÜ**.
Gövdeler çekildi ve **aksan-normalleştirilmiş** arandı (düz arama bugün bir
kez yanlış negatif verdi; aynı hatayı tekrarlamadım).

### Kaynağın kendi cümleleri

**TDV `isakca`** (56.276 kar.) — maddenin **ilk cümlesi**:
> *"Aşağı Tuna'nın deltaya yakın kenarında **önemli bir geçit noktası**
> üzerinde bulunur."*
> *"881'den (1476) itibaren Moldavya, Lehistan ve Rusya'ya karşı sefere
> çıkan Osmanlı ordularının **Tuna'yı geçtikleri lojistik bir üs** olarak
> kullanıldı. II. Bayezid 889'da (1484) **İsakça'dan Tuna'yı geçerek** Kili
> ve Akkirman'ı almıştı."*
> *"Kaptan Hasan Paşa … **Tuna üzerine gemilerden bir köprü** yaptırmış"*
> (1621, II. Osman'ın Lehistan seferi)

**TDV `tuna`** (63.106 kar.):
> *"1595 Eflak seferi esnasında Tuna üzerinde **Rusçuk-Giurgiu arasındaki
> köprünün** inşa edilmesi için **yetmiş şayka** kullanıldığına dair
> kayıtlar vardır."*
> *"Angiolello'ya göre **Tuna'yı geçerken Osmanlılar büyük şayka
> kullanmıştı** … her biri **on dört at** alacak genişlikteydi."*

🔴 **Ve geçişin DENETLENEN bir eylem olduğunun belgesi** — 7 Cemâziyelâhir
1027 / **1 Haziran 1618**, Eflak voyvodasına hüküm:
> *"Tuna'yı bir hoşça hıfzettirip **bir ferdi Tuna'yı geçirmekten
> zapteyleyesin**"* (BA, MD, nr. 82, hk. 228)

⇒ Tuna serbestçe geçilen bir çizgi değil, **kapatılabilen bir hat**.

### Geçitler — atlasın KENDİ koordinatlarıyla, ve nehre uzaklığı ölçülü

| geçit | lat | lon | Tuna hattına | dayanak |
|---|---|---|---|---|
| **Rusçuk** | 43,8560 | 25,9710 | 3,21 km | TDV `tuna` — 1595, 70 şayka köprüsü |
| **Yergöğü (Giurgiu)** | 43,9040 | 25,9700 | 1,30 km | aynı madde, köprünün öbür ucu |
| **Budin** | 47,4980 | 19,0400 | 1,00 km | atlas `ikiz:` beyanı — Tuna'nın iki yakası |
| **Peşte** | 47,4940 | 19,0600 | 0,30 km | aynı |
| **Vidin** | 43,9920 | 22,8730 | 0,86 km | TDV `tuna` — liman/tersane, `vidin` 200 |
| **Niğbolu** | 43,7060 | 24,8920 | 4,47 km | TDV `tuna`, `nigbolu` 200 |
| **Silistre** | 44,1170 | 27,2600 | 1,78 km | TDV `tuna` — şayka limanı |
| **İbrail** | 45,2700 | 27,9720 | 0,07 km | TDV `tuna` — başlıca iskele |

**Ve iki KARŞI-KIYI ÇİFTİ ölçüldü** — aralarındaki doğru Tuna hattını
**gerçekten kesiyor**:
```
Budin  ↔ Peşte    1,57 km   nehri KESİYOR ✓
Yergöğü ↔ Rusçuk  5,34 km   nehri KESİYOR ✓   ← TDV'nin adını verdiği köprü
```
🟢 İki bağımsız yol aynı yeri gösterdi: TDV metni ve atlasın geometrisi.

### 🔴 VE BİR EKSİK — İsakçı ATLASTA YOK

TDV'nin **"önemli bir geçit noktası"** diye tanımladığı ve orduların
1476'dan beri kullandığı İsakçı, bağlı evrende **bulunamadı** (42-49°K /
8-30°D kutusunda tarandı). `§2`: noktası olmayan yer haritada yoktur.
⚠️ Bu bir **nokta işi** ve benim kalemim değil — bildiriyorum, yazmıyorum.

---

## ⑤ KATSAYI ÖNERİSİ — uydurulmadı, ÖLÇÜLMÜŞ bir sabite bağlandı

### Tabanı: geçitler arası mesafe

Bir yolcu geçit kullanmak için en fazla **yarım aralık** dolaşır. Ceza
bundan büyükse **kimse geçmez**, küçükse **herkes her yerden geçer.**

Tuna hattı üzerinde atlas noktalarının izdüşüm sırası ve aralıkları:
```
Estergon→Budin 56,7 · Peşte→Belgrad 386,2 · Belgrad→Semendire 46,9 ·
Semendire→Vidin 276,7 · Vidin→Niğbolu 175,6 · Niğbolu→Rusçuk 91,2 ·
Yergöğü→Silistre 106,6 · Silistre→İbrail 163,7            (8 gerçek aralık)
```
🔴 **Kendi ölçümümü düzelttim:** ilk hesabım `Rusçuk↔Yergöğü` (1,7 km) ve
`Budin↔Peşte` (0,9 km) çiftlerini de "aralık" saymıştı — onlar **aynı
geçidin iki yakası**, aralık değil. Elenince:
```
medyan aralık   135,2 km        ortalama  161,0 km
YARIM ARALIK     67,6 km        ortalama   80,5 km   ← dolaşma tavanı
```

### Öneri — sayıyla

```
GEÇİŞ CEZASI  ≈ 67,6 km × 1,111  ≈  75 maliyet birimi
                                  ≈  12,1 hücre adımı
duyarlılık bandı: 50-100 birim (45-90 km dolaşma karşılığı)
```

⚠️ **VE BU BİR ÜST SINIRDIR, sebebini ölçtüm:** aralıklar yalnız **11 atlas
noktasından** hesaplandı. Gerçek Osmanlı geçit kümesi daha sıktı (İsakçı ·
Maçin · Hırşova · Tulça · Oblucica · Kalafat · Zimnice…) ve bunların
çoğunun atlasta noktası **yok**. Geçitler sıklaşınca yarım aralık küçülür
⇒ **doğru ceza 75'ten AŞAĞIDA olabilir.** Nokta partisi geldikçe yeniden
ölçülmeli.

### Motorun bugünkü biçimine oturan somut ifade

Öneri `surt[k]`ye çarpan eklemek **değil** (③: yanlış yöne çalışır), `nd`
satırına **bir kenar terimi** eklemek:

```python
# _kv_dijkstra içinde, tek satır değişikliği:
nd = (d + math.hypot(dx*di, _KVDY*dj) * (surt[k] if surt else 1.0)
        + _KVGECIS[yon_no][h])          # ← YENİ: kenar bazlı geçiş cezası
```
`_KVGECIS` **koşudan önce bir kez** hesaplanır: 4 yönlü (D, K, KD, KB)
boolean/float dizi — *"h hücresinden bu yönde çıkan adım bir nehir hattını
kesiyor mu"*. Kesiyorsa `GECIS_CEZASI`, kesmiyorsa `0.0`.
```
maliyet: 4 × nx·ny önceden hesap — Dijkstra döngüsünde SHAPELY ÇAĞRISI YOK
         (48 M kenar için tek tek kesişim sorulsaydı koşu biterdi)
```

**Geçit istisnası:** `GECIT` listesindeki koordinatın ±1 hücresinde
`_KVGECIS = GECIS_CEZASI × 0,1` (ya da 0). Böylece hat kapalı, kapılar açık.

**"Nehir boyunca ucuz" ayrı terim** — ve o düğüm ağırlığıyla İFADE
EDİLEBİLİR:
```python
_kvsurt = 1.0 + EGIM_CARPANI*_kvegim
_kvsurt[nehir_koridoru] *= 0.85      # vadi = ucuz yol
```
İki terim birbirini **iptal etmez**: kenar cezası **toplamsal ve bir
kez**, koridor indirimi **çarpımsal ve hücre başına**.

### ④ YÖN ÖNEMLİ Mİ — cevap: bugünkü ızgarada HAYIR

Dijkstra 8 komşulu ve **yönsüz** (`h→k` maliyeti `surt[k]`, `k→h` maliyeti
`surt[h]`; ikisi de aynı yüzeyden). Akıntı yönünü (aşağı ucuz / yukarı
pahalı) modellemek için kenarın **yönüne** bağlı bir terim gerekir ve bu
`_KVGECIS`e eklenebilir — ama **akıntı yönü verisi Natural Earth'te yok**
(`ne_10m_rivers` alanları: `name · name_en · name_alt · scalerank ·
rivernum`; debi/yön/genişlik **yok** — ölçtüm).
⇒ **Önerim: bu turda yön MODELLENMESİN.** Şartnamedeki
*"aşağı ~1/5 · yukarı ~1/2,5"* oranı bir akademik tur raporundan geliyor ve
**ben ölçmedim**; veri olmadan uygulanamaz. Yön, DEM'den akış yönü
türetilerek sonra eklenebilir — ayrı ve büyük bir kalem.

---

## ⑥ BEDELİ — kabul ölçütü ⑤, ve tek yönlü DEĞİL

**Emsal ölçüm var** (`kosu4b.log`, aynı motorun A/B'si):
```
eğim AÇILINCA: ızgarada sahibi değişen hücre 309.582 (%5,19)
               129 parça el değiştirdi, 340.721 km²
               bunun 28 parçası / 43.918 km²'si DOĞRUDAN eğimin eseri
```
Geçiş cezası 75 birim ≈ **12 hücre adımı** — eğimin hücre başına etkisinden
(medyan 1,111, yani %11) **çok daha keskin**, ama **yalnız nehri kesen
kenarlarda** uygulanıyor. Beklentim: etkilenen hücre sayısı eğiminkinden
**az**, ama etkilenen yerlerde **daha kesin**.

**Osmanlı gövdesine yönü — ÖNGÖREMİYORUM, ve sebebini yazıyorum:**
```
Tuna'nın İKİ YAKASI da uzun süre Osmanlı/tâbi  → değişim YOK
Habsburg kuzey yakası dönemlerinde             → sınır nehre OTURUR (istenen)
Fırat · Dicle · Nil · Sakarya (iç nehirler)    → iki yaka da Osmanlı, etki YOK
```
⇒ İşaret (büyür mü küçülür mü) **veriye bağlı ve ölçülmeden bilinemez.**
`⑤`in istediği tahmini **yön olarak veremiyorum**; verebileceğim şey
**sınav**: koşudan sonra dokuz kesitte Osmanlı doğrudan+tâbi km², ve
`kosu4b` tabanına karşı delta. Motor bu tabloyu **zaten basıyor**
(`uret_petek.py:4924` "Çıktı kıyası").

🔴 **VE ÖNCEDEN YAZILMIŞ BİR MAZERETSİZ KALEM:**
> Nehir kenarındaki peteklerin sınırı **zaten** nehre yaslanıyor
> (`dogal_hatta_yasla`, yarıçap 0,30° ≈ 33 km). Geçiş cezası aynı sınırı
> **bir de maliyet üzerinden** nehre çekecek. ⇒ **ÇİFT SAYIM RİSKİ.**
> Eğer koşudan sonra nehir kenarı sınırlar *beklenenden çok daha fazla*
> oynadıysa sebep budur ve **mazeret yok** — o zaman ya yaslama yarıçapı
> ya geçiş cezası düşürülür, ikisi birden kalmaz.

---

## ⑦ ŞARTNAME DIŞI BULGU — kodun kendi yorumu bayat

`uret_petek.py:608-620` diyor: *"harita penceresinde **780** nehir parçası
ve **593** ADLI akarsu var"* ve `NEHIR_ONEM_ESIGI = 5` seçimini şu tabloya
dayandırıyor: `≤1:21 · ≤2:46 · ≤3:77 · ≤4:124 · ≤5:157 · ≤6:267 · hepsi 780`.

**Bugünkü pencerede (`box(-180,-60,180,85)`) ölçtüm:**
```
toplam parça 1454 · ADLI akarsu 1073
≤1:30 · ≤2:62 · ≤3:116 · ≤4:194 · ≤5:263 · ≤6:489 · ≤7:813 · hepsi 1454
```
⇒ Eşiğin **gerekçesindeki** sayılar ~**1,9 kat** bayat. Eşik 5 bugün 157
değil **263** parça alıyor; *"6'da 267'ye fırlıyor"* cümlesi bugün **489**.
Doğrulaması koşunun kendi logunda: `kosu4b` *"su koridoru: **1454** akarsu
parçası"* basıyor — benim ölçümümle **birebir**.
⚠️ **Eşiğin KENDİSİ yanlış demiyorum — GEREKÇESİ bayat diyorum.**

### Ve bir yanlış alarmı ölçerek önledim

`kosu_zincir.log` *"187 nehir parçası · su koridoru 780"* diyor ve mtime'ı
**21:26:47** — koşu 5'in başlangıcı. Bir an *"koşu 5 pencereyi küçültmüş"*
diye alarm verecektim. İlk satırına baktım: **"2026-08-12 19:27:09"** — log
**12 Ağustos**'tan; 21:26'daki damga koşu 5 başlarken eklenen *"ZATEN BİR
ZİNCİR KOŞUYOR"* ret satırı. Ve `git log -S"BOLGE = box"` 1 Eylül'den beri
**boş**. Kaynakta `BOLGE = box(-180,-60,180,85)`, doğru.
📌 *Bir log dosyasının TARİHİ adından da damgasından da okunmaz — İÇİNDEN
okunur.*

---

## ⑧ ÖLÇMEDİKLERİM — ayrı kova, "temiz" DEĞİL

```
ÖLÇMEDİM   Tuna'nın GENİŞLİĞİ ve DEBİSİ — Natural Earth bu alanları
           TAŞIMIYOR (alanlar ölçüldü: name·name_en·name_alt·scalerank·
           rivernum). Akademik kaynak gerekir; BAKMADIM.
ÖLÇMEDİM   Şartnamedeki "deniz 1/50 · nehir aşağı 1/5 · yukarı 1/2,5"
           oranını. Devraldım, DOĞRULAMADIM.
ÖLÇMEDİM   Mevsimsellik ve DONMA'nın sayısal karşılığı. TDV donmayı
           SÖYLÜYOR ("sert geçen kış aylarında bazı bölgelerde donduğu
           bilinmektedir") ama gün/sıklık vermiyor.
ÖLÇMEDİM   Demirkapı'nın (Portile de Fier) geçit mi engel mi olduğunu —
           TDV onu ayrı bir kaptanlık bölgesi olarak anıyor, geçit olarak
           DEĞİL. Hüküm vermedim.
ÖLÇMEDİM   Göl ve bataklığın maliyeti (şartname dışı ama aynı boşluk).
ÖLÇEMEDİM  Önerinin Osmanlı gövdesine YÖNÜNÜ — koşu gerektiriyor.
BULUNAMADI `rusuk` · `orsova` · `kalafat` · `zimnice` TDV sluglari (302).
           Rusçuk'un dayanağı bu yüzden `tuna` maddesi (kapsayıcı madde,
           §4'ün "dar slug tutmazsa kapsayıcıyı dene" kuralı).
```

---

## ⑨ TESLİM — sayıyla

```
Tuna için katsayı      GEÇİŞ CEZASI ≈ 75 maliyet birimi (bant 50-100)
                       tabanı: ölçülmüş yarım geçit aralığı 67,6 km
                       ⚠️ ÜST SINIR — geçit kümesi seyrek ölçüldü
biçim                  `nd` satırına KENAR terimi (_KVGECIS), düğüm çarpanı DEĞİL
geçit noktası          8 nokta koordinatıyla · 2'si ölçülmüş KARŞI-KIYI ÇİFTİ
                       (Budin↔Peşte 1,57 km · Yergöğü↔Rusçuk 5,34 km)
kaynak                 TDV `tuna` (63.106 kar.) · TDV `isakca` (56.276 kar.)
                       ikisi de gövdesi okunmuş, 4 ölü slug adıyla kayıtlı
yön (soru ④)           MODELLENMESİN — veri yok, ölçüldü
çürüyen öncül          1 (Danube "birleştirilmemiş") + kodun 780/593 yorumu
açık kalan             İsakçı atlasta YOK · genişlik/debi ölçülmedi ·
                       bedelin YÖNÜ öngörülemedi
```
