# VENEDİK (Stato da Mar + Terraferma + ardıllar 1797-1866) — 12 Kasım 2026 ek denetim

Ölçüm: makine UMIT · worktree `reverent-allen-bb8c39` · HEAD 85896cb29 · **salt okuma** (`data/` değişmedi; `denetle.py` koşturulmadı).
Mevcut rapor: `denetim/VENEDIK-DENETIM-1111.md` (95 bulgu satırı). Burada **yalnız onun kapsamadıkları** var; 1111'in C/D/E/F/G/H satırları yinelenmedi.

1111'in kapsadığı ve atlanan adaylar: Korfu 1386 (C10), Zaklise (F32), Kefalonya 1479 öncesi (F33), Mikonos 1537 ucu (F25), Andros/Kiklad aile beylikleri (F24), Eğriboz künye tutarlılığı (F29), Limni-Bozcaada (F21-22), Moton/Koron (F10, F17), Nauplion/Monemvasia (F12, F30, F31), Draç (E6), İşkodra (C11, E7), Bar t (E4), Ülgün/Budva (E5), Kotor (C3), Split (C2), Zadar (C1), Ston/Dubrovnik (C16), Girit kaleleri (F3), Kıbrıs (F5), Treviso/Padova/Verona/Brescia/Bergamo/Friuli/Ravenna/Cremona (D1-D9, D14), Cambrai 1509-17 (D1), Mora 1685-1715 (F13-F17), Pasarofça (H8), Campo Formio/1798 (D10, G1), 1866 (D12), `lombardiya-venedik` (D13).

## ① Ne ölçtüm (sayılarla)

- 16 yerleşimin `s:` zinciri okundu (Venedik, Padova, Verona, Udine, Brescia, Bergamo, Ravenna, Korfu, Kefalonya, Ayamavra, Zaklise, Çuha, İstendil, Mikonos, Andros, Eğriboz, Preveze, Vonitsa, İnebahtı, Balyabadra, Draç) + 4 künye (`venedik-1848`, `lombardiya-venedik`, `italya-napolyon`, `italya`).
- D2 evreninde (`olaylar*.js`, `kronoloji_sinir*.js`) 14 kırılma gününe madde arandı: 1805-12-26, 1814-04-16, 1848-03-22, 1849-08-22 (hepsi `olaylar_napolyon_italya_1028.js:30,33,45,49`'da **var**), 1684-08-06, 1684-09-29, 1500-12-24, 1715-06-05, 1470-07-12, 1699-01-26, 1700-01-01 (hepsi **var**).
- more veneto: `kronoloji_venedik.js`'te 1582 öncesi Ocak-Şubat günlü 9 madde tarandı (1297-02-28, 1339-01-24, 1348-01-25, 1358-02-18, 1479-01-25, 1489-02-26 …). Yıl kayması bulunmadı (Treviso için EI "1339" diyor, atlasla aynı) — **takvim ek bulgusu yok**.
- Okunan kaynak: TDV 4 madde (ayamavra, inebahti, istendil/tinos araması, preveze araması) · Treccani 8 sayfa (EI Verona, EI Treviso, EI Pesaro; DBI Morosini, Contarini, Ghisi Andrea; SdV "Il 1848 e dopo" [Del Negro], "Istituzioni di cultura" [Gullino]; Dizionario di Storia "Venezia") · V. Dal Cin, *Il mondo nuovo* (Ca' Foscari 2019) bl. 3-4 · W. Miller, *Essays on the Latin Orient* (1921, Gutenberg 69026) bl. "The last Venetian islands in the Ægean" ve Kythera bölümü.
- **Ek bulgu: 12** (E1-E12).

## ② Ne bulamadım / ölçemedim

- Fransız birliklerinin Venedik şehrine 1806'daki giriş günü (yalnız "Ocak 1806", akademik olmayan encyclopedia.com) — bulunamadı.
- Padova'nın 1801 Fransız işgali başı/sonu günü, 1805 Kasım işgal günü, 1813-14 Avusturya dönüş günü, 1848 teslim günü; Udine 1813 dönüş günü — bulunamadı.
- Ayamavra 1503 Osmanlı'ya iade günü (barış 1503; gün okunmadı). 1111 H3'teki barış günü sorusuyla aynı.
- Tinos 1715-06-05 günü: atlas kaynağı "TDV venedik"; TDV'de Tinos/İstendil maddesi yok (arama 0 sonuç), Miller gün vermez → **gün teyit edilemedi**.
- `kronoloji_venedik.js:112` "Kara Ölüm" 1348-01-25: bu gün büyük olasılıkla Friuli depreminin günüdür; kaynak açılmadı, bulgu yazılmadı.
- Vonitsa'nın 1684'teki ayrı düşüş günü (DBI yalnız Prevesa 29 Eyl verir).
- Setton (Wisconsin UWDC, *History of the Crusades* V) sayfası açılmadı (yalnız arama özeti).

## ③ Bulgular

### E1 — İstendil (Tinos) ve Mikonos 1281-1390: Venedik devleti değil, Ghisi senyörlüğü [ÇELİŞKİ]
- Kimlik: `data/yerlesimler.js:704` İstendil (Tinos) `s:venedik` 1281-01-01 → 1715-06-05; `yerlesimler.js:1799` Mikonos `s:venedik` 1281-01-01 → 1566-04-15.
- Atlasta: iki ada atlasın başından beri Venedik.
- Kaynak: Miller, *Essays on the Latin Orient* (1921), "The last Venetian islands in the Ægean": adalar George III Ghisi'nin vasiyetiyle Venedik'e bırakıldı ve onun **1390'daki ölümüyle** Cumhuriyet'e geçti; ilk yıllarda Eğriboz baylosuna bağlı, 1430'dan sonra doğrudan rektörle yönetildi. DBI, Ravegnani, "Ghisi, Andrea" (c. 54, 2000): Tinos ve Mikonos 1207'den Ghisi'nin "signoria"sıdır; Tinos Latin imparatorunun payıdır, Andrea "uomo ligio dell'imperatore". 1277 antlaşmasında Bartolomeo Ghisi "signore di Tino e di Micono" olarak geçer.
- Öneri: 1281 → 1390-01-01 Ghisi senyörlüğü (künye yok → EKSİK-DEVLET; 1111 F24'teki "Ege Latin aile beylikleri" kararına bağlansın). `venedik` f **1390-01-01** (yalnız yıl, beyanlı). D2 maddesi: "1390 Ghisi vasiyetiyle Tinos ve Mikonos Venedik'e geçti". Mikonos'un t'si için 1111 F25 geçerli.

### E2 — Çuha (Kythira) 1281-1363: Bizans ve Venier aile beyliği [ÇELİŞKİ]
- Kimlik: `yerlesimler.js:701` `s:venedik` 1281-01-01 → 1715-09-07 (kaynak TDV `cuka-adasi`: "1204'te Venedik … idaresi Venier ailesine").
- Kaynak: Miller (aynı eser, Kythera bölümü): Venier markileri 1262'den sonra Likarios'la çıkarıldı; ada Monoyannes'e verildi; **1309'da** evlilikle Venier'e döndü; Venier'in 1363 Girit isyanına katılması üzerine ada **1363'te Venedik kolonisi** oldu.
- Çelişki: TDV 1204'ten kesintisiz Venedik/Venier; Miller 1262-1309 Bizans. Üçüncü bağımsız kaynak okunmadı.
- Öneri: **beyanlı, değişiklik önerilmez.** `ic_not`a iki kaynağı yaz; 1281-1363'ün Venedik devleti değil Venier tımarı olduğunu beyan et (E1 ile aynı künye kararı).

### E3 — Ayamavra 1502-1503 Venedik dönemi haritada yok [SESSİZ-DEĞİŞİM / EKSİK dönem]
- Kimlik: `yerlesimler.js:1603` Ayamavra — Osmanlı `d:` 1479-08-01 → 1684-08-06 kesintisiz.
- Kaynak: TDV `ayamavra`: "Şehir 1502'de kısa bir süre Venedik hâkimiyetine girdi", barışla Osmanlı'ya bırakıldı. EI, Almagià, "Pesaro, Benedetto": Venedik filosu Santa Maura'ya gitti, ada "si arrese il giorno 20" (Ağustos 1502); 1503 barışı "la restituzione di Santa Maura" içerir. DBI, Derosas, "Contarini, Girolamo" (c. 28, 1983): "alla fine di agosto" alındı, barışta iade edildi.
- Öneri: `venedik` **1502-08-20** (EI) → 1503 barışının iade günü (bulunamadı; 1111 H3 ile birlikte çözülsün). `ic_not`ta DBI'nin "Ağustos sonu" demesi beyan edilsin. İki D2 maddesi gerekir.

### E4 — Preveze-Vonitsa maddesi haritayla çelişiyor [ÇELİŞKİ]
- Kimlik: `data/olaylar_ek6.js:64` (1684-09-29) metni: "Preveze ve Vonitsa Pasarofça'da da Venedik'te bırakıldı; Osmanlı idaresine ancak 1798'de dönecekti."
- Atlasta: harita `yerlesimler.js:1610-1611` iki yeri Karlofça'yla (1699-01-26) Osmanlı'ya iade ediyor, Pasarofça'yla (1718-07-21) yeniden Venedik yapıyor (kaynak TDV `karlofca`, `pasarofca-antlasmasi`).
- Öneri: madde metnini düzelt: "Karlofça'da (1699) Osmanlı'ya iade edildi, Pasarofça'da (1718) yeniden Venedik'e bırakıldı; 1797'ye dek Venedik'te kaldı." Gün doğru (DBI Morosini: "il 29 settembre Prevesa").

### E5 — Karlofça iadesi iki farklı kuralla uygulanmış [TARİH]
- Kimlik: Preveze ve Vonitsa `venedik` t **1699-01-26** (imza günü; kaynak alanı "teslim günü kaynakta yok"). İnebahtı `yerlesimler.js:549` `venedik` t **1700-01-01**.
- Kaynak: TDV `inebahti`: "Venedikliler, Karlofça Antlaşması'ndan (1699) bir yıl sonrasına kadar kaleyi ellerinde tuttular." Preveze için de antlaşma kalenin yıkılıp iade edilmesini istiyor (TDV `karlofca`, atlas kaynak alanından), yani fiilî teslim imzadan sonradır.
- Öneri: KARARLAR madde 4'e göre kırılma fiilî teslim günüdür. Preveze ve Vonitsa için fiilî gün bulunana dek 1699-01-26 kalsın ama `ic_not`a "fiilî teslim sonra (İnebahtı 1700, TDV)" yazılsın. Gün uydurulmasın.

### E6 — Ayamavra 1684 maddesinde gün kaynaksız görünüyor [KAYNAKSIZ]
- Kimlik: `olaylar_ek5.js:270` t 1684-08-06 ama `gun:"Yaz 1684"`, kaynak yalnız TDV `ayamavra` ("1684 yazında").
- Kaynak: DBI, Gullino, "Morosini, Francesco" (c. 77, 2012): "il 6 agosto 1684 conquistò Santa Maura, il 29 settembre Prevesa."
- Öneri: gün doğru. `gun:"6 Ağustos 1684"` yaz ve kaynağa DBI Morosini'yi ekle (Preveze maddesine de).

### E7 — Verona 1801-1805: şehir merkezi Avusturya değil, İtalya Cumhuriyeti [SINIR]
- Kimlik: `data/yerlesimler_avrupa.js:472` Verona (lat 45.438, lon 10.992). `avusturya` 1797-10-17 → 1805-12-26; beyan: "1801 Lunéville'de Adige hattı batı yakasını Cisalpin'e verdi; şehir merkezi/doğu yakası Avusturya kabul edildi".
- Kaynak: EI "Verona": Lunéville'le şehir "fu divisa fra la Repubblica italiana e l'Austria formando l'Adige il confine". Atlas noktası Arena/Bra'da, yani Adige'nin **sağ yakasında**, Cisalpin/İtalyan tarafındadır. Avusturya'da kalan yalnız sol yakadaki Veronetta'dır.
- Öneri: Verona `italya-napolyon` **1801-02-09** (Lunéville imzası) → 1805-12-26; `avusturya` 1797-10-17 → 1801-02-09. 1801 Ocak'taki Treviso mütarekesiyle başlayan Fransız işgal günü bulunursa f o gündür. Gerekirse Veronetta ayrı bir nokta olur. D2 maddesi: "Lunéville: Verona Adige'den ikiye bölündü".

### E8 — Padova 1801 Ocak-Nisan Fransız işgali haritada yok [SINIR]
- Kimlik: Padova `yerlesimler_avrupa.js:473` `avusturya` 1797-10-17 → 1805-12-26 kesintisiz.
- Kaynak: Dal Cin, *Il mondo nuovo* (Ca' Foscari 2019) s. 205: "Fra il gennaio e l'aprile del 1801, in occasione di una breve occupazione militare francese" (Monteleone'ye dayanarak). Bağımsız ikinci kaynak: EI "Treviso", komşu şehir için "di nuovo per poco ai Francesi e ancora all'Austria (1801)".
- Öneri: günler bulunamadı. **Beyanlı, değişiklik önerilmez** (gün yok; ay hassasiyetinde `1801-01-01`/`1801-04-01` yazmak uydurmaya yakın). `ic_not`a beyan yazılsın, gün araştırılsın (Monteleone, *Padova tra Rivoluzione e Restaurazione*).

### E9 — 1805-1806: Terraferma Kasım 1805'te Fransız, Venedik Ocak 1806'ya dek Avusturya [TARİH (antlaşma ≠ devir)]
- Kimlik: Venedik `yerlesimler.js:1185`, Padova, Verona, Udine — hepsinde `avusturya` → `italya-napolyon` **1805-12-26** (Pressburg imzası). Madde `olaylar_napolyon_italya_1028.js:45` var.
- Kaynak: Dal Cin s. 205: Padova'da Avusturya organları "fino al novembre del 1805" çalıştı; Kasım 1805'te "all'approssimarsi dell'esercito francese" ek üyeler atandı. Dal Cin s. 95: Pressburg "siglata il 26 dicembre 1805"; fiilî bütünleşme "soltanto il 1° maggio 1806".
- Öneri: KARARLAR 4-5'e göre harita fiilî denetimi göstermeli. Terraferma'nın işgali (Kasım 1805) imzadan ~50 gün önce, Venedik şehrinin devri imzadan sonradır. Günler bulunamadığı için **şimdilik beyan**: kaynak alanına "fiilî: Terraferma Kas 1805, Venedik Oca 1806 (Dal Cin 2019)" yazılsın. Gün bulununca kırılmalar taşınsın.

### E10 — 1813-1814 Avusturya dönüşü: üç ayrı gün, atlasta tek gün [TARİH-HATA + SESSİZ]
- Kimlik: Venedik, Verona, Padova, Udine `avusturya` f **1814-04-16** (Mantova/Schiarino-Rizzino mütarekesi, kaynak EB1911; şehir günü yok diye beyanlı).
- Kaynak: EI "Verona": Regno Italico "fino al **4 febbraio 1814** in cui vi entravano le truppe austriache". EI "Treviso": "Rientrarono gli Austriaci il **1° novembre 1813**". SdV, Gullino, "Istituzioni di cultura": Venedik ablukası "finito solo con l'ingresso degli austriaci in città, il **19 aprile 1814**".
- Öneri: Verona `avusturya` f **1814-02-04** (16 Nisan'dan 71 gün önce, 1814-04-16 maddesi karşılamaz → yeni D2 maddesi gerekir). Venedik f **1814-04-19** (mevcut madde ±30 içinde). Padova/Udine günü bulunamadı; Treviso 1 Kas 1813 emsali ancak beyanla, ya da 1814-04-16 + beyan kalsın.

### E11 — 1848: Terraferma şehirleri San Marco Cumhuriyeti'ne katıldı, haritada yalnız Venedik [SINIR + EKSİK]
- Kimlik: Padova ve Udine `avusturya` 1814 → 1866 kesintisiz; yalnız Venedik `venedik-1848` (1848-03-22 → 1849-08-22).
- Kaynak: SdV, Del Negro, "Il 1848 e dopo": "tra il 24 e il 29 marzo" il merkezleri Verona dışında Manin'in Cumhuriyeti'ne katıldı; "Udine era stata occupata il 23 aprile, Belluno il 5 maggio"; "l'11 giugno Vicenza si arrese". EI "Treviso": Avusturyalılar 23 Mart 1848'de çıktı, 13 Haziran'da kapitülasyonla döndü.
- Öneri: Udine `venedik-1848` 1848-03-24 → **1848-04-23**. 1848-03-24, katılım aralığının ilk günüdür; Udine'nin kendi günü bulunursa o yazılır, beyanlı. Padova `venedik-1848` 1848-03-24 → teslim günü (bulunamadı; Haziran 1848, Vicenza'dan sonra), beyanlı. Udine'nin 23 Nisan dönüşü için D2 maddesi gerekir. Verona doğru (Avusturya'da kaldı).

### E12 — San Marco'nun sonu: imza 22 Ağustos, fiilî devir 24-30 Ağustos 1849 [TARİH]
- Kimlik: Venedik `venedik-1848` t 1849-08-22; madde `olaylar_napolyon_italya_1028.js:33` (ic_not zaten "27 Ağustos" notu taşıyor).
- Kaynak: SdV, Del Negro: Gorzkowski 22 Ağustos'ta yalnız "dilucidazioni" verdi; "Il 24 agosto il governo di Manin trasmise «le attribuzioni governative» al Municipio"; şehir "a poco a poco" Avusturyalılarca "tra il 24 e il 30 agosto" işgal edildi.
- Öneri: KARARLAR 4'e göre sahiplik kırılması **1849-08-24**; künye `venedik-1848` t 1849-08-24. Madde 22 Ağustos imza günü olarak kalsın (2 gün, ±30 içinde). `ic_not`ta 22 imza, 24 devir, 30 Ağustos işgalin tamamlanması yazılsın.

## ④ Karar gereken — Emre'ye öneriyle

1. **Ege Latin aile beylikleri (E1, E2 + 1111 F24/F27):** Tinos/Mikonos (Ghisi, 1390'a dek) ve Kythira (Venier, 1363'e dek) için tek bir "Ege Latin beylikleri" künyesi mi, yoksa her aileye ayrı künye mi? Öneri: tek künye (`harita:` ayrı renk). Miller ile DBI bu yerleri Venedik devletinden ayırıyor; TDV `cuka-adasi` Kythira'yı 1204'ten Venedik sayıyor. İki taraf da beyan edilsin.
2. **1801-1814 Veneto'da fiilî denetim (E7-E10):** Harita fiilî denetimi gösteriyorsa (KARARLAR 5) Verona 1801'de bölünür, Terraferma 1805 Kasımı ile 1813 Kasımı-1814 Şubatı arasında Venedik şehrinden ayrı tarihlerde el değiştirir. Öneri: kaynaklı günleri hemen uygula (Verona 1801-02-09 ve 1814-02-04, Venedik 1814-04-19); günü olmayanları beyanla bekle.
3. **1848 Terraferma (E11):** `venedik-1848` künyesi yalnız Venedik şehri mi, yoksa Mart-Haziran 1848'de ona katılan il merkezleri de mi? Öneri: kaynaklı olduğu için katılanlar da (Del Negro, SdV).
