# VENEDİK — kronoloji × harita × kaynak denetimi (DENETIM-1111)

**Kapsam:** Venedik Cumhuriyeti (`venedik`, f 0697-01-01, t 1797-05-12) + alt künyeler (`euboea-negroponte`, `girit-venedik`, `kibris-venedik`) + ardıl/komşu yapılar (`avusturya` 1797/98, `lombardiya-venedik`, `venedik-1848`, `italya` 1866, `septinsular`, `birlesik-iyon-adalari`, `naksa-dukaligi`, `carrara`/`padova-carrara`, `aquileia-patrikligi`, `kefalonya-palatin`).
**Tür:** YALNIZ DENETİM — `data/` altında hiçbir dosya değiştirilmedi.
**Makine / ağaç:** UMIT (CPU %100 yük altında; Emre'nin gece talimatı: yalnız token işi) · worktree `cranky-engelbart-c9411e`, `origin/main` 7a3659d54 ile eşit (fetch 11 Kasım 2026, geride 0).
**Ölçülemeyen:** `py arac/denetle.py` KOŞTURULMADI (yük talimatı). Değişmez 2 yerine hafif yaklaşık ölçüm yapıldı (§B, yöntemi orada). Push kapısı da koşturulmadı — rapor **kapıya hazır**.

Kaynak kısaltmaları: **TDV** = TDV İslâm Ansiklopedisi (islamansiklopedisi.org.tr/<slug>) · **DBI** = Treccani, Dizionario Biografico degli Italiani · **EI** = Treccani, Enciclopedia Italiana · **SdV** = Treccani, *Storia di Venezia* bölümleri ("La conquista della terraferma", "Venezia e la politica italiana 1454-1530", "La municipalità democratica", "Istituzioni… dall'Unità") · **HE/LZMK** = Hrvatska enciklopedija (enciklopedija.hr) · **hrcak** = Hrvatska znanstvena bibliografija makaleleri · **Miller** = W. Miller, *The Latins in the Levant* (1908) / *Essays on the Latin Orient* (1921) · **Chasiotis 1975 / Moschonas 1975** = *Ιστορία του Ελληνικού Έθνους* c. XI bölümleri — ⚠️ **yalnız Vikipedi dipnotu üzerinden görüldü, doğrudan okunmadı**: bu satırlar "kaynak teyidi gerekli" işaretlidir; Vikipedi tek dayanak olamaz, düzeltme uygulanmadan önce kitabın kendisi ya da Setton 1991 açılmalı.

Sınıflar: TARİH-HATA · TAKVİM · SESSİZ-DEĞİŞİM · EKSİK-MADDE · EKSİK-DEVLET · EKSİK-YERLEŞİM · SINIR · KAYNAKSIZ · ÇELİŞKİ · HAYALET.

---

## A. EN ÖNEMLİ 5 BULGU

1. **HAYALET — 1797-05-12 sonrası "Venedik" (≈45 yerleşim).** Künye `venedik` 1797-05-12'de bitiyor, ama Dalmaçya, İstirya, Boka, Arnavutluk kıyısı ve İyon adalarında `s:venedik` 1797-10-17'ye (Campo Formio) kadar sürüyor. Kaynak: Avusturya İstirya'yı ~12-13 Haziran 1797'de (SdV "La municipalità democratica", n. 45), Dalmaçya'yı Haziran-Ağustos 1797'de işgal etti; Zadar subayları 6 Temmuz 1797'de imparatora yemin etti (Š. Peričić, *Radovi Zavoda HAZU Zadar* 37, 1995, s. 596, hrcak.srce.hr/file/392008). İyon adalarında Fransız denetimi Haziran 1797'de başladı (çıkarma günü akademik kaynakta bulunamadı).
2. **SESSİZ-DEĞİŞİM ters yönde — Cambrai Birliği 1509-1517 haritada yok.** Kronoloji "Agnadello: Terraferma'nın bir günde kaybı" (1509-05-14) diyor, ama Padova, Vicenza, Verona, Brescia ve Bergamo'da hiç kırılma yok. Kaynak: Vicenza 5 Haziran 1509, Padova 6 Haziran 1509 kaybedildi, Padova 17 Temmuz 1509'da geri alındı (DBI "Trissino, Leonardo"; SdV 1454-1530); Verona Haziran başı 1509'da kaybedildi, 7 Ocak 1517'de iade edildi (DBI "Gritti, Andrea"); Brescia 26 Mayıs 1516'da geri alındı (DBI "Gritti").
3. **ÇELİŞKİ/HAYALET — Ege'de Venedik devleti ile Venedikli aile beylikleri karışmış.** Andros, Kea, Kythnos, Serifos, Sifnos, Folegandros, Amorgos ve Anafi 1281-1566'da `s:venedik`; oysa bunlar Naxos Dükalığı'na bağlı özel Latin beylikleriydi (Miller, *Essays* bl. XVIII). Mikonos doğrudan Venedik'ti, ama 1537'de düştü (atlasta 1566). Semadirek 1281-1335 `venedik` gösteriliyor; Venedik'in elindeyken dönem 1466-1479'du (Miller, *Essays* ek liste). Egina 1281'den beri `venedik` gösteriliyor; Venedik hâkimiyeti ~1451-1537'dir.
4. **EKSİK-YERLEŞİM — Venedik'in ana mülklerinin haritada noktası yok.** Monemvasia (1464-1540, 1690-1715) yalnız 1281 öncesi kayıtta var. Treviso, Vicenza, Crema, Rovigo/Polesine, Chioggia, Navarin, Suda, Spinalonga, Granbosa, Ülgün, Budva ve İstirya kıyı şehirleri (Koper, Piran, Poreč, Rovinj) yok. Ravenna (1441-1509), Cremona (1499-1509) ve Apulya limanları (1496-1509) hiç Venedik gösterilmiyor. Petek motoru bu toprakları komşu peteğe emdiriyor.
5. **TARİH-HATA/ÇELİŞKİ — Kandiye 1669 iki günde.** Harita (Kandiye) ve `olaylar.js:112` 1669-09-06 diyor; künye `venedik` kronolojisi, künye `girit-venedik` t ve Sitiye/İsfakiye yerleşimleri ise 1669-09-27. TDV `girit` ve DBI "Morosini, Francesco" teslim anlaşmasını 6 Eylül 1669'a koyuyor; 27 Eylül için akademik kaynak bulunamadı. Bunlara İyon adalarında 1798-1815'in topyekûn "Fransız" gösterilmesi (§F) ve `septinsular` f'nin Jülyen günle yazılması (TAKVİM, §F) eklenir.

---

## B. Ölçüm yöntemi ve sayılar

- `arac/girdi.yukle()` ile bütün yerleşim kayıtları (yamalar dahil) okundu: **111 yerleşimde 142 Venedik dönemi** (`venedik`, `euboea-negroponte`; `girit-venedik` ve `kibris-venedik` künyeleri haritada hiç kullanılmıyor, Girit ve Kıbrıs `s:venedik` ile boyanıyor).
- **Hafif Değişmez 2 yaklaşımı** (denetle.py DEĞİL): her Venedik dönemi ucunun (1281 < gün ≤ 1866) ±30 gün içinde, D2 evrenindeki (`olaylar*.js` + `kronoloji_sinir*.js`, 1852 madde 1281-1866) bir maddenin metninde yerleşim adı ya da "Venedik/Venezia" geçiyor mu? Sonuç: 230 uç → **108 ad eşleşmesi · 90 yalnız "Venedik" eşleşmesi (bir kısmı sahte, örn. Brescia 1426-01-01 ↔ ilgisiz Osmanlı maddesi `olaylar_ek11.js:73`) · 32 hiç madde yok.** Bu sayı denetle.py ölçütüyle aynı değildir (denetle yer eşleşmesini kendi kuralıyla yapar); **ölçülemedi** say, HAVVA/KASA'da `denetle` ile doğrulanmalı.
- ⚠️ `kronoloji_venedik.js` (87 madde), `kronoloji_cok_venedik.js` (7 madde) ve künye `kronoloji:` alanı **D2 evreninde DEĞİL** — bu dosyalardaki Venedik maddeleri harita kırılmalarını Değişmez 2 açısından karşılamaz. Aşağıdaki "kronolojide var ama D2'de yok" notları bundandır.

Denetlenen: künye 16 · künye-kronoloji maddesi 10 (`venedik`) + 87 (`kronoloji_venedik.js`) + 7 (`kronoloji_cok_venedik.js`) · yerleşim 111 (+22 Venedik olması gerekip olmayan aday) · kaynakla karşılaştırılan tarih ≈ 95.

---

## C. Değişmez 2 — D2 evreninde maddesi olmayan kırılmalar (32)

| # | Kırılma | Yerleşim(ler) | Kaynak ne diyor | Sınıf | Öneri |
|---|---|---|---|---|---|
| C1 | 1409-01-01 f | Zadar, Pag, Rab, Cres, Lošinj, Uzunada, Nadin, Vrana | Satış sözleşmesi 9 Tem 1409 (S. Antoljak, hrcak: "9. VII 1409. za 100.000 dukata prodao"); Venedik 18 Tem 1409'da Zadar'ı fiilen tutuyordu (S. Dokoza, *Radovi Zavoda HAZU Zadar* 51, 2009, hrcak/file/73997) | TARİH-HATA + SESSİZ | f → **1409-07-09** (ya da 9-18 Tem arası fiilî gün; beyan). Madde `kronoloji_venedik.js:166`daki 1409-07-09'u D2 evrenine (`olaylar_*`) taşı/kopyala |
| C2 | 1420-01-01 f | Split, Brač, Hvar, Korčula, Vis | Yalnız YIL 1420 (Matijević-Sokol, hrcak/file/34221). Trogir 22 Haz, Split 28 Haz ve Korčula 24 Nis yalnız akademik olmayan kaynakta geçiyor | KAYNAKSIZ (gün) + SESSİZ | `YYYY-01-01` kalabilir (kural). D2 maddesi "1420 Dalmaçya şehirleri Venedik'e" yaz |
| C3 | 1420-01-01 f | Kotor | Meclisler 1 Nis 1420; fiilî Venedik idaresi **25 Tem 1420** (Matijević-Sokol, "Uspostava mletačke vlasti u Kotoru 1420.", hrcak) | TARİH-HATA | f → **1420-07-25** + madde |
| C4 | 1420-06-07 f | Udine | EI "Udine": "vi rientrò il **6 giugno 1420**" | TARİH-HATA (1 gün) + SESSİZ (`kronoloji_venedik.js:176` "Friuli'nin fethi" 1420-10-01'de, D2 dışında) | f → **1420-06-06**; Friuli maddesini 1420-06-06'ya çek ve D2'ye yaz |
| C5 | 1405-06-22 f | Verona | 22 Haz teslim, 23 Haz Gabriele Emo işgali, 12 Tem capitoli (SdV "Conquista della terraferma") | SESSİZ (madde `kronoloji_venedik.js:161` 1405-01-01, gün yok, D2 dışında) | Kırılma doğru; D2'ye 1405-06-22 Verona maddesi yaz |
| C6 | 1428-01-01 f | Bergamo | Ferrara Barışı "all'inizio del 1428" (SdV); EI "Bergamo" 1427 fetih, 1430 "definitivamente annessa" der → ÇELİŞKİ; 19 Nis 1428 yalnız Vikipedi'de | ÇELİŞKİ + SESSİZ | 1428-01-01 kalsın, iki Treccani metni `ic_not`ta beyan edilsin; D2 maddesi |
| C7 | 1426-01-01 f | Brescia | Carmagnola Mart 1426'da şehir kapısında, şehir 1426'da düştü; 30 Ara 1426 Venedik'te ateşkes (SdV) | KAYNAKSIZ (gün) — tek "eşleşme" ilgisiz `olaylar_ek11.js:73` | Yıl başı kalabilir ama gerçek madde yazılmalı |
| C8 | 1412-10-30 f | Şibenik | HE "Šibenik" yalnız yıl; 30 Eki yalnız akademik olmayan kaynakta | KAYNAKSIZ (gün) | `1412-01-01` + `ic_not`, ya da akademik gün bulunursa kalsın; madde |
| C9 | 1480-01-01 f | Krk | HE "Krk" 1480 koruma/işgal, 1486 "vlasništvo Venecije" (Venedik'in mülkü); HE "Dalmacija" 1481 | ÇELİŞKİ (yıl) + SESSİZ | 1480 kalsın + iki yıl beyanı + madde |
| C10 | 1386-01-01 f | Korfu, Butrint, Paxos | Yalnız yıl (TDV `korfu`); madde `kronoloji_cok_venedik.js` (D2 dışı) | SESSİZ | Maddeyi D2 evrenine yaz |
| C11 | 1396-01-01 f | İşkodra, Drivasto | TDV `iskodra`: "1396'da… Venedikliler'e sattı" | SESSİZ | D2 maddesi |
| C12 | 1478-01-01 t | Drivasto | Akademik gün bulunamadı | SESSİZ | D2 maddesi "1478 Drivasto Osmanlı'ya" |
| C13 | 1401-01-01 f | Parga | bulunamadı (akademik) | SESSİZ + KAYNAKSIZ | madde + kaynak araştırması |
| C14 | 1407-01-01 f | İnebahtı, Missolonghi | TDV `inebahti` 1407 (madde D2 dışında) | SESSİZ | D2'ye taşı |
| C15 | 1389-01-01 f | Argos | Argos-Nauplion 1388'de Mary of Enghien'den satın alındı (dünya kaynağı; akademik gün bulunamadı) | SESSİZ | madde |
| C16 | 1333-01-01 f | Ston | Ston 1333'te **Dubrovnik**'e geçti (HE 'Ston'), Venedik üst hâkimiyeti dolaylı | SINIR (yorum) + SESSİZ | `dubrovnik` olarak yazmak daha doğru olabilir — Emre'ye seçenek |
| C17 | 1686-06-01 f | Modon | **7 Tem 1686** (Chasiotis 1975 s. 24 — kaynak teyidi gerekli); TDV yalnız 1686 | TARİH-HATA + SESSİZ | f → 1686-07-07 (teyit sonrası), ya da 1686-01-01 + beyan |
| C18 | 1688-09-11 f | Knin | 11 Eyl 1688 (Nazor 2002 s. 52 — teyit gerekli) | SESSİZ (gün doğru) | D2 maddesi |

C1-C18 toplam 32 uç (bazı satırlar birden çok yerleşim).

---

## D. Terraferma (İtalya) bulguları

| # | Kimlik | Atlasta | Kaynak | Sınıf | Öneri |
|---|---|---|---|---|---|
| D1 | Padova, Vicenza, Verona, Brescia, Bergamo (`yerlesimler_avrupa.js`) | 1405/1426/1428 → 1797 kesintisiz `venedik` | §A-2 (Cambrai 1509-1517) | SESSİZ (ters) / SINIR | Padova: `avusturya` (İmparator Maximilian adına Trissino) **1509-06-06 → 1509-07-17**. Vicenza (yerleşimi yok): 1509-06-05 → … Verona: imparator 1509-06 başı → **1517-01-07** (DBI Gritti; SdV 17/18 Oca = giriş — ÇELİŞKİ, beyan). Brescia ve Bergamo: Fransa Mayıs 1509 sonu (gün bulunamadı → 1509-05-14 Agnadello + beyan) → Brescia **1516-05-26**. Not: 1512 Şubat'taki kısa geri alınış ve Gaston de Foix'nın yağması da var |
| D2 | Padova | yerleşim f 1405-11-17; künye `carrara` t 1405-11-17; künye `padova-carrara` t 1405-11-22 | 16 Kas teslim sözü, 17 Kas ilk gedik, "Il 19 novembre 1405 le truppe veneziane entravano in Padova", 22 Kas Senato dedizione kabulü (DBI "Carrara, Francesco il Novello"; SdV) | ÇELİŞKİ + mükerrer künye | Aynı olay için tek gün seç (öneri 1405-11-17 ilk giriş, `ic_not`ta 19 ve 22 Kas); **`carrara` ile `padova-carrara` aynı polity — birleştir** (EKSİK değil, MÜKERRER) |
| D3 | Treviso | yerleşimi yok; kronoloji `kronoloji_venedik.js:107` 1339-01-24 | Şehir **Aralık 1338**'de Venedik'e düştü; 24 Oca 1339 barış imzası (DBI "Della Scala, Mastino"); 1381-84 Leopold, 1384-88 Carrara, 1388'den Venedik (EI "Treviso") | EKSİK-YERLEŞİM + TARİH (madde barışı tarihliyor) | Treviso noktası aç (k1 merkez, 1339→1797); madde başlığı "Treviso Barışı" ya da t 1338-12-01 + beyan |
| D4 | Vicenza | yerleşimi yok | 25 Nis 1404 dedizione (DBI Carrara Novello) | EKSİK-YERLEŞİM | nokta + `kronoloji_venedik.js:161` "Padova, Verona ve Vicenza" (1405-01-01) üç ayrı güne bölünmeli: Vicenza 1404-04-25, Verona 1405-06-22, Padova 1405-11-17 |
| D5 | Ravenna (`yerlesimler_avrupa.js`) | 1281-1797 `papalik` | Venedik 1441-1509 (SdV "Conquista della terraferma"; gün bulunamadı) | SINIR | 1441-01-01 → 1509 (Cambrai sonrası Papalık'a iade; gün araştırılmalı) `venedik` |
| D6 | Cremona / Ghiara d'Adda | 1281 sonrası Cremona kaydı yok | Blois Antlaşması 9 Şub 1499 → 1509 (SdV 1454-1530) | EKSİK-YERLEŞİM | Cremona'nın 1281 sonrası zinciri yok — ayrıca genel bir boşluk |
| D7 | Apulya limanları (Brindisi, Otranto, Trani, Monopoli) | `napoli` kesintisiz | 1496 başı rehin, 1509'a dek; 1528'de yeniden, Ocak 1530'da terk (SdV 1454-1530) | SINIR | Brindisi ve Otranto'ya `venedik` 1496-01-01 → 1509 (gün bulunamadı, beyanlı) |
| D8 | Polesine/Rovigo | yerleşimi yok; madde `kronoloji_venedik.js:235` 1482-05-03 "Polesine'in alınması", kaynak "bulunamadı" | Bagnolo Barışı **7 Ağu 1484** (SdV 1454-1530) | EKSİK-YERLEŞİM + KAYNAKSIZ | Rovigo noktası (1484-08-07 →); madde 1484-08-07 Bagnolo ile kaynaklansın |
| D9 | Crema, Bassano, Chioggia, Rovereto | yok | Crema 1449/1454 (SdV "recente acquisizione"), Chioggia Venedik çekirdeği | EKSİK-YERLEŞİM | Lagün ve Terraferma noktaları; Chioggia 1379-80 savaşı maddeleri (`kronoloji_venedik.js:137,142`) şu an noktasız |
| D10 | Venedik, Padova, Verona, Udine, Feltre, Belluno | `avusturya` f **1797-10-17** (Campo Formio imzası) | Fransızlar 18 Oca 1798'de gemiye bindi, Wallis'in Avusturyalıları aynı sabah Santa Chiara'ya çıktı (SdV "La municipalità democratica": "il giorno 18 i Francesi si imbarcarono tutti"); Vicenza piskoposunun 29 Oca 1798 mektubu da karada Ocak sonunu gösteriyor (DBI "Zaguri") | TARİH-HATA (antlaşma ≠ devir) | `fransa-cumhuriyet` dönemi **1798-01-18**'e uzatılsın, `avusturya` f 1798-01-18; madde "Avusturya Venedik'e girdi" (D2) |
| D11 | Bergamo, Brescia | `venedik` t 1797-05-12 | Brescia cumhuriyeti **17 Mart 1797** (EI "Brescia"); Bergamo 12 Mart (akademik gün bulunamadı) | TARİH (yaklaşıklık zaten beyanlı) | Brescia t → 1797-03-17 (`fransa-cumhuriyet`/"Repubblica Bresciana" ayrımı Emre'ye) |
| D12 | Venedik ve Veneto 1866 | harita `avusturya`→`italya` **1866-10-03**; künye `lombardiya-venedik` t **1866-10-12** | Viyana Antl. 3 Eki; Le Bœuf devri ve İtalyan girişi **19 Eki**; plebisit 21-22 Eki; R.D. 4 Kas 1866 n. 3300 (Treccani "Vienna"; Treccani *L'Unificazione* "I plebisciti"; SdV "Istituzioni… dall'Unità") | ÇELİŞKİ | Harita ile künye aynı günde olmalı. Öneri: harita fiilî devir 1866-10-19 ya da antlaşma 10-03 — Emre seçer; 10-12 kaynaksız (muhtemelen onay belgelerinin değişimi), düzelt |
| D13 | `lombardiya-venedik` künye | haritada hiç kullanılmıyor (0 yerleşim) — 1815-1866 Veneto `avusturya` | — | Bilgi (EKSİK-DEVLET değil) | Ya künye `harita:"avusturya"` alır ya da Veneto noktaları `lombardiya-venedik`e bağlanır |
| D14 | `aquileia-patrikligi` (f 1077, t 1420-01-01) | Udine 1281-1420 `almanya` — künye haritada kullanılmıyor | Patrikliğin laik egemenliği Venedik fethine (6 Haz 1420) dek | SINIR + TARİH | Udine 1281→1420-06-06 `aquileia-patrikligi`; künye t → 1420-06-06 |
| D15 | Gradisca d'Isonzo | `venedik` 1473-1511 (Treccani yıl) | EI: Friuli "con Gradisca" 1420 — kale 1473'te kuruldu; gün bulunamadı | Kaynaklı yıl, OK | — |

## E. Dalmaçya, İstirya, Arnavutluk

| # | Kimlik | Atlasta | Kaynak | Sınıf | Öneri |
|---|---|---|---|---|---|
| E1 | Dalmaçya + Boka (~30 yerleşim: Zadar, Split, Şibenik, Kotor, Herseknovi, Sin, Klis, Knin, adalar…) | `venedik` → 1797-10-17 | §A-1 (Peričić 1995) | HAYALET (künye t 1797-05-12 sonrası) | 1797-05-12 → 1797-07-06 arası için: ya `avusturya` f 1797-07-06 (Zadar, akademik) + bölge emsali beyanı, ya da 05-12 → işgal günü `__BOSLUK__`/beyan. Split, Şibenik, Kotor 1797 günleri bulunamadı. Sonraki adım Šišić 1894, Butorac 1938, Istrapedia |
| E2 | Pula (İstirya) | `venedik` 1331 → 1797-10-17 | Avusturya işgali ~12-13 Haz 1797 (SdV, n. 45) | HAYALET | `avusturya` f 1797-06-12 (beyanlı) |
| E3 | Lastovo, Mliyet | `venedik` 1281-1358 | Lastovo için "ABİ MERKEZ: Dubrovnik" yazılı, Dubrovnik ise 1205-1358 Venedik üst hâkimiyetinde | SINIR (yorum) | Kabul edilebilir; beyan var |
| E4 | Bar (Antivari) | `venedik` t **1571-01-01** | Ülgün ve Bar 1571'de düştü; sefer 29 Nis 1571'de başladı (TDV "Semiz Ahmed Paşa"; EI "Dulcigno") | TARİH-HATA (01-01, seferden önce) | t → 1571 Nisan sonrası; akademik gün bulunana dek 1571-04-29 + beyan (ya da kurala göre `YYYY-01-01` kalıyorsa `ic_not`ta "seferden önce, yanlış yönde yaklaşıklık" yaz) |
| E5 | Ülgün (Ulcinj), Budva | yerleşimi yok | Ülgün 1420-1571 (EI "Dulcigno"), Budva 1442-1797 | EKSİK-YERLEŞİM | iki nokta |
| E6 | Draç | 1392 → 1501-08-17 | 1392 yalnız yıl (EI "Durazzo"); TDV `drac` "Ağustos 1501" | KAYNAKSIZ (gün 17) | t → 1501-08-01 + beyan, ya da 17 Ağu kaynağı yazılsın |
| E7 | İşkodra | t 1479-01-25 (antlaşma) | TDV `iskodra`: şehir antlaşmadan sonra boşaltılarak teslim edildi; fiilî gün (Nisan 1479) yalnız Vikipedi'de | TARİH (antlaşma ≠ devir), kabul edilebilir | `ic_not` beyanı |
| E8 | Nadin, Vrana | t 1540-10-02 | Antlaşma: atlas 2 Eki; TDV `anabolu` **3 Eki 1540** | ÇELİŞKİ (1 gün) | TDV esastır → 1540-10-03 (bütün 1540 kırılmaları ve `kronoloji_venedik.js:324`); `olaylar_ek5.js:490`daki 1540-11-01 Anabolu teslimi ayrı olaydır |
| E9 | `kronoloji_venedik.js:122` Zadar Antlaşması | 1358-02-18 | doğru (LZMK 'Zadarski mir') | OK | — |

## F. Levant: Mora, İyon, Ege, Girit, Kıbrıs

| # | Kimlik | Atlasta | Kaynak | Sınıf | Öneri |
|---|---|---|---|---|---|
| F1 | Kandiye / Sitiye / İsfakiye / künye `girit-venedik` / künye `venedik` kronolojisi | 09-06 ile 09-27 karışık | TDV `girit` ve DBI "Morosini": teslim anlaşması **6 Eyl 1669**; 27 Eyl için akademik kaynak yok | ÇELİŞKİ | Hepsini 1669-09-06'ya çek (27 Eyl fiilî boşaltma için kaynak bulunursa `ic_not`) |
| F2 | Resmo (Girit) | t 1646-11-13 | TDV `resmo`: "6 Şevval 1056 (**15 Kasım 1646**)"; Setton (Vikipedi aracılığıyla) 13 Kas | ÇELİŞKİ — TDV esas | t → **1646-11-15**, `ic_not`ta Setton 13 Kas |
| F3 | Suda, Spinalonga, Granbosa | Venedik dönemi yok (Suda noktası var, `yer_yama.js:215`; Granbosa `yer_yama.js:214`) | Granbosa 1692 (TDV `girit`, yıl; 6 Ara 1691 akademik değil) · Suda 24 Eyl 1715 · Spinalonga 7 Eki (Hatzopoulos) / 4 Eki 1715 | EKSİK (dönem) + ÇELİŞKİ (Spinalonga) | Suda ve Granbosa'ya `venedik` 1669-09-06 → 1715-09-24 / 1692-01-01; Spinalonga noktası. `olaylar.js:114` Granbosa maddesi var, harita karşılığı yok (ters SESSİZ) |
| F4 | Hanya | 1645-08-22 | Setton s. 126-127 (Royal Collection üzerinden); bir İtalyan kaynağı 17 Ağu | OK (küçük çelişki) | — |
| F5 | Kıbrıs (Baf, Lefkoşa, Limasol, Girne, Magosa) | 1489-02-26; Limasol 1570-07-02; Lefkoşa 1570-09-09; Girne 1570-09-17; Magosa 1571-08-01 | TDV `kibris` hepsini doğruluyor (Limasol 28 Muharrem 978 = 2 Tem; Lefkoşa 9 Eyl; Magosa 9 Rebîülevvel 979 = 1 Ağu). DBI "Bragadin": çıkarma 3 Tem, anahtarlar 5 Ağu. Girne günü hiçbir kaynakta yok | OK · Girne KAYNAKSIZ (gün) | Girne 09-17 için kaynak yaz ya da Lefkoşa gününe (09-09) + "teslim Lefkoşa'dan hemen sonra" beyanı |
| F6 | künye `venedik` kronolojisi `devletler.js:384` | "1571-08-01 Kıbrıs Osmanlı'ya düştü (**İnebahtı zaferine rağmen**)" | İnebahtı 7 Eki 1571'de, Magosa'dan **sonra** | TARİH-HATA (anlatı) | "İnebahtı'dan iki ay önce" ya da ibareyi kaldır |
| F7 | künye `venedik` kronolojisi | "1684-01-01 Kutsal İttifak Savaşı'nda Mora'yı fethetti (1699'a dek)" | Kutsal İttifak'a katılış 5 Mar 1684 (`kronoloji_venedik.js:437`); Mora seferi 1685-1687 (Koron 11 Ağu 1685, DBI "Morosini") | TARİH-HATA | t → 1685-06-01 (sefer başı, `kronoloji_venedik.js:442`) ya da 1684-03-05 + başlık "Kutsal İttifak'a katıldı" |
| F8 | künye `venedik` kronolojisi | "1463-01-01 Osmanlı ile ilk büyük savaş" | Yalnız yıl; "ilk" ibaresi yanlış (1416 Gelibolu, 1423-30 Selanik savaşı önce) | TARİH (yıl), ANLATI | `kronoloji_venedik.js:215` ile birleştir; "ilk uzun savaş" |
| F9 | İnebahtı 1499 | yerleşim t 1499-08-26; `olaylar_ek5.js` 1499-08-28 | TDV `inebahti` **26 Ağu**; Miller 29 Ağu | ÇELİŞKİ | 08-28 maddesi 08-26'ya (TDV esas), `ic_not`ta Miller 29 |
| F10 | Modon / Koron 1500 | Modon t 1500-08-10; **Koron t 1500-08-09** | TDV `modon` 14 Muharrem 906 = 10 Ağu (Miller 9 Ağu). TDV `koron`: Koron ve Navarin **Modon'dan sonra** teslim alındı (Ağustos 1500) | TARİH-HATA (Koron Modon'dan önce olamaz) | Koron t → 1500-08-10'dan sonra; gün bulunamadı → 1500-08-10 + beyan ("Modon'un ardından, ~1 hafta") |
| F11 | Navarin | 3 kayıt `yer_yama_fransa.js:161`, `yer_yama_ing.js:173`, `yer_yama_misir.js:171` (yalnız 1827 için); 1423-1500, 1686-1715 Venedik dönemi yok | Navarin 1500, 1686 (Eski 3 Haz, Yeni 14 Haz — Chasiotis, teyit gerekli), 1715 | EKSİK (dönem) | Navarin'e iki Venedik dönemi |
| F12 | Monemvasia | 1281 sonrası kaydı yok | Venedik 1464 (Senato 21 Eyl 1464 idaresini kurdu — Miller, *Essays*) → 1540 Kasım; 12 Ağu 1690 (Chasiotis s. 31) → 7 Eyl 1715 (yalnız Vikipedi) | EKSİK-YERLEŞİM | Monemvasia zinciri (Bizans → Mora Despotluğu → Venedik 1464 → Osmanlı 1540 → Venedik 1690 → Osmanlı 1715) |
| F13 | Mora 1685-1687 kazançları | Modon 1686-06-01 · Anabolu/Argos/Kranidi/Ermiyoni/Damala/Methana 1686-08-30 · Balyabadra, Vostitsa, Kalavrita, Tripoliçe, Gördüs, Sikyon, Elafonisos 1687-08-01 · İnebahtı, Missolonghi 1687-07-01 | Modon **07-07**; Nauplion **08-29** (bir kaynak 3 Eyl); Argos **08-07**; Patras **07-24/25**; Lepanto **07-25** (TDV "1687 Temmuzunda"); Korint **08-07**; Mistra Ağu 1687 (gün yok) — Chasiotis 1975 s. 24-26 (**Vikipedi dipnotu üzerinden; teyit gerekli**) | TARİH-HATA (ay başı yaklaşıklıkları) | Setton 1991 ya da Chasiotis açılınca günleri yaz; açılmazsa mevcut ay başları "BEYANLI YAKLAŞIKLIK" ile kalsın. `kronoloji_cok_venedik.js` `ic_not_gun`: "atlasın 1687-08-06 kırılması" — atlasta artık 07-01, not bayat |
| F14 | Atina | 1687-09-29 → 1688-04-08 | Giriş 29 Eyl 1687 (DBI "Morosini") OK; Attika boşaltması **10 Nis 1688** (Chasiotis, teyit gerekli) | TARİH (2 gün) + SESSİZ (1688 boşaltma maddesi yok) | t → 1688-04-10 (teyit sonrası) + madde |
| F15 | Sakız | harita t 1695-02-22; `kronoloji_venedik.js:467` 1695-02-09 | TDV `sakiz-adasi`: 21 Eyl 1694 teslim; "22 Şubat 1695'te … kale kolayca alındı" | ÇELİŞKİ (madde deniz savaşı günü) | Madde → 1695-02-22; 02-09 deniz savaşı ayrı madde olabilir |
| F16 | Avlonya/Kanina | 1690-09-17 → 1691-03-15 | Kanina 17 Eyl, Avlonya 18 Eyl 1690; geri alış 14 Mar 1691 (Chasiotis, teyit gerekli) | küçük TARİH | Avlonya f 09-18, t 03-14 (teyit sonrası) |
| F17 | Mora 1715 kayıpları | Gördüs/Sikyon 1715-06-01 · Balyabadra, Vostitsa, Kalavrita, Tripoliçe, Elafonisos 07-01 · Anabolu/Argos/… 07-20 · Modon **08-01** · Koron 08-16 · Çuha 09-07 | Anabolu **20 Tem** (TDV `anabolu`) OK; Korint garnizonu 5 Tem'de çıkmaya başladı (Chasiotis); Argos 9 Tem'de boş bulundu; Modon en son düştü (TDV `modon` "1127 yazında"; Finlay) — Modon 08-01 Koron'dan önce olamaz; Çuha yalnız "Eylül" (Miller); Monemvasia 7 Eyl (yalnız Vikipedi) | TARİH-HATA (Gördüs, Argos, Modon) · KAYNAKSIZ (gün) | Gördüs → 1715-07-05; Argos → 1715-07-09 (teyit sonrası); Modon ≥ Koron (16 Ağu) + beyan; Çuha → 1715-09-01 + beyan (09-07 Monemvasia'dan alınmış görünüyor) |
| F18 | künye `venedik` 1715 maddesi ve `kronoloji_venedik.js:486` | 1715-09-07 "Mora'nın kaybı" | Sarıkaya & Göger 2018 (Tarih Dergisi 67) zaten kaynaklı | OK | — |
| F19 | Ayamavra 1715-1718 | Osmanlı 1715-09-07 → Venedik 1718-07-21 | TDV `ayamavra`: Eyl 1715 Osmanlı; Venedik 1716'da yeniden aldı (gün bulunamadı) | TARİH (Venedik dönüşü antlaşmaya bağlanmış) | Beyan; 1716 gün araştırılsın |
| F20 | Preveze, Vonitsa | Venedik 1718-07-21'den | Venedik Kasım 1717'de aldı (yalnız Vikipedi görsel altyazısı) | ölçülemedi | araştırma |
| F21 | Bozcaada | Venedik 1656-07-13 → **1657-08-25** | TDV `bozcaada`: 21 Ramazan 1066 = 13 Tem 1656; Venedik **30 Ağu 1657**'de boşalttı (25 Ağu çıkarma) | TARİH-HATA | t → **1657-08-30** |
| F22 | Limni | 1656-07-13 → 1657-11-15 | TDV `limni`: "1656 Temmuzunda" / "1657 Kasımında"; teslim 12 Kas 1657 (Setton s. 189, Vikipedi üzerinden) | TARİH (f ay; t 3 gün) | f 1656-07-01 + beyan (gün komşudan: Bozcaada 07-13 — CLAUDE.md'ye göre kaynaklıysa kabul), t 1657-11-12 (teyit sonrası) |
| F23 | Semadirek | Venedik 1281-1335 ve 1656-07-13 → 1657-11-15 | TDV `semadirek` 1204-?; Miller ek liste: Bizans 1261-~1431, Gattilusio, Türk 1456, Papalık 1456-59, Dimitrios Paleologos 1460-66, **Venedik 1466-79**. 1656-57 Venedik Semadirek'i için hiçbir kaynak yok | TARİH-HATA / HAYALET | 1281-1335 → `bizans`; Venedik 1466-1479 ekle; 1656-57 dönemini kaldır (kaynaksız). Limni de 1464-1479 Venedik (Miller) — atlasta yok |
| F24 | Kiklad aile beylikleri (Andros, Murted/Kea, Termiye/Kythnos, Koçbaba/Serifos, Sifnos, Folegandros, Yamurgi/Amorgos, Namfi/Anafi) | `venedik` 1281 → 1566-04-15 | Miller *Essays* bl. XVIII: Andros (Sommaripa) 1566'ya dek; Kea 1537'de alındı, 1538'de düke verildi; Serifos (Michieli) 1537; Amorgos (Querini) 1537; Sifnos/Folegandros (Gozzadini) 1617'ye dek | ÇELİŞKİ (Venedik devleti değil) | `naksa-dukaligi` (tâbi beylikler) ya da ayrı "Ege Latin beylikleri" künyesi; 1537-1566 `v:` Osmanlı tâbiliği (Paros/Santorini ile aynı desen). Hangi künye kullanılacağı Emre'ye |
| F25 | Mikonos | `venedik` → 1566-04-15 | Ghisi vasiyetiyle 1390'dan Venedik devleti; Barbaros 1537 (Miller: "never to become Venetian again") | TARİH-HATA | t → 1537-10-01 (Ege seferi; gün yok) ya da antlaşma 1540-10-03 |
| F26 | Egina | `venedik` 1281 → 1537-10-01 | Venedik ~1451'den (yalnız Vikipedi listesi); 1317-1451 Katalan (Caopena); Barbaros Ekim 1537 (Miller) | SINIR | 1281-1451 `atina-dukaligi`/Katalan; 1451 → Ekim 1537 `venedik` (1451 kaynak teyidi gerekli) |
| F27 | İstanbulya (Astipalya), Karpatos, Kaşot | `venedik` 1281 → 1537-10-01 | Querini (Stampalia) ve Cornaro aile tımarları, Venedik devleti değil (Miller bl. XVIII); Karpatos 1522 mi 1537 mi — ÇELİŞKİ | ÇELİŞKİ | aile beyliği künyesi ya da beyan; Karpatos ucu araştırılsın (1522 Rodos'un düşüşü) |
| F28 | Kuzey Sporatlar (İskiathos, İskopelos, İskiros, Alonisos) | f **1453-05-29** → 1538-08-01 | 1453-1455 arası Venedik'e geçiş (yalnız Vikipedi listesi); 1538 kaybı (Miller, gün yok) | KAYNAKSIZ (gün) | f 1453-05-29 İstanbul'un fethidir, adaların günü değil → 1453-01-01 + beyan (ya da kaynaklı gün) |
| F29 | Oreoi, Karistos (Eğriboz) | `venedik`; Eğriboz `euboea-negroponte` | Aynı adada iki ayrı künye | ÇELİŞKİ (tutarlılık) | Üçü aynı künyede olmalı (Karistos 1365'ten doğrudan Venedik; öncesi Lombard üçlü beylikleri, Venedik üst hâkimiyeti) |
| F30 | Anabolu (Nauplion) | `venedik` 1281 → 1540 | Argos-Nauplion beyliği 1388'de Mary of Enghien'den Venedik'e satıldı; öncesi Atina Dükalığı / Enghien | SINIR | 1281-1388 `atina-dukaligi` (ya da beyanlı boşluk), Venedik 1388/89'dan |
| F31 | Anabolu, Monemvasia 1540 teslimi | t 1540-11-01 (`olaylar_ek5.js:490`) | Kasım 1540 (Miller), gün yok | ONLY-MONTH, OK (beyan) | — |
| F32 | Zaklise (Zakynthos) | Osmanlı 1479-08-01 → Venedik 1482-01-01 | Venedik işgali 1482, Osmanlı'ya haraç karşılığı resmî devir 1485 (dünya kaynağı; akademik gün bulunamadı) | KAYNAKSIZ (gün) + SESSİZ | D2 maddesi + kaynak |
| F33 | Kefalonya 1479-1500 öncesi | `napoli` 1281-1479 | künye `kefalonya-palatin` (Orsini→Tocco, 1194-1479) var ama haritada kullanılmıyor | SINIR (komşu) | Kefalonya/Zaklise 1281-1479 → `kefalonya-palatin` |

### F-İyon 1797-1864 (ardıl yapılar)

| # | Kimlik | Atlasta | Kaynak | Sınıf | Öneri |
|---|---|---|---|---|---|
| G1 | Korfu, Kefalonya, Zaklise, Ayamavra, İthaki, Paksos, Çuha, Butrint, Parga, Preveze, Vonitsa | `venedik` → 1797-10-17 | Cumhuriyet 1797-05-12'de bitti; Fransız denetimi Haziran 1797 (Moschonas 1975 s. 383-387, Vikipedi üzerinden); 28 Haz çıkarma günü akademik kaynakta bulunamadı | HAYALET | 05-12 → Fransız çıkarması: kaynak bulunursa `fransa-cumhuriyet` f o gün; bulunamazsa 1797-05-12'den `fransa-cumhuriyet` + "BEYANLI YAKLAŞIKLIK: Campo Formio 17 Eki ile de jure" |
| G2 | İyon adaları | `fransa-cumhuriyet` 1797-10-17 → **1800-03-21** | Rus-Osmanlı donanması: Çuha, Zaklise, Kefalonya ve Ayamavra Eki-Kas 1798; Korfu **4 Mar 1799** (Moschonas; diğerleri 3 Mar), tek tek adalar için gün bulunamadı | SINIR/TARİH-HATA | Ekim 1798 → 1800 arası için Rus-Osmanlı işgali: `isg:` (`rusya`+Osmanlı ortak) ya da künye `septinsular`ın f'si öne çekilir. Seçenek Emre'ye |
| G3 | künye `septinsular` | f **1800-03-21** | İstanbul Antlaşması 21 Mar 1800 **Jülyen** = **2 Nis 1800** Gregoryen (Moschonas s. 393; aynı kaynakta metin 6 Nis/25 Mar Jülyen diyor — ÇELİŞKİ) | **TAKVİM** | f → 1800-04-02 + `ic_not_takvim` "21 Mart (J) = 2 Nisan (G)"; bütün yerleşim kırılmaları birlikte taşınır |
| G4 | İyon adaları | `septinsular` → 1807-07-07 (Tilsit) → `fransa-cumhuriyet` | Tilsit 7 Tem OK; Fransızlar Korfu'ya 20 Ağu çıktı, ilhak 1 Eyl 1807 (Moschonas s. 400) | OK (de jure) | `ic_not` |
| G5 | İyon adaları | `fransa-cumhuriyet` → **1815-11-05** hepsi | İngiliz: Zaklise ve Kefalonya 4 Eki 1809, İthaki 8 Eki 1809, Çuha 12 Eki 1809, Ayamavra 16 Nis 1810, Paksos 1813 başı, Korfu Haziran 1814 (23 Nis mütareke) (Moschonas s. 400-401; teyit gerekli) | SINIR/TARİH-HATA | Ada başına `ingiltere` (işgal) dönemi; 1815-11-05 → `birlesik-iyon-adalari` |
| G6 | Parga | `fransa-cumhuriyet` 1797-10-17 → 1815-11-05 → `ingiltere` → 1819-05-10 | 1800-07 Osmanlı'ya bağlı özel statü; 1807 Fransız; **22 Mar 1814** İngiliz; Ali Paşa'ya devir 1819 baharı (Dumas: bayrak 9 Mayıs'ta indi; sözleşme 24 Nis onaylandı) (Moschonas; EB1911 "Parga") | SINIR | 1800-1807 dönemi; İngiliz f 1814-03-22; 1819 günü araştırılsın |
| G7 | Butrint | Ali Paşa 1798-10-23 | 25 Eki 1798 (yalnız Vikipedi) | ölçülemedi | — |
| G8 | Birleşik İyon → Yunanistan | 1864-06-02 | 21 Mayıs (J) = 2 Haziran (G) — takvim aritmetiği; akademik kaynak açılmadı | OK (teyitsiz) | `ic_not_takvim` var mı bakılsın |

---

## H. Künye ve kronoloji tutarlılığı (`data/devletler.js` · `kronoloji_venedik.js`)

| # | Kimlik | Bulgu | Sınıf | Öneri |
|---|---|---|---|---|
| H1 | `kronoloji_venedik.js:181` Selanik 1423-01-01 | harita 1423-09-14; TDV `selanik` yalnız 1423; 14 Eyl akademik kaynakta bulunamadı | ÇELİŞKİ | İkisi aynı gün olmalı; kaynak bulunamazsa ikisi de 1423-01-01 + beyan |
| H2 | `kronoloji_venedik.js:186` Brescia ve Bergamo 1428-01-01 | Brescia 1426, Bergamo 1428 — iki ayrı olay | TARİH-HATA | ikiye böl |
| H3 | `kronoloji_venedik.js:270` "İkinci savaşın sonu" 1503-01-01 | TDV 1502; barış 14 Ara 1502, onay 1503 (yaygın) | KAYNAKSIZ | 1502-12-14 + kaynak (araştırılmadı) |
| H4 | `kronoloji_venedik.js:107` Treviso 1339-01-24 | barış günü; şehir Ara 1338 | TARİH (anlatı) | §D3 |
| H5 | `kronoloji_venedik.js:166` Dalmaçya satın alımı 1409-07-09 | gün doğru (Antoljak); kaynak alanı "bulunamadı" | KAYNAKSIZ → kaynaklanabilir | kaynak: Antoljak (hrcak) |
| H6 | `kronoloji_venedik.js:457` Granbosa 1692 | TDV yıl; harita karşılığı yok | §F3 | — |
| H7 | `kronoloji_venedik.js:349` Kıbrıs antlaşması 1573-03-07 | TDV `kibris` 3 Zilkade 980 = 7 Mar 1573 | OK | — |
| H8 | `kronoloji_venedik.js:496` Pasarofça 1718-07-21 | TDV OK | OK | — |
| H9 | künye `venedik` son maddesi 1797-05-12 | "Napolyon Cumhuriyet'e son verdi, **Campo Formio ile Avusturya'ya bırakıldı**" — iki olay tek günde | TARİH (anlatı) | Campo Formio ayrı madde (`kronoloji_venedik.js:531` zaten var) |
| H10 | künye `girit-venedik` f 1204-08-12 · `kibris-venedik` | Haritada hiç kullanılmıyor; Girit/Kıbrıs `s:venedik` | Bilgi | Ya alt künyeler `harita:"venedik"` alıp yerleşimlere yazılır ya da kaldırılır — mükerrer anlatı riski |
| H11 | künye `naksa-dukaligi` t **1579-01-01** | harita Nakşa/Paros/Santorini 1566-04-15'te Osmanlı `d:` | ÇELİŞKİ (künye ile harita) | 1566-1579 Yasef Nasi dükalığı `v:` tâbi olarak gösterilmeli ya da künye t 1566 |
| H12 | künye `carrara` (1345 → 1405-11-17) ve `padova-carrara` (1318 → 1405-11-22) | aynı hanedan, aynı şehir, iki künye, farklı uç | ÇELİŞKİ / mükerrer | birleştir (§D2) |

---

## I. Neler bulunamadı / ölçülemedi

- **Ölçülemedi:** `denetle.py` (Değişmez 1/2/3/8) koşturulmadı; §B'deki D2 sayısı yaklaşıktır. Haritanın üretilmiş çıktısı (bölge sınırları) ölçülmedi; bulgular yerleşim `s:` zincirine dayanıyor.
- **Akademik gün bulunamadı:** Treviso 1381/1388 · Cividale 1419 · Brescia 1426 · Bergamo 1428 · Crema 1449 · Ravenna 1441/1509 · Apulya limanları · Şibenik 1412 · Trogir/Split 1420 · Krk · Korfu 1386 · Parga 1401 · Drivasto/Leş 1478 · Bar 1443 · İşkodra 1479 fiilî teslim · 1797 Split/Şibenik/Kotor işgali · Bergamo 1797 · Koron ve Navarin 1500 · Girne 1570 · Kandiye 27 Eyl 1669 · Granbosa (gün) · Limni 1656 (gün) · Mistra 1687 · 1715'te Balyabadra grubu, Navarin, Koron, Modon, Çuha · Ayamavra 1716 · Preveze/Vonitsa 1717 · İyon adaları 1798 tek tek · Fransız çıkarması 1797 · Parga 1819 · Egina 1451.
- **Kaynak teyidi gerekli (Vikipedi dipnotu üzerinden görülen akademik kitap):** Chasiotis 1975 ve Moschonas 1975 (*Ιστορία του Ελληνικού Έθνους* c. XI), Nazor 2002, Čoralić 2001, Setton 1991 (doğrudan açılamadı). §F13-F17, G2-G6'daki günler bunlara dayanıyor; uygulanmadan önce kitap ya da Setton açılmalı.
- **Treccani** Korfu sayfası 502 verdi (ölçülemedi ≠ yok).
- **Thiriet, *Régestes*** ve Istituto Veneto / Deputazione neşirlerine bu turda ulaşılamadı.

## J. Sayılar

| | |
|---|---|
| Denetlenen künye | 16 |
| Denetlenen kronoloji maddesi | 104 (künye 10 + `kronoloji_venedik.js` 87 + `kronoloji_cok_venedik.js` 7) + ilgili `olaylar*` maddeleri |
| Venedik dönemi taşıyan yerleşim | 111 (142 dönem) + 22 eksik/aday yerleşim |
| Kaynakla karşılaştırılan tarih | ≈ 95 |
| D2 yaklaşık ölçümünde maddesiz uç | 32 (§C) |
| **Bulgu satırı** | **C 18 · D 15 · E 9 · F 33 · G 8 · H 12 = 95** (bunların ~15'i "OK/bilgi") |
| Sınıf dağılımı (yaklaşık) | TARİH-HATA 24 · SESSİZ 20 · ÇELİŞKİ 17 · SINIR 12 · EKSİK-YERLEŞİM/DÖNEM 10 · HAYALET 4 (≈45 yerleşim) · KAYNAKSIZ 10 · TAKVİM 1 |

## K. Emre'ye sorulacak (taraf tutmadan)

1. 1797 Mayıs-Ekim arası Dalmaçya/İstirya/İyon: işgal günü mü (Avusturya Haziran-Temmuz, Fransa Haziran), Campo Formio (17 Eki) mi? Künye 1797-05-12'de bittiği için ikinci seçenek bile `venedik` olarak kalamaz.
2. 1798-01-18 (Avusturya'nın Venedik'e fiilî girişi) ile 1797-10-17 (antlaşma) arasında hangisi? 1866'da da aynı soru: 3 Eki antlaşma mı, 19 Eki devir mi?
3. Ege Latin aile beylikleri: `naksa-dukaligi` altına mı, yeni bir künyeye mi?
4. Rus-Osmanlı İyon işgali (1798-1800): `isg:` mi, `septinsular` f'si mi?
