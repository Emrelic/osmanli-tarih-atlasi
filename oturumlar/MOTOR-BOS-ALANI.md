# `bos:` — kaynaklı sahipsizlik alanı (tasarım)

**Yazan:** MOTOR (Oturum 16) · 1 Ağustos 2026
**Uygulayacak:** MOTOR — `arac/girdi.py`, `arac/uret_petek.py`
**Durum:** tasarım onaylandı, kod yazılmadı. Üretim koşusundan sonra uygulanacak.

---

## 1. Neden gerekiyor

Kızıldeniz kıyısında beş nokta — Sevâkin · Halâib · Akîk · Tokar · Sinkat —
**1517-04-13 ile 1554-04-10 arasında kimsenin değildi.**

- 1517-04-13'te Memlük Devleti sona erdi.
- TDV `habes-eyaleti`: bu kıyı toprakları 1517'de Memlükler'den **devralınmadı.**
- Osmanlı idaresi 1554'te Sevâkin sancak beyi tayiniyle başlıyor.
- Arada kalan ~37 yıl için ÇAPRAZ DOĞU araştırması bir hâkimiyet **bulamadı** ve
  bulamadığını kaynakla gösterdi: TDV `bece` boyların ayrı ayrı reislerle
  anıldığını, `sudan` maddesi bölgenin *"merkezî devlet yapılarından yoksun,
  resmî emirlik ya da beylik değil"* olduğunu söylüyor.

Bugün oraya **Osmanlı** yazılı ve yanlış. Yanlış yazılmasının sebebi kötü niyet
değil, **ifade edememek**:

> `Değişmez 1` sahipsiz nokta istemiyor, ve *"kimsenin değildi"* diye bir cevap
> yazılamıyor. Boşluğu Osmanlı'yı geriye uzatarak kapatmak, değişmezi yeşile
> döndürüyor ve haritayı yanlışlıyor.

Bu, motorun kendi kuralının ihlali (`uret_petek.py:1243`):

> ⚠️ **Yanlış renk boşluktan kötüdür:** boşluk "bilmiyoruz" der, yanlış renk
> "biliyoruz" der.

Kabile konfederasyonuna devlet rengi vermek, kaynağın tam da *"merkezî yapı
yoktu"* dediği yere renk yazmaktır.

---

## 2. Şema

```js
bos: [{ f: "1517-04-13", t: "1554-04-10", neden: "TDV bece + sudan: ..." }]
```

`d:` / `v:` / `s:` ile **aynı biçimde** bir dönem dizisi. Sebebi teknik:
bütün tüketiciler zaten dönem dizisi üzerinde dönüyor, `iR(y.bos, gün)`
yardımcısı hiç değişmeden çalışıyor, yeni kod yolu açılmıyor.

### `kasitli_bosluk` KALDIRILIYOR

Bugünkü `kasitli_bosluk: true` (kayıt düzeyi), kaydın ömrünü kaplayan tek bir
`bos:` penceresine göçürülür ve alan silinir. **İki gösterim tutulmaz** — iki
gösterim, ikisinin ayrışmasını beklemek demektir.

### Neden dizi, neden `kasitli_bosluk: [...]` DEĞİL

`uret_petek.py:1257` bugün şunu yazıyor:

```python
if y.get("kasitli_bosluk"): continue
```

**Boş olmayan bir liste de truthy'dir.** Alan polimorfik yapılırsa (bool ya da
liste) bu satır pencereli kaydı *"ömür boyu kasıtlı"* sayar — hata vermeden,
sessizce, istenenden fazlasına izin vererek. Alan adı değişince aynı satır
`None` alır ve yanlışlık **davranış değişikliği olarak görünür**.

> Sessiz aşırı-izin ile gürültülü kırılma arasında seçim yapıyoruz; ikincisi.

---

## 3. 🔴 En kritik şart: `bos:` OLUMLU İDDİADIR

Bir pencerede sahip yazmamak, orayı boş bırakmaz. **§2 emilmesi çalışır ve
bölge en yakın peteğin sahibiyle boyanır.**

⇒ `bos:` motorda **sahipsiz alan olarak rezerve edilmeli**. Aksi hâlde:

- veri *"kimsenin değildi"* der,
- harita *"Osmanlı'ydı"* der,
- ve çelişkiyi hiçbir denetim görmez.

Yani elle yapılan hatanın **motor eliyle otomatikleşmiş hâli** olur. Serbest
kenar mekanizması sahipsiz alanı zaten tanıyor (`SERBEST`, `SERBEST_U`);
`bos:` oraya bağlanır.

**Bu şart olmadan öteki dördü işe yaramaz.** Alan eklenir, denetim susar,
harita aynı yanlışı gösterir.

---

## 4. Denetim ve koruma

### 4.1 `Değişmez 1` sayacı İKİYE AYRILIR

```
sahipsiz (kaynaksız) N   ← gerçek delik, ötmeye devam eder
sahipsiz (kaynaklı)  M   ← bos: penceresi, ayrı sayılır
```

Tek sayıya karıştırılırsa **iyileşme sanrısı** doğar: kaynaklı boşluk yazıldıkça
sayı düşer, hiçbir şey düzelmemiştir. Bugün tam bu yaşandı.

⚠️ Ve **M'nin artışı da denetlenir.** "Kaynaklı" kutusu, çözülmemiş boşlukların
döküldüğü yer olabilir.

### 4.2 `neden:` ZORUNLU

Boşsa denetim öter. Bu alan, çözülmemiş her boşluğu *"kasten öyle"* diye
susturmakta kullanılabilir — kaynaksız sessizlik, sessiz başarısızlığın ta
kendisidir.

### 4.3 Her koşuda bütün `bos:` pencereleri ADIYLA BASILIR

Doğrulamadan güçlü olan şey **görünürlük**: kötüye kullanım herkesin gözü
önünde olduğu sürece pahalıdır. Beş satırlık bir liste, gizlenebilir bir
bayrak alanından iyidir.

### 4.4 `_kusatilmis()` O GÜNKÜ epoku sorar

Bugün `y.get("kasitli_bosluk")` ile kayıt düzeyinde atlıyor. Dizi olunca
`iR(y.get("bos"), gün)` sorulmalı — yoksa kuşatılmışlık devri, penceresi
dışındaki boşluğu yine yer.

---

## 5. Uygulama sırası

1. `girdi.py` alan sözlüğüne `bos:` kaydı + `kasitli_bosluk` kaldırılması
2. `uret_petek.py:1257` → `iR`-tabanlı epok sorgusu
3. `bos:` pencerelerinin sahipsiz alan olarak rezervi (§3 — asıl iş)
4. `Değişmez 1` sayacının ikiye ayrılması + `neden:` denetimi
5. Koşu çıktısına `bos:` penceresi dökümü
6. Mevcut `kasitli_bosluk: true` kayıtlarının göçürülmesi — **ölçüldü, 5 kayıt**:
   Vladikavkaz · Kuveyt · Doha (Katar) · Abu Dabi · Cetinje
   (`grep` 7 satır gösteriyor; ikisi yorum — biri alanın açıklaması, biri
   Köhne Ürgenç'te alanın KALDIRILDIĞINI anlatan not. Satır saymak kayıt
   saymak değildir.)

**Sınav:** Sevâkin · Halâib · Akîk · Tokar · Sinkat, 1517-1554 arasında
haritada **boş** görünmeli — komşusunun rengiyle değil. Ve `Değişmez 1`
"kaynaksız" sayacı **artmamalı**.
