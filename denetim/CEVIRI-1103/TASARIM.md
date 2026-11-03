# CEVIRI-1103 — Çok dilli site: tasarım

Emre'nin 6. maddesi. Görev: EMRELİC 1 KASIM → KASA SALI, 3 Kasım 2026. Dal: `kasa-1103-ceviri`
(main'e Emre siteye bakıp onaylayınca girer). Kararları gece Emre'ye ulaşılamadığı için oturum
verdi (Emre'nin yetkisi: "en bilimsel, akademik ve mantıklı seçeneğe göre karar ver"); her
kararın gerekçesi aşağıda.

## 1. İlke: kaynak dil Türkçe, çeviri Türkçenin gölgesi

- Bütün veri Türkçe yazılmaya devam eder; hiçbir veri dosyasının biçimi değişmez.
- Çeviri ayrı dosyalarda durur: `data/ceviri_<dil>_<tür>[_NN].js`. Veri yazan oturum çeviriyi
  bilmek zorunda değildir.
- Her çeviri kaydı şunları taşır: **madde id**, **dil** (dosya düzeyinde), **metin** ve
  **kaynak_ozet**. kaynak_ozet, çevrildiği andaki Türkçe metnin FNV-1a 32 özetidir (UTF-8, 8 hane).
- **Bayatlık:** Türkçe metin değişince özet tutmaz. Site o alanda Türkçeyi gösterir, yani yanlış
  ya da eski bir çeviri hiç görünmez. `py arac/ceviri.py bayat` yalnız bayat ve eksik kayıtları
  çıkarır, böylece düzeltme, ekleme ve çıkarma işleri bütün dillere kendiliğinden "yeniden
  çevir" listesi olarak düşer. Site bitmeden çeviriye başlanabilir.
- Neden FNV-1a 32: tarayıcıda eşzamanlı ve bağımlılıksız hesaplanır (SubtleCrypto eşzamansızdır,
  `olaylar` app.js'te eşzamanlı kurulur). 4.717 madde × 2 alan ≈ 1,5 MB metin, birkaç on ms sürer.
  Çakışma olasılığı aynı id içinde 2⁻³²'dir; id ile birlikte kullanıldığı için pratikte sıfırdır.
  Python (`arac/ceviri.py ozet`) ile JS (`js/ceviri.js ozet`) birebir aynıdır.

## 2. Madde kimliği

Kronoloji maddelerinin kalıcı `id` alanı yok. Elle yazılan ~130 dosyaya id basmak, KASA PAZAR'ın
veri dosyalarına dokunmak demekti (yasak), bu yüzden id türetildi:

    <dizi adı>:<t>:<aynı dizide aynı t'nin kaçıncısı>      ör. OLAYLAR_EK5:1453-05-29:0

- Kayma güvenliği: araya aynı `t`'li yeni bir madde girerse id kayabilir. Bu durumda özet
  tutmaz, ama site **özet dizininden** (aynı Türkçe metnin çevirisi başka id'de duruyorsa) doğru
  çeviriyi yine bulur. Bulamazsa Türkçe gösterir. Hiçbir durumda başka maddenin çevirisi
  görünmez, çünkü eşleşme Türkçe metnin özetine bağlıdır.
- Devlet: `devletler.js` `id`. Arayüz: Türkçe metnin kendisi (rakamlar `#` şablonu, aşağıda).

## 3. Kayıt biçimi ve dosya düzeni

```
data/ceviri_dizin.js                 her zaman yüklenir (küçük): diller + dil başına dosya listesi
data/ceviri_en_arayuz.js             { "<türkçe>": ["<metin>", "<ozet>"] }
data/ceviri_en_devlet.js             { "<devlet id>": ["<ad>", "<ozet>"] }
data/ceviri_en_olay_01.js …          { "<madde id>": {"b": ["<metin>","<ozet>"], "d": [...]} }
```

Her dosya `Ceviri.ekle("<dil>","<tür>",{…});` çağrısıdır: tarayıcı doğrudan koşturur, Python
JSON olarak okur. Olay dosyaları ~400 KB'de bölünür. Dosya sürümü `ceviri_dizin.js`teki içerik
özetidir (önbellek kırma). Bu dosyalar `paketle.py` paketlerine girmez, çünkü tembel yüklenirler.

## 4. Sitede akış (js/ceviri.js)

1. Dil seçimi şu sırayla yapılır: `?dil=xx` > `localStorage.dil` > `tr`. `?dil=` kalıcı olur;
   `?dil=tr` ile geri dönülür.
2. **Tembel yükleme:** dil Türkçe değilse yalnız o dilin dosyaları `document.write` ile app.js'ten
   ÖNCE araya girer. Türkçe okuyan hiçbir çeviri baytı indirmez. Dil değiştirmek sayfayı yeniler,
   çünkü `olaylar` sayfa boyunca sabit bir dizidir (app.js'teki `var olaylar` kuruluşu) ve yarı
   yolda yeniden kurulamaz.
3. `Ceviri.uygula()` OLAYLAR* dizilerindeki `b`/`d` ile DEVLETLER `ad` alanını yerinde çevirir;
   Türkçe asıl `b_tr`/`d_tr`/`ad_tr` alanında kalır. Başlıkla eşleştiren kodlar (antlaşma,
   muharebe, ittifak, isyan taraması, antlaşma haritası, geliştirici notu) `o.b_tr || o.b` ile
   Türkçeye bakar. Geliştirici notları her dilde Türkçe başlıkla kaydedilir.
4. **Arayüz sözlüğü:** 19.500 satırlık app.js'teki her dizgiyi `t()` çağrısına çevirmek binlerce
   satır demekti ve KASA PAZAR'ın sürdürdüğü koda büyük bir çatışma yüzeyi açardı. Bunun yerine
   sözlük DOM'da uygulanır: metin düğümleri ile title/placeholder/aria-label nitelikleri,
   kırpılmış Türkçe anahtarla eşlenir. Rakam dizileri `#` şablonudur ("12 madde" → "# madde" →
   "12 entries"). Sonradan eklenen öğeleri MutationObserver yakalar. `data-ceviri-yok` niteliği
   bir alt ağacı dışarıda bırakır. Sözlük adayları `arac/ceviri_cikar.js` ile index.html ve
   js/*.js'ten çıkarılır. Eksik kalanları görmek için `?dil=en&ceviri_topla=1` açılıp konsolda
   `Ceviri.eksikler()` çağrılır.
   - Bilinen sınır: birleştirilerek kurulan cümleler ("x + ' ile ' + y") parça parça eşlenir ya da
     eşlenmez. Bunlar topla kipiyle bulunup sözlüğe şablon olarak eklenir.
5. Dil seçici üst çubukta, ⇥ Panel düğmesinin sağındadır. Yalnız en az bir çeviri dosyası olan
   diller görünür; tek dil (tr) varsa seçici hiç çıkmaz.

## 5. Betik (arac/ceviri.py)

```
py arac/ceviri.py durum  [--dil en]                    tamam / bayat / eksik / yetim
py arac/ceviri.py bayat  --dil en --tur olay --cikti is.json [--sinir 150] [--atla N]
py arac/ceviri.py uygula --dil en --is is.json --girdi cevap.json
py arac/ceviri.py yaz    [--dil en]                    yeniden böl + ceviri_dizin.js
py arac/ceviri.py temizle --dil en                     Türkçesi silinmiş (yetim) kayıtları at
```

- Türkçe metni sitenin gördüğü gibi çıkarır: `arac/ceviri_cikar.js` (Node), index.html'deki
  `data/*.js` betiklerini sanal pencerede koşturur. Böylece çevrilen evren ile sitenin gösterdiği
  evren aynıdır (yüklenmeyen dosya çevrilmez). Node yoksa çıkış 2'dir (ölçülemedi).
- `uygula` özeti, girdideki `kaynak` alanından, yani çevirmene giden Türkçeden alır. Arada Türkçe
  değiştiyse kayıt doğduğu anda bayattır; bu doğru davranıştır.
- Çevirmen: Sonnet alt ajan (görev kuralı: en çok 1 ajan, Haiku yok). Talimat dosyası
  `denetim/CEVIRI-1103/CEVIRMEN.md`.

## 6. Ad yazımı (karar)

**Ölçü, hedef dildeki yerleşik akademik addır;** popüler ad ya da Türkçe adın harf çevirisi
değildir.

- İngilizce ölçüsü: *Cambridge History of Turkey*, *Encyclopaedia of Islam THREE*, *Oxford
  Dictionary of Byzantium*. Gerekçe: bu üçü Osmanlı, İslâm dünyası ve Bizans için İngilizce
  akademik yazımın başvuru eserleridir ve TDV'nin İngilizce muadilidir.
- Dönem adı: 1453 öncesi Bizans bağlamında Constantinople, Osmanlı dönemi Istanbul (metin
  "Kostantiniyye" diyorsa Constantinople). Edirne/Adrianople da aynı mantıkla.
- Osmanlı özel adları ve kurumları sade akademik transliterasyonla yazılır: Mehmed II, Bayezid,
  beylerbeyi, timar, devşirme; yerleşmiş İngilizce karşılığı olanlar karşılıkla: grand vizier,
  Janissary.
- Emin olunamayan adda modern Türkçe yazım korunur; ad uydurulmaz. Kaynak kuralıyla uyumludur:
  çeviri yeni bilgi üretmez.
- Sıradaki diller için aynı ilke geçerlidir: Arapçada *Dâ'irat al-Ma'ârif al-Islâmiyya*
  geleneği ve Arap tarih yazımındaki yerleşik adlar (القسطنطينية / إسطنبول, الدولة العثمانية),
  Almancada Brockhaus ve akademik Osmanistik yazımı (Konstantinopel, Mehmed II.) vb.
  Dil başına ölçü `CEVIRMEN.md`ye eklenir.

## 7. Dil sırası (karar)

Pilot İngilizce. Sonrası görevdeki sıradır: Arapça, İspanyolca, Fransızca, Rusça, Çince, Hintçe,
Portekizce, Almanca, Japonca, Farsça, İtalyanca, Korece, Lehçe, Felemenkçe, Yunanca, sonra
ötekiler. Sıra konuşur sayısı ile Osmanlı tarih yazımındaki ağırlığın karışımıdır. Arapça ikinci
sıradadır, çünkü Osmanlı coğrafyasının büyük kısmının dilidir.

- **Sağdan sola diller (Arapça, Farsça):** pilotta `dir="rtl"` sayfa geneline basılmaz, çünkü
  harita ve panel düzeni soldan sağa kuruludur ve bütün sayfayı çevirmek düzeni bozar. Çeviri
  metni taşıyan öğelere (`#olay-listesi`, madde paneli) `dir="auto"` uygulanacaktır. Bu iş Arapça
  aşamasında yapılır.

## 8. Kapsam ve bilinen sınırlar (pilot)

- Çevrilenler: arayüz sözlüğü, devlet adları (`DEVLETLER.ad`), çekirdek kronoloji (`OLAYLAR*`,
  sitenin yüklediği 4.717 madde; başlık `b` + detay `d`).
- Çevrilmeyenler (sonraki iş): haritanın kendi etiketleri (MapLibre katmanı üretilmiş veriden
  okur), padişah/kişi/şehir adları, künye kronolojileri (`kronoloji*.js`), sınır kronolojisi
  (`kronoloji_sinir*.js`), ek okumalar, `yer`/`kisiler` alanları. Yer ve kişi alanları özel ad
  listesidir; ad sözlüğü (yer adı → akademik ad) ayrı bir iştir.
- Değişmez 2 evrenine dokunulmadı: çeviri yalnız görüntü katmanıdır. denetle.py veri dosyalarını
  okur, çeviri dosyalarını okumaz.
