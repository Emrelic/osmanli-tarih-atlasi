# BULGU — SAHRA ALTI AFRİKA · araştırma ve reçete

> **OPUS HAZIR KITA 125** · 2 Eylül 2026 · sevk `M-2281 §②` ·
> şartname `oturumlar/ARASTIRMA-DUNYA-0902.md`
> **Ölçüm oturumuyum: düzeltme yapmadım, `data/` altına tek bayt yazmadım.**
> Kutu: **35°G–16°K / 18°B–52°D**

---

## 0. ÜÇ DAMGA — bu raporun kendi sınavı

```
TUTTU        ölçüldü ve doğrulandı
ÇÜRÜDÜ       ölçüldü ve yanlış çıktı — bilgiyi bunlar taşır
ÖLÇÜLEMEDİ   alet o soruyu cevaplamıyor — kalem AÇIK, "temiz" DEĞİL
```

---

## 1. ŞARTNAMENİN ÖNCÜLLERİ — hiçbirini devralmadım

Evren: `arac/girdi.py` → `GIRDI_DOSYALARI` (**69 dosya · 2663 nokta**),
ayrıştırma `girdi._cevir` ile — regex değil.

| öncül | şartname | ölçtüğüm | damga |
|---|---|---|---|
| nokta | 272 | **272** | 🟢 TUTTU |
| kara alanı | 21,0 Mkm² | **21,02 Mkm²** (`ne_10m_land`) | 🟢 TUTTU |
| yoğunluk | 13,0 nokta/Mkm² | **12,9** | 🟢 TUTTU |
| künye | 35 · 29 kronolojili | **evrene bağlı — §4'e bak** | 🟡 farklı evren |

Ek ölçümler:
```
en yakın komşu   ortalama 108,1 km · medyan 81,4 km
3 km altı çift   0        (mükerrer nokta YOK)
kıyı  (≤50 km)   71 nokta (%26)
orta (50-200)   137 nokta (%50)
iç   (>200 km)   64 nokta (%24)
en iç nokta      Fâşoda 470 km · Malakal 443 · Fangak 428
```
⇒ Şartnamenin *"kıyı görece dolu, iç Afrika boş"* tezi **kabaca doğru ama
eksik**: iç noktaların çoğu **Sudan–Etiyopya hattında** toplanmış; asıl boş
olan **güney-orta kuşak** (aşağıda).

---

## 2. 🔴 BOŞLUĞUN ÖLÇÜSÜ — motorun kendi çıktısı söyledi

`veri-kaynak/motor_kara.geojson` bir **girdi maskesi değildir**;
`arac/uret_petek.py:2776`nın **çıktısıdır**: `unary_union(PETEK_D)` —
*"motorun çizdiği kara"*. Onu gerçek karayla (`ne_10m_land`) 0,25°'lik
ızgarada karşılaştırdım (**57.120 hücre**):

```
KARA        20,45 Mkm²
BOYALI       8,10 Mkm²   (%40)
BOYANMAYAN  12,34 Mkm²   (%60)
```

**Boyanmayan alan tek parçadır:** 11,75 Mkm²'lik bitişik bir gövde,
`-34,4..15,9°K / 17,1°B..40,9°D` — iç Afrika'nın tamamı. İkincisi
**Madagaskar, 473.000 km²**.

### Ve bu bir kusur DEĞİL — tavanın doğru çalışması

Ayırt edici ölçüm:
```
boyanmayan VE bir noktaya 100 km'den yakın :  0,04 Mkm²
boyanmayan VE en yakın nokta 250 km'den uzak : 10,32 Mkm²
```
⇒ Tavan noktalı bölgelerin kenarını yemiyor; kestiği yerlerin **hepsi
gerçekten noktasız**. Boşluk, `§2` emilmesinin **önlenmiş** hâlidir —
Emre'nin hükmüyle birebir: *"devasa boşluklar olacaksa olsun."*

En sert örnek: **Namibya iç kesimi (-21,9 / 14,1)** — en yakın yerleşim
**Kabasa (Ndongo başkenti), 1404 km.**

### Enlem şeridi başına boyalı oran

| şerit | boyalı | gerçek | oran |
|---|---|---|---|
| −15..−10 | 0,149 | 1,717 | **%9** 🔴 en boş |
| −20..−15 | 0,299 | 1,814 | %16 |
| −25..−20 | 0,279 | 1,451 | %19 |
| −35..−30 | 0,063 | 0,481 | %13 |
| −5..0 | 0,580 | 1,900 | %31 |
| 5..10 | 1,989 | 3,697 | %54 |
| 10..15 | 2,380 | 3,774 | **%63** en dolu |

⇒ **Sahel görece iyi; asıl delik Zambezi–Angola–Zambiya kuşağı.**

### ⚠️ ÖLÇÜLEMEDİ — bu sayının tarihi var
`motor_kara.geojson` **2 Eylül 11:40** damgalı, yani **şu an koşan
üretimden (PID 27596) ÖNCEKİ turun** çıktısı. %60 rakamı bugünkü girdinin
**bir tur gerisinden** gelir. *(`§11`: çıktı girdinin bir tur gerisindedir
ve bu kusur değil GECİKMEdir — ama kayıtsızsa kusurdan ayırt edilemez.)*
Koşu bitince yeniden ölçülmeli.

---

## 3. ADAY TARAMASI — 95 aday, hükmü **ad değil mesafe** verdi

**Yöntem.** Her aday için en yakın atlas noktası ve **km cinsinden**
uzaklığı. Ad benzerliği ayrıca basıldı ama **hüküm vermedi** —
`Haydarâbâd (Sind)` ile `Haydarâbâd (Dekken)` neredeyse aynı ad ve 1500 km
ayrı. Normalleştirici Türkçe harf + diakritik + kesme işareti kapsıyor
(`usku` ≠ `Üsküp` tuzağı).

```
ZATEN VAR 44 · ŞÜPHELİ 6 · YOK 45     (+3'ü aşağıda VAR'a geçti)
```

🔴 **Yani "bâriz eksik" sandığım adayların yarısı atlasta zaten vardı.**
Aramadan yazsaydım **44 mükerrer nokta** üretecektim.

**Zaten var olanlar:** Kano · Katsina · Zaria · Sokoto · Gao · Timbuktu ·
Cenne · Segu · Niani · Valata · Kumasi · Abomey · Benin Şehri · İfe ·
Gondar · Aksum · Lalibela · Ankober · Harar · Zeyla · Berbera · Mogadişu ·
Merka · Berâve · Sennar · Şendî · Mombasa · Malindi · Lamu · Pate · Kilwa ·
Zanzibar · Bagamoyo · Mengo · Mbanza-Kongo · Luanda · Kabasa · Musumba ·
Büyük Zimbabve · Sofala · Angoche · Ulundi · Antananarivo · El-Fâşir.

### 🟢 Ve dersin ikinci yönü ölçüldü
Üç aday **"YOK" göründü ama adı TAM eşleşiyordu**:
```
Birni N'gazargamu   159 km      Kabongo (Luba)   93 km      Oyo-İle   69 km
```
Üçü de atlasta **var**; uzak olan **benim yaklaşık koordinatımdı.**
⇒ *Ad benzerliği eşanlam değildir — **ama ad TAM eşleşirken mesafe
büyükse, önce KENDİ referansından şüphelen.*** Tek yönlü uygulanan kural
bu üçünü mükerrer yazdırırdı.

### En büyük gerçek boşluklar

| hat | atlasta | en yakın noktaya uzaklık |
|---|---|---|
| **Namibya–Botsvana** | **hiç nokta yok** | Okahandja 1221 · Walvis 1279 · Ondangwa 963 · Bethanie 837 · Molepolole 309 |
| **Büyük Göller** | yalnız Mengo | Burundi 514 · Ruanda 435 · Karagwe 261 · Nkore 240 · Bunyoro 200 |
| **İç Doğu Afrika** | yok | Tabora 598 · Ujiji 495 |
| **Angola içi** | Kabasa · Luanda | Benguela 412 · Kasanje 336 · Bailundu 331 · Matamba 127 |
| **Zambezi** | yok | Lealui (Barotse) 761 · Tete 400 · Sena 206 |
| **Zimbabve** | B. Zimbabve · Mapungubwe | Zvongombe (Mutapa) 424 · Khami 249 · Danangombe 199 |
| **Volta havzası** | yok | Kong 429 · Wagadugu 370 · Bobo 305 · Yatenga 234 |
| **Kamerun–Adamawa** | yok | Foumban 590 · Ngaoundéré 557 |
| **Çad havzası** | Ndjamena · Mao | Kukawa 186 · Abéché 180 · Massenya 146 |
| **Madagaskar** | yalnız Antananarivo | Mahajanga 380 · Menabe 371 · Toamasina 217 |

---

## 4. KÜNYE TARAFI — şartnameden farklı çıktı, çünkü **evren farklı**

Şartname `35 künye · 29 kronolojili` diyor. Ben künyenin `bolge:` alanına
değil **veride kullanıldığı noktanın koordinatına** göre saydım — çünkü
**haritayı boyayan şey odur.**

```
kutuda VERİDE kullanılan kimlik : 48
   künyesi olmayan               : 0
   kronolojisi DOLU              : 42
   kronolojisi BOŞ               : 6
        massina · mutapa · oranj · tekrur · transvaal · zimbabve-kralligi
   `kaynak:` alanı boş           : 0
bolge: alanına göre sayınca      : 45 künye
```
⚠️ **Şartnamenin 35'ini ÇÜRÜTMÜYORUM — o evreni ölçmedim.** İki sayı iki
ayrı soruya ait ve ikisi de doğru olabilir.

### 🔴 HAYALET AİLESİ — `§3.5`in TERS YÖNÜ

`§3.5` *devlet öldükten sonra boyanmayı* ölçer. Afrika'da bulduğum bunun
**aynası**: kimlik **doğmadan önce** boyanıyor.

```
kimlik      kayıt   sapma
somali        26    219 yıl ERKEN   künye 1500-01-01 · veri 1281-01-01
adal          37    134 yıl ERKEN + 36 yıl GEÇ
kaffa          2    109 yıl ERKEN
oranj          1     24 yıl ERKEN   (Boer cumhuriyeti · künye 1854)
transvaal      1     22 yıl ERKEN   (künye 1852)
mutapa         1              5 yıl GEÇ
────────────────────────────────────────────────────
künye ömrü dışına taşan dönem : 122
   bir yıldan büyük            :  68
   bir yıldan küçük            :  54   (bölgesel teslim gecikmesi meşru olabilir)
```

**Reçete (uygulamadım):** iki uçtan hangisinin yanlış olduğu **kayıt kayıt**
sorulmalı — `§3.5.1`: *bir sınır kayması önerildiğinde İKİ UÇ DA ölçülür.*
`somali` künyesinin `f:1500`ü mü geç, yoksa 1281–1500 arası kayıtlar
`adal`/`ifat`e mi ait? Bunu ölçmedim.

---

## 5. 🔴 KENDİ ALETİMİN İKİ KUSURU — ikisi de sessizdi

İkisini de **raporlamadan önce** yakaladım; ikisi de yanlış sayı
üretiyordu ve hiçbiri hata vermiyordu.

```
① TARİH KIYASI DİZGİ KIYASIYDI
   "1281-01-01" < "543-01-01"  → dizgi olarak DOĞRU, tarih olarak YANLIŞ
   künyesi 1000'den önce başlayan her kayıt (nube 543) SAHTE hayalet verdi
   ilk sayım 156 · düzeltilmiş 122

② KÜNYE ARAMASI YALNIZ `id` ÜZERİNDENDİ
   5 kimlik "künyesiz" göründü: kaffa · cimma · vollayta · sidamo · yemen
   `id` ∪ `harita:` kümesi kurulunca  →  0
   düzeltmeseydim `§1.5`in "dizinsiz kimlik 0" satırını YANLIŞ YERE
   çürütecektim (projenin 7 Ağustos'ta ölçtüğü tuzağın aynısı)
```

📌 İkisi de **doğru soruya yanlış evrenle** cevap veriyordu — bu projenin
en sık kaydettiği kusur sınıfı, ve bu sefer kaydeden taraf ona düştü.

---

## 6. KAYNAK TARAFI — TDV yoklaması, **aleti önce sınadım**

### 🔴 Ve ilk aletim 88 slugun 88'ine "ÖLÜ" dedi — YANLIŞTI

İlk yoklayıcım gövdeye bakıp karar veriyordu ve **hepsini ölü ilan etti**.
`darfur`un CANLI olduğu `CLAUDE.md §4`te **8 Ağustos'ta ölçülmüştü** — iki
ölçüm çelişince aleti sınadım, TDV'yi değil.

```
KUSUR   urllib yönlendirmeyi KENDİLİĞİNDEN izliyor ⇒ 302'yi hiç görmüyordum
ÇARE    §4'ün kendi yöntemi zaten doğruydu: HTTP KODU, tek istekle
SINAV   bilinen CANLI (darfur·cezayir·fizan) 3/3 · bilinen ÖLÜ
        (badis·tuvat·napolyon) 3/3 — iki yön de sınandı, sonra ölçüm yapıldı
```
📌 *Bozuk aletle 88 hüküm vermektense hiç hüküm vermem* — betiğe sınav
geçmezse `sys.exit(1)` kondu.

### Ölçüm: 85 slug → **39 CANLI · 46 ÖLÜ**

```
🟢 CANLI  bornu · bagirmi · func · sennar · sokoto · hevsa · kano · dahomey ·
          benin · adamava · ruanda · zimbabve · mozambik · madagaskar ·
          nijerya · nijer · cad · kamerun · gana · mali · senegal · gine ·
          togo · uganda · kenya · tanzanya · zambiya · malavi · sudan ·
          etiyopya · habesistan · somali · afrika · zengibar · kilve ·
          timbuktu · gao · cenne · tekrur
🔴 ÖLÜ    kanem · vaday · hausa · katsina · zarya · mossi · kong · asante ·
          oyo · bamum · buganda · bunyoro · burundi · lunda · luba · kuba ·
          kazembe · barotse · ndongo · matamba · ovimbundu · benguela ·
          angola · mutapa · monomotapa · rozvi · herero · nama · ovambo ·
          namibya · botsvana · merina · sakalava · zulu · lesotho · ndebele ·
          transvaal · oranj · kongo · sahra · svahili · masina …
```

🟢 **`§4`ün Türkçe yazım ekseni yine ısırdı ve yine kurtardı:**
`hausa` **ölü**, `hevsa` **canlı**. `kilwa` yerine `kilve`. Kendi
transliterasyonuyla arayan biri *"TDV Hausa'yı kapsamıyor"* diye **yanlış
bir sonuç** yazardı.

⚪ **CANLI kovası "DOĞRU madde" demek değildir** (`§4②`: `ordu` askerî
ordudur). O yüzden gövdeleri **okudum** — aşağısı gövdeden.

---

## 7. BOŞLUK BOŞLUK: kaynak KONUŞUYOR mu, SUSUYOR mu?

`neden:` cinsi bu ayrımdan çıkar — ikisi haritada aynı görünür, fark **bir
sonraki oturum içindir.**

| hat | TDV ne diyor | cins |
|---|---|---|
| **Büyük Göller** | `uganda` (34 KB) sömürge öncesi **sekiz krallığı adıyla sayıyor**: Buganda · Bunyoro · Ankole · Karagve · Koki · Buriba · Toro · Soda | 🟢 **konuşuyor** |
| **Ruanda** | `ruanda` (13 KB): Tutsi kökenli Ruanda Krallığı; **1901'de başşehir Nyanza** | 🟢 konuşuyor |
| **Adamawa** | `adamava`: 1809 cihadı, **1841'de Yola merkez yapıldı**, Garoua ve Ngaoundéré kuruldu | 🟢 konuşuyor · **tarih veriyor** |
| **Bornu/Çad** | `bornu`: Kukava, Kânimî'nin kurduğu **fiilî başşehir**; Vedây ordusu tahrip etti. `cad`: Bagirmi · Vedây · Kânim · Bornu sultanlıkları | 🟢 konuşuyor |
| **Zimbabve** | `zimbabve`: Mwene Mutapa imparatorluğu, 1500'lerde Portekiz teması, **Rozvi hânedanının yükselişi** | 🟢 konuşuyor |
| **Zambezi (Sena·Tete)** | `mozambik`: müslümanlar **"epeyce içeride kalan Sena ve Tete"** şehirlerinde ticaretle meşguldü | 🟢 konuşuyor |
| **Volta (Begho)** | `gana`: **XVIII. yüzyılda ortadan kalkan Begho**; Şeyh İsmâil | 🟢 konuşuyor |
| **Masina·Segu** | `mali`: Ahmedü Lobbo'nun Mâsînâ'sı, Segu'daki Bamanan Krallığı, **16 Mayıs 1862** | 🟢 konuşuyor · **gün veriyor** |
| **Hausa şehirleri** | `hevsa`: **Kano · Katsina · Gobir · Zaria · Biram · Rano · Daura** adıyla | 🟢 konuşuyor |
| **Tabora · Ujiji** | `tanzanya`: Tabora yalnız **1880'ler** bağlamında bir cümle; Ujiji · Unyanyembe · Nyamwezi **BULUNAMADI** | 🟡 **tanecik boşluğu** |
| **Kazembe · Barotse** | `zambiya`: Lozi ve Lunda yalnız **etnik grup** olarak; Kazembe · Barotse **BULUNAMADI** | 🟡 tanecik boşluğu |
| **Maravi** | `malavi`: Maravi **BULUNAMADI**; Yao ve Zengibar bağı var | 🟡 tanecik boşluğu |
| **Sakalava · Boina** | `madagaskar`: Merina var, **Sakalava ve Boina BULUNAMADI** | 🟡 tanecik boşluğu |
| **Bamum (Foumban)** | `kamerun`: Bamum · Fumban · Ngaoundere **BULUNAMADI** (madde coğrafya ağırlıklı) | 🟡 tanecik boşluğu |
| **Namibya · Botsvana** | `namibya` · `botsvana` · `herero` · `nama` · `ovambo` · `cvana` — **altısı da ÖLÜ**; `afrika` maddesinde de yok | 🔴 **coğrafî boşluk** |
| **Angola içi** | `angola` · `ndongo` · `matamba` · `ovimbundu` · `benguela` — **beşi de ÖLÜ** | 🔴 coğrafî boşluk |

⇒ `§4`ün **iki boşluk cinsi** Afrika'da yan yana duruyor: TDV Büyük
Göller'i **görüyor**, Namibya'yı **hiç görmüyor**, Zambiya'yı **görüyor ama
o taneciğe inmiyor**. Üçü aynı muameleyi görmez.

---

## 8. REÇETE — uygulamadım, öneriyorum

**Sıra, en çok km² açan hattan başlar** (`ONCELIK.md` çöl seyyahı):

```
① NAMİBYA–BOTSVANA   atlasta SIFIR nokta · en yakın komşu 309-1279 km
   Ondangwa (Ovambo) · Okahandja (Herero) · Bethanie (Nama) ·
   Walvis Körfezi · Molepolole (Kwena)
   🔴 TDV YOK — coğrafî boşluk. Akademik kaynak MEŞRU, ama `kaynak:`
      alanına AÇIKÇA yazılmalı. Kaynağı BEN BULMADIM: `bulunamadı`.
② BÜYÜK GÖLLER       TDV sekiz krallığı adıyla sayıyor
   Bunyoro · Nkore/Ankole · Karagwe · Nyanza (Ruanda) · Gitega (Burundi)
   🟢 kaynak `uganda` + `ruanda` — kimlikler künye olarak VAR MI, ölçülmedi
③ ZAMBEZİ–ZAMBİYA    Lealui (Barotse) 761 km · Kazembe 262 km
   🟡 tanecik boşluğu — akademik kaynak gerek
④ ANGOLA İÇİ         Benguela · Bailundu · Kasanje · Matamba
   🔴 TDV yok — ama `kongo-kralligi` künyesinin kaynağı emsal
⑤ ZİMBABVE–MUTAPA    Zvongombe · Khami · Danangombe   🟢 TDV konuşuyor
⑥ VOLTA              Begho 🟢 · Kong · Wagadugu · Yatenga (TDV ölü)
⑦ ÇAD                Kukawa 🟢 · Massenya · Abéché
⑧ KAMERUN            Ngaoundéré 🟢 (`adamava`, 1841) · Foumban 🟡
⑨ MADAGASKAR         Mahajanga · Menabe · Toamasina — 🟡 tanecik
⑩ İÇ DOĞU AFRİKA     Tabora 🟡 · Ujiji (TDV susuyor)
```

⚠️ **HİÇBİR TARİH ÖNERMİYORUM.** Yukarıdaki hatlarda TDV'nin verdiği
tarihler yalnız **Yola 1841**, **Mâsînâ–Segu 16 Mayıs 1862** ve **Begho
XVIII. yüzyıl**. Ötekiler için gün/yıl **bulunamadı** ve **uydurulmayacak**
— nokta kolu açıldığında her kayıt kendi kaynağını taşımalı.

⚠️ **KUTU ÖNCE TAHTAYA YAZILMALI.** Bugün üç mükerrer koşu öldürücüsü
çıktı; bu hatlar açılırken kutuları tahtada ilan edilmeli.

---

## 9. AÇIK KALEMLER — `ÖLÇÜLEMEDİ`, "temiz" değil

```
① %60 boyanmayan rakamı  koşan üretimden ÖNCEKİ çıktıdan (11:40 damgalı)
② şartnamenin 35 künyesi  o evreni ölçmedim
③ hayaletin hangi ucu yanlış  kayıt kayıt sorulmadı
④ aday koordinatları      YAKLAŞIK — tarama içindi, KAYIT İÇİN DEĞİL
⑤ TDV gövdelerinin TAMAMINI okumadım — anahtar kelime taraması yaptım.
   Kelimenin geçmediği yer "madde kapsamıyor" demektir, "yok" demek DEĞİL.
⑥ Namibya-Botsvana için AKADEMİK kaynak ARAMADIM — TDV'nin olmadığını
   ölçtüm, yerine geçecek kaynağı BULMADIM. Kalem AÇIK.
⑦ Önerilen kimliklerin künyesi var mı ve ömrü tutuyor mu — ÖLÇMEDİM.
```

---

## 10. BİTİŞ ÖLÇÜTÜNE KARŞI KENDİ SINAVIM

| ölçüt | durum |
|---|---|
| ① boşluklar sayıyla, en-yakın-komşu ile ölçüldü | 🟢 TUTTU |
| ② her boşluk için kaynak konuşuyor mu susuyor mu | 🟢 TUTTU (§7) |
| ③ önerilen her nokta için `kaynak:` dolu ya da `bulunamadı` | 🟡 **KISMEN** — nokta değil HAT önerdim, tarih önermedim |
| ④ önerilen her kimlik künyede VAR ve ömrü tutuyor | 🔴 **ÖLÇMEDİM** — nokta kolu açılmadan önce ölçülmeli |
| ⑤ ölçemediğim her kalem ayrı kovada | 🟢 TUTTU (§9) |

📌 ③ ve ④'ü *"tuttu"* diye yazmadım: bu tur **hat** çıkardı, **kayıt**
çıkarmadı. Kayıt turunun kabul ölçütü bu ikisidir.
