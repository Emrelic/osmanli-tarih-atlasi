# OLCUM-MOTOR-0914 — P13A · MOTOR ÖLÇÜM (salt okuma)

> P13A-MOTOR-OLCUM · 14 Eylül 2026 · 1.MURAT sevki (`PAKET-SINIF2-0914.md` ### P13A, 16 madde).
> **TOPARLA emriyle erken kapatıldı** (haftalık limit %95). Ölçülmeyen maddeler aşağıda `ölçülmedi` damgalı.
> Yazılan: yalnız bu dosya + `denetim/ARAC-MTR-*-0914.py` (7 alet). `data/` `arac/` `js/` yazılmadı, motor koşulmadı, commit yok.

## 0 · Taban — neyin ölçüldüğü

- **Çıktı:** çalışma kopyasındaki `data/donemler.js · devletler_harita.js · petek_govde.js` = koşu 10 (**r8232**, `92d9349`, 13 Eyl 23:37).
- **Sahiplik girdisi:** motorun `URETIM_IZI.girdi` sha256 izleri bugünkü `data/` ile karşılaştırıldı. **80 girdinin 11'i koşudan sonra değişmiş**: `yerlesimler.js · _ek17 · _ek26 · _ek3 · _ek4 · _ek6 · _ek_bozkir · _ek_ferhadpasa · _h2_rusya · _ok106 · _sinir_dogu`. **11'inin de izi git'te bulundu.** Sahiplik, koşu 10'un gördüğü blob'lardan okundu (`ARAC-MTR-ORTAK` scratch kopyası). Ad hizası 3818/3818 (assert).
- **Ekran görüntülerinin yayını — hepsi r8232'den ESKİ (D044):**

| parti | damga | o an yayındaki çıktı |
|---|---|---|
| 0028 | 23 Ağu 03:58 | `b729a90` (22 Ağu, dünya penceresi ÖNCESİ) |
| 0030 · 0031 | 23 Ağu 23:30 · 24 Ağu 03:22 | `536e90c` (23 Ağu, dünya penceresi ÖNCESİ) |
| 0040 | 4 Eyl 10:42 | `197f0ae` r5546 (koşu 3) |
| 0042 | 10 Eyl 12:31 | `00652fc` (koşu 8) |
| 0043 · 0044 | 12 Eyl 18:41 · 13 Eyl 03:57 | `a8feb8d` (koşu 9) |

⇒ Her madde için soru iki tane: **"görüntüdeki kusur neydi"** ve **"r8232'de hâlâ var mı"**.

## 1 · Alet sınavı (D010, iki yön)

`ARAC-MTR-GENEL-0914.py` (bir günde bütün dünyada katmanlar arası binme + ham poligon `is_valid`):

```
                         r8232 (koşu 10)          00652fc (koşu 8, 0042'nin yayını)
1299-01-01  binme        121 yüz · 70.720 km²     125 yüz · 72.432 km²
            0042/H-0002-7 kutusu (45,2-45,6K/16,9-17,4D)
                         0 binme                  bosna↔macaristan 303 km² @45,48K 17,16D   ← GÖRÜNTÜDEKİ
            OSMANLI↔bizans 40,0K 29,95D          (ilk 12'de yok)          2.156 km²          ← 0030/H-0002-3 sınıfı
            geçersiz ham poligon   86 / 3194       86 / 3192
1281-01-01  binme        114 yüz · 45.320 km² · geçersiz 84 / 3176
1408-06-01  binme        145 yüz · 200.577 km² · geçersiz (inuit 9 · norveç 7 · danimarka 4 · memlük 3 · isveç 2 · bizans 2 …)
OSMANLI↔OSMANLI-tabi binme: üç günde de 0 (motorun g.difference(gt) kuralı tutuyor)
```
- **Ters yön geçti:** alet, görüntünün alındığı yayında görüntüdeki binmeyi **yerinde ve adıyla** buluyor.
- **Düz yön geçti:** aynı kutuda r8232'de 0 buluyor, ama aynı gün dünyada 121 binme buluyor. Yani alet kör değil, **kusur o kutudan gitmiş.**

## 2 · Mekanizma — koddan okundu (koşu gerektirmez)

Yabancı gövde **devlet başına bağımsız** kuruluyor (`uret_petek.py:4653-4671`):
```
union(petek_epok) → kapat(0,15°≈16,7 km, mitre) → delikleri_doldur → gosterim_duzelt (B2 köprü · B3 koridor)
→ ∩KARA → ∩puan bölgesi (PUAN_ESIK 4 · çölde 8) → seyrelt(0,03°≈3,3 km, YALNIZ yabancı havuz, sınır köşeleri donuk)
```
- **Komşudan çıkarım YOK.** Osmanlı'da `g.difference(gt)` var (o↔v binmesi 0), yabancılar arasında **hiç yok**. `kapat()` mitre kapaması içbükey köşeleri doldurur. B2/B3 dolguları da komşunun toprağına girebilir. ⇒ **BİNME = gövde-başına şişirme**, üçgen biçimli (mitre) — görüntülerdeki keskin üçgenlerle uyumlu.
- **BOŞLUK = gövde-başına kırpma.** Puan kapısı ve çöl eşiği peteğin bir kısmını boyatmıyor, A1 tavanı (200 km) peteği hiç kurmuyor. İki kırpma yanyana gelince aralık açılıyor.
- `seyrelt` köşe dondurması yalnız **aynı anda iki sahipte geçen** köşeyi korur. Kapama/köprü köşeleri tek sahipte olduğu için serbest sadeleşir (3,3 km).

⚠️ Bu bölüm **kod okumasıdır**. Binmelerin yüzde kaçının `kapat()`tan geldiğini ölçen `ARAC-MTR-KUTU` §① "kapat_aciklar_yuzde" alanı yazıldı ama TOPARLA yüzünden **toplu koşulmadı → ölçülmedi.**

## 3 · Madde madde

(Son parti sonuçları §4'te; her satırdaki "r8232" hükmü o ölçüme dayanır.)

| madde | Emre'nin sorusu | ölçüm | sayı | sınıf | çare → paket |
|---|---|---|---|---|---|
| `0040/H-0001` · `0042/H-0002` · `0042/H-0008` · `0042/H-0013` | çizgiler, boşluklar, üst üste binme — tavandan mı hatadan mı | GENEL (§1) + kod (§2) | r8232: 1299'da 121 binme / 70.720 km², 1281'de 114 / 45.320. H-0002-7 binmesi koşu 8'de 303 km², r8232'de **0** | **motor** (binme: gövde-başına kapat/B2/B3, komşu çıkarımı yok) · boşluk kovası **ölçülmedi** (alet hazır: KUTU §②) | **P13B:** yabancı gövdeleri de örtü içinde ayrıştır. Ya kapat/B2/B3 dolgusunu `difference(komşu peteklerin sahibi)` ile kırp, ya da gövdeyi kapamadan sonra örtüden yeniden türet. Boşluk tarafı B görünümü (`0041/H-0001`) |
| `0040/H-0003` | boşluk kalan yerlerin sebebi | KUTU aleti tek kutuda sınandı (0042/H-0002-1, 1299): 663 km² kara, 52 km² boş, **52/52 SAHİPLİ** (Kirmasti 40,3 · Mihaliç 11,6 — bizans peteği boyanmamış) | 1 kutu | **motor** (sahipli petek boyanmıyor: puan kapısı/dikiş; alt kova bu kutuda koşulmadı) | **P13B** · 0040'ın kendi 3 kutusu **ölçülmedi** |
| `0042/H-0039` | Mardin/Artuklu'da kıvrılmış çapraz renkler | GENEL + KUTU §4⑥ | kutuda geçersiz poligon **0**. Binme artuklu↔celayirli **790 km²** (654'ü artuklu peteğinde), akkoyunlu↔artuklu 18 km². Dünyada geçersiz ham poligon 1408'de var (kutu dışı) | self-intersection hipotezi **bu kutuda ÇÜRÜDÜ**. Görünen: **motor binmesi** (kapat() celayirli taşmasının %33'ü, kalanı ölçülmedi) | **P13B** (binme kalemi). Ayrı kalem: dünyadaki geçersiz ham poligonlar → `seyrelt` sonrası `make_valid` (`:3856` `preserve_topology=False`) |
| `0031/H-0002` | kıyı renk örtüşme kalitesi (1386 İyon) | GENEL | **bizans ham poligonu self-intersection @38,955K 20,769D, 114.167 km²** — görüntünün kutusunun (38,16-39,50K/20,13-21,42D) içinde, 1281 ve 1299'da da var | **motor** (geçersiz gövde) + ada kalitesi **ölçülmedi** | P13B (yukarıdakiyle aynı kalem) · `ARAC-MTR-ADA` yazıldı, koşulmadı |
| `0042/H-0016` | Ege adaları kıyı örtüşmesi | — | — | **ölçülmedi** (alet `ARAC-MTR-ADA-0914.py` hazır). Kod öngörüsü: yabancı havuz `seyrelt` 0,03° ile sadeleşiyor, Osmanlı havuzu değil (`:5333`) ⇒ Bizans/Venedik adaları kaba, Osmanlı adaları ince çıkmalı | P13B (seyrelt'te kıyı köşelerini de dondur, ya da ada parçasında tol düşür) |
| `0042/H-0009` · `0030/H-0002` (-1) | Pelekanon sonrası boğazı geçiş | DENIZASIRI §4① | yoklama noktası hiçbir katmanda değil. İki yaka her iki maskede AYRI bileşen. Karşı yakada İstanbul/Boğaziçi bizans | **r8232'de bu noktada kusur yok** (görüntü eski yayından). Kıyı şeridi taraması **ölçülmedi** | P13B'ye iş çıkmıyor. Emre'ye "r8232'de düzelmiş görünüyor, ekran kontrolü" |
| `0042/H-0015` | Çimpe etki alanı Saroz'u dolanmadan taşmış | DENIZASIRI §4② | yoklama noktası **bizans** (İpsala peteği). Keşan · Enez · Saroz kuzey kıyısı bizans | **r8232'de bu noktada kusur yok** | aynı |
| `0040/H-0002` | Tallinn peteği denizi geçmiş mi | DENIZASIRI §4③ | Fin kıyısında almanya parçası 1.705 km². Kaynak: 1281'de sahnede olmayan **Helsinki**'nin (kur 1550) peteği. İki yaka AYRI bileşen | **motor** (`petek_epok` devrinde bileşen kilidi yok) + noktasızlık | **P13B:** devir alıcısını ölü peteğin kara bileşeniyle sınırla |
| `0030/H-0002` (-2 · -3) | Karamürsel üçgeni · İznik koyu kırmızı | KUTU §4⑤ + GENEL koşu 8 | r8232 1329 İznik: **OSMANLI↔bizans binme 516 km²**. 384'ü Bizans peteğinde, kapat() %74,4'ünü açıklıyor | **motor** (Osmanlı gövdesi kapat() ile yabancı peteğe taşıyor, çıkarım yok) | **P13B** |
| `0040/H-0007` | Aral kıyısı neden oturmuyor | kod + girdi | motor göl olarak **tarihî Aral**ı çıkarıyor (`data/goller.js`, `uret_petek.py:529-541`; kod yorumu 73.666 km²). NE modern Aral 3.392 + 2.952 km² **kullanılmıyor** | "modern maske" şüphesi **ÇÜRÜDÜ (kod)**. Kıyı şeridinin kovası **ölçülmedi** (alet `ARAC-MTR-ARAL-0914.py` hazır) | ölçüm sonrası karar; Dijkstra ilgisiz (göl kara değil, sahiplik ızgarası yalnız deniz aşırı parçaya sorulur `:2471`) |
| `0044/H-0011` | Basra ışınsal bozulma | SERBEST §4④ | SERBEST hattın **%85,8'i kıyıda**. 22/135 köşe ışın adayı. Kontrol 0/5, kıyı %0 | **arayüz** (`serbest-hale` kalın+bulanık çizgi, kısa keskin köşe) + **motor** (SERBEST kıyıyı içine alıyor) | **P14** (çizim) + **P13B** (SERBEST ∖ kıyı tamponu) |
| `0043/H-0017` | yıldız/kirpi deseni (1517 Mısır/Libya/Suriye) | — | — | **ölçülmedi** (aynı sınıf beklenir, Basra karnesiyle) | ölçüm sonrası P14 + P13B |
| `0028/H-0007` | Kuzey Afrika bozuk görünüm, "kırmızı boş eklenmiş bölgeler" | — | — | **ölçülmedi** (alet `ARAC-MTR-KOPRU-0914.py` hazır: o/v gövdesini altındaki petek sahibine göre kovalar). Görüntü 1721 · b729a90 (dünya penceresi öncesi). Kod öngörüsü: köşeli koyu parçalar = EKLEYİCİ KAPI/B2 köprü dolgusu, pergel daireleri = PUAN_HALKA 200 km | P13B (`0038/H-0004` köprü rengi kalemiyle birlikte) |

## 4 · Son parti — r8232 üzerinde ÖLÇÜLDÜ (7 kutu)

İlk yoklamada dosya boş göründü; tampon boşalınca **yedi ölçümün yedisi de yazılmış çıktı** (durdurma son ölçümden sonra geldi).

**① Boğaz 1329-06-01** (yan 41,08K 29,05D · tohum Üsküdar tarafı 41,02K 29,03D)
```
yanı kaplayan katman        YOK   · yanı kaplayan petek YOK
motor maskesi (0,002)       iki yaka AYRI bileşen      NE 10m tam: AYRI bileşen
yan bileşende               Boğaziçi (Rumeli yakası) bizans 394 km² · İstanbul bizans 420 km² ·
                            Rumeli Hisarı sahnede DEĞİL (kur 1452) 42 km²
```
⇒ r8232'de bu yoklama noktasında **boğaz geçişi YOK**, maske boğazı kesiyor. `BULGU-RUMELI-0030`'un *"kara maskesinde boğaz kesilmemiş"* teşhisi **bu yoklama çifti için r8232'de tutmuyor.** Görüntü `536e90c` (dünya penceresi öncesi) ve `00652fc`'dendi.
⚠️ Tek nokta çifti ölçüldü. Rumeli yakasının bütün kıyı şeridi taranmadı.

**② Saroz 1352-03-01** (yan 40,72K 26,45D · tohum Çimpe 40,47K 26,63D)
```
yanı kaplayan katman        bizans (İpsala peteği, 783 km², sahibi bizans)
tohum-yan aynı bileşen      EVET (her iki maskede — Saroz körfezi kara üzerinden dolanılıyor)
yan bileşende               Keşan bizans 756 km² · İpsala bizans · Saroz kuzey kıyısı bizans 340 · Enez bizans 458 · Çimpe OSMANLI 301
```
⇒ r8232'de yoklama noktası **Bizans**. Emre'nin *"Enez, Keşan o alanı boyamalı"* dediği **şu an öyle**. Görüntü `00652fc`'dendi. **Kusur r8232'de bu noktada YOK.**

**③ Tallinn 1281-01-01** (yan 60,25K 25,0D Fin kıyısı · tohum Tallinn 59,44K 24,75D)
```
yanı kaplayan katman        almanya — parça 1.705 km², içinde Tallinn YOK, içindeki tek nokta Helsinki
yanı kaplayan petek         Helsinki · kur 1550-06-12 ⇒ 1281'de SAHNEDE DEĞİL · petek 7.791 km² (7 parça)
maske                       Tallinn ile Fin kıyısı AYRI bileşen (her iki maskede)
```
⇒ **KUSUR r8232'DE VAR.** Helsinki sahnede olmadığı için peteği `petek_epok()` ile sahnedeki bir komşuya devrediliyor. Devir **kara bileşenini sormuyor**, bu yüzden körfezin öbür yakasındaki almanya gövdesine geçiyor.
- **Sınıf:** motor. `petek_epok` devrinde bileşen kilidi yok; `:1085` Dijkstra'daki BİLEŞEN KİLİDİ'nin ikizi.
- **Katkı:** noktasızlık (§2). 1281'de Fin güney kıyısında sahnede nokta yok.
- **Çare → P13B:** `petek_epok` alıcısını ölü peteğin gerçek maske bileşeniyle sınırla. Bileşende canlı nokta yoksa sahipsiz bırak.
⚠️ Devrin hangi dalda ("komşusuz" / "tek komşu" / yerel Voronoi) olduğu **ölçülmedi.** Almanya'nın Tallinn'e mi başka bir noktaya mı bağlandığı da ölçülmedi.

**④ Kirpi — Basra 1546-01-01, z 7,3** (kutu 27,95-30,30K / 47,20-49,04D) · **kontrol** iç Irak (33-35K / 40-43D)
```
                 hat  uzunluk  KIYI PAYI  u km   köşe  ışın adayı
Basra            3    458 km   %85,8      41,1   135   22 (%16,3)
kontrol          1    323 km   %0         110      5    0 (%0)
```
⇒ Öngörü tuttu. Basra'daki SERBEST kenarın **%86'sı kıyı boyunca** çiziliyor ve bu hat kısa, keskin köşeli. Kontrolde hat karada, köşe az, aday 0.
- **Sınıf:** arayüz (P14: `serbest-hale` çizimi) + motor (P13B: SERBEST hattı kıyıdan kırpılmalı — sahipsiz peteğin tamponu kıyıyı da içine alıyor).
⚠️ Kontrol kutusu zayıf: yalnız 5 köşe. Mısır Batı Çölü kutusu (0043/H-0017) **ölçülmedi.**

**⑤ İznik 1329-06-01** (0030/H-0002-3 · 40,33-40,64K / 29,44-29,87D)
```
OSMANLI ↔ bizans BİNME   516,2 km²   (kutu karası 1.254 km²)
   bu yüzün 384,0 km²si BİZANS peteğinde · 132,2 km²si Osmanlı peteğinde
   kapat() Osmanlı petek birleşimine uygulanınca binmenin %74,4'ünü AÇIKLIYOR (bizans için %2,8)
geçersiz poligon 0 · boşluk 0
```
⇒ **KUSUR r8232'DE VAR.** "Koyu kırmızı" Osmanlı gövdesinin `kapat()` mitre kapamasıyla Bizans peteğine taşmasıdır. Emre'nin sorusunun cevabı: **Osmanlı kırmızısı eklenirken Bizans mavisi geri çekilmiyor**, çünkü gövdeler arasında çıkarım yok. Sınıf motor → **P13B.**

**⑥ Mardin 1408-06-01** (0042/H-0039 · 35,64-38,56K / 39,32-43,30D)
```
binme  artuklu↔celayirli 790,2 km²  (653,9 artuklu peteğinde → celayirli taşmış · kapat() celayirli için %33,1)
       akkoyunlu↔artuklu  18,3 km²  (tamamı artuklu peteğinde · kapat() %0)
       celayirli↔eyyubi-hisnikeyfa 4,9 km²
boşluk SAHİPLİ 22,3 km² — tamamı <3,5 km şerit (dikiş) · tavan 1,4 km²
geçersiz poligon KUTU İÇİNDE 0  (memluk ve celayirli self-intersection noktaları kutu dışında)
```
⇒ **"Çaprazlanmış renk = self-intersection" hipotezi bu kutu için r8232'de ÇÜRÜDÜ.** Görünen kusur BİNME. Kapat() celayirli taşmasının yalnız üçte birini açıklıyor; kalan 2/3'ün kaynağı (B2 köprü / B3 koridor / epok) **ölçülmedi**. Görüntü `00652fc`'dendi. Sınıf motor → P13B.

Tekrar koşmak için komutlar:
```
py denetim/ARAC-MTR-DENIZASIRI-0914.py 1329-06-01 OSMANLI 41.08 29.05 41.02 29.03   # 0042/H-0009 · 0030/H-0002-1
py denetim/ARAC-MTR-DENIZASIRI-0914.py 1352-03-01 OSMANLI 40.72 26.45 40.47 26.63   # 0042/H-0015
py denetim/ARAC-MTR-DENIZASIRI-0914.py 1281-01-01 almanya 60.25 25.0 59.44 24.75    # 0040/H-0002 (katman id'si doğrulanmadı)
py denetim/ARAC-MTR-SERBEST-0914.py 1546-01-01 27.95 30.30 47.20 49.04 7.3          # 0044/H-0011 (+ kontrol kutusu)
py denetim/ARAC-MTR-SERBEST-0914.py 1517-09-10 20.79 26.93 24.38 31.06 5.3          # 0043/H-0017-1
py denetim/ARAC-MTR-KUTU-0914.py 1329-06-01 40.33 40.64 29.44 29.87                  # 0030/H-0002-3
py denetim/ARAC-MTR-KUTU-0914.py 1408-06-01 35.64 38.56 39.32 43.30                  # 0042/H-0039
```
⚠️ Tek süreçte yedi ölçüm ~9 dk sürdü. Hızlandırma için `ARAC-MTR-ORTAK`'a NE geojson `shape()` önbelleği eklenebilir.

**Ölçümden önce yazılmış öngörüler** (D022, karne yukarıda: boğaz ✗ çürüdü, kirpi ✓ tuttu):
- **Boğaz / Saroz / Tallinn:** `KARA_TOL 0,002` sadeleştirmesi dar boğazı kapatabilir. O zaman ADA KURALI iki yakayı tek bileşen görür. DENIZASIRI `maske.motor_kara` ile `NE10m_tam` bileşenlerini **ayrı ayrı** sorar. Ayrışırlarsa kök maske sadeleştirmesidir (P13B `0016/H-0004` boğaz kesiği kalemi). Ayrışmazlarsa kapı 2 (parça <200 km²) ya da kapı 3 (düz hat karada) açıktır.
- **Kirpi (0043/H-0017 · 0044/H-0011):** gövde değil **SERBEST kenar çizimi**. `serbest-hale` genişliği u·2^z/67,8 px (tavan 80 px), `line-blur`, `line-join: bevel` (`js/app.js:1676-1687`). Kısa parçalı, keskin dönüşlü hatta her parçanın dikdörtgeni dışa taşar. Motor SERBEST'i "gövde sınırı ∩ tampon(0,02°, sahipsiz petekler)" diye kuruyor (`uret_petek.py:3402`), bu yüzden sahipsiz bir peteğe komşu KIYI da hatta girer. Öngörü: Basra kutusunda `isin_adayi` yüksek ve `kiyi_payi` > %0, kontrol kutusunda düşük. Tutarsa sınıf **arayüz (P14)**, motor değil. Motor tarafında da hat kıyıdan kırpılabilir (P13B).

## 5 · Ölçülmeyenler (açıkça)

**`ölçülmedi` damgalı maddeler (10):** `0028/H-0007` · `0040/H-0001` · `0040/H-0003` (kendi kutuları) · `0040/H-0007` · `0042/H-0002` · `0042/H-0008` · `0042/H-0013` (kutu kutu kova) · `0042/H-0016` · `0031/H-0002` (ada kalitesi; geçersiz bizans poligonu ÖLÇÜLDÜ) · `0043/H-0017`.
**r8232 sayısı olan maddeler (6):** `0030/H-0002` · `0040/H-0002` · `0042/H-0009` · `0042/H-0015` · `0042/H-0039` · `0044/H-0011`.

- 0040/H-0001'in 9 · H-0003'ün 3 · 0042/H-0002'nin 10 kutusunun **toplu** KUTU koşusu (binmenin kapat() payı, boşluğun tavan/sahipsiz/sahipli kovaları) — **ölçülmedi**.
- Ege (0042/H-0016) ve İyon (0031/H-0002) ada oturma ölçüsü — **ölçülmedi**.
- Aral şeridi kovası (0040/H-0007) — **ölçülmedi**.
- Kuzey Afrika 1721 köprü/dolgu kovası (0028/H-0007) — **ölçülmedi**.
- Görüntü yayınlarının (b729a90 · 536e90c · 197f0ae · a8feb8d) çıktısıyla kutu kutu karşılaştırma — yalnız 00652fc'de 1 gün yapıldı.

## 6 · Aletler

| alet | ne | sınandı mı |
|---|---|---|
| `ARAC-MTR-ORTAK-0914.py` | çıktı + koşu-10 girdi anlık görüntüsü + kara maskesi + km² · `MTR_REV=<commit>` eski yayın | ✓ (3818 ad hizası, 11 blob izi) |
| `ARAC-MTR-GENEL-0914.py` | günlük dünya binme + is_valid | ✓ iki yön (§1) |
| `ARAC-MTR-KUTU-0914.py` | kutu: binme (petek sahibine atama + kapat() açıklama) · boşluk kovası · is_valid · parça | kısmen (2 kutu; binme kolu r8232'de boş kutuda) |
| `ARAC-MTR-DENIZASIRI-0914.py` | boğaz/deniz aşırı üç kapı + maske bileşeni | §4 |
| `ARAC-MTR-SERBEST-0914.py` | kirpi: SERBEST hat köşe/genişlik/kıyı payı | §4 (kontrol kutusuyla) |
| `ARAC-MTR-ADA-0914.py` · `ARAC-MTR-ARAL-0914.py` · `ARAC-MTR-KOPRU-0914.py` | ada · Aral · köprü dolgusu | **koşulmadı** |
