# ARAYÜZ 2 — sekiz madde, hepsi kullanıcının kendi paketinden

**Model: Sonnet.** Ölçüm değil uygulama işi; karar zaten verildi.

## 🔴 AÇILIŞ — yalnız bunlar, başka hiçbir şey

```
① bu dosya (baştan sona)
② CLAUDE.md  §7 dosya sahipliği
③ ONCELIK.md §2 altı bütçe kuralı
```

⚠️ **`/claudemre-basla` ÇALIŞTIRMA.** O komut koordinatör komutudur;
oturuma *"sen bu projenin koordinatörüsün"* der ve çekirdek + yasalar +
proje arşivini yükler. İşçi oturumda iki zararı birden olur: oturum
kendini koordinatör sanıp iş dağıtmaya kalkar, ve ihtiyacı olmayan
onlarca sayfa boşuna okunur (`ONCELIK.md` §1).
📌 **Senin açılışın bu dosyadır.** Koordinatör Oturum 0'dır, o da açık.

## 🔴 YAZMA YETKİN — yalnız bunlar

```
js/app.js · index.html · css/style.css
```
Başka hiçbir dosyaya yazma. Özellikle **`data/` altına ASLA** — motor şu
anda koşuyor. Senin dosyaların motor girdisi değil, o yüzden **koşuyu
beklemene gerek yok, hemen başla.**

⚠️ `index.html` **CRLF** satır sonlu. Düzenlerken bozma.
⚠️ Commit ve push **yalnız Oturum 0'dan** yapılır. Bitince "hazır" de.

## Bağlayıcı kurallar

- `CLAUDE.md` §7 (dosya sahipliği) ve `ONCELIK.md` (bütçe) senin için de geçerli.
- **Bulamadığını `bulunamadı` diye yaz.** Negatif sonuç da sonuçtur.
- Ölçmeden "düzeltildi" deme: değişikliği **tarayıcıda gör**, sonra söyle
  (`YASALAR F5` — "yazdım" ile "göründü" ayrı olaylardır).

---

## SEKİZ MADDE

### `p2/H-0007` — gereksiz metin  🟢 EN KOLAY, ÖNCE BUNU
> *"'Sınırlar akademik atlas verisine dayalıdır, yaklaşıktır, doğrulama
> sürüyor' diye metin var, buna gerek yok."*

Sil. Tek satır.

### `p2/H-0008` — Edirne'de çift sembol
> *"Edirne için hem yıldız hem kırmızı yuvarlak gösterimi var, bir tane
> olmalı noktasal olarak. Diğerinin anlamı nedir?"*

Önce **ölç**: iki sembolü çizen kod nerede, ikisi ne anlatıyor? Muhtemelen
biri başkent yıldızı, biri yerleşim noktası. İkisi aynı noktada üst üste
biniyorsa **biri bastırılmalı** — yıldız varken normal nokta çizilmez.
📌 Cevabı `p2/H-0017` ve `p2/H-0021` ile birlikte kullanacaksın (lejant).

### `p2/H-0017` + `p2/H-0021` — semboller anlaşılmıyor  ⇒ TEK İŞ
> *"Dimetoka'nın oradaki sembol tam olarak ne anlama geliyor?"*
> *"Bu sarı gösterim, sarı semboller tam olarak nedir, bana açıkla."*

🔴 Bu iki madde bir **eksik özelliği** işaret ediyor: **lejant yok.**
Haritada kullanılan her sembolün ne olduğunu gösteren küçük bir panel
yap. İçeriği koddan **ölçerek** çıkar (hangi semboller hangi koşulda
çiziliyor) — tahminle liste yazma.

### `p3/H-0002` — etiketler üst üste
> *"Niğbolu seferinde metinler, semboller üst üste binmiş, okunmuyor."*

Etiket çakışma çözümü. En ucuz yol: yakınlaştırmaya göre etiket eleme
(zaten `g:` görünürlük kademesi var, `VERI-YAPISI.md:31`). Önce onun
bugün nasıl kullanıldığını ölç.

### `p2/H-0006` — kronoloji sütunu kapanabilsin
> *"Sağdaki kronoloji indeksi penceresi kapatılabilir ve tam ekran harita
> bakılabilir olmalı. Eğer bu sütun kapatılırsa kronoloji başlığı
> haritanın en altında bir metin olarak görünsün — sene, tarih ve olay
> başlığı metniyle beraber."*

İki parça: ① sütunu kapat/aç ② kapalıyken altta tek satır şerit.

### `p2/H-0010` — üst çubuk yeniden düzeni  🔴 EN BÜYÜĞÜ, EN SONA
> *"Hakkında butonuna artık gerek yok. Buradaki butonları tek bir
> 'butonları aç' butonuna tıklanınca dizilecek şekilde saklayalım.
> İmparatorluk combobox'ını da üst çubuğa alalım."*

Kullanıcının tarif ettiği düzen, **soldan sağa**:
```
[butonları aç] │ tarih + kronoloji başlığı (ORTA) │ [bölge combobox] │ YIL
                                                                      ↑
                                        en sağda KOCAMAN, kalın, vurgulu
```
Ve *"ondan sonra Osmanlı Tarih Atlası yazısı olsun."*
⚠️ Bu madde ötekilerden büyük. **Diğer yedisi bitmeden başlama.**

### `p2/H-0024` — eyalet/sancak simgeleri  🔵 BEKLET, HENÜZ YAPMA
> *"Başkent yıldız olsun demiştik, ayrıca eyalet merkezleri de ayrı bir
> simge ile görünsün, vilayet merkezleri ya da sancaklar da ayrı bir
> gösterimle. Eyalet merkezine tıklanınca kapsadığı alan kısa bir an
> parlasın ve sönsün; basılı tutulursa parlak vaziyette kalsın ve
> üstünde 'Anadolu Eyaleti' yazan bir metin görünsün."*

🔴 **BU MADDEYİ ŞİMDİ YAPMA.** Sebebi: `YAPILACAKLAR.md` başındaki
**İDARÎ KATMAN** şartnamesi henüz veriye işlenmedi — bugün `k:1` yalnız
**4 noktada** var ve hangisinin eyalet hangisinin sancak olduğu belli
değil. Simge çizersen **yanlış veriyi** çizersin.
⇒ Yapman gereken: **parlama/vurgu mekanizmasını** hazırla (`bolgeler.js`
zaten sınırları taşıyor, 63 bölge). Simge ayrımını veri gelince bağlarız.

---

## SIRA

```
① H-0007  sil                       (dakikalar)
② H-0008  çift sembolü ölç ve çöz
③ H-0017 + H-0021  LEJANT paneli    (ikisi tek iş)
④ H-0002  etiket çakışması
⑤ H-0006  kronoloji sütunu kapansın
⑥ H-0024  yalnız PARLAMA mekanizması, simge YOK
⑦ H-0010  üst çubuk                 (en son, en büyük)
```

## Bitince

Her madde için tek satır yaz: **ne değişti · hangi dosya:satır · tarayıcıda
gördün mü.** Oturum 0 bunu `parti-0002/CEVAP.json` ve `parti-0003/
CEVAP.json` içine hüküm olarak işleyecek (`cozuldu` + commit).
