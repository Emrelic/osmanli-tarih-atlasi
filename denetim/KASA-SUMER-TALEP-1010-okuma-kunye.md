# OKUMA — Güney/Orta Mezopotamya künyeleri, MÖ 3000 → MÖ 539 (Sümer künye önerisi)

Salt okuma. Hiçbir depo düzenlenmedi. Hazırlanma: 10 Ekim 2026.
Depo: `C:/atlas-kasa-wt`, HEAD `1d5e2dfd5`.

---

## 0. Depo ölçümü (önce bu okunmalı)

| Soru | Ölçüm | Sonuç |
|---|---|---|
| `akkad / akad / ur-iii / isin-i / isin-ii / larsa / eski-babil / babil / kassit / kassitler / asur / yeni-asur / yeni-babil / sumer / gutu / deniz-ulkesi` `data/devletler.js`'te var mı? | `grep -iE 'id:"(akkad\|akad\|ur-iii\|isin…\|babil…\|kassit…\|asur…\|sumer\|…)'` → hiçbiri eşleşmedi (yalnız ilgisiz `uruguay-…`, `urdun-…`, `urfa-kontlugu`, `kasim`, `kastilya`, `medang` gibi kayıtlar çıktı) | **HEPSİ EKSİK.** Hiçbirinin f/t değeri yok. |
| `ahameni` var mı? (Görevde "ilk kayıt -0538'den başlayan `ahameni`" deniyor) | `grep -rIl ahamen data/` → yalnız `data/ekokuma_bakis.js` (düz metin). `devletler.js`'te `id:"ahameni"` **YOK**. `CLAUDE.md` satır 1230-1232 da aynısını söylüyor: *"`devletler.js`te `ahameni·makedon·selefki·part·akkad` → **0** (yalnız `sasani` 1)"*. | **Görevdeki varsayım yanlış:** `ahameni` henüz tanımlı değil. `yeni-babil` için `t` bu yüzden eşleşecek bir `ahameni.f`'ye dayanamaz; ikisi birlikte girilmeli. |
| `devletler.js`'te negatif (MÖ) tarih var mı? | `grep -c '"-' devletler.js` → **0**; `grep -oE 'f:"…"' \| sort` → en erken `f:"0226-01-01"` (`sasani`). Tüm `data/*.js` içinde `"-YYYY-MM-DD"` deseni → **0 dosya**. | Dizin başlığı: *"DEVLETLER DİZİNİ — 1200-1924 arası …"*. **MÖ tarihi taşıyan tek kayıt yok;** yükleyicinin/çizicinin `-2333-01-01` gibi bir değeri doğru ayrıştırıp ayrıştırmadığı DOĞRULANMADI. Kayıt eklemeden önce sınanmalı. |

Kayıt biçimi (örnek `sasani`, satır 10570): `id, ad, tur, bolge, f, t, baskent, ic_not_f, ic_not_t, ozet, kaynak, kronoloji[]`. `bolge` kapalı sözlükte `mezopotamya` var.

---

## 1. Kaynaklar (hepsi imzalı, hepsi sayfasıyla okundu)

| Kısaltma | Künye | Erişim |
|---|---|---|
| **BRINKMAN 1977** | J. A. Brinkman, "Appendix: Mesopotamian Chronology of the Historical Period", in A. L. Oppenheim, *Ancient Mesopotamia*, rev. ed. (Chicago 1977), s. 335–348 | archive.org `ancient_mesopotamia_202208` (oi.uchicago.edu tarama), djvu metni |
| **OPPENHEIM 1977** | A. L. Oppenheim, *Ancient Mesopotamia* (aynı cilt), s. 154, 157–158, 414 | aynı |
| **MOLINA** | M. Molina, "Sumer, Geschichte", RlA 13, s. 297–299 | `publikationen.badw.de/de/rla/a/13.372.jpg` … `13.374.jpg` |
| **HALLO** | W. W. Hallo, "Gutium", RlA 3, s. 708–720 (okunan: 713–714) | `…/a/3.730.jpg`, `3.731.jpg` |
| **EDZARD** | D. O. Edzard, "Isin. A. Bis zum Ende der altbab. Zeit", RlA 5, s. 181–183 | `…/a/5.214.jpg` – `5.216.jpg` |
| **BRINKMAN Isin B** | J. A. Brinkman, "Isin. B. II. Dynastie", RlA 5, s. 183 vd. | `…/a/5.216.jpg` |
| **BRINKMAN Kassiten** | J. A. Brinkman, "Kassiten", RlA 5, s. 464–465 | `…/a/5.501.jpg`, `5.502.jpg` |
| **BRINKMAN Meerland** | J. A. Brinkman, "Meerland (Sealand)", RlA 8, s. 6–8 | `…/a/8.35.jpg` – `8.37.jpg` |
| **BRINKMAN Nabopolassar** | J. A. Brinkman, "Nabopolassar", RlA 9, s. 12–13 | `…/a/9.39.jpg`, `9.40.jpg` |
| **ROAF Nabonid B** | M. Roaf, "Nabonid B. Archäologisch", RlA 9, s. 11–12 | `…/a/9.39.jpg` |

Van De Mieroop, *A History of the Ancient Near East* (2016): archive.org kopyası (`historyofancient0000vand_w8g2`) **erişim kısıtlı** — metin indirilemedi, içerik araması "Item not available" döndü. Yalnız katalog içindekiler satırı okunabildi (aşağıda §3'te, *künye verisi olarak*, alıntı değil). CAH, Roux, Postgate kopyaları da kısıtlı (401). Wikipedia kullanılmadı.

---

## 2. Kronoloji: hangisi, ve kaynaklar nerede ayrışıyor

**Seçilen: Orta Kronoloji (Middle Chronology), Brinkman 1977 tablosu** — Hammurabi 1792–1750 MÖ.

BRINKMAN 1977, s. 346, not 4 (verbatim):
> "The dates listed here for the First Dynasty of Babylon are those according to the so-called "middle chronology." If one would wish to adjust to the corresponding "high chronology," all dates for the first five dynasties in these tables would have to be raised by fifty-six years (e.g., Hammurapi, 1848–1806); for the "low chronology," the shift would be downward by sixty-four years (e.g., Hammurapi, 1728–1686)."

BRINKMAN 1977, s. 335 (hata payı, verbatim):
> "For dates before 1500 B.C., it is unlikely that they will ever be raised or lowered much more than 64 years. For dates from 1500 to 900 B.C., an eventual deviation of more than two decades need not be expected. After 900, an error of more than one or two years (in most cases) cannot be foreseen …"

⇒ **Kesinlik düzeyi:** MÖ 1500 öncesi tarihler = Orta Kronoloji'ye *göre* yıl, ama mutlak değer ±56/64 yıl kayabilir (künyede `ic_not` ile yazılmalı). 1500–900 arası ±20 yıl. 900 sonrası yıl düzeyinde güvenilir.

**Açık ayrışmalar (kaynakların kendi sözleriyle):**

| Konu | Brinkman 1977 (MC) | Diğer imzalı kaynak | Fark |
|---|---|---|---|
| Akkad başlangıcı | Sargon 2334–2279 (s. 335) | MOLINA s. 298: *"the rise of Sargon of Akkad, first king of the Sargonic dynasty, around 2300; this date (given according to the Middle Chronology) could be moved backward in time depending on the duration assigned to the Gutian period"* | ~34 yıl; ikisi de "Orta" diyor. Fark Guti dönemi süresinden. |
| Akkad bütünü | 2334–2154 | BRINKMAN not 1 (s. 346): *"M. B. Rowton in The Cambridge Ancient History (third edition) I/1 219-20 dates this dynasty ca. 2370-2190. W. W. Hallo in the Reallexikon der Assyriologie III 713-14 presents evidence that only about forty years may have elapsed between the death of Sar-kali-Sarri … and the rise of Ur-Nammu …; if this position should prove correct, the Dynasty of Akkad would have to be dated ca. 2293-2113."* | Üç şema: 2370–2190 / 2334–2154 / 2293–2113. |
| Guti aralığı | Šar-kali-šarri ölümü 2193 → Ur-Nammu 2112 (~80 yıl, tabloda örtük) | MOLINA s. 299: *"commonly estimated in 40 years (although Steinkeller [in press] assigns 100 years to this period)"*; HALLO s. 713: *"106 years according to Th. Jacobsen …, 104 according to Sollberger … and ca. 145 according to M. B. Rowton"*; HALLO s. 714: *"an interval of about 40 years"* | 40 ↔ 145 yıl. |
| Ur III | 2112–2004 (s. 336) | MOLINA s. 299: *"Ur-Namma (2110–2093) … founder of the Third Dynasty of Ur (2110–2003)"* | 1–2 yıl. |
| I. Isin sonu | Damiq-ilišu 1816–1794 (s. 336) | EDZARD s. 183: *"Rīm-Sin von Larsa nahm Isin in seinem 29. Jahre (Jahresdatum 30) ein (1793)."* | 1 yıl. |
| I. Deniz Ülkesi | yalnız saltanat süreleri, mutlak tarih yok (s. 337, not 5) | BRINKMAN Meerland s. 6: *"First Sealand Dynasty, c. 1740–1475"* | Brinkman kendisi 1977'de tarih vermiyor, 1987–90'da veriyor. |

Ayrıca **Ultra-Düşük Kronoloji** (Gasche et al. 1998; Hammurabi ≈1696–1654) literatürde var — **imzalı kaynaktan okunmadı**, yalnız ipucu. Atlas Orta Kronoloji'de kalmalı ve bunu her MÖ 1500 öncesi künyenin `ic_not_f`'sine yazmalı.

---

## 3. Erken Hanedan dönemi: tek kayıt mı, şehir başına mı?

MOLINA s. 297–298 (verbatim):
> "During the Ǧamdat Naṣr period (ca. 3100–2900), Uruk (layer III) and other cities of southern Mesopotamia reorganized and developed a different kind of political equilibrium. The city-state (for a definition see Stadt* § 6.5) thus became the basic political organization in the land of S. throughout the following Early Dynastic (ED) period (ca. 2900–2300)."

MOLINA s. 298:
> "This period has been subdivided into ED I (ca. 2900–2750), ED II (ca. 2750–2600), ED IIIa (ca. 2600–2450), and ED IIIb (ca. 2450–2300). ED I and II are still essentially archaeological periods …"

> "It is also possible to sketch now the political frame of some of the most important city-states of southern Babylonia (a complete relative chronology and synchronisms of Sum. rulers from the Early Dynastic period can be found in Marchesi/Marchetti 2011, 118–128 …)."

> "Thus, administrative tablets and royal inscriptions documenting the Lagaš-Umma border conflict have preserved the history of the First Dynasty of Lagaš. It extended for ca. 110/120 years …"

> "Perhaps under the influence of northern Babylonia, and particularly of Kiš*, the tendency to form broader and stronger political entities in S. began to crystallize with Enšakušana* of Uruk, and culminated with Lugalzagesi (ruled for 25 years, according to SKL). This ruler, probably native of Umma, took control over Uruk and Ur, defeated Iri'inimgina of Lagaš, and finally ruled over the whole S."

OPPENHEIM 1977 s. 154: *"He [Sargon] became the exponent of imperial aspirations, of expansion beyond the natural spheres of influence in a world of city-states."*

Van De Mieroop 2016'nın katalog içindekiler satırı (archive.org metadata, kitap metni değil): *"Part I. City-states -- … -- Competing city-states : the early dynastic period -- Political centralization in the late third millennium …"* — kaynağın kendi bölümlemesi de "rekabet eden şehir devletleri".

**Değerlendirme:**
- Kaynaklar dönemi **tek devlet olarak değil, şehir devletleri sistemi** olarak çerçeveliyor. Bu yüzden "Sümer devleti" diye tek kayıt **yanlış** olur.
- Şehir başına kayıt (Lagaš I, Umma, Ur I, Uruk, Kiš, Adab …) kaynakta **ad düzeyinde** var, ama **mutlak tarih yok**: Molina yalnız göreli sıralama veriyor (Lagaš I ≈ 110/120 yıl, ED IIIb içinde). ED I–II için kaynak açıkça "essentially archaeological periods" diyor, yani o dönemde şehir hanedanı adlandırmak dayanaksız.
- **Önerilen yol (savunulabilir olan):** tek bir *toplu* kayıt `sumer-sehir-devletleri`, `ad:"Erken Hanedan Sümer şehir devletleri"`, `tur` için yeni bir değer (ör. `sehir-devletleri`) ve `ic_not`'ta "tek devlet değil, bağımsız şehir devletleri kümesi (Molina RlA 13, 297–298)" açıklaması. Her nokta kendi şehrinin sahibi sayılır; toplu kayıt yalnız "boş değil, bağımsız şehir" bilgisini taşır. Şehir başına kayıtlar sonraki bir adımda (Marchesi/Marchetti 2011, 118–128 okunduktan sonra) yalnız ED IIIb için açılabilir.
- Lugalzagesi hegemonyası (25 yıl, SKL) Akkad'dan hemen önce ayrı bir üst katman olabilir ama mutlak tarihi kaynakta yok → **önerilmiyor**, yalnız not.

---

## 4. ÖNERİ TABLOSU (Orta Kronoloji; astronomik yıl = 1 − MÖ yılı)

`f`/`t` biçimi depodakiyle aynı (`YYYY-01-01`, yıl kesinliğinde `-01-01` uzlaşması). Kesinlik sütunu `ic_not`'a yazılmalı.

| # | id (öneri) | ad (öneri) | f | t | kesinlik | Tarih dayanağı (verbatim, sayfa) | Kapsadığı şehirler |
|---|---|---|---|---|---|---|---|
| 1 | `sumer-sehir-devletleri` | Erken Hanedan Sümer şehir devletleri (toplu kayıt) | `-2999-01-01` (MÖ 3000; Molina'nın Cemdet Nasr "ca. 3100–2900" + ED "ca. 2900–2300" aralığına düşer) | `-2333-01-01` (Sargon, Brinkman) — ya da `-2299` (Molina "around 2300") | yüzyıl | MOLINA s. 297–298 (yukarıda §3) | **Bölge düzeyi** (şehir devletleri kümesi). Kaynakta adı geçen ED şehirleri: Šuruppak (Fāra), Abū-Ṣalābīḫ, Ĝirsu, Ur, Nippur, Adab, Zabala(m), Lagaš, Umma, Uruk, Kiš (MOLINA s. 298). Bunlar "devletin şehirleri" değil, *birer ayrı devlet*. |
| 2 | `akkad` | Akkad İmparatorluğu (Sargon hanedanı) | `-2333-01-01` | `-2153-01-01` (Šu-Turul sonu 2154) | yıl (MC; ±64) | BRINKMAN 1977 s. 335–336: *"1. Sargon 2334–2279 (56)"* … *"Su-Turul 2168–2154"*; not 2: Sargon'un yılları *"may include a period during which he was a dependent prince before his final victory over Lugalzagesi"* | Bölge düzeyi + MOLINA s. 298: *"Independent city-states of the south were thus integrated in the Akk. state as provinces (Provinz* A), and their rulers became governors politically subordinated to the Akk. king."* Ayrıca s. 298: Sargon *"gained control over northern Babylonia, moved to Akkad*, and defeated a Sum. coalition led by Lugalzagesi"*. |
| 3 | `ur-iii` | Ur III Devleti (Ur'un Üçüncü Hanedanı) | `-2111-01-01` (2112) | `-2003-01-01` (2004) | yıl (MC; ±64) | BRINKMAN 1977 s. 336: *"2. Third Dynasty of Ur. Ur-Nammu 2112–2095 … Ibbi-Sin 2028–2004"*. MOLINA s. 299: *"Third Dynasty of Ur (2110–2003)"* | MOLINA s. 299: Šulgi *"first secured the control over southern and northern Babylonia"*; devlet *"organized in core and peripheral provinces"*. EDZARD s. 182: Isin *"war nunmehr eine von einem ensí „Stadtfürsten" verwaltete Provinz"*. ⇒ Isin şehir adıyla; geri kalan **bölge düzeyi**. Puzriš-Dagān adı geçiyor. |
| 4 | `isin-i` | I. Isin Hanedanı | `-2016-01-01` (2017) | `-1793-01-01` (1794) ya da `-1792` (Edzard 1793) | yıl (MC) | BRINKMAN 1977 s. 336: *"3. First Dynasty of Isin. Išbi-Irra 2017–1985 … Damiq-ilišu 1816–1794"*. EDZARD s. 182: aynı liste *"(Jahreszahlen nach der mittleren Chronologie)"*; s. 183: Isin'in düşüşü 1793. | Isin (başkent). EDZARD s. 182: Isin *"zum Nachfolgestaat der III. Dynastie von Ur"*; Ur'un kültünü sürdürdü. **Ur 1932 civarı kaybedildi** (s. 183: Gungunum *"bemächtigte sich der Hafenstadt Ur. Damit war die Vormachtstellung Isins gebrochen"*). **Nippur Enlil-bāni (1860–1837) döneminde Larsa'ya geçti, bir daha tutulamadı** (s. 183). **Uruk en geç Enlil-bāni döneminde bağımsız** (s. 183). |
| 5 | `larsa` | Larsa Krallığı | `-2024-01-01` (2025) | `-1762-01-01` (1763) | yıl (MC) | BRINKMAN 1977 s. 336–337: *"4. Larsa Dynasty. Naplanum 2025–2005 …"* *"14. Rim-Sin (I) 1822–1763 (60)"* | Larsa; Ur (Gungunum 1932–1906'dan itibaren, EDZARD s. 183); Nippur (Enlil-bāni döneminden itibaren, çekişmeli); Isin (1793'ten itibaren, EDZARD s. 183). ⚠ İlk hükümdarlar (Naplanum vd.) için "devlet" düzeyi tartışmalı — Edzard: Larsa *"scheint bis zur Regierung Lipit-Ištars keine Konkurrenz geboten zu haben"* (s. 182). ⇒ Larsa'nın anlamlı toprak sahipliği 1932 öncesinde yalnız Larsa şehrine verilmeli. |
| 6 | `eski-babil` | Eski Babil Krallığı (I. Babil / Hammurabi Hanedanı) | `-1893-01-01` (1894) | `-1594-01-01` (1595) | yıl (MC; ±64) | BRINKMAN 1977 s. 337: *"5. First Dynasty of Babylon (Hammurapi Dynasty). Sumuabum 1894–1881 … Hammurapi 1792–1750 … Samsuditana 1625–1595"*; OPPENHEIM s. 158: *"With the conquest of Babylon by the Hittite king Muršili (ca. 1600 B.C.) the Dark Age began"* | Babil (başkent). **Güney yalnız 1763 – ~1740 arası:** EDZARD s. 183: Hammurabi *"Im Datum 33 spricht er von der Wasserversorgung von Nippur, Eridu, Ur, Larsa, Uruk und Isin durch den neuen Kanal"*; *"Als der Süden von Hammurabis Reich unter seinem Nachfolger Samsu'iluna wieder verlorenging"* — isyancılar arasında Uruk (Samsuiluna 10); Isin en az Samsuiluna 19'a (=1731) kadar Babil'de. OPPENHEIM s. 157: *"This transfer of power was recognized everywhere but in the deep south"*. ⇒ Güney şehirleri (Ur, Uruk, Larsa, Eridu) için sahiplik `-1762 → ~-1739`; Nippur/Isin için ~`-1730`'a kadar. Kuzey şehirleri (Sippar, Kiš, Kutha, Dilbat, Marad): **bölge düzeyi** (şehir-adlı ifade okunmadı). |
| 7 | `deniz-ulkesi-i` | I. Deniz Ülkesi Hanedanı | `-1739-01-01` (c. 1740) | `-1474-01-01` (c. 1475) | on yıl / yaklaşık | BRINKMAN Meerland s. 6: *"§ 1. First Sealand Dynasty, c. 1740–1475."* | **Bölge düzeyi, sınırı bilinmiyor.** s. 6: *"a largely marshy area – extent as yet undetermined – in southeastern Lower Mesopotamia"*; Nippur'da İlī-ma-AN tarihli 5 belge (s. 6: *"five legal documents excavated at Nippur which bear year-names mentioning Ilī-ma-AN"*). s. 6: *"there is at present no direct evidence"* ki herhangi bir kralı Babil'i yönetmiş olsun. ⇒ **Haritaya poligon konmamalı**; ya hiç konmamalı ya "sınırı belirsiz" bayrağıyla. |
| 8 | `kassit` | Kassit Babil Krallığı (Babil III. Hanedanı) | `-1594`/`-1499` arası — **yıl verilemez** (bkz. not) | `-1154-01-01` (c. 1155) | başlangıç: yüzyıl; bitiş: yıl (±20) | BRINKMAN Kassiten s. 465: *"A Kassite dynasty gained control of northern Babylonia in the early sixteenth century and conquered southern Babylonia by about 1475 B.C.; with minor interruptions, this dynasty continued to rule over the united land until about 1155 B.C."* BRINKMAN 1977 s. 338: son kral *"Enlil-nadin-ahi 1157–1155"*; ilk kesin tarihli kral *"(1374)–1360"*. | Kuzey Babilonya (Babil, Sippar vb.) 16. yy başından; **güney (Ur, Uruk, Larsa, Eridu…) ancak ~1475'ten sonra**. BRINKMAN Meerland s. 8: Nazi-Maruttaš (1307–1282) döneminde *"the Sealand had become a province of Babylonia"*. Şehir-adlı başka ifade okunmadı → bölge düzeyi. |
| 9 | `isin-ii` | II. Isin Hanedanı (Babil IV. Hanedanı) | `-1156-01-01` (1157) | `-1025-01-01` (1026) | yıl (±20) | BRINKMAN Isin B s. 183: *"Dynasty which ruled Babylonia ca. 1157–1026 B.C. Listed as the fourth dynasty of Babylon in Kinglist A, that is, as successor to the Kassite Dynasty and predecessor of the Second Dynasty of the Sealand."* BRINKMAN 1977 s. 338: *"8. Second Dynasty of Isin … Marduk-kabit-ahhešu 1157–1140 … Nabu-šumu-libur 1033–1026"* | Bölge düzeyi ("ruled Babylonia"). |
| 10 | `babil-krallik` (toplu) | Babil Krallığı — Kassit/İsin sonrası hanedanlar (II. Deniz Ülkesi, Bazi, Elam, "belirlenmemiş/karışık") | `-1024-01-01` (1025) | `-0626-01-01` (627, Kandalanu) | 1025–900: ±20 yıl; 900 sonrası yıl | BRINKMAN 1977 s. 338–340: *"9. Second Dynasty of the Sealand. Simbar-Šipak 1025–1008 …"*; *"10. Bazi Dynasty … 1004–985"*; *"11. Elamite Dynasty. Mar-biti-apla-usur 984–979"*; *"12. Undetermined or Mixed Dynasties. Nabu-mukin-apli 978–943 … 33. Kandalanu 647–627"*; not 20: *"Though Kandalanu died in 627, in certain parts of Babylonia documents continued to be dated under his name in 626."* | BRINKMAN Meerland s. 8 (Simbar-Šipak): *"His reign is attested over a wide area of the country, including Sippar, Nippur, and Saḫrītu (in the south)."* Ama aynı sayfa: *"Under the final monarch of the dynasty, Kaššû-nādin-aḫḫē, the country began to lapse into anarchy once again."* ⇒ Sippar, Nippur şehir adıyla (yalnız 1025–1008 için); geri kalan bölge düzeyi. |
| 10a | `yeni-asur` (yalnız Babil üzerindeki **doğrudan** Asur krallığı dilimleri için; Asur'un kendi künyesi ayrı iş) | Yeni Asur İmparatorluğu — Babil tahtında | dilimler (aşağıda) | dilimler | yıl | BRINKMAN 1977 s. 339–340, Babil kral listesi: *"19. Tiglath-pileser/Pulu 728–727"*, *"20. Shalmaneser/Ululaju 726–722"*, *"22. Sargon II 709–705"*, *"23. Sennacherib 704–703"*, *"27. Aššur-nadin-šumi 699–694"*, *"30. Sennacherib 688–681"*, *"31. Esarhaddon 680–669"*, *"31a. Ashurbanipal 668"* | Bölge düzeyi. Dilimler (MÖ): **728–722, 709–703, 699–694 (Asur prensi), 688–668**. Arada Babil'li/Kalde kralları bağımsız: *"21. Merodach-Baladan II 721–710"*, *"25. Merodach-Baladan II 703"*, *"26. Bel-ibni 702–700"* (Asur atamasıydı ama Babil kralı), *"28. Nergal-ušezib 693"*, *"29. Mušezib-Marduk 692–689"*. Šamaš-šum-ukin 667–648 ve Kandalanu 647–627: Asur'a bağlı Babil kralları (Brinkman listesinde Babil hanedanı içinde). |
| 11 | `yeni-babil` | Yeni Babil (Kalde) Krallığı | `-0625-11-23` ya da `-0624-01-01` (resmî 625) | `-0538-10-…` / `-0538-01-01` (539) | gün/yıl | BRINKMAN Nabopolassar s. 12–13: *"king of Babylon 625–605 B.C."*; *"N. was the founder of the Neo-Babylonian dynasty, which reigned officially from 625 until 539 B.C. According to Babylonian chronicles, N. came to the throne in Babylon on VIII-26-626 (= Nov. 23, 626 in the Julian calendar) …"* BRINKMAN 1977 s. 340: *"13. Neo-Babylonian (or "Chaldean") Dynasty. Nabopolassar 625–605 … Nabonidus 555–539"*; *"14. Persian Rulers. 1. Cyrus II 538–530"* | Nabopolassar s. 13: 627'de *"he withdrew as Assyrian forces came to Nippur; he then fought successfully at Uruk against an army composed of Assyrians and men of Nippur"* ⇒ 626–~620 arası Nippur ve Uruk **çekişmeli** (s. 13: *"none of the schemes proposed has managed to win wide acceptance"*). Nabonid dönemi için ROAF s. 12: *"Inscriptions describing his building operations have been found at numerous sites including Tall al-Laḥm, Ur, Larsa, Uruk, Babylon, Kiš, Sippar, and Ḫarrān"* — inşaat yazıtı ⇒ Ur, Larsa, Uruk, Babil, Kiš, Sippar için şehir-adlı kanıt (555–539). |

Notlar:
- **Akkad/Ur III örtüşmesi ve Guti boşluğu**: Brinkman'a göre 2154 → 2112 arası hiçbir hanedan güneyi tutmuyor (bkz. §5).
- **Ur III / Isin I / Larsa örtüşmesi**: Isin 2017, Larsa 2025 başlıyor, Ur III 2004'e kadar sürüyor. EDZARD s. 182: *"Nach der Usurpation Išbi-Erras und gut anderthalb Jahrzehnten der Rivalität zwischen einem aufstrebenden Staate Isin und dem niedergehenden Reich von Ur …"* ⇒ 2017–2004 arası şehir bazında çakışma; nokta bazında sahiplik bu 13 yılda bölge düzeyinde atanamaz.
- **Kassit içi kesinti**: Tukulti-Ninurta I'in Babil'i fethi (BRINKMAN Kassiten s. 465: *"after Tukulti-Ninurta I (1243–1207) had conquered Babylonia"*) — Brinkman bunu *"with minor interruptions"* kapsamında sayıyor. Ayrı bir Asur dilimi açmak için yıl aralığı bu sayfada yok → önerilmiyor.

---

## 5. Sahipsiz / bilinmeyen aralıklar (üstü örtülmemeli)

| Aralık (MÖ, MC) | Astronomik | Ne var | Kaynak (verbatim) | Önerilen işlem |
|---|---|---|---|---|
| ~2193/2154 → 2112 | `-2192`/`-2153` → `-2111` | **Guti dönemi**: Guti hâkimiyeti + bağımsız Lagaš II (Gudea) ve Uruk IV–V. Tek sahip yok. | HALLO s. 714: *"the „Gutian period" may have been an interval of no more than four or five decades of petty-statism between the imperiums of Šarkališarri of Akkad and Urnammu of Ur."* MOLINA s. 299: *"Gutian rulers finally formed a dynasty and achieved hegemony over the region … Nevertheless, city-states such as Lagaš and Uruk soon regained independence."* MOLINA s. 299: Lagaš II *"coexisted with the rulership of Ur-Namma"*. | Sahipsiz bırak **ya da** şehir başına: `lagas-ii` (Lagaš, Girsu), `uruk-iv-v` (Uruk). Mutlak tarihleri kaynakta yok (Hallo: Lagaš II için "at least 33 years"). Guti için poligon **önerilmiyor** — Hallo s. 713: *"In the absence of even a single firmly established synchronism … this chronological solution must be rejected"* (106–145 yıllık şemalar için). |
| 2017 → 2004 | `-2016` → `-2003` | Ur III'ün çözülüşü; Isin ve Larsa ayrışıyor. | EDZARD s. 182 (yukarıda) | Çakışma; nokta bazında ancak şehir adıyla. |
| ~1860 → 1802 civarı | — | **Uruk bağımsız krallığı** (Isin–Larsa arasında). | EDZARD s. 183: *"Spätestens unter Enlil-bāni wird auch Uruk ein selbständiges Königtum."* | Uruk noktası bu dönemde Isin'e de Larsa'ya da verilmemeli. Bitiş yılı okunmadı (Rīm-Sin'in Uruk'u alması) → **açık**. |
| Isin–Larsa dönemi kuzey (Kiš, Marad, Sippar, Kutha, Dilbat, **Ešnunna**) | — | Babil öncesi ve Babil'in dışında yerel krallıklar; **Ešnunna ayrı devlet** (Diyala). | Bu oturumda imzalı kaynaktan **okunmadı**. RlA'da `Ešnunna` (2, 478), `Kiš A` (Edzard 5, 607), `Marad` (Edzard 7, 351), `Sippar A.I` (Kalla 12, 528), `Kutha` (Edzard/Gallery 6, 384) maddeleri var. | Okunmadan sahip atanmamalı. Ešnunna için ayrı künye (`esnunna`) gerekir — **AÇIK**. |
| ~1740 → ~1475 (güney) | `-1739` → `-1474` | I. Deniz Ülkesi; sınırı bilinmiyor. | BRINKMAN Meerland s. 6: *"extent as yet undetermined"* | Künye var (#7) ama poligon yok; güney noktaları "belirsiz". |
| 1595 → "early 16th c." (kuzey) | `-1594` → ? | Hitit yağmasından sonra Kassit'in kuzeyi alması — tarihi belirsiz. | OPPENHEIM s. 158: *"With the conquest of Babylon by the Hittite king Muršili (ca. 1600 B.C.) the Dark Age began, continuing through the reign of the nineteenth king (Burnaburiaš II, 1359–1333 B.C.)"*; BRINKMAN 1977 s. 346 not 10: *"If one accepts the total length of reign given for this dynasty in King List A, the reign of Gandaš would begin about 1729."* | `kassit.f` yüzyıl kesinliğinde ve `ic_not_f`'de açıkça "erken 16. yy, yıl bilinmiyor". |
| ~1007 → ~850 (özellikle 11.–10. yy) | `-1006` → `-849` | Aramî kargaşası; kısa hanedanlar (Bazi 3 kral, Elam 1 kral); güneyde Deniz Ülkesi valileri. | BRINKMAN Meerland s. 8: Simbar-Šipak *"restored Babylonian political power after decades of Aramean disruption"*; *"the country began to lapse into anarchy once again"*; § 4 başlığı *"The Sealand, 1004–850. There are only two texts referring to the Sealand during this intermediate period."* | `babil-krallik` künyesi tahtı (Babil) kapsar; **güney şehirlerini (Ur, Uruk, Eridu, Larsa) bu dönemde Babil'e otomatik vermek dayanaksız.** Bölge düzeyi "belirsiz" bırak. |
| ~850 → 640 (güney) | — | Deniz Ülkesi + Kalde aşiretleri (Bīt-Yakīn vb.) Asur'la temas halinde. | BRINKMAN Meerland s. 8: *"§ 5. The Sealand in Contact with the Neo-Assyrian Empire, 850–640. This is the best-documented period in the history"* (devamı s. 9 — **okunmadı**). | s. 9–10 okunmadan güneye sahip atanmamalı — **AÇIK**. |
| 626 → ~620 | `-0625` → ~`-0619` | Nabopolassar ile Asur arasında iç savaş; Asur kralları adına tarihli belgeler sürüyor. | BRINKMAN Nabopolassar s. 13: *"The bulk of Babylonian documentation from or around this time consists of economic or legal texts dated under N. (at least 240 texts, years 0–9) or under one of three Assyrian rulers: Aššur-etel-ilāni …, Sîn-šumu-līšir …, and Sîn-šar-iškun (58 texts, years 0–7)."* | Babil = `yeni-babil` (626/625'ten); Nippur/Uruk ~620'ye kadar çekişmeli. |
| 539 → | `-0538` → | Pers fethi. | BRINKMAN 1977 s. 340: *"14. Persian Rulers. 1. Cyrus II 538–530"* | `ahameni` **henüz yok** (§0) — `yeni-babil.t` ile birlikte girilmeli. |

---

## 6. Belirsizlikler ve uyarılar (özet)

1. **Depo MÖ tarihi hiç taşımıyor.** `-2333-01-01` biçiminin yükleyicide çalıştığı doğrulanmadı. Dizin başlığı kapsamı "1200-1924" diyor. Bu bir veri sorunu değil, şema/kapsam kararı.
2. **`ahameni` yok.** Görev metni bunu var sayıyor; ölçüm 0 diyor (CLAUDE.md:1230 da aynısını yazıyor).
3. **Kronoloji payı:** MÖ 1500 öncesi her `f/t` Orta Kronoloji'ye göredir; Yüksek (+56) / Düşük (−64) seçenekler Brinkman s. 346 n. 4'te. Akkad için Rowton (2370–2190) ve Hallo (2293–2113) seçenekleri Brinkman s. 346 n. 1'de. Molina Sargon'u "around 2300" (MC) veriyor.
4. **Erken Hanedan = şehir devletleri sistemi** (Molina). Tek "Sümer devleti" kaydı yanlış olur; toplu kayıt yalnız "bağımsız şehir devleti" etiketi olarak kullanılmalı. Şehir başına mutlak tarih yok.
5. **I. Deniz Ülkesi** sınırı belirsiz (Brinkman: "extent as yet undetermined"). Poligon yok.
6. **Asur'un Babil üzerindeki hâkimiyeti sürekli değil**: 728–722, 709–703, 699–694, 688–668 doğrudan; arada Merodach-Baladan II (721–710, 703), Mušezib-Marduk (692–689) bağımsız; 667–627 Asur'a bağlı Babil kralları.
7. **Kuzey şehirleri (Sippar, Kiš, Kutha, Dilbat, Marad) ve Ešnunna** için Isin–Larsa dönemi sahipliği bu okumada kaynaklanmadı. RlA maddeleri belirlendi (§5) ama okunmadı.
8. Van De Mieroop, CAH, Roux ve Postgate'in archive.org kopyaları kısıtlı; bunlardan **alıntı yapılmadı**.

### Okunan sayfa görselleri (doğrulama için)
`https://publikationen.badw.de/de/rla/a/` + `3.730.jpg` (RlA III 713), `3.731.jpg` (714), `5.214–216.jpg` (V 181–183), `5.501–502.jpg` (V 464–465), `8.35–37.jpg` (VIII 6–8), `9.39–40.jpg` (IX 12–13), `13.372–374.jpg` (XIII 297–299). Görüntü no. ≠ basılı sayfa no. (fark ciltten cilde değişiyor: III +17, V +33/+37, VIII +29, IX +27, XIII +75).
Brinkman 1977: `https://archive.org/download/ancient_mesopotamia_202208/ancient_mesopotamia_djvu.txt` (s. 335–348; OCR — özel adlarda š/ṣ bozulmaları var, alıntılarda normalleştirildi: ör. OCR "Samsuiluna"/"Hammurapi" aynen, "Ganda'" → Gandaš).
