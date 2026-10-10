# KASA-GOVDE-TANIK-TARAMA-1010 — "gövdesi tanıksız uzun dilim": kaynak cümlesi dilimin neresini tarihliyor?

Görev: YILDIRIM BAYEZIT (UZUN-DILIM kararı ④b, sıranın başı) · Araştırmacı: KASA · `data/` DONUK · salt okuma.
Çıkış noktası: UZUN-DILIM §1.4 — uzun dilimde `kaynak:` dolu olmak koruma sağlamadı (kontrol 5/6 YANLIŞ), çünkü
kaynak bir UCU tarihliyor, gövdeyi değil. Bu tarama "kaynak dolu mu" yerine "kaynak dilimin ne kadarını kapsıyor"
diye soruyor.

## 0. ÖNGÖRÜ ve ÖLÇÜT (ölçümden ÖNCE, 2026-10-10 — ayrı commit, sayım yapılmadan)

### 0.1 Tanımlar (kilitli)
- **Dilim, uzunluk L, kırpma:** UZUN-DILIM §0.1 ile aynı (`girdi.yukle`, `gun.gun`, `__BOSLUK__` hariç; `t` yoksa
  `UFUK[1]`).
- **Kaynak yılları Ykay:** dilimin `kaynak` metnindeki 3-4 haneli sayılar; yalnız **[f−5, t+5]** aralığına düşenler
  tutulur. (Hicrî yıl miladî aralığa denk düşerse yanlış eşleşebilir; beyanlı sınır. Parantezli miladî karşılık
  zaten metinde olduğundan etki küçük beklenir.)
- **Kapsama C:** Ykay'da en az 2 farklı yıl varsa `C = (max − min) / L` (0-1'e kırpılır); 1 yıl ya da hiç yıl
  yoksa `C = 0`. Kaynaksız dilimde `C = 0`.
- **Tanıksız gövde U (risk):** `U = L × (1 − C)` yıl.
- **Sınıflar:** `KAYNAKSIZ` · `GÖVDESİZ` (kaynaklı, C < 0,5) · `GÖVDELİ` (kaynaklı, C ≥ 0,5). Ayrıca kaynaklılar
  için uç etiketi: BAŞ (Ykay'da f ± 5 var) · SON (t ± 5 var) · İKİ UÇ · HİÇBİRİ. UFUK DAMGASI ucu kendiliğinden
  "kapsanmış" SAYILMAZ (kapı tarih değildir).
- **`kaynak:"bulunamadi"`** (koordinatör hükmü ⑤): KAYNAKSIZ sayılır.
- **Örneklem G (risk):** GÖVDESİZ sınıfından U'ya göre azalan ilk 40; UZUN-DILIM'de okunan 20 kontrol dilimi
  çıkarılır (tekrar okunmaz, hükümleri ayrıca raporlanır). Eşitlikte dosya+satır sırası.
- **Örneklem K (kontrol):** GÖVDELİ sınıfından, L ≥ G'nin en küçük L'sinin yarısı olanlar arasından
  `random.Random(1010)` ile 20.
- **YANLIŞ / TEMİZ / ÖLÇÜLEMEDİ:** UZUN-DILIM §0.1 ile aynı (şehir adlı tanık; iç ≥ 1 yıl başka `d:`, terk, VARLIK;
  uç ≥ 5 yıl sapma; `v:` farkı ve S sayılmaz; ÖLÇÜLEMEDİ paydaya girmez). Ek: **TEMİZ-ZAYIF** ayrı etiket — tanık
  sahibi doğruluyor ama kesintisizlik yalnız sessizlikten (UZUN-DILIM'in 19'u gibi). Oran iki türlü verilir:
  ZAYIF TEMİZ'e sayılarak ve ÖLÇÜLEMEDİ'ye sayılarak.
- Kaynak kuralı: İslâm dünyası TDV birincil; dışı akademik/ansiklopedik birincil; Vikipedi tanık sayılmaz.
- Napolyon İspanyası (koordinatör ③): bu taramada çıkan İspanyol dilimleri için şehir başına "doğrudan Fransa ilhakı
  (Katalonya 1812) ↔ Joseph Bonaparte krallığı" ayrımı aranır; ölçülemezse beyan.

### 0.2 Sayısal öngörüler (sayımdan önce)
- Kaynaklı 1.231 (− 6 `bulunamadi`) dilimin sınıfları: GÖVDELİ **%35 ± 15**, GÖVDESİZ **%65 ± 15**; GÖVDESİZ'in
  içinde hiç yıl taşımayan (`mali`, `sokoto` türü) **%10 ± 10**.
- L ≥ 200 yıllık kaynaklılarda GÖVDELİ payı daha düşük: **%20 ± 15**.
- Uç etiketi (kaynaklılar): BAŞ ağırlıklı — BAŞ-yalnız **%45 ± 15**, SON-yalnız **%20 ± 10**, İKİ UÇ **%25 ± 15**.
- G'nin U eşiği (40.'nın U'su): **250 ± 100 yıl**. G'de `osmanli` payı **≥ %30** (fetih yılını tarihleyen kaynak +
  1918/1923'e uzanan gövde); `ispanya` (UZUN-DILIM kontrolü dışındakiler) ikinci.
- **G YANLIŞ oranı** (ZAYIF TEMİZ'e sayılarak): **%40 ± 20**. **K YANLIŞ oranı:** **%15 ± 15**.
- Hipotez: G − K ≥ **20 puan** ⇒ "kapsama" ölçütü "kaynak dolu mu"dan iyi ayırıyor.
- Ege kutusu (enlem 35-41, boylam 23-28,5): bütün dilimler (kaynaksız dahil) U'ya göre sıralandığında ilk 500'de
  **10 ± 8** Ege dilimi; çoğu `osmanli` ya da `venedik`/`ceneviz`.

### 0.3 Yanlışlanma şartları
- G − K < 10 puan ⇒ kapsama ölçütü de ayırt etmiyor; risk = yalnız L kalır ve beyan edilir.
- K'da ölçülebilen < 8 ⇒ oran raporlanır, hüküm verilmez.
- G'nin YANLIŞ'larının ≥ %50'si kaynağın TARİHLEDİĞİ uçta çıkarsa (gövdede değil) ⇒ hipotezin mekanizması
  ("kaynak ucu belgeliyor, hata gövdede") yanlış.

## 1. ÖLÇÜM

### 1.0 🔴 ÖLÇÜT KUSURU ve SAPMA (önce bunu söylüyorum)
§0.1'de kilitlediğim C, kaynak metnindeki BÜTÜN 3-4 haneli sayıları yıl saydı ⇒ **yayın yılları** da girdi.
İspanya kaynağı: *"Jaime Vicens Vives (1952), Fernando el Católico … 1458–1478 — Merriman (1918), Vol. 2"* ⇒ 1478 ve
1918 aralığa düştü ⇒ **C = 0,99, sınıf GÖVDELİ**. Oysa kaynak yalnız 1479 birleşmesini tarihliyor; Tortosa ve
Zaragoza UZUN-DILIM'de YANLIŞ okunmuştu. Kilitli ölçüt bilinen yanlışları "gövdesi tanıklı" kontrol kovasına koydu.
⇒ **SAPMA (beyanlı):** C2 = aynı tanım, ama önünde hicrî yıl olmayan parantezli 4 haneli yıl (`(1952)`, `(1918)` —
yayın yılı) atılır; TDV kalıbı `649'da (1251)` korunur. Örneklemler **C2 ile çekildi**. Sapma ölçümden SONRA ama
okumadan ÖNCE yapıldı; tetikleyen şey veri değil, kilitli ölçütün bilinen iki yanlışı GÖVDELİ saymasıydı.
İki ölçütün sayıları yan yana:
```
                                  C (kilitli)          C2 (yayın yılı atılmış)
kaynaklı (bulunamadi hariç)        1.225                 1.225
GÖVDELİ (C ≥ 0,5)                    279 (%22,8)           221 (%18,0)
GÖVDESİZ                             946                 1.004
  içinde yılsız                      148 (%15,6)           148 (%14,7)
L ≥ 200 kaynaklıda GÖVDELİ           %23,4                  %7,3
uç: BAŞ · SON · İKİ UÇ · HİÇBİRİ     409·180·392·244       430·185·338·272
G'nin U eşiği                        268,0                 443,8
G'nin kimlikleri                     macaristan-habsburg 12, timor 6, brunei 5 …    ispanya 23, brunei 5, timor 5 …
K adayı (L tabanı)                   53 (134)               13 (222) ⇒ 50'şer yıl aşağı ⇒ 37 (72,4)
```
- UZUN-DILIM'de okunan 20 kontrol dilimi G'den çıkarıldı (C2'de ilk 60'ta 19'u vardı).
- **Ege kutusu (35-41°K, 23-28,5°D):** U sıralamasının ilk 500'ünde **0** dilim (C ve C2). Ege dilimleri kısa ve
  parçalı; bu ölçütle riskli DEĞİL.

### 1.1 Okuma
Dört paralel okuyucu, şehir adlı birebir tanık. İki alıntıyı (Bilbao: *"It was occupied by the French in 1795, and
from 1808 to 1813"* · Badajoz: *"on the 10th of March 1811, the Spanish commander, José Imaz, was bribed into
surrendering to the French force under Marshal Soult"*) EB1911 metninde kendim doğruladım: birebir. Satır satır:
`KASA-GOVDE-TANIK-TARAMA-1010.csv` (60 satır).

**G — risk (GÖVDESİZ, U'ya göre ilk 40): YANLIŞ 13 · TEMİZ 0 · TEMİZ-ZAYIF 8 · ÖLÇÜLEMEDİ 19**
| nokta | atlas | doğru (tanık) | Napolyon ayrımı (③) |
|---|---|---|---|
| Madrid | `ispanya 1479-1923` | Fransa 1808-12-03 → 1812-08-12 (EB1911 PW: *"Wellington entered Madrid (Aug. 12, 1812)"*) | **Joseph krallığı** |
| Sevilla | 〃 | Fransa 1810-01-31 → 1812-08 (EB1911 PW + Oman V) | **Joseph** (Oman III: *"The King of Spain desires…"*) |
| Barselona | 〃 | Fransız himayesi 1640-1652 · Fransa 1809-1814 (EB1911) | 1812 **doğrudan ilhak** (Oman V: *"Montserrat [capital Barcelona]"*) |
| Lleida | 〃 | Fransa 1810-05-14 → 1814 (EB1911 PW) | **doğrudan ilhak** (*"Bouches-de-l'Ebre [capital Lerida]"*) |
| Girona | 〃 | Fransa 1694 → 1697 Ryswick (EB1911) · 1809-14 eğilimli | 1809-14 **doğrudan ilhak** (*"Ter [capital Gerona]"*) |
| Valensiya | 〃 | Fransa 1812-01 → 1813-06 (EB1911) | ölçülemedi (Oman "practically annexed", eyalet mi şehir mi belirsiz) |
| Valladolid | 〃 | Fransa 1808-12 → 1812-07-30 (EB1911 PW) | ölçülemedi |
| Bilbao | 〃 | Fransa 1808 → 1813 (EB1911, doğrulandı) | ölçülemedi |
| Badajoz | 〃 | Fransa 1811-03-10 → 1812-04-06 (EB1911, doğrulandı) | ölçülemedi |
| Tarragona | 〃 | Fransa 1811-06-28 → 1813-08-17 (EB1911 PW) | ölçülemedi (Oman'ın departman listesinde yok) |
| Ning'er (Pu'er) | `san-devletleri 1281-1729` | 清史稿 卷74: Qing'e bağlandı 1659, Qing tongpan'ı 1664 ⇒ uç ~65 yıl geç | — |
| Noemuti ⚠️ | `timor-beylikleri 1281-1769` | Hägerdal: Topass (Da Costa) enklavı ~1749/57 → (SINIR: Topass bu künyeye dahil mi) | — |
| Saarbrücken | `almanya 1281-1920` | EB1911: *"in the possession of France from 1801 to 1815, it passed to Prussia"* (+ künye iç boşluğu 1815-71) | — |
- ÖLÇÜLEMEDİ 19: Toledo, León, Oviedo, Córdoba, Jaén **YANLIŞ'a eğilimli** (iki uç şehir adlı ve tarihli, ama Oman'ın
  farklı ciltlerinde ⇒ "tek kaynak pasajı" şartı karşılanmıyor; Oman tek kaynak sayılırsa dördü YANLIŞ olur — hüküm
  senin) · Cuenca · Castellón · Brunei 5 (uçlar ✓, 1368 başı adıyla yok) · Timor 4 · Chiang Hung · Mao (**VARLIK
  açık**: 1898 kuruluşu Vikipedi ipucu, kaynakla teyit edilmedi) · Klagenfurt.
- TEMİZ-ZAYIF 8: A Coruña, Santiago, Vigo (Fransız 1809, < 1 yıl) · Murcia · Cartagena · Alicante · Kano (uç 1807 ✓) ·
  Zaria (uç 1806 ✓).

**K — kontrol (GÖVDELİ, 20): YANLIŞ 3 · TEMİZ 3 · TEMİZ-ZAYIF 3 · ÖLÇÜLEMEDİ 11**
| nokta | atlas (kaynaklı) | doğru (tanık) |
|---|---|---|
| Malta | `napoli 1282-1530` | **YANLIŞ SAHİP:** TDV `malta`: *"Malta 1284'te Sicilya'yı ele geçiren Aragonlular'ın, 1410'da Kastilyalılar'ın hâkimiyetine girdi"* — atlasın KENDİ kaynak notu bunu söylüyor, dilim yine `napoli` |
| Mljet | `macaristan 1358-1459` | HE *"God. 1410. Mljet je konačno potpao pod vlast Dubrovačke Republike"* ⇒ başlangıç ~52 yıl erken |
| Kostajnica ⚠️ | `macaristan-habsburg 1813-1918` | HE *"Napoleonovih Ilirskih pokrajina (1809–15)"* (SINIR: resmî 1815 ↔ fiilî 1813 Fransız çekilişi) |
- TEMİZ 3: Korfu (EB1911 1386/1401-1797) · Kars (TDV uç 1336 ↔ 1340, eşik altı) · İstanbul (TDV 330-05-11 / 1204-04-13).
- TEMİZ-ZAYIF 3: Sivas, Kayseri (1243 sonrası İlhanlı nüfuzu `v:` okundu) · Karlovac.

### 1.2 Oranlar
```
                     YANLIŞ / (YANLIŞ+TEMİZ+ZAYIF)     ZAYIF ÖLÇÜLEMEDİ'ye        SINIRLAR da çıkarılırsa
G (risk, GÖVDESİZ)    13 / 21 = %62                     13 / 13 = %100              12 / 20 = %60
K (kontrol, GÖVDELİ)   3 /  9 = %33                      3 /  6 = %50                2 /  8 = %25
fark                  29 puan                            50 puan                     35 puan
```
- K ölçülebilen 9 ≥ 8 ⇒ §0.3-2 gereği hüküm VERİLEBİLİR (sınırda).
- **Mekanizma sınaması (§0.3-3):** G'nin 13 YANLIŞ'ının **0'ı** kaynağın tarihlediği uçta. İspanya'nın 10'u gövdede
  (kaynak 1479'u tarihliyor, hata 1640-52 / 1694-97 / 1808-14); Saarbrücken, Noemuti gövdede; Ning'er ucu kaynağın
  tarihlemediği uçta (`HİÇBİRİ`). ⇒ "kaynak ucu belgeliyor, hata gövdede" **TUTTU**.
- **Kontrolün hataları farklı türden:** Malta'da kaynak notu doğru sahibi SÖYLÜYOR, dilim yine yanlış kimlikte
  (veri↔kaynak uyuşmazlığı); Mljet'te uç kayması. K'nın hatası "kaynak gövdeyi belgeliyor ama veri kaynağı
  izlemiyor"; G'ninki "gövdeyi kimse belgelemiyor".

### 1.3 Öngörü ↔ ölçüm
```
öngörü                                  ölçüm (C · C2)
GÖVDELİ %35 ± 15                         %22,8 ✓ · %18,0 ✗
GÖVDESİZ'de yılsız %10 ± 10               %15,6 ✓ · %14,7 ✓
L≥200 kaynaklıda GÖVDELİ %20 ± 15         %23,4 ✓ · %7,3 ✓
BAŞ-yalnız %45 ± 15                       %33,4 ✓ · %35,1 ✓
SON-yalnız %20 ± 10                       %14,7 ✓ · %15,1 ✓
İKİ UÇ %25 ± 15                           %32,0 ✓ · %27,6 ✓
G U eşiği 250 ± 100                       268 ✓ · 443,8 ✗
G'de osmanli ≥ %30                        0 ✗✗ (UZUN-DILIM'de de 0 — Osmanlı çekirdeği iki ölçütte de riskli değil)
ispanya ikinci                            C2'de BİRİNCİ (23/40)
G YANLIŞ %40 ± 20                         %60-62 ✗ (üstünde)
K YANLIŞ %15 ± 15                         %25-33 ✓ sınırda / ✗
G − K ≥ 20 puan                           29 puan ✓ (sınırlar çıkınca 35)
Ege ilk 500'de 10 ± 8                     0 ✗
yanlışlanma şartları (§0.3)              hiçbiri gerçekleşmedi
```

### 1.4 Hüküm
1. **Kapsama ölçütü ayırıyor** (G %60-62 ↔ K %25-33, fark ≥ 29 puan), **"kaynak dolu mu" ayırmıyordu** (UZUN-DILIM:
   kaynaksız %41 ↔ kaynaklı %80+). Ama ölçüt, kaynak metnindeki yılları okuyan kaba bir vekildir. Yayın yılı kusuru
   (§1.0) gösterdi ki yanlış ayarlanırsa bilinen yanlışları kontrol kovasına koyar.
2. **GÖVDELİ de temiz değil (%25-33).** Kontrolün hatası başka tür: kaynağın söylediğini veri izlemiyor (Malta).
   ⇒ Bir sonraki ucuz tarama adayı: **"kaynak notunun ADIYLA andığı sahip ≠ dilimin `d:`'si"** (Malta tipi;
   kaynak metninde başka bir künye adı geçiyor).
3. **Napolyon İspanyası:** 5 şehirde ayrım ölçüldü — Madrid, Sevilla: **Joseph krallığı**; Barselona, Lleida, Girona:
   **doğrudan Fransa ilhakı** (Oman V departman listesi, şehir adıyla). Öteki 5'inde ayrım ölçülemedi ⇒ hükmün:
   `fransa` + `ic_not`. Tortosa (UZUN-DILIM kontrolü) bu turda okunmadı.
4. **Ege adaları bu ölçütle riskli değil** (ilk 500'de 0). Ege turu hedefli yapılacaksa ölçüt uzunluk değil
   SAHIP-BOLGE-2'nin deseni (1281'den başlayan Ceneviz/Latin halkası) olmalı.

## 2. ③ İSTİYORUM
a) **FAZ 2'ye:** G'den 12 kesin (İspanya 10 · Ning'er · Saarbrücken) + 1 SINIR (Noemuti: Topass enklavı
   `timor-beylikleri` mi?). K'dan 2 kesin (Malta → `aragon`/`kastilya`, künye varlığı ölçülmedi · Mljet başlangıcı
   1410) + 1 SINIR (Kostajnica 1813-15).
b) **Oman kuralı:** iki ucu farklı ciltlerde ama aynı eserde olan 5 şehir (Toledo, León, Oviedo, Córdoba, Jaén):
   "tek eser = tek kaynak" sayılsın mı? Sayılırsa 4-5 YANLIŞ daha.
c) **Ölçüt sapması (§1.0) onayın:** C2'yi ileride de kullanmak için yayın yılı ayıklaması kurala yazılsın mı?
d) **Sonraki ucuz tarama önerisi (1.4-2):** "kaynak notunda adı geçen sahip ≠ dilimin `d:`'si" — Malta tipi.
   Ölçmeden önce öngörü yazarım.
e) **Mao (Kanem) VARLIK** ve **Ning'er 1659/1664** için tek tek `kur:`/uç kalemi.
