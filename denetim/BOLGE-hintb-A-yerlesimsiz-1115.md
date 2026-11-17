# BOLGE hint 2. dalga — (A) Yerleşimsiz künyeler (15 Kasım 2026, UMIT, dal umit-1115b-hint)

Ölçüm: `origin/main` (8fb10bdf1 + sonrası) üzerinde, node `vm` ile tüm `data/*.js` yüklenerek; `bolge:"guney-asya"` künyelerinden hiçbir yerleşimin `s:/d:/v:` penceresinde geçmeyenler: **27**. Mükerrer tarama `girdi.yukle()` ile (5636 yerleşim; normalleştirilmiş ad + koordinat).

## 1. Bulgu: yerleşimsiz künyelerin bir kısmı zaten yer tutucuya sahipti
`data/yerlesimler_odak_yedek_1023.js` (GIRDI_DOSYALARI'nda) "Koç Bihar (Cooch Behar)" ve "Agartala" kayıtlarını `s:[]`, `bos:"veri-yok"`, `bit:"1281-01-01"` ile (yalnız kamera odağı) taşıyordu; gerekçe "koch-bihar / tripura-manikya BOYALAR'da yok" idi. İkisi artık `arac/renkler.py` BOYALAR'da (koch-bihar #f6f606, tripura-manikya #f6fc06). Yeni dosya açılmadı, girdi.py'ye dokunulmadı.

## 2. Yazılanlar (kaynak sütunuyla)
| Künye | Yerleşim | Pencere | Kaynak | Gün/hassasiyet |
|---|---|---|---|---|
| koch-bihar | Koç Bihar (Cooch Behar) 26.333N 89.450E | 1515-01-01..1949-01-01 koch-bihar; sonra hindistan-cumhuriyeti ..2000-12-31 | Gait, *A History of Assam* (1906) s.46-47 «about 1515»; IGI X (1908) «Cooch Behar State»/«Cooch Behar Town» 26°20'N 89°27'E (archive.org, tam metin okundu) | yalnız yıl teyitli, gün teyitsiz; BEYAN: bölge-merkez vekili, başkent geçiş yılı okunmadı |
| tripura-manikya | Agartala 23.829N 91.278E | 1279-01-01..1949-10-15 tripura-manikya; sonra hindistan-cumhuriyeti | IGI XIII «Hill Tippera» s.118 «about 1279»; «one town, Agartala» | f yıl; t gün tek ikincil kaynak (Britannica arama özeti) — BEYAN: Agartala 1279-1849 başkent değildi |
| fransiz-hindistani | Karaikal (Karikal) | 1817-01-14..1954-11-01 | IGI XV «Karikal» ve XII «French Possessions»: iade 14 Ocak 1817 | gün (IGI) |
| fransiz-hindistani | Mahé | 1817-02-22..1954-11-01 | IGI XII: 22 Şubat 1817; XVII «Mahe» | gün (IGI) |
| fransiz-hindistani | Yanam | 1817-04-12..1954-11-01 | IGI XII: 12 Nisan 1817 | gün (IGI) |
| danimarka-hindistani | Serampore | 1755-01-01..1845-02-22 (sonra ingiliz-hindistani, hindistan-cumhuriyeti) | Nationalmuseet (DK) «The Danish trading post»: «In 1755 … permission to establish a colony»; IGI XXII «Serampore Town»: 1845 satış | f yıl; t antlaşma günü (ikincil), fiilî teslim günü BULUNAMADI |
| portekiz-hindistani-goa | Daman (B bölümüne bkz.) | 1559-02-02..1961-12-19 | IGI XI «Daman»; TDV «Diû» | gün |

Her yeni kaydın kur: alanı **kuruluş değil, atlas penceresi başlangıcı**dır ve kaydın `kaynak:`ında beyan edilir; 1817 öncesi Fransız/İngiliz el değiştirmeleri (Karaikal 1760-04-15 teslim, «üç sonraki» İngiliz ele geçirmesi; Mahé «thrice taken and thrice restored»; Serampore 1801-02/1808-15) kaynakta gün yok/okunmadı olduğundan YAZILMADI (beyanlı kapsam sınırı).

## 3. Yazılmayanlar (bulunamadı + neden)
| Künye | Neden |
|---|---|
| butan | `bhutan` (1616-2026) ile çift künye; 1. dalga G1 önerisi (KASA kararı). Yeni pencere iki künyeyi çakıştırır, YAZILMADI. |
| kamata (1257-1581), chutiya (1187-1501), sumra (1030-1351), kadamba-goa (0960-1310), dogu-ganga, pattikera (1202-, t yok) | Künyelerin kendi f/t'si `yuzyil` hassasiyetli TASLAK («f=960 ve t=1310 kaynakta yok → taslak» — künye ic_not). Taslak uçlardan pencere yazmak uydurma tarih olurdu. Önce künye uçlarının kaynakla belirlenmesi gerekir (Majumdar V-VI okundu ama gün/yıl vermiyor). pattikera için ardıl (Deva hanedanı) künyesi de yok. |
| pala, gupta, kamarupa, vishnukundina, sonraki-gupta, sailodbhava, bhauma-kara, somavamsi, habbari, tomara, silahara, khayaravala-japila, kalabhra, lohara, gazneli-lahor | `arac/renkler.py` BOYALAR'da anahtarı YOK (renkler.py tuz dosyası) → `d:` yazılırsa bölge boyanmaz. Renk önerisi `RENK-ONERI-1115-hintb.md`. |
| indo-grek, vakataka | Çekirdek (1281+) dışı, düşük öncelik; yazılmadı. |
