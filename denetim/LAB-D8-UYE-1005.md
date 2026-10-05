# LAB-D8-UYE-1005 — Değişmez 8a'ya 4 Ekim koşusunda GİREN 20 üyenin sınıfı

> Görev: YILDIRIM BAYEZIT (M-5786). Denetleyici: LAB. **Yalnız ölçüm** — `data/`, `arac/`,
> `denetle.py`ye yazılmadı. Ağaç: `origin/main 707b4b12` worktree'si (`lab-d8-uye-1005`).

## 0. Üyeler — defterden, ölçümden önce
`git show 595e9947:` (27 Eyl, 1611) ↔ `git show dc8c4f6e:` (4 Eki koşusu, 1582):
ORTAK 1562 · ÇIKAN 49 · GİREN 20 (beyanla aynı). 20'nin 20'si bugünkü defterde (1584) de var.
⚠️ Beyandaki "Münih ×6" **yanlış sayılmış: Münih 7 üye** (`d1816-alm-ah-4` ×2 · `d1844-alm-ah` ×2 ·
`d1878-de-ah` ×2 · `d1923-de-at|1918-11-12`). Tam liste: Münih 7 · Třeboň 2 · České Budějovice 2 ·
Norapat 1 · Gadsden 6 (Santa Rita del Cobre 2 · Tubac 2 · Yuma geçidi 2) · Kaliforniya/Yuma geçidi 2.
Bütün günler hattın `f` günü ya da `t−1` günü (8a yalnız bu ikisini ölçer) ⇒ "sınır günü" etiketi
günün TÜRÜNÜ söyler, sınıfı söylemez.

## 1. ÖNGÖRÜ — ölçümden ÖNCE yazıldı ve commitlendi
**Sayı:** 🟢 17 · 🔴 0 · ⚪ 3.
**Mekanizma (sayıdan ayrı sınanır):**
- M1 — Her üyenin `yer` noktası KENDİ yakasındadır (karşı yakaya geçmiş nokta yok); taşma,
  hattın karşı yakasında karşı tarafa ait nokta bulunmayan boşluğun petek emilimidir (§2).
- M2 — Üyelerin girişini GÖVDE açıklar: aynı veri + koşu 19 gövdesi (E1) ile üye YOKTUR.
- M3 — Üyenin kendi verisi (nokta koordinatı, o günkü sahiplik, hat kaydı) 27 Eyl ↔ 4 Eki
  arasında aynıdır — Gadsden hariç (önceki raporda Gadsden üçlüsü VERİ değişimiyle çıkmıştı).
- ⚪ 3 = Gadsden `1854-06-30` üçlüsü: hat yürürlük günüyle sahiplik devri aynı günse ayrım
  kurulamayabilir.
**Yanlışlama:** bir `yer` noktası `yan` yakasında ≥ 5 km içerideyse o üye 🔴'dir ve M1 çürür.

---

## 2. Ölçüm ortamı — çıkış kodu
```
ağaç       origin/main 707b4b12 + bu dosya (829b7845) · her betik başta/sonda HEAD bastı: 829b7845 → 829b7845
gövde      `kodla.py coz-c` ile bugünkü gövde (2026-10-05 15:08 · uret_petek 8b6aaea5)
bağımlılık shapely 2.1.2 · numpy 2.5.3 (4 Eki'deki "numpy yok" hâli GEÇMİŞ)
denetle    `py arac/denetle.py --ayrinti > dosya 2>&1; echo $?` → ÇIKIŞ 0
           8a ✓ 1585 birim (tavan 1585) · 722 (hat,gün) ölçüldü · 8m 450 = 372 + 78 kör + 0 atlanan
```
Kod 0 ⇒ ölçüm GEÇERLİ: D8 gerçekten koştu, atlanmadı.

## 3. Yöntem — dört sınama, her biri yalnız BİR şeyi oynatır
| | sabit | oynayan | soru |
|---|---|---|---|
| **K** gövde karşı-olgusalı | bugünkü veri + denetle | gövde K20 (bugün) · K19 (`0e22a060`, koşu 19) · K15 (`9ce6c942`, koşu 15) | üye hangi gövdeyle doğuyor |
| **V** veri kimliği | — | 4 ağaç `595e9947` · `0e22a060` · `dc8c4f6e` · HEAD | üyenin noktası + 8 hattın kaydı değişti mi |
| **Y** nokta yakası | — | — (gövdesiz) | `yer` noktası hattın hangi yakasında (en yakın parçanın çapraz çarpımı; 8a'nın SOL = yönün solu sözleşmesi) |
| **Ç** çevre | motor | 150/400 km içinde kaydı değişen noktalar | girişi komşu veri mi açıklıyor |

Eski iki gövde 4 Ekim LAB karalamasından (`govde0925`, `govde_once_0e22a060` + TUZ tanığı) okundu; `data/`ya yazılmadı.

## 4. 🔴 SONUÇ
```
🟢 GÖVDE ÇALKANTISI    8   Münih ×7 · Norapat ×1
🔴 GERÇEK AŞIM         8   Gadsden ×6 (Santa Rita del Cobre ×2 · Tubac ×2 · Yuma geçidi ×2)
                           Kaliforniya ×2 (Yuma geçidi ×2)
⚪ ÖLÇÜLEMEDİ          4   Třeboň ×2 · České Budějovice ×2 — HAT KAYDI TERS (§5.3)
```
⇒ **Tavan YANLIŞ dondurulmuş: 20 üyenin 8'i bir veri kusurunu ölçüyor, 4'ü ise hiç ölçü değil.**

```
üye                               K20  K19  K15 | nokta/sahiplik 27Eyl→bugün        | nokta yakası (Y)          | bugün km / km²
Münih ×7 (4 hat)                  VAR  VAR  YOK | AYNI                              | kendi yakası 61,0         | 7,2 / 12
Norapat |1923-10-28               VAR  YOK  YOK | AYNI                              | kendi yakası 13,0         | 9,4 / 32
Třeboň ×2 (at-cs)                 VAR  VAR  YOK | AYNI (fark yalnız 1526 günü)      | ETİKETE GÖRE KARŞI 14,6   | 24,9 / 1148
České Budějovice ×2 (at-cs)       VAR  VAR  YOK | AYNI (fark yalnız 1526 günü)      | ETİKETE GÖRE KARŞI 32,6   | 24,8 / 924
Tubac ×2 (gadsden)                VAR  VAR  YOK | DEĞİŞTİ meksika→abd 1854-06-30    | kendi yakası 29,7         | 25 / 7380 · 3208
Santa Rita del Cobre ×2 (gadsden) VAR  VAR  YOK | DEĞİŞTİ meksika→abd 1848-02-02    | kendi yakası 113,8        | 20–21 / 804 · 736
Yuma geçidi ×2 (gadsden)          VAR  VAR  YOK | DEĞİŞTİ meksika→abd 1848-02-02    | kendi yakası 47,2 (uçtan öte) | 25 / 2956 · 1156
Yuma geçidi ×2 (kaliforniya)      VAR  VAR  YOK | (aynı kayıt)                      | kendi yakası 27,2 (uçtan öte) | 25 / 1752
```
8 hattın kaydı dört ağaçta BİREBİR aynı (V). Eski gövde + bugünkü veri: K19 → 20'nin **19**'u, K15 → **0**'ı.

## 5. Üye üye gerekçe
### 5.1 🟢 Münih ×7 — motor değişimi, veri aynı
Münih kaydı (`s: almanya 1281→1923`) ve dört hat dört ağaçta aynı. `595e9947→0e22a060` arasında
hattın 150 km içinde değişen yalnız Třeboň/Budweis, onların da yalnız **1526** günü (üye günleri
1816–1923). Üye K15'te yok, K19'da var: aradaki fark motor tuzu (`c90fa6c8 → 8b6aaea5`, koşu 16
yamaları + BOGAZ-0081). Taşma eşiğin hemen üstünde (7,2 km ≥ 5 · 12 km² ≥ 5) ve 7 üyede (4 hat,
1816–1923) **aynı parça**. Münih hattan 61 km uzakta, kendi yakasında. Veri düzeltmesi gerekmez.
(Parçanın kıvrımlı hattın tek yönlü şerit taşması mı gövde kaydı mı olduğu ÖLÇÜLMEDİ; iki
ihtimalde de sınıf aynı: veri kusuru değil.)

### 5.2 🟢 Norapat — aynı motor, ilgili veri aynı
K19 ↔ K20 aynı motor (`8b6aaea5`), fark yalnız koşunun girdisi. Koşu 19 girdisi `52222fa3` ↔ koşu 20
girdisi `dc8c4f6e`: hattın **400 km** içinde değişen TEK kayıt **Dvin** (10 km, YENİ nokta, `614b0914`).
Dvin `bit:1236`, `s:/d:/v:` YOK ⇒ 1923'te kimseye atıf yapamaz, 8a'nın atıf dizinine girmez.
Norapat'ın kendi kaydı ve hat aynı ⇒ gövde çalkantısı.
⚠️ BULUNAMADI: 1923 gövdesini neyin kaydırdığı. Sahipsiz, 1236'da ölmüş Dvin'in 1923 peteğine
girmesi bir motor davranışı olurdu — **ölçülmedi, iddia edilmiyor.**

### 5.3 ⚪ Třeboň ×2 · České Budějovice ×2 — soru bu hatta SORULAMIYOR: `d1923-at-cs` `sol_taraf` TERS
Hat batıdan doğuya çizili, `[13.8157, 48.7664] → [16.945, 48.6042]` ⇒ yönün SOLU = KUZEY =
**Çekoslovakya**. Kayıt `sol_taraf: "avusturya-cumhuriyet"` diyor. İki bağımsız ölçüm, tek sonuç:
```
noktalar (gövdesiz, f günü, 150 km)   doğru yakada 0 · ters yakada 10
gövde alanı (bugün, 1920-07-16)       "AT" diye etiketli SOL şerit: ÇS 4944 km² · AT 2642
                                      "ÇS" diye etiketli SAĞ şerit: AT 6801 km² · ÇS  477
```
⇒ 8a bu hatta **her ülkenin KENDİ toprağını "taşma" sayıyor.** Třeboň ve Budweis Çek yakasında;
"taşma" dediği alan Çek gövdesinin Çek yakası (km 24,8–24,9 ≈ şerit genişliği 25: şerit dolu).
Ne gövde çalkantısı ne gerçek aşım.
🔴 **Ve 4'le sınırlı değil:** at-cs'nin defterdeki **16 üyesinin tamamı** aynı yapıda (sağ yakada
Freistadt · Gmünd · Linz · Viyana, sol yakada Bratislava · Brno · Třeboň · Budweis; her biri ×2 gün).
⇒ Tavanda 16 sahte üye var ve hattın GERÇEK taşmaları (AT gövdesi kuzeyde / ÇS gövdesi güneyde)
**hiç sayılmıyor**: 8a bu hatta kör ve kör olduğunu bilmiyor. Düzeltme VERİDE (D hattı kaydı:
`sol_taraf → cekoslovakya` ya da hat ters çevrilir); düzeltildiği commit'te tavan yeniden ölçülür.

### 5.4 🔴 Gadsden ×6 · Kaliforniya ×2 — veri değişti, harita gerçekten taşıyor
`2e656b0d` (27 Eyl 13:59, DUNYA-0079 — defterin yazıldığı `595e9947`dan 52 dk SONRA): Tubac
`meksika → abd` 1854-06-30 (Gadsden onay teatisi = hattın `f`i, AYNI GÜN, gün uyumsuzluğu YOK);
Santa Rita del Cobre ve Yuma geçidi `meksika → abd` 1848-02-02. Üç sahiplik de doğru, üç nokta da
ABD yakasında. Taşma gerçek ve büyük:
```
1854-06-30 Meksika yakası 25 km şerit: ABD gövdesi 15.628 km² · Meksika 2.491 km²
200 km içinde Meksika noktası (1854-06-30): El Paso del Norte 7 km · Arizpe 110 km — o kadar
```
Kuzey Sonora'da nokta yok ⇒ hattın güneyi en yakın ABD peteğine emiliyor (§2). Bu **Dobriç
sınıfı**: nokta taşmayı yaratmadı, GÖRÜNÜR KILDI (K15'te üç nokta Meksikalıydı ve hata ters
yöndeydi). Düzeltme VERİDE: Meksika yakasına nokta (ad ve kaynak bu raporun işi değil).
**Üç noktaya DOKUNULMAMALI**, sahiplikleri doğru.

## 6. Öngörünün sınavı
```
                               öngörü          ölçüm            hüküm
sayı                           🟢17 🔴0 ⚪3     🟢8 🔴8 ⚪4        ÇÜRÜDÜ
M1 nokta kendi yakasında       20/20 coğrafî olarak TUTTU · ama at-cs'de ETİKETE göre 4 nokta karşıda
M2 giriş K19→K20 gövdesi       ÇÜRÜDÜ: 19/20 K19'da ZATEN VAR; giriş K15→K19 aralığında
M3 veri aynı (Gadsden hariç)   TUTTU
⚪ Gadsden 1854 üçlüsü          ÇÜRÜDÜ: gün uyumlu, sınıf 🔴
```
**"4 Ekim koşusunda GİREN" beyanı yanlış aralığa bakıyordu.** Karşılaştırılan iki defter koşu 15 ve
koşu 20 gövdesine ait; koşu 19 için defter hiç yazılmadı (1517 sabit ↔ 1611 defter ayrışmasının izi).
20 üyenin 19'u koşu 16–19 arasında doğdu, yalnız Norapat 4 Ekim'de.

## 7. Bulunamayan / ölçülmeyen
- Münih parçasının tek yönlü şerit taşması mı gövde kaydı mı olduğu.
- Norapat'ın 1923 gövdesini neyin kaydırdığı (Dvin hipotezi sınanmadı).
- 450 hatta `sol_taraf` taraması koştu (nokta yöntemi): güçlü ters YALNIZ at-cs (0'a 10). Zayıf
  adaylar (1'e 2 / 2'ye 3), defter üyesiyle: `d1923-ca-us-bati-2` (10) · `d1816-alm-ah-2` (6) ·
  `g4-bna-us-bati-2` (4) · `d1923-fr-ch-savoy-2` (2) · `d1890-de-lu-lorraine` (2). Gövde-alan
  sınaması kıvrımlı hatlarda tek yönlü şerit taşması yüzünden **güvenilmez** çıktı (de-at bile
  KARIŞIK) ⇒ bu beşi için hüküm YOK.
- Betikler LAB karalamasında: `d8_uye.py` · `d8_veri.py` · `d8_yaka.py` · `d8_ters.py` · `d8_son.py` ·
  `d8_son2.py` · `d8_alan.py`.
