# KRONO-AFRIKA-0929 — KÜNYE ÖNERİLERİ (`data/devletler.js`e DOKUNULMADI)

Önce `denetim/KUNYE-DUNYA-0929.json` açıldı (46 eksik künye): bu bölgeden yalnız **`ilorin-emirligi`**
(öncelik 4, «kronolojide 2 geçiş») listede. Aşağıdaki yenisi listede YOK.

## Yeni
### `nkhotakota-jumbelik` — Nkhotakota (Cumbe) Jumbeliği
- **Ömür:** `f:1840` — `t:1895` (İngilizler Mwingi Kheiri'yi tahttan indirdi).
- **Bölge:** `dogu-afrika` (Malavi gölü batı kıyısı) · **tür:** `sultanlik` (yerel unvan: jumbe).
- **Kaynak:** TDV `malavi` — «1840'ta kendisini önce Marimba sultanı, ardından … 'jumbe' ilân eden Sâlim b. Abdullah'ın Nkhotakota'da kurduğu idare … 1860'ta vefat … 1894 Mwingi Kisutu … 1895'te İngilizler Mwingi Kheiri'yi tahttan indirdi».
- **Gerekçe:** şimdi `1840-01-01 Sâlim b. Abdullah jumbe ilân etti` maddesi `umman-zengibar`a bağlı (künye yok, M-5416 üçüncü kural). Künye açılırsa madde (`kronoloji_cok_afrika.js`) `devlet:"nkhotakota-jumbelik"` olarak güncellenir; yerleşim `Nkhotakota (Cumbe)` `d:` da aynı künyeye taşınır (koşu istemez, künye+`d:` değişir).

## Mevcut öneri — onay
- **`ilorin-emirligi`** (KUNYE-DUNYA listesinde): TDV `nijerya` — «Müslüman İlorin Emirliği bu dönemde [XIX. yy başı, Osman b. Fûdî etkisi] kuruldu» ve TDV `fulaniler` — Bello (1817-1837) döneminde İlorin emirliği Sokoto'ya bağlandı. **Ömür:** `f` = `bulunamadı` (TDV tarih vermiyor); 1817 Bello'nun tahta çıkışı olup künye günü olarak KULLANILMAMALI (`CLAUDE.md §4` "künyenin günü kaynak değildir").

## Mevcut künye düzeltmeleri (DUZELTME.md ile çapraz)
- `massina f:1818-01-01` → 1810 (TDV `fulaniler`: Ahmedü Lobbo 1810-1844) — DUZELTME §3.
- `oranj f:1854-04-07` → 1854-02-23 (SAHO) · `transvaal f:1852-01-01` → 1852-01-17 (SAHO + künye içi 1852-01-17) — DUZELTME §6.
- `mali-imparatorlugu t:1670-01-01`: TDV 1430'da "ortadan kalktı" — künye `t:` kaynağı `bulunamadı` — DUZELTME §2.
- Songay: gerçek id `songhay-imparatorlugu` (`devletler.js:4896`, `f:1464-01-01`). 1430 maddesine EKLENMEDİ: madde künye penceresinden (1464) önce düşer (M-5416 kural 2). Not: TDV `mali` "yerini Songay Sultanlığı aldı" der ama Songhay künyesi 1464'te başlar — 1430-1464 arası Gao/Tinbüktü'nün siyasî sahibi (Tevârik/Sünnî hanedanı) künyede yok; künye önerisi gerekmez, `sunni-hanedani` gibi bir id'yi TDV desteklemiyor (`bulunamadı`).
