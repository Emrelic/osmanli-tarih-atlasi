# 11 · Rus Çarlığı / İmparatorluğu — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 2026-11-03 (saat kaydedilmedi)

## Özet
- Künye: 3 çekirdek (`moskova`, `rusya`, `rusya-gecici-hukumet`) + ardıl `sovyet-rusya` (başka sıra). Eksik künye yok (Sıkıntılı Dönem, Romanov geçişi aynı polity).
- Ölçer: `rusya` 256 kırılma günü, **146 AÇIK**; `moskova` 17 kırılma, 4 AÇIK; `rusya-gecici-hukumet` 3 kırılma, 0 AÇIK. Toplam 150 açık.
- Eksik madde (Değişmez 2 evreninde): ≥ 40 (aşağıda sınıflandırma). Ama 41 açık gün için **madde sitede var, yalnız evren dışı dosyada** (`kronoloji_rusya.js`, `kronoloji_cok_rusya.js`, `kronoloji_orta_asya.js`, `kronoloji_cok_senkron_0930.js`) ya da evrendeki maddenin `yer_id`'si yerleşimleri kapsamıyor.
- En ağır 3 bulgu:
  1. **Takvim:** `rusya f=1547-01-16` (ve `moskova t`) Jülyen gündür; atlas Gregoryen (kronoloji_rusya.js başlığı, TAKVİM-1015). Gregoryen karşılığı **1547-01-26**. Aynı hata 1552-10-02 (Kazan), 1721-10-22 (İmparatorluk), 1613-02-21 (Romanov), 1696-07-18 (Azak) maddelerinde; 1721 için aynı olay Gregoryen `1721-11-02` ile `kronoloji_cok_rusya.js`'te zaten var (ikili kayıt).
  2. **Fort Ross (Kaliforniya)** `rusya` s: 1812→**1867-10-18**; Rus-Amerikan Şirketi Fort Ross'u 1841'de Sutter'a sattı, Alaska satışı (1867) Fort Ross'u kapsamaz. Haritada 26 yıl hayalet Rus toprağı.
  3. **Siberya/Türkistan/Alaska genişleyişinin ~65 günü** (ostrog kuruluşları, 1555-1860 yıl-hassasiyetli `YYYY-01-01` dönemleri) kronoloji maddesiz; en yakın madde 31+ gün uzak ve konu dışı (ör. «Üsküdar külliyesi»). Çözüm: madde yaz ya da kaynaksız ostrog dönemlerini kaldır.

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| moskova | Moskova Büyük Knezliği | 1283-01-01 | 1547-01-16 | `kaynak: bulunamadı`; f kaynaksız (b'ye bak); 79 yerleşim |
| rusya | Rusya Çarlığı / İmparatorluğu | 1547-01-16 | 1917-03-15 | `kaynak:"rusya"` (kısa anahtar); 556 yerleşim; künye-içi `kronoloji:` 15 madde (devletler.js:326) |
| rusya-gecici-hukumet | Rusya Geçici Hükûmeti | 1917-03-15 | 1917-11-07 | `kaynak: bulunamadı`; 514 yerleşim (rusya'nın bütün toprağı) |
| sovyet-rusya | Sovyet Rusya / SSCB | 1917-11-07 | 1991-12-26 | başka ajanın sırası |
| (ilgili) guney-rusya-beyaz, kolcak-omsk-hukumeti | iç savaş devletleri | 1919 / 1918 | 1920 | 1917-23 evresi, bu denetimde dışarıda |
Eksik: Yok. Not: Sıkıntılar Dönemi (1598-1613) ve Lehistan işgali (1610-1612) ayrı künye gerektirmiyor ama kronolojide neredeyse hiç yok (b/c'ye bak).

## b) f/t ve evreler
| uç | atlas | kaynak 1 | kaynak 2 | hüküm |
|---|---|---|---|---|
| moskova f | 1283-01-01 | Vikipedi «Daniel of Moscow» (yalnız yol göstermek için): geleneksel kuruluş **1263** (Derece Kitabı), ilk belgeli faaliyet **1282**; aziz yaşamı (OCA) **1272** | TDV «Rusya» ve «Moskova»: Daniil/kuruluş tarihi **yok** (okundu) | Okunan hiçbir kaynakta **1283** geçmiyor. Akademik kaynak (Cambridge History of Russia, vol.1; Halperin, *Russia and the Golden Horde*; Martin, *Medieval Russia*) bu oturumda **çekilemedi**. Öneri: `ic_not`a "1283 doğrulanamadı; 1263 (gelenek) / 1282 (ilk kayıt)" yaz; kaynaklı karar gelene dek dokunma. |
| moskova t = rusya f | 1547-01-16 | kreml.ru (Moskova Kremlin Müzeleri) «Venchanie na tsarstvo Ivana Groznogo»: Uspenski Katedrali, **16 Ocak 1547** (Jülyen); Britannica «Ivan the Terrible»: «crowned tsar and grand prince of all Russia» (gün vermez) | Vikipedi infobox **26 Ocak** (Gregoryen) — tek dayanak olamaz; Başkanlık Kütüphanesi prlib.ru da 16 Ocak (Jülyen) | Atlas Gregoryen çalışır (kronoloji_rusya.js:23-26; devletler.js `ic_not_takvim` TAKVİM-1015). 16 Ocak 1547 Jülyen = **26 Ocak 1547 Gregoryen** (16. yy +10 gün). Öneri: f/t `1547-01-26`, `ic_not`: "Jülyen 16 Ocak". TDV Rusya md. 1547 coronation'ı **vermiyor** (okundu). |
| rusya t = rusya-gecici f | 1917-03-15 | Britannica «Abdication of Nicholas II» sayfası (bu oturumda snippet): kovuşturma 2 Mart O.S.; Vikipedi: «15 Mart 1917 (Jülyen 2 Mart)» | TDV Rusya: yalnız «II. Nikola (1894-1917)» (okundu; gün yok) | Gregoryen 15 Mart doğru. Dokunma. İkinci akademik kaynak (Pipes, *Russian Revolution*; Figes) **çekilemedi**. |
| rusya-gecici t = sovyet f | 1917-11-07 | 25 Ekim O.S. + 13 = 7 Kasım (hesap); TDV Rusya: «1917 Ekim İhtilâli» (gün yok) | — | Uyumlu; kaynaklı gün okunmadı (**çekilemedi**). |
| Rus İmparatorluğu evresi | (künye içi, ayrı f yok) | Britannica «Peter the Great»: Senato **2 Kasım (22 Ekim O.S.) 1721**'de imparator unvanı verdi; Nystad **10 Eylül (30 Ağustos O.S.)** | prlib.ru «Peter I took the imperial title» (okunmadı, snippet) | `kronoloji_rusya.js:309` `t:"1721-10-22"` **Jülyen**; Gregoryen `1721-11-02`. |

Jülyen kalmış öteki kronoloji maddeleri (devletler.js `rusya` künyesi içi): `1613-02-21` Romanov (Gregoryen **1613-03-03**), `1696-07-18` Azak (Gregoryen **1696-07-28**; gün de ayrıca teyit edilmeli — Azak'ın teslimi 18/19 Temmuz O.S. tartışmalı). `1552-10-02` Kazan: Rus geleneği 2 Ekim Jülyen demektedir ⇒ Gregoryen **12 Ekim 1552**; ancak kaynaklarda 2/(15) Ekim ve 21 Eylül (O.S.) gibi çelişkili yazımlar var — Rus akademik kaynakla (ör. Skrynnikov) teyit edilmeden **değiştirme**, `ic_not` ekle. `1689-09-06` Nerçinsk doğru dönüştürülmüş (27 Ağustos O.S.).

## c) Kronoloji
Değişmez 2 evreninde (olaylar*.js, kronoloji_sinir_*.js) var olanlar: Moskova 1283 kuruluş, 1301-1521 toplama (Kolomna, Mojaysk, Nijniy Novgorod 1392, Tver 1485-09-12, Pskov 1510-01-13, Smolensk 1514-08-01, Ryazan 1521), 1556 Astrahan, 1558 Livonya (Narva/Dorpat), 1563 Terek, 1581 Narva kaybı, 1617-02-27 Stolbovo, 1654-01-18 Pereyaslav, 1654-10-03 Smolensk, 1667-02-09 Andrusovo, 1686 Ebedî Barış, 1689-09-06 Nerçinsk, 1700-07-14 Azak, 1702-10-22 Nöteborg, 1703-05-27 St. Petersburg, 1721-09-10 Nystad, 1722-09-03 Derbend, 1723-09-23 Petersburg Ant., 1739, 1743 Åbo, 1764 Hetman, 1770-1774 Kırım/Küçük Kaynarca, 1772/1793/1795-10-24 Polonya paylaşımları, 1783-04-19 Kırım, 1801-09-12 Kartli-Kaheti, 1809-09-17 Fredrikshamn, 1812-05-28 Bükreş, 1813 Gülistan, 1828 Türkmençay, 1829, 1856 Paris, 1867-10-18 Alaska, 1878-08-03 Berlin, 1905-09-05 Portsmouth, 1917-03-15 son.
**Başkent değişimi:** Moskova→St. Petersburg (1712-03-?? resmî; 1703-05-27 kuruluş maddesi var, başkent maddesi yok) ve 1918-03-12 Moskova'ya dönüş (sovyet sırası). Başkent maddesi yazmak için Cambridge History of Russia vol.2 (Hughes) / Britannica «Saint Petersburg» gün verirse eklenmeli (**çekilemedi**).

Evren dışı (site'de yüklü, `index.html`: kronoloji_rusya.js:1225, kronoloji_cok_rusya.js:1345) ama Değişmez 2'ye **girmeyen** maddeler: kronoloji_rusya.js:77 (1547-01-16), :93 (1552-10-02), :309 (1721-10-22), 1783, 1812, 1876-02-19 Hokand, 1878-03-03 Ayastefanos; kronoloji_cok_rusya.js: 1721-11-02, 1858-05-28 Aigun, 1864-09-22 Sayram-Taraz-Çimkent, 1604/1632/1648/1697 Sibirya; kronoloji_orta_asya.js: 1598-08-20 Tobolsk; kronoloji_cok_senkron_0930.js: 1868-05-14 Semerkant, 1878-03-03, 1917-03-15.

Eksik maddeler (hiçbir yerde yok, öneri; kaynak gün ister, gün okunana kadar "gün teyitsiz"):
```
{ t:"1478-01-25", b:"Büyük Novgorod Moskova'ya teslim oldu — III. İvan Novgorod'u ilhak etti", yer_id:"Novgorod", kaynak:"ÇEKİLEMEDİ: Cambridge History of Russia vol.1 (Jülyen 15 Ocak 1478 → Gregoryen 1478-01-24/25); gün kaynakla doğrulanmadan YAZILMAZ" },
{ t:"1565-01-01", b:"Oprichnina — Rusya iki idarî bölgeye ayrıldı", yer_id:"Aleksandrov", kaynak:"ÇEKİLEMEDİ: Cambridge History of Russia vol.1 [yalnız yıl; gün aranacak]" },
{ t:"1582-10-26", b:"Yermak Sibir Hanlığı'nın başkenti Kaşlık'ı (İsker) aldı", yer_id:"Tobolsk (İsker)", kaynak:"TDV «Rusya» md.: «1582'de Sibirya'nın zaptı için ilk adımlar atılmıştır» (okundu, yalnız yıl); gün (Jülyen 26 Ekim → Gregoryen) çekilemedi; atlas dönemi 1598-08-20 (Ob muharebesi)" },
{ t:"1610-09-21", b:"Lehistan garnizonu Kremlin'e girdi (Yedi Boyar Hükûmeti)", yer_id:"Moskova", kaynak:"ÇEKİLEMEDİ: Sıkıntılar Dönemi için Cambridge History of Russia vol.1; gün yazılmaz" },
{ t:"1613-03-03", b:"Mihail Romanov Zemski Sobor'da çar seçildi (Jülyen 21 Şubat) — Romanov hanedanı", yer_id:"Moskova", kaynak:"devletler.js künye-içi 1613-02-21 Jülyen; Gregoryen karşılığı hesap; ikinci kaynak çekilemedi" },
{ t:"1696-07-28", b:"I. Petro Azak'ı aldı", yer_id:"Azak", kaynak:"künye-içi 1696-07-18 (Jülyen) → Gregoryen 07-28; gün kaynakla teyit edilecek" },
{ t:"1875-05-07", b:"St. Petersburg Antlaşması — Sahalin tümüyle Rusya'da, Kuril adaları Japonya'da", yer_id:"Aleksandrovsk (Kuzey Sahalin)", kaynak:"ÇEKİLEMEDİ: Vikipedi 7 Mayıs 1875 (Gregoryen) diyor; akademik kaynak (Cambridge History of Japan vol.5 / Britannica «Sakhalin») okunmadı" },
{ t:"1898-03-27", b:"Rusya Lüşun'u (Port Arthur) Çin'den 25 yıllığına kiraladı", yer_id:"Lüşun (Port Arthur)", kaynak:"ÇEKİLEMEDİ: Britannica «Port Arthur»; Pekin Sözleşmesi 27 Mart 1898 (Gregoryen); kaynak okunmadan YAZILMAZ" }
```
Tarih uydurma yasağı gereği bu satırlar kaynak okunmadan **uygulanmamalı**; amaç hangi maddelerin eksik olduğunu göstermektir.

## d) Harita uyumu
Ölçer: `rusya` kırılma 256, AÇIK 146; en geniş örnek yıl 1907 (508 yerleşim). `moskova` en geniş 1530 (78). Açık günlerin sınıfı:

| sınıf | adet (yaklaşık) | örnek | çözüm |
|---|---|---|---|
| (A) Madde evrende var ama `yer_id`/`yer:` yerleşimi kapsamıyor | ~14 | 1689-09-06 Albazin ← Nerçinsk; 1795-10-24 Kovel, Lutsk ← 3. paylaşım (yer_id Varşova); 1812-05-28 Bălți, Kahul, Kişinev, Orhei ← Bükreş (yer_id Bender); 1905-09-05 Sahalin/Lüşun ← Portsmouth (yer_id boş); 1916-02-16 Pasinler ← Erzurum; 1654-01-18 Kremençuk ← Pereyaslav (yer_id Çernigov); 1556-01-01 Kamışin, Hvalınsk ← Astrahan | maddenin `yer:` alanına yerleşimleri ekle |
| (B) Madde sitede var ama evren dışı | ~20 | 1547-01-16, 1552-10-02, 1598-08-20 (Tobolsk), 1858-05-28 Aigun, 1864-09-22 Sayram/Taraz/Çimkent, 1868-05-14 Semerkant, 1876-02-19 Hokand/Andican/Oş, 1878-03-03 Artvin/Hulo, 1867-10-18 (Alaska: Aleksandrovski Redut vb.) | maddeyi `data/olaylar_*.js`e taşı; `yer_id` + `yer:` ekle |
| (C) Madde hiçbir yerde yok | ~110 | Siberya ostrogları (1574-1730, ~70 yerleşim, hepsi `YYYY-01-01`), Amur/Sahalin 1860-1879, Türkistan: 1865-06-17 Taşkent, 1866-05-24 Hucend, 1884 Merv, 1893 Pamir, 1898-03-27 Lüşun | her ostrog yıl-hassasiyetli ve kaynak çoğu zaman "Rus kaynaklı kuruluş yılı": kaynak okunmuş madde yaz, okunamıyorsa dönemi kısalt (CLAUDE.md: tarih uydurma yok) |
| (D) Tarih uyuşmazlığı: madde var, sınır başka günde | ≥ 6 | **1735-03-21** Salyan/Şâbüran kaybı ← «Gence Antlaşması» maddesi `t:"1735-01-01"` (antlaşma 10 Mart O.S. = 21 Mart N.S.; Vikipedi — akademik kaynak okunmadı); 1722-08-08 Ağraham burnu ← Derbend maddesi 1722-09-03 (Hazar seferi 18 Temmuz'da Astrahan'dan çıktı); 1736-09-02 Çelyabinsk ← İstanbul Ant. | madde gününü ya da yerleşim gününü kaynakla eşitle |

En önemli 15 açık (`rusya`), öneriyle:
| gün | yerleşimler | öneri |
|---|---|---|
| 1547-01-16 kazanç | Abrene, Arhangelsk, Arzamas, Belozersk + 74 | Gün `1547-01-26`; madde kronoloji_rusya.js:77'den `olaylar_*`ya taşı; `yer:` listesi çok uzun → kaynaklı alt-listeleme gerekebilir (78 yerleşimin hepsi 1547'de Rus mu? en kalabalık günlük kırılma) |
| 1552-10-02 kazanç | Alatır, Buinsk, Bulgar, Kazan | kronoloji_rusya.js:93'ü evrene taşı; gün `ic_not` ile (Kazan: 2 Ekim Jülyen → 12 Ekim?) |
| 1598-08-20 kazanç | Abalak, Baraba, Kızıl-Tura, Tobolsk | kronoloji_orta_asya.js'teki maddeyi evrene taşı |
| 1654-01-18 kazanç | Kremençuk | Pereyaslav maddesinin `yer:`ine ekle (ama Kremençuk 1654'te Rus muydu? Hetmanlık özerk — sahiplik sorgulanmalı: Kazak Hetmanlığı künyesi var, 1654'te Rus egemenliği yalnız "bağlılık yemini") |
| 1689-09-06 kayıp | Albazin, Blagoveşçensk | Nerçinsk maddesine `yer_id:"Albazin"` ekle (kaynak: kronoloji_rusya.js:237, Nerçinsk Antlaşması 27 Ağustos O.S.) |
| 1721-01-01 kazanç | Bozkır, Don bozkırı, Çerkask… | yıl-hassasiyetli, madde yok → kaynak okunana kadar madde ya da dönem kısaltma; Don Kazak Ordusu'nun 1721'de Harbiye Kolejine bağlanması **iddiası okunmadı** |
| 1735-03-21 kayıp | Salyan, Şâbüran | Gence Antlaşması günü `1735-03-21` (D) |
| 1795-10-24 kazanç | Kovel, Lutsk, Volodymyr | madde yer_id'ye ekle |
| 1812-05-28 kazanç | Bălți, Kahul, Kişinev, Orhei | madde yer_id'ye ekle (kayıt `kronoloji_cok_sirbistan.js`'te de var) |
| 1858-05-28 kazanç | Albazin, Blagoveşçensk, Nikolayevsk | cok_rusya.js'teki Aigun'u evrene taşı |
| 1864-09-22 kazanç | Sayram, Taraz, Çimkent | cok_rusya.js'ten taşı |
| 1865-06-17 kazanç | Taşkent | madde hiçbir yerde yok; **Taşkent'in alınış günü** (Çernyayev) için Cambridge History of Inner Asia / Britannica «Tashkent» çekilemedi |
| 1867-10-18 kayıp | Aleksandrovski Redut, Chignik, **Fort Ross**… | Alaska maddesi evrende (kronoloji_sinir_amerika.js) fakat yer listesi yok; **Fort Ross'u listeden çıkar** (b'deki bulgu) |
| 1875-05-07 kayıp (Sahalin) | Aleksandrovsk, Esutoru kıyısı, Korsakov | Ölçer "kayıp" diyor: önceki sahip `__BOSLUK__`; asıl olay Rus ilhakı + madde eksik (c'deki 1875 maddesi) |
| 1905-09-05 kayıp | Esutoru, Korsakov, Lüşun | Portsmouth maddesine `yer:` ekle |

`moskova` 4 AÇIK: 1337-01-01 Sergiyev Posad (Radonezh/Trinity Lavra kuruluşu 1337 yıl-hassas, madde yok); 1478-01-15 Arhangelsk(N.Dvina), Belozersk, Eski Ladoga, Hlınov — **Büyük Novgorod'un ilhakı maddesi eksik** (c); 1499-01-01 Pustozersk; 1547-01-16 kayıp (yukarıdaki).

Yerleşim sahipliği kontrolü:
- 1900-07-01: Moskova, Petersburg, Kiev, Tiflis, Revan, Bakü, Kars, Ardahan, Batum, Riga, Vilnius, Taşkent, Semerkant, Hokand, Lüşun, Vladivostok hep `rusya` ✓. Varşova `kongre-polonyasi`, Helsinki `finlandiya-buyuk-dukaligi`, Buhara `buhara`, Hîve `hive` (vasal; ayrı künye uygun). Mukden/Harbin/Kaşgar/Gulca `qing-hanedani` ✓.
- 1550: Moskova, Novgorod, Smolensk, Tula, Tver, Ryazan, Pskov `rusya` ✓; Kazan `kazan`, Astrahan `astarhan`, Narva `livonya-tarikati` ✓. Kiev `litvanya-buyuk-dukalik` ✓.
- **Hatalı:** `Fort Ross` (Kaliforniya) rusya → 1867 (olması gereken: 1841'de Sutter'a satış; Fort Ross Alta California'da, Meksika egemenliğinde). `Balasagun` rusya 1862-09-04 (Hokand→Rusya; Pişpek 1862 olayı kaynaksız). `Merv` 1884-01-01 yıl-hassas (günü bulunmalı).
- `Çernigov` 1550'de `rusya` (1503 Moskova kazancı, kronoloji 1503-04-02 ✓).

## Önerilen düzeltmeler (KASA için)
1. `data/devletler.js` (`rusya` f, `moskova` t) → `1547-01-26`; `ic_not_f`: "Jülyen 16 Ocak 1547 (kreml.ru/Başkanlık Kütüphanesi); Gregoryen 26 Ocak". Aynı gün tüm `s:` dönemlerinde (≈78 yerleşim, `d:"moskova"→"rusya"`) değişmeli — kırılma 1547-01-16 → 01-26; maddeyi (kronoloji_rusya.js:77, devletler.js künye-içi) de güncelle. Tavan (`BEKLENEN_*`) etkisi için `denetle`yi koştur.
2. `data/kronoloji_rusya.js:309` `t:"1721-10-22"` → `1721-11-02` (var olan `kronoloji_cok_rusya.js` kaydıyla birleştir; ikili madde sil). Aynı oturumda 1613-02-21→1613-03-03, 1696-07-18→1696-07-28 (kaynak okunduktan sonra).
3. `data/yerlesimler.js` — `Fort Ross (Kaliforniya)` s: `rusya` bitişi 1867-10-18 → 1841 (Aralık; kaynak: Sutter anlaşması — **kaynak bu oturumda çekilemedi**, değer yazmadan önce Britannica «Fort Ross» / California State Parks); sonrası sahibi kaynakla belirle.
4. Evren-dışı → evren taşıma: kronoloji_rusya.js:77, :93; kronoloji_cok_rusya.js 1858-05-28, 1864-09-22; kronoloji_orta_asya.js 1598-08-20; kronoloji_cok_senkron_0930.js 1868-05-14, 1878-03-03. Bu tek hamle ≥ 20 açığı kapatır (`yer_id` + `yer:` listesiyle).
5. `yer:` genişletme (A sınıfı ~14 madde): Nerçinsk (Albazin, Blagoveşçensk), 3. paylaşım (Kovel, Lutsk, Volodymyr), Bükreş (Bălți, Kahul, Kişinev, Orhei), Portsmouth (Esutoru, Korsakov, Lüşun), Erzurum 1916 (Pasinler), Astrahan 1556.
6. `data/kronoloji_*` — "Gence Antlaşması" `t:"1735-01-01"` → `1735-03-21` (kaynak: Cambridge History of Iran vol.7 / Lockhart *Nadir Shah* — **okunmadı**; Vikipedi yalnız yol göstermiştir).
7. `moskova` `kaynak:` alanına Cambridge History of Russia vol.1 ve f için `ic_not` (b'deki üç aday: 1263/1272/1282).
8. Siberya ostrogları (C sınıfı ~70 yerleşim): her ostrog için kaynak (Rus akademik; ör. Forsyth, *A History of the Peoples of Siberia*, Cambridge UP 1992) okunup madde, ya da kaynaksız ostrog döneminin kaldırılması.

## Erişilemeyen kaynaklar
- Cambridge History of Russia vol.1 (Perrie), vol.2 (Lieven) — Moskova'nın 1263/1282/1283 kuruluşu, 1478 Novgorod, 1547 çarlık, Sıkıntılı Dönem, Petersburg'un başkentliği. Sorular: «Daniil hangi yıl Moskova'yı aldı?», «1478 Novgorod teslim günü?».
- Forsyth, J., *A History of the Peoples of Siberia* (CUP 1992) — Yermak 1582; ostrog yılları.
- Skrynnikov, R., *Ivan Groznyi* / Rus akademik kaynak — Kazan'ın alınış günü Jülyen/Gregoryen teyidi (1552-10-02).
- Britannica «Fort Ross», «Sakhalin», «Port Arthur», «Tashkent» (WebFetch 403; yalnız snippet), California State Parks (Fort Ross) — sorular: satış yılı 1841 mi, 1875 antlaşması günü, 27 Mart 1898 sözleşmesi, Taşkent'in alınışı (15/17 Haziran 1865).
- Cambridge History of Iran vol.7 — Gence Antlaşması günü.
- TDV «Rusya» md. 100.000. karakterden sonrası okunmadı (sayfa 152.519 karakter); «Moskova» md. müstakil değil (yalnız «Kasım Hanlığı» çıktı).

## JSTOR teyidi (HAVVA SALI, tarayıcıdan, 4 Kasım 2026 gecesi; aktarım)
- **Fort Ross satışı — kaynaklı:** C. J. Du Four, «The Russian Withdrawal from California», *California
  Historical Society Quarterly* 12/3 (1933), s. 268-270 (jstor.org/stable/25178219, belge neşri): Rotchev'in
  satış senedi Fort Ross'ta «the 12th of December, 1841» (Sutter'a); Kostromitinov–Sutter devir akdi
  «1841, San Francisco, December 13». Tahliye günü bu sayfalarda yok.
  **Hüküm (UMIT SALI):** Fort Ross `s: rusya` t → **1841-12-12** (satış senedi = egemenlik/sahiplik
  devri; senet Kaliforniya'da yazıldığı için Batı takvimidir, çeviri gerekmez). Ardıl dönem Sutter
  özel mülkü olduğundan toprak Meksika'ya (Alta California) kalır: `s:` 1841-12-12 → 1846-07-07
  `meksika` (künye id'si KASA'da doğrulansın). Kronolojiye madde: { t:"1841-12-12", b:"Rus-Amerikan
  Şirketi Fort Ross'u Sutter'a sattı", yer_id:"Fort Ross", kaynak:"Du Four 1933, CHSQ 12/3 s.268-270" }.
- **Kazan 1552 — kısmen:** E. Vishlenkova, *Jahrbücher f. Gesch. Osteuropas* 60/4 (2012), arama özeti:
  Rus geleneğinde «on the 2nd of October 1552». Takvimi açıkça söyleyen metin bulunamadı.
  **Hüküm:** Rus kaynaklarının 1918 öncesi günü Jülyen'dir; 2 Ekim 1552 Jülyen = **12 Ekim 1552 Gregoryen**
  — ama 1552 Gregoryen takvimden (1582) ÖNCEDİR. Atlasın 1582 öncesi kuralı KASA'da `arac/gun.py` ile
  sorulmalı (proleptik Gregoryen mi Jülyen mi). Proleptik Gregoryen ise 1552-10-12 + `ic_not` beyanı.

- Ek (UMIT SALI): `arac/gun.py` başlığı «Takvim PROLEPTİK GREGORYEN (1582 öncesi de)» ⇒ Kazan **1552-10-12** (Jülyen 2 Ekim'in proleptik Gregoryen karşılığı) + `ic_not` takvim beyanı. Bütün Rus Jülyen günlerinin listesi: `EK-rus-julyen.md`.
- Düzeltme (UMIT SALI): 1552 Kazan günü 1582 öncesidir; atlasın 1582 öncesi Jülyen/proleptik kuralı YAPI KARARIdır (OZET). Karar "1582 öncesi Jülyen" olursa 1552-10-02 kalır; "proleptik" olursa 1552-10-12. Kesin düzeltme listesi 1582-10-15 → 1918-02-14 arası Rus günleridir (1613-02-21, 1696-07-18, 1721-10-22 vb.); 1547 ve 1552 bu karara bağlıdır.

## TAKVİM KARARI (EMRELİC 1 KASIM, 4 Kasım gecesi; Emre sabah onaylar)
1582-10-15 öncesi günler kaynaktaki gibi (Jülyen) kalır; sonrası Gregoryendir, Rusya 1918-02-14'e dek çevrilir.
⇒ `rusya` f **1547-01-16 KALIR** (hata değil, önceki bulgu geri çekildi) · Kazan **1552-10-02 KALIR** · çevrilecekler: 1613-02-21, 1696-07-18, 1721-10-22 (→ 1721-11-02) ve 1582 sonrası öteki Rus günleri — tam liste `EK-rus-julyen.md`.
