# BOLGE-ISKANDINAV — Adım 2: Kronoloji teyidi (1115c)

Kapsam: künye-içi kronoloji (devletler.js) + `data/kronoloji_sinir_iskandinavya.js` + `kronoloji_isvec.js` + `kronoloji_cok_iskandinavya.js`. ~170 madde taranıp yalnız aşağıdaki **kaynakla sınanabilen** olanlar karara bağlandı; geri kalanı "ölçülmedi" (tek tek kaynak okunmadı). Okunamayan kaynak sayılmadı.

## Sayım
- Kaynakla TEYİT (gün/yıl): **11**
- Kaynakla DÜZELTİLEN / künyeye yazılan: **4** (devletler.js, bu dalda)
- ÇELİŞKİ/hakem bekleyen (kuyruğa): **6**
- BULUNAMADI/okunmadı: **7**
- Taranıp sınanmayan: kalan ~140 madde (ölçülmedi — ek kaynak çalışması gerekir)

## Teyit edilenler
| madde | atlas | kaynak | sonuç |
|---|---|---|---|
| Stensby Antlaşması | 1238-06-07 (Livonya Tarikatı) | lex.dk «Danmark og Estland, ca. 1200-1645»: '7 juni 1238' | TEYİT |
| Danimarka çıkarması / Lyndanisse (Tallinn) | 1219 (yıl) | lex.dk aynı madde: '15 juni 1219' | atlasta yalnız yıl → gün **15 Haziran 1219** kuyruğa (K3) |
| Tallinn 1227 Kılıç Kardeşleri | 1227 (yıl) | lex.dk: yalnız yıl | TEYİT (yıl) |
| Estonya'nın satışı | 1346-11-01 | lex.dk yalnız 1346 verir; 1 Kasım künye kaynağındadır (blogi.linnamuuseum.ee, Wikipedia: akademik değil) | yıl TEYİT, gün 'tek zayıf kaynak' |
| Brömsebro | 1645-08-23 (Gregoryen) | lex.dk 1645; Julian 13 Ağu = 23 Ağu | TEYİT (yıl; çevrim doğru) |
| Visby savaşı / Gotland 1361-07-27 | 1361-07-27 | lex.dk «Visbygravene» (önceki işte okundu) + lex.dk Gotland: '1361' | TEYİT |
| Riga 1201-55 piskopos, 1255-1562 başpiskopos | 1255 künye f | VLE «Rygos istorija» | TEYİT; künye f 1201'e GENİŞLETİLDİ |
| Riga → Lehistan 1581, Riga → İsveç 1621, VLE: İsveç 1710'a dek | | VLE | 1581/1621 TEYİT; 1710 çelişkisi aşağıda |
| Tartu 1558 Rus, 1582 Lehistan, 1625 İsveç, 1704 Rus | | VLE «Tartu» | yıllar TEYİT |
| Olav IV Danimarka kralı | **yok** | SNL «Olav 4 Håkonsson»: '3. mai 1376 valde riksmøtet i Slagelse Olav til dansk konge' | **EKLENDİ** (danimarka künyesi, 1376-05-03) |
| Norveç 1814: Stormannsmøtet / bildiriler / seçim | norvec-1814 f 1814-02-19 | SNL «Christian Frederik»: 16 Şubat Stormannsmøte; '19 Şubat bildirileri'; 17 Mayıs 1814 krallığa seçildi | 19 Şubat TEYİT (bildiri günü); tanım seçimi (f için 17 Mayıs de savunulur) Emre/KASA'ya |

## Düzeltilenler (bu dalda, `data/devletler.js`)
1. `livonya-tarikati` 'son' maddesi 1561-01-01 → **1561-11-28** (künye t'si zaten 1561-11-28; madde yalnız yıl taşıyordu; kaynak: kurland-dukaligi künyesindeki VLE «Vilniaus sutartys»).
2. `riga-baspiskoposlugu` f 1255-01-01 → **1201-01-01** (künye genişletme; VLE) + yeni 'kurulus' maddesi 1201; 1255 maddesinin türü kurulus→siyaset.
3. `danimarka` + 1376-05-03 hükümdar maddesi.
4. (Yerleşim tarafı kuyruğa: K1.)

## Çelişki / hakem (kuyruk; ayrıntı `YERLESIMLER-JS-KUYRUK-1115c-iskandinav.md`)
- **Riga 1621-09-15** (yerlesimler.js + kronoloji_isvec.js + kronoloji_cok_senkron_0930.js): Swedish kaynaklar Julian 15 Eylül 1621'i verir (Ingvar Andersson, *The History of the Swedes*, runeberg.org/histswed/0271: teslim görüşmesi, '16 Eylül' giriş); aynı olay Gregoryen **25 Eylül 1621** (historyofwar.org «Polish-Swedish War 1600-29» '25 Eylül'). CLAUDE.md'ye göre 1582 sonrası atlas günü Gregoryendir (İsveç Julyen) → 1621-09-25 önerisi. 2. bağımsız akademik kaynak okunmadı: Andersson + takvim kuralı; **karar KASA/Emre**. Not: Nyen/Yam/Oreşek/Koporye satırları zaten çevrilmiş (1703-05-12, 1617-03-09, 1702-10-22, 1703-05-14) — Riga 1621 çevrilmemiş tek satır.
- **Riga/Tallinn/Tartu/Narva/Pärnu 1710 mi 1721 mi:** VLE «Rygos istorija» 'Riga 1621–1710 İsveç'; atlas 1721-09-10 (Nystad). Atlas politikası Viipuri/Lappeenranta için de antlaşma gününü esas alıyor (1743-08-18 Åbo ✓). Fetih (1704 Tartu/Narva, 1710 Riga/Tallinn) vs antlaşma — VERI-YAPISI 'isg: mi s: mi' ölçütü: Rusya 1710 kapitülasyonlarında bölgeyi kendi idaresine kattı (kapitülasyon şartlarıyla ayrıcalıkları teyit etti). **Karar Emre/KASA** (bölge geneli 1704-1721 → ~12 yerleşim).
- **Narva 1581-01-01** → İsveç: kaynaklar (Wikipedia/historyofwar) 6 Eylül 1581 (Julian; 1582-10-15 öncesi olduğu için aynen yazılır) → gün **1581-09-06** önerisi; akademik (SBL/Eesti) okunmadı → K4 (tek akademik yok).
- **Narva 1558-05-01** Rus: kaynaklar çelişik (resim alt yazısı '11 Mayıs 1558'; Wikipedia 'Temmuz 1558'); ham akademik kaynak okunmadı → **bulunamadı**, atlas günü korunur.
- **Tartu 1625-01-01** İsveç: Tartu şehir arşivi teslim belgesi **16 Ağustos 1625** (alman makale dipnotu, belge okunmadı) → öneri K5, 'tek zayıf kaynak'.
- **Tallinn 1561-06-01:** Küng/Tarkiainen: Haziran 1561 müzakere, **2 Ağustos 1561** Erik XIV onayı (özet okundu, makale gövdesi okunmadı); 'and' günü belirsiz → atlas ay verisi korunur, K6 'okunmadı'.
- **Gotland 1288:** Visby 1281-1361 İsveç kayıtlı; kaynak (Wikipedia'ya dayanan özetler; SBL/Svenskt akademik okunmadı): 1288'de Magnus Ladulås adayı İsveç'e bağladı; lex.dk Gotland maddesi '1288' vermez ('1100-1200'ler İsveç, geniş özerklik'). Çıkarım yazılmadı; atlas 1281-1361 kaydı korunur, 'ölçülmedi'.

## Bulunamadı / okunmadı listesi
TDV (isvec, danimarka, norvec maddeleri) bu dalda sorgulanmadı; SBL (Svenskt biografiskt lexikon) fetch edilemedi; lex.dk Olav 4. 404; Küng *Tuna* 2021 gövde metni okunmadı; Tarkiainen 2017 okunmadı; Ajalooline Ajakiri okunmadı; Eesti Entsüklopeedia (Narva/Tartu) okunmadı.

## Teuton-devleti künyesinde mükerrer satırlar (ölçüm)
Aynı olay iki kez: 1309 (yıl 'baskent' + 1309-09-14), 1343 (yıl + 1343-07-08 Kalisz), 1346 (yıl + 1346-11-01), 1454 (yıl + 1454-02-04). Köken: `teuton-sovalyeleri` künyesi bu künyeye birleştirilmiş (DUNYA-1102, 4 Kasım) — iki künyenin maddeleri yan yana kaldı (girintili 8-boşluklu blok = eski ikiz; bkz. `ic_not` BİRLEŞTİRME). **Silme yapılmadı** çünkü iki kopyanın kaynak kalitesi ters: yıl-satırları Treccani (akademik) taşıyor, gün-satırları Wikipedia/blog taşıyor (1346-11-01 için `ic_not_t`: 'gün yalnız güvensiz kaynakta … 14 Ekim 2026 Emre kararıyla yıla indirildi (TEYIT-KARAR-1014)' — kronolojideki 1346-11-01 satırı bu karara aykırı kalmış). Hakem önerisi (KASA): 1346 → tek satır yıl (1346-01-01, Treccani); 1343 → 1343-07-08 yalnız Wikipedia, akademik gün yok → yıl satırı kalsın; 1309 → 1309-09-14 yalnız ideoz/Britannica(yıl) → yıl satırı kalsın. Ayrıca `livonya-tarikati` 1346 maddesi 'egemenlik 1 Kasım 1346'da devredildi' diyor ve kaynak olarak lex.dk gösteriyor; lex.dk «Danmark og Estland» (bu dalda okundu) YALNIZ '1346' verir — 'kaynak günü vermiyor' bulgusu.
Ayrıca `ceviri_*_devlet.js` içinde yetim anahtar `teuton-sovalyeleri` (devletler.js'te kaydı yok).
