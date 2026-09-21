# Harici motorlara iki görev promtu — 21 Eylül 2026

İkisi de **boş toprak bölüşümü ayarının** (BTB) eksik iki parçasını getiriyor:
Flash *hangi arazi verisi elimizde var*, gmp *eşik kaç km olmalı*. İkisi de
atlasın hiçbir dosyasına yazmaz, kendi rapor dosyasını üretir; ölçümü biz
okuyup uygularız (harici motor dayanak değil, ÖLÇÜM ALETİdir).

⚠️ Promtları olduğu gibi yapıştır — proje bağlamı yok, hepsi içlerinde yazılı.

---

## ① gemini flash → `denetim/GEMINI-FLASH-ARAZI-0921.md`

```
Sen bir COĞRAFİ VERİ ENVANTERCİSİSİN. Görevin ölçmek, yorumlamak değil.

BAĞLAM: Elimizde tarihî bir atlas motoru var. Motor, yerleşim noktalarından
sürtünmeli bir yürüyüşle toprak sahipliği çiziyor. Yeni bir ayar ekledik:
iki yerleşim arasındaki açıklık belli bir eşikten genişse aradaki toprak
"deniz" sayılıyor ve bölüştürülmüyor. Üç "deniz" sınıfı var:
  a) KUM DENİZİ  — çöl (Sahra gibi)
  b) DAĞ DENİZİ  — dağ bloğu (Himalaya, Alpler)
  c) ORMAN DENİZİ — yağmur ormanı (Amazon) ve tundra (Yakutistan, Irkutsk)
Motorun çöl maskesi VAR (`ne_10m_geography_regions_polys.geojson`,
FEATURECLA == "Desert"). Dağ için ayrı maskeye ihtiyaç YOK — sürtünme alanı
zaten eğimi okuyor. ORMAN ve TUNDRA için maskemiz YOK.

GÖREV: `veri-kaynak/` klasöründeki dosyaları tarayıp şu soruyu SAYIYLA
cevapla: orman ve tundra maskesi için ELİMİZDE NE VAR?

Her aday katman için şu beş şeyi yaz ve HİÇBİRİNİ TAHMİN ETME:
  1. dosya adı (tam yol)
  2. dosya boyutu ve geometri türü (polygon / line / point)
  3. sınıf alanının ADI (FEATURECLA, featurecla, type, ...) — dosyadan oku
  4. o alandaki BENZERSİZ DEĞERLERİN TAMAMI ve her birinin kaç öznitelik
     taşıdığı (ör. "Desert: 14, Plain: 31, Tundra: 0")
  5. bu katman orman/tundra maskesi olarak KULLANILABİLİR Mİ — evet/hayır
     ve tek cümle gerekçe

SONRA tek bir tablo ile bitir:
  | deniz sınıfı | elimizdeki en iyi kaynak | kapsıyor mu | eksik ne |
  (kum / dağ / orman / tundra dört satır)

KURALLAR — ihlali raporu geçersiz kılar:
· HİÇBİR DOSYAYI DEĞİŞTİRME, SİLME, TAŞIMA. Yalnız oku.
· Yazacağın TEK dosya: `denetim/GEMINI-FLASH-ARAZI-0921.md`
· Bulamadığın şeye "yok" deme, "BULUNAMADI" yaz — ikisi aynı şey değil.
· Dosya çok büyükse tamamını okuma; sınıf alanının benzersiz değerlerini
  akış hâlinde say ve KAÇ ÖZNİTELİK TARADIĞINI yaz.
· İnternete çıkma, yeni veri indirme. Soru "elimizde ne var".
```

---

## ② gmp → `denetim/GMP-ACIKLIK-0921.md`

```
Sen bir ÖLÇÜM ANALİSTİSİN. Bir eşik değerinin sayısını bulacaksın.

BAĞLAM: Tarihî bir atlas motorunda her yerleşim çevresindeki toprağı
sahipleniyor. Yeni bir ayar ekledik — "boş toprak bölüşümü ayarı": İKİ
YERLEŞİM ARASINDAKİ AÇIKLIK belli bir eşikten genişse aradaki toprak
bölüştürülmüyor, sahipsiz kalıyor ("kum denizi", "dağ denizi", "orman
denizi"). Eşiği TAHMİNLE seçmek istemiyoruz; ölçülmüş bir dağılımdan
seçmek istiyoruz.

VERİ: `data/yerlesimler.js` — düz JavaScript, `window.YERLESIMLER = [...]`
biçiminde nesne dizisi. Her nesnenin `ad`, `x` (boylam), `y` (enlem)
alanları var. Başka alanları GÖRMEZDEN GEL; özellikle `s`, `d`, `v`
alanlarına (devlet dönemleri) DOKUNMA, onlar bu soruya ait değil.
Aynı klasörde `data/yerlesimler_*.js` adında başka dosyalar da olabilir —
VARSA hepsini oku, kaçını okuduğunu raporun başına yaz.

GÖREV — üç ölçüm, üçü de sayıyla:

A) Her yerleşim için EN YAKIN BAŞKA yerleşime büyük daire (haversine)
   mesafesini hesapla. Bu dizinin dağılımını ver:
   ortanca · %75 · %90 · %95 · %99 · en büyük · ortalama · kaç nokta.

B) Bu mesafenin 300 km'yi aşan BÜTÜN yerleşimlerini listele (ad, x, y,
   mesafe, en yakın komşusunun adı), mesafeye göre azalan sırada. Her
   birini ELLE şu dört sınıftan birine ata ve gerekçesini tek cümle yaz:
   ÇÖL · DAĞ · ORMAN-TUNDRA · ADA-KIYI · SINIFLANAMADI
   (koordinata ve genel coğrafya bilgine dayan; emin değilsen
   SINIFLANAMADI yaz — uydurma.)

C) Şu üç somut açıklığı AYRI AYRI ölç ve km olarak yaz:
   · Sahra: Trablus/Tripoli (13.2°D, 32.9°K) ile Kano (8.5°D, 12.0°K)
     arasındaki en kısa mesafe, ve bu iki nokta arasında kalan ARADAKİ
     yerleşimlerin listesi (veriden) — gerçek açıklık hangisi?
   · Sibirya: Yakutsk (129.7°D, 62.0°K) ile Kuzey Buz Denizi kıyısı
     (yaklaşık 130°D, 72.5°K) arası
   · Himalaya: Lhasa (91.1°D, 29.6°K) ile Katmandu (85.3°D, 27.7°K) arası

SONUÇ: Tek paragrafta, A/B/C'ye dayanarak "eşik kaç km olmalı" için ÜÇ
seçenek öner (dar / orta / geniş), her birinin yanına *o eşikte B
listesinin kaç yerleşiminin kapı ARDINDA kalacağını* yaz. Hangisinin
seçileceği bizim kararımız — sen sayıyı getir, hükmü verme.

KURALLAR — ihlali raporu geçersiz kılar:
· HİÇBİR PROJE DOSYASINI DEĞİŞTİRME. Yazacağın TEK dosya:
  `denetim/GMP-ACIKLIK-0921.md`
· Hesabı GÖZDEN yapma, kod yaz ve koştur; kullandığın betiği raporun
  sonuna ekle ki tekrar koşturulabilsin.
· Okuyamadığın dosya olursa "okunamadı" yaz ve SEBEBİNİ yaz; eksik veriyle
  hesaplanan yüzdelik sessizce yanlış olur.
· B şıkkındaki sınıflandırma SENİN YORUMUNDUR ve öyle etiketlenmelidir —
  ölçümle aynı tabloda ama ayrı sütunda dursun.
```
