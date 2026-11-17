# KARAYİP + ORTA AMERİKA — F2 (4. dosya) RAPORU (UMIT, 17 Kasım 2026)

Ağaç: `C:\atlas\.claude\worktrees\sehir-afrika-1116` (dal `sehir-afrika-kuzey-dogu-1116`). Atlas eşleşmesi ve atlas başlangıç günleri bu
YEREL ağaçtan ölçüldü; `tarihce_var` origin/main 20d56b29d'ye karşı. Commit/push YAPILMADI.

Çıktılar:
- `data/sehir_tarihce_karayip_4.js` (`window.SEHIR_TARIHCE_KARAYIP_4`, `arac/sehir_tarihce.py yaz` ile)
- `denetim/SEHIR-DUNYA-1116/karayip-orta-amerika/YAZILAMADI-KARAYIP-4.md`
- Üretici + girdi scratchpad'de: `kur_karayip4.py`, `karayip_4.json`, `k4_kontrol.py`

## ① Ölçülenler
- `py -I -X utf8 arac/sehir_tarihce.py denetle data/sehir_tarihce_karayip_4.js` → **15 şehir · 45 sahiplik dönemi · 90 olay · ihlal 0 · uyarı 12** (çıkış 0).
- Yazılan (15/37 aday): Spanish Town, Santa Clara, Cienfuegos, St. George's, Comayagua, Colón, Castries, Chinandega, Heredia, Choluteca,
  Les Cayes, Puerto Plata, La Vega, San Miguel (SV), Roseau.
- `tarihce_var`: 37 aday × (38 yerel + 60 origin/main dosya, ad ya da ≤10 km) → yalnız St. John's (Kanada'daki st-john-s-ca, 3 486 km) ve
  Heredia (san-jose-cr'ye 8,0 km, ayrı şehir) isabeti; ikisi de mükerrer değil.
- Atlas ≤3 km: 9'u atlasta (Castries 2,36 km, Colón → Cristóbal noktası 1,32 km); **Chinandega, Heredia, Choluteca, Les Cayes, Puerto Plata, La Vega atlasta YOK** (zincir 1900'e kadar).
- Uyarılar: 2 "şehir başlangıcı ≥ atlas" (Cienfuegos =, Roseau 1805 > 1763), 2 dikiş beyanı (Comayagua 1609 künye geçişi, Colón → Kanal Bölgesi), 8 hayalet (yıl hassasiyetli federasyon/İspanyol Santo Domingo uçları ↔ künye günleri).
- Taşınmış şehir: La Vega 1495 (Concepción) → 1564 sonrası Camú kıyısı.
- Ülke düzeyi zincir halkaları önceki kayıtlardan kaynaklarıyla devralındı (ABİ MERKEZ beyanlı): Puerto Plata + La Vega ← santo-domingo-do;
  San Miguel ← san-salvador-sv; Choluteca ← san-pedro-sula-hn; Heredia ← cartago-cr.

## ② Zayıflıklar
- **Zayıf tanık: 3** — kesinlik `belirsiz` 2 (La Vega: taşınma yılı yok; San Miguel: cümlede şehir adı yok), `onyil` 1 (Spanish Town: "c. 1523" ↔ Columbia "c.1525").
- Zamir 'it' kabulü (ic_not'ta): Spanish Town, Choluteca, Les Cayes.
- **Çift bağımsız akademik kaynak (ilk): 2** — Cienfuegos (Britannica + UNESCO 1202), Comayagua (ELAHC Samuels + Britannica).
  Kısmi: Spanish Town (Britannica + Columbia, çelişkili), Castries (Columbia tanık + Britannica ada tarihi), St. George's (iki Britannica maddesi), Roseau (Britannica + World Encyclopedia).
  **Tek kaynak: 9** — Santa Clara, Colón, Choluteca, Les Cayes, Puerto Plata, La Vega, San Miguel (Britannica); Chinandega, Heredia (ELAHC).
- Beyanlı boşluk: Castries 1722–1743, 1748–1762 (tarafsız ada), 1782–1803 (birkaç kez el değiştirme, yıllar yok); San Miguel 1821–1823 (San Salvador kaydından).
- Roseau: 1805 öncesi tanık yok (zincir boş); Dominika tarihi okunmadı.
- Puerto Plata: kuruluştan sonraki süreklilik/terk kaynakta yok (beyanlı).
- Yazılamadı: 22 aday — `YAZILAMADI-KARAYIP-4.md` (Port of Spain, Nassau, Belize City, Kingstown, St. John's, Montego Bay, Jacmel, La Ceiba, Masaya, Alajuela, Puntarenas, Holguín, Pinar del Río, Cobán, David, Escuintla, San Cristóbal; 4'ü aranmadı).

## Siteler
| Site | Sonuç |
|---|---|
| Britannica (tam gövde, innerText) | Spanish-Town, Nassau-The-Bahamas, Santa-Clara-Cuba, Cienfuegos-Cuba, Roseau, Saint-Georges, Grenada/History, Kingstown, Saint-Johns-Antigua-and-Barbuda, Colon-Panama, David-Panama, Belize-City, San-Miguel-El-Salvador, Puerto-Plata, La-Vega, Masaya, Coban, Choluteca, La-Ceiba, Jacmel, Les-Cayes, Montego-Bay, Comayagua, Chinandega, Saint-Lucia/History, history-of-Haiti |
| Britannica — kullanılmadı | history-of-Cuba (giriş bloğu dipnot numaralı özet), Panama/History (ana sayfaya yönlendi) |
| Britannica 404 | Saint-Georges-Grenada, St-Georges-Grenada, Oranjestad, Puntarenas, Alajuela, Escuintla, Heredia-Costa-Rica, Holguin, Pinar-del-Rio |
| encyclopedia.com ELAHC | AÇILDI: Comayagua, Chinandega, Heredia, Panama, Panama Railroad, Hay–Bunau-Varilla Treaty, Trinidad and Tobago. 404: cienfuegos, coban, masaya, puntarenas, san-miguel, alajuela, holguin, pinar-del-rio, puerto-plata, jacmel, limon, escuintla, la-ceiba, choluteca, david, la-vega |
| encyclopedia.com Columbia / World Enc. / Worldmark | AÇILDI: Spanish Town, Castries, Pinar del Río, Alajuela, Belize City, Masaya, Port of Spain, Puntarenas (Columbia); Port of Spain, Nassau, Holguín, Kingstown, Roseau (World Enc.); Jamaica, Trinidad and Tobago (Worldmark) |
| UNESCO WHC | 1202 Cienfuegos AÇILDI |
| PDF / dosya indirme | YOK |

## ③ Atlas önerileri (karar Emre'nin)
1. **Nokta eklenmeli:** Chinandega (1842'den), Heredia (1824'ten), Choluteca (1522'den), Les Cayes (1786'dan), Puerto Plata (1503'ten), La Vega (1564 sonrası; eski yer Concepción 1495–1564 ayrı nokta).
2. **Colón:** atlas noktası Cristóbal (Kanal Bölgesi, 1904); Colón şehri Panama Cumhuriyeti'ndeydi → ayrı Colón noktası (1850 kolombiya-cumhuriyeti → 1903-11-03 panama-cumhuriyeti).
3. **Başlangıç geri çekilebilir:** St. George's 1763→1650 (fransa 1650–1762, ingiltere 1762–); Castries 1814→1650 (ada zinciri hazır); Comayagua 1609→1537;
   San Miguel 1841→1530 (tanık zayıf); Spanish Town 1534→~1523 (çelişki çözülmedi); Santa Clara 1689-07-15 → gün kaynakta yok.
4. **Atlas sonrası el değiştirme:** Grenada 1779–1783 Fransız dönemi atlas zincirinde var mı ölçülmedi.

## Önerim
Sonraki tur: Port of Spain / Nassau için Cambridge History of the Caribbean; tek kaynaklı 9 kayıtta ikinci kaynak (ELAHC başka slug'lar, ulusal akademik dergiler);
Cobán ve David için Guatemala/Panama ülke zinciri kaynakları.
