# Yol Haritası — beş eksen

Belge seti: `CLAUDE.md` (nasıl çalışılır) · **bu belge** (nereye gidiyoruz) ·
`YAPILACAKLAR.md` (sıradaki işler) · `MIMARI.md` (motor ve teknik borç) ·
`VERI-YAPISI.md` (alan sözlüğü).

---

## Proje beş eksende genişler

Atlas tek bir "faz" listesiyle değil, **beş bağımsız eksende** büyür. Her eksenin
kendi fazları, kendi hızı ve kendi durma noktası vardır. Bir eksende ilerlemek
diğerini beklemez — ama Eksen 2 (coğrafya) Eksen 1'e (zaman) ve motorun hazır
olmasına bağlıdır.

| Eksen | Nedir | Bugün nerede |
|---|---|---|
| **1. Zaman** | Hangi tarih aralığı | 1288-1923 ✅ |
| **2. Coğrafya** | Haritada hangi bölgeler | Osmanlı kutusu ✅, Faz B sırada |
| **3. Devletler ve kronolojileri** | Kimler var, ne yaptılar | Osmanlı tam, dünya başlıyor |
| **4. Konu başlıkları** | Neyi anlatıyoruz | **Yalnız devletler ve sınırlar** |
| **5. Şahıslar** | Kimleri anlatıyoruz | Osmanlı için 90 kişi; genişleme ertelendi |

> **Kapsam disiplini:** Şu anda konumuz **yalnızca devletler ve sınırlarıdır.**
> Askerî yapı, sosyal yapı, bilim-teknoloji, kültür-sanat, felsefe, din ve şahıs
> maddeleri **sonraki fazların işidir**. Bir oturum bunlara girmeye kalkarsa
> kapsamı aşıyor demektir.

---

## Eksen 1 — Zaman

**Odak: 1288-1923.** Atlas fiilen 1281'de başlıyor (Ertuğrul Gazi'nin ölümü ve
Osman Bey'in beyliğe geçişi); 1288 ilk şehir fethinin (Karacahisar) yılıdır ve
yerleşim verisinin anlamlı hâle geldiği tarihtir.

| Faz | Aralık | Durum |
|---|---|---|
| **Z-A** | 1288-1923 | ✅ tamam — gün hassasiyetinde |
| **Z-B** | 1200-1288 | ⏸ geriye genişletme; Anadolu Selçuklu, İlhanlı, Haçlı devletleri |
| **Z-C** | 1923-1950 | ⏸ ileriye genişletme; Cumhuriyet ve ardıl devletler |
| **Z-D** | 1200 öncesi | ⏸ çok ileri faz; kapsam kararı verilmedi |

Zaman ekseni genişlerken **hassasiyet düşer**: 1288 öncesi için gün hassasiyeti
çoğu yerde imkânsızdır. `YYYY-01-01` yazımı bunu taşır; uydurma gün yazılmaz.

---

## Eksen 2 — Coğrafya

Osmanlı çekirdeğinden dışarı doğru, **bölge bölge**. Her bölge kendi içinde
tamamlanmadan bir sonrakine geçilmez.

> **Yarım kalmış bir bölge, hiç eklenmemiş bir bölgeden daha kötüdür** — çünkü
> `MIMARI.md` §2'deki emilme davranışı yüzünden aktif olarak yanlış bilgi üretir.

### Faz C-A — Osmanlı çekirdeği ✅ TAMAM
Anadolu, Rumeli, Ege, Suriye-Irak, Hicaz-Yemen, Mısır, Kuzey Afrika, Macaristan,
Kafkasya, Karadeniz kuzeyi. 567 yerleşim, 424 dönem, 97 devlet.
Kutu: `box(-12, 1.5, 62, 62)`

### Faz C-B — İlgi alanı 🔜 SIRADAKİ
Kullanıcının tanımladığı asıl çalışma alanı:
- **Avrupa'nın tamamı** — Batı, Orta, Kuzey, İber, İtalya, Britanya, İskandinavya
- **Kuzey Afrika ve Sahra üstü** — Fas'tan Mısır'a, Sahra vahaları dahil
- **Doğu Afrika** — Habeşistan, Somali, Svahili kıyısı, Zengibar
- **Ortadoğu'nun tamamı**, İran, Kafkasya
- **Karadeniz kuzeyi ve Doğu Avrupa** — Rusya, Lehistan-Litvanya, bozkır hanlıkları

Hedef kutu: yaklaşık `box(-20, -12, 75, 72)`

### Faz C-C — Orta Asya ve Hindistan
Buhara, Hîve, Hokand, Kazak bozkırı, Doğu Türkistan; Delhi sultanlıkları, Dekken,
Vijayanagara, Babür, Maratha, Sih, İngiliz Hindistanı.

### Faz C-D — Doğu ve Güneydoğu Asya
Çin, Kore, Japonya, Tibet, Moğolistan; Majapahit, Malakka, Ayutthaya, Đại Việt,
Birmanya, Açe, Filipinler.
*Not:* Çin, Japonya ve Hindistan için 1288'de bile **zengin ve güvenilir veri
vardır**; bu faz kayıt yoğunluğu bakımından Faz C-B'ye yakındır.

### Faz C-E — Sahra altı Afrika
Mali, Songhay, Kanem-Bornu, Hausa, Sokoto, Aşanti, Dahomey, Benin, Oyo, Kongo,
Lunda, Buganda, Büyük Zimbabve, Zulu, Merina.
*1288 için veri seyrektir;* `MIMARI.md` §6'daki "veri yok" kuralı en çok burada işler.

### Faz C-F — Amerika, Sibirya, Okyanusya
Aztek, İnka, Maya; sömürge idareleri, bağımsızlık sonrası cumhuriyetler; Sibirya
hanlıkları ve Rus ilerleyişi; Hawaii, Tonga, Maori, Avustralya.
*1288'de bu coğrafyaların çoğu için tarihî yerleşim verisi ya yoktur ya çok azdır.*

### Bir coğrafya fazının iş akışı (her faz için aynen tekrarlanır)

1. **Devlet listesi** — o bölgenin devletleri `devletler.js`'e girer *(Oturum 3)*
2. **Yerleşim listesi** — `yerlesimler_<bolge>.js` yazılır *(Oturum 4)*
3. **Yoğunluk kabulü** — `MIMARI.md` §5'teki kapsama testi geçilir
4. **Kutu açılır** — `BOLGE` genişletilir, üretim koşulur *(Oturum 0)*
5. **Değişmez denetimi** — `CLAUDE.md` §3'teki üç denetim temiz çıkmalı
6. **Görsel doğrulama** — kullanıcı haritaya bakar; bulduğu hatalar sonraki turun girdisi
7. **Kronoloji** — o bölgenin devlet kronolojileri başlık düzeyinde yazılır

**Adım 4, adım 3 geçilmeden yapılmaz.** Kutuyu erken açmak, mevcut peteklerin boş
coğrafyaya yayılması demektir.

---

## Eksen 3 — Devletler ve kronolojileri

**Önce kapsam, sonra derinlik.** 300 devletin başlık kronolojisi, 40 devletin
ayrıntılı kronolojisinden kıymetlidir.

| Aşama | Nedir | Durum |
|---|---|---|
| **D-1** | Devlet listesi: id, ad, tür, aralık, başkent, özet | 77 kayıt → dünya |
| **D-2** | Başlık düzeyinde kronoloji: kuruluş, dönüm noktaları, son | Osmanlı tam |
| **D-3** | Madde sayısının artırılması — her devlet için daha yoğun başlık | ⏸ |
| **D-4** | Başlıkların içinin doldurulması — gün/yer/kişiler + anlatım + kaynak | ⏸ |

D-4'e, D-2 bir bölge için **tamamlanmadan** geçilmez. Görev tanımı:
`oturumlar/OTURUM-3-DEVLETLER.md`.

### Çözülmesi gereken: dizin ↔ harita kimlik ayrışması
Devlet kimliği iki yerde tutuluyor ve ikisi birbirini tutmuyor:
`data/devletler.js` (**77 kayıt**) ile `uret_petek.py` içindeki `BOYALAR` (**97
kayıt**). Dizinde `habsburg` / haritada `avusturya`, dizinde `cenova` / haritada
`ceneviz`, dizinde `yemen-zeydi` / haritada `yemen`… Haritada olup dizinde hiç
karşılığı olmayan **53 devlet** var. Çözüm: `devletler.js` kayıtlarına
`harita:"<BOYALAR id>"` alanı; mevcut `id`'ler değiştirilmez.

---

## Eksen 4 — Konu başlıkları

Atlas bugün **tek bir konuyu** anlatıyor: devletler ve sınırları. Diğer başlıklar
sıraya alınmıştır ve **hiçbiri şu anda kapsamda değildir.**

| Faz | Konu | Durum |
|---|---|---|
| **K-1** | **Devletler ve sınırlar** | ✅ **tek aktif konu** |
| K-2 | Askerî yapı — ordu düzeni, kale hatları, menzil yolları, seferler | ⏸ kısmen (SEFERLER) |
| K-3 | Siyaset ve idare — eyalet düzeni, kurumlar, antlaşma rejimleri | ⏸ |
| K-4 | Sosyal ve iktisadi yapı — nüfus, ticaret yolları, üretim, vergi | ⏸ |
| K-5 | Bilim ve teknoloji | ⏸ |
| K-6 | Kültür, sanat, mimari | ⏸ |
| K-7 | Din ve felsefe | ⏸ |

Bir konu fazı açıldığında hem veri katmanı hem arayüz katmanı gerekir; bu yüzden
her biri kendi başına bir projedir. **Erken açılmaz.**

---

## Eksen 5 — Şahıslar

Bugün `data/kisiler.js`'te 90 kayıt var (sadrazam, paşa, komutan, denizci, yabancı
hükümdar) ve 41 padişah kaydı portreleriyle duruyor. Bu, Osmanlı anlatısını
desteklemek için yeterlidir.

| Faz | Kapsam | Durum |
|---|---|---|
| **S-1** | Osmanlı devlet adamları ve komutanları | ✅ 90 kayıt |
| S-2 | Dünya hükümdarları — Eksen 3'teki devletlerin başındakiler | ⏸ |
| S-3 | Sanatçılar, filozoflar, bilim insanları ve maddeleri | ⏸ **şimdilik gerek yok** |

S-3 açıkça ertelenmiştir. S-2, Eksen 3'ün D-2 aşaması dünya kapsamında
tamamlandıktan sonra anlamlı hâle gelir.

---

## Eksen bağımlılıkları

```
Eksen 1 (zaman) ──┐
                  ├──> Eksen 2 (coğrafya) ──> Eksen 4 (konular)
Motor işleri ─────┘         │
                            v
                       Eksen 3 (devletler) ──> Eksen 5 (şahıslar)
```

- **Motor işleri** (`MIMARI.md` §3) Eksen 2'nin ön koşuludur — dördü de Faz C-B'den
  önce bitmeli.
- **Eksen 3, Eksen 2'den bağımsız ilerleyebilir**: devlet listesi yazmak haritayı
  etkilemez. Bu yüzden Oturum 3 hemen başlayabilir.
- **Eksen 4 ve 5** en son gelir; ikisi de Eksen 2 ve 3 olgunlaşmadan açılmaz.

---

## Bilinen riskler

- **Çıktı boyutu** (`MIMARI.md` §3.2) — çözülmezse dünya kapsamı teknik olarak
  imkânsız. Çözüm ikili: geometri tekrarının kaldırılması (§3.2) + **devlet merkezli
  parçalı yükleme** (§6.5). İkincisi olmadan birincisi tek başına yetmez.
- **Üretim süresi** — bugün ~15 dakika. Zaman dilimli Voronoi ve 8 kat yerleşim bunu
  saatlere çıkarabilir; epok bazlı önbellek gerekebilir.
- **Kaynak dengesizliği** — Avrupa ve İslâm dünyası için gün hassasiyetli veri var;
  Sahra altı Afrika ve Amerika için on yıl hassasiyeti bile zor. Farklı hassasiyetleri
  aynı zaman çubuğunda göstermek yanıltıcı olabilir; arayüzde belirtilmesi düşünülmeli.
- **Kapsam kayması** — Eksen 4 ve 5'in erken açılması en olası kayma yönüdür.
- **Ad ve kimlik** — site "Osmanlı Tarih Atlası" adıyla yayında; dünya kapsamı
  olgunlaştığında ad, ana sayfa metni ve varsayılan görünüm yeniden düşünülmeli.
