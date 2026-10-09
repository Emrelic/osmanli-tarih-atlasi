# KAYNAK-PENCERE-1009 — kaynaksızlık ölçümüne PENCERE şartı (ölçüm + diff)

UMIT · 9-10 Ekim 2026 · koordinatör YILDIRIM BAYEZIT'in sevki. Vaka: `KAYNAK-TAVAN-YALANCI-IYILESME-1009.md`.
Tavan ÖNERİLMEDİ (`KAYNAK-TAVAN.json`a dokunulmadı, `--kaynak-tavan-indir` koşturulmadı).

## HÜKÜM: KOŞUL ① — YENİ "HİÇBİRİ" DEFTER SINIRININ ALTINDA, DİFF HAZIR

| taban | eski ölçüt hiçbiri | PENCERELİ hiçbiri | defter (KAYNAK-TAVAN.json) | defter dışı yeni hiçbiri |
|---|---|---|---|---|
| origin/main 9d76de1e (Z5/Z6 İNMEDEN) | 1880 | **1880** (0 kayıt kova değiştirdi) | 1930 | 0 |
| origin/main 85288262 (Z6 İNDİ, e54e60df — iş sürerken indi) | 1834 | **1841** (7 kayıt) | 1930 | 0 |
| worktree: PAKET-v2 + Z6 + Z5 BİRLİKTE (gerçek `--yaz`) | 1441 | **1841** | 1930 | 0 |

1841 ≤ 1930 ⇒ **KOŞUL ①**. Hiçbir tabanda pencere defter dışı bir kayıt üretmiyor ⇒ kapı ötmüyor.

⚠️ AĞAÇ İŞ SIRASINDA GERİDE KALDI (CLAUDE.md "ağacın gerideyse dur"): ölçümler 9d76de1e/212679f1'de başladı;
iş sürerken main'e PAKET-v2 (02f33728) ve Z6 (e54e60df) indi. Durup yeni main'i (85288262) ÖLÇTÜM: hiçbiri
üyeliği benim Z6 worktree ölçümümle BİREBİR aynı (eski 1834 · yeni 1841, küme eşitliği ✓). Diff YENİ main'e karşı
yeniden üretildi; denetle.py, iki sınav ve çıkış kodu yeni main'de yeniden koşturuldu.

## Değişiklik
- `arac/denetle.py`: `_donem_pencerede(p, ufuk)` + `kaynaksizlik_olc(Y, ufuk=None)`. Bir kaydın dönem-içi
  sayılması için kaynağı dolu en az bir `s:` dönemi pencereyle KESİŞMELİ. Kayıt düzeyi `kaynak:` ve `isg:`
  kovası DEĞİŞMEDİ.
- **PENCERE = `girdi.VERI_UFKU`, yoksa `girdi.UFUK`.** ⚠️ PAKET-v2'den sonra `UFUK` 1000-1945 oldu (motor ve
  arayüz penceresi); `VERI_UFKU` 1281-1923. Pencere `UFUK`tan okunsaydı çare HİÇBİR ŞEY çözmezdi. Ölçüldü:
  Z5+Z6 ağacında UFUK penceresiyle hiçbiri 1441, yani penceresiz ölçümle aynı. İlk taslağım `girdi.UFUK`
  okuyordu ve PAKET ağacında boşa düşecekti; sınavın P10 sorusu bunu yakalıyor.
- **Uçlar:** dönem `[f, t)`, pencere `[P0, P1)`; kesişme ⇔ `f < P1` ve `t > P0`. Gerekçe: `girdi.kd_gun`
  (`f <= gun < t`) ve `kd_oku`nun türetilmiş dönemi aynı sözleşmeyi kullanıyor.
  - `t = 1281-01-01`de biten dönem (Z6 sınırı) DIŞARIDA kalır.
  - `f = 1923-10-29`da başlayan dönem (Z5 sınırı) DIŞARIDA kalır.
  - `f` ya da `t` yoksa uç açık sayılır (`""` / `"9999"`, `kd_gun` gibi). Bugün 14.523 dönemin hepsi
    `YYYY-AA-GG` taşıyor; bu kural yalnız sigorta.
- KAYNAK_TAVAN_YOL üstüne YALANCI İYİLEŞME beyanı TARİHÇE biçiminde yazıldı ("artık kapı bunu yapıyor, niye öyle").
  İçeriği:
  - vaka sayıları ve birlikte ölçülen −439;
  - pencerenin göremediği 39 kayıtlık alt sınıf;
  - VERI_UFKU genişlemesinin bir KAPSAM değişimi olduğu (o commit'te indirme koşturulmaz);
  - iki tabandaki ölçüm.
- `denetim/ARAC-KAYNAK-TAVAN-SINAV-1004.py`: node bağımsız okuyucusu (S1) aynı pencere tanımına getirildi.
  ⚠️ BU ŞARTTI: güncellenmeden Z5+Z6 ağacında S1 ve S1b DÜŞTÜ (node 860/1441 · py 460/1841). Uçlar girdi'den
  ortam değişkeniyle geçiyor; kesişme kuralı node'da ayrıca yazılı.
- YENİ: `denetim/ARAC-KAYNAK-PENCERE-SINAV-1009.py`:
  - P1-P10: sözleşme ve negatif kontrol
  - R1-R3: gerçek veri
  - G0-G2: GERÇEK koşu

## Z5 + Z6 BİRLİKTE — gerçek etki (ilk kez birlikte ölçüldü)
Yöntem:
1. PAKET-v2 `-C1` ile uygulandı (`git diff --stat HEAD`: 17 dosya + 1 yeni ✓).
2. Z6 `--yaz` (80 kayıt uygulandı; bayat-taban kapısı "80 değişim TAZE" dedi).
3. Z5-KOORD-v2 uygulandı (1 dosya ✓), ardından `--yaz`.

**Araç: main'deki `_sahiplik_uygula.py` (cefc73bb). BAYAT-TABAN kapısı bu sürümün İÇİNDE; SAHIPLIK-BAYAT-TABAN
diff'i ayrıca uygulanmadı.**

⚠️ İlk denemede Z5 `--yaz` **çıkış 3** verdi: "KAPI ÖLÇEMEDİ — hedef dosya COMMİTLENMEMİŞ değişiklik taşıyor".
Sebep, Z6'nın yazdığı 10 dosyaydı; hiçbir dosya yazılmadı. Bu yüzden ölçümü **atılabilir bir yerel klonda** yaptım:
- `git clone --shared` ile klon açıldı;
- Z6 klonun içinde geçici bir commit oldu;
- klon silindi; depoya ve dallara hiçbir şey girmedi.

Bunu açıkça yazıyorum çünkü koordinatör iki yamayı aynı ağaçta indirirken aynı kapıya takılacak: Z6
commit'lenmeden Z5 `--yaz` koşmaz.

| | eski ölçüt | PENCERELİ |
|---|---|---|
| Z6 yalnız | 1880 → 1834 (−46) | 1880 → 1841 (−39) |
| Z5 yalnız | 1880 → 1462 (−418) | 1880 → 1880 (**0**) |
| **Z5 + Z6 birlikte** | 1880 → **1441 (−439)** | 1880 → **1841 (−39)** |

- **−464 öngörüsü TUTMADI: gerçek düşüş −439.** 25 kayıt iki yamadan da ufuk dışı kaynak alıyor (örtüşme,
  liste A3). Ayrı ayrı ölçülen kümelerin birleşimi birlikte ölçülen kümeye EŞİT (fark 0/0); sapmanın tamamı bu
  örtüşmeden geliyor.
- 🔴 **Z5×Z6 ETKİLEŞİMİ: birlikte uygulamada Z5'in 63 kaydı İNMEDİ** (`kapsam-daraldi`; 3923 kayıt uygulandı,
  Z5 yalnızken bu sayı 3986'ydı).
  - Sebep: Z5 yaması Z6 öncesi tabandan üretilmiş. Z6'nın 1281 öncesine çektiği `f`leri 1281-01-01'e geri
    daraltacaktı ve araç bunu reddetti.
  - Örnekler: İstanbul 1261-07-25→1281-01-01 · Konya 1097→1281 · Bağdat · Tebriz · Trabzon · Delhi …
    (63 adın tamamı aşağıda, liste A4'te).
  - ⇒ **Z6 main'e indiğine göre Z5 yaması Z6'lı tabandan YENİDEN üretilmeli.** Üretilmezse bu 63 yer 1923-1945'i
    almaz. Bu konu kapsamım dışında; yalnız bildiriyorum.
- Pencereli ölçümde birlikte etki, Z6'nın tek başına etkisine eşit (küme eşitliği ✓). Z5 hiçbir kaydı taşıyamıyor.

### Pencerenin GÖRMEDİĞİ alt sınıf — 39 kayıt (dürüst sınır)
- **Ne oldu:** Z6 bazı pencere içi dönemlerin `f`sini 1281 öncesine çekti ve o döneme kaynak yazdı. Kaynak metni
  hep "f 1281-01-01'den geri çekildi — TDV …" diye başlıyor.
- **Neden kaçıyor:** dönem pencereye TAŞIYOR (ör. İstanbul bizans [1261-07-25, 1453-05-29)), bu yüzden şart onu
  dönem-içi sayıyor. Ama kaynak YALNIZ 1281 öncesi `f`yi tarihliyor; dönemin pencere içindeki ucu (`t`) kaynaksız
  duruyor. Kaynağın dönemin hangi ucunu tarihlediği veride yapısal olarak yazılı değil; pencere bunu ayırt edemez.
- **Bugünkü durum:** Z6 main'e indi; bu 39 kayıt 1834'ün içinde ve pencere onları 1841'e taşımıyor. Tam liste A2'de.
- **Çare seçenekleri** (karar koordinatörde, YAZILMADI):
  - (a) Z6 geri çekme kaynağını ayrı bir alana yazar (ör. `kaynak_f`) ve ölçüm o alanı pencere içi saymaz;
  - (b) bu 39 kayıt tavan yorumunda adıyla beyan edilir.
  - Önerim (a): (b) bir yorumdur, kapı değildir.

## Kova değiştiren kayıtlar (ADIYLA)
- **Z5/Z6 öncesi main (9d76de1e): 0 kayıt.**
- **Bugünkü main (85288262, Z6 indi): 7 kayıt**, dönem-içi → hiçbiri. Yedisi de hiçbiri DEFTERİNDE. Kaynaklı
  dönemlerinin HEPSİ `t = 1281-01-01`de bitiyor:

  | kayıt | kaynaklı dönemler |
  |---|---|
  | Kayseri | 1143–1169 danismendli · 1169–1281 selcuklu |
  | Kırşehir | 1173–1281 selcuklu |
  | Sinop | 1214–1259 selcuklu · 1259–1266 trabzon-rum · 1266–1281 selcuklu |
  | Sivas | 1184–1281 selcuklu |
  | Tokat | 1074–1175 danismendli · 1175–1281 selcuklu |
  | Van | 1232–1281 selcuklu |
  | Çankırı | 1142–1281 selcuklu |

- **Z5+Z6 birlikte: 400 kayıt** (393'ü yalnız Z5'ten · 7'si hem Z5 hem Z6'dan · 0'ı yalnız Z6'dan). Tam liste A1'de.

## denetle.py çıkış kodu (PYTHONHASHSEED=0)
| taban | önce | sonra | fark |
|---|---|---|---|
| main 9d76de1e | 2 | 2 | çıktı BİREBİR aynı (diff boş) |
| main 85288262 (Z6 indi) | 2 | 2 | yalnız kaynak satırı değişti: hiçbiri 1834→1841, dönem-içi 467→460; iki hâlde de ✓ |
| Z5+Z6 ağacı | 1 | 1 | 1'in sebebi Değişmez 2s (208 açık, tavan 181) ve 2i (11 açık, tavan 1): Z5/Z6'nın kendi borcu. Kaynak satırı iki hâlde de ✓ (1441 → 1841) |

Değişiklik hiçbir tabanda çıkış kodunu DEĞİŞTİRMİYOR. UMIT'teki 2, D8'in ölçülememesinden geliyor
(`devletler_harita.js` yok); bu normal.

## İki yönlü sınav — `py denetim/ARAC-KAYNAK-PENCERE-SINAV-1009.py`
| ağaç | sonuç |
|---|---|
| main 9d76de1e + yama | 16/16 (P10 bu ağaçta sorulamaz: UFUK = VERI_UFKU) |
| Z5+Z6 ağacı + yama | 17/17 — R2 "taşınan 400", R3 "yanlış taşınan 0", G0 çıkış 1 (bilgi) |
| **main 85288262 + yama (son hâl)** | **17/17** — taşınan 7 (adları yukarıda) |
| main + YAMASIZ denetle (negatif kontrol) | P3, P4, P6, P7 ✗, ardından `ufuk` parametresi yok diye TypeError — sınavın dişi var |

- **Yön A (yalancı iyileşme yakalanıyor):**
  - P3/P4: yapay kayıtla.
  - R1-R3: gerçek Z5+Z6 verisiyle (400 kayıt, adlarıyla basılıyor).
  - G2: GERÇEK koşu. Bir hiçbiri kaydına YALNIZ 1923 sonrası kaynaklı bir dönem eklenir; hiçbiri sayısı
    DEĞİŞMEZ, satır ✓.
- **Yön B (gerçek iyileşme görünüyor):**
  - P2/P7: yapay kayıtla.
  - G1: GERÇEK koşu. Absu'nun pencere içi dönemine kaynak yazılır; hiçbiri −1, YENİ satırı yok, kapı susuyor.
- **G0 düzeltmesi:** ilk sürümde G0 "çıkış 1 DEĞİL" diye soruyordu ve Z5+Z6 ağacında 2s/2i yüzünden düştü. Bu,
  kaynak kapısıyla ilgisiz bir bağımlılıktı. G0 artık kaynak satırının ✓ olmasını ve sayının bellek ölçümüyle
  eşitliğini soruyor; çıkış kodunu yalnız bilgi olarak basıyor.
- **P1 bilerek kırılgan:** VERI_UFKU genişlerse P1 düşer. Genişleme o commit'te beyan edilmeli.

## Gerileme — `ARAC-KAYNAK-TAVAN-SINAV-1004.py`
| ağaç | yamasız | yamalı |
|---|---|---|
| main 9d76de1e | 23/24 (S18 düşer) | 23/24 (S18 düşer) |
| main 85288262 | — | 23/24 (S18 düşer) |
| Z5+Z6 | 20/24 (S18, S12, S13, S20 düşer) | 20/24 (aynı dördü) |

Z5+Z6 yamalı satırında S1/S1b node güncellemesi sayesinde geçiyor; güncelleme olmadan yamalı ağaçta S1 ve S1b de
düşüyordu.

- **S18 yamadan BAĞIMSIZ; önceden de düşüyordu.**
  - Sınavın hedefi d0, yani ilk dönem-içi kayıt (`yerlesimler.js|Aden`). Bu kayıt hiçbiri DEFTERİNDE: defter
    1930'da duruyor, bugünkü ölçüm 1880/1834; 50'den fazla kayıt defterden çıkmış ama defter inmemiş.
  - Dönem kaynağı silinince kayıt defterdeki yerine döner ve "YENİ" sayılmaz.
  - Kusur sınavın hedef seçiminde: hedef, defterde OLMAYAN bir dönem-içi kayıt olmalı. Kapsam dışı olduğu için
    düzeltmedim.
- **Z5+Z6'da S12/S13/S20:** bu GERÇEK koşu soruları "çıkış 1 değil" ve "öteki kapılar sessiz" koşulunu arıyor;
  2s/2i yüzünden düşüyorlar. Yamasız ağaçta da aynı şekilde düşüyorlar, yani sebep yama değil Z5/Z6.
- **Yan not:** 1004 sınavı iki ağaçta PARALEL koşunca S14 "artık geçici: 1" diye düştü (ortak %TEMP% yarışı);
  tek başına koşunca geçti. Bu sınavlar paralel koşturulmamalı.

## Ölçtüm · bulamadım · istiyorum
- **Ölçtüm:**
  - üç taban × önce/sonra;
  - Z5, Z6 ve Z5+Z6 gerçek `--yaz` ile (Z5+Z6 ilk kez birlikte);
  - kova değiştiren kayıtlar adıyla (0 · 7 · 400);
  - pencerenin göremediği 39 kayıtlık alt sınıf ve 25 örtüşme, adıyla;
  - Z5×Z6 etkileşiminde inmeyen 63 kayıt;
  - iki sınav, üç ağaçta.
- **Bulamadım:**
  - kaynağın dönemin HANGİ ucunu tarihlediğini veriden okumanın yapısal bir yolu (39 kayıt için) — `bulunamadı`;
  - Z5'in inmeyen 63 kaydı için Z6'lı tabandan yeniden üretilmiş bir yama — `bulunamadı`.
- **İstiyorum:**
  1. `KAYNAK-PENCERE-1009.diff`in inişi. Main'deki Z6 yüzünden 7 kayıt bugün hiçbiri'ne döner; yedisi de
     defterde olduğu için kapı ötmez, tavan değişmez.
  2. Z5 yamasının Z6'lı tabandan yeniden üretilmesi (63 kayıt).
  3. 39 kayıt için (a) ya da (b) kararı.
  4. Z5 ile Z6 aynı ağaçta indirilecekse Z6'nın ÖNCE commit'lenmesi (yoksa bayat-taban kapısı çıkış 3 verir).

YENİ DOSYALAR: denetim/KAYNAK-PENCERE-1009.diff · denetim/KAYNAK-PENCERE-1009.md · denetim/ARAC-KAYNAK-PENCERE-SINAV-1009.py (diff'in içinde)

---
## Ek — tam listeler
### A1. Z5+Z6 birlikte — pencerenin TUTTUĞU (eski ölçütte çıkıp yenide hiçbiri'nde kalan) 400 kayıt

Biçim: `dosya|ad` — kaynaklı dönemler [f, t, d] — hangi yamadan

- `yerlesimler.js|Absu (Hypsu)` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Adana` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Adapazarı` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Addis` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler.js|Adranos (Orhaneli)` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Ahvaz` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Akhisar (Pamukova)` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Akyazı` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Akçahisar (Kruja)` — [['1939-04-07', '1944-11-29', 'italya'], ['1944-11-29', '1945-09-02', 'arnavutluk-halk-cumhuriyeti']] — Z5
- `yerlesimler.js|Akçakoca` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Akşehir` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Amasra` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Amasya` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Anamur` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Armutlu` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Avlonya` — [['1939-04-07', '1944-11-29', 'italya'], ['1944-11-29', '1945-09-02', 'arnavutluk-halk-cumhuriyeti']] — Z5
- `yerlesimler.js|Ayasuluk (Selçuk)` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Aydos Kalesi` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Aydın` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Ayvalık` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Balat (Palatia)` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Balıkesir` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Banaluka` — [['1941-04-10', '1945-05-31', 'hirvatistan-bagimsiz'], ['1945-05-31', '1945-09-02', 'yugoslavya']] — Z5
- `yerlesimler.js|Bartın` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Behbehân` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Bem` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Bempûr` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Bender Abbas (Gamrûn)` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Bender Enzeli` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Bender Lengeh` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Bender Rîg` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Berat` — [['1939-04-07', '1944-11-29', 'italya'], ['1944-11-29', '1945-09-02', 'arnavutluk-halk-cumhuriyeti']] — Z5
- `yerlesimler.js|Bergama` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Berlin` — [['1945-06-05', '1945-09-02', 'almanya-muttefik-isgali']] — Z5
- `yerlesimler.js|Beyşehir` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Biga` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Bilecik` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Birgi` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Bistâm` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Bocnûrd` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Bodrum` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Bolu` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Bozcaada` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Broumov (Braunau)` — [['1938-10-01', '1945-05-08', 'almanya'], ['1945-05-08', '1945-09-02', 'cekoslovakya']] — Z5
- `yerlesimler.js|Burdur` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Bursa` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Buşehr` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Bârfurûş (Bâbil)` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Bîrcend` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Cehrom` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Cidde` — [['1925-12-22', '1932-09-18', 'suud-ucuncu'], ['1932-09-18', '1945-09-02', 'suudi-arabistan']] — Z5
- `yerlesimler.js|Câsk` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Cîruft` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Cübeyl` — [['1932-09-18', '1945-09-02', 'suudi-arabistan']] — Z5
- `yerlesimler.js|Datça` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Devrek` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Dimbos` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Dir'iye (Necid)` — [['1932-09-18', '1945-09-02', 'suudi-arabistan']] — Z5
- `yerlesimler.js|Dizfûl` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Domaniç` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Dresden` — [['1945-06-05', '1945-09-02', 'almanya-muttefik-isgali']] — Z5
- `yerlesimler.js|Dâmgan` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Dârâb` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Ebha (Asir)` — [['1932-09-18', '1945-09-02', 'suudi-arabistan']] — Z5
- `yerlesimler.js|Ebrekûh` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Edirne` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Edremit` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Eflani` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Elmalı` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Emet (Eğrigöz)` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Erdek` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Erdekân` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Erdistan` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Ermenek` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Erâk (Sultânâbâd)` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Esferâyin` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Eskişehir` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Esterâbâd (Gürgân)` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Eğirdir` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Eşref (Behşehr)` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Ferahâbâd` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Fesâ` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Fethiye (Makri)` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Finike` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Firûzâbâd` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Foça (Foča)` — [['1941-04-10', '1945-05-31', 'hirvatistan-bagimsiz'], ['1945-05-31', '1945-09-02', 'yugoslavya']] — Z5
- `yerlesimler.js|Frankfurt` — [['1945-06-05', '1945-09-02', 'almanya-muttefik-isgali']] — Z5
- `yerlesimler.js|Gebze` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Gemlik (Kios)` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Geyve` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Gondar` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler.js|Gulpâygân` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Gölyazı (Apollonia)` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Halepçe` — [['1926-06-05', '1945-09-02', 'irak-kralligi']] — Z5
- `yerlesimler.js|Hamburg` — [['1945-06-05', '1945-09-02', 'almanya-muttefik-isgali']] — Z5
- `yerlesimler.js|Harar` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler.js|Harmankaya` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Havîza` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Hereke` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Hotin` — [['1940-06-28', '1945-09-02', 'sovyet-rusya']] — Z5
- `yerlesimler.js|Hâş` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Hürmüz Adası` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Jeseník (Freiwaldau)` — [['1938-10-01', '1945-05-08', 'almanya'], ['1945-05-08', '1945-09-02', 'cekoslovakya']] — Z5
- `yerlesimler.js|Kandıra` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Kanina` — [['1939-04-07', '1944-11-29', 'italya'], ['1944-11-29', '1945-09-02', 'arnavutluk-halk-cumhuriyeti']] — Z5
- `yerlesimler.js|Karacahisar` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Karadeniz Ereğli` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Karamürsel` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Karatigin` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Karaçepüş` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Kastamonu` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Katîf` — [['1932-09-18', '1945-09-02', 'suudi-arabistan']] — Z5
- `yerlesimler.js|Kayseri` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5+Z6
- `yerlesimler.js|Kazvin` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Kaş (Antiphellos)` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Kelât-ı Nâdirî` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Kestel` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Keşan` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Kilitbahir` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Kirmasti (M.Kemalpaşa)` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Kite (Kete)` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Kiş (Kish)` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Kişm (Qeshm)` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Konurapa (Düzce)` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Kulacahisar` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Kum` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Kuşadası` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Kâin` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Kâzerûn` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Kâşân` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Köln` — [['1945-06-05', '1945-09-02', 'almanya-muttefik-isgali']] — Z5
- `yerlesimler.js|Köprühisar (Yenişehir)` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Kûçân` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Kırklareli` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Kırşehir` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5+Z6
- `yerlesimler.js|Ladik (Amasya)` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Lahsa` — [['1932-09-18', '1945-09-02', 'suudi-arabistan']] — Z5
- `yerlesimler.js|Leblebicihisar` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Lefke (Osmaneli)` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Livno (İhlevne)` — [['1941-04-10', '1945-05-31', 'hirvatistan-bagimsiz'], ['1945-05-31', '1945-09-02', 'yugoslavya']] — Z5
- `yerlesimler.js|Lâhîcan` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Lâr` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Lüleburgaz` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Malkara` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Marmara Adası` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Marmaracık` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Marmaris` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Medine` — [['1925-12-05', '1932-09-18', 'suud-ucuncu'], ['1932-09-18', '1945-09-02', 'suudi-arabistan']] — Z5
- `yerlesimler.js|Mekece` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Mekke` — [['1924-10-16', '1932-09-18', 'suud-ucuncu'], ['1932-09-18', '1945-09-02', 'suudi-arabistan']] — Z5
- `yerlesimler.js|Merzifon` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Meşhed` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Mihaliç (Karacabey)` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Milas` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Mudanya` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Mudurnu` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Muhammere` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Muğla` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Mînâb` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Münih` — [['1945-06-05', '1945-09-02', 'almanya-muttefik-isgali']] — Z5
- `yerlesimler.js|Necid içi` — [['1932-09-18', '1945-09-02', 'suudi-arabistan']] — Z5
- `yerlesimler.js|Niksar` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Nâin` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Nîşâbur` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Ordu (Bayramlı)` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Osmancık` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Pelekanon (Eskihisar)` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Rafsencân` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Reşt` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Riga` — [['1940-08-06', '1945-09-02', 'sovyet-rusya']] — Z5
- `yerlesimler.js|Riyad` — [['1932-09-18', '1945-09-02', 'suudi-arabistan']] — Z5
- `yerlesimler.js|Râmhürmüz` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Safranbolu` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Samandıra` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Samsun` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Saraybosna` — [['1941-04-10', '1945-05-31', 'hirvatistan-bagimsiz'], ['1945-05-31', '1945-09-02', 'yugoslavya']] — Z5
- `yerlesimler.js|Sebzevâr` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Senendec (Sine)` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Seydişehir` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Silifke` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Simav` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Sinop` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5+Z6
- `yerlesimler.js|Sircân` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Sivas` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5+Z6
- `yerlesimler.js|Siverek` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Srebrenik` — [['1941-04-10', '1945-05-31', 'hirvatistan-bagimsiz'], ['1945-05-31', '1945-09-02', 'yugoslavya']] — Z5
- `yerlesimler.js|Sârî` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Sâve` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Söke` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Söğüt` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Tahran` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Tarsus` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Tavşanlı` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Tebbes` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Tebük` — [['1925-12-22', '1932-09-18', 'suud-ucuncu'], ['1932-09-18', '1945-09-02', 'suudi-arabistan']] — Z5
- `yerlesimler.js|Terme` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Tire` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Tokat` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5+Z6
- `yerlesimler.js|Travnik` — [['1941-04-10', '1945-05-31', 'hirvatistan-bagimsiz'], ['1945-05-31', '1945-09-02', 'yugoslavya']] — Z5
- `yerlesimler.js|Turbet-i Câm` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Turbet-i Haydariye` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Turşiz (Kâşmer)` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Tâif` — [['1924-09-08', '1932-09-18', 'suud-ucuncu'], ['1932-09-18', '1945-09-02', 'suudi-arabistan']] — Z5
- `yerlesimler.js|Tûs` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Ukayr (Uceyr)` — [['1932-09-18', '1945-09-02', 'suudi-arabistan']] — Z5
- `yerlesimler.js|Ulubat` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Uluborlu` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Uşak` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Van` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5+Z6
- `yerlesimler.js|Yalova` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Yalvaç` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Yarhisar` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Yayça (Jajce)` — [['1941-04-10', '1945-05-31', 'hirvatistan-bagimsiz'], ['1945-05-31', '1945-09-02', 'yugoslavya']] — Z5
- `yerlesimler.js|Yenbu` — [['1925-12-22', '1932-09-18', 'suud-ucuncu'], ['1932-09-18', '1945-09-02', 'suudi-arabistan']] — Z5
- `yerlesimler.js|Yenişehir (Bursa)` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Zerenc (Sîstan)` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Âmül` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Çanakkale` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Çankırı` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5+Z6
- `yerlesimler.js|Çarşamba` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Çeşme` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Çimpe` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Çorlu` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Çorum` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|Çâhbahâr` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler.js|Ünye` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|İlbasan (Elbasan)` — [['1939-04-07', '1944-11-29', 'italya'], ['1944-11-29', '1945-09-02', 'arnavutluk-halk-cumhuriyeti']] — Z5
- `yerlesimler.js|İmralı Adası` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|İmroz` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|İnegöl` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|İpsala` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|İzmir` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler.js|İzvornik (Zvornik)` — [['1941-04-10', '1945-05-31', 'hirvatistan-bagimsiz'], ['1945-05-31', '1945-09-02', 'yugoslavya']] — Z5
- `yerlesimler.js|İşkodra` — [['1939-04-07', '1944-11-29', 'italya'], ['1944-11-29', '1945-09-02', 'arnavutluk-halk-cumhuriyeti']] — Z5
- `yerlesimler.js|Şüşter` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler_afrika.js|Adigrat` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_afrika.js|Adua` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_afrika.js|Aksum` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_afrika.js|Alula` — [['1927-01-01', '1945-09-02', 'italya']] — Z5
- `yerlesimler_afrika.js|Ankober` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_afrika.js|Ayl` — [['1927-01-01', '1945-09-02', 'italya']] — Z5
- `yerlesimler_afrika.js|Bahır Dar` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_afrika.js|Bender Kāsım (Bosaso)` — [['1927-01-01', '1945-09-02', 'italya']] — Z5
- `yerlesimler_afrika.js|Cimma (Jiren)` — [['1933-01-01', '1936-05-09', 'habesistan'], ['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_afrika.js|Cîcîga` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_afrika.js|Debre Berhan` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_afrika.js|Debre Tabor` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_afrika.js|Dese` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_afrika.js|Galkayo` — [['1927-01-01', '1945-09-02', 'italya']] — Z5
- `yerlesimler_afrika.js|Garove` — [['1927-01-01', '1945-09-02', 'italya']] — Z5
- `yerlesimler_afrika.js|Hafun` — [['1927-01-01', '1945-09-02', 'italya']] — Z5
- `yerlesimler_afrika.js|Lalibela` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_afrika.js|Mekelle` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_afrika.js|Metemma` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_afrika.js|Obbiya` — [['1927-01-01', '1945-09-02', 'italya']] — Z5
- `yerlesimler_afrika.js|Sodo (Vollayta)` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_afrika.js|Sokota` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_afrika.js|Yirgalem (Sidamo)` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_afrika.js|Şire` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_asya.js|Aigun` — [['1932-03-09', '1945-08-31', 'mancukuo'], ['1945-08-31', '1945-09-02', 'cin-cumhuriyeti']] — Z5
- `yerlesimler_asya.js|Angkor (Siem Reap)` — [['1941-05-09', '1945-09-02', 'siyam-chakri']] — Z5
- `yerlesimler_asya.js|Battambang` — [['1941-05-09', '1945-09-02', 'siyam-chakri']] — Z5
- `yerlesimler_asya.js|Cehol (Chengde)` — [['1933-03-04', '1945-08-31', 'mancukuo'], ['1945-08-31', '1945-09-02', 'cin-cumhuriyeti']] — Z5
- `yerlesimler_asya.js|Champasak` — [['1941-05-09', '1945-09-02', 'siyam-chakri']] — Z5
- `yerlesimler_asya.js|Cilin (Jilin)` — [['1932-03-09', '1945-08-31', 'mancukuo'], ['1945-08-31', '1945-09-02', 'cin-cumhuriyeti']] — Z5
- `yerlesimler_asya.js|Harbin` — [['1932-03-09', '1945-08-31', 'mancukuo'], ['1945-08-31', '1945-09-02', 'cin-cumhuriyeti']] — Z5
- `yerlesimler_asya.js|Karakurum` — [['1924-11-26', '1945-09-02', 'mogolistan-halk-cumhuriyeti']] — Z5
- `yerlesimler_asya.js|Kobdo (Hovd)` — [['1924-11-26', '1945-09-02', 'mogolistan-halk-cumhuriyeti']] — Z5
- `yerlesimler_asya.js|Liaoyang` — [['1932-03-09', '1945-08-31', 'mancukuo'], ['1945-08-31', '1945-09-02', 'cin-cumhuriyeti']] — Z5
- `yerlesimler_asya.js|Mukden (Şenyang)` — [['1932-03-09', '1945-08-31', 'mancukuo'], ['1945-08-31', '1945-09-02', 'cin-cumhuriyeti']] — Z5
- `yerlesimler_asya.js|Ningguta` — [['1932-03-09', '1945-08-31', 'mancukuo'], ['1945-08-31', '1945-09-02', 'cin-cumhuriyeti']] — Z5
- `yerlesimler_asya.js|Qiqihar` — [['1932-03-09', '1945-08-31', 'mancukuo'], ['1945-08-31', '1945-09-02', 'cin-cumhuriyeti']] — Z5
- `yerlesimler_asya.js|Uliastay` — [['1924-11-26', '1945-09-02', 'mogolistan-halk-cumhuriyeti']] — Z5
- `yerlesimler_asya.js|Urga (Ulan Batur)` — [['1924-11-26', '1945-09-02', 'mogolistan-halk-cumhuriyeti']] — Z5
- `yerlesimler_avrupa.js|Aachen` — [['1945-06-05', '1945-09-02', 'almanya-muttefik-isgali']] — Z5
- `yerlesimler_avrupa.js|Augsburg` — [['1945-06-05', '1945-09-02', 'almanya-muttefik-isgali']] — Z5
- `yerlesimler_avrupa.js|Bremen` — [['1945-06-05', '1945-09-02', 'almanya-muttefik-isgali']] — Z5
- `yerlesimler_avrupa.js|Dortmund` — [['1945-06-05', '1945-09-02', 'almanya-muttefik-isgali']] — Z5
- `yerlesimler_avrupa.js|Erfurt` — [['1945-06-05', '1945-09-02', 'almanya-muttefik-isgali']] — Z5
- `yerlesimler_avrupa.js|Flensburg` — [['1945-06-05', '1945-09-02', 'almanya-muttefik-isgali']] — Z5
- `yerlesimler_avrupa.js|Freiburg` — [['1945-06-05', '1945-09-02', 'almanya-muttefik-isgali']] — Z5
- `yerlesimler_avrupa.js|Hannover` — [['1945-06-05', '1945-09-02', 'almanya-muttefik-isgali']] — Z5
- `yerlesimler_avrupa.js|Kassel` — [['1945-06-05', '1945-09-02', 'almanya-muttefik-isgali']] — Z5
- `yerlesimler_avrupa.js|Kiel` — [['1945-06-05', '1945-09-02', 'almanya-muttefik-isgali']] — Z5
- `yerlesimler_avrupa.js|Konstanz` — [['1945-06-05', '1945-09-02', 'almanya-muttefik-isgali']] — Z5
- `yerlesimler_avrupa.js|Leipzig` — [['1945-06-05', '1945-09-02', 'almanya-muttefik-isgali']] — Z5
- `yerlesimler_avrupa.js|Lübeck` — [['1945-06-05', '1945-09-02', 'almanya-muttefik-isgali']] — Z5
- `yerlesimler_avrupa.js|Magdeburg` — [['1945-06-05', '1945-09-02', 'almanya-muttefik-isgali']] — Z5
- `yerlesimler_avrupa.js|Mainz` — [['1945-06-05', '1945-09-02', 'almanya-muttefik-isgali']] — Z5
- `yerlesimler_avrupa.js|Münster` — [['1945-06-05', '1945-09-02', 'almanya-muttefik-isgali']] — Z5
- `yerlesimler_avrupa.js|Nürnberg` — [['1945-06-05', '1945-09-02', 'almanya-muttefik-isgali']] — Z5
- `yerlesimler_avrupa.js|Regensburg` — [['1945-06-05', '1945-09-02', 'almanya-muttefik-isgali']] — Z5
- `yerlesimler_avrupa.js|Rostock` — [['1945-06-05', '1945-09-02', 'almanya-muttefik-isgali']] — Z5
- `yerlesimler_avrupa.js|Stralsund` — [['1945-06-05', '1945-09-02', 'almanya-muttefik-isgali']] — Z5
- `yerlesimler_avrupa.js|Stuttgart` — [['1945-06-05', '1945-09-02', 'almanya-muttefik-isgali']] — Z5
- `yerlesimler_avrupa.js|Trier` — [['1945-06-05', '1945-09-02', 'almanya-muttefik-isgali']] — Z5
- `yerlesimler_avrupa.js|Ulm` — [['1945-06-05', '1945-09-02', 'almanya-muttefik-isgali']] — Z5
- `yerlesimler_avrupa.js|Würzburg` — [['1945-06-05', '1945-09-02', 'almanya-muttefik-isgali']] — Z5
- `yerlesimler_ek11.js|Narva` — [['1940-08-06', '1945-09-02', 'sovyet-rusya']] — Z5
- `yerlesimler_ek11.js|Pärnu` — [['1940-08-06', '1945-09-02', 'sovyet-rusya']] — Z5
- `yerlesimler_ek11.js|Tallinn (Reval)` — [['1940-08-06', '1945-09-02', 'sovyet-rusya']] — Z5
- `yerlesimler_ek19.js|Bulgan` — [['1924-11-26', '1945-09-02', 'mogolistan-halk-cumhuriyeti']] — Z5
- `yerlesimler_ek19.js|Dariganga` — [['1924-11-26', '1945-09-02', 'mogolistan-halk-cumhuriyeti']] — Z5
- `yerlesimler_ek19.js|Halhın Gol (Buir Nur)` — [['1924-11-26', '1945-09-02', 'mogolistan-halk-cumhuriyeti']] — Z5
- `yerlesimler_ek19.js|Kerulen (Çoybalsan)` — [['1924-11-26', '1945-09-02', 'mogolistan-halk-cumhuriyeti']] — Z5
- `yerlesimler_ek19.js|Mörön (Hövsgöl)` — [['1924-11-26', '1945-09-02', 'mogolistan-halk-cumhuriyeti']] — Z5
- `yerlesimler_ek19.js|Öndörhaan (Hentiy)` — [['1924-11-26', '1945-09-02', 'mogolistan-halk-cumhuriyeti']] — Z5
- `yerlesimler_ek2.js|Boğaziçi (Rumeli yakası)` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler_ek2.js|Koniçe (Konjic)` — [['1941-04-10', '1945-05-31', 'hirvatistan-bagimsiz'], ['1945-05-31', '1945-09-02', 'yugoslavya']] — Z5
- `yerlesimler_ek2.js|Visoko` — [['1941-04-10', '1945-05-31', 'hirvatistan-bagimsiz'], ['1945-05-31', '1945-09-02', 'yugoslavya']] — Z5
- `yerlesimler_ek21.js|Bayanhongor` — [['1924-11-26', '1945-09-02', 'mogolistan-halk-cumhuriyeti']] — Z5
- `yerlesimler_ek21.js|Gobi-Altay (Yösönbulag)` — [['1924-11-26', '1945-09-02', 'mogolistan-halk-cumhuriyeti']] — Z5
- `yerlesimler_ek21.js|Ömnögovi (Dalanzadgad)` — [['1924-11-26', '1945-09-02', 'mogolistan-halk-cumhuriyeti']] — Z5
- `yerlesimler_ek23.js|Behramkale (Assos)` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler_ek23.js|Beykoz` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler_ek23.js|Saroz kuzey kıyısı` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler_ek23.js|Şarköy` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler_ek24.js|Demirköy` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler_ek24.js|Dereköy (Kırklareli)` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler_ek24.js|Havsa` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler_ek24.js|Kofçaz` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler_ek24.js|Lalapaşa` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler_ek24.js|Meriç (İpsala kuzeyi)` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler_ek24.js|Uzunköprü` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler_ek25.js|Suruç` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler_ek26.js|Hanak` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler_ek26.js|Posof` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler_ek26.js|Şavşat` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler_ek27.js|Artvin` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler_ek27.js|Sarp` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler_ek28.js|Arhavi` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler_ek28.js|Borçka` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler_ek29.js|Silivri` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler_ek29.js|Vize` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler_ek29.js|Üsküdar` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler_ek29.js|İshaklı` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler_ek7.js|Cēsis (Wenden)` — [['1940-08-06', '1945-09-02', 'sovyet-rusya']] — Z5
- `yerlesimler_ek7.js|Daugavpils (Dünaburg)` — [['1940-08-06', '1945-09-02', 'sovyet-rusya']] — Z5
- `yerlesimler_ek8.js|Petsamo (Peçenga)` — [['1944-09-19', '1945-09-02', 'sovyet-rusya']] — Z5
- `yerlesimler_ek_ferhadpasa.js|Bargiri (Muradiye)` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler_ek_ferhadpasa.js|Hoşap (Mahmudi)` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler_ek_ferhadpasa.js|Kotur` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler_ek_ferhadpasa.js|Çölemerik (Hakkâri)` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler_gdasya.js|Sisophon` — [['1941-05-09', '1945-09-02', 'siyam-chakri']] — Z5
- `yerlesimler_h2_afrika.js|Alamata` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_h2_afrika.js|Ambo` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_h2_afrika.js|Arba Minç` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_h2_afrika.js|Asella` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_h2_afrika.js|Asosa` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_h2_afrika.js|Avaş` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_h2_afrika.js|Ağere Maryam` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_h2_afrika.js|Bedele` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_h2_afrika.js|Bender Beyla` — [['1927-01-01', '1945-09-02', 'italya']] — Z5
- `yerlesimler_h2_afrika.js|Bure (Gocam)` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_h2_afrika.js|Bâtî` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_h2_afrika.js|Cinka` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_h2_afrika.js|Dagahbûr` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_h2_afrika.js|Debre Markos` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_h2_afrika.js|Debârek` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_h2_afrika.js|Dembîdollo` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_h2_afrika.js|Dilla` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_h2_afrika.js|Dire Dava` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_h2_afrika.js|Dolo Odo` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_h2_afrika.js|Dusa Mareb` — [['1927-01-01', '1945-09-02', 'italya']] — Z5
- `yerlesimler_h2_afrika.js|Filtu` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_h2_afrika.js|Fiçe` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_h2_afrika.js|Gambela` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_h2_afrika.js|Gimbî` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_h2_afrika.js|Ginir` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_h2_afrika.js|Goba` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_h2_afrika.js|Gode` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_h2_afrika.js|Gore` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_h2_afrika.js|Hosaena` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_h2_afrika.js|Kandala` — [['1927-01-01', '1945-09-02', 'italya']] — Z5
- `yerlesimler_h2_afrika.js|Kebrî Dehar` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_h2_afrika.js|Kelâfo` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_h2_afrika.js|Mega` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_h2_afrika.js|Mekdelâ` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_h2_afrika.js|Mizan Teferi` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_h2_afrika.js|Mota` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_h2_afrika.js|Moyale` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_h2_afrika.js|Nazret` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_h2_afrika.js|Negele Borana` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_h2_afrika.js|Nekemte` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_h2_afrika.js|Verder` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_h2_afrika.js|Vukro` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_h2_afrika.js|Völdiya` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_h2_afrika.js|Yabelo` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_h2_afrika.js|İmi` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_h2_afrika.js|İncibara` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_h2_afrika.js|İskuşubân` — [['1927-01-01', '1945-09-02', 'italya']] — Z5
- `yerlesimler_h2_afrika.js|Şeşemene` — [['1936-05-09', '1941-05-05', 'italya'], ['1941-05-05', '1945-09-02', 'habesistan']] — Z5
- `yerlesimler_kalite4.js|Bâne` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler_kalite4.js|Mahabad (Sâvücbulak)` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler_kalite4.js|Serdeşt (Sardasht)` — [['1925-10-31', '1945-09-02', 'iran']] — Z5
- `yerlesimler_seyrek.js|Dûmetülcendel (Cevf)` — [['1932-09-18', '1945-09-02', 'suudi-arabistan']] — Z5
- `yerlesimler_seyrek.js|Karabiga` — [['1923-10-29', '1945-09-02', 'turkiye-cumhuriyeti']] — Z5
- `yerlesimler_seyrek.js|Teymâ` — [['1932-09-18', '1945-09-02', 'suudi-arabistan']] — Z5
- `yerlesimler_seyrek.js|Tuzla (Bosna)` — [['1941-04-10', '1945-05-31', 'hirvatistan-bagimsiz'], ['1945-05-31', '1945-09-02', 'yugoslavya']] — Z5
- `yerlesimler_seyrek.js|Vişegrad` — [['1941-04-10', '1945-05-31', 'hirvatistan-bagimsiz'], ['1945-05-31', '1945-09-02', 'yugoslavya']] — Z5

### A2. Pencerenin GÖRMEDİĞİ (yeni ölçütte de hiçbiri'nden çıkan) 39 kayıt — hepsi Z6 "f geri çekildi"

- `yerlesimler.js|Antalya` — pencereye taşan kaynaklı dönem: [['1216-01-22', '1300-01-01', 'selcuklu']]
- `yerlesimler.js|Atina` — pencereye taşan kaynaklı dönem: [['1205-01-01', '1456-06-04', 'atinadukaligi']]
- `yerlesimler.js|Dimyat` — pencereye taşan kaynaklı dönem: [['1250-01-01', '1517-05-19', 'memluk']]
- `yerlesimler.js|Fas (Fez)` — pencereye taşan kaynaklı dönem: [['1248-01-01', '1549-01-01', 'merini']]
- `yerlesimler.js|Gelibolu` — pencereye taşan kaynaklı dönem: [['1261-07-25', '1354-03-02', 'bizans']]
- `yerlesimler.js|Giresun` — pencereye taşan kaynaklı dönem: [['1204-01-01', '1461-08-15', 'trabzon-rum']]
- `yerlesimler.js|Isfahan` — pencereye taşan kaynaklı dönem: [['1256-01-01', '1335-12-01', 'ilhanli']]
- `yerlesimler.js|Isparta` — pencereye taşan kaynaklı dönem: [['1204-01-01', '1297-01-01', 'selcuklu']]
- `yerlesimler.js|Kahire` — pencereye taşan kaynaklı dönem: [['1252-01-01', '1517-01-24', 'memluk']]
- `yerlesimler.js|Karaman` — pencereye taşan kaynaklı dönem: [['1256-01-01', '1397-07-01', 'karaman']]
- `yerlesimler.js|Konya` — pencereye taşan kaynaklı dönem: [['1097-01-01', '1308-01-01', 'selcuklu']]
- `yerlesimler.js|Kütahya` — pencereye taşan kaynaklı dönem: [['1233-01-01', '1300-01-01', 'selcuklu']]
- `yerlesimler.js|Livadya` — pencereye taşan kaynaklı dönem: [['1205-01-01', '1456-06-04', 'atinadukaligi']]
- `yerlesimler.js|Manisa` — pencereye taşan kaynaklı dönem: [['1261-07-25', '1313-01-01', 'bizans']]
- `yerlesimler.js|Mardin` — pencereye taşan kaynaklı dönem: [['1103-01-01', '1409-01-01', 'artuklu']]
- `yerlesimler.js|Merakeş` — pencereye taşan kaynaklı dönem: [['1269-01-01', '1549-01-01', 'merini']]
- `yerlesimler.js|Merv (Mari)` — pencereye taşan kaynaklı dönem: [['1256-01-01', '1337-09-09', 'ilhanli']]
- `yerlesimler.js|Modon` — pencereye taşan kaynaklı dönem: [['1209-01-01', '1500-08-10', 'venedik']]
- `yerlesimler.js|Rabat` — pencereye taşan kaynaklı dönem: [['1251-01-01', '1549-01-01', 'merini']]
- `yerlesimler.js|Serahs` — pencereye taşan kaynaklı dönem: [['1256-01-01', '1337-09-09', 'ilhanli']]
- `yerlesimler.js|Simnân` — pencereye taşan kaynaklı dönem: [['1256-01-01', '1335-12-01', 'ilhanli']]
- `yerlesimler.js|Tanca` — pencereye taşan kaynaklı dönem: [['1273-01-01', '1471-08-28', 'merini']]
- `yerlesimler.js|Tekirdağ` — pencereye taşan kaynaklı dönem: [['1275-01-01', '1357-01-01', 'bizans']]
- `yerlesimler.js|Trabzon` — pencereye taşan kaynaklı dönem: [['1204-01-01', '1461-08-15', 'trabzon-rum']]
- `yerlesimler.js|İstanbul` — pencereye taşan kaynaklı dönem: [['1261-07-25', '1453-05-29', 'bizans']]
- `yerlesimler.js|İstefe (Tebai)` — pencereye taşan kaynaklı dönem: [['1205-01-01', '1456-06-04', 'atinadukaligi']]
- `yerlesimler.js|İzmit` — pencereye taşan kaynaklı dönem: [['1261-07-25', '1337-01-01', 'bizans']]
- `yerlesimler.js|İznik` — pencereye taşan kaynaklı dönem: [['1261-07-25', '1331-03-02', 'bizans']]
- `yerlesimler.js|Şehrizor` — pencereye taşan kaynaklı dönem: [['1258-01-01', '1340-01-01', 'ilhanli']]
- `yerlesimler_asya.js|Delhi` — pencereye taşan kaynaklı dönem: [['1206-01-01', '1398-12-17', 'delhi-sultanligi']]
- `yerlesimler_asya.js|Ecmîr (Ajmer)` — pencereye taşan kaynaklı dönem: [['1206-01-01', '1365-01-01', 'delhi-sultanligi']]
- `yerlesimler_asya.js|Kaşgar` — pencereye taşan kaynaklı dönem: [['1227-01-01', '1347-01-01', 'cagatay']]
- `yerlesimler_asya.js|Koil (Aligarh)` — pencereye taşan kaynaklı dönem: [['1206-01-01', '1526-04-21', 'delhi-sultanligi']]
- `yerlesimler_asya.js|Lahor` — pencereye taşan kaynaklı dönem: [['1206-01-01', '1526-04-21', 'delhi-sultanligi']]
- `yerlesimler_ek14.js|Semerkant` — pencereye taşan kaynaklı dönem: [['1227-01-01', '1370-04-09', 'cagatay']]
- `yerlesimler_ek16.js|Belh` — pencereye taşan kaynaklı dönem: [['1227-01-01', '1370-04-09', 'cagatay']]
- `yerlesimler_ek16.js|Herat` — pencereye taşan kaynaklı dönem: [['1256-01-01', '1335-12-01', 'ilhanli']]
- `yerlesimler_ek3.js|Sebte (Ceuta)` — pencereye taşan kaynaklı dönem: [['1273-01-01', '1415-01-01', 'merini']]
- `yerlesimler_h2_kuzeyafrika.js|Sicilmâse (Tâfilelt)` — pencereye taşan kaynaklı dönem: [['1274-01-01', '1549-01-01', 'merini']]

### A3. İki yamada da ufuk dışı kaynak alan (örtüşme) 25 kayıt — −464 öngörüsünün −439 çıkma sebebi

`yerlesimler.js|Antalya`, `yerlesimler.js|Gelibolu`, `yerlesimler.js|Giresun`, `yerlesimler.js|Isfahan`, `yerlesimler.js|Isparta`, `yerlesimler.js|Karaman`, `yerlesimler.js|Kayseri`, `yerlesimler.js|Konya`, `yerlesimler.js|Kütahya`, `yerlesimler.js|Kırşehir`, `yerlesimler.js|Manisa`, `yerlesimler.js|Mardin`, `yerlesimler.js|Serahs`, `yerlesimler.js|Simnân`, `yerlesimler.js|Sinop`, `yerlesimler.js|Sivas`, `yerlesimler.js|Tekirdağ`, `yerlesimler.js|Tokat`, `yerlesimler.js|Trabzon`, `yerlesimler.js|Van`, `yerlesimler.js|Çankırı`, `yerlesimler.js|İstanbul`, `yerlesimler.js|İzmit`, `yerlesimler.js|İznik`, `yerlesimler.js|Şehrizor`

### A4. Z5+Z6 birlikte uygulamada İNMEYEN Z5 kayıtları (kapsam-daraldi) 63 kayıt — ad: Z6'nın f'si → Z5'in daraltmak istediği f

- Antakya: 1268-05-18→1281-01-01
- Antalya: 1216-01-22→1281-01-01; gun→yil
- Atina: 1205-01-01→1281-01-01
- Ba'lebek (Baalbek): 1260-09-03→1281-01-01
- Bağdat: 1258-02-10→1281-01-01
- Belh: 1227-01-01→1281-01-01
- Cizre: 1261-01-01→1281-01-01
- Delhi: 1206-01-01→1281-01-01
- Derbend: 1242-01-01→1281-01-01
- Dimetoka: 1261-07-25→1281-01-01
- Ecmîr (Ajmer): 1206-01-01→1281-01-01
- Fas (Fez): 1248-01-01→1281-01-01
- Gelibolu: 1261-07-25→1281-01-01; gun→yil
- Gence: 1256-01-01→1281-01-01
- Giresun: 1204-01-01→1281-01-01
- Girit (Resmo): 1204-08-12→1281-01-01
- Halep: 1260-09-03→1281-01-01
- Hasankeyf: 1232-01-01→1281-01-01
- Herat: 1256-01-01→1281-01-01
- Hucend: 1227-01-01→1281-01-01
- Isfahan: 1256-01-01→1281-01-01
- Isparta: 1204-01-01→1281-01-01
- Karaman: 1256-01-01→1281-01-01
- Kars: 1256-01-01→1281-01-01
- Kavala: 1261-07-25→1281-01-01
- Kaşgar: 1227-01-01→1281-01-01
- Koil (Aligarh): 1206-01-01→1281-01-01
- Konya: 1097-01-01→1281-01-01
- Kütahya: 1233-01-01→1281-01-01
- Lahor: 1206-01-01→1281-01-01
- Livadya: 1205-01-01→1281-01-01
- Manisa: 1261-07-25→1281-01-01
- Mardin: 1103-01-01→1281-01-01
- Merakeş: 1269-01-01→1281-01-01; gun→yil
- Merv (Mari): 1256-01-01→1281-01-01
- Merâga: 1256-01-01→1281-01-01
- Modon: 1209-01-01→1281-01-01
- Nakşa: 1207-01-01→1281-01-01
- Niğde: 1214-01-01→1281-01-01
- Rabat: 1251-01-01→1281-01-01
- Rakka: 1260-09-03→1281-01-01
- Rize: 1204-01-01→1281-01-01
- Sebte (Ceuta): 1273-01-01→1281-01-01
- Semerkant: 1227-01-01→1281-01-01
- Serahs: 1256-01-01→1281-01-01
- Sicilmâse (Tâfilelt): 1274-01-01→1281-01-01
- Simnân: 1256-01-01→1281-01-01
- Tanca: 1273-01-01→1281-01-01
- Taşkent: 1227-01-01→1281-01-01
- Tebriz: 1256-01-01→1281-01-01
- Tekirdağ: 1275-01-01→1281-01-01
- Tikrit: 1257-01-01→1281-01-01
- Tilimsan: 1236-01-01→1281-01-01
- Trabzon: 1204-01-01→1281-01-01
- Vodina (Edessa): 1261-07-25→1281-01-01
- Vâsıt: 1258-01-01→1281-01-01
- İskenderun: 1268-01-01→1281-01-01; gun→yil
- İstanbul: 1261-07-25→1281-01-01
- İstanköy: 1261-07-25→1281-01-01
- İstefe (Tebai): 1205-01-01→1281-01-01
- İzmit: 1261-07-25→1281-01-01
- İznik: 1261-07-25→1281-01-01
- Şehrizor: 1258-01-01→1281-01-01
