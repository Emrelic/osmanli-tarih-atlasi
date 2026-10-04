# LAB-D8-KOR-KOK-1004 — Değişmez 8'in 78 tam kör hattı: kök neden

> Görev: YILDIRIM BAYEZIT, 4 Ekim 2026 (önceki: `LAB-D8-OLCULEMEYEN-1004`).
> Denetleyici: LAB IRTIBAT. **Yalnız ölçüm** — veriye ve `denetle.py`ye dokunulmadı.
> Ortam: `main` = `0e22a060`, `kodla.py coz-c` ile üretilmiş gövde (`devletler_harita.js`
> 2026-10-04 12:35 · `uret_petek 8b6aaea5`). `denetle._D8Govde`, `_d8_node`, `_d8_sahip`
> doğrudan çağrıldı; kutu ve gün seçimi `denetle.py:4275-4294`ün birebir kopyası.
> Betikler oturum karalama alanında: `d8_kok.py` · `d8_kok2.py` · `d8_kok3.py`.

## 0. Sınama yöntemi
Her (hat, gün) için o gün kutuda gövdesi bulunamayan taraf(lar) çıkarıldı (189 satır,
169 çift), sonra her satıra hipotezler **sırayla ve ayrı ayrı** uygulandı:
```
①  gövde HİÇ yok        — anahtar(taraf) gövde dizininde (584 anahtar) hiç geçmiyor
②  harita: eşleşmiyor   — gövde ham id altında var, anahtar altında yok
③  BOYA BORCU           — künyede boya_gerekli:true
④a o GÜN gövde yok      — gövde var, ama o günü kapsayan dönemi yok
④b dönem var, parça 0
④c gövde o gün VAR, ama hattın KUTUSUNDA yok
⑤  başka
```
**Çapraz sınama:** betik 169 çift buldu, `denetle.degismez8` 175 → fark **6 çift / 3 hat**,
ters yönde fark **0**. O 3 hattın sebebi ayrıca ölçüldü (⑤ aşağıda) ⇒ 78/78 açıklandı.

## 1. 🔴 SONUÇ — 78 tam kör hat, tek kök nedene göre
```
                                       78 hat    D/E/F (tavan sınıfı) 50    C 28
④c gövde var, KUTUDA yok (nokta uzak)    52                28                  24
①  gövde HİÇ yok                         16                12                   4
④a o GÜN gövde yok                        7                 7                   0
⑤  iki taraf AYNI boya anahtarına          3                 3                   0
②  harita: eşleşmiyor                      0                 0                   0
③  BOYA BORCU (boya_gerekli:true)          0                 0                   0
```
(4 hat iki sebepli: `g4-bna-rus-141` · `g4-bna-us-bati-1` · `g4-bna-us-bati-2` ·
`g4-bna-us-prairie` → ④a + ④c; tabloda ④a'ya sayıldı.)

### ⇒ Koordinatörün sorusu: "kaçı ③ (beyanlı borç), kaçı gerçek kusur?"
**③ = 0.** Kör hatların **hiçbiri** beyanlı boya borcundan gelmiyor; künyelerin 170'inde
`boya_gerekli:true` var ama kör hatlardaki tarafların hiçbirinde yok. ⇒ **Hiçbiri
tam inşa koşusuyla kendiliğinden kapanmaz.** 78'in 78'i bir veri/yöntem eksiğidir.

## 2. Kovalar — ne buldum

### ④c — 52 hat: gövde o gün var, sınıra ULAŞMIYOR
Tarafın o gün o kimlikte yerleşimi **var**, ama hatta en yakın noktası uzak:
```
"nokta YOK" (o gün hiç yerleşim)    0 satır
50–200 km                          61 satır · 31 hat   (ör. isvicre: hatta en yakın Zürih 86–156 km)
> 200 km                           77 satır · 44 hat   (ör. hollanda-guyanasi Paramaribo 362 km ·
                                                         cezayir-fransiz Gadames hattına 404–428 km ·
                                                         almanya Doğu Afrika hattına 1918'de 2648 km)
```
⇒ Petek motoru noktadan boyadığı için (`§2`) sınır şeridi komşunun peteğine emiliyor;
D hattının o tarafında gövde **çizilmiyor**. Kusur **nokta yoğunluğu** (`§6`), kod değil.
En sık taraflar: `hollanda-dogu-hint` 45 satır · `isvicre` 10 · `ingiliz-hindistani` 8 ·
`ingiltere` 8 · `abd` 7 · `cin-cumhuriyeti` 6 · `bulgaristan-prensligi` 6.

### ① — 16 hat: gövde HİÇ yok — 7 taraf, **yedisinin de yerleşimi 0**
| taraf | BOYALAR | künye | `s:`/`isg:` yerleşim |
|---|---|---|---|
| `guney-afrika-birligi` | 🔴 **yok** | 1910–1961 | 0 |
| `ingiliz-hondurasi` | 🔴 **yok** | 1862–1981 | 0 |
| `nikaragua-cumhuriyeti` | var | 1838–1945 | 0 |
| `honduras-cumhuriyeti` | var | 1838–1945 | 0 |
| `kosta-rika-cumhuriyeti` | var | 1838–1945 | 0 |
| `tunus-beyligi-fransiz` | var | 1881–1956 | 0 |
| `misir-kavalali` (`harita:kavalali`; `kavalali` BOYALAR'da var, künyesi yok) | var (anahtar) | 1805–1914 | 0 |

⇒ D hattı bu kimliklere sınır çiziyor ama atlas bu kimliklere **tek bir yerleşim
vermemiş** ⇒ gövdeleri yok ⇒ hattın o yakası tanımsız. İkisi (`guney-afrika-birligi`,
`ingiliz-hondurasi`) ayrıca boyasız ve `boya_gerekli` beyanı yok — §1.5'in "renksiz
künye" kovalarından birine düşüyor olmalı (hangisine, **ölçülmedi**).

### ④a — 7 hat: gövde var, o GÜNÜ kapsayan dönemi yok
```
bogdan                  hat günleri 1812-06-23 · 1856-04-26/27 · 1859-01-23
                        gövde dönemi yalnız 1448-01-01→1456-06-01 (künye 1359–1859)
ingiliz-kuzey-amerika   hat günleri 1867-10-17/18 · 1870-07-14 · 1871-07-19
                        en yakın gövde dönemi 1864-01-01→1867-07-01 (künye 1763–1923)
romanya                 1859-01-24 · en yakın gövde 1878-07-13→1881-03-26
```
⇒ D hattının penceresi ile o kimliğin boyalı dönemi örtüşmüyor (künye o tarihi kapsasa
bile). `bogdan`ın 1456'dan sonra hiç gövdesinin olmaması, Boğdan'ın 1456 sonrası
`v:` (tâbi) olarak çizildiğini düşündürüyor — **ölçülmedi**, yön göstergesi.

### ⑤ — 3 hat: iki taraf AYNI boya anahtarına eşleniyor
```
d1923-kenya-tanganyika                          ingiliz-kenya-kolonisi    · ingiliz-tanganika-mandasi → ingiltere · ingiltere
d1923-becuanaland-guneybati-afrika-caprivi       ingiliz-becuanaland       · guneybati-afrika-mandasi → ingiltere · ingiltere
d1923-guneybati-afrika-kuzey-rodezya-caprivi-dogu guneybati-afrika-mandasi · ingiliz-kuzey-rodezya    → ingiltere · ingiltere
```
`denetle.py:4299-4302`: `if esit(gid, sol): sol … elif esit(gid, sag): sag` ⇒ aynı anahtar
her parçayı SOL'a yazar, SAĞ hep boş ⇒ `olculemeyen`. Bütün D kayıtlarında bu durumdaki
hat sayısı **3** (450 içinde). ⇒ Bu hatlar Değişmez 8'in tanımı gereği **sorulamaz**
(iki yakası haritada aynı renk); ama bugün sessizce "ölçülemeyen"e düşüyorlar, ayrı bir
sebep olarak sayılmıyorlar.

### ② harita: eşleşmiyor — 0
`anahtar()` hem gövde id'sine hem tarafa aynı `harita:` eşlemesini uyguluyor ⇒ tek taraflı
eşleşmezlik oluşamıyor; eşleme kusuru yalnız ⑤ biçiminde (çakışma) görünüyor.

## 3. DEFTER — tarih tutarsızlığı ölçüldü
`denetim/DEGISMEZ-0086-defter.json`, tek commit `595e9947` (2026-09-27), `_NOT`:
"Yazıldığı gövde: 2026-09-25 20:55 · uret_petek c90fa6c8". `hatlar` 372 · `a` 1611 · `b` 83.
```
hatlar:  defter 372 · bugün ölçülen 372 · KESİŞİM 366 · yalnız defterde 6 · yalnız bugün 6
8a  a :  defter 1611 · bugün (evren kısıtsız) 1521 · ORTAK 1367 · yalnız defterde 244 · yalnız bugün 154
```
⇒ **Defterin iki alanı farklı tarihli DEĞİL** — ikisi de 25/27 Eylül gövdesinden.
"`hatlar` = 372 = bugün" bir **sayı tesadüfü**: üyelerin 6'sı takas olmuş. Önceki
raporumdaki "iki alan farklı tarihli olabilir" şüphem **yanlıştı**; doğrusu: defter
bütünüyle 27 Eylül'de, bugünle **sayıca aynı, üyece farklı**.
🔴 Ve `1611 → 1517`: 244 birim çıktı, 154 birim girdi. Net −90'ın arkasında **398 birimlik
üye hareketi** var. Defterden çıkan 244'ün kaçı gerçek düzelme, kaçı körleşme — çıkan
birimlerin hatlarının 1602/1611'i bugün **ölçülüyor** ⇒ körleşme en çok 9 birim, kalan
235 ölçülen hatlarda kaybolmuş (düzelme ya da motor değişimi; ayırt **edilmedi**).

## 4. Bulunamayan
- ④c'nin 52 hattında hangi noktanın eklenmesi gövdeyi sınıra ulaştırır — **ölçülmedi**
  (yerleşim yazımı LAB'ın işi değil).
- `guney-afrika-birligi`/`ingiliz-hondurasi`nın §1.5'teki hangi renksiz-künye kovasında
  olduğu — **ölçülmedi**.
- `bogdan` gövdesinin 1456 sonrası neden yok (`v:` katmanı mı) — **ölçülmedi**.
- Defterden çıkan 235 birimin düzelme/motor değişimi ayrımı — **ölçülmedi**.

---

## 🔴 ORTAM DÜZELTMESİ — 4 Ekim 2026, 13:04–13:12 (yeniden koşu)
**Bu raporun ilk sürümü YANLIŞ ORTAMI beyan ediyordu.** git reflog: 12:38:43'te commit
için `lab-odak-1003`e (65a887cc tabanlı, `main`in ~225 commit gerisinde) geçildi ve
ölçümler orada koştu. Gövde (`kodla.py coz-c`, gitignore'da) `0e22a060`ten üretilmişti,
ama `denetle.py` (449+/25− satır farklı), D hatlarını taşıyan 8 paket dosyası, 2 yerleşim
dosyası ve `devletler.js` ESKİ daldandı. Rapordaki "main 0e22a060" ibaresi o koşu için
doğru değildi.
**Yeniden koşu:** yerel `lab-1004` dalı = `0e22a060`; her betiğin çıktısının başına ve
sonuna `git rev-parse --short HEAD` basıldı (`HEAD=0e22a060 … HEAD_SONRA=0e22a060`).
**Sonuç: bu rapordaki bütün sayılar temiz ağaçta BİREBİR aynı çıktı.** Tek fark:
`d8_235b` yerleşim dizini "yeni 2" → "yeni 4", değişen/yeni koordinatlı 130 → 132;
uzaklık dağılımları değişmedi. Bağımsız doğrulama: UMIT kendi makinesinde `origin/main`e
rebase edilmiş ağaçta 78/19/175/50'yi aynı ölçtü (koordinatör bildirimi).

---

## 🔴 DÜZELTME 2 — `v:` kolu (KASA itirazı, 4 Ekim) · ayrıntı `LAB-D8-V-KOLU-1004`
§2 ①'deki "yedisinin de yerleşimi 0" sayımı yalnız `s:`/`isg:` kollarını saydı; `v:`
sayılmadı. `tunus-beyligi-fransiz` **35**, `misir-kavalali` **171** `v:` dönemi taşıyor.
D8 `v:`'yi tâbinin kimliğiyle değil toplu `OSM-TABI` olarak okuyor (`denetle.py:4298-4304`,
`:4373-4383`) ⇒ bu yakalar **yapısal olarak** kör. Yeni sınıflama (78 hat):
`④c 52 · ① 12 · ⑥ v:-boyalı taraf 6 · ④a 5 · ⑤ 3` (D/E/F: 28 · 9 · 5 · 5 · 3).
`bogdan`ın ④a'sı da ⑥'ya geçti (1456 sonrası `v:` ile boyalı). ③ BOYA BORCU hâlâ **0**.
