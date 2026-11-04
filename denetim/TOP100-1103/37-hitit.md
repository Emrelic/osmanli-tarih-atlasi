# 37 · Hitit — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 2026-11-03 (salt okuma; veri dosyasına yazılmadı)

## Özet
- Künye: 4 (`hitit` -1649 → -1179 harita kullanan; `hitit-eski` -1649 → -1499 ve `hitit-imp` -1399 → -1179 **ölü künye**, s: kaydı 0; ardıl `yeni-hitit` -1179 → -0707). Mükerrer/örtüşme **doğrulandı** ve `hitit` künyesinin kendisi bunu "D205 TEK polity" diye beyan ediyor.
- Ölçer: `hitit` 2 yerleşim (Hattuşa, Gordion), 2 kırılma (-1649, -1199), "açık" 0. `hitit-eski`/`hitit-imp`: yerleşim 0 → **haritada görünmüyorlar** (yalnız renkler.py BOYALAR + künye + evren maddelerinin `[devlet:]` etiketinde yaşıyorlar).
- En ağır 3 bulgu:
  1. **Çöküş tarihi dört ayrı yerde dört değer:** künye t / evren maddesi -1179 (MÖ 1180, "Hattuşa yandı"), evren maddesi -1199 (MÖ 1200, Hattuşa boşaltıldı), s: Hattuşa t -1199, künye `hitit` kronoloji[] -1189 (MÖ 1190, "Kaşkalar yaktı"). Kaynaklar (TDV, Manning 2023 Nature, Oxford, EJ) c.1200 / 1190'ı verir; **-1179'u açan hiçbir kaynak yok.** Aynı olay iki ayrı evren maddesinde 20 yıl arayla ve "yandı" iddiası Manning/Aklan ile çelişiyor ("emptied by the royal administration and only later burnt").
  2. **Harita: Hitit imparatorluğu yalnız 2 noktayla temsil ediliyor** (Hattuşa, Gordion; Gordion sahipliği tartışmalı). Halep, Karkamış, Tarsus/Adana (Kizzuvatna), Kaneş, Tarhuntaşşa (Konya) için antik s: yok; -1344 «Halep/Karkemiş alındı» ve -1327 «oğullar Karkemiş/Halep'e atandı» maddeleri haritada karşılıksız.
  3. **Aynı olay iki tarihle:** Mısır–Hitit antlaşması `kronoloji_sinir_antik3_1024.js:11` -1269 (TDV MÖ 1270) vs `olaylar_antik_misir_nubya.js:55` -1258 (Breasted/Shaw MÖ 1259). Aynı atlasta Kadeş -1273 (MÖ 1274): TDV'nin 1270'i Kadeş'ten 4 yıl sonraya koyar, ama Mısırbilim 15 yıl sonra (yıl 21).

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| hitit | Hitit Krallığı ve İmparatorluğu (Hatti) | -1649 | -1179 | KULLANILAN; D205 "Eski-Orta-İmparatorluk TEK polity"; s: Hattuşa, Gordion |
| hitit-eski | Eski Hitit Krallığı | -1649 | -1499 | ÖLÜ künye (0 yerleşim); `hitit`le f aynı, -1649 → -1499 örtüşür; renkler.py:317 BOYALAR'da |
| hitit-imp | Hitit İmparatorluğu (Yeni Krallık) | -1399 | -1179 | ÖLÜ künye (0 yerleşim); `hitit`le -1399 → -1179 örtüşür; renkler.py:955 |
| yeni-hitit | Yeni Hitit şehir devletleri | -1179 | -0707 | ardıl; f = hitit t (şimdiki -1179; öneriyle -1199) |
Arada -1499 → -1399 hiçbir ölü künyede yok ("Orta Krallık"): bu yüzden `hitit` ayrı birleşik künye oldu — doğru karar. **Örtüşme = hitit ∩ hitit-eski ∩ hitit-imp.** Evren maddelerinin `[devlet:]` etiketleri (olaylar_antik_yakin_dogu.js :104,:110-112,:114,:118,:120-123) hâlâ `hitit-eski`/`hitit-imp`: **etiketlenen künyede yerleşim yok → madde haritayı doğrulamıyor.** Mursili/Hattuşili maddeleri `hitit` ile eşlenmeli.

## b) f/t ve evreler
Kaynaklar (bu turda okunan): [A] TDV «Anadolu» (İplikçioğlu): «önce 1650-1490 arasında … Eski Hitit Devleti», «Hitit İmparatorluğu devrinde (1440-1200)», «milâttan önce 1200 yıllarında muhtemelen "Ege göçleri" … yıkılmıştır»; [B] Manning vd. 2023, Nature 614:719 (PMC9946833): «Around or shortly after 1200 bc, the Hittite Empire … collapsed», «between 1650 and 1200 bc», II. Şuppiluliuma ~1207, «abandoned and emptied by the royal administration and only later burnt»; [C] Encyclopaedia Judaica «Hittites» (Güterbock, Sperling, Gelb): destruction «c. 1190», empire «c. 1370–45» (Şuppiluliuma I), Babil I «1595» MC; Oxford World Encyclopedia: «disintegrated in c.1200 bc», Old Kingdom «1700–1530»; [D] Herrmann vd. 2023, Antiquity 97(393) (künyedeki evren maddesi alıntısı): «conventionally, hMC c. 1650-1620»; [E] ARCANE III: Babil I sonu 1595/1597 (Mursili datumu).

| uç | atlas | kaynak 1 | kaynak 2 | hüküm | önerilen |
|---|---|---|---|---|---|
| hitit f | -1649 (MÖ 1650) | [A] 1650 | [D] hMC 1650-1620 (Mursili'den iki kuşak geri sayım — doğrudan ölçüm değil); [C] Old Kingdom 1700 (EJ/Enc.) | ✓ çift kaynak, yaklaşık; Anitta/Kuşşara (-1749 evren) önceki | değişmez |
| Mursili Babil | evren yok; kronoloji[] -1594 (hitit) / -1586 (hitit-eski) | [E] 1595 | [C] 1595; [A] «Bâbil'i dahi fetheden» | ✗ evrende madde yok; künye-içi iki farklı tarih | -1594 tek değer (bkz. 36) |
| Eski Krallık sonu | hitit-eski t -1499 | [A] 1490 | Bryce Telipinu 1525–1500 (künye alıntısı) | ✓ aralık içinde; `hitit` künyesinde sınır değil | — |
| Yeni Krallık başı | hitit-imp f -1399 | [A] 1440 | Bryce 1400 (künye alıntısı) | ✗ 40 yıl fark; sınır olmadığı için (birleşik künye) önemsiz; `-1354` evren maddesi «Şuppiluliuma I… Yeni Krallık başladı» [C] 1370-45 ✓ | `hitit-imp` kullanılmayacaksa konu kapanır |
| hitit t | -1179 (MÖ 1180) | [A] 1200 | [B] ~1200 (1198-1196 kuraklık; 1207 II. Şuppiluliuma); [C] ~1190; Oxford c.1200 | ✗ **-1179'u destekleyen kaynak yok**; evren zaten -1199 maddesine ve s: -1199'a sahip | **t `-1199-01-01`** (MÖ 1200; TDV + Manning) |
| yeni-hitit f | -1179 | — | — | hitit t'ye bağlı | `-1199-01-01` (Hitit çöküşüyle birlikte, Değişmez 2 senkronu) |
Orta Kronoloji notu: Manning 2023 Ramses II'yi "revize" 1290/"eski" 1279 diye iki şemada okur (≈11 yıl); atlas Hitit–Mısır maddelerini 1279'a göre yazmış (Kadeş MÖ 1274) — tutarlı, beyanlı (`ic_not_d` Shaw/Kitchen notu var). Bu, Hitit çöküşünü etkilemez (Hattuşa c.1200).

## c) Kronoloji
Var olanlar (evren): `data/olaylar_antik_yakin_dogu.js`: :123 -1749 Anitta (Kaneş/Hattuşa yıkımı), :122 -1629 Hattuşili I Toros/Kizzuvatna, :121 -1599 Mursili I Halep, :120 -1589 Mursili suikastı, :118 -1524 Telipinu, :114 -1354 Şuppiluliuma I, :112 -1344 Halep/Karkemiş, :111 -1327 oğullar atandı, :110 -1317 II. Mursili Arzava, :104 -1179 Hattuşa yandı, :103 -1174 Kuzi-Teşub; `olaylar_antik_misir_nubya.js:56` -1273 Kadeş, `:55` -1258 antlaşma, `:58` -1339 Amarna kayışı; `kronoloji_sinir_antik3_1024.js:11` -1269 antlaşma; `olaylar_arkeoloji_mezopotamya.js`/zincir maddeleri: -1649 Hattuşili I (hMC), -1206 II. Şuppiluliuma tahta çıkışı (Manning), -1199 Hattuşa boşaltılması (Manning), -1190 Ugarit.
Künye-içi `kronoloji[]` (evren dışı; `devletler.js:19342-19346`, `19348-19353`, `20814-20823`): hitit-eski (Livius/Britannica dayanaklı), hitit-imp (Livius), hitit (worldhistory.org — CLAUDE.md'ye göre dayanak olamaz; bir madde «Kaşkalar Hattuşa'yı yaktı» yanlış). Aynı olay üç künyede üç tarih:
| olay | hitit-eski/-imp | hitit | evren |
|---|---|---|---|
| Mursili Babil | -1586 (MÖ 1587) | -1594 | YOK |
| Telipinu | -1524 | -1459 (worldhistory 1460) | -1524 |
| Şuppiluliuma I çıkışı | -1354 | -1343 (1344) | -1354 |
| Antlaşma | -1258 | -1257 | -1258 ve -1269 (!) |
| Çöküş | -1189 (hitit-imp kron.) | -1189 | -1179 ve -1199 |
Kuruluş (-1649 ✓), başkent değişimi (Anitta→Hattuşa; Tarhuntaşşa/Muwatalli başkent taşıması — **evrende yok**), antlaşmalar (Kurustama/Şattiwaza yok; Kadeş ✓; Mısır ✓ çift), yıkılış (çift).

Eksik / düzeltilecek maddeler:
```
{ t:"-1594-01-01", kesinlik:"onyil", b:"I. Mursili Babil'i yağmaladı; Samsu-ditana ile Babil I. Hanedanı sona erdi", yer_id:"Babil", tur:"savas", gun:"MÖ 1595 (Orta Kronoloji)", kaynak:"ARCANE III Tablo 39 (1595/1597); TDV «Anadolu» — «bir ara Bâbil'i dahi fetheden Eski Hitit Devleti»", ic_not_d:"[devlet: hitit]" }   // 36'daki madde; haritada Hitit tarafı = Hattuşa t değil, Babil'in babil-eski → kassit-babil geçişi
{ t:"-1199-01-01" (mevcut) ... }  // ZATEN VAR, kaynak Manning 2023; -1179 maddesi bununla birleştirilmeli
```
-1179 maddesinin düzeltilmesi (`:104`): ya SİL ya da -1189 çevresinde «Hattuşa yakıldı (terk sonrası)» olarak ayır: Manning «abandoned and emptied … only later burnt»; EJ c.1190. Başlığı «Hattuşa yandı, terk edildi» → «Hattuşa boşaltıldı, sonradan yandı; Hitit merkez devleti çöktü». Antlaşma: `kronoloji_sinir_antik3_1024.js:11` -1269 kaydını SİL ya da `:55` -1258 maddesine «TDV MÖ 1270 der (çelişki ic_not'ta iki kaynağıyla)» olarak katla; çünkü TDV esas kuralı gereği çelişki beyanlı kalmalı ama iki ayrı madde olarak değil.
Kızzuvatna: `:122` -1629 başlığı «Kizzuvatna'yı sınırına kattı» **kaynakça tarafından çürütülmüş** (ic_not: Bryce s.124 — Kizzuwadna Ammuna döneminde bağımsızlaşır, ilhak Yeni Krallık başı). Öneri b: «Hattuşili I Toros'u aşıp Kilikya üzerinden Suriye'ye sefer etti, Halep krallığına saldırdı». Yeni madde: «Kizzuvatna Yeni Krallık başında Hitit'e katıldı» (c. MÖ 1400, yüzyıl hassasiyeti, Bryce s.124 — doğrudan okunamadı).

## d) Harita uyumu
- Ölçer açık: **0** (-1649 ✓ Hattuşili I maddesi aynı gün; -1199 ✓ Manning maddesi aynı gün). Ama künye t -1179 ve yeni-hitit f -1179 bağımsız maddeye sahip (-1179), s: -1199 — 20 yıllık künye/s: boşluğu: Hattuşa -1199 → ? sahipsiz; Gordion `__BOSLUK__` -1199'dan sonra.
- En geniş an: -1649..-1199 hep 2 yerleşim (Hattuşa, Gordion). Sahiplik uyumu:
  | yerleşim | sorun / öneri |
  |---|---|
  | Gordion | `hitit` -1649 → -1199; kaynağı: Kealhofer vd. 2019 Radiocarbon 61(2) «disengagement from Hittite hegemony in the 12th c. BCE». "Hegemonya" ≠ doğrudan yönetim, ve -1649'dan başlatma (Hattuşili I) kaynaksız. Öneri: Gordion `hitit` f → İmparatorluk dönemi (-1399 ya da -1354) ya da beyanlı yaklaşıklık; kaynak ikinci tanık aranmalı |
  | Hattuşa | ✓ -1649 → -1199 |
  | Halep (nokta var, antik s: yok; ilk s: 944) | -1344 «Halep ve Karkemiş alındı» (evren) + -1327 «oğul Halep'in başına atandı» — Hitit vasalı/viceroyalty; haritada karşılık yok. Öneri: Halep `hitit` -1344 → -1199 (viceroyalty, beyanlı) — kaynak: evren maddeleri + Bryce (okunamadı); `yamhad` künyesi t -1599 sonrası -1599..-1344 `__BOSLUK__` |
  | Tarsus, Adana (Kizzuvatna/Kilikya) | s: antik yok. Kizzuvatna ayrı polity; Yeni Krallık başında Hitit (Bryce s.124 — okunamadı). Öneri: künye `kizzuvatna` (yok) açılmadan `hitit` -1399 → -1199 beyanlı; veya Kilikya'yı petek emilimine bırak (ikisinde de Hitit rengi) |
  | Kaneş (Kültepe) | nokta yok. Kayseri'de antik s: -0254'ten başlıyor. Öneri: Kayseri/Kültepe noktası ve s: (Kaneş Hitit denetimi: Anitta -1749 sonrası ilk Hitit denetimi tartışmalı) — kaynak aranmalı |
  | Konya (Tarhuntaşşa) | Muwatalli II başkent taşıması (c.1274 öncesi) — nokta Konya'da (1097'den s:); kaynak aranmalı |
  | Karkamış | nokta yok. Kuzi-Teşub (-1174) ve vekil krallık için Karkamış noktası gerekir; `yeni-hitit` künyesinin başkenti Karkamış, ama Y listesinde Karkamış/Karkemiş adı yok |
  | Ugarit | kendi künyesi (-1349 → -1189): Hitit vasalı; çakışma yok ✓ |
  | Mısır sınırı (Kadeş/Amurru) | Kadeş noktası yok ("Atlas'ta yok" maddede) → -1273/-1258 maddeleri yer_id'siz |
- Sonuç: -1344 (Şuppiluliuma Mitanni/Halep) ve -1274 (Kadeş) anlarında Hitit petek alanı yalnız Hattuşa+Gordion komşuluğu ile sınırlı; Suriye kolu Hitit renginde görünmüyor — "kronoloji ile harita birbirini doğrulayamıyor".

## Önerilen düzeltmeler (KASA için)
1. `data/devletler.js:20813` `hitit`: `t:"-1199-01-01"`; `ic_not`'a «iki kaynak: TDV Anadolu 1200, Manning 2023 ~1200 (EJ ~1190); -1179 hiçbir kaynakta yok» ekle; `kronoloji[]` -1189 «Kaşkalar yaktı» satırını Manning'e göre düzelt (boşaltıldı, sonradan yandı) ve worldhistory.org dayanaklarını (CLAUDE.md'ye göre dayanak olamaz) TDV/Bryce/Manning ile değiştir; -1459 Telipinu → -1524; -1343 → -1354; -1257 → -1258.
2. `data/devletler.js:19359` `yeni-hitit` `f:"-1199-01-01"`.
3. `data/devletler.js:19341` `hitit-eski`, `:19347` `hitit-imp`: ölü künye. **Öneri: silme (renkler.py = motor tuzu, Emre onayı ister); ic_not'a «ÖRTÜŞÜR/DEVRE DIŞI: harita künyesi `hitit` (D205)» yaz; künye-içi kronoloji[] tutarsızlıklarını (-1586 → -1594) ya da komple kaldır.** `[devlet: hitit-eski]/[hitit-imp]` etiketlerini `[devlet: hitit]` yap (`olaylar_antik_yakin_dogu.js` :104, :110-112, :114, :118, :120-123).
4. `data/olaylar_antik_yakin_dogu.js:104` -1179 maddesi: -1199 maddesiyle birleştir ya da başlığı «sonradan yandı» düzelt; `:122` başlığını Bryce'a göre düzelt.
5. `data/kronoloji_sinir_antik3_1024.js:11` -1269 Mısır–Hitit antlaşması: kopyayı kaldır, TDV-1270 çelişkisini `olaylar_antik_misir_nubya.js:55` `ic_not_d`'ye ekle (TDV esas kuralı: çelişki iki kaynağıyla).
6. `data/yerlesimler_mo_zincir.js` Hattuşa (satır 4): `-1649 → -1199` ✓ kalsın; Gordion (satır 5) `hitit` -1649 → -1399/ -1354 (yaklaşıklık beyanı) — kaynak ikinci tanık gerek.
7. Yeni evren maddesi: Mursili Babil (-1594, bkz. 36) ve «Kizzuvatna Yeni Krallık başında katıldı» (yüzyıl hassasiyeti).
8. Yeni noktalar/`s:` (kaynak şartlı): Halep (-1344 → -1199 hitit), Tarsus/Adana (Yeni Krallık başı), Karkamış (nokta), Kaneş (nokta).

## Erişilemeyen kaynaklar
- Bryce, T., The Kingdom of the Hittites, Oxford UP 2005 — archive.org ödünç-yalnız (kingdomofhittite0000bryc); sorular: (a) Kizzuwadna'nın Hitit'e katıldığı hükümdar/yıl (s.124); (b) Mursili'nin Babil seferi yılı (c.1595) ve Halep'in alınışı; (c) Hattuşa'nın son hâli ve II. Şuppiluliuma sonrası.
- Beckman, G., «Hittite Chronology», Akkadica 119-120 (2000) 19-32 — erişilemedi. Soru: Yeni Krallık başlangıcı (1400 mü 1350 mi) ve Orta Krallık sınırları.
- Seeher, J., Hattuşa/Boğazköy raporları (MDOG 2010; DAI Boğazköy 14C verisi) — erişilemedi. Soru: terk edilişin kesin yıl aralığı.
- Metropolitan Museum «The Hittites» (HTTP 429). Britannica «Hittite» (403).
- Aklan, İ., AHBVÜ Edebiyat Fak. Dergisi 8 (2023) 47-61 (evren maddesinde atıflı; DergiPark PDF'i bu turda açılmadı). Soru: Hattuşa'nın «organize terk» tarihi (MÖ 12. yy başı).
- Kealhofer vd. 2019 Radiocarbon 61(2) — Gordion'un Hitit ilişkisi için ikinci tanık; yalnız özet okundu.

## Koordinatör kararı (EMRELİC 1 KASIM, 4 Kasım gecesi)
- Çöküş: dört değer tek değere indirilir (Oxford okuması bekleniyor); öbürleri kaynakla `ic_not`ta beyan.
  Ajan önerisi: `hitit` t ve `yeni-hitit` f **-1199** (MÖ 1200; TDV, Manning 2023 Nature, Oxford c.1200).
- `hitit-eski` / `hitit-imp` ölü künyeler: `renkler.py`'deki girdiler KALIR (tuz). Öneri: iki künye
  `hitit`e BİRLEŞTİRİLSİN — kronoloji maddeleri `hitit` künyesine taşınsın, iki künye devletler.js'ten
  çıkarılsın ya da `ic_not:"ÖLÜ — hitit'e birleştirildi"` ile bırakılsın (renk girdisi zararsız kalır).

## Iranica / Oxford teyidi (EMRELİC 1 KASIM, tarayıcıdan, 4 Kasım 2026; aktarım)
- Concise Oxford Dictionary of Archaeology «Boghaz Köy»: «collapse of the Hittite Empire around 1200 bc the site was abandoned»; Oxford Enc. of Archaeology in the Near East «Anatolia»: İmparatorluk 1400-1200 BCE. **Hüküm:** `hitit` t ve `yeni-hitit` f **-1199** (c. MÖ 1200; TDV + iki Oxford kaynağı) + kesinlik onyil + beyan; -1179 (MÖ 1180) ve -1189 değerleri `ic_not`ta 'akademik dayanak bulunamadı' diye düşülsün.
