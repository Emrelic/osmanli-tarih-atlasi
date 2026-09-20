# UFUK ÖLÇÜMÜ — B görünümü tek parametreyle çözülür mü?

Oturum: B-GORUNUM-0072 (Opus 5) · 21 Eylül 2026 · istek: 1.MURAT, M-4849
16 Eylül kararının ertelenmiş ölçümü: *"Koridor ve enklav fonksiyonları
YALNIZ ÖLÇÜM gerek gösterirse yazılır."* (`denetim/MOTOR-UFUK-0916.md` hiç
yazılmamıştı — bu belge onun yerine geçiyor.)

Alet: `denetim/ARAC-B-GORUNUM-UFUK-0072.py` — motorun `PETEK_D` aşamasına
kadarki kısmını KÜÇÜK BİR KUTUDA koşturur (tam koşu DEĞİL), verilen
`--saat` bütçesiyle. Ham sayılar: `denetim/B-GORUNUM-0072-UFUK.json`.

> 🔴 **KUTU SAYISI DÜNYA SAYISI DEĞİLDİR.** Kutu kenarında petekler kesilir.
> Karşılaştırma **aynı kutuda farklı saatler** arasında anlamlıdır.
> ✅ Alet doğrulandı: Anadolu kutusu 40 saatte sahipsiz kara **13.161 km²**
> veriyor — `denetim/MOTOR-YURUYUS-0917.md`in bağımsız ölçtüğü sayının
> BİREBİR aynısı.

---

## 0 · Önce yapısal bulgu: ufuk yürüyüşü yeniden hesaplatmıyor

Kodu okudum (`arac/uret_petek.py`): `_kv_dijkstra(_kvsurt, _KVNEHIR)`
koşuda **bir kez** koşar (:1611) ve iki alan üretir — hücre başına **varış
bedeli** (`_kvuzak`) ve hücre **sahibi** (`_kvsahip`). Dijkstra'nın bütçe
kesmesi **yoktur**, bütün ızgarayı çözer. `MOTOR_YURUYUS_SAAT` üretim
yolunda **tek** yerde geçer: `_YR_BUTCE = SAAT × NEHIR_KM_SAAT` (:1682),
o da yalnız "bütçeden UZAK" eşyükselti konturunu (`_YR_UZAK`) çizmek için;
`_yr_kes()` her peteği o konturla keser.

⇒ **Ufku büyütmek = "daha az kes".** Yeni yürüyüş yok.
⇒ **16 Eylül kararının "varış günü hücreye yazılsın" şartı ZATEN sağlanmış
durumda:** bedel alanı ufuktan bağımsızdır; 5/7/10/15/20 aynı alanın farklı
kontur seviyeleridir.

---

## 1 · MALİYET (M-4849 ①) — beklenen 2–4 kat, ölçülen ~0

| kutu | ayar | bütçe | koşu süresi |
|---|---|---|---|
| Anadolu (26,34,50,44) | bugünkü (Voronoi+200 km) | — | 112,2 sn |
| Anadolu | 40 sa = 5 gün | 201,6 km | 137,1 sn |
| Anadolu | 56 sa = 7 gün | 282,2 km | 113,5 sn |
| Anadolu | 80 sa = 10 gün | 403,2 km | 128,0 sn |
| Anadolu | 120 sa = 15 gün | 604,8 km | 121,4 sn |
| Sahra (10,14,36,34) | bugünkü | — | 108,6 sn |
| Sahra | 40 sa | 201,6 km | 106,0 sn |
| Sahra | 56 sa | 282,2 km | 101,7 sn |
| Sahra | 80 sa | 403,2 km | 109,1 sn |
| Sahra | 120 sa | 604,8 km | **91,8 sn** |

🔴 **"2–4 kat" beklentisi ÇÜRÜDÜ.** Süre ufukla artmıyor; eğilim bile yok
(en büyük ufuk en hızlı koşulardan biri). Yayılma ±%20 ve makine yüküyle
açıklanıyor — bu makinede aynı anda başka oturumlar koşuyordu.
📌 Ve bu bir tesadüf değil, §0'ın doğrudan sonucu: pahalı olan Dijkstra
ufuktan bağımsız koşuyor.

---

## 2 · ÜRÜN (M-4849 ②) — dört boşluk sınıfı

### (d) Sahipsiz kara — **ufuk BU SINIFI TAMAMEN ÇÖZÜYOR**

| bütçe | Anadolu | Sahra |
|---|---|---|
| bugünkü (Voronoi+200 km) | 4.858 km² | 687.409 km² |
| 40 sa (5 gün) | 13.161 km² | 944.361 km² |
| 56 sa (7 gün) | **0** | 216.195 km² |
| 80 sa (10 gün) | **0** | 16.431 km² |
| 120 sa (15 gün) | **0** | **0** |

🔴 İki cümle birden çıkıyor:
① **Yürüyüş bayrağı tek başına sahipsizliği ARTIRIYOR** (Anadolu 4.858 →
13.161, Sahra 687k → 944k): 40 saatlik ufuk bugünkü 200 km'lik tavandan
DAHA DAR kesiyor. Bayrağı 40 saatte açmak haritayı bu yönden kötüleştirir.
② **Emre'nin sezgisi doğrulandı ve sayıya çevrildi:** yoğun kutuda 7 gün
yetiyor, tenha kutuda 15 gün gerekiyor. "Yoğunda değişmez, tenhada kapanır"
tam olarak budur — Anadolu'da 56/80/120 saat **birebir aynı** sonucu
veriyor (doygunluk ≤7 gün), Sahra'da her kademe düşürüyor.

### (a) Gövde içindeki delik · (b) kopuk parça · (c) koridor

Anadolu, 1520-06-15:

| bütçe | delik (km²) | kopuk parça | koridor |
|---|---|---|---|
| bugünkü | 9 (47.215) | 65 | 2 |
| 40 sa | 21 (60.848) | 86 | 3 |
| 56 sa | 19 (60.652) | 85 | 3 |
| 80 sa | 19 (60.652) | 85 | 3 |
| 120 sa | 19 (60.652) | 85 | 3 |

Sahra, 1683-06-15:

| bütçe | delik (km²) | kopuk parça | koridor |
|---|---|---|---|
| bugünkü | 16 (29.672) | 18 | 3 |
| 40 sa | 10 (43.976) | 16 | 3 |
| 56 sa | 8 (41.633) | 15 | 2 |
| 80 sa | 7 (40.851) | 13 | 3 |
| 120 sa | 7 (40.851) | 12 | 2 |

🔴 **Ufuk bu üç sınıfı ÇÖZMÜYOR.** Anadolu'da 56 saatten sonra sayı hiç
değişmiyor; Sahra'da yavaşça düşüyor ama sıfırlanmıyor (7 delik, 40.851 km²
ve 12 kopuk parça 15 günde de duruyor). Koridor sayısı gürültü mertebesinde.

⚠️ **ÖNEMLİ ÇEKİNCE — bu üç sayı A'nın HAM hâlindendir.** Kutu kesiti
`PETEK_D`de duruyor; motorun kendi `delikleri_doldur` (B1),
`_b2_enklav_birlestir` (B2, ≤250 km) ve `_b3_koridor_kirp` (B3) adımları
BU SAYILARIN SONRASINDA koşuyor. Yani (a)(b)(c) haritada bu hâliyle
görünmüyor — zaten A'nın içinde kapanıyorlar. Ufkun onları kapatmaması
bir kusur değil, **iş bölümü**: ufuk (d)'yi çözer, B1/B2/B3 (a)(b)(c)'yi.

### Dolgu yolunun rakamıyla yan yana
Dolgu katmanı (`arac/dolgu.py`) yayındaki A üzerinde kesit başına
**634–640 parça** üretiyordu ve cins dağılımı şuydu:
`bosluk` 4.187 · `koridor` 139 · `paylasim` 126 · `enklav-bag` 0
(12 kesit toplamı, 4.452 kayıt).

🔴 **`bosluk` + `paylasim` = %96,9 ve İKİSİ DE SINIF (d)'DİR** — yani
sahipsiz toprağın devletlere dağıtılması. Ufuk (d)'yi sıfırlıyor.
⇒ **Doğru ufukta dolgunun işinin ~%97'si ortadan kalkar.** Geriye
`koridor` (%3,1) kalır, onun için motorda B3 zaten var.

---

## 3 · ÇÖL (M-4849 ③) — ÖLÇÜLEMEDİ, ama bedeli ölçüldü

Eylül kararı "çöl/buz/yüksek plato hücrelerinde ufuk 5 günde kalır" diyor.
🔴 **Bu kelepçe motorda YOK:** `_YR_BUTCE` tek bir küresel sayıdır, hücre
başına ufuk yoktur. Yazılması gerekir; maliyetini ölçemedim çünkü ölçülecek
kod yok — **"ölçülemedi", "gerekmiyor" değil.**

Ne kadar şey bağlı olduğu ÖLÇÜLDÜ: Sahra kutusunda ufuk 40→120 saate
çıkınca sahipsiz kara **944.361 → 0 km²**. Yani kelepçe olmadan 15 günlük
ufuk, bu tek kutuda ~944 bin km²'lik çölü devletlere BOYAR. Emre'nin
çekincesi ("Sahra'da yerleşimler çölden fazla alan alır") bu sayının ta
kendisidir. ⇒ **Kelepçe ufkun ön şartıdır**, sonradan eklenecek bir süs değil.

---

## 4 · ÇELİŞKİ (M-4849 ④) — 200 km kuralı BUGÜN DE aşılıyor

`NEHIR_KM_SAAT = 5,04` km/sa (`uret_petek.py:1402`). Düz ovada, sürtünmesiz
üst sınır — iki yakadan yürüyen buluştuğu için köprülenen boşluk bunun İKİ KATI:

| ufuk | bütçe | **köprülenen azami boşluk** |
|---|---|---|
| 5 gün (40 sa) | 201,6 km | **403,2 km** |
| 7 gün (56 sa) | 282,2 km | **564,4 km** |
| 10 gün (80 sa) | 403,2 km | **806,4 km** |
| 15 gün (120 sa) | 604,8 km | **1.209,6 km** |
| 20 gün (160 sa) | 806,4 km | **1.612,8 km** |

🔴 **Çelişki ufuk büyüdüğü için doğmuyor, ZATEN VAR:** bugünkü 5 günlük
bütçe bile 403 km'lik boşluğu kapatabiliyor — Emre'nin "eksklav en fazla
200 km" kuralının iki katı.
⚠️ Bunlar sürtünmesiz TAVAN; eğim ve nehir bunu kısaltır, gerçek dağılım
ölçülmedi. Ama tavan aritmetiği kesindir.
📌 Not: motorda "200 km" kuralının karşılığı ZATEN AYRI bir kapı olarak
duruyor — `B2_ENKLAV_KM = 250` (gerekçesi: ölçülen en uzak karasal enklav
223 km). Yani kural ufkun içinde değil, B2'nin içinde yaşıyor; ufku
büyütmek o kapıyı bozmaz.

---

## 5 · BANTLAR (M-4849 ⑤) — yapısal olarak bedava, ölçülen üst sınır küçük

§0 gereği bantlar aynı bedel alanının farklı kontur seviyeleridir; ek
Dijkstra YOKTUR. Ölçülen üst sınır: bayrak KAPALI (hiç kontur yok) 108,6 sn
↔ bayrak AÇIK (bir kontur) 106,0 sn — fark ölçüm gürültüsünün altında.
⇒ Bir kontur geçişi < ~5 sn; beş bant ≤ ~25 sn.
⚠️ Bu bir ÜST SINIR, doğrudan ölçüm değil: bant başına süreyi ayrı ayrı
ölçmedim. Dosya boyutu etkisi de ölçülmedi (kutu modu `data/` yazmıyor).

---

## 6 · HÜKÜM: **"UFUK + ŞU İKİ ŞEY"**

**Ufuk yeter** — ama yalnız kendi işinde, ve iki şart karşılanırsa:

1. ✅ **Sahipsiz toprak (sınıf d) tamamen çözülür** ve dolgu katmanının
   işinin **~%97'si** buharlaşır. Ayrı bir dolgu veri dosyası ve arayüz
   anahtarı muhtemelen GEREKMEZ.
2. 🔴 **ÖN ŞART — çöl/buz/plato kelepçesi YAZILMALI.** Kelepçesiz ufuk
   Sahra'yı boyar (tek kutuda 944 bin km²). Bu, ufkun bedeli değil FİYATIDIR.
3. 🔴 **UFUK TEK SAYI OLAMAZ.** Ölçüldü: yoğun kutu 7 günde doyuyor, tenha
   kutu 15 gün istiyor. Tek küresel sayı ya Anadolu'yu gereksiz şişirir ya
   Sahra'yı boş bırakır. Ya bölgeye duyarlı ufuk, ya da **bantlar** (§5)
   ile Emre'nin elle seçmesi. Bantlar zaten neredeyse bedava.
4. ⚪ **Koridor/enklav fonksiyonları AYRICA YAZILMAZ:** motorda B1/B2/B3
   olarak zaten varlar ve (a)(b)(c) sınıflarını A'nın içinde kapatıyorlar.
   Ufuk onların yerini almaz, almasına gerek de yok.

### Ölçülemeyenler (açıkça)
- Çöl kelepçesinin maliyeti — kod yok.
- Sürtünmenin köprülenen mesafeyi ne kadar kısalttığı — tavan aritmetiği var, dağılım yok.
- Bant başına dosya boyutu — kutu modu `data/` yazmıyor.
- Dünya ölçeğinde sahipsiz kara eğrisi — yalnız iki kutu ölçüldü.
- (a)(b)(c) sayıları B1/B2/B3 SONRASI — kutu kesiti onlardan önce duruyor.
