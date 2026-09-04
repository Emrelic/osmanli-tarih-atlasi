# KOŞU SONRASI KUYRUK — 4 Eylül 2026

> Koşu 4 bitince **sırayla** uygulanacaklar. Hepsi bugün ölçüldü ve
> donmuş dosyalara dokunduğu için bekliyor.
> 🔴 Sıra kasıtlı: veri → renk → denetim → koşu → yayın.

## ⓪ İLK İŞ — KOŞU BİTER BİTMEZ, BAŞKA HİÇBİR ŞEYDEN ÖNCE

```bash
py arac/denetle.py            # altı değişmez
py arac/renk_olc.py           # 🔴 VERİ DEĞİŞTİYSE ŞART
py arac/durum_tablosu.py --yaz
py arac/surum_damgala.py
git push
```
Ve **Ö9 sınavı** (`PAKET GEOMETRİ 0904`nin betiği, scratchpad'de `peteksiz.js`):
```
PETEKLER  2731 → ~3800      peteksiz oran %28,2 → ~%0
beş dosyanın (afrika2 · kamerika · gamerika · okyanusya · sibirya2)
peteksiz oranı %100 → %0
```
🔴 Tutmazsa koşu **eksik bitmiş** demektir; yayın yapılmaz.

Ve `_B23_SAYAC` karnesini logdan çıkar → `PAKET GEOMETRİ 0904`e ilet
(kapamanın gerçekten ateşleyip ateşlemediği onun açık kalemi).

---

## ① KRONOLOJİ YAMALARI — 200 madde, 56 künye

```
denetim/KRONOLOJI-BATIAFRIKA-0904.json     22 künye · 92 madde
denetim/KRONOLOJI-GUNEYAMERIKA-0904.json   21 künye · 81 madde
denetim/KRONOLOJI-ORTAAMERIKA-0904.json    13 künye · 27 madde
                                           kaynak 200/200 · hata 0
```
Biçim: `{oturum, damga, kunyeler:[{id, eklenen:[{t,tur,b,kaynak}]}]}`
🔴 **`kaynak` MADDEYE İNER** — şema genişledi, `VERI-YAPISI.md`ye yazıldı.
🔴 `d` alanı **inmez**, yamada kalır (ileride `olaylar_ek*` pasının ham maddesi).
⚠️ Birleştirmeden sonra `denetle.py` — `Değişmez 2` senkronu etkilenebilir.

## ② RENK — beş renk + iki eşik

`denetim/ONERI-RENK-0904.json` → `renkler` dizisi. 🔴 **Artefakttan oku**,
mesaj alıntılarından değil (bir tur eski hex'ler dolaşımdaydı).
```
novgorod #84c9cf → #1e333e      le-hanedani #9ceded → #3b025a
norvec-kralligi #2490d2 → #0b1650   bosna #90f3f3 → #0a0381
ilhanli #c690ed → #433be3
DE_DENIZ 15 → 18 · DE_DENIZ_GENIS 20 → 51 · DL_DENIZ 4 SABİT
```
Sonra **gözle sınanacak** — bütün sayılar hesaptan, hiçbiri çizilmedi.

## ③ `renkler.py` — üç borç
```
· _opaklik_dogrula() `"fill-opacity": 0.44` DİZGİSİNİ arıyor; değerler
  artık app.js'te SIYASI_KIP sözlüğünde ⇒ uyarı SERT kipte doğru,
  YUMUŞAK kipte YANLIŞ
· _deniz_oku() YANLIŞ SORUYU SORUYOR: "beyan iki yerde tutarlı mı" diye
  soruyor, "beyan EKRANDA GÖRÜNÜYOR MU" diye sormuyor. SU_RENGI'nin
  üstünde Esri rasteri var; ekrandaki deniz ~#7cb4d4, beyan #c4dcea, ΔE ~20
· deniz bloğu ÇIKIŞ KODUNU ETKİLEMİYOR (`renk_olc.py:547`) ⇒ yayın kapısı
  görmüyor. `2s`nin tavan deseni uygulanacak — AMA düzeltmelerden SONRA,
  tavan bugünkü sayıya konup kademeli indirilecek
· farukiler ↔ gond-kralliklari · ΔE 10.2 · 294 km · 231 yıl → tek renk ihlali
```
⚠️ **"AYNI BÖLGE" KOVASININ İKİ SINIRI — `PAKET RENK 0904` yazdı, saklamadı:**
```
① "aynı bölge" bir ETİKET eşitliği, coğrafî sınır DEĞİL ⇒ farklı etiket
   taşıyıp yan yana duran çiftleri bu kova HİÇ GÖRMEZ (kovanın kör noktası)
② 5 kimliğin noktası 300'ü aştığı için ÖRNEKLENDİ ⇒ mesafe BÜYÜK
   görünebilir, yani hata GÜVENSİZ yönde
   ⇒ İhlal kovasındaki tek çiftte örnekleme YOK (o kova sağlam), ama
     uyarı kovasında olabilir: **"38 uyarı" değil, "EN AZ 38 uyarı".**
```
📌 ①② *"eksik ölçtüm"* der, ② ayrıca *"yanlış yöne eksik ölçtüm"* der.
Bir sonraki oturum bu sayıların üstüne inşa etmeden önce ikisini de görsün.

## ④ MOTOR — `PAKET GEOMETRİ 0904`ün reçeteleri
`denetim/BULGU-GEOMETRI-0904.md` — 14 reçete, her biri **kendi testiyle**.
🔴 Uygulayan oturum **testi geçirmeden kapatmasın.**
```
R1  don_kose_kur TAM FLOAT EŞİTLİĞİ kullanıyor (:3639) ⇒ dikişte köşeler
    birebir değilse hiçbiri donmuyor, iki taraf 2×tol içeri çekiliyor
    ⇒ 96 parça · 9.046 km² dikiş boşluğu (Riga · Bohemya, Emre'nin görselleri)
    ⚠️ 15.526 DEĞİL — o sayı göl kıyılarını da sayıyordu (aşağıya bak)
R2  kapama koruma şartı (:1319) YANLIŞ EKSENİ ölçüyor — "içinde başka
    devletin YERLEŞİMİ varsa" diyor, korunması gereken PETEK
A2  çift koşu kilidi .bat'tan MODÜLE taşınsın
    TEST: `py arac/uret_petek.py` iki kez → İKİNCİSİ REDDEDİLMELİ
R13 dikiş nöbetçisi ÇİFT değil PARÇA saysın (≤8 km + 2+ gövde)
    TEST: 1281 Avrupa **96 parça / 9.046 km²** → R1'den sonra < 10 parça
R15 dikiş nöbetçisinin ölçütü GÖLDEN ARINDIRILSIN — motorun KARA maskesini
    kullanmalı, ham `ne_10m_land`i değil
R14 KIYI KENARI — 🟢 **KAPANDI: KUSUR DEĞİL, GÖRÜNMEZ ARTEFAKT**
```

> 🔴 **BU BÖLÜMÜN TABANI YAZILDIKTAN 20 DAKİKA SONRA BAYATLADI.**
> `PAKET GEOMETRİ 0904` R14'ü bitirdi; üç ailenin de sayıları değişti.
```
                 kuyruğa yazılan        DÜZELTİLMİŞ (motorun karası)
DİKİŞ          15.526 km² ·   95        9.046 km² ·   96    −42%
KIYI KENARI    85.766 km² · 2159       36.345 km² · 2625    −58%
KAPSAMA       127.232 km² ·   19       70.528 km² ·   11    −45%
```
> **İki sebep, ikisi de o oturumun kendi bulgusu:**
> ① ham `ne_10m_land` yerine **motorun kendi karası** (göller çıkarılmış:
>   `ne_10m_lakes` >0,02 derece², modern barajlar hariç, artı `goller.js`)
> ② kendi ölçütü **göl kıyılarını dikiş sayıyormuş** — en büyük *"dikişi"*
>   (2.131 km², `altinorda+ceneviz`) **Sivaş lagünüydü**
>
> 🟢 **VE ASIL HÜKÜM — R14 AÇILMAYACAK:**
```
genişlik dağılımı iki aileyi TERS ayırıyor:
  KENAR kütlesinin %82'si 1 KM'DEN İNCE  → z6,5'te ~0,9 px · z5'te ~0,3 px
  DİKİŞ kütlesinin %80'i 2-8 km bandında → z6,5'te 5,6-11,3 px
m/px = 40.075.017 × cos φ ÷ (512 × 2^z)   ⚠️ 512, kmDanZoom'un 256'sı DEĞİL
```
> ⇒ **Emre'nin gördüğü ve fotoğrafladığı şey DİKİŞ ailesi.** Kenar ailesi
> ekranda hiç oluşmuyor. R14 bir *"sebebini ara"* işi değil, *"kayda geç
> ve geç"* işi.
>
> 📌 Ve o oturumun kendi dersi: ***öncelik ölçüsü ALAN değil GÖRÜNÜR ALAN.***
> EK 1'de *"kenar dikişten 5,5 kat büyük"* deyip önceliği ona vermişti;
> düzeltilmiş hâlde kenar 4 kat büyük ama **görünür kısmı dikişin yirmide
> biri.**
>
> 🟡 **R14'ten geriye kalan üç küçük kalem** (taze oturuma bunlar verilir,
> *"85.765 km²'lik sebep araması"* DEĞİL):
```
(a) A1 tavanının kenar ailesindeki payı — nokta yokluğundan AYRIŞTIRILMADI
(b) 5 km² altındaki 10.314 parça
(c) 🔴 EN ÖNEMLİSİ: hüküm HESABA dayanıyor, GÖZLEME değil. MapLibre'nin
    antialiasing'i ve `serbest kenar` katmanı ince şeritleri görünür
    kılabilir. EKRANDAN doğrulanmalı — sebep aramasından ucuz, ve hükmü
    ya çürütür ya çivi gibi çakar.
```
> 🟢 Ve iki aday **ölçülmeden elendi, gerekçesiyle**: yuvarlama (111 m) ve
> `KARA_TOL` (220 m) km ölçeğini **açıklayamaz** — bir mertebe küçükler.
> Kalan kenarın en büyük beş parçası **Faroe Adaları**, en yakın yerleşim
> 341-390 km ⇒ nokta yok, petek doğmamış ⇒ **VERİ işi**, motor işi değil.

## ⑤ VERİ — koşu sonrası kalemler
```
· asanti  kaynak → gana    · dahomey kaynak → benin   (§4 kapsayıcı madde)
· sokoto 1809 maddesi İKİ OLAYI tek maddede birleştirmiş (başkent + halifelik);
  TDV ikisini ayırıyor, halifeliği 1812'ye koyuyor
· sokoto hukumdar 1817-01-01 ↔ yeni kaynaklı 1817-04-20 — mükerrer, birleştir
· basuto 1868-03-12 İKİ OLAYA bağlı (Moshoeshoe'nin ölümü / İngiliz himayesi)
· torva 1683 ↔ Dombo 1684-95 · dahomey 1893 ↔ künye 1894
· venezuela 1829 (ayrılma) ↔ künye 1830-01-13 (resmî kuruluş) — İKİ AYRI OLAY
· Çehrin: lehistan 1281→1678 tek blok, Kazak Hetmanlığı'nı (1648-78) yutuyor
· Suceava ↔ Suçava 4,15 km — OWTRAD'ın kendi `hal:"supheli"` damgası
· pskov (Vasili III / III. İvan) · lakota (`t:` bir katliam günü)
```

## ⑥ ARAYÜZ
```
· serbest-hale · serbest-cekirdek — MapLibre ifade hatası, HİÇ yüklenmiyor
  ⇒ "serbest" topraklar haritada hiç çizilmiyor (4 konsol hatası)
· KRONOLOJI_* 18 küresel değişken DEVLETLER'de karşılıksız
· kmDanZoom 256 px sabiti kullanıyor, 512 olmalı — TAM 2× yanlış
· OWTRAD tarayıcı doğrulaması (node ile sınandı, tarayıcıda DEĞİL)
· tur sözlük kayması: toprak-kayip 105 · kayip 7 · toprak 2
```

## ⑦ EMRE'NİN KARARINI BEKLEYENLER
```
· pembe gövde denizle aynı açıklıkta — rahatsız eder mi? (51 mi 55 mi)
· dağ boşlukları 16-20 km (KAPSAMA ailesi, 19 parça · 127.232 km²) kalsın mı?
  ⚠️ Emre'nin kendi hükmü "devasa boşluklar olacaksa olsun" bunu KAPSIYOR olabilir
· kendi denizimiz Esri'nin üstüne çıksın mı? (H-0004'ün ÖN KOŞULU)
· on oturum emekli edilsin mi
```
