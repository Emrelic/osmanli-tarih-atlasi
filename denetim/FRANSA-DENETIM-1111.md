# FRANSA DENETİMİ — kronoloji × harita × kaynak (DENETIM-1111)

**Oturum:** denetim-fransa (UMIT, **HAFİF KİP** — yönetici oturumun 12 Kasım 2026 talimatı: `denetle*.py`,
`paketle`, `push_kapisi`, geniş tarama YASAK; en çok 1 alt ajan). **Veri dosyasına dokunulmadı.**
**Ağaç:** `claude/determined-germain-a5fcdd`, `origin/main` ile fark 0 (12 Kasım ölçümü; taban `7a3659d54`).

> ⚠️ **Ölçüm yöntemi beyanı.** `py arac/denetle.py` UMIT'te yasak olduğu için koşturulmadı ⇒ **Değişmez 2
> hükmü bu raporda RESMÎ DEĞİLDİR.** Yerine hafif bir Node betiği (scratchpad, yalnız okur) koşturuldu:
> `arac/girdi_listesi.py GIRDI_DOSYALARI` (126 dosya) içindeki her yerleşimin `s:` dizisinden `fransa` /
> `fransa-cumhuriyet`e giren-çıkan kırılmalar çıkarıldı, `data/olaylar*.js` + `data/kronoloji_sinir*.js`
> (D2 evreni, 169 dosya, 7.702 madde) içinde ±30 gün madde arandı. Bu, `denetle.py`nin eski `d:` kolu
> davranışına yakındır ama yer/taraf şartı (`2s`) ve tavanlar uygulanmadı. KASA'da `denetle.py` ile
> yeniden ölçülmeli. `isg:` (işgal) alanı ayrıca döküldü (72 Fransız işgal dönemi).

---

## 0. Kapsam ve sayılar

| Ölçülen | Sayı |
|---|---|
| Zincir + çevre künyesi (`devletler.js`, ad/id/özet eşleşmesi) | **68** |
| Bunlardan ayrıntılı okunan (kronoloji maddeleriyle) | **22** (fransa, fransa-cumhuriyet, vichy, cezayir-fransiz, tunus-beyligi-fransiz, fas-fransiz-himayesi, suriye-lubnan-mandasi, hatay-devleti, iskenderun-sancagi-ozel-idare, kilikya-fransiz, fransiz-misir-seferi, avignon-venaissin, korsika-cumhuriyeti, anglo-korsika-krallik, lorraine-dukaligi, bretanya, burgonya, savoya, fransiz-cinhindi, yeni-fransa, fransiz-hindistani, fransiz-guyanasi) |
| Kronoloji maddesi okunan | **462** (`kronoloji_fransa.js` 184 · `kronoloji_cok_fransa.js` 27 · `olaylar_fransa_kontrol_1027.js` 46 · künye kronolojileri 205) |
| Fransa'ya giren/çıkan yerleşim kaydı (`s:`) | **531** kayıt, **1.199** kırılma (`fransa` 199 dönem, `fransa-cumhuriyet` 503 dönem) |
| Fransız `isg:` dönemi | **72** |
| Tek tek okunan yerleşim zinciri | **~75** (Paris, Calais, Bordo, Rouen, Arras, Lille, Amiens, Metz, Strazburg, Colmar, Mulhouse, Nice, Chambéry, Thonon, Bastia, Korfu, Preveze, Ljubljana, Trieste, Kotor, Dubrovnik, Elba, Lucca, New Orleans, Cayenne, Quebec, Pondişeri, Antakya, İskenderun, Mersin, Adana, Kahire…) |
| Hafif D2: ±30 günde hiç madde olmayan kırılma | **81** kırılma (≈63 tarih) |
| Hafif D2: yalnız ilgisiz maddeyle kapanan kırılma | **176** |

---

## 1. EN ÖNEMLİ BULGULAR (özet)

1. **[SESSİZ-DEĞİŞİM · sistemik] `kronoloji_fransa.js` Değişmez 2 evreninde değil.** Troyes 1420-05-21,
   Arras 1435-09-21, Pireneler 1659-11-07 gibi maddeler bu dosyada **var**, ama D2 evreni yalnız
   `olaylar*.js` + `kronoloji_sinir*.js` ⇒ haritadaki kırılmaları kapatmıyorlar (bkz. §3, 81 açık kırılma).
2. **[TARİH-HATA] New Orleans 1763-11-03 → İspanya** — Fontainebleau gizli antlaşması **3 Kasım 1762**;
   ayrıca 1803'teki **Fransız ara dönemi** (30 Kasım–20 Aralık 1803) haritada yok (bkz. §4.1).
3. **[TARİH-HATA] İlirya 1813-01-01** — 27+7 yerleşim (Ljubljana, Trieste, Dalmaçya adaları, Askerî Hudut)
   Avusturya'ya Ocak 1813'te geçiyor; Fransız yönetimi 1813 sonbaharına dek sürdü (bkz. §4.3).
4. **[SINIR] İyon adaları 1798–1814** — Rus-Osmanlı 1798-99 fethi ve İngiliz 1809-10 fethi yok; adalar
   1800-03-21'e ve 1815-11-05'e dek kesintisiz Fransız (bkz. §4.4).
5. **[SINIR/EKSİK-YERLEŞİM] 1648 Vestfalya (Alsace) haritada görünmüyor** — Yukarı Alsace/Sundgau'da nokta
   yok; toprak Colmar (almanya, 1679'a dek) ve Mulhouse (isvicre) peteklerine emiliyor (bkz. §4.2).

(Tamamı §4–§7'de; teyit durumu her bulguda yazılı.)

---

## 2. Künye zinciri

| Künye | f → t | Not |
|---|---|---|
| `fransa` Fransa Krallığı | 0987-07-03 → 1792-09-22 | Capet/Valois/Bourbon tek künye (hanedan değişimi polity değişimi sayılmamış — Mantova ilkesi). |
| `fransa-cumhuriyet` | 1792-09-22 → (sürüyor) | I. Cumhuriyet → I. İmp. → Restorasyon → Temmuz → II. Cumh. → II. İmp. → III/IV/V. Cumh. **tek künye**; rejim geçişleri yalnız künye kronolojisinde madde. `harita:` yok. |
| `vichy-fransasi` | 1940-07-10 → 1944-08-20 | Haritada **tek yerleşimde** (Vichy) kullanılıyor; bkz. §6.3. |
| `cezayir-fransiz` | 1830-07-05 → 1962-07-05 | `harita: fransa-cumhuriyet`; yerleşimler doğrudan `fransa-cumhuriyet` (54 yerleşim 1962-07-05'te `cezayir`e). Uyumlu. |
| `tunus-beyligi-fransiz` | 1881-05-12 → 1956-03-20 | 36 yerleşimde. Uyumlu. |
| `fas-fransiz-himayesi` | 1912-03-30 → 1956-03-02 | 31 yerleşimde. Uyumlu. |
| `suriye-lubnan-mandasi` | **1920-07-01** → 1946-04-17 | f yer tutucu; haritada 1920-07-24/25 (bkz. §5.6). |
| `fransiz-cinhindi` | 1859-02-17 → 1954-07-21 | 46 yerleşimde; 5 kronoloji maddesinin **5'i kaynaksız**. |

**Haritada HİÇ kullanılmayan Fransız künyeleri** (`d:` sayımı 0; `harita:` anahtarı da yok):
`kilikya-fransiz`, `iskenderun-sancagi-ozel-idare`, `fransiz-misir-seferi`, `anglo-korsika-krallik`,
`korsika-cumhuriyeti`, `avignon-venaissin`, `malta-fransiz`, `madagaskar-fransiz`, `fransiz-somali`,
`yeni-fransa`, `fransiz-hindistani`, `oeta-bati-fransiz`, `buyuk-lubnan-devleti`, `fransiz-komorlari`.
Bunların yerine yerleşimler `fransa`/`fransa-cumhuriyet`/`ingiltere`/`papalik` taşıyor. Bu bir hata değil,
**model tercihi**; ama künye kronolojisi ile harita arasında kopukluk doğuruyor (örn. §5.3 Korsika).
→ Emre'ye: "sömürge/işgal künyesi haritada ayrı boya mı, yoksa ana devletin boyası mı?" kararı.

---

## 3. Değişmez 2 (hafif ölçüm) — ±30 günde HİÇ madde olmayan Fransa kırılmaları

Sınıf: **SESSİZ-DEĞİŞİM** (hafif ölçüm; resmî hüküm KASA'da `denetle.py` ile). "kf" = `kronoloji_fransa.js`te
madde VAR ama D2 evreninde değil.

| Tarih | Kırılma | Yerleşim | Not |
|---|---|---|---|
| 1372-09-08 | ingiltere→fransa | La Rochelle | Du Guesclin'in Poitou geri fethi; madde yok |
| 1417-09-04 | fransa→ingiltere | Caen | V. Henry'nin Normandiya fethi; madde yok |
| 1418-09-29 | fransa→ingiltere | Cherbourg | madde yok |
| 1420-05-21 | fransa→ingiltere | Reims, Troyes | **kf** Troyes Antlaşması (D2 dışı). Ayrıca bkz. §5.1 |
| 1429-07-10 / 07-16 | ingiltere→fransa | Troyes, Reims | VII. Charles'ın Reims seferi/taç giyme (17 Tem.) — madde yok |
| 1435-09-21 | fransa→burgonya | Amiens, Mâcon | **kf** Arras Antlaşması (D2 dışı) |
| 1449-10-29 · 1450-06-24 · 1450-08-12 · 1451-08-20 | ingiltere→fransa | Rouen, Caen, Cherbourg, Bayonne | Normandiya/Gaskonya geri fethi; yalnız Formigny (1450-04-15) maddesi var |
| 1552-04-18 | almanya→fransa | Metz | Üç Piskoposluk; Toul maddesi 1552-01-01 (±30 dışı) |
| 1620-10-19 | navarra→fransa | Pau | XIII. Louis'nin Béarn/Navarre ilhak fermanı; madde yok |
| 1659-11-07 | ispanya→fransa | Arras, Perpignan | **kf** Pireneler Antlaşması (D2 dışı) |
| 1677-01-01 · 1697-10-30 | avusturya↔fransa | Freiburg | bkz. §4.6 |
| 1693-09-06 · 1749-08-21 · 1750-09-11 · 1761-04-05 · 1765 · 1778-10-18 · 1785 · 1793-08-23 | — | Pondişeri, Madras, Cinci | Hindistan el değiştirmeleri; madde yok |
| 1763-11-03 | fransa→ispanya | New Orleans | bkz. §4.1 (tarih de yanlış) |
| 1795-07-22 · 1809-07-09 | ispanya↔fransa-cumhuriyet | Santo Domingo, Higüey, Santiago | Basel Antlaşması (22 Tem. 1795) ve 1809 İspanyol geri alışı; madde yok |
| 1802-01-01 | toskana→fransa-cumhuriyet | Elba | bkz. §4.8 |
| 1608-07-03 … 1714-01-01 (17 kırılma) | (başlangıç)→fransa | Quebec, Montreal, Trois-Rivières, Detroit, Biloxi, Louisbourg, Saint-Denis (Réunion)… | Kuruluş kırılmaları; kolonyal kuruluş maddeleri yok (Quebec 1608-07-03 **kf**'de var) |
| 1855–1914 (≈25 kırılma) | yerel devlet→fransa-cumhuriyet | Nder (Valo), Dakar, Bulebane, İmpfondo, Ouesso, Mbul, Rufisque, Vahiguya, Sikasso, Arlit, Fachi, In Gall, Obo, Zemio, Rafai, Bangassu, Bardaî… | Batı/Orta Afrika fetihleri; hiçbirinin maddesi yok (Sikasso 1898-05-01 düşüşü, Kayor 1886 vb.) |

**Öneri:** `kronoloji_fransa.js`teki toprak maddelerinin (Troyes, Arras, Pireneler, Quebec, Westphalia,
Nijmegen, Campo Formio…) birer olay maddesini `olaylar_fransa_*.js`e (yer_id ile) yazmak; Afrika fetihleri
için `olaylar_fransa_afrika` partisi. Ölçütü gevşetme önerilmiyor.

---

## 4. TARİH-HATA / SINIR bulguları (harita)

**Teyit derecesi** (tek alt ajan, web okuması; 12 Kasım): **güçlü** = birden çok bağımsız akademik/kurumsal
kaynak · **orta** = tek kurumsal kaynak · **zayıf** = yalnız ikincil/popüler kaynak (ör. herodote.net — CLAUDE.md
kaynak kuralına göre **dayanak olamaz**, yalnız iz) ⇒ düzeltmeden önce sıradaki basamakla teyit şart.
⚠️ Ajan TDV sayfalarını tam metin değil, sayfa özeti üzerinden okudu; TDV alıntıları uygulamadan önce `GET` ile
yeniden okunmalı. Universalis/Larousse gövdeleri okunamadı (yalnız başlık).

### 4.1 New Orleans — Louisiana devirleri [TARİH-HATA + SINIR] — teyit: **güçlü**
- **Atlas** (`yerlesimler_amerika.js`, New Orleans): `fransa` 1718-01-01→**1763-11-03** · `ispanya`
  1763-11-03→1803-04-30 · `ispanya` 1803-04-30→1803-12-20 (iki ardışık aynı sahipli dilim) · `abd` 1803-12-20→.
- **Kaynak:** Fontainebleau gizli antlaşması **3 Kasım 1762** (64 Parishes, *Encyclopedia of Louisiana*,
  https://64parishes.org/?p=59430). İspanya'nın Fransa'ya resmî teslimi **30 Kasım 1803** (Cabildo, Laussat),
  Fransa→ABD **20 Aralık 1803** (BnF *France-Amériques* https://heritage.bnf.fr/france-ameriques/en/louisiana-purchase-1803 ;
  Louisiana State Museum).
- **Öneri:** `fransa` t → **1762-11-03** (de jure) — ya da fiilî İspanyol idaresi (Ulloa 1766 / O'Reilly
  1769) seçilecekse beyanla; ikinci `ispanya` dilimi t → **1803-11-30**, ardına `{f:"1803-11-30",
  t:"1803-12-20", d:"fransa-cumhuriyet"}`. Her iki kırılmaya madde (D2 evreninde). 1800-10-01 San Ildefonso
  (gizli retrosesyon) sahiplik değiştirmez — madde olarak yazılabilir.

### 4.2 Westphalia 1648 haritaya inmiyor [SINIR/EKSİK-YERLEŞİM] — bkz. §6.2.

### 4.3 İlirya Eyaletleri 1813-01-01 [TARİH-HATA] — teyit: **orta/zayıf**
- **Atlas:** Ljubljana, Trieste, Görz, Villach ve Dalmaçya adaları (27 yerleşim) `fransa-cumhuriyet→avusturya`;
  Sisak, Karlovac, Gospić vb. (7) `→macaristan-habsburg` — hepsi **1813-01-01** (Trieste kaydında "YER TUTUCU,
  yalnız yıl teyitli" beyanı var).
- **Kaynak:** Avusturya taarruzu Ağustos 1813'te başladı; Lipa 7 Eylül 1813, Dubrovnik 20 Eylül, **Trieste
  29 Ekim 1813** (kuşatma 7 Eylül–29 Ekim), Zadar 6 Aralık 1813. Ljubljana/Karlovac günü bulunamadı.
  Akademik iz: hrcak.srce.hr/file/347756 (okunmadı). Kotor/Dubrovnik zinciri ayrı (1814-01-28 Dubrovnik doğru,
  LZMK/Kolo kaynaklı).
- **Sorun:** `YYYY-01-01` yer tutucusu burada **yanlış yöne** düşüyor: Avusturya'ya 8–11 ay erken. CLAUDE.md
  "gün yoksa YYYY-01-01" kuralı yıl doğruysa geçerli; ama tutucu, kaynakla bilinen Fransız yönetimini siliyor.
- **Öneri:** Slovenska biografija / Hrvatska enciklopedija `ilirske-pokrajine` ile şehir şehir gün; bulunamazsa
  en azından **1813-10-29** (Trieste, kaynaklı) ya da şehir bazında Eylül-Aralık günleri + BEYANLI YAKLAŞIKLIK.
  Avusturya'nın Ağustos 1813 savaş ilanı / Lipa için D2 maddesi.

### 4.4 İyon adaları 1797–1815 [SINIR + TARİH-HATA] — teyit: **orta** (TDV)
- **Atlas:** Korfu, Kefalonya, Zaklise, Ayamavra, İthaki, Çuha: `fransa-cumhuriyet` 1797-10-17→**1800-03-21**
  → `septinsular` → `fransa-cumhuriyet` 1807-07-07→**1815-11-05**.
- **Kaynak:** TDV "Yedi Ada Cumhuriyeti" (https://islamansiklopedisi.org.tr/yedi-ada-cumhuriyeti): Rus-Osmanlı
  donanması adaları 1798 sonu–1799'da aldı, Korfu kalesi **Mart 1799**'da (TDV özeti 5 Mart; başka kaynaklar
  3 Mart — **ÇELİŞKİ, TDV esas**) düştü; İngilizler 1809'da Zanta/Kefalonya/Çuha'yı, 1810'da Ayamavra'yı aldı;
  Korfu 1814'e dek Fransız. TDV "Ayamavra" Osmanlı-Rus alışını **1800** diyor (1798/99 değil).
- **Sorun:** 1798-99 Rus-Osmanlı işgali (adalar 1800-03-21'e dek Fransız görünüyor) ve 1809-10 İngiliz işgali
  (Korfu dışındaki adalar 1815'e dek Fransız görünüyor) haritada yok.
- **Öneri:** (a) 1799-03 (Korfu) ve 1798 sonu (öteki adalar) → `isg:` Rus-Osmanlı ya da doğrudan
  `septinsular` öncesi dilim — gün TDV `korfu`, `kefalonya`, `cuka` maddelerinden; (b) 1809-10 (Zanta, Kefalonya,
  İthaki, Çuha) ve 1810-04 (Ayamavra) → `ingiltere`/`isg:`, gün İngiliz akademik kaynağı (ajan gün bulamadı);
  (c) Korfu 1814 Haziran Fransız teslimi. Hepsi beyanlı ve D2 maddeli.
- Preveze/Vonitsa/Butrint 1798-10-23 (Nikopolis, Tepedelenli Ali) **doğru** ve maddeli (`kronoloji_cok_fransa`).

### 4.5 Monako ve Menton 1793-01-03 [TARİH-HATA] — teyit: **orta**
- **Atlas:** Monako, Menton `monako→fransa-cumhuriyet` **1793-01-03**; madde `olaylar_fransa_kontrol_1027.js`
  "1793-01-03 Monako, Fort-Hercule adıyla Fransa Cumhuriyeti'ne katıldı".
- **Kaynak:** Konvansiyon'un ilhak kararnamesi **14 Şubat 1793** (yasa 15 Şubat; Monako'da 4 Mart'ta ilan) —
  archontology.org, worldstatesmen (ikincil listeler); Monako hükümeti sitesi dönemi 1793–1814 verir, gün yok.
  1793-01-03 için dayanak bulunamadı (Monako'da yerel cumhuriyet ilanı Ocak 1793).
- **Öneri:** Archives parlementaires (Persée/Gallica) ya da Digithèque MJP'deki kararname metniyle teyit, sonra
  kırılma + madde **1793-02-14**. Teyit edilemezse Ocak 1793 yerel ilanı beyanla korunur.

### 4.6 Freiburg im Breisgau 1677-01-01 [TARİH-HATA] — teyit: **zayıf**
- **Atlas:** Freiburg `avusturya→fransa` **1677-01-01** ("YIL", Catholic Encyclopedia 1909).
- **Kaynak bilgisi:** Créqui kuşatması 9–16 Kasım 1677, teslim **16 Kasım 1677**. Yıl başı tutucusu Fransız
  yönetimini 10,5 ay erken başlatıyor. Universalis "Fribourg-en-Brisgau" ve *Austrian History Yearbook*
  makalesi (Cambridge) okunmadı. **Öneri:** HLS/Universalis'ten teyit, sonra 1677-11-16.

### 4.7 Fransız Guyanası 1817-01-01 [TARİH-HATA] — teyit: **zayıf**
- **Atlas:** Cayenne `portekiz→fransiz-guyanasi` 1817-01-01; künye f 1817-01-01; madde "1817 Paris Antlaşması
  sonrası".
- **Kaynak bilgisi:** Paris iade sözleşmesi 28 Ağustos 1817, Cayenne'in Fransa'ya teslimi **8 Kasım 1817**
  (worldstatesmen — ikincil). **Öneri:** Archives nationales d'outre-mer / Revue française d'histoire d'outre-mer
  ile teyit.

### 4.8 Elba 1802-01-01 [TARİH-HATA] — teyit: **orta**
- **Atlas:** Elba `toskana→fransa-cumhuriyet` 1802-01-01 (kaynaksız dilim).
- **Kaynak:** sénatus-consulte organique **8 Fructidor X = 26 Ağustos 1802** (napoleon-empire.org kronolojisi).
  **Öneri:** f → 1802-08-26 (ya da Amiens 1802-03-25 ile İngiliz/Napoli taleplerinin düşmesi) + madde.

### 4.9 Verdun 1792 [TARİH-HATA] — teyit: **orta**
- **Atlas:** Verdun `prusya` 1792-09-02→**1792-10-01**.
- **Kaynak:** Prusyalılar Verdun'u **14 Ekim 1792**'de boşalttı (H. Marquis, HAL halshs-03176496). **Öneri:**
  t → 1792-10-14 + madde.

### 4.10 Kilikya/Hatay giriş günleri [TARİH-HATA] — teyit: **orta** (TDV özetleri) — bkz. §5.5
- TDV `iskenderun`: İngiliz işgali 9 Kasım 1918, ilk Fransız birliği 10 Kasım, ana kuvvet 14 Kasım.
  TDV `adana`: Fransız işgali 24 Aralık 1918 – 5 Ocak 1922 (atlas `isg:` ile uyumlu). Mersin: Fransız çıkarması
  **17 Aralık 1918**, tahliye **3 Ocak 1922** (DergiPark makalesi, okunmadı — teyit zayıf). TDV `antakya`:
  "1918 sonbaharında İngilizlerce işgal, sonra Fransız idaresi" — gün yok.
- **Atlas:** Antakya 1918-10-26, İskenderun ve Mersin 1918-10-30 Fransız (`s:`). **Desteklenmiyor.**

### 4.11 Toul ve Verdun 1552-01-01 [TARİH] — teyit: **zayıf**
- Atlas: Toul, Verdun `almanya→fransa` 1552-01-01 (Treccani, yıl). Metz 1552-04-18 (doğru, kral girişi).
- Kaynak izi: Toul'a giriş **13 Nisan 1552**, Verdun **12 Haziran 1552**; hukukî dayanak Chambord Antlaşması
  15 Ocak 1552. (herodote.net — dayanak olamaz; *Études touloises* makalesi okunmadı.) **Öneri:** teyitten sonra
  günler; aynı seferin üç şehri tek tutarlı modelle (ya hepsi Chambord 1552-01-15, ya hepsi giriş günü).

### 4.12 Kotor 1806/1807/1814 yıl tutucuları [TARİH] — teyit: **orta**
- Atlas: `rusya` 1806-01-01, `fransa-cumhuriyet` **1807-01-01**→1814-01-01.
- Kaynak: Tilsit 7 Temmuz 1807; Fransız yönetimi Temmuz–Ağustos 1807 (Herceg Novi'ye giriş 29 Temmuz 1807 —
  hrcak.srce.hr/file/61247; Marmont kararnamesi 27 Ağustos 1807). **Öneri:** f → 1807 Temmuz/Ağustos günü
  (hrcak makalesinden); 1813–14 Karadağ birliği için §6.5.

### 4.13 Amiens 1435–1477 kesintisiz Burgonya [SINIR] — teyit: **zayıf**
- Atlas: Amiens `burgonya` 1435-09-21→1477-01-05.
- Kaynak bilgisi: XI. Louis Somme kasabalarını **1463**'te Arras hükmüne göre geri satın aldı; Conflans
  (5 Ekim 1465) ile yeniden Charolais'ye; Amiens 1471'de krala kapı açtı (gün bulunamadı). Britannica
  "Louis XI" / Universalis "Amiens" ile teyit edilmeli. **Öneri:** 1463–1465 ve 1471→ dilimleri `fransa`.

### 4.14 Auxerre 1435-01-01 / Arras 1477-01-01 ve 1493-01-01 [ÇELİŞKİ — aynı antlaşma iki gün]
- Auxerre `fransa→burgonya` **1435-01-01**, oysa aynı Arras Antlaşması Amiens/Mâcon'da **1435-09-21**.
  **Öneri:** Auxerre 1435-09-21 (gün komşudan değil, antlaşmanın kendisinden — Treccani "nel 1435" + Arras günü).
- Arras `fransa→almanya` **1493-01-01** "Senlis Antlaşması" — Senlis Antlaşması **23 Mayıs 1493** (Britannica
  "Treaty of Senlis"; ajan listesinde değildi — **teyitsiz**, düzeltmeden önce okunmalı).

### 4.15 Odessa 1919 [TAKVİM/TARİH] — ölçülmedi
- Hacıbey (Odessa) `fransa-cumhuriyet` 1919-01-01→1919-04-01 (CIUS kaynaklı, ay hassasiyeti). Fransız çıkarması
  Aralık 1918, tahliye 6 Nisan 1919 (genel bilgi; teyit yapılmadı). Ayrıca egemenlik değil müdahale: `isg:` daha
  doğru model. **Sınıf:** SINIR (model) — Rusya 1917–1945 oturumuna da iletildi sayılmalı.

---

## 5. ÇELİŞKİ / kimlik tutarsızlıkları

### 5.1 Troyes 1420: Reims ve Troyes "ingiltere"
- **Atlas:** Reims, Troyes `fransa→ingiltere` 1420-05-21; Paris ve çevresi 1420-12-01.
- **Sorun:** Troyes Antlaşması toprak devretmez; V. Henry'yi naip ve vâris yapar. Şampanya fiilen
  Burgonya-İngiliz ("Lancastre Fransası") idaresindeydi. Modelleme tercihi, ama aynı antlaşma iki farklı
  günle (05-21 / 12-01) haritaya iniyor. **Sınıf:** ÇELİŞKİ (hafif). **Öneri:** Emre kararı — "Lancastre
  Fransası" tek kimlik (ingiltere) kalsın mı; kalırsa `ic_not`ta "Troyes devir değil naiplik" beyanı.

### 5.2 Aynı Habsburg mülkü iki kimlikte
- **Atlas:** Lille 1482-03-27→1516-01-23 ve Arras 1493-01-01→1516-01-23 **`almanya`**; Lüksemburg aynı
  dönemde **`habsburg-hollandasi`**.
- **Sorun:** Burgonya mirası (Habsburg Hollandası) iki farklı kimlikle boyanıyor. **Sınıf:** ÇELİŞKİ.
  **Öneri:** Lille ve Arras'ın bu dilimleri `d:"habsburg-hollandasi"`.

### 5.3 Savoya/Sardinya iki kimlik + Chablais'nin Devrim dönemi eksik
- **Atlas:** Thonon ve Annemasse (`yerlesimler_a78_avrupa.js`) 1720-08-02→1860-06-14 **`sardinya`**;
  Chambéry, Nice aynı devirde **`sardinya-piyemonte`**.
- **Sorun 1 (ÇELİŞKİ):** aynı devlet iki kimlik.
- **Sorun 2 (SINIR):** Thonon/Annemasse'de **1792–1814/15 Fransız dönemi YOK** — Chablais ve Genevois,
  Savoya ile birlikte 27 Kasım 1792 kararnamesiyle Mont-Blanc departmanına katıldı (1798'den Léman). Chambéry
  aynı kararnameyle Fransa'ya geçiyor (kaynak kayıtta: Digithèque MJP d1792savoie).
  **Öneri:** iki yerleşime `{f:"1792-11-27",t:"1815-11-20",d:"fransa-cumhuriyet"}` (Chambéry ile aynı
  zincir; 1814 Paris'te Savoya'nın bir kısmı Fransa'da kaldı — Chablais'nin 1814'te mi 1815'te mi döndüğü
  kaynakla teyit edilmeli), kimlik `sardinya-piyemonte`.

### 5.4 Korsika: künye ↔ harita kopukluğu
- **Atlas:** `anglo-korsika-krallik` künyesi (1794-01-01→1796-10-01) var ama Bastia/Ajaccio 1794-06-15→
  1796-10-01 **`ingiltere`**. `korsika-cumhuriyeti` (Paoli 1755–1769) haritada hiç yok: Bastia/Ajaccio
  cenova→fransa 1768-05-15, iç Korsika'da (Corte) nokta yok.
- **Künye f:** 1794-01-01 yer tutucu; künyenin kendi maddesi Corte konsültasını **1794-06-15** veriyor.
- **Sınıf:** ÇELİŞKİ + EKSİK-YERLEŞİM. **Öneri:** künye f → 1794-06-15 (kendi maddesiyle); Bastia/Ajaccio
  dilimi `d:"anglo-korsika-krallik"`; Corte noktası (Paoli başkenti) — `korsika-cumhuriyeti` 1755→1769-05-09,
  sonra `fransa`.

### 5.5 Kilikya ve Hatay: aynı bölgede üç model
- **Atlas:** Adana (1918-12-24→1922-01-05), Tarsus, Osmaniye, Antep, Maraş, Urfa, Kilis Fransız işgali
  **`isg:`** (TDV kaynaklı, egemenlik TBMM/Osmanlı'da). Ama **Mersin** `s:` **egemen** `fransa-cumhuriyet`
  1918-10-30→1921-10-20; Antakya `s:` 1918-10-26, İskenderun `s:` 1918-10-30. Dörtyol, Erzin, Payas,
  Yumurtalık, Akçakale, Suruç, Nusaybin `isg:` 1918-10-30→1921-10-20 ("bulunamadı" beyanlı).
- **Atlasın kendi künyesi** `iskenderun-sancagi-ozel-idare` kronolojisi: "1918-11-09 İskenderun İngilizlerce
  işgal edildi · 1918-11-14 asıl Fransız kuvvetleri çıktı". Yani İskenderun'un 1918-10-30'dan Fransız
  gösterilmesi atlasın kendi kaynaklı maddesiyle çelişiyor. Mondros (30 Ekim) işgal günü değildir.
- **Mersin ucu:** 1921-10-20 Ankara Antlaşması imza günü; Adana/Tarsus/Osmaniye tahliyeleri 27 Aralık 1921–
  5 Ocak 1922 arasında `isg:`te doğru veriliyor, Mersin'inki imza gününde kesiliyor.
- **Sınıf:** ÇELİŞKİ. **Öneri:** Mersin'i Adana modeline (`isg:` + Osmanlı/TBMM egemenliği) çevir; işgal
  başlangıcı TDV/ajan teyidindeki güne (§4.10); İskenderun f → 1918-11-14 (künyenin kendi maddesi);
  Mondros günü taşıyan yedi `isg:` dönemi için TDV `hatay`/`adana`/`urfa` maddelerinden gün.
  (Siyasî hassas değil, tarihsel işgal; yine de egemenlik dili Emre'nin "işgal = isg:" kuralına göre.)

### 5.6 Suriye-Lübnan mandası başlangıcı üç günle
- Künye f **1920-07-01** (yer tutucu) · Antakya/Beyrut/Trablusşam/Rakka/Deyrizor `s:` **1920-07-24** ·
  Şam **1920-07-25** · künye maddesi "1920-07-25 Han Meyselûn zaferiyle…" · `kronoloji_fransa.js`
  "1920-07-24 Meysalun Savaşı". Meysalun 24 Temmuz, Şam'a giriş 25 Temmuz 1920.
- **Sınıf:** ÇELİŞKİ. **Öneri:** künye f → 1920-07-24 (Beyrut kıyısı 1918'den beri Fransız; Şam 07-25 ayrı
  olgu olarak kalabilir). `buyuk-lubnan-devleti` (1920-09-01) haritada kullanılmıyor — Beyrut 1920-07-24'te
  doğrudan mandaya geçiyor (EKSİK, model kararı).

### 5.7 Künye ömrü dışındaki maddeler
- `fransa` künyesinde **1798-07-01 "(Devrim sonrası) Napolyon'un Mısır Seferi"** — künye 1792-09-22'de
  bitiyor; madde kaynaksız. **Sınıf:** HAYALET/KAYNAKSIZ. **Öneri:** sil (aynı olay `fransa-cumhuriyet` ve
  `kronoloji_fransa.js`te var).
- `vichy-fransasi` künyesinde **1944-08-25 "Paris kurtarıldı"** — künye t 1944-08-20. **Öneri:** maddeyi
  `fransa-cumhuriyet`e taşı (orada zaten 1944-08-25 maddesi var ⇒ sil).
- `burgonya` künyesi **1482-03-27 "Arras Antlaşması ile miras bölündü"** — 27 Mart 1482 Burgonyalı Marie'nin
  ölüm günü; Arras Antlaşması 23 Aralık 1482 (Britannica; bkz. §8). **Sınıf:** ÇELİŞKİ (metin ↔ gün).

---

## 6. EKSİK-DEVLET / EKSİK-YERLEŞİM / model

### 6.1 Elba Prensliği (1814–1815) boşluk olarak duruyor
- **Atlas:** Elba 1814-05-05→1815-06-09 **`__BOSLUK__`**.
- **Kaynak:** Fontainebleau Antlaşması (11 Nisan 1814) Elba'yı Napolyon'a egemen prenslik olarak verdi;
  Napolyon 4 Mayıs 1814'te Portoferraio'ya çıktı, 26 Şubat 1815'te ayrıldı. Bu sahibi bilinen bir devlettir.
- **Sınıf:** EKSİK-DEVLET. **Öneri:** künye `elba-prensligi` (1814-05-04 → 1815-06-09 Viyana Nihaî Senedi
  Toskana'ya) — gün kaynağı: Fondation Napoléon kronolojisi (atlasın NAPO-2/3 kaynağı) ile teyit.

### 6.2 Westphalia 1648, Dunkerque, Sedan, Montbéliard, Landau/Saarlouis noktası yok
- `devletler.js` `fransa` kronolojisi "1648-10-24 Westphalia: Fransa Alsace'ın bir bölümünü alır" diyor; ama
  haritada 1648'de **hiçbir yerleşim kırılmıyor**. Alsace'ta yalnız Strazburg (1681), Colmar (1679),
  Mulhouse (1798) var; **Breisach, Ensisheim, Thann, Belfort, Haguenau, Sélestat, Landau** yok ⇒ Habsburg
  Yukarı Alsace'ı ve Sundgau, Colmar (almanya) ve Mulhouse (isvicre) peteklerine emiliyor.
- Aynı nedenle haritada görünmeyen Fransız toprak olayları: **Dunkerque** (1658 İngiliz, 1662 Fransa'ya
  satış), **Sedan** (1642), **Montbéliard** (1793), **Landau ve Saarlouis** (1815 II. Paris Antlaşması ile
  kayıp), **Philippeville/Marienbourg** (1659 kazanç, 1815 kayıp).
- **Sınıf:** SINIR + EKSİK-YERLEŞİM. **Öneri:** en az Breisach, Ensisheim (Habsburg Ön Avusturya merkezi),
  Belfort, Haguenau, Dunkerque, Sedan, Montbéliard, Landau, Saarlouis noktaları (her biri mükerrer taraması:
  ad + 3 km).

### 6.3 Vichy / işgal bölgeleri 1940–44
- `vichy-fransasi` yalnız Vichy şehrinde; Fransa'nın geri kalanı 1940–44 `fransa-cumhuriyet`. Alman işgal
  bölgesi (Kuzey + Atlantik kıyısı, 22 Haziran 1940 ateşkesi), İtalyan bölgesi ve 11 Kasım 1942 tam işgal
  haritada yok. Yalnız Alsace-Moselle'in fiilî ilhakı (1940-08-02) var.
- **Sınıf:** SINIR (model). **Öneri:** Emre kararı — (a) güney bölge 1940-07-10→1944-08-20 `vichy-fransasi`,
  (b) kuzey işgal bölgesi `isg:` almanya 1940-06-22→kurtuluş günleri; (c) bugünkü hâl + beyan.

### 6.4 Quebec 1629–1632 İngiliz dönemi yok
- **Atlas:** Quebec 1608-07-03→1763-02-10 kesintisiz `fransa`.
- **Kaynak bilgisi:** Kirke kardeşler Quebec'i Temmuz 1629'da aldı; Saint-Germain-en-Laye Antlaşması
  (29 Mart 1632) ile iade, Fransız dönüşü Temmuz 1632. **Teyit:** ajan listesinde değil — **teyitsiz**,
  Canadian Encyclopedia / Dictionnaire biographique du Canada ile doğrulanmalı. **Sınıf:** SINIR.

### 6.5 Boka Kotorska 1813–1814 Karadağ birliği
- Kotor 1807-01-01→1814-01-01 `fransa-cumhuriyet`, sonra `avusturya`. LZMK `boka-kotorska` (kayıttaki kaynak)
  1813–14'te Boka'nın Karadağ ile birleşmesini anar; atlas bu dilimi atlıyor. **Teyitsiz**, LZMK'dan gün.
  **Sınıf:** EKSİK-DEVLET dilimi.

### 6.6 Lucca 1799–1815 tamamı "fransa-cumhuriyet"
- Lucca 1799-01-01→1815-06-09 `fransa-cumhuriyet` (kayıtta BEYANLI YAKLAŞIKLIK var). 1805–1814 **Lucca
  ve Piombino Prensliği** (Elisa Bonaparte) ayrı bir devletti; Piombino da (1804-01-01) aynı durumda.
  **Sınıf:** SINIR (beyanlı). **Öneri:** künye `lucca-piombino-prensligi` (1805-06-23 → 1814) — teyit gerekir.

---

## 7. KAYNAKSIZ maddeler

| Künye | Kaynaksız madde |
|---|---|
| `fransa` | 1792-09-22 "Krallık ilga edildi", 1798-07-01 (bkz. §5.7) |
| `fransa-cumhuriyet` | 1792-09-22, 1830-08-09, 1848-02-24, 1852-12-02, 1870-09-04, 1881-05-12 |
| `cezayir-fransiz` | 1830-07-05 |
| `fransiz-misir-seferi` | 4/4 madde (1798-07-21, 1798-08-01, 1799-07-25, 1801-10-02) |
| `fransiz-cinhindi` | 5/5 madde |
| `bretanya` | 0939-01-01, 1488-01-01, 1532-08-13 |
| `burgonya` | 4/4 madde |
| `savoya` | 1032-01-01, 1416-02-19, 1720-08-02 |

Rejim değişiklikleri (1830, 1848, 1852, 1870) haritada boya değiştirmediği için Değişmez 2'ye dokunmuyor;
ama kronolojinin omurgası ve kaynaksız. Öneri: Universalis "France — histoire" / Digithèque MJP anayasa
metinleri ile kaynak alanı.

---

## 8. Kronoloji maddelerinde gün/olay hataları

D2'ye dokunmayan ama "kronoloji haritayı doğrular" ilkesini bozan gün hataları (`kronoloji_fransa.js` ve
künye kronolojileri).

| Madde | Atlas | Kaynak | Teyit | Sınıf · Öneri |
|---|---|---|---|---|
| `kronoloji_fransa` "Fronde isyanının başlaması" | **1648-01-30** | arrêt d'union **13 Mayıs 1648**; barikatlar **26–27 Ağustos 1648** (Britannica 1911; encyclopedia.com "Fronde"; Universalis "Les barricades de 1648" başlığı). 30 Ocak 1648 Münster (İspanya–Hollanda) barış günüdür. | orta | TARİH-HATA → 1648-05-13 (parlamento Fronde'u) |
| `kronoloji_fransa` "Devrolma Savaşı'nın başlaması" | 1667-01-01 | Fransız ordusunun İspanyol Hollandası'na girişi **24 Mayıs 1667** (historyofwar.org; Larousse okunamadı) | zayıf | TARİH → 1667-05-24 (teyitle) |
| `kronoloji_fransa` "I. Mahmud'un kapitülasyonlara süreklilik kazandırması" | 1740-01-01 | gün bulunamadı; TDV `kapitulasyonlar` çekilemedi (arama sayfası döndü) | — | TDV ve DergiPark (dergipark.org.tr/tr/download/article-file/1680504) ile gün; hicrî beyan |
| `kronoloji_fransa` "Diplomatik Devrim" | 1756-01-01 | I. Versay Antlaşması **1 Mayıs 1756** (Larousse "guerre de Sept Ans" başlığı; Westminster 16 Ocak 1756 ayrı) | orta | TARİH → 1756-05-01 |
| `kronoloji_fransa` "Saint-Jean-de-Maurienne Antlaşması" | **1917-04-17** | konferans **19 Nisan 1917** (FRUS, Paris Peace Conference vol. 1 doc. 364, https://history.state.gov/historicaldocuments/frus1919Parisv01/d364) | orta (birincil neşir) | TARİH-HATA → 1917-04-19 |
| `kronoloji_fransa` "Yunanistan bağımsızlığının Bâbıâli'ye kabul ettirilmesi" | **1829-04-24** | bu güne karşılık gelen olay bulunamadı; TDV `edirne-antlasmasi-1829`: Edirne **14 Eylül 1829** (Yunan maddesi dahil); Londra Protokolü 3 Şubat 1830 | orta (TDV) | TARİH-HATA → 1829-09-14 (TDV esas) |
| `kronoloji_fransa` "Fransa'nın Cezayir'i işgali" | 1830-06-14 | 14 Haziran Sîdî Ferruc çıkarması; şehir 5 Temmuz (künye ile uyumlu) | — | doğru; başlığı "çıkarma" diye netleştir |
| `kronoloji_fransa` "Sykes-Picot" 1916-05-16, "Meysalun" 1920-07-24, "Ankara" 1921-10-20 | — | — | — | doğru |
| `cezayir-fransiz` "Alger, Oran, Konstantin üç département" | 1848-01-01 | 1848 Anayasası 4 Kasım 1848 (m. 109); département kararnamesi Aralık 1848 — gün doğrulanmadı | zayıf | TARİH → Digithèque MJP anayasa metniyle 1848-11-04 ya da kararname günü |
| `bretanya` "Çılgın Savaş'ta Fransa'ya yenilip vasal" | 1488-01-01 | Saint-Aubin-du-Cormier **28 Temmuz 1488**; Le Verger/Sablé Antlaşması 19/20 Ağustos 1488 (kaynaklar arası 1 gün fark) | orta | TARİH → 1488-07-28 (savaş) ya da 1488-08-20 (antlaşma) + kaynak |
| `burgonya` "Arras Antlaşması ile miras bölündü" | 1482-03-27 | Marie'nin ölümü 27 Mart 1482; **Arras Antlaşması 23 Aralık 1482** (Britannica "Treaties of Arras") | güçlü | ÇELİŞKİ → madde metnini "Burgonyalı Marie'nin ölümü" yap; Arras için 1482-12-23 ayrı madde |
| `fransiz-misir-seferi` künye t + madde "Fransızlar tahliye oldu, Amiens ile sefer resmen sona erdi" | 1801-10-02 | İskenderiye kapitülasyonu 30/31 Ağustos, yürürlük 2 Eylül 1801; Londra ön barışı 1 Ekim 1801; **Amiens 25 Mart 1802**. Haritada son Fransız `isg:` İskenderiye 1801-08-31'de bitiyor. | orta | ÇELİŞKİ + KAYNAKSIZ → künye t = 1801-09-02 (tahliye kapitülasyonu) ya da 1801-10-01 (Londra); "Amiens" ifadesi silinmeli. TDV `misir`/`ebukir` bakılmadı. |
| `yeni-fransa` "Cartier St. Lawrence Körfezi'ne girdi" | 1534-01-01 | künye f **1534-07-24** (Gaspé haçı) — aynı olay iki gün | — | ÇELİŞKİ → madde 1534-07-24 |
| `fransiz-hindistani` "fiilî devir" | 1954-10-31 | künye t ve Pondişeri kırılması 1954-11-01 | — | ÇELİŞKİ (1 gün) → tek gün |
| `kronoloji_fransa` "Toulon'un Osmanlı donanmasına üs" | 1543-01-01 | Barbaros'un Toulon'da kışlaması Eylül 1543–Mayıs 1544 | — | TARİH (TDV `barbaros-hayreddin-pasa` ile gün) |
| `kronoloji_fransa` "İlk tank saldırısı — Somme" | 1916-09-15 | Flers-Courcelette, İngiliz tankları (Fransız ilk tank harekâtı 16 Nisan 1917, Berry-au-Bac) | — | ÇELİŞKİ (içerik): Fransa kronolojisinde İngiliz olayı; ya `kapsam:"dis"` ya da 1917-04-16 Fransız ilk tank harekâtı |

**Bulunamayan / bakılmayan:** 1740 kapitülasyon günü, 1471 Amiens günü, Ljubljana/Karlovac 1813 günleri,
Kotor 1807 kesin günü, Cezayir département kararnamesi günü — bunlar "bulunamadı"dır, "yok" değildir.

---

## 9. Bulgu sayıları

| Sınıf | Adet |
|---|---|
| SESSİZ-DEĞİŞİM (hafif D2) | 1 sistemik + ≈63 açık tarih (81 kırılma) |
| TARİH-HATA / TARİH (harita) | 13 (§4.1, 4.3–4.12, 4.14) |
| SINIR / EKSİK-YERLEŞİM | 7 (§4.4, 4.13, 4.15, 5.3, 6.2, 6.3, 6.4) |
| ÇELİŞKİ | 10 (§5.1–5.7, §8'in 4 satırı) |
| EKSİK-DEVLET | 3 (Elba Prensliği, Boka–Karadağ 1813-14, Lucca-Piombino Prensliği) |
| HAYALET (künye ömrü dışı madde) | 2 (§5.7) |
| KAYNAKSIZ | 8 künyede 27 madde (§7) |
| Kronoloji gün hatası | 11 (§8) |
| **Toplam (sistemik D2 tablosu hariç)** | **≈ 54** |

Teyit derecesi "zayıf" olan 6 bulgu (§4.6, 4.7, 4.11, 4.13, Devrolma 1667, Cezayir 1848) düzeltme ÖNERİSİ
değil, **araştırma kalemi**dir: CLAUDE.md kaynak sırasıyla (Universalis/Persée/Gallica → Britannica/Cambridge)
teyit edilmeden veriye inmemeli.

## 10. Ölçülemeyenler / yapılmayanlar

- **`denetle.py` koşturulmadı** (UMIT hafif kip yasağı) ⇒ Değişmez 1/2/2s/3/8 resmî çıktısı yok; §3 hafif
  ölçümdür. Değişmez 8 (şehir bölgesi ülke sınırını aşamaz) ve üretilmiş harita (`coz-c` + petek)
  **ölçülmedi**: "harita yanlış" bulguları yalnız `s:` dönemlerinden ve nokta var/yok sorusundan çıkarıldı.
- Osmanlı dönemleri yerleşim kayıtlarında ayrı bir alandan (`s:` dışı) geliyor gibi görünüyor (Antakya,
  Kahire, Adana, Cezayir kayıtlarında 1516/1519–1918/1830 aralığı `s:`te yok) — bu boşlukların gerçek delik
  mi, başka katmandan mı dolduğu **ölçülmedi**; bu yüzden "(boşluk)" kırılmaları bulgu sayılmadı.
- Afrika (147 kayıt), Kuzey Amerika (36+12) ve Hindiçini (46) yerleşimlerinin tek tek gün denetimi
  yapılmadı; yalnız 1960 bağımsızlık günleri (Mali Fed. 06-20, Madagaskar 06-26, Dahomey 08-01, Nijer 08-03,
  Yukarı Volta 08-05, Fildişi 08-07, Çad 08-11, OAC 08-13, Kongo 08-15, Gabon 08-17, Moritanya 11-28, Gine
  1958-10-02, Cezayir 1962-07-05) bilinen günlerle karşılaştırıldı: **uyumlu**.
- Jülyen/Gregoryen: Fransa 1582-12-20'de geçti; 1582 sonrası Fransız günleri zaten Gregoryen. Rusya/Odessa
  1919 (CIUS kaynaklı) ve Britanya 1752 öncesi İngiliz kaynaklı günler (Calais 1558, Quebec 1629, Madras
  1746/1749) çevrilip çevrilmediği **ölçülmedi**.
- Hatay 1939: atlas 23 Haziran (antlaşma) kullanıyor; TDV'deki 29 Haziran (Hatay Meclisi kararı) ve 23 Temmuz
  (son Fransız birliklerinin çıkışı) ayrımı beyan edilmeli mi — Emre'ye bırakıldı (taraf tutan öneri yok).
