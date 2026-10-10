# KASA-A14-TEYIT-1010 — ÖZ-İLAN A türü 14 kaydın notlarını KENDİ kaynağıyla teyit (Klagenfurt kuralı)

Görev: YILDIRIM BAYEZIT (OZ-ILAN-HUKUM ③e, sıranın başı) · Araştırmacı: KASA · `data/` DONUK · salt okuma ·
`main` 534633f8.
Kural (koordinatör, bu gece): **bir kaydın KENDİ itirafı da bir ATLAS KAYDIDIR, kaynak değildir** (§4). Aday bedava,
kanıt değil. Her notun iddiası, notun andığı kaynakta (yoksa §4 kapsam ekseninin birincil kaynağında) şehir adıyla
aranır.

## 0. ÖNGÖRÜ ve ÖLÇÜT (ölçümden ÖNCE — ayrı commit)
### 0.1 Birim: kayıt değil İDDİA (14 kayıt → 17 iddia)
| # | kayıt | notun iddiası |
|---|---|---|
| 1 | Alaşehir | 1391'e kadar Bizans (atlasın 1300-1390 `germiyan`'ı yanlış) |
| 2 | Behisni | Timur 27 Eylül 1400'de zaptetti |
| 3 | Behisni | "Bir ara Dulkadıroğulları'nın idaresine tâbi oldu" (1418) |
| 4 | Draç | 1368 → 1388/1392 Thopia (sonra Venedik) |
| 5 | Hama | 1310-1342 Eyyûbî Hama (Ebü'l-Fidâ ve oğlu) |
| 6 | Silistre | 1916-1918 Bulgar geri alışı |
| 7 | Aosta | 1800-1814 Fransız ilhakı (Doire departmanı) |
| 8 | Görice | 1912-1914 Yunan işgali |
| 9 | Klagenfurt | 1809-1813 İlirya illeri |
| 10 | Klagenfurt | Haziran-Temmuz 1919 SHS işgali |
| 11 | Lienz | 1810-1813 İlirya illerine bağlanış |
| 12 | Rēzekne | 1918-1920 Sovyet/Alman dönemi (Letonya idaresi Ocak 1920) |
| 13 | Thonon | 1536-1567 Bern işgali (Lozan 1564, iade 1567) |
| 14 | Thonon | 1792-1815 Fransız ilhakı |
| 15 | Bayburt | 1422-1462'nin bir kısmı Akkoyunlu DEĞİL (Karakoyunlu idaresi) |
| 16 | Bayburt | 1878 ve 1916 Rus işgalleri |
| 17 | Eisenstadt | 1463/1491 → 1647 Habsburg (Batı Macar beylikleri) |
### 0.2 Hükümler
- **TEYİT:** şehir adlı tanık iddiayı (sahip + aralık ± 5 yıl; kısa işgalde ± 1 yıl) karşılıyor.
- **ÇÜRÜDÜ:** şehir adlı tanık iddiaya aykırı (başka sahip, ya da şehrin söz konusu birime girmediği).
- **ÖLÇÜLEMEDİ:** şehir adlı tanık yok, yalnız bölge cümlesi (S, taşınmaz), ya da kaynak yıl/süre vermiyor.
- Ayrıca her TEYİT için **"düzeltme hazır mı"**: gün/yıl ve `d:`/`v:`/`isg:` sınıfı belli mi.
- Kaynak: İslâm dünyası (1, 2, 3, 5, 15, 16; 8 TDV andığı için) TDV birincil; ötekiler akademik/ansiklopedik birincil
  (Tesalya dersi). Vikipedi tanık değil.
### 0.3 Öngörü (sayımdan ve okumadan önce)
- **TEYİT 11 (aralık 9-13)** — beklediklerim: 1, 4, 6, 7, 8, 10, 11, 13, 14, 16, 17.
- **ÇÜRÜDÜ 1 (aralık 0-3)** — en olası: **9 Klagenfurt-İlirya** (%60; EB1911 "Upper or Western Carinthia").
- **ÖLÇÜLEMEDİ 5 (aralık 3-7)** — en olası: 2 ve 3 Behisni (süre/yıl yok), 5 Hama (olgu teyit edilir ama `v:`/`d:`
  ayrımı kaynakta yok ⇒ düzeltme sınıfı ölçülemez — TEYİT de sayılabilir, sınırda), 12 Rēzekne (şehir adlı tanık
  zor), 15 Bayburt (not kendisi "yıl yok" diyor).
- TEYİT edilenlerin **düzeltmesi hazır olanı: 7 (aralık 4-9)**; geri kalanı gün/sınıf eksik.
- Notun kaynağını ANDIĞI iddialar (1, 2, 3, 4, 5, 8, 16, 17 — TDV/AEIOU adıyla) andığı kaynakta **%85** teyit
  edilir; kaynak anmayanlar (7, 9, 10, 11, 12, 13, 14) **%70**.
- Yanlışlanma: ÇÜRÜDÜ ≥ 4 ⇒ öz-ilan notları kaynak düzeyinde güvenilmez; A türünün FAZ 2'ye toptan girmesi
  REDDEDİLİR (tek tek teyitsiz hiçbiri girmez).

## 1. ÖLÇÜM
Kaynak: TDV gövdeleri (1-5, 8, 15, 16; KASA okudu) · akademik/ansiklopedik (6, 7, 9-14, 17; bir okuyucu, birebir
alıntı + URL: `scratchpad/okuma_A14_avrupa.md`). `main` 534633f8 zincirleri okundu.
| # | kayıt | iddia | hüküm | tanık (birebir) | düzeltme hazır mı |
|---|---|---|---|---|---|
| 1 | Alaşehir | 1391'e kadar Bizans | **TEYİT** | TDV `alasehir`: *"Böylece Batı Anadolu'da Türkler'in eline geçmeyen tek Bizans şehri olarak 1391'de Yıldırım Bayezid tarafından fethedilinceye kadar varlığını korudu."* · ⚠️ aynı madde: *"şehir Germiyanoğulları tarafından yeniden kuşatıldı ve haraca bağlandı"* | **HAZIR** (yıl): `bizans` 1281 → 1391; `germiyan` 1300-1390 `d:` → **`v:germiyan`** (haraç = tâbiyet; Madrid/Sevilla emsali). Ayrıca: *"1402'de Timur'un istilâsına uğradı; onun çekilmesinden sonra da İzmir beyi Aydınoğlu Cüneyd Bey'in eline geçti"* — atlas 1402-1429 `germiyan` ⇒ **yeni çelişki** (Aydınoğlu) |
| 2 | Behisni | Timur 27 Eylül 1400 | **TEYİT** | TDV `besni`: *"Ancak Timur 27 Eylül 1400'de şiddetli bir muhasaradan sonra burayı zaptetti."* | hayır (çekiliş günü yok) |
| 3 | Behisni | Dulkadir "bir ara" (1418) | **TEYİT** (baş) | TDV `dulkadirogullari`: *"Fakat Mehmed Bey 1418'de Dârende'yi tekrar aldığı gibi Besni'yi de ülkesine kattı."* · TDV `besni`: *"Bir ara Dulkadıroğulları'nın idaresine tâbi oldu ise de XV. yüzyılın sonlarına doğru yeniden Memlükler'in eline geçti."* | kısmi (baş 1418; son yılsız) |
| 4 | Draç | Thopia 1368 → 1388/1392 | **TEYİT** (baş) | TDV `drac`: *"Charles Thopia 1368'de Draç'ı ele geçirdi ve ölümüne kadar (1388) kendisine başşehir … yaptı."* · *"Thopia'nın oğlu George tarafından Venedik'e bırakıldı"* (yılsız) | kısmi: ⑥ son yıl — notun 1392'si KAYNAKSIZ; EB1911 "Durazzo" *"in 1394 to Venice"*. ⑥ ek: EB1911 *"in 1336 to Servia"* ↔ TDV *"Duşan, Draç hariç bütün Arnavutluk'u zaptetti"* |
| 5 | Hama | 1310-1342 Eyyûbî Hama | **TEYİT** (olgu) | TDV `hama`: *"Hama'ya nâib tayin edildi (8 Cemâziyelevvel 710/3 Ekim 1310)"* · *"30 Ağustos 1312 … Hama meliki oldu"* · *"sultan unvanını aldı (… 28 Şubat 1320)"* | **HAZIR** (gün): `eyyubi-hama` künyesi VAR, t 1342-01-01 ⇒ 1310-10-03 → 1342 `d:eyyubi-hama` + `v:memluk` (atanmış melik = tâbi; Madrid emsali) |
| 6 | Silistre | 1916-1918 Bulgar | **TEYİT** | EB1922 "Rumania": *"advanced through unresisting Silistra into the Dobrudja"* (1916) · FRUS 1919 II d176 (Silistra departmanı, 18 Aralık 1918 tahliye takvimi) | kısmi (baş yıl; son bir PLAN günü, fiilî değil) |
| 7 | Aosta | 1800-1814 Fransız | **TEYİT** | Enciclopedia Italiana 1929 "Aosta": *"nonostante brevi dominazioni francesi nel 1691, 1704-1706, 1798-99, 1800-1814"* | **HAZIR** (yıl) · ek: 1691, 1704-06 (> 1 yıl), 1798-99 da yazılmamış |
| 8 | Görice | 1912-1914 Yunan | **TEYİT** | TDV `gorice`: *"1912-1914 Balkan savaşları sırasında Görice Yunanlılar tarafından ele geçirildi."* | kısmi (yıllar kaba) · **yeni:** TDV *"Görice protokolü Şubat 1918'de Fransa tarafından bozuldu; Fransa Görice ve yöresinin yönetimini doğrudan ele aldı"* — atlasta Fransız dönemi YOK |
| 9 | Klagenfurt | 1809-1813 İlirya illeri | **ÇÜRÜDÜ** | Ghon, *Oberkärnten unter französischer Herrschaft*: Fransa'ya bırakılan *"den Villacher Kreis Kärntens"*; Fransız Yukarı Karintiya'dan *"nach Klagenfurt"* geçiş için izin gerekiyordu · Austria-Forum (Koroška): *"1824 kam der Klagenfurter Kreis … hinzu"* | iddia YANLIŞ ⇒ YAZILMAZ. **Ama yeni:** Ghon: Fransızlar Klagenfurt'u **19 Mayıs 1809**'dan itibaren işgal etti (bitiş günü yok; Schönbrunn 14 Ekim 1809 sonrası çekiliş) ⇒ olası `isg:` < 1 yıl |
| 10 | Klagenfurt | Haziran-Temmuz 1919 SHS | **TEYİT** | AEIOU "Klagenfurt": *"am 6. 6. 1919 die Besetzung Klagenfurts durch jugoslawische Truppen, die am 31. 7. wieder abzogen"* | **HAZIR** (gün): `isg:` 1919-06-06 → 1919-07-31 |
| 11 | Lienz | 1810-1813 İlirya | **TEYİT** | Hrvatska enciklopedija "Ilirske pokrajine": *"Ilirskim su pokrajinama 1810. još dodani zemaljsko-sudski kotari Lienz i Sillian"* | **HAZIR** (yıl) · `fransa-cumhuriyet` (Kostajnica hükmü emsali) |
| 12 | Rēzekne | 1918-1920 Sovyet/Alman, Ocak 1920 Letonya | **TEYİT** (son) | LSM: *"1920. gada 21. janvāra agrā rītā pirmās vācbaltu vienības iegāja Rēzeknē"* · EB1922 "Latvia": *"Riezhitsy (Rositten, Resekna) … obtained by force of arms from Soviet Russia"* | kısmi (son gün 1920-01-21 ✓; Alman/Sovyet başları ölçülemedi) |
| 13 | Thonon | 1536-1567 Bern | **TEYİT** | HLS "Thonon": *"Avec l'occupation bernoise de 1536, T. … devient le siège d'un bailliage bernois. Rendu au duc Emmanuel-Philibert en 1567 après ratification du traité de Lausanne (1564)"* | **HAZIR** (yıl) |
| 14 | Thonon | 1792-1815 Fransız | **TEYİT** (gövde) | Archives parlementaires: *"district de Thonon (Mont-Blanc) … 2 octobre 1794"* · HLS "Léman" (Thonon bölgesi Léman departmanında) | hayır (1792 başı ve 1814/15 sonu Thonon adıyla ölçülemedi) |
| 15 | Bayburt | 1422-1462'nin bir kısmı Karakoyunlu | **TEYİT** | TDV `bayburt`: *"Bir ara Karakoyunlu Hükümdarı Kara Yûsuf tarafından zaptedildiyse de az sonra Akkoyunlu Karayülük Osman Bey bu bölgeyi yeniden ele geçirdi"* · TDV `akkoyunlular`: *"Hasan Bey Karakoyunlular'ın idaresinde bulunan Erzurum ve Bayburt yörelerini yağmaladı"* · *"1462'de … Uzun Hasan Bey, Cihan Şah'ın rızâsı ile Bayburt'u da ülkesine kattı"* | kısmi (son 1462 ✓; Karakoyunlu başı yılsız) |
| 16 | Bayburt | 1878 ve 1916 Rus işgalleri | **TEYİT** | TDV `bayburt`: *"1828-1829 Osmanlı-Rus savaşı sırasında Rus birliklerinin işgaline uğradı. 1878 ve 1916'da da Ruslar tarafından işgal edilen Bayburt"* | kısmi. ⚠️ **Not BAYAT:** 1916 ZATEN yazılı (`rusya` 1916-07-16 → … → `transkafkasya` 1918-02-19). Eksik olan 1828-29 (notun HİÇ anmadığı) ve 1878 |
| 17 | Eisenstadt | 1463/1491 → 1647 Habsburg | **TEYİT, AMA BAŞ YANLIŞ** | Pálffy: *"den Habsburgern noch 1447 verpfändeten westungarischen Städte und Burgen (Güns, Eisenstadt, Rust, Forchtenstein usw.)"* · Austria-Forum: *"1445 gelangte sie in den Besitz von Herzog Albrecht VI. … 1647 kam Eisenstadt (ungarisch: Kismarton) wieder zum Königreich Ungarn."* | kısmi: **1445/1447 → 1647** (notun 1463/1491'i değil); ~1480 Matthias Corvinus ara dönemi, sonu yok |

### 1.1 Sayılar ve öngörü
```
                         öngörü          ölçüm
TEYİT                    11 (9-13)       16 ✗ (üstünde)
ÇÜRÜDÜ                    1 (0-3)         1 ✓ — ve tam öngördüğüm iddia: Klagenfurt-İlirya
ÖLÇÜLEMEDİ                5 (3-7)         0 ✗ (Behisni, Hama, Rēzekne, Bayburt-Karakoyunlu teyit edildi;
                                              düzeltme hazırlığı ayrı eksen)
düzeltmesi HAZIR          7 (4-9)         6 ✓ (Alaşehir · Hama · Aosta · Klagenfurt-SHS · Lienz · Thonon-Bern)
kaynağını ANAN not        %85 teyit       8/8 = %100 (Eisenstadt baş tarihi düzeltilerek)
kaynağını ANMAYAN not     %70 teyit       6/7 = %86
yanlışlanma (ÇÜRÜDÜ ≥ 4)  —               tetiklenmedi
```
### 1.2 Okuma
- **Öz-ilanlar büyük ölçüde DOĞRU (16/17), ama ayrıntıda kusurlu:** 14 kayıttan **4'ünün notu bir şeyi yanlış ya da
  eksik söylüyor** — Klagenfurt (İlirya, ÇÜRÜDÜ) · Eisenstadt (baş 1463/1491 değil 1445/47) · Bayburt (1916 zaten
  yazılı; 1828-29'u anmıyor) · Draç (1392 kaynaksız; EB 1394). ⇒ Koordinatörün kuralı doğrulandı: **notun itirafı aday,
  kanıt değil** — iddianın ÖZÜ çoğunlukla doğru, TARİHLERİ ve KAPSAMI değil.
- **Teyit ≠ hazırlık:** 16 teyidin 6'sı yazılabilir; geri kalanı gün/yıl ya da `d:`/`v:` sınıfı ister.
- **Teyit okuması YENİ çelişkiler buldu (öz-ilanın görmediği):** Alaşehir 1402-1429 Aydınoğlu (atlas `germiyan`) ·
  Görice Fransız idaresi 1916/18-1920 · Bayburt 1828-29 Rus işgali · Aosta 1691, 1704-06, 1798-99 · Klagenfurt 19 Mayıs
  1809 Fransız işgali. ⇒ Bir kaynağı açmak, notun sorduğundan fazlasını cevaplıyor.

## 2. Öteki sıra kalemleri (koordinatörün ②③④)
### ② Draç · Tembura · Yambio — "HAZIR"lık YENİDEN ölçüldü
- **Draç** HAZIR değil, **ŞARTLI**: baş 1368 TDV ✓; son ⑥ (TDV yılsız · notun 1392'si kaynaksız · EB1911 1394);
  ayrıca EB1911 "1333 Achaea, 1336 Servia" ↔ TDV "Draç hariç" çelişkisi `napoli 1282-1368` dilimini de soruya açıyor.
  Öneri: `topia` 1368-01-01 → son ⑥ (ya 1388 ölüm alt sınırı + `ic_not`, ya akademik bir üçüncü kaynakla).
- **Tembura, Yambio** ŞARTLI (VARLIK): iki yer adı da 19. yy sonu Azande krallarından (Tembura; Yambio = Gbudwe).
  Kayıtlar bugün `bos:"kabile"` + `kasitli_bosluk` ve yalnız 1899'dan `ingiliz-sudani`. `zende` (1750-1912) ile 1899
  öncesini doldurmak, yerin 1750'de var olduğunu iddia eder ⇒ `kur:` sorusu (Papeete, Belh, Çehrin ailesi). Kaynak
  okunmadı (EB1911'de "Tembura"/"Yambio" maddesi yok; "Niam-Niam" var, okunmadı).
### ③ `arma` künye ömrü — KAYNAKTAN (okuyucu raporu `scratchpad/okuma_arma.md`; TDV alıntılarını kendim doğruladım)
- **1750-1760'ın kaynağı bulundu:** TDV `tinbuktu`: *"Merakeşli askerlerin yerli kadınlarla evliliğinden doğan ve
  "arma" denilen çocukları Ebü'l-Mahallî liderliğinde 1163'te (1750) Tinbüktü'de yönetimi ele geçirdiler."* ·
  *"1760'ta Tevârikler'in zaptettiği Tinbüktü on yıl sonra Segu Bambaraları'nın hâkimiyetine girdi."* ⇒ künye, paşalığın
  İÇİNDEKİ bir dönemi (Arma'nın yönetimi ele geçirmesi → Tuareg zaptı) bütün paşalık sanmış.
- **Aynı TDV maddesi paşalığın başını veriyor:** *"Tinbüktü eyalet merkezi yapılarak Tinbüktü Paşalığı kuruldu"*
  (Tondibi 999/1591 bağlamında). Hunwick 2003, EB1911, UNESCO V hepsi **1591**.
- **Son ⑥ (kaynaklar çatışıyor, seçmiyorum):** TDV 1760 (Tuareg) · EB1911 1800 Tuareg / 1813 Fula · UNESCO V 1825-26
  (*"Ka'id 'Uthman was the last pasha of Timbuktu"*; ve Tuareg *"never thought of seizing political power in
  Timbuktu"* — TDV'nin 1760'ına AYKIRI) · UNESCO VI 1826 (Massina) · Abitbol 1979 başlığı 1833.
- **Gao, TDV `gao`** (kendim doğruladım): *"1591'de … Fas Sultanı Ahmed el-Mansûr … Tinbüktü ile birlikte Gao'yu ele
  geçirdi"* · *"Şehir 1680 yılında Tuaregler'in eline geçti. 1688'de Mansûr Seniber Paşa şehri geri aldıysa da …
  1770'te Tinbüktü'nün arkasından Gao da tekrar Tuaregler'in kontrolüne girdi."*
- **Cenne:** baş ⑥ 1591-92 (Hunwick) ↔ *"büyük ihtimalle 1596'da"* (TDV `cenne`); son 1819 Massina (UNESCO VI).
- ⇒ **Öneri:** `arma` künyesi **f 1591** (TDV `tinbuktu` + Hunwick + EB1911, uyumlu); **t ⑥** — TDV 1760 ile akademik
  1825-33 çelişiyor ve §4 İslâm dünyası içinde TDV'yi birincil sayıyor, ama UNESCO V TDV'nin olgusunu (Tuareg'in siyasî
  iktidarı alması) doğrudan reddediyor ⇒ **hüküm senin.** 1750 bir künye başı DEĞİL, bir iç olay. Gao'nun dilimleri TDV
  `gao`'nun 1591/1680/1688/1770 günleriyle yazılabilir (künye f 1591 olursa).
### ④ Borana → `bos:"devletsiz"` — ZATEN UYGULANMIŞ
`main` 534633f8: Mega, Moyale, Negele Borana, Yabelo dördü de **`bos:"devletsiz"` + `kasitli_bosluk:true`**, `s:`
yalnız 1897'den `habesistan`. Düzeltilecek bir şey yok; tarama bunları notlarındaki "kimlik yok" yüzünden
ENGEL-KALKMIS'e koymuş (yanlış pozitif — UMIT'e geri bildirim: `bos` alanı DOLU olan kaydın notu engel değil, beyan).

## 3. ③ İSTİYORUM
a) **FAZ 2 — HAZIR 6:** Alaşehir (`bizans`→1391 + `v:germiyan`) · Hama (`eyyubi-hama` 1310-10-03→1342 + `v:memluk`) ·
   Aosta (1800-1814 `fransa-cumhuriyet`) · Klagenfurt `isg:` 1919-06-06→1919-07-31 · Lienz (1810-1813
   `fransa-cumhuriyet`) · Thonon (1536-1567 Bern — künye var mı ÖLÇÜLMEDİ).
b) **Klagenfurt-İlirya YAZILMAZ** (ÇÜRÜDÜ). Notu düzeltilsin: "İlirya" yerine "19 Mayıs 1809 Fransız işgali (son
   ölçülemedi)".
c) **Yeni çelişkiler (5):** Alaşehir 1402-1429 Aydınoğlu · Görice Fransız 1916/18-1920 · Bayburt 1828-29 · Aosta 1691,
   1704-06, 1798-99 · Klagenfurt 1809. Ayrı kalem mi?
d) `arma`: f 1591 kesin; t ⑥ (TDV 1760 ↔ UNESCO 1825-26) — hüküm senin.
e) Draç, Tembura, Yambio ŞARTLI'ya indi (yukarıda); Borana zaten tamam.
