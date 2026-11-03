# 02 · Moğol İmparatorluğu — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 2026-11-03 (salt okuma; veri dosyasına yazılmadı)

## Özet
- Künye: ana künye `mogol-imparatorlugu` (1206-01-01 → 1260-01-01); bağlı künyeler: öncül `kamag-mogol` (1130→1206), ardıllar `yuan-hanedani` (1260→1368), `altinorda` (1242), `cagatay` (1227), `ilhanli` (1256), `kuzey-yuan`. Eksik künye yok; Moğol parçalarının hepsi ayrı kayıtlı.
- Ölçer AÇIK kırılma: 1 (1227-01-01, 4 yerleşim). Kendi ölçümümle ek: **Değişmez 1 ihlali kokan 6 delik** (aşağıda d bölümü) ve **1260 sınırı**.
- Eksik madde: 6 (1206 kuruluş evren dosyasında yok, Möngke ölümü, Kubilay kurultayı, 1220–1227 doğrudan Moğol sahipliği için 5 şehir…).
- En ağır 3 bulgu: (1) Semerkant, Taşkent, Kaşgar, Belh, Hucend, Almalık 1220/1218/1198 → 1227 arası **sahipsiz** (Çağatay `f=1227-01-01` başlıyor, öncesi Hârizmşah/Karahıtay/BOŞLUK ile bitiyor; oysa Moğol fethi 1218–1221). (2) Tebriz (1231→1256), Merv (1221→1256), Herat (1175→1256), Köhne Ürgenç, Buhara 1240'ta sahipsiz: Moğol İmparatorluğu'nun İran/Horasan ayağı haritada yok (36 yerleşimle zirve; Çin kuzeyi + Mâverâünnehir kısmen). (3) `t=1260-01-01` yıl düzeyinde bir kuraldır; kaynaklı gün 1259-08-11 (Möngke ölümü) / 1260-05-05 (Kubilay), beyan yok.

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| mogol-imparatorlugu | Moğol İmparatorluğu (bölünmemiş) | 1206-01-01 | 1260-01-01 | ana künye; 55 yerleşim kaydı; en geniş an 1239 (36) |
| kamag-mogol | Kamag Moğol (Cengiz öncesi) | 1130-01-01 | 1206-01-01 | öncül, bitişik (bu denetimde ayrıntı okunmadı) |
| yuan-hanedani | Yuan (Moğol Çin) | 1260-01-01 | 1368-09-14 | ardıl; f, Britannica 5 Mayıs 1260 + "mogol t ile bitişiklik için 01-01" beyanlı |
| altinorda / cagatay / ilhanli | üç batı hanlığı | 1242 / 1227 / 1256 | — | ardıl; üçü de bölünmemiş imparatorlukla (1260'a dek) örtüşüyor — kaynaklı (fiilî ulus paylaşımı); örtüşme künyede beyan edilmeli |
| kuzey-yuan | Kuzey Yuan | 1368-09-14 | 1691 | ardıl |
Eksik parça: yok. Moğol *Ulus* yapısı (Cuci/Çağatay/Ögedey/Tuluy ulusları 1227 paylaşımı) iki yerde ayrı: Çağatay künyesi 1227'de, Altın Orda 1242'de başlıyor; Ögedey Ulusu ve Tuluy (merkez Moğolistan) imparatorluk künyesinde kalıyor — tutarlı.

## b) f/t ve evreler
| uç | atlas | kaynak 1 | kaynak 2 | hüküm | önerilen |
|---|---|---|---|---|---|
| f 1206-01-01 | 1206 yıl | TDV "Cengiz Han" (islamansiklopedisi.org.tr/cengiz-han): kurultay 1206, Onon kıyısı; ay/gün yok | ikinci akademik kaynak ÇEKİLEMEDİ (Britannica 403; Secret History/Atwood erişilemedi) | yıl teyitli, gün yok → `YYYY-01-01` kuralıyla doğru | korunur; `ic_not`: "yalnız yıl teyitli (TDV); ikinci kaynak aranıyor" |
| t 1260-01-01 | 1260 yıl | Yuan shi 3 (zh.wikisource 元史/卷003): «癸亥，帝崩于釣魚山» (7. ay) → ganzhi çevirisi bu denetimde hesaplandı: **1259-08-11 (Jülyen)** | Yuan shi 4 (元史/卷004): «春三月戊辰朔…辛卯，帝即皇帝位» → 戊辰朔 = 1260-04-12, 辛卯 = **1260-05-05**; Arık Böke "是月" (4. ay) Karakurum batısında; Britannica 'Kublai Khan' (5 Mayıs 1260, Yuan künyesinin ic_not'unda) | iki ayrı olay: Möngke ölümü (taht boş) ve Kubilay'ın seçilişi; 1260-01-01 bu ikisinin arasındaki yıl-düzeyi uzlaşım | `ic_not_t` ekle: "Möngke 1259-08-11, Kubilay 1260-05-05; sınır yıl hassasiyetinde 1260-01-01 (Yuan künyesiyle bitişik)". Sınırı 05-05'e çekmek yüzlerce `s:` kırılmasını (ör. kronoloji_sinir_once1281_geriye.js:209, 11 yer) taşımayı gerektirir — HAVVA koşusu öncesi önerilmez. |
Çelişki: TDV "Moğollar" maddesi ayrı bir madde olarak bulunamadı (arama "Tatarlar"a gidiyor); Kubilay maddesi arama sayfası özeti 1260-1294 verdi (tam gövde okunamadı: "çekilemedi"). Wikipedia yalnız yol gösterdi.

## c) Kronoloji
Var olanlar (Değişmez 2 evreninde):
- 1209-01-01 Koço Uygur Cengiz'e bağlandı — olaylar_ortacag_bozkir.js:15
- 1215-05-31 Pekin Jin→Moğol — kronoloji_sinir_once1281_geriye.js:208 · 1218 Balasagun/Kâşgar — kronoloji_sinir_asya_zincir_1024.js:117, kronoloji_sinir_once1281_yerlesim_asya_iran.js:34 · 1218-08-23 Datong/Taiyuan — geriye.js:211
- 1219–1221 Harezm seferi: olaylar_ortacag_iran_turan.js:170-175; 1220-02-10 Buhara — yerlesim_asya_iran.js:35; 1221 Belh/Gürgenç — olaylar_ortacag_bozkir.js:16,17; 1221-04-10 Nîşâbur — olaylar_t5_1000b.js:38
- 1227-01-01 Çağatay payı — olaylar_ortacag_iran_hint_magrib.js:104; yerlesim_asya_iran.js:39
- 1231-09-28 Xi'an, 1233-07-17 Luoyang, 1234 Kaifeng (Jin sonu) — geriye.js:216,219; yerlesim_asya_iran.js:42
- 1231 Azerbaycan/Tebriz, Gürcistan — olaylar_t5_1000a.js:78-79, bekleyen_acik.js:162
- 1241-12-11 Ögedey öldü — iran_hint_magrib.js:117; 1242 Altın Orda/Saray — olaylar_ortacag_bozkir.js:22; 1243-07-01 Kösedağ — olaylar_ortacag_iran_turan.js:181; 1253-04-24 Hülâgû hareketi — bozkir.js:25; 1256-11-19 Alamut; 1258-02-10 Bağdat — olaylar_t5_1000a.js:93; 1259-09-27 Kubilay Yangtze — olaylar_ortacag_cin.js:68; 1260-01-01 bölünme — yerlesim_asya_iran.js:46; 1260-09-03 Aynicâlût — olaylar_t5_1000b.js:49
Eksik / hatalı:
1. 1206 kuruluş: yalnız `devletler.js:5568` gömülü `kronoloji:` içinde (odak Karakurum); olaylar*/kronoloji_sinir*'de yok. Öneri: `{ t:"1206-01-01", kesinlik:"yil", b:"Temuçin Onon kıyısındaki kurultayda Cengiz Han unvanıyla Moğol Ulusu'nun büyük hanı seçildi", odak_yer:["Karakurum"], kaynak:"TDV 'Cengiz Han' (kurultay 1206, Onon kıyısı); ikinci kaynak aranmalı" }` (odak_yer Karakurum yerine Moğolistan'ın 1206 şehri yoksa mevcut yer).
2. 1259-08-11 Möngke ölümü: `{ t:"1259-08-11", b:"Möngke Han Diaoyu Kalesi önünde öldü; büyük han tahtı boş kaldı", odak_yer:["Karakurum"], kaynak:"Yuan shi 3 «癸亥，帝崩于釣魚山» (zh.wikisource.org/wiki/元史/卷003); ganzhi→Jülyen bu denetimde hesaplandı (1259-08-11), ikinci kaynak: Britannica 'Mongke' (çekilemedi) — KASA teyit etsin" }`.
3. 1260-05-05 Kubilay seçimi/Arık Böke: `{ t:"1260-05-05", b:"Kubilay Kaiping'te kurultayla büyük han ilan edildi; kardeşi Arık Böke aynı ay Karakurum'da kendini han ilan etti", odak_yer:["Pekin (Hanbalık)","Karakurum"], kaynak:"Yuan shi 4 «春三月戊辰朔…辛卯，帝即皇帝位»; «是月，阿里不哥僭號于和林城西按坦河» (zh.wikisource.org/wiki/元史/卷004); ganzhi→Jülyen: 戊辰朔=1260-04-12, 辛卯=1260-05-05 (bu denetimde hesaplandı); Britannica 'Kublai Khan' 5 Mayıs 1260" }` — mevcut "1260-01-01 bölünme" maddesi yıl-hassasiyetli kalabilir.
4. 1227-01-01 Çağatay payı maddesinin `odak_yer`'i yok: Belh, Hucend, Kaşgar, Semerkant adlarını ekle (AÇIK'ın tek sebebi). Ancak asıl sorun d bölümündeki sahiplik: bu şehirler 1227'de "kazanç" değil, 1220'den beri Moğol'du.
5. 1227 Ağustos Cengiz Han'ın ölümü: TDV "Cengiz Han": «Ağustos 1227» (gün yok). Madde yok: `{ t:"1227-08-01", kesinlik:"ay", b:"Cengiz Han öldü; imparatorluk oğulları arasında paylaştırıldı (Tuluy naip)", kaynak:"TDV 'Cengiz Han'" }`; yıl-ay hassasiyeti, gün yok — 08-01 uydurma olur → `1227-01-01` + "Ağustos" beyanı kuralına göre yaz.
6. 1229 Ögedey'in seçilişi, 1235 Karakurum'un inşası/başkent oluşu, 1251 Möngke'nin seçilişi: kronolojide yok (ilk bakışta; yalnız 1251 Gürcü maddesi anıyor). Gün/ay kaynağı bu turda okunamadı → "kaynak aranmalı".

## d) Harita uyumu
Ölçer: 36 kırılma, AÇIK 1.
| gün | yerleşimler | öneri |
|---|---|---|
| 1227-01-01 kazanç | Belh, Hucend, Kaşgar, Semerkant | madde var (olaylar_ortacag_iran_hint_magrib.js:104) ama bu yerleri anmıyor → odak_yer ekle. Gerçek düzeltme aşağıda |

Sahiplik tutarlılığı (benim ölçümüm: s: aralıkları, `yer_yil.py`/`bosluk_1227.py`; denetle Değişmez 1 ile teyit edilmeli — "ölçülemedi ≠ temiz"):
- **Çağatay 1227 başlangıçlı 12 yerleşimden 6'sında öncesi delik**: Semerkant 1220-01-01→1227-01-01 (önceki: harizmsah 1212–1220); Taşkent 1220→1227 (harizmsah ← 1210–1220); Kaşgar 1218→1227 (önceki 1211–1218 BOŞLUK; Karahıtay 1130–1211); Belh 1198→1227 (karahitay→delik); Hucend, Almalık hiç s yok. Kaynak: TDV Cengiz Han — Buhara 10 Şubat 1220, Semerkant Mart 1220, Belh 1221; Balasagun/Kâşgar 1218 (kronoloji_sinir_asya_zincir_1024.js:117). Öneri: bu yerlere `d:"mogol-imparatorlugu"`, f = olay günü (Semerkant 1220-03-01 ay hassasiyeti; Taşkent 1220; Belh 1221-01-01 yıl; Kaşgar 1218-01-01), t = 1227-01-01 (yıl düzeyi; Çağatay başlangıcı ile bitişik). Aksi hâlde Moğol fethi haritada görünmüyor.
- 1240-01-01'de sahipsiz (s: kapsamı yok): Tebriz (1231→1256 delik; 1231 Moğol olayı VAR: olaylar_t5_1000a.js:79), Merv (Mari) (Hârizmşah 1204–1221 → 1256), Herat (BOŞLUK 1164–1175 → 1256 ilhanli; Herat 1221 teslim), Köhne Ürgenç (Gürgenç 1017'den beri hiç s yok), Buhara (s yalnız ≤1000), Kaifeng (Daliang) kaydı ayrı (aynı şehir iki kayıt: "Kaifeng" mogol, "Kaifeng (Daliang)" sahipsiz — mükerrer şüphesi). Öneri: Tebriz 1231-01-01→1256-01-01 mogol-imparatorlugu (olay VAR); Merv 1221-01-01→1256-01-01 (Merv'in düşüşü 1221 baharı — TDV 'Merv' okunmadı: çekilemedi); Herat 1221→1256; Buhara 1220-02-10→1227; Gürgenç 1221→1227 (sonra Cuci ulusu/Altın Orda 1242: yerlesim_asya_iran.js:43).
- Zirve sayısı çok düşük: 36 yerleşim (1239) — Moğol İmparatorluğu'nun Çin kuzeyi + Karakurum + Mâverâünnehir çekirdeği; Rus şehirleri (Kiev, Moskova) 1240'ta kendi devletlerinde (fetih sonrası vasal; doğrudan sahiplik olmayabilir, beyanlı haraç `v:` olur).
- 1260 sonrası: `mogol-imparatorlugu` 1260-1281'de 2 yerleşim görünüyor (ölçer 1263..1278: 2) — künye t=1260 iken s: aralıkları 1260'ı aşıyor olabilir ("harita ömrü 1206→1281"): Karakurum 1235→1260 mogol, 1260→1281 yuan (yani 2 yerleşim 1260'ta bitiyor, ölçer yıl örneklemesi 1260:2 sınır etkisi). Sorun yok.

## Önerilen düzeltmeler (KASA için)
1. `data/devletler.js:5562` mogol-imparatorlugu: `ic_not_t` ekle (Möngke 1259-08-11; Kubilay 1260-05-05; sınır yıl hassasiyeti). Sınırı kaydırma.
2. `data/olaylar_ortacag_iran_hint_magrib.js:104`: `odak_yer:["Semerkant","Belh","Hucend","Kâşgar"]` ekle.
3. `data/yerlesimler_ek14.js` (Semerkant), `yerlesimler_asya.js` (Kaşgar, Taşkent), `yerlesimler_ek16.js` (Belh), `yerlesimler_ek15.js` (Hucend): 1218–1227 aralığına `mogol-imparatorlugu` s: ekle (yukarıdaki tarihler).
4. Tebriz 1231→1256, Merv 1221→1256, Herat 1221→1256 mogol s: ekle; Kaifeng/Kaifeng (Daliang) mükerrer taraması.
5. c bölümündeki 1–3 numaralı maddeleri ekle.

## Erişilemeyen kaynaklar
- Britannica (Mongol empire, Genghis Khan, Han dynasty): HTTP 403 — çekilemedi. Iranica/JSTOR erişimi yok.
- Gerekli: Cambridge History of Iran vol. 5 (Boyle, Hülagü/Çağatay bölümleri), Secret History of the Mongols (Rachewiltz) §202 (1206 kurultayı), Juvaynî Cihângüşâ (Semerkant/Merv/Herat fetih günleri), TDV "Kubilay Han", "Merv", "Herat", "Tebriz" tam gövdeleri (arama özeti okundu, gövde okunamadı), Cambridge History of China vol. 6 (Alien Regimes, 1260 geçişi).
