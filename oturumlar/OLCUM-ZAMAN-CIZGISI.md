# ÖLÇÜM — zaman çizgisi (yüzyıl görünümü / çizgide zoom)

**Ölçen:** ARAYÜZ (A) · **31 Temmuz 2026** · **Uygulama YAPILMADI** — üç sınav
kapanmadan başlamıyor (koordinatörün sıra bağı)

> Kullanıcı: *"Tarih çizgisini güzel, pratik kullanabileceğimiz bir yapıya
> getirebiliriz. Yüzyılları içine alan veya çizgide zoom yaparak belli 50 yıl
> arasını görüntüleyebileceğimiz bir alan."*

---

## 1. ZAMAN DAĞILIMI — on yıllık dilimlerde

```
994 madde · 1280-1920 arası 65 on-yıllık dilim
  HİÇ MADDESİ OLMAYAN dilim :  0        ← hiç boşluk yok
  3 maddeden az             :  3
  en az 1 · medyan 14 · en çok 57
en yoğun: 1910'lar 57 · 1510'lar 47 · 1830'lar 47 · 1820'ler 35
```

🔴 **Önceki endişe bir kez daha düştü.** 50 yıllık dilimlerde 28,8 kat
dengesizlik ölçmüştük ve *"süzgeç açılınca bazı dönemler boşalır"* diye
korkuluyordu; **on yıllık çözünürlükte bile boş dilim yok.** Yani yoğunluk
göstergesi **her yerde bir şey gösterebilir** — hiçbir kademede "burada hiçbir
şey yok" demek zorunda kalmıyoruz.

⇒ Yoğunluk şeridi **on yıllık** çözünürlükte kurulabilir; 50 yıl kaba kalır
(65 dilim yerine 14 dilim, ve 1910'ların yoğunluğu 1900'lerinkiyle karışır).

---

## 2. 🔴 BUGÜNKÜ ÇUBUĞUN ÇÖZÜNÜRLÜĞÜ — asıl bulgu

```
aralık        1281-01-01 → 1923-10-29  =  234.785 gün  (643 yıl)
çubuk         <input type=range id=zaman>, CSS: flex: 1 1 auto
              yani genişliği ekrana göre değişiyor (~600-1200 px)

  600 px  →  1 px = 391 gün (1,07 yıl)
  900 px  →  1 px = 261 gün (0,71 yıl)
 1200 px  →  1 px = 196 gün (0,54 yıl)

994 madde / 234.785 gün  →  ortalama madde aralığı  236 gün
```

> ### ⇒ **1 PİKSEL ≈ 1 KRONOLOJİ MADDESİ**
> 900 px'lik bir çubukta bir piksellik hareket **ortalama bir maddeyi
> atlıyor.** Yani çubukla belirli bir olayı seçmek **fiilen imkânsız**;
> kullanıcı ancak "olay olay" düğmeleriyle gezinebiliyor. Çubuk bir seçici
> değil, kaba bir sürükleyici.

📌 **Ve kullanıcının kendi sayısı aritmetiği doğruluyor:** *"belli 50 yıl
arası"* dedi. 50 yıllık pencere = 18.262 gün; 900 px'te **1 px = 20 gün**,
yani madde başına **~12 piksel**. Tıklanabilir hâle tam orada geliyor.
Sezgisi ile gereken büyütme oranı birbirini tutuyor — tasarımın çapası bu.

---

## 3. ZOOM YAPILINCA NE KAYBOLUR

Bugün çubukta konum bilgisi **iki yerde**: `tarihGoster` (tam tarih metni) ve
`donemEtiketi` (dönem adı). İkisi de **anlık** — "nerede olduğumu" söylüyor,
**"neyin neresindeyim"i** söylemiyor.

Tam aralık görünürken bu yetiyor, çünkü çubuğun kendisi bağlamı veriyor:
sapın konumu = 643 yılın neresi. **Zoom açılınca o bağlam kaybolur** ve geriye
yalnız bir tarih metni kalır.

⇒ Zoom tasarımının **zorunlu** parçası: daraltılmış pencerenin tam aralık
içinde nerede durduğunu gösteren bir **genel görünüm şeridi**. Yoksa kullanıcı
yakınlaşır ve kaybolur.

---

## 4. TASARIM ÖNERİSİ — ölçümden sonra

**Üç parça, hepsi tek satırda:**

```
┌──────────────────────────────────────────────────────────┐
│ ▁▂▃▁▁▂▅▃▂▁▂▃▇▄▃▂▁▃▅▂  ← yoğunluk şeridi (on yıllık, 65 dilim)
│         └──────┘        ← pencere göstergesi (zoom açıkken)
├──────────────────────────────────────────────────────────┤
│ ◀ ▶  [══════●═══════]  1453  ← mevcut çubuk, pencereye göre
└──────────────────────────────────────────────────────────┘
```

1. **Yoğunluk şeridi** — 65 on-yıllık dilim, yükseklik = madde sayısı.
   Süzgeç açıkken **süzülmüş** sayıyı da gösterir (soluk = tüm, koyu = süzülmüş).
   📌 Bu, süzgeçle zaman çizgisini birbirine bağlayan tek yer.
2. **Pencere göstergesi** — zoom açıkken hangi aralıkta olduğumuz; §3'ün cevabı.
3. **Çubuk** — aynı `<input type=range>`, ama `min`/`max` pencereye göre
   daralıyor. Böylece 1 px = 20 gün olur ve madde tıklanabilir hâle gelir.

### Mantık katmanı ayrılıyor — süzgeçteki gibi
`js/zaman.js` (DOM'suz): dilim hesabı · yoğunluk dizisi · pencere aralığı ·
"şu güne hangi dilim düşer". Node'da gerçek veriyle sınanabilir; tarayıcıda
kalan yalnız çizim.
⚠️ Süzgeçte bu yöntem 20 sağlamayı tarayıcısız geçirmişti; aynı ayrım burada
da kuruluyor.

---

## 5. ÖLÇÜLEMEYEN

- Çubuğun **gerçek piksel genişliği** (CSS `flex: 1 1 auto`, ekrana bağlı).
  Hesaplar 600/900/1200 px için ayrı ayrı verildi; hangisinin geçerli olduğu
  tarayıcıda ölçülür.
- Dokunmatik/ince ayar davranışı.
📌 Bu oturumun paneli gizli (`visibilityState: "hidden"` → `requestAnimationFrame`
hiç ateşlemiyor), tarayıcı ölçümü yapılamıyor.
