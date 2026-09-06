# EKSİKLER — 6 Eylül 2026, tam envanter

> **1.MURAT (Oturum 0).** Emre sordu: *"şu anda nedir eksiklerimiz."*
> Bu belge aynı zamanda **bağlam sıfırlama (compact) devridir**: aşağıdaki
> her satır bir dosyaya dayanır, hiçbiri hafızada değildir.

---

## ⓪ ZEMİN — bugünün durumu

```
KOŞU 7B   14:23:20 başladı · PID 3880 · AYRIK fırlatıcı
          177. dk'da tam çekirdek · 1,77 GB · .err BOŞ
          🟢 çökme noktası (32,9 dk) GEÇİLDİ ⇒ 0xC0000005 GEÇİCİYDİ
          ⚠️ girdi %39 büyüdü (2731 → 3805 petek) ⇒ tarihî azamiden
             (16s09dk) UZUN sürmesi BEKLENEN, arıza işareti DEĞİL
DONUK     data/*.js · arac/uret_petek.py · renkler.py · girdi.py
SERBEST   denetim/ · oturumlar/ · js/app.js · css/ · index.html
OTURUMLAR hepsi ÖLÜ — Emre açmadan işçi görevlendirilemez
```

### 🟢 DEĞİŞMEZLER — 6 Eylül 19:2x, `denetle.py` KOŞTURULDU, HEPSİ YEŞİL
```
1   ✓ 3805 yerleşim · 314 sahipsiz (beklenen 315)
1b  ✓ BEYANSIZ pencere arası boşluk 0 · beyanlı 5/5 — tam tarama
1c  ✓ sahipsiz ve BELGESİZ 4 (tavan 7) — belgeli 310
2   ✓ 523 kırılma · 0 AÇIK
2s  ✓ 1319 yabancı kırılması · 104 AÇIK (tavan 121) · 363 kapsam dışı
2i  ✓ 47 işgal kırılması · 3 açık (tavan 3)
2t  ✓ kırılmasız madde 12 (tavan 42) — bilinen borç
4   ✓ 9 hayalet dönem (beklenen 9)
4c  ✓ 138 · 4d ✓ 409 · 4s ✓ 6   (üçü de tavanında)
5   ✓ 0 çelişki · 7 ✓ 651 sorgusuz enklav (beklenen 660)
3z  · zamansız `m:` 493 | zamanlı `kd:` 486 | gerçek `kd:` yazılı: 1
      🔴 Değişmez 3 HÂLÂ AÇIK — aşağıda §⑤
5b  i 150 nokta `kur:` yok, ilk dönemi 1381'den sonra
5c  i 2114 nokta `kur:` HİÇ yok ve 1281'de zaten sahipli
```
📌 **Veri tarafı temiz.** Eksiklerin hiçbiri bir değişmez ihlali değil —
hepsi ya UYGULANMAYI bekleyen hüküm, ya ÖLÇÜLMEMİŞ soru, ya MOTOR
değişikliği isteyen kabiliyet.

---

## ① 🔴 EMRE'NİN İSTEYİP DE BİTMEYENLERİ

### (a) VASSAL GÖRÜNÜMÜ — **motor seviyesinde bloke**
> *"vassal devletlerin rengini Osmanlı rengine boyayalım fakat isimlerini
> kırmızı üstünde beyaz yazalım, parantez içinde vassal/özerk/himaye."*

```
🟢 RENK yarısı  hazır ve sınandı — denetim/YAMA-VASSAL-TEKRENK-0906.js
🔴 ETİKET yarısı BLOKE, ve engel arayüz değil VERİ:
     ① donemler.js'te `d.v` TEK GEOMETRİ — o dönemin BÜTÜN tâbi dünyası
        tek gövde. Eflak · Boğdan · Kırım · Erdel AYRI DEĞİL.
        ⇒ Bir polity'ye ad ASACAK YER YOK.
     ② `tekVeri(geo)` → `properties:{}` SABİT KODLU
     ③ `donemler.js` `k`/`statu` alanlarını hiç taşımıyor
   ⇒ `uret_petek.py` değişikliği ŞART (donuk)
🔴 RENK YARISI TEK BAŞINA İNMEZ (paket hükmü): etiketsiz aynı renk,
   tâbiyi BUGÜNKÜNDEN daha ayırt edilemez yapar.
```
Dayanak: `denetim/HUKUM-VASSAL-GORUNUM-0906.md` · `OLCUM-VASSAL-ETIKET-0906.md`

### (b) A/B GÖRÜNÜMÜ — mimari onaylandı, **uygulanmadı**
```
🟢 Emre'nin modeli ÖLÇÜLDÜ ve DOĞRU çıktı (A = ham · B = düzeltilmiş)
🟢 "İkinci koşu gerekmiyor" iddiası ÖLÇÜLDÜ ve REDDEDİLDİ (üç sebeple)
🔴 İkinci geçişin KENDİ SÜRESİ ÖLÇÜLMEDİ ← koşu bitince İLK İŞ
🔴 İkinci geçişin girdisi `DEVLET_HARITA` DEĞİL, HAM PETEK olmalı
   (A çıktısı zaten B1 geçmiş; delikleri geri açmak imkânsız)
🔴 B1'in (`delikleri_doldur`) ortam anahtarı YOK
   ⚠️ `MOTOR_DOLGU_KAPALI` onun anahtarı DEĞİL — o ekleyici kapıyı kapatır
```
Dayanak: `denetim/HUKUM-AB-MIMARI-0906.md` · `OLCUM-AB-IKI-GECIS-0906.md`
Alet hazır: `denetim/ARAC-IKINCI-GECIS-SURE-0906.py` (koşu canlıysa DURUR)

### (c) SİTE HIZI — yarısı yapıldı, **etkisi ölçülmedi**
```
🟢 OYNATMA kuyruğu KESİLDİ (js/app.js) — tik 62 ms / iş ~400 ms teşhisi
🔴 GERÇEK ETKİSİ ÖLÇÜLEMEDİ: pencere küçültülmüş, `rAF` gizli belgede
   ZATEN susuyor ⇒ yamanın kendisi bu hâlde ölçülemez
🔴 AÇILIŞ yükü DURUYOR: 104,93 MB · 184 <script> · ~9,2 sn AYRIŞTIRMA
   Çare: geometri <script>ten çıkıp `fetch()`+JSON olmalı — bu HEM A/B
   anahtarını HEM donmayı çözer. UYGULANMADI (görsel doğrulama şart).
```
Dayanak: `denetim/OLCUM-OYNATMA-TAKILMA-0906.md` · `OLCUM-YUK-VE-AB-0906.md`

### (d) 1923 SINIRLARI — kısmen
```
🟢 1923 kesitinde BEYANSIZ boşluk 4 → yama yazıldı
🔴 O yamanın İKİ kaydı artık BLOKE (Honolulu · Timbuktu — aşağıda ③)
🔴 "Sınır boyundaki yerleşimlerin isimlerini haritaya koyalım ve sınırı
   bunların arasından geçirelim" — HİÇ BAŞLANMADI (js/app.js serbest ama
   görsel doğrulama yok)
```

### (e) TOPOĞRAFYAYA YASLAMA — koşuda
Motorun işi; koşu 7b'nin çıktısında görülecek. Ayrı bir eksik değil.

---

## ② 🔴 ENKLAVLAR — en büyük tek boşluk

> Emre: *"1288'den 1923'e kadar enklavları tespit edelim ve tarihî
> gerçeğe uygun olup olmadığını teyid edelim."*

```
651 kayıt → 423 SORU (aynı vaka tekrar sayılıyordu)
🟢 DOĞRULANMIŞ ANAKRONİZM 4:
     Khami · Danangombe · Blantyre  (iç Zimbabve, `ingiltere` 56-207 yıl erken)
     Sutter's Fort (Sacramento)     (`abd` ~9 yıl erken — YAMA HAZIR, kaynaklı)
🔴 KALAN 420 SORU TEYİT EDİLMEDİ ← bir işçi oturum işi, oturumlar ÖLÜ
   En verimli kova: 19.yy (152) ve 16.yy (143)
```
⚠️ **İki genelleme denendi, İKİSİ DE ÇÜRÜDÜ** — coğrafî süzgeç (152 bulgu,
çoğu meşru) ve kaynaksızlık süzgeci (%84 kaynaksız ⇒ ayırt etmiyor).
📌 Sömürge çağında bir devletin gövdesi zaten kopuktur; enklav denetiminin
onları bildirmesi doğru, **kusur** sayması yanlış olur.

---

## ③ 🔴 UYGULANMAYI BEKLEYENLER — hepsi hükümlü, hiçbiri inmedi

```
18 ÇAKIŞMA        TAMAMI hükme bağlandı (bugün) · HİÇBİRİ uygulanmadı
                  4 mekanik · 14 gerçek
   Sınav ÖNCEDEN yazıldı: uygulandıktan sonra 18 → 0 olmalı
YAMA SUTTER       denetim/yer_yama_sutter_0906.js — kaynaklı, hazır
                  (git mv → kuru koşu → `s:` indiğini GÖR → --yaz)
KÜNYE VASSAL      denetim/YAMA-KUNYE-VASSAL-0906.json — 10 künye
                  ⚠️ 5'i POLITY DEĞİL, künye ALMAYACAK (kategori hatası)
ALAN TİPİ DENETİMİ denetim/ARAC-ALAN-TIPI-0906.js → `denetle.py`ye katılacak
```

### 🔴 VE İKİ YAMA KAYDI **UYGULANMAMALI**
```
yer_yama_1923_bosluk_0906.js
  · Honolulu  → kayıt ZATEN DOĞRU, yamanın orada işi YOK
  · Timbuktu  → uygulansa 1281-1894 arası SAHİPSİZ kalır (613 yıl)
yer_yama_timbuktu.js · Timbuktu → aynı tehlike
yer_yama_ferhatpasa.js + kafkas.js · Kutaisi → BAYAT, tabanı geriletir
```
Dayanak: `denetim/OLCUM-YAMA-KAYIP-0906.md` · `HUKUM-CAKISMA-KUTAISI-TIMBUKTU-0906.md`

### 🔧 VE BİR VERİ KAYDI BOZUK (kusur bende)
```
data/yerlesimler_4ff22b.js · Honolulu
  İKİ `s:` · İKİ `kaynak:` · İKİ `tur:`
  JavaScript SON'u alır (site DOĞRU) · uygulayıcı regexi İLK'i alır
  ⇒ "KAPSAM DARALDI" koruması KÖR kalıyor
  Çare: `ad:` satırındaki mükerrerleri sil. DEĞER DEĞİŞMEZ.
```


### 🔴🔴 §③b — MÜKERRER ALAN: 5 KAYIT, VE KOŞAN ÜRETİMİ ETKİLİYOR
```
4668 kayıt tarandı · MÜKERRER ALAN taşıyan 5:
  Honolulu · Mersin · Yagodina (Jagodina) · Yedisan bozkırı · Şırnak
BEŞİNİN BEŞİ DE AYRIŞIYOR — desen TEK: bir yama `ad:` satırına `s:`/`d:`
EKLEMİŞ, aşağıdaki ESKİ yazım SİLİNMEMİŞ. JS ve `json.loads` SON anahtarı
alır ⇒ DÜZELTME KAYBOLUR.
  Şırnak   TBMM katmanı TAMAMEN kayıp (s: BOŞ okunuyor)
  Mersin   tbmm-turkiye kayıp · Yagodina Habsburg işgali kayıp
  Yedisan  kirim bitişi 1783 yerine 1792 · Honolulu TEK TERS vaka
🔴 MOTOR DA SON YAZIMI OKUYOR (girdi.py ölçüldü) ⇒ KOŞU 7B'NİN
   ÇIKTISINDA BU BEŞ NOKTA DÜZELTMESİZ OLACAK.
⚠️ Koşu ÖLDÜRÜLMEDİ: 3805'in 5'i (%0,13), 3,2 saat yatırım, ve `data/`
   donuk olduğu için düzeltmek çıktıyı yayınlanamaz yapar.
   🔴 KARAR EMRE'NİN — bildirildi.
ÇARE `yer_yama_` DEĞİL: tabanda mükerrer anahtar; eski yazım SİLİNİR.
   ⚠️ Honolulu ters yönde ⇒ vaka vaka ölçülür, kural yok.
```
Dayanak: `denetim/OLCUM-MUKERRER-ALAN-0906.md`

---

## ④ ⚠️ ÖLÇÜLEMEYENLER — `bulunamadı` DEĞİL, **ölçmedim**

```
oynatma yamasının gerçek etkisi     pencere küçültülmüş + koşu CPU'yu tutuyor
(mükerrer alan ÖLÇÜLDÜ — §③b'ye taşındı, artık burada DEĞİL)
Timbuktu 1893-1894 (1 yıl)          `tekrur` künyesi 1893'te biter, TDV
                                    ilhakı 1894 der — aradaki yıl KAYNAKSIZ
420 enklav sorusu                   işçi oturum işi, oturumlar ÖLÜ
oynatma yamasının GERÇEK etkisi     pencere küçültülmüş + koşu CPU'yu tutuyor
tavanı YÜKSELTMENİN çöl bedeli      kaba ölçüldü ama `COL_PUAN_ESIK` ve
                                    `COL_TAVAN_KM` frenleri ölçüme GİRMEDİ
```


### 🟢 6 EYLÜL AKŞAMI KAPANANLAR — hepsi hazır, koşu bekliyor
```
✅ AGADEZ            17 yıllık hayalet · TDV `nijer` kapsayıcı madde
                     yama + kronoloji maddesi PAKET (denetim/)
✅ TIMBUKTU          60 yıllık boşluk KAPANDI (`fas`→1750 · `arma` 1750-1760)
                     ve DÖRT parça yama TEK ZİNCİRE indi
✅ VAN 1548          kayıt TDV'yi kaynak gösterip 25 diyor, TDV 24 diyor
                     ⇒ düzeltici hazır (12 dosya · 63 geçiş)
                     🟢 yan teyit: TDV `van`da 1639 HİÇ geçmiyor
✅ KAPSAM DARALDI    Ahıska · Akçahisar · Floransa — üçü de aynı sınıf,
                     çare BİRLEŞTİRME (yama erken dönemi zenginleştirip
                     kuyruğu düşürüyor)
✅ KUTAİSİ+TIMBUKTU  çakışmaların son ikisi hükme bağlandı ⇒ 18/18 TAMAM
✅ TAVAN ÖLÇÜMÜ      Çağatay %83,9 · seçenekler kazanç/bedel birlikte
                     ölçüldü ⇒ Ⓒ1 (k1=400 k2=300) ÖNERİLDİ
✅ PAKET H-0001      dört işlevin ÜÇÜ zaten var; boşlukların sebebi tek
                     parametre (TAVAN_KM) ve o Emre'nin 2 Eylül deneyi
✅ BAHREYN GÜNÜ      🟡 AÇIK SANIYORDUM — ZATEN BEYANLI çıktı: kronoloji
                     maddesi "TDV 21 Mayıs der, İngiliz belgeleri 31 Mayıs
                     der, on günlük fark ÇÖZÜLMEDİ" diye AÇIKÇA yazıyor.
                     ⇒ Van'daki gibi bir SAPMA değil, BEYAN EDİLMİŞ bir
                       kaynak çelişkisi. Envanterden düşürüldü.
```
📌 Ve `BAHREYN GÜNÜ` bir ders: envanterimde *"ölçülemedi"* diye duruyordu,
oysa **ölçülmüş ve damgalanmıştı.** Kayıt okunmadan açık kalem sanmak,
`§11`in *"kendi ödediğin borcu yeniden iş sanabilirsin"* dersinin
envanter yüzü.

---

## ⑤ 🟡 SESSİZ BORÇLAR — bilinen, kabul edilmiş

```
Değişmez 3        HÂLÂ sağlanmıyor: `m:` yanlış eksende (idarî merkez,
                  coğrafî gruplama için kullanılıyor) · 359 çift
147 künye         gün hassasiyetli tarih + `kaynak: bulunamadı`
                  ⚠️ 97'lik kovadan 20'lik örneklemde ÇÜRÜYEN 0 ⇒ süpürülmeyecek
84 meksika dönemi kaynak taşıyan: 0
`v:` dönemleri    kimlik alanı YOK (423 dönem) ⇒ Osmanlı dışı himaye
                  `v:` ile ifade EDİLEMİYOR
                  🟢 ama `isg:` ifade EDİYOR — 401 dönemde zaten kullanılıyor
`2t`              kırılmasız madde 12 (tavan 42) — bilinen borç
`__BOSLUK__`      1 kimlik / 2 pencere — KUSUR DEĞİL, BEYAN
```

---

## ⑥ KOŞU BİTİNCE — SIRA
```
① py denetim/ARAC-IKINCI-GECIS-SURE-0906.py   ← EMRE'NİN AÇIK İSTEĞİ
   ⚠️ sonuç ALT SINIRDIR, üç sebeple (ikisi betikte, üçüncüsü
      HUKUM-AB-MIMARI-0906.md §③)
② py arac/denetle.py → py arac/durum_tablosu.py --yaz
③ py arac/denetle_yayin.py → yayın (r no + commit)
④ tarayıcıda OYNATMA ÖLÇ (`agirOlc` kodda) — pencere AÇIK olmalı
⑤ 18 çakışmayı uygula → kuru koşuda 18 → 0 (sınav)
⑥ Sutter yaması + Honolulu kaydı temizliği
⑦ ALAN TİPİ denetimini `denetle.py`ye kat
⑧ geometri <script> → fetch()+JSON (A/B anahtarı + 9,2 sn)
⑨ VASSAL: `uret_petek.py`de `d.v` polity başına ayrılsın + `k`/`statu` taşınsın
⑩ 420 enklav sorusu → işçi oturum (Emre açmalı)
```

---

## ⑦ 📌 BUGÜN ÖĞRENİLENLER — kaydı `CLAUDE.md`ye taşınacak

```
① denetle.py ALAN TİPİ sormuyordu — bir tip hatası SİTENİN TAMAMINI
   öldürdü ve denetim "TEMİZ" dedi
② bir ÇAKIŞMA LİSTESİ yalnız çözülmemiş iş değildir — içinde ÖNLENMİŞ
   KAZA da olabilir (Timbuktu 613 yıl)
③ KISMÎ bir dizi TAM diziyi siler · BAYAT bir dizi YENİ diziyi geri alır
   ⇒ yama yazarken soru "önerim doğru mu" değil,
     "tabanın YERİNE koyduğumda NE KAYBOLUYOR?"
④ MÜKERRER ALAN iki okuyucuyu ayrıştırır (JS son'u, regex ilk'i alır) —
   dosya bozuk değil ama iki alet farklı cevap veriyor
⑤ kısa süre İŞGAL göstergesi DEĞİL — ölçüt "polity sürdü mü"
```
