# UYGULAMA-0019 — 29 maddenin ölçümü ve hükmü

**Oturum:** UYGULAMA-0019 · **28-29 Ağustos 2026** · koordinatör ORHANGAZİ
**Kapsam:** `parti-emrelic-0019` (27) + `parti-kasa-0010` (1) + `parti-kasa-0012` (1)
**Sayı doğrulandı:** 27+1+1 = 29 ✓
**Dosyalar:** `denetim/HUKUM-UYGULAMA-0019.json` · `data/donem_yama_p19.js`

```
cozuldu 3 · zaten-dogru 5 · tekrar 3 · senin-kararin 1 · olculecek 1 · sirada 16
```

---

## 0. 🔴 ÖNCE BİR SÖZLEŞME ÇAKIŞMASI — dosya adı

Şartname `data/yer_yama_p19.js` diyordu. Ölçtüm ve **çakışıyor**:
`arac/yama_uygula.js` başlığı birebir *"data/yer_yama\*.js dosyalarının
HEPSİNİ okur"* diyor ve okuduğu biçim **kronoloji** yamasıdır
(anahtar `[dosya, t, b]` · karar `yer_id | eksik_nokta | kapsam_genis`).
Buradaki kayıtlar **yerleşim dönemi cerrahisi**; o anahtarları taşımaz.

⇒ `yer_yama_p19.js` adıyla yazılsaydı uygulayıcı onları yakalar,
`dosya/t/b` bulamaz, hepsini *"karar-yok"* diye raporlardı.
📌 Ve bu **aletin kendi başlığında kayıtlı** kusurdur: iki teşhis raporu
`yer_yama_rumeli.js` / `_anadolu2.js` adıyla yazılmış, 9 kaydın 9'unda
`dosya` alanı çıkmamış. Üçüncü kez düşmemek için ad **ayrıldı**:
`data/donem_yama_p19.js` → `window.DONEM_YAMA_P19`.
⚠️ Koordinatöre M-1453 ve M-1462'de soruldu, **cevap gelmedi**. Riski
asimetrik olduğu için ayrık ad seçildi: o adı bugün **hiçbir alet
okumuyor**, yani zararsız bekliyor.

---

## 1. ÇÖZÜLEN ÜÇ MADDE — hepsinde tarih VERİDEN ya da KAYNAKTAN alındı

### 1.1 H-0004 — "Rumeli iki parça görünüyor"

**① NE ÖLÇTÜM:** Fetret'in tamamında (1402-07-28 · 1403 · 1406 · 1410 ·
1413) şehzade kimlikleri kullanılıyor (`suleyman-celebi` 66→123 ·
`isa-celebi` 56 · `mehmed-celebi` 7-8 · `musa-celebi` 65) **ama dört nokta
hâlâ düz `d:` OSMANLI kalıyor**:
```
Ahtapolu (Ahtopol) 42,099/27,937   Rezve (Rezovo) 41,993/28,019
İğneada 41,889/28,026              — üçü de yerlesimler_ek24.js, d: 1361-01-01
Mersin 36,800/34,633               — dördüncüsü, ve H-0008'in ta kendisi
```
**② ONDAN NE ÇIKARDIM:** Emre'nin gördüğü "iki parça" bu — şehzade gövdesi
ayrı kimlikle çizilirken bu üçü genel Osmanlı tonunda kalıyor.

🟢 **Sözleşme uydurulmadı, komşudan alındı.** Kırklareli (41,735/27,225) ·
Dereköy (41,943/27,401) · Vize (41,571/27,766) — üçünde de aynı dört dönem
aynı günlerle:
```
s: 1402-07-28 → 1410-02-13  suleyman-celebi
s: 1410-02-13 → 1410-06-15  musa-celebi
s: 1410-06-15 → 1411-02-17  suleyman-celebi
s: 1411-02-17 → 1413-07-05  musa-celebi
```
Üç kaydın 1913 dönemlerine **dokunulmadı** (zaten doğru).

### 1.2 H-0043 — Mercidabık: iki sınav, **ters** sonuç

**① NE ÖLÇTÜM:** `d:` başlangıcı tam `1516-08-24` olan **30 kayıt**
(devraldığım not 29 diyordu). Mercidabık'a uzaklıkları **11 km – 658 km**.

**② İKİ KAYDI TDV İLE SINADIM:**
| kayıt | uzaklık | TDV | hüküm |
|---|---|---|---|
| Divriği | 322 km | *"kesin olarak Osmanlı idaresine girişi… **24 Ağustos 1516 Mercidâbık Zaferi'nden sonradır**"* | 🟢 **DOĞRU** |
| Malatya | 223 km | *"ordu **28 Temmuz 1516**'da Malatya'ya ulaştı… istek kabul edilmeyince de **Malatya'yı ele geçirdi**"* | 🔴 **27 GÜN GEÇ** |

⇒ **Uzaklık tek başına ölçüt değil.** Emre'nin sezgisi 322 km'de tutmadı,
223 km'de tuttu — ve ters yönde (geç, erken değil).

⚠️ **400 km'den uzak altı kayıt** (Sincar · Telafer · Zaho · Duhok · Musul
· Akra · Rewândiz) **sınanmadı**: `musul` slug'ı ölü (302), Kürt
emirliklerinin katılımı İdris-i Bitlisî müzakereleriyle 1515-1517'ye
yayılır. **En çok şüphelendiğim küme bu ama ölçmedim.**

### 1.3 H-0069 — Halepçe enklavı

**① NE ÖLÇTÜM:** Emre'nin okuması birebir doğru:
```
Halepçe  35,178/45,986   d: 1534-12-04   ← Bağdat'ın fetih günü
Şehrizor 35,560/45,430   d: 1554-08-22   ← YİRMİ YIL SONRA
Kasr-ı Şîrîn 34,515/45,577               16. yy boyunca safevi
```
Şehrizor, Halepçe ile Osmanlı çekirdeği **arasında** (48 km kuzeybatı)
⇒ Halepçe 20 yıl boyunca **ada**.

**② HANGİSİ YANLIŞ — kaynak karar verdi.** TDV `sehrizor` (200, gövdesi
okundu): *"Zalm… **zaptedildi (23 Ramazan 961 / 22 Ağustos 1554)**. **Bölge
sancak hâline getirilerek** Murad Bey'e verildi"* ve *"Şehrizor… **Safevîler'in
yönetiminde kaldı**"*.
⇒ Osmanlı idaresine giren **bölge**dir; Halepçe onun içinde.
🟢 **Yeni gün uydurulmadı** — veride zaten var olan Şehrizor gününe hizalandı.
⚠️ Ters ihtimali (Şehrizor geç olabilir mi) kaynak çürütüyor. Halepçe için
**müstakil TDV maddesi aranmadı**; hüküm bölge maddesine dayanıyor.

---

## 2. 🔴 DÖRT DEVRALDIĞIM NOT ÇÜRÜDÜ

| madde | not diyordu | ölçüm |
|---|---|---|
| H-0022 | "başkentlerin kaydı YOK" (4 ad) | **dördü de VAR** — Suçava · Yaş · Akkirman · Târgovişte |
| H-0020 | "hiç başlanmamış" | `dunya:` alanı **kırk** kronoloji dosyasında |
| H-0056 | "29'un 27'sinin cinsi yazılmamış" | `bos:` alanına göre **29/29 DOLU** |
| H-0043 | "29 kayıt" | **30 kayıt** |

### 2.1 🔴 H-0056 — ve bu, kendi belgelediğim tuzağın **ikinci vakası**

```
`bos:` ALANINA göre        devletsiz 23 · kabile 4 · veri-yok 2  = 29/29 DOLU
`bos:` gerçekten boş olan   0
`neden:` METNİNDE cins kelimesi geçmeyen   27   ← notun sayısı
```
⇒ **Soru doğru, evren yanlış** — cins `neden:` serbest metninde değil,
`bos:` alanında duruyor.
📌 24 Ağustos'ta `BULGU-BOSLUK-CINSI.md`de aynı tuzağı belgelemiştim: orada
aynı yöntem **152** "yazılmamış" vermişti, gerçek **0**'dı. **Aynı hata iki
ayrı oturumda, beş gün arayla.**
🟢 **Öneri:** `arac/`ta tek satırlık bir yardımcı (`bos_cinsi(y)`) olsun ki
kimse `neden:` metnini bir daha cins sanmasın. *(Koordinatörün dosyası.)*

### 2.2 ⚠️ Ve bir ALET yanlış güvence veriyor

`_yer_ara.py` "Târgovişte" için şunu bastı:
> *"KAYIT YOK — ve bu hüküm **GÜVENİLİR** (55 dosyanın tamamı tarandı)"*

**Yanlıştı.** Kayıt vardı (44,925/25,457); ben ASCII varyantları aramıştım,
veri `Târgovişte` (â + ş) yazıyor. Kaydı **kutu taraması** buldu.
⇒ Güvence yalnız **aranan dize** için geçerli, **kayıt** için değil — ve
okuru doğrulamaktan alıkoyuyor. Satır *"bu dize için güvenilir; ad ekseni
için `--kutu` ile teyit et"* demeli.

---

## 3. SENİN KARARIN: H-0008 Mersin

Not *"1352'den beri OSMANLI"* diyor; doğru, ve komşuları çürütüyor
(Tarsus 30 km, Adana 60 km — ikisi de `ramazanoglu` 1352→1516).
🔴 **Ama TDV gövdesi daha derin bir kusur gösterdi: Mersin o tarihte
yerleşim değildi.**
```
"adına İLK DEFA Evliya Çelebi'nin Seyahatnâme'sinde rastlanır ... 1671"
"19. yy ilk nüfus sayımında ADI GEÇMEZ"
"1836'ya doğru ... Mersin KÖYÜNÜN Tarsus'un iskelesi hâline geldiği"
"1852 nahiye · 1864 kaza · 1888 sancak"
```
İki `kur:` şıkkı yamada **askıda** yazılı — **1671** (en erken) / **1836**
(en sağlam). Seçim Çukurova kıyısını **165 yıl** boyunca değiştiriyor.
⚠️ 1836 seçilirse `v: 1832-1841` (Kavalalı) kuruluştan **önce** başlar;
1671'de bu sorun yok.

---

## 4. İKİ KÖK, ALTI MADDE — ayrı iş sanılmasın

```
`v[].k` motor tarafından OKUNMUYOR   →  H-0022 · H-0025      (etiket görünmüyor)
"planlanan" hareket türü YOK          →  H-0041 · H-0062
kronoloji BAŞLIĞI o gün kırılan       →  H-0045 · H-0047 · H-0048
   öteki yerleşimleri anmıyor
Van'ın yanındaki "pembe" = safevi      →  H-0077 · H-0078
```
Her kümede **tek düzeltme hepsini** kapatır.

📌 **En ucuz kalem H-0051:** sebep tek satır — `js/app.js:3110`
`scrollIntoView({block:"nearest"})`, Emre'nin istediği `block:"start"`.

---

## 5. NE ÖLÇMEDİM — açıkça

1. **H-0003** doğu Anadolu — devraldığım taban **makul** görünüyor
   (Yıldırım'ın Sivas/Malatya kazanımlarının Ankara'dan sonra kaybı
   desenine uyuyor) ama **kutuyu kendim taramadım.**
2. **Mercidabık'ın uzak altı kaydı** (Musul çevresi) — en şüphelendiğim
   küme, sınanmadı.
3. **H-0045 · H-0048** kırılma kümeleri — devraldığım sayıları
   **doğrulamadım**, aktardım.
4. **H-0058** "`savaslar.js`te 0 eşleşme" — devraldım, tekrarlamadım.
5. **H-0076** Zeydî imamlığının sürekliliği — genel tarih bilgisi,
   **TDV maddesiyle sınamadım.**
6. **H-0077** renk değerleri (`#a56cab`) — devraldım, `renkler.py`den
   doğrulamadım.
7. **kasa-0010 · kasa-0012** — ClaudEmre sistem tarafı; tasarımı
   değerlendirdim, **uygulamadım.**

---

## 5.5 🔴 29 AĞUSTOS EKİ — İKİ GERİ ÇEKME VE BİR BİÇİM DÜZELTMESİ

### 5.5.1 H-0043 Malatya yaması ASKIYA ALINDI — kaynak çelişkisi

Mercidabık'ın **sınanmamış uzak kayıtlarını** (kendi açık bıraktığım kalem)
kapatmaya çalışırken ikinci bir TDV maddesi birincisini gerdi:

| madde | ne diyor | ne demek |
|---|---|---|
| `malatya` | *"ordu **28 Temmuz 1516**'da… ulaştı… **Malatya'yı ele geçirdi**"* | askerî zapt, Mercidabık'tan **ÖNCE** |
| `idris-i-bitlisi` | *"**Halep'in ilhakını müteakip bu seferden dönüşünde** Malatya, Urfa, Besni, Ergani, Harput, **Divriği**, Siverek ve kesin olarak Mardin… Osmanlı idaresine girmesini sağladı"* | kesin ilhak, Halep'ten (1516-08-28) **SONRA** |

⇒ İkisi ayrı şeyler olabilir (**geçici askerî kontrol** vs **kesin idarî
ilhak**) ya da biri ötekini çürütüyor. **Ayırt edemedim** ve ortak kural
açık: *"kaynaklar çelişiyorsa hangisini seçeceğine sen karar verme."*

🔴 **Ve aynı pasaj Divriği'yi de sayıyor** — yani `§1.2`de verdiğim
*"Divriği DOĞRU"* hükmü de bu ikinci kaynakla gerilimde. **O hükmü de
şüpheli işaretliyorum.**
📌 Kendi bulgusunu geri çekmek, yanlış bir düzeltmeyi indirmekten ucuzdur.

**Uzak altı kayıt için slug taraması — hepsi ölü:**
```
🔴 302  musul--sehir · musul-vilayeti · sincar · zaho · duhok · akra
        revanduz · diyarbekir
🟢 200  idris-i-bitlisi · cizre · bitlis
```
⇒ Bu küme tek maddeden çözülmez; `cizre` + `bitlis` + `idris-i-bitlisi`
gövdeleri ve akademik kaynak gerektiren **ayrı bir parti**.
**Ben açtım, kapatamadım.**

### 5.5.2 H-0003 kapandı — `olculecek` → `zaten-dogru`

Doğu Anadolu kutusu (37,0-40,5K / 38,0-45,0D · 43 nokta) tarandı:
```
1402-07-20  akkoyunlu 15 · OSMANLI 8 · karakoyunlu 7 · artuklu 4 ·
            timurlu 4 · memluk 2 · celayirli 2 · gurcistan 1
1402-07-28  akkoyunlu 16 · karakoyunlu 7 · MEMLUK 7 · artuklu 4 ·
            timurlu 4 · MUTAHHARTEN 2 · celayirli 2 · gurcistan 1
```
**Değişen 8 nokta, hepsi Osmanlı'dan çıkıyor:** Malatya · Divriği ·
Arapkir · Kâhta · Hısn-ı Mansûr → `memluk` · Erzincan · Kelkit →
`mutahharten` · Kemah → `akkoyunlu`.
⇒ **Tarihen doğru:** Yıldırım'ın 1399 doğu kazanımları Memlûk'e dönüyor,
Erzincan Timur'un iade ettiği Mutahharten'e geçiyor. Sahipsiz kalan yok.

### 5.5.3 🔴 Dosya adı: kaçındığım çakışma, ters yönden ısırdı

`yama_uygula.js` ile çakışmamak için `donem_yama_p19.js` adını seçmiştim.
Koordinatör M-1508'de uyguladığı dört yamayı saydı — **benimki listede
yok**, çünkü `yer_yama*` kalıbını tarıyor.
⇒ **Çakışmadan kaçınırken görünmez olmuşum: ters yönde aynı kusur.**
📌 Bir ad alanından kaçınmak, o ad alanına bağlı **görünürlükten** de
kaçınmaktır. İkisini birden ölçmek gerekiyordu.

**Çare:** `data/yer_yama_p19.js` → `window.YER_YAMA_P19`, ve biçim
çalışan yamalardan (`yer_yama_uyg1.js`) kopyalandı: **`ad:` + tam dönem
dizileri** (fark değil, kaydın yeni hâli). Askıda olan iki kayıt
(Mersin · Malatya) diziye **konmadı** ki kazara uygulanmasın.

---

## 6. YAN BULGU

`Adapazarı` (40,780/30,403) **1403-06-15'te sahipsiz görünüyor** —
`Değişmez 1` adayı, bu paketin maddesi değil, koordinatöre bildirildi.
