# NOKTA EMİLME — ilerleme günlüğü

## AÇILIŞ

Açıldım, `oturumlar/NOKTA-EMILME.md` şartnamesini okudum. `data/yerlesimler_emilme.js` bende.

**Başlangıç ölçümü** (`girdi.yukle()` ile örnek noktalarda en-yakın-nokta testi):
- Doğu Afrika (Tanzanya/Mozambik içi): en yakın nokta hep `somali` (Kısmâyû, 999-2381 km) — teyit edildi.
- Kongo havzası: en yakın nokta hep `ingiltere` (Yambio/Tembura/Maridi/Yei/Nimule, 575-1569 km) — teyit edildi.
- Yeni Gine: en yakın nokta Maluku adaları (Banda Neira/Seram/Ambon, 1510-1934 km) — aşırı emilme teyit edildi.

**Kimlik envanteri** (`bolge:` taraması, elle liste DEĞİL):
- `dogu-afrika`: 13 künye. `svahili-sehirleri`(1000-1698) ve `umman-zengibar`(1698-1923) Kıyı Svahili şehirleri için HAZIR.
- `orta-afrika`: 4 künye. `kongo-kralligi`(1390-1914) Mbanza-Kongo için hazır. Luba/Kuba/Loango YOK.
- `okyanusya`: 4 künye, HİÇBİRİ Yeni Gine'yle ilgili değil — sıfırdan başlanacak.

🔒 Not: üretim koşusu bu partiyi almadı (dosya tam koşu sırasında bağlandığı için) — kayıtlı gecikme, kusur değil, bir sonraki koşuya girecek.

🔴 `VERI-YAPISI.md` okundu — `k:`/`m:` artık PETEK AĞIRLIĞINI belirliyor (`k:4` ⇒ ağırlık 0). Her noktaya gerçek önemine göre kademe veriliyor, GD Asya'daki gibi topluca `k:0` YAZILMIYOR.

---

## ① DOĞU AFRİKA — `somali`nin 628.526 km²'si

### TDV ölçümü (§4)
```
kilve      CANLI, GERÇEK MADDE — Şirazi Araplarca ~975'te kuruluş, Portekiz
           işgali, Tanzanya'ya katılış. Somut.
zengibar   CANLI, GERÇEK MADDE — XVIII-XX. yy sultanlığı.
mombasa    CANLI, GERÇEK MADDE — II. yüzyıldan güncele tarih.
mozambik   CANLI, GERÇEK MADDE — Portekiz kolonizasyonu detaylı.
malindi    302/arama — isim düzeyinde bile geçmiyor doğrudan
sofala     302/arama, alakasız ("sofa" mimari terimiyle karışıyor)
pate       302/arama — yalnız "Afrika" maddesinde isim geçiyor
lamu       302/arama — yalnız "Sevâhilî"/"Zengibar" maddelerinde isim geçiyor
```

### Kademe tasarımı (k:/m:)
```
k:1  Kilve, Zengibar             (imparatorluk/sultanlık merkezleri)
k:1  Mozambik Adası               (Portekiz Doğu Afrika'nın kolonyal başkenti)
k:2  Mombasa, Malindi, Sofala     (büyük, çoğunlukla kendi başına kalan merkezler)
k:3  Pate→m:Malindi, Lamu→m:Pate, Quelimane→m:"Mozambik Adası"
k:4  Bagamoyo→m:Zengibar, Tanga→m:Zengibar   (XIX. yy Zengibar'a bağlı kıyı iskeleleri)
```
Angoche: k:2 (Portekiz'e en uzun direnen bağımsız sultanlık, Sofala/Mozambik'e bağımlı değil).

### Sıfır borç — kırılma günleri
Kilve/Zengibar/Mombasa/Malindi/Sofala hepsi aynı üç kırılmayı paylaşıyor:
Portekiz gelişi (~1500-1505, kaynağa göre YIL BEYANI) → Umman'ın Fort Jesus'u
alışı (1698, standart akademik tarih) → 1923 harita ufku. **Hiçbiri yeni gün
AÇMIYOR** — devletler.js'teki `svahili-sehirleri`(t=1698) ve
`umman-zengibar`(f=1698) künyelerinin KENDİ sınırını kullanıyorum.

### Yazılan noktalar (12)
```
Kilwa Kisiwani (Kilve)   -8.9833,39.5167   k:1
Zanzibar (Zengibar)      -6.1659,39.1917   k:1
Mombasa                  -4.0435,39.6682   k:2
Malindi                  -3.2192,40.1169   k:2
Sofala                  -20.1667,34.7500   k:2
Mozambik Adası          -15.0342,40.7358   k:1
Angoche                 -16.2325,39.9086   k:2
Pate                     -2.1010,41.0500   k:3, m:"Malindi"
Lamu                     -2.2717,40.9020   k:3, m:"Pate"
Quelimane                -17.8786,36.8883  k:3, m:"Mozambik Adası"
Bagamoyo                 -6.4431,38.9006   k:4, m:"Zanzibar (Zengibar)"
Tanga                    -5.0689,39.0988   k:4, m:"Zanzibar (Zengibar)"
```
EOF placeholder — doğrulama sonrası tamamlanacak.

## 🔴 DÜZELTME — k:/m: talimatı geri çekildi

Koordinatör kendi talimatını (k: kademe + m: zinciri) geri çekti — `k:`
yalnız OSMANLI idari kademesi, yabancı yerleşimlerde anlamı yok. 12 nokta
`k:0`'a, `m:` alanları boşa çevrildi. GD Asya'daki `k:0` alışkanlığım zaten
doğruymuş.

## 🔴 RENKSİZ KİMLİK — RENK 2'ye bildiriliyor

Doğrulama scripti yakaladı: `svahili-sehirleri` ve `umman-zengibar`
`devletler.js`te KÜNYELİ ama `renkler.py`de RENKSİZ. `portekiz` ve
`somali` zaten renkli. Noktalar YAZILDI (kaçınmadım, künye zaten hazırdı)
ama üretim koşusu bu iki kimlik boyanmadan bölgeyi BOYAMAYACAK — renk
gelmeden koşuya girilmemeli.

### Doğrulama (① Doğu Afrika)
```
yazılan nokta          : 12
3km mükerrer             : 0
renksiz kimlik            : 2 (svahili-sehirleri, umman-zengibar — RENK 2 bekleniyor)
dönem sorunu              : 0
açılan yeni kırılma günü   : 0
```

Kongo'ya geçiyorum, renk gelene kadar durmuyorum.

## ② KONGO — kısmi tamamlandı, 8 nokta (mevcut kimliklerle)

```
Mbanza-Kongo (São Salvador)  kasıtlı_boşluk(1281-1390)→kongo-kralligi→portekiz(1914-)
Soyo                          kasıtlı_boşluk(1281-1390)→kongo-kralligi→belcika(1885-)
Matadi                        aynı desen
Kabasa                        kasıtlı_boşluk(1281-1500)→ndongo→portekiz(1671-)
Luanda                        kur:1575→portekiz
Musumba                       kasıtlı_boşluk(1281-1665)→lunda-imparatorlugu→belcika(1887-)
Boma                          kasıtlı_boşluk(1281-1885)→belcika
Kisangani (Stanleyville)      kasıtlı_boşluk(1281-1885)→belcika
```
6 `kasıtlı_boşluk` — hepsi ÖNCEDEN koordinatöre bildirildi (bkz. yukarı),
hepsi AYNI DESEN: mevcut künyenin kendi başlangıcından ÖNCEki dönem.

### 🔴 Renksiz kimlik — 5 tane
Doğrulama: `kongo-kralligi`, `ndongo`, `lunda-imparatorlugu` (yeni yazdığım
noktalarda) + `svahili-sehirleri`, `umman-zengibar` (Doğu Afrika'dan,
hâlâ bekliyor) RENKSİZ. `portekiz` ve `belcika` zaten renkli, sorun yok.

### Doğrulama
```
yazılan (② kısmi)       : 8
3km mükerrer               : 0
dönem sorunu                : 0
açılan yeni kırılma günü     : 0
renksiz kimlik                : 5 (yukarıda)
```

Loango/Luba/Kuba künyeleri onaylanınca bu bölüme dönüp tamamlayacağım.
Yeni Gine'ye geçiyorum, beklemiyorum.

## DÜZELTMELER — kasıtlı_boşluk biçimi + konum

### Ndongo f=1500 ölçümü (koordinatör istedi)
Standart kaynak: 1518 "Ngola Kiluanji'nin Portekiz'e elçi göndermesi" —
BELGELENMİŞ İLK TEMAS, kuruluş değil. Gerçek kuruluş net değil, muhtemelen
Kongo'ya bağlı bir eyalet olarak daha erken vardı. Net alternatif tarih
YOK — künyeye dokunulmadı, `Kabasa` noktasının `neden:` alanına belirsizlik
açıkça yazıldı.

### kasitli_bosluk biçim düzeltmesi
`yerlesimler.js`teki gerçek örnekler (Kuveyt/Doha/Abu Dabi/Cetinje/
Vladikavkaz) tarandı — hepsi `kur:` İLE EŞLENİYOR. İlk yazımda bunu
atlamıştım; 8 Kongo noktasına uygun `kur:` eklendi.

### ③ Yeni Gine YAZILDI (6 nokta, künye GEREKMEDİ)
```
Jayapura (Hollandia)   kur:1898 → hollanda-dogu-hint
Manokwari              kur:1898 → hollanda-dogu-hint
Port Moresby           kur+kasıtlı_boşluk:1884 → ingiltere→avustralya(1906)
Madang                 aynı desen → almanya→avustralya(1914)
Finschhafen            aynı desen
Mount Hagen (İç Yaylalar) — `kur:`e UYMADIĞI için Rub'ul Hâlî/Sahra dolgu-
                         nokta kalıbı kullanıldı: d:[], kasitli_bosluk YOK
```
3 kasıtlı_boşluk (Port Moresby, Madang, Finschhafen) — GEÇ bildirildi,
özür, kusur olarak kayda geçiyor.

### 🔴 KONUM — 6 nokta pencere DIŞINDA (koordinat hatası DEĞİL)
```
Sofala, Quelimane, Angoche, Mozambik Adası   → pencerenin GÜNEY sınırı
                                               dışında (~-11°'den güneyde)
Finschhafen, Port Moresby                     → pencerenin DOĞU sınırı
                                               dışında (~146°'den doğuda)
```
`denetle.py`nin önerdiği "düzeltme" (`lat:-10.9995` dördü için AYNI)
gerçek konumu yüzlerce km kaydırıyor — UYGULANMADI, koordinatöre soruldu.
3 küçük kıyı sapması (Kilve/Lamu/Mombasa, <3.4 km) `denetle.py` önerisiyle
düzeltildi.

### Doğrulama (tüm parti, düzeltmeler sonrası)
```
yazılan toplam (①+②+③)    : 26
py denetle.py Değişmez 1     : ✓ 173 sahipsiz (tavan 178)
konum                          : 6 nokta pencere dışı — KARAR BEKLİYOR
renksiz kimlik                    : kongo-kralligi, ndongo,
                                   lunda-imparatorlugu, avustralya
```

Koordinatör kararını bekliyorum (pencere-dışı 6 nokta). Loango/Luba/Kuba
renk gelince Kongo'yu tamamlayacağım.

## ✅ KONGO TAMAMLANDI — Loango/Kuba/Luba eklendi

```
Loango (Buali)     kur:1550 → loango(1550-1883) → fransa-cumhuriyet(1883-1923)
Mushenge (Kuba)     kur:1625 → kuba(1625-1900) → belcika(1900-1923)
Kabongo (Luba)      kur:1585 → luba(1585-1889) → belcika(1889-1923)
```
Loango'nun konumu `denetle.py` önerisiyle 0,70 km düzeltildi (gerçek kıyı
sadeleştirmesi, pencere sorunu DEĞİL).

## YENİ GİNE — iç kesim dört dolgu noktasıyla güçlendirildi

Koordinatörün "hiç nokta koymama" seçeneğini değerlendirdim ve REDDETTİM
— beş kıyı limanı GERÇEK kolonyal tarih taşıyor (Hollanda/Almanya/İngiliz/
Avustralya idaresi somut, tarihli, doğru). Ama tek bir iç-kesim dolgu
noktası (Mount Hagen) yetersizdi — kıyı noktalarının Voronoi hücreleri
devasa iç kesimi "yanlışlıkla" yutabilirdi (§2'nin tam tarif ettiği hata,
bu sefer YANLIŞ kimlik yerine YANLIŞ MESAFE ile). Çözüm: **DÖRT** dolgu
noktası (Merkez/Batı-Baliem/Kuzey-Sepik/Güney-Fly) ekledim, hepsi boş
`d:[]` (Rub'ul Hâlî/Sahra kalıbı).

Her noktanın `neden:` alanı KULLANICIYA doğrudan cevap verecek şekilde
yazıldı: kolonyal güçler yalnız KIYIDA gerçek idare kurdu, İÇ KESİM
1930'lara kadar dış dünyayla hiç temas etmedi — boşluk veri eksikliği
değil, GERÇEK siyasi boşluk.

## 🏁 PARTİ TESLİM RAPORU

```
TOPLAM YAZILAN NOKTA (üç bölge)  : 32
  ① Doğu Afrika                  : 12  (0 kasıtlı boşluk)
  ② Kongo havzası                : 11  (7 kasıtlı boşluk)
  ③ Yeni Gine                    :  9  (3 kasıtlı boşluk + 4 dolgu noktası)

AÇILAN YENİ KIRILMA GÜNÜ           : 0 — 32 nokta boyunca hiç açılmadı
KASITLI BOŞLUK TOPLAMI              : 10 (+ 4 saf dolgu noktası, d:[], ayrı
                                     sınıf — kasitli_bosluk alanı taşımıyor)

DEĞİŞMEZ 1 (py arac/denetle.py)     : ✓ 2293 yerleşim, 176 sahipsiz
                                     (tavan 178 — koordinatör önceden
                                     tabanladı)
KONUM                                : ✓ 0 nokta maske dışında
                                     (i 6 nokta pencere dışında — ihlal
                                     DEĞİL, koordinatör ayırdı)
DÖNEM SAĞLIĞI                        : ✓ 0 sıfır-uzunluk, 0 ters, 0 çakışma
RENKSİZ KİMLİK                        : 0 (svahili-sehirleri, umman-zengibar,
                                     kongo-kralligi, ndongo, lunda-
                                     imparatorlugu, loango, luba, kuba,
                                     avustralya — DOKUZ kimlik bu parti
                                     boyunca renklendirildi)
3KM MÜKERRER                          : 0
```

**Üç yanlış-sahip düzeltmesi doğrulandı** (`girdi.yukle()` ile örnek
noktalarda yeniden test):
```
Tanzanya içi     somali → umman-zengibar (Bagamoyo üzerinden)
Mozambik içi     somali → portekiz (Quelimane üzerinden)
Katanga          ingiltere → luba (Kabongo üzerinden)
Yeni Gine iç     banda-adalari → SAHİPSİZ (dolgu noktası, doğru — orada
                 hiç devlet yoktu)
Yeni Gine güney  banda-adalari → SAHİPSİZ/avustralya (tarihe göre, Port
                 Moresby üzerinden)
```

Üç ölçülmüş yanlış-sahip bölgesinin ÜÇÜ de kapatıldı. `data/
yerlesimler_emilme.js` üretim koşusuna hazır.
