# BULGU — KUZEY AMERİKA · DUNYA-KAMERIKA-0903

**Oturum:** DUNYA-KAMERIKA-0903 · **Koordinatör:** 1.MURAT
**Tarih:** 3 Eylül 2026 · **Kutu:** 15-72K / 170B-52B
**Tur:** ARAŞTIRMA — `data/` altına **yazılmadı** (koşu canlıydı, PID 1268)
**Oturum kimliği:** `local_d7327e89-cf33-4ab3-a1f8-f09ea28be814`

---

## 0. TESLİM — tek satırda

```
2351 → 149     (1° ızgara · %84,6 → %5,4)     KAPANAN 2202 hücre
 575 →  19     (2° ızgara · %83,1 → %2,7)     KAPANAN  556 hücre
377 aday · ön sınav KIRMIZI 0 · kara sınavı KIRMIZI 0
kalan 149'un 143'ü Arktik/Subarktik çorak · 3'ü kutu dışı yerleşimle kapanır
```

**Çıktı dosyaları** (hepsi bu klasörde):
| dosya | ne |
|---|---|
| `ADAY-KAMERIKA-0903.json` | **377 aday**, makine okunur — yazım turunun girdisi |
| `KALAN-KAMERIKA-0903.json` | kapanmayan 149 hücre, koordinatıyla |
| `ARAC-KAMERIKA-0903-olc.py` · `-dene.py` · `-kara-sina.py` · `-birlestir.py` | ölçüm aletleri, koşulabilir (proje kökünden) |

---

## 1. TABAN — devraldığımı ölçtüm, TUTTU

Şartname `692 kara · 575 AÇIK · %83,1` diyordu. Kendi aletimle
(`ne_10m_land.geojson` + `TAVAN 200 km`, `_dunya_bosluk.py` ile aynı yöntem)
ölçtüm:

```
692 kara hücresi · 575 AÇIK · %83,1     ← ÜÇ SAYININ ÜÇÜ DE BİREBİR
kutumdaki bağlı nokta: 98
en uzak hücre: 2431 km @ 66,0K 91,0B — en yakın noktası QUEBEC
```

📌 Devraldığım öncülü doğrulamadan üstüne inşa etmedim (`§7.1 ⑦`).

---

## 2. 🔴 BULGU 1 — KÜMELEME: bu bir tamamlama değil, KITA KURMA işi

575 açık hücrenin dağılımına bakınca iş tarifi değişti:

```
KÜME 1   568 hücre   30-70K / 167B-53B      ← TEK PARÇA
KÜME 2-6   7 hücre   Tamaulipas 2 · Florida 2 · Sonora 1 · Panhandle 1 · Grönland 1
```

⇒ Meksika ve Karayip kuşağı doluyken **kıtanın kuzeyinin tamamı** —
Kanada · Alaska · ABD'nin içi ve batısı · Grönland'ın batı kıyısı — **tek
parça boşluktu.** 98 noktanın çoğu 15-35K bandında toplanmıştı.

Bu, "eksikleri tamamla" değil, **"bir kıtanın yerleşim ağını baştan kur"**
işidir; parti büyüklüğünü (377) belirleyen şey budur.

---

## 3. 🔴🔴 BULGU 2 — 2° IZGARA GERÇEĞİ SAKLIYOR (kendi raporumu düzelttim)

Kapanmayı önce 2° ızgarayla ölçtüm ve koordinatöre **%2,9** diye
bildirdim (M-2371). Sonra 1° ile koştum:

```
                  kara     ÖNCE açık        SONRA açık
2° ızgara          692     575  %83,1        19   %2,7
1° ızgara         2780    2351  %84,6       149   %5,4
                          ~aynı            İKİ KAT
```

**TABAN neredeyse aynı** (%83,1 ↔ %84,6) — bu, iki aletin aynı şeyi
ölçtüğünün kanıtı. Ama **KALAN iki kat**, çünkü 2° ızgara her ikinci
dereceyi örnekler ve **aralarındaki boşluğu hiç görmez.** Kapanma
ilerledikçe boşluk incelir ve incelen boşluğu kaba ızgara kaçırır.

⇒ **Izgara, tabanı ölçerken masum; KALANI ölçerken değil.**
📌 AFRIKA aynı farkı %0,3 ölçtü, ben %2,7 ölçtüm — **aynı alet, iki
kutuda dokuz kat farklı hata.** Sebep aletin değil coğrafyanın: Afrika'nın
boşluğu kütlesel, Kuzey Amerika'nınki ince ve dağınık.

🟢 **ÖNERİ (koordinatöre M-2374 ile gitti):** programın **bitiş ölçütü 1°**
olsun; 2° yalnız kaba tarama ve bölgeler arası kıyas için.

⚠️ Düzeltmeyi işi bitirince değil, **ölçtüğüm anda** bildirdim — çünkü
koordinatör benim %2,9'uma göre başka oturumlara sıra kuruyordu.

---

## 4. ADAY LİSTESİ — 377 kayıt, altı parti

| parti | n | hedef |
|---|---|---|
| 1 | 181 | Rus Amerikası · HBC/NWC ağı · Yeni Fransa · Arktik İnuit · ABD içi/batısı |
| 2 | 81 | 1. partinin bıraktığı 33 kümenin hedefleri |
| 3 | 56 | Boreal orman · Barren Grounds kenarı · Büyük Havza · Yayla |
| 4 | 11 | 2°'de kalan son adresli kümeler (Bella Coola · Fond du Lac · Caniapiscau…) |
| 5 | 26 | 1° ızgaranın açtığı yeni kümeler |
| 6 | 12 | son tur — Old Crow · Vincennes · Occaneechi · Tukudeka… |
| *(şerit)* | *10* | *15-25K bandı — **AYRI TUTULDU**, bkz. §7* |

### Kaynak kütükleri

| n | kütük |
|---|---|
| 138 | **Smithsonian, Handbook of North American Indians** (c.5 Arctic · 6 Subarctic · 7 NW Coast · 8 California · 9-10 Southwest · 11 Great Basin · 12 Plateau · 13 Plains · 14 Southeast · 15 Northeast) |
| 86 | **Historical Atlas of Canada** (University of Toronto Press) |
| 21 | **Dictionary of Canadian Biography** (Toronto / Laval) |
| 19 | **Weber, The Spanish Frontier in North America** (Yale UP) · *The Mexican Frontier 1821-1846* (UNM Press) |
| 12 | **Black, Russians in Alaska** (University of Alaska Press) |
| 10 | **Cambridge History of Latin America** (CUP) — yalnız şerit |
| 9 | Naske & Slotnick, *Alaska: A History* |
| 5 | Usner (UNC Press) · Trigger, *The Children of Aataentsic* (McGill-Queen's UP) |
| 3 | Steward, *BAE Bulletin 120* · Gubser, *The Nunamiut Eskimos* (Yale UP) · Birket-Smith, *The Caribou Eskimos* |
| 1 | Gulløv (ed.), *Grønlands forhistorie* |

Hepsi `§4`ün **🟢 KABUL** kümesinden: üniversite yayını · alanın standart
el kitabı · birincil kaynak neşri. **🔴 KULLANILMAZ** kümesinden (forum ·
blog · içerik çiftliği · kaynaksız derleme) hiçbir şey yok.

TDV bu coğrafyayı **kapsamıyor** — `§4`ün *"TDV'nin kapsamadığı
coğrafyalar için standart akademik referans yeterlidir"* dalı. Şartı da
yerine getirildi: her kaydın `kaynak_reg` alanı **dolu**, hiçbiri boş
bırakılmadı.

### 🔴 ÖLÇMEDİĞİMİ `ölçmedim` DİYE YAZIYORUM

> Bu kütükler alanın standart akademik referanslarıdır ve kayıtlar
> onlardan gelmektedir. **Ama 377 künyenin her birini bu oturumda tek tek
> çekip doğrulamadım.** Yaptığım şey, alanın standart literatüründen bir
> aday kümesi kurmak ve onu **ölçülebilir** hâle getirmektir.
>
> ⇒ **Yazım turu her kaydın kuruluş gününü ve koordinatını, adı geçen
> cilde bakarak teyit etmelidir.** Bu rapor bir aday listesidir, bir
> doğrulama tutanağı değildir.

📌 `§11`: *"ölçülmemiş her cümle açıkça işaretlenir ya da yazılmaz."*
Bu damga olmadan liste, ölçülmüş sanılırdı — yanındaki 2202'lik kapanma
sayısı **kendi güvenilirliğini ona ödünç verirdi.**

---

## 5. ÜÇ SINAV — hepsi KIRMIZI 0

```
① 3 KM   bağlı evrende (2731 nokta)              0
         adayların KENDİ içinde (377×377)        0
② KUTU   15-72K / 170B-52B dışına taşan          0
③ AD     bağlı evrenle çakışan ad                0
         adaylar arasında mükerrer ad            0
```

### 🟢 VE DÖRDÜNCÜ BİR SINAV YAZDIM — ve gerçek bir hata buldu

Üç sınav şartnamede yazılıydı. Dördüncüsünü kalan hücreler önerdi:
1° ızgarada `54,5K 164,5B` hücresi **395 km** uzaklıkla açık kalmıştı —
oysa oraya **Unalaska** yazmıştım. Bir aday doğru yazıldığı hâlde hücresini
kapatmıyorsa **koordinatı yanlıştır.**

⇒ `ARAC-KAMERIKA-0903-kara-sina.py`: her aday `ne_10m_land` maskesinin
üstünde mi?

```
🔴 Unalaska (Iliuliuk)   57,870B → maskeye 210,4 km   DENİZİN ORTASINDA
   doğrusu 53,870        (parmak kayması: 3 → 7)
   377 adayın KALANI     hepsi ≤ 7,4 km — kıyı/ada, maske çözünürlüğü
```

📌 **İki bağımsız işaret aynı hatayı gösterdi:** kapanmayan bir hücre ve
kara maskesi. Tek başına ikisi de zayıftı; birlikte kesindi.
📌 Ve ders `C13`ün üçüncü ayağı: bir denetim yazarken **hangi kusur
sınıfını hedeflediğini** de sormak gerekiyor. Üç sınav "mükerrer mi ·
kutuda mı · adı çakışıyor mu" diye soruyordu; **"gerçekten orada mı"**
diye soran yoktu — ve gerçekleşmiş kusur tam oradaydı.

⇒ **`_baglama_onsinav.py`ye bir kara sınavı eklenmesini öneriyorum.**

---

## 6. KALAN 149 HÜCRE — cinsi ve gerekçesi

```
COĞRAFYA                                   hücre   ÖNERİLEN CİNS
────────────────────────────────────────────────────────────────
Arktik çoraklar                              109   devletsiz
  Baffin içi + Melville + Boothia    45
  Keewatin Barren Grounds            25
  Contwoyto-Point Lake çorakları      9
  Victoria Adası içi                  7
  Boothia / Prince of Wales           7
  ötekiler (Banks · NWT · Keewatin)  16
Quebec-Labrador iç platosu                    28   devletsiz
  Ungava platosu                     16
  Labrador Çukuru (Manicouagan)      10
  ötekiler                            2
Mackenzie Dağları                              4   devletsiz
Kuzey Saskatchewan Kalkanı                     4   devletsiz
Wyoming Kızıl Çöl                              1   devletsiz
Batı Grönland                                  3   🔴 KUTU DIŞI — bkz. aşağı
────────────────────────────────────────────────────────────────
TOPLAM                                       149
```

### Gerekçe — ve bunun bir ÖNERİ olduğu

143 hücre için önerim **`neden:"devletsiz"`**, çünkü kaynak **susmuyor**:
bu iç bölgeleri, kalıcı yerleşimi olmayan, **devletsiz** avcı bantlarının
mevsimlik avlağı olarak açıkça tarif ediyor — Karayer İnuit · Denesuline ·
Innu/Naskapi · Bakır İnuit. Baffin'in içi buz kalkanıdır; Keewatin ağaç
sınırının kuzeyindeki tundradır.

⚠️ **AMA BU BİR ÖNERİ, ÖLÇÜM DEĞİL.** `devletsiz` ile `veri-yok`u ayıran
sınav **kaynağın davranışıdır** (*konuşuyor mu, susuyor mu*), ve ben o
ciltleri **hücre hücre açmadım.** Yazım turu her hücre için adı geçen
cildi teyit etmeli. Yanlış damga pahalıdır: `devletsiz` bir hücreye bir
daha **bakılmaz.**

🟢 Ve bu tam olarak Emre'nin hükmünün tarif ettiği yerdir:

> **"EĞER YERLEŞİM VAR İSE NOKTA KONUR. YOK İSE UYDURACAK HALİMİZ YOK.
> DEVASA BOŞLUKLAR OLACAKSA OLSUN."**

149 hücrenin 143'ü **olmasında bir kusur bulunmayan** boşluktur.
Kapatmak için oraya nokta yazmak, kuralın **ihlali** olurdu.

### 🔴 Batı Grönland'ın 3 hücresi — kutunun kendi kusuru

```
71,5K 55,5-54,5B (2 hücre) · 71,5K 52,5B (1 hücre)
kapatacak yerleşim: UPERNAVIK (1772) — 72,79K
kutumun kuzey sınırı: 72,0K   ⇒ yerleşim kutunun 0,79° DIŞINDA
```

Bu üçü **çorak değil**; kapatacak nokta var ama **benim kutumun dışında.**
Bu bir *`devletsiz`* değil, bir **kutu sınırı kusurudur** — kayıt olarak
bırakıyorum, cins damgası **vurulmamalıdır.**

---

## 7. 🔴 BULGU 3 — KUTU ÖRTÜŞMESİ (15-25K şeridi)

1° ızgara, 2°'nin hiç göstermediği bir şeyi açtı: kutumun **güney
şeridinde** gerçek boşluklar var —

```
Honduras / Moskito kıyısı   5 hücre · 597 km   ← kutumun EN BÜYÜK kalan boşluğuydu
Oaxaca kıstağı · Guerrero · Belize · Huasteca · orta Küba
```

Ama benim kutum **15-72K**, DALGA 2'nin *Orta Amerika+Karayip* kutusu ise
**7-25K / 118B-59B** ⇒ **15-25K / 118B-59B şeridi iki kutuya birden ait.**

Şu an o kutu kimseye verilmediği için bu bir **çakışma değil**, ama bir
**boşluk riski**: ikimiz de *"öteki bakar"* diye atlayabiliriz.

🟢 **Yaptığım:** şeridin 10 adayını (Trujillo · Río Tinto · Omoa · Belize
Town · Tehuantepec · Acapulco · Chilpancingo · Pánuco · Sancti Spíritus ·
Santa Clara) **ayrı bir dosyada** tuttum ve `ADAY-KAMERIKA-0903.json`
içinde `"serit_15_25K": true` alanıyla **damgaladım.** Koordinatör hangi
kararı verirse versin (bana ver · Orta Amerika'ya bırak · böl) liste
**tek `if` ile ayrılabilir.**

📌 Ve bir mükerrer önlendi: `Puerto Príncipe (Camagüey)` yazacaktım —
atlasta **`Camagüey bölgesi (Taino)` olarak zaten vardı, aynı koordinatta.**
3 km sınavı yakalamadan önce elle düştü.

---

## 8. 🔴 BULGU 4 — "hiçbir hücre kapatmayan" 60 aday ELENMEMELİ

Adayların 60'ı (Halifax · Toronto · Baltimore · Los Ángeles · Zuni ·
St. Louis · Kaskaskia · Pecos Pueblo…) **hiçbir açık hücreyi
kapatmıyor** — çünkü zaten kapalı bölgelerdeler.

⚠️ **Bu onları gereksiz yapmaz, ve eleyen bir sonraki oturum hata eder.**

```
KAPSAMA ölçütüne katkısı        0     (200 km tavanının içindeler)
HARİTA DOĞRULUĞUNA katkısı      0 DEĞİL
```

`§2` emilmesi 200 km'nin **altında da** çalışır: Halifax yazılmazsa Nova
Scotia'yı **Port Royal'in sahibi** boyar, Los Ángeles yazılmazsa güney
Kaliforniya'yı **San Diego'nunki.** Ölçüt bunu görmez, **kullanıcı görür.**

📌 Bir ölçütün *"katkısı sıfır"* demesi, *"değeri sıfır"* demek değildir.
Ölçüt kapsamayı ölçüyor, **doğruluğu değil.**

---

## 9. BİTİŞ ÖLÇÜTÜNE GÖRE DURUM

| şart | durum |
|---|---|
| ① açık hücre önce/sonra ölçüldü | 🟢 iki ızgarada da, sayıyla |
| ② her açık hücre: nokta ya da cinsi yazılı beyan | 🟡 **nokta tarafı hazır (377), beyan tarafı ÖNERİ** — §6 |
| ③ her kaydın `kaynak:` alanı dolu | 🟢 377/377 · ama **tek tek doğrulanmadı** — §4 damgası |
| ④ her `s:` kimliği `devletler.js`te var ve ömrü tutuyor | 🔴 **ÖLÇTÜM — GEÇMİYOR.** `kanada` künyesi YOK, kuzey/batı yerli kimliklerinin neredeyse hiçbiri YOK. Bu partinin en ağır bulgusu, aşağı bak |
| ⑤ `_baglama_onsinav.py` KIRMIZI 0 | 🟡 kendi eşdeğer sınavımda 0; **asıl alet `.js` ister, ben `.js` yazmadım** |

### 🔴 ④ SONRADAN ÖLÇTÜM — ve bu partinin EN AĞIR BULGUSU çıktı

Raporun ilk hâlinde bu satır *"ölçmedim, borçtur"* diyordu. Sonra ölçtüm,
ve iş bir borç değil bir **kapı** çıktı.

#### Önce kendi hatam — ve `§4`ün yazım ekseni beni ısırdı

İlk hâlde *"`İrokua` künyesi var"* diye **yazmıştım.** `devletler.js`te
`irok` diye aradım, **hiçbir şey bulamadım**, ve *"künye yok"* diye hüküm
verecektim. Doğru yol veriden sormaktı:

```
aradığım      irok · iroq          → 0 sonuç
gerçek `id:`  haudenosaunee        → VAR, ve Cayuga · Mohawk · Oneida ·
                                     Onondaga · Seneca ZATEN onu kullanıyor
```

📌 `§4`ün *"kendi transliterasyonunu değil, gerçek `id:`yi kullan"*
kuralının bu partideki vakası — ve **hükmü aday listesinden değil,
noktaların kendi `s:` alanından okuyunca** çıktı.

#### Ölçüm: kutumdaki 98 noktanın kullandığı kimlikler

```
🟢 VAR ve KULLANILIYOR
yeni-ispanya 53 · meksika 49 · ispanya 43 · abd 36 · ingiltere 23 ·
aztek-imparatorlugu 9 · maya-sehir-devletleri 9 · nahua-sehir-devletleri 7 ·
fransa 7 · haudenosaunee 5 · kuba-cumhuriyeti 4 · dominik-cumhuriyeti 4 ·
purepecha-imparatorlugu 3 · pueblo-bagimsizligi 3 · ingiliz-kuzey-amerika 3 ·
hollanda 2 · zapotek-krallik 2 · cahokia · powhatan · natchez ·
creek-konfederasyonu · cherokee · choctaw · komanci · apaci-ovalar ·
teksas-cumhuriyeti · hawaii-kralligi · rusya
```

#### 🔴🔴 VE İKİ DELİK — 377 aday bunlar kapanmadan YAZILAMAZ

```
① `kanada` KÜNYESİ YOK.
   441 künyenin hiçbirinde 'kanad'/'canad' geçmiyor. Kutum 1867-1923
   arası Kanada ile DOLU (Regina · Calgary · Battleford · Fort Macleod ·
   Whitehorse · Dawson · Prince Albert · NWMP hattının tamamı) ve
   boyayacak kimlik YOK.
   ⇒ Var olan `ingiliz-kuzey-amerika` 1867'de bitmeli, `kanada`
     başlamalı — ve o gün (1867-07-01) `Değişmez 2` gereği MADDE ister.

② YERLİ KİMLİKLERİN NEREDEYSE HİÇBİRİ YOK.
   VAR olanlar Doğu ve Güney'e ait: haudenosaunee · powhatan · cherokee ·
   choctaw · creek-konfederasyonu · natchez · cahokia · pueblo-bagimsizligi ·
   apaci-ovalar · komanci.
   YOK olanlar benim kutumun KUZEYİ ve BATISI — ve adaylarımın çoğu orada:
     İnuit (hiç: inuit · inupiat · yupik · nunavik ARANDI, 0)
     Dene/Atabask · Kri · Ojibwe · Innu/Naskapi · Beothuk · Mikmak ·
     Maliseet · Abenaki · Métis · Tlingit · Hayda · Tsimşiyan · Nuxalk ·
     Salish · Nez Perce · Klamath · Payut · Şoşoni · Ute · Navaho ·
     Mandan · Hidatsa · Pavni · Karga · Wiçita · Lakota/Dakota · Kalusa
```

⚠️ **Ve bu `§8`in doğrudan ihlali olurdu:** *"`s:` içindeki devlet kimliği
`BOYALAR` sözlüğünde tanımlı olmalı; yoksa bölge BOYANMAZ."* Kimliksiz
yazılan 377 nokta, **peteği üretir ama hiçbirini boyamaz** — yani boşluk
kapanmış GÖRÜNÜR, harita aynı kalır.

#### Karar bekleyen üç soru — ve ölçülmüş cevap adayları

```
① HBC bir devlet mi?    Rupert's Land 1670-1870 HBC imtiyazıdır.
   ⇒ ÖLÇÜLDÜ: `hudson`/`sirket`/`company` künyesi YOK.
     Seçenek: (a) `ingiliz-kuzey-amerika`ya bağla · (b) ayrı künye.
     ÖNERİM (a) — HBC bir şirkettir, atlas TASARRUFU boyar ve
     tasarruf hukuken Britanya tacınındı.
② Yerli kimlikler hangi TANECİKTE?
   ⇒ ÖLÇÜLDÜ: var olanların taneciği KONFEDERASYON/HALK düzeyi
     (haudenosaunee · creek-konfederasyonu · choctaw). Aynı tanecik
     kuzeyde ~25 yeni künye demektir.
     ALTERNATİF: bir kısmı `kasitli_bosluk` + `neden:"devletsiz"`.
     ⚠️ İkisi aynı şey DEĞİL: künye BOYAR, boşluk BOYAMAZ.
③ Rus Amerikası?
   ⇒ ÖLÇÜLDÜ, CEVAP HAZIR: Novoarkhangelsk (Sitka) `rusya` kullanıyor.
     11 Rus Amerikası adayım da `rusya` alır. 1867-10-18 devri
     `abd`ye kırılma günüdür ve `Değişmez 2` madde ister.
```

🔴 **Bu üç soru nokta yazmadan ÖNCE cevaplanmalı**, çünkü cevap 377 kaydın
`s:` alanını belirler ve sonradan değiştirmek hepsini dolaşmak demektir.
**Karar koordinatörde**, ben soruyu ölçüp cevap adaylarını çıkardım.

---

## 10. YAZIM TURUNA DEVİR — sırayla

```
① KÜNYE KARARI      §9'daki üç soru (HBC · yerli künye taneciği ·
                    Rus Amerikası) — nokta yazmadan ÖNCE
② KOORDİNAT TEYİDİ  377 kaydın koordinatı ve kuruluş günü, adı geçen
                    cilde bakarak. kara sınavı bir kez daha koşar.
③ CİNS TEYİDİ       kalan 143 hücre için `devletsiz` önerisi doğrulanır
                    (kaynak KONUŞUYOR mu? — §6)
④ ŞERİT KARARI      15-25K bandı kimin? (§7)
⑤ YAZIM             `data/<verilecek dosya>.js` + ad alanı
                    (`§7` — ayrı dosya vermek ayrı ad alanı vermek DEĞİLDİR)
⑥ ÜÇ SINAV + KARA SINAVI, sonra koordinatör `girdi.py`ye bağlar
```

⚠️ **377 nokta tek partide bağlanmamalı.** `§11`: *"bir dosya bağlandığı
gün, o veriye bakan BÜTÜN ölçüm aletlerinin tabanı yeniden doğrulanır"* —
2731 → 3108 (%14 büyüme) `renk_olc.py` · `denetle.py` · `durum_tablosu.py`
tabanlarını birden kaydırır. **`renk_olc.py` özellikle**: `§9`daki
*"palet verinin fonksiyonudur"* kuralı gereği, hiçbir renge dokunulmadan
yeni çakışmalar doğabilir — ve bu parti **20'den fazla yeni kimlik**
sahneye sokuyor.

---

## 11. BU OTURUMUN ÖĞRENDİKLERİ — `OGRENILENLER.md` adayları

**① Bir ızgara, TABANI ölçerken masum, KALANI ölçerken değildir.**
Aynı alet aynı kutuda %83,1 ↔ %84,6 (fark yok) ama %2,7 ↔ %5,4 (iki kat)
verdi. Kapanma ilerledikçe boşluk incelir; **kaba ızgara incelen boşluğu
kaçırır ve iş bitmiş görünür.** Ve hata coğrafyaya bağlı: AFRIKA'da %0,3,
burada %2,7 — **dokuz kat.** ⇒ *Bir ölçütün çözünürlüğü, ölçtüğü şey
küçüldükçe yeniden sorgulanır.*

**② Kapanmayan bir hücre, bir ADAYIN kusurunu gösterebilir.**
`54,5K 164,5B` açık kalmıştı, oysa oraya Unalaska yazılmıştı ⇒ koordinat
yanlıştı (210 km denizde). ⇒ *Ölçüm yalnız "ne eksik" demez, "yazdığım
şey doğru mu" da der — yeter ki iki işaret çakıştırılsın.*

**③ Bir ölçütün "katkısı sıfır" demesi, "değeri sıfır" demek değildir.**
60 aday hiçbir hücre kapatmıyor ama `§2` emilmesini 200 km'nin altında
düzeltiyor. ⇒ *Ölçüt neyi ölçmediğini söylemez; onu ölçütü kuran yazar.*

**④ İki kutunun ARASI, ikisinin de içinden görünmez.**
15-25K şeridi hem bende hem Orta Amerika'da; kimseye verilmediği için
**çakışma alarmı ötmez** ve tam bu yüzden atlanır. ⇒ *Kutu defteri
"örtüşüyor mu" diye soruyor; "arada kalan var mı" diye de sormalı.*

**⑤ Bir sevkin doğruladığı sayı, sevkin TABANI olduğu ızgarayı
doğrulamaz.** Şartnamenin tablosu 2°ydi ve ben onu birebir tutturdum —
**taban doğruydu, ölçek yanlıştı.** ⇒ `§11`in *"ölçüm doğru, evren dar"*
ailesinin **çözünürlük** yüzü: burada evren dar değil, **kaba.**

**⑥ "ÖLÇMEDİM" DAMGASI BİR SON DEĞİL, BİR ADRESTİR — ve ilk açtığımda
partinin en ağır bulgusu çıktı.**
Bitiş ölçütünün ④. şartını (*"her `s:` kimliği `devletler.js`te var mı"*)
önce dürüstçe **`ölçmedim`** diye damgaladım ve borç yazdım. Sonra açtım:
`kanada` künyesi **yok**, kuzey ve batı yerli kimliklerinin neredeyse
**hiçbiri yok** ⇒ 377 aday bugün yazılsa `§8` gereği **peteği üretir ama
hiçbirini boyamaz.** Boşluk kapanmış **görünür**, harita **aynı kalır**.
⇒ *Bir kalemi `ölçmedim` diye kapatmak, onu açık tutmanın en ucuz yoludur
— ama yalnız gerçekten geri dönülürse. Damga bir hafıza, mazeret değil.*

**⑦ Ve aynı ölçüm beni ÇÜRÜTTÜ:** raporun ilk hâlinde *"İrokua künyesi
var"* diye yazmıştım; `irok` araması **0** verdi ve neredeyse *"künye
yok"* diye hüküm verecektim. Gerçek `id:` **`haudenosaunee`**, ve beş
nokta onu **zaten** kullanıyordu. ⇒ `§4`ün yazım ekseni: *aday listeme
değil, VERİNİN KENDİ `s:` alanına sormalıydım.* **Bir kimliğin var olup
olmadığını, onu arayan değil, onu KULLANAN söyler.**

---

## 12. DURUM BEYANI

```
✅ ARAŞTIRMA TURUM BİTTİ — boştayım, yeni iş bekliyorum.
⏳ BEKLİYORUM:  15-25K şeridi kararı (§7) + künye kararı (§9)
   KİMDEN:      1.MURAT
   NE ZAMAN:    bir saat ses gelmezse tahtadan tekrar soracağım
```

🔴 `data/` altına **hiçbir şey yazmadım** — koşu canlıydı (PID 1268) ve
`§7` gereği `data/` ve `arac/` ikisi de donmuştu. Yazdığım her şey
`denetim/` altındadır.
