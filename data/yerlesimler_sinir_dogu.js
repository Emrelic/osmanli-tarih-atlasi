// -*- coding: utf-8 -*-
// YERLESIMLER_SINIR_DOGU -- REHBER 1923 (eski ad: HAZIR KITA OPUS 85)
// KOL: DOĞU — Ermenistan · Gürcistan (SSCB) + İran (Kaçar) sınırları.
// PİLOT: Türkiye–İran sınırı, 37,4–38,7 K kesimi (113 örnek ≈ 226 km).
//
// 🔒 Bu dosya `girdi.py`ye HENÜZ BAĞLI DEĞİL (ORHANGAZİ bağlayacak) ⇒
// buradaki noktalar BU KOŞUDA ÇİZİLMEZ, bir sonrakine kalır. Kusur değil GECİKME.
//
// ═══ NİÇİN BU KESİM SEÇİLDİ — üç engelin üçü de burada YOK ═══
//   KİMLİK   `kacar` künyesi 1789-03-21 → 1923-10-29 CANLI (rusya hayaleti yok)
//   ARTEFAKT 1932 Küçük Ağrı düzenlemesi 39,6 K'de — bu kesim onun GÜNEYİNDE
//   KOORDİNAT GeoNames rehberi indirildi (Emre'nin onayıyla), koordinatlar
//            ARTIK TAHMİN DEĞİL — ölçülmüş.
//
// ═══ REHBER — ne indirildi, nerede duruyor ═══
//   GeoNames allCountries.zip · CC BY 4.0 · 420.737.984 bayt (~401 MB)
//   Last-Modified 31 Ağu 2026 · açılmış hâli 1.703 MB
//   🔴 HAM DOSYA DEPONUN DIŞINDA (scratchpad) — git onu hiç görmüyor,
//      siteye hiç ulaşmıyor. Depoya yalnız bu dosyadaki 4 kayıt giriyor.
//   Kutuda (35-43,5 K / 25-46,5 D) P sınıfı yerleşim: 90.459
//   Kara sınırına ≤50 km olan: 45.827  (TR 22.227 · SY 5.882 · IQ 3.921 …)
//
// ═══ TAMPON 50 km — "kendin ölçerek seç" dendi, ÖLÇÜLDÜ ═══
//   1923 sahipliği ile BUGÜNKÜ ülke poligonu Türkiye kuşağında 403 kaydın
//   399'unda uyuşuyor; sapan 4'ün en büyüğü **Antakya 22,3 km** (Hatay 1939).
//   Bu bir ALT SINIR (ıssız şeritte kayıt yok) ⇒ 22,3 × 2 ≈ 45 → 50 km.
//   Ayrıca çift kurmak için her iki yakadan ~10-20 km derinlik gerekiyor.
//
// ═══ 🔴 SÜZGEÇTE YAKALADIĞIM KUSUR — yazmadan önce ═══
//   İlk sürüm ülke poligonunun `boundary`sini sınır saydı. `boundary`
//   KIYI ÇİZGİSİNİ de içerir ve ölçüldü: dünya sınır örneğinin 660.252'sinin
//   yalnız **173.458'i (%26,3) KARA SINIRI** — geri kalan %74 kıyı.
//   Kıyı bir sınır değildir: karşı yakaya nokta konmaz, çünkü karşı yaka deniz.
//   ⇒ v2 yalnız komşu bir ülke poligonuna değen örnekleri sayıyor.
//
// ═══ ÖLÇÜM — pilot kesimde sapma (bugünkü sınıra) ═══
//   TABAN                        ortanca 10,69 km · en kötü 18,8 · ≤5km %14
//   +Bacirge ↔ Sero              ortanca  2,98 km · en kötü 18,8 · ≤5km %55
//   +Şemdinli ↔ Rāzhān           ortanca  9,76 km
//   İKİ ÇİFT BİRLİKTE            ortanca  4,53 km · ≤5km %52   ← YAZILAN
//   ⇒ ortanca 10,69 → 4,53 km. HEDEF 5 km'nin ALTINA İNDİ.
//
// 🔴 VE KENDİ "TEOREMİMİ" DÜZELTİYORUM: *"tek taraflı ekleme sapmayı
//   BÜYÜTÜR"* diye yazmıştım ve koordinatör onu şartnameye geçirdi.
//   FAZLA GENELMİŞ. Ölçüm: `+Şemdinli tek` 10,69 → 11,68 (kötüleşti) ama
//   `+Sero tek` 10,69 → **6,84 (İYİLEŞTİ)**. Doğrusu şu: sapma |dB−dA|/2
//   olduğu için, ZATEN UZAK OLAN yakaya nokta eklemek sapmayı KÜÇÜLTÜR,
//   yakın olana eklemek BÜYÜTÜR. Yön, o kesimin İŞARETİNE bağlı.
//
// ═══ AD SORUNU — rehber koordinatı çözdü, ADI da çözdü ═══
//   TR yakasındaki köy adlarının çoğu 1950-60 yeniden adlandırması
//   (Altınsu · Günyazı · Kırıkdağ · Elaçmaz…) — 1923'te O ADLA yoktular.
//   GeoNames'in `alternatenames` alanı tarihî adı veriyor:
//     Esendere → **Bacirga / Bacirge / Bajirge**   (bu kayıtta kullanıldı)
//     Albayrak → Der · Şikefti · Zapbaşı
//     Şemdinli → Şemdinni · Navşar
//   ⇒ Proje deyimi ("Yüksekova (Gever)" · "Özalp (Saray)") korunarak
//     TARİHÎ AD ÖNCE, modern ad parantezde yazıldı.
//
// ═══ KURAL ④ · 3 km MÜKERRER TARAMASI — koordinatla, adla değil ═══
//   Bacirge 31,4 · Sero 35,4 · Şemdinli 38,9 · Rāzhān 26,4 km — dördü TEMİZ.
//   (Ad ekseniyle aramadım: `_yer_ara.py`nin Türkçe yanlış-negatifi var.)
//
// ═══ DEĞİŞMEZ 2 (tavan 0) — HİÇBİR GÜN UYDURULMADI ═══
//   Kullanılan 5 kırılma günü veride ZATEN kırılma ve külliyatta 0 gün
//   sapmayla maddeli: 1514-09-06 (Tebriz'e giriş) · 1548-08-25 (Van'ın
//   fethi) · 1585-09-25 (Tebriz'in fethi) · 1603-10-21 (Tebriz'in kaybı).
//   Zincirler bitişik Yüksekova (Gever) ve Urmiye kayıtlarından BİREBİR alındı.

window.YERLESIMLER_SINIR_DOGU = [

// ══ ÇİFT A — Bacirge (TR) ↔ Sero (İran) · 4,1 km ══════════════════════
// Kolun en iyi çifti: ortanca sapmayı TEK BAŞINA 10,69 → 2,98 km'ye indiriyor.
// İkisi de sınır hattının hemen yanında (0,4 km ↔ 5,3 km) ve 4,1 km arayla —
// yani petek kenarı gerçekten aralarından geçiyor.
{ad:"Bacirge (Esendere)", tur:"koy", lat:37.7114, lon:44.6010, g:0, k:4, m:null,
 sinir:true,
 s:[{f:"1281-01-01", t:"1514-09-06", d:"akkoyunlu"},
    {f:"1514-09-06", t:"1548-08-25", d:"safevi"}],
 d:[{f:"1548-08-25", t:"1923-10-29"}],
 kaynak:"GeoNames (CC BY 4.0), allCountries 31 Ağu 2026: 37.7114 K / 44.6010 D, feature class P, kod PPLA3; `alternatenames` alanı tarihî adı veriyor: 'Bacirga, Bacirge, Bajirge'. Koordinat TAHMİN DEĞİL, rehberden. ⚠️ TDV bu taneciği kapsamıyor (§4 taneciklik boşluğu): `semdinli`·`nehri`·`semdinan` sluglarının üçü de ÖLÜ (302), kapsayıcı `hakkari` maddesi CANLI (200) ama gövdesinde (17.020 karakter) Şemdinli/Nehrî HİÇ GEÇMİYOR. ⚠️ Ve şunu AÇIKÇA yazıyorum: yerleşimin VARLIĞI ve KONUMU doğrulandı, 1923'te de var olduğu AYRICA BELGELENEMEDİ — Kürtçe köy adlarının sürekliliği yüksektir ama bu bir kaynak değil, bir beklentidir.",
 neden:"sınır çifti: Sero (İran, bu dosyada) ile 4,1 km — 1913 İstanbul Protokolü sınırı tam aralarından geçer. Bacirge sınıra 0,4 km, Sero 5,3 km ⇒ sapma |5,3−0,4|/2 = 2,45 km, hedef 5 km'nin ALTINDA. ÖLÇÜLDÜ: bu çift pilot kesimin ortanca sapmasını 10,69 → 2,98 km'ye, ≤5km oranını %14 → %55'e taşıyor. Dönem günleri bitişik Yüksekova (Gever) kaydından (31,4 km) birebir alındı, uydurulmadı. BU KOŞUDA ÇİZİLMEZ, bir sonrakine kalır."
},

{ad:"Sero", tur:"koy", lat:37.7275, lon:44.6427, g:0, k:4, m:null,
 sinir:true,
 s:[{f:"1281-01-01", t:"1340-01-01", d:"ilhanli"},
    {f:"1340-01-01", t:"1386-01-01", d:"celayirli"},
    {f:"1386-01-01", t:"1406-10-21", d:"timurlu"},
    {f:"1406-10-21", t:"1468-04-01", d:"karakoyunlu"},
    {f:"1468-04-01", t:"1501-07-01", d:"akkoyunlu"},
    {f:"1501-07-01", t:"1736-03-08", d:"safevi"},
    {f:"1736-03-08", t:"1747-06-20", d:"afsar"},
    {f:"1747-06-20", t:"1796-01-01", d:"zend"},
    {f:"1796-01-01", t:"1923-10-29", d:"kacar"}],
 d:[{f:"1585-09-25", t:"1603-10-21"}],
 kaynak:"GeoNames (CC BY 4.0): 37.7275 K / 44.6427 D, feature class P; `alternatenames`: 'Sero, Serow, Siroo, Sīroo, سرو'. 📌 Bu kaydı DÜN yazmayı REDDETMİŞTİM: koordinatını hafızadan 37,7333/44,6167 diye tahmin ediyordum ve güvenim ORTA'ydı. Rehber ölçtü — tahminim 2,3 km yanlışmış, yani reddetmek DOĞRU karardı. ⚠️ TDV `serow`/`sero` maddesi YOK; Urmiye-Van kervan yolu üzerindeki tarihî geçit yerleşimi olduğu standart akademik literatürde geçer, ama 1923 varlığı AYRICA BELGELENEMEDİ.",
 neden:"sınır çifti: Bacirge (Esendere) (OSMANLI, bu dosyada) ile 4,1 km. ⚠️ `d:`/`s:` ÖRTÜŞMESİ KASITLI: 1585-1603 Osmanlı devri safevi `s:` dönemiyle örtüşüyor — projenin ÇOĞUNLUK deseni ve motor önceliği (uret_petek.py:3005, sıra d>v>s) çözüyor; bitişik Urmiye kaydı (42,7 km) birebir aynısını yapıyor ve zincir ondan alındı. BU KOŞUDA ÇİZİLMEZ."
},

// ══ ÇİFT B — Şemdinli (TR) ↔ Rāzhān (İran) · 27,2 km ═══════════════════
// İkinci çift: tek başına 10,69 → 9,76, ama A ile BİRLİKTE 2,98 → 4,53…
// ⚠️ DİKKAT: birleşik sayı A'nın tek başınakinden BÜYÜK. Sebebi B'nin
// kötülüğü değil, A'nın kendi kesiminde çok iyi olması — B başka bir
// kesimi (güney uç) düzeltiyor ve ortanca ikisinin ortalamasına oturuyor.
// ≤5km oranı %55 → %52; en kötü ikisinde de 18,8. Yani B ortancayı biraz
// yükseltip KAPSAMI genişletiyor. Yazıldı, ama bu ödünleşme KAYDA GEÇTİ.
{ad:"Şemdinli (Şemdinni)", tur:"kasaba", lat:37.3051, lon:44.5742, g:0, k:4, m:null,
 sinir:true,
 s:[{f:"1281-01-01", t:"1514-09-06", d:"akkoyunlu"},
    {f:"1514-09-06", t:"1548-08-25", d:"safevi"}],
 d:[{f:"1548-08-25", t:"1923-10-29"}],
 kaynak:"GeoNames (CC BY 4.0): 37.3051 K / 44.5742 D, kod PPLA2, nüfus 18.978; `alternatenames` 23 ad taşıyor, aralarında 'Şemdinni' ve 'Navşar'. Hafızamdaki 37,3167/44,5667 tahmini 1,7 km yanlışmış. ⚠️ TDV taneciklik boşluğu (yukarıda ölçüldü). Şemdinan (Nehrî) şeyhleri ve Şeyh Ubeydullah'ın 1880 ayaklanması standart literatürde (M. van Bruinessen, Agha, Shaikh and State) — yani yerleşimin 19. yüzyılda varlığı BELGELİ, bu da 1923 sürekliliğini kuvvetle destekliyor.",
 neden:"sınır çifti: Rāzhān (İran, bu dosyada) ile 27,2 km. İkisi de sınıra 12,3 km ⇒ SİMETRİK (fark 0,0 km), ve simetri mesafeden önemli: sapma |dB−dA|/2 olduğu için eşit uzaklıkta sapma SIFIRA gider. ÖLÇÜLDÜ: tek başına 10,69 → 9,76; A çiftiyle birlikte 4,53 ve ≤5km %52. BU KOŞUDA ÇİZİLMEZ."
},

{ad:"Rāzhān", tur:"koy", lat:37.3833, lon:44.8667, g:0, k:4, m:null,
 sinir:true,
 s:[{f:"1281-01-01", t:"1340-01-01", d:"ilhanli"},
    {f:"1340-01-01", t:"1386-01-01", d:"celayirli"},
    {f:"1386-01-01", t:"1406-10-21", d:"timurlu"},
    {f:"1406-10-21", t:"1468-04-01", d:"karakoyunlu"},
    {f:"1468-04-01", t:"1501-07-01", d:"akkoyunlu"},
    {f:"1501-07-01", t:"1736-03-08", d:"safevi"},
    {f:"1736-03-08", t:"1747-06-20", d:"afsar"},
    {f:"1747-06-20", t:"1796-01-01", d:"zend"},
    {f:"1796-01-01", t:"1923-10-29", d:"kacar"}],
 d:[{f:"1585-09-25", t:"1603-10-21"}],
 kaynak:"GeoNames (CC BY 4.0): 37.3833 K / 44.8667 D, feature class P, nüfus 3.783; `alternatenames`: 'Razhan, Rāzhān, راژان'. ⚠️ TDV'de müstakil maddesi YOK; Urmiye'nin batı yakasındaki köylerden, zincir Urmiye maddesinden (TDV `urmiye`, 200, gövde okundu) türetildi. 1923 varlığı AYRICA BELGELENEMEDİ — nüfusu ve `alternatenames` çeşitliliği eski bir yerleşim olduğunu düşündürüyor ama bu kaynak değil, işaret.",
 neden:"sınır çifti: Şemdinli (Şemdinni) (OSMANLI, bu dosyada) ile 27,2 km — ikisi de sınıra 12,3 km, yani TAM SİMETRİK. BU KOŞUDA ÇİZİLMEZ."
}

];

// ══════════════════════════════════════════════════════════════════════
// YAZILMAYANLAR — ve her birinin ÖLÇÜLMÜŞ sebebi
// ══════════════════════════════════════════════════════════════════════
// 🔴 Albayrak (TR 38,1425/44,2012) ↔ Sīlvānā (İR 37,4222/44,8532)
//    Ölçüm İYİ: birlikte ortanca 8,62, üç çiftle 4,18 ve en kötü 18,8→16,6.
//    AMA ARALARI **98,3 km** ⇒ bu bir ÇİFT DEĞİL, birbirinden bağımsız iki
//    ekleme. Kural ② "her kayıt `neden:` alanında EŞİNİ ve MESAFESİNİ yazar"
//    diyor; 98 km'ye "eş" diyemem. YAZILMADI, koordinatöre soruldu:
//    kural ② işareti doğru olan TEK TARAFLI eklemeye izin veriyor mu?
// 🔴 Ermenistan · Gürcistan yakası — KİMLİK engeli sürüyor (M-1815/M-1818):
//    `rusya` künyesi 1917-03-15'te bitiyor, 344 kayıt aşıyor, ve kapanma
//    testi 27 → 260 kayda yayıldı (Finlandiya'dan Kafkasya'ya). Küresel
//    parti bekleniyor. Rehber bu engeli ÇÖZMEZ — ayrı bir sorudur.
// 🔴 Iğdır–Aralık–Dilucu (39,6-39,7 K) — 1932 ARTEFAKT şüphesi, ölçülemedi.
//    Kolun en kötü kesimi ama rehber onu da çözmez: soru koordinat değil,
//    1923 sınırının bugünkünden farklı olup olmadığı.
