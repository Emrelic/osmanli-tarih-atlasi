# ÇOK DİLLİ AD EŞDEĞER TABLOSU — pilot görev şablonu (LAB, 17 Kasım 2026)

Amaç: `data/sehir_tarihce_{hint,orta_asya,afrika_gb}.js` şehir kayıtlarının `adlar` alanını (tarih sırasıyla ad dizisi) **kaynaklı** zenginleştirmek.
Yeni alan `ad_kaynak` (sehir_tarihce.py yaz/denetle kabul ediyor, çıkış 0): her şehir için

```json
{ "id": "kalkuta-in",
  "ad_kaynak": [
    { "ad": "Kalikâtâ", "dil": "tr-osm", "donem": null, "kaynak": "TDV İslâm Ansiklopedisi 'KALKÜTA' https://islamansiklopedisi.org.tr/kalkuta", "kanit": "≤12 kelime birebir" },
    { "ad": "Calcutta", "dil": "en", "donem": "1690-2001", "kaynak": "Encyclopaedia Britannica 'Kolkata' https://www.britannica.com/place/Kolkata", "kanit": "…" }
  ],
  "adlar": ["Sutanuti", "Kalikâtâ", "Calcutta", "Kolkata"] }   // tarih sırasıyla (bilinmiyorsa kaynak sırası)
```
Kurallar:
- `dil`: BCP-47 benzeri kısa kod: `hi` Hintçe, `ur` Urduca, `bn` Bengalce, `ta`, `te`, `fa` Farsça, `ar` Arapça, `tr-osm` Osmanlı Türkçesi/TDV yazımı, `tr`, `ru`, `en`, `fr`, `pt`, `nl`, `de`, `grc` Antik Yunanca, `la` Latince, `sa` Sanskritçe, `zh`, `mn`, `uz`, `kk`, `ha`, `sw`, `ber` vb.
- `donem`: kaynak dönem veriyorsa `"YYYY-YYYY"` ya da `"YYYY-"`/`"-YYYY"`; vermiyorsa `null` (UYDURMA YOK).
- `kaynak`: eser/madde adı + URL. **Kaynakta yazmayan ad YAZILMAZ.** Vikipedi/blog/forum/YZ metni kaynak DEĞİL. Kabul: TDV İA, Britannica, Encyclopaedia Iranica, Pleiades (pleiades.stoa.org — antik adlar, atıflı), DSAL Imperial Gazetteer / Hobson-Jobson, Banglapedia, UNESCO WHC, Columbia/Oxford/Gale (encyclopedia.com), Universalis, ru.wikisource ЭСБЕ, açık erişimli akademik kitap/makale.
- `kanit`: kaynaktan ≤12 kelimelik BİREBİR parça (denetim için).
- Mevcut `adlar` öğelerini koru (kaynaksız olanları kaynakla; bulunamayanları `kaynaksiz` listesine yaz — silme). `adlar_sira` yeni tam dizidir.
- Aynı şehir = aynı koordinat (3 km); ad çakışması riski olan adı (Kudüs/Kudus tipi) yazma.
- Kapsam: yerel adlar (yazı sistemleri dahil), Farsça, Arapça, Osmanlı Türkçesi, Rusça, İngilizce/Fransızca/Portekizce/Hollandaca/Almanca sömürge adları, antik adlar, eski/yeni resmî adlar (Calcutta→Kolkata gibi).
