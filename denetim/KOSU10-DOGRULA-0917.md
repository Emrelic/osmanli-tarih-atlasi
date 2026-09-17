# KOŞU10-DOGRULA — oturumlar/KOSU10-SONRASI.md kalemlerinin ölçümü
17 Eylül 2026 · KOSU10-DOGRULA (eski Sonnet 1010) · koordinatör 1.MURAT

## Yöntem
Her kalem için: (a) referans verilen `denetim/YAMA-*.json` dosyasının kendi
`durum` alanı OKUNMADI TEK BAŞINA (D069: hüküm dosyası ölçümün fotoğrafıdır,
bayatlar) — bunun yerine (b) `data/*.js` içindeki GERÇEK kayıt, (c) ilgili
`git log` ve commit mesajları doğrudan karşılaştırıldı. Çok satırlı yamalarda
(A6a/A6b/A6c, RUS, HALKA-ADAY, KITA29-FERHATPASA) her satır tek tek değil,
**temsili örnek** satırlar ölçüldü — bu satırda ayrıca belirtildi. Veriye
YAZILMADI (görev şartı).

## Özet tablo

| # | Kalem | Durum | Kanıt |
|---|---|---|---|
| 0 | Yayın doğrulaması | **İNDİ** | `a4894b9` "YAYIN — KOSU 11 INDI" · `92d9349` "YAYIN — KOSU 10 INDI" · canlı damga şu an `?v=r8920` (KOŞU 10/11'den çok ileride, zincir sonraki günlerde de akmış) |
| 1 | KITA13-VAN (Çaldıran·Başkale·Van 1548) | **İNDİ** | `data/yerlesimler_ek26.js:130,138` Çaldıran/Başkale 1548-1639 aralığı; `data/yerlesimler.js:246` Van `d:1548-08-24→1920-04-23` (1639 adacığı yok, gün 24). Eski girdiler `yer_yama_kafkas.js`/`yer_yama_ok110.js`/`yer_yama_p0035.js`'te YORUMA alınmış (emekli). `a4894b9` commit mesajı da doğruluyor. |
| 2 | KITA13-BITLIS (2 kronoloji maddesi dahil) | **İNMEDİ** | `data/yerlesimler.js:247` Bitlis hâlâ TEK blok `d:[{f:"1515-09-15",t:"1920-04-23"}]`; `s:` içinde 1532-1534 safevi arası YOK. Önerilen iki kronoloji maddesi (1532-01-01 kayıp, 1534-01-01 fetih) hiçbir `olaylar*.js`/`kronoloji*.js` dosyasında bulunamadı. |
| 3 | KITA29-FERHATPASA (Maku·Şerur·Gence·Eçmiyazin·Nahçıvan·Revan) | **İNMEDİ** | Maku ve Şerur hiçbir yerleşim dosyasında yok. Gence `d:` hâlâ eski `{f:"1588-01-01",...}` (istenen 1588-09-01 değil). Eçmiyadzin `d:[]` boş (B1 hiç uygulanmadı — ama bu, checklist'in korktuğu "ters enklav" riskini de bertaraf ediyor, çünkü ikisi de boş). Revan `d:` hâlâ eski `{f:"1583-06-01",...}` — 69f110c'nin istediği `1583-09-13` DEĞİL, yani C1/B1 birlikte inme şartı da sağlanmamış durumda (ikisi de inmemiş). Nahçıvan 1586 kırılması yok. |
| 3b | Ferhat Paşa cephe matrisleri (SEHIR-MATRISI, GUNEY, 0047-BATI, AHAR-SARAB-MIYANE, NIHAVEND-BAGLANTI) | **İNMEDİ** | Kirmanşah/Hemedan/Nihavend kayıtları (aşağıda madde 5-2) hâlâ eski/kaynaksız durumda; hiçbir dosyanın kendi `durum` alanı "UYGULANDI" demiyor (SEHIR-MATRISI ve 0047-BATI açıkça "UYGULANMADI" yazıyor). |
| 4 | CIZRE-BOHTAN (künye taslağı) | **İNMEDİ** | `data/devletler.js`'te `bohtan` id'li künye YOK. `data/yerlesimler_ok107.js:40`'taki Cizre kaydı ESKİ (farklı) bir oturumun (ok107) kaydı, künye taslağıyla ilgisi yok. |
| 5 | KARTLI-KAHETI (künye f:1490 t:1762) | **İNMEDİ** | `data/devletler.js:7661` yalnız önceden var olan `kaheti-kralligi` (f:1578-08-09 t:1606-01-01) duruyor — bambaşka pencere. `kartli` id'si hiç yok, birleşik `kartli+kaheti` 1490-1762 künyesi işlenmemiş. |
| 6 | KITA19-BUDIN-1529-HIMAYE (v: 1526→1529) | **İNMEDİ** | `data/yerlesimler.js:467,1280` Budin/Peşte `v:` hâlâ `f:"1526-09-01"` — 1529'a çekilmemiş. |
| 7 | KITA19-DEBRECEN-K-ETIKET | **İNMEDİ** | 6 numaralı ön koşul sağlanmadığı için (metnin kendi sırası da bunu gerektiriyordu) bu da inmedi; Debrecen'in mevcut `v:` kaydı (`yer_yama_vassal_kid_0906.js:316`) farklı bir önceki yamadan geliyor, K-etiket değişikliği ayrı. |
| 8 | SIRENAYKA kalanları (Derne zinciri · Bingazi 1551/1578) | **İNDİ** — ama ⚠️ KOŞU 10'DAN ÖNCE | `data/yerlesimler.js:831-911` Derne "tam zincir" (hafsi→ispanya 1510-07-25→rodos-şövalyeleri 1530-03-24→osmanlı 1551-08-15) ve Bingazi (`1551-08-15` seçimi, gerekçeli) TAM işlenmiş. Ama kod içi yorum "**12 Eylül 2026**" tarihini taşıyor — yani bu karar checklist'in yazıldığı 13 Eylül'den ÖNCE zaten kapanmış; KOSU10-SONRASI.md'nin "iki açık karar Emre'de" tarifi YAZILDIĞI ANDA BİLE BAYATTI (D178 ailesi). |
| 9 | ANAPA (isg: 1791-92 · 1828-29) | **İNDİ** | `data/yerlesimler.js:565` Anapa kaydında iki `isg:` bloğu (1791-07-26→1792-01-09 ve 1828-06-24→1829-09-14) birebir mevcut, kaynak alanı doğrudan "YAMA-ANAPA-0913" diyor. |
| 10 | KITA14 (0044 yerleşim, 4 kalem: Kostajnica·Bosna Novi·Tobruk·Nikarya) | **İNMEDİ** (3/4) + **N/A** (1/4) | Kostajnica `data/yerlesimler_ek29.js:261-267` hâlâ eski gün (`1556-07-17`, önerilen 07-16 değil) ve eski Wikipedia kaynağı (akademik kaynakla değişmemiş). Bosna Novi aynı dosyada dokunulmamış. Nikarya `data/yerlesimler.js:535` hâlâ `ceneviz 1362→1521` doğrudan `d:OSMANLI 1521`den — şövalye ara dönemi (1481-1521/23) YOK. Tobruk zaten "DOKUNMA" isteniyordu, dokunulmamış — bu kalem için uyumlu/N/A. |
| 10b-a | 2S-RUSYA (25 aday, 2 somut öneri) | **İNMEDİ** | Kendi dosyası "data/'ya YAZILMADI" diyor; önerilen iki madde (1328-01-01 İzmir/Çeşme, 1899-05-30 Nairobi) hiçbir olaylar/kronoloji dosyasında yok. |
| 10b-b | KUNYE-ALANI (kronoloji maddelerine `kunye:` bağı) | **İNDİ** | `data/kronoloji_misir.js:51,55` örnek kayıtlarda `kunye:["misir-eyaleti"]` mevcut; bağımlı olduğu `misir-eyaleti`/`sirbistan-eyaleti` künyeleri `data/devletler.js:7718,7728`'de artık var. (38 kayıttan 2'si örnekleme ile doğrulandı, kalanı taranmadı — bkz. not.) |
| 11 | KITA16 dolgu noktası (Fizan boşluğu) | **İNMEDİ** | `denetim/P06-ARAP-0914.md` ve `OLCUM-PAKET-SINIF-0913.md` hâlâ "Emre'ye soru (beyaz mı boyalı mı)" statüsünde — karar bile verilmemiş. |
| 12 | renkler.py `kavalali` → devletler_harita.js bağı | **İNMEDİ** | `arac/renkler.py:2020`'deki `kavalali` renk kaydı aslında **12 Ağustos 2026'dan beri var** (bu maddenin asıl gerekçesiyle ilgisiz, eski bir renk). Asıl istenen bağ — `data/devletler_harita.js`'te `kavalali` anahtarı — hâlâ YOK (grep 0 sonuç). Bu dosya 🤖 ÜRETİLMİŞ olduğundan muhtemelen bir tam koşu (`uret_petek.py`) gerektiriyor. |
| §5 iç-not (İç not yaması, KITA14 dosyaları) | **İNDİ** | `data/kronoloji_akkoyunlu.js:252-256` örnek kayıtta `d:` temiz, not `ic_not_d:` alanına taşınmış. 5 hedef dosyanın (`olaylar_ek5/ek7/ek8/ek15/p0044`) hepsinde `ic_not_` alanı var (44/12/13/13/6 kayıt) — toplam projede 1214 `ic_not_*` alanı, 95 dosyada. `8f2e3f4` "KRONOLOJI — paket KRON2: … ic_not'a" commit'i de bunu destekliyor. ⚠️ "olaylar_ek8 (6) ve olaylar_kamerika (3) metin değiştiği için YENİDEN TARANMALI" alt-notu ayrıca ölçülmedi. |
| §5 YER-ID (36 öneri) | **İNDİ** (örneklemde) | `data/olaylar_ek20.js:332` Tilsit maddesinde `yer_kon:[55.0864, 21.8892]` önerilen değerle birebir. (1 kalem örneklemle doğrulandı, 90 kayıtlık tam liste TARANMADI — çoğu zaten "zaten-dogru" kovasında, gerçek öneri 36.) |
| 5-0 Kilitbahir | **İNMEDİ** | `data/yerlesimler.js:301` hâlâ `kur:"1452-01-01"`, 1463/1465'e taşınmamış. |
| 5-0 Niğbolu | **İNMEDİ** | `data/yerlesimler.js:363` `s:` hâlâ `{f:"1281-01-01",t:"1395-01-01",d:"bulgaristan"}`; kronoloji maddesinin kendi `ic_not_d:` alanı açıkça "t 1395-01-01 KORUNDU … İZ (koşu sonrası, yerleşim)" diyor — kendi kendini "henüz yapılmadı" diye damgalamış. |
| 5-0 Ferhat Paşa yeniden kaynaklama | **İNMEDİ** | Madde 3/3b ile aynı veri; hiçbiri değişmemiş. |
| 5-0 KITA14 Tebriz kararı | **N/A** | Bu kalem zaten "hüküm DOĞRU kalır" diyor, aksiyon istemiyor — kontrol gerektirmiyor. |
| 5-3 A6b (Lehistan·Litvanya·Çehrin·Hotin·Özi, 9 yerleşim+1 madde+2 künye+3 sefer+8 halka) | **İNMEDİ** | Kendi dosyası "HAZIR DEĞİL İNİŞ İÇİN … Hiçbir satır uygulanmadı" diyor (bu nadir örnekte kendi `durum` alanı güncel). `kazak-hetmanligi` künyesi `data/devletler.js`'te YOK, `polonya-erken` rengi `arac/renkler.py`'de YOK. |
| 5-3 A6a (Balkan·Anadolu, 17 yama+11 halka) | **İNMEDİ** (örneklemde) | Vodina `data/yerlesimler*.js`'te bulunamadı (aranan ad hiç geçmiyor) — Y2 kalemi inmemiş. Diğer 16 satır tek tek TARANMADI. |
| 5-3 A6c (Doğu·Arap, 5 yama+2 madde+12 halka) | **İNMEDİ** (örneklemde) | Şamahı `data/yerlesimler.js:635` hâlâ `d:` (doğrudan Osmanlı) diziliminde, `v:` (tâbi) DEĞİL — C-0020 kalemi inmemiş. |
| 5-3 A4-SEFER B kalemleri | **ölçülemedi** | Zaman kısıtı nedeniyle taranmadı. |
| 5-3 KRON2 (16 kalem) | **İNMEDİ** (örneklemde) | Yenişehir Muharebesi hâlâ İKİ AYRI maddede duruyor (`olaylar_ek5.js:179` 1513-04-01 ve `olaylar_ek7.js:26` 1513-04-24) — istenen birleşme olmamış; ek7'deki kaydın kendi `ic_not_d:` alanı "birleştirme/ayırma kararı YAMA-KRON2 16" diyerek bunu doğruluyor. |
| 5-3 RUS (25 isg grubu, kazak-hetmanligi künyesi) | **İNMEDİ** | `kazak-hetmanligi` künyesi yok (yukarıda). Yaş kaydı (`data/yerlesimler.js:448`) hâlâ eski Bükreş-paralel `isg:` çiftini taşıyor (1806-1812, 1828-1834); istenen 1711/1739 pencereleri yok. |
| 5-3 Kırım bozkırı (üç ton) | **İNDİ** (hem VERİ hem MOTOR) | `data/yerlesimler.js:565` Anapa'da `v:[{...kid:"kirim",statu:"gevsek",himaye:true}]` — tam istenen şema. `arac/uret_petek.py` içinde `himaye_gruplari`/`himaye_govdeleri` fonksiyonları ve `_HIMAYE_VAR` bayrağı mevcut (satır ~5173-5240). `data/donemler.js` üretilmiş çıktısında `"h":[...]` grupları gerçekten var. `a4894b9` "YAYIN — KOSU 11 INDI … Kirim uc ton" commit mesajıyla da örtüşüyor — ③ arayüz/lejant ayrıca doğrulanmadı. |
| 5-3 KRON3 (Dubrovnik 1814-01-28, Bihaç) | **İNMEDİ** | `data/yerlesimler.js:2283` Dubrovnik `s:` hâlâ `t:"1814-01-01"` (28'e çekilmemiş). |
| 5-3 Çaldıran·Başkale (0049/H-0001) | **İNDİ** | Madde 1 ile aynı kayıt — tekrar doğrulandı. |
| 5-3 ARAS0048 (7 yama) | **İNMEDİ** (örneklemde) | Katar/Doha (`ad:"Katar"`/`ad:"Doha"`) hiçbir yerleşim dosyasında yok — Y4 dolgu noktası hiç oluşturulmamış. |
| 5-3 denetle.py savas_senkronu borcu | **ölçülemedi (kısmi)** | `def savas_senkronu` fonksiyonu `arac/denetle.py:3052`'de duruyor; "AD BAKMADAN eşliyor" kusurunun düzeltilip düzeltilmediği (kod okuması gerektirir) zaman kısıtından TARANMADI. |
| 5-3 A3 (Uzun Hasan 1468 · Ahıska 1578) | **ölçülemedi/muhtemelen İNMEDİ** | Ahıska kaydı (`data/yerlesimler.js:936`) `d:[{f:"1578-08-01",...}]` taşıyor ama bu maddenin "A3 teslim edince" ön koşuluna bağlı olup olmadığı ve eşlik etmesi gereken kronoloji maddesi doğrulanamadı. |
| 5-2 Kirmanşah (kaynak yeniden yazımı) | **İNMEDİ** | `data/yerlesimler.js:684` `kaynak:` alanı hâlâ eski "bulunamadı — TDV `kirmansah` … 14-16 yy anlatmıyor" metnini taşıyor; Monshi/Şerefname/Kütükoğlu referansı yok, `d.t` hâlâ `1603-10-21` (yeniden kaynaklanmamış). |
| 5-1 HALKA-ADAY (17 öneri) | **İNMEDİ** (örneklemde) | Kayseri (`data/yerlesimler.js:217`) hâlâ `d:[{f:"1419-01-01",t:"1920-04-23"}]` — Memlük/Dulkadır/Karaman ara dönemi yok, tek blok Osmanlı. Derbend fetih maddesi (`olaylar_ek5.js:507`) hâlâ `t:"1583-01-01"` (5 Ekim 1578'e çekilmemiş). |
| 5a Malaka 1511 günü | **İNMEDİ** | `data/yerlesimler_asya.js:3454-3457`, `data/devletler.js:4673,4679,5987`, `data/kronoloji_portekiz.js:209` — DÖRT ayrı yerde hâlâ `1511-08-24`; hiçbiri `1511-08-10`'a çekilmemiş. (KOSU10-SONRASI.md'nin kendi tarifi "üç yer" diyordu, gerçekte kronoloji_portekiz.js ile birlikte DÖRT yer.) |
| 5b (Astarhan iç not, Malaka kuyruk, Tarih-i Hind-i Garbi, harita odağı önerileri, YAMA-KITA14 4 kalem) | **kısmen ölçüldü** | YAMA-KITA14 4 kalemi madde 10'da ayrıca raporlandı (İNMEDİ). Kalan alt-kalemler zaman kısıtından TARANMADI. |
| 6 Koşu 11 motor gündemi (maliyet/enklav yaması, C-motor girişi) | **ölçülemedi** | Kod tarafı (Opus işi); bu oturumun kapsamı dışında hızlı ölçülemedi — `uret_petek.py` içinde `himaye_*` dışında bu maddelere özel arama yapılmadı. |
| 7 C katmanı — `kapsama.negatif_taraf` | **İNDİ** (kendi ✅ işareti doğrulandı) | `a067631` commit'i gerçekten var ve mesajı ("C BELGELI SINIRLAR — taraf boyamasi nokta sirasindan bagimsiz") eşleşiyor. |
| 7 karlofca-bosna-kaleler/una örtüşme · banat-maros/bahçesaray-özü | **ölçülemedi** | Zaman kısıtından taranmadı; kendi metni zaten "karar verilmedi"/"bulunamadı" diyor. |

## Genel tablo
```
İNDİ            :  9  (madde 0 · 1 · 8 · 9 · Kırım-üç-ton · iç-not · YER-ID · KUNYE-ALANI · C-negatif-taraf)
KISMİ           :  0
İNMEDİ          : 24  (madde 2·3·3b·4·5·6·7·10(3/4)·10b-a·11·12·5-0 Kilitbahir·5-0 Niğbolu·5-0 FerhatPaşa·
                        A6a·A6b·A6c·KRON2·RUS·KRON3·ARAS0048·Kirmanşah·HALKA-ADAY·Malaka)
N/A / gerektirmiyor:  2  (Tobruk-dokunma · KITA14-Tebriz)
ÖLÇÜLEMEDİ      :  6  (A4-SEFER-B · savas_senkronu-kod · A3 · 5b-kalan · motor-gündemi-6 · 7-diğer)
```

## Genel bulgu
Koşu 10/11'in kendisi **başarıyla yayınlandı** (madde 0, 1, 8, 9, Kırım-üç-ton, C-katmanı —
hepsi motor/yerleşim/renk tarafından gerçekten indi). Ama KOSU10-SONRASI.md'nin
listelediği **araştırma yamalarının büyük çoğunluğu (24/41 ölçülen kalemin
üzerinde) hâlâ diskte, hiçbiri `data/`'ya işlenmemiş** — dosyaların kendi
`durum` alanları çoğunlukla bunu zaten söylüyordu ("ÖNERİ", "UYGULANMADI",
"data/ DONUK") ama bazı yamalar (KITA29-FERHATPASA gibi) "KARARLI ÖNERİ"
yazmasına rağmen hâlâ inmemişti — yani kendi durum alanına güvenmek yeterli
değildi, veri karşılaştırması gerekti (bu raporun yöntemi).

**Dikkat çeken tek istisna (D178 ailesi):** madde 8 (Sirenayka) checklist
YAZILMADAN ÖNCE zaten çözülmüştü (12 Eylül tarihli) — "iki açık karar
Emre'de" cümlesi yazıldığı anda bile bayattı.

## İNMEDİ olanlar için dokunulacak dosyalar ve koşu gerekip gerekmediği
- **Yerleşim dosyaları** (madde 2·3·5·6·8→zaten indi·10·5-0·A6a/b/c·RUS·
  KRON3·ARAS0048·HALKA-ADAY·Malaka-yerleşim-tarafı): `data/yerlesimler*.js`
  değişir → **KOŞU GEREKİR** (motor bunları okuyup peteği yeniden üretmeli,
  `§7` uyarınca donuk döneme denk gelmemeli).
- **Künye dosyası** (madde 4·5·6-bağlı·RUS-kazak-hetmanligi): `data/devletler.js`
  değişir → yeni `harita:` anahtarları eklenirse **KOŞU GEREKİR**
  (`renkler.py` + `uret_petek.py` yeniden).
- **Renk** (madde 12): `arac/renkler.py`'ye dokunmuyor (zaten var), ama
  `data/devletler_harita.js` üretilmiş dosya → **KOŞU GEREKİR** (ya da elle
  tek satır ekleme + `renk_olc.py`, madde 12 kendi notunda zaten böyle diyor).
- **Yalnız kronoloji** (madde 3-madde-önerileri·5-0-Niğbolu-madde·10b-a·
  Malaka-kronoloji-tarafı·KRON2·HALKA-ADAY-madde): `data/olaylar*.js` /
  `data/kronoloji*.js` — bunlar §5'in kendi notuna göre **KOŞU DONUK
  DEĞİLKEN de inebilir** (motor donuk kısıtı bunları kapsamıyor).
- **Kirmanşah kaynak metni**: yalnız metin, `data/yerlesimler.js` içinde —
  yerleşim dosyası olduğu için teknik olarak koşu kısıtına giriyor ama
  coğrafi/petek etkisi yok (yalnız `kaynak:` string'i) — düşük öncelikli.

## Not — örneklemle ölçülen büyük yamalar
A6a (17 yama), A6c (5 yama), HALKA-ADAY (17 öneri), 2S-RUSYA (25 aday) gibi
çok satırlı dosyalarda her satır tek tek karşılaştırılmadı; birer-ikişer
temsili satır ölçüldü ve hepsi İNMEDİ çıktı. Bu, kalan satırların da
inmediğine dair güçlü bir işaret ama **kanıt değil** — dosyalar arasında
tek tek "indi" olan istisnai satırlar gözden kaçmış olabilir. Tam doğrulama
istenirse her yamanın satır sayısı kadar ek ölçüm gerekir.
