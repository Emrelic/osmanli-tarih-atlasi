# EPOK-SAHIP-1008 — 1281-01-01'deki İLK SAHİP kaynakla çelişiyor

> Oturum **EPOK-SAHIP-1008** · 9 Ekim 2026 · makine UMIT · ağaç `C:\atlas-epok`
> (detached `origin/makine/umit` = `23a7901a`) · görev UMIT İRTİBAT'tan.
> Girdi: `denetim/ZAMAN-Z6-1008.md` yan bulguları + `ZAMAN-Z6-*-ham/sinif.json` + `ZAMAN-Z6-tdv/` önbelleği.
> Rapor + UYGULANMAMIŞ diff. Commit/push yok.

## ① ÖNGÖRÜ — ölçümden ÖNCE yazıldı (9 Ekim 2026)

**Doğrulama (Z6'nın 13 kalemi):** 13'ün **~10'u** TDV gövdesinden birebir cümleyle DOĞRULANIR;
~2'si D208 (bölge cümlesi) ya da tuzak ⑧ (rakam başka şeyi tarihliyor) yüzünden ZAYIFLAR,
~1'i künye/hayalet sınıfına kayar (Malta: veri değil künye penceresi). En zayıf beklediklerim:
Veles (Sırp'a geçiş tarihsiz ⇒ 1281'deki sahip belirsiz), Alaşehir (TDV 1098 cümlesi 1281'i
tarihlemez — arada Selçuklu kuşatmaları var, ama Alaşehir 1390'a dek Bizans'ta kaldı; D206
iki uç).

**Sınıf (D205):** Levant 5'i = **dönem** kusuru (künyeler var, noktaya yazılmamış). Yemen =
dönem (künye var, kullanılmamış). Malta = **kimlik/hayalet** (künye 1282'de başlıyor; 1281-1282
arasına Hohenstaufen/Anjou-Sicilya kimliği gerek — `napoli` künyesini GENİŞLETMEK yanlış
çünkü 1282 Sicilya Akşamı'ndan önce "Napoli Krallığı" ayrı yoktu). Çanakkale/Uzunköprü =
**kuruluş** (`kur:`).

**Sınıf taraması (③):** Z6'nın ham/sınıf dosyalarında, tarihli TDV tanığı olup 1281'deki atlas
sahibiyle çelişen kayıt, Z6'nın andığı 13'ün DIŞINDA **~15-30** daha çıkar; çoğu Anadolu
(Selçuklu ↔ Karaman/Bizans/İlhanlı) ve İran (İlhanlı ↔ yerel hânedan) — bunların büyük kısmı
tâbiiyet ya da ardıl-kimlik farkıdır, gerçek çelişki ~5-10.

**Değişmez etkisi:** Levant'a Haçlı dönemleri girince 1289/1291 Memlük fetihleri yeni yabancı
kırılması olur; Akkâ 1291 için **madde var mı** bilmiyorum (öngörü: Trablus 1289 ve Akkâ 1291
maddeleri kronolojide VAR — çekirdek değil kuyrukta olabilir). 2s AÇIK +0..+3.

**Diff etkisi öngörüsü — `denetle.py` SONRA koşusundan ÖNCE (taban çıkış 2, yalnız D8 körlük):**
Değişmez 4 hayalet 0 KALIR (her yeni dönem künye penceresinin içinde). Değişmez 2 (Osmanlı) değişmez
(hiçbir `d:`/`v:` dokunulmadı). **2s AÇIK 185 → ~189** (Akkâ/Sayda/Beyrut 1291-05-18 ve Trablus
1289 maddelerle KAPANIR; Hama 1299, Aden/Zebîd 1454, Korfu 1386, Draç 1368, Veles 1330, Diyarbakır
1303 için madde yok ya da yeri/tarafı anmıyor) ⇒ tavan aşımı = **İHLAL, çıkış 1**. 5a-muaf 1 → 2
(Çanakkale `devir_beyani`) ⇒ tavan aşımı. Renksiz kimlik (kudus-kralligi · trablus-kontlugu ·
eyyubi-hama · resuli · tahiri · sicilya-kralligi) denetle'de ihlal OLMAYABİLİR ama motor bu
dönemleri BOYAYAMAZ ⇒ harita deliği (CLAUDE §8).

**Öngörü ↔ ölçüm:**
- **Doğrulama:** 13'ün 10'u doğrulanır demiştim. Ölçüm: **13/13 TDV cümlesiyle doğrulandı**, ama 3'ü şerhli:
  - Diyarbakır: D208, bölge cümlesi.
  - Hama: hicrî yıl aralığı.
  - Veles: "ardından" ⇒ YYYY-01-01 erken düşüyor.
- **Malta:** künye/hayalet sınıfı öngörüm tuttu.
- **Uzunköprü:** kusur sanmıştım, kusur DEĞİL (aşağıda).
- **Sınıf taraması:** "~15-30 ek" demiştim. Ölçülebilen evrende **14** çıktı, hepsi tek sınıf (Selçuklu ↔ İlhanlı vesâyeti), hiçbiri Levant tipi değil.
- **Değişmez etkisi:** 2s AÇIK +4 demiştim. Ölçüm +2 (iki GÜN birimi); maddeler yazılınca **0**.
- **5a-muaf aşımı:** doğru öngördüm.

---

## ② Doğrulama — 16 kalem, her biri TDV gövdesinden (Z6 önbelleği `ZAMAN-Z6-tdv/`)

Alıntılar diff'te birebir duruyor. 38 tırnak parçası önbellek gövdesinde alt-dizgi sınavından geçti. Regex'in yan cümlelere taşan 10 sahte "YOK"unu elle ayıkladım; gerçek eksik 0.

| # | Yer | Atlas 1281 | TDV (birebir) | Yeni ilk dönem(ler) | Sınıf (D205) | Şerh |
|---|---|---|---|---|---|---|
| 1 | Trablusşam | memluk | "Haçlılar’ın eline geçti ve burada bir Haçlı kontluğu kuruldu (1109)" · "688’de (1289) Sultan Kalavun şehri fethetti" | trablus-kontlugu →1289-01-01 | dönem | künye t 1289-04-26 kaynak değil ⇒ YIL; kronoloji_memluk 1289-01-01 ile aynı |
| 2 | Akkâ | memluk | "1291’de … el-Melikü’l-Eşref … Akkâ’yı da zaptetti" | kudus-kralligi →1291-05-18 | dönem | gün komşudan: kronoloji_memluk (TDV halil-b-kalavun), aynı olay |
| 3 | Sayda | memluk | "Julien şehri onlara teslim etti (659/1261)" · "Receb 690 / Temmuz 1291" | kudus-kralligi →1291-05-18 | dönem + kimlik | Templier ≠ krallık (şemsiye) · künye bitişine KIRPILDI (~6 hafta erken) |
| 4 | Beyrut | memluk | "Haçlılar burayı tekrar zaptettiler ve Kudüs Krallığı’na bağladılar" · "1291’e kadar Haçlılar’ın elinde kalan şehir" | kudus-kralligi →1291-05-18 | dönem | künye bitişine kırpıldı |
| 5 | Hama | memluk | "698’de (1298-99) ölümü üzerine Hama doğrudan Memlükler’in hâkimiyeti altına girdi" | eyyubi-hama →1299-01-01 | dönem | 698 H aralığı; 1310-1342 ikinci Eyyûbî dilimi KAPSAM DIŞI |
| 6 | Aden | yemen (Zeydî) | "1454’e kadar Resûlîler, 1517’ye kadar Tâhirîler" | resuli →1454 · tahiri →1517 · yemen →1538 | dönem | 1517-1538 ölçülmedi |
| 7 | Zebîd | yemen | "Resûlîler döneminde (1229-1454)" · "Tâhirîler döneminde de (1454-1517)" | resuli →1454 · tahiri →1516-06-20 | dönem | — |
| 8 | Korfu | venedik | "Sicilya (1259), Napoli (1267) … Venedik’e bağlandı (1386)" | sicilya-kralligi →1282-03-30 · napoli →1386 · venedik | dönem | Anjou 1267-1282 künyede sicilya-kralligi |
| 9 | Draç | venedik | "1273’te Sicilyalı Anjouvinler’in elinde" · "Charles Thopia 1368’de Draç’ı ele geçirdi" | sicilya →1282-03-30 · napoli →1368 · venedik | dönem | ⚠️ 1368-1392 THOPIA, künyesi yok ⇒ venedik altında AÇIK BORÇ |
| 10 | Malta | napoli | "Malta 1284’te Sicilya’yı ele geçiren Aragonlular’ın … hâkimiyetine girdi" | sicilya-kralligi →1282-03-30 · napoli | **hayalet** (napoli f 1282-03-30) | ⚠️ 1284-1530 napoli de YANLIŞ (Aragon, 1410 Kastilya) — kapsam dışı |
| 11 | Balyabadra | bizans | "1205’te … Franklar tarafından Bizanslılar’dan alındı … 1430’a kadar süren Mora Frank Prensliği’nin merkezi" | ahaya-prinkepsligi →1430 | dönem | kaydın eski 🔴 notu ("Akha künyesi YOK") kapandı |
| 12 | Alaşehir | selcuklu | "Türkler’in eline geçmeyen tek Bizans şehri olarak 1391’de … fethedilinceye kadar" | bizans →1300 | dönem, **D206 iki uç** | ⚠️ 1300-1390 germiyan ve 1390 OSM de bu cümleyle çelişir — kapsam dışı |
| 13 | Alanya | karaman | "1221 yılında …" · "1293’te Karamanoğlu Mecdüddin Mahmud Bey Alâiye’yi ele geçirerek" | selcuklu →1293 | dönem | — |
| 14 | Diyarbakır | artuklu | "1259’da Hülâgû … Anadolu Selçuklu Devleti’ne geri verildi" · "1303’te Gāzân Han Diyarbekir bölgesini …" | selcuklu →1303 · artuklu →1343 | dönem | 🟡 **D208**: 1303 BÖLGE cümlesi; kaydın kendi notu "AÇIK kalan 1281-1303" diyordu · ARTUKLU/EEK-DOGU diff'leriyle ÇAKIŞMA YOK (Diyarbakır'ı yalnız `m:` olarak anıyorlar) |
| 15 | Köprülü (Veles) | sirbistan | "1246’da … Vatatzis … Veles … geri aldı" · "1330 … Velbuzd Savaşı’nın ardından … Veles’i Bizanslar’dan alarak" | bizans →1330 · sirbistan →1371 | dönem | 🟡 olay 1330 yazı SONRASI, YYYY-01-01 birkaç ay erken |
| 16 | Çanakkale | bizans (kur yok) | "temeli Fâtih Sultan Mehmed döneminde atılmış olan bir XV. [yüzyıl]" · "caminin yapımı kaleden de önce 1452 yılındadır" | `kur:1452` + `devir_beyani` | **kuruluş** | Uzunköprü'yle aynı biçim |
| — | Uzunköprü | (kur 1443 VAR) | TDV `uzunkopru` gövdesi **BOŞ** (4 bayt), `uzunkopru--sehir` **302** | **DEĞİŞİKLİK YOK** | — | **kusur değil** (aşağıda) |

**Uzunköprü niye kusur değil:** kayıtta `kur:1443` + `devir_beyani` zaten var. Motor (`petek_epok()`) 1443 öncesi peteği komşulara devrediyor; o yıllarda görünen boya komşunun boyası. 5a'da muaf; tavan 1'in tek üyesi Uzunköprü.

**Hayalet kontrolü (§3.5):** her yeni dönem künye penceresinin İÇİNDE.
- kudus-kralligi 1099-1291-05-18 · trablus-kontlugu 1109-1289-04-26 · eyyubi-hama 1178-1342 · resuli 1229-1454
- sicilya-kralligi 1072-1282-03-30 · napoli 1282-03-30'dan itibaren · ahaya 1205-1430 · selcuklu 1308'e dek

Tek sapma tahiri'de: künye 1454-07-01'de başlıyor, veri TDV yılıyla 1454-01-01'de. Fark 6 ay, Değişmez 4d toleransının (400 gün) içinde, sayaca düşmedi. Ayrıca künyelerin kendi arasında 6 aylık boşluk var (resuli t 1454-01-01).

---

## ③ Sınıf taraması — Z6 ham/sınıf dosyaları

**Evren:** 1263 kayıttan tarihli zincir taşıyan **80** kayıt (sınıf ②).
- ③k/③b/③y: **153** kayıt zincir TAŞIMIYOR. Tanık cümleleri var ama sahip okunmamış ⇒ otomatik karşılaştırma **ÖLÇÜLEMEDİ**, evren dışı.
- 1025 kayıtta tarihli tanık yok.

**Ölçüm:** zincirin 1281'den önceki son halkasını atlasın 1281 sahibiyle (harita anahtarıyla) karşılaştırdım ⇒ **14 çelişki**, hepsi Anadolu, hepsi TEK SINIF:
```
selcuklu (TDV) ↔ ilhanli (atlas): Kayseri · Tokat · Sivas · Erzincan · Erzurum · Van · Bitlis ·
                                   Kırşehir · Bayburt · Elbistan · Kemah            (11)
selcuklu ↔ ahiler: Ankara · selcuklu ↔ pervane: Sinop · selcuklu ↔ cobanogullari: Çankırı (3)
```

**Hüküm:** bunlar Levant tipi çelişki DEĞİL.
- TDV tanıkları 1281'i tarihlemiyor (1142-1266). Tuzak ⑧: rakam fethi tarihliyor, 1281'deki sahibi değil.
- Z6 kendisi not düşmüş: "1243 Kösedağ sonrası … Selçuklu'yu kaldırmadı — vesâyet `v:` önerilmedi; 1281'de mevcut veri ilhanli".
- Sınıf: **modelleme (D205: kimlik)**, yani İlhanlı vesâyetindeki Selçuklu toprağının hangi kimlikle boyanacağı. Koordinatör kararı; diff'e GİRMEDİ.
- Z6'nın elle okuduğu 13'ün dışında **yeni Levant tipi kalem: 0**.

---

## Kapı — `py arac/denetle.py` (ağaç 23a7901a, D8 girdileri `kodla.py coz-c` ile kurulu)

| koşu | çıkış | ne |
|---|---|---|
| taban | **2** | yalnız D8 körlük (18 hat,gün); ihlal 0 |
| KOORD diff | **1** | 2s AÇIK 185→**187 ✗** · 5a-muaf 1→**2 ✗**. Yeni AÇIK GÜN birimleri: 1282-03-30 (Draç · Korfu · Malta) ve 1291-05-18 (Akkâ · Beyrut · Sayda). Akkâ maddesi var ama KUYRUKTA, Değişmez 2 evreninin dışında. |
| KOORD + KRONO | **1** | 2s AÇIK **185 ✓** (iki madde 6 birimi YER anarak kapattı; 2sk YER 2071→2077). Kalan TEK ihlal: **5a-muaf 2 > tavan 1** (Çanakkale). |

**Diğer hareketler (ihlal değil):**
- 2s yabancı 1722→1725 · kapsam dışı 791→792.
- Yıl-temsilî 165→169: Trablus 1289, Hama 1299, Aden/Zebîd 1454, Korfu 1386, Draç 1368, Veles 1330, Diyarbakır 1303 (`YYYY-01-01` kovası).
- **4d 324→323 — iyileşme:** Malta napoli hayaleti kapandı; tavan 323'e İNMELİ.
- Kaynaksız `s:` 1912→1905 (iyileşme).
- 3z m: 489→505 (şema borcu).
- 7 enklav 733→734 (🧊, ihlal sayılmıyor).

**Tavan önerileri (§3.4, aynı commit):**
- **5a-muaf 1 → 2:** Çanakkale, beyanlı muafiyet. LİSTE: Uzunköprü + Çanakkale.
- **4d 324 → 323.**

5a tavanı yazılmadan kapı 1 verir. Yazılınca kalan tek fark D8 körlüğü olur, yani tabanla aynı kova (2). Bu son hâli tavanlar yazılmış olarak ayrıca koşturmadım.

---

## 🔴 BOYA ŞARTI — bu KOORD diff BOYA İNMEDEN UYGULANMAZ

Diff'in yazdığı 6 kimliğin **BOYALAR'da rengi YOK**: `kudus-kralligi · trablus-kontlugu · eyyubi-hama · resuli · tahiri · sicilya-kralligi` (sonuncusu künyede `boya_gerekli:true`).
- Rengi olmayan `s:` kimliği **boyanmaz** (CLAUDE §8) ⇒ 1281-1454 arası Levant, Yemen ve Adriyatik noktalarında harita deliği açılır.
- `renkler.py` MOTOR TUZUDUR ⇒ boyalar yalnız **tam inşa** koşusunda, diff ile AYNI anda iner.

`renk_olc.py --oner` önerisi (artefakt `denetim/oneri-20261009-143252.txt`; ağaçla birlikte silindi, değerler burada):
```
kudus-kralligi   #8ad824  ΔE 13.1      trablus-kontlugu #ae24d8  ΔE 13.0
eyyubi-hama      #d89c24  ΔE 12.3      sicilya-kralligi #24bacc  ΔE 12.4
resuli           #6cd824  ΔE 17.9      tahiri           #72d824  ΔE 16.9
```
⚠️ **resuli ile tahiri neredeyse AYNI renk** (#6cd824 / #72d824). Araç yalnız MEKÂN komşuluğuna bakıyor; oysa ikisi aynı noktalarda (Aden, Zebîd) ZAMANDA ardıl ⇒ 1454 geçişi haritada GÖRÜNMEZ. Biri yeniden seçilmeli. Renk diff'ini yazmadım: tuz dosyası, onay ister.

---

## Teslim — ① ölçtüm · ② bulamadım · ③ istiyorum

**① Ölçtüm:** yukarıda (§②, §③ ve Kapı).

**② Bulamadım:**
- Draç 1368-1392 için Thopia künyesi.
- Kapsam dışı kalan doğru dilimler (cümleleri yukarıda): Malta 1284-1530 · Alaşehir 1300-1391 · Hama 1310-1342 ikinci Eyyûbî dilimi.
- Aden 1517-1538 sahibi.
- ③k/③b/③y 153 kaydın otomatik karşılaştırması (zincir yok).
- Uzunköprü TDV gövdesi (boş / 302).

**③ İstiyorum:**
1. İki diff **AYNI commit**'te, tavanlarla (5a-muaf 2 · 4d 323) birlikte:
   - `EPOK-SAHIP-1008-KOORD.diff`: `data/yerlesimler.js` 14 kayıt + `data/yerlesimler_ok107.js` Veles. Yalnız 1281-01-01 → ilk değişim aralıkları, bir de Çanakkale `kur:`.
   - `EPOK-SAHIP-1008-KRONO.diff`: `data/olaylar_ek5.js` — 1282-03-30 Sicilya Akşamı · 1291-05-18 Akkâ/Sayda/Beyrut.
2. Bu commit **6 boyayla birlikte TAM İNŞA**da insin; resuli/tahiri renk çakışması önce çözülsün. Boya yoksa diff'i bekletin — yarım inmesi haritada delik açar.
3. Aynı cümlelerden çıkan kapsam dışı kusurlar ayrı iş olsun: Malta 1284 Aragon · Alaşehir 1300-1391 Bizans · Draç Thopia · Hama 1310-1342 · Selçuklu↔İlhanlı vesâyet modeli (14 kayıt).

**Dosyalar:** `denetim/EPOK-SAHIP-1008.md` · `denetim/EPOK-SAHIP-1008-KOORD.diff` · `denetim/EPOK-SAHIP-1008-KRONO.diff`. Taban `origin/makine/umit` = `23a7901a`; iki diff de `git apply --check --cached` temiz, LF (CR 0).

---

## § v2 (1009) — KOORD diff'i bugünkü `origin/main` (`36186769`) üzerinde YENİDEN TÜRETİLDİ

> 9 Ekim 2026 · makine UMIT · geçici ağaç `C:\atlas-umit-epok` (detached `origin/main` = `36186769`, iş sonunda kaldırıldı).
> Commit/push yok. Yöntem: eski diff'in her `-` satırı main'de BİREBİR arandı, `+` satırıyla değiştirildi, diff `git diff`ten alındı.
> İçerik eski diff'le aynı: 33 `+`/`-` satırının sıralı kümesi BİREBİR eşit (Python ile sınandı). Kaynak alanlarına dokunulmadı, yeni hiçbir şey eklenmedi.

### ① Ankara sorusu — CEVAP: yalnız BAĞLAM satırı
- EPOK-KOORD Ankara kaydını **değiştirmiyordu**. Ankara, Çanakkale hunk'ında (`@@ -159`) Bergama'dan sonraki **bağlam** satırıydı.
- Main'de o satırı `23c08363` (DALGA 3, ANKARA-1406 hükmü) değiştirdi: 1404-03-01→1406-01-01 `mehmed-celebi`, 1406-01-01→1411-02-17 `suleyman-celebi` (`kesinlik f:yil`), kaynak alanları ANKARA-1406 beyanıyla yeniden yazıldı.
- EPOK'un Ankara'ya ilişkin tek sözü §③ taramasıdır ("selcuklu ↔ ahiler", 1281'deki sahip). Bu bir **koordinatör kararına bırakılmış modelleme sorusudur**, diff'e GİRMEDİ.
- ANKARA-1406 1281 dilimine dokunmuyor. Main'de Ankara hâlâ `1281-01-01→1354-08-01 ahiler`.
- ⇒ **Çelişki YOK.** ANKARA-1406 hükmü ezilmedi. v2'de Ankara satırı main'deki hâliyle bağlamdadır.

### ② Hunk sınıflaması (12 hunk; eski satır no → main satır no)

| hunk | kayıt | sınıf | not |
|---|---|---|---|
| 1 `-159` | Çanakkale | **BAĞLAM KAYDI** | hedef satır main'de birebir. Bağlamdaki **Ankara**yı `23c08363` (ANKARA-1406) değiştirdi. |
| 2 `-209` | Alanya | TEMİZ | |
| 3 `-245` | Diyarbakır | **BAĞLAM KAYDI** | hedef birebir. Bağlamdaki **Ardahan**'ı `658a7552` (DALGA 1, DOGU-SAFEVI-0086 H-0009) değiştirdi: akkoyunlu→safevi 1514-09-06 → 1501-07-01, "gün komşudan: Kars". |
| 4 `-382` | Balyabadra (Patras) | TEMİZ | |
| 5 `-437` | Draç | TEMİZ | |
| 6 `-726` → `-728` | Hama · Beyrut · Trablusşam · Akkâ | **BAĞLAM KAYDI** | hedefler birebir. Bağlamdaki **Gazze**ye `658a7552` (DALGA 1) `d:` kaynak alanı eklendi ("gün komşudan: Hanyûnus çatışması"). |
| 7 `-783` → `-785` | Zebîd · Aden | TEMİZ (kayma +2) | |
| 8 `-970` → `-982` | Sayda | TEMİZ (kayma +12) | |
| 9 `-1020` → `-1032` | Malta | TEMİZ | |
| 10 `-1425` → `-1442` | Korfu | TEMİZ | |
| 11 `-1753` → `-1776` | Alaşehir | TEMİZ | |
| 12 ok107 `-394` | Köprülü (Veles) | TEMİZ | hedef satır dosyada 4 kez geçiyor (Veles · İştip · Ustrumca · Doyran'ın aynı `s:` satırı) ⇒ ön-bağlamla (Veles başlığı) tekilleştirildi. |

- ZATEN MAIN'DE: **0**.
- GERÇEK ÇAKIŞMA: **0**. 16 hedef satırın 16'sı main'de birebir duruyor; hiçbir commit EPOK'un değiştirdiği kayıt satırına dokunmamış.
- Eski diff'in `-C0`da da düşmesinin sebebi üç bağlam satırı: Ankara · Ardahan · Gazze.

### ③ KRONO diff
- `EPOK-SAHIP-1008-KRONO.diff` (`data/olaylar_ek5.js`, +2 madde) bugünkü main'e **olduğu gibi temiz uyuyor**: `git apply --check` ✓, bağlam azaltma yok.
- KOORD-v2 ile birlikte uygulanınca `git diff HEAD --stat` = 3 dosya, 18+/16−.
- ⇒ **KRONO-v2 YAZILMADI**, gerek yok.
- Yinelenme kontrolü: 1282-03-30 / 1291-05-18 günü main'de yalnız KUYRUK dosyalarında geçiyor (`kronoloji_italya` · `_memluk` · `_rodos_sovalyeleri` · `_venedik`), Değişmez 2 evreninde madde yok.

### ④ Kapı — `PYTHONHASHSEED=0 py arac/denetle.py --ayrinti` (`36186769`, D8 girdileri KURULMADI)

| koşu | çıkış | sebep |
|---|---|---|
| taban | **2** | yalnız D8 ÖLÇÜLEMEDİ (`devletler_harita.js` yok) |
| + KOORD-v2 | **1** | 2s AÇIK 181→**183 ✗** (tavan 181) · 5a-muaf 1→**2 ✗** (tavan 1) |
| + KOORD-v2 + KRONO | **1** | yalnız **5a-muaf 2 > tavan 1** (Çanakkale) · 2s AÇIK **181 ✓** |

Değişen sayaçlar, taban → KOORD+KRONO (öteki bütün `Değişmez`/`Ek denetim` satırları birebir aynı):
- **2s YABANCI 1735 → 1738 (+3)** · AÇIK 181 → 181 · KAPSAM DIŞI 791 → 792 · YIL-TEMSİLÎ 170 → 174.
- **2s AÇIK listesi önce/sonra BİREBİR aynı.** Liste `denetle.py`nin kendi `yil_temsili_ayir` çıktısından döküldü (181 satır, fark 0).
  - KOORD tek başına iki GÜN birimi açar: `1282-03-30 Draç · Korfu · Malta` ve `1291-05-18 Akkâ · Beyrut · Sayda`.
  - KRONO ikisini YER anarak kapatır.
- **2sk YER 2116 → 2122 (+6)** · kapalı 4231 → 4237 · yalnız-taraf 2265 = 2265.
- **YIL-TEMSİLÎ +4:**
  - yeni kova: `1289-01-01 Trablusşam` · `1299-01-01 Hama` · `1303-01-01 Diyarbakır` · `1368-01-01` (Draç; Borneo kovasıyla AYNI güne düştü, o kova kapsam dışından kapsam içine geçti).
  - mevcut kovaya katılan: `1330-01-01 Köprülü (Veles)`.
  - KAPSAM DIŞI +1: −1368 +1454 +1517 (Aden/Zebîd).
- **4d 326 → 325** (başlık satırı, beklenen 326). Alt dökümde 4d-yalnız 324 → 323, BİRLEŞİK 442 → 441.
  - çıkan: `Malta napoli 1281-01-01→1530-03-24, künye 1282-03-30` (napoli 24 → 23 dönem).
  - İyileşme; ihlal değil.
- **5a-muaf 1 → 2 ✗:** yeni üye `Çanakkale kur:1452-01-01 · ilk dönem 1281-01-01 (bizans) · beyan EPOK-SAHIP-1008 · TDV canakkale`. LİSTE: Uzunköprü + Çanakkale.
- 3z `m:` 492 → 505 · `kd:` 59 → 65 (şema borcu).
- 5c 2450 → 2449 (Çanakkale `kur:` aldı).
- D7 🧊 738 → 739 (yeni A-koridor: `1368-01-01 Draç → venedik 244 km`; ihlal sayılmıyor).
- kaynaksız `s:` 1887 → 1880 (iyileşme).
- kronoloji 2221 → 2223.

**1009 ölçümüyle karşılaştırma** (`EPOK-SAHIP-OLCUM-1009.md`, taban `1edf7f9a`):

| sayaç | 1009 ölçümü | v2 ölçümü (`36186769`) | hüküm |
|---|---|---|---|
| 2s YABANCI | +3 | +3 | TUTUYOR |
| 2s AÇIK net (KRONO ile) | 0 | 0, liste birebir | TUTUYOR |
| 4d | −1 (324→323) | −1 (326→325; 4d-yalnız 324→323) | TUTUYOR. Taban mutlak sayı 324'ten 326'ya kaymış; EPOK'un payı yine −1, aynı kalem (Malta). |
| 5a-muaf | +1 (ihlal) | +1 (ihlal) | TUTUYOR |
| YIL-TEMSİLÎ | 166 → 170 (+4) | 170 → 174 (+4) | TUTUYOR, aynı kalemler |
| KAPSAM DIŞI | +1 | +1 | TUTUYOR |
| 2sk YER | +6 | +6 | TUTUYOR |

**Aynı sayaçlara dokunan bekleyen diff'ler** (her birinin kendi raporundan okundu; burada koşturulmadı):
- **ZAMAN-PAKET-1009:** 2s YABANCI 1735→1736 (+1) ve YIL-TEMSİLÎ 170→171 (+1, Lapaha). Kendi raporu 2s AÇIK 181'i değiştirmediğini yazıyor; 5a-muaf ve 4d'ye dokunmuyor.
  - EPOK kayıtlarına dokunan satırı YOK. Tek ortak ad, `kronoloji_cok_1923_1945.js`deki Şeyh Said maddesinin `yer_id:"Diyarbakır"` alanı (kuyruk dosyası).
  - Ama `arac/denetle.py`yi de değiştiriyor ⇒ ikisi birlikte inerse 2s YABANCI'nın beklenen toplamı **+4**. Birlikte ölçülmedi.
- **KRONO-SONRA1923-EKSIK A/B:** yalnız `kronoloji_cok_1923_1945.js`. Kendi raporları `denetle.py` satırlarının birebir aynı kaldığını yazıyor.
- **KRONO-GORUNURLUK** (TUR · TUR2 · SUZGEC): kuyruk kronoloji dosyaları + `js/suzgec.js`. Raporu `denetle.py`nin değişmediğini yazıyor.
- ⇒ EPOK'un dokunduğu 5a-muaf · 4d · 2s AÇIK sayaçlarına bu üç aileden hiçbiri dokunmuyor.

### ⑤ Teslim — ① ölçtüm · ② bulamadım · ③ istiyorum

**① Ölçtüm:** yukarıda §①-④.

**② Bulamadım / ölçmedim:**
- D8 (8a/8b) bu ağaçta ölçülemedi: `kodla.py coz-c` kurulmadı. Veri diff'i motor çıktısını koşu olmadan değiştirmez, 1009'da da aynı kaldı.
- ZAMAN-PAKET-1009 ile birlikte ortak ölçüm yapılmadı.
- BOYA ŞARTI hâlâ açık: 6 kimliğin `arac/renkler.py`de rengi yok (`kudus-kralligi · trablus-kontlugu · eyyubi-hama · resuli · tahiri · sicilya-kralligi`; `36186769`da grep 0).
- Künye pencereleri 1008'deki gibi (`devletler.js`ten yeniden okundu).

**③ İstiyorum:**
- KOORD-v2 + KRONO **aynı commit'te**, tavan kararlarıyla birlikte. Tavan sayısı önermiyorum; yukarıda yalnız ölçülen sayılar var.
- 1008'deki BOYA ŞARTI (tam inşa + 6 boya, resuli/tahiri renk çakışması) aynen geçerli.

**YENİ DOSYALAR:**
- `denetim/EPOK-SAHIP-1009-KOORD-v2.diff`: `origin/main` `36186769`a karşı, LF, BOM yok, CR 0, 54.431 bayt. Temiz ağaçta `git apply --check` ✓, KRONO ile birlikte de ✓.
- `EPOK-SAHIP-1008-KRONO.diff` değişmedi ve geçerli.
- Bu bölüm `denetim/EPOK-SAHIP-1008.md`ye eklendi.
