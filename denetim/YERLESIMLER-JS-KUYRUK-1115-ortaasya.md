# YERLESIMLER-JS-KUYRUK-1115-ortaasya (UMIT, 15 Kasım 2026)

`data/yerlesimler.js` ve diğer yerleşim dosyalarına bu oturumda dokunulmadı (YAYIN BAYAT duvarı). Hiçbir satırın kaynağı bu oturumda okunamadığı için **yazılabilir hazır kayıt yok**; aşağıda her madde için ne yapılacağı ve hangi kaynağın aranacağı var. Hepsi koşu inişinden sonra, kaynakla.

## K1 — Yakub Bey pencereleri künye ömrü dışında (13 yerleşim)
`yakub-beg` künyesi f 1865-01-01 (Yâkub Bey'in Kâşgar'a girişi, madde 1865-01-15); fakat Kaşgar, Yarkent (Şaçe), Hotan, Kuça (Kuqa), Turfan, Ürümçi (Dihua), Manas, Aksu (Tarım), Uçturfan, Karaşar (Yanqi), Keriya, Çerçen, Çarklık yerleşimlerinin `yakub-beg` penceresi **1864-06-04** (Kuça Döngen-Uygur hükûmetinin kuruluş günü) başlıyor. Gereken: 1864-06-04 → 1865-01-01 (Kaşgar/Yarkent/Hotan için ~1865-01-15) arası sahip (kuca-hocalari / Hokand Hocaları / Qing yıkıntısı) — TDV `kasgar`, `yakub-beg`, `dogu-turkistan`; Kim Hodong, *Holy War in China* (2004). Okunmadı.

## K2 — Cungar pencereleri künye t'yi aşıyor (10 yerleşim)
`cungar` künye t 1758-01-01; Kaşgar, Yarkent, Hotan, Kuça, Aksu, Uçturfan, Karaşar, Keriya, Çerçen, Çarklık 1705-01-01 → **1759-01-01** `cungar`. Qing'in Kaşgar/Yarkent'i alışı 1759 (yıl); Cungar'ın bitişi 1758. Gereken: 1758→1759 arası kaynakla (Qing/Cungar akademik kaynak, TDV `kalmuklar`) sahip; ya da künye t'yi 1759'a genişletme (devletler.js; KASA kararı).

## K3 — Durrânî pencereleri künye f'den önce (7 yerleşim)
`afgan-durrani` künye f 1747-10-01; Peşâver, Kâbil, Gazne, Herat, Attock, Râvalpindi, Srinagar pencereleri **1747-06-20** (Nâdir Şah'ın ölümü) başlıyor. Gereken: 1747-06-20→1747-10-01 arası sahip (afsar mı, boşluk mu) — TDV `ahmed-sah-dürrani`; Hint/Afgan akademik kaynak. Okunmadı.

## K4 — Altın Orda pencereleri künye t'yi 59 gün aşıyor
`altinorda` künye t 1502-01-01; Terek deltası (Kızlar), Astrahan, Ural eteği, Rın kumulları (Volga-Yayık arası), Syzran, Samara pencereleri 1502-03-01'de bitiyor. TDV `altin-orda` (1502 Büyük Orda'nın sonu): gün okunmadı. Bu 5 yerleşim `yerlesimler_h2_rusya.js` / `yerlesimler.js` içinde.

## K5 — Semerkant Şeybânî geçişi 1500 mü, 1501 mi?
Semerkant penceresi timurlu → buhara **1500-01-01**; kronoloji maddesi «Semerkant'ın fethi — Bâbür Mirza'nın kovulması» **1501-01-01** (`kronoloji_ozbek.js`, `kaynak: TDV seybaniler` — TDV yalnız 905-913/1500-1507 aralığını veriyor, Semerkant yılını vermiyor). Gereken: Semerkant'ın Şeybânî eline geçtiği yıl/gün (Bâbürnâme/Iranica «Bābor»/«Šaybānī Khan»; TDV `babur`). Okunmadı.

## K6 — Taşkent/Hokand 1865-06-17 ve 1876-02-19 (Jülyen/Gregoryen)
`Taşkent` hokand→rusya `1865-06-17` (`yerlesimler_ek15.js`); kronoloji `1865-06-29`; Rusça özet 15 Haziran 1865 (Jülyen). `hokand` künye t, Hokand/Andican/Oş/Alay vadisi pencereleri `1876-02-19`. Gereken: 1582+ Rusya için Gregoryen çeviri ve çift kaynak (Abashin; Becker; BRE). Okunmadı.

## K7 — Eksik yerleşim noktaları (yeni kayıt; mükerrer taraması bu belgede: ad + 3 km → hiçbiri yok)
| yerleşim | neden gerekli | kaynak arayışı |
|---|---|---|
| Düşenbe (Dushanbe) | `buhara` künye t = 1921-02-21 (Kızıl Ordu Düşenbe'yi aldı; Iranica DUSHANBE) | Iranica «DUSHANBE»; TDV `tacikistan`; Doğu Buhara/Hisar beyliği |
| Namangan, Margilan | Hokand Hanlığı şehirleri; Rus Fergana oblastı | TDV `hokand-hanligi`, `fergana` |
| Bişkek (Pişpek) | Hokand kalesi 1825'ten; Rus 1862 | TDV; Kırgız akademik kaynaklar |
| Kızılorda (Akmescid) | Hokand/Syr-Derya hattı; 1853 Rus alışı; `kronoloji_orta_asya.js` başlığında yer_id'siz bırakılmış | TDV `kazakistan`; Kazak akademik kaynaklar |
| Nukus (Karakalpak), Çarcuy (Amul/Türkmenabat), Kerki, Tejen, Bayramali | Hârizm/Karakalpak ve Merv hattı | TDV; Türkmen/Özbek akademik kaynaklar |
| Karaganda, Karakol | 19. yy Rus hattı | — |
| Sokh, Şahimardan, Vorukh, Barak | Fergana vadisi dış-enklavları (adım 6) | 1991+ sınır antlaşmaları |
| Kuşan/Eftalit/Soğd merkezleri: Penjikent, Afrasiyab öncesi | `semerkant-ihsid`, `kusan` yerleşimsiz | Soğd arkeoloji literatürü |

## K8 — Yerleşimsiz künyeler için bağlantı (adım 1 A)
22 yerleşimsiz künyeden yalnız **ogedey-ulusu (1267-1309)** ve **transkaspi-hukumeti (1918-07-14→1920)** 1281 çekirdeğinde; Aşkabat/Krasnovodsk/Kızıl Arvat/Merv yerleşimlerinin 1918-07-14→1920 penceresi `turkistan-ossc`/`rusya`'dan `transkaspi-hukumeti`'ne alınabilir (Sargent 2004: 14 Temmuz 1918 hükûmet; 1 Kasım 1918 Merv; 15 Temmuz 1919 Aşkabat boşaltıldı; 1920 Krasnovodsk). Bu işlem hem Değişmez 2 (madde: künye-içi kronoloji, D2 evreni değil) hem kaynak gerektirir; **yazılmadı**: kronoloji maddeleri `olaylar*.js`'te yok, D2 ±30 gün kuralı yeni açık üretir.

## K9 — Mükerrer yerleşim şüphesi
`Termez` (37,2K 67,3D) ↔ `Tirmiz` (37,3K 67,2D, `s:` yok): aynı şehir; birleştirme. (Ad+3 km kuralı; 0,15° ≈ 15 km, ek incelemesi: koordinatlar arası ~13 km — aynı yer mi, Antik Termez mi, kaynak okunmadı.)

## K10 — `s:`'siz Orta Asya noktaları (29) — sahiplik penceresi yok
Karakum, Uzboy, Üstyurt platosu (batı/doğu), Bactria, Tirmiz, Soğd, Tohâristân, Fergana, Tokmok, Suyab (Ak-Beshim), Özkent (Uzgen), Yahudiyye (Maymana), Cürcân, Deylem… (ayrıntı: BOLGE-ortaasya-4). Çoğu bölge/antik; sahiplik penceresi gerekiyor olabilir.
