# 98 · Kiev Rus'u — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 2026-11-04 (ölçer `top100_olc.py kiev-rusu galicya-volhinya`; yerleşim s: dökümü `denetle.yerlesimleri_yukle`)

## Özet
- Künye 1 (`kiev-rusu`); ardıl knezlikler ayrı künye (galicya-volhinya, vladimir-suzdal, novgorod, cernigov-knezligi, ryazan, smolensk-knezligi, kiev-knezligi-litvanya) — yalnız sınır.
- 11 yerleşim, 15 kırılma günü, **AÇIK 8** (+ yalnız otomatik maddeyle kapanan 0).
- Eksik kronoloji maddesi önerisi: 6 (aşağıda c). Düzeltme önerisi: 9 s: dönemi / 3 madde.
- En ağır 3 bulgu: (1) 882-1000 arası haritada **yalnız Kiev** var; Novgorod, Smolensk, Çernigov, Ryazan, Suzdal 1000-01-01'den başlıyor (kaynaksız tek tip tarih; Ryazan ve Suzdal için ayrıca anakronik). (2) `olaylar_ortacag_bozkir.js:21` Kiev'in alınışını `1240-01-01` yazıyor (ay Aralık, TDV Batu Han md.) — künye t=1240-12-06 ile 11 ay fark. (3) Tartu s: 1060'tan başlıyor, evrendeki Yuryev kuruluş maddesi 1030 (30 yıl boşluk/uyuşmazlık).

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| kiev-rusu | Kiev Rus'u | 0882-01-01 | 1240-12-06 | ana künye; ic_not'ta parçalanma beyanı var |
| galicya-volhinya | Galiçya-Volhinya | 1199-01-01 | 1340-01-01 | ardıl, yalnız sınır (0 açık kırılma) |
| kiev-knezligi-litvanya | Kiev Knezliği (Litvanya vasalı) | 1362-01-01 | 1471-01-01 | ardıl |
| vladimir-suzdal, novgorod, cernigov-knezligi, ryazan, smolensk-knezligi | s: dizilerinde görünür | — | — | ardıl; künyeleri bu denetimde ölçülmedi |
Eksik evre: yok (Rurik/Novgorod 862 öncesi Rus başlangıcı künye dışı, atlas 882'yi esas alıyor). Kiev'in 1240-1362 arası sahibi `altinorda` (evren: kronoloji_sinir_once1281_geriye.js:26, 1242 hâkimiyet başladı) — tutarlı.
**MÜKERRER** künye yok.

## b) f/t ve evreler
| uç | atlas | kaynak 1 | kaynak 2 | hüküm |
|---|---|---|---|---|
| f | 0882-01-01 | Encyclopedia of Ukraine (künye alıntısı, «In 882 they were killed by Prince Oleh…») — bu denetimde ilgili sayfa `…KyivanRusDA.htm` 404 verdi, çekilemedi; künyenin kaydına güveniliyor | TDV «Kiev» md. 882'yi vermiyor (yalnız Batu md.'nde 1240); TDV «Rusya» md.: kuruluş yılı yok (künye ic_not_f'sinde beyanlı) | yıl düzeyi (882) kabul; 2. bağımsız akademik kaynak **okunamadı**: Primary Chronicle (PVL, Cross-Sherbowitz) 882 maddesi önerilir (birincil neşir) |
| t | 1240-12-06 | TDV «Batu Han» md.: «1240 Aralık ayında Kiev zaptedilerek tahrip edildi.» (okundu) | EU «Tatars» (6 Dec 1240; künye ic_not_t'ye göre) — bu oturumda okunamadı | ay Aralık TDV ile doğrulandı; gün 6 yalnız EU'da → "gün yalnız tek kaynakta" notu doğru. Not: künye içinde `ic_not` ("6 Aralık günü EU'da okunmadı") ile `ic_not_t` ("gün EU 'Tatars'tan") **çelişiyor** — birini düzelt. Takvim: 6 Aralık Jülyen (1582 öncesi) kaynaktaki gibi kalır. |
Evre sınırları (parçalanma 1132 vb.) künyede yalnız `ic_not_t` içinde; evre künyesi yok, değişiklik önerilmez.

## c) Kronoloji (Değişmez 2 evreni)
Var olanlar:
- Kuruluş 862 Rurik/Novgorod: olaylar_ortacag_italya_dogu_avrupa.js:13; 882 Oleg Kiev: :16 (künye ile uyumlu)
- 907/911 Oleg-Bizans: :19-:20 · 957 Olga: :26 · 972 Svyatoslav: :30 · 980 Vladimir: :31 · 988 vaftiz 1988-08-01 (yalnız Ağustos teyitli değil, madde "1" yazmış): :32
- 1015 Vladimir ölümü :40 · 1019 Yaroslav :41 · 1026 Horodok :44 · 1030 Yuryev :47 · 1036 :51 · 1054-02-20 Yaroslav ölümü :58 · 1097 Liubech :73 · 1113 Monomakh :79 · 1125 :85 · 1156 :97 · 1157 Andrey Bogolyubskiy :100 · 1169-03-08 Kiev yağması :107 · 1199 :121 · 1237 :138 · 1253 :146
- 1239 Danylo Kiev: olaylar_ortacag_bekleyen_acik.js:163 · **1240-12-01** Batu Kiev "Rus'un sonu": :164 · 1240-01-01 Kiev zaptı: olaylar_ortacag_bozkir.js:21 (**HATALI**, bkz. aşağı) · 1238 Moskova yağması :19 · 1239-10-18 Çernigov :20
- Ardıl sınırlar: kronoloji_sinir_once1281_zincir_bati.js:20 (1024 Listven), :22 (1054 Smolensk); kronoloji_sinir_once1281_geriye.js:25-26 (1242 Altın Orda), :50-51 (Novgorod 1136, Ryazan 1129 — **"hâkimiyeti başladı" satırları**); kronoloji_sinir_lehistan_ukrayna_1028.js:49,50,54 (Lutsk 1085, Volodymyr-Volynskyi 988, Galiçya-Volhinya 1199)
- Evren dışı (künye `kronoloji:`): 1223-05-31 Kalka, 1240-12-06 `son`, vb. — var, evren dışı.

Hatalar / tutarsızlıklar:
1. `olaylar_ortacag_bozkir.js:21` "Moğollar Kiev'i zaptedip tahrip etti" `1240-01-01` → ay TDV'de Aralık. Öneri: `1240-12-06`, yoksa `1240-12-01` (bekleyen_acik:164 ile birleştir; iki madde aynı olay — tekille).
2. `bekleyen_acik.js:164` `1240-12-01` ile künye `1240-12-06` 5 gün fark (±30 içinde, senkron bozulmaz); gün birliği için 06 öner (gün kaynağı EU).
3. `italya_dogu_avrupa.js:32` 988 vaftizi `0988-08-01` yazılmış; PVL/EU yalnız yıl veriyor (ay teyidi gösterilmemiş) → "Tarih uydurma" riski; öneri `0988-01-01` + beyan. (Ağustos için kaynak okunmadı.)

Önerilen eksik maddeler (kaynak okunmadan YAZMAYIN; kaynak sütunu aday):
```
{ t:"1147-04-04", b:"Moskova ilk kez anıldı: Yuri Dolgorukiy Svyatoslav'ı Moskova'da ağırladı", yer_id:"Moskova", kaynak:"Hypatian Chronicle 1147 (PVL devamı) — gün doğrulanmadı; DOĞRULA" }
{ t:"1108-01-01", b:"Vladimir Monomakh Klyazma üstünde Vladimir şehrini kurdu", yer_id:"Vladimir", kaynak:"Laurentian Chronicle 1108 — yalnız yıl; DOĞRULA" }
{ t:"1024-01-01", b:"Suzdal'da kıtlık ayaklanması (PVL'de Suzdal'ın ilk anılışı); Yaroslav bastırdı", yer_id:"Suzdal", kaynak:"PVL 1024 — DOĞRULA" }
{ t:"1157-01-01", b:"(MEVCUT madde :100'e odak_yer ekle) Moskova", ... }  // Moskova kaybı 1157 için yer şartı
{ t:"1199-01-01", ... (MEVCUT :121'e odak_yer ekle) "Lutsk" }
{ t:"1024-01-01", ... (MEVCUT zincir_bati:20'ye odak_yer ekle) "Ryazan" }  // yalnız Ryazan 1024 s: sınırı kalırsa
```

## d) Harita uyumu
Yerleşim sayısı: 882-1000: **1** (Kiev), en geniş 1001: 7, 1239: 1. Açık kırılma **8/15**:
| gün | yerleşimler | sorun / öneri |
|---|---|---|
| 1000-01-01 kazanç | Novgorod, Ryazan, Smolensk, Çernigov | "1000" gerçek bir olay değil (Macaristan/Venedik maddeleri en yakın). Novgorod Oleg'in 882'de güneye inişinin çıkış noktası (evren :13,:16); Smolensk PVL'de 882 Oleg seferiyle ilişkilendirilir; Çernigov 907 antlaşma listesinde. **Öneri:** Novgorod `0882-01-01`, Smolensk `0882-01-01`, Çernigov `0907-01-01` (PVL; DOĞRULA, tek kaynak aday); **Ryazan'ın `kiev-rusu` dönemini kaldır** (Pereyaslavl-Ryazan 1095-96'da kurulur, kaynak: Ryazan Vakayinamesi/EU; 1129 ryazan künyesi var) — 1000-1024 sahipliği kaynaksız. |
| 1001-01-01 kazanç | Suzdal | Suzdal'ın ilk anılışı 1024 (PVL); 1001 uydurma. Öneri: `1024-01-01` + madde (c). |
| 1024-01-01 kayıp | Ryazan | 1000-1024 dönemi kaldırılırsa kırılma kendiliğinden düşer. |
| 1060-01-01 kazanç | Tartu | Yuryev 1030'da kuruldu (evren :47); öneri `1030-01-01` (Peipus çevresi fethi; 1061 Sosol'un Yuryev'i yıkması ayrı olay, bu tür sahiplik kesintisi bildirilmemiş — DOĞRULA). |
| 1101-01-01 kazanç | Vladimir | Vladimir 1108'de kuruldu (aday: Laurentian). Öneri `1108-01-01` + madde. |
| 1147-01-01 kazanç | Moskova | İlk anılış 1147 (Hypatian); öneri madde yukarıda; s: başlangıcı `1147-04-04` (DOĞRULA). |
| 1157-01-01 kayıp | Moskova | Aynı gün Vladimir/Suzdal için madde var (:100) ama yer şartı Moskova'yı kapsamıyor → `odak_yer` ekle. |
| 1199-01-01 kayıp | Lutsk | Madde var (:121 ve lehistan_ukrayna:54) ama yer şartı Lutsk'u kapsamıyor → odak_yer ekle. |
Diğer açık olmayan ama şüpheli: Çernigov `kiev-rusu` 1000-1024, sonra `cernigov-knezligi` 1024; Smolensk bitişi 1054 ve Novgorod 1136 kaynaklı (evrende karşılığı var). 1240-12-06 sonrası Kiev boş değil (Altın Orda).
En geniş an (1001: 7 yerleşim): Kiev, Novgorod, Smolensk, Çernigov, Ryazan, Suzdal, Volodymyr-Volynskyi — Ryazan ve Suzdal 1001'de **anakronik** (yukarı). Büyük şehirler eksik (en geniş yılda): Polotsk (987-988 Rogneda; ilk anılış 862), Pereyaslavl, Rostov, Turov, Belgorod, Ladoga; hepsi için PVL ilk anılış tarihi + s: önerisi ayrı bir veri işi (yerleşim yoksa petek yok → bu bölgeler komşu peteğe emiliyor).

## Önerilen düzeltmeler (KASA için)
1. `data/olaylar_ortacag_bozkir.js:21`: `t:"1240-01-01"` → `t:"1240-12-06"` (kaynak TDV «Batu Han»: «1240 Aralık ayında Kiev zaptedilerek…»); aynı olayın `bekleyen_acik.js:164` kopyasını tekille ya da gününü `1240-12-06` yap.
2. `data/devletler.js` kiev-rusu: `ic_not` ve `ic_not_t` içindeki 6 Aralık beyanlarını tekdüze yap.
3. Yerleşim s:: Novgorod `kiev-rusu` f→`0882-01-01`; Smolensk f→`0882-01-01`; Çernigov f→`0907-01-01`; Ryazan kiev-rusu dönemini sil (000→1024); Suzdal f→`1024-01-01`; Tartu f→`1030-01-01`; Vladimir f→`1108-01-01`; Moskova f→`1147-04-04` (hepsi DOĞRULA).
4. Mevcut maddelere `odak_yer`: 1157 (:100) + Moskova; 1199 (:121) + Lutsk; 1024 (zincir_bati:20) + Ryazan (yalnız Ryazan 1024 sınırı korunursa).
5. 988 vaftiz `0988-08-01` → `0988-01-01` + ic_not (ay kaynaklı değilse).

## Erişilemeyen kaynaklar
- Encyclopedia of Ukraine «Kyivan Rus'» (Zhdan): `…pages\K\Y\KyivanRusDA.htm` bulunamadı (404 benzeri). Soru: 882 Oleh/Kiev ve 1132 parçalanma ifadeleri.
- TDV «Kiev» md. yalnız Batu md.'nden 1240'ı verdi; 882/988/1036 için TDV «Rusya» md. tam metni okunmadı (soru: Rus devletinin kuruluş ve vaftiz yılı).
- Primary Chronicle (Cross & Sherbowitz-Wetzor, Cambridge MA 1953): 882, 907, 988, 1024, 1030 (Yuryev), 1095-96 (Ryazan), 1108 (Vladimir) maddeleri; Hypatian 1147 Moskova günü.
- Britannica «Kievan Rus» (403 verir).
