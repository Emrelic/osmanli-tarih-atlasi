# GOSTERIM-0075 — H-0011 · H-0017 · H-0022 · H-0024 · H-0039 (+ yatay H-0048-2) · 21 Eylül 2026

Şartname: `oturumlar/PARTI-0075.md` ⑤ · parti `parti-emrelic-0075/PARTI.md`. Açılan görseller: H-0011-1, H-0017-1/2,
H-0022-1/2, H-0024-1, H-0039-1, H-0048-2 (yalnız bunlar).
🔴 **`data/` `arac/` `js/` a HİÇBİR ŞEY YAZILMADI, HİÇBİR ŞEY COMMİTLENMEDİ.** Yalnız `denetim/` altına salt-okur aletler ve bu rapor.

**Ölçüm ortamı (bilinmeli):** tam koşu `data/devletler_harita.js`i yarım yazıyor (çalışma ağacında 112 KB / 20 devlet;
HEAD'de 75 MB / 581 devlet). Bu yüzden bütün ölçümler **HEAD'in temiz kopyasından** (`git worktree`, yayın sürümü) okundu.
Tarayıcı bölmesi `visibilityState:"hidden"` idi → MapLibre `load` ateşlemedi, **canlı katman sorgusu yapılamadı** (bkz. §5).

---

## 0. HÜKÜM TABLOSU

| madde | teşhis | kaynak katman | çare | kalem sahibi |
|---|---|---|---|---|
| **H-0017 + H-0022** | 🔴 **KOORDİNATÖRÜN "Rusya" TEŞHİSİ ÇÜRÜDÜ.** Yeşil = **`eflak` yabancı gövdesi**, sahipsiz DEĞİL | `devlet-dolgu` (yabancı) — `s:eflak` | **2 noktaya `v:eflak` yaz** (İbrail, Yergöğü) | `yerlesimler.js` → Oturum 0 (koşu ister) |
| **H-0024** (+ **H-0011**) | Motor **başka devletin PETEĞİNİ ALAN olarak yasaklamıyor**, yalnız NOKTA olarak. 3 çakışma kaynağı, hepsi `uret_petek.py`de | `donemler.js` + `devletler_harita.js` gövdeleri | `baskasinin_petegini_cikar` — **yazıldı, sınandı, motora BAĞLANMADI** | `uret_petek.py` → Oturum 0 |
| **H-0039** | C katmanı **79.947 km²'lik OPAK DİKDÖRTGEN** boyuyor, **76 yıl** boyunca (1847-05-31→1923-10-29) | `hukuki-sinir-dolgu` | `kapsama.dolgu:false` **tek satır** (15 Eylül Karlofça emsali) — koşu İSTEMEZ | `data/hukuki_sinirlar.js` → "dosya senin" sonrası |
| **H-0048-2** (yatay) | Kaynak katman **BULUNAMADI** — üç aday ELENDİ (gövde · bölge · serbest kenar) | ? | canlı `queryRenderedFeatures` (bir satır, §5) | ⑤ (ben), tarayıcı görünür olunca |

---

## 1. H-0017 + H-0022 — "boş yeşil arazi" (Yergöğü · İbrail doğusu)

### 1.1 Koordinatörün teşhisi ÇÜRÜDÜ — üç bağımsız ölçüm aynı yeri gösteriyor
Mesaj ③: *"piksel #a6bb8f = rusya #4f7d4f × 0,44"*. **Bu #a6bb8f H-0014/H-0015'in (Poti/Rusya) pikselidir; H-0017/H-0022'nin değil.**

**① PİKSEL** (`ARAC-GOSTERIM-0075-YESIL.py`; görselin yeşil kümesinin ortalaması ↔ aday renk × 0,44, bej kabartma #f2f1c1 üstünde, CIE76):

| görsel | ölçülen RGB | `eflak` #4db34d | `rusya` #4f7d4f | `bogdan` #24905a |
|---|---|---:|---:|---:|
| H-0022-2 (Yergöğü 1836) | (165,211,142) | **ΔE 1,8** | ΔE 15,7 | ΔE 10,5 |
| H-0022-1 (İbrail 1836) | (166,211,143) | **ΔE 2,2** | ΔE 15,1 | ΔE 10,1 |
| H-0017-2 (Yergöğü 1834) | (165,210,141) | **ΔE 2,0** | ΔE 15,4 | ΔE 10,4 |

Beklenen: `eflak` (169,214,142) · `rusya` (170,190,143). **G kanalı 210 ↔ 190: rusya'ya 20 birim uzak.**
**② ETİKET:** görselde yeşilin üstündeki yazı büyük harfli **"EFLAK VOYVODALIĞI"** (yabancı devlet etiketi); Bükreş'teki
kırmızı bölgede küçük harfli *"Eflak Voyvodalığı (tâbi)"*. Yani **aynı devlet iki ayrı gövdede**.
**③ KAYIT** (`ARAC-GOSTERIM-0075-KESIT.py` · HEAD gövdeleri): İbrail kutusunda (1836) `eflak` gövdesi **2.037 km² / 4.460** (%46) ·
Yergöğü kutusunda (1836) **4.060 km²**.

### 1.2 Sebep — veride, iki nokta (`arac/girdi.py`, 3921 nokta)
```
Bükreş · Târgovişte · Piteşti · Slatina · Turnu Severin … (11 nokta)  v:{kid:eflak, statu:vassal, 1462-06-01 → 1878-07-13}   → Osmanlı kırmızısı + tâbi şeridi
İbrail   45.270N 27.972E   d:1538-09-01→1829-09-14 · s:{eflak 1829-09-14→1859-01-24} · s:{romanya 1859-01-24→1881-03-26} · v: YOK
Yergöğü  43.904N 25.970E   d:1450-01-01→1829-09-14 · s:{eflak 1829-09-14→1859-01-24} · s:{romanya 1859-01-24→1881-03-26} · v: YOK
```
Edirne'den (1829-09-14) sonra iki eski Osmanlı raya toprağı Eflak'a döndü ama **`v:` yerine `s:` yazıldı**: motor onları
Eflak'ın TÂBİ gövdesine değil **AYRI bir yabancı devlete** verdi → açık yeşil ada, çevresi tâbi kırmızı.

### 1.3 "Sahipsiz mi?" — SAYILDI (0,02° ızgara, `ne_10m_land` ∩ gövde birleşimi)
| kutu | gün | kara hücresi | **sahipsiz** | `eflak` gövdesi |
|---|---|---:|---:|---:|
| H-0017-1 Eflak-Boğdan | 1834-01-01 | 130.204 | **129 (%0,10)** | 1.702 |
| H-0017-2 Yergöğü | 1834-01-01 | 18.414 | **9 (%0,05)** | 1.716 |
| H-0022-1 İbrail | 1836-01-01 | 1.260 | **1 (%0,08)** | 588 (%47) |
| H-0022-2 Yergöğü | 1836-01-01 | 3.608 | **5 (%0,14)** | 1.134 (%31) |

Sahipsiz hücreler kıyı/sınır kırıntısı; şikâyetin konusu **değil**. `eflak` gövdesindeki hücrelerin en yakın noktası:
Yergöğü 542 · İbrail 405 · (Niğbolu 357 · Rusçuk 199 — Tuna yaslamasının karşı yaka payı; Voronoi-yakın, sınır nehirde).

### 1.4 Çare (KAYIT, koşu ister — Oturum 0)
İki noktayı Bükreş'in kalıbına getir (Emre'nin "en yakın yerleşimlere katılmalı" dileği zaten karşılanıyor: toprak
sahipsiz değil, YANLIŞ KATMANDA):
```
İbrail ve Yergöğü:
  v: += { f:"1829-09-14", t:"1878-07-13", k:"Eflak Voyvodalığı", statu:"vassal", kid:"eflak" }
  s: -= { eflak 1829-09-14→1859-01-24 } , { romanya 1859-01-24→1881-03-26 }
  s: += { romanya 1878-07-13→1881-03-26 }          # romanya-kralligi 1881→ DEĞİŞMEZ
```
⚠️ **Kaynak yükü:** yeni bir tarih icat edilmiyor — 1829-09-14 (Edirne) noktaların KENDİ `d:` bitişi, 1878-07-13 Bükreş'in
KENDİ `v:` bitişi. Ama **1859-01-24→1878-07-13 aralığında Romanya'yı "tâbi Eflak" yapmak bir hüküm**: Bükreş'le tutarlılık
için öneriliyor; TDV `eflak` / `edirne-antlasmasi` ile teyit 1.MURAT'a bırakıldı (ben yazmadım).
**Silistre kısmı DOĞRU** (`d:` + `isg: rusya 1829-06-30→1836-01-01`, `olaylar_ek.js:72`) — dokunulmadı.

### 1.5 AYNI SINIF mı? — SAYILDI (`ARAC-GOSTERIM-0075-CIFTTEMSIL.py`, 3921 nokta)
Ölçüt: bir noktada `s:K` VE aynı günlerde başka bir noktada `v:kid=K`.
**14 nokta-pencere · 4 kimlik**: `bulgaristan-prensligi` 6 (İhtiman · Niğbolu · Plevne · Eski Zağra · Tatarpazarcığı · Filibe;
toplam 58.374 nokta-gün) · `eflak` 2 (21.448) · `haciemir` 5 (Ordu · Ünye · Mesudiye · Gölköy · Reşadiye, 1350→1427) ·
`sirbistan-prensligi` 1 (Niş, 183 gün). Hepsi aynı kusurun adayı; **hüküm vermedim** (Bulgaristan Prensliği / Hacıemiroğulları
için tâbiiyet penceresi ayrı araştırma). ⚠️ **H-0015'te de aynı iki nokta var** (1830-05-07 kutusunda `eflak` 84 hücre) —
0074'ün "H-0015 açık yeşil = Rusya" çıkarımı BU ölçümle kısmen yeniden açılıyor; ben o görseli ölçmedim.

---

## 2. H-0024 (+ H-0011) — ÜST ÜSTE BİNME: SEBEP

### 2.1 Emre'nin ölçütü ve bugünkü hâl
*"renkler üst üste binmemeli, uç uca gelmeli — ne boşluk kalmalı ne iki katman."* Motor bu değişmezi **yalnız BİR çiftte** zorluyor:
`uret_petek.py:7053` `g = poligonal(g.difference(gt))` — Osmanlı **doğrudan × tâbi**. Osmanlı × yabancı ve yabancı × yabancı
gövdeler `_yabanci_devlet_faz1` içinde **birbirinden habersiz** hesaplanıyor (FAZ 1 paralel, her devlet ayrı).

### 2.2 ÇAKIŞMA TEK GÜNDE DEĞİL, HER ÇAĞDA (0074'ün kesiti, aynen)
| gün | çifte iddialı km² | oran | çift |
|---|---:|---:|---:|
| 1300 | 135.334 | %0,26 | 249 |
| 1500 | 353.170 | %0,66 | 283 |
| 1700 | 1.599.638 | %2,20 | 313 |
| 1850 (zirve) | **2.430.774** | **%2,65** | **379** |
| 1920 | 354.117 | %0,33 | 169 |

Çakışmanın **%95,7'si ≥5 km genişlikte gerçek gövde**, sızıntı (<1 km) yalnız %0,5 → sadeleştirme artefaktı DEĞİL.

### 2.3 Bu görsellerdeki çakışmalar (`KESIT.py`, HEAD, kutuya kırpılmış)
| görsel | gün | çift | km² | merkez |
|---|---|---|---:|---|
| H-0011 Annaba | 1832-03-01 | `OSM-tabi` × `fransa-cumhuriyet` | **482** | 36,713N 7,870E |
| H-0024 Konstantin | 1837-10-13 | `OSM-tabi` × `fransa-cumhuriyet` | **2.468** | 36,501N 5,671E |
| | | `OSM-tabi` × `abdulkadir` | 1.459 | 35,218N 4,872E |
| | | `fransa-cumhuriyet` × `abdulkadir` | 546 | 35,848N 3,422E |
| H-0039 Şattülarap | 1847-05-31 | `OSM-dogrudan` × `kacar` | **2.044** | 30,288N 48,358E |
| H-0017-1 Eflak | 1834-01-01 | `OSM-tabi` × `avusturya` 1.349 · × `rusya` 246 · `OSM-dogrudan` × `avusturya` 375 | 2.057 | 45,7N 24,5E … |

### 2.4 SEBEP-1 — çakışan alan KİMİN peteğinde? (`ARAC-GOSTERIM-0075-SEBEP.py`)
Petekler bir **bölümleme** (Voronoi): bir toprak bir günde TEK yerleşimin peteğinde. İki gövdede birden görünüyorsa **en az
biri kendi peteğinin dışına taşmıştır**. Çakışma poligonunu 0,02° ızgarayla örnekledim (≤4.000 örnek/çift), her örnek için o gün
VAR olan en yakın yerleşimi ve sahibini buldum:

| gün · çift | çakışma km² | en yakın nokta **A'nın** | **B'nin** | üçüncü/sahipsiz | en yakın noktaya medyan |
|---|---:|---:|---:|---:|---:|
| 1837 · `abdulkadir` × `fransa-cumhuriyet` | 2.777 | %11,0 | **%88,5** | %0,5 | 46 km |
| 1837 · `OSM-tabi` × `fransa-cumhuriyet` | 2.487 | **%43,3** | **%56,7** | 0 | 33 km |
| 1837 · `OSM-tabi` × `abdulkadir` | 1.671 | %60,7 | %39,3 | 0 | 71 km |
| 1832 · `OSM-tabi` × `fransa-cumhuriyet` | 2.277 | %14,8 | **%85,0** | %0,2 | 38 km |
| 1847 · `OSM-dogrudan` × `kacar` | 3.753 | %47,3 | %52,7 | 0 | 32 km |

⇒ **Bu beş çiftte çakışmanın ≥%99,5'i A'nın ya da B'nin peteğine düşüyor** (üçüncü/sahipsiz ≤%0,5; 1832'nin global 12 çiftinde
%0–%32 — Afrika'da `bate` %20,8 · sahipsiz %10,9 gibi karışık çiftler var, o yüzden genelleme YAPMIYORUM). Yani "iki devlet aynı toprağı hak etti" DEĞİL;
**bir gövde komşunun peteğini yuttu**, çoğu çiftte KARŞILIKLI (%43/%57 · %47/%53) ⇒ sınır boyunca iki yönlü taşma.
Global çiftlerde (1832, ≥200 km²) desen daha keskin: **taşan taraf 155–260 km uzakta tek/seyrek noktalı bir kimlik**, alan
yoğun komşunun peteği (bkz. 0074 §5.5 ③: en yakın noktaya azami 122 km, medyan 43 km).

### 2.5 SEBEP-2 — KODDA: yasak NOKTAYLA kurulmuş, alanla değil
Gövde, petek birleşiminden sonra **beş adımda BÜYÜYOR**; hiçbiri başka devletin peteğini çıkarmıyor:

| adım | satır | ne ekliyor | başka devletin toprağına karşı korumaSI |
|---|---|---|---|
| `kapat(g)` | 2788 | morfolojik kapama, **0,15° ≈ 16 km** yarıçap; `g` ile BİRLEŞTİRİR | **YOK** |
| `delikleri_doldur` (B1) | 2875 | hol doldurma | halkada *başka devletin yerleşim NOKTASI* varsa doldurmaz |
| `_b2_enklav_birlestir` | 3073 | **≤250 km** (`B2_ENKLAV_KM`) köprü; genişlik anakara ucunda **3°'ye kadar** | eksen 10 km adımla örneklenir (`_bant_baskasinin_topragini_kesiyor_mu`, 3043) + bandın İÇİNDE nokta var mı (`_yasakli_mi`, 3020) — **bandın GENİŞLİĞİ boyunca petek alanı sorulmuyor** |
| `_b3_koridor_kirp` | 3175 | koridor dolgusu, kapama **0,45° ≈ 50 km** | yalnız `_yasakli_mi` (nokta) |
| `dolgu` kapısı | 5957 | sahipsiz peteği devlete katar | yalnız SAHİPSİZ peteği katar — çakışma üretmez |

`_bant_baskasinin_topragini_kesiyor_mu`nun kendi docstring'i sorunu adıyla söylüyor (satır 3049-3055): *"`_yasakli_mi` yalnız
bandın İÇİNE DÜŞEN YERLEŞİM NOKTASI arar. Bir bant iki yabancı şehrin TAM ARASINDAN geçip hiçbirini içermeden ikisinin de
toprağını ezebilir."* — ekseni kapattılar, **bandın kendisini değil**; `kapat` ve B3 ise hiç sormuyor. Koşu günlüğü
(`kosu_zincir.log`): **B2 ≈ 1.500–1.530 köprü / koşu**, "içinde başka devletin yerleşimi var" diye reddedilen ≈ 1.520–1.590.
Emre'nin ③ kuralı (*"aradaki renklendirilmiş bölge EZİLEREK iki bölge birleştirilemez"*) **bugün yalnız nokta ve eksen
düzeyinde uygulanıyor**.

⚠️ **Hangi adımın hangi çakışmayı yaptığını AYRI AYRI ölçmedim** (motoru koşturamam; `MOTOR_B23_KAPALI=1` deneyi ikinci bir
koşu ister). Kanıt zinciri: (a) çakışmanın ≥%99'u başkasının peteğinde · (b) taşan taraf çoğu çiftte KARŞILIKLI ve 33–71 km
ölçeğinde (kapat 16 km + B3 50 km ile uyumlu) · (c) global seyrek çiftlerde 155–260 km (B2 250 km ile uyumlu) · (d) kodda
petek-alan sınavı yok. **Hüküm: "alan kuralı yok" KESİN; "hangi adım kaç km²" ÖLÇÜLMEDİ.** Motorda `MOTOR_B23_KAPALI=1` ile
aynı kesitin (1850-01-01) çakışması ölçülürse paylaşım tek koşuda çıkar.

### 2.6 KAÇ GÜN — Cezayir ve Şattülarap için ZAMAN boyu (`ARAC-GOSTERIM-0075-ZAMAN2.py`)
Her (kayıt × kayıt) çiftinin pencere kesişimi × bölgeye kırpılmış poligon kesişimi (≥100 km²); aynı çiftin ardışık kayıtları
birleşik gün olarak sayıldı. HEAD gövdeleri:

| bölge | çift | **süre** | pencere | en büyük km² | kayıt çifti |
|---|---|---:|---|---:|---:|
| Cezayir–Tunus | `OSM-tabi` × `fransa-cumhuriyet` | **93,3 yıl** | 1830-07-05 → 1923-10-29 | 2.487 | 199 |
| | `abdulkadir` × `fransa-cumhuriyet` | 11,3 yıl | 1832-11-22 → 1844-03-04 | 2.881 | 11 |
| | `OSM-tabi` × `abdulkadir` | 11,3 yıl | 1832-11-22 → 1844-03-04 | 1.672 | 22 |
| | `fas` × `fransa-cumhuriyet` | 20,4 yıl | 1844-03-04 → 1916-02-16 | 172 | 14 |
| **Şattülarap** | `OSM-dogrudan` × `kacar` | **122,6 yıl** | 1794-01-01 → 1917-03-11 | 4.028 | 155 |
| Eflak–Transilvanya | `OSM-tabi` × `avusturya` | 190,9 yıl | 1687-08-12 → 1878-07-13 | 1.253 | 196 |
| | `OSM-dogrudan` × `eflak` / × `bogdan` | 57,8 / 51,8 yıl | 1393 → 1462 / 1456 | 1.087 / 203 | 54 / 44 |
| | `bogdan` × `eflak` | 175,4 yıl | 1281 → 1456 | 331 | 4 |
| | `OSM-tabi` × `eflak` | 6,0 yıl | 1456 → 1462 | 414 | 10 |
| | `OSM-dogrudan` × `rusya` | 1,0 yıl | 1877-07-16 → 1878-07-13 | 167 | 7 |

⇒ Çakışma **bir günlük kaza değil, yüzyıl boyu süren yapısal durum**: Osmanlı/Fransa sınırı 93 yıl, Osmanlı/Kaçar 123 yıl. **1829-09-14
sonrası Eflak-İbrail/Yergöğü ile ilgili çakışma YOK** (`OSM-tabi × eflak` yalnız 1456-62) — H-0017/H-0022'nin yeşili çakışma değil, §1.
1834-01-01 kesitinde de çift türü aynı (`SEBEP.py`): `OSM-dogrudan × avusturya` 4.217 km² (%81,6 Avusturya peteği) · `OSM-tabi × avusturya`
1.349 (%57,8) · `OSM-dogrudan × rusya` 1.322 (%72,9 Osmanlı peteği) — sahipsiz/üçüncü pay **0**.
⚠️ **Tüm-atlas km²×gün TAMAMLANAMADI:** `ARAC-GOSTERIM-0075-ZAMAN.py` 4.977 kaydın birleşimini 1.220 sn'de kurdu, çift taramasını
36 dk'da bitiremedi (koşu + üç tarama aynı makinede) → durduruldu; dosya yarım bir alet olarak duruyor. Yerine bölgesel `ZAMAN2.py`.

### 2.7 ÇARE — `baskasinin_petegini_cikar` (`denetim/ARAC-GOSTERIM-0075-ONLE-SINAV.py`, 8/8 sentetik sınav GEÇTİ — iki yönlü: taşan kesilir · temiz gövde/sahipsiz katkı DEĞİŞMEZ)
Kural ALAN olarak: gövdeden, o gün **başka bir sahibin** (Osmanlı dâhil) peteklerini çıkar; **sahipsiz/dolgu/devredilmiş
peteğe DOKUNMA** (Emre'nin "boşluğu komşuya kat" hükmü aynen durur).
```python
def baskasinin_petegini_cikar(g, benim_ix, sahipli_ix, petekler, agac):
    diger = [j for j in agac.query(g) if j in sahipli_ix and j not in benim_ix and petekler[j] is not None and not petekler[j].is_empty]
    return g if not diger else g.difference(unary_union([petekler[j] for j in diger]))
```
**Motorda üç yer** (⚠️ SINANMADI — `arac/` donmuş):
1. `_yabanci_govde_hesap` (6329) — `g = gosterim_duzelt(g, aktif)` satırından SONRA, `intersection(KARA)` ÖNCE:
   `g = baskasinin_petegini_cikar(g, aktif, _sahipli_petekler(a), petek_epok(a), _petek_agaci(a))`
2. `_osm_govde_hesap` (6993) — `_g_ham`, `_gt_ham` ve `_duzelt` (köprü dâhil) için aynı çağrı; `sahipli − aktif` = yabancı sahipli petekler.
3. Yardımcı: `_sahipli_petekler(a)` = `{j : j ∉ devir_kumesi(a) ∧ (_osm_aktif(YERLER[j],a) ∨ ∃ s: f≤a<t)}`, gün başına önbellekli;
   `_petek_agaci(a)` = `STRtree(petek_epok(a))`, `id(pe)` ile önbellekli.
4. 🔴 **Önbellek anahtarı:** `_onb_parca_anahtar` (6365) çevre baytlarına `t in aks` biti koyuyor; **`t in _sahipli_petekler(a)` biti de
   girmeli** — yoksa aynı `aktif`, aynı komşular ama FARKLI gün/sahiplik önbellekten bayat sonuç döner.
⚠️ **Bilinen risk:** `_puan_bolgesi` kapısı komşunun bazı peteklerini BOYAMAZ (4 puan altı). Çakışma çıkarılınca o petekler
**iki gövdede de** yok olur = boşluk. Bu, kuralın TAM sonucudur (petek kime aitse ona ait; boyanmaması onun kararı) ama
**boşluk ölçümü koşu sonrası yükselmemeli** (Değişmez 1 / 1b ve `denetle_bosluk.py`). Maliyet (STRtree + difference): ölçülmedi.

### 2.8 KAPI — bir daha olmaması için (öngörü koşudan ÖNCE yazıldı)
`py denetim/ARAC-HARITA-DURUM-0074-CAKISMA.py --kesit` (0074 aleti, 13 dk, koşu istemez) koşu çıktısına uygulanır.
**Öngörü (21 Eylül 17:30, ölçümden önce):** 1850-01-01 kesitinde **GÖVDE sınıfı (≥5 km) çakışma çifti 0**; toplam çifte iddia
**≤ 100.000 km²** (bugün 2.430.774; kalan = 0074'ün ARA+SIZINTI tabanı, seyreltme gürültüsü); boşluk (Değişmez 1/1b) **artmaz**.
Öngörü tutmazsa: (i) 100.000 üstü ama GÖVDE 0 ⇒ seyreltme sonrası taban, ratchet ayarı; (ii) GÖVDE > 0 ⇒ çıkarma yanlış yerde/gün
anahtarı bayat (2.7-4); (iii) boşluk arttı ⇒ puan kapısı etkileşimi, çıkarma `_puan_bolgesi`'nden SONRA da denenmeli.
**Ratchet önerisi (`denetle.py`):** GÖVDE çifti tavanı 0 (yeni), toplam km² tavanı ilk koşu sonrası ölçülen değer.

### 2.9 Yumuşak kip bunu neden "mor üçgen" gösterdi
Ekran görüntülerinin hepsi **yumuşak kipte** (`SIYASI_KIP.yumusak`: devlet 0,44 · tâbi 0,60 · Osmanlı 0,68; kabartma dokusunun
sızması görüntülerde görülüyor). Çakışmada iki opaklık **harmanlanıyor** → koyu erguvan üçgen/kama. Sert kipte (varsayılan,
opaklık 1) üstteki kazanır ve çakışma görünmez (`js/app.js:1612-1636` kendi notunda: *"Çakışma veride durdukça üstteki sessizce
kazanır — yarın 'Osmanlı fazla görünüyor' diye bulunursa sebep budur"*). **İstemci tarafında düzeltilecek bir şey YOK** —
çakışan poligonlar veride; JS'te poligon işlemi (kütüphane yok) ve harman kaldırma kip sözleşmesini bozar. `js/` yaması YAZILMADI.

---

## 3. H-0039 — II. Erzurum Antlaşması "gösterim bozukluğu"

### 3.1 Sebep — C katmanı bir DİKDÖRTGEN boyuyor
`data/hukuki_sinirlar.js` `ii-erzurum-sattularap-1847`: `kapsama.tur:"bbox"`, kutu **lat 28,5–31,5 · lon 46,5–49,0**,
`f:1847-05-31 → t:1923-10-29`, `dolgu` alanı YOK. `js/app.js:7288-7347` (`_cKayitGeometrisi`) kutuyu Basra→Şattülarap ağzı
kirişiyle iki OPAK (`fill-opacity:1`, `hukuki-sinir-dolgu`) poligona böler: `osmanli` koyu kırmızı, `kacar` mor. Görseldeki
"çapraz bölünmüş dikdörtgen" bu (kutu ≈2,5°×3° ≈ 80.000 km²; görselde 2,3°×3,2° okundu). Nehir çizgisi ise motorun zaten
yasladığı `Shatt al Arab` (kaydın kendi notu: `onemli_not_motor_zaten_taniyor`).

### 3.2 "Kaç gün, kaç kayıt?" — `ARAC-GOSTERIM-0075-CDOLGU.js` (envanter)
`HUKUKI_SINIRLAR` = **9 kayıt; 4'ü opak dolgu basıyor**, 5'i basmıyor (`dolgu:false` ya da nokta-kümesi):
| kayıt | kutu km² | pencere |
|---|---:|---:|
| `ferhad-pasa-1590-sinir-hatti` | 1.206.039 | 13 yıl |
| `misir-sudan-22-paralel-1899` | 593.444 | 15 yıl |
| `midye-enez-1913` | 92.541 | 30 gün |
| **`ii-erzurum-sattularap-1847`** | **79.947** | **76 yıl** |
Şattülarap **en uzun ömürlü** dikdörtgen: 1847→1923 arası her gün, o kutuya bakan herkes bunu görüyor.

### 3.3 Çare
`kapsama.dolgu:false` (satır 15 Eylül'de Karlofça için konan bayrak, `js/app.js:7335`; gerekçesi aynen geçerli: hat nehir, motor
zaten yaslıyor, gizlenecek yanlış sınır yok — **yalnız yapay kutu kalıyor**). **Koşu İSTEMEZ**, `js/` istemez, tek satır.
⚠️ **Bağımlılık:** dikdörtgen kalkınca altındaki gövde görünür: orada `OSM-dogrudan × kacar` **2.044 km²** çakışıyor
(Muhammere/Abadan; antlaşma bunları Kaçar'a verdi) → Sert kipte üstteki (Osmanlı) kazanır = **antlaşmanın tersi**. Bu yüzden
`dolgu:false` **H-0024 çaresiyle BİRLİKTE** anlamlı (2.7 çıkarma, Muhammere'nin kendi peteğini Kaçar'a geri verir). Sıra:
`dolgu:false` hemen (dikdörtgen kalkar) → koşu → çakışma ölçümü.

---

## 4. H-0011 (Annaba) — H-0024'ün küçük kutusu
1832-03-01, `OSM-tabi × fransa-cumhuriyet` çakışması 482 km² (Bône). Aynı sebep (§2.5), ayrı çare yok. Görselin koyu üçgeni
yumuşak kipte iki opaklığın harmanı (§2.9). Fransız gövdesi üzerindeki tâbi gövde Konstantin beyliği; çakışan alanın
en yakın noktası çoğunlukla Fransız (§2.4 satır 1832: %85).

---

## 5. H-0048-2 (yatay, SINIR-STATU-0075 M-4976) — Sisam Boğazı → Milas çapraz çizgi
**Kaynak katman BULUNAMADI.** `bulunamadı` bir sonuçtur. ELENEN (1855-09-14, kutu 26,3–28,3E · 36,9–38,0N, HEAD):
| aday | sınav | sonuç |
|---|---|---|
| Osmanlı `o`/`v`/`h` gövdesi | `ARAC-GOSTERIM-0075-IGNE.py` (2 km açma: ince parça) + `-IGNE2.py` (ham halka: ≥170° dönüş, kenar ≥15 km) | ince parça: 1 (15 km, 32 km², Kuşadası körfezi, GÖRSELDEKİ ÇİZGİ DEĞİL) · **iğne 0** |
| yabancı gövde | `-IGNE2.py` | 0 |
| `bolgeler.js` (Muğla·Rodos·İzmir halkaları) | `-IGNE3.py` | en uzun kenar 24 km · iğne yok |
| serbest kenar (`sb`) | `-IGNE3.py` | kutuda hat **0** |
| sefer oku / C hat | veri taraması | o günde bu kutuda aktif kayıt yok (`seferler_ok103`, `savaslar`: 1770/1840) |
Kalan adaylar: `antlasma-fark-*` · `devir-*` · `isgal-*` · `olcum-*` · `imparatorluk-hale` çizgi katmanları. **Sınamak için
tek satır** (tarayıcı GÖRÜNÜR olunca; görsel bölmesi gizliyken WebGL yüklenmiyor):
`tarihAyarla(gunIdx("1855-09-14")); harita.jumpTo({center:[27.5,37.4],zoom:8}); [[27.2,37.6],[27.5,37.4],[27.8,37.25]].map(p=>harita.queryRenderedFeatures(harita.project(p)).map(f=>f.layer.id))`
⚠️ Tahmin (doğrulanmadı): iğne gövdeden değil, ayrı bir çizgi katmanından.

---

## 6. NE ÖLÇTÜM · NE BULAMADIM · NE İSTİYORUM
**Ölçtüm:** yeşil = `eflak` (ΔE 1,8–2,2; rusya 15,1–15,7) · sahipsiz %0,05–0,14 · 2 nokta yanlış katmanda · aynı sınıf 14 pencere/4
kimlik · beş çiftte çakışmanın ≥%99,5'i bir tarafın peteğinde · 5 kesitte 482–3.753 km² · C dikdörtgeni 76 yıl · motorda alan-kuralı yok (5 adım).
**Bulamadım:** hangi adımın kaç km² çakışma yaptığı (koşu ister) · H-0048-2 çizgisinin katmanı (canlı sorgu ister) ·
tüm-atlas zaman boyu km²×gün (aşağıdaki ZAMAN.py bitmedi — süreç 1.900 sn'de kayıt kurulumunu tamamladı, çift taraması sürüyor).
**İstiyorum (sıra):** ① `data/hukuki_sinirlar.js` `dolgu:false` (tek satır, koşusuz) ② İbrail/Yergöğü `v:` (2 nokta, koşu) ③
`uret_petek.py` 2.7'nin üç yeri + önbellek anahtarı biti (koşu) ④ koşudan sonra `--kesit` + `denetle.py` (öngörü 2.8) ⑤ H-0015'in
açık yeşilini yeniden ölç (aynı iki nokta). **Yetki:** hiçbirine dokunmadım; "dosya senin" gelene dek yalnız `denetim/`.
