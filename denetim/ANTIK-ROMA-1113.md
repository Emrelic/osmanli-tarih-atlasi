# ANTIK-ROMA-1113 — Roma'da açık işler: kronoloji × harita × kaynak

Tarih: 13 Kasım 2026 · Dal: `emrelic-1113-antik-roma` (origin/main'in 8 commit gerisinden açıldı; rebase edilmedi, yalnız ölçüm) · Yazan: EMRELIC alt ajanı.
Ağır araç (denetle, renk_olc, denetle_yayin) KOŞTURULMADI; ölçüm `arac/girdi.yukle()` ile kendi betiğimle, doğrulama `node --check` + paketle sina.

## 1. Ölçüm tablosu (önce → sonra; ölçüm yeri: bu worktree, 5628 yerleşim)

| Ölçüt | Önce | Sonra |
|---|---|---|
| Roma künyeli (roma-kralligi/cumhuriyeti/imp/bati-roma) dönemi olan yerleşim | 62 | 65 |
| `bizans` dönemi 330-05-11'de başlayan yerleşim zinciri | 5 (İzmit, Bergama, Sinop, İstanbul, Atina) | 0 (hepsi 395-01-17; Ankara, Kayseri, İskenderiye, Argos, Sikyon, Palmyra zaten 395'teydi) |
| 330-395 arası `bizans` damgalı yerleşim | 5 | 0 |
| Roma evreninde (-26…476) `__BOSLUK__` altında kalan şehir-yılı (Marsilya, Sirakuza, Messina, Şam, Kudüs) | ≈ 2510 (5 × 502) | 4 (yalnız Marsilya 476-08-28 → 480-01-01, beyanlı) |
| Roma çağında (-0753…0640) kesişen `__BOSLUK__` dönemi (tüm veri) | 104 | 107 (dilimler bölündü; 5 şehirde Roma boşluğu kapandı, boşluk daha dar ve kaynaklı yerde başlıyor) |
| Roma-dönemi iç boşluk (aynı yerleşimde dönemler arası aralık) | 0 | 0 |
| Atina'nın kendi kırılma maddesi | 0 | 2 (Sulla -0085-03-01, 395-01-17) |
| Yeni kronoloji maddesi | — | 26 (`data/kronoloji_sinir_antik_roma.js`) |

Büyük şehirlerin Roma penceresizliği (b) — ÖLÇÜLDÜ, KAPSAM DIŞI KALDI: Roma kutusunda (enlem 29-55, boylam -10…46) 2002 yerleşimden M.S. 150'de yalnız 55'i roma-imp, 5'i Part, 11'i `__BOSLUK__`; **1929'unun (%96) o tarihte dönemi hiç yok** (Selanik ilk dönemi 1205, Antakya 968, Edirne 1000, Sofya 1000, Filibe 1281, Niş 1281, Üsküp 1000, Varna 1000, İzmir 1261, Konya 1097, Adana 1184, Tarsus 1172, Trabzon 1000, Samsun 1194, Diyarbakır 1024, Efes/Ayasuluk 1000…). Bunlar "sahipsiz" değil, **henüz o çağda yok** sayılıyor (Değişmez 1 kesitleri 1285'ten başlar); petek motorunda toprakları en yakın mevcut noktaya emilir. Bu bir toplu veri girişi işidir (şehir başına ilhak tarihi + 395/476 sonrası zincir, yaklaşık 100-150 şehir); tek oturumda kaynaklı yazılamaz → öneri aşağıda.

## 2. Bulgular

**(c) 330-395 künye çakışması — sınıflandırma.** `bizans` künye f=330-05-11; `roma-imp` künye t=395-01-17. TDV «Bizans» (okundu 13.11.2026): künye aralığı «330-1453», 330 = Konstantinopolis'in açılışı; aynı madde 395'i Doğu-Batı ayrımının kalıcı oluşu sayar. Sonuç: iki ayrı polity değil, KONVANSİYON örtüşmesi (D205 sınıf ② Zend'in tersi: künye f erken, veri 395 olmalı). Çare künyeyi daraltmak değil (TDV esas, künye f korundu) — **yerleşim zincirleri 395'e çekildi**. LAB'ın şüphesi yerinde: önceki ROMA-1111 yazımı 5 şehirde 330 yazmış, 6 şehirde (Ankara, Kayseri, İskenderiye, Argos, Sikyon, Palmyra) 395 yazmıştı; tutarsızdı. Düzeltme sonrası tek sınır 395. `bizans` künyesine `ic_not_f` beyanı yazıldı; roma-imp `ozet`'indeki "UYARI 330-395" çözüldü diye güncellendi.
Yan etki önlemi: 330-05-11 "Konstantinopolis açıldı" maddesi `toprak-kazanc` etiketliydi ama artık hiçbir zincirde 330'da kırılma yok ⇒ Değişmez 2t'ye +1 borç olurdu; madde `tur/etiket: baskent` (başkent açılışı toprak değişimi değildir) yapıldı (`data/olaylar_once1000_1019.js`).

**(d) Atina.** Roma Cumhuriyeti ucu `-0085-01-01` (onyıl) idi. Plutarkhos Sulla 14.6: Atina «Mart Kalendae»sında alındı (gün); TDV «Atina»: «Milâttan önce 86'da Romalılar'ın eline geçen şehir» (yıl) ⇒ f `-0085-03-01` (gün). Gün Roma takviminin kayıtlı günü, çevrilmedi; gün tek kaynak, çift teyit değil (beyanlı). 395 kırılması için Atina maddesi eklendi (Doğu payı BEYANLI YAKLAŞIKLIK).

**(a) Roma-dönemi delikleri (kaynaklı doldurulanlar).** Hepsi `__BOSLUK__` kaynak-beyanlı "kaynak sessiz" boşluklarıydı:
- Marsilya (-26 → 1281 boşluktu): roma-imp -26…395, bati-roma 395…476-08-28, [476-480 4 yıl beyanlı boşluk], vizigot 480-510, dogu-got 510-536, frank 536-843-08-10 (Treccani «Marsiglia»); 843'ten sonrası boşluk (kaynak okunmadı).
- Sirakuza (-26 → 1000): roma-imp -26…395, bati-roma 395…440 (TDV «Sicilya»: Vandallar 440); 440-1000 beyanlı boşluk.
- Messina (-288 → 843): Mamertin boşluğu -288…-261, roma-cumhuriyeti -261 (TDV: Roma hâkimiyeti MÖ 262)…-26, roma-imp, bati-roma →440; 440-843 beyanlı boşluk.
- Şam (-608 → 969): boşluk -608…-63; roma-cumhuriyeti -63 (Livius «Damascus»: MÖ 64 Pompeius), roma-imp, bizans 395…613, sasani 613-628 (TDV «Şam»), bizans 628…635-09 (Halid'in alışı, hicrî ay); 635-969 beyanlı boşluk.
- Kudüs (-585 → 1253): boşluk -585…-62; roma-cumhuriyeti -62 (TDV «Kudüs»: MÖ 63), roma-imp, bizans 395…614, sasani 614-629, bizans 629…638 (TDV, Belâzurî'ye göre 638); 638-1253 beyanlı boşluk.
Hiçbir yerde yeni devlet kimliği uydurulmadı; kullanılan hepsi `devletler.js`'te var ve `renkler.py` BOYALAR'da tanımlı (kimlik doğrulama betiğiyle ölçüldü). Künye ömrü aşımı: yeni dönemlerde 0.

## 3. Yapılan düzeltmeler (dosyalar)
- `data/yerlesimler.js` (10 yerleşim satırı): İzmit, Bergama, Sinop, İstanbul, Atina (330→395); Atina Sulla; Marsilya, Sirakuza, Messina, Şam, Kudüs (Roma zinciri).
- `data/kronoloji_sinir_antik_roma.js` (YENİ, 26 madde, `window.KRONOLOJI_SINIR_ANTIK_ROMA`): görev metnindeki ad `kronoloji_antik_roma.js` idi; `denetle.py` Değişmez 2/2s evrenini `kronoloji_sinir*.js` + `KRONOLOJI_SINIR*` ile kurduğundan (satır ~1221) **bilinçli olarak `kronoloji_sinir_antik_roma.js`** adlandırıldı, yoksa maddeler kırılmaları doğrulayamazdı. `index.html`'e `<script>` eklenmedi: `paketle ekle 09` ile `paket_09.js`'e girdi (benelux ile aynı paket).
- `data/devletler.js`: `bizans` `ic_not_f` (künye f korundu), `roma-imp` ozet güncellendi.
- `data/olaylar_once1000_1019.js`: 330-05-11 maddesi `tur/etiket` → `baskent`.
- Üretilmiş: `paket_05/09/13/35.js`, `paket_kunye.json`, `index.html` damgası (paketle yenile + surum_damgala; `paketle sina` TAZE).

## 4. Yapılmayanlar / ölçülemeyenler / riskler
1. **Tam `denetle.py` koşmadı** (yasaktı): Değişmez 2/2s/3/8 sayıları ÖLÇÜLMEDİ. Yeni s-kırılmaları (≈35) için 26 madde yazıldı (yer/yer_id şehir adı, gün eşleşmeli); 2s yer-şartı eşleşmesi ve tavanlar kapıda doğrulanmalı. Değişmez 8 `coz-c` ister.
2. **Çeviri eşitliği:** 26 yeni madde yalnız Türkçe; ar/de/en/es/fr/pt/ru çevirisi yok ⇒ `ceviri.py` tavanı kapıda yükselebilir (tavan sonradan raporlanır, CLAUDE.md).
3. 395 payı şehir bazında tanıklı değil (İzmit, Bergama, Sinop, Atina, Şam, Kudüs Doğu; Marsilya, Sirakuza, Messina Batı): bölünme çizgisi kabulü, kaynağında BEYANLI YAKLAŞIKLIK.
4. Messina'nın Roma'ya geçişi: TDV adanın MÖ 262'sini verir, şehre özgü yıl yok (MÖ 264 ittifak) — beyanlı. Sirakuza/Messina 440 sonrası (Vandal 440 · Odoakar 477 · Ostrogot TDV 488 ↔ `dogu-got` künye f 493-03-05 çelişkisi · thema 552) YAZILMADI: künye f ile TDV yılı çelişir, sınıflandırma kararı gerek.
5. Şam 635-09: TDV hicrî ay (Receb 14) verir, gün yok; Zilkade 15/636-12 kalıcı fetih ayrı eşik (ilk alış alındı).
6. Roma-dönemi `__BOSLUK__` kalanları (taranıp dokunulmayanlar): Eski Van, Bodrum (-333…1402), Urfa (242-661), Cerablus, Sart (-329…1000), Pella/Aigai (-167…1281), Eleusis, Nola, Camulodunum, Cartagena, Cádiz, Köln (395-481), İber şehirleri 476-507 (kısa, beyanlı) — her biri şehre özgü kaynak ister.
7. Livius.org «Damascus» tek kaynak (TDV Şam Pompeius'u anmaz; çelişki yok). Livius «Massalia» sayfası 404 verdi; Marsilya yalnız Treccani'ye dayanır (tek kaynak).
8. `arac/girdi.oku_devletler` ile yaptığım küçük doğrulamada (çakışma/sıfır uzunluk/künye ömrü/BOYALAR) yeni dönemlerde sorun 0; çıkan 18 uyarı eski kayıtlara (Çelebi ara dönemleri, atinadukaligi, italya f) ait ve bu işle ilgisiz.

## 5. Öneriler (karar gerektiren)
- **Penceresiz büyük şehirler (b):** ayrı, sonnet alt ajanlı bir "Roma şehir zinciri" oturumu: Roma kutusunda 100-150 büyük şehir (Selanik, Antakya, Edirne, Sofya, Filibe, Niş, Üsküp, İzmir, Efes, Tarsus, Konya, Trabzon, Diyarbakır, Londra, Paris, Köln…) için ilhak tarihi + 395 + 476/Arap fethi zinciri. Emre'nin kararı: bu çağda "nokta yok → petek emilir" kabul mü, yoksa nokta eklensin mi?
- Sicilya 440-552 dilimi için `dogu-got` künye f 493 ↔ TDV 488 ve Odoakar 477 kararı.
- `renkler.py`/`girdi.py` motor dosyalarına dokunulmadı; öneri yok.
