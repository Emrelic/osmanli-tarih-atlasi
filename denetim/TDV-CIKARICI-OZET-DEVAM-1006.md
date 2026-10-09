# TDV-CIKARICI-OZET-DEVAM-1006: tüketiciler · 88'in ayrıştırması · alemdar:73

**Durum: BİTTİ (6 Ekim 2026).** Yalnız ölçüm ve diff. Veri dosyasına yazılmadı, commit yapılmadı.
**Ağaç:** `C:\atlas-p84-tdvozet2` = `origin/makine/umit` **3ec79a5f** (özet yaması uygulanmış). Teslim anında uç **ee23604f**; diff orada da temiz.
**Önceki rapor:** `TDV-CIKARICI-OZET-1006.md`.

---

## ① Tüketiciler — `tam()`'ı DOĞRUDAN çağıranlar (ad ile arandı, D267)

**Arama yöntemi:**
- `grep -rn -E "\b[a-z_]+\.tam\("` bütün `*.py`'de.
- `grep -rni "cikarici"` (yükleme yolu hangi adla verilirse verilsin).
- `m-content|article-part|article_info` (başka bir gövde çıkarıcısı aynı yapıyı okuyor mu).
- `data/` hariç, `arac/` + `denetim/` + kök tarandı.

| dosya:satır | işlev / alan | ne yapıyor | karar |
|---|---|---|---|
| `denetim/ARAC-ALINTI-264-1006.py:66` (`C.tam(h)`), `:79` (`C.tam(h2)["govde"]`) | `govde()` → `GOVDE`, `OZET` | Özeti **kendisi** okuyordu (`BeautifulSoup(...).select(".article_info")`, eski satır 70-71): `tam()`'ın yanında ikinci bir çıkarıcı | **GEÇİŞ**: `OZET[slug] = dict(C.alinti_metinleri(t)).get("OZET","")`. İkinci çıkarıcı silindi |
| `denetim/DEVLETLER-SLUG-IZ-1006-B-URET.py:57` (`cik.tam(h)["govde"]`), `:63`, `:65` (`q in g(slug)`) | `g()` + iki `assert` | 14 alıntıyı yalnız gövdede doğruluyordu | **GEÇİŞ**: `g()` → `alinti_metinleri` parçaları; `var(q, slug)` = herhangi bir parçada birebir |
| `denetim/ARAC-TDV-CIKARICI-OZET-OLC-1006.py:88,93` | `cik.tam` + `ozet` | ALINTI-TARAMA yeniden ölçümü | zaten özetli, dokunulmadı |
| `denetim/ARAC-TDV-CIKARICI-OZET-SINAV-1006.py:63` | `eski.tam` / `yeni.tam` + `alinti_metinleri` | iki yönlü sınav | zaten özetli, dokunulmadı |
| `denetim/ARAC-TDV-CIKARICI-1006.py` `olc()` / `kapsama()` / `sina()` | `m["govde"]` | **bölüm kapsaması** ölçer, alıntı değil | **bilinçli dokunulmadı**: özet bir bölüm değildir, kapsama sayısına girmemeli. `ara` komutu özete zaten bakıyor |

**Kapsam dışı — ad çakışması, tüketici DEĞİL:** `denetle.tam(...)`. Bu `arac/denetle.py`'nin **tarih tamamlayıcısıdır** (`"1526"` → gün). 17 çağrı var:
- `arac/denetle_eslesme.py:196`
- `arac/denetle_tutarlilik.py:174,187,203,217`
- `denetim/ARAC-CUKUROVA-GUN-0907.py:70,76`
- `ARAC-DEGISMEZ3-*-0907.py`
- `ARAC-KASA-*-1004.py`
- `ARAC-MANDA-IRAK-SINAV-0907.py`

TDV çıkarıcısıyla ilgisi yok; listede yalnız ada göre aramanın verdiği yanlış pozitif olarak duruyor.

**Repo DIŞI tüketiciler (diff'lenemez, adıyla):**
- W30'un ALINTI-TARAMA hattı: `…/be8f70bb-…/scratchpad/w30/cek.py:5,30` (`cik.tam`), `esle.py` (`govdeler.json`'dan `govde`), `ortak.py:5` (`cek.py`'yi exec eder).
  - Bu hat özeti **görmez**. ALINTI-TARAMA bir daha o betiklerle koşulursa 7 tırnak yine YOK çıkar.
  - Yeniden ölçüm için kullanılacak yol: `ARAC-TDV-CIKARICI-OZET-OLC-1006.py`.

**`tam()`'ı ÇAĞIRMAYAN TDV okuyucuları (kapsam dışı, sayıyla):** `islamansiklopedisi.org.tr` geçen **83** `.py` dosyası var, hepsi `denetim/`'de; `arac/`'ta 0. Bunlar kendi çıkarıcılarını taşıyor. `m-content|article-part|article_info` desenini kullanan yalnız 3 dosya var: yukarıdaki 264 aracı, çıkarıcı ve sınav. ⇒ Öteki 80 dosyanın özeti görüp görmediği **ölçülmedi**. Bütün sayfayı alan bir çıkarıcı özeti zaten içerir; `body_pad_article` / `Müellif` gibi kesen bir çıkarıcı içermez (W19/W22 tipi; `ARAC-TDV-CIKARICI-1006` başlık yorumundaki 7 eski alet).

### Diff: `ARAC-TDV-CIKARICI-OZET-TUKETICI-1006.diff` (UYGULANMADI)
- 2 dosya, +16 / −13.
- `git apply --check` hem `--cached` hem çalışma ağacında **temiz** (`C:\atlas-umit`, uç ee23604f). LF, CR 0. `py_compile` ✓.
- **Davranış sınavı** (aynı ağaç, aynı önbellek, ağa çıkış 0):
  - `ARAC-ALINTI-264-1006.py` eski ve yeni koşuldu; çıktı TSV **bayt bayt aynı** (264 satır: birebir TAM 8 / YOK 256 · gövde TAM 264).
  - `DEVLETLER-SLUG-IZ-1006-B-URET.py`'nin 14 alıntı denetimi eski ve yeni sürümde **14/14 = 14/14, fark 0**.
  - Üretici bütünüyle koşturulmadı: `devletler.js` P12-SLUGB ile zaten değişti, eski `kaynak:` dizgileri yok. Davranış sınavı yalnız alıntı kapısını kapsıyor.
- ⚠️ 264 aracında **gönderme sayfası** için yalnız sayfanın kendi özeti alınıyor, hedef maddelerin özeti alınmıyor (eski davranış korundu, çıktı aynı kalsın diye). OLC aracı hedef özetlerini de alıyor. 264'ün evreninde gönderme sayfası 0 olduğu için fark sonuç doğurmuyor (`govde: TAM 264`).

## ② 88'in ayrıştırması: 852 → 764

**Ölçümün evreni W30'un DONMUŞ tırnaklarıdır** (`sonuc3.json`, ağaç `a59e4b7b`). Yeniden ölçüm yalnız TDV tarafını değiştirdi (özet eklendi); veri tarafı aynı kaldı. ⇒ Bu 88'e **tırnak kaldıran hiçbir commit giremez.**

| bileşen | satır | tekil | anlamı |
|---|---|---|---|
| **özet kurtardı → BİREBİR** | **15** | **7** | ölçüm doğrulaştı: tırnak TDV'de birebir, özette (balkan-savasi, baltalimani, begteginliler, bosna-eyaleti, kilitbahir-kalesi, tahiriler--yemen, veday) |
| **özet sayesinde → YAKIN** (birebir DEĞİL) | **73** | **1** | `ilhanlilar` "ILHANLILAR - Iran'da kurulan bir Mogol devleti (1256-1353)". Benzerlik 0,455 → 0,887; tırnak hâlâ yanlış (başlık eklenmiş, ASCII'ye çevrilmiş) |
| N: ALINTI-264-A'nın (ac4a8242) kaldırdıkları | **0** | 0 | evren donmuş, giremez |
| M: başka | **0** | 0 | — |

⚠️ **§6.2'deki "852 → 764" ifadesi yanıltıcıydı.** Bu 88'in yalnız **15**'i "BİREBİR oldu". 73'ü YOK'tan YAKIN'a kaydı, yani tırnak yine birebir değil. Güçlü atıflı tırnak içinde **"birebir değil" (YOK + YAKIN)** oranı:
- önce 852 + 266 = 1.118
- sonra 764 + 339 = 1.103
- ⇒ **gerçek düzelme yalnız 15 satır** (%19,0 → %18,7).

Doğru ifade şu: *"özet 15 satırı (7 tekil) YOK'tan BİREBİR'e aldı; 73 satırı (1 tekil) YOK'tan YAKIN'a aldı. Birebir olmayan tırnak 1.118 → 1.103."*

### Kalan 764'ün BUGÜNKÜ durumu (ayrı soru: tırnak duruyor mu)
`git show` ile dört durum karşılaştırıldı: W30 `a59e4b7b` → A öncesi `ac4a8242~1` → A sonrası `ac4a8242` → bugün `3ec79a5f`. Ölçüt: dosyada tırnak karakteri (`" \" “ ” ‘ ' «`) + alıntı.

| durum | satır | not |
|---|---|---|
| **N — ALINTI-264-A (ac4a8242) ile tırnak kalktı** | **205** | hepsi kaynak dosyada, metin duruyor (tırnaksız) |
| **M — A'dan ÖNCE başka commit'lerle kalktı** | **96** | metin bugün yok ya da yeniden yazılmış |
| bugün hâlâ tırnaklı | **463** | aşağıda |

M'nin commit'lere dağılımı (`git log -S`, merge-base a59e4b7b..ac4a8242~1):
- `15737651` W30-ALINTI-DUZELT UMIT kısmı **75**
- `61e30ca0` W30-ALINTI-DUZELT KOORD kısmı **10**
- `121c1829` paketle yenile **5**
- `6aadbab2` KRONO-SAHTE-ALINTI **2**
- `2568da68` KRONO-MUKERRER-SIL-1006b **2**
- `c5f2171a` KRONO-TARIH **1**
- bulunamadı **1**

Bugün hâlâ tırnaklı 463 satırın dağılımı:
- **kaynak dosyada 122 satır (56 tekil)**: gerçek kalan borç.
- `paket_*`'te 341 satır:
  - **274**'ünün kaynak ikizi artık tırnaksız ya da yok ⇒ paketle/koşuyla düşer (öngörü, koşturulmadı).
  - **67**'sinin kaynak ikizi hâlâ tırnaklı.

Ayrıca: 15 BİREBİR ve 73 YAKIN bugün de tırnaklı. ilhanlilar'ın tırnağı ALINTI-264 **KOORD** diff'inde duruyor (yerlesimler; uygulanmadı).

⇒ **§6.2 için önerilen rakam seti:**
- güçlü atıflı YOK 852 →
  - (özet) 15 BİREBİR + 73 YAKIN →
  - **764**, bunun bugünkü durumu: 205 A ile kalktı + 96 daha önce kalktı + 463 hâlâ tırnaklı.
- 463'ün kaynak düzeyindeki karşılığı 122 satır / 56 tekil.

## ③ `ekokuma_alemdar.js:73` — DİFF YAZILMADI: veri zaten doğru, hata önceki raporumdaydı

Satırın kendisi (bugünkü ağaç, satır 73, `metin:` alanı):
> ③ Pazvandoğlu Osman — TDV'nin kendi tanımıyla \"Vidin ve Kuzey Bulgaristan bölgesinin ÂSİ âyanı\" (ö. 1807; ailesi Tuzla-Bosna kökenli; TDV \`pazvandoglu-osman\`).

- Tırnak **zaten `pazvandoglu-osman`'a atfedilmiş**, hemen arkasındaki parantezde. Kaynak alanında da `pazvandoglu-osman` var.
- `alemdar-mustafa-pasa` atfı **W30 ayrıştırıcısının** sezgisinden geliyordu: "tırnaktan ÖNCEKİ en yakın slug" kuralı bir önceki maddenin (② Alemdar) parantezindeki `` `alemdar-mustafa-pasa` ``'yı seçti. W30 bu satırı **ZAYIF atıf** kovasına koymuştu, doğru olarak.
- Aynı satırdaki *"Yanya valisi"* de aynı durumda: metin *"TDV'nin üst künyesinde \"Yanya valisi\" … TDV `tepedelenli-ali-pasa`"*. Yani o da doğru atıflı. Özet ölçümünün eklediği `tepedelenli-ali-pasa` adayı bunu doğruluyor.
- ⇒ **Önceki raporumun §3.1'i ve §6 madde 4'ü YANLIŞTI** ("yanlış slug", "slug düzeltmesi") ve geri çekiliyor. Bu satırda veri doğru. Özet ölçümü atlas hatası bulmadı; W30'un atıf sezgisinin bir artığını gösterdi.
- Koordinatörün istediği diff "yalnız atıf değişsin" diyordu. Değişecek atıf yok. Kaynak notuna *"özet alanından doğrulandı"* eklemek mümkün, ama tek başına bir veri değişikliği olur ve sebebi artık yok. **Yazmadım.** İstenirse tek satırlık diff olarak verilir.

## Bulamadıklarım ve ölçemediklerim
- 80 bağımsız TDV okuyucusunun özeti görüp görmediği ölçülmedi.
- `paket_*`'in koşudan sonra 274 satırı gerçekten düşüreceği **öngörüdür**: koşturulmadı, paketle çalıştırılmadı.
- Tırnak durumu dizgi aramasıyla ölçüldü (aday üretici). 205 "A ile kalktı" satırının hepsinde metin bugün duruyor (ölçüldü); tek tek elle okunmadı.
