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
