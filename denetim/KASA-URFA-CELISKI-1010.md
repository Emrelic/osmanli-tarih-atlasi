# KASA-URFA-CELISKI-1010 — Urfa'nın 1281-1517 zinciri ile TDV `sanliurfa` çelişkisi

*KASA · yalnız metin · hüküm YOK, ölçüm + öneri · 10 Ekim 2026*

## 0. Zemin
| | |
|---|---|
| Ölçüm tabanı | ayrı worktree `origin/main` **`6e625e15a`** (detached). Ana checkout `C:\atlas` `b4626f14b`, origin/main'in **5 commit gerisinde** (ölçüm orada YAPILMADI, İRTİBAT'a bildirildi) |
| Kayıt | `data/yerlesimler.js:254` `ad:"Urfa"` · `girdi.yukle()` ile okundu (4300 nokta) |
| TDV `sanliurfa` | taze GET **200**, 185.122 bayt HTML, sha256 `9d371acbaf79ab4e…` · önbellek `kd/cache/sanliurfa.json` status 200, body 63.141 kr. Aşağıdaki beş anahtar cümle İKİSİNDE de birebir var |
| Ek TDV (GET 200) | `doger` (sha `ab68933a…`) · `akkoyunlular` (`d134ded8…`) · `biyikli-mehmed-pasa` (`5af1815c…`) · `safeviler` (Urfa geçmiyor) · `mardin` |
| TDV ölü/yok | `suruc` **302** · `memluk-sultanligi` 302 · `dede-garkin-muharebesi` 302 · `kara-yuluk-osman-bey` 302 |
| Üçüncü tanık | **Encyclopaedia Iranica**, uygulama içi tarayıcıyla okundu: ① "AQ QOYUNLŪ", R. Quiring-Zoche, Vol. II/2 s. 163-168 (1986) ② "EDESSA", S. N. C. Lieu, Vol. VIII/2 s. 174-175 (1997) |

## 1. Öngörü (ölçümden ÖNCE yazıldı) ve sonucu
| # | Öngörü | Sonuç |
|---|---|---|
| Ö1 | TDV 1260-1393 için "Memlük" demez | **KISMEN YANLIŞ.** Hükümdar adı vermez ama iki DOLAYLI Memlük izi var (§2 C, §2 J) |
| Ö2 | 1404 Akkoyunlu, Safevî 1507-1514 arası, "1465" Urfa'yı tarihlemez | **TUTTU** (Safevî = 1514) |
| Ö3 | Osmanlı 1516 ya da 1517, gün yok | **TUTTU:** "1517 yılı ilkbaharında" |
| Ö4 | `kaynak:` alanı sonradan eklendi, zincir TDV'siz → "yanlış ANILMIŞ" | **TUTTU** (§4) |
| Ö5 | Siverek zinciri birebir aynı | **TUTTU** |

## 2. TDV `sanliurfa`: BİREBİR okuma
Bütün alıntılar tarih bölümünün TEK paragrafından. Paragraf "…II. Seyfeddin Gazi burayı ele geçirdi (569/1174)" ile başlıyor ve "Osmanlı hâkimiyetinin ardından yaklaşık 100 yıl…" paragrafından hemen önce bitiyor. Telif kuralı gereği kısa alıntı + özet verildi. Tam metin önbellekte duruyor.

| Ref | Cümle (özet, anahtar ifade tırnakta) | NEYİ tarihliyor |
|---|---|---|
| A | 658 (1260): bölge Hülâgû'ya teslim; Moğollar "Aynicâlût Savaşı'nda … bozguna uğratılıncaya kadar" ellerinde tuttu | Moğol hâkimiyetinin başını ve (örtük olarak) sonunu: **Eylül 1260**. Sonrasında kimin olduğunu SÖYLEMİYOR |
| B | VIII. (XIV.) yüzyılda şehir harabe; Döğer Türkmenleri bölgeye yayılıyor | sahiplik değil, durum |
| C | (paragraf dışı, Medreseler bölümü) "Memlükler'in Şam meliki Emîr Mencek'in 775 (1374) tarihli vakfiyesi", Urfa'daki Mencek Zâviyesi | **dolaylı:** 1374'te Urfa'da Memlük emîrinin vakfı var |
| D | "795 (1393) yılındaki el-Cezîre seferi esnasında Timur'un idaresine giren Urfa" | Timur 1393 |
| E | Timur dönünce Döğer Emîri Seyfeddin Dımaşk Hoca şehri aldı | Döğer başlangıcı: YIL YOK ("onun dönüşünden sonra") |
| F | "806 (1404) yılı baharında Akkoyunlu Karayülük Osman Bey burayı alıp" | **Akkoyunlu, bahar 1404** |
| G | 1429 ve 1480'de Memlüklerce "tahrip ve yağma"; 1514'e kadar Akkoyunlu emîrleri arası mücadele; "burada Memlük etkisi arttı" | Memlük akınları. Sahiplik devri DEĞİL |
| H | "Şehir bu son tarihte Safevîler'in eline geçti", "son tarih" = aynı cümlenin parantezindeki **1514** | **Safevî, 1514** |
| I | Dede Garkın (922/1516) ve sonucu: "1517 yılı ilkbaharında önce Mardin'in, ardından Urfa'nın" Osmanlı'ya katılması | **Osmanlı, ilkbahar 1517**. Aynı madde Hanlar bölümünde "Urfa'nın 1517'de Osmanlı hâkimiyetine girmesinden" der |
| J | (Hanlar/kale) kale onarımı yapanlar listesinde "Eyyûbîler, Memlükler, Akkoyunlular ve Osmanlılar" | dolaylı Memlük izi, YILSIZ |

## 3. Diğer tanıklar
**TDV `doger`:**
- Sâlim Bey'in Ca'ber beyliği Memlüklerle iç içe: Halep valisine sığınma, Berkuk'tan hil'at 796/1393-94.
- Oğlu Dımaşk Hoca, "Timur istilâsının … kargaşalıktan ve 1399'da … Ferec'in zayıf" olmasından yararlanıp Ruha (Urfa), Siverek, **Suruç**, Harran'ı aldı.
- 806 (1404): Dımaşk Hoca öldürüldü, Karayülük Urfa'yı aldı.
- ⇒ F'yi doğruluyor. E için alt sınır 1399 veriyor. `sanliurfa` ise "Timur'un dönüşünden sonra" der: **iki TDV maddesi Döğer'in başlangıcında hafifçe ayrışıyor** (≥1394 ile ≥1399).

**TDV `akkoyunlular`:**
- 1421: Karayülük Urfa'yı aldı (F'den sonraki ikinci bir alış ya da yeniden alış).
- Memlük Sultanı Çakmak Urfa'yı Cihangir Mirza'ya **iktâ** etti (1437 civarı).
- 1480: Urfa'yı almak isteyen Memlüklere karşı Akkoyunlu zaferi.
- ⚠️ **"1465" cümlesi:** "Harput'u ele geçirdi (1465). Böylece İspir'den Urfa'ya … uzanan bölge Akkoyunlu ülkesi haline geldi." Bu cümle **Harput'u** tarihliyor, Urfa'yı değil (§4).

**TDV `biyikli-mehmed-pasa`:**
- Dede Garkın: "Mayıs 1516".
- Ardından Mardin kuşatılır, kalesi "dokuz ay sonra" teslim alınır; "Mardin muhasarası sürerken … Ruha, Birecik … ele geçirildi."
- ⚠️ Bu, `sanliurfa` I ile **SIRA bakımından çelişiyor**: I'ye göre Mardin'den SONRA, buna göre kuşatma SÜRERKEN. İki madde de pencereyi Mayıs 1516-ilkbahar 1517 arasına koyar. Urfa'nın kendi maddesi daha kesin bir zaman (ilkbahar 1517) verir.

**Iranica "AQ QOYUNLŪ" (Quiring-Zoche 1986):**
- 14. yy sonunda "the steppe grazed by the Döḡer … around Rohā (Orfa)".
- "a Mamluk attack on Rohā in 885/1480 was repulsed": G'yi doğruluyor, 1480'de şehir Akkoyunlu elinde.
- 🔴 Safevî ilerleyişi: İsmail "Dīār Bakr in 913-14/1507-08". Son Akkoyunlu sultanı Morād "was defeated and killed at his last stronghold, Rohā, by Esmāʿīl's Qizilbāš fighters".
- ⇒ 1507-08'de Diyarbekir düştüğünde **Urfa düşmemiş, Akkoyunlu'nun SON kalesi olarak kalmıştır.** Bu, H'yi (1514) destekliyor ve kayıttaki 1507'yi çürütüyor. Iranica Morād'ın ölüm yılını VERMİYOR.

**Iranica "EDESSA" (Lieu 1997):**
- "In 658/1260 it surrendered to the Mongols, becoming one of the westernmost towns of the Il-khanid and Timurid empires."
- "It was taken from the Āq Qoyunlū by Shah Esmāʿīl I" (yılsız).
- ⚠️ **TDV A ile ÇELİŞİYOR:** TDV Moğol hâkimiyetini Aynicâlût'ta (1260) bitirir. Iranica Urfa'yı İlhanlı şehri sayar. İki ansiklopedi 1260-1335 arası için farklı söylüyor.

## 4. Kaynak YANLIŞ MI ANILMIŞ, yanlış mı OKUNMUŞ? İkisi de, ayrı katmanlarda
**Katman 1, `s:` zinciri: kaynaksız yazılmış; kökeni "bölgeden şehre taşınan hüküm".**
- `git log -S`: zincir `39f3f4929` (29 Temmuz 2026, "Ada katmanı, Macaristan…, Fetret'in sahipsiz bölgeleri") commit'inde doğdu. Önceki hâl `safevi 1281-1516`ydı. O commit'te `kaynak:` alanı YOK.
- Zincirin üç sınırı TDV/Iranica'da **başka bir şeyi tarihleyen** rakamlarla birebir eşleşiyor:

| Kayıt | Eşleşen rakam | O rakamın tarihlediği şey |
|---|---|---|
| akkoyunlu **1465** | TDV `akkoyunlular` "Harput'u ele geçirdi (1465). Böylece İspir'den Urfa'ya…" | Harput fethi + Akkoyunlu ülkesinin genel kapsamı |
| safevi **1507** | Iranica / genel literatür: Diyarbekir 913-14/1507-08 | Diyarbekir BÖLGESİ (Urfa o tarihte düşmemiş) |
| Osmanlı **1516-05-01** | TDV `biyikli`: Dede Garkın "Mayıs 1516" | savaş. Urfa'nın teslimi DEĞİL |

- 📌 Bu eşleşme bir **çıkarımdır, kanıt değildir**: 29 Temmuz commit'i kaynağını yazmamış. Ama üç sınırın üçünün de "rakamı taşıyan cümle başka bir şeyi tarihliyor" tuzağına (`CLAUDE.md §4` TDV ⑧) ve "bölgeden şehre taşınan hüküm" sınıfına (`D208`) birebir oturması tesadüf olamayacak kadar düzenli.
- ⇒ Zincir **yanlış OKUNMUŞ**, ama `sanliurfa` değil, BÖLGE metinleri yanlış okunmuş.

**Katman 2, `kaynak:` alanı: yanlış ANILMIŞ (kapsamı aşan atıf).**
- Alan `aaadabf56` (2 Eylül 2026, "137 YAMA INDI") commit'inde eklendi. Aynı satırda zincir DEĞİŞMEDİ.
- Bağlam H-0008 (`HUKUM-0036.json`, `BULGU-PAKET-0036.md`, `HUKUM-PAKET-0037.json` H-0003). TDV `sanliurfa` orada **yalnız 1832-1841 Mısır `v:`si** için okundu ("TDV … işgali 1839'da diyor").
- O okuma doğruydu ve `v:` kaldırıldı. Ama `kaynak:` kayıt DÜZEYİNDE yazıldığı için 1281-1516 zincirini de TDV'ye dayanıyormuş gibi gösteriyor.
- ⇒ "TDV sanliurfa … içerik doğrudan okundu" **doğru bir cümle, yanlış kapsamda.** TDV'nin bu zincir için okunduğuna dair HİÇBİR iz yok.
- 📌 Sınıf: alan düzeyinde `kaynak:` ↔ dönem düzeyinde iddia. Kayıt düzeyindeki tek `kaynak:` alanı, hangi dönemi kapsadığını söylemediği sürece **ölçülemez bir atıftır** (`isg:` dönemleri kendi `kaynak:`ını taşıyor, `s:` taşımıyor).

## 5. ÖNERİ: zincir (hüküm koordinatörde)
| Dönem | Önerilen `d:` | Dayanak | Hassasiyet / not |
|---|---|---|---|
| 1281 → **?** | 🟡 **HÜKÜM GEREKİR**, aşağıda iki seçenek | TDV A+B+C · Iranica EDESSA | geçiş yılı **bulunamadı** ⇒ YAZILMAZ |
| ? → 1393 | `memluk` (dolaylı: Mencek vakfiyesi 1374; Döğer–Memlük bağı) | TDV C, `doger` | başlangıç yılı bulunamadı |
| **1393** → Döğer | `timurlu` | TDV D | `1393-01-01` (yıl; ay yok). Künye `timurlu` 1370- ✓ |
| Döğer (≥1394 / ≥1399) → 1404 | Döğer: **künye YOK** (`devletler.js` tarandı: `doger` id'si yok) | TDV E · `doger` | D205: kimlik yok. Seçenek: Memlük yörüngesindeki beylik ⇒ `memluk` tâbisi, ya da `timurlu` 1404'e uzatılır. **Hüküm** |
| **1404** → 1514 | `akkoyunlu` | TDV F (bahar 1404) · `doger` · Iranica (1480 Akkoyunlu elinde, 1507-08 sonrası Morād'ın son kalesi) | `1404-01-01` (yıl; "bahar" metinde). İç Memlük bölümleri (1429-33 Barsbay seferi, ~1437 Çakmak iktâsı) gün düzeyinde kaynaksız ⇒ ÖNERİLMEDİ, ayrı kalem |
| **1514** → 1517 | `safevi` | TDV H · Iranica (dolaylı: 1507-08'de düşmedi) | `1514-01-01`. ⚠️ `akkoyunlu` künyesi `t:"1514-01-01"`, uç uca oturuyor (künye günü DAYANAK DEĞİL, yalnız tutarlılık) |
| **1517** → | Osmanlı `d:` | TDV I (ilkbahar 1517) + Hanlar bölümü "1517'de" | `1517-01-01` (yıl). ⚠️ "ilkbahar" `-01-01`den sonra gelir. Kural (`§4` "gün bilinmiyorsa YYYY-01-01") gereği yıl başı yazılır, fark bildirilir. `biyikli` 1516 sonunu da mümkün kılıyor (§3) |

**1281 → ? seçenekleri (hükmü koordinatör verir):**
- **(a)** `ilhanli` 1281 → X, `memluk` X → 1393. Iranica EDESSA'ya uyar ve TDV C'yi korur. X **bulunamadı**. İlhanlı'nın çözülmesi 1335 dolayıdır, künye `t:"1353-01-01"`. X kaynaksız yazılamaz.
- **(b)** `memluk` 1281 → 1393 korunur, `kaynak:` alanı "dolaylı (Mencek vakfiyesi 1374); 1281-1335 arası Iranica EDESSA İlhanlı der: ÇELİŞKİ AÇIK" olarak açıkça yazılır.
- X'i kapatabilecek akademik adaylar (okunamadı, ücretli ya da çevrimiçi değil): C. Tonghini, *From Edessa to Urfa* (Archaeopress 2021), Bölüm 5 "The citadel of al-Ruhā' in the Arabic sources" · R. Amitai-Preiss, "The Mamluk–Īlkhānid frontier" (Cambridge, *Mongols and Mamluks*): özetinde Reşîdüddin'den Ruha'yı sınır vilayeti olarak anan pasaj var · A. Öngül, *Urfa Tarihi (639-1517)*.

**Fark tablosu (kayıt → öneri):**
- Akkoyunlu başlangıcı: 1465 → 1404 (**61 yıl erken**)
- Safevî başlangıcı: 1507 → 1514 (**7 yıl geç**)
- 🆕 Osmanlı başlangıcı: 1516-05-01 → 1517 (**~8-11 ay geç**). Koordinatörün listesinde yoktu
- 🆕 1393-1404 arası Timur + Döğer dilimi kayıtta hiç yok

## 6. D206: kümenin öbür ucu (ölçtüm, düzeltmedim)
| Nokta | 1520 öncesi `s:` | Osmanlı | `kaynak:` |
|---|---|---|---|
| Siverek | **Urfa ile BİREBİR** (memluk-1465-akkoyunlu-1507-safevi) | 1516-05-01 | yok ⇒ aynı şablon, aynı düzeltme adayı |
| Suruç | memluk 1281-1516-08-24 | 1516-08-24 | yok |
| Akçakale | memluk 1281-1516-08-24 | 1516-08-24 | yok |
| Jadlā' | memluk 1281-1516-08-24 | 1516-08-24 | yalnız KONUM (GeoNames) |
| Ayn el-Arab | memluk 1281-1516-08-24 | 1516-08-24 | TDV `suriye` (1920 için) |
| Birecik (bilgi) | memluk 1281-1516-08-24 | 1516-08-24 | TDV `birecik` |

- 🔴 **Ters yön riski:** Urfa 1404-1514 Akkoyunlu olursa çevresindeki dört kaynaksız nokta Memlük kalır. Petek sınırı Urfa ile Suruç/Akçakale arasına iner, ama bu sınır kaynakla ÖLÇÜLMEMİŞTİR.
- TDV `doger`: Dımaşk Hoca ~1399-1404 arasında **Suruç ve Harran'ı da** aldı. Yağmur Bey 817/1414 civarı "Suruç hâkimi" (Akkoyunlu–Karakoyunlu çekişmesinde). ⇒ Suruç'un "memluk 1281-1516" zinciri de en az bir TDV maddesiyle çelişiyor.
- `suruc` slug'ı **302 (ölü)**. TDV araması betikle okunamadı (sonuç JS ile geliyor) ⇒ Suruç için bulunamadı, bu turun işi değil, kalem olarak bırakıldı.

## 7. Bulamadıklarım
- 1281-1393 arasında İlhanlı→Memlük geçişinin YILI.
- Döğer hâkimiyetinin başlangıç yılı (≥1394 mü ≥1399 mu, iki TDV maddesi ayrışıyor).
- Morād'ın Urfa'da öldürülüş yılı (Iranica vermiyor; TDV H'nin 1514'ü tek dayanak).
- Osmanlı teslim GÜNÜ/AYI (yalnız mevsim: ilkbahar).
- Üçüncü bağımsız tanık olarak **Türkçe akademik makale**: K. Paydaş, "Akkoyunlular Döneminde Urfa" (*Türk Dünyası Tarih Dergisi*) yalnız yayın listesinde görüldü, tam metni bulunamadı.
