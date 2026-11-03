# EK — Mükerrer künyeler (TOP100-1103)

Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 4 Kasım 2026. Betik: scratchpad/mukerrer.py (salt okur).
Kaynak: TOP100 denetim dosyalarının bulguları (sütun «dosya»). Koordinatör: KASA tek partide birleştirir; açılan yerler künye tavanına sayılır.
Kural: kalıcı id = haritada (s: yerleşim) ve kronolojide kullanılan; eşitse künyesi kaynaklı olan. Ölü id'nin `renkler.py` BOYALAR girdisi KALIR (tuz) — yalnız devletler.js ve veri referansları taşınır.

| dosya | polity | id | ad | f | t | harita | yerleşim (s:) | veri ref. | öneri |
|---|---|---|---|---|---|---|---|---|---|
| 05 | Xin (Wang Mang) 9-23 | `xin` | Xin Hanedani (Wang Mang) | 0009-01-15 | 0023-01-01 |  | 0 | 1 | → `xin-hanedani`'e birleştir |
| 05 | Xin (Wang Mang) 9-23 | `xin-hanedani` | Xin Hanedanı (Wang Mang) | 0009-01-10 | 0023-10-06 |  | 1 | 4 | **KALICI** |
| 22 | Fransız Fas himayesi | `fransiz-fas` | Fransız Fas Protektorası | 1912-03-30 | 1956-03-02 |  | 0 | 0 | → `fas-fransiz-himayesi`'e birleştir |
| 22 | Fransız Fas himayesi | `fas-fransiz-himayesi` | Fas Fransız Himayesi | 1912-03-30 | 1956-03-02 | fas | 33 | 35 | **KALICI** |
| 22 | Fransız Somalisi | `fransiz-somali` | Fransız Somali Sahili / Afarlar ve Issalar Fransız Bölgesi (Cibuti) | 1884-01-01 | 1977-06-27 |  | 0 | 0 | **KALICI** |
| 22 | Fransız Somalisi | `fransiz-somalisi` | Fransız Somalisi (Côte française des Somalis) | 1896-01-01 | 1967-07-03 |  | 0 | 0 | → `fransiz-somali`'e birleştir |
| 30 | Xiongnu | `xiongnu` | Xiongnu (Hunnu) Konfederasyonu | -0208-01-01 | 0155-01-01 |  | 0 | 4 | → `hunnu-xiongnu`'e birleştir |
| 30 | Xiongnu | `hunnu-xiongnu` | Xiongnu (Hunnu) Konfederasyonu | -0208-01-01 | 0155-01-01 |  | 0 | 5 | **KALICI** |
| 37 | Hitit (Hatti) | `hitit` | Hitit Krallığı ve İmparatorluğu (Hatti) | -1649-01-01 | -1179-01-01 |  | 2 | 2 | **KALICI** |
| 37 | Hitit (Hatti) | `hitit-eski` | Eski Hitit Krallığı (Hattusa) | -1649-01-01 | -1499-01-01 |  | 0 | 0 | → `hitit`'e birleştir |
| 37 | Hitit (Hatti) | `hitit-imp` | Hitit Imparatorlugu (Yeni Krallik) | -1399-01-01 | -1179-01-01 |  | 0 | 0 | → `hitit`'e birleştir |
| 52 | Xiao Xian'ın Liang'ı 617-621 | `sui-liang-xiao-xian` | Liang (Xiao Xian, 梁) | 0617-01-01 | 0621-01-01 |  | 1 | 7 | → `xiao-xian-liang`'e birleştir |
| 52 | Xiao Xian'ın Liang'ı 617-621 | `xiao-xian-liang` | Xiao Xian'ın Liang'ı (梁, Jiangling) | 0617-01-01 | 0621-11-10 |  | 1 | 5 | **KALICI** |
| 55 | Tibet İmparatorluğu | `tibet-imparatorlugu` | Tibet İmparatorluğu (Tubo / Yarlung) | 0629-01-01 | 0842-01-01 |  | 4 | 36 | **KALICI** |
| 55 | Tibet İmparatorluğu | `tubo-tibet-imparatorlugu` | Tibet (Tubo/Tufan) İmparatorluğu — Yarlung hanedanı | 0629-01-01 | 0842-01-01 |  | 0 | 10 | → `tibet-imparatorlugu`'e birleştir |
| 56 | Uygur Kağanlığı 744-840 | `uygur` | Uygur Kağanlığı (Ötüken) | 0745-01-01 | 0840-01-01 |  | 1 | 9 | → `uygur-kaganligi`'e birleştir |
| 56 | Uygur Kağanlığı 744-840 | `uygur-kaganligi` | Uygur Kağanlığı (Ötüken) | 0744-01-01 | 0840-01-01 |  | 1 | 19 | **KALICI** |
| 56 | Ganzhou (Kansu) Uygurları | `gansu-uygur` | Gansu (Kançou / Sarı) Uygur Krallığı | 0894-01-01 | 1036-01-01 |  | 1 | 4 | → `ganzhou-uygur`'e birleştir |
| 56 | Ganzhou (Kansu) Uygurları | `ganzhou-uygur` | Ganzhou Uygur Krallığı (Hexi) | 0894-01-01 | 1036-01-01 |  | 1 | 8 | **KALICI** |
| 57 | Hazar Kağanlığı | `hazar` | Hazar Kağanlığı | 0650-01-01 | 0965-01-01 |  | 0 | 10 | → `hazar-kaganligi`'e birleştir |
| 57 | Hazar Kağanlığı | `hazar-kaganligi` | Hazar Kağanlığı | 0630-01-01 | 0965-01-01 |  | 1 | 29 | **KALICI** |
| 59 | Moğolistan (Doğu Çağatay) Hanlığı | `mogulistan` | Moğulistan (Doğu Çağatay Hanlığı) | 1347-01-01 | 1680-01-01 | mogulistan | 25 | 34 | **KALICI** |
| 59 | Moğolistan (Doğu Çağatay) Hanlığı | `mogolistan-hanligi` | Moğolistan (Mughulistan) Hanlığı — Doğu Çağatay | 1347-01-01 | 1514-01-01 |  | 0 | 0 | → `mogulistan`'e birleştir |

## Notlar
- f/t farklıysa kalıcı künyenin uçları kaynaklı olanla birleştirilir (ilgili denetim dosyasının b) bölümü).
- «veri ref.» = olaylar*/kronoloji*/yerlesimler* dosyalarında tırnaklı id geçişi (devlet:, taraflar:, d: …); birleştirmede hepsi kalıcı id'ye yeniden yazılır.
- `hitit` grubunda `hitit-eski` ve `hitit-imp` evre künyesidir; kalıcı `hitit`; evreler istenirse `kd:`/`ic_not` ile anılır.
- 52 Sui: yerleşim sayısı eşit (1/1); `xiao-xian-liang`in t 0621-11-10'u kaynaklı (ZZTJ 189 乙巳), öbürününki yıl ucu ⇒ kalıcı `xiao-xian-liang` (52-sui.md ile aynı hüküm).
- 59 Moğolistan: kalıcı `mogulistan` (25 yerleşim) ama künyesi KAYNAKSIZ ve t 1680 desteksiz (59-cagatay.md) — birleştirmede `mogolistan-hanligi`nin kaynağı ve 1514 ucu değerlendirilsin.
- 22 Fransız Somalisi: ikisi de 0 yerleşim, 0 ref ⇒ eşit; f/t'si geniş ve 1977 bağımsızlığına uzanan `fransiz-somali` kalır.
- Harita anahtarı sorunu (s:d'de künye id'si yerine harita anahtarı) ayrı döküm: `EK-harita-anahtari.md`.
