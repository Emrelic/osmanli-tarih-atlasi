# KRONO-ATLANTIK-B-0929 — DÜZELTME DEFTERİ (İngiltere · Hollanda)

29 Eylül 2026 · uygulayan betikler `denetim/ARAC-KRONO-ATLANTIK-B-0929-UYGULA.py` (44 kalem)
ve `-ODAK.py` (30 madde). İkisi de her değişikliğin **tam bir kez** eşleşmesini şart koşar.
BAGLAMA (M-5429) bu iki dosyaya yazmadığını teyit etti; düzeltmeleri dosya sahibi olarak uyguladım.
Madde SİLİNMEDİ; silme/birleştirme hükmü gerektirenler **§B**'de, hüküm koordinatörde.

## A. UYGULANAN — `data/kronoloji_ingiltere.js`

| # | Madde | Önce | Sonra | Kaynak / gerekçe |
|---|---|---|---|---|
| İ-01 | 32 madde | `yer_id` anahtarı **iki kez** (`yer_id:""` … `yer_id:"Londra"`) | tek anahtar | JS'te ikincisi geçerliydi → **etkin değer değişmedi**, belirsizlik kalktı. Listesi betikte |
| İ-02 | Dafydd ap Gruffudd idamı | `1283-06-03` | **`1283-10-03`** | Dictionary of Welsh Biography (NLW): *"on 3 October 1283"*. Haziran, yakalandığı aydır |
| İ-03 | Norveçli Margaret | b: "…**Piast** hattı tükendi" | "…III. Alexander'ın soyu tükendi" | Piast LEH hanedanıdır; madde İskoçya'nın. Yeni iddia eklenmedi, d: metniyle hizalandı |
| İ-04 | More'un *Utopia*'sı | `yer_id:"Londra"` | `yer_id:""` + gun "Aralık 1516, Louvain" | ORBi/Brepols (2021): ilk baskı Louvain'de Dirk Martens, 15 Ara 1516 – 5 Oca 1517 |
| İ-05 | *Oliver Twist* tefrikası tamamlandı | `1838-05-15` | `1839-01-01` + gun "Nisan 1839" | Tefrika Şubat 1837 – Nisan 1839 (Broadview, CSUN kütüphanesi; **arama özetinden**). Eski gün hiçbir olaya karşılık gelmiyordu |
| İ-06 | Kraliçe Anne | b "…— İspanya Veraset Savaşı başladı", tur `savas` | b "Kraliçe Anne tahta çıktı", tur `hukumdar` | Tahta çıkış 8 Mart, savaş ilânı 4 Mayıs 1702 (Jülyen). d: zaten "aynı yıl" diyordu |
| İ-07 | Hastings ilk Genel Vali | `1773-01-01` | **`1774-10-20`** | Britannica 'Warren Hastings': Konsey 20 Ekim 1774'te göreve başladı; Yasa 1773 |
| İ-08 | *Sense and Sensibility* | `1811-01-01` | `1811-10-30` | Jane Austen's House müzesi, JASNA |
| İ-09 | *Lyrical Ballads* | `1798-01-01` | `1798-10-04` | Britannica 'Lyrical Ballads' |
| İ-10 | Fabrika Yasası | `1833-01-01` | `1833-08-29` | UK Parliament 'The 1833 Factory Act'; Britannica |
| İ-11 | Halkın Fermanı (Çartizm) | `1838-05-01` | `1838-05-08` | UK Parliament Living Heritage '1838 People's Charter' |
| İ-12 | Yaşlılık Aylığı Yasası | `1908-01-01` | `1908-08-01` | House of Commons Library SN04817 |
| İ-13 | ILP kuruluşu | — | gun "Ocak 1893 (13/14 Ocak çelişik)" | Kaynaklar ilk günde ayrışıyor → yıl kaldı |
| İ-14 | Machynlleth parlamentosu | `1404-03-21` | `1404-01-01` | **Sahte kesinlik**: RCAHMW 1404 der, gün vermez; 21 Mart'ın kaynağı yok |
| İ-15 | 1853-10-04 Kırım | b "…Britanya Osmanlı'nın **yanında yer aldı**" | "…diplomatik olarak destekledi"; d'ye "28 Mart 1854" | 4 Ekim 1853 Osmanlı'nın ilânıdır; Britanya 28 Mart 1854'te girdi (Britannica). Yeni madde `kronoloji_cok_ingiltere.js` |
| İ-16…20 | Harborne 1578 · ittifak 1799 · 1807 Şubat · 1807 Mart · Abdülaziz 1867 | `YYYY-01-01` / `YYYY-MM-01` | t: aynı, **gun: ay** | TDV `ingiltere` ayı verir (Ekim 1578, Ocak 1799, Şubat/Mart 1807, Temmuz 1867), günü vermez. `YYYY-MM-01` "ayın 1'i" DEĞİL, ay kodudur (CLAUDE.md §4) |
| İ-20b | Levant Company `1581-09-11` | kaynak TDV | gun: "⚠️ TDV yalnız 1581 der; günün kaynağı bulunamadı" | Kaynağın desteklemediği gün — **silmedim**, beyan ettim |
| İ-21 | **52 madde** (1582-1752) | takvim belirsiz | gun: "`<gün>` JÜLYEN (Gregoryen `<+10/+11>`)", 1 Ocak-24 Mart arası için eski yılbaşı notu (ör. 1648/49) | Şartname ②. **t: ÇEVRİLMEDİ** (VERI-YAPISI §TAKVİM). 3 istisna Gregoryen olarak işaretlendi: Armada 1588-08-08, Karlofça 1699-01-26, Blenheim 1704-08-13 — **dosya aynı dönemde iki takvimi karışık kullanıyordu** |
| O-1 | 10 madde `kapsam_genis:true`, odak yok | kamera **Osmanlı sınırına** uçuyordu (BEYANLI→yabancı) | `odak_yer:[…]` (İngiliz/İrlanda/G.Afrika havuz yerleşimleri) | CLAUDE.md §9. `odak_olc.py`: BEYANLI 10→0 |

## A2. UYGULANAN — `data/kronoloji_hollanda.js`

| # | Madde | Önce | Sonra | Gerekçe |
|---|---|---|---|---|
| H-01 | Amsterdam Borsası | `1602-03-21` | `1602-01-01` | **Sahte kesinlik**: kendi kaynak alanı "GÜN DOĞRULANMADI" diyordu; 21 Mart kaynaksız |
| H-02 | *Mare Liberum* | `1609-11-01` | `1609-01-01` | Aynı sınıf; kaynak ay vermiyor |
| H-03 | Şanlı İhtilâl | `dunya:5`, takvim yok | **`dunya:4`**, gun "5 Kasım 1688 JÜLYEN = 15 Kasım Gregoryen" | Aynı olay `kronoloji_ingiltere.js`te `dunya:4` — şartname §3.2: aynı olay iki dosyada farklı `dunya` = KUSUR. İngiltere dosyasının 5'i altı maddeyle sınırlayan gerekçeli politikasına uyuldu |
| H-04 | Armada | takvim yok | gun "Gregoryen (İngiliz takviminde 29 Temmuz)" | |
| H-05 | 17 Hollanda iç günü (1585-1713) | takvim yok | gun "… Gregoryen" | Holland/Zeeland 1582-83'ten beri Gregoryen |
| H-06 | 1652-07-10 İngiliz-Hollanda Savaşı | — | gun "takvimi ÖLÇÜLEMEDİ" | İngiliz ilânı Jülyen olabilir; kaynak bulunamadı |
| O-2 | 3 madde `kapsam_genis:true`, odak yok (1568 · 1672 · 1914) | Osmanlı sınırına uçuyordu | `odak_yer:[…]` Hollanda şehirleri | BEYANLI 3→0 |

## B. UYGULANMADI — HÜKÜM KOORDİNATÖRDE

| # | Bulgu | Öneri |
|---|---|---|
| B-1 | **Mükerrer**: `1739-01-01` "John Wesley açık hava vaazlarına başladı" ve `1739-01-01` "Wesley kardeşler Metodist toplulukları örgütlemeye başladı" — aynı gün, aynı hareket, aynı dosya | Birleştir (ikinciyi sil). Günü kaynakla ölçülemedi |
| B-2 | **Şartnamenin ölçümü yanlış**: "1588 Armada ve 1688 Şanlı İhtilâl `kronoloji_hollanda.js`te duruyor, İngiltere'de değil." İKİSİ DE İngiltere dosyasında VAR (1588-08-08 `dunya:4`, 1688-11-05 `dunya:4`) | Yerleri doğru: iki devletin olayıdır, iki dosyada durmaları tasarım gereğidir (Hollanda dosyasının kendi başlık notu da böyle söyler). Tek kusur 1688'in `dunya` farkıydı → H-03 |
| B-3 | **Sistemik kaynak zaafı**: 270 maddenin **246'sı `kaynak:"el-kitabi"`** — seri adı, sayfa yok; dosyanın başlığı "tek tek doğrulanmadı" diye kendisi beyan ediyor. Başlık ayrıca tarih teyidinde **History.com** (popüler tarih sitesi — KIRMIZI LİSTE, CLAUDE.md §4) ve Wikipedia kullanıldığını yazıyor | Bu oturum 10 `el-kitabi` maddesine kurumsal/akademik kaynak ekledi; **236 madde hâlâ yalnız "el-kitabi"**. Ayrı bir kaynaklandırma paketi önerilir. Web kaynağıyla ölçtüğüm 12 `el-kitabi` maddesinin sonuçları: 4'ünde gün yanlış ya da kaynaksızdı (İ-02, İ-05, İ-07, İ-14). 1'inde yer yanlıştı (İ-04). 1'inde başlık yanlış bir olay birleştiriyordu (İ-06). 5'inde yalnız yıl yazılıydı, oysa gün kaynakta açıktı (İ-08…12). 1'inde kaynaklar çelişik çıktı (İ-13). Bu örneklem rastgele DEĞİLDİR; şüpheli görünenleri seçtim. Kalan 236 madde için bir oran tahmini yapılamaz: **ölçülemedi** |
| B-4 | `1599-09-21` Globe Tiyatrosu "açıldı" — 21 Eylül 1599 bilinen ilk temsil tanıklığıdır, açılış günü bilinmiyor (kaynak bu oturumda **doğrulanmadı**) | `1599-01-01` + gun |
| B-5 | `1649-01-30` "I. Charles idam edildi, **Cumhuriyet ilan edildi**" — Commonwealth'i ilân eden yasa Mayıs 1649'dur (kaynak **doğrulanmadı**) | Başlıktan "Cumhuriyet ilan edildi"yi çıkar |
| B-6 | `1876-05-01` Kraliyet Unvanları Yasası `yer_id:"Delhi"` — yasa Londra'da; Delhi Durbar 1 Ocak 1877 | `yer_id:"Londra"` |
| B-7 | `1914-11-06` "Hint Seferi Kuvveti **Basra'ya** çıktı" — 6 Kasım Fav çıkarmasıdır; Basra 22 Kasım (zaten `kronoloji_cok_1dunya_B.js`'te) | b: "Fav'a çıktı" |
| B-8 | `1745-08-19` "Bonnie Prince Charlie **karaya çıktı**" — 19 Ağustos Glenfinnan'da sancak açılışıdır; karaya çıkış Temmuz | b düzelt |
| B-9 | `1788-01-26` "İlk Filo **Botany Bay'e** ulaştı" — 26 Ocak Sydney Cove'daki kuruluştur | b düzelt |
| B-10 | Ay-kodlu, gün/ay kaynaksız: `1337-10-01` Yüzyıl Savaşları · `1348-06-01` Kara Ölüm · `1406-04-01` I. James'in esareti · `1536-03-01` Galler Yasası | gun: ile hassasiyet beyanı; kaynak bulunamadı |
| B-11 | **Devlet eşlemesi** — 270 madde sitede TEK künyeye (`ingiltere`) bağlanıyor (`derinKronolojiBindir`); etiketteki devlet bilgisi OKUNMUYOR (BAGLAMA M-5429). Ölçüm: `iskocya` etiketli 37 (34'ü künye penceresi içinde, **`iskocya` künyesinde bugün yalnız 4 madde görünüyor**) · `irlanda` 30 (**24'ü künye penceresi dışında** — künye 1603-03-30'da bitiyor) · `galler` 10 (künye yok) | İskoçya'nın 34 maddesinin `kronoloji_cok_*`'a `devletler:["iskocya","ingiltere"]` ile taşınması. Taşıma = eski dosyadan silme ⇒ hüküm koordinatörde. İrlanda/Galler için künye önerisi `-KUNYE.md` |
| B-12 | `kronoloji_hollanda.js` başlığı "HENÜZ CANLI DEĞİL" diyor; `index.html` dosyayı yüklüyor | Başlık notu bayat — yalnız yorum |
