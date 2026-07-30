# Onuncu denetim — bitişiklik · 30 Temmuz 2026

**Araç:** `arac/denetle_bitisiklik.py`
**Kural (kullanıcı, hatalar 12 md.11):**

> "Karadan toprak genişlemelerinde ana kara ile genişleyen yerin bağlantısının
> olması beklenir. Eğer böyle bir durum yok ise bunun geçerli sebebinin
> araştırılması lazım. Denizden geçiş mi yapılmış acaba diye. Neticede uçakla
> gidilip arada geçiş yok iken ele geçirilemez."

```bash
py arac/denetle_bitisiklik.py              # ~4 dk
py arac/denetle_bitisiklik.py --ayrinti    # bütün satırlar
py arac/denetle_bitisiklik.py --dagilim    # ham dağılım (eşik seçmek için)
```

---

## Bu denetim neyi okuyor — ve neden

⚠️ **Üretilmiş geometriyi okur** (`data/donemler.js`), yerleşim kayıtlarını
değil. Bilerek: kullanıcı **ekranda gördüğü** kopukluğu şikâyet ediyor ve
kopukluk yerleşim verisinde yok — peteğin kıyı maskesine kesilmesinde doğuyor.
Veriden bakan bir denetim Gümülcine'yi temiz raporlardı.

Bedeli: sonuç **son üretimin tarihine** aittir. Üretim koşmadan araç eski
haritayı denetler; çıktının ilk satırında `donemler.js`'in damgası yazıyor.

## Ölçüm — kural yazılmadan önce

452 dönem · 927 petek · **1613 yeni bileşen** (30 Temmuz 22:29 geometrisi)

```
gövdeye DEĞİYOR   1342
KOPUK              271
```

271 kopuğun tamamını ihlal saymak yanlış olurdu, ve sebebi kullanıcının kendi
cümlesinde: *"denizden geçiş mi yapılmış acaba diye"*. Bu yüzden birinci ölçüt
mesafe değil, **aradaki hattın kara mı deniz mi olduğu**:

| aradaki en kısa hattın kara oranı | adet |
|---|---|
| **DENİZ (<%10)** | **147** |
| çoğu deniz (%10-50) | 50 |
| çoğu kara (%50-85) | 24 |
| **KARA (≥%85)** | **50** |

**221 bileşen deniz hattıyla ayrılmış ve hepsi meşru** — Rodos, Girit, Kıbrıs,
Sakız, Midilli, Cezayir, Kırım. Donanmayla alınmıştır; kural bunları muaf tutar.
Denetimin ilk işi bu 221'i listeden çıkarmak.

### İkinci ölçüt: mesafe — ve buradaki asıl bulgu

Kara boşluğu olan bileşenlerin dağılımı:

```
<5 km 1 · 5-20 km 5 · 20-50 km 9 · 50-100 km 14 · 100-300 km 38 · ≥300 km 8
```

**Sezgiye ters olan şey burada:** büyük boşluk *tarihtir*, küçük boşluk
*hatadır*.

- **100 km'nin üstü gerçek sıçramadır.** Tebriz 1514 (585 km), Bağdat 1638
  (129 km), Hotin, Basra, Şamahı — ordu araya giren **yabancı toprağı aşmıştır**.
  Enklav/sefer sonucudur, geometri kusuru değildir.
- **100 km'nin altında araya bir devlet sığmaz.** Orada kopukluk ya geometri
  kusurudur ya da **eksik yerleşim noktasıdır** (CLAUDE.md §2: noktası olmayan
  bölge en yakın peteğe emilir).

### Üçüncü ölçüt: alan

Kopuk bileşenlerin **71'i 10 km²'den, 118'i 100 km²'den küçük** — yarımada
burunları ve kıyı kırıntıları (Modon, Preveze, Aynaroz). Bunlar "toprak
genişlemesi" değil. Kesme noktası **500 km²**; altında kalan 25 aday tek tek
bakıldığında kıyı kırıntısı çıktı.

```python
KARA_ORANI = 0.85     # bu oranın üstü "karadan gidilebilirdi"
YAKIN_KM   = 100      # altında araya devlet sığmaz
ALAN_KM2   = 500      # altı kıyı kırıntısı
```

---

## Bulgular

### A — karadan gidilebilirdi ama gövde kopuk (4)

| alan | boşluk | kara | tarih | katılım |
|---|---|---|---|---|
| 289 597 km² | 46,0 km | %89 | 1413-07-05 | Yenişehir, İnegöl… (Fetret'in toparlanışı) |
| **6 459 km²** | **3,7 km** | **%100** | **1363-01-01** | **Gümülcine** ← md.7 |
| 4 299 km² | 15,1 km | %100 | 1458-05-01 | Balyabadra (Patras) |
| 694 km² | 92,3 km | %100 | 1460-01-01 | Amasra |

**md.7 sayıyla doğrulandı:** Gümülcine 3,7 km'lik **tamamen kara** bir boşlukla
gövdeden ayrı. 3,7 km'ye devlet sığmaz; bu bir geometri/nokta eksiği.

1413 vakası en büyüğü ve ayrı bir sınıf: Fetret sonrası gövde birleşirken
46 km'lik kara boşluğu kalıyor — 289 bin km²'lik parça ana gövdeden kopuk
görünüyor.

### B — köşeden birleşme (2 büyük / 49 toplam)

İki gövde **tek noktada** değiyor: `unary_union` çizgi boyunca değen poligonları
eritir, tek noktada değenler ayrı geom olarak kalır. Ekranda "köşesinden
birleşmiş" görünen hâl budur.

| alan | tarih | katılım |
|---|---|---|
| 3 677 km² | 1517-01-22 | Süveyş, Sina güneyi, Kusayr |
| 1 070 km² | 1482-06-01 | Taman |

49'un 47'si 500 km²'den küçük kırıntı; eşik onları eliyor.

### C — uzak kara sıçraması (33) — tarihsel, geometri değil

Tebriz, Bağdat, Hotin, Basra, Şamahı, Gazze, Asyut. **Meşru** — ama:

> ⚠️ Meşru olması **kayıtsız** olabileceği anlamına gelmez. Her birinin kronoloji
> maddesi Değişmez 2'nin işidir, bu denetimin değil.

Tavanla izleniyor: yeni bir sıçrama eklenirse çıkış kodu 1.

### D — gövde içi kara kopukluğu (21) · **md.1 sayıyla doğrulandı**

A ve B yalnız o gün **eklenen** parçaya bakar. İlk dönemin öncesi olmadığı için
md.1 oraya hiç düşmüyordu. Bu bölüm gövdenin **bütününe** bakar ve ölçüm tam
orada patladı:

```
1281-01-01  Söğüt + Domaniç
   1 311 km²  ⟷  1 512 km²      boşluk 1,66 km      kara %100
```

**Kuruluş gövdesi iki ayrı leke.** 1,66 km, tamamen kara. Kullanıcının
"başlangıçtaki iki toprak köşesinden birleşmiş" dediği şey bu; aynı boşluk
1285 ve 1288'de de sürüyor, 1299'da İnegöl/Bilecik/Yarhisar katılınca kapanıyor.

Aynı kusur ardışık dönemlerde tekrar ettiği için bulgular **imzaya göre
tekilleştirilir**. İmzanın neye bakacağı ilk denemede yanlış seçildi ve ders
kayda değer (aşağıda).

En büyük yedi kusur:

| boşluk | konum | parçalar | ilk görüldüğü dönem |
|---|---|---|---|
| 20,50 km | 7,8°D 31,7°K | 637 966 ⟷ 2 717 282 km² | 1552-01-01 Tilimsan, Biskra |
| 44,42 km | 34,0°D 47,1°K | 131 376 ⟷ 604 906 km² | 1538-09-01 İbrail, Özi, Aden |
| 1,13 km | 34,2°D 47,2°K | 131 373 ⟷ 1 017 683 km² | 1678-07-19 Çehrin |
| 10,96 km | 45,3°D 40,8°K | 88 385 ⟷ 4 176 190 km² | 1604-06-08 Revan kaybı |
| 65,26 km | 37,8°D 18,6°K | 12 025 ⟷ 82 158 km² | 1884-01-01 Zeyla, Tokar |
| **3,70 km** | 25,9°D 41,3°K | 6 459 ⟷ 29 491 km² | **1363-01-01 Gümülcine** |
| **1,66 km** | 30,0°D 39,8°K | 1 313 ⟷ 1 508 km² | **1281-01-01 Söğüt+Domaniç** |

1,13 km'lik Çehrin kusuru ile 1,66 km'lik kuruluş kusuru aynı sınıf: bir
km'lik boşluk hiçbir tarihî sebeple açıklanamaz, orada petek kıyı/nehir
maskesine yanlış kesilmiştir.

## ⚠️ Bu denetimin kendi tavanı iki kez yanlış kondu — kayda geçsin

Bu dosya "eşik ölçülmeden seçilmez" diye yazılmışken **kendi kuralını ihlal
etti**, iki kez:

1. **Uydurma tavan.** D bölümü iki koşuda 9 dakikada bitmeyince tavan
   ölçülmeden `24` yazıldı. Ölçüldüğünde `128` çıktı — tavan gerçeğin altında
   kalmıştı ve denetim ilk koşuda ihlal veriyordu.
2. **Yanlış tekilleştirme.** O `128` de gerçek değildi. İmza
   `(küçük alan, büyük alan, mesafe)` idi; imparatorluk her dönem büyüdüğü
   için **aynı 20,5 km'lik boşluk** her seferinde yeni bir "büyük alan" ile
   çift kuruyor ve yeni kusur sayılıyordu. İmza boşluğun **orta noktasına**
   (0,1° ≈ 11 km yuvarlama) çevrilince gerçek sayı çıktı: **21**.

Ders, mükerrer denetiminde öğrenilenin aynısı ama başka kılıkta: *sayı
büyükse önce sayma yöntemini sorgula.* 128 rakamı "çok fazla kusur var"
gibi görünüyordu; aslında "aynı kusuru 6 kez sayıyorum" demekti.

---

## Hangi şikâyet nerede yakalandı

| şikâyet | bölüm | ölçüm |
|---|---|---|
| md.1 başlangıçtaki iki toprak köşeden birleşmiş | **D** | 1281, 1,66 km kara boşluk |
| md.6 Karesi ilhakında Gelibolu'ya atlama | **B** | 1354-03-02 tek nokta teması |
| md.7 Gümülcine'de karasal kopukluk | **A** | 3,7 km, %100 kara, 6 459 km² |
| md.10 Hamid ili / Isparta enklav | **C** ve **D** | 1381-06-01, 116 km sıçrama + 35,4 km gövde boşluğu |

md.10'un **C'ye düşmesi** anlamlı: Isparta 116 km uzakta ve arada Karamanoğlu
toprağı var — yani *enklav görüntüsü doğru*, düzeltilecek bir geometri kusuru
değil. Kullanıcının "enklav görünüyor" tespiti haklı, sebebi meşru.

## Performans notu — iki ön eleme olmadan bitmiyor

D bölümü ham geometriyle **9 dakikada bitmedi** (ölçüldü, iki kez). Üç
optimizasyon eklendi ve hepsi yorumda gerekçeli:

1. **Sadeleştirme** `simplify(0.005)` ≈ 550 m — aradığımız 1-100 km'lik
   boşlukların yanında görünmez, `distance()` köşe sayısıyla ölçekleniyor.
2. **Parça kümesi tekilleştirmesi** — aynı `o` dizisini kullanan dönem bir kez.
3. **Kutu ön elemesi** — kutular `YAKIN_KM` kadar şişirilip kesişmiyorsa
   `distance()` hiç çağrılmaz.

## Kör noktaları

- **Yalnız Osmanlı gövdesi denetleniyor.** Yabancı devletlerin gövdeleri
  `devletler_harita.js`'te ve aynı kural onlar için de geçerli; dünya kapsamı
  açılınca oraya da uygulanmalı.
- **Kara maskesi bugünün kıyı çizgisi.** Aral Gölü için tarihî poligon var
  (Oturum 15) ama genel olarak 1281'in kıyısı bugünkü değil; birkaç km'lik
  boşluklarda bu fark ölçüye giriyor.
- **"Meşru sebep" otomatik doğrulanmıyor.** Kural üç sebep sayıyor (deniz
  aşırı sefer · antlaşmayla devir · enklav); araç yalnız **deniz** sebebini
  ölçüyor. Antlaşma ve enklav ayrımı `savaslar.js` ile eşleştirme ister —
  sonraki tur.
- **Tavanlar elle düşürülür.** Düzeltme yapıldıkça `BEKLENEN_*` sabitleri
  ölçülüp indirilmeli, yoksa denetim yeni kusuru göremez.
