# MERGE KONTROL LİSTESİ — 5 Eylül 2026

> Yazan **NEHİR SÜRTÜNME** · sevk `1.MURAT` M-3046 · 21:0x
> Kaynak: `oturumlar/KOSU-SONRASI-KUYRUK.md` **TEK EKRAN** bloğu (satır 3-150)
> 🔴 **Sayılar kuyruktan alındı, tahmin edilmedi.** Kendi ölçtüklerim
> `[NEHİR]` diye damgalı.
> 🔴 **SIRA BAĞLAYICI** — atlanırsa ya yayın durur ya bir tavan gevşer.

---

## ⓪ YAYIN KAPISI
```
KOMUT     py arac/denetle_yayin.py
ÖN KOŞUL  koşu 5b BİTMİŞ olmalı (PID 21540 ölmüş)
KABUL     çıkış kodu 0 · "BAYAT" satırı YOK
SAHİP     Oturum 0
BAYAT MI  🟢 5 Eyl 13:25'te ölçüldü — 5b düzeltilmiş zinciri yükledi
          (`uret_altlik` 4 Eyl 22:48'de eklendi, 5b 02:40'ta başladı)
          ⇒ altlık ve bekleyenler KENDİ üretilecek, kapı muhtemelen
          DURMAZ. 🔴 YİNE DE KOŞTUR, varsayma.
DURURSA   `TESPIH.md`in "KAPI DURACAK" çaresi AYNEN geçerli
```

## ① KÜNYE
```
KOMUT     py arac/_kunye_uygula.py --yaz
ÖN KOŞUL  kuru koşu 11 kabul / 0 red
KABUL     11 künye indi · red 0
SAHİP     Oturum 0
EK DOSYA  denetim/YAMA-KUNYE-HURMUZ · YAMA-KUNYE-ARNAVUTLUK
          [NEHİR] denetim/YAMA-KUNYE-SUTAY-YELMAN-0905.json — 2 künye
                  (`sutayogullari` · `cemisgezek-beyligi`), İKİSİ DE
                  🔴 RENK BEKLİYOR ⇒ ADIM ⑧'DEN ÖNCE İNMEZ
BAYAT MI  🟡 "11 künye" sayısı kuru koşudan; merge'den önce kuru koşu
          TEKRAR koşulmalı — bu gece `denetim/` altına yeni künye
          önerileri yazıldı ve glob'a girip girmedikleri dosya adına
          bağlı (`ONERI-` önekliler GİRMEZ, kasıtlı)
```

## ② KRONOLOJİ
```
KOMUT     py arac/_kronoloji_uygula.py --yaz
ÖN KOŞUL  🔴 17 GERÇEK MÜKERRER yamalardan ÇIKARILMIŞ olmalı
          🔴 GÜN DÜZELTMESİ **4** — 6 DEĞİL (işçi kendi daralttı):
             malva 1436-05-16 · campa 1471-03-22 ·
             ingiliz-malaya 1819-02-06 ·
             hollanda-dogu-hint 1619-05 (YALNIZ AY — gün iddiası
             GERİ ÇEKİLDİ)
             ⚪ sarawak-brooke ÇELİŞKİ, düzeltme DEĞİL
KABUL     kabul sayısı = yamadaki madde − 17 · red gerekçeleri okunur
SAHİP     Oturum 0
EK DOSYA  denetim/KRONOLOJI-ARNAVUTLUK · KRONOLOJI-SISAM
🔴 [NEHİR] BU ALET `data/devletler.js` KÜNYE KRONOLOJİSİNE YAZAR,
          `olaylar*.js`e DEĞİL (`_kronoloji_uygula.py:254`
          `onceki["kronoloji"][slug]`). Aşağıdaki iki öneri
          `olaylar*.js`e ELLE girer, bu adımda İNMEZ:
             denetim/ONERI-KRONOLOJI-1794-0905.json
             denetim/ONERI-KRONOLOJI-GUN-KAYNAKLI-0905.json
          `ONERI-` öneki glob'a girmemesi için KASITLI — ADI DEĞİŞTİRME.
BAYAT MI  🟢 "17 mükerrer" ve "4 gün düzeltmesi" 5 Eyl 08:50'de işçiler
          tarafından daraltıldı, damgalı
```

## ③ MISIR `isg:` DÜZELTMESİ
```
KOMUT     ELLE — 7 kayıt: d:"fransa" → "fransa-cumhuriyet"
ÖN KOŞUL  —
KABUL     7 kayıt değişti · `fransa` kimliği o dönemlerde 0
SAHİP     Oturum 0
🔴 SIRA   ADIM ④-⑤'TEN ÖNCE — tavan bu düzeltmeye göre ölçüldü
BAYAT MI  🟢 kuyrukta sabit
```

## ④ İKİ MADDE
```
KOMUT     ELLE — `data/olaylar*.js`e iki madde
          1737-10-01 Niş  ·  1878-09-18 **BİHAÇ**
ÖN KOŞUL  `isg:` Değişmez 2'ye girmiş olacak (adım ⑤)
KABUL     `2i` açık 3 → 1 (Semendire 1789-10-13 kalır)
SAHİP     Oturum 0
🔴 BAYAT DÜZELTİLDİ 15:05 — gün **Herseknovi'nin DEĞİL.** Onun tek
   `isg:`i 1538-39 İspanya. Doğrusu Bihaç:
   `isg:[1878-09-18 → 1908-10-05, avusturya, kaynak:"bihac"]`
   ⇒ TDV'de günü VAR. Yanlış atıf bir arama turu yaktı.
🔴 [NEHİR] VE KUYRUK "İKİ" DİYOR, `denetle` **ÜÇ** SAYIYOR:
   1737-10-01 Niş (58g) · 1789-10-13 Semendire (91g) · 1878-09-18 Bihaç (51g)
   ⚪ dördüncü aday 1811-06-01 Rusçuk denetle'de YOK — sebebi ÖLÇÜLMEDİ
```

## ⑤ `denetle.py` YAMALARI
```
KOMUT     ELLE — `isg:` evrene eklenir + `harita:` uzayı
ÖN KOŞUL  adım ③ bitmiş
KABUL     TAVANLAR: HAYALET 8→9 · ASAN 280→287 · ONCE 468 SABİT
SAHİP     Oturum 0
TABAN (yetkili alet, 5 Eyl 15:40 · iki oturum bağımsız):
   hayalet 8 · 4c 280 · 4d 434 · 4s 137 (4c ∩ 4d — ÜÇÜ TOPLANMAZ)
   D2 536/0 · D2s 101 (tavan 121) · D2i 26/3 (tavan 3) · D2t 12 (tavan 42)
   D1 3805/315 · konum 0 · SONUÇ temiz
🔴 ONCE 468 ama gerçek `4d` **434** ⇒ pay 1 DEĞİL **34.**
   `4d`ye dayanan hiçbir karar bu turda kısıtlı DEĞİL.
🔴 [NEHİR] KUYRUĞUN "BÜTÜN DELTALAR DOĞRULANMADI" UYARISI KISMEN ÖDENDİ:
   `zend`+`kacar` yaması `denetle`nin KENDİ fonksiyonlarıyla simüle
   edildi (`_osmanli_kure` önbelleği temizlenerek, iki `assert`le).
   Taban birebir üretildi. Kalan yamalar için uyarı GEÇERLİ.
```

## ⑥ SAHİPLİK
```
KOMUT     ① git mv denetim/yer_yama_*.js data/
          ② py arac/_sahiplik_uygula.py --yaz          🔴 TEK ELDEN
ÖN KOŞUL  🔴 alet YALNIZ `data/` dizinini tarıyor (`^yer_yama.*\.js$`);
          `denetim/` altına HİÇ BAKMIYOR ⇒ taşıma ŞART
          🔴 [NEHİR 21:1x] **ADIM ⑧ ÖNCE KOŞMALI.** Bekleyen yamaların
             kullandığı 81 kimlikten **13'ünün rengi YOK** (koordinatörün
             ölçümü 17 diyordu; dördü `harita:` üzerinden zaten boyalı —
             aşağıdaki EK). Renksiz kimlik inerse `§8`: BÖLGE BOYANMAZ
             ⇒ 13 harita deliği ve `§1.5`in "HARİTA DELİĞİ ✓ 0"
             değişmezi kırılır.
             ⇒ SIRA: **① → ⑧ → ⑥**
KABUL     kuru koşu **24 çakışma** bildirecek — ve bu BEKLENEN:
             🔴 taşımanın GETİRDİĞİ YENİ   17
             🔴 `data/`da ZATEN var         7  ← Bağdat · Başkale ·
                Halepçe · Kutaisi · Yergöğü · Çaldıran · Şehrizor
          ⚠️ 24'ü görüp *"taşıma bunları getirdi"* diye OKUMA.
          🎯 17'nin 14'ü İKİ DOSYADAN (`zend_kacar` 9 · `misir_himaye` 5)
             ⇒ o ikisi çözülürse kuru koşu **8** der
SAHİP     Oturum 0
SAYILAR (15:25 ölçümü) 32 dosya · **397 kayıt** · `data/`da aynı adla 0
          en büyükleri: zend_kacar 132 · misir_himaye 56 · tunus 36 ·
          doguasya 19 · litvanya 19 · yunananakara 17 · onikiada 13
🔴 48 YENİ NOKTA ARAÇLA İNMEZ — ELLE:
   doguasya 19 · gronland_col 9 · sibirya_beyan 8 ·
   1923_nepal_karayip 6 · 1923_yeni 6
   ⚠️ `lat/lon/kur/kasitli_bosluk` alanları uygulayıcıda YOK, düşmemeli
🔴 [NEHİR] `zend_kacar` (132 kayıt) BİR MADDEYE BAĞLI:
   yama `2s` açığı **101 → 102** yapıyor (`1794-01-01` kapsam İÇİNE
   giriyor, en yakın çekirdek madde 151 gün ve ALAKASIZ).
   ⇒ `denetim/ONERI-KRONOLOJI-1794-0905.json` **çekirdeğe** yazılmalı.
   Simülasyonla doğrulandı: madde inince 102 → 101.
   ⚠️ Tavan 121, yani 102 GEÇER — ihlal değil, ama BORÇ.
🔴 [NEHİR] `misir_himaye` (56 kayıt) — `kaynak:"urabi-pasa"` →
   **`"misir"`** düzeltmesi de bu adımda: `misir` gövdesi İKİ UCU DA
   tam dizgiyle taşıyor (13 Eylül 1882 · 18 Aralık 1914). 55 kayıt.
```

## ⑦ YAKUT DÜZENLEMESİ
```
KOMUT     ELLE — 6 kayıt: bos: devletsiz → kabile
          Yakutsk · Vilyuysk · Olyokminsk · Jigansk · Verhoyansk · Bulun
ÖN KOŞUL  —
KABUL     6 kayıt değişti · `bos:` dağılımı `kabile` +6 · `devletsiz` −6
SAHİP     Oturum 0
🔴 YAMAYLA İNMEZ — `SKALER_KORUNAN`, elle
BAYAT MI  🔴 **BAYATTI VE DÜZELTİLDİ: 39 DEĞİL 6.** İşçi kendi daralttı;
          hükmün dayanağı TDV `yakutlar` alıntısı ve o alıntı YALNIZ
          Yakutları kapsıyor.
⚪ 2 kayıt `devletsiz` KALIR (Anadır · Çukotka)
⚪ 31 kayıt KARAR VERİLEMEZ — damga "okumadım". Delil yokluğu ne
  devletsiz ne kabile.
```

## ⑧ RENK
```
KOMUT     ① bosna #2f1896 → #ea12ea
          ② py arac/renk_olc.py --oner   🔴 TEK TURDA **28** KİMLİK
          ③ py arac/renk_olc.py
ÖN KOŞUL  🔴 `arac/renkler.py` koşu sırasında DONUK — 5b BİTMİŞ olmalı
          🔴 [NEHİR 21:1x] YÜK **26 DEĞİL 28** — kuyruğun 26'sına
             `kuveyt` ve `zeta` EKLENİR (ölçüldü, aşağıdaki EK)
KABUL     ihlal 0 · yeni çakışma 0 · **28 kimliğin 28'i BOYALAR'da**
SAHİP     Oturum 0
🔴 [NEHİR] ADIM ①'İN İKİ KÜNYESİ BURAYA BAĞLI: `sutayogullari` ve
   `cemisgezek-beyligi` RENK BEKLİYOR. Renk üretilmeden yama inerse
   `Çemişgezek` **139 yıl boyanmaz** (harita deliği, `§8`).
🔴 `§9`: VERİYE DOKUNAN HER KOŞUDAN SONRA `renk_olc.py` KOŞULUR —
   renge hiç dokunulmasa bile, çünkü komşuluk VERİDEN gelir.
```

## ⑨ R1 SINAVI
```
KOMUT     py denetim/ARAC-DIKIS-0904-olc.py
ÖN KOŞUL  koşu 5b bitmiş, `donemler.js` · `devletler_harita.js` ·
          `motor_kara.geojson` YENİLENMİŞ
KABUL     🔴 ÖLÇÜT PARÇA DEĞİL **km²**
             🟢 GEÇTİ    dikiş km² 34.318'den DÜŞER, ve düşüş en büyük
                         parçalarda görünür (`--ayrinti` ilk 15)
             🟡 BELİRSİZ düşer ama az ⇒ R1 çalıştı, kök BAŞKA
             🔴 KALDI    km² ARTAR ⇒ R1 çalışmadı ya da gerileme geldi
          ⚠️ parça SAYISI raporlanır ama EŞİK DEĞİL — bilgi, ölçüt değil
TABAN     DİKİŞ 640 parça / 34.318 km² · KIYI KENARI 42.233 · KAPSAMA 357
          (5 Eyl 16:05'te yeniden üretildi, dört sayı da birebir tuttu)
SAHİP     Oturum 0 · alet `denetim/ARAC-DIKIS-*` (benim dosyam DEĞİL)
SÜRE      ~8 dakika (7dk51sn ölçüldü, üretim CPU'yu doldururken)
🟢 [NEHİR] KUYRUĞUN ÇEKİNCESİ **KAPANDI**: *"verinin değişip
   değişmediği ÖLÇÜLMEDİ"* — ölçüldü:
      VERİ  4b'den sonra değişen girdi dosyası **0**
            (77 dosyanın damgası + git, iki bağımsız yol; nokta 3805)
      KOD   10 commit / 233 satır indi — ama geometriye dokunan
            **yalnız R1** (@1845); R7 ölçüm · A2 kilit · ikisi rapor ·
            `renkler.py` BOYALAR 550↔550, yeni kimlik 0
   ⇒ **Düşüş görülürse R1'e atfedilebilir.** Sınır: 233 satırın tamamı
     okunmadı; adı geçmeyen bir yoldan (sabit·eşik·önbellek) dokunan
     bir commit kaçırılmış olabilir.
```

## ⑩ KAPANIŞ
```
KOMUT     ① py arac/denetle.py
          ② py arac/durum_tablosu.py --yaz
          ③ py arac/surum_damgala.py
          ④ py arac/denetle_yayin.py
          ⑤ git commit + push
KABUL     ① SONUÇ temiz · tavanlar aşılmamış (⑤'teki değerler)
          ② `§1.5` tablosu güncel — ELLE YAZILMAZ, ÜRETİLİR
          ③ `?v=rNN` yükseldi
          ④ çıkış 0
SAHİP     Oturum 0
⚠️ Yayın gecikmesi: push'tan sonra GitHub Pages ~40-60 sn
```

---

## 🔴 HER ADIMDA SORULACAK: **BU ADIM BAYAT MI?**
Bu gece kuyrukta **dokuz** sayı bayat çıktı ve **üçü kabul ölçütüydü**:
```
adım ②  gün düzeltmesi   6 → 4     (işçi daralttı)
adım ④  Herseknovi → BİHAÇ         (yanlış atıf, bir arama turu yaktı)
adım ⑥  yama 11 dosya → 32 / 397 kayıt   (2,7 kat)
adım ⑦  Yakut 39 → 6               (işçi daralttı)
adım ⑨  ölçüt parça → km²          (taban taşınamaz çıktı)
```
📌 İkisini de **işçiler** daralttı, ikisi de koordinatörün **kendi
cümlesinden** türetilmiş sayılardı. ⇒ **Bir kabul ölçütü, koşturulmadan
önce tarihine bakılır.**

## ⚠️ SIRA KİLİTLERİ — atlanamaz bağımlılıklar
```
③ → ④⑤     tavan ③'e göre ölçüldü
⑤ → ④      `isg:` evrene girmeden iki madde ötmez
🔴 ① → ⑧ → ⑥   [NEHİR 21:1x, GÜNCELLENDİ] üç adımlık ZİNCİR:
   ①  künye iner (13 renksiz kimliğin 13'ü künyeli ⇒ ① onları kapsıyor)
   ⑧  RENK ÜRETİLİR — 28 kimlik, TEK TURDA
   ⑥  ancak o zaman sahiplik yaması iner
   ⚠️ ⑥ önce koşarsa **13 harita deliği** doğar (`§8`) ve `§1.5`in
      "HARİTA DELİĞİ ✓ 0" değişmezi kırılır
⑥ → ②      `zend_kacar` yaması `1794` maddesine bağlı (2s 101→102)
5b bitişi → ⑧⑨⑩   `renkler.py` donuk · geometri yenilenmemiş
```

## ⚪ BU LİSTENİN KAPSAMADIKLARI
```
🔴 `denetim/` altındaki ~43 artefaktın 21'i HİÇBİR GLOB'a girmiyor
   (başka oturumun ölçümü) — bu liste onları TAŞIMIYOR
🔴 `berlin-antlasmasi t=1908-10-05` — TDV 7 Ekim diyor, KARAR BEKLİYOR
🔴 `kirim` takvim beyanı (Jülyen→Gregoryen) `not:` alanına yazılmalı
🔴 `kahire` `t=1801-10-09` dayanaksız — doğru kaynak ARANMADI
⚪ Kuyruğun 4273 satırındaki öteki blokların hepsi okunmadı; bu liste
   YALNIZ `TEK EKRAN` bloğundan (satır 3-150) + bu oturumun ölçümlerinden
```

---

# EK — ADIM ⑧ RENK LİSTESİ: **26 → 28**, ve 17'nin dördü DELİK DEĞİL

> Sevk `1.MURAT` M-3049 · 5 Eylül 2026, 21:1x · `renkler.py` **salt okundu**

## ⇒ SONUÇ: EKLENECEK **İKİ** KİMLİK — `kuveyt` · `zeta`
```
⑧'in listesi          26
koordinatörün 17'si    ⇒ 11'i ⑧'DE VAR · 6'sı ⑧'de YOK
o 6'nın 4'ü            🟢 RENK GEREKTİRMİYOR — `harita:` başka anahtara bakıyor
KALAN                  🔴 `kuveyt` · `zeta`
⇒ ADIM ⑧'İN YÜKÜ      **28** (+ `bosna` hex değişikliği)
```

## ① 🟢 DÖRDÜ DELİK DEĞİL — `§11` RENK 2 DERSİ
> *"Renk `harita:` anahtarına bakar, `id`ye DEĞİL"* — ve
> *"künye var ama `harita:` başka anahtarda ⇒ kendi renklerine
> ihtiyaçları YOKTUR."*

```
arnavutluk-bagimsiz     → harita:"arnavutluk"   ve o anahtar BOYALI  🟢
arnavutluk-iskenderbey  → harita:"arnavutluk"   BOYALI               🟢
bulgaristan-kralligi    → harita:"bulgaristan"  BOYALI               🟢
sirbistan-nemanjic      → harita:"sirbistan"    BOYALI               🟢
```
⇒ Bu dördü boyanacak, **harita deliği doğurmayacaklar.**
📌 Koordinatörün *"17 harita deliği"* ölçümü `id`ye bakıyordu; `harita:`
kapısı eklenince **13**'e iniyor.

## ② 🔴 GERÇEKTEN RENK BEKLEYEN 13 — ve 11'i ⑧'de zaten var
```
⑧'DE VAR (11)  cemisgezek-beyligi · dukagin · ingiliz-sudani ·
               kesiri-sultanligi · kuayti-sultanligi · misir-kralligi ·
               misir-sultanligi · piombino · rif-cumhuriyeti ·
               tannu-tuva · topia
🔴 ⑧'DE YOK (2) kuveyt · zeta        ← EKLENECEK
```

## ③ EKLENEN İKİSİNİN KÜNYESİ VAR — adım ① etkilenmiyor
```
kuveyt  1752-01-01 → 1923-10-29   Kuveyt (Sabah Şeyhliği)   harita: YOK
zeta    1356-01-01 → 1514-01-01   Zeta Prensliği (Balšić/Crnojević) harita: YOK
```
🟢 İkisi de `devletler.js`te **var** ⇒ adım ①'e ekleme gerekmiyor.
Geldikleri yamalar:
```
kuveyt  denetim/yer_yama_1923_duzeltme.js (1 kayıt)
zeta    denetim/yer_yama_arnavutluk.js (2) · data/yer_yama_p32.js (1)
```

## ④ ⑧'İN 15 FAZLASI BAYAT DEĞİL
⑧'de olup 17'de olmayan 15 kimliğin **15'i de gerçekten renksiz**
(`BOYALAR`da 0). ⇒ ⑧ listesi **eksikti, bayat değil.**
🟢 Ve ⑧'in kendi sağlığı temiz: 26'nın hiçbiri `BOYALAR`da zaten yok.

## ⑤ 🔴 YENİ KOMŞU KÜMESİ — `zeta` ARNAVUTLUK KÜMESİNE GİRİYOR
⑧'in mevcut küme listesine bir satır ekleniyor:
```
ARNAVUTLUK üçlüsü  topia · dukagin · **zeta**
   topia  ? · dukagin ? · zeta 1356-1514 — Balkan sahilinde komşu ve
   pencereleri örtüşüyor ⇒ `§11`in "SIRA bağlar" tuzağı: TEK TURDA
⚪ `kuveyt` (1752-1923, Körfez) hiçbir kümeye girmiyor — bağımsız
```
⚠️ **ÖLÇMEDİM:** `topia`/`dukagin` künye pencerelerini ve üçünün
gerçekten eş zamanlı olup olmadığını. Küme önerisi **coğrafî**, ve
`§11`in *"ATLAS SEFERİ DEĞİL TASARRUFU BOYAR"* dersine göre bu
yetersiz — `renk_olc.py --oner` kendi komşuluk ölçümünü yapacak.

## ⑥ ⇒ ADIM ⑧ VE ⑥'NIN ÖN KOŞULLARI GÜNCELLENDİ
Yukarıdaki iki adımın `ÖN KOŞUL` alanlarına bu ölçüm işlendi.
