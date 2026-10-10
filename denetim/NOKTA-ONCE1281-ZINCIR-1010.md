# NOKTA-ONCE1281-ZINCIR-1010 — sekiz zincirli nokta için inmeye hazır diff (+ 14 kronoloji maddesi)

**Oturum:** NOKTA-ONCE1281-ZINCIR-1010 (EMRELIC, Opus) · **Taban:** `origin/main` `7d7b5ee1`
(worktree `C:\atlas-zincir1010`, dal `nokta-once1281-zincir-1010`)
**Diff:** `denetim/NOKTA-ONCE1281-ZINCIR-1010.diff` · 6 dosya · sha256 `f8b4198e935edd79…` · `git apply --check` ✓
· **UCUZ diff'iyle ART ARDA uygulanıyor** (ölçüldü, scratchpad kopyasında: ucuz → zincir).
🔴 `data/` YAZILMADI (worktree temiz). Diff scratchpad kopyalarında üretildi, SONRA ölçümü `girdi.oku_dosya`
/ `oku_devletler` / `denetle._devletler_yukle` / `denetle.olaylari_yukle` BELLEKTE yamalı kopyalara yönlendirilerek alındı.
Sarmalayıcı her yönlendirmeyi saydı: 4 yerleşim dosyası · devletler.js · künye düğümü · **14 olay**.

## SONUÇ — üç cümle
1. **Sekiz noktanın sekizine 1000-1281 zinciri** (toplam 33 pencere, 9'u beyanlı `__BOSLUK__`). Her pencere bir TDV cümlesine
   dayanıyor ya da künye ucunu **beyanla** devralıyor. 3 noktada mevcut 1281 penceresi geriye çekiliyor.
2. 🔴 **Maddesiz inerse KAPI KIRILIR:** ölçüldü, `2s AÇIK 193 → 207` (+14, tavan 193) ⇒ **çıkış 1, İHLAL.** Çekirdek dosyalardaki
   pre-1281 kırılmalar 2s evreninde (UCUZ diff'teki noktalar şans eseri kuyruk/kapsam dışı dosyalardaydı). ⇒ Diff aynı partide
   **14 kronoloji maddesi** taşıyor (`data/olaylar_once1281_zincir_1010.js`, YENİ). Maddelerle: `2s AÇIK 193 → 193` ✓, 16 kırılma
   kapandı, **16'sı da YER anılarak** (2sk 2122 → 2138).
3. **Künye düzeltmesi aynı diff'te:** `kirman-selcuklu` f/t `1048-01-01/1187-01-01` → `1048-06-16/1187-03-13` (hicrî kural:
   440 ve 583'ün ilk günleri). Ayrılırsa Kirman penceresi `4c`yi bir artırır (`§3.4②` — tavan/sabit aynı commit'te).

## 0. ÖNGÖRÜ (ölçümden ÖNCE) · KARNE
| Öngörü | Ölçüm | |
|---|---|---|
| ① 8'in 8'inde en az bir `__BOSLUK__` | **7/8** (Gürgenç'in zinciri kesintisiz kaynaklı çıktı) | ✗ kısmen |
| ② kopuş en sık Büyük Selçuklu sonu ↔ Moğol arası | ✓ Zerenc ve Kirmanşah 1157-1281 · Zencan 1194-1211 · Buhara 1211-1217 | ✓ |
| ③ en az 2 noktada künye aşımı | **1** (Kirman, künye t hicrî tuzağı) ⇒ künye düzeltildi · 4c/4d DEĞİŞMEDİ | ✗ (az çıktı) |
| ④ 2s AÇIK oynamaz | 🔴 **+14** (maddesiz) — ÇÜRÜDÜ | ✗ |
| ④ VERİLİ DEVİR DELİĞİ +8 | **+6** (79 → 85). Gazne ve Buhara 1000-01-01'de başlıyor, delik değil | ✗ (yön doğru) |
| ⑤ gün yalnız Buhara | ✓ + iki ALT SINIR günü (Dandanakan, Katvân) | ✓ |
📌 **④'ün çürümesi işin en önemli bulgusu:** UCUZ teslimindeki "2s AÇIK oynamıyor" sonucu **genellenemez**. O dört nokta kuyruk
dosyalarındaydı (`yerlesimler_asya.js`, `_avrupa.js`) ya da kapsam dışıydı. Çekirdek `yerlesimler.js`te geriye çekilen her
pencere **yeni bir AÇIK 2s kırılması** üretiyor ve madde ister. ⇒ Bu dilimin her inişi **madde+pencere çifti** olarak planlanmalı.

## 1. ZİNCİR KURALI (sekizine aynı, beyanlı)
- **f** = TDV'nin tarihli edinim/tanık cümlesi. Hicrî ise kesişimin İLK günü (`§4`); olay bir günden SONRA ise o gün (ALT SINIR).
- **t** = bir sonraki tarihli el değiştirme. Yoksa sahibin **künye ucu devralınır** (`D213`) ve `kaynak`a "künye ucu DEVRALINDI" yazılır.
- Sahibi bilinmeyen dilim ⇒ `d:"__BOSLUK__"` (Değişmez 1b bunu beyanlı sayar; en yakın kimliğe itilmez).
- Ara sahip tarihsiz anılıyorsa (Kirman: Gazneli 1032 → «o sıralarda» Büveyhî → 1048) iki ucu da yazmadım, dilim `__BOSLUK__`.
- Akın/yağma/tahrip SAHİPLİK DEĞİL (Kirmanşah 1198, Zerenc 1228-35, Gazne 1117/1135/1150, Buhara 1273 İlhanlı 7 günü): yazılmadı, `isg` adayı.
- UFUK ucu: kaynak sahipliği 1000'den önce başlatıyorsa (Gazne 963, Buhara 999) f = `1000-01-01`. Bu bir **pencere işareti**, ölçüm değil.

## 2. ZİNCİRLER
`🟡` = künye ucu devralındı (kaynaksız uç, beyanlı) · `⊘` = `__BOSLUK__` · `→ birleşir` = mevcut 1281 penceresinin f'si geriye çekildi
```
Zerenc     gazneli 1003-01-01 · buyuk-selcuklu 1040-09-11 → 1157-01-01🟡 · ⊘ 1157 → 1281
Kirmanşah  buyuk-selcuklu 1045-07-19 → 1157-01-01🟡 · ⊘ 1157 → 1281
Kirman     ⊘ 1032 → 1048-06-16 · kirman-selcuklu 1048-06-16 → 1187-03-13 · ⊘ 1187 → 1222 (Melik Dînâr, künye YOK)
           · kutlughanli 1222-02-15 → 1281
Zencan     gazneli 1029-09-13 · buyuk-selcuklu 1040-05-23 → 1118-05-06 · irak-selcuklu → 1194-01-01🟡 · ⊘ 1194 → 1211
           · alamut-nizari 1211-01-01 · harizmsah 1217-04-10 · mogol-imparatorlugu 1220-03-08 → 1256🟡 → ilhanli 1256 (birleşir)
Gürgenç    gazneli 1017-05-30 · buyuk-selcuklu 1043-01-01 · harizmsah 1141-09-09 · mogol-imparatorlugu 1221-02-25 → 1242🟡
           → altinorda 1242 (birleşir)
Gazne      gazneli 1000-01-01(UFUK) · gurlu 1173-01-01 → 1215-01-01🟡 · ⊘ 1215 → 1281
Balasagun  karahitay 1130-01-01 → 1211-01-01🟡 · ⊘ 1211 → 1218 · mogol-imparatorlugu 1218-01-01 → 1227🟡 → cagatay 1227 (birleşir)
Buhara     karahanli 1000-01-01(UFUK) → 1041🟡 · bati-karahanli → 1141-09-09 · karahitay → 1211🟡 · ⊘ 1211 → 1217
           · harizmsah 1217-04-10 · mogol-imparatorlugu 1220-02-10 → 1260🟡 · ⊘ 1260 → 1281 (cagatay'a DOKUNULMADI)
```
Her pencerenin `kaynak` alanında TDV cümlesi AYNEN, hicrî aralık ve devralma beyanı var (diff'e bak).
**Niçin Buhara'da Moğol → ⊘, Balasagun'da Moğol → Çağatay?** TDV `buhara` Mâverâünnehir'i **Kağan valisi** yönetiyor diyor
(«Hucend’de oturan Vali Mahmud Yalavaç», 1238) ve 1260-1281'i karışık anlatıyor (1263 Kubilay–Arık Böke, 1273 İlhanlı, 1283
Kaydu) ⇒ Çağatay'a bağlamak kaynağa aykırı. `balasagun`da karşı cümle yok ⇒ 1281 sahibinin künye f'si devralındı.

## 3. `denetle.py` ÖNCE / SONRA — ÖLÇÜLDÜ (`--ayrinti`, iki koşu tam)
```
                                    ÖNCE            SONRA (maddesiz)   SONRA (+14 madde)
çıkış                               2 (D8 ölçülemedi) 1 İHLAL          2 (D8 ölçülemedi — aynı)
D1 sahipsiz                         309             309                309 ✓
1b beyansız boşluk                  0               0                  0 ✓
2s YABANCI kırılma                  1805            1828 (+23)         1828
2s AÇIK (tavan 193)                 193             207 ✗              193 ✓
2s YIL-TEMSİLÎ BORÇ                 228             237 (+9)           237 (+9)
2sk kapalı / YER anılarak           4237 / 2122     —                  4253 / 2138 (+16, hepsi yerle)
2t kırılmasız madde                 13              13                 13 ✓ (14 maddenin 14'ü bir kırılmaya oturdu)
4 / 4c / 4d / 4s                    0/118/325/2     aynı               aynı ✓ (künye düzeltmesi bellekte uygulandı)
dönem sağlığı                       0/0/0           0/0/0              0/0/0 ✓
kaynaksız s:                        1841            1841               1841 ✓ (yeni pencerelerin hepsi kaynaklı)
mükerrer madde                      95              95                 95 ✓
ZAMAN-GENİŞ geri KAPSAM DIŞI        2595            2587 (−8)          2587
ZAMAN-GENİŞ VERİLİ DEVİR DELİĞİ     79              85 (+6)            85
Kuyruk yerlesimler_asya.js          496 · 257       498 · 259          498 · 259 (Gazne, iş kuyruğu)
Değişmez 7 sorgusuz enklav 🧊       800             812 (+12)          812
```
**Okuma:**
- 🔴 **Madde ile pencere AYNI commit'te inmeli.** Pencere tek başına inerse kapı 1 verir. Madde tek başına inerse 2t'yi
  (kırılmasız madde, tavan 13) kırar. `§3.4②`nin kırılma/madde versiyonu.
- 🟡 **Değişmez 7 +12 (🧊 değişim sezici, kapı DEĞİL):** yeni pre-1281 pencereler komşusuz adalar üretiyor. Ölçülen örnekler:
  Kirmanşah (A-koridor 292 km), Zencan (214-292 km), Tebriz/Merâga 1231-1256 adası artık Zencan'la komşu. ⇒ Bu dilim
  yoğunlaştıkça D7 düşecek; bugün düşmüyor. Beyan.
- 🟡 **YIL-TEMSİLÎ +9:** yeni `YYYY-01-01` uçları (1003, 1043, 1130, 1173, 1211, 1218…). Tavan (151) zaten aşılmış, "ihlal DEĞİL".
- 🟡 **mogol-imparatorlugu BOYALAR'da YOK:** Zencan 1220-56, Gürgenç 1221-42, Balasagun 1218-27, Buhara 1220-60 dilimleri motor
  partisine kadar BOYANMAZ. Veri doğru, görünürlük boyaya bağlı.

## 4. Yeni olay dosyası — `data/olaylar_once1281_zincir_1010.js` (`window.OLAYLAR_ONCE1281_ZINCIR_1010`)
14 madde. `t` = ilgili pencerenin f'si (aynı gün). `yer` kırılmanın BÜTÜN yerleşimlerini sayıyor (iki maddede iki şehir:
1141-09-09 Buhara + Gürgenç · 1217-04-10 Zencan + Buhara). Her madde `kaynak`ta TDV cümlesi AYNEN + hassasiyet.
🔴 **`index.html`e bağlanmadı** — koordinatör bağlar (`§5`: yeni `data/*.js` → `index.html`e satır). `denetle.py` onu `glob` ile
okuyor, yani bağlanmasa da kapı görür. Ama ekranda görünmez.
⚠️ İki maddede TDV iç tutarsızlığı beyanlı: 1217-04-10 «Tekiş 614’te» (614'te hükümdar Alâeddin Muhammed) · Buhara 1141 maddesi
Gürgenç'in kendi cümlesiyle birleştirildi (aynı Katvân günü).

## 5. 1281 SONRASI — gördüm, dokunmadım (ayrı kalemler)
- **Kirman:** TDV «Kutluğ Terken Hatun döneminde (1257-1283)». Atlas 1281'de `ilhanli` yazıyor. Kutluğhanlı tâbiyeti
  (`s:kutlughanli` + `v` ya da tersi) görünmüyor. Zincir 1281-01-01'de `kutlughanli` → `ilhanli` geçişi yapıyor ve bu geçiş
  **kaynaksız bir EPOK kırılması.**
- **Buhara:** TDV «1283’te Kaydu’nun emriyle Mesud Bey şehri yeniden kurmak…» ⇒ 1281 `cagatay` penceresi Ögedeyli Kaydu
  dönemiyle çelişebilir. Ölçülmedi.

## Ne ölçemedim
Kirmanşah'ın 1118 sonrası Irak Selçuklu dönemi (TDV `kirmansah` söylemiyor; künye ucu devralma 🟡) · Sîstan melikleri
künyesi (yok) · Gazne'nin Hârizmşah/Moğol yılları · Buhara 1089 Melikşah dönemi (TDV cümlesinde bulunamadı) ·
Değişmez 8 (taze ağaçta üretilmiş harita yok).
