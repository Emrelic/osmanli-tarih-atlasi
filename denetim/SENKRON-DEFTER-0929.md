# SENKRON-DEFTER-0929 — harita-kronoloji senkron defteri

Ölçüm: 29 Eylül 2026 15:34 · `denetle.py` @ `ae045142` · alet
`denetim/ARAC-SENKRON-DEFTER-0929.py` (denetle.py'yi İÇE AKTARIR, dokunmaz) ·
ham defter `denetim/SENKRON-DEFTER-0929.json` (paket → kayıt listesi).

## 0. ÖNGÖRÜ — ölçümden ÖNCE yazıldı (döküm alınmadan, aynen korunuyor)

- 786 KAPSAM DIŞI kırılma **~250-350 ayrı güne** düşer (ortalama ~2,5-3 kırılma/gün;
  fetih dalgaları ve antlaşma günleri büyük kümeler, çok sayıda tekil gün de olur).
- En çok kırılma **KRONO-ATLANTIK-0929**'a (Fransa/İspanya/İngiltere/Portekiz/Hollanda —
  sömürge ve Avrupa savaşları) çıkar; ikinci **KRONO-KUZEY-0929** (Rusya genişlemesi).
- 180 AÇIK'ın çoğu Balkan/Tuna/Kafkas paketlerine düşer (Osmanlı küresine yakın olanlar).
- 2t'nin 11 kırılmasız maddesi ile AÇIK 180'in kesişimi küçüktür (0-3).

### Tuttu mu?
| Öngörü | Ölçüm | Hüküm |
|---|---|---|
| 786 → 250-350 gün | **786 gün** — soru yanlış birimle soruldu (§1) | ❌ ve NİÇİN değerli: aşağıda |
| en çok ATLANTIK, ikinci KUZEY | yer: KUZEY 1132 ≈ ATLANTIK 1125; olay: ATLANTIK 465 ≫ KUZEY 134 | ✅ olay ölçüsünde |
| AÇIK çoğu Balkan/Tuna/Kafkas | AÇIK net 174 olayın yalnız 24'ü bu dört pakette; en çok DOĞU-İSLAM 35, ATLANTIK 26 | ❌ |
| 2t × AÇIK 0-3 | **0** | ✅ (ama tanım gereği — §5) |

**Niçin tutmadı:** öngörüm "kırılma = yerleşim" sanıyordu. `denetle.py`de
`degismez2` kırılmaları `kir[tarih]` sözlüğünde toplar: **bir kırılma bir GÜNDÜR**
ve o günün bütün yerleşimlerini taşır. Yani koordinatörün "786 kırılma kaç güne
düşer" sorusu yapısal olarak "786" cevabını verir; gün gruplaması denetle.py'de
ZATEN yapılıyor. Asıl yanıltıcı olan tersi: kova sayısı gün, ama bir gün içinde
BİRDEN ÇOK AYRI OLAY olabilir (1917-11-07'de Rusya→Sovyet ile Rusya→Transkafkasya
aynı gün). Doğru iş birimi **OLAY ADAYI = (gün, eski sahip → yeni sahip)**.
AÇIK öngörüsü de tutmadı çünkü AÇIK "Osmanlı'ya ≤2014 km" demektir — İran,
Mısır, Orta Avrupa da bu yarıçapın içinde.

## 1. Birimler ve eşik — iki düzeltme

- **Birim:** kova sayısı = GÜN. Bu defterde üç birim ayrı tutulur:
  `GÜN` · `YER-KIRILMASI` (gün × açıklanmamış yerleşim) · `OLAY ADAYI`
  (gün × eski→yeni; tek maddeyle kapanabilecek küme).
- **Eşik 300 km DEĞİL, 2014 km.** `denetle.py:1715 KAPSAM_ESIGI_KM = 2014.0`
  (kronolojinin en uzak konumlu maddesinden ölçülmüş). Şartname ve ortak doktrin
  "300 km" diyor — yanlış; düzeltilmesi koordinatörde.

## 2. Üç kova — tam döküm

| Kova | Gün | Yer-kırılması | Olay adayı | Mevcut kuyruk+künye maddesiyle zaten kapanan yer | **NET açık olay** |
|---|---|---|---|---|---|
| AÇIK | 180 | 1994 | 253 | 885 | **174** |
| KAPSAM DIŞI | 786 | 2231 | 1142 | 737 | **985** |
| YIL-TEMSİLÎ | 158 | 1000 | 436 | 398 | **316** |
| **Toplam** | 1124 | 5225 | 1831 | 2020 | **1475** |

"Zaten kapanan": aynı ALÂKA ölçütüyle (`degismez2(..., yer_sarti=True)` — yer ya
da taraf anılmalı) Değişmez 2 evreninin dışındaki 44 kuyruk kronoloji dosyası
(5025 madde) ve `devletler.js` künye kronolojileri evrene katılınca kapanan
kırılmalar. Kayıtta `kuyrukta_kapali` / `kunyede_kapali` bayrağıdır —
**bayrağı true olan kırılmaya madde yazılmaz, mükerrer olur.**

## 3. 🔴 SENKRON KÖRLÜĞÜ — bu işin en önemli bulgusu

`denetle.py olaylari_yukle()` evreni YALNIZ `olaylar*.js` + `kronoloji_sinir*.js`.
Ne mevcut `kronoloji_*.js` kuyruğu ne de M-5396 ile doğan `kronoloji_cok_*.js`
evrendedir. Sonuç:
- Kırılmaların **%39'unun (2020/5225) maddesi sitede VAR** ama kapı onları görmüyor.
- Paketlerin bu seferberlikte yazacağı maddeler 2s sayısını **hiç düşürmeyecek**;
  "harita ile senkron" iddiası kapıyla ölçülemez kalır.
- Karar koordinatörün (ben `denetle.py`ye dokunmadım): `kronoloji_cok_*.js`
  (ve belki kuyruk) 2s evrenine katılsın mı? Katılırsa tavan kendiliğinden iner;
  alet bunu önceden ölçtü (yukarıdaki "zaten kapanan" sütunu).

## 4. Paket kırılımı (birincil)

Atama ölçütü (ölçülebilir, `ARAC` içinde): kırılan yerleşimin o gün başlayan ve
biten pencerelerinin kimlikleri (yeni önce) → ① `PAKET_KIMLIK` (künyesiz harita
anahtarları ve §8 devletleri) → ② künye `bolge:` → paket. Sömürge kimlikleri
(yeni-ispanya, ispanyol-peru, portekiz-brezilyasi, ingiliz-kuzey-amerika,
hollanda-dogu-hint …) birincil kendi bölgesi, **ikincil ATLANTIK**. Osmanlı iç
kimlikleri (fetret şehzadeleri, `__BOSLUK__`) → ÇEKİRDEK.

| Paket | Yer | Gün | Olay | NET olay (açık/k.dışı/yıl) | Osmanlı taraflı* | İkincil yer |
|---|---|---|---|---|---|---|
| ATLANTIK | 1125 | 415 | 556 | **465** (26/354/85) | 10 | +477 |
| KUZEY | 1132 | 158 | 175 | **134** (19/86/29) | 3 | +42 |
| DOĞU-İSLAM | 425 | 72 | 99 | **68** (35/4/29) | 15 | +6 |
| ORTA-AVRUPA | 203 | 71 | 80 | **65** (19/28/18) | 18 | +102 |
| BALKAN-D | 87 | 24 | 26 | **17** (11/0/6) | 15 | +19 |
| İTALYA | 64 | 25 | 26 | **17** (10/0/7) | 9 | +9 |
| BALKAN-B | 35 | 17 | 17 | **12** (5/0/7) | 8 | +1 |
| TUNA | 75 | 11 | 15 | **10** (8/0/2) | 3 | +10 |
| MAĞRİB | 25 | 13 | 13 | **6** (1/0/5) | — | +16 |
| KAFKAS | 25 | 7 | 8 | **6** (5/0/1) | 4 | +10 |
| ÇEKİRDEK | 365 | 12 | 15 | **12** | 5 | — |
| PAKETSİZ (bölge) | 1664 | | | **663** | 22 | |

\* Osmanlı taraflı olay = bir tarafı `OSMANLI`. Ortak doktrin §5.2 gereği bu
maddeler **çekirdeğin** (`olaylar*.js`) işidir, ülke paketinin değil — toplam 112.

PAKETSİZ ayrıntı (net olay): Güney Amerika 232 · Kuzey Amerika 129 · Orta Amerika
71 · Doğu Asya 49 · Batı Afrika 28 · Anadolu beylikleri 25 · Orta Asya 22 ·
Okyanusya 19 · Arabistan 17 · Güneydoğu Asya 16 · Güney Asya 16 · Doğu Afrika 13 ·
Güney Afrika 7 · Orta Afrika 6 · Kuzey Avrupa 3 · Karayip 3 · künyesiz
suud/yemen/hicaz 7. **Hiçbir paketin kapsamında değil** — Dalga 3 ya da bilinçli
kapsam dışı hükmü koordinatörde.

### En büyük olay adayları (tek maddeyle en çok yer kapatan)
- KUZEY `1917-11-07` rusya-geçici → sovyet **377 yer** (Ekim Devrimi) · `1867-10-18` Alaska satışı 15 · `1878-03-03` Ayastefanos 15
- ÇEKİRDEK `1410-06-15` Musa → Süleyman Çelebi 86 · `1413-07-05` Mehmed Çelebi → Osmanlı 68 · `1402-07-28` 29
- ATLANTIK `1916-09-01` Alman→İngiliz Doğu Afrika 25 · `1810-05-25` Mayıs Devrimi 18 · `1915-07-09` GB Afrika 16 · `1825-08-06` Bolivya 15
- DOĞU-İSLAM `1386-01-01` Celâyirli→Timurlu 30 · `1517-05-19` Memlük→Osmanlı 19 · `1381-01-01` Serbedâr→Timurlu 17
- ORTA-AVRUPA `1526-08-29` almanya→avusturya 24 (Breslau, Brno — ⚠️ Mohaç günü Bohemya/Silezya devri: kimlik/gün sorusu, bkz. §6)
- TUNA `1330-01-01` Macar→Eflak 13 · `1878-07-13` Berlin → Romanya 13
- KAFKAS `1917-11-07` → Transkafkasya 8 · `1578-08-09` Gürcistan→Osmanlı 5

En yoğun yıllar (yer): 1917 (781) · 1413 (144) · 1821 (112) · 1402 (104) · 1901 (97) · 1469 (94).

## 5. Çapraz (④)

- **2t × AÇIK = 0.** 11 kırılmasız maddenin hiçbirinin ±30 gününde AÇIK gün yok.
  ⚠️ Bu bir bulgu değil TANIMDIR: 2t "±30 günde hiç kırılma yok" der, AÇIK günler
  kırılmadır; kesişim yapısal olarak boştur. Soru ancak pencere genişletilirse
  anlam kazanır.
- **2i tek açık:** `1878-09-18` kazanç — Bihaç + Ostrovica (Stara Ostrovica,
  Kulen Vakuf); en yakın madde "Berlin Antlaşması yürürlüğe girdi: Güney
  Besarabya…" 46 gün uzakta. Bosna işgali (Habsburg) günü → KRONO-BALKAN-B /
  ORTA-AVRUPA.

## 6. Bulamadım / ölçemedim

- Kırılmanın DOĞRU olup olmadığı (yerleşim penceresi mi yanlış, madde mi eksik)
  bu aletin sorusu değil; defter yalnız "haritada değişim var, maddesi yok" der.
  Kuşkulu örnek (hüküm değil): `1526-08-29 almanya → avusturya` Breslau/Brno.
- `—` (1303 yer tarafı): pencere bitip yenisi başlamayan (sahipsizliğe/kuyruk
  yerleşimine geçen) ya da ilk kez başlayan yerleşim; eski/yeni sahibi okunamadı
  anlamına gelir, paket ataması öbür taraftan yapıldı.
- Künye `kronoloji:` alanında üç haneli yılı olan maddeler (ör. `861-…`) 2s
  penceresine (1281-1923) düşmediği için elendi.
