# SONRA1923-TKLAMP-1004 — `t:"1923-10-29"` ile biten 4.225 dönemin sınıflandırması

Görev: YILDIRIM BAYEZIT, 4 Ekim 2026. Yalnız ölçüm; veriye ve sabitlere dokunulmadı.

## 0. ÖNGÖRÜ — ölçümden ÖNCE yazıldı

- **4.225 → 🟢 GERÇEK SON ~270 · 🔴 KENET ~3.900 · ⚪ ~50.** Dayanak: `SONRA1923-SEKIL` —
  UC'de biten künyelerin noktası 285, bunun 263'ü `tbmm-turkiye` (gerçek son); ötekiler (`bhopal`,
  `yogyakarta`… `t:1923-10-29` pencere ucu) kenet.
- **② KENETLERİN 1923–1945 arasında ölen devlete ait olanı: ~280–350.** Dayanak: SEKIL'in "kısa 🟢"
  235 noktası (kacar 108, polonya 22, suud 20…) + almanya 38 + `isg:` dönemlerinin bir kısmı.
  ⇒ 1923–45 kampanyasının gerçek hacmi **~15–20 künye kararı / ~300 dönem**.
- **Mekanizma:** ayırt edici olan dönemin değil künyenin bitişi; künye `t:`si 1945-09-02 pencere ucu
  olanlar "1945'te yaşıyor" sayılır (`ic_not_t` beyanı ile). `isg:` 97'nin çoğu ⚪'ye düşecek
  (işgalin bitişi işgalcinin ömründen okunamaz).
- **`uret_petek.py` "1923-11-01" sızıntısı:** fas'tan başka birkaç künye (<10).

## 1. HÜKÜM

```
4.225 dönem t:"1923-10-29"        s: 4092 · isg: 97 · v: 36 · d: 0     (koordinatörün sayısı birebir)

🟢 GERÇEK SON                       263   tbmm-turkiye (künye notu: "GERÇEK BİTİŞ, pencere ucu DEĞİL … ardılı turkiye-cumhuriyeti")
🔴 KENET                          3.878
   ② 1945'te YAŞIYOR → t:1945-12-31 YETER        3.605
   ② 1923–1945 ARASI ÖLÜYOR → gerçek bitiş + MADDE   273   (15 künye)
⚪ ÖLÇÜLEMEDİ                         84
```
**① KENET = 3.878 (%91,8)** · **② 1923–45 kampanyasının çekirdek hacmi = 273 dönem / 15 künye kararı**
(+ 263 Türkiye ardıl dönemi + ⚪ 84). Ama ② bir **ALT SINIRDIR** (§4).

Öngörü: 🟢 ~270 → **263** ✓ · KENET ~3.900 → **3.878** ✓ · ⚪ ~50 → **84** (isg: Mısır ağır bastı) ·
② ~280–350 → **273** ✓ (alt sınırda). Mekanizma: tuttu, ama **künye notunu okumayan ilk koşum
yanıldı** (§5) — "pencere" kelimesini arayan betik `tbmm-turkiye`yi KENET saydı, çünkü notu
*"pencere ucu DEĞİL"* diyor. Doğrusu notu okumak.

## 2. Katman katman

### `s:` (4.092)
| Kova | Dönem | Nasıl ayırt edildi |
|---|---|---|
| 🟢 GERÇEK SON — `tbmm-turkiye` | 263 | künye `t:`=UC ve `ic_not_t` "GERÇEK BİTİŞ". ⚠️ Dönem dokunulmaz AMA toprak sahipsiz kalmamalı ⇒ **ardıl dönem** (`turkiye-cumhuriyeti`, BOYASIZ) eklenmeli — bu `t:` taşıma değil YENİ dönem işi. |
| 🔴 KENET · 1945'te yaşıyor (künye `t` ≥ 1945-12-31) | 939 | sovyet-rusya 428 · ingiliz-hindistani 120 · ingiliz-sudani 83 · hollanda-dogu-hint 76 · misir-kralligi 57 · fransiz-cinhindi 46 · irak-kralligi 35 … (30 künye) |
| 🔴 KENET · 1945'te yaşıyor (künye `t`=1945-09-02, `ic_not_t` "pencere ucu … bugün de mevcut") | 2.287 | fransa-cumhuriyet 305 · abd 224 · kanada 188 · italya 130 · brezilya 129 · cin-cumhuriyeti 120 · avustralya 109 · yunanistan 101 … (55 künye) |
| 🔴 KENET · 1945'te yaşıyor (künye `t`=1945-09-02, pencere BEYANSIZ) | 308 | `ingiltere` 296 (notu: *"t'ye dokunulmadı."*) · `danimarka` 12 (*"t değişmedi."*). 1945-09-02 kenet tarihiyle aynı; iki devlet 1945'te kuşkusuz yaşıyor — ama künye beyanı eksik, düzeltilmeli. |
| 🔴 KENET · 1923–45 ölüyor | 273 | aşağıda §3 |
| ⚪ künye `t`=UC, beyan YOK (8 küçük devlet) | 14 | `san-devletleri` 5 · `cohor-sultanligi` 3 · `agadez` · `bhopal` · `yogyakarta` · `surakarta` · `tidore` · `buganda` 1'er. Künyeleri de UC'de kesilmiş, `ic_not_t` boş ⇒ gerçek son mu kenet mi **künyeden okunamıyor**. (Genel bilgi kenet der — Bhopal 1949, Johor bugün — ama `§4`: kaynaksız yazılmaz.) |
| ⚪ künye UC'den ÖNCE bitmiş (4c hayalet) | 8 | meysur 3 · maratha 2 · rusya · piombino · adal — `SONRA1923-HAYALET` listesi; önce kimlik düzeltilir. |

### `isg:` (97) — işgalin bitişi işgalcinin ömründen okunamaz
| Kova | Dönem | |
|---|---|---|
| 🔴 KENET · 1945'te yaşıyor | 36 | Tunus, `fransa-cumhuriyet` 1881-05-12 → : himaye edilen künye `tunus-beyligi-fransiz` **1956-03-20**'de bitiyor ⇒ işgal 1945'te sürüyor, künyeden OKUNDU. |
| ⚪ | 61 | `ingiltere`: **Mısır 57** (1914-12-18 →) · Katar 2 (1916) · Kuveyt 1 (1914) · Buganda 1 (1900). İşgalin/himayenin bitişi ayrı soru; ⚠️ Mısır'da himaye 1922-02-28'de resmen kalktı (misir-kralligi künyesi o yıl başlıyorsa bu `isg:` ZATEN UC'den önce bitmiş olabilir — kontrol edilmeli, ölçmedim). |

### `v:` (36)
| Kova | Dönem | |
|---|---|---|
| 🔴 KENET · 1945'te yaşıyor | 35 | hepsi `kid:tunus-beyligi-fransiz` (künye t 1956-03-20) |
| ⚪ kimliksiz | 1 | Tabarka (`v:` `kid` yok) |

## 3. ② 1923–1945 arası ölen devletler — 273 dönem / 15 künye (kampanyanın gerçek iş listesi)
Her biri için: gerçek `t:` + o gün bir **kronoloji maddesi** + ardıl dönem.
```
 108  kacar                 t 1925-01-01   ⚠️ ardıl iran f 1925-12-12 ⇒ 11 ay arası boş (SEKIL yan bulgu)
  38  almanya               t 1945-06-05   → almanya-muttefik-isgali
  22  polonya               t 1939-10-06   → Alman/Sovyet bölüşümü (nokta nokta)
  20  suud-ucuncu           t 1932-09-18   → suudi-arabistan (BOYASIZ)
  15  arnavutluk-bagimsiz   t 1939-04-07   → italya (işgal)
  15  somali                t 1927-01-01   → ardıl belirsiz
  13  hicaz-kralligi        t 1925-12-31   → suud-ucuncu
  13  mogolistan            t 1924-11-26   → mogolistan-halk-cumhuriyeti (BOYASIZ)
  12  avusturya-cumhuriyet  t 1938-03-13   → almanya
   5  letonya · 5 estonya · 4 litvanya  t 1940-08-06 → sovyet-rusya
   1  danzig 1939-09-01 · 1 cimma 1933-01-01 · 1 buhara-halk 1924-01-01
```
İlk 9 künye 273'ün **%93,8**'i.

## 4. 🔴 ② NİÇİN ALT SINIR — `D204`
Kova devletin **yaşadığını** ölçer, noktayı **tuttuğunu** değil. "1945'te yaşıyor" kovasındaki
3.605 dönemin içinde 1923–45 arası el değiştiren noktalar var ve bunlar da gerçek bitiş + madde
ister — ama burada **görünmez**: `habesistan` 64 nokta (1936 `italyan-dogu-afrikasi`), Hatay 1939
(`fransa-cumhuriyet` → Türkiye), `cin-cumhuriyeti` 120 nokta (1932 `mancukuo`, 1937–45 Japon işgali),
II. Dünya Savaşı işgalleri (fransa 305, yunanistan 101, yugoslavya, hollanda-dogu-hint, belçika…).
Bunlara `t:1945-12-31` YAZILIRSA Değişmez 2 **sessiz** kalır (kırılma yazılmadığı için) ama harita
yanlış olur. Sayısı ölçülmedi — `kronoloji_cok_1923_1945.js` (500 madde) ile nokta eşlemesi gerekir.
⇒ **② = 273 kesin + bilinmeyen sayıda 1945'te-yaşayan-ama-toprak-kaybeden.**

## 5. "1923-11-01" sızıntısı — ÖLÇÜLDÜ: tek kayıt, üç dosyada
```
uret_petek.py:4498/4500 · 6517 · 6765/6768 · 7033/7036   tarih listesi "≤ 1923-11-01" ile kırpılıyor
                                                         ve son anlık görüntü olarak "1923-11-01" EKLENİYOR
uret_donemler.py:586-587                                 Mütareke/Doğu Trakya bandı t "1923-11-01" (ayrı üretici)
data/*.js bayt sayımı ("1923-11-01" geçen):
    devletler_harita.js    1   (93,7 MB · 04 Eki 19:17)   DEVLET_HARITA[233].dnm[13] = {f:1923-10-29, t:1923-11-01}
    devlet_harita_ust.js   1   ( 2,6 MB · 04 Eki 21:24)   aynı kayıt (üst katman kopyası)
    ufuk_bantlari_ust.js   1   ( 5,7 MB · 01 Eki 03:23)   UFUK_BANT[0].dnm[2829] = {d:"fas", f:1923-10-29, t:1923-11-01}
    donemler.js            0
```
⇒ Sızıntı **yalnız `fas`** (UFUK bandında `d:"fas"` açık; `DEVLET_HARITA[233]`ün id'sini ayrıca okumadım,
tarih çifti birebir aynı). Mekanizma (hipotez): UC'de **başlayan** tek dönem fas'ınki; motorun
"1923-11-01" son karesi onu üç günlük bir dilim olarak çıktıya yazıyor. UFUK taşınırken bu satırlar
`girdi.UFUK[1]`e bağlanmazsa sızıntı yeni ucuna taşınır.

## 6. Ortam
```
tklamp.py    HEAD dc8c4f6e… başta = sonda
sizinti.py   HEAD ad237e95… başta · 2e8bf605… sonda  ← koşu sırasında başka oturumlar commitledi;
             okunan üretilmiş dosyalardan devlet_harita_ust.js'in mtime'ı 21:24 (benim koşumdan
             önce). Sayım tek dosya-okumada yapıldı; sonuçlar üç dosyada tutarlı.
Okunan: yerlesimler* (girdi.yukle, 93 dosya, 4298 nokta) · devletler.js (oku_devletler) ·
        üretilmiş: devletler_harita.js / devlet_harita_ust.js / ufuk_bantlari_ust.js (node eval)
```
Veriye/sabite dokunulmadı.
