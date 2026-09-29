# KRONO-ORTA-AVRUPA-0929 — DÜZELTME DEFTERİ

29 Eylül 2026. Bu defterde iki bölüm var: **A** kendi dosyalarımda UYGULADIKLARIM, **B** başkasının
dosyasında gördüğüm ve hükmü koordinatöre bıraktıklarım. `DALGA2-ORTAK §2①`: hiçbir madde SİLİNMEDİ.

**"Sayfa okundu"** şu demek: sayfa bu oturumda WebFetch ile açıldı ve alıntı sayfadan geldi.
**"Ajan özeti"** ise şu demek: alt ajan yalnız arama özetini gördü, sayfayı açmadı. Bu tür bulgular
dosyaya UYGULANMADI, burada yalnız ipucu olarak duruyor.

---

## A. UYGULANAN DÜZELTMELER (dosya benim · her biri kaynaklı)

| # | Dosya | Madde | Eski | Yeni | Kaynak (sayfa okundu) | Gerekçe |
|---|---|---|---|---|---|---|
| A1 | `kronoloji_habsburg.js` | Szatmár Barışı | **1711-11-29** | **1711-04-29** | Magyar Nemzeti Levéltár, "A szatmári béke": *"1711. április 29-én Nagykárolyban írta alá…"*, onay *"május 26-án Bécsben"* | Wien Geschichte Wiki gerçekten "29. November 1711" yazıyor, ama barış Mayıs'ta onaylandı. Kasım günü imkânsız. **Aynı olay macaristan dosyasında ve `erdel` künyesinde 30 Nisan'daydı.** |
| A2 | `kronoloji_macaristan.js` | Szatmár Barışı | 1711-04-30 | 1711-04-29 | aynı (MNL) | Önceki gün Kontler'e dayanıyordu (sayfa okunmadı). İki dosya ulusal arşivin gününe hizalandı. |
| A3 | `kronoloji_habsburg.js` | Kanije'nin kaybı | 1600-10-22 | **1600-10-20** | TDV `kanije`: *"11 Rebîülâhir 1009'da (20 Ekim 1600) Osmanlılar'a teslim edildi"* | Çekirdek (`olaylar_ek.js` 1600-10-20) ile çelişiyordu; yerin kendi maddesi esas alındı. |
| A4 | `kronoloji_macaristan.js` | Sigetvár ve Kanunî'nin ölümü | 1566-09-08 | **1566-09-07** | TDV `suleyman-i`: *"20-21 Safer 974 (6-7 Eylül 1566) gecesi"* | Önceki gün TDV `sigetvar`a dayandırılmıştı, ama o maddede 8 Eylül YOK (5 Ağustos varış, 5 Eylül lağım). Çekirdek `olaylar.js` 1566-09-07 ile hizalandı. |
| A5 | `kronoloji_macaristan.js` | Tököli'nin Orta Macar krallığı | 1682-08-01 | **1682-09-16** | TDV `tokoli-imre`: *"16 Eylül'de Fülek Kalesi önünde İmre Tököli'ye prenslik alâmetlerini verdi; IV. Mehmed'den de berat alınmıştı"* | 1 Ağustos hiçbir kaynakta bulunamadı. Başlık "kurması" yerine "Fülek'te tanınması" oldu. `kapsam` ic→dis (olay Osmanlı'nın tanıması). |
| A6 | `kronoloji_macaristan.js` | 1685-10-15 başlığı | "Kassa'yı kaybetmesi" | "**Varad'da tutuklanması**" | TDV `tokoli-imre`: *"15 Ekim 1685'te … Varad Beylerbeyi Ahmed Paşa … Tököli'yi yakalattı"* | Gün doğru, olay yanlıştı. Kassa'nın teslim günü bulunamadı; Kassa `d:` metninde kaldı (kırılma kapanışı bozulmasın). |
| A7 | `kronoloji_macaristan.js` | I. Ferdinand'ın Macar kralı seçilmesi | **1527-01-01** | **1526-12-17** | Magyar Katolikus Lexikon, "pozsonyi királyválasztó országgyűlés": *"1526. nov. 30.-dec. 17."*; aynı sözlük *"A horvátok Czetinben 1527. I. 1: választották kir-lyá Ferdinándot"* | **İki seçim karışmıştı.** 1 Ocak 1527 Hırvatların Cetin seçimi (çekirdekte `olaylar_p0050.js`te zaten var). ⚠️ Wien Geschichte Wiki seçimi **16 Aralık** diyor; künye `macaristan-habsburg` 17 Aralık. Fark `gun:` alanına yazıldı. |
| A8 | `kronoloji_habsburg.js` | Nagyvárad Antlaşması | 1538-01-01 | 1538-02-24 | **gün komşudan**: `kronoloji_macaristan.js` · Engel (2001) s. 364-365 | CLAUDE.md §4 şartlı komşu günü: komşu kendi kaynağına dayanıyor, hedefte gün yok, aynı olay. Kayda yazıldı. |
| A9 | `kronoloji_habsburg.js` | Bocskai ayaklanması | 1604-01-01 | 1604-10-15 | **gün komşudan**: `kronoloji_macaristan.js` · Kontler (2002) s. 154-155 | aynı şart |
| A10 | `kronoloji_habsburg.js` | Ferdinand'ın ölümü | 1564-01-01 | **1564-07-25** | Wien Geschichte Wiki, "Ferdinand I.": *"† 25. Juli 1564 Wien"* | Yıl damgasının yerine kaynak günü |
| A11 | `kronoloji_habsburg.js` | İstanbul Mütarekesi 1547 | kaynak "bulunamadı" | t aynı (1547-01-01) + `gun:"Haziran 1547"` | TDV `suleyman-i`: *"Haziran 1547'de beş yıllık bir antlaşma yapıldı"* | TDV yalnız ayı veriyor. Ay-başı yazılmadı (§8 senkron tuzağı). Çekirdekteki 1547-06-18 `ic_not_d`e not edildi. |
| A12 | `kronoloji_almanya.js` | Alman İmparatorluğu'nun Versailles'da ilanı | `yer_id:"Metz"` | `yer_id:"Paris"` | — | Olay Versailles'da geçti; Metz 1871 Mayıs'ında (Frankfurt) ilhak edildi. Kamera yanlış şehre uçuyordu. |
| A13 | `kronoloji_macaristan.js` | 127 maddenin tamamı | `devlet:` yok | madde başına `devlet:`/`devletler:` | `denetim/KRONO-ORTA-AVRUPA-0929-ATIF.json` | Bugün 83 madde `macaristan` (1000–1526) künyesinin penceresi dışına basılıyor. `derinKronolojiBindir` alanı OKUMUYOR (app.js:13516), yani değişiklik bugün hiçbir şeyi değiştirmiyor. COK_ yoluna geçişi tek satıra indiriyor. |

`node --check` üç dosyada da temiz. Odak ölçümünde (`odak_olc.py`) çözülmeyen atıf 0. 1 çözülmeyen kayıt var, o da `kronoloji_dogu_afrika.js`in (benim değil).

---

## B. BAŞKASININ DOSYASINDA — hüküm koordinatörde, DOKUNULMADI

### B1. `data/devletler.js` künye kronolojileri (KUNYE-BIRLESTIR / koordinatör)

| Künye | Madde | Sorun | Önerilen | Dayanak |
|---|---|---|---|---|
| `erdel` | 1690-12-04 "Diploma Leopoldinum" | **gün ikisinin karışımı** | 1691-12-04 (metnin çıkışı) ya da 1690-10-16 (hükümdar onayı) | Magyar Katolikus Lexikon (sayfa okundu): "Diploma Leopoldinum": *"I. 1691. XII. 4"*; "Apafi": *"az X. 16: kiadott … Diploma Leopoldinum"*. 4 Aralık **1690** iki kaynakta da yok. |
| `erdel` | 1711-04-30 Szatmár | gün | 1711-04-29 | MNL (A1) |
| `almanya` | 1918-11-11 "İmparatorluk yıkıldı, cumhuriyet ilan edildi" | cumhuriyet 9 Kasım'da ilan edildi, 11 Kasım mütareke günü | 1918-11-09 | `kronoloji_almanya.js` 1918-11-09 (Blackbourn, sayfa bu oturumda okunmadı) · ajan özeti de 9 Kasım diyor |
| `macaristan` | 1308-06-15 "Anjou Károly tahta çıktı" | yıl/gün şüpheli: 15 Haziran **1309** ilk taç giyme günü | 1308-11-27 (Pest meclisi) | `kronoloji_macaristan.js` (Engel s.124-131). **Ajan özeti**: 15.06.1309 ve 27.08.1310 taç giymeleri. Sayfa okunmadı. |
| `macaristan` | 1443-11-01 "Hunyadi'nin Osmanlı'ya yenilgisi — İzladi" | gün de çerçeve de şüpheli | ölçülemedi | TDV `izladi` (ajan özeti) gün VERMİYOR, Haçlıların kış yüzünden döndüğünü anlatıyor. "Yenilgi" çerçevesi tartışmalı. Niş 3 Kasım, İzladi 12/24 Aralık 1443 **ajan özeti**, sayfa okunmadı. |
| `macaristan-habsburg` | 1867-02-08 Ausgleich | aynı olay 3 dosyada 1867-03-30 | **ölçülemedi** | İki gün de kaynakla doğrulanamadı. Ajan özetine göre adımlar şöyle: 17 Şubat hükûmet, 15 Mart (habsburger.net?), 29 Mayıs Yasa XII, 8 Haziran taç, 21 Aralık Aralık yasaları. Sayfa okunmadı; kaynaklı hüküm için ayrı iş. |
| `habsburg` | 1526-08-29 "I. Ferdinand, Mohaç sonrası Bohemya-Macaristan tacını aldı" | Ferdinand 29 Ağustos'ta hiçbir taç almadı | ÇERÇEVE: Mohaç ile taçların devri ayrı olaylar | Wien Geschichte Wiki: Bohemya seçimi 22.10.1526, Macar seçimi 16.12.1526. Yeni madde: `kronoloji_cok_habsburg.js` 1526-10-22. |

### B2. Başka dosyalar

| Dosya | Madde | Sorun | Sahibi |
|---|---|---|---|
| `olaylar_ok109.js` | 1918-11-18 "İmparator Karl'ın çekilişi — Habsburg hânedanının sonu" | 18 Kasım'da olay bulunamadı. Karl'ın Avusturya bildirisi 11 Kasım, Macaristan bildirisi 13 Kasım (Eckartsau). **Ajan özeti** (habsburger.net), sayfa okunmadı. | çekirdek / Oturum 0 |
| `kronoloji_rusya.js` | 1805-11-20 "Austerlitz'de yenilgi" | **Jülyen günü**: Gregoryen 2 Aralık 1805. Öteki üç dosya 12-02 diyor. Aynı savaş iki takvimde. | KRONO-KUZEY-0929 |
| `olaylar.js` | 1529-09 "I. Viyana Kuşatması" | **ay hassasiyetli yazım**: CLAUDE.md §8 ihlali, ayın 1'ine genişler | çekirdek |
| `olaylar_p0068b.js` | 1790-04-16 "Eski Hırsova'nın düşüşü" | "Eski Hırsova" = **Orsova** (TDV `zistovi-antlasmasi`). Başlıkta "Orsova" geçmediği için Orsova'nın 1790-04-16 kırılması AÇIK kalıyor. Mükerrer olmasın diye ben yazmadım. Öneri: başlığa "(Orsova)" eklensin. | çekirdek |
| `olaylar_p0050.js` | 1527-01-01 "Cetin Meclisi" | Drežnik ve Udbina'nın 1527-01-01 kırılması açık: madde yer adını da tarafı ("Macaristan") da anmıyor | çekirdek |
| `olaylar_ek3.js` | 1685-08-19 "Uyvar'ın kaybı" | Nitra (Nyitra) 1685-08-19 kırılması açık, çünkü madde Nitra'yı anmıyor | çekirdek |
| `kronoloji_cok_romanya.js` | 1657 II. Rákóczi György'nin Leh seferi | `kronoloji_macaristan.js` 1657-01-01 ile **aynı olay**. İkimiz de `erdel`e bağlıyoruz, biri kalmalı. KRONO-TUNA-0929 kendi kaydını bırakmayı önerdi (M-5434). | TUNA ↔ ben, hüküm koordinatörde |
| `kronoloji_almanya.js` ↔ künye `prusya-dukaligi` | 1525-04-10 ↔ 1525-04-08 | Aynı olayın iki basamağı: Kraków antlaşması 8 Nisan, biat 10 Nisan. İkisi de savunulabilir, ama panelde çift görünecek. | (d) kuralı |

### B3. Kendi dosyamda gördüğüm, DÜZELTMEDİĞİM (kaynak sayfası okunmadı)

**Ajan özetiyle doğru çıkanlar.** Sayfa okunmadığı için `kaynak:` alanları hâlâ "bulunamadı — gün DOĞRULANMADI" diyor. Günler ajan özetine göre doğru, ama kural gereği özetle `kaynak:` yazılmaz:
1606-06-23 · 1609-07-09 · 1634-02-25 · 1671-04-30 · 1684-03-05 · 1745-09-13 · 1780-11-29 · 1790-02-20 · 1792-04-20 · 1797-10-17 · 1815-06-09 · 1819-09-20 · 1835-03-02 · 1851-12-31 · 1866-10-03 · 1867-12-21 · 1879-10-07 · 1889-01-30 · 1916-11-21.
⇒ Kalite borcu, tarih uydurması DEĞİL. Bir sonraki turda sayfa okunarak `kaynak:` doldurulmalı.

**Yıl damgası olup kaynağın gün verdiği iddia edilenler** (ajan özeti, sayfa okunmadı): 1558 imparatorluk (14 Mart / taç 24 Mart 1558), 1756 Versailles (1 Mayıs), 1701 (Carpi 9 Temmuz), 1555 Augsburg (25 Eylül), 1556 Hofkriegsrat (17 Kasım), 1774 Schulordnung (6 Aralık), 1568 Edirne (17 Şubat). Yıl damgası meşru; günler kaynak okununca yazılsın.

**Ölçülen ama düzeltilmeyen yapısal kusurlar:**
- **Sıra bozukluğu:** macaristan 8 yer, almanya 6 yer (ör. 1517 → 1516, 1923 → 1410). Görsel sıralama t'ye göre yapılıyorsa zararsız.
- **Çift anahtar:** birçok maddede `yer_id:""` ve sonra `yer_id:"X"` var. JS'te son anahtar geçerli, zararsız ama yanıltıcı.
- **`kronoloji_almanya.js` Rentenmark 1923-11-15:** `almanya` künyesinin penceresi (→1923-10-29) dışında. KUNYE-DUNYA `mekanik_supheler[0]` de aynı maddeyi gösteriyor.
- **`kronoloji_habsburg.js` 1772-01-01 Galiçya:** gün komşudan (`kronoloji_lehistan.js` 1772-08-05) alınamadı, çünkü komşunun `kaynak:` alanı yalnız `"el-kitabi"` diyor (CLAUDE.md §4: komşunun günü kendi kaynağına dayanmalı).
