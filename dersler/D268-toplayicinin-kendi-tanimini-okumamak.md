# D268 — Toplayıcının kendi tanımını okumamak: bir gecede DÖRT vaka

**Slogan:** *Bir sayıyı okumak, onu üreten toplayıcının ANAHTARINI okumaktır. Anahtarı
okunmamış bir sayı, ölçtüğünü sandığın şeyi ölçmez.*

6 Ekim 2026 gecesi, KOŞU 21 sürerken, `Değişmez 8a`nın `1508 → 1509` oynamasının sebebi
arandı. Cevap dört adımda bulundu ve **her adım bir önceki adımın hatasıydı.** Dördü de
aynı kusurdan: toplayıcının/karşılaştırıcının kendi tanımını okumamak. İkisi
koordinatörün (YILDIRIM BAYEZIT), ikisi denetleyicinin (LAB) işinde — yani kusur kişiye
değil **işin kendisine** bağlı.

---

## Vaka 1 (koordinatör) — "defter farkı" ile "yeni birim" aynı sanıldı
Kapı şunu bastı: `8a YENİ d1829-osm-rus-1|1829-09-14|sol|Hanak`.
Koordinatör bunu *"Hanak yeni eklenen birimdir"* diye okudu ve bütün teşhisi Hanak'a
kurdu: Hanak'ın kaydını, yamalarını, hattını ve 60 km'lik komşuluğunu taradı.

**Gerçek:** o satır `ic − defter["a"]`, yani **ESKİ DEFTERE göre fark** — karşılaştırılan
gövdeye göre değil. Sıralı listenin ilk satırı olduğu için göze çarpıyordu; Posof, Gümrü,
Şeyhrumi de aynı listedeydi. **Hanak'ın altı birimi iki gövdede birebir aynıydı.**

> **Kural:** bir fark listesini okumadan önce *"hangi TABANA göre fark?"* sorulur.
> `YENİ` kelimesi bir zaman ifadesi değil, bir **küme çıkarmasının adıdır**.

## Vaka 2 (koordinatör) — yarıçap veriden türetilmedi
Koordinatör *"Hanak'a 60 km içinde bugün dokunulan nokta SIFIR"* ölçümünü **eleme** diye
sundu. Evreni yazmıştı (79 aday satır) ve boş kümeyi kanıt sanmamaya dikkat etmişti.

**Gerçek:** 60 km bir SINIR değil **TAHMİNDİ**. Voronoi'de peteğin menzili nokta
yoğunluğuna bağlıdır; sebep olan iki şehir **114 km** ve **129 km** uzaktaydı — yarıçap
sebebi tam olarak dışarıda bırakıyordu.

> **Kural:** yarıçapı veriden TÜRETMEDEN kullanılan "yakınlık" ölçümü bir eleme değildir.
> **Evreni yazmak, YANLIŞ SEÇİLMİŞ bir evreni doğru yapmaz;** ikinci sigorta ilkinin
> yerine geçmez.

## Vaka 3 (LAB) — tekilleştiren anahtarla toplanan ayrıntı
LAB, `8a` ayrıntısını `{anahtar: parça}` sözlüğünde topladı ve *"taşma alanı 612 → 1692
km² oldu"* diye bildirdi. Bu, koordinatörü *"+1 daha büyük bir değişimi gizliyor olabilir"*
hükmüne götürdü.

**Gerçek:** Lugos'un **aynı anahtarlı İKİ parçası** vardı; sözlükte sonuncusu öncekini
EZDİ ve 1080 km² görünmez oldu. Sayaç (`set`) doğruydu, ayrıntı yanlıştı. Alan hiç
değişmemişti. LAB kendi hatasını buldu ve geri geldi.

> **Kural (LAB'in cümlesi):** *tekilleştiren anahtarla toplanan ayrıntı, tekilleştirileni
> GİZLER.* Bir `set` ile bir `dict`i aynı anahtarla beslemek, ikisini aynı şeyi ölçüyor
> sanmaktır.

## Vaka 4 (ikisi birden) — kırılganlık yanlış evrene, sonra yanlış düzeye kuruldu
Koordinatör üst sınırı *"117 çok parçalı anahtar ⇒ +128"* diye tahmin etti: **yalnız çok
parçalı anahtarlar bölünebilir** varsayımı. LAB ölçtü, **+970** buldu (tek parçalı 1392
anahtardan 672'si de bölünüyor — etiket şehri çıkınca o tek parçanın örnekleri İKİNCİ en
yakına gider ve farklı örnekler farklı şehirlere düşer ⇒ **parça bölünmeden anahtar
bölünebiliyor**).
Sonra LAB **kendi +970'ini de düzeltti:** her anahtarı tek başına ele alıp "ikinci en
yakın" etiketleri hep YENİ saymıştı; o etiket aynı `(hat, gün, yan)` grubunda çoğu zaman
ZATEN vardı ⇒ bölünme değil **BİRLEŞME**. Yani **−n, +n olarak sayılmıştı.** Grup
düzeyinde net: **+250 / −646**.

> **Kural:** bir duyarlılık ölçümü, sayacın **gruplama düzeyinde** yapılır. Birim düzeyinde
> yapılan sayım, birleşmeleri bölünme gibi gösterir ve işareti ters çevirir.

---

## Ve asıl bulgu: kusur sayıda değil, SAYACIN TANIMINDA çıktı
Dört adım sonunda ölçülen şey şu oldu:
```
600e2d00   ham parça 1637 · taşma 1.895.260 km² · 8a sayacı 1508
2fe8ada7   ham parça 1637 · taşma 1.895.260 km² · 8a sayacı 1509
```
Geometri hiç değişmemişti. `denetle.py:5447` anahtarı `hat|gün|yan|yer` ve `yer`
(`:5388-5399`) **karşı yakanın** ağacından `query_nearest` ile geliyor ⇒ `yer` =
**TAŞILAN** yerleşim. Oysa Değişmez 8'i getiren commit (`595e9947`) birimi *"≥5 km
**taşan** yerleşim"* diye tarif ediyor.

🔴 **Beyan ile kod ayrışmış: tavan, tanımın adını koyduğu birimi hiç ölçmüyor.**
Ve anahtar fonksiyonunda tek satır gerekçe yok — ne kodda, ne commit mesajında, ne `D237`de.

Ölçülen sonuçları:
- etiket şehri ↔ parça uzaklığı **medyan 61 km**, 378 anahtarda >100 km ⇒ `yer` bir konum
  bilgisi değil **komşuluk artefaktı**;
- −1 veren 646 senaryonun **622'sinde alan BİREBİR korunuyor** ⇒ sayaç gerçek bir taşmayı
  **yutabiliyor ve yuttuğu görünmüyor**;
- ve bu bir senaryo bile değil: **bugün 128 parça (1637 − 1509) mevcut bir anahtarın
  içinde, sayaçta görünmüyor.**

## Ne yapıldı
Tavan **oynatılmadı** (§3.4(0): sebebi ve birimi tartışmalı olan sayı tavan olmaz).
`denetle.py`ye dokunulmadı — hem KOŞU 21 sürerken donuktu, hem bu bir **ölçüt**
değişikliğidir ve Değişmez 8'i Emre tanımladı. Karar `SABAH-1004 ㉘/㉘b/㉘c`ye yazıldı:
ihlal etikete duyarsız ölçüye mi bağlanacak (A), birim tanıma mı uydurulacak (B), olduğu
gibi mi kalacak (C). Koordinatörün ölçülmüş tavsiyesi: **(A), ve `8a-birim`in ihlal
yetkisi kalksın, rapor kolonu kalsın.**

## Bağlı dersler
`D237` (Değişmez 8'in doğuşu) · `D267` (desen veriye uymazsa sessiz yanlış sayı) ·
`D201` (motor sayıları logdan okunur) · `§3.4` tavan disiplini · `§11` *"ölçüm doğru,
çıkarım yanlış"* ve *"denetim var ≠ o soruyu soruyor"* aileleri.

## Dosyalar
`denetim/HANAK-D8A-1006.md` (dört hükmün zinciri, her birinin niçin eksik olduğu) ·
`denetim/LAB-8A-KIMLIK-1006.*` · `LAB-8A-ALAN-1006.*` · `LAB-8A-KIRILGANLIK-1006.*` ·
`LAB-8A-BIRLESME-1006.*` · `oturumlar/SABAH-1004.md ㉘ ㉘b ㉘c`
