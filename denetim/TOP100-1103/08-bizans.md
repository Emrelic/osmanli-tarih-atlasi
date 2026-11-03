# 08 · Bizans — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 2026-11-03 (salt okuma; veri dosyasına yazılmadı)

## Özet
- Künye: ana `bizans` (330-05-11 → 1453-05-29; 270 yerleşim kaydı, 153 kırılma) + 3 Bizans-adlı alt künye (`ravenna-eksarhligi`, `bizans-afrika-eksarhligi`, `bizans-katepanlik-italya`). Bizans'ın 1204–1261 evreleri (`latin-imparatorlugu`, `iznik-imparatorlugu`, `epir-despotlugu`, `trabzon-rum`, `selanik-*`) ve 1453 sonrası (`mora-despotlugu`, `trabzon-rum`) ayrı künyede (başkasının işi) — bu bölünme tutarlı, eksik evre yok.
- Ölçer AÇIK kırılma: **46** (bizans 44 + ravenna 1 + katepanlık 1; Afrika eksarhlığı 0).
- Eksik madde: ~14 (Mısır 619/629/641-642/Palmyra 634, Girit/Kıbrıs 961, Antakya 969-10-28, Ravenna 584 / Afrika 591 künye-tarih hizası, Korfu-Butrint 1386, Serez 1345-09-25, vb.); ~25 AÇIK ise "madde var, yer adı odak_yer'de yok" — düzeltme tek satır.
- En ağır 3 bulgu: (1) **Alaşehir (Philadelphia) 1300→1390 `germiyan`**: TDV "Alaşehir" şehri 1391'e dek Bizans'ın Batı Anadolu'da Türklerin eline geçmeyen tek şehri sayıyor (Germiyanoğulları yalnız kuşatıp "haraca bağladı") — atlas 90 yıl yanlış sahip gösteriyor (TDV esas). (2) **Bari 0871-02-03→1071 `bizans`**: 871-02'de Bari'yi Karolenj II. Ludwig (Louis II) Emirlik'ten aldı; Bizans 876'da (Longobardia teması) aldı — 871-876 Bizans değil; 847–871 Bari Emirliği. (3) **Cenova 553→568 `bizans`, sonra Langobard**: Cenova/Liguria Bizans'ta 643'e dek kaldı (Rothari 643, Paulus Diaconus HL IV.45); Floransa/Bergamo/Brescia'nın 568 kaybı da bir yıl-düzeyi kısaltma (Langobard fethi 568–572, Milano 569-09-04 olayı var). Ek: `shu-han`-benzeri olmasa da `İskenderiye 642-01-01` (Antlaşma 641-11-08, tahliye 642-09-29).

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| bizans | Bizans (Doğu Roma) | 0330-05-11 | 1453-05-29 | ana; en geniş an 1282 (183 yerleşim); `ic_not_t` Emre kararı (1461 → 1453) |
| ravenna-eksarhligi | Ravenna Eksarhlığı | 0584-01-01 | 0751-01-01 | 1 yerleşim (Ravenna); tek kaynak (New Catholic Encyclopedia) |
| bizans-afrika-eksarhligi | Afrika Eksarhlığı | 0591-01-01 | 0698-01-01 | 3 yerleşim; Treccani + TDV; Treccani "709'a dek" der, t=698 (TDV Berberîler) — çelişki beyanı künyede var mı bakılmalı |
| bizans-katepanlik-italya | İtalya Katepanlığı | 0975-01-01 | 1071-04-16 | 1 yerleşim (Otranto); Bari s: `bizans` (künye kullanılmıyor) |
| (ilgili, başkasının) latin-imparatorlugu / iznik-imparatorlugu / epir-despotlugu / trabzon-rum / mora-despotlugu | | | | kapsama tam |
Eksik: (i) **Bari Emirliği (847–871)** ve **Bari 871-876 Karolenj** için künye var mı? Bari s: `bizans` 871'den başlıyor → künye yok/kullanılmıyor; (ii) İtalya'da Longobard Fethi sonrası "Bizans Cenova/Ligurya Eksarhlığı 568–643" alt evresi künyede ayrı değil (Cenova için `bizans`ın uzatılması yeter); (iii) Girit Emirliği (827–961) ve Sicilya Emirliği ayrı künyelerdir (kontrol edilmedi).

## b) f/t ve evreler
| uç | atlas | kaynak 1 | kaynak 2 | hüküm | önerilen |
|---|---|---|---|---|---|
| bizans f 0330-05-11 | gün | TDV "Bizans": «11 Mayıs 330'da törenle açıldı» (yeni başşehir) | ikinci akademik kaynak ÇEKİLEMEDİ (Britannica 403; ODB/Cambridge Medieval History erişilemedi). Atlas içi: olaylar_once1000_1019.js:10 | TDV esas; gün teyitli | korunur; `ic_not`: "f = Konstantinopolis'in açılışı (TDV); Bizans başlangıcı için alternatifler 395 (bölünme) ve 476" — künye bu seçimi beyan etmeli |
| bizans t 1453-05-29 | gün | TDV "Bizans": «29 Mayıs 1453…» (Topkapı'dan giriş, XI. Konstantinos öldü) | Osmanlı kaynakları atlas içinde olaylar.js:40; ikinci akademik: çekilemedi | TDV esas, Emre kararıyla uyumlu | korunur |
| bizans 1204-04-13 / 1261-07-25 (evre) | gün | TDV "Bizans": «13 Nisan 1204 Latin Devleti», «25 Temmuz 1261 İznik birlikleri İstanbul'a girdi» (+ 15 Ağustos 1261 taç) | olaylar_ortacag_bizans_balkan.js:79,106 aynı | teyitli | korunur |
| ravenna f 0584-01-01 | yıl | New Catholic Encyclopedia (tek) | atlas olaylar_ortacag_bizans_balkan.js:15 «582 Maurikios Ravenna Eksarhlığı'nı kurdu» | **iki kaynak iki yıl**: künye 584, olay 582 (730 gün) | ya künyeyi 0582'ye ya olayı 0584'e getir; kaynağı çiftle (ODB "Exarchate"/Diehl okunacak) ve çelişkiyi `ic_not`ta iki kaynağıyla yaz |
| afrika f 0591-01-01 | yıl | Treccani «591» | olay 582 (olaylar_ortacag_bizans_balkan.js:14); kronoloji_sinir_once1281_zincir_bati.js:11 «591 ilk belgelendi» | olay metni "Maurikios (582) kurdu" ile künye 591 çelişir | olayı 0591-01-01'e ya da künyeyi 582'ye; öneri: olay `t:"0591-01-01"`, "ilk belgelendi" beyanıyla |
| katepanlık t 1071-04-16 | gün | Treccani Bari | atlas olayı olaylar_ortacag_bizans_balkan.js:51 `t:"1071-01-01"`; Bari s: 1071-01-01 | iç tutarsız | Bari s ve olay `1071-04-16`'ya |

## c) Kronoloji
Var (evrende): 330-05-11 (olaylar_once1000_1019.js:10) · 395-01-17 (olaylar_antik_misir_nubya.js:89, yalnız İstanbul+İskenderiye odak) · 476-09-04 (kronoloji_sinir_once1281_zincir_bati.js:6) · 534 Vandal Afrikası (olaylar_ortacag_bizans_balkan.js:11) · 540-05-01 Ravenna (zincir_bati.js:8) · 568-04-01 / 569-09-04 Langobard (bizans_balkan.js:13; bekleyen_acik.js:4) · 582 eksarhlıklar (:14-15) · 610-10-05 Herakleios · 717 · 751 Ravenna (bekleyen_acik.js:13) · 827 Girit/Sicilya · 902-08-01 Taormina · 961-03-06 Kandiye (bekleyen_acik.js:47) · 965-08-16 Tarsus · 969-10-28 Antakya (bekleyen_acik.js:51) · 971 Preslav · 1014 Kleidion · 1018 Bulgar katılımı · 1059/1071 İtalya · 1071 Malazgirt çevresi · 1203-07-17, 1204-04-13, 1205, 1261-07-25, 1261-08-15, 1274 Lyon · 1302 Koyunhisar… · 1453 İstanbul'un Fethi (olaylar.js:40-56).
Eksik / düzeltilecek (ekle):
1. **Mısır/Suriye 7. yy**: `{ t:"0619-06-01", kesinlik:"ay", b:"Sasanîler İskenderiye'yi aldı; Mısır Bizans'tan koptu", odak_yer:["İskenderiye"], kaynak:"Iranica 'Alexandria' alıntısı (Süryanî kronik: Haziran 619) — arama özeti; ikinci kaynak: Britannica 'Egypt's role in the Byzantine Empire' (619-628) — ERİŞİLEMEDİ, tam metin okunmadı" }` · `{ t:"0629-01-01", kesinlik:"yil", b:"Herakleios Sasani çekilişiyle Mısır'ı geri aldı (Şehrbaraz'ın tahliyesi)", odak_yer:["İskenderiye"], kaynak:"Cambridge History of Egypt vol.1 / Iranica arama özeti: Pers çekilişi 629 yazı; Britannica 628 barış — çelişki beyanı gerekir" }` · `{ t:"0641-11-08", b:"Kiros ile Amr b. el-Âs arasındaki İskenderiye teslim antlaşması (11 aylık ateşkes)", odak_yer:["İskenderiye"], kaynak:"Britannica 'Egypt's role…' (tarih arama özetinden, tam metin okunamadı); TDV 'İskenderiye': «642'de antlaşmayla»" }` · `{ t:"0642-09-29", b:"Arap ordusu İskenderiye'ye girdi; Bizans garnizonu şehri boşalttı", odak_yer:["İskenderiye"], kaynak:"Britannica (özet) + Cambridge (özet): 'effective Sept 642'; Manuel 645'te kısa süre geri aldı — ayrıca madde" }`. **s:** İskenderiye `hulefa-yi-rasidin` f `0642-01-01` → `0642-09-29` (TDV yıl 642, antlaşma 641-11-08; fiilî teslim 642-09).
2. **Tedmür (Palmyra) 0634-03-07**: s var, madde yok. `{ t:"0634-03-07", b:"Hâlid b. Velîd çölü aşıp Tedmür'ü aldı…", odak_yer:["Tedmür (Palmyra)"], kaynak:"TDV 'Tedmür' (okunacak — kaynak okunamadı: çekilemedi)" }`.
3. **Antakya**: s 0968-01-01 ↔ olay 0969-10-28 (bekleyen_acik.js:51); TDV "Antakya": «968/969» (kendi özeti 969). Öneri: s f `0969-10-28`, `ic_not`: "TDV 968/969; gün: Skylitzes/Cambridge Medieval History — okunacak; olay günü korundu".
4. **Kıbrıs/Lefkoşa 0961**: TDV "Kıbrıs": «Girit'in kesin Bizans hâkimiyetine girmesinden sonra Kıbrıs'ta da Bizans otoritesi yeniden kuruldu» (961). Öneri: olaylar_ortacag_bekleyen_acik.js:47 (1961-03-06 Kandiye) `odak_yer`'e "Lefkoşa" ekle; s f `0961-03-06` ("Girit'ten sonra", TDV). Not: Bizans tarihyazımı ortak yönetimin (688/685'ten) 964/965'e dek sürdüğünü söyler → `ic_not`ta iki kaynak.
5. **Serez**: `{ t:"1345-09-25", b:"Stefan Dušan Serez'i aldı (Bizans kaybı)", odak_yer:["Serez"], kaynak:"ölçerin AÇIK satırı 1345-09-25 → TDV 'Serez' / Sırp kaynakları (Ostrogorsky) okunacak" }`.
6. **Korfu–Butrint 1386** ve **Parga 1401**, **Vonitsa 1449**, **Mat 1344**: ilgili madde yok (Mat için "Sırplar Kruja… 1344" var ama Mat anılmıyor); Butrint'in Venedik'e geçişi Korfu'yla (1386) — ölçüt: Venedik/Arnavut kaynaklarına bak.
7. 395: `{ odak_yer:["Ankara","Kayseri","Tedmür (Palmyra)"] … }` — mevcut 395-01-17 maddesine ek (ya da "Doğu Roma eyaletleri Arcadius'a geçti" yeni madde). Palmyra s f `0395-01-01` → `0395-01-17` (aynı bölünme günü).

## d) Harita uyumu
Ölçer: 153 kırılma (bizans), AÇIK 44; ravenna 1; katepanlık 1. Sınıflandırma (46):
- **A. Madde var, yer adı yok (odak_yer ekle) — 26**: 395-01-17 Ankara/Kayseri; 1357 Karpuzlu, Távri → "Süleyman Paşa Trakya ilerleyişi"; 1361 Küfkaynapınarı, Stérna, Uluköy → "Dimetoka'nın alınışı"; 1369 Ahtapolu, Rezve, İğneada → "Istıranca kaleleri"; 1373 İskeçe → 1373 madde; 1387-04-09 Lanzaka, Praviște → "Selanik'in ilk teslimi"; 1390 Alasonya, Golos, Kalabaka, Kardiça… → "Batı Anadolu beyliklerinin ilhakı" (Teselya'yla ilgisiz — ayrı madde, aşağıda); 1394 Alasonya… → "Teselya'ya iniş"; 1395-08-01 Beykoz → "Anadolu Hisarı"; 1410-02-13, 1410-06-15 Vize → "Yanbolu Savaşı/Kosmidion"; 1449 Vonitsa → "Epir kıyısı: Arta ve Preveze"; 1453-05-29 (Alonisos, Batnoz, Bozbaba, Boğaziçi…) → "İstanbul'un Fethi"; 1297 Behramkale, Lapseki, Soma, Truva → "Karesi…"; 1313 Akhisar/Manisa/Sart → "Köse Mihal…"(yanlış eşleşme — Saruhan 1313 künyesi f 1313 ✓: madde ekle "Saruhanoğulları Manisa'yı aldı"); 1331 Gümülcine, 1336 Ergiri, 1355 Molova → "Enez Ceneviz (Gattilusi)" Molova'yı da kapsar → ekle; 1417 Ergiri; 1430-10-09 Ayasaranda → "Yanya'nın teslimi" (aynı gün, ad yok).
- **B. s: tarihi madde tarihine uymuyor / yanlış — 8** (ayrıntı aşağı).
- **C. Ufuk işareti (1000-01-01 'kazanç') — 1** satır, 11+ yer: Alaşehir, Arta, Atina, Ayasuluk… `s` f=1000-01-01 "UFUK SINIR İŞARETİ" (CLAUDE: veri kuralı); gerçek kırılma değil. Öneri: Değişmez 2 muafiyeti yok ise tek madde: `{ t:"1000-01-01", kesinlik:"onyil", b:"II. Basileios devrinde Bizans: Balkanlar ve Anadolu hâkimiyeti (ufuk işareti)", odak_yer:[Alaşehir, Arta, Atina, Ayasuluk…], kaynak:"TDV 'Bizans' (976-1025 Basileios II)" }`.
- **D. Eksik madde — 11** (c bölümü 1-6: İskenderiye ×3, Tedmür, Antakya, Lefkoşa, Serez, Mat, Butrint, Parga, Ani 1046, Urfa 1087, Ankara 1073).

B grubundan en önemli 15 (hepsi ölçülmüş s: aralığıyla):
| # | gün / yer | bulgu | öneri |
|---|---|---|---|
| 1 | Alaşehir 1300-01-01 `bizans`→`germiyan` (1300–1390) | TDV "Alaşehir": Germiyanoğulları şehri kuşatıp haraca bağladı; «Batı Anadolu'da Türkler'in eline geçmeyen tek Bizans şehri», 1391'de Yıldırım Bayezid aldı | `bizans` 1261-07-25→1391 (kesinlik yıl), 1300→1391 `v:` haraçgüzâr Germiyan/Aydın himayesi; Osmanlı f 1391 (atlas 1390); TDV kaynağı + ikinci (Ostrogorsky/ODB 'Philadelphia') okunacak |
| 2 | Bari 0871-02-03 `bizans` | Bari 871-02'de Louis II'ye düştü; Bizans 876'da aldı (Longobardia teması); 847–871 Emirlik | s: 0847→0871-02-03 `bari-emirligi` (künye açılmalı) → 0871→0876 `karolenj-italya` → 0876→0975 `bizans` → 0975→1071-04-16 `bizans-katepanlik-italya`; kaynak: Wikipedia özetleri (Emirate of Bari, Siege of Bari) yol gösterir; akademik: Kreutz "Before the Normans" (okunacak) |
| 3 | Cenova 0553→0568 `bizans` kayıp 568 | Cenova/Liguria 643'e dek Bizans; Milano archbishop 569'da Cenova'ya kaçtı (Paulus Diaconus HL II.25 — arama özeti; HL IV.45 Rothari 643) | Cenova `bizans` 553→0643-01-01, sonra `langobard` (Varigotti 643 de) |
| 4 | Floransa/Bergamo/Brescia 568 kayıp | Alboin 568-04-01 yola çıktı, Milano 569-09-04, Pavia 572; Bergamo/Brescia 569 civarı; Floransa'nın 568'de düşmesi kaynaksız | Bergamo/Brescia `bizans` t 0569-09-04 (madde var); Floransa t için kaynak okunacak |
| 5 | İskenderiye 0619/0629/0642 | madde yok (c.1) | c.1 |
| 6 | Antakya 0968-01-01 | madde 0969-10-28 | s f 0969-10-28 |
| 7 | Ravenna 0584-01-01 | künye 584 / olay 582 | b tablosu |
| 8 | Bari 1071 | s 1071-01-01, künye 1071-04-16 | s t 1071-04-16 |
| 9 | Alasonya vb. Teselya 1390→1394 `bizans` | TDV "Tesalya": Bizans valileri Philanthropenos 1370-1390, Manuel Angelos 1390-1393; Evrenos doğu ovayı 1386-87 aldı; Katalan 1311 tarihi TDV'de yok («1320'ler») | 1388-05-02→1390 BOŞLUK ve 1390–1394 `bizans` kaynakla doğrulanmalı; 1386-87 Evrenos çelişkisi `ic_not` |
| 10 | Tekirdağ 1275-01-01 `bizans` (s önceki yok) | 1261→1275 delik (Değişmez 1) | Tekirdağ `bizans` 1261-07-25'ten başlat (Rhaidestos İznik/Bizans) ya da beyanlı BOŞLUK |
| 11 | Edirne 1204-04-13→1246 BOŞLUK | Latin/Bulgar/Selanik (Kaloyan 1205-04-15 Edirne Savaşı olayı var) | kaynaklı ara sahip (Selanik Krallığı/Bulgar) — ayrı iş |
| 12 | Urfa 1030-01-01→1087-01-01 `bizans` | Edessa Maniakes 1031'de aldı (okunacak); Philaretos/Thoros dönemi | s f 1031 (kaynak), t 1087 Selçuklu ✓ (Selçuklu madde yok) |
| 13 | Ani 1046-01-01 `bizans`→1064 | Bagratuni Ani'nin Bizans'a devri 1045 (Gagik II) / 1046 (okunacak) | TDV "Ani" okunacak |
| 14 | Ankara 1073-01-01 kayıp | madde 1101-06-23'te Bizans'a dönüş var, 1073 kaybı yok; TDV "Ankara" okunacak | s tarihi kaynakla |
| 15 | Preveze 1292 / Ferecik 1152 kazanç | 1292 Preveze ve 1152 Feres: kaynaklı tanıklık gerekli (Epir Despotluğu→Bizans 1318, Yanya 1318 ✓) | s f değer kontrolü |

Haritadaki sahiplik (Değişmez 1/3 ihtimalleri): İstanbul kaydı `yerlesimler.js` içinde ayrı (1261→1453 ✓); 330→1261 İstanbul s bu ölçümde görünmedi (başka kayıtta olabilir — `denetle` ile doğrula; "ölçülemedi ≠ temiz").

## Önerilen düzeltmeler (KASA için)
1. `data/yerlesimler.js` Alaşehir: s `bizans` 1261-07-25→1391 (+v Germiyan/Aydın haraç 1300→1391), Osmanlı f 1391 (TDV "Alaşehir").
2. `data/yerlesimler_avrupa.js` Bari: 871 `bizans` → emirlik/karolenj/bizans (876) zinciri; Bari s t 1071-04-16; Cenova s `bizans` t 0643-01-01; Bergamo s t 0569-09-04.
3. `data/yerlesimler.js` İskenderiye: `hulefa-yi-rasidin` f 0642-01-01 → 0642-09-29; 619/629 s'leri için madde ekle (c.1).
4. `data/yerlesimler.js` Antakya f 0968-01-01 → 0969-10-28 (+`ic_not` TDV 968/969).
5. `data/olaylar_ortacag_bizans_balkan.js:14-15` eksarhlık maddelerini künye tarihlerine hizala (584/591) veya künyeyi 582'ye çek — çift kaynak beyanıyla.
6. A grubundaki 26 AÇIK için ilgili maddelere `odak_yer` ekle (tek satırlık; liste yukarıda).
7. `data/olaylar_antik_misir_nubya.js:89` 395 maddesine Ankara, Kayseri, Tedmür odak_yer; Palmyra s f 0395-01-17.
8. Yeni maddeler: c.1–c.6.

## Erişilemeyen kaynaklar
- Britannica (Byzantine Empire, Han vb.) HTTP 403; ODB (Oxford Dictionary of Byzantium), Cambridge Medieval History vol. 4, Ostrogorsky "History of the Byzantine State", Kreutz "Before the Normans", Kaegi "Heraclius", Iranica 'Alexandria' tam metin, JSTOR — erişim yok.
- Okunamayan TDV gövdeleri: "Tedmür", "Serez", "Ani", "Ankara", "Urfa" (Urfa/Ani/Ankara arama özetinde değil; çekilemedi). TDV "Bizans", "Antakya", "Alaşehir", "Kıbrıs" (ilk 100.000 karakter), "İskenderiye", "Tesalya" okundu.
- Paulus Diaconus (Fordham mirror) HTTP 500; Cenova/Rothari ve Bari bilgileri web arama özetlerine dayanıyor (Wikipedia aynaları — tek dayanak değil, yol gösterici); hepsi için akademik ikinci kaynak aranmalı.
