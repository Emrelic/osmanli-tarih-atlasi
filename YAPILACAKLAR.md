# Yapılacaklar

Belge seti: `CLAUDE.md` (nasıl çalışılır) · `YOL-HARITASI.md` (nereye gidiyoruz) ·
**bu belge** (sıradaki işler) · `MIMARI.md` (motor) · `VERI-YAPISI.md` (şemalar).

Öncelik yukarıdan aşağıya. Bir iş bitince kutusunu işaretle ve `CLAUDE.md` §1.5'teki
durum tablosunu güncelle.

---

## Şimdi

- [x] **Görsel doğrulama turu** — kullanıcı yürütüyor: ekran görüntülerini
      "hatalar N.docx" dosyalarına madde madde yazıyor, oturum okuyup düzeltiyor.
      Üç tur yapıldı. Bu yol veri denetiminin göremediği bütün bir hata sınıfını
      açığa çıkardı: hayalet devlet etiketleri (1453'te bitmiş Bizans 1537'ye,
      1517'de bitmiş Memlük 1557'ye kadar sürüyordu), 235 yıl boyunca yanlış
      kimlikle boyanan Safevî coğrafyası, tam kırmızı boyanan voyvodalıklar,
      yüz yıl ekranda kalan kale simgeleri. **Denetim betiği bunların HİÇBİRİNİ
      göremiyordu** çünkü üç değişmez de "sahip var mı / maddesi var mı / merkezle
      uyuyor mu" diye soruyor, "bu devlet o tarihte YAŞIYOR MU" diye sormuyor.

- [ ] **Dördüncü değişmez: hayalet devlet denetimi** — bir yerleşim, ömrü bitmiş
      bir devlete ait olamaz. `data/devletler.js` her devletin `f`/`t` aralığını
      zaten tutuyor; `arac/denetle.py` yerleşim dönemlerini bu aralıkla
      karşılaştırmıyor. İki hayalet etiket ailesi (Patmos → `bizans`, ve
      İbrim-Sevâkin-Masavva-Dahlak → `memluk`) elle bulundu; araç bulmalıydı.
      ⚠️ Tolerans gerekir: Mekke'nin memlûk dönemi 1517-07-06'da bitiyor ama
      devlet 04-13'te yıkıldı — bölgesel teslim gecikmeleri meşrudur. Eşik
      birkaç ay olmalı, sıfır değil.

- [ ] **Devletler dizininin dünya kapsamına çıkarılması** — Eksen 3, aşama D-1 ve
      D-2. Görev tanımı hazır: `oturumlar/OTURUM-3-DEVLETLER.md`. *Oturum 3*

- [ ] 🔴 **ALTLIK: KADEMELİ GEÇİŞ — kullanıcı kararı, 31 Temmuz.**
      Bugün ekranda görünen kabartmalı harita **Esri'nin sunucusundan** geliyor
      (`js/app.js:359`, `World_Physical_Map`) ve kamu malı değil. Kullanıcının
      şartı: *"harita bizim olsun, açık kaynak olsun ama uhdemizde ve
      kontrolümüzde kalsın."* Esri bu şartı bozan **tek** bileşen — vektörlerin
      tamamı (Natural Earth) kamu malı ve bizde.
      ```
      1. Esri altlığı ŞİMDİLİK KALIR
      2. Üstüne bizim vektör katmanımız AÇILIR-KAPANIR olarak eklenir
      3. Katman yeterince iyi görününce Esri KALDIRILIR
      ```
      Neden bu yol: vektör katman önce **hata ayıklama aracı** olarak işe yarar
      (motorun gerçekten kullandığı nehir/sırt gözle görünür), sonra altlığın
      kendisi olur. Tek iş, iki teslim, risk yok.
      ⚠️ **İki bütçe ayrı:** depoda `ne_10m_*` zaten var (26,8 MB, yeni indirme
      yok) ama `index.html` onlardan **hiçbir şey çekmiyor** (ölçüldü: 0 atıf) —
      yani vektör altlık **sayfaya yeni yük**. Sayfa bugün 37 MB taşıyor.
      Pencereye kırpılmış + zoom'a göre sadeleştirilmiş hedef boyut şartnamede
      ölçülecek.
      ⚠️ Kabul edilen bedel: **kabartma gölgesi gider** — dağlar 3B değil, alan
      olarak görünür. Kullanıcı bunu bilerek seçti.
      🔴 **OSM (ODbL) ve OpenTopoMap (CC-BY-SA) ELEME SEBEBİ** — kalite değil,
      lisans: bulaşıcıdırlar, türevi aynı şartlarla paylaşmaya zorlarlar. Harita
      "açık" kalır ama **kontrol bizde olmaz.** Kamu malı kaynakta kalınacak.
      📌 İkinci kazanç: bugün kullanıcı fotoğrafta Toroslar'ı görüyor, motor
      `Taurus Mts.` poligonunun `buffer(-0.12)` konturunu kullanıyor — **aynı yer
      değil.** Kademe 2'den sonra görünen hat ile motorun hattı aynı olur.
      Şartname: `oturumlar/COGRAFYA-HATLAR.md` *(COĞRAFYA yazar, K uygular)*

- [ ] 🔴 **ÇÖL TAVANI 300 km — kullanıcı kararı, 31 Temmuz.**
      Bugün tavan YOK: Batı Sahra'nın ortası **1.000 km öteden** Timbuktu'ya ve
      Agadir'e bağlı. Kullanıcının itirazı: *"bir yerleşim çöl kıyısında diye
      Sahra'nın diğer yakasındaki şehirle koca çöl alanını ikiye bölmemeli…
      ülke sınırlarında suni bir büyüklük yaratır."*
      Ölçüm (COĞRAFYA): çöl içi en yakın yerleşime medyan 201 km · %90 481 km ·
      azami 1.077 km. Bölge bölge: Anadolu 47 · Rumeli 57 · Mısır 81 ·
      Libya 124 · Arabistan 176 · **Batı Sahra 417** ← tek bozuk bölge.
      300 km yerleşik toprağa **hiç dokunmuyor** (Anadolu azami 125 · Rumeli 199
      · Mısır 225 · Libya %90'ı 206), Sahra'nın %32,4'ü sahipsiz kalır.
      ⚠️ **İKİ MUAFİYET ŞART:**
      1. **Su koridoru muaf** — NE'nin çöl lekesi Nil vadisinin ÜSTÜNDEN geçiyor,
         vadiyi oymuyor. Çöl poligonunun içinde ve Nil'e 55 km'den yakın **35
         yerleşim** var (Esna 0 km · Asyut 1 · Uksur 1 · Asvan 3 · Hartum 8).
         Ham tavan Mısır'ı keserdi.
      2. Kıyı ve göl boyunca uzanma sınırlanmayacak.
      ✅ Motor bunu kaldırabiliyor: `uret_petek.py:911` SERBEST KENAR +
      `js/app.js:435` + `SERBEST_U` belirsizlik dizisi zaten var. Görsel sonuç
      **sönen kenar** olmalı, keskin çizgi değil — çöldeki hâkimiyet keskin
      çizgiyle bitmez.
      🔴 **Yarısı VERİ işi:** 391 km'lik Batı Sahra medyanı kuralın değil
      noktasızlığın sonucu. Tindûf · Şinkît · Vâdân · Tîşît · Vâlâta · Smara
      eklenmeli. *(A3 ARAP-AFRİKA)*
      Şartname: `oturumlar/COGRAFYA-COL-TAVANI.md` *(COĞRAFYA yazar, MOTOR uygular)*

- [ ] **`ayaklanma` / `isyan` — aynı kavram, iki yazım.** Veride `ayaklanma` 32,
      `isyan` 12; şemanın resmî değeri `ayaklanma`. CSS bugün ikisine de aynı rengi
      veriyor, yani **görünürde sorun yok** — ama panelde kategori metni ham `k:`
      değeri olarak yazıldığı için kullanıcı aynı şeyi iki adla okuyor.
      `isyan` → `ayaklanma`, 12 kayıt, `data/olaylar*.js`. *U1 KRONOLOJİ*
      📌 Bu çift, veriyle arayüzün ayrı sözlüklerle büyüdüğünün delili olarak
      bulundu: CSS **yalnız azınlıkta olan `isyan`ı** tanıyordu.

- [ ] 🔴 **`kazak` kimlik zinciri üç yerde uyuşmuyor — merge'den ÖNCE.** Ölçüldü
      (31 Temmuz): `renkler.py` rengi **`kazak-hanligi`** anahtarıyla tanımlıyor,
      ama `yerlesimler_ortaasya2.js:193,207,215` hâlâ `d:"kazak"` yazıyor ve
      `kimlikler.js:199` `harita:"kazak"` diyor. `uret_petek.py:231` `d:` değerini
      **doğrudan** BOYALAR'da arıyor → üçü eşitlenmeden Kazak Hanlığı renksiz kalır.
      ⚠️ Bugün canlı bir kusur DEĞİL: `yerlesimler_ortaasya2.js` ne `girdi.py`
      listesinde ne `index.html`'de — dosya merge bekliyor. Kusur **merge anında**
      doğar, o yüzden bu satır merge'in ön şartıdır.
      Kısa ad `kazak` bilerek reddedildi: Türkçede hem Kazak Hanlığı'nı hem Ukrayna
      kazaklarını karşılıyor, atlas ikisini de kapsıyor, karışma sessiz olurdu.
      Üç dosya tek commit'te. *K + Oturum 9*

- [ ] **Eşleşme A tavanı 67 → 97** (`arac/denetle_eslesme.py`). Sayı arttı ama
      **veri kötüleşmedi**: `§26` (denetimin kendi ürettiği "Aynı tarihte…" eki
      eşleştirmeye giriyordu — 28 kırılma sessizce geçmiş) ve `§19` (sağ kelime
      sınırı yoktu: `Kavala ⊂ Kavalalı`) düzeltilince araç körlüğünü kaybetti.
      🔴 Gerekçe tavanın yanına yazılmalı, yoksa sonraki oturum "denetim bozuldu"
      sanıp geri alır. *DENETÇİ (dosya onun)*

      ⚠️ **`BEKLENEN_KIRILMASIZ` (Değişmez 2t) 67'de KALIYOR — dokunmayın.**
      Bu satır bir kez yanlış yazıldı (31 Temmuz, `81c4ac5`): iki ayrı metrik tek
      metrik sanıldı, çünkü **eşleşme A'nın eski değeri de 67'ydi.** İkisi ayrı
      soru soruyor — 2t: *"maddenin kırılması var mı"*; eşleşme A: *"kırılmanın
      DOĞRU maddesi var mı"*. Aynı sayıyla başlamaları tesadüf.
      📌 Ders: tavan **indirmek** kadar **yanlış tavanı** oynatmak da denetimi kör
      eder, üstelik sessizce — sayı "güncellendi" göründüğü için kimse geri bakmaz.

---

## Coğrafi genişlemeden önce bitmesi şart — motor işleri

Dördü de Faz C-B'den önce. Nokta kümesi büyüdükçe bu dönüşümler kat kat pahalılaşır.
Gerekçeler: `MIMARI.md` §3.

- [ ] **Çok dosyalı girdi** — motor `data/yerlesimler_*.js` desenindeki bütün
      dosyaları okusun. Paralel oturumların yerleşim ekleyebilmesinin ön koşulu.
      *(MIMARI §3.3)*

- [ ] **YEDİNCİ DENETİM: sıfır alanlı petek** — *(MIMARI.md §3.5, en yeni sessiz
      hata sınıfı)*. Kenar yaslama bir peteğin sınırını kendi tohum noktasının
      ötesine itebiliyor; yüz "yetim" kalıp komşuya katılıyor ve yerleşim hiç
      toprak almıyor. Ölçüldü: **Estergon'un peteği 8 km², Solnok'un 0 km²** —
      ikisinin de kaybı haritada görünmüyor, oysa veri, kronoloji ve motor
      mantığı üçü de doğru. Kullanıcı bunları hatalar 7.docx'te bildirdi.
      İki adım:
      1. Üretimde **32 yetim yüzün hangi yerleşimlere ait olduğu loglansın** —
         o liste sınıfın tam envanteri olur.
      2. `denetle.py`'ye her peteğin alanı, `BEKLENEN_SIFIR_PETEK = 0`.
         ⚠️ Ölçüm `o + v + z` katmanlarının TOPLAMI üzerinden yapılmalı; yalnız
         `o` sayılırsa tâbi/şehzade katmanına geçen petekler yanlış sıfır verir
         (ilk denemede Bursa bile 0 km² çıktı).

- [ ] **Mükerrer denetimine İKİNCİ ölçüt** — Jaccard kelime benzerliği taht
      değişimi maddelerinde kör. Ölçüldü: "IV. Mehmed'in tahttan indirilmesi"
      ile "II. Süleyman'ın cülusu" **tek kelime paylaşmıyor** (aynı olayın iki
      yüzü zıt özneyle yazılınca benzerlik sıfır); "II. Mustafa'nın cülusu" ile
      "II. Mustafa tahta çıktı — sefere bizzat katılma kararı" 0.125 veriyor,
      eşik 0.45. İkisini de araç kaçırdı, kullanıcı ekranda gördü.
      Hal'/cülûs, ölüm/cülûs, azil/tayin çiftleri bu kör noktada kalmaya devam
      edecek. Önerilen ölçüt: **aynı gün ±3 + `kisiler` alanında ortak ad**
      varsa şüpheli say.

- [x] ~~**Motor `kur:` ve `bit:` alanlarını okumuyor**~~ — **30 Temmuz'da
      ÇÖZÜLDÜ** (`b781c2c`, 1,7 milyon km²'lik hayalet toprak düzeltmesi).
      Bu satır bir gün fazla açık kaldı ve **üç kaynağın çelişmesine** yol açtı:
      commit "okuyor", bu satır "okumuyor", A5 raporu "hiç okumuyor".
      31 Temmuz'da motorun kendi ölçütüyle hakem ölçümü yapıldı
      (`devir_kumesi` + `_sahipli`, 1600-06-15 kesiti):
      ```
      Nâsıriye  kur 1869  d:osmanli  → DEVREDİLİR   (hayalet OLUŞMUYOR)
      Muhammere kur 1812  s:safevi   → DEVREDİLİR
      Buşehr    kur 1734  s:safevi   → DEVREDİLİR
      Kuveyt    kur 1716  sahipsiz   → BOŞ KALIR — kasıtlı
      1600 kesitinde: devredilen 17 · kasıtlı boş 7
      ```
      🔴 **Kuveyt deliği KUSUR DEĞİL, kuralın kendisi.** Motorun ölçütü
      "kurulmamış" değil, **"kurulmamış VE o tarihte sahibi yazılı"** — çünkü bu
      projede sahipsizlik bazen kasıtlıdır (çöl dolgu noktaları, körfez
      şeyhlikleri). Kuveyt 1716 öncesi hem kurulmamış hem sahipsiz; peteğini
      Basra'ya bağışlamak **`CLAUDE.md §3`'ün bilerek bıraktığı boşluğu yok
      ederdi.**
      ⇒ `hatalar 3 md.8` / `hatalar 15 md.6` (Lahsa-Katîf ada gibi görünüyor)
      **motor borcu değil, GÖSTERİM sorusu**: kasıtlı boş bir hücre iki Osmanlı
      bölgesinin arasına düştüğünde kopukluk okunuyor. Ayrı kalem olarak aşağıda.
      📌 Ders: kapatılmamış bir yapılacak maddesi, yanlış bilgiden **daha
      tehlikeli** — çünkü ikisi de doğru görünür ve hangisinin bayat olduğu
      belli olmaz. Üç oturum bugün bu satıra dayanarak yanlış teşhis koydu.

- [ ] **Kasıtlı boş hücre, kopukluk gibi okunuyor** — `hatalar 3 md.8` ·
      `hatalar 15 md.6`. Kuveyt'in 1716 öncesi boş peteği, Basra ile Lahsa-Katîf
      arasına düşünce körfez zinciri ada gibi görünüyor (Basra yönünde 63,7 km,
      Katîf yönünde 185,4 km — A5 ölçtü). Veri doğru, motor doğru, **görüntü
      yanıltıcı.**
      Çözüm motoru değil gösterimi ilgilendiriyor ve seçenekler ölçülmedi:
      (a) sahipsiz hücreye zeminden ayırt edilir ama "başka devlet" demeyen bir
      doku, (b) yakınlaştırmaya bağlı olarak sahipsiz hücreleri gizlemek,
      (c) olduğu gibi bırakıp panelde açıklamak.
      ⚠️ (a) ve (b) bütün çölü de etkiler — 34 dolgu noktası aynı sınıf.
      **Seçilmeden önce ölçülmeli.** *K + COĞRAFYA*

- [ ] **Zaman dilimli Voronoi** — diyagram bütün tarih için bir kez hesaplanıyor;
      farklı dönemlerde farklı komşuluk üretmiyor. *(MIMARI §3.1)*
      ⚠️ `kur:`/`bit:` kısmı ARTIK GEÇERSİZ — yukarıdaki maddede çözüldü. Kalan
      iş yalnız diyagramın kendisinin zamana bağlı olması.
      → Yan kazanç: "tarih ilerledikçe bölgeler bölünsün" davranışı bundan doğar.

- [ ] **`k`/`m` alanlarının zamanlı hâle gelmesi** — Değişmez 3. Bugün 311
      yerleşim-tarih çiftinde yerleşim ile bağlı olduğu merkez farklı devletlerin
      elinde. *(MIMARI §3.4, VERI-YAPISI'nda `kd:` şeması)*

- [ ] **Çıktı mimarisi** — petek geometrisi epok başına bir kez yazılsın, sahiplik
      ayrı küçük tabloda tutulsun. Bugün 567 nokta 27 MB üretiyor; dünya ölçeğinde
      yüzlerce MB olur. *(MIMARI §3.2)* — `js/app.js` boyama mantığı da değişir,
      Oturum 1 ile ortak iş.

- [ ] **Çağ dilimlemesi ve beş index** — tarih çizgisi değişken uzunlukta çağlara
      bölünsün (seyrek dönemde binyıl, yoğun dönemde çeyrek yüzyıl), diğer index'ler
      bu çağlara göre dilimlensin. Yerleşim index'i zamanlı olsun: bir yerleşim
      sahneye çıktığı andan itibaren index'e girsin ve bölgesi o andan itibaren
      atansın — Port Said 1600 çağının index'inde bulunmasın. *(MIMARI §6.7)*
      → Zaman dilimli Voronoi'nin veri tarafındaki karşılığı; onunla birlikte yapılır.

- [ ] **Devlet merkezli yükleme** — veri bölge × çağ parçalarına bölünsün, her devlet
      için manifest üretilsin, tarayıcı odak devletine göre yalnız gereken parçaları
      çeksin. İlgi bağları elle yazılmaz, sahiplik ayak izi + Voronoi komşuluğu +
      savaş/antlaşma birlikteliğinden **türetilir**. *(MIMARI §6.5)*
      → Ön koşul: yukarıdaki çıktı mimarisi. Arayüz tarafı Oturum 1 ile ortak.

---

## Yazılacak araçlar

- [ ] **`arac/denetle_kapsama.py`** — kara maskesini ızgaraya böler, her hücrenin en
      yakın yerleşime uzaklığını ölçer, eşiği aşan bölgeleri liste ve görüntü olarak
      verir. Bu araç olmadan bir coğrafya fazının "yoğunluk kabulü" adımı ölçülemez.
      *(MIMARI §5)*

- [ ] **`arac/sorgu.py`** — verilen tarih ve bölge için yerleşim, sahip, idari kademe
      ve petek alanını tablo hâlinde döker; çelişkili satırları uyarır. Değişmez 3'ün
      denetim aracı. *(MIMARI §4)*

- [ ] **`arac/denetle.py`** — üç değişmezi tek komutta koşturan toplu denetim.
      Bugün komutlar `CLAUDE.md` §3'te tek satırlık node ifadeleri olarak duruyor.

---

## Veri işleri

- [ ] **Dizin ↔ harita kimlik eşleşmesi** — `devletler.js` kayıtlarına
      `harita:"<BOYALAR id>"` alanı eklenecek. Haritada olup dizinde hiç karşılığı
      olmayan 53 devlet var. Mevcut `id`'ler değiştirilmez. *Oturum 3*

- [ ] **Faz C-B yerleşim katmanı** — Avrupa, Kuzey ve Doğu Afrika, Ortadoğu, İran,
      Kafkasya, Doğu Avrupa. Ön koşul: çok dosyalı girdi + kapsama denetim aracı.
      *Oturum 4*

- [ ] **Faz C-B kutu açılışı ve doğrulama** — `BOLGE` genişletilir, üretim koşulur,
      üç değişmez denetlenir. Ön koşul: yerleşim katmanı ve yoğunluk kabulü.
      *Oturum 0*

- [ ] **Kronoloji yoğunlaştırma** — 1453-1923 arası ay ay detay. Yalnız içerik,
      harita etkisi yok. *Oturum 7, yeni `data/olaylar_ek7.js`*

- [ ] **Sınırların Pitcher atlasıyla nokta doğrulaması.**

---

## Zaman ekseni genişlemeden önce

- [ ] **`kesinlik` alanı** — `gun`/`ay`/`yil`/`onyil`/`yuzyil`/`belirsiz`. Bugün gün
      bilinmediğinde `YYYY-01-01` yazılıyor ve kullanıcı gerçekten 1 Ocak sanıyor.
      Geriye gidildikçe çoğu tarih yıl ya da on yıl hassasiyetinde olacak.
      *(VERI-YAPISI'nda şema, YOL-HARITASI Boyut 1)*

- [ ] **Çağ bölmeli zaman çubuğu** — bugünkü çubuk gün indeksli ve doğrusal.
      MÖ 12000'e uzanırsa ~5.1 milyon gün olur, son 200 yıl çubuğun %1.6'sına
      sıkışır. Yoğun dönemde genişleyen, seyrek dönemde daralan bir çubuk gerekir.
      *Oturum 1 ile ortak iş.*

---

## Sonraki fazlar (şimdi kapsamda değil)

- [ ] Tarih çizgisi Z-B: 1923-2026 *(tartışmalı sınır kuralı: YOL-HARITASI Boyut 1)*
- [ ] Tarih çizgisi Z-C: 1000-1288 — Selçuklu, Haçlı devletleri, İlhanlı, Song
- [ ] Tarih çizgisi Z-D, Z-E: MS 0-1000 ve MÖ 600 – MS 0
- [ ] Tarih çizgisi Z-F: MÖ 12000 – MÖ 600 — **ayrı bir katman**, devlet/sınır modeli
      burada uygulanamaz; karar verilmedi
- [ ] Coğrafya fazları C-C … C-F — Orta Asya, Hindistan, Doğu Asya, Sahra altı
      Afrika, Amerika, Okyanusya
- [ ] Devlet kronolojilerinde madde sayısının artırılması (K-2)
- [ ] Kronoloji başlıklarının içinin doldurulması (K-3)
- [ ] Dünya olayları — Osmanlı dışı savaş, antlaşma, olay (O-4)
- [ ] Dünya hükümdarları (P-2)
- [ ] Sanatçılar, filozoflar, bilim insanları (P-3) *(açıkça ertelendi)*
- [ ] Boyut 8 — askerî yapı, siyaset-idare, sosyal-iktisadi yapı, bilim-teknoloji,
      kültür-sanat, din-felsefe 🔒 **kapalı**
- [ ] Görsel detaylar — ordu/donanma sembolleri, isyan işaretleri, savaş detay gösterimi
- [ ] Alan adı kararı *(~10 dk: depo ayarları > Pages > Custom domain)*

---

## Biten işler

- [x] Petek motoruna geçiş — historical-basemaps terk edildi
- [x] 567 yerleşim, 424 dönem, 97 devlet gövdesi
- [x] Kronoloji: 799 madde, tamamı doğrulanmış TDV bağlantılı
- [x] **Değişmez 1** — sahipsiz yerleşim 80'den 29'a; kalan 29 kasten boş
- [x] **Değişmez 2** — 424 harita kırılmasının 424'ü maddeli
- [x] Ada katmanı — 74 nokta; Sardinya, Kefalonya, Girit, Kıbrıs sahte sahiplenmeleri bitti
- [x] Fetret Devri — şehzade payları ayrı ayrı, kırmızı tonlarında
- [x] Sefer güzergâhları menzil yollarına oturtuldu (36 sefer)
- [x] 36/36 padişah portresi (kamu malı, Wikimedia)
- [x] GitHub Pages yayını — https://emrelic.github.io/osmanli-tarih-atlasi/

---

## 🎨 PALET STRATEJİSİ — Asya merge'inden ÖNCE çözülmeli

MOTOR ölçtü (`OTURUM-16-ILERLEME.md §23`): bekleyen dört dosya tarandığında
**24 renklik aday palet 30 kimliğe yetmedi** — `ADAY KALMADI`. Çoğu
`yerlesimler_asya.js`'ten: Majapahit, Edo, Qing, Delhi, Ming, Ainu…

Bugün acil değil çünkü harita penceresi `box(-12, 1.5, 62, 62)` ve Asya dosyası
zaten çizilmiyor. **Ama merge sırası ona geldiğinde iş "birkaç hex daha ekle"
olmayacak.**

Ölçülmüş dayanaklar:
- DSATUR: 261 kimliğin **hepsi** eklense **8 renk** yetiyor (maks derece 72) —
  yani sorun renk SAYISI değil, **ayırt edilebilir hex** sayısı
- Doğru kaldıraç **renk paylaşımı**: hiç aynı anda var olmamış kimlikler aynı
  hex'i kullanabilir. Bugün 5 çift paylaşıyor, hiçbiri komşu değil
- 🔴 Kimlik **birleştirme** yanlış kaldıraç: ölçüldü, DSATUR 4→5'e çıkıyor ve
  "hayalet birleşik devlet" üretiyor (`OGRENILENLER §12`)

Yani çözüm üç yoldan biri: (a) paylaşım havuzunu sistematik büyütmek,
(b) bölgeye göre ayrı palet, (c) doygunluk/parlaklık ekseninde açılım.
**Hangisinin kaç kimlik kazandırdığı ÖLÇÜLMEDEN seçilmemeli.**
