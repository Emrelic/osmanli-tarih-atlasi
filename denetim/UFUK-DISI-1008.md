# UFUK-DISI-1008 — önerilen UFUK'un (1000-01-01 → 1945-09-02) DIŞINDA kalan veri, adıyla

Oturum: UMIT alt işçi · 8 Ekim 2026 · ağaç `C:\atlas-ufd` @ `origin/makine/umit` `6abe22c0` · YALNIZ ÖLÇÜM

## ① Öngörü (ölçümden ÖNCE yazıldı)
Dayanak: Z2 §②-5 — KRONOLOJI_* içinde <1281: 1.202, >1945: 4; OLAYLAR <1281: 0. Z2 §②-6: 0900 Mapungubwe, 0981 Bạch Đằng.
- Kronoloji (index.html'in yüklediği bütün dosyalar + künye-içi kronoloji[]): **< 1000-01-01 ≈ 250–400 madde**
  (Bizans 637/831, Avrupa/Asya erken devletleri); **> 1945-09-02 = 4 madde** (Z2'nin sayımı) ± künye-içi birkaç.
- Sınıf (i) UFUK içinde VERI_UFKU dışında (1000–1281 ve 1923-10-30–1945-09-02): ~900 + ~500.
- Künyeler: `f < 1000-01-01` ≈ 80–150 künye; `t > 1945-09-02` ≈ 5–20 künye (9999 açık uçlu olanlar dahil).
- App davranışı (Z2 diff): tarihe git / devlet odağı tıklamasında `BASLANGIC`a **kırpılır** → sahte "1 Ocak 1000" görünür;
  liste satırında ham tarih (`kisaTarihYazi`) yazılır, gizlenmez, sayılmaz. Kırpılan = < 1000 olan bütün maddeler (öngörü ile aynı küme).
- Geri ufuk 800 → dışarıda ~100–200; 500 → ~30–80.

### Öngörü ↔ ölçüm
| öngörü | ölçüm | hüküm |
|---|---|---|
| < 1000 madde ≈ 250–400 | **132** | ✗ fazla tahmin |
| > 1945 madde = 4 (± birkaç künye-içi) | **57** (dosya 4 + künye-içi 53) | ✗ künye-içi kronoloji unutulmuştu |
| künye f < 1000 ≈ 80–150 | **96** | ✓ |
| künye t > 1945 ≈ 5–20 | **54** | ✗ |
| arayüz: kırpar, gizlemez, saymaz; sahte "1 Ocak 1000" | aynen; + 57'si "2 Eylül 1945" | ✓ |
| ufuk 800 → 100–200 · 500 → 30–80 | **30 · 1** | ✗ |

## ② Ölçüm — yöntem
- Evren: `index.html`in yüklediği **71 `data/` betiği** (paketler `/* ==== data/… ==== */` işaretlerinden **330 parçaya** açıldı,
  her parça sırayla ayrı ayrı `vm.runInContext` ile GERÇEKTEN eval edildi; eval hatası **0**). Madde = `window.OLAYLAR*` ∪
  `window.KRONOLOJI_*` (app.js'in kendi desenleri) ∪ `DEVLETLER[].kronoloji[]` (app.js'in `derinKronolojiBindir`inden ÖNCEKİ hâl —
  bağlanan dosyalar iki kez sayılmadı). **13.237 madde · 896 künye.** Her madde ilk göründüğü parçaya bağlandı.
- Karşılaştırma `pad()` ile (yıl 4 haneye). 🔴 Tuzak gerçek: **47 madde ham 3 haneli yıl** taşıyor (`543-01-01`, `800-01-01`…)
  ve **64 künyenin f/t'si** 3 haneli. Ham dizgi karşılaştırması bu 47'yi "1000'den sonra" sayar ⇒ 132 yerine **85** derdi.
- app.js (Z2 diff UYGULANMIŞ, `git apply --check` temiz) ilk 225 satırı node'da koşturuldu: `gunIdx` SAYISALDIR
  (`Date.UTC(+yıl…)`), "800-01-01" ile "0800-01-01" aynı güne düşer ⇒ **arayüzde dizgi tuzağı YOK**.
  (Not: `Date.UTC` 0–99 yılını 1900+ yapar; veride yıl < 226 yok, bugün zararsız.)

## Tablo — sınıflar (UFUK 1000-01-01 → 1945-09-02 · VERI_UFKU 1281-01-01 → 1923-10-29)

| sınıf | madde | künye-içi | dosya (KRONOLOJI_* / OLAYLAR*) |
|---|---|---|---|
| iç (VERI_UFKU içinde) | 10.862 | | |
| **(i) önce** — 1000 ≤ t < 1281 | **1.592** | 412 | 1.180 (en çok: ONCE1281_AVRUPA 272 · _ANADOLU 175 · _ORTADOGU 171 · _IRAN 170 · ANADOLU 134 · _DOGU_ASYA 72) |
| **(i) sonra** — 1923-10-29 < t ≤ 1945-09-02 | **594** | 86 | 508 (COK_1923_1945 503 · INCE_GD_ASYA 2 · ALMANYA 1 · INCE_AVRUPA_AMERIKA 1 · **OLAYLAR_EK8 1**) |
| **(ii) önce** — t < 1000-01-01 | **132** | 109 | 23 (COK_500_1000 16 · ARABISTAN 2 · ONCE1281_HINT_AMERIKA 2 · GURCISTAN 1 · ONCE1281_AFRIKA 1 · ONCE1281_DOGU_ASYA 1) |
| **(ii) sonra** — t > 1945-09-02 | **57** | 53 | 4 (hepsi COK_INCE_GUNEY_ASYA: bahavelpur ×2, cunagadh ×2) |

Z2 §②-5 ile hiza: Z2 "KRONOLOJI_* <1281 = 1.202" der; bu ölçümde dosya kaynaklı (i)+(ii) önce = 1.180 + 23 = 1.203 (fark 1:
Z2 `<1281` sınırını farklı uçla saymış olabilir — ölçülmedi). ">1945 = 4" birebir tuttu. Z2'nin üç maddesi: 0900 Mapungubwe ve
0981 Bạch Đằng **sınıf (ii)**, 1026 Somnat **sınıf (i)** (`KRONOLOJI_COK_ONCE1281_IRAN`, 1026-01-08).

### Künyeler
| | sayı |
|---|---|
| f < 1000-01-01 | **96** (14'ü `t < 1000` ⇒ ufuk 1000'de TAMAMEN dışarıda; liste L3'te ✖) |
| f = 1000-01-01 (Z3'ün "kuşak işareti" künyeleri) | **27** |
| t > 1945-09-02 | **54** (f > 1945 olan 0 ⇒ tamamen dışarıda olan YOK) |
| t = 1945-09-02 (sonu da ufuk ucu) | 72 |
| ⚠️ ayrık değer | `iran` t = **2026-08-07** (1945 sonrası ucu bugüne yakın bir tarih; işaret mi gerçek mi — okumadım) |

## ④ Z2 APPJS diff'i uygulanınca arayüzde ne oluyor (kod okundu + node'da koşturuldu)
- **GİZLENMİYOR, SAYILMIYOR, KIRPILIYOR.** Devlet kronolojisi listesi (`app.js:15808` `odakSirali`) ufku hiç süzmez: 132+57
  maddenin hepsi listede ÇİZİLİR ve sayaca girer. Etiket gerçek yıldır (`kisaTarihYazi`: "981 (yıl; gün kaynaktan alınmadı)").
- Tıklayınca (`gezGit` `:15674` + `maddeAc` → `tarihAyarla` `:10551`): `suanki = Math.max(BASLANGIC, Math.min(BITIS, gi))`.
  ⇒ **189 madde kırpılır: 132'si "1 Ocak 1000"e, 57'si "2 Eylül 1945"e.** Üst çubukta (`ustbarTarih`, `:10258`) görünen tarih
  bu SAHTE gündür; kaydırıcı uçta (konum 0 / MAX). Detay panelinde ham `m.t` ("0900-01-01 · …") yazar — panel ile çubuk
  birbirini YALANLAR. Kırpma hakkında hiçbir uyarı yok (yalnız "tarihe git" kutusu `:14951` kırpınca yazı basar; madde
  tıklamasında böyle dal YOK).
- "KAPSAM DIŞI" şeridi (`:10236`) 1000'de de 1945'te de görünür ama metni "kronoloji geçerlidir" der — kırpılmış gün için yanlış güven.
- Yan etki: ⏮/⏭ ile <1000 maddeler arasında gezinmek haritayı/çubuğu HİÇ oynatmaz (132 madde aynı güne çakılır); 1000'den
  oynatma başlayınca bu 132'nin hepsi aynı anda "geçmiş" sayılır.
- Yan kusur (küçük): yıl hassasiyetli 4 haneli sıfırlı dizgide etiket **sıfırı korur** — "0226", "0840", "0645" (kırpılan 189'un
  **64**'ünde). `kesinlikliYazi` `p[0]`ı aynen basıyor; Z2'nin `yilDizgi()`si burada kullanılmamış.

## ⑤ İki sınıf — anlamı
- **(i) 2.186 madde** (1.592 + 594): UFUK içinde, VERI_UFKU dışında. Çubuk oraya gider, madde doğru günde açılır; yalnız harita
  EKSİK (şerit söyler). Kampanya (motor + yerleşim verisi) bitince ÇÖZÜLÜR.
- **(ii) 189 madde** (132 + 57): ufkun kendisinin dışında. Hiçbir veri kampanyası bunları çözmez; ya ufuk genişler ya madde
  kırpılmış/gizli/işaretli kalır. Bunların 162'si (109 + 53) künye-içi kronolojidir.

## ② Ne bulamadım / ölçmedim
- Tarayıcıda tıklama ile ölçmedim; kırpma ifadesi node'da koşturuldu, DOM akışı kod okumasıyla. "Sahte 1 Ocak 1000" çubukta
  görünür hükmü `guncelle()` okumasına dayanıyor (ustbarTarih = idxYazi(suanki)).
- `derinKronolojiBindir` + çok taraflı ekleyici aynı maddeyi BİRDEN ÇOK devletin listesine koyabilir; ekranda kaç satır olarak
  görüneceğini saymadım (sayım kaynak maddedir).
- `kapsam:"konu"` süzgeci (`dunyaAcik`) OLAYLAR içindir; (ii)'de OLAYLAR maddesi 0 olduğu için etkisiz — ölçüldü.
- `SAVASLAR`, `ANTLASMALAR`, `SEFERLER*`, `ISGALLER`, `KISILER` tarihlerini taramadım (görev kronoloji/olay ve künye diyordu).
- 1 maddelik Z2 farkının (1.202 / 1.203) sebebi.
- 27 kesik künyenin gerçek f'si için DIŞ kaynak açmadım; yalnız künyenin kendi `ic_not_f`/`alinti_f`/`kaynak` alanları okundu.

## ③ Öneri — geri ufuk 1000 / 800 / 500

| geri ufuk | dışarıda kalan madde (t < ufuk) | künye f < ufuk (pencere kırpar) | künye TAMAMEN dışarıda (t < ufuk) | f = ufuk tam |
|---|---|---|---|---|
| **1000** | **132** (künye-içi 109 · dosya 23) | **96** | **14** | 27 (kuşak işareti) |
| **800** | **30** (künye-içi 23 · dosya 7) | **24** | 3 (sasani · hulefa-yi-rasidin · emevi) | 2 (kanem-bornu, aglebi — gerçek değer, işaret değil) |
| **500** | **1** (sasani 226 kuruluşu) | **2** (sasani 226 · bizans 330) | 0 | 0 |
| ileri uç 1945-09-02 | 57 (sabit) | t > ufuk: 54 | 0 | t = ufuk: 72 |

**Önerilen-veride-yok künye (koordinatör EK'i):** `vaspurakan-kralligi` f 908 · t 1021 (Z3 JSON, `islem:"yeni"`).
⚠️ Düzeltme: ufuk 1000'de **tamamen dışarıda DEĞİL** — t=1021 > 1000, yani 1000–1021 arası görünür, **f 1000'e kesilir**
(ufuk 1000'de "f < ufuk" sayısı 96 → **97** olur). Ufuk 800/500'de tamamen içeride.

### Z3'ün 27 "f = 1000-01-01" künyesi — ufuk 800/500 olsa kaçı gerçek tarihine kavuşur?
Ufku açmak `f`'yi DEĞİŞTİRMEZ: veride 1000-01-01 yazılı kaldıkça künye yine 1000'de başlar. Soru "kaynakta yazılabilecek
gerçek bir f yılı var mı"dır. Künyenin kendi notlarına göre (dış kaynak açılmadı):

| durum | sayı | künyeler |
|---|---|---|
| **kaynaklı YIL var, 1000'den önce** | **0** | — |
| 1000 GERÇEK değer (işaret değil) — ufuk ne olursa olsun 1000 kalır | 2 | `gurlu` (TDV başlığı "1000-1215") · `campa` (Coedès: 1000 Vijaya'ya taşınma; ama künye kimliği tartışmalı — Champa 192'den beri) |
| yalnız YAKLAŞIK/onyıl/geleneksel değer — `kesinlik` alanıyla yazılabilir, YIL olarak değil (D210) | 6 | `isvec-birlik-oncesi` (990'lar) · `inuit` (~900, kaynak doğrulanmamış) · `maya-sehir-devletleri` (~900, Britannica) · `orissa` (~498, kaynaksız) · `tui-tonga-imparatorlugu` (~950 geleneksel, UNESCO) · `candela` (Dhanga c. 950–1008 hâkim) |
| yalnız YÜZYIL düzeyi / efsanevî / kaynakta yok — kavuşmaz | 15 | `bohemya` · `irlanda` · `racput` · `kesmir` · `nepal` · `gane` · `tekrur-kralligi` · `kevkev` · `hariphunchai` · `guge` · `cahamana` · `paramara` · `caulukya` · `gurjara-pratihara` (VIII. yy) · `gwynedd` |
| not alanı YOK — ölçülemedi | 4 | `macaristan` (TDV `macaristan`; 1000/1001 taç giyme olabilir — 1000 gerçek olabilir, ölçülemedi) · `hausa-sehir-devletleri` · `svahili-sehirleri` · `piza` |

⇒ **Kesik künye sayısı ufukla:** ufuk 1000'de "f kuşak ucuna/pencereye dayalı" künye = 27 işaretli (2'si gerçek ⇒ 25 kesik) + 96
pencere kırpması = **~121–123**. Ufuk 800'de: 24 pencere kırpması + **25 kesik hâlâ 1000'de** (açılan ufuk onlara yıl
vermez; 6'sı ancak yaklaşık değerle, 0'ı kaynaklı yılla) = **~49**. Ufuk 500'de: 2 + 25 = **~27**.
**Ufuk 800/500'e açmak 27'den HİÇBİRİNİ kaynaklı tarihine kavuşturmaz** — en fazla 6'sına yaklaşık bir değer yolu açar.

### Önerim
1. Arayüz sorusu ufuktan BAĞIMSIZ çözülmeli: (ii) maddeleri hangi ufukta olursa olsun var olacak (1000'de 189 · 800'de 87 ·
   500'de 58). `maddeAc`/`gezGit` kırptığında "tarihe git"teki gibi bir **kırpıldı uyarısı** basmalı ve şerit metni "kronoloji
   geçerlidir" dememeli; ya da liste satırı "ufuk dışı" diye işaretlenmeli. Bugünkü hâl sahte "1 Ocak 1000 / 2 Eylül 1945" üretir.
2. Geri ufuk **800**: madde 132 → 30 (−%77), tamamen dışarıdaki künye 14 → 3. **500**: 1 madde, 0 künye. 800 ile 500 arasındaki
   fark yalnız 29 madde ve 22 künyedir; ama ufku açmak tuzu/çağ paylarını değiştirir ve 27 kesik künye sorununu ÇÖZMEZ (araştırma ister).
3. İleri uç 1945: 57 madde (53 künye-içi — sömürge bağımsızlıkları/monarşi sonları) ufuk ne olursa olsun dışarıda; bunlar künye
   `t`'leridir. Ya "ufuk sonrası" diye işaretlenmeli ya da künye t'si listede gösterilip madde tıklanamaz yapılmalı (karar koordinatörde).
4. `kesinlikliYazi` yıl etiketindeki baştaki sıfır (64 madde) `yilDizgi()` ile tek satırlık düzeltme — Z2'nin dosyası, ona bildirilsin.

## Dosyalar
- `denetim/UFUK-DISI-1008.md` (bu dosya). Ölçüm betikleri scratchpad'de (yukle.js · olc.js · kirp.js · liste.js) — depoya girmedi.

## Listeler (adıyla)

### L1 — Sınıf (ii) ÖNCE: t < 1000-01-01 — 132 madde (ufuk başına kırpılır → '1 Ocak 1000')

| # | t (ham) | liste etiketi | yer | taraflar | b |
|---|---|---|---|---|---|
| 1 | 0226-01-01 | 0226 | künye-içi `sasani` | sasani | Erdeşîr-i Bâbekân Sâsânî hânedanını kurdu |
| 2 | 543-01-01 | 543 | künye-içi `nube` | nube | Makurya Krallığı Hristiyanlığı kabul etti (Dongola merkezli) |
| 3 | 0624-01-01 | 0624 | künye-içi `dogu-calukya` | dogu-calukya | Doğu Çalukya kolu Vengi'de hüküm sürmeye başladı |
| 4 | 0630-01-01 | 0630 | künye-içi `hazar-kaganligi` | hazar-kaganligi | Batı Göktürk Devleti yıkılınca Hazarlar bağımsızlıklarını ilân etti |
| 5 | 0632-01-01 | 0632 | künye-içi `hulefa-yi-rasidin` | hulefa-yi-rasidin | Hz. Peygamber'in vefatının ardından Hz. Ebû Bekir'e biat edildi |
| 6 | 0637-01-01 | 16 H. / 637 (TDV yıl verir) | `KRONOLOJI_COK_500_1000` (data/kronoloji_cok_500_1000.js) | hulefa-yi-rasidin/bizans | Halep ve Kuzey Suriye şehirleri müslümanlara geçti |
| 7 | 0642-01-01 | 21 H. / 642 (TDV yıl verir) | `KRONOLOJI_COK_500_1000` (data/kronoloji_cok_500_1000.js) | hulefa-yi-rasidin/sasani | Nihâvend Savaşı: Sâsânî ordusu yenildi |
| 8 | 0645-01-01 | 0645 | `KRONOLOJI_GURCISTAN` (data/kronoloji_gurcistan.js (data/paket_12.js)) | gurcistan (dosya künyesi; maddenin `d` alanı uzun açıklama metni, taraf değil) | Tiflis'in İslam fetih ordularınca alınması |
| 9 | 651-01-01 | 651 | künye-içi `nube` | nube | Araplarla Bakt Antlaşması imzalandı, uzun bir barış dönemi başladı |
| 10 | 0651-01-01 | 0651 | künye-içi `sasani` | sasani | Son Sâsânî hükümdarı III. Yezdicerd Merv'de öldürüldü; imparatorluk sona erdi |
| 11 | 0652-01-01 | 32 H. / 652-53 (TDV yıl verir) | `KRONOLOJI_COK_500_1000` (data/kronoloji_cok_500_1000.js) | hulefa-yi-rasidin/hazar-kaganligi | Selmân b. Rebîa Derbend'i aşıp Hazar başşehri Belencer'e kadar ilerledi |
| 12 | 0656-01-01 | 36 H. / 656 (TDV yıl verir) | `KRONOLOJI_COK_500_1000` (data/kronoloji_cok_500_1000.js) | hulefa-yi-rasidin | Cemel Vak'ası: Hz. Ali Basra önünde üstün geldi |
| 13 | 0661-01-01 | 0661 | künye-içi `hulefa-yi-rasidin` | hulefa-yi-rasidin | Hz. Ali şehit edildi; Hz. Hasan'ın Muâviye'ye biatıyla Râşid halifeler devri sona erdi (Temmuz  |
| 14 | 0661-01-01 | 0661 | künye-içi `emevi` | emevi | Hz. Hasan'ın biatıyla Muâviye bütün İslâm dünyasına hâkim oldu; Emevî Devleti kuruldu (Temmuz 6 |
| 15 | 665-01-01 | 665 | künye-içi `bavendi` | bavendi | Bâv b. Şâpûr Taberistan halkınca hükümdar seçildi; Bâvendî hânedanı kuruldu |
| 16 | 0680-10-10 | 10 Muharrem 61 / 10 Ekim 680 | `KRONOLOJI_COK_500_1000` (data/kronoloji_cok_500_1000.js) | emevi | Kerbelâ: Hz. Hüseyin ve beraberindekiler katledildi |
| 17 | 0681-01-01 | 0681 | künye-içi `birinci-bulgar` | birinci-bulgar | Bizans, Asparuh'un Slav-Bulgar devletini tanıyıp vergi ödemeyi kabul etti |
| 18 | 683-01-01 | 683 | künye-içi `srivijaya` | srivijaya | Kedukan Bukit yazıtı: Srivicaya'nın bilinen ilk tarihli belgesi |
| 19 | 723-01-01 | 723 | künye-içi `badusbani` | badusbani | Bâdüsbânî hânedanı Taberistan'da hüküm sürüyordu (ilk tarihli tanıklık) |
| 20 | 732-01-01 | 732 | künye-içi `medang` | medang | Canggal yazıtı: Sanjaya'nın Orta Cava'daki krallığı belgelendi |
| 21 | 0745-01-01 | 0745 | künye-içi `uygur-kaganligi` | uygur-kaganligi | Uygur yabgusu Basmıl kağanını yendi; Uygur Kağanlığı kuruldu |
| 22 | 0749-11-28 | 0749-11-28 | künye-içi `abbasi` | abbasi | Kûfe'de Ebü'l-Abbas'a biat edildi; Abbâsî hilâfeti kuruldu |
| 23 | 0750-01-01 | 0750 | künye-içi `pala` | pala | Yerel bir reis olan Gopala anarşi döneminde iktidara geldi; Pâla hanedanı kuruldu |
| 24 | 0750-08-05 | 0750-08-05 | künye-içi `emevi` | emevi | Zap yenilgisinden sonra kaçan II. Mervân Mısır'da öldürüldü; Emevî Hilâfeti sona erdi |
| 25 | 0756-05-15 | 0756-05-15 | künye-içi `endulus-emevi` | endulus-emevi | I. Abdurrahman Musâre'de Yûsuf el-Fihrî'yi yendi, Kurtuba'ya girdi: Endülüs Emevî emirliği kuru |
| 26 | 0772-01-01 | 0772 | künye-içi `midrari` | midrari | Ebü'l-Kāsım b. Semkû Sicilmâse'de idareyi yeniden üstlendi; Midrârî hâkimiyeti başladı |
| 27 | 0777-01-01 | 0777 | künye-içi `rustemi` | rustemi | Abdurrahman b. Rüstem İbâzî imamı seçildi; Rüstemî devleti kuruldu, Tâhert merkez oldu |
| 28 | 0787-01-01 | 171 H. / 787 (TDV yıl verir) | `KRONOLOJI_COK_500_1000` (data/kronoloji_cok_500_1000.js) | rustemi | Rüstemî imamı Abdurrahman b. Rüstem öldü |
| 29 | 0789-01-01 | 0789 | künye-içi `idrisi` | idrisi | I. İdrîs'e Velîlâ'da Evrebe kabilesince biat edildi; İdrîsî devleti kuruldu |
| 30 | 794-01-01 | 794 | künye-içi `heian-japonya` | heian-japonya | Başkent Heian'a (Kyoto) taşındı, Heian dönemi başladı |
| 31 | 800-01-01 | 800 | künye-içi `kanem-bornu` | kanem-bornu | Kanem Krallığı, Çad Gölü'nün kuzeydoğusunda kuruldu |
| 32 | 0800-01-01 | 0800 | künye-içi `aglebi` | aglebi | İbrâhim b. Ağleb İfrîkıye valiliğine getirildi; Ağlebî hânedanı kuruldu |
| 33 | 0801-01-01 | 0801 | künye-içi `barselona-kontlugu` | barselona-kontlugu | Dindar Louis Barselona'yı aldı: Frank sınır kontluğu kuruldu |
| 34 | 802-01-01 | 802 | künye-içi `angkor-kmer` | angkor-kmer | II. Jayavarman Kulen dağında kutsanıp Kmer krallığını Cava'dan bağımsız ilan etti |
| 35 | 0818-01-01 | 0818 | künye-içi `ziyadi` | ziyadi | Muhammed b. Ziyâd Tihâme isyanını bastırmak üzere Yemen'e gönderildi; Ziyâdî hânedanı kuruldu |
| 36 | 819-01-01 | 819 | künye-içi `samani` | samani | Halife Me'mûn'un emriyle Sâmânhudât'ın torunlarına Mâverâünnehir'de valilik verildi |
| 37 | 0820-01-01 | 204 H. / 820 (TDV yıl verir) | `KRONOLOJI_COK_500_1000` (data/kronoloji_cok_500_1000.js) | ziyadi/abbasi | Ziyâdî emîri İbn Ziyâd Zebîd şehrini kurdu |
| 38 | 0821-01-01 | 0821 | künye-içi `tahiri-horasan` | tahiri-horasan | Tâhir b. Hüseyin Horasan valiliğine tayin edildi; Tâhirî hânedanı başladı |
| 39 | 824-01-01 | 824 | künye-içi `navarra` | navarra | İñigo Arista, Pamplona Krallığı'nı kurdu |
| 40 | 0831-09-12 | 12 Eylül 831 | `KRONOLOJI_COK_500_1000` (data/kronoloji_cok_500_1000.js) | aglebi/bizans | Palermo Ağlebî kuvvetlerine teslim oldu |
| 41 | 840-01-01 | 840 | künye-içi `karahanli` | karahanli | Uygur Devleti'nin yıkılışından sonra Kâşgar-Balasagun yöresinde Karahanlı hânedanı ortaya çıktı |
| 42 | 0840-01-01 | 0840 | künye-içi `uygur-kaganligi` | uygur-kaganligi | Kırgız saldırısı Uygur Kağanlığı'nın sonunu getirdi; Uygurlar dağıldı |
| 43 | 0843-01-01 | 843 (TDV yıl verir) | `KRONOLOJI_COK_500_1000` (data/kronoloji_cok_500_1000.js) | aglebi/bizans | Messina Ağlebîler'e teslim oldu |
| 44 | 843-01-01 | 843 | künye-içi `iskocya` | iskocya | Kenneth MacAlpin, Pikte ve İskoç krallıklarını birleştirdi |
| 45 | 0844-01-01 | 0844 | künye-içi `tahiri-horasan` | tahiri-horasan | Abdullah b. Tâhir öldü; yerine oğlu II. Tâhir geçti |
| 46 | 849-01-01 | 849 | künye-içi `toulouse` | toulouse | Kont Fredelon Toulouse'u Kel Charles'a teslim eder, kont olarak onaylanır |
| 47 | 0850-01-01 | 0850 | künye-içi `cola` | cola | Vijayalaya Pallava topraklarını işgale başladı; Tancavur merkezli Çola gücü doğdu |
| 48 | 0850-01-01 | 0850 | künye-içi `ata-pueblo` | ata-pueblo | Chaco Kanyonu Dört Köşe bölgesinin tören, ticaret ve siyaset merkezi olmaya başladı |
| 49 | 861-01-01 | 861 | künye-içi `sirvansah` | sirvansah | Yezîdî hanedanı tarafından Şamahı merkezli kuruldu |
| 50 | 0861-01-01 | 0861 | künye-içi `saffari` | saffari | Ya'kūb b. Leys Sîstan'a hâkim oldu; Saffârî hânedanı kuruldu |
| 51 | 862-01-01 | 862 | künye-içi `flandre` | flandre | I. Baudouin Flandre kontu atanır |
| 52 | 0868-01-01 | 0868 | künye-içi `tolunogullari` | tolunogullari | Ahmed b. Tolun vali vekili olarak Mısır'a girdi; Tolunoğulları'nın temelleri atıldı |
| 53 | 869-01-01 | 869 | künye-içi `derbent-hasimi-emirligi` | derbent-hasimi-emirligi | Hâşim b. Sürâka Derbend'de bağımsızlığını ilân etti |
| 54 | 0870-01-01 | 256 H. / 870 (TDV yıl verir) | `KRONOLOJI_COK_500_1000` (data/kronoloji_cok_500_1000.js) | tolunogullari | Ahmed b. Tolun Katâi'yi kurup idare merkezini oraya taşıdı |
| 55 | 0873-01-01 | 0873 | künye-içi `tahiri-horasan` | tahiri-horasan | Saffârî Ya'kūb b. Leys Nîşâbur'u aldı; Tâhirîler'in Horasan hâkimiyeti sona erdi (Ağustos 873) |
| 56 | 0878-01-01 | 0878 | künye-içi `barselona-kontlugu` | barselona-kontlugu | Troyes'ta Barselona kontluğu Guifré I'e verildi; kontluk bu soyda babadan oğula geçti |
| 57 | 0879-06-09 | 0879-06-09 | künye-içi `saffari` | saffari | Ya'kūb b. Leys öldü; yerine kardeşi Amr b. Leys geçti |
| 58 | 0882-01-01 | 0882 | künye-içi `kiev-rusu` | kiev-rusu | Oleg Askold ve Dir'i öldürüp Kiev'i aldı; Rurik hanedanı Kiev'de |
| 59 | 884-01-01 | 884 | künye-içi `ani-bagratli-kralligi` | ani-bagratli-kralligi | Bagratlı Aşot prensliği krallığa dönüştürdü |
| 60 | 0889-01-01 | 0889 | künye-içi `sacogullari` | sacogullari | Muhammed b. Ebü's-Sâc Azerbaycan valisi oldu; Sâcoğulları hânedanı başladı |
| 61 | 0893-01-01 | 0893 | künye-içi `sacogullari` | sacogullari | Muhammed b. Ebü's-Sâc Merâga'yı alıp idare merkezi yaptı |
| 62 | 0893-06-14 | 0893-06-14 | künye-içi `tolunogullari` | tolunogullari | Halife Mu'tazıd'ın fermanıyla Fırat'tan Berka'ya kadar topraklar Humâreveyh'e verildi |
| 63 | 0896-01-01 | 282 H. / 896 (TDV yıl verir) | `KRONOLOJI_COK_500_1000` (data/kronoloji_cok_500_1000.js) | tolunogullari | Humâreveyh Dımaşk'ta öldürüldü; yerine oğlu Ceyş geçti |
| 64 | 896-01-01 | 896 | künye-içi `suve-emirligi` | suve-emirligi | Mahzûmîler Harar'ın kuzeybatısında Şüve Emirliği'ni kurdu |
| 65 | 0897-01-01 | 0897 | `KRONOLOJI_ARABISTAN` (data/kronoloji_arabistan.js (data/paket_12.js)) | yemen-zeydi | Zeydî imametinin kuruluşu — İmam Hâdî-İlelhak Sa'de'ye geldi |
| 66 | 0899-01-01 | 0899 | künye-içi `karmati` | karmati | Ebû Saîd el-Cennâbî'nin Karmatîleri Katîf ve Ahsâ bölgesini zaptetti |
| 67 | 0900-01-01 | 900 — kaynağın ARALIK UCU; olay yılı değil | `KRONOLOJI_COK_ONCE1281_AFRIKA` (data/kronoloji_cok_once1281_afrika.js) | mapungubwe | Limpopo-Shashe birleşiminde Mapungubwe krallığının yükselişi başladı |
| 68 | 0900-01-01 | 0900 | künye-içi `toltek` | toltek | Tollan (Tula) evresi başladı; Toltekler orta Meksika'nın hâkim gücü oldu |
| 69 | 0901-01-01 | 0901 | `KRONOLOJI_ARABISTAN` (data/kronoloji_arabistan.js (data/paket_12.js)) | yemen-zeydi | İmam Hâdî San'a'yı ilk kez ele geçirdi |
| 70 | 0905-01-01 | 0905 | künye-içi `tolunogullari` | tolunogullari | Şeybân b. Ahmed teslim oldu, Abbâsî ordusu Fustat'a girdi; Tolunoğulları yıkıldı (Ocak 905) |
| 71 | 0905-01-01 | 0905 | künye-içi `hamdani-musul` | hamdani-musul | Ebü'l-Heycâ Abdullah b. Hamdân Musul valiliğine getirildi |
| 72 | 0909-01-01 | 909 (TDV yıl verir; halife ilânı 15 Ocak 910) | künye-içi `fatimi` | fatimi | Fâtımî halifeliği İfrîkıye'de kuruldu (Ubeydullah el-Mehdî) |
| 73 | 0909-01-01 | 0909 | künye-içi `rustemi` | rustemi | Fâtımî kumandanı Ebû Abdullah eş-Şiî Tâhert'e girdi; Rüstemî hânedanı sona erdi (Temmuz 909) |
| 74 | 0909-03-18 | 0909-03-18 | künye-içi `aglebi` | aglebi | Son Ağlebî emîri III. Ziyâdetullah Fâtımîler önünden Mısır'a kaçtı; Ağlebî devleti sona erdi |
| 75 | 0910-01-01 | 0910 | künye-içi `leon-kralligi` | leon-kralligi | III. Alfonso'nun ölümüyle Asturias bölündü, I. García León kralı oldu |
| 76 | 0911-01-01 | Receb 298 / Mart 911 (gün bilinmiyor) | `KRONOLOJI_COK_500_1000` (data/kronoloji_cok_500_1000.js) | saffari/samani | Sâmânîler Zerenc'i aldı; Saffârîler'in Leysî kolu sona erdi |
| 77 | 0911-01-01 | 0911 | künye-içi `koco-uygur` | koco-uygur | Turfan Uygur Devleti bağımsız hâle geldi |
| 78 | 911-01-01 | 911 | künye-içi `normandiya` | normandiya | Saint-Clair-sur-Epte Antlaşması: Rouen ve Seine ağzı Rollo'ya bırakılır |
| 79 | 914-01-01 | 914 | künye-içi `bali-warmadewa` | bali-warmadewa | Blanjong yazıtı: Sri Kesari Warmadewa Bali'de belgelendi |
| 80 | 916-01-01 | 916 | künye-içi `liao-hanedani` | liao-hanedani | Hıtay reisi Apaoki (Yelü Abaoji) kendini hükümdar ilan etti |
| 81 | 918-01-01 | 918 | künye-içi `goryeo` | goryeo | Wang Geon, Goryeo hanedanını kurdu |
| 82 | 0925-01-01 | 0925 | künye-içi `hirvatistan-kralligi` | hirvatistan-kralligi | Papa X. Ioannes'in mektubunda Tomislav 'Hırvatların kralı' diye anıldı |
| 83 | 928-01-01 | 928 | künye-içi `ziyari` | ziyari | Merdâvîc Cürcân merkezli Ziyârî hânedanını kurdu |
| 84 | 929-01-01 | 929 | künye-içi `medang` | medang | Mpu Sindok krallığın merkezini Doğu Cava'ya taşıdı |
| 85 | 0929-01-01 | 0929 | künye-içi `endulus-emevi` | endulus-emevi | III. Abdurrahman 'halife' ve 'emîrü'l-mü'minîn' unvanını aldı: Kurtuba Hilâfeti |
| 86 | 0929-01-01 | 0929 | künye-içi `sacogullari` | sacogullari | Sâcoğulları hânedanı sona erdi |
| 87 | 0929-03-02 | 0929-03-02 | künye-içi `hamdani-musul` | hamdani-musul | Ebü'l-Heycâ öldü; hânedan Musul ve Halep kollarına ayrıldı, Musul'da Nâsırüddevle Hasan öne çık |
| 88 | 0930-01-01 | 0930 | künye-içi `izlanda-serbest-devleti` | izlanda-serbest-devleti | İlk Althing toplandı, Ulfljótr yasaları kabul edildi |
| 89 | 932-01-01 | 932 | künye-içi `buveyhi` | buveyhi | Büveyhî Ali İsfahan'ı işgal etti; hânedan İran'ın batısında hâkimiyet kurmaya başladı |
| 90 | 933-01-01 | 933 | künye-içi `arles-kralligi` | arles-kralligi | Aşağı ve Yukarı Burgonya birleşerek Burgonya (Arles) Krallığı'nı oluşturur |
| 91 | 0935-01-01 | 0935 | künye-içi `ihsidi` | ihsidi | Muhammed b. Tuğç yeniden Mısır valiliğine atandı; İhşîdî dönemi başladı (Ağustos 935) |
| 92 | 937-01-01 | 937 | künye-içi `dali-kralligi` | dali-kralligi | Duan Siping Dali Krallığı'nı kurdu |
| 93 | 939-01-01 | 939 | künye-içi `bretanya` | bretanya | Alan II, Normanları kovup dükalığı yeniden kurdu |
| 94 | 942-01-01 | 942 | künye-içi `musafiri` | musafiri | Vehsûdân ve Merzübân babalarını indirip Şemîrân'da idareyi aldı; Târum ve Azerbaycan kolları ay |
| 95 | 0944-10-29 | 0944-10-29 | künye-içi `hamdani-halep` | hamdani-halep | Seyfüddevle Halep'e girdi; Hamdânîler'in Halep kolu kuruldu |
| 96 | 0946-01-01 | Zilhicce 334 / Temmuz 946 (gün bilinmiyor) | `KRONOLOJI_COK_500_1000` (data/kronoloji_cok_500_1000.js) | ihsidi/hamdani-halep | İhşîd Muhammed b. Tuğç Dımaşk'ta öldü |
| 97 | 947-01-01 | 947 | künye-içi `sicilya-emirligi` | sicilya-emirligi | Hasan b. Ali el-Kelbî Sicilya valisi: Kelbî emirliği başlar |
| 98 | 951-01-01 | 951 | künye-içi `seddadiler-gence` | seddadiler-gence | Muhammed b. Şeddâd Dvin'i ele geçirip hânedanı kurdu |
| 99 | 0958-01-01 | 347 H. / 958 (TDV yıl verir) | `KRONOLOJI_COK_500_1000` (data/kronoloji_cok_500_1000.js) | hamdani-musul/buveyhi/hamdani-halep | Büveyhî Muizzüddevle Musul'u aldı; Nâsırüddevle Halep'e sığındı |
| 100 | 960-01-01 | 960 | künye-içi `song` | song | General Zhao Kuangyin (Taizu), Çin'i yeniden birleştirdi |
| 101 | 962-01-01 | 962 | künye-içi `ani-bagratli-kralligi` | ani-bagratli-kralligi | III. Aşot krallığın merkezini Ani'ye taşıdı, Vanand'ı (Kars) kardeşi Muşeg'e verdi |
| 102 | 962-01-01 | 962 | künye-içi `kars-vanand-kralligi` | kars-vanand-kralligi | III. Aşot Vanand bölgesini merkezi Kars olmak üzere kardeşi Muşeg'e verdi |
| 103 | 0963-01-01 | 352 H. / 963 (TDV yıl verir) | `KRONOLOJI_COK_500_1000` (data/kronoloji_cok_500_1000.js) | midrari/fatimi | Fâtımî ordusu Sicilmâse'de Semkû'yu devirip Fâtımî nüfuzunu tanıyan el-Mu'tez'i emîr yaptı |
| 104 | 963-01-01 | 963 | künye-içi `gazneli` | gazneli | Alp Tegin Gazne'yi Levikler'den alarak Gazneli Devleti'nin temelini attı |
| 105 | 0964-01-01 | 353 H. / 964 (TDV yıl verir) | `KRONOLOJI_COK_500_1000` (data/kronoloji_cok_500_1000.js) | hamdani-musul/buveyhi | Musul yeniden Büveyhî işgaline uğradı; yönetim Ebû Tağlib Gazanfer'e verildi |
| 106 | 0965-01-01 | 0965 | künye-içi `idil-bulgar` | idil-bulgar | İdil Bulgarları Hazar üstünlüğünden kurtulup tam bağımsız oldu |
| 107 | 0965-01-01 | 0965 | künye-içi `hazar-kaganligi` | hazar-kaganligi | Rus saldırıları karşısında Hazar hakanı Hârizmliler'e sığındı; kağanlık çöktü |
| 108 | 0969-01-01 | 0969 | künye-içi `mekke-serifligi` | mekke-serifligi | Hasenî Ca‘fer b. Muhammed Mekke'ye hâkim oldu, şerif emirliği başladı |
| 109 | 0969-01-01 | 0969 | künye-içi `medine-emirligi` | medine-emirligi | Hüseynîler Medine'ye yeniden hâkim olup Fâtımîler adına hutbe okuttu |
| 110 | 0969-07-06 | 0969-07-06 | künye-içi `ihsidi` | ihsidi | İhşîdî ileri gelenleri Cevher es-Sıkıllî'ye bağlılık bildirdi, Cevher Fustat'a girdi; İhşîdîler |
| 111 | 0971-01-01 | 0971 | künye-içi `birinci-bulgar` | birinci-bulgar | Trakya ve Kuzey Bulgaristan Bizans'a geçti; devlet batıda sürdü |
| 112 | 971-01-01 | 971 | künye-içi `seddadiler-gence` | seddadiler-gence | Fazl ile Ali el-Leşkerî Gence'yi ele geçirdi |
| 113 | 972-01-01 | 972 | künye-içi `ziriler` | ziriler | Bulukkîn b. Zîrî, Fâtımî halifesince Mağrib valiliğine getirilip Kayrevan'a yerleşti |
| 114 | 0973-01-01 | 0973 | künye-içi `bati-calukya` | bati-calukya | II. Taila, Raştrakuta kralını yenip bağımsızlığını ilan etti; Kalyani Çalukya hanedanı kuruldu |
| 115 | 976-01-01 | 976 | künye-içi `magrave-sicilmase` | magrave-sicilmase | Mağrâve emîri Hazrûn b. Fülfûl Midrârî emîrini öldürüp Sicilmâse'ye hâkim oldu |
| 116 | 0976-01-01 | 0976 | künye-içi `midrari` | midrari | Mağrâve emîri Hazrûn b. Fülfûl Sicilmâse'yi alıp son Midrârî emîrini öldürdü; şehir Endülüs Eme |
| 117 | 977-01-01 | 977 | künye-içi `poni` | poni | Çin Song hanedanına ilk haraç/elçilik heyeti gönderildi, "Po-ni" adıyla kayda geçti |
| 118 | 979-01-01 | 979 | künye-içi `revvadi` | revvadi | Tebriz hâkimi Ebü'l-Heycâ Hüseyin Müsâfirîlerden bağımsızlığını kazandı (979 veya 980) |
| 119 | 979-01-01 | 979 | künye-içi `musafiri` | musafiri | Azerbaycan Revvâdîlerin eline geçti; Müsâfirîler Târum'a çekildi (979 veya 980) |
| 120 | 0979-01-01 | 0979 | künye-içi `hamdani-musul` | hamdani-musul | Ebû Tağlib Gazanfer Remle'de öldürüldü; Hamdânîler'in Musul ve el-Cezîre hâkimiyeti fiilen sona |
| 121 | 980-01-01 | 980 | künye-içi `tien-le-hanedani` | tien-le-hanedani | Lê Hoàn tahta çıktı, Erken Lê hanedanı başladı |
| 122 | 0981-01-01 | 981 (yıl; gün kaynaktan alınmadı) | `KRONOLOJI_COK_ONCE1281_DOGU_ASYA` (data/kronoloji_cok_once1281_dogu_asya.js) | tien-le-hanedani/song | Bạch Đằng — Lê Hoàn, Song istilasını püskürttü |
| 123 | 982-01-01 | 982 | künye-içi `lori-kralligi` | lori-kralligi | Taşir'de Lori merkezli Bagratlı krallığı kuruldu |
| 124 | 983-01-01 | 983 | künye-içi `mervani` | mervani | Bâd Meyyâfârikīn'ı alarak Mervânî devletinin temellerini attı, ardından Âmid, Nusaybin, Cizre v |
| 125 | 0985-01-01 | 985 ya da 986 (kaynak iki yıl verir; alt uç) | `KRONOLOJI_COK_ONCE1281_HINT_AMERIKA` (data/kronoloji_cok_once1281_hint_amerika.js) | norse-gronland | Kızıl Erik'in İzlanda'dan getirdiği göçmenler Grönland'da Doğu Yerleşimi'ni (Eystribygð) kurdu |
| 126 | 0985-01-01 | 0985 | künye-içi `idrisi` | idrisi | Son İdrîsî II. Hasan, Hâcib el-Mansûr'un adamlarınca öldürüldü; hânedan sona erdi |
| 127 | 0988-01-01 | c. 988 (kaynak saltanat başını yaklaşık verir) | `KRONOLOJI_COK_ONCE1281_HINT_AMERIKA` (data/kronoloji_cok_once1281_hint_amerika.js) | pala | I. Mahipala tahta çıktı; Pâla gücü yeniden Varanasi'ye kadar uzandı |
| 128 | 0990-01-01 | 0990 | künye-içi `ukayli` | ukayli | Ebü'z-Zevvâd Musul'u aldı; Ukaylî hânedanı kuruldu |
| 129 | 991-01-01 | 991 | künye-içi `annazi` | annazi | Ebü'l-Feth Muhammed b. Annâz Hulvân'da hüküm sürmeye başladı |
| 130 | 0991-01-01 | 0991 | künye-içi `numeyri` | numeyri | Harran valisi Vessâb b. Sâbık en-Nümeyrî bağımsızlığını ilân etti |
| 131 | 993-01-01 | 993 | künye-içi `arles-kralligi` | arles-kralligi | III. Rudolf Burgonya kralı olur |
| 132 | 0997-01-01 | 0997 | künye-içi `mezyedi` | mezyedi | Ali b. Mezyed Büveyhîler tarafından emîr tanındı |

### L2 — Sınıf (ii) SONRA: t > 1945-09-02 — 57 madde (ufuk sonuna kırpılır → '2 Eylül 1945')

| # | t | yer | taraflar | b |
|---|---|---|---|---|
| 1 | 1946-05-25 | künye-içi `urdun-emirligi` | urdun-emirligi | Londra Antlaşması ile İngiliz mandası sona erdi, Ürdün Krallığı ilan edildi |
| 2 | 1946-07-04 | künye-içi `filipin-commonwealth` | filipin-commonwealth | Filipinler Cumhuriyeti bağımsız oldu |
| 3 | 1946-09-08 | künye-içi `bulgaristan-kralligi` | bulgaristan-kralligi | Halk oylamasıyla monarşinin kaldırılmasına karar verildi |
| 4 | 1946-09-15 | künye-içi `bulgaristan-kralligi` | bulgaristan-kralligi | Halk Cumhuriyeti ilan edildi, krallık sona erdi |
| 5 | 1947-01-01 | `KRONOLOJI_COK_INCE_GUNEY_ASYA` (data/kronoloji_cok_ince_guney_asya.js) | bahavelpur | İngiliz himaye antlaşması sona erdi, Bahâvelpûr Pakistan'a katıldı |
| 6 | 1947-01-01 | `KRONOLOJI_COK_INCE_GUNEY_ASYA` (data/kronoloji_cok_ince_guney_asya.js) | cunagadh | Cunagadh nevabı devletini Pakistan'a bağlama kararı aldı |
| 7 | 1947-08-15 | künye-içi `bharatpur-cat` | bharatpur-cat | Hindistan'ın bağımsızlığıyla Bharatpur Hindistan'a katıldı (Instrument of Accession) |
| 8 | 1947-08-15 | künye-içi `meysur-racaligi` | meysur-racaligi | Hindistan'ın bağımsızlığıyla Instrument of Accession imzalandı |
| 9 | 1947-10-26 | künye-içi `cammu-kesmir` | cammu-kesmir | Mihrace Hindistan'a katılım antlaşmasını imzaladı |
| 10 | 1947-11-09 | `KRONOLOJI_COK_INCE_GUNEY_ASYA` (data/kronoloji_cok_ince_guney_asya.js) | cunagadh | Hindistan Cunagadh'ın idaresini devraldı |
| 11 | 1948-03-18 | künye-içi `bharatpur-cat` | bharatpur-cat | Alwar, Dholpur ve Karauli ile birleşip Matsya Birliği'ni kurdu, ayrı devlet olarak varlığı sona |
| 12 | 1948-05-14 | künye-içi `filistin-mandasi` | filistin-mandasi | İngiliz mandası sona erdi; aynı gün İsrail Devleti ilan edildi |
| 13 | 1948-05-28 | künye-içi `gvalyar` | gvalyar | Madhya Bharat'ın kuruluşuyla Gvalyar Hindistan'a katıldı |
| 14 | 1948-05-28 | künye-içi `indor` | indor | Madhya Bharat'ın kuruluşuyla İndor Hindistan'a katıldı |
| 15 | 1948-09-13 | künye-içi `haydarabad-nizam` | haydarabad-nizam | Hindistan, 'Operation Polo' harekâtıyla Haydarabad'ı işgale başladı |
| 16 | 1948-09-17 | künye-içi `haydarabad-nizam` | haydarabad-nizam | Nizam'ın orduları teslim oldu, Haydarabad fiilen Hindistan'a katıldı |
| 17 | 1949-03-01 | künye-içi `kolhapur` | kolhapur | Bombay Eyaleti'ne resmî devir yürürlüğe girdi (Agreement of Merger, 1 Şubat 1949) |
| 18 | 1949-05-01 | künye-içi `baroda` | baroda | Baroda Hindistan'a resmî olarak katıldı |
| 19 | 1951-01-01 | künye-içi `portekiz-angola` | portekiz-angola | Angola Portekiz'in denizaşırı eyaleti oldu (yıl) |
| 20 | 1952-07-26 | künye-içi `misir-kralligi` | misir-kralligi | Hür Subaylar darbesiyle Kral Faruk tahttan indirildi (oğlu II. Fuad adına naiplik dönemi başlad |
| 21 | 1953-06-18 | künye-içi `misir-kralligi` | misir-kralligi | Mısır Cumhuriyeti ilan edildi, monarşi resmen kaldırıldı |
| 22 | 1955-01-01 | `KRONOLOJI_COK_INCE_GUNEY_ASYA` (data/kronoloji_cok_ince_guney_asya.js) | bahavelpur | Bahâvelpûr Pencap eyaletine katıldı, nevvâblık sona erdi |
| 23 | 1956-01-01 | künye-içi `ingiliz-sudani` | ingiliz-sudani | Sudan bağımsızlığını ilan etti, Anglo-Mısır Kondominyumu sona erdi |
| 24 | 1956-03-20 | künye-içi `tunus-beyligi-fransiz` | tunus-beyligi-fransiz | Emîn Bey'in bağımsızlığı görmesiyle beylik dönemi resmen sona erdi |
| 25 | 1957-03-06 | künye-içi `ingiliz-altin-kiyisi` | ingiliz-altin-kiyisi | Gana adıyla bağımsızlık |
| 26 | 1958-01-01 | künye-içi `fransiz-ekvator-afrikasi` | fransiz-ekvator-afrikasi | Üye topraklar özerk cumhuriyet olunca federasyon dağıldı (yıl) |
| 27 | 1958-07-14 | künye-içi `irak-kralligi` | irak-kralligi | 14 Temmuz Devrimi: Abdülkerim Kasım liderliğindeki darbeyle II. Faysal öldürüldü, krallık yıkıl |
| 28 | 1959-01-01 | künye-içi `fransiz-bati-afrika` | fransiz-bati-afrika | Federasyon dağıldı (yıl; gün bulunamadı) |
| 29 | 1960-01-01 | künye-içi `fransiz-kamerun-mandasi` | fransiz-kamerun-mandasi | Kamerun Cumhuriyeti bağımsızlığını ilan etti |
| 30 | 1960-06-30 | künye-içi `belcika-kongo` | belcika-kongo | Kongo bağımsızlığını kazandı |
| 31 | 1960-10-01 | künye-içi `ingiliz-nijerya` | ingiliz-nijerya | Nijerya bağımsızlığını kazandı |
| 32 | 1961-04-27 | künye-içi `ingiliz-siyera-leon` | ingiliz-siyera-leon | Sierra Leone bağımsızlığını kazandı |
| 33 | 1961-05-31 | künye-içi `guney-afrika-birligi` | guney-afrika-birligi | Güney Afrika Cumhuriyeti ilan edildi, Birlik sona erdi |
| 34 | 1961-12-09 | künye-içi `ingiliz-tanganika-mandasi` | ingiliz-tanganika-mandasi | Tanganika bağımsızlığını kazandı |
| 35 | 1962-07-01 | künye-içi `ruanda-urundi-mandasi` | ruanda-urundi-mandasi | Ruanda bağımsızlığını ilan etti, manda sona erdi |
| 36 | 1962-07-05 | künye-içi `cezayir-fransiz` | cezayir-fransiz | Cezayir Bağımsızlık Savaşı (1954-1962) sonunda Cezayir bağımsızlığını ilan etti. |
| 37 | 1962-09-26 | künye-içi `yemen-zeydi` | yemen-zeydi | Mısır destekli ihtilal Zeydî imamlığına son verdi |
| 38 | 1963-12-12 | künye-içi `ingiliz-kenya-kolonisi` | ingiliz-kenya-kolonisi | Kenya bağımsızlığını kazandı |
| 39 | 1964-07-06 | künye-içi `ingiliz-nyasaland` | ingiliz-nyasaland | Malavi adıyla bağımsızlık |
| 40 | 1964-10-24 | künye-içi `ingiliz-kuzey-rodezya` | ingiliz-kuzey-rodezya | Zambiya adıyla bağımsızlık |
| 41 | 1965-11-11 | künye-içi `ingiliz-guney-rodezya` | ingiliz-guney-rodezya | Tek taraflı bağımsızlık ilanı (UDI) |
| 42 | 1966-05-26 | künye-içi `ingiliz-guyanasi` | ingiliz-guyanasi | Guyana Bağımsızlık Yasası (1966) yürürlüğe girdi; koloni 'Guyana' adını aldı. |
| 43 | 1966-09-30 | künye-içi `ingiliz-becuanaland` | ingiliz-becuanaland | Botsvana Cumhuriyeti olarak bağımsızlığını kazandı |
| 44 | 1967-11-30 | künye-içi `kesiri-sultanligi` | kesiri-sultanligi | Güney Yemen'in bağımsızlığıyla İngiliz himayesindeki Hadramut sultanlıkları (Kesîrî dahil) tari |
| 45 | 1967-11-30 | künye-içi `kuayti-sultanligi` | kuayti-sultanligi | Güney Yemen'in bağımsızlığıyla İngiliz himayesindeki Hadramut sultanlıkları (Kuaytî dahil) tari |
| 46 | 1973-09-24 | künye-içi `portekiz-gine` | portekiz-gine | PAIGC Gine Bissau'nun bağımsızlığını ilan etti |
| 47 | 1974-09-10 | künye-içi `portekiz-gine` | portekiz-gine | Portekiz bağımsızlığı tanıdı |
| 48 | 1975-06-25 | künye-içi `portekiz-mozambik` | portekiz-mozambik | Mozambik'in bağımsızlığı ilan edildi |
| 49 | 1975-11-11 | künye-içi `portekiz-angola` | portekiz-angola | Angola bağımsızlığını kazandı |
| 50 | 1975-11-25 | künye-içi `hollanda-guyanasi` | hollanda-guyanasi | Hollanda, Surinam'ın bağımsızlığını tanıdı; Johan Ferrier ilk cumhurbaşkanı oldu. |
| 51 | 1979-01-16 | künye-içi `iran` | iran | Muhammed Rızâ Şah ülkeyi terk etti, bir daha dönemedi |
| 52 | 1979-02-01 | künye-içi `iran` | iran | Ayetullah Humeyni sürgünden Tahran'a döndü |
| 53 | 1979-03-31 | künye-içi `iran` | iran | Referandumla İran İslam Cumhuriyeti ilan edildi, monarşi resmen sona erdi |
| 54 | 1980-04-18 | künye-içi `ingiliz-guney-rodezya` | ingiliz-guney-rodezya | Zimbabve adıyla bağımsız oldu |
| 55 | 1981-09-21 | künye-içi `ingiliz-hondurasi` | ingiliz-hondurasi | Belize bağımsızlığını kazandı |
| 56 | 1990-03-21 | künye-içi `guneybati-afrika-mandasi` | guneybati-afrika-mandasi | Namibya bağımsızlığını kazandı |
| 57 | 1991-12-25 | künye-içi `sovyet-rusya` | sovyet-rusya | Kremlin'de Sovyet bayrağı son kez indirildi, SSCB dağıldı |

### L3 — Künye f < 1000-01-01 — 96 künye (`t < 1000` olan 14'ü TAMAMEN dışarıda: ✖)

| # | id | ad | f | t | |
|---|---|---|---|---|---|
| 1 | `sasani` | Sâsânî İmparatorluğu | 0226-01-01 | 0651-01-01 | ✖ |
| 2 | `bizans` | Bizans (Doğu Roma) İmparatorluğu | 330-05-11 | 1461-08-15 |  |
| 3 | `nube` | Nûbe Krallıkları (Makurya-Alve) | 543-01-01 | 1504-01-01 |  |
| 4 | `dogu-calukya` | Doğu Çalukya (Vengi Çalukyaları) | 0624-01-01 | 1070-01-01 |  |
| 5 | `hazar-kaganligi` | Hazar Kağanlığı | 0630-01-01 | 0965-01-01 | ✖ |
| 6 | `hulefa-yi-rasidin` | Hulefâ-yi Râşidîn Devri (Medine Hilâfeti) | 0632-01-01 | 0661-01-01 | ✖ |
| 7 | `emevi` | Emevî Hilâfeti (Benî Ümeyye) | 0661-01-01 | 0750-08-05 | ✖ |
| 8 | `bavendi` | Bâvendîler | 665-01-01 | 1349-04-17 |  |
| 9 | `sunda-pajajaran` | Sunda Krallığı (Pajajaran) | 669-01-01 | 1527-06-22 |  |
| 10 | `birinci-bulgar` | Birinci Bulgar Devleti (Tuna Bulgar Devleti; Samuil dönemi) | 681-01-01 | 1018-01-01 |  |
| 11 | `srivijaya` | Srivicaya (Śrīvijaya) Krallığı | 683-01-01 | 1275-01-01 |  |
| 12 | `venedik` | Venedik Cumhuriyeti | 697-01-01 | 1797-05-12 |  |
| 13 | `dubrovnik` | Dubrovnik (Ragusa) Cumhuriyeti | 700-01-01 | 1808-01-31 |  |
| 14 | `badusbani` | Bâdüsbânîler (Rûyân üstândârları) | 723-01-01 | 1598-01-01 |  |
| 15 | `medang` | Medang (Mataram) Krallığı (Cava) | 732-01-01 | 1016-01-01 |  |
| 16 | `uygur-kaganligi` | Uygur Kağanlığı (Ötüken) | 0745-01-01 | 0840-01-01 | ✖ |
| 17 | `abbasi` | Abbâsî Hilâfeti | 0749-11-28 | 1258-02-10 |  |
| 18 | `pala` | Pâla Hanedanı (Bengal-Bihar) | 0750-01-01 | 1120-01-01 |  |
| 19 | `papalik` | Papalık Devleti | 756-01-01 | 1870-09-20 |  |
| 20 | `endulus-emevi` | Endülüs Emevîleri (Kurtuba Emirliği / Hilâfeti) | 756-05-15 | 1031-01-01 |  |
| 21 | `midrari` | Midrârîler (Sicilmâse) | 0772-01-01 | 0976-01-01 | ✖ |
| 22 | `rustemi` | Rüstemîler | 0777-01-01 | 0909-01-01 | ✖ |
| 23 | `idrisi` | İdrîsîler | 0789-01-01 | 0985-01-01 | ✖ |
| 24 | `heian-japonya` | Japonya — Heian Dönemi İmparatorluk Sarayı | 794-01-01 | 1185-01-01 |  |
| 25 | `kanem-bornu` | Kanem-Bornu İmparatorluğu | 800-01-01 | 1905-01-01 |  |
| 26 | `aglebi` | Ağlebîler | 0800-01-01 | 0909-03-18 | ✖ |
| 27 | `barselona-kontlugu` | Barselona Kontluğu (Katalan kontlukları) | 801-01-01 | 1164-01-01 |  |
| 28 | `angkor-kmer` | Kmer (Angkor) İmparatorluğu | 802-01-01 | 1431-01-01 |  |
| 29 | `ziyadi` | Ziyâdîler (Yemen Tihâmesi) | 0818-01-01 | 1017-01-01 |  |
| 30 | `samani` | Sâmânîler | 819-01-01 | 1005-01-01 |  |
| 31 | `tahiri-horasan` | Tâhirîler (Horasan) | 0821-01-01 | 0873-01-01 | ✖ |
| 32 | `navarra` | Navarra Krallığı | 824-01-01 | 1620-10-19 |  |
| 33 | `karahanli` | Karahanlılar (bölünme öncesi birleşik devlet) | 840-01-01 | 1041-01-01 |  |
| 34 | `iskocya` | İskoçya Krallığı | 843-01-01 | 1707-05-01 |  |
| 35 | `pagan` | Pagan Krallığı (Burma) — Son Dönem | 849-01-01 | 1297-01-01 |  |
| 36 | `toulouse` | Toulouse Kontluğu | 849-01-01 | 1271-01-01 |  |
| 37 | `cola` | Çola (Chola) İmparatorluğu | 0850-01-01 | 1279-01-01 |  |
| 38 | `ata-pueblo` | Ata Pueblo Kültürü (Anasazi) — Chaco ve Mesa Verde | 0850-01-01 | 1300-01-01 |  |
| 39 | `sirvansah` | Şirvanşahlar | 861-01-01 | 1538-01-01 |  |
| 40 | `saffari` | Saffârîler | 0861-01-01 | 1003-01-01 |  |
| 41 | `flandre` | Flandre Kontluğu | 862-01-01 | 1384-01-30 |  |
| 42 | `tolunogullari` | Tolunoğulları | 0868-01-01 | 0905-01-01 | ✖ |
| 43 | `derbent-hasimi-emirligi` | Derbend (Bâbülebvâb) Hâşimî Emirliği | 869-01-01 | 1065-01-01 |  |
| 44 | `norvec-kralligi` | Norveç Krallığı (Birlik Öncesi ve Kalmar Dönemi) | 872-01-01 | 1537-01-01 |  |
| 45 | `kiev-rusu` | Kiev Rus'u (Kiev Büyük Knezliği) | 882-01-01 | 1240-12-06 |  |
| 46 | `ani-bagratli-kralligi` | Ani Bagratlı Ermeni Krallığı | 884-01-01 | 1045-01-01 |  |
| 47 | `sacogullari` | Sâcoğulları (Azerbaycan) | 0889-01-01 | 0929-01-01 | ✖ |
| 48 | `suve-emirligi` | Şüve (Shoa) Mahzûmî Emirliği | 896-01-01 | 1285-01-01 |  |
| 49 | `yemen-zeydi` | Yemen Zeydî İmamlığı | 897-01-01 | 1962-09-26 |  |
| 50 | `karmati` | Bahreyn Karmatî Devleti | 0899-01-01 | 1076-01-01 |  |
| 51 | `mapungubwe` | Mapungubwe Krallığı | 900-01-01 | 1300-01-01 |  |
| 52 | `toltek` | Toltek Devleti (Tollan/Tula) | 0900-01-01 | 1150-01-01 |  |
| 53 | `hamdani-musul` | Hamdânîler (Musul kolu) | 0905-01-01 | 0979-01-01 | ✖ |
| 54 | `fatimi` | Fâtımî Devleti | 0909-01-01 | 1171-09-13 |  |
| 55 | `leon-kralligi` | León Krallığı | 910-01-01 | 1230-09-23 |  |
| 56 | `koco-uygur` | Koço (Turfan) Uygur Devleti — İdikutlar | 911-01-01 | 1209-01-01 |  |
| 57 | `normandiya` | Normandiya Dükalığı | 911-01-01 | 1204-01-01 |  |
| 58 | `bali-warmadewa` | Bali Krallığı (Warmadewa Hanedanı) | 914-01-01 | 1284-01-01 |  |
| 59 | `liao-hanedani` | Liao Hanedanı (Kitan / Hıtay) | 916-01-01 | 1125-01-01 |  |
| 60 | `goryeo` | Goryeo Hanedanı (Kore) | 918-01-01 | 1392-07-17 |  |
| 61 | `hirvatistan-kralligi` | Hırvatistan Krallığı | 925-01-01 | 1102-01-01 |  |
| 62 | `ingiltere` | İngiltere / Büyük Britanya | 927-01-01 | 1945-09-02 |  |
| 63 | `ziyari` | Ziyârîler | 928-01-01 | 1090-01-01 |  |
| 64 | `izlanda-serbest-devleti` | İzlanda Serbest Devleti (Althing dönemi) | 930-01-01 | 1262-01-01 |  |
| 65 | `buveyhi` | Büveyhîler | 932-01-01 | 1062-01-01 |  |
| 66 | `arles-kralligi` | Burgonya (Arles) Krallığı | 933-01-01 | 1032-09-06 |  |
| 67 | `ihsidi` | İhşîdîler | 0935-01-01 | 0969-07-06 | ✖ |
| 68 | `dali-kralligi` | Dali Krallığı (Yunnan) | 937-01-01 | 1253-01-01 |  |
| 69 | `bretanya` | Bretanya Dükalığı | 939-01-01 | 1532-08-13 |  |
| 70 | `musafiri` | Müsâfirîler (Sellârîler, Kengerîler) | 942-01-01 | 1062-01-01 |  |
| 71 | `hamdani-halep` | Hamdânîler (Halep kolu) | 0944-10-29 | 1004-01-01 |  |
| 72 | `sicilya-emirligi` | Sicilya Emirliği (Kelbîler ve ardıl mahallî emirlikler) | 947-01-01 | 1091-01-01 |  |
| 73 | `danimarka` | Danimarka Krallığı (1814'e kadar Danimarka-Norveç) | 950-01-01 | 1945-09-02 |  |
| 74 | `seddadiler-gence` | Şeddâdîler (Gence/Arrân kolu) | 951-01-01 | 1075-01-01 |  |
| 75 | `song` | Song Hanedanı (Çin) | 960-01-01 | 1279-03-19 |  |
| 76 | `kars-vanand-kralligi` | Kars (Vanand) Ermeni Krallığı | 962-01-01 | 1064-01-01 |  |
| 77 | `almanya` | Kutsal Roma / Almanya | 962-02-02 | 1945-06-05 |  |
| 78 | `gazneli` | Gazneliler (Gazneli Devleti) | 963-01-01 | 1186-01-01 |  |
| 79 | `idil-bulgar` | İdil (Volga) Bulgar Hanlığı | 965-01-01 | 1236-01-01 |  |
| 80 | `polonya-erken` | Polonya Krallığı (Birlik Öncesi) | 966-01-01 | 1569-07-01 |  |
| 81 | `mekke-serifligi` | Mekke Şerifliği | 0969-01-01 | 1919-05-08 |  |
| 82 | `medine-emirligi` | Medine Emirliği (Hüseynî emîrler) | 0969-01-01 | 1517-01-01 |  |
| 83 | `ziriler` | Zîrîler (Kuzey Afrika) | 972-01-01 | 1148-01-01 |  |
| 84 | `bati-calukya` | Batı Çalukya (Kalyani Çalukyaları) | 0973-01-01 | 1189-01-01 |  |
| 85 | `magrave-sicilmase` | Mağrâve Emirliği (Sicilmâse) | 976-01-01 | 1053-01-01 |  |
| 86 | `poni` | Po-ni (Poni) Krallığı | 977-01-01 | 1405-01-01 |  |
| 87 | `revvadi` | Revvâdîler | 979-01-01 | 1071-01-01 |  |
| 88 | `tien-le-hanedani` | Erken Lê Hanedanı (Đại Cồ Việt) | 980-01-01 | 1009-01-01 |  |
| 89 | `lori-kralligi` | Taşir-Dzoraget (Lori) Ermeni Krallığı | 982-01-01 | 1101-01-01 |  |
| 90 | `mervani` | Mervânîler (Mervanoğulları) | 983-01-01 | 1085-08-30 |  |
| 91 | `norse-gronland` | Norse Grönland (Vestribygð–Eystribygð) | 0985-01-01 | 1450-01-01 |  |
| 92 | `fransa` | Fransa Krallığı | 987-01-01 | 1792-09-22 |  |
| 93 | `ukayli` | Ukaylîler | 0990-01-01 | 1096-01-01 |  |
| 94 | `annazi` | Annâzîler | 991-01-01 | 1117-01-01 |  |
| 95 | `numeyri` | Nümeyrîler (Nümeyroğulları) | 0991-01-01 | 1083-01-01 |  |
| 96 | `mezyedi` | Mezyedîler | 0997-01-01 | 1163-01-01 |  |

### L4 — Künye t > 1945-09-02 — 54 künye (hiçbiri tamamen dışarıda değil: f > 1945 olan 0)

| # | id | ad | f | t |
|---|---|---|---|---|
| 1 | `urdun-emirligi` | Şarkî Ürdün Emirliği (Abdullah bin Hüseyin) | 1921-02-01 | 1946-05-25 |
| 2 | `sarawak-brooke` | Sarawak (Brooke Hanedanı) | 1841-09-24 | 1946-07-01 |
| 3 | `filipin-commonwealth` | Filipinler Milletler Topluluğu (Commonwealth) | 1935-01-01 | 1946-07-04 |
| 4 | `bulgaristan-kralligi` | Bulgaristan Krallığı (Çarlık) | 1908-10-05 | 1946-09-15 |
| 5 | `ingiliz-hindistani` | İngiliz Hindistanı (Şirket ve Taç Dönemi) | 1757-06-23 | 1947-08-15 |
| 6 | `racput` | Racput Devletleri (Mevar, Mârvâr, Amber, Bikaner) | 1000-01-01 | 1947-08-15 |
| 7 | `meysur-racaligi` | Meysûr Racalığı (Wodeyar Hanedanı, İngiliz himayesinde) | 1799-05-04 | 1947-08-15 |
| 8 | `cammu-kesmir` | Cammû-Keşmir (Dogra Hanedanı) | 1846-03-16 | 1947-10-26 |
| 9 | `cunagadh` | Cunagadh (Junagadh) Nevablığı | 1748-01-01 | 1948-02-20 |
| 10 | `bharatpur-cat` | Bharatpur Krallığı (Jat) | 1733-01-01 | 1948-03-18 |
| 11 | `filistin-mandasi` | İngiliz Filistin Mandası | 1920-07-01 | 1948-05-14 |
| 12 | `gvalyar` | Gvalyar Devleti (Sindiya Hanedanı) | 1731-01-01 | 1948-05-28 |
| 13 | `indor` | İndor Devleti (Holkar Hanedanı) | 1732-07-29 | 1948-05-28 |
| 14 | `haydarabad-nizam` | Haydarabad Nizamlığı (Âsafcâh Hanedanı) | 1724-10-11 | 1948-09-17 |
| 15 | `kolhapur` | Kolhapur Devleti (Şivâcî'nin İkinci Kolu) | 1710-01-01 | 1949-03-01 |
| 16 | `baroda` | Baroda Devleti (Gaikvad Hanedanı) | 1721-01-01 | 1949-05-01 |
| 17 | `travankur` | Travankur Krallığı (Venâd) | 1281-01-01 | 1949-07-01 |
| 18 | `manipur` | Manipûr Krallığı | 1281-01-01 | 1949-10-15 |
| 19 | `hollanda-dogu-hint` | Hollanda Doğu Hint Adaları | 1602-03-20 | 1949-12-27 |
| 20 | `misir-kralligi` | Mısır Krallığı (I. Fuad) | 1922-03-15 | 1953-06-18 |
| 21 | `fransiz-cinhindi` | Fransız Çinhindi (Indochine française) | 1859-02-17 | 1954-07-21 |
| 22 | `bahavelpur` | Bahavelpur Emirliği (Dâvudpotralar) | 1748-01-01 | 1955-10-14 |
| 23 | `ingiliz-sudani` | İngiliz Sudanı (Anglo-Mısır Kondominyumu) | 1899-01-19 | 1956-01-01 |
| 24 | `tunus-beyligi-fransiz` | Tunus Beyliği (Fransız Himayesi Dönemi) | 1881-05-12 | 1956-03-20 |
| 25 | `ingiliz-altin-kiyisi` | İngiliz Altın Kıyısı (Gold Coast Kolonisi) | 1874-07-24 | 1957-03-06 |
| 26 | `ingiliz-malaya` | İngiliz Malaya | 1826-01-01 | 1957-08-31 |
| 27 | `fransiz-ekvator-afrikasi` | Fransız Ekvator Afrikası (AEF) | 1910-01-15 | 1958-01-01 |
| 28 | `irak-kralligi` | Irak Krallığı (Faysal I, İngiliz Mandası) | 1921-08-23 | 1958-07-14 |
| 29 | `fransiz-bati-afrika` | Fransız Batı Afrikası (AOF) | 1895-06-16 | 1959-01-01 |
| 30 | `fransiz-kamerun-mandasi` | Fransız Kamerunu (Fransız Mandası) | 1922-07-20 | 1960-01-01 |
| 31 | `belcika-kongo` | Belçika Kongosu | 1908-11-15 | 1960-06-30 |
| 32 | `ingiliz-nijerya` | İngiliz Nijeryası (Lagos Kolonisi → Nijerya Kolonisi ve Protektorası) | 1861-01-01 | 1960-10-01 |
| 33 | `ingiliz-siyera-leon` | İngiliz Sierra Leone'si (Koloni ve Protektora) | 1808-01-01 | 1961-04-27 |
| 34 | `guney-afrika-birligi` | Güney Afrika Birliği | 1910-05-31 | 1961-05-31 |
| 35 | `ingiliz-tanganika-mandasi` | Tanganika Toprağı (İngiliz Mandası) | 1922-07-20 | 1961-12-09 |
| 36 | `ruanda-urundi-mandasi` | Ruanda-Urundi (Belçika Mandası) | 1922-07-20 | 1962-07-01 |
| 37 | `cezayir-fransiz` | Fransız Cezayir İşgali | 1830-07-05 | 1962-07-05 |
| 38 | `yemen-zeydi` | Yemen Zeydî İmamlığı | 897-01-01 | 1962-09-26 |
| 39 | `ingiliz-kenya-kolonisi` | İngiliz Kenyası (Doğu Afrika Protektorası → Kenya Kolonisi ve Protektorası) | 1895-07-01 | 1963-12-12 |
| 40 | `ingiliz-nyasaland` | Nyasaland Protektorası (İngiliz Orta Afrikası) | 1891-05-14 | 1964-07-06 |
| 41 | `ingiliz-kuzey-rodezya` | Kuzey Rodezya (İngiliz Güney Afrika Şirketi İdaresi → İngiliz Protektorası) | 1890-01-01 | 1964-10-24 |
| 42 | `ingiliz-guyanasi` | İngiliz Guyanası | 1831-01-01 | 1966-05-26 |
| 43 | `ingiliz-becuanaland` | Becuanaland Protektorası | 1885-09-30 | 1966-09-30 |
| 44 | `kesiri-sultanligi` | Kesîrî Sultanlığı (Hadramut iç kesimi) | 1450-01-01 | 1967-11-30 |
| 45 | `kuayti-sultanligi` | Kuaytî Sultanlığı (Şihr-Mükellâ, Hadramut kıyısı) | 1881-01-01 | 1967-11-30 |
| 46 | `portekiz-gine` | Portekiz Ginesi | 1879-01-01 | 1974-09-10 |
| 47 | `portekiz-mozambik` | Portekiz Mozambiği (Portekiz Doğu Afrikası) | 1505-01-01 | 1975-06-25 |
| 48 | `portekiz-angola` | Portekiz Angolası | 1575-01-01 | 1975-11-11 |
| 49 | `hollanda-guyanasi` | Hollanda Guyanası (Surinam) | 1667-01-01 | 1975-11-25 |
| 50 | `ingiliz-guney-rodezya` | Güney Rodezya (İngiliz Güney Afrika Şirketi → Özyönetimli Koloni) | 1890-01-01 | 1980-04-18 |
| 51 | `ingiliz-hondurasi` | İngiliz Hondurası (Belize) | 1862-01-01 | 1981-09-21 |
| 52 | `guneybati-afrika-mandasi` | Güneybatı Afrika (Güney Afrika Mandası) | 1920-12-17 | 1990-03-21 |
| 53 | `sovyet-rusya` | Sovyet Rusya / SSCB | 1917-11-07 | 1991-12-25 |
| 54 | `iran` | İran (Pehlevi Hanedanı → İran İslam Cumhuriyeti) | 1925-12-12 | 2026-08-07 |
