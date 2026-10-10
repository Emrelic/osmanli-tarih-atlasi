# KAMP-ANADOLU-ANTIK (K3) — MÖ 2000 – MÖ 330

Atama: koordinatör, 10 Ekim 2026 gece ("K3 SENİN"; gerekçe §7.3 ③ bağlam yeniden kullanımı). Tahta: M-5893 "K3 ALIYORUM · KASA".
Şartname: `oturumlar/KAMPANYA-DUNYA-1010.md` §2 K3 · §3 dosya şeması · §4 altı kural + K1'de türetilen kurallar.
Okuyucu kuralları: `KAMP-ANADOLU-ANTIK-KURALLAR.md`.
K1 dosyalarına DOKUNULMAZ.

## §0 EVREN ve ÖNGÖRÜ (ölçümden ÖNCE yazıldı, ayrı commit)
| okuyucu | evren | öngörü |
|---|---|---|
| A Neo-Hitit | Karkamış · Kummuh · Gurgum · Sam'al · Patina · Bīt-Zamani · Tabal · Melid · Que · Hilakku (+ bulunanlar) | t uçlarının ÇOĞU ① OLAY (Asur ilhakı, eponim tarihli); f uçlarının ÇOĞU ② / ③ (ilk anılış). K1'in 4 asgarî künyesinden en az 2'sinin t'si SINIR → OLAY'a yükselir |
| B Urartu | Urartu · Nairi/Uruatri · Šubria · Musasir · Diauehi | Urartu f ② (Aramu, Šalmaneser III ilk anılış), t ③ ya da BELİRSİZ (son ölçülemez) |
| C Hitit + Tunç Çağı | Kaneš ve kārum kent-devletleri · Hitit · Arzawa (+ ardıl Mira/Šeha/Hapalla/Wiluša) · Kizzuwatna · Kaška · Išuwa · Hayasa-Azzi · Tarhuntašša · Karkamış genel valiliği | uçların ÇOĞU ② / ③ (Hitit mutlak kronolojisi yok); ① yalnız senkronizmlerde (1595 Babil, Kadeş) |
| D Batı Demir Çağı | Frigya · Lidya · Karya · Likya · Kilikya · İyonya kentleri · Troya | ① az (Asur/Babil senkronizmleri: Mita 717–709, Gugu); Herodot sayımları ② / ③; Sardes 547/546 TARTIŞMALI |
| E Şehir | ≥30 konumlu şehir, ilk yazılı anılış | Hitit başkentleri OB / Kültepe tanıklı; 3 km çakışması modern şehirlerle (Malatya, Adana, Tarsus, Van, Diyarbakır, Samsat) |

## §1 Kronoloji sistemi
- MÖ 911 öncesi **Orta Kronoloji (OK)**; Hitit için hangi tablo kullanıldığı her tarihte beyan.
- MÖ 911 sonrası Asur eponim listesiyle **mutlak**.
- Mısır senkronizmleri (Kadeş) için Mısır kronolojisi beyan.

## §2 BİRLEŞTİRME — dört okuyucu, tek biçim (`KAMP-ANADOLU-ANTIK-birlestir.py`)
- Okuyucu raporları: `KAMP-ANADOLU-ANTIK-OKUYUCU-{neohitit,urartu,hitit,bati}.md` (ham, silinmedi).
- Okuyucular tip alanlarına serbest metin yazmıştı ("② İLK ANILIŞ ⇒ ÜST …", "≤-859-01-01", "ÖLÇÜLEMEDİ (ÜST ≤ -717)", "BELİRSİZ: ≥-646 … ≤-486").
- Birleştirici bunları ölçülebilir kolonlara ayırdı: `tarih_turu_*` ∈ OLAY | SALTANAT | DONEM | YOK + `sinir_yonu_*` ∈ ÜST | ALT. Özgün metin `tip_gerekce_*` kolonunda AYNEN duruyor.
- **Birleştiricide yakalanan kusur (benim):**
  - İlk sürüm sınır yönünü metnin HERHANGİ bir yerindeki "≤"/"ÜST" ile okuyordu ⇒ urartu t "≥-646 … ≤-486" ÜST okundu: aralığın yanlış ucu, bu gecenin D206 dersi.
  - Düzeltme: yön, O YILIN hemen önündeki işaretten okunur.
- "İlk anılış" f'si yön yazılmamışsa ÜST (kural 7). Okuyucu A yön yazmamıştı.

### Sayılar
| okuyucu | POLITY | f: ② / ① / ③ / YOK | t: ① / ② / ③ / YOK | KRONOLOJİ | EVET | AKIN | HARAÇ-ÖLÇÜLEMEDİ |
|---|---|---|---|---|---|---|---|
| A Neo-Hitit | 20 | 18 / 0 / 1 / 1 | **7** / 11 / 0 / 2 | 67 | 16 | 14 | 19 |
| B Urartu | 8 | 8 / 0 / 0 / 0 | **2** / 5 / 0 / 1 | 54 | 12 | 24 | — |
| C Hitit + Tunç | 20 | 18 / 1 / 1 / 0 | 0 / 14 / 4 / 2 | 32 | 9 | — | — |
| D Batı Demir | 9 | 4 / 0 / 5 / 0 | 0 / 5 / 0 / 4 | 39 | 23 | — | — |
| **toplam** | **57** | 48 / 1 / 7 / 1 | **9** / 35 / 4 / 9 | 192 + **101 türetilmiş** = **293** | 60 + türetilmiş | 38 | 19 |

- **101 türetilmiş madde:** §5 ② her polity için EN AZ doğuş + yıkılış maddesi ister. Okuyucunun yazmadığı uçlar POLITY'den türetildi, `okuyucu = birlestirici` ve "TÜRETİLDİ" damgalı.
- **İki ucu da yazılabilir (① ya da ②) künye: 41 / 57.**
- TABİ (tâbilik) kaydı: 29 (Hitit antlaşmaları CTH 42, 50/57, 51, 67, 68, 69, 76, 106, 122 + Batı: Lidya→İyonya, Pers satraplıkları).
  - Neo-Hitit ve Urartu tâbilik kanıtları KRONOLOJİ'de (`HARAÇ-ÖLÇÜLEMEDİ`, `EVET (v: kanıtı)`).

### Öngörü sınaması (§0, ölçümden ÖNCE commitlendi — 28498c3af)
| öngörü | ölçüm | sonuç |
|---|---|---|
| A: t uçlarının ÇOĞU ① | 20'nin **7**'si ① (%35), 11'i ② | **TUTMADI** — Sam'al, Que, Bīt-Zamani için ilhak OLAYI kaynakta YOK, yalnız "eponim listesinde vali" ÜST sınırı |
| A: K1'in 4 asgarî künyesinden ≥2'sinin t'si SINIR → OLAY | patina 738 ①, kummuh 708 ① (samal, bit-zamani ② kaldı) | **TUTTU** (2/4) |
| B: Urartu f ②, t ③/BELİRSİZ | f ≤859 ②; t ≥646 ALT + ≤486 ÜST, ikisi de ② | **TUTTU** (son ① değil; ama sınırları VAR, ③ değil) |
| C: ① yalnız senkronizmlerde | kronolojide 7 ① (Kültepe REL 4, 1595 Babil, Kadeş 1274, Karkamış ~1352) | **TUTTU** |
| D: ① az; Sardes TARTIŞMALI | 6 ①; Sardes ABC 7 ii.16 ülke adı kırık, Iranica "Lydia okuması savunulamaz" | **TUTTU** |

### Okuyucuların adlandırdığı tipleme kararları (seçme)
- **Hitit TEK polity:** Eski/Orta/İmparatorluk ayrımı "customarily referred to" = el kitabı dönem başlığı (kural 3) ⇒ künye değil, not.
- **Kizzuwatna antlaşmaları "annähernd paritätisch"** (RlA) ⇒ tâbilik DEĞİL.
- **Gordion yıkımı** ~800 (Penn: yangın, Kimmer DEĞİL). Geleneksel 696/676 kullanılmadı. Strabon senkronizmi ③.
- **Lidya f ≤649:** Prizma B, İNKÂR TANIĞIYLA: *"whose name none of the kings, my ancestors, had heard"*. Herakleid 505 yıl = kral listesi, dayanak DEĞİL.
- **Karya satraplığı = EYALET** (Iranica Jacobs: *"Caria had been a province since the conquest"*). Tâbilik değil.
- **Mita 709:** haraç/elçi TEK SEFERLİK + İNKÂR TANIĞI (*"had not submitted to the kings who preceded me"*) ⇒ AKIN.
- **Urartu:** Arzaškun 856 AKIN ("razed, destroyed, burned") · Ṭurušpa 735 AKIN (kuşatma, alınmadı) · Ulluba 739 DEVİR (*"I annexed to Assyria the land Ulluba"*) · Šubria 672 DEVİR ("iki valiye") · Muṣaṣir 714 DEVİR ama Urartu kültü sonra yeniden kurdu ⇒ t ALT sınır.
- **Okuyucu B tutarsızlık bildirdi:** Seduri seferi RIMA 3'te 27. yıl, eponim kroniği + RlA + eCUT 29. yıl (830) ⇒ 830 yazıldı; 31. yıl Muṣaṣir seferi bu yüzden ② (sayım 2 yıl kayık).
- **Melid ve Tabal İKİYE bölündü:** melid → 712'de Kummuh'a DEVİR, melid-2 Mugallu (675). tabal = Bīt-Burutaš eyalet 713, tabal-2 yeniden bağımsız (≥668).

### K1 asgarî künyeleri ↔ K3 tam künyeleri (K1 dosyaları DEĞİŞMEDİ)
| id | K1 asgarî (haraç tanığı) | K3 |
|---|---|---|
| patina | 857 – 831 (② ②) | f ≤**859** ② · t **738 ①** (Kullania, eponim kroniği) |
| samal | 857 – 738 (② ②) | f ≤**858** ② · t ≤**681** ② (eponim listesinde Sam'al valisi) |
| kummuh | 866 – 738 (② ②) | f ≤866 ② · t **708 ①** ("Kummuhu captured; a governor was appointed") |
| bit-zamani | 886 – 879 (② ②) | f ≤886 ② · t ≤**705** ② (Amedi valisi) |

- K3 künyesi K1 asgarî künyesinin YERİNE geçer (aynı id, koordinatör hükmü "id'ler K3 zenginleştirdiğinde AYNI kalır"). `qatnu` K1'de kalır (sahip K1).
- ⚠️ **Okuyucu A, K1'in 826–820 isyan listesini Bīt-Zamani için sınır olarak REDDETTİ:** "rebelled against Shalmaneser" bir eyaleti vasaldan ayırt edemez. K1 bu satırı sınır olarak kullanmamıştı; çatışma yok.

### Yazıma geçmeden çözülecek 5 künye (ön denetim ⓒ adayları)
- **sıfır uzunluk (f = t):** tuwana 738 · istunda 738 · sinuhtu 718 · assuwa 1400.
  - Tek tanık yılı (Tuwana, Ištunda, Šinuḫtu) ya da ÜST = ÜST (Aššuwa: iki uç da "Tudḫalija I sonu").
  - ⇒ Tebriz kuralı: 1 YIL dilim + beyan, ya da yazılmaz.
- **f > t (sınırlar birbirini geçiyor):** hayasa-azzi f ≤**1318** ÜST · t ≥**1338** ALT.
  - Okuyucu "ÜST'te en geç varyant, ALT'ta en erken varyant" kuralıyla İKİ AYRI saltanat tablosundan değer aldı.
  - Šuppiluliuma I sonu 1318 (bir tablo) · Muršili II 7. yılı 1338 (öteki tablo, katılım 1345) ⇒ tablolar birbiriyle tutarsız.
  - ⇒ **TABLO ÇATIŞMASI** — tek tablo seçilmeden yazılamaz.

### Bulunamadı (okuyuculardan, adıyla — tam liste okuyucu raporlarında)
- **A:**
  - Sam'al, Que, Bīt-Zamani ilhak olayı;
  - Ḫilakku, Atuna, Tuwana, Ištunda, Ḫubišna, Kundu-Sissu gerçek sonu;
  - tabal-2 yeniden bağımsızlık tarihi; Masuwari başlangıcı;
  - Hawkins CHLI açılamadı.
- **B:**
  - Urartu kuruluş yılı ve son olayı; Rusa'ların sırası;
  - Muṣaṣir = Ardini eşitlemesi;
  - Etiuni, Diauehi sonu;
  - Mannea → K5'e devredildi.
- **C:**
  - Bryce 2005 tablosu (archive.org 401);
  - Barjamovic–Hertel–Larsen 2012;
  - güncel RlA "Arzawa" (yalnız Forrer 1928);
  - Ḫayaša son tarihi; Kuzi-Teššub sürekliliği kaynağı.
- **D:**
  - Iron Age Troya polity'si YOK ("not an independent city-state");
  - Iranica Lidya/Gyges/Sardes/Hekatomnid/Likya/Kilikya/Frigya maddeleri (Wayback kopyası yok, Cloudflare);
  - Lidya ve Frigya kuruluş yılları; Sardes'in düşüş yılı.

### Hüküm bekleyen
- **Bīt-Adini kapsamı** (Arami, Suriye; Masuwari ardılı olarak alındı).
- **Hayaša-Azzi tablo çatışması:** hangi Hitit saltanat tablosu?
- **Oturum adı:** `set_session_title` aracı bu oturumda YOK ⇒ ad değiştirilemedi.
