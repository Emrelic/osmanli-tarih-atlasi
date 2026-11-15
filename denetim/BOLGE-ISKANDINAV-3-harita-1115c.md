# BOLGE-ISKANDINAV — Adım 3: Harita uyumu (1115c)

## Ölçüm
- `py arac/odak_olc.py` (bu dal, devletler.js düzeltmesinden SONRA): **ÇÖZÜLMEYEN ODAK ATFI: 0 kayıt**. (Yeni `odak_yer:["Riga"]`/`["Kopenhag"]` atıfları çözülüyor.)
- Bölge sınır kırılmaları (yerleşim `s:` pencere uçları) ile kronoloji eşlemesi: `data/kronoloji_sinir_iskandinavya.js` (8 madde: Kopenhag 1807-09-07, Visby 1361-07-27, Kiel/Flensburg 1460-03-05, Lappeenranta 1743-08-18, Viipuri 1811-12-23, Rønne 1658-12-08, Viipuri 1941-08-29, 1944-06-20) + `kronoloji_isvec.js` (535 satır) + `kronoloji_cok_*` + `olaylar*.js`. Değişmez 2 denetimi için `denetle` çıkışına bak (aşağıdaki "Denetle" bölümü).

## Elle çıkarılan eşleme sorunları (kayıt düzeyinde)
| Yerleşim penceresi (uç günü) | Kronoloji karşılığı | Hüküm |
|---|---|---|
| Riga 1201-01-01 (künye f, K1) | künye kronolojisinde 1201 'kurulus' (bu dalda) | yerleşim penceresi yazılırsa D2 ±30 gün içinde olaylar*/sinir gerekir — dönem **açılışı** (kurulma) kırılma sayılmaz (`kur` kullanılırsa) |
| Riga 1621-09-15 | kronoloji_isvec.js:151, senkron_0930:268 | günler uyumlu (ikisi de 09-15); K2 taşınırsa üçü birlikte |
| Tallinn 1219 → 1227 → 1238-06-01 → 1346 → 1561-06-01 | künye (livonya-tarikati 1238-06-07 Stensby) | Tallinn s: 1238-06-01 vs madde 1238-06-07 — **6 gün farkı** (D2 ±30 içinde; ama gün birebir değil: pencere 06-01, olay 06-07). Öneri: pencere 1238-06-07 (lex.dk 7 juni) — **ek kuyruk K13** |
| Narva 1558-05-01, Tartu 1558-07-01 | olay maddesi yok / gün yok | D2s/2t için bakılmadı |

## K13 (yeni, kuyruğa eklenecek)
Tallinn `s:` 1238-06-01 → **1238-06-07** (Stensby Antlaşması; lex.dk '7 juni 1238'; livonya-tarikati künye maddesi aynı gün). Tek akademik kaynak (lex.dk) + künye maddesiyle iç tutarlılık. (`yerlesimler_ek11.js`; dosyaya dokunulmadı.)

## Denetle
Ölçüm kuyruğa girildi (aşağıda Adım 7'de sonuç). Karşılaştırma tabanı = KASA'nın taban commit mesajındaki sayılar (D1 306, D2 0, D4c 0, D2s 154, D2t 167, D8a 283).
