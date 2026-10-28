# ODAK-KAPI-KIMLIK-1006 — odak kapısı SAYI'dan KİMLİK LİSTESİ'ne · BAĞLAMA kapısı madde başına

Görev: UMIT-W39d (UMIT İRTİBAT). ODAK-KAPI-KORLUK-1006 bulgusunun (`8e4ed88e`) uygulama paketi.

**Paket:** `denetim/ODAK-KAPI-KIMLIK-1006.diff`, 8 dosya, +2092 −294. **Uygulanmadı, commit yok.**

| temel | durum |
|---|---|
| `47290f11` | diff burada üretildi |
| `0b3d475f` (bugünkü `origin/makine/umit`) | `apply --check` temiz |

- İki temel arasında kilitli dosyalara ve odak çözücüsünün okuduğu veriye (`data/kronoloji_*`, `olaylar*`, `devletler`, `hukuki_sinirlar`, `devlet_harita_ust`, `js/suzgec.js`, `yerlesimler*`, `girdi.py`) dokunan commit **0**.
- Kapı `0b3d475f` üstünde diff uygulanmış hâlde yeniden koşturuldu: ihlal False, yeni 0 / 0.

⚠️ **Öngörü bu pakette ölçümden ÖNCE YAZILMADI** (`§11` ihlali). Bunu açıkça yazıyorum. Sayıların dayanağı öngörü değil, eski tavanla birebir tutma sağlamasıdır (§1).

## 1. ① Kimlik listesi — `denetim/ODAK-TAVAN.json`
**Kimlik.** Kimlik = `t | NFC(b).trim()`. `arac/odak_cozum.js`te üretilir (`kimlik()`); Python yalnız karşılaştırır, yani normalleştirme tek yerde durur.

**Dosyalar arası 52 ikiz grubu** aynı maddenin kopyalarıdır (W37 ekleyicisinin dedupe ölçütü de `t + b`). Bu yüzden:
- Taraf eklenmedi, **çoklu küme** (`Counter`) olarak sayılır.
- Bir kopyanın sınıfı değişirse sayı farkı görünür.
- Çekirdeğe göç sorusu da çoklu küme FARKIYLA sorulur, çünkü bir kopya zaten çekirdekte olabilir.

**Geçiş (`§3.4 ⓪`).** `--tavan-yaz --ilk-dondurma`, ölçüm eski sayılarla birebir tutmazsa REDDEDER. Tuttu:

| kova | eski tavan (sayı) | yeni tavan (liste) | not |
|---|---|---|---|
| ODAKSIZ (evren dosyaları) | 401 | **401 kimlik** | |
| BEYANLI→yabancı | 426 | **426 kimlik** | `yabanci_beyanli_kimlik` |
| YENİ KAPSAM (evren dışı ODAKSIZ) | sayı yoktu | **331 kimlik** | adıyla; bloke etmez |
| SEKME SESSİZ (madde × künye) | ölçülmüyordu | **97 çift** | kamera ölçüsü (§3) |
| çekirdek BEYANLI | — | **14** | göç bekçisi için |
| bilinen kusur | 1 | 1 | anahtar artık dosyasız |
| evren özeti | — | 9.984 madde | sha1[:8], 79.872 karakter |

**Sağlama.** Sayılar (`odaksiz`, `sekme_sessiz`, `beyanli_*`) listenin uzunluğu olarak durur. Elle değiştirilirse kapı öter (`tavan TUTARSIZ`). Eski `ARAC-ODAK-TAVAN-INDIR-1001.py` artık yalnız sayıyı yazdığı için bu yüzden kapalıya düşer, yani o araç emekliye ayrılmalı.

**`--tavan-yaz` iki kilitle:**
- Kapıda ✗ varken REDDEDER: tavan yalnız İNER. Sınandı: tavandan bir kimlik silinince çıkış 1 ve "REDDEDİLDİ".
- `evren` GENİŞLETİLMEZ (1001 notundaki kusur).
- Temizken idempotent: yeniden yazınca dosya `cmp` ile birebir aynı çıktı.

**Dosya boyutu 242 KB:** evren özeti 80 KB, geri kalanı kimlik listeleri. Liste öğeleri satır başına tek nesne yazılır, diff okunur kalır.

**Evren özeti niçin var:** madde bozulup aynı anda YENİ dosyaya taşınırsa YENİ KAPSAM sayılmasın diye (E7). 8 hex çakışması "vardı" yönüne düşer, yani kapı öter (kapalıya düşer).

## 2. ② `bilinen_kusur` anahtarından DOSYA çıktı
- Anahtar artık `(kimlik, alan, değer)`.
- E4 (kusurlu madde başka dosyaya taşındı) artık ötmüyor; bunun yerine "TAŞINDI" bilgisi basılıyor.
- E9 (beyan silindi) hâlâ ötüyor.

## 3. ③ "→yabancı" dosya adından değil SEKME dökümünden — ve bir düzeltme
Ölçerken bir şey çıktı: **eski metrik yanlış davranışı ölçüyordu.**
- `olaylar*` dışındaki her madde YALNIZ künye sekmesinde (`maddeAc`) açılır (app.js 7055: ana liste yalnız `OLAYLAR*` dizileridir).
- Bu maddeler `haritayiOlayaGotur`a yalnız `yer_id` çözülürse gider (app.js 15154).
- ⇒ `kapsam_genis` + odaksız yabancı madde **Osmanlı kutusuna UÇMAZ**. Sekmede gövde / kutu / tâbi kutu / SESSİZ zincirine girer (`odak_cozum.js` ⑥b, KIRIM-ODAK-A).
- Eski satır "426 — kamera OSMANLI kutusuna uçar" diyordu; o maddeler için ölçülen davranış bu değildi.

Yeni kapı **SEKME SESSİZ** (madde × künye, bugün 97) çiftlerini kimlik listesiyle bloke eder. 426 liste olarak durur, ama **göç bekçisi** olarak:
- Yabancı BEYANLI bir madde `olaylar*`a taşınırsa sekme dökümünden çıkar ve iyileşme gibi görünür.
- Oysa artık ana listede açılır ve GERÇEKTEN Osmanlı kutusuna uçar.
- ⇒ ✗ **ÇEKİRDEĞE GÖÇ**. KORLUK'un E3a/E3e kaçış yolu buydu.
- `odak_olc.py` tablo satırı da düzeltildi: "BEYANLI→yabancı 426 — DOSYA ADINA göre … kamera kusurunun ölçüsü SEKME SESSİZ: 97".

## 4. Sınav — `denetim/ODAK-KAPI-KIMLIK-SINAV-1006.py`: **14/14**, iki yönde
- Hüküm yalnız `ihlal` bayrağından okunmaz.
  - Ötmesi gereken vakada beklenen ✗ satırı ADIYLA aranır.
  - Ötmemesi gereken vakada hiç ✗ olmamalı.
- Sebep ölçüldü: eski sınavın geçici kökü `data/devlet_harita_ust.js`i kopyalamıyordu. Yeni kapı orada doğru biçimde "ÖLÇÜLEMEDİ" dedi ve eski sınavın üç "ötmeli" vakası **yanlış sebeple** geçti.

| vaka | beklenen | yeni kapı | eski kapı (KORLUK, a1182e75) |
|---|---|---|---|
| ⓿ taban | ötmez | ✓ ötmedi | ötmedi |
| E1a dosya içi KONUMLU→ODAKSIZ | öter | ✓ ODAKSIZ GERİLEDİ | öterdi |
| E1b KUTU çiftinin kutusu düştü → SESSİZ | öter | ✓ SEKME SESSİZ GERİLEDİ | ölçmezdi |
| E3b tavandaki ODAKSIZ yeni dosyaya | ötmez | ✓ ötmedi + ⓘ TAŞINDI | ötmezdi ama sahte "İYİLEŞME" basardı |
| **E3c 1'e 1 maske (E1a + E3b)** | **öter** | ✓ **ODAKSIZ GERİLEDİ** | **ÖTMÜYORDU** |
| E3a yabancı BEYANLI → olaylar | öter | ✓ ÇEKİRDEĞE GÖÇ | ötmezdi, "İYİLEŞME" basardı |
| **E3e maske (E1b + SESSİZ madde olaylar'a)** | **öter** | ✓ SEKME SESSİZ GERİLEDİ + ÇEKİRDEĞE GÖÇ | **ÖTMÜYORDU** |
| **E4 beyanlı kusur yeni dosyaya** | **ötmez** | ✓ ötmedi + ⓘ TAŞINDI | **YANLIŞ ötüyordu** |
| E6a yeni madde, YENİ dosya, odaksız | ötmez | ✓ ⓘ YENİ KAPSAM | ⓘ |
| E6b yeni madde, ESKİ dosya, odaksız | öter | ✓ ODAKSIZ GERİLEDİ | öterdi |
| E7 bozulup YENİ dosyaya taşınan madde | öter | ✓ ODAKSIZ GERİLEDİ (evren özeti) | ötmezdi (YENİ KAPSAM) |
| E8 tavan sayısı elle −1 | öter | ✓ tavan TUTARSIZ | — |
| E9 bilinen_kusur silindi | öter | ✓ YENİ ÇÖZÜLMEYEN ODAK ATFI | öterdi |
| ⓾ geri alındı | ötmez | ✓ ötmedi | — |

**Eski `denetim/ODAK-KAPI-SINAV.py`: 5/5.**
- Kilidim DIŞINDA tek değişiklik: geçici köke `devlet_harita_ust.js` kopyalanıyor (+3 satır). Zorunluydu; onaya sunuyorum.
- ⚠️ Onun ① vakası ("ODAKSIZ tavanı 1 düşük") artık gerilemeyi değil **sayı/liste tutarsızlığını** sınıyor. Doğru ötüyor ama sebebi değişti; yeni sınavın E1a/E6b'si gerilemeyi zaten sınıyor.

**Geriye uyum:**
- `odak_olc.olc()` / `ozetle()` dönüşleri aynı; yalnız ALAN eklendi: `k`, `beyanli`, `sekme_kutu`, `k8`.
- Bunları kullanan 25 `denetim/` aracı etkilenmez.
- `denetle_yayin.py` değişmedi; yalnız `kapi_olcumu()` satırlarını basıyor.

## 5. ④ BAĞLAMA kapısı — madde başına, nesne kimliğiyle
`denetim/ARAC-KRONO-BAGLAMA-0929-KAPI.js/.py`. Dosya hangi kovada, app.js'in KENDİ `KRONOLOJI_COK_YOLU` listesinden okunur (kesitte `var`). Tahmin edilmez.

⚠️ İlk denemede "BAĞLI = künyenin dizisi === dosya" yazdım; yalnız **2/41** dosya bağlı çıktı. EZİLDİ zincirinden beri bindirici künye dizisini yeniden kuruyor. Ölçünce düzelttim.

| (0b3d475f = 47290f11 verisi) | eski kapı | yeni kapı |
|---|---|---|
| BAĞLI | 33 dosya · 3.424 madde | **26 dosya · 2.482/2.482 indi** |
| YÖNLENDİRİLDİ | — | **15 dosya · 1.680/2.084 indi · 404 İNMEDİ** (dosya dosya, ilk 3'ü adıyla; `--ayrinti` hepsi) |
| EŞLENMEYEN | **8 dosya · 1.142 "ERİŞİLEMEZ"** | **0** |
| EZİLEN / temsil | 0 / 157 | 0 / 157 (davranış aynı) |
| çıkış | 1 | 1 (404 inmeyen madde var — gerçek) |

- 404 = KORLUK'un 225 + 179'u ✓. 1.680 = W37 ✓.
- Çıkış 1 artık doğru sebepten: "8 dosya erişilemez" değil, "404 madde inmiyor", adıyla.

Sınav `denetim/ARAC-KRONO-BAGLAMA-KAPI-SINAV-1006.py`: **5/5**. Yapay `KRONOLOJI_ZZ_*` dosyaları geçici dizinde, `--ekle` ile:

| vaka | yeni | eski |
|---|---|---|
| S1 ikisi taraflı | YÖNLENDİRİLDİ 2/2 | bağlı 2 |
| S2 **ilk TARAFSIZ**, ikinci taraflı | **YÖNLENDİRİLDİ 1/2** | **EŞLENMEYEN 2** ✗ |
| S3 ilk taraflı, **ikinci TARAFSIZ** | **YÖNLENDİRİLDİ 1/2, inmeyen 1** | **bağlı 2** ✗ (inmeyen görünmezdi) |
| S4 hiçbiri taraflı değil | EŞLENMEYEN | EŞLENMEYEN |
| çıkış | 1 | |

## 6. ⑤ Değişmez 7 — ÖNERİ (uygulanmadı; D7 bloğu `denetle.py`de)
**Ölçüldü (0b3d475f verisi, `degismez7()` gerçek çağrı, 8 sn):**
- **n7 733**, `BEKLENEN_ENKLAV_SORGU = 731`, kovalar: A-koridor 540 · B-bilinmiyor 183 · C-hakiki 10.
- **Hangi 2 kaydın yeni olduğu bugün okunamıyor**; kusur tam bu. Üyelik takası (bir ada kapanır, biri doğar) 731'i hiç oynatmaz.

Kimlik adayları (733 kayıt üzerinde):

| anahtar | tekil | tekrar eden |
|---|---|---|
| `yerlesim` | 414 | 177 |
| `yerlesim + sahip` | 701 | 30 |
| **`yerlesim + sahip + gun`** | **733** | **0** |
| `sahip + ada + gun` | 501 | 131 |

**Öneri:**
1. Kimlik `(yerlesim, sahip, gun)`.
2. `denetim/D7-TAVAN.json` liste olarak dondurulur. Bu `KAYNAK-TAVAN.json` emsali: dosya yoksa ÖLÇÜLEMEDİ.
3. Hüküm: yeni kimlik → adıyla basılır.
4. `KAMPANYA_DONDURMA` sürerken ihlal sayılmaz (Emre'nin hükmü korunur), ama "731'i aştı" yerine "şu 2 ada yeni" der.
5. ⚠️ `gun` adanın BAŞLADIĞI gündür; komşu veri değişince kayabilir ⇒ kimlik "çıktı + girdi" görünür. Bu bir sertlik; gürültü ölçülmeden önerinin bedeli bilinmiyor.

## 7. Bulunamadı / sınırlar
- Öngörü yazılmadı (yukarıda).
- Kimlik `b` metnine bağlı: başlık düzeltmesi "eski kimlik çıktı + yeni kimlik girdi" görünür ve evren dosyasındaysa öter. Kalıcı çözüm açık `id` alanı, şema kararı.
- YENİ KAPSAM: `--tavan-yaz` yeni kapsam kimliklerini `yeni_kapsam_kimlik` listesine alır. O zaman artık ⓘ satırında tek tek basılmazlar, sayıları basılır. Eskiden evren genişleyip tavana karışıyorlardı; şimdi ayrı ve adlı listede duruyorlar.
- `devlet_harita_ust.js` diskte yoksa kapı artık ÖLÇÜLEMEDİ ile öter. Doğru davranış, ama o dosya olmayan makinede yayın kapısı kapanır (dosya depoda izleniyor, `0b3d475f`te var).
- `denetle_yayin.py` tam koşturulmadı; yalnız onun çağırdığı `kapi_olcumu()` koşturuldu.

## 8. Dosyalar / git
- Diff'teki 8 dosya:
  - `arac/odak_cozum.js`
  - `arac/odak_olc.py`
  - `denetim/ODAK-TAVAN.json`
  - `denetim/ODAK-KAPI-SINAV.py` (+3, kilit DIŞI)
  - `denetim/ODAK-KAPI-KIMLIK-SINAV-1006.py` (yeni)
  - `denetim/ARAC-KRONO-BAGLAMA-0929-KAPI.js`
  - `denetim/ARAC-KRONO-BAGLAMA-0929-KAPI.py`
  - `denetim/ARAC-KRONO-BAGLAMA-KAPI-SINAV-1006.py` (yeni)
- Diff LF, CR 0, sha256 `66e99fa45e6c6da2…`.
- Tavan + kapı + sınav AYNI diff'te (`§3.4 ②`).
- Ağaçlar kaldırıldı. TEMP artığı 0. Motor tuzuna (4 dosya) dokunulmadı.
