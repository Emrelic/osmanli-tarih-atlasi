# GECE SIRASI — 2 Eylül 2026, sabaha kadar

> Emre: *"Sabaha kadar yapılması gereken işleri önceliklendirme ile sıra ile
> yapalım, oturumları görevlendirelim. Paket maddelerini bitirelim,
> topoğrafya meselelerini bitirelim, koridor vesaire."*
>
> Koordinatör: 1.MURAT · alarm 15 dk · koşu 22:51'de başladı

---

## 🔒 A — KOŞU BİTMEDEN YAPILAMAZ (koordinatörde, SIRA BAĞLAYICI)

Koşu `%45`te, ~8 saat daha sürebilir. Bu sıra **bitince** koşacak:

```
A1  BEŞ DOSYAYI BAĞLA        girdi.py + index.html, İKİSİ BİRDEN
      yerlesimler_ok101 · ok102 · ok106 · ok107 · yer_yama_ok106
A2  `kesinlik` alanını       girdi.py BILINEN_ALANLAR'a kaydet
      (atlasta ilk kez yazıldı; bugün her koşuda uyarı basıyor)
A3  renkler.py               eyyubi-hisnikeyfa rengi
A4  TAVAN 200                uygula — öngörü DAMGALI: denetim/ONGORU-TAVAN-200.md
A5  py arac/denetle.py       altı değişmez
A6  py arac/renk_olc.py      🔴 VERİ DEĞİŞTİYSE ŞART
A7  py arac/denetle_yayin.py yayın kapısı
A8  surum_damgala + push     🟢 YAYIN
A9  YENİ KOŞU                A4'ün sınavı
```
⚠️ **A1 ile A9 arasında girdi kilidi yoktur** — o pencerede yeni dosya
bağlanabilir. Bağlanacak dosyası olan oturum **o an** bildirsin.

---

## 🟢 B — KOŞU SÜRERKEN YAPILABİLİR (oturumlara dağıtıldı)

### B1 · PAKET TRİYAJI — 93 açık madde
```
en yoğun   0035 (38) · 0019 (12) · 0033 (10) · 0031 (8) · 0032 (6)
```
🔴 **HÜKMÜ `denetim/HUKUM-<ADIN>.json`A YAZIN** — `CEVAP.json`a DEĞİL.
Birleştirmeyi koordinatör koşturur (`arac/_hukum_birlestir.py`), ve o alet
kapalı→açık geçişini **insana sorar**; doğrudan yazım o korumayı atlar.

### B2 · TOPOĞRAFYA — `BES-ALTYAPI.md` ① ve ③
Motor kilitli ama **ölçüm ve araştırma serbest.**
```
① topoğrafik unsurlar haritada BİLGİ olarak
③ bölgeler topoğrafyaya YASLANIR
```
⚠️ `arac/uret_petek.py` YASAK; `denetim/` altına ölçüm ve öneri yazılır.

### B3 · KORİDOR — `BES-ALTYAPI.md` ⑤
**Emre'nin kararı: (a) KARMA YOL** — Osmanlı kuşağında OWTRAD (gerçek
menziller), dünyada DEM'den TÜRET.
🔴 Ve `denetim/BULGU-YOL-VERISI.md` okunmalı: **Itiner-e** (CC BY 4.0 ·
14.769 kenar · her kenarda EĞİM) bir SINAV TAKIMI olabilir.
⚠️ *"Koridor"* adı İKİ ayrı mekanizmada: `_b3_koridor_kirp()` (geometri)
ve `data/koridor*.js` (menzil ağı). Karıştırma.

### B4 · 1923 ÇIPASI — Güney · Trakya · dünya
Doğu kolu bitti: sapma **7,29 → 0,73 km.** Yöntem tuttu, kalan kollar açık.
🟢 Rehber (GeoNames allCountries.zip, CC BY 4.0) **İNDİRİLMİŞ DURUMDA** —
yeniden indirilmeyecek. `alternatenames` tarihî adı veriyor: bugünkü adı
yazmak haritaya **anakronik ad** koymaktır.

### B5 · ÖDÜNÇ TARİH TRİYAJI — 255 küme
`py arac/_odunc_tarih.py`. İlk 15 tarandı: 13 meşru · 1 belirsiz · 0 ödünç.
🔴 **Aletin sıralaması TERS ÇALIŞIYOR** (ölçüldü): yayılıma göre sıralamak
antlaşma günlerini tepeye çıkarıyor; gerçek ödünç vakalar (137-252 km)
**listenin dibinde.** Orta bandı tara.

### B6 · `Değişmez 2y` — 33 gerçek aday
`arac/_yer_eslesme_ok102.py`. En keskinleri: Avlonya↔Bahreyn 3229 km ·
Sana↔Üsküdar 3221 km.
🔴 İki ihtimali baştan ayır: **① madde yanlış yere bağlanmış** (kırılma
doğru) · **② kırılmanın kendisi ödünç tarih** (madde doğru). Çareleri ters.

### B7 · MALİYET-MESAFE — kalite ölçümü
Hız kapısı geçildi (2,2×). Sıradaki: *"0,05°'de çizilen sınır yeterince iyi
mi?"* Eşik ölçümden ÖNCE damgalandı: ortanca ≤3 km ve alan farkı ≤%2.

---

## ⚖️ C — KOORDİNATÖRDE BEKLEYEN KARARLAR
```
C1  7 çakışma      birleştirici "KAPALI ← yeni AÇIK" dedi, ezmedi
C2  H-0052         geçersiz hüküm `baska-ise-bagli` — geçerli kümeye çevrilecek
C3  denetle_eslesme tavanları  §A 130/97 · §C 117/73
      🔴 tavan doğduğu gün ZATEN aşılmıştı (109 kayıt / tavan 97)
      ⇒ gerileme DEĞİL; tavan doğrulanmış tabandan yeniden konacak
C4  kabartay künyesi  öneri geliyor; renk koşudan sonra
```

---

## 📌 GECE BOYUNCA KONAN KURALLAR — hepsi bağlayıcı
```
COMMIT sende · PUSH BENDE (git push koşturma)
HÜKÜM  denetim/HUKUM-<ADIN>.json  ·  CEVAP.json'a YAZMA
TAKVİM atlas JÜLYEN · TDV de bu dönemde Jülyen ⇒ ÇEVİRME YOK
KESİNLİK gün bilinmiyorsa YYYY-01-01 · YIL da bilinmiyorsa
         `kesinlik:"yuzyil"` + yüzyıl ortası, YALNIZ belirsiz uca
TARİH SEÇİMİ bir günü "külliyatta karşılığı var" diye seçmek ÖDÜNÇ TARİHTİR.
         Kaynak neyi adlandırıyorsa o alınır; ±0 eşleşme YAN FAYDADIR.
`bulunamadı` BİR SONUÇTUR — uydurmaktan kat kat değerli
```
