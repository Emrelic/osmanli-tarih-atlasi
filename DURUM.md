# DURUM — neresi bitti, neresi eksik

**Ölçüm tarihi: 2026-07-30 · Canlı sürüm: r83**
Bu belgedeki her sayı ölçülmüştür, tahmin yoktur. Ölçüm betikleri `arac/`
altında; tekrar koşturmak için `py arac/denetle.py`.

> Bu belge **durum**dur, plan değil. Nereye gidiyoruz → `YOL-HARITASI.md`.
> Sıradaki işler → `YAPILACAKLAR.md`. Nasıl çalışılır → `CLAUDE.md`.

---

## 0. Tek bakışta

| | |
|---|---|
| Yayın | https://emrelic.github.io/osmanli-tarih-atlasi/ · r83 |
| Yerleşim (canlı) | **917** |
| Yerleşim (arşivde, aktif değil) | 581 (Avrupa 237 + Asya 344) |
| Harita kırılması | **441**, hepsi kronoloji maddeli |
| Kronoloji maddesi | **938** |
| Devlet (index) | **213** · haritada gövdesi olan **108** |
| Kişi | 247 |
| Padişah | 41 (36 portre) |
| Savaş · sefer · antlaşma | 169 · 50 · 33 |
| Antlaşma devir alanı (taralı) | 11 |
| Denetim | 7 kontrol, hepsi temiz |

---

## a) TARİH ÇİZGİSİ — neresi tamam, neresi eksik

Ufuk şu an **1281 – 1923**, gün hassasiyetinde. Kronolojinin yüzyıl dağılımı:

```
13. yy      5  #                            ← yalnız kuruluş yılları
14. yy     90  ##################
15. yy    125  #########################
16. yy    178  ####################################
17. yy    129  ##########################
18. yy    110  ######################
19. yy    217  ###########################################
20. yy     84  #################             ← 1923'te kesiliyor
```

**Tamam:** 14-19. yüzyıllar dengeli ve yoğun. Her kırılmanın maddesi var
(Değişmez 2), yani harita ile kronoloji senkron.

**Eksik:**
- **1281 öncesi hiç yok.** Nihaî hedef MÖ 12000 ama şu an alt sınır 1281 ve
  motor da o tarihte başlıyor. Selçuklu, Bizans'ın erken devri, İlhanlılar
  yalnız *komşu* olarak var — kendi kronolojileri yok.
- **13. yüzyıl 5 madde** — kuruluş devri neredeyse boş. Osman Bey öncesi yok.
- **20. yüzyıl 1923'te kesiliyor.** Cumhuriyet sonrası kapsam dışı (kasten).
- Kategori dağılımı **askerî-siyasî ağırlıklı**: fetih 217, siyaset 168,
  savaş 135, kayıp 113. Buna karşı **bilim 21, kültür 25** — yani 8. boyut
  (sosyal yapı, bilim, sanat, din, felsefe) kasten kapalı ve gerçekten kapalı.

---

## b) COĞRAFYA × ZAMAN — hangi bölge hangi devirde var

⚠️ **En önemli ölçüm bu, ve rahatsız edici:**

```
1281:  851 nokta sahnede
1400:  852
1600:  862
1800:  879
1923:  892
```

642 yıl boyunca sahneye çıkan nokta sayısı **851 → 892**, yani yalnız 41.
Gerçekte Port Said 1869'da, Petersburg 1703'te, Odessa 1794'te kuruldu.
Bu tablo şunu söylüyor: **`kur:` alanı veride neredeyse hiç kullanılmıyor ve
motor onu zaten okumuyor.** Yani atlasımız 1281'de 1900'ün şehirlerini
gösteriyor. (`MIMARI.md §3.1`)

Coğrafi kapsam, harita penceresi `box(-12, 1.5, 62, 62)` ile sınırlı — yani
**boylam 12°B – 62°D, enlem 1.5°K – 62°K.** Bu pencerenin dışında hiçbir şey
çizilemez. Dolayısıyla:

| Bölge | Durum |
|---|---|
| Anadolu, Balkanlar, Levant, Mezopotamya, İran, Kafkasya | 🟢 pencere içinde ve doygun |
| Kuzey Afrika, Doğu Afrika, Arabistan | 🟢 pencere içinde, Afrika partisiyle doldu |
| Orta ve Batı Avrupa | 🟡 pencere içinde ama seyrek; **237 noktalık parti hazır ve ölçülü**, kimlik bekliyor |
| Kuzey-Doğu Avrupa (Lehistan, Rusya, Baltık, İsveç) | 🟡 89 nokta, 56 bin km²/nokta — en zayıf pencere içi bölge |
| Orta Asya (Hive, Buhara, Semerkant ötesi) | 🔴 42 nokta ve **pencerenin doğu kenarında kesiliyor** |
| **Hindistan, Çin, Japonya, Güneydoğu Asya** | 🔴 **344 noktalık parti hazır ama pencere 62°D'de bitiyor — çizilemezler** |
| **Amerika (Meksika, Peru, Kuzey Amerika)** | 🔴 **hiç yok.** Nokta da yok, pencere de kapsamıyor |
| Sahra altı Batı ve Orta Afrika | 🔴 hiç yok (Timbuktu, Agadez, Ndjamena yalnız dolgu noktası) |
| Avustralya, Okyanusya | 🔴 hiç yok |

**Yani sorunuzun cevabı:** 1400'ün Meksika'sı ve Peru'su yok, Çin ve Hindistan
**veri olarak hazır ama harita penceresi yüzünden görünmüyor**, 1800'ün Orta
Asya'sı kısmen var ama doğu kenarında kesiliyor. Osmanlı çekirdeğinden dışa
doğru büyüme stratejisi doğru işledi; şimdi **pencerenin kendisi darboğaz.**

---

## c) YERLEŞİM VE PETEK KALİTESİ — sınırlar coğrafyaya yaslanıyor mu

Nokta yoğunluğu (**bin km² / nokta; küçük = iyi**):

```
Anadolu ..............   5   🟢        Arabistan .............  43   🟡 (çöl, kasten seyrek)
Balkanlar ............   7   🟢        Kuzey Afrika ..........  49   🟡
Irak-Mezopotamya .....  14   🟢        Kuzey-Doğu Avrupa .....  56   🔴
Levant-Mısır .........  15   🟢        Doğu Afrika-Sudan .....  64   🔴
İran-Kafkasya ........  18   🟢        Batı Avrupa ...........  74   🔴
Orta Avrupa ..........  27   🟡        Orta Asya .............  40   🟡
```

**Petek üretiminin kalitesi (r83 üretim log'undan):**

```
917 petek (0 yedek eşleşme)
örtü geçerliliği: öncesi 0, sonrası 0 bozuk kenar ✓
koruma payı: 92 yaslama iptal (26 yerleşim korundu)
Doğrulama: tüm yerleşimlerin peteği geçerli ✓
kademe: 0 yerleşimin m: zinciri açık
```

Sınırlar **cetvelle çizilmiyor**: 25 adlı akarsu (Tuna, Fırat, Dinyeper, Nil…),
61 dağ sırası ve gerçek kıyı çizgisine yaslanıyor, Chaikin ile yumuşatılıyor,
117 göl çıkarılıyor. Modern baraj gölleri **çıkarılmıyor** (Nâsır, Keban,
Atatürk, Esed, Mingeçevir, Dinyeper zinciri) çünkü 1281-1923 atlasında delik
açıyorlardı.

**Bilinen kalite borçları:**
- **Voronoi bütün tarih için bir kez** hesaplanıyor (`MIMARI §3.1`) — bu (b)'deki
  düz zaman çizgisinin sebebi.
- **18 peteğin ham hücreye oranı %10'un altında** — çoğu ada kuralının doğru
  çalışması, ama Venedik %0 çıkıyor ve incelenmesi gerekiyor.
- **32 ULP bozuk kenarı** — ölçüldü, görünür etkisi yok.
- Bölge (`m:`) alanının **zaman boyutu yok** (`MIMARI §3.4`) — 378 çelişki.

---

## d) DEVLETLER VE KRONOLOJİLERİ

| | |
|---|---|
| Index kaydı | **213** |
| Kronolojisi olan | 213 / 213 ✓ |
| Özeti olan | 213 / 213 ✓ |
| Başkenti olan | 212 / 213 |
| **Haritada gövdesi olan** | **108** |
| Kronoloji madde ortalaması | **4** (en çok 15) |

Bölge dağılımı: Anadolu 32 · Balkanlar 26 · Güneydoğu Asya 15 · Doğu Asya 14 ·
Arabistan 12 · Orta Avrupa 8 · İtalya 8 · Kuzey Afrika 8 · Orta Asya 8 ·
Güney Asya 8 · Batı Afrika 8 · İran 7 …

**Tamam:** dünya ölçeğinde 213 devlet, hepsi kronolojili ve özetli.

**Eksik:**
- **Kronolojiler sığ** — devlet başına ortalama 4 madde. Osmanlı'nın 938
  maddesi var, öteki 212 devletin toplamı ~850.
- **105 devletin haritada gövdesi yok** (213 − 108). Kimlikleri
  `arac/renkler.py`'de tanımlı olmadığı için çizilemiyorlar.
- Kimlik adlandırmasında **tutarsızlık** var: `ANTLASMALAR` Karlofça'nın
  taraflarını `habsburg` yazıyor, `renkler.py` ve harita `avusturya` kullanıyor.
  Etiketleme sistemi kurulmadan önce **kimlik sözlüğü tekilleştirilmeli.**

---

## e) INDEXLER — hangisi yapıldı, hangisi yapılmadı

| Index | Kayıt | Durum |
|---|---|---|
| **Padişahlar** | 41 | 🟢 tam, 36/36 portre |
| **Savaşlar** | 169 | 🟢 hepsinin konumu var (hatalar 7'de 42 eklendi) |
| **Seferler** (ok güzergâhı) | 50 | 🟢 |
| **Antlaşmalar** | 33 | 🟡 `taraf` ve `topraklar` alanları var; 11'inin taralı devir alanı üretildi |
| **Devletler** | 213 | 🟡 bkz. (d) — sığ, 105'i haritasız |
| **Şehirler** | **62** | 🔴 yerleşim verisi **917** — index gerçeğin **%7'si.** Elle tutuluyor, oysa `yerlesimler.js`'ten ÜRETİLEBİLİR |
| **Kişiler** | 247 | 🔴 bkz. aşağıda |
| **Bilim adamları · sanatçılar · filozoflar** | **~7** | 🔴 **fiilen başlanmadı** |

`KISILER` dağılımı ölçüldü ve 5. boyutun neden başlamadığını gösteriyor:

```
yabanci-hukumdar  166      alim               7   ← bilim/sanat/felsefe adına olan TEK kategori
sadrazam           18      denizci            5
komutan            17      hanedan            3
yabanci-komutan    12
siyasi             10
vezir-pasa          9
```

Yani 247 kişinin **240'ı hükümdar, komutan ve devlet adamı**; 7 âlim var.
Mimar Sinan, Kâtib Çelebi, Takıyüddin, Fuzûlî, Nef'î, Evliya Çelebi, Piri Reis,
Ali Kuşçu gibi isimler kronoloji **maddelerinde** geçiyor ama **index kaydı
yok.** Ayrıca `KISILER` şeması çok ince: `tur, ad, donem, not` — doğum/ölüm
tarihi, doğum yeri koordinatı, eser listesi, bağlantı yok.

---

## f) ETİKETLEME VE İLİNTİLENDİRME — henüz yok

Ölçüm: 938 kronoloji maddesinin **938'i etiket taşıyor** ama **kullanılan
toplam etiket sayısı 17** ve hepsi *konu* etiketi:

```
savas(291) toprak-kazanc(281) siyaset(256) diplomasi(136) toprak-kaybi(134)
antlasma(99) ekonomi(88) ayaklanma(83) kultur-sanat(61) bilim(43) ittifak(35)
diger(25) saray(11) denizcilik(9) imar(2) idari(1)
```

**Coğrafya etiketi yok. Devlet etiketi yok. Kişi etiketi yok. Devir etiketi
yok.** Yani "Karlofça" dendiğinde Venedik'e, Podolya'ya, Mora'ya, IV. Mehmed'e
ya da "Avrupa" ve "1680-1700" eksenlerine gidilemiyor.

Var olan yarım malzeme:
- `ANTLASMALAR.taraf` → devlet kimliği dizisi (33 kayıtta var) ✓
- `OLAYLAR.kisiler` → 924 maddede var, ama **serbest metin**, kimlik değil
- `OLAYLAR.yer` → 938 maddede var, ama **serbest metin**, koordinat değil
- `SAVASLAR.lat/lon` → 169 kayıtta var ✓

Tasarımı `ETIKETLEME.md`'de.

---

## Sıradaki işler — öncelik sırasıyla

Ayrıntı ve gerekçeler `YAPILACAKLAR.md`'de. Buradaki sıra **bağımlılığa** göre:

**Faz A — darboğazlar (bunlar açılmadan kapsam büyümez)**
1. **Harita penceresini genişlet.** 344 Asya noktası hazır ve çizilemiyor.
   Amerika ise pencere olmadan hiç başlanamaz.
2. **`kur:`/`bit:` motor desteği + epok mimarisi** (`MIMARI §3.1`). Bu
   yapılmadan zaman çizgisi düz kalır ve Amerika'nın sömürge şehirleri 1300
   haritasında hayalet hücre açar.
3. **Kimlik sözlüğünü tekilleştir** (`habsburg` / `avusturya` vakası) ve
   `renkler.py`'ye eksik 108 devleti DSATUR ile ekle.

**Faz B — bekleyen partiler**
4. Avrupa **237** nokta (15 kimlik) · Asya 344 nokta (98 kimlik)
   ⚠️ Kimlik sayısı korkutucu görünüyor ama **ölçüldü ve endişe yersiz çıktı**:
   Oturum 12'nin 7 kesitli DSATUR ölçümünde 1300'de 74 kimlik sahnedeyken
   **hiçbir kesitte 5 rengi aşmıyor.** Belirleyici olan kimlik sayısı değil
   **eş-zamanlı komşuluk.** Ayrıca kimlik BİRLEŞTİRMEK işe yaramıyor, hatta
   zarar veriyor — gerekçesi . Doğru kaldıraç **renk
   paylaşımı**: hiç eş-zamanlı olmayan kimlikler aynı rengi kullanır.
5. Kuzey-Doğu Avrupa partisi (brief hazır, 44-62°K)
6. Pontik bozkır, Batı-Orta Afrika, Amerika

**Faz C — index derinleştirme**
7. **Şehirler indexini `yerlesimler.js`'ten üret** — 62 → 917
8. 212 devletin kronolojisini derinleştir (ortalama 4 → 10+)
9. **5. boyut: bilim adamları, sanatçılar, filozoflar** — şu an 7 kayıt

**Faz D — etiketleme (`ETIKETLEME.md`)**
10. Kimlik tabanlı etiket sözlüğü, çapraz ilinti, devir dilimleme
