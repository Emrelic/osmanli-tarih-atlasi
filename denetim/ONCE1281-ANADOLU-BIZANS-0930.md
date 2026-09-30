# ONCE1281-ANADOLU-BIZANS — teslim raporu (30 Eylül 2026)

Kuşak 1000-01-01 → 1281-01-01 · bölge: Anadolu + Bizans/Latin Yunanistan-Ege + Kafkasya
(sınır koordinatör hükmü M-5567: Kıbrıs ve Meyyâfârikîn → ORTADOGU · buyuk-selcuklu → IRAN).

## Ürünler
| dosya | içerik |
|---|---|
| `denetim/ONCE1281-ANADOLU-KUNYE.json` | künye önerisi — 43 kayıt (23 yeni · 1 genislet · 19 dokunmadim) + 7 bulunamadı; her kayıtta `grup` (A Anadolu-Türk · B Bizans/Latin · C Kafkasya/Kilikya/Haçlı) |
| `data/kronoloji_cok_once1281_anadolu.js` | `window.KRONOLOJI_COK_ONCE1281_ANADOLU` — 175 madde, 322 taraf atfı |
| `denetim/ARAC-ONCE1281-ANADOLU-TDV.py` | TDV çekme/arama aracı (ATLANTIK-A aracının kopyası, kendi önbelleği) |
| `denetim/ONCE1281-ANADOLU-tdv-onbellek/` | çekilen TDV gövdeleri |

## Kapılar (dosya node ile YÜKLENEREK ölçüldü, regex değil)
- ① `node --check` ✓
- ② evren 175 madde · tarafsız madde 0 · biçim hatası 0 · kuşak dışı 0 ·
  **eşlenemeyen taraf 8 atıf / 2 kimlik: `zengi` 5 · `eyyubi` 3** — ikisi de ORTADOGU'nun
  önerisinden bekleniyor. `eyyubi` id'si M-5569'da koordinatörün yazdığı id; `zengi` id'si
  DOĞRULANMADI (ORTADOGU künye dosyası henüz yok). `harizmsah` (IRAN) ve `buyuk-selcuklu`
  devletler.js'te VAR, eşlendi.
- ③ küresel ad başka dosyada 0 (taranan data/ dosyası 557).

## Birleştirmede yaptığım ayıklama
- Grup arası mükerrer 4 madde birleştirildi (taraflar birleşimi): 1104-05-07 Harran · 1202 Gürcistan
  seferi · 1259 Sinop'un Trabzon'a geçişi · 1266 Sinop'un geri alınışı.
- İskeletle aynı olay 1 madde düşürüldü (1229 dilmacogullari). 1100 Bohemund esareti: kunye önerisindeki
  antakya iskeletinden çıkarıldı, dosyada danismendli+antakya iki taraflı madde olarak duruyor.
- Künye penceresi dışı taraf: kilikya-ermeni 2 maddeden çıkarıldı (1130, 1199-01-01 < f 1199-01-06).
  naksa-dukaligi 1205 maddesi KALDI (f 1207) — ③f kararı bekliyor.
- Künyesi hiçbir yerde olmayan taraf çıkarıldı: `bulgar-birinci` · `pecenekler` (maddeler başka tarafla kaldı).
- Eşleme: harzemsah/harezmsahlar → harizmsah · zengiler → zengi · ani-bagratlilari → ani-bagratli-kralligi.

## Künye başına taraf atfı (15 tavanı üzerine not)
selcuklu 35 · gurcistan 24 · artuklu 21 · bizans 19 · danismendli 17 · seddadiler-gence 14 ·
buyuk-selcuklu 14 · … Tavanı aşanların çoğu ORTAK savaş maddesidir (Tel İfrîn, Ani 1161, Lukri 1163,
Tiflis 1121, Harran 1104); bir maddenin "birincil" tarafı sayılırsa selcuklu 15, artuklu 12. Kapı taraf
atfıyla ölçecekse düşürülecek aday listesi Grup A notlarında.
3'ün ALTINDA kalanlar ve gerekçeleri aşağıdaki "bulunamadı" listelerinde (pencerede tarihli olay yok).

### Grup A — kronoloji notları
- Madde sayısı: 81. Künye başına (iskelet HARİÇ): selcuklu 25 taraflık / 15 birincil · danismendli 16 taraflık / 11 birincil · artuklu 18 taraflık / 12 birincil · mervani 8 taraflık / 8 birincil · ahlatsahlar 10 taraflık / 9 birincil · dilmacogullari 11 taraflık / 4 birincil · saltuklu 7 taraflık / 4 birincil · inalogullari 5 taraflık / 3 birincil · cubukogullari 5 taraflık / 2 birincil · karaman 5 taraflık / 4 birincil · eyyubi-hisnikeyfa 4 taraflık / 3 birincil · inancogullari 2 taraflık / 2 birincil · mengucuklu 2 taraflık / 1 birincil · cobanogullari 1 taraflık / 1 birincil · sahibata 1 taraflık / 1 birincil · germiyan 0 taraflık / 0 birincil · mentese 0 taraflık / 0 birincil · esrefogullari 0 taraflık / 0 birincil · pervane 0 taraflık / 0 birincil. YORUM: '15 tavanı'nı BİRİNCİL taraf (listedeki ilk id) üzerinden uyguladım; ortak savaşlar (Tel İfrîn, Ani, Lukri, 1121 Tiflis, Sivas 1163) birden çok künyede sayılınca selcuklu, artuklu ve danismendli taraflık sayısı 15'i aşıyor. Kapı taraf sayısıyla ölçecekse selcuklu'dan düşülecek adaylar: 1101, 1162, 1124-06-13, 1261, 1276; artuklu'dan: 1134, 1150, 1154, 1163 Sivas. II. Kılıcarslan'ın tahta çıkışı (550/1155) tavan yüzünden çıkarıldı.
- 3'ün altında kalanlar ve gerekçesi: mengucuklu 2 (+5 iskelet; pencere içi öteki tarihli olaylar ya kitâbe/yapı — süs — ya da t=1228 sonrası) · inancogullari 2 (+1 iskelet; TDV'de 1261-1281 arası başka tarihli olay yok) · cobanogullari 1 (+2 iskelet; TDV'de 1211-1280 arası başka tarihli olay yok, Alp Yürek'in başa geçişi ve Moğol tâbiiyeti YILSIZ; Yavlak Arslan '1280 yılı civarında' — 'civarı' yıl sayılmadı) · sahibata 1 · germiyan/mentese/esrefogullari/pervane 0 (bulunamadi'da).
- 🔴 KOORDİNATÖR HÜKMÜ GEREKEN ÇELİŞKİ — Harput: TDV artuklular Belek'in Harput'u 1112'de aldığını söyler (Harput kolu 1112-1124); TDV harput Çubukoğullarının sonunu '1110’lu yıllar'a koyar; Bezer (Belleten 1997) Muhammed b. Çubuk'un 505-506/1112'de öldüğünü ve ilhakın 1119-1120'de olabileceğini yazar. cubukogullari künyesi t=1119 ile artuklu 1112 maddesi 1112-1119 arasında AYNI ŞEHRE iki sahip verir. Seçenekler: (a) cubukogullari t'yi 1112'ye çek (TDV artuklular + Muhammed'in ölümü) · (b) t=1119 kalsın, artuklu 1112 maddesi 'Harput yöresinde nüfuz' diye yumuşatılsın. Önerim (a): iki TDV maddesi (artuklular kesin yıl, harput '1110'lu') Belleten'in ihtimal cümlesinden güçlü.
- Künye iskeleti tutarsızlığı (bilgi): karaman iskeletindeki Konya maddesi 1277-05-13 der; TDV karamanogullari ve selcuklular ikisi de '9 Zilhicce 675 / 14 Mayıs 1277' verir — iskelet bir gün kaymış. Düzeltme koordinatörün (künyelere dokunmadım).
- Mükerrer riski: dilmacogullari 1229 maddesi kunye_A.json iskeletindeki 1229 'tabi' ile AYNI olay; etlendirme olarak yazıldı, kapıda biri düşürülmeli. Öteki iskelet maddeleri (Malazgirt, 1075, 1097-06-19, 1176, 1243, 1102, 1232, 1234, 1211, 1224, 1256, 1277-05-13, 1071, 1102-09-18, 1143-12-06, 1175, 1178-10-25, 1123, 1202-06-25, 1100, 1111, 1208, 983, 1011, 1085 x2, 1098, 1110, 1183-04-29, 1085, 1192, 1118, 1120, 1142, 1165, 1228, 1119) tekrarlanmadı.
- Taraf yer tutucuları (künyesi bu kuşakta yok — kapıda ayıklanacak): buyuk-selcuklu (3 madde, IRAN), eyyubi (3 madde, ORTADOGU — id TAHMİN), zengi (3 madde), antakya-prinkepsligi (2), urfa-kontlugu (1), harzemsah (1). Var olan dış künyeler: bizans, gurcistan (f 1008), trabzon-rum (f 1204), kilikya-ermeni (f 1199), mogol-imparatorlugu (1206-1260), ilhanli (f 1256), memluk (f 1250) — her biri maddenin tarihinde künye penceresi içinde.
- TDV iç çelişkileri (maddelerin ic_not'unda ayrıntı): Urfa 1025/1027 (mervaniler↔nasruddevle) · Eskişehir 'Temmuz'/30 Haziran 1097 · Malatya 1105/1106 · Ani kuşatması Ağustos 1161/1162 (saltuklular↔ahlatsahlar) · 1163 Sivas zaptı/çarpışmasız barış (danismendliler↔dilmacogullari) · Karamanoğlu Mehmed'in ölümü 20 Haziran/Kasım 1277 (selcuklular↔karamanogullari) · Baba İshak 1239/1240 · IV. Kılıcarslan'ın tek başına saltanatı 1261/1262.
- Tutmayan kaynaklar: yeni ölü slug denenmedi; bu turda yalnız husameddin-coban çekildi (HTTP 200). Belleten tam metni ikinci kez açıldı (Habur günü ve 1104/1112 tarihleri). Belleten'de Habur tarihi '19 Şevval 590' diye DİZGİ HATALI (500 olmalı) — milâdî 14 Haziran 1107 kullanıldı.
- kunye_A.json düzeltmesi yapıldı: mervani f '0983-01-01' → '983-01-01' (sıfır dolgusuz, devletler.js deseni) ve kronoloji iskeletindeki aynı tarih; ic_not metni de güncellendi. JSON.parse temiz.

**bulunamadı:**
- germiyan — pencere içi madde — Künye f=1300. 1281 öncesi Germiyanlılar TDV'de aşirettir (1239 Malatya'da Selçuklu hizmetinde, 1264 Kerîmüddin Alişîr'in öldürülüşü, 1276 öncesi Kütahya-Denizli'de faaliyet). Bu olaylar künye penceresinin DIŞINDA; germiyan taraf yazılırsa künye aşımı olur. 0 madde.
- mentese — pencere içi madde — Künye f=1280; pencere 1280-1281. TDV menteseogullari'ndaki ilk tarihli olay 1282 (Tralles/Nyssa) — pencere dışı. İskelette yalnız 1280 kuruluşu var. 0 madde (ayrıca künye bulgusu: 1280 kaynaksız).
- esrefogullari — pencere içi madde — Künye f=1277; TDV'de 1277-1281 arasına düşen Eşrefoğlu olayı yok (1277 Konya saldırısı iskelette 'kuruluş' olarak; sonraki olaylar 1284-1288). 0 madde.
- pervane — pencere içi madde — Künye f=1277; TDV pervaneogullari'nda 1277-1281 arası olay yok (sonraki: 1296-97). Öncesi (Sinop 1259/1266) selcuklu+trabzon-rum maddesi olarak yazıldı, pervane taraf yazılmadı (künye aşımı). 0 madde.
- Mengücüklü Divriği kolu — Melik Sâlih kitâbesi 650 (1252) — TDV mengucukluler: 'melik unvanıyla anıldığı 650 (1252) tarihli kitâbe'. Künye t=1228 olduğundan mengucuklu taraf yazılırsa künye aşımı olur — MADDE AÇILMADI. Koordinatör künye dış zarfını 1252'ye genişletirse bu madde eklenebilir (Divriği Ulu Camii 626/1229, hisar kapıları 634/1236-37 ve 641/1243-44 de aynı kola ait tanıklıklar).
- Çaka Bey olayları (İzmir, Midilli, Sakız, Abidos 1086-1095) — Koordinatör hükmü: Çaka künyesi yok, taraf yazılmaz. Olaylar yalnız bizans taraflı yazılabilirdi ama Bizans'ın KAYBETTİĞİ yerlerin sahibi Çaka olur — sahibi olmayan toprak kaybı maddesi yanıltıcı olurdu. Tek aday selcuklu+bizans değil; I. Kılıcarslan'ın Çaka'yı öldürtmesi (488/1095 [?], TDV'nin kendisi soru işaretli) — yıl şüpheli, yazılmadı.
- Erzurum Selçukluları olayları (Tuğrul Şah 1202-1225, Cihan Şah 1225-1230) — Künye kararı 'Selçuklu içinde'. Balaban'ın Tuğrul Şah tarafından öldürülüşü ahlatsahlar iskeletinde (1208). Keykubad'ın Erzurum'u alışı (1230) için ay/gün veren TDV cümlesi bulunamadı; madde açılmadı.

### Grup B — kronoloji notları
- Künye başına madde (yalnız bu dosyadaki yeni maddeler; iskelet hariç; ortak maddeler her tarafa sayıldı): bizans 13 · latin-imparatorlugu 6 · iznik-imparatorlugu 11 · ahaya-prinkepsligi 4 · selanik-kralligi 0 · selanik-imparatorlugu 1 · epir-despotlugu 6 · trabzon-rum 6 · atina-dukaligi 0 · naksa-dukaligi 2. Toplam benzersiz madde 38.
- MÜKERRER ÇIKARILDI: Malazgirt (1071-08-26), İznik'in Bizans'a teslimi (1097-06-19) ve Miryokefalon (1176-09-17) selcuklu künyesinin devletler.js iskeletinde AYNI GÜNLE zaten var — yazılmadı. Bizans tarafı için kapıda o üç iskelet maddesine 'bizans' tarafı eklenmesi önerilir. Doğrulanmış TDV bizans alıntıları: '(26 Ağustos 1071)', 'İznik Bizans’a teslim oldu (19 Haziran 1097)', '… kılıçtan geçirildi (17 Eylül 1176)'.
- 3'ün altında kalanlar ve gerekçe: selanik-kralligi (21 yıllık Latin krallığı, kaynaklar yalnız kuruluş/son verir — ikisi iskelette), selanik-imparatorlugu (1225-1246; kuruluş 1225, Klokotnica 1230, 1242 unvan, 1246 son zaten iskelette — tek yeni: 1225 Edirne), atina-dukaligi (bkz. bulunamadi), naksa-dukaligi (1205 zapt + 1261 Ahaya bağlılığı; 1267 Napoli geçişi napoli künyesi 1282'de başladığı için taraf yazılamadı).
- Kıbrıs (kibris-krallik, kibris-isaakios) koordinatör hükmüyle ONCE1281-ORTADOGU'ya verildi — madde YAZILMADI. Devir için bulunmuş TDV maddeleri: antalya ('Antalya 1212’de Kıbrıslılar’ın eline geçti; fakat 22 Ocak 1216’da İzzeddin Keykâvus tarafından yeniden fethedilerek'), keyhusrev-i (1207 Antalya fethinde Kıbrıs yardımı), kibris (1207 Antalya, 1228 II. Friedrich, 1271 Baybars filosu, 1197 kral unvanı).
- Mükerrer kontrolü: devletler.js iskeletleri (bizans 1204-04-13 / 1261-07-25, trabzon 1204-01-01, atina 1205-01-01, naksa 1207-01-01) ve kunye_B iskeletleri (latin 1204-04-13 ×2 / 1261-07-25; iznik 1204-04-13 / 1208 / 1246 / 1259 Pelagonia / 1261-07-25; ahaya 1205 / 1259 / 1262 / 1278 / 1430; selanik-kr 1205 / 1225; selanik-imp 1225 / 1230 / 1242 / 1246) TEKRARLANMADI. Aynı güne düşen farklı olaylar: 1259 (Pelagonia iskelette; bu dosyada Palaiologos taç giymesi, Epir kaybı, Sinop — üçü ayrı olay), 1214 (antlaşma, Trabzon ilhakı, Korfu — ayrı), 1235 (Gelibolu, İstanbul kuşatması — ayrı), 1261 (07-25 iskelette; bu dosyada 08-15 taç giyme ve Nakşa bağlılığı).
- Başka oturumdan beklenen taraf kimlikleri (kapıda ayıklanacak): buyuk-selcuklu, bulgar-birinci, ani-bagratlilari, pecenekler.
- Çelişkiler: (1) selcuklu künyesi f=1075 ↔ TDV bizans 'Anadolu Selçuklu Devleti … (1078)'. (2) Epir üstünlüğü TDV 1265 ↔ Britannica 1264 (TDV esas). (3) Britannica 'John III Ducas Vatatzes' Klokotnica'yı (1230) Vatatzis'e yazar, 'Despotate of Epirus' ve TDV II. İvan Asen'e — kendi içinde tutarsız, Asen okunuşu esas. (4) Ahaya'nın Mora kalelerini devri: TDV 1262, Britannica 1259 (iskeletteki madde TDV).
- Ay hassasiyetli ve 01-01 yazılanlar: 1211 Antiokhia (Haziran), 1263 Selçuklu askerleri (bahar), 1259 Palaiologos taç (yıl başı) — gün alanında belirtildi.
- Kaynak arızaları: TDV izzeddin-keykavus-i ve malazgirt-savasi 302 (ölü slug); haclilar önbelleği paylaşılan dizinde bir kez 0 bayta inmişti (yeniden çekildi). Britannica: bölüm sayfaları (Byzantine-Empire/…) kesik geliyor; Baldwin I, Henry, Empire-of-Trebizond, Euboea, Boniface metni 404/boş. Tarayıcı panesi başka ajanla paylaşılıyor — bir sekme başka oturumca iranicaonline'a yönlendirildi; kendi sekmemi açıp devam ettim.

**bulunamadı:**
- Atina Dukalığı — 1205-1281 kronolojisi — TDV atina pencere içinde yalnız 1204 Haçlı zaptını verir (künye iskeletindeki 1205 kuruluşla aynı olay — mükerrer olur). Britannica yalnız 'After 1204 the dukes of Athens ... main base at Thebes' der, tarihli olay vermez. Othon/Guy de la Roche geçişi ve 1260 dük unvanı için akademik kaynak açılamadı (Britannica'da madde yok). Yıl uydurulmadı ⇒ 0 madde.
- Latin Selânik Krallığı — ara olaylar — TDV selanik ve Britannica yalnız kuruluş ve sonu verir (ikisi künye iskeletinde). Boniface'ın ölümü (1207), Selânik'in Theodoros'a düşüşünden önceki Epir kuşatması vb. tarihli haliyle açılan hiçbir kaynakta yok ⇒ 0 yeni madde.
- Selânik İmparatorluğu — 1237 Theodoros'un oğulları adına fiilî yönetimi — yalnız arama özetinde görüldü (Britannica sayfası metinde açılamadı) — yazılmadı.

### Grup C — kronoloji notları
- Alıntıların tamamı açılan metinden birebir: TDV gövdeleri önbellek dosyalarından (ONCE1281-ANADOLU-tdv-onbellek), Iranica SHADDADIDS ve ĀL-E HĀŠEM tarayıcı panesinde açılan sayfadan. WebFetch özeti kullanılmadı.
- İskelet tekrarı yok: devletler.js mevcut kronolojisi (gurcistan 1008/1121-08-12/1122/1184/1220 · kilikya-ermeni 1199-01-06/1247/1260/1269 · sirvansah 1027) ve kunye_C iskeletleri (seddadiler-ani 1123/1161/1163/1175 vb.) tarandı; aynı olay yazılmadı. 1161 Ani ve 1163 koalisyonu gurcistan için de önemli ama seddadiler-ani iskeletinde olduğundan tekrar edilmedi — koordinatör o iskelet maddelerine `gurcistan` tarafını ekleyebilir.
- Taraf kimlikleri: devletler.js (bizans, selcuklu, buyuk-selcuklu, suriye-selcuklu, irak-selcuklu, artuklu, memluk, mogol-imparatorlugu, kipcak, gurcistan, sirvansah, kilikya-ermeni) + kunye_A (danismendli, saltuklu, mengucuklu, ahlatsahlar) + kunye_C. Künyesi olmayanlar: 'zengiler', 'harezmsahlar' (ic_not'ta işaretli). Eyyûbî (Mısır-Suriye), Kudüs Krallığı, Rus, Erzen-Bitlis beyliği taraf yazılmadı.
- Çelişkiler (TDV esas alındı): Şeddâdî-Gürcü 1026 savaşı TDV'de Fazl zaferi, Iranica'da ~1027 Fazl yenilgisi · Kutalmış'ın Gence kuşatması TDV 1046-47 / Iranica 1047-48 · Ani'nin Gürcülere teslimi TDV 1123 / Iranica 1124 · İldeniz'in geri alışı TDV 1163 / Iranica 1164 · Şâhanşâh'ın kaybı TDV 1175 / Iranica 1174 · Ani'nin Bizans'a geçişi Iranica BAGRATIDS 1045 / Iranica SHADDADIDS 1044.
- Kilikya hânedan değişimi (Rubenî→Hetumî) yılı ölçülemedi: TDV yalnız 'I. Hethum zamanında (1219-1270)' der; 1219 madde tarihi TDV'nin dönem başı, taç/evlilik yılı değil.
- 1123 Şirvan ilhakı (TDV gurcistan) TDV sirvansahlar'da yok — kalıcılık ölçülemedi, haritaya işlenmesi önerilmez.
- 1266-08-24 Mari savaşı: Memlükler Kilikya şehirlerini yakıp yıktı ama kalıcı tutmadı (TDV haclilar) — harita toprak kaybı olarak işlememeli.
- Tarih türetmeleri ic_not'ta: 1162 ('ertesi yıl'), 1188 (önceki cümle), 1118 Urfa (önceki cümle), 1081 ('aynı yıl'), 1040 ('Around'), 1126 (yalnız Iranica).
- Harita önerisi: Filaretos 1082 Tarsus kaybı ve Urfa 1151 fetih maddeleri çıkarımlı taraf içerir (ic_not).

**bulunamadı:**
- samtshe-atabegligi — Pencere 1268-1281: iskeletteki 1268 kuruluş dışında açılan kaynaklarda (TDV ahiska, cildir-eyaleti, gurcistan) bu 13 yıla düşen tarihli olay YOK. Madde yazılmadı.
- vaspurakan-kralligi — Pencere 1000-1021: iskeletteki 1021 dışında tarihli olay bulunamadı. Iranica BAGRATIDS yalnız 'Saljuq Turks began attacking Armenia from the east early in the 1000s' der (yılsız); TDV van IX-X. yy genel.
- ani-bagratli-kralligi — Pencere 1000-1045: yalnız 1022 Dvin'in Şeddâdîlere geçişi bulundu (seddadiler-gence ile ortak madde). Gagik I'in ölümü, 1022 vasiyeti, Bizans'a devir süreci için açılmış kaynakta yıl yok. TDV'de 'ani' maddesi yok (302).
- lori-kralligi — Pencere 1000-~1101: yalnız ~1040 Ebü'l-Esvâr saldırısı (Iranica, yaklaşık yıl). Başka tarihli olay bulunamadı.
- kars-vanand-kralligi — Pencere 1000-1064: 2 yeni madde (1049/1053, 1058) + iskelet 1064. Başka tarihli olay yok.
- derbent-hasimi-emirligi — Pencere 1000-1065: yalnız Iranica'nın hükümdar ölüm yılları (1002, 1034, 1043). TDV derbend Selçuk-Oğuz akınlarını yılsız verir. Toprak olayı bulunamadı.
- filaretos-devleti — Urfa'yı Bizans'tan alışı (altı aylık kuşatma) TDV'de yılsız — yazılmadı.
