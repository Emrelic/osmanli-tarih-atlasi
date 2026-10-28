# UMIT-W13-ODAK-BOS-1006c — (a) geometri-boş dönüşü · (b) `iran` niye çizilmiyor

Ağaç `C:\atlas-w13` = origin/main `6d23f5ac` + ODAK-SEKME-1006 + ODAK-METIN-1006 + ODAK-SEKME-1006b. İş bitince ağacın diff'lerle aynı olduğu doğrulandı (`write-tree` eşit) ve ağaç kaldırıldı.
`renkler.py`, `devletler.js`, `data/` ve `app.js`e DOKUNULMADI. Sınav `devlet_harita_ust.js` ile `kronoloji_akkoyunlu.js`e geçici yazdı ve `git checkout --` ile geri aldı.

## 0. ÖNGÖRÜ — ölçümden ÖNCE mühürlendi
| öngörü | ölçüm | hüküm |
|---|---|---|
| (a) 302 GÖVDE'nin 0–3'ünde geometri boş, büyük ihtimalle 0 | **0** (372 gövde yolu maddesinin 372'si taklitle uyuştu) | ✓ |
| (a) öneri: sıfırsa kalıcı soru olarak sayaca girsin, maliyet kabulse | maliyet **kabul değil**: bellek tepesi 345 → **1438 MB**, +4 sn | öneri değişti (§1) |
| (b) `iran`ın `harita:` anahtarı 1555–1600'ü kapsamıyor; Safevî gövdesi başka kimlikte | ✓, ama kök sebep harita değil BAĞLAMA (§2) | yarım ✓ |
| (b) sınıf künye↔harita eşleme kusuru (`devletler.js harita:`) | ✗: `KRONOLOJI_IRAN` dosyası Pehlevi künyesine bindiriliyor | ✗ |
| (b) 52 sessizin ≥30'u iran'dan | **16** (+ macaristan 14 · kırım 13) | ✗ |

## 1. (a) Üçüncü boş dönüş — GERÇEK işlevlerle ölçüldü
- **Yöntem:**
  - `js/geo_coz.js` gerçek hâliyle koştu. Katman 1'i çözdü, ardından `data/devlet_parcalar.js` tam havuzunu çözdü: **93.368 halka**.
  - `parcaCoz`, `devletler2` kurulumu ve `devletiYay` app.js'ten metinle kesildi; `harita.fitBounds` sayaçla değiştirildi.
  - 372 gövde yolu maddesinin (GÖVDE 302 + SESSİZ 53 + OKUNMAYAN gövde 17) her biri için `devletiYay` çağrıldı.
- **Sonuç:**

  | taklit (`sekmeDali`) | gerçek `devletiYay` | madde |
  |---|---|---|
  | gövde var | `fitBounds` çağrıldı | **313** |
  | sessiz | boş döndü | **59** (53 SESSİZ + 6 OKUNMAYAN-sessiz) |
  | gövde var | boş döndü (**geometri boş, yanlış temiz**) | **0** |
  | sessiz | `fitBounds` çağrıldı (yanlış kirli) | **0** |

  ⇒ Taklit iki yönde de gerçekle birebir. "Gövde var" varsayımı bugün **0 maddede** yanlış temiz veriyor.
- **Maliyet** (`process.resourceUsage().maxRSS`, aynı makine):

  | | bellek tepesi | süre |
  |---|---|---|
  | kapı ölçümü bugün | 345 MB | 4,8 sn |
  | gerçek `devletiYay` ile | **1438 MB** | 8,7 sn |

- **ÖNERİ (uygulandı, diff'te):** sayaca KONMADI, **bayraklı doğrulama** olarak eklendi.
  - Gerekçe: RAM darboğazı geçmişi var (CLAUDE.md §7.2 ④: 11,9 GB, boş 0,69 GB). Her kapı koşusuna +1,1 GB, 0 vaka için kötü pazarlık.
  - Bunun yerine kapı hafif kalır. Taklidin gerçekle uyumu `py arac/odak_olc.py --yay-dogrula` ve sınavın S7'si ile istendiğinde sınanır.
  - **D:** geometri-boş vakası ileride 0'dan çıkarsa (motor çıktısında dönemi olup halkasız gövde), `--yay-dogrula` yayın öncesi kapıya alınabilir. Karar koordinatörün.

### `ODAK-SEKME-1006c.diff` (SEKME → METIN → 1006b üstüne, 243 satır)
- **`arac/odak_cozum.js`:** `G.yay_dogrula` (varsayılan kapalı).
  - Gerçek `geo_coz` + `parcaCoz` + `devletiYay` ile taklidi karşılaştırır.
  - Tam havuz çözülemezse ya da `devletiYay` patlarsa **ÇIKIŞ 2 ÖLÇÜLEMEDİ**.
  - Çıktı: `yay_dogrulama{halka, capraz, ucuncu_return, uyusmazlik}`.
  - Kodun "üçüncü return sorulmuyor" yorumu ölçümle güncellendi.
- **`arac/odak_olc.py`:** `--yay-dogrula` bayrağı eklendi; sonucu basar. Kullanım metninde bedeli yazılı.
- **`denetim/ARAC-ODAK-SEKME-SINAV-1006.py`:** S7 eklendi.
  - **S7a ötmemeli:** gerçek veride geometri boş 0, uyuşmazlık 0, çapraz toplamı = gövde yolu (372).
  - **S7b ötmeli:** `devlet_harita_ust.js`te akkoyunlu'nun **1469-01-01→1473-08-11** dönemi `"g":[]` yapıldı ve sentetik akkoyunlu 1470 maddesi eklendi. Gerçek `devletiYay` boş döndü, YAKALANDI. Aynı dönemdeki gerçek akkoyunlu maddeleri de (ör. 1472 Venedik elçisi) yakalandı.
  - **S7b':** aynı madde taklitte GOVDE kalır. Bu, kapının bilinçli ve belgeli kör noktasıdır.

## 2. (b) `iran` niye çizilmiyor — YALNIZ ÖLÇÜM
- **Künye:** `iran` = "İran (Pehlevi Hanedanı → İran İslam Cumhuriyeti)", `f:1925-12-12`, `harita:` yok. Hanedanlar ayrı künyelerde: `safevi` · `afsar` · `zend` · `kacar`.
- **Bağlama:** `data/kronoloji_iran.js` (`KRONOLOJI_IRAN`, "BİRLEŞİK kronoloji", **107 madde, 1295-06-19 → 1923-10-28**) app.js `derinKronolojiBindir` ile ad eşlemesine düşüyor: `"KRONOLOJI_IRAN".slice(10).toLowerCase()` = `iran` → Pehlevi künyesi.
  - **107 maddenin 107'si künye penceresinden ÖNCE.**
  - App.js uyarısı ölçüldü: *"🔴 KRONOLOJİ EZİLDİ — iran (künye 6 madde → dosya 107)"*. Künyenin kendi **6 Pehlevi maddesi** (1925-12-12 … 1979-03-31) dosyada YOK ⇒ **sekmede görünmüyor**. Bu, odaktan ayrı ikinci bir kusur.
- **Harita:** `DEVLET_HARITA`daki `iran` kimliği Pehlevi gövdesi DEĞİL. Yerleşimlerdeki genel `iran` etiketinin motor çıktısı, yalnız 4 dönem: **1281-01-01 → 1510-12-02**.
  - `renkler.py:278` notu: 1747–1796 aralığında da genel `iran` meşru etiket. Bugün DEVLET_HARITA'da o aralıkta `iran` dönemi YOK; neden ölçülmedi.
  - 1510 sonrası İran'ı `safevi`/`kacar` çiziyor. Ölçüldü (`sahipAnahtari`): Tebriz 1555 `s:safevi` · Kazvin/Tahran 1555-1600 `s:safevi` · 1800/1923 `s:kacar`.
- **Sonuç:** `iran` sekmesindeki 108 madde: NOKTA 77 · OKUNMAYAN 14 · GÖVDE 1 · **SESSİZ 16**. 16'sının hepsi 1555-1922 ve künye penceresi dışında.

### Sınıf ve sahip
- **Sınıf: BAĞLAMA kusuru** — "ardıl/öncül yapı" ailesi, `CLAUDE.md §3.5` ③. Birleşik bir ülke kronolojisi, adı tutan ama dar pencereli bir künyeye otomatik bağlanıyor. Harita kusuru değil: `DEVLET_HARITA` doğru çiziyor, madde yanlış künyede.
- **Sahipler** (karar koordinatörde; ben değiştirmedim):
  - **`data/kronoloji_iran.js` sahibi** (kronoloji kuyruğu): ana çare. Maddeler dönem künyelerine dağıtılır, ör. `KRONOLOJI_COK_*` biçiminde `taraflar:["safevi"]` …
  - **`js/app.js` sahibi:** `KRONOLOJI_ID_OZEL` istisna sözlüğü. Tek başına çare DEĞİL: tek künyeye yönlendirir, birleşik dosyayı bölemez.
  - **`devletler.js` sahibi:** künyeyi GENİŞLETMEK Emre'nin "hanedan adları ayrı künyelerde" kararına ters. Önerilmez.
  - **EZİLEN 6 Pehlevi maddesi:** aynı sahiplerin işi.

## 3. 59 sessiz vakanın sınıf dökümü (tekil; künye penceresi = künye `f`/`t`)
| sınıf | vaka | künyeler |
|---|---|---|
| **künye penceresi DIŞI** (bağlama/aşım, §3.5 sınıflandırması gerekir) | **39** | iran 16 · macaristan 14 (1526 sonrası, künye 1000→1526) · fransa 3 (1792 sonrası) · malaka 2 · kırım 1 (1792) · ispanya 1 (1478, künye 1479) · mataram 1 · ho 1 |
| **künye içinde, gövde yok** | **19** | kırım 12 (1476-1770; büyük ihtimalle tâbi-çizili `v:kid`, kendi gövdesi yok — ölçülmedi) · gürcistan 1590 · uç günleri: behmeni 1527 = t · orissa 1568 = t · sur 1564 = t · moundville 1450 = t · muromachi 1573 · ayutthaya 1351 = f (`aktifAralik` `t`yi dışlar) |
| **harita kaydı yok** | **1** | poni 1405 (künye `t` = madde günü) |

- **macaristan:** aynı desen. 1526 sonrası "Macaristan" maddeleri Ortaçağ krallığı künyesinde. Bu, iran'dan sonraki en büyük sessiz kova.
- **kırım (12):** tâbi hipotezi ÖLÇÜLMEDİ. Ölçülecekse ayrı iş.

## 4. Sınav
| sınav | koşul | sonuç |
|---|---|---|
| `ARAC-ODAK-SEKME-SINAV-1006.py` | | **23/0** (önceki 20 + S7a · S7b · S7b'), `data/` temiz |
| `ODAK-KAPI-SINAV.py` | bugünkü tavan | 3/2 (değişmedi; tavan yazılmadı) |
| `ODAK-KAPI-SINAV.py` | önerilen tavan (325 · 355 · 1103 · 53 · `[]`) | **5/0** |
| `odak_olc.py` | bayraksız | 5,1 sn; yay bloğu YOK (kapı ağırlaşmadı) |
| `odak_olc.py` | `--yay-dogrula` | 7,7 sn; 313/59, 0/0 |

## 5. Diff denetimi (geçici indeks)
`ODAK-SEKME-1006c.diff`: LF, CR **0**.
- SEKME + METIN + 1006b üstüne ileri **✓**
- `-R` **✗**
- çıplak main ✗ (beklenen)

Zincir: **SEKME-1006 → METIN-1006 → SEKME-1006b → SEKME-1006c**. Tavan önerisi DEĞİŞMEDİ (1006c sayı oynatmıyor).

## 6. Bulunamadı
- DEVLET_HARITA'da 1747–1796 genel `iran` dönemi niye yok: motor/yerleşim tarafı, ölçülmedi.
- Kırım 12 vakasının tâbi-çizili olup olmadığı ölçülmedi.
- `KRONOLOJI_IRAN` maddelerinin hangi hanedan künyesine düşeceği tasnif edilmedi; bu, kronoloji sahibinin işi.
