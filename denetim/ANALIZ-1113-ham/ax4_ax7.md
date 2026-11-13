# AX4 (kapsam) + AX7 (birikmiş belgeler) — salt-okuma ölçüm

Ağaç: C:\atlas\.claude\worktrees\emrelic-1113-analiz (origin/main f4b45bb0a, 13 Kasım 2026). Hiçbir dosya değiştirilmedi.
Not: `py arac/durum_tablosu.py` 2 dk'da bitmedi (arka plana alındı, çıktı alınamadı) -> sayılar DURUM-TABLOSU.md (r14881, 10e06d288, bayat fotoğraf) + kendi ölçümüm (girdi.yukle()/oku_devletler(), node dökümü; betikler scratchpad: say2.py, dump.js).

## A. KAPSAM (EKSEN 4)

### A1. Resmî tablo (DURUM-TABLOSU.md, fotoğraf) vs canlı ölçüm
| | tablo | canlı (bu ağaç) |
|---|---|---|
| yerleşim | 5530 / 124 dosya | **5628** (girdi.py GIRDI_DOSYALARI; diskte 127 yerlesimler*.js) |
| künye (devletler.js) | 2251 | **2267** |
| kronoloji (çekirdek evren) | 4732 madde | kronoloji*/olaylar* 289 dosya, tekilleştirilmiş ~16 015 madde (çekirdek evren dışı dosyalar dahil; tablo sayısıyla KIYASLANMAZ) |
| Değişmez 2s açık | 198 (tavan inf), 379 yıl-temsilî borç, 870 kapsam dışı | — |
| 2t kırılmasız madde | 232 (tavan inf) | — |
| sahipsiz yerleşim | 311 (tavan 311, D1 örneklemesi 2000'e uzatıldı, yeni sahipsiz 0) | — |

### A2. Kıta × çağ (künye = f/t'si çağla kesişen; yerleşim = s:/isg: dönemi çağla kesişen, __BOSLUK__ hariç; kronoloji = madde yılı)
Kıta ayrımı: devlet `bolge:` sözlüğünden; yerleşim kaba lat/lon kutusundan (Orta Doğu/Kafkasya Asya'ya sayıldı). Kronoloji kıtası: yer_id->yerleşim, yoksa künyenin bölgesi; **3519 madde (%22) kıtası belirlenemedi ("?")**.

KÜNYE
| kıta | <MÖ500 | MÖ500-MS500 | 500-1000 | 1000-1500 | 1500-1800 | 1800-2000 | toplam |
|---|---|---|---|---|---|---|---|
| Avrupa | 36 | 62 | 107 | 260 | 131 | 194 | 561 |
| Asya | 102 | 150 | 271 | 387 | 231 | 272 | 1032 |
| Afrika | 24 | **13** | 33 | 113 | 145 | 304 | 416 |
| Amerika | 10 | 20 | 35 | 83 | 90 | 84 | 173 |
| Okyanusya | **1** | **0** | **1** | 8 | 10 | 40 | 44 |
(+41 künye bolge belirsiz)

YERLEŞİM (sahipli dönemi çağda olan)
| kıta | <MÖ500 | MÖ500-MS500 | 500-1000 | 1000-1500 | 1500-1800 | 1800-2000 | toplam |
|---|---|---|---|---|---|---|---|
| Avrupa | 49 | 98 | 139 | 1598 | 1270 | 1714 | 2017 |
| Asya | 52 | 61 | 145 | 757 | 963 | 1085 | 1394 |
| Afrika | 13 | **3** | 21 | 482 | 631 | 921 | 1010 |
| Amerika | 17 | 21 | 33 | 186 | 586 | 929 | 1024 |
| Okyanusya | **0** | **0** | **0** | 8 | 9 | 138 | 183 |

KRONOLOJİ (tekil madde, kıtası belli olanlar)
| kıta | <MÖ500 | MÖ500-MS500 | 500-1000 | 1000-1500 | 1500-1800 | 1800-2000 | toplam |
|---|---|---|---|---|---|---|---|
| Avrupa | 59 | 131 | 306 | 2898 | 1967 | 2042 | 7404 |
| Asya | 88 | 156 | 566 | 1040 | 699 | 725 | 3278 |
| Afrika | 27 | 24 | 115 | 303 | 278 | 485 | 1232 |
| Amerika | 21 | 10 | 14 | **36** | 186 | 284 | 551 |
| Okyanusya | 0 | 0 | 0 | 0 | 4 | 27 | 31 |
| ? | 299 | 377 | 752 | 931 | 539 | 611 | 3519 |

### A3. Boş / ince bulgular (sayıyla)
1. **MS 500'den önce her yer ince:** yerleşim <1000'de dünya geneli toplam ~(49+98+139)+(52+61+145)+(13+3+21)+(17+21+33) ~ 650 satır çağ-kesişimi, 1000-1500'de 3031 -> 5-6 kat sıçrama. Antik/erken ortaçağ yerleşim yoğunluğu çok seyrek (Afrika MÖ500-MS500: 3 yerleşim, 13 künye; Okyanusya 0/0/0).
2. **Okyanusya**: 1500'e kadar künye 1-10, yerleşim 0-9, kronoloji 0; yalnız 1800-2000'de 138 yerleşim/40 künye.
3. **Amerika 1000-1500**: 186 yerleşim, 36 kronoloji maddesi (Avrupa'nın 2898'ine karşı); 1500+ sonrası canlı.
4. **Avrupa kronolojisi ağır, Asya/Afrika/Amerika Avrupa'nın %44/%17/%7'si** (1000-1500: 1040/303/36 vs 2898). Dünya dengesi kronolojide en bozuk eksen.
5. Kıtası belirsiz 3519 kronoloji maddesi (yer_id boş veya künyenin bölgesi yok) kıta bazlı kapsam ölçülemiyor; özellikle MÖ-MS 1000 arası maddelerin yarısına yakını ("?" 299/377/752 vs bilinen 59-566).
6. Sahipsiz 311 yerleşim + 687 `__BOSLUK__` pencere + 1 kasıtlı boşluk kimliği (tablo).
7. GOREV-DUNYA-1102 (Sümer->2000, kıta sırası Avrupa->Asya->Afrika->Amerika->Okyanusya; 6 çağ dilimi): İLERLEME bölümünde D adımı (b) yalnız hücre 5/6/11/12/17/18 (1500-2000 Avrupa/Asya/Afrika) taranmış; **MÖ 3500-1500 hücreleri 1,2,3.. ve Amerika/Okyanusya hücreleri (hücre 19-30) işlenmedi** (sıra "Amerika" olarak belirtilmiş). Tavan künye sayısı başlangıçtan geçmeme kuralı (2263->2275 sonrası 2267) hâlâ geçerli.
8. PLAN-DUNYA.md (15 Ağustos, bayat): "BOLGE penceresi dünyanın %26'sı" -> BAYAT: `uret_petek.py:212` artık `box(-180,-60,180,85)` (dünya penceresi açık; DURUM-TABLOSU "Harita penceresi" aynı). Hâlâ açık: "uret_petek DEM'i okumuyor" kısmen çözülmüş (eğim çarpanı kodu `uret_petek.py:725`), nehir engeli, yoğunluk haritası (A5) -> doğrulanmadı.
9. Çeviri durdu (karar 8 Kasım); yeni maddeler çevirisiz bekliyor (ceviri tavanı).

## B. BİRİKMİŞ BELGELER (EKSEN 7)

Belge yaşları (son commit): DURUM.md 30 Tem · MERAK.md 3 Ağu · ONCELIK.md 9 Ağu · KALITE-ZAMANA-GORE.md 11 Ağu · BEKLEYENLER.md 5 Eyl · EKSIKLER.md 6 Eyl · YOL-HARITASI.md 14 Eki · YAPILACAKLAR.md 16 Eki. Bugün 13 Kasım; **hepsi 4-15 hafta eski; hiçbiri CLAUDE.md'de yürürlükte kabul edilmiyor** (CLAUDE.md: eski koordinatör/tahta dönemi arşivde).

### B1. Belge belge hüküm
- **DURUM.md** (ölçüm 30 Tem, r83, "567 nokta"): **BAYAT** — tablo yerine DURUM-TABLOSU.md (`durum_tablosu.py`) geçti; canlı r14881/5628 yerleşim.
- **YOL-HARITASI.md** (tablo: "77 dizin/97 harita kaydı, 567 nokta, 799 madde, 1288-1923"): **BAYAT sayılar**; künye 2267, yerleşim 5628, tarih çizgisi MÖ 3500-2000. 8. boyut "kapalı" ifadesi hâlâ CLAUDE.md'de yok -> doğrulanmadı.
- **KALITE-ZAMANA-GORE.md** (11 Ağu, 1923 sınırı teşhisi, 'petek 1923'e doğru çöküyor'): **BAYAT/kısmen** — D1 örneklemesi 1300-2000 uzatıldı (8 Kasım), Versay/1920 sonrası kararlar alındı (emre-karar-bekleyenleri 1-2, 5); "1923'ün birebir 1923 haritası olması" ilkesi geçerli ama çözüm yolu (zaman dilimli kalite) 8 Kasım kararlarıyla (D1 genişleme, tavan açma) yürütülüyor.
- **MERAK.md** (3 Ağu, "merak kartları"): **belirsiz** — `data/merak*.js` depoda var mı? (aramadım; bu özellik CLAUDE.md'de geçmiyor) -> açık madde değil, fikir.
- **ONCELIK.md** (9 Ağu, Çöl Seyyahı ilkesi, token kuralları): ilke geçerli, öncelik listesi **BAYAT** (Ağustos sprinti).
- **EKSIKLER.md** (6 Eyl, koşu 7B, enklav, vassal, A/B görünüm, site hızı): koşu 7B sonucu BAYAT (şimdi koşu 36/37); (a) VASSAL GÖRÜNÜMÜ — `js/app.js:587,634` "VASSAL-GORUNUM-0907" kodu ve `tabi:` şeması VERI-YAPISI.md:588'de var -> **BAYAT (çözüldü 7 Eyl+)**; (b) A/B görünümü -> doğrulanmadı; (c) site hızı -> 10-11 Kasım "koşu 36 inince büyük öneriler" (AÇIK); (d) 1923 sınırları -> kısmen; (e) topoğrafya yaslama -> `uret_petek.py:725` eğim çarpanı kodu var, motor dondurma altında; ② ENKLAVLAR -> D7 enklav dondurması 2.367, tarama sürüyor (AÇIK); ③ "uygulanmayı bekleyenler" yamalar -> doğrulanmadı.
- **BEKLEYENLER.md** (5 Eyl kararları: tbmm-turkiye haritada yok, Boğdan/Eflak/Kırım/Erdel aynı renk, küre kipi arka yüzü, kaç madde yeter, macaristan nasıl gösterilsin, öncü kuvvet bölgeleri, yükseklik verisi, statü kademesi, viabundus): `tbmm-turkiye` artık renkler.py+devletler.js'te (3'er eşleşme) -> **BAYAT (çözüldü)**; 5 Eyl'deki "ŞİMDİ TEK KARARIN" bayat; çoğu karar ya 8 Kasım yazılı cevaplarla kapandı ya da sürpriz olarak eskidi. Viabundus (PLAN-DUNYA: 48,7°K altına inmiyor; HALKA 3-4) -> AÇIK değil, ertelenmiş.
- **YAPILACAKLAR.md** (16 Eki; 56 açık, 14 kapalı kutu): aşağıdaki B2 tablosu.

### B2. YAPILACAKLAR.md açık kutuları (satır no ile)
BAYAT (kanıtla):
- 826 "Çok dosyalı girdi" — `arac/girdi.py` GIRDI_DOSYALARI (124/127 dosya) çözdü.
- 933 "`arac/denetle.py` — üç değişmezi tek komutta" — `arac/denetle.py` + 20+ denetle_*.py var.
- 924 "`arac/denetle_kapsama.py`" — dosya var. 
- 929 "`arac/sorgu.py`" — dosya YOK (aranan `arac/*sorgu*` boş) -> AÇIK.
- 663 "BİRİM TUTARLILIĞI cos(enlem)" — `uret_petek.py:1710,1853,2000` cos(enlem) kullanılıyor -> BAYAT.
- 299-305 `kd:`/`tabi:` şeması ①: VERI-YAPISI.md:588 `tabi:` yazılı -> ① BAYAT; ②-⑦ (k:1/k:2, v: 33 serbest metin, 1609 kesiti, bolgeler.js kd:, arayüz idarî katman, 1867 vilayet kesiti): doğrulanmadı, 8 Kasım "v: yerine tabi uygulanıyor (KASA)" ile kısmen ilerliyor.
- 975 "Tarih çizgisi Z-B: 1923-2026" — veri 2000'e kadar (D1 2000'e uzatıldı) -> kısmen BAYAT (2000-2026 ayrı).
- 976-978 "Z-C 1000-1288, Z-D/E MS0-1000, MÖ600-MS0, MÖ12000-600" — MÖ 3500'den başlayan veri (kronoloji_cok_antik_sumer, once1281_*) var; MS0-1000 için ince -> **kısmen BAYAT**; MÖ12000-600 ayrı katman -> AÇIK.
- 944/948 "Faz C-B yerleşim katmanı + kutu açılışı" — pencere (-180,-60,180,85) -> **BAYAT**.
- 980 "Coğrafya fazları C-C…C-F" (Orta Asya, Hindistan, Doğu Asya, Sahra altı) — yerlesimler_ortaasya*/hindistan/asya/afrika var -> BAYAT (kapsam ince ama açıldı).
- 631 "Devletler dizininin dünya kapsamına çıkarılması" — 2267 künye -> BAYAT.
- 990 "Alan adı kararı" — AÇIK (karar/10 dk).
- 438 "KRONOLOJİ ARAMA KUTUSU" — `js/arama.js` var -> **BAYAT**.
- 475 "DEVLET KÜNYESİ kimlik kartı" — künye alanları ozet/ic_not_t/kaynak; `arac/kunye_olc.py` -> BAYAT (kısmen).
- 622 "Dördüncü değişmez: hayalet devlet denetimi" — D2s/D1/D8 vb. kümelenmiş; künye aşımı kuralı CLAUDE.md'de -> BAYAT.
- 961 "`kesinlik` alanı" — VERI-YAPISI.md:286 "🔜" (tasarlandı, tüketicisi yok) -> AÇIK.
- 892,898,902,907,914 (zaman dilimli Voronoi, k/m zamanlı, çıktı mimarisi, çağ dilimlemesi, devlet merkezli yükleme) — motor/mimari işleri; motor dondurma altında; Değişmez 3 "henüz sağlanmıyor" (CLAUDE.md) -> AÇIK.
- 701,715,740,759,784,792,804,830,844,880 (denetim ikinci bant, nehir aşınması 16 kayıt, çöl tavanı 300 km, ayaklanma/isyan, kazak kimlik zinciri, eşleşme A tavanı, 7. denetim sıfır alan, mükerrer Jaccard, kasıtlı boş hücre) — ağustos-eylül ölçümleri; **doğrulanmadı / muhtemelen BAYAT** (denetle.py tavanları defalarca değişti; BEKLENEN_* satırları farklı).
- 982-989 K-2/K-3/O-4/P-2/P-3, Boyut 8, görsel detaylar — ürün fikirleri, AÇIK ama düşük öncelik (P-3 "açıkça ertelendi", Boyut 8 kapalı).

### B3. Geçerli açık maddeler — tek liste (kaynak: belge:satır)
1. `arac/sorgu.py` yazılmadı — YAPILACAKLAR.md:929
2. `kesinlik` alanı (gun/ay/yil/onyil/yuzyil/belirsiz) tüketicisiz — YAPILACAKLAR.md:961, VERI-YAPISI.md:286
3. Zaman dilimli Voronoi / `k`,`m` zamanlı (Değişmez 3) — YAPILACAKLAR.md:892,898; CLAUDE.md §Değişmezler
4. Çıktı mimarisi, çağ dilimlemesi, devlet merkezli yükleme — YAPILACAKLAR.md:902,907,914
5. `kd:`/`tabi:` işleri ②-⑦ (k:1/k:2, v: 33 serbest metin, 1609 32 eyalet kesiti, bolgeler.js kd:, idarî katman düğmesi, 1867 vilayet) — YAPILACAKLAR.md:300-307
6. Alan adı kararı — YAPILACAKLAR.md:990
7. MÖ12000-600 ayrı katman; MS0-1000 / MÖ600-0 çağ dilimi derinleştirmesi — YAPILACAKLAR.md:977-978
8. Site hızı büyük öneriler (koşu 36 inince) — EKSIKLER.md:78 + karar listesi
9. Enklavlar (D7 dondurması 2.367, tarama sürüyor) — EKSIKLER.md:103 + karar listesi
10. Nehir engeli / yoğunluk haritası / T-0112 eğim çarpanı ölçümü — PLAN-DUNYA.md A5-A6
11. Dünya kıta bazlı boşlukları (yukarıdaki A3): MÖ-MS500 her yer, Okyanusya, Amerika 1000-1500 kronolojisi, Asya/Afrika kronoloji dengesi, 3519 kıtasız madde — GOREV-DUNYA-1102 hücreleri 1-4,19-30
12. Yarım kalan (b)/GOREV-DUNYA tur: Lublin 1569 (44 birim), Macaristan 1526-27 (35), Campo Formio, Mora 1686-87, Ming (17) — tam metin kaynak ister (DergiPark/İSAM/JSTOR erişimi) — GOREV-DUNYA-1102.md
13. Uygulanmayan yeni madde önerileri (~40: Katowice 1939, Tilsit 1807, Teschen 1920, Ankara 1926, Addis Ababa 1941, Duala 1914, São Tomé 1975…) ve kırılma taşımaları (Hırvatistan 1918-10-29, Polonya 1918-10-30/31, Hollanda 1810-03-31, Etiyopya 1941 bölünmesi, Edirne 1920-04-23) — GOREV-DUNYA-1102.md (b) hücre 6/12/18 listeleri
14. Çevirisi bekleyen maddeler (çeviri durdu, "EN SONA") — emre-karar-bekleyenleri
15. Künye kaynak borcu: yasak 191, "bulunamadı—standart" 259, zayıf 16, countrystudies/globalsecurity/archontology 24, BRIT 11 — GOREV-DUNYA-1102.md 5b
16. Değişmez 2s: 198 AÇIK, 379 yıl-temsilî borç, 232 kırılmasız madde, 8a 273/8k 108 tavanları (DURUM-TABLOSU, denetle.py) — açık borçlar

### B4. Emre kararı bekleyenler (memory emre-karar-bekleyenleri.md, 11 Kasım itibarıyla)
Kapananlar (8 + 10-11 Kasım cevapları): 1-14 (14 kapandı), kısmen 15 (karar Claude'a, koşu 37 tuz partisinde R=10 bayrak AÇIK), 18, 19.
**Hâlâ açık / sorulmamış:**
- **#16 main'de olmayan dal silme — 273 uzak dal temizliği** (ilk 196, 11 Kasım 273): sorulmadı.
- **#17 laptop temizliği, postit-9 yarım merge** — açık.
- **#18 mo-data-hold gerçek verisi ne zaman** (MÖ veri düzeltmeleri; yayın bayat çıkmazı memory) — açık. (Not: bu ağaçta MÖ veri artık var: yerlesimler_mo_*.js, kronoloji_cok_antik_sumer.js -> kısmen bayat olabilir; doğrulanmadı.)
- **#19 zh çeviri dalı** — çeviri sonuna kaldı (karar verilmiş, uygulama beklemede).
- **#15 enklav-kirp-1104** — karar Claude'a bırakıldı; koşu 36 sonrası (koşu 37 tuz partisi) ölçülecek.
- Açılış: 1453 + dünya>=4 varsayılanı UYGULANMADI (Emre 11 Kasım "ülkeye göre" yayında; diğer varsayılan beklemede).
- 11 Kasım: Erdel zinciri kaynakla yeniden yazılsın · 34 sahne yerleşimi kaynakla teyit · 12 madde elle yer_id (sahne-yerleşim oturumuna gitti) — uygulama durumu doğrulanmadı.
- Site hızı büyük öneriler: koşu 36 inince Emre'ye (karar şablonu).
- D7 enklav dondurması: sürsün (8 Kasım cevap: sürer).
- (BEKLEYENLER.md 5 Eyl'den hâlâ açık sayılması gereken karar yok: bayat.)

Doğrulanmayanlar (açıkça): MERAK.md'nin veri dosyası, YAPILACAKLAR.md 701-880 aralığı maddeleri, EKSIKLER A/B görünüm ve §③ yama kayıtları, `durum_tablosu.py` canlı çıktısı (zaman aşımı), kronoloji 'çekirdek evren' sayısı (4732 vs 16 015).
