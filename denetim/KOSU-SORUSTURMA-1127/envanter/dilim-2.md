# ENVANTER S2 — arac/uret_petek.py satır 2735–5330 (okunan: 2735–5334)

Not: Koşu 40 bayrak kümesi esas alındı. Listede olmayan MOTOR_* ⇒ koddaki varsayılan. Aşağıdaki satır numaraları dosyanındır. Dilim dışı tanımlara (ör. `_yr_kes` 2707, `YAKA_KILIDI` 517, `MOTOR_YURUYUS` 1236, `_YR_BANT_UZAK` 2171-2490, `_BTB` 2172, `_kvsahip0/N` 2128/2153, `KV_MIN_KM2` 1330) yalnız Grep ile bakıldı.
Önemli ortak not: `MOTOR_ONBELLEK_KAPALI` verilmemiş ⇒ `_ONB` önbelleği (satır 658-662) AÇIK. `MOTOR_UFUK_BANT=40` ve `MOTOR_YURUYUS_SAAT=40` ⇒ `_YR_BANT_UZAK = {40.0: taban (_YR_UZAK)}` (2494-2496) ⇒ `_BANT_HAM` BOŞ DEĞİL (tek bant, bütçe=taban).

---

## 1. Voronoi petekleri (ham hücreler) — 2735–2749
- **AMAÇ:** Her yerleşime çıplak Voronoi hücresi (BOLGE zarfında) vermek; sonraki bütün aşamaların "ham petek" tabanı (`PETEK`).
- **YÖNTEM:** `voronoi_diagram(MultiPoint(noktalar), envelope=BOLGE)`, hücre ↔ nokta `h.contains(p)` ile eşlenir (O(N·H) çift döngü), eşleşmeyen için en yakın hücre ("yedek eşleşme").
- **AYAR:** HER ZAMAN.
- **BAĞ:** Çıktı `PETEK`; yürüyüş bloğu (2) bunu ezer; ham hücre oranı için "yedinci denetim" (31) ve `_yaka_suz` (16) okur.
- **ŞÜPHE:** İç içe `for h in hucreler: for i,p in enumerate(noktalar)` O(N²) (hız); yorumsuz. Başka tuhaflık yok.

## 2. YÜRÜYÜŞ: petekler ızgaradan (Dijkstra sahibi) — 2750–2818
- **AMAÇ:** Voronoi yerine Dijkstra ızgara sahipliğiyle (`_YR_SAHIP`, `_YR_KARAR`; başka dilimde üretilir) petek kurmak; "karar dışında Voronoi".
- **YÖNTEM:** Voronoi hücrelerini merkez kuralıyla ızgaraya rasterize (`_yr_V`), sınır üstü boşlukları 3 tur maximum_filter ile doldurur; `_yr_G` = kararlı Dijkstra hücresi yoksa Voronoi. `_rfe.shapes` ile parçalar → "DÜĞÜMLEME ŞART" (T-kavşağı sorunu, sınav 17 Eylül): tüm halkalar `unary_union`→`polygonize`, STRtree ile yüz↔parça eşleşmesi (biri tutmazsa `SystemExit`), sahip başına `coverage_union_all`, sonra `coverage_simplify(YURUYUS_SADE=0.05°)`; ölçüm baskıları (geçersiz kenar, tohum dışarıda, Voronoi'den %25+ ayrışan).
- **AYAR:** `MOTOR_YURUYUS=1` ⇒ CANLI.
- **BAĞ:** `PETEK`'i tamamen yeniden yazar; boş (hücresiz) tohumlar boş Polygon olur ⇒ 16/18'deki yaka/yetim mantığı ve "yedinci denetim" bunları görür.
- **ŞÜPHE:** (a) `_yr_V`/Voronoi hücresi artık yalnız "karar dışında" için — kalan hücresiz tohumlar "mini-Voronoi böler" diye başka yerde (15-17) tekrar çözülüyor (ikinci mekanizma). (b) Çoğu çıktı yalnız print: tohum dışarıda kalan, %25 ayrışan sayılar kararı etkilemez (ölçüm). (c) İki `SystemExit` ölümcül.

## 3. A1 YARIÇAP TAVANI (TAVAN_KM) — 2820–2921
- **AMAÇ:** Komşusu bulunmayan hücrenin sonsuz büyümesini önlemek. "EMRE, 8 Ağustos 2026: … uçsuz bucaksız toprağa … ancak X kilometre kadar hâkim olabilir." Kapsamlı karar tarihçesi (düşürme → geri alma → Emre 2 Eylül "HEPSİ 200 KM").
- **YÖNTEM:** `TAVAN_KM = {1:200,2:200,3:200,4:200,0:200}` (kademeye göre ayrım bilerek kaldırıldı); `_tavan_daire(p, r_km, lat)` enlem düzeltmeli elips (buffer + `_scale`). `_TV_BAGLI`, `_tv_once/_tv_sonra` burada ilklenir.
- **AYAR:** Sabit; env yok. Yürüyüş açıkken doğrudan kesim `_yr_kes`'e (dilim dışı, 40 saat bütçe) geçti ama `TAVAN_DAIRE` hâlâ `_yr_kes` içinde "ızgara dışı payda" için okunuyor (2709/2725) ⇒ dolaylı CANLI.
- **BAĞ:** A1b (4) `TAVAN_DAIRE`'yi üretir; kıyı kesimi (20), ada kuralı (22), `_TV_AD` (31) tüketir.
- **ŞÜPHE:** (a) Yorumda "DENEY — Emre 'bir görelim' dedi, 'böyle kalsın' demedi"; hâlâ geçici sayılır (`denetim/ONGORU-TAVAN-200.md` tablosu doldurulmuş mu — anlaşılmadı). (b) Yorum "`k0` 280'DE KALIYOR — GEÇİCİ" artık eski (hepsi 200). (c) Çöl tavanı (26) ve yürüyüş bütçesi (40 saat) ile üç tavan üst üste: A1 elips, yürüyüş bütçesi, çöl 300 km — aynı sorunu (uzak toprağı kesmek) üç ayrı mekanizma çözüyor. (d) `_TV_BAGLI`/`_tv_once` 2914 ve 4206'da İKİ KEZ ilkleniyor (ilki artık işlevsiz).

## 4. A1b YÖNE DUYARLI, ALAN KORUYAN TAVAN (MOTOR TAVAN-YÖN) — 2923–3162
- **AMAÇ:** "EMRE, beş ekran görüntüsüyle: 'Pergelle çizilmiş gibi yuvarlak alanlar boyamış…'" Tavan şekil değiştirir, boyanan alan sabit.
- **YÖNTEM:** `_TV_KOMSULAR` (Voronoi komşuluğu, `PETEK[i].intersection(PETEK[k]).length>1e-9`, STRtree); `_tv_ham_olcu(i)` 16 sektörde komşu mesafesi/2, boş sektör açısal enterpolasyon, ±1,75× medyan sınırı; `_tv_cokgen_kur` 128 köşeli çokgen; `_tavan_cokgen(i)`: daire hücreyi kapsıyorsa/tavan bağlamıyorsa/şekil yoksa dairenin kendisi; aksi halde λ ölçeği 24 adım bisection ile `alan(hücre∩çokgen)=alan(hücre∩daire)` (hücre∩KARA üzerinde); %1'e inemezse daire. Nöbetçi: `_TV_SAPMA` medyan/azami.
- **AYAR:** Sabitler `_TV_ANIZ_KAT=1.75, _TV_SEKTOR=16, _TV_KOSE=128, _TV_BISEC=24`; env yok ⇒ HER ZAMAN çalışır (TAVAN_DAIRE listesi 3142'de kurulur). Çıktısı yürüyüş açıkken yalnız `_yr_kes` içi payda olarak okunur.
- **BAĞ:** `TAVAN_DAIRE` ⇒ 3, 20, 22. `KARA` ile kesişim burada pahalı (yorumda ölçüm 14 sn/65,8 sn).
- **ŞÜPHE:** (a) Yürüyüş AÇIKKEN doğrudan kesimde kullanılmıyor (4253 `_yr_kes if MOTOR_YURUYUS else TAVAN_DAIRE`) — tüm 2362+ petek için bisection hâlâ koşuyor; maliyet yalnız `_yr_kes`'in dışarı paydası için ⇒ büyük olasılıkla büyük ölçüde boşa iş, ama `_yr_kes` ayrıntısı dilim dışı: KESİN DEĞİL. (b) Yorumlarda tarihi satır numaraları (:605, :1549) bayat. (c) Yorum "ÇÖL TAVANI (:1549) BUNU YAPMIYOR, YAPAMAZ: COL_TAVAN_KM = 300 iken k0=280" artık yanlış (A1 = 200 hepsi; sonuç aynı yönde doğru ama sayılar eski). (d) Kendi içinde "yama üstüne yama": ① izotrop → ② sadece komşu yönü → ③ alan koruyan; ilk iki hâl yorumda reddedildi, kodda kalmadı (temiz).

## 5. "Tavan neden burada değil" yorumu — 3164–3184
- **AMAÇ:** 9 Ağustos 2026 ölçümü: tavan Voronoi'nin hemen ardında deniz de kesiyordu (öngörü ~300 petek/%23, ölçüm 513/%40, bozuk kenar 58→75) ⇒ tavan kıyı kesimiyle aynı adıma (20) taşındı.
- **AYAR/YÖNTEM:** Kod yok, yalnız gerekçe.
- **ŞÜPHE:** Yok (belge).

## 6. Petek sınırlarını doğal hatlara yaslama (dogal_hatta_yasla, chaikin_acik, sikla, KORUMA_PAYI) — 3186–3265
- **AMAÇ:** Sınırı nehre/dağ sırtına çekmek; "TOPOLOJİ KURALI (Oturum 8)": yumuşatma ortak kenar ağı üzerinde bir kez. KORUMA_PAYI: hatalar 7.docx madde 2-3 (Estergon 8 km², Solnok 0 km² sıfır alanlı petek) — yaslama bir sınırı yerleşimin üstüne çekemez.
- **YÖNTEM:** Her köşe için `NEHIR_HAT`/`SIRT_HAT` mesafesi; nehir ≤0,30° (≈33 km) ve nehir sırttan yakınsa nehre, yoksa sırt <0,35°'ye `nearest_points`. Hedef bir yerleşime `KORUMA_PAYI=0.06°`'dan yakınsa ve onu yaklaştırıyorsa yaslama iptal (`_YASLAMA_IPTAL`). `sikla` 0,22° aralık; `chaikin_acik` 2 tur.
- **AYAR:** HER ZAMAN (env yok).
- **BAĞ:** 15'te kenar ağına uygulanır; `_YASLAMA_IPTAL` 31'de sayılır. 16 (yaka kilidi) bu yaslamanın yan etkisini düzeltir.
- **ŞÜPHE:** (a) Yaslama sabitleri (0.30, 0.35, 0.06) sınırsız yorum dışında gerekçesiz sabit. (b) Yaka kilidi (16) ve yetim yüz ham-örtüşme (18) bu yaslamanın sonradan doğan kusurlarını yamıyor ⇒ "yama üstüne yama" zinciri: KORUMA_PAYI → mini-Voronoi → yetim ham-örtüşme → yaka kilidi → ENKLAV kısıtı.

## 7. Gün sayacı ve epok sabitleri (gn, gsirala, EPOK, KESIT_SON) — 3267–3299
- **AMAÇ:** Tarih kıyası tam sayı günle (MÖ'de dizgi kıyası ters, 3 haneli yıl hatası). "ZAMAN-Z1-1008" başlangıç/bitiş `girdi.UFUK` tek otoriteden; `KESIT_SON` = ufuk sonu + 3 gün.
- **YÖNTEM:** `gn()` önbellekli (`_GN_ONB` sözlüğü, sınırsız); `gsirala`; `_MO_SINIR_N = gn(MO_SINIR)`.
- **AYAR:** `MOTOR_MO_SINIR=9999-12-31` ⇒ MÖ sınırı pratikte hiç kullanılmıyor (her gün "MÖ"); dilimde yalnız `_MO_SINIR_N` hesaplanıyor. `GUN_SAYACI=True` kodda sabit beyan (arac/gun.py `motor_sayacli_mi` kapısı okur).
- **BAĞ:** 30 (kırılma tarihleri), varlık epokları.
- **ŞÜPHE:** `_GN_ONB` sınırsız ama anahtar sayısı sınırlı (tarih dizgileri) — düşük risk. "İşaret ... TEK beyandır" gibi bir bayrak koda gömülü (GUN_SAYACI = True): kapı denetimine bağlı, ölçülemedi.

## 8. SADE_TOL ve kapat() (morfolojik kapama + PAKET-0083-B engeli) — 3301–3349
- **AMAÇ:** Aynı çekirdek beyliğin kopuk görünen komşu petekleri arasındaki 33 km'den dar şeridi kapatmak (İnegöl 1299 vakası); `engel` (PAKET-0083-B, H-0008/H-0009, 5 Ekim 2026): başka devlete ait yerleşimi içeren bileşeni EKLEME (Harmankaya, Bursa, İznik %97-100 yutulma).
- **YÖNTEM:** `buffer(+r, mitre)` → `buffer(-r)` → `temiz`; eklenen bileşenlerde `_TUM_AGAC` ile `engel` kümesindeki nokta içerenleri `difference`; sonuç `unary_union([k,g])`. `SADE_TOL=0.012°` (coverage_simplify).
- **AYAR:** `engel` çağırana bağlı (dilim dışı çağrı); `engel=None` ⇒ eski. Bu dilimde çağrı yalnız B3 (13) `kapat(gs, B3_KAPAMA_DER)` (engelsiz).
- **BAĞ:** B3 (13) ve gövde aşaması (dilim dışı); `_B1_SAYAC["kapat_engel*"]`.
- **ŞÜPHE:** B1 (11) "yabancı yerleşim varsa doldurma" yasağıyla aynı kuralın İKİNCİ uygulaması (kapama için ayrı `engel`); iki ayrı kod yolu aynı fikri taşıyor (B1 halkaları · kapat engeli). Docstring "geçici deniz taşkını KARA ile kesişimle temizlenir" — kesişim çağırana bırakılmış.

## 9. EZBER TAVANI: `_TavanliEzber` (MOTOR-SINIR-KISIT-BELLEK-1016) ve `_kapat_engel` — 3352–3437
- **AMAÇ:** KOŞU 26 ~4,8 GB'ta "sanal bellek çok düşük" ile öldü; gün başına dört ezberi LRU ile sınırlamak.
- **YÖNTEM:** `_TavanliEzber` = kilitli OrderedDict + tavan (get, `__setitem__`, contains, len, values); `_tavanli(tavan, ad)` global `_EZBER_LISTE`'ye kaydeder. Bu dilimde yalnız `_SAHIPLI_EZBER` (tavan `EZBER_TAVAN`) kurulur; `_kapat_engel(aktif, a)` = o gün yazılı sahibi olan ama `aktif`te olmayan yerleşimler (frozenset, `_sahipli(y,a)` dilim dışı).
- **AYAR:** `MOTOR_EZBER_TAVAN` verilmemiş ⇒ varsayılan 128 ⇒ CANLI sınırlı; `MOTOR_EZBER_TAVAN_PUAN` varsayılan 0 (= sınırsız) ⇒ `_PUAN_ONBELLEK` sınırsız (başka dilimde).
- **BAĞ:** Diğer üç ezber (`_DEVIR_EZBER`, `_SAHIP_EZBER`, `_SK_SAHIP_EZBER`) dilim dışı; "İŞLETİM değişkenidir, tuza girmez".
- **ŞÜPHE:** (a) Tavan 128 gün: günler sıralı gezilirse sorun yok, ama FAZ 1 iş parçacıkları farklı günlere rastlayınca LRU "çarpışması" isabet oranını düşürür (süre riski; ölçüm yorumda yok). (b) Alt ezberler "SINIRSIZ kalır" (`_kusatilmis`, `_dolgu_kumesi`) açıkça beyan. (c) `_VARLIK_ONBELLEK`, `_VARLIK_DEVIR`, `_VARLIK_PAY` (5327-5332) düz `{}` — sınırsız.

## 10. poligonal() — 3439–3454
- **AMAÇ:** intersection/difference çıktısındaki çizgi artıklarını süzmek. M-4535 (18 Eylül 2026): YÜRÜYÜŞ açıkken `g.intersection(KARA)` MultiLineString → `_ham_km2` "no attribute exterior" çöküşü.
- **YÖNTEM:** GeometryCollection/geçersizse `temiz`; yürüyüş açıkken çizgi/nokta tipi ⇒ boş Polygon.
- **AYAR:** Son dal `MOTOR_YURUYUS=1` ⇒ CANLI.
- **ŞÜPHE:** Yorumda "bayrak kapalıyken davranış bit-bit aynı kalsın" ⇒ bayrağa bağlı iki farklı davranış; saf Line girdisi yürüyüş kapalıyken `g` olarak geçiyor (bilinen kusur korunuyor). `_poligonlar` (3514) aynı işi ikinci kez yapıyor (Polygon/Multi/GC'den poligon süzer) ⇒ iki ayrı süzgeç.

## 11. KASITLI BOŞLUK MUAFİYETİ + B1 `delikleri_doldur` (+ `_KB_*`, `_TUM_AGAC`, `_B1_SAYAC`, `_ONB_*`, `_poligonlar`) — 3456–3591
- **AMAÇ:** Kuşatılmış boşluğu (dağ bloğu, ova) hâkimiyet altında saymak (`delikleri_doldur`), ama (i) `kasitli_bosluk` bayraklı yerleşimi içeren halka dolmaz (MOTOR ENKLAV, 11 Ağustos 2026: nöbetçi şimdi kondu, "kusur doğduktan sonra değil"); (ii) B1 ikinci yasağı (MOTOR ÜÇ KALEM, 27 Ağustos 2026): halkanın içinde BAŞKA DEVLETİN yerleşimi varsa doldurma ("Şüphede DOLDURMA").
- **YÖNTEM:** `_KB_IX/_KB_NOKTA/_KB_AGAC` bayraklı noktalar; her halka için `contains` ile içerdeki bayraklı nokta ⇒ `tut`; `sahip_ix` verilmişse `_TUM_AGAC` (tüm yerleşimler tek STRtree) ile içerdeki `sahip_ix` dışı nokta ⇒ `tut`; sonuç `Polygon(exterior, tut)`. Sayaçlar `_KB_MUAF`, `_B1_SAYAC`. `_ONB_KIM/_ONB_KB/_ONB_BOS` = gövde önbellek anahtarının "çevre" parçası (konum, kasıtlı_boşluk, bos). UFUK-BANT-1117 madde 2: shapely 2.x `p.interiors` her erişimde yeni nesne ⇒ eski `id(h)` karşılaştırması ölü kodmuş; indeksle düzeltildi.
- **AYAR:** `muaf=True` varsayılan; `sahip_ix` çağırana bağlı (gövde aşaması, dilim dışı) ⇒ üretimde CANLI (yorum: `muaf=False` yalnız C13 sınavı için duruyor).
- **BAĞ:** `_yasakli_mi` (12) benzer sınav; `kapat` engeli (8); B2/B3 yasakları. `bos` alanı `_ONB_BOS` ve `_yasakli_mi`'de de okunuyor.
- **ŞÜPHE:** (a) `muaf=False` parametresi yalnız test için duruyor (ölü üretim yolu). (b) "55 kayıt fiilen kasıtlı ama BAYRAKSIZ, dördü (Darfur…) delik olarak doluyor" — beyanlı bilinen kusur, veri borcu. (c) `kasitli_bosluk` ile `bos` iki ayrı bayrak (`_yasakli_mi` ikisini "kb" sayıyor; `delikleri_doldur` yalnız `kasitli_bosluk` bakıyor) — tutarsız. (d) `_TUM_AGAC` bir kez kuruluyor; ama `_ONB_KIM` yalnız gövde önbellek anahtarı için. (e) `_poligonlar` kendi içinde 10'daki `poligonal` ile çakışan işlev.

## 12. B2 ENKLAV BİRLEŞTİRME + ortak yasaklar (`_yasakli_mi`, `_bant_baskasinin_topragini_kesiyor_mu`, `_km_derece`) — 3593–3828
- **AMAÇ:** Emre: *"Benekli görünmesin. Enklavların ana toprak kitlesi ile arasındaki koridor kapanacak şekilde…"* Karasal enklavı ana kütleye iç bükey parabolik köprüyle bağlamak (0038/H-0003, 29 Ağustos 2026: "ne dikdörtgen çubuk, ne üçgen; kenarlardan bastırılmış kavisli").
- **YÖNTEM:** Gövde parçaları alana göre sıralanır; ana ≠ diğerleri için `nearest_points`, mesafe `B2_ENKLAV_KM=400` km üstü ⇒ atla; hat `_KARA_HAZIR.covers` değilse (deniz aşırı) atla; hat boyunca 10 km adımla `_TUM_AGAC.nearest` ⇒ başka devlete düşüyorsa atla (Emre ③. kural: "aradaki renklendirilmiş bölge EZİLEREK birleştirilemez"); köprü 24 örnekli yamuk (anakara ucu 2×enklav genişliği, tavan 3°, `w_e` taban 25 km) × (1−`B2_KAVIS`·sin πt), `B2_KAVIS=0.35`; bant `difference(g)` içinde `_yasakli_mi` (kb/yabancı yerleşim) ise atla; `unary_union ∩ KARA`.
- **AYAR:** `B23_ACIK = MOTOR_B23_KAPALI != "1"` ⇒ verilmemiş ⇒ CANLI. `B2_ENKLAV_KM` kodda 400 (Emre 18 Kasım 2026 karar 8; eskiden 250, yorum "800 → 250" bayat). `_BTB[1] > B2_ENKLAV_KM` ise uyarı basar (BTB kapısıyla bağ).
- **BAĞ:** `gosterim_duzelt` (14) çağırır; `_B23_SAYAC`, `B2_TEMAS` (0.02) "köprü hangi gövdeye yaslandı" ölçümü (dilim dışı kullanım); BTB muafiyeti ("iki yanda aynı devletin yerleşimi varsa eksklav birleştirme birleşsin").
- **ŞÜPHE:** (a) Docstring "≤800 km" ama sabit 400 (bayat). (b) Aynı işi "kıstak köprü" (`MOTOR_KISTAK_KOPRU=1`, dilim dışı) mekanizmasıyla çakışabilir — B2'nin kendisi köprü üretiyor; ikisi ayrı kural mı aynı fikir mi, bu dilimden anlaşılmadı. (c) `_KARA_HAZIR` tamponsuz ⇒ kıyıdan geçen hat "kapsanmıyor" ⇒ enklav birleşmez: yön bilerek muhafazakâr (beyanlı). (d) Köprü ucu `en_ana` (3° tavan) ≈ 300+ km geniş olabilir; yorum "üçgen olmasın" diyor ama tavan geniş. (e) Tarihi yorum içinde "ESKİ HÂLİ ÇUBUK ÜRETİYORDU" ve KAVIS tavanı gerekçesi uzun — kalıntı yorum ağırlığı. (f) `_B23_SAYAC` anahtarları dilim içinde yalnız artırılıyor.

## 13. B3 KORİDOR KIRPMA (`_b3_koridor_kirp`, `_B3_KALAN_IHLAL`) — 3831–3926
- **AMAÇ:** Emre: *"koridorun BAŞI girinti yapacak, koridorun DERİNLİĞİ GENİŞLİĞİNİ GEÇMEYECEK… DİP bölümlerini AĞIZA DOĞRU kapatarak."*
- **YÖNTEM:** `g.simplify(B3_SADELIK=0.02)` → `kapat(gs, B3_KAPAMA_DER=0.45°)`; `aday = k − g`; dış kutu − k = `disari`; her aday bileşen için `agiz` = c ∩ disari_kenar(0.01° tampon, döngü dışı); derinlik = `hausdorff_distance(c, agiz)`, genişlik `w_der = 2·alan/çevre`; `d_der ≤ w_der` sığ ⇒ dokunma; `_yasakli_mi` "kb"/"yerlesim" ise doldurma (kalan ihlal listesine yazılır: ad, km², derinlik, genişlik, sebep, ağız genişliği, tanımlar ayrışıyor mu); aksi halde `c − agiz.buffer(w_der)` doldurulur; `∩ KARA`.
- **AYAR:** `B23_ACIK` ⇒ CANLI.
- **BAĞ:** `kapat` (8), `_yasakli_mi` (12), `KARA`.
- **ŞÜPHE:** (a) "İlk yazımım YANLIŞTI" (`çevre/2 − w` kusuru) yorumda kalmış; ölçü tanımı "ortalama genişlik" ile Emre'nin "ağız genişliği" kuralı AYRIŞABİLİYOR — kodda `_ayrisiyor` bayrağıyla ölçülüyor ama hangi tanımın esas olduğu kararlaştırılmamış (BULGU-KORIDOR-AGZI-0911). (b) `_B3_KALAN_IHLAL` yalnız ölçüm listesi (KITA 7), üretimi etkilemez. (c) Hausdorff hata durumunda "sığ" sayılıp atlanıyor (sessiz).

## 14. `gosterim_duzelt` — 3929–3940
- **AMAÇ:** B2 + B3'ü sırayla çağırmak; "B1 `delikleri_doldur` içinde zaten var".
- **YÖNTEM:** `B23_ACIK` kapalıysa dön; try/except ile çağırır, hata olursa `UYARI gosterim_duzelt atlandi` basıp devam ("SESSİZ ÖLÜM YOK … bir SÜS").
- **AYAR:** CANLI.
- **ŞÜPHE:** Hata yutulur: B2/B3 yarıda ölürse kısmi uygulanmış `g` (B2 sonrası) döner — try içinde `g` iki adımda atanıyor, B3 patlarsa g B2 sonucunda kalır (tutarlı); ama patlama yalnız uyarı. Çağıran dilim dışı.

## 15. Örtü boru hattı: ortak kenar ağı + yaslama + polygonize (`_kutuda`, `_cizgiler`, `_yuzler_kur`) — 3942–4008
- **AMAÇ:** Petekleri tek örtü olarak işlemek: kenar ağı çıkar → yasla+Chaikin → polygonize → coverage_union_all → coverage_simplify → en son kıyı kesimi.
- **YÖNTEM:** Tüm petek dış halkaları `linemerge(unary_union)` ile tek kenar ağı; BOLGE çerçevesi (L kutusu çentik kenarları dahil `_kutuda`) düz bırakılır; diğer kenarlar `sikla` → `dogal_hatta_yasla` → uçlar sabit → `chaikin_acik(…,2)`; `_yuzler_kur` = `polygonize(unary_union(hatlar))`. ULP kuralı notu (yüz yüz unary_union yasak).
- **AYAR:** HER ZAMAN.
- **BAĞ:** 6, 16-19.
- **ŞÜPHE:** `_kutuda` L-kutu çentik koordinatları sabit kodlu (−12, 60) — BOLGE değişirse sessizce yanlış. Yürüyüşte `PETEK` zaten ızgaradan geldiği için bu 'doğal hatta yasla' kenar-ağı yeniden Voronoi mantığıyla çalışıyor ve ızgara kararını yumuşatıyor ama aynı zamanda bozuyor (yaka kilidi bu yüzden doğdu).

## 16. YAKA KİLİDİ (MOTOR-YAKA-KILIDI-1017) — 4009–4092
- **AMAÇ:** Emre notu #7: 1284'te Tuna'nın güneyinde ~700 km² Macar (Zimnicea) üçgeni; nokta yaslamanın öte yakasına düştü ⇒ "iki noktalı" yüz ⇒ düz orta dikme. ÇARE: nokta bir yüzü ancak KENDİ HAM HÜCRESİ yüzün kayda değer sahibiyse "kendi yüzü" sayar.
- **YÖNTEM:** `_yaka_suz(f, ic)`: pay_i = alan(PETEK[i]∩f)/alan(f); yüzle örtüşen ham hücreler (`_YAKA_AGAC`, STRtree(PETEK)) içinde en büyük pay `en`; pay < `YAKA_ORAN`(0.25)·`en` olan nokta düşer (yüz yetim kalırsa 18'deki ham-örtüşme kuralı sahibi bulur). Ölçülemezse eski davranış. `_YAKA_DUSEN` raporu (ilk 15).
- **AYAR:** `MOTOR_YAKA_KILIDI=1` ⇒ CANLI. (`YAKA_ORAN=0.25` kodda sabit.)
- **BAĞ:** mini-Voronoi bölme (17) ve atama (18) girdisini süzer; `PETEK` ham hücreleri (yürüyüşte ızgara hücreleri).
- **ŞÜPHE:** (a) "Bedeli beyanlı: düşen nokta komşu rengin ~0,1 km içinde görünebilir" ⇒ bilinen ödün. (b) "yaka kilidi" ve 18'deki "ham örtüşme" ve 6'daki KORUMA_PAYI aynı kusur ailesine (yaslama sonrası yüz sahipliği) üç ayrı yama. (c) `_YAKA_DUSEN` ilk geçişte (mini-Voronoi) dolar, `.clear()` ile son atamaya sıfırlanır — iki kez `_yaka_suz` çağrısı (4069 ve 4081) = çift hesap. (d) Dilim içinde "MOTOR_TOHUM_YAKA" (1905, dilim dışı) adlı AYRI bir yaka mekanizması var: ikisi aynı ailede; ayrım dilimden okunamadı (anlaşılmadı).

## 17. Çok noktalı yüzlerde mini-Voronoi bölme — 4064–4075
- **AMAÇ:** Yaslama bir kenarı noktaların üzerinden geçirince bir yüz birden çok nokta içerir; yüzü mini-Voronoi ile bölmek.
- **YÖNTEM:** `ic` > 1 ise `voronoi_diagram(noktalar[ic], envelope=f)`; bölme çizgileri `_ek_hat`; tüm hatlarla tekrar polygonize (ortak düğümleme).
- **AYAR:** HER ZAMAN (yaka kilidiyle birlikte süzülmüş `ic`).
- **ŞÜPHE:** Aynı fikir (iki nokta arası orta dikme) zaten 2'deki "hücresiz tohum örtüde mini-Voronoi böler" mesajında anılıyor; iki yerde aynı mekanizma. Sonrasında yine çoklu kalırsa "en yakını seçildi" (4085-4087) üçüncü bir geri dönüş.

## 18. Yetim yüz ataması: "ham hücre örtüşmesi" + ENKLAV kısıtı (MOTOR 3, 3 Ağustos 2026) — 4077–4164
- **AMAÇ:** Nokta içermeyen yüz: ESKİ ölçüt "en uzun ortak kenar" Slovak toprağını Krakov'a (Eperjes 23.357 km²) ve Reggio Calabria payını Sirakuza'ya yazıyordu; YENİ ölçüt: yüzle en çok ham-hücre örtüşmesi. ENKLAV kısıtı: Presidioların (`s:` içinde `enklav:`) hinterlandı yoktur — yetim yüz emmez.
- **YÖNTEM:** `_kume[ic[0]]` nokta içeren yüzler; yetimler için `_PETEK_AGACI` (STRtree(PETEK)) sorgusu, `_ENKLAV` indeksi atlanır, en büyük `intersection.area` sahip; hiç örtüşme yoksa en yakın nokta. Sonra `PETEK_TAM` = `coverage_union_all(fs)`. `_ENKLAV` boşsa kalın bir uyarı bloğu basar.
- **AYAR:** HER ZAMAN; `_ENKLAV` veriden (`enklav:`).
- **BAĞ:** 16 yaka kilidi ile ona beslenen yetimler; 31 (enklav muafiyeti) ve 22/25'te `_ENKLAV` kullanımı.
- **ŞÜPHE:** (a) "Taban geometri ZAMANSIZ ⇒ 'bir dönemde bile enklavsa hiç ememez'" — dönem bazlı değil; bedeli ölçülmüş (1.609 km², Oran). (b) 4153-4154 yedek yolda enklav olmayan en yakın nokta — hinterland bilgisi yok. (c) Yürüyüşte `PETEK` hücresiz tohumlar boş olabilir; `_PETEK_AGACI.query` boş hücreleri atlıyor mu — kontrol edilmemiş (anlaşılmadı).

## 19. Örtü sadeleştirme (coverage_simplify) + bozuk kenar ölçümü (`_bozuk_liste`, `_bozuk_dok`) — 4166–4196
- **AMAÇ:** Ortak kenar ağında topolojiyi koruyarak `SADE_TOL=0.012°` sadeleştirme; `set_precision` KULLANILMIYOR (üçlü kavşakta çökme: Maraş/Adana/Antakya). Notta: güvence yalnız bu yol için (YABANCI HAVUZ `DEV_HALKA` için `don_kose_kur` 1e-6, BULGU-GEOMETRI-0904 H-0001).
- **YÖNTEM:** Önce/sonra `coverage_invalid_edges` sayımı; "✓/✗" baskısı.
- **AYAR:** HER ZAMAN.
- **ŞÜPHE:** Yürüyüş açıkken 2'de zaten `coverage_simplify(YURUYUS_SADE=0.05)` yapılmıştı ⇒ ÇİFT sadeleştirme (0.05° sonra 0.012°; 0.012 daha ince olduğundan ikinci pratikte etkisiz — ama etkileşim ölçülmemiş, anlaşılmadı). Nöbetçi yalnız basıyor; durdurmuyor.

## 20. Kıyı kesimi + A1/yürüyüş bütçe kesimi + KIYI-KESIM-ONAR-1014 + bant ham kesimleri — 4198–4277
- **AMAÇ:** Deniz sınırı doğrudan KARA maskesinden; tavan (A1) burada, kıyı kesimiyle aynı adımda uygulanır (sonrasında yumuşatma yok ⇒ topoloji bozulmaz). KOŞU 24 bu satırda 9. dakikada düştü (GEOSException "side location conflict" Ancona/San Marino) ⇒ onarım.
- **YÖNTEM:** Her `PETEK_TAM[i]` için `g.intersection(KARA)`; GEOSException ⇒ `temiz(g)` ile onar + yeniden kes (`_KIYI_ONARILAN`); bant varsa her bütçe için `poligonal(_yr_kes(kara_kesik, i, bant=_b))` (`_BANT_HAM`), hata `_BANT_KES_HATA` sayar; taban: `_yr_kes(kara_kesik, i)` (yürüyüş) ya da `∩ TAVAN_DAIRE[i]`; alan kaybı >%2 ise `_TV_BAGLI.add(i)`; tavan hücreyi TAMAMEN yerse dokunma. `PETEK_D` çıktısı.
- **AYAR:** `MOTOR_YURUYUS=1` ⇒ taban kesimi `_yr_kes` (40 saat); `MOTOR_UFUK_BANT=40` ⇒ `_BANT_HAM={40.0:…}` ⇒ bant kesimi de koşar; ama bant 40 = taban bütçesi.
- **BAĞ:** 3/4 (`TAVAN_DAIRE` yalnız payda), 22, 26, `_BANT_AKTIF` (bant devlet birleştirme; dilim dışı).
- **ŞÜPHE:** (a) `MOTOR_UFUK_BANT=40` = `MOTOR_YURUYUS_SAAT=40` ⇒ bant, tabanın aynısıdır: kıyı kesimi, ada kuralı (22) ve çöl tavanı (26) ikinci kez, aynı sonuç için koşuyor (iş çift) — 4494-4496'da "taban: yeniden hesaplama yok" ama `_yr_kes(...,bant=40)` yine çağrılıyor; çıktıyı (`_BANT_AKTIF` vb.) dilim dışı belirler: ANLAŞILMADI, çift iş olabilir. (b) Üç yoldan bant toplama (sıralı/iş parçacığı/süreç işçisi) ve "sayım denetimi" dilim dışı; yorum "birini atlamak bandı SESSİZCE eksik bırakırdı". (c) `except Exception: _BANT_HAM[_b][i]=None` yutma sayılıyor ama durdurmuyor. (d) Kesim `kes.is_empty` ise `kara_kesik` kesilmez (tavan hücreyi yerse eski hâl kalır) — "ana parça" varsayımı; sessiz ödün.

## 21. Tavan kovası (`_TV_KOMSU`) + KORUNUM SINAVI ① — 4279–4311
- **AMAÇ:** Koşu 5 öngörü ①'i çürüttü (kıyı kovası 60-66 beklenirken 162, tavan kovası 220): uyuşmazlık tavanın kestiği hücrenin KOMŞUSUNA da yazılır ⇒ kasıtlı kova = bağlananlar + komşuları. KORUNUM SINAVI (9 Ağustos 2026, koşu 4b "Osmanlı 7/9 kesitte daraldı, yabancı +%15"): "bir TAVAN alan ARTIRAMAZ".
- **YÖNTEM:** `_tv_agac`, bağlanan hücrelerin kesişen komşularını `_TV_KOMSU`'ya ekler; `_TV_TOPLAM_SONRA` = tavan sonrası toplam alan; `_TV_BEKLENEN_KAYIP`.
- **AYAR:** HER ZAMAN.
- **BAĞ:** 22 (②a), 25 (nöbetçi), 31.
- **ŞÜPHE:** "Bedeli aynı ve saklanmıyor: komşuda doğan GERÇEK kıyı kusuru da bu kovaya düşer" ⇒ nöbetçinin kör noktası, beyanlı. Sayı yalnız basılıyor.

## 22. ADA KURALI (+ bantlara ada kuralı, korunum ②a) — 4313–4432
- **AMAÇ:** Petek KENDİ kara parçasının dışına taşamaz (Midilli→Ayvalık, Marmara Adası→Kapıdağ, İskiathos→Eğriboz). 9 Ağustos 2026: ada kuralı boşta kalan payı en yakın yerleşime verirken A1 tavanının boşalttığı çölü de "boşta kalmış" sanıyordu — kesilenin %99,1'ini geri veriyordu ⇒ pay yalnız alıcının tavan dairesi içinde verilir.
- **YÖNTEM:** `KARA`'nın her bileşeni (`_komp`) için: bileşenin içindeki yerleşimler `_ic`; dışarıdaki yerleşimlerin bileşenle kesişen payı `difference` ile kesilir (`_tasan`); `_bos = k − ∪(petek_D[_ic])` parçaları en yakın iç yerleşime `_yr_kes(_pp,_en)` (yürüyüş) ya da `∩ TAVAN_DAIRE[_en]` ile verilir; payı boş kalan `_tavan_tuttu`. Noktasız bileşene dokunulmaz. Bantlar için aynı iki adım `_BANT_HAM[b]` üzerinde, bandın KENDİ bütçesiyle (`_bad_tasan/_bad_yalitilan`). `korunum ②a` (alan artışı >%0,1 ⇒ ⚠️).
- **AYAR:** `MOTOR_YURUYUS=1` ⇒ pay `_yr_kes` ile; bant bloğu `_BANT_HAM` boş değilse (bant 40 ⇒ evet) CANLI.
- **BAĞ:** 20 çıktısı; 24 (bileşen kilidi) tamamlayıcı; 26.
- **ŞÜPHE:** (a) Ada kuralı ile 24'teki bileşen kilidi ikisi aynı çelişkiyi çözüyor: "ada kuralı kesiyor, Dijkstra geri veriyor" — ikinci kural birincinin delinmesini kapatıyor (yama üstüne yama; yorumda "ikiz" deniyor). (b) Döngü her bileşen için tüm `PETEK_D` listesini tarar (O(bileşen×petek) Python döngüsü). (c) Yorumda eski satır numaraları (:997, :1040-1052 …). (d) Bant bloğu 20 ve 26'daki bant bloklarıyla bit bit paralel kod — üç ayrı çoğaltma.

## 23. `_ham_km2` — 4435–4449
- **AMAÇ:** Yuvarlamasız km² (alan_km2 bini yuvarlıyor).
- **ŞÜPHE:** `alan_km2` (5151) aynı formülün yuvarlamalı ikizi — iki ayrı alan hesaplayıcı. `alan_km2` tanım sırası: yaka kilidi içinde "alan_km2 bu aşamadan SONRA tanımlanıyor" diye elle km² hesaplanıyor (3 farklı elle formül yerleri).

## 24. KARA-KISITLI SAHİPLİK: parçaları sına ve devret + ANA PARÇA DOKUNULMAZ + BİLEŞEN KİLİDİ + BOĞAZ ÖLÇÜMÜ + eğim/nehir ölçümleri — 4452–4638
- **AMAÇ:** Kıyı/körfez/boğaz yüzünden ana parçadan kopan küçük parçaları, ızgara kara yolu daha kısa olan komşuya devretmek. 🔴 ANA PARÇA DOKUNULMAZ (ilk koşuyu düştü: Küngrat %0, Sinop, Aden vb.). 🔴 10 Ağustos 2026 BİLEŞEN KİLİDİ: devir yalnız alıcı ile parça aynı GERÇEK maske bileşenindeyse (0,05° ızgara dar boğazı göremiyordu: Pag %83,9, Vardø %100). BOGAZ-OLCUM-0081: 200 km² tabanı yalnız KARA hattında ("Üsküdar→Beşiktaş 13,6, Kilitbahir→Anadolu 185,6, Sebte→İspanya 122,8, Helsinki→Estonya 197,1").
- **YÖNTEM:** `_kvana[i]` = tohumu içeren parça (yoksa en yakın); her parça `_p` için temsil noktası, `_kvkp.contains(LineString(tohum, rp))` ise dokunma (düz hat karada); `_kvsahip[_gj*_kvnx+_gi]` ızgara sahibi; `_s<0` kararsız ⇒ geç; `_s != _i` ve gerçek bileşen farklıysa `_kvbilesen_red`; yoksa `_kval/_kvver` ile devir, sonra `difference` / `unary_union`. Ölçüm satırları: ① `_kvsahip0` (eğimsiz ızgara) ile fark ⇒ `_ab_parca`, ② `_kvsahipN` (nehirsiz) ⇒ `_abn_parca` ("ÖLÇÜM SATIRIDIR, ÜRETİME KARIŞMAZ"). Sonda: boşalan petek sınaması, ilk 20 devir listesi.
- **AYAR:** `MOTOR_BOGAZ_KAPALI` verilmemiş ⇒ eski "<200 km² taban, ızgaraya sorulmaz" dalı KAPALI (ÖLÜ kod yolu bu kümede); yeni davranış (taban yalnız kara hattında) CANLI. `_kvsahip0`/`_kvsahipN` None mu dolu mu (2128/2153 dilim dışı): yürüyüş ayarlarına bağlı, bu kümede anlaşılmadı. Bileşen kilidi: HER ZAMAN.
- **BAĞ:** `_kvsahip` Dijkstra (dilim dışı), `_YR_SAHIP`, 22 (ada kuralıyla çelişki), 20.
- **ŞÜPHE:** (a) Yorum "`:1790` süzgeci" vb. eski satır numaraları (bayat). (b) İki ölçüm bloğu (① eğim, ② nehir) yalnız ölçüm/sınama; yorum "SIFIR da bir sonuçtur". (c) Beklenti/öngörü yorumları ("ÖNGÖRÜ: 2 parça / 12.108 km²") koda baskı olarak gömülü — her koşuda sabit eski öngörü basılıyor. (d) `MOTOR_BOGAZ_KAPALI` A/B kolu ölü. (e) Aynı 200 km² (`KV_MIN_KM2`) eşiği dilim dışında da kullanılıyor (1330).

## 25. BOZUK_KIYI_TABAN nöbetçisi + KORUNUM SINAVI ② — 4640–4782
- **AMAÇ:** Kıyı kesimi + ada kuralı + kara-kısıtlı devir sonrası bozuk kenar sayısını çift yönlü tabanla izlemek: "taban aşılırsa ✗, altındaysa ⚠️ 'TABAN GEVŞEK'". Tarihçe: 32 → 57 → 48 → 58 → 22; "ORANA ÇEVİR önerisi ölçüldü ve çürüdü" (Bozuk kenar KIYI'nın fonksiyonu).
- **YÖNTEM:** `_kot0 = _bozuk_liste(PETEK_D)`; `_TV_KOMSU` içindekiler "tavan/kasıtlı" (tripwire'a sayılmaz), öteki `_nk0`; `_nk0 > BOZUK_KIYI_TABAN=22` ⇒ "✗ TABANIN ÜSTÜNDE — YENİ UYUŞMAZLIK"; altındaysa "TABAN GEVŞEK" uyarısı. `_tv_delta` = tavandan bu noktaya alan farkı (korunum ②).
- **AYAR:** HER ZAMAN; yalnız basar, çıkış koduna ya da durdurmaya bağlı değil (bu dilimde).
- **BAĞ:** 21 (`_TV_KOMSU`), 22, 24. `BEKLENEN_*` tavanı `denetle.py` tarafında (dilim dışı).
- **ŞÜPHE:** (a) Çok uzun gerekçe yorumları (taban 32→22 geçmişi); sayı `22` "ÖLÇÜLMÜŞ TÜRETİLMİŞ" olduğu iddiasıyla yorumda 57/48/58 ile çelişir görünür — son değer 22 için yorum yok ("anlaşılmadı: 22'nin kaynağı"). (b) "Nöbetçi" durmuyor, yalnız baskı: kimse bakmazsa sessiz. (c) Yorumda "bu satır YILLARDIR '✗' BASIYORDU VE KİMSE BAKMIYORDU".

## 26. ÇÖL TAVANI (COL_TAVAN_KM) + `_col_kes_hesap` + K1 önbellek + bant tavanı + muaf raporu — 4784–5039
- **AMAÇ:** "Kullanıcının en eski açık şikâyeti: çölde sınırlar 'pat diye' geçiyor." Çöl içinde kalan petek payı noktadan 300 km'den uzağa uzanamaz (COGRAFYA-COL-TAVANI.md §2). Su koridoru muafiyeti (30 km): ALAN bazlı (A) seçildi, YERLEŞİM bazlı (B) denendi: Timbuktu muaf çıkıp Sahra'yı 1.475 km kesmeye devam ediyordu.
- **YÖNTEM:** `_col_kes_hesap(_g,_y)` 64 köşeli enlem düzeltmeli elips; `kes = (petek ∩ COL) − disk`, `_SU_TAMPON` çıkarılır; <1 km² kırıntı ⇒ geç; petek boşalırsa 'yok_etti' (uygulanmaz). `COL` = NE `geography_regions_polys.geojson` FEATURECLA=="Desert" ∩ BOLGE; `_SU_TAMPON` = NE nehirleri + KARA.boundary tamponu 30/111.32/cos(40°). KATMAN 1 önbellek (`_K1_COL`, `_ONB.oku/yaz("k1")`), her petek kararı `_ONB.anahtar("col", tuz, petek özeti, konum)` ile önbelleklenir (M-4537). Taban + `_BANT_HAM` üstünde AYNI işlev. Muaf pasajı yalnız `COL_MUAF_YERLESIM_BAZLI=True` iken.
- **AYAR:** `COL_TAVAN_KM=300.0`, `COL_SU_MUAF_KM=30.0`, `COL_MUAF_YERLESIM_BAZLI=False` kodda sabit; önbellek AÇIK (`MOTOR_ONBELLEK_KAPALI` yok). CANLI. `MOTOR_COL_*` env değişkenleri bu dilimde okunmuyor (MOTOR_COL_GIRINTI_KAPALI=1 ve MOTOR_COL_UFUK_SAAT=0 dilim dışı bloklarda: bu dilimde ilişkilerini göremedim).
- **BAĞ:** 20/22 çıktısı `PETEK_D`'yi kısaltır; 21 `_TV_AD` ile 31'in muafiyetini besler; yürüyüş bütçesinin çöl eşiğiyle (`_YR_ESIK` 56 saat çöl; dilim dışı) üst üste bindirme.
- **ŞÜPHE:** (a) Çöl için üç ayrı mekanizma: A1 200 km elips (3), yürüyüş bütçesi çöl eşiği 56 saat (dilim dışı), bu 300 km çöl tavanı — aynı toprağı üç yoldan kesiyor; yorum "çöl tavanı yapısal olarak hiçbir şey kesemez (A1 daha içeride)" artık geçerli: A1 200 < çöl 300 ⇒ ÇÖL TAVANI şu anda büyük ölçüde etkisiz olmalı; ama yorumda koşu 4b'de "4.609.677 km²" kesti (eski 280/140 tavanlarıyla); şimdiki katkı ÖLÇÜLMEMİŞ. (b) `COL_MUAF_YERLESIM_BAZLI=True` dalı + "muaf peteklerin azami erişimi" raporu ölü kod (False). (c) `_SU_TAMPON` cos(40°) en kötü hâl tamponu — daha dar enlemde fazla geniş (geniş muafiyet). (d) `_col_kes_hesap`: `_kes.is_empty` kontrolünden sonra km² <1 ⇒ 'gec' (kırıntı) — sessiz. (e) JSON okuma hatasında "tavan UYGULANMIYOR" uyarısı ama koşu sürer (sessiz kısmi). (f) Aynı bant kopyası (bant bloğu) üçüncü kez.

## 27. Motorun çizdiği kara (motor_kara.geojson) — 5041–5064
- **AMAÇ:** Vektör altlık kıyısı motorun çizdiği karadan gelsin (OGRENILENLER §35; sapma ölçüldü: 16.249 köşe, medyan 0,26 km, %99 1,29 km).
- **YÖNTEM:** `_mkara = unary_union(PETEK_D)` ⇒ `veri-kaynak/motor_kara.geojson` (işçide `_SUREC_DIZIN/mk_{no}.geojson`).
- **AYAR:** HER ZAMAN yazar; `MOTOR_SUREC_ISCI=2` ⇒ işçi yolu dalı (`_ISCI_NO` dolu işçide) CANLI.
- **BAĞ:** çıktı dosyası `ALTLIK` tarafından kullanılır; R7 (28) `_mkara`'yı okur.
- **ŞÜPHE:** `io.open(..., "w")` kapatılmadan `.write` (CPython'da GC kapatır) — dikkatsiz kaynak yönetimi; yazma yeri ana dosya (`BASEMAPS/motor_kara.geojson`) ve işçilerde yalnız işçi kopyası: birleştirme dilim dışı (anlaşılmadı).

## 28. R7 ÖRTÜLMEYEN KARA NÖBETÇİSİ — 5066–5126
- **AMAÇ:** "kara maskesinin kaç km²'si hiçbir petek tarafından örtülmüyor" — kıta kırılımıyla; boşluğun BÜYÜDÜĞÜNÜ görünür kılmak (kusur DEĞİL).
- **YÖNTEM:** `_r7_bos = KARA − _mkara`; 14 kaba kutu (Anadolu+Rumeli, Sibirya, …) için oran; try içinde, hata ⇒ "ÖLÇÜLEMEDİ".
- **AYAR:** HER ZAMAN (yalnız ölçüm).
- **ŞÜPHE:** Ölçüm/sınama amaçlı iş: tam dünya `KARA.difference(_mkara)` pahalı; kutular kaba ve örtüşür ("toplamları KARA'yı vermez").

## 29. Çöl sonrası bozuk kenar bilgisi — 5128–5139
- **AMAÇ:** Nöbetçi öne alındı; bu satır BİLGİ ("çöl tavanının açtığı kenar"). 
- **AYAR:** HER ZAMAN, yalnız baskı.
- **ŞÜPHE:** Yoruma göre "gövde birleştirmesi yutuyor" — ölçülmemiş varsayım olabilir (anlaşılmadı).

## 30. Kırılma tarihleri + `alan_km2` — 5141–5163
- **AMAÇ:** Tüm `d:`/`v:` `f`/`t` tarihlerinden kırılma günleri listesi (epok..kesit_son arası); `alan_km2` bin yuvarlamalı alan.
- **YÖNTEM:** `tarihler` = gsirala(...); başa EPOK, sona KESIT_SON eklenir.
- **ŞÜPHE:** `alan_km2` ile `_ham_km2` formül ikizi (bkz. 23).

## 31. YEDİNCİ DENETİM — sıfır alanlı petek + SIFIR_PETEK_ORAN + A1 TAVANI MUAFİYETİ + ENKLAV MUAFİYETİ — 5165–5266
- **AMAÇ:** hatalar 7.docx madde 2-3 (Estergon/Solnok kaybı haritada görünmüyor, çünkü petek 0 km²): hücre yok edilmiş mi? Ölçüt oran = son/ham (ham hücre YERLEŞİMİN KENDİ kara bileşeniyle kesilir: Venedik 36.825 → 9 km² lagün adası; 18 vaka → 1). A1 tavanı muafiyeti (9 Ağustos 2026): tavanlı hücrede ölçüt mutlak büyüklük (Timbuktu %9 ama 245.000 km²). Enklav muafiyeti (3 Ağustos 2026; Sebte %3,3, Oran %7,9).
- **YÖNTEM:** `_oranlar` = (son/ham, son, ham, ad); `SIFIR_PETEK_ORAN=0.10`; `_tavan_muaf` (oran<0.10, `_TV_AD` içinde, enklav değil, ≥`TAVAN_MUAF_TABAN_KM2=20_000`), `_kayip` (✗), `_kayip_muaf` (ⓘ). `_YASLAMA_IPTAL` sayısı basılır.
- **AYAR:** HER ZAMAN; durdurmaz.
- **BAĞ:** 6 (koruma), 18/21/22 `_ENKLAV`, `_TV_BAGLI`.
- **ŞÜPHE:** (a) Oran ham hücre `PETEK[i]` (yürüyüşte ızgara hücresi, Voronoi değil) ile hesaplanıyor — yorumlar Voronoi'ye göre yazılmış. (b) Muafiyet ölçüt mutlak 20.000 km² keyfi eşiktir. (c) `_ENKLAV` ve `TAVAN` muafiyetleri veriye bağlı güvenceler (yeni vaka sessizce muaf kalabilir; "KÖR DEĞİL" denmiş).

## 32. AŞINMA BANDI — 5268–5291
- **AMAÇ:** "Hücre yok oldu" (%10 altı) ile "hücre aşındı" (%10-60: Budin %41, Dongola %38) iki ayrı soru, iki eşik.
- **YÖNTEM:** `ASINMA_ALT=0.10, ASINMA_UST=0.60`; oran bandındaki ilk 10 petek basılır.
- **AYAR:** HER ZAMAN; yalnız ⚠️ bilgi, üretimi durdurmaz.
- **ŞÜPHE:** Tamamen ölçüm/bilgi; bant sınırları (0.6) gerekçesiz sabit.

## 33. kur:/bit: VARLIK EPOKLARI — giriş yorumu ve ezber başlatma — 5293–5334 (dilim kenarı)
- **AMAÇ:** MIMARI.md §3.1: `kur:`/`bit:` alanlarını okumayan motor, kurulmamış şehir peteğini 1281'den beri haritada tutuyordu (`kur:` taşıyan 34 nokta kuruluşlarından önce 1.699.095 km²; Ufa 391.590 km², Perm 364.108 km²). Çözüm: kurulmamış peteğin payı o tarihte SAHNEDE OLAN en yakın komşuya devredilir; yalnız "kurulmamış VE o tarihte bir sahibi yazılı" (kasıtlı sahipsizlik — Kuveyt `kur:1716` — korunur).
- **YÖNTEM (dilimdeki kısım):** `_VARLIK_ONBELLEK={}`, `_VARLIK_DEVIR={}`, `_VARLIK_PAY={}`, `_KUS_IX` (boş olmayan petek indisleri). Asıl devir mantığı 5334 sonrası, başka dilim.
- **AYAR:** Dilimin devamında; `MOTOR_KUR_DEVIR=1` ⇒ CANLI (devir dilim dışında).
- **ŞÜPHE:** Yorumda sayılar bayat beyanı ("4296 nokta · 1669 kur: … 752 ayrı sınır günü"); "236 çağrı · 54 dk 33 sn = koşunun %21,9'u" (YAMA-MOTOR-0930) — süre maliyeti; ezberler sınırsız (`_VARLIK_ONBELLEK` her epok için bütün petek kümesi tutar, yorumda ~15 sn/çağrı).

---

# Özet liste (1): Süreç içi ezberler ve koşular arası önbellek katmanları (dilim içi)

| Ad | Satır | Tavan | Not |
|---|---|---|---|
| `_GN_ONB` (gn önbelleği) | 3281 | yok | tarih dizgisi sayısı sınırlı |
| `_TavanliEzber` / `_EZBER_LISTE` / `_SAHIPLI_EZBER` | 3374-3426 | LRU, `EZBER_TAVAN` varsayılan 128 (`MOTOR_EZBER_TAVAN`) | iş parçacığı güvenli, Koşu 40'ta 128 |
| `_B1_SAYAC` / `_B23_SAYAC` / `_B3_KALAN_IHLAL` / `_KB_MUAF` / `_YAKA_DUSEN` / `_YASLAMA_IPTAL` / `_KIYI_ONARILAN` | 3510, 3649, 3663, 3491, 4032, 3265, 4233 | yok | yalnız sayaç/ölçüm; süreç işçilerinden toplanması gerekir (`_sr_sayac_al` — dilim dışı) |
| `_TV_SAPMA` | 3076 | yok | liste |
| `_VARLIK_ONBELLEK` / `_VARLIK_DEVIR` / `_VARLIK_PAY` | 5327-5332 | YOK (sınırsız; yorumda en pahalı: ~15 sn/çağrı) | dilim dışına taşan |
| `_YR_KORUMA`, `_BANT_AKTIF`, `_BANT_HAM`, `_BANT_KES_HATA` | 4213-4222 | yok | koşu boyu |
| `PETEK`, `PETEK_TAM`, `PETEK_D`, `_kume`, `TAVAN_DAIRE`, `_TV_KOMSULAR` | çeşitli | yok | tek koşu boyu bellek |
| **Koşular arası (kalıcı) önbellek (`_ONB`, `_mob.Onbellek`)** | 4863-4868, 4955-4961, 4998-5005 | `MOTOR_ONBELLEK_BUDA_GUN` (budama, dilim dışı 10662) | AÇIK (KAPALI bayrağı verilmemiş); katmanlar: `k1` (çöl poligonu + su tamponu, anahtar: KARA özeti + BOLGE.bounds + iki NE dosyasının özeti) ve `col` (petek başına çöl kararı, anahtar: tuz + petek WKB özeti + konum). Başka katmanlar (gövde önbelleği, `_ONB_KIM`…) dilim dışı |

# Özet liste (2): Dışarıdan okunan girdiler ve yazılan çıktılar (dilim içi)

**Okunan:**
- `BASEMAPS/ne_10m_geography_regions_polys.geojson` (çöl poligonları, FEATURECLA=="Desert") — 4874
- `BASEMAPS/ne_10m_rivers.geojson` (su koridoru) — 4910
- Dilim dışı üretilmiş yapılar: `YERLER` (data/yerlesimler* üzerinden `girdi.yukle()`), `KARA`, `BOLGE`, `NEHIR_HAT`, `SIRT_HAT`, `_YR_SAHIP`/`_YR_KARAR`, `_kvsahip*`, `_kvkp`, `_YR_UZAK`, `girdi.UFUK`, `gun.py` (arac/gun.py)
- Ortam bayrakları (bu dilimde doğrudan okunanlar): `MOTOR_B23_KAPALI`, `MOTOR_EZBER_TAVAN`, `MOTOR_EZBER_TAVAN_PUAN`, `MOTOR_BOGAZ_KAPALI`; dolaylı: `MOTOR_YURUYUS`, `MOTOR_YAKA_KILIDI`, `MOTOR_UFUK_BANT`, `MOTOR_ONBELLEK_KAPALI`, `MOTOR_MO_SINIR`
- Koşular arası önbellek dosyaları (`_ONB`): `k1`, `col`

**Yazılan:**
- `veri-kaynak/motor_kara.geojson` (işçide `<_SUREC_DIZIN>/mk_<işçi>.geojson`) — 5055-5062
- Önbellek kayıtları `k1`, `col` (`_ONB.yaz`)
- stdout baskıları (korunum, bozuk kenar, R7, yedinci denetim, aşınma bandı)
- Bellek içi: `PETEK_D` (kıyı kesimi sonrası petek), `_BANT_HAM[b]`, `_kvdegisen`, sayaç sözlükleri
