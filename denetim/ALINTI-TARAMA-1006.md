# ALINTI-TARAMA-1006 — TDV'ye atfedilmiş tırnaklı alıntıların korpus taraması (UMIT-W30)

Durum: **BİTTİ** (6 Ekim 2026). YALNIZ ÖLÇÜM: `data/`, `arac/`, `js/`e dokunulmadı, düzeltme yazılmadı, commit yok.
Satır satır döküm: `denetim/ALINTI-TARAMA-1006.tsv` (9.402 satır, her atıf bir satır).

**Ölçülen ağaç:** `C:\atlas-w30` = `origin/main` **a59e4b7b** (ayrık worktree). İlk evren `C:\atlas-umit` (ee415f4e) üzerinde
çıkarıldı. Ölçüm sırasında o ağacın HEAD'i 358e2349'a kaydı, bu yüzden evren origin/main'den yeniden çıkarıldı:
iki evren **birebir aynı** (5.103/5.103 atıf, fark 0). W28'in düzeltmeleri origin/main'e henüz inmemişti, bu yüzden bilinen pozitifler sınavda duruyor.

---

## 0. ÖNGÖRÜ — eşleştirmeden ÖNCE mühürlendi

Mühür 01:12:25. Gövde çekiminden ve eşleştirmeden önce yazıldı. ⚠️ İlk evren sayımından **sonra** yazıldı.
Mühür dosyası başlangıçta "evren sayımından da önce" diyordu; bu YANLIŞTI ve düzeltildi. Mühürde ACİL düzeltme
(YOK/ÖLÇÜLEMEDİ ayrımı) zaten içerilmişti.

| | öngörü | ölçüm (cümle, ≥4 kelime) |
|---|---|---|
| BİREBİR (ölçülebilen içinde) | ~%60 | **%77,3** (5.607 / 7.250) |
| YAKIN | ~%12 | **%5,4** (388) |
| YOK | ~%20 | **%17,3** (1.255), güçlü atıflı alt küme **%14,5** (852 / 5.888) |
| ÖLÇÜLEMEDİ (bütün atıflar içinde) | ~%10 | **%14,0** (1.177 / 8.427) |

YOK oranı öngörüye yakın çıktı. BİREBİR beklenenden yüksek, YAKIN beklenenden düşük çıktı.
**Tek öngörülmeyen kova SLUG KAYMASI'ydı** (§2).

## 1. EVREN — sayıyla

| | sayı |
|---|---|
| `data/*.js` dosyası | 569 (TDV izi taşıyan 448) |
| **TDV'ye atfedilmiş tırnaklı alıntı** | **9.402 atıf · 353 dosya** |
| ├ çift tırnak `\"…\"` · `“…”` · `«…»` | 4.522 |
| ├ tek tırnak `'…'` (Türkçe kesme işaretinden ayrılarak) | 4.299 |
| └ yapılandırılmış alan (`alinti` · `alinti_f` · `alinti_t`, kardeş alanda TDV izi) | 581 |
| ├ cümle (≥4 kelime), **raporun asıl kapsamı** | **8.427** |
| └ kısa parça (<4 kelime; "Ekim 1516" gibi) | 975 (ayrı tutuldu) |
| tekil (slug × normalleştirilmiş alıntı), cümle | 4.199 (ikiz dosyalar: `paket_*` ↔ `kronoloji_*` ↔ `yerlesimler*`) |
| tekil slug | 895 → canlı: **860 TAM · 35 ölü (302)** |
| **tırnaksız** TDV atıflı literal ("TDV `x`", tırnaklı cümle yok), AYRI kova | 13.236 literal · 391 dosya |

Desen keşfi örneklemle yapıldı (§5). Tek tırnak başta kapsam dışıydı. Bilinen pozitiflerden biri
(gurcistan/tiflis) tek tırnaklı çıkınca kapsama alındı.

## 2. SONUÇ — kovalar (cümle, ≥4 kelime, 8.427 satır)

| kova | satır | tekil | anlamı |
|---|---|---|---|
| **BİREBİR** | 5.607 | 2.724 | normalleştirilmiş alıntı TAM gövdede birebir geçiyor (`…`/`·` boşlukları parça parça) |
| **YAKIN** (≥0,85) | 388 | 151 | cümle gövdede var ama tırnak birebir değil; kelime farkı TSV'de ve §7'de |
| **YOK — güçlü atıf** | **852** | **347** | slug'ın hemen ardından gelen tırnak, gövde TAM, alıntı gövdede yok → **asıl aday listesi** |
| YOK — zayıf atıf | 251 | — | atıf artığı olabilir (aynı segmentte başka kaynağın tırnağı), elle bakılmalı |
| YOK — slug kayması | 74 | — | alıntı BAŞKA bir TDV maddesinde BİREBİR geçiyor: sahte değil, yanlış slug |
| YOK — beyanlı özet | 78 | — | kayıt `alinti_ozet:true` ile özet olduğunu kendi söylüyor |
| **ÖLÇÜLEMEDİ** | **1.177** | 695 | hüküm verilemez (§3) |

Tüm atıflar (kısa dahil, 9.402): BİREBİR 5.931 · YAKIN 415 · YOK 1.498 (güçlü 886 · zayıf 353 · kayma 125 · özet 134) · ÖLÇÜLEMEDİ 1.558.
Kısa parçalarda YOK oranı %40,9 çıktı. Bunların çoğu tarih/ad parçası; cümle kapsamına alınmadı.

**Oran:** ölçülebilen cümle alıntılarının **%17,3**'ü TDV gövdesinde yok. Yalnız güçlü atıflılarda bu oran **%14,5**.
Ayrıca **%5,4**'ü YAKIN, yani tırnak içinde değiştirilmiş TDV cümlesi. Koordinatörün 33 satırlık örneklemindeki %18 ile uyumlu.

**YOK kovasının dağılımı:** 68 dosyada. En yoğunları `paket_12` 151 · `devletler` 66 · `paket_05` 66 · `paket_13` 65 · `yerlesimler` 65 ·
`kronoloji_kuzeyafrika` 59 · `kronoloji_arabistan` 53 (güçlü atıf satırı). Benzerlik bandı (bütün YOK): <0,60: 847 · 0,60–0,80: 345 · 0,80–0,85: 63.
Dil: 1.114 Türkçe · 126 İngilizce · 13 başka Latin · 2 Kiril. İngilizce "TDV alıntısı" naksa tipi bir sınıftır;
güçlü atıflı YOK içinde 62 tane var.

**Gözlenen tipler** (örneklemden): ① gerçek TDV cümlesinin başına `YYYY:` öneki eklenip kronoloji formülüne çevrilmesi
(«1883: Bamako işgali önlenemedi» ↔ gövde "Bamako'nun işgali önlenemedi") ② tırnak içine alınmış özet/yeniden yazım
③ TDV'de olmayan İngilizce cümle ④ gövdedeki kelimenin düşürülmesi ya da değiştirilmesi (YAKIN: atina `-1387 · +gordus`).

## 3. ÖLÇÜLEMEDİ — sınıf dağılımı ve gövde kanıtı

| sebep | cümle | tümü |
|---|---|---|
| SLUG ÇÖZÜLEMEDİ: metinde TDV izi var ama slug ayrıştırılamadı ("TDV Abdurrahman III: …", "TDV'nin X maddesi") | 1.130 | 1.491 |
| ÖLÜ SLUG (canlı HTTP 302) | 47 | 67 |
| BOŞ gövde · ARAMA sayfası · TDV-dışı · çekilemedi | **0** | **0** |

**Eski önbellek ölçüme GİRMEDİ.** 895 slug'ın hepsi bu oturumda yeni çıkarıcıyla (`ARAC-TDV-CIKARICI-1006.tam`, tüm
bölümler, gövde/kaynakça ayrı) **canlı** çekildi. İstekler arasında 1,2 sn beklendi, her slug bir kez çekildi. Ham HTML önbelleği
`scratchpad/w30/tdv-ham` (çıkarıcının md5 biçimi). Her gövde sınıflandı: 302 · arama sayfası · boş (bölüm 0 ya da <200 kr) ·
kesik HTML (`</html>` yok) · gönderme sayfası (7 tanesinde hedef(ler)e gidildi) · TAM. Bu yüzden ACİL düzeltmedeki
"boş/302/arama gövdesine karşı YOK" riski bu ölçümde **sıfırdır**: YOK kovasındaki her satırın gövdesi TAM'dır, bölüm sayısı ve uzunluğu
satırında yazılı (`bolum` · `uzunluk`). TAM gövdelerin 151'i çok bölümlü; en uzunu `istanbul` (567.449 kr).

Ölü slug'lar ikiye ayrılıyor. **Gerçek ölü** (backtick/kardeş alanda yazılmış): `kamba` · `sih-imparatorlugu` · `palu` ·
`agadez-sultanligi` · `kuayti-sultanligi` · `inebahti-savasi` · `sur` · `kavalali` · `kale-cifti` · `feribot` · `yogyakarta` ·
`aynalikavak-tenkihnamesi` · `tiphane-i-amire` · `tdv-malatya`. **Ayrıştırma artığı:** başlıktan türetilmiş ya da çıplak kelime
(`kartli-ve-kahet-…`, `yaklasik-1166`, `okununca` …), yani kusur veride değil benim slug ayrıştırıcımda.

**Sağlam gövde kümesi (D218 yeniden ölçümü için):** TSV'de `govde_saglam=1` sütunu var. Yanında `govde_sinif`, `bolum`
ve `uzunluk` sütunları duruyor. 860 slug canlı TAM.

## 4. GLM ÇAPRAZ KONTROLÜ (ayrı bölüm)

Kendi sınıflamam GLM TSV'sinin bayt+ad sütunlarından mekanik olarak türetildi (`0 bayt`=BOŞ · `5 bayt`=302 · `ARAMA-*`=ARAMA ·
`DIS-*`/`saho-*`/`strategic-*`=TDV-dışı):

| | ben | GLM (düzeltilmiş) | fark |
|---|---|---|---|
| BOŞ | 471 | 475 | −4 |
| 302 | 482 | 482 | 0 |
| ARAMA | 386 | 386 | 0 (7'si 0 bayt) |
| TDV-dışı | 22 | 18 | +4 |

**Uyuşmazlık değil, ÖLÇÜT farkı.** Aradaki 4 dosya `saho-oranj · saho-sandriver · saho-transvaal · saho-venda`
(KRONO-AFRIKA-0929). Bu dosyalar 0 bayt ve adları TDV-dışı. GLM onları içerikten BOŞ saydı, ben addan TDV-dışı saydım.
İkisi de savunulabilir. ARAMA'daki 7 sıfır baytlık dosya koordinatörün bildirdiği ölçüt farkıdır: GLM doğuş akışıyla ARAMA saydı, ben de
adla ARAMA saydım, yani bende de ARAMA.

🔴 **"482 BOŞ = 482 302" eşitliği tesadüftür, aynı dosyalar değildir.** 302 dosyalarının 482'si de tek kovada
(ONCE1281-YERLESIM). 0 baytlıklar ise 16 kovaya dağılmış ve ONCE1281-YERLESIM'de hiç yok. Ad kesişimi kovalar arası 30.
GLM'in ilk sayımı (482 BOŞ) içinde 7 ARAMA vardı, düzeltilmiş 475 bunu çözüyor.

**Canlı karşılaştırma** (GLM'in önbellek sınıfı → bu oturumdaki canlı çekim, ortak slug'lar): GLM MADDE → 815/815 TAM ·
GLM 302 → 2/2 ölü · GLM BOŞ → 3 TAM + 2 ölü · GLM ARAMA → 1 TAM + 2 ölü. ⇒ **Önbellekteki BOŞ bir slug'ın ölü olduğunu
göstermez.** 5 BOŞ'un 3'ü canlıda tam madde, yani GLM'in "BOŞ = çekim artığı" teşhisi doğru. Yerelde bulunan önbellek 13 kova ·
567 dosya: 474 madde + 93 sıfır bayt. 549'u GLM satırıyla bayt bayt aynı. GLM'in kalan kovaları bu makinedeki
ağaçlarda bulunamadı.

## 5. YÖNTEM DOĞRULAMASI

**Bilinen pozitif sınavı (7/7 yakalandı)**: KRONO-DIFF-1006 §9.3 ve koordinatör örnekleri.

| kayıt | slug | sonuç |
|---|---|---|
| kronoloji_timurlu:85 (kaynak satırı 88) | timur | YOK 0,632 |
| kronoloji_naksa_dukaligi:81 (84) | naksa | YOK 0,480, İngilizce |
| kronoloji_timurlu:148 (151) "1447-1449 arası…" | ulug-bey | YOK 0,395 |
| kronoloji_timurlu:153 (156) | ulug-bey | YOK 0,465 |
| kronoloji_atina_dukaligi:66 (69) | atina | **YAKIN 0,922**, fark `-1387 · +gordus` |
| kronoloji_fransa:277 (280) | fransa | YOK 0,579 (aynı satırdaki `imtiyazat` alıntısı BİREBİR, doğru) |
| kronoloji_gurcistan:159 (163) | tiflis | YOK 0,556 (tek tırnak) |

Satır numarası: TSV'de `kayit_satir` kaydın `{` satırıdır (koordinatörün kullandığı), `satir` ise tırnağın bulunduğu satır.

**Elle örneklem:** güçlü atıflı YOK'tan rastgele 15 satır okundu. **14'ü gerçekten birebir olmayan tırnaktı**
(özet, tarih öneki, İngilizce). 1'i (van) alıntı içindeki ` · ` ayırıcısının artığıydı; ayırıcı parça sınırı yapıldı ve
yeniden koşuldu (YOK 1.257 → 1.255). Zayıf atıflı örneklerde atıf artığı görüldü (Hırvatça meclis sayfası, ESBE,
IBS alıntısı). Bu yüzden zayıf atıflılar ayrı kovada tutuldu.

**Eşleştirme:** `ARAC-NORMAL-0903.norm` uygulandı, sonra harf-rakam dışı her şey boşluğa çevrildi (şapka, noktalama, kesme ve tırnak
farkı tolere edildi). `…`, `...`, `[...]` ve ` · ` boşluk sayıldı; her parça sırasız aranır. Benzerlik için alıntı kelimeleriyle
en çok örtüşen 4 pencere seçildi, ±kenar varyantlarıyla `difflib` oranı hesaplandı ve parça uzunluğuyla ağırlıklandırıldı.
YOK satırlarında alıntı bütün TAM gövdelerde de arandı; slug kayması böyle bulundu.

**Sınırlar (ölçülemedi ≠ yok ≠ temiz):**
- Atıf sezgiseldir: tırnak, aynı segmentte (` · `, `;`, ` | ` ile ayrılmış) en yakın TDV slug'ına bağlandı. "TDV" izi tırnaktan
  ÖNCE yoksa atıf sayılmadı.
- 1.130 cümle SLUG ÇÖZÜLEMEDİ kovasında kaldı. İçlerinde sahte alıntı olabilir; bu kova için hüküm verilmedi.
- Tek tırnak kapsamı kesme işaretiyle karışmasın diye "açılış tırnağından önce harf yok, kapanıştan sonra harf yok, ≥3 kelime"
  kuralıyla sınırlandı. Bu kurala uymayan tek tırnaklı alıntılar KAÇMIŞ olabilir.
- `.js` dışı veri dosyaları (`paket_kunye.json` vb.) kapsam dışıdır.

## 6. YOK KOVASI — ADIYLA (cümle, ≥4 kelime; tekil alıntı başına bir satır, ikiz konumlar birlikte)
### YOK — güçlü atıf (asıl aday listesi) — 852 satır · 347 tekil alıntı

Slug işaretinin hemen ardından (≤25 karakter) gelen tırnak, ya da kaydın kendi `slug:` alanı. Gövde TAM, alıntı gövdede yok.

| konum(lar) | slug · gövde kanıtı | alıntı | en yakın gövde parçası (benzerlik) |
|---|---|---|---|
| devletler.js:650 · paket_05.js:669 | `gilan` · 1 bölüm · 5080 kr | İlhanlı Hükümdarı Olcaytu'nun 1306-07'deki başarısız ilhak girişiminden sonra | ilhanli hukumdari olcaytu 706 da 1306 gilan i kendi topraklarina kattiysa (0.547) |
| devletler.js:1071 · paket_05.js:1090 | `gurcistan` · 3 bölüm · 39757 kr | 1804 yılında İmeretiya ve Guriya (Rusya ile) birleşti | ve kahet bolgelerinde ardindan imeretiya ve guriya da (0.538) |
| devletler.js:1224 · paket_05.js:1243 | `yemen` · 5 bölüm · 94656 kr | 26 Eylül 1962'de Mısır destekli bir ihtilal gerçekleşti ve Zeydî imamlığına son verildi | 26 eylul 1962 boylece yemen de monarsi sona erdi ve misir in destegiyle yemen (0.427) |
| devletler.js:1319 · paket_05.js:1338 | `bosna-hersek` · 1 bölüm · 48610 kr | 1899'da müftü Ali Fehmi Câbiç liderliğinde dinî özerklik için mücadele başlatıldı | mostar muftusu ali fehmi cabic liderliginde bosna hersek teki butun muslumanlar icin dini sahada ve egitimde (0.571) |
| devletler.js:1360 · paket_05.js:1379 | `oniki-ada` · 1 bölüm · 13470 kr | 24 Temmuz 1923'te imzalanan Lozan Barış Antlaşması'nın 15. maddesinde hiçbir değişiklik yapılmadan Rodos, Oniki Ada ve bağlı adacıklarla Meis adasının İtalya'ya verileceği hükme bağlandı. | yonetim kurullarini secme haklari tanindi 15 maddede rodos ve oniki ada ya bagli adaciklarin italya ya verildigi belirtildigi halde meis e bagli adaciklardan so (0.538) |
| devletler.js:1563 · paket_05.js:1582 | `necid` · 1 bölüm · 10711 kr | Faysal'ın 1865'teki ölümünden sonra Abdullah ve kardeşi Suûd arasındaki anlaşmazlıklar | b faysal in idaresine vermekti ancak abdullah in son anda (0.49) |
| devletler.js:2533 · paket_05.js:2552 | `gine` · 2 bölüm · 19228 kr | Yaklaşık 1747'de İbrâhim Mûsâ önderliğinde bağımsız bir İslâm devleti | kisi olan ibrahim musa nin onderliginde musluman olmayanlara (0.558) |
| devletler.js:2556 · kronoloji_sinir_guney_g8.js:77 · paket_05.js:2575 · paket_09.js:361 | `senegal` · 2 bölüm · 23838 kr | Volof Krallığı XIII. yüzyılda orta Senegal'e hâkimdi. | sinirlari icinde kalmistir xiii yuzyilda senegal in orta bolgesinde volof kralligi (0.526) |
| devletler.js:2592 · kronoloji_sinir_guney_g8.js:78 · paket_05.js:2611 · paket_09.js:362 | `senegal` · 2 bölüm · 23838 kr | Sine-Salum Emirliği — Serer nüfuslu doğu bölgesi. | sine saloum emirligi ne ait bolgede de (0.667) |
| devletler.js:2615 · paket_05.js:2634 | `moritanya` · 2 bölüm · 10005 kr | Hassânî emirler XVIII-XIX. yüzyılda Fas şeriflerıyle yakın ilişki içindeydi | hassani emirleri fas in serif yoneticileriyle iliskilerini bazan ittifak ilan (0.583) |
| devletler.js:2645 · paket_05.js:2664 | `gine` · 2 bölüm · 19228 kr | Ture din temelli merkezî bir devlet kurdu | devlet baskani seku ture nin takip ettigi devletci politikayi terkederek (0.407) |
| devletler.js:2649 · paket_05.js:2668 | `samori-ture` · 1 bölüm · 6566 kr | 1883: Bamako işgali önlenemedi | bamako nun isgali onlenemedi (0.842) |
| devletler.js:2650 · paket_05.js:2669 | `samori-ture` · 1 bölüm · 6566 kr | Mart 1886: ilk anlaşmayla Bure bölgesini Fransızlara bıraktı | mart 1886 daki ilk anlasmayla bure bolgesini bir (0.804) |
| devletler.js:2652 · paket_05.js:2671 | `samori-ture` · 1 bölüm · 6566 kr | 1887 tarihinde Sikasso kuşatmasını başlattı | kabilesinin idaresinde bulunan sikasso yu kusatan 1887 ancak (0.505) |
| devletler.js:2653 · paket_05.js:2672 | `samori-ture` · 1 bölüm · 6566 kr | 13 Şubat 1889: Son antlaşmayı imzaladı | son anlasmasini 13 subat 1889 da yapti ve tisinko (0.488) |
| devletler.js:2654 · paket_05.js:2673 | `samori-ture` · 1 bölüm · 6566 kr | 1891: yeniden savaşa tutuştu | yeniden savasa tutustu ancak (0.8) |
| devletler.js:2673 · paket_05.js:2692 | `mali` · 1 bölüm · 56471 kr | Segu — önemli bir Bambara krallığı merkezi; el-Hâc Ömer 1861'de fethetti. | birlestirdiler buna ragmen el hac omer 10 mart 1861 tarihinde segu yu alarak oglu seku (0.439) |
| devletler.js:2676 · paket_05.js:2695 | `el-hac-omer` · 1 bölüm · 15456 kr | Kaarta 11 Kasım 1854'te İslâm devleti olarak kuruldu | devletini kurdu 11 kasim 1854 yerli halkin (0.489) |
| devletler.js:2678 · devletler.js:7487 · paket_05.js:2697 · paket_05.js:7506 | `el-hac-omer` · 1 bölüm · 15456 kr | Segu: 1861 başı — Bambara krallığı ortadan kaldırıldı | segu nun animist kralligi ortadan kaldirildi ancak (0.72) |
| devletler.js:2696 · paket_05.js:2715 | `burkina-faso` · 1 bölüm · 22519 kr | XII. yüzyıl sonunda Ouédraogo temel Mossi krallığını kurdu | de jean baptiste ouedraogo nun darbesine engel olamadi ancak ouedraogo da (0.4) |
| devletler.js:2708 · kronoloji_sinir_guney_g8.js:126 · paket_05.js:2727 · paket_09.js:410 | `burkina-faso` · 1 bölüm · 22519 kr | Naaba Kango 1757-1787 arasında otoriteyi merkezîleştirdi | tarihi naaba kango 1757 1787 ile baslar kral kango iktidari merkezilestirerek (0.662) |
| devletler.js:2992 · paket_05.js:3011 | `cad` · 1 bölüm · 29353 kr | Vara ve Abeşe başlıca merkezler | bilhassa savaslarda ayinlerde (0.4) |
| devletler.js:2992 · paket_05.js:3011 | `veday` · 1 bölüm · 11331 kr | Çad’da hüküm süren bir sultanlık (1635-1909) | da hukum suren func sultanligi ndan cok sayida (0.591) |
| devletler.js:3012 · kronoloji_sinir_guney_g8.js:117 · paket_05.js:3031 · paket_09.js:401 | `cad` · 1 bölüm · 29353 kr | XVI. yüzyılda Kenkâ halkı tarafından kuruldu | kenka kabilesi tarafindan bagirmi devleti kuruldu (0.609) |
| devletler.js:3033 · paket_05.js:3052 | `cad` · 1 bölüm · 29353 kr | Mao, Ati, Am Timan — Kanem topraklarının şehirleri | ziraati yapilir nufus topraklarinin genisligine ragmen cad in nufusu azdir (0.45) |
| devletler.js:3245 · kronoloji_sinir_guney_g8.js:106 · paket_05.js:3264 · paket_09.js:390 | `malavi` · 1 bölüm · 15500 kr | Malavi Konfederasyonu 1480'de kuruldu | 1480 de olusturulan malavi konfederasyonu (0.538) |
| devletler.js:3255 · kronoloji_sinir_guney_g8.js:148 · paket_05.js:3274 · paket_09.js:432 | `malavi` · 1 bölüm · 15500 kr | kendini 1887'de Ngonde sultanı ilân etti | de kendini ngonde sultani ilan (0.771) |
| devletler.js:3278 · kronoloji_sinir_guney_g8.js:149 · paket_05.js:3297 · paket_09.js:433 | `zambiya` · 2 bölüm · 17553 kr | Lozi kralı Levanika 1890'da İngiliz Güney Afrika Şirketi'nin himayesini kabul etti. | kontrol hakki tanidigi ingiliz guney afrika sirketi ni kuran cecil rhodes in himayesine girdi 1894 te (0.59) |
| devletler.js:3516 · paket_05.js:3535 | `madagaskar` · 1 bölüm · 12752 kr | Betsileo — güney yaylaları | guney arabistanli denizciler (0.346) |
| devletler.js:3527 · kronoloji_sinir_guney_g8.js:112 · paket_05.js:3546 · paket_09.js:396 | `madagaskar` · 1 bölüm · 12752 kr | Antemoro — güneydoğu kıyısı | guneydogu asya ile (0.512) |
| devletler.js:3560 · paket_05.js:3579 | `madagaskar` · 1 bölüm · 12752 kr | Merina — orta yaylalar, XVIII. yüzyılda birleşti. | yuzyilda girdi iii ix yuzyilda basra (0.5) |
| devletler.js:3598 · paket_05.js:3617 | `gine` · 2 bölüm · 19228 kr | Kankan — Diafunu'dan gelen müslüman Mandinka yerleşimcilerce kuruldu; Gine'nin iç kesimindeki başlıca şehir oldu | diafunu dan gelen musluman mandinkalar kankan bate kuafodie tintiule gibi sehirleri kurarak gine nin ic kisimlarina yerlestiler xviii (0.562) |
| devletler.js:4974 · paket_05.js:4993 | `osman-b-fudi` · 1 bölüm · 7943 kr | 21 Haziran 1804: Tabkin Kwatto muharebesinde zafer | 21 haziran 1804 te tabkin kvatto savasinda (0.769) |
| devletler.js:4975 · paket_05.js:4994 | `osman-b-fudi` · 1 bölüm · 7943 kr | 1806: Zaria'nın ele geçirilmesi | 1806 da zaria ele gecirildi (0.807) |
| devletler.js:4987 · paket_05.js:5006 | `osman-b-fudi` · 1 bölüm · 7943 kr | 1806: Zaria'nın ele geçirilmesi; Alkalava'ya yapılan saldırı başarısız | 1806 da alkalawa ya karsi tekrar baslatilan saldirilar 1808 de (0.508) |
| devletler.js:4990 · paket_05.js:5009 | `osman-b-fudi` · 1 bölüm · 7943 kr | 1809: Bornu'nun Muhammed Emîn el-Kânemî'ye kaybedilmesi | 1809 da bornu muhammed emin el kanimi tarafindan geri (0.673) |
| devletler.js:4992 · paket_05.js:5011 | `osman-b-fudi` · 1 bölüm · 7943 kr | 3 Cemâziyelâhir 1232 (20 Nisan 1817): Osman b. Fûdî'nin ölümü | cemaziyelahir 1232 de 20 nisan 1817 vefat etti kabri (0.697) |
| devletler.js:4993 · paket_05.js:5012 | `sokoto` · 1 bölüm · 9786 kr | 1849: Yakubu Kebbi'de bağımsızlığını ilân etti | 1849 da bagimsizligini ilan eden yakubu kuzeydeki (0.617) |
| devletler.js:4994 · paket_05.js:5013 | `sokoto` · 1 bölüm · 9786 kr | 1903: İngiliz işgali (15 Mart) | ingiliz somurgesi oldugunu ilan etti (0.476) |
| devletler.js:5006 · paket_05.js:5025 | `gana` · 2 bölüm · 27639 kr | 1874: Kumasi yıkıldı; güneybatı Gana Altın Sahili adıyla sömürge oldu | ulkenin guneybati tarafi altin sahili adiyla somurge haline getirildi 1874 altin sahili nin (0.582) |
| devletler.js:5008 · paket_05.js:5027 | `gana` · 2 bölüm · 27639 kr | 1901: Aşanti toprakları İngiliz idaresi altına girdi | topraklari ingiltere nin hakimiyetine gecti 1901 bir (0.544) |
| devletler.js:5020 · paket_05.js:5039 | `benin` · 1 bölüm · 20331 kr | 1851: Fransa ile Gezo arasında antlaşma | 1851 de fransa ile gezo arasinda (0.829) |
| devletler.js:5022 · paket_05.js:5041 | `benin` · 1 bölüm · 20331 kr | Mayıs 1868: Kotonu Antlaşması | 1868 tarihli kotonu antlasmasi (0.759) |
| devletler.js:5023 · paket_05.js:5042 | `benin` · 1 bölüm · 20331 kr | 1882: Fransa Porto Novo ve Kotonu üzerinde himaye kurdu | cikti 1882 de porto novo ve kotonu uzerinde himaye idaresi kuran fransa (0.736) |
| devletler.js:5123 · paket_05.js:5142 | `uganda` · 2 bölüm · 24406 kr | Kral I. Mutasa dönemi (1854-1884) | mutasa ya 1854 1884 (0.694) |
| devletler.js:6475 · paket_05.js:6494 | `haydarabad-nizamligi` · 1 bölüm · 11705 kr | Bağımsızlığını 11 Ekim 1724'te ilan etmiştir | bagimsizligini ilan etti 11 ekim 1724 bir (0.706) |
| devletler.js:6754 · paket_05.js:6773 | `bahavelpur` · 1 bölüm · 4508 kr | 1748'de Emir Muhammed Bahâvel tarafından... kuruldu | emir muhammed bahavel tarafindan 1748 de … kuruluslarini (0.765) |
| devletler.js:7405 · paket_05.js:7424 | `guney-afrika-cumhuriyeti` · 1 bölüm · 25345 kr | 1852-1854: Transvaal ve Orange cumhuriyetlerinin bağımsızlığı tanındı | transvaal ve orange bagimsiz cumhuriyetlerini kurdular 1842 de (0.615) |
| devletler.js:7406 · paket_05.js:7425 | `guney-afrika-cumhuriyeti` · 1 bölüm · 25345 kr | 1877: İngilizlerin Transvaal'i ilhakı | de ingilizler in transvaal i ilhakiyla sonuclandi ingiltere (0.674) |
| devletler.js:7407 · paket_05.js:7426 | `guney-afrika-cumhuriyeti` · 1 bölüm · 25345 kr | 1881: Majuba Hill Savaşı'nda Boerlerin zaferi | majuba hill savasi nda yenip tekrar bagimsizliklarini (0.598) |
| devletler.js:7412 · paket_05.js:7431 | `guney-afrika-cumhuriyeti` · 1 bölüm · 25345 kr | 1899-1902: İkinci Boer Savaşı | 1899 dan 1902 ye kadar (0.48) |
| devletler.js:7470 · paket_05.js:7489 | `mali` · 1 bölüm · 56471 kr | Massina Devleti: Ahmedu Lobbo tarafından kurulmuş, sınırları Cenne'den Tinbuktu'ya uzanıyordu | masina nin sinirlari cenne den tinbuktu ye doguda dogon a batida nampala ya kadar uzaniyordu (0.568) |
| devletler.js:7473 · paket_05.js:7492 | `el-hac-omer` · 1 bölüm · 15456 kr | Hamdallahi: 1862 — Masina başşehri ele geçirildi; Emîr Ahmed muharebede öldü | cihad yili oldu yelimane bambuk ve farabanna ele gecirildi el hac omer bir bambara (0.506) |
| devletler.js:7485 · paket_05.js:7504 | `el-hac-omer` · 1 bölüm · 15456 kr | 1854: Yelimane, Bambuk ve Farabanna ele geçirildi; Kaarta 11 Kasım 1854'te İslâm devleti olarak kuruldu | 1854 bir cihad yili oldu yelimane bambuk ve farabanna ele gecirildi el hac omer bir bambara kralligi olan karta (0.607) |
| devletler.js:7486 · paket_05.js:7505 | `el-hac-omer` · 1 bölüm · 15456 kr | Medine: 1857 — 25.000 askerle Fransız kalesine saldırıldı; Fransız kuvvetlerince püskürtüldü | medine yerlesim bolgesindeki fransiz kalesi ne saldirdi 1857 ancak senegal valisinin emrindeki fransiz ordusu (0.528) |
| devletler.js:7488 · paket_05.js:7507 | `el-hac-omer` · 1 bölüm · 15456 kr | Hamdallahi: 1862 — Masina başşehri ele geçirildi | masina nin merkezi hamdallahi yi ele gecirip savasta olen (0.471) |
| devletler.js:7490 · paket_05.js:7509 | `el-hac-omer` · 1 bölüm · 15456 kr | devlet 1893-1894 Fransız fethine kadar sürdü | devlet fransizlar in 1893 1894 yillarinda bolgeyi ele gecirmesine kadar (0.504) |
| devletler.js:7511 · paket_05.js:7530 · paket_13.js:740 · paket_13.js:742 · paket_13.js:744 · paket_13.js:977 (+14) | `filistin` · 1 bölüm · 89043 kr | 1920 Temmuzu'ndan itibaren Filistin'de mülkî bir manda idaresi kuruldu | 1920 tarihinden itibaren filistin de bir sivil manda yonetimi kurdu ve (0.7) |
| devletler.js:7612 · paket_05.js:7631 | `libya` · 3 bölüm · 76586 kr | AMMÂROĞULLARI 1327-1401 yılları arasında Trablusgarp'ta hüküm süren bir hânedan. | yaptirdi 1551 1912 yillari arasinda yaklasik dort asir boyunca osmanlilar trablusgarp eyaletine cok sayida (0.497) |
| devletler.js:7736 · paket_05.js:7755 | `kuveyt` · 2 bölüm · 20840 kr | 1896'da bir suikast sonucu öldürüldü | bir suikast sonucu olduruldu 1896 bunun (0.747) |
| devletler.js:7737 · paket_05.js:7756 | `kuveyt` · 2 bölüm · 20840 kr | taraflar İngiltere'den yardım talep edince Osmanlılar endişelenip Mübârek'in kaymakamlığını 1897'de onayladı | ingiltere den yardim istedi arap birligi de kuveyt in bagimsizligini korumak icin kuvvet gonderdi (0.449) |
| devletler.js:7818 · paket_05.js:7837 | `sirbistan` · 2 bölüm · 34624 kr | 1804'te Karadjordje liderliğinde Sırp isyanı patlak verdi | karacorce kara yorgi liderliginde sirp isyani patlak verdi onceleri yenicerilere karsi (0.643) |
| devletler.js:8262 · paket_05.js:8281 | `bosna-eyaleti` · 1 bölüm · 5376 kr | önce sancak beyliği iken 1580'den itibaren beylerbeyilik | sancak kuruldu ve sancak beyligi minnetoglu mehmed bey e verildi ancak (0.524) |
| devletler.js:8344 · paket_05.js:8363 | `tahiriler--yemen` · 1 bölüm · 10547 kr | Yemen'de Resûlîler'den sonra 1454-1517 yılları arasında hüküm süren Sünnî bir hânedan | ahmed in olumunden sonra 924 1518 hanedan mensuplari arasinda taht kavgalari basladi ve pek cok catisma oldu (0.466) |
| devletler.js:9783 · paket_05.js:9802 | `begteginliler` · 1 bölüm · 14090 kr | 1144-1232 yılları arasında merkezi Erbil olmak üzere Şehrizor, Hakkâri, Tikrît, Sincar, Harran, Urfa ve civarında hüküm süren bir Türk beyliği. | son yillarinda yasliligi ve hastaligi sebebiyle ikta bolgelerinden tikrit hakkari ve sincar i musul hukumdari mevdud a birakti ve musul naibliginden cekilerek e (0.403) |
| ekokuma_dunya.js:555 | `agakapisi` · 1 bölüm · 11289 kr | dönemin İstanbul'unu tekrar tekrar vuran büyük şehir yangınlarından biri | sadirvan ile buyuk bir havuz 9 agakapisi na girilen buyuk kapinin sokak tarafinda mutfaklara (0.402) |
| ekokuma_ibrahim.js:152 | `ibrahim--padisah` · 1 bölüm · 42876 kr | Şubat 1648; TSMA E. 7112 | 1648 tsma nr e 7112 (0.78) |
| ekokuma_karadeniz.js:122 | `hotin` · 1 bölüm · 6754 kr | çıkarılma'yı 1711 SONRASINA koyar ve gün vermez ( | boh besarabya arasinda kalan araziyle birlikte (0.366) |
| ekokuma_karsi.js:154 | `kirim` · 3 bölüm · 113887 kr | 8 Nisan 1783'ü üslup belirtmeden eski üslupla yazıyor; Duma ve RIO 19 Nisan'ı aynı gün olarak veriyor (fark 11 gün). Çelik yemin için Potemkin'in 23 Temmuz mektubunu ve Karasu'da 21 Temmuz 1783 tarihli Osmanlı belgesini veriyor — metinde yalnız 'yaz | tahribata yol actilar ve eski kirim a da saldirdilar 1629 da karasubazar mangub yagmalandi ve yakildi elli gemilik bir kazak filosu gozleve ye saldirip sehri ya (0.293) |
| ekokuma_korfez.js:52 | `kerim-han-zend` · 1 bölüm · 4957 kr | Basra alınınca Osmanlı savaş ilan etti | basra ise ancak kerim han in (0.515) |
| ekokuma_korfez.js:52 | `abdulhamid-i` · 1 bölüm · 14867 kr | Kerim Han savaş ilan etti | savas ilan etti kerim han (0.6) |
| ekokuma_p76g.js:79 | `himaye` · 1 bölüm · 4489 kr | mâliye bakanının ikili denetimi | himayesini iade ettigini ve (0.448) |
| ekokuma_yunan.js:91 | `yunanistan` · 2 bölüm · 66701 kr | Mısır Valisi Mehmed Ali Paşa'nın oğlu İbrâhim Paşa kumandasındaki Mısır donanması 1825'te Mora'ya çıkarak isyanı sert bir şekilde bastırdı. | ali pasa nin oglu ibrahim pasa kumandasindaki misir donanmasi 1825 te mora ya cikarak modon u karargah yapti ve isyani sert bir sekilde bastirdi mora (0.822) |
| gecitler.js:219 | `kopru` · 1 bölüm · 14849 kr | ordu ve ağırlık geçer | ve dubalar gibi yuzen (0.429) |
| hukuki_sinirlar.js:247 · paket_16.js:252 | `karlofca` · 2 bölüm · 22209 kr | Suçeva ... Osmanlılar geri aldı | osmanlilar in baris (0.756) |
| isyan_tarama.js:78 | `erdel` · 1 bölüm · 19402 kr | Erdel'in belli başlı şehirleri arasında Alba Julia (Gyulafehérvár) ve Sighişoara (Segesvár) sayılır; güneydeki Sekeller ili bölgesinin en önemli şehri Braşov'dur (özet). | erdel in belli basli sehirleri sayilan cluj macarca koloszvar alba julia macarca gyulafehervar turda macarca torda almanca thorenburg tirgul mures macarca maros (0.476) |
| isyan_tarama.js:89 | `eflak` · 1 bölüm · 18822 kr | Cesur Mihai (1593-1601) vergi yüzünden isyan etti; 1601'de Basta'ya yenilip öldürüldü, ardından Eflak eskisi gibi Osmanlı'ya tâbi oldu (özet). | eski muttefiki general basta ya yenilerek onun tarafindan olduruldu bundan sonra xvii yuzyil boyunca eflak eskiden oldugu gibi osmanli devleti ne tabi olarak ye (0.481) |
| isyan_tarama.js:107 | `bogdan` · 1 bölüm · 17128 kr | Aron 1594'te Kutsal İttifak'a girdi, 1594 sonlarında Yaş ve Bükreş'te Türk ve Rum alacaklılar öldürüldü; yerine geçen Razvan isyanı sürdürdü, Lehliler onu öldürdü (özet). | 1594 yili sonlarinda yas ve bukres te prensten alacagi olan butun turk ve rumlar olduruldu bogdan askerleri dobruca ya girdi fakat erdel prensi bathory nin voyv (0.482) |
| isyan_tarama.js:122 | `bogdan` · 1 bölüm · 17128 kr | Mihai 1599'da Erdel'i aldı, 1600'de Hotin'e dek ilerleyip Boğdan'ın da hâkimi oldu; ertesi yıl Basta onu öldürünce üç prenslik yeniden ayrıldı (özet). | hizli bir hareketle hotin e kadar ilerleyerek bogdan in da hakimi oldu 1600 boylece eflak bogdan ve erdel i birlestiren mihai domn yurdun efendisi unvanini aldi (0.416) |
| isyan_tarama.js:143 | `erdel` · 1 bölüm · 19402 kr | Zsigmond Báthory (1581-1598, 1601-1602) Türklere karşı döndü; 1593-1606 savaşlarında Habsburglarla ve bir ara Mihal'le anlaşıp geçici olarak onlara tâbi oldu (özet). | zsigmond bathory 1581 1598 1601 1602 turkler aleyhine donmustur zsigmond osmanli habsburg savaslari doneminde 1593 1606 habsburglar ve bir ara eflak beyi mihal  (0.633) |
| isyan_tarama.js:205 | `erdel` · 1 bölüm · 19402 kr | Zsigmond'un dengesiz siyaseti Erdel'in yeniden Habsburg idaresine girmesine yol açtı (1601-1602); Osmanlı yanlısı Mózes Székely'nin girişimi başarısız oldu (özet). | zsigmond sonucta erdel in tekrar habsburg idaresine girmesine yol acti 1601 1602 osmanli idaresini erdel de yeniden saglamak icin bir sekel asilzadesi olan moze (0.602) |
| isyan_tarama.js:207 | `zitvatorok-antlasmasi` · 1 bölüm · 12311 kr | Bocskay Osmanlı himayesine dayanarak 1604 Kasımında Habsburglara karşı ayaklandı (özet). | bocskay in gorevlileri gorusmelerde osmanli tarafinda yer almisti baris antlasmasinin (0.4) |
| kademe_f5c9a5.js:266 | `diu` · 1 bölüm · 5030 kr | 1510 yılında Diû Sûret vilâyetinin merkezi oldu | diu suret vilayetinin merkezi oldu burada bir (0.739) |
| kronoloji_almanya.js:258 · paket_08.js:3186 | `prusya` · 1 bölüm · 26157 kr | 1656'da Kırım Hanı tarafından gönderilen elçilik heyeti, Königsberg'de Kürfürst Friedrich Wilhelm ile görüşür | dan gonderilen bir elcilik heyeti isvec in polonya ya saldirmasini onlemesi ricasiyla konigsberg de kurfurst friedrich wilhelm in (0.608) |
| kronoloji_almanya.js:263 · paket_08.js:3191 | `prusya` · 1 bölüm · 26157 kr | 1672-1675 Brandenburg yardımcı kuvvetleri Polonya'nın yanında Türk savaşlarına katılır | brandenburg yardimci kuvvetleri kont friedrich von donhoff kumandasinda polonya nin yaninda turk savaslarina istirak etmistir (0.692) |
| kronoloji_almanya.js:283 · paket_08.js:3211 | `prusya` · 1 bölüm · 26157 kr | 14 Ocak 1718 Sadrazam Nişancı Mehmed Paşa, Prusya Kralı I. Friedrich Wilhelm'e dostluk tesisini arzu eden mektup gönderir | rusya yaninda prusya krali i friedrich wilhelm e de dostluk tesisini arzu eden 11 safer 1130 14 ocak 1718 tarihli bir mektup (0.626) |
| kronoloji_almanya.js:323 · paket_08.js:3251 | `prusya` · 1 bölüm · 26157 kr | 22 Mart 1761 Dostluk ve ticaret antlaşması imzalanır | ancak bir dostluk ve ticaret antlasmasi elde etmistir 22 mart 1761 (0.61) |
| kronoloji_almanya.js:333 · paket_08.js:3261 | `prusya` · 1 bölüm · 26157 kr | Kasım 1763 Ahmed Resmî Efendi, ilk Osmanlı sefâret heyeti başkanı olarak Berlin'e gider | ahmed resmi efendi yi berlin e gondermistir bu ilk osmanli sefaret heyetinin prusya ya (0.581) |
| kronoloji_almanya.js:347 · paket_08.js:3275 | `prusya` · 1 bölüm · 26157 kr | 31 Ocak 1790 Prusya-Osmanlı ittifak antlaşması imzalanır | 31 ocak 1790 beydilli 1790 osmanli prusya ittifaki (0.585) |
| kronoloji_almanya.js:352 · paket_08.js:3280 | `prusya` · 1 bölüm · 26157 kr | 27 Temmuz 1790 Reichenbach Konvensiyonu ile Avusturya barış yapmaya zorlanır | yapmaya zorlamistir 27 temmuz 1790 reichenbach konvensiyonu avusturya (0.676) |
| kronoloji_almanya.js:426 · paket_08.js:3354 | `almanya` · 4 bölüm · 94686 kr | 1840 Osmanlı-Alman ticaret antlaşması yenilendi | osmanli alman ticaret hacmi dusuk kalmis (0.621) |
| kronoloji_almanya.js:481 · paket_08.js:3409 | `prusya` · 1 bölüm · 26157 kr | 20 Mart 1862 Zollverein ile yeni muahede yapıldı | konvensiyonu avusturya ile boylece onemli bir toprak kaybina yol acilmadan baris yapilmistir (0.343) |
| kronoloji_almanya.js:575 · paket_08.js:3503 | `almanya` · 4 bölüm · 94686 kr | 4 Ekim 1888 Deutsche Bank, Haydarpaşa-İzmit ve İzmit-Ankara hattı imtiyazlarını aldı | ekim 1888 de imzalanan imtiyaz sozlesmesiyle deutsche bank isletmeye acilmis bulunan haydarpasa izmit hattinin isletme hakkini (0.507) |
| kronoloji_almanya.js:580 · paket_08.js:3508 | `almanya` · 4 bölüm · 94686 kr | 1889 II. Wilhelm'in İstanbul ziyareti gerçekleşti | ii wilhelm in istanbul u ziyareti iliskilerin (0.753) |
| kronoloji_almanya.js:600 · paket_08.js:3528 | `almanya` · 4 bölüm · 94686 kr | 1898 sonbahar II. Wilhelm'in İstanbul-Kudüs ziyareti; kendini 300 milyon müslümanın dostu ilân etti | wilhelm in 1898 sonbaharindaki istanbul kudus ziyareti osmanli alman siyasi yakinlasmasinda onemli bir (0.533) |
| kronoloji_almanya.js:615 · paket_08.js:3543 | `almanya` · 4 bölüm · 94686 kr | 5 Mart 1903 Bağdat Demiryolu Antlaşması imzalandı | mart 1903 tarihinde imzalanan bagdat demiryolu antlasmasi ile almanya nin (0.721) |
| kronoloji_almanya.js:630 · paket_08.js:3558 | `almanya` · 4 bölüm · 94686 kr | 1913 General Liman von Sanders başkanlığındaki Alman subay grubu ordunun üst makamlarına tayin edildi | general liman von sanders baskanliginda bir alman subay grubu getirildi ve ordunun en ust makamlarinda gorevlendirildi kulturel (0.772) |
| kronoloji_almanya.js:639 · paket_08.js:3567 | `almanya` · 4 bölüm · 94686 kr | 2 Ağustos 1914 Gizli savunma ittifakı antlaşması imzalandı; Osmanlı Devleti savaşa girdi | gizli bir antlasma ile osmanli devleti savasa girdi savastaki silah arkadasligi egitim (0.555) |
| kronoloji_altinorda.js:135 · paket_11.js:140 | `kefe` · 1 bölüm · 11481 kr | 1330'larda ... çoğunluğu Cenevizli | 1330 lu … bugune ulasmistir (0.469) |
| kronoloji_altinorda.js:207 · paket_11.js:212 | `seyf-i-sarayi` · 1 bölüm · 4469 kr | 1 Eylül 1391'de tamamlandı | 1 eylul 1391 tarihinde tamamlanan (0.814) |
| kronoloji_altinorda.js:213 · paket_11.js:218 | `yarlik` · 1 bölüm · 7150 kr | 1393 tarihli Toktamış'ın Jagiello'ya yarlığı | toktamis in lehistan litvanya krali (0.506) |
| kronoloji_altinorda.js:219 · paket_11.js:224 | `seyf-i-sarayi` · 1 bölüm · 4469 kr | Süheyl ü Güldürsün ... 1394'te bitirilen mesnevi | 1394 yilinda tamamlanan mesnevinin (0.737) |
| kronoloji_altinorda.js:231 · paket_11.js:236 | `saray--sehir` · 1 bölüm · 4501 kr | Timur'un seferleri (1395-1396) Saray'ı ... devastated; Sarây-ı Cedîd harabe | 1395 1396 da vuku bulan timur un seferi saray dahil … saray i cedid 1330 larda (0.57) |
| kronoloji_altinorda.js:243 · paket_11.js:248 | `toktamis-han` · 1 bölüm · 5350 kr | Edigey'in kuvvetlerine 1399'da yenilmesi | edigey ile olan mucadelesi nogay baskirt (0.4) |
| kronoloji_altinorda.js:273 · paket_11.js:278 | `kefe` · 1 bölüm · 11481 kr | 1434: Hacı Giray Cenevizliler'i yener, meşrû hâkim olur | haci giray zamaninda kefe cenevizlileri ne karsi kirim hanligi (0.591) |
| kronoloji_altinorda.js:279 · paket_11.js:284 | `kazan-hanligi` · 1 bölüm · 10479 kr | 1437'de Uluğ Muhammed Han ... Saray'dan ayrılıp Kazan'a geldi | ise 1445 te ulug muhammed han in oglu … saray dan ayrilarak kazan iline gelmesiyle (0.726) |
| kronoloji_altinorda.js:303 · paket_11.js:308 | `kefe` · 1 bölüm · 11481 kr | Haziran 1475: Gedik Ahmed Paşa 100 gemilik donanmayla fetheder | sultan mehmed gedik ahmed pasa yi 100 parcalik bir donanma ile kefe seferine (0.628) |
| kronoloji_arabistan.js:114 · paket_12.js:1950 | `yemen` · 5 bölüm · 94656 kr | 284/897: İmam Hâdî-İlelhak Yahyâ b. Hüseyin Sa'de'ye geldi, Zeydî imâmetini tesis etti. | imam hadi ilelhak yahya b huseyin in 284 te 897 sa de ye gelip bazi inkitalarla (0.654) |
| kronoloji_arabistan.js:120 · paket_12.js:1956 | `yemen` · 5 bölüm · 94656 kr | 288/901: Yahyâ b. Hüseyin San'a'yı ele geçirdi. | yahya b huseyin 288 901 yilinda san a yi eline gecirdiyse de ya (0.673) |
| kronoloji_arabistan.js:129 · paket_12.js:1965 | `yemen` · 5 bölüm · 94656 kr | Muharrem 934 (Ekim 1527): Aden Osmanlılar tarafından alındı | muharrem 934 ekim 1527 boylece aden ve yemen i hakimiyet altina (0.622) |
| kronoloji_arabistan.js:135 · paket_12.js:1971 | `yemen` · 5 bölüm · 94656 kr | 1547: San'a ele geçirildi. | san a ele gecirilerek 1547 (0.68) |
| kronoloji_arabistan.js:141 · paket_12.js:1977 | `yemen` · 5 bölüm · 94656 kr | 1567: Mutahhar isyan etti, Yemen ikiye bölündü. | etti cafer pasa mutahhar ailesinden isyan eden abdurrahim i ele (0.43) |
| kronoloji_arabistan.js:147 · paket_12.js:1983 | `yemen` · 5 bölüm · 94656 kr | Mart 1568: İki eyalet birleştirildi. | mart 1568 de iki eyalet birlestirilerek merkezi zebid (0.759) |
| kronoloji_arabistan.js:153 · paket_12.js:1989 | `yemen` · 5 bölüm · 94656 kr | 1608: İmam Kāsım b. Muhammed ile on senelik antlaşma yapıldı. | anlasmazlik ise yapilan on senelik bir antlasma ile cozumlendi 1608 cafer pasa osmanli (0.417) |
| kronoloji_arabistan.js:159 · paket_12.js:1995 | `yemen` · 5 bölüm · 94656 kr | 1028/1619: Mehmed Paşa ve Zeydîler arasında on yıllık antlaşma imzalandı. | mehmed pasa ile zeydiler arasinda on yil surmesi planlanan bir antlasma imzalandi 1028 1619 (0.728) |
| kronoloji_arabistan.js:165 · paket_12.js:2001 | `yemen` · 5 bölüm · 94656 kr | 1626: İmam Müeyyed barış bozdu, San'a kuşatıldı. | da 1626 imam mueyyed ile baris bozuldugundan zeydiler san a nin kuzey (0.667) |
| kronoloji_arabistan.js:171 · paket_12.js:2007 | `yemen` · 5 bölüm · 94656 kr | 1629: Haydar Paşa San'a'yı bırakmak zorunda kaldı. | bir anlasma ile san a yi imam mueyyed e birakmak zorunda kaldi (0.673) |
| kronoloji_arabistan.js:183 · paket_12.js:2019 · yer_yama.js:438 | `yemen` · 5 bölüm · 94656 kr | 10 Cemâziyelevvel 1045 (22 Ekim 1635): Mustafa Bey Muhâ'dan ayrıldı, Osmanlı çekilişi tamamlandı. | eman istedi mustafa bey 10 cemaziyelevvel 1045 te 22 ekim 1635 kendisiyle (0.509) |
| kronoloji_arabistan.js:189 · paket_12.js:2025 | `yemen` · 5 bölüm · 94656 kr | 1644-1676: Mütevekkil İsmâil b. Kāsım hüküm sürdü. | mutevekkil ismail b kasim in 1644 1676 yonetimi (0.574) |
| kronoloji_arabistan.js:195 · paket_12.js:2031 | `yemen` · 5 bölüm · 94656 kr | 1681: Ahmed b. Hasan Yemen'i Osmanlı adına yönettiğini belirtti. | 1681 muhaliflerine karsi kendisinin yemen i osmanli sultani adina yonettigini belirtmesi dikkat cekicidir (0.639) |
| kronoloji_arabistan.js:201 · paket_12.js:2037 | `yemen` · 5 bölüm · 94656 kr | 1702: Süleyman Paşa Yemen İmamı Mehdî'ye elçi yolladı. | 1702 yemen imami mehdi ye elci yollamasina karsilik imam (0.685) |
| kronoloji_arabistan.js:211 · paket_12.js:2047 | `yemen` · 5 bölüm · 94656 kr | 1849: San'a ele geçirme çabası başarısız oldu. | hatta san a daki 7 kolordu (0.429) |
| kronoloji_arabistan.js:217 · paket_12.js:2053 | `yemen` · 5 bölüm · 94656 kr | 1871: Ahmed Muhtar Paşa San'a'yı aldı, vilâyet düzeni kurdu. | a da yapildi ozdemir pasa san a nin babussuub (0.412) |
| kronoloji_arabistan.js:223 · paket_12.js:2059 | `yemen` · 5 bölüm · 94656 kr | 1889: Zeydîler isyan etti. | zeydiler isyan etti isyani (0.76) |
| kronoloji_arabistan.js:229 · paket_12.js:2065 | `yemen` · 5 bölüm · 94656 kr | 1895: Hüseyin Hilmi Paşa isyanı bastırdı. | huseyin hilmi pasa nin insa ettirdigi (0.737) |
| kronoloji_arabistan.js:235 · paket_12.js:2071 | `yemen` · 5 bölüm · 94656 kr | 1902: İmam Yahyâ Hamîdüddin ayaklanmayı başlattı. | 1902 de imam yahya hamiduddin in baslattigi ayaklanma sirasinda (0.727) |
| kronoloji_arabistan.js:247 · paket_12.js:2083 | `yemen` · 5 bölüm · 94656 kr | 1905: Ahmed Feyzi Paşa San'a'ya girdi. | ahmed feyzi pasa 15 temmuz 1 eylul 1905 (0.56) |
| kronoloji_arabistan.js:253 · paket_12.js:2089 | `yemen` · 5 bölüm · 94656 kr | 13 Ekim 1911: Ahmed İzzet Paşa ve İmam Yahyâ antlaşma yaptı. | imam yahya ile 13 ekim 1911 de bir antlasma (0.515) |
| kronoloji_arabistan.js:265 · paket_12.js:2101 | `yemen` · 5 bölüm · 94656 kr | 1920: İmam Yahyâ bağımsız Mütevekkilî Krallığını kurdu. | daha sonra yemen mutevekkili kralligi adini aldi ve imam yahya (0.522) |
| kronoloji_arabistan.js:273 · paket_12.js:2109 | `uman` · 1 bölüm · 18381 kr | 1507: Portekizli general Portekiz baskısı başladı. | ve surekli gelisme kaydetti (0.347) |
| kronoloji_arabistan.js:279 · paket_12.js:2115 | `yarubiler` · 1 bölüm · 4872 kr | 1615 - Ya'rubîler hanedanı kuruldu... Alternatif kuruluş tarihi 1624 (1034 hicrî). | ya rubiler i konu alan … te 1624 biat edildigi (0.46) |
| kronoloji_arabistan.js:279 · paket_12.js:2115 | `uman` · 1 bölüm · 18381 kr | 1624: Nâsır b. Mürşid... Ya'rubî hânedanını kurdu. | nasir b mursid 1615 … ya rubi hanedanindan nasir (0.75) |
| kronoloji_arabistan.js:285 · paket_12.js:2121 | `yarubiler` · 1 bölüm · 4872 kr | 1630 - Portekiz barış antlaşması imzalandı. | sevkedince portekizliler baris antlasmasi yapmak zorunda kaldi 1630 (0.617) |
| kronoloji_arabistan.js:291 · paket_12.js:2127 | `yarubiler` · 1 bölüm · 4872 kr | 1633 - Culfâr'da İran birliklerine karşı başarılı operasyon düzenlendi. | culfar daki re sulhayme iran birliklerine karsi 1633 te ali b ahmed (0.593) |
| kronoloji_arabistan.js:297 · paket_12.js:2133 | `uman` · 1 bölüm · 18381 kr | 1650, 26 Ocak: Maskat, Portekiz'den alındı. | taki sultan kabus universitesi ulkenin (0.39) |
| kronoloji_arabistan.js:303 · paket_12.js:2139 | `yarubiler` · 1 bölüm · 4872 kr | 1680 - I. Sultân b. Seyf yönetimi sonlandı; oğlu Bel'arab yönetimi devraldı. | dan sonra yerine oglu bel arab ebu l arab gecti 1680 1692 bel arab mimari (0.42) |
| kronoloji_arabistan.js:309 · paket_12.js:2145 | `yarubiler` · 1 bölüm · 4872 kr | 1692 - Bel'arab'ın kardeşi Seyf b. Sultân iktidara geçti, yönetim merkezi Rustâk'a alındı. | arab in kardesi seyf b sultan 1692 1711 yonetim merkezini tekrar rustak a aldi seyf (0.726) |
| kronoloji_arabistan.js:315 · paket_12.js:2151 | `yarubiler` · 1 bölüm · 4872 kr | 1711 - Seyf b. Sultân vefat etti; oğlu II. Sultân yönetimi devraldı. | seyf in yerine gecen oglu ii sultan doneminde 1711 1720 uman (0.557) |
| kronoloji_arabistan.js:321 · paket_12.js:2157 | `yarubiler` · 1 bölüm · 4872 kr | 1720 - II. Sultân öldü; on iki yaşındaki oğlu II. Seyf'in yönetimi tartışmalar başlattı. | acti ii sultan in 1133 te 1720 olumunden sonra yerine on iki yasindaki oglu ii seyf in (0.56) |
| kronoloji_arabistan.js:327 · paket_12.js:2163 | `yarubiler` · 1 bölüm · 4872 kr | 1728 - İç savaş sonlanarak II. Seyf'in imâmeti kabul edildi. | 1141 1728 yilinda ii seyf in imamligi kabul edildi ii seyf in iran (0.607) |
| kronoloji_arabistan.js:333 · paket_12.js:2169 | `yarubiler` · 1 bölüm · 4872 kr | 1743 - II. Seyf vefat etti; damadı Ahmed b. Saîd iktidarı ele geçirerek Bû Saîd hanedanı dönemini başlattı. | seyf in 1156 da 1743 vefatiyla damadi olan suhar valisi ahmed b said iktidari ele gecirdi ve (0.56) |
| kronoloji_arabistan.js:345 · paket_12.js:2181 | `uman` · 1 bölüm · 18381 kr | 1775-1776: Kerim Khan Zend Basra'yı kuşattı; Uman, Osmanlı Basra'sına yardım etti. | in osmanlilar a bagli basra sehrini kusatmasi olayi ile atildi 1775 1776 (0.36) |
| kronoloji_arabistan.js:351 · paket_12.js:2187 | `uman` · 1 bölüm · 18381 kr | 18 Ocak 1798: İngiltere ile kavilnâme adlı anlaşma imzalandı, İngilizler Maskat'ta temsilcilik açtı. | anlasmasi olmasina ragmen ingilizler maskat ta bir temsilcilik actilar 18 ocak 1798 ayni donemlerde seyyid sultan b (0.462) |
| kronoloji_arabistan.js:357 · paket_12.js:2193 | `said-b-sultan` · 1 bölüm · 3455 kr | 1804 - Babasının deniz savaşında ölümünün ardından tahta çıktı; Uman, Basra körfezi adaları ve Zengibar topraklarını kardeşi Sâlim'le birlikte yönetti. | 1804 yilinda bir deniz savasinda korsanlar tarafindan oldurulmesinin ardindan kardesi salim ile birlikte uman hurmuz bogazi ndaki bazi adalar iran (0.479) |
| kronoloji_arabistan.js:363 · paket_12.js:2199 | `said-b-sultan` · 1 bölüm · 3455 kr | 1806 - Suûdîler'in desteklediği kuzeni Bedr b. Sayf'ı bertaraf ederek iktidarını sağlamlaştırdı. | in tahti ele gecirmesi icin destekledikleri kuzeni bedir b seyf i bertaraf ederek yonetimdeki gucunu pekistirdi (0.68) |
| kronoloji_arabistan.js:369 · paket_12.js:2205 | `said-b-sultan` · 1 bölüm · 3455 kr | 1821 - Kardeşi Sâlim'in ölümüyle tek hükümdar oldu. | kardesi salim ile birlikte uman hurmuz bogazi ndaki (0.525) |
| kronoloji_arabistan.js:375 · paket_12.js:2211 · yer_yama.js:458 | `uman` · 1 bölüm · 18381 kr | 1824: Saîd b. Sultân hac yaptı; Muhammed Ali Paşa tarafından onurlandırıldı. | 1824 te hacca giden seyyid said e mehmed ali pasa mekke de buyuk bir (0.443) |
| kronoloji_arabistan.js:381 · paket_12.js:2217 | `said-b-sultan` · 1 bölüm · 3455 kr | 1828 - Zengibar'a taşındı, fildişi ve köle ticareti için önemli bir merkez olarak tanıdı. | zengibar a gitti zengibar in afrika nin ic bolgelerinden fildisi ve kolelerin sahile tasinip (0.475) |
| kronoloji_arabistan.js:387 · paket_12.js:2223 | `said-b-sultan` · 1 bölüm · 3455 kr | 1837 - Mazruî hanedanını yenerek Mombasa'yı fethetti. | 1837 de mombasa yi ele gecirerek merzu hanedanini yiktiktan sonra gerceklestirebildi (0.448) |
| kronoloji_arabistan.js:393 · paket_12.js:2229 | `said-b-sultan` · 1 bölüm · 3455 kr | 1840 - Zengibar'ı resmî başkent ilan etti; Mogadişu'dan Cape Delgado'ya nüfuz genişletti. | 1840 boylece dogu afrika sahillerinde sinirlarini genisletti ve nufuzunu mogadisu dan kap delgado ya kadar uzanan bolgedeki (0.462) |
| kronoloji_arabistan.js:399 · paket_12.js:2235 | `uman` · 1 bölüm · 18381 kr | 1850: Saîd b. Sultân, Osmanlı Cidde valisi Hasib Paşa'yı ziyaret etti. | said osmanli devleti nin cidde valisi hasib pasa yi ziyaret etti ba (0.782) |
| kronoloji_arabistan.js:405 · paket_12.js:2241 | `uman` · 1 bölüm · 18381 kr | 1856: Saîd b. Sultân'ın ölümüyle ülke, Zengibar'da kalan oğlu Mâcid ile Maskat'ta kalan oğlu Süveynî arasında paylaştırıldı. | suveyni oglu salim tarafindan maskat ta olduruldu 1866 sultan salim in olumuyle 1868 yerine gecen azzan b kays uman da bu said hanedanindan (0.386) |
| kronoloji_arabistan.js:405 · paket_12.js:2241 | `said-b-sultan` · 1 bölüm · 3455 kr | 1856 - Maskat'tan Zengibar'a deniz yolculuğu sırasında öldü, Zengibar'a gömüldü. | 1856 yilinda maskat tan zengibar a gitmek icin ciktigi deniz yolculugu sirasinda vefat etti ve (0.671) |
| kronoloji_arabistan.js:411 · paket_12.js:2247 | `uman` · 1 bölüm · 18381 kr | 1862: İngiltere, Fransa ve Almanya'nın kararıyla Zengibar ve Uman birbirinden bağımsız iki ayrı devlet olarak tanındı. | ingiltere fransa ve almanya gibi ulkelerin karari ile her iki taraf bagimsiz birer ulke olarak tanindi eldeki (0.643) |
| kronoloji_arabistan.js:417 · paket_12.js:2253 | `uman` · 1 bölüm · 18381 kr | 1866: Sultan Thuwaini murdered by son Salim. | sultan kabus un babasi olan said b (0.447) |
| kronoloji_arabistan.js:423 · paket_12.js:2259 | `uman` · 1 bölüm · 18381 kr | 1868: Azzam b. Kays becomes last imam from Bu Said line. | 1868 yerine gecen azzan b kays uman da bu said hanedanindan (0.554) |
| kronoloji_arabistan.js:431 · paket_12.js:2267 · yer_yama.js:463 | `lahsa` · 1 bölüm · 11986 kr | 1547: Osmanlı Devleti bölgeyi Basra beylerbeyiliğine bağladı. | osmanli devleti bolgeye onceleri vergileri duzenlemek ve (0.591) |
| kronoloji_arabistan.js:437 · paket_12.js:2273 | `lahsa` · 1 bölüm · 11986 kr | 1553 sonrası: Lahsâ beylerbeyiliğe yükseltildi; Âl-i Hamîd kabilesi yönetimde. | oglu abdulaziz i lahsa ya gonderdi arkasindan da al i resid e karsi elde (0.435) |
| kronoloji_arabistan.js:467 · paket_12.js:2303 | `lahsa` · 1 bölüm · 11986 kr | 1796: Emîr Suûd tarafından bölge doğrudan Dir'iye'ye bağlandı. | bulundular bunun uzerine bolge dogrudan dir iye ye baglandi 1796 ayni yil bagdat (0.614) |
| kronoloji_arabistan.js:473 · paket_12.js:2309 | `lahsa` · 1 bölüm · 11986 kr | 1818: Kavalalı Mehmed Ali Paşa'nın oğlu İbrâhim Paşa'nın harekâtı; Suudi liderleri idam edildi. | kavalali mehmed ali pasa ya emir verdi mehmed ali pasa oglu ibrahim pasa yi necid (0.566) |
| kronoloji_atina_dukaligi.js:84 · paket_12.js:2404 | `atina` · 2 bölüm · 28306 kr | 1402: Antonio tarafından Venediklilerden geri alındı | antonio tarafindan geri alinmasina kadar ellerinde (0.594) |
| kronoloji_atina_dukaligi.js:89 · paket_12.js:2409 | `atina` · 2 bölüm · 28306 kr | 1435-1455: II. Nerio dönemi | ii nerio 1435 1455 osmanli devleti ne tabi (0.478) |
| kronoloji_balkan.js:341 · paket_12.js:2806 | `balkan-savasi` · 1 bölüm · 12919 kr | (8 Ekim 1912 - 29 Eylül 1913) | 8 ekim 1912 de karadag in (0.56) |
| kronoloji_balkan.js:411 · paket_12.js:2876 | `bulgaristan` · 5 bölüm · 95575 kr | 1393'te Tırnova düştü, Bulgar Krallığı'na son verildi. | yi ele gecirerek bulgar kralligi na son verdiler kral sisman ve bulgar (0.574) |
| kronoloji_balkan.js:429 · paket_12.js:2894 | `bulgaristan` · 5 bölüm · 95575 kr | 1396'da Vidin'in düşüşüyle Osmanlı hâkimiyeti tamamlandı. | avarlar in hakimiyeti altinda erimislerdir hazar (0.404) |
| kronoloji_balkan.js:471 · paket_12.js:2936 | `midhat-pasa` · 1 bölüm · 22142 kr | Ekim 1864'te Tuna vilâyetine ... vali tayin edildi ... Mart 1865'te Türkçe ve Bulgarca Tuna gazetesi yayımlanmaya başladı. | ekim 1864 te kabul edilen … turkce ve bulgarca tuna gazetesini cikarmasi ve guvenlik arttirici tedbirlerdeki (0.681) |
| kronoloji_balkan.js:477 · paket_12.js:2942 | `bulgaristan` · 5 bölüm · 95575 kr | 11 Mart 1870'te müstakil Bulgar kilisesi kuruldu. | evi 11 mart 1870 tarihinde de mustakil bulgar kilisesi kuruldu bulgar (0.821) |
| kronoloji_balkan.js:531 · paket_12.js:2996 | `berlin-antlasmasi` · 1 bölüm · 5576 kr | Bulgaristan toprakları üç bölgeye ayrılacaktı. Birinci bölge Osmanlı Devleti'ne tâbi, iç işlerinde serbest, prensi halk tarafından seçilen ... Tuna ile Balkanlar arasında Sofya, Niğbolu, Ziştovi, Rusçuk, Silistre, Varna, Şumnu, Lofça ve Tırnova gibi şehirleri içine alan muhtar bir Bulgaristan Prensl | tayin edilen osmanli askerinin bulunmadigi sinirlari daraltilmis bir bulgaristan prensligi idi ikinci bolge idari yonden bagimsiz olmakla beraber siyasi ve aske (0.625) |
| kronoloji_balkan.js:596 · paket_12.js:3061 | `bulgaristan` · 5 bölüm · 95575 kr | 8 Ekim 1912'de Karadağ'ın harekâtıyla başladı | 8 ekim 1912 de karadag in arnavutluk ve (0.69) |
| kronoloji_balkan.js:614 · paket_12.js:3079 | `bulgaristan` · 5 bölüm · 95575 kr | 30 Mayıs 1913: Londra Antlaşması imzalandı. | mayis 1913 tarihinde imzalanan londra antlasmasi (0.629) |
| kronoloji_balkan.js:656 · paket_12.js:3121 | `bulgaristan` · 5 bölüm · 95575 kr | Neully Antlaşması (27 Kasım 1919): Batı Trakya tamamen kaybedildi. | neully antlasmasi yla 27 kasim 1919 bulgaristan sirplar lehine (0.677) |
| kronoloji_balkan.js:753 · paket_12.js:3218 | `bosna-hersek` · 1 bölüm · 48610 kr | ...Stjepan Vukčić-Kosača, kendisini St. Sava'nın Herceki yani dükü ilân etmiş... | isyan edip kendisini st sava nin herseki yani duku ilan eden stjepan vukcic kosaca nin (0.684) |
| kronoloji_balkan.js:773 · paket_12.js:3238 | `bosna-hersek` · 1 bölüm · 48610 kr | ...Fâtih Sultan Mehmed'in ordusunun Bosna'nın fethini tamamladı... | osmanli ordusu suratle bosna nin fethini tamamladi osmanli ordusunun cekilmesinden sonra macar (0.519) |
| kronoloji_cok_arnavut.js:55 · paket_30.js:4208 | `iskender-bey` · 1 bölüm · 13113 kr | 26 Mart 1451'de yapılan anlaşmaya göre İskender Bey kralın tâbii oldu. İskender Bey yılda 1500 duka tahsisat alacaktı. | gore iskender bey kralin tabii oldu haziran ayinda kralin askerleri akcahisar a yerlestiler iskender bey yilda 1500 duka tahsisat alacakti iskender bey (0.614) |
| kronoloji_cok_arnavut.js:221 · paket_30.js:4374 | `prizren` · 1 bölüm · 13453 kr | Ocak 1881'de Ömer Prizreni başkanlığında geçici Arnavut hükümeti teşkil edildi. Nisan 1881'de Derviş Paşa kumandasındaki Osmanlı kuvvetleri Kosova'da … bölgeleri geri aldı. | de prizren arnavut cemiyeti kuruldu ocak 1881 de omer prizreni baskanliginda gecici arnavut hukumeti teskil edildi bu donemde uskup dahil kosova (0.706) |
| kronoloji_cok_bosna.js:211 · paket_30.js:4612 | `bosna-eyaleti` · 1 bölüm · 5376 kr | Mayıs 1865'te ise vezir Topal Osman Paşa'nın valiliği sırasında yeni bir idarî düzenleme düşünüldü. 1866'da vilâyet olarak adlandırılan Bosna … yedi sancağa ayrılmıştı. | yeni bir idari duzenleme yapildi mayis 1865 te ise vezir topal osman pasa nin valiligi sirasinda yeni bir idari duzenleme dusunuldu yeni teskilat vilayet kaza (0.789) |
| kronoloji_cok_ermeni.js:49 · paket_30.js:4693 | `millet` · 2 bölüm · 40275 kr | Eçmiyazin, Sîs ve Ahtamar katolikoslukları | sis ve ahtamar katolikosluklarina ve (0.805) |
| kronoloji_cok_ermeni.js:65 · paket_30.js:4709 | `revan` · 1 bölüm · 14177 kr | Şah Tahmasb 1731 Martında Revan'ı kuşattıysa da alamadı. 1732'de imzalanan, ancak kısa süren anlaşma ile Revan'ın Osmanlı toprağı içinde kaldığı tescil edildi | karsisinda basarisiz oldu 1732 de imzalanan ancak kisa suren anlasma ile revan in osmanli topragi icinde kaldigi tescil edildi fakat nadir sah in iran da idarey (0.695) |
| kronoloji_cok_ingiltere.js:82 · paket_30.js:1328 | `baltalimani-muahedesi` · 1 bölüm · 9613 kr | 16 Ağustos 1838 tarihinde yapılan Osmanlı-İngiliz ticaret muahedesi | devleti ilki 1838 de yapilan baltalimani muahedelerinin (0.508) |
| kronoloji_cok_once1281_avrupa.js:124 | `usbune` · 1 bölüm · 5686 kr | considerat el fundador del regne portuguès, que derrotà els almoràvits a Ourique (1139) i amplià l’extensió del seu regne | l eftas el mansur eftasiler devleti ni kurdu bu donemde usbune abbadiler in topraklarini endulus un bati istikametinde genisletme arzulari (0.281) |
| kronoloji_cok_once1281_avrupa.js:190 | `muvahhidler` · 1 bölüm · 16344 kr | Acció bèl·lica que tingué lloc el 16 de juliol de 1212 a l’altiplà de Las Navas de Tolosa (La Carolina, Jaén). | el lahmi isa b abdulaziz el cezuli ibnu l murahhal gibi dilcilerle ebu l abbas el ceravi kartacenni ibn habbaze ve ozellikle endulus (0.353) |
| kronoloji_cok_once1281_avrupa.js:198 | `bulgaristan` · 5 bölüm · 95575 kr | S vlasti ga je 1218. svrgnuo Ivan Asen II. | sonra boril 1207 1218 ve ii ivan asen 1218 1241 zamaninda icte (0.451) |
| kronoloji_cok_romanya.js:52 · paket_30.js:2742 | `romanya` · 2 bölüm · 27380 kr | 1538 Boğdan seferi sonucunda | bogdan seferi sonucunda tuna (0.821) |
| kronoloji_cok_romanya.js:70 · paket_30.js:2760 | `hotin` · 1 bölüm · 6754 kr | 1657'de Erdel Voyvodası II. [Rákóczi] | de erdel voyvodasi ii gyorgy rakoczi (0.829) |
| kronoloji_cok_sirbistan.js:65 · paket_30.js:3368 | `semendire` · 1 bölüm · 21584 kr | Temmuz 1427'de … Stefan Lazareviç … öldü … Curac Brankoviç … Belgrad'ı Macarlar'a iade etti. 1428'de Osmanlılar Đurađ'ın başşehri olan Kruševac'ı (Alacahisar) aldı. | teslim etmeyi tercih etti 1428 de osmanlilar ura in bassehri olan krusevac i alacahisar aldi cagdas tarihciler konstantin mihailovic ve (0.798) |
| kronoloji_cok_ukrayna.js:42 · paket_30.js:5710 | `kamanice` · 1 bölüm · 4510 kr | 18-23 Ekim 1672'deki Bucaş ve İzvança antlaşmaları | 18 23 ekim 1672 deki bucas bucac ve izvanca zuravno antlasmalari osmanlilar (0.8) |
| kronoloji_dogu_afrika.js:114 · paket_12.js:3637 | `evfat` · 1 bölüm · 4802 kr | Zeyla‘ limanına giden ticaret yollarını elinde tutuyor ... Dâvaro, Erâbînî, Hedye, Şerhâ, Bâlî, Dâre | zeyla limani na baglayan ticaret yolunun evfat … erabini hedye serha bali ve dare (0.743) |
| kronoloji_dogu_afrika.js:164 · kronoloji_dogu_afrika.js:174 · paket_12.js:3687 · paket_12.js:3697 | `evfat` · 1 bölüm · 4802 kr | Adal Emirliği Evfât'ın yerini aldı | emirligi onun yerini aldi evfat emirleri (0.595) |
| kronoloji_dogu_afrika.js:269 · paket_12.js:3792 | `harar` · 1 bölüm · 12962 kr | Nûr b. el-Mücâhid (Sâhibü'l-fethi's-sânî) zamanında şehrin surları yeniden yapıldı | b vezir el mucahid i buyuk imam olarak tanidi ve onunla evlendi sahibu l feth es sani (0.402) |
| kronoloji_dogu_afrika.js:913 · paket_12.js:4436 | `makdisu` · 1 bölüm · 11311 kr | 1698 yılında Uman Sultanı Seyf b. Sultân Mombasa'yı alınca Makdişu da Umanlılara geçti | 1698 yilinda uman sultani seyf b sultan mombasa yi portekizliler den alinca makdisu ve (0.784) |
| kronoloji_dogu_afrika.js:924 · paket_12.js:4447 | `somali` · 2 bölüm · 20945 kr | VII/XIII. yüzyıl: Ebû Bekir b. Fahreddin Makdişu'da sultanlık kurdu | lideri ebu bekir b fahreddin makdisu da bir sultanlik kurmaya muvaffak oldu makdisu xiii (0.671) |
| kronoloji_dogu_afrika.js:964 · paket_12.js:4487 | `makdisu` · 1 bölüm · 11311 kr | 1823 yılında Makdişu ismen Uman Sultanı Seyyid Saîd b. ... bağlanmış fakat yerli reisler yönetim devam ettirmiştir | yerli reislerinin elinde kaldi 1843 te makdisu (0.703) |
| kronoloji_dogu_afrika.js:1201 · paket_12.js:4724 | `zengibar` · 1 bölüm · 29185 kr | 1890: Helgoland-Zanzibar Antlaşması İngiliz himayesini kurar | helgoland zanzibar antlasmasi yla zengibar in ingiliz (0.661) |
| kronoloji_fransa.js:290 · paket_08.js:2198 | `fransa` · 6 bölüm · 98438 kr | 1543'te Nice'ye karşı ortak deniz harekâtı | te nice sehrine karsi ortak bir deniz harekati (0.818) |
| kronoloji_fransa.js:460 · paket_08.js:2368 | `fransa` · 6 bölüm · 98438 kr | 1740'ta I. Mahmud'un kapitülasyonları devamlılık kazandırması | i mahmud tarafindan devamlilik kazandirildi 1740 fransa nin (0.605) |
| kronoloji_fransa.js:630 · paket_08.js:2538 | `fransa` · 6 bölüm · 98438 kr | 1798'de (1 Temmuz) Napolyon'un Mısır işgali | 1 temmuz 1798 de napolyon misir i isgal (0.725) |
| kronoloji_fransa.js:695 · paket_08.js:2603 | `fransa` · 6 bölüm · 98438 kr | Ekim 1808'de Erfurt'ta Napolyon-Çar Aleksandr görüşmesi | ekiminde erfurt ta car aleksandr ile bulusan (0.667) |
| kronoloji_fransa.js:740 · paket_08.js:2648 | `fransa` · 6 bölüm · 98438 kr | 1827 (Navarin): müttefik donanmasının Osmanlı donanmasını yakması | donanmasini yakan muttefik donanmasinda fransiz (0.55) |
| kronoloji_fransa.js:745 · paket_08.js:2653 | `fransa` · 6 bölüm · 98438 kr | 24 Nisan 1829: Yunanistan bağımsızlığı Bâbıâli'ye zorla kabul ettirildi | nisan 1829 da babiali ye zorla kabul ettirildi (0.776) |
| kronoloji_fransa.js:750 · paket_08.js:2658 | `fransa` · 6 bölüm · 98438 kr | 1830 (14 Haziran): Fransa'nın Cezayir işgali | i umutlandirirken fransa nin da (0.5) |
| kronoloji_fransa.js:775 · paket_08.js:2683 | `fransa` · 6 bölüm · 98438 kr | 15 Temmuz 1840: Londra Antlaşması (Osmanlı toprak bütünlüğü korunması) | londra antlasmasi ni imzalayarak osmanli devleti nin toprak butunlugunu korumaya bunun icin (0.633) |
| kronoloji_fransa.js:965 · paket_08.js:2873 | `fransa` · 6 bölüm · 98438 kr | 16 Mayıs 1916: Sykes-Picot Antlaşması | sykes picot 16 mayis 1916 saint jean de maurienne (0.541) |
| kronoloji_fransa.js:980 · paket_08.js:2888 | `fransa` · 6 bölüm · 98438 kr | 17 Nisan 1917: Saint Jean de Maurienne Antlaşması | 16 mayis 1916 saint jean de maurienne 17 nisan 1917 ve (0.686) |
| kronoloji_fransa.js:995 · paket_08.js:2903 | `fransa` · 6 bölüm · 98438 kr | 25 Nisan 1920: San Remo Antlaşması | san remo 25 nisan 1920 antlasmalarini (0.657) |
| kronoloji_fransa.js:1005 · paket_08.js:2913 | `fransa` · 6 bölüm · 98438 kr | 10 Ağustos 1920: Sevr Antlaşması | sevr antlasmasi 10 agustos 1920 sadece onceki antlasmalarin (0.622) |
| kronoloji_fransa.js:1010 · paket_08.js:2918 | `fransa` · 6 bölüm · 98438 kr | 20 Ekim 1921: Ankara Antlaşması (Hatay'ın özel statüsü) | 20 ekim 1921 de ankara hukumetiyle ankara antlasmasi ni (0.598) |
| kronoloji_gurcistan.js:163 · paket_12.js:5771 | `tiflis` · 1 bölüm · 18547 kr | Lala Mustafa Paşa'nın kuvvetleri 24 Ağustos 1578'de şehre girdi | lala mustafa pasa kumandasindaki osmanli ordusu 24 agustos ta tiflis e (0.556) |
| kronoloji_habsburg.js:205 · paket_06.js:210 | `avusturya` · 5 bölüm · 51211 kr | 1593-1606 arası devam eden savaş, nihayet Zitvatorok Antlaşması (1606) ile sona ermiştir | savas nihayet zitvatorok antlasmasi 1606 ile sona ermistir buna gore padisah yalniz protokol (0.655) |
| kronoloji_ispanya.js:415 · paket_09.js:3015 | `moriskolar` · 1 bölüm · 17928 kr | 1609-1614 yılları arasında... 300.000'i aşmıştır... I. Ahmed... himaye fermanları gönderdi | 1481 1517 yillari arasinda ulke genelinde 13 000 … himaye altina alinmasini emreden fermanlar gonderdi (0.742) |
| kronoloji_italya.js:270 · paket_09.js:1785 | `napoli` · 1 bölüm · 7298 kr | Otranto, Osmanlı çıkarmasıyla kısa süreliğine işgal edildi (1481'de geri alındı) | osmanli devleti karsilik olarak kucuk huseyin efendi yi napoli sehrine gonderdi buyuk bir merasimle (0.432) |
| kronoloji_kuzeyafrika.js:55 · paket_12.js:8818 | `meriniler` · 1 bölüm · 36051 kr | 592/1196'da Abdülhak tahta geçti, hanedanın kurucusu olarak kabul edildi | liderlik hanedanin kurucusu olarak kabul edilen oglu ebu muhammed abdulhakk a gecti 592 1196 (0.515) |
| kronoloji_kuzeyafrika.js:60 · paket_12.js:8823 | `meriniler` · 1 bölüm · 36051 kr | 613/1216'da 20.000 kişilik Muvahhid ordusunu yenilgiye uğrattı | 613 1216 yilinda uzerlerine gonderilen 20 000 kisilik muvahhid ordusunu yenip taze yi (0.707) |
| kronoloji_kuzeyafrika.js:65 · paket_12.js:8828 | `meriniler` · 1 bölüm · 36051 kr | 653/1255'te 80.000 kişilik Muvahhid ordusunu mağlûp etti | 653 1255 yilinda 80 000 kisilik muvahhid ordusunu fas yakinlarinda maglup etti muvahhidler (0.74) |
| kronoloji_kuzeyafrika.js:70 · paket_12.js:8833 | `meriniler` · 1 bölüm · 36051 kr | 656/1258'de Ebû Yûsuf Ya'kūb saltanata geçti | yahya 656 1258 ebu yusuf ya kub (0.667) |
| kronoloji_kuzeyafrika.js:75 · paket_12.js:8838 | `meriniler` · 1 bölüm · 36051 kr | 668/1270'te Merakeş ele geçirilerek Muvahhidler Devleti sona erdirildi | sehre girdi ve muvahhidler devleti ne son verdi 668 1270 bu olay meriniler (0.569) |
| kronoloji_kuzeyafrika.js:80 · paket_12.js:8843 | `meriniler` · 1 bölüm · 36051 kr | 672/1273-74'te Tanca ve Sebte zaptedildi | 672 de 1273 74 once tanca yi ardindan (0.649) |
| kronoloji_kuzeyafrika.js:85 · paket_12.js:8848 | `meriniler` · 1 bölüm · 36051 kr | 15 Rebîülevvel 674/8 Eylül 1275'te İsticce savaşında Kastilya ordusunu mağlûp etti | 15 rebiulevvel 674 8 eylul 1275 muslumanlarin endulus te tutunmalari ve (0.575) |
| kronoloji_kuzeyafrika.js:90 · paket_12.js:8853 | `meriniler` · 1 bölüm · 36051 kr | 8 Cemâziyelevvel 741/30 Ekim 1340'ta Tarîf yakınında XI. Alfonso ve IV. Alfonso'nun birleşik kuvvetlerine yenildi | civarinda kastilya krali xi alfonso ve portekiz krali iv alfonso nun birlesik kuvvetleri karsisinda yenildi 8 cemaziyelevvel 741 30 ekim 1340 (0.532) |
| kronoloji_kuzeyafrika.js:95 · paket_12.js:8858 | `meriniler` · 1 bölüm · 36051 kr | 668/1270'te Abdülvâdîlere yenilip onlar bağımsız hale geldi | 668 1270 bu olay meriniler tarihinin donum noktasi oldu onceleri selefleri gibi (0.391) |
| kronoloji_kuzeyafrika.js:100 · paket_12.js:8863 | `meriniler` · 1 bölüm · 36051 kr | 706/1306-1307'de Tilimsan kuşatması 8 yıl 3 ay sürdü; suikasta uğrayıp öldü | 706 1306 1307 ebu r rebi suleyman 708 1308 1309 ebu said ii osman (0.504) |
| kronoloji_kuzeyafrika.js:105 · paket_12.js:8868 | `meriniler` · 1 bölüm · 36051 kr | 737/1337'de Tilimsan ele geçirilerek Abdülvâdîler hâkimiyeti sona erdirildi | 1351 tilimsan a girdi ve abdulvadiler in kisa (0.6) |
| kronoloji_kuzeyafrika.js:110 · paket_12.js:8873 | `meriniler` · 1 bölüm · 36051 kr | 748/1347'de Tunus şehrine girerek Hafsîlerin topraklarını aldı | 748 1347 abdulvadiler in ardindan hafsiler in de topraklarini (0.65) |
| kronoloji_kuzeyafrika.js:115 · paket_12.js:8878 | `meriniler` · 1 bölüm · 36051 kr | 749/1348'de Abdülvâdîler Tilimsân'ı geri aldı; on yıllık Merînî hâkimiyeti sona erdi | abdulvadiler de tilimsan i geri alarak on yil suren merini hakimiyetinden kurtuldular 749 1348 (0.667) |
| kronoloji_kuzeyafrika.js:120 · kronoloji_kuzeyafrika.js:377 · paket_12.js:8883 · paket_12.js:9140 | `meriniler` · 1 bölüm · 36051 kr | 759/1358'de Ebû İnân Tilimsân'a girdi | 1351 tilimsan a girdi ve abdulvadiler (0.541) |
| kronoloji_kuzeyafrika.js:125 · paket_12.js:8888 | `meriniler` · 1 bölüm · 36051 kr | 751/1350'de Ebû İnân babasını tahttan feragate mecbur etti | cebelulhintate ye siginan babasini tahttan feragate mecbur etti 751 1350 ebu l hasan (0.648) |
| kronoloji_kuzeyafrika.js:130 · paket_12.js:8893 | `meriniler` · 1 bölüm · 36051 kr | 759/1358'de Ebû İnân boğularak öldü | ebu bekir es said 759 1358 ebu salim ibrahim el (0.488) |
| kronoloji_kuzeyafrika.js:135 · paket_12.js:8898 | `meriniler` · 1 bölüm · 36051 kr | 812/1409'da Hafsî sultanının Fas üzerine yürüyüşü; Merînîler istiklâlini kaybetti | eden hafsi sultani fas uzerine yurudu zor durumda kalan ebu said (0.583) |
| kronoloji_kuzeyafrika.js:140 · paket_12.js:8903 | `meriniler` · 1 bölüm · 36051 kr | 818/1415'te Portekiz Kralı I. Jean tarafından işgal edildi | portekiz krali i jean tarafindan isgal edildi 823 te 1420 (0.789) |
| kronoloji_kuzeyafrika.js:145 · paket_12.js:8908 | `meriniler` · 1 bölüm · 36051 kr | 862/1458'de Kasrüssagīr şehri Portekizlilerin eline geçti | 852 1448 kasrussagir kasrimasmude sehri 862 1458 ve tanca 869 1465 portekizliler (0.555) |
| kronoloji_kuzeyafrika.js:150 · paket_12.js:8913 | `meriniler` · 1 bölüm · 36051 kr | 869/1465'te Tanca Portekizliler tarafından işgal edildi | 869 1465 portekizliler in eline gecti (0.63) |
| kronoloji_kuzeyafrika.js:155 · paket_12.js:8918 | `meriniler` · 1 bölüm · 36051 kr | 698/1299'da Mansûre şehri kuruldu; bu sırada köşkler, binalar, hamamlar yapıldı | tilimsan civarinda koskler binalar hamamlar yaptiran mansure sehrini kuran 698 1299 ebu ya kub zekatin devlet (0.422) |
| kronoloji_kuzeyafrika.js:160 · paket_12.js:8923 | `meriniler` · 1 bölüm · 36051 kr | 723/1323'e ait kaynaklar Medresetü'l-Attârîn'in inşasını gösterir | l as fi bina i medineti fas in sahibi ebu l (0.444) |
| kronoloji_kuzeyafrika.js:165 · paket_12.js:8928 | `meriniler` · 1 bölüm · 36051 kr | 703/1303-1304'te ilk hac kafilesi yola çıktı | ilk hac kafilesi 703 1303 1304 yilinda yola cikmistir (0.557) |
| kronoloji_kuzeyafrika.js:174 · paket_12.js:8937 | `sadiler` · 1 bölüm · 16556 kr | 916/1511'de Muhammed b. Abdurrahman es-Sa'dî, Sûs bölgesinde cihad emîri olarak atandı | muhammed b abdurrahman es sa di cihadda etkili olan cezuliyye tarikati seyhi muhammed (0.604) |
| kronoloji_kuzeyafrika.js:179 · paket_12.js:8942 | `sadiler` · 1 bölüm · 16556 kr | 923/1517'de Muhammed'in vefatı; Ahmed el-A'rec'in tahta geçmesi | el a rec gecti ahmed el a rec ile onun vezir (0.528) |
| kronoloji_kuzeyafrika.js:184 · paket_12.js:8947 | `sadiler` · 1 bölüm · 16556 kr | 930/1524'te Merakeş'e girerek başşehir yapılması | merakes e girip burayi bassehir edindiler 930 1524 (0.531) |
| kronoloji_kuzeyafrika.js:189 · paket_12.js:8952 | `sadiler` · 1 bölüm · 16556 kr | 943/1536'da Ukbâ savaşından sonra Vattâsîler ile egemenlik alanları belirleme antlaşması | 943 1536 boylece iki devletin egemenlik alanlarinin belirlenmesinin yani sira sa di (0.55) |
| kronoloji_kuzeyafrika.js:194 · paket_12.js:8957 | `sadiler` · 1 bölüm · 16556 kr | 1537'de Portekiz ile 3 yıllık antlaşma imzalanması | calisti 1537 de portekiz ile uc yil sureli bir antlasma imzalandi ahmed (0.744) |
| kronoloji_kuzeyafrika.js:204 · paket_12.js:8967 | `sadiler` · 1 bölüm · 16556 kr | 956/1549'da Fas şehrine giriş; Vattâsî hâkimiyetine son verilmesi | fas sehrine girip vattasi hakimiyetine son verdi 956 1549 cezayir (0.744) |
| kronoloji_kuzeyafrika.js:209 · paket_12.js:8972 | `sadiler` · 1 bölüm · 16556 kr | 961/1554'te Osmanlı ordusu tarafından Fas'tan çıkarılması; Ebû Hassûn'un iktidarı | 1554 ancak osmanli birliklerinin buradan ayrilmasinin ardindan ebu hassun muhammed es seyh tarafindan (0.508) |
| kronoloji_kuzeyafrika.js:214 · paket_12.js:8977 | `sadiler` · 1 bölüm · 16556 kr | 964/1557'de Muhammed eş-Şeyh'in Osmanlı ordusu tarafından Derna dağlarında öldürülmesi | giden kucuk bir osmanli suvari birligi tarafindan derna daglarinda olduruldu muhammed es seyh in yerine oglu (0.588) |
| kronoloji_kuzeyafrika.js:219 · paket_12.js:8982 | `sadiler` · 1 bölüm · 16556 kr | 1564'te İspanyolların Bâdis adasını ele geçirmesi | destekledigi ispanyollar in badis i ele gecirmesi magrib denizciligine agir (0.613) |
| kronoloji_kuzeyafrika.js:224 · paket_12.js:8987 | `sadiler` · 1 bölüm · 16556 kr | 983/1576'da Osmanlı kuvvetleriyle Abdülmelik'in Fas'a girişi | kulturlu bir hukumdar olan abdulmelik in tahta cikisiyla (0.517) |
| kronoloji_kuzeyafrika.js:229 · paket_12.js:8992 | `sadiler` · 1 bölüm · 16556 kr | 30 Cemâziyelevvel 986/4 Ağustos 1578'de Vâdilmehâzin (Üç Kral) savaşında Portekiz Haçlı ordusunun mağlûbiyeti | hacli ordusu vadilmehazin savasinda bozguna ugradi 30 cemaziyelevvel 986 4 agustos 1578 portekiz krali ile (0.488) |
| kronoloji_kuzeyafrika.js:234 · paket_12.js:8997 | `sadiler` · 1 bölüm · 16556 kr | 1588'de Ahmed el-Mansûr'un Osmanlıya vergi göndermemesi; ardından elçilik heyeti gönderilmesi | ahmed el mansur un annesi mes ude bint ahmed tarafindan yaptirilan babu dukkale (0.48) |
| kronoloji_kuzeyafrika.js:239 · paket_12.js:9002 | `sadiler` · 1 bölüm · 16556 kr | 999/1591'de Tondibi savaşıyla Songay Sultanlığının yıkılması; Sudan'ın fethi | sudan a gonderdi tondibi savasiyla songay sultanligi yikildi topraklari osmanli sistemi (0.667) |
| kronoloji_kuzeyafrika.js:244 · paket_12.js:9007 | `sadiler` · 1 bölüm · 16556 kr | Sudan seferi sonrası 20.000 civarında köle, bol altın ve fildişi elde edilmesi | getirildi sudan seferinden 20 000 civarinda kole ve bol miktarda altin ve fildisi ile donuldu sudan (0.705) |
| kronoloji_kuzeyafrika.js:249 · paket_12.js:9012 | `sadiler` · 1 bölüm · 16556 kr | 1011/1602'de veliaht Muhammed eş-Şeyh el-Me'mûn'un isyanının bastırılması; hapsedilmesi | veliaht tayin ettigi fas valisi buyuk oglu muhammed es seyh el me mun un isyaniyla karsilasti isyani (0.559) |
| kronoloji_kuzeyafrika.js:254 · paket_12.js:9017 | `sadiler` · 1 bölüm · 16556 kr | 1012/1603'te Ahmed el-Mansûr'un vebadan ölümü | ahmed el mansur un annesi mes ude bint ahmed (0.539) |
| kronoloji_kuzeyafrika.js:259 · paket_12.js:9022 | `sadiler` · 1 bölüm · 16556 kr | Ülkenin Merakeş (güney) ve Fas (kuzey) emirlikleri olarak bölünmesi | merakes guney ve fas kuzey emirlikleri olarak ikiye bolundu (0.836) |
| kronoloji_kuzeyafrika.js:264 · paket_12.js:9027 | `sadiler` · 1 bölüm · 16556 kr | 1069/1659'da Ahmed el-Abbas'ın Şebbâne liderleri tarafından öldürülmesi; Sâdîler hânedanının sona ermesi | abbas es sebti camileri ahmed el mansur un annesi mes ude bint ahmed tarafindan yaptirilan babu dukkale camii (0.415) |
| kronoloji_kuzeyafrika.js:269 · paket_12.js:9032 | `sadiler` · 1 bölüm · 16556 kr | Abdülmelik ve Ahmed el-Mansûr devrinde Osmanlı sistemi örnek alınarak devlet teşkilâtlanması ve ordu reformları | ahmed oturdu ahmed el mansur un degerli hediyelerle gelen osmanli elcisini kabulde ve cevap vermede ihmalkar davranmasi osmanlilar (0.498) |
| kronoloji_kuzeyafrika.js:274 · paket_12.js:9037 | `sadiler` · 1 bölüm · 16556 kr | Ahmed el-Mansûr devrinde Kasrü'l-bedî' Sarayı'nın Merakeş'te inşası | merakes te donemin en ihtisamli eserlerinden biri olan kasru l bedi sarayi ni insa ettirdi (0.564) |
| kronoloji_kuzeyafrika.js:279 · paket_12.js:9042 | `sadiler` · 1 bölüm · 16556 kr | Ahmed el-Mansûr devrinde Fransa, İngiltere, Hollanda gibi Avrupa devletleriyle ticarî ilişkiler kurulması | oldugu imaji uyandi fransa ingiltere hollanda ve diger avrupa devletleriyle kurulan ticari iliskiler sayesinde limanlara cok (0.678) |
| kronoloji_kuzeyafrika.js:303 · paket_12.js:9066 | `tunus` · 5 bölüm · 95404 kr | Pizalı ve Cenevizli korsanlar Mehdiye'yi tahrip etti | mehdiye 1087 yilinda bir sure pizali ve cenevizli korsanlarin eline gectiyse (0.531) |
| kronoloji_kuzeyafrika.js:308 · paket_12.js:9071 | `tunus` · 5 bölüm · 95404 kr | 1284'te hıristiyanların eline geçen Cerbe adasının Hafsîler tarafından tekrar fethilmesi | 1284 te hiristiyanlarin eline gecen cerbe adasi 1334 te geri alinabildi (0.704) |
| kronoloji_kuzeyafrika.js:323 · paket_12.js:9086 | `tunus` · 5 bölüm · 95404 kr | Sultan ölümünün ardından devlet karışıklığa girdi; Avrupa devletlerinin saldırıları yoğunlaştı | ispanya olmak uzere avrupa devletlerinin sahillere saldirilari yogunlasti bu arada osmanlilar hiristiyanlari kuzey (0.512) |
| kronoloji_kuzeyafrika.js:357 · paket_12.js:9120 | `tilimsan` · 1 bölüm · 20950 kr | I. Ebû Zeyyân Muhammed yıkıntıları tamir etti | i ebu zeyyan muhammed kusatmanin yaralarini sarmaya (0.674) |
| kronoloji_kuzeyafrika.js:362 · paket_12.js:9125 | `tilimsan` · 1 bölüm · 20950 kr | I. Ebû Tâşfîn Dönemi — beş saray ve mimari gelişme | i ebu tasfin 1318 1337 sadece tilimsan a bes adet saray insa (0.523) |
| kronoloji_kuzeyafrika.js:372 · paket_12.js:9135 | `meriniler` · 1 bölüm · 36051 kr | 749/1348'de Abdülvâdîler Tilimsân'ı geri aldı | abdulvadiler de tilimsan i geri alarak on yil (0.711) |
| kronoloji_kuzeyafrika.js:382 · paket_12.js:9145 | `meriniler` · 1 bölüm · 36051 kr | 761/1360'ta Mağrib-i Evsat'ta harekâttan sonuç alınamadı; Abdülvâdîler bağımsız oldu | 1360 yilinda magrib i evsat ta gerceklestirdigi harekattan bir netice alamadi ve abdulvadiler (0.67) |
| kronoloji_kuzeyafrika.js:417 · paket_12.js:9180 | `tilimsan` · 1 bölüm · 20950 kr | Sâlih Reis kumandasında kesin biçimde ele geçirildi | sehri salih reis kumandasindaki osmanli ordusu tarafindan kesin bicimde ele (0.651) |
| kronoloji_kuzeyafrika.js:431 · paket_12.js:9194 | `trablusgarp` · 1 bölüm · 15952 kr | Turgut Reis beylerbeyilikle atandı; dokuz yıllık yönetim dönemi başladı (Fizan'a kadar) | turgut reis beylerbeyilikle buraya geldi turgut reis in dokuz yillik valiligi trablusgarp (0.613) |
| kronoloji_kuzeyafrika.js:436 · paket_12.js:9199 | `trablusgarp` · 1 bölüm · 15952 kr | Yarı bağımsız eyalet konumuna geçiş; Karamanlı ailesinin yönetimi başladı | yari bagimsiz eyalet konumuna geldigi karamanli hanedani donemi merkezi (0.783) |
| kronoloji_kuzeyafrika.js:441 · paket_12.js:9204 | `trablusgarp` · 1 bölüm · 15952 kr | Ticaret gemilerinden vergi alınması nedeniyle çatışmalar; gemi kaçırılması ve liman ablukası | ve amerika birlesik devletleri nden buraya gelen ticaret gemilerinden vergi almalari ciddi problemlere yol (0.416) |
| kronoloji_kuzeyafrika.js:461 · paket_12.js:9224 | `trablusgarp-savasi` · 1 bölüm · 21877 kr | 9 Ekim 1911 Trablusgarp şehrinin teslimi | trablusgarp sehri 9 ekim de teslim (0.676) |
| kronoloji_kuzeyafrika.js:476 · paket_12.js:9239 | `trablusgarp-savasi` · 1 bölüm · 21877 kr | 1 Aralık 1911 Enver Bey'in karargâhı üstlenmesi | ni kurdular enver bey 1 aralik (0.494) |
| kronoloji_kuzeyafrika.js:481 · paket_12.js:9244 | `trablusgarp-savasi` · 1 bölüm · 21877 kr | 18 Ekim 1912 Uşi Barış Antlaşması | ekim ve bingazi 21 ekim isgal edilmisti bazi osmanli (0.447) |
| kronoloji_naksa_dukaligi.js:19 · paket_12.js:10697 | `naksa` · 1 bölüm · 12002 kr | Marco Sanudo conquered the island with eight ships | marco sanudo 1205 te sekiz gemiyle adayi ve (0.495) |
| kronoloji_naksa_dukaligi.js:24 · paket_12.js:10702 | `naksa` · 1 bölüm · 12002 kr | Sanudo received the title 'Duke of Naxos' from the Latin Emperor in Constantinople | in gerceklestirdigi daha sonra giritliler in karyalilar in ve tesalyalilar in etkisi altina (0.304) |
| kronoloji_naksa_dukaligi.js:49 · paket_12.js:10727 | `naksa` · 1 bölüm · 12002 kr | The Crispo family (from Verona) took control of the duchy and administration | adli idari birimin merkezi olup adada elli kadar koy vardir (0.301) |
| kronoloji_naksa_dukaligi.js:54 · paket_12.js:10732 | `naksa` · 1 bölüm · 12002 kr | 1403: Nakşa mentioned in treaty with Süleyman Çelebi | 1403 te suleyman celebi ile yapilan antlasmada naksa (0.427) |
| kronoloji_naksa_dukaligi.js:59 · paket_12.js:10737 | `naksa` · 1 bölüm · 12002 kr | 1419: Treaty stipulated the duke would pay tribute to Ottomans instead of Aydınoğulları | nin haracguzari durumundaki adanin ve duklugun idaresi 1383 te veronali crispi (0.28) |
| kronoloji_naksa_dukaligi.js:64 · paket_12.js:10742 | `naksa` · 1 bölüm · 12002 kr | 1426, 1446, 1451, 1454: Treaties repeated this arrangement | 1426 1446 1451 1454 antlasmalarinda tekrarlanmistir ancak osmanli (0.521) |
| kronoloji_naksa_dukaligi.js:84 · paket_12.js:10762 | `naksa` · 1 bölüm · 12002 kr | 1537-1538: Barbaros Hayreddin Paşa's island campaign brought Nakşa under Ottoman control | naksa ve civarindaki adalar 944 945 1537 1538 yillarinda barbaros hayreddin pasa nin adalar seferiyle osmanli (0.48) |
| kronoloji_naksa_dukaligi.js:89 · paket_12.js:10767 | `naksa` · 1 bölüm · 12002 kr | 1540: Ottoman-Venetian treaty formally transferred sovereignty to Ottomans | 1540 taki osmanli venedik antlasmasiyla hakimiyet hakki resmen osmanlilar a devredildi baslangicta (0.433) |
| kronoloji_naksa_dukaligi.js:94 · paket_12.js:10772 | `naksa` · 1 bölüm · 12002 kr | 1566: Duchy granted to Yasef Nasi after dismissing the Crispo heir | yasef nasi ye verildi 974 1566 osmanli yonetimi adanin yoneticilerini bir (0.406) |
| kronoloji_naksa_dukaligi.js:99 · paket_12.js:10777 | `naksa` · 1 bölüm · 12002 kr | 1579: Following Nasi's death, Giacomo (Crispo) failed to reclaim the duchy | 80 naksa bugun ayni adli idari birimin merkezi olup adada (0.315) |
| kronoloji_portekiz.js:74 · paket_09.js:3597 | `portekiz` · 3 bölüm · 29222 kr | 1095'te bağımsız devlet kurulması başladı | 1095 ten itibaren basladi i alfons (0.507) |
| kronoloji_portekiz.js:94 · paket_09.js:3617 | `portekiz` · 3 bölüm · 29222 kr | 1415: Ceuta fethi sömürge dönemini açtı | 1415 te ceuta nin sebte ele gecirilmesiyle somurge edinme yolu (0.54) |
| kronoloji_portekiz.js:207 · paket_09.js:3730 | `portekiz` · 3 bölüm · 29222 kr | 1510: Goa ele geçirildi | ele gecirildi macao da (0.591) |
| kronoloji_portekiz.js:227 · paket_09.js:3750 | `hurmuz--iran` · 1 bölüm · 7174 kr | Portekizliler ikinci muhasaradan sonra adayı ele geçirip sultanı kendilerine bağladılar | de yararlanarak adayi ele gecirdi ve iran in vasali olan sultani portekiz e bagladi (0.541) |
| kronoloji_portekiz.js:232 · paket_09.js:3755 | `portekiz` · 3 bölüm · 29222 kr | 1517: Selman Reis Portekizlileri Cidde'de geri püskürtmüştü | selman reis bunlari geri puskurtmustu 1525 tarihli raporuyla (0.559) |
| kronoloji_portekiz.js:237 · paket_09.js:3760 | `portekiz` · 3 bölüm · 29222 kr | 1517: Seylan ele geçirildi | ele gecirildi macao da (0.553) |
| kronoloji_portekiz.js:247 · paket_09.js:3770 | `portekiz` · 3 bölüm · 29222 kr | 1525: Selman Reis raporuyla konuya ışık tuttu | 1525 tarihli raporuyla konuya isik tutan ve (0.759) |
| kronoloji_portekiz.js:276 · paket_09.js:3799 | `portekiz` · 3 bölüm · 29222 kr | 1538: Hadım Süleyman Paşa Aden'i ele geçirdi, Diû kuşatıldı | de hadim suleyman pasa kizildeniz de hazirlanan donanmayla (0.574) |
| kronoloji_portekiz.js:281 · paket_09.js:3804 | `portekiz` · 3 bölüm · 29222 kr | 1541: Portekiz saldırısı Osmanlılar tarafından geri püskürtüldü | portekiz saldirisi osmanlilar ca geri puskurtuldu osmanlilar (0.787) |
| kronoloji_portekiz.js:296 · paket_09.js:3819 | `piri-reis` · 1 bölüm · 10269 kr | 954'te (1547) Hint kaptanlığına tayin edildi… Aden'in geri alınması 12 Rebîülevvel 956'da (12 Şubat 1549) gerçekleşti | 954 te 1547 ferhad pasa nin yerine hint kaptanligina getirildi bu … uzaklastirildigi 15 rebiulevvel 961 de 18 subat 1554 mazul olarak istanbul da bulunmasindan  (0.556) |
| kronoloji_portekiz.js:311 · paket_09.js:3834 | `piri-reis` · 1 bölüm · 10269 kr | 959'da (1552) Hürmüz'ü zaptetmek için Süveyş'ten otuz parça gemiyle yola çıktı… Maskat bir haftalık kuşatmadan sonra ele geçirildi, 128 esir alındı | da birakarak uc kadirga ile suveys e hareket eden piri reis gemilerden birinin yolda … sonra maskat i kusatan piri reis bir hafta suren kusatmanin ardindan kale (0.465) |
| kronoloji_portekiz.js:316 · paket_09.js:3839 | `seydi-ali-reis` · 1 bölüm · 17394 kr | 25 Ağustos 1554'te Maskat açıklarında Fernando kumandasındaki otuz dört Portekiz kalyonuyla karşılaşıldı; her iki taraf altı gemi kaybetti | nin oglu fernando kumandasindaki yirmi bes parcalik bir portekiz donanmasiyla karsilasildi a g e s 19 ceyrek asirdir hint okyanusu nda rekabet halinde (0.509) |
| kronoloji_portekiz.js:331 · paket_09.js:3854 | `portekiz` · 3 bölüm · 29222 kr | 1578 (4 Ağustos): Vâdisseyl Savaşında Portekiz ordusu yenildi, Kral Sebastian öldürüldü | 4 agustos 1578 vadisseyl savasi oldugundan portekiz buyuk bir krizin icine dustu halefi olan (0.594) |
| kronoloji_portekiz.js:331 · paket_09.js:3854 | `sadiler` · 1 bölüm · 16556 kr | Sultan Abdülmelik çarpışma sırasında öldü (4 Ağustos 1578) | sirasinda abdulmelik hastaligi dolayisiyla savas alaninda oldu abdulmelik (0.543) |
| kronoloji_portekiz.js:503 · paket_09.js:4026 | `portekiz` · 3 bölüm · 29222 kr | 1910 (Ekim): Cumhuriyet ilân edildi, Kral II. Emanuel İngiltere'ye kaçtı | ekim de ilan edilen cumhuriyete birakti kral ii emanuel ingiltere ye (0.711) |
| kronoloji_portekiz.js:523 · paket_09.js:4046 | `portekiz` · 3 bölüm · 29222 kr | 1926 (Mayıs): Askerî darbe, General Gomes da Costa iktidarı ele geçirdi | buldu ve general gomes da costa idareyi ele gecirdi mayis 1926 disisleri bakani general (0.558) |
| kronoloji_rodos_sovalyeleri.js:261 · paket_12.js:12470 | `rodos` · 1 bölüm · 19971 kr | Ottoman garrison of 1343 installed (1524) | te 1343 muhafiz topcu (0.3) |
| kronoloji_rodos_sovalyeleri.js:266 · paket_12.js:12475 | `malta` · 2 bölüm · 17389 kr | Kanûnî Sultan Süleyman transferred the Knights of Saint Jean from Rhodes, and Spain's King Carlos V settled them in Malta in 1530 | kanuni sultan suleyman in rodos tan cikardigi 928 1522 saint jean sovalyelerini ispanya almanya krali v carlos malta ya yerlestirdi 1530 malta sahip (0.543) |
| kronoloji_rodos_sovalyeleri.js:301 · paket_12.js:12510 | `malta` · 2 bölüm · 17389 kr | 18 Şevval 972 / 19 May 1565 | 18 sevval 19 mayis cuma gunu (0.642) |
| kronoloji_rodos_sovalyeleri.js:321 · paket_12.js:12530 | `malta` · 2 bölüm · 17389 kr | 16 Safer 973 / 12 September 1565 | safer 973 te 12 eylul 1565 (0.679) |
| kronoloji_sirbistan.js:192 · paket_12.js:13392 | `sirbistan` · 2 bölüm · 34624 kr | Patrik Arsenije III. Crnojević, 1690 yılında büyük bir grupla Kosova'yı terkederek Karlofça'ya göç etti. | patrik arsenije iii crnojevic 1690 yilinda buyuk bir grupla sirp kaynaklarina gore yaklasik 37 000 sirp (0.716) |
| kronoloji_timurlu.js:69 · paket_11.js:2555 | `timur` · 1 bölüm · 21641 kr | 1391 (Haziran): Kunduzca'da Toktamış Han'ı yendi | 1391 kundurca kunduzca mevkiinde toktamis han (0.667) |
| kronoloji_timurlu.js:74 · paket_11.js:2560 | `timur` · 1 bölüm · 21641 kr | 1395 (15 Nisan): Terek'te [Toktamış'ı] kesin olarak yendi | 15 nisan 1395 terek irmagi kiyisinda yapilan savasi kazandiysa da toktamis i ele geciremedi (0.462) |
| kronoloji_timurlu.js:79 · paket_11.js:2565 | `timur` · 1 bölüm · 21641 kr | 1398-1399 (Mart-Nisan – Nisan): Delhi Sultanı Mahmud Şah'a karşı sefer | davrandigina isfahan dan delhi ye tebriz den sivas a astarhan dan bagdat a kadar ele (0.43) |
| kronoloji_timurlu.js:88 · paket_11.js:2574 | `timur` · 1 bölüm · 21641 kr | 1400-1401: Halep, Hama, Humus ve Şam dahil Suriye şehirlerinin fethi | de halep hama humus ve dimask gibi sehirleri aldi (0.632) |
| kronoloji_timurlu.js:93 · paket_11.js:2579 | `timur` · 1 bölüm · 21641 kr | 1400-1401: Suriye şehirlerinin fethi | suriye de halep hama humus (0.426) |
| kronoloji_timurlu.js:103 · paket_11.js:2589 | `timur` · 1 bölüm · 21641 kr | 1402 (28 Temmuz): Ankara'da Osmanlı Sultanı Yıldırım Bayezid'e karşı zafer | yi kusatti bu sirada yildirim bayezid de ankara ya yaklasmis (0.504) |
| kronoloji_timurlu.js:108 · paket_11.js:2594 | `timur` · 1 bölüm · 21641 kr | 1402-1403: Bursa'nın alınması, İzmir'i ziyaret | sami nin naklettigi bir olay timur (0.436) |
| kronoloji_timurlu.js:113 · paket_11.js:2599 | `timur` · 1 bölüm · 21641 kr | 1404 (27 Kasım): Çin seferi için yola çıktı | kasim 1404 semerkant tan ayrilarak siriderya (0.476) |
| kronoloji_timurlu.js:146 · paket_11.js:2632 | `ulug-bey` · 1 bölüm · 7164 kr | Zîc-i Uluğ Bey... İslâm dünyasında ve Avrupa'da kaynak eser olarak tanındı | islam dunyasinda hem avrupa da alaninda kaynak eser kabul (0.799) |
| kronoloji_timurlu.js:151 · paket_11.js:2637 | `ulug-bey` · 1 bölüm · 7164 kr | 1447-1449 arası hükümdarlık yaptı | etti ulug bey hukumdarlik hak ve iddiasindan vazgecip (0.395) |
| kronoloji_timurlu.js:156 · paket_11.js:2642 | `ulug-bey` · 1 bölüm · 7164 kr | Oğlu Abdüllatif ile giriştiği mücadelede Semerkant yakınında yenilip 1449'da (25 Ekim) idam edildi | i ele gecirip semerkant a yurudu ve 853 sabaninda eylul ekim 1449 ulug bey i semerkant in (0.465) |
| kronoloji_timurlu.js:180 · paket_11.js:2666 | `ali-sir-nevai` · 1 bölüm · 25252 kr | Mecâlisü'n-nefâis (1491-92)... ilk Türk şairler tezkiresi | 2 mecalisu n nefais 897 de 1491 92 … ilk suara tezkiresi olmasi (0.749) |
| kronoloji_timurlu.js:185 · paket_11.js:2671 | `ali-sir-nevai` · 1 bölüm · 25252 kr | 1492: dostu Câmî öldü | dostu mutasavvif sair cami nin olumu de (0.475) |
| kronoloji_timurlu.js:190 · paket_11.js:2676 | `ali-sir-nevai` · 1 bölüm · 25252 kr | 3 Ocak 1501'de öldü | ocak 1501 oldu (0.848) |
| kronoloji_timurlu.js:200 · paket_11.js:2686 | `timurlular` · 2 bölüm · 34639 kr | Özbekler Mayıs 1507'de Herat'ı ele geçirdi, Timurlu hâkimiyeti sona erdi | mayis 1507 de herat i ele gecirdi ahlak telakkileri zaafa ugramis canliligini (0.581) |
| kronoloji_venedik.js:218 · paket_06.js:2505 | `venedik` · 1 bölüm · 15923 kr | 1463-1479 Osmanlı-Venedik savaşı esnasında | osmanli venedik savasi esnasinda 1463 1479 (0.762) |
| olaylar_ek10.js:251 · paket_02.js:1126 | `bogdan` · 1 bölüm · 17128 kr | 28 Ocak 1595 Prag | ilan eden moldova cumhuriyeti ayni yilin sonlarina dogru (0.247) |
| olaylar_ek5.js:60 · paket_01.js:2268 | `saruhanogullari` · 2 bölüm · 24639 kr | Saruhan ülkesinin 1411'den sonra ve 1415'ten önce Çelebi Mehmed'in idaresi altına girdiği | 1411 den sonra ve 1415 ten once saruhan ulkesinin celebi mehmed in idaresi altina girdigi (0.798) |
| olaylar_ek8.js:353 · paket_02.js:446 | `harizm` · 1 bölüm · 21012 kr | 1924'te Hîve Hanlığı'nın doğu kesimleri Özbekistan SSC'ye, batı tarafı da Türkmenistan SSC'ye bırakıldı | 1924 te hive hanligi nin dogu kesimleri ozbekistan sovyet sosyalist cumhuriyeti ne bati tarafi da turkmenistan sovyet (0.804) |
| paket_12.js:14248 · paket_12.js:14954 · savaslar.js:263 · savaslar.js:969 | `bukres` · 1 bölüm · 5170 kr | Kalûgerân (Çalugareni) mevkiinde Prens Mihal … ile Serdar Sinan Paşa kumandasındaki Osmanlı ordusu karşı karşıya geldi (1595) | kalugeran calugareni mevkiinde mihai viteazul … pasa kumandasindaki osmanli ordusu karsi karsiya geldi 1595 yenilen (0.826) |
| paket_13.js:249 · yerlesimler.js:244 | `doksanuc-harbi` · 1 bölüm · 12542 kr | General Lazarov'un idaresindeki kuvvetler … 18 Kasım'da Kars'ı ele geçirdiler | gecirdiler general melikof un idare ettigi kuvvetler de (0.805) |
| paket_13.js:308 · yer_yama_tbmm_1920_0905.js:3125 · yerlesimler.js:303 | `kilitbahir-kalesi` · 1 bölüm · 4934 kr | İstanbul'un fethinden sonra yapılmış kale | istanbul un fethinden hemen sonra yapildigi (0.81) |
| paket_13.js:507 · yerlesimler.js:502 | `timisvar` · 1 bölüm · 6605 kr | 1552-1716 yılları arasında durumunu koruyan Tımışvar beylerbeyiliği | 1552 1552 1716 yillari arasinda durumunu koruyan timisvar beylerbeyiliginin idari teskilati (0.848) |
| paket_13.js:746 · paket_13.js:747 · paket_13.js:749 · paket_13.js:750 · paket_13.js:1861 · paket_13.js:1862 (+67) | `ilhanlilar` · 2 bölüm · 27181 kr | ILHANLILAR - Iran'da kurulan bir Mogol devleti (1256-1353) | tebriz olmak uzere iran da kurulan 1256 ve 1295 yilindan itibaren tam (0.455) |
| paket_13.js:746 · paket_13.js:747 · paket_13.js:749 · paket_13.js:750 · paket_13.js:1861 · paket_13.js:1862 (+67) | `celayirliler` · 1 bölüm · 5886 kr | CELAYIRLILER 1340-1431 yillari arasinda ... hukum suren Mogol hanedani | celayirliler zamaninda cok sayida turk … ordusunu idare eden mogol kumandani mukali noyan (0.502) |
| paket_21.js:960 · paket_23.js:323 · yerlesimler_anadolu_0914.js:85 · yerlesimler_ok110.js:62 | `dulkadirogullari` · 1 bölüm · 21884 kr | Dârende: 1338'de işgal edildi | de darende yi tekrar aldigi (0.545) |
| paket_23.js:271 · yerlesimler_anadolu_0914.js:33 | `erzincan` · 1 bölüm · 17160 kr | gün komşudan: Erzincan · TDV erzincan | erzincan kuzey erzincan … erzincan da (0.631) |
| paket_23.js:271 · yerlesimler_anadolu_0914.js:33 | `bayburt` · 1 bölüm · 12591 kr | Kara Yûsuf zaptetti … az sonra Karayülük yeniden ele geçirdi | kara yusuf tarafindan … az sonra akkoyunlu karayuluk osman bey (0.603) |
| yama_p0037_bekleyen.js:63 | `bogdan` · 1 bölüm · 17128 kr | tazminat ödeninceye kadar burada kalmaya karar verdiler ... Kiselef vali ... Sturdza tayinle (1834) | odeninceye kadar burada kalmaya karar verdiler bu … sturdza yi voyvodaliga tayin etti 1822 (0.831) |
| yer_yama.js:325 | `sirbistan` · 2 bölüm · 34624 kr | İkinci Sırp isyanı Miloş Obrenoviç önderliğinde 1815'te patlak verdi | sirp isyani milos obrenovic isimli bir sirp knezinin onderliginde 1815 yilinda patlak verdi (0.742) |
| yer_yama.js:338 | `lubnan` · 4 bölüm · 65103 kr | 9 Haziran 1861 Reglement Organique | haziran 1982 de lubnan i (0.586) |
| yer_yama.js:422 | `kinalizade-ali-efendi` · 1 bölüm · 7377 kr | Anadolu kazaskeri olarak görevli iken II. Selim'in maiyetinde Edirne meştâsında (kampında) vefat etti | anadolu kazaskerligi bulundugu halde ii selim in maiyetinde edirne mestasinda muhtemelen bir sefer hazirligi (0.68) |
| yer_yama.js:432 | `yemen` · 5 bölüm · 94656 kr | 284/897: İmam Hâdî-İlelhak Yahyâ b. Hüseyin Sa'de'ye geldi. | yenilenmistir imam hadi ilelhak yahya b huseyin in 284 te 897 sa de ye gelip bazi (0.701) |
| yer_yama.js:435 | `yemen` · 5 bölüm · 94656 kr | 1608: İmam Kāsım'la anlaşmazlık on senelik antlaşmayla çözümlendi | anlasmazlik ise yapilan on senelik bir antlasma ile cozumlendi 1608 cafer pasa (0.606) |
| yer_yama.js:436 | `yemen` · 5 bölüm · 94656 kr | 1028/1619: Mehmed Paşa ile Zeydîler arasında on yıl antlaşma imzalandı | mehmed pasa ile zeydiler arasinda on yil surmesi planlanan bir antlasma imzalandi 1028 1619 (0.738) |
| yer_yama.js:440 | `yemen` · 5 bölüm · 94656 kr | 1092/1681: Ahmed b. Hasan Yemen'i Osmanlı sultanı adına yönettiğini belirtti | 1092 de 1681 muhaliflerine karsi kendisinin yemen i osmanli sultani adina yonettigini (0.717) |
| yer_yama.js:450 | `yarubiler` · 1 bölüm · 4872 kr | 1633'te Ali b. Ahmed komutasında gönderilen ordu Culfâr'daki (Re'sülhayme) İran birliklerine karşı başarılı oldu. | nasir in culfar daki re sulhayme iran birliklerine karsi 1633 te ali b ahmed komutasinda gonderdigi ordu da basarili oldu (0.574) |
| yer_yama.js:459 | `said-b-sultan` · 1 bölüm · 3455 kr | 1828 - Zengibar'a taşındı... | zengibar a gitmek icin (0.622) |
| yer_yama.js:460 | `said-b-sultan` · 1 bölüm · 3455 kr | 1840 - Zengibar'ı resmî başkent ilan etti... | ve hanedanin zengibar daki kabristanina (0.462) |
| yer_yama.js:462 | `uman` · 1 bölüm · 18381 kr | İngiltere, Fransa ve Almanya'nın kararı | 1862 de ingiltere fransa ve almanya gibi ulkelerin karari (0.779) |
| yer_yama.js:462 | `uman` · 1 bölüm · 18381 kr | 1862: İngiltere, Fransa ve Almanya'nın kararıyla... | 1862 de ingiltere fransa ve almanya gibi (0.814) |
| yer_yama.js:464 | `halid-beni-halid` · 1 bölüm · 8311 kr | Hüfûf ve Katîf üzerine sefer | ve katif uzerine bir sefer (0.815) |
| yer_yama.js:632 | `haci-giray-i` · 1 bölüm · 6702 kr | Hacı Giray adına Solhat'ta 845, Kırkyer'de 847 tarihli sikkeler basıldı | haci giray adina 845 te 1441 solhat ta eski kirim 847 de (0.587) |
| yer_yama.js:656 | `kirim` · 3 bölüm · 113887 kr | birkaç kez sefer düzenledi | birkac yil icinde sefalet (0.549) |
| yer_yama_hayalet.js:170 · yer_yama_hayalet.js:224 | `celayirliler` · 1 bölüm · 5886 kr | Bağdat, Musul, Tebriz, Azerbaycan … 1340-1431 | bagdat a hakim olabildi … 1424 1431 (0.508) |
| yer_yama_hayalet.js:251 · yer_yama_hayalet.js:278 · yer_yama_hayalet.js:305 | `serbedariler` · 1 bölüm · 6029 kr | Câcerm, Damgan, Simnân, Gürgân, Meşhed, Tûs, Esterâbâd | cacerm damgan simnan ile togay timur un (0.575) |
| yer_yama_hayalet.js:636 · yer_yama_hayalet.js:657 · yer_yama_hayalet.js:699 · yer_yama_hayalet.js:720 · yer_yama_hayalet.js:741 · yer_yama_hayalet.js:762 | `sirvansahlar` · 1 bölüm · 11545 kr | Şemâhî … Bakü … Derbend, Şâbüran, Kabala ve Salyan | ve derbend i fethettikleri sirada soz konusu bolgede (0.562) |
| yer_yama_kapsam.js:18 | `timur` · 1 bölüm · 21641 kr | Horasan, Mâzenderan, İran'ın iç bölgeleri | horasan a seferleri sirasinda iran in (0.553) |

### YOK — zayıf atıf (atıf artığı olabilir, elle bakılmalı) — 251 satır · 151 tekil alıntı

Tırnak, slug işaretinden uzakta ya da slug metinden çıkarıldı; aynı segmentte başka kaynak alıntısı olabilir (ör. Hırvatça/İngilizce kaynak tırnağı).

| konum(lar) | slug · gövde kanıtı | alıntı | en yakın gövde parçası (benzerlik) |
|---|---|---|---|
| d_sinirlar_komsu.js:35 · d_sinirlar_komsu.js:37 · d_sinirlar_komsu.js:39 · d_sinirlar_komsu.js:41 · paket_28.js:858 · paket_28.js:860 (+2) | `feth-ali-sah` · 1 bölüm · 8107 kr | delimited, with minor exceptions, the present boundary west of the Caspian | mucadelelerine sahne olmasindan ve once fransiz ardindan ingiliz subaylari (0.288) |
| devletler.js:1652 · paket_05.js:1671 | `etiyopya` · 2 bölüm · 52134 kr | His rule in Ethiopia continued until 1974 | ismail pasa ingilizler in de tesvikiyle mavi nil in kaynak (0.384) |
| devletler.js:2299 · paket_05.js:2318 | `ahsa` · 1 bölüm · 11986 kr | Usfûrîler 1253-1392, kurucu Usfûr bin Râşid | suudiler gibi gucler sik sik kendileri icin biat alip arkasindan zekat (0.375) |
| devletler.js:2676 · paket_05.js:2695 | `el-hac-omer` · 1 bölüm · 15456 kr | Bambara Krallıkları (Segu ve Kaarta) | bambara kralligi olan segu ya girilerek segu nun (0.585) |
| devletler.js:2678 · paket_05.js:2697 | `mali` · 1 bölüm · 56471 kr | el-Hâc Ömer 1861'de fethetti | el hac omer 10 mart 1861 (0.615) |
| devletler.js:4986 · paket_05.js:5005 | `osman-b-fudi` · 1 bölüm · 7943 kr | 21 Haziran 1804: Tabkin Kwatto muharebesinde zafer | 21 haziran 1804 te tabkin kvatto savasinda (0.769) |
| devletler.js:4992 · paket_05.js:5011 | `osman-b-fudi` · 1 bölüm · 7943 kr | yerine oğlu Muhammed Bello geçti | yerine gecen oglu muhammed bello (0.812) |
| devletler.js:7306 · devletler.js:7308 · paket_05.js:7325 · paket_05.js:7327 | `farukiler` · 1 bölüm · 5626 kr | Handeş'te (Hindistan) 1370-1601 yılları arasında hüküm süren… | hindistan in batisinda bharuc ve suret te hint okyanusu (0.46) |
| devletler.js:7474 · paket_05.js:7493 | `mali` · 1 bölüm · 56471 kr | The caliphate was short-lived: it fell in 1862, invaded by troops led by al-Ḥājj ʿUmar Taal of Fuuta Tooro | o 1911 el hac omer in hayati hakkinda yazdigi bu alanda ilk eser kabul edilen kaside si siyah afrika (0.286) |
| devletler.js:7487 · paket_05.js:7506 | `mali` · 1 bölüm · 56471 kr | 1861-03-10 — el-Hâc Ömer Segu'yu aldı | el hac omer ve oglu seku amadu ye ait (0.556) |
| devletler.js:7533 · paket_05.js:7552 | `misir` · 9 bölüm · 177127 kr | iki tarih arasında karar veremedim | iki devlet arasinda savasa zemin (0.636) |
| devletler.js:7547 · paket_05.js:7566 | `ozbekistan` · 4 bölüm · 45602 kr | Khorezm People's Soviet Republic | taskent te eski ismiyle sovyet (0.355) |
| devletler.js:7596 · paket_05.js:7615 | `hadramut` · 1 bölüm · 18675 kr | XV. yüzyılın ikinci yarısında da Kesîrîler ülkenin bir bölümüne hâkim oldular. | ikinci yarisinda da kesiriler ulkenin bir bolumune hakim oldular xvi yuzyilin (0.837) |
| devletler.js:7693 · paket_05.js:7712 | `tokoli-imre` · 1 bölüm · 6306 kr | TÖKÖLİ, İmre (ö. 1705) Osmanlılar'a bağlı Orta Macar kralı ve Erdel prensi | tokoli yi ve bu cercevede osmanlilar i destekledi imre tokoli vezir merzifonlu kara (0.497) |
| devletler.js:7942 · paket_05.js:7961 | `tanzanya` · 2 bölüm · 26429 kr | On 25 November 1918 … surrendered | on bir milli park … hareketlerinde (0.359) |
| devletler.js:7979 · paket_05.js:7998 | `kenya` · 1 bölüm · 11291 kr | This Order in Council came into operation on the 23rd of July, 1920 | islamic party of kenya ve 1994 te islamic salvation front adli (0.359) |
| devletler.js:7990 · paket_05.js:8009 | `zimbabve` · 2 bölüm · 14680 kr | On October 20, 1898, an Order in Council was passed, delimiting the entity of Southern Rhodesia | in 1568 de gonderdikleri kuvvetler pek cok muslumani katletti bu katliam muslumanlarin bolgedeki varligini sona erdirdigi (0.319) |
| devletler.js:7991 · paket_05.js:8010 | `zimbabve` · 2 bölüm · 14680 kr | 1923 … became a self-governing colony |  … islam tip dernegi ni kurdular (0.314) |
| devletler.js:8159 · paket_05.js:8178 | `senegal` · 2 bölüm · 23838 kr | The federation was created in 1895 | bir medrese actigi sine (0.316) |
| devletler.js:8169 · paket_05.js:8188 | `gabon` · 2 bölüm · 10176 kr | The capital was Brazzaville | the muslims in the (0.4) |
| devletler.js:8966 · paket_05.js:8985 | `gurlular` · 1 bölüm · 21991 kr | Horasan, Afganistan ve Kuzey Hindistan’da hüküm süren bir İslâm hânedanı (1000-1215). | hukumdarlari gur ve gazne de hukum suren asil kol muhammed b suri 390 1000 ebu ali 401 (0.491) |
| devletler.js:8967 · paket_05.js:8986 | `gurlular` · 1 bölüm · 21991 kr | Gurlular arasındaki iç çekişmelerden faydalanarak Gurlular’ın (1215) yıkılmasını sağladı. | birlik bozuldu harizmsah alaeddin muhammed ic cekismelerden faydalanarak (0.532) |
| devletler.js:8981 · paket_05.js:9000 | `karahanlilar` · 3 bölüm · 58345 kr | Türkistan’da hüküm süren Türk-İslâm hânedanı (840-1212). | onun halefi balasagun da hukum suren ii ibrahim b ahmed karahitaylar i (0.439) |
| devletler.js:9441 · paket_05.js:9460 | `harput` · 1 bölüm · 12675 kr | 1119-1120 yılları arasında gerçekleşmiş olabileceği | 300 m arasinda degisir on burc silindir seklinde yan taraftakiler (0.414) |
| devletler.js:9502 · paket_05.js:9521 | `selanik` · 1 bölüm · 29852 kr | retake Thessalonica from the Latins in 1224 | sirbistan krali stefan lazarevic in (0.359) |
| devletler.js:9591 · paket_05.js:9610 | `delhi` · 1 bölüm · 14320 kr | By the end of the 10th century the Pratihara feudatories—Chauhans (Chahamanas), Chandelas, Guhilas, Kalachuris, Paramaras, and Chaulukyas (also called Solankis)—were asserting their independence | bulunan national archives of india ile jawaharlal nehru muze ve kutuphanesi buyuk onem tasimaktadir demiryolu ve karayollariyla ulkenin her tarafina baglanmis b (0.324) |
| devletler.js:9592 · paket_05.js:9611 | `delhi` · 1 bölüm · 14320 kr | Prithviraja, however, was defeated at a second battle in the same place in 1192; the defeat ushered in Turkic rule in northern India. | bazilari sengin beg in siyeru l menazil ve durge kuli han in murakka i dihli adli eserlerinde anlatilir delhi nin ilim ve kultur hayatindaki yeri asirlar (0.298) |
| devletler.js:10014 · paket_05.js:10033 | `necahiler` · 1 bölüm · 4559 kr | Şubat 1022 (gün bilinmiyor) | subat 1022 ardindan abbasi (0.588) |
| devletler.js:10069 · paket_05.js:10088 | `abdurrahman-iii` · 1 bölüm · 16190 kr | Gece karanlığından faydalanarak bütün birliklerini nehrin karşı tarafına geçirdi ve 15 Mayıs sabahı Yûsuf el-Fihrî’nin üzerine saldırdı. | dagitip kale ve sehirleri yikarak asturias leon kralligi nin topraklarina girdi ve eski roma sehri clunia ya (0.461) |
| devletler.js:10218 · paket_05.js:10237 | `sicilya` · 1 bölüm · 9829 kr | Insurrezione scoppiata (1282) a Palermo all'ora del vespro del lunedì di Pasqua contro il malgoverno di Carlo I d'Angiò. | ruggero 1061 de messina yi 1071 de catania yi kataniye ve 1072 de palermo yu agabeyinin adina ele gecirdi (0.297) |
| devletler.js:10285 · paket_05.js:10304 | `rusya` · 4 bölüm · 117011 kr | In 882 they were killed by Prince Oleh, the son of Riuryk of Novgorod. | son donemlerde yasayan en unlu musluman ilim adamidir omrunun son yillarini tatarca kur an (0.304) |
| devletler.js:10286 · paket_05.js:10305 | `rusya` · 4 bölüm · 117011 kr | After taking Kyiv he massacred its residents on 6 December 1240 and laid waste the city. | yargili calismalardir sovyet sosyalist cumhuriyetleri birligi doneminde ise hemen hemen gorbacov yonetimine kadar hiristiyanlastirma (0.274) |
| devletler.js:10328 · paket_05.js:10347 | `sirbistan` · 2 bölüm · 34624 kr | a osvajanje gradova u Duklji (Zeti) završio je 1186. | a novi pazar yenipazar ve diger bolgelere goc etti sirbistan in ozerklik (0.331) |
| devletler.js:10341 · paket_05.js:10360 | `hirvatistan` · 1 bölüm · 16822 kr | sadržava bilješke o splitskim crkvenim saborima 925. i 928. te prijepise tom prigodom upućenih pisama papa Ivana X. i Lava VI. | in bulunduklari topraklar x yuzyilda papa tarafindan krallik olarak taninmisti xi yuzyilin sonunda meydana gelen hanedan kavgalari macaristan la birlesmeye yol  (0.235) |
| devletler.js:10342 · paket_05.js:10361 | `hirvatistan` · 1 bölüm · 16822 kr | a 1102. ponovno se okrenuo politici prodora na jug pa je, kako je zabilježeno u Kartularu samostana sv. Marije u Zadru, u Biogradu bio okrunjen za kralja Hrvatske i Dalmacije | kosova savasi na katilmasiyla vuku buldu bu tarihten sonra 1791 e kadar macar habsburg ve venedikliler le osmanlilar arasinda meydana gelen savaslarda hirvatlar (0.222) |
| ekokuma.js:100 | `zimmi` · 3 bölüm · 79117 kr | Tanzimat'tan sonra önemli ölçüde ortadan kaldırıldığını | klasik zimmet hukuku onemli olcude ortadan kaldirilmistir (0.696) |
| ekokuma_alemdar.js:73 | `alemdar-mustafa-pasa` · 1 bölüm · 7570 kr | Vidin ve Kuzey Bulgaristan bölgesinin ÂSİ âyanı | tereddutlerin kaybolmasindan sonra ramiz ve (0.333) |
| ekokuma_alemdar.js:73 | `karaosmanogullari` · 1 bölüm · 9143 kr | Bozok merkez olmak üzere Orta Anadolu | olmak uzere bolgedeki diger kasabalarda aile (0.444) |
| ekokuma_alemdar.js:96 | `alemdar-mustafa-pasa` · 1 bölüm · 7570 kr | yakınındaki en güçlü âyandan kurtuldu | bu sirada yorenin en guclu ayani olan tirsinikli (0.541) |
| ekokuma_alemdar.js:106 | `kabakci-isyani` · 1 bölüm · 5452 kr | Bu savaşın III. Selim'in başlattığı nizam-ı cedit uygulamasının arifesinde olduğu düşünülürse, savaşa Nizam-ı cedit askerlerinin katılması beklenirdi. Ancak III. Selim bu askerleri bu savaşta kullanmamıştır | i asan nizam i cedid askerini kullanma basiretini gosteremeyen iii selim istenilen ricali feda etti ve nizam i cedid in butun kurum ve uygulamalariyla ilgasi is (0.386) |
| ekokuma_alemdar.js:106 | `ruscuk` · 1 bölüm · 19286 kr | Rus askeri daha iyiydi | askeri 800 eflakli ve (0.419) |
| ekokuma_bolge0073.js:92 | `habesistan` · 2 bölüm · 52134 kr | çekilemedi'dir, dolu karşılığı `etiyopya` okundu. Tarih uydurulmadı: TDV `sudan` seferi | ettiler bu donemde etiyopya ile misir arasinda sinir anlasmazligi meydana gelmedi hatta sudan daki (0.449) |
| ekokuma_diplomasi.js:71 | `sefaretname` · 2 bölüm · 35638 kr | 1793-03-01 Avrupa başkentlerine daimi elçilikler kuruldu | avrupa devletlerinde oldugu gibi daimi elciliklerin cok gec (0.591) |
| ekokuma_diplomasi.js:71 | `sefaretname` · 2 bölüm · 35638 kr | 1793-06-01 Londra'da ilk daimî elçilik | londra da ilk osmanli daimi elcisi olan yusuf (0.602) |
| ekokuma_dunya.js:166 | `birinci-dunya-savasi` · 1 bölüm · 21363 kr | kendi tercihiyle değil, oldu-bitti bir sonuç olarak | boylece turkler bir oldubitti sonucunda almanya (0.536) |
| ekokuma_dunya.js:343 | `atina` · 2 bölüm · 28306 kr | Atina'nın geri alınışı — Venedik'in çekilişi | atina nin venedikliler den geri alinisi yani ikinci fethinin hatirasi (0.595) |
| ekokuma_dunya.js:398 | `mezemorta-huseyin-pasa` · 1 bölüm · 9563 kr | Koyun Adaları deniz savaşlarında | tophane sirtlarinda (0.471) |
| ekokuma_dunya.js:542 | `zelzele` · 2 bölüm · 41837 kr | Allah'ın koyduğu tabiat kanunları çerçevesinde cereyan eden | allah in koydugu kanunlar cercevesinde cereyan ettigi dusunulmus (0.813) |
| ekokuma_hanedan.js:48 | `kosem-sultan` · 1 bölüm · 12794 kr | geçerli veraset usulünün dışına | yerli ve yabanci yazarlarca kaleme alinmis cogu (0.385) |
| ekokuma_ibrahim.js:53 | `kosem-sultan` · 1 bölüm · 12794 kr | bizzat iki defa bakmıştır | bizzat hapishanelere gider borclularin (0.476) |
| ekokuma_ihtilal.js:100 | `rusya` · 4 bölüm · 117011 kr | Napolyon'un Moskova seferinin (1812) Rus-Osmanlı barışını kolaylaştırdığını | 1812 devam eden savas napolyon un moskova seferine cikmasi sebebiyle pek agir (0.52) |
| ekokuma_ihtilal.js:124 | `prusya` · 1 bölüm · 26157 kr | Büyük Friedrich'in efsanevi ordusunun modası geçmiş bir savaş makinesi olduğunu ortaya çıkardı. | gelmesi ii friedrich in pek arzu ile gormek istemedigi bir olaydir kasim 1763 kral dusmanlariyla bir (0.412) |
| ekokuma_ihtilal.js:136 | `italya` · 5 bölüm · 54077 kr | İtalyan topraklarının modern anlamda tek bir devlet çatısı altında birleştirilmesinin ilk (ve kısa ömürlü) denemesi | daki islami teskilatlari bir cati altinda toplayarak bir federasyon olusturmak amaciyla 1990 yilinda kurulan italya cemaat ve islami (0.416) |
| ekokuma_ihtilal.js:152 | `yedi-ada-cumhuriyeti` · 1 bölüm · 15975 kr | Campo-Formio Antlaşması'nın 5. maddesi Venedik'e ait İyonya adalarının Fransa'ya bırakılmasını öngörüyordu. | silen bu antlasmanin 5 maddesi venedik e ait iyonya adalarinin fransa ya birakilmasini ongoruyordu bu gelismeler neticesinde osmanli (0.768) |
| ekokuma_ihtilal.js:168 | `misir` · 9 bölüm · 177127 kr | General Bonapart'ın ordusu İskenderiye'ye çıkarak Mısır'ı işgal etti; İngiltere'nin Hindistan yolunu hedefleyen bu sefer, bir Avrupa gücünün Osmanlı'nın merkez topraklarına ilk doğrudan saldırısıydı. | tarafli olarak misir i bagimsiz devlet ilan etti ancak su dort husus bir anlasmaya varilincaya kadar ingiliz hukumetinin yetkisine birakilmisti ingiltere nin mi (0.364) |
| ekokuma_ihtilal.js:168 | `misir` · 9 bölüm · 177127 kr | Fransızlar'ın Temmuz 1798'deki işgali Mısır'da yeni bir dönem açmış ve İngilizler karşısında doğudaki çıkarlarını koruma gerekçesiyle Mısır meselelerine müdahale etmişlerdir. | ve sonrasi fransizlar in temmuz 1798 deki isgali misir da yeni bir donem acmis ve ingilizler karsisinda dogudaki cikarlarini koruma gerekcesiyle (0.839) |
| ekokuma_kasrisirin.js:46 | `murad-iv` · 2 bölüm · 36853 kr | Bağdat Osmanlı'ya kesin olarak kaybedildi | kucuk ahmed pasa ya teslim olarak bogazici nde istavroz (0.479) |
| ekokuma_kasrisirin.js:46 | `murad-iv` · 2 bölüm · 36853 kr | Bağdat'ın geri fethi'ni tutuyor, yama inince kuyruk maddesini de tutacak — ikinci bağa gerek yok. Aynı şekilde K2 1623-01-14 maddesini 1623-11-28'e taşıyınca | in de oldurulmesini emrettigi kosem sultan in emrin gorevlilere ulasmasina engel olarak ibrahim in hayatta kalmasini sagladigi da soylenir iv murad donemi alim  (0.294) |
| ekokuma_kasrisirin.js:46 | `murad-iv` · 2 bölüm · 36853 kr | Bağdat'ın geçici olarak geri alınması | bagdat in geri alinmasi isine oncelik (0.622) |
| ekokuma_kolemen.js:71 | `yenbu` · 1 bölüm · 12449 kr | Mısır kuvvetleri ekim ayında Yenbu'yu ele geçirmiş ve burasını yapılacak operasyonlarda üs olarak kullanmışlardır. | ve hakimiyet tesisi yoluna gidildi yenbu ve cevresi misir valiligine baglanarak yonetildi 1766 da misir (0.398) |
| ekokuma_korfez.js:79 | `kuveyt` · 2 bölüm · 20840 kr | XVII. yüzyılın ilk yarısında kurulmuştur | xvii yuzyilin ilk yarisinda bu (0.841) |
| ekokuma_kurum.js:264 | `dayi` · 1 bölüm · 4311 kr | anne tarafından akraba (dayı) | anne tarafindan akrabasi arasinda (0.833) |
| ekokuma_magazin.js:326 | `bayezid-i` · 1 bölüm · 12657 kr | TDV: bayezid-i (gövde okundu, HTTP 200) · ankara-savasi (gövde okundu, HTTP 200) · timur (gövde okundu, HTTP 200) · demir kafes rivayeti: bulunamadı | bayezid in vasal i durumunda bulunan ii … ankara savasi bayezid in suratli bir … timur u cok kizdirdi anadolu ya yuruyup erzincan … hayir eserleri meydana getir (0.445) |
| ekokuma_p75b.js:132 | `husrev-pasa` · 1 bölüm · 17864 kr | bir bakıma Avrupa'nın vesayeti altına girdiğini | husrev pasa nin erzurum bagdat ve hemedan seferleri hakkinda genis bilgi (0.42) |
| ekokuma_p76c.js:57 | `otuzbir-mart-vakasi` · 1 bölüm · 9354 kr | planlayanların kim olduğu henüz açıklığa kavuşmamıştır | tam olarak acikliga kavusmamistir (0.644) |
| ekokuma_padisah.js:240 | `hac` · 9 bölüm · 184122 kr | halifelik makamı şahsen hacca gitmez | hacca gitmemistir abbasiler den hacca giden ilk halife (0.444) |
| ekokuma_rivayet.js:159 | `bir` · 1 bölüm · 16171 kr | kızlarağası onu odaya kilitledi | onu satabilir imam malik (0.4) |
| ekokuma_statu.js:156 | `fas` · 5 bölüm · 92829 kr | Fas'ın Osmanlı himayesine girmesi | fas munasebetleri osmanli (0.448) |
| ekokuma_toplum.js:129 | `surname` · 1 bölüm · 10666 kr | padişah çocuklarının doğum, sünnet ve düğün törenlerini anlatan | padisah cocuklarinin dogum ve sunnet torenleriyle padisah kizlarinin dugun torenlerini anlatan (0.782) |
| ekokuma_vezir.js:359 | `azak` · 1 bölüm · 5102 kr | Don Kazakları ve Rusların Karadeniz'e inmesini önlemek. | don kazaklari nin ve ruslar in karadeniz e inmelerine engel olacak (0.8) |
| ekokuma_yeniceri.js:130 | `tunus` · 5 bölüm · 95404 kr | ocak kalkınca çözülme başladı | ortaya cikmaya basladi 300 yili askin bir sure (0.373) |
| ekokuma_yeniceri.js:130 | `tunus` · 5 bölüm · 95404 kr | başlayan çözülme HIZLANDI mı | baslayan ve kisa zamanda (0.615) |
| ekokuma_yeniceri.js:133 | `yeniceri` · 1 bölüm · 80083 kr | Yeniçerilerden kahraman yapmak, tabloyu tersine çevirip II. Mahmud'u kötü adam saymak düpedüz romantizm olurdu; ama tarihin, farksız bir gerici güruha karşı modernleşmeci seçkinleri savunmak için yazılması da gerekmez. | asabiyet ortaya koyan ii mahmud un ocagin varligini devam ettirmesine karsi olmadigini ancak kendilerinden mutlak bir itaat bekledigini aksi halde bassehri anad (0.333) |
| ekokuma_yeniceri.js:137 | `tunus` · 5 bölüm · 95404 kr | 55 ila 57 yıl | serbest birakildi ayni yil ismini hizbu n (0.296) |
| gecitler.js:183 | `meric` · 1 bölüm · 8465 kr | adını köprüden alan şehir | adini uzunkopru ergene uzerine (0.582) |
| gecitler.js:313 | `kopru` · 1 bölüm · 14849 kr | İlhanlılar zamanında vezir Emîr Çoban tarafından 1297 yılında yaptırılan… YEDİ KEMERLİ (1878'den beri altı kemerli) taş köprü… inşası 2,5 YIL SÜREN, muazzam köprü… Bu tarihî köprü daha sonra BİRÇOK ASKERÎ BİRLİĞİN savaş sırasında faydalandığı bir yol teşkil etmiştir. Meselâ TİMUR'a ait kuvvetler bu  | ii bayezid zamaninda halic uzerine 240 m acikliginda bir kopru yapmayi teklif etmis … kemer adini vermislerdir kopru yapiminda cok mahir … kemer adini vermisler (0.375) |
| gecitler.js:313 | `kopru` · 1 bölüm · 14849 kr | Köprü bile bedava değil, ama ordu geçer | kopru cesidi de sallar kayiklar ve dubalar (0.45) |
| hukuki_sinirlar.js:265 · paket_16.js:270 | `karlofca` · 2 bölüm · 22209 kr | Podolya boşaltıldı, Kamaniçe Kalesi yıkıldı, Suçeva, Roman ve diğer kaleleri Osmanlılar geri aldı. | leh isgali altindaki suceva suczawa roman nemce njamtzo soroka ve kampulek kalelerini geri aliyordu karlofca konferansinin (0.454) |
| hukuki_sinirlar.js:300 · paket_16.js:305 | `karlofca` · 2 bölüm · 22209 kr | Ayamavra adaları, Korent denizi kuzey kıyıları ve bazı kalelerin (Kataro, Trebinye) iadesi | ayamavra ve civarindaki adalarda statukonun korunmasini korent denizinin kuzey kiyilarini ceviren uzun (0.553) |
| hukuki_sinirlar.js:359 · paket_16.js:364 | `karlofca` · 2 bölüm · 22209 kr | Sava nehrinin Bossut'un Sava'ya döküldüğü yerden Brot Kalesi'ne kadar sınır olması kabul edildi. | bosna sinirinda bossut un sava ya dokuldugu yerden brot kalesi ne kadar sava nehrinin sinir kabul edilmesine ragmen brot (0.753) |
| kademe_4ff22b.js:68 · kademe_4ff22b.js:69 · kademe_4ff22b.js:70 · kademe_4ff22b.js:71 · kademe_4ff22b.js:72 · kademe_4ff22b.js:73 | `fars` · 1 bölüm · 7282 kr | Siraz, Busehr, LAR, Fesa, Kazerun, Cehrem, Abade ve Firuzabad olmak uzere sekiz IL | cehrem 77 174 abade 40 969 ve firuzabad 34 433 olmak uzere sekiz il otuz iki (0.605) |
| kademe_e9353f.js:218 | `dalmacya` · 1 bölüm · 5352 kr | k:4 = kasaba, koy, KALE | nova novateyn maslovine (0.286) |
| kademe_f5c9a5.js:89 | `banda-adalari` · 1 bölüm · 3011 kr | Trade and Society in the Banda Islands in the Sixteenth Century | ada gruplari dahil guneydogu asya adalarinin tamamini isgal ettiler (0.308) |
| kademe_f5c9a5.js:89 | `banda-adalari` · 1 bölüm · 3011 kr | Rival Empires of Trade in the Orient | hollanda somurge idaresinden bugune ulasan (0.333) |
| kademe_f5c9a5.js:266 | `diu` · 1 bölüm · 5030 kr | 1538 sonrası Sûret vilâyetinin merkezi oldu | suret vilayetinin merkezi oldu burada bir (0.714) |
| kronoloji_altinorda.js:207 · paket_11.js:212 | `seyf-i-sarayi` · 1 bölüm · 4469 kr | Türkçeye ilk Gülistan tercümesi | ilk gulistan tercumesi olup (0.759) |
| kronoloji_balkan.js:363 · paket_12.js:2828 | `bulgaristan` · 5 bölüm · 95575 kr | eski toprakları geri aldığını | eski topraklarin geri alinabilecegini (0.848) |
| kronoloji_cok_hollanda.js:147 · paket_30.js:5387 | `hollanda` · 5 bölüm · 77642 kr | Pruisische interventie van 1787 | de geschiedenis van hayy ibn yaqzan amsterdam 1985 (0.346) |
| kronoloji_cok_once1281_anadolu.js:326 | `seddadiler` · 1 bölüm · 12766 kr | before Abu’l-Aswār usurped power in Ganja from Anušervān in 1049 | in veliahdi ve oglu iv fazl horasan da sultan sencer in yaninda bulunuyordu fazl ani (0.351) |
| kronoloji_cok_once1281_anadolu.js:459 | `seddadiler` · 1 bölüm · 12766 kr | Abu’l-Aswār died in Ganja in 1067, and his son Fażl II succeeded in his place | bu sirada ebu l esvar in veliahdi ve oglu iv fazl horasan da sultan sencer in yaninda bulunuyordu fazl ani (0.385) |
| kronoloji_cok_once1281_anadolu.js:1187 | `seddadiler` · 1 bölüm · 12766 kr | in 1126 Abu’l-Aswār II’s son Fażlun IV | yerine oglu ebu l esvar ii savur gecti (0.5) |
| kronoloji_cok_once1281_anadolu.js:1778 | `gurcistan` · 3 bölüm · 39757 kr | Süleyman Şah kalabalık ordusuna rağmen 598 Zilkade ayı başlarında (Temmuz sonları 1202) Erzurum-Kars arasındaki Micingerd Kalesi ovasında Gürcüler’e yenildi. | isyanlar nadir sah i tiflis eyaletini azerbaycan vilayetinden ayirmaya mecbur birakti bundan sonra nadir sah ii teymuraz i kartli nin oglu irakli yi ise kahet (0.372) |
| kronoloji_cok_once1281_anadolu.js:1810 | `haclilar` · 1 bölüm · 119614 kr | effective control after 1204 | yedi yil surecek 1204 1261 bir hakimiyet (0.265) |
| kronoloji_cok_once1281_anadolu.js:1873 | `alasehir` · 1 bölüm · 5939 kr | Denizli-Lâdik arasındaki Antiokhia şehri civarında yapılan savaşta Selçuklu ordusu galip durumda iken askerler yağmaya girişti. | ulkesinin en azametli sehri olarak belirtmektedir bizans imparatoru laskaris ile anadolu selcuklu sultani i giyaseddin keyhusrev arasinda gecen ve (0.36) |
| kronoloji_cok_once1281_anadolu.js:2198 | `bizans` · 1 bölüm · 75168 kr | Allied with the Bulgarian tsar John Asen II, John III defeated Theodore in battle (1230) and besieged Constantinople in 1235. | ii iustinianos ikinci defa 705 711 philippikos 711 713 ii anastasios 713 715 iii theodosios 715 717 iii leon 717 741 v konstantinos (0.349) |
| kronoloji_cok_once1281_anadolu.js:2319 | `mora` · 1 bölüm · 30134 kr | The principality was at its most successful under its prince William II Villehardouin (1246–78) | villehardouin in idaresinde mora da nisbeten huzur ortami saglandi bizans imparatoru viii mikhail palaiologos villehardouin (0.25) |
| kronoloji_cok_once1281_anadolu.js:2365 | `bizans` · 1 bölüm · 75168 kr | died November 3, 1254, Nymphaion [modern Kemalpaşa, Turkey] | ioannis vatatzis 1222 1254 ayni siyaseti benimseyerek gelismeyi devam ettirdi fakat (0.321) |
| kronoloji_cok_once1281_anadolu.js:2428 | `bizans` · 1 bölüm · 75168 kr | Gradually usurping more and more authority, Michael seized the throne and early in 1259 was crowned emperor | elinde tuttugu liman sehirleri disinda peloponez yarimadasina hakimdiler turkler in devamli baskisi altinda bulunan imparator (0.329) |
| kronoloji_cok_once1281_anadolu.js:2442 | `mora` · 1 bölüm · 30134 kr | In 1259 much of Epirus came under Nicaean control, but this was lost by 1264. | in mora nin yunan nufusunun tamamen yok oldugu bunun yerine slavlar in geldigi ancak yuzyillar (0.331) |
| kronoloji_cok_once1281_avrupa.js:190 | `muvahhidler` · 1 bölüm · 16344 kr | Amb el consentiment d’Innocenci III foren convocats | kaleme alindi abdulvahid el merrakusi nin el mu cib fi telhisi (0.354) |
| kronoloji_cok_once1281_iran.js:140 | `kipcaklar` · 2 bölüm · 19804 kr | 1224 Kırım'da Suğdak limanını Moğollardan geri aldı | kirim daki sugdak sudak sehrini zaptedince kipcak ve (0.485) |
| kronoloji_cok_senkron_0930.js:62 | `kucuk-kaynarca-antlasmasi` · 1 bölüm · 22961 kr | Osmanlı Devleti ile Rusya arasında 26 Temmuz 1774’te yapılan barış antlaşması | cemaziyelevvel 1188 21 temmuz 1774 binbasi sersnev yapilan antlasmanin 23 temmuz tarihli olarak sadrazam tarafindan (0.438) |
| kronoloji_cok_senkron_0930.js:68 | `lozan-antlasmasi` · 1 bölüm · 12686 kr | 24 Temmuz 1923’te imzalanan antlaşma | 24 temmuz 1923 te lozan universitesi (0.694) |
| kronoloji_cok_senkron_0930.js:84 | `berlin-antlasmasi` · 1 bölüm · 5576 kr | 13 Temmuz 1878’de imzalanan antlaşma | temmuz 1878 tarihli bir ek antlasma (0.62) |
| kronoloji_cok_senkron_0930.js:94 | `pasarofca-antlasmasi` · 1 bölüm · 16921 kr | Avusturya ve Venedik devletleriyle yaptığı barış antlaşması (21 Temmuz 1718) | avusturya savasi sonunda yapilan belgrad antlasmasi ile 1739 (0.567) |
| kronoloji_cok_senkron_0930.js:367 | `edirne-antlasmasi` · 1 bölüm · 7452 kr | 14 Eylül 1829 tarihinde imzalanan antlaşma | 14 eylul 1829 pazartesi gunu imza (0.613) |
| kronoloji_dogu_afrika.js:949 · paket_12.js:4472 | `somali` · 2 bölüm · 20945 kr | Geledi, Hobyo (Obbia), Mecertin sultanlıkları | geledi kabilesinin nufuzu devam ediyordu (0.42) |
| kronoloji_fransa.js:280 · paket_08.js:2188 | `fransa` · 6 bölüm · 98438 kr | 18 Şubat 1536'da Jean de la Forest ile İbrahim Paşa arasında ticari anlaşma imzalandı | jean de la forest ile kanuni adina sadrazam makbul ibrahim pasa arasinda fransa ya ticari imtiyazlar taniyan bir (0.579) |
| kronoloji_gurcistan.js:310 · paket_12.js:5918 | `ahiska` · 1 bölüm · 2761 kr | Ahıska ve Ahılkelek Rusya'ya terkedildi... eyalet beş kazaya düştü | ahiska ve ahilkelek sancaklari merkezi kars … eyalet oldu bir ara (0.571) |
| kronoloji_misir.js:105 · olaylar_ek4.js:30 · paket_01.js:1930 · paket_11.js:1684 | `hursid-ahmed-pasa` · 1 bölüm · 10761 kr | 1805 yılının Mayıs ayına gelindiğinde | antlasmasi ile 28 mayis 1812 sirp isyancilarinin eline (0.418) |
| kronoloji_misir.js:105 · olaylar_ek4.js:30 · paket_01.js:1930 · paket_11.js:1684 | `hursid-ahmed-pasa` · 1 bölüm · 10761 kr | Mayıs 1805'te Kahire'ye bir atama fermanı gönderildi. Aynı ay, ulema ve Kahire'nin ileri gelenleri … talepte bulundular | davetini kabul ederek kahire ye gitti 21 mart 1804 mehmed ali pasa nin babiali nezdinde … yaptigi da (0.39) |
| olaylar_ek20.js:350 · paket_04.js:627 | `almanya` · 4 bölüm · 94686 kr | Almanya 300'e yakın devlete bölündü | donuldu ve almanya 300 e yakin bolge devletine bolundu (0.787) |
| olaylar_ek3.js:30 · paket_01.js:1869 | `viyana` · 1 bölüm · 30486 kr | II. Viyana Kuşatmasının başlaması | ii viyana muhasarasi nin (0.679) |
| olaylar_ek5.js:221 · paket_01.js:2429 | `kalenderoglu-mehmed` · 1 bölüm · 3168 kr | Rebîülâhir 1017 (Ağustos 1608) | ugradi 26 rebiulahir 1017 9 agustos 1608 (0.824) |
| olaylar_ek5.js:309 · paket_01.js:2517 | `yusuf-ziya-pasa` · 1 bölüm · 17751 kr | 9 Eylülde Fransa'ya resmen savaş ilân ederek, Fransız Maslahatgüzarı Rulfin'i Yedikule zindanlarına attırdı (12 Eylül) | uzerine mir i mirandan maden emini ispanakci mustafa pasa ya intisap ederek enderun agasi oldu mustafa pasa nin vezaret rutbesiyle erzurum (0.364) |
| olaylar_ek5.js:436 · paket_01.js:2644 | `balkan-savasi` · 1 bölüm · 12919 kr | June 29, 1913 - August 10, 1913 | 29 eylul 1913 te istanbul da (0.4) |
| olaylar_ek8.js:343 · paket_02.js:436 | `afganistan` · 2 bölüm · 52034 kr | Zaman Shah Durrani'de; New World Encyclopedia (Wikipedia türevi) ve Wikipedia dayanak olarak KALDIRILDI. TDV 'ahmed-sah-durrani | yetistirdigi buyuk edip ve sairler arasinda devletin kurucusu olan ahmed sah durrani ile oglu timur sah ve sah suca sayilabilir bu (0.341) |
| olaylar_p0036.js:16 · paket_25.js:69 | `kilitbahir-kalesi` · 1 bölüm · 4934 kr | Çanakkale Boğazı'nın Rumeli yakasında İstanbul'un fethinden sonra yapılmış kale. | canakkale bogazi nin rumeli yakasinda deniz gecisini kontrol altinda (0.653) |
| olaylar_p0043a.js:61 · paket_15.js:66 | `nis` · 1 bölüm · 12241 kr | yıl biliniyor, gün bilinmiyor | yilinda yirmi bes gun suren agir bir (0.469) |
| olaylar_p0043kirim.js:41 · paket_15.js:164 | `ozu` · 1 bölüm · 8133 kr | in 1526 assumed direct control of the right bank with Kazi-Kermen as its northern outpost. | nehri boyundaki kazaklar in karadeniz e cikis noktasinda bulunmasi sebebiyle kalenin onemi giderek artti 1583 1584 te kazaklar in (0.312) |
| olaylar_p0048.js:46 · paket_15.js:358 | `bir` · 1 bölüm · 16171 kr | In the year 1000/1591-92 | disindaki mezhepler cok suyun (0.34) |
| olaylar_p0050.js:36 · paket_15.js:581 | `hirvatistan` · 1 bölüm · 16822 kr | Sabor u Cetinu 1527. godine | sabor rh adinda iki meclisli (0.407) |
| olaylar_p0050.js:36 · paket_15.js:581 | `hirvatistan` · 1 bölüm · 16822 kr | na samu Novu godinu | na katilmasiyla vuku buldu (0.444) |
| olaylar_p0050.js:37 · paket_15.js:582 | `bihac` · 1 bölüm · 8833 kr | Cetinski sabori u 1527. | bir sanayi sehri konumundadir (0.353) |
| olaylar_p0050.js:58 · paket_15.js:603 | `dubrovnik` · 1 bölüm · 11031 kr | Osvrt na ustanak podignut u Dubrovniku 1813.–1814. | onemli olcude etkilendi ve pek cok tarihi eser tahrip edildi (0.222) |
| olaylar_p0050.js:68 · paket_15.js:613 | `sirbistan` · 2 bölüm · 34624 kr | Zakon o proglašenju Knjažestva Srbije za Kraljevinu | fakultesi ve 2002 den itibaren bir ozel universite yer almaktadir sirbistan (0.317) |
| olaylar_p0050.js:78 · paket_15.js:623 | `filistin` · 1 bölüm · 89043 kr | An Interim Report on the Civil Administration of Palestine during the period 1st July, 1920–30th June, 1921 | diyari diye anildigi bu donemde tarim ve ozellikle ticareti on planda tutan bir medeniyet gelismis ve (0.243) |
| olaylar_p0053.js:43 · paket_15.js:793 | `kerkuk` · 1 bölüm · 11332 kr | Kerkük Beylerbeyisi Bostan Paşa | kerkuk olan muhafazanin nufusu (0.426) |
| olaylar_p0053.js:53 · paket_15.js:803 | `sehrizor` · 1 bölüm · 8499 kr | 16 Mart 1630da Şehrizorda Gülanber Kalesi'nin inşaatına başlanmıştır | uzere insa edilen gulanber kalesi nin temel atma toreninde hazir bulundu ve (0.476) |
| paket_13.js:249 · yerlesimler.js:244 | `doksanuc-harbi` · 1 bölüm · 12542 kr | Kars'ın düşüşü — Doğu cephesinin çözülmesi ve Aziziye tabyaları | ayrica bosna hersek in muhtariyeti ve rumeli deki hiristiyan ahalinin bulundugu vilayetlerde (0.379) |
| paket_13.js:504 · yerlesimler.js:499 | `lipova` · 1 bölüm · 6509 kr | ellenállás nélkül foglalta el Lugost | gonderen 10 000 kadar nufuslu (0.338) |
| paket_13.js:624 · yerlesimler.js:619 | `kabartaylar` · 1 bölüm · 6469 kr | Küçük Kaynarca (1774) … Kabartayları Rusya ile birleştirdi | kaynarca antlasmasi 1774 … 1774 kabartaylar i rusya ile birlestirdi rus (0.773) |
| paket_13.js:1344 · yer_yama_erken.js:12 · yerlesimler.js:1339 | `yanikkale` · 1 bölüm · 7826 kr | A Gyori fokapitanysag tortenete 1526-1598 | a teslimiyle sonuclandi kaleyi teslim eden (0.313) |
| paket_13.js:1556 · yerlesimler.js:1551 | `artuklular` · 2 bölüm · 25152 kr | Dulkadırlı, Kadı Burhâneddin, Karakoyunlu ve Akkoyunlu arasında sık sık el değiştirdi | dustu karakoyunlu ve akkoyunlu turkmenleri bolgede nufuz sahibi olmaya basladilar bu sirada el meliku s (0.441) |
| paket_13.js:1556 · yerlesimler.js:1551 | `akkoyunlular` · 1 bölüm · 21468 kr | Barsbay'ı 1429'da Harput'u KURTARMAK üzere bir öncü kuvvet göndermeye itti | bulunan oglu murad i hukumdar ilan ettiler ve bir sure sonra uzerlerine gelen sultan ahmed i (0.386) |
| paket_13.js:2294 · yerlesimler.js:2289 | `harput` · 1 bölüm · 12675 kr | atalarından kalan toprakları Osmanlılara kadar yönetmelerine izin vermişlerdir | hisar icinde 1000 kadar toprak ortulu ev ile eski bir caminin (0.388) |
| paket_13.js:8648 · yer_yama_kademe_zincir.js:31 · yerlesimler_kirim.js:157 | `bahcesaray` · 1 bölüm · 4751 kr | Solhat ve Kırk Yer önemini kaybetti | solhat ve kirk yer den kirker (0.719) |
| paket_14.js:5822 · yerlesimler_ek27.js:51 | `ramazanogullari` · 2 bölüm · 27396 kr | başta Adana olmak üzere Çukurova yöresi | basta adana olmak uzere kizildag yaylasi (0.759) |
| paket_17.js:724 · yerlesimler_e9353f.js:165 | `gao` · 1 bölüm · 4581 kr | the old cities of JENNE and TIMBUKTU | ve faslilar in melezlesmis torunlarindan (0.342) |
| paket_23.js:679 · yerlesimler_nokta_asya_0917.js:107 | `afganistan` · 2 bölüm · 52034 kr | passed after his death to Ahmed Shah, Abdalli | seyyaf in yardimcisi ahmed sah getirildi varilan anlasmaya gore baskanliga uc (0.38) |
| paket_24.js:29 · yerlesimler_a78_afrika.js:24 | `bati-sahra` · 1 bölüm · 10844 kr | presencia colonial… únicamente se mantuvo… en tres puestos de la costa: Villa Cisneros, Cabo Juby y La Agüera | tartisilmakta olup … referanduma gidilmesi konusu hala tartisilmakta olup … etmeyi planladi ise de birlesmis milletler in araya girmesi buna engel oldu ve 1981  (0.315) |
| paket_24.js:54 · yerlesimler_a78_afrika.js:49 | `sinkit` · 1 bölüm · 6904 kr | le 22 janvier 1908, peu après la prise d'Atar | noire xxivb 3 4 dakar 1962 s 313 409 yazmistir (0.356) |
| yer_yama.js:332 | `eflak` · 1 bölüm · 18822 kr | 1 Mayıs 1849 Baltalimanı Antlaşması | sonunda imzalanan edirne antlasmasi eflak in oteden beri (0.396) |
| yer_yama.js:461 | `said-b-sultan` · 1 bölüm · 3455 kr | Ülke Maskat ve Zengibar arasında bölündü | maskat ta dordu zengibar da hukum (0.603) |
| yer_yama.js:638 | `altin-orda-hanligi` · 1 bölüm · 10265 kr | Mengli Giray yenilip kaçtı | kirim hani haci giray ile moskova knezi (0.462) |
| yer_yama.js:653 | `gazi-giray-ii` · 2 bölüm · 12738 kr | Gazi Kirman'dan dönüş yolunda | gazi kirman kalesi nin insasina (0.633) |
| yer_yama.js:658 | `kirim` · 3 bölüm · 113887 kr | Merzifonlu Kara Mustafa Paşa kumandasında büyük bir ordu, Kırım Hanı Murad Giray'ın ordusuyla Ukrayna'da Çehrin Kalesi'ni ele geçirerek tahrip etti. | yol acmistir merzifonlu kara mustafa pasa kumandasinda buyuk bir ordu kirim hani murad giray in 1678 1683 ordusuyla birlikte ukrayna da cehrin kalesi ni cetin b (0.812) |
| yer_yama_hayalet.js:197 · yer_yama_hayalet.js:332 · yer_yama_hayalet.js:359 · yer_yama_hayalet.js:386 · yer_yama_hayalet.js:440 | `muzafferiler` · 1 bölüm · 5979 kr | Kassan, Erdistan, Nain, Erdekan | adli eserin muellifi muinuddin (0.345) |
| yer_yama_hayalet.js:834 | `muzafferiler` · 1 bölüm · 5979 kr | 1357: İncûları ortadan kaldırdı | ve bu hanedani ortadan kaldirdi 758 1357 (0.6) |
| yer_yama_sahiplik.js:278 | `belgrad` · 1 bölüm · 7858 kr | Habsburg kontrolündeki alan Şumadija ve Raška dahil bugünkü Sırbistan'ın büyük kısmını kapsıyordu | de tuna belgradi ve ungurus belgradi gibi adlarla anilmistir bugunku belgrad in yer aldigi alan neolitik (0.408) |
| yer_yama_uyg2.js:178 | `sanliurfa` · 3 bölüm · 48398 kr | Suriye ve Adana'yı ceza verdi, Urfa (Diyarbakır/Rakka bölgesi) o listede YOK — mevcut kaydın 1832 başlangıcı ve 1841'e kadar süren bölgesel şablonu (Adana ile aynı) buraya YANLIŞ kopyalanmış görünüyor. 🔴 KESİN BİLİNMEYEN: bitiş tarihi. TDV yalnız 'kısa süre | urfa yi bosaltmayi kabul ettiler ve ertesi gun sehri terkettiler urfa cumhuriyet doneminde vilayet merkezi oldu 20 nisan 1924 fiziki yapi nufus ve ekonomi urfa  (0.254) |

### YOK — slug kayması (alıntı BAŞKA bir TDV maddesinde BİREBİR geçiyor) — 74 satır · 55 tekil alıntı

Sahte değil, yanlış slug. `baska_maddede` sütunu doğru adayı verir.

| konum(lar) | slug · gövde kanıtı | alıntı | en yakın gövde parçası (benzerlik) |
|---|---|---|---|
| devletler.js:7598 · paket_05.js:7617 | `hadramut` · 1 bölüm · 18675 kr · başka maddede: `bombay` | XV. yüzyılın ikinci yarısı | yuzyilin ikinci yarisinda da (0.83) |
| devletler.js:8900 · paket_05.js:8919 | `sencer` · 1 bölüm · 28188 kr · başka maddede: `selcuklular` | Üç gün devam eden savaş neticesinde Selçuklular kesin bir zafer kazandı (8 Ramazan 431 Cuma / 23 Mayıs 1040). | vermesinden endise eden arslan han sultan sencer den yardim istedi ancak bir sure sonra diger oglu ii ahmed in isyanci fakihi oldurdugunu (0.34) |
| devletler.js:8939 · paket_05.js:8958 | `harizmsahlar` · 1 bölüm · 18520 kr · başka maddede: `selcuklular` | Muhammed Tapar’ın ölümü üzerine yerine geçen oğlu Mahmud, 13 Muharrem 512’de (6 Mayıs 1118) Abbâsî Halifesi Müstazhir-Billâh tarafından sultan ilân edildi ve adına hutbe okundu. | rolunde idi atsiz in olumu uzerine yerine oglu ilarslan gecti 1156 1172 ve harizmsahligi sencer tarafindan tasdik edildi sencer 1157 de olunce dogu iran in en k (0.435) |
| devletler.js:9651 · paket_05.js:9670 | `sind` · 1 bölüm · 8861 kr · başka maddede: `multan` | Nihayet 571’de (1175-76) Gurlular’dan Muizzüddin Muhammed b. Sâm bölgede kesin Sünnî hâkimiyetini tesis etti. Delhi Sultanlığı döneminin başlarında Mültan bölgesi, zamanla bağımsız bir idare kuran ve yirmi iki yıl hüküm süren Nâsırüddin Kabâce’nin idaresinde kaldı | zayiflamasiyla gurlu muizzuddin muhammed 1175 ten itibaren bolgeye hakim oldu ve onun yonetimi 1206 da bir ismaili fedaisi tarafindan oldurulmesine kadar surdu  (0.4) |
| devletler.js:9652 · paket_05.js:9671 | `sind` · 1 bölüm · 8861 kr · başka maddede: `multan` | 626 (1228) yılında Sultan İltutmış burayı eyalet merkezi yaptı. | merkezi bakkar olan yukari sind ve 1591 de merkezi (0.345) |
| devletler.js:9937 · paket_05.js:9956 | `halep` · 3 bölüm · 40369 kr · başka maddede: `eyyubiler` | I. el-Melikü’l-Âdil Seyfeddin 579 (1183) | i eyyubi nin kardesi el meliku l adil in ricasi uzerine (0.5) |
| devletler.js:10070 · paket_05.js:10089 | `abdurrahman-iii` · 1 bölüm · 16190 kr · başka maddede: `endulus` | Böylece 756’da bağımsız bir emirlik olarak kurulan Endülüs Emevî Devleti yıkılmış oldu (422/1031). | kadar her tarafta endulus emevi devleti nin hakimiyeti taninmis oldu bununla beraber zaman zaman durumdan memnun olmayanlarin isyan (0.416) |
| devletler.js:10083 · paket_05.js:10102 | `sarakusta` · 1 bölüm · 7009 kr · başka maddede: `mulukut-tavaif` | Âmirî ailesinin 400 (1009) yılında iktidardan uzaklaştırılmasının ardından Emevî şehzadelerinin Kurtuba’da (Córdoba) taht kavgalarıyla uğraşmaları sırasında meydana gelen otorite boşluğu | savunma merkezlerinin basinda gelen sarakusta kurtuba cordoba yonetimi sirasinda girisilen bircok isyana sahne oldu 136 753 yilinda emevi valisi sumeyl b hatim  (0.33) |
| devletler.js:10191 · paket_05.js:10210 | `sicilya` · 1 bölüm · 9829 kr · başka maddede: `kelbiler` | Fâtımî Halifesi Mansûr-Billâh’ın Benî Taberî isyanını bastırmak için Hasan b. Ali el-Kelbî’yi yarı müstakil idare yetkisi vererek Sicilya’ya göndermesi (335/947) | halifesi mansur billah in beni taberi isyani ni bastirmasi icin hasan b ali el kelbi yi sicilya ya vali tayin etmesiyle 335 947 doksan yil yari (0.731) |
| ekokuma_alemdar.js:95 | `ayan` · 1 bölüm · 16734 kr · başka maddede: `sened-i-ittifak` | senedin onaylanıp DAHA SONRA ORTADAN KALDIRILMASI | verdi ayanlik ortadan kaldirilmakla beraber ayan esraf vb olarak bilinen (0.496) |
| ekokuma_alemdar.js:106 | `sohum` · 1 bölüm · 12427 kr · başka maddede: `ruscuk` | Count Kaminski kumandasındaki Rus ordularınca gerçekleştirilen uzun ve kanlı bir kuşatmaya direndi; 26 Eylül 1810'da garnizonun ve sivillerin şehri güven içerisinde terketmesi karşılığında teslim oldu | rus ihtilali esnasinda abhazya rus sivil savasi icinde yok oldu kizilordu ve yerel gucler sehri 4 mart 1921 de ele gecirip sovyet hukumranligini ilan ettiler 31 (0.295) |
| ekokuma_antlasma4.js:615 | `iran` · 11 bölüm · 249630 kr · başka maddede: `mahmud-i--osmanli` | Bağdat Valisi Ahmed Paşa nezdinde | ahmed sair durri ahmed efendi (0.484) |
| ekokuma_antlasma4.js:1202 | `fransa` · 6 bölüm · 98438 kr · başka maddede: `imtiyazat` | 4 Rebîülâhir 884 (25 Haziran 1479) | baslama karari aldi haziran 1960 ve ulke iki yil (0.4) |
| ekokuma_karsi.js:82 | `caldiran-savasi` · 1 bölüm · 10637 kr · başka maddede: `safeviler,selim-i` | 2 Receb 920 / 23 Ağustos 1514 | 23 agustos gunu iran azerbaycani nda (0.349) |
| ekokuma_rusiran.js:40 | `derbend--dagistan` · 1 bölüm · 12303 kr · başka maddede: `kumuklar` | Ruslar şemhallerin bağımsız yönetimlerine son verdiler (1725) | islamiyye ve digerleri bagimsiz bir devlet kurma cabasi gosterdiler fakat (0.47) |
| kronoloji_cok_once1281_anadolu.js:310 | `nasruddevle` · 1 bölüm · 6207 kr · başka maddede: `mervaniler--diyarbakir` | Büveyhîler adına okuttuğu hutbeyi Tuğrul Bey adına okutmaya başladı (441/1049). | bey in istegiyle diyarbekir de hutbeyi selcuklular adina okutmaya (0.511) |
| kronoloji_cok_once1281_anadolu.js:473 | `gurcistan` · 3 bölüm · 39757 kr · başka maddede: `sirvansahlar` | 1068’de Gürcistan seferi sırasında Sultan Alparslan’a itaat arzeden Ferîburz | 1049 dan itibaren gurcistan a akinlar yapmaya basladilar sultan alparslan gurcistan in kufur isyan (0.552) |
| kronoloji_cok_once1281_anadolu.js:703 | `selcuklular` · 13 bölüm · 182648 kr · başka maddede: `danismendliler` | müttefik Türk kuvvetleri 17 Receb 490 (30 Haziran 1097) günü Eskişehir ovasında Haçlılar’la çarpıştılarsa da | ve iznik kaybedildi haziran 1097 eskisehir yakininda yapilan savas da bozgunla sonuclandi temmuz 1097 kilicarslan iznik in ardindan konya (0.453) |
| kronoloji_cok_once1281_anadolu.js:750 | `selcuklular` · 13 bölüm · 182648 kr · başka maddede: `danismendliler` | 20.000 kişilik Türk kuvveti karşısında Ağustos 1101’de Merzifon yakınlarında bozguna uğradılar. | 000 suvari ve 100 000 kisilik bir maiyeti vardi kirman selcuklulari icin tesbit (0.416) |
| kronoloji_cok_once1281_anadolu.js:811 | `artuklular` · 2 bölüm · 25152 kr · başka maddede: `haclilar` | Mardin Hâkimi Artukoğlu Sökmen ve Musul Valisi Çökürmüş’ün kuvvetleriyle yapılan savaşta (7 Mayıs 1104) kuzeni Josselin ile birlikte esir düşen | kismini kendisine bagladi sokmen 1104 yilinda haclilar i emir cokurmus ile beraber agir bir bozguna ugrattigi gibi kudus krali i baudouin ile urfa kontu (0.355) |
| kronoloji_cok_once1281_anadolu.js:827 | `danismendliler` · 2 bölüm · 43999 kr · başka maddede: `selcuklular` | Dânişmendli Gümüştegin Gazi’nin ölümünün ardından doğunun en mâmur şehirlerinden olan Malatya’yı ele geçirdi (1 Muharrem 500 / 2 Eylül 1106). | danismendli hukumdarlari sivas kolu danismend gazi 464 1071 gumustegin gazi 477 1085 emir gazi melik gazi 497 1104 melik muhammed 528 (0.372) |
| kronoloji_cok_once1281_anadolu.js:843 | `inalogullari` · 1 bölüm · 5678 kr · başka maddede: `selcuklular` | esir düşmemek için karşıya geçmek amacıyla atını Habur çayına sürdü ve sulara gömülerek hayatını kaybetti (500/1107). | guneydogu anadolu beyleri gibi terketti ve yenilen kilicarslan habur irmagini gecmeye calisirken boguldu 500 1107 (0.352) |
| kronoloji_cok_once1281_anadolu.js:874 | `ahlatsahlar` · 1 bölüm · 23881 kr · başka maddede: `meyyafarikin` | Meyyâfârikīn, Şevval 502’de (Mayıs 1109) Ahlatşahlar’ın kurucusu Sökmen el-Kutbî tarafından ele geçirildi. | zafer kazanan 7 mayis 1104 sokmen in sokmen el kutbi oldugu iddiasi asla kabul edilemez cunku yerli ve (0.461) |
| kronoloji_cok_once1281_anadolu.js:936 | `harput` · 1 bölüm · 12675 kr · başka maddede: `artuklular` | Artuk Bey’in torunu Belek b. Behrâm 1112 yılında Harput’a hâkim olmuş ve Palu merkez olmak üzere burada kendi beyliğini kurmuştu. | bey tarafindan fethedildi ve burasi merkez olmak uzere bolgede palu ve cemiskezek cevrelerini icine alan cubukogullari beyligi kuruldu ancak bu beyligin omru uz (0.42) |
| kronoloji_cok_once1281_anadolu.js:968 | `danismendliler` · 2 bölüm · 43999 kr · başka maddede: `selcuklular` | Kardeşi Mesud, dirayetli bir hükümdar olan kayınpederi Dânişmendli Emîr Gazi’nin yardımıyla hükümdarlığı Melikşah’ın elinden aldı (510/1116). | en nufuzlu hukumdari olan emir gazi nin melik gazi olumunden sonra 528 1134 danismendli tahtina buyuk oglu melik muhammed gecti abbasi halifesi (0.379) |
| kronoloji_cok_once1281_anadolu.js:1032 | `artuklular` · 2 bölüm · 25152 kr · başka maddede: `dilmacogullari` | İlgazi, Togan Arslan’ın yardımıyla Antakya Haçlı Prensi Roger’i Tel İfrîn’de ağır bir yenilgiye uğrattı | mucadele veren ilgazi antakya hakimi roger i tel ifrin vadisinde buyuk bir bozguna ugratti haziran (0.55) |
| kronoloji_cok_once1281_anadolu.js:1079 | `saltuklular` · 2 bölüm · 14756 kr · başka maddede: `dilmacogullari` | İlgazi’nin ordusu, Kıpçaklar’dan da yardım gören Gürcüler karşısında ağır bir yenilgiye uğradı (Cemâziyelâhir 515 / Ağustos 1121). | ilgazi gurculer le cihada memur edildi 515 1121 yilinda erzen beyi togan arslan ile erzurum a geldi emir (0.377) |
| kronoloji_cok_once1281_anadolu.js:1095 | `meyyafarikin` · 1 bölüm · 8377 kr · başka maddede: `artuklular` | bu seferden başarısızlıkla dönmesine rağmen Meyyâfârikīn’ı (Silvan) ona iktâ etti. | bu firsattan yararlanan kurt reisi seyyid ahmed bey ruzeki meyyafarikin i zaptetti ancak sehir (0.474) |
| kronoloji_cok_once1281_anadolu.js:1140 | `sirvansahlar` · 1 bölüm · 11545 kr · başka maddede: `gurcistan` | fakat kayda değer bir başarı elde edemedi (517/1123). Kral David aynı yıl Şirvan’ı ilhak etti | a akinlar yapan turk gocebe asiretlerine karsi dag gecitlerini koruyorlardi araplar sirvan i ve derbend (0.373) |
| kronoloji_cok_once1281_anadolu.js:1249 | `misis` · 1 bölüm · 16024 kr · başka maddede: `haclilar` | II. Bohemund’un hâkimiyeti 1130’da Dânişmendliler ile yaptığı savaşta ölmesiyle son buldu | savasta ii bohemund olduruldu i leon 1131 de misis tarsus ve adana yi ele gecirdi a (0.398) |
| kronoloji_cok_once1281_anadolu.js:1421 | `ahlatsahlar` · 1 bölüm · 23881 kr · başka maddede: `saltuklular` | Ani’de baskına uğrayan Saltuklular mağlûp oldu. İzzeddin Saltuk ve çok sayıda asker esir düştü. | savas baslayacagi sirada izzeddin saltuk gurcu krali ve ogullari ile savasmayacagina dair evvelce esir iken ant ictigini bahane (0.445) |
| kronoloji_cok_once1281_anadolu.js:1453 | `ahlatsahlar` · 1 bölüm · 23881 kr · başka maddede: `saltuklular` | birleşerek Ani’yi kuşattılar (Şâban 556 / Ağustos 1161). | ani yi kusattilar agustos 1162 bunu haber alan (0.598) |
| kronoloji_cok_once1281_anadolu.js:1498 | `kars` · 1 bölüm · 14200 kr · başka maddede: `gurcistan` | Gürcüler 1161’de Ani’yi, ertesi yıl Kars ve Duvîn’i istilâ ettiler | kara bey ve mescid i cafer yeniceri idi kars in bu (0.365) |
| kronoloji_cok_once1281_anadolu.js:1514 | `dilmacogullari` · 1 bölüm · 5384 kr · başka maddede: `danismendliler` | Erzen ve Bitlis Emîri Fahreddin Devletşah ile birlikte yeniden harekete geçip Sivas üzerine yürüdü ve şehri zaptetti (1163). | emiri kara arslan ve mardin artuklu emiri necmeddin alpi ile birlikte danismendli yagibasan a karsi harekete gecerek sivas a kadar ilerlediyse (0.517) |
| kronoloji_cok_once1281_anadolu.js:1530 | `saltuklular` · 2 bölüm · 14756 kr · başka maddede: `ahlatsahlar` | Lukri Kalesi civarında yapılan savaşta Gürcüler yenilmişler ve bütün ağırlıklarını bırakıp kaçmışlardır (Temmuz 1163). | ve gurculer le yapilan savaslarda azerbaycan ve turkistan dan gelen goc ve ticaret yollarinin acik tutulmasinda onemli (0.446) |
| kronoloji_cok_once1281_anadolu.js:1636 | `ahlatsahlar` · 1 bölüm · 23881 kr · başka maddede: `dilmacogullari` | Selâhaddîn-i Eyyûbî’ye karşı teşkil edilen birleşik orduda II. Sökmen, Musul Hâkimi İzzeddin Mesud ve Artuklu Emîri II. İlgazi ile birlikte görev aldı (579/1183). | selahaddin e karsi mucadele etmek icin musul hukumdari izzeddin mesud ile bir ittifak meydana getirdi bununla ilgili olarak sokmen degerli emirlerinden seyfeddi (0.439) |
| kronoloji_cok_once1281_anadolu.js:1699 | `meyyafarikin` · 1 bölüm · 8377 kr · başka maddede: `ahlatsahlar` | Muhasara devam ettiği sırada Sökmen’in öldüğü haber alındı (9 Rebîülâhir 581 / 10 Temmuz 1185). | 1115 yilinda sokmen in oglu ibrahim in elinden alarak kendi memluklerinden karaca es saki ye ikta etti 515 te (0.402) |
| kronoloji_cok_once1281_anadolu.js:1809 | `haclilar` · 1 bölüm · 119614 kr · başka maddede: `bizans` | II. İsaakios’un kuzeni Mikhail Angelos merkezi Arta olmak üzere Epiros Devleti’ni tesis etti. | angelos tarafindan bizans tahtindan indirilmis olan eski imparator ii isaakios angelos un oglu aleksios tan bir mesaj geldi (0.318) |
| kronoloji_cok_once1281_anadolu.js:1889 | `pervaneogullari` · 1 bölüm · 5295 kr · başka maddede: `selcuklular` | Keykâvus Sinop Limanı’nı fethetti (611/1214). | keykavus tarafindan fethedilen sinop 611 1214 daha (0.63) |
| kronoloji_cok_once1281_anadolu.js:1949 | `trabzon` · 2 bölüm · 43207 kr · başka maddede: `sinop` | Trabzon’daki Komnenoslar’ın egemenliğine giren Sinop, I. İzzeddin Keykâvus tarafından fethedildi (26 Cemâziyelâhir 611 / 2 Kasım 1214). | komnenoslar in sarayi da sur icinde bulunmaktadir ve hem clavijo hem de bessarion tarafindan tasvir edilmistir komnenoslar doneminde bassehir trabzon 250 (0.363) |
| kronoloji_cok_once1281_anadolu.js:2056 | `saltuklular` · 2 bölüm · 14756 kr · başka maddede: `mengucukluler` | Fahreddin Behram Şah, Uluğ Keykubad’ın hükümdarlığının ilk yıllarını da gördükten sonra 1225 yılında vefat etti. | ali b saltuk da bulunuyordu gurcu krali ii david in 1115 te rostov u aldiktan sonra ertesi yil emir (0.383) |
| kronoloji_cok_once1281_anadolu.js:2260 | `germiyanogullari` · 1 bölüm · 15600 kr · başka maddede: `selcuklular` | Malatya bölgesindeki Türkmenler 1240 yılında Horasanlı Baba İshak’ın işareti üzerine ayaklanıp devlet kuvvetlerini mağlûp ettiler | gelen alimlerinden ishak fakih i osmanli bassehrine yolladi ishak fakih in getirdigi hediyeler arasinda meshur germiyan atlasi denizli bezleri altin (0.419) |
| kronoloji_cok_once1281_anadolu.js:2397 | `karamanogullari` · 2 bölüm · 46936 kr · başka maddede: `selcuklular` | Aksaray yakınlarında Sultanhanı’nda meydana gelen savaşta mağlûp oldu (654/1256). | aksaray civarinda ikinci defa maglup olmasi 654 1256 ulkenin ii izzeddin (0.547) |
| kronoloji_cok_once1281_anadolu.js:2412 | `sinop` · 1 bölüm · 22140 kr · başka maddede: `pervaneogullari` | Anadolu Selçuklu Sultanı I. İzzeddin Keykâvus tarafından fethedilen Sinop (611/1214) daha sonra tekrar Trabzon Rum İmparatorluğu hâkimiyetine girmişti (657/1259). | iv kilicarslan ii izzeddin keykavus arasindaki rekabet sirasinda trabzon rumlari kisa bir sure sinop ta tekrar egemenlik kurdu 657 1259 ancak sehir abaka han (0.479) |
| kronoloji_cok_once1281_anadolu.js:2613 | `sinop` · 1 bölüm · 22140 kr · başka maddede: `pervaneogullari` | Yaklaşık bir yıl süreyle karadan ve denizden kuşattığı şehri 664 (1266) yılında ele geçirdi. | burnu berzahinda bir kale sehir olarak kurulmus ve bir liman sehri konumunda tarih boyunca dogu yonunde gelismistir berzahin (0.338) |
| kronoloji_cok_once1281_anadolu.js:2629 | `haclilar` · 1 bölüm · 119614 kr · başka maddede: `misis` | İki ordu Çukurova’da şiddetli bir savaşa tutuştu (24 Ağustos 1266) | bir ordu 14 temmuz da sur sehrini ve 31 temmuz da (0.389) |
| kronoloji_cok_once1281_anadolu.js:2721 | `selcuklular` · 13 bölüm · 182648 kr · başka maddede: `karamanogullari` | Onları takip eden Mehmed Bey, iki kardeşi ve amcasının oğluyla birlikte Moğol öncü birlikleri tarafından öldürüldü (Cemâziyelâhir 676 / Kasım 1277). | alaeddin ile karamanoglu mehmed bey mogol selcuklu kuvvetleri karsisinda tutunamadilar mehmed bey 17 muharrem 676 da 20 haziran 1277 alaeddin siyavus ise iki (0.388) |
| olaylar_2s_0920.js:83 · paket_12.js:10285 | `manastir` · 2 bölüm · 17010 kr · başka maddede: `manastir--makedonya` | Manastır 14-18 Kasım 1912'de Sırp kuvvetleri tarafından işgal edildi | manastir aziz martin tarafindan 360 ta gaul de italya kurulmustur manastir (0.451) |
| paket_12.js:14494 · savaslar.js:509 | `trablusgarp-savasi` · 1 bölüm · 21877 kr · başka maddede: `trablusgarp` | 1 Eylül 1911'de savaş ilân edişi | 21 temmuz 1912 de acik liman ilan edilmis olmasina ragmen (0.562) |
| paket_13.js:2074 · yer_yama_kademe.js:104 · yer_yama_kademe_m_0905.js:48 · yerlesimler.js:2069 | `medine` · 2 bölüm · 72310 kr · başka maddede: `diriye` | İbrâhim Paşa'yı Medine'ye ve Kuzey Arabistan taraflarına gönderdi | ibrahim pasa nin medine ye geldigi gunlerde ekim 1816 vehhabiler (0.512) |
| paket_13.js:2290 · yer_yama_tbmm_1920_0905.js:6408 · yerlesimler.js:2285 | `arapkir` · 1 bölüm · 6981 kr · başka maddede: `malatya` | Memluk ordusu 22 Muharrem 715'te (28 NISAN 1315) sehre girdi | ise 1980 de 22 634 iken 1985 te 21 194 e inmistir arapkir tarihi (0.377) |
| paket_14.js:569 · yerlesimler_ek9.js:68 | `kucum-han` · 1 bölüm · 6707 kr · başka maddede: `ahmed-el-mansur,amerika,babadagi,bogdan,camlar` | Заложен летом 1594 под рук. жильца В. В. Аничкова |  (0.0) |
| paket_23.js:314 · yerlesimler_anadolu_0914.js:76 | `elbistan` · 1 bölüm · 13327 kr · başka maddede: `dulkadirogullari` | Göksun ile Andırın arasında | goksun yaylasinda kuyucu murad (0.491) |
| paket_23.js:323 · yerlesimler_anadolu_0914.js:85 | `dulkadirogullari` · 1 bölüm · 21884 kr · başka maddede: `sudan` | yaklaşık on yıl sonra | on yil sonra bu (0.667) |
| yama_p0037_bekleyen.js:63 | `bogdan` · 1 bölüm · 17128 kr · başka maddede: `eflak` | Sultan Abdülmecid, Cuza'yı Memleketeyn'in tek reisi olarak tanıyıp ... onayladı | abdulaziz memleketeyn in romanya adiyla bir ulke halinde … na (0.483) |

### YOK — beyanlı özet (`alinti_ozet:true`) — 78 satır · 78 tekil alıntı

Kayıt alıntının özet olduğunu kendisi söylüyor; sahte alıntı SAYILMAZ, tırnak biçimi tartışılabilir.

| konum(lar) | slug · gövde kanıtı | alıntı | en yakın gövde parçası (benzerlik) |
|---|---|---|---|
| kaynakli_halka_ferhatpasa.js:98 | `hoy` · 1 bölüm · 4787 kr | 1585'te Hoy'da Osmanlı sancak beyi var. | 1585 te bu sancagin beyi sahkuluogullari ndan alaeddin (0.478) |
| kaynakli_halka_ferhatpasa.js:108 | `tebriz` · 1 bölüm · 18924 kr | 1593 taksiminde Tebriz eyaletinin Merâga livâsı. | idari taksimine gore tebriz eyaleti tebriz merkez serdsahra mihranrud (0.603) |
| kaynakli_halka_ferhatpasa.js:119 | `tebriz` · 1 bölüm · 18924 kr | 1593 taksiminde Merâga livâsı altında 'Miyandûvab' nahiyesi. | sendyan gerger meraga seracu leylan egertu kavdul miyanduvab ahtaci yi ulya (0.485) |
| kaynakli_halka_ferhatpasa.js:159 | `derbend--dagistan` · 1 bölüm · 12303 kr | 5 Ekim 1578 bağlılık · '1607'ye kadar' beylerbeyilik merkezi. | 5 ekim 1578 de … 1607 ye kadar suren osmanli (0.607) |
| kaynakli_halka_ferhatpasa.js:178 | `baku` · 1 bölüm · 8037 kr | 1583 fetih · 1606 Safevî. | 1583 osmanli … 1606 yilinda (0.533) |
| kaynakli_halka_ferhatpasa.js:189 | `seki` · 2 bölüm · 17402 kr | 1590 barışının ardından Şamahı'ya bağlı sancak … Safer 1016 / Haziran 1607 Şirvan Safevî'ye geçti. | barisinin ardindan seki artik samahi ya bagli … safer 1016 da haziran 1607 sirvan a hakim (0.753) |
| kaynakli_halka_ferhatpasa.js:306 | `kutulamare` · 1 bölüm · 5736 kr | Bölgenin Osmanlı idaresine girmesi Kanûnî zamanında; 1032/1623'te elden çıktı, 1048/1638'de geri alındı. | de burasi oldugu tahmin edilmektedir bolgenin osmanli idaresine girmesi kanuni sultan suleyman zamaninda 1520 1566 bagdat in fethi sirasinda (0.581) |
| kaynakli_halka_fetih.js:21 | `semendire` · 1 bölüm · 21584 kr | Sırp despotluğunun başkenti Semendire teslim oldu | sirp ayaklanmasi 1804 1813 semendire ye yikim ve buyuk (0.505) |
| kaynakli_halka_fetih.js:22 | `turgut-reis` · 1 bölüm · 12345 kr | Saint Jean şövalyelerinden Trablus alındı | saint elmo kalesi nden baslatilmasini (0.59) |
| kaynakli_halka_fetih.js:33 | `atina` · 2 bölüm · 28306 kr | Atina Akropolü teslim alındı | atina da ve atina (0.578) |
| kaynakli_halka_fetih.js:37 | `avlonya` · 1 bölüm · 11091 kr | Avlonya'nın alınması, Osmanlı'yı ilk defa Adriyatik'te doğrudan bir liman sahibi yaparak İtalya karşısında deniz aşırı bir sıçrama tahtası kazandırdı. | avlonya osmanlilar in adriyatik sahillerindeki ilk limani olmasi sebebiyle ayri bir onem kazandi burada bir tersane kuruldu ayrica osmanli donanmasinin akdeniz  (0.4) |
| kaynakli_halka_fetih.js:38 | `arnavutluk` · 1 bölüm · 42489 kr | Akçahisar'ın (Kruja) fethi ve Arnavutluk'un tamamlanması | bir yapiya yoneltilmesi ve arnavutluk un osmanli devleti nden ayrilarak bagimsiz (0.507) |
| kaynakli_halka_fetih.js:39 | `kemah` · 1 bölüm · 11808 kr | Kemah Kalesi'nin Safevîler'den fethi | kalesi olan kemah in fethine biyikli (0.5) |
| kaynakli_halka_fetih.js:40 | `klis` · 1 bölüm · 3321 kr | Klis Kalesi'nin fethi ve Dalmaçya sancağının kuruluşu | efendi ve evliya celebi nin eserlerinde yer almistir (0.4) |
| kaynakli_halka_fetih.js:45 | `kamanice` · 1 bölüm · 4510 kr | Dokuz günlük kuşatmanın ardından Lehistan'ın doğudaki en güçlü kalesi sayılan Kamaniçe teslim alındı | bulundugu osmanli ordusu lehistan seferine cikti sefer sirasinda podolya nin merkezi olan kamanice dokuz gun suren kusatmadan (0.409) |
| kaynakli_halka_fetih.js:48 | `yemen` · 5 bölüm · 94656 kr | Aden'in zaptı ve Yemen sahilinin ilhakı | yemen den ve yemen disindan bircok alim ve talebenin sehre geldigi (0.457) |
| kaynakli_halka_fetih.js:49 | `pecuy` · 1 bölüm · 10689 kr | Valpo ve Şikloş kaleleri alındıktan sonra Baranya'nın merkezi Peçuy teslim oldu. | pecuy macaristan in idari birimlerinden megye biri olan baranya idari biriminin merkezi durumunda olup 2002 (0.441) |
| kaynakli_halka_fetih.js:51 | `sudan` · 3 bölüm · 44055 kr | Mısır beylerbeyiliğinin güney sınırı, Nil üzerinde kayalık bir burun üstünde yükselen İbrim kalesinin alınmasıyla ikinci çağlayanın ötesine taşındı. | azalan etkisini arttirmak istiyordu 1936 yilinda eski etkinligini arttirma siyasetinin bir sonucu olarak bir miktar misir (0.285) |
| kaynakli_halka_fetih.js:52 | `cezayir` · 5 bölüm · 79840 kr | Bicâye'nin (Bougie) İspanyollardan alınması | bicaye de kasru emimun ve kasru n necm (0.456) |
| kaynakli_halka_fetih.js:59 | `mora` · 1 bölüm · 30134 kr | Çuha Adası'nın (Kythira) alınışı | kazasker hamid efendi nin kizi mevlevi dervisi ve (0.405) |
| kaynakli_halka_kronoloji.js:9 | `ankara` · 3 bölüm · 37594 kr | Ahi yönetimindeki Ankara Osmanlı idaresine girdi | ankara osmanli idaresine girdikten sonra ayni (0.645) |
| kaynakli_halka_kronoloji.js:10 | `gelibolu` · 1 bölüm · 30240 kr | Bizans imparatorunun kuzeni Savoylu Amadeo'nun donanması Gelibolu'yu alıp Bizans'a teslim etti | hacli filosu ile gelibolu yu alip 14 haziran 1367 de bizans a terketti bu durum osmanlilar in (0.406) |
| kaynakli_halka_kronoloji.js:11 | `sakiz-adasi` · 1 bölüm · 23315 kr | Venedik donanması Sakız'ı işgal etti | uretimindeki tekel devam etti (0.431) |
| kaynakli_halka_kronoloji.js:12 | `trablussam` · 2 bölüm · 12354 kr | Trablusşam'ın Osmanlı idaresine girişi | trablussam in surlarini yiktirip sehri (0.658) |
| kaynakli_halka_kronoloji.js:14 | `bayezid-i` · 1 bölüm · 12657 kr | Yıldırım Bayezid'in Orta Anadolu harekâtı sırasında kuşatılan Amasya emîri şehri Osmanlılara teslim etti ve Bayezid 1393'te şehre girdi. | in kusatmasi altindaki amasya emiri 1392 de amasya yi osmanlilar a teslim etti ertesi yil bolgeye gelen bayezid amasya ya girerek sehri teslim (0.513) |
| kaynakli_halka_kronoloji.js:15 | `halep` · 3 bölüm · 40369 kr | Halep'in Osmanlı hâkimiyetine girişi | halep in 72 243 km 2 lik bir (0.469) |
| kaynakli_halka_kronoloji.js:16 | `barbaros-hayreddin-pasa` · 1 bölüm · 12110 kr | Böylece Cezayir resmen Osmanlı topraklarına katıldı, Hayreddin'e beylerbeyi unvanıyla asker ve top gönderildi. | cezayir osmanli topraklarina katilmis oldugu gibi hizir da artik hayreddin pasa diye anilmaya baslandi cezayir e hakim olduktan (0.545) |
| kaynakli_halka_kronoloji.js:18 | `estergon` · 1 bölüm · 8721 kr | Sadrazam Lala Mehmed Paşa, on yıl önce kaybedilen Estergon'u kuşatarak yeniden Osmanlı idaresine kattı. | kadizade ali pasa nin 1609 yilinda kaleme aldigi bir mektubun ekinde osmanli hakimiyetini kabul etmek istemeyen 213 koy ve (0.448) |
| kaynakli_halka_kronoloji.js:21 | `ayamavra` · 1 bölüm · 7887 kr | Ayamavra'nın (Lefkada) Venedik'e kaybı | antlasmasi ile ada venedik e terkedildi ve 1797 ye (0.558) |
| kaynakli_halka_kronoloji.js:23 | `kanije` · 1 bölüm · 7646 kr | Kanije Kalesi'nin Avusturya'ya kaybı | kanije fetihnamesi kanije seferine bastezkireci olarak (0.511) |
| kaynakli_halka_kronoloji.js:24 | `timisvar` · 1 bölüm · 6605 kr | Temeşvar'ın (Timişvar) Avusturya'ya kaybı | temesvar tamisvar diye gecer (0.537) |
| kaynakli_halka_kronoloji.js:25 | `ahmed-iii` · 1 bölüm · 18611 kr | Tiflis ele geçirilerek Gürcistan Osmanlı idaresine bağlandı | padisahin emriyle yapilmistir osmanli padisahlari arasinda en fazla evlenenlerden biri (0.428) |
| kaynakli_halka_kronoloji.js:26 | `osmanlilar` · 21 bölüm · 563196 kr | Vahran'ın (Oran) yeniden İspanya'ya kaybı | ogullarindan amasya valisi ahmed in (0.378) |
| kaynakli_halka_kronoloji.js:27 | `osmanlilar` · 21 bölüm · 563196 kr | Özi (Ochakov) Kalesi'nin Ruslara düşüşü | nin son seferi sigetvar kalesi nin (0.423) |
| kaynakli_halka_kronoloji.js:28 | `hotin` · 1 bölüm · 6754 kr | Hotin Kalesi'nin Ruslara kaybı | hotin kalesi nin kucuk ve (0.691) |
| kaynakli_halka_kronoloji.js:29 | `venedik` · 1 bölüm · 15923 kr | Zaklise'nin (Zakynthos) yıllık haraç karşılığı Venedik'e bırakılması | nin kuzeydogusundaki friuli nin venedik bolgesine kadar ulasti venedikliler (0.426) |
| kaynakli_halka_kronoloji.js:31 | `sirvan` · 1 bölüm · 12618 kr | Meşaleler Savaşı'nın kazanılmasının ardından Kafkas duvarı ile Hazar denizi arasındaki dar geçidi kapatan Derbend kalesi Osmanlı idaresine alındı. | devleti ile yakin iliski kurmaktan kaciniyordu bu durum onun osmanli devleti tarafindan gorevinden alinip yerine surhay han (0.358) |
| kaynakli_halka_kronoloji.js:32 | `atina` · 2 bölüm · 28306 kr | Atina böylece savaşılmadan yeniden Osmanlı idaresine döndü, ancak Parthenon'un uğradığı yıkım geri alınamadı. | atina da yeniden kurulan turk idaresi parthenon u ihya etmemis yikik mabedin icine kucuk bir cami yapmayi (0.538) |
| kaynakli_halka_kronoloji.js:33 | `yemen` · 5 bölüm · 94656 kr | Yemen seferine çıkan Redif Paşa'nın kuvvetleri Ebha'ya girerek bölgeyi doğrudan Osmanlı idaresine bağladı ve Asîr sancağı kuruldu. | nin yemen de kurdugu idari ve mali yapi kasimiler doneminde devam ettigi gibi yemen de kalan osmanli idarecileri ve askerleri de yeni (0.412) |
| kaynakli_halka_kronoloji.js:34 | `tebriz` · 1 bölüm · 18924 kr | Tebriz'in yeniden Safevîlere geçmesi | tebriz in en onemli eseri (0.557) |
| kaynakli_halka_kronoloji.js:39 | `yanya` · 1 bölüm · 20336 kr | Parga'nın Osmanlı idaresine bırakılması | nin frenk idaresinden osmanli idaresine (0.564) |
| kaynakli_halka_kronoloji.js:40 | `habes-eyaleti` · 1 bölüm · 28045 kr | Habeş eyaletinin merkezi olan Masavva limanı, Mehdî isyanının Sudan'ı kapladığı karışıklıktan yararlanan İtalya tarafından işgal edildi | habes eyaletinin iki onemli limani olan masavva ve sevakin birer muhafizlik olarak teskilatlandirilip misir a baglandi bu tarihlerde ingiltere italya (0.41) |
| kaynakli_halka_kronoloji.js:42 | `izvornik` · 1 bölüm · 6256 kr | Drina kıyısındaki İzvornik kalesi 1460'ta Osmanlı tarafından fethedildi. | izvornik sancak beyi tarafindan sehirde bir kervansaray ve drimjaca (0.435) |
| kaynakli_halka_kronoloji.js:44 | `trablusgarp-savasi` · 1 bölüm · 21877 kr | Trablus şehrinin İtalyanlara teslim olması | trablus ve askeri yonden daha (0.479) |
| kaynakli_halka_kronoloji.js:46 | `bogurdelen` · 1 bölüm · 3903 kr | Avusturya'nın 9 Şubat 1788'de Rusya'nın yanında savaşa girmesinin ardından Sava hattı yeniden cephe oldu ve Böğürdelen 24 Nisan 1788'de Avusturya hâkimiyetine geçti. | musluman kalmamisti 1739 1788 arasinda osmanli devleti ne bagli olan bogurdelen 24 nisan 1788 de yeniden avusturyalilar in hakimiyetine girdiyse de zistovi antl (0.495) |
| kaynakli_halka_kronoloji.js:47 | `yergogu` · 1 bölüm · 7511 kr | Eflak Voyvodası Koca Mircea'nın kendi toprağı üzerinde, masrafını tuz satışıyla karşılayarak yaptırdığı Yergöğü Kalesi bu yıl Osmanlı eline geçti | degil eflak voyvodasi i mircea cel batran koca mircea 1386 1418 tarafindan yaptirildi hatta insaatin masraflarinin tuz satisiyla saglandigi rivayet edilir bu ka (0.542) |
| kaynakli_halka_kronoloji.js:48 | `karakoyunlular` · 1 bölüm · 27096 kr | Bağdat'ın Karakoyunlu eline geçişi | bagdat i uzun hasan in (0.571) |
| kaynakli_halka_kronoloji.js:49 | `anabolu` · 1 bölüm · 5557 kr | Anabolu'nun (Nauplion) Venedik'e kaybı | anabolu mora daki venedik idaresinin merkezi (0.6) |
| kaynakli_halka_kronoloji.js:50 | `semendire` · 1 bölüm · 21584 kr | Avusturya kuvvetleri bölgede Ağustos 1738'e kadar tutunabildi, bu tarihten sonra Semendire yeniden Osmanlı idaresine girdi. | yi yeniden terketti avusturyalilar bu bolgede agustos 1738 e kadar kaldilar yirmi yillik avusturya (0.53) |
| kaynakli_halka_kronoloji.js:51 | `malatya` · 3 bölüm · 43350 kr | Malatya yeniden Memlük hâkimiyetine girdi | malatya ve yoresi osmanli hakimiyetine (0.633) |
| kaynakli_halka_kronoloji.js:52 | `venedik` · 1 bölüm · 15923 kr | Bizans savunamadığı Selânik'i Venedik'e devretti ve cumhuriyet Osmanlı ilerleyişinin tam önüne yerleşti. | icin hayvan sevkederlerdi venedik isi elbiseler ve luks tuketim mallari osmanli ve venedikli tuccarlar tarafindan ihrac edilirdi (0.416) |
| kaynakli_halka_kronoloji.js:53 | `girit` · 1 bölüm · 54387 kr | İki buçuk yıl süren son kuşatma aşamasının ardından on sekiz maddelik bir teslim anlaşması imzalandı ve Kandiye Osmanlılara bırakıldı. | iki bucuk yil suren siki kusatmasi 9 rebiulahir 1080 de 6 eylul 1669 imzalanan on sekiz maddelik bir teslim anlasmasiyla sona erdi (0.593) |
| kaynakli_halka_kronoloji.js:55 | `murad-iv` · 2 bölüm · 36853 kr | Bağdat Osmanlı'ya kesin olarak kaybedildi | kucuk ahmed pasa ya teslim olarak bogazici nde istavroz (0.479) |
| kaynakli_halka_kronoloji.js:58 | `giray` · 1 bölüm · 13560 kr | Osmanlı donanması Kefe başta olmak üzere Kırım'ın güney kıyısındaki Ceneviz kolonilerini ele geçirdi | 1484 ten itibaren kirim in guney kiyilari uzerinde hakimiyet iddiasinda bulunduklari icin osmanlilar kefe gumrugu gelirlerinden hanlara (0.426) |
| kaynakli_halka_kronoloji.js:59 | `kanuni-sultan-suleyman` · 2 bölüm · 84627 kr | Nándorfehérvár'ın (Belgrad) Osmanlı'ya düşmesi | ii selim in belgrad a gelisi uzerine vefat haberi resmen (0.44) |
| kaynakli_halka_kronoloji.js:60 | `budin` · 2 bölüm · 41469 kr | Budin'in Osmanlı tarafından fethi | budin in nufusu osmanli doneminden (0.627) |
| kaynakli_halka_kronoloji.js:61 | `budin` · 2 bölüm · 41469 kr | Budin'in Habsburglar tarafından geri alınması | budin ile macaristan in geri alinmasi (0.61) |
| kaynakli_halka_kronoloji.js:62 | `barbaros-hayreddin-pasa` · 1 bölüm · 12110 kr | Osmanlı donanmasının komutanı Barbaros Hayreddin Paşa, Hafsî hükümdarını tahttan indirip Tunus'u ele geçirdi | de yayimlanmistir barbaros hayreddin pasa nin hatiralari nsr ertugrul duzdag i ii istanbul ts manzum hatirat ise necip (0.462) |
| kaynakli_halka_kronoloji.js:63 | `cin--ulke` · 3 bölüm · 57698 kr | Ming orduları Pekin'i aldı, Yuan sarayı kuzeye çekildi | burokratlari kendi hizmetine aldi yuan sarayi islam tip ve mimarisine de itibar (0.5) |
| kaynakli_halka_kronoloji.js:64 | `cin--ulke` · 3 bölüm · 57698 kr | Qing orduları Pekin'i aldı, Dorgon nâip oldu | mogol devleti pekin i bassehir yapti mogollar devrinde cin de esas olarak (0.448) |
| kaynakli_halka_kronoloji.js:65 | `cihangir` · 1 bölüm · 6650 kr | Safevîler Kandehar'ı Bâbürlülerden geri aldı | in kaybettikleri topraklari geri aldi 1608 bu sebeple babasi (0.404) |
| kaynakli_halka_kronoloji.js:67 | `karamanogullari` · 2 bölüm · 46936 kr | Memlük kuvvetleri Kayseri'yi işgal etti, Mehmed Bey Mısır'da hapsedildi | topraklarina giren memlukler kayseri yi isgal ettiler memluk kumandani civariyla birlikte bu sehri dulkadirli (0.525) |
| kaynakli_halka_kronoloji.js:68 | `selcuklular` · 13 bölüm · 182648 kr | II. Gıyâseddin Keyhusrev'in ilk saltanat yıllarında Âmid (Diyarbakır) Selçuklu topraklarına katıldı (1240) | keyhusrev in hukumdarliginin ilk yillarinda amid selcuklu topraklarina katildi 1240 bu (0.717) |
| kaynakli_halka_kronoloji.js:69 | `harput` · 1 bölüm · 12675 kr | Kale ele geçirilince Artukluların Harput kolu sona erdi ve bölge Selçuklu hâkimiyetine girdi. | yeri oldugu anlasilan harput ve yoresi asirlar boyunca bircok devletin hakimiyeti altina girdi ve urartu iran (0.428) |
| kaynakli_halka_kronoloji.js:70 | `kahramanmaras` · 3 bölüm · 49645 kr | Memlükler Maraş'ı ele geçirdi | maras i ele gecirdi ve (0.745) |
| kaynakli_halka_kronoloji.js:71 | `dulkadirogullari` · 1 bölüm · 21884 kr | Kayseri Dulkadırlılar tarafından alındı | dulkadirlilar tarafindan soyulmasi karaca (0.675) |
| kaynakli_halka_kronoloji.js:72 | `gurcistan` · 3 bölüm · 39757 kr | Acaristan (Batum ve çevresi) Osmanlı tarafından fethedildi | acaristan batum ve cevresi 1479 da fethedildi (0.812) |
| kaynakli_halka_kronoloji.js:73 | `ahiska` · 1 bölüm · 2761 kr | Ahıska'nın Osmanlı tarafından Safevîlerden geri alınması | 1635 te osmanlilar tarafindan geri alindi 1828 1829 osmanli rus (0.555) |
| kaynakli_halka_kronoloji.js:74 | `ceneviz` · 1 bölüm · 13399 kr | Cenevizli Gattilusio ailesinin elindeki Enez, Osmanlı idaresine geçti. | cenevizli ye yeni yollar deneme imkani saglamisti ayrica (0.484) |
| kaynakli_halka_kronoloji.js:75 | `sadiler` · 1 bölüm · 16556 kr | İspanyollar Bâdis'i ele geçirdi | ispanyollar in badis i ele (0.807) |
| kaynakli_halka_kronoloji.js:76 | `tilimsan` · 1 bölüm · 20950 kr | Merînîler Tilimsan'ı ele geçirdi | tilimsan i ele gecirmekti bu (0.7) |
| kaynakli_halka_kronoloji.js:77 | `tilimsan` · 1 bölüm · 20950 kr | Merînîler Tilimsan'ı ikinci kez aldı | meriniler tilimsan a karsi yapilan saldirilar (0.691) |
| kaynakli_halka_kronoloji.js:78 | `trablusgarp-savasi` · 1 bölüm · 21877 kr | İtalyan kuvvetleri Derne'yi işgal etti | italyan hakimiyeti ise ii dunya savasi (0.474) |
| kaynakli_halka_kronoloji.js:79 | `trablusgarp-savasi` · 1 bölüm · 21877 kr | İtalyan kuvvetleri Bingazi'yi işgal ederek Trablusgarp vilayetinin ikinci büyük limanını da ele geçirdi. | da baris gorusmelerinin ikinci safhasini baslatti 13 agustos trablusgarp ve bingazi nin terkinin islam dunyasinda olumsuz etkiler (0.405) |
| kaynakli_halka_kronoloji.js:80 | `egriboz` · 1 bölüm · 15197 kr | Venedik'in Ege'deki en güçlü üssü Eğriboz Osmanlı'ya geçti. | haliyle selanik in guneyindeki en buyuk sehir ozelligi tasimaktaydi turkler in egriboz a ilk gelisleri (0.45) |
| kaynakli_halka_kronoloji.js:82 | `sehirkoy` · 1 bölüm · 10511 kr | Şehirköy Osmanlı hâkimiyetine döndü | sehirkoy osmanli idaresi altinda (0.687) |
| kaynakli_halka_kronoloji.js:83 | `les` · 1 bölüm · 5529 kr | Leş'in (Alessio) Dukagjinler tarafından Venedik'e bırakılması | les in dukakin sancaginin bir parcasi oldugunu zadrima (0.478) |
| kaynakli_halka_kronoloji.js:84 | `kahramanmaras` · 3 bölüm · 49645 kr | Maraş'ın İngilizler tarafından işgali | in kizi iklime hatun tarafindan (0.559) |


## 7. YAKIN KOVASI — kelime farkıyla
### YAKIN (≥0,85, birebir değil) — 388 satır · 151 tekil alıntı

Kelime farkı gösterimi: `-x` alıntıda var gövdede yok · `+y` gövdede var alıntıda yok · `x→y` değiştirilmiş (normalleştirilmiş, küçük harf, şapkasız). ‖ ayrı alıntı parçası.

| konum(lar) | slug | benzerlik | kelime farkı | alıntı |
|---|---|---|---|---|
| d_sinirlar.js:14 · d_sinirlar.js:15 · paket_20.js:536 · paket_20.js:537 · paket_20.js:538 · paket_20.js:539 (+8) | `lozan-antlasmasi` | 0.973 | talvegi→talvek | Karaağaç Türkiye'de kalmak üzere Meriç ırmağının talvegi |
| devletler.js:1405 · paket_05.js:1424 | `bati-trakya` | 0.925 | kuruldu→merkezi ‖ hukumet→nin ‖ -29 · +bati trakya da | 31 Ağustos 1913'te kuruldu... Müderris Sâlih Efendi hükümet başkanlığında... 29 Eylül 1913 tarihli İstanbul Muahedesi ile Batı Trakya Bulgarlar'a bırakıldı. 25 Ekim 1913'e kadar Bulgaristan'a teslimi şart koşulan Garbî T |
| devletler.js:2651 · paket_05.js:2670 | `samori-ture` | 0.994 | antlasmada→anlasmada | Bir yıl sonra ikinci antlaşmada Nijer'in batı yakasını Fransızlar'a bırakmayı kabul etti |
| devletler.js:4988 · paket_05.js:5007 | `sokoto` | 0.86 | -1808 · +yi · gecirildi→gecirip | 1808: Gobir'in başşehri Alkalawa ele geçirildi |
| devletler.js:6779 · paket_05.js:6798 | `bopal--devlet` | 0.905 | nevvabligini→burada nevvab ligini | Dost Muhammed Han... nevvâblığını ve istiklâlini ilân etmiştir |
| devletler.js:6832 · paket_05.js:6851 | `endonezya` | 0.863 | +in · -da · -oldu | ilk Pasai sultanı Melikü's-Sâlih 696'da (1296-97) öldü |
| devletler.js:7375 · paket_05.js:7394 · paket_13.js:624 · yerlesimler.js:619 | `kabartaylar` | 0.899 | kabartaylarin→1739 kabartaylar in · getirmistir→getirince osmanli | Belgrad Antlaşması (1739) … Kabartayların yaşadığı bölgeyi TARAFSIZ BİR ÜLKE hâline getirmiştir. |
| devletler.js:7693 · kronoloji_macaristan.js:538 · paket_05.js:7712 · paket_07.js:1448 | `tokoli-imre` | 0.967 | -15 · +varad | 15 Ekim 1685'te Serdar Melek İbrâhim Paşa'nın emriyle Varad Beylerbeyi Ahmed Paşa kendisine yardım için gelen İmre Tököli'yi yakalattı. |
| devletler.js:8302 · paket_05.js:8321 | `yanya` | 0.911 | -sphrantzes · +sfrancis | Sphrantzes'e göre Yanya 1430'un Ekim ayında … Sinan Paşa'ya teslim oldu |
| devletler.js:8320 · paket_05.js:8339 | `gurcistan` | 0.992 | dadyan→dadian | Lala Mustafa Paşa'nın gönderdiği itaat mektubunu kabul eden Dadyan ve Güryel melikleri … Osmanlılar'a tâbi olduklarını bildirdiler |
| devletler.js:8326 · kronoloji_cok_gurcistan.js:68 · paket_05.js:8345 · paket_30.js:4986 | `gurcistan` | 0.996 | imeret→imereti | Yavuz Sultan Selim Trabzon valisi iken 1508'de Güryel ve İmeret (Açıkbaş) Krallığı'nı Osmanlılar'a itaat ettirip haraca bağlamıştı |
| devletler.js:8672 · paket_05.js:8691 | `mali` | 0.974 | baglandi→baglandiysa | 1285’te Sünnî hânedanı tekrar Mali Sultanlığı’na bağlandı |
| devletler.js:8901 · paket_05.js:8920 | `sencer` | 0.859 | in→turbesi onun | Sencer’in ölümüyle Büyük Selçuklu Devleti tarih sahnesinden çekilmiş oldu. |
| ekokuma_alemdar.js:54 | `kabakci-isyani` | 0.966 | mimarlari→mimarlarinin | ayaklanmanın arka plandaki gerçek mimarları |
| ekokuma_alemdar.js:55 | `alemdar-mustafa-pasa` | 0.98 | yolladi→yollamis | tahttan çekilmesi ve III. Selim'in tahta çıkarılması yolunda haber yolladı |
| ekokuma_alemdar.js:95 | `mahmud-ii--osmanli` | 0.949 | caliskan→caliskandir | dirayetli, azimli ve çalışkan |
| ekokuma_alemdar.js:95 | `mahmud-ii--osmanli` | 0.99 | sogukkanli→sogukkanlidir | henüz daha ölümden yeni dönmüş olarak Alemdar Mustafa Paşa'ya ilk emirlerini verdiği andaki davranışından da anlaşılacağı üzere gayet soğukkanlı |
| ekokuma_alemdar.js:95 | `mahmud-ii--osmanli` | 0.988 | gostergesi→gostergesidir | II. Mahmud'un gelişmeleri ne kadar iyi takip ettiğinin ve en uygun zamanı ne kadar isabetle seçmiş bulunduğunun bir göstergesi |
| ekokuma_alemdar.js:99 | `yeniceri` | 0.987 | isyan→isyana | 14 Kasım 1808'de başlayan büyük isyan |
| ekokuma_antlasma4.js:117 | `orhan` | 0.967 | baslari→baslarina | ilk kapitülasyon 1352 başları |
| ekokuma_antlasma4.js:1202 | `mehmed-ii` | 0.906 | -2 · +te | 2 Zilkade 883 / 25 Ocak 1479 |
| ekokuma_dunya.js:194 | `osmanlilar` | 0.893 | -yeni · +olarak | yeni harp taktikleri, ateşli silâhların yaygın kullanımı |
| ekokuma_dunya.js:453 | `rusya` | 0.969 | geregi→geregiydi | sıcak denizlere kapalı coğrafyasının bir GEREĞİ. |
| ekokuma_ihtilal.js:63 | `nizam-i-cedid` | 0.87 | -eski · +bir | eski düzene karşı yeniden yapılanma |
| ekokuma_ihtilal.js:63 | `selim-iii` | 0.966 | kaldi→kaldiginda | Fransa nihayet 1802'de barış yapmak ve Mısır'ı terketmek zorunda kaldı. |
| ekokuma_ihtilal.js:87 | `sirbistan` | 0.876 | -dayilar ve · +djordje petkovic karacorce kara yorgi | Dayılar ve yamaklar olarak adlandırılan yeniçerilerin gittikçe artan baskıları beraberinde Sırp isyanlarını getirdi ve nihayet 1804'te Karadjordje liderliğinde Sırp isyanı patlak verdi. |
| ekokuma_korfez.js:52 | `kerim-han-zend` | 0.874 | +aylarinda bir | 1777 Nisan-Mayıs Osmanlı kuvveti İran'a girip Sâdık Han'ı bozguna uğrattı |
| ekokuma_p75a.js:163 | `hariciye-nezareti` | 0.95 | memuriyetleri→memuriyetlerinden | yüksek kademeli kalemiye memuriyetleri |
| ekokuma_p76i.js:53 | `lubnan` | 0.86 | -katolik · +dir | Katolik Ermeniler (güneyin kırsal kesimlerinde) |
| ekokuma_p76i.js:80 | `namik-kemal` | 0.986 | kiz→kizla | asker kıyafetine girip Silistre müdafaasına iştirak eden genç bir kız |
| ekokuma_statu.js:172 | `polonya` | 0.875 | -polonya · +peter | Polonya tacına bağlı Kazak hatmanı Doroşenko'nun isyanını |
| ekokuma_yeniceri.js:132 | `yeniceri` | 0.977 | tuttu→tuttugu | devleti yaklaşık 100 yıl daha ayakta tuttu |
| ekokuma_yeniceri.js:190 | `bektasilik` | 0.965 | olunmasini→olunmasidir | özenle tenzih edilmesine dikkat olunmasını |
| ekokuma_yunan.js:83 | `tepedelenli-ali-pasa` | 0.964 | bulunmus→bulundu | Rumlar'a para ve silâh yardımında bulunmuş |
| gecitler.js:209 | `tuna` | 0.977 | -1538 · -sira | 1538'de Boğdan seferi neticesinde bu vasal prensliğin güneydoğu kısmının yanı sıra TİGHİNA (BENDER) KALESİ dahil Bucak'ın Osmanlı Devleti'ne katılmasıyla KIRIM TATAR ATLILARINA BAHÇESARAY İLE BUDİN ARASINDA BİR KORİDOR A |
| gecitler.js:318 | `aras` | 0.937 | te→rum ‖ +sag | Mart 1064'te… Nahcıvan'a ulaştı ve ordusunun bu noktadan Aras nehrinin KARŞI YAKASINA GEÇİŞİNİ SAĞLAMAK İÇİN GEMİLERDEN (bazı kaynaklara göre KAYIKLARDAN) KURDURDUĞU BİR KÖPRÜDEN faydalandı. |
| isyan_tarama.js:156 | `bogdan` | 0.909 | -bathory · osmanlilarla→osmanlilar la | Báthory'nin Osmanlılarla dostluğa başladığını görünce |
| isyan_tarama.js:173 | `bogdan` | 0.891 | -mihai · osmanlilarla→osmanlilar la · ozet→ardindan | Mihai, Báthory'nin Osmanlılarla dostluğa başladığını görünce Erdel'i işgal etti (1599) (özet). |
| ittifaklar.js:70 · paket_15.js:1151 | `karlofca` | 0.887 | -24 · vene dik antlasmasi→venedik barisi | 24 Receb 1110'da (26 Ocak 1699) on altı maddelik Vene[dik antlaşması] |
| kademe_4ff22b.js:114 | `karabag` | 0.972 | kusatti→kusattiysa | Karabag Hanligi'ni cezalandirmak icin ... SUSA'yi kusatti |
| kademe_f5c9a5.js:272 | `allahabad` | 0.975 | yaptirmis→yaptirmasi | stratejik öneminden dolayı şehirde sarp bir hisar yaptırmış |
| kronoloji_altinorda.js:69 · paket_11.js:74 | `altin-orda-hanligi` | 0.926 | devlet→devletin · girdi→dustu | Tuda Mengü Han zamanında (1280-1287) devlet bütünlüğü tehlikeye girdi |
| kronoloji_arabistan.js:129 · paket_12.js:1965 | `yemen` | 0.859 | -1538 hadim · +1538 de | 1538: Hadım Süleyman Paşa Aden'i alarak Tâhirîler hânedanına son verdi. |
| kronoloji_arabistan.js:177 · paket_12.js:2013 | `yemen` | 0.855 | +ta · -kansu pasa · ile→le bir | Muharrem 1040 (Ağustos 1630): Kansu Paşa İmam Müeyyed ile anlaşma yaptı. |
| kronoloji_arabistan.js:259 · paket_12.js:2095 | `yemen` | 0.925 | -1918 | 1918: Osmanlı askerî-sivil bürokrasisi Hudeyde'de İngilizler'e teslim oldu. |
| kronoloji_atina_dukaligi.js:19 · paket_12.js:2339 | `atina` | 0.886 | -1204 | 1204: Haçlılar tarafından ele geçirilen şehir |
| kronoloji_atina_dukaligi.js:69 · paket_12.js:2389 | `atina` | 0.922 | -1387 · +gordus | 1387: Floransalı Korinthos derebeyi Nerio Acciajuoli tarafından ele geçirildi |
| kronoloji_balkan.js:86 · paket_12.js:2551 | `karadag` | 0.991 | etti→ettiyse | 1189 yılında Sırbistan hâkimiyetini sağlamlaştırdı... Sırbistan XIII. yüzyılın ikinci yarısında çözülmeye başladığında Zeta büyük oranda bağımsızlığını elde etti. |
| kronoloji_balkan.js:171 · paket_12.js:2636 | `karadag` | 0.907 | -hususlar · fazlaca mudahale etmediler→ve halkin | Osmanlılar bütün bölgeyi padişah hassı durumuna getirdiler... Vergilerin topluca alınması (maktû sistem)... tuz madenlerinde bir miktar insan gücünden faydalanılması... dışında hususlar idareciler mahallî işlere fazlaca  |
| kronoloji_balkan.js:357 · paket_12.js:2822 | `bulgaristan` | 0.903 | -1187 de · tanidi→tanimis yonetimin basina | Bolyar Petar ve Bolyar Asen kardeşlerin önderlik ettikleri bir başka ayaklanma başladı... 1187'de Bizans, ikinci Bulgar Devleti'ni tanıdı. |
| kronoloji_balkan.js:369 · paket_12.js:2834 | `bulgaristan` | 0.966 | calisildi→calisilmis | merkezî devletin gücü arttırılmaya çalışıldı |
| kronoloji_balkan.js:441 · paket_12.js:2906 | `varna` | 0.889 | osmanlilarin→zaferi osmanlilar in · aldigi→aldi 1444 | Osmanlıların Bulgaristan'daki geleceğini garanti altına aldığı |
| kronoloji_balkan.js:489 · paket_12.js:2954 | `bulgaristan` | 0.902 | gonderilerek→gonderilmek suretiyle · -bastirildi | Nisan 1876'da büyük bir isyanın çıkmasına sebep oldu ... 18.000 kişilik bir askerî kuvvet gönderilerek isyan bastırıldı. |
| kronoloji_balkan.js:508 · paket_12.js:2973 | `plevne` | 0.898 | -temmuz · -1877 | Temmuz ve Aralık 1877 ayları arasında cereyan eden meşhur kuşatma |
| kronoloji_balkan.js:584 · paket_12.js:3049 | `bulgaristan` | 0.967 | etti→ettikten | Bulgaristan 5 Ekim 1908 tarihinde bağımsızlığını ilân etti. |
| kronoloji_balkan.js:632 · paket_12.js:3097 | `bulgaristan` | 0.859 | +te · imzalandi→ni imzalayarak · +yi · birakildi→biraktigi gibi | 10 Ağustos 1913: Bükreş Barış Antlaşması imzalandı; Güney Dobruca Romanya'ya bırakıldı. |
| kronoloji_balkan.js:818 · paket_12.js:3283 | `navarin` | 0.966 | -29 · baskin→baskindir osmanli | 29 Rebîülevvel 1243'te (20 Ekim 1827) İngiliz, Fransız ve Rus donanmalarından oluşan müttefiklerin limanda bulunan Osmanlı-Mısır donanmasına karşı düzenledikleri âni baskın... elli iki gemi ve 6000 denizci |
| kronoloji_cok_afrika.js:13 · paket_30.js:18 | `mali` | 0.947 | -devlet | Tevârikler'in 1430'da Tinbüktü, Velâte, Aravuan ve Gao'yu ele geçirmesi üzerine [devlet] ortadan kalktı ve yerini Songay Sultanlığı aldı |
| kronoloji_cok_anadolu2.js:90 · paket_30.js:120 | `mentese` | 0.885 | ciktigini→ciktiysa | bir müddet için elden çıktığını |
| kronoloji_cok_arnavut.js:61 · paket_30.js:4214 | `iskender-bey` | 0.881 | evrenosoglu isa bey→osmanli kaynaklarinda arnavut | 1455 yazında 1000 kişilik bir Napoli kuvvetinin de yardımıyla Berat'ı kuşattı. Evrenosoğlu Îsâ Bey … onları bozguna uğrattı … (26 Temmuz 1455). |
| kronoloji_cok_bosna.js:73 · paket_30.js:4474 | `bosna-hersek` | 0.985 | koydular→koydularsa | Bosna müslümanları Avusturya-Macaristan'ın işgaline karşı koydular. |
| kronoloji_cok_ermeni.js:49 · paket_30.js:4693 | `revan` | 0.893 | +uckilise | Kilikya'dan sürülen Ermeni katogikosları … Eçmiadzin'i kendilerine ikametgâh seçmişlerdi |
| kronoloji_cok_ermeni.js:95 · paket_30.js:4739 | `revan` | 0.954 | emri→emriyle | çarın 2 Nisan 1828 tarihli emri |
| kronoloji_cok_ermeni.js:122 · paket_30.js:4766 | `kazim-karabekir` | 0.977 | selase→selasedeki | İngilizler tarafından Ermenistan'a ve Gürcistan'a verilen (Nisan 1919) elviye-i selâse |
| kronoloji_cok_gurcistan.js:122 · paket_30.js:5040 | `gurcistan` | 0.948 | -lala mustafa · dadyan→dadian | Lala Mustafa Paşa'nın gönderdiği itaat mektubunu kabul eden Dadyan ve Güryel melikleri, Meshiya Prensi Menûçihr Osmanlılar'a tâbi olduklarını bildirdiler |
| kronoloji_cok_once1281_afrika.js:260 | `hafsiler` | 0.982 | gecti→gectiyse | 675 (1277) yılında ölen Müstansır’ın yerine oğlu Ebû Zekeriyyâ Yahyâ el-Vâsiḳ geçti |
| kronoloji_cok_once1281_anadolu.js:687 | `selcuklular` | 0.979 | sonu→sonlari | İznik’e döndü ve 485 yılı sonlarında (1092 sonu 1093 başları) şehri Ebü’l-Kāsım’ın kardeşi Ebü’l-Gāzî’den teslim aldı. |
| kronoloji_cok_romanya.js:85 · paket_30.js:2775 | `zistovi-antlasmasi` | 0.95 | senet→senedin | Bukovina'yı terkeden 1775 tarihli senet |
| kronoloji_dogu_afrika.js:124 · paket_12.js:3647 | `harar` | 0.926 | +necasi · +gabra maskal | negus Amda Sion'un (1312-1344) 1332 yılında müslümanlara saldırarak Zeyla‘ ve Evfât topraklarının büyük bir kısmını ele geçirdiği |
| kronoloji_dogu_afrika.js:129 · paket_12.js:3652 | `evfat` | 0.866 | dan yardim istediler→a abdullah b | Evfât emirleri, 1332-1338 yıllarında Mısır'daki Memlük Sultanı Muhammed b. Kalavun'dan yardım istediler |
| kronoloji_dogu_afrika.js:159 · paket_12.js:3682 | `zeyla` | 0.977 | sigindi→siginmis | Sa'deddin 1403'te Habeş Kralı I. David'den kaçarak Zeyla'a sığındı |
| kronoloji_dogu_afrika.js:385 · paket_12.js:3908 | `ahmed-el-mucahid` | 0.981 | yardim→yardimla | 1541 yılında gelen 400-500 kişilik bir askerî yardım |
| kronoloji_dogu_afrika.js:575 · paket_12.js:4098 | `etiyopya` | 0.944 | -1701 · edilmistir→edilmis ve | 1701'den itibaren eyalet Mekke şeyhülharemliği ve Cidde sancak beyliğiyle birlikte mütalaa edilmiştir |
| kronoloji_dogu_afrika.js:924 · paket_12.js:4447 | `makdisu` | 0.981 | kitabeleri→kitabelerinden | Mescid-i Cum'a ve diğer iki büyük caminin 636 (1238), 667 (1268) ve Şâban 667 (Nisan 1269) tarihli kitâbeleri |
| kronoloji_dogu_afrika.js:934 · paket_12.js:4457 | `makdisu` | 0.918 | kaydetmistir→ve | 1331 yılında Sultan Ebû Bekir b. Ömer ... şehrin büyük gelişme gösterdiğini kaydetmiştir |
| kronoloji_fransa.js:770 · paket_08.js:2678 | `fransa` | 0.867 | -1833 | 1833: Hünkâr İskelesi Antlaşması |
| kronoloji_fransa.js:810 · paket_08.js:2718 | `fransa` | 0.866 | +da · -ilani | 18 Şubat 1856: Islahat Fermanı ilânı |
| kronoloji_guney_asya.js:283 · paket_12.js:5042 | `nepal` | 0.966 | savasi→savasinin | 1814-1816 yıllarındaki İngiliz-Nepal savaşı |
| kronoloji_guney_asya.js:364 · paket_12.js:5123 | `babur` | 0.97 | zafer→zaferden | Çitor Racası Rânâ Sangâ'ya karşı kazanılan zafer |
| kronoloji_guney_asya.js:714 · paket_12.js:5473 | `sind` | 0.979 | edipler→ediplerin | Sind'de yetişen ünlü sûfî, âlim, şair ve edipler |
| kronoloji_guney_asya.js:719 · paket_12.js:5478 | `sind` | 0.932 | variyordu→han turbeleri yogun tas | Deniz İpek yolu da kuzeyden sahile gelerek Sind ve Gucerât limanlarından Basra körfezine ... varıyordu |
| kronoloji_habsburg.js:176 · paket_06.js:181 | `avusturya` | 0.918 | savas→ve | 1593-1606 arası devam eden savaş |
| kronoloji_habsburg.js:356 · paket_06.js:361 | `avusturya` | 0.905 | -osmanli · +petervaradin | Prens Eugène idaresindeki Avusturya kuvvetleri…Osmanlı ordusunu Varadin'de ağır bir yenilgiye uğratmış (1716) |
| kronoloji_hollanda.js:74 · paket_11.js:411 | `hollanda` | 0.976 | harcadi→harcamaya | Hollanda, 1579 yılında İspanya'dan bağımsızlığını kazandıktan hemen sonra deniz aşırı ülkelere açılmak için büyük çaba harcadı |
| kronoloji_ingiltere.js:492 · paket_08.js:497 | `ingiltere` | 0.96 | ahidname→ahidnameye | 1580 tarihli bu ahidnâme |
| kronoloji_ispanya.js:264 · paket_09.js:2864 | `barbaros-hayreddin-pasa` | 0.919 | gemiyle→gemi ile · -ayrildi | 1534 Ağustosunda seksen gemiyle İstanbul'dan ayrıldı... ele geçirdi (22 Eylül) |
| kronoloji_kuzeyafrika.js:199 · paket_12.js:8962 | `sadiler` | 0.885 | in→i · gecirilmesi→gecirdi | 1541'de Agādîr'in ele geçirilmesi |
| kronoloji_kuzeyafrika.js:338 · paket_12.js:9101 | `tunus` | 0.923 | ele gecirildi→yapilan buyuk | altı günlük bir muhasaranın ardından 12 Eylül 1574'te Tunus'u geri aldı… Halkulvâdî Kalesi de otuz üç gün direndiyse de… 24 Ağustos 1574 ele geçirildi |
| kronoloji_kuzeyafrika.js:412 · paket_12.js:9175 | `tilimsan` | 0.969 | uyguladilar→uyguladiktan | Yirmi gün boyunca şehri yağmalayan İspanyollar halka büyük işkenceler uyguladılar |
| kronoloji_portekiz.js:138 · paket_09.js:3661 | `portekiz` | 0.878 | -1486 | 1486: Bartolomeu Diaz Ümitburnu'nu dolaştı |
| kronoloji_portekiz.js:162 · paket_09.js:3685 | `portekiz` | 0.859 | +de · +dogu · ulasti→ilk ulasan kisi | 1498: Vasco da Gama deniz yoluyla Hindistan'a (Kaliküt) ulaştı |
| kronoloji_portekiz.js:232 · paket_09.js:3755 | `selman-reis` | 0.906 | -26 · +te | 26 Rebîülevvel 923 (18 Nisan 1517) |
| kronoloji_sirbistan.js:198 · paket_12.js:13398 | `avusturya` | 0.875 | -avusturya | Avusturya Pasarofça'da kazandığı yerleri…ve Belgrad'ı geri vermiştir. |
| kronoloji_sirbistan.js:212 · paket_12.js:13412 | `sirbistan` | 0.876 | +karacorce kara yorgi | 1804'te Karadjordje (Djordje Petkoviç) liderliğinde Sırp isyanı patlak verdi. |
| kronoloji_sirbistan.js:254 · paket_12.js:13454 | `sirbistan` | 0.945 | +kladovo · +sabac | 1867'de Özerk Sırp yönetimi Osmanlı askerî idaresinde bulunan Belgrad, Fethülislâm, Semendire ve Böğürdelen kalelerindeki garnizonların geri çekilmesiyle buralardaki egemenliğini güçlendirdi. |
| olaylar_0073_iran_yanya.js:96 · paket_26.js:751 | `bagdat` | 0.969 | kazandigini→kazandi | 1821'de başlayan İran savaşlarında da önemli başarılar kazandığını |
| olaylar_cukurova_0907.js:50 · paket_25.js:241 | `kilis` | 0.995 | edildi→edidi | Kilis, Mondros Mütarekesi'nin ardından 6 Aralık 1918 tarihinde İngilizler tarafından işgal edildi.\ |
| olaylar_ek.js:66 · paket_01.js:1640 | `kanije` | 0.903 | -11 · +da | 11 Rebîülâhir 1009 (20 Ekim 1600) |
| olaylar_ek.js:66 · paket_01.js:1640 | `kanije` | 0.871 | -13 · 22→da 20 | 13 Rebîülâhir 1009 (22 Ekim 1600) |
| olaylar_ek3.js:30 · paket_01.js:1869 | `viyana` | 0.964 | arasi→arasinda | ikinci muhasara 14 Temmuz - 12 Eylül arası |
| olaylar_ek5.js:301 · paket_01.js:2509 | `yas-antlasmasi` | 0.918 | -2 · +de | 2 Zilkade 1201 (16 Ağustos 1787) |
| olaylar_p0036.js:38 · paket_25.js:91 | `pertev-pasa` | 0.962 | -15 · +gyula | 15 Safer 974'te (1 Eylül 1566) Göle ve civarındaki birkaç kaleyi bir aydan fazla süren kuşatmanın ardından ele geçirdi |
| olaylar_p0044.js:33 · paket_15.js:221 | `berka` | 0.985 | baglandigi→baglandi | Mısır'ın Osmanlılar tarafından fethinden sonra bu idareye bağlandığı |
| paket_12.js:14504 · paket_12.js:14514 · savaslar.js:519 · savaslar.js:529 | `birinci-dunya-savasi` | 0.984 | etmesi→etmesine | Rusya'nın 2 Kasım 1914'te Osmanlı Devleti'ne savaş ilân etmesi |
| paket_13.js:455 · paket_13.js:462 · paket_13.js:463 · paket_13.js:464 · paket_13.js:465 · paket_13.js:466 (+14) | `bogdan` | 0.921 | -moldavya | XIII. yüzyıldan itibaren de Tatarlar'la Gagauzlar'ın istilâsına uğrayan Moldavya |
| paket_13.js:468 · paket_13.js:603 · paket_13.js:620 · paket_13.js:621 · paket_13.js:622 · paket_13.js:623 (+30) | `kirim` | 0.987 | tabiiyeti→tabiiyetleri | Nogaylar'ın hana tâbiiyeti gevşek olup bunlar hanlık iddiasında bulunanlarla yahut Ruslar ve Kazaklar'la birleşerek… |
| paket_13.js:668 · yer_yama_vassal_kid_0906.js:74 · yerlesimler.js:663 | `gurcistan` | 0.995 | imeret→imereti | Tiflis'in fethinden sonra İmeret ve Kahet yöneticileri Osmanlılar'a itaatlerini bildirdiler |
| paket_13.js:1250 · yerlesimler.js:1245 | `misir` | 0.879 | +arap colu · -sina yarimadasi | Mısır fizikî coğrafya açısından dört bölgeye ayrılır: Nil vadisi ve deltası, Doğu çölü, Batı çölü, Sînâ yarımadası |
| paket_13.js:1280 · yer_yama_belgesiz4.js:30 · yerlesimler.js:1275 | `sudan` | 0.912 | oldurulup→olduruldu bir sure sonra | 6 Kasım 1916'da öldürülüp Dârfûr toprakları bir eyalet halinde İngiliz Sudanı'na bağlandı |
| paket_13.js:1447 · yerlesimler.js:1442 | `kilis` | 0.961 | biri→birinin | Halep eyaletine bağlı livâlardan biri |
| paket_13.js:1491 · yerlesimler.js:1486 | `gumulcine` | 0.95 | -i · +gumulcine | I. Balkan Savasi sirasinda Bulgaristan tarafindan isgal edildi ... I. Dunya Savasi'nda YENIDEN BULGARLAR'IN eline gecti. |
| paket_13.js:1510 · yerlesimler.js:1505 | `karamanogullari` | 0.903 | -timur · ogullarina vermisti→ogullari mehmed ve | Timur Karamanlı ülkesini Kayseri, Kırşehir, Sivrihisar ve Beyşehir'le birlikte Alâeddin Bey'in oğullarına vermişti. |
| paket_13.js:1556 · yerlesimler.js:1551 | `harput` | 0.87 | degistirdi→degistirmesine | sık sık el değiştirdi |
| paket_13.js:1833 · yerlesimler.js:1828 | `hoy` | 0.855 | -1724 yilinda | 1724 yılında III. Ahmed döneminde Hoy tekrar Osmanlı hâkimiyeti altına girdi |
| paket_13.js:1945 · yer_yama_ok106.js:88 · yerlesimler.js:1940 | `sattularap` | 0.959 | imzalanan→imzalanandir | 1847 Mayısında Erzurum'da imzalanan |
| paket_13.js:8629 · paket_13.js:8633 · paket_13.js:8637 · paket_13.js:8641 · paket_13.js:8648 · yerlesimler_kirim.js:138 (+4) | `kirim` | 0.978 | kurultay→kurultayda | 1772'de Rus işgali altında toplanan kurultay |
| paket_13.js:8629 · yer_yama_kademe_zincir.js:19 · yerlesimler_kirim.js:138 | `bahcesaray` | 0.968 | idari→idare | Kırım Hanlığı'nın idari merkezi |
| paket_14.js:5571 · yerlesimler_ek25.js:43 | `harran` | 0.885 | +ve · +da | daha çok Memlükler, kısa aralıklarla İlhanlılar |
| paket_14.js:5814 · yerlesimler_ek27.js:43 | `lazlar` | 0.936 | kazalari→kazalarinda | Pazar ve Hopa kazaları |
| paket_17.js:757 · yerlesimler_e9353f.js:198 | `gao` | 0.891 | +gao da | XVIII. yuzyila kadar Askiyalar Fasli pasalarin emrinde |
| paket_19.js:73 · paket_19.js:77 · yerlesimler_ek_korfez.js:68 · yerlesimler_ek_korfez.js:72 | `riyad` | 0.964 | yarisi→yarisina | XVII. yüzyılın ikinci yarısı |
| paket_21.js:891 · yerlesimler_ok109.js:174 | `sirnak` | 0.987 | +s 641 | Şırnak ismi XIX. yüzyılın sonlarına doğru bir köy adı olarak geçmektedir (Cuinet, II, 612). O tarihlerdeki Bitlis vilâyetinin Siirt sancağına bağlı Eruh kazasının bir köyü olan bu küçük yerleşme… Cumhuriyet dönemine gelm |
| paket_22.js:471 · yerlesimler_ok107.js:466 | `gevgili` | 0.931 | -1383 · -avrathisar | 1383'te Serez ile 1387'de Selânik'in fethi arasında Gynaikokastro (Avrathisar) ve çevresi Osmanlılar'ın eline geçmiş olmalıdır. |
| paket_23.js:305 · yerlesimler_anadolu_0914.js:67 | `ordu--sehir` | 0.988 | olanlar→olanlardan | Milas (Mesudiye), Habsamana (Gölköy), Bolaman, Vona ve Öksün gibi kalelerde fetih sırasında savunmada kalan ve sonradan teslim olanlar |
| paket_24.js:54 · yerlesimler_a78_afrika.js:49 | `sinkit` | 0.962 | i→sehrini | Fransa sömürge idaresi… Adrar bölgesinin merkezi olarak Atâr'ı belirlemişti |
| paket_26.js:1626 · seferler_p0065.js:57 | `kirim` | 0.966 | sehri→sehrine | Kırım hanına ait Balta şehri |
| yer_kron_dogu.js:81 | `bahreyn` | 0.97 | oldu→olan | İranlılar'la Arap kabilelerinin hâkimiyet mücadelelerine sahne oldu |
| yer_yama.js:262 | `kopruluzade-fazil-mustafa-pasa` | 0.98 | sehit oldu→sehid dustu | Belgrad'ın kuzeybatısında ve Karlofça'nın güneydoğusunda yer alan Salankamen (Szalánkemén) palankası... 24 Zilkade 1102'de (19 Ağustos 1691)... Mustafa Paşa bir kurşun isabetiyle şehit oldu |
| yer_yama.js:317 | `zistovi-antlasmasi` | 0.919 | tuna→zistova | Ziştovi, Tuna üzerinde... yol kavşağı üstünde |
| yer_yama.js:322 | `selim-iii` | 0.864 | +rahatca · subat 1807→yine | İngiliz filosunun Çanakkale'den geçip İstanbul önlerine kadar gelmesi (Şubat 1807) |
| yer_yama.js:331 | `trablusgarp` | 0.94 | +bir · -oldu | 1835'te tekrar merkeze bağlanan Trablusgarp'ta... Bingazi ayrı mutasarrıflık oldu |
| yer_yama.js:333 | `encumen-i-danis` | 0.944 | +nin · -acildi | 18 Temmuz 1851... Divanyolu'nda Sultan Mahmud Türbesi yakınındaki Dârülmaârif Mektebi binasında açıldı |
| yer_yama.js:335 | `eflak` | 0.936 | iki bolge→ikisi de | Her iki bölge Bükreş'i devlet merkezi olarak kabul etti |
| yer_yama.js:337 | `lubnan` | 0.9 | -da · saldirmasi→saldirmalari ve | Şam'da da müslümanların hıristiyanlara saldırması |
| yer_yama.js:428 | `cezayir` | 0.985 | edilmesi→edilmesiyle | Dağlık Kabîliye (Bilâdü'l-kabâil) bölgesinin 1853, 1854 ve 1857'deki seferler sonunda işgal edilmesi |
| yer_yama.js:433 | `yemen` | 0.977 | cikti→cikmis | Zebîd ve Tihâme bölgesi hariç Yemen Osmanlı hâkimiyetinden çıktı. |
| yer_yama.js:434 | `yemen` | 0.937 | -kavkeban | Kavkebân'ın uzun bir kuşatmanın ardından alınması üzerine Mutahhar Sa'de'ye çekilmek zorunda kaldı |
| yer_yama.js:437 | `yemen` | 0.933 | +bir | Kansu Paşa, Muharrem 1040'ta (Ağustos 1630) İmam Müeyyed'le anlaşma yaptı |
| yer_yama.js:441 | `yemen` | 0.929 | -cidde · +hediyelerle | Cidde Valisi Süleyman Paşa'nın 1114'te (1702) Yemen İmamı Mehdî'ye elçi yollamasına karşılık imam da İstanbul'a elçi gönderdi. |
| yer_yama.js:446 | `yemen` | 0.857 | -1920 yemen · +ve | 1920: Yemen Mütevekkilî Krallığı adını aldı, İmam Yahyâ ilk kralı oldu |
| yer_yama.js:461 | `said-b-sultan` | 0.86 | -1856 · +ve hanedanin · a gomuldu→daki | 1856 - Maskat'tan Zengibar'a gitmek için çıktığı deniz yolculuğu sırasında vefat etti, Zengibar'a gömüldü. |
| yer_yama.js:647 | `sahib-giray` | 0.859 | +daha da geliserek | Bahçesaray onun zamanında hanlığın ana merkezi olmuştur |
| yer_yama.js:664 | `sahin-giray` | 0.896 | nisan 1781 de→nisaninda | Nisan 1781'de Nogaylar Don Kazakları'na saldırınca... |
| yer_yama_acik.js:80 | `sanliurfa` | 0.905 | -urfa nin | Urfa'nın 1839'da Kavalalı Mehmed Ali Paşa'nın oğlu İbrahim Paşa'nın kısa süre kontrolü altına giren... |
| yer_yama_dogafr.js:77 | `evfat` | 0.975 | savas→savasta | 728 (1328) yılında yapılan şiddetli savaş |
| yer_yama_dogafr.js:132 | `etiyopya` | 0.968 | savasi→savasinda | Tana gölü civarında yaptığı Woina Daga savaşı |
| yer_yama_dogafr.js:182 | `habes-eyaleti` | 0.98 | yer→yerde | Tigre toprakları üzerinde Addi Karro denilen yer |
| yer_yama_hayalet.js:95 | `kert` | 0.865 | kurulus→ve hukumdar oldu | Kuruluş 643/1245 … Herat Timur tarafından işgal edildi (783/1381) |
| yer_yama_kademe_zincir.js:14 | `kefe` | 0.877 | +sudak | XVI. yüzyılda Mangub, Suğdak, Kerç, Azak ve Taman adlı beş kaza mevcuttu |
| yer_yama_misir_himaye.js:38 · yer_yama_misir_himaye.js:44 · yer_yama_misir_himaye.js:50 · yer_yama_misir_himaye.js:56 · yer_yama_misir_himaye.js:62 · yer_yama_misir_himaye.js:68 (+49) | `misir` | 0.922 | -sultan · +melik | Sultan Ahmed Fuad 15 Mart 1922'de kral unvanini aldi ve Misir'da monarsi ilan edildi |
| yer_yama_zaza.js:176 | `erzincan` | 0.927 | -erzincan · +pasa | Erzincan, Bayburt ile birlikte 23 Ekim 1514'te Bıyıklı Mehmed Bey'e beylerbeyilik olarak verilmişti |