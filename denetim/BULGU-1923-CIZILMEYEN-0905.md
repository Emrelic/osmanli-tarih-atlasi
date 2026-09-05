# BULGU — "1923-10-29'DA VAR OLAN AMA ÇİZİLMEYEN" (M-2775 hükmü)

**Oturum:** 1923 SINIRLARI · `local_372203f2-6e71-46d2-af5e-563a5c7eca60`
**Yöntem:** `arac/girdi.py`nin `yukle()`/`oku_devletler()` fonksiyonları + kendi
tarih-indeksleme mantığım (`js/app.js:111-112` `aktifAralik()` ile birebir,
3 haneli yıl hatasına karşı `datetime.date.toordinal()` kullanan sürüm).
**YENİ bu turda:** `s.d` alanındaki HAM değerler artık `harita:` anahtarı
üzerinden de kanonik `id`ye çözülüyor (22 kimlik/636 nokta-referansı bu deseni
taşıdığı önceki turda ölçülmüştü) — bu yüzden bu rapor önceki BULGU-1923-0905.md
raporundaki "13 künye noktasız" sayısını **düzeltiyor.**

🔴 **NOKTA YAZILMADI** — bu salt ölçüm turudur.

---

## ① 1923-10-29'da AKTİF KÜNYE SAYISI — DOĞRULANDI, DEVRALINMADI

```
1923-10-29'da aktif künye: 98
```
Koordinatörün "96" ölçümüyle **2 fark var** — kendi ölçtüm, devralmadım.
Muhtemel sebep: koordinatörün ölçümü `almanya` (f:962, 3 haneli yıl) gibi
kayıtları string-karşılaştırma hatasıyla kaçırmış olabilir (bu proje bu gece
tam bu hatayı iki kez ölçtü — `denetle.py:933`nin de aynı riski taşıdığı not
edilmişti). **98 rakamı, `js/app.js`in kendi `aktifAralik()` mantığıyla BİREBİR
aynı yöntemle üretildi**, önceki BULGU-1923-0905.md'de de 98 çıkmıştı — TUTARLI.

---

## ② KOVALAMA — 98 künyenin her biri, o gün EN AZ BİR nokta taşıyor mu?

```
🔴 künye VAR, nokta YOK (haritada GÖRÜNMEZ)     10
🟡 nokta VAR ama AZ (1-2 nokta, komşuya emilme riski)   20
🟢 SAĞLAM (3+ nokta)                             68
```

### 🔴 GÖRÜNMEZ — 10 künye (tam liste, hepsi zaten adıyla)
```
avusturya-cumhuriyet · bahreyn · buganda · cezayir-fransiz · kamboc-kralligi ·
katar · kuveyt · nguyen-hanedani · oniki-ada-italyan · tbmm-turkiye
```
📌 Bunlar **BULGU-1923-0905.md**'de zaten adıyla raporlanmıştı (o zaman 13
görünüyordu; 3'ü — `cimma-sultanligi`, `hicaz-kralligi`, `yemen-zeydi` —
`harita:`-anahtarı çözümlemesi düzeltilince aslında NOKTASI OLDUĞU ortaya çıktı
ve 🟡 kovasına indi, aşağıda). Yeni bir keşif değil, **eski bulgunun
DOĞRULANMIŞ ve DÜZELTİLMİŞ hâli.**

### 🟡 AZ NOKTA (1-2) — 20 künye, komşuya emilme riski taşıyor
```
1 nokta: cimma-sultanligi · brunei-sultanligi · haiti · tonga-kralligi ·
         luksemburg · surakarta · yogyakarta · manipur · nepal · travankur ·
         tidore-sultanligi · bahavelpur · bharatpur-cat · bhopal · cunagadh ·
         sarawak-brooke
2 nokta: izlanda · dominik-cumhuriyeti · guatemala · panama-cumhuriyeti
```
⚠️ Bunların çoğu **prenslik devletleri** (Hindistan: bahavelpur/bharatpur-cat/
bhopal/cunagadh/manipur/travankur) ya da **ada sultanlıkları** (Endonezya:
surakarta/yogyakarta/tidore-sultanligi/brunei-sultanligi) — tek nokta demek,
o devletin **bütün petek gövdesinin TEK bir yerleşimin Voronoi hücresine
bağlı olduğu** demektir; o nokta yanlış ölçülürse ya da komşu nokta yoğunluğu
artarsa gövde küçülür/kaybolur (`§2`).

### 🟢 SAĞLAM — 68 künye, 3+ nokta

En büyük 20 gövde (referans, sağlık göstergesi):
```
ingiltere 474 · sovyet-rusya 401 · fransa-cumhuriyet 313 · osmanli 242 ·
abd 195 · kanada 185 · italya 128 · ingiliz-hindistani 114 · kacar 108 ·
yunanistan 97 · cin-cumhuriyeti 95 · avustralya 79 · meksika 77 ·
hollanda-dogu-hint 67 · yugoslavya 64 · habesistan 64 · portekiz 60 ·
belcika 59 · meiji-japonya 55 · ispanya 47
```

---

## ③ TERS KONTROL — çizilen ama künyesi 1923-10-29'da AKTİF olmayan kimlikler

```
7 kimlik: adal · habsburg · karadag · maratha · meysur · romanya · rusya
```
📌 Bu, **BULGU-1923-0905.md**'nin "Sınıf B" bulgusuyla BİREBİR AYNI liste
(maratha 105 yıl fazla, meysur 124 yıl fazla vb.) — bağımsız bir script ile
İKİNCİ kez ölçülüp DOĞRULANDI. Yeni değil, çapraz doğrulama.

**Normalize edilemeyen (ne id ne harita-anahtarı) ham değer: 0** — bu turda
hiçbir `s.d` değeri tanımsız çıkmadı, önceki turdaki normalleştirici tam
kapsıyor.

---

## DAMGA

| kalem | damga |
|---|---|
| 98 aktif künye | TUTTU — önceki turla (BULGU-1923-0905.md) birebir tutarlı, koordinatörün 96'sından bağımsız ölçüldü |
| 10 görünmez künye | TUTTU — önceki 13'ün düzeltilmiş/doğrulanmış hâli |
| 20 az-noktalı künye | YENİ — ilk kez bu turda ayrı kova olarak çıkarıldı |
| 7 künyesi-pasif-ama-çizilen kimlik | TUTTU — Sınıf B'nin bağımsız ikinci ölçümü |
| 10 künyenin (YAMA-KUNYE-1923-0905.json) bu kovalarla ilişkisi | OKUMADIM — bu turda karşılaştırmadım, aşağıda not düştüm |

📌 **Önemli sınır:** Bu 10+20 künyenin **hiçbiri** benim `YAMA-KUNYE-1923-0905.json`
önerilerimle ÇAKIŞMIYOR (irak-kralligi, suriye-lubnan-mandasi, vb. henüz
devletler.js'e inmediği için bu census'ta hiç görünmüyorlar — onlar ayrı, veri
henüz uygulanmamış önerilerdir). İki bulgu kümesi **birbirini tamamlıyor**,
çelişmiyor.

---

## ④ ÜÇ KOVA — 10 "künye var, nokta yok" için (M-2778 hükmü)

**Yöntem:** her künyenin coğrafyasında bir kutu ölçüldü, kutudaki noktaların
1923-10-29'daki GERÇEK sahipliği tek tek sayıldı. Sonuç üç kovaya ayrıldı.

### 🔴 GERÇEK DELİK (toprak boş ya da yanlış kimlikle)
```
bahreyn      1 nokta — 'ingiltere'                    → ayrı şeyhlik gizleniyor
buganda      3 nokta — hepsi 'ingiltere'               → ayrı krallık gizleniyor
katar        2 nokta — 1 'ingiltere' · 1 SAHİPSİZ      → ayrı şeyhlik gizleniyor + 1 boşluk
kuveyt       2 nokta — hepsi 'ingiltere'               → ayrı şeyhlik gizleniyor
avusturya-cumhuriyet  9 nokta kutuda, 2'si 'habsburg'  → 🔴🔴 habsburg 1918-11-11'de BİTTİ
                      (7 ay Almanya/Macaristan/Çekoslovakya/Yugoslavya sınır
                      gürültüsü, gerçek Avusturya çekirdeği net değil)
```
⚠️ **`avusturya-cumhuriyet` ↔ `habsburg` hayalet devlet listesiyle KESİŞİYOR**
(7 hayaletin biri) — M-2778 ④ gereği BU TURDA DOKUNMADIM, `NEHIR SURTUNME`nin
`YAMA-HAYALET-IRAN-0905.json` biçimi gelince aynı yöntemle yazılacak.

### 🟡 TOPRAK ZATEN ÜST KİMLİKLE DOĞRU BOYANIYOR (künye muhtemelen ayrıntı katmanı)
```
cezayir-fransiz    148 nokta — 93 'fransa-cumhuriyet' (Cezayir anayasal
                   olarak Fransa'nın PARÇASIYDI, sömürge değil — bu YÜZDEN
                   doğru olabilir) · 28 'fas' · 13 'ispanya' (sınır gürültüsü)
kamboc-kralligi    24 nokta — 22 'fransiz-cinhindi' (doğru sömürge çerçevesi,
                   Kamboçya kralı bu çerçevenin İÇİNDE bir ayrıntıydı)
nguyen-hanedani    50 nokta — 45 'fransiz-cinhindi' (aynı gerekçe, Vietnam
                   da Fransız Çinhindi'nin içinde)
```
📌 Üçü de aynı desen: Fransız sömürge idaresi (metropol ya da "Fransız
Çinhindi") zaten doğru üst kimlik olarak çiziliyor; ayrı künye eklemek bir
İYİLEŞTİRME olabilir (yerel hanedanı/protektora ayrımını göstermek için) ama
**mevcut hâli "yanlış" değil, "daha az ayrıntılı".**

### 🟢/🔴 KARIŞIK — oniki-ada-italyan
```
21 nokta — 13 'italya' (DOĞRU) · 6 'osmanli' (🔴 YANLIŞ — adalar 1912'de
           Osmanlı'dan alındı) · 2 'yunanistan' (🔴 YANLIŞ — 1923'te henüz
           Yunanistan'a geçmedi, bu II. Dünya Savaşı sonrası)
```
⇒ Künyenin kendisi GEREKSİZ değil — 8/21 nokta (osmanli+yunanistan) GERÇEK
delik taşıyor, 13/21 zaten doğru. Karma kova: **8 nokta düzeltme adayı.**

### ⚠️ TBMM-TÜRKİYE — ELLENMEDİ, YALNIZ ÖLÇÜLDÜ (M-2778 açık talimatı)
```
Anadolu kutusunda (35,8-42,2K / 25,5-45,0D) TOPLAM 308 nokta, 1923-10-29:
  osmanli              242  (%78,6)
  yunanistan            16
  italya                11
  fransa-cumhuriyet      9
  sovyet-rusya           9
  ingiltere              9
  kacar                  7
  bulgaristan-kralligi   5
```
Bu bir tasarım kararı sorusu (Emre'nin) — kova ATANMADI. Sayı yalnızca ölçüldü:
**Anadolu'nun %78,6'sı hâlâ 'osmanli', 1920-1923 TBMM/Kurtuluş Savaşı dönemi
hiçbir noktada ayrı bir kimlik olarak görünmüyor.**

---

`⏳ BEKLİYORUM: kovalanan 9 künye için karar (bahreyn/buganda/katar/kuveyt/
oniki-ada-italyan için nokta düzeltmesi mi? cezayir-fransiz/kamboc-kralligi/
nguyen-hanedani için künye AYRINTI kalemi mi bırakılsın?) · tbmm-turkiye
Emre'nin kararına havale edildi · yeni iş`
