# İNGİLTERE DENETİMİ — 11 Kasım 2026 (DENETIM-1111)

Kapsam: İngiltere Krallığı (1281) → Büyük Britanya (1707) → Birleşik Krallık (1801) → bugün; Galler, İskoçya,
İrlanda zinciri; Fransa'daki İngiliz toprakları (Gaskonya, Normandiya 1417–50, Calais); İngiliz İmparatorluğu'nun
atlasta görünen parçaları (Kuzey Amerika/Karayipler, Hindistan'ın İngiliz tarafı, Akdeniz, Ortadoğu, Körfez,
dekolonizasyon). Afrika ve Avustralya kolonileri kapsam dışı tutuldu (yalnız kırılma tablosunda sayıldı).
**Yalnız denetim — `data/` altında hiçbir dosya değiştirilmedi.**

Yöntem:
- Künye zinciri `data/devletler.js`'ten node ile döküldü: 113 ilgili künye.
- Kronoloji: `kronoloji_ingiltere.js` + `kronoloji_cok_ingiltere.js`, toplam 290 madde.
- Yerleşim kırılmaları `arac/girdi.py yukle` ile ölçüldü. İngiliz künyelerine (+ harita anahtarlarına) giren ya da
  çıkan 2315 `s:` kırılması bulundu; bunlar 590 gün/taraf grubunda toplandı.
- Her grup, Değişmez 2 evrenindeki (`olaylar*.js`, `kronoloji_sinir*.js`) ve kronoloji_ingiltere maddeleriyle
  ±30 gün içinde eşlendi. Betik ve döküm scratchpad'de kaldı (`kirilma.py`); burada sonucu var.
- Kaynak denetimi 4 alt ajana dönem dönem verildi. Hepsi Opus, yalnız okudular. Bölümler aşağıda aynen birleştirildi:
  A 1281–1485 · B 1485–1714 · C 1714–1923 Britanya, Akdeniz, Ortadoğu, Körfez · D Amerika, Hindistan (İngiliz
  tarafı), 1923–bugün.
- Kaynak sırası şöyleydi. Önce İngiliz, İskoç, İrlanda ve Gal akademik kaynakları: BHO, legislation.gov.uk, DWB,
  rps.ac.uk, Oxford Reference, TNA, Hansard, DCB. Sonra dünya kaynakları. Osmanlı ve Ortadoğu maddelerinde TDV.
  **ODNB ve DIB bu turda açılamadı** (abonelik ya da erişim engeli). Bunlara dayanması gereken günler bölümlerde
  "aday" ya da "teyit şart" diye işaretli.

## Ölçüm ortamı ve ölçülemeyenler
- Ölçüm KASA'da, `claude/vigorous-merkle-5c76dd` worktree'sinde, `origin/main` = 7a3659d54 üstünde yapıldı.
  Ağaç geride değildi (0).
- **`py arac/denetle.py` bu ağaçta koşturulmadı (ölçülemedi).** Makine 19 eşzamanlı oturumla aşırı yüklüydü:
  `coz-c` fork hatasıyla ve uygulamanın kapanmasıyla yarım kaldı, `olaylari_yukle` MemoryError verdi.
  Değişmez 2'nin yerine yukarıdaki kendi ±30 gün ölçümü kullanıldı. Bu ölçüm, denetle'nin 2s kolundaki
  "yeri anma / tarafı anma" mantığına yakın ama aynısı değil. Resmî çıktı push kapısının ayrı worktree ölçümündedir.
- Üretilmiş harita (petek çıktısı) ölçülmedi. Bulgular veri (`s:` dönemleri) düzeyindedir.

## Sayılar
| | A | B | C | D | yapısal (koord.) | toplam |
|---|---|---|---|---|---|---|
| künye | 11 | 13 | 22 | 24 | 113 tarandı | ~70 ayrı künye derin denetlendi |
| kronoloji maddesi | 61 | 89 | 142 okundu / ~30 derin | ~120 | 290 | |
| kırılma grubu | 41 | 51 | 71 | ~250 | 590 sınıflandı | |
| bulgu başlığı | 29 (33 tespit) | 18 | 19 | 40 | 9 | **~115** |

Kırılma sınıflaması (590 grup, ±30 gün):
- YER-MADDELİ 141 · TARAF-MADDELİ 136.
- ALAKASIZ-YAKIN 124 (+98 ilk dönem): ±30 günde madde var, ama başka bir olayı anlatıyor.
- YALNIZ-KÜNYE-MADDESİ 37 (+22 ilk dönem): tek madde `devletler.js` künye kronolojisinde; Değişmez 2 evreninde
  değil.
- MADDESİZ 28 (+4 ilk dönem).
- "İlk dönem" kuruluş, keşif ya da koloni açılışı demek; toprak devri olmayabilir.
- **Yaklaşık 189 grubun (ilk dönemler hariç) gerçek anlamda maddesi yok ya da maddesi ilgisiz.**
  Dağılım: Hindistan fetihleri, Hollanda Doğu Hint, Batı Afrika, Kuzey Amerika, Yüz Yıl Savaşları.

## EN ÖNEMLİ BULGULAR (koordinatör özeti)
1. **Menorka 1708–1802 kesintisiz "ingiltere"** (C). Fransız dönemi (1756–63) ve İspanyol dönemi (1782–98)
   yok. SESSİZ-DEĞİŞİM, önem 1.
2. **İyon Adaları 1809–1814 İngiliz işgali yok** (C, TDV "Yedi Ada"); Korfu 1814, Parga 1814. Ayrıca **Remle
   1917-01-01'de** İngiliz'e geçiyor, gerçek gün 15 Kasım 1917. Irak'ta 13 yerleşim tek blokta 1917-03-11'de
   geçiyor (C).
3. **"1923-10-29 ufku" kalıntıları** (D, C). `ingiliz-kuzey-amerika.t=1923-10-29` ve `kanada` ile 1867–1923
   çakışma. Fort St. Pierre'de uydurma kanada→abd kırılması. Halâib'de yapay kırılma. Üç kayıt, düşük riskli iş.
4. **Jülyen kalmış yerleşim günleri ve İrlanda 1603** (B, D):
   - İrlanda: 15 yerleşim ve `irlanda.t` Mellifont'un Jülyen günü 1603-03-30'da kalmış; Gregoryen 1603-04-09.
   - Jülyen kalan öteki açılışlar: Spanish Town 1655-05-10 (Gregoryen 05-20), Halifax 1749-06-21 (Gregoryen
     07-02), Madras, Kalküta 1690, Boston, Philadelphia, Bridgetown. Hepsi beyansız.
   - `kronoloji_ingiltere.js` maddeleri ise sistemli çevrilmiş ve beyanlı (temiz).
5. **İskoçya 1650–1660 ve Man Adası** (A, B):
   - İskoçya: Edinburg 1650'de, 5 şehir 1652'de geçiyor; Wick, Stornoway, Kirkwall, Lerwick, Iona ve Dumbarton
     hiç geçmiyor, haritada hayalet İskoç krallığı kalıyor.
   - Man Adası 1399'a kadar İskoç boyalı; 1333–1399 Montagu/Scrope lordlukları İngiliz'di.
   - Berwick ve Edinburgh 1296 kırılmaları yıl başına çekilmiş; gerçek günler 1296-03-30 ve 1318-04-02.
6. **Körfez himayesinin üç ayrı boyası** (C). Bahreyn, Abu Dabi, Ras el-Hayme ve Şârika "ingiltere"; Dubay
   "trucial-states"; Kuveyt ve Katar kendi künyesiyle. Kıbrıs 1878-06-04 imza günü; TDV fiilî devri 15 Temmuz
   1878 veriyor (ÇELİŞKİ). İskenderiye 1882 işgali Tel el-Kebir gününe (09-13) eşitlenmiş; TDV 11 Temmuz.
   → **Emre kararı gerekiyor:** himaye "İngiliz boyası" mı, "yerel devlet + vassal katmanı" mı?
7. **Kronoloji boşlukları** (D, A):
   - 1923 sonrası İngiliz kronolojisi boş; yaklaşık 25 madde eksik (Westminster 1931, İrlanda 1937/49, Süveyş,
     Kuveyt 1961, Hong Kong 1997, Falkland 1982 …).
   - Hindistan fetihleri 1757–1856 büyük ölçüde maddesiz.
   - Normandiya ve Gaskonya'nın 10 kırılması maddesiz (Caen, Cherbourg, Rouen 1417–19/1449–50, Bayonne 1451,
     La Rochelle 1372); Calais 1347'nin maddesi yok.
8. **Hudson Körfezi 1686–1714 Fransız işgalleri** yok (B, DCB). Yeni Fransa'nın düşüşü haritada 1763'e kadar
   görünmüyor: Québec 1759 ve Montréal 1760 kronolojide var, haritada yok. Louisbourg 1745/1758 yok (D).
9. **Mükerrer ya da çakışan künyeler.**
   - Malta: `malta-ingiliz` (f=1800-09-05) ile `malta-kolonisi` (f=1800-01-01) aynı polity; ikincisi
     `malta-fransiz` (→1800-09-04) ile çakışıyor.
   - Akrotiri-Dikelya iki kez (D).
   - `irlanda` (→1603) ile `ingiltere-irlanda-krallik` (1541→) 1541–1603 çakışıyor; künyede "UYARI" var, karar
     verilmemiş.
10. **Siyasi hassas** (taraf tutulmadı; iki tarafın kaynakları bölümlerde): Cebelitarık 1704/1713, Menorka
    1708/1713, Falkland 1833/1982, Kıbrıs 1878–1960 ve üsler, Kuzey İrlanda 1922 (C: doğru tarafta, temiz),
    Belize, Halâib, Chagos, Musul 1918.

## Y. Yapısal bulgular (koordinatör ölçümü, kaynak gerektirmeyen)

### Y1. Kaynaksız künye kronoloji maddeleri — KAYNAKSIZ
- Liste: `ingiltere` 6 maddesi (1581, 1799, 1827, 1840, 1878, 1914) · `iskocya` 4 · `irlanda` 4 ·
  `irlanda-serbest-devlet` 3 · `gwynedd` 3 · `glyndwr-galler` 3 · `kibris-ingiliz` 2 · `ingiliz-hindistani` 5 ·
  `ingiliz-kuzey-amerika` 2 · `kanada` 5 · `kuveyt` 4 · `bahreyn` 4 · `katar` 4 · `umman` 3 · `ingiliz-malaya` 4 ·
  `abd` 5 · `misir-kavalali` 6.
- Toplam 70'i aşkın madde `kaynak:` taşımıyor.
- Öneri: teyit kampanyasına ekle. Aynı olayın `kronoloji_ingiltere.js`'te kaynaklı ikizi varsa (çoğunda var)
  kaynak oradan alınır, gün karşılaştırılır.

### Y2. Künye `kaynak:` alanı yalnız bir anahtar sözcük — KAYNAKSIZ
- Liste: `ingiltere` ("ingiltere") · `kibris-krallik`, `kibris-ingiliz` ("kibris") · `umman` ("uman") ·
  `kuveyt` · `bahreyn` · `katar` · `ingiliz-hindistani` ("hindistan") · `ingiliz-malaya` ("malezya") ·
  `ingiliz-kuzey-amerika` ("kanada").
- `kuzey-borneo-tac-kolonisi`nin kaynağı yalnız Vikipedi.

### Y3. `ingiltere` künyesi
- `f=0927-01-01` (yıl teyitli), `t` yok (pencere ucu).
- `ozet` yalnız Osmanlı-ticaret cümlesi; 1707/1801 ad değişimleri künyede madde olarak yok
  (kronoloji_ingiltere.js'te var).
- Atlas Birleşik Krallık'ı tek `ingiltere` boyasıyla sürdürüyor. 1707 ve 1801 kırılma gerektirmiyor
  (C: temiz).

### Y4. HAYALET: `s:` dönemi künye ömrünü aşıyor
- **Kalküta:** `s` 1757-01-02 `ingiliz-hindistani`, oysa künye f=1757-06-23; 172 gün erken. D de buldu.
  Öneri: 1757-01-02..06-23 dönemi `d:"ingiltere"` olsun.
- **Malaka:** `s` 1825-03-01 `ingiliz-malaya`, künye f=1826-01-01. Öneri: 1825-03-01..1826-01-01
  `ingiltere`, ya da künye f'si Boğaz Yerleşimleri'nin kuruluş gününe çekilir (kaynakla).
- **Umman (Zufâr):** 13 yerleşim (Salala, Mirbât, Masira, …) `s` 1515-04-01'den `umman`, künye f=1624-01-01.
  Ras el-Hayme 1622-05-01 de aynı durumda. C, Kavâsım künyesinin eksik olduğunu yazıyor.

### Y5. Zincir boşlukları
- **Aden:** `aden-kolonisi.t=1963-01-18` (Güney Arabistan Federasyonu'na katılış), ardılı `guney-yemen.f=1967-11-30`.
  Arada **Güney Arabistan Federasyonu (1962/63–1967) künyesi yok** → EKSİK-DEVLET. Haritada Aden 1839–1967
  `ingiltere` boyalı, bu yüzden delik yok.
- **Künyesi olup haritada hiç kullanılmayanlar** (haritada hepsi `ingiltere`): `ingiltere-irlanda-krallik`,
  `jamaika-ingiliz`, `on-uc-koloni`, `ingiliz-tanca`, `cebelitarik-ingiliz`, `barbados-ingiliz`, `aden-kolonisi`.
  Künye f/t ile yerleşim günü arasında sessiz farklar var:
  - Tanca: künye 1661-01-01..1684-02-01, yerleşim 1662-01-30..1684-01-01.
  - Jamaika: künye f=1655-01-01, yerleşim 1655-05-10.
  - On Üç Koloni: künye f=1607-01-01, Jamestown 1607-05-23.

### Y6. Ömür dışı künye maddeleri
- `irlanda-serbest-devlet` (1922-12-06→) künyesinde 1919-01-21 ve 1921-12-06 maddeleri var. Bunlar
  `irlanda-dail-cumhuriyeti` künyesine taşınmalı.
- `ingiliz-malaya` (1826→) künyesinde 1819-01-01 ve 1819-02-06 maddeleri var: aynı olay iki günle.
  1819-02-06 doğru (Raffles–Hüseyin Şah antlaşması); 1819-01-01 silinmeli.

---



## Bölüm A — 1281–1485 (Galler, İskoçya, Gaskonya, Yüz Yıl Savaşları, Calais)

(alt ajan raporu, aynen)

### Bulgu A — İngiltere zinciri 1281–1485

Ölçüm: worktree vigorous-merkle-5c76dd (KASA), scratchpad dökümleri (madde_A.txt, kirilma.txt, devletler.json, yerlesim_ing.json) + Grep data/yerlesimler*.js. Hiçbir depo dosyası değiştirilmedi.
Takvim: dönemin tamamı 1582 öncesi → kaynaktaki Jülyen gün yazılır; çevirim gerekmez. Ocak–24 Mart olaylarında (1327-01-25, 1328-03-17, 1437-02-21, 1472-02-20) atlas modern yılı kullanıyor — doğru.

### A. Man Adası

#### Man Adası 1333–1399 İngiliz lordluğu haritada İskoç
- Kimlik: data/yerlesimler_avrupa.js:108 Douglas (Man); Peel (Man), Castletown (Man) — `1266-07-02/1281-01-01..1399-10-19 iskocya`, `1399-10-19..1765-05-10 ingiltere`.
- Atlasta: ada 1399'a dek İskoç; 1399-10-19 (IV. Henry'nin Henry Percy'ye bağışı) İngiliz'e geçiş günü.
- Kaynak: İngiliz lordları zinciri Montagu (1333–1344) → II. Salisbury (1344–1392) → Scrope (1392/93 satın alma; 1399 idam, ada Taç'a düştü) → 1399 Percy → 1405 Stanley. III. Edward 9 Ağustos 1333'te adaya dair kraliyet iddiasından Montagu lehine vazgeçti; Montagu'nun adayı fiilen İskoçlardan alışı 1333 sonrası (yılı kaynaklarda 1333–1343 arasında dağılıyor). 1265–1333 arası el değiştirme listesi: İskoç 1265–1290, 1293–1296, 1313–1317, 1328–1333; İngiliz 1290–1293, 1296–1313, 1317–1328 (bu liste yalnız Wikipedia «King of Mann»da bulundu — akademik teyit gerek: ODNB «Montagu, William, first earl of Salisbury», Oxford Companion to British History «Man, Isle of»). Hever Castle sitesi ve Wikipedia «William Scrope» 1392/93 satışını ve 1399 Taç'a düşüşü verir. Sonuç: 1399 bir egemenlik değişimi değil, İngiliz tacı içinde lordun değişmesidir; ada 1399'dan en az 10 yıl, büyük olasılıkla 66 yıl önce İngiliz'dir.
- Açılamadı: isle-of-man.com/manxnotebook (401).
- Sınıf: TARİH-HATA / SINIR
- Öneri: Peel/Castletown/Douglas: `1266-07-02..1290-06-? iskocya`, `1290..1293 ingiltere` (isteğe bağlı), `..1333 iskocya`, `1333-xx..1765-05-10 ingiltere` (Montagu'nun alış yılı, yıl hassasiyeti + beyan). 1399-10-19 kırılması silinir (madde "Percy'ye bağış" olarak kalabilir, sahiplik değişmez).
- Önem: 2

### B. İskoçya / Berwick / Edinburgh

#### Berwick ve Edinburgh 1296-01-01 — gün biliniyor, kırılma Edward'ın sınırı geçişinden 3 ay önce
- Kimlik: data/yerlesimler_avrupa.js:112 Berwick-upon-Tweed; data/yerlesimler.js:1209 Edinburg; kronoloji_ingiltere.js maddeleri 1296-01-01 «Berwick'in yağmalanması» ve «Edinburgh Kalesi … üç günlük kuşatma».
- Atlasta: ikisi de 1296-01-01 (Berwick kaydı: "gün 1296-03-30, TEYIT-KARAR-1014 ile yıla indirildi").
- Kaynak: Berwick 30 Mart 1296'da alındı ve yağmalandı; Edinburgh Kalesi Haziran 1296 ortasında teslim oldu (Edward 6 Haziran'da geldi; kuşatma birkaç gün). Edinburgh maddesinin kaynağı World History Encyclopedia (popüler site — kaynak kuralı dışı).
- Sınıf: TARİH-HATA (yıl başına indirilen gün haritayı 3–5 ay erken boyuyor; kırılma sınıra bağlı olduğu için "[yalnız yıl teyitli]" notuyla kalmalıydı, ya da gün teyit edilmeli)
- Öneri: Berwick 1296-03-30; Edinburgh 1296-06-? (gün akademik kaynakla teyit; ODNB «Edward I» / RCAHMS Edinburgh Castle). Edinburgh maddesinin kaynağı değiştirilmeli.
- Önem: 2

#### Berwick 1318, 1461, 1482 — günleri biliniyor, yıl başında duruyor
- Kimlik: Berwick-upon-Tweed s: 1318-01-01, 1461-01-01, 1482-01-01; madde_A aynı günler. Kaynak: Newcastle Üniv. Special Collections blogu (akademik değil).
- Kaynak: İskoçlar Berwick kasabasını 1–2 Nisan 1318 gecesi aldı (kale ~Temmuz 1318); Margaret of Anjou Berwick'i 25 Nisan 1461'de İskoçlara teslim etti; Gloucester Dükü Richard kasabayı Temmuz sonu, kaleyi 24 Ağustos 1482'de aldı (ODNB «Richard III»).
- Sınıf: TARİH-HATA (yıl başı → kırılma 3–8 ay erken)
- Öneri: 1318-04-02 · 1461-04-25 · 1482-08-24; kaynak ODNB / History of Parliament ile değiştirilmeli.
- Önem: 2

#### Edinburgh 1335 ve 1341 — Vikipedi tek dayanak
- Kimlik: kronoloji_ingiltere.js 1335-01-01 ve 1341-01-01 maddeleri (kaynak: «Wikipedia 'Edinburgh Castle' — akademik teyit bekler»); Edinburg s: 1335-01-01..1341-01-01 ingiltere.
- Kaynak: Edinburgh Kalesi'ni William Douglas 16/17 Nisan 1341'de hile ile aldı (Oxford Companion to Scottish History «Douglas, Sir William, of Liddesdale»); İngiliz yeniden tahkimi 1335 yazı/sonbaharı. Ayrıca 1334-06-12 Newcastle antlaşmasıyla Edward Balliol güney İskoç kontluklarını (Edinburgh, Roxburgh, Berwick, Dumfries, Peebles…) III. Edward'a bıraktı — haritada yalnız Edinburgh yansıyor.
- Sınıf: KAYNAKSIZ + TARİH-HATA
- Öneri: 1341-04-17; 1335 için akademik kaynak (ODNB «Edward III» / Nicholson, Edward III and the Scots 1965).
- Önem: 2

#### 1296–1304 ve 1334–1340 İngiliz işgali yalnız iki noktada
- Kimlik: Glasgow, Perth (İskoçya), Dumfries, Stirling(nokta yok), Roxburgh (nokta yok) — hepsi 1281–1652 kesintisiz iskocya.
- Kaynak: 1296'da Balliol 10 Temmuz'da tahttan feragat etti, İskoçya I. Edward'ın doğrudan yönetimine girdi (1297 Wallace isyanına dek); 1334'te güney kontluklar resmen İngiltere'ye bırakıldı.
- Sınıf: SINIR (tasarım kararı — beyan edilmeli)
- Öneri: Ya 1296-07-10..1297-09-11 bütün İskoçya ingiltere (Stirling Köprüsü ile geri), ya da kronolojide "harita yalnız Berwick/Edinburgh kalelerini gösterir" beyanı. Dumfries'e 1334-06-12..(1340'lar) ingiltere dönemi düşünülmeli.
- Önem: 3

#### TEYIT-KARAR-1014 sınıra bağlı maddeleri yıl başına indirmiş (kural ihlali)
- Kimlik: kronoloji_ingiltere.js:1952 (Edinburgh 1296, ic_not_t «kaynak yalnız Haziran 1296 (ay) verir; yıla indirildi»); Berwick-upon-Tweed s: 1296 («gün 1296-03-30, TEYIT-KARAR-1014 ile yıla indirildi»).
- Atlasta: harita kırılması da 1296-01-01'e taşınmış.
- Kural (CLAUDE.md Teyit kampanyası): yalnız yıl teyitli madde **sınıra bağlı değilse** YYYY-01-01'e iner; bağlıysa "[yalnız yıl teyitli; gün teyitsiz]" notuyla kalır. Bu iki madde sınıra bağlı; indirme haritayı 3–5 ay erken boyadı.
- Sınıf: ÇELİŞKİ (kural uygulama hatası)
- Öneri: 1014 kararıyla indirilmiş ve kirilma.txt'de kırılma taşıyan bütün maddeleri tara (bu dönemde: Berwick 1296, Edinburgh 1296; ayrıca kaynağı ay veren Brétigny 1360-05, Model Parlamento 1295-11 sınıra bağlı değil, onlar kalabilir). Berwick 1296-03-30, Edinburgh 1296-06 için gün aranmalı.
- Önem: 2

#### Orkney/Shetland ilhakı 1472-02-20 — MADDESIZ; Shetland yanlış künyede
- Kimlik: data/yerlesimler_avrupa.js:131 Kirkwall (Orkney), Lerwick (Shetland) — `1281-01-01..1472-02-20 orkney-kontlugu`, `1472-02-20..1707 iskocya`. kirilma.txt: 1472-02-20 MADDESIZ n=2.
- Kaynak: 20 Şubat 1472 ilhak günü birden çok kaynakta (Shetland Museum & Archives «550 Years Ago»; The Orcadian; Scotsman) — rps.ac.uk kaydı arama ile bulunamadı, okunmadı. Rehin: Orkney 8 Eylül 1468, Shetland 28 Mayıs 1469. **Shetland 1195'ten beri Orkney kontluğundan ayrılmış, doğrudan Norveç tacına bağlıydı** (Kral Sverre'nin 1195 el koyması) — Lerwick'in `orkney-kontlugu` olması yanlış; doğru sahip `norvec-kralligi` (devletler.js:5135, f 872 t 1537 — ömür kapsar).
- Sınıf: EKSİK-MADDE + SINIR
- Öneri: kronoloji_ingiltere.js (ya da İskoçya kronolojisi) 1472-02-20 «İskoç Parlamentosu Orkney ve Shetland'ı tâca ilhak etti» maddesi; kaynak RPS (rps.ac.uk, 1472 parlamentosu) aranıp yazılmalı. Lerwick s: `1281-01-01..1472-02-20 norvec-kralligi` (1195 ayrılığı için kaynak: Imsen, «Orkney» SSNS 2003 — zaten künyede atıflı). İsteğe bağlı: 1468-09-08 / 1469-05-28 rehin maddeleri (fiilî İskoç yönetimi rehinle başladı — beyan).
- Önem: 2

### C. Galler

#### Rhuddlan Statüsü 1284-01-01 — gün 3 Mart (yapılış) / 19 Mart (ilan)
- Kimlik: data/kronoloji_ingiltere.js:163.
- Atlasta: 1284-01-01, ic_not_t: güvensiz kaynakta 1284-03-19; güvenilir kaynak yalnız yıl (1014 indirimi).
- Kaynak: Oxford Companion to British History (encyclopedia.com) yalnız «1284»; ansiklopedik kaynaklar ayrımı 3 Mart 1284 kraliyet buyruğu, 19 Mart 1284 Rhuddlan'da ilan olarak verir — akademik birincil (Ivor Bowen, The Statutes of Wales 1908; ODNB «Edward I») ile teyit edilmedi.
- Sınıf: TARİH-HATA değil; harita kırılması 1283-10-03'e bağlı, madde sınıra bağlı değil → kural gereği 01-01 kabul edilebilir. Yalnız kayıt: gün akademik kaynakta bulunursa 1284-03-03.
- Önem: 3

#### Caernarfon/Harlech: Gwynedd 1283-10-03'e dek, ama İngiliz kaleleri 1283 yazında
- Kimlik: data/yerlesimler_avrupa.js:93 Caernarfon (gwynedd → 1283-10-03), :102 Harlech (f 1283-01-01 ingiltere, Gwynedd toprağı içinde); gwynedd künyesi t 1283-10-03.
- Atlasta: Harlech 1283 başından İngiliz iken çevresi (Caernarfon, Aberffraw) Ekim'e dek Gwynedd. Harlech'in ilk dönemi (1283-01-01) Galler direnişi sürerken başlar.
- Kaynak: Gwynedd'in son kalesi Castell y Bere 25 Nisan 1283'te düştü, Dafydd Haziran 1283'te yakalandı, Caernarfon ve Harlech kalelerinin inşası 1283 yazında başladı (DWB «Dafydd ap Gruffydd»; Cadw kale rehberleri). 3 Ekim 1283 idam günüdür (DWB teyit: «3 October 1283 … suffered a traitor's death»).
- Sınıf: ÇELİŞKİ (küçük)
- Öneri: Gwynedd t'yi idam günü olarak bırakmak savunulabilir; o zaman Harlech f 1283-10-03 olmalı (ya da Harlech'in ilk dönemi 1283-01-01'den gwynedd olarak açılmalı). Alternatif: t = Dafydd'in yakalanışı (21/22 Haziran 1283) — kaynak teyidiyle.
- Önem: 3

#### Powys t=1283-01-01 olaysız; Mathrafal ardılsız kapanıyor (MADDESIZ)
- Kimlik: devletler.js powys (t 1283-01-01, ic_not «1283 yıl olarak sayfada yok ('By 1300')»); data/yerlesimler_once1281_yt_yer3.js:143 Mathrafal `0850..1283-01-01 powys`, `bit:"1283-01-01"`. kirilma.txt 1283-01-01 «powys -> (boş/ardıl yok)» ALAKASIZ-YAKIN.
- Kaynak: Powys Wenwynwyn 1277'den beri İngiliz tacının müttefiki/baronluğu (DWB «Gruffydd ap Gwenwynwyn»); Powys Fadog 1282 savaşından sonra İngiliz marcher lordlarına (Bromfield-Yale, Chirk) dağıtıldı. 1283-01-01 hiçbir olayı tarihlemiyor.
- Sınıf: KAYNAKSIZ + EKSİK-MADDE
- Öneri: t için olay seç ve kaynakla: Powys Fadog için 1282 (Llywelyn'in ölümü 1282-12-11 ile birlikte) ya da Wenwynwyn için Gruffudd ap Gwenwynwyn'in ölümü (1286) — DWB ile. Mathrafal'ın bit'inden sonra toprağın kime emildiğini (Shrewsbury/Aberystwyth → ingiltere) bir madde ile söyle.
- Önem: 3

#### Glyndŵr kaleleri — kaynaklar popüler, günler yıl başında
- Kimlik: Aberystwyth (:97) 1404/1408, Harlech (:102) 1404/1409; madde_A 1404-01-01 ×2, 1408-01-01, 1409-01-01, 1415-01-01 («el-kitabi»).
- Kaynak: DWB yalnız 1404 alışını verir; 1408 için owain-glyndwr.wales (popüler site) kullanılmış. Aberystwyth'in teslimi Eylül 1408 sonu, Harlech'in düşüşü Şubat 1409 (R. R. Davies, The Revolt of Owain Glyn Dŵr, OUP 1995 — okunmadı).
- Sınıf: KAYNAKSIZ
- Öneri: Davies 1995 / ODNB «Owain Glyn Dŵr» ile 1408 ve 1409 aylarını teyit et; 1415 «sönümlendi» maddesine kaynak yaz (el-kitabi tek dayanak).
- Önem: 3

### D. Fransa'daki İngiliz toprakları

#### Calais 1347-08-03 kırılmasının maddesi yok
- Kimlik: data/yerlesimler_avrupa.js:182 Calais `1347-08-03..1558-01-07 ingiltere`; kirilma.txt 1347-08-03 ALAKASIZ-YAKIN (Behmenî maddesi).
- Kaynak: teslim günü kaynaklarda 3 ve 4 Ağustos 1347 arasında ayrışır: Britannica «Siege of Calais» ve çoğu İngilizce kaynak 3 Ağustos; British History Online, Dorothy Greaves «Calais under Edward III» «the 4th of August, 1347» der. (Teslim işareti 1 Ağustos, Edward'ın girişi 3 Ağustos diyen anlatı da var.)
- Sınıf: EKSİK-MADDE
- Öneri: kronoloji_ingiltere.js 1347-08-03 «Calais 11 aylık kuşatmadan sonra III. Edward'a teslim oldu»; ic_not'ta 3/4 Ağustos ayrışması iki kaynakla (BHO Greaves 4 Ağustos).
- Önem: 2

#### Brétigny: kronolojide 1360-01-01, künyede 1360-05-08, haritada 1360-10-24 — aynı olay üç gün
- Kimlik: kronoloji_ingiltere.js:261 (1360-01-01); devletler.js akitanya-dukaligi kronoloji 1360-05-08; Poitiers/La Rochelle/Limoges kırılması 1360-10-24 (olaylar_fransa_kontrol_1027.js «Calais Antlaşması»).
- Kaynak: Brétigny ön antlaşması 8 Mayıs 1360, Calais'de onay 24 Ekim 1360 (A Dictionary of British History «negotiations commenced in May 1360 at Brétigny»). Toprakların fiilî teslimi 1361 boyunca (Chandos'un Poitou'yu devralışı).
- Sınıf: ÇELİŞKİ
- Öneri: kronoloji_ingiltere maddesini «Brétigny ön antlaşması» 1360-05-08 yap (künye ile aynı gün, kaynağı Oxford ay veriyor + Sumption, Trial by Fire), harita 1360-10-24 Calais onayında kalsın; iki madde birbirine atıf versin.
- Önem: 2

#### Limoges 1370-01-01 ve Poitiers 1372-01-01 — olay günleri biliniyor
- Kimlik: data/yerlesimler_avrupa.js:207 Limoges `..1370-01-01 ingiltere`; :200 Poitiers `..1372-01-01 ingiltere`. kirilma.txt: 1370-01-01 TARAF-MADDELI (ilgisiz Chimu maddesi), 1372-01-01 ALAKASIZ-YAKIN (Bizans maddesi).
- Kaynak: Limoges sitesi (cité) Piskopos Jean de Cros eliyle 21 Ağustos 1370 (bazı kaynaklar 24 Ağustos) Berry Dükü'ne teslim oldu; Kara Prens 19 Eylül 1370'te şehri basıp yağmaladı (Froissart; Cambridge «Sack of the City of Limoges 1370 reconsidered», Journal of Medieval Military History XXI). Poitiers du Guesclin'e Ağustos 1372'de (7 Ağustos?) açıldı — gün teyit edilemedi.
- Sınıf: TARİH-HATA + EKSİK-MADDE (Ocak 1 günleri olayları 7–8 ay önceye çekiyor)
- Öneri: Limoges `..1370-08-21 ingiltere`, isteğe bağlı 1370-09-19..(1371) ingiltere yeniden; Poitiers 1372-08 (gün Sumption, Divided Houses 2009 ile); her biri için Yüz Yıl Savaşları maddesi.
- Önem: 2

#### La Rochelle 1372-09-08 MADDESIZ
- Kimlik: :206 La Rochelle; kirilma.txt MADDESIZ.
- Kaynak: 22–23 Haziran 1372 La Rochelle deniz savaşı (Kastilya donanması İngiliz filosunu yendi), kent Eylül 1372 başında Fransızlara açıldı (gün kaynakla teyit edilemedi, atlas 8 Eylül).
- Sınıf: EKSİK-MADDE
- Öneri: 1372-06-23 «La Rochelle deniz savaşı» + 1372-09-08 «La Rochelle Fransa'ya geçti» maddesi (kaynak Sumption III veya Oxford Encyclopedia of Medieval Warfare).
- Önem: 2

#### Normandiya fethi ve kaybı — 6 kırılma MADDESIZ, günler kaynakla uyumlu
- Kimlik: :177 Caen 1417-09-04 / 1450-06-24; :178 Cherbourg 1418-09-29 / 1450-08-12; :176 Rouen 1419-01-19 / 1449-10-29 — kirilma.txt hepsi MADDESIZ ya da ALAKASIZ-YAKIN.
- Kaynak: Cherbourg savunucuları 22 Ağustos 1418'de yardım gelmezse 29 Eylül'de teslim sözü verdi (Cambridge, «Soldiers, Nobles and Gentlemen», «Foe within: treason in Lancastrian Normandy») — 1418-09-29 teyit. Caen 4 Eylül 1417 (şehir; kale 20 Eylül), Rouen 19 Ocak 1419, Rouen 29 Ekim 1449 kapitülasyon (10 Kasım VII. Charles girişi), Caen 24 Haziran 1450 (teslim 1 Temmuz), Cherbourg 12 Ağustos 1450 — yaygın akademik anlatıyla uyumlu (Sumption/Barker okunmadı).
- Sınıf: EKSİK-MADDE
- Öneri: kronoloji_ingiltere.js'e 1417-09-04 «V. Henry Caen'ı aldı — Normandiya fethi başladı», 1418-09-29 «Cherbourg teslim oldu», 1419-01-19 «Rouen teslim oldu», 1449-10-29 «Rouen VII. Charles'a teslim oldu», 1450-06-24 «Caen teslim», 1450-08-12 «Cherbourg teslim — Normandiya kaybedildi»; Formigny (15 Nisan 1450) maddesi de eksik.
- Önem: 2

#### Troyes 1429-07-10 ve Reims 1429-07-16 MADDESIZ
- Kimlik: data/yerlesimler_avrupa (Troyes, Reims) `1420-05-21..1429-07-10/16 ingiltere`.
- Kaynak: Jeanne d'Arc'ın taç giyme yürüyüşü: Troyes 10 Temmuz 1429'da teslim, VII. Charles Reims'e 16 Temmuz'da girdi, 17 Temmuz taç giydi. Not: Troyes/Reims 1420–29 Anglo-Burgonya rejimindeydi; ingiltere boyası beyanlı yaklaşıklık olmalı.
- Sınıf: EKSİK-MADDE
- Öneri: 1429-07-17 «VII. Charles Reims'te taç giydi» (Troyes ve Reims'i anan) + Orléans 1429-05-08 maddesi (yalnız fransa künyesinde var).
- Önem: 2

#### Meaux 1422-01-01 / 1439-01-01 — günler biliniyor
- Kimlik: Meaux `1422-01-01..1439-01-01 ingiltere` (kronoloji_sinir_once1281_geriye.js maddeleri aynı günlerde).
- Kaynak: Meaux kuşatması Ekim 1421–Mayıs 1422; Marché kalesi 10 Mayıs 1422'de teslim (kasaba Mart 1422; bazı kopyalarda 9/11 Mayıs) — akademik: R. Ambühl, «Henry V and the administration of justice: the surrender of Meaux (May 1422)», Journal of Medieval History (eprints.soton.ac.uk/400142). 1439 Richemont'un geri alışı Ağustos/Eylül 1439 (gün okunmadı).
- Sınıf: TARİH-HATA
- Öneri: 1422-05-10 (Ambühl), 1439 gününü Sumption IV ile; şimdilik "[yalnız yıl teyitli]" notu.
- Önem: 2

#### Le Mans 1425–1448 İngiliz dönemi eksik
- Kimlik: data/yerlesimler_avrupa.js:199 Le Mans `1281..1792 fransa`.
- Kaynak: Le Mans 1425'te Salisbury seferinde İngilizlere geçti (gün teyit edilemedi; Ağustos 1425 aday) ve 15/16 Mart 1448'de Tours ateşkesi gereği Matthew Gough ve Fulk Eyton eliyle VII. Charles'a teslim edildi (thehundredyearswar.co.uk ve Barker, Conquest 2009 anlatısı: 15 Mart 1448).
- Sınıf: SINIR + EKSİK-MADDE (Maine'in iadesi, Lancaster rejiminin büyük siyasi olayı)
- Öneri: Le Mans `1425-08-?..1448-03-15 ingiltere` (f gün akademik kaynakla), madde 1448-03-15 «Le Mans/Maine Fransa'ya iade edildi».
- Önem: 2

#### Brest (1342/1378–1397) ve Cherbourg (1378–1394) İngiliz garnizon kentleri gösterilmiyor
- Kimlik: :170 Brest `1281..1532 bretanya`; :178 Cherbourg `..1418-09-29 fransa`.
- Kaynak: Brest 1342'den İngiliz garnizonunda, 1378'de V. Jean (Montfort) tarafından II. Richard'a kiralandı, 1397'de iade; Cherbourg 1378'de Navarralı II. Charles tarafından İngilizlere kiralandı, 1394'te iade (Sumption III, Divided Houses; okunmadı — kaynakla teyit gerekir). Ayrıca Cherbourg 1354–1404 Navarra (Cotentin) elindeydi; atlas fransa diyor.
- Sınıf: SINIR
- Öneri: kaynak teyidinden sonra Brest `1378..1397 ingiltere`, Cherbourg `(1354..1378 navarra?)`, `1378..1394 ingiltere`. Düşük öncelikli tasarım kararı.
- Önem: 3

#### Bordeaux 1294–1303 Fransız işgali haritada yok; Bayonne 1294–1295
- Kimlik: data/yerlesimler.js:1213 Bordo `1281-01-01..1451-06-30 ingiltere` kesintisiz; :209 Bayonne aynı. Künye akitanya-dukaligi 1294-05-19 müsadere ve 1303-05-20 iade maddelerini taşıyor (kaynakları Wikipedia).
- Kaynak: 1294'te Fransızlar Gaskonya'yı (Bordeaux dahil) işgal etti; İngilizler Bayonne'u 1 Ocak 1295'te (kale 9 Ocak) geri aldı; Bordeaux halkı Ocak 1303'te Fransızları kovdu, 20 Mayıs 1303 Paris Antlaşması iade etti (Gascon Rolls Project C61/37 «Historical context»; Wikipedia «Gascon campaign 1294–1303»; Marsh, English Rule in Gascony 1912). Bordeaux'nun Fransız eline geçiş günü bulunamadı.
- Sınıf: SINIR + KAYNAKSIZ (künye kaynakları Wikipedia)
- Öneri: Bordo `1294-05-19..1303-01-?` fransa (beyanlı: müsadere günü), Bayonne `1294..1295-01-01 fransa`; kronoloji_ingiltere'ye 1294-05-19 «IV. Philippe Gaskonya'yı müsadere etti» ve 1303-05-20 maddeleri; kaynak Gascon Rolls.
- Önem: 2

#### Gaskonya'nın geri kalanı ve Ponthieu: Brétigny kazanımları eksik
- Kimlik: Périgueux (:202), Cahors (:203) `1281..1792 fransa`; Ponthieu/Abbeville için nokta yok (yalnız Louisiana'daki Abbeville).
- Kaynak: Brétigny ile Périgord ve Quercy de İngiltere'ye geçti (1361 teslim, 1369 isyan); Ponthieu kontluğu 1279'dan (Kastilyalı Eleanor mirası) 1369'a dek İngiliz tacında.
- Sınıf: SINIR
- Öneri: Périgueux/Cahors `1360-10-24..1369 ingiltere` (1369 günü kaynakla); Abbeville noktası açılması (1279–1369 ingiltere, 1369 Fransız alışı).
- Önem: 3

#### Bayonne 1451-08-20 MADDESIZ; Bordeaux 1451-06-30 ilgisiz madde
- Kimlik: :209 Bayonne; kirilma.txt 1451-08-20 MADDESIZ, 1451-06-30 ALAKASIZ-YAKIN.
- Kaynak: Bordeaux 12 Haziran 1451 antlaşması, 30 Haziran teslim; Bayonne 20 Ağustos 1451 teslim (Gascon Rolls Project blog «The Gascon Rolls and the End of English Gascony 1451–1453»). Günler atlasla uyumlu; madde eksik (akitanya künyesindeki 1451-06-30 maddesi Wikipedia kaynaklı ve kronoloji evreninde değil).
- Sınıf: EKSİK-MADDE
- Öneri: kronoloji_ingiltere.js 1451-06-30 «Bordeaux Fransızlara teslim oldu» ve 1451-08-20 «Bayonne teslim — İngiliz Gaskonya'sı ilk kez çöktü», kaynak Gascon Rolls.
- Önem: 2

### E. İskoçya kronolojisinde gün hataları (sınıra bağlı değil)

#### James'in esir alınışı 1406-04-01 — yanlış gün, kaynak el-kitabi
- Kimlik: kronoloji_ingiltere.js:1652.
- Kaynak: veliaht James 22 Mart 1406'da Flamborough Head açıklarında yakalandı (World History Encyclopedia, Undiscovered Scotland; eski Clowes, Royal Navy History 30 Mart der); babası III. Robert 4 Nisan 1406'da öldü. 1 Nisan hiçbir kaynakta yok. ODNB «James I» okunmadı.
- Sınıf: TARİH-HATA + KAYNAKSIZ
- Öneri: 1406-03-22 (ODNB teyidiyle; bulunmazsa 1406-03 ayına uygun yıl kuralı) ve akademik kaynak.
- Önem: 2

#### Yıl başına indirilmiş ama günü güvenilir kaynakta olan maddeler
- 1437-02-20 I. James — kaynak (Oxford Companion) «20–1 February 1437» der; gece cinayeti, 21 Şubat yaygın gün. Öneri: ic_not'a iki gün. Önem 3.
- 1460-01-01 II. James — güvenilir kaynak «August 1460»; 3 Ağustos 1460 Roxburgh. Önem 3.
- 1371-01-01 II. Robert — 22 Şubat 1371 (David II'nin ölümü), taç 26 Mart 1371. Önem 3.
- 1337-01-01 «III. Edward Fransız tahtını iddia etti» — 1337'deki somut olay 24 Mayıs 1337 Guyenne müsaderesi (akitanya künyesinde var) ya da 7 Ekim 1337 iddia mektupları; unvanın resmen alınışı 26 Ocak 1340 Gent. Madde metni «unvanı kullanmaya başladı» diyor — o 1340'tır. Sınıf ÇELİŞKİ, önem 3.
- 1295-01-01 Model Parlamento — kaynak «November 1295»; 13 Kasım çağrı / 27 Kasım toplantı. Önem 3.

### F. Künye düzeyi

#### ingiltere künyesi: kaynak yer tutucu, ortaçağ kronolojisi boş
- Kimlik: data/devletler.js:931 `kaynak:"ingiltere"`, kronoloji ilk madde 1581-09-11.
- Sınıf: KAYNAKSIZ
- Öneri: künye kaynağı (Oxford Companion to British History «England»), 1281 durumu ic_not'ta: I. Edward; İrlanda lordluğu, Gaskonya, Ponthieu (1279), Kanal Adaları; Galler'de 1277 Aberconwy sonrası kraliyet toprakları. Önem 3.

#### irlanda künyesi (1000–1603) ve Anglo-Norman kentler
- Kimlik: devletler.js:6711 irlanda (kaynak «bulunamadı»). Athlone, Belfast, Sligo, Tralee `1281..1603 irlanda`.
- Kaynak: Athlone 1210'dan kraliyet kalesi (İngiliz lordluğu); Belfast Ulster kontluğunun (de Burgh) parçası, kontluk 6 Haziran 1333 «Kahverengi Kont» William de Burgh'un öldürülmesiyle çöktü; Sligo FitzGerald kalesi (1245) 14. yy başına dek Anglo-Norman. (Oxford Companion to Irish History; DIB «Burgh, William de» — okunmadı.)
- Sınıf: SINIR
- Öneri: Belfast `1281..1333-06-06 ingiltere`; Athlone `1281..(14. yy, kaynakla) ingiltere`. Künye adı "Gal İrlanda'sı" anlamında; kaynak alanı doldurulmalı. irlanda t 1603-03-30 = Mellifont, Jülyen (OS) gün; atlas kuralı Gregoryen ister → 1603-04-09 (dönem B ile paylaşılan bulgu). Önem 2.

#### Kanal Adaları: 1461–1468 Fransız işgali (Jersey) yok
- Kimlik: Saint Helier (Jersey) `1204..2000 kanal-adalari`; künye kronoloji kaynakları worldatlas/theislandwiki (akademik değil).
- Kaynak: Pierre de Brézé 1461'de Mont Orgueil'i aldı, Jersey 1468'de Richard Harliston'un kuşatmasıyla geri alındı (okunmadı — teyit gerek). 1338–1345 Guernsey'de Castle Cornet Fransız işgali.
- Sınıf: SINIR + KAYNAKSIZ
- Öneri: teyit sonrası Saint Helier `1461..1468 fransa`; künye kaynağı Trinity College Dublin tezi (zaten atıflı) ile değiştirilsin. Önem 3.

#### akitanya-dukaligi künyesi: dört maddesi Wikipedia kaynaklı; künye haritada kullanılmıyor
- Kimlik: devletler.js akitanya-dukaligi (harita yok; Bordo/Bayonne `ingiltere` boyalı). 1294-05-19, 1303-05-20, 1451-06-30, 1452-10-23 kaynakları Wikipedia.
- Sınıf: KAYNAKSIZ. Öneri: Gascon Rolls Project / Vale, The Angevin Legacy and the Hundred Years War (1990). Önem 3.

### Özet sayılar

- Denetlenen künye: 11 (ingiltere, iskocya, gwynedd, powys, deheubarth, glyndwr-galler, akitanya-dukaligi, orkney-kontlugu, man-adasi, kanal-adalari, irlanda) + fransa/norvec-kralligi/burgonya karşılaştırma.
- Denetlenen madde: madde_A.txt 61 maddenin tamamı (gün ve olay); kaynak metni okunanlar: Rhuddlan, Model Parlamento, Brétigny, II. Robert, James 1406, I. James, II. James, Edinburgh 1296.
- Denetlenen kırılma grubu: kirilma.txt 1281–1485 arası 41 grup; MADDESIZ 11 (La Rochelle, Caen×2, Cherbourg×2, Troyes, Reims, Rouen 1449, Bayonne, Orkney/Shetland) + ALAKASIZ-YAKIN/TARAF-MADDELI 9 tek tek değerlendirildi.
- Bulgu: 29 başlık (E'deki toplu başlık 5 alt madde içerir → 33 tespit). Önem 1 verilen yok; çoğunluk önem 2.
- Ölçülemedi / açılamadı: isle-of-man.com/manxnotebook (401); rps.ac.uk 1472 kaydı aramada çıkmadı; ODNB (abonelik) hiçbir maddede okunmadı; Sumption/Barker/Davies kitapları okunmadı — bu kaynaklara dayanan günler "aday" olarak verildi. Le Mans 1425 f günü, Poitiers 1372 günü, Bordeaux 1294 işgal günü, Meaux 1439 günü bulunamadı.

#### Teyit (temiz)
- Llywelyn 1282-12-11 DWB · Dafydd 1283-10-03 DWB («3 October 1283») · Galler Prensi 1301-02-07 · Stirling Köprüsü 1297-09-11 · Falkirk 1298-07-22 · Wallace 1305-08-23 · Comyn 1306-02-10 · Bannockburn 1314-06-24 · Edinburgh 1314-03-14 · Halidon Hill 1333-07-19 / Berwick 1333-07-20 · Sluys 1340-06-24 · Crécy 1346-08-26 · Neville's Cross 1346-10-17 · Poitiers 1356-09-19 · Richard II İrlanda 1394-10-02 · Glyndŵr 1400-09-16 · Shrewsbury 1403-07-21 · Agincourt 1415-10-25 · Troyes 1420-05-21 · Paris 1420-12-01 / 1436-04-13 · Cherbourg 1418-09-29 (Cambridge) · Bordeaux 1452-10-23 / 1453-10-19 (Gascon Rolls) · Castillon 1453-07-17 · St Albans 1455-05-22 · Towton 1461-03-29 · Tewkesbury 1471-05-04 · Richard III 1483-06-26 · Bosworth 1485-08-22 · Expulsion 1290-07-18 · Edward II 1327-01-25 · Northampton 1328-05-04 (Edinburgh 17 Mart 1328 imza — iki gün ic_not'ta beyan edilebilir).
- Takvim: dönemde OS/NS çevirimi gerekmiyor; 1 Ocak–24 Mart olaylarında modern yıl doğru kullanılmış.


## Bölüm B — 1485–1714 (Tudor/Stuart, İrlanda 1541/1603, İskoçya 1603/1650/1707, ilk koloniler)

(alt ajan raporu, aynen)

### Bulgu B — İngiltere zinciri 1485–1714

Ağaç: C:\atlas\.claude\worktrees\vigorous-merkle-5c76dd (7a3659d54), KASA. Yalnız okundu.
Dökümler: madde_B.txt, kirilma.txt/json, kunye_ing.json, yerlesim_ing.json + data/*.js Grep.

Genel tespit: kronoloji_ingiltere.js'te 1582-1752 arası maddelerin günleri `gun:` alanında "GREGORYEN … kaynak günü … Jülyen"
beyanıyla SİSTEMLİ biçimde çevrilmiş (UMIT EK-julyen-oneri). Takvim hataları ağırlıkla iki yerde toplanıyor:
YERLEŞİM `s:` günleri (çoğu çevrilmemiş) ve devletler.js KÜNYE kronolojileri.

(Bulgular ara ara ekleniyor.)

#### B1 — İrlanda 1603 kırılması Jülyen günde kalmış, maddesi de yok
- Kimlik: künye `irlanda` t=1603-03-30 (devletler.js:6711); 15 yerleşim (Ennis, Castlebar, Tuam, Monaghan, Cavan, Armagh, Newry, Enniskillen…) `irlanda→ingiltere` 1603-03-30.
- Atlasta: Mellifont teslimiyeti 30 Mart 1603 (Mountjoy'un İngiliz/Jülyen günü). kronoloji_ingiltere.js'te Mellifont maddesi YOK. Kırılma TARAF-MADDELI sayılıyor, ama tek dayanağı 1603-04-03 Taç Birliği maddesi; konusu ilgisiz.
- Kaynak: teslimiyet 30 Mart 1603 (bazı neşirlerde 31 Mart); Mountjoy kraliçenin 24 Mart'taki ölümünü gizledi. libraryireland «Hugh O'Neill's Submission»; History Ireland «The Flight of the Earls: escape or strategic regrouping?». DIB «O'Neill, Hugh» AÇILAMADI (307 yönlendirme).
- Sınıf: TAKVİM + EKSİK-MADDE. 30 Mart 1603 OS = **9 Nisan 1603 NS**. Yıl kayması yok: 25 Mart'tan sonra.
- Öneri:
  - Künye t, 15 kırılma ve künye kronoloji maddesi 1603-04-09'a taşınsın; ic_not "Jülyen 30 Mart 1603".
  - kronoloji_ingiltere.js'e 1603-04-09 «Mellifont Antlaşması — Tyrone teslim oldu, Dokuz Yıl Savaşı bitti» maddesi yazılsın.
  - Gün DIB ile teyit edilsin.
- Önem: 2

#### B2 — Aynı olay iki günle: `irlanda` künyesi 1541-01-01, `ingiltere-irlanda-krallik` 1541-06-18
- Kimlik: devletler.js `irlanda` kronoloji 1541-01-01 «VIII. Henry kendini İrlanda Kralı ilan etti» ↔ `ingiltere-irlanda-krallik` f=1541-06-18 ↔ kronoloji_ingiltere.js:1776 1541-06-18.
- Kaynak: Letters and Papers Henry VIII c.16 no. 901/926 (BHO) — künyenin ic_not'u: onay 18 Haziran, ilan 19 Haziran 1541.
- Sınıf: ÇELİŞKİ. Öneri: `irlanda` kronoloji maddesi 1541-06-18'e çekilsin.
- Yan tespit (yapısal):
  - `ingiltere-irlanda-krallik`, `ingiliz-tanca`, `cebelitarik-ingiliz`, `jamaika-ingiliz`, `barbados-ingiliz`, `on-uc-koloni` künyelerinin HİÇBİRİ yerleşim `s:`inde kullanılmıyor; haritada hepsi `ingiltere`.
  - Künye f/t günleri yalnız künye panelini sürüyor. Bu yüzden künye↔yerleşim gün farkları (B4, B5, B8) denetime takılmadan sürüyor.
- Önem: 1

#### B3 — İskoçya 1650–1660: yamalı geçiş, 6 nokta hiç geçmiyor, dönüş yanlış olaya bağlı
- Kimlik:
  - Edinburg `iskocya→ingiltere` 1650-09-13.
  - Glasgow, Aberdeen, Inverness, Perth, Dumfries 1652-02-14.
  - Altısı birden `ingiltere→iskocya` 1660-06-08.
  - Wick, Stornoway, Kirkwall, Lerwick, Iona, Dumbarton 1652–1660 boyunca `iskocya` kalıyor.
- Sorunlar:
  - (a) Ölçüt karışık: Edinburg fiilî işgal (Dunbar) gününde geçiyor, öteki 5 şehir hukukî birlik (Tender of Union, 4/14 Şubat 1652) gününde.
  - (b) 1652–60'ta İskoçya'nın tamamı Commonwealth'e katıldı (madde metni de böyle diyor). Ama 6 kuzey ve ada noktası İskoç kalmış, haritada hayalet bir İskoç krallığı yaşıyor.
  - (c) 1660-06-08 = II. Charles'ın Londra'ya girişi (29 Mayıs OS), İskoçya ile ilgisi yok. Charles II Edinburgh'da 14 Mayıs 1660 OS'de (=24 Mayıs NS) ilan edildi; İskoç Committee of Estates Ağustos 1660'ta yeniden toplandı; İskoç Parlamentosu 1 Ocak 1661 OS'de açıldı. Kırılmanın İskoçya'yı anan maddesi yok.
- Kaynak: archontology.org «Scotland and the Commonwealth» (atlasın kendi 1652 maddesinin kaynağı) ve «Charles II (Scotland)»; RPS (rps.ac.uk) 1661 oturumu — kaynak okunarak teyit edilmeli. Wikipedia «Restoration (Scotland)» yalnız aday üretti.
- Sınıf: SINIR + SESSİZ-DEĞİŞİM + EKSİK-MADDE.
- Öneri:
  - Hukukî ölçüt seçilsin: 12 İskoç noktasının tamamı 1652-02-14'te ingiltere olsun; Edinburg da 1650-09-13'ten 1652-02-14'e çekilsin.
  - Dönüş günü 1660-05-24 olsun (Edinburgh ilanı, 14 Mayıs OS); yanına «II. Charles Edinburgh'da ilan edildi — İskoçya Commonwealth'ten çıktı» maddesi.
  - 1652-02-14 maddesindeki Wikipedia dayanağı düşürülsün, archontology/RPS kalsın.
- Önem: 2

#### B4 — Tanca: tahliye kırılması 1684-01-01'e yuvarlanmış ve maddesiz; künye t ile tutmuyor
- Kimlik:
  - Yerleşim Tanca: `portekiz→ingiltere` 1662-01-30, `ingiltere→fas` 1684-01-01.
  - Künye `ingiliz-tanca`: f=1661-01-01, t=1684-02-01.
- Atlasta: 1684-01-01 kırılmasının yanında yalnız ilgisiz bir madde var (ALAKASIZ-YAKIN); yerleşim t ile künye t farklı.
- Kaynak:
  - TDV «Tanca»: İngiliz idaresi 1661 – Şubat 1684 (ay hassasiyetinde).
  - Fiilî teslim alış Ocak 1662 sonu (İngiliz kayıtlarında 1661/2 OS).
  - Dartmouth tahliyesi Şubat 1684, gün OS. Gün için ODNB «Legge, George» ya da Routh, *Tangier* (1912) gerekir; bu oturumda AÇILAMADI.
- Sınıf: ÇELİŞKİ + EKSİK-MADDE + TAKVİM (1662-01-30 OS mu NS mi, olaylar_ek11 kaynağından okunmalı).
- Öneri:
  - Yerleşim t ve künye t aynı güne çekilsin: teyitli NS tahliye günü, teyit yoksa 1684-02-01 + "yalnız ay (TDV)" beyanı.
  - Künye f=1661-01-01 çeyiz antlaşmasıdır; fiilî devir gününe çekilsin.
  - «Tanca tahliye edildi» maddesi yazılsın.
- Önem: 2

#### B5 — Jamaika: Spanish Town Jülyen günde, Port Royal fetihten önce İngiliz, künye iki günde OS
- Kimlik:
  - Yerleşim Spanish Town `ispanya→ingiltere` 1655-05-10.
  - Yerleşim Port Royal (Jamaika) f=1655-01-01 `ingiltere` (öncesi yok).
  - Künye `jamaika-ingiliz` f=1655-01-01; kronolojisinde 1655-05-10 ve 1670-07-08.
  - kronoloji_sinir_karayip_adalar.js:14 Madrid Antlaşması 1670-07-18.
- Sorunlar:
  - (a) 10 Mayıs 1655, Penn-Venables çıkarmasının İngiliz (OS) günüdür = **20 Mayıs NS**. Künyenin kendi ic_not'u da "İngiliz kuşatması 20 Mayıs 1655'te başladı" diyor; künye ile yerleşim çelişiyor.
  - (b) Port Royal (Cagway) fetihten önce, 1655-01-01'den itibaren İngiliz; 4,5 aylık HAYALET dönem.
  - (c) Madrid Antlaşması: TNA SP 108/470'e göre "1670 July 8 OS/18 NS". Sınır maddesi 18 Temmuz'u doğru kullanıyor; künye kronolojisi OS 8 Temmuz'da kalmış.
  - (d) Yerleşimlerin açılış kaynağı, 1962 bağımsızlık maddesinden "DEVRALMA"; açılışı tanıklamıyor.
- Sınıf: TAKVİM + HAYALET + ÇELİŞKİ + KAYNAKSIZ.
- Öneri:
  - Spanish Town, Port Royal ve künye f = 1655-05-20 (ic_not "Jülyen 10 Mayıs 1655").
  - Künye kronoloji maddeleri 1655-05-20 ve 1670-07-18'e çekilsin.
  - kronoloji_ingiltere.js'e «Penn ve Venables Jamaika'yı aldı» maddesi yazılsın (kirilma YALNIZ-KUNYE-MADDESI). Kaynak olarak Camden 3rd ser. «The English Conquest of Jamaica» (künyede var).
- Önem: 2

#### B6 — Basseterre (St Kitts): yanlış antlaşma günü + öncesindeki Fransız dönemi yok
- Kimlik: yerleşim Basseterre `None→ingiltere` 1713-07-13 (ilk-dönem). kronoloji_sinir_karayip_adalar.js:15 1713-04-11 «Utrecht: Saint Kitts'in tamamı İngiltere'ye geçer», yer_id Basseterre.
- Sorunlar:
  - Kırılma 13 Temmuz'da; bu, İspanya–Britanya Utrecht antlaşmasının günü. St Kitts'in devri Fransa–Britanya antlaşmasındadır: 11 Nisan 1713 NS (md. XII). Kendi maddesi 1713-04-11 diyor, kırılma ise 93 gün sonra.
  - Basseterre 1627'den beri Fransız yarısının merkeziydi; 1713 öncesinde `fransa` dönemi yok. 1702'de İngilizler adanın Fransız kısmını işgal etmişti.
  - Yerleşimde kaynak alanı yok.
- Sınıf: TARİH-HATA + SESSİZ-DEĞİŞİM + EKSİK (önceki sahip) + KAYNAKSIZ.
- Öneri:
  - 1627 (Fransız yerleşimi, d'Esnambuc) – 1713-04-11 `fransa`; 1713-04-11'den `ingiltere`.
  - 1702 işgali kaynakla doğrulanırsa 1702-…-… `ingiltere` (fiilî) yazılsın; 1713 antlaşma maddesi kalsın.
  - Kaynak olarak Utrecht Fransa–Britanya metni (Avalon/Parry CTS) gösterilsin.
- Önem: 2

#### B7 — Hudson Körfezi karakolları: 1686–1713 Fransız işgalleri haritada yok; Abitibi Fransız karakolu
- Kimlik: yerleşimler Waskaganish 1668, Moose Factory 1673, Fort Albany 1679, York Factory 1684, Fort Severn 1685; her biri 1763-02-10'a kadar kesintisiz `ingiltere`. Abitibi House 1686, Mistassini 1673 `ingiltere`. Hepsinde kaynak alanı yok.
- Kaynak: Dictionary of Canadian Biography (biographi.ca):
  - «Troyes, Pierre de»: 20 Haziran 1686'da körfeze ulaştı; Moose, Rupert, Albany alındı.
  - «Le Moyne d'Iberville»: «Charles Fort (Rupert) fell on 3 July»; Albany «surrender unconditionally on 25 July» 1686. İngilizler Albany'yi 1693'te geri aldı.
  - York Fort 14 Ekim 1694'te (13 Ekim NS = 3 Ekim OS çağrı) Fransız oldu; 1696'da İngilizler geri aldı; 13 Eylül 1697'de yine Fransız oldu ve 1714'te Utrecht uyarınca iade edildi.
  - Abitibi'deki 1686 karakolu de Troyes'un Fransız karakoludur. HBC'nin Abitibi House'u çok sonradır (1774, ölçülmedi).
- Sınıf: SESSİZ-DEĞİŞİM + HAYALET + KAYNAKSIZ.
- Öneri:
  - Moose 1686-06-2x, Rupert 1686-07-03 (NS, Fransız günü) ve Albany 1686-07-25'ten itibaren `fransa`.
  - Albany 1693'te `ingiltere`ye dönsün (gün DCB/HBC kaydından).
  - York Factory: 1694-10-14 `fransa`, 1696 `ingiltere`, 1697-09-13 `fransa`, 1714 iade günü `ingiltere`.
  - Moose ve Rupert'in iade/terk günleri araştırılsın.
  - Abitibi 1686 `fransa`. Mistassini'nin 1673 İngiliz sahipliğinin kaynağı yok; kaynak bulunamazsa dönem kırpılsın.
  - Maddeler: «de Troyes seferi James Körfezi karakollarını aldı (1686)», «Iberville York Fort'u aldı (1694, 1697)», «Utrecht: Hudson Körfezi İngiltere'ye» (1713-04-11).
- Önem: 2

#### B8 — Kuzey Amerika / Asya yerleşim açılış günleri: Jülyen, çevrilmemiş, beyansız
- Kimlik ve atlas günleri (`s:` f), hepsi İngiliz kaydının OS günü, kaynak ve ic_not alanı yok:
  - St. John's (Newfoundland) 1583-08-05 — Gilbert'in sahiplenmesi 5 Ağu 1583 OS → **1583-08-15**
  - Boston 1630-09-07 — adlandırma 7 Eyl 1630 OS → **1630-09-17**
  - Madras 1639-08-22 — Fort St George izni 22 Ağu 1639 OS → **1639-09-01**
  - Philadelphia 1682-10-27 — Penn'in New Castle'a varışı 27 Eki 1682 OS → **1682-11-06**; MADDESİZ
  - Kalküta 1690-08-24 — Charnock 24 Ağu 1690 OS → **1690-09-03**
  - Bridgetown 1627-02-17 — Holetown çıkarması 17 Şub 1626/7 OS → **1627-02-27**. Ayrıca bu Holetown'ın günüdür; Bridgetown 1628'de kuruldu. Künye kaynağı totallybarbados (popüler site; kendi notu "gün ZAYIF").
- Karşı örnekler (doğru çevrilmiş): Plymouth 1620-12-21 (11 Ara OS), Jamestown 1607-05-23 (13 May OS), New York 1664-09-08 (29 Ağu OS), St Helena 1673-05-15 (5 May OS, beyanlı).
- Kaynak: günlerin OS olduğu standart İngiliz kayıtlarından (Love, *Vestiges of Old Madras* 1913; Wilson, *Early Annals of the English in Bengal*; Massachusetts Court of Assistants kaydı; Gragg, *Englishmen Transplanted*). Bu oturumda tek tek AÇILMADI; atlas günleriyle birebir eşleşiyorlar ve atlasta beyan yok.
- Sınıf: TAKVİM + KAYNAKSIZ + EKSİK-MADDE (Philadelphia, Madras, Kalküta).
- Öneri: listedeki NS günlere çekilsin; ic_not'a iki gün yazılsın; her yerleşime kaynak eklensin. Bridgetown f=1628 (yalnız yıl) ya da Holetown'a ayrı nokta.
- Önem: 2

#### B9 — Bombay 1665-02-18 maddesiz; takvim beyanı yok
- Kimlik: yerleşim Bombay `portekiz→ingiltere` 1665-02-18 (kirilma MADDESIZ). Açılış kaynağı 1757 Kançipuram maddesinden DEVRALMA (ilgisiz).
- Kaynak:
  - History Today «Gerald Aungier and Bombay»: Cooke Bombay'a «February 8th, 1665»te çıktı.
  - Spectator 1925, Foster incelemesi: aynı gün, 8 Şubat 1665.
  - Başka kaynaklar 18 Şubat 1665 der. 10 günlük fark OS/NS'dir: 8 Şubat OS = 18 Şubat NS.
- Sınıf: EKSİK-MADDE + KAYNAKSIZ (beyan).
- Öneri:
  - Gün 1665-02-18 kalabilir. ic_not: "Jülyen 8 Şubat 1665 (Foster, English Factories in India 1665-67)".
  - kronoloji_ingiltere.js'e «Bombay Portekiz'den teslim alındı — Humphrey Cooke» maddesi yazılsın.
  - İlgili: kronoloji_portekiz.js:363 evlilik 1662-05-21. Portsmouth evliliği 21 Mayıs 1662 OS'dir = **31 Mayıs NS**, çevrilmemiş.
- Önem: 2

#### B10 — New York 1673–74 Hollanda geri alışı haritada yok
- Kimlik: New Amsterdam (New York) ve Fort Orange (Albany) 1664-09-08'den 1776-07-04'e kadar kesintisiz `ingiltere`.
- Kaynak (bilgi; bu oturumda açılmadı): Evertsen ve Binckes 9 Ağustos 1673 NS'de şehri aldı (New Orange); Westminster Antlaşması (19 Şubat 1674 NS) ile iade; fiilî devir 10 Kasım 1674 NS. Ayrıca Fort Orange 1664'te NY ile aynı gün değil: 24 Eylül 1664 OS'de teslim oldu.
- Sınıf: SESSİZ-DEĞİŞİM (eksik dönem) + EKSİK-MADDE. 1664 devri de MADDESİZ: yalnız ALAKASIZ-YAKIN Vasvar maddesi var.
- Öneri:
  - İki yerleşime 1673-08-09..1674-11-10 `hollanda` dönemi eklensin; Fort Orange'ın 1664 günü ayrı kaynaklansın.
  - Maddeler: «Yeni Amsterdam İngilizlere teslim oldu (1664)», «Hollanda New York'u geri aldı (1673)», «Westminster: New York İngiltere'ye iade (1674)».
  - Kaynak: Jacobs, *New Netherland* (Brill 2005) ya da Oxford Companion to US History.
- Önem: 2

#### B11 — Blanc-Sablon 1500'den beri "İngiliz" (HAYALET); Paramaribo 1630
- Kimlik: Blanc-Sablon `ingiltere` 1500-01-01..1763-02-10. Paramaribo `ingiltere` 1630-01-01..1667-07-31. İkisinde de kaynak yok.
- Sorun:
  - Blanc-Sablon / Labrador kıyısı XVI-XVII. yy'da Bask ve Fransız balıkçılarının alanıydı; İngiliz egemenliği 1763 Paris'le gelir. 1500'de İngiliz devleti orada yoktu.
  - Surinam'da 1630 Marshall girişimi kalıcı değildi; İngiliz Surinam'ı Lord Willoughby'nin 1650–51 seferiyle başlar. Paramaribo 1667'de Hollanda'ya geçti: Crijnssen 26/27 Şubat 1667'de fiilen aldı, atlas yalnız Breda gününü (31 Temmuz) kullanıyor.
- Sınıf: HAYALET + KAYNAKSIZ.
- Öneri:
  - Blanc-Sablon 1763 öncesi `fransa` ya da beyanlı boşluk; kaynak merdiveni uygulansın.
  - Paramaribo f=1650/1651 (kaynakla), öncesi boşluk.
  - Hollanda'ya geçiş 1667-02-27 (fiilî, NS) olsun; Breda maddesi kalsın.
  - Günler teyit edilmeli (DCB / Goslinga). Bu oturumda açılmadı.
- Önem: 2 (Blanc-Sablon 3)

#### B12 — Cape Coast: 1653–1663 Hollanda değil İsveç (ve Danimarka) idi; İngiliz günü 1 Mayıs mı 9 Mayıs mı
- Kimlik: Cape Coast `hollanda` 1653-01-01..1664-05-01, ardından `ingiltere` (kirilma ALAKASIZ-YAKIN).
- Kaynak (aday, Wikipedia türevleri; akademik teyit gerekli): Carolusborg 1653'te İsveç Afrika Şirketi'nce kuruldu; Danimarka 1658–59'da aldı; Hollanda 20 Nisan 1663'te aldı. Holmes'un ele geçirmesi çoğu kaynakta 9 Mayıs 1664; 1 Mayıs 1664 bulunamadı. 1 Mayıs OS ise 11 Mayıs NS olur.
- Sınıf: SESSİZ-DEĞİŞİM + TARİH-HATA + EKSİK-MADDE.
- Öneri:
  - 1653–1663 için `isvec` (atlasta İsveç sömürge künyesi yoksa ardıl/ana künye) ve 1658–59 için `danimarka`; 1663-04-20'den `hollanda`.
  - İngiliz günü Porter / Davies, *The Royal African Company* ile teyit edilsin; madde «Holmes Cape Coast'u aldı (1664)».
- Önem: 2

#### B13 — Cebelitarık 1704 ve Menorka 1708: ele geçirme maddesi yok / hukukî durum beyansız (HASSAS)
- Kimlik: Cebelitarık `ispanya→ingiltere` 1704-08-04 (kaynaksız; kirilma ALAKASIZ-YAKIN — yalnız Blenheim). Menorka 1708-09-29 (olaylar_ek16'da madde var). Künye `cebelitarik-ingiliz` f=1713-07-13.
- Atlas günleri: 1704-08-04 = 24 Temmuz 1704 OS'nin NS karşılığı (doğru çevrilmiş). 1713-07-13 = İspanya–Britanya Utrecht antlaşması, NS (doğru).
- İki yan:
  - İspanyol kaynakları (ör. künyede verilen CEPC, *Revista de Estudios Políticos* 168, 2015, Utrecht md. X makalesi): 1704'te kale Arşidük Charles (III. Carlos) adına alınmıştır; İngiliz egemenliği 1713 md. X ile başlar.
  - İngiliz kaynakları: Rooke'un filosu kaleyi 1704'te aldı, İngiliz garnizonu o günden beri orada.
  - Menorka da 1708'de Charles III adına alındı; 1713 md. XI ile İngiltere'ye bırakıldı.
- Sınıf: EKSİK-MADDE + KAYNAKSIZ (taraf tutmadan).
- Öneri: taraf seçmeden kronoloji_ingiltere.js'e 1704-08-04 «Anglo-Hollanda filosu Cebelitarık'ı aldı (Arşidük Charles adına)» maddesi yazılsın. Kırılma ve madde ic_not'larına iki hukukî görüş (1704 fiilî / 1713 hukukî) kaynaklarıyla yazılsın. Yerleşime kaynak eklensin.
- Önem: 2

#### B14 — Eksik yerleşim ve toprak: Tournai 1513–19, Boulogne 1544–50, Dunkirk 1658–62, Le Havre 1562–63
- Kimlik:
  - Tournai (yerlesimler_avrupa.js:413): 1281–1521-11-30 kesintisiz `fransa`; İngiliz dönemi yok.
  - Boulogne yalnız 1281 öncesi dosyada var (s:[], bit 1281); 1281 sonrası noktası yok.
  - Dunkirk / Dunkerque hiçbir yerleşim dosyasında yok.
  - Le Havre 1517–1792 kesintisiz `fransa`.
  - Guînes noktası yok. Calais 1558-01-07 doğru (Calais'nin bölgesini taşıyor).
- Kaynak (standart; bu oturumda gün tek tek teyit EDİLMEDİ):
  - Tournai: VIII. Henry 23/24 Eylül 1513'te aldı, Londra Antlaşması (1518) ile Şubat 1519'da Fransa'ya iade.
  - Boulogne: 14 Eylül 1544'te teslim; Boulogne Antlaşması 24 Mart 1550; iade 25 Nisan 1550.
  - Dunkirk: 24/25 Haziran 1658 NS'de Lockhart'a teslim (Dunes'ten sonra); 17/27 Ekim 1662 satış antlaşması (OS/NS); Aralık 1662 tahliye.
  - Le Havre (Newhaven): Ekim 1562 – 28/29 Temmuz 1563.
- Sınıf: EKSİK (yerleşim) + EKSİK-MADDE. Dunkirk dışındakilerin kronolojide maddesi de yok. Dunkirk için kronoloji_ingiltere.js'te madde yok.
- Öneri:
  - Dunkerque noktası eklensin (1658-06-25..1662-12 `ingiltere`, öncesi `ispanya`, sonrası `fransa`); Tournai'ye 1513-09-24..1519-02 `ingiltere` dönemi; Boulogne'a 1281 sonrası nokta ve 1544-09-14..1550-04-25 `ingiltere`.
  - Günler ODNB / Oxford Reference ya da Cambridge kaynağından alınsın. Kaynak bulunana kadar yalnız yıl yazılsın.
- Önem: 2

#### B15 — Galler Yasaları: 1542 Yasası aslında 1543 oturumu (OS yıl kayması); 1536 maddesinin kaynağı ilgisiz
- Kimlik: kronoloji_ingiltere.js 1542-01-01 «İkinci Galler Yasası» (kaynak legislation.gov.uk «Laws in Wales Act 1542», 34 & 35 Hen. 8 c. 26) ve 1536-01-01 «Galler Yasası» (kaynak *An Oxford Companion to the Romantic Age* «Religion»).
- Kaynak:
  - legislation.gov.uk «Laws in Wales Act 1542 (repealed)», 1542 c. 26 (34_and_35_Hen_8).
  - Kanunun çift saltanat yılı (34 & 35 Hen. VIII) oturumun 22 Nisan 1543 eşiğini aştığını gösterir. Oturum Ocak–Mayıs 1543'tür (bilgi; History of Parliament ile teyit edilmeli). "1542", OS yıl başı (25 Mart) uzlaşımından gelen kısa addır.
  - 1535/6 Yasası (27 Hen. VIII c. 26) Şubat–Nisan 1536 oturumundadır; madde yılı doğru. Ancak Romantik Çağ sözlüğü bu olay için uygun dayanak değil.
- Sınıf: TAKVİM (yıl kayması) + KAYNAKSIZ.
- Öneri:
  - 1542 maddesi 1543-01-01 olsun, "yalnız yıl; kanunun kısa adı 1542" beyanıyla. Gün bulunursa kraliyet onayı günü (History of Parliament / Statutes of the Realm).
  - 1536 maddesinin kaynağı legislation.gov.uk «Laws in Wales Act 1535» olsun.
  - Haritaya etkisi yok: Galler 1283'ten beri `ingiltere`.
- Önem: 1

#### B16 — Künye kronolojilerinde OS günleri ve 01-01 yuvarlamaları
- `hannover` kronoloji 1714-01-01 «I. Georg Büyük Britanya tahtına çıktı» ↔ kronoloji_ingiltere.js 1714-08-12 (1 Ağustos OS, doğru). Öneri: 1714-08-12. ÇELİŞKİ, önem 1.
- `on-uc-koloni`:
  - f=1607-01-01 ve kronoloji 1607-01-01 «Jamestown kuruldu» ↔ yerleşim ve madde 1607-05-23.
  - 1620-01-01 «Plymouth» ↔ 1620-11-21 / 1620-12-21.
  - Kaynak Britannica Kids; künyenin kendi notu "f için sayfa açılamadı".
  - Öneri: f=1607-05-23, kronoloji günleri madde günlerine; kaynak Oxford Companion to US History «Jamestown» (atlas maddesinin kaynağı). ÇELİŞKİ + KAYNAKSIZ, önem 2.
- `barbados-ingiliz` f=1627-02-17: OS, kaynak popüler (bkz. B8). Öneri: 1627-02-27 + Gragg ile teyit. Önem 1.
- Jamestown maddesi (kronoloji_ingiltere.js:551) `gun:` içi tutarsızlık: "kaynak günü 13 Mayıs" ama "eski not: 14 Mayıs … Gregoryen 24 Mayıs". 13 Mayıs varış, 14 Mayıs karaya çıkış. Hangisi seçildiyse ic_not'ta açıkça yazılsın. Önem 1.
- Blenheim maddesi (kronoloji_ingiltere.js:737) `gun:` notu "Dikkat: dosyanın öteki 1582-1752 günleri Jülyen" diyor; dosya artık Gregoryen, not bayat. Önem 1.

#### B17 — Zayıf/yasak dayanaklı maddeler (KAYNAKSIZ)
- kronoloji_ingiltere.js 1649-05-29 Commonwealth ilanı: kaynak «The Property Chronicle» (popüler site). Öneri: BHO, Firth & Rait, *Acts and Ordinances of the Interregnum* «An Act declaring and constituting the People of England to be a Commonwealth» (19 Mayıs 1649 OS). Madde günü doğru (29 Mayıs NS).
- kronoloji_ingiltere.js:1976 1652-02-14 Tender of Union: Wikipedia + archontology. Öneri: Wikipedia düşsün; RPS ya da Dow, *Cromwellian Scotland* eklensin.
- kronoloji_ingiltere.js 1641-11-02 İrlanda İsyanı: kaynak yalnız «el-kitabi». Öneri: DIB «O'Neill, Sir Phelim» ya da Oxford Reference «Irish rebellion (1641)»; 23 Ekim 1641 OS = 2 Kasım NS (gün doğru).
- Yerleşimlerde DEVRALMA kaynakları ilgisiz maddelerden gelmiş:
  - Port Royal (Acadia) 1713 açılışı «Prusya'nın Orange'ı bırakması» maddesinin kaynağına bağlanmış.
  - Bombay, 1757 Kançipuram maddesine.
  - Spanish Town ve Port Royal, 1962 bağımsızlığına.
  - Cape Coast, 1957 bağımsızlığına.
  - Bunlar açılış kırılmasını tanıklamıyor; DEVRALMA adımı yanlış eşleşmiş. Önem 2.

#### B18 — Port Royal (Akadya) 1710 fiilî fethi yok
- Kimlik: Port Royal (Acadia) `fransa→ingiltere` 1713-04-11 (Utrecht, NS). Kaynağı ilgisiz DEVRALMA (B17).
- Sorun: Nicholson Port Royal'i Ekim 1710'da aldı (Annapolis Royal); 1710–1713 arası fiilen İngiliz.
- Kaynak: DCB «Subercase, Daniel d'Auger de» / «Nicholson, Francis». Bu oturumda AÇILMADI. Kapitülasyon 2/13 Ekim 1710 OS/NS olarak geçer; teyit edilmeli.
- Sınıf: SESSİZ-DEĞİŞİM (fiilî kırılma yok) + EKSİK-MADDE.
- Öneri: kırılma 1710-10-13 (NS, teyitli gün) olsun; «Port Royal İngilizlere teslim oldu» maddesi yazılsın; 1713-04-11 Utrecht maddesi Akadya'yı da ansın (Akadya / Nova Scotia + Newfoundland + Hudson Körfezi, md. XII–XIII).
- Önem: 2

---
### Kapsam ve ölçüm
- Denetlenen:
  - 89 madde (madde_B.txt; gün ve OS/NS çevrimi tek tek tarandı).
  - 13 künye: ingiltere, iskocya, irlanda, ingiltere-irlanda-krallik, hannover, cebelitarik-ingiliz, jamaika-ingiliz, barbados-ingiliz, on-uc-koloni, ingiliz-tanca, kanal-adalari ve dönemle kesişen 2 komşu künye.
  - kirilma.txt'te 1485–1714 arasındaki 51 kırılma grubu; Umman, Hannover ve Werowocomoco gibi İngiliz-dışı yapılar yüzeysel bakıldı.
  - ~45 yerleşimin `s:` dönemi.
- Bulgu: 18 başlık (B1–B18). Önem 3: 1 (Blanc-Sablon). Önem 2: 14. Önem 1: 3 (B2, B15, B16 alt maddeleri).
- AÇILAMADI / ölçülmedi:
  - DIB (dib.ie 307 yönlendirme).
  - ODNB (abonelik).
  - Tanca tahliyesi, Dunkirk, Tournai ve Boulogne günleri (yalnız ikincil arama).
  - Akadya 1710 gün teyidi; Cape Coast akademik teyidi (yalnız Wikipedia türevi).
  - Madras, Kalküta, Boston, Philadelphia ve Newfoundland OS günleri tek tek açılmadı (B8).
  - Hudson Körfezi karakollarının iade günleri.
  - Mistassini ve Abitibi HBC tarihleri.
  - Menorka 29 Eylül 1708'in OS/NS'si (olaylar_ek16 kaynağı okunmadı).
  - Darien (Yeni Kaledonya 1698–1700) için atlasta nokta aranmadı.
- Kural uyarısı: Wikipedia ve ikincil siteler yalnız aday üretmek için kullanıldı. Önerilen günlerin işlenmeden önce brief'teki kaynak sırasıyla teyidi gerekiyor.

### Teyit (temiz çıkanlar)
- Taç Birliği 1603-04-03: 24 Mart 1603 OS, OS yıl 1602/3 beyanlı (kronoloji_ingiltere.js:537).
- Birlik Yasası 1707-05-12: 1 Mayıs 1707 OS. İskoçya künye t ve 12 kırılma aynı gün, YER-MADDELI.
- I. Charles idamı 1649-02-09, Kinsale 1602-01-03, Doğu Hindistan Şirketi 1601-01-10: OS yıl kayması doğru çözülmüş.
- Armada 1588-08-08, Barut 1605-11-15, Naseby 1645-06-24, Dunbar 1650-09-13, Restorasyon 1660-06-08, Büyük Yangın 1666-09-12, Şanlı Devrim 1688-11-15, Bill of Rights 1689-12-26, Boyne 1690-07-11, Glencoe 1692-02-23, İngiltere Bankası 1694-08-06 (BoE «27 July 1694»), Anne 1702-03-19, I. George 1714-08-12: hepsi OS+10/11 doğru ve beyanlı.
- Blenheim 1704-08-13 NS (2 Ağu OS) doğru.
- 1582 öncesi Jülyen günler kaynağıyla tutarlı: Bosworth, Flodden, Calais 1558-01-07 (madde + kırılma YER-MADDELI), Mary Rose, Mary Stuart (1561, 1567, 1568).
- İrlanda Krallığı 1541-06-18: BHO Letters and Papers no. 901/926 (künye ic_not).
- St Helena 1673-05-15: 5 Mayıs OS, beyanlı (Kitching 1950).
- Madrid 1670 sınır maddesi 1670-07-18: TNA SP 108/470.
- New York 1664-09-08: 29 Ağu OS.
- Plymouth 1620-12-21: 11 Ara OS.


## Bölüm C — 1714–1923 (Britanya Adaları, Akdeniz, Ortadoğu, Körfez)

(alt ajan raporu, aynen)

### Bulgu C — 1714–1923 · Britanya Adaları + Akdeniz + Ortadoğu + Körfez

Ölçüm: KASA, worktree vigorous-merkle-5c76dd (salt okuma), scratchpad dökümleri (yerlesim_ing.json, kirilma.json, madde_C.txt).
Bölge süzgeci: `c_filtre.py` → `c_kir.txt` (71 kırılma grubu). Not: yerlesim_ing.json'da Osmanlı sahipliği `d:` alanındadır;
"(boş/ardıl yok)" görünen Kût 1916, Kerkük 1918-05-27, Parga 1819, Doha 1871 çıkışları Osmanlı `d:` dönemine dönüştür — delik değil
(yerlesim_ing.json'da `d:` yok; data/yerlesimler.js'te `d:` doğrulaması bu turda tek tek yapılmadı → bkz. ölçülemeyenler).

#### 1. Menorka 1708–1802 kesintisiz "ingiltere" — 1756–63 Fransız ve 1782–98 İspanyol dönemleri yok
- Kimlik: data/yerlesimler*.js `Menorka (Mahon)` · s: 1708-09-29→1802-03-25 ingiltere, 1802-03-25→ ispanya.
- Kaynak: Menorka 1756'da Fransa'ya düştü (Fort St Philip teslimi 29 Haziran 1756), 1763 Paris Antlaşması (10 Şubat 1763) ile Britanya'ya döndü;
  1781–82 Fransız-İspanyol kuşatması sonunda 5 Şubat 1782 teslim, 1783 Versay ile İspanya'ya; 1798 Kasım (15–16 Kas.) yeniden İngiliz,
  1802-03-25 Amiens ile İspanya. (Oxford DNB «Blakeney, William» / «Murray, James (1721/2–1794)»; Avalon Project Treaty of Paris 1763 m.12; Britannica «Minorca».)
- Sınıf: SESSİZ-DEĞİŞİM · SINIR (iki yabancı dönem haritada İngiliz görünüyor) · EKSİK-MADDE.
- Öneri: s: → 1708-09-29..1756-06-29 ingiltere · 1756-06-29..1763-02-10 fransa (krallık künyesi) · 1763-02-10..1782-02-05 ingiltere ·
  1782-02-05..1798-11-16 ispanya · 1798-11-16..1802-03-25 ingiltere; dört kırılmaya madde (1756 Menorka'nın düşüşü; 1763 Paris m.12; 1782 Port Mahon teslimi; 1798 Stuart çıkarması).
  Günler gün düzeyinde ikinci kaynakla teyit edilmeli (DNB/NAM). Ayrıca 1708-09-29 ucu: Fort St Philip teslimi Eylül 1708 — OS/NS beyanı kayıtta yok (dönem B'ye düşer, B ajanına not).
- Önem: 1

#### 2. İyon Adaları 1809–1814 İngiliz işgali yok; 1807–1815 "fransa-cumhuriyet" anakronik
- Kimlik: Korfu, Kefalonya, Zaklise, İthaki, Çuha (Kythira), Ayamavra, Paksos, Parga · s: 1807-07-07→1815-11-05 fransa-cumhuriyet (kayıtta "BEYANLI YAKLAŞIKLIK").
- Kaynak: TDV «Yedi Ada Cumhuriyeti» / «Ayamavra»: İngilizler 1809'da Zanta, Kefalonya, Çuha, İthaki'yi; 1810'da Ayamavra'yı aldı; Korfu Fransızlarda
  1814'e kadar kaldı (Haziran 1814 teslim). Parga 22 Mart 1814'te İngiliz himayesine geçti (TDV «Parga»: 1814 İngiliz). 1804–1814 Fransa imparatorluktur (cumhuriyet değil).
- Sınıf: SESSİZ-DEĞİŞİM · TARİH-HATA · HAYALET (künye adı).
- Öneri: Zaklise/Kefalonya/İthaki/Çuha 1809-10-02 (Zante teslimi, TDV + Oxford DNB «Oswald, John») → ingiltere; Ayamavra 1810-04-16 → ingiltere; Paksos 1814-02;
  Parga 1814-03-22 → ingiltere; Korfu 1814-06-24 (Donzelot'un teslimi) → ingiltere; 1815-11-05 hepsi birlesik-iyon-adalari. 1807–1814 sahibi Fransız İmparatorluğu künyesiyle
  (fransa-cumhuriyet künyesinin ömrü 1804-05-18'i aşıyorsa hayalet). Her kırılmaya madde. Günler TDV + DNB ile teyit edilmeli (bu turda gün düzeyinde açılmadı).
- Önem: 1

#### 3. Ürdün: Kerak 1918-01-01 ve Amman 1918-09-25'ten itibaren "ingiltere"; 1921-02-01 emirlik günü kaynaksız
- Kimlik: `Kerak` s: 1918-01-01→1921-02-01 ingiltere; `Amman` 1918-09-25→1921-02-01 ingiltere; künye urdun-emirligi f=1921-02-01 (kayıt: "GÜNÜN dayanağı YOK").
- Kaynak: Kerak Ocak 1918'de İngiliz değildi (Tafîle Ocak 1918'de Arap ordusunca alındı; Kerak Ekim 1918'e kadar Osmanlı). Amman 25 Eylül 1918'de alındı (doğru),
  ancak 1918–1920 Şarkî Ürdün OETA-Doğu / Şam'daki Faysal Arap idaresine bağlıydı, İngiliz askerî idaresine değil (OETA East). Abdullah Amman'a 2 Mart 1921'de girdi;
  Kahire Konferansı 12–30 Mart 1921; emirlik hükümeti 11 Nisan 1921 (TDV «Ürdün»: "Şubat 1921'de kendini Şarkī Ürdün emîri ilân etti" — yıl/ay).
- Sınıf: TARİH-HATA (Kerak) · ÇELİŞKİ (sahip) · KAYNAKSIZ (gün).
- Öneri: Kerak → 1918-10-01 civarı (Kerak'ın Arap kuvvetlerine geçişi; gün kaynakla bulunmalı) · 1918-10-01..1920-07-24 sahibi Arap (Faysal) idaresi künyesi (varsa `suriye-arap-kralligi`),
  1920-07-24 Meysalun sonrası 1921'e kadar yerel idareler (beyanlı) · emirlik: TDV ay düzeyi "1921-02" → kural gereği yıl/ay ise `1921-01-01`? Hayır: kaynak ay veriyor, gün yok →
  ic_not ile 1921-02-01 BEYANLI kalabilir; alternatif 1921-04-11 (hükümet kuruluşu) iki kaynakla. Kronolojiye "Abdullah Amman'a girdi (2 Mart 1921)" maddesi.
- Önem: 2

#### 4. Irak 1917: 1917-03-11 tek blokta 13 yerleşim — Âne, Sâmerrâ, Kût vb. farklı günlerde düştü; Tikrit ve Ammâre günü yanlış
- Kimlik: `Âne`, `Sâmerrâ`, `Kût el-Amâre` (2. dönem), `Kerbelâ`, `Hille`, `Kûfe`, `Vâsıt`… s: f=1917-03-11 ingiltere (DEVRALMA, "Bağdat'ın kaybı" maddesinden);
  `Tikrit` f=1918-07-12; `Ammâre` f=1915-01-01 (TDV yıl).
- Kaynak (Moberly, *The Campaign in Mesopotamia* III–IV, HMSO 1925–27; Oxford Companion to Military History «Mesopotamian campaign»):
  Kût geri alındı 24 Şubat 1917 (2. Kût); Sâmerrâ 23–24 Nisan 1917; Tikrit 5–6 Kasım 1917; Âne (Anah) 28 Mart 1918 (Khan Baghdadi sonrası);
  Ammâre 3 Haziran 1915 (Townshend'in Regatta'sı). Kerbelâ/Necef/Hille 1917'de İngiliz siyasi memuru ile, Bağdat'la aynı gün değil.
- Sınıf: TARİH-HATA · SESSİZ-DEĞİŞİM (bölge tek günde boyanıyor).
- Öneri: Kût 1917-02-24; Sâmerrâ 1917-04-24; Tikrit 1917-11-06; Âne 1918-03-28; Ammâre 1915-06-03 — her birine madde (Moberly cilt/sayfa ile). Hille/Kerbelâ/Kûfe için gün Moberly IV'ten aranmalı.
  (Bu günler bu turda kaynakta AÇILMADI — askerî tarih bilgisinden; Moberly ile teyit şart. Tikrit kaydı Moberly IV'ten "1918-07-12 yerleşme" diyor: Kasım 1917'de alınıp terk edilmiş olabilir — kaynağı okuyan karar versin.)
- Önem: 2

**Düzeltme (bulgu 2'ye):** `fransa-cumhuriyet` künyesi f=1792-09-22, t=yok → 1804 sonrası imparatorluğu da kapsıyor; HAYALET değil, yalnız ad anakronizmi (önem 3). Asıl bulgu 1809–14 İngiliz işgalinin yokluğudur.

#### 5. Kıbrıs: yerleşimler imza günü (1878-06-04) İngiliz'e geçiyor; TDV yürürlük ve fiilî idare 15 Temmuz 1878
- Kimlik: Lefkoşa, Magosa, Girne, Baf, Limasol, Tuzla, Akrotiri, Episkopi… (10) s: f=1878-06-04 ingiltere; künye kibris-ingiliz f=1878-06-04 (künye kronolojisinde 07-15 ve 07-22 zaten var); kronoloji_ingiltere.js 1878-06-04 madde.
- Kaynak: TDV «Kıbrıs» (https://islamansiklopedisi.org.tr/kibris): "Bu anlaşmalar 15 Temmuz 1878'de bizzat padişah tarafından onaylanarak yürürlüğe girdi"; "Aynı gün Kıbrıs'ın İngiltere geçici idaresi altına girdiği resmen ilân edildi." İngiliz tarafı: Amiral Lord John Hay'in Lefkoşa'da bayrak çekişi 12 Temmuz 1878 (bu turda İngiliz kaynağı AÇILMADI — TNA/Hansard ile teyit).
- Sınıf: ÇELİŞKİ · TARİH-HATA (harita 41 gün erken; imza ≠ devir).
- Öneri: 10 yerleşimin İngiliz dönemi f=1878-07-15 (TDV esas; ic_not'ta İngiliz kaynaklı 12 Temmuz beyanı); 1878-06-04 maddesi "sözleşme imzalandı" kalır, 07-15'e ayrı madde. 1914-11-05 ilhak TDV ile BİREBİR (teyit). 1925 taç kolonisi TDV yalnız yıl.
- Önem: 2

#### 6. Katar: Osmanlı dönemi yürürlüğe girmeyen 1913 sözleşmesiyle kapatılıyor; garnizon Ağustos 1915'e kadar Doha'daydı
- Kimlik: data/yerlesimler.js:1367 Doha (Katar) v: 1871-09-20→1913-07-29 (Osmanlı kazası), s: 1913-07-29→ katar; aynı Katar Yarımadası (iç, dolgu).
- Kaynak: TDV «Katar»: "29 Temmuz 1913'te Londra'da imzalanan, ancak yürürlüğe girmeyen antlaşma"; "I. Dünya Savaşı ile birlikte bölgedeki Osmanlı varlığı tamamen sona erdi."
  Qatar Digital Library, IOR/L/PS/10/386 (Simla telgrafı 22 Ağustos 1915, HMS Pyramus): Türk müfrezesi kale ve siperleri 19/20 Ağustos 1915 gecesi boşalttı. https://www.qdl.qa/archive/81055/vdc_100023851642.0x0000b1
- Sınıf: TARİH-HATA · ÇELİŞKİ.
- Öneri: Osmanlı v: t=1915-08-20 (QDL; ic_not'ta TDV'nin yalnız "I. Dünya Savaşı ile" dediği beyanı); 1913-07-29 maddesi "imzalandı, yürürlüğe girmedi" kalır; 1915-08-20 maddesi "Osmanlı garnizonu Doha'yı boşalttı"; 1916-11-03 himaye TDV ile teyitli. Kuveyt'te 1913 kırılması yok (doğru).
- Önem: 2

#### 7. Ürdün — TDV ek teyidi (bulgu 3'ü güçlendirir)
- TDV «Ürdün» (Cengiz Tomar): Salt ve Amman Eylül 1918'de Arap kuvvetlerince alındı; Ürdün 1918 sonunda Osmanlı'dan çıkıp **Faysal'ın yönetimine** girdi. Atlas Amman/Kerak'ı 1918–1921 "ingiltere" boyuyor → TDV ile ÇELİŞKİ.
- Öneri: 1918 sonu–1920-07-24 sahibi Faysal idaresi (Suriye Arap Krallığı künyesi; yoksa EKSİK-DEVLET), 1920-07-24 → emirlik arası beyanlı yerel idare. Önem: 2

#### 8. Mısır 1882: İskenderiye ve Süveyş işgali Tel el-Kebir gününe (1882-09-13) eşitlenmiş
- Kimlik: data/yerlesimler.js:956 Kahire, :958 İskenderiye, :1142 Süveyş · isg: {f:"1882-09-13", d:"ingiltere", kaynak:"urabi-pasa"}. İşgal isg: katmanında, s: Hidivlik/Osmanlı — iki taraf (Osmanlı hukukî egemenliği / İngiliz fiilî işgali) doğru ayrılmış (teyit).
- Kaynak: TDV «İskenderiye» (https://islamansiklopedisi.org.tr/iskenderiye): "11 Temmuz 1882'de ... İngilizler'ce işgal edildi." Süveyş 2 Ağustos, İsmâiliye 20 Ağustos 1882 çıkarmaları; Kahire'ye giriş 14 Eylül 1882 (bu üçü bu turda AÇILMADI).
- Sınıf: TARİH-HATA · EKSİK-MADDE.
- Öneri: İskenderiye isg f=1882-07-11 (TDV; çıkarma 13–15 Temmuz beyanı) + madde; Süveyş f=1882-08-02; Kahire f=1882-09-14 + "İngilizler Kahire'ye girdi" maddesi. Önem: 2

#### 9. İskenderiye 1801–1803 ve 1807 İngiliz işgalleri haritada yok; 1807-03-01 madde günü ay düzeyi
- Kimlik: İskenderiye isg: 1798-06-30→1801-08-31 fransa-cumhuriyet, sonra 1882. kronoloji_ingiltere.js 1807-03-01 "İskenderiye ve Ebûkīr'e İngiliz çıkarması".
- Kaynak: TDV «İskenderiye»: "Emîn Ağa da şehri İngilizler'e teslim etti (Mart 1807)"; "İngiliz donanması İskenderiye'den çekilmiş (19 Eylül 1807)"; "16 Mart'ta İngiliz donanmasının da İskenderiye'den ayrılmasıyla" (yıl metinde yok; Amiens tahliyesi 1803). Fransız teslimi Eylül 1801 sonrası şehir İngiliz garnizonundaydı.
- Sınıf: SESSİZ-DEĞİŞİM · TARİH-HATA.
- Öneri: İskenderiye isg ingiltere 1801-09-02→1803-03-16 (yıl beyanlı) ve 1807-03-20→1807-09-19 (20 Mart Fraser'ın girişi DNB ile teyit edilmeli; yoksa 1807-03-01 "[yalnız ay]"); 1807-09-19 çekilme maddesi. Önem: 2

#### 10. Malta: iki künye aynı yapı (malta-ingiliz ↔ malta-kolonisi), malta-kolonisi malta-fransiz ile 8 ay çakışıyor
- Kimlik: devletler.js `malta-ingiliz` f=1800-09-05 t=1964-09-21; `malta-kolonisi` f=1800-01-01 t=1964-09-21; `malta-fransiz` f=1798-06-12 t=1800-09-04. Hiçbiri yerleşim s:'inde kullanılmıyor (Malta/Mdina/Gozo s: 1800-09-05→1964 `ingiltere`); yalnız künye kronolojisi.
- Kaynak: malta-ingiliz'in kendi kaynağı (Univ. of Malta OAR): "General Vaubois capitulated ... on September 5, 1800"; malta-kolonisi f=1800-01-01 yalnız TDV yılından ("Malta 1800'de İngiltere tarafından işgal edildi") — kural gereği yıl başına inmiş, ama gün bilinen ikiz künye var. malta-fransiz t=1800-09-04 vs malta-ingiliz f=1800-09-05: kapitülasyon 4 Eylül imza / 5 Eylül teslim — iki künye farklı olayı tarihliyor, beyan yok.
- Sınıf: ÇELİŞKİ (mükerrer künye; 1800-01-01..09-04 iki sahip) · KAYNAKSIZ (gün farkı beyansız).
- Öneri: malta-kolonisi'ni malta-ingiliz'e birleştir (künye kronolojilerini tek künyede topla: 1802-06-15 Ulusal Kongre, 1813-07-23 Maitland, 1814-05-30 Paris m.7); malta-fransiz t ve malta-ingiliz f'yi aynı güne çek (1800-09-05 teslim; ic_not: "kapitülasyon 4 Eylül imzalandı, 5 Eylül teslim" — iki kaynakla). Harita etkisi yok (yerleşim zaten ingiltere 1800-09-05). Önem: 2

#### 11. Körfez 1820: Genel Antlaşma "İngiliz hâkimiyeti" diye boyanıyor; şeyhlikler arasında tutarsız sahip/gün
- Kimlik: Abu Dabi, Ras el-Hayme s: 1820-01-08→ `ingiltere`; Şârika 1820-02-04→ `ingiltere`; Dubay, Acman, Ummu'l-Kuveyn 1820-01-01→ `trucial-states`; künye trucial-states f=1820-01-01 ("sahil şeyhlikleri İngiliz hâkimiyetine girer"); Manama 1861-05-21→ `ingiltere`; Kuveyt 1914-11-22→ `kuveyt`; Doha → `katar`; Mukalla 1888 → `ingiltere`.
- Kaynak: TDV «Birleşik Arap Emirlikleri» (künye kaynağında): "Gemilere saldırılmaması konusunda İngilizler'le sahil şeyhleri arasında 1820'de bir antlaşma" — himaye/ilhak değil, deniz barışı. Antlaşma 8 Ocak 1820 Ras el-Hayme'de; imzalar 8 Ocak–15 Mart 1820 arasında; Acman ve Ummu'l-Kuveyn 15 Mart 1820'de katıldı (Aitchison, *A Collection of Treaties, Engagements and Sanads* XI — bu turda açılmadı; ikincil özet: General Maritime Treaty of 1820 kaydı). Himaye 1892 Münhasırlık Anlaşması'yla (künyede 1892-01-01; gün 6–8 Mart 1892, Aitchison ile teyit).
- Sınıf: ÇELİŞKİ (aynı statü üç farklı sahiple: ingiltere / trucial-states / şeyhlik) · TARİH-HATA (Acman, Ummu'l-Kuveyn 1820-01-01; trucial-states f 1820-01-01 kaynak 8 Ocak diyor).
- Öneri: (a) trucial-states f=1820-01-08 (madde günüyle aynı); (b) Abu Dabi, Ras el-Hayme, Şârika s: d → `trucial-states` (ingiltere değil; himaye ≠ ilhak — Kuveyt/Katar'daki yaklaşımla aynı); (c) Acman, Ummu'l-Kuveyn f=1820-03-15; (d) Bahreyn 1861-05-21→ `bahreyn` kalmalı (statü 1861 sürekli barış, 1880/1892 münhasırlık) ve himaye isg:/v: katmanıyla gösterilmeli; künye kronolojisinde 1880-12-22 ve 1892-03-13 münhasırlık maddeleri eksik (Aitchison ile gün). Karar Emre'nin: harita "himaye = İngiliz boyası" mı, "himaye = yerel devlet + vassal katmanı" mı — şu an ikisi birlikte kullanılıyor. Önem: 2

#### 12. Ras el-Hayme 1622–1820 "umman" — Kavâsım (Kāsımî) şeyhliği yok
- Kimlik: `Ras el-Hayme (Cülfâr)` s: 1622-05-01→1820-01-08 umman.
- Kaynak: 18. yy ortasından itibaren Ras el-Hayme Kavâsım'ın merkezidir; 1809 ve 1819 İngiliz seferleri Kavâsım'a karşıdır (TDV «Birleşik Arap Emirlikleri», «Re'sülhayme» maddeleri bakılmalı — bu turda açılmadı). Atlasın kendi 1820-01-08 maddesi de "Kavâsım"ı anıyor; yerleşim ise Umman'da.
- Sınıf: EKSİK-DEVLET · ÇELİŞKİ.
- Öneri: `kavasim` künyesi (TDV gün/yıl ile, ~1720–1820) ve Ras el-Hayme/Şârika s: buna; 1819-12 İngiliz seferi (Ras el-Hayme düşüşü 9 Aralık 1819) maddesi. Önem: 2

#### 13. Remle 1917-01-01 İngiliz — 10 ay erken (Remle 15 Kasım 1917'de alındı)
- Kimlik: `Remle (Ramla)` s: 1917-01-01→1920-07-01 ingiltere (TDV yıl, BEYANLI YAKLAŞIKLIK); madde "Remle: Osmanlı Devleti → ingiltere / büyük britanya" 1917-01-01.
- Kaynak: TDV «Remle» yalnız yıl veriyor → kural gereği sıradaki basamak zorunlu. Remle ve Lydda 15 Kasım 1917'de (Mughar Sırtı muharebesi sonrası) işgal edildi (Falls, *Military Operations Egypt & Palestine* II, HMSO 1930; bu turda açılmadı). 1917-01-01'de Remle Gazze hattının ~60 km gerisinde Osmanlı üssüydü; Gazze 1917-11-07, Yafa 1917-11-16 atlasta doğru sırada → Remle haritada Gazze'den 10 ay önce İngiliz.
- Sınıf: TARİH-HATA · SINIR (cephe gerisinde İngiliz adası).
- Öneri: f=1917-11-15 (Falls II ile teyit), madde günü aynı. Önem: 1

#### 14. Halâib: 1923-10-29 yapay kırılması (Cumhuriyet ilanı günü) — misir-kralligi'ne geçiş
- Kimlik: data/yerlesimler_afrika.js:680 `Halâib` s: 1885-02-05→1923-10-29 ingiltere; 1923-10-29→1953 misir-kralligi. Kırılmanın en yakın maddesi Ahlat (alakasız).
- Kaynak: 1923-10-29'da Halâib'de olay yok; bu, atlasın eski "1923 ufku" kapanış artığı (Cebel Merre kaydında "1923-10-29 yapay kırılması kaldırıldı" beyanı var — Halâib atlanmış). Halâib 1899 Kondominyum'la 22°K kuzeyinde → Mısır; 1902 idari hattıyla Sudan idaresine bırakıldı (iki taraf: Mısır 1899 sınırı / Sudan 1902 idari hattı).
- Sınıf: SESSİZ-DEĞİŞİM · TARİH-HATA · tartışmalı sınır.
- Öneri: 1923-10-29 kırılması kaldırılsın; 1899-01-19→ (Kondominyum ile) sahibi ve 1902-11-04 idari hat (İçişleri Bakanı kararı) iki taraflı beyanla işlensin; ingiltere 1885-02-05 dönemi de "İngiliz-Mısır" olarak gözden geçirilmeli (1885'te Halâib Mısır hidivliği garnizonu). Önem: 2

#### 15. Silopi / Cumai: İngiltere → TBMM geçişi Ankara İtilafnamesi'ne (Fransa–Türkiye, 1921-10-20) bağlanmış
- Kimlik: `Silopi`, `Cumai (Birlikköy)` s: 1918-10-30→1921-10-20 ingiltere; 1921-10-20→ tbmm-turkiye (kaynak: "Ankara İtilafnamesi — Türkiye-Suriye sınırı"). Kırılmanın maddesi alakasız (Arnavutluk).
- Kaynak: Ankara İtilafnamesi Fransız Suriye'si ile sınırı belirler (Cizre'de Dicle'ye kadar); Silopi Dicle'nin doğusunda, Musul meselesi sahasındadır — İngiltere bu antlaşmanın tarafı değil (TDV «Ankara Antlaşması (1921)»; bu turda açılmadı). 1918-10-30'da (Mondros günü) Silopi'nin İngiliz işgaline girdiğine dair kaynak kayıtta yok.
- Sınıf: ÇELİŞKİ · KAYNAKSIZ · SESSİZ-DEĞİŞİM.
- Öneri: Silopi/Cumai'nin 1918–1921 fiilî durumu kaynakla (TDV «Silopi»/«Cizre», Musul meselesi monografileri — ör. TTK yayınları) yeniden kurulsun; büyük olasılıkla Osmanlı/TBMM'de kesintisiz kalmalı (o zaman ingiltere dönemi silinir). Önem: 2

#### 16. Helgoland 1807–1890 İngiliz — atlasta yerleşim yok
- Kimlik: data/yerlesimler*.js'te Helgoland adlı yerleşim yok (yalnız Afrika kayıtlarında 1890 antlaşma adı geçiyor). Ada en yakın Alman kıyı peteğine emiliyor.
- Kaynak: İngiltere adayı 5 Eylül 1807'de Danimarka'dan aldı; Kiel Antlaşması (14 Ocak 1814) ile devredildi; 1 Temmuz 1890 Helgoland–Zanzibar Antlaşması, Anglo-German Agreement Act 1890 (53 & 54 Vict. c. 32, legislation.gov.uk), devir 9/10 Ağustos 1890 (bu turda açılmadı).
- Sınıf: EKSİK-DEVLET (yerleşim) · EKSİK-MADDE.
- Öneri: Helgoland yerleşimi (54.18 K, 7.89 D): 1714–1807-09-05 danimarka · 1807-09-05→1890-08-10 ingiltere · sonra almanya; üç madde. Ada küçük; petek etkisi deniz içinde kalır ama kronoloji ↔ harita senkronu için gerekli. Önem: 3

#### 17. Hannover künye kronolojisi 1714-01-01 (I. George'un tahta çıkışı) — gün ve takvim
- Kimlik: devletler.js `hannover` kronoloji {t:"1714-01-01", "Elektör Georg Ludwig ... Büyük Britanya tahtına çıktı"}; kronoloji_ingiltere.js 1714-08-12 aynı olay.
- Kaynak: Anne 1 Ağustos 1714 (OS) öldü = 12 Ağustos 1714 (NS); kronoloji_ingiltere.js 1714-08-12 doğru Gregoryen (teyit: Oxford Companion to British History «George I»).
- Sınıf: TAKVİM · ÇELİŞKİ (aynı olay iki yerde iki günle).
- Öneri: hannover kronolojisi t=1714-08-12 (ic_not: "Jülyen 1 Ağustos 1714"). Kişisel birlik 1714–1837 haritada ayrı devlet olarak doğru (Hannover hiçbir zaman Britanya'nın parçası olmadı); 1837-06-20 maddesi teyitli. Önem: 3

#### 18. 1745 Jakobit maddesi: başlık "karaya çıktı", gün Glenfinnan sancak açılışı
- Kimlik: kronoloji_ingiltere.js:775 t=1745-08-30 "Bonnie Prince Charlie karaya çıktı", gun: "kaynak günü 19 Ağustos 1745 Jülyen", kaynak: el-kitabi.
- Kaynak: 19 Ağustos 1745 (OS) = Glenfinnan'da sancağın açılışı; karaya çıkış Eriskay 23 Temmuz (OS) / anakara 25 Temmuz 1745 (OS) (Oxford DNB «Charles Edward [Charles Edward Stuart]»; bu turda açılmadı). Gregoryen çevirim (+11) doğru.
- Sınıf: TARİH-HATA (başlık/olay uyumsuz) · KAYNAKSIZ (el-kitabi).
- Öneri: başlık "Glenfinnan'da Stuart sancağı açıldı — 1745 Jakobit Ayaklanması" (gün 1745-08-30 kalır) ya da gün 1745-08-05 (25 Temmuz OS) ile "karaya çıktı"; kaynak DNB. Önem: 3

#### 19. Mondros sonrası kırılmaların maddesi yok / alakasız
- Kimlik (c_kir.txt): 1918-10-30 Şehrizor, Kerkük, Erbil, Halepçe, Silopi, Cumai, Altınköprü → ingiltere (n=7; en yakın madde Baden, 1918-11-22); 1918-12-17 Şavşat, Artvin, Borçka → ingiltere (madde yok); 1920-04-01 Artvin, Şavşat, Borçka → gurcistan-demokratik-cumhuriyeti (madde alakasız).
- Kaynak: TDV «Artvin»: "17 Aralık 1918'de İngilizler tarafından işgal edildi"; "İngiliz işgali 1920 yılının Nisan ayına kadar sürdü"; "İngilizler çekilirken şehri Gürcistan'a bıraktılar." → atlas günleri TDV ile uyumlu (teyit), yalnız madde yok. Erbil kaydı kendisi "İŞGAL GÜNÜ BULUNAMADI, 1918-10-30 = Mondros" beyanlı.
- Sınıf: EKSİK-MADDE (Değişmez 2).
- Öneri: madde 1918-12-17 "Artvin İngiliz işgaline girdi" (TDV artvin) · 1920-04-01 "İngilizler Artvin'i Gürcistan'a bıraktı" (TDV, ay düzeyi beyanı) · 1918-10-30 "Mondros sonrası Güney Kürdistan'ın İngiliz işgali" (yer adlarıyla; beyanlı). Kerkük'ün ikinci işgal günü (Ekim 1918 sonu) Moberly IV ile aranmalı. Önem: 2

#### 20. Aden 1839-01-19: TDV yalnız yıl veriyor; harita anahtarı 1839–1937 "ingiltere" (Bombay'a bağlıydı)
- Kimlik: `Aden` s: 1839-01-19→1967-11-30 ingiltere; künye aden-kolonisi f=1937-04-01 (yerleşimde kullanılmıyor).
- Kaynak: TDV «Aden» (Mustafa L. Bilge): "1839'da Aden'e yerleştiler"; "1937 yılında ise doğrudan İngiltere'ye tâbi müstakil bir koloni (crown colony) haline getirildi" (önce Bombay eyaletine bağlı). 19 Ocak 1839 günü TDV'de yok → ikinci kaynak kayda yazılmalı (Gavin, *Aden under British Rule* 1975 — künyede zaten anılıyor).
- Sınıf: KAYNAKSIZ (gün) · not: 1839–1937 Bombay/Hindistan bağlılığı haritada ayrı boyanmıyor — harita anahtarı aynı kalacaksa yalnız 1937-04-01 maddesi yeterli (künye kronolojisinde var, teyit).
- Öneri: Aden s: kaynağına "19 Ocak 1839 — Gavin 1975, s. ?" eklensin; Lahic Sultanlığı / Aden Himayesi (1886'dan antlaşmalar) künyesi atlasta yok — EKSİK-DEVLET adayı (kapsam dışı bırakıldıysa beyan). Önem: 3

---

### Teyit (temiz çıkanlar)
- 1752-09-14 takvim maddesi: Calendar (New Style) Act 1750, "fourteenth day of September" — doğru.
- 1714-08-12 I. George (NS; Jülyen 1 Ağustos) — doğru. 1746-04-27 Culloden (16 Nisan OS) — doğru. 1715 Jakobit yıl düzeyi, ic_not'ta 6/17 Eylül beyanlı — kurala uygun.
- 1801-01-01 Birlik: Union with Ireland Act 1800 — doğru; İrlanda yerleşimleri 1801'de sahip değiştirmiyor (anahtar `ingiltere` 1281→1922) — harita değişmediği için kırılma gerekmez, künye ingiltere-irlanda-krallik t=1801-01-01 tutarlı.
- 1922-12-06 İrlanda Serbest Devleti: 26 kontluk ayrımı doğru — Monaghan, Cavan, Donegal Serbest Devlet'te; Armagh, Newry, Enniskillen, Omagh, Belfast, Derry `ingiltere`de kalıyor (Antlaşma m.12, Kuzey İrlanda'nın 7 Aralık 1922 çekilmesi; 6–7 Aralık bir günlük hukukî ara haritada gösterilmiyor — iki tarafın kaynağı: Irish Free State (Agreement) Act 1922 / Northern Ireland Parliament adresi 7 Aralık 1922 — beyan önerilir, düzeltme önerilmez).
- 1914-11-05 Kıbrıs ilhakı (TDV BİREBİR); 1914-12-18 Mısır himayesi (TDV); 1922-03-15 Mısır Krallığı (TDV gövde alıntılı). 1922-02-28 bildirisi Kahire isg: kapanışında kullanılmış — tutarlı.
- 1914-11-06 Fâv, 1914-11-22 Basra (TDV basra), 1917-03-11 Bağdat, 1917-12-09 Kudüs, 1918-09-21 Nablus, 1918-11-08 Musul, 1918-12-24 Batum, 1920-07-07 Batum devri, 1920-07-01 Filistin sivil idaresi (TDV filistin) — kırılma ve madde aynı gün.
- 1815-11-05 İyon himayesi ve 1864-06-02 devir (TDV yedi-ada-cumhuriyeti) — günler doğru; yalnız 1864-06-02 kırılmasının kronoloji maddesi İngiltere dosyalarında yok (birlesik-iyon-adalari künye kronolojisinde var → YALNIZ-KUNYE).
- 1800-09-05 Malta (Univ. of Malta OAR), 1802-03-25 Amiens Menorka, 1861-05-21 Bahreyn (TDV; İngiliz belgeleri 31 Mayıs beyanlı), 1914-11-22 Kuveyt himayesi (TDV kuveyt) — günler kaynaklı.
- Artvin 1918-12-17 / 1920-04 (TDV artvin) — günler doğru (yalnız madde eksik, bulgu 19).

### Sayım
- Künye denetlendi: 22 (hannover, ingiltere-irlanda-krallik, malta-fransiz/ingiliz/kolonisi, birlesik-iyon-adalari, septinsular, kibris-ingiliz, misir-sultanligi, misir-kralligi, aden-kolonisi, trucial-states, kuveyt, bahreyn, katar, umman, ingiliz-mezopotamya-idaresi, irak-kralligi, filistin-mandasi, urdun-emirligi, irlanda-dail-cumhuriyeti, irlanda-serbest-devlet, fransa-cumhuriyet).
- Madde: madde_C.txt 142 madde okundu; bölge ile ilgili ~30'u derinlemesine (gün/kaynak) bakıldı. Britanya iç olayları (edebiyat, bilim, yasalar) gün düzeyinde tek tek açılmadı.
- Kırılma grubu: 71 (bölge süzgeci c_filtre.py → c_kir.txt), hepsi gözden geçirildi; ~35'i yerleşim s: kaydıyla açıldı. Sudan/Somali kırılmaları (Afrika) kapsam dışı bırakıldı.
- Bulgu: 20 başlık (7 numaralı, 3'ün TDV ek teyidi) → 19 ayrı bulgu. Önem 1: 3 (Menorka, İyon 1809–14, Remle) · Önem 2: 13 · Önem 3: 3.

### Ölçülemeyen / açılamayan
- Gün düzeyinde AÇILMADI (öneriler bilgiye dayalı, kaynakla teyit şart): Moberly *Mesopotamia* III–IV (Kût 1917-02-24, Sâmerrâ, Tikrit, Âne, Ammâre), Falls *Egypt & Palestine* II (Remle 15 Kasım 1917), Oxford DNB (Menorka 1756/1782/1798 günleri, Fraser 1807, Charles Edward 1745), Aitchison *Treaties* XI (Körfez 1820/1861/1880/1892 imza günleri), TNA/Hansard (Kıbrıs 12 Temmuz 1878 bayrak çekişi), Helgoland 1807/1814/1890 metinleri.
- TDV «Musul» doğrudan açılamadı (slug arama sayfasına düştü); «Ürdün» özet olarak okundu, gövde alıntısı alınamadı; «Kıbrıs» sayfasının son 56 bin karakteri okunmadı.
- data/yerlesimler*.js'te Osmanlı `d:` dönemleri (Kût 1916–17, Kerkük 1918-05/10, Parga 1819–1913) tek tek açılmadı — "(boş/ardıl yok)" kırılmalarının Osmanlı'ya döndüğü varsayıldı (Kuveyt/Doha v: ile doğrulandı).
- Bahreyn, Kuveyt 1899 gizli antlaşması (23 Ocak 1899): harita değişikliği yapılmamış; kuveyt künye kronolojisinde madde var — iki taraflı statü (Osmanlı kazası / İngiliz gizli himayesi) beyanı yeterli görüldü, bulgu yazılmadı.


## Bölüm D — Kuzey Amerika/Karayipler, Hindistan (İngiliz tarafı), 1923–bugün

(alt ajan raporu, aynen)

### Bulgu D — Kuzey Amerika/Karayipler 1714–1867 · İngiliz Hindistanı · 1923–bugün dekolonizasyon

Ağaç: KASA worktree vigorous-merkle-5c76dd (7a3659d54); dökümler scratchpad (kirilma.txt, yerlesim_ing.json, devletler.json).
Kaynak notu: bu turda web doğrulaması kısıtlı; "kaynak" satırında "bilgi (doğrulanmadı)" yazanlar ikinci el bellek bilgisidir, kayda girmeden önce adı geçen akademik kaynakla teyit edilmeli.

### A. Yapısal / yüksek önem

#### 1923 sonrası İngiliz kronolojisi BOŞ
- kimlik: data/kronoloji_ingiltere.js (son madde satır 1414, 1923-07-24 Lozan) · kronoloji_cok_ingiltere.js (son 1906)
- atlasta: 1923-07-24'ten sonra İngiltere kronolojisinde TEK madde yok. Dekolonizasyon kırılmaları yalnız `kronoloji_sinir_halef_1923_2000.js`te (çoğu YER-MADDELI, kaynak çoğunlukla "Britannica (ilgili ülke maddeleri); BM/antlaşma ve bağımsızlık tarihleri" — toptan, madde başına değil).
- eksik başlıca maddeler: Westminster Statüsü 1931-12-11; Irak bağımsızlığı/manda sonu 1932-10-03; İngiliz-Mısır Antlaşması 1936-08-26; Burma ayrılması 1937-04-01; Éire anayasası 1937-12-29; Ürdün 1946-05-25 (Londra Antl. 22 Mart 1946); Hindistan-Pakistan 1947-08-15; Seylan 1948-02-04, Burma 1948-01-04; Filistin mandası sonu 1948-05-14/15; İrlanda Cumhuriyeti Yasası 1949-04-18; Newfoundland 1949-03-31; Süveyş Tahliye Antl. 1954-10-19 ve Süveyş Krizi 1956-10-29/11-06; Sudan 1956-01-01; Gana 1957-03-06; Malaya 1957-08-31; Kıbrıs 1960-08-16; Kuveyt 1961-06-19; Malta 1964-09-21; Aden 1967-11-30; Körfez 1971 (Bahreyn 08-15, Katar 09-03, BAE 12-02); Falkland Savaşı 1982-04-02/06-14; Hong Kong 1997-07-01.
- sınıf: EKSİK-MADDE · önem 3
- öneri: kronoloji_ingiltere.js'e 1923 sonrası en az yukarıdaki ~25 madde; kaynak legislation.gov.uk (Statute of Westminster 1931, Indian Independence Act 1947, Ireland Act 1949, Burma Independence Act 1947, Cyprus Act 1960, Malta Independence Act 1964, Hong Kong Act 1985), Hansard; Ortadoğu maddelerinde TDV.

#### ingiliz-kuzey-amerika künyesi t=1923-10-29 — hayalet kuyruk
- kimlik: devletler.js `id:"ingiliz-kuzey-amerika"` (f 1763-02-10, t 1923-10-29, harita: yok)
- atlasta: son yerleşim çıkışı 1871-07-20 (Britanya Kolumbiyası) / Newfoundland 1855; künye 1923-10-29'a (Türkiye Cumhuriyeti'nin ilanı günü!) uzanıyor — eski "1923 ufku" kalıntısı.
- kaynak: British North America Act 1867 (legislation.gov.uk/ukpga/Vict/30-31/3) — Kanada 1867-07-01; Rupert's Land Order in Council 1870-07-15; BC 1871-07-20 (künyenin kendi kronolojisi).
- sınıf: HAYALET · TARİH-HATA · önem 2
- öneri: t = 1871-07-20 (son kıta-içi İngiliz kolonisi BC'nin katılışı) ya da Rupert's Land/BC ayrı ele alınacaksa 1870-07-15/1871-07-20; ic_not_t'ye "1923-10-29 ufuk kalıntısı silindi" yaz.

#### Fort St. Pierre (Rainy Lake) kanada → abd 1923-10-29 — uydurma kırılma
- kimlik: yerleşim "Fort St. Pierre (Rainy Lake)" [48.61,-93.40]; s: fransa 1731–1763-02-10 · ingiliz-kuzey-amerika –1867-07-01 · kanada –1923-10-29 · abd 1923-10-29– (kaynak "Britannica: United States; Alaska sınırı 1903/1908" — konuyla ilgisiz)
- atlasta: 1923-10-29'da Ontario'daki bir nokta ABD'ye geçiyor; o gün olan olay Türkiye Cumhuriyeti'nin ilanı. Koordinat Fort Frances (Ontario) karşısı; Rainy Lake/Rainy River sınırı 1783 Paris (Madde 2) ve 1842 Webster-Ashburton ile çizildi, 1923'te hiçbir değişim yok.
- ayrıca: 1867-07-01'de "kanada"ya geçiş yanlış — Rainy Lake bölgesi 1867 Kanada'sının (Ontario-Québec-NS-NB) parçası değildi, Rupert's Land/HBC alanıydı; Kanada'ya 1870-07-15'te geçti (Ontario-Manitoba sınırı uyuşmazlığı 1884 Privy Council kararıyla Ontario lehine).
- sınıf: TARİH-HATA · SESSİZ-DEĞİŞİM · önem 2
- öneri: kale nehrin Kanada kıyısındaysa (Fort Frances, ON) abd dönemini sil, kanada 1870-07-15–2000; kale Minnesota kıyısındaysa (Ranier yakını) ingiltere→abd 1783-09-03 (ya da fiilî 1796/1818) kırılması + madde. Hangi kıyı: Minnesota Historical Society / DCB "La Vérendrye" ile ölç (ölçülmedi).

#### Halâib ingiltere → misir-kralligi 1923-10-29 — aynı ufuk kalıntısı
- kimlik: kirilma.txt 1923-10-29 TARAF-MADDELI ingiltere -> misir-kralligi n=1 Halâib
- atlasta: Halâib'in İngiliz'den Mısır'a geçişi Türkiye'nin cumhuriyet ilanı gününe bağlı.
- kaynak: Halâib üçgeni idari sınırı 1899 Kondominyum Antlaşması (22. paralel) ve 1902 İçişleri Bakanı kararı (idari çizgi Sudan lehine); 1923'te değişiklik yok (bilgi; doğrulanmadı — TDV "Halâyib" ara).
- sınıf: TARİH-HATA · önem 2 (hassas: Mısır-Sudan uyuşmazlığı, taraf tutmadan iki iddiayı beyan et)
- öneri: 1899-01-19'dan itibaren ingiliz-sudani (idari) ya da misir-kralligi + beyan; 1923-10-29 kırılmasını kaldır. (Atlasta Halâib 1885-02-05–1923-10-29 doğrudan "ingiltere"; 1885 Masavva maddesine bağlı — o da ölçülmeli.)

### B. Kuzey Amerika / Karayipler 1714–1867

#### Pensacola 1781-05-08 — gün ve madde
- kimlik: yerleşim Pensacola s: ingiltere 1763-02-10–1781-05-08 → ispanya; kirilma YALNIZ-KUNYE-MADDESI (eşleşen madde ilgisiz: devletler.js:ispanyol-peru Túpac Amaru)
- atlasta: 8 Mayıs = Queen's Redoubt barut deposunun patladığı gün; teslim değil.
- kaynak: kapitülasyon metni "Fort George, Pensacola, May 9, 1781" (Campbell–Gálvez imzalı; London Gazette 12214, thegazette.co.uk/London/issue/12214/page/3 — arama özetinden, PDF açılmadı); fiilî teslim ve beyaz bayrak 10 Mayıs 1781 (American Battlefield Trust, battlefields.org/learn/revolutionary-war/battles/siege-pensacola). Kapitülasyon bütün Batı Florida'yı kapsar.
- sınıf: TARİH-HATA · EKSİK-MADDE · önem 2
- öneri: kırılma 1781-05-10 (ic_not: "kapitülasyon imzası 9 Mayıs, teslim 10 Mayıs; 8 Mayıs patlama günü"); kronoloji_ingiltere.js'e madde "Pensacola Gálvez'e teslim oldu — Batı Florida İspanya'ya geçti" (1781-05-10).

#### Natchez 1779-09-21 — MADDESIZ
- kimlik: Natchez (Grand Village) ingiltere → ispanya 1779-09-21
- kaynak: Baton Rouge 21 Eylül 1779'da teslim oldu; Dickson kapitülasyonda Natchez'deki Fort Panmure'u da teslim etti, Gálvez 50 kişilik müfreze yolladı (64 Parishes, «Battle of Baton Rouge (1779)», 64parishes.org/entry/battle-of-baton-rouge-1779 — arama özeti).
- sınıf: EKSİK-MADDE · önem 2
- öneri: gün doğru (kapitülasyon günü). Madde: "Baton Rouge kapitülasyonu — Natchez (Fort Panmure) İspanya'ya geçti" 1779-09-21.

#### St. Augustine / Mission San Luis 1783-09-03 — yanlış antlaşmaya bağlı
- kimlik: St. Augustine, Mission San Luis ingiltere → ispanya 1783-09-03 (ALAKASIZ-YAKIN)
- atlasta: yakın madde "Paris Antlaşması — Amerikan bağımsızlığı tanındı"; Florida'yı anmıyor.
- kaynak: Floridalar İspanya'ya 3 Eylül 1783 İngiliz-İspanyol Versay Barışı ile bırakıldı (Parry, Consolidated Treaty Series c.48 — açılmadı); fiilî devir St. Augustine 12 Temmuz 1784 (bilgi; doğrulanmadı).
- sınıf: EKSİK-MADDE · önem 2
- öneri: gün kalsın; madde "Versay Barışı (İngiltere–İspanya/Fransa) — Floridalar ve Menorka İspanya'ya" 1783-09-03 (Belize kerestecilik hakkını da anar).

#### Manila 1764-05-31 MADDESIZ · Havana iadesiyle ölçü tutarsız
- kimlik: Manila ingiltere 1762-10-06–1764-05-31; Havana ingiltere 1762-08-13–1763-02-10
- atlasta: Manila fiilî tahliye gününe, Havana antlaşma imzasına bağlı — aynı antlaşmayla dönen iki şehir iki ölçüyle. Manila'nın ne alınışı ne iadesi İngiliz kronolojisinde madde; Havana'nın alınışı yalnız ispanyol-kuba künyesinde.
- kaynak: Tracy, *Manila Ransomed* (1995); Cushner, *Documents Illustrating the British Conquest of Manila* (Camden 4th ser. 8, 1971) — açılmadı.
- sınıf: EKSİK-MADDE · ÇELİŞKİ · önem 2
- öneri: kronoloji_ingiltere.js'e "Havana'nın alınışı" (1762-08-13), "Manila'nın alınışı" (1762-10-06), "Manila iadesi" (1764-05-31; gün kaynakla teyit) maddeleri; Havana için fiilî iade günü (Temmuz 1763) ya da ikisi birden antlaşma günü — tek ölçü.

#### Haudenosaunee 1777-01-01 → ingiltere — olaysız el değiştirme
- kimlik: Onondaga, Mohawk (+3) haudenosaunee → ingiltere 1777-01-01; Kahnawake haudenosaunee → ingiliz-kuzey-amerika 1777-01-01
- atlasta: İrokua ana yurdu 1777'de İngiliz, 1783'te ABD toprağı oluyor. 1777'de ilhak yok: Konfederasyon bölündü (Onondaga meclis ateşi Ocak 1777'de söndürüldü; Oriskany 6 Ağustos 1777) ama İngiltere toprağa egemen olmadı.
- kaynak: Canadian Encyclopedia «Haudenosaunee», DCB «Thayendanegea» (biographi.ca) — bu turda açılmadı.
- Kahnawake Montréal kapitülasyonu (1760-09-08) ve Paris 1763 ile zaten İngiliz Kanada'sındaydı.
- sınıf: HAYALET · SESSİZ-DEĞİŞİM · önem 2
- öneri: Onondaga vb. haudenosaunee dönemini 1783-09-03'e (ya da Fort Stanwix Antl. 1784-10-22'ye) uzat, ingiltere 1777–1783 dönemini sil; Kahnawake → ingiliz-kuzey-amerika 1763-02-10.

#### 1812 Savaşı işgalleri haritada yok — Detroit
- kimlik: Detroit ingiltere 1763-02-10–1796-07-11 → abd 1796-07-11–2000 (aralıksız)
- kaynak: Detroit 16 Ağustos 1812'de Hull'un teslimiyle İngilizlere geçti, 29 Eylül 1813'te ABD geri aldı (DCB «Brock, Sir Isaac», biographi.ca — açılmadı; bilgi). ingiliz-kuzey-amerika künyesi 1812-06-18 savaş maddesini taşıyor.
- sınıf: SESSİZ-DEĞİŞİM (madde var, harita kırılması yok) · önem 2
- öneri: Detroit abd → ingiltere 1812-08-16 → abd 1813-09-29; Michilimackinac 1812-07-17 → 1815-07-18 (gün DCB/Parks Canada ile teyit); madde "Detroit'in teslimi".

#### Yeni Fransa'nın düşüşü haritada 1763'e kadar görünmüyor (Louisbourg, Québec, Montréal)
- kimlik: Louisbourg fransa 1713-01-01–1763-02-10; Quebec fransa –1763-02-10; Montreal fransa –1763-02-10
- atlasta: kronolojide "Québec Savaşı — Fransız Kanadası düştü" 1759-09-13; harita Québec'i 3,5 yıl daha Fransız gösteriyor. Louisbourg'un iki İngiliz işgali (1745–1749, 1758–) hiç yok.
- kaynak: Louisbourg 1745 teslimi 17 Haziran 1745 OS = 28 Haziran NS; 1748 Aix-la-Chapelle ile iade (fiilî Temmuz 1749); 1758 teslimi 26 Temmuz 1758 (DCB «Drucour», biographi.ca; Parks Canada Fortress of Louisbourg — açılmadı, bilgi). Québec kapitülasyonu 18 Eylül 1759; Montréal kapitülasyonu 8 Eylül 1760 (Canadian Encyclopedia «Conquest of New France» — açılmadı).
- sınıf: SESSİZ-DEĞİŞİM · TAKVİM (1745 OS/NS) · önem 3 (kronoloji–harita uyumunun tam ihlali)
- öneri: Louisbourg ingiltere 1745-06-28 → fransa 1749-07-23 (gün teyit) → ingiltere 1758-07-26 → ingiliz-kuzey-amerika 1763-02-10; Quebec ingiltere 1759-09-18; Montreal ve Yeni Fransa kalanı 1760-09-08; kronolojiye "Louisbourg'un düşüşü" (1758-07-26) ve "Montréal kapitülasyonu" (1760-09-08) maddeleri; 1745 maddesi ic_not'ta "17 Haziran OS = 28 Haziran NS".

#### Halifax 1749-06-21 — TAKVİM (Jülyen gün)
- kimlik: Halifax None → ingiltere 1749-06-21 (YALNIZ-KUNYE-MADDESI; eşleşen madde devletler.js:maliseet)
- atlasta: 21 Haziran 1749 Cornwallis'in Chebucto'ya varış günü — İngiliz kaynaklarında Old Style. 1752 öncesi koloni tarihi Jülyen.
- kaynak: DCB «Cornwallis, Edward» (biographi.ca) "21 June 1749" (OS) — açılmadı; brief kuralı: 1700-03-01..1752 +11 gün.
- sınıf: TAKVİM · EKSİK-MADDE · önem 2
- öneri: f = 1749-07-02 (ic_not: "21 Haziran 1749 OS = 2 Temmuz NS"); madde "Halifax kuruldu" 1749-07-02. Aynı kontrol: Madras iadesi 1749-08-21 (OS mi NS mi ölçülmedi — teslim belgesi Boscawen'in; İngiliz kaydıysa NS = 1 Eylül).

#### Karayip adaları — Amerikan Savaşı'ndaki Fransız işgalleri yok
- kimlik: Roseau (Dominika), Kingstown (St Vincent), St. George's/Gouyave/Grenville (Grenada) ingiltere 1763-02-10–1958 aralıksız
- kaynak: Dominika 7 Eylül 1778, St Vincent 16 Haziran 1779, Grenada 4 Temmuz 1779'da Fransızlarca alındı, 1783 Versay ile iade (bilgi; Oxford Companion to British History «West Indies» ile teyit gerek — açılmadı).
- sınıf: SESSİZ-DEĞİŞİM (eksik dönem) · önem 2
- öneri: üç adaya fransa dönemi + 1783-09-03 iade; kronolojiye "Fransa Dominika'yı aldı" vb. maddeler.

#### Tobago (Scarborough) 1814 öncesi __BOSLUK__ — beyansız boşluk
- kimlik: Scarborough (Tobago) __BOSLUK__ 1000-01-01–1814-05-30 ("kaynak: bulunamadı")
- kaynak: Tobago Paris 1763 ile İngiltere'ye; 1781 Fransız işgali, 1783 Fransa'ya devir; 1793 İngiliz; 1802 Amiens iade; 1803 İngiliz; 1814 Paris (bilgi; Britannica «Tobago» ile teyit).
- sınıf: EKSİK-DEVLET/SINIR · önem 2
- öneri: boşluk doldurma merdiveniyle zincir kur: ingiltere 1763-02-10 · fransa 1781-06-02 · ingiltere 1793-04-15 · fransa 1802-03-25 · ingiltere 1803-06-30 · (1814-05-30 teyit maddesi). Günler kaynakla teyit edilmeden yazılmasın.

#### Trinidad — Chaguaramas 1797, Port of Spain 1802: aynı ada iki ölçü
- kimlik: Chaguaramas None → ingiltere 1797-02-18; Port of Spain venezuela-genel-kaptanligi –1802-03-25 → ingiltere (KARARLAR gece-106 ile 1797'den 1802'ye çekilmiş)
- atlasta: 1797–1802 arası adanın batı ucu İngiliz, başkenti İspanyol; madde 1797'de yok (ALAKASIZ-YAKIN).
- kaynak: Chacón'un kapitülasyonu 18 Şubat 1797 (Abercromby); Amiens 25 Mart 1802 md. 7 ile resmî devir.
- sınıf: ÇELİŞKİ · EKSİK-MADDE · önem 2
- öneri: tek ölçü seç: (a) iki nokta da 1797-02-18 (fiilî işgal; atlasın Detroit/Havana emsali) ya da (b) ikisi de 1802-03-25. Hangisi seçilirse 1797 kapitülasyonu kronolojiye madde olarak girmeli. trinidad-tobago-ingiliz künyesi (f 1889) yalnız birleşik koloni; Trinidad 1797/1802–1889 için künye yok, "ingiltere" boyası — kabul edilebilir, beyan yaz.

#### Guyana zinciri — 1781 sahibi, 1803 günü, 1831 günü
- kimlik: Georgetown (Stabroek) fransa 1781-01-01–1784 · hollanda –1796-04-22 · ingiltere –1802-03-27 · hollanda –1803-09-01 · ingiltere –1831-01-01 · ingiliz-guyanasi (künye f 1831-01-01)
- kaynak: 1803 kapitülasyonu Stabroek'te 18 Eylül 1803 imzalandı (Hood–Grinfield; Stabroek News «History This Week» ve worldstatesmen: Demerara 20 Eylül, Berbice 23-24 Eylül — ikincil); İngiliz Guyanası birleşmesi 21 Temmuz 1831 (4 Mart 1831 kraliyet komisyonu; Library of Congress / Demerara maddeleri); 1781'de Demerara önce İngiliz korsanlarınca (Şubat 1781), Fransızlarca Şubat 1782'de alındı (bilgi; doğrulanmadı).
- sınıf: TARİH-HATA · ÇELİŞKİ (künye f 1831-01-01 ↔ kendi kronolojisi 1831-03-04) · önem 2
- öneri: 1803-09-01 → 1803-09-18 (Stabroek kapitülasyonu; Berbice ayrı gün); ingiliz-guyanasi f ve Georgetown kırılması 1831-07-21 (ic_not: "komisyon 4 Mart, yürürlük/ilan 21 Temmuz"); 1781-1782 İngiliz ara dönemi kaynakla ölçülmeli; 1796-04-22 maddesiz → madde.

#### Moskito Kıyısı tahliyesi 1786-07-14 — MADDESIZ
- kimlik: Río Tinto (Black River) ingiltere → guatemala-kaptanligi 1786-07-14
- kaynak: 14 Temmuz 1786 Londra Sözleşmesi (İngiltere–İspanya) Moskito kıyısının boşaltılmasını, karşılığında Belize kerestecilik alanının genişletilmesini öngördü; tahliye 1787 (bilgi; Parry CTS c.50 — açılmadı).
- sınıf: EKSİK-MADDE · önem 2
- öneri: gün kalsın (sözleşme imzası; ic_not "fiilî tahliye 1787"); madde "Londra Sözleşmesi — İngilizler Moskito Kıyısı'nı boşalttı".

#### Belize Town 1716 → ingiltere (1716–1981 aralıksız) — egemenlik beyanı yok
- kimlik: Belize Town None → ingiltere 1716-01-01 (kaynaksız; ALAKASIZ-YAKIN)
- atlasta: 1716'dan itibaren İngiliz egemen toprağı gibi; ingiliz-hondurasi künyesi 1862'de başlıyor.
- kaynak: 1763 Paris md. 17, 1783 Versay md. 6 ve 1786 Londra Sözleşmesi İspanyol egemenliği altında İngiliz kerestecilerine yalnız iskân/kesim hakkı tanıdı; St George's Caye 1798; koloni ilanı 1862 (künye). Guatemala'nın talebi bugün de sürüyor (hassas).
- sınıf: KAYNAKSIZ · SINIR (hassas) · önem 1
- öneri: dönemi değiştirmeden ic_not'a "1862 öncesi İspanyol egemenliği altında kerestecilik yerleşimi; Guatemala iddiası" beyanı + f için kaynak (1716 hangi olay?).

#### Falkland — 1982 Arjantin işgali haritada yok; 1811–1833 boşluk beyanı yanlış
- kimlik: Stanley ingiltere 1844-07-15–2000 aralıksız; Port Louis __BOSLUK__ 1811–1833-01-03 ("adalar yeniden ıssızdı"); falkland-ingiliz künyesi 1982-04-02 ve 1982-06-14 maddelerini taşıyor
- atlasta: künye "Arjantin güçleri Stanley'yi alarak adaların yönetimini ele geçirdi" diyor, harita 74 gün boyunca değişmiyor (Değişmez 2'nin tersi). Boşluk beyanı kendi içinde çelişkili: "Buenos Aires 10 Haziran 1829'da Vernet'i ... atadı" diyor ama dönemi ıssız sayıyor.
- kaynak: İngiliz tarafı — Dictionary of Falklands Biography «Onslow», «Vernet»; Arjantin tarafı — Vernet yerleşimi Puerto Luis'te 1826–1831, 6 Kasım 1820 Jewett'in Provincias Unidas adına ilanı, Kasım 1832 Mestivier/Pinedo garnizonu (Arjantin Dışişleri Malvinas belgeleri; açılmadı). 1982: Arjantin teslimi 14 Haziran 1982 (UCDP 346).
- sınıf: SESSİZ-DEĞİŞİM · ÇELİŞKİ · önem 2 (hassas: taraf tutma)
- öneri: Stanley + Port Louis: arjantin 1982-04-02 → ingiltere 1982-06-14 (askerî işgal olarak; Manila 1942 emsali). Port Louis 1820/1829–1833 için iki tarafın kaynağı ic_not'ta beyan edilerek ya "Birleşik Río de la Plata Eyaletleri" künyesi + BEYAN, ya da boşluk kalır ama "ıssızdı" ifadesi düzeltilir (Vernet yerleşimi 1826–1831 vardı). Karar Emre'nin — iki taraf yazılı.

#### Prens Edward Adası 1873-07-01 ve Fort Yukon 1867 — madde/sahip
- kimlik: Port-la-Joye (Charlottetown) ingiliz-kuzey-amerika → kanada 1873-07-01 (ALAKASIZ-YAKIN, madde yok); Fort Yukon ingiliz-kuzey-amerika → abd 1867-10-18
- kaynak: PEI Konfederasyona 1 Temmuz 1873'te katıldı (Canadian Encyclopedia «Prince Edward Island and Confederation»). Fort Yukon Rus Amerikası'nda HBC karakoluydu; ABD Ordusu (Raymond) 1869 Ağustos'unda HBC'yi çıkardı (bilgi).
- sınıf: EKSİK-MADDE · önem 1
- öneri: PEI maddesi 1873-07-01; Fort Yukon 1847–1867 için ic_not "Rus toprağında HBC karakolu" beyanı (sahip modeli kabul edilebilir).

### C. İngiliz Hindistanı (Şirket ve Taç)

#### Hindistan fetih maddelerinin neredeyse tamamı İngiliz kronolojisinde yok
- kimlik: kronoloji_ingiltere.js'te Hindistan maddeleri yalnız: 1601-01-10 Şirket fermanı · 1757-06-23 Plassey · 1774-10-20 Hastings · 1857-05-10 Ayaklanma · 1858-08-02 GoI Act · 1876-05-01 Kraliyet Unvanları. ingiliz-hindistani künyesinde 5 madde (Plassey, 1858, 1877, 1885, 1919) — 1947 sonu bile künye kronolojisinde yok.
- atlasta: 1757–1856 arası ~40 kırılma grubu (Baksar, Allahabad, Mysore 1792/1799, Karnatik 1801, Avad 1801/1856, Maratha 1803/1818, Sind 1843, Pencap 1849, Burma 1852) ya MADDESIZ ya ALAKASIZ-YAKIN ya YALNIZ-KUNYE (kirilma.txt).
- sınıf: EKSİK-MADDE · önem 3
- öneri (kronoloji_ingiltere.js'e, kaynak: Imperial Gazetteer of India c.II/IV, dsal.uchicago.edu; Aitchison, *Treaties, Engagements and Sanads*; Cambridge History of India c.V): Kalküta'nın düşüşü 1756-06-20 · Kalküta'nın geri alınışı 1757-01-02 · Çandernagor 1757-03-23 · Masulipatnam 1759-04-08 · Pondişeri 1761-01-16 · Baksar 1764-10-23 · Allahabad Antl. 1765-08-12 · Haydarabad Antl. (Kuzey Sirkarlar) 1766-11-12 · Faizabad Antl. (Benares) 1775-05-21 · Seringapatam Antl. 1792-03-18 · Seringapatam'ın düşüşü 1799-05-04 · Karnatik ilhakı 1801-07-31 · Lucknow Antl. (Avad'ın ceded districts'i) 1801-11-10 · Delhi 1803-09-11 / Surji-Anjangaon 1803-12-30 · Poona Antl./Peşvâlığın sonu 1818-06-03 · Miani/Sind 1843-02-17 · Pencap ilhakı 1849-03-29 · Pegu ilhakı 1852-12-20 · Avad ilhakı 1856-02-07 · Burma'nın ayrılması 1937-04-01 · bağımsızlık ve bölünme 1947-08-15.

#### Kalküta 1757-01-02 → ingiliz-hindistani: künye doğmadan önce (HAYALET)
- kimlik: Kalküta s: bengal-nevabligi –1757-01-02 → ingiliz-hindistani 1757-01-02–1947; künye ingiliz-hindistani f = 1757-06-23
- atlasta: yerleşim, künyenin başlangıcından 172 gün önce ingiliz-hindistani'ye ait.
- kaynak: Kalküta 2 Ocak 1757'de Clive ve Watson'ca geri alındı (Imperial Gazetteer «Calcutta»; madde gün olarak doğru). Plassey öncesi Kalküta, Bombay ve Madras gibi "ingiltere" ile boyanmalı.
- sınıf: HAYALET · EKSİK-MADDE (1756-06-20 ve 1757-01-02 maddeleri yok) · önem 2
- öneri: 1757-01-02–1757-06-23 dönemi d:"ingiltere"; 1757-06-23'te Bombay/Madras grubuyla birlikte ingiliz-hindistani.

#### Masulipatnam 1759 — önceki sahip Fransa, Nizam değil
- kimlik: Masulipatnam haydarabad-nizam 1724-10-11–1759-04-08 → ingiliz-hindistani (MADDESIZ)
- kaynak: Forde'un kuşatması 6 Mart–7 Nisan 1759, şehir 7/8 Nisan gecesi basılarak Conflans komutasındaki Fransızlardan alındı (FIBIS «Battle of Masulipatnam», wiki.fibis.org/w/Battle_of_Masulipatnam — arama özeti). Masulipatnam 1750'lerden beri Fransız elindeydi (Muzaffer Cang/Salâbet Cang bağışı; bilgi). Nizam 14 Mayıs 1759 antlaşmasıyla bölgeyi Şirkete bıraktı.
- sınıf: TARİH-HATA (sahip) · EKSİK-MADDE · önem 2
- öneri: haydarabad-nizam dönemini Fransız alımında kes (gün kaynakla: ~1750-1753), fransa –1759-04-08; madde "Forde Masulipatnam'ı Fransızlardan aldı" 1759-04-08 (ic_not: "7/8 Nisan gecesi").

#### Broaç 1783–1803 Sindhia'ya bırakıldı — eksik ara dönem
- kimlik: Broaç (Bharuch) babur-imparatorlugu –1772-11-18 → ingiliz-hindistani 1772-11-18–1947 aralıksız (MADDESIZ)
- kaynak: 1803 Surji-Anjangaon Antlaşması ile Sindhia "Broach ve Ahmednagar"ı İngilizlere bıraktı (victorianweb.org/history/empire/india/maps/10.html — arama özeti; Aitchison c.IV ile teyit) ⇒ Broaç 1783'ten (Salbai sonrası Hastings'in Sindhia'ya devri) 1803'e dek Sindhia'nındı. 1772 alınışı 18 Kasım doğru (Wedderburn'ün ölümünden sonra). Not: arama özetleri Salbai metninde Broaç'ın İngilizlerde kaldığını da yazıyor — çelişki; Imperial Gazetteer «Broach District» "History" kısmı belirleyici (açılmadı).
- sınıf: SESSİZ-DEĞİŞİM · EKSİK-MADDE · önem 2
- öneri: Imperial Gazetteer ile teyit sonrası ingiliz-hindistani → gvalyar (Sindhia) 1783 (gün: devir belgesi) → ingiliz-hindistani 1803-08-29 (Broaç'ın alınışı) ya da 1803-12-30 (antlaşma). 1772 öncesi sahip: Broaç Nevvâbı (Bâbürlü adına) — ic_not.

#### Allahabad 1765-08-12 → avad: yanlış sahip (1765–1773 Şah Âlem'indi)
- kimlik: Ilâhâbâd babur-imparatorlugu –1765-08-12 → avad 1765-08-12–1801-11-10
- kaynak: Allahabad Antlaşması (12/16 Ağustos 1765) Kora ve Allahabad'ı Bâbürlü Şah Âlem II'ye verdi; Şah Âlem 1771'de Marathalara geçince Şirket 1773 Benares Antlaşması ile iki bölgeyi Şücâüddevle'ye (Avad) sattı (Britannica «Treaties of Banaras», britannica.com/event/Treaties-of-Banaras — arama özeti).
- sınıf: TARİH-HATA · önem 2
- öneri: babur-imparatorlugu 1765-08-12 (ya da önceki dönemi kesintisiz sürdür) → avad 1773-09-07 (Benares Antl.; gün Aitchison ile teyit) → ingiliz-hindistani 1801-11-10.

#### Benares/Cavnpur 1775-01-01 → ingiliz-hindistani: gün antlaşmada belli
- kimlik: Benâres, Cavnpur (Jaunpur) avad → ingiliz-hindistani 1775-01-01 (TARAF-MADDELI; yakın madde Thane)
- kaynak: Faizabad Antlaşması 21 Mayıs 1775, Âsafüddevle Benares zamindarlığını Şirkete bıraktı (TNA katalog «Proposed Articles of Treaty with Asaf-ud-daula 21st May 1775», nationalarchives.gov.uk; Britannica «Treaties of Banaras»).
- sınıf: TARİH-HATA (yıl-başı gün yerine bilinen gün) · EKSİK-MADDE · önem 2
- öneri: 1775-05-21 + madde "Faizabad Antlaşması — Benares Şirkete geçti". (Benares racası Chait Singh 1781'e dek tâbi raca — ic_not.)

#### Çatgam 1760-10-11 — kaynakla eşleşmeyen gün
- kimlik: Çatgam (Chittagong) bengal-nevabligi → ingiliz-hindistani 1760-10-11 (MADDESIZ)
- kaynak: Mîr Kâsım–Vansittart antlaşması Eylül 1760 (27 Eylül, gün ikincil) Burdwan, Midnapur, Çatgam'ı Şirkete verdi; Mîr Kâsım'ın tahta çıkışı 20 Ekim 1760; Verelst Çatgam'ı 5 Ocak 1761'de teslim aldı (Banglapedia «Mir Qasim», en.banglapedia.org; tarih teslim günü için yalnız ikincil blog). 11 Ekim hiçbirine uymuyor.
- sınıf: TARİH-HATA (olası) · EKSİK-MADDE · önem 2
- öneri: Banglapedia/Imperial Gazetteer «Chittagong District» ile teyit; antlaşma günü (1760-09-27) ya da fiilî teslim (1761-01-05) — ölçüt seçilip ic_not'ta beyan. Aynı antlaşmayla geçen Burdwan/Midnapur noktaları aynı güne.

#### Pondişeri zinciri — beş kırılmadan dördü maddesiz
- kimlik: Pondişeri fransa → ingiltere 1761-01-16 (ALAKASIZ-YAKIN) · → fransa 1765-01-01 (YALNIZ-KUNYE) · → ingiltere 1778-10-18 (MADDESIZ) · → fransa 1785-01-01 (ALAKASIZ) · → ingiltere 1793-08-23 (MADDESIZ) · → fransa 1816-12-04 (ALAKASIZ)
- kaynak: 16 Ocak 1761 teslim (Lally) · 1763 Paris ile iade, fiilî devir 1765 (gün bulunamadı) · 1778 kuşatması: Bellecombe 17 Ekim 1778'de teslim oldu, garnizon 18'inde çıktı · 1783 Versay ile iade, fiilî devir 1785 (gün bulunamadı) · 23 Ağustos 1793 teslim · 4 Aralık 1816 Fransa'ya iade (Imperial Gazetteer «Pondicherry Settlement» — açılmadı; bilgi).
- sınıf: EKSİK-MADDE · TARİH-HATA (1765/1785 YYYY-01-01 yaklaşıklığı beyansız) · önem 2
- öneri: dört madde (1761-01-16, 1778-10-18, 1793-08-23, 1816-12-04); 1765/1785 için Imperial Gazetteer'den fiilî devir günü, yoksa ic_not "[yalnız yıl]" beyanı. Çandernagor 1793-06-10 ve 1816-12-04 aynı zincirle.

#### Kuzey Sirkarlar 1766-11-12 · Sûrat 1759-03-04 · Cinci 1761-04-05 · Kalikut 1792-03-18 · Tranquebar 1845-02-22 — günler makul, madde yok
- kimlik: kirilma.txt MADDESIZ grupları
- değerlendirme: Kuzey Sirkarlar = Haydarabad Antlaşması 12 Kasım 1766 (doğru olay); Kalikut = Seringapatam Antlaşması 18 Mart 1792 (doğru); Tranquebar = Danimarka satış antlaşması 22 Şubat 1845 (fiilî teslim 7 Kasım 1845, kayıtta beyanlı); Cinci = Fransız garnizonunun 5 Nisan 1761 teslimi (bilgi; sonra Karnatik nevvâbına bırakıldı — 1761–1801 sahip "karnatik" olmalı, ingiliz-hindistani HAYALET olabilir); Sûrat = 4 Mart 1759 kalenin alınışı (bilgi), ama şehrin idaresi Sûrat Nevvâbı'nda kaldı, tam ilhak 15 Mayıs 1800 (bilgi; Imperial Gazetteer «Surat City»).
- sınıf: EKSİK-MADDE · önem 1–2
- öneri: beşine de madde; Cinci 1761–1801 ve Sûrat 1759–1800 için sahip modelini Imperial Gazetteer ile ölç (tâbi nevvâb mı, Şirket mi).

#### Baksar 1764-10-22 — yaygın gün 23 Ekim
- kimlik: Patna, Gayâ, Mungîr bengal-nevabligi → ingiliz-hindistani 1764-10-22 (ALAKASIZ-YAKIN)
- kaynak: Baksar Savaşı 23 Ekim 1764 (Britannica «Battle of Buxar»; Oxford DWH — açılmadı, bilgi; bazı kaynaklar 22).
- sınıf: TARİH-HATA (olası) · EKSİK-MADDE · önem 1
- öneri: Oxford Reference ile teyit edip 1764-10-23'e çek + madde.

#### 1947 bölünmesi — Pakistan günü çelişkisi
- kimlik: kronoloji_sinir_halef_1923_2000.js madde 1947-08-14 ("Pakistan Dominyonu") · kırılma ve künye pakistan f = 1947-08-15
- kaynak: Indian Independence Act 1947 s.1(1): iki dominyon "as from the fifteenth day of August" (legislation.gov.uk/ukpga/Geo6/10-11/30). 14 Ağustos Karaçi'deki devir töreni/Pakistan'ın kutlama günü.
- sınıf: ÇELİŞKİ · önem 1
- öneri: madde günü 1947-08-15, ic_not "Pakistan 14 Ağustos'u kutlar (Karaçi devir töreni); yasal gün 15 Ağustos". Pakistan künyesi var (soru cevabı: evet, f 1947-08-15). Not: pakistan künyesinin kaynaklarının çoğu Vikipedi/ders sitesi (theiashub, wikipedia) — KAYNAKSIZ sayılır, ayrı tarama gerekir.

#### Burma 1937-04-01 — yalnız künyede
- kimlik: 1937-04-01 ingiliz-hindistani → ingiliz-burma n=27 (YALNIZ-KUNYE-MADDESI)
- kaynak: Government of Burma Act 1935 (26 Geo.5 & 1 Edw.8 c.3), yürürlük 1 Nisan 1937 — gün doğru.
- sınıf: EKSİK-MADDE · önem 2
- öneri: kronoloji_ingiltere.js'e madde. Ayrıca ingiliz-burma künyesi f=1826-02-24 ama yerleşimler 1826–1937 ingiliz-hindistani'de — künyenin 1826–1937 kısmı haritada hiç kullanılmıyor (harita: ingiliz-hindistani boyası). f'yi 1937-04-01'e çekmek ya da ic_not'ta "1937'ye dek İngiliz Hindistanı'nın eyaleti" beyanı.

#### Rangun 1852-04-14 MADDESIZ, Pegu 1852-12-20 ALAKASIZ
- kaynak: Rangun 14 Nisan 1852'de alındı; Pegu ilhak bildirisi 20 Aralık 1852 (ingiliz-burma künyesinin kendi maddesi; Imperial Gazetteer «Burma»).
- sınıf: EKSİK-MADDE · önem 2 · öneri: iki madde.


### D. 1923–bugün: dağılma ve bugünkü sınır

#### Hong Kong — Kowloon günü yanlış, Japon işgali haritada yok, 1997 yalnız künyede
- kimlik: devletler.js hong-kong-ingiliz kronoloji 1860-10-18 «Pekin Sözleşmesi ile Kowloon…»; yerleşim Hong Kong hong-kong-ingiliz 1842-08-29–1997-07-01 aralıksız
- kaynak: İngiliz-Çin Pekin Sözleşmesi 24 Ekim 1860'ta imzalandı (18 Ekim Yazlık Saray'ın yakılış günü) — Tsang, *A Modern History of Hong Kong* (2004) künyenin kendi kaynağı; metin: Hertslet, *China Treaties* (1908) — açılmadı, bilgi. Japon işgali 25 Aralık 1941–30 Ağustos 1945 künyede madde olarak var, haritada yok (Rangun ve Manila'da meiji-japonya dönemi var — tutarsız).
- sınıf: TARİH-HATA · SESSİZ-DEĞİŞİM (ters) · EKSİK-MADDE (1997 devri kronoloji dosyasında yok; kirilma.txt'te de görünmüyor — döküm 1983'te kesiliyor, ölçülmedi) · önem 2
- öneri: künye maddesi 1860-10-24; Hong Kong s: meiji-japonya 1941-12-25 → hong-kong-ingiliz 1945-08-30; kronoloji_ingiltere.js'e 1984-12-19 Ortak Bildiri ve 1997-07-01 devir maddeleri.

#### Libya İngiliz askerî idaresi — Bingazi günü ve Fizan sahibi
- kimlik: Bingazi ve Murzuk (Fizan) italya → libya-ingiliz-askeri-idaresi 1943-01-23; künye f 1943-01-01 ("gün bilinmiyor")
- kaynak: Bingazi 20 Kasım 1942'de Sekizinci Ordu'ya kesin olarak düştü, Berka'da İngiliz askerî idaresi o zaman başladı; Trablus 23 Ocak 1943. Fizan 1943 başından 1951'e dek Hür Fransız/Fransız askerî idaresindeydi (Leclerc'in kuvvetleri, Murzuk Ocak 1943) — St John, *Libya* (2011) künyenin kendi kaynağı; TDV «Libya» (açılmadı, bilgi).
- sınıf: TARİH-HATA · HAYALET (Fizan'da İngiliz idaresi yok) · önem 2
- öneri: Berka noktaları 1942-11-20; Trablusgarp 1943-01-23; Fizan noktaları (Murzuk, Sebha vb.) için "fransiz-fizan-askeri-idaresi" künyesi (ya da fransa boyası + beyan) 1943-01 (gün TDV/St John) → 1951-12-24; künye f 1942-11-20 + ic_not.

#### Mükerrer künyeler: Malta ×2, Akrotiri-Dikelya ×2
- kimlik: malta-ingiliz (f 1800-09-05) ve malta-kolonisi (f 1800-01-01) aynı polity, aynı t 1964-09-21; akrotiri-dekelya (haritada kullanılan) ve kibris-ingiliz-ussler (kullanılmıyor) aynı üs bölgeleri
- atlasta: malta-kolonisi f 1800-01-01 Fransız garnizonu teslim olmadan (5 Eylül 1800) dokuz ay önce başlıyor; malta-ingiliz'in kendi maddesi 5 Eylül ile "arama özeti: 8 Eylül" çelişkisini taşıyor.
- kaynak: Univ. of Malta OAR — "Vaubois capitulated … September 5, 1800" (künye kaynağı).
- sınıf: ÇELİŞKİ · HAYALET · önem 2
- öneri: haritada kullanılanı tut (Malta noktaları "ingiltere" → hangi künye boyanıyor ölç), ötekini kaldır ya da `ardil`/takma ad yap; Malta f 1800-09-05.

#### Diego Garcia / BIOT 1965-11-08 — madde yok; hassas
- kimlik: Diego Garcia (Chagos) ingiliz-mauritius → ingiltere 1965-11-08 (TARAF-MADDELI; eşleşen madde Rodezya UDI)
- kaynak: British Indian Ocean Territory Order 1965 (SI 1965/1920), 8 Kasım 1965 (legislation.gov.uk). Mauritius tarafı: UAD danışma görüşü 25 Şubat 2019; BK–Mauritius Chagos antlaşması 22 Mayıs 2025'te imzalandı (yürürlük durumu ölçülmedi).
- sınıf: EKSİK-MADDE · SINIR (hassas) · önem 2
- öneri: madde "BIOT kuruldu — Chagos Mauritius'tan ayrıldı" 1965-11-08, ic_not'ta iki tarafın tezi; 2025 antlaşması yürürlüğe girdiyse ayrı kırılma (Diego Garcia üssü kira statüsü beyanıyla).

#### Nauru 1921 · Cocos 1955-11-23 · Christmas 1958-10-01 — madde yok
- kaynak: Cocos (Keeling) Islands Act 1955 (BK) / devir 23 Kasım 1955; Christmas Island Act 1958, devir 1 Ekim 1958 (legislation.gov.uk; Avustralya National Archives — açılmadı). Nauru: Nauru Island Agreement 2 Temmuz 1919, MC mandası 17 Aralık 1920; 1921-06-01 hangi olayı tarihliyor belirsiz (Avustralya'nın fiilî idaresi 1 Temmuz 1921? — ölçülmedi).
- sınıf: EKSİK-MADDE · TARİH-HATA (Nauru, olası) · önem 1
- öneri: üç madde; Nauru günü NAA «Nauru» kaydıyla teyit.

#### Cebelitarık 1704-08-04 → ingiltere (1704–1713) — beyan
- kimlik: Cebelitarık ispanya –1704-08-04 → ingiltere; künye cebelitarik-ingiliz f 1713-07-13
- kaynak: 4 Ağustos 1704 (NS; İngiliz kaynaklarında 24 Temmuz OS) Rooke'un alışı, Habsburg talipli III. Karl adına; İngiliz egemenliği Utrecht md. X (13 Temmuz 1713). İspanya'nın iddiası sürer (hassas).
- sınıf: TAKVİM (beyan eksik) · önem 1
- öneri: dönem kalsın; ic_not "4 Ağustos 1704 NS = 24 Temmuz OS; 1713'e dek Habsburg talipli adına İngiliz-Hollanda işgali; İspanya iddiası" — taraf tutmadan.

#### Kuveyt, Katar, Bahreyn, Irak, Ürdün, Kıbrıs, Malta, Aden, Sudan, Körfez 1971 — harita günleri teyit
- harita kırılmaları kaynakla uyumlu: Irak manda sonu 1932-10-03 (künye) · Ürdün 1946-05-25 · Filistin 1948-05-14 (gece yarısı; ic_not'ta "15 Mayıs 00:00" beyanı önerilir) · Sudan 1956-01-01 · Kıbrıs 1960-08-16 · Malta 1964-09-21 · Aden 1967-11-30 · Bahreyn 1971-08-15 · BAE 1971-12-02 · Ras el-Hayme 1972-02-10. Kuveyt (1961-06-19) ve Katar (1971-09-03) haritada kırılma üretmiyor (yerel sahip boyası); yalnız kronoloji maddesi eksik (A bölümü).
- sınıf: (teyit) · öneri yok, yalnız İngiliz kronolojisine madde.

#### Yan not (yerli devletler oturumuna): Agra 1761-01-14 → maratha

- (önem 1, kapsam dışı) Agra'nın Marathalara geçişi Panipat yenilgisi gününe (14 Ocak 1761) bağlanmış; Agra 1761'de Cat (Sûrac Mal) eline geçti (12 Haziran 1761, bilgi), 1785'ten itibaren Sindhia'nın. Kapsamım dışında; ilgili oturuma iletilmeli.

### Özet

- Denetlenen: künye 24 (ingiliz-hindistani, ingiliz-kuzey-amerika, on-uc-koloni, abd, kanada, pakistan, ingiliz-burma, falkland-ingiliz, ingiliz-guyanasi, ingiliz-hondurasi, trinidad-tobago-ingiliz, newfoundland-dominyonu, irak-kralligi, irlanda-cumhuriyeti, hong-kong-ingiliz, kibris-ingiliz-ussler, malta-ingiliz, malta-kolonisi, filistin-mandasi, urdun-emirligi, libya-ingiliz-askeri-idaresi, cebelitarik-ingiliz, akrotiri-dekelya, aden-kolonisi) · kronoloji maddesi ~120 (madde_D 1714 sonrası tümü) · kirilma.txt grubu ~250 (1714–1983 arası; kuzey kürk karakollarının "None -> ingiliz-kuzey-amerika" ilk-dönem kuruluşları toplu geçildi) · yerleşim zinciri ~45.
- Bulgu: 40 başlık (A 4 · B 16 · C 13 · D 7; bazı başlıklar birden çok kırılma grubunu toplar) + 1 kapsam dışı yan not + 1 teyit başlığı. Önem 3: 3 · önem 2: ~29 · önem 1: ~8.
- Ölçülemedi / açılamadı: Imperial Gazetteer (DSAL), DCB (biographi.ca), Parry CTS, Aitchison, Tracy/Cushner — bu turda açılmadı; ilgili günler "bilgi; doğrulanmadı" diye işaretli, kayda girmeden teyit şart. kirilma.txt 1983-09-19'da bitiyor: Hong Kong 1997 vb. sonraki kırılmalar dökümde yok (ölçülmedi). Kuveyt/Katar yerleşim zincirleri dökümde iç içe görünüyor, tam okunmadı.
- Web arama ile kısmi teyit (arama özeti düzeyi): Pensacola kapitülasyonu 9–10 Mayıs 1781; Baton Rouge/Fort Panmure 21 Eylül 1779; Masulipatnam 7/8 Nisan 1759 Fransızlardan; Surji-Anjangaon 1803'te Broaç Sindhia'dan; Demerara 18 Eylül 1803; İngiliz Guyanası 21 Temmuz 1831; Faizabad Antl. 21 Mayıs 1775 (TNA katalog); Benares 1773 Antl. (Britannica).

#### Teyit (temiz)
- teyit: Plassey 1757-06-23 (Oxford DWH; künye f) · Paris 1763-02-10 (Avalon) · Paris 1783-09-03 (Avalon) · ABD 1776-07-04 / on-uc-koloni t 1776-07-04 · Thane 1774-12-28 · Seringapatam Antl. 1792-03-18 · Karnatik 1801-07-31 · Lucknow Antl. 1801-11-10 · Delhi 1803-09-11 · Pencap 1849-03-29 · Rangun 1852-04-14 · Pegu 1852-12-20 · Avad 1856-02-07 · GoI Act 1858-08-02 · Tranquebar 1845-02-22 (beyanlı) · Detroit Jay devri 1796-07-11 · 1818 Sözleşmesi 1818-10-20 · Fort Astoria 1813-12-12 / 1818-10-06 · Oregon 1846-06-15 · Kanada 1867-07-01 · Rupert's Land 1870-07-15 · BC 1871-07-20 · Arktik 1880-09-01 · Newfoundland 1934-02-16 / 1949-03-31 · Burma ayrılması 1937-04-01 · Burma bağımsızlık 1948-01-04 · Hindistan/Pakistan 1947-08-15 (Indian Independence Act s.1) · Seylan 1948-02-04 · Irak 1932-10-03 · Ürdün 1946-05-25 · Sudan 1956-01-01 · Kıbrıs 1960-08-16 · Malta 1964-09-21 · Aden 1967-11-30 · Bahreyn 1971-08-15 · BAE 1971-12-02 · Ras el-Hayme 1972-02-10 · Port Louis 1833-01-03 · Man Adası Revestment 1765-05-10.


## EK — Maddesiz / ilgisiz maddeli kırılma grupları (±30 gün, ilk dönemler hariç)

Sütunlar: gün · sınıf · eski → yeni · kaç yerleşim · örnek yerleşimler. Bölümlerde tek tek değerlendirilenler var; bu tablo koordinatörün tam listesidir.

| gün | sınıf | eski → yeni | n | yerleşimler |
|---|---|---|---|---|
| 1283-01-01 | ALAKASIZ-YAKIN | powys → (boş/ardıl yok) | 1 | Mathrafal |
| 1347-08-03 | ALAKASIZ-YAKIN | fransa → ingiltere | 1 | Calais |
| 1372-01-01 | ALAKASIZ-YAKIN | ingiltere → fransa | 1 | Poitiers |
| 1372-09-08 | MADDESIZ | ingiltere → fransa | 1 | La Rochelle |
| 1417-09-04 | MADDESIZ | fransa → ingiltere | 1 | Caen |
| 1418-09-29 | MADDESIZ | fransa → ingiltere | 1 | Cherbourg |
| 1419-01-19 | ALAKASIZ-YAKIN | fransa → ingiltere | 1 | Rouen |
| 1429-07-10 | MADDESIZ | ingiltere → fransa | 1 | Troyes |
| 1429-07-16 | MADDESIZ | ingiltere → fransa | 1 | Reims |
| 1449-10-29 | MADDESIZ | ingiltere → fransa | 1 | Rouen |
| 1450-06-24 | MADDESIZ | ingiltere → fransa | 1 | Caen |
| 1450-08-12 | MADDESIZ | ingiltere → fransa | 1 | Cherbourg |
| 1451-06-30 | ALAKASIZ-YAKIN | ingiltere → fransa | 1 | Bordo |
| 1451-08-20 | MADDESIZ | ingiltere → fransa | 1 | Bayonne |
| 1472-02-20 | MADDESIZ | orkney-kontlugu → iskocya | 2 | Kirkwall (Orkney), Lerwick (Shetland) |
| 1515-04-01 | ALAKASIZ-YAKIN | nebhani → umman | 13 | Salala, Masira, Mirbât, Tâka (Zufâr), Hâsik |
| 1612-01-01 | YALNIZ-KUNYE-MADDESI | __BOSLUK__ → ingiltere | 1 | St. George's (Bermuda) |
| 1624-01-01 | ALAKASIZ-YAKIN | nebhani → umman | 2 | Nizva, Buraymî |
| 1646-10-01 | YALNIZ-KUNYE-MADDESI | powhatan → ingiltere | 1 | Werowocomoco (Powhatan Konfederasyonu Başkenti) |
| 1650-01-26 | ALAKASIZ-YAKIN | portekiz → umman | 3 | Maskat, Suhâr, Sûr |
| 1655-05-10 | YALNIZ-KUNYE-MADDESI | ispanya → ingiltere | 1 | Spanish Town (Villa de la Vega) |
| 1659-01-01 | ALAKASIZ-YAKIN | __BOSLUK__ → ingiltere | 1 | Jamestown (Saint Helena) |
| 1660-06-08 | ALAKASIZ-YAKIN | ingiltere → iskocya | 6 | Edinburg, Glasgow, Aberdeen, Inverness, Perth (İskoçya) |
| 1664-05-01 | ALAKASIZ-YAKIN | hollanda → ingiltere | 1 | Cape Coast |
| 1664-09-08 | ALAKASIZ-YAKIN | hollanda → ingiltere | 2 | New Amsterdam (New York), Fort Orange (Albany) |
| 1665-02-18 | MADDESIZ | portekiz → ingiltere | 1 | Bombay |
| 1667-07-31 | YALNIZ-KUNYE-MADDESI | ingiltere → hollanda-guyanasi | 1 | Paramaribo |
| 1673-01-01 | ALAKASIZ-YAKIN | ingiltere → hollanda | 1 | Jamestown (Saint Helena) |
| 1673-05-15 | MADDESIZ | hollanda → ingiltere | 1 | Jamestown (Saint Helena) |
| 1676-01-01 | YALNIZ-KUNYE-MADDESI | occaneechi → ingiltere | 1 | Occaneechi (Hillsborough) |
| 1684-01-01 | ALAKASIZ-YAKIN | ingiltere → fas | 1 | Tanca |
| 1685-01-01 | YALNIZ-KUNYE-MADDESI | pagaruyung → ingiltere | 1 | Bengkulu (Bencoolen) |
| 1692-03-22 | ALAKASIZ-YAKIN | braunschweig-luneburg-dukaligi → hannover | 1 | Hannover |
| 1704-08-04 | ALAKASIZ-YAKIN | ispanya → ingiltere | 1 | Cebelitarık (Gibraltar) |
| 1725-12-15 | ALAKASIZ-YAKIN | abenaki → ingiltere | 1 | Norridgewock (Abenaki) |
| 1729-01-01 | YALNIZ-KUNYE-MADDESI | yemen → lahic-sultanligi | 1 | Lahic (el-Havta) |
| 1733-06-09 | ALAKASIZ-YAKIN | creek-konfederasyonu → ingiltere | 1 | Etowah |
| 1746-09-21 | ALAKASIZ-YAKIN | ingiltere → fransa | 1 | Madras (Chennai) |
| 1749-08-21 | YALNIZ-KUNYE-MADDESI | fransa → ingiltere | 1 | Madras (Chennai) |
| 1753-01-01 | ALAKASIZ-YAKIN | umman → zend | 1 | Manama (Bahreyn) |
| 1756-06-20 | MADDESIZ | ingiltere → bengal-nevabligi | 1 | Kalküta |
| 1757-01-02 | ALAKASIZ-YAKIN | bengal-nevabligi → ingiliz-hindistani | 1 | Kalküta |
| 1757-03-23 | ALAKASIZ-YAKIN | fransa → ingiltere | 1 | Çandernagor |
| 1759-03-04 | MADDESIZ | babur-imparatorlugu → ingiliz-hindistani | 1 | Sûrat |
| 1759-04-08 | MADDESIZ | haydarabad-nizam → ingiliz-hindistani | 1 | Masulipatnam |
| 1760-01-01 | YALNIZ-KUNYE-MADDESI | karnatik → ingiliz-hindistani | 1 | Vellor (Vellore) |
| 1760-10-11 | MADDESIZ | bengal-nevabligi → ingiliz-hindistani | 1 | Çatgam (Chittagong) |
| 1761-01-16 | ALAKASIZ-YAKIN | fransa → ingiltere | 1 | Pondişeri |
| 1761-04-05 | MADDESIZ | fransa → ingiliz-hindistani | 1 | Cinci (Gingee) |
| 1762-08-13 | YALNIZ-KUNYE-MADDESI | ispanya → ingiltere | 1 | Havana (La Habana) |
| 1763-01-01 | ALAKASIZ-YAKIN | kalusa → ingiltere | 1 | Mound Key (Kalusa başkenti) |
| 1763-01-01 | ALAKASIZ-YAKIN | karnatik → ingiliz-hindistani | 1 | Kançipuram (Kanchipuram) |
| 1764-05-31 | MADDESIZ | ingiltere → ispanya | 1 | Manila |
| 1764-10-22 | ALAKASIZ-YAKIN | bengal-nevabligi → ingiliz-hindistani | 3 | Patna (Azîmâbâd), Gayâ, Mungîr (Monghyr) |
| 1765-01-01 | YALNIZ-KUNYE-MADDESI | ingiltere → fransa | 1 | Pondişeri |
| 1766-11-12 | MADDESIZ | haydarabad-nizam → ingiliz-hindistani | 2 | Râcahmundry, Vişâkapatnam |
| 1772-11-18 | MADDESIZ | babur-imparatorlugu → ingiliz-hindistani | 1 | Broaç (Bharuch) |
| 1777-01-01 | ALAKASIZ-YAKIN | haudenosaunee → ingiliz-kuzey-amerika | 1 | Kahnawake |
| 1777-01-01 | ALAKASIZ-YAKIN | haudenosaunee → ingiltere | 5 | Onondaga (İrokua Konfederasyon Merkezi), Mohawk (Kayenlaha'ke), Seneca (Ganondagan), Cayuga, Oneida |
| 1778-10-18 | MADDESIZ | fransa → ingiltere | 1 | Pondişeri |
| 1779-09-21 | MADDESIZ | ingiltere → ispanya | 1 | Natchez (Grand Village) |
| 1781-05-08 | YALNIZ-KUNYE-MADDESI | ingiltere → ispanya | 1 | Pensacola |
| 1783-09-03 | ALAKASIZ-YAKIN | ingiltere → ispanya | 2 | St. Augustine, Mission San Luis (Apalaçi) |
| 1785-01-01 | ALAKASIZ-YAKIN | ingiltere → fransa | 1 | Pondişeri |
| 1786-07-14 | MADDESIZ | ingiltere → guatemala-kaptanligi | 1 | Río Tinto (Black River, Moskito kıyısı) |
| 1790-12-15 | ALAKASIZ-YAKIN | meysur → ingiliz-hindistani | 1 | Kannûr (Cannanore) |
| 1792-03-18 | MADDESIZ | meysur → ingiliz-hindistani | 1 | Kalikut (Kozhikode) |
| 1793-06-10 | ALAKASIZ-YAKIN | fransa → ingiltere | 1 | Çandernagor |
| 1793-08-23 | MADDESIZ | fransa → ingiltere | 1 | Pondişeri |
| 1795-08-18 | ALAKASIZ-YAKIN | hollanda-dogu-hint → ingiltere | 1 | Padang |
| 1796-04-22 | ALAKASIZ-YAKIN | hollanda → ingiltere | 2 | Georgetown (Stabroek), New Amsterdam (Berbice) |
| 1799-05-04 | ALAKASIZ-YAKIN | meysur → ingiliz-hindistani | 1 | Mangalor |
| 1799-10-25 | ALAKASIZ-YAKIN | tancur-maratha → ingiliz-hindistani | 1 | Tancûr (Thanjavur) |
| 1800-10-12 | YALNIZ-KUNYE-MADDESI | haydarabad-nizam → ingiliz-hindistani | 2 | Vijayanagara (Hampi), Kurnûl (Kurnool) |
| 1801-07-31 | YALNIZ-KUNYE-MADDESI | karnatik → ingiliz-hindistani | 3 | Madurai, Trichinopoly (Tiruchirappalli), Arkot (Arcot) |
| 1801-11-10 | YALNIZ-KUNYE-MADDESI | avad → ingiliz-hindistani | 5 | Etâve (Etawah), Kannauc, Kanpûr, Ilâhâbâd (Allahabad), Gorakhpûr |
| 1802-01-01 | YALNIZ-KUNYE-MADDESI | ingiltere → hollanda | 1 | Kap (Cape Town) |
| 1802-03-25 | ALAKASIZ-YAKIN | venezuela-genel-kaptanligi → ingiltere | 2 | San José de Oruña (St. Joseph), Port of Spain (Puerto de España) |
| 1802-03-27 | ALAKASIZ-YAKIN | ingiltere → hollanda | 2 | Georgetown (Stabroek), New Amsterdam (Berbice) |
| 1802-03-27 | ALAKASIZ-YAKIN | ingiltere → hollanda-guyanasi | 1 | Paramaribo |
| 1803-08-12 | ALAKASIZ-YAKIN | maratha → ingiliz-hindistani | 1 | Ahmednagar |
| 1803-09-01 | ALAKASIZ-YAKIN | hollanda → ingiltere | 3 | Georgetown (Stabroek), New Amsterdam (Berbice), Kyk-over-al (Essequibo) |
| 1803-09-04 | ALAKASIZ-YAKIN | maratha → ingiliz-hindistani | 1 | Koil (Aligarh) |
| 1803-09-11 | YALNIZ-KUNYE-MADDESI | babur-imparatorlugu → ingiliz-hindistani | 1 | Hisâr-ı Fîrûze |
| 1803-09-11 | YALNIZ-KUNYE-MADDESI | maratha → ingiliz-hindistani | 3 | Delhi, Mîrat (Meerut), Pânipat |
| 1803-10-14 | YALNIZ-KUNYE-MADDESI | maratha → ingiliz-hindistani | 3 | Kattak (Cuttack), Puri, Bâlâsor (Balasore) |
| 1803-10-17 | YALNIZ-KUNYE-MADDESI | maratha → ingiliz-hindistani | 2 | Agra, Mathura |
| 1803-12-30 | ALAKASIZ-YAKIN | maratha → ingiliz-hindistani | 1 | Kanbâyet (Khambhat) |
| 1804-01-01 | ALAKASIZ-YAKIN | hollanda-guyanasi → ingiltere | 1 | Paramaribo |
| 1806-01-01 | ALAKASIZ-YAKIN | hollanda → ingiltere | 1 | Kap (Cape Town) |
| 1806-01-18 | ALAKASIZ-YAKIN | hollanda → ingiltere | 3 | Graaff-Reinet, Stellenbosch, Svellendam |
| 1810-02-19 | ALAKASIZ-YAKIN | hollanda-dogu-hint → ingiltere | 1 | Ambon |
| 1810-08-09 | ALAKASIZ-YAKIN | hollanda-dogu-hint → ingiltere | 1 | Banda Neira |
| 1811-08-18 | ALAKASIZ-YAKIN | banten-sultanligi → ingiltere | 1 | Banten |
| 1811-08-18 | ALAKASIZ-YAKIN | hollanda-dogu-hint → ingiltere | 19 | Trowulan (Majapahit), Demak, Semarang, Surabaya, Batavia (Cakarta) |
| 1811-08-18 | ALAKASIZ-YAKIN | mataram-sultanligi → ingiltere | 1 | Surakarta (Solo) |
| 1811-08-18 | ALAKASIZ-YAKIN | yogyakarta → ingiltere | 1 | Yogyakarta |
| 1813-12-12 | ALAKASIZ-YAKIN | __BOSLUK__ → ingiliz-kuzey-amerika | 1 | Fort Astoria |
| 1815-01-16 | ALAKASIZ-YAKIN | __BOSLUK__ → ingiltere | 1 | Hamilton (Bermuda) |
| 1816-01-01 | ALAKASIZ-YAKIN | ingiltere → hollanda-guyanasi | 1 | Paramaribo |
| 1816-08-14 | ALAKASIZ-YAKIN | __BOSLUK__ → ingiltere | 1 | Edinburgh of the Seven Seas (Tristan da Cunha) |
| 1816-08-19 | ALAKASIZ-YAKIN | ingiltere → hollanda-dogu-hint | 20 | Trowulan (Majapahit), Demak, Semarang, Surabaya, Batavia (Cakarta) |
| 1816-08-19 | ALAKASIZ-YAKIN | ingiltere → surakarta | 1 | Surakarta (Solo) |
| 1816-08-19 | ALAKASIZ-YAKIN | ingiltere → yogyakarta | 1 | Yogyakarta |
| 1816-12-04 | ALAKASIZ-YAKIN | ingiltere → fransa-cumhuriyet | 2 | Çandernagor, Pondişeri |
| 1817-03-25 | YALNIZ-KUNYE-MADDESI | ingiltere → hollanda-dogu-hint | 2 | Ambon, Banda Neira |
| 1817-11-17 | ALAKASIZ-YAKIN | maratha → ingiliz-hindistani | 1 | Pûne (Poona) |
| 1818-01-01 | ALAKASIZ-YAKIN | maratha → ingiliz-hindistani | 7 | Ahmedâbâd, Patan (Anhilvâda), Çampâner, Cabalpûr (Jabalpur), Bîcâpur (Bijapur) |
| 1818-05-09 | ALAKASIZ-YAKIN | maratha → ingiliz-hindistani | 1 | Raygad |
| 1818-06-03 | ALAKASIZ-YAKIN | maratha → ingiliz-hindistani | 2 | Mandu (Mândû), Satâra |
| 1818-06-25 | ALAKASIZ-YAKIN | maratha → ingiliz-hindistani | 1 | Ecmîr (Ajmer) |
| 1818-10-06 | ALAKASIZ-YAKIN | ingiliz-kuzey-amerika → __BOSLUK__ | 1 | Fort Astoria |
| 1818-10-20 | ALAKASIZ-YAKIN | ingiliz-kuzey-amerika → abd | 1 | Pembina |
| 1819-05-01 | ALAKASIZ-YAKIN | ingiltere → hollanda-dogu-hint | 1 | Padang |
| 1824-03-17 | ALAKASIZ-YAKIN | ingiltere → hollanda-dogu-hint | 1 | Bengkulu (Bencoolen) |
| 1826-11-27 | MADDESIZ | ingiltere → ingiliz-malaya | 2 | Singapur, Penang (George Town) |
| 1829-06-06 | ALAKASIZ-YAKIN | beothuk → ingiliz-kuzey-amerika | 1 | Kızıl Kızılderili Gölü (Beothuk) |
| 1831-01-01 | ALAKASIZ-YAKIN | ingiltere → ingiliz-guyanasi | 3 | Georgetown (Stabroek), New Amsterdam (Berbice), Kyk-over-al (Essequibo) |
| 1833-01-03 | ALAKASIZ-YAKIN | __BOSLUK__ → ingiltere | 1 | Port Louis (Falkland) |
| 1842-01-06 | ALAKASIZ-YAKIN | ingiltere → afganistan | 1 | Kâbil |
| 1843-02-17 | YALNIZ-KUNYE-MADDESI | sind → ingiliz-hindistani | 3 | Tatta (Thatta), Haydarâbâd (Sind), Şikârpûr |
| 1845-02-22 | MADDESIZ | danimarka → ingiliz-hindistani | 1 | Tranquebar (Tharangambadi) |
| 1846-03-09 | ALAKASIZ-YAKIN | sih-imparatorlugu → ingiliz-hindistani | 1 | Câlandhar (Jalandhar) |
| 1847-01-01 | ALAKASIZ-YAKIN | brunei-sultanligi → ingiltere | 1 | Labuan (Victoria) |
| 1849-01-01 | ALAKASIZ-YAKIN | __BOSLUK__ → ingiliz-hindistani | 1 | Sambalpur |
| 1849-03-29 | ALAKASIZ-YAKIN | sih-imparatorlugu → ingiliz-hindistani | 11 | Lahor, Multan, Amritsar, Sirhind, Siyâlkot |
| 1852-01-17 | ALAKASIZ-YAKIN | ingiltere → transvaal | 1 | Potchefstroom |
| 1852-04-14 | MADDESIZ | konbaung → ingiliz-hindistani | 3 | Rangun (Yangon), Pathein (Bassein), Henzada (Hinthada) |
| 1852-12-20 | ALAKASIZ-YAKIN | konbaung → ingiliz-hindistani | 4 | Pegu (Bago), Toungoo, Prome (Pyay), Thaton |
| 1853-01-01 | ALAKASIZ-YAKIN | nagpur-bhonsle → ingiliz-hindistani | 2 | Raipur, Ratanpur |
| 1853-05-21 | ALAKASIZ-YAKIN | haydarabad-nizam → ingiliz-hindistani | 1 | Elicpûr (Achalpur) |
| 1855-01-01 | ALAKASIZ-YAKIN | ingiliz-kuzey-amerika → newfoundland-dominyonu | 6 | Hebron (Labrador), Nain (Labrador), Hopedale (Agvituk), Rigolet, Cartwright (Sandwich Körfezi, Labrador) |
| 1855-05-07 | YALNIZ-KUNYE-MADDESI | ingiliz-kuzey-amerika → newfoundland-dominyonu | 3 | Kızıl Kızılderili Gölü (Beothuk), St. John's (Newfoundland), Plaisance (Placentia) |
| 1856-02-07 | ALAKASIZ-YAKIN | avad → ingiliz-hindistani | 2 | Leknev (Lucknow), Feyzâbâd (Ayodhya) |
| 1858-08-02 | ALAKASIZ-YAKIN | hayda → ingiliz-kuzey-amerika | 2 | Skidegate (Haida Gwaii), SG̱ang Gwaay (Ninstints) |
| 1858-08-02 | ALAKASIZ-YAKIN | nuu-cah-nulth → ingiliz-kuzey-amerika | 1 | Yuquot (Nootka Sound) |
| 1858-08-02 | ALAKASIZ-YAKIN | nuxalk → ingiliz-kuzey-amerika | 1 | Bella Coola (Nuxalk) |
| 1858-08-02 | ALAKASIZ-YAKIN | secwepemc → ingiliz-kuzey-amerika | 1 | Secwépemc (Adams Gölü) |
| 1860-01-01 | ALAKASIZ-YAKIN | babur-imparatorlugu → ingiliz-hindistani | 2 | Asîrgarh, Burhânpûr |
| 1861-08-06 | YALNIZ-KUNYE-MADDESI | benin-kralligi → ingiltere | 1 | Lagos (Eko) |
| 1866-10-01 | ALAKASIZ-YAKIN | hannover → prusya | 1 | Hannover |
| 1867-10-18 | ALAKASIZ-YAKIN | ingiliz-kuzey-amerika → abd | 1 | Fort Yukon |
| 1868-03-12 | ALAKASIZ-YAKIN | basuto → ingiltere | 2 | Maseru, Thaba Bosiu |
| 1868-10-16 | YALNIZ-KUNYE-MADDESI | danimarka-hindistani → ingiliz-hindistani | 1 | Nancowry (Nikobar) |
| 1872-01-01 | ALAKASIZ-YAKIN | hollanda → ingiltere | 1 | Elmina (São Jorge da Mina) |
| 1873-07-01 | ALAKASIZ-YAKIN | ingiliz-kuzey-amerika → kanada | 1 | Port-la-Joye (Charlottetown) |
| 1874-07-24 | YALNIZ-KUNYE-MADDESI | asanti → ingiltere | 1 | Akra (Accra) |
| 1876-08-23 | ALAKASIZ-YAKIN | kri → kanada | 4 | Pukatawagan, Fort Severn güneyi — Winisk, Sandy Lake (Kuzeybatı Ontario), Obedjiwan (Atikamekw) |
| 1878-01-01 | ALAKASIZ-YAKIN | griqua → ingiltere | 2 | Griquatown, Philippolis |
| 1878-01-01 | ALAKASIZ-YAKIN | xhosa → ingiltere | 1 | Gcuva (Butterworth) |
| 1878-01-22 | ALAKASIZ-YAKIN | __BOSLUK__ → ingiltere | 1 | Tawau kıyısı (bölge) |
| 1878-01-22 | ALAKASIZ-YAKIN | sulu-sultanligi → ingiltere | 1 | Sandakan (Elopura) |
| 1879-07-04 | ALAKASIZ-YAKIN | zulu-kralligi → ingiltere | 2 | Ulundi (Zululand), Umgungundlovu |
| 1879-12-02 | ALAKASIZ-YAKIN | pedi → ingiltere | 1 | Tjate (Pedi) |
| 1884-09-10 | YALNIZ-KUNYE-MADDESI | nijer-deltasi → ingiltere | 2 | Eski Kalabar, Bonny |
| 1885-03-31 | ALAKASIZ-YAKIN | tsvana → ingiltere | 13 | Maun (Tavana), Toteng, Ganzi (Ghanzi), Serove (Serowe), Palapye |
| 1885-05-12 | ALAKASIZ-YAKIN | metis → kanada | 2 | Batoche, Buffalo Lake / Battle River (Métis) |
| 1890-01-01 | ALAKASIZ-YAKIN | umman-zengibar → ingiltere | 1 | Zanzibar (Zengibar) |
| 1890-06-27 | YALNIZ-KUNYE-MADDESI | lozi → ingiltere | 7 | Zambezi (Balovale), Kabompo, Kaoma (Mankoya), Kalabo, Lealui (Lozi) |
| 1891-05-14 | YALNIZ-KUNYE-MADDESI | umman-zengibar → ingiltere | 1 | Mankhamba (Maravi) |
| 1893-08-15 | ALAKASIZ-YAKIN | ibadan → ingiltere | 1 | İbadan |
| 1894-01-01 | ALAKASIZ-YAKIN | gambiya-mandinka → ingiltere | 1 | Albreda-Cufure |
| 1895-01-01 | YALNIZ-KUNYE-MADDESI | umman-zengibar → ingiltere | 3 | Karonga, Mbande (Ngonde), Nkhotakota (Cumbe) |
| 1897-01-01 | ALAKASIZ-YAKIN | sokoto → ingiltere | 1 | Bida (Nupe) |
| 1897-02-18 | ALAKASIZ-YAKIN | benin-kralligi → ingiltere | 2 | Benin Şehri (Edo), Onitsha |
| 1898-01-01 | ALAKASIZ-YAKIN | borgu → ingiltere | 1 | Busa (Borgu) |
| 1898-01-01 | ALAKASIZ-YAKIN | venda → ingiltere | 2 | Dzata (Venda), Luis Trichardt |
| 1899-06-21 | YALNIZ-KUNYE-MADDESI | dene → kanada | 9 | Old Crow (Vuntut Gwitchin), Colville Lake (K'áhbamı̨túé), Tetlit Gwich'in (Peel havzası), Tulít'a Dağ Denesi (Nahanni), Łutsël K'é (Snowdrift, Büyük Köle Gölü doğusu) |
| 1900-01-01 | ALAKASIZ-YAKIN | jukun-kvararafa → ingiltere | 2 | Vukari (Wukari), Lokoca (Lokoja) |
| 1900-01-01 | ALAKASIZ-YAKIN | kaonde-ila → ingiltere | 2 | Kasempa, Mumbva |
| 1900-01-01 | ALAKASIZ-YAKIN | tiv → ingiltere | 1 | Makurdi |
| 1901-10-25 | YALNIZ-KUNYE-MADDESI | nkore → ingiltere | 1 | Mbarara (Nkore) |
| 1902-01-01 | ALAKASIZ-YAKIN | kanem-bornu → ingiltere | 2 | Birni N'gazargamu, Kukava (Kukawa) |
| 1902-03-01 | YALNIZ-KUNYE-MADDESI | aro-konfederasyonu → ingiltere | 1 | Aroçukvu |
| 1902-05-31 | ALAKASIZ-YAKIN | oranj → ingiltere | 1 | Oranj (Bur cumhuriyeti) |
| 1902-05-31 | ALAKASIZ-YAKIN | transvaal → ingiltere | 2 | Transvaal (Bur cumhuriyeti), Potchefstroom |
| 1903-01-01 | ALAKASIZ-YAKIN | birom-plato → ingiltere | 1 | Cos (Jos) |
| 1903-01-01 | ALAKASIZ-YAKIN | sokoto → ingiltere | 3 | Kano, Katsina, Zaria (Zazzau) |
| 1903-01-01 | ALAKASIZ-YAKIN | svazi → ingiltere | 1 | Lobamba (Svazi) |
| 1903-01-15 | ALAKASIZ-YAKIN | sokoto → ingiltere | 1 | Sokoto |
| 1907-01-01 | YALNIZ-KUNYE-MADDESI | ingiltere → ingiliz-malaya | 1 | Labuan (Victoria) |
| 1916-05-23 | ALAKASIZ-YAKIN | darfur → ingiliz-sudani | 14 | El-Fâşir, Nyala, Cenîne, Kutum, Kebkâbiye |
| 1921-06-01 | ALAKASIZ-YAKIN | ingiltere → avustralya | 1 | Nauru (Yaren) |
| 1923-10-29 | ALAKASIZ-YAKIN | kanada → abd | 1 | Fort St. Pierre (Rainy Lake) |
| 1925-01-01 | YALNIZ-KUNYE-MADDESI | hicaz-kralligi → urdun-emirligi | 1 | Maan |
| 1934-02-16 | YALNIZ-KUNYE-MADDESI | newfoundland-dominyonu → newfoundland-komisyon-hukumeti | 10 | Hebron (Labrador), Kangiva (Nain iç bölgesi), Nain (Labrador), Hopedale (Agvituk), Rigolet |
| 1937-04-01 | YALNIZ-KUNYE-MADDESI | ingiliz-hindistani → ingiliz-burma | 27 | Pagan, Ava (İnwa), Mandalay, Pegu (Bago), Rangun (Yangon) |
| 1955-11-23 | ALAKASIZ-YAKIN | ingiltere → avustralya | 1 | Home Island (Cocos Keeling) |
| 1958-10-01 | ALAKASIZ-YAKIN | ingiltere → avustralya | 1 | Flying Fish Cove (Christmas Adası) |
