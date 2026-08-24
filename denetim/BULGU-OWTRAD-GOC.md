<!-- DURUM: BITTI | 2026-08-25 | OPUS HAZIR KITA 82 | OWTRAD tmcTRm1300 gocu -->
# OWTRAD GÖÇÜ — `tmcTRm1300` · Osmanlı 1300-1600

**Oturum:** OPUS HAZIR KITA 82 · **Tarih:** 25 Ağustos 2026
**Karar:** Emre — *"OWTRAD'ın 1300-1600 Osmanlı kümesiyle başlayalım."*

> 🟢 **LİSANS KARARI GELDİ (koordinatör, 25 Ağu 2026) — dosya yerinde:**
> `data/koridor_owtrad.js` → `window.KORIDOR_OWTRAD` · 61.476 bayt ·
> `node --check` temiz · 154 düğüm / 174 kenar.
>
> Karar verilene kadar dosya **kasten `data/` altına yazılmadı**: depo GitHub
> Pages ile yayınlanıyor, yani `data/` altına yazmak *yeniden dağıtımın ta
> kendisi* — ve OWTRAD iki farklı lisans beyan ediyor (§①).

---

## ⓪ ÖNCE KENDİ SAYIMI DÜZELTİYORUM — "175 kenar" YANLIŞTI

Önceki raporumda (`BULGU-KORIDOR-KAYNAK.md`) bu küme için **175 kenar / 156
düğüm** yazmıştım. İkisi de yanlıştı ve ikisi de **benim ayrıştırma
kusurumdu**:

```
kenar   HTML gomulu CSV'de 174 VERI satiri + 1 BASLIK satiri
        ⇒ basligi veri saymisim.          DOGRUSU: 174
dugum   uclari ayri ayri toplarken tekrar saymisim.
        nodes.mid dogrudan soyluyor:      DOGRUSU: 154
```
🟢 **Ve düzeltme, koordinatörün ① maddesini kapattı:** indirilebilir sürüm ile
HTML gömülü CSV **satır sayısında birebir aynı** — 174/174, fazla kenar 0,
eksik kenar 0 (`NODE1→NODE2` anahtarıyla karşılaştırıldı).

📌 Yani *"fark var"* ilk izlenimi **benim hatamdı**, verinin değil. Bunu böyle
yazıyorum çünkü bir sonraki oturum `BULGU-KORIDOR-KAYNAK.md`deki 175'i taban
alırsa yanlış zeminden başlar.

---

## ① 🔴 LİSANS — AYNI VERİ KÜMESİ, İKİ FARKLI LİSANS

Koordinatör *"lisans metnini KENDİN OKU, ben özetten yazdım"* dedi. Okudum ve
**iki ayrı yerde iki ayrı cevap** buldum:

| nerede | ne diyor |
|---|---|
| HTML sayfası, `dc.rights` | *"...Creative Commons **Attribution-Noncommercial 2.5** License"* — `creativecommons.org/licenses/by-nc/2.5/` |
| İndirilebilir ZIP, `tmcTRm1300.meta.txt`, `dc.rights` | *"...**OPEN PUBLICATION LICENSE, v1.0** or later"* — `opencontent.org/opl.shtml` |

🔴 **Ve ikisi aynı şey değil — çelişkinin YÖNÜ önemli:**
```
CC BY-NC 2.5   ticari kullanimi YASAKLAR
OPL v1.0       varsayilan olarak YASAKLAMAZ; yasak ancak yazar istege bagli
               maddeleri ACIKCA cagirirsa dogar
⇒ BIRI OTEKINDEN GEVSEK.
```
Hangisinin daha yeni olduğu da **belirsiz**:
```
HTML sayfasi   "Last updated: 11 Feb 2006"
ZIP dosyasi    zaman damgasi 13 Agu 2006   ← DAHA YENI ama DAHA FAKIR (§③)
```

📌 Bu, projenin *"bir bilgi iki yerde duruyorsa biri güncellenince öteki
bayatlar"* dersinin **dış kaynak** hâli. Şimdiye kadarki vakalarda ayrışan iki
otorite **bizimdi**; burada ayrışan **kaynağın kendi iki beyanı** — ve
hangisinin okunduğunu seçen taraf **biziz.**

### ② ÇIKARDIĞIM — ve hüküm VERMEDİĞİM yer
Bu bir **hukuk** sorusu, benim yetkim dışında. **Hüküm vermedim**, ihtiyatlı
davrandım: işi durdurmadım, yalnız veriyi `data/` altına yazmadım.

🟢 **Önerim: en KISITLAYICI olanı (CC BY-NC 2.5) varsayalım.** Hangisi geçerli
olursa olsun ihlal edilmez, ve koordinatörün yazdığı iki yükümlülük **aynen**
korunur — yani atıf metni değişmez.

### 🟢 KARAR — koordinatör, 25 Ağustos 2026: **CC BY-NC 2.5 varsayılıyor**

🔴 **VE KARARIN CİNSİ, KARARIN KENDİSİ KADAR ÖNEMLİ — bu bir hukukî yorum
DEĞİL, TEMKİNDİR.** İki beyandan hangisinin geçerli olduğunu **seçmiyoruz**;
daha **dar** olanına uyuyoruz, böylece **seçim yapmaya gerek kalmıyor.**
```
🔴 OPL ELENMIS DEGILDIR.
   Celiski COZULMEDI — ETKISIZ BIRAKILDI.
```
⚠️ Bir sonraki oturum bunu *"koordinatör OPL'yi eledi"* diye okumasın: eleme
bir **hüküm** olurdu, oysa verilen şey bir **kaçınmadır.** Aradaki fark,
yarın biri *"madem OPL elendi, gerekçesi neydi?"* diye sorduğunda ortaya
çıkar — **gerekçe yok, çünkü eleme yok.**

**Doğan borç (kaydedildi):** atlas ileride bağış/reklam/kurumsal kullanıma
açılırsa **bu veri çıkarılmalıdır.** Sebep: **CC okumasındaki NC şartı** — OPL
okuması altında böyle bir şart olmayabilir. Borcun *sebebi* böyle yazıldı ki
şart değişirse borç yeniden değerlendirilebilsin.

---

## ② ATIF — koordinatörün iki cümlesi doğrulandı, biri EKSİKTİ

| yükümlülük | hüküm |
|---|---|
| **BY** — atıf zorunlu | 🟢 doğru, **ama EKSİK: iki değil ÜÇ atıf** |
| **NC** — ticarî olmayan | 🟢 doğru — *CC okumasına göre*. OPL okumasında böyle bir şart olmayabilir |

🔴 **Üçüncü atıf `SRC` alanı sayılınca çıktı** ve önceki raporumda
**atlamıştım**:
```
Inalcik 2000:map                 114 kenar
Inalcik & Quartet 1997:220-221    60 kenar
                                 ───
                                 174
```
⇒ Tek bir İnalcık değil **iki ayrı İnalcık kaynağı** var. Kaynak dosyasının
başına üçü de yazıldı.

🔴 **Ve NC borcunun gerekçesi düzeltildi:** koordinatörün *"ileride
bağış/reklam olursa bu veri çıkarılmalı"* borcu **CC okuması altında** geçerli.
Borcu kaydedelim ama sebebini *"CC okuması"* diye yazalım — OPL okuması altında
gerekmeyebilir.

### `index.html` attribution satırı için METİN
Koordinatör metni istedi (satırı kendisi ekleyecek). Bugün orada
*"Altlık: Esri · Coğrafya: Natural Earth"* yazıyor; önerdiğim ek:

```
· Koridor agi: OWTRAD (T. M. Ciolek, ANU) — CC BY-NC 2.5 · kaynak harita: Inalcik 2000
```
Dar ekranda kısaltılacaksa **atılmaması gereken parça** `OWTRAD` ve
`CC BY-NC 2.5`tir; `İnalcık 2000` künyeye taşınabilir.

---

## ③ SÜRPRİZ — İNDİRİLEBİLİR SÜRÜM DAHA **FAKİR**

Sezgi *"indirilebilir sürüm kanoniktir"* der. **Ölçtüm, tersi çıktı:**

```
ZIP  routes.mid   17 sutun
HTML gomulu CSV   29 sutun
```
**ZIP'te OLMAYAN 12 sütun:**
```
🔴 LONG1 · LAT1 · LONG2 · LAT2      KOORDINATLAR
🔴 SRC                              KAYNAK ATFI (Inalcik...)
   DATAQLTY · COORDSRC1 · COORDSRC2 · NODEID1 · NODEID2 · PROBL · DATAID
```
Koordinatlar ayrı `nodes.mid`de var (154 düğüm), ama **kenar–kaynak
eşleşmesi ZIP'te hiç yok** — yani indirilebilir sürümle çalışan biri
`İnalcık 2000` ile `İnalcık & Quartet 1997` ayrımını **yapamaz.**

🟢 **HÜKÜM: HTML'e gömülü CSV zengin sürümdür, göçte O kullanılmalı.** İlk
ayrıştırmam doğru kaynaktan yapılmış — ama bu artık **şans değil, ölçüm.**

**Tek gerçek veri farkı:** `ROLE` alanı, 174 kenarın **63**'ünde
`HTML="min"` / `ZIP="sec"`; öteki 111'de ikisi de `"maj"`. Ayrışan sütun
sayısı: **1**.
🟢 **Ve bunun çelişki olmadığını kaynağın KENDİ sözlüğü söylüyor**
(`owtrad/notation.html`): `min - minor, secondary, subsidiary`. ⇒ Sözlük
değişikliği, veri çelişkisi değil.

---

## ④ ÖLÇÜM — düğüm, kenar, eşleşme

### Küme
```
kenar              174        tur: cd 131 · sl 43
dugum              154        cins: yerlesim 107 · ara-nokta (sentetik) 47
rol                maj 111 · min 63
kaynak             Inalcik 2000:map 114 · Inalcik & Quartet 1997 60
veri kalitesi      QC4 (174/174 ayni)
```

🔴 **`sl` = SEA LANE. 43 kenar KARA KORİDORU DEĞİL.** Kaynağın kendi
sözlüğünden: *"sl - sea lane, shipping lane, a maritime line of communication
(this includes coastal, or shore-hugging communication lines)"*.
⇒ **Gerçek kara koridoru sayısı 174 değil, 131.** Bu ayrım veriye `tur`
alanıyla girdi; kullanan taraf süzmek zorunda.

🟢 **Ve `cd` kodunun tanımı bizim modelimizle BİREBİR örtüşüyor:**
> *"cd - **corridor, unimproved configuration of terrain used**"*

Yani OWTRAD'ın `cd`si yapılmış bir yol değil, **arazinin kendisinin kullanıldığı
bir geçiş hattı** — `ALTYAPI ⑤`in *koridor* kavramının tam karşılığı.
Kelime tesadüfü değil, **kavram örtüşmesi.**

### 🔴 DOLU SANILMAMASI GEREKEN İKİ ALAN
```
DIST     (uzunluk)   174/174  "d000dd"  = BOS
TRAVTIME (sure)      174/174  "t000t"   = BOS
TRAVMODE (tasima)    174/174  "nkn"     = BOS
```
⇒ **OWTRAD bu kümede mesafe ve süre VERMİYOR.** Şema destekliyor, veri boş.
📌 `ORBIS` önerisi tam bu boşluğu doldurmak içindi (kenarda km + gün) — ama
ORBIS Roma dönemi. **İki kaynak da bu alanı boş bırakıyor.**

### Eşleşme — 107 gerçek adlı düğüm
```
ADLA eslesen (bizde ZATEN VAR)         35
3 KM KURALIYLA eslesen (ad tutmadi)     6
                                       ──
BIZDE VAR                              41
3-15 km — SUPHELI, elle bakilmali       1   (Suçava ↔ Suceava, 4,1 km)
YENI ADAY (>15 km)                     65
                                       ──
TOPLAM                                107
```
⚠️ **Ara ölçümde bu dağılım `26 + 15` görünüyordu; toplamı yine 41'di.** Fark
yalnız ad sözlüğünü genişletmemden (`Caffa→Kefe`, `Lwow→Lvov`, `Azov→Azak`…):
dokuz eşleşme *"3 km"* kovasından *"ad"* kovasına geçti. **Kova değişti, sayı
değişmedi** — iki rakamı yan yana gören yanılmasın diye yazıyorum.

**3 km kuralının yakaladıkları — ad tutmuyor ama AYNI YER:**
```
Caffa ↔ Kefe 0,18   Monastir ↔ Manastır 0,29   Essek ↔ Ösek 0,33
Ohrida ↔ Ohri 0,38  Akkerman ↔ Akkirman 0,64   Azov ↔ Azak 0,78
Babadag ↔ Babadağı 0,92   Isaccea ↔ İshakçı 0,93   Jassy ↔ Yaş 1,08
Salonika ↔ Selanik 1,21   Elbasan ↔ İlbasan 1,45  Durazzo ↔ Draç 1,94
Lwow ↔ Lvov 2,28    Diyarbekir ↔ Diyarbakır 2,48  Sarajevo ↔ Saraybosna 2,50
```
📌 **Onbeşi de mükerrer kayıt olacaktı.** `§11`in Varat/Varad dersi burada
**onbeş kez** ateşledi — ve hepsi *"ad tutmuyor"* diye yeni düğüm olarak
yazılabilirdi.

🟢 **Ters yönde hiç kusur yok:** *"adla eşleşti ama uzak"* kovası **BOŞ** —
yani aynı adı taşıyıp başka yerde duran tek bir çift bile çıkmadı.

⚠️ **Tek şüpheli: Suçava.** 4,1 km, yani 3 km kuralının **dışında** ama yeni
düğüm saymak da yanlış görünüyor. **Elle bakılmalı** — hüküm vermedim.

---

## ⑤ VIA MILITARIS — bizim Rumeli kolumuzla ÖRTÜŞÜYOR

Koordinatörün sorusu: *"örtüşüyor mu, ayrışıyor mu? Ayrışıyorsa hangisi doğru —
ölç, hüküm verme."*

| OWTRAD | bizdeki | durum |
|---|---|---|
| Buda | Budin | 🟢 var |
| Mohacs | Mohaç | 🟢 var |
| Essek | Ösek (Osijek) | 🟢 var |
| Belgrade | Belgrad | 🟡 **4 km** |
| Nish | Niş | 🟢 var |
| Sofia | Sofya | 🟢 var |
| **Tatar-Pazarjik** | — | 🔴 **YOK** (en yakın Filibe, 35 km) |
| Filibe | Filibe | 🟢 var |
| Edirne | Edirne | 🟢 var |

**Ve dokuz durağın sekiz kenarının SEKİZİ de OWTRAD'da var** — zincir kopuk
değil.

### ② ÇIKARDIĞIM
```
ORTUSME   9 duraktan 8'i bizde  ⇒ AYRISMA YOK, zincir DOGRULANDI
EKSIK     Tatar-Pazarcik (Pazarcik) — bizde HIC YOK
SAPMA     Belgrad 4 km — hangisinin dogru oldugunu OLCMEDIM
```
🔴 **Tatar-Pazarcık gerçek bir boşluk** ve `KORIDOR-OLCUM-15AGU.md`nin *"18
eksik menzil kasabası"* bulgusuyla **aynı sınıfta**: Sofya–Filibe arasındaki
duraklardan biri. Bağımsız bir kaynak (İnalcık haritası) aynı cinsten bir
deliği **ikinci kez** gösterdi.
📌 O belgenin dersi burada tekrarlandı: **koridor ağı bir DENETİM ALETİDİR.**

🟡 **Belgrad'ın 4 km'si bir hüküm değil, bir sorudur.** OWTRAD `44,833 /
20,500` diyor — bunlar **yuvarlak** sayılar (1:8M taslak harita, §③). Bizim
kaydımız daha hassas olabilir. **Ölçmedim, düzeltme önermiyorum.**

---

## ⑥ SENTETİK DÜĞÜMLER — 47 kayıt, `cins:"ara-nokta"`

Koordinatörün ② maddesi. Biçimde ayrıldı: her düğüm `cins` alanı taşıyor
(`"yerlesim"` / `"ara-nokta"`), ve ara-noktaların eşleşme alanı **hiç
doldurulmadı** — yani eşleştirme mantığına bile girmiyorlar.

🔴 **Dosya başına şu uyarı yazıldı:** bu 47 kayıt `data/yerlesimler*.js` içine
**asla** girmez; girerlerse `CLAUDE.md §2` gereği etraflarında **petek açılır**
ve haritada **olmayan bir sahiplik** üretir.

---

## ⑦ 🔴 ÇÖZÜNÜRLÜK DAMGASI — bir sonraki oturum için

```
dc.coverage.spatial.resolution = "800 (approx 1:8M sketch map)"
```
**Bu veri geçide yaslanmaz.** Kaynağı bir kitap haritasıdır. Bu küme
**koridorun VARLIĞINI** söyler, **GÜZERGÂHINI DEĞİL.** Motorun topoğrafyaya
yaslanması için kullanılamaz; onun için **Itiner-e** (CC BY 4.0, gerçek yol
geometrisi) gerekiyor ve **o ayrı bir iştir.**

Damga hem bu raporda hem de üretilen dosyanın başında duruyor.

⚠️ **Ve kaynağın sürekliliği hakkında bir gözlem:** `owtrad/notation.html`
sayfası bugün **SEO çöpüyle doldurulmuş** durumda (spor forması reklam
bağlantıları metnin içine karışmış). Veri dosyaları sağlam ve 2005-2006
damgalı, ama **site bakımsız.** ⇒ Kullanılacaksa **yerel kopya alınmalı**;
kaynağa her seferinde çevrimiçi gitmeye güvenilmemeli. *(Bunu ölçmedim, gözle
gördüm — bir kestirim, ölçüm değil.)*

---

## ⑧ TESLİM DURUMU

```
🟢 data/koridor_owtrad.js   61.476 bayt · node --check TEMIZ (cikis 0)
                            yuklendiginde window.KORIDOR_OWTRAD ✓
                            dugum 154 · kenar 174 · kunye dolu
                            ad alani carpismasi: YOK (grep -l, tek dosya)
🟢 denetim/BULGU-OWTRAD-GOC.md   bu rapor
⚪ scratchpad kopyasi SILINDI    iki otorite dogmasin diye
🔴 index.html · data/yerlesimler*.js   DOKUNULMADI (ikisi de koordinatorde)
```

⚠️ **`index.html`e satır eklenmedi** — dosya koordinatörde. Yani bu veri
**diskte duruyor ama motor henüz OKUMUYOR.** `CLAUDE.md §5`in *"bağlanmamış
veri dosyası üç kez yaşandı: dosya diskte durdu, motor okumadı, denetim temiz
raporladı"* uyarısı **bugün için geçerlidir**; bu bir kusur değil **kayıtlı bir
gecikmedir.**

**Değişken adı `§7`ye uygun:** `data/koridor_owtrad.js` → `window.KORIDOR_OWTRAD`
— dosya adındaki ayırt edici parça (`owtrad`) değişken adında da duruyor.

## Sayıyla — koordinatörün istediği biçimde
```
154 dugum -> bizde var 41 · yeni aday 65 · supheli 1 · SENTETIK 47
174 kenar -> kara koridoru (cd) 131 · deniz hatti (sl) 43
Via Militaris: 9 duraktan 8'i bizde · eksik 1 (Tatar-Pazarcik) · 8/8 kenar VAR
iki surum: satir sayisi AYNI (174/174) · ayrisan sutun 1 (ROLE, sozluk farki)
```

## ÖLÇMEDİKLERİM — açıkça
```
· Belgrad'in 4 km'sinde HANGISININ dogru oldugunu olcmedim.
· Sucava'nin (4,1 km) ayni yer olup olmadigina hukum vermedim.
· 65 yeni adayin HICBIRINI TDV ile dogrulamadim — bu ayri bir istir.
· Lisans celiskisine HUKUM VERMEDIM; ihtiyatli okuma ONERDIM.
· ciolek.com'un bakimsizligi GOZLE gorulen bir kestirim, olcum degil.
· KML surumu "[under construction]" — HIC denemedim.
```

## Aletler (scratchpad, depoya girmedi)
```
owtrad_karsilastir.py   indirilebilir ZIP ile HTML CSV'nin karsilastirilmasi
owtrad_ayrisma.py       sema · satir · alan · LISANS ayrismasinin tam olcusu
owtrad_esle.py          154 dugumun bizim 124 dugumle eslenmesi, 3 km kurali
owtrad_uret.py          koridor_owtrad.js ureteci (elle duzenlenmez)
```
