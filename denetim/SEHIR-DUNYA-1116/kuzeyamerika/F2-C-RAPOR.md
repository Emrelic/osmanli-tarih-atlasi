# F2-C RAPOR — Kuzey Amerika şehir tarihçesi (Kanada 10 + Meksika 10)

Dosya: `data/sehir_tarihce_kuzey_amerika_4.js` (`window.SEHIR_TARIHCE_KUZEY_AMERIKA_4`) · dal `sehir-kuzeyamerika-f2-1117-c` · 17 Kasım 2026.
Denetle: `py arac/sehir_tarihce.py denetle data/sehir_tarihce_kuzey_amerika_4.js` → **çıkış 0** (20 şehir · 14 sahiplik dönemi · 81 olay · ihlal 0 · uyarı 12).

## ① Yazılan şehirler
- **Kanada (10):** Louisbourg, Toronto, Kingston, Winnipeg, Victoria, Ottawa, Edmonton, York Factory, Placentia, St. John's.
- **Meksika (10):** Tlaxcala, Texcoco, Monte Albán, Mayapán, Calakmul, Palenque, Mérida, Puebla, Guadalajara, Veracruz.
- Kaynak: Britannica (gömülü tarayıcıda tam gövde), UNESCO WHC (Calakmul, Palenque, Puebla), Canadian Encyclopedia (yalnız Louisbourg). Tüm `tanik` alanları okunan sayfadan birebir.
- Her `ilk`, olay ve sahiplik dönemi kaynaklı (81 olay, 14 dönem; kaynaklı oran %100; kaynaksız madde yazılmadı).
- **Çift kaynaklı:** Louisbourg (Britannica + CE), Puebla (UNESCO + Britannica, ama yıl çelişkili). **Tek kaynaklı: 18/20.**
- Sahip zinciri atlas başlangıcına kadar; sahibi kaynakta olmayan dönemler `__BOSLUK__` + ic_not (Winnipeg 1763-1812, Texcoco 1150-1281, Monte Albán, Calakmul, Palenque 1 → 1900).

## ③ Atlas düzeltme önerileri (şehir | atlas | kaynaklı | kaynak)
- Toronto | York 1750 (fransa) | Fort Rouillé noktaya ~4 km; nokta 1793 (Simcoe/York) | Britannica Toronto/History
- Winnipeg | Fort Garry 1812 | Fort Garry HBC 1821; 1812 Red River kolonisi; Fort-Rouge 1738 | Britannica Winnipeg + York Factory
- Edmonton | Fort Edmonton 1795 | 1795 karakolu ~32 km akış aşağıda; bugünkü yerde en geç 1801 | Britannica Edmonton
- York Factory | 1684 | 1683 (Fort Nelson, Britannica); Nelson/Hayes ayrımı Britannica'da yok, Parks Canada okunmadı | Britannica York Factory
- Veracruz | 1519-04-22 Villa Rica | bugünkü yer 1599'dan; 1519 ilk yer ayrı kayıt | Britannica Veracruz
- Tlaxcala | 1281 | Britannica 1519'dan önce tarih vermiyor (1281 kaynaksız) | Britannica Tlaxcala
- Texcoco | 1281 | Acolhua yükselişi "mid-12th century"; 1281 kaynaksız | Britannica Texcoco
- Mayapán | 1100 | baskın güç ≈1200-1450; 1100 kaynaksız | Britannica Mayapán
- Monte Albán | MÖ 500 | ilk inşa MÖ 8. yy; Zapotek işgali MÖ 1. yy'da kesin | Britannica Monte Alban
- Calakmul | 0636 kaanul | UNESCO yalnız "Late Classic" der; gün/yıl yok | UNESCO 1061
- Puebla | 1531-04-16 | UNESCO 1531 (uyumlu), Britannica 1532 (çelişki; hakem F3'te) | UNESCO 416 / Britannica
- Kingston, Louisbourg, Placentia: atlas yıllarıyla uyumlu (1673, 1713, 1662); gün doğrulanamadı.
- Kingston 1758-1783 yerleşimsiz (kur/bit penceresi önerilir).

## ④ Yazılamayanlar / sınırlar
- Calakmul ve Palenque için şehir-özgü kuruluş tarihi ve hanedan zinciri UNESCO'da yok (akademik Maya epigrafisi kaynakları okunamadı); Palenque zinciri tek `__BOSLUK__` (atlas noktası yok).
- Nahuatl/Maya/Mixtek/Zapotek adları (Tlaxcallan, Tetzcoco, Dani Baan, Lakamha', Tkaronto, Amiskwaciy-wâskahikan) okunan kaynakta yok → `adlar`a ALINMADI.
- DCB, Parks Canada, Persée, INAH, SciELO bu turda okunmadı (zaman); Britannica engelli değil ama Britannica+WebFetch 403 verdi, gömülü tarayıcı kullanıldı.
- Tlaxcala 1519: Britannica "conquered" der; ittifak literatürü okunmadı (hakem F3).
- Veracruz 1846-48 ve Mexico-US vb. olaylarda gün verilmedi (kaynak yok).
- Saint-Pierre-et-Miquelon ve Bermuda bu turda alınmadı (talimat).

## ⑤ F3 önerisi
1. İkinci kaynak turu: DCB (biographi.ca), Parks Canada HistoricPlaces, Persée (Louisbourg, Kingston, York Factory, Placentia, St. John's) → tek-kaynaklı sayısı düşer.
2. Meksika için INAH/UNESCO + akademik (Martin & Grube; Smith, *The Aztecs*) ile Calakmul/Palenque/Monte Albán kuruluş-hanedan zincirleri; Puebla 1531/1532 ve Guadalajara 1542 yerleşim yılı hakemi.
3. Yeni kayıtlar: Fort Rouillé, Fort Edmonton I, Villa Rica (Veracruz ilk yer), Trois-Rivières, Tula, Tzintzuntzan, Tlacopan (Britannica Tzintzuntzan/Tlacopan sayfası yok; farklı kaynak gerekir).
