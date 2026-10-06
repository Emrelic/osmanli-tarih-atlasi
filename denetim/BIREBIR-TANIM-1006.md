# BIREBIR-TANIM-1006 — "tırnak kaynakta BİREBİR var mı" sorusuna tek tanım

**Durum: BİTTİ (6 Ekim 2026).** Yalnız araç değişikliği ve ölçüm yapıldı. Hiçbir veri dosyasına yazılmadı, commit yapılmadı.
Araç değişikliği diff olarak verildi ve **UYGULANMADI**.

**Ağaç:** `C:\atlas-p84-birebir`, ayrık worktree, `origin/makine/umit` **3ec79a5f**.
- Diff, bugünkü **3e158190** üzerinde de temiz uygulanıyor. İlgili dosyalar arada değişmedi.
- Motor tuzu dosyalarına dokunulmadı.

**Görevi açan bulgu:** `TDV-CIKARICI-OZET-1006.md` §2 ve §6.6 (#121 millet).
**Koordinatör hükmü:** kelime sınırlı arama. Yakın eşleşmeler sessizce elenmez, adı olan `YAKIN-EK` kovasına düşer (D225).

Dosyalar:
- `BIREBIR-TANIM-1006.diff`: dört betik (+166 / −130). Satır sonu LF, CR 0.
- `ARAC-BIREBIR-TANIM-SINAV-1006.py`: iki yönlü sınav. Salt okur, ağa çıkmaz.
- `BIREBIR-TANIM-1006.tsv`: hükmü değişen **60 tekil / 108 satır**, adıyla. Sütunlar: eski · yeni · kenar · slug · konumlar · tırnak.
- `BIREBIR-TANIM-1006-ONGORU.md`: öngörü mührü (17:29). Kod yazılmadan ve ölçülmeden önce yazıldı.

---

## 0. Öngörü ve ölçüm

| kalem | öngörü | ölçüm | hüküm |
|---|---|---|---|
| #121 millet | iki araçta da YAKIN-EK | iki araçta da **YAKIN-EK** (SAG); sayfadan doğrudan ölçüm de YAKIN-EK | tuttu |
| 264 evreni | 7 BİREBİR · 1 YAKIN-EK · 256 YOK (yalnız #121 değişir, bant 0–2) | **7 · 1 · 256**, ek değişim **0** | tuttu |
| W30: BİREBİR → başka | 0–5 | **8 satır / 6 tekil**, hepsi güçlü atıflı | sayı biraz kaçtı; mekanizma (SIRA şartı) tuttu |
| W30: YAKIN → YAKIN-EK | ~25 (10–50) | **94 satır / 50 tekil** (74 cümle + 20 kısa) | sayı kaçtı (bandın 2 katı); mekanizma tuttu (§3.2) |
| W30: YOK → YAKIN-EK | 0–3 | **6 satır / 4 tekil** | biraz kaçtı |
| YAKIN-EK kenar SOL / IKI | 0–2 | **0 / 0**; 54 tekilin 54'ü SAG | tuttu |
| güçlü atıflı YOK (taban 5.888) | değişmez (±2) | **764 → 760** (%12,98 → %12,91) | kaçtı: −4 |
| YAKIN-EK'in BİREBİR'e karışması | 0 | **0** (bağımsız kâhin, 198 satır) | tuttu |
| tokoli-imre | YOK; özet kısmı ayrı ölçülürse BİREBİR | **YOK**; `(ö. 1705) …` parçası BİREBİR/ÖZET | tuttu |

**Değerlendirme:**
- Sayıların kaçtığı tek yer YAKIN-EK'in büyüklüğü. Ek kesmenin ne kadar yaygın olduğunu küçük gördüm.
  - W30 bu satırları benzerlik ≥0,85 ile YAKIN'a koymuştu. Kova YAKIN'dan YAKIN-EK'e değişti; "birebir değil" hükmü değişmedi.
- Mekanizmaların hepsi tuttu.

## 1. Tanım (`ARAC-TDV-CIKARICI-1006.birebir`, tek yer)

```
birebir(alinti, metinler) → {kova, yer, kenar}
  metinler     : [(ad, metin)], ör. alinti_metinleri(m) = [("OZET",…), ("GOVDE",…)]
  normalleştir : ARAC-NORMAL-0903.norm (Türkçe İ/ı tuzağı, §4) + alfasayısal dışı → tek boşluk, iki uç dolgulu
  parça        : ` · ` `...` `…` `[...]` `[…]` ile bölünür (W30'un bölücüsü)
  BIREBIR      : bütün parçalar kelime SINIRLI, SIRAYLA, AYNI metinde
  YAKIN-EK     : aynı şart, ama bir parçanın kenarı kelime ortasına düşüyor. BİREBİR DEĞİLDİR.
                 kenar = parça parça SAG / SOL / IKI
  YOK · BOS    : sırayla yok · alıntıda harf/rakam yok
```

Benim kararlarım (hüküm dışı, gerekçeli):
1. **Parçalar sırayla aranır.** W30 sırayı aramıyordu, ALINTI-264 arıyordu.
   - Sırası bozuk bir `…` alıntısı TDV pasajını kaynakta olmayan bir sırayla diziyor; bu birebir değildir.
   - Bedeli: 6 tekil (§3.1).
2. **Parçalar aynı metinde aranır.** Bu `alinti_metinleri()`'nin "özet ile gövde birleştirilmez" ilkesinin parça düzeyindeki karşılığı.
   - Bedeli: **0**. Hiçbir satır karışık özet+gövde eşleşmesiyle BİREBİR değildi.
3. **Benzerlik (YAKIN ≥0,85) tanımın parçası DEĞİLDİR.**
   - W30'un YAKIN/YOK ayrımı OZET-OLC'de kaldı.
   - ALINTI-264 benzerlik ölçmüyor, YOK diyor; davranışı değişmedi.
4. ALINTI-264'ün eski TAM/NORM ikilisi kalktı. TAM adımı noktalamayı koruyor ama kelime sınırına bakmıyordu (#121 buradan geçiyordu). Sınavda NORM 0 kez kullanılmıştı.

## 2. Araç geçişi (`BIREBIR-TANIM-1006.diff`, UYGULANMADI)

| dosya | değişiklik |
|---|---|
| `ARAC-TDV-CIKARICI-1006.py` | +`birebir`, `birebir_norm` (lru önbellekli), `birebir_parcalari`, `BIREBIR_BOLUCU`. `tam()` ve `alinti_metinleri()`'ne dokunulmadı |
| `ARAC-ALINTI-264-1006.py` | Yerel `birebir()` ve `parcalar()` silindi; `C.birebir(al, C.alinti_metinleri(…))` çağrılıyor. Yeni sütun `birebir_kenar`. Kova sözlüğü TAM/NORM → BIREBIR/YAKIN-EK |
| `ARAC-TDV-CIKARICI-OZET-OLC-1006.py` (W30 `esle.py`'nin depodaki hâli) | `N`/`parcalar` kopyası silindi (`cik.birebir_norm`/`birebir_parcalari`). BİREBİR/YAKIN-EK hükmü ve parça puanı `cik.birebir`'den. KONTROL yeniden kuruldu (aşağıda). Yeni sütunlar `sebep` (TANIM/OZET) ve `kenar` |
| `ARAC-TDV-CIKARICI-OZET-SINAV-1006.py` | **Üçüncü kopya**: kendi `N_yap`/`var_mi` eşleştiricisi vardı (sınırsız kipi `rstrip`). Silindi, `yeni.birebir` çağrılıyor. Sözlük değişikliği için iki sürümün tablosu da okunuyor |

**KONTROL'ün yeni hâli (OZET-OLC):**
- Özetsiz yeniden üretim W30'dan yalnız tanımdan gelen farklarla ayrılabilir: →YAKIN-EK ya da BİREBİR→sırasız.
- Bu farklar `tanim_farki` alanına adıyla yazılır. Başka her fark çıkış 2 verir.
- **Bu kontrol bir kusurumu yakaladı.** İlk koşuda iki açıklanamayan fark çıktı: `yanya` YAKIN → YOK, devletler.js:8302 ve paket_05:8321.
  - Sebep: benzerlik hesabında kendi başına birebir tutan parçaya 1,0 vermeyi düşürmüştüm. W30 bunu yapıyordu.
  - Düzeltildi; parça sorusu da tek tanıma soruluyor. Sonra **açıklanamayan fark 0**.

**Uygulama sırası:** b407f878'deki `ARAC-TDV-CIKARICI-OZET-TUKETICI-1006.diff` (UYGULANMADI) aynı betiğe, ALINTI-264'e, dokunuyor.
- Benim diff'im onun hunk'ına (özet satırları) bilerek dokunmuyor.
- Geçici index üzerinde iki sırada da sınandı: **TÜKETİCİ→BENİM temiz · BENİM→TÜKETİCİ temiz · yalnız BENİM temiz** (3e158190 çalışma ağacında ve `--cached`).

**Kalan kopyalar (geçirilmedi, adıyla):**
- `denetim/DEVLETLER-SLUG-IZ-1006-B-URET.py`: üreteç assert'i ham `q in t` kullanıyor.
  - Normalleştirme yok, kelime sınırı yok. TÜKETİCİ diff'i bunu özet+gövdeye genişletiyor, tanımı değiştirmiyor.
  - Bu farklı bir soru soruyor: "kesilen dizgi bayt bayt aynı mı". Bu yüzden ona dokunmadım (§5 ③).
- W30'un scratchpad'teki `esle.py`/`rapor.py`: depoda değil, depodaki hâli OZET-OLC.
- `TDV-CIKARICI-OZET-DEVAM-1006.md` §40'a göre TDV okuyan **83** `.py` daha var ve kendi çıkarıcılarını taşıyor. Birebir eşleştiricileri **ölçülmedi**.

## 3. Etki: hükmü değişenler adıyla (`BIREBIR-TANIM-1006.tsv`)

Evren: W30 korpusu (ölçülebilen 7.844 satır, 9.402 atıf) ve 264.
- **Eski** = bugünkü araçlar: 264 eski, OZET-OLC eski. İkisi aynı önbellekte yeniden koşturuldu.
  - Eski 264 çıktısı tracked `ALINTI-264-1006-OLCUM.tsv` ile 264/264 aynı çıktı.
  - Eski OZET-OLC, TDV-CIKARICI-OZET'in sayılarını birebir verdi (107 cümle + 6 kısa, 852 → 764).
- **Yeni** = diff'li araçlar.

**Toplam: 108 satır / 60 tekil.** Cümle 86 · kısa 22.

| eski → yeni | satır | tekil | güçlü atıflı cümle |
|---|---|---|---|
| YAKIN → **YAKIN-EK** | 94 | 50 | 52 |
| YOK-GÜÇLÜ → **YAKIN-EK** | 4 | 2: millet (kronoloji_cok_ermeni:49 · paket_30:4693), timisvar (paket_13:507 · yerlesimler:502) | 4 |
| YOK-BEYANLI-ÖZET → **YAKIN-EK** | 2 | 2 (atina, iznik; kısa) | 0 |
| BİREBİR → **YAKIN** (sıra) | 8 | 6 | 8 |

**Güçlü atıflı ölçülebilen cümle (5.888):**

| | BİREBİR | YAKIN | YAKIN-EK | YOK-GÜÇLÜ | kayma | beyanlı özet |
|---|---|---|---|---|---|---|
| eski | 4.702 | 339 | 0 | 764 (%12,98) | 5 | 78 |
| yeni | 4.694 | 295 | 56 | **760 (%12,91)** | 5 | 78 |

**264 evreni:** hüküm değişen tek satır **#121 millet** (TAM/GÖVDE → YAKIN-EK/GÖVDE SAG). 7 ✓V satırında yalnız kova adı değişti (TAM/ÖZET → BIREBIR/ÖZET). 256 YOK aynı kaldı.
- ⚠️ ALINTI-264'ün #121 elle hükmü (✓V, "tırnak kalır") yeni ölçümle **çelişiyor**. Bu hüküm değişmedi, çünkü hüküm dosyası benim değil.
- YAKIN-EK birebir değildir (`OLCUM-KITA-SARTLARI §5`). Öneri §5 ①.

### 3.1 Sıra şartıyla BİREBİR'den düşen 6 tekil (parça konumları normalleştirilmiş gövdede ölçüldü)

| slug | konum | parça sırası (gövdedeki konum) |
|---|---|---|
| birecik | gecitler.js:240 | 5225 → 3863 → 6643 |
| bosna-hersek | kronoloji_balkan.js:673 · paket_12.js:3138 | "I. Tvrtko" 5867/6226 → "ayrı bir krallık" 5825 |
| tunus | devletler.js:7829 · paket_05.js:7848 | 50464 → 50603 → **50527** → 50651 |
| van | kaynakli_halka_tekil.js:16 | 26103 → 26260 → **25340** |
| van | kaynakli_halka_tekil.js:23 | 26260 → **25340** |
| yarubiler | yer_yama.js:456 | 4293 → **4250** → 4319 |

Hepsi gerçek: tırnak, TDV pasajlarını kaynaktaki sırasından farklı diziyor. Migrate edilmiş OZET-SINAV aynı 8 satırı "tanım dışı" diye bağımsız olarak buldu.

### 3.2 YAKIN-EK'in mekanizması (54 tekil, 54'ü SAG kenar)

Hepsi aynı: yazar tırnağı Türkçe ekin (hâl, iyelik ya da ek-fiil) önünde kesmiş.
- `zafer`+den
- `etmesi`+ne
- `kurultay`+da (kirim, 10 satır)
- `yarısı`+nda
- `fethi`+nden
- `katolikoslukları`+na
- `beylerbeyiliği`+nin
- `imzalanan`+dır

TSV'de satır satır. Ayrı bakılmaya değer iki tanesi:
- `hollanda` *"tekrar kesil"* (+di): fiil kökü ortasında kesilmiş.
- `rusya` *"…bir GEREĞİ."* (+ydi)

## 4. İki yönlü sınav (`ARAC-BIREBIR-TANIM-SINAV-1006.py`) — GEÇTİ (çıkış 0)

```
① SENTETİK   10/10  BİREBİR ×3 · YAKIN-EK SAG/SOL · sırasız → YOK · fazla harf → YOK · BOS ·
                    özet+gövdeye bölünmüş → YOK · özette → BIREBIR/OZET
② KÖR        eski 264 TAM/GOVDE · eski W30 YOK → eski tanımlar ayrışıyordu ✓
③ #121       sayfa = 264 aracı = W30 aracı = YAKIN-EK ✓
④ KARIŞMAZ   198 satır bağımsız kâhine (\b'li regex) soruldu, uyuşmayan 0 · kenarlı hiçbir satır BİREBİR değil
⑤ AYNI DİYEN 264 satır · W30'da eşleşen 264 · eski iki araç AYNI 263 · bunlardan değişen 0 ·
             ayrışan tek satır #121 artık iki araçta aynı · W30 yeniden üretim açıklanamayan fark 0
```

- **Sınav ötüyor mu?** Tanımın iki bozuk kopyasıyla denendi:
  - kenarı da BİREBİR sayan sürüm: **3 HATA** (iki sentetik + #121);
  - sırayı aramayan sürüm: **1 HATA**.
- **Kendi sınavımın kusuru:** İlk koşu ÖLÇÜLEMEDİ (çıkış 2) verdi. Sebep: 264'ün `w30_konum`u bazı satırlarda `a:1 · b:2` taşıyordu, ben tek konum sanmıştım (19 satır). Düzeltildi.
- **Öteki sınavlar yeni tanımla:**
  - `ARAC-TDV-CIKARICI-OZET-SINAV-1006.py`: GEÇTİ (İLERİ 7/7 · GERİ #121 YAKIN-EK@GOVDE = YAKIN-EK@GOVDE · GERİ-TARAMA düşen 0, tanım dışı 8 · YAPI farkı 0).
  - `ARAC-TDV-CIKARICI-1006.py --sina`: GEÇTİ.

**Yeniden üretmek için** (salt okur; `<W30>` = `…/be8f70bb-…/scratchpad/w30`; `<onb>` = onun `tdv-ham`'ının kopyası; araç önbellekte olmayanı yazabilir):

```
py denetim/ARAC-ALINTI-264-1006.py --ro-onbellek <onb> --onbellek <yaz> --cikti 264-yeni.tsv      (eski: diff'siz ağaçta)
py denetim/ARAC-TDV-CIKARICI-OZET-OLC-1006.py --w30 <W30> --onbellek <onb> --cikti olc-yeni        (eski: diff'siz ağaçta)
py denetim/ARAC-BIREBIR-TANIM-SINAV-1006.py --onbellek <onb> --w30 <W30> --t264-eski … --t264-yeni … --olc-eski olc-eski.json --olc-yeni olc-yeni.json
```

## 5. tokoli-imre (`devletler.js:7674` · `paket_05.js:7693` bu ağaçta; W30'da 7693/7712)

Kayıt kendisi *"madde başlığı polity'yi ADIYLA doğruluyor: «TÖKÖLİ, İmre (ö. 1705) Osmanlılar'a bağlı Orta Macar kralı ve Erdel prensi»"* diyor.

| ölçüm (TDV `tokoli-imre`, HTTP 200, önbellek 6 Ekim) | sonuç |
|---|---|
| başlık | `TÖKÖLİ, İmre` |
| özet | `(ö. 1705) Osmanlılar’a bağlı Orta Macar kralı ve Erdel prensi.` |
| tam tırnak, TEK TANIM (özet · gövde) | **YOK** (YAKIN-EK DEĞİL) |
| parça `TÖKÖLİ, İmre` | YOK. Gövdede bu sıra yok, başlıkta var |
| parça `(ö. 1705) … Erdel prensi` | **BİREBİR / ÖZET** |
| bilgi, tanım DIŞI: başlık + " " + özet birleşik metin | BİREBİR |

**Hüküm:** Tırnak, sayfanın İKİ AYRI öğesini (başlık ve özet) tek tırnakta birleştiriyor. Bu tanımda birebir değildir.
- W30'un YAKIN hükmü (0,906) benzerlikten geliyordu; tek tanım onu YAKIN-EK'e almıyor, çünkü fark kenar eki değil ön dizgi.
- Sahte alıntı değil: iki parça da TDV'de birebir duruyor.

## 6. Bulamadıklarım ve ölçemediklerim
- **ÖLÇÜLEMEDİ kovası (1.177 cümle) ölçülmedi.** Slug çözülemedi ve 302 sınıflarıdır; tanım bunları değiştirmez.
- **Önbellek 6 Ekim W30 önbelleği.** Hiçbir sayfa canlı çekilmedi; 264 ve OZET-OLC koşularında canlı istek 0. `--sina` kendi sayfalarını kopya önbellekte buldu.
- Kalan kopyalar (§2 son) ve 83 TDV okuyucusunun birebir tanımı **ölçülmedi**.
- `_sirali` açgözlüdür: her parça için en erken kelime sınırlı konumu alır. Sıralı varlık sorusu için bu doğrudur.
  - YAKIN-EK'in **hangi** kenarını raporladığı, çok tekrarlı parçalarda en iyi seçim olmayabilir. Kova hükmü bundan etkilenmez.
  - Sınavda bir örnek görülmedi; kâhin 198/198 uyuştu.

## 7. İstek
1. **Diff'in uygulanması:** `BIREBIR-TANIM-1006.diff`. TÜKETİCİ diff'inden önce ya da sonra, ikisi de temiz.
2. **#121 millet:** ALINTI-264 elle hükmü ✓V'den YAKIN-EK'e çevrilsin. Tırnak ya `…katolikosluklarına` diye kaynağın kelimesine uzatılsın ya da tırnak kalksın.
   - Öneri: kalksın. Uzatmak tırnağı gövdeye uydurmaktır, §5 bunu yasaklıyor.
3. **YAKIN-EK kovası (54 tekil, 100 satır):** aynı hüküm sınıfı, tırnak kalkar. Ayrı kalem olarak verilebilir; TSV hazır.
4. **Sıradan düşen 6 tekil (§3.1):** W30 bunları BİREBİR saydığı için hiçbir düzeltme listesinde değiller.
   - Tırnak kalkar ya da parçalar TDV sırasına çekilir (metin değişmez, yalnız sıra).
   - Öneri: ayrı küçük kalem.
5. **tokoli-imre (§5), seçenekler:**
   - **A (öneri):** başlık tırnağın dışına alınsın: `TÖKÖLİ, İmre «(ö. 1705) Osmanlılar'a bağlı Orta Macar kralı ve Erdel prensi»`. Harf eklenmez, yalnız tırnak işareti yer değiştirir. `devletler.js` UMIT'te, `paket_05.js` koordinatörde (üretilmiş).
   - **B:** `alinti_metinleri()`'ne BAŞLIK eklensin. Önermiyorum: öğeleri birleştirmek, özet ile gövdeyi ayrı tutma ilkesini bozar.
6. **`DEVLETLER-SLUG-IZ-1006-B-URET.py`:** tek tanıma geçirilsin mi?
   - Öneri: ham `q in t` assert'i kalsın (bayt düzeyinde daha sıkı), yanına `cik.birebir(q, …)["kova"] == "BIREBIR"` eklensin. Böylece kelime sınırı da sorulur.
   - Bu dosya bekleyen TÜKETİCİ diff'inde; sahibi karar versin.
7. TARAMA rakamları güncellenecekse güçlü atıflı YOK **760 / 5.888 (%12,91)**, YAKIN-EK **56**.
