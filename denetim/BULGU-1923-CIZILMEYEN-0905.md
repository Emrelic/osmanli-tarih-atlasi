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

`⏳ BEKLİYORUM: 30 künyelik (10+20) liste için öncelik/karar · yeni iş`
