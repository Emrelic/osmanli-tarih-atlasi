# KARAYİP + ORTA AMERİKA — F2 (3. dosya) RAPORU (UMIT, 17 Kasım 2026)

Ağaç: `C:\atlas\.claude\worktrees\sehir-afrika-1116` (dal `sehir-afrika-kuzey-dogu-1116`, origin/main'in 203 commit gerisinde;
atlas eşleşmesi ve atlas başlangıç günleri bu YEREL ağaçtan ölçüldü). Commit/push YAPILMADI.

Çıktılar:
- `data/sehir_tarihce_karayip_3.js` (`window.SEHIR_TARIHCE_KARAYIP_3`, `arac/sehir_tarihce.py yaz` ile)
- `denetim/SEHIR-DUNYA-1116/karayip-orta-amerika/YAZILAMADI-KARAYIP-3.md`
- Üretici + girdi scratchpad'de: `kur_karayip3.py`, `karayip_3.json`, `k3_kontrol.py` (tarihce_var + atlas eşleşmesi)

## ① Ölçülenler
- `py -I -X utf8 arac/sehir_tarihce.py denetle data/sehir_tarihce_karayip_3.js` → **14 şehir · 20 sahiplik dönemi · 103 olay · ihlal 0 · uyarı 17**.
- Yazılan (14/15): Santiago de Cuba, Camagüey, Matanzas, Cap-Haïtien, Santiago de los Caballeros, Bridgetown, Willemstad,
  León (NI), Granada (NI), Cartago, Quetzaltenango, San Pedro Sula, Basseterre, Santa Ana (SV).
- `tarihce_var`: 18 aday × (33 yerel + 49 origin/main dosya) → hiçbiri yok (León/Granada ad eşleşmesi İspanya'dakiler, ≈8 400 km).
- Atlas ≤3 km: 11 şehir var; **Willemstad, Quetzaltenango, San Pedro Sula atlasta YOK** (zincir 1900'e kadar).
- Uyarılar: 6 "şehir başlangıcı ≥ atlas başlangıcı" (zincir bilerek boş), 10 hayalet (yıl hassasiyetli sınır ↔ künye günü), 1 künye bekliyor (`los-altos`), 1 dikiş beyanı (Basseterre).
- Taşınmış şehirler (3 km kuralı, modern nokta taşınma yılından): Santiago de Cuba 1514→1522, Camagüey 1514 (Nuevitas)→1528,
  León 1524 (León Viejo)→1610, Santiago de los Caballeros 1494/95→1562 sonrası.

## ② Zayıflıklar
- **Zayıf tanık (ilk.kesinlik belirsiz): 2** — Santiago de los Caballeros (yeniden kuruluş yılı yok, 1562 alt sınır), Quetzaltenango (1524 cümlesinde şehir adı yok).
- **Yalnız önizleme (abonelik duvarı, tam gövde okunamadı): 3** — Matanzas, Granada, Santa Ana Britannica maddeleri.
- **Çift kaynak (ilk):** Camagüey (Britannica + UNESCO 1270), Willemstad (UNESCO 819 + Britannica Curaçao), León (Britannica + UNESCO 613).
  Granada: iki Britannica maddesi (aynı yayınevi, bağımsız sayılmadı). **Kalan 10 tek kaynak (Britannica).**
- El değiştirmeler: Honduras 5 Kasım 1838 dışında hepsi yalnız yıl.
- Beyanlı boşluk: Basseterre 1627–1713 (Fransız/İngiliz kesim kaynakta yok), Santa Ana 1821–1823.
- Willemstad: Napolyon dönemi İngiliz işgali başlangıç yılı yok → dönem açılmadı.
- Yazılamadı 1 hedef (Port of Spain, Nassau, Belize City, Castries adaylardan hiçbiri tanık şartını karşılamadı) — `YAZILAMADI-KARAYIP-3.md`.

## Siteler
| Site | Sonuç |
|---|---|
| Britannica (tam gövde) | Santiago-de-Cuba-Cuba, Camaguey-Cuba, Cap-Haitien, Santiago-de-los-Caballeros, Bridgetown, Port-of-Spain, Nassau-The-Bahamas, Willemstad, Belize-City, Leon-Nicaragua, Cartago, Quetzaltenango, San-Pedro-Sula, Basseterre, Castries, Curacao, Costa-Rica/Independence, Honduras/History, Saint-Kitts-and-Nevis/History, Saint-Lucia/History, Guatemala-City, history-of-Haiti, history-of-Nicaragua, history-of-Guatemala, history-of-El-Salvador, history-of-Belize, history-of-Trinidad-and-Tobago, history-of-Cuba (kısmen) |
| Britannica (yalnız önizleme) | Matanzas-Cuba, Granada-Nicaragua, Santa-Ana-El-Salvador |
| Britannica 404 / boş | Santiago-de-Cuba (yanlış slug), history-of-The-Bahamas (404); Haiti/History, The-Bahamas/History, Guatemala/History, Belize/History yalnız özet |
| UNESCO WHC | 1270 Camagüey, 819 Willemstad, 1376 Bridgetown (tarih yok), 1236 León Katedrali, 613 León Viejo, 841 San Pedro de la Roca, 910 Brimstone Hill, 180 Haiti Ulusal Tarih Parkı |
| Cambridge / Persée / JSTOR | DENENMEDİ |

## ③ Atlas düzeltme önerileri (karar Emre'nin)
1. **Nokta eklenmeli:** Willemstad (1634'ten zincir hazır), Quetzaltenango (1524'ten), San Pedro Sula (1536'dan).
2. **Başlangıç geri çekilebilir:** Cartago 1838→1563; Santa Ana 1841→1708; Cap-Haïtien 1697→1670 (fransa 1670–1697).
3. **Başlangıç yanlış yere ait (taşınma öncesi yıl):** Camagüey 1514 (Nuevitas'taki ilk yer; bugünkü yer 1528), Santiago de los Caballeros 1495 (Jacagua; bugünkü yer 1562 sonrası), Santiago de Cuba 1515-07-25 (ilk yer 1514, bugünkü yer 1522).
   Eski yerler (León Viejo, Jacagua, Nuevitas-Puerto Príncipe) ayrı nokta olarak önerilir.
4. **Bridgetown** 1627-02-17 (ada yerleşimi künye günü) → kasaba kuruluşu 1628.
5. **Basseterre** 1713-07-13: Utrecht "April 1713" (Britannica) → gün teyit edilmeli.
6. **Künye:** `los-altos` (1838–1840) yok; `orta-amerika-federasyonu` t 1838-05-30 Honduras (5 Kasım 1838) ve El Salvador (1841) ile çelişiyor → künye ucu teyit edilmeli.
7. Atlasın kuruluş günleri (Santiago de Cuba 1515-07-25, Basseterre 1713-07-13) okunan kaynaklarda yok.

## Önerim
İkinci kaynak turu: Cambridge History of Latin America / General History of the Caribbean (UNESCO) — önce Basseterre 1627–1713 sahibi,
Willemstad İngiliz işgali yılları, Port of Spain ve Nassau kuruluşları.
