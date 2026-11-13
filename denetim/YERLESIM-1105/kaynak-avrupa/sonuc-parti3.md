# PARTİ 3 sonuç (13 Kasım 2026) — 50 yerleşim listesi, 77 dönem kaynaklandı (82 listeli, 5'i zaten kaynaklı)

Uygulama: `uygula_parti3.py` 77/77 nesneye `kaynak:` ekledi (beklenen 77, ESİT). Tek değişen dosya `data/yerlesimler_avrupa.js` (`git diff --stat`: 49 ekleme/49 silme; satır sayısı = dokunulan yerleşim satırı). `node --check` temiz. `dogrula_parti3.py`: kaynaklar geri alınınca dosya HEAD ile özdeş (yalnız ekleme). Betik düzeni: `p3_veri.py` (alıntılar; her alıntı `_ham/` metninde boşluk-normalleştirilmiş birebir arandı, sıfır sorun; ≤25 kelime) → `kaynaklar-parti3.json` → `p3_tara.py` (f/t eşleşme ön denetimi) → `uygula_parti3.py` → `dogrula_parti3.py`. Çekim: `p3_curl.py` (curl, tarayıcı UA; urllib TDV'den 403 aldı), `p3_getir.py`, görüntüleme `p3_goster.py`/`p3_ara.py`.

**82 → 77 farkı:** `is-parti3.json`daki 5 dönem (Bergen, Stavanger, Tønsberg, Trondheim 1537→1814-01-14 danimarka; Kristiansand 1641→1814-01-14) bu dalda artık `t:"1814-02-19"` olup başka oturumun «NORVEÇ 1814» kaynağını taşıyor; eşleşmedi, DOKUNULMADI (zaten kaynaklı). Norveç'in 1537'ye kadar olan dönemleri kaynaklandı.

## ① Basamak sayıları (77 dönem)
- TDV: 2 (Motril, Mojácar Nasrî dönemleri; TDV «Gırnata» maddesi, şehir adı geçmez → ÜLKE GENELİ).
- Ulusal akademik ansiklopedi (Treccani, Store norske leksikon, Den Store Danske/lex.dk): 74 dönem (bunların çoğu ülke-geneli cümle + şehir cümlesi karışık).
- Yalnız Britannica 1911 (KISMİ DESTEK, bir asır eski): 1 dönem (Karlstad 1281-1523, ÇELİŞKİ). Britannica 1911 ikincil/ek olarak 18 dönemde daha var (Treccani/SNL/lex ile birlikte, satır içinde etiketli).
- Ortak ülke-geneli not (`[ÜLKE GENELİ: şehre özgü teyit yok]` önekli, şehir cümlesi yok): 13 dönem; ülke-geneli kaynak parçası içeren toplam: 57 dönem.
- bulunamadı: 0 (şehir cümlesi olmayanlarda ülke-geneli not verildi). Bırakılan: 0.
- Not: Nationalencyklopedin (ne.se) ücret duvarlı; İsveç şehirleri için Treccani + EB1911 + SNL kullanıldı. Hollanda için Nationaal Archief/Huygens'a gidilmedi, Treccani «Paesi Bassi» ve şehir maddeleri kullanıldı. Viborg lex.dk şehir maddesi bulunamadı (Viborg Domkirke maddesi kullanıldı).

## ② ÇELİŞKİ listesi (dönem dokunulmadı; kaynak `ÇELİŞKİ —` ile başlar) — 7 dönem
1. Karlstad 1281-01-01→1523-06-06 ve 1523-06-06→2000: Britannica 1911 «Karlstad was founded in 1584.» (başka kaynakla teyit EDİLMEDİ; zayıf kaynak).
2. Göteborg 1281→1523-06-06 ve 1523-06-06→2000: Treccani «L’attuale G. fu fondata nel 1619 da re Gustavo II Adolfo» (kaynak Kungahälla/Lödöse/Ny Lödöse'yi öncül yerleşim sayar).
3. Sundsvall 1281→1523-06-06 ve 1523-06-06→2000: SNL «Sundsvall fikk byrettigheter i 1621» (SNL künyesinde «Grunnlagt 1621»).
4. Groningen 1581-07-26→1795-01-19 (hollanda): Treccani Groninga şehrin 1580 civarı Rennenberg ihanetiyle yeniden İspanya tacına döndüğünü, Birleşik Eyaletler devletine kesin katılımının 1594'te olduğunu yazar.
Sınıflandırma önerisi (karar sizde): 1-3 — şehir yok → dönem kırp / yerleşim f'sini kuruluşa çek (Boşluk merdiveni ④: «yerleşim o devirde var mıydı»); Göteborg için öncül (Lödöse/Ny Lödöse) var, abi-merkez kuralı gündeme gelir. 4 — Groningen hollanda başlangıcı 1594'e ertelenip arada habsburg-hollandasi/İspanya devleti düşünülebilir.

## ③ NOT/BEYAN (31 dönemde; başlıcaları)
- Gün kaynakta yok, yıl düzeyinde teyit: Pamplona 1512 (25 Temmuz yok), Mojácar 1488/Motril 1489 (şehir adı geçmez; Granada'nın 1492 sonu), Portekiz 1580-08-25 (kaynak 1580 ölümü ve 1581 Tomar; Alcântara günü yok; 8 yerleşim), Hollanda 1581/1795/1813 (tüm Hollanda dönemleri; Utrecht Birliği 23 Ocak 1579 kaynakta var), Groningen 1536 (Carlos V), Leeuwarden 1515 (kaynak Carlos V egemenliğini 1524-1543 aralığıyla verir), Norveç 1537, Finlandiya/İsveç 1523.
- İsveç 1523-06-06: Treccani Gustav Vasa'nın Riksdag'ca seçilişini **7 Haziran 1523** verir (1 gün fark; tüm İsveç şehirlerinin dönem sınırı).
- Danimarka/Güney Jutland: 1864-10-30 Viyana antlaşma günü lex.dk'da («Wienertraktaten, 30. oktober 1864») atlas f ile aynı. 1920-06-15 kaynakta yok: Flensburg oylaması 14.3.1920, Tønder'e kralın girişi 12.7.1920; oylama sonuçları Aabenraa 2734 Alman–2233 Danimarka, Sønderborg 2601–2029, Haderslev 5209 D–3275 A, Tønder 2504 A–761 D.
- Güney Jutland 1281→1460-03-05 dönemleri (Flensburg, Aabenraa, Sønderborg, Haderslev, Tønder; devlet `danimarka`): lex.dk bölgeyi/şehirleri Slesvig dükleri ve Holsten kontları (1386-1459) bağlamında anlatır, Flensburg için «1431'e kadar Danimarka kralları şehir için dükler/Holsten kontlarıyla savaştı» der; açık çelişki değil ama devlet ataması yorum gerektirir (BEYAN, ÇELİŞKİ sayılmadı). 1864-1920 'almanya' ↔ kaynak «Prusya yönetimi».
- Kalmar 1523→2000: 1611-13 Kalmar Savaşı'nda Danimarka kuşatması dönemin içinde; Pamplona 1808-1813 Fransız işgali dönemin içinde.
- Viipuri: Treccani Vyborg maddesi kaleyi **1239**, Treccani Finlandia maddesi karakolu **1293** verir (kaynak içi fark).
- Groningen 1281→1514 'almanya': kaynak şehri özerk (Hansa üyesi 1282'den; Albert of Saxony kuşatmaları 1500-06) anlatır; 'almanya' etiketi kaynakta yok.
- Uddevalla 1281→1537: SNL «opprinnelig en del av Norge», Bohuslän 1658 Roskilde'de İsveç'e geçer; atlas t=1537 günü yok.

## ④ KISMİ DESTEK ve ÜLKE GENELİ
- KISMİ DESTEK — Britannica 1911 (bir asır eski) etiketli (19 dönem): Karlstad(1); Lagos, Setúbal, Bragança (Portekiz); Motril; Bergen/Stavanger/Trondheim (Norveç 1537'ye kadar); Örebro, Linköping, Jönköping, Gävle, Falun (İsveç, her iki dönem); Leeuwarden 1581-1795.
- ÜLKE GENELİ önekli (şehre özgü teyit yok, 13 dönem): Motril 1281-1489, Mojácar 1281-1488 ve 1488-2000, Hämeenlinna 1281-1523, Middelburg 1581-1795 ve 1813-2000, Hollanda 1813-2000 (Rotterdam, Utrecht, Groningen, Leeuwarden, Nijmegen, Leiden, Delft).
- ÜLKE GENELİ içeren (şehir cümlesiyle birlikte) toplam 57 dönem: Portekiz 8 yerleşim (Treccani Portogallo 1580/1581, Algarve 1249), Hollanda 1581/1795 ve 1813, İsveç 1523 (Treccani «Stato svedese fu fino al 1523 un'unione di province»), Norveç 1537 (SNL Norges historie), Finlandiya (Treccani Pähkinälinna 1323).
- Şehir cümlesi yalnız «şehir o ülkede/anılıyor» düzeyinde olanlar (KISMİ DESTEK): Danimarka'nın 7 uzun dönemi (Ribe, Viborg, Aarhus, Aalborg, Odense, Kolding, Nykøbing; 1281-2000 sürekli egemenlik kaynakta yok), Aveiro, Braga.
- Şehre özgü doğrudan: Pamplona/Navarra (Treccani, 1321 kraliyet bağlılığı, hanedan dizisi, 1512), Évora, Coimbra, Bragança (dükalık 1442), Uppsala, Kalmar, Turku (1157 kale), Tønsberg, Uddevalla, Kristiansand-benzeri kuruluş, Aabenraa/Tønder/Sønderborg/Haderslev şehir hakları (1292/1335/1243).

## ⑤ Çekilemeyenler / uygun madde yok
- Treccani: `lagos` Nijerya, `faro` deniz feneri, `granata` el bombası, `motril`, `braganca`, `orebro`, `karlstad`, `falun`, `sundsvall`, `viipuri`, `hameenlinna`, `leeuwarden`, `middelburg`, `abo` ana sayfa döndürdü (madde yok) → Algarve/Portogallo/Spagna/Finlandia bölge-ülke maddeleri, Britannica 1911 ya da SNL kullanıldı.
- Britannica 1911 404: Faro, Granada, Almería, Wiborg, Viborg, Utrecht, Groningen, Nijmegen, Middelburg, Tønsberg, Uddevalla, Sønderborg, Tøndern.
- lex.dk 404: Viborg (şehir), Genforeningen, Wienertraktaten, Hertugdømmet Slesvig, Folkeafstemningen i 1920. SNL 404: Danmark-Norge, reformasjonen i Norge, Kielfreden alternatifleri (Kielfreden bulundu).
- Nationalencyklopedin (ne.se): içerik ücret duvarlı; Uppslagsverket Finland çekilemedi (boş/yanlış kimlik); TDV'de Motril/Mojácar maddesi yok (arama sayfası 403 → curl ile yalnız `girnata` maddesi okundu, şehir adları geçmiyor); Mojácar için Treccani/EB1911'de madde bulunamadı.
- Hämeenlinna, Middelburg, Faro, Mojácar, Motril için şehre özgü akademik cümle bulunamadı → ÜLKE GENELİ etiketiyle bırakıldı (kaynak gizlenmedi).
