# NEHİR GEÇİT — ilerleme ve teslim

| alan | değer |
|---|---|
| **AD** | NEHİR GEÇİT |
| **ŞARTNAME** | `oturumlar/NEHIR-GECIT.md` (M-0998 / M-0999 ile geldi, ikisi de teyit edildi) |
| **DOSYAM** | `data/gecitler.js` → `window.GECITLER` · ve bu dosya |
| **NÖBETÇİ** | Monitor · `tahta_bekci.py --kim "NEHİR GEÇİT" --ara 45` · persistent |
| **TARİH** | 22 Ağustos 2026 |

---

## 0. KANAL ÖLÇÜMÜ — koordinatörün sınavının cevabı

Koordinatör aynı mesajı **iki yazımla** gönderdi ve hangisinin ulaştığını sordu.

```
M-0998  KOORDINATOR → NEHİR GEÇİT  (Türkçe)   ✓ ULAŞTI
M-0999  KOORDINATOR → NEHIR GECIT  (düz)      ✓ ULAŞTI
```
**İkisi de aynı turda, iki ayrı bildirim olarak düştü.** Bekçi kendi açılış
satırında adı `NEHIR GECIT` diye normalleştiriyor ama Türkçe yazımı da
eşleştiriyor. İkisini de `teyit` ettim ⇒ kanal iki yönde de **kanıtlı**.

---

## 1. TESLİM RAPORU — şartname §6'nın sekiz kalemi

### ① KAÇ GEÇİT · nehir nehir dağılım

**63 kayıt · 37 ayrı akarsu.** (Sayı elle yazılmadı — kapı betiği saydı.)

```
tur   kopru 29 · feribot 22 · kale-cifti 10 · sig-gecit 2
en yoğun  Tuna 11 · Fırat 4 · Dicle 4 · Meriç 3 (+Ergene 1, +kol 1) · Aras 3
          Sava 2 · Nijer 2 (+Bani 1) · Nil 2 · Ganj 2 · Ceyhun 2 ·
          Kızılırmak 2 · Turla 2 (+ağız 1)
tek kayıt Drava · Tisa · Drina · Neretva · Vardar · Prut · Özi · Ten · İdil ·
          Seyhan · Ceyhan · Yeşilırmak · Sakarya · Kür · İndus · Sen ·
          Tames · Ren · Tajo · Vâdilkebîr
```

### ② §1 ÖLÇÜMÜ MOTORUN SÜZGECİYLE — beş sayının dördü değişti

Ayrıntı ve gerekçe **M-1000**'de; özeti:

```
                        ŞARTNAME §1      BENİM ÖLÇÜMÜM
nehir parçası           267 (sr<=6)      187 (motor: ad ∪ sr<=5)
petek                   5.334            2.593   ← 5.334 PARÇA sayısıydı
nehri aşan petek        418  (%7,8)      653 gevşek / 643 sıkı  (%25)
karşı yakada            5,96 M km²       6,97 M km²
çekirdek aşma oranı     %10,0            %33,4  (646 peteğin 216'sı)
nehre bitişik yerleşim  331              303
kardeş çift             10               14
kardeşi olmayan         305 (%92)        278 (%92)   ← yüzde BİREBİR TUTTU
karşı yaka en yakın     ort. 71 km       ort. 64 km  ← ±%10, tuttu
```

🔴 **Şartname §1'in kendi uyarısı yönü ters söylüyordu.** *"Motor adlı BÜTÜN
akarsuları tutuyor ⇒ gerçek sayılar YÜKSEK"* deniyordu. Motorun kapısı
(`uret_petek.py:519-523`) *"adlı olan"* değil:
`(BUYUK beyaz listesinde adı var)` **∪** `(scalerank ≤ 5)`.
⇒ Koordinatörün kümesi **daha büyük** (267 > 187) ama **alt küme değil**:
16 adlı akarsu YALNIZ motorda — `Sava · Aras · Kızılırmak · Sakarya · Prut ·
Kura · Kuban · Morava · Southern Bug · Büyük Menderes · Ceyhan · Kelkit ·
Murat · Simav · Aksu · Evros`. Sava'nın vakası buydu: beyaz listede olduğu
için giriyor, *"adlı olduğu"* için değil.

🟢 **ÇAPRAZ DOĞRULAMA:** ölçtüğüm **187 parça**, `CLAUDE.md §11`in
`kosu7.log` satırındaki *"187 nehir parçası"* ile birebir aynı ⇒ süzgeci
doğru kurduğum bağımsız bir kayıtla teyitli.

### ③ KARDEŞ ŞEHİR — ÖZEL KURAL **GEREKMİYOR**. Ön hüküm doğrulandı.

Sınav: iki kardeş peteğin **ortak sınırı** gerçekten nehrin üstünde mi?
Ortak sınırı 26 noktada örnekleyip her noktanın nehre uzaklığını ölçtüm.

```
A                    B                arası   min   orta    ort   maks   hüküm
Budin                Peşte             1,57   0,34   0,37   3,69   9,14   yakın
Geyve                Mekece            7,07   0,10   2,62   0,99   2,62  NEHİRDE
Marmaracık           Yarhisar          8,05   0,11   2,26   2,97   5,97  NEHİRDE
Rusçuk               Yergöğü           5,34   0,80   3,07   6,92  21,89   yakın
Yenişehir (Bursa)    Marmaracık        5,50   0,57   1,96   7,40  16,47   yakın
İpsala               Ferecik          17,85   0,64   6,22   6,81  16,09   yakın
Çirmen               Mustafapaşa       5,15   0,56  19,61   7,97  19,61   yakın
Aigun                Blagoveşçensk     6,57   0,13  39,53   8,05  60,99  taşıyor
Kalas (Galatz)       İbrail           18,58   1,49  38,98  16,62  38,98  taşıyor
Ava (İnwa)           Mandalay         17,08   2,13  57,54  29,33  78,17  taşıyor
Rusayris             Ed-Damazîn        8,54   2,88  73,49  29,08  73,49  taşıyor
Ardahan              Hanak            18,44   1,02  11,94   9,77  17,08  taşıyor
Geyve ↔ Akhisar (11,68) · Köprühisar ↔ Marmaracık (15,68): ORTAK SINIR YOK
      (araya üçüncü bir petek giriyor — bunlar gerçek kardeş değil)
```

🟢 **HÜKÜM:** sınav `min` sütunudur. Ölçülebilen **12 çiftin 12'sinde de**
ortak sınır nehre **3 km'den yakın bir noktada değiyor**; ortanca `min`
**0,6 km**. Yani orta dikme, iki şehrin arasındaki **geçiş noktasında zaten
nehrin üstünden geçiyor.** Budin↔Peşte'de `min 0,34 · orta 0,37`.

⚠️ **Ama sınırın TAMAMI nehir değil** — `maks` 9-78 km. Orta dikme, çiftten
uzaklaştıkça nehrin menderesini bırakıp düzleşiyor.
🔴 **Ve bu ③'ün değil ④'ün sorunudur:** çiftin ARASINDA doğru, çiftten
UZAKTA yanlış. Uzaktakini düzeltecek olan şey kardeş kuralı değil boş yaka
kuralıdır. İkisini karıştırmak, gereksiz kod yazdırır.

### ④ BOŞ YAKA — ön hüküm **DOĞRULANDI ama DARALTILARAK**

Ön hüküm: *"karşı yakayı kıyı şehri alır, ama BEDELLE — yani daha az."*

**LEHİNE olan:**
- Popelka & Smith 2020 (şartnameden): nehrin sınır olma oranı ulusal %23 ·
  eyalet %17 · **yerel %12**. Petek yerel bir birimdir ⇒ o ölçekte nehir
  çoğunlukla sınır **değil**.
- Geçit-şehir ilkesi kaynakla doğrulandı, ve Osmanlı coğrafyasında da
  geçerli: **Köprülü (Veles)** · **Uzunköprü (Cisr-i Ergene)** ·
  **Cisr-i Mustafa Paşa (Svilengrad)** — üçü de adını köprüden alıyor.
  TDV `koprulu`: *"Antik dönemden itibaren Vardar nehri üzerinde bir
  köprünün bulunduğunu gösterir… Köprüyü koruma ve onarma görevi otuz
  hıristiyan ailesine vergi kolaylığı karşılığında verilmişti."*
- TDV üç yeri **doğrudan "geçit noktası"** diye tanımlıyor: İsakça
  (*"Aşağı Tuna'da stratejik bir geçit noktası"*), Hotin (*"önemli bir geçit
  yeri"*), Cizre (*"Büyük İskender'in de Dicle'yi aşarken kullandığı bu
  önemli geçit noktasını kontrol eden Bâzabdâ Kalesi"*).

**ALEYHİNE / DARALTAN — ve asıl bulgu bu:**
Osmanlı pratiğinde karşı yaka **emilmiyor**, ayrı bir **köprübaşı**
kuruluyor: Estergon↔**Ciğerdelen**, Belgrad↔**Zemun**, Budin↔**Peşte**,
Rusçuk↔**Yergöğü**. TDV `varadin`: *"Tuna kıyısında hendekler kazılarak
yeni bir KÖPRÜBAŞI yapıldı ve toplarla donatıldı."*
⇒ Karşı yaka alınıyor, ama **geçidin yanında ve müstahkem bir yapıyla** —
nehir boyunca 35 km'lik bir şerit olarak değil.

🔴 **HÜKÜM:** indirim **genel değil, YARIÇAPLA SINIRLI** olmalı. Motor bugün
kıyı şehrine karşı yakadan **her yerde ortanca ~32 km** veriyor; tarih
*"yalnız geçidin yakınında"* diyor. `etki_km` alanının varlık sebebi budur.

⚠️ İki karşı örnek de buldum ve saklamıyorum:
- **Benâres** karşı yakayı KASTEN tutmaz — sebep coğrafî değil **dinî**.
- **Köln** büyük bir şehirdir ama Orta Çağ boyunca **sürekli köprüsü
  yoktur**; *"büyük şehir ⇒ köprü vardır"* varsayımı yanlış.

### ⑤ GENİŞLİK BAĞIMLILIĞI — eşik VAR, ve motorun kendi anahtarı yeterli

Emre *"nehrin genişliği ile ilgisi olabilir"* dedi. Ölçtüm: **63 geçidin her
biri için en yakın motor nehir parçasının `scalerank`'ı.**

```
sr=1   2 kayıt  Nil
sr=2  11 kayıt  Tuna
sr=3  10 kayıt  Fırat · Ganj · Nijer · İdil · İndus
sr=4   6 kayıt  Dicle · Ren · Sen
sr=5   3 kayıt  Ceyhun · Tajo
sr=6   6 kayıt  Drava · Tisa · Turla · Ten
sr=7  10 kayıt  Meriç · Ergene · Kızılırmak · Prut · Sava
sr=8   4 kayıt  Aras · Kür · Sakarya
sr=9   2 kayıt  Ceyhan · Seyhan
```

🟢 **ÖNERİ: `scalerank` genişliğin vekili olarak KULLANILABİLİR** — motorun
zaten okuduğu alan, yeni veri gerekmiyor, ve Tuna(2) ile Meriç(7) doğru
tarafa düşüyor.

🔴 **VE SAYILI BİR DAYANAK VAR** — tombaz köprü için gereken tekne sayısı:
```
Tuna     ~70 TEKNE   Budin-Peşte 1526: "ON GÜN İÇİNDE… yetmiş kadar kayık
                     üzerinde kurulmuştu" (TDV `budin`)
                     Rusçuk-Yergöğü 1595: "YETMİŞ ŞAYKA" (TDV `tuna`)
Fırat    kelek/sal   Birecik iskelesinde 1552'de 45, 1570'te 63 kişi
                     (5-6 reis · 2-3 neccâr · 38-54 kürekçi) (TDV `birecik`)
Aras     tek köprü   Çobandede: 7 kemer, inşası 2,5 yıl (TDV `aras`)
```
⇒ Gereken tekne sayısı genişliğin **doğrudan** vekilidir ve `scalerank`
sıralamasıyla uyumludur.

**Önerilen kademe** (`⚠️ ÖLÇÜM DEĞİL, GEREKÇELİ ÖNERİ`):
```
sr <= 2   ana nehir (Tuna · Nil)          geçitsiz bedel EN YÜKSEK
sr 3-5    büyük nehir (Fırat · Dicle · Ren)   orta
sr >= 6   orta nehir (Meriç · Sava · Aras)    düşük
```

**`tur` kademesi için önerilen indirim sırası** ve dayanağı:
```
kopru       en yüksek indirim   Sinan'ın 1538 Prut köprüsünden ordu
                                AĞIRLIKLARIYLA geçti (TDV `kopru`)
                                ama Evliya: Çobandede'den geçiş ÜÇ GÜN
                                sürdü (TDV `aras`) ⇒ köprü bile bedava değil
kale-cifti  orta-yüksek         geçiş var ve korunuyor, kapasite tekneyle
                                sınırlı (Cizre · Hotin · Rusçuk-Yergöğü)
feribot     orta                sürekli hizmet, sınırlı kapasite (Birecik)
sig-gecit   düşük               mevsimlik, alçak suda
```

🔴 **ÖLÇMEDİĞİMİ YAZIYORUM:** dört türün indirim ORANLARININ mutlak değerini
**kalibre etmedim**. `etki_km` değerleri de (30 · 20 · 15 · 10) bir ölçüm
değil, Osmanlı menzil sistemine (bir günlük yürüyüş ~25-30 km) dayanan bir
**öneridir**. Birbirine oranı savunulabilir, mutlak değeri değil.
⇒ Motor bağlandıktan sonra bunlara `egim_olc.py`nin 44 gerçek kara seferi
güzergâhıyla yaptığı sınavın **aynısı** yapılmalı — eğim çarpanı (0,005) tam
öyle kalibre edilmişti ve o ölçümün kendi sınırı da kayıtlı
(*"eğri düz, 0,005-0,02 ayırt edilemiyor"*). Aynı ihtiyat burada da geçerli.

### ⑥ KAYNAK DAĞILIMI

```
TDV maddesi dayanak, GÖVDESİ OKUNDU              45
TDV okundu ama geçit cümlesi BULUNAMADI           5   (kaynak alanında yazılı)
TDV'de madde YOK ya da kapsam dışı, akademik     12
slug SINANMADI (kendi eksiğim, damgalı)           1   (kurtuba)
VİKİPEDİ TEK DAYANAK                              0   ← kapı ayrıca arıyor
```
Toplam 63. Sınıflandırma `kaynak` metnindeki kelimelere bakar; Tuleytula
kaydı *"denenmedi"* yazdığı için `SINANMADI` kovasına düşmedi, `akademik`
sayıldı — kovası dar, düzeltmek yerine **yazdım**.

**Slug tuzağı hasadı** (`§4`e yeni üyeler):
```
🔴 ÖLÜ   osek · osijek · uzunkopru · cisr-i-mustafa-pasa · svilengrad ·
         zemun · sabac · geyve · kizilirmak · cesnigir · ceyhan · seyhan ·
         culfa · bender · akkerman · dinyester · ozi · volga · astrahan ·
         ejderhan · don · musul · el-musul · musul--sehir · attok · atek ·
         ganj · kerki · tirmiz(ilk yazım) · isakci · rusuk · orsova ·
         petervaradin · szeged · tisza · cerablus · karkamis · rumkale ·
         justinianus-koprusu · bes-kopru · sangarios · ava · mandalay …
🟢 CANLI uzunkopru--ergene ← `--sehir/--ulke` desenine YENİ ÜYE
         bogurdelen · ruscuk · isakca · varadin · segedin · akkirman ·
         ozu · sind · benares · varanasi · tirmiz · koprulu ·
         drina-koprusu · mostar-koprusu · buyukcekmece-koprusu · kopru
```
🔴 **`§4 ②` (canlı slug, YANLIŞ madde) ailesine iki yeni üye ölçtüm:**
```
kura    200 · madde AÇILIYOR → "kur'a / falcılık"      nehir DEĞİL
bender  200 · madde AÇILIYOR → İran liman şehirleri    Osmanlı kalesi DEĞİL
```
`ordu · saray · cin` deseninin aynısı. Kür nehri kaydını `tiflis`,
Bender kaydını `tuna` maddesinden aldım.

### ⑦ NE BULAMADIM — açıkça

1. **Ösek (Osijek) köprüsü TDV'de YOK.** `osek` · `osijek` slugları ölü,
   müstakil madde yok. Kanûnî'nin Drava köprüsü kaydı akademik dayanakla
   yazıldı ve bu, kayıt metninde **açıkça** duruyor.
2. **Cisr-i Mustafa Paşa'nın İNŞA TARİHİ bulunamadı.** TDV `meric` köprüyü
   anıyor ama yılını vermiyor. `f:"1529-01-01"` yazdım ve bunun bir
   **TAHMİN** olduğunu kaydın kendi `not` alanına yazdım. Doğrulanmalı.
3. **Çobandede'nin BİTİŞ yılı bulunamadı.** TDV *"1297'de yaptırılan"* ve
   *"inşası 2,5 yıl süren"* diyor — ikisi aynı anda doğru olamaz.
   `f:"1298-01-01"` bir **yaklaştırmadır**.
4. **`tuleytula` ve `kurtuba` sluglarını SINAMADIM.** TDV'nin İberya
   kapsaması %80 ölçülmüş, yani maddeler muhtemelen VAR. Bu benim
   eksiğimdir ve *"bulunamadı"* ile *"sınanmadı"* aynı şey olmadığı için
   ayrı damgaladım.
5. **Viyana · Pojon · Regensburg · Ulm için geçit kaydı yazamadım.** TDV
   `viyana` maddesi canlı, gövdesini okudum, köprü/geçit cümlesi yok.
   Dayanaksız kayıt yazmaktansa yazmadım.
6. **Rakka köprüsünün atlas döneminde ayakta olup olmadığını ölçemedim.**
   TDV Emevî devri köprüsünü anlatıyor, sonra Moğol tahribatını anlatıyor,
   ikisini bağlamıyor. Kaydı `kopru` yazdım ama `feribot`a düşebilir —
   kaydın `not` alanında **çürütülebilir** diye duruyor.
7. **Motorun beş nehir deliği** — geçit koordinatından motorun çizdiği en
   yakın yatağa uzaklık: `Drina 114 km` · `Neretva 192 km` ·
   `Tames 228 km` · `Vâdilkebîr 214 km` · `Vardar 68 km`. Bu beş nehir
   motorun süzgecinden geçmiyor ⇒ kayıtları yazdım ama **bugün
   sınanamazlar**. Koordinatörün işi: beyaz listeye eklenmeli mi?

### ⑧ BAĞLANMAYI BEKLİYOR

```
data/gecitler.js → window.GECITLER
```
`index.html`e **bağlamadım** — şartname §7 gereği koordinatörde.

---

## 2. KABUL KAPISI — çıktısı

Şartname §3'teki ölçütlerin tamamı bir betiğe konuldu ve `CLAUDE.md §11 C13`
gereği **iki yönde de** sınandı.

**GEÇME YOLU** (gerçek veri):
```
node --check data/gecitler.js   → 0 ✓
KAYIT           : 63
tur dagilimi    : {"kopru":29,"feribot":22,"sig-gecit":2,"kale-cifti":10}
kaynak dagilimi : {"tdv_acik":45,"tdv_bulunamadi":5,"akademik":12,
                   "sinanmadi":1,"vikipedi":0}
ayri nehir      : 37
🟢 KAPI TEMIZ — 0 hata
```

**ATEŞLEME YOLU** (sahte kayıtla her dal zorlandı):
```
🟢 OTTU   alan BOS          🟢 OTTU   lat SAYI DEGIL
🟢 OTTU   tur GECERSIZ      🟢 OTTU   lat ARALIK DISI
🟢 OTTU   f BICIM           🟢 OTTU   etki_km GECERSIZ
🟢 OTTU   f >= t            🟢 OTTU   VIKIPEDI
ATESLEME: 8/8 dal otti
🟢 HER DAL SINANDI VE OTTU
```
⚠️ Kapı betiği benim yazma yetkim dışındaki `arac/` altında **değil**,
scratchpad'de. Koordinatör kalıcı isterse kaynağı istesin, gönderirim;
`arac/denetle_gecit.js` diye durabilir.

---

## 3. KENDİ HATALARIM — kayda geçiyor

🔴 **① "51 kayıt" yazdım, 63'tü.** `gecitler.js`in başlığına kaynak dağılımını
**elle** yazdım. Kapı betiği sayınca yanlış çıktı. `CLAUDE.md §11`in
*"bir sayı bir kabul ölçütüne giriyorsa veriyi kendi dilinde ayrıştır"*
kuralı — kuralı biliyordum, ihlal ettim. Düzeltildi, kayıt dosyada duruyor.

🔴 **② "Amuderya motorun süzgecinde YOK" dedim, VARDI.** Beni yanıltan şey
verideki adın `Amu  Darya` diye **çift boşluklu** yazılmış olmasıydı;
`"Amu Darya" in motor_ad` testi yanlış cevap verdi. Bu, `§11`in
*"ölçüm doğru, evren dar"* sınıfı. Düzeltildi — hem `gecitler.js`te hem
burada; **M-1000'de bu yanlış bilgi gitti**, bu raporla düzeltiliyor.

🔴 **③ Genişlik ölçümümün ilk sürümü 16 "uzak geçit" bildirdi, doğrusu 4.**
Betikte en yakın parçayı buluyor, sonra onu **adıyla yeniden arıyordum** —
aynı adlı BAŞKA bir parça bulunuyordu ve mesafe şişiyordu. Kahire için
694 km diyordu; gerçekte Nil'e 0 km. **Rapor edilmeden önce yakalandı.**

📌 Üçünün de ortak yanı: **ölçüm aletinin kendisi bozuktu, ölçtüğü şey
değil.** Ve üçünü de kendi çıktımı okurken buldum, denetim değil.
