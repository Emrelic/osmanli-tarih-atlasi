# 59 · Çağatay Hanlığı — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 2026-11-04 (ölçer ikinci kez, "otomatik dönem ucu kaydı" satırıyla koşturuldu)

## Özet
- Künye 3: `cagatay` (1227→1370-04-09), `mogulistan` (1347→1680), `mogolistan-hanligi` (1347→1514, **0 yerleşim, `mogulistan` ile mükerrer**).
- Açık kırılma: `cagatay` 2/4 (+0 otomatik maddeyle kapanan), `mogulistan` 6/7 (+0 otomatik). Toplam 8 açık.
- Eksik madde: 1347 ayrılma, 1370-04-09 Timur, 1503 Taşkent kaybı, 1514 Kaşgar/Yarkent, 1513 Hâmi (kaynaksız), 1634/1680 (kaynaksız) = 6.
- En ağır 3 bulgu: (1) 1347 ve 1370-04-09 Değişmez 2 evreninde maddesiz; en yakın madde 31 ve 98 gün uzakta. (2) `mogulistan` künyesi kaynaksız ("bulunamadı") ve `mogolistan-hanligi` ile aynı varlık için iki künye; `mogulistan` t=1680 ve 1634 kaybı hiçbir kaynakla desteklenmiyor. (3) `cagatay` künyesinin kendi kronolojisi bölünmeyi 1334'e, `mogulistan` künyesi 1347'ye koyuyor; kaynaklar (CHIA Golden: 1347; TDV: yalnız hükümdar aralıkları, bölünme tarihsiz) 1334'ü "bölünme günü" olarak desteklemiyor.

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| cagatay | Çağatay Hanlığı | 1227-01-01 | 1370-04-09 | var; 46 yerleşim (en geniş 1283-1346: 45). Batı kol (Mâverâünnehir) 1347 sonrası da bu künyede sürüyor, Doğu kol ayrı künye. |
| mogulistan | Moğulistan (Doğu Çağatay Hanlığı) | 1347-01-01 | 1680-01-01 | var; 25 yerleşim; kaynak "bulunamadı"; ozet `[[mogolistan]]` ile karıştırılmamalı diyor |
| mogolistan-hanligi | Moğolistan (Mughulistan) Hanlığı — Doğu Çağatay | 1347-01-01 | 1514-01-01 | 0 yerleşim; kaynakları Iranica/Britannica/e-history.kz; **`mogulistan` ile aynı polity** (mükerrer) |
| yarkent-hanligi | (devletler.js:7145) | — | — | ardıl; bu denetimin dışı, yalnız varlığı doğrulandı |
| timurlu | (devletler.js:2140) | f=1370-04-09 | — | Çağatay batı kolunun ardılı; ayrı denetimde |

Eksik evre: yok (Batı/Doğu ayrımı iki künyeyle karşılanmış). Fakat Doğu kolun 1514 sonrası (Yarkent Hanlığı `yarkent-hanligi`, Turfan kolu) ile `mogulistan` t=1680 ilişkisi belirsiz (b'ye bak).

## b) f/t ve evreler
| uç | atlas | kaynak 1 | kaynak 2 | hüküm | önerilen |
|---|---|---|---|---|---|
| cagatay f | 1227-01-01 | TDV «Çağatay Hanlığı» (islamansiklopedisi.org.tr/cagatay-hanligi, bu oturumda okundu): hanlık 1227-1370; madde yalnız yıl düzeyinde tarih verir | ikinci bağımsız akademik kaynak **çekilemedi** (Britannica 403; Iranica okunamadı) | TDV ile uyumlu, tek kaynak | değişmez; `ic_not_f`e "yıl düzeyi, Cengiz'in ölümü 1227 ile örtüşür" yazılabilir |
| cagatay t | 1370-04-09 | TDV Çağatay: Timur'un Mâverâünnehir'e fiilen hâkimiyeti "1370'lerde" (onyıl); «1227-1370 yılları arasında…» | CHIA ("Temur and the early Timurids to c.1450", Golden/Manz çizgisi; Cambridge Core, bölüm sayfası okundu): Temür'ün iktidara gelişi var, 1370 günü sayfada yok. Tablo-hicrî hesap: 12 Ramazan 771 = 1370-04-09 Jülyen (hesap, doğrulanmadı; Zafernâme "Çarşamba" diyorsa 10 Nisan olur — hesap Salı verir, ±1 gün belirsiz). Arama sonucunda Digital Silk Road (Toyo Bunko) metni "12 Ramazan, Çarşamba" diyor — **tam okunamadı**, doğrulanmadı | 9 Nisan günü atlasın künye notunda (Timurlu f ile aynı) ve hesapla uyuyor; kaynaklarım günü doğrulamıyor | gün korunsun, `ic_not_t`e "tablo hesabı, ±1 gün; TDV onyıl verir" eklensin. Okunacak: Bernardini 2005 (Balkh 1370 ilanı), Manz *Rise and Rule of Tamerlane* — aşağıda ERİŞİLEMEYEN |
| mogulistan f | 1347-01-01 | CHIA, P. Golden (Cambridge History of Inner Asia, "Temur and the Early Timurids" sayfası, okundu): 1347'de Kazgan Kazan Han'ı öldürdü; aynı yıl Tughluq Temür doğu hanlığında iktidarı aldı | `mogolistan-hanligi` künyesi (Iranica 'Central Asia v' 747-48/1347 — künye notundan, **ben okumadım**). Hicrî hesabım: 747 = 1346-04-24…1347-04-12; 747-48 ∩ 1347 ilk gün = 1347-01-01 | 1347 yıl düzeyinde tutarlı (2 kaynak, biri dolaylı). TDV «Çağatay» Kazgan'ı 1346-1358 verir ve Moğulistan'ın doğuşunu tarihlemez | değişmez; `kesinlik: yil` |
| mogulistan t | 1680-01-01 | künye: "Cungar Turfan kolunu yutunca" (kaynak yok) | TDV «Kâşgar»: Âfâk Hoca Kalmuklar'ın yardımıyla 1678'de emir oldu; "Cungar" adı geçmiyor, 1680 yok. TDV «Hoten»: 1678'de Hocalar devri başladı | **KAYNAKSIZ**. 1680 Doğu Türkistan'da Cungar/Galdan fethi (Hâmi/Turfan) için kaynak bulamadım; TDV 1678'i verir | t'yi kaynak bulunana dek "1680 (kaynaksız)" olarak beyan et ya da TDV 1678 ile yıl düzeyinde yaz; Cambridge History of China vol. 8-9 / Perdue *China Marches West* okunmalı (ERİŞİLEMEYEN) |
| mogolistan-hanligi t | 1514-01-01 | künye notu: Said Han Kaşgar 920/1514 (Iranica 'Chaghatayid dynasty', okunmadı) | TDV «Kâşgar»: Duğlat hâkimiyetinin sonu "1499 veya 1514" (iki tarih verir) | TDV çelişkiyi kendi içinde verir (1499/1514); hicrî hesabım: 920 = 1514-02-26…1515-02-14, yani 920 ∩ 1514 ilk günü **1514-02-26** (hesap, doğrulanmadı), atlas 1514-01-01 | `ic_not`ta TDV 1499/1514 + Iranica 920/1514 çelişkisi beyan edilsin; gün 1514-02-26 (hesap) ya da yıl düzeyi |
| Tarmaşirin (kronoloji) | 1326 İslâm | TDV Çağatay: hükümdarlık 1326-1334 | CHIA Golden: 1331-1334 | **çelişki**: iki kaynak başlangıcı farklı veriyor (1326 / 1331) | künye kronolojisindeki 1326 maddesi TDV'ye dayandığı için kalır; `ic_not`a CHIA 1331 yazılsın |
| Bölünme 1334 (künye kronoloji) | 1334 "ikiye bölündü" | TDV: Tarmaşirin'in ölümünden sonra ~30 yıl karışıklık; bölünme tarihi **verilmez** | CHIA: 1334 sonrası "doğu-batı ayrılmaya başladı"; resmî ayrılma 1347 | 1334 = ayrılma süreci başlangıcı, 1347 = fiilî ayrılma; ikisi ayrı olaydır | künye maddesinin metni "karışıklık/ayrılma süreci başladı" yapılsın; bölünme günü 1347 |
| Kazgan | — | TDV: Emîr Kazgan 1346-1358 | CHIA: 1347 | **çelişki 1346 / 1347** (Kazan Han'ın öldürülmesi) | iki kaynakla ic_not'ta beyan |

## c) Kronoloji (Değişmez 2 evreni: olaylar*.js + kronoloji_sinir*.js)
Var olanlar:
- `data/olaylar_ortacag_iran_hint_magrib.js:104` 1227 "Cengiz Han'ın oğlu Çağatay'a Mâverâünnehir ve çevresi pay edildi" (yıl).
- `…iran_hint_magrib.js:115,116,119,124,125` Kara Hülâgû 1241, Çağatay'ın ölümü 1241-05, Yesü-Mengü 1246, Algu 1260 (TDV alıntılı), Mübârek Şah 1266.
- `data/kronoloji_sinir_once1281_yerlesim_asya_iran.js:39,45` 1227 Balasagun (Çağatay'a düştü), 1260 Algu / Buhara Çağatay'a bağlandı (sınır, `devlet:"cagatay"`).
- `data/kronoloji_sinir_dogu_500_1281.js:1723-1737` Karaşar 1227; `…:5299-5300` Taraz/Bâmiyan 1260; `…:8659-8660` Hotan 1270 Yuan'a geçiş.
- `data/olaylar_ek17.js:264-267` 1485 Taşkent Moğulistan hanı Yûnus Han'ın idaresine geçti (TDV Taşkent 890/1485, okundu). Hicrî hesabım: 890 ∩ 1485 ilk günü 1485-01-18; madde 1485-01-01 yıl düzeyinde (±17 gün, kabul edilebilir).
- Künyenin içindeki `kronoloji:[…]` (devletler.js:5305-5311: 1227, 1260, 1326 Tarmaşirin, 1334 bölünme, 1370-04-09 son; devletler.js:7227-7233 Moğulistan: 1347, 1428, 1487, 1514, 1680) — **evren dışı, var**.

Eksik (önerilen satırlar; biçim künye `kronoloji` şemasından, Değişmez 2 dosyasına uyarlanmalı):
1. `{ t:"1347-01-01", kesinlik:"yil", b:"Çağatay Hanlığı fiilen ikiye ayrıldı: Mâverâünnehir'de Kazgan, doğuda Tuğluk Timur han oldu (Moğulistan)", yer_id:"Almalık (Almalığ)", kaynak:"P. B. Golden, Cambridge History of Inner Asia (Cambridge Core, 'Temur and the Early Timurids to c.1450', okundu): 1347'de Kazgan Kazan Han'ı öldürdü, Tughluq Temür doğu hanlığında iktidarı aldı; TDV Çağatay Hanlığı: Kazgan 1346-1358 (çelişki: 1346/1347, ic_not'a yaz)" }` — `cagatay`+`mogulistan` 1347-01-01 iki açık kırılmayı kapatır.
2. `{ t:"1370-04-09", b:"Timur Belh'te Mâverâünnehir hükümdarlığını ilan etti; Çağatay batı kolu fiilen sona erdi", yer_id:"Belh", kaynak:"TDV Çağatay Hanlığı: Timur'un Mâverâünnehir'e fiilen hâkimiyeti '1370'lerde'; gün: 12 Ramazan 771 tablo hesabı = 1370-04-09 (hesap, doğrulanmadı; Bernardini 2005 / Manz ile teyit edilecek)" }` — `cagatay` 1370-04-09 açık kırılmasını kapatır.
3. `{ t:"1503-01-01", kesinlik:"yil", b:"Şeybânî Han Taşkent'i aldı; Moğul hanlarının Taşkent hâkimiyeti sona erdi", yer_id:"Taşkent", kaynak:"TDV Taşkent (islamansiklopedisi.org.tr/taskent, okundu): «908’de (1503) Taşkent’i Özbek Şeybânî Han aldı»" }` (hicrî 908 ∩ 1503 ilk günü 1503-01-01, 908 = 1502-07-07…1503-06-25, hesap doğrulanmadı). `mogulistan` 1503 açığını kapatır.
4. `{ t:"1514-01-01", kesinlik:"yil", b:"Sultan Said Han Kaşgar'ı alıp Yarkent'te yeni hanlığı kurdu; Doğu Çağatay'ın Tarım havzası kolu Moğulistan'dan ayrıldı", yer_id:"Kaşgar", kaynak:"Iranica 'Chaghatayid dynasty' (künye notundan, okunmadı) 920/1514; TDV Kâşgar: Duğlat hâkimiyetinin sonu '1499 veya 1514' — çelişki ic_not'a" }` — `mogulistan` 1514 açığı (Aksu, Hotan, Karaşar, Kaşgar).
5. 1513 Hâmi, 1634 Almalık/Almatı/Altay/Balasagun kaybı, 1680 Hâmi/Turfan kaybı: **kaynak bulamadım**. TDV «Hoten» ve «Kâşgar» 1513/1634/1680 vermiyor. Madde yazılmamalı; önce dönem sınırı kaynakla sınanmalı (d bölümü).

## d) Harita uyumu
`cagatay`: kırılma 4, açık 2 (+0 otomatik); `mogulistan`: kırılma 7, açık 6 (+0 otomatik). `⚠` (harita anahtarıyla yazılmış s: dönemi) satırı çıkmadı.

| gün | yerleşimler | öneri |
|---|---|---|
| 1347-01-01 (cagatay kayıp / mogulistan kazanç) | Aksu, Almalık, Almatı, Altay (Şara Sume)… (cagatay 45→22; mogulistan 23) | c-1 maddesi |
| 1370-04-09 (cagatay kayıp) | Andican, Belh, Buhara, Cizzah… (22 → Timurlu) | c-2 maddesi; en yakın madde 98 gün (Fârûkî) |
| 1503-01-01 (mogulistan kayıp) | Taşkent | c-3 maddesi |
| 1513-01-01 (kazanç) | Hâmi (Kumul) | kaynak yok → Hâmi s: dönemini **kaynak bulunana dek kaldır / BEYANLI yaklaşıklık** (TDV Hoten'de yalnız 1931 Kumul geçer) |
| 1514-01-01 (kayıp) | Aksu, Hotan, Karaşar, Kaşgar | c-4 maddesi; atlas `kd:` Yarkent 1514-1705 var (yerlesimler_asya.js:2903) |
| 1634-01-01 (kayıp, 14→2) | Almalık, Almatı, Altay, Balasagun… | **kaynaksız**; Kazak/Oyrat hâkimiyeti 16.-17. yüzyılda Yedisu'ya girdi — bu kayıt için kaynak aranmalı, yoksa dönem kırp |
| 1680-01-01 (kayıp) | Hâmi (Kumul), Turfan | künye t ile birlikte kaynaksız; TDV 1678 |

Sahiplik denetimi (en geniş yıl 1283, 45 yerleşim): Bilinen çekirdek (Almalık, Semerkant, Taşkent, Hucend, Belh, Kaşgar, Yarkent, Hotan, Balasagun, Karaşar, Kuça) Çağatay'ın bilinen alanıyla uyumlu (TDV Çağatay: «Mâverâünnehir, Yedisu ve Doğu Türkistan»). **Şüpheli:** (i) **Gazne, Kâbil, Bâmiyan** zincirleri `cagatay` 1260/1281→1370: TDV «Gazne»: "Çağataylılar yöreye hâkim oldular" (tarihsiz), Timur Gazne'yi 1401'de aldı; Kertler/İlhanlı vasalı/Neküderî gibi aktörler TDV Gazne'de geçmiyor — Afganistan'ın 1260-1370 sahipliği için ikinci kaynak yok. (ii) **Turfan** `cagatay` 1281→1347: Koço Uygur ve Yuan bağlantısı ayrıca sınanmalı (zincirde Turfan 1260'ta mogol-imparatorlugu'ndan sonra cagatay). (iii) Yerleşim sayısı 1353'te 22'ye düşüyor (batı kol): Karşi, Şehrisebz, Semerkant, Buhara, Taşkent, Hucend, Belh uyumlu.

## Önerilen düzeltmeler (KASA için)
1. `data/olaylar_ortacag_iran_hint_magrib.js` (ya da `olaylar_ek17.js`) içine c-1, c-2, c-3, c-4 maddelerini ekle (Değişmez 2: 4 açık kırılma kapanır).
2. `data/devletler.js:7223` `mogulistan` künyesi: `kaynak:` "bulunamadı" yerine `mogolistan-hanligi` künyesinin kaynak metni (Iranica + TDV Kâşgar/Taşkent) aktarılsın; **`mogolistan-hanligi` künyesi (devletler.js:21506) silinsin ya da `mogulistan`a birleştirilsin** (0 yerleşim, mükerrer; ancak başka dosyaların `mogolistan-hanligi` referansı Grep ile sınanmadan silinmesin).
3. `mogulistan` t=1680 ve 1513/1634/1680 dönem uçları: kaynak bulunana kadar `ic_not_t`'ye "KAYNAKSIZ" yaz; TDV Kâşgar 1678 (Âfâk Hoca, Kalmuk yardımı) tek okunan tarihtir.
4. `devletler.js:5309` Çağatay bölünme maddesi: "1334'te ikiye bölündü" → "1334'te Tarmaşirin'in öldürülmesiyle karışıklık başladı; fiilî ayrılma 1347 (CHIA)"; `ic_not` ile 1326/1331 Tarmaşirin çelişkisi.
5. `mogolistan-hanligi`/`mogulistan` t=1514: hicrî 920 ∩ 1514 = 1514-02-26 (hesap, doğrulanmadı) ya da yıl düzeyi; TDV 1499/1514 çelişkisi `ic_not`a.
6. Gazne/Kâbil/Bâmiyan `cagatay` 1260-1370 zincirleri için ikinci kaynak aranmalı; bulunamazsa "BEYANLI YAKLAŞIKLIK".

## Erişilemeyen kaynaklar
- Encyclopaedia Iranica, "Chaghatayid dynasty" (iranicaonline.org/articles/chaghatayid-dynasty/) — soru: Moğulistan'ın doğuş yılı (1347?) ve Said Han'ın Kaşgar'ı alış günü (920/1514).
- Encyclopaedia Iranica, "Central Asia v. In the Mongol and Timurid periods" — soru: 747-48/1347 ayrılma ifadesi tam olarak ne diyor.
- Britannica "Mongol empire: Mongol empires in central Asia" — 403; soru: Tughluq Temür 1347-63 ve Çağatay'ın bölünme yılı.
- Bernardini, M., 2005, Timur'un 1370'te Belh'te hükümdarlık ilanı üzerine makale (unifind.unior.it/resource/item/7836) — soru: ilan günü 9 mu 10 Nisan 1370 mi.
- B. F. Manz, *The Rise and Rule of Tamerlane* (Cambridge 1989) — soru: Timur'un taç giyme günü ve Emîr Hüseyin'in ölümü.
- Cambridge History of China vol. 8 (Ming) / Perdue, *China Marches West* — soru: Hâmi'nin 1513 Turfan eline geçişi ve 1680 Cungar Turfan/Hâmi fethi.
- Digital Silk Road / Toyo Bunko Zafernâme çevirisi (dsr.nii.ac.jp/toyobunko/VIII-1-B-17/V-1/page/0222.html.en) — soru: "12 Ramazan 771, Çarşamba" ifadesi tam metinde nasıl geçiyor.
