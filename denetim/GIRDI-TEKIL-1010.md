# GIRDI-TEKIL-1010 — yerleşim adı tekilliği

**Taban:** `origin/main` `534633f8` (ölçüm) · teslim anında yeniden sınandı: `37770b31` (aradaki tek commit `girdi.py`ye dokunmuyor).
**Zemin:** tek kullanımlık worktree `C:\atlas-tekil` (detached). Commit/push yok. `uret_petek.py` KOŞTURULMADI.
**Diff:** `denetim/GIRDI-TEKIL-1010.diff` · sha256 `37d8b2f3a0c9cc615876d8c579908aa335557db50f539928c4aa688e02f1eb95` · yalnız `arac/girdi.py` (+10 −3).

## 0. 🔴 Öncül yanlıştı: kontrol VAR

Şartnamede "girdi.py:108 yorumu HATA diyor ama arkasında kod yok (D5-GUN)" deniyordu. **Kod var:**

```
arac/girdi.py:615  def yukle(sessiz=False):
arac/girdi.py:616      """Bütün girdi dosyalarını birleştirip döker. Ad çakışmasında ValueError."""
arac/girdi.py:620-625  if y["ad"] in nereden:
                           raise ValueError(f"AD ÇAKIŞMASI: '{ad}' hem {X} hem {Y} içinde. …")
```

- `git log -L` ile bakıldı: kod 30 Temmuz 2026'dan beri duruyor (`35436fe9`, `93dc970b`). `makine/umit` `65554e0a`'da da var (satır 621).
- Yorum `girdi.py:108-109`: *"⚠️ SIRA ÖNEMLİ: aynı ad iki dosyada varsa hangisinin kazandığı değil, HATA verilmesi gerekir (aşağıda kontrol ediliyor). Sıra yalnız okunabilirlik için."*
- D5-GUN'un "bulunamadı" hükmünün olası sebebi: arama "HATA" sözcüğüyle yapıldı, kod ise `ValueError` ve `AD ÇAKIŞMASI` diyor. Yorumun "aşağıda" dediği yer de 500 satır aşağıda. Bu bir hipotez, ölçülmedi.
- ⇒ `D5-GUN-1010.md:226` ve `:279` yanlış. O dosya benim değil, düzeltmedim.

## 1. Bugün ne oluyor — ölçüm (sentetik)

| Girdi | Bugünkü kod | Kapı sökülünce (`raise` → `pass`) |
|---|---|---|
| iki dosyada aynı ad | **ValueError** `AD ÇAKIŞMASI: 'Tekilköy' hem a.js hem b.js içinde` | SESSİZ, **2 kayıt** döner. `{ad: kayıt}` sözlüğü birini yutar |
| aynı dosyada aynı ad | **ValueError**, ama mesaj `hem a.js hem a.js içinde` diyor | SESSİZ, 2 kayıt |

- Kapı olmasaydı `yukle()` iki kaydı da döndürürdü. Sessiz ezme olmazdı, ama ad üzerinden sözlük kuran her tüketici sessizce birini yutardı.
- **Dosya içi mükerrer zaten yakalanıyor**, çünkü `nereden` sözlüğü kayıt kayıt doluyor. Bugün 0 tane var, ayrı bir kontrol gerekmez.
- Gerçek veri: 93 dosya · 4300 kayıt · birebir mükerrer **0**.

## 2. Hata türü: (a) exception ve (b) liste karşılaştırması

**Çağıranlar:** depoda `girdi.yukle` 542 satırda geçiyor. `arac/` altında `try` ile sarılı olan yalnız 2 tane var (grep `-B3`, kaba ölçüm). Yani pratikte her tüketici exception'da düşer.
- Motor: `uret_petek.py:1028` `YERLER = girdi.yukle()` modül düzeyinde çağrılıyor. Toplam 8518 satırın 1028'inde ve **6. aşamada** ("Yerleşimler okunuyor"). Ondan önceki aşamalar: anlık görüntü · kara maskesi · göller · nehir · dağ sırtları. Ağır aşamaların (yabancı gövdeler, dönemler) hepsi bundan sonra geliyor. ⇒ Motor 7 saat sonra değil, BAŞTA düşer. Önceki aşamaların saniye cinsinden süresi **bulunamadı**: bu makinede `uretim_canli.log` yok. Aşamanın kendisi 13-60 sn sürüyor (M-4577, MOTOR-YURUYUS ölçümü).
- İşçi süreçleri motoru baştan koşuyor (`uret_petek.py:489` yorumu). Aynı noktada düşerler.
- `denetle.py:1111` `yerlesimleri_yukle()` düzeyinde yakalanmadan düşer. Çıkış kodu Python'un 1'i olur ve bu "İHLAL VAR" anlamına gelir. Bu anlamca doğru, ama hüküm satırı basılmaz.

**Öneri (a) kalsın, yani bugünkü hâli.** Gerekçe:
1. Yorum ve docstring "HATA" diyor. Kod 2,5 aydır böyle çalışıyor ve hiçbir tüketici bunu yakalamaya dayanmıyor.
2. Mükerrer adlı bir girdiyle motorun sonucu tanımsız olur, çünkü sahiplik ad üzerinden eşleniyor. Böyle bir koşu yayınlanmamalı; exception tam olarak bunu sağlıyor.
3. (b) seçeneği, `denetle.py`ye kalem eklemek demek. Bu, `yukle()`nin dönüş biçimini 542 çağrı yerinde değiştirir, ya da yan kanal gerektirir. Motor tarafında da bir kapı daha ister. Kazancı yalnız `denetle.py`nin hüküm satırını basabilmesi; bunun için şart değil.
4. İsteğe bağlı bir iyileştirme var ve bu diff'te değil: `denetle.py` `yerlesimleri_yukle()` `ValueError`ı yakalayıp `OLCULEMEDI_KOVA`ya değil İHLAL'e yazabilir. Bu `denetle.py` sahibinin kararı.

## 3. Diff — davranış DEĞİŞMİYOR

Kod mantığına dokunulmadı. İki küçük değişiklik var:
1. `girdi.py:108` yorumu kontrolün yerini adıyla gösteriyor (`yukle()` → `AD ÇAKIŞMASI`), sınav dosyasını anıyor ve grep tuzağını yazıyor. Amaç bir sonraki oturumun aynı "kontrol yok" hükmünü vermemesi.
2. Dosya içi mükerrerde mesaj `a.js içinde İKİ KEZ` diyor, eskisi `hem a.js hem a.js içinde` diyordu.

⚠️ `girdi.py` motor tuzunda olduğu için koşu 22b sürerken İNDİRİLMEZ. Bir sonraki TAM İNŞA partisine girer. Yalnız yorumdan ve mesajdan ibaret olduğu için tek başına bir koşu istemeye değmez.
📌 Diff'in yazılmaması da savunulabilir. Kapı zaten var, diff yalnız okunabilirlik kazandırıyor. Karar koordinatörün.

## 4. Uygulanabilirlik

| Sınama | Sonuç |
|---|---|
| `534633f8` üstüne `git apply --check` | TEMİZ |
| `37770b31` üstüne `git apply --check` | TEMİZ |
| `NEGATIF-YIL-1010-B-v2.diff`, ardından bu diff | TEMİZ, sınav 7/7. ⚠️ Bir şartla, aşağıda |

🔴 **NEGATIF-YIL-1010-B-v2.diff `origin/main`e olduğu gibi UYGULANMIYOR.** Sebebi bu diff değil. `denetim/ARAC-NEGATIF-YIL-B-SINAV-1010.py` zaten `main`de var (`397c00c6` ile indi), ama içeriği diff'tekinden farklı (14.791 bayta karşı 15.112 bayt). Diff onu yeni dosya olarak eklemeye çalıştığı için *"already exists"* hatası alıyor. Öteki 5 dosya (`denetle.py`, `girdi.py`, `gun.py`, `motor_esitlik.py`, `uret_petek.py`) `--exclude=denetim/ARAC-NEGATIF-YIL-B-SINAV-1010.py` ile temiz uygulanıyor. Ters yönde `-R --check` de tutmuyor, yani diff'in geri kalanı inmemiş. ⇒ NEGATIF-YIL-B sahibi sınav dosyasının hangi sürümünün doğru olduğunu söylemeli.

## 5. Sınav — `denetim/ARAC-GIRDI-TEKIL-SINAV-1010.py`

Yedi soru. Sınav iki yönde çalışıyor: kendi kendini de sınıyor.

S1 iki dosyada aynı ad ⇒ HATA · S2 dosya içi ⇒ HATA · S3 `Kudüs`/`Kudus`/`KUDÜS`/`roma` ⇒ hata YOK · S4 `Roma`/`Roma (Queensland)` ⇒ hata YOK · S5 gerçek veri ⇒ temiz · **Y1/Y2:** kapının `raise` satırı bellekte `pass` ile değiştirilir ve aynı girdiler SESSİZ geçmek ZORUNDA. Böylece sınavın kapıyı gerçekten ayırt ettiği gösterilir.
Kapı metni bulunamazsa çıkış kodu **2** (ÖLÇÜLEMEDİ) olur.

| Ağaç | Sonuç |
|---|---|
| yamalı (`534633f8` + diff) | 7/7, çıkış 0 |
| yamasız (`534633f8`) | 7/7, çıkış 0. Davranış aynı, yalnız S2 mesajı eski biçimde |
| `NEG-v2` + diff | 7/7 |
| `37770b31` yamasız | 7/7 |

ℹ️ Şartnamede istenen *"yamalıda HATA, yamasızda sessiz"* yönü bugünkü kodda kurulamıyor, çünkü yamasız kod da HATA veriyor. Bu yönü Y1/Y2 kolu karşılıyor: "yamasız" yerine "kapı sökülmüş" kopya kullanılıyor.

## 6. Normalleştirilmiş 37 çakışma

Ölçüt: parantezli ek atılıyor, sonra `denetim/ARAC-NORMAL-0903.py` `norm()` uygulanıyor. Sonuç: **37 grup, 79 kayıt.** Kapıya KATILMADI. Hüküm de verilmedi.
**3 km içinde çift: 0.** En yakın çiftler: Kordofan / Kordofan (Ubeyyid) 80,5 km · Üstyurt platosu batı/doğu 243,9 km · Kazak bozkırı 388,5 km.
⚠️ `girdi.km()` eşdikdörtgen bir yaklaşım kullanıyor ve uzun mesafede şişiyor. Örneğin Georgetown çifti için 22.515 km veriyor, oysa yer kürede en uzun mesafe ~20.015 km. 3 km eşiği için bu önemsiz, ama büyük sayılar kaba değerler.
**Kudüs / Kudus:** `Kudüs` 31,777/35,234 (`yerlesimler.js`) · `Kudus` −6,81/110,84 (`yerlesimler_gdasya.js`). Aralarında **9.272 km** var. Koordinat Orta Cava'yı gösteriyor (Endonezya'da Kudus şehri). Mükerrer gibi görünmüyor, ama hüküm vermiyorum.

| norm | km (en yakın çift) | kayıtlar (ad · dosya · lat,lon) |
|---|---|---|
| akra | 5745,6 | Akra · yerlesimler.js · 36.7408,43.8919 ‖ Akra (Accra) · yerlesimler_afrika2.js · 5.5500,-0.2000 |
| aveiro | 6966,3 | Aveiro · yerlesimler_avrupa.js · 40.6410,-8.6540 ‖ Aveiro (Tapajós) · yerlesimler_a78_amerika.js · -3.6084,-55.3199 |
| avustralya ic kesimi | 896,5 | 5 kayıt, hepsi yerlesimler_ek30.js: Orta (Arrernte) -23.70,133.88 ‖ Kuzeybatı (Kimberley) -16.50,126.00 ‖ Kuzey (Arnhem Land) -13.00,133.50 ‖ Kuzeydoğu (Cape York) -14.50,143.50 ‖ Güney (Nullarbor/Güneybatı) -31.50,129.00 |
| charleston | 638,4 | Charleston (Charles Town) · yerlesimler_amerika.js · 32.7839,-79.9343 ‖ Charleston (Batı Virjinya, Kanawha) · yerlesimler_kamerika.js · 38.3500,-81.6330 |
| concepcion | 2551,3 | Concepción (Şili) · yerlesimler_amerika.js · -36.8270,-73.0503 ‖ Concepción (Chiquitos) · yerlesimler_gamerika.js · -16.1400,-62.0300 |
| douglas | 8956,1 | Douglas (Man) · yerlesimler_avrupa.js · 54.1500,-4.4820 ‖ Douglas (Arizona) · yerlesimler_a78_amerika.js · 31.3445,-109.5453 |
| feyzabad | 1587,1 | Feyzâbâd (Ayodhya) · yerlesimler_asya.js · 26.7750,82.1450 ‖ Feyzâbâd (Bedahşan) · yerlesimler_a78_asya.js · 37.1170,70.5800 |
| georgetown | 22515,0* | Georgetown (Stabroek) · yerlesimler_amerika.js · 6.8013,-58.1551 ‖ Georgetown · yerlesimler_okyanusya.js · -18.2900,143.5500 |
| gore | 5824,4 | Gore · yerlesimler_h2_afrika.js · 8.1500,35.5330 ‖ Gore (Gorée) · yerlesimler_afrika2.js · 14.6750,-17.4273 |
| haydarabad | 1376,0 | Haydarâbâd (Sind) · yerlesimler_asya.js · 25.3960,68.3770 ‖ Haydarâbâd (Dekken) · yerlesimler_asya.js · 17.3850,78.4870 |
| kazak bozkiri | 388,5 | Kazak bozkırı (İşim) · yerlesimler_ek9.js · 52.50,68.00 ‖ (Turgay) · yerlesimler_sibirya.js · 49.60,63.50 ‖ (Sarısu) · yerlesimler_sibirya.js · 47.00,67.00 |
| kordofan | **80,5** | Kordofan (Ubeyyid) · yerlesimler.js · 13.1840,30.2180 ‖ Kordofan · yerlesimler.js · 13.0000,29.5000 |
| kudus | 9272,5 | Kudüs · yerlesimler.js · 31.7770,35.2340 ‖ Kudus · yerlesimler_gdasya.js · -6.8100,110.8400 |
| la paz | 6511,4 | La Paz · yerlesimler_amerika.js · -16.5000,-68.1500 ‖ La Paz (Baja California Sur) · yerlesimler_kamerika.js · 24.1420,-110.3110 |
| lagos | 3633,3 | Lagos (Algarve) · yerlesimler_avrupa.js · 37.1020,-8.6740 ‖ Lagos (Eko) · yerlesimler_afrika2.js · 6.4500,3.4000 |
| las vegas | 896,8 | Las Vegas (Nevada, Mormon Kalesi) · yerlesimler_kamerika.js · 36.1710,-115.1400 ‖ Las Vegas (Yeni Meksika) · yerlesimler_kamerika.js · 35.5940,-105.2230 |
| loreto | 2317,0 | Loreto (Baja California) · yerlesimler_amerika3.js · 26.0111,-111.3436 ‖ Loreto (Mojos) · yerlesimler_gamerika.js · -15.2200,-64.6700 ‖ Loreto (Maranhão) · yerlesimler_a78_amerika.js · -7.0811,-45.1451 |
| merida | 2414,1 | Mérida · yerlesimler_amerika.js · 20.9674,-89.5926 ‖ Mérida (Venezuela) · yerlesimler_amerika.js · 8.5933,-71.1739 |
| mora | 2676,8 | Mora (Tripoliçe) · yerlesimler.js · 37.5100,22.3790 ‖ Mora · yerlesimler_ek7.js · 61.0060,14.5420 |
| nain | 9456,3 | Nâin · yerlesimler.js · 32.8597,53.0850 ‖ Nain (Labrador) · yerlesimler_kamerika.js · 56.5420,-61.6870 |
| new amsterdam | 4189,4 | New Amsterdam (New York) · yerlesimler_amerika.js · 40.7128,-74.0060 ‖ New Amsterdam (Berbice) · yerlesimler_amerika.js · 6.2495,-57.5207 |
| perth | 16284,4 | Perth (İskoçya) · yerlesimler_avrupa.js · 56.3960,-3.4370 ‖ Perth · yerlesimler_ek30.js · -31.9505,115.8605 |
| plymouth | 5213,6 | Plymouth · yerlesimler_avrupa.js · 50.3760,-4.1430 ‖ Plymouth (Massachusetts) · yerlesimler_amerika.js · 41.9584,-70.6673 |
| port royal | 3172,5 | Port Royal (Acadia) · yerlesimler_amerika.js · 44.7442,-65.5058 ‖ Port Royal · yerlesimler_amerika.js · 17.9370,-76.8318 |
| radom | 4628,9 | Radom (Polonya) · yerlesimler.js · 51.4030,21.1470 ‖ Radom · yerlesimler_h2_afrika.js · 9.9500,24.9500 |
| roma | 16858,3 | Roma · yerlesimler.js · 41.9030,12.4960 ‖ Roma (Queensland) · yerlesimler_okyanusya.js · -26.5700,148.7900 |
| san miguel | 771,5 | San Miguel (Aushiri) · yerlesimler_gamerika.js · -1.9000,-75.2000 ‖ San Miguel (Pachitea) · yerlesimler_gamerika.js · -8.8000,-74.5500 |
| santa fe | 9027,2 | Santa Fe · yerlesimler_amerika.js · 35.6870,-105.9378 ‖ Santa Fe (Arjantin) · yerlesimler_amerika.js · -31.6333,-60.7000 |
| sire | 2922,6 | Sire (Syros) · yerlesimler.js · 37.4360,24.9180 ‖ Şire · yerlesimler_afrika.js · 14.1030,38.2830 |
| trujillo | 2783,3 | Trujillo (Peru) · yerlesimler_amerika.js · -8.1116,-79.0290 ‖ Trujillo (Honduras) · yerlesimler_kamerika.js · 15.9180,-85.9530 |
| tula | 12443,4 | Tula · yerlesimler.js · 54.1930,37.6170 ‖ Tula (Tamaulipas) · yerlesimler_kamerika.js · 22.9970,-99.7200 |
| tuzla | 1669,2 | Tuzla (Larnaka) · yerlesimler.js · 34.9170,33.6300 ‖ Tuzla (Bosna) · yerlesimler_seyrek.js · 44.5380,18.6760 |
| ustyurt platosu | 243,9 | Üstyurt platosu (batı) · yerlesimler.js · 43.80,53.50 ‖ (doğu) · yerlesimler.js · 43.50,56.50 |
| yeni gine ic kesimi | 448,1 | (Kuzey — Sepik Havzası) · yerlesimler_emilme.js · -4.50,143.50 ‖ (Güney — Fly Nehri Bataklıkları) · yerlesimler_emilme.js · -8.00,141.50 |
| yeni gine ic yaylalari | 618,5 | (Merkez — Mount Hagen) · yerlesimler_emilme.js · -5.86,144.23 ‖ (Batı — Baliem Vadisi) · yerlesimler_emilme.js · -4.10,138.94 |
| yenisehir | 619,6 | Yenişehir (Bursa) · yerlesimler.js · 40.2670,29.6330 ‖ Yenişehir (Larissa) · yerlesimler.js · 39.6390,22.4180 |
| york | 5854,3 | York · yerlesimler_avrupa.js · 53.9590,-1.0810 ‖ York (Toronto) · yerlesimler_kamerika.js · 43.6530,-79.3830 |

\* eşdikdörtgen formülün şişmesi, gerçek mesafe değil.
📌 Yalnız Kordofan çifti aynı bölgede (80 km, aynı dosyada). Biri il merkezi (Ubeyyid), öteki bölge noktası gibi görünüyor. 3 km eşiğinin dışında kaldığı için yakın mükerrer DEĞİL; listede bilgi olarak duruyor.

## 6b. Kontrol ne SORUYOR, ne SORMUYOR — 37 çakışma kapıdan nasıl kaçıyor (çerçeve: koordinatör/LAB)

Çerçeve: sınıf "yorum var, kod yok" değil. Doğrusu: **kontrol koşuyor, ama normalleştirilmiş çakışmayı sormuyor.**
`girdi.py:620-626` (`37770b31`): `if y["ad"] in nereden` sorusu ham dizgi üzerinde birebir sözlük üyeliği soruyor.
- **SORDUKLARI:** birebir aynı `ad` dizgisi · dosyalar arasında · dosya içinde.
- **SORMADIKLARI:** harf büyüklüğü (`roma` ≠ `Roma`) · aksan/şapka (`Kudüs` ≠ `Kudus`, `Nâin` ≠ `Nain`, `Şire` ≠ `Sire`) · parantezli ek (`Roma` ≠ `Roma (Queensland)`) · boşluk ve tire varyantı · eşanlamlı ad (`Diyarbekir`/`Diyarbakır`; bu normalleştiricinin de işi değil, sözlük işi). Bunların ilk ikisi sınavın S3 sorusunda, parantez S4'te kanıtlı.

**37 grup kaçış sınıfı** (`37770b31`, worktree; aynı 37 grup `534633f8`te de çıktı):

| Kaçış farkı | Grup | Gruplar |
|---|---|---|
| yalnız **parantezli ek** | 34 | akra · aveiro · avustralya iç kesimi · charleston · concepcion · douglas · feyzabad · georgetown · gore · haydarabad · kazak bozkırı · **kordofan** · la paz · lagos · las vegas · loreto · merida · mora · new amsterdam · perth · plymouth · port royal · radom · roma · san miguel · santa fe · trujillo · tula · tuzla · üstyurt platosu · yeni gine iç kesimi · yeni gine iç yaylaları · yenişehir · york |
| yalnız **aksan/harf** | 1 | **kudus**: `Kudüs` / `Kudus` (ü/u) |
| **parantez + aksan** | 2 | **nain**: `Nâin` / `Nain (Labrador)` (â/a + ek) · **sire**: `Sire (Syros)` / `Şire` (Ş/S + ek) |

Mesafeler §6'daki tabloda. **3 km içinde: 0 grup.** <100 km: 1 grup (Kordofan, 80,5 km).
Aynı dosyada olan gruplar: 13. Öteki 24 grup 2-3 dosyaya dağılmış.
📌 Kudüs/Kudus, yalnız aksan farkıyla kaçan TEK gruptur. Aradaki mesafe 9.272 km; koordinat Orta Cava'yı gösteriyor.

## 6c. ÖNERİ — normalleştirilmiş kontrol (YAZILMADI, yalnız öneri)

Kontrol yeniden yazılmadı (emir: mantığa dokunma). Bir öneri olarak:

1. **Yerine:** `denetle.py`de bir **UYARI kalemi**. `girdi.yukle()`de HATA olmamalı: 37 meşru ad aynı anahtara düşüyor, motoru düşürmek yanlış olur.
2. **Anahtar:** `norm(parantezsiz(ad))` (`denetim/ARAC-NORMAL-0903.py`). Kapsam boşluk ve tire varyantına genişletilebilir.
3. **Meşru ayrı yer nasıl ayrılır? Mesafeyle, liste YAZMADAN.** Aynı anahtarlı çift **< N km** ise UYARI verilir, ≥ N km ise sessiz kalır (Roma/Roma (Queensland) gibi eşadlı yerler). Bugün N=100 seçilirse kovada **1** grup kalır: Kordofan. 3 km altı zaten `yakin_ciftler`in alanı (adı ne olursa olsun). Normalleştirilmiş kontrolün getireceği tek yeni soru şu bant: *aynı yer, farklı yazım, 3-N km arası koordinat sapması.*
   - Neden istisna listesi değil: `§3.4 ⑤` "en iyi istisna, yazılmayan istisnadır". 36 meşru grubu adıyla listelemek 36 kalemlik bir tavan ailesi açar; mesafe ölçütü bunu gerektirmiyor.
   - N değeri koordinatörün kararı. Bugün 80,5 km (Kordofan) ile 243,9 km (Üstyurt) arasında boşluk var, N=100 ile N=200 aynı sonucu verir.
4. **Yazım düzeni (veriye öneri, hüküm değil):** eşadlı iki yerden yalnız biri parantez taşıyorsa (`Roma` · `Kudüs` · `Tula` · `York` …), çıplak ad "asıl" sayılmış oluyor. Bu bugün çakışma üretmiyor ve kural değil, gözlem.
5. Kod, `girdi.py` tuzunda DEĞİL, `denetle.py`de olur ⇒ koşu gerektirmez. ⚠️ Ama bu kalem bir tavan da getirir (bugün 1). `§3.4 ⓪②`ye göre o tavan yazıldığı anda ölçülür ve aynı commit'e girer.

## 6d. Motor bu `raise`a BAŞTA düşüyor — AST ile doğrulandı

`origin/main:arac/uret_petek.py` `ast.parse` ile tarandı (`girdi.yukle` adlı `Call` düğümleri):
- **Tek çağrı, satır 1028.** Modül gövdesinde üst düzey bir `Assign` deyimi: `YERLER = girdi.yukle()`. Hiçbir fonksiyonun, `try`ın ya da `if`in içinde değil ⇒ `ValueError` yakalanmaz, süreç düşer.
- Ondan önce koşan aşamalar (`asama(...)`): anlık görüntü · kara maskesi · göller · nehir yatakları · dağ sırtları · "Yerleşimler okunuyor". 8518 satırlık betiğin ilk 1028 satırı. Ağır aşamaların hepsi (yabancı gövdeler, dönemler, ufuk bantları, çöl tavanı) bundan sonra geliyor.
- İşçi süreçleri motoru baştan koşuyor (`uret_petek.py:489` yorumu, Windows'ta fork yok) ⇒ onlar da aynı satırdan geçiyor.

## 7. Bulunamayanlar
- "Yerleşimler okunuyor" aşamasına kadar geçen süre (saniye): bu makinede üretim logu yok.
- D5-GUN'un kodu niçin bulamadığı doğrudan ölçülmedi. Grep sözcüğü hipotezi D5-GUN'un raporundan çıkarım.
