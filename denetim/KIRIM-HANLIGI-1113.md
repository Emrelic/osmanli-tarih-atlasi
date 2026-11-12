# KIRIM HANLIĞI — 13 Kasım 2026 denetim

Ölçüm: makine **UMIT** · worktree `reverent-allen-bb8c39` · HEAD `b228a31ca` (oturum açılışındaki git durumu; git komutu koşturulmadı) · **salt okuma** (data/ değişmedi, betik koşmadı; yalnız grep/Read + scratchpad'de hicrî çevrim hesabı).
Önceki işler okundu: `ARASTIRMA-KIRIM2-0913.md` (kuzey bozkır, Kuban, Çerkes kıyısı, Kabartay, Hacıbey — **uygulanmış**: Voronej/Belgorod/Tambov `__BOSLUK__`, Kabartay `kabartay` 1427→1774, Hacıbey 1441-1480 Litvanya, Anapa 1441-1475 boşluk), `UMIT-W43-KIRIM-TABI-1006.md` (tâbi katman TÂBİ-DOĞRU, kamera kusuru kodda). Bunlar burada yinelenmedi.

## ① Ne ölçtüm (sayılarla)
- Künye: `kirim` (f 1441-01-01, t 1783-04-19, tabi 1475-06-06→1774-07-21, 9 kronoloji maddesi), `altinorda`, `nogay`, `kazan`, `zaporojye`, `don-kazak`.
- `data/kronoloji_kirim.js`: 93 madde tarandı; çekirdekte (olaylar*.js) Kırım/Azak/Özi/Prut/Yaş ile ilgili ~20 madde.
- Yerleşim zincirleri okundu: Kefe, Bahçesaray, Kerç, Taman, Yenikale, Azak, Taganrog, Özi, Kılburun, Balta, Hacıbey, Kuban, Kabartay, Voronej, Belgorod, Tambov, Harkov ve `yerlesimler_kirim.js`teki 10 Kırım içi yer (Gözleve, Or Kapı, Akmescid, Karasubazar, Eski Kırım, Sudak, Balaklava, Yalta, Aluşta).
- `d:"kirim"` dönemleri: 1441→1475-06-06 **9**, 1774-07-21→1783-04-19 **28**, 1774→1781 **1**, 1503→1774 **1** (Bahçesaray). `s:` künye dışına taşan `kirim` dönemi: **0** (hayalet yok).
- TDV GET'lenip gövdesi okunan: `azak`, `kefe`, `kirim` (ilk 100 bin karakter), `yas-antlasmasi`, `prut-antlasmasi`, `sahin-giray`, `mehmed-pasa-sultanzade` (7 madde, hepsi 200).
- Hicrî→Jülyen/Gregoryen çevrimi (tablo hesabı, ±1 gün): 845/1/1, 880 Safer, 1051 Zilkade 4, 1108 Muharrem 7, 1206 C.evvel 15, 1152 Ramazan 11.

## ② Ne bulamadım / ölçemedim
- **BRE (bigenc.ru) çekilemedi** (401): «Азовская губерния», «Азовское осадное сидение». Arama özetindeki "январь 1712" OKUNMADI, dayanak yapılmadı.
- Vostok (RAS) «Ottoman Azov 1475–1696» çekilemedi (sertifika hatası).
- Azak 1637 ele geçiriş gününün (18 Haziran) **akademik** kaynağı okunmadı; bulunanlar ansiklopedi benzeri/popüler (Rus genel kuralı: 17. yy Rus belge günleri Jülyendir).
- Azak 1642'de Osmanlı'nın kaleye **giriş günü** hiçbir okunan kaynakta yok.
- Kefe 1771 düşüş günü: RBS «Долгоруков-Крымский» yalnız Or Kapı'yı günlü veriyor (14 Haziran J); Kefe/Kerç/Gözleve için gün yok.
- Şahin Giray'ın Kerç'e kaçışı "14 Mayıs": TDV `sahin-giray` cümlesinde yıl yok, bağlam 1781/1782 belirsiz — ölçülmedi.
- Petek/renk etkisi ölçülmedi (koşu ister). `denetle.py` koşturulmadı (brief yasağı) ⇒ Değişmez 2 farkları elle sayıldı.

## ③ Bulgular

### B1 — Kırım künyesinin başlangıcı hicrî kuralına aykırı [TARİH-HATA]
- Kimlik: `data/devletler.js:207` `kirim` f:"1441-01-01"; kronoloji `devletler.js:213`; `kronoloji_kirim.js` ilk madde; `olaylar_ek16.js:110`; 9 yerleşimde `d:kirim` 1441-01-01.
- Atlasta: 1441-01-01 (yılbaşı).
- Kaynak: TDV `kirim` — "adını taşıyan en eski para **845 (1441-42)** tarihini taşır". 1 Muharrem 845 = **22 Mayıs 1441 (Jülyen)**. CLAUDE.md "Hicrî yıl": kesişimin ilk günü ⇒ 1441-05-22 (1582 öncesi, Jülyen gün yazılır).
- Öneri: künye f, kuruluş maddeleri ve 9 yerleşimin 1441 kırılması **1441-05-22**; `ic_not`: "845 H = 22.05.1441-10.05.1442 J; kesişimin ilk günü". Altın Orda/Kazan tarafındaki 1441 maddeleri (devletler.js:202) birlikte taşınır (Değişmez 2).

### B2 — Kefe fethi / Kırım tâbiliği iki farklı günde [TARİH-HATA · ÇELİŞKİ]
- Kimlik: `devletler.js:214` kronoloji `1475-06-01`; `kronoloji_kirim.js` "Gedik Ahmed Paşa … Kefe'yi fethetti" `1475-06-01`. Karşı: `olaylar.js:65` 1475-06-06, künye `tabi.f` 1475-06-06, bütün yerleşim kırılmaları 1475-06-06.
- Kaynak: TDV `kefe` "Safer 880 / Haziran 1475". Safer 880 = **6 Haziran – 5 Temmuz 1475 (J)**; 1 Haziran Safer'in **dışında** (Muharrem 880).
- Öneri: iki madde **1475-06-06**'ya (olaylar.js ile aynı gün). Değişmez 2 bugün de geçiyor (5 gün), ama madde haritadaki kırılmadan önce okunuyor.

### B3 — Azak 1696: üç dosyada üç gün, yerleşim TDV'ye göre düzeltilmiş, maddeler değil [ÇELİŞKİ · TAKVİM]
- Kimlik: `yerlesimler.js:733` Azak `s:rusya f:"1696-08-06"` (POST-IT #117, TDV); `olaylar_ek3.js:60` t:"1696-07-19" gun:"19 Temmuz 1696"; `kronoloji_kirim.js:359` 1696-07-19; `kronoloji_rusya.js:252` 1696-07-18.
- Kaynak: TDV `azak` "teslim aldı (**6 Ağustos 1696**)"; 7 Muharrem 1108 = 27 Tem J / **6 Ağu G** (hesap tutuyor). 18/19 Temmuz Rus kaynaklarının çevrilmemiş Jülyen günü (G 28/29 Temmuz).
- Öneri: üç madde **1696-08-06**, `ic_not_takvim`: "Rus kaynağı 18/19 Tem J = 28/29 Tem G; TDV esas". Bugün çekirdek madde haritadan 18 gün önce "kayıp" diyor.

### B4 — Azak 1637 Kazak zaptı: Jülyen gün çevrilmemiş [TAKVİM]
- Kimlik: `yerlesimler.js:733` `s:don-kazak f:"1637-06-18"`, `d:` osmanlı t:"1637-06-18"; `olaylar_ek8.js:168` gun:"18 Haziran 1637" (d: "21 Nisan 1637'de kuşattıkları"); `kronoloji_kirim.js:300`.
- Kaynak: TDV `azak` yalnız "1637'de Kazaklar kaleyi ele geçirdiler" (gün yok). 18 Haziran ve 21 Nisan Rus kroniği günleridir; Rus ansiklopedik özetleri "18 (28) июня" verir (akademik ikinci kaynak okunmadı).
- Öneri: 1582 sonrası kural gereği **1637-06-28** (G) + `ic_not_takvim` "18 Haziran J". Akademik teyit gelene kadar ④'e de yazıldı.

### B5 — Azak 1642 geri alınış günü kaynaksız ve kaynakla çelişiyor [KAYNAKSIZ · TARİH-HATA]
- Kimlik: `olaylar_ek5.js:249` t:"1642-02-26" ama gun:"1642"; `yerlesimler.js:733` `don-kazak t:"1642-02-26"`, `d:` osmanlı f:"1642-02-26".
- Kaynak: TDV `mehmed-pasa-sultanzade`: "Azak Kalesi'nin kurtarılması maksadıyla serdar olarak Özü valiliğine tayini (**4 Zilkade 1051 / 4 Şubat 1642**)" ve "Kazaklar'ın kaleyi tahrip ederek çekilmelerinin **ardından** Azak'a girdi". Kazakların çekilme kararı (Zemski Sobor) 3 Ocak 1642 J, çar fermanı Azak'a 30 Nisan 1642 J'de ulaştı (ikincil, akademik değil). ⇒ 26 Şubat'ta Azak hâlâ Kazaklardaydı; 02-26 hiçbir kaynakta yok.
- Öneri: gün bulunamadığı için `gun:"1642"` hassasiyetine dürüst dönülmeli; ama 1642-01-01 serdar tayininden önce düşer. Karar ④-2.

### B6 — Azak ve Taganrog 1711: kırılma imza gününde, fiilî devir 1712 Ocak [SINIR · TARİH-HATA]
- Kimlik: Azak `d:` osmanlı f:"1711-07-21", `s:rusya t:"1711-07-21"`; Taganrog `yerlesimler_h2_rusya.js:444` `rusya t:"1711-07-21"`; madde `olaylar_ek5.js:282` 1711-07-21.
- Kaynak: TDV `prut-antlasmasi` "Antlaşma 21 Temmuz'da imzalandı", "Azak Kalesi … iade edilecek" (teslim günü yok); TDV `azak` "**1713 Edirne Antlaşması'yla** Osmanlılar'a bırakılan Azak"; HSE «Биохроника Петра Великого» (spb.hse.ru/humart/history/peter/biochronic/227394860): Azak komutanı A. Kelin "сдал **02.01.1712** Азов туркам согласно Прутскому договору" (Jülyen ⇒ **13 Ocak 1712 G**).
- KASA-1112 karar 4: sahiplik kırılması = fiilî devir; imzadan 176 gün uzak ⇒ iki madde.
- Öneri: Azak `s:rusya t` ve `d:` osmanlı f → **1712-01-13**; yeni madde "Azak Osmanlı'ya teslim edildi (2 Ocak 1712 J)"; Prut maddesi 1711-07-21'de kalır. Tek akademik gün kaynağı ⇒ ④-3.

### B7 — Kefe ve Kırım içi yerlerin 1771 işgal günü kaynaksız (madde yalnız yıl diyor) [KAYNAKSIZ]
- Kimlik: Kefe `isg f:"1771-07-01"` kaynak:"kefe"; Gözleve, Akmescid, Karasubazar, Eski Kırım, Sudak, Balaklava, Yalta, Aluşta, Bahçesaray `isg f:"1771-07-01"`; madde `olaylar_ek5.js:313` t:"1771-07-01" ama gun:"1771".
- Kaynak: TDV `kefe` "(1771)", TDV `kirim` "1771'de Prens Dolgorukov idaresinde" — ay yok. RBS «Долгоруков-Крымский» (azbyka.ru, t.6): "**14-го июня** овладела укрепленною линиею у Перекопа" (J ⇒ 25 Haziran G; atlas Or Kapı 1771-06-26 ile 1 gün fark), Kefe "вслед за тем", gün yok.
- Öneri: 07-01 "beyanlı alt sınır" diye `ic_not`a yazılmalı ya da Kefe günü için Rus akademik kaynak (Dubrovin; VE «Крымская экспедиция 1771») okunmalı. Or Kapı 06-26 ↔ RBS 06-25 farkı ayrıca bakılmalı.

### B8 — Kerç/Taman/Yenikale isg notu kendi değeriyle çelişiyor [ÇELİŞKİ · TAKVİM]
- Kimlik: `yerlesimler.js:713` Kerç, `:734` Taman, `yerlesimler_ok106.js:70` Yenikale — `isg f:"1771-07-12"`.
- Atlasta: not hem "Jülyen gün ÇEVRİLMEDEN yazıldı … eski Gregoryen çevirisi 1771-07-12 geri alındı" hem "Gregoryen 1771-07-12" diyor; değer 07-12. 4 Kasım takvim kuralına (1582 sonrası Gregoryen) göre 07-12 doğru, "geri alındı" cümlesi bayat.
- Öneri: değer kalsın, bayat TAKVİM/KARARLAR-1014 m.28 cümlesi `kaynak:`tan silinsin; "Temmuz 1771 J'nin ilk günü = alt sınır" beyanı kalsın.

### B9 — Aynalıkavak: Kırım kronolojisi yıl hassasiyetinde, çekirdek günlü [ÇELİŞKİ]
- Kimlik: `kronoloji_kirim.js` 1779-01-01 "Aynalıkavak Tenkihnâmesi"; `olaylar_ek5.js:318` 1779-03-10.
- Kaynak: TDV `kirim` "Aynalıkavak Tenkihnâmesi (**10 Mart 1779**)".
- Öneri: `kronoloji_kirim.js` → **1779-03-10**.

### B10 — Yaş Antlaşması: yerleşimler 9 Ocak, çekirdek 10 Ocak, TDV kendi içinde çelişkili [ÇELİŞKİ · TAKVİM]
- Kimlik: Özi, Hacıbey, Balta, İsmail vb. `1792-01-09`; `olaylar_ek5.js:324` t:"1792-01-10"; `kronoloji_kirim.js:506` 1792-01-01.
- Kaynak: TDV `yas-antlasmasi`: "15 Cemâziyelevvel 1206 (**10 Ocak 1792**) **Pazartesi** günü yapılan on beşinci toplantıda … mühürlenip mübadele edildi". 9 Ocak 1792 Pazartesidir (10 Ocak Salı); 15 C.evvel 1206 tablo hesabıyla 10 Ocak (±1). Rus günü 29 Aralık 1791 J = 9 Ocak G (EoU «Balta» notunda).
- Öneri: değişiklik yok (1 gün, Değişmez 2'yi geçiyor); `olaylar_ek5.js:324`e `ic_not_gun`: "TDV 10 Ocak/Pazartesi (=9 Ocak) iç çelişkisi; Rus 29.12.1791 J = 9.1.1792 G". `kronoloji_kirim.js:506` (1792-01-01, "canlandırma fikrinden vazgeçti") künye t'sinden (1783) sonra — künye dışı madde, kaldırılması ya da Osmanlı kronolojisine taşınması önerilir.

### B11 — Kırım 1777-1783 fiilî Rus denetimi haritada yalnız Or Kapı'da [SINIR]
- Kimlik: Or Kapı `isg 1776-12-03→1783-04-19 rusya`; Kefe, Gözleve, Akmescid, Karasubazar vb. 1774-07-21→1783-04-19 düz `s:kirim`, isg yok.
- Kaynak: TDV `kirim`: Ruslar "**Kefe'yi ve diğer Kırım limanlarını işgal ettiler (1777 kışı)**"; TDV `kefe`: "İkinci Rus saldırısı ve işgali 1777'de … Ruslar anlaşmaya rağmen Kefe'yi ellerinde tuttular"; TDV `sahin-giray`: "1776 Kasımında General Prozorovski, Orkapı'yı alıp Kırım'a girdi".
- Öneri: KASA-1112 karar 5'e göre Kefe (ve TDV'nin "diğer limanlar" dediği, adla belirlenebilenler) için `isg` adayı; f gün yok ("1777 kışı") ⇒ ④-4.

### B12 — Bucak Tatarları haritada yok: bölgede kendi noktası olmadığı için Osmanlı kalelerine emiliyor [SINIR · EKSİK]
- Kimlik: Bucak iç bozkırında (Kavşan/Tatarbunar/Kışla) yerleşim noktası **yok**; çevre Akkirman, Kili, İsmail, Bender (`d:` Osmanlı) ve Bolgrad (`yerlesimler_p0037.js:54`, sonraki dönem). Petek motoru boşluğu bu Osmanlı peteklerine veriyor.
- Kaynak: TDV `kirim` Kaynarca md. 3: "Kırım, **Bucak**, Kuban, Yedisan, Camboyluk ve Yediçkul … Tatar ulusları" bağımsız; TDV `giray`: serasker sultanlar Bucak idaresinde (0913 raporunda okundu); TDV `bucak` 1538 teşkilatı.
- Atlasta: Yedisan ve Kuban 1774-1783 `kirim` (doğru), Bucak 1774-1783 Osmanlı rengi — Kaynarca maddesi haritada görünmüyor.
- Öneri: "Bucak bozkırı" bölge noktası (Kavşan civarı) — 1538-1774 `d:` Osmanlı + `v:kirim`, 1774-07-21→1783-04-19 tartışmalı ⇒ ④-5.

### B13 — Kuruluş maddesinin odağı 1441'de var olmayan yere bağlı [EKSİK-MADDE (odak)]
- Kimlik: `olaylar_ek16.js:110` `yer_id:"Bahçesaray"`, `yer:` listesinde Bahçesaray.
- Atlasta: Bahçesaray `kur:"1503-01-01"` (TDV `bahcesaray`: 1503'te temeli atıldı).
- Öneri: `yer_id:"Eski Kırım (Solhat)"` ya da Kırkyer karşılığı; `yer:`dan Bahçesaray çıkarılsın (0913 raporunun Kabartay/Kuban notuyla birlikte).

### B14 — Altın Orda sonu: künye 1502-01-01, veri 1502-03-01 (0913'ten açık) [ÇELİŞKİ]
- Kimlik: `devletler.js:194` altinorda t:"1502-01-01", `:202` ve `kirim` kronolojisi 1502-01-01; 24 yerleşim `altinorda t:"1502-03-01"`, 2 yerleşim 1502-01-01; madde `olaylar_ek5.js:151` t:"1502-03-01" gun:"1502".
- Kaynak: TDV `altin-orda-hanligi`/`kirim` yalnız "1502".
- Öneri: kaynak yalnız yıl veriyor ⇒ `YYYY-01-01` kuralı: 24 yerleşim + madde **1502-01-01**'e insin (ay-gün uydurması kalkar). Hâlâ açık.

## ④ Karar gereken — Emre'ye öneriyle
1. **Azak 1637 (B4):** 18 Haziran J → 1637-06-28 G. Yalnız Rus ansiklopedik özeti var, akademik teyit yok. *Önerim:* kural açık (1582 sonrası Rus günü çevrilir), 06-28 + beyan; akademik kaynak (Novoselski, *Борьба Московского государства с татарами*, 1948) bulunursa "çift teyit".
2. **Azak 1642 (B5):** iki yol. (a) Kazakların çekilişi "Mayıs-Haziran 1642" — akademik kaynak bulunana dek `1642-05-01` ay hassasiyeti + beyan; (b) TDV'deki tek gün olan serdar tayini (4 Şubat 1642) "alt sınır" diye kullanılır. *Önerim (a)'nın akademik teyidi;* o gelene kadar 02-26 en azından "kaynaksız" diye beyan edilmeli. Taraflar: TDV `mehmed-pasa-sultanzade` (tayin 4.2.1642, giriş çekilmeden sonra) ↔ atlas 02-26 (kaynaksız).
3. **Azak 1711/1712 (B6):** TDV "1713 Edirne ile bırakıldı" der, HSE Biochronicle 2.1.1712 J teslim günü verir. *Önerim:* fiilî devir 1712-01-13 (karar 4), 1713-06-24 Edirne ve 1711-07-21 Prut ayrı maddeler; ikinci bağımsız gün kaynağı (BRE, 401) okunana kadar "beyanlı".
4. **Kefe 1777-1783 (B11):** TDV açıkça "işgal" diyor; öte yandan Rus kuvvetleri Şâhin Giray'ın davetiyle, hanlık devam ederken bulunuyordu. *Önerim:* karar 5 gereği `isg` (yalnız Kefe, TDV'nin adını verdiği yer), f "1777 kışı" günsüz ⇒ Or Kapı'nın 1776-12-03 günü komşudan alınamaz (zincirleme devralma yasak); gün kaynağı bulunana dek **değişiklik yok, beyan**.
5. **Bucak (B12):** 1774-1783'te Bucak'ı `kirim` göstermek Kaynarca md. 3'ü haritaya taşır; ama Akkirman/Bender/Kili/İsmail Osmanlı kaleleri olarak kaldı ve Bucak Tatarlarının fiilî olarak Osmanlı'dan ayrıldığını gösteren kaynak okunmadı. *Önerim:* önce nokta (Bucak bozkırı) + 1538-1774 `v:kirim`; 1774-1783 sahipliği fiilî kaynak bulunana dek Osmanlı kalsın, md. 3 `ic_not`ta.

Bulgu sayısı: **14** (TARİH-HATA 4 · TAKVİM 3 · ÇELİŞKİ 5 · SINIR 3 · KAYNAKSIZ 2 · EKSİK 2; bazıları çift sınıflı).
