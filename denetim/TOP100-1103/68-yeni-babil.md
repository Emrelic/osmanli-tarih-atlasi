# 68 · Yeni Babil (Keldani) İmparatorluğu — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 2026-11-04 (ölçer `top100_olc.py yeni-babil medya ptolemai`; yerleşim sahipliği için kendi okuma betiğim `y68b/y68c.py`, yalnız okur)

## Özet
- Künye 1 (`yeni-babil`). Eksik evre yok; mükerrer künye yok (`--ara babil/keldan` → yalnız `babil-eski`, `kassit-babil`, `isin-2`, `yeni-babil`; hepsi ayrı polity).
- Ölçer: kırılma günü 4, **açık 0**, yalnız otomatik "dönem ucu" maddesiyle kapanan 0; "harita anahtarı" uyarısı yok.
- En ağır 3 bulgu:
  1. **Haritada neredeyse görünmüyor: yalnız 4 yerleşim** (Babil, Sippar, Uruk, Ur). Nippur, Kutha, Isin, Larsa, Eridu hiç `s:` taşımıyor; Harran/Ninova/Aşşur Yeni Asur bitişinden sonra sahipsiz; Levant (Kudüs, Gazze, Sûr, Sayda, Halep, Dimaşk) hiç yok. **Kudüs -0585 → 1253 arası `__BOSLUK__`** (1838 yıl delik).
  2. **Uruk ve Ur `t:-0538-01-01`** (künye t -0538-10-12'den ~9 ay önce) — Opis maddesinin yıl-günüyle sahte "kapanıyor"; kaynakta Opis Tašritu'dadır (Eylül-Ekim 539), yani Uruk/Ur'un bu uçları künyeyle (-0538-10-12) hizalanmalı ya da kendi kaynağı bulunmalı.
  3. **f günü kaynakta VAR ama yıl başına yazılmış:** Nabopolassar 26 Araḫsamna = 23 Kasım 626 (Grayson ABC 2; Livius). Künye `f:-0625-01-01` Babil'i 11 ay erken Yeni Babil yapıyor (öncesi Babil'de zaten `__BOSLUK__` -0626/-0625). Öneri f = `-0625-11-23`, kesinlik gün (±1 gün beyanı).

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| yeni-babil | Yeni Babil (Keldani) İmparatorluğu | -0625-01-01 | -0538-10-12 | TAMAM (tek polity). `devletler.js:19288` |
| babil-eski | Eski Babil (Amorit) | -1893 | -1594 | ayrı polity, ilişkisiz |
| kassit-babil, isin-2 | Kassit; Isin II | | | ayrı |
Eksik parça: yok. (Atropatene/Medya ayrı; Ahameniş ardıl; Asur öncül `yeni-asur` t -0608-01-01.)
Not: künye `t -0538-10-12` ile `ahamenis` f (-0549) örtüşmez; Babil'de -0538-10-12'den Ahameniş başlıyor (tutarlı).

## b) f/t ve evreler
**f (-0625-01-01, onyıl/yıl)**
- Atlas: -0625-01-01. Kaynak 1: TDV İslâm Ans., "Babil" (islamansiklopedisi.org.tr/babil) — «Keldânîler (Kaldeliler [Yeni Bâbil Krallığı] 626-539)» (okundu). Kaynak 2: Grayson, *Assyrian and Babylonian Chronicles* (1975) ABC 2 (Livius çevirisi üzerinden okundu, birincil neşir) — «on the twenty-sixth day of Arahsamna Nabû-apla-usur sat upon the throne in Babylon»; Livius (yol gösterici) "recognized as king on 23 November 626". Yıl 626 = çift teyit.
- Hüküm: yıl doğru (MÖ 626 → -0625 ✓ astronomik). **Gün kaynakta var** → yıl başına inmek "gün yoksa" kuralının dışı.
- Önerilen: `f:"-0625-11-23", kesinlik:{f:"gun"}` ve `ic_not_f`: "26 Araḫsamna Nabopolassar yıl 0 (ABC 2); Jülyen karşılığı 22/23 Kasım 626 (Livius 23 Kasım; Parker-Dubberstein tablosu bu makinede açılmadı) → ±1 gün". Tek gün çevirisi tek derleme kaynakta olduğundan alternatif: `f:"-0625-11-01"` kesinlik ay. Ayrıca: Babil'de -0626-01-01..-0625-01-01 `__BOSLUK__` aralığı da buna göre -0625-11-23'e uzar (Yeni Asur t -0626-01-01 sahibi gerçekte Nabopolassar'ın isyanına dek Asur: Yeni Asur Babil'de Kandalanu ölümü (627/626) — kaynak okunmadı).

**t (-0538-10-12, gün)**
- Kaynak 1: TDV Babil — «539 yılında Pers Kralı Kyros (559-530) tarafından yıkılmışlardır» (okundu). Kaynak 2: Grayson ABC 7 (Nabonid Kroniği), Livius çevirisi, 17. yıl: «On the sixteenth day, Ugbaru, governor of Gutium, and the army of Cyrus, without battle...» «On the third day of the month Arahsamna, Cyrus entered Babylon.» (okundu). Sippar için: «On the fourteenth day Sippar was captured without a battle.» (ay adı sayfada yok; ay Tašritu, Opis'le aynı bölüm).
- Hüküm: yıl çift teyit. Gün 16 Tašritu = 12 Ekim (Jülyen) çevirisi atlasta var (olaylar_antik_yakin_dogu.js:52) ama çeviri tablosu (P-D / Livius) bu turda doğrudan açılmadı → "gün: kaynak günü okundu (16. gün), Jülyen çevirisi doğrulanmadı". Künye `ic_not` "gün teyitsiz" diyor; bu turda **gün sayısı (16/14/3) birincil neşirden okundu**, yalnız takvim çevirisi açık. `ic_not` bu doğrultuda güncellenebilir.
- Anlam sorusu: t'yi "Ugbaru'nun girişi (12 Ekim)" mi "Kyros'un girişi (29 Ekim)" mi tutmak? Mevcut -0538-10-12 savunulabilir (Nabonid kroniği Babil'i savaşsız ele geçiriş = 16. gün; Kyros'un girişi 3 Araḫsamna = 29 Ekim); Babil'in hukuken Pers sayıldığı gün tartışmalı. Karar Emre'de; yalnız beyan şart.

**Evre sınırları**: tek künye, evre yok. (Nabukadnezar II 605-562, Nabonid 556-539 hanedan içi; ayrı künye gerekmez.)

**Yerleşim ucu uyuşmazlığı**: Uruk/Ur `-0538-01-01`, Sippar `-0538-10-10`, Babil `-0538-10-12`. Sippar 14 Tašritu (=10 Ekim, Jülyen çevirisi atlasta) doğru, çünkü kroniğin 14. günü; Uruk/Ur `-0538-01-01` kaynaksız, künyeden 9 ay erken. Öneri: Uruk, Ur t = `-0538-10-12` (künye ucu) "yerel kaynak bulunamadı; künyeyle hizalandı" beyanı; Ahameniş f aynı güne.
Uruk/Ur **f**: ABC 2 (Livius, okundu) 3. yılda (623/622) Nippur'a garnizon ve «ravaged Uruk?» → Uruk'un Babil'e bağlanması künye f -0625'ten sonra olabilir. Nippur için yerleşim kaydı hiç yok. **Soru (Grayson ABC 2 tamamı okunmadı):** Uruk ve Ur hangi yılda Nabopolassar'a geçti.

## c) Kronoloji (Değişmez 2 evreni: `data/olaylar*.js`, `kronoloji_sinir*.js`)
Var olanlar (hepsi tarih/format açısından kontrol edildi; MÖ→astronomik doğru):
- olaylar_antik_yakin_dogu.js:69 Asurbanipal öldü (-0630, MÖ 631; yıl) — Babil isyanı başlangıcı.
- :67 Kyaksares–Nabopolassar antlaşması -0613 (MÖ 614) ✓ (Grayson ABC 3, 12. yıl okundu).
- :65 Harran düştü -0609 (MÖ 610) ✓; 16. yıl.
- olaylar_arkeoloji_mezopotamya.js:8 Ninova düşüşü -0611 (MÖ 612, yıl) ✓ (ABC 3 14. yıl; Temmuz-Ağustos 612 okunan «from Simanu until Abu»; gün sayısı yok).
- olaylar_arkeoloji_mezopotamya.js:33 Nabopolassar tahta çıkar `-0625-01-01` yıl — **gün (26 Araḫsamna) kaynak alanında zaten var**, `t`ye yazılmamış.
- olaylar_antik_misir_nubya.js:40 Karkamış -0604 (MÖ 605, yıl; kroniğe göre 21. yıl [605/604] ✓), :39 Mısır sınırı savaşı -0600 (MÖ 601).
- :64 Nabopolassar öldü, Nabukadnezar tahta -0604-09-07 (1 Ulūlu = 7 Eylül 605) ✓ (ABC 5 Obv. 11 okundu).
- :63 Aşkelon -0603-12-01 ay (MÖ 604) ✓. :61 Kudüs 1. alış -0596-03-16 (2 Addaru yıl 7 = ABC 5 Rev. 11'-12' okundu; 16 Mart 597 Jülyen) ✓. :60 Kudüs yıkımı -0585 (MÖ 586; TDV 586 ✓). :59 Sûr kuşatması -0585 onyıl.
- :56 Nabonid darbe -0555; :55 Nabonid Teymâ -0551; :50 Opis -0538-01-01 (yıl; kroniğe göre Tašritu 539 → Eylül-Ekim, yıl başı yazılması kesinlik "yil" gereği); :51 Sippar -0538-10-10; :52 Babil -0538-10-12 ✓; :53 Kyros Babil'e girdi -0538-10-29 (3 Araḫsamna) ✓.
Eksik (öneri; gün ya da yıl kaynağıyla):
1. Nabopolassar'ın Babil'de kral oluşu **gün**: `{ t:"-0625-11-23", kesinlik:"gun", b:"Nabopolassar Babil tahtına oturdu; Yeni Babil kuruldu", yer_id:"Babil", kaynak:"Grayson ABC 2 (26 Araḫsamna); TDV Babil 626" }` (mevcut -0625-01-01 maddesinin yerine).
2. II. Nabukadnezar'ın ölümü ve Amel-Marduk (MÖ 562): hanedan değişimi maddesi yok (`grep -0561`: yok). Öneri: `{ t:"-0561-01-01", kesinlik:"yil", b:"II. Nabukadnezar öldü; Amel-Marduk tahta çıktı", kaynak:"Wiseman, CAH III.2 (1992) 229-251 (okunmadı: yalnız özet); Grayson ABC 5 sonrası; TDV Babil" }` — **kaynak açılmadı**, ERİŞİLEMEYEN listesinde.
3. Mısır seferi (MÖ 568/567) ve Nabukadnezar'ın Levant sınırı: yok; yalnız MÖ 601 var. (kaynak açılmadı.)
4. Levant bağlanması: Yehuda'nın vasal kalışı 605-597 maddesi yok (Kudüs'ün Babil'e bağlanışı yalnız 597 maddesinde ima).
Evren dışı: künyenin `kronoloji:[...]` maddeleri var, evren dışı.

## d) Harita uyumu
- Ölçer: kırılma günü 4 → AÇIK 0 + otomatik 0. Ama **kapanışlar kısmen sahte**: Uruk/Ur t `-0538-01-01` Opis (-0538-01-01) maddesiyle "kapanıyor"; gerçek kayıp günü değil. Gerçek açık: 1 (Uruk, Ur).
- En geniş an: -625 → -538 arası 4 yerleşim. Yani yerleşim sayısı küçük, **harita Yeni Babil'i görünmez yapıyor** (4 nokta; çevre peteklere emilir).
- Bilinen alan (Mezopotamya + Suriye-Filistin; Mısır sınırı, Harran-Karkamış hattı): Karkamış 605 (ABC 5), Hamat, Aşkelon 604, Kudüs 597/586, Sûr kuşatması (Josephus; Sûr vasal), Dimaşk/Halep (atlasta s: yok), Harran 610, Nippur (garnizon ABC 2 yıl 3).

| Gün/aralık | Yerleşimler | Öneri (kaynak zinciri gerekli, ben yazmadım) |
|---|---|---|
| -0625-11-23 → -0538-10-12 | Nippur (Nuffar), Kutha, Isin, Larsa, Eridu (boş `s:`) | Yeni Babil sahipliği (Nippur: ABC 2 yıl 3 garnizon; Kutha/Borsippa Babil çekirdeği). Çoğu için kaynak: Beaulieu/Jursa (ERİŞİLEMEYEN) |
| -0585-01-01 → -0538-10-12 | **Kudüs** (şimdi `__BOSLUK__` -0585 → 1253) | Yeni Babil (TDV 586 + ABC 5). Kudüs'ün tüm `__BOSLUK__` aralığı ayrı denetim işi (Ahameniş/Ptolemai 301-200/Selevkos/Roma…): MÖ 538 sonrası zincir başka devletlerin dosyasında |
| -0604 → -0538 | Gazze (Aşkelon 604 maddesi var), Sûr, Sayda, Dimaşk, Halep | atlasta bu şehirlerin -700..400 aralığında hiç `s:` yok: ölçüm `y68c.py` ile. Sûr 13 yıl kuşatma sonu vasal (beyanlı yaklaşıklık) |
| -0609 → -0538 | Harran, Ninova, Aşşur | Ninova -0611'de, Aşşur -0613'te sahipsiz kalıyor; sahibi kaynakta tartışmalı (Babil/Med pay); **boşluk merdiveni ⑤**: abi merkez Babil (ABC 3 «Aššur-uballit and Assyria disappear») → beyanlı yaklaşıklık |
| -0538-01-01 → -0538-10-12 | Uruk, Ur | t'yi künye ucuna çek (bkz. b) |

Ölçülemedi: motor çıktısı (petek boyası) bu turda ölçülmedi; yukarıdakiler yalnız `s:` verisi okumasıdır.

## Önerilen düzeltmeler (KASA için)
1. `data/devletler.js:19288` `yeni-babil`: `f:"-0625-11-23"`, `kesinlik:{f:"gun",t:"gun"}`; `ic_not_f`: "26 Araḫsamna (ABC 2, Grayson 1975); Jülyen 22/23 Kasım 626 ±1 gün (Livius 23 Kasım; P-D tablosu açılmadı)". `ic_not`: "gün sayısı 16/14/3 birincil neşirde okundu (ABC 7 y.17); Jülyen çevirisi P-D doğrulanmadı".
2. `data/yerlesimler_mo_zincir.js` Babil: `-0626-01-01..-0625-01-01 __BOSLUK__` → `-0625-11-23`'e uzat (Yeni Asur sahibi son güne kadar; Kandalanu/Asur kaynağı ayrıca teyit).
3. `data/yerlesimler_mo_sumer.js` Uruk ve Ur: `t:-0538-01-01` → `-0538-10-12` (+ Ahameniş f aynı gün), `kesinlik t:"yil"→"gun"` yalnız yerel kaynak bulunursa; yoksa künye ucuyla hizalama beyanı.
4. `data/olaylar_arkeoloji_mezopotamya.js:33`: `-0625-01-01` kesinlik yil → `-0625-11-23` gün.
5. Kudüs (`data/yerlesimler.js`): `-0585-01-01..-0538-10-12 yeni-babil` (zincir TDV 586 + ABC 5) — boşluk merdiveninin ① ve ② basamağı bu raporda dolu.
6. Nippur/Kutha/Isin/Larsa/Eridu `s:` ekleme: kaynak (Beaulieu/Jursa) açıldıktan sonra.

## Erişilemeyen kaynaklar
- Wiseman, D. J., "Babylonia 605-539 B.C.", CAH III.2 (1992) 229-251 — Cambridge Core sayfası yalnız özet verdi. Soru: Nabopolassar 626 Kasım günü ve Uruk/Nippur'un Babil'e geçiş yılları; Nabukadnezar ölümü (562); Mısır seferi 568/567.
- Beaulieu, P.-A., *The Reign of Nabonidus King of Babylon 556-539 B.C.* (Yale 1989) — soru: Nabonid kroniği 17. yıl Tašritu günlerinin Jülyen karşılığı (12 Ekim?), Uruk/Ur'un Kyros'a geçiş günü.
- Parker & Dubberstein, *Babylonian Chronology 626 B.C.–A.D. 75* (Brown 1956) — Araḫsamna 626 ve Tašritu 539 Jülyen çevirisi. archive.org'da arandı (bu turda açılmadı).
- Encyclopaedia Iranica "Cyrus iii" (Dandamayev) — 403 (atlas Uruk/Ur kaynakçasında anılıyor; açılamadı).
- Britannica "Nabopolassar" — 403.
