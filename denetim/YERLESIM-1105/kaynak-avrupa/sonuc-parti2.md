# PARTİ 2 sonuç (13 Kasım 2026) — 50 yerleşim, 84 dönem

Uygulama: `uygula_parti2.py` 84/84 nesneye `kaynak:` ekledi (beklenen 84, ESİT). Tek değişen dosya `data/yerlesimler_avrupa.js` (50 satır, `git diff --stat`: 50 ekleme/50 silme). `node --check` temiz; node ile yükleyince YERLESIMLER_AVRUPA 306 kayıt okunuyor. `dogrula_parti2.py`: kaynaklar geri alınınca dosya HEAD ile özdeş (yalnız ekleme). Betik düzeni: `p2_veri.py` (alıntılar; her alıntı `_ham/` metninde boşluk-normalleştirilmiş birebir arandı, sıfır sorun) → `kaynaklar-parti2.json` → `uygula_parti2.py` → `dogrula_parti2.py`. `uygula_parti2.py` parti 1'den farkı: eşleştirme deseni `enklav:true,` gibi bayrakları da kabul eder (Gibraltar 1704 dönemi).

## ① Basamak sayıları
- TDV: 0 (bu parti Fransa/İspanya; TDV kapsamı dışı).
- Ulusal akademik ansiklopedi (Treccani: Enciclopedia on line + Enciclopedia Italiana 1929-37): 75 dönem.
- Britannica 1911 (Wikisource) ağırlıklı, `[KISMİ DESTEK — Britannica 1911 (bir asır eski)]` önekli: 9 dönem (Amiens 2, Pau 2, Ronda 2, Gibraltar 3). Ronda'nın Treccani maddesi askerî "ronda" terimi çıktı; Amiens 1435 için Treccani şehir maddesi yıl vermedi (Treccani "Cent'anni, guerra dei" genel destek olarak eklendi).
- Britannica 1911 yalnız ikincil teyit olarak geçen: Perpignan 1344 (Treccani Rossiglione asıl).
- bulunamadı: 0.
- Süre nedeniyle bırakılan: 0.

## ② ÇELİŞKİ listesi (dönem dokunulmadı; kaynak `ÇELİŞKİ —` ile başlar)
1. La Rochelle, ingiltere 1360-10-24 → 1372-09-08: Treccani (Enciclopedia on line + Enciclopedia Italiana) Fransız egemenliğine dönüşü 1370 yazar ("Dieci anni dopo" / "Nel 1370 l'esercito reale ... Duguesclin"); atlas t=1372-09-08.
2. Pau, fransa 1281 → 1479: Britannica 1911 Pau'yu Béarn vikontlarının şehri olarak anlatır (Gaston Phébus, Navarra 1479); Fransa kralının egemenliği yazılmaz; atlas devleti `fransa`.
3. Perpignan, fransa 1463 → 1493-01-19: Treccani Rossiglione "occupato di sorpresa da Luigi XI (1475)"; Britannica 1911 Perpignan'ın 15 Mart 1475'te açlıktan teslim olduğunu yazar; atlas f=1463.
4. Gibraltar, granada 1374-01-01 → 1462-08-20: Britannica 1911, Fas kralından Granada'ya (Yusuf III) geçişi 1411'de verir; atlas Granada'yı 1374'ten başlatır. (Bitiş 1462, Treccani ile yıl düzeyinde teyitli; EB1911 "Ağustos" der, atlas 20 Ağustos.)

## ③ NOT/BEYAN listesi (kaynak metnine yazıldı; 54 dönemde var, başlıcaları)
- Fransa Cumhuriyeti 1792-09-22 dönemleri (36 yerleşim): Treccani Francia "proclamazione (21 settembre)" der; atlas f=1792-09-22 (1 gün; Cumhuriyet takvimi yıl başı). Şehir cümlesi yalnız yerleşimin Fransa'da olduğunu gösterir (KISMİ).
- Yıl düzeyinde teyit, gün kaynakta yok: Caen 1450, Cherbourg 1450, Amiens 1435/1477, Reims/Troyes 1420 (Troyes antlaşması 21 Mayıs 1420 gün teyitli) ve 1429 (atlas 16 Temmuz/10 Temmuz), Poitiers 1360, La Rochelle 1360, Murcia 1304, Málaga 1487, Ronda 1485, Almería 1489, Gibraltar 1309/1704, Perpignan 1344/1493/1659, Avignon+Carpentras 1791 (atlas 14 Eylül), Nice 1860 / Chambéry 1860 (atlas 14 Haziran), Mulhouse/Colmar/Strazburg/Metz 1918 ve 1944-45.
- Gün teyitli: Calais 3 Ağustos 1347 (Enciclopedia Italiana, atlas t ile aynı); Troyes antlaşması 21 Mayıs 1420 (Reims 1420 dönem sınırı ve Troyes f ile aynı).
- Gibraltar 1704: Treccani hukukî devri 1713 (Utrecht) verir; EB1911 1704 fiilî ele geçirme.
- Limoges 1370: Enciclopedia Italiana Cité 1369, Château 1371 teslim yazar; EB1911'e göre 1370'te Kara Prens Cité'yi aldı; atlas t=1370-01-01 bu aralıkta (BEYAN, çelişki sayılmadı).
- Alsace (Strazburg/Colmar/Mulhouse): kaynak bölge düzeyinde (Treccani Alsazia: 15 Haziran 1940 sonrası işgal, Şubat 1945'te sona erdi); Strazburg 23 Kasım 1944 ve Mulhouse 20 Kasım 1944 kurtuluşu kaynakta yok (BEYAN). Colmar 2 Şubat 1945 ay düzeyinde tutarlı.
- Metz 1918-11-19: Treccani Versailles 1919 yazar; Besançon: kaynak 1493'te Habsburg'a ve 1554'te Felipe II'ye geçişi yazar, atlas t=1516 ile ilişkisi kaynakta yok (Habsburg/imparatorluk ayrımı karar gerektirebilir).
- Alicante kastilya 1281-1296: Treccani "1250'de Alfonso X" der (Alfonso X 1252'de kral oldu; kaynağın kendi yıl ifadesi aynen alındı); Aragon'a 1296'da katılım atlas t ile tutarlı.

## ④ KISMİ DESTEK (65 dönem; yerleşimin ülkede olduğunu gösterir ya da yalnız bölge/olay yılını verir, o devrin sahipliğini veya gününü teyit etmez)
- Tüm "fransa-cumhuriyet 1792-2000" dönemleri: Caen, Cherbourg, Le Havre, Calais, Amiens, Arras, Lille, Reims, Troyes, Orléans, Tours, Bourges, Angers, Le Mans, Poitiers, Clermont-Ferrand, Périgueux, Cahors, Toulouse, La Rochelle, Limoges, Bayonne, Pau, Dijon, Besançon, Nancy, Aix-en-Provence, Toulon, Grenoble, Avignon, Carpentras, Nîmes, Arles, Montpellier, Narbonne, Perpignan (şehir cümlesi + 21 Eylül 1792 Cumhuriyet).
- Ortaçağ ilk dönemler: Caen (1204), Cherbourg 1281-1418, Reims 1281-1420 (1359'da Fransız), Poitiers 1281-1360, Limoges 1281-1360 (Aquitania genel), Metz 1281-1552 (Alman/İmparatorluk sahipliği kaynakta yok), Murcia 1281-1296 ve 1304-1479, Santiago 1230-1281 (Galiçya/Castiglia genel), Málaga 1281-1487 (Nasrî Emirliği genel), Ronda, Gibraltar 1281-1309, Troyes 1420-1429, Teruel 1939+ (İç Savaş maddesi).
- Aix-en-Provence: Provenza bölge maddesi (1486 Fransa'ya birleşme), Aix adı geçmez.

## ⑤ Sayfa çekilemedi / uygun madde yok
- Treccani `ronda`: askerî terim sayfası (Ronda şehri için madde bulunamadı; `ronda_(Spagna)` boş) → Britannica 1911.
- Treccani `cherbourg`, `lille`, `cahors`, `toulouse`, `dijon`, `carpentras`, `perpignano`, `havre`: doğrudan slug ana sayfa döndürdü; yerine `cherbourg-octeville`, `lilla`, `tolosa`, `digione`, `perpignan`, Enciclopedia Italiana (`..._(Enciclopedia-Italiana)`) maddeleri kullanıldı.
- Treccani `bretigny`, `arras-pace-di`, `mulhausen`, `alsazia-lorena`, `lille_(Enciclopedia-Italiana)`, `perpignan_(Enciclopedia-Italiana)`: yok/ana sayfa.
- Britannica 1911 `Calais` 404 (yerine Enciclopedia Italiana Calais kullanıldı).
- TDV gerekmedi; WebFetch yerine doğrudan urllib ile Treccani/Wikisource metni indirildi (`_ham/`).
