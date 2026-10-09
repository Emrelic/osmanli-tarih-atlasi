# TDV-CIKARICI-OZET-1006: TDV madde özeti çıkarıcıya eklendi, ALINTI-TARAMA yeniden ölçüldü

**Durum: BİTTİ (6 Ekim 2026).** Bu iş bir araç düzeltmesi ve yeniden ölçümdür. Hiçbir veri dosyasına yazılmadı, commit yapılmadı. Araç değişikliği diff olarak verildi ve **UYGULANMADI**.
**Ağaç:** `C:\atlas-p84-tdvozet`, ayrık worktree, `origin/makine/umit` **7db335a2**. Diff bugünkü **bb48a85e** üzerinde de temiz uygulanıyor (aşağıda §1).
**Görevi açan bulgu:** `ALINTI-264-1006.md` §2.

Dosyalar:
- `ARAC-TDV-CIKARICI-1006-OZET.diff`: çıkarıcı yaması (+19 / −2 satır).
- `ARAC-TDV-CIKARICI-OZET-SINAV-1006.py`: iki yönlü sınav, salt okur.
- `ARAC-TDV-CIKARICI-OZET-OLC-1006.py`: ALINTI-TARAMA'nın yeniden ölçümü, salt okur, ağa çıkmaz.
- `TDV-CIKARICI-OZET-1006.tsv`: hükmü değişen **113 satır** (24 tekil tırnak). Her satırda eski kova, yeni kova, eşleşmenin yeri (ÖZET/GÖVDE), dosya:satır, eski/yeni benzerlik, eski/yeni kayma adayları, tırnak ve maddenin özeti var.

---

## 0. Öngörü (16:39'da mühürlendi, eşleştirmeden ÖNCE) ve ölçüm

Öngörülen mekanizma: Özet tek bir tanım cümlesidir. Ona uyan tırnaklar künye tanımı türündendir ve çoğu `devletler.js` ile ikizi `paket_05.js`'tedir. Kronoloji formülü özetten çıkmaz. Düzeltme yalnız ekleme yapar, bu yüzden geri yönde sapma 0 olmalıdır.

| kalem | öngörü | ölçüm |
|---|---|---|
| güçlü atıflı YOK → BİREBİR | ~25 satır (±15), ~12 tekil | **15 satır, 7 tekil** (ALINTI-264'ün yedisinin aynısı) |
| YAKIN → BİREBİR | ~5 | **0** |
| YOK → YAKIN | öngörülmedi | **75 satır, 2 tekil** (ilhanlilar ×73, tokoli-imre ×2) |
| zayıf atıf / beyanlı özet → BİREBİR | ~5 | **20 satır, 12 tekil** (cümle 10 tekil + kısa 2), beyanlı özet 0 |
| slug kayması | ~2 düşer, ~3 yeni | **1 düştü** (bahcesaray → BİREBİR), **1 yeni** (alemdar → pazvandoglu-osman), **1 adaya ek** |
| ÖLÇÜLEMEDİ | 0 değişim | **0** |
| toplam hüküm değişimi, cümle | ~35 (15–60) | **107 satır**, 20 tekil. Kısa parçalarda 6 satır daha |
| güçlü atıflı YOK oranı (taban 5.888) | %14,5 → ~%14,0 | **%14,47 → %12,98** (852 → 764) |
| GERİ YÖN (BİREBİR düşen) | 0 | **0** (5.923 / 5.923) |
| ALINTI-264 ✗D (21) özetle kurtulan | 0 | **0 / 21** |

**Değerlendirme:**
- Tekil düzeyde sayı tuttu: 7 güçlü + 12 zayıf tekil, öngörü 12 + 5'ti.
- Satır düzeyinde sayı kaçtı. Sebep **tek bir tekil**: `ILHANLILAR - Iran'da kurulan bir Mogol devleti (1256-1353)` 73 satırda kopyalanmış (paket_13 ×28, yerlesimler ×28, yer_yama_ok109_fetret ×15 …). Oranın %14,0 yerine %12,98'e düşmesinin 73/88'i bu satırlardır.
- Mekanizma **kısmen** tuttu. Künye tanımı doğru çıktı. Ancak yer yalnız `devletler`/`paket_05` değildi:
  - antlaşma tanımları `kronoloji_cok_senkron_0930.js`'te (5 tekil),
  - "başlık + özet"in ASCII kopyası `yerlesimler`/`paket_13`'te.
- "YAKIN → BİREBİR ~5" öngörüsü çürüdü: 0 çıktı.
- **Öngörülmeyen sınıf (YOK → YAKIN):** Başlık eklenmiş ya da ASCII'ye çevrilmiş özet artık YAKIN çıkıyor. Bunlar hâlâ birebir değil.

## 1. Araç değişikliği (`ARAC-TDV-CIKARICI-1006-OZET.diff`, UYGULANMADI)

- `tam()` dönüşüne **`ozet`** eklendi: `div.article_info` metni. Bu metin `article_header_container` içindedir, `m-content` dışında kalır.
  - **`govde`'ye KATILMADI.** Gövde ile özet ayrımı korunuyor.
  - `govde`, `kaynakca`, `bolumler`, `gonderme` ve `baslik` bayt bayt aynı kaldı (§2'de ölçüldü).
- Yeni işlev **`alinti_metinleri(m)`**: `[("OZET", …), ("GOVDE", …)]` döndürür.
  - İkisi **birleştirilmez**, böylece özetin sonu ile gövdenin başı arasında sahte eşleşme doğmaz.
  - Kaynakça burada yer almaz (§4 ⑧).
- `ara` komutu özette de arıyor; isabet `[ÖZET]` etiketiyle basılıyor.
- `--sina`'ya bir madde eklendi: kilitbahir-kalesi özeti ayrı alanda dönmeli ve gövdenin içinde OLMAMALI. Sınav GEÇTİ.
- `git apply --check`: `C:\atlas-umit` çalışma ağacında ve `--cached`'de **temiz**. Temel bb48a85e; çıkarıcı dosyası 7db335a2 ile aynı. Satır sonu LF, CR 0.
- ⚠️ **Tüketiciler kendiliğinden düzelmez.** `govde` alanını doğrudan arayan her betik özeti hâlâ görmez; `alinti_metinleri()`'ne geçmesi gerekir. Örnek: W30'un `esle.py`'si, `ARAC-ALINTI-264-1006.py`. Bu bilinçli bir seçim: gövdeye katmak "TDV gövdesi şunu diyor" hükmünü özetle karıştırırdı.

## 2. İki yönlü sınav (`ARAC-TDV-CIKARICI-OZET-SINAV-1006.py`)

ESKİ `tam()` git nesnesinden okunur (`7db335a2:denetim/ARAC-TDV-CIKARICI-1006.py`). Okunamazsa çıkış 2 (ÖLÇÜLEMEDİ) verilir.

```
İLERİ   7/7  #12 balkan-savasi · #13 baltalimani-muahedesi · #15 begteginliler · #21 bosna-eyaleti ·
             #85 kilitbahir-kalesi · #200 tahiriler--yemen · #241 veday : önce YOK → sonra OZET
GERİ-264     #121 millet: kelime sınırlı önce YOK → sonra YOK · sınırsız önce GOVDE → sonra GOVDE
GERİ-TARAMA  BİREBİR 5.931 satır · ölçülen 5.923 · gönderme sayfası 8 (atlandı) · düşen/yer değiştiren 0
YAPI         760 sayfa · alan farkı 0 · özet gövdeye karışan 0 · özeti boş sayfa 7
KÖR SINAV    eski tam()'da `ozet` yok ✓
SINAV: GEÇTİ (çıkış 0)
```

- **Sınav ötüyor mu?** İki bozuk çıkarıcıyla denendi (`--tarama-sinir 300`):
  - özeti gövdeye katan sürüm: 7 ileri ✗ (yer GOVDE), alan farkı 158, özet gövdeye karışan 157;
  - özeti hiç okumayan sürüm: kör madde ✗ + 7 ileri ✗, **8 HATA**.
- **#121 millet notu:** İlk koşuda sınav ✗ verdi. Sebep yama değil, eşleştiriciydi.
  - Tırnak *"…katolikoslukları"*, gövde *"…katolikosluklarına"*.
  - W30 kelime sınırıyla arıyor, ALINTI-264 sınırsız arıyordu.
  - Geri yön artık **aynı eşleştiriciyle** soruluyor ve iki kipte de önce = sonra.
  - Yan bulgu: W30'un korpus ölçümü (kelime sınırlı) bu tırnağı YOK sayıyor, ALINTI-264 ✓V sayıyor. İki aletin BİREBİR tanımı farklı.

## 3. Yeniden ölçüm (`ARAC-TDV-CIKARICI-OZET-OLC-1006.py`)

- **Gövdeler:** Yeniden çekilmedi. Kaynak W30'un 6 Ekim ham HTML önbelleği (`…/be8f70bb…/scratchpad/w30/tdv-ham`, 2.322 dosya). Önbelleğin bir kopyası salt okunur kullanıldı. 920 TAM sayfanın 920'sinde özet çıkarıldı, 14'ünde özet boş, önbellekte olmayan 0.
  - Canlı çekilen tek slug `ilbars-han`: yalnız çıkarıcının kendi `--sina`'sı için, kopya önbelleğe.
- **KONTROL:** Aynı kod `ozet` boşken koşturuldu ve W30 kovalarını **7.844 / 7.844 birebir** yeniden üretti (fark 0). Yeni çıkarıcının gövdesi W30'un `govdeler.json`'u ile 920 / 920 aynı. ⇒ Aşağıdaki değişimin tamamı özetten geliyor.
- **Yöntem:** W30'un `esle.py` + `rapor.py` mantığı birebir kullanıldı. Tek fark: her parça gövdede YA DA özette aranıyor.
  - Slug kaymasına yalnız **özet sayesinde** doğan aday eklendi.
  - İlk koşuda W30'un `baska_maddede[:5]` kesimi "değişim" gibi göründü (23 sahte satır). Düzeltildi ve yeniden koşuldu.

### 3.1 Hükmü değişen tekil tırnaklar (24), adıyla

| eski → yeni | slug | tırnak | konum(lar) |
|---|---|---|---|
| YOK-güçlü → **BİREBİR** (özet) | veday | Çad’da hüküm süren bir sultanlık (1635-1909) | devletler.js:2992 · paket_05.js:3011 |
| 〃 | bosna-eyaleti | önce sancak beyliği iken 1580'den itibaren beylerbeyilik | devletler.js:8262 · paket_05.js:8281 |
| 〃 | tahiriler--yemen | Yemen'de Resûlîler'den sonra 1454-1517 yılları arasında hüküm süren Sünnî bir hânedan | devletler.js:8344 · paket_05.js:8363 |
| 〃 | begteginliler | 1144-1232 yılları arasında merkezi Erbil olmak üzere … | devletler.js:9783 · paket_05.js:9802 |
| 〃 | balkan-savasi | (8 Ekim 1912 - 29 Eylül 1913) | kronoloji_balkan.js:341 · paket_12.js:2806 |
| 〃 | baltalimani-muahedesi | 16 Ağustos 1838 tarihinde yapılan Osmanlı-İngiliz ticaret muahedesi | kronoloji_cok_ingiltere.js:82 · paket_30.js:1328 |
| 〃 | kilitbahir-kalesi | İstanbul'un fethinden sonra yapılmış kale | paket_13.js:308 · yer_yama_tbmm_1920_0905.js:3125 · yerlesimler.js:303 |
| YOK-güçlü → **YAKIN** 0,455→0,887 | ilhanlilar | ILHANLILAR - Iran'da kurulan bir Mogol devleti (1256-1353) | 73 satır (TSV) |
| YOK-zayıf → **BİREBİR** (özet) | farukiler | Handeş'te (Hindistan) 1370-1601 yılları arasında hüküm süren… | devletler.js:7306 · 7308 · paket_05.js:7325 · 7327 |
| 〃 | gurlular | Horasan, Afganistan ve Kuzey Hindistan’da hüküm süren bir İslâm hânedanı (1000-1215). | devletler.js:8966 · paket_05.js:8985 |
| 〃 | karahanlilar | Türkistan’da hüküm süren Türk-İslâm hânedanı (840-1212). | devletler.js:8981 · paket_05.js:9000 |
| 〃 | surname | padişah çocuklarının doğum, sünnet ve düğün törenlerini anlatan | ekokuma_toplum.js:129 |
| 〃 | kucuk-kaynarca-antlasmasi | Osmanlı Devleti ile Rusya arasında 26 Temmuz 1774’te yapılan barış antlaşması | kronoloji_cok_senkron_0930.js:62 |
| 〃 | lozan-antlasmasi | 24 Temmuz 1923’te imzalanan antlaşma | kronoloji_cok_senkron_0930.js:68 |
| 〃 | berlin-antlasmasi | 13 Temmuz 1878’de imzalanan antlaşma | kronoloji_cok_senkron_0930.js:84 |
| 〃 | pasarofca-antlasmasi | Avusturya ve Venedik devletleriyle yaptığı barış antlaşması (21 Temmuz 1718) | kronoloji_cok_senkron_0930.js:94 |
| 〃 | edirne-antlasmasi | 14 Eylül 1829 tarihinde imzalanan antlaşma | kronoloji_cok_senkron_0930.js:367 |
| 〃 | kilitbahir-kalesi | Çanakkale Boğazı'nın Rumeli yakasında İstanbul'un fethinden sonra yapılmış kale. | olaylar_p0036.js:16 · paket_25.js:69 |
| 〃 (kısa) | alemdar-mustafa-pasa | Rusçuk âyanı, sadrazam. | ekokuma_alemdar.js:64 |
| 〃 (kısa) | sahib-ataogullari | beylik (1275-1341) | paket_13.js:1507 · yer_yama_tbmm_1920_0905.js:3677 · yerlesimler.js:1502 |
| YOK-zayıf → **YAKIN** 0,497→0,906 | tokoli-imre | TÖKÖLİ, İmre (ö. 1705) Osmanlılar'a bağlı Orta Macar kralı ve Erdel prensi | devletler.js:7693 · paket_05.js:7712 |
| YOK-zayıf → **SLUG KAYMASI** | alemdar-mustafa-pasa | Vidin ve Kuzey Bulgaristan bölgesinin ÂSİ âyanı | ekokuma_alemdar.js:73 → özet **`pazvandoglu-osman`**'da |
| SLUG KAYMASI → **BİREBİR** (kısa) | bahcesaray | Kırım Hanlığı'nın başşehri | yer_yama.js:220 (eski aday mengli-giray-turbesi düştü) |
| SLUG KAYMASI → aday eklendi (kısa) | pazvandoglu-osman | Yanya valisi | ekokuma_alemdar.js:73 (+`tepedelenli-ali-pasa` özeti) |

Notlar:
- **YAKIN'a geçenler birebir DEĞİLDİR.** İkisi de "BAŞLIK + özet" biçiminde: ilhanlilar'da ASCII'ye çevrilmiş ve başa `ILHANLILAR - ` eklenmiş, tokoli-imre'de `TÖKÖLİ, İmre` eklenmiş.
  - Tırnak hükmü değişmez (`OLCUM-KITA-SARTLARI §5`): tırnak ya özetin birebir hâline çekilmeli ya da kalkmalı. Yeniden yazmak dosya sahibinin kararıdır.
  - ALINTI-264 #77 zaten ✗A hükmündeydi; diff'i tırnağı kaldırıyor. Bu hüküm tutarlı.
- **alemdar → pazvandoglu-osman:** Tırnak birebir duruyor ama TDV'nin `pazvandoglu-osman` maddesinin özetinde. Sahte alıntı değil, yanlış slug.

### 3.2 Bekleyen diff'lerle çakışma: zararlı silme YOK
- W30'un `UMIT-W30-ALINTI-DUZELT-1006.tsv` dosyasında **DUZELTILDI-DIFF** (tırnağı silinmiş) olan 83 satırın **hiçbiri** bu 24 tekilin içinde değil. 24 tekilin 8'i W30'da `LISTEDE` duruyordu: 7 ✓V ve ilhanlilar.
- Kurtarılan tırnakların ayırt edici dizgileri `C:\atlas-umit\denetim\*.diff` içinde tarandı.
  - Geçtiği diff'ler: `DEVLETLER-SLUG-IZ-1006*` (farukiler), `UMIT-W49b/c-P3-3a*-ic-alan-isaret*` (karahanlilar, alemdar "Rusçuk âyanı"), `UMIT-W45-*` / `UMIT-W49b-P3-2-Y13` ("21 Temmuz 1718").
  - Bunlarda tırnak yalnız bağlam satırında ya da hem `-` hem `+` satırında aynen duruyor. **Silen diff yok.**
  - ⚠️ Ölçüm dizgi araması ile yapıldı (aday üretici). Satırlar tek tek okunmadı, yalnız bulunan üç dosyanın satırlarına bakıldı.

## 4. ALINTI-264'ün 21 desteksiz (✗D) kalemi, düzeltilmiş gövdeyle

Hepsi için özet çekildi ve tırnak parçaları özette arandı: **21'in 0'ı** özette geçiyor. Özetlerin hiçbiri tartışmalı olguyu taşımıyor; hepsi tek satırlık tanım. **Hükümlerin hepsi DEĞİŞMEDİ (✗D kalır).**

| no | slug | özet (TDV, birebir) | hüküm |
|---|---|---|---|
| **109** | meriniler | Mağrib’de hüküm süren bir Berberî hânedanı (1196-1465). | ✗D değişmedi. Özette 668/1270 ya da Abdülvâdî yok |
| **143** | piri-reis | (ö. 960/1553) Kitâb-ı Bahriyye müellifi, ünlü Osmanlı haritacı ve denizcisi. | ✗D değişmedi. Özette 956 tarihi yok; Muharrem/Rebîülevvel çelişkisi gövdede kalır |
| **193** | seydi-ali-reis | (ö. 970/1562) Denizcilik, astronomi ve coğrafyaya dair eserleriyle tanınan Osmanlı denizcisi. | ✗D değişmedi. "Her iki taraf altı gemi" özette de yok |
| 16 | berlin-antlasmasi | … 13 Temmuz 1878’de imzalanan antlaşma. | ✗D değişmedi. 2 parçanın 1'i gövdede, özette 0 (Ziştovi yarısı yine yok) |
| 122 · 196 | moriskolar · sirvansahlar | tanım cümleleri | ✗D değişmedi. Gövdede 2/4 ve 2/3 parça, özette 0 |
| kalan 15 | agakapisi · bulgaristan · burkina-faso · cad ×2 · kirim · madagaskar · meriniler ×2 · napoli · senegal · tilimsan · timur · uman ×2 | tanım cümleleri | ✗D değişmedi. Özette 0 parça |

ALINTI-264'ün **tek hükmü değişen satırı yok.** ✓V olan 7 tırnak korpus ölçümünde de artık BİREBİR. Böylece W30 ile ALINTI-264 ilk kez aynı şeyi söylüyor.

## 5. Bulamadıklarım ve ölçemediklerim
- **Gönderme sayfası 8 BİREBİR satırı** geri yön sınavında atlandı: W30'un gövdesi hedef maddelerden birleşiyor, eski ve yeni karşılaştırması o sayfada anlamsız. Bu satırlar yeniden ölçümde (§3) gönderme hedeflerinin özetleriyle ölçüldü ve değişen yok.
- **ÖLÇÜLEMEDİ kovası (1.177 cümle) ölçülmedi.** Kaynağı slug çözülememesi (1.130) ve 302 (47); özet bunları değiştirmez. "Bu kovada özetten kurtulacak tırnak yok" hükmü verilmedi.
- **Gövdeler 6 Ekim önbelleğidir, bugün yeniden çekilmedi.** Görev "önbellekte varsa yeniden çekme" diyordu. Özet o günkü HTML'den okundu.
- W30'un `ortak.py` sonrası eklediği 225 slug'ın 60 TAM'ı kayma aramasına alınmadı; W30'un esle anındaki küme (G0) kullanıldı. Böylece kontrol birebir kaldı.
- 14 TAM sayfanın özeti boş (`article_info` yok ya da boş). Bunlar adlarıyla listelenmedi; sınavın YAPI satırı 760 sayfada 7 saydı.

## 6. İstek
1. **Diff'in uygulanması:** `ARAC-TDV-CIKARICI-1006-OZET.diff`.
2. **ALINTI-TARAMA-1006 rakamlarının güncellenmesi** (rapor dosyası yeniden yazılmadı):
   - güçlü atıflı YOK **852 → 764** (%14,47 → %12,98), tekil **347 → 339**;
   - BİREBİR cümle 5.607 → 5.638 (+31);
   - YAKIN 388 → 463 (+75);
   - ZAYIF 251 → 232;
   - kayma 74 → 75.
   - Öneri: TARAMA §2'ye tek satırlık "özet düzeltmesi" notu ve bu raporun yolu eklensin.
3. **Tüketici betiklerin** (`esle.py` türü, `ARAC-ALINTI-264-1006.py`) `alinti_metinleri()`'ne geçirilmesi. Yoksa yama yalnız yeni ölçümlerde etkili olur.
4. **Slug düzeltmesi** (veri, diff dışı): `ekokuma_alemdar.js:73` *"Vidin ve Kuzey Bulgaristan bölgesinin ÂSİ âyanı"* → `pazvandoglu-osman`.
5. **İki YAKIN tırnak** (ilhanlilar ×73, tokoli-imre ×2) özetin birebir hâline çekilsin ya da tırnak kalksın. Öneri: ilhanlilar'da ALINTI-264 diff'i zaten kaldırıyor, ona bırakılsın; tokoli-imre ayrı kalem olsun.
6. **Eşleştirici farkı** (§2): W30 kelime sınırlı, ALINTI-264 sınırsız arıyor (#121 millet). Tek bir BİREBİR tanımı seçilmeli. Öneri: kelime sınırlı kalsın, son kelimenin eki "YAKIN-EK" diye ayrı kovaya düşsün.
