# P5-④ yerleşim kaynak borcu — 4 Avrupa dosyası iş listesi (UMIT, 13 Kasım 2026)

Kaynak: `denetim/YERLESIM-1105/kaynaksiz_donem.tsv` (9058 satır) → yalnız `data/yerlesimler_avrupa.js`, `yerlesimler_a78_avrupa.js`, `yerlesimler_ek7.js`, `yerlesimler_seyrek.js`: **452 dönem satırı (451 `s:` + 1 `v:`), 252 yerleşim**.

`is-parti1..5.json`: 50'şer kayıt (5. parti 52). Alanlar: `dosya`, `satir` (kaydın `data/<dosya>` içindeki satırı, tsv ile aynı), `ad`, `lat`, `lon`, `donemler[{alan,f,t,devlet}]` (kaynaksız dönemler).

Yöntem (CLAUDE.md kaynak sırası): her kaynaksız dönem için TDV → ulusal akademik ansiklopediler/hakemli kaynak (Treccani, SNL, lex.dk, Nationalencyklopedin, HLS, Britannica son çare) → bulunamazsa `kaynak:"bulunamadı …"` (gizleme yok). Kaynak metni period nesnesine `d:"<devlet>"`ın ardından `,kaynak:"…"` olarak betikle eklenir; dönem/tarih değişirse Değişmez 2 + gün kuralı.
Durum: araştırma BAŞLAMADI (UMIT boş RAM 3,63 GB < 4 GB; 30 dk beklendi). LAB/EMRELİC'te alt ajanla koşturulacak.
