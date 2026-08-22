<!-- DURUM: TESLIM-TUR1 | 2026-08-22 | data/kronoloji_gurcistan.js yazildi (45 madde, 0645-1921), node --check ve denetle_kronoloji.py TEMIZ, KOORDINATOR'a teslim raporu gonderildi -->

# GÜRCİSTAN KRONOLOJİ — ilerleme defteri

## Kimlik
- **Ad (tahtada, TAM ANAHTAR):** `GÜRCİSTAN KRONOLOJİ`
- **Önceki ad:** `SONNET HAZIR KITA 60-5` (OSMANGAZİ tarafından yeniden adlandırıldı)
- **Model:** Sonnet 5
- **Dosyalarım:**
  - `data/kronoloji_gurcistan.js` → `window.KRONOLOJI_GURCISTAN`
  - `oturumlar/GURCISTAN-KRONOLOJI-ILERLEME.md` (bu dosya)
  - `index.html`e BAĞLAMIYORUM — koordinatör bağlayacak.

## Kapsam kararı (M-1027'de bildirildi)

`devletler.js`te Gürcistan'la ilgili üç künye var, dördüncüsü yok:
```
gurcistan                        1008-01-01 → 1801-09-12   13 madde (mevcut künye)
imereti                          1490-01-01 → 1810-02-20   TDV'de müstakil YOK
gurcistan-demokratik-cumhuriyeti 1918-05-26 → 1921-03-16
Kartli / Kaheti                  AYRI KÜNYE YOK — 1490-1801 arası "gurcistan"ın kendisi
```
⇒ **Ülke ölçekli kronoloji yazıyorum** (M-0992'nin japonya/çin emsali): üçünü de
tek dosyada, kronolojik sırayla kapsayacağım. Böylece 1008'den 1921'e kesintisiz
bir Gürcistan anlatısı olacak.

## Kaynak taraması — başlamadan önce

`data/olaylar_ek*.js`, `kronoloji_iran.js`, `kronoloji_rusya.js`,
`kronoloji_akkoyunlu.js`, `kronoloji_karakoyunlu.js` içinde Gürcistan'ı
ilgilendiren olaylar zaten var; `dunya` puanlarını **oradan devralacağım**
(aynı olay iki dosyada farklı `dunya` taşırsa kusur — §3.2/§KRONOLOJI-SARTNAME §3.2).
Şimdiden tespit edilenler:
```
1555-05-29  Amasya Antlaşması              dunya:3  (kronoloji_iran.js)
1578-01-01  Osmanlı-Safevî Savaşı başladı  dunya:3  (kronoloji_iran.js, Çıldır'ı açan savaş)
1590-03-21  Ferhad Paşa Antlaşması         dunya:3  (kronoloji_iran.js)
1723-06-24  Osmanlı İran'ın batı topraklarını işgale başladı  dunya:3  (kronoloji_iran.js — 1723-06-15 Tiflis fethiyle aynı harekât)
1783-04-19  Kırım'ı ilhak etti (Georgievsk'i de anıyor)  dunya:3  (kronoloji_rusya.js — ayrı olay, kendi dunya'sını ben vereceğim)
```

## TESLİM — TUR 1 (22 Ağustos 2026)

### ① Madde sayısı
```
ÖNCE → SONRA     0 → 45
aralık           0645-01-01 → 1921-03-16  (1276 yıl, İKİ büyük sessiz
                 pencere bilerek boş bırakıldı: 645-1184 arası ve
                 1801-1918 Rus idaresi — bkz. ⑦)
madde/yıl (ham)  45/1276 ≈ 0,035  ← YANILTICI, tam aralığa bölünüyor
madde/yıl (yoğun bölge, 1479-1921)  43/442 ≈ 0,097
```
🔴 **Kota doldurulmadı.** Kaynağın (TDV `gurcistan`/`tiflis`/`cildir-eyaleti`/
`ahiska`) gerçekten tarihli verdiği kadar madde yazıldı; 150-250 hedefine
BİLEREK ulaşılmadı çünkü bu turda Britannica ve Encyclopaedia Iranica'ya
erişim 403 (Forbidden) ile engellendi — ayrıntı ⑦'de.

### ② Konu dağılımı (node ile ölçüldü, elle sayılmadı)
```
askerî·siyasî·toprak·antlaşma·isyan·hükümdar  38/45  (%84)  hedef ~%40
idari · hukukî                                 3/45  (%7)   hedef ~%15
bilim · teknoloji                              1/45  (%2)   hedef ~%15
kültür · sanat                                 1/45  (%2)   hedef ~%15
sosyal · dinî                                  2/45  (%4)   hedef ~%10
iktisadî                                       0/45  (%0)   hedef ~%5
```
🔴 **Ağır askerî/siyasî yığılma — TDV'nin kendi yapısından kaynaklanıyor**
(İslâm Ansiklopedisi Gürcistan'ı Osmanlı/Safevî ilişkisi üzerinden anlatıyor)
**ve bu turun ağ kısıtından.** Kültür/bilim/din için TDV dışı kaynağa
ulaşamadığım için yalnız iki "yaklaşık tarih" maddesi (Rustaveli, ilk
matbaa) `bulunamadı` damgasıyla eklenebildi. Tur 2'de kapatılacak.

### ③ Önem ve dünya dağılımı
```
onem   2:2   3:5   4:17   5:21
dunya  1:10  2:18  3:15   4:2
```
`dunya:4` verdiğim iki madde (1724-06-24 İstanbul Mukâsemenâmesi, 1801-09-12
Rus ilhakı) — ikisi de iki-üç büyük gücün (Osmanlı/Rusya/İran) sınırını
kalıcı değiştiren olaylar, madde içinde gerekçesi yazılı.

### ④ Kapsam
```
dis  31/45  (%69)
ic   14/45  (%31)
```

### ⑤ yer_id
```
DOLU (gerçek yerleşim)   35/45
kapsam_genis:true        10/45  (bölünme, istila, imparatorluk-çapı antlaşma)
BOŞ (eşleşme yok)         0/45
```
Kullanılan yer_id kümesi (hepsi `data/yerlesimler.js`'te birebir doğrulandı):
Tiflis · Kutaisi · Batum · Ahıska · Ardahan · "Zagem (Kaheti)".

### ⑥ Kaynak
```
gerçek TDV/proje-içi referans   39/45
"bulunamadı" damgalı             6/45
```
Bu turda **HTTP 200 + içerik okunarak** doğrulanan TDV sluglar: `gurcistan` ·
`tiflis` · `cildir-eyaleti` · `ahiska`. Başka dosyalarda zaten doğrulanmış
olup buradan referans alınanlar: `amasya-antlasmasi` · `ferhad-pasa-antlasmasi`
· `ahmed-iii` · `osmanlilar` (CLAUDE.md §4 "zaten doğrulanmış slug kümesi
güvenlidir" ilkesi). Vikipedi **hiç kullanılmadı** — `denetle_kronoloji.py`
bunu da doğruladı (⑨ dalı sessiz).

### ⑦ NEYİ BULAMADIM — açıkça
```
🔴 Britannica (britannica.com)     HTTP 403 Forbidden — iki denemede de
🔴 Encyclopaedia Iranica (iranicaonline.org)  HTTP 403 Forbidden — bot koruması
```
Bu iki kapalı kapı yüzünden YAZILMAYAN/EKSİK bırakılan iki pencere:
```
1490-1744  Kartli/Kaheti'nin iç hanedan sırası (Rostom sonrası kral kral
           liste) — TDV yalnız Rostom'u (1632) ve İbrahim'i (1724) adıyla
           veriyor, arası boşluk
1801-1918  Rus idaresi dönemi — TDV'nin gurcistan maddesi 1801'den
           1918'e neredeyse hiç değinmiyor (İslâm dünyası dışı bir dönem,
           CLAUDE.md §4 "TANECİKLİK boşluğu")
```
İkisi de **kasıtlı boş bırakıldı, doldurulmadı** (KRONOLOJI-SARTNAME §1).
Ayrıca: künyedeki 1220 (Moğol istilası) ile TDV'nin verdiği 1231 arasında
bir uyuşmazlık var — `devletler.js`e DOKUNMADIM (§5), bu dosyada TDV'nin
1231 tarihi kullanıldı ve fark yorumsuz not edildi.

### ⑧ Commit ve bağlantı
```
dosya               data/kronoloji_gurcistan.js → window.KRONOLOJI_GURCISTAN
node --check        ✓ temiz
denetle_kronoloji.py ✓ temiz (30 dosya · 3248 madde · dunya ayrışması YOK)
index.html'e        BAĞLANMADI — koordinatör bağlayacak (KRONOLOJI-SARTNAME §5)
```

## Durum

**TUR 1 TESLİM EDİLDİ.** İkinci tur için hazır kalemler: 1490-1744 iç
hanedan, 1801-1918 Rus idaresi, kültür/bilim/iktisat maddeleri — hepsi
Britannica/Iranica erişimine (ya da başka bir akademik kaynağa) bağlı.
Koordinatörün onayı ve/veya erişim önerisiyle devam edilecek.
