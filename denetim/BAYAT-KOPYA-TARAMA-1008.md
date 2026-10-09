# BAYAT-KOPYA-TARAMA-1008 — not↔değer çelişkisi · kopya zincir · toplu-iniş gerilemesi

Oturum **BAYAT-KOPYA-TARAMA-1008** (UMIT, hazır kıta 0810 2234) · görev UMIT İRTİBAT · 9 Ekim 2026
Ağaç `C:\atlas-bayat` = `origin/makine/umit` **7f63bcd9** · `girdi.yukle()` 93 dosya, **4300** nokta.
Yalnız ölçüm + liste. Commit yok, stash yok. Tek veri önerisi UYGULANMAMIŞ diff olarak duruyor.

---

## 0. MÜKERRER KAPISI — B sınıfının çoğu ZATEN ölçülmüş
- **`denetim/UMIT-W6-DALGA4-1006.md`** (5 Ekim): 82 kopya beyanı, **12 bayat**. Gümrü · Eçmiyadzin ·
  Arpaçay · Digor · Iğdır (Revan'dan) ile Kliçatak · Norapat · Küçükperveli · Beri (zincirleme) orada
  adıyla geçiyor.
- **`denetim/ZINCIR-KAYNAGI-VERI-1006{,b,c}.diff`**: bu kopyalara makine-okunur `zincir_kaynagi:` beyanı
  ekleyen diff'ler. `denetle.py`deki kapı (`zincir_kaynagi_denetimi`, satır 5946) **var ama boş
  koşuyor**: *"0 kayıt beyanlı — serbest metin kopyaları bu kapıya GÖRÜNMEZ"* ⇒ diff'ler bu tabanda
  **İNMEMİŞ**.
- **`denetim/EEK-DOGU-1008.md`** (bugün): 1468/1469 karakoyunlu adası (Eçmiyadzin dâhil).
- Görevin dışladığı **ARTUKLU · DIVRIGI · HAYALET** diff'lerinin noktaları (Harput, Çemişgezek, Palu,
  Siverek, Divriği, Arapkir, Hısn-ı Mansûr, Behisni, Kâhta, Sohum…) ölçüldü ama **dokunulmadı**.

⇒ B için yeni diff YAZILMADI. Bu raporun B'ye kattığı üç şey var: ① W6'nın "ayrı sınıf" deyip
tazeliğini ölçmediği **"gün komşudan" dönem atıfları** ② yorum bloğu atıfları ③ W6'da olmayan
**Ferecik** (§3.3).

---

## 1. ÖNGÖRÜ (ölçümden önce yazıldı) ↔ ÖLÇÜM
| | Öngörü | Ölçüm | |
|---|---|---|---|
| A ham aday cümle | 40-80 | **45** (kimlik + olumsuz fiil aynı yan cümlede) · yalnız kaldırma fiili: **21** | ✓ |
| A gerçek çelişki | 3-8 | **1** kimlik (Çemişgezek, bilinen) + **1** tarih (**Karahisâr-ı Sâhib, YENİ**) | ✗ fazla tahmin |
| B atıf sayısı | 30-80 | **124** "gün komşudan" + **22** güçlü kayıt/yorum atfı (+ zayıf "ile aynı") | ✗ az tahmin |
| B bayat | 3-10 (DIVRIGI hariç) | "gün komşudan": **0/124** · kayıt atfı: **13** farklı, hepsi W6/DIVRIGI sahasında · YENİ: **1** (Ferecik) | ✓ |
| C a760c8b6 dışında | 0-3 vaka | toplu inişte **3 ezme olayı** (aaadabf5 · d041a080 · a760c8b6) · bugün canlı kalan YENİ: **0** | ✓ |

Öngörünün yanlış çıkan kısmı A'dır: notların çoğu "X kaldırıldı" derken **bir pencereyi** kastediyor
(*"s:rusya 1771-1774 kaldırıldı"*, *"1548-1639 safevi ADACIĞI kaldırıldı"*). Kimlik başka pencerede
yaşamaya devam ediyor. Bu ayrım yapılınca 21 adaydan 1'i kalıyor.

---

## 2. A — NOT↔DEĞER ÇELİŞKİSİ

### 2.1 Veriden çıkarılan desenler (4300 kayıt · 4989 metin alanı: not/neden/kaynak + dönem kaynak/not)
```
değil (3 yazımla) 449 · düzeltildi 110 · yerine 50 · kaldırıldı 29 · yanlış 28 · silindi 6 · taşınmadı 6 ·
çıkarıldı 1 · geçersiz 1
⚠️ 'deği̇l' 188 kez U+0307 BİRLEŞİK NOKTA taşıyor ("İ".lower() tuzağı, D215) — normalleştirmeden sayılmaz
```
"değil" ve "yanlış" kimlik çelişkisi için kullanılamıyor. İkisi de çoğunlukla karşıtlık kuruyor
(*"Vattâsî/merini DEĞİL"*, *"Katar değil, LAHSÂ seferi"*). Kaldırma fiilleri (kaldırıldı/çıkarıldı/
silindi/düşürüldü) kesin iddiadır. Kapı yalnız onlarla kuruldu.

### 2.2 Kimlik iddiası — 21 ham → 1
| Kayıt | dosya:alan | İddia | Değer | Hüküm |
|---|---|---|---|---|
| **Çemişgezek** | yerlesimler.js · `not` | "`artuklu` TAMAMEN KALDIRILDI" | `s:` artuklu 1281→1465 | 🔴 ÇELİŞKİ — **ARTUKLU diff'inin sahası, dokunulmadı** |

Elenen 20'nin hepsi elle okundu:
- Kırım 5 (Gözleve · Or Kapı · Akmescid · Karasubazar · Eski Kırım) — "s:rusya **1771-1774** kaldırıldı", s:rusya 1783'ten.
- Venedik/Milano 5 (Verona · Padova · Brescia · Bergamo · Parma) — "**1395 öncesi** … hayalet milanoduka SİLİNDİ", s: 1395-05-11'den.
- Çaldıran · Başkale · Şeyhrumi — "**1548-1639** safevi ADACIĞI kaldırıldı", s: safevi 1502→1548-08-24 (uca 236 gün temas).
- Hopa — "1878-1915 rusya penceresi SİLİNDİ", s: rusya 1915-02-23'ten.
- Kalan 6: karşıtlık/başka dönem.

### 2.3 BEYANLI "yanlış" — çelişki DEĞİL, açık borç (bilgi)
Not değeri yanlış ilan ediyor ama bunu bilerek bıraktığını da söylüyor. Kapı bunları saymamalı. Liste:
- **Palu** — "1353-1465 arası kimlik YANLIŞ olduğu BİLİNİYOR … kaynak tüketildi" (ARTUKLU sahası).
- **Çemişgezek** `akkoyunlu` 1420-1429 — "KISMEN YANLIŞ VE BİLEREK ÖYLE … KALEM AÇIK" (ARTUKLU sahası).
- **Königsberg** s[1].kaynak — "1281-1525 'almanya' da YANLIŞ (NDB: Ordensstaat) ama künyesi YOK, dokunulmadı".
- **Sivrihisar** `not` — "1300-1354 arası GERMİYAN DEĞİL … BU TUR yazılmadı". Sebep: Değişmez 2'de iki yeni açık kırılma doğardı.

### 2.4 Tarih iddiası (A2) — YENİ BULGU
| Kayıt | dosya:satır | İddia (`neden`) | Değer | Kaynak commit |
|---|---|---|---|---|
| **Karahisâr-ı Sâhib (Afyon)** | yerlesimler.js:1504 | "Kirilma **1341'den 1327'ye cekildi** … simdi 1327-1390 kesintisiz" | `sahibata 1281→1341` · `germiyan 1341→1390` | `3cf33e96` (29 Ağu) 1327 yaptı → **`17cd2f98`** (30 Eyl, YERLESIM-BIRLESTIR-0930 **OSC-2**) 1341'e geri aldı, `neden`e dokunmadı |

**Hüküm: DEĞER DOĞRU, NOT BAYAT.** TDV `sahib-ataogullari` gövdesi okundu (HTTP 200):
*"Nusretüddevle Ahmed bundan sonra Germiyanoğulları’na tâbi oldu"* (727/1327) — bu **tâbiliktir**.
*"742’den (1341) sonra öldüğü tahmin edilen Nusretüddevle Ahmed’in ardından … ilhak edildi"* — bu
**ilhaktır**, yıl düzeyinde ve en erken sınırdır. OSC-2 haklıydı. Notun "1327'ye çekildi" cümlesi
bugün okuyanı yanlış yönlendiriyor.
⇒ Diff: `BAYAT-KOPYA-1008-KOORD.diff` (§5).

Kapsam sınırı (**ölçülemedi**): tarih iddiası serbest metinde çok biçimli yazılıyor. Kalıpla
yakalanabilen iddia yalnız **3** ("X'ten Y'ye çekildi") + **2** ("yeni {f→t kimlik}" bloğu). Başka
biçimde yazılmış tarih iddiaları bu taramaya **görünmez**. "1 çelişki" bir alt sınırdır.

---

## 3. B — KOPYA ZİNCİR

### 3.1 Dönem düzeyi "gün komşudan: Y" — 124 atıf, **0 bayat**
Ölçüt: dönemin ucu (başlangıç/bitiş belirtilmişse o uç), Y'nin bugünkü sınır günlerinden biri mi.
Pencere uçları (1281-01-01 / 1923-10-29) muaf tutuldu. Sonuç **124/124 tutuyor**.
İlk koşuda 2 "tutmayan" çıktı: Bosna Dubiçası ← "Bosna Brod'u". Bunlar ad çözücünün çok kelimeli adı
yanlışlıkla Tuzla (Bosna)'ya bağlamasından doğdu. Çözücü düzeltildi; gerçek kaynak Bosna Brod'u
(Bosanski Brod) 1538/1718/1739 sınırlarını taşıyor.
⇒ §4'ün "komşu günü şartlı serbest" sınıfı bugün **taze**.

### 3.2 Kayıt/yorum düzeyi — 22 güçlü atıf, 13 sahip farkı
"zincir komşudan: Y", "Y'nin zinciri", "ankraj Y", "zincir Y'den alındı", "Y kaydından kopya/aynen"
ve yorum bloğu listesi (`// A · B → Y'nin zinciri`) tarandı. Olumsuz bağlamdakiler elendi
(*"Kotur'un zinciri … TUZAK ATLANDI"*).
| Kopya ← kaynak | Sahip farkı (gün) | Sahibi |
|---|---|---|
| Arpaçay · Digor · Iğdır ← Revan | 12/23 | **W6-DALGA4** (+ EEK-DOGU 1468/69). Farkın çoğu Osmanlı penceresi: kopya yalnız ~1508'e kadar (W6 §3) |
| Gümrü · Eçmiyadzin ← Revan | 5/21 | **W6-DALGA4**: 1917-11-07 `sovyet-rusya` · 1468/69 · 1635-36 Osmanlı · 1827 isg |
| Divriği · Arapkir · Hısn-ı Mansûr · Behisni · Kâhta ← Malatya (yorum, yerlesimler.js:2278) | 2-5 | **DIVRIGI** (pozitif sınav: bilinen vaka yorum bloğundan yakalandı) |
| Siverek ← Urfa (yorum, :2283) | 3/9 | ARTUKLU/DIVRIGI diff'lerinde |
| Bitlis ← Van · Ceylanpınar ← Mardin | 2-3 | Elendi: ankraj yalnız kaynaksız pencere için. Kaydın Osmanlı günü kendi kaynağından (Bitlis 1515 · Ceylanpınar 1516) |

**Kayıt düzeyi karşılaştırma kapı olamaz.** Serbest metin pencere söylemiyor; Arpaçay'ın "zincirin
birebir aynısı" cümlesi aslında 1281→~1508 içindir. Pencereyi yalnız `zincir_kaynagi: {pencere:…}`
taşır ⇒ B'nin kapısı mevcut `denetle.py` kapısıdır (§6).

### 3.3 YENİ — Ferecik (Feres) ← Gümülcine (zayıf atıf, W6'da yok)
- `yerlesimler.js` · `neden`: *"Gumulcine ile AYNI kusur ve ayni care. Garbi Trakya notu ayni."*
- Gümülcine `s: garbi-trakya 1913-08-31→1913-10-25` taşıyor. Kaynak: TDV `bati-trakya` (dönem kaynak
  alanında birebir), `d041a080` ile eklenmiş. **Ferecik taşımıyor**: `bulgaristan-kralligi
  1913-05-30→1920-05-27` kesintisiz. "Not aynı" iddiası değerle çelişiyor.
- Kaynak durumu **çelişkili, karar koordinatörde**:
  - TDV `bati-trakya`: Garbî Trakya hükümetinin *"sınırları doğuda Meriç nehri"*. Ferecik Meriç'in
    batı yakasında, yani bölge cümlesi kapsar. Ama **bölgeden şehre taşınan hüküm** (D208).
  - TDV `ferecik`: *"Balkan savaşları ve 1912-1919 Bulgar işgali"*. Ayrıca *"1919 Ekiminden 1920
    Mayısına kadar Ferecik müttefikler adına İtalyan askerlerince … işgal edildi"*. Bu, verideki
    1919-10 → 1920-05 `bulgaristan-kralligi` dilimiyle **ayrıca** çelişiyor (B dışı, yan bulgu).
- Zincirleme: **Távri** zincirini Ferecik'ten almış (W6-DALGA4 §2.2, `sinir_kuzey:13`, 11,6 km).
- Garbi-trakya bugün yalnız **1** kayıtta (Gümülcine). Dedeağaç · Sofulu · İskeçe de taşımıyor.
- Diff YAZILMADI: kasaba düzeyinde kaynak yok, iki TDV maddesi ayrı yön gösteriyor.

### 3.4 Yan gözlem (B dışı, kopya beyanı yok)
ek26 Gürcistan hattı: **Şavşat · Posof · Hanak · Hulo** `sovyet-rusya 1917-11-07→…` taşıyor. Kars
`transkafkasya 1917-11-07→1918-05-25` taşıyor. W6-DALGA1'in "11 nokta" sınıfı olması muhtemel.
Doğrulanmadı.

---

## 4. C — GERİLEME (toplu iniş eski hâli geri yazıyor)

### 4.1 Seçici commit MESAJI olamaz
`yerlesimler*.js`e dokunan **401** commit var. Mesajında merge/çakışma geçen **83**. Gerçek git merge
**1**. **a760c8b6'nın mesajı ("FAZ 1 TAMAM — enklav ihlali KAPANDI") ikisini de içermiyor.**
⇒ Seçici İÇERİKTİR: bir commit'in kayda eklediği dönem, daha önce BAŞKA bir commit'in o kayıttan
kaldırdığı dönemse aday sayılır.
İlk sürüm satır eşitliği arıyordu ve a760c8b6'yı **kaçırdı**. Sebep: geri yazılan satıra arada
`tbmm-turkiye` kuyruğu eklenmişti. Dönem düzeyine inince yakalandı.

### 4.2 Sonuç — 68 aday · 20 commit çifti · bugün CANLI 36 (kayıt×commit) · hepsi elle okundu
| Olay | Ezilen düzeltme | Kayıt | Bugün |
|---|---|---|---|
| **aaadabf5** 2 Eyl "137 YAMA INDI" | 87aea5ca HAYALET-RUSYA (1917 bölünmesi) | Kars · Ardahan · Revan · Gence · Kutaisi · Sohum · Soçi · Tuapse · Maykop · Derbend · İsmail (11) | a7bdd08c (3 Eyl) / 415d18ac (7 Eyl) / **52222fa3 (1 Eki)** onardı. Soçi · Tuapse · Maykop · Derbend **~1 ay** bayat kaldı. **Sohum onarılmadı** |
| **d041a080** 5 Eyl "MERGE INDI" | a7bdd08c Transkafkasya | Kars · Ardahan · Sohum | Kars/Ardahan 36 dk sonra a760c8b6 ile onarıldı. **Sohum onarılmadı** → `rusya 1810→1923` (HAYALET-KUNYE-1008 sahası) |
| **a760c8b6** 5 Eyl "FAZ 1 TAMAM" | d041a080 YER_YAMA_HARPUT | Harput · Çemişgezek · Palu | **CANLI** (ARTUKLU sahası) |

Bilerek geri alındığı için elenenler (gerekçe commit gövdesinde ya da kayıtta):
- 17cd2f98 Karahisâr (OSC-2, §2.4)
- 24fd1534 Diyarbakır (KRONO-2S-3, kaynağa çekildi)
- 1dd0ad7b Konya/Karaman/Niğde ("ilhak kendi maddesinde değil İKİ MADDE SONRA boyanıyordu"; 1468 YIL)
- b16f3f3e İber Birliği 8 nokta (ÇAPRAZ İBERYA D1-D11)
- Belgrad · Aden · Estergon · Helsinki · Trablus (Temmuz-Ağustos yeniden yapılandırmaları; dönemler tarihsel olarak doğru)
- Kars/Ardahan 1406→1408 (TEBRIZ-1388-KARAKOYUNLU-1006, kaynaklı)

⚠️ **"Sessiz geri alma" (not/neden/kaynak değişmeden zincirin eskiye dönmesi) ayırt edici DEĞİL**:
36 canlı adayın 31'i sessiz (metni değişen 5: aaadabf5 Sohum/Revan · d041a080 Sohum · Trablus ·
Diyarbakır). Sessizlerin arasında bilerek yapılanlar da var (Karahisâr, İberya, Konya…). C otomatik hüküm veremez; kapısı
**ad×commit LİSTESİ** olur (aracın `BILINEN_C` / `ELENEN_C`).

### 4.3 C2 — yama katlama kaybı (data/'dan silinen `yer_yama_*.js`)
3 commit (d1130fa9 · a760c8b6 · db23f90d), 15 dosya silme/taşıma. Yama×kayıt **24 satırda** yamanın
zinciri (yamanın taşıdığı alanlarda) katlamadan sonraki tabandan farklı. Ayrım:
- **Bugün hâlâ katlama hâlinde duran 9 satır**: Antep · Kilis · Payas · Humus (yalnız d/v alanı
  farkı) · Silopi · Sivrihisar (yalnız `tbmm-turkiye` kuyruğu) · Harput · Çemişgezek · Palu.
  ⇒ Yamadan farklı `s:` gövdesiyle duran **yalnız Harput üçlüsü** (ARTUKLU vakasının ta kendisi).
- **Kalan 15 satırda kayıt sonradan yeniden yazılmış**: Kars/Ardahan 1408 · Diyarbakır · İğneada · Vidin ·
  Suçava/Çernovitz · Antep/Kilis/Payas/Mersin 1919-21 işgal modeli (tbmm_24 yamasının `s:`i; aynı kayıtların p0037 d/v alanı ise katlamadaki gibi) · Nusaybin · Erzurum ·
  Çaçak/Kragujevac. Bugünkü değerleri yamaya da katlamaya da eşit değil, katlama kaybı sorusu bu
  kayıtlarda **kapanmış**.
Tek seferlik betikle ölçüldü, araca alınmadı.

---

## 5. DİFF — `denetim/BAYAT-KOPYA-1008-KOORD.diff` (UYGULANMADI)
- Tek kayıt: **Karahisâr-ı Sâhib (Afyon)**, `data/yerlesimler.js:1504`, **yalnız `neden` metni**.
  Hiçbir `s:/d:/v:` değişmiyor. Gün aralığı 1281-1923 içinde (konu 1327/1341).
- Bayat cümle "[TARİHÎ — 30 Eylül 2026'ya kadar geçerliydi] … cekilmisti" diye geçmiş zamana çevrildi.
  Ardına OSC-2 düzeltmesi ve iki TDV cümlesi birebir eklendi.
- Temel `origin/makine/umit` 7f63bcd9 · `git apply --check` ✓ · CR 0 · `node --check` ✓.
- `denetle.py` önce/sonra **satır kümesi aynı**, çıkış **2 → 2**. Tek ölçülemeyen soru Değişmez 8:
  `devletler_harita.js` bu ağaçta yok.
- İndiğinde araç `BILINEN_A2` girdisini **ÖLÜ İSTİSNA** basıp **çıkış 1** verir. Bu gerçek koşulda
  sınandı: diff uygulandı → çıkış 1, geri alındı. Liste aynı commit'te güncellenmeli (§3.4.2).

---

## 6. KAPI ÖNERİSİ (denetle.py'ye YAZILMADI) + prototip `denetim/ARAC-BAYAT-KOPYA-1008.py`
| Kol | Öneri | Gerekçe |
|---|---|---|
| **A + A2** | `denetle.py`ye "Ek denetim — not↔değer" eklensin. Kapı **LİSTE**dir (BILINEN_A/BILINEN_A2, ad×anahtar), sayı değil. YENİ ya da ÖLÜ → ihlal | Bugün **2** girdi, ikisi de bir diff'in sahasında. Yanlış pozitif 0 (21 ham → 1, elenenler elle okundu) |
| **B** | Kapı ZATEN VAR (`zincir_kaynagi`, 0 beyanla boş koşuyor) ⇒ önce **ZINCIR-KAYNAGI-VERI-1006{,b,c}.diff inmeli**. Prototipin B kolu yalnız "beyansız serbest-metin kopya" sayacı olarak kalsın (bilgi, çıkışı etkilemez) | Serbest metin pencere söylemiyor; tam zincir kıyası sahte fark üretir (§3.2) |
| **C** | Toplu iniş commit'inden (yama/merge/birleştir) sonra `--git <önceki-iniş>..HEAD` koşsun. Liste dışı canlı aday → dur | ⚠️ C **aralığa bağlı**: ezilen düzeltme aralıkta yoksa ezme görünmez (sınav C-). Tam geçmiş 20 sn sürüyor, her koşuda `tum` da mümkün |

**Sınav 14/14, iki yönde, 8'i GERÇEK veriyle** (`--sinav`):
- A+ ve A- sentetik: kaldırıldı + taşıyor / taşımıyor / yıl aralığı dışında.
- A2+ ve A2- sentetik.
- Gerçek: Çemişgezek bulunur · ARTUKLU `s:`'si bellekte uygulanınca Çemişgezek **susar** · Verona ve
  Çaldıran susar · Karahisâr bulunur.
- B: Kâhta←Malatya ayrışmış · Palu←Harput ayrışmamış.
- C: `d041a080^..a760c8b6` → Harput bulunur · yalnız `a760c8b6` → bulunmaz.

Bugünkü çıktı (`--git tum`): **YENİ 0 · bilinen A/A2 2 · C 401 commit / 68 aday / 36 canlı
(5 bilinen + 31 elenmiş) · çıkış 0**.
Çıkış kodları: **0** yeni yok · **1** yeni ya da ölü istisna · **2** ölçülemedi. Bilinen bulgu varken
çıktı "temiz" demez, "temiz DEĞİL, BEYANLI" der.

---

## 7. BULUNAMADI / ÖLÇÜLEMEDİ
- **A2 kapsamı**: kalıp dışı yazılmış tarih iddiaları ölçülemedi. 5 iddia yakalandı, gerçek evren
  bilinmiyor.
- **Yorum bloğu**: yalnız `→ Y'nin zinciri` listesi ve "zincir(i) Y ile/kaydıyla aynı/birebir"
  kalıbı tarandı (24 atıf). Başka anlatımlı yorum atıfları ölçülemedi.
- **Çözülemeyen ad 8** ("Dönem", "Kimlik", "Tirol", "Herbertshöhe" …). Çoğu ad değil, sözcük.
  Ölçüme etkisi yok sayıldı.
- **Ferecik**: kasaba düzeyinde 1913 kaynağı **bulunamadı**. TDV `ferecik` Garbî Trakya'yı anmıyor.
- **Revan'ın 1917-1923 dönemleri dönem düzeyinde KAYNAKSIZ**. Kaydın kaynağı `revan`. TDV `revan`
  gövdesi sırayı veriyor ("1917 Rus İhtilâli’yle … Revan Ermenistan’a katıldı" · "Gümrü Antlaşması …
  (2 Aralık 1920)"), 1918-05-28 gününü vermiyor. Kopyalar Revan'a eşitlenirse §4 "komşu günü" şartı
  (komşunun günü kendi kaynağına dayanmalı) 1917-11-07 ve 1918-05-28 için **sağlanmaz**. W6'nın
  diff'leri inerken bu not edilmeli.

## 8. Dosyalar (`C:\atlas-umit\denetim\`e kopyalandı, izlenmeyen)
- `denetim/BAYAT-KOPYA-TARAMA-1008.md` — bu rapor
- `denetim/BAYAT-KOPYA-1008-KOORD.diff` — Karahisâr notu (UYGULANMADI, koordinatör)
- `denetim/ARAC-BAYAT-KOPYA-1008.py` — prototip, `--sinav` 14/14
