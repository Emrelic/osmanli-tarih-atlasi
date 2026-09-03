# GECE DEVRİ — 4 Eylül 2026, compact öncesi

> Bu dosya **compact'ten sağ çıkması gereken** her şeyi taşır. Yalnız
> koordinatörün bağlamında duran ölçümler, kararlar ve adresler burada.
> Özet kaybolsa bile iş kaybolmaz.

## 🔴 ÖNCE ŞUNLAR — uçuşta olan mekanizmalar

```
KOŞU 4        02:xx itibarıyla devlet 60/550 · tahminî bitiş ~07:45
              log: kosu4b.log · bekçi logu: denetim/BEKCI-KOSU4B.log
              bekçi 60 dk'da bir canlılık satırı basar; bitişte 9 beep
              🔒 DONMUŞ: data/*  ·  arac/uret_petek.py · renkler.py · girdi.py
              🟢 SERBEST: js/app.js · css/style.css · index.html ·
                          denetim/* · oturumlar/*

UYANDIRICI    cron **fb6be0f1** · HER 20 DAKİKA · recurring
              ⚠️ OTURUMA BAĞLI — Claude çıkarsa ÖLÜR. Bayrak devri
                 yapılırsa loop biter; bu yüzden devir DEĞİL compact seçildi.
              prompt: "Şimdi sırada ne var? oturumlar/TESPIH.md ve
              BEKLEYENLER.md'yi oku, koşu 4'ün durumunu (kosu4b.log +
              denetim/BEKCI-KOSU4B.log) ölç, tahtayı yokla, ve sıradaki işi
              YAP. Koşu biterse: denetle.py → durum_tablosu →
              surum_damgala → yayın."
              iptal: CronDelete fb6be0f1
```

## EMRE'NİN BU GECEKİ TALİMATLARI — birebir

```
"ben yatıyorum. sen haritada ne eksik ise sabaha kadar çalış,
 uyandırıcı kur ve görev verdiğin işçilere de bekçilerini kurdur"
"koşu biterse yayın yaparsın"
"katmanlar comboboxunu da diğer butonların içine kaydıralım,
 haritanın üzerinde durmasın"                              ✅ YAPILDI
"29 ekim 1923'te tüm dünyanın harita verisi yok, sadece Türkiye
 verisi var, onu da düzeltmek lazım"                       ✅ YAPILDI
"siyasi katman feci şekilde boyuyor haritayı ve coğrafya katmanı
 arka planda hiç görünmüyor. coğrafi katmanında görünür halde
 olmasını sağlayalım. eğer coğrafi katman kaldırılır ise o zaman
 sadece siyasi katmana göre dağ dere nehir görünmeden sadece
 harita renk verisi görünür"                               🔵 SIRADA — ①
"emeklilik.py ... hiç uyarı gelmiyor"                      ✅ BAĞLANDI
"loop 20 dk"                                                ✅ KURULDU
```

## 🔵 ① SİYASÎ KATMAN OPAKLIĞI — kökü ÖLÇÜLDÜ, çare TASARLANDI

```
ÖLÇÜM   js/app.js:869/917/942 → devlet-dolgu · vassal-dolgu · osmanli-dolgu
        ÜÇÜ DE  "fill-opacity": 1     ← TAM OPAK, coğrafyayı örtüyor
        arac/renkler.py OPAKLIK = yabanci 0.44 · tabi 0.60 · dogrudan 0.68
        app.js:851 yorumu: "Üç dolgu SAYDAMDI ... renkler ALFA
        HARMANLANIYORDU" ⇒ saydamlık BİLEREK kaldırılmış
```
🔴 **GERİLİM:** saydamlık coğrafyayı gösterir ama renkleri bozar
(harmanlanan iki renk birbirine yaklaşır — 143 rengin ΔE'si bunun için
ölçüldü).

🟢 **EMRE'NİN TARİFİ GERİLİMİ ÇÖZÜYOR** — çare opaklığı KATMAN SEÇİMİNE
bağlamak:
```
coğrafya AÇIK  + siyasî açık → siyasî YARI SAYDAM (0.44/0.60/0.68)
                               ⇒ dağ/nehir alttan görünür
coğrafya KAPALI + siyasî açık → siyasî TAM OPAK (1)
                               ⇒ saf renk, harmanlama YOK, ΔE ölçümü geçerli
```
⇒ Uygulama yeri: `js/app.js` içindeki `uygula()` (katman seçici) —
`cografya` kutusunun durumuna göre üç dolgunun `fill-opacity`si
`setPaintProperty` ile değişir. **`js/app.js` DONMUŞ DEĞİL**, gece
yapılabilir.
⚠️ Ve `renkler.py`nin OPAKLIK sözlüğü koşudan sonra bu karara göre
düzeltilmeli (o dosya DONMUŞ).

## 🔵 ② OWTRAD TOPLAMAYA GİRMİYOR

```
canlı ölçüm   KORIDOR 123 düğüm · 121 kenar   ← çizilen
              KORIDOR_OWTRAD 154 düğüm · 174 kenar   ← YÜKLÜ, çizilmiyor
              atlanan sayacı 3/7 — OWTRAD'ı atlanmış olarak DA saymıyor
sebep         `KORIDOR_OWTRAD` bir NESNE {kunye,dugum,kenar};
              app.js süzgeci `KORIDOR_*_DUGUM` GLOBAL ADI arıyor
kenar biçimi  {e:{u1,u2,km,saat,kanat,kol,f,t,...}, a:{düğüm}, b:{düğüm}, fi, ti}
              ⚠️ u1/u2 `e`nin İÇİNDE — dışarıda aramak 121/121 çözümsüz verir
bileşen       4 parça: 86 + 23 + 13 + 1
```
📌 `app.js:3017` civarında bu sınıfın ÜÇ vakası zaten kayıtlı; bu dördüncüsü.

## SIRADAKİ İŞLER — `oturumlar/TESPIH.md` ana liste

```
① siyasî katman opaklığı        yukarıda tasarlandı · app.js SERBEST
② OWTRAD toplamaya sok          app.js SERBEST
③ katman seçici son doğrulama   yerel sayfa CPU darlığından yavaş yükleniyor
④ kronoloji dolumu              ölçüt + alet HAZIR, oturum gerekiyor
⑤ koşu bitince YAYIN            denetle → durum_tablosu → surum_damgala → push
```

## KRONOLOJİ İŞİ — ölçüldü, ölçüt yazıldı, dağıtılmadı

```
ölçüt   oturumlar/KRONOLOJI-OLCUT-0904.md   (dokuz cins · TDV tuzakları ·
        pencere muafiyeti · yama dosyası biçimi · haberleşme)
alet    denetim/ARAC-KRONOLOJI-KAPSAM-0904.py
        (--bolge · --eksik <cins> · --kunye <id>)

BUGÜNKÜ KARNE (591 künye)
  kuruluş %84 · son %71 · toprak %31 · savaş %26 · antlaşma %24
  hükümdar %23 · iç savaş %10 · isyan %8 · ittifak %5
  DOKUZUNU birden taşıyan: 1 / 591      asgari (kuruluş+son): 377 / 591
  kronolojisi HİÇ olmayan: 48 · zayıf (1-2): 157  ⇒ hedef küme 205

BÖLGE BOŞLUĞU
  orta-amerika-karayip  8 künye ·  8 BOŞ · %100
  guney-amerika        25 künye · 20 BOŞ ·  %80
  guney-afrika         18 künye ·  4 BOŞ ·  %22
  okyanusya             5 künye ·  1 BOŞ ·  %20
  kuzey-amerika        59 künye · 11 BOŞ ·  %19
  (guneydogu-asya · dogu-afrika · bati-afrika  %0-4 — BİTMİŞ)

DAĞITIM PLANI (Emre onayladı: "hazır kıtayı çağırıp görev verebilirsin")
  KRONOLOJI AMERIKA    orta-amerika-karayip 8 + guney-amerika 20 = 28 künye
  KRONOLOJI KUZEYAM    kuzey-amerika 11 boş + zayıflar
  KRONOLOJI GUNEY      guney-afrika 4 + okyanusya 1 + tenha Asya
  🔴 Üçü de `denetim/KRONOLOJI-<AD>-0904.json` YAMA yazar;
     `data/devletler.js`ye DOKUNMAZ (tek dosya, sessiz veri kaybı riski)
```

## 🔴 HAZIR KITA — TAZE DEĞİL, ölçüldü

Emre'ye *"hazır kıta taze ve ucuz"* demiştim; **ölçmeden söylemiştim.**
`emeklilik.py` ölçtü:
```
OPUS HAZIR KITA 127   527 K · 323 istek   local_8aae7ac2-1d69-49dd-8bf7-5908724bae6c
OPUS HAZIR KITA 126   402 K · 249 istek   local_93b9dc8e-64d4-4c3b-b47f-efac73d23a68
OPUS HAZIR KITA 125   346 K · 185 istek   local_47ec49ca-c368-4713-94c2-5428216e4018
SONNET HAZIR KITA 126 291 K · 137 istek   local_372203f2-6e71-46d2-af5e-563a5c7eca60
Sonnet Hazır Kita 122 285 K · 126 istek   local_4d0a5944-2173-4016-a969-d83cfa874887
```
Bölgesel oturumlar 713-944 K. ⇒ Gerçekten ucuz olan tek yol YENİ oturum.
⚠️ Hepsi `isRunning:false` — **ölü değil, UYKUDA**; mesajla uyanırlar.

## EMEKLİLİK — 13 bulgu bekliyor
```
🔴 EMEKLİ ET  9  ·  🟡 İŞ BÖLÜNMELİ  3  ·  🟡 SESSİZ  1  ·  ⚠️ ROL BİLİNMİYOR 1
py "C:/Users/emrem/OneDrive/Desktop/ClaudEmre/kutu/emeklilik.py"
```
Artık `acilis.py` adım 1f'de bağlı — her açılışta özet satır basar.

## AÇIK BULGULAR — iş değil, KAYIT
```
🔴 serbest-hale · serbest-cekirdek  MapLibre ifade hatası, HİÇ yüklenmiyor
   ⇒ "serbest" topraklar haritada hiç çizilmiyor (35 katmanda yoklar)
🔴 renkler.py OPAKLIK bayat (yukarıda ①)
🔴 toprak-kayip 105 · kayip 7 · toprak 2 — aynı cinsin üç yazımı
🔴 `ic-savas` diye bir `tur` YOK (en yakını `bolunme` 70)
🟡 KRONOLOJI_* 18 küresel değişken DEVLETLER'de karşılıksız
   (cin · hindistan · japonya · misir · ozbek · anadolu · arabistan …)
🟡 küresel görünüm: maplibre-gl 4.7.1 · `setProjection` YOK · v5 gerekli
   `setTerrain` VAR (3B arazi bugün mümkün, küre değil)
   risk: 35 katman + 9 sefer katmanı + 481 DOM işaretçisi v5'te sınanmadı
🟡 koridor ağı 4 bileşen (86+23+13+1)
🟡 `s.kesinlik` alanı BILINEN_ALANLAR'da yok (2 kayıt: Vidin, Kızıkermen)
```

## ÜRETEÇ ÖNERİLERİ — Emre'nin onayını bekliyor
```
T-0126  Ters sorgu: haritaya tıklayınca o noktanın TAM zaman çizgisi
T-0127  Kırılma vurgusu: madde tıklanınca o gün DEĞİŞEN yerler parlasın
T-0128  Belirsizlik görselleştirmesi (YYYY-01-01 kesinlik taşımıyor)
onay:   py <ClaudEmre>/kutu/tespih.py --onayla T-0126
```

## BU GECE KAPANANLAR
```
✅ 00975a8  son gün boşluğu (0 → 3632 nokta) + katman seçici taşındı
✅ 592d4ef  emeklilik.py acilis.py'ye bağlandı (ClaudEmre deposu)
✅ 93eed29  Torun + Elbing (3803 → 3805)
✅ 5fb0db9  katman seçici (r5585, yayında)
✅ 9341f67  hasat: beş ders + günlük (ClaudEmre deposu)
```

## TABAN — 4 Eylül 02:xx
```
yerleşim 3805 · künye 591 · renk 550 · girdi dosyası 77
denetim TEMİZ (çıkış 0) · yayın r5585 CANLI · git 0 commit geride
```
