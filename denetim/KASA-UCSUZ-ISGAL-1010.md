# KASA-UCSUZ-ISGAL-1010 — teyit edilmiş ama uçsuz 4 dilim için SON uç arama (+ Thonon ve Görice şartları)

Görev: YILDIRIM BAYEZIT (YENI5 hükmü (d) ① ②) · Araştırmacı: KASA · `data/` DONUK · salt okuma · `main` 14bb94b9.

## A. Thonon şartı (①) — ÖLÇÜLDÜ
- `bern` künyesi YOK; `isvicre` VAR (1291-08-01 → 1945).
- **Atlasın kendi emsali:** Bern'in 1536'da Savoya'dan aldığı Vaud'un merkezi **Lozan** atlasta
  `savoya 1281-1536 · isvicre 1536-01-01 →`. Yani atlas Bern'in tâbi toprağını ZATEN `isvicre` olarak yazıyor
  (D205 ②, "yapı var, adı başka"). Thonon (Chablais) aynı 1536 Bern seferiyle alındı (HLS "Thonon").
- ⇒ **Thonon 1536 → 1567 `d:isvicre`** emsalle tutarlı; ayrı `bern` künyesi gerekmez. (Lozan ile aynı sınıf; hüküm
  senin, ama emsal ölçüldü.)
- 🔴 **Yan bulgu (aynı taramada):** **Cenevre** atlasta `almanya 1281-1536 · isvicre 1536-01-01 → 1923`. Cenevre
  Konfederasyona ancak 1815'te kanton olarak girdi; 1798-1813 Fransız ilhakı (Léman departmanı merkezi) yazılı değil.
  Bu turda kaynak OKUNMADI — aday, kanıt değil.

## B. Görice şartı ((b) — `v:fransa`nın dayandığı `d:`) — ÖLÇÜLDÜ
- Görice'nin bugünkü `s:` dilimi `arnavutluk-bagimsiz 1912-11-28 → 1923-10-29`; künye `arnavutluk-bagimsiz`
  "Arnavutluk Prensliği (Bağımsız)" **f 1912-11-28 → t 1939-04-07** ⇒ 1916-1918'i KAPSIYOR (§3.5 hayalet yok).
- ⇒ Senin iki dilimli hükmün künye açısından yazılabilir: **1916-10 → 1918-02-16 `d:arnavutluk-bagimsiz` +
  `v:fransa-cumhuriyet`** · **1918-02-16 → 1920-05-24 `isg:fransa-cumhuriyet`**. Arnavutluk'un 1916-18 statüsünün
  tartışmalı olduğu `ic_not`a (künye kesintisiz yazılmış; bu bir modelleme kararı, ölçüm değil).

## 0. ÖNGÖRÜ (uç arama, ölçümden ÖNCE — ayrı commit)
Kalibrasyon (koordinatör): uç/tanık bulunabilirliği bu gece İKİ oturumda sistematik FAZLA tahmin edildi (YENI5: 2
öngördüm, 4 çıktı uçsuz). Tabanı oradan alıyorum.
| # | dilim | aranan uç | bulunma olasılığım |
|---|---|---|---|
| U1 | Alaşehir `aydin` (1403/05 →) | Aydınoğlu'nun Alaşehir'i kaybı / Osmanlı'ya geçiş (şehir adlı) | %35 (TDV `alasehir` 1402 sonrasında yalnız Cüneyd'i anıyor; beylik ilhakı 1425 bölge düzeyi) |
| U2 | Bayburt Rus 1829 | Rusların Bayburt'tan çekilişi (Edirne 14 Eylül 1829 sonrası) | %40 (askerî tarih monografı gerekir) |
| U3 | Aosta Fransız 1798-99 | Fransızların Aosta'dan çıkışı (1799 Avusturya-Rus seferi) | %35 (Henry'de olay var, ay yok) |
| U4 | Klagenfurt Fransız 1809 | Fransızların Klagenfurt'tan çıkışı (Schönbrunn 14 Ekim 1809 sonrası) | %30 (Graz'ın günü var, Klagenfurt'unki aranıp bulunamadı) |
- **Beklenen bulunan: 1 (aralık 0-2).** Yazılabilir hâle gelen de 1.
- Bulunanların hassasiyeti: ay düzeyi (%60), gün (%25), yalnız yıl (%15).
- Yan bulgu (aranan uçtan başka bir dönem): **≥ 1** (%55 — bu gece her kaynak açılışında çıktı ama artık az kalem).

## 1. ÖLÇÜM
Kaynak: TDV (U1; KASA) · akademik + çağdaş basın (U2-U4; bir okuyucu, sayfa görüntüleri kontrol edilmiş:
`scratchpad/okuma_ucsuz.md`). ЭСБЕ "Байбурт" iki alıntısını kendim doğruladım (birebir).
| # | dilim | bulunan uç | hassasiyet | tanık (birebir) |
|---|---|---|---|---|
| U1 | Alaşehir `aydin` (1402 sonrası) | **BULUNAMADI** | — | TDV `alasehir`: *"Nihayet II. Murad tarafından kesin olarak Osmanlı hâkimiyetine alındı."* (yılsız; II. Murad 1421-1451) |
| U2a | Bayburt Rus 1829 (1.) | **19 Temmuz → 8 Eylül 1829** (Greg.) | **GÜN** | ЭСБЕ "Байбурт": *«7-го июля 1829 г. Б. был занят без боя небольшим отрядом ген.-майора Бурцева.»* · Ushakov, *Исторія военныхъ дѣйствій въ Азіатской Турціи въ 1828 и 1829 годахъ* II (1836) s. 234: *«Генералъ-Маіоръ Муравьевъ, съ остальною частію войскъ, очистилъ Байбуртъ 27 числа и … взорвалъ крѣпостныя стѣны»* (27 Ağustos Jül.) |
| U2b | Bayburt Rus 1829 (2.) | **9 Ekim → ~15-17 Ekim 1829** (Greg.) | baş GÜN · son AY | ЭСБЕ: *«27 сент. после упорного боя вновь овладел городом»* · Ushakov s. 284-285: *«3 Октября выступили въ возвратный походъ къ Арзеруму … чрезъ Байбуртъ … пробывъ два дня»* · *«4 Октября Главнокомандующій возвратился въ Арзерумъ»* (iç çelişki ⇒ son AY) |
| U3 | Aosta Fransız 1798-99 | son **1799** | **YIL** | Enc. Italiana: *"… 1798-99, 1800-1814"* · Henry: *"Le Val d'Aoste est occupé par les armées alliées"* (1799, VADİ adlı) · dönüş: Lannes 16 Mayıs 1800, Bonaparte *"arriva à Aoste à dix heures du matin"* 21 Mayıs 1800 |
| U4 | Klagenfurt Fransız 1809 | **19 Mayıs 1809 → 10/11 Ocak 1810** | **GÜN** | *Allgemeine Zeitung*, 27.01.1810, s. 107 (sayfa görüntüsü): *"Den 19 Mai vorigen Jahrs, schreibt man aus Klagenfurt, wurde Kärnthen … von den französischen Truppen besezt, und den 10 und 11 Jan. dieses Jahrs von ihnen wieder geräumt, folglich hielten sie solches ungefähr 8 Monate besezt."* · destek: *Klagenfurt und seine Umgebungen* (1849): *"seit dem 11. Jänner 1810 wurde dasselbe dem öffentlichen Cultus wieder geöffnet"* |
⚠️ U4'te Graz tuzağından kaçınıldı ("4. Jan. 1810 Abzug" GRAZ'ındır). U2 tarihleri JÜLYEN kaynaklıdır; +12 gün (XIX.
yy) ile Gregoryen'e çevrildi — çeviri bir ölçüm değil, bir kural; kayıtta iki takvim de yazılmalı.

### 1.1 Sayılar ve öngörü
```
                               öngörü              ölçüm
bulunan uç                     1 (0-2)             2 GÜN (Klagenfurt · Bayburt-1) + Bayburt-2 baş GÜN/son AY + Aosta YIL
                                                   ⇒ "yazılabilir" (iki uç da ≥ ay): 3 (Klagenfurt · Bayburt-1 · Bayburt-2) ✗ (üstünde)
hassasiyet ay %60/gün %25/yıl %15   gün 2 · ay 1 · yıl 1 ⇒ gün FAZLA, ay AZ ✗
yan bulgu ≥ 1 (%55)            ✓ — Bayburt TEK işgal değil İKİ; arada Rus yanlısı Oz Bey "Bayburt Komutanı" (Ushakov);
                                   Hamilton 1842 "visited Baibourt three times"
```
📌 **Kalibrasyon düzeltmesi:** koordinatörün uyarısıyla tabanı kötümser aldım (1); ölçüm 3. Bu tur için yanlılık
TERS döndü. Sebep okunabilir: aranan uçların ikisi XIX. yy askerî/basın kaynağında (Ushakov 1836, Allgemeine Zeitung
1810) — dijitalleştirilmiş, sayfa görüntülü, şehir adlı. Bulunabilirlik **kaynak türüne** bağlı: çağdaş basın ve
seferin resmî tarihi gün verir; ansiklopedi ve genel tarih yıl verir. Tek oturumluk yanlılık değil, **kaynak türü
değişkeni.**

### 1.2 Yazıma hazır (§8: iki uç da tarihli; < 1 yıl ⇒ `isg:`)
- **Klagenfurt `isg:fransa-cumhuriyet` 1809-05-19 → 1810-01-11** (gün; "10 und 11 Jan." ⇒ son gün 11).
- **Bayburt `isg:rusya` 1829-07-19 → 1829-09-08** (Greg.; Jül. 7 Tem → 27 Ağu) — gün.
- **Bayburt `isg:rusya` 1829-10-09 → 1829-10** (baş gün; son AY ⇒ `kesinlik:"ay"`, gün yazılmaz) — ŞARTLI: §8 ay
  hassasiyetli ucu kabul ediyorsa.
- ara dönem (Eylül-Ekim 1829) Oz Bey "Bayburt Komutanı" — Rus yanlısı yerel ⇒ `v:rusya` mı, Osmanlı mı? Ölçülemedi.
### 1.3 Yazılamayan
- **U1 Alaşehir** (Aydınoğlu sonu yok) · **U3 Aosta 1798-99** (iki uç da yalnız YIL; < 1 yıllık bir işgali yıl
  uçlarıyla yazmak `{f:1798, t:1799}` gibi sahte bir 1 yıl üretir ⇒ §8 kusuru; `ic_not`ta BEYAN).
### 1.4 Ek: Alaşehir metbû zinciri İNCELDİ (aynı TDV paragrafı)
TDV `alasehir`: *"1324'te tekrar Germiyan hücumuna uğradı, ancak II. Andronikos şehrin imdadına yetişti. Şehir bundan
kısa bir süre sonra da Aydınoğulları'nın himayesine girdi."* ⇒ `v:aydin` başı **1324 sonrası, kısa süre** (TDV
`aydinogullari` 1335 Umur Bey). İki TDV maddesi 1324+ ↔ 1335 aralığını veriyor; YENI5'teki `v:germiyan ~1300 → ~1335`
önerisi **`v:germiyan ? → 1324+` / `v:aydin 1324+…1335 → 1390`** olarak yazılmalı (baş ⑥ aralık, beyanlı).
