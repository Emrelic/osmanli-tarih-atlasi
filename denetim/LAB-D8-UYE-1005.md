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
  adaylar (1'e 2 / 2'ye 3) o an hükümsüz bırakıldı — **§8.③'te ÇÖZÜLDÜ:** ca-us-bati-2 · bna-us-bati-2 ·
  fr-ch-savoy-2 · de-lu-lorraine DOĞRU (G yöntemi); alm-ah-2 ölçülemedi.
- Betikler LAB karalamasında: `d8_uye.py` · `d8_veri.py` · `d8_yaka.py` · `d8_ters.py` · `d8_son.py` ·
  `d8_son2.py` · `d8_alan.py`.

---

# 8. M-5828 DÖRT KALEM (5 Ekim akşamı) — yalnız ölçüm
> Ağaç: `origin/main 6bf85ad9` detached worktree + bugünkü gövde (`8b6aaea5`, 15:28). Her betik başta/sonda
> `HEAD=6bf85ad9`. `denetle.py`ye, tavana, deftere DOKUNULMADI; `--d8-defter-yaz` ÇALIŞTIRILMADI.
> Karşı-olgusal BELLEKTE kuruldu: `degismez8(Y, gv, hatlar=<kopya>)`, kopyada tek alan değişti.

## 8.① Ters satır — nerede, ne, niçin
```
data/d_sinirlar_avrupa_orta.js:40   {"id":"d1923-at-cs", … "sol_taraf":"avusturya-cumhuriyet", "hat":[[13.8157,48.7664], …
data/paket_28.js:1102               aynı kayıt, paketlenmiş kopya  ← denetle.py BUNU okur (paket_coz; çözülmüş kopya sayısı 1)
OLMASI GEREKEN                      "sol_taraf":"cekoslovakya"   (iki dosyada da — kaynak + paket)
```
Gerekçe (coğrafî, üç bağımsız tanık):
1. **Yön:** hat batıdan doğuya çizili, `[13.8157, 48.7664] → [15.1374, 48.993] → [16.945, 48.6042]`
   (Almanya–AT–ÇS üçlü noktasından Morava ağzına). Yönün SOLU = KUZEY. Kuzeyde Bohemya/Moravya = ÇS.
   Třeboň (49,004 K) ve Budweis (48,975 K) hattın KUZEYİnde, 14,6 ve 32,6 km — ÇS yakasında kalmalı, kalıyor.
2. **Kardeş kayıt:** `d1923-at-cs-morava` (`:44` / `paket_28.js:1106`) TAM at-cs'nin bittiği noktadan
   (`[16.945, 48.6042]`) başlıyor, kuzeyden güneye iniyor (Morava), solu = doğu = Slovakya ve
   `sol_taraf:"cekoslovakya"` diyor. Tek bir sınır zincirinin iki halkası iki ayrı sol yaka beyan ediyor.
3. **Ölçüm:** nokta yöntemi 0 doğru / 10 ters · derin sonda 6 / 71 · NE bugünkü ülke (G) L=CZE, R=AUT,
   Avusturya noktaları 0 L / 11 R, ÇS noktaları 8 L / 0 R. Gövde alanı: "AT" etiketli SOL şerit ÇS 4944 km² / AT 2642.
⚠️ Hattın kendisi (geometri) doğru; yalnız ETİKET ters. Hattı ters çevirmek de çözer ama iki kopyada
168 tepe ters yazılır — etiket değişimi tek alan, daha az riskli.

## 8.② Karşı-olgusal: `sol_taraf` düzeltilse 8a
```
                      BUGÜN (main 6bf85ad9)   at-cs sol=cekoslovakya   fark
8a evren içi                 1584                    1578               −6
(a) SAHTE DÜŞEN               16
(b) GERÇEK, GÖRÜNÜR OLAN      10
(c) NET                      1584 → 1578 (−6)   · at-cs DIŞINDA oynayan üye: 0
```
**(a) DÜŞEN 16** — hepsi şeridi DOLDURUYOR (km 24,8–25,0 ≈ şerit genişliği): kendi toprağı.
```
1920-07-16 & 1923-10-28 × sag  Freistadt (732 km²) · Gmünd (1968) · Linz (1188) · Viyana (1564)     — AT gövdesi AT yakasında
1920-07-16 & 1923-10-28 × sol  Bratislava (196) · Brno (2156) · Třeboň (1148) · Budweis (924)      — ÇS gövdesi ÇS yakasında
```
**(b) GİREN 10** — gerçek taşmalar, bugün GİZLİ:
```
1920-07-16 & 1923-10-28 × sol  Gmünd (Aşağı Avusturya)  AT→ÇS  24,9 km · 1020 km²   ← en büyüğü; şerit dolu
                          sol  Freistadt                AT→ÇS  16,1 km ·  400 km²
                          sol  Linz                     AT→ÇS  10,2 km ·  120 km²
                          sag  Brno                     ÇS→AT  10,3 km ·  132 km²
                          sag  Bratislava               ÇS→AT  12,5 km ·   64 km²
```
(Gmünd: kaydın kendi notu "Valtice ve Gmünd istasyon bölgesi fiilen 1920-07-31'de ÇS'ye geçti" diyor —
1020 km² o 15 günlük farkla açıklanmaz; noktasızlık mı gövde mi ÖLÇÜLMEDİ.)
⚠️ **Ayrıca, bugün `main`de (net sayının gizlediği):** defter 1584 ↔ ölçüm 1584 — ama **9 ÇIKAN, 9 GİREN**
(Avusturya taç yarısının `s:` günleri). Girenler: `d1919-at-cs-fiili-3|1919-01-01|sag|Brno` ·
`d1919-hu-cs-fiili-1|1919-07-25|sag|Brno` · `…|sag|Olomouc` · `…|sol|Fülek (Fiľakovo)` ·
`d1919-hu-cs-fiili-2|1919-07-25|sag|Olomouc` · `d1919-hu-cs-fiili-3|1919-07-25|sag|Olomouc` ·
`d1920-hu-ro-fiili|1920-03-31|sag|Lugos (Lugoj)` · `…|sol|Yanova (Ineu)` · `g3-bg-ro-dobruca-p4|1908-10-05|sol|Hacıoğlupazarcığı (Dobrich)`.
`denetle.py` bunu "1584 ≤ 1585 ✓" diye geçer.

## 8.③ Bütün hatların `sol_taraf`ı — üç yöntem
| yöntem | ne sorar | gövde? |
|---|---|---|
| **N** nokta | tarafın noktaları hattın hangi yakasında (≤150 km, uçtan öte sayılmaz) | hayır |
| **S** sonda | 15/30/45 km derinlikte, katlanmamış sondada hangi gövde; FARK ölçütü (sol tarafın solda payı − sağda payı) | evet |
| **G** coğrafî | 3/6 km sondalar NE 10m'de hangi BUGÜNKÜ ülkede (L, R); tarafın noktaları — mesafe sınırsız — L mi R mi | hayır |

```
                     450 iki taraflı hat          EVREN 372 (8a'nın ölçtüğü)
G DOĞRU                      380                           336   (1453 üye)
G DOĞRU (tek taraf)           28                            12   (57)
G ÖLÇÜLEMEDİ                  34                            20   (42)  — bugünkü sınır ayırt etmiyor / taraf eşlenemedi
G ÇELİŞKİ                      3                             2   (14)
G TERS                         3                             2   (18)
G TERS (tek taraf)             2                             0
```
**TERS — evrende:**
1. `d1923-at-cs` — N, S, G üçü de TERS. **Kesin.** (§8.①)
2. `d1923-necid-kuveyt-tarafsiz-bati` — **etiket ters değil, ETİKET YOK:** kayıtta `sol_taraf: null`
   ("yakalardan biri tek devlet değil": doğu yaka Tarafsız Bölge). `denetle.py:4713`
   `sol = r.get("sol_taraf") or r["taraflar"][0]` ⇒ ilk taraf (`suud-ucuncu`) SOL varsayılıyor. Hat
   kuzeyden güney-güneydoğuya iner, solu = doğu = Tarafsız Bölge/Kuveyt yönü; G: L=KWT, R=SAU,
   Necid noktaları 0 L / 20 R ⇒ varsayım YANLIŞ. Defterdeki 2 üyesi (`1922-12-02|sol|Kuveyt` ·
   `1923-10-28|sol|Kuveyt`) at-cs ile aynı yapıda. **Bu bir veri değil KOD sınıfıdır** (senin dosyan):
   boş `sol_taraf` sessizce yazı-tura olmamalı; ölçülemedi kovasına ADIYLA düşmeli.
   `sol_taraf` BOŞ hat: **6** (450'de) · evrende **3**: tarafsiz-bati (G TERS, 2 üye) ·
   `d1923-ca-us-bati-1` (G ölçülemedi, 2 üye) · `d1923-necid-kuveyt-tarafsiz-guney-C` (ölçülemedi, 0 üye).
**TERS — evren dışı (8a bugün ölçmüyor, ölçmeye başladığı gün yanlış ölçer):**
`d1923-ir-hind-BILINMIYOR` (sol_taraf BOŞ; varsayılan `kacar` ama L=PAK, Kaçar 0 L / 107 R) ·
`d1923-becuanaland-guney-afrika` (tek taraf: Becuanaland 37 L / 12 R, L=ZAF) ·
`d1923-guneyrodezya-guney-afrika` (tek taraf: G. Rodezya 8 L / 37 R, L=ZWE). İkincisi ve üçüncüsü
"tek taraf" — öbür tarafın noktası yok; aday, kesin değil.
**ÇELİŞKİ — etiket DOĞRU, çelişkinin kaynağı VERİ:**
- `d1923-tr-sscb-ermenistan` (13 üye): L=ARM R=TUR, TBMM 0/247 doğru; ama `sovyet-rusya` noktalarının
  11'i bugünkü TÜRKİYE'de: **Artvin · Borçka · Şavşat · Saylıca · Posof · Hanak · Arpaçay (Akyaka) ·
  Küçükperveli · Digor · Iğdır · Beri** — hepsi `s: sovyet-rusya 1917-11-07 → 1921-10-13`, hat ise
  `f: 1921-03-16`. ⇒ 16 Mart–13 Ekim 1921 arasında Türkiye yakasında Sovyet noktası var; 8a'nın
  bu hattaki Arpaçay/Hanak/Beri/Digor üyeleri (25 km, 256–1156 km²) bu pencerenin ölçüsü.
  Hangi günün doğru olduğu KAYNAK işi (Moskova 16 Mart / Kars 13 Ekim) — ölçülmedi, hüküm yok.
- `d1917-filistin-misir-askeri-idare` (1 üye): Mısır 56 L → doğru; `ingiltere` eşlenemiyor (1 nokta).
**Önceki "zayıf ters" beşi çözüldü:** ca-us-bati-2 (USA 180/4 · CAN 14/109) · bna-us-bati-2 · fr-ch-savoy-2 ·
de-lu-lorraine → DOĞRU; alm-ah-2 ÖLÇÜLEMEDİ. altinkiyisi-fildisi (S TERS çıkmıştı) → G DOĞRU (L=GHA);
S'nin tersliği Fransız gövdesinin doğu yakaya taşmasıdır, etiket değil.
**Evrende ÖLÇÜLEMEDİ 20 (42 üye), adıyla:** d1923-ro-su (14) · d1816-alm-ah-2 (6) · d1923-jp-sscb-sahalin (4) ·
g2-jp-sscb-sahalin-gecici (4) · g2-jp-sscb-sahalin-rusya (4) · d1919-at-cs-fiili-3 (2) · d1923-ca-us-bati-1 (2) ·
d1923-es-ma-melilla (2) · d1923-necid-kuveyt-yay (2) · d1923-tr-sscb-nahcivan (2) · ve üyesiz 10:
londra-enez-midye · fi-su-fiili-2 · fr-es-llivia · iq-necd-tarafsiz-guney/kuzey · iq-necd-ukayr · it-at-yerde-1 ·
necid-kuveyt-tarafsiz-guney-C · sy-jo-1920 · tr-sy-bati. (Sebep: bugünkü sınır o hattı izlemiyor — tarihî/değişmiş hat.)

## 8.④ Sonora (ve Aşağı Kaliforniya) noktasızlığı — kaç VAR, kaç OLMALI
**VAR** (hattan uzaklık, o gün):
```
Gadsden 1854-06-30     ≤25 km  ABD 0 · MX 1    ≤50  ABD 2 · MX 1    ≤100  ABD 3 · MX 1    ≤200  ABD 4 · MX 2
   MX: El Paso del Norte 7 km · Arizpe 110 km          ABD: Tubac 30 · Yuma 47 · Tucson 96 · Santa Rita 114
Gadsden 1923-10-28     ≤25 km  ABD 1 · MX 2    ≤50  ABD 3 · MX 2    ≤100  ABD 4 · MX 2    ≤200  ABD 6 · MX 4
   MX: Sonoyta 3 · El Paso del Norte 7 · Arizpe 110 · Villa Ahumada 129
Kaliforniya 1848–1923  ≤25 km  ABD 1 · MX 0    ≤50  ABD 2 · MX 0    ≤100  ABD 2 · MX 0    ≤200  ABD 3 · MX 1
   MX: Misión San Vicente Ferrer 140 km — o kadar      ABD: San Diego 21 · Yuma 27 · Los Ángeles 199
```
Hattın 809 km'lik Gadsden kesiminde Meksika yakasının ilk 100 km'sinde **1 nokta** (1854) / **2** (1923);
208 km'lik Kaliforniya kesiminde **0**.
**OLMALI — geometrik ALT SINIR** (yöntem: Meksika yakasında, karada, hat boyunca 5 km arayla 5–25 km
derinlikte sonda; sondanın en yakın noktası Meksika noktası olmalı; adaylar hattan 10 km içeride, açgözlü
en az örtü):
```
Gadsden 1854-06-30   730 sondanın 469'u bugün ABD noktasına daha yakın  ⇒ en az 5 yeni MX noktası
Gadsden 1923-10-28   731 sondanın 428'i                                 ⇒ en az 6
Kaliforniya (iki gün) 205 sondanın 205'i                                ⇒ en az 3
                                                    TOPLAM ALT SINIR 8 (1854) – 9 (1923) nokta (5|6 + 3; ortak aday yok)
```
Adayların düştüğü boylamlar (Gadsden): −114,4 (Colorado ağzı) · −112,7 · −111,1 (iki kez) · −109,8 · −109,5 ·
−108,9 (iki kez); (Kaliforniya): −117,1 · −116,7 · −115,2 — hepsi hattın ~10 km güneyi.
⚠️ Bu bir ALT SINIRdır ve geometriktir: motor kıyı/nehir/bölge adımları da yapar; gerçek nokta KAYNAKLI
bir yerleşim olmalı ve aday konumuna tam düşmez ⇒ gerçek ihtiyaç bu sayının ÜSTÜNDEDİR. Ad ve kaynak
bu raporun işi değil (§4 kaynak kuralı). Ayrıca üç ABD noktasına (Tubac · Santa Rita · Yuma) DOKUNULMAMALI.

## 8.⑤ Bulunamayan
- Gmünd 1020 km² gerçek taşmasının sebebi (noktasızlık mı gövde mi).
- `ermenistan` hattında 1921 sahiplik günlerinin hangisinin doğru olduğu — kaynak işi.
- Evrende 20 hat G ile ölçülemedi (adıyla yukarıda).
- Betikler: `d8_k2.py` (karşı-olgusal) · `d8_yaka_tum3.py` (N+S) · `d8_cog.py` (G) · `d8_sonora.py`.

---

# 9. M-5832 — kendi açtığım ölçülemedi kovalarını kapatmak
> Koordinatör (a)+(b)'yi uyguladı (`40b27db5`): at-cs öngörüsü birebir tuttu (1578 · 16 · 10).
> 🔴 **Çürüyen sayım:** "boş `sol_taraf` 6 hat, evrende 3" demiştim — kapı 6'sını da attı. Benim
> "evren"im defterin `hatlar` listesiydi (372); kapınınki döngüye giren her iki taraflı hat (450).
> ⇒ Bu bölümden itibaren her sayının yanında **EVREN** adıyla yazılır.

## 9.0 ÖNGÖRÜ — ölçümden ÖNCE yazıldı ve commitlendi
- **① 6 atlanan hat** (evren: kapının `atlanan` listesi, 6): yakası belirlenebilen **4** (ca-us-bati-1 ·
  ir-hind-BILINMIYOR · us-cu-guantanamo-2 · g4-bna-us-bati-1), sol/sağ ikiliğine YAPISAL OLARAK UYMAYAN
  **2** (necid-kuveyt-tarafsiz-bati · necid-kuveyt-tarafsiz-guney-C — yakalardan biri üçüncü alan).
  Mekanizma: ilk dördünde iki yaka iki ayrı tek devlet; kuveyt ikilisinde bir yaka Tarafsız Bölge.
- **② 20 G-ölçülemeyen hat** (evren: §8.③'ün G ÖLÇÜLEMEDİ kovası, evrende 20): (α) başka yöntemle
  ölçülebilir **8** · (β) G ile yapısal olarak ölçülemez **12**. Mekanizma: β = hat bugün hiçbir ülke
  sınırına denk gelmiyor (iki yaka aynı bugünkü ülke) ya da hat su üstünde/çok kısa.
- **③** becuanaland-guney-afrika ve guneyrodezya-guney-afrika: **ikisi de TERS** (G tek taraf
  sinyali 37/12 ve 8/37 yönünde).

## 9.1 Ölçüm ortamı
`origin/main 3e5fcdae` (40b27db5 + iki tahta commit'i) detached + gövde `8b6aaea5`. Her betik başta/sonda
`HEAD=3e5fcdae`. 8a bugün **1574** (tavan 1574) — evren: defterin `hatlar`ı (372). Yaka yöntemleri:
**N** nokta · **S** sonda · **G** NE bugünkü ülke (§8.③) + bu turda: **G-ince** (0,5/1/2 km sonda, kısa hatlar
için) · **YÖN** (baş→son vektörü; SOL = yönün solu, kapalı halkada işaretli alan) · **HALEF** (sömürge künyesi →
bugünkü halef ülke: GHA = Altın Kıyısı, SLE = Siyera Leone, ZWE = G. Rodezya, GNB = Portekiz Ginesi, SEN/GIN/CIV
= Fransız Batı Afrikası, MOZ = Mozambik). Betikler: `d8_kapat.py` · `d8_kapat2.py` · `d8_k3.py` · `d8_cog_ham.py`.

## 9.2 ① ATLANAN 6 (evren: kapının `atlanan` listesi, 6)
| hat | yön (baş → son) | SOL yaka (bugün) | SAĞ yaka | taraf noktaları | hüküm: `sol_taraf` |
|---|---|---|---|---|---|
| `d1923-ca-us-bati-1` | 49°K boyunca BATIYA, Point Roberts yarımadası (4 km) | Boundary Bay / Point Roberts (DENİZ 4) — güney | CAN 4 — kuzey | Kanada: Fort Langley 39 km SAĞ | **`abd`** — Point Roberts 49°K'nin güneyi, ABD |
| `g4-bna-us-bati-1` | aynı geometri (1846–1871) | aynı | aynı | İKA: Fort Langley SAĞ | **`abd`** |
| `d1923-ir-hind-BILINMIYOR` | KUZEYDEN GÜNEYE `[60.84,29.86]→[61.59,25.20]` | PAK 733 / 743 — doğu | IRN 730 / 732 — batı | Kaçar 107/108 IRN, yakın olanlar SAĞ (Hâş, Bempûr) | **`ingiliz-hindistani`** (evren dışı; kayıt "bugünkü çizgi vekil OLAMAZ" diyor — yaka bundan etkilenmez) |
| `d1923-us-cu-guantanamo-2` | KKB'ye `[-75.095,19.897]→[-75.137,19.972]` (12,7 km, 3 tepe) | USG 3 (ABD deniz üssü) + deniz 2 — GB | CUB 6 + deniz 6 — KD | Küba: Santiago 72, Baracoa 75 km SAĞ | **`abd`** (üs, KD çit hattının GB'sinde) — kısa hat, sonda az |
| `d1923-necid-kuveyt-tarafsiz-bati` | KUZEYDEN GGD'ye `[47.47,29.00]→[47.71,28.52]` | **Tarafsız Bölge** (bugün KWT 53 — 1969 sonrası taksim) — doğu | Necid (SAU 58) — batı | Necid 20 SAU | 🔴 **UYMUYOR** — yakalardan biri ÜÇÜNCÜ ALAN (ortak hak). Kaydın notu da böyle. |
| `d1923-necid-kuveyt-tarafsiz-guney-C` | DGD'ye `[47.71,28.52]→[48.60,28.23]` | **Tarafsız Bölge** (kuzey) | Necid (güney) | — | 🔴 **UYMUYOR** — aynı yapı. (Kategori C.) |

**Öngörü TUTTU: 4 yaka / 2 yapısal uymaz.** Tarafsız bölge ikilisi için yaka UYDURULMADI.
📌 Neden zorla `kuveyt` yazmak yanlış olurdu — ÖLÇÜLDÜ: motor 1922-12-02'de Necid–Kuveyt Tarafsız Bölgesi'nin
içini (`48.15, 28.55`) **`kuveyt` olarak boyuyor**. `sol=kuveyt` yazılırsa 8a motorun seçimini ölçer, tarihi
değil — at-cs'deki gibi "kendi toprağı" üyesi üretir. Irak–Necid Tarafsız Bölgesi'nin içi (`45.6, 29.05`) ise
o gün **boş** (hiçbir gövde yok).
🔴 **Ve aynı yapı ETİKETLİ üç hatta daha var** (sol_taraf DOLU olduğu için kapı onları ölçüyor):
```
d1923-necid-kuveyt-yay          sol=kuveyt (kuzey ✓) · SAĞ = Tarafsız Bölge, kayıt sag=suud diyor  · defterde 2 üye: sag|Kuveyt ×2
d1923-iq-necd-tarafsiz-kuzey    sol=irak (kuzey ✓)   · SAĞ = Irak–Necid Tarafsız Bölgesi           · 0 üye
d1923-iq-necd-tarafsiz-guney    sol=suud (güney ✓)   · SAĞ = Irak–Necid Tarafsız Bölgesi           · 0 üye
```
`necid-kuveyt-yay`ın 2 üyesi = motorun `kuveyt` diye boyadığı tarafsız bölgenin "Necid yakasında Kuveyt"
sayılması ⇒ at-cs sınıfı sahte üye. Kayıtların kendi notları ("Güney yakası Necid DEĞİL, Tarafsız Bölge")
bunu zaten söylüyor; kod okumuyor.

## 9.3 ② G-ÖLÇÜLEMEYEN 20 (evren: §8.③ G ÖLÇÜLEMEDİ kovası, defter evreninde 20)
**(β) G ile YAPISAL olarak ölçülemez — 11** (hat bugün bir ülke sınırı değil ⇒ iki yaka AYNI bugünkü ülke;
"bugünkü sınıra ≤3 km tepe" ölçüsüyle):
| hat | bugün sınıra yakın tepe | iki yaka bugün | niçin yapısal | başka yöntemle yaka |
|---|---|---|---|---|
| `d1923-ro-su` | 92/395 | UKR+MDA / MDA+UKR | Dinyester bugün Moldova'nın (Transdinyester) İÇİNDEN akıyor | N DOĞRU (Romen 15 SAĞ, Sovyet 18 SOL) · S DOĞRU · YÖN GD ⇒ sol=KD ✓ **DOĞRU** |
| `d1923-jp-sscb-sahalin` + `-gecici` + `-rusya` (3) | 0/2 | RUS / RUS | 50°K paraleli; Sahalin 1945'ten beri tümüyle Rusya | N DOĞRU (Japon 4 SAĞ) · S DOĞRU · YÖN B→D ⇒ sol=kuzey ✓ **DOĞRU** |
| `d1913-londra-enez-midye` | 1/2 | TUR / TUR | Enez–Midye hattı bugün Türkiye'nin içi | N DOĞRU (Bulgar 42 SOL) · S DOĞRU · YÖN KD ⇒ sol=KB ✓ **DOĞRU** |
| `d1923-iq-necd-ukayr` | 3/7 | SAU+IRQ / IRQ+SAU | 1922 Ukayr hattı bugünkü sınırla örtüşmüyor | N (Irak 8 SAĞ / 1 SOL, Necid 3 SOL) · YÖN KB ⇒ sol=GB ✓ **DOĞRU** |
| `d1923-tr-sy-bati` | 1/2 | TUR / TUR | 1921 Ankara hattı; Hatay 1939'dan beri Türkiye | N DOĞRU (TBMM 27 SOL) · S DOĞRU · YÖN D ⇒ sol=kuzey ✓ **DOĞRU** |
| `d1923-necid-kuveyt-yay` | 1/17 | KWT / KWT | tarafsız bölgenin 1969 taksimi | **UYMUYOR** (§9.2) |
| `d1923-necid-kuveyt-tarafsiz-guney-C` | 1/4 | SAU / SAU | aynı | **UYMUYOR** (§9.2) |
| `d1923-iq-necd-tarafsiz-guney` | 2/3 | SAU / SAU | Irak–Necid tarafsız bölgesi 1981'de taksim edildi | **UYMUYOR** (§9.2) |
| `d1923-iq-necd-tarafsiz-kuzey` | 2/3 | IRQ / IRQ | aynı | **UYMUYOR** (§9.2) |

**(α) G'nin çözünürlüğü yetmedi, yapısal değil — 9** (hat bugünkü sınırda; kısa ya da yaka karışık):
| hat | G niçin düştü | başka yöntem | hüküm |
|---|---|---|---|
| 🔴 `d1816-alm-ah-2` (6 üye) | 4,1 km; 3/6 km sondalar katlandı | **G-ince:** SOL 19/19 DEU · SAĞ 60/60 AUT · YÖN güneye ⇒ sol=DOĞU=Bavyera · Habsburg noktaları (Bregenz 40, Feldkirch 42 km) SAĞ | **TERS** — kayıt `habsburg`, olması gereken **`almanya`** (kardeşleri alm-ah-3 ve -4 `almanya` diyor) |
| `d1919-at-cs-fiili-3` | 3,9 km; sol yaka CZE 1 / SVK 1 ⇒ pay < 0,6 | YÖN GD ⇒ sol=KD; SAĞ AUT 2 | **DOĞRU** (`cekoslovakya`) |
| `d1923-ca-us-bati-1` | sol yaka deniz | §9.2 | yaka **`abd`** (etiket boş) |
| `d1923-es-ma-melilla` | 11 km, sağ yakada 2 sonda | YÖN KB ⇒ sol=GB; SOL MAR 9 · SAĞ ESP 2 · Melilla 2 km SAĞ | **DOĞRU** (`fas`) |
| `d1923-tr-sscb-nahcivan` | 13 km, üç ülke kavşağı (AZE/IRN/ARM) | YÖN güneye ⇒ sol=doğu=Nahçıvan; N DOĞRU (Şerur 16 km SOL) | **DOĞRU** (`sovyet-rusya`) |
| `d1918-fi-su-fiili-2` | 7 km, sol yakada 1 sonda | YÖN GB ⇒ sol=GD; SOL RUS 1 · SAĞ FIN 6 · Fin noktaları SAĞ | **DOĞRU** (`sovyet-rusya`) — zayıf (1 sonda) |
| `d1923-fr-es-llivia` | enklav halkası sonda derinliğinden küçük | halka SAAT YÖNÜNDE (işaretli alan −0,0014) ⇒ sol=DIŞ; iç bugün ESP | **DOĞRU** (`fransa-cumhuriyet` dışta) |
| `d1923-it-at-yerde-1` | 2,4 km; sol yaka ITA 1 / SVN 1 | YÖN batıya ⇒ sol=güney; SAĞ AUT 2 | **DOĞRU** (`italya`) |
| `d1923-sy-jo-1920` | 41/42 tepe sınırda ama sol yaka SYR 169 / JOR 138 ⇒ pay < 0,6 | N DOĞRU (Ürdün 2 SOL, Suriye 12 SAĞ) · S DOĞRU · YÖN BGB ⇒ sol=GGD | **DOĞRU** (`urdun-emirligi`) |

**Öngörü (8 α / 12 β) KISMEN ÇÜRÜDÜ: 9 α / 11 β.** 20'nin hükmü: **14 DOĞRU · 1 TERS (alm-ah-2) · 1 etiket boş,
yaka `abd` (ca-us-bati-1) · 4 UYMUYOR (tarafsız bölgeler).**

### alm-ah-2 karşı-olgusalı (bellekte, `d8_k3.py`; evren: defter 372, bugün 1574)
```
(a) DÜŞEN 6   1816-05-01 & 1844-01-29 × sag: Bregenz 24,9 km/492 km² · Feldkirch 24,8/212 · Landeck 24,8/180
              hepsi km≈25 ⇒ Habsburg gövdesi Habsburg yakasında (kendi toprağı) — at-cs ile aynı sınıf
(b) GİREN 0
(c) NET 1574 → 1568 (−6) · başka hatta oynayan üye 0
```
`necid-kuveyt-yay` ölçülemedi'ye alınırsa: 2 üye düşer (hatlar birbirinden bağımsız — at-cs ve alm-ah-2
karşı-olgusallarında başka hiçbir hat oynamadı; bu aritmetik, ayrı koşulmadı) ⇒ ikisi birlikte 1574 → **1566**.

## 9.4 ③ becuanaland-guney-afrika · guneyrodezya-guney-afrika — İKİSİ DE DOĞRU, öngörü ÇÜRÜDÜ
```
becuanaland-guney-afrika   YÖN [29.35,−22.19] → [19.98,−24.75] BATIYA ⇒ sol = GÜNEY · SOL ZAF 1385 · SAĞ BWA 1403
                           sol_taraf = guney-afrika-birligi ⇒ DOĞRU
guneyrodezya-guney-afrika  YÖN [29.35,−22.19] → [31.29,−22.40] DOĞUYA ⇒ sol = KUZEY · SOL ZWE 201 · SAĞ ZAF 198
                           sol_taraf = ingiliz-guney-rodezya ⇒ DOĞRU
```
🔴 **§8.③'teki "TERS (tek taraf)" sinyalim bir ÖLÇÜM KUSURUYDU, geri çekiyorum.** `ingiliz-becuanaland` ve
`ingiliz-guney-rodezya`nın harita anahtarı `ingiltere`; G tarafı noktalarını anahtarla eşlediği için dünyadaki
BÜTÜN `ingiltere` noktalarını saydı (ZAF 37 · GBR 34 · NGA 22 …). `guney-afrika-birligi`nin o gün **0** noktası var.
İki hat da 8a'da **tam kör** (iki günü de kör defterde) ⇒ tavana etkisi yok.
**Bu kusurun öteki G hükümlerine sızıp sızmadığı ÖLÇÜLDÜ:** defter evreninde G DOĞRU 348 hattın 163'ünde bir tarafın
anahtarı paylaşımlı; 128'ini N ya da S de doğruluyor; **35'i G'ye tek başına dayanıyordu** (120 üye). 35'i
HAM künye kimliğiyle yeniden ölçüldü: 20 DOĞRU · 10 tek taraf DOĞRU · 5 taraf eşlenemedi (sömürge künyelerinin
kendi kimliğiyle noktası YOK — `fransiz-bati-afrika`, `ingiliz-altin-kiyisi`, `ingiliz-siyera-leon`,
`portekiz-gine`, `portekiz-mozambik`) ⇒ o 5'i HALEF ülkeyle: altinkiyisi L=GHA · fransiz-gine-sierra-leone L=SLE ·
guney-rodezya-mozambik L=ZWE · fransiz-gine-portekiz-gine L=GNB · portekiz-gine-senegal L=SEN — **5'i de DOĞRU.**
⇒ §8.③'ün evrendeki hükmü değişmedi; değişen yalnız evren dışı iki "ters adayı" (ikisi de DOĞRU).

## 9.5 Özet — `sol_taraf` defterinin bugünkü hâli (evren: iki taraflı 450 hat)
```
TERS (düzeltilmeli)        2   d1923-at-cs (UYGULANDI, 40b27db5) · d1816-alm-ah-2 (YENİ — habsburg → almanya)
BOŞ, yaka belirlendi       4   ca-us-bati-1 → abd · g4-bna-us-bati-1 → abd · ir-hind-BILINMIYOR → ingiliz-hindistani ·
                               us-cu-guantanamo-2 → abd
ÜÇÜNCÜ ALAN, uymaz         5   necid-kuveyt-tarafsiz-bati · necid-kuveyt-tarafsiz-guney-C (ikisi zaten atlanan) ·
                               necid-kuveyt-yay (2 üye) · iq-necd-tarafsiz-kuzey · iq-necd-tarafsiz-guney (0 üye)
```
## 9.6 Bulunamayan
- `guney-afrika-birligi`nin niçin noktasız olduğu (veri işi — ölçülmedi, yalnız gözlendi).
- `fi-su-fiili-2` ve `us-cu-guantanamo-2` hükümleri az sondaya dayanıyor (1 ve 3); yön ile tutarlı ama zayıf.
- Defter evreninde G ile hâlâ ölçülemeyen hat: 0 (20'nin 20'si başka yöntemle sınıflandı).
