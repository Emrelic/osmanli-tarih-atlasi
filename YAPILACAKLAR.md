# Yapılacaklar

Belge seti: `CLAUDE.md` (nasıl çalışılır) · `YOL-HARITASI.md` (nereye gidiyoruz) ·
**bu belge** (sıradaki işler) · `MIMARI.md` (motor) · `VERI-YAPISI.md` (şemalar).

Öncelik yukarıdan aşağıya. Bir iş bitince kutusunu işaretle ve `CLAUDE.md` §1.5'teki
durum tablosunu güncelle.

---

## Şimdi

- [ ] **Görsel doğrulama turu** — bugüne kadarki bütün denetimler veri düzeyinde
      yapıldı. Haritanın gerçekten nasıl göründüğüne hiç bakılmadı: Macaristan'ın
      şekli, Fetret devri renkleri, ada gövdeleri, son turda eklenen 13 devlet
      renginin birbirine karışıp karışmadığı. *Kullanıcı + Oturum 0*

- [ ] **Devletler dizininin dünya kapsamına çıkarılması** — Eksen 3, aşama D-1 ve
      D-2. Görev tanımı hazır: `oturumlar/OTURUM-3-DEVLETLER.md`. *Oturum 3*

---

## Coğrafi genişlemeden önce bitmesi şart — motor işleri

Dördü de Faz C-B'den önce. Nokta kümesi büyüdükçe bu dönüşümler kat kat pahalılaşır.
Gerekçeler: `MIMARI.md` §3.

- [ ] **Çok dosyalı girdi** — motor `data/yerlesimler_*.js` desenindeki bütün
      dosyaları okusun. Paralel oturumların yerleşim ekleyebilmesinin ön koşulu.
      *(MIMARI §3.3)*

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

## Sonraki fazlar (şimdi kapsamda değil)

- [ ] Zaman ekseni geriye: 1200-1288 — Anadolu Selçuklu, İlhanlı, Haçlı devletleri
- [ ] Zaman ekseni ileriye: 1923-1950
- [ ] Coğrafya fazları C-C … C-F — Orta Asya, Hindistan, Doğu Asya, Sahra altı
      Afrika, Amerika, Okyanusya
- [ ] Devlet kronolojilerinin madde sayısının artırılması (D-3)
- [ ] Kronoloji başlıklarının içinin doldurulması (D-4)
- [ ] Konu eksenleri K-2 … K-7 — askerî yapı, siyaset-idare, sosyal-iktisadi yapı,
      bilim-teknoloji, kültür-sanat, din-felsefe
- [ ] Şahıs ekseni S-2 — dünya hükümdarları
- [ ] Şahıs ekseni S-3 — sanatçılar, filozoflar, bilim insanları *(açıkça ertelendi)*
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
