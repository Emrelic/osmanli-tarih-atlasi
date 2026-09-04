# HÜKÜM ALANI — bir yerleşim ne kadar toprağa hükmeder?

```
OTURUM : HÜKÜM ALANI
TARİH  : 4 Eylül 2026
SORU   : Emre — "askerî, siyasî, idarî, ekonomik olarak ne kadar toprak
         alanına hükmeder — akademik kaynaklardan araştıralım"
KISIT  : petek üretimi koşuyor · arac/* ve data/* DONMUŞ
         ⇒ bu dosya bir RAPORDUR, hiçbir sayı koda yazılmadı
```

---

## ⓪ ÖNGÖRÜ — ölçümden ÖNCE yazıldı

> 🔴 Bu bölüm, aşağıdaki hiçbir ölçüm yapılmadan ve hiçbir kaynak açılmadan
> yazıldı. Damga: 4 Eylül 2026, oturumun ilk on dakikası.
> `§11` — *"sonra yazılan beklenti ayarlanabilir, önce yazılan çürütülebilir."*

### Ⓐ Koridor ağı ortancası — koordinatörün 80 km'si

```
① NE BEKLİYORUM   ortanca 80 km'ye ±20 km yakın çıkacak (60-100 bandı)
② MAZERET         VAR ama DAR: koordinatörün n=84'ü hangi dosya kümesinden
                  ölçtüğünü bilmiyorum. Bağlı 6 koridor dosyası var ve
                  `§5`in "hangi dosyaları okuduğunu da doğrula" dersi tam
                  buraya bakıyor. ⇒ Ben BÜTÜN bağlı dosyaları okuyacağım;
                  n 84'ten BÜYÜK çıkarsa bu bir mazeret DEĞİL, onun
                  evreninin dar olduğunun kanıtıdır.
③ HANGİ KAYNAKTAN data/koridor*.js — index.html'de BAĞLI olanlar; birim km,
                  haversine, düğüm çiftleri arası kenar
④ NEYE KARŞI      koordinatörün beyanı: min 19 · %25 52 · ORTANCA 80 ·
                  %75 115 · %90 163 · n=84
```

### Ⓑ Literatür tek bir sayı verecek mi?

```
① NE BEKLİYORUM   HAYIR — VERMEYECEK. Beklediğim şey bir sayı değil bir
                  MERTEBE ve bir DEĞİŞKEN LİSTESİ. Somut olarak: askerî
                  yarıçapın ordu ikmal menzilinin bir fonksiyonu olarak
                  ~100-300 km mertebesinde, idarî yarıçapın GİDİŞ-DÖNÜŞ
                  süresine bağlı olarak ondan KÜÇÜK, siyasî/tâbiiyet
                  yarıçapının ise ikisinden de BÜYÜK çıkacağını bekliyorum.
② MAZERET         🔴 MAZERET YOK. "Literatür sayı vermedi" cevabı bir
                  SONUÇTUR ve kabul edilir; ama "aradım ve bulamadım"
                  demek için ARAMIŞ olmam gerekir. Boş dönersem kusur
                  literatürde değil bende olur.
③ HANGİ KAYNAKTAN Christaller · von Thünen · Boulding (LSG) · Van Creveld ·
                  Engels · Luttwak · Turchin · TDV `menzil--osmanli`.
                  Birim: km, ya da GÜN (yürüyüş günü) — ikisini KARIŞTIRMAM,
                  gün→km çevirimini AÇIKÇA yazarım.
④ NEYE KARŞI      kendi ⑴ eksen tablosuna ve koridor ölçümüne karşı:
                  literatürün verdiği mertebe, atlasın kendi altyapısının
                  ürettiği mertebeyle aynı büyüklükte mi?
```

### Ⓒ Kademeler arası ORAN

```
① NE BEKLİYORUM   Christaller'in idarî ilkesi k=7 — yani her kademe bir
                  alt kademeden ~7 birim taşır. Alan 7 kat ⇒ yarıçap
                  √7 ≈ 2,65 kat. Bu doğruysa k4→k3→k2→k1 arasında
                  yarıçap oranı ~2,5 civarı çıkmalı ve motorun ESKİ
                  tablosu (700/420/280/140) oran 1,67-1,5-2,0 verir —
                  yani ESKİ tablo Christaller'den DAHA DÜZ.
② MAZERET         VAR: Christaller idealize bir OVA için yazdı (izotropik
                  düzlem, eşdağılımlı nüfus). Osmanlı coğrafyası izotropik
                  değil. ⇒ oran tutmazsa bu Christaller'i çürütmez,
                  UYGULANABİLİRLİĞİNİ sınırlar. Ama "tutmadı" diye YAZARIM.
③ HANGİ KAYNAKTAN Christaller 1933 · k=3/k=4/k=7 ilkeleri; birim BOYUTSUZ
                  oran (yarıçap oranı), km değil
④ NEYE KARŞI      uret_petek.py:119'daki ESKİ TAVAN_KM tablosunun oranları
```

### Ⓓ SU ekseni — kara/su taşıma maliyet oranı

```
① NE BEKLİYORUM   oran 1:10 ile 1:60 arasında bir yerde çıkacak (kara
                  taşıması su taşımasından bir MERTEBE pahalı). En çok
                  anılan çapanın Diocletianus'un Fiyat Fermanı (301) ve
                  Roma tahıl taşımacılığı olduğunu bekliyorum.
② MAZERET         VAR: bu oran DÖNEME ve YOLA göre değişir (deniz ≠ nehir
                  ≠ nehir yukarı akıntı). Tek bir sayı çıkmazsa üç ayrı
                  sayı yazarım. Ama "oran diye bir şey yok" çıkarsa bu
                  öngörü ÇÜRÜR ve mazereti yoktur.
③ HANGİ KAYNAKTAN Diocletianus Edictum de Pretiis üzerine akademik çalışma ·
                  Roma/ortaçağ nakliye maliyeti literatürü.
                  Birim: BOYUTSUZ oran (birim ağırlık × birim mesafe başına
                  maliyetin katı)
④ NEYE KARŞI      motorun bugünkü sürtünmesi (1 + 0,005 × |∇z|) — su hiç
                  yok. Oran 1:10'dan büyükse motor SİSTEMATİK olarak
                  nehir/deniz kıyısı şehirlerin menzilini KÜÇÜK gösteriyor.
```

### Ⓔ Ve bir öngörü de RAPORUN KENDİSİ hakkında

```
① NE BEKLİYORUM   dört eksen (askerî·idarî·siyasî·ekonomik) DÖRT FARKLI
                  sayı verecek ve sıralama şu olacak:
                     idarî  <  askerî  <  ekonomik  <  siyasî
                  (yönetmek en dar, haraç almak en geniş)
② MAZERET         🔴 MAZERET YOK. Sıralama başka çıkarsa öngörü ÇÜRÜR ve
                  bu bilgi taşır — çünkü atlasın `d:`/`v:` ayrımı tam bu
                  sıralamanın üstüne kurulu.
③ HANGİ KAYNAKTAN aynı literatür kümesi; birim km ya da gün
④ NEYE KARŞI      kendi topladığım kaynak alıntılarına karşı
```

---

*(ölçümler aşağıya, öngörünün ALTINA yazılacak — öngörü satırları bir daha
düzenlenmeyecek)*

---

# ① ÖNGÖRÜ HESABI — beşin ikisi tuttu, üçü çürüdü

> `§11`: *"Beş öngörülük bir kümede bilgiyi yalnız YANLIŞ OLAN taşıdı."*
> Aşağıda çürüyen üçü, tutan ikisinden fazla şey öğretti.

| # | öngörü | ölçüm | hüküm |
|---|---|---|---|
| Ⓐ | koridor ortancası 80±20 km | **84,9 km** (n=121) | 🟢 **TUTTU** |
| Ⓑ | literatür tek sayı VERMEYECEK | **VERDİ** — şer'î sefer 80-100 km | 🔴 **ÇÜRÜDÜ** |
| Ⓒ | kademe oranı ~2,5 (√7), eski tablo Christaller'den daha düz | **1,71** (√3), eski tablo Christaller'in TA KENDİSİ | 🔴 **ÇÜRÜDÜ** |
| Ⓓ | kara/su oranı 1:10 – 1:60 | deniz **1:39-56** ✓ · nehir **1:3,4-10** ✗ | 🟡 **YARISI** |
| Ⓔ | sıralama idarî < askerî < ekonomik < siyasî | ekonomik İKİYE bölündü; sıralama tek eksende kurulamıyor | 🔴 **ÇÜRÜDÜ** |

**Ⓑ niçin değerli:** *"literatür bir sayı vermez"* diye yazmıştım ve
**mazeretini de yazmamıştım** (bilerek: "mazeret YOK"). Çürüdü — ve
çürüten şey Batı literatürü değil **İslâm hukukudur**: fıkıh *"uzak"*ı
bir kavram olarak değil **bir mesafe olarak** tanımlamış ve TDV o mesafeyi
kilometreye çevirmiş. ⇒ *Bir sorunun cevabının hangi literatürde
olduğunu bilmemek, cevabın olmadığı anlamına gelmiyor.*

**Ⓒ niçin değerli:** eski tavan tablosunun (`700/420/280/140`) adım oranını
ölçtüm — **1,7100**. √3 = 1,7321. **Fark %1,3.** Christaller'in Güney
Almanya dizisi (12·21·36·62·108 km) ise adım başına **1,7321** — tam √3.
⇒ Eski tablo, kimse öyle demeden **Christaller'in k=3 pazar
hiyerarşisinin ta kendisiydi.** Ben onun *"Christaller'den daha düz"*
olduğunu yazmıştım; tersi çıktı.
⚠️ Ve bu bir övgü değil bir **teşhis**: idarî hiyerarşi için doğru
sabit Christaller'e göre k=3 değil **k=7** (√7 = 2,65). Yani eski tablo
doğru ailedeydi ama **yanlış ilkeyi** uyguluyordu.

---

# ② KAYNAK KÜTÜĞÜ — ve üç damga

`§4`: **`bulunamadı`** (aradım, yok) · **`ölçülemedi`** (aradım, gövde
alınamadı) · **`okumadım`** (aramadım bile). Üçü ayrı yazılır.

## 🟢 GÖVDESİ OKUNAN — dayanak olarak kullanıldı

| kaynak | cins | ne verdi |
|---|---|---|
| TDV `menzil--osmanli` (Yusuf Halaçoğlu, 2004) | 🟢 TDV, 16.941 kar. | menzil aralığı **3-28 saat**; *"eşit uzaklıklarda olmayıp coğrafî şartlara göre"* |
| TDV `fersah` (Yusuf Halaçoğlu, 1995) | 🟢 TDV | **1 fersah = atın 1 saatte gittiği = 6,23 km**; Arap fersahı 3 mil = 5,985 km; İlhanlı yamı **her 3 fersahta** istasyon |
| TDV `berid` | 🟢 TDV, 18.430 kar. | Abbâsî postası: ana yollarda **her 12-24 km'de (2-4 fersah)** menzil noktası |
| TDV `mil` (Cengiz Kallek, 2020) | 🟢 TDV | şer'î mil ≈ **1975,7 m** (Mahmûd Bey el-Felekî) |
| TDV `sefer--fikih` | 🟢 TDV, 32.288 kar. | **şer'î sefer sınırı 80-100 km**; 1 günlük yol = **6 saat**; `mesâfetü'l-advâ` kavramı |
| M. F. Çalışır, *A Long March: The Ottoman Campaign in Hungary, 1663*, MA tezi, **Central European University**, 2009 | 🟢 üniversite yayını + birincil kütük | 1663 seferinin **64 konağı, saatiyle**; menzil arası **2-8 saat** |
| Christaller (1933) — üniversite ders neşri üzerinden tablosu | 🟡 ikincil aktarım | menzil dizisi **12·21·36·62·108 km**; k=3/k=4/**k=7** ilkeleri; ve idarî ilkenin kritik cümlesi (aşağıda) |
| Duncan-Jones 1982 · Deman 1987 · Scheidel 2014 · De Soto 2019 | 🟡 ikincil aktarım (dört ayrı tahmin + ELEŞTİRİSİ) | kara:nehir:deniz **1:4,9:56** · **1:5,8:39** · **1:5-10:52** · **1:3,4-6,8:50,7** |
| A. H. M. Jones (aktarım) | 🟡 ikincil aktarım | arabayla buğday **300-400 mil (480-640 km)** sonra fiyatı ikiye katlar |
| W. Scheidel, *Explaining the maritime freight charges in Diocletian's Price Edict*, Princeton/Stanford WP, 2013 | 🟢 gövdesi okundu (7 s.) | deniz navlunu ≈ **1 denarius / 1 seyir günü** (r = 0,88, n = 48 rota) |
| `data/koridor*.js` (6 dosya) + `koridor_owtrad.js` | 🟢 atlasın kendi verisi | menzil kenarları n=121 · OWTRAD kara ticaret hattı n=131 |
| `ne_10m_land.geojson` | 🟢 motorun GİRDİ maskesi | kara örtü ölçümünün tabanı |

## 🔴 `ölçülemedi` — aradım, gövdeyi alamadım (kalem AÇIK)
```
Rhoads Murphey, Ottoman Warfare 1500-1700 (UCL 1999)  alanın standart el kitabı
Van Creveld, Supplying War (1977)                     "beş menzil / 60 mil" kuralı
Engels, Alexander … Logistics (1978)                  ikmal yarıçapı hesabı
Boulding, Conflict and Defense (1962)                 LSG'nin KENDİ metni
Turchin, "A theory for formation of large empires"    nicel imparatorluk modeli
```
⚠️ Boulding'in **kavramı** birçok yerden doğrulandı ama **bir km sayısı
vermiyor** — modeli grafiktir, ölçek vermez. Bu bir erişim kusuru değil,
**kaynağın kendi doğası**; aşağıda öyle işleniyor.

## 🔴 `bulunamadı` — aradım, yok
```
Osmanlı kaza/sancak yarıçapı için YAYIMLANMIŞ km² ya da km sayısı.
· Fatma Aladağ, "Spatial Mapping of the Ottoman Cities and Administrative
  Divisions in the Early 16th Century", Spatial Humanities 2022,
  DOI 10.5281/zenodo.6684037 — CANLI, DOĞRU madde, gövdesi okundu,
  ve HİÇBİR SAYI VERMİYOR. Tam da bu soruyu soracak çalışma, sayıyı
  yayımlamamış.
· Klasik dönem TOPLAM kaza sayısı için de bir yayımlanmış rakam
  bulunamadı (Ayn Ali 1609 defteri eyalet bazında sayı veriyor,
  imparatorluk toplamı vermiyor).
```

## ⚪ `okumadım` — aramadım bile (dürüstlük kaydı)
```
von Thünen, Der isolierte Staat (1826)  — halka modelinin KENDİ metni
Luttwak, Grand Strategy of the Roman Empire (1976)
Bang & Bayly, Tributary Empires in Global History
```
📌 `§11`: *"«Bulunamadı» aradım-ama-yok demektir; ben aramadım bile."*
Bu üçünü **`bulunamadı` diye yazmıyorum**, çünkü öyle yazmak bir sonraki
oturumu aramaktan alıkoyar.

## 🔴 VE İKİ TDV TUZAĞI, bu turda ölçüldü
```
konak    200 · başlık "KONAK" · madde SİVİL MİMARİDE BÜYÜK KONUT
         ⇒ `§4②` "canlı slug, yanlış madde" — altıncı vaka
         yol konağı için müstakil madde YOK; bilgi `menzil--osmanli`de
merhale · menazil · mesafe-i-kasr · kaza--fikih · ulak--osmanli   hepsi 302
```

---

# ③ AMPİRİK ÇAPALAR — beş ölçüm, hepsi bu oturumda yapıldı

## Ⓐ Koridor ağı — koordinatörün ölçümü DOĞRULANDI, evreni genişletildi

`index.html`in bağladığı **altı** koridor dosyası `node` ile yüklendi
(regex yok — `§11`: *"veriyi kendi dilinin yorumlayıcısına ver"*), düğüm
konumları yamalarla kuruldu, kenarlar haversine ile ölçüldü.

```
              n     min   %25   ORTANCA  %75   %90    max
koordinatör  84     19    52     80      115   163     —
BU ÖLÇÜM    121    3,4    48,8   84,9    114,6 158,2  1388,5
```
⇒ Evren %44 büyüdü, **ortanca %6 oynadı.** Dağılım evrene karşı sağlam.

```
KORIDOR_KENAR (ana menzil)   n=57  ortanca 101,3  %90 182,9
HALKA2 (Avusturya cephesi)   n=10  ortanca  59,7  %90  91,7
H2B (İran/Kırım/Adriyatik)   n=53  ortanca  68,2  %90 116,8
```
⚠️ İki yapısal aykırı değer, **ölçüm değil eksik düğüm**: Şam→Mekke
1388,5 km (hac kolu, ara konaklar modellenmemiş) · İstanbul→Üsküdar
3,4 km (boğaz geçişi, bir menzil aralığı değil). Çıkarılınca ortanca
**değişmiyor.**
🔜 BORÇ (benim işim değil, kayda geçiyor): `hasan-celebi` · `hasankale` ·
`karasu` düğümleri **konumsuz**, 7 kenarı ölçülemez kılıyor.

🟢 **VE İKİNCİ, BAĞIMSIZ BİR AĞ:** `koridor_owtrad.js`
(OWTRAD tmcTRm1300, İnalcık 2000 haritası, 1300-1600):
```
KARA ticaret hattı (cd)  n=131  ortanca 103,5  %90 220,9
DENİZ hattı (sl)         n=43   ortanca 103,2  %90 344,8
```
⚠️ 1:8M taslak harita — ara düğümü az, kenarları **doğal olarak uzun**.
Bu yüzden 104'ü 85'ten "daha doğru" saymıyorum; **aynı mertebe** demek
yeterli.

## Ⓑ "SAAT" bir MESAFE birimidir — ve üç bağımsız yoldan ölçüldü

TDV'nin *"3-28 saat"*i saat→km çevrimi olmadan kullanılamaz. 1663 Uyvar
seferinin konak kütüğünden (CEU tezi, Appendix s.44-45) yedi ara ucun
modern koordinatlarıyla kalibre ettim:

```
Davutpaşa→Edirne  208,7 km / 39 sa = 5,35 km/sa
Edirne  →Filibe   158,2 / 35 = 4,52     Filibe →Sofya   132,4 / 29 = 4,56
Sofya   →Niş      135,1 / 31 = 4,36     Niş    →Belgrad 202,3 / 47 = 4,30
Belgrad →Ösek     160,5 / 30 = 5,35     Ösek   →Budun   217,7 / 47 = 4,63
────────────────────────────────────────────────────────────────
TOPLAM 1214,8 km / 258 saat = 4,71 km/saat (kuş uçuşu)
düz mesafe 1064,1 km ⇒ kırık hat dolambacı 1,14
```
🟢 Yedi bağımsız etap, hepsi **4,30-5,35** bandında — sapma ±%11.

```
1663 sefer kütüğü (n=7 etap)            4,71 km/saat   kuş uçuşu
atlasın ölçülmüş menzil kenarı (n=4)    5,12 km/saat   kuş uçuşu
koridor.js'in türetme varsayımı         4,25 km/saat   kuş uçuşu
TDV `fersah`: atın 1 SAATTE gittiği     6,23 km        YOL
```
⇒ **1 Osmanlı saati ≈ 4,3-5,4 km kuş uçuşu ≈ 6 km yol.** TDV'nin yol
rakamı ile benim kuş uçuşu rakamım arasındaki 1,32 oranı gerçek yolun
dolambacıdır — ve iki bağımsız kaynak birbirini **doğruluyor**, çünkü
farkları bir hata değil bir **geometri**.

## Ⓒ 🔴 KONAK ≠ MENZİL — aynı kelime, iki ayrı ölçek

```
KONAK   ordunun BİR GÜNLÜK yürüyüşü      1-8 saat   ORTANCA 4,0 sa = 18,8 km
        (1663 seferi, n=64 konak)         min 4,7 · %75 23,5 · max 37,7 km
MENZİL  ulağın istasyon aralığı          3-28 saat  ORTANCA ~18 sa = 85 km
        (TDV + koridor ağı, n=121)
BERÎD   Abbâsî posta istasyonu           2-4 fersah = 12-24 km   (TDV)
```
Oran **≈ 4,5** ve sebebi yapısal: ulak menzilde **at değiştirir** ve
sürer; ordu **yürür ve konaklar.** Abbâsî berîdi daha da sık, çünkü
azamî hız için kurulmuş.
📌 Bu ayrım korunmazsa aynı ağdan üç farklı sayı çıkar ve üçü de
"doğru" görünür.

## Ⓓ 🔴 KARA ÖRTÜ ÖLÇÜMÜ — tavan NEREDE bağlıyor

`ne_10m_land.geojson` (motorun **GİRDİ** maskesi; `motor_kara` bir
ÇIKTIdır, `§5`) üzerinde 0,5° ızgara, **61.565 kara hücresi**, her
hücreden en yakın yerleşime haversine, alan cos(lat) ağırlıklı.

```
                      DÜNYA KARASI          OSMANLI KUŞAĞI
TAVAN            tavanın ötesinde kalan    (25-50°K, 10°B-50°D)
100 km                %56,1                    %26,9
140 km                %36,4                    %15,6
200 km  ← BUGÜN       %18,1                    % 6,9
280 km                % 8,8                    % 2,4
420 km                % 2,9                    % 0,7
700 km                % 0,6                    % 0,0
```
En yakın yerleşime uzaklık: **dünya ortanca 117 km · Osmanlı kuşağı 59 km.**

🔴 **HÜKÜM: bugünkü 200 km tavanı Osmanlı çekirdeğinde neredeyse hiç
bağlamıyor (%6,9), dünyanın geri kalanında çok bağlıyor (%18,1).**
`TAVAN_KM` bugün bir *Osmanlı hükmetme yarıçapı* ayarı değil — **çevre
kıtaların boyanıp boyanmayacağı** ayarıdır.

Doğrulaması: 200 km'de **komşusuzluktan** boşluk açan **23 nokta** var ve
**hiçbiri Osmanlı dünyasında değil** (Rapa Nui 3549 km · Güney Georgia
1990 · Yap 1239 · Svalbard 786 · Grönland · Vila Boa de Goiás 639 ·
Çamdo 524 · Cartagena 466 · Palawan 432 …). Kademe kırılımı:
k1 5 · k2 1 · k3 5 · **k4 0** · k0 12.

⚠️ **YAKLAŞIM BEYANI:** bu ölçüm tavanı **izotrop disk** sayıyor. Motor
12 Ağustos 2026'dan beri **anizotrop ama ALAN KORUYAN**
(`uret_petek.py:1075`, *"boyanan alan DEĞİŞMESİN"*). ⇒ **TOPLAM alan**
için yaklaşım meşru, **yerel biçim** için değil. Ve 0,5° ızgara ada ve
dar kıyı şeritlerini eksik sayar; sayılar ±%1-2 oynayabilir.

## Ⓔ 🔴 YOĞUNLUK — ve raporun asıl bulgusu buradan çıktı

```
bölge                    kara km²    nokta   nokta başı km²   eşdeğer yarıçap
DÜNYA (pencere)        134.846.378    3805       35.439          106,2 km
Osmanlı kuşağı          10.694.857    1139        9.390           54,7 km
ANADOLU                    925.067     298        3.104           31,4 km
RUMELİ/BALKAN              952.003     286        3.329           32,6 km
Kuzey Amerika           21.178.190     475       44.586          119,1 km
Sahra altı Afrika       19.664.977     627       31.364           99,9 km
Avustralya/Okyanusya     9.556.548     183       52.222          128,9 km
GÜNEY AMERİKA           17.863.273     178      100.355          178,7 km
SİBİRYA                 13.267.645     124      106.997          184,5 km
```

🟢 **Anadolu 31,4 km · Rumeli 32,6 km — ve bir günlük yol 26-32 km.**
Atlasın Osmanlı çekirdeğindeki nokta yoğunluğu, **tarihî kaza ağının
yoğunluğuna zaten oturmuş.** Bu bir tasarım kararı değildi; ölçülünce
çıktı.

⚠️ Karşılaştırma için türetme (kaynak DEĞİL, duyarlılık denemesi —
klasik dönem toplam kaza sayısı için yayımlanmış rakam **bulunamadı**):
```
5,0 M km² gövde üzerinde   500 kaza →  10.000 km²/kaza → yarıçap 56,4 km
                          1000 kaza →   5.000 km²/kaza → yarıçap 39,9 km
                          1500 kaza →   3.333 km²/kaza → yarıçap 32,6 km
```

🔴 **Ve çevrede atlas 3-6 KAT SEYREK.** Güney Amerika 178,7 km ·
Sibirya 184,5 km — yani orada bir nokta, tarihî bir kazadan **otuz kat**
büyük bir alanı temsil etmek zorunda.

---

# ④ DÖRT EKSEN — ve dördü AYRI cevap veriyor

🔴 **Dördü tek sayıya indirilemez, ve indirilmemeli. Ama asıl bulgu şu:
dördü yalnız BÜYÜKLÜKÇE değil BİÇİMCE de ayrı** — biri mesafeyle
sürekli azalır, biri sert bir sınırda durur, biri takvimle bağlıdır,
biri taşıma maliyetiyle.

## ⑴ ASKERÎ — ve burada **iki ayrı yarıçap** var

### (a) Garnizonun yarıçapı — bir yerleşimin kendi askerî erimi
Bir kale ya da garnizon, çıkıp dönebildiği kadarına hükmeder.
```
1 konak gidiş                    18,8 km (ortanca) · 37,7 km (azamî konak)
gidiş + dönüş aynı gün           ~2 konak = 20-40 km
2-3 günlük akın ve dönüş         ~50-110 km
```
**DAYANAK:** 1663 sefer kütüğü (n=64 konak, birincil), TDV `menzil--osmanli`
(*"3 saatten 28 saate"*), TDV `fersah` (1 saat = 6,23 km yol).
**GÜVEN: YÜKSEK** — üç bağımsız kaynak, ölçülmüş kalibrasyon.

### (b) İmparatorluğun sefer yarıçapı — ve bu bir MESAFE değil TAKVİM sınırı
1663 kütüğünden ölçülen **net ilerleme: 1064 km / 121 gün = 8,79 km/gün.**
(Yürüyüş saati yalnız 258 — sürenin çoğu konaklama, ikmal, bekleme.)
Sefer mevsimi ~mart-ekim ≈ 240 gün. İstanbul'dan gidiş+dönüş:
```
Belgrad    810 km   184 gün   🟢 rahat — kuşatmaya ~2 ay kalır
BUDİN     1068 km   243 gün   🟡 mevsimin TAMAMI — savaşacak gün YOK
VİYANA    1275 km   290 gün   🔴 tek mevsimde İMKÂNSIZ
Kahire    1237 km   281 gün   🔴
Tebriz    1519 km   345 gün   🔴
Bağdat    1608 km   365 gün   🔴
Cezayir   2282 km   519 gün   🔴
Mekke     2411 km   548 gün   🔴
```
🟢 **Ve bu, tarihin kendisini yeniden üretiyor:** Belgrad güvenli üs
oldu, Budin operasyon sınırı oldu, Viyana iki kez kuşatıldı ve **hiç
alınmadı**, Mısır/Bağdat/Cezayir ise doğrudan değil **ayrı rejimlerle**
(ocaklık, sâlyâne, yarı özerklik) yönetildi.
⚠️ **SINIR:** 8,79 km/gün **tek bir seferden** (1663) türetildi ve 1663
yavaş bir seferdi. Bir hız değil bir **mertebe**dir; ±%30 oynarsa
Viyana yine sınırın dışında kalır, sonuç sağlamdır.
🔴 **Ve bu bir TAVAN_KM sayısı DEĞİLDİR** — bir yerleşimin peteği değil,
imparatorluğun sefer erimi. Motora girmez; ama `v:` (tâbi) katmanının
niçin var olduğunu açıklar.

### (c) Boulding'in eğimi — SAYI vermez, BİÇİM verir
Boulding (1962) *loss-of-strength gradient*: güç, üsten uzaklaştıkça
**sürekli** azalır. Model **grafiktir, ölçek vermez** — birçok yerden
kavramı doğrulandı, hiçbirinden bir km sayısı çıkmadı, ve gövdesi
**ölçülemedi**.
⇒ Bize verdiği şey bir sayı değil bir **fonksiyon biçimi**: askerî
hâkimiyet *sert bir sınırla* değil *bir eğimle* biter.

## ⑵ İDARÎ — ve burada literatür ŞAŞIRTICI DERECEDE KESİN

TDV `sefer--fikih`, birebir:
> *"Eski mesafe ölçüleri günümüz uzunluk ölçülerine çevrilince
> Hanefîler'in uzun seferin alt sınırı olarak takdir ettikleri 15
> fersahlık mesafe yaklaşık **83**, 18 fersahlık mesafe **99**, diğer üç
> mezhebin takdir ettiği 16 fersahlık mesafe **88 kilometreye** tekabül
> etmektedir."*
> *"Son dönem fıkıh âlimleri bir gün içinde yapılabilecek yolculuğu
> ortalama **altı saat** olarak takdir ettiklerinden…"*

Ve İslâm hukuku *"yakın"*ı da tanımlamış — `mesâfetü'l-advâ`:
> *"sabah erkenden çıkıldığında **akşam dönülebilecek** mesafeyi aşan
> bir yere gitmek üzere yola çıkma"*

⇒ **İdarî yarıçabın iki eşiği var ve ikisi de kaynaklı:**
```
GÜNLÜK ERİM   akşam dönülebilen  ·  ~1 günlük yol = 6 saat
              = 33-37 km yol  ·  26-32 km kuş uçuşu     ← kadılık ölçeği
ŞER'Î SINIR   3 günlük yol · 18 fersah
              = 80-100 km  ← bunun ötesi hukuken "BAŞKA YER"
```
**GÜVEN: YÜKSEK.** TDV birincil kaynaktır (`§4`), sayıyı **kendisi**
kilometreye çevirmiş, ve dört mezhebin dördü 83-99 km bandında.

🟢 **VE ATLASIN KENDİ VERİSİ BUNU DOĞRULUYOR:** Anadolu eşdeğer yarıçapı
**31,4 km**, Rumeli **32,6 km** — bir günlük yolun tam ortası. İki
bağımsız yol, aynı sayı.

### 🔴 Christaller'in idarî ilkesi — ve ASKERÎDEN AYRILDIĞI YER
Christaller (1933), k=7 idarî ilkesi için (üniversite ders neşrinden,
🟡 ikincil aktarım):
> *"law and administration in theory do not experience exponential
> decay with distance but remain fully enforced up to the boundaries of
> the administrative units in which they are applied"*

⇒ **İdarî hâkimiyet mesafeyle AZALMAZ; bir SINIRDA durur.** Bu,
Boulding'in askerî eğiminin tam tersidir.
📌 **Ve bu iki cümlenin çelişkisi Emre'nin sorusunun cevabının kendisidir:**
dört eksen yalnız *ne kadar uzağa* sorusuna farklı cevap vermiyor,
*nasıl biter* sorusuna da farklı cevap veriyor. Askerî **söner**, idarî
**kesilir**.
⇒ Motorun Voronoi + tavan mimarisi bir **kesme**dir, yani yapısı gereği
**İDARÎ** ekseni modelliyor — askerîyi değil. Bu bir kusur değil bir
tanımdır, ama yazılı olması gerekiyor.

### Christaller'in kademe dizisi
```
12 · 21 · 36 · 62 · 108 km     adım oranı 1,7321 = √3   (k=3 PAZAR ilkesi)
```
⚠️ Christaller'in **yayımlanmış Güney Almanya dizisi pazar (k=3)
hiyerarşisidir**, idarî (k=7) değil. İdarî ilke için oran √7 = **2,65**
olmalıydı. Christaller'in kendi ampirik tablosu bu ayrımı **yapmıyor**.
⇒ Kaynak burada bize bir sayı değil bir **çelişki** veriyor, ve
`§4`in dersi gereği çelişkiyi bildirmek taraf seçmekten değerlidir.

## ⑶ SİYASÎ (tâbiiyet) — askerîden GENİŞ, ve farkı ÖLÇTÜM

Atlasın kendi verisinden, tâbi (`v:`) noktaların en yakın doğrudan
(`d:`) noktaya uzaklığı:
```
1400   107 km      1550   120 km      1700   172 km
1450    20 km      1600    97 km      1800   704 km
1500    97 km      1650    97 km
```
⇒ Klasik dönemde tâbiiyet kuşağı doğrudan toprağın **~100-170 km**
ötesine uzanıyor — yani **bir ilâ iki menzil.**
⚠️ 1800'deki 704 km bir eğilim değil bir **bileşim değişimi**: Cezayir/
Tunus ocakları kümeye giriyor.
⚠️ Ve bu ölçüm **atlasın kendi verisinden** — yani bir doğrulama değil,
mevcut tasarımın **tarifi**. Bir kaynak DEĞİLDİR. Öyle kullanılmasın.

**Kaynak tarafı `ölçülemedi`:** Bang & Bayly *Tributary Empires* ve
Luttwak **okumadım**; Turchin'in nicel modeli **ölçülemedi**. ⇒ Bu eksen
raporun **en zayıf** ayağıdır ve öyle işaretleniyor.

## ⑷ EKONOMİK — 🔴 TEK SAYI DEĞİL, İKİ AYRI YARIÇAP

Öngörüm Ⓔ burada çürüdü: ekonomik eksen **ikiye ayrılıyor** ve ikisi
arasında **yirmi kat** var.

```
PAZAR ALANI (perakende)   Christaller'in en alt kademesi 12-21 km,
                          orta kademe 36 km · üst 62-108 km
                          → haftalık pazara gidip dönme mesafesi
                          🟢 ve bir günlük yolla ÇAKIŞIYOR (26-32 km)

DÖKME TİCARET (tahıl)     A. H. M. Jones: arabayla buğday 300-400 mil
                          (480-640 km) sonra fiyatı İKİYE KATLAR
                          🟡 ikincil aktarım
```

**Türetme (ALINTI DEĞİL — `§4`: türetilen sayı alıntıya yazılmaz):**
Edict'in arabalı navlunu 20 denarius / 1200 Roma libresi / Roma mili
= **0,0345 den/kg/km**. Buğday 100 den / *modius castrensis*. İkiye
katlanma mesafesi modius'un ağırlığına **çok** duyarlı:
```
modius  6,5 kg varsayımı → 446 km
modius 10,0 kg varsayımı → 290 km
modius 13,0 kg varsayımı → 223 km
```
⇒ **Yayımlanmış rakamı (480-640 km) kullan, türetmeyi yalnız
duyarlılığı göstermek için yaz.** Türetme, modius ağırlığı
tartışmalı olduğu için bir dayanak değildir.

---

# ⑤ 🔴 SU EKSENİ — raporun merkezinde, ve motorda HİÇ YOK

## Ⓐ Oran: dört bağımsız akademik tahmin, ve ELEŞTİRİSİ

Kara : nehir : deniz taşıma maliyeti (hepsi Diocletianus'un *Edictum de
Pretiis*'ine, 301, dayanıyor):
```
Duncan-Jones (1982)   1 : 4,9     : 56
Deman (1987)          1 : 5,8     : 39
Scheidel (2014)       1 : 5-10    : 52
De Soto (2019)        1 : 3,4-6,8 : 50,7   (Roma Hispanya'sı, ağ çözümlemesi)
```
Birim maliyetler: araba **0,035** · nehir aşağı **0,0034** · nehir yukarı
**0,0068** · deniz **0,00067** denarius/kg/km.
🔴 **Nehrin YÖNÜ iki kat fark ediyor** — yukarı akıntı, aşağının iki
katı. Bu, bir "nehir koridoru"nun **yönsüz** modellenemeyeceği demektir.

⚠️ **ELEŞTİRİSİ DE KAYDA GEÇİYOR** (ve bu bir zayıflık değil, kaynağın
kendi uyarısını okumaktır — `§4`): eleştirmenler bu oranların
**benzemeyen şeyleri karşılaştırdığını** söylüyor — gemiyle uzun mesafe
dökme taşıma ile arabayla yerel küçük ölçekli taşıma; ve kayıtlarda
görünmeyen maliyetleri (çiftlikten limana ilk taşıma, elleçleme,
depolama, yükleme, liman resimleri) dışarıda bıraktığını.
⇒ **Oran bir mertebedir, bir katsayı değil.**

## Ⓑ Öngörüm Ⓓ'nin yarısı çürüdü — ve çürüyen yarı öğretici
```
DENİZ  1:39-56    🟢 öngörüm 1:10-1:60 bandındaydı — TUTTU
NEHİR  1:3,4-10   🔴 öngörüm en az 1:10 diyordu — ÇÜRÜDÜ
```
⇒ **Nehir, denizden bir MERTEBE pahalıdır ve karaya denizden çok daha
yakındır.** *"Su ucuzdur"* diye tek kova kurmak yanlış olurdu: nehir
karadan 5 kat ucuz, deniz karadan 50 kat ucuz — **nehir ile deniz
arasındaki fark, nehir ile kara arasındakinden büyük.**

## Ⓒ Motorun bugünkü hâli — ve bunun sistematik sonucu
```
sürtünme = 1 + 0,005 × |∇z|        ← YALNIZ EĞİM
nehir  ❌ maliyet üretmiyor · ❌ koridor değil · ❌ geçit noktası yok
       ✅ yalnız (a) sınır yaslamada (b) çöl muafiyetinde
deniz  gövdeyi karaya kırpıyor (ADA KURALI), ama bir YOL olarak yok
```
🔴 **Sonuç: motor, su kıyısındaki her yerleşimin erimini SİSTEMATİK
OLARAK KÜÇÜK gösteriyor.** Deniz limanı için 50 kat, nehir iskelesi için
5 kat. Ve bu **yönlü bir hata**, gürültü değil — yani ne kadar nokta
eklenirse eklensin kendiliğinden düzelmez.

Ve ters yön de eksik: **nehri enine geçmek bedava.** Tarihen nehir en
güçlü engeldir ve şehirler tam o yüzden **geçitlerde** kurulur.
🟢 Atlasın kendi verisi bunun kanıtını taşıyor: `Budin ↔ Peşte` **1,57
km** ve `Anadolu Hisarı ↔ Rumeli Hisarı` **1,54 km** — ikisi de suyun
iki yakası, ikisi de ayrı kayıt, ikisi de `ikiz:` beyanıyla mükerrer
sayılmaktan muaf. **Veri suyu biliyor; motor bilmiyor.**

## Ⓓ ⇒ SU BİR TAVAN MESELESİ DEĞİL, BİR SÜRTÜNME MESELESİDİR
Tavanı büyütmek suyu modellemez — kıyıdaki peteği **karada da**
büyütür, ki bu yanlıştır. Doğru yer maliyet fonksiyonudur:
```
bugün      maliyet = km × (1 + 0,005 × |∇z|)
gereken    maliyet = km × (1 + 0,005×|∇z|) × su_katsayısı
           su_katsayısı:  deniz ~1/50 · nehir aşağı ~1/5 · nehir yukarı ~1/2,5
           ve nehri ENİNE geçmek: geçit noktası dışında YÜKSEK ceza
```
🔴 **Ama bu bir TAVAN işi değil, bir MOTOR işidir** ve bu raporun
yetkisi dışındadır. Buraya **dayanağıyla** kaydediliyor; kararı Emre ve
koordinatör verir.
⚠️ Ve `§11`in *"iki aletin arası"* dersi burada peşinen uyarıyor:
sürtünmeye su eklenirse **tavan da yeniden ölçülmelidir** — ikisi
birbirini iptal edebilir.

---

# ⑥ TESLİM — kademeli tavan tablosu, DAYANAĞIYLA

## Ⓐ LİTERATÜRÜN VERDİĞİ TABLO

> Bu tablo **kaynaklardan** çıkar. Motora ne yazılacağı ayrı bir sorudur
> ve Ⓑ'de ölçülüyor — çünkü ölçüm bu tabloyu **motorda çürüttü.**

| kademe | ne demek | LİTERATÜR yarıçapı | DAYANAK | güven |
|---|---|---|---|---|
| **k4** | kale · köy · palanka | **35-50 km** | 1 konak = 4 saat ortanca 18,8 km, azamî konak 37,7 km (1663 kütüğü, n=64); gidip dönebilme | 🟢 **yüksek** |
| **k3** | kaza merkezi (kadılık) | **80-100 km** | TDV `sefer--fikih`: *"15 fersah 83, 18 fersah 99, 16 fersah 88 km"* — dördü de aynı bantta. Bunun ötesi hukuken BAŞKA YER | 🟢 **yüksek** |
| **k2** | sancak merkezi | **140-160 km** (√3) <br> **210-240 km** (√7) | Christaller kademe oranı. Ampirik dizisi √3 (pazar); idarî ilke √7 der. **Kaynak kendiyle çelişiyor**, ikisi de yazıldı | 🟡 **orta** |
| **k1** | eyalet merkezi | **250-280 km** (√3) <br> **560-630 km** (√7) | aynı, bir kademe daha | 🟡 **orta** |
| **k0** | ⚠️ **KADEMESİZ** | — | 🔴 **BU BİR KADEME DEĞİL, EKSİK VERİDİR.** 1239 nokta, çoğu yabancı şehir. Literatürde karşılığı YOK | 🔴 **yok** |

🔴 **k0 TUZAĞI, ölçümle:** k0 noktalarının en yakın komşusu **ortanca
139 km** — bütün kademelerin **en seyreği**. Yani k0 hem *"kademesi
bilinmiyor"* hem de *"en boş coğrafyada"*. Ona düşük tavan vermek
Amerika'yı ve Sibirya'yı silmek, yüksek tavan vermek 1239 noktayı
imparatorluk merkezi saymak olur. **İkisi de yanlış** — çünkü soru
yanlış: k0 bir kademe değil, **doldurulmamış bir alandır.**

## Ⓑ 🔴 VE LİTERATÜRÜN TABLOSU MOTORDA ÇÜRÜDÜ — ölçtüm

Aday tabloları kara örtü ölçümüne soktum (61.565 kara hücresi):

```
tablo                              DÜNYA boş   OSMANLI KUŞAĞI boş
A  BUGÜN  düz 200                    %18,1          % 6,9
B  ESKİ   700/420/280/140/280        % 5,4          % 3,1
C  LİTERATÜR √3 · taban 90           %20,4          %14,1   🔴 +7,1 pp
D  LİTERATÜR √3 · k0=k2              %10,5          %10,5   🔴 +3,6 pp
E  LİTERATÜR √7 · taban 90           %11,8          %15,4   🔴 +8,5 pp
F  düz 280                           % 8,8          % 2,4
```

🔴 **Literatürden türetilen her tablo, Osmanlı çekirdeğini BUGÜNKÜNDEN
KÖTÜ yapıyor** (%6,9 → %14-15). Sebebi ölçüldü ve tek:

> **Atlasın nokta yoğunluğu, tarihî idarî ağın yoğunluğunun ALTINDA —
> Anadolu ve Rumeli HARİÇ.**
```
ANADOLU       eşdeğer yarıçap 31,4 km   ≈ tarihî kaza (33-40 km)  🟢 OTURMUŞ
RUMELİ                        32,6 km   ≈ tarihî kaza             🟢 OTURMUŞ
Osmanlı kuşağı bütünü         54,7 km   ~1,5 kat seyrek
Sahra altı Afrika             99,9 km   ~3 kat seyrek
Kuzey Amerika                119,1 km   ~3 kat
Güney Amerika                178,7 km   ~5 kat
Sibirya                      184,5 km   ~5 kat
```

## Ⓒ 🔴 ASIL BULGU — `TAVAN_KM` İKİ AYRI İŞ YAPIYOR VE İKİSİ TERS ÇEKİYOR

```
İŞ ①  "bir yerleşim ne kadar toprağa hükmeder"     ← EMRE'NİN SORDUĞU
      cevabı LİTERATÜRDE:  k4 ~40 · k3 ~90 · k2 ~150 · k1 ~270 km

İŞ ②  "seyrek bir nokta kümesinden ne kadar ARA DEĞER ÜRETMEYE
      razıyız"                                     ← MOTORUN YAPTIĞI
      cevabı literatürde YOK; bir TERCİHTİR ve Emre onu zaten verdi:
      "devasa boşluklar olacaksa olsun"
```
⇒ **Literatür yalnız ①'i cevaplar.** ②'yi cevaplayan şey nokta
yoğunluğudur, ve bugün ikisi yalnız **Anadolu ile Rumeli'de** çakışıyor.
📌 Bu, `§11`in *"kusur ne tavandaydı ne yetim-yüz mantığında — İKİSİNİN
ARASINDAYDI"* dersinin bir kademe önü: burada tek bir sabit **iki ayrı
soruya birden** cevap vermek zorunda bırakılmış.

## Ⓓ ÖNERİM — ve niçin literatürün kendi sayısını ÖNERMİYORUM

```
🟢 BUGÜN İÇİN      düz 280 km   ya da   ESKİ kademeli tablo
                   (F: dünya %8,8 · Osmanlı %2,4 — ikisi de bugünkünden İYİ)
🔴 LİTERATÜR TABLOSU (C/D/E) BUGÜN UYGULANMAZ — çürüdü, ölçüldü
🟢 HEDEF           yoğunluk oturdukça literatür değerlerine SIKILAŞTIR
```

**Ve sıkılaştırmanın ÖLÇÜLEBİLİR tetiği (öneri):** bir bölgenin eşdeğer
yarıçapı **40 km'nin altına** indiğinde, o bölge literatür tavanını
kaldırabilir — çünkü ancak o zaman tavan İŞ ①'i yapıyor olur, İŞ ②'yi
değil. Bugün bu şartı **yalnız Anadolu (31,4) ve Rumeli (32,6)**
sağlıyor.
⚠️ Motor bugün tavanı **bölgeye göre** değil kademeye göre okuyor
(`uret_petek.py:1055`). Bölgesel tavan yeni bir mekanizmadır ve bu
raporun yetkisi dışındadır — **öneri olarak** kaydediliyor.

🔴 **VE BİR UYARI, `§11` gereği:** yukarıdaki 280 önerisi bir
**literatür sonucu değil**, bir ölçüm sonucudur. Bir sonraki oturum onu
*"kaynaklı"* sanmasın: **kaynaklı olan k3=90'dır ve o çürüdü.**

---

# ⑦ ŞARTNAMENİN DÖRT SORUSU — tek tek

## ⑴ ASKERÎ ile SİYASÎ tavan AYRI olmalı mı? (`d:` ve `v:`)

🔴 **YAPISAL OLARAK HAYIR — ve sebebi kodda.** `uret_petek.py:1055`:
```python
R = TAVAN_KM.get(y.get("k") or 0, ...)
```
Tavan **noktanın `k` alanına** bağlı, sahiplik dönemine (`d:`/`v:`)
değil. Bir `d:`/`v:` ayrımı **yeni bir mekanizma** ister, bir sayı
değişikliği değil.

🟢 **VE GEREKMİYOR, çünkü mekanizma zaten var:** tâbi bölgenin **kendi
noktaları** var ve onlar kendi peteklerini üretiyor. Ölçtüm: tâbi
noktalar doğrudan noktalardan **ortanca 97-172 km** ötede duruyor
(1500-1700). Yani siyasî erimin genişliği **tavandan değil, noktaların
konumundan** geliyor — ki doğrusu da budur.
⇒ Ayrı bir siyasî tavan, **var olan doğru davranışı ikinci kez** modeller.

## ⑵ Tavan HAM KM'de mi, MALİYET biriminde mi olmalı?

🔴 **MALİYET — ve bu, raporun en KESİN sonucu. Kaynakların hiçbiri
mesafeyi km ile ölçmüyor.**
```
TDV `menzil--osmanli`   "üç SAATTEN yirmi sekiz SAATE kadar"
TDV `fersah`            "atın normal yürüyüşüyle 1 SAATTE gittiği mesafe"
TDV `sefer--fikih`      "bir gün içinde yapılabilecek yolculuğu ortalama
                         altı SAAT olarak takdir"
1663 sefer kütüğü       her konak SAATİYLE kayıtlı — km HİÇ YOK
Christaller             "range … calculated in terms of TIME and COST"
Boulding                güç kaybı = MESAFENİN MALİYETİ
Diocletianus Edictum    navlun = ağırlık × mesafe × MOD (kara/nehir/deniz)
```
🟢 **Yedi kaynağın yedisi de zamanı/maliyeti ölçüyor; hiçbiri ham km
ölçmüyor.** Osmanlı bir yeri *"85 km ötede"* diye tarif etmiyor,
*"on sekiz saat ötede"* diye tarif ediyor.

Ve TDV bunu **açıkça** söylüyor:
> *"Konaklama noktaları birbirine eşit uzaklıklarda olmayıp her bir
> menzil **coğrafî şartlara** … göre değişik mesafelerde kurulmuştu."*

⇒ Bugünkü hâl **kendi içinde tutarsız**: motor `km × sürtünme` ile
yürüyor ama tavan **ham km**. Dağdaki kale ile ovadaki şehir aynı 200
km'ye uzanıyor — oysa aynı motorun sürtünme fonksiyonu ikisinin farklı
olduğunu **zaten söylüyor.**
🟢 **ÖNERİ:** tavan `TAVAN_SAAT` olsun ve maliyet biriminde uygulansın.
Çeviri katsayısı bu oturumda **ölçüldü ve kaynaklandı**: `1 saat ≈ 4,7
km kuş uçuşu ≈ 6,2 km yol` (üç bağımsız yol, ±%11).
```
k4  ~8 saat      k3  ~18 saat (şer'î 3 günlük yol)
k2  ~31 saat     k1  ~54 saat        (√3 ile)
```
⚠️ **Bu bir mekanizma değişikliğidir**, bir sayı değişikliği değil — ve
`§11`in *"iki aletin arası"* dersi gereği, uygulanırsa tavanın kestiği
alan **yeniden ölçülmelidir**; bugünkü hiçbir sayı taşınamaz.

## ⑶ Çöl için ayrı tavan gerekli mi? (`COL_TAVAN_KM = 300`)

🟡 **AYRI TAVAN DEĞİL, AYRI SÜRTÜNME.** Çöl özel bir kademe değil,
**yüksek maliyetli bir arazi** — ⑵'nin cevabı bunu zaten kapsar: maliyet
birimine geçilirse çöl kendiliğinden daralır ve ayrı bir sabit gerekmez.
📌 `COL_TAVAN_KM`in bugün var olması, tavanın ham km olmasının
**semptomudur**: birim yanlış olduğu için her arazi cinsine ayrı bir
yama gerekiyor. Bir sonraki arazi (bataklık? yüksek dağ? tundra?) yeni
bir sabit isteyecek.
⚠️ **ÖLÇMEDİM:** `COL_TAVAN_KM`in bugün kaç peteği bağladığını ölçmedim.
Bu bir tahmin değil, bir **eksik**.

## ⑷ Su ekseni tavanı nasıl değiştirir?

🔴 **DEĞİŞTİRMEZ — ve değiştirmemeli.** Ayrıntı `§⑤Ⓓ`de. Özet: tavanı
büyütmek kıyıdaki peteği **karada da** büyütür, ki yanlıştır. Su bir
**sürtünme** meselesidir:
```
deniz        ~1/50 maliyet    (Duncan-Jones 56 · Deman 39 · Scheidel 52)
nehir aşağı  ~1/5             (4,9 · 5,8 · 5-10 · 3,4-6,8)
nehir yukarı ~1/2,5           (aşağının İKİ KATI — yön önemli)
nehri ENİNE  geçit dışında YÜKSEK ceza — bugün BEDAVA
```
🔴 Ve bu **yönlü bir hata**: motor su kıyısındaki her yerleşimin erimini
sistematik olarak küçük gösteriyor, ve nokta eklemekle düzelmez.

---

# ⑧ AÇIK KALANLAR — bir sonraki oturuma dürüst devir

```
🔴 ölçülemedi   Murphey · Van Creveld · Engels · Boulding · Turchin
                — beşinin de gövdesi alınamadı. "Yok" DEĞİL, "alamadım".
🔴 bulunamadı   Osmanlı kaza/sancak yarıçapı için YAYIMLANMIŞ km/km²;
                klasik dönem TOPLAM kaza sayısı
⚪ okumadım     von Thünen · Luttwak · Bang & Bayly
⚠️ ölçmedim     COL_TAVAN_KM'in bugün kaç peteği bağladığı
⚠️ ölçmedim     tavanı MALİYET birimine çevirmenin kestiği alan
⚠️ kaba         kara örtü ölçümü 0,5° ızgara (ada/kıyı eksik, ±%1-2)
⚠️ yaklaşım     tavan izotrop disk sayıldı; motor ANİZOTROP ama ALAN
                KORUYAN ⇒ toplam alan için meşru, yerel biçim için DEĞİL
⚠️ ben seçtim   "Osmanlı kuşağı" kutusu (25-50°K, 10°B-50°D) bir vekildir,
                bir kaynaktan alınmadı
🔴 kullanılmadı `m:` alanı — ölçtüm (ortanca 131 km · %90 387 · max 1084)
                ve idarî yarıçap delili OLARAK KULLANILAMAZ. `§3`ün
                "m: yanlış eksende" teşhisini sayıyla doğruluyor.
                Kimse benden böyle bir sayı devralmasın.
🔜 borç         koridor düğümleri `hasan-celebi` · `hasankale` · `karasu`
                KONUMSUZ — 7 kenarı ölçülemez kılıyor
```

---

# ⑨ TEK CÜMLEYLE

> **Bir yerleşimin hükmettiği alanın kaynaklı cevabı vardır ve
> şaşırtıcı derecede keskindir — kaza için 80-100 km, bir günlük yol
> için 30 km, ve hepsi KİLOMETREYLE DEĞİL SAATLE ölçülmüştür. Ama
> motordaki `TAVAN_KM` bu soruya cevap vermiyor: o, seyrek bir nokta
> kümesinden ne kadar ara değer üreteceğimizi söyleyen bir sayı. İkisi
> yalnız Anadolu ve Rumeli'de çakışıyor — ve tam orada, kimse
> planlamadan, atlasın yoğunluğu tarihî kaza ağının yoğunluğuna
> oturmuş.**
