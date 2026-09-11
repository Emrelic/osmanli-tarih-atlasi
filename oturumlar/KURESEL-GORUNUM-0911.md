# KÜRESEL GÖRÜNÜM — MapLibre v5 göçünün RİSK FİYATI

```
AD      KÜRESEL GÖRÜNÜM
MODEL   Opus
DİZİN   C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ
SENİN DOSYAN   denetim/BULGU-KURESEL-0911.md · oturumlar/KURESEL-GORUNUM-0911.md
🔒 KOŞU 9 CANLI — `data/*.js` ve `arac/*.py` DONUK.
🔴 VE BU TUR `js/app.js`e DE YAZMA — orada şu anda SERBEST KATMAN
   oturumu çalışıyor (`§7`: her dosyanın TEK sahibi vardır).
   Bu tur SAF ÖLÇÜM. Göçü yapmıyorsun, FİYATINI çıkarıyorsun.
⚠️ Makine meşgul. Önizleme açacaksan TEK sekme.
```

## ① İŞ — Emre'nin isteği (K)

Küre görünümü. Ölçülmüş engel:
```
maplibre-gl 4.7.1'de `setProjection` YOK  ⇒  v5 gerekiyor
`setTerrain` VAR
RİSK: 37 katman + 9 sefer katmanı + 481 DOM işaretçisi v5'te SINANMADI
```

## ② ÖLÇECEKLERİN — dördü, her birinde bir SAYI

```
① KIRILAN API — v4.7.1 → v5 arasında `js/app.js`in KULLANDIĞI kaç çağrı
   değişti/kaldırıldı? Listeyi v5'in kendi göç belgesinden çıkar, sonra
   `js/app.js`te GREP'LE. "Muhtemelen sorun olmaz" bir ölçüm değildir.
② 481 DOM İŞARETÇİSİ — küre projeksiyonunda işaretçi konumlandırma
   düzlem projeksiyonundan FARKLI çalışır. Kaç tanesi `project()` /
   `unproject()` ya da elle hesaplanmış piksel kullanıyor?
③ 9 SEFER KATMANI — güzergâh çizgileri kürede antimeridyeni kesince ne
   olur? Veride antimeridyen kesen sefer VAR MI? (say, tahmin etme)
④ GERİ DÖNÜŞ — v5 bozarsa v4.7.1'e dönmek kaç dosya değişikliği?
   (CDN satırı tek mi, yoksa kod da mı bağlı?)
```

## ③ KURALLAR
```
🟢 `D022` öngörünü ÖNCE yaz: "göç X saat sürer, Y şey kırılır" — sonra ölç
🔴 `D079` yeterli ama GEREKLİ olmayan bir ölçüt maliyeti FAZLA sayar;
   fazla saymak az saymak kadar bozar. "481 işaretçinin hepsi kırılır"
   demeden önce kaçının gerçekten projeksiyona bağlı olduğunu SAY.
🔴 v5'i KURMA, denemeye kalkma. Bu tur BELGE + KOD OKUMA.
   Deneme gerekiyorsa fiyatını yaz ve BANA SOR — makine meşgul.
🟢 `D107` bulunamadı / ölçülemedi / okumadım.
```

## ④ TESLİM
Dört kalemin dördüne ayrı cevap, her birinde SAYI ve sayının NEREDEN
geldiği. Sonunda tek cümlelik hüküm: **"bu göç şimdi yapılmalı /
koşu 10'dan sonra / hiç yapılmamalı"** — ve gerekçesi.

Tahtaya: `--kim "KÜRESEL GÖRÜNÜM" --kime "1.MURAT"`.
