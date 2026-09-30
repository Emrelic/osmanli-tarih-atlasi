# KAYNAK-DOGRULA-DOGUASYA — 1 Ekim 2026

**Dosya:** `data/kronoloji_cok_once1281_dogu_asya.js` (73 madde). Makine: KASA (YAZICI).

## Ölçüm
| Sonuç | Sayı | Madde (0-tabanlı sıra) |
|---|---|---|
| ① TDV'de VAR | 12 | 13 · 18 · 21 · 23 · 25 · 37 · 46 · 47 · 57 · 59 · 60 · 64 |
| ② akademik kaynak açıldı | 0 | — (CHC / CHJ / Coedès / Taylor / Lee / Petech kitaplarının hiçbirinin sayfası açılamadı) |
| ③ bulunamadı | 61 | geri kalanlar |

- Önceden dosyada "TDV'den alıntı" olarak geçen 16 cümlenin **16'sı da** TDV gövdesinde birebir bulundu (uydurma alıntı: 0). Yeni yazılan her TDV alıntısı, çekilen gövdede birebir arandıktan sonra yazıldı (betikte `assert`).
- `ad--nitelik` slug'ıyla kurtarılan: 0. Bu bölgedeki ölü slug'ların hiçbiri `ad--nitelik` karşılığı vermedi: `hitaylar` · `kitanlar` · `mengu-kagan` · `ogedey` · `vietnam` · `kore` · `laos` · `hotan` 302.
- **Tuzak ②:** `cin` 200 döndü ama madde **CİN**'dir (cin/şeytan). Çin için doğru slug `cin--ulke`.
- Alınan 503 / 000: **0**. İstek aralığı ≥1,6 sn tutuldu.
- `node --check`: temiz. 73 maddenin `kaynak` dışındaki alanları **değişmedi**; bu, maddeler özgün dökümle karşılaştırılarak ölçüldü. Silinen madde yok.
- Yeni alan: 73 maddenin hepsinde `ic_not_kaynak` var. İçeriği: sonuç sınıfı · denenen slug'lar · açılmayan eski atıf ("dayanak DEĞİL" damgasıyla).

## Yıl çelişkileri — t'ye DOKUNULMADI, hüküm koordinatörde
| # | Madde t | Açılan kaynak | Durum |
|---|---|---|---|
| 13 | 1209 | TDV cengiz-han: 1210 sonu | 1209'un dayanağı açılmadı |
| 45 | 1203 | TDV japonya: naiplik 1233-1333 | ③; 1203'ün dayanağı (CHJ) açılmadı |
| 56 | 1145 | TDV camlar: 1145 işgalin SONU | ③; TDV maddeyle çelişiyor, alınış yılının dayanağı (Coedès) açılmadı |
| 57 | 1177 | TDV camlar: 1178 | 1177'nin dayanağı açılmadı |

**Koordinatör hükmü (YILDIRIM BAYEZIT):** Dördünde de `t` KALIR. Çelişki, iki okumayla birlikte `ic_not_t`ye yazıldı (#13 yeni alan, #45 · #56 · #57'de eski not değiştirildi). Başka alana dokunulmadı, fark ölçümüyle doğrulandı.

## Kısmi destek (① ama iddianın bir kısmı TDV'de yok)
- **18:** TDV başkentin teslimini açıkça yazmıyor.
- **21:** TDV "Nan-çan Devleti" diyor; Dali ile eşleme bizim yorumumuz.
- **23:** TDV Diaoyu kuşatmasını anmıyor.

## Yöntem
- Denenen TDV maddeleri: `cin--ulke` · `cengiz-han` · `mogollar` · `kubilay-kagan` · `karahitaylar` · `mogolistan` · `kore-cumhuriyeti` · `japonya` · `camlar` · `kambocya` · `myanmar` · `tayland` · `sumatra` · `cava` · `endonezya` · `tibet` · `budizm` (hepsi 200).
- Başlık araması (`ajax_search_auto.php`) 0 sonuç verenler: tangut · cürçen · kitan · möngke · ögeday · angkor · kmer · pagan · sriv · dalay.
- Her maddede TDV cümlesi, olayla **ve** yılla birlikte eşleşirse ① sayıldı. Yalnız yüzyıl ya da dönem veren cümleler (ör. "XI. yüzyılda", "1127-1279") desteğe sayılmadı ve ③'ün notuna yazıldı.
