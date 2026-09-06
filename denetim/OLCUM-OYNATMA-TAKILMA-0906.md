# OYNATMA TAKILMASI — teşhis: **tik 62 ms, iş ~400 ms**

> **1.MURAT (Oturum 0) · 6 Eylül 2026 · KOD OKUNDU, YAZILMADI** (koşu 7b sürüyor).

Emre: *"siteyi görüntülerken donma yavaşlık takılma olmamalı, çat çat tık
diye geçmeli kronoloji oynaması. Hızlı dinamik olmalı — bunu engelleyen
yapılar var mı, nasıl hafifletip kıvraklaştırabiliriz."*

---

## ① 🔴 TEŞHİS: ZAMANLAYICI, İŞİN ALTI KATI HIZLI ATEŞLENİYOR

```
setInterval(..., 62)          js/app.js:6216   ⇒ ~16 tik/saniye
tik başına yapılan iş         ~400 ms          ⇒ ~2,5 tik/saniye kapasite
```

Kodun **kendi ölçüm yorumu** (`app.js:5131`, 22 Ağustos 2026, Emre'nin
ekranında alınmış):
```
sehirGuncelle  an  401 ms      ← gerçek tarih değişimi
sehirGuncelle  an 2568 ms
sehirGuncelle  an 4220 ms
```

⇒ Her tik bir öncekini bitirmeden sıraya giriyor. Tarayıcının tek iş
parçacığı **kuyruğa** düşüyor. Kullanıcının gördüğü *"takılma"* bir
yavaşlık değil, **biriken kuyruğun boşalması.**

📌 Ve `62 ms` bir hız ayarı değil **sabit**: "zaman akışı" dalında hız
seçimi `adim`i (günü) büyütüyor, aralığı değil. Yani hızlı moda
geçmek tik sıklığını düşürmüyor — **aynı kuyruğa daha büyük sıçramalar
yüklüyor.**

---

## ② 🔴 SEBEP: YEDİ AĞIR FONKSİYONUN ALTISINDA "DEĞİŞMEDİYSE ÇIK" KAPISI YOK

`tarihAyarla` → `guncelle()` (`app.js:5033`) her tikte şunu koşuyor:

| fonksiyon | satır | `setData` | değişim kapısı |
|---|---|---|---|
| devletGuncelle | 339 | 1 | 🔴 yok |
| sehirGuncelle | 2106 | 0 (DOM) | 🔴 yok |
| savasGuncelle | 2556 | 0 | 🟡 kısmî |
| seferGuncelle | 3056 | 1 | 🔴 yok |
| koridorGuncelle | 3537 | 2 | 🔴 yok |
| devirGuncelle | 2686 | 2 | 🔴 yok |
| isgalGuncelle | 2764 | 1 | 🔴 yok |
| olaylarGuncelle | 4361 | 0 | 🟢 var (14 iz) |

🟢 **Ve doğru desen kodda ZATEN VAR** — Osmanlı/tâbi/bölge katmanları
`di !== aktifDonem` kapısıyla korunuyor (`app.js:5053`), yani **yalnız
dönem değişince** yeniden kuruluyor. Öteki yedi katman aynı korumadan
yoksun.

⇒ Eksik olan bir teknik değil, **var olan bir kapının uygulanmadığı yedi yer.**

---

## ③ 🔴 VE YÜK TARİHLE BİRLİKTE BÜYÜYOR — 18 KAT

`sehirGuncelle` her tikte kronoloji dizisini baştan tarıyor
(`o.gi > t + 365` olunca kesiyor). Dizi `gi`ye göre **sıralı**
(`app.js:4109`), yani kesme çalışıyor — ama kesme noktası tarihle
birlikte ilerliyor:

```
1300  ->    342 madde        1700  ->  3811
1400  ->  1109               1800  ->  4567
1500  ->  1991               1900  ->  5770
1600  ->  3079               1923  ->  6143      ⇒ 18 KAT
```

Aynı büyüyen tarama oynatma döngüsünün **kendisinde de** var
(`app.js:6200`), yani tik başına **iki kez**.

📌 Bu, belirtinin **niçin başta iyi sonra kötü** olduğunu açıklıyor:
oynatma 1300'de akıcı, 1900'de tıkanık. Bir "yavaş program" değil,
**tarihle birlikte ağırlaşan** bir program.

---

## ④ ⚠️ NE ÖLÇTÜM, NE ÖLÇMEDİM

```
🟢 ÖLÇÜLDÜ    tik aralığı (62 ms) · kapı yokluğu (6/7) · tarama büyümesi (18×)
              · `olaylar`ın sıralı olduğu · setData sayıları
🟡 DEVRALINDI  ~400 ms iş süresi — kodun KENDİ yorumundan (22 Ağustos).
              Bugün ölçülmedi, ve o günden beri veri büyüdü ⇒ muhtemelen
              DAHA KÖTÜ, ama bu bir tahmin.
🔴 ÖLÇÜLMEDİ   tarayıcıda gerçek kare süresi. Koşu 7b tam bir çekirdek
              tutuyor; şimdi ölçülen sayı koşunun yükünü de taşır.
              ⇒ Koşudan SONRA `agirOlc` ile ölçülecek — alet zaten kodda.
```

---

## ⑤ 🟢 ÇARE — ve ikisi de mimarî değil, mevcut deseni yaymak

```
① DEĞİŞİM KAPISI     yedi fonksiyonun her birine "girdim değişti mi"
   (ucuz, riski düşük)  anahtarı. Desen app.js:5053'te ZATEN çalışıyor.
                      Beklenen: tik başına iş, dönem kırılmayan günlerde
                      neredeyse sıfıra iner (kırılma 537 gün / 234.000 gün)

② KUYRUĞU KES        setInterval yerine requestAnimationFrame + "önceki
   (küçük, etkisi büyük) kare bitmediyse bu tiki ATLA" bayrağı. Kuyruk
                      birikemez ⇒ takılma yerine düzgün kare düşmesi

③ TARAMAYI KALDIR    tik başına iki lineer tarama, sıralı dizide ikili
   (orta)             arama + imleçle O(1)'e iner. 18 katlık büyüme biter
```

⚠️ **Sıra önemli:** ① ve ② birlikte ölçülmeli, ayrı ayrı değil — ikisi
aynı belirtiyi farklı uçtan tutuyor ve biri tek başına uygulanırsa
öteki *"gereksiz"* görünebilir.

📌 Ve bu, `OLCUM-YUK-VE-AB-0906.md`deki **ayrıştırma** darboğazından
(105 MB · ~9,2 sn) **AYRI bir kusurdur**: o açılışta bir kez ödenir, bu
her tikte. İkisi aynı şikâyetin iki ayrı sebebi.
