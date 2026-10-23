# YER-TANIMA → YER-2 devir notu (23 Ekim 2026)

Karar (Emre): YER-2 ile devam; **YER-TANIMA artık `data/yerlesimler_once1281_yt_*.js` dosyalarına DOKUNMAZ** (yazma yetkisi YER-2'de).
`denetim/ARAC-YER-URET-1021.py --data` bu dosyaları SIFIRDAN yeniden yazar ve YER-2'nin kayıtlarını SİLER → `--zorla` ister; kullanma.

## Elde olanlar (hepsi origin/main'de)
- `denetim/ONCE1281-YER-ENVANTER.json` — kronolojideki yer adları: atlasta / yok / bölge / doğal (6999 madde, 1899 tekil ad).
- `denetim/yer-arastirma/parti_*_sonuc.json` — koordinat araştırmaları (çift/tek tanık, kıta uyumu notlu). Önemli seriler: 01-04 pilot, 50 (çevrimdışı Pleiades+GeoNames), 51 (Natural Earth bölge), 61-63 (bölge temsilcisi), 71-72 (ikinci tanık), 81-83 (alias TDV doğrulama), 91-99/910/911 (tur-2), 101-104 (KRON-ANTIK), 105/107-109 (KRON-ORTAÇAĞ).
- `denetim/yer-arastirma/BAGIMSIZLIK-SINIRLI.json` — çift tanık görünen ama kaynakları birbirini besleyen (Pleiades/iDAI/TGN/GeoNames ailesi, OSM) ~57 kayıt: YAZILMADI, Emre kararı bekliyor.
- `denetim/yer-arastirma/HARIC.json` — yanlış eşleşme (Lade: Norveç ≠ İyonya adası).
- `denetim/yer-arastirma/ALIAS-ORTACAG.json` + parti_81-83: alias'lar; yalnız TDV gövdesi okunanlar `alias_teyit:true` sayılır.
- `denetim/yer-arastirma/YERID-BAGLA-RAPOR-1021.json` + `ARAC-YER-BAGLA-1021.py` — 647 maddeye yer_id bağlandı (saf ekleme); bağlanamayan 1297 madde 'atlasta yok', 51 bölge-uyumsuz, 34 çok-adaylı.
- `denetim/KRON-1281-OLC-1021.md/.json` — 758 künye için 1281 öncesi madde / kuruluş-yayılma-kayıp-çöküş / yer_id oranı.
- `denetim/once1281/yer-eksik/ONEMLI-YERLESIM-SIRA.tsv` (başkent önem sırası, 1030 yer) ve ONEMLI-YOK.tsv.
- Ana dal Sarmizegetusa dakya zinciri: yerel dal `yer-tanima-sarmizegetusa-zincir` (abd7cec9); kron-antik maddeleri yazınca cherry-pick.

## Dikkat (öğrenilmiş tuzaklar)
- Kıta/ülke tutarlılığı: aynı ad başka kıtada başka yer olabilir (Lade, Muhi→Mali, Languedoc→G.Afrika…). `ARAC-YER-TUTARLILIK-1021.py` kaba kutu ile yakalar.
- OSM / Vikipedi / Wikidata bağımsız tanık DEĞİL; Pleiades ↔ Syriaca/ToposText, GeoNames ↔ DAI ↔ TGN aynı koordinatı veriyorsa tek tanık.
- `s:` zincirleri: her sınır Değişmez 2s'te yeni 'YABANCI kırılma' üretir (tavan 188; 6 zincir +2 AÇIK yapıp push'u reddettirdi). Zincir yalnızca ±30 gün maddeyle birlikte.
- Kara maskesi: denetle 'konum' kapısı sahil/göl noktalarını reddeder (Tibet, Trogir düzeltildi).
- Yeni data/ yerleşim dosyası index.html + girdi_listesi.py'ye bağlanmazsa denetle_yayin 'yetim' ihlali verir.

## Açık işler
1. Tek tanıklı öncelikli adlar (Canossa, Fîrûzkûh, Rûyân, Zafâr/Şibâm, Ordu-Balık, Sarkel, Talas, Fengxiang, Kaiping/Shangdu, Hoa Lư, Battle/Hastings, Martaban, Lingwu, Ye, Yingtianfu, Anchialos=Pomorie) — bağımsız ikinci tanık (kazı raporu/akademik).
2. 180 yerleşimin sahip zinciri (`s:` kaynaklı) + ±30 gün maddeler.
3. Başkent dışı katman (büyük liman / kutsal merkez / kale) — Pleiades port/temple/fort kayıtlarından.
4. Kalan ~600 'çözülemedi' başkent yeri (Çin/Hint/GD Asya transliterasyonları).
