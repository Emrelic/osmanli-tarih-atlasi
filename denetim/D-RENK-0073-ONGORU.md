# D-RENK-0073 — ÖNGÖRÜ (ölçümden ÖNCE yazıldı, 20 Eylül 2026)

Sınav anı: aşağıdaki ölçümler koşulmadan önce. Evren: `data/d_sinirlar*.js` (9 dosya),
`data/sinir_sinif_dizini.js`, `arac/uret_petek.py`, `js/d_katman.js`.

| # | öngörü | evren |
|---|---|---|
| Ö1 | `uret_petek.py` içinde `d_sinirlar` / `sinir_sinif` geçen satır = **0** — iki boru hattı hiç değmiyor | uret_petek.py tam metni |
| Ö2 | Toplam hat kaydı **1500–3000** arası | 9 d_sinirlar dosyası |
| Ö3 | `sinif` dağılımında **E baskın** (eski "D"), gerçek **D (fiilî) azınlık (<%15)** | aynı |
| Ö4 | Tek bir kesit tarihinde (ör. 1821-09-15) yürürlükte olan hat sayısı toplamın **%25'inden az** | aynı |
| Ö5 | Hatlardan **kapalı poligon** kurulabilen devlet sayısı çok düşük: hat kaydı olan devletlerin **%15'inden azı** tam çevrili (hatlar ikili çift bazlı, kıyı kapanışı verilmemiş) | aynı |
| Ö6 | Boyama geometrisi `data/donemler.js` + `data/devletler_harita.js`ten gelir; bunlar petek (Voronoi/Dijkstra) çıktısıdır, hiçbir hat kaydı okumaz | uret_petek.py gövde zinciri |
