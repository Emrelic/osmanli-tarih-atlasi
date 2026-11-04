# EK — Rus kökenli günlerde Jülyen/Gregoryen taraması (salt okuma)

Tarih: 3 Kasım 2026 · Ağaç: `umit-1103-top100` worktree (HEAD e31155f42 + yerel değişmemiş data/) · Yöntem: veri taraması, web yok, kaynak araştırması yok.

## 1. Yöntem
- Takvim kuralı (koordinatör, KESİN): **1582-10-15 öncesi Rus günleri kaynaktaki gibi KALIR** — yalnız sayılır/listelenir, "düzeltme yok (kural gereği)", önerilen gün sütunu boş. Düzeltme listesi **yalnız 1582-10-15 → 1918-02-14**.
- Taranan dosyalar: `data/kronoloji_rusya.js` (149 madde), `data/kronoloji_cok_rusya.js` (113 kayıt), `data/devletler.js` (Rus ve Rus'a geçen künyeler, 99 aday künye), `data/yerlesimler*.js` + `yer_yama*.js` + `yer_kron_*.js` (`d:` Rus-ailesi olan `s:` dönemlerinin f/t uçları, 2738 uç), ayrıca `olaylar*`, `kronoloji*`, `savaslar.js`, `seferler_*`, `ekokuma_*` (5.138 maddelik çapraz tarama).
- Fark tablosu (JDN betiğiyle, elle değil): 1582-10-15..1700-02-28 **+10**, 1700-03-01..1800-02-28 **+11**, 1800-03-01..1900-02-28 **+12**, 1900-03-01.. **+13**.
- Sınıflama: **A** = atlasın kendi metni/kaynağı/çift kaydı Jülyen olduğunu söylüyor ve atlas Jülyen günü yazmış (HATA); **B** = Gregoryen yazılmış, Jülyen/Gregoryen çifti ya da çeviri beyanı var (TEMİZ); **C** = Rus geleneksel günü, takvim belirtilmemiş, büyük olasılıkla Jülyen (ŞÜPHELİ — bilgi tabanlı, kaynak açılmadı); **D** = Rusya dışı tarafın (Osmanlı/Batı) günü, kapsam dışı.
- **Güçlü işaret taraması** (aynı olay iki günle, tam fark kadar ayrık): 299 yerleşim-uç günü içinde 6 çift, 5138 madde içinde 17 çift bulundu — hepsi aşağıda A satırlarına işlendi.
- Sınırlar: C sınıfı benim tarih bilgime dayanır, kaynak sayfası açılmadı; "ölçülmedi" yazılanlar sınanamadı. Yıl/ay hassasiyetli (`-01-01`) uçlar gün taşımadığı için kapsam dışı sayıldı (sayıları §2).

## 2. Sayılar

### 2a. Düzeltme kapsamı: 1582-10-15 → 1918-02-14
| sınıf | kayıt | not |
|---|---|---|
| **A — HATA** | **24** satır (kronoloji_rusya.js'te 12) | her satır bir olay/blok; bağlı uç sayısı satır başına §3'te yazılı, toplamı ölçülmedi |
| **B — TEMİZ** | 6 (kronoloji_rusya, `ic_not_takvim`/Gregoryen bayraklı) + 19 (kronoloji_cok_rusya, `gun:` Gregoryen/Jülyen çiftli) + **40** farklı yerleşim-uç günü (TAKVİM-1015 çeviri notlu) | ek olarak benim bilgime göre Gregoryen karşılıkla UYUMLU görünen ama beyansız günler (ör. 1703-05-27, 1714-08-07, 1700-11-30, 1811-12-23) — B-çıkarım, sayıya katılmadı |
| **C — ŞÜPHELİ (Jülyen olasılığı yüksek)** | **46** satır (kronoloji_rusya.js'te 34; bazı satırlar birden çok kayıt/uç toplar) | §4 tablo |
| **D — Rusya dışı taraf** | 8 (örnek liste) | §5 |
| gün taşımayan (`YYYY-01-01`) Rus uçları | kronoloji_rusya 10 · cok_rusya 62 · yerleşim ucu 234 | kapsam dışı (yıl hassasiyeti) |
| tek tek sınanmayan kalan | kronoloji_rusya'da ~74 madde · yerleşimde 2118 uç (166 farklı gün, A/C/B satırları dahil) | ne A ne C ne B diye kanıtlanamadı: **ölçülmedi** |

### 2b. 1582-10-15 ÖNCESİ (düzeltme yok — kural gereği)
- kronoloji_rusya.js: 13 madde (gün taşıyan 8); kronoloji_cok_rusya.js: 25 madde (gün taşıyan 17); devletler.js künye uçları: 8 (moskova t, rusya f, novgorod t, tver t, pskov t, ryazan t, kazan t, astarhan t); yerleşim `s:` uçları: 372 uç / 34 farklı gün (gün taşıyan 10) — hepsi "kaynaktaki gibi kalır".

## 3. A — HATA satırları (1582-10-15 → 1918-02-14)

| # | dosya:satır | kayıt | atlas günü | sınıf | gerekçe | önerilen Gregoryen | bağlı uçlar |
|---|---|---|---|---|---|---|---|
| 1 | `kronoloji_rusya.js:177` | Romanov hanedanı tahta çıktı (Mihail seçimi) | 1613-02-21 | A | Denetçi bulgusu; 21 Şubat 1613 Rus (Jülyen) günüdür. Dosya başlığı (satır 28-31) dosyanın karışık takvimli olduğunu beyan eder | 1613-03-03 (+10) | devletler.js:334 (rusya kronoloji, aynı gün); yerleşim/künye ucu yok |
| 2 | `kronoloji_rusya.js:252` | I. Petro Azak'ı aldı | 1696-07-18 | A | savaslar.js:1110: «ESBE teslimi 18 Temmuz (Jülyen) verir … ÇEVRİLMEDİ»; TDV azak 6 Ağustos 1696 (7 Muharrem 1108); yerlesimler.js:741 Azak f=1696-08-06 zaten TDV günü | 1696-07-28 (+10) (ESBE) ya da 1696-08-06 (TDV esas) | devletler.js:335 (1696-07-18) · olaylar_ek3.js:60 (1696-07-19 «Azak'ın kaybı», 1 gün farklı) · savaslar.js:1110 t=1696-07-19 (rus-azak-1696 seferi) · yerlesimler.js:741 Azak f=1696-08-06. Karar: TDV esas ise dördü de 1696-08-06'ya hizalanır (Değişmez 2: madde-dönem aynı commit) |
| 3 | `kronoloji_rusya.js:215` | Andrusovo Ateşkesi | 1667-01-30 | A | Aynı olay olaylar_ek16.js:360'ta 1667-02-09 (Gregoryen); B3 notu (KRONO-KUZEY-0929-DUZELTME) | 1667-02-09 (+10) | kronoloji_lehistan.js:317 (1667-01-30, aynı hata) · olaylar_ek16.js:360 (1667-02-09 doğru) · yerlesimler.js:1177 f=1667-02-09 (doğru) |
| 4 | `kronoloji_rusya.js:284` | Poltava Muharebesi | 1709-06-27 | A | Aynı olay kronoloji_isvec.js:280, kronoloji_lehistan.js:413, devletler.js:979'da 1709-07-08 (Gregoryen); 27 Haziran = Jülyen | 1709-07-08 (+11) | isvec/lehistan/devletler kayıtları 07-08'de (doğru); Rus ucu 11 gün geride |
| 5 | `kronoloji_rusya.js:309` | Rusya İmparatorluğu ilan edildi | 1721-10-22 | A | cok_rusya.js:659 aynı olay 1721-11-02 («Gregoryen; Jülyen 22 Ekim») | 1721-11-02 (+11) | devletler.js:338 (rusya kronoloji, 1721-10-22) · cok_rusya.js:659 zaten 1721-11-02 → ÇİFT KAYIT: kronoloji_rusya satırı kaldırılıp/kaydırılıp tek gün kalmalı |
| 6 | `kronoloji_rusya.js:386` | Pugaçev İsyanı başladı | 1773-09-17 | A | cok_rusya.js:509 aynı olay 1773-09-28 («17 Eylül Jülyen = 28 Eylül Gregoryen») | 1773-09-28 (+11) | cok_rusya.js:509 (doğru) → çift kayıt |
| 7 | `kronoloji_rusya.js:444` | Austerlitz'de yenilgi | 1805-11-20 | A | kronoloji_fransa.js:672 ve kronoloji_habsburg.js:509 aynı muharebe 1805-12-02 (Gregoryen); 20 Kasım = Jülyen | 1805-12-02 (+12) | fransa:672, habsburg:509 doğru; Rus ucu 12 gün geride |
| 8 | `kronoloji_rusya.js:500` | Dekabrist Ayaklanması | 1825-12-14 | A | Dosya başlığı (satır 28-30) 1825-12-14'ü Jülyen olarak adıyla sayar; cok_rusya.js:684 I. Nikolay 1825-12-01 (Gregoryen) – ayaklanma bu tarihten SONRA 26 Aralık olmalı | 1825-12-26 (+12) | yer/künye ucu yok |
| 9 | `kronoloji_rusya.js:554` | I. Nikolay öldü, II. Aleksandr tahta çıktı | 1855-02-18 | A | cok_rusya.js:689 aynı olay 1855-03-02 (Gregoryen; Jülyen 18 Şubat) | 1855-03-02 (+12) | cok_rusya.js:689 (doğru) → çift kayıt |
| 10 | `kronoloji_rusya.js:566` | Serfliğin kaldırılması | 1861-02-19 | A | Dosya başlığı Jülyen olarak adıyla sayar (satır 28-30) | 1861-03-03 (+12) | — |
| 11 | `kronoloji_rusya.js:696` | Kanlı Pazar | 1905-01-09 | A | Dosya başlığı Jülyen olarak adıyla sayar; Gregoryen 22 Ocak | 1905-01-22 (+13) | — |
| 12 | `kronoloji_rusya.js:711` | Ekim Manifestosu | 1905-10-17 | A | Dosya başlığı Jülyen olarak adıyla sayar; Gregoryen 30 Ekim | 1905-10-30 (+13) | — |
| 13 | `kronoloji_cok_rusya.js:179` | Tambov kalesi kuruldu | 1636-04-17 | A | gun: «17 Nisan 1636 (Jülyen; kaynak Gregoryen karşılığını 27 Nisan verir)» — atlas Jülyen günü yazmış | 1636-04-27 (kaynakta doğrudan) | yerlesimler.js (Tambov) s: kırılması 1636-04-17 · ic_not_t «fark 0 gün» diye bilerek korunmuş → yerleşim ucu birlikte kaymalı |
| 14 | `kronoloji_cok_rusya.js:229` | Nijneudinsk kışlağı kuruldu | 1648-10-14 | A | gun: «14 Ekim 1648 (Pokrov günü — Rus kaynağı, Jülyen)»; atlas Jülyen günü yazmış | 1648-10-24 (+10) | Nijneudinsk yerleşim s: ucu 1648-10-01 (13 gün ayrık, ic_not_t'de beyanlı) — her ikisi de tek güne çekilmeli |
| 15 | `yerlesimler.js:592 + olaylar_p0068b.js:61` | Kalas (Galatz) Rus işgali / «Kalas bozgunu» | 1789-05-01 | A | yerlesimler.js kaynak alanı: «ESBE: 1 мая 1789 … (Jülyen, kaynağın günü)» — atlas Jülyen günü yazmış | 1789-05-12 (+11) | olaylar_p0068b.js:61 madde (aynı gün) ile yerleşim s: ucu birlikte; savas_basi/savaslar.js ucu yok |
| 16 | `yerlesimler_ek29.js:1007 ve :1013` | Yam (Yamburg) / Koporye — İsveç→Rusya | 1703-05-14 | A | kaynak: HSE «Петр I. Биохроника» 14.05.1703 … «— Jülyen»; Nyenskans (aynı kampanya) 1703-05-12 doğru çevrilmiş | 1703-05-25 (+11) | Yam: isvec t + rusya f (iki uç) · Koporye f=1703-05-14 |
| 17 | `yer_kron_dogu.js:110 + yer_yama_kafkas_rusya.js:57` | Derbend: Safevî→Rusya | 1722-08-23 | A | Aynı yerleşimde ikinci kayıt 1722-09-03 (olaylar_ek7.js:209 «3 Eylül 1722 (Rus takvimiyle 23 Ağustos)»); iki dosyada iki farklı gün = ÇİFT KAYIT | 1722-09-03 (+11) | yer_kron_dogu.js:110 Derbend: rusya f=1722-08-23, t=1735-03-10 (ikisi de Jülyen) → 09-03 / 03-21 · olaylar_ek7.js:209,211 doğru |
| 18 | `yer_kron_dogu.js:86` | Bakü: Safevî→Rusya→Safevî | 1723-07-26 ve 1735-03-10 | A | olaylar_p0917kosu13.js:16 «6 Ağustos 1723 (Rus takvimiyle 26 Temmuz)»; yer_yama_zend_kacar.js:41 aynı geçişi 1723-08-06 / 1735-03-21 yazmış → çift kayıt | 1723-08-06 (+11) / 1735-03-21 (+11) (1723-08-06; 1735-03-21) | yer_yama_zend_kacar.js:41 doğru; yer_kron_dogu.js:86 iki ucu birlikte kaymalı |
| 19 | `yer_yama_avrupa_isvec_1923.js:330-332` | Lappeenranta (Villmanstrand): isvec→rusya | 1721-08-30 | A | kronoloji_sinir_iskandinavya.js:31: «1721-08-30 = Nystad'ın Jülyen günü»; Nystad Gregoryen 1721-09-10 (olaylar_ek16.js:295, 8 yerleşimde kullanılıyor) | 1721-09-10 (+11) | isvec t + rusya f (iki uç). NOT: yerlesimler_ek7.js:133 aynı yerde 1743-08-07 yazıyor (Åbo) — iki kayıt çelişir, Lappeenranta hangisi? (ölçülmedi) |
| 20 | `yerlesimler_ek15.js:82` | Taşkent (yerleşim adı ölçülmedi; ek15 satır 82 bloğu) →Rusya | 1865-06-17 | A | kronoloji_rusya.js:584 Taşkent'in fethi 1865-06-29 — 12 gün ayrık çift (yön ölçülmedi: 17 Haziran Rus günüyse 29 Haziran Gregoryen) | 1865-06-29 (Rus gün ise) | kronoloji_rusya.js:584 (1865-06-29) ile birlikte tek güne |
| 21 | `olaylar_2s_0919.js:157 + yerlesimler.js:1307` | Tsaritsyn kalesi ilk kez belgede | 1589-07-02 | A | hassasiyet: «GÜN (Jülyen; Miladî 12 Temmuz) — veriyle birebir» (veri Jülyen günü yazmış); aynı dosyada Saratov Miladî | 1589-07-12 (+10) | yerlesimler.js:1307 Tsaritsyn f=1589-07-02 |
| 22 | `olaylar_2s_0919.js:263 + yerlesimler.js:1308` | Temernik gümrüğü (Rostov-Don) | 1749-12-15 | A | hassasiyet: «GÜN (Jülyen), veriyle birebir» | 1749-12-26 (+11) | yerlesimler.js:1308 Rostov (Don) f=1749-12-15 |
| 23 | `kronoloji_iran.js:296` | Türkmençay Antlaşması (Rus olayı, İran dosyası) | 1828-02-10 | A | kronoloji_sinir_komsu.js:121: «IBS 10 Şubat 1828 … Rus (Jülyen) takvimidir … Gregoryen 22 Şubat»; olaylar_ek7.js:213 ve devletler.js:10450 1828-02-22'de | 1828-02-22 (+12) | devletler nahcivan/revan t=1828-02-22 doğru; yalnız kronoloji_iran satırı |
| 24 | `kronoloji_lehistan.js:317` | Andrusovo Mütarekesi (Lehistan dosyası) | 1667-01-30 | A | B3 notu: Lehistan Gregoryen ülkesiydi, gün Rus üslubuyla; olaylar_ek16.js:360 1667-02-09 | 1667-02-09 (+10) | kronoloji_rusya.js:215 ile birlikte |

## 4. C — ŞÜPHELİ (Rus geleneksel günü, takvim belirtilmemiş; büyük olasılıkla Jülyen)

| # | dosya:satır | kayıt | atlas günü | sınıf | gerekçe | önerilen Gregoryen (Jülyen ise) | bağlı uçlar |
|---|---|---|---|---|---|---|---|
| 1 | `kronoloji_rusya.js:138` | Moskova Patrikliği kuruldu | 1589-01-26 | C | Rus gelenek günü (Job'un patrik atanışı) | 1589-02-05 (+10) |  |
| 2 | `kronoloji_rusya.js:143` | «Yasak Yıllar» kararnamesi | 1597-11-24 | C | Rus kaynak günü (Ulozhenie tarihi geleneği) | 1597-12-04 (+10) |  |
| 3 | `kronoloji_rusya.js:151` | Rurik hanedanı sona erdi, Godunov seçildi | 1598-01-07 | C | Fyodor'un ölüm günü 7 Ocak (Rus geleneği) | 1598-01-17 (+10) |  |
| 4 | `kronoloji_rusya.js:162` | I. Sahte Dmitri Rusya'ya girdi | 1604-10-13 | C | Rus kaynak günü | 1604-10-23 (+10) |  |
| 5 | `kronoloji_rusya.js:167` | Polonya kuvvetleri Moskova'yı işgal etti | 1610-09-21 | C | Rus gün (21 Eylül); ST-1610 Moskova girişi | 1610-10-01 (+10) |  |
| 6 | `kronoloji_rusya.js:172` | Minin ve Pojarski Moskova'yı kurtardı | 1612-11-04 | C | Olay 22 Ekim (Jülyen); atlas 4 Kasım'ı yazmış = modern +13 farkı yanlış uygulanmış (1612'de fark +10) → doğru Gregoryen 1612-11-01 | 1612-11-01 (22 Ekim Jülyen + 10; atlas günü yanlış farkla çevrilmiş) |  |
| 7 | `kronoloji_rusya.js:189` | I. Aleksey tahta çıktı | 1645-07-13 | C | Rus gün (13 Temmuz) | 1645-07-23 (+10) |  |
| 8 | `kronoloji_rusya.js:194` | Sobornoye Ulojenie | 1649-01-29 | C | Rus gün (29 Ocak) | 1649-02-08 (+10) |  |
| 9 | `kronoloji_rusya.js:230` | Streltsı isyanı / Sofya naipliği | 1682-05-15 | C | Rus gün (15 Mayıs) | 1682-05-25 (+10) |  |
| 10 | `kronoloji_rusya.js:242` | I. Petro fiilen tek hükümdar | 1689-09-12 | C | Rus kaynak günü; gün doğrulanmadı | 1689-09-22 (+10) |  |
| 11 | `kronoloji_rusya.js:247` | Birinci Azak seferi başarısız | 1695-07-20 | C | Rus kaynak günü; gün doğrulanmadı | 1695-07-30 (+10) |  |
| 12 | `kronoloji_rusya.js:784` | Vedomosti yayımlandı | 1703-01-02 | C | B1 listesi: Jülyen | 1703-01-13 (+11) |  |
| 13 | `kronoloji_rusya.js:789` | Soylulara zorunlu eğitim kararnamesi | 1714-01-28 | C | Rus kaynak günü | 1714-02-08 (+11) |  |
| 14 | `kronoloji_rusya.js:314` | Rütbeler Cetveli | 1722-01-24 | C | B1 listesi: Jülyen | 1722-02-04 (+11) |  |
| 15 | `kronoloji_rusya.js:799` | Bilimler Akademisi kuruldu | 1724-01-28 | C | B1 listesi: Jülyen (Senato kararı 28 Ocak) | 1724-02-08 (+11) |  |
| 16 | `kronoloji_rusya.js:325` | I. Petro öldü | 1725-01-28 | C | B1: Greg. 8 Şubat; Rus günü | 1725-02-08 (+11) | iki madde (325 ve 332) birlikte |
| 17 | `kronoloji_rusya.js:332` | I. Katerina tahta çıktı | 1725-01-28 | C | aynı gün, aynı hata (325 ile birlikte) | 1725-02-08 (+11) | iki madde (325 ve 332) birlikte |
| 18 | `kronoloji_rusya.js:337` | Anna «kondisyonları» yırttı | 1730-02-25 | C | B1 listesi: Jülyen | 1730-03-08 (+11) |  |
| 19 | `kronoloji_rusya.js:353` | Moskova Devlet Üniversitesi kuruldu | 1755-01-25 | C | Ferman 12 (Jülyen) Ocak; 25 Ocak = +13 fark yanlış uygulanmış, 1755'te +11 → 1755-01-23 (B2 notu ile uyumlu) | 1755-01-23 (12 Ocak Jülyen + 11; atlas günü yanlış farkla çevrilmiş) |  |
| 20 | `kronoloji_rusya.js:809` | Güzel Sanatlar Akademisi kuruldu | 1757-11-06 | C | B1 listesi: Jülyen | 1757-11-17 (+11) |  |
| 21 | `kronoloji_rusya.js:814` | Soyluların Özgürlüğü Fermanı | 1762-02-18 | C | B1 listesi: Jülyen | 1762-03-01 (+11) |  |
| 22 | `kronoloji_rusya.js:396` | Pugaçev idam edildi | 1775-01-10 | C | Rus günü (10 Ocak O.S. → 21 Ocak N.S.) | 1775-01-21 (+11) |  |
| 23 | `kronoloji_rusya.js:834` | Soylulara ve şehirlere Beratlar | 1785-04-21 | C | B1 listesi: Jülyen | 1785-05-02 (+11) |  |
| 24 | `kronoloji_rusya.js:433` | Pavel veraset kanununu değiştirdi | 1797-04-05 | C | B1 listesi: Jülyen | 1797-04-16 (+11) |  |
| 25 | `kronoloji_rusya.js:533` | St. Petersburg–Tsarskoye Selo demiryolu | 1837-10-30 | C | B1 listesi: Jülyen | 1837-11-11 (+12) |  |
| 26 | `kronoloji_rusya.js:572` | Zemstvo reformu | 1864-01-01 | C | Nizamname 1 Ocak 1864 (Rus günü); aynı zamanda ay-başı yer tutucu olabilir (ölçülmedi) | 1864-01-13 (+12) |  |
| 27 | `kronoloji_rusya.js:578` | Adlî reform | 1864-11-20 | C | B1 listesi: Jülyen | 1864-12-02 (+12) |  |
| 28 | `kronoloji_rusya.js:864` | Mendeleyev periyodik tablo | 1869-03-06 | C | B1 listesi: Jülyen | 1869-03-18 (+12) |  |
| 29 | `kronoloji_rusya.js:605` | Hive Hanlığı himayeye alındı | 1873-08-12 | C | Gandemian: 12 Ağustos Rus günü (Gregoryen 24 Ağustos) | 1873-08-24 (+12) |  |
| 30 | `kronoloji_rusya.js:622` | Kokand Hanlığı ilhak edildi | 1876-02-19 | C | B1 listesi + künye hokand t=1876-02-19 (devletler.js:5364) → künye ucu da kayar | 1876-03-02 (+12) | künye hokand t (devletler.js:5364, :5371), yerlesimler 1876-02-19 ucu |
| 31 | `kronoloji_rusya.js:663` | Trans-Sibirya Demiryolu inşaatı | 1891-05-19 | C | B1 listesi: Jülyen | 1891-05-31 (+12) |  |
| 32 | `kronoloji_rusya.js:716` | İlk Devlet Dumasi toplandı | 1906-04-27 | C | B1 listesi: Jülyen | 1906-05-10 (+13) |  |
| 33 | `kronoloji_rusya.js:721` | Stolıpin toprak reformu | 1906-11-09 | C | B1 listesi: Jülyen | 1906-11-22 (+13) |  |
| 34 | `kronoloji_rusya.js:909` | Romanov 300. yıl kutlamaları | 1913-02-21 | C | B1 listesi: Jülyen | 1913-03-06 (+13) |  |
| 35 | `devletler.js:7896-7903 + kronoloji_orta_asya.js:572 + 6 yerleşim (Tümen, Tobolsk…)` | Sibir Hanlığı sonu (Küçüm Han son yenilgisi) | 1598-08-20 | C | TDV «20 Ağustos 1598» takvim vermiyor; Rus kaynakları O.S. | 1598-08-30 (+10) |  |
| 36 | `devletler.js:1212,1227 + 10503,10517 + kronoloji_gurcistan.js:282 + olaylar_ek5.js:604 + 3 yerleşim (Gori…)` | Kartli-Kaheti ilhakı | 1801-09-12 | C | «12 Eylül 1801 (emir)» — Çar manifestosu Rus günü | 1801-09-24 (+12) |  |
| 37 | `devletler.js:1239,1250 + kronoloji_gurcistan.js:295 + olaylar_ek16.js:433 + 2 yerleşim (Kutaisi)` | İmereti ilhakı / II. Solomon'un azli | 1810-02-20 | C | Rus günü; ay-gün gün doğrulanmadı | 1810-03-04 (+12) |  |
| 38 | `kronoloji_cok_gurcistan.js:190` | Abhazya Rus himayesi | 1810-02-17 | C | ic_not: «Rus kaynaklı gün, muhtemelen Jülyen» | 1810-03-01 (+12) |  |
| 39 | `devletler.js:10182 (+17520,17526 baku-hanligi) ` | Bakü'nün alınışı | 1806-10-03 | C | ic_not_gun zaten «Rus (Jülyen) gün olabilir (= 15 Ekim)» beyan etmiş | 1806-10-15 (+12) |  |
| 40 | `kronoloji_cok_rusya.js:424` | Türkistan (Yesi) alındı | 1864-06-12 | C | «kaynak; takvim belirtilmemiş» (Rus kaynağı) | 1864-06-24 (+12) |  |
| 41 | `kronoloji_cok_rusya.js:429` | Çimkent alındı | 1864-09-22 | C | «takvim belirtilmemiş»; 2 yerleşim ucu | 1864-10-04 (+12) |  |
| 42 | `kronoloji_cok_rusya.js:434` | Hucend alındı | 1866-05-24 | C | «Rus kaynağı; takvim belirtilmemiş»; yerleşim ucu 1866-05-24 | 1866-06-05 (+12) |  |
| 43 | `kronoloji_cok_rusya.js:349` | Çelyabinsk kalesi | 1736-09-13 | C | kaynak 13 Eylül (takvim yok); çekirdek yerleşim s: 1736-09-02 → 11 gün ayrık çift; hangisi doğru ölçülmedi | 1736-09-24 (+11) |  |
| 44 | `yerlesimler.js:719.. (12 Kırım yerleşimi)` | Kırım 1771 Rus işgali (Kefe, Bahçesaray, Akmescit, Aluşta, Balaklava…) | 1771-07-01 | C | kaynak:"kefe" yalnız; 07-01 = Jülyen ay-başı; aynı olayın Kerç/Taman/Yenikale uçları 1771-07-12 (TAKVİM-1015, «Jülyen ay başı = 07-12») → tutarsız | 1771-07-12 (+11) |  |
| 45 | `yerlesimler_sibirya2.js (Srednekolımsk 1643-07-30, Tauysk 1652-09-10, Balagansk 1654-05-01), yerlesimler_h2_rusya.js (Taganrog 1698-09-12, Petrozavodsk 1703-09-11, Orenburg 1743-04-30, Orsk 1735-08-31), yerlesimler_sibirya2.js (Bolşeretsk 1704-08-06, Çelyabinsk 1736-09-02)` | Sibirya/Ural/Güney Rusya kale kuruluşları | çeşitli | C | Rus yerel kaynak günleri, kaynak alanında takvim yok | (tek tek hesaplanır; bkz. gerekçe) |  |
| 46 | `yerlesimler.js:1306 + 1297-1299` | Saratov (1590-07-12) · Smolensk (1611-06-13) · Novgorod (1611-07-16) · Stolbovo (1617-02-27) | çeşitli | C | olaylar_2s_0919.js: Saratov Miladî yazılmış (B). 1611-07-16 yerlesimler.js:1297: «Gün: Jülyen/Gregoryen belirsiz (±10)»; 1617-02-27 Stolbovo: olaylar_ek16.js:746 «27 Şubat (Gregoryen) / 17 Şubat (Jülyen) akademik kaynakta doğrulanamadı» | (tek tek hesaplanır; bkz. gerekçe) |  |

### 4b. C-zayıf / olgu-gün şüphesi (Jülyen olasılığı düşük ya da gün olgusu kuşkulu; ölçülmedi)
Önceki oturumun B2 listesi (KRONO-KUZEY-0929-DUZELTME.md): kronoloji_rusya.js 1762-01-05, 1881-05-15 (olay 1882), 1741-11-04, 1756-08-29 (Rus katılımı 1757), 1773-06-28, 1877-02-27, 1654-01-19, 1764-05-13, 1764-12-07, 1790-05-22, 1842-05-21, 1881-08-27, 1892-08-15, 1898-11-14 — takvimden çok **olgu/gün uydurma** şüphesi; Jülyen mi Gregoryen mi olduğu ölçülmedi.

## 5. D — Rusya dışı taraf (kapsam dışı) ve çift-gün gözlemleri
- kronoloji_rusya.js:289 1710-11-20 Osmanlı'nın savaş ilanı
- :376 1768-10-06 Osmanlı savaş ilanı
- :406 1787-08-19 Osmanlı savaş ilanı
- :454 1806-12-30 Osmanlı savaş ilanı (Rus işgali ekokuma_1806: 23 Kasım 1806, Jülyen 11 Kasım, beyanlı)
- :507 1826-06-15 Yeniçeri Ocağı kaldırıldı
- :549 1853-10-04 Osmanlı savaş ilanı
- :523 1830-11-29 Kasım Ayaklanması (Lehistan, Gregoryen)
- :421 1795-10-24 III. Bölüşüm (üç taraflı sözleşme; ölçülmedi)
- 1916-02-24 Aşkale (olaylar_p0917dunya.js:46) ↔ 1916-03-08 Rize (:41): fark 13 gün, Rus işgali; biri Jülyen olabilir (ölçülmedi, Osmanlı cephesi).
- kronoloji_balkan.js:293/298 Nikşiç 1877-09-01 («27 Ağustos Jülyen = 8 Eylül»; atlas 1 Eylül) — Rus değil Karadağ, gün tutmuyor (ölçülmedi).
- Poltava (kronoloji_isvec/lehistan 1709-07-08) ve Andrusovo (olaylar_ek16 1667-02-09): Batı tarafı doğru; hata Rus ucunda (A satırları).

## 6. 1582-10-15 ÖNCESİ Rus günleri — düzeltme yok (kural gereği)

Önerilen gün sütunu kasıtlı olarak boş.

| dosya:satır | kayıt | atlas günü | durum |
|---|---|---|---|
| `kronoloji_rusya.js:77` | IV. İvan (Korkunç) \"Çar\" unvanını aldı | 1547-01-16 | düzeltme yok (kural gereği) |
| `kronoloji_rusya.js:93` | Kazan Hanlığı fethedildi | 1552-10-02 | düzeltme yok (kural gereği) |
| `kronoloji_rusya.js:108` | Opriçnina ilan edildi | 1565-02-03 | düzeltme yok (kural gereği) |
| `kronoloji_rusya.js:113` | Novgorod katliamı | 1570-01-02 | düzeltme yok (kural gereği) |
| `kronoloji_rusya.js:123` | Yermak'ın Sibirya seferi başladı | 1581-09-01 | düzeltme yok (kural gereği) |
| `kronoloji_rusya.js:128` | IV. İvan, öz oğlunu öldürdü | 1581-11-19 | düzeltme yok (kural gereği) |
| `kronoloji_rusya.js:764` | Aziz Vasili (Pokrovski) Katedrali tamamlandı | 1561-07-12 | düzeltme yok (kural gereği) |
| `kronoloji_rusya.js:769` | İlk tarihli basılı Rus kitabı (İvan Fyodorov'un \"Apostol\"u) | 1564-03-01 | düzeltme yok (kural gereği) |
| `kronoloji_cok_rusya.js:33` | Kulikovo Muharebesi | 1380-09-08 | düzeltme yok (kural gereği) |
| `kronoloji_cok_rusya.js:39` | Tokhtamış Moskova'yı yaktı | 1382-08-26 | düzeltme yok (kural gereği) |
| `kronoloji_cok_rusya.js:45` | III. İvan (Büyük) tahta çıktı | 1462-03-27 | düzeltme yok (kural gereği) |
| `kronoloji_cok_rusya.js:52` | Ugra Nehri'nde karşı karşıya gelme — Tatar boyunduruğunun bitişi | 1480-11-11 | düzeltme yok (kural gereği) |
| `kronoloji_cok_rusya.js:65` | İstanbul'un fethi haberi Moskova'ya ulaştı — \"Üçüncü Roma\" fikrinin  | 1453-05-29 | düzeltme yok (kural gereği) |
| `kronoloji_cok_rusya.js:71` | III. İvan, Sofya Paleolog ile evlendi | 1472-11-12 | düzeltme yok (kural gereği) |
| `kronoloji_cok_rusya.js:77` | Novgorod Cumhuriyeti ilhak edildi | 1478-01-15 | düzeltme yok (kural gereği) |
| `kronoloji_cok_rusya.js:83` | III. Vasili tahta çıktı | 1505-10-27 | düzeltme yok (kural gereği) |
| `kronoloji_cok_rusya.js:90` | IV. İvan (sonradan Korkunç), üç yaşında tahta çıktı | 1533-12-04 | düzeltme yok (kural gereği) |
| `kronoloji_cok_rusya.js:102` | Kremlin Uspenski (Meryem'in Göğe Yükselişi) Katedrali tamamlandı | 1479-08-15 | düzeltme yok (kural gereği) |
| `kronoloji_cok_rusya.js:624` | Peipus Gölü Savaşı (Buz Savaşı) — İskender Nevski Livonya Tarikatı'nı  | 1242-04-12 | düzeltme yok (kural gereği) |
| `kronoloji_cok_rusya.js:634` | Dmitri Donskoy Moskova Büyük Knezi oldu | 1359-11-13 | düzeltme yok (kural gereği) |
| `kronoloji_cok_rusya.js:639` | I. Vasili Moskova Büyük Knezi oldu | 1389-05-19 | düzeltme yok (kural gereği) |
| `kronoloji_cok_rusya.js:644` | II. Vasili (Kör) Moskova Büyük Knezi oldu | 1425-02-27 | düzeltme yok (kural gereği) |
| `kronoloji_cok_rusya.js:759` | Vytautas öldü — Litvanya'nın en güçlü dönemi sona erdi | 1430-10-27 | düzeltme yok (kural gereği) |
| `kronoloji_cok_rusya.js:764` | IV. Kazimierz (Kazimieras) Litvanya Büyük Dükü seçildi | 1440-06-29 | düzeltme yok (kural gereği) |
| `kronoloji_cok_rusya.js:769` | Aleksander Litvanya Büyük Dükü oldu — Polonya ile birlik bozuldu | 1492-06-07 | düzeltme yok (kural gereği) |
| `devletler.js:309,322,327,331` | moskova t / rusya f / kronoloji (IV. İvan çar) | 1547-01-16 | düzeltme yok (kural gereği) — koordinatörün 1547-01-16 / 1552-10-02 bulguları bu bölüme düşer |
| `devletler.js:262` | novgorod t | 1478-01-15 | düzeltme yok (kural gereği) — koordinatörün 1547-01-16 / 1552-10-02 bulguları bu bölüme düşer |
| `devletler.js:291` | tver t | 1485-09-12 | düzeltme yok (kural gereği) — koordinatörün 1547-01-16 / 1552-10-02 bulguları bu bölüme düşer |
| `devletler.js:274` | pskov t | 1510-01-13 | düzeltme yok (kural gereği) — koordinatörün 1547-01-16 / 1552-10-02 bulguları bu bölüme düşer |
| `devletler.js:2682,2700` | kazan t | 1552-10-02 | düzeltme yok (kural gereği) — koordinatörün 1547-01-16 / 1552-10-02 bulguları bu bölüme düşer |
| yerleşim `s:` uçları (yerlesimler*.js) | Rus-ailesi dönem uçları (1547-01-16 vb.) | 10 farklı gün · 264 uç | düzeltme yok (kural gereği) |

## 7. KASA için uygulama sırası
1. **Önce karar tek satır:** A ve C sınıfında hedef gün Gregoryen; C için Jülyen olduğu **kaynakta teyit** edilmeden dokunulmaz (CLAUDE.md takvim kuralı: kaynak Batı karşılığını veriyorsa o gün; vermiyorsa tabloyla çevir + `ic_not_takvim` beyanı).
2. **Çift kayıtlar önce (en ucuz, kanıtı atlasın kendinde):** kronoloji_rusya.js 1721-10-22, 1773-09-17, 1855-02-18 zaten cok_rusya.js'te doğru günle var — eski satırı silmek/tek güne indirmek yeter. Poltava (1709-06-27), Andrusovo (1667-01-30; + kronoloji_lehistan:317), Austerlitz (1805-11-20), Türkmençay (kronoloji_iran.js:296) karşı kaydı doğru güne çekilir.
3. **Yerleşim çiftleri:** Derbend (yer_kron_dogu.js:110 ↔ yer_yama_kafkas_rusya.js:57), Bakü (yer_kron_dogu.js:86 ↔ yer_yama_zend_kacar.js:41), Lappeenranta (yer_yama_avrupa_isvec_1923.js:330-332 ↔ yerlesimler_ek7.js:133): iki dosyadan biri silinir/diğerine hizalanır; 1735-03-10 ve 1722-08-23, 1723-07-26 uçları birlikte kayar. (`d_sinirlar*` ve künye uçları bu satırlarda yok.)
4. **Kırılma uçları BİRLİKTE kayar (Değişmez 2):** her `d:`/`v:` ucu ±30 gün içinde kronoloji maddesi ister. Aynı commit'te: (a) madde `t:` + `gun:` + `ic_not_takvim`, (b) yerleşim `s:` f/t uçları, (c) künye `f/t` ve künye `kronoloji:` satırı, (d) komşu dönemin eşleşen ucu (ör. Hokand t=1876-02-19 ↔ rusya Fergana dönemi f; Tambov 1636-04-17 f; Nijneudinsk 1648-10-01/14; Kalas 1789-05-01 ucu + olaylar_p0068b.js:61; Tsaritsyn 1589-07-02 + olaylar_2s_0919.js:157; Rostov 1749-12-15 + olaylar_2s_0919.js:263).
5. **Azak 1696** (A satırı 2): önce hangi kaynak esas karar verilsin (ESBE Jülyen 07-18 → 07-28, TDV 08-06); yerleşim zaten 08-06. Dört kayıt (kronoloji_rusya:252, devletler.js:335, olaylar_ek3.js:60, savaslar.js:1110 t) tek güne.
6. **C ve A kronoloji_rusya.js'in ~40 maddesi** tek geçişte yapılabilir (dosya bir kez okunur); satırın `ic_not_takvim:"Jülyen D Ay YYYY = Gregoryen ... (+N gün)"` beyanı eklenir. Kronoloji ucu yerleşim kırılmasına bağlı olmayan maddeler (kültür/kurum: Vedomosti, Akademi, Üniversite, Beratlar…) için Değişmez 2 riski yoktur; sınır ucu olanlarda (Kokand, Sibir, Kartli, İmereti, Tambov, Hucend, Çimkent, Türkistan, Nijneudinsk, Kalas, Derbend, Bakü, Lappeenranta, Yam) harita kırılma günü de kayar → HAVVA koşusuna kadar harita eski günü gösterir.
7. Bu dosya çalıştırılmadı; hiçbir data/arac/js dosyasına yazılmadı. Doğrulama: değişiklikten sonra `py arac/denetle.py` (Değişmez 2, çıkış kodu) ve `py arac/gun.py` tutarlılığı.

## 8. Bulamadıklarım / ölçülmedi
- C sınıfındaki günlerin hiçbiri kaynak sayfasından teyit edilmedi (web yok); tarihler benim bilgime dayanır.
- yerleşim `s:` uçlarının kalan ~150 farklı günü (Osmanlı-Rus savaş/antlaşma günleri, 1915-17 Kafkas cephesi) tek tek sınanmadı: bunların çoğu Gregoryen antlaşma günü (Edirne 1829-09-14, Paris 1856-03-30, Ayastefanos 1878-03-03, Berlin 1878-07-13, Portsmouth 1905-09-05) ya da TAKVİM-1015 çevirisi görünüyor; 1636-1754 Sibirya/Ural kuruluşları, 1881-01-30 Geok-Tepe, 1882-03-22 Kulca, 1864-07-01 Maykop, 1810-07-11 Sohum, 1735-08-23 / 1732-09-02 (Reşt tahliyesi: olaylar_p0060.js:28 «eski takvim 22 Ağustos → 2 Eylül 1732» yerleşime Gregoryen girmiş = B) ölçülmedi.
- Kronoloji dışındaki `olaylar*` dosyalarında Rus olayı olup `Jülyen` sözcüğü taşımayan ama Jülyen günü yazılmış maddeler yalnız çift-gün (fark = takvim farkı) testiyle arandı; testten kaçan tek-kaynaklı olay günleri bulunamayabilir.


## Koordinatör kararı — Azak 1696 (EMRELİC 1 KASIM, 4 Kasım gecesi)
Kaynağın verdiği Jülyen gün bulunur, +10 gün eklenerek Gregoryene çevrilir, `ic_not`ta beyan edilir.
Atlastaki adaylar: ESBE (Rus) 18 Temmuz 1696 Jülyen → **1696-07-28** Gregoryen · olaylar_ek3.js:60 ve
savaslar.js:1110 19 Temmuz (takvimi belirsiz) · TDV / yerlesimler.js:741 6 Ağustos 1696.
**UMIT SALI hükmü:** TDV'nin 6 Ağustos'u Osmanlı tarafının (kalenin teslimi/tahliyesi) günü olabilir;
CLAUDE.md "rakamı taşıyan cümlenin neyi tarihlediğini oku". KASA TDV «Azak» cümlesini okusun:
teslim/tahliye günüyse yerleşim `s:` ucu 1696-08-06 (TDV esas), Rus kaynağının 18 Temmuz'u (Jülyen) =
1696-07-28 teslim antlaşması/teslim alma günü olarak madde `ic_not`unda iki kaynakla beyan edilir;
aynı olaysa TDV esas, çelişki beyan. Koordinatörün "19 Temmuz" günü kaynaksızdır, dayanak alınmaz.
