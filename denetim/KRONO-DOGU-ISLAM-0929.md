# KRONO-DOGU-ISLAM-0929 — İran · Safevî · Akkoyunlu · Karakoyunlu · Memlük · Mısır (Dalga 2)

29 Eylül 2026 · şartname `oturumlar/KRONO-DOGU-ISLAM-0929.md` · model Opus.
Ek dosyalar: `-DUZELTME.md` (uygulanan + önerilen düzeltmeler) · `-YERLESIM-ONERI.md` (20 harita
önerisi) · `-KUNYE.md` · `-GUN-KARAR.json` (489 satırlık makine kaydı).

## 🔴 En değerli satır — koordinatörün sorusu: "TDV kaçında gün verdi?"

**A) Yıl-temsilî KIRILMALAR** (SENKRON-DEFTER `yil_temsili` kovasının bu paketteki NET 30 olay grubu, 266 kırılmanın açık kalanları):

| TDV'nin cevabı | Grup | Gruplar |
|---|---|---|
| **GÜN verdi** | **0** | — |
| AY verdi (dolaylı) | 1 | #21 Erzincan 1457 (TDV Âmid zaferini "Receb 861 / Haziran 1457" tarihliyor, Erzincan'ın geçişini ayrıca tarihlemiyor) |
| YIL verdi ve harita yılı TUTUYOR | 7 | #1-#2 Dulkadir 1337 · #7 Horasan 1381 · #10 Azerbaycan 1386 · #11 Esterâbâd 1386 · #16 Huzistan 1393 · #40 Gîlân 1592 |
| YIL verdi, harita yılı TUTMUYOR | 2 | #8 Zencan (harita 1383, TDV 1384) · #39 Lahsa (harita 1550, TDV 1547) |
| TDV haritayla **ÇELİŞİYOR** | 3 | #36 Lahsa-Katîf "Safevî 1524-1550" (TDV'de Safevî dönemi YOK) · #41 Mâzenderan (harita 1596, TDV 1504) · #52 Şuşa (harita Zend 1752, TDV Karabağ Hanlığı 1748-50) |
| Dayanak YOK: hayalet künye / künye gününden türetilmiş gün | 7 | #3 Kelkit 1348 · #4-#5 İlhanlı→Kert/Lur 1353 (= `ilhanli.t`) · #6, #9 Erzurum (İlhanlı 1353-60, Eretna 1381-85 hayalet) · #22 Artuklu 1409-65 hayalet · #24 Cizre 1508-15 SAHİPSİZ |
| Ölçülemedi (TDV slug'ı ölü ya da yıl yok) | 10 | #20 · #23 · #46 · #47 · #53 · #54 · #55 · #57 · #67 · #68 |

⇒ **Bu coğrafyada `YYYY-01-01` kırılmalarının hiçbirine TDV gün vermiyor**. `gun:` beyanı kırılmada
değil maddede yazılabildiği için, kırılma tarafındaki iş YERLESIM-ONERI'ye gitti: 20 öneri, 8'i
🔴 (TDV açık çelişki).

**B) Kronoloji MADDELERİ** (yedi dosyada `gun:` alanı olmayan ve t'si ayın 1'i olan **489** madde, tek tek):

| TDV'nin cevabı | Madde |
|---|---|
| **GÜN verdi** | **14** (9'unda t düzeldi; 5'i zaten doğru "ayın 1'i" çıktı: Barsbay 1 Nisan 1422, Kayıtbay 1 Şubat 1468…) |
| AY verdi, gün yok | **43** (+2 TDV iç çelişkisi notlu) |
| YALNIZ YIL | **386** — **52**'si ay taşıyordu ama ay ne `d`'de ne TDV'de vardı → **yıla indirildi** |
| Ay TDV-dışı kaynakta, doğrulanamadı | **45** (safevi.js 29 · misir 8 · iran 4 · memluk 4 — Iranica Cloudflare engeli) |
| TDV ↔ TDV-dışı çelişki | **1** (Nâsırüddin Şah 1896: TDV 16 Nisan, Iranica 1 Mayıs) |

⇒ **489 maddenin 14'ünde (%2,9) TDV gün veriyor, 43'ünde (%8,8) ay.** Yığılmanın asıl sebebi yıl
bilgisi değil **`-06-01` yıl ortası yer tutucusu**: t'si değişen 63 maddenin 36'sı `-06-01`'di.

## ① Ölçtüm (sayıyla)
- **Envanter:** 765 madde (iran 107 · iran_ardillari 155 · safevi 81 · akkoyunlu 77 · karakoyunlu 70 ·
  memluk 155 · misir 120). Zorunlu 10 alan: yalnız `yer_id` boş olanlar var (147, boş bırakmak
  kurala uygun). Biçim bozuk t: 1 (`misir 1805-05`, düzeltildi).
- **Uygulanan düzeltmeler** (HEAD ile node karşılaştırması): **489 `gun:` eklendi · 63 t değişti ·
  0 başlık değişti · 33 çift `yer_id` anahtarı temizlendi** (etkili değer 0 fark).
- **TDV'den gelen 12 somut tarih düzeltmesi** (DUZELTME §A1a): Ebû Said **30 Kasım 1335** (iki
  dosyada 12-01 idi) · İsfahan katliamı **18 Kasım 1387** · Gazan'ın ihtidası **19 Haziran 1295** ·
  Bingöl baskını **10 Kasım 1467** · Abbas I'in cülûsu **1587** (1588 değil) · Cihan Şah Bağdat
  **9 Haziran 1446** · Gazi Hasan Mısır'a **9 Haziran 1786** · Yezd **6 Aralık 1504** …
- **Mükerrer ölçümü (şartname ④):** `iran.js` × `iran_ardillari.js` AYNI olay aynı gün **4 çift**
  (Olcaytu 1304-05-21 · Ebû Said 1335-11-30 · Sebzevâr/Serbedârî 1337-09-09 · Muzafferî Şîraz 1353) —
  iran.js "birleşik İran" dosyası olduğu ve iki dosya farklı künyelere bağlandığı için perspektif
  tekrarı sayılır, silinmedi. Farklı günde aynı olay: 7 vaka (DUZELTME §B2); en ciddisi
  `kronoloji_arabistan.js 1775` başlığı TDV ile ters.
- **Yeni madde: 4** — `data/kronoloji_cok_iran.js` (`KRONOLOJI_COK_IRAN`: Celâyirliler Azerbaycan'ı
  kaybetti 1386 · Şah Abbas Gîlân'ı ilhak etti 1592) · `data/kronoloji_cok_memluk.js`
  (`KRONOLOJI_COK_MEMLUK`: Zebîd'in alınışı 20 Haziran 1516 · Yemen'de Memlük idaresinin sonu 1517).
  Hepsi TDV'li, hepsi `devlet:` + `devletler:[]` taşıyor.
- **Kapanış ÖLÇÜLDÜ** (`ARAC-KRONO-DOGU-ISLAM-0929-KAPANIS.py` — kapının kendi `degismez2`si, ALÂKA
  şartıyla, küçük evrende): **32 açık (gün, yerleşim) çifti kapandı** — 1386 Azerbaycan 30/31
  (kalan Esterâbâd, Serbedârî — ayrı madde) · 1592 Gîlân 2/2. (1516 Zebîd zaten çekirdekle kapalıydı.)
- **Kapılar:** `node --check` 9 dosya temiz · `odak_olc.py` yeni dosyalar 4/4 odaklı, **yeni kırık atıf 0**
  (tek kırık atıf `kronoloji_dogu_afrika.js` Ogaden — benim değil) · `denetle.py` **SONUÇ: temiz**
  (2s 180 açık / tavan 195 · 2 0 açık · 2t 11 — değişmedi; kuyruk dosyaları 2s evreninde değil).

## Net olay adayları — 71 grubun dökümü (SENKRON-DEFTER sırası)
| Karar | Grup | Not |
|---|---|---|
| **Yeni madde yazıldı** | #10 · #40 (+#35 Memlük tarafı) | 32 çift kapandı |
| Madde VAR, başlıkta taraf adı yok → **başlık önerisi** (anahtar kırılmasın diye uygulanmadı) | #1 #2 #7 #16 #27 #30 #37 #42 #44 #45 | DUZELTME §B4 — uygulanırsa 49 çift daha kapanır (ÖNGÖRÜ: grup yerleşim sayılarının toplamı, ölçülmedi) |
| Madde VAR, Türkçe çekim eki ölçüte takılıyor | #11 ("Serbedârî hânedanı" ≠ `serbedariler`) | ölçüt sınırı |
| Madde çekirdekte VAR (Osmanlı gözüyle) | #12-#15 · #17-#18 kısmen · #28 · #29 · #32-#34 · #38 · #48 · #49 · #60 · #66 | 2s zaten çekirdeği sayıyor; Osmanlı'nın kendi olayı yazılmadı (ORTAK §5.2) |
| **Harita kusuru → YERLESIM-ONERI** | #3 #4 #5 #6 #8 #9 #17 #18 #19 #22 #24 #25 #26 #31 #35 #36 #39 #41 #52 + Ağraham | 20 öneri |
| `tabi:Mısır (…)` etiketi — ölçüt yapısal olarak eşleyemez | #56-#69 (14 grup) | YERLESIM-ONERI dipnotu |
| Ölçülemedi | #20 #21 #23 #43 #46 #47 #50 #51 #53 #54 #55 #57 #67 #68 #70 | TDV slug ölü ya da yıl yok |

## ② Bulamadım
- **Encyclopaedia Iranica okunamadı** (Cloudflare "Just a moment" — atlatılmadı). safevi.js'in 29, iran.js'in
  4 maddesinin ayı yalnız Iranica'ya dayanıyor → `gun:`de "doğrulanamadı" beyanı, t değişmedi.
- **Ölü TDV slug'ları (302):** `nadir-sah` · `afsarlar` · `erdelan` · `erdelanogullari` · `cemisgezek` ·
  `palu` · `siverek` · `busehr` · `senendec` · `imadiye` · `kara-yusuf` · `kara-yuluk-osman-bey` ·
  `tahmasb-i` · `ismail-i-safevi` (çalışan: `sah-ismail`). TDV arama sayfası bu adlar için sonuç döndürmedi.
- Nâdir Şah dönemi (1736-47) ve Kaçar kırılmaları için TDV'de yeterli tanecik bulunamadı.

## ③ İstiyorum / öneriyorum
1. 🔴 **Bekleyen 7 yama kaydının anahtarı eski t'de** (DUZELTME §B1: `etiket_yama.js` 4, `yer_yama.js`
   2, `yer_yama_memluk.js` 1). Uygulayıcı dosya+t+b eşliyor; ya anahtarlar güncellenmeli ya uygulayıcı
   dosya+b ile eşlemeli. Aynı sebeple başlık düzeltmelerini (§B4) SİZE bıraktım.
2. 🔴 YERLESIM-ONERI'deki 8 🔴 öneri (Lahsa-Katîf Safevî penceresi · Kemah · Divriği · Gence ·
   Ardahan · Cizre sahipsizliği · Mâzenderan · Şuşa) sıradaki koşuya.
3. `index.html` + `arac/paketle.py`: iki yeni dosya **bağlanmayı bekliyor** (sitede henüz görünmez).
4. Künye: `tahiri`, `cobanli`, `karabag-hanligi` eksik; `karakoyunlu.t` → 1469-04 / 1469-12-19,
   `cebri.t` → 1547 (KUNYE.md).
5. `kronoloji_memluk.js`'in 14 "WebSearch" kaynaklı maddesi yeniden kaynaklanmalı (DUZELTME §B5).

## Değişen dosyalar
- `data/` (paylaşılan — **koordinatör commitler**): `kronoloji_iran.js` · `kronoloji_iran_ardillari.js` ·
  `kronoloji_safevi.js` · `kronoloji_akkoyunlu.js` · `kronoloji_karakoyunlu.js` · `kronoloji_memluk.js` ·
  `kronoloji_misir.js` (düzeltme) · `kronoloji_cok_iran.js` · `kronoloji_cok_memluk.js` (YENİ).
  ⚠️ `kronoloji_misir.js` ve `kronoloji_iran_ardillari.js` KRONO-BAGLAMA'ya serbest bırakıldı (M-5464);
  onlar COK_ yoluna taşırken çalışma kopyasını okuyor (M-5463).
- `denetim/` (bu oturumun, adıyla commit): bu rapor · `-DUZELTME.md` · `-YERLESIM-ONERI.md` · `-KUNYE.md` ·
  `-GUN-KARAR.json` · `ARAC-KRONO-DOGU-ISLAM-0929-{TDV,GUN,GUNYAZ,YAMA2,KAPANIS}.py` ·
  `KRONO-DOGU-ISLAM-0929-tdv-onbellek/` (çekilen TDV maddeleri).
