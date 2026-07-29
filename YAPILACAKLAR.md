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

---

## Coğrafi genişlemeden önce bitmesi şart — motor işleri

Dördü de Faz C-B'den önce. Nokta kümesi büyüdükçe bu dönüşümler kat kat pahalılaşır.
Gerekçeler: `MIMARI.md` §3.

- [ ] **Çok dosyalı girdi** — motor `data/yerlesimler_*.js` desenindeki bütün
      dosyaları okusun. Paralel oturumların yerleşim ekleyebilmesinin ön koşulu.
      *(MIMARI §3.3)*

- [ ] **Motor `kur:` ve `bit:` alanlarını okumuyor** — henüz kurulmamış (ya da
      artık var olmayan) bir yerleşim de petek alıyor ve komşularından toprak
      koparıyor. Kullanıcı bunu Katîf ekran görüntüsünde yakaladı (hatalar
      3.docx madde 8): Basra-Lahsa kıyı zinciri Osmanlı ama arada bir delik var;
      delik **Kuveyt**, çünkü şehir 1716'da kuruluyor ve öncesinde sahibi yok.
      Kayıtta `kur:"1716-01-01"` yazılı — `arac/denetle.py` ve şehir dizini bunu
      okuyor, **`arac/uret_petek.py` okumuyor.**
      Doğru çözüm: kurulmamış peteği o dönem için en yakın SAHİPLİ komşuya
      bağışlamak — ADA KURALI'nın kullandığı makinenin aynısı. Aynı sorun `kur:`
      taşıyan bütün noktalarda var ve Kuzey-Doğu Avrupa partisiyle (Petersburg
      1703, Odessa 1794, Harkov 1654, Göteborg 1621) belirgin şekilde büyüyecek —
      **o merge'den ÖNCE yapılmalı.**

- [ ] **Zaman dilimli Voronoi + `bit:` alanı** — bugün diyagram bütün tarih için bir
      kez hesaplanıyor; 1869'da kurulan şehir 1300'ün haritasını değiştiriyor. `kur:`
      alanı veride var ama motor onu hiç kullanmıyor. *(MIMARI §3.1)*
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
