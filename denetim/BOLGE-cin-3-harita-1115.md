# BOLGE-cin / ADIM 3 — Harita uyumu (15 Kasım 2026)

Ölçülmedi: boyanan harita (petek koşusu yalnız HAVVA'da); bu adım **veri-düzeyi** uyumdur.

## 1. Odak/yer çözülmesi
- `py arac/odak_olc.py` (bu ağaç, origin/main 8fb10bdf1 + 2 tarih düzeltmesi): **ÇÖZÜLMEYEN ODAK ATFI 0 kayıt**. `kronoloji_cin.js` 125 madde: 100 konumlu, 25 kutulu, **0 odaksız**; `kronoloji_sinir_cin_ms317/sanguo` 70 madde tamamı konumlu; `olaylar_ortacag_cin.js` 62 madde tamamı konumlu; `kronoloji_cok_orta_asya2.js` 16 (13 konumlu/3 kutulu). Odaksız (🔴) kalem: `devletler.js` 10 madde (bölge dışı, antik) — Çin 1281-1923 satırında yok.

## 2. Kırılma ↔ madde (Değişmez 2, ±30 gün) — Çin künyesi sahipli 460 yerleşimin 1281-1923 `d:` kırılmaları
Yöntem: Çin künyesi sahibi olan her yerleşimin her pencere ucu (f/t); pencere komşusu da Çin künyesi sayıldı; her tarih için **tüm** `olaylar*/kronoloji*/künye-içi` maddelerinin (32101 tarih) ±30 gün aralığına bakıldı (binary arama). Bu `denetle.py`'ın tam Değişmez 2 sayımı DEĞİLDİR (onun evreni yalnız `olaylar*` + `kronoloji_sinir*`; ben daha geniş evrenle baktım ⇒ **alt sınır**: gerçek ihlal bundan fazla olabilir). `py arac/denetle.py` bu turda **KOŞMADI** (ağır; adım 7'de karar).
Sonuç: benzersiz 459 kırılma tarihinin **15'inde (118 yerleşim-ucu) hiçbir madde ±30 gün içinde yok:**

| Tarih | Yerleşim-ucu | Olay | Eksik madde |
|---|---|---|---|
| 1368-04-01 | 64 (Xi'an, Luoyang, Henan/Shaanxi…) | Yuan→Ming | Ming'in Kuzey Seferi'nin Henan/Shaanxi kolu (Xu Da). Ming shi j.2 gün adlarıyla okunmalı; **madde yazılmadı** (kaynak adımı ertelendi) |
| 1368-06-29 | 2 (Chenzhou) | Yuan→Ming | aynı |
| 1368-11-11 | 2 (Xinyang) | Ming→boşluk | Xinyang 1368-11-11 sonrası `__BOSLUK__`; boşluk merdiveni |
| 1382-02-17 | 4 (Mianning, Jingdong) | Kuzey Yuan→Ming | Ming Yunnan seferi bölgesel; yakında 1382-01-06 maddesi var ama 42 gün uzak (>30) |
| 1587-07-24 | 2 (Nagasaki) | Japonya, bu bölge değil | — |
| 1644-03-16 | 4 (Taiyuan, Pingyao) | Ming→Dashun | Dashun'un Shanxi fethi (Taiyuan düşüşü) maddesi yok (en yakın 1644-02/04 maddeleri 30 günü aşıyor) |
| 1646-07-06 | 4 (Shaoxing, Ningbo) | Güney Ming→Qing | Zhejiang'ın Qing'e geçişi maddesi yok |
| 1647-05-16 | 2 (Hengyang) | Güney Ming→Qing | madde yok |
| 1650-11-24 | 18 (Kanton, Chaozhou) | Güney Ming→Qing | **Guangzhou kuşatma/katliamı (Kasım-Aralık 1650)** maddesi yok |
| 1674-03-26 | 4 (Hengyang, Chenzhou) | Qing→San Fan | Wu Sangui'nin Hunan ilerleyişi maddesi yok |
| 1676-03-01 | 4 (Kanton, Chaozhou) | Qing→San Fan | Shangzhixin'in Guangdong dönüşü maddesi yok |
| 1676-04-05 | 2 (Ji'an) | Qing→San Fan | madde yok |
| 1677-04-30 | 2 (Ji'an) | San Fan→Qing | madde yok |
| 1681-07-14 | 2 (Lijiang) | San Fan→Qing | madde yok (1681-10-01/12-07 Kunming maddeleri 80+ gün) |
| 1858-10-15 | 2 (Ji'an) | Taiping→Qing | Ji'an'ın Taiping'ten geri alınışı maddesi yok |

Bu 15 kalem **yeni madde adayıdır**; hepsinde günün/gün adının akademik kaynakla (Ming shi, Qing shi gao, Wei Yuan, Struve) okunması şart; bu turda okunamadı. **Madde yazılmadı** (kaynak yok = gün yok, tarih uydurma yasak). Alternatif (ölçüt gevşetme yasak): pencere ucunu birincil kaynakla başka güne çekmek — yine kaynak ister.

## 3. Fazla kırılma
Atlas kırılması olup tarihlendirmesi aynı olayın başka bir günü olan kayıtlar: Qing'in Lhasa'ya girişi **3 ayrı değerle** (künye-içi `1720-01-01`, `KRONOLOJI_CIN:71` `1720-09-01`, Lhasa `s:` ucu `1720-09-24`, Şigatse `s:` ucu `1720-01-01`). Aynı olay: Lhasa'da 1720-09-24 (Qing ordusu Lhasa'ya girdi; kaynak adayı Petech, *China and Tibet in the Early 18th Century* 1950, OKUNMADI) → Şigatse ucu yıl düzeyinde. Tutarlılık için tek bir kaynaklı gün gerek. Öneri adım 7'de.

## 4. Not
15 tarihten 1'i (1587-07-24 Nagasaki) Japonya bölgesine aittir; Çin bölgesi payı 14 tarih.
