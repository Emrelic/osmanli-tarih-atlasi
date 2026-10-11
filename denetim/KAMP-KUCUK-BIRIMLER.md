# KAMP-KUCUK-BIRIMLER — K9: 1281-1923 penceresinde EKSİK küçük birimler

Görev: YILDIRIM BAYEZIT (10 Ekim 2026, `oturumlar/KAMPANYA-DUNYA-1010.md §2 K9`) · araştırmacı EMRELIC, Opus ·
`data/` DOKUNULMAZ — yalnız metin. Taban `origin/main` `d147f8a5` (`rev-list HEAD..origin/main` = 0), ayrı worktree.

## 0. ÖNGÖRÜ (araştırmadan ÖNCE yazıldı; sonradan DOKUNULMADI)
① TESPİT evreni: 8 aile × aday listesi (aşağıda §1) → `devletler.js` 897 künyeye karşı eşleştirildi.
- Eksik aday: **~125** (otomatik eşleşme + elle ayıklama). En yoğun: Alman/HRE (~35) · İtalyan (~17) ·
  Körfez/Güney Arabistan (~17) · Kafkas (~15) · Kürt emirlikleri (~15) · Hint prenslikleri (~10) · Balkan (~10) · Anadolu (2-3).
② İlk tur (§5) beklentisi:
- Kaynaklı `f`+`t`'si ÇIKACAK polity: **%70 ± 10** (TDV İslâm dünyası ailelerinde yüksek, HRE küçük birimlerinde düşük).
- `f` VEYA `t`'si `bulunamadı` kalan: %25 ± 10 — en çok Kürt emirlikleri (kuruluş yılsız, TDV bölge cümlesi) ve
  Güney Arabistan sultanlıkları.
- Kronoloji maddesi: polity başına 2-3 ⇒ **250-350 madde**; `harita_degisimi:EVET` (Osmanlı d/v kırılması) yalnız
  Kürt + Körfez + Kafkas + Balkan ailelerinde, **~40 ± 15**.
- Sınıflandırma TEREDDÜT kovası: **15 ± 5** (signoria/papa vikerliği · Hansa · Silezya parçaları · Sih misilleri ·
  Habsburg arazileri · hükümet sancak ↔ yurtluk-ocaklık).

## 1. ① TESPİT — hangi birimler EKSİK
### 1.1 Yöntem
- `devletler.js` 897 künye `node` ile yüklendi, `id · ad · tur · bolge · f · t` TSV'ye döküldü (tür dağılımı: devlet 228 ·
  krallik 170 · hanedanlik 73 · cumhuriyet 65 · sultanlik 62 · beylik 48 · **tur boş 46** · imparatorluk 35 · prenslik 31 ·
  hanlik 27 · emirlik 23 · dukalik 20 · kontluk 5 …).
- Önce 15 hedef bölgenin bütün künyeleri ADIYLA okundu (yöntemin asıl gövdesi), sonra 8 aile × aday listesi
  (`scratchpad/KAMP-KUCUK-BIRIMLER/aday.py`) normalleştirilmiş `id+ad` içinde anahtar kelimeyle eşleştirildi.
- 🔴 Anahtar eşleşmesi yanlış pozitif üretti ve **elle ayıklandı** (aracın deseni bir ölçüm parametresidir, `§11`):
  Bakü→`edo-bakufu` · Avar→`navarra` · Kazıkumuk("lak")→`lakota`/`eflak` · Gence→`seddadiler-gence` (951-1075) ·
  Arta/Spata→`bambara`/`surakarta` · Asîr İdrîsî→`idrisi` (Fas, 789-985) ve `aiz` (Âiz Emirliği, İdrîsî DEĞİL) ·
  Bitlis→`dilmacogullari` (Bitlis-Erzen, 1085-1394 — Rojkî emirliği DEĞİL) · Pertek→`mirdasi` (Halep Mirdâsîleri) ·
  Kaşmir Çak→`altinorda`/`kipcak`. Doğru kapsayanlar: Modena→`ferrara` ("Este Devleti (Ferrara / Modena)") ·
  Malta→`rodos-sovalyeleri` · Kefalonya/Tocco→`epir-despotlugu` ("Tocco dönemi dâhil", kısmen) · İki Sicilya→`napoli`.
- ⚠️ Bu aday listesi bir ARAMA EVRENİDİR, kaynak değildir; varlık ve tarihler ② aşamasında kaynakla doğrulanır.

### 1.2 Zaten VAR — eşleşen künye (aday listesinde olup eksik ÇIKMAYANLAR)
- **Anadolu (27/29 var):** karaman · germiyan · aydin · saruhan · mentese · hamid · candar · dulkadir · ramazanoglu · karesi ·
  eretna · burhaneddin · ahiler · cobanogullari · pervane · esrefogullari · inancogullari · sahibata · taceddin · alaiye · teke ·
  haciemir · gozleroglu · mutahharten · sutayogullari · cemisgezek-beyligi · eyyubi-hisnikeyfa.
- **Hint (çoğu var):** delhi · behmeni · bicapur · ahmednagar · golkonda · berar · bidar · gucerat · malva · cavnpur · bengal (iki) ·
  farukiler · kesmir · sind · multan-langah · haydarabad-nizam · avad · karnatik · meysur (iki) · maratha · bhopal · cunagadh ·
  bahavelpur · arakan …
- **İtalya:** venedik · cenova · napoli · papalik · milano · floransa · toskana · savoya · sardinya-piyemonte · siena · ferrara ·
  bonacolsi · mantua · parma · piza · piombino · dubrovnik · rodos-sovalyeleri.
- **HRE:** saksonya · bavyera · pfalz · hannover · baden · wurttemberg · brandenburg-prusya · prusya · burgonya · savoya.
- **Balkan:** sirp-despotlugu · bulgar-carligi · vidin-carligi · bosna-kralligi · hersek · zeta · crnojevic-zetasi · dejanovic ·
  topia · dukagin · iskenderbey · mora · ahaya · atina · katalan · naksa · epir.
- **Kafkas:** kartli · kaheti · imereti · megrelya · guria · abhazya · samtshe · kuba-hanligi · revan-hanligi · kabartay · cerkez.
- **Körfez:** umman · kuveyt/sabah · bahreyn · katar/sani · kesiri · kuayti · sammar · suud (üç) · mekke-serifligi.

### 1.3 🔴 EKSİK — 8 aile, **125 aday** (② aşamasına giden liste)
| aile | n | adaylar |
|---|---|---|
| Kürt emirlikleri / hükümet sancakları | 14 | Bitlis (Rojkî) · Hakkâri · Soran · Baban · Behdinan · Erdelan · Mahmudî · Palu · Eğil · Genç · Hazzo · Mükriyan · Bradost · Pertek (Mirdesî) — *Bohtan/Cizre: `cezire-hukumeti` STATU-V-1010 diff'inde önerildi* |
| Anadolu beylikleri | 2 | Kubadoğulları (Bafra) · Turgutoğulları |
| İtalyan devletleri | 17 | Lucca · Urbino · Montferrat · Saluzzo · Monako · San Marino · Sicilya Krallığı 1282-1816 · Verona (Scaliger) · Padova (Carrara) · Bologna (Bentivoglio) · Rimini (Malatesta) · Korsika Cumh. · Massa-Carrara · Guastalla · Mirandola · Trento · Akuileia |
| HRE kuzey/doğu | 19 | Hessen · Mecklenburg · Pomeranya · Holstein · Schleswig · Braunschweig · Lauenburg · Oldenburg · Anhalt · Ernestin dukalıkları · Schwarzburg · Reuss · Waldeck · Lippe · Lübeck · Hamburg · Bremen · Hansa · Silezya |
| HRE batı/güney + Alçak Ülkeler | 18 | Köln · Mainz · Trier · Salzburg · Liège · Utrecht · Kleve · Jülich-Berg · Lorraine · Tirol · Nassau · Frankfurt · Liechtenstein · Brabant · Gelre · Hainaut · Hollanda Kontluğu · Bar |
| Balkan despotlukları | 11 | Dobruca · Serez · Prilep · Gattilusio (Midilli+) · Kefalonya-Zakintos · Arta (Spata) · Muzaka · Arianiti · Valona-Kanina · Sakız Mahona · Lazar Sırbistanı |
| Kafkas hanlıkları | 15 | Karabağ · Şeki · Şirvan · Gence · Bakü · Derbent · Nahçıvan · Talış · Kazıkumuk · Avar · Kaytak · Mehtuli · İlisu · Svaneti · Kuzey Kafkasya İmamlığı |
| Körfez / Güney Arabistan | 17 | Abu Dabi · Dubai · Şarika · Re'sülhayme · Acman · Ümmülkayveyn · Füceyre · Asîr İdrîsî · Lahic · Fadlî · Avlakî · Yâfi' · Muhammara · Mehre · Beyhân · Dâli' · Avâzil |
| Hint prenslikleri | 10+ | Kalat · Hayrpur · Rampur · Tonk · Patiyala · Kapurthala · Sih misilleri · Rohilkand · Maldiv · Kutch (+ Nabha, Jind) |
**Toplam: 14+2+17+19+18+11+15+17+10 = 123 (+2 opsiyonel = 125).**

### 1.4 Künye VAR ama penceresi şüpheli (eksik değil — K0/künye aşımı sınıfı, ADIYLA)
- `kumuk-samhalligi` "Kumuk Şamhallığı (Tarki)" **1578-11-01 → 1607-01-01**; Tarku şamhallığı 19. yy'a kadar sürdü ⇒ ② Kafkas
  araştırmacısına ÖLÇTÜRÜLDÜ (yeni satır değil, ölçüm).
- `aiz` (1918-1920) adı "Âiz Emirliği (Ebhâ / Asîr)" — İdrîsî emirliği (1906/1909-1934) ile karıştırılmamalı.

### 1.5 Bu turda TARANMAYAN aileler (sınır, ADIYLA)
Kuzey ve Batı Afrika sultanlıkları · Güneydoğu Asya ve Endonezya sultanlıkları · Fransız feodal birimleri (Bourbon, Provence,
Foix, Armagnac …) · İberya senyörlükleri · İskandinav/Baltık dukalıkları · Rus knezlikleri (pencere içi kalıntılar) · Amerika.
Bölge dökümü (§1.1) bu ailelerde künye yoğunluğunun yüksek olduğunu gösteriyor (batı-afrika 62 · guneydogu-asya 70 · kuzey-amerika 62),
ama eksik taraması YAPILMADI ⇒ "eksik yok" DEĞİL, **"ölçülmedi"**.

## 2. ② KRONOLOJİ — ölçüm (8 aile, paralel araştırma, birleştirme denetimi 0 HATA)
Her aile ayrı bir alt araştırmacıya verildi (ortak kurallar: `scratchpad/KAMP-KUCUK-BIRIMLER/ORTAK-KURALLAR.md` — şema,
kırmızı çizgi, hicrî sözleşme, dosya sınırı). Birleştirme betiği (`birlestir.py`) şunları denetledi: başlık şeması · `tur`
kümesi · `f`/`t`/`tarih` biçimi ya da `bulunamadı` · kimlik çakışması (aileler arası VE 897 künyeye karşı) · kronoloji
`polity`sinin çözülmesi · `harita_degisimi` ∈ {EVET, HAYIR}. **HATA 0.**
```
AILE            polity  f+t kaynaklı  krono  EVET  bulunamadı  TEREDDUT
KURT-ANADOLU       16       0           46    27       63          5
ITALYA             18      16           93     0        6          7
HRE-KUZEY          33      29 *        123     0        4 *        9
HRE-BATI           22      16           77     0        6          3
BALKAN             12       9 *         39    18       10 *        8
KAFKAS             16       8           52     5       26          3
KORFEZ             20       9           68    13       35          5
HINT               13      13 **        47     0       10          2
TOPLAM            150     100          545    63      160         42
```
`*` birleştirmede düzeltildi (aşağıda) · `**` 10'unun `t`'si 1923-10-29 PENCERE İŞARETİ (1923 sonrası sürüyor), ölçüm değil.
`tur` dağılımı: prenslik 32 · dukalik 30 · emirlik 25 · beylik 13 · hanlik 13 · teokrasi 9 · sultanlik 9 · kontluk 5 ·
sehir-devleti 5 · cumhuriyet 4 · konfederasyon 3 · krallik 2. Kafkas'ın 2 maddesi MEVCUT `kumuk-samhalligi` künyesine yazıldı.

### 2.1 Birleştirmede yapılan iki düzeltme (kural gereği, notta beyanlı)
- `lazar-sirbistani.t` 1402-01-01 → `bulunamadı`: değer atlasın `sirp-despotlugu` künyesinden alınmıştı (**atlas referans değil**).
- `silezya-dukaliklari.t` 1742-01-01 → `bulunamadı`: alıntıda geçmeyen **türetilmiş** yıldı (türetilen sayı alıntıya yazılmaz).

### 2.2 En büyük boşluk — ADIYLA
**Kürt emirliklerinin 16'sının HİÇBİRİNİN kuruluş yılı kaynakta yok** (TDV bölge/hanedan cümleleri yılsız; yüzyıl bile
çoğunda verilmiyor). Kaynaklı bitiş 6'sında: Hakkâri 1849 · Soran 1834 · Bâbân 1850 · Behdinan 1842 · Erdelan 1867-05-05
(H.1284) · Kubadoğulları ~1417. Palu · Eğil · Genç · Hazzo'da yalnız bölgesel "1850'lerden itibaren" var ⇒ yazılmadı.
Körfez: 20'nin 11'inde kuruluş `bulunamadı` (Aden hinterlandı; EI ve Qatar Digital Library açılamadı).

### 2.3 🔴 İLK TUR TESLİMİNDEKİ (M-5928) ÜÇ SAYI YANLIŞTI — düzeltildi
Birleştirme betiğinin TEREDDÜT sayacı `not`un yalnız ilk 40 karakterine bakıyordu; başa eklenen BİRLEŞTİRME/ARAMA
işaretleri kelimeyi dışarı itince **saymadı** (aracın deseni bir ölçüm parametresidir). İkinci turda yakalandı:
TEREDDÜT **36 → 42** (İtalya 5→7 · HRE kuzey 8→9 · Balkan 5→8) · f+t kaynaklı **99 → 100** · bulunamadı **161 → 160**
(Balkan'da tabloyu elle düzeltirken iki sayıyı yanlış yazmıştım; betik çıktısı 9 ve 10). CSV'ler etkilenmedi — yalnız sayım.

## 3. TEREDDÜT KOVASI — 42 satır (ilk tur), sınıflandırma hükmü SENİN
| aile | kimlik | soru |
|---|---|---|
| Kürt | baban-emirligi | TDV: sancak OCAKLIK, beyler Bağdat valisinin teklifiyle atanır ⇒ ölçütünle polity değil olabilir |
| Kürt | mukriyan-emirligi | Iranica: bir AŞİRET; Safevî'ye bağlı, Osmanlı tâbiiyeti yalnız 1580'ler-1603 |
| Kürt | bradost-emirligi | Osmanlı-Safevî arası; hükümet listesinde var ama tabiiyet değişken |
| Kürt | pertek-mazgirt-beyligi | yurtluk-ocaklık (tahrire girer) ⇒ polity DEĞİL; `cemisgezek-beyligi` kolu |
| Anadolu | turgutogullari | TDV: Karaman'a bağlı oymak ⇒ künye önerilmez, olaylar `karaman`a |
| İtalya | urbino-dukaligi · bologna-bentivoglio · rimini-malatesta | Papalık vikerliği / tâbiyeti — kendi hanedanı, fiilen bağımsız |
| İtalya | sicilya-ada-kralligi | 1282-1409 ayrı krallık; 1415'ten viceré ⇒ 1282-1412'yi ayrı satıra bölme önerisi |
| İtalya | trento-prens-piskoposlugu | 1363'ten Tirol/Habsburg koruması |
| HRE | holstein · schleswig-dukaligi | 1460'tan Danimarka kralı = dük (şahsî birlik; Schleswig HRE dışı) |
| HRE | luneburg-dukaligi · ernestin-dukaliklari | kol sınırları karışık; Ernestin bir AİLE satırı |
| HRE | hamburg | f 1189 (berat) mı 1510 (reichsfrei) mı |
| HRE | bremen | 1646 öncesi başpiskoposa bağlı |
| HRE | hansa-birligi | ittifak, toprak devleti değil ⇒ haritada boyanmamalı, kronoloji katmanı olabilir |
| HRE | julich-berg-dukaligi · bar-dukaligi · tirol-kontlugu | şahsî birlikler / Habsburg mülkü |
| Balkan | prilep-kralligi | f 1371 (Marko) mı 1365 (Vukašin ortak kral) mı |
| Balkan | kefalonya-zakintos-kontlugu | `epir-despotlugu` (Tocco dâhil) ile çakışma |
| Balkan | muzaka-berat | TDV prensliğin ADINI vermiyor; Muzaka akademik kaynakla doğrulanamadı |
| Balkan | arianiti-senyorlugu | TDV: Osmanlı timar düzeni içinde yerli bey ⇒ polity değil olabilir |
| Balkan | sakiz-mahonasi | `cenova`nın iç birimi olabilir |
| Balkan | lazar-sirbistani | `sirbistan-nemanjic` (1166-1402) zaten kapsıyor ⇒ künye 1371'de bölünsün mü |
| Kafkas | sirvan-hanligi-hacidavud · derbent-hanligi · kazikumuk-hanligi | vasal/geçiş dönemleri, şamhallıktan ayrılış anı |
| Körfez | acman-seyhligi · fuceyre-seyhligi | TDV: Şârika'ya bağlı; Aitchison: ayrı antlaşmalar |
| Körfez | yukari-avlaki-seyhligi · yukari-yafi-sultanligi | alt kollar mı tek polity mi (Yâfi' `konfederasyon`) |
| Körfez | muhammere-seyhligi | hukuken Kaçar'a bağlı vali-şeyh |
| Hint | sih-misilleri | gevşek konfederasyon |
| Hint | mirpur-talpur | atlastaki `sind` (Tâlpûr) künyesinin iç kolu mu |

## 4. KARAR BEKLEYEN KAYNAK/TAKVİM SORULARI (ADIYLA)
1. 🔴 **Jülyen ↔ Gregoryen** (Kafkas): TDV Şamil'in teslimini bir maddede 6 Eylül, iki maddede 25 Ağustos 1859 veriyor —
   fark tam 12 gün. Rus kaynaklı günler (Avar 1864-04-02 · Kaytak 1820-01-26 · Kazıkumuk 1858-07-16) büyük olasılıkla
   JÜLYEN; CSV'ye kaynağın günü yazıldı. Atlas proleptik Gregoryen (`gun.py`) ⇒ +12 gün kaydırma hükmü sende.
2. **Vespri günü** (İtalya): Treccani "31 marzo 1282" ama aynı cümlede "lunedì di Pasqua" = 30 Mart; atlas `napoli.f`/
   `sicilya-kralligi.t` 1282-03-30 ⇒ ÖLÇÜLEMEDİ olarak işaretlendi.
3. **Weimarer Republik e.V.** (HRE kuzey): Kasım 1918 monarşi sonları için dernek portalı (maddeler Kittel'in kitabına
   dayanıyor). Kurumsal sayılmazsa **13 birimin** 1918 bitiş GÜNÜ açığa düşer (yıl NDB/Bundestag ile kalır).
4. **Britannica 1911** (HRE iki aile): güncel britannica.com bu makineye 403; 1911 baskısının Wikisource dökümü kullanıldı
   (Britannica'nın KENDİ metni, Vikipedi değil — ama 115 yıllık).
5. **Rampur** (Hint): TDV 1737, Imperial Gazetteer 1774 ⇒ iki polity yazıldı: `rohilkand` 1737-1774 + `rampur` 1774-.
6. **Cizre** (Kürt): TDV kurtler Bedirhan'ın "Hükûmet-i Cezîre"yi 1821'de alıp 1847-07-29'da teslim olduğunu yazıyor —
   STATU-V-1010'daki `cezire-hukumeti` (1508-1627, tek aralık) ile aynı soru.
7. **`kumuk-samhalligi` künyesi DAR** (Kafkas ölçümü, §1.4): polity 1281 öncesi var, sonu 1867 (Kurbanov); künyenin
   1578-1607'si polity değil Osmanlı tâbiliği dilimi ⇒ `D205` sınıf ② (künye GENİŞLER), 1725 kesintisi var.
8. **Körfez EVET adayları:** Fadlî 1915 (Lahic'te Türklerle antlaşma, asker girişi kaynakta yok ⇒ HAYIR yazıldı) ·
   mevcut `kuayti-sultanligi` için TDV hadramut "Şibâm ve Şihr 1919'a kadar Osmanlı" (YAZILMADI, senin künyen).

## 5. Kaynak seti ve kronoloji sistemi
- **İslâm dünyası (Kürt · Anadolu · Kafkas Müslüman · Körfez · Hint Müslüman · Balkan-Osmanlı ilişkisi): TDV birincil.**
  Ölü slug (302) çoktu ve ADIYLA listelendi (aile notları); canlı-yanlış madde tuzakları: `dubai` (kişi; doğrusu `dubey`) ·
  `idrisiler` (Fas) · `muhammed-b-gazi` (Selçuklu âlimi) · `mukri` (Kıraat).
- Akademik/kurumsal: Encyclopaedia Iranica (archive kopyası) · Treccani (Enciclopedia Italiana, DBI, Dizionario di Storia) ·
  Encyclopaedia Britannica 1911 · NDB/Deutsche Biographie · Historisches Lexikon der Schweiz · Bayerisches Hauptstaatsarchiv
  (Archivportal-D) · Oxford Dictionary of Byzantium · Imperial Gazetteer of India 1908 (DSAL) · Aitchison, *Treaties,
  Engagements and Sanads* XI-XII · Rusça akademik makaleler (Kurbanov · Murtazaev · Abdulmazhidov–Magomedova) ·
  Cemal Ülke doktora tezi (Hakkâri). **Vikipedi hiçbir satırda dayanak değil.**
- **Kronoloji sistemi:** proleptik Gregoryen hedef; hicrî yıllar `CLAUDE.md §4` sözleşmesiyle (kesişimin ilk günü, hesap
  satırda); Jülyen şüphesi §4.1'de açık. MÖ tarih yok (pencere 1281-1923).
- Alıntı doğrulaması: Kafkas 99/99 · HRE kuzey 195/195 alıntı indirilen metinde birebir bulundu (öteki aileler kendi
  notlarında beyanlı); Körfez Aitchison alıntıları OCR'den, sayfa ±1.

## 6. Yarım bırakılan yer — ADIYLA
- §1.5'teki taranmayan aileler (Afrika · Güneydoğu Asya · Fransız feodal · İberya · İskandinav · Rus · Amerika).
- Araştırmacıların bulduğu ama satıra açmadığı **ek adaylar** (aile notlarında ⑤): Kafkas — Kürin, Tabasaran, Ereş/Kutkaşen/
  Gebele, Salyan, Şeki melikliği, Car-Balakan · Körfez — Subeyhî, Akrabî, İrka, Aşağı Havra, Havşebî, Alevî, Vâhidî, Kutaybî,
  Kelbâ, Udeyd, Benî Kâ'b · Hint — Las Bela/Khârân, Mekrân, Maler Kotla, Ferîdkot/Kaithal/Kalsia, Ferruhâbâd, Necîbâbâd ·
  İtalya — Neuhoff Korsika Krallığı, Anglo-Korsika, Brixen, öteki papalık vikerlikleri · HRE — Hessen-Homburg,
  Holstein-Gottorp, ayrı Silezya dukalıkları · Balkan — Tocco Arta devleti (1430-1449), Gattilusio Foça.
- Kürt emirliklerinin kuruluş yılları ve Bitlis · Mahmudî · Palu · Eğil · Genç · Hazzo'nun bitişleri (akademik izler
  notta: Ünal 1990, Erpolat, Alanoğlu YÖK Tez 482215).
- §3'ün (`SEHIR.csv`) bu dilim için üretilmedi: K9 şartnamesi POLITY + KRONOLOJİ istedi.

## 7. Öngörü sınavı
```
                                   öngörü          ölçüm
eksik aday                         ~125            123 (+ araştırmada açılan ek 27 ⇒ 150 polity satırı)
f+t kaynaklı pay                   %70 ± 10        100/150 = %67 ✓ (sınırda; Kürt 0/16 çekiyor)
f veya t bulunamadı                %25 ± 10        51/150 = %34 ✓ (üst sınır)
kronoloji maddesi                  250-350         545 ✗ (üstünde; Alman/İtalyan aileleri zengin)
harita_degisimi EVET               ~40 ± 15        63 ✗ (üstünde; Kürt 27 tek başına)
TEREDDUT                           15 ± 5          42 ✗ (iki katı — sınıflandırma sorusu öngördüğümden yaygın)
en çok bulunamadı: Kürt + G.Arabistan   ✓ (63 + 35)
```

## 8. İKİNCİ TUR (11 Ekim 2026) — §1.5'in taranmayan aileleri + SEHIR.csv
Taban `origin/main` (kendi dalıma birleştirildi, `3742d4e8`), künye listesi tazelendi (897).

### 8.1 Tespit — taranmayan ailelerin mevcut künyeleri
Güneydoğu Asya (70 künye) · Batı Afrika (62) · Kuzey Afrika (26) · Doğu Afrika (47) · Orta Afrika (28) bölge bölge okundu.
🔴 Bulgu: bu bölgeler büyük ölçüde **TOPLU künyelerle** kaplı — `malay-sultanliklari` (1281-1909) · `dogu-sumatra-sultanliklari` ·
`bugis-kralliklari` · `bali-kralliklari` · `hausa-sehir-devletleri` (1000-1808) · `sokoto` · `nijer-deltasi` · `svahili-sehirleri`
(1000-1698) · `somali` (1500-1927). Eksik olan, bunların İÇİNDEKİ tekil birimler ve birkaç tamamen eksik birim. Toplu künye ile
tekil birim çakışması bir SINIFLANDIRMA sorusudur ⇒ ilgili her satır TEREDDÜT.

### 8.2 Ölçüm (üç yeni aile + şehir)
```
AILE            polity  f+t   krono  EVET  bulunamadı  TEREDDUT
GDASYA             20    19      54     0          3        16
BATI-AFRIKA        32    13      47     0         45        24
KD-AFRIKA          20     6      65     9         54        17
TUR 2 TOPLAM       72    38     166     9        102        57
İKİ TUR TOPLAM    222   138     711    72        262        99    (birleştirme HATA 0)
SEHIR.csv          69 satır · ilk kayıt tarihli 38 · bulunamadı 23 · aranmadı 8 · atlasta zaten var 9 (satır yazılmadı)
```

### 8.3 Birleştirmede yapılan düzeltmeler (ikinci tur)
- **ARAMA-ÖZETİ işareti 53 satır:** Batı Afrika'da britannica.com 403 verdi, araştırmacı Britannica cümlelerini arama motoru
  özetinden okudu (23 polity + 29 kronoloji) + Bulungan (1731). Bu satırların `not`una/`metin`ine *"birebir DOĞRULANMADI
  (ÖLÇÜLEMEDİ riski)"* yazıldı. İtalya/Buton/Muhammere'de arama özeti yalnız KARŞI TANIK olarak geçiyor, dayanak değil.
- **SEHIR — `aranmadı` ≠ `bulunamadı`:** 8 şehirde (Lehic · Kişn · Mirpur Khas · Monako · Corte · Massa · Kaliakra · İlisu) tarih
  HİÇ aranmamış, yalnız koordinat ölçülmüştü; araştırmacı `bulunamadı` yazmıştı ⇒ `aranmadı`ya ayrıldı (§4 kural 6).
- **SEHIR — Lucca `-0180-01-01` → `-0179-01-01`:** MÖ 180 astronomik numaralamada -179 (yıl 0 VAR).
- 5 şehirde tarih "ilk kayıt" değil **en erken tanıklık = üst sınır** (Ümmülkayveyn 1775 · Dübey 1799 · Acmân 1820 · Uşni 1189 ·
  Male 1752) — notta beyanlı.

### 8.4 Koordinatöre ek sorular (ikinci tur)
1. 🔴 **Takvim (ikinci tanık):** KD-Afrika araştırmacısı TDV'nin 1582 öncesi tarihleri JÜLYEN verdiğini hicrî tabloyla sınadı
   (Vattâsî f H.876 = 1471-06-20). İlk turdaki Kafkas bulgusuyla birlikte soru artık **1582 öncesi bütün TDV günleri**dir;
   atlas proleptik Gregoryen (`gun.py`). Ölçtürülmeli: atlasın mevcut 1281-1582 TDV günleri hangi takvimde yazılmış?
2. **Harar mükerrer:** mevcut `adal` = "Adal Sultanlığı / Harar Emirliği" (1415→1887-01-06); TDV ucu 1887-01-07. Yeni
   `harar-emirligi` satırı büyük olasılıkla AÇILMAMALI. **Vattâsîler** `merini` (1196-1549) içinde; ayrı künye yalnız 1549-1554 için anlamlı.
3. **Toplu künye pencereleri tekil birimlerle uyuşmuyor:** `malay-sultanliklari` 1909'da bitiyor, Kedah/Perak/Pahang/Selangor/
   Terengganu 1923 sonrası sürüyor · `bambara` künyesi Kaarta'yı zaten içeriyor.
4. **Zeylâ ve Berberâ** polity değil ama güçlü EVET tarihleri var (1559 Osmanlı · 1849 Hudeyde'ye bağlanış · 1875-06-01 Mısır'a
   ferman · 1883/84 çekiliş) — aile notunda ⑤, CSV'ye yazılmadı.
5. **Süleymaniye:** koordinatı atlasta "Şehrizor" adıyla duruyor; TDV'ye göre Süleymaniye 1784'te kuruldu ⇒ o noktanın adı/başlangıcı ölçtürülmeli.
6. **Kaynak niteliği (GDASYA):** Malay/Endonezya kaynakların çoğu üniversite dergisi makalesi; bir kısmı konuya teğet
   (Perlis için mutfak makalesi, Bulungan için mimarlık dergisi). Kırmızı çizgiyi ihlal etmiyor ama ZAYIF — ikinci kaynakla teyit önerilir.
7. **Sokoto'ya bağlı emirlikler** (Kano, Zaria, Bauchi, Gombe, Ilorin, Nupe, Gwandu): Osmanlı hükümet sancağı sorusunun aynısı —
   halifeliğe tâbi emirlik ayrı polity mi?

### 8.5 Öngörü (ikinci tur için yazılmadı — BEYAN)
İkinci turun öngörüsü ölçümden önce AYRI yazılmadı; §0'daki öngörü yalnız ilk turun evrenini kapsıyordu. Bu bir usul eksiğidir.

### 8.6 Hâlâ taranmayan (sınır, ADIYLA)
Fransız feodal birimleri · İberya senyörlükleri · İskandinav/Baltık · Rus knezlikleri (pencere içi kalıntılar) · Amerika ·
Orta Afrika'nın tekil birimleri (Kotoko, Dar Sila …) · Güney Afrika. Ek adaylar aile notlarında (⑤).

## EK — aile notları (alt araştırmacıların NOT.md'leri, AYNEN)
Kaynak URL'leri, ölü slug listeleri, çelişkiler ve seçimleri, ek adaylar burada; CSV satırlarının izlenebilirliği için.

### EK · KURT-ANADOLU

#### KURT-ANADOLU — notlar (10 Ekim 2026)

#### ① Kaynak URL'leri (hepsi GET ile 200 doğrulandı; TDV slug'ları 302 olanlar aşağıda)
- Ortak: TDV kurtler https://islamansiklopedisi.org.tr/kurtler (Kanûnî, 1631-32, 1673-1740 hükümet/yurtluk-ocaklık listeleri; 1550-51 tevcih defteri; 1847 sonrası) · TDV hukumet https://islamansiklopedisi.org.tr/hukumet · TDV ocaklik https://islamansiklopedisi.org.tr/ocaklik · TDV zazalar https://islamansiklopedisi.org.tr/zazalar · TDV diyarbakir https://islamansiklopedisi.org.tr/diyarbakir · TDV van https://islamansiklopedisi.org.tr/van
- bitlis-emirligi: TDV bitlis https://islamansiklopedisi.org.tr/bitlis · TDV seref-han https://islamansiklopedisi.org.tr/seref-han
- hakkari-emirligi: TDV hakkari https://islamansiklopedisi.org.tr/hakkari · Cemal Ülke dr. tezi (Artuklu 2022) https://gcris.artuklu.edu.tr/entities/publication/e94d9ea2-079f-439c-8b79-74f9407275e4/full (özet, WebFetch ile okundu)
- soran-emirligi, behdinan-emirligi: Encyclopaedia Iranica BAHDĪNĀN https://www.iranicaonline.org/articles/bahdinan-kurdish-region-river-dialect-group-and-amirate/
- baban-emirligi: TDV suleymaniye--irak https://islamansiklopedisi.org.tr/suleymaniye--irak · Iranica BĀBĀN DYNASTY https://www.iranicaonline.org/articles/baban-2/
- erdelan-emirligi: Iranica BANĪ ARDALĀN https://www.iranicaonline.org/articles/bani-ardalan-a-kurdish-tribe-of-northwestern-iran-now-dispersed-in-sanandaj-senna-and-surrounding-villages/
- mahmudi-beyligi: TDV hosap-kalesi https://islamansiklopedisi.org.tr/hosap-kalesi
- mukriyan-emirligi: Iranica MOKRI TRIBE https://www.iranicaonline.org/articles/mokri/
- kubadogullari: TDV samsun https://islamansiklopedisi.org.tr/samsun · TDV taceddinogullari https://islamansiklopedisi.org.tr/taceddinogullari
- turgutogullari: TDV turgutlular https://islamansiklopedisi.org.tr/turgutlular
- Ölü TDV slug'ları (302): soran, baban, erdelan, palu, egil, genc, hazro, mukriyan, behdinan, imadiye, mahmudiler, hosap, bradost, pertek, mazgirt, kubadogullari, turgutogullari, serefname + varyantları (`--ilce`, `-beyligi`, `babanlar`, `erdelanlar` …). `mukri` canlı ama YANLIŞ MADDE (→ KIRAAT yönlendirmesi). TDV sitesindeki arama JS ile render ediyor; adaylar WebSearch(site kısıtlı) + GET ile doğrulandı.
- Hicrî hesap: tablosal takvim, TDV'nin verdiği gün eşleşmeleriyle sınandı (3 Şevval 986 = 1578-12-03, 20 Zilkade 949 = 1543-02-25, 29 Zilhicce 1005 = 1597-08-13 — üçü de birebir).

#### ② bulunamadı (ADIYLA)
- f (başlangıç) — 16 birimin hiçbirinde kaynaklı yıl yok (hepsi 1281 öncesi/“XIV. yy”/“XVII. yy 2. yarı” gibi yüzyıl ifadeleri).
- t (son): bitlis-emirligi · mahmudi-beyligi · palu-hukumeti · egil-hukumeti · genc-hukumeti · hazzo-hukumeti (dördü için TDV zazalar yalnız “1850'lerden itibaren”, onyıl+bölgesel) · mukriyan-emirligi · bradost-emirligi · pertek-mazgirt-beyligi · turgutogullari.
- Osmanlı'ya tâbi oluş yılı: hakkari · soran · behdinan · mahmudi · palu · egil · genc · bradost (TDV yalnız “Çaldıran sonrası / XVI. yy başı”; bölgesel “Eylül 1515 Diyarbekir” ŞEHRE TAŞINMADI).
- Bitlis Emîri'nin Kanûnî döneminde İran'a geçiş yılı.

#### ③ Çelişkiler ve seçim
- Bitlis'in Osmanlı'ya tâbi oluşu: TDV bitlis “Çaldıran Seferi dönüşünde (1514)” ↔ TDV seref-han “921'de (1515)”. 1514-01-01 Çaldıran'dan önceye düştüğü için H.921 ∩ 1515 = 1515-02-15 seçildi.
- Bitlis statüsü: TDV kurtler “hükümet” ↔ TDV seref-han 1592 “ocaklık statüsünde mutasarrıf”. Hakkâri ve Mahmudî de TDV ocaklik'ta “ocaklık” listesinde ↔ TDV kurtler/hukumet'te “hükümet”. Koordinatör ölçütü TDV kurtler listesine dayandığı için hükümet sayıldı (TEREDDUT yazılmadı), not'ta beyanlı.
- Bâbân sonu: TDV 1850 (kurtler + suleymaniye--irak) ↔ Iranica 1263/1847 (özerklik sonu) ve 1267/1851 (son Bâbân kaymakamı). TDV esas.
- Süleymaniye kuruluşu: TDV suleymaniye 1197/1783 ↔ TDV kurtler 1784 ↔ Iranica 1195/1781. Yer maddesi (suleymaniye--irak) esas → 1783-01-01.
- Soran sonu: Iranica 1834; yaygın literatürde 1836 (kaynaklı değil, kullanılmadı).
- Hakkâri f: İhsan Akın YL tezi başlığı “Emirate of Hakkari (1130-1849)” — cümle yok, kullanılmadı.

#### ④ KUNYE_TSV'de zaten var
- `cemisgezek-beyligi` (Melkîşî, 1281-1420): Şerefnâme tasnifinde Pertek bu hânedanın kolu ⇒ `pertek-mazgirt-beyligi` belki ayrı künye değil, bu künyenin uzantısıdır (koordinatör hükmü).
- `mirdasi` (1024-1080) Halep Mirdâsîleri — Palu/Eğil “Mirdâsî” beyleriyle AYNI KİMLİK DEĞİL; çakışma yok.
- `dilmacogullari` (Bitlis-Erzen, 1085-1394) — Bitlis'in önceki hânedanı; Rojkî/Şerefoğulları ile ardıllık TDV'de kurulmuyor (öncül `bulunamadı`).
- `pervane` · `taceddin` · `candar` — Kubadoğulları'nın komşuları; `candar` Samsun'un ardılı olarak yazıldı.
- `karaman` — Turgutoğulları'nın olayları bu künyeye aittir.
- Bohtan/Cizre: görev gereği YAZILMADI; önerilen ayrı künye `cezire-hukumeti` (1508→1627, TDV cizre). Not: TDV kurtler Bedirhan Bey'in 1821'de “Hükûmet-i Cezîre”nin başına geçtiğini ve 29 Temmuz 1847'de teslim olduğunu yazar — önerilen t (1627) ile bu bilgi çelişiyor gibi; o künyenin sahibine sorulmalı.

#### ⑤ Ek adaylar (listede yok, TDV'de hükümet/emirlik olarak geçiyor)
- Hizan (Van; 1550-51 “eyalet”, 1632-42 ve 1673-1740 hükümet) · Hasankeyf (Melikan) — TDV kurtler birinci grup, ama `eyyubi-hisnikeyfa` (1232-1462) künyesi var · Pünyanişi (Van, Kanûnî hükümet) · Tercil (Diyarbekir, 1632-42'den hükümet) · Mihrivan/Mihriban (Şehrizor, Ayn Ali listesi) · Uşni (XVII. yy ortası hükümet) · Çapakçur ve Zeriki (1550-51 “eyalet”) · Müküs (Mahmud Han, XIX. yy; TDV kurtler) · Kelhûr (Şerefnâme, Safevî tarafı).

#### ⑥ Bitiremediğim
- Palu, Eğil, Genç, Hazzo, Mahmudî, Bitlis: emirlik sonlarının kaynaklı yılı (TDV'de yok; akademik ip uçları: M. Ali Ünal “XVI. Yüzyılda Palu Hükümeti”; M. S. Erpolat “Eğil Sancağı” (Dicle açık arşiv 403); Alanoğlu dr. tezi, YÖK Tez 482215). Ayrıca Kubadoğulları'nın “Bafra” ilişkisi doğrulanamadı (TDV merkezi SAMSUN der).

### EK · ITALYA

#### ITALYA — İtalyan küçük devletleri (1281-1923) · NOT

Kaynak: tamamı Treccani (Dizionario di Storia 2010 · Enciclopedia Italiana · Dizionario Biografico degli Italiani ·
Enciclopedia online · Enciclopedia machiavelliana). Britannica `curl`/WebFetch'e 403 verdi — kullanılamadı. Vikipedi kullanılmadı.
Sayfalar `curl` ile indirildi, alıntılar indirilen metinden birebir (`ITALYA-is/dl/*.txt`). Taban: `https://www.treccani.it/enciclopedia/`.

#### ① Polity başına kaynak URL'leri
- lucca-cumhuriyeti / lucca-prensligi: `repubblica-e-ducato-di-lucca_(Dizionario-di-Storia)/` · `lucca_(Enciclopedia-Italiana)/`
- urbino-dukaligi: `urbino_(Dizionario-di-Storia)/` · `della-rovere_(Dizionario-di-Storia)/` · `francesco-maria-ii-della-rovere-duca-di-urbino_(Dizionario-Biografico)/`
- monferrato: `monferrato_(Dizionario-di-Storia)/` · `giovanni-giorgio-paleologo-marchese-di-monferrato_(Dizionario-Biografico)/` · `margherita-paleologo-duchessa-di-mantova-e-marchesa-del-monferrato_(Dizionario-Biografico)/`
- saluzzo: `marchesato-di-saluzzo_(Dizionario-di-Storia)/` · `lione/`
- monako: `principato-di-monaco_(Dizionario-di-Storia)/` · `franceschino-grimaldi_(Dizionario-Biografico)/` · `grimaldi_(Enciclopedia-Italiana)/`
- san-marino: `san-marino_(Dizionario-di-Storia)/` · `san-marino_(Enciclopedia-Italiana)/` · `girolamo-gozi_(Dizionario-Biografico)/`
- sicilya-ada-kralligi: `vespro-siciliano_(Enciclopedia-Italiana)/` · `regno-di-sicilia/` · `sicilia_(Dizionario-di-Storia)/` · `due-sicilie-regno-delle_(Dizionario-di-Storia)/` · `martino-ii-d-aragona-re-di-sicilia_(Dizionario-Biografico)/` · `compromesso-di-caspe_(Enciclopedia-Italiana)/`
- verona-della-scala: `della-scala_(Enciclopedia-Italiana)/` · `verona_(Dizionario-di-Storia)/` · `antonio-della-scala_(Dizionario-Biografico)/`
- padova-carrara: `padova_(Dizionario-di-Storia)/` · `giacomo-da-carrara_(Dizionario-Biografico)/` · `da-carrara/`
- bologna-bentivoglio: `bentivoglio_(Enciclopedia-Italiana)/` · `bentivoglio/`
- rimini-malatesta: `rimini_(Enciclopedia-machiavelliana)/` · `malatesta-detto-malatesta-da-verucchio-malatesta_(Dizionario-Biografico)/` · `malatesta_(Enciclopedia-Italiana)/`
- korsika-cumhuriyeti: `pasquale-paoli/` · `pasquale-paoli_(Dizionario-di-Storia)/` · `corsica_(Dizionario-di-Storia)/` · `napoleone-i-imperatore_(Enciclopedia-Italiana)/`
- massa-carrara: `massa-e-carrara-ducato-di_(Enciclopedia-Italiana)/` · `ducato-di-modena_(Dizionario-di-Storia)/`
- guastalla: `guastalla_(Dizionario-di-Storia)/` · `ferrante-gonzaga_res-2ddd3445-87ee-11dc-8e9d-0016357eee51_(Dizionario-Biografico)/` · `giuseppe-maria-gonzaga_(Dizionario-Biografico)/`
- mirandola: `mirandola_(Enciclopedia-Italiana)/` · `pico_(Dizionario-Biografico)/` · `pico-francesco-maria-duca-della-mirandola_(Dizionario-Biografico)/`
- trento-prens-piskoposlugu: `trentino_(Enciclopedia-Italiana)/` · `trentino-alto-adige_(Dizionario-di-Storia)/`
- akuileia-patrikligi: `sigeardo_(Dizionario-Biografico)/` · `friuli_(Enciclopedia-Italiana)/` · `aquileia/` · `friuli-venezia-giulia_(Dizionario-di-Storia)/`

#### ② bulunamadı
- `monferrato` f — Treccani DdS yalnız "10°-11° sec." (yıl yok).
- `san-marino` f — 301 GELENEK; Placito Feretrano DdS'de "855" (yaygın tarih 885; çelişki çözülmedi).
- Öncül/ardılı bulunamadı: massa-carrara (öncül), mirandola (öncül), trento (öncül), san-marino (öncül).
- Cesare Borgia'nın Urbino (1502-03) ve San Marino işgali, Lorenzo de' Medici'nin Urbino'su (1516-21): gün/yıl taşıyan cümle alınmadı ⇒ kronolojiye yazılmadı.
- Lucca 1814-1817 Avusturya ara dönemi başlangıç/bitiş günü alınmadı.
- Korsika merkezi Corte: kaynak cümlesi alınmadı.

#### ③ Çelişen kaynaklar ve seçim
- **Vespri günü:** Treccani EI + Enc. online "31 marzo 1282". Atlas künyeleri `napoli` f ve `sicilya-kralligi` t = 1282-03-30. 1282 Paskalyası 29 Mart ⇒ Paskalya Pazartesisi 30 Mart; Treccani metni kendi içinde "lunedì di Pasqua" + "31 marzo" diyor ⇒ kaynak takvimle çelişiyor. Seçim: kaynağın günü yazıldı, **ÖLÇÜLEMEDİ** olarak işaretlenmeli; atlas künyeleriyle hizalama koordinatörde.
- İki Sicilya: DdS "Sicilia" 8 Ara 1816 (seçildi) · DdS "Due Sicilie" 22 Ara 1816.
- Verona sonu: DBI 17/18 Ekim 1387 gecesi (seçildi: 18) · EI 19 Ekim.
- Padova sonu: DdS 17 Kas 1405 (seçildi) · Storia di Venezia 19 Kas (WebSearch özeti).
- Bologna 1401: EI 27 Şubat (seçildi) · DBI Andrea/Bente B. 14 Mart (WebSearch özeti). Casalecchio 1402: 16/24/26 Haziran ⇒ yıl.
- Urbino 1631: DBI FM II 28 Nisan (seçildi) · DBI Vittoria D.R. 23 Nisan (WebSearch özeti).
- Pontenuovo: EI Napoleone 9 Mayıs 1769 (seçildi) · DBI Giuseppe Bonaparte "aprile 1769".
- Massa sonu: EI 1829 (seçildi) · DdS "Modena" 1830.
- Guastalla kontluğu: DdS 1428 · DBI Ferrante 1619.
- Trento sonu: EI Kasım 1802 (seçildi) · DdS 1803 · DBI P.V. Thun 1801 Lunéville. Ayrıca DdS 1363'te "definitivamente secolarizzato … parvenza di autorità propria" ⇒ TEREDDUT.
- Akuileia sonu: EI Friuli 16 Haz 1420 (seçildi; "dominazione politica … finita" cümlesi) · Storia di Venezia 6 Haz / 19 Haz (WebSearch özeti).
- Monako: DdS Franceschino'yu 1297 fatihi sayar; DBI Franceschino onun katılmadığını, 8 Ocak 1297'nin "prima conquista" olduğunu yazar. f = 1419 (kesintisiz egemenlik) seçildi.
- Mirandola: hanedanın sonu 1708 (azil) · devletin Modena'ya geçişi 1711-04-16 (t seçildi).

#### ④ KUNYE_TSV'de ZATEN VAR olduğu keşfedilen
- Yok (18 öneri kimliğinin hiçbiri çakışmıyor; sınandı). İlgili mevcutlar: `sicilya-kralligi` (1072-1282, öncül) · `napoli` (ardıl) · `mantua` (Monferrato 1536-1708 Gonzaga şahsi birliği — çift boyama riski) · `ferrara` (Este/Modena: Massa ve Mirandola'nın ardılı) · `milano-dukaligi` (Verona'nın ardılı) · `venedik` (Padova, Akuileia ardılı) · `papalik` (Urbino, Bologna, Rimini) · `parma` (Guastalla ardılı) · `toskana` (Lucca ardılı) · `savoya` (Monferrato ardılı).

#### ⑤ Listede olmayan EK aday
- Korsika Krallığı (Theodor von Neuhoff, 1736) — Treccani DdS Corsica: "fu acclamato re di C. (1736)".
- Anglo-Korsika Krallığı (1794-1796) — DdS Paoli: "fece approvare dalla Consulta (1794) l'unione della Corsica all'Inghilterra".
- Correggio prensliği, Novellara kontluğu, Sassuolo (Modena'ya katılan küçük birimler — DdS Modena).
- Carpi (Pio), Camerino (da Varano), Pesaro (Sforza), Forlì/Imola (Ordelaffi/Riario), Faenza (Manfredi), Ravenna (da Polenta) — Romagna/Marke papalık vikerlikleri, Rimini ile aynı TEREDDUT sınıfı.
- Bressanone/Brixen prens-piskoposluğu (Trento ile 1027-1803) — EI Alto Adige.
- Görz (Gorizia) kontluğu; Mantua'nın Bonacolsi öncesi; Cybo dışı Lunigiana Malaspina markizlikleri.

#### ⑥ Bitirilemeyen
- Hiçbiri bırakılmadı; ancak Sicilya satırı TEREDDUT (1412 sonrası viskrallık) ve iki satıra bölünmesi önerildi. Osmanlı ile doğrudan toprak ilişkisi yok ⇒ bütün `harita_degisimi` = HAYIR.

#### Şema notları
- `tur` kümesinde "senyörlük" yok: Verona/Padova/Bologna/Rimini → `beylik` seçildi (koordinatör değiştirebilir). Markizlik → `prenslik`; prens-piskoposluk/patriklik → `teokrasi`.
- TEREDDUT (5): urbino-dukaligi · sicilya-ada-kralligi · bologna-bentivoglio · rimini-malatesta · trento-prens-piskoposlugu.

### EK · HRE-KUZEY

#### HRE-KUZEY — NOT

33 polity · 123 kronoloji satırı · bütün `harita_degisimi` = HAYIR. 195 alıntının hepsi indirilen kaynak metninde
BİREBİR bulundu (sınav: `HRE-KUZEY-is/sina.py`; kusur 0; ≤25 kelime; künye çakışması 0).

#### ① Kaynaklar
**Birincil — Encyclopaedia Britannica 11. baskı (1911).** britannica.com bu makineden HTTP 403 verdi (WebFetch ve curl);
EB1911 metni Wikisource'un düzeltilmiş dökümünden okundu (Wikisource bir Vikipedi DEĞİL, EB'nin birebir dökümü;
`kaynak` alanında EB maddesi + URL). Maddeler (`https://en.wikisource.org/wiki/1911_Encyclopædia_Britannica/<Madde>`):
Hesse · Hesse-Cassel · Hesse-Darmstadt · Mecklenburg · Pomerania · Holstein · Schleswig-Holstein Question · Lauenburg ·
Brunswick (German duchy) · Hanover (province) · Oldenburg (grand-duchy) · Anhalt · Saxony · Saxe-Weimar-Eisenach ·
Saxe-Coburg-Gotha · Saxe-Meiningen · Saxe-Altenburg · Schwarzburg-Rudolstadt · Schwarzburg-Sondershausen · Reuss ·
Waldeck-Pyrmont · Lippe (principality) · Lübeck · Hamburg (city) · Bremen (city) · Hanseatic League · Silesia.
⚠ EB1911, 1911 sonrasını (1918 devrimi) kapsamaz → 1918 uçları aşağıdaki kaynaklardan.

**1918 monarşi sonu (t uçları):**
- Deutscher Bundestag, Revolutionskalender 8.11.1918 (Braunschweig) ve 9.11.1918 (Weimar, Oldenburg azli, Gotha azli):
  https://www.bundestag.de/dokumente/textarchiv/1918-11-08-revolutionskalender-37-081118-574084 ·
  https://www.bundestag.de/dokumente/textarchiv/1918-11-09-revolutionskalender-38-091118-574088 (takvim 9.11'de biter).
- Weimarer Republik e.V., "Chronik November 1918" — her madde Kittel s.53-55'e dayanıyor:
  https://www.weimarer-republik.net/themenportal/chronik-1918-bis-1933/1918/november-1918/
  ⚠ Bu bir dernek portalıdır (akademik kitaba atıflı). Kurumsal yeterliliği koordinatör hükmüdür; reddedilirse
  Mecklenburg ×2, Meiningen, Altenburg, Coburg-Gotha(14.11), Schwarzburg ×2, Reuss ×2, Anhalt, Lippe, Schaumburg-Lippe,
  Waldeck, Oldenburg(11.11) t'leri ve Hessen'in ikinci dayanağı açığa düşer.
- NDB, "Ernst Ludwig" (Hessen): https://www.deutsche-biographie.de/sfz52918.html

#### ② bulunamadı
- `waldeck` f — kontluk Volkwin'in (ö. 1178) evliliğiyle; yıl yok (12. yy).
- `lippe` f — I. Bernhard (hükm. 1113–1144) Lothar'dan bağış; bağış yılı yok (12. yy).
- `hansa-birligi` f — kuruluş tarihi yok (aday yıllar: 1241 · 1256 · 1356–1377); öncül de yok.
- Hamburg'un 1810–1814 Fransız ilhakı günü/yılı EB "Hamburg (city)"de bulunamadı (kronolojiye yazılmadı).
- Saksonya-Weimar ile Eisenach birleşme yılı; Braunschweig'ın Vestfalya'ya katılma yılı (EB yalnız "then") — yazılmadı.
- Lübeck 1937 · Mecklenburg 1934 · Waldeck 1929 · Thüringen 1920 · Kuzey Schleswig 1920 — notta anıldı, KAYNAKLA ÖLÇÜLMEDİ.

#### ③ Çelişkiler ve seçim
- **Hessen-Darmstadt t:** NDB "Umsturz vom 12.11.1918" ↔ Weimarer Republik e.V. azli 11.11 altında verir → NDB (12.11) seçildi.
- **Holstein dükalığı:** EB1911 1472 der; yaygın literatür 1474 → EB yazıldı, notta beyan.
- **Oldenburg t:** Bundestag 9.11 (Wilhelmshaven 21'ler Konseyi'nin azil kararı — Wilhelmshaven Oldenburg'a ait değil) ↔
  11.11 resmî feragat (Kittel) → 11.11 seçildi.
- **Saksonya-Coburg-Gotha t:** Gotha'da 9.11 azil ilanı · Landtag'da 14.11 çekilme ilanı · resmî feragat hiç yok → 14.11.
- **Saksonya-Meiningen t:** III. Bernhard 10.11, veliaht Ernst 12.11 → 10.11 (hükümdarın feragati).
- **Mecklenburg-Strelitz t:** naiplik 14.11 feragatle biter, 16.11 ilan → 14.11.
- **Silezya t = 1742:** EB "1741 … In the following year" — yıl TÜRETİLDİ (alıntıda rakam yok), beyan edildi.
- **Schwarzburg f:** "about the beginning of the 13th century" → 1200-01-01 · onyil.

#### ④ KUNYE_TSV'de zaten var olan
Listedekilerin hiçbiri yok (yalnız verilen yasak liste: saksonya, hannover, prusya vb.). Satırlarda öncül/ardıl olarak
kullanılan gerçek id'ler: `saksonya` · `hannover` · `prusya` · `brandenburg-prusya` · `danimarka` · `isvec` ·
`polonya-erken` · `habsburg`. ÇAKIŞMA notları: `ernestin-dukaliklari` f=1547 — 1485-1547 Ernestin elektörlüğü
`saksonya` içinde sayıldı; `luneburg-dukaligi` t=1705 — `hannover` 1692'de başlar ama Celle 1705'e dek ayrı hükümdarda.

#### ⑤ Ek adaylar (listede yok, yazılmadı)
Hessen-Homburg (1622–1866) · Hessen-Marburg (1567–1604) · Hessen-Rheinfels (1567–1583) · Mecklenburg-Güstrow
(–1695 civarı) · Holstein-Gottorp (1544–1773) · Braunschweig-Calenberg (1432–) ve -Grubenhagen (–1596) ·
Saksonya-Altenburg I (1603–1672) · Saksonya-Coburg-Saalfeld (1680/1699–1826) · Saksonya-Hildburghausen (1680–1826) ·
Saksonya-Eisenach (1641–) · Anhalt alt prenslikleri (Dessau, Bernburg, Köthen, Zerbst, Plötzkau) · Reuss ailesi
(vogt Heinrich ö. ~1120) · Silezya ayrı dükalıkları (Liegnitz-Brieg, Oppeln-Ratibor, Teschen, Troppau, Oels, Glogau…) ·
Ratzeburg prenslik (Mecklenburg-Strelitz parçası) · Birkenfeld ve Lübeck prensliği (Oldenburg parçaları) ·
Bremen başpiskoposluğu (Bremen şehrinin 1646 öncesi efendisi).

#### ⑥ Bitirilemeyen
Ana 19 kalemin hepsinin f/t + doğuş/yıkılış satırı yazıldı. Silezya ayrı dükalıkları ve ⑤'teki ek birimler AÇILMADI.
`hansa-birligi` polity olarak boyanmaya uygun değil (ittifak) — koordinatör hükmü.

### EK · HRE-BATI

#### HRE-BATI — NOT (Kutsal Roma batı/güney prenslikleri, kilise devletleri, Alçak Ülkeler)

Erişim: britannica.com (güncel) WebFetch/curl'e **403** verdi ⇒ Britannica'nın **1911 baskısı** (Wikisource'taki
tıpkıbasım metni — Vikipedi DEĞİL, EB1911'in kendisi) kullanıldı. Ek: Deutsche Biographie (NDB), Historisches Lexikon
der Schweiz, Bayerisches Hauptstaatsarchiv kayıt tanımı (Archivportal-D). Her `kaynak` hücresinde URL + birebir alıntı var.

#### ① Kaynak URL'leri (taban: `https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/`)
| polity | sayfalar |
|---|---|
| koln-elektorlugu | `Cologne` |
| mainz-elektorlugu | `Mainz` |
| trier-elektorlugu | `Trier` |
| salzburg-prens-baspiskoposlugu · salzburg-elektorlugu | `Salzburg_(city)` + https://www.archivportal-d.de/item/KR7NSC2IFHO6A3QOURFJNIK2SAG6W2T5 (BayHStA) |
| liege-prens-piskoposlugu | `Li%C3%A9ge_(city)` |
| utrecht-prens-piskoposlugu | `Utrecht_(province)` · `Utrecht_(city)` |
| kleve-dukaligi | `Cleves` · `Berg` |
| julich-berg-dukaligi | `Berg` (EB1911 `Jülich` maddesi yalnız kasabayı anlatıyor, dukalık tarihi yok) |
| berg-buyuk-dukaligi | NDB "Murat, Joachim" https://www.deutsche-biographie.de/sfz37268.html · `Berg` |
| lorraine-dukaligi · bar-dukaligi | `Lorraine` · `Bar-le-Duc` |
| tirol-kontlugu | `Tirol` |
| nassau-dukaligi | `Nassau` |
| frankfurt-* (3) | `Frankfort-on-Main` |
| liechtenstein | HLS "von Liechtenstein" https://hls-dhs-dss.ch/de/articles/019973/2008-11-27/ · `Liechtenstein` |
| brabant-dukaligi | `Brabant_(duchy)` |
| gelre-dukaligi | `Gelderland_(duchy)` |
| hainaut-kontlugu · hollanda-kontlugu | `Hainaut` · `Holland,_County_and_Province_of` |

#### ② bulunamadı (6 hücre)
- `liege-prens-piskoposlugu.f` — yalnız "Notger'in piskoposluğu (972-1008) sırasında tanındı" deniyor; YIL yok.
- `utrecht-prens-piskoposlugu.f` — dünyevî güç "gradually" kazanıldı; yıl yok.
- `tirol-kontlugu.f` — aile ilk 1140'ta anılıyor (kontluğun kuruluşu değil).
- `frankfurt-imparatorluk-sehri.f` — imtiyazlar kademeli (1219, 1311 …); tek kuruluş yılı yok.
- `berg-buyuk-dukaligi.t` ve `frankfurt-buyuk-dukaligi.t` — 1813 dağılışı okuduğum kaynakta cümleyle yok
  (EB1911'de yalnız bir kitap adında "1806–1813").
- Gün bulunamayanlar (yıl yazıldı, `kesinlik:yil`): Köln/Mainz/Trier/Salzburg 1803 (Reichsdeputationshauptschluss günü
  hiçbir okuduğum cümlede yok), Brabant 1430, Hainaut/Hollanda 1433, Kleve 1614 (Xanten — EB1911 yıl verir), Nassau f 1806.

#### ③ Çelişkiler ve seçim
- **Salzburg sekülerleşme:** EB1911 "peace of Lunéville (1802)" · BayHStA 1803 ⇒ **1803**.
- **Utrecht satışı:** EB1911 `Utrecht (province)` 1527 · `Utrecht (city)` 1527 işgalinin ertesi yılı Ekim ⇒ **1528-10 (ay)**.
- **Köln:** EB1911 "secularized in 1801" (sol yakanın Fransa'ya gidişi) ama sağ yaka 1803'te paylaşıldı ⇒ t **1803**.
- **Liège:** EB1911 "1794'ten itibaren ilhak"; resmî ilhak kararnamesinin günü okunmadı ⇒ t **1794 (yıl)** — koordinatör
  isterse resmî ilhak günü ayrıca aranmalı.
- **Gelre dukalığı:** EB1911 **1338** der (yaygın "1339" değil) ⇒ 1338.
- **Hainaut Avesnes'e geçiş:** EB1911 1279 der (Margaret'in ölümü) ⇒ 1279 yazıldı.
- **Hollanda ile Frankfurt Prusya ilhakı farklı günler:** Nassau 1866-10-03, Frankfurt 1866-10-18 — ikisi de EB1911'de ayrı ayrı gün olarak var.
- **Tanım seçimi (f):** listede "Dukalığı" diye adlanan birimlerde f = dukalığa yükseliş (Kleve 1417, Gelre 1338, Bar 1354,
  Jülich-Berg birleşmesi 1423); öncül kontluklar `oncul`da "(künye yok)". Lorraine f = kalıtsal hanedan 1048 (dukalığın
  10. yy kuruluş yılı cümleyle yok). Mainz f = 747 başpiskoposluk merkezi (dinî kurumun yılı; dünyevî prensliğin değil).
- **Örtüşme (bilinçli):** kleve-dukaligi ile julich-berg-dukaligi 1521-1609 aynı hükümdarda (şahsî birlik, ayrı meclisler);
  hainaut-kontlugu ile hollanda-kontlugu 1299-1433 aynı hükümdarda.
- `merkez` sütununda "(kaynaksız, yalnız bilgi)" işaretli olanlar kaynakla doğrulanmadı.

#### ④ KUNYE_TSV'de zaten var
Listedeki 18 birimin hiçbiri ayrı `id` olarak yok. İlişkili mevcut künyeler (ardil/oncul olarak kullanıldı): `burgonya` ·
`habsburg-hollandasi` · `habsburg` · `fransa` · `fransa-cumhuriyet` · `prusya` · `brandenburg-prusya` · `pfalz`
(Jülich-Berg 1685 sonrası aynı Wittelsbach hükümdarı — TEREDDUT). Atlastaki `hollanda` (1581) ≠ `hollanda-kontlugu` (922-1433).

#### ⑤ Listede olmayıp eklenen / bulunan adaylar
- **Eklenen satırlar:** `berg-buyuk-dukaligi` (1806-03-15 → ?) · `frankfurt-imparatorluk-sehri` (? → 1806) ·
  `frankfurt-buyuk-dukaligi` (1810 → ?) · `salzburg-elektorlugu` (1803 → 1805). Listedeki "Frankfurt serbest şehri"
  `frankfurt-serbest-sehri` (1815 → 1866-10-18) satırıdır.
- **Yazılmayan adaylar:** Dalberg'in Aschaffenburg-Regensburg prens-primatlığı (1803-1810) · Nassau-Usingen /
  Nassau-Weilburg / Nassau-Dillenburg (1806 öncesi) · Jülich Dukalığı (1356-1423) ve Berg Dukalığı (1380-1423) ayrı ayrı ·
  Mark Kontluğu · Ravensberg · Zeeland · Namur Kontluğu · Limburg Dukalığı (1288'de Brabant'a) · Metz/Toul/Verdun
  prens-piskoposlukları · Pfalz-Neuburg.

#### ⑥ Bitirilemeyen
- Yok (18 birimin hepsi yazıldı). Eksik kalanlar ② listesindeki f/t hücreleri; ayrıca hiçbir birimde Osmanlı ilişkisi
  bulunmadı (`harita_degisimi` hepsi HAYIR).

### EK · BALKAN

#### BALKAN — Balkan ve Ege despotlukları / senyörlükleri (1281-1923)

12 polity · 39 kronoloji satırı. Kaynak: TDV İA (birincil) + Oxford Dictionary of Byzantium (ODB, 1991; archive.org
`odb_20210521` tam metni, madde adlarıyla). Fine "Late Medieval Balkans" archive.org'da yalnız ödünç/şifreli (okunamadı);
Britannica 403 verdi (okunamadı). Vikipedi yalnız yol gösterici olarak okundu, hiçbir `kaynak`a yazılmadı.

#### ① Kaynak URL'leri (polity başına)
- dobruca-despotlugu: https://islamansiklopedisi.org.tr/dobruca · /silistre · /murad-i · ODB "DOBROTICA", "DOBRUDJA"
- serez-despotlugu: /serez · /murad-i · ODB "JOHN UGLJEŠA"
- prilep-kralligi: /pirlepe · /murad-i · ODB "MARKO KRALJEVIĆ", "VUKAŠIN", "PRILEP"
- gattilusio-midilli: /midilli · /limni · /tasoz · ODB "GATTILUSIO", "LESBOS", "LEMNOS", "THASOS"
- gattilusio-enez: /limni (Enez 860/1456) · ODB "AINOS", "KANABOUTZES"
- kefalonya-zakintos-kontlugu: /ayamavra · /narda · ODB "KEPHALENIA", "ZAKYNTHOS", "TOCCO", "ARTA"
- spata-arta-despotlugu: ODB "ARTA", "NIKEPHOROS II", "THOMAS PRELJUBOVIĆ", "EPIROS" · /narda (Spata'yı anmıyor)
- muzaka-berat: /berat--arnavutluk · /arnavutluk · ODB "KASTORIA"
- arianiti-senyorlugu: /iskender-bey · /arnavutluk
- avlonya-kanina-prensligi: /avlonya · /arnavutluk · ODB "AVLON", "JOHN UGLJEŠA"
- sakiz-mahonasi: /sakiz-adasi · ODB "CHIOS"
- lazar-sirbistani: /murad-i · /kosova · ODB "LAZAR"
- ODB tam metni: https://archive.org/details/odb_20210521

TDV slug sonuçları (GET): 200 → dobruca, serez, pirlepe, midilli, limni, tasoz, avlonya, berat--arnavutluk, sakiz-adasi,
narda, ayamavra, silistre, murad-i, kosova, arnavutluk, iskender-bey. **302 (ölü)** → enez, enez--sehir, berat, sakiz,
arta, kefalonya, kefalonya-adasi, zanta, kanina, kanine, preveze, balsa, musakiye, ivan-sisman, lazar, kosova-savasi.
TDV site araması JS ile yükleniyor, curl ile aday üretmedi.

#### ② bulunamadı (adıyla)
- muzaka-berat `f` ve kuruluş satırı; öncülü.
- arianiti-senyorlugu `f`, `t`, öncül, ardıl; isyan satırının yılı.
- dobruca-despotlugu: Balık'ın başlangıç yılı (1346 yalnız alt sınır); Ivanko'nun akıbeti/yılı.
- avlonya-kanina: 1355-1378 ve 1385-1417 hükümdar adları (Komnenos Asen, Merkša, Regina — akademik kaynakta okunamadı).
- spata-arta: Arnavutların Arta'yı alış yılı (1358/59 Nikephoros II'nin ölümünden ÇIKARIM, `onyil`).
- lazar-sirbistani: `t` için kaynaklı gün (atlas künyesi sirp-despotlugu 1402 sınır işareti olarak kullanıldı — KAYNAK DEĞİL).

#### ③ Çelişen kaynaklar ve seçim
- Midilli başlangıç: TDV 1354 · ODB 1355 (evlilik yaz 1355) → TDV.
- Avlonya düşüş: TDV 1417 · ODB "by 21 July 1418" → TDV.
- Prilep düşüş: TDV 1395 kesin katılış (Hoca Sâdeddin'e göre 784/1382 teslim de anılır) · ODB 1385 (Soulis) / 1395 (Fine) → 1395, gün ODB'den (Marko'nun ölümü, Rovine 17 Mayıs 1395).
- Taşoz Osmanlı'ya geçiş: TDV 1456 · ODB 1455 → TDV.
- Sakız düşüş: TDV 14 Nisan 1566 · ODB "1556" (dizgi hatası olmalı) → TDV.
- Berat 1417 öncesi sahibi: TDV 'Berat' "küçük bir Arnavut prensliği" (adsız) · TDV 'Arnavutluk' Balşalar → Muzaka kimliği TEREDDUT.
- Kefalonya Tocco başlangıcı: ODB 'ZAKYNTHOS' 1328 · ODB 'TOCCO' 1357 · ODB 'KEPHALENIA' "in 1357 ... definitively" → kronolojide 1357.
- Kosova günü: TDV "15 veya 28 Haziran 1389" · ODB 15 June 1389 → 15 Haziran.
- TDV 'Murad I' 1388 seferinde Dobruca hâkimini "Dobrotić" der; TDV 'Dobruca' o tarihte Ivanko'yu hâkim sayar (ODB: Dobrotica 1387'den önce öldü) — kişi adı farkı, tarih etkilenmiyor.

#### ④ KUNYE_TSV'de zaten var / çakışma
- **lazar-sirbistani:** `sirbistan-nemanjic` (1166-01-01 → 1402-01-01) bu dönemi ZATEN kapsıyor → TEREDDUT; ya künye 1371'de bölünür ya satır düşer.
- **kefalonya-zakintos-kontlugu:** `epir-despotlugu` ("Tocco dönemi dâhil", t 1430-10-01) ile 1318-37 ve 1411/16-1430 şahsî birlik. 1430-1449 Tocco Arta'sı ve 1430-1479 adalar künyede YOK — bu kimliğe bağlandı (Arta 1430 vasallık + 1449 fetih satırları burada).
- **sakiz-mahonasi:** `cenova` künyesinin iç birimi sayılabilir → TEREDDUT.
- **avlonya-kanina:** 1378-1385 `zeta` (Balšić) ile şahsî birlik.
- `dejanovic-prensligi` t'si (1395-05-17) prilep-kralligi t'siyle aynı gün (Rovine) — tutarlı.

#### ⑤ Listede olmayan EK aday
- **Tocco Arta Despotluğu / Epir artığı 1430-1449** (Carlo II Tocco, TDV 'Narda': 1430 vasal, 853/1449 Osmanlı) — ayrı kimlik istenirse kefalonya satırlarından ayrılabilir.
- **Gattilusio Foça (Palaia Phokaia)** — ODB 'GATTILUSIO' adlar ama tarih vermiyor; araştırılmadı.
- **Demetrios Palaiologos'un 1460 appanajı** (Enez, Limni, Taşoz, Semadirek — ODB 'AINOS', 'LEMNOS', 'THASOS') — Osmanlı iç tasarrufu, polity DEĞİL (ölçüt: padişahın verdiği has).
- **Lefkada/Kefalonya 1479-1500 Osmanlı arası** ve 1500 Venedik — polity değil, `venedik` künyesinin olayı.

#### ⑥ Bitirilemeyen
- Muzaka ve Arianiti'nin akademik dayanaklı varlık aralığı (Fine/Schmitt erişilemedi).
- Avlonya prensliğinin iç hükümdar kronolojisi (1355-1417).
- Dobruca'da Ivanko'nun Osmanlı tâbiliğinin yılı (TDV "bu tarihlerde", yılsız).

Hicrî hesaplar aritmetik (tabular) takvimle yapıldı, ±1 gün: 773/3/15 ≈ 1371-09-25 · 790/1 = 1388-01-10 · 791/6/19 ≈ 1389-06-14 ·
834/1 = 1430-09-18 · 853/1 = 1449-02-23 · 860/1 = 1455-12-10 · 866/12 = 1462-08-26 · 973/9/24 ≈ 1566-04-13. Betik `BALKAN-is/hicri.py`.

### EK · KAFKAS

#### KAFKAS — notlar (10 Ekim 2026)

Alıntıların hepsi indirilen metinlere karşı birebir dizgi aramasıyla doğrulandı (`KAFKAS-is/dogrula.py`: 99 parça, 0 eksik).
TDV slug'ları GET ile sınandı: 200 → karabag, seki, sirvan, gence, baku, nahcivan, talis-hanligi, derbend--dagistan,
avarlar, lekler, kumuklar, dagistan, seyh-samil, kuba--azerbaycan, kafkasya, muridizm, gurcistan.
302 (ÖLÜ ya da hiç yok) → karabag-hanligi, derbent, talis, kazikumuk, avar, kaytak, kaytaklar, ilisu, elisu, mehtuli, tarku,
tarki, samhal(503), gazi-muhammed, hamzat-bey, lenkeran, semahi, surhay-han, svanetya, tabasaran. `samil` 200 ama yalnız
yönlendirme kabuğu (2 KB) — gerçek madde `seyh-samil`. `muhammed-b-gazi` 200 ama YANLIŞ MADDE (Selçuklu âlimi, tuzak ②).

#### ① Kaynaklar (polity başına)
- karabag-hanligi — https://islamansiklopedisi.org.tr/karabag
- seki-hanligi — https://islamansiklopedisi.org.tr/seki · çelişki için Iranica ŠAKKI https://www.iranicaonline.org/articles/sakki-district/
- sirvan-hanligi-hacidavud · sirvan-hanligi — https://islamansiklopedisi.org.tr/sirvan · Iranica ŠERVĀN https://www.iranicaonline.org/articles/servan/
- gence-hanligi — https://islamansiklopedisi.org.tr/gence · (Iranica GANJA https://www.iranicaonline.org/articles/ganja/ hanlık yılı vermiyor)
- baku-hanligi — https://islamansiklopedisi.org.tr/baku · Iranica BAKU i https://www.iranicaonline.org/articles/baku-pers/baku-i-general/
- derbent-hanligi — https://islamansiklopedisi.org.tr/derbend--dagistan
- nahcivan-hanligi — https://islamansiklopedisi.org.tr/nahcivan · gün: https://islamansiklopedisi.org.tr/talis-hanligi · Iranica NAḴJAVĀN https://www.iranicaonline.org/articles/nakjavan/
- talis-hanligi — https://islamansiklopedisi.org.tr/talis-hanligi
- kazikumuk-hanligi — https://islamansiklopedisi.org.tr/lekler · Kurbanov, Известия РГПУ им. Герцена вып. 117, s. 16-24 https://lib.herzen.spb.ru/media/magazines/contents/1/117/kurbanov_117_16_24.pdf
- avar-hanligi — https://islamansiklopedisi.org.tr/avarlar · https://islamansiklopedisi.org.tr/dagistan
- kaytak-usmiligi — Murtazaev, Вестник Института ИАЭ ДНЦ РАН 2013/4 s. 14-21 https://caucasushistory.ru/2618-6772/article/download/262/251
- mehtuli-hanligi — Kurbanov (yukarıda)
- ilisu-sultanligi — Abdulmazhidov–Magomedova, История, археология и этнография Кавказа 14/2 (2018) s. 92-105 https://caucasushistory.ru/2618-6772/article/download/1437/1376 · TDV talis-hanligi
- svaneti-prensligi — KAYNAK YOK (aşağıda)
- kafkas-imamligi — https://islamansiklopedisi.org.tr/seyh-samil

#### ② `bulunamadı` listesi
- f: sirvan-hanligi (18. yy) · gence-hanligi · nahcivan-hanligi · avar-hanligi · kaytak-usmiligi · mehtuli-hanligi ·
  ilisu-sultanligi · svaneti-prensligi. (Şirvan/Gence/Nahçıvan için TDV yalnız "Nâdir Şah'ın ölümünden [1747] sonra" der —
  yıl yazılmadı; atlas bir yıl isterse 1747 YAZILMAZ, ölçülmeli.)
- t: svaneti-prensligi.
- merkez: mehtuli-hanligi, svaneti-prensligi · oncul: avar, kaytak, mehtuli, ilisu, svaneti.
- Svaneti: Britannica 403, Iranica maddesi yok, NPLG/iverieli Dadeşkeliani derlemesi Gürcüce (19. yy makaleleri) —
  okunup doğrulanamadı. Vikipedi (dayanak DEĞİL, yön): 1720'ler → 11 Eylül 1857 azil / 1858 ilga; 26 Kasım 1833 Rus himayesi.
- Hacı Dâvud'un yerine Surhay Han'ın Osmanlı'ca getirilişinin yılı: bulunamadı.

#### ③ Çelişkiler ve seçim
- Şeki t: TDV 1819 (İsmâil Han ölümü + Ermolov ilhakı) ↔ Iranica 1824 → TDV.
- Şemâhî'ye Nâdir girişi: TDV 17 Ağustos 1733 ↔ Iranica 1734 → TDV.
- Avar t: TDV AVARLAR 2 Nisan 1864 ↔ TDV DAĞISTAN 1862 ↔ Kurbanov 1863 → dar kapsamlı TDV AVARLAR.
- Kaytak t: Murtazaev 26 Ocak 1820 (usmi hanedanının iktidar hakkı kaldırıldı) ↔ Kurbanov "владения Кайтага (1866)"
  (idarî birim ilgası) → 1820 (polity = hanedan iktidarı). İki olay ayrı; 1820-1866 arası Rus askerî idaresi.
- Şamil teslimi: TDV ŞEYH ŞÂMİL 6 Eylül 1859 ↔ TDV DAĞISTAN/AVARLAR 25 Ağustos 1859 = tam 12 gün ⇒ JÜLYEN/GREGORYEN
  farkı. 🔴 Sonuç: TDV AVARLAR'ın öteki günleri (22 Şubat 1863, 2 Nisan 1864) ve Rus arşiv tarihli günler (Kaytak
  26 Ocak 1820, Kazıkumuk 16 Temmuz 1858) büyük olasılıkla JÜLYEN'dir (Gregoryen +12: 1864-04-14 · 1820-02-07 ·
  1858-07-28). CSV'ye KAYNAĞIN GÜNÜ yazıldı; takvim ÖLÇÜLEMEDİ — koordinatör karar versin.
- Derbent t: TDV 1759 sonbaharı Kuba'ya geçiş; Derbent'in 1759 sonrası ayrı hanlık sayılıp sayılmayacağı → TEREDDUT.

#### ④ KUNYE_TSV'de zaten var
- kuba-hanligi (Derbent'in ardılı olarak kullanıldı), afsar, safevi, rusya, kumuk-samhalligi.
- Kronolojide iki satır mevcut künyeye yazıldı: `kumuk-samhalligi` 1578 Osmanlı hâkimiyeti (EVET) ve 1606 sonu (EVET).

#### EK ÖLÇÜM — `kumuk-samhalligi` (künye 1578-11-01 → 1607-01-01): KÜNYE EKSİKLİĞİ, sınıf ② (aynı polity sürüyor → GENİŞLET)
- Başlangıç: TDV LEKLER "Şemhaller VIII. yüzyıldan XVI. yüzyıl sonlarına kadar yönetimlerini sürdürdüler" (şemhalin
  ortaya çıkışı TDV'ye göre "tartışmalı"). TDV KUMUKLAR: "Hazarlar’ın yıkılmasından sonra Kumuklar’ın kurduğu ilk siyasî
  birlik 'şemhallik'". ⇒ Şamhallık 1281'den ÖNCE vardı; kaynaklı kesin yıl yok (f = bulunamadı, 1281 öncesi).
- Merkez değişimi: Şemhal Çoban'ın 986/1578 ölümünden sonra merkez Tarku'ya (TDV LEKLER) / Temürhan-Şûra'ya (TDV
  KUMUKLAR) — TDV kendi içinde çelişiyor. Künyenin "1578-11-01"i büyük olasılıkla bu ölüm/Osmanlı tâbiliği anıdır, varlık başı değil.
- Ara kesinti: TDV KUMUKLAR "Ruslar şemhallerin bağımsız yönetimlerine son verdiler (1725)"; TDV LEKLER şemhalliğin Ruslarca
  kaldırılıp Nâdir Şah'ça "yeniden ihdas" edildiğini yazar; 1776'da Şemhal Murtaza Ali Rus hâkimiyetine girdi.
- Son: Kurbanov (Herzen 117): "Мехтулинское ханство и шамхальство Тарковское (1867)". TDV ŞEYH ŞÂMİL 1854'te
  "Şemhal Hanı Ebû Müslim"i anar ⇒ 1607'den 250 yıl sonra hâlâ var.
- ⇒ Künye 1607-01-01'de bitiyor, polity 1867'ye kadar sürüyor: ~260 yıllık EKSİKLİK. Künyenin kapsadığı 1578-1606 aralığı
  TDV DAĞISTAN'ın "1578-1606 Osmanlı hâkimiyeti" dilimiyle örtüşüyor — künye polity'yi değil Osmanlı tâbiliğini kodlamış görünüyor.
  1607 vs 1606 farkı da var (TDV DAĞISTAN 1606; Şâh Abbas Şemâhî'yi 1607'de aldı).

#### ⑤ Listede olmayan EK adaylar (TDV/akademik tanıklı)
- Kürin Hanlığı — TDV LEKLER: Ruslar 1812'de Kura'yı Arslan Han'a vererek "Kürin Hanlığı’nı meydana getirdi"; Kurbanov: ilga 1865.
- Tabasaran (maysumluk/kadılık) — Kurbanov: "владения Кайтага и Табасарана (1866)".
- Ereş, Kutkaşen, Gebele sultanlıkları — TDV ŞEKİ: Şeki Hanlığı'na bağlı (TEREDDUT: tâbi birim).
- Salyan Sultanlığı, Karadağ/Cevad hanlıkları — TDV TALİŞ HANLIĞI'nda komşu olarak anılır.
- Şeki Melikliği (Hasan Han / Derviş Mehmed, –1551 Safevî ilhakı) — TDV ŞEKİ; 1281-1923 penceresinde ayrı bir öncül polity.
- Gazi-Kumuk'tan ayrı "Kumuk Hanlığı" (TDV MÜRİDİZM'de "Kumuk Hanlığı’ndan Molla Han Muhammed") — kimliği belirsiz.
- Car-Balakan cemaatleri (TDV ŞEKİ: Car ve Balakanlılar) — konfederasyon adayı.

#### ⑥ Bitirilemeyen
- Svaneti (f/t yok). Mehtuli, Kaytak, İlisu, Avar kuruluş yılları. Hacı Dâvud → Surhay Han devri yılı.
- Jülyen/Gregoryen sorusu (yukarıda) ölçülmedi.

#### TEREDDUT satırları (3)
sirvan-hanligi-hacidavud · derbent-hanligi · kazikumuk-hanligi (not alanında `TEREDDUT:` ile).

### EK · KORFEZ

#### KORFEZ — Körfez şeyhlikleri ve Güney Arabistan (Aden çevresi) sultanlıkları · NOT

20 polity · 68 kronoloji satırı (13 `EVET`) · 10 Ekim 2026.

#### ① Kaynaklar (URL)
**TDV (GET ile doğrulandı, 200):** `ebuzabi` · `dubey` · `sarika` · `resulhayme` · `acman` · `ummulkayveyn` · `fuceyre`
· `birlesik-arap-emirlikleri` · `asir--suudi-arabistan` · `ebha` · `cizan` · `yemen` · `lehic` · `aden` · `hadramut`
· `huzistan` · `hazal-han` (hepsi `https://islamansiklopedisi.org.tr/<slug>`).
**TDV tuzakları:** ölü slug (302): `abu-dabi`, `abuzabi`, `asir`, `lahic`, `mehre`, `yafi`, `muhammere`, `fadli`, `avalik`,
`beyhan`, `dali`, `sokotra`, `kavasim` · **canlı ama YANLIŞ madde:** `dubai` (= DUBÂİ, kişi; doğrusu `dubey`), `idrisiler`
(= Fas İdrîsîleri 789-985), `lahc` (boş/alakasız gövde) · `abdeli` 200 ama gövde boş. Arama sayfasında `href` tırnaksız —
ilk taramada sonuç yok sanıldı; doğru ayrıştırınca `asir--suudi-arabistan`, `lehic`, `abdeli`, `ebha`, `cizan` çıktı.
**TDV dışı:**
- Aitchison, *A Collection of Treaties, Engagements and Sanads*, Vol. XI (Govt. of India, 1933) —
  https://archive.org/details/in.ernet.dli.2015.206813 (Aden ve hinterland, Sokotra/Kişn, İdrîsî, Trucial şeyhler, Muhammere).
  OCR metni; alıntılarda bariz OCR hataları düzeltildi (ör. "Fadlili"→"Fadhli"), tarih rakamları içindekiler + anlatı
  çapraz okundu. Sayfa numaraları OCR başlıklarından, ±1 olabilir.
- Aitchison, Vol. XII (1909) — https://archive.org/details/in.ernet.dli.2015.206817 (Trucial şeyhler 1806-1902).
- Encyclopaedia Britannica: "Lahij" ve "Socotra" (britannica.com 403 → web.archive.org kopyaları); EB 1911 "Aden"
  (en.wikisource.org — Wikipedia değil, EB1911 transkripsiyonu).
- Encyclopaedia Iranica, "Kazʿal Khan" (iranicaonline 403 → web.archive.org 2023 kopyası).

#### ② bulunamadı (ADIYLA)
- **f bulunamadı:** acman-seyhligi · fadli-sultanligi · yukari-avlaki-sultanligi · yukari-avlaki-seyhligi ·
  asagi-avlaki-sultanligi · asagi-yafi-sultanligi · yukari-yafi-sultanligi · muhammere-seyhligi · mehre-sultanligi ·
  beyhan-serifligi · avazil-sultanligi (11). Aitchison bu kabileleri ilk antlaşma tarihinden anlatır, kuruluş vermez.
- **merkez bulunamadı:** fadli (Şukra yalnız Vikipedi'de), asagi-avlaki, asagi-yafi, yukari-yafi.
- **ardıl bulunamadı:** Aden hinterlandı birimlerinin (Fadlî, Avlakî, Yâfi‘, Beyhân, Dâli‘, Avâzil) 1967 sonu için akademik
  kaynak açılamadı (Lahic ve Mehre için Britannica var).
- **tarih bulunamadı (kronoloji):** İdrîsî'nin Ferasan adalarını Türklerden zaptı (yalnız "Ocak 1917'den önce").
- **Muhammere f:** 1812 kuruluş adayı yalnız bir Qatar Digital Library belgesinin arama özetinde; qdl.qa 403 ⇒ okunamadı, yazılmadı.
- **TDV'de hiç maddesi olmayanlar:** Fadlî, Avlakî, Yâfi‘ (kabile), Beyhân, Dâli‘, Avâzil, Mehre/Sokotra, Muhammere
  (yalnız `hazal-han` kişi maddesi ve `huzistan`).

#### ③ Çelişkiler ve seçim
- **Lahic kuruluşu:** TDV lehic H.1141/1729 ↔ EB1911 1735 ⇒ TDV. H.1141 = 1728-08-07→1729-07-26 ∩ 1729 ⇒ 1729-01-01.
- **İdrîsî başlangıcı:** TDV yemen 1909 · TDV ebha 1910 · Aitchison 1908 (Sabyâ'ya dönüş) ⇒ 1909 (TDV, isyan başlangıcı).
- **Muhammed b. Ali el-İdrîsî'nin ölümü:** TDV asir 1922 ↔ TDV yemen + Aitchison 1923 ⇒ kronolojide 1923, çelişki satırda beyanlı.
- **Haz‘al'ın tutuklanması:** TDV 19 Nisan 1925 ↔ Iranica "night on 18 April 1925" ⇒ TDV (pencere dışı, yalnız `not`ta).
- **Lahic'in Osmanlı tahliyesi:** Aitchison "November 1918" ↔ TDV "1918 yılına kadar" ⇒ 1918-11 (ay).
- **TDV sarika** "I. Dünya Savaşı'nın başlarında Arabistan'ın bu kesimindeki hâkimiyet Osmanlı Devleti'ndeydi" der; öteki
  TDV maddeleri (ebuzabi, birlesik-arap-emirlikleri) Osmanlı'nın sahil şeyhliklerini fiilen yönetmediğini, yalnız İngiliz
  antlaşmalarını tanımadığını söyler ⇒ Trucial şeyhliklerin HİÇBİR satırı `EVET` yazılmadı. Koordinatöre: bu cümle
  atlas için bir Osmanlı `v:` iddiası DEĞİL sayıldı (öncül tartışmalı).
- **Aden 1839:** TDV lehic Aden'i "hukukî bakımdan Osmanlı Devleti'ne tâbi, fakat fiilî bakımdan Lehic sultanına bağlı" der ⇒
  1839-01-16 satırı `HAYIR` yazıldı (Osmanlı fiilî toprağı değil); atlas Aden'i 1839'da Osmanlı sayıyorsa yeniden bakılmalı.
- **Fadlî 1915:** sultan Lahic'te Türklerle anlaşma imzaladı (Aitchison) — Osmanlı birliğinin Fadlî ülkesine girdiği
  kaynakta yok ⇒ `HAYIR`; `v:` adayı olarak koordinatörün hükmüne.

#### ④ KUNYE_TSV'de zaten var olanlar (yazılmadı)
`umman` · `kuveyt` · `sabah-emirligi` · `bahreyn` · `katar` · `sani-emirligi` · `kesiri-sultanligi` · `kuayti-sultanligi` ·
`yemen-zeydi` · `aiz` · `mekke-serifligi` · `suud-*` · `sammar`. Çakışma uyarısı: `idrisi` = Fas İdrîsîleri ⇒ Asîr için
`asir-idrisi-emirligi`; `dali-kralligi` = Yunnan ⇒ Dâli‘ için `dali-emirligi`.
**Kuaytî notu (yazılmadı, mevcut künyeye):** TDV hadramut: 1915'te Hadramut şeyhleri Osmanlı'ya bağlılık bildirdi,
"Kuaytîler'in idaresinde bulunan Şibâm ile Şihr 1919 yılına kadar Osmanlı hâkimiyetinde kaldı" — `kuayti-sultanligi`
için `EVET` adayı. Ayrıca TDV hadramut: Ağustos 1867 Osmanlı Şihr'e savaş gemisi gönderip Hadramut'u Osmanlı toprağı ilan etti.

#### ⑤ Listede olmayıp bulunan EK adaylar (Aitchison 1933, hepsi ayrı İngiliz antlaşmalı)
Subeyhî · Akrabî (1839, 1888 himaye) · İrka (1888) · Aşağı Havra (1888) · Havşebî · Alevî · Vâhidî (Balhâf, Bîr Ali; 1895-96) ·
Kutaybî şeyhliği (Dâli‘ altında) · Kelbâ (Şârika bağımlısı; TDV fuceyre: 1936'da İngilizler bağımsızlığını destekledi) · Udeyd (TDV ebuzabi: Osmanlı'ya bağlı kalan şeyhlik) · Benî Kâ‘b
(Fellâhiye) şeyhliği (Muhammere öncülü).

#### ⑥ Bitirilemeyen
- Aden hinterlandı birimlerinin kuruluş tarihleri (Encyclopaedia of Islam maddeleri — Faḍlī, ʿAwlaḳī, Yāfiʿ, Bayḥān,
  Ḍāliʿ, ʿAwdhalī, Mahra — ücretli, açılamadı).
- Re'sülhayme 1900-1921 arası Şârika'ya bağlılığı polity satırında TEK pencere olarak bırakıldı; atlasta iki pencere
  (1869-1900, 1921-) ya da `kavasim-seyhligi` içine geçiş gerekebilir — koordinatör kararı.
- Füceyre: 1901 bağımsızlık beyanı tanınmadı (resmî tanınma 1952) — TEREDDUT; atlas 1923'e kadar Şârika gövdesinde tutabilir.

### EK · HINT

#### HINT — Hint alt kıtası küçük birimleri · NOT

#### ① Kaynak URL'leri
TDV slug'larının durumu `curl` ile ölçüldü. **200 dönenler (canlı):** `belucistan` · `hayrpur` · `rampur` · `maldivler` · `hafiz-rahmet-han` · `amritsar` · `sind` · `pencap` · `sih-dini` · `lahor`.
**302 dönenler (ölü):** `kalat` · `kelat` · `tonk` · `rohillalar` · `ruhillalar` · `rohilkand` · `maldiv` · `kuc` · `kutch` · `patiyala` · `talpur` · `talpurlar`, ayrıca ~25 türev deneme.
TDV arama sayfası (`/arama/?q=`) sonuçları JS/ajax ile yüklüyor. Curl ile aday üretmedi, bu yüzden arama işe yaramadı ve adaylar slug denemesiyle tarandı.
Britannica `curl`'e de WebFetch'e de 403 döndü ve kullanılamadı. Hindu/Sih prenslikleri için kaynak olarak Imperial Gazetteer of India (1908, DSAL) kullanıldı; sayfa görselleri tek tek okundu.
IGI sayfa görseli: `https://dsal.uchicago.edu/reference/gazetteer/images/DS405.1.I34_V<cilt>_<obje>.gif`. Okunan sayfalar:

| Polity | Kaynak |
|---|---|
| kalat-hanligi | TDV https://islamansiklopedisi.org.tr/belucistan · IGI v.6 s.277 (V06_283), s.279 (V06_285), s.278 arama parçası |
| hayrpur-emirligi, mirpur-talpur | TDV https://islamansiklopedisi.org.tr/hayrpur |
| rohilkand-nevvabligi | TDV https://islamansiklopedisi.org.tr/rampur · https://islamansiklopedisi.org.tr/hafiz-rahmet-han · IGI v.21 s.307-308 (V21_313/314) |
| rampur-nevvabligi | TDV rampur · IGI v.7 s.5 arama parçası · IGI v.21 s.308 |
| tonk-nevvabligi | IGI v.23 s.409 (V23_415) |
| patiyala, nabha, jind | IGI v.20 s.34-36 (V20_040/041/042), s.134-135 (V20_140/141) |
| kapurthala | IGI v.14 s.409 (V14_415) |
| sih-misilleri | TDV https://islamansiklopedisi.org.tr/amritsar · IGI v.5 s.321 arama parçası |
| maldiv-sultanligi | TDV https://islamansiklopedisi.org.tr/maldivler |
| kutch-racligi | IGI v.11 s.78-79 (V11_084/085) |

#### ② bulunamadı
- Ardılı bulunamayanlar: kalat · hayrpur · rampur · tonk · patiyala · nabha · jind · kapurthala · maldiv · kutch. Hepsi 1923'ten sonra da sürüyor. 1947 sonrası ardıl kaynakla doğrulanmadı.
- mirpur-talpur kolunun ayrılış yılı bulunamadı. f=1783 yazıldı; bu, Tâlpûr hâkimiyetinin başladığı yıldır.
- Kalat 1876 antlaşmasının cümlesi IGI aramasının bir parçasında çıktı. Cilt ve sayfası bulunamadı.
- Kalat 1839 baskınının ve Kutch'ta Bhuj'un alınışının günü/yılı kaynakta yok. 1839 için yalnız yıl yazıldı. Kutch satırı 1818 başvuru yılıyla yazıldı.
- Tonk antlaşmasının günü yok (yalnız "November, 1817").
- TDV'de Kalat, Tonk, Rohilla, Kutch, Patiyala ve Maldiv için ayrı madde bulunamadı. Arama işlevi curl'de çalışmadığı için bu "yok" hükmü kesin değildir.

#### ③ Çelişkiler ve seçimler
- **Râmpûr'un kuruluşu:** TDV 1737 der (Ali Muhammed Han'ın nevvâb unvanı) ve Rohilla nevvâblığını Râmpûr'un başlangıcı sayar. IGI'ye göre ise Râmpûr, 1774'te Feyzullah Han'a bırakılan dokuz pargana ile doğar. Seçimim: **iki ayrı polity** — rohilkand-nevvabligi 1737–Nisan 1774 ve rampur-nevvabligi 1774–. f=1737'nin dayanağı TDV'dir.
- **Patiyâla:** IGI'ye göre "nominal olarak 1762, daha doğrusu 1763" (Sirhind'in alınışı). IGI'nin tercihi olan 1763 yazıldı.
- **Maldiv'in İslâmlaşması:** TDV, Kādî Hasan Tâceddin'e dayanarak 7 Temmuz 1153 (Şeyh Yûsuf et-Tebrîzî) der; İbn Battûta ise Ebü'l-Berekât el-Berberî'yi anar. TDV'nin günü yazıldı. Gün TDV'nin çevirisidir ve Jülyen takvimindedir; benim hesabımla aynı gün Gregoryen'de 1153-07-14'tür.
- **Hicrî yıl hesapları** (tablo usulü; 1582 öncesi Jülyen, TDV gibi):
  - H.965 = 1557-10-24 → 1558-10-13; kaynak 1558 diyor ⇒ 1558-01-01.
  - H.981 = 1573-05-03 → 1574-04-22; kaynak 1573 ⇒ 1573-05-03.
  - H.1166 = 1752-11-08 → 1753-10-28; kaynak "1752-53" ⇒ 1752-11-08.
  - H.1162 için TDV günü kendisi veriyor: 16.09.1749.
  - Hesap için `parca/HINT-is/` altındaki satır içi betik kullanıldı.
- **Kutch:** IGI'ye göre Câdeca hâkimiyeti 1320'de başlar, ama tek devlet olarak "about 1540"ta kurulur. f=1540 yazıldı (onyil).
- **Tür eşlemesi:** nevvâblık → `emirlik` · Tâlpûr mirliği → `emirlik` · raca/rao → `prenslik`.

#### ④ KUNYE_TSV'de zaten var
Listedeki adlardan hiçbiri künyede yok (id ve ad grep'iyle kontrol edildi). Önerilen 13 id hiçbir mevcut id ile çakışmıyor. Öncül/ardıl alanlarında kullanılan id'lerin hepsi künyede var: babur-imparatorlugu · afgan-durrani · avad · indor · sind · sih-imparatorlugu · ingiliz-hindistani.
mirpur-talpur'un `sind` künyesiyle örtüşme ihtimali var; satır TEREDDUT ile işaretlendi.

#### ⑤ Ek adaylar (yazılmadı)
- **Las Bela** ve **Khârân**: Kalat'a bağlı. IGI v.15 s.248'e göre Khârân 19. yüzyıl ortasında Afganistan'a kaydı.
- **Mekrân** (Gichkî): IGI v.17 s.47.
- **Maler Kotla Nevvâblığı**: Müslüman; IGI v.15'te 1732 ve 1761 geçiyor.
- **Ferîdkot** · **Kaithal** (Bhai'ler) · **Kalsia** (Kroria misl'i; IGI v.14 s.320).
- **Ferruhâbâd Bengaş Nevvâblığı** ve **Necîbâbâd** (Necîb Han, 1755): TDV 'Hâfız Rahmet Han' maddesinde ve IGI v.21 s.307'de geçiyor.

#### ⑥ Bitirilemeyen
- Sind'in Haydarâbâd (Şahdâdpûr) Tâlpûr kolu ayrı yazılmadı, çünkü `sind` künyesinin kapsadığını varsaydım. Bu varsayım koordinatörün kararına kalıyor.
- Sih misilleri yalnız tek konfederasyon olarak yazıldı; on iki misl ayrı ayrı çıkarılmadı.

### EK · GDASYA (ikinci tur)

#### GDASYA — Malay yarımadası + Endonezya sultanlık/racalıkları (1281-1923) — NOT

20 polity · 54 kronoloji satırı · `harita_degisimi` hepsi HAYIR (hiçbiri Osmanlı `d:`/`v:` toprağına dokunmuyor).

#### ① Kaynak URL'leri (polity başına)

**TDV (birincil) — doğrulanan slug'lar (GET 200):** `malezya`, `endonezya`, `tayland`, `raca-ali-haci`, `alaeddin-tumenanga`, `sumatra`, `borneo`, `demak`, `sambasi`, `muhammed-besyuni`, `kuala-lumpur`, `cava`, `malaka`.
**Ölü (302):** kedah, perak, pahang, selangor, trengganu, terengganu, kelantan, siak, siyak, riau, cambi, bima, buton, cirebon, sambas, bulungan, lombok, negeri-sembilan, perlis, lingga, mataram, johor, cohor, makassar, bugi(ler), sulavesi, selebes, kalimantan.
**Canlı ama YANLIŞ madde (tuzak ②):** `patani` → "bk. TAYLAND" (gerçek bilgi TAYLAND maddesinde) · `deli` → "bk. CÜNÛN" · `bone` → "bk. BÛNE" (Cezayir).
Arama (`/arama/?q=…&p=t`): hiçbirinin kendi maddesi yok; geçtikleri maddeler MALEZYA, ENDONEZYA, TAYLAND, SUMATRA, RACA ALİ HACI vb.

| polity | kaynaklar |
|---|---|
| kedah-sultanligi | ejurnal.psm.org.my/index.php/Malaysia-dari-segi-Sejarah/article/download/40/37/114 · thesiamsociety.org/wp-content/uploads/1971/03/JSS_059_1g_SharomAhmat_KedahSiamRelations.pdf · journals.iium.edu.my/irkh/index.php/ijrcs/article/download/408/282/2817 |
| perak-sultanligi | TDV malezya · PSM (yukarıda) · en.wikisource.org/wiki/1911_Encyclopædia_Britannica/Malay_States_(British) |
| pahang-sultanligi | journal.ump.edu.my/index.php/ijhtc/article/download/13625/4025/61866 · EB1911 Malay States (British) · TDV malezya |
| selangor-sultanligi | ejurnal.psm.org.my/…/article/download/24/21/66 · PSM art. 40 · IIUM · TDV malezya |
| terengganu-sultanligi | journal.unisza.edu.my/jimk/index.php/jimk/article/download/19/18/83 · IIUM |
| kelantan-sultanligi | ajba.um.edu.my/index.php/JAT/article/download/45447/17727 · IIUM |
| patani-sultanligi | TDV tayland · IIUM · EB1911 Malay States (Siamese) |
| negeri-sembilan | EB1911 Malay States (British) · TDV malezya |
| siak-sultanligi | jom.unri.ac.id/index.php/JOMFKIP/article/download/12944/12586 |
| riau-lingga-sultanligi | TDV malezya · TDV raca-ali-haci · biblioasia.nlb.gov.sg/vol-17/issue-4/jan-to-mar-2022/pulau-lingga |
| cambi-sultanligi | e-journal.lp2m.uinjambi.ac.id/ojp/index.php/malay/article/download/1428/705/5335 · ejournal.uin-suka.ac.id/adab/thaqafiyyat/article/download/2254/973/5188 |
| deli-sultanligi | jurnal.uinsu.ac.id/index.php/attazakki/article/download/13491/5929 · jurnaltarbiyah.uinsu.ac.id/index.php/tazkiya/article/download/146/126 |
| bima-sultanligi | ejournal.iainkendari.ac.id/index.php/zawiyah/article/download/1372/1096 · TDV alaeddin-tumenanga |
| buton-sultanligi | ojs.unm.ac.id/Attoriolong/article/download/23912/… · TDV alaeddin-tumenanga |
| bone-kralligi | journal.unhas.ac.id/index.php/jlb/article/download/3047/1599 · TDV alaeddin-tumenanga |
| cirebon-sultanligi | ejournal.brin.go.id/panalungtik/article/download/14363/11084/41859 · syekhnurjati.ac.id/jurnal/index.php/tamaddun/article/download/938/688 |
| sambas-sultanligi | journal.walisongo.ac.id/index.php/walisongo/article/download/161/142 · jurnaliainpontianak.or.id/…/khatulistiwa/article/download/244/198 · TDV muhammed-besyuni |
| bulungan-sultanligi | jurnal.arsitektur.uniba-bpn.ac.id/index.php/Display/article/download/16/21/115 (**AÇILAMADI** — bkz. ⑥) |
| lombok-mataram-kralligi | en.wikisource.org/wiki/1911_Encyclopædia_Britannica/Lombok |
| perlis-racaligi | spaj.ukm.my/ajehh/index.php/ajehh/article/download/263/314 · JSS (Sharom Ahmat) · EB1911 Malay States (Siamese) |

Britannica online: 403 (her sayfa) → 1911 baskısı Wikisource metni kullanıldı (adıyla).

#### ② bulunamadı
- **negeri-sembilan `f`**: geleneksel 1773 (Raja Melewar) yalnız Vikipedi/basında; akademik metinde yıl bulunamadı; EB1911 yalnız "18. yüzyılın sonları".
- Riau-Lingga: 1824 antlaşmasının GÜNÜ (17 Mart) kaynakta yok → yıl yazıldı.
- Cirebon kurucusu Pangeran Cakrabuana'nın kuruluş yılı: akademik metinde yok.
- Lombok'ta Bali fethinin yılı (1740 / "19. yy başı"): akademik metin açılamadı.
- Bulungan'ın 1777 sultanlık iddiası: hiçbir kaynakta yok.

#### ③ Çelişen kaynaklar ve seçim
- **Terengganu f:** 1708 (UniSZA; Tuhfat al-Nafis) ↔ 1722/1724/1725 (Vikipedi vb.). 1708 seçildi.
- **Kelantan f:** 1776 (Al-Tamaddun, UM) ↔ 1763/1764 (Vikipedi, royalark). 1776 seçildi.
- **Riau-Lingga t:** TDV 1913 (sultanlık kaldırıldı) ↔ NLB 1911 (sultan tahttan indirildi). TDV esas (t=1913); 1911 ayrı kronoloji maddesi.
- **Buton f:** 1540 (Attoriolong, okundu) ↔ 1542 = 948 H (JMB LIPI; sunucu çözümlenmedi) ↔ 1541 (J. Pengajian Melayu). 948 H = 1541-04-27→1542-04-16 (tabular). Okunabilen 1540 yazıldı.
- **Sambas f:** 10 Zilhicce 1040 = 1631-07-10 (Salsilah, Walisongo) ↔ 1630 (Khatulistiwa) ↔ 1612/1622 ↔ 1675 (Vikipedi). Gün veren hicrî tarih esas; dönüşüm tabular, ±1-2 gün.
- **Pahang:** aynı makale hem 1470 hem "sejak tahun 1475" diyor; tahta çıkış cümlesi (1470) esas.
- **Jambi t:** 1901/1903/1904/1906 — resmî kaldırılış 1906 (Thaqafiyyat).
- **Deli bağımsızlık:** 1814 (Vikipedi) ↔ 1861 (Tazkiya). Kronolojiye 1861 yazıldı.
- **Patani f:** TDV "tahminen 1457" (hanedanın İslâm'a girişi) ↔ EB1911 "16. yy". TDV esas, kesinlik onyil.
- **Lombok t gün:** EB "Temmuz 1894 seferi … Eylül'de ikinci sefer"; Cakranegara'nın 19 Kasım 1894 düşüşü yalnız akademik olmayan kaynakta → yıl yazıldı.
- **Perlis:** JSS ayrılışın 1842 öncesi olduğunu söylüyor (Tengku Hüseyin idaresinde ayrı birim); racalık 1843 (SPAJ).

#### ④ KUNYE_TSV'de zaten var / toplu künye çakışması
Tekil olarak hiçbiri yok (20 `kimlik_onerisi` TSV'de çakışmıyor). Toplu künye çakışmaları (`not`ta TEREDDUT):
`malay-sultanliklari` → kedah, perak, pahang, selangor, terengganu, patani · `dogu-sumatra-sultanliklari` → siak, cambi, deli · `bugis-kralliklari` → bone · `bali-kralliklari` → lombok-mataram · `cohor-sultanligi` (Johor-Riau) ↔ riau-lingga.
Not: `malay-sultanliklari` künyesi 1909-07-10'da bitiyor; Kedah/Perak/Pahang/Selangor/Terengganu 1923 sonrası sürüyor — künye penceresi tekil birimlerle uyuşmuyor.

#### ⑤ Listede olmayıp bulunan ek adaylar
Kubang Pasu (Kedah'tan 1839-1864 ayrı birim, JSS) · Setul/Satun (EB1911) · Patani'nin 19. yy başında ayrılan yedi devleti (Nawng Chik, Jering, Yala, Sai, Raman, Ra-ngé; EB1911) · Sungei Ujong, Jelebu, Rembau (Negeri Sembilan luak'ları, EB1911) · Langkat, Serdang (Deli komşusu, At-Tazakki) · Indragiri, Kampar (TDV malezya) · Dompu, Sumbawa (TDV alaeddin-tumenanga) · Soppeng, Wajo (Bugis; toplu künye içinde) · Sukadana, Bancermasin (TDV borneo) · Kasepuhan/Kanoman/Kacirebonan (Cirebon'un 1677 bölünmesi) · Pagesangan, Pagutan, Karangasem-Lombok (Lombok'taki 1839 öncesi Bali devletleri).

#### ⑥ Bitirilemeyen / zayıf kalan
- **bulungan-sultanligi:** kaynağın tam metni açılamadı (502/403); alıntı arama özetinden — ölçtürülmeli.
- **siak-sultanligi:** yalnız üniversite öğrenci makalesi (JOM UNRI); daha güçlü akademik kaynak (Lentera UNRI) sunucu hatası verdi.
- **riau-lingga 1911 alıntısı:** NLB sayfasından WebFetch özetiyle alındı (ham metin değil).
- Buton için JMB LIPI (jmb.lipi.go.id) alan adı çözümlenmedi.
- Geçici dosyalar: `GDASYA-is/` (html/, pdf/, yaz.py, hicri.py, ext.py, kwic.py, bas.py).

### EK · BATI-AFRIKA (ikinci tur)

#### BATI-AFRIKA — NOT (KAMP-KUCUK-BIRIMLER)

32 polity · 47 kronoloji satırı · `harita_degisimi` hepsi HAYIR. Betik: `BATI-AFRIKA-is/yaz.py`.

#### 0. Kaynak erişimi — OKUYAN BİLSİN
- **TDV** (GET ile doğrulandı, 200): `kano`, `sokoto`, `hevsa`, `fulaniler`, `nijerya`, `ibn-fudi`, `osman-b-fudi`,
  `muhammed-bello`, `el-hac-omer`, `benin`, `gana`, `mali`, `bornu`, `kamerun`. `porto-novo` canlı ama yalnız
  "bk. BENİN" yönlendirmesi (boş gövde, tuzak ③).
- **TDV ölü slug (302)**: katsina · zazzau · zarya · zaria · gobir · kebbi · zamfara · daura · ilorin · nupe · gwandu ·
  gandu · bauchi · gombe · kaarta · mandara · hausalar · bida · fante · akwamu · denkyira · egba · abeokuta · ijebu ·
  allada · calabar · bonny. Arama (`?q=…&p=m/t`) bu adlar için ayrı madde vermedi; yalnız kapsayıcı maddelerde geçiyorlar.
  "mandara" araması 0 ilgili isabet.
- **Britannica (britannica.com)**: hem `urllib` hem WebFetch **HTTP 403**. Metin **arama motoru (WebSearch,
  allowed_domains=britannica.com) alıntılarıyla** okundu. `kaynak` alanında `[Britannica: … arama motoru alıntısıyla
  okundu]` damgası olan her satır budur. Alıntılar arama özetinden geldiği için **birebirliği sayfa açılarak
  doğrulanmadı** — koordinatör isterse bu satırlar `ÖLÇÜLEMEDİ` kovasına alınabilir. Okunan maddeler:
  Hausa-states · Katsina (historical kingdom and emirate) · Suleja · Daura · Kaura-Namoda · Birnin-Kebbi · Gwandu ·
  Gobir · Usman-dan-Fodio · Ilorin · Bida · Tsoede · Bauchi · Gombe-emirate · Akwamu · Denkyera · Ashanti-Empire (students) ·
  Fante-confederacy · Ghana (Contact-with-Europe) · Sodeke · Abeokuta (summary) · Ijebu-Ode · Epe · history-of-Benin ·
  Agaja · Jubo-Jubogha · Ikot-Abasi · kingdom-of-Bonny · Calabar · Efik · Bambara-states · Kano summary.
- **EB1911 (Wikisource, `action=render`, doğrudan okundu)**: Katsena · Kano · Zaria · Gando · Nupe · Bida · Bauchi ·
  Sokoto · Hausa · Gold Coast · Ashanti · Fanti. URL kalıbı
  `https://en.wikisource.org/wiki/1911_Encyclopædia_Britannica/<Madde>`.
- **Mandara**: Barkindo, *The Sultanate of Mandara to 1902* (Steiner 1989) — yalnız katalog/başlık
  (https://cir.nii.ac.jp/crid/1130000793934867072). mandaras.info okundu ama yazar/kurum belirsiz ⇒ dayanak yapılmadı.
- Vikipedi hiçbir satırda dayanak değil.

#### ① Polity → kaynak URL
| polity | kaynak |
|---|---|
| kano-hausa-kralligi, kano-emirligi | TDV kano, hevsa · EB1911 Kano |
| katsina-hausa-kralligi, katsina-emirligi | TDV hevsa · Britannica Katsina · EB1911 Katsena |
| zazzau-hausa-kralligi, zazzau-emirligi, abuja-emirligi | TDV hevsa, osman-b-fudi · Britannica Suleja · EB1911 Zaria |
| gobir-kralligi | TDV hevsa, sokoto, fulaniler · Britannica Usman dan Fodio |
| daura-hausa-kralligi, daura-emirligi | Britannica Daura |
| kebbi-kralligi | Britannica Birnin Kebbi / Gwandu · TDV sokoto |
| zamfara-kralligi | Britannica Kaura Namoda |
| gwandu-emirligi | TDV ibn-fudi · EB1911 Gando · Britannica Gwandu |
| ilorin-emirligi | Britannica Ilorin · TDV nijerya |
| nupe-kralligi, nupe-emirligi | Britannica Bida, Tsoede · EB1911 Nupe, Bida |
| bauchi-emirligi | EB1911 Bauchi · Britannica Bauchi |
| gombe-emirligi | Britannica Gombe · TDV sokoto |
| kaarta-kralligi | TDV el-hac-omer · Britannica Bambara states |
| mandara-sultanligi | Barkindo 1989 (başlık) |
| fante-konfederasyonu | Britannica Fante confederacy, Ghana · EB1911 Gold Coast |
| akwamu-kralligi, akyem-kralligi | Britannica Akwamu · TDV gana |
| denkyira-kralligi | Britannica Denkyera, Ashanti Empire · EB1911 Ashanti |
| egba-abeokuta | Britannica Sodeke, Abeokuta |
| ijebu-kralligi | Britannica Ijebu-Ode, Epe |
| porto-novo-kralligi, allada-kralligi, whydah-kralligi | TDV benin · Britannica history-of-Benin, Agaja |
| bonny-kralligi, opobo-kralligi, eski-kalabar | Britannica kingdom-of-Bonny, Jubo-Jubogha, Ikot-Abasi, Calabar, Efik |

#### ② bulunamadı (ADIYLA)
- **f yok (yalnız yüzyıl/efsane)**: kano-hausa (TDV "X. yy" · Br. "early 12th c."), katsina-hausa ("10th or 11th c."),
  zazzau-hausa, gobir, daura-hausa, zamfara, mandara, fante ("late 17th c."), denkyira ("17th c."), akyem, ijebu
  ("by the 16th c."), porto-novo, allada, whydah ("by the 1680s" bağımsız), bonny ("15th c."), eski-kalabar ("17th c. ilk yarısı").
- **t yok**: abuja-emirligi, kebbi-kralligi (Argungu, İngiliz egemenliği tarihi), gombe-emirligi, akyem, bonny.
- **merkez yok**: akyem. **oncul yok**: çoğu yerli krallık (yazıldı).
- **kronolojisiz**: akyem-kralligi, bonny-kralligi (tarihli olay bulunamadı).

#### ③ Çelişkiler ve seçim
- **Katsina düşüşü**: TDV HEVSÂ 1804 ↔ Britannica 1806 ↔ EB1911 "beginning of 19th c." → TDV (kural), 1804; beyanlı.
- **Zaria düşüşü**: TDV HEVSÂ 1804 + Britannica Suleja "about 1804" ↔ TDV OSMAN b. FÛDÎ 1806 → 1804; beyanlı.
  (İki TDV maddesi kendi arasında çelişiyor — koordinatör `ÖLÇÜLEMEDİ` sayabilir.)
- **Gwandu kuruluşu**: TDV İBN FÛDÎ 1812 ↔ Britannica 1809 ↔ EB1911 c.1819 → TDV 1812.
- **Bida/Nupe Fulani yönetimi**: Britannica c.1806 fetih ↔ EB1911 "Fula rule established about 1859" (Bida'nın
  kuruluşu) → emirlik f c.1806, Bida 1859 kronolojide.
- **Bauchi**: Britannica emirlik "1800–10", şehir 1809 ↔ EB1911 1809 → 1809 (yıl, beyanlı).
- **Gobir zaptı**: Britannica Ekim 1808 ↔ TDV FÛLÂNÎLER "1806-1808 arasında" → Ekim 1808 (TDV SOKOTO da 1808).
- **Opobo**: 1869 değil 1870 (Britannica).

#### ④ KUNYE_TSV'de ZATEN VAR
- **Kaarta** → `bambara` (Segu ve Kaarta, 1650-1861) içinde. Yine de `kaarta-kralligi` yazıldı, TEREDDUT ile.
- Toplu künyelerle çakışanlar (TEREDDUT damgalı): Hausa krallıkları ↔ `hausa-sehir-devletleri`; emirlikler ↔ `sokoto`;
  Bonny / Opobo / Eski Kalabar ↔ `nijer-deltasi`.
- Ardıl olarak kullanılan mevcut id'ler: `sokoto`, `ingiliz-nijerya`, `ingiliz-altin-kiyisi`, `fransiz-bati-afrika`,
  `dahomey`, `asanti`, `tekrur`, `oyo-imparatorlugu`. Alman Kamerunu künyesi YOK.

#### ⑤ Listede olmayan EK aday
- `abuja-emirligi` (yazıldı; 1828, Zazzau Habe ardılı, Sokoto'ya bağlı DEĞİL).
- **Maradi (Katsina Habe ardılı)** — Britannica yalnız "proclaimed a Hausa Katsina chiefdom" der, yıl yok → yazılmadı.
- **Gobir-Tsibiri** (Gobir hanedanının devamı) — kaynakla doğrulanamadı → yazılmadı.
- **Daura-Zango / Daura-Baure** (Habe rakip krallıkları) — yıl yok → yazılmadı.
- **Kontagora Emirliği** (TDV SOKOTO: Ömer Nagvamatse kurdu, 1876'ya dek) · **Keffi** (c.1800, Zaria'ya bağlı) · **Lapai** (1825) ·
  **Jemaa** (c.1810) · **Hadejia** · **Katagum** · **Muri** — Sokoto'ya bağlı başka emirlikler; yazılmadı.
- **Akwapim**, **Assin**, **Wassaw** (Akan devletleri) — kaynak okunmadı.

#### ⑥ Bitiremediğim
- Britannica satırlarının birebir alıntı doğrulaması (403 yüzünden).
- Mandara için gerçek metinli akademik kaynak (Barkindo'nun yalnız başlığı).
- Akyem ve Bonny'nin f/t'si; Kebbi (Argungu), Gombe, Abuja'nın İngiliz egemenliğine geçiş tarihi.
- Hiçbir satırda hicrî tarih kullanılmadı (hesap gerekmedi).

### EK · KD-AFRIKA (ikinci tur)

#### KD-AFRIKA — Kuzey Afrika (Mağrib) + Doğu Afrika / Afrika Boynuzu eksik birimler — NOT

20 polity · 65 kronoloji satırı (9'u `harita_degisimi=EVET`) · 17 TEREDDUT · f ve t'si ikisi de kaynaklı: 6.
Tarama 11 Ekim 2026. TDV slug'ları `GET` ile, yönlendirme izlenmeden doğrulandı (302 = ölü).

#### ① Kaynak URL'leri (polity başına)
| polity | kaynak |
|---|---|
| vattasiler | https://islamansiklopedisi.org.tr/vattasiler · https://islamansiklopedisi.org.tr/fas (1554 Osmanlı dönemi) |
| tuggurt-emirligi | https://islamansiklopedisi.org.tr/mizab (1552) · https://www.treccani.it/enciclopedia/touggourt_(Enciclopedia-Italiana)/ (1854) · EB 1911 "Tuggurt" (Wikisource; tarih yok) |
| kuko-emirligi · beni-abbas-emirligi | https://islamansiklopedisi.org.tr/kabiliye · https://islamansiklopedisi.org.tr/cezayir · https://islamansiklopedisi.org.tr/barbaros-hayreddin-pasa |
| harar-emirligi | https://islamansiklopedisi.org.tr/harar · EB 1911 "Harrar" (Wikisource) |
| aussa-sultanligi | https://islamansiklopedisi.org.tr/harar · https://islamansiklopedisi.org.tr/etiyopya · EB 1911 "Abyssinia" · https://www.treccani.it/enciclopedia/dancalia_(Enciclopedia-Italiana)/ |
| geledi · hobyo · mecertin · ecuran | https://islamansiklopedisi.org.tr/somali · https://www.treccani.it/enciclopedia/somalia_(Enciclopedia-Italiana)/ · .../obbia_(Enciclopedia-Italiana)/ · .../migiurtinia_(Enciclopedia-Italiana)/ · EB 1911 "Somaliland" |
| pate-sultanligi | https://islamansiklopedisi.org.tr/afrika · .../zengibar · .../kilve · EB 1911 "Witu" |
| mombasa-mezrui | https://islamansiklopedisi.org.tr/mombasa · .../kenya · EB 1911 "Mombasa", "Zanzibar" |
| kilve-sultanligi | https://islamansiklopedisi.org.tr/kilve · EB 1911 "Kilwa" |
| lamu-sultanligi | https://islamansiklopedisi.org.tr/kenya · .../mombasa |
| witu-sultanligi | EB 1911 "Witu", "British East Africa" |
| anjuan · ngazidja | https://islamansiklopedisi.org.tr/komor-adalari · EB 1911 "Comoro Islands" |
| soa-kralligi | EB 1911 "Shoa" · https://www.treccani.it/enciclopedia/scioa_(Enciclopedia-Italiana)/ |
| gojjam-kralligi | https://www.treccani.it/enciclopedia/goggiam_(Enciclopedia-Italiana)/ · EB 1911 "Abyssinia" |
| tigray-rasligi | EB 1911 "Abyssinia" · https://www.treccani.it/enciclopedia/tigre_(Enciclopedia-Italiana)/ |

EB 1911 metinleri `https://en.wikisource.org/wiki/1911_Encyclopædia_Britannica/<Madde>` (API ile). britannica.com bütün
sayfalarda **403** verdi → kullanılamadı. Vikipedi hiçbir satırda dayanak değil.

**TDV ölü slug'lar (302):** tuggurt · benicellab · beni-cellab · tugurt · kuko · kuku · beni-abbas · ait-abbas · aussa · avsa ·
afar · geledi · hobyo · hobya · obbia · mecertin · mecertayn · ecuran · acuran · pate · pata · lamu · witu · vitu · komor ·
ferhat · tigre · gojam · amhara · adal · mekdisu · berbere · salih-reis · vergile. Arama (`/arama/?q=`, `p=m`/`p=t`) bu adlar
için madde ADAYI üretmedi (yalnız `somali`, `mezrui`, `sevahili`, `kenya`). **Not:** `mezrui` canlı ama **yanlış madde**
(Ali el-Mezrûî, 1933 doğumlu siyaset bilimci — TDV tuzağı ②); Mezrûî hanedanı `mombasa` maddesinden okundu.
`habesistan` canlı ama 2.317 karakterlik yönlendirme gövdesi (tuzak ③), asıl metin `etiyopya`.

#### ② `bulunamadı` listesi (adıyla)
- **f bulunamadı:** tuggurt-emirligi (Benî Cellâb kuruluşu) · kuko-emirligi · beni-abbas-emirligi · aussa-sultanligi (taşınma yılı,
  çelişkili) · geledi-sultanligi · mecertin-sultanligi (yalnız "XIX. yüzyıl") · ecuran-sultanligi (yalnız "XV. yy civarı") ·
  pate-sultanligi (XII/XIII. yy çelişik) · lamu-sultanligi · anjuan-sultanligi · ngazidja-sultanliklari (yalnız 1530-1550 aralığı) ·
  gojjam-kralligi · tigray-rasligi.
- **t bulunamadı:** kuko-emirligi · beni-abbas-emirligi · ecuran-sultanligi · witu-sultanligi (EB 1911'de hâlâ var) · gojjam-kralligi.
- **oncul/ardil bulunamadı:** çeşitli (CSV'de hücre hücre). Künyesi olmayan ardıllar: İtalyan Somalisi, Alman Doğu Afrikası,
  İngiliz Doğu Afrika himayesi (künye var ama 1895: `ingiliz-kenya-kolonisi`), Fransız Komorları — **künye yok**, bu yüzden
  "bulunamadı" yazıldı (ad yazmak yerine).
- Kronolojide `tarih=bulunamadı` olan 13 doğuş/yıkılış satırı var (metinde yüzyıl bilgisi varsa yazıldı).

#### ③ Çelişen kaynaklar ve seçim
- **Vattâsî sonu:** TDV "Vattâsîler" 24 Şevval 961 / **22 Eylül 1554**; TDV "Fas" **23 Eylül 1554** → dar kapsamlı polity maddesi
  (22 Eylül). Tablolu takvim: 961-10-24 = 1554-09-22 Jülyen ✓. Osmanlı himayesinin süresi: "Vattâsîler" **dört ay**, "Fas"
  **dokuz ay kadar** — süre yazılmadı, iki uç gün (8 Ocak · 22 Eylül 1554) yazıldı.
- **Vattâsî başlangıcı hicrî:** H.876 = 1471-06-20 → 1472-06-07 (Jülyen); kaynak 1471 ⇒ kesişim ilk günü **1471-06-20**.
  TDV pre-1582 tarihleri Jülyen veriyor (2 Muharrem 956 = 31 Ocak 1549 Jülyen'le tutuyor); atlasın Jülyen/Gregoryen sözleşmesi
  bu işte ölçülmedi — **koordinatöre soru.**
- **Tuggurt 1552:** H.959 = 1551-12-29 → 1552-12-17 (Jülyen); kaynak 1552 ⇒ **1552-01-01**.
- **Harar → Mısır çekilişi:** TDV **20 Mayıs 1885**, EB 1911 garnizon çekilişi "25th of April 1885" → TDV esas.
- **Harar sonu:** adal künyesi 1887-01-06, TDV Şeleneko **7 Ocak 1887** — 1 gün fark, künyenin dayanağı bu işte ölçülmedi.
- **Aussa'ya taşınma:** TDV "Etiyopya" (1577, Galla yıkışıyla birlikte) ↔ TDV "Harar" (1577 Webi yenilgisi ve Ahmed b. İsmâil'den
  SONRA) → OLGU çelişkisi, `bulunamadı` + beyan.
- **Hobyo başlangıcı:** Treccani "Obbia" 1878 (şehrin kuruluşu) ↔ Treccani "Migiurtinia" (Cerulli) "intorno al 1887" (ele geçiriş)
  → 1878 seçildi. **Hobyo/Mecertin sonu:** TDV 1927 ↔ Treccani 1925 (Migiurtinia) / 1926 (Obbia) / işgal 1 Ekim 1925 başlar →
  TDV esas (tarih çelişkisi). Mecertin himayesi: Treccani 7 Nisan 1889 ↔ Treccani "Somalia" keşif bölümü "nel 1888 con la
  dichiarazione dei protettorati" → antlaşma günü (1889) esas.
- **Mezrûî başlangıcı:** TDV "Mombasa" 1698 (Nâsır b. Abdullah valiliği) ↔ TDV "Kenya" 1730 → 1730 (hanedan yönetimi);
  bağımsızlık ilânı Muhammed b. Osman'ın 1734-1746 valiliği içinde (yıl yok).
- **Kilve/Zimba:** TDV "Kilve" Zimba çıkarmasını **1588**, TDV "Mombasa" Kilve işgalini 1589 bağlamında verir → satır yazılmadı.
- **Pate'nin Nebhânî başlangıcı:** TDV "Afrika" XII. yy başı ↔ TDV "Zengibar" XIII. yy başı → yıl yazılmadı.
- **Ngazidja sonu:** TDV 1893 (sürgün; 1899-09-12 feragat) ↔ EB 1911 "In 1910 ... ceded his sovereign rights" → TDV.

#### ④ KUNYE_TSV'de ZATEN VAR olan / büyük ölçüde örtüşen
- **Harar** → `adal` ("Adal Sultanlığı / Harar Emirliği", 1415-01-01 → 1887-01-06). harar-emirligi satırı yalnız 1647 sonrası
  şehir-emirliğini ayırmak için, TEREDDUT'lu — **muhtemelen yazılmamalı**, karar koordinatörün.
- **Vattâsîler** → `merini` ("Merînî ve Vattâsî Fas Krallığı", 1196 → 1549). Ayrı künye ancak 1549-1554 Ebû Hassûn/Osmanlı
  dönemi için anlam taşır.
- **Kilve · Pate · Lamu** → toplu `svahili-sehirleri` (1000 → 1698-12-13). **Geledi · Hobyo · Mecertin · Ecuran** → toplu
  `somali` (1500 → 1927). **Mombasa Mezrûî** → `umman-zengibar` (1698-) ile çakışabilir. **Şoa · Gojjam · Tigray** → `habesistan`
  iç birimleri. **Aussa** → `adal` son dönemiyle çakışabilir.
- Harar'ın 1875 Mısır işgalinin taşıyıcısı `misir-kavalali` (1805-1914) künyesi VAR.

#### ⑤ Listede olmayıp bulunan EK adaylar / EVET adayları
- **Zeyla‘ (polity değil, Osmanlı toprağı — EVET adayları):** TDV "Zeyla‘": iskele **966 (1559)** Osmanlı'ya bağlandı, Habeş
  beylerbeyiliğinin sancak merkezi; XVII. yy Muhâ'ya; **1849** Kıbrıslı Tevfik Paşa seferiyle Hudeyde sancağına bağlı nahiye;
  **1 Haziran 1875** fermanıyla Mısır valiliğine devredildi (Hidivlik, tâbi); EB 1911 "Somaliland": Zaila için "Turkey was given
  the option of resuming possession, but advantage was not taken". TDV "Somali": 1883 Mısır çekilişi sonrası Zeyla‘, Berberâ,
  Tâcûre İngiliz. **Berberâ:** TDV "Berberâ": XVII. yy Zeyla‘ ile Moha şeriflerine bağlı; EB 1911: "occupation of Berbera by the
  Egyptians in 1875". Bunlar `misir-eyaleti`/`misir-kavalali`/Yemen kırılması olarak koordinatörün kalemi.
- **Mombasa Şîrâzî Sultanlığı (pre-1592/1698):** TDV "Mombasa" — 1585'te Osmanlı'ya bağlandı (Lamu satırında anıldı),
  5 Mart 1589 Portekiz Osmanlı filosunu Mombasa'da yaktı → EVET adayı; svahili-sehirleri içinde.
- **Makdişu / Berâve / Pemba 1585 bağlılığı** (aynı TDV cümlesi) → `makdisu-sultanligi` 1500'de bitiyor, 1585 olayı künyesiz kalır.
- **Moheli (Mwali) Sultanlığı:** TDV "Komor Adaları": "Moheli adasının 1842-1878 yılları arasındaki hâkimi olan Cumbe Fatma".
- **Benî Câbir** (Kabîliye'nin üçüncü emirliği, TDV "Kabîliye") — tarihsiz.
- **Raheita · Tagiura · Gobad sultanlıkları** (Afar, Fransız himayesi 1884 — Treccani "Somalia").
- **Biru (Afar) sultanlığı** (Treccani "Dancalia": Danakil depresyonunun kuzeyi).

#### ⑥ Bitiremediğim yerler (ADIYLA)
- **Encyclopaedia of Islam / Encyclopaedia Aethiopica** erişilemedi (paywall) — Tuggurt (Benî Cellâb kuruluşu, ~XV. yy), Kuko ve
  Benî Abbas (kuruluş/son), Ecuran, Geledi kuruluşu, Aussa'nın Mudaito sultanlığına geçişi bu yüzden `bulunamadı`.
- **Witu'nun kaldırılış yılı** · **Gojjam krallığı (Tekle Haymanot 1881)** · **Mecertin'in XIX. yy bağımsızlık yılı** ölçülmedi.
- britannica.com 403. EB 1911 "Gojam", "Danakil", "Aussa", "Patta", "Lamu", "Johanna", "Kabylia" Wikisource'ta YOK
  (missingtitle); "Tigré" ve "Zaila" alındı ama tarih vermiyor (Zaila: "Egyptian occupation (1875-1884)" — TDV'nin 1 Haziran 1875
  fermanıyla uyumlu, Zeyla‘ EVET adayına ek dayanak).

### EK · SEHIR (ikinci tur)

#### SEHIR — yeni küçük polity merkezleri için şehir noktaları (NOT)

Dosya: `SEHIR-SEHIR.csv` — **69 satır**: 38'i tarihli (`ILK_KAYIT_TARIHI` kaynaklı), 31'i `bulunamadı`.
Betikler ve ham çekimler: `SEHIR-is/` (`geo3.py` koordinat, `yaz.py` CSV üretimi, `web/` `pdf/` `tdv/` ham metin).

#### Yöntem
- **Mevcudiyet:** `yerlesimler.tsv` (4300) üzerinde ad araması (normalleştirilmiş) + GeoNames koordinatına
  haversine ile en yakın atlas noktası. CSV'deki her satırda en yakın atlas noktası ve uzaklığı `kaynak`ın
  KOORD kısmında yazılı; yazılan hiçbir satır 3 km içinde değil (`yaz.py` assert ediyor).
- **Koordinat:** GeoNames sayfasının kendisinden (geonames.org/<id>; ad + fcode doğrulandı). Wikidata YALNIZ kimlik
  köprüsü olarak kullanıldı (QID → GeoNames/TGN kimliği), koordinat kaynağı değil. İkinci gazetteer Getty TGN
  (vocab.getty.edu/tgn/<id>.json); TGN değerleri dakika-yuvarlak ⇒ kurala göre ikinci tanık SAYILMADI, yalnız
  fark km olarak yazıldı (Lucca'da 23 km — TGN boylamı hatalı). TGN'si olmayan satırda "ikinci gazetteer: bulunamadı".
- **ILK_KAYIT_TARIHI:** yalnız kaynakta tarihli YAZILI kayıt. Arkeolojik/dendro tarihleri `arkeolojik_katman`a.
  "Kuruldu" (founded) cümleleri yalnız kuruluşun kendisi belgeli tarihî olaysa alındı (Neustrelitz, Nabha).
  **TANIKLIK** işaretli satırlar (Ümmülkayveyn, Dübey, Acmân, Uşni, Male) "ilk kez anılır" beyanı DEĞİL,
  kaynaktaki en erken tarihli anılış ⇒ **ÜST SINIR**; şehir daha önce de var olabilir.

#### ① Kaynaklar (URL)
- HBI = *Höfe und Residenzen im spätmittelalterlichen Reich* (Residenzenforschung 15.I, 2003), Göttingen Akad.
  ResiKom PDF'leri: `https://adw-goe.de/fileadmin/forschungsprojekte/resikom/dokumente/pdfs/HBI/C_<n>_<Ad>.pdf`
  — Gotha, Weimar, Celle, Altenburg, Braunschweig (C_1_C_7), Wolfenbüttel, Schwerin, Ratzeburg, Dessau, Coburg,
  Bonn, Kleve, Bar-le-Duc, Den_Haag, Darmstadt, Rudolstadt (C_1), Salzburg (C_3).
- Residenzstädte Teil 2, Düsseldorf: `https://adw-goe.de/fileadmin/forschungsprojekte/residenzstaedte/dokumente/pdfs/HB1/HB1-BD2/RESIST-HB1-BD2-ART041.pdf`
- EB1911 (Wikisource): Rudolstadt, Detmold, Oldenburg_(town), Dessau, Schwerin_(Mecklenburg-Schwerin), Neu-Strelitz,
  Nabha, Salzburg_(city), Coburg, Celle, Wolfenbüttel, Brunswick_(German_city), Cleves, Bar-le-Duc, Hague,_The, Louvain…
- Britannica (online): Gotha, Wiesbaden, Meiningen, Celle, Kleve, Casale-Monferrato (çoğu sayfa 403 verdi).
- LAGIS Hessen Historisches Ortslexikon: Darmstadt id 13607, Arolsen id 1480.
- Historisches Lexikon des Fürstentums Liechtenstein: Vaduz_(Gemeinde).
- F. Krüger 1906, Stadt Lüneburg (UB Paderborn PDF 8180826).
- Treccani: Enciclopedia Italiana `guastalla_(Enciclopedia-Italiana)`; on line `mirandola`, `saluzzo`, `urbino`, `lucca`.
- TDV: `pirlepe`, `ummulkayveyn`, `dubey`, `acman`, `urmiye`, `maldivler` (+ okunup tarih vermeyen: `suleymaniye--irak`,
  `fuceyre`, `hayrpur`, `rampur`, `lekler`, `avarlar`, `dagistan`, `seyh-samil`, `cizan`, `bingol`).

#### ② bulunamadı (31, ADIYLA) — satır var, tarih yok
Kalaçolan · Eğil · Genç · Pertek · Casale Monferrato · San Marino · Cividale · Gera · Greiz · Sondershausen ·
Bückeburg · Hayrpur · Rampur · Tonk · Patiala · Kapurthala · Kalat · Hunzah · Gunib · Kazi-Kumuh · Füceyre · Sabyâ ·
Lehic · Kişn · Mirpur Khas · Monako · Corte · Massa · Leuven · Kaliakra · İlisu.
Bunlardan **ARANMADI** (yalnız koordinat ölçüldü): Lehic, Kişn, Mirpur Khas, Monako, Corte, Massa, Kaliakra, İlisu —
"bulunamadı" burada "araştırılmadı" demektir, ayrımı satırın `not`unda yazılı.
Kaliakra GeoNames kaydı burun (PT), Kalaçolan eşleşmesi ad benzerliğine dayanıyor (TEREDDUT).

#### ③ Çelişen kaynaklar ve seçim
- Celle: EB1911/Britannica "founded 1292" ↔ HBI "Kellu (993)" ⇒ 993 (daha erken yazılı kayıt).
- Coburg: EB1911 "first mentioned 1207" ↔ HBI "1056 Coburg" ⇒ 1056. (HBI PDF'indeki "Ersterwähnung 1046" Colditz'e ait.)
- Rudolstadt: EB1911 "800" ↔ HBI "zu Beginn des 9. Jh." ⇒ 800 (uyumlu; yıl EB1911'den).
- Wiesbaden / Urbino / Lucca / Salzburg: Roma dönemi yazılı anılış kaynaklarda YILSIZ ⇒ yazılan tarih ÜST SINIR (TEREDDUT notu).
- Darmstadt (1050-1100) ve Vaduz (1175/1200): kaynak ARALIK veriyor, alt uç yazıldı, kesinlik `belirsiz`.
- Bonn: "68/69" ⇒ 68.
- Neustrelitz: EB1911 1726; yaygın 1733 bilgisi ikinci kaynakla doğrulanmadı.

#### ④ Zaten var (satır YAZILMADI, 9)
- Revandiz → zaten var: **Rewândiz** (GeoNames 92002'ye 1,0 km)
- Süleymaniye → zaten var (KOORDİNATLA): **Şehrizor** (GeoNames 98463'e 0,6 km). ⚠ Atlas Süleymaniye konumunu
  "Şehrizor" adıyla tutuyor — ad farklı; TDV Süleymaniye'nin 1784'te kurulduğunu söylüyor ("Süleymaniye adını vererek
  sancağın merkezi yaptı (1784)"). Bu noktanın adı/başlangıcı ayrıca incelenmeli (koordinatör kararı).
- Hoşap → zaten var: **Hoşap (Mahmudi)** (ad eşleşmesi; GeoNames Güzelsu 10,9 km)
- Kassel → zaten var: **Kassel**
- Şemâhî → zaten var: **Şamahı** (0,1 km)
- Ebûzabî → zaten var: **Abu Dabi** (0,3 km)
- Şârika → zaten var: **Şârika** (ad eşleşmesi; GeoNames 292672'ye 3,3 km)
- Re'sülhayme → zaten var: **Ras el-Hayme (Cülfâr)** (0,2 km)
- Bhuj → zaten var: **Bhuc (Kutch)** (1,4 km)

#### ⑤ Ek aday
Yok (listede olmayan şehir eklenmedi).

#### ⑥ Bitirilemeyen
Tarihi ARANMAYAN 8 aday (② listesinde adıyla). Britannica online çoğu istekte 403 verdi (Weimar, Bonn, Leuven,
Corte, Massa… için ikinci kaynak alınamadı).
