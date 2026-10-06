# DARENDE-SILIFKE-1006 — Darende'nin Osmanlı'dan çıkışı · Silifke ve Ermenek'in Karaman dönemi

Görev: UMIT İRTİBAT (MALATYA-1400-TIMUR-1006 devamı + KRONOLOJI-COK-PAKET-1006-B §3.3 yan
bulgusu). Makine UMIT · ağaç `C:\atlas-p84-darende` (detached, `origin/makine/umit` @
`3ec79a5f`). **YALNIZ ÖLÇÜM VE ÖNERİ** — iki diff UYGULANMADI. Motor tuzu dosyalarına
dokunulmadı. TDV gövdeleri 6 Ekim 2026'da çekildi: `denetim/DARENDE-SILIFKE-1006-tdv/*.txt`
(ilk satır URL; `malatya`, `dulkadirogullari`, `timur`, `divrigi`, `bayezid-i`
MALATYA-1400-TIMUR-1006'dan kopya). Araçlar: `ARAC-DARENDE-METIN-1006.py` (html→metin) ·
`ARAC-DARENDE-DIFF-URET-1006.py` (diff üretimi, yalnız kendi ağacımda, geri alındı).
Görsel AÇILMADI.

## 0. ÖNGÖRÜ — ölçümden ÖNCE yazıldı
- **① Darende:** çıkış cümlesi TDV'de **bulunamayacak** (~%70). Mekanizma: Darende'nin kendi
  maddesi yok, kapsayıcı maddeler onu yalnız fetih listesinde anıyor. Sonuç: beyan önerisi,
  veri değişikliği 0.
- **② Silifke / Ermenek:** 2 kusur — Silifke 1473 → 1474, Ermenek 1468 → 1474. Mekanizma:
  atlas ilk teslim yılını almış, Kasım Bey'in geri alışını atlamış. Ters yön riski: Ermenek
  1468-1474 arasında kısa bir Osmanlı penceresi olmuş olabilir.
- **Gün:** hiçbirinde gün/ay çıkmayacak ⇒ yıl.

**Karşılaştırma:** ① çıkış cümlesi **bulunamadı** — TUTTU; ama "veri değişikliği 0"
ÇÜRÜDÜ: aramada **Darende'nin 1414-1418 Memlûk dönemi** (iki açık TDV cümlesi) çıktı ⇒
1 kaynaklı kusur. ② Silifke TUTTU. Ermenek'te sayı tuttu, mekanizma YARI tuttu — ters yön
riski GERÇEKLEŞTİ: 1471-1472 arasında gerçek bir Osmanlı penceresi var, ama 1468-1471
arası Osmanlı DEĞİL (atlasın tersine). Gün öngörüsü TUTTU (yalnız hicrî yıl).

## 1. Mükerrer kapısı
- Darende: `MALATYA-1400-TIMUR-1006.md §3.4` (bu oturum; "kusur adayı, çıkış bulunamadı")
  — bu kalem onun devamıdır. `denetim/` altında Darende 1414/1418 için hüküm YOK (ad +
  içerik taraması: `darende|dârende` × `141[48]` 0 rapor).
- Silifke/Ermenek: `KRONOLOJI-COK-PAKET-1006-B.md §3.3` yan bulgusu — **diff yazılmamış**,
  "Ermenek için 1468-1474 arası iki yönlü ölçülmedi" diye açık bırakılmış. Bu rapor o
  iki yönlü ölçümü yapıyor. ⇒ DUR gerekmedi.

## 2. ÖLÇÜM — zincirler (`girdi.yukle()`, P84 aracı `--zincir`, taban `3ec79a5f`)

| yerleşim | dosya:satır | zincir (ilgili dilim) | kaynak alanı |
|---|---|---|---|
| **Darende** | `data/yerlesimler_ok110.js:59-64` | ilhanli →1335 · eretna 1335→1338 · `dulkadir` **1338-01-01→1522-01-01 kesintisiz** · v: tâbi 1515→1522 · d: 1522→ | var (aşağıda §3.1 ⚠️) |
| **Silifke** | `data/yerlesimler.js:215-216` | `karaman` 1281→**1473-01-01** · d: **1473-01-01**→1920 · `kd` k:0 →1473 | `s:`te YOK |
| **Ermenek** | `data/yerlesimler.js:1771-1772` | karaman →1397-07-01 · d: 1397→1402-07-28 · timurlu 1402 · `karaman` 1402-09-15→**1468-01-01** · d: **1468-01-01**→1920 | `s:`te YOK |
| (bağlam) Anamur | `yerlesimler.js:213` | karaman →1471 · d: 1471→ | — |

Kronoloji (Değişmez 2 evreni): `olaylar.js:64` **t:"1473-01-01"** "Silifke'nin kesin
fethi" (`kaynak:"silifke"`, gun "1473, Otlukbeli sonrası") · `olaylar_ek.js:53` 1468
"Karaman'ın kesin ilhakı" (yer listesinde Ermenek) · `olaylar_ek.js:54` 1471 "Alanya,
Anamur ve Silifke'nin (İçel) ilhakı" (`kaynak:"gedik-ahmed-pasa"`) · kuyrukta
`kronoloji_anadolu.js:373/379/385` (1468-04-01 · 1471 · 1474 Karaman).

## 3. KAYNAK — TDV birebir (rakamı taşıyan cümle neyi tarihliyor)

### 3.1 Darende
**Çıkış (Osmanlı → ?) cümlesi: BULUNAMADI** (6 Ekim 2026). Denenen yollar:
- Slug: `darende` · `darende-kasabasi` · `darende-ilcesi` → **302** (madde yok).
- Başlık araması `/arama/?q=darende` (+`&p=m`) → yalnız `mehmed-pasa-darendeli`,
  `izzet-mehmed-pasa-darendeli`.
- Tam metin `/arama/?q=darende&p=t&page=1..9` → **6 sayfa, ~53 aday** (7-9 boş). Okunan 15
  gövde: `anadolu` · `besni` · `danismendliler` · `divrigi` · `dulkadirogullari` ·
  `eretnaogullari` · `ferec` · `malatya` · `osmanlilar` · `selim-i` · `somuncu-baba` ·
  `sugur` · `timur` · `tokat` · `bayezid-i`. Okunmayanlar (kişi/kurum/eser maddeleri:
  `hamam`, `ferman`, `katip`, `ilahiyat-fakultesi` …) ad olarak listede. ⚠️ Arama aday
  üretir, yokluk kanıtı değildir (`OLCUM-KITA §7`).

Alış (bilinen) — üç ayrı yıl:
- `divrigi`: "… Yıldırım Bayezid 1398’de Sivas, Malatya, Besni (Behisni), Darende ve
  Divriği’yi iki ay muhasaradan sonra Osmanlı topraklarına kattı."
- `ferec`: "Osmanlı Sultanı Yıldırım Bayezid bu sırada Elbistan, Malatya ve Dârende gibi
  Memlük hâkimiyetindeki bazı şehirleri ele geçirmişti (Ağustos 1399)." → **AY veren tek
  cümle.** Dikkat: Darende'yi alış anında "Memlük hâkimiyetinde" sayıyor; atlas 1338-1522
  `dulkadir`.
- `timur`: "… 1399’da Memlük sultanının vefatı üzerine Fırat bölgesine inerek Malatya,
  Dârende ve Divriği’yi işgal etmesi …"
- `anadolu`: "Bayezid bu sırada Memlük Sultanı Berkuk’un ölümünden faydalanarak Malatya,
  Kâhta, Divriği, Besni, Darende ve Elbistan’ı da aldı." (yıl yok)

Çıkışa EN YAKIN cümle — ve neden dayanak DEĞİL:
- `besni`: "Bu arada 1398’de Sivas, Dârende ve Malatya ile birlikte Osmanlı topraklarına
  katıldıysa da 1400’de Timur’un Sivas ve Malatya’yı zaptı sırasında Memlükler’in eline
  geçti." → cümlenin ÖZNESİ **Besni**; "1400 … Memlükler’in eline geçti" Besni'yi
  tarihler. Darende yalnız 1398 katılışında yanında anılıyor. Darende'ye taşımak
  `D208`in yasakladığı "komşudan hüküm devralma"dır.

Sonrası — **yeni bulgu, iki açık cümle:**
- `dulkadirogullari`: "Sultan Şeyh 1414 yılında sefere çıkarak daha önce kendi rızası ile
  verdiği Antep şehriyle Dârende’yi Dulkadırlılar’dan geri aldı." → **1414 = Darende
  Dulkadır → Memlûk**; ayrıca 1414'ten önce Dulkadır'da olduğunu söylüyor.
- `dulkadirogullari`: "Fakat Mehmed Bey 1418’de Dârende’yi tekrar aldığı gibi Besni’yi de
  ülkesine kattı." → **1418 = Memlûk → Dulkadır**.
⇒ Atlasın kesintisiz `dulkadir` 1338-1522'si **1414-1418'de yanlış**.

Kapsam dışı yan bulgular (diff YOK):
- `eretnaogullari`: Eretna "… Memlük hâkimiyetindeki Dârende’yi de kendi topraklarına
  kattı." (1350 fermanından sonra) · "Öldüğünde … Doğu Karahisar ve Dârende onun hâkimiyeti
  altındaydı." (Eretna ö. 1352) ⇒ 1338 sonrası Darende Dulkadır → Memlûk → Eretna geçti;
  atlas 1338-1414 kesintisiz `dulkadir` — yıllar eksik, ayrı kalem.
- 🔴 **Sahte tırnak:** Darende kaydının `kaynak:` alanı `"Dârende: 1338'de işgal edildi"`
  diye TIRNAK içinde alıntılıyor; gövdede bu dizgi **0** kez geçiyor. Gövdenin cümlesi:
  "… Karaca Bey, bir baskınla Eretnaoğulları’nın elinde bulunan Dârende’yi işgal etti."
  (`OLCUM-KITA §5`: tırnak kaldırılmalı/değiştirilmeli). Aynı alandaki ikinci tırnak
  ("doğuda Harput’tan … Hassa’ya kadar") gövdede BİREBİR var ✓.

### 3.2 Silifke
- `silifke`: "Bunun üzerine Gedik Ahmed Paşa 1472’de İçel’e gidip Silifke Kalesi’ni teslim
  aldı." · "Fakat Karamanoğlu Kasım Bey, aynı yıl Akdeniz’de bulunan Haçlı donanmasının da
  yardımı ile Silifke Kalesi’ni geri almayı başardı." · "1473’te Otlukbeli Savaşı’nı kazanan
  Fâtih Sultan Mehmed, oğlu Şehzade Mustafa ile Gedik Ahmed Paşa’yı Silifke ve çevresinin
  zaptıyla görevlendirdi." → **1473 Otlukbeli'yi ve GÖREVLENDİRMEYİ tarihler**, kalenin
  düşüşünü değil. Düşüşün cümlesinde yıl yok.
- `mehmed-ii`: "… Karaman-ili’nde dağlık bölgede ve İç-il sahillerinde, Niğde ve Develi
  yöresinde 877’den (1472) beri tekrar hâkim olan Kasım Bey’i bertaraf etmek için 879’da
  (1474) Gedik Ahmed Paşa’nın yeni bir sefer yapması gerekmiştir." · "Gedik Ahmed Taş-ili,
  Ermenâk, Meynan ve Silifke’ye inerek buraları tekrar ele geçirdi." → **879/1474 = Silifke'nin
  kesin alışı** (879 = Mayıs 1474–Nisan 1475).
- `karamanogullari`: "… İç İl sahillerine yönelik Osmanlı seferi 1474’te başarıyla
  sonuçlandı ve Karaman Beyliği tam anlamıyla kontrol altına alındı."
- `gedik-ahmed-pasa`: "Gedik Ahmed Paşa, 1474’te idam edilen Mahmud Paşa’nın yerine
  vezîriâzam oldu; Karaman ve İçel’deki askerî faaliyetlerini Ermenek, Manyan ve Silifke
  hisarlarını tekrar alarak sürdürdü." → 1474 Mahmud Paşa'nın idamını tarihler; geri alış
  ondan SONRA ⇒ ≥1474 ile tutarlı.
⇒ Üç ayrı madde **1474**. Atlasın 1473'ü kaynakta düşüşü tarihleyen bir cümleye
dayanmıyor.

📌 **TDV kendiyle çelişiyor (bildirilir, taraf seçilmez):** Kasım'ın Silifke'yi geri alışı
`silifke` ve `icel`de "aynı yıl" (=1472), `mehmed-ii`de "Bu donanma 877 (1473) baharında
Karamanoğlu Kasım Bey ile iş birliği yaptı. Gorigos, Sıgın ve Silifke kaleleri bu tehdit
altında Kasım’a teslim oldu." ⇒ 1472-73 kısa Osmanlı teslimi **kodlanmadı** (bitişi 1472
mi 1473 mü kaynakta ayrışıyor; 1472'de kalırsa yıl düzeyinde sıfır uzunluk olur — `§8`).

### 3.3 Ermenek — iki yönlü ölçüm
- `icel` (1468): "… İçel’in Silifke Kalesi ve Karataş bölgesi dışındaki kesimleri Osmanlı
  hâkimiyetine girdi." → **BÖLGE hükmü**, Ermenek adı yok.
- `karamanogullari` (1468 sonrası): "Pîr Ahmed mücadeleye devam etti ve Karaman-ili’nin
  Toroslar bölgesini idaresi altında tuttu." · "Karamanlı kuvvetleri karşı saldırıları ile
  bazı yerleri yeniden ele geçirdi."
- `icel` (875 = 1470-71): "875 (1470-71) yılında sefere çıkıp Lârende’den İçel topraklarına
  giren İshak Paşa, Mut yakınlarında Kasım Bey’i yenerek Mut’u ele geçirdi. İshak Paşa
  kaleyi tamir ettirip Ermenek’i de Osmanlı hâkimiyetine aldı." → **Ermenek'i ADIYLA
  tarihleyen ilk Osmanlı cümlesi: 875 (1470-71).** "aldı" ⇒ hemen öncesinde Osmanlı'da değildi.
- `mehmed-ii` (877 = 1472): "… dağlık bölgede … 877’den (1472) beri tekrar hâkim olan Kasım
  Bey …" · `icel`: "Gedik Ahmed Paşa, Lârende’de Pîr Ahmed’i yenerek daha önce elden çıkmış
  olan Ermenek ve Manyan kalelerini alıp İçel’in zaptedilmeyen son kalesi Silifke’yi
  kuşattı." → **Ermenek 1472'de elden çıktı.**
- `mehmed-ii` (879 = 1474): "Gedik Ahmed Taş-ili, Ermenâk, Meynan ve Silifke’ye inerek
  buraları tekrar ele geçirdi." → **1474 kesin alış.**
⇒ Ermenek: karaman →**1470/71** · Osmanlı **1470/71→1472** · karaman **1472→1474** ·
Osmanlı **1474→**. Atlasın 1468'i ancak 1468 bölge hükmünü kasabaya taşıyarak savunulabilir
(`D208` yasak) ve 875'teki "aldı" cümlesiyle çelişir.

### 3.4 Kapsam dışı — `olaylar_ek.js:54` (diff YOK)
"Alanya, Anamur ve Silifke'nin (İçel) ilhakı" `t:"1471-01-01"`, `kaynak:"gedik-ahmed-pasa"`.
Kendi kaynağı: "1471’de Alâiye’yi (Alanya), ertesi yıl İçel ve Karaman’da Silifke, Mokan,
Gorigos (Kızkalesi), Gülek ve Lülye’yi (Lülüe) ele geçirdi …" ⇒ Silifke **1472**; `silifke`:
"Nitekim 1471’de Silifke Kalesi, Karamanoğlu İshak Bey’in oğlu ve eşinin idaresindeydi."
⇒ maddenin Silifke kısmı yanlış yıl. Öneri: başlıktan/`yer:`den Silifke'yi çıkarmak (UMIT
parti işi).

## 4. FARK + ÖNERİ (UYGULANMADI)

| # | yer | atlas | TDV | öneri |
|---|---|---|---|---|
| 1 | Darende Osmanlı çıkışı | Osmanlı HİÇ yok | alış 1398/1399 (3 madde), çıkış **bulunamadı** | veri DEĞİŞMEZ; beyan (aşağıda) |
| 2 | Darende 1414-1418 | dulkadir | Memlûk (`dulkadirogullari`, iki cümle) | `s:memluk` 1414-01-01→1418-01-01 (yıl) |
| 3 | Silifke karaman bitişi | 1473-01-01 | 879 (1474) | 1474-01-01 (yıl); `kd` k:0 penceresi de |
| 4 | Ermenek 1468-1471 | Osmanlı | karaman (875'te İshak Paşa "aldı") | karaman →1471-01-01 |
| 5 | Ermenek 1471-1472 | Osmanlı | Osmanlı | `d:` 1471-01-01→1472-01-01 |
| 6 | Ermenek 1472-1474 | Osmanlı | karaman (Kasım, 877'den beri) | `s:karaman` 1472-01-01→1474-01-01 |
| 7 | `olaylar.js:64` Silifke madde | t:1473-01-01 | 1474 | t:1474-01-01 + gun beyanı |

**Darende beyanı (öneri 1, diff'e girmedi — metin koordinatörün):** kaydın `kaynak:`ına
"Bayezid 1398/1399'da aldı (TDV `divrigi` 1398 · `ferec` Ağustos 1399 · `timur` 1399);
Osmanlı'dan çıkışı TDV'de bulunamadı (6 Ekim 2026, 15 gövde, arama yolları
DARENDE-SILIFKE-1006 §3.1). Atlas 1399-1414 Dulkadır gösteriyor; TDV `dulkadirogullari`
1414'te Darende'yi Dulkadırlılar'ın elinde sayıyor ⇒ en geç 1414'te Dulkadır'daydı."
Osmanlı penceresi YAZILMAMALI: bitiş yılı uydurulmuş olur (`§4`).

**Yıl işaretleri:** 1471-01-01 (875 = Haziran 1470–Haziran 1471: işaret 875'in içinde) ·
1472-01-01 (877 Haziran 1472'de başlar ⇒ işaret olaydan önce) · 1474-01-01 (879 Mayıs
1474'te başlar ⇒ işaret olaydan önce). Hepsi `§4` "gün yoksa YYYY-01-01" kuralı; kayıtlarda
yazılı.

### Diff'ler (temel `origin/makine/umit` @ `3ec79a5f`, LF, CR 0, `git apply --check` temiz)
- `denetim/DARENDE-SILIFKE-1006-KOORD.diff` (KOORDİNATÖR): `data/yerlesimler.js` Silifke
  (215-216) + Ermenek (1771-1772) · `data/yerlesimler_ok110.js` Darende (59-60). Her yeni
  dönemde `kaynak:` alanı, TDV cümlesi birebir.
- `denetim/DARENDE-SILIFKE-1006.diff` (UMIT partisi): `data/olaylar.js:64` Silifke maddesi
  1473 → 1474 · `data/olaylar_ek.js` 2 yeni madde (1471 İshak Paşa Mut ve Ermenek'i aldı ·
  1472 Kasım Bey dağlık Karaman-ili'ni ve Ermenek'i geri aldı). **İki diff BİRLİKTE.**
- Darende 1414/1418 için kronoloji maddesi YAZILMADI — sonuç §5'te (2s).

## 5. DENETİM — iki diff kendi ağacımda uygulanıp `denetle.py`, sonra geri alındı
(`git checkout --`, `git status --short data/` boş). Aynı ağaçta önce/sonra:

| ölçü | önce | sonra |
|---|---|---|
| çıkış kodu | **2** | **2** — tek sebep ikisinde de Değişmez 8 ÖLÇÜLEMEDİ (taze ağaçta `devletler_harita.js` yok) ⇒ **D8 bu öneri için ölçülmedi** |
| D1 · D1b · D2i · D2t · D4 | — | değişmedi ✓ |
| D2 Osmanlı senkronu | 623 kırılma, 0 açık | **624**, **0 açık** ✓ |
| D2s yabancı | 1720 · 186 AÇIK (tavan 189) | **1724** · **186 AÇIK** ✓ |
| D2s YIL-TEMSİLÎ BORÇ | 165 (tavan 151 — ÖNCEDEN aşık) | **167 (+2)** = Darende 1414-01-01 / 1418-01-01 (yıl-düzeyi kırılma, kaynak yıl veriyor) |
| D2sk yalnız-taraf kapanış | 2247 (tavan 2247) | **2248 ⚠️ tavanı 1 aşıyor** — ihlal değil, "sınıfı istenir" |
| kaynaksız `s:` kaydı | 1929 (tavan 1930) | **1927** (iyileşme: Silifke + Ermenek karaman dönemleri artık kaynaklı) |
| muaf `kucuk-devlet` | 306 | 307 |

**⚠️ 2sk +1'in sınıfı:** Darende'nin iki yeni yabancı kırılmasından (1414 · 1418) biri yer
düzeyinde değil yalnız TARAF (memluk/dulkadir maddesi) ile kapanıyor — çünkü bu diff
Darende için kronoloji maddesi YAZMADI. Hangisinin kapandığı kayıt adıyla ÖLÇÜLMEDİ (araç
kovayı liste olarak basmıyor). Çare: `yer_id:"Darende"` taşıyan iki madde (1414 Sultan Şeyh
Darende'yi geri aldı · 1418 Dulkadıroğlu Mehmed Bey geri aldı, kaynak `dulkadirogullari`)
— hangi dosyaya (memlük/dulkadir kuyruğu mu, `olaylar` mı) yazılacağı UMIT partisinin
kararı; yazılmazsa 2sk tavanı 2248'e çekilmeli (`§3.4`: tavanı koordinatör yazar).
