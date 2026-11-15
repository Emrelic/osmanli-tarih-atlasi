# BOLGE maritim (2. dalga) — A: yerleşimsiz künyeler (15 Kasım 2026)

Dal: `umit-1115b-maritim` (origin/main 8fb10bdf1 tabanı). Yazılan veri: `data/yerlesimler_asya.js`, `data/yerlesimler_gdasya.js`, `data/devletler.js`, `data/kronoloji_sinir_maritim_1115b.js` (yeni), `index.html` (1 satır). `data/yerlesimler.js` ve üretilmiş dosyalara dokunulmadı; yeni yerleşim NOKTASI açılmadı (mevcut noktaların pencereleri künye başına bağlandı; mükerrer riski yok).

## Yapıldı
| künye | yerleşim penceresi | değişiklik | kaynak |
|---|---|---|---|
| portekiz-malaka | Malaka 1511-08-10 → 1641-01-14 (`enklav:true` korundu) | pencere `portekiz` → `portekiz-malaka`; künye f 1511-08-15 → **1511-08-10**, t 1641-01-01 → **1641-01-14** | TDV Malaka + TDV Malezya birebir «10 Ağustos 1511»; TDV Malaka «Ocak 1641»; Disney, «Malacca in the Era of Viceroy Linhares (1629-35)», *Portuguese and Luso-Asian Legacies in Southeast Asia 1511-2011* c.1, ISEAS 2011, s.48-66 (Cambridge Core özeti): «On 14 January 1641 … Portuguese Malacca surrendered to the Dutch» (gün tek akademik kaynakta, ay TDV ile çift) |
| hollanda-malaka | Malaka 1641-01-14 → 1825-03-01 (`enklav:true`) | pencere `hollanda-dogu-hint` → `hollanda-malaka`; künye f 1641-01-01 → **1641-01-14** | aynı; t 1825-03-01 mevcut (1824 antlaşması, künyede kaynaklı) |
| ispanyol-filipinler | 14 pencere: Manila 2 (1571-06-24→1762-10-06, 1764-05-31→1898-08-13), Cebu, Kotabato (1888→1898-08-13), Iloilo, Vigan, Zamboanga, Butuan, Naga, Batangas, Legazpi, Tuguegarao, Dagupan, Puerto Princesa | pencere sahibi `ispanya` → `ispanyol-filipinler` (kırılma günleri DEĞİŞMEDİ; yalnız sahip kimliği; hepsi künye 1565-01-01…1898-12-10 içinde) | künye mevcut kaynaklı (Paris Antlaşması 10 Aralık 1898; TDV Filipinler (Majul) «1565'ten 1898'e 333 yıl») |

**Mevcut filipin künyeleriyle ilişki (ölçüldü):** `filipin-racaliklari` (t 1571-06-24) → `ispanyol-filipinler` (f 1565-01-01) → `abd`/`amerikan-filipinleri`. Cebu (1565-04-27) ve Iloilo (1569), Vigan (1572-01-01), Naga (1573), Legazpi (1573), Tuguegarao (1581), Butuan/Puerto Princesa (1622), Zamboanga (1635) pencereleri `ispanyol-filipinler` künyesi İÇİNDE; Cebu/Iloilo/Vigan'da racalık penceresi künye t'den (1571-06-24) önce/sonra biter: o aralık (Iloilo 1569'a kadar racalık, Vigan 1572'ye kadar racalık) künye f/t'ler arası örtüşme değil, bilinen yerel pencere farkıdır; Değişmez 4c/4d ihlali üretmez (denetle sayısı aşağıda). Manila 1762-10-06→1764-05-31 `ingiltere` ARASI korundu.
**Not (renk):** Manila/Cebu vb. haritada artık `ispanya` (#ea0cea) değil `ispanyol-filipinler` (#1596ba) renginde görünür; Malaka Portekiz dönemi `portekiz` (#34fcfc) yerine `portekiz-malaka` (#03a6ff), Hollanda dönemi `hollanda-dogu-hint` (#00695c) yerine `hollanda-malaka` (#cb7d04). BOYALAR'da bu üç kimliğin KENDİ rengi hâlihazırda tanımlıydı (renkler.py'ye dokunulmadı); yine de GÖRSEL DEĞİŞİKLİK olduğundan KASA/Emre onayı gerekir (bkz. RENK-ONERI-1115-maritimb.md).

## Yapılmadı (neden)
| künye | karar |
|---|---|
| cebu-racaligi (f 1521, t 1565-01-01) | **Yazılmadı.** Künye zaten `filipin-racaliklari` zincirinin alt kümesi; Cebu noktasının 1281→1565-04-27 penceresiyle çakışır; f=1521 Magellan'ın gelişi (Hall), racalığın polity doğuşu değil. Ayrı pencere açmak künye t (1565-01-01) ile pencere ucu (1565-04-27) arasında D4c üretirdi. |
| janggala (1042-1136) | **Yazılmadı, künye şüpheli:** Coedès IX-4 «Janggala had from the start been absorbed by Kadiri» → bağımsız polity kanıtı yok (künyenin kendi ic_not'u aynı). Surabaya/Malang 1042-1222 `kediri` kalır. |
| lamuri (1025-1281) | Koordinat çift tanıkla kurulamadı (künye ic_not: iki ayrı Lamreh köyü, 14 km fark; Wikidata P625 yok) → pencere yazılmadı. |
| perlak (840-1292) | f 840 kaynaksız (künyenin kendi ic_not'u); t=1292 yalnız Marco Polo tanıklığı, Hall 1330'larda Perlak'ı bağımsız gösterir (künye t ile çelişir) → yazılmadı; künye düzeltmesi KASA kuyruğunda. Sonraki sahip zinciri (Samudra-Pasai/Aceh) kaynaklanmadan yeni nokta Değişmez 1'i bozar. |
| tarumanagara, kalingga-holing, sailendra | Yerleşimsiz; MS 4-9. yy, 1000-1199 ve 1281 çekirdeği dışı; Batavia (kur 1619) ve Cava iç noktaları bu dönem için kaynaklı tanık sağlamıyor → bulunamadı. |
| Batavia, Singapur | Künye başına pencere zaten var (hollanda-dogu-hint / ingiltere→ingiliz-malaya→singapur-kolonisi→singapur); değişiklik gerekmedi. |
