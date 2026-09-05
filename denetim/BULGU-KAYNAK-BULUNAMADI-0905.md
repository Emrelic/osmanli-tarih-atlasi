# BULGU — `kaynak: "bulunamadı"` damgası: **iki yanlış, ve oranın ölçülemeyen yarısı**

> **Oturum:** KÜRE GÖRÜNÜM · **Sevk:** `M-2885 ⑤` · **Tarih:** 5 Eylül 2026
> **Cins:** ÖLÇÜM + ÖNERİ — *veri yazılmadı; `kaynak:` alanları için metin
> ÖNERİLDİ, hüküm verilmedi.*

---

## 0. 🔴 SINIRLARI ÖNCE YAZIYORUM — ÜÇ TANE

```
① İKİ VAKA BİR ORAN VERMEZ. Aşağıdaki 2 doğrulanmış yanlış damga,
   263'lük evren hakkında bir yüzde İDDİA ETMİYOR.
② TESTİM TEK YÖNLÜDÜR: yalnız YANLIŞ damgayı bulabilir, DOĞRU damgayı
   KANITLAYAMAZ. Bir `302`, "TDV'de bu konu yok" demek DEĞİL — "bu SLUG
   yok" demektir (`§4`: `hurmuz` ölü ama `hurmuz--iran` canlı).
   ⇒ Ölçülen oran bir ALT SINIRDIR.
③ Ve testin ERİŞİMİ dar: yalnız künye `id`sine EŞİT sluglar sınandı.
   `§4`ün yazım ekseni (`Migiurtinia` ↔ `Mâcerteyn`) tam bu testin
   KÖR NOKTASI — ve onu genişletme denemem ÇÜRÜDÜ (§4'te).
```

---

## 1. ① İKİ VAKA — adıyla, gövdesiyle, yanlışıyla

Her ikisinin de `kaynak:` alanı **birebir aynı** metni taşıyor:
```
"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak"
```

### 🔴 VAKA 1 — `mogolistan` (Moğolistan · Bogd Hanlık)

| | |
|---|---|
| slug | `islamansiklopedisi.org.tr/mogolistan` |
| HTTP | **200** |
| ham gövde | **117.538** karakter · metin 22.462 karakter |

**Künye YALNIZ `kaynak:`te değil, `ozet:`te de bir iddia taşıyor:**
> *"⚠️ TDV'nin `mogolistan` maddesi Çağatay sonrası MOĞULİSTAN'ı anlatır,
> modern Moğolistan'ı değil."*

**Ölçüm — o uyarı çürüdü:**
```
"Çağatay"    gövdede  0 kez
"Moğulistan" gövdede  0 kez
```
Gövde **modern Moğolistan'ı** anlatıyor, ve künyenin ihtiyaç duyduğu her
kırılmayı veriyor:
```
"…Mançu Qing hânedanının 1911'de yıkılışına kadar devam etti."
"…bağımsızlıklarını ilân ettilerse de … ancak özerklik elde
  edebildiler (18 Kasım 1911)."
"Ekim 1918'de bölgeye ulaşan bir Çin ordusu 1919'da Urga'yı (bugünkü
  Ulan Batur) ele geçirip özerkliğe son verdi…"
"…Baron von Ungern-Sternberg'in Şubat 1921'de Urga'yı kuşatarak…"
"Mart 1921'de Moğol Halk Partisi kuruldu."
"…Cebtsun Damba Hutuhtu'nun ölümünden sonra 26 Kasım 1924'te
  Moğolistan Halk Cumhuriyeti ilân edildi."
```
⇒ **Damganın yanlış söylediği:** *"müstakil maddesi yok"* — **var**, ve
konu **doğru**. Ve künyenin `ozet`indeki uyarı da yanlış.

### 🔴 VAKA 2 — `somali` (Somali Sultanlıkları)

| | |
|---|---|
| slug | `islamansiklopedisi.org.tr/somali` |
| HTTP | **200** |
| ham gövde | **128.301** karakter · metin 29.337 karakter |

**Ölçüm — madde var ve künyenin tam konusunu kapsıyor:**
```
"Somali'nin kuzeyinde hüküm süren Mâcerteyn Sultanlığı XIX. …"
"Ülkenin iç kısımlarında hüküm süren Mâcerteyn ve Obbia emirliklerine
  ait topraklar ise 1927'de İtalyanlar tarafından işgal edildi."
"2 Mart 1891'de İngilizler'in İtalyanlar'la anlaşmasının ardından
  Somali'nin güney sahilindeki Berâve ve Merkâ … İtalyanlar'ın elinde kaldı."
```
Künyenin `ozet`i *"20. yüzyıl başında İtalyan sömürgeciliğiyle sona
erdi"* diyor ama **tarih vermiyordu**; TDV veriyor: **1927.**
⇒ **Damganın yanlış söylediği:** *"müstakil maddesi yok"* — **var.**

### 🔵 NİÇİN KAÇIRILDIĞI — bir TAHMİN, ölçmedim
`somali` künyesi sultanlıkları **`Migiurtinia` ve `Hobyo`** diye yazıyor;
TDV **`Mâcerteyn` ve `Obbia`** diyor. Künyenin kendi yazımıyla yapılan
bir gövde araması hiçbir şey bulmaz. `§4`ün **Türkçe yazım ekseni**.
⚠️ Ama o aramanın nasıl yapıldığını **ÖLÇMEDİM** — bu bir tahmindir.

---

## 2. ② DÜZELTME ÖNERİSİ — *metin, hüküm değil*

```
mogolistan
  kaynak:  "bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart
            akademik kaynak"
        → "mogolistan"
  ozet:    ⚠️ AYRICA — "TDV'nin `mogolistan` maddesi Çağatay sonrası
            MOĞULİSTAN'ı anlatır, modern Moğolistan'ı değil" cümlesi
            ÇIKARILMALI. Ölçüldü, yanlış.

somali
  kaynak:  (aynı metin)  →  "somali"
```
⚠️ Bu iki kalem `ONERI-SOZLESME-5-0905.json`daki **beyan** işinden
AYRIDIR ve ondan **önceliklidir**: yanlış damga durdukça o iki künye
*"araştırıldı ve bulunamadı"* görünmeye devam eder.

---

## 3. ③ EVREN — ve oran sorusu

```
künye toplam                              591
`kaynak:` alanı olan                      591   (%100)
`kaynak:` "bulunamadı" ile BAŞLAYAN       263   (%44,5)
```

**Gerekçe kalıpları — ve kova ikiye ayrılıyor:**
```
140  "TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak"
      ← JENERİK · kaynak ADI YOK · SINANABİLİR
 ~35  "Handbook of North American Indians c.5/6/7/10/11/12/13/14/15
      (Smithsonian Institution)" ve benzerleri
      ← kaynak ADIYLA yazılı · bu bir "bulunamadı" DEĞİL, bir
        "TDV yok, dayanağım ŞU" beyanı. AYRI SINIF.
```
🔴 **Ve iki doğrulanmış yanlışın ikisi de 140'lık JENERİK kovadan.**

**Bölge dağılımı (263):**
```
kuzey-amerika 46 · bati-afrika 36 · guneydogu-asya 35 · guney-asya 29 ·
dogu-afrika 18 · orta-afrika 17 · dogu-asya 15 · guney-afrika 13 ·
dogu-avrupa 12 · italya 10 · bati-avrupa 6 · kafkasya 3
```

---

## 4. ÖLÇÜM — ve **yarısı çürüdü**

### (A) ID-SLUG TESTİ — 20 künye, `random.Random(20260905)` ile 140'tan
Her künye için künye `id`si ve makul sadeleştirmeleri (`-sultanligi`,
`-kralligi`, … ekleri atılmış hâlleri, adın ilk kelimesi) HTTP ile
denendi.
```
burgonya · ryazan · karnatik · nayak-devletleri · izlanda ·
norvec-kralligi · svahili-sehirleri · kaffa-kralligi · piza · kuba ·
sih-imparatorlugu · zaporojye · merina ·
ermenistan-demokratik-cumhuriyeti · pskov · buganda · poni ·
lunda-imparatorlugu · surakarta · letonya

200 DÖNEN aday bulunan künye:  0 / 20
```

### 🟢 VE TESTİN ÇALIŞTIĞINI GÖSTERDİM — pozitif kontrol
`0/20` tek başına *"test bozuk"* da olabilirdi (`C13` ateşleme yolu).
Bilinen iki yanlışa aynı test uygulandı:
```
mogolistan   id slug → 200   ✓ YAKALAR
somali       id slug → 200   ✓ YAKALAR
```
⇒ **Test kusuru görebiliyor ve örneklemde görmedi.** `0/20` gerçek.

### 🔴 (B) ARAMA İLE GENİŞLETME — **ÇÜRÜDÜ, "0" DEĞİL "ÖLÇÜLEMEDİ"**

Testin kör noktası (`id` ≠ TDV slug) `§4`ün önerdiği yolla
kapatılacaktı: `islamansiklopedisi.org.tr/arama/?q=<kelime>`. Aynı 20
künye adıyla soruldu ve **20'sinde de 0 sonuç** çıktı.

🔴 **O sayıyı RAPOR ETMEDİM, çünkü önce aletten şüphelendim** (`§11`:
*"aynı sayı tekrar ederse ilk şüphelenilecek şey aletin kendini
tekrarlamasıdır"*). Bilinen maddelerle pozitif kontrol koşuldu:
```
q=Somali      48.898 bayt döndü · sonuç slug 0 · "somali" gövdede YOK
q=Yemen       56.860 bayt · slug 10 ama HEPSİ ALAKASIZ (ibn-havseb ·
              kadiriyye · kesful-muskil) · "yemen" YOK
q=Moğolistan     90 BAYT ← Türkçe karakter isteği tamamen kırmış
```
⇒ **Arama sonuçları statik HTML'de gelmiyor** (ve Türkçe sorgu ayrıca
kırılıyor). Alet, *bulunması gerekeni* bulamadı.
⇒ **(B) `ÖLÇÜLEMEDİ` kovasına girer, `0` kovasına DEĞİL.**
📌 Raporlansaydı, damgaların doğruluğuna dair **sahte bir teyit**
üretecekti — `§11`: *"`0`, 'yok' ile 'bakmadım' arasında ayrım yapmaz."*

---

## 5. ⇒ ORAN HAKKINDA SÖYLENEBİLECEK OLAN

```
DOĞRULANMIŞ YANLIŞ           2 / 140   = %1,4   ← bir ALT SINIR
ID-SLUG testi, 20'lik örneklem  0 / 20
   üçler kuralı ⇒ %95 üst sınır ≈ 3/20 = %15
```
⇒ **Söylenebilecek olan:** *jenerik kovadaki yanlış damga oranı en az
%1,4; id-slug ile görülebilen kısmı için %15'in üstünde olması
örneklemle bağdaşmaz.*
🔴 **Söylenemeyecek olan:** kovanın **temiz** olduğu. Testin göremediği
sınıf (`id` ≠ slug) hiç ölçülmedi ve `§4` o sınıfın **büyük** olduğunu
söylüyor — bu belgede adıyla kayıtlı onlarca vaka var
(`hurmuz`→`hurmuz--iran` · `incular`→`incu` · `ordu`→`ordu--sehir`).

---

## 6. DAMGALAR

```
🟢 ÖLÇTÜM      263/591 künye (%44,5) `kaynak:` "bulunamadı" ile başlıyor;
               140'ı JENERİK gerekçeli (sınanabilir), ~35'i kaynağını
               ADIYLA yazıyor (ayrı sınıf)
🟢 ÖLÇTÜM      mogolistan 200 · 117.538 kar. · "Çağatay"/"Moğulistan" 0 kez
               somali     200 · 128.301 kar. · Mâcerteyn/Obbia 1927
🔴 ÇÜRÜTTÜM    iki `kaynak:` damgası VE mogolistan'ın `ozet` uyarısı
🟢 SINADIM     kendi testimin ATEŞLEME yolunu — bilinen iki vakayı
               yakalıyor ⇒ 0/20 gerçek bir ölçüm
⚪ ÖLÇÜLEMEDİ  arama ile genişletme — endpoint statik HTML'de sonuç
               vermiyor, Türkçe sorgu 90 bayt dönüyor. "0" DİYE
               RAPORLAMADIM.
⚪ ÖLÇMEDİM    `id` ≠ slug sınıfını (testin kör noktası) — `§4`e göre
               BÜYÜK bir sınıf, ve bu belgenin ana boşluğu
⚪ ÖLÇMEDİM    iki yanlış damganın NİÇİN konulduğunu — yazım ekseni bir
               TAHMİN
⚪ ÖLÇMEDİM    ~35'lik "Smithsonian" sınıfının doğruluğunu — o kayıtlar
               kaynağını adıyla yazıyor, ayrı bir sınav ister
🔵 OKUMADIM    iki gövdenin TAMAMINI — anahtar kelime çevresi okundu
🔴 YAZMADIM    hiçbir `kaynak:` alanını. Bu dosya bir ÖNERİDİR.
```

---

## 7. TESLİM — sayıyla

```
① İKİ VAKA   mogolistan · somali — ikisi de 200, ikisi de DOĞRU konu,
             ikisinin de `kaynak:`ı "TDV'de müstakil maddesi yok" diyor
             ve mogolistan'ın `ozet`i ayrıca YANLIŞ bir uyarı taşıyor
② ÖNERİ      kaynak: → "mogolistan" / "somali" · ozet uyarısı ÇIKARILSIN
             (beyan işinden AYRI ve ondan ÖNCELİKLİ)
③ EVREN      263/591 (%44,5) · jenerik kova 140 · iki vaka da ORADAN
④ ÖLÇÜM      id-slug testi 0/20 · pozitif kontrol GEÇTİ (test canlı)
             arama ile genişletme ÖLÇÜLEMEDİ (alet çürüdü, 0 diye
             raporlanmadı)
⑤ ORAN       ≥ %1,4 (alt sınır) · id-slug ile görülebilen kısım için
             %15 üst sınır · kovanın TEMİZ olduğu SÖYLENEMEZ
```
