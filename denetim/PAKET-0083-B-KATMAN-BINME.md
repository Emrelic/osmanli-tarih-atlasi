# PAKET-0083-B · KATMAN BİNME — H-0008 · H-0009

Oturum: PAKET-0083-B-KATMAN-BINME (eski: HAZIR KITA 2709 1456) · 5 Ekim 2026
Koordinatör: YILDIRIM BAYEZIT · Şartname: `oturumlar/PAKET-0083.md` §0 + §B
Ölçülen veri: `data/donemler.js` + `data/devletler_harita.js` (diskteki, 4 Eki 19:17 üretimi)
Yazılan: bu dosya + `denetim/PAKET-0083-B-KATMAN-BINME.diff` · `data/ arac/ js/` YALNIZ OKUNDU

---

## 0. TEK CÜMLE

**İki madde de AYNI kusur, ve kusur TASARIM DEĞİL:** motorun `kapat()` işlemi
(≈16 km yarıçaplı morfolojik kapama, `arac/uret_petek.py:2885`) Osmanlı
gövdesindeki ≈33 km'den dar Bizans adalarını ve çıkıntılarını yutuyor, ve bunu
`delikleri_doldur`ın "BAŞKA DEVLETİN yerleşimi varsa kapatma" yasağından (B1,
`:2972`) ÖNCE yaptığı için yasak hiç devreye girmiyor. Sonuçta iki gövde aynı
toprağı kaplıyor. **Varsayılan açık olan "⑦ yumuşak renk" kipinde**
(`index.html:165` `checked` · Osmanlı 0.68 · yabancı 0.44) iki yarı saydam dolgu
alfa harmanlanıyor. Emre'nin gördüğü koyu mor "ikinci katman" ve "arka planda
görünen" BİZANS bu harman.

---

## 1. ÖNGÖRÜ — ölçümden ÖNCE yazıldı (scratchpad `ongoru.txt`)

| | öngörü | ölçüm | tuttu mu |
|---|---|---|---|
| H-0008 yıl | 1299–1313 (Bilecik 1299'da Osmanlı, Harmankaya 1313'e dek Bizans) | 1299-01-01 → 1313-01-01 | ✓ |
| H-0008 sayı | 100–300 km² (tek petek) | 118–167 km² ada · kutuda Osmanlı∩Bizans 207–300 km² | ✓ |
| H-0008 mekanizma | "motor o hücreyi devletten düşmemiş" — Bizans gövdesi fazla | **ÇÜRÜDÜ.** Bizans gövdesi DOĞRU, FAZLA olan Osmanlı gövdesi. Hücreyi yutan `kapat()` | ✗ |
| H-0009 yıl | 1317–1326 (Bursa kuşatması) | 1305-01-01 → 1321-04-01 (görselde Mudanya hâlâ mavi) | ✗ (pencere daha geniş, ucu yanlış) |
| H-0009 tarama | işgal değil, DEVİR katmanı | **ÇÜRÜDÜ.** Taranmış görünen doku alttan görünen altlık; ne `isg:` ne devir. Bursa'da yalnız `osmanli-dolgu` + `devlet-dolgu:bizans` var | ✗ |
| H-0009 sayı | 500–1500 km² | 282 km² (1314) · 400 (1305) · 422 (1322) | ✗ (küçük) |
| "Tasarım olabilir" uyarısı | düşük güven | ölçüldü: **tasarım değil**. Görünürlüğü tasarım (yumuşak kip) veriyor, çakışmanın kendisi kusur | — |

İki mekanizma öngörüsünün ikisi de çürüdü. Çürüyen nokta tam bulgunun kendisi:
"yabancı fazla" değil "Osmanlı fazla". (`CLAUDE.md §3`'teki 13 Eylül KAYIT notu
bu sınıfı zaten öngörmüş: *"çakışma veride durdukça üstteki (Osmanlı) sessizce
kazanır"*.)

---

## 2. ÖLÇÜM

### 2.1 Görseller — ne gösteriyor
- `H-0008-1.png` (144×107): Bilecik · Harmankaya · Pazaryeri. Ortada **BİZANS**
  etiketli koyu mor üçgen, çevresi Osmanlı kırmızısı.
- `H-0009-1.png` (185×185): Bursa (turuncu başkent halkası değil, şehir) ·
  İmralı · Mudanya · Kite · Köprühisar · Kulacahisar. Bursa'yı çevreleyen koyu
  kırmızı çokgen, sol üstte mavi (Bizans) Mudanya kıyısı.
- İki görselde de tarih YOK (kırpıntı, 4 Eki 21:33 çekilmiş). Yıl, görseldeki
  yerleşimlerin `s:` dönemlerinden çıkarıldı (§2.2).

### 2.2 Yerleşim dönemleri (`girdi.yukle()`, 92+1 dosya)
| yerleşim | `s:` Bizans | not |
|---|---|---|
| Bilecik | 1281 → **1299-01-01** | H-0008'de Osmanlı ⇒ tarih ≥1299 |
| Harmankaya | 1281 → **1313-01-01** | H-0008'de BİZANS ⇒ tarih <1313 |
| Bursa | 1281 → **1326-04-06** | |
| Mudanya | 1281 → **1321-04-01** | H-0009'da mavi ⇒ tarih <1321-04 |
| Kite | 1281 → 1303-01-01 | |
| İznik | 1281 → 1331-03-02 | |

### 2.3 Gövde çakışması — app.js çözümü BİREBİR (node vm + shapely)
`DONEMLER[].o` (PARCALAR/PARCA_HALKA) ve `DEVLET_HARITA[].dnm` (DEVLET_PARCALAR)
`parcaCoz` ile çözüldü, kutu 28.2–30.8E × 39.5–40.7N, alan eşit-alan yaklaşığı.

| gün | Osmanlı dönemi | Bizans dönemi | Osmanlı ∩ Bizans | çakışan yer |
|---|---|---|---|---|
| 1299-06-01 | 1299-01-01→1300-01-01 | 1299-01-01→1300-01-01 | **207 km²** | Harmankaya adası 167 km², %100 Osmanlı altında |
| 1302-01-01 | 1301-01-01→1302-08-01 | 1300-01-01→1302-08-01 | **300 km²** | Harmankaya 167 (%100) + Bursa çevresi 133 |
| 1305 · 1310 · 1312 | 1305-01-01→1313-01-01 | üç dönem | **400 km²** | Harmankaya 118 (%100) + Bursa çıkıntısı 282 |
| 1314 · 1318 | 1313-01-01→1321-04-01 | 1313-01-01→1321-04-01 | **281 km²** | Bursa çıkıntısı (Harmankaya artık Osmanlı) |
| 1322-01-01 | 1321-04-01→1323-01-01 | 1321-04-01→1323-01-01 | **422 km²** | Bursa |
| 1325-01-01 | 1325-01-01→1326-04-06 | 1324-03-01→1326-04-06 | **802 km²** | Bursa adası 321 (%100) + İznik adası 371 (%100) + 110 ayrı |
| 1326-06-01 | 1326-04-06→1329-06-01 | 1326-04-06→1329-01-01 | 481 km² | İznik 371 (%100) + 110 |

**Biri `isg:` mi? HAYIR.** Kutudaki 41 yerleşimin hiçbirinde 1400 öncesi `isg:`
yok (kutudaki en erken `isg:` 1919-01-23). İşgal taraması, devir, tâbi ve himaye katmanları
bu yerde BOŞ.

### 2.4 Tarayıcıda doğrulama (yerel sunucu, `queryRenderedFeatures`)
- 1305-06-01 · Harmankaya (29.98, 40.08): `osmanli-dolgu` + `devlet-dolgu:bizans`
- 1320-06-01 · Bursa (29.06, 40.17): `osmanli-dolgu` + `devlet-dolgu:bizans`
- 1320-06-01 · çakışmasız kontrol (29.4, 40.1): yalnız `osmanli-dolgu`
- Çalışma anı opaklık: `osmanli-dolgu` **0.68** · `devlet-dolgu` **0.44** ⇒
  yumuşak kip açık (taze sayfa, `index.html:165` `checked`)
- DOM'da `Bizans` etiketi var: etiket adayı yabancı gövdeden üretiliyor
  (`devletGuncelle`), Osmanlı'nın altında kalan gövdenin etiketi de basılıyor.
  H-0008'deki "BİZANS" yazısı bu.

### 2.5 Mekanizma sınavı — `kapat()` yutuyor mu?
"Doğru" gövde = Osmanlı − Bizans (deliği/girintisi olan gövde). Sonra motorun
`kapat(g, 0.15)` gövdesi birebir uygulandı:

| vaka | ada/çıkıntı | r=0.15 (motor) | r=0.10 | r=0.05 |
|---|---|---|---|---|
| Harmankaya 1299 | 167 km² | **%100 yutuldu** | %100 | %8 |
| Harmankaya 1305 | 118 km² | **%100** | %100 | %100 |
| Bursa 1325 | 321 km² | **%100** | %100 | %0 |
| İznik 1325 | 371 km² | **%100** | %100 | %0 |
| Bursa çıkıntısı 1305 · 1314 · 1322 | 400 · 282 · 422 | **%99 · %98 · %97** | — | — |

⇒ Çakışmanın %97–100'ü `kapat()`tan geliyor. **B1 ikinci yasağı
(`delikleri_doldur(..., sahip_ix=aktif)`) bu vakalarda hiç ateşlenmiyor**, çünkü
`kapat` deliği o fonksiyona ulaşmadan kapatıyor. Fonksiyonun kendi yorumu amacını
söylüyor: "henüz o an aktif olmayan komşu" şeridini köprülemek (1299 İnegöl).
Ama ayrım yapmıyor: "aktif olmayan" ile "BAŞKA DEVLETİN" şeridini aynı kapatıyor.

### 2.6 Bütün zaman çizgisi — ADA sınıfının envanteri (alt sınır)
618 Osmanlı döneminin her birinin başlangıç gününde: yabancı gövde PARÇASI
(kutusu < 1°) Osmanlı o / v gövdesinin ≥%99 içinde mi?
- **504 dönem-parça kaydı · 12 tekil ada** (kimlik + merkez 0.1° + o/v)
- kimliğe göre: bizans 5 · venedik 3 · avusturya 1 · zend 1 · bulgaristan 1 · yunanistan 1
- 11'i doğrudan gövdenin (`o`) altında, 1'i tâbi gövdenin (`v`) altında

| kimlik | ~merkez | süre | maks alan | dönem |
|---|---|---|---|---|
| bulgaristan | 27.2, 41.7 | 1912-10-24 → 1913-03-26 | 1045 km² | 8 |
| venedik | 18.8, 42.6 | 1571-08-01 → 1687-09-30 | 722 km² | 61 |
| bizans | 26.6, 41.2 | 1361-05-05 → 1371-09-26 | 590 km² | 4 |
| bizans (İznik) | 29.7, 40.5 | 1323-01-01 → 1331-03-02 | 369 km² | 8 |
| bizans (Bursa) | 29.1, 40.1 | 1324-01-01 → 1326-04-06 | 321 km² | 3 |
| bizans (Harmankaya) | 30.0, 40.1 | 1299-01-01 → 1313-01-01 | 167 km² | 7 |
| zend | 48.0, 29.9 | 1776-04-16 → 1779-04-01 | 43 km² | 1 |
| yunanistan | 27.0, 37.5 | 1912-11-11 → 1920-04-23 | 12 km² | 69 |
| bizans | 29.5, 40.7 | 1323-01-01 → 1329-06-01 | 7 km² | 6 |
| venedik | 20.9, 38.6 | 1500-12-24 → 1684-08-06 | 3 km² | 179 |
| avusturya (`v`) | 24.7, 45.1 | 1718-07-21 → 1739-09-18 | 3 km² | 24 |
| venedik | 24.0, 37.6 | 1460-05-29 → 1566-04-15 | 2 km² | 134 |

🟡 Bu envanter yalnız ADA sınıfını sayıyor. H-0009 gibi ÇIKINTI vakaları (yabancı
anakaraya bağlı, kısmen yutulan) burada YOK ⇒ **alt sınırdır** (§3).
⚠️ 12 adanın hepsinin `kapat` kaynaklı olduğu ölçülmedi. Bithynia dışındaki 8'inde
mekanizma sınavı (§2.5) koşmadı. 1325'teki 110 km²'lik kalıntı da `kapat`tan
değil (sınav onu yutmuyor), sebebi ölçülmedi.

---

## 3. BULAMADIĞIM / ÖLÇEMEDİĞİM
- **Görsellerin tam günü: ölçülemedi.** Kırpıntıda tarih yok, pencere başlığı
  damgası (`document.title`) görüntüye girmemiş. Yıl penceresi yerleşim
  dönemlerinden: H-0008 **1299–1313**, H-0009 **1305 – 1321-04-01**.
- **H-0009'daki "taralı" doku: kesin teşhis yok.** Bursa'da render edilen katmanlar
  yalnız `osmanli-dolgu` + `devlet-dolgu:bizans`. Taralı görünüm yumuşak kipte
  alttan görünen altlık dokusu olmalı. Ekran görüntüsü alınamadı (bölme gizliydi,
  render 5 sn'de bitmedi), o yüzden görsel karşılaştırma YAPILMADI.
- **Çıkıntı sınıfının tam envanteri: bulunamadı.** Bütün dönemlerde Osmanlı ∩
  yabancı toplam alanı ölçülmedi (Bizans gövdesi tek parça 40 bin km², tarama
  ağır). Yamanın koşu raporu satırı bunu kendisi sayacak (§4).
- **Yabancı ↔ yabancı simetriği: ölçülmedi.** Aynı `kapat` yabancı gövdelerde de
  koşuyor (`:6671`, `:7057`). Bir yabancı gövdenin Osmanlı ya da başka bir yabancı
  adayı yutması da mümkün. 1305'te Bizans gövdesinde 579 km²'lik bir delik var,
  yani orada yutma olmamış. Genel sayım yapılmadı.

---

## 4. ÖNERİ — iki katman, ikisi de koordinatörün
### ① KÖK (önerim bu): motor yaması · `denetim/PAKET-0083-B-KATMAN-BINME.diff`
`git apply --check` TEMİZ · yamalı kopya `py_compile` TEMİZ · 89 satır değişiklik.
- `kapat(g, yaricap, engel=None)`: kapamanın EKLEDİĞİ bileşen, **o gün BAŞKA BİR
  DEVLETE ait** (`_sahipli` + `aktif`te değil) bir yerleşimin noktasını içeriyorsa
  eklenmez. `engel=None` ⇒ eski davranış bit-bit aynı (`:3283` B3 ve `:5752`
  bölgeler çağrıları DEĞİŞMEDİ).
- 🔴 Ölçüt BİLEREK B1'den DAR: sahipsiz ya da henüz kurulmamış nokta engel
  DEĞİL. Yoksa `kapat`ın varlık sebebi (1299 İnegöl köprüsü) bozulurdu.
- Çağrılar: yabancı gövde (`_yabanci_govde_hesap` + ikinci yol) ve Osmanlı
  doğrudan + tâbi gövdesi (`_osm_govde_hesap`, yeni `engel` parametresi).
  `_kapat_engel(aktif, a)` gün başına ezberli.
- 🔴 **ÖNBELLEK ANAHTARI da değişti** (`_onb_parca_anahtar` çevre baytına 4. bayt
  "o gün başka devletin"). Bu olmasaydı gövde komşunun sahipliğini okurken
  anahtar okumazdı ⇒ sonraki veri koşularında BAYAT gövde (`§9.1` sınıfı).
- Sayaç `_B1_SAYAC["kapat_engel*"]`e kondu ki süreç işçilerinden toplanırken
  kaybolmasın. Koşu raporuna boş kova da basılır. **Öngörü raporda yazılı: en az
  Harmankaya · Bursa · İznik görünmeli; 0 çıkarsa yama çalışmıyor demektir.**
- Sınav (gerçek geometri, yamadaki gövdenin birebir kopyası, iki yön):

| vaka | ESKİ yutulan | YAMALI | engel ilgisiz noktada |
|---|---|---|---|
| Harmankaya 1305 | 394 | 276 (Harmankaya'nın 118'i KURTULDU) | 394 (= eski) |
| Bursa adası 1325 | 693 | 371 (Bursa'nın 321'i kurtuldu) | 693 (= eski) |
| İznik adası 1325 | 693 | 321 (İznik'in 371'i kurtuldu) | 693 (= eski) |
| Bursa çıkıntısı 1314 | 276 | **0** | 276 (= eski) |

⚠️ Bilinen sınırlar, saklamıyorum:
(a) Yabancı devlet döngüsü `aktif == onceki` iken kaydı uzatıyor. Yalnız
KOMŞUNUN sahipliği değişirse gövde yeniden hesaplanmaz ⇒ engel o dönemin ilk
gününde donar. Eskisinden kötü değil, ama tam da değil.
(b) Noktası ek bileşende olmayan ama peteği kısmen orada olan yabancı petek
korunmaz (nokta ölçütü, B1 ile aynı).
(c) `uret_petek.py` motor tuzunda ⇒ **yalnız TAM İNŞA koşusuna** girer (`§9.1` ②).
Veri koşusuna sokulmamalı.
(d) Çakışma kalktığında yabancı gövde Osmanlı'nın altında DEĞİL yanında görünecek.
Harmankaya 1313'e, Bursa 1326-04-06'ya, İznik 1331-03-02'ye dek Osmanlı içinde
Bizans adası olarak çizilir. Verinin `s:` dönemleri böyle diyor; kaynağını bu
görevde DENETLEMEDİM. Emre'nin gözü "neden Osmanlı içinde mavi ada var" diye
sorabilir. O soru `kapat` kusuru değil, verinin söylediği şey.

### ② GÖRÜNÜM (köke dokunmaz, yalnız belirtiyi saklar): ÖNERMİYORUM
Varsayılan kipi "sert"e çevirmek (`index.html:165` `checked` kaldır) harmanı
siler, ama `app.js:1975` notunun tam söylediği şeyi yapar: Osmanlı sessizce
kazanır, iki iddia veride kalır, Bizans etiketi Osmanlı toprağının üstünde
yazmaya devam eder. Belirtiyi gizler, kusuru gizler. Kök yamayla gereksizleşir.

### ③ Denetim boşluğu — `CLAUDE.md §3` notu ile ilgili
`§3` Değişmez 3'te "gövde çakışması / üst üste binme `donemler.js` +
`devletler_harita.js` gövdelerindedir" diyor. Doğru, ama gövdeye o çakışmayı
YAZAN satır ölçüldü: `uret_petek.py:2885 kapat()`. `denetle.py`de "Osmanlı
gövdesi ∩ yabancı gövde > 0 km²" soran bir değişmez var mı ölçmedim. Yoksa bu
envanter (§2.6, 12 ada) onun ilk tavanı olabilir. Karar koordinatörün.

---

## 5. YENİDEN ÜRETMEK İÇİN
Betikler scratchpad'de (oturum dizini). Mantık:
① node `vm` ile iki data dosyasını yükle, `parcaCoz` + `aktifAralik` birebir
② kutuya düşen gövdeleri dök ③ shapely ile ikili kesişim ve km²
④ `kapat` gövdesini birebir kopyala, "Osmanlı − yabancı" gövdesine uygula.
İstenirse `denetim/PAKET-0083-B-*.py` olarak teslim ederim; şartname yalnız
md + diff izni verdiği için koymadım.
