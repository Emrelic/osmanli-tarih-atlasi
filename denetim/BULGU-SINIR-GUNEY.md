<!-- DURUM: OLCULDU ¦ 2026-08-30 ¦ UYGULAMA-1 ¦ SINIR YERLEŞİMİ — GÜNEY kolu, tur 1 -->
# BULGU — SINIR YERLEŞİMİ, GÜNEY kolu (Suriye + Irak)

**Oturum:** UYGULAMA-1 · **Şartname:** `oturumlar/SINIR-YERLESIMI.md`
**Dosyam:** `data/yerlesimler_sinir_guney.js` (`window.YERLESIMLER_SINIR_GUNEY`)
🔒 Koşu canlı, `arac/`ye dokunmadım. Dosya `girdi.py`ye henüz bağlanmadı
(ORHANGAZİ bağlayacak) — bu koşuya girmez.

---

## ① ÖNCE ÖLÇÜM — mevcut durumun envanteri

`py arac/_sinir_envanteri.py --gun 1923-06-15 --hedef 10` ÇALIŞTIRILDI ama
OSMANLI↔fransa-cumhuriyet ve OSMANLI↔ingiltere çiftleri en kötü 34 satırda
HİÇ görünmedi (script yalnız en kötü 34'ü basıyor) — yani bu iki sınır
diğerlerine göre ZATEN İYİ DURUMDA. Kendi node sorgumla (haversine, <300 km)
tam listeyi çıkardım:

```
OSMANLI ↔ fransa-cumhuriyet: 234 vs 169 nokta, 276 yakın çift <300km
OSMANLI ↔ ingiltere:         234 vs 290 nokta, 177 yakın çift <300km
```

## ② 🟢 VAR OLAN 7 ÇİFT ZATEN OTURMUŞ (≤30 km) — yeni kayıt YAZMADIM

```
Suruç ↔ Ayn el-Arab (Kobani)        11,5 km
Kilis ↔ Azez (A'zâz)                15,7 km
Payas ↔ İskenderun                  19,0 km
Birecik ↔ Cerablus (Jarablus)       22,5 km
Dörtyol ↔ İskenderun                29,0 km
Silopi ↔ Malikiye (Derik)           29,8 km
Silopi ↔ Zaho                       21,9 km  ← IRAK sınırının TEK oturmuş çifti
```
Hepsi zaten `data/yerlesimler.js`'te (benim dosyam değil) doğru sahiplikle
kayıtlı. Tek eksik `sinir:true` bayrağı — yeni kayıt DEĞİL, var olan kayda
bir alan eklemek. Bunu ben yapamam (§7, yerlesimler.js koordinatörde),
listeyi `yerlesimler_sinir_guney.js`nin altına not düştüm.

## ③ 🔴 BÜYÜK BOŞLUK BULUNDU — Akçakale-Nusaybin arası ~250 km, HİÇ oturmuş çift yok

Suriye sınırının ORTA kesimi (Birecik/Cerablus ~38°E ile Nusaybin ~41,2°E
arası) tamamen boş: en iyi aday "Urfa↔Ayn el-Arab" 49,3 km — hedefin
(10 km) çok üstünde. Araştırdım: bu bölgenin GERÇEK 1921 sınır noktası
Bağdat Demiryolu'nun iki istasyonu — **Tell Abyad** (Suriye, Akçakale'nin
karşısı) ve **Ra's al-'Ayn/Ceylanpınar** (1921'de ikiye bölünmüş TEK şehir).
Üçü de veride YOKTU (py arac/_yer_ara.py, 3 km mükerrer taraması dahil).

## ④ UYGULANAN — 3 YENİ NOKTA, 2 ÇİFT

```
Tell Abyad (YENİ)  ↔  Akçakale (VERİDE ZATEN VAR)        ~30 km
Ras al-Ayn (YENİ)   ↔  Ceylanpınar (YENİ)                 ~3-4 km  ← EN İYİ ÇİFT
```
Kaynak: Wikipedia "Tell Abyad" ve "Ras al-Ayn" maddeleri (WebFetch ile
doğrudan alıntı çekildi, koordinatlar dahil) — TDV bu taneciği (küçük
demiryolu istasyonları) kapsamıyor, `§4` tanecik boşluğu meşru kullanıldı.
Pre-1918 sahiplik zinciri bölgesel emsalden (Rakka, Nusaybin — komşu ve
aynı idari/askeri tarih) alındı, ayrıca belirtildi.

Ras al-Ayn/Ceylanpınar çifti göreve TAM uyuyor: aynı şehrin 1921'de
bölünmesiyle doğmuş, ~3-4 km ayrı — hedefin (10 km) bile altında.

## ⑤ NEYİ YAPMADIM / SONRAKİ TURA

```
Irak sınırı (Silopi↔Zaho DIŞINDA)   HİÇ ÇALIŞILMADI — Musul meselesi
                                     1923'te henüz çözülmemişti (1926'ya
                                     kadar), sınır o dönemde BELİRSİZDİ;
                                     bu kendi başına ayrı bir araştırma
                                     ister (hangi gün hangi çizgi geçerli).
Suriye sınırının batı ucu            Meydan-ı Ekbez (Meidan Ekbis) — 1921
(Çobanbey/Meydan Ekbez)             Antlaşması'nın BAŞLANGIÇ noktası,
                                     araştırılmadı.
7 var olan iyi çift                  sinir:true bayrağı eklenmedi (§7,
                                     benim dosyam değil, yukarıda not).
```

## ÖZET — istenen rapor biçiminde

**3 nokta yazıldı (Tell Abyad, Ras al-Ayn, Ceylanpınar) → 2 yeni çift
oluştu, 7 var olan çift raporlandı (yeni kayıt değil). Kalan kesim: Irak
sınırının tamamı (Musul sorunu nedeniyle 1923'te belirsiz) ve Suriye
sınırının batı ucu (Meydan Ekbez) boş kaldı — sebebi zaman/kapsam, devam
edilecek.**
