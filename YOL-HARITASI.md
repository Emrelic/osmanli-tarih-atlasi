# Yol Haritası — yedi boyut

Belge seti: `CLAUDE.md` (nasıl çalışılır) · **bu belge** (nereye gidiyoruz) ·
`YAPILACAKLAR.md` (sıradaki işler) · `MIMARI.md` (motor ve teknik borç) ·
`VERI-YAPISI.md` (alan sözlüğü).

---

## Proje yedi boyutta genişler

Atlas tek bir faz listesiyle değil, **yedi boyutta** büyür. Her boyutun kendi
fazları, kendi hızı ve kendi durma noktası vardır.

| # | Boyut | Nedir | Bugün nerede |
|---|---|---|---|
| **1** | **Tarih çizgisi** | Hangi zaman aralığı, hangi hassasiyetle | 1288-1923, gün hassasiyetinde ✅ |
| **2** | **Coğrafi kapsam** | Haritanın hangi bölgeleri çizdiği | Osmanlı kutusu ✅, Faz C-B sırada |
| **3** | **Devletler** | Kimler vardı — liste, tür, aralık, başkent | 77 dizin / 97 harita kaydı 🟡 |
| **4** | **Devlet kronolojileri** | Her devletin kendi tarihi | Osmanlı tam, diğerleri başlıyor 🟡 |
| **5** | **Yerleşimler ve bölgeleri** | Haritanın coğrafi çekirdeği | 567 nokta, 424 dönem ✅ |
| **6** | **Kişiler** | Hükümdarlar, devlet adamları, komutanlar | 41 padişah + 90 kişi ✅ |
| **7** | **Olaylar** | Kronoloji, savaşlar, antlaşmalar, seferler | 799 madde + 108/30/36 ✅ |
| *(8)* | *Konu başlıkları* | *Askerî, sosyal, bilim, kültür, din, felsefe* | 🔒 **kapalı** |

> **Kapsam disiplini:** Şu anda konumuz **devletler ve sınırlarıdır.**
> 8. boyut (askerî yapı, sosyal yapı, bilim-teknoloji, kültür-sanat, felsefe, din)
> **kasten kapalıdır.** Bir oturum oraya girmeye kalkarsa kapsamı aşıyor demektir.

### Boyut ≠ index
Yedi boyut projenin **neyi büyüteceğini** söyler. Verinin **nasıl örgütleneceği**
ayrı bir konudur: beş index — tarih, coğrafi bölge, devletler, olaylar, yerleşimler.
Kişiler ve devlet kronolojileri ayrı index değildir; devletler ve olaylar index'lerine
bağlanırlar. Index yapısı, çağ dilimlemesi ve zamanlı yerleşim index'i:
`MIMARI.md` §6.7.

### Boyutlar arası bağımlılık

```
1 Tarih çizgisi ──┐
                  ├──> 5 Yerleşimler ──> 2 Coğrafi kapsam ──> (8) Konular
Motor işleri ─────┘         ^                    │
                            │                    v
                  3 Devletler ──> 4 Kronolojiler ──> 6 Kişiler
                                        │
                                        v
                                    7 Olaylar
```

- **5 (yerleşimler)** haritanın çekirdeğidir; **2 (kapsam)** onun sonucudur.
  Nokta yoksa kutuyu açmak yalnız hata üretir.
- **3 → 4 → 6/7** sırası zorunludur: devlet listesi olmadan kronoloji, kronoloji
  olmadan kişi ve olay bağlanamaz.
- **3 ve 4, harita boyutlarından bağımsız ilerleyebilir** — devlet listesi yazmak
  haritayı etkilemez. Bu yüzden Oturum 3 hemen başlayabilir.
- **Motor işleri** (`MIMARI.md` §3) hem 1 hem 2'nin ön koşuludur.

---

## Boyut 1 — Tarih çizgisi

**Nihai ufuk: MÖ 12000 – MS 2026.** Bugünkü odak 1288-1923; eksen iki yöne açılır.

### Veri yoğunluğu zaman boyunca sabit değil
Bu, atlasın en belirleyici tasarım gerçeğidir. Zaman çizgisi düz değil, **öne doğru
kalınlaşan bir huni**:

| Aralık | Süre | Veri durumu |
|---|---|---|
| MÖ 12000 – MÖ 600 | **11 400 yıl** | Çok az veri. Devlet değil, kültür ve yerleşim ufku |
| MÖ 600 – MS 0 | 600 yıl | Devletler netleşir: Pers, Yunan, Roma, Çin, Hint |
| MS 0 – 1000 | 1000 yıl | Orta yoğunluk |
| 1000 – 1500 | 500 yıl | Yoğunluk artar |
| 1500 – 1800 | 300 yıl | Yüksek; dünyanın büyük bölümü kayıt altında |
| 1800 – 2026 | 226 yıl | **En yoğun** — gün hassasiyetinde, dünyanın tamamı |

İlk dilim atlasın toplam süresinin **%81'i** ama verisinin belki %1'i. Son 226 yıl
sürenin %1.6'sı, verinin büyük bölümü.

### Yoğunluk yalnız zamana değil coğrafyaya da bağlı
1000 yılında Avrupa, Ortadoğu, Çin ve Hindistan için ayrıntılı siyasi veri vardır;
Amerika, Kuzey Asya, Avustralya ve Sahra altı Afrika için aynı tarihte neredeyse
yoktur. **Aynı anda haritanın bir yarısı gün hassasiyetli, öbür yarısı boş** olabilir.
Bu bir eksiklik değil, kaydın gerçeğidir; `MIMARI.md` §6'daki `bos:"veri-yok"` ayrımı
tam olarak bunu dürüstçe göstermek içindir.

### Fazlar

| Faz | Aralık | Durum |
|---|---|---|
| **Z-A** | 1288-1923 | ✅ tamam — gün hassasiyetinde |
| **Z-B** | 1923-2026 | ⏸ ileriye; Cumhuriyet, ardıl devletler, modern dünya |
| **Z-C** | 1000-1288 | ⏸ geriye; Selçuklu, Haçlı devletleri, İlhanlı, Song, Fâtımî |
| **Z-D** | MS 0 – 1000 | ⏸ Roma, Sâsânî, Bizans, Emevî-Abbâsî, Tang, Gupta |
| **Z-E** | MÖ 600 – MS 0 | ⏸ Pers, Makedonya, Roma Cumhuriyeti, Han, Maurya |
| **Z-F** | MÖ 12000 – MÖ 600 | ⏸ **ayrı bir katman** — aşağı bak |

### ⚠️ MÖ 600 öncesi ayrı bir katmandır, aynı model değildir
O dönemde "devlet ve sınır" çoğu yerde anlamlı bir kategori değildir. Eldeki veri
arkeolojiktir: kültür bölgeleri, yerleşim ufukları, tarımın ve şehrin yayılışı.
Bunları devlet gibi göstermek **uydurma sınır** üretir. Z-F açılırsa mevcut
petek/sahiplik modeli değil, ayrı ve daha bulanık bir gösterim gerekir. Karar
verilmedi; Z-E'den önce açılmaz.

### ⚠️ Z-B'nin kendine özgü zorluğu
1923-2026 aralığı teknik olarak kolay, **içerik olarak hassastır**: hâlâ tartışmalı
sınırlar, tanınma sorunları ve fiilî-hukukî denetim ayrımları var. Kural: kaynağı
gösterilebilen fiilî idari durum çizilir, tartışmalı alan **tartışmalı olarak**
işaretlenir; tek taraflı bir iddia sessizce harita gerçeği hâline getirilmez.

### Hassasiyet geriye gittikçe düşer — ve bu görünür olmalı
Bugün gün bilinmediğinde `YYYY-01-01` yazılıyor. Doğru bir yazım ama **kullanıcı
1 Ocak gördüğünde gerçekten 1 Ocak sanıyor.** Çözüm: `kesinlik` alanı
(`gun`/`ay`/`yil`/`onyil`/`yuzyil`/`belirsiz`) ve arayüzde gösterimi — "~MÖ 550",
"1427 civarı". Şema: `VERI-YAPISI.md`.

### ⚠️ 14 000 yıllık zaman çubuğu doğrusal olamaz
Bugünkü çubuk gün indekslidir; 1281-1923 arası ~235 000 gün. MÖ 12000'e uzanırsa
~5.1 milyon gün olur ve doğrusal bir kaydırıcıda son 200 yıl çubuğun %1.6'sına
sıkışır — kullanılamaz. Çubuk **çağ bölmeli** ya da logaritmik olmalı; yoğun
dönemlerde genişlemeli, seyrek dönemlerde daralmalı. Boyut 1 genişlemeden önce
çözülmesi gereken bir arayüz işidir.

---

## Boyut 2 — Coğrafi kapsam

Osmanlı çekirdeğinden dışarı doğru, **bölge bölge**. Her bölge kendi içinde
tamamlanmadan bir sonrakine geçilmez.

> **Yarım kalmış bir bölge, hiç eklenmemiş bir bölgeden daha kötüdür** — çünkü
> `MIMARI.md` §2'deki emilme davranışı yüzünden aktif olarak yanlış bilgi üretir.

| Faz | Kapsam | Durum |
|---|---|---|
| **C-A** | Osmanlı çekirdeği — Anadolu, Rumeli, Ege, Suriye-Irak, Hicaz-Yemen, Mısır, Kuzey Afrika, Macaristan, Kafkasya, Karadeniz kuzeyi | ✅ `box(-12, 1.5, 62, 62)` |
| **C-B** | **İlgi alanı** — Avrupa'nın tamamı, Kuzey Afrika ve Sahra üstü, Doğu Afrika (Habeşistan, Somali, Svahili kıyısı), Ortadoğu, İran, Kafkasya, Doğu Avrupa ve bozkır | 🔜 hedef `box(-20, -12, 75, 72)` |
| **C-C** | Orta Asya ve Hindistan | ⏸ |
| **C-D** | Doğu ve Güneydoğu Asya — Çin, Kore, Japonya, Tibet, Moğolistan, Majapahit, Ayutthaya, Đại Việt | ⏸ *Çin, Japonya ve Hindistan için 1288'de bile zengin veri var; C-B'ye yakın yoğunluk* |
| **C-E** | Sahra altı Afrika | ⏸ *veri seyrek; `veri-yok` kuralı en çok burada işler* |
| **C-F** | Amerika, Sibirya, Okyanusya | ⏸ *1288'de çoğu için tarihî yerleşim verisi yok denecek kadar az* |

### Bir coğrafya fazının iş akışı (her faz için aynen tekrarlanır)

1. **Devlet listesi** — o bölgenin devletleri `devletler.js`'e girer *(Boyut 3)*
2. **Yerleşim listesi** — `yerlesimler_<bolge>.js` yazılır *(Boyut 5)*
3. **Yoğunluk kabulü** — `MIMARI.md` §5'teki kapsama testi geçilir
4. **Kutu açılır** — `BOLGE` genişletilir, üretim koşulur
5. **Değişmez denetimi** — `CLAUDE.md` §3'teki üç denetim temiz çıkmalı
6. **Görsel doğrulama** — kullanıcı haritaya bakar; bulduğu hatalar sonraki turun girdisi
7. **Kronoloji** — o bölgenin devlet kronolojileri başlık düzeyinde yazılır *(Boyut 4)*

**Adım 4, adım 3 geçilmeden yapılmaz.** Kutuyu erken açmak, mevcut peteklerin boş
coğrafyaya yayılması demektir.

---

## Boyut 3 — Devletler

| Aşama | Nedir | Durum |
|---|---|---|
| **D-1** | Devlet listesi: id, ad, tür, aralık, başkent, özet | 77 kayıt → dünya 🟡 |
| **D-2** | Harita kimliğiyle eşleşme (`harita:` alanı) | ⏸ |

Görev tanımı: `oturumlar/OTURUM-3-DEVLETLER.md`.

### Çözülmesi gereken: dizin ↔ harita kimlik ayrışması
Devlet kimliği iki yerde tutuluyor ve ikisi birbirini tutmuyor: `data/devletler.js`
(**77 kayıt**) ile `uret_petek.py` içindeki `BOYALAR` (**97 kayıt**). Dizinde
`habsburg` / haritada `avusturya`, dizinde `cenova` / haritada `ceneviz`, dizinde
`yemen-zeydi` / haritada `yemen`… Haritada olup dizinde hiç karşılığı olmayan
**53 devlet** var. Çözüm: `devletler.js` kayıtlarına `harita:"<BOYALAR id>"` alanı;
mevcut `id`'ler değiştirilmez.

### Devlet şablonu — Osmanlı için kurulan yapı diğerlerine uygulanır
Osmanlı katmanı bir prototip değil, **çoğaltılabilir bir şablondur**. Bir devlet
"tamamlanmış" sayılmak için şu altı parçaya sahip olmalıdır:

| # | Parça | Boyut | Osmanlı'da karşılığı |
|---|---|---|---|
| 1 | Yerleşim kümesi | 5 | 567 nokta |
| 2 | Sahiplik zinciri | 5 | `s`/`d`/`v` ile gün gün |
| 3 | Kronoloji | 4, 7 | 799 madde |
| 4 | Hükümdar dizisi | 6 | 41 padişah, portreleriyle |
| 5 | Savaş ve antlaşma bağları | 7 | 108 savaş, 30 antlaşma, 36 sefer |
| 6 | **Değişmez denetimi** | — | Sahipsizlik yok · sessiz değişim yok · dört boyut çelişmez |

Yeni devlet eklenirken sıra aynıdır ve **6. adım atlanmaz**: denetimden geçmemiş bir
devlet katmanı, yanlış bilgi üreten bir katmandır. Ayrıntı düzeyi devletten devlete
değişebilir — Fransa'ya Osmanlı kadar derinlik gerekmez — ama **altı parçanın hepsi
bir düzeyde bulunmalıdır.**

---

## Boyut 4 — Devlet kronolojileri

**Önce kapsam, sonra derinlik.** 300 devletin başlık kronolojisi, 40 devletin
ayrıntılı kronolojisinden kıymetlidir.

| Aşama | Nedir | Durum |
|---|---|---|
| **K-1** | Başlık düzeyinde kronoloji: kuruluş, dönüm noktaları, son | Osmanlı tam 🟡 |
| **K-2** | Madde sayısının artırılması — her devlet için daha yoğun başlık | ⏸ |
| **K-3** | Başlıkların içinin doldurulması — gün/yer/kişiler + anlatım + kaynak | ⏸ |

K-3'e, K-1 bir bölge için **tamamlanmadan** geçilmez.

---

## Boyut 5 — Yerleşimler ve bölgeleri

Haritanın coğrafi çekirdeği; bütün geometri buradan üretilir. Bugün 567 nokta,
hedef dünya ölçeğinde 4000-6000.

| Aşama | Nedir | Durum |
|---|---|---|
| **Y-1** | Osmanlı çekirdeğinin yerleşimleri | ✅ 567 nokta |
| **Y-2** | Çok dosyalı girdi — `yerlesimler_*.js` | ⏸ motor işi |
| **Y-3** | Zamanlı yerleşim — `kur:`/`bit:` ve zaman dilimli Voronoi | ⏸ motor işi |
| **Y-4** | Zamanlı idari kademe — `k`/`m` yerine `kd:` | ⏸ motor işi |
| **Y-5** | Faz C-B yerleşimleri | ⏸ |

### Dört boyutun buluştuğu yer
Yerleşim boyutu tek başına değil, **tarih × yerleşim × petek × bölge** dörtlüsüyle
anlamlıdır: *herhangi bir tarihte, herhangi bir bölgede hangi yerleşimler var ve
kime aitler* sorusunun tek tutarlı cevabı olmalıdır. Bu `CLAUDE.md`'deki
**Değişmez 3**'tür ve `k`/`m`'nin zamansızlığı yüzünden bugün sağlanmıyor —
ölçüldü: **311 yerleşim-tarih çiftinde yerleşim ile merkezi farklı devletlerin
elinde.** Ayrıntı: `MIMARI.md` §3.4 ve §4.

---

## Boyut 6 — Kişiler

| Aşama | Kapsam | Durum |
|---|---|---|
| **P-1** | Osmanlı — padişahlar, sadrazamlar, komutanlar, denizciler | ✅ 41 + 90 kayıt |
| **P-2** | Dünya hükümdarları — Boyut 3'teki devletlerin başındakiler | ⏸ |
| **P-3** | Sanatçılar, filozoflar, bilim insanları | ⏸ **açıkça ertelendi** |

P-2, Boyut 4'ün K-1 aşaması dünya kapsamında tamamlandıktan sonra anlamlı olur.

---

## Boyut 7 — Olaylar

Kronoloji maddeleri (`olaylar*.js`), savaşlar, antlaşmalar, savaş serileri ve sefer
güzergâhları (`savaslar.js`).

| Aşama | Nedir | Durum |
|---|---|---|
| **O-1** | Osmanlı olay akışı — 799 madde, tamamı doğrulanmış TDV bağlantılı | ✅ |
| **O-2** | Harita senkronu — her kırılmanın ±30 gün içinde maddesi | ✅ 424/424 |
| **O-3** | Ay ay yoğunlaştırma, 1453-1923 | ⏸ Oturum 7 |
| **O-4** | Dünya olayları — Osmanlı dışı savaş, antlaşma, olay | ⏸ |

O-2, **Değişmez 2**'dir ve her veri değişikliğinden sonra denetlenir.

---

## Boyut 8 — Konu başlıkları 🔒 KAPALI

| Faz | Konu |
|---|---|
| T-1 | **Devletler ve sınırlar** — ✅ tek aktif konu |
| T-2 | Askerî yapı — ordu düzeni, kale hatları, menzil yolları |
| T-3 | Siyaset ve idare — eyalet düzeni, kurumlar, antlaşma rejimleri |
| T-4 | Sosyal ve iktisadi yapı — nüfus, ticaret yolları, üretim, vergi |
| T-5 | Bilim ve teknoloji |
| T-6 | Kültür, sanat, mimari |
| T-7 | Din ve felsefe |

Her biri hem veri hem arayüz katmanı gerektirir; her biri kendi başına bir projedir.
**Erken açılmaz.**

---

## Devlet merkezli görünüm — bütün boyutları kesen tasarım

Harita bir **odak devleti** üzerinden açılır ve yalnız o devletin ilgi alanının
verisi yüklenir: Türkiye'ye bakılırsa Türkiye ve çevresi, İngiltere'ye bakılırsa
Kanada, Hindistan, Avustralya, Hong Kong, Kıbrıs — Moğolistan ve Peru değil.

Bu yalnız harita boyutunu değil **hepsini** keser: kronoloji o devlete göre süzülür,
kişiler o devletin adamları olur, olaylar onun olayları olur, komşu devletler ona
göre konumlanır.

Teknik tasarım — parçalama, manifest ve ilgi bağlarının **veriden türetilmesi**:
`MIMARI.md` §6.5. Kritik nokta: devlet başına paket yapılmaz (Kıbrıs hem Osmanlı hem
İngiltere paketinde tekrarlanır); veri parçaları ortak, yükleme listesi devlete özeldir.

---

## Bilinen riskler

- **Çıktı boyutu** (`MIMARI.md` §3.2) — çözülmezse dünya kapsamı teknik olarak
  imkânsız. Çözüm ikili: geometri tekrarının kaldırılması + devlet merkezli parçalı
  yükleme (§6.5). İkincisi olmadan birincisi tek başına yetmez.
- **Üretim süresi** — bugün ~15 dakika. Zaman dilimli Voronoi ve 8 kat yerleşim bunu
  saatlere çıkarabilir; epok bazlı önbellek gerekebilir.
- **Zaman çubuğu** — 14 000 yıllık doğrusal kaydırıcı kullanılamaz (Boyut 1).
- **Kaynak dengesizliği** — Avrupa ve İslâm dünyası için gün hassasiyetli veri var;
  Sahra altı Afrika ve Amerika için on yıl hassasiyeti bile zor. `kesinlik` alanı
  bunu taşımalı.
- **Kapsam kayması** — Boyut 8'in erken açılması en olası kayma yönüdür.
- **Ad ve kimlik** — site "Osmanlı Tarih Atlası" adıyla yayında; dünya kapsamı
  olgunlaştığında ad, ana sayfa metni ve varsayılan görünüm yeniden düşünülmeli.
